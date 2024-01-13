import React, { useEffect, useState } from "react";
import Image from "next/image";

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
    if (!monsters) return;
    return monsters.map((monster: Monster) => {
      return (
        <li key={monster.id}>
          <button
            className="flex pl-2 gap-4 bg-blue-100 px-2 py-2 mb-2 text-lg w-full hover:bg-blue-300 hover:scale-x-110 justify-start items-center"
            onClick={() => onSelectMonster(monster.id)}
          >
            <Image
              src={getImagePath(monster.name)}
              alt={monster.name}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPclKtTDwAE8AHMqspRKgAAAABJRU5ErkJggg=="
              width={45}
              height={45}
            ></Image>
            <span>{monster.name}</span>
          </button>
        </li>
      );
    });
  }

  function getImagePath(name: string): string {
    const imagePath = "/images/monster-icons";
    name = name.replaceAll(" ", "_");
    name = name.toLowerCase();
    return `${imagePath}/${name}_icon.webp`;
  }
}

export default MonsterList;
