export const AUTOMATION_READINESS_KEYS = [
  "boundary",
  "baseline",
  "rules",
  "inputs",
  "exceptions",
  "verification",
  "ownership",
] as const;

export const AUTOMATION_HARD_STOP_KEYS = [
  "undefinedOutcome",
  "untrustedSource",
  "irreversibleAction",
  "noOwnerOrFallback",
] as const;

export type AutomationReadinessKey =
  (typeof AUTOMATION_READINESS_KEYS)[number];
export type AutomationHardStopKey =
  (typeof AUTOMATION_HARD_STOP_KEYS)[number];
export type AutomationReadinessLevel =
  | "unknown"
  | "partial"
  | "documented";
export type AutomationDecisionVerdict =
  | "invalid"
  | "stop"
  | "observe"
  | "bounded-pilot";

export interface ProcessAutomationCandidate {
  name: string;
  casesPerMonth: number;
  activeMinutesPerCase: number;
  correctionHoursPerMonth: number;
  readiness: Record<AutomationReadinessKey, AutomationReadinessLevel>;
  hardStops: Record<AutomationHardStopKey, boolean>;
}

export interface ProcessAutomationDecision {
  verdict: AutomationDecisionVerdict;
  annualCases: number | null;
  annualActiveHours: number | null;
  annualCorrectionHours: number | null;
  annualObservedHours: number | null;
  unknownReadiness: AutomationReadinessKey[];
  partialReadiness: AutomationReadinessKey[];
  activeHardStops: AutomationHardStopKey[];
}

export const PROCESS_AUTOMATION_MAX_INPUT = 1_000_000_000;

const READINESS_LABELS: Record<AutomationReadinessKey, string> = {
  boundary: "Début, fin et résultat",
  baseline: "Mesure de départ représentative",
  rules: "Règles suffisamment stables",
  inputs: "Source des données fiable",
  exceptions: "Exceptions connues et orientées",
  verification: "Résultat vérifiable et réversible",
  ownership: "Responsable et mode manuel",
};

const READINESS_LEVEL_LABELS: Record<AutomationReadinessLevel, string> = {
  unknown: "inconnu",
  partial: "partiel",
  documented: "documenté",
};

const HARD_STOP_LABELS: Record<AutomationHardStopKey, string> = {
  undefinedOutcome: "Personne ne peut définir un résultat correct",
  untrustedSource: "Les données d’entrée n’ont aucune source fiable",
  irreversibleAction:
    "L’action est difficile à annuler ou affecte fortement une personne sans validation humaine effective",
  noOwnerOrFallback:
    "Personne ne surveillera les échecs et aucun mode manuel n’est prévu",
};

const VERDICT_LABELS: Record<AutomationDecisionVerdict, string> = {
  invalid: "Mesures à corriger",
  stop: "STOP sur l’automatisation complète",
  observe: "Observer ou clarifier avant de choisir l’outil",
  "bounded-pilot": "Candidat à un pilote borné",
};

function isValidNonNegative(value: number) {
  return (
    Number.isFinite(value) &&
    value >= 0 &&
    value <= PROCESS_AUTOMATION_MAX_INPUT
  );
}

function round(value: number) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

function summaryInput(value: number) {
  return isValidNonNegative(value) ? String(value) : "à renseigner ou corriger";
}

export const PROCESS_AUTOMATION_EXAMPLE: ProcessAutomationCandidate = {
  name: "Orienter les demandes complètes",
  casesPerMonth: 120,
  activeMinutesPerCase: 4,
  correctionHoursPerMonth: 3,
  readiness: {
    boundary: "documented",
    baseline: "documented",
    rules: "documented",
    inputs: "documented",
    exceptions: "partial",
    verification: "documented",
    ownership: "documented",
  },
  hardStops: {
    undefinedOutcome: false,
    untrustedSource: false,
    irreversibleAction: false,
    noOwnerOrFallback: false,
  },
};

export function createEmptyProcessAutomationCandidate(): ProcessAutomationCandidate {
  return {
    name: "",
    casesPerMonth: Number.NaN,
    activeMinutesPerCase: Number.NaN,
    correctionHoursPerMonth: Number.NaN,
    readiness: {
      boundary: "unknown",
      baseline: "unknown",
      rules: "unknown",
      inputs: "unknown",
      exceptions: "unknown",
      verification: "unknown",
      ownership: "unknown",
    },
    hardStops: {
      undefinedOutcome: false,
      untrustedSource: false,
      irreversibleAction: false,
      noOwnerOrFallback: false,
    },
  };
}

export function cloneProcessAutomationCandidate(
  candidate: ProcessAutomationCandidate,
): ProcessAutomationCandidate {
  return {
    ...candidate,
    readiness: { ...candidate.readiness },
    hardStops: { ...candidate.hardStops },
  };
}

export function evaluateProcessAutomationCandidate(
  candidate: ProcessAutomationCandidate,
): ProcessAutomationDecision {
  const numbersAreValid =
    isValidNonNegative(candidate.casesPerMonth) &&
    isValidNonNegative(candidate.activeMinutesPerCase) &&
    isValidNonNegative(candidate.correctionHoursPerMonth);
  const unknownReadiness = AUTOMATION_READINESS_KEYS.filter(
    (key) => candidate.readiness[key] === "unknown",
  );
  const partialReadiness = AUTOMATION_READINESS_KEYS.filter(
    (key) => candidate.readiness[key] === "partial",
  );
  const activeHardStops = AUTOMATION_HARD_STOP_KEYS.filter(
    (key) => candidate.hardStops[key],
  );

  if (!numbersAreValid) {
    return {
      verdict: "invalid",
      annualCases: null,
      annualActiveHours: null,
      annualCorrectionHours: null,
      annualObservedHours: null,
      unknownReadiness,
      partialReadiness,
      activeHardStops,
    };
  }

  const annualCases = round(candidate.casesPerMonth * 12);
  const annualActiveHours = round(
    (candidate.casesPerMonth * candidate.activeMinutesPerCase * 12) / 60,
  );
  const annualCorrectionHours = round(candidate.correctionHoursPerMonth * 12);
  const annualObservedHours = round(
    annualActiveHours + annualCorrectionHours,
  );
  const verdict: AutomationDecisionVerdict =
    activeHardStops.length > 0
      ? "stop"
      : annualCases > 0 &&
          annualObservedHours > 0 &&
          unknownReadiness.length === 0 &&
          partialReadiness.length <= 2
        ? "bounded-pilot"
        : "observe";

  return {
    verdict,
    annualCases,
    annualActiveHours,
    annualCorrectionHours,
    annualObservedHours,
    unknownReadiness,
    partialReadiness,
    activeHardStops,
  };
}

export function buildProcessAutomationSummary(
  candidate: ProcessAutomationCandidate,
  decision: ProcessAutomationDecision,
) {
  const readiness = AUTOMATION_READINESS_KEYS.map(
    (key) =>
      `- ${READINESS_LABELS[key]} : ${
        READINESS_LEVEL_LABELS[candidate.readiness[key]]
      }`,
  ).join("\n");
  const hardStops =
    decision.activeHardStops.length > 0
      ? decision.activeHardStops
          .map((key) => `- ${HARD_STOP_LABELS[key]}`)
          .join("\n")
      : "- aucun déclaré";

  return [
    "DOSSIER DE TRI — PREMIÈRE AUTOMATISATION",
    "",
    `Candidat : ${candidate.name.trim() || "à nommer"}`,
    `Décision de tri : ${VERDICT_LABELS[decision.verdict]}`,
    `Cas observés par mois : ${summaryInput(candidate.casesPerMonth)}`,
    `Minutes actives par cas : ${summaryInput(candidate.activeMinutesPerCase)}`,
    `Correction manuelle par mois : ${summaryInput(candidate.correctionHoursPerMonth)} h`,
    `Volume annualisé : ${decision.annualCases ?? "à corriger"} cas`,
    `Temps observé annualisé : ${decision.annualObservedHours ?? "à corriger"} h`,
    "",
    "PRÉPARATION",
    readiness,
    "",
    "MOTIFS D’ARRÊT",
    hardStops,
    "",
    "LIMITE",
    "Le temps observé est une capacité potentielle, pas une économie de trésorerie. La décision finale exige un pilote, des coûts comparables et des résultats réels à 30 puis 90 jours.",
  ].join("\n");
}
