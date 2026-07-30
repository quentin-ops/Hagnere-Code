export const repriseGates = [
  {
    id: "observe",
    label: "Observer",
    question:
      "La nouvelle équipe sait-elle retrouver les versions, dépendances, journaux, alertes et responsables sans dépendre d’un compte personnel opaque ?",
    expectedProof:
      "Une cartographie datée et une observation guidée d’un environnement représentatif.",
  },
  {
    id: "build",
    label: "Construire",
    question:
      "Sait-elle produire une version installable depuis un environnement propre, avec les versions et dépendances remises ?",
    expectedProof:
      "Un journal de construction reproductible, depuis une copie neuve du dépôt jusqu’à la version installable identifiée.",
  },
  {
    id: "deploy",
    label: "Déployer",
    question:
      "A-t-elle exécuté un déploiement contrôlé hors production, vérifié le résultat et démontré le retour arrière prévu ?",
    expectedProof:
      "Une procédure rejouée, ses contrôles avant/après et la preuve du retour arrière.",
  },
  {
    id: "restore",
    label: "Restaurer",
    question:
      "A-t-elle restauré une sauvegarde dans un environnement isolé et consigné le périmètre réellement récupéré ?",
    expectedProof:
      "Un compte rendu de restauration daté : source, environnement, résultat, écarts et responsable.",
  },
  {
    id: "exit",
    label: "Organiser la sortie",
    question:
      "Les droits, données, comptes, secrets, révocations et livrables de fin de mission sont-ils attribués et vérifiables ?",
    expectedProof:
      "Une matrice de réversibilité relue par les responsables compétents, avec les inconnues encore en STOP.",
  },
] as const;

export type RepriseGateId = (typeof repriseGates)[number]["id"];
export type RepriseGateStatus = "unknown" | "partial" | "proved" | "blocked";
export type RepriseAnswers = Record<RepriseGateId, RepriseGateStatus>;

export const repriseGateIds = repriseGates.map(
  (gate) => gate.id,
) as RepriseGateId[];

export function createEmptyRepriseAnswers(): RepriseAnswers {
  return {
    observe: "unknown",
    build: "unknown",
    deploy: "unknown",
    restore: "unknown",
    exit: "unknown",
  };
}

export type RepriseVerdict =
  "STOP" | "REPORTER" | "REPRISE_LIMITEE" | "BASCULE_ENCADREE";

export interface RepriseAssessment {
  verdict: RepriseVerdict;
  title: string;
  explanation: string;
  nextAction: string;
  concernedGateIds: RepriseGateId[];
}

function gateIdsWithStatus(
  answers: Partial<RepriseAnswers> | null | undefined,
  status: RepriseGateStatus,
): RepriseGateId[] {
  return repriseGateIds.filter(
    (gateId) => normalizeGateStatus(answers?.[gateId]) === status,
  );
}

function normalizeGateStatus(value: unknown): RepriseGateStatus {
  if (value === "partial" || value === "proved" || value === "blocked") {
    return value;
  }

  return "unknown";
}

export function assessRepriseReadiness(
  answers: Partial<RepriseAnswers> | null | undefined = {},
): RepriseAssessment {
  const blocked = gateIdsWithStatus(answers, "blocked");
  if (blocked.length > 0) {
    return {
      verdict: "STOP",
      title: "STOP — ne signez pas une reprise durable",
      explanation:
        "Au moins une capacité critique est bloquée. Les preuves présentes ailleurs ne compensent pas ce blocage.",
      nextAction:
        "Chaque blocage a besoin d’un propriétaire et d’une preuve à obtenir. Un doute sur les droits ou le contrat exige l’avis d’un juriste ; pour les données personnelles, impliquez le responsable du traitement et, le cas échéant, le délégué à la protection des données (DPO).",
      concernedGateIds: blocked,
    };
  }

  const unknown = gateIdsWithStatus(answers, "unknown");
  if (unknown.length > 0) {
    return {
      verdict: "REPORTER",
      title: "Reportez la décision",
      explanation:
        "Une ou plusieurs capacités critiques ne sont pas encore renseignées. Une absence de réponse n’est pas une preuve positive.",
      nextAction:
        "Planifiez une démonstration pour chaque capacité non renseignée et conservez une preuve datée avant de réévaluer la reprise.",
      concernedGateIds: unknown,
    };
  }

  const partial = gateIdsWithStatus(answers, "partial");
  if (partial.length > 0) {
    return {
      verdict: "REPRISE_LIMITEE",
      title: "Limitez la mission",
      explanation:
        "La reprise peut servir à investiguer ou stabiliser, mais les démonstrations sont encore incomplètes pour un engagement durable.",
      nextAction:
        "Définissez un périmètre autorisé et réversible, sans modification contestable ni transfert irrévocable, puis terminez les preuves partielles avant toute bascule durable.",
      concernedGateIds: partial,
    };
  }

  return {
    verdict: "BASCULE_ENCADREE",
    title: "Candidat à une bascule encadrée",
    explanation:
      "Les cinq capacités ont été déclarées démontrées par le test de relève. Le prochain pas est une revue humaine ; ce résultat ne remplace ni l’audit, ni la validation juridique, ni le plan de bascule.",
    nextAction:
      "Consignez les preuves et leurs limites dans le procès-verbal de reprise, puis faites-le relire par leurs propriétaires. Le périmètre et les coûts du contrat se vérifient séparément. La décision de production doit enfin nommer ses conditions d’arrêt.",
    concernedGateIds: [],
  };
}
