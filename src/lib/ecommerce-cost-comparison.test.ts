import { describe, expect, it } from "vitest";
import {
  calculateEcommerceCostComparison,
  ECOMMERCE_COST_EXAMPLE,
} from "./ecommerce-cost-comparison";
import { gmvCalculatorHtml } from "@/components/ecommerce/sections/gmv-calculator";

describe("ecommerce cost comparison", () => {
  it("uses the visible 36-month example assumptions without hidden fees", () => {
    const result = calculateEcommerceCostComparison({
      annualGmv: ECOMMERCE_COST_EXAMPLE.annualGmv,
      shopifyMonthlyLicense: ECOMMERCE_COST_EXAMPLE.shopifyMonthlyLicense,
      shopifyMonthlyApps: ECOMMERCE_COST_EXAMPLE.shopifyMonthlyApps,
      shopifyVariableFeePercent:
        ECOMMERCE_COST_EXAMPLE.shopifyVariableFeePercent,
    });

    expect(result.shopifyYearly).toBe(44_800);
    expect(result.shopifyTotal).toBe(134_400);
    expect(result.hagnereTotal).toBe(99_000);
    expect(result.difference).toBe(35_400);
    expect(result.breakEvenMonths).toBe(21);
  });

  it("derives break-even from the entered costs instead of a fixed promise", () => {
    const result = calculateEcommerceCostComparison({
      annualGmv: 500_000,
      shopifyMonthlyLicense: ECOMMERCE_COST_EXAMPLE.shopifyMonthlyLicense,
      shopifyMonthlyApps: ECOMMERCE_COST_EXAMPLE.shopifyMonthlyApps,
      shopifyVariableFeePercent:
        ECOMMERCE_COST_EXAMPLE.shopifyVariableFeePercent,
    });

    expect(result.breakEvenMonths).toBe(28);
  });

  it("does not invent a break-even when recurring savings are absent", () => {
    const result = calculateEcommerceCostComparison({
      annualGmv: 0,
      shopifyMonthlyLicense: 0,
      shopifyMonthlyApps: 0,
      shopifyVariableFeePercent: 0,
    });

    expect(result.breakEvenMonths).toBeNull();
    expect(result.difference).toBe(-99_000);
  });

  it("publishes the same assumptions used by the calculation", () => {
    expect(gmvCalculatorHtml).toContain(
      `value="${ECOMMERCE_COST_EXAMPLE.shopifyMonthlyLicense}"`,
    );
    expect(gmvCalculatorHtml).toContain(
      `value="${ECOMMERCE_COST_EXAMPLE.shopifyMonthlyApps}"`,
    );
    expect(gmvCalculatorHtml).toContain(
      `value="${ECOMMERCE_COST_EXAMPLE.shopifyVariableFeePercent}"`,
    );
    expect(gmvCalculatorHtml).toContain("aucun amortissement sur cinq ans");
    expect(gmvCalculatorHtml).not.toMatch(/12[–-]18 mois|500 k€ de GMV/);
  });
});
