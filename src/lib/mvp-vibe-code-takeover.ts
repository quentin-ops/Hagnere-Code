import requiredProofsData from "./mvp-vibe-code-required-proofs.json";

export const MVP_VIBE_CODE_TAKEOVER_VERSION =
  "mvp-vibe-code-takeover-r2-2026-07-28";
export const MVP_VIBE_CODE_DEFAULT_AS_OF_DATE = "2026-07-28";
export const MVP_VIBE_CODE_MAX_COST = 1_000_000_000;
export const MVP_VIBE_CODE_MAX_HOURS = 1_000_000;
export const MVP_VIBE_CODE_MAX_COUNT = 10_000_000;
export const MVP_VIBE_CODE_MAX_AGGREGATE_COST = 10_000_000_000;
const MVP_VIBE_CODE_MAX_DECIMAL_PLACES = 2;

export type MvpVibeCodeMode =
  | "unknown"
  | "normal"
  | "incident"
  | "dispute"
  | "no-authority";

export const MVP_VIBE_CODE_MODES: ReadonlyArray<{
  id: MvpVibeCodeMode;
  label: string;
  help: string;
}> = [
  {
    id: "unknown",
    label: "Situation non qualifiée",
    help: "Aucune décision ne doit être tirée tant que le contexte reste inconnu.",
  },
  {
    id: "normal",
    label: "Reprise normale autorisée",
    help: "Le mandat est confirmé et aucun incident ou litige bloquant n’est actif.",
  },
  {
    id: "incident",
    label: "Incident ou compromission active",
    help: "La réponse à incident précède l’audit de reprise ordinaire.",
  },
  {
    id: "dispute",
    label: "Litige de propriété ou de droits",
    help: "Un spécialiste compétent doit qualifier les droits avant réutilisation.",
  },
  {
    id: "no-authority",
    label: "Mandat ou autorité absente",
    help: "Aucun test ou changement ne doit être présumé autorisé.",
  },
];

export type MvpVibeCodeProofSeverity = "blocking" | "major";
export type MvpVibeCodeProofStatus =
  | "unknown"
  | "declared"
  | "verified"
  | "failed"
  | "NA";

export interface MvpVibeCodeProofDefinition {
  id: string;
  label: string;
  severity: MvpVibeCodeProofSeverity;
  allowsNa: boolean;
  expected: string;
  acceptedEvidence: readonly string[];
}

export function validateMvpVibeCodeProofDefinitions(
  input: unknown,
): readonly MvpVibeCodeProofDefinition[] {
  if (!Array.isArray(input) || input.length !== 9) {
    throw new Error(
      "Le référentiel des preuves doit contenir exactement neuf domaines.",
    );
  }

  const ids = new Set<string>();
  const definitions = input.map((candidate, index) => {
    if (!candidate || typeof candidate !== "object" || Array.isArray(candidate)) {
      throw new Error(`Le domaine de preuve ${index + 1} est invalide.`);
    }
    const proof = candidate as Record<string, unknown>;
    if (
      typeof proof.id !== "string" ||
      !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(proof.id) ||
      ids.has(proof.id)
    ) {
      throw new Error(
        `Le domaine de preuve ${index + 1} doit avoir un identifiant unique valide.`,
      );
    }
    if (proof.severity !== "blocking" && proof.severity !== "major") {
      throw new Error(
        `La sévérité du domaine « ${proof.id} » doit être blocking ou major.`,
      );
    }
    if (
      typeof proof.label !== "string" ||
      proof.label.trim().length < 3 ||
      typeof proof.expected !== "string" ||
      proof.expected.trim().length < 8 ||
      typeof proof.allowsNa !== "boolean" ||
      !Array.isArray(proof.acceptedEvidence) ||
      proof.acceptedEvidence.length === 0 ||
      !proof.acceptedEvidence.every(
        (value) => typeof value === "string" && value.trim().length >= 3,
      )
    ) {
      throw new Error(`Le domaine de preuve « ${proof.id} » est incomplet.`);
    }

    ids.add(proof.id);
    return Object.freeze({
      id: proof.id,
      label: proof.label,
      severity: proof.severity,
      allowsNa: proof.allowsNa,
      expected: proof.expected,
      acceptedEvidence: Object.freeze([...proof.acceptedEvidence]),
    }) satisfies MvpVibeCodeProofDefinition;
  });

  return Object.freeze(definitions);
}

export const MVP_VIBE_CODE_REQUIRED_PROOFS =
  validateMvpVibeCodeProofDefinitions(requiredProofsData);

export interface MvpVibeCodeProofEntry {
  status: MvpVibeCodeProofStatus;
  owner: string;
  checkedOn: string;
  evidenceRef: string;
  naRationale: string;
  naApprover: string;
}

export const MVP_VIBE_CODE_TRAJECTORY_IDS = [
  "conserve",
  "stabilise",
  "migrate",
  "rewrite",
  "stop",
] as const;

export type MvpVibeCodeTrajectoryId =
  (typeof MVP_VIBE_CODE_TRAJECTORY_IDS)[number];

export const MVP_VIBE_CODE_TRAJECTORIES: Record<
  MvpVibeCodeTrajectoryId,
  { label: string; purpose: string }
> = {
  conserve: {
    label: "Conserver",
    purpose:
      "Maintenir le socle prouvé sans changement structurel non nécessaire.",
  },
  stabilise: {
    label: "Stabiliser",
    purpose:
      "Corriger les risques prioritaires et documenter l’exploitation.",
  },
  migrate: {
    label: "Migrer progressivement",
    purpose:
      "Remplacer les composants justifiés avec coexistence et retour arrière.",
  },
  rewrite: {
    label: "Réécrire",
    purpose:
      "Reconstruire le même service utile puis migrer les données et usages.",
  },
  stop: {
    label: "Arrêter proprement",
    purpose:
      "Exporter, archiver, informer, révoquer et satisfaire les obligations.",
  },
};

export const MVP_VIBE_CODE_TCO_HORIZONS = [12, 36, 60] as const;
export type MvpVibeCodeTcoHorizon =
  (typeof MVP_VIBE_CODE_TCO_HORIZONS)[number];

export const MVP_VIBE_CODE_TCO_FIELDS = [
  {
    key: "oneOff",
    label: "Coûts ponctuels",
    suffix: "€",
    integer: false,
  },
  {
    key: "monthly",
    label: "Coûts récurrents mensuels",
    suffix: "€/mois",
    integer: false,
  },
  {
    key: "annual",
    label: "Coûts récurrents annuels",
    suffix: "€/an",
    integer: false,
  },
  {
    key: "internalOneOffHours",
    label: "Temps interne ponctuel",
    suffix: "h",
    integer: false,
  },
  {
    key: "internalMonthlyHours",
    label: "Temps interne mensuel",
    suffix: "h/mois",
    integer: false,
  },
  {
    key: "internalHourlyRate",
    label: "Coût horaire interne chargé",
    suffix: "€/h",
    integer: false,
  },
  {
    key: "doubleRunMonths",
    label: "Durée de double exploitation",
    suffix: "mois",
    integer: true,
  },
  {
    key: "doubleRunMonthly",
    label: "Coût mensuel de double exploitation",
    suffix: "€/mois",
    integer: false,
  },
  {
    key: "exit",
    label: "Sortie ou archivage à l’horizon",
    suffix: "€",
    integer: false,
  },
] as const;

export type MvpVibeCodeTcoField =
  (typeof MVP_VIBE_CODE_TCO_FIELDS)[number]["key"];

export type NullableNumber = number | null;

export type MvpVibeCodeTrajectoryCost = Record<
  MvpVibeCodeTcoField,
  NullableNumber
>;

export type MvpVibeCodeTcoInput = Record<
  MvpVibeCodeTrajectoryId,
  MvpVibeCodeTrajectoryCost
>;

export interface MvpVibeCodeOutageInput {
  outageHours: NullableNumber;
  affectedPeople: NullableNumber;
  loadedHourlyCost: NullableNumber;
  lostContributionMargin: NullableNumber;
  catchUpCost: NullableNumber;
  providerCost: NullableNumber;
  communicationCost: NullableNumber;
  refundsPenalties: NullableNumber;
  annualProbabilityPercent: NullableNumber;
  probabilitySource: string;
  probabilityDate: string;
}

export const MVP_VIBE_CODE_OUTAGE_FIELDS = [
  {
    key: "outageHours",
    label: "Durée de panne observée ou simulée",
    suffix: "h",
    integer: false,
  },
  {
    key: "affectedPeople",
    label: "Personnes réellement affectées",
    suffix: "personnes",
    integer: true,
  },
  {
    key: "loadedHourlyCost",
    label: "Coût horaire chargé",
    suffix: "€/h",
    integer: false,
  },
  {
    key: "lostContributionMargin",
    label: "Marge contributive définitivement perdue",
    suffix: "€",
    integer: false,
  },
  {
    key: "catchUpCost",
    label: "Rattrapage",
    suffix: "€",
    integer: false,
  },
  {
    key: "providerCost",
    label: "Prestataires",
    suffix: "€",
    integer: false,
  },
  {
    key: "communicationCost",
    label: "Communication",
    suffix: "€",
    integer: false,
  },
  {
    key: "refundsPenalties",
    label: "Remboursements ou pénalités applicables",
    suffix: "€",
    integer: false,
  },
  {
    key: "annualProbabilityPercent",
    label: "Probabilité annuelle documentée — facultative",
    suffix: "%",
    integer: false,
  },
] as const;

export type MvpVibeCodeOutageNumericField =
  (typeof MVP_VIBE_CODE_OUTAGE_FIELDS)[number]["key"];

export type MvpVibeCodeRawTcoInput = Record<
  MvpVibeCodeTrajectoryId,
  Record<MvpVibeCodeTcoField, string>
>;

export type MvpVibeCodeRawOutageInput = Record<
  MvpVibeCodeOutageNumericField,
  string
> & {
  probabilitySource: string;
  probabilityDate: string;
};

export interface MvpVibeCodeTakeoverDossier {
  isFictitiousExample: boolean;
  context: {
    reference: string;
    evaluationDate: string;
    commonScope: string;
    mode: MvpVibeCodeMode;
  };
  proofs: Record<string, MvpVibeCodeProofEntry>;
  tco: MvpVibeCodeTcoInput;
  outage: MvpVibeCodeOutageInput;
  rawInputs?: {
    tco: MvpVibeCodeRawTcoInput;
    outage: MvpVibeCodeRawOutageInput;
  };
}

export type MvpVibeCodeDecisionStage =
  | "STOP"
  | "INCOMPLET"
  | "COMPARABLE"
  | "DECISION_HUMAINE";

export const MVP_VIBE_CODE_STAGE_LABELS: Record<
  MvpVibeCodeDecisionStage,
  string
> = {
  STOP: "STOP",
  INCOMPLET: "INCOMPLET",
  COMPARABLE: "COMPARABLE",
  DECISION_HUMAINE: "DÉCISION HUMAINE",
};

export interface MvpVibeCodeNumericIssue {
  field: string;
  message: string;
}

export interface MvpVibeCodeTcoEvaluation {
  kind: "known" | "unknown";
  issues: MvpVibeCodeNumericIssue[];
  totals: Record<
    MvpVibeCodeTrajectoryId,
    Record<MvpVibeCodeTcoHorizon, number | null>
  >;
  cheapestByHorizon: Record<
    MvpVibeCodeTcoHorizon,
    MvpVibeCodeTrajectoryId | null
  >;
}

export interface MvpVibeCodeOutageEvaluation {
  kind: "known" | "unknown";
  probabilityKind: "not-provided" | "known" | "invalid";
  issues: MvpVibeCodeNumericIssue[];
  capacityCost: number | null;
  observableCost: number | null;
  expectedAnnualCost: number | null;
}

export interface MvpVibeCodeProofEvaluation {
  id: string;
  severity: MvpVibeCodeProofSeverity;
  status: MvpVibeCodeProofStatus;
  state: "resolved" | "unresolved" | "failed" | "invalid";
  reasons: string[];
}

export interface MvpVibeCodeTakeoverEvaluation {
  version: string;
  asOfDate: string;
  stage: MvpVibeCodeDecisionStage;
  label: string;
  reasons: string[];
  contextIssues: string[];
  proofEvaluations: MvpVibeCodeProofEvaluation[];
  blockingProofIds: string[];
  unresolvedMajorProofIds: string[];
  tco: MvpVibeCodeTcoEvaluation;
  outage: MvpVibeCodeOutageEvaluation;
  containsUnconfirmedFictitiousValues: boolean;
  hasPotentialSecrets: boolean;
  secretCandidateFields: string[];
  exportBlockReasons: string[];
  canExportDraft: boolean;
  canExportFinal: boolean;
}

export interface MvpVibeCodeEvaluationOptions {
  asOfDate?: string;
}

export type MvpVibeCodeParsedNumber =
  | { state: "empty" | "intermediate" | "invalid"; value: null }
  | { state: "valid"; value: number };

const STOP_MODE_MESSAGES: Partial<Record<MvpVibeCodeMode, string>> = {
  incident:
    "STOP : une compromission ou un incident actif impose une réponse à incident avant la reprise ordinaire.",
  dispute:
    "STOP : un litige matériel de propriété ou de droits doit être arbitré avant réutilisation.",
  "no-authority":
    "STOP : aucun mandat ou pouvoir suffisant ne permet de présumer les tests autorisés.",
};

const FICTITIOUS_NOTE =
  "EXEMPLE FICTIF NON CONFIRMÉ — des hypothèses pédagogiques héritées peuvent subsister ; ce ne sont jamais une moyenne ni un prix de marché.";

export const MVP_VIBE_CODE_FICTITIOUS_TCO: MvpVibeCodeTcoInput = {
  conserve: {
    oneOff: 10_000,
    monthly: 1_000,
    annual: 12_000,
    internalOneOffHours: 100,
    internalMonthlyHours: 10,
    internalHourlyRate: 50,
    doubleRunMonths: 0,
    doubleRunMonthly: 0,
    exit: 5_000,
  },
  stabilise: {
    oneOff: 25_000,
    monthly: 1_500,
    annual: 12_000,
    internalOneOffHours: 200,
    internalMonthlyHours: 10,
    internalHourlyRate: 50,
    doubleRunMonths: 2,
    doubleRunMonthly: 1_000,
    exit: 5_000,
  },
  migrate: {
    oneOff: 60_000,
    monthly: 1_800,
    annual: 12_000,
    internalOneOffHours: 300,
    internalMonthlyHours: 15,
    internalHourlyRate: 50,
    doubleRunMonths: 4,
    doubleRunMonthly: 2_000,
    exit: 6_000,
  },
  rewrite: {
    oneOff: 120_000,
    monthly: 2_000,
    annual: 18_000,
    internalOneOffHours: 600,
    internalMonthlyHours: 20,
    internalHourlyRate: 50,
    doubleRunMonths: 6,
    doubleRunMonthly: 2_000,
    exit: 8_000,
  },
  stop: {
    oneOff: 20_000,
    monthly: 200,
    annual: 2_400,
    internalOneOffHours: 100,
    internalMonthlyHours: 2,
    internalHourlyRate: 50,
    doubleRunMonths: 0,
    doubleRunMonthly: 0,
    exit: 10_000,
  },
};

export const MVP_VIBE_CODE_FICTITIOUS_OUTAGE: MvpVibeCodeOutageInput = {
  outageHours: 8,
  affectedPeople: 25,
  loadedHourlyCost: 42,
  lostContributionMargin: 3_600,
  catchUpCost: 2_000,
  providerCost: 1_000,
  communicationCost: 500,
  refundsPenalties: 500,
  annualProbabilityPercent: 25,
  probabilitySource: "Hypothèse fictive documentée pour le cas pédagogique",
  probabilityDate: MVP_VIBE_CODE_DEFAULT_AS_OF_DATE,
};

function emptyTrajectoryCost(): MvpVibeCodeTrajectoryCost {
  return {
    oneOff: null,
    monthly: null,
    annual: null,
    internalOneOffHours: null,
    internalMonthlyHours: null,
    internalHourlyRate: null,
    doubleRunMonths: null,
    doubleRunMonthly: null,
    exit: null,
  };
}

export function createEmptyMvpVibeCodeTco(): MvpVibeCodeTcoInput {
  return Object.fromEntries(
    MVP_VIBE_CODE_TRAJECTORY_IDS.map((id) => [id, emptyTrajectoryCost()]),
  ) as MvpVibeCodeTcoInput;
}

function numberToRaw(value: NullableNumber): string {
  return value === null ? "" : String(value);
}

function tcoToRaw(input: MvpVibeCodeTcoInput): MvpVibeCodeRawTcoInput {
  return Object.fromEntries(
    MVP_VIBE_CODE_TRAJECTORY_IDS.map((trajectoryId) => [
      trajectoryId,
      Object.fromEntries(
        MVP_VIBE_CODE_TCO_FIELDS.map((field) => [
          field.key,
          numberToRaw(input[trajectoryId][field.key]),
        ]),
      ),
    ]),
  ) as MvpVibeCodeRawTcoInput;
}

function outageToRaw(
  input: MvpVibeCodeOutageInput,
): MvpVibeCodeRawOutageInput {
  return {
    outageHours: numberToRaw(input.outageHours),
    affectedPeople: numberToRaw(input.affectedPeople),
    loadedHourlyCost: numberToRaw(input.loadedHourlyCost),
    lostContributionMargin: numberToRaw(input.lostContributionMargin),
    catchUpCost: numberToRaw(input.catchUpCost),
    providerCost: numberToRaw(input.providerCost),
    communicationCost: numberToRaw(input.communicationCost),
    refundsPenalties: numberToRaw(input.refundsPenalties),
    annualProbabilityPercent: numberToRaw(input.annualProbabilityPercent),
    probabilitySource: input.probabilitySource,
    probabilityDate: input.probabilityDate,
  };
}

export function createEmptyMvpVibeCodeProofs(): Record<
  string,
  MvpVibeCodeProofEntry
> {
  return Object.fromEntries(
    MVP_VIBE_CODE_REQUIRED_PROOFS.map((proof) => [
      proof.id,
      {
        status: "unknown",
        owner: "",
        checkedOn: "",
        evidenceRef: "",
        naRationale: "",
        naApprover: "",
      } satisfies MvpVibeCodeProofEntry,
    ]),
  );
}

export function createEmptyMvpVibeCodeTakeoverDossier(): MvpVibeCodeTakeoverDossier {
  const tco = createEmptyMvpVibeCodeTco();
  const outage: MvpVibeCodeOutageInput = {
    outageHours: null,
    affectedPeople: null,
    loadedHourlyCost: null,
    lostContributionMargin: null,
    catchUpCost: null,
    providerCost: null,
    communicationCost: null,
    refundsPenalties: null,
    annualProbabilityPercent: null,
    probabilitySource: "",
    probabilityDate: "",
  };
  return {
    isFictitiousExample: false,
    context: {
      reference: "",
      evaluationDate: "",
      commonScope: "",
      mode: "unknown",
    },
    proofs: createEmptyMvpVibeCodeProofs(),
    tco,
    outage,
    rawInputs: {
      tco: tcoToRaw(tco),
      outage: outageToRaw(outage),
    },
  };
}

function cloneTco(source: MvpVibeCodeTcoInput): MvpVibeCodeTcoInput {
  return Object.fromEntries(
    MVP_VIBE_CODE_TRAJECTORY_IDS.map((id) => [id, { ...source[id] }]),
  ) as MvpVibeCodeTcoInput;
}

export function createFictitiousMvpVibeCodeTakeoverDossier(): MvpVibeCodeTakeoverDossier {
  const tco = cloneTco(MVP_VIBE_CODE_FICTITIOUS_TCO);
  const outage = { ...MVP_VIBE_CODE_FICTITIOUS_OUTAGE };
  return {
    isFictitiousExample: true,
    context: {
      reference: "CAS-FICTIF-MVP-001",
      evaluationDate: MVP_VIBE_CODE_DEFAULT_AS_OF_DATE,
      commonScope:
        "Mêmes parcours, volumes, exigences de sécurité, continuité et obligations pour les cinq trajectoires.",
      mode: "normal",
    },
    proofs: Object.fromEntries(
      MVP_VIBE_CODE_REQUIRED_PROOFS.map((proof) => [
        proof.id,
        {
          status: "verified",
          owner: "Responsable fictif",
          checkedOn: MVP_VIBE_CODE_DEFAULT_AS_OF_DATE,
          evidenceRef: `PREUVE-FICTIVE-${proof.id.toUpperCase()}`,
          naRationale: "",
          naApprover: "",
        } satisfies MvpVibeCodeProofEntry,
      ]),
    ),
    tco,
    outage,
    rawInputs: {
      tco: tcoToRaw(tco),
      outage: outageToRaw(outage),
    },
  };
}

function isIsoDate(value: string): boolean {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value.trim());
  if (!match) return false;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const date = new Date(Date.UTC(year, month - 1, day));
  return (
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day
  );
}

function isAfter(left: string, right: string): boolean {
  return isIsoDate(left) && isIsoDate(right) && left > right;
}

function meaningful(value: string, minimumLength = 3): boolean {
  const normalized = value.trim();
  return (
    normalized.length >= minimumLength &&
    !/^(?:x+|\?+|-+|n\/?a|nd)$/i.test(normalized)
  );
}

function toScaledInteger(
  value: number,
  decimalPlaces = MVP_VIBE_CODE_MAX_DECIMAL_PLACES,
): bigint | null {
  if (!Number.isFinite(value) || value < 0) return null;
  const match = /^(\d+)(?:\.(\d+))?$/.exec(String(value));
  if (!match) return null;
  const fraction = match[2] ?? "";
  if (fraction.length > decimalPlaces) return null;
  const paddedFraction = fraction.padEnd(decimalPlaces, "0");
  return BigInt(`${match[1]}${paddedFraction}`);
}

function divideAndRound(numerator: bigint, denominator: bigint): bigint {
  return (numerator + denominator / BigInt(2)) / denominator;
}

function centsToSafeMoney(cents: bigint): number | null {
  const aggregateLimit =
    BigInt(MVP_VIBE_CODE_MAX_AGGREGATE_COST) * BigInt(100);
  if (cents < BigInt(0) || cents > aggregateLimit) return null;
  const totalCents = Number(cents);
  if (!Number.isSafeInteger(totalCents)) return null;
  return totalCents / 100;
}

function validNumber(
  value: NullableNumber,
  {
    maximum = MVP_VIBE_CODE_MAX_COST,
    positive = false,
    integer = false,
    maximumDecimals = integer ? 0 : MVP_VIBE_CODE_MAX_DECIMAL_PLACES,
  }: {
    maximum?: number;
    positive?: boolean;
    integer?: boolean;
    maximumDecimals?: number;
  } = {},
): value is number {
  return (
    typeof value === "number" &&
    Number.isFinite(value) &&
    value >= (positive ? Number.EPSILON : 0) &&
    value <= maximum &&
    (!integer || Number.isInteger(value)) &&
    toScaledInteger(value, maximumDecimals) !== null
  );
}

export function parseMvpVibeCodeDecimal(
  raw: string,
): MvpVibeCodeParsedNumber {
  const normalized = raw.trim();
  if (normalized === "") return { state: "empty", value: null };
  if (/^\d+[,.]$/.test(normalized)) {
    return { state: "intermediate", value: null };
  }
  if (!/^(?:\d+(?:[,.]\d+)?|[,.]\d+)$/.test(normalized)) {
    return { state: "invalid", value: null };
  }
  const value = Number(normalized.replace(",", "."));
  return Number.isFinite(value)
    ? { state: "valid", value }
    : { state: "invalid", value: null };
}

export function parseMvpVibeCodeInteger(
  raw: string,
): MvpVibeCodeParsedNumber {
  const parsed = parseMvpVibeCodeDecimal(raw);
  if (parsed.state !== "valid") return parsed;
  return Number.isInteger(parsed.value)
    ? parsed
    : { state: "invalid", value: null };
}

function emptyTotals(): MvpVibeCodeTcoEvaluation["totals"] {
  return Object.fromEntries(
    MVP_VIBE_CODE_TRAJECTORY_IDS.map((id) => [
      id,
      { 12: null, 36: null, 60: null },
    ]),
  ) as MvpVibeCodeTcoEvaluation["totals"];
}

export function calculateMvpVibeCodeTco(
  input: MvpVibeCodeTcoInput,
): MvpVibeCodeTcoEvaluation {
  const issues: MvpVibeCodeNumericIssue[] = [];
  const totals = emptyTotals();

  for (const trajectoryId of MVP_VIBE_CODE_TRAJECTORY_IDS) {
    const values = input[trajectoryId];
    let trajectoryValid = true;

    for (const field of MVP_VIBE_CODE_TCO_FIELDS) {
      const maximum =
        field.key === "doubleRunMonths"
          ? 60
          : field.key === "internalOneOffHours" ||
              field.key === "internalMonthlyHours"
            ? MVP_VIBE_CODE_MAX_HOURS
            : MVP_VIBE_CODE_MAX_COST;
      if (
        !validNumber(values[field.key], {
          maximum,
          integer: field.integer,
        })
      ) {
        trajectoryValid = false;
        issues.push({
          field: `tco.${trajectoryId}.${field.key}`,
          message: `${MVP_VIBE_CODE_TRAJECTORIES[trajectoryId].label} — ${field.label} doit être explicitement renseigné, positif ou nul, dans les bornes attendues${field.integer ? " et sans décimale" : " avec deux décimales au maximum"}.`,
        });
      }
    }

    if (!trajectoryValid) continue;

    const known = values as Record<MvpVibeCodeTcoField, number>;
    const oneOffCents = toScaledInteger(known.oneOff)!;
    const monthlyCents = toScaledInteger(known.monthly)!;
    const annualCents = toScaledInteger(known.annual)!;
    const internalOneOffHundredths = toScaledInteger(
      known.internalOneOffHours,
    )!;
    const internalMonthlyHundredths = toScaledInteger(
      known.internalMonthlyHours,
    )!;
    const internalHourlyCents = toScaledInteger(known.internalHourlyRate)!;
    const doubleRunMonthlyCents = toScaledInteger(known.doubleRunMonthly)!;
    const exitCents = toScaledInteger(known.exit)!;
    let aggregateValid = true;

    for (const horizon of MVP_VIBE_CODE_TCO_HORIZONS) {
      const horizonMonths = BigInt(horizon);
      const totalCents =
        oneOffCents +
        monthlyCents * horizonMonths +
        annualCents * BigInt(horizon / 12) +
        divideAndRound(
          internalOneOffHundredths * internalHourlyCents,
          BigInt(100),
        ) +
        divideAndRound(
          internalMonthlyHundredths *
            internalHourlyCents *
            horizonMonths,
          BigInt(100),
        ) +
        doubleRunMonthlyCents *
          BigInt(Math.min(known.doubleRunMonths, horizon)) +
        exitCents;
      const total = centsToSafeMoney(totalCents);

      if (total === null) {
        aggregateValid = false;
        issues.push({
          field: `tco.${trajectoryId}.aggregate.${horizon}`,
          message: `${MVP_VIBE_CODE_TRAJECTORIES[trajectoryId].label} — le total à ${horizon} mois dépasse le plafond agrégé prudent de ${MVP_VIBE_CODE_MAX_AGGREGATE_COST} EUR ou la précision sûre en centimes.`,
        });
      } else {
        totals[trajectoryId][horizon] = total;
      }
    }

    if (!aggregateValid) {
      for (const horizon of MVP_VIBE_CODE_TCO_HORIZONS) {
        totals[trajectoryId][horizon] = null;
      }
    }
  }

  const kind = issues.length === 0 ? "known" : "unknown";
  const cheapestByHorizon = {
    12: null,
    36: null,
    60: null,
  } as MvpVibeCodeTcoEvaluation["cheapestByHorizon"];

  if (kind === "known") {
    for (const horizon of MVP_VIBE_CODE_TCO_HORIZONS) {
      cheapestByHorizon[horizon] = MVP_VIBE_CODE_TRAJECTORY_IDS.reduce(
        (best, candidate) =>
          (totals[candidate][horizon] ?? Number.POSITIVE_INFINITY) <
          (totals[best][horizon] ?? Number.POSITIVE_INFINITY)
            ? candidate
            : best,
      );
    }
  }

  return { kind, issues, totals, cheapestByHorizon };
}

export function calculateMvpVibeCodeOutage(
  input: MvpVibeCodeOutageInput,
  temporalContext?: {
    evaluationDate?: string;
    asOfDate?: string;
  },
): MvpVibeCodeOutageEvaluation {
  const asOfDate =
    temporalContext?.asOfDate ?? MVP_VIBE_CODE_DEFAULT_AS_OF_DATE;
  const issues: MvpVibeCodeNumericIssue[] = [];
  const required: Array<{
    key: keyof Pick<
      MvpVibeCodeOutageInput,
      | "outageHours"
      | "affectedPeople"
      | "loadedHourlyCost"
      | "lostContributionMargin"
      | "catchUpCost"
      | "providerCost"
      | "communicationCost"
      | "refundsPenalties"
    >;
    maximum: number;
    positive?: boolean;
    integer?: boolean;
    label: string;
  }> = [
    {
      key: "outageHours",
      maximum: MVP_VIBE_CODE_MAX_HOURS,
      positive: true,
      label: "Durée de panne",
    },
    {
      key: "affectedPeople",
      maximum: MVP_VIBE_CODE_MAX_COUNT,
      positive: true,
      integer: true,
      label: "Personnes affectées",
    },
    {
      key: "loadedHourlyCost",
      maximum: MVP_VIBE_CODE_MAX_COST,
      label: "Coût horaire chargé",
    },
    {
      key: "lostContributionMargin",
      maximum: MVP_VIBE_CODE_MAX_COST,
      label: "Marge contributive définitivement perdue",
    },
    {
      key: "catchUpCost",
      maximum: MVP_VIBE_CODE_MAX_COST,
      label: "Rattrapage",
    },
    {
      key: "providerCost",
      maximum: MVP_VIBE_CODE_MAX_COST,
      label: "Prestataires",
    },
    {
      key: "communicationCost",
      maximum: MVP_VIBE_CODE_MAX_COST,
      label: "Communication",
    },
    {
      key: "refundsPenalties",
      maximum: MVP_VIBE_CODE_MAX_COST,
      label: "Remboursements et pénalités applicables",
    },
  ];

  for (const field of required) {
    if (
      !validNumber(input[field.key], {
        maximum: field.maximum,
        positive: field.positive,
        integer: field.integer,
      })
    ) {
      issues.push({
        field: `outage.${field.key}`,
        message: `${field.label} doit être explicitement renseigné${field.integer ? " sans décimale" : " avec deux décimales au maximum"}.`,
      });
    }
  }

  const observableInputsValid = issues.length === 0;
  let capacityCost: number | null = null;
  let observableCost: number | null = null;
  let observableCents: bigint | null = null;

  if (observableInputsValid) {
    const capacityCents = divideAndRound(
      toScaledInteger(input.outageHours as number)! *
        BigInt(input.affectedPeople as number) *
        toScaledInteger(input.loadedHourlyCost as number)!,
      BigInt(100),
    );
    observableCents =
      capacityCents +
      toScaledInteger(input.lostContributionMargin as number)! +
      toScaledInteger(input.catchUpCost as number)! +
      toScaledInteger(input.providerCost as number)! +
      toScaledInteger(input.communicationCost as number)! +
      toScaledInteger(input.refundsPenalties as number)!;
    capacityCost = centsToSafeMoney(capacityCents);
    observableCost = centsToSafeMoney(observableCents);
    if (capacityCost === null || observableCost === null) {
      capacityCost = null;
      observableCost = null;
      observableCents = null;
      issues.push({
        field: "outage.aggregate",
        message: `Le coût de panne dépasse le plafond agrégé prudent de ${MVP_VIBE_CODE_MAX_AGGREGATE_COST} EUR ou la précision sûre en centimes.`,
      });
    }
  }

  const probabilityProvided = input.annualProbabilityPercent !== null;
  const probabilityMetadataProvided =
    input.probabilitySource.trim() !== "" ||
    input.probabilityDate.trim() !== "";
  let probabilityKind: MvpVibeCodeOutageEvaluation["probabilityKind"] =
    "not-provided";
  let expectedAnnualCost: number | null = null;

  if (!probabilityProvided && probabilityMetadataProvided) {
    probabilityKind = "invalid";
    issues.push({
      field: "outage.annualProbabilityPercent",
      message:
        "Une source ou une date de probabilité est renseignée sans probabilité explicite.",
    });
  } else if (probabilityProvided) {
    const probabilityValid = validNumber(input.annualProbabilityPercent, {
      maximum: 100,
    });
    const sourceValid = meaningful(input.probabilitySource, 8);
    const dateValid = isIsoDate(input.probabilityDate);
    const dateAfterEvaluation =
      dateValid &&
      Boolean(temporalContext?.evaluationDate) &&
      isAfter(
        input.probabilityDate,
        temporalContext?.evaluationDate as string,
      );
    const dateAfterAsOf =
      dateValid &&
      isAfter(input.probabilityDate, asOfDate);

    if (!probabilityValid) {
      issues.push({
        field: "outage.annualProbabilityPercent",
        message: "La probabilité explicite doit être comprise entre 0 et 100.",
      });
    }
    if (!sourceValid) {
      issues.push({
        field: "outage.probabilitySource",
        message:
          "Une probabilité saisie exige une source ou hypothèse documentée.",
      });
    }
    if (!dateValid) {
      issues.push({
        field: "outage.probabilityDate",
        message: "Une probabilité saisie exige une date ISO valide.",
      });
    } else if (dateAfterEvaluation || dateAfterAsOf) {
      issues.push({
        field: "outage.probabilityDate",
        message:
          "La date de probabilité ne peut être postérieure ni à l’évaluation ni à la date de référence.",
      });
    }

    if (
      probabilityValid &&
      sourceValid &&
      dateValid &&
      !dateAfterEvaluation &&
      !dateAfterAsOf
    ) {
      probabilityKind = "known";
      if (observableCents !== null) {
        const probabilityHundredths = toScaledInteger(
          input.annualProbabilityPercent as number,
        )!;
        expectedAnnualCost = centsToSafeMoney(
          divideAndRound(
            observableCents * probabilityHundredths,
            BigInt(10_000),
          ),
        );
        if (expectedAnnualCost === null) {
          issues.push({
            field: "outage.expectedAnnualCost",
            message:
              "La perte annuelle attendue dépasse le plafond agrégé prudent ou la précision sûre en centimes.",
          });
        }
      }
    } else {
      probabilityKind = "invalid";
    }
  }

  return {
    kind: issues.length === 0 ? "known" : "unknown",
    probabilityKind,
    issues,
    capacityCost,
    observableCost,
    expectedAnnualCost,
  };
}

export function evaluateMvpVibeCodeProof(
  definition: MvpVibeCodeProofDefinition,
  entry: MvpVibeCodeProofEntry | undefined,
  temporalContext?: {
    evaluationDate?: string;
    asOfDate?: string;
  },
): MvpVibeCodeProofEvaluation {
  const asOfDate =
    temporalContext?.asOfDate ?? MVP_VIBE_CODE_DEFAULT_AS_OF_DATE;
  const safeEntry =
    entry ??
    ({
      status: "unknown",
      owner: "",
      checkedOn: "",
      evidenceRef: "",
      naRationale: "",
      naApprover: "",
    } satisfies MvpVibeCodeProofEntry);
  const reasons: string[] = [];

  if (safeEntry.status === "failed") {
    reasons.push("Le contrôle est déclaré en échec.");
    return {
      id: definition.id,
      severity: definition.severity,
      status: safeEntry.status,
      state: "failed",
      reasons,
    };
  }

  if (safeEntry.status === "NA") {
    if (!definition.allowsNa) {
      reasons.push("Ce domaine ne peut pas être écarté comme non applicable.");
    }
    if (!meaningful(safeEntry.naRationale, 8)) {
      reasons.push("La non-applicabilité exige une justification explicite.");
    }
    if (!meaningful(safeEntry.naApprover, 3)) {
      reasons.push("La non-applicabilité exige un approbateur identifié.");
    }
    return {
      id: definition.id,
      severity: definition.severity,
      status: safeEntry.status,
      state: reasons.length === 0 ? "resolved" : "invalid",
      reasons,
    };
  }

  if (safeEntry.status === "verified") {
    if (!meaningful(safeEntry.owner, 3)) {
      reasons.push("La preuve vérifiée exige un responsable.");
    }
    const checkedOnValid = isIsoDate(safeEntry.checkedOn);
    if (!checkedOnValid) {
      reasons.push("La preuve vérifiée exige une date ISO valide.");
    } else if (
      (temporalContext?.evaluationDate &&
        isAfter(safeEntry.checkedOn, temporalContext.evaluationDate)) ||
      isAfter(safeEntry.checkedOn, asOfDate)
    ) {
      reasons.push(
        "La date du contrôle ne peut être postérieure ni à l’évaluation ni à la date de référence.",
      );
    }
    if (!meaningful(safeEntry.evidenceRef, 6)) {
      reasons.push("La preuve vérifiée exige une référence contrôlable.");
    }
    return {
      id: definition.id,
      severity: definition.severity,
      status: safeEntry.status,
      state: reasons.length === 0 ? "resolved" : "unresolved",
      reasons,
    };
  }

  reasons.push(
    safeEntry.status === "declared"
      ? "Une déclaration ne constitue pas une preuve vérifiée."
      : "Le domaine n’est pas encore qualifié.",
  );
  return {
    id: definition.id,
    severity: definition.severity,
    status: safeEntry.status,
    state: "unresolved",
    reasons,
  };
}

function contextIssues(
  dossier: MvpVibeCodeTakeoverDossier,
  asOfDate: string,
): string[] {
  const issues: string[] = [];
  if (!meaningful(dossier.context.reference, 3)) {
    issues.push("La référence du dossier manque.");
  }
  const evaluationDateValid = isIsoDate(dossier.context.evaluationDate);
  if (!evaluationDateValid) {
    issues.push("La date d’évaluation ISO manque ou est invalide.");
  }
  if (!isIsoDate(asOfDate)) {
    issues.push("La date de référence injectée est invalide.");
  } else if (
    evaluationDateValid &&
    isAfter(dossier.context.evaluationDate, asOfDate)
  ) {
    issues.push(
      "La date d’évaluation ne peut pas être postérieure à la date de référence.",
    );
  }
  if (!meaningful(dossier.context.commonScope, 12)) {
    issues.push(
      "Le périmètre commun des cinq trajectoires doit être explicité.",
    );
  }
  return issues;
}

export function evaluateMvpVibeCodeTakeover(
  dossier: MvpVibeCodeTakeoverDossier,
  options: MvpVibeCodeEvaluationOptions = {},
): MvpVibeCodeTakeoverEvaluation {
  const asOfDate =
    options.asOfDate ?? MVP_VIBE_CODE_DEFAULT_AS_OF_DATE;
  const proofs = MVP_VIBE_CODE_REQUIRED_PROOFS.map((definition) =>
    evaluateMvpVibeCodeProof(definition, dossier.proofs[definition.id], {
      evaluationDate: dossier.context.evaluationDate,
      asOfDate,
    }),
  );
  const tco = calculateMvpVibeCodeTco(dossier.tco);
  const outage = calculateMvpVibeCodeOutage(dossier.outage, {
    evaluationDate: dossier.context.evaluationDate,
    asOfDate,
  });
  const context = contextIssues(dossier, asOfDate);
  const secretCandidateFields =
    findMvpVibeCodePotentialSecretFields(dossier);
  const reasons: string[] = [];
  const stopReasons: string[] = [];

  const stopModeMessage = STOP_MODE_MESSAGES[dossier.context.mode];
  if (stopModeMessage) stopReasons.push(stopModeMessage);

  const unsafeBlocking = proofs.filter(
    (proof) =>
      proof.severity === "blocking" &&
      (proof.state === "failed" ||
        (proof.status === "NA" && proof.state === "invalid")),
  );
  for (const proof of unsafeBlocking) {
    const label =
      MVP_VIBE_CODE_REQUIRED_PROOFS.find(
        (definition) => definition.id === proof.id,
      )?.label ?? proof.id;
    stopReasons.push(
      `STOP : le domaine bloquant « ${label} » est en échec ou écarté sans justification admissible.`,
    );
  }

  const blockingProofIds = proofs
    .filter(
      (proof) =>
        proof.severity === "blocking" && proof.state !== "resolved",
    )
    .map((proof) => proof.id);
  const unresolvedMajorProofIds = proofs
    .filter(
      (proof) => proof.severity === "major" && proof.state !== "resolved",
    )
    .map((proof) => proof.id);

  let stage: MvpVibeCodeDecisionStage;
  if (stopReasons.length > 0) {
    stage = "STOP";
    reasons.push(...stopReasons);
  } else if (
    dossier.context.mode !== "normal" ||
    context.length > 0 ||
    blockingProofIds.length > 0 ||
    tco.kind !== "known" ||
    outage.kind !== "known"
  ) {
    stage = "INCOMPLET";
    if (dossier.context.mode === "unknown") {
      reasons.push("La situation doit être qualifiée avant comparaison.");
    }
    reasons.push(...context);
    if (blockingProofIds.length > 0) {
      reasons.push(
        `${blockingProofIds.length} domaine(s) bloquant(s) restent non résolus.`,
      );
    }
    if (tco.kind !== "known") {
      reasons.push(
        "Les cinq TCO à 12, 36 et 60 mois ne sont pas encore calculables.",
      );
    }
    if (outage.kind !== "known") {
      reasons.push(
        "Le coût observable de panne contient une saisie manquante ou invalide.",
      );
    }
  } else if (unresolvedMajorProofIds.length > 0) {
    stage = "COMPARABLE";
    reasons.push(
      "Les options sont comparables à périmètre constant, avec des réserves majeures explicitement ouvertes.",
    );
  } else {
    stage = "DECISION_HUMAINE";
    reasons.push(
      "Les preuves et coûts sont structurés ; ils éclairent une décision humaine sans la remplacer.",
    );
  }

  const exportBlockReasons: string[] = [];
  if (dossier.isFictitiousExample) {
    exportBlockReasons.push(
      "La note finale reste verrouillée tant que toutes les valeurs fictives héritées ne sont pas explicitement confirmées comme remplacées.",
    );
    reasons.push(exportBlockReasons.at(-1)!);
  }
  if (secretCandidateFields.length > 0) {
    exportBlockReasons.push(
      "Export bloqué : au moins un candidat secret doit être supprimé et remplacé par une référence non sensible.",
    );
    reasons.push(exportBlockReasons.at(-1)!);
  }

  const stageAllowsFinal =
    stage === "COMPARABLE" || stage === "DECISION_HUMAINE";
  const hasPotentialSecrets = secretCandidateFields.length > 0;

  return {
    version: MVP_VIBE_CODE_TAKEOVER_VERSION,
    asOfDate,
    stage,
    label: MVP_VIBE_CODE_STAGE_LABELS[stage],
    reasons,
    contextIssues: context,
    proofEvaluations: proofs,
    blockingProofIds,
    unresolvedMajorProofIds,
    tco,
    outage,
    containsUnconfirmedFictitiousValues: dossier.isFictitiousExample,
    hasPotentialSecrets,
    secretCandidateFields,
    exportBlockReasons,
    canExportDraft: !hasPotentialSecrets,
    canExportFinal:
      stageAllowsFinal &&
      !dossier.isFictitiousExample &&
      !hasPotentialSecrets,
  };
}

const POTENTIAL_SECRET_PATTERNS: readonly RegExp[] = [
  /\bsk-(?:proj-)?[A-Za-z0-9_-]{10,}\b/gi,
  /\bsk_(?:live|test)_[A-Za-z0-9_-]{8,}\b/gi,
  /\b(?:sb_secret|service_role)[A-Za-z0-9_-]{6,}\b/gi,
  /\b(?:AKIA|ASIA)[A-Z0-9]{16}\b/g,
  /\bxox[baprs]-[A-Za-z0-9-]{10,}\b/gi,
  /\bgh[pousr]_[A-Za-z0-9]{20,}\b/gi,
  /\bgithub_pat_[A-Za-z0-9_]{20,}\b/gi,
  /\bBearer\s+[A-Za-z0-9._~+/-]{8,}\b/gi,
  /\beyJ[A-Za-z0-9_-]{5,}\.[A-Za-z0-9_-]{5,}\.[A-Za-z0-9_-]{5,}\b/g,
  /-----BEGIN(?: [A-Z]+)? PRIVATE KEY-----/gi,
  /\b(?:postgres(?:ql)?|mysql|mongodb(?:\+srv)?|redis):\/\/[^/\s:@]+:[^@\s/]+@/gi,
  /\b(?:password|passwd|pwd|api[_-]?key|access[_-]?token|refresh[_-]?token|secret|token)\s*[:=]\s*["']?[^\s;"']{8,}/gi,
];

export function containsMvpVibeCodePotentialSecret(value: string): boolean {
  return POTENTIAL_SECRET_PATTERNS.some((pattern) => {
    pattern.lastIndex = 0;
    return pattern.test(value);
  });
}

export function findMvpVibeCodePotentialSecretFields(
  dossier: MvpVibeCodeTakeoverDossier,
): string[] {
  const candidates: Array<[string, string]> = [
    ["context.reference", dossier.context.reference],
    ["context.commonScope", dossier.context.commonScope],
    ["outage.probabilitySource", dossier.outage.probabilitySource],
  ];

  for (const [proofId, proof] of Object.entries(dossier.proofs)) {
    for (const field of [
      "owner",
      "checkedOn",
      "evidenceRef",
      "naRationale",
      "naApprover",
    ] as const) {
      candidates.push([`proofs.${proofId}.${field}`, proof[field]]);
    }
  }

  if (dossier.rawInputs) {
    for (const trajectoryId of MVP_VIBE_CODE_TRAJECTORY_IDS) {
      for (const field of MVP_VIBE_CODE_TCO_FIELDS) {
        candidates.push([
          `rawInputs.tco.${trajectoryId}.${field.key}`,
          dossier.rawInputs.tco[trajectoryId][field.key],
        ]);
      }
    }
    for (const field of MVP_VIBE_CODE_OUTAGE_FIELDS) {
      candidates.push([
        `rawInputs.outage.${field.key}`,
        dossier.rawInputs.outage[field.key],
      ]);
    }
    candidates.push(
      [
        "rawInputs.outage.probabilitySource",
        dossier.rawInputs.outage.probabilitySource,
      ],
      [
        "rawInputs.outage.probabilityDate",
        dossier.rawInputs.outage.probabilityDate,
      ],
    );
  }

  return [
    ...new Set(
      candidates
        .filter(([, value]) => containsMvpVibeCodePotentialSecret(value))
        .map(([field]) => field),
    ),
  ];
}

function redactPotentialSecrets(value: string): string {
  return POTENTIAL_SECRET_PATTERNS.reduce((redacted, pattern) => {
    pattern.lastIndex = 0;
    return redacted.replace(pattern, "[CANDIDAT SECRET MASQUÉ]");
  }, value);
}

function safeText(value: unknown): string {
  if (value === null || value === undefined || value === "") return "ND";
  return redactPotentialSecrets(String(value).replace(/\r?\n/g, " ").trim());
}

function formatMoney(value: number | null): string {
  return value === null ? "ND" : `${value.toFixed(2)} EUR`;
}

export function buildMvpVibeCodeTakeoverSummary(
  dossier: MvpVibeCodeTakeoverDossier,
  evaluation = evaluateMvpVibeCodeTakeover(dossier),
): string {
  if (evaluation.hasPotentialSecrets) {
    return [
      "EXPORT BLOQUÉ — CANDIDAT SECRET DÉTECTÉ",
      "Supprimez toute valeur sensible et remplacez-la par une référence non secrète avant tout export.",
      `Champs à corriger : ${evaluation.secretCandidateFields.join(", ")}`,
      "La détection est une protection best effort : ne saisissez jamais de secret dans cet outil.",
    ].join("\n");
  }

  const lines = [
    evaluation.canExportFinal
      ? "NOTE COMPARATIVE — décision humaine requise"
      : "BROUILLON EXPORTABLE — dossier incomplet ou sous STOP",
    `Statut : ${evaluation.label}`,
    `Version du modèle : ${evaluation.version}`,
    `Date de référence : ${evaluation.asOfDate}`,
    dossier.isFictitiousExample ? FICTITIOUS_NOTE : "",
    `Référence : ${safeText(dossier.context.reference)}`,
    `Date : ${safeText(dossier.context.evaluationDate)}`,
    `Mode : ${dossier.context.mode}`,
    `Périmètre commun : ${safeText(dossier.context.commonScope)}`,
    "",
    "PREUVES",
    ...evaluation.proofEvaluations.map((proof) => {
      const definition = MVP_VIBE_CODE_REQUIRED_PROOFS.find(
        (candidate) => candidate.id === proof.id,
      );
      const entry = dossier.proofs[proof.id];
      return `${definition?.label ?? proof.id} | ${proof.severity} | statut ${proof.status} | état ${proof.state} | responsable ${safeText(entry?.owner)} | contrôle ${safeText(entry?.checkedOn)} | référence ${safeText(entry?.evidenceRef)} | justification NA ${safeText(entry?.naRationale)} | approbateur NA ${safeText(entry?.naApprover)}`;
    }),
    "",
    "TCO — coût uniquement, jamais recommandation",
  ];

  for (const trajectoryId of MVP_VIBE_CODE_TRAJECTORY_IDS) {
    lines.push(
      `${MVP_VIBE_CODE_TRAJECTORIES[trajectoryId].label} | 12 mois ${formatMoney(evaluation.tco.totals[trajectoryId][12])} | 36 mois ${formatMoney(evaluation.tco.totals[trajectoryId][36])} | 60 mois ${formatMoney(evaluation.tco.totals[trajectoryId][60])}`,
    );
  }

  lines.push(
    "",
    "PANNE OBSERVABLE",
    `Durée : ${safeText(dossier.outage.outageHours)} h | personnes : ${safeText(dossier.outage.affectedPeople)} | coût chargé : ${safeText(dossier.outage.loadedHourlyCost)} EUR/h`,
    `Marge perdue : ${safeText(dossier.outage.lostContributionMargin)} EUR | rattrapage : ${safeText(dossier.outage.catchUpCost)} EUR | prestataires : ${safeText(dossier.outage.providerCost)} EUR | communication : ${safeText(dossier.outage.communicationCost)} EUR | remboursements/pénalités : ${safeText(dossier.outage.refundsPenalties)} EUR`,
    `Capacité immobilisée : ${formatMoney(evaluation.outage.capacityCost)}`,
    `Coût observable : ${formatMoney(evaluation.outage.observableCost)}`,
    `Perte annuelle attendue : ${formatMoney(evaluation.outage.expectedAnnualCost)}`,
    evaluation.outage.probabilityKind === "not-provided"
      ? "Probabilité : non fournie ; aucune valeur implicite n’a été appliquée."
      : `Probabilité : ${safeText(dossier.outage.annualProbabilityPercent)} % | source ${safeText(dossier.outage.probabilitySource)} | date ${safeText(dossier.outage.probabilityDate)}`,
    "",
    "LIMITES ET MOTIFS",
    ...evaluation.reasons.map((reason) => `- ${reason}`),
    "",
    "Ce dossier ne certifie ni sécurité, ni conformité, ni propriété juridique. La détection de secrets est une protection best effort : ne saisissez jamais de secret.",
  );

  return lines.filter((line, index) => line !== "" || index > 0).join("\n");
}

export function buildMvpVibeCodeFinalDecisionNote(
  dossier: MvpVibeCodeTakeoverDossier,
  evaluation = evaluateMvpVibeCodeTakeover(dossier),
): string | null {
  if (!evaluation.canExportFinal) return null;
  return [
    "NOTE DE DÉCISION — COMPARAISON AUTORISÉE",
    buildMvpVibeCodeTakeoverSummary(dossier, evaluation),
    "",
    "La trajectoire la moins coûteuse n’est pas automatiquement la trajectoire recommandée.",
  ].join("\n");
}

function csvCell(value: unknown): string {
  let normalized = safeText(value);
  if (/^[=+\-@]/.test(normalized)) normalized = `'${normalized}`;
  return `"${normalized.replace(/"/g, '""')}"`;
}

function rawTcoValue(
  dossier: MvpVibeCodeTakeoverDossier,
  trajectoryId: MvpVibeCodeTrajectoryId,
  field: (typeof MVP_VIBE_CODE_TCO_FIELDS)[number],
): string {
  const interpreted = dossier.tco[trajectoryId][field.key];
  const candidate = dossier.rawInputs?.tco[trajectoryId][field.key];
  if (candidate === undefined) return numberToRaw(interpreted);
  const parsed = field.integer
    ? parseMvpVibeCodeInteger(candidate)
    : parseMvpVibeCodeDecimal(candidate);
  const candidateMatches =
    parsed.state === "valid"
      ? parsed.value === interpreted
      : interpreted === null;
  return candidateMatches ? candidate : numberToRaw(interpreted);
}

function rawOutageValue(
  dossier: MvpVibeCodeTakeoverDossier,
  field: (typeof MVP_VIBE_CODE_OUTAGE_FIELDS)[number],
): string {
  const interpreted = dossier.outage[field.key];
  const candidate = dossier.rawInputs?.outage[field.key];
  if (candidate === undefined) return numberToRaw(interpreted);
  const parsed = field.integer
    ? parseMvpVibeCodeInteger(candidate)
    : parseMvpVibeCodeDecimal(candidate);
  const candidateMatches =
    parsed.state === "valid"
      ? parsed.value === interpreted
      : interpreted === null;
  return candidateMatches ? candidate : numberToRaw(interpreted);
}

function numericExportState(
  raw: string,
  integer: boolean,
  hasIssue: boolean,
): string {
  const parsed = integer
    ? parseMvpVibeCodeInteger(raw)
    : parseMvpVibeCodeDecimal(raw);
  if (hasIssue && parsed.state === "valid") return "INVALID";
  return parsed.state.toUpperCase();
}

export function buildMvpVibeCodeTakeoverCsv(
  dossier: MvpVibeCodeTakeoverDossier,
  evaluation = evaluateMvpVibeCodeTakeover(dossier),
): string {
  if (evaluation.hasPotentialSecrets) {
    const blockedRows: unknown[][] = [
      [
        "TYPE",
        "ELEMENT",
        "CHAMP",
        "VALEUR_BRUTE",
        "VALEUR_INTERPRETEE",
        "UNITE",
        "ETAT",
        "NOTE",
      ],
      [
        "BLOCAGE",
        "dossier",
        "secret",
        "",
        "",
        "",
        "EXPORT_BLOQUE",
        "Supprimez les candidats secrets ; détection best effort.",
      ],
      ...evaluation.secretCandidateFields.map((field) => [
        "BLOCAGE",
        "dossier",
        field,
        "",
        "",
        "",
        "A_CORRIGER",
        "Valeur non exportée.",
      ]),
    ];
    return `\uFEFF${blockedRows
      .map((row) => row.map(csvCell).join(";"))
      .join("\r\n")}`;
  }

  const rows: unknown[][] = [
    [
      "TYPE",
      "ELEMENT",
      "CHAMP",
      "VALEUR_BRUTE",
      "VALEUR_INTERPRETEE",
      "UNITE",
      "ETAT",
      "NOTE",
    ],
    [
      "META",
      "dossier",
      "statut",
      evaluation.stage,
      evaluation.label,
      "",
      evaluation.stage,
      evaluation.canExportFinal
        ? "comparaison autorisée"
        : "BROUILLON INCOMPLET OU STOP",
    ],
    [
      "META",
      "dossier",
      "version",
      evaluation.version,
      evaluation.version,
      "",
      "FIGEE",
      "",
    ],
    [
      "META",
      "dossier",
      "date_reference",
      evaluation.asOfDate,
      evaluation.asOfDate,
      "",
      "FIGEE",
      "",
    ],
    [
      "META",
      "dossier",
      "provenance",
      dossier.isFictitiousExample
        ? "FICTIF_NON_CONFIRME"
        : "UTILISATEUR_CONFIRME",
      dossier.isFictitiousExample
        ? "FICTIF_NON_CONFIRME"
        : "UTILISATEUR_CONFIRME",
      "",
      dossier.isFictitiousExample ? "BLOQUE_NOTE_FINALE" : "CONFIRME",
      dossier.isFictitiousExample ? FICTITIOUS_NOTE : "",
    ],
    [
      "META",
      "dossier",
      "mode",
      dossier.context.mode,
      dossier.context.mode,
      "",
      "SAISI",
      "",
    ],
    [
      "META",
      "dossier",
      "reference",
      dossier.context.reference,
      dossier.context.reference,
      "",
      meaningful(dossier.context.reference, 3) ? "VALID" : "INVALID",
      "",
    ],
    [
      "META",
      "dossier",
      "date_evaluation",
      dossier.context.evaluationDate,
      dossier.context.evaluationDate,
      "",
      evaluation.contextIssues.some((issue) =>
        issue.toLowerCase().includes("date"),
      )
        ? "INVALID"
        : "VALID",
      "",
    ],
    [
      "META",
      "dossier",
      "perimetre",
      dossier.context.commonScope,
      dossier.context.commonScope,
      "",
      meaningful(dossier.context.commonScope, 12) ? "VALID" : "INVALID",
      "",
    ],
  ];

  for (const proof of evaluation.proofEvaluations) {
    const entry = dossier.proofs[proof.id];
    const proofFields: Array<
      [keyof MvpVibeCodeProofEntry, string | undefined]
    > = [
      ["status", entry?.status],
      ["owner", entry?.owner],
      ["checkedOn", entry?.checkedOn],
      ["evidenceRef", entry?.evidenceRef],
      ["naRationale", entry?.naRationale],
      ["naApprover", entry?.naApprover],
    ];
    for (const [field, value] of proofFields) {
      rows.push([
        "PREUVE",
        proof.id,
        field,
        value ?? "",
        value ?? "",
        "",
        proof.state,
        `${proof.severity} | ${proof.reasons.join(" | ")}`,
      ]);
    }
  }

  for (const trajectoryId of MVP_VIBE_CODE_TRAJECTORY_IDS) {
    for (const field of MVP_VIBE_CODE_TCO_FIELDS) {
      const path = `tco.${trajectoryId}.${field.key}`;
      const raw = rawTcoValue(dossier, trajectoryId, field);
      rows.push([
        "TCO_ENTREE",
        trajectoryId,
        field.key,
        raw,
        dossier.tco[trajectoryId][field.key],
        field.suffix,
        numericExportState(
          raw,
          field.integer,
          evaluation.tco.issues.some((issue) => issue.field === path),
        ),
        field.label,
      ]);
    }
    for (const horizon of MVP_VIBE_CODE_TCO_HORIZONS) {
      rows.push([
        "TCO_RESULTAT",
        trajectoryId,
        `${horizon}_mois`,
        evaluation.tco.totals[trajectoryId][horizon],
        evaluation.tco.totals[trajectoryId][horizon],
        "€",
        evaluation.tco.kind,
        "coût uniquement, pas recommandation",
      ]);
    }
  }

  for (const field of MVP_VIBE_CODE_OUTAGE_FIELDS) {
    const path = `outage.${field.key}`;
    const raw = rawOutageValue(dossier, field);
    rows.push([
      "PANNE_ENTREE",
      "observable",
      field.key,
      raw,
      dossier.outage[field.key],
      field.suffix,
      numericExportState(
        raw,
        field.integer,
        evaluation.outage.issues.some((issue) => issue.field === path),
      ),
      field.label,
    ]);
  }
  for (const field of ["probabilitySource", "probabilityDate"] as const) {
    const value = dossier.outage[field];
    rows.push([
      "PANNE_ENTREE",
      "probabilite",
      field,
      value,
      value,
      "",
      evaluation.outage.issues.some(
        (issue) => issue.field === `outage.${field}`,
      )
        ? "INVALID"
        : value
          ? "VALID"
          : "EMPTY",
      "",
    ]);
  }

  rows.push(
    [
      "PANNE_RESULTAT",
      "observable",
      "capacite",
      evaluation.outage.capacityCost,
      evaluation.outage.capacityCost,
      "€",
      evaluation.outage.kind,
      "capacité immobilisée",
    ],
    [
      "PANNE_RESULTAT",
      "observable",
      "cout_observable",
      evaluation.outage.observableCost,
      evaluation.outage.observableCost,
      "€",
      evaluation.outage.kind,
      "hors réputation et churn non documentés",
    ],
    [
      "PANNE_RESULTAT",
      "annuel_attendu",
      "cout",
      evaluation.outage.expectedAnnualCost,
      evaluation.outage.expectedAnnualCost,
      "€",
      evaluation.outage.probabilityKind,
      "ND si probabilité non fournie",
    ],
  );

  for (const reason of evaluation.reasons) {
    rows.push([
      "MOTIF",
      "dossier",
      "raison",
      reason,
      reason,
      "",
      evaluation.stage,
      "",
    ]);
  }

  return `\uFEFF${rows.map((row) => row.map(csvCell).join(";")).join("\r\n")}`;
}
