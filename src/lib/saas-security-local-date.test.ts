import { describe, expect, it } from "vitest";
import {
  formatSaasSecurityLocalIsoDate,
  millisecondsUntilNextSaasSecurityLocalMidnight,
} from "./saas-security-local-date";

describe("saas security local date", () => {
  it("formats the supplied local calendar date without a UTC shift", () => {
    const date = new Date(2026, 6, 25, 23, 30, 0, 0);
    expect(formatSaasSecurityLocalIsoDate(date)).toBe("2026-07-25");
  });

  it("computes the next local midnight from the supplied instant", () => {
    const date = new Date(2026, 6, 25, 23, 59, 30, 0);
    expect(millisecondsUntilNextSaasSecurityLocalMidnight(date)).toBe(30_000);
  });
});
