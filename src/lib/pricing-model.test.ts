/**
 * Tests pricing-model — couvre la logique de calcul des prix forfait.
 * C'est business-critical : une erreur ici se traduit en perte d'argent.
 */
import { describe, it, expect } from "vitest";
import {
  SELL_MULTIPLIER,
  AI_PRODUCTIVITY,
  DEFAULT_RISK_MARGIN,
  DEFAULT_ACQ_MARGIN,
  computeScalePrice,
  roundPrice,
  ONESHOT_BRICKS,
  RETAINER_BRICKS,
  getOneshotRange,
  getRetainerRange,
} from "./pricing-model";

describe("Constantes pricing", () => {
  it("SELL_MULTIPLIER vaut 1.6 (×1,6 sur les coûts internes)", () => {
    expect(SELL_MULTIPLIER).toBe(1.6);
  });

  it("AI_PRODUCTIVITY vaut 0.85 (~15% de gain IA)", () => {
    expect(AI_PRODUCTIVITY).toBe(0.85);
  });

  it("DEFAULT_RISK_MARGIN vaut 0.25 (25%)", () => {
    expect(DEFAULT_RISK_MARGIN).toBe(0.25);
  });

  it("DEFAULT_ACQ_MARGIN vaut 0.15 (15%)", () => {
    expect(DEFAULT_ACQ_MARGIN).toBe(0.15);
  });
});

describe("computeScalePrice", () => {
  it("retourne 0 partout si aucune heure", () => {
    const result = computeScalePrice({ hours: {} });
    expect(result.baseCost).toBe(0);
    expect(result.aiAdjusted).toBe(0);
    expect(result.withRisk).toBe(0);
    expect(result.retail).toBe(0);
    expect(result.totalHours).toBe(0);
  });

  it("applique le risk + acq margins par défaut", () => {
    const result = computeScalePrice({
      hours: { "dev-senior": 10 },
    });
    // baseCost = 10h × tarif senior
    expect(result.baseCost).toBeGreaterThan(0);
    // withRisk = aiAdjusted × 1.25
    expect(result.withRisk).toBeCloseTo(result.aiAdjusted * 1.25, 0);
    // retail = withRisk × 1.15
    expect(result.retail).toBeCloseTo(result.withRisk * 1.15, 0);
  });

  it("applique des margins customisées si fournies", () => {
    const result = computeScalePrice({
      hours: { "dev-senior": 10 },
      riskMargin: 0.5,
      acqMargin: 0.0,
    });
    expect(result.retail).toBeCloseTo(result.aiAdjusted * 1.5, 0);
  });

  it("retail > withRisk > aiAdjusted (ordre des marges)", () => {
    const result = computeScalePrice({
      hours: { "dev-senior": 50, "dev-integration": 30 },
    });
    expect(result.retail).toBeGreaterThan(result.withRisk);
    expect(result.withRisk).toBeGreaterThan(result.aiAdjusted);
    expect(result.aiAdjusted).toBeLessThanOrEqual(result.baseCost);
  });

  it("totalHours est la somme exacte des heures (pré-IA)", () => {
    const result = computeScalePrice({
      hours: { "dev-senior": 50, "dev-integration": 30, "qa": 20 },
    });
    expect(result.totalHours).toBe(100);
  });
});

describe("roundPrice", () => {
  it("arrondit à 100 € en dessous de 5 000 €", () => {
    expect(roundPrice(1234)).toBe(1200);
    expect(roundPrice(4956)).toBe(5000);
  });

  it("arrondit à 500 € entre 5 000 et 15 000 €", () => {
    expect(roundPrice(7842)).toBe(8000);
    expect(roundPrice(12345)).toBe(12500);
  });

  it("arrondit à 1 000 € entre 15 000 et 50 000 €", () => {
    expect(roundPrice(23456)).toBe(23000);
    expect(roundPrice(48999)).toBe(49000);
  });

  it("arrondit à 5 000 € entre 50 000 et 150 000 €", () => {
    expect(roundPrice(67890)).toBe(70000);
    expect(roundPrice(123456)).toBe(125000);
  });

  it("arrondit à 10 000 € au-dessus de 150 000 €", () => {
    expect(roundPrice(187654)).toBe(190000);
    expect(roundPrice(345000)).toBe(350000);
  });
});

describe("ONESHOT_BRICKS — sanity checks", () => {
  it("contient des bricks définis", () => {
    expect(ONESHOT_BRICKS.length).toBeGreaterThan(0);
  });

  it("chaque brick a un id unique", () => {
    const ids = ONESHOT_BRICKS.map((b) => b.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("chaque brick a au moins low et high scales", () => {
    for (const brick of ONESHOT_BRICKS) {
      expect(brick.scales.low).toBeDefined();
      expect(brick.scales.high).toBeDefined();
      expect(Object.keys(brick.scales.low.hours).length).toBeGreaterThan(0);
      expect(Object.keys(brick.scales.high.hours).length).toBeGreaterThan(0);
    }
  });

  it("low.retail < high.retail pour chaque brick", () => {
    for (const brick of ONESHOT_BRICKS) {
      const low = computeScalePrice(brick.scales.low).retail;
      const high = computeScalePrice(brick.scales.high).retail;
      expect(low).toBeLessThanOrEqual(high);
    }
  });
});

describe("RETAINER_BRICKS — sanity checks", () => {
  it("contient des retainers", () => {
    expect(RETAINER_BRICKS.length).toBeGreaterThan(0);
  });

  it("low.retail ≤ high.retail pour chaque retainer", () => {
    for (const brick of RETAINER_BRICKS) {
      const low = computeScalePrice(brick.scales.low).retail;
      const high = computeScalePrice(brick.scales.high).retail;
      expect(low).toBeLessThanOrEqual(high);
    }
  });
});

describe("getOneshotRange / getRetainerRange", () => {
  it("getOneshotRange renvoie min ≤ max et label non vide", () => {
    for (const brick of ONESHOT_BRICKS) {
      const r = getOneshotRange(brick);
      expect(r.min).toBeGreaterThan(0);
      expect(r.min).toBeLessThanOrEqual(r.max);
      expect(r.label.length).toBeGreaterThan(0);
    }
  });

  it("getRetainerRange renvoie min ≤ max et label non vide", () => {
    for (const brick of RETAINER_BRICKS) {
      const r = getRetainerRange(brick);
      expect(r.min).toBeGreaterThan(0);
      expect(r.min).toBeLessThanOrEqual(r.max);
      expect(r.label.length).toBeGreaterThan(0);
    }
  });
});
