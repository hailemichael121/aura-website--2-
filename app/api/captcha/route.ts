import { NextResponse } from "next/server";
import { generateChallenge } from "@/lib/captcha-security";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const challenge = generateChallenge();
    return NextResponse.json(challenge, {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to generate security challenge" },
      { status: 500 }
    );
  }
}
