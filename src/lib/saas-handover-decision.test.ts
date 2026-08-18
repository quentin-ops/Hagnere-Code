import { describe, expect, it } from "vitest";
import {
  SAAS_HANDOVER_EXAMPLE_TCO,
  buildSaasHandoverCsv,
  buildSaasHandoverSummary,
  calculateAccountRecovery,
  calculateOutage,
  calculateRecoveryExercise,
  calculateRewriteThreshold,
  calculateRpo,
  calculateSaasHandoverTco,
  cloneSaasHandoverTcoInputs,
} from "./saas-handover-decision";

const recoveryInput = {
  monthlyContribution: 22_500,
  responderCount: 2,
  responderHourlyCost: 55,
  exerciseExternalHours: 6,
  exerciseExternalRate: 95,
  exerciseInternalHours: 2,
  annualIncidentProbabilityPercent: 100,
};

describe("décision de reprise d’un SaaS après freelance", () => {
  it("recalcule les trois TCO illustratifs à périmètre constant", () => {
    const result = calculateSaasHandoverTco(SAAS_HANDOVER_EXAMPLE_TCO);

    expect(result.status).toBe("PASS");
    expect(result.totals).toEqual({
      stabilize: 141_500,
      migrate: 186_640,
      rewrite: 274_800,
    });
    expect(result.cheapest).toBe("stabilize");
  });

  it("ne transforme pas une saisie invalide en zéro", () => {
    const inputs = cloneSaasHandoverTcoInputs(SAAS_HANDOVER_EXAMPLE_TCO);
    inputs.migrate.maintenance = Number.NaN;

    const result = calculateSaasHandoverTco(inputs);

    expect(result.status).toBe("STOP");
    expect(result.invalidFields).toEqual(["migrate.maintenance"]);
    expect(result.totals.migrate).toBeNull();
    expect(result.cheapest).toBeNull();

    const negative = cloneSaasHandoverTcoInputs(SAAS_HANDOVER_EXAMPLE_TCO);
    negative.stabilize.takeover = -1;
    expect(calculateSaasHandoverTco(negative).status).toBe("STOP");
  });

  it("calcule le surcoût et le nombre de clients simultanés de la réécriture", () => {
    const tco = calculateSaasHandoverTco(SAAS_HANDOVER_EXAMPLE_TCO);
    const threshold = calculateRewriteThreshold(tco, {
      monthlyContributionPerClient: 800,
      productiveMonths: 27,
    });

    expect(threshold.status).toBe("PASS");
    expect(threshold.surcharge).toBe(133_300);
    expect(threshold.clientMonths).toBeCloseTo(166.625, 6);
    expect(threshold.simultaneousClients).toBeCloseTo(6.171296, 6);
    expect(threshold.roundedClients).toBe(7);
  });

  it("laisse le seuil en STOP si contribution ou durée manque", () => {
    const tco = calculateSaasHandoverTco(SAAS_HANDOVER_EXAMPLE_TCO);

    expect(
      calculateRewriteThreshold(tco, {
        monthlyContributionPerClient: 0,
        productiveMonths: 27,
      }).status,
    ).toBe("STOP");
    expect(
      calculateRewriteThreshold(tco, {
        monthlyContributionPerClient: 800,
        productiveMonths: Number.NaN,
      }).simultaneousClients,
    ).toBeNull();
  });

  it("traduit les intervalles de sauvegarde en événements exposés", () => {
    const daily = calculateRpo({
      eventsPerDay: 900,
      backupIntervalHours: 24,
      minutesPerEvent: 6,
      reconstructionHourlyCost: 45,
    });
    const fourHours = calculateRpo({
      eventsPerDay: 900,
      backupIntervalHours: 4,
      minutesPerEvent: 6,
      reconstructionHourlyCost: 45,
    });

    expect(daily).toEqual({
      status: "PASS",
      averageEventsExposed: 450,
      maximumEventsExposed: 900,
      maximumReconstructionCost: 4_050,
    });
    expect(fourHours).toEqual({
      status: "PASS",
      averageEventsExposed: 75,
      maximumEventsExposed: 150,
      maximumReconstructionCost: 675,
    });
  });

  it("refuse un intervalle ou une valeur hors bornes", () => {
    expect(
      calculateRpo({
        eventsPerDay: 900,
        backupIntervalHours: Infinity,
        minutesPerEvent: 6,
        reconstructionHourlyCost: 45,
      }),
    ).toEqual({
      status: "STOP",
      averageEventsExposed: null,
      maximumEventsExposed: null,
      maximumReconstructionCost: null,
    });
    expect(
      calculateRpo({
        eventsPerDay: 900,
        backupIntervalHours: -4,
        minutesPerEvent: 6,
        reconstructionHourlyCost: 45,
      }).status,
    ).toBe("STOP");
  });

  it("conditionne le seuil de l’exercice à la probabilité annuelle", () => {
    const certain = calculateRecoveryExercise(recoveryInput);
    const probability25 = calculateRecoveryExercise({
      ...recoveryInput,
      annualIncidentProbabilityPercent: 25,
    });
    const probability10 = calculateRecoveryExercise({
      ...recoveryInput,
      annualIncidentProbabilityPercent: 10,
    });

    expect(certain.exerciseCost).toBe(680);
    expect(certain.hourlyExposure).toBe(141.25);
    expect(certain.breakEvenHours).toBeCloseTo(4.814159, 6);
    expect(probability25.breakEvenHours).toBeCloseTo(19.256637, 6);
    expect(probability10.breakEvenHours).toBeCloseTo(48.141593, 6);
    expect(
      calculateRecoveryExercise({
        ...recoveryInput,
        annualIncidentProbabilityPercent: 0,
      }).status,
    ).toBe("STOP");
    expect(
      calculateRecoveryExercise({
        ...recoveryInput,
        annualIncidentProbabilityPercent: 101,
      }).status,
    ).toBe("STOP");
    expect(
      calculateRecoveryExercise({
        ...recoveryInput,
        responderCount: 1.5,
      }).status,
    ).toBe("STOP");
  });

  it("sépare contribution exposée et capacité mobilisée", () => {
    expect(calculateOutage(recoveryInput, 8)).toEqual({
      status: "PASS",
      contributionExposed: 250,
      capacityMobilized: 880,
      total: 1_130,
    });
    expect(calculateOutage(recoveryInput, 36)).toEqual({
      status: "PASS",
      contributionExposed: 1_125,
      capacityMobilized: 3_960,
      total: 5_085,
    });
  });

  it("compare la passation préparée à la récupération en crise", () => {
    expect(
      calculateAccountRecovery({
        personalServiceCount: 4,
        preparedExternalHoursPerService: 2,
        crisisExternalHoursPerService: 6,
        externalHourlyRate: 95,
        preparedInternalHoursPerService: 1,
        crisisInternalHoursPerService: 2,
        internalHourlyCost: 55,
        commonPreparedTooling: 300,
      }),
    ).toEqual({
      status: "PASS",
      preparedCost: 1_280,
      crisisCost: 2_720,
      directDifference: 1_440,
    });
    expect(
      calculateAccountRecovery({
        personalServiceCount: -1,
        preparedExternalHoursPerService: 2,
        crisisExternalHoursPerService: 6,
        externalHourlyRate: 95,
        preparedInternalHoursPerService: 1,
        crisisInternalHoursPerService: 2,
        internalHourlyCost: 55,
        commonPreparedTooling: 300,
      }).status,
    ).toBe("STOP");
    expect(
      calculateAccountRecovery({
        personalServiceCount: 1.5,
        preparedExternalHoursPerService: 2,
        crisisExternalHoursPerService: 6,
        externalHourlyRate: 95,
        preparedInternalHoursPerService: 1,
        crisisInternalHoursPerService: 2,
        internalHourlyCost: 55,
        commonPreparedTooling: 300,
      }).status,
    ).toBe("STOP");
  });

  it("exporte toutes les hypothèses réellement saisies sans masquer les limites", () => {
    const tcoInputs = cloneSaasHandoverTcoInputs(SAAS_HANDOVER_EXAMPLE_TCO);
    const tco = calculateSaasHandoverTco(tcoInputs);
    const rewriteInput = {
      monthlyContributionPerClient: 910,
      productiveMonths: 26,
    };
    const rpoInput = {
      eventsPerDay: 1_200,
      backupIntervalHours: 3,
      minutesPerEvent: 7,
      reconstructionHourlyCost: 52,
    };
    const recoveryInput25 = {
      ...recoveryInput,
      annualIncidentProbabilityPercent: 25,
    };
    const outageHours = 11;
    const accountInput = {
      personalServiceCount: 4,
      preparedExternalHoursPerService: 2,
      crisisExternalHoursPerService: 6,
      externalHourlyRate: 95,
      preparedInternalHoursPerService: 1,
      crisisInternalHoursPerService: 2,
      internalHourlyCost: 55,
      commonPreparedTooling: 300,
    };
    const exportState = {
      tcoInputs,
      tco,
      rewriteInput,
      rewrite: calculateRewriteThreshold(tco, rewriteInput),
      rpoInput,
      rpo: calculateRpo(rpoInput),
      recoveryInput: recoveryInput25,
      recovery: calculateRecoveryExercise(recoveryInput25),
      outageHours,
      outage: calculateOutage(recoveryInput25, outageHours),
      accountInput,
      accounts: calculateAccountRecovery(accountInput),
    };
    const csv = buildSaasHandoverCsv(exportState);
    const summary = buildSaasHandoverSummary(exportState);

    expect(csv).toContain('"Métadonnées";"Horizon";"36";"mois"');
    expect(csv).toContain(
      '"RPO";"Intervalle du point restaurable";"3";"heures"',
    );
    expect(csv).toContain(
      '"Exercice de restauration";"Probabilité annuelle d’incident";"25";"%"',
    );
    expect(csv).toContain('"Arrêt simulé";"Durée saisie";"11";"heures"');
    expect(csv).toContain(
      '"Comptes personnels";"Services sur comptes personnels";"4";"services"',
    );
    expect(summary).toContain("point restaurable toutes les 3 h");
    expect(summary).toContain("probabilité annuelle 25 %");
    expect(summary).toContain("Arrêt saisi 11 h");
    expect(csv).toContain("Illustratif, HT, aucun client réel");
  });
});
