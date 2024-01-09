"use client";

import React, { useContext, useEffect } from "react";
import MonstersContext from "@/store/monsters-context";

function InfoPanel() {
  const monstersContext = useContext(MonstersContext);

  useEffect(() => {
    console.log(monstersContext.selectedMonster); // This will log the updated value
  }, [monstersContext.selectedMonster]);

  return (
    <div className="md:basis-3/4 bg-red-500 p-4">
      {monstersContext && monstersContext.selectedMonster}
    </div>
  );
}

export default InfoPanel;
