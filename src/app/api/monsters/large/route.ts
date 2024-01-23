import {
  ListMonstersResponseType,
  MonsterType,
} from "./../../../../../types/api/api.d";
import { NextResponse } from "next/server";
import { Monster, MonsterText } from "../../../../../db/db";

export async function GET() {
  try {
    console.log("GET: /api/monsters/large");

    // retrieve large monster names only
    const result = await Monster.findAll({
      attributes: ["id", "monster_texts.name"],
      where: { size: "large" },
      include: [{ model: MonsterText, where: { lang_id: "en" } }],
    });

    // flatten
    const monsters = result.map((monster: MonsterType) => ({
      id: monster.id,
      name: monster.monster_texts[0].name,
    }));

    const response: ListMonstersResponseType = { monsters };
    console.log("GET: /api/monsters/large SUCCESS", response);

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("Error in GET function:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
