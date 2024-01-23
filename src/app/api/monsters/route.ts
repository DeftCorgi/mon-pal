import { NextRequest, NextResponse } from "next/server";
import { Monster, MonsterText } from "../../../../db/db";

export async function GET(request: NextRequest) {
  // retrieve large monster names only
  const result = await Monster.findAll({
    include: [{ model: MonsterText, where: { lang_id: "en" } }],
  });

  // flatten
  const monsters = result.map((monster: any) => ({
    name: monster.monster_texts[0].name,
  }));

  return NextResponse.json({ data: monsters }, { status: 200 });
}
