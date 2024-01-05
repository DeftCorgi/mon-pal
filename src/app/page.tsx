import InfoPanel from "@/components/info-panel/info-panel";
import MonsterSelection from "@/components/monster-selection/monster-selection";
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <main className="container flex mx-auto gap-8 flex-col lg:flex-row">
        <MonsterSelection></MonsterSelection>
        <InfoPanel></InfoPanel>
      </main>
    </>
  );
}
