/**
 * Anti-bot « question de calcul » — remplace Cloudflare Turnstile.
 *
 * Le client tire deux petits nombres (MATH_CHALLENGE_MIN..MAX), l'humain
 * tape la somme, et le serveur revalide la cohérence (bornes + somme).
 * Zéro script tiers, zéro compte externe, zéro env var à gérer. Couplé au
 * honeypot et au rate limit Postgres, ça élimine les bots génériques qui
 * POSTent les formulaires sans exécuter la page.
 */

export const MATH_CHALLENGE_MIN = 2;
export const MATH_CHALLENGE_MAX = 9;

export type MathChallengePayload = {
  a: number;
  b: number;
  answer: number;
};

function isTermInRange(n: unknown): n is number {
  return (
    typeof n === "number" &&
    Number.isInteger(n) &&
    n >= MATH_CHALLENGE_MIN &&
    n <= MATH_CHALLENGE_MAX
  );
}

export function isValidMathChallenge(
  value: unknown,
): value is MathChallengePayload {
  if (!value || typeof value !== "object") return false;
  const { a, b, answer } = value as Record<string, unknown>;
  if (!isTermInRange(a) || !isTermInRange(b)) return false;
  return (
    typeof answer === "number" && Number.isInteger(answer) && answer === a + b
  );
}
