export const MOBILE_DECISION_VERSION =
  "mobile-framework-decision-r2-2026-07-25";
export const MOBILE_DECISION_SOURCE_DATE = "2026-07-25";

export const MOBILE_GATE_IDS = [
  "critical_function",
  "offline_data",
  "device_performance",
  "accessibility",
  "publication",
  "team",
  "recovery",
] as const;

export type MobileGateId = (typeof MOBILE_GATE_IDS)[number];
export type MobileGateStatus = "pass" | "fail" | "unknown";

export const MOBILE_GATES: Record<
  MobileGateId,
  { label: string; expected: string }
> = {
  critical_function: {
    label: "Fonction éliminatoire",
    expected:
      "La fonction critique réussit sur iOS et Android avec le module, le plugin ou le code natif réellement retenu.",
  },
  offline_data: {
    label: "Hors-ligne et conflits",
    expected:
      "Aucune perte silencieuse ni duplication non résolue après mode avion, arrêt forcé, conflit et reconnexion.",
  },
  device_performance: {
    label: "Appareils et performance",
    expected:
      "Le build de production passe les seuils prévus sur les appareils planchers, avec distributions p50 et p95.",
  },
  accessibility: {
    label: "VoiceOver et TalkBack",
    expected:
      "Les tâches critiques restent réalisables avec VoiceOver, TalkBack et l’affichage agrandi.",
  },
  publication: {
    label: "Build, signature et diffusion",
    expected:
      "Une build signée et traçable est produite depuis la CI puis diffusée sur une piste de test détenue par l’entreprise.",
  },
  team: {
    label: "Équipe et relais",
    expected:
      "Les compétences mobile, iOS, Android et publication ont un responsable et un remplaçant disponibles.",
  },
  recovery: {
    label: "Reprise par une autre équipe",
    expected:
      "Une seconde équipe reconstruit, signe et publie une bêta depuis un poste propre sans l’auteur initial.",
  },
};

export interface MobileGateEvidence {
  status: MobileGateStatus;
  evidence: string;
}

export interface MobileTcoInput {
  dayRate: number | undefined;
  internalDayRate: number | undefined;
  initialDays: number | undefined;
  initialFixedCost: number | undefined;
  technicalMaintenanceDaysPerYear: number | undefined;
  productEvolutionDaysPerYear: number | undefined;
  incidentAndSecurityDaysPerYear: number | undefined;
  internalDaysPerYear: number | undefined;
  servicesPerYear: number | undefined;
  exitDays: number | undefined;
}

export type MobileTcoField = keyof MobileTcoInput;

export const MOBILE_TCO_FIELDS: ReadonlyArray<{
  key: MobileTcoField;
  label: string;
  unit: string;
  help: string;
}> = [
  {
    key: "dayRate",
    label: "Taux des journées techniques",
    unit: "€ HT/j",
    help: "Même convention pour les deux options, sauf raison documentée.",
  },
  {
    key: "internalDayRate",
    label: "Coût du temps interne",
    unit: "€ HT/j",
    help: "Produit, validation, comptes et coordination côté entreprise.",
  },
  {
    key: "initialDays",
    label: "Construction initiale",
    unit: "jours",
    help: "Toutes disciplines incluses sur le même périmètre.",
  },
  {
    key: "initialFixedCost",
    label: "Appareils, comptes et mise en place",
    unit: "€ HT",
    help: "Postes ponctuels non comptés dans les journées.",
  },
  {
    key: "technicalMaintenanceDaysPerYear",
    label: "Maintenance technique",
    unit: "jours/an",
    help: "Framework, OS, outils, plugins et sécurité.",
  },
  {
    key: "productEvolutionDaysPerYear",
    label: "Évolutions métier",
    unit: "jours/an",
    help: "Nouvelles règles et fonctions, séparées de l’entretien.",
  },
  {
    key: "incidentAndSecurityDaysPerYear",
    label: "Incidents et sécurité",
    unit: "jours/an",
    help: "Hypothèse ou capacité réservée, clairement datée.",
  },
  {
    key: "internalDaysPerYear",
    label: "Temps interne",
    unit: "jours/an",
    help: "Pilotage, recette, stores et décision.",
  },
  {
    key: "servicesPerYear",
    label: "Services récurrents",
    unit: "€ HT/an",
    help: "Build, télémétrie, tests, licences et hébergement mobile.",
  },
  {
    key: "exitDays",
    label: "Sortie et reprise",
    unit: "jours",
    help: "Exercice de build tierce, transfert et migration à l’horizon.",
  },
];

export interface MobileTcoKnown {
  kind: "known";
  horizonMonths: 12 | 36 | 60;
  total: number;
  initial: number;
  recurring: number;
  exit: number;
}

export interface MobileTcoUnknown {
  kind: "unknown";
  horizonMonths: 12 | 36 | 60;
  missing: MobileTcoField[];
}

export type MobileTcoResult = MobileTcoKnown | MobileTcoUnknown;

export interface MobileCandidateInput {
  name: string;
  stack: string;
  moduleInventory: string;
  sensitivityExtraDays: number | undefined;
  gates: Record<MobileGateId, MobileGateEvidence>;
  tco: MobileTcoInput;
}

export type MobileCandidateQualification =
  | {
      status: "eliminated";
      failedGates: MobileGateId[];
      unknownGates: MobileGateId[];
    }
  | {
      status: "unqualified";
      failedGates: [];
      unknownGates: MobileGateId[];
    }
  | {
      status: "qualified";
      failedGates: [];
      unknownGates: [];
    };

export interface MobileDecisionContext {
  decisionDate: string;
  businessNeed: string;
  usersAndTask: string;
  devicePark: string;
  criticalFunction: string;
  offlineAndConflicts: string;
  distribution: string;
  accessibilityPath: string;
  candidates: [MobileCandidateInput, MobileCandidateInput];
}

const REQUIRED_TCO_FIELDS: MobileTcoField[] = [
  "dayRate",
  "internalDayRate",
  "initialDays",
  "initialFixedCost",
  "technicalMaintenanceDaysPerYear",
  "productEvolutionDaysPerYear",
  "incidentAndSecurityDaysPerYear",
  "internalDaysPerYear",
  "servicesPerYear",
  "exitDays",
];

export function createEmptyMobileGateEvidence(): Record<
  MobileGateId,
  MobileGateEvidence
> {
  return Object.fromEntries(
    MOBILE_GATE_IDS.map((id) => [id, { status: "unknown", evidence: "" }]),
  ) as Record<MobileGateId, MobileGateEvidence>;
}

export function createEmptyMobileTcoInput(): MobileTcoInput {
  return {
    dayRate: undefined,
    internalDayRate: undefined,
    initialDays: undefined,
    initialFixedCost: undefined,
    technicalMaintenanceDaysPerYear: undefined,
    productEvolutionDaysPerYear: undefined,
    incidentAndSecurityDaysPerYear: undefined,
    internalDaysPerYear: undefined,
    servicesPerYear: undefined,
    exitDays: undefined,
  };
}

export function createEmptyMobileCandidate(name: string): MobileCandidateInput {
  return {
    name,
    stack: "",
    moduleInventory: "",
    sensitivityExtraDays: undefined,
    gates: createEmptyMobileGateEvidence(),
    tco: createEmptyMobileTcoInput(),
  };
}

export function createEmptyMobileDecisionContext(): MobileDecisionContext {
  return {
    decisionDate: "",
    businessNeed: "",
    usersAndTask: "",
    devicePark: "",
    criticalFunction: "",
    offlineAndConflicts: "",
    distribution: "",
    accessibilityPath: "",
    candidates: [
      createEmptyMobileCandidate("Option A"),
      createEmptyMobileCandidate("Option B"),
    ],
  };
}

function isKnownNonNegative(value: number | undefined): value is number {
  return value !== undefined && Number.isFinite(value) && value >= 0;
}

export function calculateMobileTco(
  input: MobileTcoInput,
  horizonMonths: 12 | 36 | 60,
): MobileTcoResult {
  const missing = REQUIRED_TCO_FIELDS.filter(
    (field) => !isKnownNonNegative(input[field]),
  );

  if (missing.length > 0) {
    return { kind: "unknown", horizonMonths, missing };
  }

  const years = horizonMonths / 12;
  const initial = input.initialDays! * input.dayRate! + input.initialFixedCost!;
  const recurring =
    years *
    ((input.technicalMaintenanceDaysPerYear! +
      input.productEvolutionDaysPerYear! +
      input.incidentAndSecurityDaysPerYear!) *
      input.dayRate! +
      input.internalDaysPerYear! * input.internalDayRate! +
      input.servicesPerYear!);
  const exit = input.exitDays! * input.dayRate!;

  return {
    kind: "known",
    horizonMonths,
    total: initial + recurring + exit,
    initial,
    recurring,
    exit,
  };
}

export function calculateMobileTcoSeries(
  input: MobileTcoInput,
): [MobileTcoResult, MobileTcoResult, MobileTcoResult] {
  return [
    calculateMobileTco(input, 12),
    calculateMobileTco(input, 36),
    calculateMobileTco(input, 60),
  ];
}

function hasGateEvidence(gate: MobileGateEvidence): boolean {
  return gate.evidence.trim().length > 0;
}

export function effectiveMobileGateStatus(
  gate: MobileGateEvidence,
): MobileGateStatus {
  if (gate.status === "unknown" || !hasGateEvidence(gate)) return "unknown";
  return gate.status;
}

export function qualifyMobileCandidate(
  gates: Record<MobileGateId, MobileGateEvidence>,
): MobileCandidateQualification {
  const failedGates = MOBILE_GATE_IDS.filter(
    (id) => effectiveMobileGateStatus(gates[id]) === "fail",
  );
  const unknownGates = MOBILE_GATE_IDS.filter(
    (id) => effectiveMobileGateStatus(gates[id]) === "unknown",
  );

  if (failedGates.length > 0) {
    return { status: "eliminated", failedGates, unknownGates };
  }
  if (unknownGates.length > 0) {
    return { status: "unqualified", failedGates: [], unknownGates };
  }
  return { status: "qualified", failedGates: [], unknownGates: [] };
}

export function normalizeMobileSensitivityExtraDays(
  value: number | undefined,
): number | undefined {
  return isKnownNonNegative(value) ? value : undefined;
}

export function addCriticalModuleDays(
  input: MobileTcoInput,
  extraDays: number,
): MobileTcoInput {
  const normalizedExtraDays = normalizeMobileSensitivityExtraDays(extraDays);
  if (normalizedExtraDays === undefined) {
    return { ...input, initialDays: undefined };
  }
  return {
    ...input,
    initialDays:
      input.initialDays === undefined
        ? undefined
        : input.initialDays + normalizedExtraDays,
  };
}

function formatAmount(value: number): string {
  return `${Math.round(value).toLocaleString("fr-FR")} € HT`;
}

function formatTco(result: MobileTcoResult): string {
  if (result.kind === "unknown") {
    return `ND — ${result.missing.length} poste(s) requis à renseigner`;
  }
  return formatAmount(result.total);
}

function formatRawNumber(value: number): string {
  return value.toLocaleString("fr-FR", {
    useGrouping: false,
    maximumFractionDigits: 20,
  });
}

function formatTcoAssumption(value: number | undefined, unit: string): string {
  if (!isKnownNonNegative(value)) return `ND (${unit})`;
  return `${formatRawNumber(value)} ${unit}`;
}

function formatGateForReport(gate: MobileGateEvidence): string {
  const effectiveStatus = effectiveMobileGateStatus(gate);
  const evidence = gate.evidence.trim();

  if (effectiveStatus === "unknown") {
    if (gate.status === "unknown") {
      return evidence ? `ND — ${evidence}` : "ND — preuve requise";
    }
    return `ND — statut ${gate.status.toUpperCase()} non étayé ; preuve requise`;
  }

  return `${effectiveStatus.toUpperCase()} — ${evidence}`;
}

function qualificationLabel(
  qualification: MobileCandidateQualification,
): string {
  if (qualification.status === "qualified") return "QUALIFIÉE";
  if (qualification.status === "eliminated") {
    return `ÉLIMINÉE — ${qualification.failedGates
      .map((id) => MOBILE_GATES[id].label)
      .join(", ")}`;
  }
  return `NON QUALIFIÉE — ${qualification.unknownGates.length} porte(s) restent ND`;
}

export function buildMobileDecisionReport(
  context: MobileDecisionContext,
): string {
  const lines = [
    "DOSSIER DE PREUVE AVANT FRAMEWORK",
    `Version : ${MOBILE_DECISION_VERSION}`,
    `Sources du guide vérifiées le : ${MOBILE_DECISION_SOURCE_DATE}`,
    `Date de décision : ${context.decisionDate || "ND"}`,
    "",
    "BESOIN COMMUN",
    `Besoin et résultat attendu : ${context.businessNeed || "ND"}`,
    `Utilisateurs et tâche : ${context.usersAndTask || "ND"}`,
    `Parc appareils/OS : ${context.devicePark || "ND"}`,
    `Fonction éliminatoire : ${context.criticalFunction || "ND"}`,
    `Hors-ligne et conflits : ${context.offlineAndConflicts || "ND"}`,
    `Diffusion : ${context.distribution || "ND"}`,
    `Parcours accessible : ${context.accessibilityPath || "ND"}`,
  ];

  context.candidates.forEach((candidate) => {
    const qualification = qualifyMobileCandidate(candidate.gates);
    const tco = calculateMobileTcoSeries(candidate.tco);
    const sensitivityExtraDays = normalizeMobileSensitivityExtraDays(
      candidate.sensitivityExtraDays,
    );
    const stressedTco =
      sensitivityExtraDays === undefined
        ? null
        : calculateMobileTcoSeries(
            addCriticalModuleDays(candidate.tco, sensitivityExtraDays),
          );
    lines.push(
      "",
      candidate.name.toUpperCase(),
      `Architecture et services : ${candidate.stack || "ND"}`,
      `Modules/SDK/versions/licences/plan B : ${
        candidate.moduleInventory || "ND"
      }`,
      `Verdict des portes : ${qualificationLabel(qualification)}`,
    );

    MOBILE_GATE_IDS.forEach((id) => {
      const gate = candidate.gates[id];
      lines.push(`- ${MOBILE_GATES[id].label} : ${formatGateForReport(gate)}`);
    });

    lines.push("", "HYPOTHÈSES TCO");
    MOBILE_TCO_FIELDS.forEach((field) => {
      lines.push(
        `- ${field.label} : ${formatTcoAssumption(
          candidate.tco[field.key],
          field.unit,
        )}`,
      );
    });

    lines.push(
      "",
      `TCO 12 mois : ${formatTco(tco[0])}`,
      `TCO 36 mois : ${formatTco(tco[1])}`,
      `TCO 60 mois : ${formatTco(tco[2])}`,
      "",
      `Sensibilité — jours ajoutés au travail initial : ${
        sensitivityExtraDays === undefined
          ? "ND"
          : `${formatRawNumber(sensitivityExtraDays)} jours`
      }`,
      `Sensibilité 12 mois : ${stressedTco ? formatTco(stressedTco[0]) : "ND"}`,
      `Sensibilité 36 mois : ${stressedTco ? formatTco(stressedTco[1]) : "ND"}`,
      `Sensibilité 60 mois : ${stressedTco ? formatTco(stressedTco[2]) : "ND"}`,
    );
  });

  lines.push(
    "",
    "RÈGLE DE DÉCISION",
    "Un échec sur une porte éliminatoire n’est jamais compensé par le prix.",
    "Une porte ou un poste de coût ND reste inconnu : il ne vaut ni zéro euro ni zéro point.",
    "Le dossier ne désigne aucun vainqueur automatique. Décidez seulement entre les options qualifiées, à partir des preuves et sensibilités relues par les responsables.",
  );

  return lines.join("\n");
}
