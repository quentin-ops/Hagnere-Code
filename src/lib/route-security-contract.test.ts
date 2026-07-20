import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const readRoute = (relativePath: string) =>
  fs.readFileSync(path.join(process.cwd(), relativePath), "utf8");

function rateDeniedBranch(source: string): string {
  const start = source.indexOf("if (!rateCheck.allowed)");
  expect(start).toBeGreaterThanOrEqual(0);
  const responseEnd = source.indexOf("\n  }", start);
  expect(responseEnd).toBeGreaterThan(start);
  return source.slice(start, responseEnd + 4);
}

describe("API abuse-resistance contracts", () => {
  it("réserve le quota inquiry avant de vérifier le calcul signé", () => {
    const source = readRoute("src/app/api/project-inquiry/route.ts");
    expect(source.indexOf("checkServiceRateLimit(")).toBeLessThan(
      source.indexOf("isValidMathChallenge("),
    );
  });

  it.each([
    "src/app/api/project-inquiry/route.ts",
    "src/app/api/transcribe/route.ts",
  ])("n'écrit pas une ligne DB pour chaque refus de rate-limit dans %s", (file) => {
    expect(rateDeniedBranch(readRoute(file))).not.toContain("logAiCall(");
  });

  it.each([
    "src/app/api/project-inquiry/route.ts",
    "src/app/api/transcribe/route.ts",
  ])("lie chaque journal d'issue à une réservation bornée dans %s", (file) => {
    const source = readRoute(file);
    const calls = source.matchAll(/logAiCall\(\{([\s\S]*?)\n\s*\}\)/g);
    const bodies = Array.from(calls, (match) => match[1]);
    expect(bodies.length).toBeGreaterThan(0);
    for (const body of bodies) {
      expect(body).toContain("reservationId: rateCheck.reservationId");
    }
  });

  it("borne l'attente du fournisseur de transcription", () => {
    const source = readRoute("src/app/api/transcribe/route.ts");
    expect(source).toContain("signal: AbortSignal.timeout(GROQ_TIMEOUT_MS)");
    expect(source).toContain("status: timedOut ? 504 : 500");
  });
});
