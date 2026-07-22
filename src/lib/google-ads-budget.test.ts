import { describe, expect, it } from "vitest";
import { calculateGoogleAdsBudget } from "./google-ads-budget";

const example = {
  marginPerSale: 1500,
  leadToSaleRate: 25,
  targetQualifiedLeads: 8,
  nonMediaCosts: 900,
  amountToKeep: 300,
  forecastClicks: 300,
  forecastMediaCost: 1800,
  maxAcceptableLoss: 3000,
};

describe("calculateGoogleAdsBudget", () => {
  it("reproduces the worked example", () => {
    const result = calculateGoogleAdsBudget(example);
    expect(result.salesIfTargetReached).toBe(2);
    expect(result.marginIfTargetReached).toBe(3000);
    expect(result.mediaBudgetIfTargetReached).toBe(1800);
    expect(result.riskCompatibleMediaBudget).toBe(2100);
    expect(result.forecastCostPerClick).toBe(6);
    expect(result.requiredClickToLeadRate).toBeCloseTo(2.6667, 3);
    expect(result.completeTestCost).toBe(2700);
    expect(result.marginLeftIfTargetReached).toBe(300);
    expect(result.verdict).toBe("financially-compatible");
  });

  it("flags a forecast that exceeds the treasury risk", () => {
    expect(
      calculateGoogleAdsBudget({
        ...example,
        maxAcceptableLoss: 2500,
      }).verdict,
    ).toBe("risk-limit-exceeded");
  });

  it("flags a forecast that the expected margin cannot finance", () => {
    expect(
      calculateGoogleAdsBudget({
        ...example,
        marginPerSale: 1400,
      }).verdict,
    ).toBe("margin-limit-exceeded");
  });

  it("reports when both financial limits are exceeded", () => {
    expect(
      calculateGoogleAdsBudget({
        ...example,
        nonMediaCosts: 3500,
      }).verdict,
    ).toBe("both-limits-exceeded");
  });

  it("rejects a target requiring more than one qualified request per click", () => {
    expect(
      calculateGoogleAdsBudget({
        ...example,
        targetQualifiedLeads: 301,
      }).verdict,
    ).toBe("impossible-volume");

    expect(
      calculateGoogleAdsBudget({
        ...example,
        targetQualifiedLeads: 300,
      }).verdict,
    ).not.toBe("impossible-volume");
  });

  it("treats a zero signature rate and a zero loss limit as real decisions", () => {
    expect(
      calculateGoogleAdsBudget({
        ...example,
        leadToSaleRate: 0,
      }).verdict,
    ).toBe("margin-limit-exceeded");

    expect(
      calculateGoogleAdsBudget({
        ...example,
        maxAcceptableLoss: 0,
      }).verdict,
    ).toBe("risk-limit-exceeded");
  });

  it("refuses incomplete or impossible inputs", () => {
    const invalidCases = [
      { forecastClicks: 0 },
      { forecastClicks: 10.5 },
      { targetQualifiedLeads: 1.5 },
      { leadToSaleRate: 120 },
      { nonMediaCosts: Number.NaN },
      { amountToKeep: Number.POSITIVE_INFINITY },
      { forecastMediaCost: -1 },
    ];

    for (const invalid of invalidCases) {
      const result = calculateGoogleAdsBudget({ ...example, ...invalid });
      expect(result.verdict).toBe("missing-data");
      expect(Number.isNaN(result.completeTestCost)).toBe(true);
    }
  });
});
