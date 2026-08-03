export const acceptanceGates = [
  {
    id: "businessTraceability",
    label: "Besoin métier traçable",
    question:
      "Le cas nomme-t-il la règle, le parcours ou le risque qu’il doit prouver ?",
  },
  {
    id: "versionAndEnvironment",
    label: "Version et environnement identifiés",
    question:
      "La version, la configuration, l’environnement et les dépendances testés sont-ils identifiables sans ambiguïté ?",
  },
  {
    id: "actorAndStartingState",
    label: "Acteur, droits et état de départ",
    question:
      "Le rôle, ses droits, les préconditions et l’état initial permettent-ils de rejouer le cas ?",
  },
  {
    id: "representativeData",
    label: "Données représentatives",
    question:
      "Les valeurs normales, limites, absentes ou interdites nécessaires sont-elles préparées ?",
  },
  {
    id: "observableExpectedResult",
    label: "Action et résultat attendu observables",
    question:
      "Les étapes sont-elles exactes et le résultat attendu peut-il être constaté sans jugement vague ?",
  },
  {
    id: "executionAndEvidence",
    label: "Exécution, résultat et preuve",
    question:
      "Le testeur, la date, le résultat obtenu et la pièce utile seront-ils consignés ?",
  },
  {
    id: "scopeExitAndSpecialistChecks",
    label: "Périmètre, sortie et contrôles spécialisés",
    question:
      "Les inclusions, exclusions, critères de sortie et contrôles de sécurité, d’accessibilité ou de performance nécessaires sont-ils écrits et attribués ?",
  },
  {
    id: "decisionAuthorityAndContract",
    label: "Décideur et procédure réelle",
    question:
      "La personne autorisée à décider et les documents applicables — contrat, devis ou procédure — sont-ils identifiés sans inventer leur effet ?",
  },
] as const;

export type AcceptanceGateId = (typeof acceptanceGates)[number]["id"];
export const acceptanceGateIds = acceptanceGates.map(
  ({ id }) => id,
) as AcceptanceGateId[];

export type AcceptanceGateStatus = "unknown" | "partial" | "ready" | "blocked";

export type AcceptanceGates = Record<AcceptanceGateId, AcceptanceGateStatus>;

export function createEmptyAcceptanceGates(): AcceptanceGates {
  return Object.fromEntries(
    acceptanceGateIds.map((gateId) => [gateId, "unknown"]),
  ) as AcceptanceGates;
}

export const campaignFactFields = [
  {
    id: "criticalCasesPlanned",
    label: "Cas critiques prévus",
    shortLabel: "Critiques prévus",
    help: "Tous les parcours dont l’échec compromettrait la décision.",
    minimum: 1,
  },
  {
    id: "criticalCasesPassed",
    label: "Cas critiques réussis",
    shortLabel: "Critiques réussis",
    help: "Cas critiques exécutés, conformes à l’attendu et accompagnés de leur preuve.",
    minimum: 0,
  },
  {
    id: "failedCases",
    label: "Cas échoués",
    shortLabel: "Échoués",
    help: "Cas exécutés dont le résultat attendu n’est pas atteint, même si l’anomalie n’est pas encore classée.",
    minimum: 0,
  },
  {
    id: "openBlockingAnomalies",
    label: "Anomalies bloquantes ouvertes",
    shortLabel: "Bloquantes",
    help: "Anomalies dont l’impact empêche le parcours ou la campagne selon votre échelle définie.",
    minimum: 0,
  },
  {
    id: "openMajorAnomalies",
    label: "Anomalies majeures ouvertes",
    shortLabel: "Majeures",
    help: "Anomalies à impact important encore non closes.",
    minimum: 0,
  },
  {
    id: "openMinorAnomalies",
    label: "Anomalies mineures ouvertes",
    shortLabel: "Mineures",
    help: "Anomalies à impact limité encore non closes.",
    minimum: 0,
  },
  {
    id: "pendingReservations",
    label: "Réserves ou dérogations à décider",
    shortLabel: "Réserves",
    help: "Écarts, exceptions ou anomalies différées qui attendent encore une décision explicite.",
    minimum: 0,
  },
  {
    id: "blockedCases",
    label: "Cas bloqués",
    shortLabel: "Bloqués",
    help: "Cas impossibles à exécuter dans l’état de l’environnement ou des données.",
    minimum: 0,
  },
  {
    id: "notRunCases",
    label: "Cas non exécutés",
    shortLabel: "Non exécutés",
    help: "Cas planifiés qui n’ont pas encore été joués.",
    minimum: 0,
  },
  {
    id: "casesWithoutEvidence",
    label: "Cas sans preuve exploitable",
    shortLabel: "Preuve absente",
    help: "Résultats déclarés sans pièce ou trace suffisante pour les relire.",
    minimum: 0,
  },
] as const;

export type CampaignFactId = (typeof campaignFactFields)[number]["id"];
export type CampaignFacts = Record<CampaignFactId, number | null>;

export function createEmptyCampaignFacts(): CampaignFacts {
  return Object.fromEntries(
    campaignFactFields.map(({ id }) => [id, null]),
  ) as CampaignFacts;
}

export type AcceptanceVerdict =
  | "STOP_PREPARATION"
  | "REWRITE_CASE"
  | "COMPLETE_CASE"
  | "MEASURE_CAMPAIGN"
  | "FIX_BEFORE_DECISION"
  | "REVIEW_RESIDUAL_RISK"
  | "CANDIDATE_FOR_ACCEPTANCE";

export interface AcceptanceAssessment {
  verdict: AcceptanceVerdict;
  title: string;
  explanation: string;
  nextAction: string;
  concernedGateIds: AcceptanceGateId[];
  concernedFactIds: CampaignFactId[];
  remainingCriticalCases: number | null;
}

function normalizeGateStatus(value: unknown): AcceptanceGateStatus {
  if (value === "partial" || value === "ready" || value === "blocked") {
    return value;
  }

  return "unknown";
}

function gateIdsWithStatus(
  gates: Partial<AcceptanceGates> | null | undefined,
  status: AcceptanceGateStatus,
): AcceptanceGateId[] {
  return acceptanceGateIds.filter(
    (gateId) => normalizeGateStatus(gates?.[gateId]) === status,
  );
}

function normalizeCampaignFacts(
  facts: Partial<CampaignFacts> | null | undefined,
): {
  normalized: Record<CampaignFactId, number | null>;
  invalidFactIds: CampaignFactId[];
} {
  const normalized = Object.fromEntries(
    campaignFactFields.map(({ id, minimum }) => {
      const value = facts?.[id];
      const valid =
        typeof value === "number" &&
        Number.isSafeInteger(value) &&
        value >= minimum;

      return [id, valid ? value : null];
    }),
  ) as Record<CampaignFactId, number | null>;

  const invalidFactIds = campaignFactFields
    .filter(({ id }) => normalized[id] === null)
    .map(({ id }) => id);

  if (
    invalidFactIds.length === 0 &&
    (normalized.criticalCasesPassed as number) >
      (normalized.criticalCasesPlanned as number)
  ) {
    invalidFactIds.push("criticalCasesPlanned", "criticalCasesPassed");
  }

  return { normalized, invalidFactIds };
}

export function assessAcceptanceReadiness(
  gates: Partial<AcceptanceGates> | null | undefined = {},
  facts: Partial<CampaignFacts> | null | undefined = {},
): AcceptanceAssessment {
  const blocked = gateIdsWithStatus(gates, "blocked");
  if (blocked.length > 0) {
    return {
      verdict: "STOP_PREPARATION",
      title: "STOP — la recette ne peut pas être préparée",
      explanation:
        "Au moins un maillon est bloqué. Les autres réponses et les résultats de campagne ne compensent pas l’impossibilité de préparer ou de rejouer ce point.",
      nextAction:
        "Attribuez chaque blocage, restaurez la condition nécessaire puis relisez le cas avant d’ouvrir ou de poursuivre la campagne.",
      concernedGateIds: blocked,
      concernedFactIds: [],
      remainingCriticalCases: null,
    };
  }

  const unknown = gateIdsWithStatus(gates, "unknown");
  if (unknown.length > 0) {
    return {
      verdict: "REWRITE_CASE",
      title: "Renseignez les points de preuve manquants",
      explanation:
        "Une absence de réponse n’est pas une preuve. Le cas ou la campagne ne peut pas encore être rejoué puis relu par une autre personne.",
      nextAction:
        "Complétez le cas, le périmètre, les critères de sortie et l’autorité de décision avant de compter ce dossier dans la campagne.",
      concernedGateIds: unknown,
      concernedFactIds: [],
      remainingCriticalCases: null,
    };
  }

  const partial = gateIdsWithStatus(gates, "partial");
  if (partial.length > 0) {
    return {
      verdict: "COMPLETE_CASE",
      title: "Complétez le dossier avant de l’exécuter",
      explanation:
        "Au moins un point reste partiel. Une formulation vague peut produire deux verdicts différents pour la même exécution ou la même campagne.",
      nextAction:
        "Rendez chaque point observable et rejouable, puis faites relire le cas et les règles de décision par une personne qui ne les a pas rédigés.",
      concernedGateIds: partial,
      concernedFactIds: [],
      remainingCriticalCases: null,
    };
  }

  const { normalized, invalidFactIds } = normalizeCampaignFacts(facts);
  if (invalidFactIds.length > 0) {
    return {
      verdict: "MEASURE_CAMPAIGN",
      title: "Renseignez une campagne cohérente",
      explanation:
        "Un compteur est absent, invalide ou incohérent. Les cas critiques réussis ne peuvent pas dépasser les cas critiques prévus.",
      nextAction:
        "Recomptez les cas et anomalies dans le même état de campagne. Conservez zéro uniquement lorsqu’il a été réellement vérifié.",
      concernedGateIds: [],
      concernedFactIds: invalidFactIds,
      remainingCriticalCases: null,
    };
  }

  const criticalCasesPlanned = normalized.criticalCasesPlanned as number;
  const criticalCasesPassed = normalized.criticalCasesPassed as number;
  const remainingCriticalCases = criticalCasesPlanned - criticalCasesPassed;
  const fixFactIds: CampaignFactId[] = [];

  if (remainingCriticalCases > 0) {
    fixFactIds.push("criticalCasesPassed");
  }

  if ((normalized.openBlockingAnomalies as number) > 0) {
    fixFactIds.push("openBlockingAnomalies");
  }

  if (fixFactIds.length > 0) {
    return {
      verdict: "FIX_BEFORE_DECISION",
      title: "Corrigez ou exécutez avant la décision",
      explanation:
        "Au moins un cas critique n’est pas prouvé ou une anomalie bloquante reste ouverte. Un bon résultat ailleurs ne neutralise pas ce point.",
      nextAction:
        "Traitez l’anomalie, exécutez les cas critiques manquants puis consignez le retest et la non-régression pertinente.",
      concernedGateIds: [],
      concernedFactIds: fixFactIds,
      remainingCriticalCases,
    };
  }

  const residualRiskFactIds = (
    [
      "failedCases",
      "openMajorAnomalies",
      "openMinorAnomalies",
      "pendingReservations",
      "blockedCases",
      "notRunCases",
      "casesWithoutEvidence",
    ] as CampaignFactId[]
  ).filter((factId) => (normalized[factId] as number) > 0);

  if (residualRiskFactIds.length > 0) {
    return {
      verdict: "REVIEW_RESIDUAL_RISK",
      title: "Soumettez le risque résiduel au décideur",
      explanation:
        "Les cas critiques sont prouvés, mais la campagne conserve des échecs, des anomalies, des réserves, des cas bloqués ou non exécutés, ou des preuves absentes.",
      nextAction:
        "Documentez l’impact, la priorité, le responsable, l’échéance et les limites. Le décideur applique ensuite les critères convenus et le contrat réel.",
      concernedGateIds: [],
      concernedFactIds: residualRiskFactIds,
      remainingCriticalCases,
    };
  }

  return {
    verdict: "CANDIDATE_FOR_ACCEPTANCE",
    title: "Dossier candidat à la décision d’acceptation",
    explanation:
      "Les six maillons du cas et les deux garde-fous de campagne sont prêts, tous les cas critiques déclarés sont prouvés et aucun échec, écart ou réserve en attente n’est renseigné. Ce résultat ne garantit pas l’absence de défaut et n’accepte pas le logiciel automatiquement.",
    nextAction:
      "Joignez le périmètre, les preuves, les limites et le relevé de campagne. La personne nommée prononce et consigne la décision selon les documents applicables.",
    concernedGateIds: [],
    concernedFactIds: [],
    remainingCriticalCases,
  };
}
