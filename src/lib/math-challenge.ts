import {
  createHmac,
  randomBytes,
  randomInt,
  timingSafeEqual,
} from "node:crypto";

/**
 * Question de calcul signée par le serveur.
 *
 * Les opérandes restent visibles, mais le client ne peut plus inventer sa
 * propre équation : le token lie les termes, une échéance et un nonce au
 * moyen d'un HMAC serveur.
 */
export const MATH_CHALLENGE_MIN = 2;
export const MATH_CHALLENGE_MAX = 9;
// Fenêtre courte : le token reste rejouable dans cette période, mais chaque
// tentative est désormais comptée par le rate-limit persistant avant contrôle.
export const MATH_CHALLENGE_TTL_MS = 15 * 60 * 1000;

type SignedChallenge = {
  a: number;
  b: number;
  exp: number;
  nonce: string;
};

export type IssuedMathChallenge = {
  a: number;
  b: number;
  token: string;
  expiresAt: number;
};

export type MathChallengePayload = {
  token: string;
  answer: number;
};

function encode(value: string): string {
  return Buffer.from(value, "utf8").toString("base64url");
}

function sign(encodedPayload: string, secret: string): string {
  return createHmac("sha256", secret)
    .update(encodedPayload)
    .digest("base64url");
}

function isTermInRange(n: unknown): n is number {
  return (
    typeof n === "number" &&
    Number.isInteger(n) &&
    n >= MATH_CHALLENGE_MIN &&
    n <= MATH_CHALLENGE_MAX
  );
}

export function getMathChallengeSecret(): string | null {
  const secret = process.env.MATH_CHALLENGE_SECRET?.trim();
  return secret && secret.length >= 32 ? secret : null;
}

export function issueMathChallenge(
  secret: string,
  now = Date.now(),
): IssuedMathChallenge {
  const payload: SignedChallenge = {
    a: randomInt(MATH_CHALLENGE_MIN, MATH_CHALLENGE_MAX + 1),
    b: randomInt(MATH_CHALLENGE_MIN, MATH_CHALLENGE_MAX + 1),
    exp: now + MATH_CHALLENGE_TTL_MS,
    nonce: randomBytes(16).toString("base64url"),
  };
  const encodedPayload = encode(JSON.stringify(payload));
  return {
    a: payload.a,
    b: payload.b,
    token: `${encodedPayload}.${sign(encodedPayload, secret)}`,
    expiresAt: payload.exp,
  };
}

export function isValidMathChallenge(
  value: unknown,
  secret: string,
  now = Date.now(),
): value is MathChallengePayload {
  if (!value || typeof value !== "object") return false;
  const { token, answer } = value as Record<string, unknown>;
  if (
    typeof token !== "string" ||
    token.length > 1024 ||
    typeof answer !== "number" ||
    !Number.isInteger(answer)
  ) {
    return false;
  }

  const [encodedPayload, receivedSignature, extra] = token.split(".");
  if (!encodedPayload || !receivedSignature || extra) return false;

  const expectedSignature = sign(encodedPayload, secret);
  const received = Buffer.from(receivedSignature, "utf8");
  const expected = Buffer.from(expectedSignature, "utf8");
  if (received.length !== expected.length || !timingSafeEqual(received, expected)) {
    return false;
  }

  try {
    const payload = JSON.parse(
      Buffer.from(encodedPayload, "base64url").toString("utf8"),
    ) as Partial<SignedChallenge>;
    return (
      isTermInRange(payload.a) &&
      isTermInRange(payload.b) &&
      typeof payload.exp === "number" &&
      Number.isInteger(payload.exp) &&
      payload.exp >= now &&
      payload.exp <= now + MATH_CHALLENGE_TTL_MS &&
      typeof payload.nonce === "string" &&
      payload.nonce.length >= 16 &&
      answer === payload.a + payload.b
    );
  } catch {
    return false;
  }
}
