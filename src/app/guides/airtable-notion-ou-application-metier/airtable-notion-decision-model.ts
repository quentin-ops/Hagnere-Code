export type CurrentPlatform = "unknown" | "airtable" | "notion" | "none";
export type ProcessShape =
  "unknown" | "structured-records" | "knowledge-collaboration" | "mixed";
export type Criticality = "unknown" | "limited" | "important" | "critical";
export type BoundarySeparation = "unknown" | "not-needed" | "yes" | "no";
export type ProofState = "unknown" | "controlled" | "failed";
export type FailureAttribution =
  "unqualified" | "governance-remediable" | "platform-boundary";

export type DecisionStatus =
  | "STOP_MISSING_EVIDENCE"
  | "KEEP"
  | "STRENGTHEN"
  | "HYBRID"
  | "EXIT_PROGRESSIVELY";

export const organizationalDimensions = [
  {
    key: "criticalityStopCost",
    number: 1,
    shortLabel: "Criticité et arrêt",
    question:
      "Le coût, la durée tolérable et le mode dégradé d’un arrêt ont-ils été testés ?",
  },
  {
    key: "rolesPermissions",
    number: 2,
    shortLabel: "Rôles et droits",
    question:
      "Chaque rôle a-t-il les seuls droits nécessaires, y compris sur les champs ou pages sensibles ?",
  },
  {
    key: "dataModelIntegrity",
    number: 3,
    shortLabel: "Données et intégrité",
    question:
      "Les relations, unicités, statuts et règles d’intégrité tiennent-ils sur les cas difficiles ?",
  },
  {
    key: "concurrencyConflicts",
    number: 4,
    shortLabel: "Écritures concurrentes",
    question:
      "Deux personnes ou automatisations peuvent-elles écrire sans perte, doublon ni conflit silencieux ?",
  },
  {
    key: "volumeGrowthArchive",
    number: 5,
    shortLabel: "Volume et archive",
    question:
      "Le volume actuel, la croissance, les pièces jointes et l’archive ont-ils été testés au plan réel ?",
  },
  {
    key: "automationOperations",
    number: 6,
    shortLabel: "Automatisations",
    question:
      "Chaque automatisation a-t-elle un propriétaire, une alerte, un journal et une reprise manuelle ?",
  },
  {
    key: "integrationsApi",
    number: 7,
    shortLabel: "Intégrations et API",
    question:
      "Quotas, erreurs, délais, files, reprises et identités techniques ont-ils été exercés ?",
  },
  {
    key: "mobileDegraded",
    number: 8,
    shortLabel: "Mobile et mode dégradé",
    question:
      "Le travail réel a-t-il été réalisé sur mobile, hors connexion ou en mode dégradé quand nécessaire ?",
  },
  {
    key: "auditCompliance",
    number: 9,
    shortLabel: "Audit et conformité",
    question:
      "Les traces, accès, durées, contrats et contrôles requis sont-ils disponibles et compris ?",
  },
  {
    key: "ownershipAdministration",
    number: 10,
    shortLabel: "Propriété et relève",
    question:
      "L’organisation possède-t-elle les comptes, secrets, droits d’administration et une relève formée ?",
  },
  {
    key: "exportExit",
    number: 11,
    shortLabel: "Export et sortie",
    question:
      "Données, fichiers, relations, règles, historiques et identités ont-ils été exportés puis relus ?",
  },
  {
    key: "supportRestoreContinuity",
    number: 12,
    shortLabel: "Support et restauration",
    question:
      "Un incident récent ou simulé a-t-il prouvé l’escalade, la restauration et le retour au service ?",
  },
] as const satisfies ReadonlyArray<{
  key: string;
  number: number;
  shortLabel: string;
  question: string;
}>;

export type DimensionKey = (typeof organizationalDimensions)[number]["key"];
export type DimensionEvidence = Record<DimensionKey, ProofState>;
export type DimensionFailureAttribution = Record<
  DimensionKey,
  FailureAttribution
>;

export interface DecisionContext {
  currentPlatform: CurrentPlatform;
  processShape: ProcessShape;
  criticality: Criticality;
  boundarySeparation: BoundarySeparation;
  activeUsers: number | null;
  activeObjects: number | null;
  monthlyWrites: number | null;
}

export interface DecisionInputs {
  context: DecisionContext;
  evidence: DimensionEvidence;
  failureAttribution: DimensionFailureAttribution;
}

export type RecommendedTarget =
  | "airtable"
  | "notion"
  | "current-platform"
  | "hybrid"
  | "application-metier"
  | null;

export interface DecisionResult {
  status: DecisionStatus;
  label: string;
  headline: string;
  recommendation: RecommendedTarget;
  criticalUnknowns: string[];
  blockingFailures: string[];
  governanceFailures: DimensionKey[];
  boundaryFailures: DimensionKey[];
  reasons: string[];
  nextActions: string[];
}

export const proofStateLabels: Record<ProofState, string> = {
  unknown: "À vérifier — aucune preuve datée",
  controlled: "Oui — test daté satisfaisant",
  failed: "Non — test en échec, cause à qualifier",
};

export const failureAttributionLabels: Record<FailureAttribution, string> = {
  unqualified: "À qualifier — aucune cause retenue",
  "governance-remediable":
    "Gouvernance remédiable — organisation, configuration ou exploitation",
  "platform-boundary":
    "Limite de plateforme reproduite — contrainte du produit confirmée",
};

export const currentPlatformLabels: Record<CurrentPlatform, string> = {
  unknown: "à vérifier",
  airtable: "Airtable",
  notion: "Notion",
  none: "aucun outil choisi",
};

export const processShapeLabels: Record<ProcessShape, string> = {
  unknown: "à vérifier",
  "structured-records": "enregistrements structurés et états",
  "knowledge-collaboration": "documents, connaissances et collaboration",
  mixed: "processus mixte",
};

export const criticalityLabels: Record<Criticality, string> = {
  unknown: "à vérifier",
  limited: "limitée",
  important: "importante",
  critical: "critique",
};

export const boundarySeparationLabels: Record<BoundarySeparation, string> = {
  unknown: "à vérifier",
  "not-needed": "aucune frontière nécessaire à ce stade",
  yes: "frontière isolable et testée",
  no: "frontière non isolable",
};

const emptyEvidence = Object.fromEntries(
  organizationalDimensions.map((dimension) => [dimension.key, "unknown"]),
) as DimensionEvidence;
const emptyFailureAttribution = Object.fromEntries(
  organizationalDimensions.map((dimension) => [dimension.key, "unqualified"]),
) as DimensionFailureAttribution;

export function createEmptyDecisionInputs(): DecisionInputs {
  return {
    context: {
      currentPlatform: "unknown",
      processShape: "unknown",
      criticality: "unknown",
      boundarySeparation: "unknown",
      activeUsers: null,
      activeObjects: null,
      monthlyWrites: null,
    },
    evidence: { ...emptyEvidence },
    failureAttribution: { ...emptyFailureAttribution },
  };
}

function validateCount(
  value: number | null,
  label: string,
  unknowns: string[],
  failures: string[],
) {
  if (value === null) {
    unknowns.push(`${label} à relever sur une période représentative`);
    return;
  }
  if (!Number.isFinite(value) || !Number.isSafeInteger(value) || value < 0) {
    failures.push(`${label} doit être un entier fini, sûr et positif ou nul`);
  }
}

function platformLabel(context: DecisionContext) {
  if (context.currentPlatform === "airtable") return "Airtable";
  if (context.currentPlatform === "notion") return "Notion";
  if (context.processShape === "structured-records") return "Airtable";
  if (context.processShape === "knowledge-collaboration") return "Notion";
  return "l’outil actuel";
}

function stoppedResult(
  criticalUnknowns: string[],
  blockingFailures: string[],
  governanceFailures: DimensionKey[] = [],
  boundaryFailures: DimensionKey[] = [],
): DecisionResult {
  return {
    status: "STOP_MISSING_EVIDENCE",
    label: "Décision suspendue",
    headline:
      "La prochaine décision est de produire les preuves manquantes, pas de choisir une marque.",
    recommendation: null,
    criticalUnknowns,
    blockingFailures,
    governanceFailures,
    boundaryFailures,
    reasons: [],
    nextActions: [
      "Choisir une journée ou une semaine représentative.",
      "Rejouer les douze contrôles avec un responsable nommé.",
      "Laisser toute inconnue visible jusqu’à sa vérification.",
    ],
  };
}

export function evaluateDecision(inputs: DecisionInputs): DecisionResult {
  const { context, evidence, failureAttribution } = inputs;
  const criticalUnknowns: string[] = [];
  const blockingFailures: string[] = [];

  if (context.currentPlatform === "unknown") {
    criticalUnknowns.push("outil actuel ou absence d’outil à préciser");
  }
  if (context.processShape === "unknown") {
    criticalUnknowns.push("forme dominante du processus à observer");
  }
  if (context.criticality === "unknown") {
    criticalUnknowns.push("criticité à qualifier avec un arrêt simulé");
  }

  validateCount(
    context.activeUsers,
    "Le nombre d’utilisateurs actifs",
    criticalUnknowns,
    blockingFailures,
  );
  validateCount(
    context.activeObjects,
    "Le nombre d’objets actifs",
    criticalUnknowns,
    blockingFailures,
  );
  validateCount(
    context.monthlyWrites,
    "Le nombre d’écritures mensuelles",
    criticalUnknowns,
    blockingFailures,
  );

  const governanceFailures: DimensionKey[] = [];
  const boundaryFailures: DimensionKey[] = [];

  for (const dimension of organizationalDimensions) {
    const state = evidence[dimension.key];
    if (state === "unknown") {
      criticalUnknowns.push(`${dimension.number}. ${dimension.shortLabel}`);
      continue;
    }
    if (state === "failed") {
      const attribution = failureAttribution[dimension.key];
      if (attribution === "platform-boundary") {
        boundaryFailures.push(dimension.key);
      } else if (attribution === "governance-remediable") {
        governanceFailures.push(dimension.key);
      } else {
        criticalUnknowns.push(
          `${dimension.number}. ${dimension.shortLabel} : cause de l’échec à qualifier`,
        );
      }
    }
  }

  const mixedNewSelection =
    context.currentPlatform === "none" && context.processShape === "mixed";
  const needsBoundaryEvidence =
    boundaryFailures.length > 0 || mixedNewSelection;

  if (needsBoundaryEvidence && context.boundarySeparation === "unknown") {
    criticalUnknowns.push(
      "frontière de responsabilité à tester avant une architecture hybride ou dédiée",
    );
  }
  if (needsBoundaryEvidence && context.boundarySeparation === "not-needed") {
    blockingFailures.push(
      boundaryFailures.length > 0
        ? "une limite de plateforme est reproduite alors qu’aucune frontière n’est déclarée nécessaire"
        : "un nouveau processus mixte exige une frontière testée ; elle ne peut pas être déclarée inutile",
    );
  }

  if (criticalUnknowns.length > 0 || blockingFailures.length > 0) {
    return stoppedResult(
      criticalUnknowns,
      blockingFailures,
      governanceFailures,
      boundaryFailures,
    );
  }

  const chosenPlatform = platformLabel(context);
  const dimensionLabel = (key: DimensionKey) =>
    organizationalDimensions.find((dimension) => dimension.key === key)
      ?.shortLabel ?? key;
  const governanceFailureLabels = governanceFailures.map(dimensionLabel);
  const boundaryFailureLabels = boundaryFailures.map(dimensionLabel);

  if (boundaryFailures.length > 0 || mixedNewSelection) {
    if (context.boundarySeparation === "yes" && boundaryFailures.length <= 1) {
      return {
        status: "HYBRID",
        label: "Architecture hybride",
        headline:
          "Conservez le socle utile et extrayez une seule contrainte derrière une frontière testée.",
        recommendation: "hybrid",
        criticalUnknowns: [],
        blockingFailures: [],
        governanceFailures,
        boundaryFailures,
        reasons: [
          mixedNewSelection
            ? "Le processus mélange connaissance et transactions ; la séparation a été testée."
            : `Limite de plateforme reproduite et isolable : ${boundaryFailureLabels.join(", ")}.`,
          ...(governanceFailureLabels.length > 0
            ? [
                `Défauts de gouvernance à fermer en parallèle : ${governanceFailureLabels.join(", ")}.`,
              ]
            : []),
          `${chosenPlatform} peut rester responsable de ce qu’il sait déjà faire.`,
        ],
        nextActions: [
          "Nommer l’objet, le propriétaire et l’interface de la frontière.",
          ...(governanceFailureLabels.length > 0
            ? [
                "Nommer un responsable et une relève, puis fixer une date et une preuve de fermeture pour chaque défaut de gouvernance.",
              ]
            : []),
          "Tester l’échec de synchronisation et la reprise manuelle.",
          "Conserver un retour arrière avant d’éteindre le premier flux.",
        ],
      };
    }

    const exitLabel =
      context.currentPlatform === "none"
        ? "Cadrer une application métier"
        : `Sortir progressivement de ${chosenPlatform}`;
    return {
      status: "EXIT_PROGRESSIVELY",
      label: exitLabel,
      headline:
        "Préparez une sortie par objets et responsabilités ; ne remplacez pas tout en une seule bascule.",
      recommendation: "application-metier",
      criticalUnknowns: [],
      blockingFailures: [],
      governanceFailures,
      boundaryFailures,
      reasons: [
        boundaryFailures.length > 1
          ? `Limites de plateforme reproduites : ${boundaryFailureLabels.join(", ")}.`
          : boundaryFailures.length === 1
            ? `Limite de plateforme non isolable : ${boundaryFailureLabels.join(", ")}.`
            : "La séparation entre connaissance et transactions n’est pas isolable proprement.",
        ...(governanceFailureLabels.length > 0
          ? [
              `Défauts de gouvernance à fermer pendant la sortie : ${governanceFailureLabels.join(", ")}.`,
            ]
          : []),
        "La sortie doit préserver coexistence, recette et retour arrière.",
      ],
      nextActions: [
        "Geler l’inventaire de sortie objet par objet.",
        ...(governanceFailureLabels.length > 0
          ? [
              "Nommer un responsable et une relève, puis fixer une date et une preuve de fermeture pour chaque défaut de gouvernance pendant la coexistence.",
            ]
          : []),
        "Choisir le premier module dont la recette est indépendante.",
        "Maintenir l’ancien outil en lecture ou en secours jusqu’à preuve de reprise.",
      ],
    };
  }

  if (governanceFailures.length > 0) {
    return {
      status: "STRENGTHEN",
      label:
        context.currentPlatform === "none"
          ? `Cadrer ${chosenPlatform} avant de l’adopter`
          : `Renforcer ${chosenPlatform}`,
      headline:
        "La plateforme n’est pas encore en cause ; fermez d’abord les défauts de gouvernance et d’exploitation.",
      recommendation:
        context.currentPlatform === "none"
          ? context.processShape === "structured-records"
            ? "airtable"
            : "notion"
          : "current-platform",
      criticalUnknowns: [],
      blockingFailures: [],
      governanceFailures,
      boundaryFailures: [],
      reasons: [
        `Les contrôles insatisfaisants sont : ${governanceFailureLabels.join(", ")}.`,
        "Ils peuvent être corrigés sans conclure qu’une reconstruction est nécessaire.",
      ],
      nextActions: [
        "Nommer un propriétaire et une relève pour chaque défaut.",
        "Fixer une date et une preuve de fermeture.",
        "Rejouer le test avant toute migration.",
      ],
    };
  }

  const keepLabel =
    context.currentPlatform === "none"
      ? `Retenir ${chosenPlatform}`
      : `Conserver ${chosenPlatform}`;
  const target: RecommendedTarget =
    context.currentPlatform === "none"
      ? context.processShape === "structured-records"
        ? "airtable"
        : "notion"
      : "current-platform";

  return {
    status: "KEEP",
    label: keepLabel,
    headline:
      "Les preuves actuelles défendent le maintien ; documentez-les et fixez leur prochaine date de contrôle.",
    recommendation: target,
    criticalUnknowns: [],
    blockingFailures: [],
    governanceFailures: [],
    boundaryFailures: [],
    reasons: [
      "Les douze dimensions ont été testées sans limite reproduite.",
      context.currentPlatform === "none"
        ? `${chosenPlatform} correspond à la forme dominante déclarée du processus.`
        : "Les résultats du terrain priment sur un classement abstrait des outils.",
    ],
    nextActions: [
      "Archiver les preuves et leurs responsables.",
      "Planifier un test de restauration et de sortie.",
      "Réexaminer la décision après un changement de plan, de volume ou de processus.",
    ],
  };
}

export const exitGridFields = [
  { key: "objects", label: "Objets et périmètre" },
  { key: "owners", label: "Propriétaires et relève" },
  { key: "data", label: "Données et formats d’export" },
  { key: "attachments", label: "Pièces jointes et liens" },
  { key: "rights", label: "Identités, rôles et droits" },
  { key: "automations", label: "Automatisations, scripts et alertes" },
  { key: "integrations", label: "Intégrations, secrets et quotas" },
  { key: "rules", label: "Règles métier et exceptions" },
  { key: "history", label: "Historique, traces et archives" },
  { key: "uat", label: "Recette utilisateur et critères" },
  { key: "coexistence", label: "Coexistence et bascule" },
  { key: "rollback", label: "Retour arrière et extinction" },
] as const;

export type ExitGridKey = (typeof exitGridFields)[number]["key"];
export type ExitGrid = Record<ExitGridKey, string>;

export function createEmptyExitGrid(): ExitGrid {
  return Object.fromEntries(
    exitGridFields.map((field) => [field.key, ""]),
  ) as ExitGrid;
}

function formatCount(value: number | null) {
  return value === null
    ? "à vérifier"
    : new Intl.NumberFormat("fr-FR").format(value);
}

export function buildDecisionDossier(
  inputs: DecisionInputs,
  result: DecisionResult,
  exitGrid: ExitGrid = createEmptyExitGrid(),
) {
  const proofLines = organizationalDimensions.map((dimension) => {
    const state = inputs.evidence[dimension.key];
    const attribution = inputs.failureAttribution[dimension.key];
    const cause =
      state === "failed"
        ? ` ; cause : ${failureAttributionLabels[attribution]}`
        : "";
    return `${dimension.number}. ${dimension.shortLabel} : ${proofStateLabels[state]}${cause}`;
  });
  const exitLines = exitGridFields.map((field) => {
    const value = exitGrid[field.key].trim();
    return `- ${field.label} : ${value || "à renseigner"}`;
  });

  return [
    "DOSSIER AIRTABLE / NOTION / APPLICATION MÉTIER",
    "Recherche produit revalidée le 5 août 2026",
    "",
    `Orientation : ${result.label}`,
    `Conclusion : ${result.headline}`,
    "",
    "CONTEXTE",
    `Outil actuel : ${currentPlatformLabels[inputs.context.currentPlatform]}`,
    `Forme du processus : ${processShapeLabels[inputs.context.processShape]}`,
    `Criticité : ${criticalityLabels[inputs.context.criticality]}`,
    `Frontière : ${boundarySeparationLabels[inputs.context.boundarySeparation]}`,
    `Utilisateurs actifs : ${formatCount(inputs.context.activeUsers)}`,
    `Objets actifs : ${formatCount(inputs.context.activeObjects)}`,
    `Écritures mensuelles : ${formatCount(inputs.context.monthlyWrites)}`,
    "",
    "DOUZE CONTRÔLES",
    ...proofLines,
    "",
    "PREUVES MANQUANTES OU ERREURS",
    ...(result.criticalUnknowns.length > 0
      ? result.criticalUnknowns.map((item) => `- ${item}`)
      : ["- aucune inconnue critique"]),
    ...(result.blockingFailures.length > 0
      ? result.blockingFailures.map((item) => `- ${item}`)
      : []),
    "",
    "PROCHAINES ACTIONS",
    ...result.nextActions.map((item) => `- ${item}`),
    "",
    "GRILLE DE SORTIE",
    ...exitLines,
  ].join("\n");
}
