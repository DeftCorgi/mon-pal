import InfoPanel from "@/components/info-panel/info-panel";
import MonsterSelection from "@/components/monster-selection/monster-selection";

const fetchLargeMonsters = async () => {
  const result = await fetch("http://localhost:3000/api/monsters/large");
  const json = await result.json();
  return json.monsters;
};

const fetchSmallMonsters = async () => {
  const result = await fetch("http://localhost:3000/api/monsters/small");
  const json = await result.json();
  return json.monsters;
};

async function Home() {
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

export default Home;
