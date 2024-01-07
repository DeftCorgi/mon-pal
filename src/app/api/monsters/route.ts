import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { Monster, MonsterText } from "../../../../db/db";

// To handle a GET request to /api
export async function GET(request: NextApiRequest) {
  // Do whatever you want
  const result = await Monster.findOne({
    where: { id: 1 },
    include: MonsterText,
  });

  return NextResponse.json({ data: result }, { status: 200 });
}

export async function POST(request: Request) {}
