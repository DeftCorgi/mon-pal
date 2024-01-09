import React, { useEffect, useState } from "react";

type Monster = {
  id: number;
  name: string;
};

function MonsterList(props: {
  monsters: Monster[];
  onSelectMonster: (id: number) => void;
}) {
  const { monsters, onSelectMonster } = props;

  return (
    <div id="monster-list">
      <ul className="list-none">{renderMonsters()}</ul>
    </div>
  );

  function renderMonsters() {
    return monsters.map((monster: Monster) => {
      return (
        <li key={monster.id}>
          <button
            className="bg-blue-100 px-2 py-2 mb-2 text-lg w-full hover:bg-blue-300 hover:scale-x-110"
            onClick={() => onSelectMonster(monster.id)}
          >
            {monster.name}
          </button>
        </li>
      );
    });
  }
}

export default MonsterList;
