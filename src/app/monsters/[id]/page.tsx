import InfoPanel from "@/components/info-panel/info-panel";
import MonsterSelection from "@/components/monster-selection/monster-selection";

const API_ENDPOINT = process.env["API_ENDPOINT"] ?? "http://localhost:3000";

const fetchLargeMonsters = async () => {
  const result = await fetch(`${API_ENDPOINT}/api/monsters/large`);
  const json = await result.json();
  return json.monsters;
};

const fetchSmallMonsters = async () => {
  const result = await fetch(`${API_ENDPOINT}/api/monsters/small`);
  const json = await result.json();
  return json.monsters;
};

async function MonsterDetails() {
  const largeMonsters = await fetchLargeMonsters();
  const smallMonsters = await fetchSmallMonsters();

  return (
    <>
      <main className="container flex mx-auto gap-8 flex-col lg:flex-row">
        <MonsterSelection
          largeMonsters={largeMonsters}
          smallMonsters={smallMonsters}
        ></MonsterSelection>
        <InfoPanel></InfoPanel>
      </main>
    </>
  );
}

export default MonsterDetails;
