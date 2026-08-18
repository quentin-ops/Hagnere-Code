import proofDefinitions from "./business-software-need-proofs.json";

export const BUSINESS_SOFTWARE_NEED_VERSION =
  "business-software-need-r2-2026-07-28";
export const BUSINESS_SOFTWARE_NEED_SCHEMA_VERSION = 2;
export const BUSINESS_SOFTWARE_NEED_AS_OF = "2026-07-28";

export const BUSINESS_SOFTWARE_PROOF_IDS = [
  "three-events",
  "users-rules",
  "current-tool-test",
  "standard-options",
  "data-integrations",
  "security-continuity",
  "tco-adoption",
  "exit-accessibility",
] as const;

export const BUSINESS_SOFTWARE_PILOT_GATE_IDS = [
  "pilot-j1-j5",
  "pilot-j6-j10",
  "pilot-j11-j20",
  "pilot-j21-j25",
  "pilot-j26-j30",
  "pilot-followup-30",
  "pilot-followup-90",
] as const;

export type BusinessSoftwareProofId =
  (typeof BUSINESS_SOFTWARE_PROOF_IDS)[number];
export type BusinessSoftwarePilotGateId =
  (typeof BUSINESS_SOFTWARE_PILOT_GATE_IDS)[number];
export const BUSINESS_SOFTWARE_PROOF_LABELS = Object.freeze(
  Object.fromEntries(
    proofDefinitions.map(({ id, label }) => [id, label]),
  ) as Record<BusinessSoftwareProofId, string>,
);
export const BUSINESS_SOFTWARE_PILOT_GATE_LABELS: Record<
  BusinessSoftwarePilotGateId,
  string
> = Object.freeze({
  "pilot-j1-j5": "J1–J5 — cadrage et sécurité",
  "pilot-j6-j10": "J6–J10 — données et cas limites",
  "pilot-j11-j20": "J11–J20 — usages réels bornés",
  "pilot-j21-j25": "J21–J25 — robustesse et accessibilité",
  "pilot-j26-j30": "J26–J30 — arbitrage du pilote",
  "pilot-followup-30": "Suivi +30 jours après le pilote",
  "pilot-followup-90": "Suivi +90 jours après le pilote",
});
export type ProofStatus = "ND" | "DECLARE" | "VERIFIE" | "ECHEC";
export type TriState = "ND" | "OUI" | "NON";
export type NullableNumber = number | null;
export type ConsequenceLevel = "ND" | "FAIBLE" | "SIGNIFICATIVE" | "CRITIQUE";
export type RuleStability = "ND" | "CHANGEANTE" | "ASSEZ_STABLE" | "STABLE";
export type CurrentToolFinding =
  | "ND"
  | "NON_TESTE"
  | "FONCTIONNE_APRES_CORRECTION"
  | "DEFAILLANT"
  | "ECART_CONFIRME";
export type StandardTrialFinding =
  | "ND"
  | "NON_EXAMINE"
  | "COUVRE"
  | "COUVRE_PARTIELLEMENT"
  | "ECHEC_CAS_CRITIQUE";
export type CandidateAction =
  | "SECURISER"
  | "CORRIGER_STANDARDISER"
  | "INTEGRER_AUTOMATISER"
  | "ACHETER_CONFIGURER"
  | "ETUDIER_SUR_MESURE"
  | "OBSERVER";
export type DecisionState =
  | "SECURISER_D_ABORD"
  | "INCOMPLET"
  | "OBSERVER"
  | "CORRIGER_STANDARDISER"
  | "COMPARER_PILOTER"
  | "DECISION_HUMAINE";

export interface BusinessSoftwareProof {
  status: ProofStatus;
  evidenceRef: string;
  owner: string;
  verifiedOn: string;
}

export interface ObservedSituation {
  id: string;
  title: string;
  observedOn: string;
  evidenceRef: string;
  realSituationConfirmed: boolean;
  frequencyPerMonth: NullableNumber;
  activeMinutesPerOccurrence: NullableNumber;
  correctionMinutesPerOccurrence: NullableNumber;
  waitMinutesPerOccurrence: NullableNumber;
  consequence: ConsequenceLevel;
  ruleStability: RuleStability;
  currentToolFinding: CurrentToolFinding;
  repeatedManualTransfer: TriState;
  standardTrialFinding: StandardTrialFinding;
  ownerAndFallbackDocumented: TriState;
  businessDifferentiator: TriState;
}

export interface SafetyGate {
  activeIncidentOrExposure: TriState;
  restorableBackupProved: TriState;
  privilegedAccessControlled: TriState;
  criticalManualFallbackTested: TriState;
}

export interface OptionCost {
  id: string;
  label: string;
  action: Exclude<CandidateAction, "SECURISER" | "OBSERVER">;
  realOptionConfirmed: boolean;
  samePerimeterConfirmed: TriState;
  criticalCasesReplayed: TriState;
  initialCost: NullableNumber;
  monthlyRunCost: NullableNumber;
  exitCost: NullableNumber;
}

export interface PilotGate {
  id: BusinessSoftwarePilotGateId;
  casePopulation: string;
  baseline: string;
  stopCriterion: string;
  continueCriterion: string;
  rollbackPlan: string;
  owner: string;
  reviewOn: string;
  realGateConfirmed: boolean;
}

export interface BusinessSoftwareNeedDossier {
  version: typeof BUSINESS_SOFTWARE_NEED_VERSION;
  provenance: "EXEMPLE_FICTIF" | "DONNEES_REELLES";
  realDataConfirmed: boolean;
  asOfDate: string;
  sponsor: string;
  processOwner: string;
  situations: ObservedSituation[];
  safety: SafetyGate;
  proofs: Record<BusinessSoftwareProofId, BusinessSoftwareProof>;
  options: OptionCost[];
  pilotGates: PilotGate[];
  expiresOn: string;
  humanDecisionConfirmed: boolean;
  reviewer: string;
  reviewedOn: string;
}

export interface SituationAssessment {
  id: string;
  action: CandidateAction | null;
  annualOccurrences: number | null;
  annualActiveAndCorrectionHours: number | null;
  annualWaitHours: number | null;
  issues: string[];
}

export interface OptionTco {
  id: string;
  label: string;
  action: OptionCost["action"];
  tco12: number | null;
  tco36: number | null;
  tco60: number | null;
  issues: string[];
}

export interface BusinessSoftwareNeedDecision {
  state: DecisionState;
  finalExportAllowed: boolean;
  invalidFields: string[];
  missingEvidence: string[];
  stopReasons: string[];
  blockedReasons: string[];
  eligibleActions: CandidateAction[];
  nextTest: string;
  situations: SituationAssessment[];
  options: OptionTco[];
}

const MAX_COUNT = 1_000_000;
const MAX_MINUTES = 1_000_000;
const MAX_MONEY = 10_000_000_000;
const MIN_LOCAL_DATE = "2000-01-01";
const STRICT_LOCAL_DATE = /^\d{4}-\d{2}-\d{2}$/;

const ACTION_LABELS: Record<CandidateAction, string> = {
  SECURISER: "Sécuriser avant tout projet",
  CORRIGER_STANDARDISER: "Corriger ou standardiser l’existant",
  INTEGRER_AUTOMATISER: "Intégrer ou automatiser un passage borné",
  ACHETER_CONFIGURER: "Acheter et configurer une solution standard",
  ETUDIER_SUR_MESURE: "Étudier une fonction sur mesure",
  OBSERVER: "Observer avec une date de réexamen",
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function containsFixtureMarker(value: unknown): boolean {
  return typeof value === "string" && /(?:exemple|ficti|fixture)/iu.test(value);
}

function decimalPlaces(value: number): number {
  const [coefficient, exponentText] = String(value).toLowerCase().split("e");
  const exponent = exponentText === undefined ? 0 : Number(exponentText);
  return Math.max(0, (coefficient.split(".")[1] ?? "").length - exponent);
}

function validNumber(value: unknown, maximum: number): value is number {
  return (
    typeof value === "number" &&
    Number.isFinite(value) &&
    value >= 0 &&
    value <= maximum &&
    decimalPlaces(value) <= 4
  );
}

function validLocalDate(value: unknown, allowEmpty = false): value is string {
  if (allowEmpty && value === "") return true;
  if (typeof value !== "string" || !STRICT_LOCAL_DATE.test(value)) return false;
  if (value < MIN_LOCAL_DATE) return false;
  const [year, month, day] = value.split("-").map(Number);
  const probe = new Date(Date.UTC(year, month - 1, day));
  return (
    probe.getUTCFullYear() === year &&
    probe.getUTCMonth() === month - 1 &&
    probe.getUTCDate() === day
  );
}

function currentLocalIsoDate(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function addLocalDays(value: string, days: number): string | null {
  if (!validLocalDate(value)) return null;
  const [year, month, day] = value.split("-").map(Number);
  const probe = new Date(Date.UTC(year, month - 1, day + days));
  return [
    probe.getUTCFullYear(),
    String(probe.getUTCMonth() + 1).padStart(2, "0"),
    String(probe.getUTCDate()).padStart(2, "0"),
  ].join("-");
}

function denseUniqueIds(
  items: unknown,
  prefix: string,
  invalidFields: string[],
  exactLength?: number,
): items is Array<Record<string, unknown>> {
  if (!Array.isArray(items)) {
    invalidFields.push(prefix);
    return false;
  }
  if (exactLength !== undefined && items.length !== exactLength) {
    invalidFields.push(`${prefix}.length`);
  }
  for (let index = 0; index < items.length; index += 1) {
    if (!(index in items) || !isRecord(items[index])) {
      invalidFields.push(`${prefix}.${index}`);
    }
  }
  const ids = items.map((item) =>
    isRecord(item) && typeof item.id === "string"
      ? item.id.trim().toLocaleLowerCase("fr-FR")
      : "",
  );
  if (ids.some((id) => id.length === 0)) invalidFields.push(`${prefix}.id`);
  if (new Set(ids).size !== ids.length)
    invalidFields.push(`${prefix}.id:duplicate`);
  return invalidFields.every(
    (field) => !field.startsWith(prefix) || field === `${prefix}.length`,
  );
}

function round2(value: number): number {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

function validateSituation(
  raw: unknown,
  index: number,
  dossierDate: string | null,
): { situation: ObservedSituation | null; issues: string[] } {
  const base = `situations.${index}`;
  const issues: string[] = [];
  if (!isRecord(raw)) return { situation: null, issues: [base] };

  const textFields = {
    id: 3,
    title: 10,
    evidenceRef: 6,
  } as const;
  for (const [field, minimum] of Object.entries(textFields)) {
    if (typeof raw[field] !== "string" || raw[field].trim().length < minimum) {
      issues.push(`${base}.${field}`);
    }
  }
  if (
    !validLocalDate(raw.observedOn) ||
    (dossierDate !== null &&
      typeof raw.observedOn === "string" &&
      raw.observedOn > dossierDate)
  ) {
    issues.push(`${base}.observedOn`);
  }
  if (typeof raw.realSituationConfirmed !== "boolean") {
    issues.push(`${base}.realSituationConfirmed`);
  }

  const numberLimits = {
    frequencyPerMonth: MAX_COUNT,
    activeMinutesPerOccurrence: MAX_MINUTES,
    correctionMinutesPerOccurrence: MAX_MINUTES,
    waitMinutesPerOccurrence: MAX_MINUTES,
  } as const;
  for (const [field, maximum] of Object.entries(numberLimits)) {
    if (!validNumber(raw[field], maximum)) issues.push(`${base}.${field}`);
  }

  const enums: Array<[string, readonly string[]]> = [
    ["consequence", ["ND", "FAIBLE", "SIGNIFICATIVE", "CRITIQUE"]],
    ["ruleStability", ["ND", "CHANGEANTE", "ASSEZ_STABLE", "STABLE"]],
    [
      "currentToolFinding",
      [
        "ND",
        "NON_TESTE",
        "FONCTIONNE_APRES_CORRECTION",
        "DEFAILLANT",
        "ECART_CONFIRME",
      ],
    ],
    ["repeatedManualTransfer", ["ND", "OUI", "NON"]],
    [
      "standardTrialFinding",
      [
        "ND",
        "NON_EXAMINE",
        "COUVRE",
        "COUVRE_PARTIELLEMENT",
        "ECHEC_CAS_CRITIQUE",
      ],
    ],
    ["ownerAndFallbackDocumented", ["ND", "OUI", "NON"]],
    ["businessDifferentiator", ["ND", "OUI", "NON"]],
  ];
  for (const [field, values] of enums) {
    if (!values.includes(String(raw[field]))) issues.push(`${base}.${field}`);
  }

  return {
    situation:
      issues.length === 0 ? (raw as unknown as ObservedSituation) : null,
    issues,
  };
}

function assessSituation(situation: ObservedSituation): SituationAssessment {
  const issues: string[] = [];
  for (const field of [
    "consequence",
    "ruleStability",
    "currentToolFinding",
    "repeatedManualTransfer",
    "standardTrialFinding",
    "ownerAndFallbackDocumented",
    "businessDifferentiator",
  ] as const) {
    if (situation[field] === "ND") issues.push(field);
  }
  const annualOccurrences = round2(situation.frequencyPerMonth! * 12);
  const annualActiveAndCorrectionHours = round2(
    (situation.frequencyPerMonth! *
      12 *
      (situation.activeMinutesPerOccurrence! +
        situation.correctionMinutesPerOccurrence!)) /
      60,
  );
  const annualWaitHours = round2(
    (situation.frequencyPerMonth! * 12 * situation.waitMinutesPerOccurrence!) /
      60,
  );
  const observationFirst =
    situation.ruleStability === "CHANGEANTE" ||
    (situation.consequence === "FAIBLE" && annualActiveAndCorrectionHours < 1);
  if (!observationFirst && situation.currentToolFinding === "NON_TESTE") {
    issues.push("currentToolFinding:not_tested");
  }
  if (!observationFirst && situation.standardTrialFinding === "NON_EXAMINE") {
    issues.push("standardTrialFinding:not_examined");
  }

  let action: CandidateAction | null = null;
  if (issues.length === 0) {
    if (observationFirst) {
      action = "OBSERVER";
    } else if (situation.currentToolFinding === "FONCTIONNE_APRES_CORRECTION") {
      action = "CORRIGER_STANDARDISER";
    } else if (situation.repeatedManualTransfer === "OUI") {
      action = "INTEGRER_AUTOMATISER";
    } else if (
      situation.standardTrialFinding === "COUVRE" ||
      situation.standardTrialFinding === "COUVRE_PARTIELLEMENT"
    ) {
      action = "ACHETER_CONFIGURER";
    } else if (
      situation.standardTrialFinding === "ECHEC_CAS_CRITIQUE" &&
      (situation.ruleStability === "STABLE" ||
        situation.ruleStability === "ASSEZ_STABLE") &&
      (situation.consequence === "SIGNIFICATIVE" ||
        situation.consequence === "CRITIQUE") &&
      situation.ownerAndFallbackDocumented === "OUI" &&
      situation.businessDifferentiator === "OUI"
    ) {
      action = "ETUDIER_SUR_MESURE";
    } else {
      action = "OBSERVER";
    }
  }

  return {
    id: situation.id,
    action,
    annualOccurrences,
    annualActiveAndCorrectionHours,
    annualWaitHours,
    issues,
  };
}

function evaluateOption(
  raw: unknown,
  index: number,
): { option: OptionTco; invalid: string[] } {
  const base = `options.${index}`;
  const invalid: string[] = [];
  if (!isRecord(raw)) {
    return {
      option: {
        id: "",
        label: "",
        action: "CORRIGER_STANDARDISER",
        tco12: null,
        tco36: null,
        tco60: null,
        issues: [base],
      },
      invalid: [base],
    };
  }
  if (typeof raw.id !== "string" || raw.id.trim().length < 3) {
    invalid.push(`${base}.id`);
  } else if (containsFixtureMarker(raw.id)) {
    invalid.push(`${base}.id:fixture`);
  }
  if (typeof raw.label !== "string" || raw.label.trim().length < 3) {
    invalid.push(`${base}.label`);
  } else if (containsFixtureMarker(raw.label)) {
    invalid.push(`${base}.label:fixture`);
  }
  if (typeof raw.realOptionConfirmed !== "boolean") {
    invalid.push(`${base}.realOptionConfirmed`);
  }
  const actions = [
    "CORRIGER_STANDARDISER",
    "INTEGRER_AUTOMATISER",
    "ACHETER_CONFIGURER",
    "ETUDIER_SUR_MESURE",
  ];
  if (!actions.includes(String(raw.action))) invalid.push(`${base}.action`);
  for (const field of ["samePerimeterConfirmed", "criticalCasesReplayed"]) {
    if (!["ND", "OUI", "NON"].includes(String(raw[field]))) {
      invalid.push(`${base}.${field}`);
    }
  }
  for (const field of ["initialCost", "monthlyRunCost", "exitCost"]) {
    if (raw[field] !== null && !validNumber(raw[field], MAX_MONEY)) {
      invalid.push(`${base}.${field}`);
    }
  }
  const issues: string[] = [];
  if (raw.samePerimeterConfirmed !== "OUI") issues.push("périmètre comparable");
  if (raw.criticalCasesReplayed !== "OUI")
    issues.push("cas critiques non rejoués");
  for (const field of ["initialCost", "monthlyRunCost", "exitCost"] as const) {
    if (raw[field] === null) issues.push(`${field} inconnu`);
  }
  const canCompute = invalid.length === 0 && issues.length === 0;
  const tco = (months: number) =>
    canCompute
      ? round2(
          (raw.initialCost as number) +
            (raw.monthlyRunCost as number) * months +
            (raw.exitCost as number),
        )
      : null;
  return {
    option: {
      id: typeof raw.id === "string" ? raw.id : "",
      label: typeof raw.label === "string" ? raw.label : "",
      action: actions.includes(String(raw.action))
        ? (raw.action as OptionCost["action"])
        : "CORRIGER_STANDARDISER",
      tco12: tco(12),
      tco36: tco(36),
      tco60: tco(60),
      issues,
    },
    invalid,
  };
}

export function evaluateBusinessSoftwareNeed(
  dossier: BusinessSoftwareNeedDossier,
): BusinessSoftwareNeedDecision {
  const invalidFields: string[] = [];
  const missingEvidence: string[] = [];
  const stopReasons: string[] = [];
  const blockedReasons: string[] = [];

  if (!isRecord(dossier)) invalidFields.push("dossier");
  if (dossier?.version !== BUSINESS_SOFTWARE_NEED_VERSION) {
    invalidFields.push("version");
  }
  if (!["EXEMPLE_FICTIF", "DONNEES_REELLES"].includes(dossier?.provenance)) {
    invalidFields.push("provenance");
  }
  if (typeof dossier?.realDataConfirmed !== "boolean") {
    invalidFields.push("realDataConfirmed");
  }
  if (typeof dossier?.humanDecisionConfirmed !== "boolean") {
    invalidFields.push("humanDecisionConfirmed");
  }
  if (
    !validLocalDate(dossier?.asOfDate) ||
    dossier.asOfDate > currentLocalIsoDate()
  ) {
    invalidFields.push("asOfDate");
  }
  if (!isRecord(dossier?.safety)) invalidFields.push("safety");
  if (!isRecord(dossier?.proofs)) invalidFields.push("proofs");

  denseUniqueIds(dossier?.situations, "situations", invalidFields, 3);
  if (Array.isArray(dossier?.situations)) {
    const evidenceRefs = dossier.situations.map((situation) =>
      isRecord(situation) && typeof situation.evidenceRef === "string"
        ? situation.evidenceRef.trim().toLocaleLowerCase("fr-FR")
        : "",
    );
    if (
      evidenceRefs.every((reference) => reference.length > 0) &&
      new Set(evidenceRefs).size !== evidenceRefs.length
    ) {
      invalidFields.push("situations.evidenceRef:duplicate");
    }
    const titles = dossier.situations.map((situation) =>
      isRecord(situation) && typeof situation.title === "string"
        ? situation.title.trim().toLocaleLowerCase("fr-FR")
        : "",
    );
    if (
      titles.every((title) => title.length > 0) &&
      new Set(titles).size !== titles.length
    ) {
      invalidFields.push("situations.title:duplicate");
    }
  }
  const situations = Array.isArray(dossier?.situations)
    ? Array.from({ length: dossier.situations.length }, (_, index) => {
        const raw = dossier.situations[index];
        const validation = validateSituation(
          raw,
          index,
          validLocalDate(dossier?.asOfDate) ? dossier.asOfDate : null,
        );
        invalidFields.push(...validation.issues);
        return validation.situation
          ? assessSituation(validation.situation)
          : {
              id: isRecord(raw) && typeof raw.id === "string" ? raw.id : "",
              action: null,
              annualOccurrences: null,
              annualActiveAndCorrectionHours: null,
              annualWaitHours: null,
              issues: validation.issues,
            };
      })
    : [];

  denseUniqueIds(dossier?.options, "options", invalidFields);
  if (
    Array.isArray(dossier?.options) &&
    (dossier.options.length < 2 || dossier.options.length > 6)
  ) {
    invalidFields.push("options.length");
  }
  if (Array.isArray(dossier?.options)) {
    const labels = dossier.options.map((option) =>
      isRecord(option) && typeof option.label === "string"
        ? option.label.trim().toLocaleLowerCase("fr-FR")
        : "",
    );
    if (
      labels.every((label) => label.length > 0) &&
      new Set(labels).size !== labels.length
    ) {
      invalidFields.push("options.label:duplicate");
    }
  }
  const options = Array.isArray(dossier?.options)
    ? Array.from({ length: dossier.options.length }, (_, index) => {
        const raw = dossier.options[index];
        const evaluated = evaluateOption(raw, index);
        invalidFields.push(...evaluated.invalid);
        return evaluated.option;
      })
    : [];

  denseUniqueIds(dossier?.pilotGates, "pilotGates", invalidFields, 7);
  if (Array.isArray(dossier?.pilotGates)) {
    const pilotDates: string[] = [];
    dossier.pilotGates.forEach((gate, index) => {
      const base = `pilotGates.${index}`;
      const expectedId = BUSINESS_SOFTWARE_PILOT_GATE_IDS[index];
      const gateLabel = expectedId
        ? BUSINESS_SOFTWARE_PILOT_GATE_LABELS[expectedId]
        : `Jalon pilote ${index + 1}`;
      if (!isRecord(gate)) return;
      if (gate.id !== expectedId) {
        invalidFields.push(`${base}.id`);
      }
      for (const field of [
        "casePopulation",
        "baseline",
        "stopCriterion",
        "continueCriterion",
        "rollbackPlan",
        "owner",
      ] as const) {
        const value = gate[field];
        if (typeof value !== "string") {
          invalidFields.push(`${base}.${field}`);
        } else if (value.trim().length < 3 || containsFixtureMarker(value)) {
          missingEvidence.push(`${gateLabel} : ${field} réel absent`);
        }
      }
      if (typeof gate.realGateConfirmed !== "boolean") {
        invalidFields.push(`${base}.realGateConfirmed`);
      } else if (!gate.realGateConfirmed) {
        missingEvidence.push(
          `${gateLabel} : remplacement du jalon fictif non confirmé`,
        );
      }
      if (gate.reviewOn === "") {
        missingEvidence.push(`${gateLabel} : date de revue absente`);
      } else if (!validLocalDate(gate.reviewOn)) {
        invalidFields.push(`${base}.reviewOn`);
      } else {
        pilotDates.push(gate.reviewOn);
        if (
          validLocalDate(dossier?.asOfDate) &&
          gate.reviewOn <= dossier.asOfDate
        ) {
          missingEvidence.push(
            `${gateLabel} : date non postérieure à l’arrêté`,
          );
        }
      }
    });

    if (
      pilotDates.length === BUSINESS_SOFTWARE_PILOT_GATE_IDS.length &&
      (new Set(pilotDates).size !== pilotDates.length ||
        pilotDates.some(
          (date, index) => index > 0 && date <= pilotDates[index - 1],
        ))
    ) {
      missingEvidence.push(
        "Les sept dates du pilote doivent être distinctes et strictement croissantes",
      );
    }
    const pilotEnd = dossier.pilotGates[4]?.reviewOn;
    const followUp30 = dossier.pilotGates[5]?.reviewOn;
    const followUp90 = dossier.pilotGates[6]?.reviewOn;
    if (
      validLocalDate(pilotEnd) &&
      validLocalDate(followUp30) &&
      followUp30 !== addLocalDays(pilotEnd, 30)
    ) {
      missingEvidence.push(
        "Le suivi +30 doit être daté exactement 30 jours après la fin du pilote",
      );
    }
    if (
      validLocalDate(pilotEnd) &&
      validLocalDate(followUp90) &&
      followUp90 !== addLocalDays(pilotEnd, 90)
    ) {
      missingEvidence.push(
        "Le suivi +90 doit être daté exactement 90 jours après la fin du pilote",
      );
    }
  }
  if (dossier?.expiresOn === "") {
    missingEvidence.push("La date d’expiration de la décision est absente");
  } else if (!validLocalDate(dossier?.expiresOn)) {
    invalidFields.push("expiresOn");
  } else {
    if (
      dossier.expiresOn <= currentLocalIsoDate() ||
      (validLocalDate(dossier?.asOfDate) &&
        dossier.expiresOn <= dossier.asOfDate)
    ) {
      missingEvidence.push(
        "La décision doit expirer après aujourd’hui et après son arrêté",
      );
    }
    const lastPilotReview = dossier?.pilotGates?.[6]?.reviewOn;
    if (
      validLocalDate(lastPilotReview) &&
      dossier.expiresOn < lastPilotReview
    ) {
      missingEvidence.push("La décision expire avant le suivi +90 du pilote");
    }
  }

  const safetyEntries: Array<[keyof SafetyGate, string]> = [
    ["activeIncidentOrExposure", "incident ou exposition active"],
    ["restorableBackupProved", "restauration non prouvée"],
    ["privilegedAccessControlled", "accès privilégiés non maîtrisés"],
    ["criticalManualFallbackTested", "mode dégradé critique non testé"],
  ];
  if (isRecord(dossier?.safety)) {
    for (const [field, label] of safetyEntries) {
      const value = dossier.safety[field];
      if (!["ND", "OUI", "NON"].includes(String(value))) {
        invalidFields.push(`safety.${field}`);
      } else if (value === "ND") {
        missingEvidence.push(`Sécurité : ${label}`);
      }
    }
    if (dossier.safety.activeIncidentOrExposure === "OUI") {
      stopReasons.push("Incident, fuite ou exposition potentiellement active");
    }
    if (dossier.safety.restorableBackupProved === "NON") {
      stopReasons.push("Aucune restauration utile n’est prouvée");
    }
    if (dossier.safety.privilegedAccessControlled === "NON") {
      stopReasons.push(
        "Les accès privilégiés ou les départs ne sont pas maîtrisés",
      );
    }
    if (dossier.safety.criticalManualFallbackTested === "NON") {
      stopReasons.push("Aucun mode dégradé testé pour une activité critique");
    }
  }

  if (isRecord(dossier?.proofs)) {
    const verifiedReferences: string[] = [];
    for (const id of BUSINESS_SOFTWARE_PROOF_IDS) {
      const proof = dossier.proofs[id];
      if (!isRecord(proof)) {
        invalidFields.push(`proofs.${id}`);
        continue;
      }
      if (
        !["ND", "DECLARE", "VERIFIE", "ECHEC"].includes(String(proof.status))
      ) {
        invalidFields.push(`proofs.${id}`);
        continue;
      }
      if (proof.status !== "VERIFIE") {
        missingEvidence.push(
          `${BUSINESS_SOFTWARE_PROOF_LABELS[id]} : ${proof.status}`,
        );
        continue;
      }
      if (
        typeof proof.evidenceRef !== "string" ||
        proof.evidenceRef.trim().length < 6 ||
        containsFixtureMarker(proof.evidenceRef)
      ) {
        missingEvidence.push(
          `${BUSINESS_SOFTWARE_PROOF_LABELS[id]} : référence réelle expurgée absente`,
        );
      } else {
        verifiedReferences.push(
          proof.evidenceRef.trim().toLocaleLowerCase("fr-FR"),
        );
      }
      if (
        typeof proof.owner !== "string" ||
        proof.owner.trim().length < 3 ||
        containsFixtureMarker(proof.owner)
      ) {
        missingEvidence.push(
          `${BUSINESS_SOFTWARE_PROOF_LABELS[id]} : responsable absent`,
        );
      }
      if (
        !validLocalDate(proof.verifiedOn) ||
        (validLocalDate(dossier?.asOfDate) &&
          proof.verifiedOn > dossier.asOfDate)
      ) {
        missingEvidence.push(
          `${BUSINESS_SOFTWARE_PROOF_LABELS[id]} : date de vérification invalide`,
        );
      }
    }
    if (new Set(verifiedReferences).size !== verifiedReferences.length) {
      missingEvidence.push(
        "Les références des preuves vérifiées doivent être distinctes et traçables",
      );
    }
  }

  for (const situation of situations) {
    for (const issue of situation.issues) {
      missingEvidence.push(
        `Situation ${situation.id || "sans identifiant"} : ${issue}`,
      );
    }
  }
  if (Array.isArray(dossier?.situations)) {
    dossier.situations.forEach((situation, index) => {
      const assessment = situations[index];
      if (situation?.realSituationConfirmed !== true) {
        missingEvidence.push(
          `Situation ${index + 1} : remplacement de l’exemple non confirmé`,
        );
      }
      if (
        assessment?.action === "OBSERVER" &&
        situation?.currentToolFinding === "NON_TESTE"
      ) {
        missingEvidence.push(
          `Situation ${situation.id || index + 1} : l’observation reste provisoire tant que l’outil actuel n’est pas testé`,
        );
      }
      if (
        assessment?.action === "OBSERVER" &&
        situation?.standardTrialFinding === "NON_EXAMINE"
      ) {
        missingEvidence.push(
          `Situation ${situation.id || index + 1} : l’observation reste provisoire tant qu’une option standard plausible n’est pas examinée`,
        );
      }
    });
  }
  for (const option of options) {
    for (const issue of option.issues) {
      missingEvidence.push(`Option ${option.label || option.id} : ${issue}`);
    }
  }
  if (Array.isArray(dossier?.options)) {
    dossier.options.forEach((option, index) => {
      if (option?.realOptionConfirmed !== true) {
        missingEvidence.push(
          `Option ${index + 1} : coûts et périmètre réels non confirmés`,
        );
      }
    });
  }

  if (dossier?.provenance !== "DONNEES_REELLES") {
    blockedReasons.push("Le dossier livré est un EXEMPLE FICTIF");
  }
  if (!dossier?.realDataConfirmed) {
    blockedReasons.push("Les données réelles ne sont pas confirmées");
  }
  const fixtureMarkersRemain =
    containsFixtureMarker(dossier?.sponsor) ||
    containsFixtureMarker(dossier?.processOwner) ||
    containsFixtureMarker(dossier?.reviewer) ||
    (Array.isArray(dossier?.situations) &&
      dossier.situations.some(
        (situation) =>
          containsFixtureMarker(situation?.id) ||
          containsFixtureMarker(situation?.title) ||
          containsFixtureMarker(situation?.evidenceRef),
      )) ||
    (Array.isArray(dossier?.options) &&
      dossier.options.some(
        (option) =>
          containsFixtureMarker(option?.id) ||
          containsFixtureMarker(option?.label),
      )) ||
    (Array.isArray(dossier?.pilotGates) &&
      dossier.pilotGates.some(
        (gate) =>
          containsFixtureMarker(gate?.casePopulation) ||
          containsFixtureMarker(gate?.baseline) ||
          containsFixtureMarker(gate?.stopCriterion) ||
          containsFixtureMarker(gate?.continueCriterion) ||
          containsFixtureMarker(gate?.rollbackPlan) ||
          containsFixtureMarker(gate?.owner),
      )) ||
    (isRecord(dossier?.proofs) &&
      BUSINESS_SOFTWARE_PROOF_IDS.some((id) => {
        const proof = dossier.proofs[id];
        return (
          isRecord(proof) &&
          (containsFixtureMarker(proof.evidenceRef) ||
            containsFixtureMarker(proof.owner))
        );
      }));
  if (fixtureMarkersRemain) {
    blockedReasons.push(
      "Des marqueurs EXEMPLE/FICTIF/FIXTURE subsistent dans le dossier",
    );
  }
  if (
    typeof dossier?.sponsor !== "string" ||
    dossier.sponsor.trim().length < 3
  ) {
    blockedReasons.push("Le sponsor n’est pas nommé");
  }
  if (
    typeof dossier?.processOwner !== "string" ||
    dossier.processOwner.trim().length < 3
  ) {
    blockedReasons.push("Le responsable métier n’est pas nommé");
  }
  if (!dossier?.humanDecisionConfirmed) {
    blockedReasons.push("La décision humaine n’est pas confirmée");
  }
  if (
    typeof dossier?.reviewer !== "string" ||
    dossier.reviewer.trim().length < 3
  ) {
    blockedReasons.push("Le réviseur n’est pas nommé");
  } else if (
    [dossier?.sponsor, dossier?.processOwner].some(
      (name) =>
        typeof name === "string" &&
        name.trim().toLocaleLowerCase("fr-FR") ===
          dossier.reviewer.trim().toLocaleLowerCase("fr-FR"),
    )
  ) {
    blockedReasons.push(
      "Le réviseur doit être distinct du sponsor et du responsable métier",
    );
  }
  if (!validLocalDate(dossier?.reviewedOn, true) || dossier.reviewedOn === "") {
    blockedReasons.push("La date de revue est absente ou invalide");
  } else if (
    validLocalDate(dossier?.asOfDate) &&
    dossier.reviewedOn > dossier.asOfDate
  ) {
    blockedReasons.push(
      "La date de revue est postérieure à la date du dossier",
    );
  } else if (
    (Array.isArray(dossier?.situations) &&
      dossier.situations.some(
        (situation) =>
          isRecord(situation) &&
          validLocalDate(situation.observedOn) &&
          situation.observedOn > dossier.reviewedOn,
      )) ||
    (isRecord(dossier?.proofs) &&
      BUSINESS_SOFTWARE_PROOF_IDS.some((id) => {
        const proof = dossier.proofs[id];
        return (
          isRecord(proof) &&
          proof.status === "VERIFIE" &&
          validLocalDate(proof.verifiedOn) &&
          proof.verifiedOn > dossier.reviewedOn
        );
      }))
  ) {
    blockedReasons.push(
      "La revue est antérieure à au moins une situation ou preuve vérifiée",
    );
  }

  const eligibleActions = Array.from(
    new Set(
      situations
        .map((situation) => situation.action)
        .filter((action): action is CandidateAction => action !== null),
    ),
  );
  const comparableOptionActions = new Set(
    options
      .filter((option) => option.issues.length === 0)
      .map((option) => option.action),
  );
  for (const action of eligibleActions) {
    if (
      action !== "SECURISER" &&
      action !== "OBSERVER" &&
      !comparableOptionActions.has(action)
    ) {
      missingEvidence.push(
        `Aucune option comparable et rejouée pour ${ACTION_LABELS[action]}`,
      );
    }
  }
  const hardBlockedReasons = blockedReasons.filter(
    (reason) => reason !== "La décision humaine n’est pas confirmée",
  );

  let state: DecisionState;
  let nextTest: string;
  if (stopReasons.length > 0) {
    state = "SECURISER_D_ABORD";
    nextTest =
      "Traiter le risque actif, prouver la restauration et exercer le mode dégradé avant de comparer des logiciels.";
  } else if (invalidFields.length > 0) {
    state = "INCOMPLET";
    nextTest =
      "Corriger le schéma, les dates, identifiants ou nombres avant toute interprétation.";
  } else if (situations.some((situation) => situation.issues.length > 0)) {
    state = "INCOMPLET";
    nextTest =
      "Compléter les trois événements et conserver chaque inconnue au lieu de la remplacer par zéro.";
  } else if (
    missingEvidence.length > 0 ||
    options.some((option) => option.issues.length > 0)
  ) {
    state = "INCOMPLET";
    nextTest =
      "Rejouer les mêmes situations dans les options plausibles et compléter coûts, sortie, sécurité et preuves.";
  } else if (hardBlockedReasons.length > 0) {
    state = "INCOMPLET";
    nextTest =
      "Lever les blocages de provenance, gouvernance, revue ou confirmation avant toute décision.";
  } else if (
    dossier.humanDecisionConfirmed &&
    dossier.provenance === "DONNEES_REELLES" &&
    dossier.realDataConfirmed &&
    blockedReasons.length === 0
  ) {
    state = "DECISION_HUMAINE";
    nextTest =
      "Exécuter un pilote borné avec critères STOP/GO, retour arrière et revue à J+30 puis J+90.";
  } else if (
    eligibleActions.length === 1 &&
    eligibleActions[0] === "OBSERVER"
  ) {
    state = "OBSERVER";
    nextTest =
      "Fixer une période représentative, un responsable et une date de réexamen sans figer une règle encore changeante.";
  } else if (
    eligibleActions.length === 1 &&
    eligibleActions[0] === "CORRIGER_STANDARDISER"
  ) {
    state = "CORRIGER_STANDARDISER";
    nextTest =
      "Rejouer les cas critiques après correction de l’outil actuel et mesurer le résultat avant tout achat.";
  } else {
    state = "COMPARER_PILOTER";
    nextTest =
      "Comparer les options sans classement automatique, puis faire arbitrer le périmètre, les risques et le TCO par les responsables nommés.";
  }

  const finalExportAllowed = state === "DECISION_HUMAINE";
  return {
    state,
    finalExportAllowed,
    invalidFields: Array.from(new Set(invalidFields)),
    missingEvidence: Array.from(new Set(missingEvidence)),
    stopReasons,
    blockedReasons,
    eligibleActions,
    nextTest,
    situations,
    options,
  };
}

export function createFictitiousBusinessSoftwareNeedDossier(): BusinessSoftwareNeedDossier {
  const baseSituation = {
    frequencyPerMonth: 18,
    activeMinutesPerOccurrence: 12,
    correctionMinutesPerOccurrence: 8,
    waitMinutesPerOccurrence: 90,
    consequence: "SIGNIFICATIVE" as const,
    ruleStability: "STABLE" as const,
    ownerAndFallbackDocumented: "OUI" as const,
  };
  return {
    version: BUSINESS_SOFTWARE_NEED_VERSION,
    provenance: "EXEMPLE_FICTIF",
    realDataConfirmed: false,
    asOfDate: BUSINESS_SOFTWARE_NEED_AS_OF,
    sponsor: "Direction — exemple",
    processOwner: "Responsable opérations — exemple",
    situations: [
      {
        ...baseSituation,
        id: "SIT-01",
        title: "Commande bloquée par une règle de remise",
        observedOn: "2026-07-07",
        evidenceRef: "EXEMPLE-FICTIF-TICKET-01",
        realSituationConfirmed: false,
        currentToolFinding: "FONCTIONNE_APRES_CORRECTION",
        repeatedManualTransfer: "NON",
        standardTrialFinding: "COUVRE",
        businessDifferentiator: "NON",
      },
      {
        ...baseSituation,
        id: "SIT-02",
        title: "Adresse et date recopiées entre CRM et planning",
        observedOn: "2026-07-10",
        evidenceRef: "EXEMPLE-FICTIF-JOURNAL-02",
        realSituationConfirmed: false,
        frequencyPerMonth: 65,
        activeMinutesPerOccurrence: 5,
        correctionMinutesPerOccurrence: 2,
        waitMinutesPerOccurrence: 15,
        currentToolFinding: "ECART_CONFIRME",
        repeatedManualTransfer: "OUI",
        standardTrialFinding: "COUVRE_PARTIELLEMENT",
        businessDifferentiator: "NON",
      },
      {
        ...baseSituation,
        id: "SIT-03",
        title: "Ordonnancement spécifique non couvert au test",
        observedOn: "2026-07-14",
        evidenceRef: "EXEMPLE-FICTIF-REJEU-03",
        realSituationConfirmed: false,
        frequencyPerMonth: 9,
        activeMinutesPerOccurrence: 35,
        correctionMinutesPerOccurrence: 20,
        waitMinutesPerOccurrence: 240,
        consequence: "CRITIQUE",
        currentToolFinding: "ECART_CONFIRME",
        repeatedManualTransfer: "NON",
        standardTrialFinding: "ECHEC_CAS_CRITIQUE",
        businessDifferentiator: "OUI",
      },
    ],
    safety: {
      activeIncidentOrExposure: "NON",
      restorableBackupProved: "OUI",
      privilegedAccessControlled: "OUI",
      criticalManualFallbackTested: "OUI",
    },
    proofs: {
      "three-events": {
        status: "VERIFIE",
        evidenceRef: "EXEMPLE-FICTIF-PREUVE-01",
        owner: "Auteur — exemple",
        verifiedOn: BUSINESS_SOFTWARE_NEED_AS_OF,
      },
      "users-rules": {
        status: "VERIFIE",
        evidenceRef: "EXEMPLE-FICTIF-PREUVE-02",
        owner: "Auteur — exemple",
        verifiedOn: BUSINESS_SOFTWARE_NEED_AS_OF,
      },
      "current-tool-test": {
        status: "VERIFIE",
        evidenceRef: "EXEMPLE-FICTIF-PREUVE-03",
        owner: "Auteur — exemple",
        verifiedOn: BUSINESS_SOFTWARE_NEED_AS_OF,
      },
      "standard-options": {
        status: "DECLARE",
        evidenceRef: "",
        owner: "",
        verifiedOn: "",
      },
      "data-integrations": {
        status: "DECLARE",
        evidenceRef: "",
        owner: "",
        verifiedOn: "",
      },
      "security-continuity": {
        status: "VERIFIE",
        evidenceRef: "EXEMPLE-FICTIF-PREUVE-06",
        owner: "Auteur — exemple",
        verifiedOn: BUSINESS_SOFTWARE_NEED_AS_OF,
      },
      "tco-adoption": {
        status: "DECLARE",
        evidenceRef: "",
        owner: "",
        verifiedOn: "",
      },
      "exit-accessibility": {
        status: "ND",
        evidenceRef: "",
        owner: "",
        verifiedOn: "",
      },
    },
    options: [
      {
        id: "OPT-CORRIGER",
        label: "Corriger et mieux configurer",
        action: "CORRIGER_STANDARDISER",
        realOptionConfirmed: false,
        samePerimeterConfirmed: "OUI",
        criticalCasesReplayed: "OUI",
        initialCost: 4_800,
        monthlyRunCost: 320,
        exitCost: 1_000,
      },
      {
        id: "OPT-INTEGRER",
        label: "Connecter les outils actuels",
        action: "INTEGRER_AUTOMATISER",
        realOptionConfirmed: false,
        samePerimeterConfirmed: "OUI",
        criticalCasesReplayed: "OUI",
        initialCost: 14_000,
        monthlyRunCost: 760,
        exitCost: 4_000,
      },
      {
        id: "OPT-STANDARD",
        label: "Acheter et configurer un standard",
        action: "ACHETER_CONFIGURER",
        realOptionConfirmed: false,
        samePerimeterConfirmed: "OUI",
        criticalCasesReplayed: "NON",
        initialCost: 31_000,
        monthlyRunCost: 1_450,
        exitCost: null,
      },
      {
        id: "OPT-SUR-MESURE",
        label: "Étudier une fonction sur mesure",
        action: "ETUDIER_SUR_MESURE",
        realOptionConfirmed: false,
        samePerimeterConfirmed: "OUI",
        criticalCasesReplayed: "OUI",
        initialCost: 78_000,
        monthlyRunCost: 2_100,
        exitCost: 12_000,
      },
    ],
    pilotGates: [
      {
        id: "pilot-j1-j5",
        casePopulation:
          "EXEMPLE FICTIF — trois situations et utilisateurs nommés",
        baseline: "Volumes et temps gelés",
        stopCriterion: "Sécurité non maîtrisée",
        continueCriterion: "Dossier testable",
        rollbackPlan: "Mode manuel",
        owner: "Responsable métier",
        reviewOn: "2026-08-02",
        realGateConfirmed: false,
      },
      {
        id: "pilot-j6-j10",
        casePopulation: "EXEMPLE FICTIF — import expurgé et cas limites",
        baseline: "Qualité initiale",
        stopCriterion: "Réconciliation impossible",
        continueCriterion: "Données rapprochées",
        rollbackPlan: "Restaurer l’environnement",
        owner: "Responsable des données",
        reviewOn: "2026-08-07",
        realGateConfirmed: false,
      },
      {
        id: "pilot-j11-j20",
        casePopulation: "EXEMPLE FICTIF — utilisateurs réels bornés",
        baseline: "Parcours avant",
        stopCriterion: "Incident éliminatoire",
        continueCriterion: "Cas critiques réussis",
        rollbackPlan: "Retour à l’outil actuel",
        owner: "Responsable du pilote",
        reviewOn: "2026-08-17",
        realGateConfirmed: false,
      },
      {
        id: "pilot-j21-j25",
        casePopulation: "EXEMPLE FICTIF — erreurs et accessibilité",
        baseline: "Taux d’exception",
        stopCriterion: "Contournement persistant",
        continueCriterion: "Résultat reproductible",
        rollbackPlan: "Correction puis rejeu",
        owner: "Responsable UX et exploitation",
        reviewOn: "2026-08-22",
        realGateConfirmed: false,
      },
      {
        id: "pilot-j26-j30",
        casePopulation: "EXEMPLE FICTIF — décision collective",
        baseline: "TCO actualisé",
        stopCriterion: "Inconnue critique",
        continueCriterion: "Décision humaine écrite",
        rollbackPlan: "Arrêt documenté",
        owner: "Sponsor",
        reviewOn: "2026-08-27",
        realGateConfirmed: false,
      },
      {
        id: "pilot-followup-30",
        casePopulation: "EXEMPLE FICTIF — adoption, support et dépendances",
        baseline: "Usage et incidents depuis la fin du pilote",
        stopCriterion: "Dépendance cachée ou risque critique",
        continueCriterion: "Service exploitable et écarts bornés",
        rollbackPlan: "Retour à la voie précédente",
        owner: "Responsable exploitation",
        reviewOn: "2026-09-26",
        realGateConfirmed: false,
      },
      {
        id: "pilot-followup-90",
        casePopulation: "EXEMPLE FICTIF — charge, coût complet et sortie",
        baseline: "TCO et qualité depuis la fin du pilote",
        stopCriterion: "Résultat non durable ou sortie impossible",
        continueCriterion: "Décision humaine et prochaine revue",
        rollbackPlan: "Arrêt ou réduction documentés",
        owner: "Sponsor et responsable métier",
        reviewOn: "2026-11-25",
        realGateConfirmed: false,
      },
    ],
    expiresOn: "2026-11-26",
    humanDecisionConfirmed: false,
    reviewer: "",
    reviewedOn: "",
  };
}

function spreadsheetSafe(value: string): string {
  return /^[\u0000-\u0020]*[=+\-@]/.test(value) ? `'${value}` : value;
}

type CsvValue = string | number | boolean | null;

function csvCell(value: CsvValue): string {
  const safe = spreadsheetSafe(value === null ? "ND" : String(value));
  return `"${safe.replaceAll('"', '""')}"`;
}

export function buildBusinessSoftwareNeedCsv(
  dossier: BusinessSoftwareNeedDossier,
): string {
  const decision = evaluateBusinessSoftwareNeed(dossier);
  const rows: CsvValue[][] = [
    ["Version", dossier.version],
    ["Provenance", dossier.provenance],
    ["Arrêté", dossier.asOfDate],
    ["Expiration de la décision", dossier.expiresOn],
    ["Données réelles confirmées", dossier.realDataConfirmed],
    ["État", decision.state],
    ["Export final autorisé", decision.finalExportAllowed],
    ["Prochaine vérification", decision.nextTest],
    ["Champs invalides", decision.invalidFields.join(" | ")],
    ["Preuves manquantes", decision.missingEvidence.join(" | ")],
    ["STOP", decision.stopReasons.join(" | ")],
    ["Blocages", decision.blockedReasons.join(" | ")],
    [],
    ["SÉCURITÉ", "Valeur"],
    ["Incident ou exposition active", dossier.safety.activeIncidentOrExposure],
    ["Restauration utile prouvée", dossier.safety.restorableBackupProved],
    ["Accès privilégiés maîtrisés", dossier.safety.privilegedAccessControlled],
    [
      "Mode dégradé critique testé",
      dossier.safety.criticalManualFallbackTested,
    ],
    [],
    ["PREUVES", "Statut", "Référence", "Responsable", "Date"],
    ...BUSINESS_SOFTWARE_PROOF_IDS.map((id) => [
      BUSINESS_SOFTWARE_PROOF_LABELS[id],
      dossier.proofs[id].status,
      dossier.proofs[id].evidenceRef,
      dossier.proofs[id].owner,
      dossier.proofs[id].verifiedOn,
    ]),
    [],
    [
      "ID",
      "Situation",
      "Date",
      "Preuve",
      "Situation réelle confirmée",
      "Fréquence/mois",
      "Minutes actives",
      "Minutes correction",
      "Minutes attente",
      "Conséquence",
      "Stabilité",
      "Outil actuel",
      "Transfert manuel",
      "Test standard",
      "Responsable et secours",
      "Différenciant",
      "Action à examiner",
      "Heures actives + correction/an",
      "Heures d’attente/an",
    ],
    ...decision.situations.map((assessment, index) => {
      const situation = dossier.situations[index];
      return [
        situation.id,
        situation.title,
        situation.observedOn,
        situation.evidenceRef,
        situation.realSituationConfirmed,
        situation.frequencyPerMonth,
        situation.activeMinutesPerOccurrence,
        situation.correctionMinutesPerOccurrence,
        situation.waitMinutesPerOccurrence,
        situation.consequence,
        situation.ruleStability,
        situation.currentToolFinding,
        situation.repeatedManualTransfer,
        situation.standardTrialFinding,
        situation.ownerAndFallbackDocumented,
        situation.businessDifferentiator,
        assessment.action ?? "INCOMPLET",
        assessment.annualActiveAndCorrectionHours,
        assessment.annualWaitHours,
      ];
    }),
    [],
    [
      "Option",
      "Action",
      "Option réelle confirmée",
      "Même périmètre",
      "Cas critiques rejoués",
      "Mise en place",
      "Fonctionnement mensuel",
      "Sortie",
      "TCO 12 mois",
      "TCO 36 mois",
      "TCO 60 mois",
      "Limites",
    ],
    ...decision.options.map((option, index) => {
      const raw = dossier.options[index];
      return [
        option.label,
        option.action,
        raw.realOptionConfirmed,
        raw.samePerimeterConfirmed,
        raw.criticalCasesReplayed,
        raw.initialCost,
        raw.monthlyRunCost,
        raw.exitCost,
        option.tco12,
        option.tco36,
        option.tco60,
        option.issues.join(" | ") || "Aucune inconnue déclarée",
      ];
    }),
    [],
    [
      "JALON PILOTE",
      "Cas / population",
      "Baseline",
      "Critère STOP",
      "Critère continuer",
      "Rollback",
      "Responsable",
      "Date de revue",
      "Jalon réel confirmé",
    ],
    ...dossier.pilotGates.map((gate) => [
      BUSINESS_SOFTWARE_PILOT_GATE_LABELS[gate.id],
      gate.casePopulation,
      gate.baseline,
      gate.stopCriterion,
      gate.continueCriterion,
      gate.rollbackPlan,
      gate.owner,
      gate.reviewOn,
      gate.realGateConfirmed,
    ]),
    [],
    ["GOUVERNANCE", "Valeur"],
    ["Sponsor", dossier.sponsor],
    ["Responsable métier", dossier.processOwner],
    ["Réviseur", dossier.reviewer],
    ["Date de revue", dossier.reviewedOn],
    ["Décision humaine confirmée", dossier.humanDecisionConfirmed],
  ];
  return rows.map((row) => row.map(csvCell).join(";")).join("\n");
}

export function buildBusinessSoftwareNeedJson(
  dossier: BusinessSoftwareNeedDossier,
): string {
  return JSON.stringify(
    {
      schema: "hagnere.business-software-need-dossier",
      schemaVersion: BUSINESS_SOFTWARE_NEED_SCHEMA_VERSION,
      dossier,
    },
    null,
    2,
  );
}

export function parseBusinessSoftwareNeedJson(
  json: string,
): BusinessSoftwareNeedDossier {
  const parsed: unknown = JSON.parse(json);
  if (
    !isRecord(parsed) ||
    parsed.schema !== "hagnere.business-software-need-dossier" ||
    parsed.schemaVersion !== BUSINESS_SOFTWARE_NEED_SCHEMA_VERSION ||
    !isRecord(parsed.dossier)
  ) {
    throw new Error(
      `Enveloppe JSON du dossier invalide ou version incompatible (version ${BUSINESS_SOFTWARE_NEED_SCHEMA_VERSION} attendue).`,
    );
  }
  const dossier = parsed.dossier as unknown as BusinessSoftwareNeedDossier;
  const decision = evaluateBusinessSoftwareNeed(dossier);
  if (decision.invalidFields.length > 0) {
    throw new Error(
      `Dossier JSON invalide : ${decision.invalidFields.join(", ")}`,
    );
  }
  return dossier;
}

export function buildBusinessSoftwareNeedNote(
  dossier: BusinessSoftwareNeedDossier,
): string {
  const decision = evaluateBusinessSoftwareNeed(dossier);
  const actions =
    decision.eligibleActions.length > 0
      ? decision.eligibleActions.map((action) => `- ${ACTION_LABELS[action]}`)
      : ["- aucune tant que le dossier est invalide ou incomplet"];
  return [
    "DOSSIER DE DÉCISION — BESOIN D’UN LOGICIEL MÉTIER",
    "",
    `Version : ${dossier.version}`,
    `Provenance : ${dossier.provenance}`,
    `Arrêté : ${dossier.asOfDate}`,
    `Expiration : ${dossier.expiresOn || "ND"}`,
    `État : ${decision.state}`,
    `Sponsor : ${dossier.sponsor || "ND"}`,
    `Responsable métier : ${dossier.processOwner || "ND"}`,
    `Réviseur : ${dossier.reviewer || "ND"}`,
    `Date de revue : ${dossier.reviewedOn || "ND"}`,
    `Export final : ${decision.finalExportAllowed ? "AUTORISÉ" : "BLOQUÉ"}`,
    `STOP : ${decision.stopReasons.join(" | ") || "aucun explicite"}`,
    `Preuves à reprendre : ${decision.missingEvidence.length}`,
    ...decision.missingEvidence.map((reason) => `- PREUVE : ${reason}`),
    `Champs invalides : ${decision.invalidFields.length}`,
    ...decision.invalidFields.map((field) => `- INVALIDE : ${field}`),
    `Blocages : ${decision.blockedReasons.length}`,
    ...decision.blockedReasons.map((reason) => `- BLOCAGE : ${reason}`),
    "",
    "ACTIONS À EXAMINER — PAS DE RECOMMANDATION AUTOMATIQUE",
    ...actions,
    "",
    "SITUATIONS",
    ...decision.situations.map(
      (situation, index) =>
        `- ${dossier.situations[index]?.id || "ND"} : ${
          situation.action ?? "INCOMPLET"
        } · travail ${situation.annualActiveAndCorrectionHours ?? "ND"} h/an · attente ${
          situation.annualWaitHours ?? "ND"
        } h/an`,
    ),
    "",
    "OPTIONS — TCO NON CLASSÉ",
    ...decision.options.map(
      (option) =>
        `- ${option.label} : 12 mois ${option.tco12 ?? "ND"} · 36 mois ${
          option.tco36 ?? "ND"
        } · 60 mois ${option.tco60 ?? "ND"}`,
    ),
    "",
    "PILOTE, SUIVIS ET EXPIRATION",
    ...dossier.pilotGates.map(
      (gate) =>
        `- ${BUSINESS_SOFTWARE_PILOT_GATE_LABELS[gate.id]} : revue ${
          gate.reviewOn || "ND"
        } · responsable ${gate.owner || "ND"} · confirmé ${
          gate.realGateConfirmed ? "OUI" : "NON"
        }`,
    ),
    `- Expiration de la décision : ${dossier.expiresOn || "ND"}`,
    "",
    "PROCHAINE VÉRIFICATION",
    decision.nextTest,
    "",
    "LIMITES",
    "Le temps observé représente une capacité potentiellement réaffectable, pas une économie de trésorerie. Les TCO ne classent aucune option et restent incomplets dès qu’un coût, un périmètre, une sortie ou un test est inconnu.",
  ].join("\n");
}
