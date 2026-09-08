import { NextResponse } from "next/server";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { verifyChallenge } from "@/lib/captcha-security";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);

    // 1. Enforce Token Bucket rate limiting & spacing cooldown per IP
    const limitCheck = checkRateLimit(ip, "contact", {
      capacity: 3,
      refillSecondsPerToken: 45,
      minSpacingSeconds: 30,
    });

    if (!limitCheck.allowed) {
      return NextResponse.json(
        {
          success: false,
          message: limitCheck.message,
          cooldownRemaining: limitCheck.remainingSeconds,
        },
        { status: 429 }
      );
    }

    const formData = await request.formData();

    // 2. Cryptographic Captcha verification (anti-bot, speed check, replay prevention)
    const captchaAnswer = formData.get("captchaAnswer") as string;
    const captchaToken = formData.get("captchaToken") as string;

    const captchaCheck = verifyChallenge(captchaAnswer, captchaToken);
    if (!captchaCheck.valid) {
      return NextResponse.json(
        {
          success: false,
          message: captchaCheck.reason || "Security verification failed. Please try again.",
        },
        { status: 400 }
      );
    }

    // Clean internal captcha parameters before forwarding
    formData.delete("captchaAnswer");
    formData.delete("captchaToken");

    if (!formData.get("access_key")) {
      formData.set("access_key", "3d128a47-d696-46ef-8dc1-8094ee35f175");
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        Origin: "https://www.auramentalhealth.org",
        Referer: "https://www.auramentalhealth.org/contact",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        Accept: "application/json",
      },
      body: formData,
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Failed to process form submission",
      },
      { status: 500 }
    );
  }
}
