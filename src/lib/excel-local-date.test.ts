import { describe, expect, it } from "vitest";
import {
  formatExcelLocalIsoDate,
  millisecondsUntilNextExcelLocalMidnight,
} from "./excel-local-date";

describe("Excel diagnostic local calendar clock", () => {
  it("formats the browser-local calendar day without using UTC", () => {
    expect(formatExcelLocalIsoDate(new Date(2026, 6, 25, 23, 59, 59))).toBe(
      "2026-07-25",
    );
    expect(formatExcelLocalIsoDate(new Date(2026, 6, 26, 0, 0, 0))).toBe(
      "2026-07-26",
    );
  });

  it("computes the next local midnight from the supplied instant", () => {
    const beforeMidnight = new Date(2026, 6, 25, 23, 59, 59, 500);
    const atNoon = new Date(2026, 6, 25, 12, 0, 0, 0);

    expect(millisecondsUntilNextExcelLocalMidnight(beforeMidnight)).toBe(500);
    expect(millisecondsUntilNextExcelLocalMidnight(atNoon)).toBe(
      12 * 60 * 60 * 1_000,
    );
  });
});
