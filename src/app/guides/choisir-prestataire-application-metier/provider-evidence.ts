export const evidenceCriteria = [
  {
    id: "businessUnderstanding",
    label: "Compréhension du métier",
    question:
      "Le candidat a-t-il reformulé le problème, les utilisateurs, les règles et les cas d’exception sur un cas commun ?",
    expectedProof:
      "Restitution du cas commun, questions ouvertes, hypothèses et points à faire décider",
    minimum: "written_and_observed",
  },
  {
    id: "scopeAndExclusions",
    label: "Périmètre et exclusions",
    question:
      "La première version, ce qui attendra et ce qui n’est pas compris sont-ils écrits sans ambiguïté ?",
    expectedProof:
      "Proposition versionnée avec inclus, exclus, dépendances et travail attendu de votre équipe",
    minimum: "written",
  },
  {
    id: "acceptance",
    label: "Validation du résultat",
    question:
      "Les résultats attendus, les cas de vérification (recette), les anomalies et la personne qui décide sont-ils définis ?",
    expectedProof:
      "Exemple de vérification (recette), critères de décision et responsabilités nommées",
    minimum: "written",
  },
  {
    id: "costs",
    label: "Coûts comparables",
    question:
      "Le prix initial, le récurrent, les options, les exclusions et les coûts de sortie portent-ils sur la même période ?",
    expectedProof:
      "Décomposition hors taxes, calendrier de paiement, hypothèses et période de comparaison",
    minimum: "written",
  },
  {
    id: "dataAndSecurity",
    label: "Données et sécurité",
    question:
      "Les données, accès, hébergeurs, sous-traitants, incidents et contrôles adaptés au risque sont-ils qualifiés ?",
    expectedProof:
      "Annexe ou document sur les données et la sécurité, rôles réels, mesures vérifiables et limites déclarées",
    minimum: "written",
  },
  {
    id: "rightsAndAccounts",
    label: "Droits et comptes",
    question:
      "Les droits sur le code et les livrables, les composants tiers et les comptes essentiels sont-ils attribués ?",
    expectedProof:
      "Clauses relues, inventaire des composants et comptes ouverts au nom convenu",
    minimum: "written",
  },
  {
    id: "maintenance",
    label: "Maintenance et incidents",
    question:
      "Après la mise en service, qui surveille, répond, corrige, met à jour et décide des évolutions ?",
    expectedProof:
      "Périmètre de maintenance, canal, horaires, priorités, prix et responsabilités écrits",
    minimum: "written",
  },
  {
    id: "exit",
    label: "Sortie et reprise",
    question:
      "Une autre équipe pourrait-elle récupérer les données, le code, les accès, la documentation et la procédure de déploiement ?",
    expectedProof:
      "Inventaire de restitution, formats, délai, coût, assistance et test de reprise convenus",
    minimum: "written",
  },
] as const;

export type EvidenceCriterionId = (typeof evidenceCriteria)[number]["id"];
export const evidenceCriterionIds = evidenceCriteria.map(
  ({ id }) => id,
) as EvidenceCriterionId[];

export type EvidenceLevel =
  "unknown" | "verbal" | "written" | "written_and_observed" | "blocker";

export type CandidateEvidence = Record<EvidenceCriterionId, EvidenceLevel>;

export function createEmptyCandidateEvidence(): CandidateEvidence {
  return Object.fromEntries(
    evidenceCriterionIds.map((criterionId) => [criterionId, "unknown"]),
  ) as CandidateEvidence;
}

export const costFields = [
  {
    id: "initial",
    label: "Prix initial",
    help: "Cadrage, conception, réalisation, intégration et mise en service inclus dans la proposition.",
  },
  {
    id: "recurring",
    label: "Coûts récurrents sur la période",
    help: "Hébergement, licences, support et maintenance additionnés sur votre période commune.",
  },
  {
    id: "options",
    label: "Options retenues",
    help: "Uniquement les options nécessaires pour comparer le même résultat.",
  },
  {
    id: "exit",
    label: "Préparation de la sortie",
    help: "Export, documentation, assistance ou test de reprise chiffrés dans la proposition.",
  },
] as const;

export type CostFieldId = (typeof costFields)[number]["id"];
export type CostBreakdown = Record<CostFieldId, number | null>;

export function createEmptyCostBreakdown(): CostBreakdown {
  return Object.fromEntries(
    costFields.map(({ id }) => [id, null]),
  ) as CostBreakdown;
}

export type ProviderVerdict =
  | "STOP_CANDIDATE"
  | "CLARIFY_UNKNOWN"
  | "REQUEST_WRITTEN_PROOF"
  | "RUN_COMMON_CASE"
  | "NORMALIZE_COSTS"
  | "CANDIDATE_FOR_DECISION";

export interface ProviderAssessment {
  verdict: ProviderVerdict;
  title: string;
  explanation: string;
  nextAction: string;
  concernedCriteria: EvidenceCriterionId[];
  concernedCosts: CostFieldId[];
  knownCostTotal: number | null;
}

const evidenceRank: Record<Exclude<EvidenceLevel, "blocker">, number> = {
  unknown: 0,
  verbal: 1,
  written: 2,
  written_and_observed: 3,
};

function normalizeEvidenceLevel(value: unknown): EvidenceLevel {
  if (
    value === "verbal" ||
    value === "written" ||
    value === "written_and_observed" ||
    value === "blocker"
  ) {
    return value;
  }

  return "unknown";
}

function normalizeMoneyToCents(value: unknown): number | null {
  if (
    typeof value !== "number" ||
    !Number.isFinite(value) ||
    value < 0 ||
    value > 1_000_000_000
  ) {
    return null;
  }

  const floatingPointTolerance = Number.EPSILON * Math.max(1, Math.abs(value));
  const roundedCents = Math.round((value + floatingPointTolerance) * 100);

  // A positive amount must never silently become a verified zero.
  if (value > 0 && roundedCents === 0) {
    return null;
  }

  return roundedCents;
}

export function calculateKnownCostTotal(
  costs: Partial<CostBreakdown> | null | undefined,
): {
  total: number | null;
  missingOrInvalid: CostFieldId[];
} {
  const normalizedCents = Object.fromEntries(
    costFields.map(({ id }) => [id, normalizeMoneyToCents(costs?.[id])]),
  ) as Record<CostFieldId, number | null>;

  const missingOrInvalid = costFields
    .filter(({ id }) => normalizedCents[id] === null)
    .map(({ id }) => id);

  if (missingOrInvalid.length > 0) {
    return { total: null, missingOrInvalid };
  }

  const totalInCents = costFields.reduce(
    (sum, { id }) => sum + (normalizedCents[id] as number),
    0,
  );

  return { total: totalInCents / 100, missingOrInvalid: [] };
}

export function assessProviderEvidence(
  evidence: Partial<CandidateEvidence> | null | undefined = {},
  costs: Partial<CostBreakdown> | null | undefined = {},
): ProviderAssessment {
  const normalized = Object.fromEntries(
    evidenceCriterionIds.map((criterionId) => [
      criterionId,
      normalizeEvidenceLevel(evidence?.[criterionId]),
    ]),
  ) as CandidateEvidence;

  const blockers = evidenceCriterionIds.filter(
    (criterionId) => normalized[criterionId] === "blocker",
  );
  if (blockers.length > 0) {
    return {
      verdict: "STOP_CANDIDATE",
      title: "STOP — ne retenez pas ce candidat dans l’état",
      explanation:
        "Une condition déclarée inacceptable touche le besoin, la validation, les coûts, les données, les droits, la maintenance ou la sortie. Les bons points ailleurs ne la compensent pas.",
      nextAction:
        "Faites corriger et documenter ce point, écartez le candidat ou reportez la sélection. Faites relire les enjeux juridiques, données ou sécurité par la personne compétente.",
      concernedCriteria: blockers,
      concernedCosts: [],
      knownCostTotal: null,
    };
  }

  const unknown = evidenceCriterionIds.filter(
    (criterionId) => normalized[criterionId] === "unknown",
  );
  if (unknown.length > 0) {
    return {
      verdict: "CLARIFY_UNKNOWN",
      title: "La comparaison contient encore des inconnues décisives",
      explanation:
        "Une case vide ne vaut ni zéro, ni accord implicite. Vous ne comparez pas encore le même périmètre de risque pour ce candidat.",
      nextAction:
        "Posez les questions concernées à tous les candidats et consignez leur réponse, y compris lorsqu’ils ne savent pas encore répondre.",
      concernedCriteria: unknown,
      concernedCosts: [],
      knownCostTotal: null,
    };
  }

  const verbalOnly = evidenceCriterionIds.filter(
    (criterionId) => normalized[criterionId] === "verbal",
  );
  if (verbalOnly.length > 0) {
    return {
      verdict: "REQUEST_WRITTEN_PROOF",
      title: "Demandez les engagements écrits manquants",
      explanation:
        "Une réponse orale aide l’entretien, mais ne fixe ni le périmètre livré, ni le prix, ni les responsabilités après signature.",
      nextAction:
        "Demandez une proposition versionnée ou une annexe qui reprend chaque hypothèse, exclusion, responsabilité et preuve attendue.",
      concernedCriteria: verbalOnly,
      concernedCosts: [],
      knownCostTotal: null,
    };
  }

  const belowExpected = evidenceCriteria
    .filter(({ id, minimum }) => {
      const level = normalized[id];
      return level !== "blocker" && evidenceRank[level] < evidenceRank[minimum];
    })
    .map(({ id }) => id);

  if (belowExpected.length > 0) {
    return {
      verdict: "RUN_COMMON_CASE",
      title: "Faites travailler le candidat sur le même cas métier",
      explanation:
        "La compréhension du métier est décrite, mais elle n’a pas encore été observée sur une situation identique à celle donnée aux autres candidats.",
      nextAction:
        "Présentez le cas fictif commun, écoutez les questions et demandez une restitution courte des règles, exceptions et inconnues.",
      concernedCriteria: belowExpected,
      concernedCosts: [],
      knownCostTotal: null,
    };
  }

  const costCalculation = calculateKnownCostTotal(costs);
  if (costCalculation.total === null) {
    return {
      verdict: "NORMALIZE_COSTS",
      title: "Remettez les coûts sur une base commune",
      explanation:
        "Le total connu ne peut pas être calculé : un montant manque ou n’est pas valide. Zéro n’est acceptable que si l’absence de coût a été vérifiée dans la proposition.",
      nextAction:
        "Choisissez la même période, les mêmes options et le même résultat attendu, puis complétez chaque montant hors taxes sans déduire un coût exclu.",
      concernedCriteria: [],
      concernedCosts: costCalculation.missingOrInvalid,
      knownCostTotal: null,
    };
  }

  return {
    verdict: "CANDIDATE_FOR_DECISION",
    title: "Dossier candidat à une décision argumentée",
    explanation:
      "Les huit sujets sont au moins documentés, la compréhension a été observée sur le cas commun et les coûts connus sont additionnables. Ce résultat ne désigne pas automatiquement le meilleur prestataire.",
    nextAction:
      "Comparez maintenant les dossiers côte à côte, écrivez ce que les écarts changent et faites trancher la personne chargée de décider. Si deux dossiers restent différents, demandez une précision plutôt que d’inventer une note.",
    concernedCriteria: [],
    concernedCosts: [],
    knownCostTotal: costCalculation.total,
  };
}
