import InfoPanel from "@/components/info-panel/info-panel";
import MonsterSelection from "@/components/monster-selection/monster-selection";

const API_ENDPOINT = process.env["API_ENDPOINT"] ?? "http://localhost:3000";

const fetchLargeMonsters = async () => {
  console.log("FETCH started large", `${API_ENDPOINT}/api/monsters/large`);
  const result = await fetch(`${API_ENDPOINT}/api/monsters/large`);
  console.log("SSR large", result);
  const json = await result.json();
  return json.monsters;
};

const fetchSmallMonsters = async () => {
  console.log("FETCH started small");
  const result = await fetch(`${API_ENDPOINT}/api/monsters/small`);
  console.log("SSR small", result);
  const json = await result.json();
  return json.monsters;
};

async function MonsterHome() {
  const largeMonsters = await fetchLargeMonsters();
  const smallMonsters = await fetchSmallMonsters();

  return (
    <>
      <main className="container flex mx-auto gap-8 flex-col lg:flex-row">
        <MonsterSelection
          largeMonsters={largeMonsters}
          smallMonsters={smallMonsters}
        ></MonsterSelection>
        <section className="md:basis-3/4 bg-slate-200 p-4">
          Please select a mosnter from the left list
        </section>
      </main>
    </>
  );
}

export default MonsterHome;
