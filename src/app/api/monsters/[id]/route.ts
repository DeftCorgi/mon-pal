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
  Quest,
} from "@/../../db/db";
import {
  MonsterHitzoneType,
  MonsterInfoResponseType,
  MonsterRewardType,
  MonsterType,
  QuestType,
} from "../../../../../types/api/api";
import QuestInfo from "@/components/info-panel/quest-info/quest-info";

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

    const quests: QuestType[] = await Quest.findAll({
      includeIgnoreAttributes: false,
      include: [{ model: Monster, where: { id: params.id } }],
    });

    const response: MonsterInfoResponseType = {
      monster,
      hitzones,
      rewards,
      quests,
    };
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
