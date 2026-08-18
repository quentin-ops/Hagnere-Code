export const SAAS_VALIDATION_GATE_KEYS = [
  "problem",
  "segment",
  "alternatives",
  "buyer",
  "offer",
  "channel",
  "feasibility",
  "usage",
] as const;

export const SAAS_VALIDATION_HARD_STOP_KEYS = [
  "deceptiveTest",
  "unauthorizedData",
  "impossiblePromise",
  "noPilotOwner",
] as const;

export const SAAS_VALIDATION_REQUIRED_TEXT_KEYS = [
  "name",
  "segment",
  "hypothesis",
  "experiment",
  "metric",
  "threshold",
  "result",
  "nextAction",
] as const;

export type SaasValidationGateKey = (typeof SAAS_VALIDATION_GATE_KEYS)[number];
export type SaasValidationHardStopKey =
  (typeof SAAS_VALIDATION_HARD_STOP_KEYS)[number];
export type SaasValidationRequiredTextKey =
  (typeof SAAS_VALIDATION_REQUIRED_TEXT_KEYS)[number];
export type SaasValidationEvidenceLevel =
  "contradicted" | "unknown" | "hypothesis" | "observed" | "demonstrated";
export type SaasValidationVerdict =
  | "invalid"
  | "stop"
  | "pivot-or-stop"
  | "discover"
  | "test-offer"
  | "bounded-pilot"
  | "limited-mvp";

export interface SaasValidationCandidate {
  name: string;
  segment: string;
  hypothesis: string;
  experiment: string;
  metric: string;
  threshold: string;
  result: string;
  nextAction: string;
  externalCostEur: number;
  founderHours: number;
  founderHourlyValueEur: number;
  gates: Record<SaasValidationGateKey, SaasValidationEvidenceLevel>;
  hardStops: Record<SaasValidationHardStopKey, boolean>;
}

export interface SaasValidationDecision {
  verdict: SaasValidationVerdict;
  valuedTestCostEur: number | null;
  missingFields: SaasValidationRequiredTextKey[];
  contradictedGates: SaasValidationGateKey[];
  weakGates: SaasValidationGateKey[];
  activeHardStops: SaasValidationHardStopKey[];
}

export interface SaasUnitEconomicsInput {
  name: string;
  monthlyPriceEur: number;
  monthlyVariableCostEur: number;
  acquisitionAndOnboardingCostEur: number;
}

export interface SaasUnitEconomicsResult extends SaasUnitEconomicsInput {
  monthlyContributionEur: number;
  contributionRatePercent: number | null;
  paybackMonths: number | null;
  cumulativeContribution12MonthsEur: number;
  cumulativeContribution36MonthsEur: number;
  cumulativeContribution60MonthsEur: number;
}

export const SAAS_VALIDATION_MAX_INPUT = 1_000_000_000;

const GATE_LABELS: Record<SaasValidationGateKey, string> = {
  problem: "Problème et déclencheur",
  segment: "Segment éligible et non-cible",
  alternatives: "Alternatives et coût du changement",
  buyer: "Acheteur, sponsor et veto",
  offer: "Prix et engagement réel",
  channel: "Accès répétable à la cible",
  feasibility: "Faisabilité, sécurité et économie",
  usage: "Premier résultat, usage répété et rétention",
};

const HARD_STOP_LABELS: Record<SaasValidationHardStopKey, string> = {
  deceptiveTest:
    "Le test fait croire qu’un service opérationnel existe alors qu’il est simulé",
  unauthorizedData:
    "Le pilote exige des données que vous n’êtes pas autorisé à collecter ou traiter",
  impossiblePromise:
    "La promesse centrale est techniquement, réglementairement ou économiquement impossible dans le périmètre annoncé",
  noPilotOwner:
    "Personne ne porte le pilote, ne traite les incidents ou ne peut revenir au mode précédent",
};

const REQUIRED_TEXT_LABELS: Record<SaasValidationRequiredTextKey, string> = {
  name: "projet ou offre",
  segment: "segment éligible",
  hypothesis: "hypothèse falsifiable",
  experiment: "population et expérience",
  metric: "mesure observée",
  threshold: "seuil écrit avant le test",
  result: "résultat, contradictions comprises",
  nextAction: "prochaine action autorisée",
};

const EVIDENCE_LABELS: Record<SaasValidationEvidenceLevel, string> = {
  contradicted: "contredit par les résultats",
  unknown: "inconnu",
  hypothesis: "hypothèse écrite",
  observed: "fait ou comportement observé",
  demonstrated: "engagement, usage ou investissement démontré",
};

const VERDICT_LABELS: Record<SaasValidationVerdict, string> = {
  invalid: "Dossier à compléter ou budget du test à corriger",
  stop: "STOP — condition non compensable",
  "pivot-or-stop": "PIVOT ou ARRÊT — une hypothèse est contredite",
  discover: "DISCOVERY — documenter le problème et le segment",
  "test-offer": "TESTER L’OFFRE — acheteur, prix, canal ou faisabilité",
  "bounded-pilot": "PILOTE BORNÉ — ne pas financer encore le produit complet",
  "limited-mvp": "CANDIDAT À UN MVP LIMITÉ — avec critères de sortie",
};

const EVIDENCE_RANK: Record<SaasValidationEvidenceLevel, number> = {
  contradicted: -1,
  unknown: 0,
  hypothesis: 1,
  observed: 2,
  demonstrated: 3,
};

const REQUIRED_EVIDENCE: Record<SaasValidationGateKey, number> = {
  problem: EVIDENCE_RANK.observed,
  segment: EVIDENCE_RANK.observed,
  alternatives: EVIDENCE_RANK.observed,
  buyer: EVIDENCE_RANK.observed,
  offer: EVIDENCE_RANK.demonstrated,
  channel: EVIDENCE_RANK.observed,
  feasibility: EVIDENCE_RANK.observed,
  usage: EVIDENCE_RANK.observed,
};

function round(value: number, decimals = 2) {
  const power = 10 ** decimals;
  return Math.round((value + Number.EPSILON) * power) / power;
}

function isValidNonNegative(value: number) {
  return (
    Number.isFinite(value) && value >= 0 && value <= SAAS_VALIDATION_MAX_INPUT
  );
}

function summaryInput(value: number, suffix = "") {
  return isValidNonNegative(value)
    ? `${String(value)}${suffix}`
    : "à renseigner ou corriger";
}

export const SAAS_VALIDATION_EXAMPLE: SaasValidationCandidate = {
  name: "ConformiSuivi — exemple entièrement fictif",
  segment:
    "Cabinets de conseil de 10 à 40 personnes qui préparent chaque mois des dossiers de conformité pour plusieurs clients",
  hypothesis:
    "Si les preuves arrivent par email et tableur, le responsable de mission perd au moins une demi-journée par dossier et acceptera un pilote manuel payant qui produit un dossier traçable.",
  experiment:
    "Huit entretiens éligibles, revue de cinq incidents récents, prototype de restitution, puis proposition d’un pilote manuel à deux acheteurs.",
  metric:
    "Incidents documentés, introductions au décideur, pilotes acceptés, engagement payé et risque technique critique.",
  threshold:
    "Avant le test : ≥ 5 incidents récents, ≥ 3 introductions acheteur, ≥ 2 pilotes manuels acceptés, ≥ 1 engagement payé, 0 impossibilité critique.",
  result:
    "5 incidents documentés, 3 introductions, 2 pilotes acceptés, 1 engagement payé ; l’usage répété reste à mesurer.",
  nextAction:
    "Exécuter un pilote manuel de quatre semaines, mesurer premier résultat utile et répétition, puis décider sans développer le produit complet.",
  externalCostEur: 1180,
  founderHours: 52,
  founderHourlyValueEur: 60,
  gates: {
    problem: "observed",
    segment: "observed",
    alternatives: "observed",
    buyer: "observed",
    offer: "demonstrated",
    channel: "observed",
    feasibility: "observed",
    usage: "hypothesis",
  },
  hardStops: {
    deceptiveTest: false,
    unauthorizedData: false,
    impossiblePromise: false,
    noPilotOwner: false,
  },
};

export const SAAS_UNIT_ECONOMICS_SCENARIOS: SaasUnitEconomicsInput[] = [
  {
    name: "Prudent",
    monthlyPriceEur: 450,
    monthlyVariableCostEur: 210,
    acquisitionAndOnboardingCostEur: 4800,
  },
  {
    name: "Central",
    monthlyPriceEur: 650,
    monthlyVariableCostEur: 140,
    acquisitionAndOnboardingCostEur: 3600,
  },
  {
    name: "Robuste",
    monthlyPriceEur: 900,
    monthlyVariableCostEur: 170,
    acquisitionAndOnboardingCostEur: 3200,
  },
];

export function createEmptySaasValidationCandidate(): SaasValidationCandidate {
  return {
    name: "",
    segment: "",
    hypothesis: "",
    experiment: "",
    metric: "",
    threshold: "",
    result: "",
    nextAction: "",
    externalCostEur: Number.NaN,
    founderHours: Number.NaN,
    founderHourlyValueEur: Number.NaN,
    gates: {
      problem: "unknown",
      segment: "unknown",
      alternatives: "unknown",
      buyer: "unknown",
      offer: "unknown",
      channel: "unknown",
      feasibility: "unknown",
      usage: "unknown",
    },
    hardStops: {
      deceptiveTest: false,
      unauthorizedData: false,
      impossiblePromise: false,
      noPilotOwner: false,
    },
  };
}

export function cloneSaasValidationCandidate(
  candidate: SaasValidationCandidate,
): SaasValidationCandidate {
  return {
    ...candidate,
    gates: { ...candidate.gates },
    hardStops: { ...candidate.hardStops },
  };
}

export function evaluateSaasValidationCandidate(
  candidate: SaasValidationCandidate,
): SaasValidationDecision {
  const activeHardStops = SAAS_VALIDATION_HARD_STOP_KEYS.filter(
    (key) => candidate.hardStops[key],
  );
  const contradictedGates = SAAS_VALIDATION_GATE_KEYS.filter(
    (key) => candidate.gates[key] === "contradicted",
  );
  const weakGates = SAAS_VALIDATION_GATE_KEYS.filter(
    (key) => EVIDENCE_RANK[candidate.gates[key]] < REQUIRED_EVIDENCE[key],
  );
  const missingFields = SAAS_VALIDATION_REQUIRED_TEXT_KEYS.filter(
    (key) => candidate[key].trim() === "",
  );
  const validBudgetInputs =
    isValidNonNegative(candidate.externalCostEur) &&
    isValidNonNegative(candidate.founderHours) &&
    isValidNonNegative(candidate.founderHourlyValueEur);
  const rawValuedTestCostEur = validBudgetInputs
    ? candidate.externalCostEur +
      candidate.founderHours * candidate.founderHourlyValueEur
    : Number.NaN;
  const roundedValuedTestCostEur = round(rawValuedTestCostEur);
  const validBudget =
    validBudgetInputs &&
    Number.isFinite(roundedValuedTestCostEur) &&
    Number.isSafeInteger(Math.round(roundedValuedTestCostEur * 100));
  const valuedTestCostEur = validBudget ? roundedValuedTestCostEur : null;

  let verdict: SaasValidationVerdict;

  if (activeHardStops.length > 0) {
    verdict = "stop";
  } else if (contradictedGates.length > 0) {
    verdict = "pivot-or-stop";
  } else if (!validBudget || missingFields.length > 0) {
    verdict = "invalid";
  } else if (
    ["problem", "segment", "alternatives"].some(
      (key) =>
        EVIDENCE_RANK[candidate.gates[key as SaasValidationGateKey]] <
        EVIDENCE_RANK.observed,
    )
  ) {
    verdict = "discover";
  } else if (
    ["buyer", "channel", "feasibility"].some(
      (key) =>
        EVIDENCE_RANK[candidate.gates[key as SaasValidationGateKey]] <
        EVIDENCE_RANK.observed,
    ) ||
    EVIDENCE_RANK[candidate.gates.offer] < EVIDENCE_RANK.demonstrated
  ) {
    verdict = "test-offer";
  } else if (EVIDENCE_RANK[candidate.gates.usage] < EVIDENCE_RANK.observed) {
    verdict = "bounded-pilot";
  } else {
    verdict = "limited-mvp";
  }

  return {
    verdict,
    valuedTestCostEur,
    missingFields,
    contradictedGates,
    weakGates,
    activeHardStops,
  };
}

export function calculateSaasUnitEconomics(
  input: SaasUnitEconomicsInput,
): SaasUnitEconomicsResult {
  const monthlyContributionEur = round(
    input.monthlyPriceEur - input.monthlyVariableCostEur,
  );
  const contributionRatePercent =
    input.monthlyPriceEur > 0
      ? round((monthlyContributionEur / input.monthlyPriceEur) * 100)
      : null;
  const paybackMonths =
    monthlyContributionEur > 0
      ? round(input.acquisitionAndOnboardingCostEur / monthlyContributionEur)
      : null;
  const cumulativeContributionAt = (months: number) =>
    round(
      monthlyContributionEur * months - input.acquisitionAndOnboardingCostEur,
    );

  return {
    ...input,
    monthlyContributionEur,
    contributionRatePercent,
    paybackMonths,
    cumulativeContribution12MonthsEur: cumulativeContributionAt(12),
    cumulativeContribution36MonthsEur: cumulativeContributionAt(36),
    cumulativeContribution60MonthsEur: cumulativeContributionAt(60),
  };
}

export function buildSaasValidationSummary(
  candidate: SaasValidationCandidate,
  decision: SaasValidationDecision,
) {
  const gates = SAAS_VALIDATION_GATE_KEYS.map(
    (key) => `- ${GATE_LABELS[key]} : ${EVIDENCE_LABELS[candidate.gates[key]]}`,
  ).join("\n");
  const hardStops =
    decision.activeHardStops.length > 0
      ? decision.activeHardStops
          .map((key) => `- ${HARD_STOP_LABELS[key]}`)
          .join("\n")
      : "- aucun déclaré";
  const missingFields =
    decision.missingFields.length > 0
      ? decision.missingFields
          .map((key) => `- ${REQUIRED_TEXT_LABELS[key]}`)
          .join("\n")
      : "- aucun";

  return [
    "DOSSIER DE DÉCISION — VALIDATION SAAS",
    "",
    `Projet : ${candidate.name.trim() || "à nommer"}`,
    `Segment : ${candidate.segment.trim() || "à renseigner"}`,
    `Décision de tri : ${VERDICT_LABELS[decision.verdict]}`,
    "",
    `Hypothèse falsifiable : ${candidate.hypothesis.trim() || "à écrire"}`,
    `Expérience : ${candidate.experiment.trim() || "à définir"}`,
    `Métrique : ${candidate.metric.trim() || "à définir"}`,
    `Seuil écrit avant test : ${candidate.threshold.trim() || "à écrire avant le test"}`,
    `Résultat : ${candidate.result.trim() || "à mesurer"}`,
    `Prochaine action : ${candidate.nextAction.trim() || "à décider"}`,
    "",
    "CHAMPS À COMPLÉTER",
    missingFields,
    "",
    "BUDGET DU TEST",
    `Dépenses externes : ${summaryInput(candidate.externalCostEur, " €")}`,
    `Temps fondateur : ${summaryInput(candidate.founderHours, " h")}`,
    `Valeur horaire de décision : ${summaryInput(
      candidate.founderHourlyValueEur,
      " €/h",
    )}`,
    `Coût valorisé : ${
      decision.valuedTestCostEur === null
        ? "à corriger"
        : `${decision.valuedTestCostEur} €`
    }`,
    "",
    "NIVEAU DE PREUVE PAR VERROU",
    gates,
    "",
    "MOTIFS D’ARRÊT NON COMPENSABLES",
    hardStops,
    "",
    "LIMITE",
    "Ce dossier organise une décision. Il ne prouve ni la taille du marché, ni la rentabilité future, ni la conformité juridique du produit. Un paiement ponctuel ne prouve pas la rétention ; un pilote réussi ne prouve pas un canal d’acquisition reproductible.",
  ].join("\n");
}
