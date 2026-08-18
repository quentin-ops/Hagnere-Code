import { describe, expect, it } from "vitest";
import {
  WEBSITE_INCIDENT_DIRECT_COST_LIMITS,
  WEBSITE_INCIDENT_GATE_PROOF_LABELS,
  WEBSITE_INCIDENT_RECOVERY_GATE_IDS,
  WEBSITE_INCIDENT_RECOVERY_GATES,
  buildWebsiteIncidentDossierReport,
  calculateWebsiteIncidentDirectCost,
  createEmptyWebsiteIncidentDossier,
  createFictitiousWebsiteIncidentDossier,
  evaluateWebsiteIncidentDossier,
  type WebsiteIncidentDirectCostInput,
  type WebsiteIncidentDossier,
  type WebsiteIncidentRecoveryGateId,
} from "./website-incident-dossier";

const EVALUATION_TIME = "2026-07-27T11:00:00+02:00";

function cloneDossier(dossier: WebsiteIncidentDossier): WebsiteIncidentDossier {
  return structuredClone(dossier);
}

function example(): WebsiteIncidentDossier {
  return createFictitiousWebsiteIncidentDossier(EVALUATION_TIME);
}

function resetAllGates(dossier: WebsiteIncidentDossier): void {
  for (const id of WEBSITE_INCIDENT_RECOVERY_GATE_IDS) {
    dossier.recoveryGates[id] = {
      status: "unknown",
      proofKind: "unknown",
      observedAt: "",
      evidenceReference: "",
      result: "",
      owner: "",
    };
  }
}

function directCost(
  overrides: Partial<WebsiteIncidentDirectCostInput> = {},
): WebsiteIncidentDirectCostInput {
  return {
    irrecoverableTransactions: 4,
    marginPerTransaction: 80,
    productivityPeople: 3,
    productivityHoursPerPerson: 2,
    productivityHourlyCost: 45,
    coordinationPeople: 2,
    coordinationHoursPerPerson: 1.5,
    coordinationHourlyCost: 60,
    coordinationDistinctFromProductivity: true,
    confirmedDirectCosts: 250,
    ...overrides,
  };
}

describe("website incident dossier defaults and example", () => {
  it("fails closed on an empty dossier and keeps objectives and costs at ND", () => {
    const dossier = createEmptyWebsiteIncidentDossier();
    const result = evaluateWebsiteIncidentDossier(dossier, EVALUATION_TIME);

    expect(result.route).toBe("incomplete");
    expect(result.valid).toBe(false);
    expect(result.closure).toMatchObject({
      status: "not-ready",
      canClose: false,
    });
    expect(result.rto.kind).toBe("not-defined");
    expect(result.rpo.kind).toBe("not-defined");
    expect(result.sla.kind).toBe("not-defined");
    expect(result.directCost.kind).toBe("unknown");
    expect(result.blockingGateIds).toEqual(WEBSITE_INCIDENT_RECOVERY_GATE_IDS);
    expect(
      WEBSITE_INCIDENT_RECOVERY_GATE_IDS.every(
        (id) => result.gates[id].effectiveStatus === "unknown",
      ),
    ).toBe(true);
  });

  it("builds a coherent, closed fictitious case without treating 502 as a cause", () => {
    const dossier = example();
    const result = evaluateWebsiteIncidentDossier(dossier, EVALUATION_TIME);

    expect(result.route).toBe("technical");
    expect(result.valid).toBe(true);
    expect(result.routeReason).toContain("ne permet pas d’attribuer la cause");
    expect(result.causeConclusion).toContain("Cause non établie");
    expect(result.issues).toContainEqual(
      expect.objectContaining({
        code: "http-502-no-cause",
        severity: "warning",
      }),
    );
    expect(result.timeline).toMatchObject({
      valid: true,
      observedTechnicalOutageMinutes: 90,
      observationUncertaintyMinutes: 7,
    });
    expect(result.rto).toMatchObject({
      kind: "met",
      targetMinutes: 120,
      actualMinutes: 90,
    });
    expect(result.rpo).toMatchObject({
      kind: "met",
      targetMinutes: 15,
      actualMinutes: 10,
    });
    expect(result.directCost).toMatchObject({
      kind: "known",
      lostMargin: 240,
      productivityCost: 202.5,
      coordinationCost: 240,
      confirmedDirectCosts: 350,
      total: 1_032.5,
    });
    expect(result.blockingGateIds).toEqual([]);
    expect(result.closure).toEqual({
      status: "closed",
      canClose: true,
      reasons: [],
    });
  });

  it("requires an explicit, zone-consistent evaluation instant for the example", () => {
    for (const invalid of [
      "",
      "2026-07-27",
      "2026-02-30T11:00:00+01:00",
      "2026-07-27T11:00:00+01:00",
    ]) {
      expect(() =>
        createFictitiousWebsiteIncidentDossier(invalid, "Europe/Paris"),
      ).toThrow("heure d’évaluation ISO");
    }
    expect(() =>
      createFictitiousWebsiteIncidentDossier(
        "2026-07-27T11:00:00+02:00",
        "Mars/Olympus",
      ),
    ).toThrow("heure d’évaluation ISO");
  });

  it("handles the repeated DST hour by comparing absolute instants", () => {
    const winterOccurrence = "2026-10-25T02:30:00+01:00";
    const dossier = createFictitiousWebsiteIncidentDossier(
      winterOccurrence,
      "Europe/Paris",
    );
    const result = evaluateWebsiteIncidentDossier(dossier, winterOccurrence);

    expect(result.valid).toBe(true);
    expect(result.timeline.valid).toBe(true);
    expect(result.timeline.observedTechnicalOutageMinutes).toBe(90);
    expect(result.closure.status).toBe("closed");
  });
});

describe("incident routing remains an escalation route, not a root cause", () => {
  it("routes a single-network symptom to local checks only after an independent pass", () => {
    const dossier = example();
    dossier.context.scope = "single-network";
    dossier.context.independentAccess = "pass";

    const result = evaluateWebsiteIncidentDossier(dossier, EVALUATION_TIME);

    expect(result.route).toBe("local");
    expect(result.routeReason).toContain("accès indépendant");
    expect(result.causeConclusion).toContain("non établie");
  });

  it("routes a documented provider outage to provider escalation without asserting causality", () => {
    const dossier = example();
    dossier.context.provider.status = "outage";
    dossier.context.provider.reference = "STATUS-INCIDENT-789";
    dossier.context.provider.scope = "Origine Europe utilisée par le site";

    const result = evaluateWebsiteIncidentDossier(dossier, EVALUATION_TIME);

    expect(result.route).toBe("provider");
    expect(result.routeReason).toContain("sans prouver");
    expect(result.causeConclusion).toContain("ne constitue pas un diagnostic");
  });

  it("rejects a provider status checked before the real incident window", () => {
    const dossier = example();
    dossier.context.provider.status = "outage";
    dossier.context.provider.checkedAt = "2025-07-27T09:48:00+02:00";
    dossier.context.provider.reference = "STATUS-ANCIEN";
    dossier.context.provider.scope = "Région Europe";

    const result = evaluateWebsiteIncidentDossier(dossier, EVALUATION_TIME);

    expect(result.valid).toBe(false);
    expect(result.route).toBe("technical");
    expect(result.closure.canClose).toBe(false);
    expect(result.issues).toContainEqual(
      expect.objectContaining({
        code: "provider-proof-outside-window",
        field: "context.provider.checkedAt",
      }),
    );
  });

  it("rejects a provider status checked after the declared closure", () => {
    const dossier = example();
    dossier.context.provider.status = "outage";
    dossier.context.provider.checkedAt = "2026-07-27T10:51:00+02:00";
    dossier.context.provider.reference = "STATUS-APRÈS-CLÔTURE";
    dossier.context.provider.scope = "Région Europe";

    const result = evaluateWebsiteIncidentDossier(dossier, EVALUATION_TIME);

    expect(result.valid).toBe(false);
    expect(result.route).toBe("technical");
    expect(result.closure.canClose).toBe(false);
    expect(result.issues).toContainEqual(
      expect.objectContaining({
        code: "provider-proof-outside-window",
        field: "context.provider.checkedAt",
      }),
    );
  });

  it("does not turn a green provider page into a green customer service", () => {
    const dossier = example();
    resetAllGates(dossier);
    dossier.timeline.technicallyRestoredAt = "";
    dossier.timeline.businessValidatedAt = "";
    dossier.timeline.monitoringEndedAt = "";
    dossier.timeline.closedAt = "";
    dossier.context.provider.status = "operational";

    const result = evaluateWebsiteIncidentDossier(dossier, EVALUATION_TIME);

    expect(result.route).toBe("technical");
    expect(result.closure.canClose).toBe(false);
    expect(result.blockingGateIds).toContain("critical_journey");
  });

  it("always gives cyber signals priority over a local or provider branch", () => {
    const dossier = example();
    dossier.context.scope = "single-network";
    dossier.context.independentAccess = "pass";
    dossier.context.provider.status = "outage";
    dossier.context.cyberAssessment = "suspected";
    dossier.context.cyberSignals = [
      "Redirection vers un domaine inconnu observée à 10:58.",
    ];

    const result = evaluateWebsiteIncidentDossier(dossier, EVALUATION_TIME);

    expect(result.route).toBe("cyber");
    expect(result.nextActions[0]).toContain("tests actifs");
    expect(result.closure.canClose).toBe(false);
    expect(result.gates.cyber_clearance.effectiveStatus).toBe("unknown");
  });

  it("keeps an otherwise documented incident incomplete without a discriminating check", () => {
    const dossier = example();
    dossier.context.scope = "single-network";
    dossier.context.independentAccess = "unknown";
    dossier.context.httpStatus = undefined;
    dossier.context.technicalEvidence = "";
    dossier.context.provider.status = "unknown";
    dossier.context.provider.name = "";
    dossier.context.provider.checkedAt = "";
    dossier.context.provider.reference = "";
    dossier.context.provider.scope = "";

    const result = evaluateWebsiteIncidentDossier(dossier, EVALUATION_TIME);

    expect(result.route).toBe("incomplete");
    expect(result.routeReason).toContain("Aucun test indépendant");
  });
});

describe("timestamp, timezone and chronology controls", () => {
  it("rejects an evaluation time without an explicit offset", () => {
    const result = evaluateWebsiteIncidentDossier(
      example(),
      "2026-07-27T11:00:00",
    );

    expect(result.valid).toBe(false);
    expect(result.route).toBe("incomplete");
    expect(result.issues).toContainEqual(
      expect.objectContaining({ code: "invalid-evaluation-time" }),
    );
  });

  it("rejects an instant whose offset disagrees with the declared IANA zone", () => {
    const dossier = example();
    dossier.timeline.detectedAt = "2026-07-27T08:45:00+01:00";

    const result = evaluateWebsiteIncidentDossier(dossier, EVALUATION_TIME);

    expect(result.valid).toBe(false);
    expect(result.route).toBe("incomplete");
    expect(result.issues).toContainEqual(
      expect.objectContaining({
        code: "timestamp-offset-mismatch",
        field: "timeline.detectedAt",
      }),
    );
    expect(result.closure.canClose).toBe(false);
  });

  it("rejects impossible calendar instants and future evidence", () => {
    const impossible = example();
    impossible.timeline.detectedAt = "2026-02-30T08:45:00+01:00";
    expect(
      evaluateWebsiteIncidentDossier(impossible, EVALUATION_TIME).issues,
    ).toContainEqual(
      expect.objectContaining({
        code: "invalid-timestamp",
        field: "timeline.detectedAt",
      }),
    );

    const future = example();
    future.recoveryGates.business_signoff.observedAt =
      "2026-07-27T11:01:00+02:00";
    const result = evaluateWebsiteIncidentDossier(future, EVALUATION_TIME);
    expect(result.issues).toContainEqual(
      expect.objectContaining({
        code: "future-timestamp",
        gateId: "business_signoff",
      }),
    );
    expect(result.gates.business_signoff.effectiveStatus).toBe("unknown");
    expect(result.closure.canClose).toBe(false);
  });

  it("rejects a business validation placed before technical restoration", () => {
    const dossier = example();
    dossier.timeline.businessValidatedAt = "2026-07-27T10:00:00+02:00";

    const result = evaluateWebsiteIncidentDossier(dossier, EVALUATION_TIME);

    expect(result.timeline.valid).toBe(false);
    expect(result.issues).toContainEqual(
      expect.objectContaining({
        code: "invalid-chronology",
        field: "timeline.businessValidatedAt",
      }),
    );
    expect(result.closure.canClose).toBe(false);
  });

  it("does not invent the outage start before the first observed failure", () => {
    const dossier = example();
    const result = evaluateWebsiteIncidentDossier(dossier, EVALUATION_TIME);
    const report = buildWebsiteIncidentDossierReport(dossier, EVALUATION_TIME);

    expect(result.timeline.observationUncertaintyMinutes).toBe(7);
    expect(report).toContain(
      "Incertitude entre dernier bon et premier mauvais : 7 min",
    );
    expect(report).toContain("Durée technique observée : 90 min");
  });
});

describe("RTO, RPO and SLA stay ND unless they are defined and evidenced", () => {
  it("does not compare timestamps when RTO and RPO targets are absent", () => {
    const dossier = example();
    dossier.objectives.rtoMinutes = undefined;
    dossier.objectives.rpoMinutes = undefined;

    const result = evaluateWebsiteIncidentDossier(dossier, EVALUATION_TIME);

    expect(result.rto).toEqual(
      expect.objectContaining({
        kind: "not-defined",
        targetMinutes: undefined,
        actualMinutes: undefined,
        label: "ND",
      }),
    );
    expect(result.rpo).toEqual(
      expect.objectContaining({
        kind: "not-defined",
        targetMinutes: undefined,
        actualMinutes: undefined,
        label: "ND",
      }),
    );
  });

  it("keeps a declared target at ND when its source or clock is missing", () => {
    const dossier = example();
    dossier.objectives.rtoSource = "";
    dossier.objectives.dataRecoveryPointAt = "";

    const result = evaluateWebsiteIncidentDossier(dossier, EVALUATION_TIME);

    expect(result.rto).toMatchObject({
      kind: "unknown",
      targetMinutes: 120,
      actualMinutes: undefined,
    });
    expect(result.rpo).toMatchObject({
      kind: "unknown",
      targetMinutes: 15,
      actualMinutes: undefined,
    });
    expect(
      result.issues.filter(
        (issue) => issue.code === "objective-evidence-missing",
      ),
    ).toHaveLength(2);
  });

  it("reports a missed RTO and a 30-hour recovery point against a 24-hour RPO", () => {
    const dossier = example();
    dossier.objectives.rtoMinutes = 60;
    dossier.objectives.rpoMinutes = 24 * 60;
    dossier.objectives.dataRecoveryPointAt = "2026-07-26T02:42:00+02:00";
    dossier.objectives.rpoReferenceAt = dossier.timeline.firstFailureObservedAt;

    const result = evaluateWebsiteIncidentDossier(dossier, EVALUATION_TIME);

    expect(result.rto).toMatchObject({
      kind: "missed",
      actualMinutes: 90,
      targetMinutes: 60,
    });
    expect(result.rpo).toMatchObject({
      kind: "missed",
      actualMinutes: 1_800,
      targetMinutes: 1_440,
    });
  });

  it("rejects non-positive, non-finite and excessive objectives", () => {
    for (const invalid of [
      0,
      -1,
      Number.NaN,
      Number.POSITIVE_INFINITY,
      525_601,
    ]) {
      const dossier = example();
      dossier.objectives.rtoMinutes = invalid;
      const result = evaluateWebsiteIncidentDossier(dossier, EVALUATION_TIME);

      expect(result.rto.kind).toBe("unknown");
      expect(result.issues).toContainEqual(
        expect.objectContaining({
          code: "invalid-objective",
          field: "objectives.rtoMinutes",
        }),
      );
    }
  });

  it("does not call a partial SLA compliant", () => {
    const dossier = example();
    dossier.objectives.slaCoverageWindow = "";

    const result = evaluateWebsiteIncidentDossier(dossier, EVALUATION_TIME);

    expect(result.sla).toMatchObject({ kind: "incomplete", label: "ND" });
    expect(result.issues).toContainEqual(
      expect.objectContaining({ code: "sla-incomplete" }),
    );
  });
});

describe("prudent direct cost", () => {
  it("keeps every empty numerical field at ND instead of converting it to zero", () => {
    const result = calculateWebsiteIncidentDirectCost(
      createEmptyWebsiteIncidentDossier().directCost,
    );

    expect(result.kind).toBe("unknown");
    if (result.kind === "unknown") {
      expect(
        result.issues.filter((issue) => issue.code === "missing"),
      ).toHaveLength(9);
    }
  });

  it("accepts explicit zeros and calculates only irrecoverable margin plus distinct costs", () => {
    expect(
      calculateWebsiteIncidentDirectCost(
        directCost({
          irrecoverableTransactions: 0,
          marginPerTransaction: 0,
          productivityPeople: 0,
          productivityHoursPerPerson: 0,
          productivityHourlyCost: 0,
          coordinationPeople: 0,
          coordinationHoursPerPerson: 0,
          coordinationHourlyCost: 0,
          coordinationDistinctFromProductivity: undefined,
          confirmedDirectCosts: 0,
        }),
      ),
    ).toEqual({
      kind: "known",
      label: "calculé",
      lostMargin: 0,
      productivityCost: 0,
      coordinationCost: 0,
      confirmedDirectCosts: 0,
      total: 0,
      issues: [],
    });

    expect(calculateWebsiteIncidentDirectCost(directCost())).toMatchObject({
      kind: "known",
      lostMargin: 320,
      productivityCost: 270,
      coordinationCost: 180,
      confirmedDirectCosts: 250,
      total: 1_020,
    });
  });

  it("refuses missing proof that coordination hours are distinct", () => {
    for (const value of [undefined, false]) {
      const result = calculateWebsiteIncidentDirectCost(
        directCost({ coordinationDistinctFromProductivity: value }),
      );

      expect(result).toEqual({
        kind: "unknown",
        label: "ND",
        issues: [
          expect.objectContaining({
            code: "possible-double-count",
            field: "possibleDoubleCount",
          }),
        ],
      });
    }
  });

  it("rejects negative, fractional counts, non-finite and over-limit inputs", () => {
    const invalidCases: Array<[keyof WebsiteIncidentDirectCostInput, number]> =
      [
        ["confirmedDirectCosts", -1],
        ["irrecoverableTransactions", 1.5],
        ["productivityHourlyCost", Number.NaN],
        ["coordinationHoursPerPerson", Number.POSITIVE_INFINITY],
        [
          "marginPerTransaction",
          WEBSITE_INCIDENT_DIRECT_COST_LIMITS.marginPerTransaction.maximum + 1,
        ],
      ];

    for (const [field, value] of invalidCases) {
      const result = calculateWebsiteIncidentDirectCost(
        directCost({ [field]: value }),
      );
      expect(result.kind).toBe("unknown");
      if (result.kind === "unknown") {
        expect(result.issues).toContainEqual(
          expect.objectContaining({ code: "invalid", field }),
        );
      }
    }
  });

  it("calculates exact cents at high safe values and rejects excess precision", () => {
    const exact = calculateWebsiteIncidentDirectCost(
      directCost({
        irrecoverableTransactions: 999_999,
        marginPerTransaction: 9_999_999.99,
        productivityPeople: 0,
        productivityHoursPerPerson: 0,
        productivityHourlyCost: 0,
        coordinationPeople: 0,
        coordinationHoursPerPerson: 0,
        coordinationHourlyCost: 0,
        coordinationDistinctFromProductivity: undefined,
        confirmedDirectCosts: 0,
      }),
    );

    expect(exact).toMatchObject({
      kind: "known",
      lostMargin: 9_999_989_990_000.01,
      total: 9_999_989_990_000.01,
    });

    const excessPrecision = calculateWebsiteIncidentDirectCost(
      directCost({ marginPerTransaction: 12.345 }),
    );
    expect(excessPrecision).toEqual(
      expect.objectContaining({
        kind: "unknown",
        issues: [
          expect.objectContaining({
            code: "invalid",
            field: "marginPerTransaction",
          }),
        ],
      }),
    );
  });

  it("accepts an exact upper-bound product but keeps an unrepresentable cent total at ND", () => {
    const exactUpperProduct = calculateWebsiteIncidentDirectCost(
      directCost({
        irrecoverableTransactions: 0,
        marginPerTransaction: 0,
        productivityPeople: 100_000,
        productivityHoursPerPerson: 8_783.99,
        productivityHourlyCost: 99_999.99,
        coordinationPeople: 0,
        coordinationHoursPerPerson: 0,
        coordinationHourlyCost: 0,
        coordinationDistinctFromProductivity: undefined,
        confirmedDirectCosts: 0,
      }),
    );
    expect(exactUpperProduct).toMatchObject({
      kind: "known",
      productivityCost: 87_839_891_216_010,
      total: 87_839_891_216_010,
    });

    const unsafeCentTotal = calculateWebsiteIncidentDirectCost(
      directCost({
        irrecoverableTransactions: 1_000_000,
        marginPerTransaction: 9_999_999.99,
        productivityPeople: 90_000,
        productivityHoursPerPerson: 8_783.99,
        productivityHourlyCost: 99_999.99,
        coordinationPeople: 0,
        coordinationHoursPerPerson: 0,
        coordinationHourlyCost: 0,
        coordinationDistinctFromProductivity: undefined,
        confirmedDirectCosts: 999_999_999_999.99,
      }),
    );
    expect(unsafeCentTotal).toEqual({
      kind: "unknown",
      label: "ND",
      issues: [
        expect.objectContaining({
          code: "unsafe-total",
          field: "total",
        }),
      ],
    });
  });
});

describe("ten recovery gates block false greens", () => {
  it("never closes from a green homepage alone", () => {
    const dossier = example();
    const homepageProof = cloneDossier(dossier).recoveryGates.homepage_http;
    resetAllGates(dossier);
    dossier.recoveryGates.homepage_http = homepageProof;

    const result = evaluateWebsiteIncidentDossier(dossier, EVALUATION_TIME);

    expect(result.gates.homepage_http.effectiveStatus).toBe("pass");
    expect(result.closure.canClose).toBe(false);
    expect(result.blockingGateIds).toContain("critical_journey");
    expect(result.blockingGateIds).toContain("business_signoff");
    expect(result.issues).toContainEqual(
      expect.objectContaining({ code: "premature-closure" }),
    );
  });

  it.each([
    ["public_access", "same-environment-only"],
    ["dns_tls", "provider-status-only"],
    ["critical_journey", "homepage-only"],
    ["email", "api-accepted-only"],
    ["data_reconciliation", "backup-exists-only"],
  ] as const)(
    "rejects insufficient proof kind %s / %s even when declared pass",
    (gateId, proofKind) => {
      const dossier = example();
      dossier.recoveryGates[gateId].proofKind = proofKind;

      const result = evaluateWebsiteIncidentDossier(dossier, EVALUATION_TIME);

      expect(result.gates[gateId].declaredStatus).toBe("pass");
      expect(result.gates[gateId].effectiveStatus).toBe("unknown");
      expect(result.blockingGateIds).toContain(gateId);
      expect(result.closure.canClose).toBe(false);
      expect(result.issues).toContainEqual(
        expect.objectContaining({
          code: "gate-proof-insufficient",
          gateId,
        }),
      );
    },
  );

  it("rejects NA for payments, webhooks, data or cyber when the context makes them applicable", () => {
    const cases: Array<{
      gateId: WebsiteIncidentRecoveryGateId;
      mutate: (dossier: WebsiteIncidentDossier) => void;
    }> = [
      {
        gateId: "payment",
        mutate: (dossier) => {
          dossier.context.service.usesPayments = true;
        },
      },
      {
        gateId: "webhook",
        mutate: (dossier) => {
          dossier.context.service.usesWebhooks = true;
        },
      },
      {
        gateId: "data_reconciliation",
        mutate: (dossier) => {
          dossier.context.service.hasMutableData = true;
          dossier.recoveryGates.data_reconciliation.status = "NA";
          dossier.recoveryGates.data_reconciliation.proofKind =
            "applicability-justification";
        },
      },
      {
        gateId: "cyber_clearance",
        mutate: (dossier) => {
          dossier.context.cyberAssessment = "suspected";
          dossier.context.cyberSignals = [
            "Modification DNS non autorisée observée.",
          ];
        },
      },
    ];

    for (const testCase of cases) {
      const dossier = example();
      testCase.mutate(dossier);
      const result = evaluateWebsiteIncidentDossier(dossier, EVALUATION_TIME);

      expect(result.gates[testCase.gateId].effectiveStatus).toBe("unknown");
      expect(result.closure.canClose).toBe(false);
      expect(result.issues).toContainEqual(
        expect.objectContaining({
          code: "gate-applicability",
          gateId: testCase.gateId,
        }),
      );
    }
  });

  it("blocks closure when payment passes but webhook reconciliation fails", () => {
    const dossier = example();
    dossier.context.service.usesPayments = true;
    dossier.context.service.usesWebhooks = true;
    dossier.recoveryGates.payment = {
      status: "pass",
      proofKind: "payment-reconciliation",
      observedAt: "2026-07-27T10:22:00+02:00",
      evidenceReference: "PV-PAIEMENT-FICTIF",
      result: "Paiement et commande fictifs rapprochés sans double débit.",
      owner: "Responsable e-commerce fictif",
    };
    dossier.recoveryGates.webhook = {
      status: "fail",
      proofKind: "failure-observation",
      observedAt: "2026-07-27T10:23:00+02:00",
      evidenceReference: "PV-WEBHOOK-FICTIF",
      result: "Événement dupliqué et ordre non réconcilié.",
      owner: "Responsable technique fictif",
    };

    const result = evaluateWebsiteIncidentDossier(dossier, EVALUATION_TIME);

    expect(result.gates.payment.effectiveStatus).toBe("pass");
    expect(result.gates.webhook.effectiveStatus).toBe("fail");
    expect(result.blockingGateIds).toEqual(["webhook"]);
    expect(result.closure.canClose).toBe(false);
  });

  it("rejects a business signoff before the observation window has ended", () => {
    const dossier = example();
    dossier.recoveryGates.business_signoff.observedAt =
      "2026-07-27T10:44:00+02:00";

    const result = evaluateWebsiteIncidentDossier(dossier, EVALUATION_TIME);

    expect(result.gates.business_signoff.effectiveStatus).toBe("unknown");
    expect(result.closure.canClose).toBe(false);
    expect(result.issues).toContainEqual(
      expect.objectContaining({
        code: "gate-evidence-outside-window",
        gateId: "business_signoff",
      }),
    );
  });

  it("does not accept a naked pass or NA without dated, owned evidence", () => {
    const pass = example();
    pass.recoveryGates.critical_journey.evidenceReference = "";
    const passResult = evaluateWebsiteIncidentDossier(pass, EVALUATION_TIME);
    expect(passResult.gates.critical_journey.effectiveStatus).toBe("unknown");
    expect(passResult.issues).toContainEqual(
      expect.objectContaining({
        code: "gate-evidence-missing",
        gateId: "critical_journey",
      }),
    );

    const notApplicable = example();
    notApplicable.recoveryGates.payment.owner = "";
    const naResult = evaluateWebsiteIncidentDossier(
      notApplicable,
      EVALUATION_TIME,
    );
    expect(naResult.gates.payment.effectiveStatus).toBe("unknown");
  });

  it("rejects stale evidence before the incident for every recovery gate", () => {
    for (const id of WEBSITE_INCIDENT_RECOVERY_GATE_IDS) {
      const dossier = example();
      dossier.recoveryGates[id].observedAt =
        "2026-07-27T08:00:00+02:00";

      const result = evaluateWebsiteIncidentDossier(dossier, EVALUATION_TIME);

      expect(result.gates[id].effectiveStatus, id).toBe("unknown");
      expect(result.blockingGateIds, id).toContain(id);
      expect(result.closure.canClose, id).toBe(false);
      expect(result.issues, id).toContainEqual(
        expect.objectContaining({
          code: "gate-evidence-outside-window",
          gateId: id,
        }),
      );
    }
  });

  it("requires applicable cyber clearance after technical restoration and rejects any proof after closure", () => {
    const cyber = example();
    cyber.context.cyberAssessment = "confirmed";
    cyber.context.cyberSignals = ["DNS détourné confirmé"];
    cyber.recoveryGates.cyber_clearance = {
      status: "pass",
      proofKind: "authorized-cyber-clearance",
      observedAt: "2026-07-27T08:46:00+02:00",
      evidenceReference: "PV-CYBER-FICTIF",
      result: "Levée fictive déclarée avant la remédiation et la reprise.",
      owner: "Référent cyber fictif",
    };

    const cyberResult = evaluateWebsiteIncidentDossier(
      cyber,
      EVALUATION_TIME,
    );
    expect(cyberResult.gates.cyber_clearance.effectiveStatus).toBe("unknown");
    expect(cyberResult.issues).toContainEqual(
      expect.objectContaining({
        code: "gate-evidence-outside-window",
        gateId: "cyber_clearance",
      }),
    );

    const atRestoration = example();
    atRestoration.context.cyberAssessment = "confirmed";
    atRestoration.context.cyberSignals = ["DNS détourné confirmé"];
    atRestoration.recoveryGates.cyber_clearance = {
      status: "pass",
      proofKind: "authorized-cyber-clearance",
      observedAt: atRestoration.timeline.technicallyRestoredAt,
      evidenceReference: "PV-CYBER-APRÈS-REPRISE",
      result: "Remédiation fictive vérifiée au rétablissement technique.",
      owner: "Référent cyber fictif",
    };
    const restorationResult = evaluateWebsiteIncidentDossier(
      atRestoration,
      EVALUATION_TIME,
    );
    expect(
      restorationResult.gates.cyber_clearance.effectiveStatus,
    ).toBe("pass");
    expect(restorationResult.closure.canClose).toBe(true);

    const afterClosure = example();
    afterClosure.recoveryGates.public_access.observedAt =
      "2026-07-27T10:55:00+02:00";
    const closureResult = evaluateWebsiteIncidentDossier(
      afterClosure,
      EVALUATION_TIME,
    );
    expect(closureResult.gates.public_access.effectiveStatus).toBe("unknown");
    expect(closureResult.closure.canClose).toBe(false);
    expect(closureResult.issues).toContainEqual(
      expect.objectContaining({
        code: "gate-evidence-outside-window",
        gateId: "public_access",
        message: expect.stringContaining("postérieure à la clôture"),
      }),
    );
  });

  it("never accepts a critical-journey pass without the journey to reproduce", () => {
    const dossier = example();
    dossier.context.service.criticalJourney = "";

    const result = evaluateWebsiteIncidentDossier(dossier, EVALUATION_TIME);

    expect(result.valid).toBe(false);
    expect(result.gates.critical_journey.effectiveStatus).toBe("unknown");
    expect(result.blockingGateIds).toContain("critical_journey");
    expect(result.closure.canClose).toBe(false);
    expect(result.issues).toContainEqual(
      expect.objectContaining({
        code: "critical-journey-missing",
        gateId: "critical_journey",
      }),
    );
  });
});

describe("French text report is complete and redacts common secret shapes", () => {
  it("prints every operational section and all ten gates", () => {
    const report = buildWebsiteIncidentDossierReport(
      example(),
      EVALUATION_TIME,
    );

    for (const section of [
      "VERDICT",
      "CONTEXTE FACTUEL",
      "CHRONOLOGIE",
      "OBJECTIFS ET CONTRAT",
      "COÛT DIRECT PRUDENT",
      "DIX PORTES DE REPRISE",
      "BLOCAGES DE CLÔTURE",
      "ANOMALIES ET AVERTISSEMENTS",
      "PROCHAINES ACTIONS",
      "PRÉCAUTION",
    ]) {
      expect(report).toContain(section);
    }
    for (const id of WEBSITE_INCIDENT_RECOVERY_GATE_IDS) {
      expect(report).toContain(example().recoveryGates[id].evidenceReference);
    }
    expect(report).toContain("Périmètre : Plusieurs réseaux");
    expect(report).toContain("Accès indépendant : Échec");
    expect(report).toContain("Statut fournisseur : Opérationnel");
    expect(report).toContain("Changement récent : Changement connu");
    expect(report).toContain(
      "Évaluation cyber : Aucun signal observé, sans exclure une attaque",
    );
    for (const rawValue of [
      "Périmètre : multiple-networks",
      "Accès indépendant : fail",
      "Statut fournisseur : operational",
      "Changement récent : known",
      "Évaluation cyber : no-signal",
    ]) {
      expect(report).not.toContain(rawValue);
    }
    expect(report).toContain("HTTP 502 est une observation");
    expect(report).toContain("Cause non établie");
  });

  it("prints a French proof label, with the technical code secondary, for all ten gates", () => {
    const dossier = example();
    const report = buildWebsiteIncidentDossierReport(
      dossier,
      EVALUATION_TIME,
    );

    expect(report.match(/^  Type de preuve : /gm)).toHaveLength(10);
    for (const id of WEBSITE_INCIDENT_RECOVERY_GATE_IDS) {
      const proofKind = dossier.recoveryGates[id].proofKind;
      const frenchLabel = WEBSITE_INCIDENT_GATE_PROOF_LABELS[proofKind];
      expect(frenchLabel.trim()).not.toBe("");
      expect(report).toContain(
        `${WEBSITE_INCIDENT_RECOVERY_GATES[id].label} :`,
      );
      expect(report).toContain(
        `  Type de preuve : ${frenchLabel} (${proofKind})`,
      );
      expect(report).not.toContain(`  Type de preuve : ${proofKind}\n`);
    }
  });

  it("keeps absent values explicitly at ND in the empty report", () => {
    const report = buildWebsiteIncidentDossierReport(
      createEmptyWebsiteIncidentDossier(),
      EVALUATION_TIME,
    );

    expect(report).toContain("RTO : ND");
    expect(report).toContain("RPO : ND");
    expect(report).toContain("SLA : ND");
    expect(report).toContain("Total direct prudent : ND");
    expect(report).not.toContain("Total direct prudent : 0 €");
  });

  it("masks credentials, bearer tokens, query secrets and labelled secrets", () => {
    const dossier = example();
    dossier.context.url =
      "https://boutique.example.invalid/?api_key=KeySecret987";
    dossier.context.symptom =
      "password=SuperSecret42 et token=TokenSecret987 constatés dans une note à expurger";
    dossier.context.technicalEvidence =
      "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.abcdefghijklmno.signatureABC";
    dossier.recoveryGates.critical_journey.evidenceReference =
      "ticket?access_token=AccessSecret987";

    const report = buildWebsiteIncidentDossierReport(dossier, EVALUATION_TIME);

    for (const secret of [
      "KeySecret987",
      "SuperSecret42",
      "TokenSecret987",
      "eyJhbGciOiJIUzI1NiJ9",
      "AccessSecret987",
    ]) {
      expect(report).not.toContain(secret);
    }
    expect(report).toContain("[MASQUÉ]");
    expect(report).toContain("[SECRET MASQUÉ]");
  });

  it("best-effort masks common Stripe, AWS, GitHub, Slack, Basic and client-secret forms", () => {
    const dossier = example();
    const secrets = [
      ["sk", "live", "51AbCdEfGhIjKlMnOpQrStUv"].join("_"),
      ["sk", "test", "51ZyXwVuTsRqPoNmLkJiHgFe"].join("_"),
      "AKIAIOSFODNN7EXAMPLE",
      "ghp_abcdefghijklmnopqrstuvwxyz1234567890",
      "gho_abcdefghijklmnopqrstuvwxyz1234567890",
      "ghu_abcdefghijklmnopqrstuvwxyz1234567890",
      "ghs_abcdefghijklmnopqrstuvwxyz1234567890",
      "ghr_abcdefghijklmnopqrstuvwxyz1234567890",
      "github_pat_11AA22BB33CC44DD55EE66FF77GG88HH",
      ["xoxb", "123456789012", "abcdefghijklmnopqrstuvwx"].join("-"),
      ["xoxp", "123456789012", "abcdefghijklmnopqrstuvwx"].join("-"),
      ["xoxa", "123456789012", "abcdefghijklmnopqrstuvwx"].join("-"),
      "dXNlcjpwYXNzd29yZA==",
      "ClientSecret987654321",
    ];
    dossier.context.symptom = [
      ...secrets.slice(0, 12),
      `Authorization: Basic ${secrets[12]}`,
      `client_secret=${secrets[13]}`,
    ].join(" | ");

    const report = buildWebsiteIncidentDossierReport(dossier, EVALUATION_TIME);

    for (const secret of secrets) {
      expect(report).not.toContain(secret);
    }
    expect(report).toContain("[JETON MASQUÉ]");
    expect(report).toContain("[IDENTIFIANT AWS MASQUÉ]");
    expect(report).toContain("approche automatique best-effort");
    expect(report).toContain("ne garantit jamais");
  });

  it("rejects URL credentials and removes them from the text export", () => {
    const dossier = example();
    dossier.context.url =
      "https://admin:PasswordSecret987@boutique.example.invalid/";

    const result = evaluateWebsiteIncidentDossier(dossier, EVALUATION_TIME);
    const report = buildWebsiteIncidentDossierReport(dossier, EVALUATION_TIME);

    expect(result.valid).toBe(false);
    expect(result.issues).toContainEqual(
      expect.objectContaining({ code: "url-contains-credentials" }),
    );
    expect(report).not.toContain("PasswordSecret987");
    expect(report).toContain("[IDENTIFIANTS MASQUÉS]");
  });
});
