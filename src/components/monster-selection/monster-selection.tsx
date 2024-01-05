import React from "react";

function MonsterSelection() {
  return (
    <section className="flex flex-col md:basis-1/4">
      <div id="monster-list-tabs" className="flex">
        <input
          className="hidden"
          type="radio"
          name="monster-type"
          id="large"
          value="large"
        />
        <label
          className="inline-block py-4 px-2 cursor-pointer hover:bg-lightBlue hover:underline"
          htmlFor="large"
        >
          Large Monsters
        </label>
        <input
          className="hidden"
          type="radio"
          name="monster-type"
          id="small"
          value="small"
        />
        <label
          className="inline-block py-4 px-2 cursor-pointer hover:bg-lightBlue hover:underline"
          htmlFor="small"
        >
          Small Monsters
        </label>
      </div>
      <div id="monster-list"></div>
    </section>
  );
}

export default MonsterSelection;
