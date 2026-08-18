import { describe, expect, it } from "vitest";
import {
  SLA_REQUIRED_PROOFS,
  buildSlaDecisionCsv,
  buildSlaFinalDecisionNote,
  compareCoverageOptions,
  computeAvailability,
  computeIncidentCost,
  computeIncidentTimeline,
  computeRpoImpact,
  createFictitiousSlaDecisionDossier,
  evaluateDecisionGate,
} from "./sla-maintenance-decision";

describe("conversion de disponibilité", () => {
  it.each([
    [99, 432],
    [99.5, 216],
    [99.9, 43.2],
    [99.95, 21.6],
    [99.99, 4.32],
  ])("convertit %s %% sur 30 jours 24/7 en %s minutes", (target, expected) => {
    const result = computeAvailability({
      targetPercent: target,
      windowDays: 30,
      coveredHoursPerDay: 24,
    });
    expect(result.kind).toBe("known");
    if (result.kind === "known") {
      expect(result.allowedDowntimeMinutes).toBeCloseTo(expected, 6);
    }
  });

  it("échoue fermé sur une cible ou une plage inconnue", () => {
    expect(
      computeAvailability({
        targetPercent: null,
        windowDays: 30,
        coveredHoursPerDay: 24,
      }).kind,
    ).toBe("unknown");
    expect(
      computeAvailability({
        targetPercent: 100,
        windowDays: 30,
        coveredHoursPerDay: 24,
      }).kind,
    ).toBe("unknown");
  });
});

describe("sept horloges d’incident", () => {
  it("calcule la chronologie fictive avec décalage explicite", () => {
    const result = computeIncidentTimeline(
      createFictitiousSlaDecisionDossier().timeline,
    );
    expect(result).toEqual({
      kind: "known",
      minutes: {
        acknowledgement: 8,
        intervention: 55,
        workaround: 150,
        restoration: 310,
        dataVerification: 410,
        closure: 530,
      },
    });
  });

  it.each([
    "2026-07-28 09:10",
    "2026-07-28T09:10",
    "28/07/2026 09:10",
    "2026-02-30T09:10:00+01:00",
    "2026-07-28T24:10:00+02:00",
    "2026-07-28T09:10:00+14:30",
  ])("refuse un instant sans offset ISO : %s", (observedAt) => {
    const timeline = createFictitiousSlaDecisionDossier().timeline;
    expect(computeIncidentTimeline({ ...timeline, observedAt }).kind).toBe(
      "unknown",
    );
  });

  it("accepte un identifiant métier non vide sans espace ni contrôle", () => {
    const [option] = createFictitiousSlaDecisionDossier().coverages;
    expect(
      compareCoverageOptions([{ ...option, id: "Option-A/France" }])[0],
    ).toEqual(expect.objectContaining({ kind: "known", id: "Option-A/France" }));
  });

  it("accepte les bornes maximales sans exception ni ouverture implicite", () => {
    const dossier = createFictitiousSlaDecisionDossier();
    dossier.isFictitiousExample = false;
    dossier.coverages = dossier.coverages.map((option) => ({
      ...option,
      oneOffCost: 10_000_000_000,
      monthlyFee: 10_000_000_000,
      internalHoursPerMonth: 10_000_000_000,
      loadedHourlyCost: 10_000_000_000,
      annualExerciseCost: 10_000_000_000,
      residualIncidentsPerYear: 10_000_000_000,
      residualCostPerIncident: 10_000_000_000,
    }));

    expect(() => compareCoverageOptions(dossier.coverages)).not.toThrow();
    expect(
      compareCoverageOptions(dossier.coverages).every(
        (coverage) => coverage.kind === "known",
      ),
    ).toBe(true);
    expect(evaluateDecisionGate(dossier)).toEqual(
      expect.objectContaining({
        state: "COMPARABLE",
        finalExportAllowed: false,
      }),
    );
  });

  it("refuse un rétablissement antérieur au contournement", () => {
    const timeline = createFictitiousSlaDecisionDossier().timeline;
    expect(
      computeIncidentTimeline({
        ...timeline,
        restoredAt: "2026-07-28T10:00:00+02:00",
      }).kind,
    ).toBe("unknown");
  });
});

describe("coût d’incident sans double comptage", () => {
  it("sépare le coût brut du crédit de service", () => {
    const result = computeIncidentCost({
      outageHours: 4.2,
      affectedPeople: 12,
      loadedHourlyCost: 35,
      productiveSharePercent: 100,
      reentryAndRecoveryCost: 420,
      lostContributionMarginPerHour: 114.2857,
      externalRecoveryCosts: 900,
      serviceCredit: 200,
    });
    expect(result.kind).toBe("known");
    if (result.kind === "known") {
      expect(result.internalCapacity).toBe(1764);
      expect(result.reentryAndRecoveryCost).toBe(420);
      expect(result.lostContributionMargin).toBe(480);
      expect(result.grossIncidentCost).toBe(3564);
      expect(result.netEconomicExposure).toBe(3364);
      expect(result.creditCoveragePercent).toBe(5.61);
    }
  });

  it("conserve la marge horaire quand la durée change", () => {
    const input = createFictitiousSlaDecisionDossier().incidentCost;
    const result = computeIncidentCost({ ...input, outageHours: 5.2 });
    expect(result.kind).toBe("known");
    if (result.kind === "known") {
      expect(result.lostContributionMargin).toBe(594.29);
      expect(result.grossIncidentCost).toBe(4098.29);
      expect(result.netEconomicExposure).toBe(3898.29);
    }
  });

  it("accepte une part productive à quatre décimales sans lever", () => {
    const input = createFictitiousSlaDecisionDossier().incidentCost;
    expect(() =>
      computeIncidentCost({ ...input, productiveSharePercent: 12.3456 }),
    ).not.toThrow();

    const result = computeIncidentCost({
      ...input,
      productiveSharePercent: 12.3456,
    });
    expect(result.kind).toBe("known");
    if (result.kind === "known") {
      expect(result.internalCapacity).toBe(217.78);
      expect(result.grossIncidentCost).toBe(2017.78);
      expect(result.netEconomicExposure).toBe(1817.78);
    }
  });

  it("arrondit chaque poste monétaire au centime avant le total", () => {
    const input = createFictitiousSlaDecisionDossier().incidentCost;
    expect(
      computeIncidentCost({
        ...input,
        outageHours: 0,
        reentryAndRecoveryCost: 0.0049,
        lostContributionMarginPerHour: 0,
        externalRecoveryCosts: 0.0049,
        serviceCredit: 0.005,
      }),
    ).toEqual({
      kind: "unknown",
      issues: ["serviceCredit:exceeds:grossIncidentCost"],
    });
  });

  it("conserve la même sommation que le classeur aux bornes hautes", () => {
    const result = computeIncidentCost({
      outageHours: 697_000,
      affectedPeople: 50_060_583,
      loadedHourlyCost: 5_360_721_370,
      productiveSharePercent: 75.7265,
      reentryAndRecoveryCost: 8_059_708_956,
      lostContributionMarginPerHour: 8_729_195_211,
      externalRecoveryCosts: 8_828_211_630,
      serviceCredit: 0,
    });
    expect(result.kind).toBe("known");
    if (result.kind === "known") {
      expect(result.grossIncidentCost).toBe(1.4164453378181823e23);
      expect(result.netEconomicExposure).toBe(1.4164453378181823e23);
    }
  });

  it("refuse un crédit supérieur au coût brut", () => {
    const input = createFictitiousSlaDecisionDossier().incidentCost;
    expect(computeIncidentCost({ ...input, serviceCredit: 1_000_000 })).toEqual(
      expect.objectContaining({ kind: "unknown" }),
    );
  });

  it("retourne unknown au lieu de lever sur plus de quatre décimales", () => {
    const input = createFictitiousSlaDecisionDossier().incidentCost;
    expect(
      computeIncidentCost({ ...input, outageHours: 4.20001 }).kind,
    ).toBe("unknown");
  });

  it.each([
    ["outageHours", -1],
    ["affectedPeople", Number.NaN],
    ["affectedPeople", 12.5],
    ["productiveSharePercent", 101],
    ["externalRecoveryCosts", Number.POSITIVE_INFINITY],
  ] as const)("bloque %s=%s", (field, value) => {
    const input = createFictitiousSlaDecisionDossier().incidentCost;
    expect(computeIncidentCost({ ...input, [field]: value }).kind).toBe(
      "unknown",
    );
  });
});

describe("RPO traduit en opérations, temps et coût", () => {
  it("calcule le cas 40 opérations/h, RPO 1,5 h", () => {
    expect(
      computeRpoImpact({
        operationsPerHour: 40,
        rpoHours: 1.5,
        reentryMinutesPerOperation: 4,
        loadedHourlyCost: 35,
      }),
    ).toEqual({
      kind: "known",
      operationsAtRisk: 60,
      reentryHours: 4,
      reentryCost: 140,
    });
  });

  it("ne transforme pas une inconnue en zéro", () => {
    expect(
      computeRpoImpact({
        operationsPerHour: null,
        rpoHours: 1.5,
        reentryMinutesPerOperation: 4,
        loadedHourlyCost: 35,
      }).kind,
    ).toBe("unknown");
  });

  it("accepte une faible fréquence sans erreur de précision intermédiaire", () => {
    expect(
      computeRpoImpact({
        operationsPerHour: 0.5,
        rpoHours: 1,
        reentryMinutesPerOperation: 4,
        loadedHourlyCost: 35,
      }),
    ).toEqual({
      kind: "known",
      operationsAtRisk: 0.5,
      reentryHours: 0.03,
      reentryCost: 1.17,
    });
  });

  it("conserve la précision des quantités avant l’arrondi du coût RPO", () => {
    expect(
      computeRpoImpact({
        operationsPerHour: 0.1234,
        rpoHours: 0.5678,
        reentryMinutesPerOperation: 60,
        loadedHourlyCost: 10_000,
      }),
    ).toEqual({
      kind: "known",
      operationsAtRisk: 0.07006652,
      reentryHours: 0.07,
      reentryCost: 700.67,
    });
  });

  it("conserve l’ordre opératoire du classeur aux bornes hautes", () => {
    expect(
      computeRpoImpact({
        operationsPerHour: 55_220_724.1219,
        rpoHours: 854_982.8893,
        reentryMinutesPerOperation: 732.7511,
        loadedHourlyCost: 7_998_262_618.5409,
      }),
    ).toEqual({
      kind: "known",
      operationsAtRisk: 47_212_774_258_980.266,
      reentryHours: 576_586_871_205_324.5,
      reentryCost: 4.611693218303003e24,
    });
  });

  it("refuse proprement une entrée RPO à plus de quatre décimales", () => {
    expect(
      computeRpoImpact({
        operationsPerHour: 0.50001,
        rpoHours: 1,
        reentryMinutesPerOperation: 4,
        loadedHourlyCost: 35,
      }).kind,
    ).toBe("unknown");
  });
});

describe("comparaison annuelle et gate de décision", () => {
  it("calcule les trois options fictives", () => {
    const results = compareCoverageOptions(
      createFictitiousSlaDecisionDossier().coverages,
    );
    expect(results.every((result) => result.kind === "known")).toBe(true);
    expect(
      results.map((result) =>
        result.kind === "known" ? result.annualTotal : null,
      ),
    ).toEqual([31656, 33828, 53364]);
  });

  it("exige une source et une date pour le risque résiduel", () => {
    const [option] = createFictitiousSlaDecisionDossier().coverages;
    expect(
      compareCoverageOptions([
        { ...option, residualEstimateSource: "", residualEstimateDate: "" },
      ])[0],
    ).toEqual(expect.objectContaining({ kind: "unknown" }));
  });

  it("arrondit les trois composantes annuelles avant leur total", () => {
    const [option] = createFictitiousSlaDecisionDossier().coverages;
    expect(
      compareCoverageOptions([
        {
          ...option,
          oneOffCost: 0.0049,
          monthlyFee: 0.0001,
          internalHoursPerMonth: 0.0049,
          loadedHourlyCost: 1,
          annualExerciseCost: 0.0049,
          residualIncidentsPerYear: 0.0049,
          residualCostPerIncident: 1,
        },
      ])[0],
    ).toEqual({
      kind: "known",
      id: option.id,
      name: option.name,
      contractedAnnualCost: 0.01,
      internalAnnualCost: 0.06,
      residualAnnualExposure: 0,
      annualTotal: 0.07,
    });
  });

  it("échoue fermé sur une couverture mal formée hors contrat TypeScript", () => {
    expect(
      compareCoverageOptions([
        null as unknown as ReturnType<
          typeof createFictitiousSlaDecisionDossier
        >["coverages"][number],
      ])[0],
    ).toEqual(expect.objectContaining({ kind: "unknown" }));
  });

  it("échoue fermé sur un tableau clairsemé de trois couvertures", () => {
    const dossier = createFictitiousSlaDecisionDossier();
    dossier.isFictitiousExample = false;
    for (const proof of SLA_REQUIRED_PROOFS) {
      dossier.proofs[proof].status = "verified";
    }
    const sparse = new Array(3) as typeof dossier.coverages;
    sparse[0] = dossier.coverages[0];
    sparse[1] = dossier.coverages[1];
    dossier.coverages = sparse;

    const evaluated = compareCoverageOptions(sparse);
    expect(evaluated).toHaveLength(3);
    expect(evaluated[2]).toEqual(
      expect.objectContaining({ kind: "unknown" }),
    );
    expect(evaluateDecisionGate(dossier)).toEqual(
      expect.objectContaining({
        state: "INCOMPLET",
        finalExportAllowed: false,
      }),
    );
  });

  it.each([
    ["id numérique", 3],
    ["id vide", ""],
    ["id composé d’espaces", "   "],
    ["id avec espaces périphériques", " a "],
  ])("refuse un %s", (_label, id) => {
    const [option] = createFictitiousSlaDecisionDossier().coverages;
    expect(
      compareCoverageOptions([
        {
          ...option,
          id: id as string,
        },
      ])[0],
    ).toEqual(
      expect.objectContaining({
        kind: "unknown",
        issues: expect.arrayContaining(["id"]),
      }),
    );
  });

  it("bloque l’exemple fictif même si les calculs sont complets", () => {
    const gate = evaluateDecisionGate(createFictitiousSlaDecisionDossier());
    expect(gate.state).toBe("INCOMPLET");
    expect(gate.finalExportAllowed).toBe(false);
  });

  it("échoue fermé si un sous-dossier calculatoire est absent", () => {
    const dossier = createFictitiousSlaDecisionDossier();
    dossier.isFictitiousExample = false;
    dossier.rpo = undefined as unknown as typeof dossier.rpo;
    expect(evaluateDecisionGate(dossier)).toEqual(
      expect.objectContaining({
        state: "INCOMPLET",
        finalExportAllowed: false,
      }),
    );
  });

  it("passe à COMPARABLE avec des données réelles mais des preuves déclarées", () => {
    const dossier = createFictitiousSlaDecisionDossier();
    dossier.isFictitiousExample = false;
    expect(evaluateDecisionGate(dossier).state).toBe("COMPARABLE");
  });

  it("réserve la décision finale à l’humain après huit preuves vérifiées", () => {
    const dossier = createFictitiousSlaDecisionDossier();
    dossier.isFictitiousExample = false;
    for (const proof of SLA_REQUIRED_PROOFS) {
      dossier.proofs[proof].status = "verified";
    }
    const gate = evaluateDecisionGate(dossier);
    expect(gate.state).toBe("DECISION_HUMAINE");
    expect(gate.finalExportAllowed).toBe(true);
    expect(buildSlaFinalDecisionNote(dossier)).toContain(
      "Le moteur ne recommande pas automatiquement",
    );
  });

  it("place un échec de preuve ou une absence de mandat en STOP", () => {
    const dossier = createFictitiousSlaDecisionDossier();
    dossier.isFictitiousExample = false;
    dossier.proofs["restoration-test"].status = "failed";
    expect(evaluateDecisionGate(dossier).state).toBe("STOP");
    dossier.proofs["restoration-test"].status = "verified";
    dossier.authorityConfirmed = false;
    expect(evaluateDecisionGate(dossier).state).toBe("STOP");
  });

  it("interdit la note finale tant que le gate n’est pas ouvert", () => {
    expect(() =>
      buildSlaFinalDecisionNote(createFictitiousSlaDecisionDossier()),
    ).toThrow("Export final bloqué");
  });

  it("exporte un CSV de travail avec provenance visible", () => {
    const csv = buildSlaDecisionCsv(createFictitiousSlaDecisionDossier());
    expect(csv).toContain('"Exemple fictif";"OUI"');
    expect(csv).toContain('"Arrêt admis en minutes";"43.20"');
    expect(csv).toContain('"Coût brut";"3564.00"');
  });

  it("bloque une preuve supprimée ou une preuve vérifiée sans artefact", () => {
    const dossier = createFictitiousSlaDecisionDossier();
    dossier.isFictitiousExample = false;
    for (const proof of SLA_REQUIRED_PROOFS) {
      dossier.proofs[proof].status = "verified";
    }
    delete (dossier.proofs as Partial<typeof dossier.proofs>).measurement;
    expect(evaluateDecisionGate(dossier).state).toBe("INCOMPLET");

    const malformed = createFictitiousSlaDecisionDossier();
    malformed.isFictitiousExample = false;
    for (const proof of SLA_REQUIRED_PROOFS) {
      malformed.proofs[proof].status = "verified";
    }
    malformed.proofs.measurement.evidenceRef = "";
    expect(evaluateDecisionGate(malformed).state).toBe("INCOMPLET");
  });

  it("bloque un indicateur d’incident absent et toute troisième couverture invalide", () => {
    const dossier = createFictitiousSlaDecisionDossier();
    dossier.isFictitiousExample = false;
    (
      dossier as unknown as {
        emergencyOrCompromise: boolean | undefined;
      }
    ).emergencyOrCompromise = undefined;
    expect(evaluateDecisionGate(dossier).state).toBe("INCOMPLET");

    const coverageInvalid = createFictitiousSlaDecisionDossier();
    coverageInvalid.isFictitiousExample = false;
    coverageInvalid.coverages[2].residualEstimateSource = "";
    expect(evaluateDecisionGate(coverageInvalid).state).toBe("INCOMPLET");
  });

  it("bloque une provenance absente et une date d’arrêté future", () => {
    const missingProvenance = createFictitiousSlaDecisionDossier();
    missingProvenance.isFictitiousExample = false;
    for (const proof of SLA_REQUIRED_PROOFS) {
      missingProvenance.proofs[proof].status = "verified";
    }
    (
      missingProvenance as unknown as {
        isFictitiousExample: boolean | undefined;
      }
    ).isFictitiousExample = undefined;
    expect(evaluateDecisionGate(missingProvenance).state).toBe("INCOMPLET");

    const futureDossier = createFictitiousSlaDecisionDossier();
    futureDossier.isFictitiousExample = false;
    futureDossier.asOfDate = "2099-01-01";
    expect(evaluateDecisionGate(futureDossier).state).toBe("INCOMPLET");
  });

  it("refuse une hypothèse de couverture postérieure à l’arrêté du dossier", () => {
    const dossier = createFictitiousSlaDecisionDossier();
    dossier.isFictitiousExample = false;
    dossier.asOfDate = "2026-01-01";
    expect(evaluateDecisionGate(dossier).state).toBe("INCOMPLET");
    expect(
      compareCoverageOptions(dossier.coverages, dossier.asOfDate).every(
        (coverage) => coverage.kind === "unknown",
      ),
    ).toBe(true);
  });
});
