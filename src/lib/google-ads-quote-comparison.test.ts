import { describe, expect, it } from "vitest";
import {
  GOOGLE_ADS_QUOTE_HORIZONS,
  GOOGLE_ADS_QUOTE_MAX_MONEY,
  compareGoogleAdsQuotes,
  type GoogleAdsQuoteInputs,
} from "./google-ads-quote-comparison";

const example: GoogleAdsQuoteInputs = {
  monthlyMediaSpendHT: 5000,
  percentageFeeBasisMonthlyHT: 5000,
  hybridFeeBasisMonthlyHT: 5000,
  franceServedSpendSharePct: 100,
  franceRegulatoryOperatingCostPct: 2,
  vatRatePct: 20,
  vatRecoverablePct: 100,
  oneOffCommonExternalHT: 2000,
  monthlyCommonExternalHT: 250,
  internalHourlyCost: 50,
  monthlyClicks: 1000,
  monthlyPrimaryActions: 50,
  monthlyQualifiedLeads: 20,
  monthlyNewCustomers: 4,
  contributionMarginPerAttributedCustomerHT: 2500,
  contributionMarginWindowMonths: 12,
  fixedSetupFeeHT: 750,
  fixedMonthlyFeeHT: 900,
  fixedOneOffScopeAdjustmentHT: 0,
  fixedMonthlyScopeAdjustmentHT: 0,
  fixedExitCost3MonthsHT: 0,
  fixedExitCost6MonthsHT: 0,
  fixedExitCost12MonthsHT: 0,
  fixedInitialInternalHours: 8,
  fixedMonthlyInternalHours: 3,
  percentageSetupFeeHT: 900,
  percentageFeeRatePct: 15,
  percentageMinimumMonthlyFeeHT: 0,
  percentageMaximumMonthlyFeeHT: 0,
  percentageOneOffScopeAdjustmentHT: 0,
  percentageMonthlyScopeAdjustmentHT: 0,
  percentageExitCost3MonthsHT: 0,
  percentageExitCost6MonthsHT: 0,
  percentageExitCost12MonthsHT: 0,
  percentageInitialInternalHours: 8,
  percentageMonthlyInternalHours: 3,
  hybridSetupFeeHT: 800,
  hybridMonthlyBaseFeeHT: 500,
  hybridFeeRatePct: 8,
  hybridMinimumMonthlyFeeHT: 0,
  hybridMaximumMonthlyFeeHT: 0,
  hybridOneOffScopeAdjustmentHT: 0,
  hybridMonthlyScopeAdjustmentHT: 0,
  hybridExitCost3MonthsHT: 0,
  hybridExitCost6MonthsHT: 0,
  hybridExitCost12MonthsHT: 0,
  hybridInitialInternalHours: 8,
  hybridMonthlyInternalHours: 3,
  timeSetupHours: 8,
  timeMonthlyHours: 10,
  timeHourlyRateHT: 100,
  timeOneOffScopeAdjustmentHT: 0,
  timeMonthlyScopeAdjustmentHT: 0,
  timeExitCost3MonthsHT: 0,
  timeExitCost6MonthsHT: 0,
  timeExitCost12MonthsHT: 0,
  timeInitialInternalHours: 8,
  timeMonthlyInternalHours: 3,
};

describe("compareGoogleAdsQuotes", () => {
  it("compares the four remuneration models on the three required horizons", () => {
    const result = compareGoogleAdsQuotes(example);

    expect(result.valid).toBe(true);
    expect(result.models.map((model) => model.key)).toEqual([
      "fixed",
      "percentage",
      "hybrid",
      "time",
    ]);
    expect(Object.keys(result.models[0].horizons).map(Number)).toEqual([
      ...GOOGLE_ADS_QUOTE_HORIZONS,
    ]);
  });

  it("reproduces the fixed-fee scenario at three months", () => {
    const result = compareGoogleAdsQuotes(example);
    const fixed = result.models.find((model) => model.key === "fixed");

    expect(result.monthlyMediaSurchargeHT).toBe(100);
    expect(fixed?.quotedSetupFeeHT).toBe(750);
    expect(fixed?.normalizedOneOffFeeHT).toBe(750);
    expect(fixed?.monthlyManagementFeeHT).toBe(900);
    expect(fixed?.normalizedMonthlyFeeHT).toBe(900);
    expect(fixed?.horizons[3]).toMatchObject({
      externalCashHT: 21500,
      vatCashOut: 4300,
      ttcCashOut: 25800,
      recoverableVAT: 4300,
      internalCost: 850,
      knownEconomicCost: 22350,
    });
  });

  it("keeps media CPC, media CPA, qualified CPL and full CAC distinct", () => {
    const metrics =
      compareGoogleAdsQuotes(example).models[0].horizons[3].metrics;

    expect(metrics.chargedMediaCostPerClickHT).toBe(5.1);
    expect(metrics.chargedMediaCostPerPrimaryActionHT).toBe(102);
    expect(metrics.chargedMediaCostPerQualifiedLeadHT).toBe(255);
    expect(metrics.knownFullCustomerAcquisitionCost).toBe(1862.5);
  });

  it("computes a reproducible break-even gap without promising a return", () => {
    const metrics =
      compareGoogleAdsQuotes(example).models[0].horizons[3].metrics;

    expect(metrics.knownFullCostPerQualifiedLead).toBe(372.5);
    expect(metrics.breakEvenFullCostPerQualifiedLead).toBe(500);
    expect(metrics.breakEvenGapPerQualifiedLead).toBe(127.5);
    expect(metrics.cohortContributionCoverage).toBe(7650);
    expect(metrics.breakEvenStatus).toBe("covered");
  });

  it("uses a separate contractual basis for percentage and hybrid quotes", () => {
    const result = compareGoogleAdsQuotes({
      ...example,
      monthlyMediaSpendHT: 8000,
      percentageFeeBasisMonthlyHT: 6000,
      hybridFeeBasisMonthlyHT: 4000,
    });
    const percentage = result.models.find(
      (model) => model.key === "percentage",
    );
    const hybrid = result.models.find((model) => model.key === "hybrid");

    expect(percentage?.monthlyManagementFeeHT).toBe(900);
    expect(hybrid?.monthlyManagementFeeHT).toBe(820);
  });

  it("applies a contractual minimum and cap to variable management fees", () => {
    const minimum = compareGoogleAdsQuotes({
      ...example,
      percentageFeeBasisMonthlyHT: 1000,
      percentageFeeRatePct: 10,
      percentageMinimumMonthlyFeeHT: 450,
      percentageMaximumMonthlyFeeHT: 900,
    }).models.find((model) => model.key === "percentage");
    const cap = compareGoogleAdsQuotes({
      ...example,
      hybridFeeBasisMonthlyHT: 10000,
      hybridMonthlyBaseFeeHT: 500,
      hybridFeeRatePct: 20,
      hybridMinimumMonthlyFeeHT: 750,
      hybridMaximumMonthlyFeeHT: 1200,
    }).models.find((model) => model.key === "hybrid");
    const noCap = compareGoogleAdsQuotes({
      ...example,
      percentageFeeBasisMonthlyHT: 10000,
      percentageFeeRatePct: 20,
      percentageMinimumMonthlyFeeHT: 0,
      percentageMaximumMonthlyFeeHT: 0,
    }).models.find((model) => model.key === "percentage");

    expect(minimum?.monthlyManagementFeeHT).toBe(450);
    expect(cap?.monthlyManagementFeeHT).toBe(1200);
    expect(noCap?.monthlyManagementFeeHT).toBe(2000);
  });

  it("normalizes offer-specific omissions, internal time and exit costs", () => {
    const result = compareGoogleAdsQuotes({
      ...example,
      fixedOneOffScopeAdjustmentHT: 600,
      fixedMonthlyScopeAdjustmentHT: 200,
      fixedExitCost3MonthsHT: 450,
      fixedInitialInternalHours: 10,
      fixedMonthlyInternalHours: 5,
    });
    const fixed = result.models.find((model) => model.key === "fixed");

    expect(fixed).toMatchObject({
      normalizedOneOffFeeHT: 1350,
      normalizedMonthlyFeeHT: 1100,
    });
    expect(fixed?.horizons[3].exitCostHT).toBe(450);
    expect(fixed?.horizons[6].exitCostHT).toBe(0);
    expect(fixed?.horizons[12].exitCostHT).toBe(0);
    expect(fixed?.horizons[3].externalCashHT).toBe(23150);
    expect(fixed?.horizons[3].internalCost).toBe(1250);
  });

  it("applies a three-month exit cost only to the three-month result", () => {
    const baseline = compareGoogleAdsQuotes(example).models.find(
      (model) => model.key === "fixed",
    )!;
    const withThreeMonthExit = compareGoogleAdsQuotes({
      ...example,
      fixedExitCost3MonthsHT: 450,
    }).models.find((model) => model.key === "fixed")!;

    expect(withThreeMonthExit.horizons[3].exitCostHT).toBe(450);
    expect(
      withThreeMonthExit.horizons[3].externalCashHT -
        baseline.horizons[3].externalCashHT,
    ).toBe(450);
    expect(
      withThreeMonthExit.horizons[6].externalCashHT -
        baseline.horizons[6].externalCashHT,
    ).toBe(0);
    expect(
      withThreeMonthExit.horizons[12].externalCashHT -
        baseline.horizons[12].externalCashHT,
    ).toBe(0);
  });

  it("applies a twelve-month exit cost only to the selected offer and horizon", () => {
    const baseline = compareGoogleAdsQuotes(example);
    const withTwelveMonthExit = compareGoogleAdsQuotes({
      ...example,
      hybridExitCost12MonthsHT: 720,
    });

    for (const changedModel of withTwelveMonthExit.models) {
      const baselineModel = baseline.models.find(
        (model) => model.key === changedModel.key,
      )!;

      for (const months of GOOGLE_ADS_QUOTE_HORIZONS) {
        const expectedDifference =
          changedModel.key === "hybrid" && months === 12 ? 720 : 0;
        expect(
          changedModel.horizons[months].externalCashHT -
            baselineModel.horizons[months].externalCashHT,
        ).toBe(expectedDifference);
      }
    }
  });

  it("isolates a six-month exit cost from every other offer", () => {
    const baseline = compareGoogleAdsQuotes(example);
    const withSixMonthExit = compareGoogleAdsQuotes({
      ...example,
      percentageExitCost6MonthsHT: 800,
    });

    for (const changedModel of withSixMonthExit.models) {
      const baselineModel = baseline.models.find(
        (model) => model.key === changedModel.key,
      )!;

      for (const months of GOOGLE_ADS_QUOTE_HORIZONS) {
        const expectedDifference =
          changedModel.key === "percentage" && months === 6 ? 800 : 0;
        expect(
          changedModel.horizons[months].knownEconomicCost -
            baselineModel.horizons[months].knownEconomicCost,
        ).toBe(expectedDifference);
      }
    }
  });

  it("validates every horizon-specific exit amount", () => {
    for (const invalid of [
      { fixedExitCost3MonthsHT: -1 },
      { hybridExitCost6MonthsHT: Number.POSITIVE_INFINITY },
      { timeExitCost12MonthsHT: GOOGLE_ADS_QUOTE_MAX_MONEY + 1 },
    ] satisfies Array<Partial<GoogleAdsQuoteInputs>>) {
      const result = compareGoogleAdsQuotes({ ...example, ...invalid });

      expect(result.valid).toBe(false);
      expect(result.models).toEqual([]);
    }
  });

  it("separates TTC cash from economic cost when VAT is fully recoverable", () => {
    const fixed = compareGoogleAdsQuotes(example).models[0].horizons[3];

    expect(fixed.ttcCashOut).toBeGreaterThan(fixed.knownEconomicCost);
    expect(fixed.knownEconomicCost).toBe(
      fixed.externalCashHT + fixed.internalCost,
    );
  });

  it("adds non-recoverable VAT to economic cost", () => {
    const fixed = compareGoogleAdsQuotes({
      ...example,
      vatRecoverablePct: 0,
    }).models[0].horizons[3];

    expect(fixed.recoverableVAT).toBe(0);
    expect(fixed.knownEconomicCost).toBe(
      fixed.externalCashHT + fixed.vatCashOut + fixed.internalCost,
    );
  });

  it("returns unavailable unit metrics instead of dividing by zero", () => {
    const metrics = compareGoogleAdsQuotes({
      ...example,
      monthlyClicks: 0,
      monthlyPrimaryActions: 0,
      monthlyQualifiedLeads: 0,
      monthlyNewCustomers: 0,
    }).models[0].horizons[3].metrics;

    expect(metrics.chargedMediaCostPerClickHT).toBeNull();
    expect(metrics.chargedMediaCostPerPrimaryActionHT).toBeNull();
    expect(metrics.chargedMediaCostPerQualifiedLeadHT).toBeNull();
    expect(metrics.knownFullCustomerAcquisitionCost).toBeNull();
    expect(metrics.breakEvenGapPerQualifiedLead).toBeNull();
    expect(metrics.breakEvenStatus).toBe("unavailable");
  });

  it("rejects negative, infinite and intrinsically over-100 percentage inputs", () => {
    const invalidCases: Array<Partial<GoogleAdsQuoteInputs>> = [
      { monthlyMediaSpendHT: -1 },
      { fixedMonthlyFeeHT: Number.POSITIVE_INFINITY },
      { vatRecoverablePct: 101 },
      { hybridFeeRatePct: Number.NaN },
    ];

    for (const invalid of invalidCases) {
      const result = compareGoogleAdsQuotes({ ...example, ...invalid });
      expect(result.valid).toBe(false);
      expect(result.models).toEqual([]);
      expect(Number.isNaN(result.monthlyMediaSurchargeHT)).toBe(true);
    }
  });

  it("accepts a fee rate above 100% because it is not an intrinsic share", () => {
    const result = compareGoogleAdsQuotes({
      ...example,
      percentageFeeBasisMonthlyHT: 100,
      percentageFeeRatePct: 150,
    });
    const percentage = result.models.find(
      (model) => model.key === "percentage",
    );

    expect(result.valid).toBe(true);
    expect(percentage?.monthlyManagementFeeHT).toBe(150);
  });

  it("rejects inverted minimum and maximum fee ranges", () => {
    const result = compareGoogleAdsQuotes({
      ...example,
      percentageMinimumMonthlyFeeHT: 1000,
      percentageMaximumMonthlyFeeHT: 900,
    });

    expect(result.valid).toBe(false);
    expect(result.errors.join(" ")).toContain("minimum mensuel");
  });

  it("requires a fixed contribution-margin window between 1 and 120 months", () => {
    for (const contributionMarginWindowMonths of [0, 121]) {
      const result = compareGoogleAdsQuotes({
        ...example,
        contributionMarginWindowMonths,
      });

      expect(result.valid).toBe(false);
      expect(result.errors.join(" ")).toContain("fenêtre de marge");
    }
  });

  it("rejects finite extreme inputs before they can overflow derived values", () => {
    const result = compareGoogleAdsQuotes({
      ...example,
      monthlyMediaSpendHT: Number.MAX_VALUE,
    });

    expect(result.valid).toBe(false);
    expect(result.models).toEqual([]);
    expect(Number.isNaN(result.monthlyMediaSurchargeHT)).toBe(true);
  });

  it("rejects a non-finite derived unit cost even when every input is finite", () => {
    const result = compareGoogleAdsQuotes({
      ...example,
      monthlyClicks: Number.MIN_VALUE,
    });

    expect(result.valid).toBe(false);
    expect(result.errors.join(" ")).toContain("hors limites");
    expect(result.models).toEqual([]);
  });

  it("makes the adverse scenario visible when known cost exceeds contribution", () => {
    const metrics = compareGoogleAdsQuotes({
      ...example,
      monthlyNewCustomers: 1,
      contributionMarginPerAttributedCustomerHT: 1000,
    }).models[0].horizons[3].metrics;

    expect(metrics.cohortContributionCoverage).toBeLessThan(0);
    expect(metrics.breakEvenGapPerQualifiedLead).toBeLessThan(0);
    expect(metrics.breakEvenStatus).toBe("not-covered");
  });
});
