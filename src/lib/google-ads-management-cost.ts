export interface GoogleAdsManagementCostInputs {
  monthlyMediaSpend: number;
  percentageFeeBasisMonthly: number;
  jurisdictionSurchargeRate: number;
  surchargeEligibleSpendShareRate: number;
  horizonMonths: number;
  fixedMonthlyFee: number;
  percentageFeeRate: number;
  hybridBaseMonthlyFee: number;
  hybridPercentageFeeRate: number;
  oneOffExternalCosts: number;
  monthlyExternalCosts: number;
  initialInternalHours: number;
  monthlyInternalHours: number;
  internalHourlyCost: number;
  qualifiedLeadsPerMonth: number;
}

export type GoogleAdsFeeModel = "fixed" | "percentage" | "hybrid";

export interface GoogleAdsFeeComparison {
  model: GoogleAdsFeeModel;
  managementFeeMonthly: number;
  mediaSurchargeMonthly: number;
  mediaSpendWithSurchargeMonthly: number;
  internalCostMonthly: number;
  knownMonthlyCost: number;
  knownHorizonCost: number;
  knownCostPerQualifiedLead: number;
}

export type GoogleAdsManagementCostResult =
  | {
      status: "invalid-input";
      invalidFields: Array<keyof GoogleAdsManagementCostInputs>;
      comparisons: [];
    }
  | {
      status: "ready";
      invalidFields: [];
      comparisons: GoogleAdsFeeComparison[];
      knownOneOffCost: number;
      totalQualifiedLeads: number;
      fixedVsPercentageFeeBasisCrossing: number | null;
      fixedVsHybridFeeBasisCrossing: number | null;
      percentageVsHybridFeeBasisCrossing: number | null;
    };

const RATE_SCALE = 10_000;

function toCents(value: number) {
  return Math.round(value * 100);
}

function fromCents(value: number) {
  return value / 100;
}

function percentToBasisPoints(value: number) {
  return Math.round(value * 100);
}

function applyBasisPoints(cents: number, basisPoints: number) {
  return Math.round((cents * basisPoints) / RATE_SCALE);
}

function positiveCrossing(numerator: number, denominatorRate: number) {
  if (numerator <= 0 || denominatorRate <= 0) return null;
  const result = numerator / (denominatorRate / 100);
  return Number.isFinite(result) && result > 0 ? result : null;
}

export function calculateGoogleAdsManagementCost(
  input: GoogleAdsManagementCostInputs,
): GoogleAdsManagementCostResult {
  const invalidFields = (
    Object.entries(input) as Array<
      [keyof GoogleAdsManagementCostInputs, number]
    >
  )
    .filter(([key, value]) => {
      if (!Number.isFinite(value) || value < 0) return true;
      if (
        (key === "jurisdictionSurchargeRate" ||
          key === "surchargeEligibleSpendShareRate" ||
          key === "percentageFeeRate" ||
          key === "hybridPercentageFeeRate") &&
        value > 100
      ) {
        return true;
      }
      if (
        key === "horizonMonths" &&
        (!Number.isInteger(value) || value < 1 || value > 60)
      ) {
        return true;
      }
      if (
        (key === "monthlyMediaSpend" ||
          key === "percentageFeeBasisMonthly" ||
          key === "qualifiedLeadsPerMonth") &&
        value <= 0
      ) {
        return true;
      }
      return false;
    })
    .map(([key]) => key);

  if (invalidFields.length > 0) {
    return { status: "invalid-input", invalidFields, comparisons: [] };
  }

  const mediaCents = toCents(input.monthlyMediaSpend);
  const feeBasisCents = toCents(input.percentageFeeBasisMonthly);
  const surchargeEligibleMediaCents = applyBasisPoints(
    mediaCents,
    percentToBasisPoints(input.surchargeEligibleSpendShareRate),
  );
  const surchargeCents = applyBasisPoints(
    surchargeEligibleMediaCents,
    percentToBasisPoints(input.jurisdictionSurchargeRate),
  );
  const mediaSpendWithSurchargeCents = mediaCents + surchargeCents;
  const internalHourlyCents = toCents(input.internalHourlyCost);
  const initialInternalCents = Math.round(
    input.initialInternalHours * internalHourlyCents,
  );
  const monthlyInternalCents = Math.round(
    input.monthlyInternalHours * internalHourlyCents,
  );
  const knownOneOffCents =
    toCents(input.oneOffExternalCosts) + initialInternalCents;
  const monthlyExternalCents = toCents(input.monthlyExternalCosts);

  const feeCentsByModel: Record<GoogleAdsFeeModel, number> = {
    fixed: toCents(input.fixedMonthlyFee),
    percentage: applyBasisPoints(
      feeBasisCents,
      percentToBasisPoints(input.percentageFeeRate),
    ),
    hybrid:
      toCents(input.hybridBaseMonthlyFee) +
      applyBasisPoints(
        feeBasisCents,
        percentToBasisPoints(input.hybridPercentageFeeRate),
      ),
  };

  const totalQualifiedLeads =
    input.qualifiedLeadsPerMonth * input.horizonMonths;

  const comparisons = (
    ["fixed", "percentage", "hybrid"] as GoogleAdsFeeModel[]
  ).map((model) => {
    const knownMonthlyCents =
      mediaSpendWithSurchargeCents +
      feeCentsByModel[model] +
      monthlyExternalCents +
      monthlyInternalCents;
    const knownHorizonCents =
      knownOneOffCents + knownMonthlyCents * input.horizonMonths;

    return {
      model,
      managementFeeMonthly: fromCents(feeCentsByModel[model]),
      mediaSurchargeMonthly: fromCents(surchargeCents),
      mediaSpendWithSurchargeMonthly: fromCents(mediaSpendWithSurchargeCents),
      internalCostMonthly: fromCents(monthlyInternalCents),
      knownMonthlyCost: fromCents(knownMonthlyCents),
      knownHorizonCost: fromCents(knownHorizonCents),
      knownCostPerQualifiedLead:
        totalQualifiedLeads > 0
          ? fromCents(knownHorizonCents) / totalQualifiedLeads
          : Number.NaN,
    };
  });

  return {
    status: "ready",
    invalidFields: [],
    comparisons,
    knownOneOffCost: fromCents(knownOneOffCents),
    totalQualifiedLeads,
    fixedVsPercentageFeeBasisCrossing: positiveCrossing(
      input.fixedMonthlyFee,
      input.percentageFeeRate,
    ),
    fixedVsHybridFeeBasisCrossing: positiveCrossing(
      input.fixedMonthlyFee - input.hybridBaseMonthlyFee,
      input.hybridPercentageFeeRate,
    ),
    percentageVsHybridFeeBasisCrossing: positiveCrossing(
      input.hybridBaseMonthlyFee,
      input.percentageFeeRate - input.hybridPercentageFeeRate,
    ),
  };
}
