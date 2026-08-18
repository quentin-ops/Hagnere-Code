import { describe, expect, it } from "vitest";
import {
  calculateGoogleAdsManagementCost,
  type GoogleAdsManagementCostInputs,
} from "./google-ads-management-cost";

const example: GoogleAdsManagementCostInputs = {
  monthlyMediaSpend: 5000,
  percentageFeeBasisMonthly: 5000,
  jurisdictionSurchargeRate: 2,
  surchargeEligibleSpendShareRate: 100,
  horizonMonths: 6,
  fixedMonthlyFee: 900,
  percentageFeeRate: 15,
  hybridBaseMonthlyFee: 500,
  hybridPercentageFeeRate: 10,
  oneOffExternalCosts: 2550,
  monthlyExternalCosts: 150,
  initialInternalHours: 8,
  monthlyInternalHours: 2,
  internalHourlyCost: 44.2,
  qualifiedLeadsPerMonth: 15,
};

describe("calculateGoogleAdsManagementCost", () => {
  it("reproduces the three fee models without intermediate float drift", () => {
    const result = calculateGoogleAdsManagementCost(example);
    expect(result.status).toBe("ready");
    if (result.status !== "ready") return;

    expect(result.knownOneOffCost).toBe(2903.6);
    expect(result.totalQualifiedLeads).toBe(90);
    expect(result.comparisons).toEqual([
      {
        model: "fixed",
        managementFeeMonthly: 900,
        mediaSurchargeMonthly: 100,
        mediaSpendWithSurchargeMonthly: 5100,
        internalCostMonthly: 88.4,
        knownMonthlyCost: 6238.4,
        knownHorizonCost: 40334,
        knownCostPerQualifiedLead: 40334 / 90,
      },
      {
        model: "percentage",
        managementFeeMonthly: 750,
        mediaSurchargeMonthly: 100,
        mediaSpendWithSurchargeMonthly: 5100,
        internalCostMonthly: 88.4,
        knownMonthlyCost: 6088.4,
        knownHorizonCost: 39434,
        knownCostPerQualifiedLead: 39434 / 90,
      },
      {
        model: "hybrid",
        managementFeeMonthly: 1000,
        mediaSurchargeMonthly: 100,
        mediaSpendWithSurchargeMonthly: 5100,
        internalCostMonthly: 88.4,
        knownMonthlyCost: 6338.4,
        knownHorizonCost: 40934,
        knownCostPerQualifiedLead: 40934 / 90,
      },
    ]);
  });

  it("calculates the three positive fee crossings", () => {
    const result = calculateGoogleAdsManagementCost(example);
    expect(result.status).toBe("ready");
    if (result.status !== "ready") return;

    expect(result.fixedVsPercentageFeeBasisCrossing).toBe(6000);
    expect(result.fixedVsHybridFeeBasisCrossing).toBe(4000);
    expect(result.percentageVsHybridFeeBasisCrossing).toBe(10000);
  });

  it("does not invent a crossing when two curves cannot meet positively", () => {
    const result = calculateGoogleAdsManagementCost({
      ...example,
      fixedMonthlyFee: 400,
      hybridBaseMonthlyFee: 500,
      percentageFeeRate: 8,
      hybridPercentageFeeRate: 10,
    });
    expect(result.status).toBe("ready");
    if (result.status !== "ready") return;

    expect(result.fixedVsHybridFeeBasisCrossing).toBeNull();
    expect(result.percentageVsHybridFeeBasisCrossing).toBeNull();
  });

  it("keeps zero fees and zero internal time as real values", () => {
    const result = calculateGoogleAdsManagementCost({
      ...example,
      fixedMonthlyFee: 0,
      percentageFeeRate: 0,
      hybridBaseMonthlyFee: 0,
      hybridPercentageFeeRate: 0,
      oneOffExternalCosts: 0,
      monthlyExternalCosts: 0,
      initialInternalHours: 0,
      monthlyInternalHours: 0,
      internalHourlyCost: 0,
    });
    expect(result.status).toBe("ready");
    if (result.status !== "ready") return;

    expect(result.comparisons[0].knownMonthlyCost).toBe(5100);
    expect(result.comparisons[0].knownHorizonCost).toBe(30600);
  });

  it("rounds the surcharge and fees to cents", () => {
    const result = calculateGoogleAdsManagementCost({
      ...example,
      monthlyMediaSpend: 1234.56,
      percentageFeeBasisMonthly: 1234.56,
      jurisdictionSurchargeRate: 2,
      percentageFeeRate: 12.5,
      hybridPercentageFeeRate: 7.5,
    });
    expect(result.status).toBe("ready");
    if (result.status !== "ready") return;

    expect(result.comparisons[0].mediaSurchargeMonthly).toBe(24.69);
    expect(result.comparisons[1].managementFeeMonthly).toBe(154.32);
    expect(result.comparisons[2].managementFeeMonthly).toBe(592.59);
  });

  it("separates actual media spend, the variable-fee basis and jurisdiction share", () => {
    const result = calculateGoogleAdsManagementCost({
      ...example,
      monthlyMediaSpend: 4000,
      percentageFeeBasisMonthly: 6000,
      surchargeEligibleSpendShareRate: 25,
      jurisdictionSurchargeRate: 2,
    });
    expect(result.status).toBe("ready");
    if (result.status !== "ready") return;

    expect(result.comparisons[0].mediaSurchargeMonthly).toBe(20);
    expect(result.comparisons[0].mediaSpendWithSurchargeMonthly).toBe(4020);
    expect(result.comparisons[1].managementFeeMonthly).toBe(900);
    expect(result.comparisons[2].managementFeeMonthly).toBe(1100);
  });

  it("rejects invalid horizons, rates, denominators and non-finite inputs", () => {
    const cases: Array<Partial<GoogleAdsManagementCostInputs>> = [
      { monthlyMediaSpend: 0 },
      { percentageFeeBasisMonthly: 0 },
      { qualifiedLeadsPerMonth: 0 },
      { horizonMonths: 0 },
      { horizonMonths: 2.5 },
      { horizonMonths: 61 },
      { jurisdictionSurchargeRate: 101 },
      { surchargeEligibleSpendShareRate: 101 },
      { percentageFeeRate: -1 },
      { hybridPercentageFeeRate: Number.NaN },
      { oneOffExternalCosts: Number.POSITIVE_INFINITY },
    ];

    for (const invalid of cases) {
      const result = calculateGoogleAdsManagementCost({
        ...example,
        ...invalid,
      });
      expect(result.status).toBe("invalid-input");
      if (result.status === "invalid-input") {
        expect(result.invalidFields.length).toBeGreaterThan(0);
      }
    }
  });
});
