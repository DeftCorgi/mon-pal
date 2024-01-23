import { NextRequest, NextResponse } from "next/server";
import { Monster, MonsterText } from "../../../../../db/db";
import {
  ListMonstersResponseType,
  MonsterType,
} from "../../../../../types/api/api";

export async function GET(request: NextRequest) {
  try {
    console.log("GET: /api/monsters/small");

    // retrieve large monster names only
    const result = await Monster.findAll({
      attributes: ["id", "monster_texts.name"],
      where: { size: "small" },
      include: [{ model: MonsterText, where: { lang_id: "en" } }],
    });

    // flatten
    const monsters = result.map((monster: MonsterType) => ({
      id: monster.id,
      name: monster.monster_texts[0].name,
    }));

    const response: ListMonstersResponseType = { monsters };
    console.log("GET: /api/monsters/small SUCCESS");

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("Error in GET function:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
