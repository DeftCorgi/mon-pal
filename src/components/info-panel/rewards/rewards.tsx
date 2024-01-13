import React from "react";
import { MonsterRewardType } from "../../../../types/api/api";

type propsType = {
  rewards: MonsterRewardType[];
};

function Rewards(props: propsType) {
  return (
    <section id="rewards">
      <h3 className="text-2xl">Rewards</h3>
      <div id="rank-selectors" className="flex">
        <div>LR</div>
        <div>HR</div>
        <div>MR</div>
      </div>
      <div id="rewards-columns" className="flex justify-between">
        <div>
          <span>Carves</span>
          <ul>
            {props.rewards.map((reward) => {
              return <li key={reward.id}>{reward.item.item_texts[0].name}</li>;
            })}
          </ul>
        </div>
        <div>
          <span>Rewards</span>
        </div>
        <div>
          <span>Investigations</span>
        </div>
      </div>
    </section>
  );
}

export default Rewards;
