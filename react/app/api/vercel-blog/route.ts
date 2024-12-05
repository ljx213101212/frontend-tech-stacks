import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch("https://api.vercel.app/blog");
  const posts = await response.json();
  return NextResponse.json(posts);
}
