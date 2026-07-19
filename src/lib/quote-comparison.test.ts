import { describe, expect, it } from "vitest";
import {
  QUOTE_CRITERIA,
  QUOTE_CRITERIA_TOTAL_WEIGHT,
} from "./quote-comparison";

describe("quote comparison criteria", () => {
  it("contains forty criteria weighted to exactly one hundred percent", () => {
    expect(QUOTE_CRITERIA).toHaveLength(40);
    expect(QUOTE_CRITERIA_TOTAL_WEIGHT).toBe(100);
  });

  it("uses positive integer weights", () => {
    for (const [, , weight] of QUOTE_CRITERIA) {
      expect(Number.isInteger(weight)).toBe(true);
      expect(weight).toBeGreaterThan(0);
    }
  });
});
