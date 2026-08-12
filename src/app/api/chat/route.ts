import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const message = body.message;

  console.log("User message:", message);

  return NextResponse.json({
    reply: `You said: ${message}`,
  });
}
