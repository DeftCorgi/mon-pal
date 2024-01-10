import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import {
  Monster,
  MonsterHitzone,
  MonsterHitzoneText,
  MonsterText,
} from "@/../../db/db";
import {
  MonsterInfoResponseType,
  MonsterType,
} from "../../../../../types/api/api";

export async function GET(request: NextApiRequest, context: any) {
  const { params } = context;

  // retrieve large monster names only
  const monster: MonsterType = await Monster.findOne({
    where: { id: params.id },
    include: [{ model: MonsterText, where: { lang_id: "en" } }],
  });

  const hitzones = await MonsterHitzone.findAll({
    where: { monster_id: params.id },
    include: [{ model: MonsterHitzoneText, where: { lang_id: "en" } }],
  });

  const response: MonsterInfoResponseType = { monster, hitzones };

  return NextResponse.json(response, { status: 200 });
}
