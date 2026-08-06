export type ProofState = "yes" | "no" | "unknown";

export type ObservedPeriod = "unknown" | "day" | "week" | "month";

export type DecisionOption =
  | "keep-configure"
  | "standard"
  | "light-assembly"
  | "custom-back-office"
  | "defer";

export type OptionStatus = "AVAILABLE" | "TO_TEST" | "CONTRADICTED";

export type DecisionStatus =
  | "STOP_MISSING_EVIDENCE"
  | "STOP_INVALID_INPUT"
  | "AWAITING_SELECTION"
  | "CONTRADICTED_SELECTION"
  | "DEFERRED_FOR_EVIDENCE"
  | "READY_FOR_REVIEW";

export const proofQuestions = [
  {
    key: "taskObserved",
    number: 1,
    label: "Tâche réellement observée",
    question:
      "Une personne a-t-elle exécuté la tâche, y compris une exception, pendant une période nommée ?",
  },
  {
    key: "processStable",
    number: 2,
    label: "Processus assez stable",
    question:
      "Les étapes, décisions et exceptions restent-elles assez stables pour être testées sans figer une organisation encore mouvante ?",
  },
  {
    key: "existingOptionTested",
    number: 3,
    label: "Existant ou processus actuel testé",
    question:
      "L’outil ou, à défaut, le processus manuel actuel a-t-il été confronté au même contrat d’écran et aux mêmes cas difficiles ?",
  },
  {
    key: "existingCoversContract",
    number: 4,
    label: "Existant suffisant",
    question:
      "Après ajustement raisonnable, l’outil ou le processus actuel couvre-t-il le rôle, l’action, les données, la preuve, l’exception et la reprise ?",
  },
  {
    key: "standardTested",
    number: 5,
    label: "Standard testé",
    question:
      "Un module ou logiciel standard a-t-il été essayé sur des données fictives et des cas représentatifs ?",
  },
  {
    key: "standardCoversContract",
    number: 6,
    label: "Standard suffisant",
    question:
      "Le standard couvre-t-il le contrat d’écran sans contournement fragile ni responsabilité cachée ?",
  },
  {
    key: "boundaryIsolable",
    number: 7,
    label: "Écart couvert par une brique isolable",
    question:
      "Une brique légère testée couvre-t-elle l’écart restant, avec une frontière, une source de vérité, une exploitation et une reprise nommées ?",
  },
  {
    key: "businessOwnerNamed",
    number: 8,
    label: "Propriétaire métier nommé",
    question:
      "Une personne peut-elle trancher les règles, accepter la recette et décider des évolutions ?",
  },
  {
    key: "supportOwnerNamed",
    number: 9,
    label: "Support et relève nommés",
    question:
      "Une personne et sa relève savent-elles diagnostiquer, escalader et remettre le service en état ?",
  },
  {
    key: "rightsDataExportQualified",
    number: 10,
    label: "Droits, données et export qualifiés",
    question:
      "Les rôles, données sensibles, accès, exports et durées utiles ont-ils été vérifiés sur le périmètre réel ?",
  },
  {
    key: "criticalFallbackTested",
    number: 11,
    label: "Mode dégradé testé",
    question:
      "Une panne du système ou d’un tiers critique a-t-elle été rejouée avec reprise et retour au mode normal ?",
  },
  {
    key: "tcoAndHorizonDocumented",
    number: 12,
    label: "Coût total et horizon documentés",
    question:
      "Les familles de coût sont-elles recueillies sur le même horizon pour toutes les options, sans ligne inconnue mise à zéro ?",
  },
  {
    key: "contractAndExitReviewed",
    number: 13,
    label: "Contrat et sortie relus",
    question:
      "Accès, livrables, droits cédés, composants tiers, documentation, export, transfert et extinction ont-ils été relus ?",
  },
  {
    key: "monitoringPurposeQualified",
    number: 14,
    label: "Finalité des traces qualifiée",
    question:
      "Chaque trace répond-elle à une finalité utile et proportionnée, sans devenir par défaut une surveillance individuelle ?",
  },
] as const;

export type ProofKey = (typeof proofQuestions)[number]["key"];
export type Evidence = Record<ProofKey, ProofState>;

export const proofStateLabels: Record<ProofState, string> = {
  unknown: "À vérifier — preuve manquante",
  yes: "Oui — preuve disponible",
  no: "Non — le test contredit ce point",
};

export const periodLabels: Record<ObservedPeriod, string> = {
  unknown: "À préciser",
  day: "jour observé",
  week: "semaine observée",
  month: "mois observé",
};

export const decisionOptionLabels: Record<DecisionOption, string> = {
  "keep-configure": "Conserver et mieux configurer",
  standard: "Adopter un module ou logiciel standard",
  "light-assembly": "Assembler légèrement des briques existantes",
  "custom-back-office": "Cadrer un back-office dédié",
  defer: "Différer ou abandonner",
};

export const WORKLOAD_ROUNDING_POLICY = {
  name: "dixièmes de minute sûrs",
  minuteStep: 0.1,
  minuteScale: 10,
  minuteDecimalPlaces: 1,
  hourDecimalPlaces: 4,
} as const;

export const MAX_SAFE_OBSERVED_MINUTES =
  Number.MAX_SAFE_INTEGER / WORKLOAD_ROUNDING_POLICY.minuteScale;

export const WORKLOAD_ROUNDING_NOTE =
  "Précision : les minutes sont saisies puis calculées en dixièmes sûrs ; les heures sont arrondies à quatre décimales afin que le plus petit pas positif de 0,1 minute ne devienne pas zéro.";

export interface WorkloadInputs {
  period: ObservedPeriod;
  caseCount: number | null;
  activeMinutesPerCase: number | null;
  recoveryCaseCount: number | null;
  recoveryMinutesPerCase: number | null;
  recoveryAlreadyIncluded: boolean;
}

export interface DecisionInputs {
  evidence: Evidence;
  workload: WorkloadInputs;
  selectedOption: DecisionOption | null;
}

export interface WorkloadResult {
  status: "COMPLETE" | "INCOMPLETE" | "INVALID";
  activeMinutes: number | null;
  recoveryMinutes: number | null;
  totalObservedMinutes: number | null;
  totalObservedHours: number | null;
  missing: string[];
  errors: string[];
  explanation: string;
}

export interface OptionAssessment {
  option: DecisionOption;
  label: string;
  status: OptionStatus;
  missingEvidence: string[];
  contradictions: string[];
  nextTest: string;
}

export interface DecisionResult {
  status: DecisionStatus;
  label: string;
  canConclude: boolean;
  selectedDecision: DecisionOption | null;
  criticalUnknowns: string[];
  blockingFacts: string[];
  inputErrors: string[];
  workload: WorkloadResult;
  optionAssessments: OptionAssessment[];
  reasons: string[];
  nextActions: string[];
}

const emptyEvidence = Object.fromEntries(
  proofQuestions.map((question) => [question.key, "unknown"]),
) as Evidence;

export function createEmptyDecisionInputs(): DecisionInputs {
  return {
    evidence: { ...emptyEvidence },
    workload: {
      period: "unknown",
      caseCount: null,
      activeMinutesPerCase: null,
      recoveryCaseCount: null,
      recoveryMinutesPerCase: null,
      recoveryAlreadyIncluded: false,
    },
    selectedOption: null,
  };
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
  if (!Number.isFinite(value) || !Number.isSafeInteger(value) || value < 0) {
    errors.push(`${label} doit être un entier fini, sûr et positif ou nul.`);
  }
}

function validateMinutes(
  value: number | null,
  label: string,
  missing: string[],
  errors: string[],
) {
  if (value === null) {
    missing.push(label);
    return;
  }
  if (!Number.isFinite(value) || value < 0) {
    errors.push(`${label} doit être un nombre fini et positif ou nul.`);
    return;
  }
  if (!Number.isSafeInteger(value * WORKLOAD_ROUNDING_POLICY.minuteScale)) {
    errors.push(
      `${label} doit être saisi par pas de 0,1 minute dans la plage de calcul fiable.`,
    );
  }
}

function safeProductInMinuteTenths(
  count: number,
  minutesPerCase: number,
  label: string,
  errors: string[],
) {
  const minuteTenths = minutesPerCase * WORKLOAD_ROUNDING_POLICY.minuteScale;
  const productTenths = count * minuteTenths;
  if (!Number.isSafeInteger(productTenths)) {
    errors.push(`${label} dépasse la plage de calcul fiable.`);
    return null;
  }
  return productTenths;
}

function minuteTenthsToMinutes(value: number) {
  return value / WORKLOAD_ROUNDING_POLICY.minuteScale;
}

function roundHoursFromMinuteTenths(value: number) {
  const hours = value / (60 * WORKLOAD_ROUNDING_POLICY.minuteScale);
  return Number(hours.toFixed(WORKLOAD_ROUNDING_POLICY.hourDecimalPlaces));
}

export function calculateObservedWorkload(
  inputs: WorkloadInputs,
): WorkloadResult {
  const missing: string[] = [];
  const errors: string[] = [];

  if (inputs.period === "unknown") missing.push("période observée");
  validateCount(inputs.caseCount, "nombre de cas", missing, errors);
  validateMinutes(
    inputs.activeMinutesPerCase,
    "minutes actives par cas",
    missing,
    errors,
  );
  validateCount(
    inputs.recoveryCaseCount,
    "nombre de cas en reprise",
    missing,
    errors,
  );
  validateMinutes(
    inputs.recoveryMinutesPerCase,
    "minutes de reprise par cas",
    missing,
    errors,
  );

  if (
    inputs.caseCount !== null &&
    inputs.recoveryCaseCount !== null &&
    Number.isSafeInteger(inputs.caseCount) &&
    Number.isSafeInteger(inputs.recoveryCaseCount) &&
    inputs.caseCount >= 0 &&
    inputs.recoveryCaseCount > inputs.caseCount
  ) {
    errors.push(
      "Le nombre de cas en reprise ne peut pas dépasser le nombre total de cas observés.",
    );
  }

  if (errors.length > 0) {
    return {
      status: "INVALID",
      activeMinutes: null,
      recoveryMinutes: null,
      totalObservedMinutes: null,
      totalObservedHours: null,
      missing,
      errors,
      explanation:
        "Corrigez les unités ou valeurs invalides avant toute interprétation.",
    };
  }

  if (missing.length > 0) {
    return {
      status: "INCOMPLETE",
      activeMinutes: null,
      recoveryMinutes: null,
      totalObservedMinutes: null,
      totalObservedHours: null,
      missing,
      errors,
      explanation:
        "Une charge inconnue reste inconnue : elle n’est ni zéro ni une économie.",
    };
  }

  const activeMinuteTenths = safeProductInMinuteTenths(
    inputs.caseCount as number,
    inputs.activeMinutesPerCase as number,
    "La charge active",
    errors,
  );
  const recoveryMinuteTenths = safeProductInMinuteTenths(
    inputs.recoveryCaseCount as number,
    inputs.recoveryMinutesPerCase as number,
    "La charge de reprise",
    errors,
  );

  if (activeMinuteTenths === null || recoveryMinuteTenths === null) {
    return {
      status: "INVALID",
      activeMinutes: null,
      recoveryMinutes: null,
      totalObservedMinutes: null,
      totalObservedHours: null,
      missing,
      errors,
      explanation:
        "Réduisez le périmètre ou vérifiez les unités avant de recalculer.",
    };
  }

  const totalObservedMinuteTenths = inputs.recoveryAlreadyIncluded
    ? activeMinuteTenths
    : activeMinuteTenths + recoveryMinuteTenths;

  if (!Number.isSafeInteger(totalObservedMinuteTenths)) {
    errors.push("La charge totale dépasse la plage de calcul fiable.");
    return {
      status: "INVALID",
      activeMinutes: minuteTenthsToMinutes(activeMinuteTenths),
      recoveryMinutes: minuteTenthsToMinutes(recoveryMinuteTenths),
      totalObservedMinutes: null,
      totalObservedHours: null,
      missing,
      errors,
      explanation:
        "Réduisez le périmètre ou vérifiez les unités avant de recalculer.",
    };
  }

  const activeMinutes = minuteTenthsToMinutes(activeMinuteTenths);
  const recoveryMinutes = minuteTenthsToMinutes(recoveryMinuteTenths);
  const totalObservedMinutes = minuteTenthsToMinutes(totalObservedMinuteTenths);

  return {
    status: "COMPLETE",
    activeMinutes,
    recoveryMinutes,
    totalObservedMinutes,
    totalObservedHours: roundHoursFromMinuteTenths(totalObservedMinuteTenths),
    missing,
    errors,
    explanation: inputs.recoveryAlreadyIncluded
      ? "La reprise est affichée séparément mais n’est pas ajoutée une seconde fois à la charge active."
      : "La charge totale additionne la charge active et la charge de reprise sur la même période.",
  };
}

interface Requirement {
  key: ProofKey;
  expected: Exclude<ProofState, "unknown">;
  why: string;
}

const commonOperationalRequirements: Requirement[] = [
  {
    key: "taskObserved",
    expected: "yes",
    why: "la tâche doit être observée, exception comprise",
  },
  {
    key: "businessOwnerNamed",
    expected: "yes",
    why: "un propriétaire métier doit pouvoir décider et accepter",
  },
  {
    key: "supportOwnerNamed",
    expected: "yes",
    why: "le support et sa relève doivent être nommés",
  },
  {
    key: "rightsDataExportQualified",
    expected: "yes",
    why: "droits, données sensibles et export doivent être qualifiés",
  },
  {
    key: "criticalFallbackTested",
    expected: "yes",
    why: "une dépendance critique exige un mode dégradé testé",
  },
  {
    key: "tcoAndHorizonDocumented",
    expected: "yes",
    why: "le coût total doit être comparé sur un horizon commun",
  },
  {
    key: "contractAndExitReviewed",
    expected: "yes",
    why: "la sortie et le contrat doivent avoir été relus",
  },
  {
    key: "monitoringPurposeQualified",
    expected: "yes",
    why: "la finalité des traces doit être qualifiée",
  },
];

const optionRequirements: Record<
  Exclude<DecisionOption, "defer">,
  Requirement[]
> = {
  "keep-configure": [
    ...commonOperationalRequirements,
    {
      key: "existingOptionTested",
      expected: "yes",
      why: "l’outil ou le processus actuel doit avoir été testé sur le même contrat",
    },
    {
      key: "existingCoversContract",
      expected: "yes",
      why: "l’outil ou le processus actuel ajusté doit couvrir le contrat d’écran",
    },
  ],
  standard: [
    ...commonOperationalRequirements,
    {
      key: "standardTested",
      expected: "yes",
      why: "le standard doit avoir été testé sur les cas difficiles",
    },
    {
      key: "standardCoversContract",
      expected: "yes",
      why: "le standard doit couvrir le contrat sans contournement fragile",
    },
  ],
  "light-assembly": [
    ...commonOperationalRequirements,
    {
      key: "processStable",
      expected: "yes",
      why: "le processus doit être assez stable pour figer une frontière",
    },
    {
      key: "standardTested",
      expected: "yes",
      why: "le standard doit être testé avant d’ajouter une brique",
    },
    {
      key: "standardCoversContract",
      expected: "no",
      why: "un écart réel doit subsister après le test du standard",
    },
    {
      key: "boundaryIsolable",
      expected: "yes",
      why: "une brique testée doit couvrir l’écart avec une frontière, une source de vérité, une exploitation et une reprise",
    },
  ],
  "custom-back-office": [
    ...commonOperationalRequirements,
    {
      key: "processStable",
      expected: "yes",
      why: "le processus doit être assez stable pour être construit",
    },
    {
      key: "existingOptionTested",
      expected: "yes",
      why: "l’outil ou le processus actuel doit avoir été confronté au même contrat",
    },
    {
      key: "existingCoversContract",
      expected: "no",
      why: "l’existant ne doit pas déjà couvrir le besoin",
    },
    {
      key: "standardTested",
      expected: "yes",
      why: "un standard doit avoir été testé avant du code dédié",
    },
    {
      key: "standardCoversContract",
      expected: "no",
      why: "le standard ne doit pas couvrir correctement le contrat",
    },
    {
      key: "boundaryIsolable",
      expected: "no",
      why: "l’écart ne doit pas pouvoir être isolé dans une brique plus légère",
    },
  ],
};

function assessOption(
  option: DecisionOption,
  evidence: Evidence,
): OptionAssessment {
  if (option === "defer") {
    return {
      option,
      label: decisionOptionLabels[option],
      status: "AVAILABLE",
      missingEvidence: [],
      contradictions: [],
      nextTest:
        "Nommer la première preuve qui pourrait rouvrir la décision, son responsable et sa date.",
    };
  }

  const requirements = optionRequirements[option];
  const missingEvidence: string[] = [];
  const contradictions: string[] = [];

  for (const requirement of requirements) {
    const state = evidence[requirement.key];
    const label =
      proofQuestions.find((question) => question.key === requirement.key)
        ?.label ?? requirement.key;
    if (state === "unknown") {
      missingEvidence.push(`${label} : ${requirement.why}`);
    } else if (state !== requirement.expected) {
      contradictions.push(`${label} : ${requirement.why}`);
    }
  }

  return {
    option,
    label: decisionOptionLabels[option],
    status:
      contradictions.length > 0
        ? "CONTRADICTED"
        : missingEvidence.length > 0
          ? "TO_TEST"
          : "AVAILABLE",
    missingEvidence,
    contradictions,
    nextTest:
      option === "keep-configure"
        ? "Configurer un seul écart puis rejouer les deux échecs représentatifs."
        : option === "standard"
          ? "Prototyper le contrat d’écran dans le standard avec des données fictives."
          : option === "light-assembly"
            ? "Couper la brique ajoutée et vérifier la file d’attente, la reprise et la source de vérité."
            : "Faire accepter un prototype du cas difficile, son exploitation et sa sortie avant de chiffrer.",
  };
}

const hardStopProofs: Array<{
  key: ProofKey;
  message: string;
}> = [
  {
    key: "taskObserved",
    message: "La tâche n’a pas été réellement observée.",
  },
  {
    key: "processStable",
    message: "Le processus est encore instable : ne le figez pas dans du code.",
  },
  {
    key: "existingOptionTested",
    message:
      "L’outil ou le processus actuel n’a pas encore été testé sur le même contrat d’écran.",
  },
  {
    key: "standardTested",
    message:
      "Aucune option standard n’a encore été testée sur le même contrat.",
  },
  {
    key: "businessOwnerNamed",
    message: "Aucun propriétaire métier ne peut trancher et accepter.",
  },
  {
    key: "supportOwnerNamed",
    message: "Le support ou sa relève n’est pas nommé.",
  },
  {
    key: "rightsDataExportQualified",
    message: "Droits, données sensibles ou export ne sont pas qualifiés.",
  },
  {
    key: "criticalFallbackTested",
    message: "Une dépendance critique n’a pas de mode dégradé testé.",
  },
  {
    key: "tcoAndHorizonDocumented",
    message: "Le coût total ou l’horizon de comparaison n’est pas documenté.",
  },
  {
    key: "contractAndExitReviewed",
    message:
      "La propriété contractuelle ou la réversibilité n’a pas été relue.",
  },
  {
    key: "monitoringPurposeQualified",
    message:
      "La finalité des traces ou le risque de surveillance reste non qualifié.",
  },
];

export function evaluateDecision(inputs: DecisionInputs): DecisionResult {
  const workload = calculateObservedWorkload(inputs.workload);
  const optionAssessments = (
    Object.keys(decisionOptionLabels) as DecisionOption[]
  ).map((option) => assessOption(option, inputs.evidence));
  const criticalUnknowns = proofQuestions
    .filter((question) => inputs.evidence[question.key] === "unknown")
    .map((question) => `${question.number}. ${question.label}`);
  const blockingFacts = hardStopProofs
    .filter((stop) => inputs.evidence[stop.key] === "no")
    .map((stop) => stop.message);
  const inputErrors = workload.errors;

  if (workload.status === "INCOMPLETE") {
    criticalUnknowns.push(
      ...workload.missing.map((item) => `Charge observée : ${item}`),
    );
  }

  if (inputErrors.length > 0) {
    return {
      status: "STOP_INVALID_INPUT",
      label: "Corriger les données saisies",
      canConclude: false,
      selectedDecision: null,
      criticalUnknowns,
      blockingFacts,
      inputErrors,
      workload,
      optionAssessments,
      reasons: [],
      nextActions: [
        "Vérifier la période, les unités et les valeurs négatives ou non finies.",
        "Conserver zéro seulement lorsqu’il a réellement été observé.",
      ],
    };
  }

  if (criticalUnknowns.length > 0 || blockingFacts.length > 0) {
    return {
      status:
        inputs.selectedOption === "defer"
          ? "DEFERRED_FOR_EVIDENCE"
          : "STOP_MISSING_EVIDENCE",
      label:
        inputs.selectedOption === "defer"
          ? "Décision différée, prochaine preuve à nommer"
          : "Décision suspendue",
      canConclude: false,
      selectedDecision: null,
      criticalUnknowns,
      blockingFacts,
      inputErrors,
      workload,
      optionAssessments,
      reasons: [
        "Une preuve critique manquante ne vaut ni zéro, ni feu vert, ni recommandation automatique.",
      ],
      nextActions: [
        "Choisir une tâche et une période représentatives.",
        "Tester l’existant et un standard avec le même contrat d’écran.",
        "Nommer le propriétaire métier, le support et la preuve de reprise.",
      ],
    };
  }

  if (!inputs.selectedOption) {
    return {
      status: "AWAITING_SELECTION",
      label: "Cinq options sont visibles, aucune n’est choisie à votre place",
      canConclude: false,
      selectedDecision: null,
      criticalUnknowns,
      blockingFacts,
      inputErrors,
      workload,
      optionAssessments,
      reasons: [
        "Les preuves ferment ou ouvrent des options ; elles ne remplacent pas la décision responsable.",
      ],
      nextActions: [
        "Comparer les options encore disponibles sur le même horizon de coût.",
        "Choisir manuellement une option et faire relire les preuves par les responsables nommés.",
      ],
    };
  }

  if (inputs.selectedOption === "defer") {
    return {
      status: "READY_FOR_REVIEW",
      label: decisionOptionLabels.defer,
      canConclude: true,
      selectedDecision: "defer",
      criticalUnknowns,
      blockingFacts,
      inputErrors,
      workload,
      optionAssessments,
      reasons: [
        "Différer reste une décision recevable même lorsque les preuves permettraient d’investir.",
      ],
      nextActions: [
        "Consigner la raison du report et l’événement qui rouvrira l’examen.",
      ],
    };
  }

  const selectedAssessment = optionAssessments.find(
    (assessment) => assessment.option === inputs.selectedOption,
  );

  if (!selectedAssessment || selectedAssessment.status !== "AVAILABLE") {
    return {
      status: "CONTRADICTED_SELECTION",
      label: "L’option choisie contredit encore les preuves",
      canConclude: false,
      selectedDecision: null,
      criticalUnknowns,
      blockingFacts,
      inputErrors,
      workload,
      optionAssessments,
      reasons: [
        ...(selectedAssessment?.missingEvidence ?? []),
        ...(selectedAssessment?.contradictions ?? []),
      ],
      nextActions: [selectedAssessment?.nextTest ?? "Rejouer le test."],
    };
  }

  return {
    status: "READY_FOR_REVIEW",
    label: decisionOptionLabels[inputs.selectedOption],
    canConclude: true,
    selectedDecision: inputs.selectedOption,
    criticalUnknowns,
    blockingFacts,
    inputErrors,
    workload,
    optionAssessments,
    reasons: [
      "Cette option a été choisie manuellement et ne rencontre plus de contradiction dans les preuves saisies.",
      "Le calcul décrit une charge observée ; il ne prouve ni économie, ni rentabilité, ni budget de projet.",
    ],
    nextActions: [
      selectedAssessment.nextTest,
      "Faire accepter le contrat d’écran, les exceptions, la reprise, le coût total et la sortie par leurs propriétaires.",
    ],
  };
}

export function buildDecisionDossier(
  inputs: DecisionInputs,
  result = evaluateDecision(inputs),
): string {
  const workload = result.workload;
  const workloadLines =
    workload.status === "COMPLETE"
      ? [
          `Charge active : ${workload.activeMinutes} min / ${periodLabels[inputs.workload.period]}`,
          `Charge de reprise : ${workload.recoveryMinutes} min / ${periodLabels[inputs.workload.period]}`,
          `Charge totale observée : ${workload.totalObservedMinutes} min (${workload.totalObservedHours} h) / ${periodLabels[inputs.workload.period]}`,
          WORKLOAD_ROUNDING_NOTE,
          workload.explanation,
        ]
      : [
          `Charge : ${workload.status === "INVALID" ? "saisie invalide" : "incomplète"}`,
          ...workload.missing.map((item) => `À vérifier : ${item}`),
          ...workload.errors.map((item) => `Erreur : ${item}`),
        ];

  return [
    "DOSSIER DE DÉCISION — BACK-OFFICE PME",
    "",
    `État : ${result.label}`,
    `Option choisie manuellement : ${inputs.selectedOption ? decisionOptionLabels[inputs.selectedOption] : "aucune"}`,
    `Conclusion possible : ${result.canConclude ? "oui, sous revue des responsables" : "non"}`,
    "",
    "CHARGE OBSERVÉE",
    ...workloadLines,
    "",
    "PREUVES",
    ...proofQuestions.map(
      (question) =>
        `${question.number}. ${question.label} : ${proofStateLabels[inputs.evidence[question.key]]}`,
    ),
    "",
    "CINQ OPTIONS — AUCUN CLASSEMENT AUTOMATIQUE",
    ...result.optionAssessments.flatMap((assessment) => [
      `${assessment.label} : ${assessment.status}`,
      ...assessment.missingEvidence.map(
        (item) => `  Preuve manquante : ${item}`,
      ),
      ...assessment.contradictions.map((item) => `  Contradiction : ${item}`),
      `  Test suivant : ${assessment.nextTest}`,
    ]),
    "",
    "BLOCAGES",
    ...(result.criticalUnknowns.length > 0
      ? result.criticalUnknowns.map((item) => `Preuve manquante : ${item}`)
      : ["Aucune preuve critique laissée inconnue."]),
    ...(result.blockingFacts.length > 0
      ? result.blockingFacts.map((item) => `Fait bloquant : ${item}`)
      : ["Aucun fait bloquant déclaré."]),
    ...result.inputErrors.map((item) => `Saisie invalide : ${item}`),
    "",
    "PROCHAINES ACTIONS",
    ...result.nextActions.map((action, index) => `${index + 1}. ${action}`),
    "",
    "Limite : ce dossier ne constitue ni un devis, ni un audit de conformité, ni une recommandation automatique.",
  ].join("\n");
}
