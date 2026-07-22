import { describe, expect, it } from "vitest";
import {
  formatConversionCaseSheet,
  formatConversionReconciliationSummary,
  reconcileConversionChain,
  validateConversionCaseSheet,
  validateConversionContext,
  type ConversionCaseSheet,
  type ConversionReconciliationContext,
  type ConversionReconciliationVolumes,
} from "./conversion-reconciliation";

const example: ConversionReconciliationVolumes = {
  eventsSent: 72,
  requestsReceived: 68,
  uniqueRequests: 60,
  qualifiedRequests: 18,
  quotes: 9,
  sales: 4,
};

const validContext: ConversionReconciliationContext = {
  label: "Campagne locale",
  startDate: "2026-06-01",
  endDate: "2026-06-30",
  observedAt: "2026-07-21",
  followUpComplete: true,
};

const caseSheet: ConversionCaseSheet = {
  caseId: "DOSSIER-2026-001",
  responsibleRole: "Direction commerciale",
  saleDefinition: "Acompte encaissé et commande validée.",
  advertisingId: "REF-IDPUB-001",
  importReference: "IMPORT-2026-001",
  importChecks: {
    batchSent: {
      status: "confirmed",
      date: "2026-07-06",
      evidence: "Lot LOT-001",
    },
    googleAccepted: {
      status: "confirmed",
      date: "2026-07-07",
      evidence: "Rapport d’acceptation ACC-001",
    },
    googleMatched: {
      status: "confirmed",
      date: "2026-07-08",
      evidence: "Rapport de correspondance MAT-001",
    },
    campaignAttributed: {
      status: "confirmed",
      date: "2026-07-09",
      evidence: "Rapport d’attribution ATT-001",
    },
    reportVisible: {
      status: "confirmed",
      date: "2026-07-10",
      evidence: "Capture interne VIS-001",
    },
  },
  margin: {
    status: "actual",
    date: "2026-07-06",
    formula: "CA HT – achats – sous-traitance",
    value: 1250,
    evidence: "Calcul MARGE-001",
  },
  nextAction: "Vérifier la présence dans le rapport le 25 juillet.",
  stages: {
    eventsSent: { date: "2026-07-01", evidence: "Journal d’envoi EVT-001" },
    requestsReceived: { date: "2026-07-01", evidence: "Entrée CRM D-001" },
    uniqueRequests: { date: "2026-07-02", evidence: "Double envoi écarté" },
    qualifiedRequests: { date: "2026-07-03", evidence: "Critères validés" },
    quotes: { date: "2026-07-04", evidence: "Devis DV-001" },
    sales: { date: "2026-07-05", evidence: "Acompte PAY-001" },
  },
};

describe("conversion reconciliation", () => {
  it("reproduces the complete fictitious example", () => {
    const result = reconcileConversionChain(example);

    expect(result.valid).toBe(true);
    expect(result.complete).toBe(true);
    expect(result.firstUnprovedTransition).toBeNull();
    expect(result.steps.map((step) => step.gapFromPrevious)).toEqual([
      null,
      4,
      8,
      42,
      9,
      5,
    ]);
    expect(result.steps[1].passageRate).toBeCloseTo(94.4444, 3);
    expect(result.steps[2].passageRate).toBeCloseTo(88.2353, 3);
    expect(result.steps[3].passageRate).toBe(30);
    expect(result.steps[5].passageRate).toBeCloseTo(44.4444, 3);
    expect(result.overallPassageRate).toBeCloseTo(5.5556, 3);
    expect(result.largestGap?.id).toBe("qualifiedRequests");
  });

  it("treats blank volumes as unknown, not as zero or an error", () => {
    const result = reconcileConversionChain({
      ...example,
      requestsReceived: null,
      qualifiedRequests: null,
    });

    expect(result.valid).toBe(true);
    expect(result.complete).toBe(false);
    expect(result.issues).toEqual([]);
    expect(result.firstUnprovedTransition).toEqual(
      expect.objectContaining({
        fromId: "eventsSent",
        toId: "requestsReceived",
      }),
    );
    expect(result.steps[1]).toEqual(
      expect.objectContaining({
        volume: null,
        gapFromPrevious: null,
        passageRate: null,
        rateStatus: "unknown-volume",
      }),
    );
    expect(result.steps[2].passageRate).toBeNull();
    expect(result.steps[5].passageRate).toBeCloseTo(44.4444, 3);
    expect(result.overallPassageRate).toBeNull();
  });

  it.each([
    ["an infinite value", { requestsReceived: Infinity }, "not-finite"],
    ["a negative value", { uniqueRequests: -1 }, "negative"],
    ["a decimal value", { sales: 1.5 }, "not-an-integer"],
  ] as const)("rejects %s", (_label, replacement, expectedCode) => {
    const result = reconcileConversionChain({ ...example, ...replacement });

    expect(result.valid).toBe(false);
    expect(result.issues.some((issue) => issue.code === expectedCode)).toBe(
      true,
    );
    expect(
      result.steps
        .slice(1)
        .every((step) => step.rateStatus === "invalid-chain"),
    ).toBe(true);
  });

  it("keeps a zero chain valid without inventing division by zero", () => {
    const zeroVolumes: ConversionReconciliationVolumes = {
      eventsSent: 0,
      requestsReceived: 0,
      uniqueRequests: 0,
      qualifiedRequests: 0,
      quotes: 0,
      sales: 0,
    };
    const result = reconcileConversionChain(zeroVolumes);

    expect(result.valid).toBe(true);
    expect(result.complete).toBe(true);
    expect(result.steps.map((step) => step.gapFromPrevious)).toEqual([
      null,
      0,
      0,
      0,
      0,
      0,
    ]);
    expect(
      result.steps.slice(1).every((step) => step.rateStatus === "zero-base"),
    ).toBe(true);
    expect(result.overallPassageRate).toBeNull();
  });

  it("rejects an increase between known volumes, including across an unknown step", () => {
    const invalid = reconcileConversionChain({
      ...example,
      uniqueRequests: 69,
    });
    const validAcrossUnknown = reconcileConversionChain({
      ...example,
      requestsReceived: null,
      uniqueRequests: 69,
    });
    const invalidAcrossUnknown = reconcileConversionChain({
      ...example,
      eventsSent: 65,
      requestsReceived: null,
      uniqueRequests: 69,
    });

    expect(invalid.valid).toBe(false);
    expect(invalid.issues[0]).toEqual(
      expect.objectContaining({
        code: "increasing-chain",
        stageIds: ["requestsReceived", "uniqueRequests"],
      }),
    );
    expect(validAcrossUnknown.valid).toBe(true);
    expect(invalidAcrossUnknown.valid).toBe(false);
    expect(invalidAcrossUnknown.issues[0]).toEqual(
      expect.objectContaining({
        code: "increasing-chain",
        stageIds: ["eventsSent", "uniqueRequests"],
      }),
    );
  });

  it("requires ordered dates and an explicit follow-up status", () => {
    const missing = validateConversionContext({
      label: "",
      startDate: "",
      endDate: "",
      observedAt: "",
      followUpComplete: null,
    });
    const reversed = validateConversionContext({
      ...validContext,
      startDate: "2026-07-02",
      endDate: "2026-07-01",
      observedAt: "2026-06-30",
    });

    expect(missing.valid).toBe(false);
    expect(missing.issues.map((issue) => issue.code)).toEqual(
      expect.arrayContaining([
        "missing-start-date",
        "missing-end-date",
        "missing-observation-date",
        "missing-follow-up-status",
      ]),
    );
    expect(reversed.issues.map((issue) => issue.code)).toEqual(
      expect.arrayContaining(["end-before-start", "observation-before-end"]),
    );
    expect(validateConversionContext(validContext)).toEqual({
      valid: true,
      issues: [],
    });
  });

  it("copies unknown volumes without turning them into zero", () => {
    const volumes = { ...example, uniqueRequests: null, sales: null };
    const summary = formatConversionReconciliationSummary(
      validContext,
      volumes,
    );

    expect(summary).toContain("Demandes uniques : inconnu");
    expect(summary).toContain("Ventes conclues : inconnu");
    expect(summary).toContain("Premier passage non vérifiable");
    expect(summary).toContain("essais internes");
    expect(summary).not.toContain("cohorte");
    expect(summary).not.toContain("périmètre");
  });
});

describe("individual conversion case sheet", () => {
  it("formats dated evidence, separate identifiers and the next action", () => {
    const validation = validateConversionCaseSheet(caseSheet);
    const output = formatConversionCaseSheet(caseSheet);

    expect(validation).toEqual({ valid: true, issues: [] });
    expect(output).toContain("Référence interne (case_id) : DOSSIER-2026-001");
    expect(output).toContain("Événements envoyés — date : 2026-07-01");
    expect(output).toContain("Définition de la vente : Acompte encaissé");
    expect(output).toContain(
      "Ventes conclues — date : 2026-07-05 · preuve : Acompte PAY-001",
    );
    expect(output).toContain(
      "Référence interne vers l’identifiant publicitaire : REF-IDPUB-001",
    );
    expect(output).toContain("Référence propre à l’import : IMPORT-2026-001");
    expect(output).toContain(
      "Envoi du lot — état : Confirmé · date : 2026-07-06 · preuve : Lot LOT-001",
    );
    expect(output).toContain("Acceptation par Google Ads — état : Confirmé");
    expect(output).toContain(
      "Correspondance trouvée par Google — état : Confirmé",
    );
    expect(output).toContain("Attribution à la campagne — état : Confirmé");
    expect(output).toContain("Visibilité dans le rapport — état : Confirmé");
    expect(output).toContain("MARGE DU DOSSIER — HORS DES SIX VOLUMES");
    expect(output).toContain("Statut de la marge : Réelle");
    expect(output).toContain("Valeur de marge : 1 250 €");
    expect(output).toContain("Prochaine action : Vérifier la présence");
    expect(output).toContain("SANS COORDONNÉE CLIENT");
  });

  it("refuses an unusable or undated empty sheet", () => {
    const empty: ConversionCaseSheet = {
      caseId: "",
      responsibleRole: "",
      saleDefinition: "",
      advertisingId: "",
      importReference: "",
      importChecks: {
        batchSent: { status: "confirmed", date: "", evidence: "" },
        googleAccepted: { status: "unknown", date: "", evidence: "" },
        googleMatched: { status: "unknown", date: "", evidence: "" },
        campaignAttributed: { status: "unknown", date: "", evidence: "" },
        reportVisible: { status: "unknown", date: "", evidence: "" },
      },
      margin: {
        status: "unknown",
        date: "",
        formula: "",
        value: null,
        evidence: "",
      },
      nextAction: "",
      stages: Object.fromEntries(
        [
          "eventsSent",
          "requestsReceived",
          "uniqueRequests",
          "qualifiedRequests",
          "quotes",
          "sales",
        ].map((id) => [id, { date: "", evidence: "" }]),
      ) as ConversionCaseSheet["stages"],
    };
    const validation = validateConversionCaseSheet(empty);

    expect(validation.valid).toBe(false);
    expect(validation.issues.map((issue) => issue.field)).toEqual(
      expect.arrayContaining([
        "caseId",
        "responsibleRole",
        "saleDefinition",
        "nextAction",
        "stage",
        "identifier",
      ]),
    );
  });

  it("refuses an invalid stage date", () => {
    const validation = validateConversionCaseSheet({
      ...caseSheet,
      stages: {
        ...caseSheet.stages,
        quotes: { date: "2026-02-31", evidence: "Devis DV-001" },
      },
    });

    expect(validation.valid).toBe(false);
    expect(validation.issues).toContainEqual(
      expect.objectContaining({ field: "stage", stageId: "quotes" }),
    );
  });

  it("requires a date and its proof together for every documented step", () => {
    const validation = validateConversionCaseSheet({
      ...caseSheet,
      stages: {
        ...caseSheet.stages,
        quotes: { date: "2026-07-04", evidence: "" },
      },
    });

    expect(validation.valid).toBe(false);
    expect(validation.issues).toContainEqual(
      expect.objectContaining({ field: "stage", stageId: "quotes" }),
    );
  });

  it("checks stage chronology across unknown intermediate steps", () => {
    const validation = validateConversionCaseSheet({
      ...caseSheet,
      stages: {
        ...caseSheet.stages,
        eventsSent: { date: "2026-07-05", evidence: "Journal EVT-001" },
        requestsReceived: { date: "", evidence: "" },
        uniqueRequests: { date: "2026-07-04", evidence: "Contrôle D-001" },
      },
    });

    expect(validation.valid).toBe(false);
    expect(validation.issues).toContainEqual(
      expect.objectContaining({
        field: "stage",
        stageId: "uniqueRequests",
        message: expect.stringContaining("dernière date connue"),
      }),
    );
  });

  it("keeps an unknown margin explicit and outside the six volumes", () => {
    const sheet = {
      ...caseSheet,
      margin: {
        status: "unknown" as const,
        date: "",
        formula: "",
        value: null,
        evidence: "",
      },
    };
    const validation = validateConversionCaseSheet(sheet);
    const output = formatConversionCaseSheet(sheet);

    expect(validation.valid).toBe(true);
    expect(output).toContain("Statut de la marge : Inconnue");
    expect(output).toContain("Date de la marge : inconnue");
    expect(output).toContain("Formule de marge : inconnue");
    expect(output).toContain("Valeur de marge : inconnue");
    expect(output).toContain("HORS DES SIX VOLUMES");
  });

  it.each(["estimated", "actual"] as const)(
    "requires every margin proof when its status is %s",
    (status) => {
      const validation = validateConversionCaseSheet({
        ...caseSheet,
        margin: {
          status,
          date: "",
          formula: "",
          value: null,
          evidence: "",
        },
      });

      expect(validation.valid).toBe(false);
      expect(
        validation.issues.filter((issue) => issue.field === "margin"),
      ).toHaveLength(4);
    },
  );

  it("accepts a documented zero or negative margin", () => {
    expect(
      validateConversionCaseSheet({
        ...caseSheet,
        margin: { ...caseSheet.margin, value: 0 },
      }).valid,
    ).toBe(true);
    expect(
      validateConversionCaseSheet({
        ...caseSheet,
        margin: { ...caseSheet.margin, value: -250 },
      }).valid,
    ).toBe(true);
  });

  it("rejects a confirmed downstream import check after a certain upstream failure", () => {
    const validation = validateConversionCaseSheet({
      ...caseSheet,
      importChecks: {
        batchSent: caseSheet.importChecks.batchSent,
        googleAccepted: {
          status: "failed",
          date: "2026-07-07",
          evidence: "Rejet ACC-001",
        },
        googleMatched: caseSheet.importChecks.googleMatched,
        campaignAttributed: { status: "unknown", date: "", evidence: "" },
        reportVisible: { status: "unknown", date: "", evidence: "" },
      },
    });

    expect(validation.valid).toBe(false);
    expect(validation.issues).toContainEqual(
      expect.objectContaining({
        field: "importCheck",
        importCheckId: "googleMatched",
      }),
    );
  });

  it("keeps an earlier unknown visible when a later import control is proven", () => {
    const sheet = {
      ...caseSheet,
      importChecks: {
        ...caseSheet.importChecks,
        googleMatched: { status: "unknown" as const, date: "", evidence: "" },
      },
    };
    const validation = validateConversionCaseSheet(sheet);
    const output = formatConversionCaseSheet(sheet);

    expect(validation.valid).toBe(true);
    expect(output).toContain(
      "Correspondance trouvée par Google — état : Inconnu",
    );
    expect(output).toContain("Passage non prouvé");
  });

  it("rejects import controls whose dates run backwards", () => {
    const validation = validateConversionCaseSheet({
      ...caseSheet,
      importChecks: {
        ...caseSheet.importChecks,
        googleAccepted: {
          ...caseSheet.importChecks.googleAccepted,
          date: "2026-07-05",
        },
      },
    });

    expect(validation.valid).toBe(false);
    expect(validation.issues).toContainEqual(
      expect.objectContaining({
        field: "importCheck",
        importCheckId: "googleAccepted",
        message: expect.stringContaining("précède celle du contrôle antérieur"),
      }),
    );
  });

  it("never accepts a confirmed import control without its own date and proof", () => {
    const validation = validateConversionCaseSheet({
      ...caseSheet,
      importChecks: {
        ...caseSheet.importChecks,
        googleAccepted: {
          status: "confirmed",
          date: "",
          evidence: "",
        },
      },
    });

    expect(validation.valid).toBe(false);
    expect(
      validation.issues.filter(
        (issue) => issue.importCheckId === "googleAccepted",
      ),
    ).toHaveLength(2);
    expect(validation.issues.map((issue) => issue.message).join(" ")).toContain(
      "preuve ou une référence propre",
    );
  });

  it("records treatment and rejection without pretending that later checks passed", () => {
    const sheet = {
      ...caseSheet,
      importChecks: {
        batchSent: caseSheet.importChecks.batchSent,
        googleAccepted: {
          status: "failed" as const,
          date: "2026-07-07",
          evidence: "Rapport de rejet REJ-001",
        },
        googleMatched: { status: "unknown" as const, date: "", evidence: "" },
        campaignAttributed: {
          status: "unknown" as const,
          date: "",
          evidence: "",
        },
        reportVisible: {
          status: "unknown" as const,
          date: "",
          evidence: "",
        },
      },
    };
    const validation = validateConversionCaseSheet(sheet);
    const output = formatConversionCaseSheet(sheet);

    expect(validation.valid).toBe(true);
    expect(output).toContain(
      "Acceptation par Google Ads — état : Échec, rejeté ou non confirmé",
    );
    expect(output).toContain(
      "Correspondance trouvée par Google — état : Inconnu",
    );
  });

  it("requires a documented sale before an actual margin", () => {
    const validation = validateConversionCaseSheet({
      ...caseSheet,
      stages: {
        ...caseSheet.stages,
        sales: { date: "", evidence: "" },
      },
    });

    expect(validation.valid).toBe(false);
    expect(validation.issues).toContainEqual(
      expect.objectContaining({
        field: "margin",
        message: expect.stringContaining("exige d’abord une vente"),
      }),
    );
  });

  it("rejects an actual margin dated before the sale", () => {
    const validation = validateConversionCaseSheet({
      ...caseSheet,
      margin: { ...caseSheet.margin, date: "2026-07-04" },
    });

    expect(validation.valid).toBe(false);
    expect(validation.issues).toContainEqual(
      expect.objectContaining({
        field: "margin",
        message: expect.stringContaining("ne peut pas précéder"),
      }),
    );
  });
});
