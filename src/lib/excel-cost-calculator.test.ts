import { describe, expect, it } from "vitest";
import {
  calculateExcelCost,
  EXCEL_CALCULATOR_DEFAULTS,
} from "./excel-cost-calculator";

describe("Excel cost calculator", () => {
  it("garde le teaser et l'outil sur le même résultat par défaut", () => {
    expect(calculateExcelCost(EXCEL_CALCULATOR_DEFAULTS)).toMatchObject({
      annualHours: 1440,
      timeYearCost: 40500,
      incidentsPerYear: 22,
      errorYearCost: 5500,
      totalYearCost: 46000,
    });
  });
});
