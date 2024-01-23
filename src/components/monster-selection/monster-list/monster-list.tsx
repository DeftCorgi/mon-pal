import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Monster = {
  id: number;
  name: string;
};

const MonsterList = React.memo(
  (props: { monsters: Monster[]; onSelectMonster: (id: number) => void }) => {
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
            <Link
              href={`/monsters/${monster.id}`}
              className="flex pl-2 gap-4 bg-blue-100 px-2 py-2 mb-2 text-lg w-full hover:bg-blue-300 hover:scale-x-110 justify-start items-center"
              // onClick={() => onSelectMonster(monster.id)}
            >
              <Image
                src={getImagePath(monster.name)}
                alt={monster.name}
                width={45}
                height={45}
                className="h-auto"
              ></Image>
              <span>{monster.name}</span>
            </Link>
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
);

MonsterList.displayName = "MonsterList";

export default MonsterList;
