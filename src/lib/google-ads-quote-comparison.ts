export const GOOGLE_ADS_QUOTE_HORIZONS = [3, 6, 12] as const;
export const GOOGLE_ADS_QUOTE_MAX_MONEY = 1_000_000_000;
export const GOOGLE_ADS_QUOTE_MAX_VOLUME = 1_000_000_000;
export const GOOGLE_ADS_QUOTE_MAX_HOURS = 100_000;
export const GOOGLE_ADS_QUOTE_MAX_RATE = 10_000;
export const GOOGLE_ADS_QUOTE_MAX_MARGIN_WINDOW_MONTHS = 120;

export type GoogleAdsQuoteHorizon = (typeof GOOGLE_ADS_QUOTE_HORIZONS)[number];

export type GoogleAdsPricingModel = "fixed" | "percentage" | "hybrid" | "time";

export interface GoogleAdsQuoteInputs {
  monthlyMediaSpendHT: number;
  percentageFeeBasisMonthlyHT: number;
  hybridFeeBasisMonthlyHT: number;
  franceServedSpendSharePct: number;
  franceRegulatoryOperatingCostPct: number;
  vatRatePct: number;
  vatRecoverablePct: number;
  oneOffCommonExternalHT: number;
  monthlyCommonExternalHT: number;
  internalHourlyCost: number;
  monthlyClicks: number;
  monthlyPrimaryActions: number;
  monthlyQualifiedLeads: number;
  monthlyNewCustomers: number;
  contributionMarginPerAttributedCustomerHT: number;
  contributionMarginWindowMonths: number;
  fixedSetupFeeHT: number;
  fixedMonthlyFeeHT: number;
  fixedOneOffScopeAdjustmentHT: number;
  fixedMonthlyScopeAdjustmentHT: number;
  fixedExitCost3MonthsHT: number;
  fixedExitCost6MonthsHT: number;
  fixedExitCost12MonthsHT: number;
  fixedInitialInternalHours: number;
  fixedMonthlyInternalHours: number;
  percentageSetupFeeHT: number;
  percentageFeeRatePct: number;
  percentageMinimumMonthlyFeeHT: number;
  percentageMaximumMonthlyFeeHT: number;
  percentageOneOffScopeAdjustmentHT: number;
  percentageMonthlyScopeAdjustmentHT: number;
  percentageExitCost3MonthsHT: number;
  percentageExitCost6MonthsHT: number;
  percentageExitCost12MonthsHT: number;
  percentageInitialInternalHours: number;
  percentageMonthlyInternalHours: number;
  hybridSetupFeeHT: number;
  hybridMonthlyBaseFeeHT: number;
  hybridFeeRatePct: number;
  hybridMinimumMonthlyFeeHT: number;
  hybridMaximumMonthlyFeeHT: number;
  hybridOneOffScopeAdjustmentHT: number;
  hybridMonthlyScopeAdjustmentHT: number;
  hybridExitCost3MonthsHT: number;
  hybridExitCost6MonthsHT: number;
  hybridExitCost12MonthsHT: number;
  hybridInitialInternalHours: number;
  hybridMonthlyInternalHours: number;
  timeSetupHours: number;
  timeMonthlyHours: number;
  timeHourlyRateHT: number;
  timeOneOffScopeAdjustmentHT: number;
  timeMonthlyScopeAdjustmentHT: number;
  timeExitCost3MonthsHT: number;
  timeExitCost6MonthsHT: number;
  timeExitCost12MonthsHT: number;
  timeInitialInternalHours: number;
  timeMonthlyInternalHours: number;
}

export type GoogleAdsBreakEvenStatus =
  "covered" | "not-covered" | "unavailable";

export interface GoogleAdsQuoteMetrics {
  chargedMediaCostPerClickHT: number | null;
  chargedMediaCostPerPrimaryActionHT: number | null;
  chargedMediaCostPerQualifiedLeadHT: number | null;
  knownFullCustomerAcquisitionCost: number | null;
  knownFullCostPerQualifiedLead: number | null;
  breakEvenFullCostPerQualifiedLead: number | null;
  breakEvenGapPerQualifiedLead: number | null;
  cohortContributionCoverage: number | null;
  breakEvenStatus: GoogleAdsBreakEvenStatus;
}

export interface GoogleAdsQuoteHorizonResult {
  months: GoogleAdsQuoteHorizon;
  exitCostHT: number;
  externalCashHT: number;
  vatCashOut: number;
  ttcCashOut: number;
  recoverableVAT: number;
  internalCost: number;
  knownEconomicCost: number;
  metrics: GoogleAdsQuoteMetrics;
}

export interface GoogleAdsQuoteModelResult {
  key: GoogleAdsPricingModel;
  quotedSetupFeeHT: number;
  oneOffScopeAdjustmentHT: number;
  normalizedOneOffFeeHT: number;
  monthlyManagementFeeHT: number;
  monthlyScopeAdjustmentHT: number;
  normalizedMonthlyFeeHT: number;
  horizons: Record<GoogleAdsQuoteHorizon, GoogleAdsQuoteHorizonResult>;
}

export interface GoogleAdsQuoteComparisonResult {
  valid: boolean;
  errors: string[];
  monthlyMediaSurchargeHT: number;
  models: GoogleAdsQuoteModelResult[];
}

const INTRINSIC_PERCENTAGE_FIELDS: Array<keyof GoogleAdsQuoteInputs> = [
  "franceServedSpendSharePct",
  "vatRatePct",
  "vatRecoverablePct",
];

const UNBOUNDED_RATE_FIELDS: Array<keyof GoogleAdsQuoteInputs> = [
  "franceRegulatoryOperatingCostPct",
  "percentageFeeRatePct",
  "hybridFeeRatePct",
];

const MONEY_FIELDS: Array<keyof GoogleAdsQuoteInputs> = [
  "monthlyMediaSpendHT",
  "percentageFeeBasisMonthlyHT",
  "hybridFeeBasisMonthlyHT",
  "oneOffCommonExternalHT",
  "monthlyCommonExternalHT",
  "internalHourlyCost",
  "contributionMarginPerAttributedCustomerHT",
  "fixedSetupFeeHT",
  "fixedMonthlyFeeHT",
  "fixedOneOffScopeAdjustmentHT",
  "fixedMonthlyScopeAdjustmentHT",
  "fixedExitCost3MonthsHT",
  "fixedExitCost6MonthsHT",
  "fixedExitCost12MonthsHT",
  "percentageSetupFeeHT",
  "percentageMinimumMonthlyFeeHT",
  "percentageMaximumMonthlyFeeHT",
  "percentageOneOffScopeAdjustmentHT",
  "percentageMonthlyScopeAdjustmentHT",
  "percentageExitCost3MonthsHT",
  "percentageExitCost6MonthsHT",
  "percentageExitCost12MonthsHT",
  "hybridSetupFeeHT",
  "hybridMonthlyBaseFeeHT",
  "hybridMinimumMonthlyFeeHT",
  "hybridMaximumMonthlyFeeHT",
  "hybridOneOffScopeAdjustmentHT",
  "hybridMonthlyScopeAdjustmentHT",
  "hybridExitCost3MonthsHT",
  "hybridExitCost6MonthsHT",
  "hybridExitCost12MonthsHT",
  "timeHourlyRateHT",
  "timeOneOffScopeAdjustmentHT",
  "timeMonthlyScopeAdjustmentHT",
  "timeExitCost3MonthsHT",
  "timeExitCost6MonthsHT",
  "timeExitCost12MonthsHT",
];

const VOLUME_FIELDS: Array<keyof GoogleAdsQuoteInputs> = [
  "monthlyClicks",
  "monthlyPrimaryActions",
  "monthlyQualifiedLeads",
  "monthlyNewCustomers",
];

const HOURS_FIELDS: Array<keyof GoogleAdsQuoteInputs> = [
  "fixedInitialInternalHours",
  "fixedMonthlyInternalHours",
  "percentageInitialInternalHours",
  "percentageMonthlyInternalHours",
  "hybridInitialInternalHours",
  "hybridMonthlyInternalHours",
  "timeSetupHours",
  "timeMonthlyHours",
  "timeInitialInternalHours",
  "timeMonthlyInternalHours",
];

function roundMoney(value: number): number {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

function safeDivide(numerator: number, denominator: number): number | null {
  return denominator > 0 ? numerator / denominator : null;
}

function applyMinimumAndMaximum(
  value: number,
  minimum: number,
  maximum: number,
): number {
  const afterMinimum = Math.max(value, minimum);
  return maximum > 0 ? Math.min(afterMinimum, maximum) : afterMinimum;
}

function getBreakEvenStatus(gap: number | null): GoogleAdsBreakEvenStatus {
  if (gap === null) return "unavailable";
  return gap >= 0 ? "covered" : "not-covered";
}

function modelFees(input: GoogleAdsQuoteInputs): Array<{
  key: GoogleAdsPricingModel;
  quotedSetupFeeHT: number;
  oneOffScopeAdjustmentHT: number;
  monthlyManagementFeeHT: number;
  monthlyScopeAdjustmentHT: number;
  exitCostsHT: Record<GoogleAdsQuoteHorizon, number>;
  initialInternalHours: number;
  monthlyInternalHours: number;
}> {
  const percentageRawFee =
    input.percentageFeeBasisMonthlyHT * (input.percentageFeeRatePct / 100);
  const hybridRawFee =
    input.hybridMonthlyBaseFeeHT +
    input.hybridFeeBasisMonthlyHT * (input.hybridFeeRatePct / 100);

  return [
    {
      key: "fixed",
      quotedSetupFeeHT: input.fixedSetupFeeHT,
      oneOffScopeAdjustmentHT: input.fixedOneOffScopeAdjustmentHT,
      monthlyManagementFeeHT: input.fixedMonthlyFeeHT,
      monthlyScopeAdjustmentHT: input.fixedMonthlyScopeAdjustmentHT,
      exitCostsHT: {
        3: input.fixedExitCost3MonthsHT,
        6: input.fixedExitCost6MonthsHT,
        12: input.fixedExitCost12MonthsHT,
      },
      initialInternalHours: input.fixedInitialInternalHours,
      monthlyInternalHours: input.fixedMonthlyInternalHours,
    },
    {
      key: "percentage",
      quotedSetupFeeHT: input.percentageSetupFeeHT,
      oneOffScopeAdjustmentHT: input.percentageOneOffScopeAdjustmentHT,
      monthlyManagementFeeHT: applyMinimumAndMaximum(
        percentageRawFee,
        input.percentageMinimumMonthlyFeeHT,
        input.percentageMaximumMonthlyFeeHT,
      ),
      monthlyScopeAdjustmentHT: input.percentageMonthlyScopeAdjustmentHT,
      exitCostsHT: {
        3: input.percentageExitCost3MonthsHT,
        6: input.percentageExitCost6MonthsHT,
        12: input.percentageExitCost12MonthsHT,
      },
      initialInternalHours: input.percentageInitialInternalHours,
      monthlyInternalHours: input.percentageMonthlyInternalHours,
    },
    {
      key: "hybrid",
      quotedSetupFeeHT: input.hybridSetupFeeHT,
      oneOffScopeAdjustmentHT: input.hybridOneOffScopeAdjustmentHT,
      monthlyManagementFeeHT: applyMinimumAndMaximum(
        hybridRawFee,
        input.hybridMinimumMonthlyFeeHT,
        input.hybridMaximumMonthlyFeeHT,
      ),
      monthlyScopeAdjustmentHT: input.hybridMonthlyScopeAdjustmentHT,
      exitCostsHT: {
        3: input.hybridExitCost3MonthsHT,
        6: input.hybridExitCost6MonthsHT,
        12: input.hybridExitCost12MonthsHT,
      },
      initialInternalHours: input.hybridInitialInternalHours,
      monthlyInternalHours: input.hybridMonthlyInternalHours,
    },
    {
      key: "time",
      quotedSetupFeeHT: input.timeSetupHours * input.timeHourlyRateHT,
      oneOffScopeAdjustmentHT: input.timeOneOffScopeAdjustmentHT,
      monthlyManagementFeeHT: input.timeMonthlyHours * input.timeHourlyRateHT,
      monthlyScopeAdjustmentHT: input.timeMonthlyScopeAdjustmentHT,
      exitCostsHT: {
        3: input.timeExitCost3MonthsHT,
        6: input.timeExitCost6MonthsHT,
        12: input.timeExitCost12MonthsHT,
      },
      initialInternalHours: input.timeInitialInternalHours,
      monthlyInternalHours: input.timeMonthlyInternalHours,
    },
  ];
}

function invalidResult(errors: string[]): GoogleAdsQuoteComparisonResult {
  return {
    valid: false,
    errors,
    monthlyMediaSurchargeHT: Number.NaN,
    models: [],
  };
}

function containsNonFiniteDerivedValue(value: unknown): boolean {
  if (typeof value === "number") return !Number.isFinite(value);
  if (value === null || typeof value !== "object") return false;
  return Object.values(value).some(containsNonFiniteDerivedValue);
}

export function compareGoogleAdsQuotes(
  input: GoogleAdsQuoteInputs,
): GoogleAdsQuoteComparisonResult {
  const errors: string[] = [];

  for (const value of Object.values(input)) {
    if (!Number.isFinite(value) || value < 0) {
      errors.push("Chaque valeur doit être un nombre positif ou nul.");
      break;
    }
  }

  for (const key of INTRINSIC_PERCENTAGE_FIELDS) {
    if (Number.isFinite(input[key]) && input[key] > 100) {
      errors.push("Une part ou une récupération ne peut pas dépasser 100 %.");
      break;
    }
  }

  for (const key of UNBOUNDED_RATE_FIELDS) {
    if (Number.isFinite(input[key]) && input[key] > GOOGLE_ADS_QUOTE_MAX_RATE) {
      errors.push(
        `Le calculateur est limité à ${GOOGLE_ADS_QUOTE_MAX_RATE.toLocaleString("fr-FR")} % pour un taux de coût ou d’honoraires.`,
      );
      break;
    }
  }

  for (const key of MONEY_FIELDS) {
    if (
      Number.isFinite(input[key]) &&
      input[key] > GOOGLE_ADS_QUOTE_MAX_MONEY
    ) {
      errors.push(
        "Une valeur monétaire dépasse la limite de sécurité du calculateur.",
      );
      break;
    }
  }

  for (const key of VOLUME_FIELDS) {
    if (
      Number.isFinite(input[key]) &&
      input[key] > GOOGLE_ADS_QUOTE_MAX_VOLUME
    ) {
      errors.push("Un volume dépasse la limite de sécurité du calculateur.");
      break;
    }
  }

  for (const key of HOURS_FIELDS) {
    if (
      Number.isFinite(input[key]) &&
      input[key] > GOOGLE_ADS_QUOTE_MAX_HOURS
    ) {
      errors.push(
        "Un volume d’heures dépasse la limite de sécurité du calculateur.",
      );
      break;
    }
  }

  if (
    Number.isFinite(input.contributionMarginWindowMonths) &&
    (input.contributionMarginWindowMonths < 1 ||
      input.contributionMarginWindowMonths >
        GOOGLE_ADS_QUOTE_MAX_MARGIN_WINDOW_MONTHS)
  ) {
    errors.push(
      `La fenêtre de marge doit être comprise entre 1 et ${GOOGLE_ADS_QUOTE_MAX_MARGIN_WINDOW_MONTHS} mois.`,
    );
  }

  if (
    input.percentageMaximumMonthlyFeeHT > 0 &&
    input.percentageMinimumMonthlyFeeHT > input.percentageMaximumMonthlyFeeHT
  ) {
    errors.push(
      "Le minimum mensuel du modèle au pourcentage dépasse son plafond.",
    );
  }

  if (
    input.hybridMaximumMonthlyFeeHT > 0 &&
    input.hybridMinimumMonthlyFeeHT > input.hybridMaximumMonthlyFeeHT
  ) {
    errors.push("Le minimum mensuel du modèle hybride dépasse son plafond.");
  }

  if (errors.length > 0) {
    return invalidResult(errors);
  }

  const monthlyMediaSurchargeHT =
    input.monthlyMediaSpendHT *
    (input.franceServedSpendSharePct / 100) *
    (input.franceRegulatoryOperatingCostPct / 100);
  const vatRate = input.vatRatePct / 100;
  const recoverableRate = input.vatRecoverablePct / 100;

  const models = modelFees(input).map((fees) => {
    const normalizedOneOffFeeHT =
      fees.quotedSetupFeeHT + fees.oneOffScopeAdjustmentHT;
    const normalizedMonthlyFeeHT =
      fees.monthlyManagementFeeHT + fees.monthlyScopeAdjustmentHT;
    const horizons = {} as Record<
      GoogleAdsQuoteHorizon,
      GoogleAdsQuoteHorizonResult
    >;

    for (const months of GOOGLE_ADS_QUOTE_HORIZONS) {
      const externalCashHT =
        input.oneOffCommonExternalHT +
        normalizedOneOffFeeHT +
        fees.exitCostsHT[months] +
        months *
          (input.monthlyMediaSpendHT +
            monthlyMediaSurchargeHT +
            input.monthlyCommonExternalHT +
            normalizedMonthlyFeeHT);
      const vatCashOut = externalCashHT * vatRate;
      const recoverableVAT = vatCashOut * recoverableRate;
      const ttcCashOut = externalCashHT + vatCashOut;
      const internalCost =
        (fees.initialInternalHours + months * fees.monthlyInternalHours) *
        input.internalHourlyCost;
      const knownEconomicCost =
        externalCashHT + vatCashOut - recoverableVAT + internalCost;

      const clicks = input.monthlyClicks * months;
      const primaryActions = input.monthlyPrimaryActions * months;
      const qualifiedLeads = input.monthlyQualifiedLeads * months;
      const newCustomers = input.monthlyNewCustomers * months;
      const mediaAndSurcharge =
        months * (input.monthlyMediaSpendHT + monthlyMediaSurchargeHT);
      const cohortContributionMargin =
        newCustomers * input.contributionMarginPerAttributedCustomerHT;
      const breakEvenFullCostPerQualifiedLead =
        qualifiedLeads > 0
          ? safeDivide(cohortContributionMargin, qualifiedLeads)
          : null;
      const knownFullCostPerQualifiedLead = safeDivide(
        knownEconomicCost,
        qualifiedLeads,
      );
      const breakEvenGapPerQualifiedLead =
        breakEvenFullCostPerQualifiedLead !== null &&
        knownFullCostPerQualifiedLead !== null
          ? breakEvenFullCostPerQualifiedLead - knownFullCostPerQualifiedLead
          : null;

      horizons[months] = {
        months,
        exitCostHT: roundMoney(fees.exitCostsHT[months]),
        externalCashHT: roundMoney(externalCashHT),
        vatCashOut: roundMoney(vatCashOut),
        ttcCashOut: roundMoney(ttcCashOut),
        recoverableVAT: roundMoney(recoverableVAT),
        internalCost: roundMoney(internalCost),
        knownEconomicCost: roundMoney(knownEconomicCost),
        metrics: {
          chargedMediaCostPerClickHT: safeDivide(mediaAndSurcharge, clicks),
          chargedMediaCostPerPrimaryActionHT: safeDivide(
            mediaAndSurcharge,
            primaryActions,
          ),
          chargedMediaCostPerQualifiedLeadHT: safeDivide(
            mediaAndSurcharge,
            qualifiedLeads,
          ),
          knownFullCustomerAcquisitionCost: safeDivide(
            knownEconomicCost,
            newCustomers,
          ),
          knownFullCostPerQualifiedLead,
          breakEvenFullCostPerQualifiedLead,
          breakEvenGapPerQualifiedLead,
          cohortContributionCoverage:
            qualifiedLeads > 0 || newCustomers > 0
              ? cohortContributionMargin - knownEconomicCost
              : null,
          breakEvenStatus: getBreakEvenStatus(breakEvenGapPerQualifiedLead),
        },
      };
    }

    return {
      key: fees.key,
      quotedSetupFeeHT: roundMoney(fees.quotedSetupFeeHT),
      oneOffScopeAdjustmentHT: roundMoney(fees.oneOffScopeAdjustmentHT),
      normalizedOneOffFeeHT: roundMoney(normalizedOneOffFeeHT),
      monthlyManagementFeeHT: roundMoney(fees.monthlyManagementFeeHT),
      monthlyScopeAdjustmentHT: roundMoney(fees.monthlyScopeAdjustmentHT),
      normalizedMonthlyFeeHT: roundMoney(normalizedMonthlyFeeHT),
      horizons,
    };
  });

  if (
    !Number.isFinite(monthlyMediaSurchargeHT) ||
    containsNonFiniteDerivedValue(models)
  ) {
    return invalidResult([
      "Les valeurs saisies produisent un résultat hors limites. Réduisez les montants, volumes ou taux.",
    ]);
  }

  return {
    valid: true,
    errors: [],
    monthlyMediaSurchargeHT: roundMoney(monthlyMediaSurchargeHT),
    models,
  };
}
