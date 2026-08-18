export type EvidenceState = "unknown" | "pass" | "fail";

export type CurrentPlatform = "unknown" | "zapier" | "make" | "other";

export type DataScope =
  | "unknown"
  | "no-personal-data"
  | "personal-data"
  | "sensitive-data";

export type CandidateKind =
  | "unknown"
  | "change-platform"
  | "hybrid"
  | "dedicated";

export type DecisionOutcome =
  | "keep-secure"
  | "change-platform"
  | "hybrid"
  | "dedicated"
  | "simplify-stop";

export type DecisionStatus =
  | "STOP_INVALID_INPUT"
  | "STOP_MISSING_EVIDENCE"
  | "STOP_GATE_FAILURE"
  | "STOP_TARGET_MISMATCH"
  | "AWAITING_MANUAL_SELECTION"
  | "READY_FOR_HUMAN_REVIEW";

export const decisionOutcomeLabels: Record<DecisionOutcome, string> = {
  "keep-secure": "Conserver et sécuriser Zapier ou Make",
  "change-platform": "Changer de plateforme",
  hybrid: "Choisir une architecture hybride",
  dedicated: "Développer une connexion dédiée",
  "simplify-stop": "Simplifier, arrêter ou maintenir humainement",
};

export const candidateKindLabels: Record<CandidateKind, string> = {
  unknown: "Cible à préciser",
  "change-platform": "Autre plateforme testée sur le même flux",
  hybrid: "Plateforme + règle ou connexion circonscrite",
  dedicated: "Connexion dédiée exploitée dans la durée",
};

export const currentPlatformLabels: Record<CurrentPlatform, string> = {
  unknown: "À préciser",
  zapier: "Zapier",
  make: "Make",
  other: "Autre outil ou traitement humain",
};

export const dataScopeLabels: Record<DataScope, string> = {
  unknown: "À qualifier",
  "no-personal-data": "Aucune donnée personnelle identifiée",
  "personal-data": "Données personnelles",
  "sensitive-data": "Données sensibles ou hautement personnelles",
};

export const failureGates = [
  {
    key: "invalidRequiredData",
    number: 1,
    label: "Donnée obligatoire absente ou invalide",
    question:
      "Le flux met-il l'élément en attente, nomme-t-il l'erreur et évite-t-il tout effet incomplet ?",
  },
  {
    key: "rateLimit429",
    number: 2,
    label: "Limite de débit ou réponse 429",
    question:
      "L'origine est-elle identifiée, l'attente maîtrisée et la reprise observée sans tempête de requêtes ?",
  },
  {
    key: "thirdPartyUnavailable",
    number: 3,
    label: "Logiciel tiers indisponible",
    question:
      "Une file ou un mode dégradé protège-t-il le travail jusqu'au retour à la normale ?",
  },
  {
    key: "duplicateWebhook",
    number: 4,
    label: "Même webhook reçu deux fois",
    question:
      "Le second message est-il reconnu sans créer une deuxième fois l'effet métier ?",
  },
  {
    key: "partialSuccess",
    number: 5,
    label: "Première action réussie, suivante en échec",
    question:
      "L'état partiel est-il visible et la reprise cible-t-elle seulement ce qui reste à faire ?",
  },
  {
    key: "expiredAuthorization",
    number: 6,
    label: "Secret, jeton ou autorisation expiré",
    question:
      "L'alerte atteint-elle la bonne personne et le renouvellement évite-t-il une perte silencieuse ?",
  },
  {
    key: "manualReplayAfterEffect",
    number: 7,
    label: "Reprise manuelle après un effet déjà produit",
    question:
      "La personne voit-elle l'effet antérieur avant de rejouer, annuler ou compenser ?",
  },
] as const;

export type FailureGateKey = (typeof failureGates)[number]["key"];
export type FailureGateEvidence = Record<FailureGateKey, EvidenceState>;

export interface ObservationMetrics {
  events: number | null;
  branchExecutions: number | null;
  billableUnits: number | null;
  completeSuccesses: number | null;
  visibleFailures: number | null;
  partialSuccesses: number | null;
  automaticRetries: number | null;
  manualRetries: number | null;
  duplicates: number | null;
  observationHours: number | null;
  correctionHours: number | null;
  reconciliationHours: number | null;
  includedContractHours: number | null;
}

export interface CurrentCosts {
  subscriptionMonthly: number | null;
  overagesMonthly: number | null;
  optionsMonthly: number | null;
  externalServicesMonthly: number | null;
  humanHourlyCost: number | null;
  remediationOneOff: number | null;
  codeOperationsMonthly: number | null;
  apiUpdatesAnnual: number | null;
  incidentCostMonthly: number | null;
  incidentBasis: string;
  exitCost: number | null;
}

export interface CandidateCosts {
  kind: CandidateKind;
  framingOneOff: number | null;
  buildOneOff: number | null;
  testsOneOff: number | null;
  migrationOneOff: number | null;
  platformMonthly: number | null;
  externalServicesMonthly: number | null;
  humanHoursMonthly: number | null;
  humanHourlyCost: number | null;
  includedContractHours: number | null;
  hostingMonthly: number | null;
  monitoringMonthly: number | null;
  maintenanceMonthly: number | null;
  supportMonthly: number | null;
  apiUpdatesAnnual: number | null;
  incidentCostMonthly: number | null;
  incidentBasis: string;
  exitCost: number | null;
}

export interface FlowObservatoryInputs {
  currentPlatform: CurrentPlatform;
  dataScope: DataScope;
  sourceOfTruth: string;
  owner: string;
  substitute: string;
  maximumAcceptableDelayMinutes: number | null;
  observation: ObservationMetrics;
  currentCosts: CurrentCosts;
  candidateCosts: CandidateCosts;
  uncertaintyPercent: number | null;
  gates: FailureGateEvidence;
  selectedOutcome: DecisionOutcome | null;
}

export interface ParsedLocalizedNumber {
  state: "unknown" | "valid" | "invalid";
  value: number | null;
}

export interface ScenarioCostResult {
  status: "COMPLETE" | "INCOMPLETE" | "INVALID";
  initialCost: number | null;
  platformMonthly: number | null;
  externalServicesMonthly: number | null;
  humanMonthly: number | null;
  codeOperationsMonthly: number | null;
  incidentMonthly: number | null;
  apiUpdatesAnnual: number | null;
  exitCost: number | null;
  total12Months: number | null;
  total36Months: number | null;
  interval12Months: readonly [number, number] | null;
  interval36Months: readonly [number, number] | null;
  missing: string[];
  errors: string[];
}

export interface CostComparison {
  difference12Months: number;
  difference36Months: number;
  intervalsOverlap12Months: boolean;
  intervalsOverlap36Months: boolean;
}

export interface FlowObservatoryResult {
  status: DecisionStatus;
  statusLabel: string;
  canConclude: boolean;
  selectedOutcome: DecisionOutcome | null;
  missing: string[];
  errors: string[];
  failedGates: string[];
  pendingEvents: number | null;
  completeSuccessRate: number | null;
  observedHumanHours: number | null;
  nonOverlappingHumanHours: number | null;
  currentCost: ScenarioCostResult;
  candidateCost: ScenarioCostResult | null;
  comparison: CostComparison | null;
  nextActions: string[];
}

export const MAX_SAFE_FLOW_COUNT = 1_000_000_000_000;
export const MAX_SAFE_MONEY_EUR = 10_000_000_000;
export const MAX_SAFE_HOURS = 10_000_000;
export const MONEY_DECIMALS = 2;

const emptyGateEvidence = Object.fromEntries(
  failureGates.map((gate) => [gate.key, "unknown"]),
) as FailureGateEvidence;

export function createEmptyFlowInputs(): FlowObservatoryInputs {
  return {
    currentPlatform: "unknown",
    dataScope: "unknown",
    sourceOfTruth: "",
    owner: "",
    substitute: "",
    maximumAcceptableDelayMinutes: null,
    observation: {
      events: null,
      branchExecutions: null,
      billableUnits: null,
      completeSuccesses: null,
      visibleFailures: null,
      partialSuccesses: null,
      automaticRetries: null,
      manualRetries: null,
      duplicates: null,
      observationHours: null,
      correctionHours: null,
      reconciliationHours: null,
      includedContractHours: null,
    },
    currentCosts: {
      subscriptionMonthly: null,
      overagesMonthly: null,
      optionsMonthly: null,
      externalServicesMonthly: null,
      humanHourlyCost: null,
      remediationOneOff: null,
      codeOperationsMonthly: null,
      apiUpdatesAnnual: null,
      incidentCostMonthly: null,
      incidentBasis: "",
      exitCost: null,
    },
    candidateCosts: {
      kind: "unknown",
      framingOneOff: null,
      buildOneOff: null,
      testsOneOff: null,
      migrationOneOff: null,
      platformMonthly: null,
      externalServicesMonthly: null,
      humanHoursMonthly: null,
      humanHourlyCost: null,
      includedContractHours: null,
      hostingMonthly: null,
      monitoringMonthly: null,
      maintenanceMonthly: null,
      supportMonthly: null,
      apiUpdatesAnnual: null,
      incidentCostMonthly: null,
      incidentBasis: "",
      exitCost: null,
    },
    uncertaintyPercent: null,
    gates: { ...emptyGateEvidence },
    selectedOutcome: null,
  };
}

export function cloneFlowInputs(
  inputs: FlowObservatoryInputs,
): FlowObservatoryInputs {
  return {
    ...inputs,
    observation: { ...inputs.observation },
    currentCosts: { ...inputs.currentCosts },
    candidateCosts: { ...inputs.candidateCosts },
    gates: { ...inputs.gates },
  };
}

export function parseLocalizedNumber(raw: string): ParsedLocalizedNumber {
  const normalized = raw.replace(/[\s\u00a0\u202f]/g, "").trim();
  if (normalized === "") return { state: "unknown", value: null };
  if (!/^\d+(?:[,.]\d{1,2})?$/.test(normalized)) {
    return { state: "invalid", value: null };
  }
  const value = Number(normalized.replace(",", "."));
  if (!Number.isFinite(value)) return { state: "invalid", value: null };
  return { state: "valid", value };
}

function isTwoDecimalSafe(value: number) {
  return (
    Number.isFinite(value) &&
    value >= 0 &&
    value <= MAX_SAFE_MONEY_EUR &&
    Number.isSafeInteger(Math.round(value * 100)) &&
    Math.abs(value * 100 - Math.round(value * 100)) < 1e-7
  );
}

function validateMoney(
  value: number | null,
  label: string,
  missing: string[],
  errors: string[],
) {
  if (value === null) {
    missing.push(label);
    return;
  }
  if (!isTwoDecimalSafe(value)) {
    errors.push(
      `${label} doit être un montant positif ou nul, fini, avec au plus deux décimales.`,
    );
  }
}

function validateHours(
  value: number | null,
  label: string,
  missing: string[],
  errors: string[],
) {
  if (value === null) {
    missing.push(label);
    return;
  }
  if (
    !Number.isFinite(value) ||
    value < 0 ||
    value > MAX_SAFE_HOURS ||
    Math.abs(value * 100 - Math.round(value * 100)) >= 1e-7
  ) {
    errors.push(
      `${label} doit être un nombre d'heures positif ou nul, fini, avec au plus deux décimales.`,
    );
  }
}

function validateCount(
  value: number | null,
  label: string,
  missing: string[],
  errors: string[],
) {
  if (value === null) {
    missing.push(label);
    return;
  }
  if (
    !Number.isSafeInteger(value) ||
    value < 0 ||
    value > MAX_SAFE_FLOW_COUNT
  ) {
    errors.push(
      `${label} doit être un entier positif ou nul dans la plage de calcul fiable.`,
    );
  }
}

function eurosToCents(value: number) {
  return Math.round(value * 100);
}

function centsToEuros(value: number) {
  return Number((value / 100).toFixed(MONEY_DECIMALS));
}

function addCents(values: number[], label: string, errors: string[]) {
  const total = values.reduce((sum, value) => sum + value, 0);
  if (!Number.isSafeInteger(total)) {
    errors.push(`${label} dépasse la plage de calcul fiable.`);
    return null;
  }
  return total;
}

function multiplyCents(
  cents: number,
  multiplier: number,
  label: string,
  errors: string[],
) {
  const total = cents * multiplier;
  if (!Number.isSafeInteger(total)) {
    errors.push(`${label} dépasse la plage de calcul fiable.`);
    return null;
  }
  return total;
}

function intervalFor(total: number, uncertaintyPercent: number) {
  const factor = uncertaintyPercent / 100;
  return [
    Number((total * (1 - factor)).toFixed(2)),
    Number((total * (1 + factor)).toFixed(2)),
  ] as const;
}

function emptyScenarioResult(
  status: ScenarioCostResult["status"],
  missing: string[],
  errors: string[],
): ScenarioCostResult {
  return {
    status,
    initialCost: null,
    platformMonthly: null,
    externalServicesMonthly: null,
    humanMonthly: null,
    codeOperationsMonthly: null,
    incidentMonthly: null,
    apiUpdatesAnnual: null,
    exitCost: null,
    total12Months: null,
    total36Months: null,
    interval12Months: null,
    interval36Months: null,
    missing,
    errors,
  };
}

function calculateTotals(params: {
  initialValues: number[];
  platformMonthlyValues: number[];
  externalMonthlyValues: number[];
  humanHours: number;
  includedHumanHours: number;
  humanHourlyCost: number;
  codeMonthlyValues: number[];
  incidentMonthly: number;
  apiUpdatesAnnual: number;
  exitCost: number;
  uncertaintyPercent: number | null;
  missing: string[];
  errors: string[];
}): ScenarioCostResult {
  const { errors, missing } = params;
  const initialCents = addCents(
    params.initialValues.map(eurosToCents),
    "coûts initiaux",
    errors,
  );
  const platformCents = addCents(
    params.platformMonthlyValues.map(eurosToCents),
    "coût mensuel de plateforme",
    errors,
  );
  const externalCents = addCents(
    params.externalMonthlyValues.map(eurosToCents),
    "coût mensuel des services tiers",
    errors,
  );
  const codeCents = addCents(
    params.codeMonthlyValues.map(eurosToCents),
    "coût mensuel d'exploitation du code",
    errors,
  );
  const incidentCents = eurosToCents(params.incidentMonthly);
  const apiAnnualCents = eurosToCents(params.apiUpdatesAnnual);
  const exitCents = eurosToCents(params.exitCost);
  const netHours = params.humanHours - params.includedHumanHours;
  const humanCents = Math.round(netHours * params.humanHourlyCost * 100);
  if (!Number.isSafeInteger(humanCents)) {
    errors.push("Le coût humain mensuel dépasse la plage de calcul fiable.");
  }

  if (
    initialCents === null ||
    platformCents === null ||
    externalCents === null ||
    codeCents === null ||
    !Number.isSafeInteger(humanCents)
  ) {
    return emptyScenarioResult("INVALID", missing, errors);
  }

  const monthlyCents = addCents(
    [
      platformCents,
      externalCents,
      humanCents,
      codeCents,
      incidentCents,
    ],
    "coût mensuel total",
    errors,
  );
  if (monthlyCents === null) {
    return emptyScenarioResult("INVALID", missing, errors);
  }

  const twelveMonthly = multiplyCents(
    monthlyCents,
    12,
    "total à 12 mois",
    errors,
  );
  const thirtySixMonthly = multiplyCents(
    monthlyCents,
    36,
    "total à 36 mois",
    errors,
  );
  const threeAnnualUpdates = multiplyCents(
    apiAnnualCents,
    3,
    "mises à jour d'API sur 36 mois",
    errors,
  );
  if (
    twelveMonthly === null ||
    thirtySixMonthly === null ||
    threeAnnualUpdates === null
  ) {
    return emptyScenarioResult("INVALID", missing, errors);
  }

  const total12Cents = addCents(
    [initialCents, twelveMonthly, apiAnnualCents, exitCents],
    "total à 12 mois",
    errors,
  );
  const total36Cents = addCents(
    [initialCents, thirtySixMonthly, threeAnnualUpdates, exitCents],
    "total à 36 mois",
    errors,
  );
  if (total12Cents === null || total36Cents === null || errors.length > 0) {
    return emptyScenarioResult("INVALID", missing, errors);
  }

  const total12Months = centsToEuros(total12Cents);
  const total36Months = centsToEuros(total36Cents);
  const uncertainty = params.uncertaintyPercent;

  return {
    status: missing.length > 0 ? "INCOMPLETE" : "COMPLETE",
    initialCost: centsToEuros(initialCents),
    platformMonthly: centsToEuros(platformCents),
    externalServicesMonthly: centsToEuros(externalCents),
    humanMonthly: centsToEuros(humanCents),
    codeOperationsMonthly: centsToEuros(codeCents),
    incidentMonthly: centsToEuros(incidentCents),
    apiUpdatesAnnual: centsToEuros(apiAnnualCents),
    exitCost: centsToEuros(exitCents),
    total12Months,
    total36Months,
    interval12Months:
      uncertainty === null ? null : intervalFor(total12Months, uncertainty),
    interval36Months:
      uncertainty === null ? null : intervalFor(total36Months, uncertainty),
    missing,
    errors,
  };
}

export function calculateCurrentCost(
  inputs: FlowObservatoryInputs,
): ScenarioCostResult {
  const missing: string[] = [];
  const errors: string[] = [];
  const observation = inputs.observation;
  const costs = inputs.currentCosts;

  validateHours(
    observation.observationHours,
    "heures d'observation",
    missing,
    errors,
  );
  validateHours(
    observation.correctionHours,
    "heures de correction",
    missing,
    errors,
  );
  validateHours(
    observation.reconciliationHours,
    "heures de réconciliation",
    missing,
    errors,
  );
  validateHours(
    observation.includedContractHours,
    "heures déjà incluses dans un contrat",
    missing,
    errors,
  );

  const moneyFields: Array<[number | null, string]> = [
    [costs.subscriptionMonthly, "abonnement mensuel attribué"],
    [costs.overagesMonthly, "dépassements mensuels"],
    [costs.optionsMonthly, "options mensuelles"],
    [costs.externalServicesMonthly, "services tiers mensuels"],
    [costs.humanHourlyCost, "coût horaire humain"],
    [costs.remediationOneOff, "remise en état initiale"],
    [costs.codeOperationsMonthly, "exploitation mensuelle du code"],
    [costs.apiUpdatesAnnual, "mises à jour annuelles d'API"],
    [costs.incidentCostMonthly, "coût mensuel d'incident"],
    [costs.exitCost, "coût de sortie"],
  ];
  for (const [value, label] of moneyFields) {
    validateMoney(value, label, missing, errors);
  }
  if (costs.incidentBasis.trim() === "") {
    missing.push("base documentée ou hypothèse nommée du coût d'incident");
  }
  if (inputs.uncertaintyPercent === null) {
    missing.push("marge d'incertitude");
  } else if (
    !Number.isFinite(inputs.uncertaintyPercent) ||
    inputs.uncertaintyPercent < 0 ||
    inputs.uncertaintyPercent > 100 ||
    Math.abs(
      inputs.uncertaintyPercent * 100 -
        Math.round(inputs.uncertaintyPercent * 100),
    ) >= 1e-7
  ) {
    errors.push(
      "La marge d'incertitude doit être comprise entre 0 et 100 %, avec au plus deux décimales.",
    );
  }

  if (errors.length > 0) return emptyScenarioResult("INVALID", missing, errors);
  if (
    observation.observationHours === null ||
    observation.correctionHours === null ||
    observation.reconciliationHours === null ||
    observation.includedContractHours === null ||
    moneyFields.some(([value]) => value === null)
  ) {
    return emptyScenarioResult("INCOMPLETE", missing, errors);
  }

  const humanHours =
    observation.observationHours +
    observation.correctionHours +
    observation.reconciliationHours;
  if (observation.includedContractHours > humanHours) {
    errors.push(
      "Les heures déjà incluses ne peuvent pas dépasser toutes les heures humaines observées.",
    );
    return emptyScenarioResult("INVALID", missing, errors);
  }

  return calculateTotals({
    initialValues: [costs.remediationOneOff!],
    platformMonthlyValues: [
      costs.subscriptionMonthly!,
      costs.overagesMonthly!,
      costs.optionsMonthly!,
    ],
    externalMonthlyValues: [costs.externalServicesMonthly!],
    humanHours,
    includedHumanHours: observation.includedContractHours,
    humanHourlyCost: costs.humanHourlyCost!,
    codeMonthlyValues: [costs.codeOperationsMonthly!],
    incidentMonthly: costs.incidentCostMonthly!,
    apiUpdatesAnnual: costs.apiUpdatesAnnual!,
    exitCost: costs.exitCost!,
    uncertaintyPercent: inputs.uncertaintyPercent,
    missing,
    errors,
  });
}

export function calculateCandidateCost(
  inputs: FlowObservatoryInputs,
): ScenarioCostResult {
  const missing: string[] = [];
  const errors: string[] = [];
  const costs = inputs.candidateCosts;

  if (costs.kind === "unknown") missing.push("type de cible comparée");

  const moneyFields: Array<[number | null, string]> = [
    [costs.framingOneOff, "cadrage candidat"],
    [costs.buildOneOff, "réalisation candidate"],
    [costs.testsOneOff, "tests candidats"],
    [costs.migrationOneOff, "migration candidate"],
    [costs.platformMonthly, "plateforme candidate mensuelle"],
    [costs.externalServicesMonthly, "services tiers candidats mensuels"],
    [costs.humanHourlyCost, "coût horaire candidat"],
    [costs.hostingMonthly, "hébergement candidat mensuel"],
    [costs.monitoringMonthly, "surveillance candidate mensuelle"],
    [costs.maintenanceMonthly, "maintenance candidate mensuelle"],
    [costs.supportMonthly, "support candidat mensuel"],
    [costs.apiUpdatesAnnual, "mises à jour API candidates annuelles"],
    [costs.incidentCostMonthly, "coût d'incident candidat mensuel"],
    [costs.exitCost, "coût de sortie candidat"],
  ];
  for (const [value, label] of moneyFields) {
    validateMoney(value, label, missing, errors);
  }
  validateHours(
    costs.humanHoursMonthly,
    "heures humaines candidates mensuelles",
    missing,
    errors,
  );
  validateHours(
    costs.includedContractHours,
    "heures candidates déjà incluses",
    missing,
    errors,
  );
  if (costs.incidentBasis.trim() === "") {
    missing.push("base documentée ou hypothèse nommée de l'incident candidat");
  }
  if (inputs.uncertaintyPercent === null) {
    missing.push("marge d'incertitude");
  }

  if (errors.length > 0) return emptyScenarioResult("INVALID", missing, errors);
  if (
    costs.kind === "unknown" ||
    costs.humanHoursMonthly === null ||
    costs.includedContractHours === null ||
    moneyFields.some(([value]) => value === null)
  ) {
    return emptyScenarioResult("INCOMPLETE", missing, errors);
  }
  if (costs.includedContractHours > costs.humanHoursMonthly) {
    errors.push(
      "Les heures candidates déjà incluses ne peuvent pas dépasser les heures humaines candidates.",
    );
    return emptyScenarioResult("INVALID", missing, errors);
  }

  return calculateTotals({
    initialValues: [
      costs.framingOneOff!,
      costs.buildOneOff!,
      costs.testsOneOff!,
      costs.migrationOneOff!,
    ],
    platformMonthlyValues: [costs.platformMonthly!],
    externalMonthlyValues: [costs.externalServicesMonthly!],
    humanHours: costs.humanHoursMonthly,
    includedHumanHours: costs.includedContractHours,
    humanHourlyCost: costs.humanHourlyCost!,
    codeMonthlyValues: [
      costs.hostingMonthly!,
      costs.monitoringMonthly!,
      costs.maintenanceMonthly!,
      costs.supportMonthly!,
    ],
    incidentMonthly: costs.incidentCostMonthly!,
    apiUpdatesAnnual: costs.apiUpdatesAnnual!,
    exitCost: costs.exitCost!,
    uncertaintyPercent: inputs.uncertaintyPercent,
    missing,
    errors,
  });
}

function intervalsOverlap(
  left: readonly [number, number],
  right: readonly [number, number],
) {
  return left[0] <= right[1] && right[0] <= left[1];
}

function requiredCandidateKind(outcome: DecisionOutcome | null) {
  if (outcome === "change-platform") return "change-platform";
  if (outcome === "hybrid") return "hybrid";
  if (outcome === "dedicated") return "dedicated";
  return null;
}

const statusLabels: Record<DecisionStatus, string> = {
  STOP_INVALID_INPUT: "Décision suspendue — corrigez les valeurs invalides",
  STOP_MISSING_EVIDENCE: "Décision suspendue — preuves critiques manquantes",
  STOP_GATE_FAILURE: "Décision suspendue — une panne indispensable échoue",
  STOP_TARGET_MISMATCH:
    "Décision suspendue — la cible chiffrée ne correspond pas à l'option choisie",
  AWAITING_MANUAL_SELECTION:
    "Mesure exploitable — choisissez manuellement une prochaine étape",
  READY_FOR_HUMAN_REVIEW:
    "Dossier prêt pour une revue humaine — aucun verdict automatique",
};

export function evaluateFlow(
  inputs: FlowObservatoryInputs,
): FlowObservatoryResult {
  const missing: string[] = [];
  const errors: string[] = [];
  const observation = inputs.observation;

  const countFields: Array<[number | null, string]> = [
    [observation.events, "événements reçus"],
    [observation.branchExecutions, "exécutions par branche"],
    [observation.billableUnits, "actions ou unités comptées"],
    [observation.completeSuccesses, "succès complets"],
    [observation.visibleFailures, "échecs visibles"],
    [observation.partialSuccesses, "succès partiels"],
    [observation.automaticRetries, "reprises automatiques"],
    [observation.manualRetries, "reprises manuelles"],
    [observation.duplicates, "doublons ou effets à annuler"],
  ];
  for (const [value, label] of countFields) {
    validateCount(value, label, missing, errors);
  }

  if (inputs.currentPlatform === "unknown") missing.push("plateforme actuelle");
  if (inputs.dataScope === "unknown") missing.push("qualification des données");
  if (inputs.sourceOfTruth.trim() === "") missing.push("source de vérité");
  if (inputs.owner.trim() === "") missing.push("propriétaire du flux");
  if (inputs.substitute.trim() === "") missing.push("remplaçant du propriétaire");
  validateCount(
    inputs.maximumAcceptableDelayMinutes,
    "délai maximal acceptable en minutes",
    missing,
    errors,
  );

  const outcomeValues = [
    observation.completeSuccesses,
    observation.visibleFailures,
    observation.partialSuccesses,
  ];
  if (
    observation.events !== null &&
    outcomeValues.every((value) => value !== null) &&
    errors.length === 0
  ) {
    const accounted = outcomeValues.reduce(
      (sum, value) => sum + (value ?? 0),
      0,
    );
    if (accounted > observation.events) {
      errors.push(
        "Succès complets, échecs et succès partiels ne peuvent pas dépasser les événements reçus.",
      );
    }
  }

  const failedGates: string[] = [];
  for (const gate of failureGates) {
    const state = inputs.gates[gate.key];
    if (state === "unknown") missing.push(`porte ${gate.number} : ${gate.label}`);
    if (state === "fail") failedGates.push(`${gate.number}. ${gate.label}`);
  }

  const currentCost = calculateCurrentCost(inputs);
  missing.push(...currentCost.missing.map((item) => `coût courant : ${item}`));
  errors.push(...currentCost.errors.map((item) => `coût courant : ${item}`));

  const candidateWasStarted =
    inputs.candidateCosts.kind !== "unknown" ||
    Object.entries(inputs.candidateCosts).some(
      ([key, value]) =>
        key !== "kind" &&
        ((typeof value === "number" && value !== null) ||
          (typeof value === "string" && value.trim() !== "")),
    );
  const candidateRequired =
    requiredCandidateKind(inputs.selectedOutcome) !== null;
  const candidateCost =
    candidateWasStarted || candidateRequired ? calculateCandidateCost(inputs) : null;
  if (candidateRequired && candidateCost) {
    missing.push(...candidateCost.missing.map((item) => `coût candidat : ${item}`));
    errors.push(...candidateCost.errors.map((item) => `coût candidat : ${item}`));
  }

  const expectedKind = requiredCandidateKind(inputs.selectedOutcome);
  const targetMismatch =
    expectedKind !== null && inputs.candidateCosts.kind !== expectedKind;

  let comparison: CostComparison | null = null;
  if (
    currentCost.status === "COMPLETE" &&
    candidateCost?.status === "COMPLETE" &&
    currentCost.total12Months !== null &&
    currentCost.total36Months !== null &&
    candidateCost.total12Months !== null &&
    candidateCost.total36Months !== null &&
    currentCost.interval12Months &&
    currentCost.interval36Months &&
    candidateCost.interval12Months &&
    candidateCost.interval36Months
  ) {
    comparison = {
      difference12Months: Number(
        (candidateCost.total12Months - currentCost.total12Months).toFixed(2),
      ),
      difference36Months: Number(
        (candidateCost.total36Months - currentCost.total36Months).toFixed(2),
      ),
      intervalsOverlap12Months: intervalsOverlap(
        currentCost.interval12Months,
        candidateCost.interval12Months,
      ),
      intervalsOverlap36Months: intervalsOverlap(
        currentCost.interval36Months,
        candidateCost.interval36Months,
      ),
    };
  }

  let status: DecisionStatus;
  if (errors.length > 0) status = "STOP_INVALID_INPUT";
  else if (failedGates.length > 0) status = "STOP_GATE_FAILURE";
  else if (targetMismatch) status = "STOP_TARGET_MISMATCH";
  else if (missing.length > 0) status = "STOP_MISSING_EVIDENCE";
  else if (inputs.selectedOutcome === null)
    status = "AWAITING_MANUAL_SELECTION";
  else status = "READY_FOR_HUMAN_REVIEW";

  const observedHumanHours =
    observation.observationHours !== null &&
    observation.correctionHours !== null &&
    observation.reconciliationHours !== null
      ? Number(
          (
            observation.observationHours +
            observation.correctionHours +
            observation.reconciliationHours
          ).toFixed(2),
        )
      : null;
  const nonOverlappingHumanHours =
    observedHumanHours !== null && observation.includedContractHours !== null
      ? Number(
          (observedHumanHours - observation.includedContractHours).toFixed(2),
        )
      : null;
  const pendingEvents =
    observation.events !== null && outcomeValues.every((value) => value !== null)
      ? observation.events -
        outcomeValues.reduce((sum, value) => sum + (value ?? 0), 0)
      : null;
  const completeSuccessRate =
    observation.events !== null &&
    observation.events > 0 &&
    observation.completeSuccesses !== null
      ? Number(
          ((observation.completeSuccesses / observation.events) * 100).toFixed(
            2,
          ),
        )
      : null;

  const nextActions: string[] = [];
  if (errors.length > 0) nextActions.push("Corriger les valeurs signalées.");
  if (missing.length > 0)
    nextActions.push("Produire les preuves manquantes sans remplacer un vide par zéro.");
  if (failedGates.length > 0)
    nextActions.push("Réparer puis rejouer chaque porte en échec sur une copie sûre.");
  if (targetMismatch)
    nextActions.push("Aligner le type de cible chiffrée avec la sortie choisie.");
  if (inputs.selectedOutcome === null && errors.length === 0)
    nextActions.push("Choisir manuellement une des cinq sorties et consigner le cas inverse.");
  if (
    comparison?.intervalsOverlap12Months ||
    comparison?.intervalsOverlap36Months
  ) {
    nextActions.push(
      "Les intervalles se recouvrent : ne pas départager les options par le coût seul.",
    );
  }

  return {
    status,
    statusLabel: statusLabels[status],
    canConclude: status === "READY_FOR_HUMAN_REVIEW",
    selectedOutcome: inputs.selectedOutcome,
    missing: [...new Set(missing)],
    errors: [...new Set(errors)],
    failedGates,
    pendingEvents,
    completeSuccessRate,
    observedHumanHours,
    nonOverlappingHumanHours,
    currentCost,
    candidateCost,
    comparison,
    nextActions,
  };
}

function valueOrUnknown(value: number | null, unit = "") {
  return value === null ? "INCONNU" : `${value}${unit}`;
}

function costOrUnknown(value: number | null) {
  return value === null
    ? "INCONNU"
    : new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 2,
      }).format(value);
}

export function buildFlowDossier(
  inputs: FlowObservatoryInputs,
  result = evaluateFlow(inputs),
) {
  const lines = [
    "OBSERVATOIRE D'UN FLUX — DOSSIER LOCAL",
    "Période : 30 jours",
    "Aucune donnée envoyée. Aucun verdict automatique.",
    "",
    "CONTRAT DU FLUX",
    `Plateforme actuelle : ${currentPlatformLabels[inputs.currentPlatform]}`,
    `Source de vérité : ${inputs.sourceOfTruth || "INCONNU"}`,
    `Données : ${dataScopeLabels[inputs.dataScope]}`,
    `Propriétaire : ${inputs.owner || "INCONNU"}`,
    `Remplaçant : ${inputs.substitute || "INCONNU"}`,
    `Délai maximal : ${valueOrUnknown(inputs.maximumAcceptableDelayMinutes, " min")}`,
    "",
    "MESURE OBSERVÉE",
    `Événements : ${valueOrUnknown(inputs.observation.events)}`,
    `Branches exécutées : ${valueOrUnknown(inputs.observation.branchExecutions)}`,
    `Actions / unités comptées : ${valueOrUnknown(inputs.observation.billableUnits)}`,
    `Succès complets : ${valueOrUnknown(inputs.observation.completeSuccesses)}`,
    `Échecs visibles : ${valueOrUnknown(inputs.observation.visibleFailures)}`,
    `Succès partiels : ${valueOrUnknown(inputs.observation.partialSuccesses)}`,
    `Reprises automatiques : ${valueOrUnknown(inputs.observation.automaticRetries)}`,
    `Reprises manuelles : ${valueOrUnknown(inputs.observation.manualRetries)}`,
    `Doublons / effets à annuler : ${valueOrUnknown(inputs.observation.duplicates)}`,
    `Événements non rapprochés : ${valueOrUnknown(result.pendingEvents)}`,
    `Heures humaines observées : ${valueOrUnknown(result.observedHumanHours, " h")}`,
    `Heures non déjà incluses : ${valueOrUnknown(result.nonOverlappingHumanHours, " h")}`,
    "",
    "SEPT PORTES — AUCUNE COMPENSATION",
    ...failureGates.map(
      (gate) =>
        `${gate.number}. ${gate.label} : ${inputs.gates[gate.key].toUpperCase()}`,
    ),
    "",
    "COÛT COURANT",
    `12 mois : ${costOrUnknown(result.currentCost.total12Months)}`,
    `36 mois : ${costOrUnknown(result.currentCost.total36Months)}`,
    `Base incident : ${inputs.currentCosts.incidentBasis || "INCONNU"}`,
    "",
    "CIBLE COMPARÉE",
    `Type : ${candidateKindLabels[inputs.candidateCosts.kind]}`,
    `12 mois : ${costOrUnknown(result.candidateCost?.total12Months ?? null)}`,
    `36 mois : ${costOrUnknown(result.candidateCost?.total36Months ?? null)}`,
    `Base incident : ${inputs.candidateCosts.incidentBasis || "INCONNU"}`,
    "",
    "CINQ SORTIES — AUCUN CLASSEMENT AUTOMATIQUE",
    ...Object.entries(decisionOutcomeLabels).map(
      ([key, label]) =>
        `${inputs.selectedOutcome === key ? "[x]" : "[ ]"} ${label}`,
    ),
    "",
    `État : ${result.statusLabel}`,
    `Option manuelle : ${inputs.selectedOutcome ? decisionOutcomeLabels[inputs.selectedOutcome] : "AUCUNE"}`,
    `Erreurs : ${result.errors.length ? result.errors.join(" | ") : "aucune"}`,
    `Manques : ${result.missing.length ? result.missing.join(" | ") : "aucun"}`,
    `Portes en échec : ${result.failedGates.length ? result.failedGates.join(" | ") : "aucune"}`,
    "",
    "À joindre : capture de l'historique, facture, sept comptes rendus de panne, propriétaire, relève et condition inverse.",
  ];
  return lines.join("\n");
}
