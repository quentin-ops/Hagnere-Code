import { describe, expect, it } from "vitest";
import { createEmptySiteAidDecisionInput } from "@/lib/site-aid-decision";
import {
  SITE_AID_DRAFT_KIND,
  SITE_AID_DRAFT_MAX_APPLICATION_CRITERIA,
  SITE_AID_DRAFT_MAX_APPLICATION_DOCUMENTS,
  SITE_AID_DRAFT_MAX_BYTES,
  SITE_AID_DRAFT_MAX_QUOTE_LINES,
  SITE_AID_DRAFT_MAX_REGISTER_ENTRIES,
  SITE_AID_DRAFT_MAX_SUBMISSION_REFERENCE_LENGTH,
  SITE_AID_DRAFT_R23_VERSION,
  SITE_AID_DRAFT_R24_VERSION,
  SITE_AID_DRAFT_R25_VERSION,
  SITE_AID_DRAFT_R26_VERSION,
  SITE_AID_DRAFT_R27_VERSION,
  SITE_AID_DRAFT_R28_VERSION,
  SITE_AID_DRAFT_STEP_IDS,
  SITE_AID_DRAFT_VERSION,
  SiteAidDraftError,
  createEmptySiteAidApplicationPreparation,
  createSiteAidDraftJson,
  parseSiteAidDraftJson,
  siteAidDraftFilename,
  type SiteAidApplicationPreparation,
} from "@/lib/site-aid-draft";
import {
  SITE_AID_PREDIAGNOSIS_DEFINITIONS,
  createEmptySiteAidPreDiagnosis,
  createSiteAidPreDiagnosisTransfer,
} from "@/lib/site-aid-prediagnosis";

function completeDraftInput() {
  const input = createEmptySiteAidDecisionInput();
  input.profile.reference = "Projet sensible — Été 2026";
  input.profile.verificationDate = "2026-07-26";
  input.profile.territory = "Bretagne";
  input.profile.deMinimisEuTerritorialStatus = "eu-law-applicable";
  input.profile.deMinimisEuTerritorialEvidence =
    "Autorité régionale, réponse TERR-2026-04 du 26/07/2026.";
  input.profile.deMinimisEuTerritorialEvidenceDate = "2026-07-26";
  input.quoteLines = [
    {
      label: "Conception",
      amountExVat: 6_000,
      vatRatePercent: 20,
      deductibleVatFraction: 0.5,
      eligibility: "yes",
      evidence: "Devis Q-1",
    },
    {
      label: "Hébergement",
      amountExVat: 240,
      vatRatePercent: 20,
      deductibleVatFraction: "yes",
      eligibility: "unknown",
      evidence: "",
    },
  ];
  input.aid.centralRegisterStatus = "pending";
  input.aid.centralRegisterReference = "Dépôt CR-2026-01";
  input.aid.deMinimisFisheryFiscalYearStartDate = "2026-01-01";
  input.aid.deMinimisFisheryPreviousFiscalYearStartDate = "2025-01-01";
  input.aid.deMinimisFisherySecondPreviousFiscalYearStartDate = "2024-01-01";
  input.aid.deMinimisFisheryCurrentFiscalYearEndDate = "2026-12-31";
  input.aid.prospectiveDeMinimisAidValueAmount = 1_850;
  input.aid.prospectiveDeMinimisAidValueEvidence =
    "Calcul ESB communiqué par l’autorité.";
  input.aidRegister = [
    {
      authority: "Région",
      scheme: "Aide numérique",
      legalBasisStatus: "de-minimis",
      regime: "2023/2831",
      nonDeMinimisLegalBasis: "",
      nonDeMinimisEvidenceReference: "",
      memberState: "France",
      singleUndertakingScope: "Groupe Exemple",
      similarUndertakingKeysDistinct: "unknown",
      similarUndertakingKeysEvidence: "",
      sgeiEntrustmentVerified: "unknown",
      sgeiEntrustmentEvidence: "",
      sgeiServiceIdentity: "",
      sgeiSameServiceCompensationPresent: "unknown",
      sgeiCompensationEvidence: "",
      sgeiRelationToCurrentService: "no",
      sgeiRelationToCurrentServiceEvidence: "Mandat distinct SIEG-2025-02",
      amount: 1_200,
      legalGrantDate: "2025-10-02",
      centralRegisterStatus: "registered",
      centralRegisterReference: "CR-FR-42",
      expenses: "Matériel",
      sameBaseOrInvoice: "no",
    },
  ];
  return input;
}

function completeApplication(): SiteAidApplicationPreparation {
  return {
    awardMode: "selection",
    funderObjectives:
      "Revitaliser le commerce local et améliorer l’accès numérique.",
    selectionCriteria:
      "Impact territorial, maturité du projet et rapport coût/effet.",
    submissionChannel: "Portail régional — espace candidat",
    submissionStatus: "under-review",
    submissionDate: "2026-09-29",
    submissionReceiptReference: "Accusé AR-2026-0042",
    submittedPackageMatchesPreparedPackage: "yes",
    deadlineStatus: "exact-date",
    deadline: "2026-09-30",
    deadlineTime: "17:00",
    deadlineTimeZone: "Europe/Paris",
    deadlineOfficialReference: "Règlement, article 8.",
    deadlineVerificationDate: "2026-07-26",
    deadlineEvaluationInstant: "2026-07-26T10:15:00.000Z",
    deadlineEvaluationTimeZone: "Europe/Paris",
    preparationTimeHours: 12.5,
    deliverables: "Site livré et procès-verbal de recette.",
    expectedResults: "Demandes qualifiées mesurées.",
    schedule: "Cadrage, réalisation, recette.",
    budgetJustification: "Coûts reliés aux livrables.",
    criteria: [
      {
        publishedCriterion: "Impact territorial",
        projectResponse: "Le projet répond au besoin décrit.",
        evidence: "Étude interne à confirmer",
        owner: "Direction",
        wordLimit: 250,
      },
    ],
    finalReviewer: "Direction financière",
    finalValidationStatus: "yes",
    documents: [
      {
        label: "Devis signé",
        status: "ready",
        owner: "Direction",
        format: "PDF",
        signatureStatus: "signed",
        deadline: "2026-09-20",
        notApplicableJustification: "",
      },
      {
        label: "Attestation fiscale",
        status: "to-obtain",
        owner: "Comptabilité",
        format: "PDF officiel",
        signatureStatus: "not-required",
        deadline: "2026-09-15",
        notApplicableJustification: "",
      },
    ],
  };
}

function rawEnvelope() {
  return JSON.parse(
    createSiteAidDraftJson(
      completeDraftInput(),
      completeApplication(),
      "history",
      "2026-07-26T10:15:30.000Z",
    ),
  ) as Record<string, unknown>;
}

function removeR27Fields(envelope: Record<string, unknown>) {
  const input = envelope.input as {
    profile: Record<string, unknown>;
    aid: Record<string, unknown>;
  };
  delete input.profile.deMinimisEuTerritorialStatus;
  delete input.profile.deMinimisEuTerritorialEvidence;
  delete input.profile.deMinimisEuTerritorialEvidenceDate;
  delete input.aid.deMinimisFisheryPreviousFiscalYearStartDate;
  delete input.aid.deMinimisFisherySecondPreviousFiscalYearStartDate;
  delete input.aid.deMinimisFisheryCurrentFiscalYearEndDate;
}

function removeR26Fields(envelope: Record<string, unknown>) {
  const aid = (envelope.input as { aid: Record<string, unknown> }).aid;
  delete aid.deMinimisFisheryFiscalYearStartDate;
  delete aid.prospectiveDeMinimisAidValueAmount;
  delete aid.prospectiveDeMinimisAidValueEvidence;
}

function removeR28ApplicationFields(envelope: Record<string, unknown>) {
  const application = envelope.application as Record<string, unknown>;
  delete application.submissionStatus;
  delete application.submissionDate;
  delete application.submissionReceiptReference;
  delete application.submittedPackageMatchesPreparedPackage;
}

function applicationWithNeutralSubmissionTracking(): SiteAidApplicationPreparation {
  return {
    ...completeApplication(),
    submissionStatus: "unknown",
    submissionDate: "",
    submissionReceiptReference: "",
    submittedPackageMatchesPreparedPackage: "unknown",
  };
}

describe("site-aid-draft", () => {
  it("round-trips every known field, dynamic line and active step", () => {
    const input = completeDraftInput();
    const application = completeApplication();
    const json = createSiteAidDraftJson(
      input,
      application,
      "history",
      "2026-07-26T10:15:30.000Z",
    );

    expect(JSON.parse(json)).toMatchObject({
      kind: SITE_AID_DRAFT_KIND,
      version: SITE_AID_DRAFT_VERSION,
      exportedAt: "2026-07-26T10:15:30.000Z",
      activeStepId: "history",
      application,
    });
    expect(parseSiteAidDraftJson(json)).toEqual({
      activeStepId: "history",
      exportedAt: "2026-07-26T10:15:30.000Z",
      input,
      application,
      prediagnosis: createEmptySiteAidPreDiagnosis(),
    });
    expect(SITE_AID_DRAFT_VERSION).toBe("site-aid-draft-r29-2026-07-26");
  });

  it.each(SITE_AID_DRAFT_STEP_IDS)(
    "round-trips the R29 active step %s",
    (activeStepId) => {
      const json = createSiteAidDraftJson(
        completeDraftInput(),
        completeApplication(),
        activeStepId,
        "2026-07-26T10:15:30.000Z",
      );
      expect(parseSiteAidDraftJson(json).activeStepId).toBe(activeStepId);
    },
  );

  it("reconstructs optional central-register fields instead of spreading unknown data", () => {
    const envelope = rawEnvelope();
    const input = envelope.input as {
      aid: Record<string, unknown>;
      aidRegister: Array<Record<string, unknown>>;
    };
    delete input.aid.centralRegisterStatus;
    delete input.aid.centralRegisterReference;
    delete input.aidRegister[0].centralRegisterStatus;
    delete input.aidRegister[0].centralRegisterReference;

    const parsed = parseSiteAidDraftJson(JSON.stringify(envelope));

    expect(parsed.input.aid.centralRegisterStatus).toBe("unknown");
    expect(parsed.input.aid.centralRegisterReference).toBe("");
    expect(parsed.input.aidRegister[0].centralRegisterStatus).toBe("unknown");
    expect(parsed.input.aidRegister[0].centralRegisterReference).toBe("");
  });

  it("migrates a strict R23 draft without inventing application facts", () => {
    const envelope = rawEnvelope();
    envelope.version = SITE_AID_DRAFT_R23_VERSION;
    delete envelope.application;
    delete envelope.prediagnosis;
    envelope.activeStepId = "review";
    removeR27Fields(envelope);
    removeR26Fields(envelope);

    const parsed = parseSiteAidDraftJson(JSON.stringify(envelope));

    const expectedInput = completeDraftInput();
    expectedInput.aid.deMinimisFisheryFiscalYearStartDate = "";
    expectedInput.aid.deMinimisFisheryPreviousFiscalYearStartDate = "";
    expectedInput.aid.deMinimisFisherySecondPreviousFiscalYearStartDate = "";
    expectedInput.aid.deMinimisFisheryCurrentFiscalYearEndDate = "";
    expectedInput.aid.prospectiveDeMinimisAidValueAmount = undefined;
    expectedInput.aid.prospectiveDeMinimisAidValueEvidence = "";
    expectedInput.profile.deMinimisEuTerritorialStatus = "unknown";
    expectedInput.profile.deMinimisEuTerritorialEvidence = "";
    expectedInput.profile.deMinimisEuTerritorialEvidenceDate = "";
    expect(parsed.input).toEqual(expectedInput);
    expect(parsed.activeStepId).toBe("review");
    expect(parsed.application).toEqual(
      createEmptySiteAidApplicationPreparation(),
    );
    expect(parsed.prediagnosis).toEqual(createEmptySiteAidPreDiagnosis());
    expect(parsed.migratedFromVersion).toBe(SITE_AID_DRAFT_R23_VERSION);
  });

  it("migrates a strict R24 draft to neutral later fields without inventing facts", () => {
    const envelope = rawEnvelope();
    envelope.version = SITE_AID_DRAFT_R24_VERSION;
    delete envelope.prediagnosis;
    removeR27Fields(envelope);
    removeR26Fields(envelope);
    removeR28ApplicationFields(envelope);
    const application = envelope.application as Record<string, unknown>;
    delete application.deadlineStatus;
    delete application.deadlineTime;
    delete application.deadlineTimeZone;
    delete application.deadlineOfficialReference;
    delete application.deadlineVerificationDate;
    delete application.deadlineEvaluationInstant;
    delete application.deadlineEvaluationTimeZone;
    delete application.deliverables;
    delete application.expectedResults;
    delete application.schedule;
    delete application.budgetJustification;
    delete application.criteria;
    for (const document of application.documents as Array<
      Record<string, unknown>
    >) {
      delete document.notApplicableJustification;
    }

    const parsed = parseSiteAidDraftJson(JSON.stringify(envelope));

    expect(parsed.migratedFromVersion).toBe(SITE_AID_DRAFT_R24_VERSION);
    expect(parsed.prediagnosis).toEqual(createEmptySiteAidPreDiagnosis());
    expect(parsed.application.deadlineTime).toBe("");
    expect(parsed.application.deadlineStatus).toBe("exact-date");
    expect(parsed.application.deadlineEvaluationInstant).toBe("");
    expect(parsed.application.criteria).toEqual([]);
    expect(parsed.input.aid.deMinimisFisheryFiscalYearStartDate).toBe("");
    expect(parsed.input.aid.prospectiveDeMinimisAidValueAmount).toBeUndefined();
    expect(parsed.input.aid.prospectiveDeMinimisAidValueEvidence).toBe("");
    expect(parsed.input.profile.deMinimisEuTerritorialStatus).toBe("unknown");
    expect(parsed.input.profile.deMinimisEuTerritorialEvidence).toBe("");
    expect(parsed.input.profile.deMinimisEuTerritorialEvidenceDate).toBe("");
    expect(parsed.input.aid.deMinimisFisheryPreviousFiscalYearStartDate).toBe(
      "",
    );
    expect(
      parsed.input.aid.deMinimisFisherySecondPreviousFiscalYearStartDate,
    ).toBe("");
    expect(parsed.input.aid.deMinimisFisheryCurrentFiscalYearEndDate).toBe("");
    expect(
      parsed.application.documents.every(
        (document) => document.notApplicableJustification === "",
      ),
    ).toBe(true);
  });

  it("migrates a strict R25 draft while preserving its transferred prediagnosis and criteria", () => {
    const envelope = rawEnvelope();
    envelope.version = SITE_AID_DRAFT_R25_VERSION;
    const transferredPrediagnosis = createSiteAidPreDiagnosisTransfer(
      Object.fromEntries(
        SITE_AID_PREDIAGNOSIS_DEFINITIONS.map((definition) => [
          definition.id,
          "documented" as const,
        ]),
      ),
      Object.fromEntries(
        SITE_AID_PREDIAGNOSIS_DEFINITIONS.map((definition) => [
          definition.id,
          `Pièce ${definition.id}`,
        ]),
      ),
      "2026-07-26T10:00:00.000Z",
    );
    envelope.prediagnosis = transferredPrediagnosis;
    removeR27Fields(envelope);
    const application = envelope.application as Record<string, unknown>;
    delete application.deadlineStatus;
    delete application.deadlineOfficialReference;
    delete application.deadlineVerificationDate;
    delete application.deadlineEvaluationInstant;
    delete application.deadlineEvaluationTimeZone;
    removeR28ApplicationFields(envelope);
    removeR26Fields(envelope);

    const parsed = parseSiteAidDraftJson(JSON.stringify(envelope));

    expect(parsed.migratedFromVersion).toBe(SITE_AID_DRAFT_R25_VERSION);
    expect(parsed.application.deadlineStatus).toBe("exact-date");
    expect(parsed.application.deadlineEvaluationInstant).toBe("");
    expect(parsed.application.criteria).toEqual(completeApplication().criteria);
    expect(parsed.input.aid.deMinimisFisheryFiscalYearStartDate).toBe("");
    expect(parsed.input.aid.prospectiveDeMinimisAidValueAmount).toBeUndefined();
    expect(parsed.input.aid.prospectiveDeMinimisAidValueEvidence).toBe("");
    expect(parsed.input.profile.deMinimisEuTerritorialStatus).toBe("unknown");
    expect(parsed.input.profile.deMinimisEuTerritorialEvidence).toBe("");
    expect(parsed.input.profile.deMinimisEuTerritorialEvidenceDate).toBe("");
    expect(parsed.input.aid.deMinimisFisheryPreviousFiscalYearStartDate).toBe(
      "",
    );
    expect(
      parsed.input.aid.deMinimisFisherySecondPreviousFiscalYearStartDate,
    ).toBe("");
    expect(parsed.input.aid.deMinimisFisheryCurrentFiscalYearEndDate).toBe("");
    expect(parsed.prediagnosis).toEqual(transferredPrediagnosis);
  });

  it("migrates a strict R28 draft without losing its territorial or submission fields", () => {
    const envelope = rawEnvelope();
    envelope.version = SITE_AID_DRAFT_R28_VERSION;

    const parsed = parseSiteAidDraftJson(JSON.stringify(envelope));

    expect(parsed.migratedFromVersion).toBe(SITE_AID_DRAFT_R28_VERSION);
    expect(parsed.input).toEqual(completeDraftInput());
    expect(parsed.application).toEqual(completeApplication());
    expect(parsed.prediagnosis).toEqual(createEmptySiteAidPreDiagnosis());
  });

  it("migrates a strict R27 draft to neutral submission tracking without inventing a deposit", () => {
    const envelope = rawEnvelope();
    envelope.version = SITE_AID_DRAFT_R27_VERSION;
    removeR28ApplicationFields(envelope);
    delete (envelope.input as { profile: Record<string, unknown> }).profile
      .deMinimisEuTerritorialEvidenceDate;

    const parsed = parseSiteAidDraftJson(JSON.stringify(envelope));

    expect(parsed.migratedFromVersion).toBe(SITE_AID_DRAFT_R27_VERSION);
    expect(parsed.application).toEqual(
      applicationWithNeutralSubmissionTracking(),
    );
    expect(parsed.application.submissionStatus).toBe("unknown");
    expect(parsed.application.submissionDate).toBe("");
    expect(parsed.application.submissionReceiptReference).toBe("");
    expect(parsed.application.submittedPackageMatchesPreparedPackage).toBe(
      "unknown",
    );
    expect(parsed.input.profile.deMinimisEuTerritorialStatus).toBe(
      "eu-law-applicable",
    );
    expect(parsed.input.profile.deMinimisEuTerritorialEvidenceDate).toBe("");
    expect(parsed.prediagnosis).toEqual(createEmptySiteAidPreDiagnosis());
  });

  it("migrates R26 without erasing its current fishery boundary or prospective pair", () => {
    const envelope = rawEnvelope();
    envelope.version = SITE_AID_DRAFT_R26_VERSION;
    removeR27Fields(envelope);
    removeR28ApplicationFields(envelope);

    const parsed = parseSiteAidDraftJson(JSON.stringify(envelope));

    expect(parsed.migratedFromVersion).toBe(SITE_AID_DRAFT_R26_VERSION);
    expect(parsed.input.aid.deMinimisFisheryFiscalYearStartDate).toBe(
      "2026-01-01",
    );
    expect(parsed.input.aid.prospectiveDeMinimisAidValueAmount).toBe(1_850);
    expect(parsed.input.aid.prospectiveDeMinimisAidValueEvidence).toBe(
      "Calcul ESB communiqué par l’autorité.",
    );
    expect(parsed.input.profile.deMinimisEuTerritorialStatus).toBe("unknown");
    expect(parsed.input.profile.deMinimisEuTerritorialEvidence).toBe("");
    expect(parsed.input.profile.deMinimisEuTerritorialEvidenceDate).toBe("");
    expect(parsed.input.aid.deMinimisFisheryPreviousFiscalYearStartDate).toBe(
      "",
    );
    expect(
      parsed.input.aid.deMinimisFisherySecondPreviousFiscalYearStartDate,
    ).toBe("");
    expect(parsed.input.aid.deMinimisFisheryCurrentFiscalYearEndDate).toBe("");
    expect(parsed.application).toEqual(
      applicationWithNeutralSubmissionTracking(),
    );
    expect(parsed.prediagnosis).toEqual(createEmptySiteAidPreDiagnosis());
  });

  it("rejects R26-only precontrol fields when an envelope claims an older version", () => {
    const envelope = rawEnvelope();
    envelope.version = SITE_AID_DRAFT_R25_VERSION;
    removeR27Fields(envelope);
    const application = envelope.application as Record<string, unknown>;
    delete application.deadlineStatus;
    delete application.deadlineOfficialReference;
    delete application.deadlineVerificationDate;
    delete application.deadlineEvaluationInstant;
    delete application.deadlineEvaluationTimeZone;
    removeR28ApplicationFields(envelope);

    expect(() => parseSiteAidDraftJson(JSON.stringify(envelope))).toThrowError(
      expect.objectContaining({ code: "invalid-format" }),
    );
  });

  it("rejects R28 submission fields when an envelope claims R27", () => {
    const envelope = rawEnvelope();
    envelope.version = SITE_AID_DRAFT_R27_VERSION;

    expect(() => parseSiteAidDraftJson(JSON.stringify(envelope))).toThrowError(
      expect.objectContaining({ code: "invalid-format" }),
    );
  });

  it("rejects malformed JSON, another kind and unsupported versions", () => {
    expect(() => parseSiteAidDraftJson("{")).toThrowError(
      expect.objectContaining({ code: "invalid-json" }),
    );

    const wrongKind = rawEnvelope();
    wrongKind.kind = "another-tool";
    expect(() => parseSiteAidDraftJson(JSON.stringify(wrongKind))).toThrowError(
      expect.objectContaining({ code: "invalid-format" }),
    );

    const wrongVersion = rawEnvelope();
    wrongVersion.version = "site-aid-draft-r99";
    expect(() =>
      parseSiteAidDraftJson(JSON.stringify(wrongVersion)),
    ).toThrowError(expect.objectContaining({ code: "unsupported-version" }));

    const r22Version = rawEnvelope();
    r22Version.version = "site-aid-draft-r22-2026-07-26";
    expect(() =>
      parseSiteAidDraftJson(JSON.stringify(r22Version)),
    ).toThrowError(expect.objectContaining({ code: "unsupported-version" }));
  });

  it("rejects unknown keys, prototype-pollution keys and invalid enum values", () => {
    const unknownKey = rawEnvelope();
    (unknownKey.input as Record<string, unknown>).verdict = "received";
    expect(() =>
      parseSiteAidDraftJson(JSON.stringify(unknownKey)),
    ).toThrowError(expect.objectContaining({ code: "invalid-format" }));

    const pollutedEnvelope = rawEnvelope();
    const pollutedProfile = (
      pollutedEnvelope.input as { profile: Record<string, unknown> }
    ).profile;
    Object.defineProperty(pollutedProfile, "__proto__", {
      value: { x: true },
      enumerable: true,
      configurable: true,
    });
    const polluted = JSON.stringify(pollutedEnvelope);
    expect(() => parseSiteAidDraftJson(polluted)).toThrowError(
      expect.objectContaining({ code: "invalid-format" }),
    );
    expect(({} as { x?: boolean }).x).toBeUndefined();

    const invalidEnum = rawEnvelope();
    (
      invalidEnum.input as { gates: Record<string, unknown> }
    ).gates.beneficiary = "probably";
    expect(() =>
      parseSiteAidDraftJson(JSON.stringify(invalidEnum)),
    ).toThrowError(expect.objectContaining({ code: "invalid-format" }));

    const invalidApplicationEnum = rawEnvelope();
    (invalidApplicationEnum.application as Record<string, unknown>).awardMode =
      "automatic";
    expect(() =>
      parseSiteAidDraftJson(JSON.stringify(invalidApplicationEnum)),
    ).toThrowError(expect.objectContaining({ code: "invalid-format" }));

    const invalidDeadlineStatus = rawEnvelope();
    (
      invalidDeadlineStatus.application as Record<string, unknown>
    ).deadlineStatus = "rolling";
    expect(() =>
      parseSiteAidDraftJson(JSON.stringify(invalidDeadlineStatus)),
    ).toThrowError(expect.objectContaining({ code: "invalid-format" }));

    const invalidSubmissionStatus = rawEnvelope();
    (
      invalidSubmissionStatus.application as Record<string, unknown>
    ).submissionStatus = "maybe-submitted";
    expect(() =>
      parseSiteAidDraftJson(JSON.stringify(invalidSubmissionStatus)),
    ).toThrowError(expect.objectContaining({ code: "invalid-format" }));

    const invalidPackageMatch = rawEnvelope();
    (
      invalidPackageMatch.application as Record<string, unknown>
    ).submittedPackageMatchesPreparedPackage = "mostly";
    expect(() =>
      parseSiteAidDraftJson(JSON.stringify(invalidPackageMatch)),
    ).toThrowError(expect.objectContaining({ code: "invalid-format" }));

    const unknownDocumentKey = rawEnvelope();
    const firstDocument = (
      unknownDocumentKey.application as {
        documents: Array<Record<string, unknown>>;
      }
    ).documents[0];
    firstDocument.downloadUrl = "https://example.test/document";
    expect(() =>
      parseSiteAidDraftJson(JSON.stringify(unknownDocumentKey)),
    ).toThrowError(expect.objectContaining({ code: "invalid-format" }));

    const unknownCriterionKey = rawEnvelope();
    const firstCriterion = (
      unknownCriterionKey.application as {
        criteria: Array<Record<string, unknown>>;
      }
    ).criteria[0];
    firstCriterion.score = 100;
    expect(() =>
      parseSiteAidDraftJson(JSON.stringify(unknownCriterionKey)),
    ).toThrowError(expect.objectContaining({ code: "invalid-format" }));
  });

  it("rejects non-finite or excessive numeric representations", () => {
    const nullNumber = rawEnvelope();
    (nullNumber.input as { wait: Record<string, unknown> }).wait.months = null;
    expect(() =>
      parseSiteAidDraftJson(JSON.stringify(nullNumber)),
    ).toThrowError(expect.objectContaining({ code: "invalid-format" }));

    const excessiveNumber = rawEnvelope();
    (excessiveNumber.input as { wait: Record<string, unknown> }).wait.months =
      1_000_000_000_001;
    expect(() =>
      parseSiteAidDraftJson(JSON.stringify(excessiveNumber)),
    ).toThrowError(expect.objectContaining({ code: "invalid-format" }));
  });

  it("rejects malformed or oversized submission tracking values", () => {
    const malformedDate = rawEnvelope();
    (malformedDate.application as Record<string, unknown>).submissionDate =
      "2026-02-30";
    expect(() =>
      parseSiteAidDraftJson(JSON.stringify(malformedDate)),
    ).toThrowError(expect.objectContaining({ code: "invalid-format" }));

    const nonStringDate = rawEnvelope();
    (nonStringDate.application as Record<string, unknown>).submissionDate =
      20260929;
    expect(() =>
      parseSiteAidDraftJson(JSON.stringify(nonStringDate)),
    ).toThrowError(expect.objectContaining({ code: "invalid-format" }));

    const oversizedReference = rawEnvelope();
    (
      oversizedReference.application as Record<string, unknown>
    ).submissionReceiptReference = "x".repeat(
      SITE_AID_DRAFT_MAX_SUBMISSION_REFERENCE_LENGTH + 1,
    );
    expect(() =>
      parseSiteAidDraftJson(JSON.stringify(oversizedReference)),
    ).toThrowError(expect.objectContaining({ code: "invalid-format" }));
  });

  it("bounds file size, text, quote lines, register entries, criteria and application documents", () => {
    expect(() =>
      parseSiteAidDraftJson(" ".repeat(SITE_AID_DRAFT_MAX_BYTES + 1)),
    ).toThrowError(expect.objectContaining({ code: "too-large" }));

    const tooManyQuotes = rawEnvelope();
    const input = tooManyQuotes.input as {
      quoteLines: unknown[];
      aidRegister: unknown[];
    };
    input.quoteLines = Array.from(
      { length: SITE_AID_DRAFT_MAX_QUOTE_LINES + 1 },
      () => input.quoteLines[0],
    );
    expect(() =>
      parseSiteAidDraftJson(JSON.stringify(tooManyQuotes)),
    ).toThrowError(expect.objectContaining({ code: "invalid-format" }));

    const tooManyRegisterEntries = rawEnvelope();
    const secondInput = tooManyRegisterEntries.input as {
      aidRegister: unknown[];
    };
    secondInput.aidRegister = Array.from(
      { length: SITE_AID_DRAFT_MAX_REGISTER_ENTRIES + 1 },
      () => secondInput.aidRegister[0],
    );
    expect(() =>
      parseSiteAidDraftJson(JSON.stringify(tooManyRegisterEntries)),
    ).toThrowError(expect.objectContaining({ code: "invalid-format" }));

    const tooManyDocuments = rawEnvelope();
    const application = tooManyDocuments.application as {
      documents: unknown[];
    };
    application.documents = Array.from(
      { length: SITE_AID_DRAFT_MAX_APPLICATION_DOCUMENTS + 1 },
      () => application.documents[0],
    );
    expect(() =>
      parseSiteAidDraftJson(JSON.stringify(tooManyDocuments)),
    ).toThrowError(expect.objectContaining({ code: "invalid-format" }));

    const tooManyCriteria = rawEnvelope();
    const criteriaApplication = tooManyCriteria.application as {
      criteria: unknown[];
    };
    criteriaApplication.criteria = Array.from(
      { length: SITE_AID_DRAFT_MAX_APPLICATION_CRITERIA + 1 },
      () => criteriaApplication.criteria[0],
    );
    expect(() =>
      parseSiteAidDraftJson(JSON.stringify(tooManyCriteria)),
    ).toThrowError(expect.objectContaining({ code: "invalid-format" }));

    const excessiveText = rawEnvelope();
    (excessiveText.application as Record<string, unknown>).funderObjectives =
      "x".repeat(20_001);
    expect(() =>
      parseSiteAidDraftJson(JSON.stringify(excessiveText)),
    ).toThrowError(expect.objectContaining({ code: "invalid-format" }));
  });

  it("requires an explicit UTC timestamp and a recognized active step", () => {
    expect(SITE_AID_DRAFT_STEP_IDS).toEqual([
      "profile",
      "quote",
      "eligibility",
      "legal",
      "payment",
      "treasury",
      "history",
      "application",
      "review",
    ]);
    expect(() =>
      createSiteAidDraftJson(
        completeDraftInput(),
        completeApplication(),
        "review",
        "26/07/2026",
      ),
    ).toThrowError(expect.objectContaining({ code: "invalid-format" }));
    expect(() =>
      createSiteAidDraftJson(
        completeDraftInput(),
        completeApplication(),
        "result" as "review",
        "2026-07-26T10:15:30.000Z",
      ),
    ).toThrowError(expect.objectContaining({ code: "invalid-format" }));

    const invalidStep = rawEnvelope();
    invalidStep.activeStepId = "result";
    expect(() =>
      parseSiteAidDraftJson(JSON.stringify(invalidStep)),
    ).toThrowError(expect.objectContaining({ code: "invalid-format" }));

    for (const formerStepId of ["proof", "cash"]) {
      const formerStep = rawEnvelope();
      formerStep.activeStepId = formerStepId;
      expect(() =>
        parseSiteAidDraftJson(JSON.stringify(formerStep)),
      ).toThrowError(expect.objectContaining({ code: "invalid-format" }));
    }
  });

  it("creates a bounded, accent-free filename", () => {
    expect(
      siteAidDraftFilename("  Projet Été / Bretagne  ", "2026-07-26"),
    ).toBe("brouillon-aide-site-projet-ete-bretagne-2026-07-26.json");
    expect(siteAidDraftFilename("", "date invalide")).toBe(
      "brouillon-aide-site-sans-reference-sans-date.json",
    );
  });

  it("uses a typed error for callers that need an inline import status", () => {
    try {
      parseSiteAidDraftJson("{");
      throw new Error("Le parseur aurait dû échouer");
    } catch (error) {
      expect(error).toBeInstanceOf(SiteAidDraftError);
      expect((error as SiteAidDraftError).code).toBe("invalid-json");
    }
  });
});
