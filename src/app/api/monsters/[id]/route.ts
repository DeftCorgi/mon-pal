import { NextRequest, NextResponse } from "next/server";
import {
  Monster,
  MonsterHitzone,
  MonsterHitzoneText,
  MonsterReward,
  MonsterRewardConditionText,
  MonsterText,
  Item,
  ItemText,
} from "@/../../db/db";
import {
  MonsterHitzoneType,
  MonsterInfoResponseType,
  MonsterRewardType,
  MonsterType,
} from "../../../../../types/api/api";

export async function GET(request: NextRequest, context: any) {
  try {
    console.debug("GET: /api/monsters/[id]");
    const { params } = context;

    // retrieve large monster names only
    const monster: MonsterType = await Monster.findOne({
      where: { id: params.id },
      include: [{ model: MonsterText, where: { lang_id: "en" } }],
    });

    const hitzones: MonsterHitzoneType[] = await MonsterHitzone.findAll({
      where: { monster_id: params.id },
      include: [{ model: MonsterHitzoneText, where: { lang_id: "en" } }],
    });

    const rewards: MonsterRewardType[] = await MonsterReward.findAll({
      where: { monster_id: params.id },
      include: [
        {
          model: MonsterRewardConditionText,
          where: { lang_id: "en" },
        },
        {
          model: Item,
          include: [{ model: ItemText, where: { lang_id: "en" } }],
        },
      ],
    });

    const response: MonsterInfoResponseType = { monster, hitzones, rewards };
    // console.debug("GET: /api/monsters/[id] SUCCESS", response);

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("Error in GET function:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
