import { afterEach, describe, expect, it, vi } from "vitest";
import {
  getMathChallengeSecret,
  issueMathChallenge,
  isValidMathChallenge,
  MATH_CHALLENGE_TTL_MS,
} from "./math-challenge";

const SECRET = "test-secret-with-at-least-thirty-two-characters";
const NOW = 1_800_000_000_000;

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("signed math challenge", () => {
  it("requires a dedicated secret and never falls back to AUTH_SECRET", () => {
    vi.stubEnv("MATH_CHALLENGE_SECRET", "");
    vi.stubEnv("AUTH_SECRET", SECRET);
    expect(getMathChallengeSecret()).toBeNull();

    vi.stubEnv("MATH_CHALLENGE_SECRET", SECRET);
    expect(getMathChallengeSecret()).toBe(SECRET);
  });

  it("rejects a dedicated secret shorter than 32 characters", () => {
    vi.stubEnv("MATH_CHALLENGE_SECRET", "too-short");
    expect(getMathChallengeSecret()).toBeNull();
  });

  it("accepts the answer for a server-issued, unexpired challenge", () => {
    const issued = issueMathChallenge(SECRET, NOW);
    expect(
      isValidMathChallenge(
        { token: issued.token, answer: issued.a + issued.b },
        SECRET,
        NOW + 1_000,
      ),
    ).toBe(true);
  });

  it("rejects a forged token even when the arithmetic is correct", () => {
    const issued = issueMathChallenge(SECRET, NOW);
    const [payload] = issued.token.split(".");
    expect(
      isValidMathChallenge(
        { token: `${payload}.forged`, answer: issued.a + issued.b },
        SECRET,
        NOW,
      ),
    ).toBe(false);
  });

  it("rejects an expired challenge", () => {
    const issued = issueMathChallenge(SECRET, NOW);
    expect(
      isValidMathChallenge(
        { token: issued.token, answer: issued.a + issued.b },
        SECRET,
        NOW + MATH_CHALLENGE_TTL_MS + 1,
      ),
    ).toBe(false);
  });
});
