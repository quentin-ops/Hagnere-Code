export const SHOPIFY_PRICING_SOURCE = {
  label: "Tarifs officiels Shopify France",
  url: "https://www.shopify.com/fr/tarifs",
  checkedAt: "19 juillet 2026",
} as const;

export const ECOMMERCE_COST_EXAMPLE = {
  horizonMonths: 36,
  annualGmv: 2_000_000,
  shopifyMonthlyLicense: 2_000,
  shopifyMonthlyApps: 900,
  shopifyVariableFeePercent: 0.5,
  hagnereInitialProject: 45_000,
  hagnereMonthlyMaintenance: 1_500,
} as const;

export interface EcommerceCostInputs {
  annualGmv: number;
  shopifyMonthlyLicense: number;
  shopifyMonthlyApps: number;
  shopifyVariableFeePercent: number;
}

export interface EcommerceCostComparison {
  shopifyYearly: number;
  shopifyTotal: number;
  hagnereTotal: number;
  difference: number;
  breakEvenMonths: number | null;
}

function nonNegative(value: number): number {
  return Number.isFinite(value) ? Math.max(0, value) : 0;
}

export function calculateEcommerceCostComparison(
  inputs: EcommerceCostInputs,
): EcommerceCostComparison {
  const annualGmv = nonNegative(inputs.annualGmv);
  const monthlyLicense = nonNegative(inputs.shopifyMonthlyLicense);
  const monthlyApps = nonNegative(inputs.shopifyMonthlyApps);
  const variableFeePercent = nonNegative(inputs.shopifyVariableFeePercent);
  const horizonYears = ECOMMERCE_COST_EXAMPLE.horizonMonths / 12;

  const shopifyYearly =
    (monthlyLicense + monthlyApps) * 12 +
    annualGmv * (variableFeePercent / 100);
  const shopifyTotal = shopifyYearly * horizonYears;
  const hagnereTotal =
    ECOMMERCE_COST_EXAMPLE.hagnereInitialProject +
    ECOMMERCE_COST_EXAMPLE.hagnereMonthlyMaintenance *
      ECOMMERCE_COST_EXAMPLE.horizonMonths;
  const difference = shopifyTotal - hagnereTotal;
  const monthlyOperatingSavings =
    shopifyYearly / 12 - ECOMMERCE_COST_EXAMPLE.hagnereMonthlyMaintenance;
  const breakEvenMonths =
    monthlyOperatingSavings > 0
      ? Math.ceil(
          ECOMMERCE_COST_EXAMPLE.hagnereInitialProject /
            monthlyOperatingSavings,
        )
      : null;

  return {
    shopifyYearly,
    shopifyTotal,
    hagnereTotal,
    difference,
    breakEvenMonths,
  };
}
