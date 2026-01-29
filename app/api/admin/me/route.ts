import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const isAdmin = cookies().get("ac_admin")?.value === "1";
  if (!isAdmin) return NextResponse.json({ loggedIn: false }, { status: 401 });
  return NextResponse.json({ loggedIn: true });
}
