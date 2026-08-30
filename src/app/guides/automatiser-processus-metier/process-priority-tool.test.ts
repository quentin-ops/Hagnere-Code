import { describe, expect, it } from "vitest";
import {
  calculateProcessPriority,
  INITIAL_INPUTS,
  type ProcessPriorityInputs,
} from "./process-priority-tool";

/**
 * Spécification du modèle économique du guide.
 *
 * Le scénario de référence est celui publié en section 05 : le flux de
 * relance des factures échues du cas construit. Les valeurs attendues ici
 * sont exactement celles imprimées dans le tableau du guide ; toute
 * divergence entre les deux fait échouer ce fichier ou
 * `content-quality.test.ts`, qui relit la page rendue.
 */
const base: ProcessPriorityInputs = { ...INITIAL_INPUTS };

/** Coût horaire retenu dans le guide, publié par l'INSEE pour 2025. */
const HOURLY = 44.7;

describe("calculateProcessPriority", () => {
  it("ouvre sur le dossier du guide, déjà résolu", () => {
    // L'outil s'ouvrait sur cinq conditions décochées : le premier écran
    // affichait « décision bloquée » et n'apprenait rien.
    expect(base.measurableOutcome).toBe(true);
    expect(base.stableRules).toBe(true);
    expect(base.reliableData).toBe(true);
    expect(base.recoverableFailure).toBe(true);
    expect(base.namedOwner).toBe(true);
    expect(base.casesPerMonth).toBe(90);
    expect(base.minutesPerCase).toBe(8);
    expect(base.loadedHourlyCost).toBe(HOURLY);
    expect(base.horizonMonths).toBe(12);
    // Le suivi vaut deux heures par mois au coût horaire retenu.
    expect(base.monthlyRunCost).toBeCloseTo(2 * HOURLY, 8);
    // La construction vaut quatre jours de sept heures.
    expect(base.internalSetupHours).toBe(4 * 7);
    // Aucun euro ne sort de l'entreprise : le flux tient sur l'abonnement
    // déjà payé, ce que la section 04 démontre par le quota de requêtes.
    expect(base.setupCost).toBe(0);
    expect(base.additionalKnownCosts).toBe(0);
  });

  it("reproduit ligne à ligne le tableau publié en section 05", () => {
    const result = calculateProcessPriority(base);

    expect(result.baselineHours).toBeCloseTo(144, 8);
    expect(result.technicallyRemovableHours).toBeCloseTo(93.6, 8);
    expect(result.actuallyFreedHours).toBeCloseTo(79.56, 8);
    expect(result.reassignableHours).toBeCloseTo(39.78, 8);
    expect(result.capacityValue).toBeCloseTo(1_778.166, 8);
    expect(result.initialCost).toBeCloseTo(1_251.6, 8);
    expect(result.totalCost).toBeCloseTo(2_324.4, 8);
    expect(result.netValue).toBeCloseTo(-546.234, 8);
    expect(result.roiPercent).toBeCloseTo(-23.5, 6);
    expect(result.decision).toBe("unfavorable");
  });

  it("vérifie l’identité en heures que le guide publie", () => {
    // Quand tous les postes sont du temps interne, l'écart vaut le coût
    // horaire multiplié par la différence d'heures. Méthode différente de
    // celle du composant, qui empile capacité puis coûts.
    const result = calculateProcessPriority(base);
    const investedHours =
      base.internalSetupHours + (base.monthlyRunCost / HOURLY) * 12;

    expect(investedHours).toBeCloseTo(52, 8);
    expect(result.reassignableHours - investedHours).toBeCloseTo(-12.22, 8);
    expect((result.reassignableHours - investedHours) * HOURLY).toBeCloseTo(
      result.netValue,
      8,
    );
  });

  it("retrouve par balayage le seuil de 118 relances publié", () => {
    // Le guide résout une inéquation linéaire ; ce contrôle balaie le volume
    // relance par relance et s'arrête au premier équilibre.
    let tipping = 0;
    for (let cases = 1; cases <= 5_000; cases += 1) {
      if (calculateProcessPriority({ ...base, casesPerMonth: cases }).netValue > 0) {
        tipping = cases;
        break;
      }
    }

    expect(tipping).toBe(118);
    expect(
      calculateProcessPriority({ ...base, casesPerMonth: 117 }).netValue,
    ).toBeLessThan(0);
  });

  it("chiffre la sensibilité au suivi annoncée dans le guide", () => {
    // Ramener le suivi de deux heures à une heure par mois.
    const result = calculateProcessPriority({
      ...base,
      monthlyRunCost: HOURLY,
    });

    expect(result.totalCost).toBeCloseTo(1_788, 8);
    expect(result.netValue).toBeCloseTo(-9.834, 8);
    expect(result.decision).toBe("unfavorable");
  });

  it("montre que le coût horaire ne change jamais le signe", () => {
    // Tous les postes du scénario étant du temps interne, l'écart est
    // proportionnel au taux : il change d'ampleur, jamais de sens.
    for (const rate of [22, 32, 44.7, 65, 120]) {
      const scaled = calculateProcessPriority({
        ...base,
        loadedHourlyCost: rate,
        monthlyRunCost: 2 * rate,
      });
      expect(scaled.netValue).toBeCloseTo((-12.22 * rate), 6);
      expect(scaled.decision).toBe("unfavorable");
    }
  });

  it("bloque la décision dès qu’une seule question reçoit un non", () => {
    const result = calculateProcessPriority({
      ...base,
      casesPerMonth: 1_000,
      measurableOutcome: false,
    });

    expect(result.netValue).toBeGreaterThan(0);
    expect(result.decision).toBe("blocked");
    expect(result.failedGates).toEqual([
      "Deux personnes produisent le même résultat sur les mêmes dossiers",
    ]);
  });

  it("n’accepte un candidat que si les cinq réponses sont oui", () => {
    const result = calculateProcessPriority({ ...base, casesPerMonth: 200 });

    expect(result.failedGates).toEqual([]);
    expect(result.netValue).toBeGreaterThan(0);
    expect(result.decision).toBe("pilot");
    expect(result.breakEvenMonths).not.toBeNull();
  });

  it("intègre un coût ponctuel connu et peut renverser un scénario positif", () => {
    const without = calculateProcessPriority({ ...base, casesPerMonth: 120 });
    const withCost = calculateProcessPriority({
      ...base,
      casesPerMonth: 120,
      additionalKnownCosts: 500,
    });

    expect(without.decision).toBe("pilot");
    expect(withCost.totalCost).toBeCloseTo(without.totalCost + 500, 8);
    expect(withCost.netValue).toBeLessThan(0);
    expect(withCost.decision).toBe("unfavorable");
  });

  it("fait basculer un cas limite avec l’adoption moyenne, pas la cible finale", () => {
    const targetAdoption = calculateProcessPriority({
      ...base,
      casesPerMonth: 120,
      adoptionRate: 85,
    });
    const averageAdoption = calculateProcessPriority({
      ...base,
      casesPerMonth: 120,
      adoptionRate: 70,
    });

    expect(targetAdoption.decision).toBe("pilot");
    expect(averageAdoption.decision).toBe("unfavorable");
  });

  it("répercute un abonnement qui grandit avec le volume", () => {
    const flatCost = calculateProcessPriority({ ...base, casesPerMonth: 600 });
    const volumeCost = calculateProcessPriority({
      ...base,
      casesPerMonth: 600,
      monthlyRunCost: 900,
    });

    expect(flatCost.decision).toBe("pilot");
    expect(volumeCost.netValue).toBeLessThan(0);
    expect(volumeCost.decision).toBe("unfavorable");
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
    expect(result.totalCost).toBeCloseTo(
      base.internalSetupHours * base.loadedHourlyCost,
      8,
    );
    expect(Number.isFinite(result.netValue)).toBe(true);
  });

  it("ne produit pas de délai de retour quand le gain ne couvre pas l’exploitation", () => {
    const result = calculateProcessPriority({
      ...base,
      casesPerMonth: 1,
      monthlyRunCost: 2_000,
    });

    expect(result.breakEvenMonths).toBeNull();
    expect(result.decision).toBe("unfavorable");
  });

  it("laisse le ROI nul et explicite l’absence de coût", () => {
    const result = calculateProcessPriority({
      ...base,
      internalSetupHours: 0,
      monthlyRunCost: 0,
    });

    expect(result.totalCost).toBe(0);
    expect(result.roiPercent).toBeNull();
    expect(result.breakEvenMonths).toBe(0);
  });
});
