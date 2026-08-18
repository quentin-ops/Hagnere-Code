import type {
  SiteAidBasisScope,
  SiteAidCentralRegisterStatus,
  SiteAidCorporateEventKind,
  SiteAidDecisionInput,
  SiteAidEuTerritorialStatus,
  SiteAidInstrumentKind,
  SiteAidLegalBasisStatus,
  SiteAidPaymentMode,
  SiteAidStage,
  SiteAidTriState,
} from "@/lib/site-aid-decision";
import {
  createEmptySiteAidPreDiagnosis,
  parseSiteAidPreDiagnosis,
  type SiteAidPreDiagnosisTransfer,
} from "@/lib/site-aid-prediagnosis";

export const SITE_AID_DRAFT_KIND = "hagnere-code-site-aid-draft";
export const SITE_AID_DRAFT_VERSION = "site-aid-draft-r29-2026-07-26";
export const SITE_AID_DRAFT_R28_VERSION = "site-aid-draft-r28-2026-07-26";
export const SITE_AID_DRAFT_R27_VERSION = "site-aid-draft-r27-2026-07-26";
export const SITE_AID_DRAFT_R26_VERSION = "site-aid-draft-r26-2026-07-26";
export const SITE_AID_DRAFT_R25_VERSION = "site-aid-draft-r25-2026-07-26";
export const SITE_AID_DRAFT_R24_VERSION = "site-aid-draft-r24-2026-07-26";
export const SITE_AID_DRAFT_R23_VERSION = "site-aid-draft-r23-2026-07-26";
export const SITE_AID_DRAFT_MAX_BYTES = 256 * 1024;
export const SITE_AID_DRAFT_MAX_QUOTE_LINES = 50;
export const SITE_AID_DRAFT_MAX_REGISTER_ENTRIES = 100;
export const SITE_AID_DRAFT_MAX_APPLICATION_DOCUMENTS = 50;
export const SITE_AID_DRAFT_MAX_APPLICATION_CRITERIA = 25;
export const SITE_AID_DRAFT_MAX_SUBMISSION_REFERENCE_LENGTH = 2_000;

const MAX_TEXT_LENGTH = 20_000;
const MAX_ABSOLUTE_NUMBER = 1_000_000_000_000;

export type SiteAidApplicationAwardMode = "unknown" | "right" | "selection";

export type SiteAidApplicationDeadlineStatus =
  "exact-date" | "permanent" | "unpublished";

export type SiteAidApplicationDocumentStatus =
  "unknown" | "to-obtain" | "in-progress" | "ready" | "not-applicable";

export type SiteAidApplicationSignatureStatus =
  "unknown" | "not-required" | "required" | "signed";

export type SiteAidApplicationSubmissionStatus =
  | "unknown"
  | "not-submitted"
  | "submitted"
  | "under-review"
  | "additional-information-requested"
  | "decision-received";

export interface SiteAidApplicationDocument {
  label: string;
  status: SiteAidApplicationDocumentStatus;
  owner: string;
  format: string;
  signatureStatus: SiteAidApplicationSignatureStatus;
  deadline: string;
  notApplicableJustification: string;
}

export interface SiteAidApplicationCriterion {
  publishedCriterion: string;
  projectResponse: string;
  evidence: string;
  owner: string;
  wordLimit?: number;
}

export interface SiteAidApplicationPreparation {
  awardMode: SiteAidApplicationAwardMode;
  funderObjectives: string;
  selectionCriteria: string;
  submissionChannel: string;
  submissionStatus: SiteAidApplicationSubmissionStatus;
  submissionDate: string;
  submissionReceiptReference: string;
  submittedPackageMatchesPreparedPackage: SiteAidTriState;
  deadlineStatus: SiteAidApplicationDeadlineStatus;
  deadline: string;
  deadlineTime: string;
  deadlineTimeZone: string;
  deadlineOfficialReference: string;
  deadlineVerificationDate: string;
  deadlineEvaluationInstant: string;
  deadlineEvaluationTimeZone: string;
  preparationTimeHours?: number;
  deliverables: string;
  expectedResults: string;
  schedule: string;
  budgetJustification: string;
  criteria: SiteAidApplicationCriterion[];
  finalReviewer: string;
  finalValidationStatus: SiteAidTriState;
  documents: SiteAidApplicationDocument[];
}

export const SITE_AID_DRAFT_STEP_IDS = [
  "profile",
  "quote",
  "eligibility",
  "legal",
  "payment",
  "treasury",
  "history",
  "application",
  "review",
] as const;

const SITE_AID_DRAFT_R23_STEP_IDS = [
  "profile",
  "quote",
  "eligibility",
  "legal",
  "payment",
  "treasury",
  "history",
  "review",
] as const;

export type SiteAidDraftStepId = (typeof SITE_AID_DRAFT_STEP_IDS)[number];

export interface ParsedSiteAidDraft {
  activeStepId: SiteAidDraftStepId;
  exportedAt: string;
  input: SiteAidDecisionInput;
  application: SiteAidApplicationPreparation;
  prediagnosis: SiteAidPreDiagnosisTransfer;
  migratedFromVersion?:
    | typeof SITE_AID_DRAFT_R23_VERSION
    | typeof SITE_AID_DRAFT_R24_VERSION
    | typeof SITE_AID_DRAFT_R25_VERSION
    | typeof SITE_AID_DRAFT_R26_VERSION
    | typeof SITE_AID_DRAFT_R27_VERSION
    | typeof SITE_AID_DRAFT_R28_VERSION;
}

export type SiteAidDraftErrorCode =
  "too-large" | "invalid-json" | "invalid-format" | "unsupported-version";

export class SiteAidDraftError extends Error {
  readonly code: SiteAidDraftErrorCode;

  constructor(code: SiteAidDraftErrorCode, message: string) {
    super(message);
    this.name = "SiteAidDraftError";
    this.code = code;
  }
}

type JsonObject = Record<string, unknown>;

function invalidFormat(path: string, expectation: string): never {
  throw new SiteAidDraftError(
    "invalid-format",
    `Brouillon invalide : ${path} doit être ${expectation}.`,
  );
}

function objectAt(value: unknown, path: string): JsonObject {
  if (
    typeof value !== "object" ||
    value === null ||
    Array.isArray(value) ||
    Object.getPrototypeOf(value) !== Object.prototype
  ) {
    return invalidFormat(path, "un objet JSON simple");
  }
  return value as JsonObject;
}

function exactKeys(
  value: JsonObject,
  allowedKeys: readonly string[],
  path: string,
) {
  const allowed = new Set(allowedKeys);
  const unknownKey = Object.keys(value).find((key) => !allowed.has(key));
  if (unknownKey !== undefined) {
    invalidFormat(
      `${path}.${unknownKey}`,
      "un champ reconnu par cette version",
    );
  }
}

function requiredText(value: JsonObject, key: string, path: string): string {
  const candidate = value[key];
  if (typeof candidate !== "string") {
    return invalidFormat(`${path}.${key}`, "un texte");
  }
  if (candidate.length > MAX_TEXT_LENGTH) {
    return invalidFormat(
      `${path}.${key}`,
      `un texte de ${MAX_TEXT_LENGTH} caractères maximum`,
    );
  }
  return candidate;
}

function requiredBoundedText(
  value: JsonObject,
  key: string,
  path: string,
  maxLength: number,
): string {
  const candidate = requiredText(value, key, path);
  if (candidate.length > maxLength) {
    return invalidFormat(
      `${path}.${key}`,
      `un texte de ${maxLength} caractères maximum`,
    );
  }
  return candidate;
}

function requiredIsoDateOrEmpty(
  value: JsonObject,
  key: string,
  path: string,
): string {
  const candidate = requiredText(value, key, path);
  if (candidate === "") return candidate;
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(candidate);
  if (!match) {
    return invalidFormat(
      `${path}.${key}`,
      "une date civile ISO AAAA-MM-JJ valide ou un texte vide",
    );
  }
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const parsed = new Date(Date.UTC(year, month - 1, day));
  if (
    parsed.getUTCFullYear() !== year ||
    parsed.getUTCMonth() !== month - 1 ||
    parsed.getUTCDate() !== day
  ) {
    return invalidFormat(
      `${path}.${key}`,
      "une date civile ISO AAAA-MM-JJ valide ou un texte vide",
    );
  }
  return candidate;
}

function optionalText(
  value: JsonObject,
  key: string,
  path: string,
  fallback = "",
): string {
  if (!(key in value)) return fallback;
  return requiredText(value, key, path);
}

function optionalNumber(
  value: JsonObject,
  key: string,
  path: string,
): number | undefined {
  const candidate = value[key];
  if (candidate === undefined) return undefined;
  if (
    typeof candidate !== "number" ||
    !Number.isFinite(candidate) ||
    Math.abs(candidate) > MAX_ABSOLUTE_NUMBER
  ) {
    return invalidFormat(
      `${path}.${key}`,
      `un nombre fini dont la valeur absolue ne dépasse pas ${MAX_ABSOLUTE_NUMBER}`,
    );
  }
  return candidate;
}

function oneOf<Value extends string>(
  value: unknown,
  allowedValues: readonly Value[],
  path: string,
): Value {
  if (typeof value !== "string" || !allowedValues.includes(value as Value)) {
    return invalidFormat(
      path,
      `l’une des valeurs suivantes : ${allowedValues.join(", ")}`,
    );
  }
  return value as Value;
}

function triState(value: unknown, path: string): SiteAidTriState {
  return oneOf(value, ["yes", "no", "unknown"], path);
}

function legalBasisStatus(
  value: unknown,
  path: string,
): SiteAidLegalBasisStatus {
  return oneOf(value, ["de-minimis", "not-de-minimis", "unknown"], path);
}

function centralRegisterStatus(
  value: unknown,
  path: string,
): SiteAidCentralRegisterStatus {
  return oneOf(
    value,
    ["unknown", "registered", "pending", "not-registered", "not-applicable"],
    path,
  );
}

function euTerritorialStatus(
  value: unknown,
  path: string,
): SiteAidEuTerritorialStatus {
  return oneOf(
    value,
    ["unknown", "eu-law-applicable", "external-review-required"],
    path,
  );
}

function applicationAwardMode(
  value: unknown,
  path: string,
): SiteAidApplicationAwardMode {
  return oneOf(value, ["unknown", "right", "selection"], path);
}

function applicationDeadlineStatus(
  value: unknown,
  path: string,
): SiteAidApplicationDeadlineStatus {
  return oneOf(value, ["exact-date", "permanent", "unpublished"], path);
}

function applicationDocumentStatus(
  value: unknown,
  path: string,
): SiteAidApplicationDocumentStatus {
  return oneOf(
    value,
    ["unknown", "to-obtain", "in-progress", "ready", "not-applicable"],
    path,
  );
}

function applicationSignatureStatus(
  value: unknown,
  path: string,
): SiteAidApplicationSignatureStatus {
  return oneOf(value, ["unknown", "not-required", "required", "signed"], path);
}

function applicationSubmissionStatus(
  value: unknown,
  path: string,
): SiteAidApplicationSubmissionStatus {
  return oneOf(
    value,
    [
      "unknown",
      "not-submitted",
      "submitted",
      "under-review",
      "additional-information-requested",
      "decision-received",
    ],
    path,
  );
}

export function createEmptySiteAidApplicationDocument(): SiteAidApplicationDocument {
  return {
    label: "",
    status: "unknown",
    owner: "",
    format: "",
    signatureStatus: "unknown",
    deadline: "",
    notApplicableJustification: "",
  };
}

export function createEmptySiteAidApplicationCriterion(): SiteAidApplicationCriterion {
  return {
    publishedCriterion: "",
    projectResponse: "",
    evidence: "",
    owner: "",
    wordLimit: undefined,
  };
}

export function createEmptySiteAidApplicationPreparation(): SiteAidApplicationPreparation {
  return {
    awardMode: "unknown",
    funderObjectives: "",
    selectionCriteria: "",
    submissionChannel: "",
    submissionStatus: "unknown",
    submissionDate: "",
    submissionReceiptReference: "",
    submittedPackageMatchesPreparedPackage: "unknown",
    deadlineStatus: "unpublished",
    deadline: "",
    deadlineTime: "",
    deadlineTimeZone: "",
    deadlineOfficialReference: "",
    deadlineVerificationDate: "",
    deadlineEvaluationInstant: "",
    deadlineEvaluationTimeZone: "",
    preparationTimeHours: undefined,
    deliverables: "",
    expectedResults: "",
    schedule: "",
    budgetJustification: "",
    criteria: [],
    finalReviewer: "",
    finalValidationStatus: "unknown",
    documents: [createEmptySiteAidApplicationDocument()],
  };
}

function parseProfile(
  value: unknown,
  legacyBeforeR27 = false,
  legacyBeforeR28 = false,
): SiteAidDecisionInput["profile"] {
  const path = "input.profile";
  const profile = objectAt(value, path);
  exactKeys(
    profile,
    [
      "reference",
      "verificationDate",
      "territory",
      ...(legacyBeforeR27
        ? []
        : ["deMinimisEuTerritorialStatus", "deMinimisEuTerritorialEvidence"]),
      ...(legacyBeforeR28 ? [] : ["deMinimisEuTerritorialEvidenceDate"]),
      "activity",
      "businessAgeMonths",
      "employeeCount",
      "annualRevenueExVat",
      "legalStatus",
      "businessNeed",
      "successIndicator",
      "decisionOwner",
      "deMinimisCorporateEventOccurred",
      "deMinimisCorporateEventKind",
      "deMinimisCorporateEventEvidence",
      "deMinimisCorporateAidHistoryAdjusted",
    ],
    path,
  );
  return {
    reference: requiredText(profile, "reference", path),
    verificationDate: requiredText(profile, "verificationDate", path),
    territory: requiredText(profile, "territory", path),
    deMinimisEuTerritorialStatus: legacyBeforeR27
      ? "unknown"
      : euTerritorialStatus(
          profile.deMinimisEuTerritorialStatus,
          `${path}.deMinimisEuTerritorialStatus`,
        ),
    deMinimisEuTerritorialEvidence: legacyBeforeR27
      ? ""
      : requiredText(profile, "deMinimisEuTerritorialEvidence", path),
    deMinimisEuTerritorialEvidenceDate: legacyBeforeR28
      ? ""
      : requiredText(profile, "deMinimisEuTerritorialEvidenceDate", path),
    activity: requiredText(profile, "activity", path),
    businessAgeMonths: optionalNumber(profile, "businessAgeMonths", path),
    employeeCount: optionalNumber(profile, "employeeCount", path),
    annualRevenueExVat: optionalNumber(profile, "annualRevenueExVat", path),
    legalStatus: requiredText(profile, "legalStatus", path),
    businessNeed: requiredText(profile, "businessNeed", path),
    successIndicator: requiredText(profile, "successIndicator", path),
    decisionOwner: requiredText(profile, "decisionOwner", path),
    deMinimisCorporateEventOccurred: triState(
      profile.deMinimisCorporateEventOccurred,
      `${path}.deMinimisCorporateEventOccurred`,
    ),
    deMinimisCorporateEventKind: oneOf<SiteAidCorporateEventKind>(
      profile.deMinimisCorporateEventKind,
      ["unknown", "merger-acquisition", "split", "both"],
      `${path}.deMinimisCorporateEventKind`,
    ),
    deMinimisCorporateEventEvidence: requiredText(
      profile,
      "deMinimisCorporateEventEvidence",
      path,
    ),
    deMinimisCorporateAidHistoryAdjusted: triState(
      profile.deMinimisCorporateAidHistoryAdjusted,
      `${path}.deMinimisCorporateAidHistoryAdjusted`,
    ),
  };
}

function parseAuthority(value: unknown): SiteAidDecisionInput["authority"] {
  const path = "input.authority";
  const authority = objectAt(value, path);
  exactKeys(
    authority,
    [
      "name",
      "officialUrl",
      "consultationDate",
      "scheduleAndAmendmentEvidence",
      "postAwardEvidenceVerified",
      "postAwardObligationsEvidence",
    ],
    path,
  );
  return {
    name: requiredText(authority, "name", path),
    officialUrl: requiredText(authority, "officialUrl", path),
    consultationDate: requiredText(authority, "consultationDate", path),
    scheduleAndAmendmentEvidence: requiredText(
      authority,
      "scheduleAndAmendmentEvidence",
      path,
    ),
    postAwardEvidenceVerified: triState(
      authority.postAwardEvidenceVerified,
      `${path}.postAwardEvidenceVerified`,
    ),
    postAwardObligationsEvidence: requiredText(
      authority,
      "postAwardObligationsEvidence",
      path,
    ),
  };
}

function parseQuoteLines(value: unknown): SiteAidDecisionInput["quoteLines"] {
  const path = "input.quoteLines";
  if (!Array.isArray(value)) return invalidFormat(path, "un tableau");
  if (value.length < 1 || value.length > SITE_AID_DRAFT_MAX_QUOTE_LINES) {
    return invalidFormat(
      path,
      `un tableau de 1 à ${SITE_AID_DRAFT_MAX_QUOTE_LINES} lignes`,
    );
  }
  return value.map((rawLine, index) => {
    const linePath = `${path}[${index}]`;
    const line = objectAt(rawLine, linePath);
    exactKeys(
      line,
      [
        "label",
        "amountExVat",
        "vatRatePercent",
        "deductibleVatFraction",
        "eligibility",
        "evidence",
      ],
      linePath,
    );
    const deductibleVatFraction =
      typeof line.deductibleVatFraction === "number"
        ? optionalNumber(line, "deductibleVatFraction", linePath)
        : triState(
            line.deductibleVatFraction,
            `${linePath}.deductibleVatFraction`,
          );
    return {
      label: requiredText(line, "label", linePath),
      amountExVat: optionalNumber(line, "amountExVat", linePath),
      vatRatePercent: optionalNumber(line, "vatRatePercent", linePath),
      deductibleVatFraction,
      eligibility: triState(line.eligibility, `${linePath}.eligibility`),
      evidence: requiredText(line, "evidence", linePath),
    };
  });
}

function parseGates(value: unknown): SiteAidDecisionInput["gates"] {
  const path = "input.gates";
  const gates = objectAt(value, path);
  const keys = [
    "authority",
    "beneficiary",
    "activity",
    "startOrder",
    "cumulativeAid",
    "notification",
  ] as const;
  exactKeys(gates, keys, path);
  return {
    authority: triState(gates.authority, `${path}.authority`),
    beneficiary: triState(gates.beneficiary, `${path}.beneficiary`),
    activity: triState(gates.activity, `${path}.activity`),
    startOrder: triState(gates.startOrder, `${path}.startOrder`),
    cumulativeAid: triState(gates.cumulativeAid, `${path}.cumulativeAid`),
    notification: triState(gates.notification, `${path}.notification`),
  };
}

function parseGateEvidence(
  value: unknown,
): SiteAidDecisionInput["gateEvidence"] {
  const path = "input.gateEvidence";
  const evidence = objectAt(value, path);
  const keys = [
    "authority",
    "beneficiary",
    "activity",
    "startOrder",
    "cumulativeAid",
    "notification",
  ] as const;
  exactKeys(evidence, keys, path);
  return {
    authority: requiredText(evidence, "authority", path),
    beneficiary: requiredText(evidence, "beneficiary", path),
    activity: requiredText(evidence, "activity", path),
    startOrder: requiredText(evidence, "startOrder", path),
    cumulativeAid: requiredText(evidence, "cumulativeAid", path),
    notification: requiredText(evidence, "notification", path),
  };
}

function parseAid(
  value: unknown,
  legacyBeforeR26 = false,
  legacyBeforeR27 = false,
): SiteAidDecisionInput["aid"] {
  const path = "input.aid";
  const aid = objectAt(value, path);
  exactKeys(
    aid,
    [
      "basisScope",
      "stage",
      "instrumentKind",
      "ratePercent",
      "capAmount",
      "legalAidValueAmount",
      "approvedFinancialContributionAmount",
      "actualFinancialContributionAmount",
      "paymentMode",
      "documentedPrepaymentPercent",
      "finalInvoiceMatchesQuote",
      "finalInvoiceDate",
      "finalInvoiceReference",
      "supplierPaymentReference",
      "receiptDate",
      "receiptReference",
      "legalBasisStatus",
      "deMinimisRegime",
      ...(legacyBeforeR26
        ? []
        : [
            "deMinimisFisheryFiscalYearStartDate",
            "prospectiveDeMinimisAidValueAmount",
            "prospectiveDeMinimisAidValueEvidence",
          ]),
      ...(legacyBeforeR27
        ? []
        : [
            "deMinimisFisheryPreviousFiscalYearStartDate",
            "deMinimisFisherySecondPreviousFiscalYearStartDate",
            "deMinimisFisheryCurrentFiscalYearEndDate",
          ]),
      "nonDeMinimisLegalBasis",
      "nonDeMinimisEvidenceReference",
      "deMinimisMemberState",
      "deMinimisSingleUndertakingScope",
      "similarUndertakingKeysDistinct",
      "similarUndertakingKeysEvidence",
      "sgeiEntrustmentVerified",
      "sgeiEntrustmentEvidence",
      "sgeiServiceIdentity",
      "sgeiSameServiceCompensationPresent",
      "sgeiCompensationEvidence",
      "legalGrantStatus",
      "legalGrantDate",
      "centralRegisterStatus",
      "centralRegisterReference",
    ],
    path,
  );
  const documentedPrepaymentPercent =
    aid.documentedPrepaymentPercent === "unknown"
      ? "unknown"
      : optionalNumber(aid, "documentedPrepaymentPercent", path);
  return {
    basisScope: oneOf<SiteAidBasisScope>(
      aid.basisScope,
      ["unknown", "eligible-ex-vat", "other"],
      `${path}.basisScope`,
    ),
    stage: oneOf<SiteAidStage>(
      aid.stage,
      ["none", "notified", "received"],
      `${path}.stage`,
    ),
    instrumentKind: oneOf<SiteAidInstrumentKind>(
      aid.instrumentKind,
      ["grant", "loan", "guarantee", "tax-relief", "other", "unknown"],
      `${path}.instrumentKind`,
    ),
    ratePercent: optionalNumber(aid, "ratePercent", path),
    capAmount: optionalNumber(aid, "capAmount", path),
    legalAidValueAmount: optionalNumber(aid, "legalAidValueAmount", path),
    approvedFinancialContributionAmount: optionalNumber(
      aid,
      "approvedFinancialContributionAmount",
      path,
    ),
    actualFinancialContributionAmount: optionalNumber(
      aid,
      "actualFinancialContributionAmount",
      path,
    ),
    paymentMode: oneOf<SiteAidPaymentMode>(
      aid.paymentMode,
      ["reimbursement", "advance", "direct", "unknown"],
      `${path}.paymentMode`,
    ),
    documentedPrepaymentPercent,
    finalInvoiceMatchesQuote: triState(
      aid.finalInvoiceMatchesQuote,
      `${path}.finalInvoiceMatchesQuote`,
    ),
    finalInvoiceDate: requiredText(aid, "finalInvoiceDate", path),
    finalInvoiceReference: requiredText(aid, "finalInvoiceReference", path),
    supplierPaymentReference: requiredText(
      aid,
      "supplierPaymentReference",
      path,
    ),
    receiptDate: requiredText(aid, "receiptDate", path),
    receiptReference: requiredText(aid, "receiptReference", path),
    legalBasisStatus: legalBasisStatus(
      aid.legalBasisStatus,
      `${path}.legalBasisStatus`,
    ),
    deMinimisRegime: requiredText(aid, "deMinimisRegime", path),
    deMinimisFisheryFiscalYearStartDate: legacyBeforeR26
      ? ""
      : optionalText(aid, "deMinimisFisheryFiscalYearStartDate", path),
    deMinimisFisheryPreviousFiscalYearStartDate: legacyBeforeR27
      ? ""
      : optionalText(aid, "deMinimisFisheryPreviousFiscalYearStartDate", path),
    deMinimisFisherySecondPreviousFiscalYearStartDate: legacyBeforeR27
      ? ""
      : optionalText(
          aid,
          "deMinimisFisherySecondPreviousFiscalYearStartDate",
          path,
        ),
    deMinimisFisheryCurrentFiscalYearEndDate: legacyBeforeR27
      ? ""
      : optionalText(aid, "deMinimisFisheryCurrentFiscalYearEndDate", path),
    prospectiveDeMinimisAidValueAmount: legacyBeforeR26
      ? undefined
      : optionalNumber(aid, "prospectiveDeMinimisAidValueAmount", path),
    prospectiveDeMinimisAidValueEvidence: legacyBeforeR26
      ? ""
      : optionalText(aid, "prospectiveDeMinimisAidValueEvidence", path),
    nonDeMinimisLegalBasis: requiredText(aid, "nonDeMinimisLegalBasis", path),
    nonDeMinimisEvidenceReference: requiredText(
      aid,
      "nonDeMinimisEvidenceReference",
      path,
    ),
    deMinimisMemberState: requiredText(aid, "deMinimisMemberState", path),
    deMinimisSingleUndertakingScope: requiredText(
      aid,
      "deMinimisSingleUndertakingScope",
      path,
    ),
    similarUndertakingKeysDistinct: triState(
      aid.similarUndertakingKeysDistinct,
      `${path}.similarUndertakingKeysDistinct`,
    ),
    similarUndertakingKeysEvidence: requiredText(
      aid,
      "similarUndertakingKeysEvidence",
      path,
    ),
    sgeiEntrustmentVerified: triState(
      aid.sgeiEntrustmentVerified,
      `${path}.sgeiEntrustmentVerified`,
    ),
    sgeiEntrustmentEvidence: requiredText(aid, "sgeiEntrustmentEvidence", path),
    sgeiServiceIdentity: requiredText(aid, "sgeiServiceIdentity", path),
    sgeiSameServiceCompensationPresent: triState(
      aid.sgeiSameServiceCompensationPresent,
      `${path}.sgeiSameServiceCompensationPresent`,
    ),
    sgeiCompensationEvidence: requiredText(
      aid,
      "sgeiCompensationEvidence",
      path,
    ),
    legalGrantStatus: triState(
      aid.legalGrantStatus,
      `${path}.legalGrantStatus`,
    ),
    legalGrantDate: requiredText(aid, "legalGrantDate", path),
    centralRegisterStatus:
      aid.centralRegisterStatus === undefined
        ? "unknown"
        : centralRegisterStatus(
            aid.centralRegisterStatus,
            `${path}.centralRegisterStatus`,
          ),
    centralRegisterReference: optionalText(
      aid,
      "centralRegisterReference",
      path,
    ),
  };
}

function parseWait(value: unknown): SiteAidDecisionInput["wait"] {
  const path = "input.wait";
  const wait = objectAt(value, path);
  exactKeys(
    wait,
    ["months", "monthlyDelayContributionMargin", "aidSpecificFees"],
    path,
  );
  return {
    months: optionalNumber(wait, "months", path),
    monthlyDelayContributionMargin: optionalNumber(
      wait,
      "monthlyDelayContributionMargin",
      path,
    ),
    aidSpecificFees: optionalNumber(wait, "aidSpecificFees", path),
  };
}

function parseRegister(value: unknown): SiteAidDecisionInput["aidRegister"] {
  const path = "input.aidRegister";
  if (!Array.isArray(value)) return invalidFormat(path, "un tableau");
  if (value.length > SITE_AID_DRAFT_MAX_REGISTER_ENTRIES) {
    return invalidFormat(
      path,
      `un tableau de ${SITE_AID_DRAFT_MAX_REGISTER_ENTRIES} lignes maximum`,
    );
  }
  return value.map((rawEntry, index) => {
    const entryPath = `${path}[${index}]`;
    const entry = objectAt(rawEntry, entryPath);
    exactKeys(
      entry,
      [
        "authority",
        "scheme",
        "legalBasisStatus",
        "regime",
        "nonDeMinimisLegalBasis",
        "nonDeMinimisEvidenceReference",
        "memberState",
        "singleUndertakingScope",
        "similarUndertakingKeysDistinct",
        "similarUndertakingKeysEvidence",
        "sgeiEntrustmentVerified",
        "sgeiEntrustmentEvidence",
        "sgeiServiceIdentity",
        "sgeiSameServiceCompensationPresent",
        "sgeiCompensationEvidence",
        "sgeiRelationToCurrentService",
        "sgeiRelationToCurrentServiceEvidence",
        "amount",
        "legalGrantDate",
        "centralRegisterStatus",
        "centralRegisterReference",
        "expenses",
        "sameBaseOrInvoice",
      ],
      entryPath,
    );
    return {
      authority: requiredText(entry, "authority", entryPath),
      scheme: requiredText(entry, "scheme", entryPath),
      legalBasisStatus: legalBasisStatus(
        entry.legalBasisStatus,
        `${entryPath}.legalBasisStatus`,
      ),
      regime: requiredText(entry, "regime", entryPath),
      nonDeMinimisLegalBasis: requiredText(
        entry,
        "nonDeMinimisLegalBasis",
        entryPath,
      ),
      nonDeMinimisEvidenceReference: requiredText(
        entry,
        "nonDeMinimisEvidenceReference",
        entryPath,
      ),
      memberState: requiredText(entry, "memberState", entryPath),
      singleUndertakingScope: requiredText(
        entry,
        "singleUndertakingScope",
        entryPath,
      ),
      similarUndertakingKeysDistinct: triState(
        entry.similarUndertakingKeysDistinct,
        `${entryPath}.similarUndertakingKeysDistinct`,
      ),
      similarUndertakingKeysEvidence: requiredText(
        entry,
        "similarUndertakingKeysEvidence",
        entryPath,
      ),
      sgeiEntrustmentVerified: triState(
        entry.sgeiEntrustmentVerified,
        `${entryPath}.sgeiEntrustmentVerified`,
      ),
      sgeiEntrustmentEvidence: requiredText(
        entry,
        "sgeiEntrustmentEvidence",
        entryPath,
      ),
      sgeiServiceIdentity: requiredText(
        entry,
        "sgeiServiceIdentity",
        entryPath,
      ),
      sgeiSameServiceCompensationPresent: triState(
        entry.sgeiSameServiceCompensationPresent,
        `${entryPath}.sgeiSameServiceCompensationPresent`,
      ),
      sgeiCompensationEvidence: requiredText(
        entry,
        "sgeiCompensationEvidence",
        entryPath,
      ),
      sgeiRelationToCurrentService: triState(
        entry.sgeiRelationToCurrentService,
        `${entryPath}.sgeiRelationToCurrentService`,
      ),
      sgeiRelationToCurrentServiceEvidence: requiredText(
        entry,
        "sgeiRelationToCurrentServiceEvidence",
        entryPath,
      ),
      amount: optionalNumber(entry, "amount", entryPath),
      legalGrantDate: requiredText(entry, "legalGrantDate", entryPath),
      centralRegisterStatus:
        entry.centralRegisterStatus === undefined
          ? "unknown"
          : centralRegisterStatus(
              entry.centralRegisterStatus,
              `${entryPath}.centralRegisterStatus`,
            ),
      centralRegisterReference: optionalText(
        entry,
        "centralRegisterReference",
        entryPath,
      ),
      expenses: requiredText(entry, "expenses", entryPath),
      sameBaseOrInvoice: triState(
        entry.sameBaseOrInvoice,
        `${entryPath}.sameBaseOrInvoice`,
      ),
    };
  });
}

function parseInput(
  value: unknown,
  legacyBeforeR26 = false,
  legacyBeforeR27 = false,
  legacyBeforeR28 = false,
): SiteAidDecisionInput {
  const path = "input";
  const input = objectAt(value, path);
  exactKeys(
    input,
    [
      "profile",
      "authority",
      "quoteLines",
      "gates",
      "gateEvidence",
      "aid",
      "availableCash",
      "wait",
      "aidRegister",
    ],
    path,
  );
  return {
    profile: parseProfile(input.profile, legacyBeforeR27, legacyBeforeR28),
    authority: parseAuthority(input.authority),
    quoteLines: parseQuoteLines(input.quoteLines),
    gates: parseGates(input.gates),
    gateEvidence: parseGateEvidence(input.gateEvidence),
    aid: parseAid(input.aid, legacyBeforeR26, legacyBeforeR27),
    availableCash: optionalNumber(input, "availableCash", path),
    wait: parseWait(input.wait),
    aidRegister: parseRegister(input.aidRegister),
  };
}

function parseApplicationDocuments(
  value: unknown,
  legacyR24 = false,
): SiteAidApplicationDocument[] {
  const path = "application.documents";
  if (!Array.isArray(value)) return invalidFormat(path, "un tableau");
  if (value.length > SITE_AID_DRAFT_MAX_APPLICATION_DOCUMENTS) {
    return invalidFormat(
      path,
      `un tableau de ${SITE_AID_DRAFT_MAX_APPLICATION_DOCUMENTS} pièces maximum`,
    );
  }
  return value.map((rawDocument, index) => {
    const documentPath = `${path}[${index}]`;
    const document = objectAt(rawDocument, documentPath);
    exactKeys(
      document,
      legacyR24
        ? ["label", "status", "owner", "format", "signatureStatus", "deadline"]
        : [
            "label",
            "status",
            "owner",
            "format",
            "signatureStatus",
            "deadline",
            "notApplicableJustification",
          ],
      documentPath,
    );
    return {
      label: requiredText(document, "label", documentPath),
      status: applicationDocumentStatus(
        document.status,
        `${documentPath}.status`,
      ),
      owner: requiredText(document, "owner", documentPath),
      format: requiredText(document, "format", documentPath),
      signatureStatus: applicationSignatureStatus(
        document.signatureStatus,
        `${documentPath}.signatureStatus`,
      ),
      deadline: requiredText(document, "deadline", documentPath),
      notApplicableJustification: legacyR24
        ? ""
        : requiredText(document, "notApplicableJustification", documentPath),
    };
  });
}

function parseApplicationCriteria(
  value: unknown,
): SiteAidApplicationCriterion[] {
  const path = "application.criteria";
  if (!Array.isArray(value)) return invalidFormat(path, "un tableau");
  if (value.length > SITE_AID_DRAFT_MAX_APPLICATION_CRITERIA) {
    return invalidFormat(
      path,
      `un tableau de ${SITE_AID_DRAFT_MAX_APPLICATION_CRITERIA} critères maximum`,
    );
  }
  return value.map((rawCriterion, index) => {
    const criterionPath = `${path}[${index}]`;
    const criterion = objectAt(rawCriterion, criterionPath);
    exactKeys(
      criterion,
      [
        "publishedCriterion",
        "projectResponse",
        "evidence",
        "owner",
        "wordLimit",
      ],
      criterionPath,
    );
    return {
      publishedCriterion: requiredText(
        criterion,
        "publishedCriterion",
        criterionPath,
      ),
      projectResponse: requiredText(
        criterion,
        "projectResponse",
        criterionPath,
      ),
      evidence: requiredText(criterion, "evidence", criterionPath),
      owner: requiredText(criterion, "owner", criterionPath),
      wordLimit: optionalNumber(criterion, "wordLimit", criterionPath),
    };
  });
}

function parseApplication(
  value: unknown,
  legacyBeforeR28 = false,
): SiteAidApplicationPreparation {
  const path = "application";
  const application = objectAt(value, path);
  exactKeys(
    application,
    [
      "awardMode",
      "funderObjectives",
      "selectionCriteria",
      "submissionChannel",
      ...(legacyBeforeR28
        ? []
        : [
            "submissionStatus",
            "submissionDate",
            "submissionReceiptReference",
            "submittedPackageMatchesPreparedPackage",
          ]),
      "deadlineStatus",
      "deadline",
      "deadlineTime",
      "deadlineTimeZone",
      "deadlineOfficialReference",
      "deadlineVerificationDate",
      "deadlineEvaluationInstant",
      "deadlineEvaluationTimeZone",
      "preparationTimeHours",
      "deliverables",
      "expectedResults",
      "schedule",
      "budgetJustification",
      "criteria",
      "finalReviewer",
      "finalValidationStatus",
      "documents",
    ],
    path,
  );
  return {
    awardMode: applicationAwardMode(application.awardMode, `${path}.awardMode`),
    funderObjectives: requiredText(application, "funderObjectives", path),
    selectionCriteria: requiredText(application, "selectionCriteria", path),
    submissionChannel: requiredText(application, "submissionChannel", path),
    submissionStatus: legacyBeforeR28
      ? "unknown"
      : applicationSubmissionStatus(
          application.submissionStatus,
          `${path}.submissionStatus`,
        ),
    submissionDate: legacyBeforeR28
      ? ""
      : requiredIsoDateOrEmpty(application, "submissionDate", path),
    submissionReceiptReference: legacyBeforeR28
      ? ""
      : requiredBoundedText(
          application,
          "submissionReceiptReference",
          path,
          SITE_AID_DRAFT_MAX_SUBMISSION_REFERENCE_LENGTH,
        ),
    submittedPackageMatchesPreparedPackage: legacyBeforeR28
      ? "unknown"
      : triState(
          application.submittedPackageMatchesPreparedPackage,
          `${path}.submittedPackageMatchesPreparedPackage`,
        ),
    deadlineStatus: applicationDeadlineStatus(
      application.deadlineStatus,
      `${path}.deadlineStatus`,
    ),
    deadline: requiredText(application, "deadline", path),
    deadlineTime: requiredText(application, "deadlineTime", path),
    deadlineTimeZone: requiredText(application, "deadlineTimeZone", path),
    deadlineOfficialReference: requiredText(
      application,
      "deadlineOfficialReference",
      path,
    ),
    deadlineVerificationDate: requiredText(
      application,
      "deadlineVerificationDate",
      path,
    ),
    deadlineEvaluationInstant: requiredText(
      application,
      "deadlineEvaluationInstant",
      path,
    ),
    deadlineEvaluationTimeZone: requiredText(
      application,
      "deadlineEvaluationTimeZone",
      path,
    ),
    preparationTimeHours: optionalNumber(
      application,
      "preparationTimeHours",
      path,
    ),
    deliverables: requiredText(application, "deliverables", path),
    expectedResults: requiredText(application, "expectedResults", path),
    schedule: requiredText(application, "schedule", path),
    budgetJustification: requiredText(application, "budgetJustification", path),
    criteria: parseApplicationCriteria(application.criteria),
    finalReviewer: requiredText(application, "finalReviewer", path),
    finalValidationStatus: triState(
      application.finalValidationStatus,
      `${path}.finalValidationStatus`,
    ),
    documents: parseApplicationDocuments(application.documents),
  };
}

function parseApplicationR25(value: unknown): SiteAidApplicationPreparation {
  const path = "application";
  const application = objectAt(value, path);
  exactKeys(
    application,
    [
      "awardMode",
      "funderObjectives",
      "selectionCriteria",
      "submissionChannel",
      "deadline",
      "deadlineTime",
      "deadlineTimeZone",
      "preparationTimeHours",
      "deliverables",
      "expectedResults",
      "schedule",
      "budgetJustification",
      "criteria",
      "finalReviewer",
      "finalValidationStatus",
      "documents",
    ],
    path,
  );
  const deadline = requiredText(application, "deadline", path);
  return {
    ...createEmptySiteAidApplicationPreparation(),
    awardMode: applicationAwardMode(application.awardMode, `${path}.awardMode`),
    funderObjectives: requiredText(application, "funderObjectives", path),
    selectionCriteria: requiredText(application, "selectionCriteria", path),
    submissionChannel: requiredText(application, "submissionChannel", path),
    deadlineStatus: deadline.trim() ? "exact-date" : "unpublished",
    deadline,
    deadlineTime: requiredText(application, "deadlineTime", path),
    deadlineTimeZone: requiredText(application, "deadlineTimeZone", path),
    preparationTimeHours: optionalNumber(
      application,
      "preparationTimeHours",
      path,
    ),
    deliverables: requiredText(application, "deliverables", path),
    expectedResults: requiredText(application, "expectedResults", path),
    schedule: requiredText(application, "schedule", path),
    budgetJustification: requiredText(application, "budgetJustification", path),
    criteria: parseApplicationCriteria(application.criteria),
    finalReviewer: requiredText(application, "finalReviewer", path),
    finalValidationStatus: triState(
      application.finalValidationStatus,
      `${path}.finalValidationStatus`,
    ),
    documents: parseApplicationDocuments(application.documents),
  };
}

function parseApplicationR24(value: unknown): SiteAidApplicationPreparation {
  const path = "application";
  const application = objectAt(value, path);
  exactKeys(
    application,
    [
      "awardMode",
      "funderObjectives",
      "selectionCriteria",
      "submissionChannel",
      "deadline",
      "preparationTimeHours",
      "finalReviewer",
      "finalValidationStatus",
      "documents",
    ],
    path,
  );
  const deadline = requiredText(application, "deadline", path);
  return {
    ...createEmptySiteAidApplicationPreparation(),
    awardMode: applicationAwardMode(application.awardMode, `${path}.awardMode`),
    funderObjectives: requiredText(application, "funderObjectives", path),
    selectionCriteria: requiredText(application, "selectionCriteria", path),
    submissionChannel: requiredText(application, "submissionChannel", path),
    deadlineStatus: deadline.trim() ? "exact-date" : "unpublished",
    deadline,
    preparationTimeHours: optionalNumber(
      application,
      "preparationTimeHours",
      path,
    ),
    finalReviewer: requiredText(application, "finalReviewer", path),
    finalValidationStatus: triState(
      application.finalValidationStatus,
      `${path}.finalValidationStatus`,
    ),
    documents: parseApplicationDocuments(application.documents, true),
  };
}

function byteLength(value: string): number {
  return new TextEncoder().encode(value).byteLength;
}

function validExportedAt(value: unknown): value is string {
  return (
    typeof value === "string" &&
    value.length <= 64 &&
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?Z$/.test(value) &&
    Number.isFinite(Date.parse(value))
  );
}

function parsePrediagnosis(value: unknown): SiteAidPreDiagnosisTransfer {
  try {
    return parseSiteAidPreDiagnosis(value);
  } catch (error) {
    return invalidFormat(
      "prediagnosis",
      error instanceof Error
        ? `un prédiagnostic strict (${error.message})`
        : "un prédiagnostic strict",
    );
  }
}

export function parseSiteAidDraftJson(rawJson: string): ParsedSiteAidDraft {
  if (byteLength(rawJson) > SITE_AID_DRAFT_MAX_BYTES) {
    throw new SiteAidDraftError(
      "too-large",
      "Ce brouillon dépasse la taille maximale autorisée de 256 Kio.",
    );
  }

  let raw: unknown;
  try {
    raw = JSON.parse(rawJson) as unknown;
  } catch {
    throw new SiteAidDraftError(
      "invalid-json",
      "Ce fichier ne contient pas un brouillon JSON lisible.",
    );
  }

  const envelope = objectAt(raw, "racine");
  if (envelope.kind !== SITE_AID_DRAFT_KIND) {
    invalidFormat("racine.kind", `« ${SITE_AID_DRAFT_KIND} »`);
  }
  const isCurrentVersion = envelope.version === SITE_AID_DRAFT_VERSION;
  const isR28Version = envelope.version === SITE_AID_DRAFT_R28_VERSION;
  const isR27Version = envelope.version === SITE_AID_DRAFT_R27_VERSION;
  const isR26Version = envelope.version === SITE_AID_DRAFT_R26_VERSION;
  const isR25Version = envelope.version === SITE_AID_DRAFT_R25_VERSION;
  const isR24Version = envelope.version === SITE_AID_DRAFT_R24_VERSION;
  const isR23Version = envelope.version === SITE_AID_DRAFT_R23_VERSION;
  if (
    !isCurrentVersion &&
    !isR28Version &&
    !isR27Version &&
    !isR26Version &&
    !isR25Version &&
    !isR24Version &&
    !isR23Version
  ) {
    throw new SiteAidDraftError(
      "unsupported-version",
      "Cette version de brouillon n’est pas prise en charge.",
    );
  }
  exactKeys(
    envelope,
    isCurrentVersion ||
      isR28Version ||
      isR27Version ||
      isR26Version ||
      isR25Version
      ? [
          "kind",
          "version",
          "exportedAt",
          "activeStepId",
          "input",
          "application",
          "prediagnosis",
        ]
      : isR24Version
        ? [
            "kind",
            "version",
            "exportedAt",
            "activeStepId",
            "input",
            "application",
          ]
        : ["kind", "version", "exportedAt", "activeStepId", "input"],
    "racine",
  );
  if (!validExportedAt(envelope.exportedAt)) {
    invalidFormat("racine.exportedAt", "une date UTC ISO valide");
  }

  const activeStepId =
    isCurrentVersion ||
    isR28Version ||
    isR27Version ||
    isR26Version ||
    isR25Version ||
    isR24Version
      ? oneOf(
          envelope.activeStepId,
          SITE_AID_DRAFT_STEP_IDS,
          "racine.activeStepId",
        )
      : oneOf(
          envelope.activeStepId,
          SITE_AID_DRAFT_R23_STEP_IDS,
          "racine.activeStepId",
        );
  return {
    activeStepId,
    exportedAt: envelope.exportedAt,
    input: parseInput(
      envelope.input,
      !isCurrentVersion && !isR28Version && !isR27Version && !isR26Version,
      !isCurrentVersion && !isR28Version && !isR27Version,
      !isCurrentVersion && !isR28Version,
    ),
    application:
      isCurrentVersion || isR28Version
        ? parseApplication(envelope.application)
        : isR27Version || isR26Version
          ? parseApplication(envelope.application, true)
          : isR25Version
            ? parseApplicationR25(envelope.application)
            : isR24Version
              ? parseApplicationR24(envelope.application)
              : createEmptySiteAidApplicationPreparation(),
    prediagnosis:
      isCurrentVersion ||
      isR28Version ||
      isR27Version ||
      isR26Version ||
      isR25Version
        ? parsePrediagnosis(envelope.prediagnosis)
        : createEmptySiteAidPreDiagnosis(),
    ...(isR28Version
      ? { migratedFromVersion: SITE_AID_DRAFT_R28_VERSION }
      : isR27Version
        ? { migratedFromVersion: SITE_AID_DRAFT_R27_VERSION }
        : isR26Version
          ? { migratedFromVersion: SITE_AID_DRAFT_R26_VERSION }
          : isR25Version
            ? { migratedFromVersion: SITE_AID_DRAFT_R25_VERSION }
            : isR24Version
              ? { migratedFromVersion: SITE_AID_DRAFT_R24_VERSION }
              : isR23Version
                ? { migratedFromVersion: SITE_AID_DRAFT_R23_VERSION }
                : {}),
  };
}

export function createSiteAidDraftJson(
  input: SiteAidDecisionInput,
  application: SiteAidApplicationPreparation,
  activeStepId: SiteAidDraftStepId,
  exportedAt: string,
  prediagnosis: SiteAidPreDiagnosisTransfer = createEmptySiteAidPreDiagnosis(),
): string {
  if (!validExportedAt(exportedAt)) {
    invalidFormat("exportedAt", "une date UTC ISO valide");
  }
  const serialized = JSON.stringify(
    {
      kind: SITE_AID_DRAFT_KIND,
      version: SITE_AID_DRAFT_VERSION,
      exportedAt,
      activeStepId: oneOf(
        activeStepId,
        SITE_AID_DRAFT_STEP_IDS,
        "activeStepId",
      ),
      input: parseInput(input),
      application: parseApplication(application),
      prediagnosis: parsePrediagnosis(prediagnosis),
    },
    null,
    2,
  );
  if (byteLength(serialized) > SITE_AID_DRAFT_MAX_BYTES) {
    throw new SiteAidDraftError(
      "too-large",
      "Ce brouillon dépasse la taille maximale autorisée de 256 Kio.",
    );
  }
  return serialized;
}

export function siteAidDraftFilename(
  reference: string,
  verificationDate: string,
): string {
  const slug = reference
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("fr-FR")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
  const date = /^\d{4}-\d{2}-\d{2}$/.test(verificationDate)
    ? verificationDate
    : "sans-date";
  return `brouillon-aide-site-${slug || "sans-reference"}-${date}.json`;
}
