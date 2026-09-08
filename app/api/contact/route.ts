import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

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
