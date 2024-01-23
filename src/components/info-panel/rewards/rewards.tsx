import React, { useEffect, useState } from "react";
import { MonsterRewardType } from "../../../../types/api/api";
import Image from "next/image";

type propsType = {
  rewards: MonsterRewardType[];
};

type RankType = "LR" | "HR" | "MR";
const ranks: RankType[] = ["LR", "HR", "MR"];
const carveConditionIds = [
  1, 2, 3, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
];
const breakConditionIds = Array.from({ length: 33 }, (_, index) => index + 4);
const investigationIds = [50, 51, 52];

function filterRank(rewards: MonsterRewardType[], rank: RankType) {
  return rewards.filter((reward) => reward.rank === rank.toUpperCase());
}

function Rewards(props: propsType) {
  const [displayRanks, setDisplayRanks] = useState<RankType[]>();
  const [rankSelection, setRankSelection] = useState<RankType>("MR");

  const [LRRewards, setLRRewards] = useState<MonsterRewardType[]>([]);
  const [HRRewards, setHRRewards] = useState<MonsterRewardType[]>([]);
  const [MRRewards, setMRRewards] = useState<MonsterRewardType[]>([]);

  const [rankRewards, setRankRewards] = useState<MonsterRewardType[]>([]);
  const [breakRewards, setBreakRewards] = useState<MonsterRewardType[]>([]);
  const [carveRewards, setCarvesRewards] = useState<MonsterRewardType[]>([]);
  const [investigationRewards, setInvestigationsRewards] = useState<
    MonsterRewardType[]
  >([]);

  // Find the ranks to display if there are existing entries
  useEffect(() => {
    const tempRanks: RankType[] = [];
    ranks.map((rank) => {
      if (filterRank(props.rewards, rank).length > 0) {
        tempRanks.push(rank);
        setRankSelection(rank);
      }
    });
    setDisplayRanks(tempRanks);
  }, [props]);

  // filter rewards based on selected rank
  useEffect(() => {
    setRankRewards(filterRank(props.rewards, rankSelection));
  }, [rankSelection, props]);

  // filter rank filtered rewards based on condition
  useEffect(() => {
    const carveRewards = rankRewards.filter((reward) =>
      carveConditionIds.includes(reward.condition_id)
    );
    setCarvesRewards(carveRewards);

    const investigationRewards = rankRewards.filter((reward) =>
      investigationIds.includes(reward.condition_id)
    );
    setInvestigationsRewards(investigationRewards);

    const breakRewards = rankRewards.filter((reward) =>
      breakConditionIds.includes(reward.condition_id)
    );
    setBreakRewards(breakRewards);
  }, [rankRewards]);

  function renderRewardsList(rewards: MonsterRewardType[]) {
    let condition = -1;

    return (
      <ul>
        {rewards.map((reward) => {
          // Print title of conditions
          let printTitle = false;
          if (condition != reward.condition_id) {
            condition = reward.condition_id;
            printTitle = true;
          }
          // print list items
          return (
            <>
              {printTitle && (
                <li className="font-bold mt-2">
                  {reward.monster_reward_condition_texts[0].name}
                </li>
              )}
              <li key={reward.id} className="pt-0.5 relative">
                <Image
                  src={`/images/material-icons/${reward.item.icon_name.toLowerCase()}_${reward.item.icon_color.toLowerCase()}.webp`}
                  alt={reward.item.item_texts[0].name}
                  width={27}
                  height={27}
                  className="inline-block bg-slate-800 mr-0.5"
                ></Image>
                <span className="inline-block leading-4 relative top-0.5">
                  {reward.item.item_texts[0].name} | {reward.percentage}%
                </span>
              </li>
            </>
          );
        })}
      </ul>
    );
  }

  return (
    <section id="rewards">
      <h3 className="text-2xl mb-2">Rewards</h3>
      <div id="rank-selectors" className="flex gap-5 mb-2">
        {ranks.map((rank) => {
          const button = (
            <button
              key={rank}
              onClick={() => setRankSelection(rank)}
              className={`p-5 ${
                rank == rankSelection ? "scale-110 bg-blue-300" : "bg-slate-300"
              }`}
            >
              {displayRanks?.includes(rank) && rank}
            </button>
          );
          return displayRanks?.includes(rank) && button;
        })}
      </div>
      <div
        id="rewards-columns"
        className="flex flex-col justify-between md:flex-row"
      >
        <div>
          {/* <span className="font-bold">Carves</span> */}
          {renderRewardsList(carveRewards)}
        </div>
        <div>
          {/* <span className="font-bold">Rewards</span> */}
          {renderRewardsList(breakRewards)}
        </div>
        <div>
          {/* <span className="font-bold">Investigations</span> */}
          {renderRewardsList(investigationRewards)}
        </div>
      </div>
    </section>
  );
}

export default Rewards;
