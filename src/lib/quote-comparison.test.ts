import { describe, expect, it } from "vitest";
import {
  calculateQuoteScore,
  calculateQuoteTco,
  QUOTE_CRITERIA,
  QUOTE_CRITERIA_TOTAL_WEIGHT,
  QUOTE_EXAMPLE_OFFERS,
  quoteCostStatusFormula,
  quoteInternalCostFormula,
  quoteScoreFormula,
  quoteTcoGapFormula,
  quoteTcoFormula,
} from "./quote-comparison";

describe("quote comparison criteria", () => {
  it("contains forty criteria weighted to exactly one hundred percent", () => {
    expect(QUOTE_CRITERIA).toHaveLength(40);
    expect(QUOTE_CRITERIA_TOTAL_WEIGHT).toBe(100);
  });

  it("uses positive integer weights", () => {
    for (const { weight } of QUOTE_CRITERIA) {
      expect(Number.isInteger(weight)).toBe(true);
      expect(weight).toBeGreaterThan(0);
    }
  });

  it("keeps the filled example reproducible from all forty notes", () => {
    expect(
      QUOTE_EXAMPLE_OFFERS.every(
        (offer) => offer.scores.length === QUOTE_CRITERIA.length,
      ),
    ).toBe(true);
    expect(QUOTE_EXAMPLE_OFFERS.map((offer) => calculateQuoteScore(offer.scores))).toEqual([
      44,
      88,
      93,
    ]);
  });

  it("calculates the 36-month TCO including certain credits", () => {
    expect(
      QUOTE_EXAMPLE_OFFERS.map((offer) => calculateQuoteTco(offer.costs)),
    ).toEqual([34380, 28880, 32700]);

    expect(
      calculateQuoteTco({
        ...QUOTE_EXAMPLE_OFFERS[0].costs,
        credits: 1380,
      }),
    ).toBe(33000);
  });

  it("exports a French spreadsheet formula based on every criterion", () => {
    const formula = quoteScoreFormula("D", "fr");

    expect(formula).toBe(
      '=SI(NB(D2:D41)=40;SOMMEPROD(D2:D41/3;$C$2:$C$41);"")',
    );
    expect(formula).toContain("NB(D2:D41)=40");
  });

  it("suspends spreadsheet totals, status and ranking while data is missing", () => {
    expect(quoteTcoFormula("B", "fr")).toBe(
      '=SI(NB(B2:B8;B10:B12)=10;B2+B3+B4+B5+B6+B9+B10+B11-B12;"")',
    );
    expect(quoteInternalCostFormula("B", "fr")).toBe(
      '=SI(NB(B7:B8)=2;B7*B8;"")',
    );
    expect(quoteCostStatusFormula("B", "fr")).toBe(
      '=SI(NB(B2:B8;B10:B12)=10;"Complet";"À confirmer — cellule vide")',
    );
    expect(quoteTcoGapFormula("B", "fr")).toBe(
      '=SI(NB($B$13:$D$13)=3;B13-MIN($B$13:$D$13);"")',
    );
  });

  it("also exports international formulas for English spreadsheet settings", () => {
    expect(quoteScoreFormula("D", "en")).toBe(
      '=IF(COUNT(D2:D41)=40,SUMPRODUCT(D2:D41/3,$C$2:$C$41),"")',
    );
    expect(quoteTcoFormula("B", "en")).toBe(
      '=IF(COUNT(B2:B8,B10:B12)=10,B2+B3+B4+B5+B6+B9+B10+B11-B12,"")',
    );
    expect(quoteTcoGapFormula("B", "en")).toBe(
      '=IF(COUNT($B$13:$D$13)=3,B13-MIN($B$13:$D$13),"")',
    );
  });
});
