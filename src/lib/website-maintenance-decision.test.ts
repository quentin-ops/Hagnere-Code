import { describe, expect, it } from "vitest";
import {
  WEBSITE_INCIDENT_FIELDS,
  WEBSITE_MAINTENANCE_CRITICALITY_SCENARIOS,
  WEBSITE_MAINTENANCE_DELIVERY_MODES,
  WEBSITE_MAINTENANCE_GATE_IDS,
  WEBSITE_MAINTENANCE_TCO_FIELDS,
  buildWebsiteMaintenanceDecisionReport,
  calculateWebsiteIncidentImpact,
  calculateWebsiteMaintenanceCriticalityScenario,
  calculateWebsiteMaintenanceDeliveryMode,
  calculateWebsiteMaintenanceTco,
  createEmptyWebsiteMaintenanceDecisionContext,
  effectiveWebsiteMaintenanceGateStatus,
  missingWebsiteMaintenanceGateEvidenceFields,
  qualifyWebsiteMaintenanceOffer,
  validateWebsiteMaintenanceEvidenceDate,
  websiteMaintenanceEvidenceDateMaximum,
  withWebsiteIncidentDurationAndMargin,
  type WebsiteIncidentInput,
  type WebsiteMaintenanceDecisionContext,
  type WebsiteMaintenanceGateEvidence,
  type WebsiteMaintenanceTcoInput,
} from "./website-maintenance-decision";

const EVALUATION_DATE = "2026-07-25";
const EVIDENCE_DATE_CONTEXT = {
  evaluationDate: EVALUATION_DATE,
  decisionDate: "",
};

const CENTRAL_INCIDENT: WebsiteIncidentInput = {
  durationHours: 6,
  nonDeferrableMarginPerHour: 180,
  refundsAndPenalties: 0,
  externalRecovery: 900,
  communication: 250,
  internalPeople: 2,
  internalHoursPerPerson: 4,
  internalHourlyCost: 35,
  redeployedSharePercent: 50,
  recoverableCompensation: 0,
};

const AGENCY_TCO_WITHOUT_INCIDENT: WebsiteMaintenanceTcoInput = {
  initialTransition: 2_500,
  preventiveAdaptiveAnnual: 5_600,
  correctiveCapacityAnnual: 5_600,
  serviceOperationsAnnual: 5_600,
  editorialAssuranceAnnual: 0,
  plannedEvolutionAnnual: 6_500,
  internalCoordinationAnnual: 300,
  hostingLicensesEolAnnual: 3_000,
  residualIncidentReserveAnnual: 0,
  exitRecovery: 1_800,
};

function completeEvidence(
  status: WebsiteMaintenanceGateEvidence["status"] = "pass",
  suffix = "contrôle",
): WebsiteMaintenanceGateEvidence {
  return {
    status,
    evidenceDate: "2026-07-24",
    artifactReference: `PV-${suffix}`,
    scope: `Périmètre ${suffix}`,
    result: `Résultat vérifié ${suffix}`,
    responsible: `Responsable ${suffix}`,
  };
}

function completeFirstOffer(
  context: WebsiteMaintenanceDecisionContext,
): WebsiteMaintenanceDecisionContext {
  const offer = context.offers[0];
  context.siteClass = "Boutique centrale";
  context.businessFunctions = "Catalogue, panier, paiement et e-mails";
  context.coverageWindow = "Lundi-samedi 8 h-20 h, heure de Paris";
  context.rpoRto = "RPO 15 minutes ; RTO 2 heures";
  context.lastRestoredPoint =
    "Restauration complète du 24 juillet 2026, 1 h 24";
  context.measurementOwner = "Responsable e-commerce et suppléant DAF";
  offer.deliveryMode = "Agence avec astreinte documentée";
  offer.scopeSummary = "Actifs, parcours, sauvegarde, reprise et sortie";
  offer.exclusions = "Évolutions hors capacité et achats tiers";
  offer.residualRiskPayer =
    "Entreprise au-delà du plafond, recours contractuel documenté";
  offer.tco = { ...AGENCY_TCO_WITHOUT_INCIDENT };
  for (const id of WEBSITE_MAINTENANCE_GATE_IDS) {
    offer.gates[id] = completeEvidence("pass", id);
  }
  return context;
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function numberFromReport(value: string): number {
  return Number(
    value
      .replace(/[\s\u202f\u00a0]/g, "")
      .replace(",", ".")
      .replace(/[^\d.-]/g, ""),
  );
}

describe("website maintenance incident calculation", () => {
  it("reproduces the central fictitious incident and both sensitivities", () => {
    const central = calculateWebsiteIncidentImpact(CENTRAL_INCIDENT);
    expect(central).toEqual({
      kind: "known",
      total: 2_370,
      lostMargin: 1_080,
      directCosts: 1_150,
      internalCapacityCost: 140,
      recoverableCompensation: 0,
    });

    const expected = [
      [2, 180, 1_650],
      [6, 180, 2_370],
      [12, 180, 3_450],
      [2, 750, 2_790],
      [6, 750, 5_790],
      [12, 750, 10_290],
    ] as const;

    for (const [duration, margin, total] of expected) {
      expect(
        calculateWebsiteIncidentImpact(
          withWebsiteIncidentDurationAndMargin(
            CENTRAL_INCIDENT,
            duration,
            margin,
          ),
        ),
      ).toMatchObject({ kind: "known", total });
    }
  });

  it("keeps missing, negative, non-finite and impossible compensation as ND", () => {
    expect(
      calculateWebsiteIncidentImpact({
        ...CENTRAL_INCIDENT,
        communication: undefined,
      }),
    ).toEqual({ kind: "unknown", issues: ["communication"] });

    for (const invalid of [-1, Number.NaN, Number.POSITIVE_INFINITY]) {
      expect(
        calculateWebsiteIncidentImpact({
          ...CENTRAL_INCIDENT,
          externalRecovery: invalid,
        }),
      ).toEqual({ kind: "unknown", issues: ["externalRecovery"] });
    }

    expect(
      calculateWebsiteIncidentImpact({
        ...CENTRAL_INCIDENT,
        redeployedSharePercent: 101,
      }),
    ).toEqual({ kind: "unknown", issues: ["redeployedSharePercent"] });

    expect(
      calculateWebsiteIncidentImpact({
        ...CENTRAL_INCIDENT,
        recoverableCompensation: 3_000,
      }),
    ).toEqual({
      kind: "unknown",
      issues: ["recoverableCompensation"],
      grossBeforeCompensation: 2_370,
    });
  });

  it("accepts explicit zero without turning an unknown into zero", () => {
    expect(
      calculateWebsiteIncidentImpact({
        ...CENTRAL_INCIDENT,
        durationHours: 0,
        nonDeferrableMarginPerHour: 0,
        refundsAndPenalties: 0,
        externalRecovery: 0,
        communication: 0,
        internalPeople: 0,
        internalHoursPerPerson: 0,
        internalHourlyCost: 0,
        redeployedSharePercent: 0,
        recoverableCompensation: 0,
      }),
    ).toMatchObject({ kind: "known", total: 0 });
  });

  it("returns the exact gross cap when 101 euros of compensation exceeds 100 euros", () => {
    expect(
      calculateWebsiteIncidentImpact({
        durationHours: 1,
        nonDeferrableMarginPerHour: 100,
        refundsAndPenalties: 0,
        externalRecovery: 0,
        communication: 0,
        internalPeople: 0,
        internalHoursPerPerson: 0,
        internalHourlyCost: 0,
        redeployedSharePercent: 0,
        recoverableCompensation: 101,
      }),
    ).toEqual({
      kind: "unknown",
      issues: ["recoverableCompensation"],
      grossBeforeCompensation: 100,
    });
  });

  it("preserves cents in the gross compensation cap and its export", () => {
    const incident: WebsiteIncidentInput = {
      durationHours: 1,
      nonDeferrableMarginPerHour: 100.49,
      refundsAndPenalties: 0,
      externalRecovery: 0,
      communication: 0,
      internalPeople: 0,
      internalHoursPerPerson: 0,
      internalHourlyCost: 0,
      redeployedSharePercent: 0,
      recoverableCompensation: 100.5,
    };
    expect(calculateWebsiteIncidentImpact(incident)).toEqual({
      kind: "unknown",
      issues: ["recoverableCompensation"],
      grossBeforeCompensation: 100.49,
    });

    const context = createEmptyWebsiteMaintenanceDecisionContext();
    context.incident = incident;
    const report = buildWebsiteMaintenanceDecisionReport(
      context,
      EVALUATION_DATE,
    );
    expect(report).toContain(
      "Compensation récupérable : 100,5 € (invalide : dépasse le coût brut de 100,49 €)",
    );
    expect(report).toContain(
      "compensation récupérable supérieure au coût brut de 100,49 €",
    );
  });
});

describe("website maintenance TCO", () => {
  it("calculates 12 and 36 months with every annual cost counted once", () => {
    expect(
      calculateWebsiteMaintenanceTco(AGENCY_TCO_WITHOUT_INCIDENT, 12),
    ).toMatchObject({ kind: "known", total: 30_900 });
    expect(
      calculateWebsiteMaintenanceTco(AGENCY_TCO_WITHOUT_INCIDENT, 36),
    ).toMatchObject({ kind: "known", total: 84_100 });
  });

  it("adds the annual residual incident reserve once, not the incident twice", () => {
    const withAnnualResidualReserve = {
      ...AGENCY_TCO_WITHOUT_INCIDENT,
      residualIncidentReserveAnnual: 2_370,
    };
    const base12 = calculateWebsiteMaintenanceTco(
      AGENCY_TCO_WITHOUT_INCIDENT,
      12,
    );
    const base36 = calculateWebsiteMaintenanceTco(
      AGENCY_TCO_WITHOUT_INCIDENT,
      36,
    );
    const risk12 = calculateWebsiteMaintenanceTco(
      withAnnualResidualReserve,
      12,
    );
    const risk36 = calculateWebsiteMaintenanceTco(
      withAnnualResidualReserve,
      36,
    );

    expect(base12).toMatchObject({ kind: "known" });
    expect(base36).toMatchObject({ kind: "known" });
    expect(risk12).toMatchObject({ kind: "known" });
    expect(risk36).toMatchObject({ kind: "known" });
    if (
      base12.kind === "known" &&
      base36.kind === "known" &&
      risk12.kind === "known" &&
      risk36.kind === "known"
    ) {
      expect(risk12.total - base12.total).toBe(2_370);
      expect(risk36.total - base36.total).toBe(7_110);
      expect(risk12.total).toBe(33_270);
      expect(risk36.total).toBe(91_210);
    }
  });

  it("returns ND for every missing or invalid required TCO value", () => {
    expect(
      calculateWebsiteMaintenanceTco(
        { ...AGENCY_TCO_WITHOUT_INCIDENT, exitRecovery: undefined },
        36,
      ),
    ).toEqual({
      kind: "unknown",
      horizonMonths: 36,
      issues: ["exitRecovery"],
    });

    for (const invalid of [-1, Number.NaN, Number.POSITIVE_INFINITY]) {
      expect(
        calculateWebsiteMaintenanceTco(
          {
            ...AGENCY_TCO_WITHOUT_INCIDENT,
            hostingLicensesEolAnnual: invalid,
          },
          12,
        ),
      ).toEqual({
        kind: "unknown",
        horizonMonths: 12,
        issues: ["hostingLicensesEolAnnual"],
      });
    }
  });

  it("recalculates the three P1 criticality scenarios exactly", () => {
    const expected = [
      ["showcase", 4_320, 5_620, 14_260],
      ["shop", 29_270, 33_570, 92_110],
      ["critical", 128_800, 155_800, 413_400],
    ] as const;

    for (const [id, annual, twelve, thirtySix] of expected) {
      const scenario = WEBSITE_MAINTENANCE_CRITICALITY_SCENARIOS.find(
        (candidate) => candidate.id === id,
      );
      expect(scenario).toBeDefined();
      expect(
        calculateWebsiteMaintenanceCriticalityScenario(scenario!, 12),
      ).toEqual({ recurringAnnual: annual, total: twelve });
      expect(
        calculateWebsiteMaintenanceCriticalityScenario(scenario!, 36),
      ).toEqual({ recurringAnnual: annual, total: thirtySix });
    }
  });

  it("recalculates the four central delivery modes exactly", () => {
    const expected = [
      ["internal", 25_500, 30_500, 81_500],
      ["freelance", 23_300, 26_600, 73_200],
      ["agency", 26_600, 30_900, 84_100],
      ["tma", 38_900, 46_400, 124_200],
    ] as const;

    for (const [id, annual, twelve, thirtySix] of expected) {
      const mode = WEBSITE_MAINTENANCE_DELIVERY_MODES.find(
        (candidate) => candidate.id === id,
      );
      expect(mode).toBeDefined();
      expect(calculateWebsiteMaintenanceDeliveryMode(mode!, 12)).toEqual({
        recurringAnnual: annual,
        total: twelve,
      });
      expect(calculateWebsiteMaintenanceDeliveryMode(mode!, 36)).toEqual({
        recurringAnnual: annual,
        total: thirtySix,
      });
    }
  });
});

describe("website maintenance qualification and report", () => {
  it("keeps a priced offer unqualified when the six common and four offer fields are absent", () => {
    const context = createEmptyWebsiteMaintenanceDecisionContext();
    const offer = context.offers[0];
    offer.tco = { ...AGENCY_TCO_WITHOUT_INCIDENT };
    for (const id of WEBSITE_MAINTENANCE_GATE_IDS) {
      offer.gates[id] = completeEvidence("pass", id);
    }

    expect(
      qualifyWebsiteMaintenanceOffer(context, offer, EVALUATION_DATE),
    ).toMatchObject({
      status: "unqualified",
      failedGates: [],
      unknownGates: [],
      missingCommonFields: [
        "siteClass",
        "businessFunctions",
        "coverageWindow",
        "rpoRto",
        "lastRestoredPoint",
        "measurementOwner",
      ],
      missingOfferFields: [
        "deliveryMode",
        "scopeSummary",
        "exclusions",
        "residualRiskPayer",
      ],
      unknownTcoFields: [],
    });
  });

  it("treats literal ND sentinels as unknown in qualification and export", () => {
    const context = createEmptyWebsiteMaintenanceDecisionContext();
    const offer = context.offers[0];
    context.siteClass = " ND ";
    context.businessFunctions = "nd";
    context.coverageWindow = "N.D.";
    context.rpoRto = "n/d";
    context.lastRestoredPoint = "N/A";
    context.measurementOwner = "inconnu";
    offer.deliveryMode = "ND";
    offer.scopeSummary = " nd ";
    offer.exclusions = "n/a";
    offer.residualRiskPayer = "inconnue";
    offer.tco = { ...AGENCY_TCO_WITHOUT_INCIDENT };
    for (const id of WEBSITE_MAINTENANCE_GATE_IDS) {
      offer.gates[id] = completeEvidence("pass", id);
    }

    expect(
      qualifyWebsiteMaintenanceOffer(context, offer, EVALUATION_DATE),
    ).toMatchObject({
      status: "unqualified",
      missingCommonFields: [
        "siteClass",
        "businessFunctions",
        "coverageWindow",
        "rpoRto",
        "lastRestoredPoint",
        "measurementOwner",
      ],
      missingOfferFields: [
        "deliveryMode",
        "scopeSummary",
        "exclusions",
        "residualRiskPayer",
      ],
    });

    const offerASection = buildWebsiteMaintenanceDecisionReport(
      context,
      EVALUATION_DATE,
    ).split("\nOFFRE B\n")[0];
    expect(offerASection).toContain("Classe du site : ND");
    expect(offerASection).toContain("Mode de prise en charge : ND");
    expect(offerASection).toContain(
      "Verdict de comparabilité : NON QUALIFIÉE",
    );
    expect(offerASection).toContain(
      "Sous-total non comparable à 12 mois : 30",
    );
    expect(offerASection).not.toContain(
      "Verdict de comparabilité : QUALIFIÉE",
    );
  });

  it("never demonstrates a gate with x, spaces, an invalid date or a missing structured element", () => {
    const valid = completeEvidence();
    const adversarial: Array<
      [Exclude<keyof WebsiteMaintenanceGateEvidence, "status">, string]
    > = [
      ["evidenceDate", "x"],
      ["evidenceDate", "2026-02-30"],
      ["artifactReference", "x"],
      ["artifactReference", "ND"],
      ["scope", "   "],
      ["scope", "n/d"],
      ["result", ""],
      ["result", "N/A"],
      ["responsible", "x"],
      ["responsible", "inconnu"],
    ];

    for (const [field, value] of adversarial) {
      const gate = { ...valid, [field]: value };
      expect(
        effectiveWebsiteMaintenanceGateStatus(gate, EVIDENCE_DATE_CONTEXT),
        `${field}=${JSON.stringify(value)}`,
      ).toBe("unknown");
      expect(
        missingWebsiteMaintenanceGateEvidenceFields(
          gate,
          EVIDENCE_DATE_CONTEXT,
        ),
      ).toContain(field);
    }

    expect(
      effectiveWebsiteMaintenanceGateStatus({
        ...valid,
        status: "unknown",
      }, EVIDENCE_DATE_CONTEXT),
    ).toBe("unknown");
  });

  it("accepts same-day or earlier evidence and rejects proof after evaluation or decision", () => {
    const context = completeFirstOffer(
      createEmptyWebsiteMaintenanceDecisionContext(),
    );
    const offer = context.offers[0];
    context.decisionDate = "2026-07-25";

    expect(
      effectiveWebsiteMaintenanceGateStatus(offer.gates.common_scope, {
        evaluationDate: EVALUATION_DATE,
        decisionDate: context.decisionDate,
      }),
    ).toBe("pass");
    expect(
      qualifyWebsiteMaintenanceOffer(context, offer, EVALUATION_DATE).status,
    ).toBe("qualified");

    offer.gates.common_scope.evidenceDate = "2026-07-25";
    expect(
      qualifyWebsiteMaintenanceOffer(context, offer, EVALUATION_DATE).status,
    ).toBe("qualified");

    offer.gates.common_scope.evidenceDate = "2026-07-26";
    const futureValidation = validateWebsiteMaintenanceEvidenceDate(
      offer.gates.common_scope.evidenceDate,
      {
        evaluationDate: EVALUATION_DATE,
        decisionDate: context.decisionDate,
      },
    );
    expect(futureValidation).toEqual({
      valid: false,
      issues: ["afterEvaluationDate", "afterDecisionDate"],
      maximumDate: "2026-07-25",
    });
    expect(
      effectiveWebsiteMaintenanceGateStatus(offer.gates.common_scope, {
        evaluationDate: EVALUATION_DATE,
        decisionDate: context.decisionDate,
      }),
    ).toBe("unknown");
    expect(
      qualifyWebsiteMaintenanceOffer(context, offer, EVALUATION_DATE),
    ).toMatchObject({
      status: "unqualified",
      unknownGates: ["common_scope"],
    });

    const offerASection = buildWebsiteMaintenanceDecisionReport(
      context,
      EVALUATION_DATE,
    ).split("\nOFFRE B\n")[0];
    expect(offerASection).toContain(
      "Date d’évaluation du dossier : 2026-07-25",
    );
    expect(offerASection).toContain(
      "date de la preuve : ND (postérieure à la date d’évaluation 2026-07-25 ; postérieure à la date de décision 2026-07-25)",
    );
    expect(offerASection).toContain(
      "Verdict de comparabilité : NON QUALIFIÉE",
    );
    expect(offerASection).toContain(
      "Sous-total non comparable à 12 mois",
    );
    expect(offerASection).not.toContain(
      "Même périmètre et mêmes horaires : PASS",
    );
  });

  it("rejects a 2099 proof against the explicit evaluation date when decision is blank", () => {
    const context = completeFirstOffer(
      createEmptyWebsiteMaintenanceDecisionContext(),
    );
    context.offers[0].gates.common_scope.evidenceDate = "2099-01-01";

    expect(
      validateWebsiteMaintenanceEvidenceDate("2099-01-01", {
        evaluationDate: EVALUATION_DATE,
        decisionDate: "",
      }),
    ).toEqual({
      valid: false,
      issues: ["afterEvaluationDate"],
      maximumDate: "2026-07-25",
    });
    expect(
      qualifyWebsiteMaintenanceOffer(
        context,
        context.offers[0],
        EVALUATION_DATE,
      ),
    ).toMatchObject({
      status: "unqualified",
      unknownGates: ["common_scope"],
    });
  });

  it("uses the earlier valid decision or evaluation date as the evidence maximum", () => {
    expect(
      websiteMaintenanceEvidenceDateMaximum({
        evaluationDate: EVALUATION_DATE,
        decisionDate: "2026-07-24",
      }),
    ).toBe("2026-07-24");
    expect(
      websiteMaintenanceEvidenceDateMaximum({
        evaluationDate: EVALUATION_DATE,
        decisionDate: "2026-07-26",
      }),
    ).toBe(EVALUATION_DATE);
    expect(
      websiteMaintenanceEvidenceDateMaximum({
        evaluationDate: "not-a-date",
        decisionDate: "2026-07-24",
      }),
    ).toBeUndefined();
  });

  it("qualifies only a complete comparable offer and eliminates only a structured proven fail", () => {
    const context = completeFirstOffer(
      createEmptyWebsiteMaintenanceDecisionContext(),
    );
    const offer = context.offers[0];

    expect(
      qualifyWebsiteMaintenanceOffer(context, offer, EVALUATION_DATE),
    ).toEqual({
      status: "qualified",
      failedGates: [],
      unknownGates: [],
      missingCommonFields: [],
      missingOfferFields: [],
      unknownTcoFields: [],
    });

    offer.gates.tested_restore = completeEvidence(
      "fail",
      "restauration-incohérente",
    );
    expect(
      qualifyWebsiteMaintenanceOffer(context, offer, EVALUATION_DATE),
    ).toEqual({
      status: "eliminated",
      failedGates: ["tested_restore"],
      unknownGates: [],
      missingCommonFields: [],
      missingOfferFields: [],
      unknownTcoFields: [],
    });

    offer.gates.tested_restore.result = "x";
    expect(
      qualifyWebsiteMaintenanceOffer(context, offer, EVALUATION_DATE),
    ).toMatchObject({
      status: "unqualified",
      failedGates: [],
      unknownGates: ["tested_restore"],
    });
  });

  it("keeps a complete dossier unqualified while one required TCO field is unknown", () => {
    const context = completeFirstOffer(
      createEmptyWebsiteMaintenanceDecisionContext(),
    );
    context.offers[0].tco.exitRecovery = undefined;

    expect(
      qualifyWebsiteMaintenanceOffer(
        context,
        context.offers[0],
        EVALUATION_DATE,
      ),
    ).toMatchObject({
      status: "unqualified",
      unknownTcoFields: ["exitRecovery"],
    });
  });

  it("keeps two independently complete offers qualifiable on the same common need", () => {
    const context = completeFirstOffer(
      createEmptyWebsiteMaintenanceDecisionContext(),
    );
    const offerB = context.offers[1];
    offerB.deliveryMode = "Équipe interne structurée";
    offerB.scopeSummary = "Actifs, parcours, sauvegarde, reprise et sortie";
    offerB.exclusions = "Évolutions hors capacité et achats tiers";
    offerB.residualRiskPayer =
      "Entreprise au-delà du plafond, recours documenté";
    offerB.tco = { ...AGENCY_TCO_WITHOUT_INCIDENT };
    for (const id of WEBSITE_MAINTENANCE_GATE_IDS) {
      offerB.gates[id] = completeEvidence("pass", `offre-b-${id}`);
    }

    expect(
      context.offers.map(
        (offer) =>
          qualifyWebsiteMaintenanceOffer(context, offer, EVALUATION_DATE)
            .status,
      ),
    ).toEqual(["qualified", "qualified"]);

    context.decisionDate = "2026-07-25";
    offerB.gates.common_scope.evidenceDate = "2026-07-26";
    expect(
      context.offers.map(
        (offer) =>
          qualifyWebsiteMaintenanceOffer(context, offer, EVALUATION_DATE)
            .status,
      ),
    ).toEqual(["qualified", "unqualified"]);
  });

  it("does not copy the qualification of offer A into offer B", () => {
    const context = completeFirstOffer(
      createEmptyWebsiteMaintenanceDecisionContext(),
    );

    expect(
      qualifyWebsiteMaintenanceOffer(
        context,
        context.offers[0],
        EVALUATION_DATE,
      ).status,
    ).toBe("qualified");
    expect(
      qualifyWebsiteMaintenanceOffer(
        context,
        context.offers[1],
        EVALUATION_DATE,
      ),
    ).toMatchObject({
      status: "unqualified",
      missingOfferFields: [
        "deliveryMode",
        "scopeSummary",
        "exclusions",
        "residualRiskPayer",
      ],
      unknownGates: WEBSITE_MAINTENANCE_GATE_IDS,
    });
  });

  it("exports all hypotheses and keeps partial inputs neutral", () => {
    const context = createEmptyWebsiteMaintenanceDecisionContext();
    const report = buildWebsiteMaintenanceDecisionReport(
      context,
      EVALUATION_DATE,
    );

    for (const field of WEBSITE_INCIDENT_FIELDS) {
      expect(report).toContain(`- ${field.label} : ND (${field.unit})`);
    }
    for (const field of WEBSITE_MAINTENANCE_TCO_FIELDS) {
      expect(
        report.match(new RegExp(escapeRegExp(field.label), "g")),
      ).toHaveLength(2);
    }
    expect(report).toContain("Impact incident calculé : ND");
    expect(report).toContain("Sous-total non comparable à 12 mois : ND");
    expect(report).toContain("Sous-total non comparable à 36 mois : ND");
    expect(report).toContain("NON QUALIFIÉE");
    expect(report).toContain("aucun gagnant automatique");
    expect(report).not.toMatch(/\bundefined\b|\bNaN\b|\bInfinity\b/);
  });

  it("exports calculable costs as non-comparable while mandatory fields are ND", () => {
    const context = createEmptyWebsiteMaintenanceDecisionContext();
    context.siteClass = "   ";
    context.offers[0].deliveryMode = " \n ";
    context.offers[0].tco = { ...AGENCY_TCO_WITHOUT_INCIDENT };
    for (const id of WEBSITE_MAINTENANCE_GATE_IDS) {
      context.offers[0].gates[id] = completeEvidence("pass", id);
    }

    const report = buildWebsiteMaintenanceDecisionReport(
      context,
      EVALUATION_DATE,
    );
    const offerASection = report.split("\nOFFRE B\n")[0];

    expect(offerASection).toContain("Classe du site : ND");
    expect(offerASection).toContain("Mode de prise en charge : ND");
    expect(offerASection).toContain(
      "Verdict de comparabilité : NON QUALIFIÉE",
    );
    expect(offerASection).toContain(
      "Sous-total non comparable à 12 mois : 30",
    );
    expect(offerASection).toContain(
      "Sous-total non comparable à 36 mois : 84",
    );
    expect(offerASection).not.toContain("TCO 12 mois : 30");
  });

  it("exports a one-character evidence value as ND, never as a demonstrated pass", () => {
    const context = completeFirstOffer(
      createEmptyWebsiteMaintenanceDecisionContext(),
    );
    context.offers[0].gates.common_scope.artifactReference = "x";

    const offerASection = buildWebsiteMaintenanceDecisionReport(
      context,
      EVALUATION_DATE,
    ).split("\nOFFRE B\n")[0];

    expect(offerASection).toContain(
      "Même périmètre et mêmes horaires : ND — statut PASS non étayé",
    );
    expect(offerASection).toContain("artefact ou référence : ND");
    expect(offerASection).toContain(
      "Verdict de comparabilité : NON QUALIFIÉE",
    );
    expect(offerASection).toContain(
      "Sous-total non comparable à 12 mois : 30",
    );
    expect(offerASection).not.toContain(
      "Même périmètre et mêmes horaires : PASS",
    );
  });

  it("exports a reproducible complete offer without auto-adding the incident", () => {
    const context = completeFirstOffer(
      createEmptyWebsiteMaintenanceDecisionContext(),
    );
    context.incident = CENTRAL_INCIDENT;
    context.offers[0].tco = {
      ...AGENCY_TCO_WITHOUT_INCIDENT,
      residualIncidentReserveAnnual: 2_370,
    };

    const report = buildWebsiteMaintenanceDecisionReport(
      context,
      EVALUATION_DATE,
    );
    const reconstructed = {} as WebsiteMaintenanceTcoInput;
    const offerASection = report.split("\nOFFRE B\n")[0];

    for (const field of WEBSITE_MAINTENANCE_TCO_FIELDS) {
      const match = offerASection.match(
        new RegExp(
          `^- ${escapeRegExp(field.label)} : (.+ ${escapeRegExp(field.unit)})$`,
          "m",
        ),
      );
      expect(match, field.label).not.toBeNull();
      reconstructed[field.key] = numberFromReport(match![1]);
    }

    expect(reconstructed).toEqual(context.offers[0].tco);
    expect(report).toContain("Impact incident calculé : 2");
    expect(report).toContain("370 € HT");
    expect(report).toContain("TCO 12 mois : 33");
    expect(report).toContain("270 € HT");
    expect(report).toContain("TCO 36 mois : 91");
    expect(report).toContain("210 € HT");
    expect(report).toContain(
      "Cet impact n’est pas ajouté automatiquement au TCO",
    );
    expect(report).toContain("Verdict de comparabilité : QUALIFIÉE");
    expect(report).toContain("date de la preuve : 2026-07-24");
    expect(report).toContain("artefact ou référence : PV-common_scope");
    expect(report).not.toMatch(/\bundefined\b|\bNaN\b|\bInfinity\b/);
  });

  it("exports an excessive recoverable compensation as a named invalid assumption", () => {
    const context = createEmptyWebsiteMaintenanceDecisionContext();
    context.incident = {
      ...CENTRAL_INCIDENT,
      recoverableCompensation: 3_000,
    };

    const report = buildWebsiteMaintenanceDecisionReport(
      context,
      EVALUATION_DATE,
    );

    expect(report).toContain(
      "- Compensation récupérable : 3000 € (invalide : dépasse le coût brut de 2",
    );
    expect(report).toContain(
      "Impact incident calculé : ND — compensation récupérable supérieure au coût brut de 2",
    );
  });
});
