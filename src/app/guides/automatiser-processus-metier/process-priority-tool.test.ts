import { describe, expect, it } from "vitest";
import {
  calculateProcessPriority,
  type ProcessPriorityInputs,
} from "./process-priority-tool";

const base: ProcessPriorityInputs = {
  casesPerMonth: 120,
  minutesPerCase: 9,
  loadedHourlyCost: 38,
  automationRate: 70,
  adoptionRate: 80,
  redeploymentRate: 60,
  setupCost: 4_800,
  internalSetupHours: 32,
  additionalKnownCosts: 0,
  monthlyRunCost: 140,
  horizonMonths: 24,
  measurableOutcome: true,
  stableRules: true,
  reliableData: true,
  recoverableFailure: true,
  namedOwner: true,
};

describe("calculateProcessPriority", () => {
  it("reproduit le scénario par défaut sans compter tout le temps comme valeur", () => {
    const result = calculateProcessPriority(base);

    expect(result.baselineHours).toBeCloseTo(432, 8);
    expect(result.technicallyRemovableHours).toBeCloseTo(302.4, 8);
    expect(result.actuallyFreedHours).toBeCloseTo(241.92, 8);
    expect(result.reassignableHours).toBeCloseTo(145.152, 8);
    expect(result.capacityValue).toBeCloseTo(5_515.776, 8);
    expect(result.initialCost).toBe(6_016);
    expect(result.totalCost).toBe(9_376);
    expect(result.netValue).toBeCloseTo(-3_860.224, 8);
    expect(result.roiPercent).toBeCloseTo(-41.17, 2);
    expect(result.breakEvenMonths).toBeCloseTo(66.98, 2);
    expect(result.decision).toBe("unfavorable");
  });

  it("bloque la décision économique lorsqu'une porte non compensatoire échoue", () => {
    const result = calculateProcessPriority({
      ...base,
      casesPerMonth: 1_000,
      measurableOutcome: false,
    });

    expect(result.netValue).toBeGreaterThan(0);
    expect(result.decision).toBe("blocked");
    expect(result.failedGates).toEqual(["résultat mesurable"]);
  });

  it("accepte un candidat positif seulement lorsque toutes les portes passent", () => {
    const result = calculateProcessPriority({
      ...base,
      casesPerMonth: 600,
    });

    expect(result.failedGates).toEqual([]);
    expect(result.netValue).toBeGreaterThan(0);
    expect(result.decision).toBe("pilot");
    expect(result.breakEvenMonths).not.toBeNull();
  });

  it("fait basculer un cas proche du seuil avec l'adoption moyenne plutôt que la cible finale", () => {
    const targetAdoption = calculateProcessPriority({
      ...base,
      casesPerMonth: 220,
      adoptionRate: 80,
    });
    const averageAdoption = calculateProcessPriority({
      ...base,
      casesPerMonth: 220,
      adoptionRate: 70,
    });

    expect(targetAdoption.netValue).toBeCloseTo(736.256, 8);
    expect(targetAdoption.decision).toBe("pilot");
    expect(averageAdoption.netValue).toBeCloseTo(-527.776, 8);
    expect(averageAdoption.decision).toBe("unfavorable");
  });

  it("intègre les coûts ponctuels connus et peut renverser un scénario positif", () => {
    const withoutAdditionalCosts = calculateProcessPriority({
      ...base,
      casesPerMonth: 220,
    });
    const withAdditionalCosts = calculateProcessPriority({
      ...base,
      casesPerMonth: 220,
      additionalKnownCosts: 1_000,
    });

    expect(withoutAdditionalCosts.decision).toBe("pilot");
    expect(withAdditionalCosts.totalCost).toBe(
      withoutAdditionalCosts.totalCost + 1_000,
    );
    expect(withAdditionalCosts.netValue).toBeCloseTo(-263.744, 8);
    expect(withAdditionalCosts.decision).toBe("unfavorable");
  });

  it("répercute un coût mensuel qui augmente avec le volume", () => {
    const fixedCostAssumption = calculateProcessPriority({
      ...base,
      casesPerMonth: 600,
    });
    const volumeCostAssumption = calculateProcessPriority({
      ...base,
      casesPerMonth: 600,
      monthlyRunCost: 900,
    });

    expect(fixedCostAssumption.decision).toBe("pilot");
    expect(volumeCostAssumption.netValue).toBeLessThan(0);
    expect(volumeCostAssumption.decision).toBe("unfavorable");
  });

  it("borne les pourcentages et neutralise les entrées négatives", () => {
    const result = calculateProcessPriority({
      ...base,
      casesPerMonth: -5,
      automationRate: 300,
      adoptionRate: -20,
      redeploymentRate: 150,
      setupCost: -1,
      additionalKnownCosts: -4,
      monthlyRunCost: -3,
    });

    expect(result.baselineHours).toBe(0);
    expect(result.technicallyRemovableHours).toBe(0);
    expect(result.actuallyFreedHours).toBe(0);
    expect(result.totalCost).toBe(base.internalSetupHours * base.loadedHourlyCost);
    expect(Number.isFinite(result.netValue)).toBe(true);
  });

  it("ne produit pas de délai de retour quand le gain mensuel ne couvre pas l'exploitation", () => {
    const result = calculateProcessPriority({
      ...base,
      casesPerMonth: 1,
      monthlyRunCost: 2_000,
    });

    expect(result.breakEvenMonths).toBeNull();
    expect(result.decision).toBe("unfavorable");
  });

  it("laisse le ROI nul et explicite l'absence de coût initial", () => {
    const result = calculateProcessPriority({
      ...base,
      setupCost: 0,
      internalSetupHours: 0,
      additionalKnownCosts: 0,
      monthlyRunCost: 0,
    });

    expect(result.totalCost).toBe(0);
    expect(result.roiPercent).toBeNull();
    expect(result.breakEvenMonths).toBe(0);
  });
});
