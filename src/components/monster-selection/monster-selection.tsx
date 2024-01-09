"use client";

import React, { useContext, useEffect, useState } from "react";
import MonsterList from "../monster-list/monster-list";
import MonstersContext from "@/store/monsters-context";

function MonsterSelection(props: { largeMonsters: any; smallMonsters: any }) {
  const { largeMonsters, smallMonsters } = props;
  const monstersContext = useContext(MonstersContext);
  const [displayLarge, setDisplayLarge] = useState(true);

  const handleLargeClick = () => {
    setDisplayLarge(true);
  };

  const handleSmallClick = () => {
    setDisplayLarge(false);
  };

  const selectMonsterHandler = (id: number) => {
    if (monstersContext) {
      monstersContext.setSelectedMonster(id);
    }
  };

  return (
    <section className="flex flex-col md:basis-1/4">
      <div id="monster-list-tabs" className="flex mb-4">
        {/* LARGE MONSTERS TAB */}
        <input
          className="hidden"
          type="radio"
          name="monster-type"
          id="large"
          value="large"
        />
        <button onClick={handleLargeClick}>
          <label
            className={`inline-block py-4 px-2 cursor-pointer hover:bg-lightBlue hover:underline ${
              displayLarge && "bg-lightBlue underline"
            }`}
            htmlFor="large"
          >
            Large Monsters
          </label>
        </button>

        {/* SMALL MONSTERS TAB */}
        <input
          className="hidden"
          type="radio"
          name="monster-type"
          id="small"
          value="small"
        />
        <button onClick={handleSmallClick}>
          <label
            className={`inline-block py-4 px-2 cursor-pointer hover:bg-lightBlue hover:underline ${
              !displayLarge && "bg-lightBlue underline"
            }`}
            htmlFor="small"
          >
            Small Monsters
          </label>
        </button>
      </div>
      <MonsterList
        monsters={displayLarge ? largeMonsters : smallMonsters}
        onSelectMonster={selectMonsterHandler}
      ></MonsterList>
    </section>
  );
}

export default MonsterSelection;
