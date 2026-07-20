import { NextResponse } from "next/server";
import {
  getMathChallengeSecret,
  issueMathChallenge,
} from "@/lib/math-challenge";

export const runtime = "nodejs";

export async function GET() {
  const secret = getMathChallengeSecret();
  if (!secret) {
    return NextResponse.json(
      { error: "Le contrôle anti-robot est temporairement indisponible." },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }

  return NextResponse.json(issueMathChallenge(secret), {
    headers: { "Cache-Control": "no-store, max-age=0" },
  });
}
