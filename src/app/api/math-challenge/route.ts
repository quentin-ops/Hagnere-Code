import { NextResponse } from "next/server";
import { CONTACT_EMAIL } from "@/lib/contact-details";
import {
  getMathChallengeSecret,
  issueMathChallenge,
} from "@/lib/math-challenge";
import {
  checkRateLimit,
  createRateLimitStore,
  gcRateLimitStore,
  getClientIp,
} from "@/lib/rate-limit";

export const runtime = "nodejs";

/**
 * Émission de l'équation anti-robot. La route ne touche ni la base, ni un
 * fournisseur externe : le seul abus possible est le martèlement (coût
 * d'invocation, pré-constitution d'un stock de jetons valides). Un compteur
 * mémoire suffit donc, et évite de payer une écriture Neon à chaque
 * affichage de formulaire — le vrai plafond de soumission reste, lui,
 * persistant et vérifié dans /api/project-inquiry.
 *
 * Limite PAR INSTANCE : documentée comme telle dans src/lib/rate-limit.ts.
 * Elle borne le coût, pas un attaquant distribué — mais le jeton émis ne
 * donne aucun droit sans passer le plafond persistant de la soumission.
 */
const challengeStore = createRateLimitStore();
const CHALLENGE_WINDOW_MS = 60 * 60 * 1000;
const CHALLENGE_PER_IP_HOUR = parseInt(
  process.env.MATH_CHALLENGE_PER_IP_HOUR || "60",
  10,
);

export async function GET(request: Request) {
  const ip = getClientIp(request);
  gcRateLimitStore(challengeStore);
  const rate = checkRateLimit(challengeStore, ip, {
    windowMs: CHALLENGE_WINDOW_MS,
    max: CHALLENGE_PER_IP_HOUR,
  });
  if (!rate.ok) {
    return NextResponse.json(
      {
        error: `Trop de demandes de contrôle anti-robot. Réessayez dans un moment ou écrivez-nous à ${CONTACT_EMAIL}.`,
      },
      {
        status: 429,
        headers: {
          "Cache-Control": "no-store",
          "Retry-After": String(rate.retryAfterSec ?? 60),
        },
      },
    );
  }

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
