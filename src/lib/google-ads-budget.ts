export interface GoogleAdsBudgetInputs {
  marginPerSale: number;
  leadToSaleRate: number;
  targetQualifiedLeads: number;
  nonMediaCosts: number;
  amountToKeep: number;
  forecastClicks: number;
  forecastMediaCost: number;
  maxAcceptableLoss: number;
}

export type GoogleAdsBudgetVerdict =
  | "missing-data"
  | "impossible-volume"
  | "financially-compatible"
  | "margin-limit-exceeded"
  | "risk-limit-exceeded"
  | "both-limits-exceeded";

export interface GoogleAdsBudgetResult {
  salesIfTargetReached: number;
  marginIfTargetReached: number;
  forecastCostPerClick: number;
  requiredClickToLeadRate: number;
  mediaBudgetIfTargetReached: number;
  riskCompatibleMediaBudget: number;
  completeTestCost: number;
  marginLeftIfTargetReached: number;
  verdict: GoogleAdsBudgetVerdict;
}

function emptyResult(verdict: GoogleAdsBudgetVerdict): GoogleAdsBudgetResult {
  return {
    salesIfTargetReached: Number.NaN,
    marginIfTargetReached: Number.NaN,
    forecastCostPerClick: Number.NaN,
    requiredClickToLeadRate: Number.NaN,
    mediaBudgetIfTargetReached: Number.NaN,
    riskCompatibleMediaBudget: Number.NaN,
    completeTestCost: Number.NaN,
    marginLeftIfTargetReached: Number.NaN,
    verdict,
  };
}

export function calculateGoogleAdsBudget(
  input: GoogleAdsBudgetInputs,
): GoogleAdsBudgetResult {
  if (
    Object.values(input).some((value) => !Number.isFinite(value)) ||
    input.marginPerSale < 0 ||
    input.leadToSaleRate < 0 ||
    input.leadToSaleRate > 100 ||
    input.targetQualifiedLeads <= 0 ||
    !Number.isInteger(input.targetQualifiedLeads) ||
    input.nonMediaCosts < 0 ||
    input.amountToKeep < 0 ||
    input.forecastClicks <= 0 ||
    !Number.isInteger(input.forecastClicks) ||
    input.forecastMediaCost <= 0 ||
    input.maxAcceptableLoss < 0
  ) {
    return emptyResult("missing-data");
  }

  const salesIfTargetReached =
    input.targetQualifiedLeads * (input.leadToSaleRate / 100);
  const marginIfTargetReached = salesIfTargetReached * input.marginPerSale;
  const mediaBudgetIfTargetReached =
    marginIfTargetReached - input.nonMediaCosts - input.amountToKeep;
  const riskCompatibleMediaBudget =
    input.maxAcceptableLoss - input.nonMediaCosts;
  const completeTestCost = input.forecastMediaCost + input.nonMediaCosts;
  const marginLeftIfTargetReached = marginIfTargetReached - completeTestCost;
  const forecastCostPerClick = input.forecastMediaCost / input.forecastClicks;
  const requiredClickToLeadRate =
    (input.targetQualifiedLeads / input.forecastClicks) * 100;

  const derivedValues = [
    salesIfTargetReached,
    marginIfTargetReached,
    mediaBudgetIfTargetReached,
    riskCompatibleMediaBudget,
    completeTestCost,
    marginLeftIfTargetReached,
    forecastCostPerClick,
    requiredClickToLeadRate,
  ];
  if (derivedValues.some((value) => !Number.isFinite(value))) {
    return emptyResult("missing-data");
  }

  let verdict: GoogleAdsBudgetVerdict = "financially-compatible";
  if (requiredClickToLeadRate > 100) {
    verdict = "impossible-volume";
  } else {
    const exceedsRiskLimit =
      riskCompatibleMediaBudget < input.forecastMediaCost;
    const exceedsMarginLimit =
      mediaBudgetIfTargetReached < input.forecastMediaCost;

    if (exceedsRiskLimit && exceedsMarginLimit) {
      verdict = "both-limits-exceeded";
    } else if (exceedsRiskLimit) {
      verdict = "risk-limit-exceeded";
    } else if (exceedsMarginLimit) {
      verdict = "margin-limit-exceeded";
    }
  }

  return {
    salesIfTargetReached,
    marginIfTargetReached,
    forecastCostPerClick,
    requiredClickToLeadRate,
    mediaBudgetIfTargetReached,
    riskCompatibleMediaBudget,
    completeTestCost,
    marginLeftIfTargetReached,
    verdict,
  };
}
