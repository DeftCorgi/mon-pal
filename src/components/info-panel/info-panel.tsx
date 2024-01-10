"use client";

import React, { useContext, useEffect, useState } from "react";
import MonstersContext from "@/store/monsters-context";
import { MonsterType, MonsterHitzoneType } from "../../../types/api/api";
import Icon from "./icon/icon";

function InfoPanel() {
  const [monsterInfo, setMonsterInfo] = useState<MonsterType>();
  const [hitzoneInfo, setHitzoneInfo] = useState<MonsterHitzoneType[]>();
  const monstersContext = useContext(MonstersContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (monstersContext.selectedMonster == -1) return;
    setLoading(true);
    const fetchMonsterInfo = async () => {
      const result = await fetch(
        "http://localhost:3000/api/monsters/" + monstersContext.selectedMonster
      );
      const json = await result.json();
      setMonsterInfo(json.monster);
      setHitzoneInfo(json.hitzones);
      setLoading(false);
    };

    fetchMonsterInfo();
  }, [monstersContext.selectedMonster]);

  const renderInfo = () => {
    return (
      <div className="flex flex-col gap-8">
        <h2 className="text-4xl">{monsterInfo?.monster_texts[0].name}</h2>
        <p className="text-4md">{monsterInfo?.monster_texts[0].description}</p>
        {renderHitzoneTable()}
      </div>
    );
  };

  const renderHitzoneTable = () => {
    const hitzoneRows = hitzoneInfo?.map((hitzone) => (
      <tr key={hitzone.id} className="border-b-2 border-red-200">
        <td className="text-right">{hitzone.monster_hitzone_texts[0].name}</td>
        <td className="text-center">{hitzone.cut}</td>
        <td className="text-center">{hitzone.impact}</td>
        <td className="text-center">{hitzone.shot}</td>

        <td className="text-center">{hitzone.fire}</td>
        <td className="text-center">{hitzone.water}</td>
        <td className="text-center">{hitzone.thunder}</td>
        <td className="text-center">{hitzone.ice}</td>
        <td className="text-center">{hitzone.dragon}</td>
        <td className="text-center">{hitzone.ko}</td>
      </tr>
    ));

    return (
      <table className="table-auto">
        <thead>
          <tr className="border-b-2 border-red-200">
            <th className="text-right">Part</th>
            <th>Cutting</th>
            <th>Impact</th>
            <th>Projectile</th>
            <th>
              <Icon src="/images/status-icons/fire_element_icon.png"></Icon>
            </th>
            <th>
              <Icon src="/images/status-icons/water_element_icon.png"></Icon>
            </th>
            <th>
              <Icon src="/images/status-icons/lightning_element_icon.png"></Icon>
            </th>
            <th>
              <Icon src="/images/status-icons/ice_element_icon.png"></Icon>
            </th>
            <th>
              <Icon src="/images/status-icons/dragon_element_icon.png"></Icon>
            </th>
            <th>
              <Icon src="/images/status-icons/stun_status_icon.png"></Icon>
            </th>
          </tr>
        </thead>
        <tbody>{hitzoneRows}</tbody>
      </table>
    );
  };

  return (
    <div className="md:basis-3/4 bg-slate-200 p-4">
      {loading && <span>Loading...</span>}
      {!loading && monsterInfo && renderInfo()}
    </div>
  );
}

export default InfoPanel;
