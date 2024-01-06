import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import * as sqlite3 from "sqlite3";
import * as fs from "node:fs";

const dbPath = "../../../../data/mhw.db";

const db = new sqlite3.Database(
  dbPath,
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Connected to the SQlite database.");
  }
);

// To handle a GET request to /api
export async function GET(request: NextApiRequest) {
  // Do whatever you want
  console.log(__dirname);
  return NextResponse.json({ message: "__dirname" }, { status: 200 });
}

export async function POST(request: Request) {}
