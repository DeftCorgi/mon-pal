"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Home() {
  const router = useRouter();
  router.push("/monsters/");
  return <></>;
}

export default Home;
