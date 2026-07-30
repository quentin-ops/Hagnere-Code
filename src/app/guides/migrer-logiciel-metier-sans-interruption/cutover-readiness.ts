export const cutoverGates = [
  {
    id: "businessContinuity",
    label: "Continuité métier",
    question:
      "Les parcours qui doivent continuer pendant la bascule et le mode dégradé ont-ils été rejoués par leurs responsables métier ?",
    expectedProof:
      "Un compte rendu daté des parcours testés, de leur capacité en mode dégradé, des écarts et du retour à la normale.",
  },
  {
    id: "writeAuthority",
    label: "Source d’écriture",
    question:
      "Pour chaque opération de transition, sait-on quel logiciel fait foi et comment les nouvelles écritures seront rapprochées ?",
    expectedProof:
      "Une matrice source/lot/opération, un journal de transition et un responsable nommé pour chaque écart.",
  },
  {
    id: "dataReconciliation",
    label: "Rapprochement des données",
    question:
      "Les dossiers témoins, totaux et contrôles d’intégrité du même périmètre ont-ils été vérifiés après la copie ?",
    expectedProof:
      "Des contrôles reproductibles, leurs résultats, les écarts acceptés ou refusés et leurs propriétaires.",
  },
  {
    id: "restoredFallback",
    label: "Retour arrière",
    question:
      "Le retour vers l’ancien système a-t-il été exécuté dans un environnement isolé, avec les accès et dépendances nécessaires ?",
    expectedProof:
      "Une restauration ou remise en service rejouée, sa durée mesurée, son périmètre et le traitement des écritures de transition.",
  },
  {
    id: "decisionTeam",
    label: "Décision et équipe",
    question:
      "Le décideur GO/STOP, les responsables, le support, la surveillance et la communication sont-ils disponibles pour la fenêtre réelle ?",
    expectedProof:
      "Un déroulé horodaté avec noms de rôles, moyens d’alerte, seuils d’arrêt et remplaçants disponibles.",
  },
] as const;

export type CutoverGateId = (typeof cutoverGates)[number]["id"];
export type CutoverGateStatus = "unknown" | "partial" | "proved" | "blocked";
export type CutoverAnswers = Record<CutoverGateId, CutoverGateStatus>;

export const cutoverGateIds = cutoverGates.map(
  (gate) => gate.id,
) as CutoverGateId[];

export function createEmptyCutoverAnswers(): CutoverAnswers {
  return {
    businessContinuity: "unknown",
    writeAuthority: "unknown",
    dataReconciliation: "unknown",
    restoredFallback: "unknown",
    decisionTeam: "unknown",
  };
}

export const cutoverDurationFields = [
  {
    id: "windowMinutes",
    label: "Fenêtre réellement disponible",
    shortLabel: "Fenêtre",
    help: "Du gel des écritures à l’échéance métier de reprise.",
  },
  {
    id: "copyAndActivationMinutes",
    label: "Copie finale et activation",
    shortLabel: "Copie + activation",
    help: "Copie ou synchronisation finale, activation et redirection.",
  },
  {
    id: "verificationMinutes",
    label: "Vérifications",
    shortLabel: "Vérification",
    help: "Contrôles métier, données, droits, intégrations et surveillance.",
  },
  {
    id: "fallbackMinutes",
    label: "Retour arrière",
    shortLabel: "Retour",
    help: "Arrêt de la cible, remise en service de la source, contrôles et traitement des écritures de transition.",
  },
  {
    id: "decisionMinutes",
    label: "Décision GO ou STOP",
    shortLabel: "Décision",
    help: "Temps réservé pour analyser les écarts et prononcer la décision.",
  },
] as const;

export type CutoverDurationId = (typeof cutoverDurationFields)[number]["id"];
export type CutoverDurations = Record<CutoverDurationId, number | null>;

export function createEmptyCutoverDurations(): CutoverDurations {
  return {
    windowMinutes: null,
    copyAndActivationMinutes: null,
    verificationMinutes: null,
    fallbackMinutes: null,
    decisionMinutes: null,
  };
}

export type CutoverVerdict =
  "STOP" | "REPORTER" | "REDUIRE_PAR_LOTS" | "BASCULE_ENCADREE";

export interface CutoverBudget {
  windowMinutes: number;
  requiredMinutes: number;
  marginMinutes: number;
  marginRatePercent: number;
}

export interface CutoverAssessment {
  verdict: CutoverVerdict;
  title: string;
  explanation: string;
  nextAction: string;
  concernedGateIds: CutoverGateId[];
  missingDurationIds: CutoverDurationId[];
  budget: CutoverBudget | null;
}

function normalizeGateStatus(value: unknown): CutoverGateStatus {
  if (value === "partial" || value === "proved" || value === "blocked") {
    return value;
  }

  return "unknown";
}

function gateIdsWithStatus(
  answers: Partial<CutoverAnswers> | null | undefined,
  status: CutoverGateStatus,
): CutoverGateId[] {
  return cutoverGateIds.filter(
    (gateId) => normalizeGateStatus(answers?.[gateId]) === status,
  );
}

function normalizeDuration(value: unknown): number | null {
  return typeof value === "number" && Number.isFinite(value) && value > 0
    ? value
    : null;
}

function buildBudget(durations: Partial<CutoverDurations> | null | undefined): {
  budget: CutoverBudget | null;
  missingDurationIds: CutoverDurationId[];
} {
  const normalized = Object.fromEntries(
    cutoverDurationFields.map(({ id }) => [
      id,
      normalizeDuration(durations?.[id]),
    ]),
  ) as Record<CutoverDurationId, number | null>;

  const missingDurationIds = cutoverDurationFields
    .filter(({ id }) => normalized[id] === null)
    .map(({ id }) => id);

  if (missingDurationIds.length > 0) {
    return { budget: null, missingDurationIds };
  }

  const windowMinutes = normalized.windowMinutes as number;
  const requiredDurationIds: CutoverDurationId[] = [
    "copyAndActivationMinutes",
    "verificationMinutes",
    "fallbackMinutes",
    "decisionMinutes",
  ];
  let requiredMinutes = 0;

  for (const durationId of requiredDurationIds) {
    const nextRequiredMinutes =
      requiredMinutes + (normalized[durationId] as number);

    if (
      !Number.isFinite(nextRequiredMinutes) ||
      nextRequiredMinutes <= requiredMinutes
    ) {
      return {
        budget: null,
        missingDurationIds: requiredDurationIds,
      };
    }

    requiredMinutes = nextRequiredMinutes;
  }

  const marginMinutes = windowMinutes - requiredMinutes;
  const marginRatePercent = (marginMinutes / windowMinutes) * 100;

  if (
    !Number.isFinite(marginMinutes) ||
    !Number.isFinite(marginRatePercent) ||
    (requiredMinutes > 0 && marginMinutes === windowMinutes)
  ) {
    return {
      budget: null,
      missingDurationIds: cutoverDurationFields.map(({ id }) => id),
    };
  }

  return {
    budget: {
      windowMinutes,
      requiredMinutes,
      marginMinutes,
      marginRatePercent,
    },
    missingDurationIds: [],
  };
}

export function assessCutoverReadiness(
  answers: Partial<CutoverAnswers> | null | undefined = {},
  durations: Partial<CutoverDurations> | null | undefined = {},
): CutoverAssessment {
  const { budget, missingDurationIds } = buildBudget(durations);

  const blocked = gateIdsWithStatus(answers, "blocked");
  if (blocked.length > 0) {
    return {
      verdict: "STOP",
      title: "STOP — ne lancez pas la bascule",
      explanation:
        "Au moins une preuve critique est bloquée. Une marge de temps ou les autres preuves ne compensent pas ce blocage.",
      nextAction:
        "Attribuez chaque blocage à un responsable et rejouez la preuve manquante. Un incident de sécurité en cours exige la procédure d’incident ; une incertitude sur les droits ou les données exige l’avis des responsables compétents.",
      concernedGateIds: blocked,
      missingDurationIds,
      budget,
    };
  }

  const unknown = gateIdsWithStatus(answers, "unknown");
  if (unknown.length > 0) {
    return {
      verdict: "REPORTER",
      title: "Reportez la décision",
      explanation:
        "Une ou plusieurs preuves critiques ne sont pas renseignées. Une absence de réponse n’est pas une preuve positive.",
      nextAction:
        "Planifiez une répétition ciblée, consignez le résultat et conservez l’inconnue comme telle jusqu’à la prochaine revue.",
      concernedGateIds: unknown,
      missingDurationIds,
      budget,
    };
  }

  const partial = gateIdsWithStatus(answers, "partial");
  if (partial.length > 0) {
    return {
      verdict: "REDUIRE_PAR_LOTS",
      title: "Réduisez le périmètre et répétez",
      explanation:
        "Au moins une preuve reste partielle. Le périmètre complet ne peut pas être déclaré candidat à la bascule.",
      nextAction:
        "Isolez un lot dont la source d’écriture, les contrôles et le retour peuvent être démontrés de bout en bout, puis mesurez de nouveau toute la fenêtre.",
      concernedGateIds: partial,
      missingDurationIds,
      budget,
    };
  }

  if (!budget) {
    return {
      verdict: "REPORTER",
      title: "Mesurez toute la fenêtre avant de décider",
      explanation:
        "Une ou plusieurs durées sont absentes ou invalides. Zéro et une estimation non répétée ne constituent pas une mesure.",
      nextAction:
        "Répétez le même périmètre et mesurez la copie, la vérification, le retour arrière et la décision dans la même unité.",
      concernedGateIds: [],
      missingDurationIds,
      budget: null,
    };
  }

  if (budget.marginMinutes < 0) {
    return {
      verdict: "REDUIRE_PAR_LOTS",
      title: "La fenêtre ne contient pas le retour arrière",
      explanation:
        "Le temps répété pour copier, vérifier, décider et revenir dépasse la fenêtre disponible. Donner GO laisserait le retour hors budget.",
      nextAction:
        "Réduisez le lot, diminuez une durée par une amélioration réellement testée ou choisissez une autre fenêtre, puis répétez le scénario complet.",
      concernedGateIds: [],
      missingDurationIds: [],
      budget,
    };
  }

  return {
    verdict: "BASCULE_ENCADREE",
    title: "Candidat à une bascule encadrée",
    explanation:
      "Les cinq preuves sont déclarées démontrées et les durées répétées tiennent dans la fenêtre. Ce résultat prépare une revue humaine. Il ne garantit pas l’absence d’incident et ne conclut ni à la conformité ni à la compatibilité complète.",
    nextAction:
      "Joignez les preuves, durées, seuils d’arrêt et responsables au relevé de bascule. Le décideur nommé prononce ensuite GO ou STOP au moment prévu.",
    concernedGateIds: [],
    missingDurationIds: [],
    budget,
  };
}
