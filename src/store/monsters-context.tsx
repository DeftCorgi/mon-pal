"use client";

import { ReactElement, useState } from "react";
import { createContext } from "react";

const MonstersContext = createContext({
  selectedMonster: -1,
  setSelectedMonster: (id: number) => {},
});

export function MonstersContextProvider(props: { children: ReactElement }) {
  const [selectedMonster, setSelectedMonster] = useState(-1);

  function setSelectedMonsterHandler(id: number) {
    setSelectedMonster(id);
  }

  const context = {
    selectedMonster,
    setSelectedMonster: setSelectedMonsterHandler,
  };
  return (
    <MonstersContext.Provider value={context}>
      {props.children}
    </MonstersContext.Provider>
  );
}

export default MonstersContext;
