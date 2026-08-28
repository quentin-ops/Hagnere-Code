export type TriState = "unknown" | "yes" | "no";

export type ProjectKind = "unknown" | "new" | "existing";
export type Audience = "unknown" | "internal" | "guests" | "public";
export type PowerPlatformSurface =
  | "unknown"
  | "canvas"
  | "model-driven"
  | "power-pages"
  | "mixed"
  | "not-chosen";
export type DataSource =
  "unknown" | "sharepoint" | "dataverse" | "sql" | "other";
export type Criticality = "unknown" | "limited" | "important" | "critical";

export type DecisionStatus =
  | "STOP_MISSING_EVIDENCE"
  | "KEEP"
  | "STRENGTHEN"
  | "HYBRID"
  | "DEDICATED_REBUILD";

export type DecisionOptionKey =
  "current-power-apps" | "strengthened-power-apps" | "hybrid" | "dedicated";

export type EvidenceKey =
  | "scopeObserved"
  | "dataQueriesTested"
  | "licensesFlowsInventoried"
  | "identityAudienceValidated"
  | "offlineFitValidated"
  | "uxAccessibilityValidated"
  | "securityDlpValidated"
  | "almValidated"
  | "ownershipSupportValidated"
  | "exitRestoreValidated"
  | "platformFitValidated"
  | "separableBoundaryValidated";

export interface DecisionContext {
  projectKind: ProjectKind;
  audience: Audience;
  surface: PowerPlatformSurface;
  dataSource: DataSource;
  criticality: Criticality;
  offlineRequired: TriState;
  externalBrandingRequired: TriState;
  currentUsers: number | null;
  projectedUsers: number | null;
}

export type DecisionEvidence = Record<EvidenceKey, TriState>;

export interface DecisionInputs {
  context: DecisionContext;
  evidence: DecisionEvidence;
}

export interface DecisionContradiction {
  options: DecisionOptionKey[];
  message: string;
}

export interface DecisionResult {
  status: DecisionStatus;
  recommendation: DecisionStatus | null;
  headline: string;
  rationale: string[];
  verifiedEvidence: string[];
  criticalUnknowns: string[];
  blockingFailures: string[];
  contradictions: DecisionContradiction[];
  defensibleOptions: DecisionOptionKey[];
  nextEvidence: string;
}

export const evidenceLabels: Record<EvidenceKey, string> = {
  scopeObserved:
    "Les tâches, utilisateurs, erreurs et résultats attendus ont été observés.",
  dataQueriesTested:
    "Les sources de données, volumes, requêtes et avertissements de délégation ont été testés.",
  licensesFlowsInventoried:
    "Les licences, connecteurs, flux, passerelles, API et comptes d’exécution ont été inventoriés.",
  identityAudienceValidated:
    "L’identité, les invités, les droits sur les données et l’audience externe ont été testés.",
  offlineFitValidated:
    "Le besoin hors-ligne a été reproduit sur les appareils, données et modes de synchronisation visés.",
  uxAccessibilityValidated:
    "Les parcours, le clavier, le zoom, le lecteur d’écran et les contraintes de marque ont été testés.",
  securityDlpValidated:
    "Les rôles, politiques de données et connecteurs autorisés ont été vérifiés dans le tenant.",
  almValidated:
    "Développement, test et production sont séparés, avec solutions et déploiements reproductibles.",
  ownershipSupportValidated:
    "Un propriétaire de secours, un responsable de support et une procédure d’incident sont nommés.",
  exitRestoreValidated:
    "L’export, la restauration, les données, connexions et secrets ont été testés sur un environnement séparé.",
  platformFitValidated:
    "Les cas les plus difficiles ont été testés et Power Platform couvre réellement le besoin visé.",
  separableBoundaryValidated:
    "La partie à sortir de Power Platform peut être isolée sans dupliquer les règles ni fragiliser les données.",
};

const contextUnknownLabels = {
  projectKind:
    "Précisez s’il s’agit d’un nouveau projet ou d’une Power App existante.",
  audience:
    "Précisez qui utilisera l’application\u00a0: salariés, invités ou public.",
  surface:
    "Précisez la surface envisagée\u00a0: canevas, application pilotée par modèle, Power Pages ou combinaison.",
  dataSource:
    "Précisez où vivent les données principales\u00a0: SharePoint, Dataverse, SQL ou autre source.",
  criticality:
    "Précisez ce qui arrive à l’activité si l’application devient indisponible.",
  offlineRequired:
    "Confirmez si les utilisateurs doivent travailler sans réseau.",
  externalBrandingRequired:
    "Confirmez si une expérience externe fortement personnalisée est nécessaire.",
} as const;

const optionOrder: DecisionOptionKey[] = [
  "current-power-apps",
  "strengthened-power-apps",
  "hybrid",
  "dedicated",
];

export const decisionOptionLabels: Record<DecisionOptionKey, string> = {
  "current-power-apps": "Power Apps actuel ou configuration minimale",
  "strengthened-power-apps": "Power Platform cadré ou renforcé",
  hybrid: "Architecture hybride",
  dedicated: "Application dédiée",
};

export function createEmptyDecisionInputs(): DecisionInputs {
  return {
    context: {
      projectKind: "unknown",
      audience: "unknown",
      surface: "unknown",
      dataSource: "unknown",
      criticality: "unknown",
      offlineRequired: "unknown",
      externalBrandingRequired: "unknown",
      currentUsers: null,
      projectedUsers: null,
    },
    evidence: {
      scopeObserved: "unknown",
      dataQueriesTested: "unknown",
      licensesFlowsInventoried: "unknown",
      identityAudienceValidated: "unknown",
      offlineFitValidated: "unknown",
      uxAccessibilityValidated: "unknown",
      securityDlpValidated: "unknown",
      almValidated: "unknown",
      ownershipSupportValidated: "unknown",
      exitRestoreValidated: "unknown",
      platformFitValidated: "unknown",
      separableBoundaryValidated: "unknown",
    },
  };
}

function collectCriticalUnknowns(inputs: DecisionInputs): string[] {
  const { context, evidence } = inputs;
  const unknowns: string[] = [];

  if (context.projectKind === "unknown")
    unknowns.push(contextUnknownLabels.projectKind);
  if (context.audience === "unknown")
    unknowns.push(contextUnknownLabels.audience);
  if (context.surface === "unknown")
    unknowns.push(contextUnknownLabels.surface);
  if (context.dataSource === "unknown")
    unknowns.push(contextUnknownLabels.dataSource);
  if (context.criticality === "unknown")
    unknowns.push(contextUnknownLabels.criticality);
  if (context.offlineRequired === "unknown")
    unknowns.push(contextUnknownLabels.offlineRequired);
  if (context.externalBrandingRequired === "unknown")
    unknowns.push(contextUnknownLabels.externalBrandingRequired);
  if (context.currentUsers === null)
    unknowns.push(
      "Renseignez le nombre d’utilisateurs actuels\u00a0; zéro explicite est valide.",
    );
  if (context.projectedUsers === null)
    unknowns.push(
      "Renseignez le nombre d’utilisateurs projetés\u00a0; zéro explicite est valide.",
    );

  const alwaysCritical: EvidenceKey[] = [
    "scopeObserved",
    "dataQueriesTested",
    "licensesFlowsInventoried",
    "uxAccessibilityValidated",
    "securityDlpValidated",
    "almValidated",
    "ownershipSupportValidated",
    "exitRestoreValidated",
    "platformFitValidated",
  ];

  for (const key of alwaysCritical) {
    if (evidence[key] === "unknown") unknowns.push(evidenceLabels[key]);
  }

  if (
    context.audience !== "unknown" &&
    context.audience !== "internal" &&
    evidence.identityAudienceValidated === "unknown"
  ) {
    unknowns.push(evidenceLabels.identityAudienceValidated);
  }

  if (
    context.offlineRequired === "yes" &&
    evidence.offlineFitValidated === "unknown"
  ) {
    unknowns.push(evidenceLabels.offlineFitValidated);
  }

  const boundaryCanMatter =
    evidence.platformFitValidated === "no" ||
    (context.offlineRequired === "yes" &&
      evidence.offlineFitValidated === "no") ||
    (context.audience !== "unknown" &&
      context.audience !== "internal" &&
      evidence.identityAudienceValidated === "no") ||
    (context.externalBrandingRequired === "yes" &&
      evidence.uxAccessibilityValidated === "no");

  if (boundaryCanMatter && evidence.separableBoundaryValidated === "unknown") {
    unknowns.push(evidenceLabels.separableBoundaryValidated);
  }

  return [...new Set(unknowns)];
}

function collectBlockingFailures(inputs: DecisionInputs): string[] {
  const { context, evidence } = inputs;
  const failures: string[] = [];

  if (
    context.currentUsers !== null &&
    (!Number.isSafeInteger(context.currentUsers) || context.currentUsers < 0)
  ) {
    failures.push(
      "Le nombre d’utilisateurs actuels doit être un entier fini, positif ou nul, dans la plage numérique fiable.",
    );
  }
  if (
    context.projectedUsers !== null &&
    (!Number.isSafeInteger(context.projectedUsers) ||
      context.projectedUsers < 0)
  ) {
    failures.push(
      "Le nombre d’utilisateurs projetés doit être un entier fini, positif ou nul, dans la plage numérique fiable.",
    );
  }
  if (evidence.scopeObserved === "no") {
    failures.push(
      "Le contrôle a conclu que le périmètre, les tâches et les résultats attendus ne sont pas suffisamment observés\u00a0: aucun arbitrage d’architecture n’est encore défendable.",
    );
  }
  if (evidence.licensesFlowsInventoried === "no") {
    failures.push(
      "Le contrôle a conclu que l’inventaire des licences, flux, connecteurs, passerelles, API et comptes d’exécution n’est pas défendable\u00a0: aucune option ne peut encore être comparée honnêtement.",
    );
  }

  return [...new Set(failures)];
}

function collectContradictions(inputs: DecisionInputs) {
  const { context, evidence } = inputs;
  const contradictions: DecisionContradiction[] = [];

  if (evidence.scopeObserved === "no") {
    contradictions.push({
      options: [...optionOrder],
      message:
        "Le contrôle du périmètre est insatisfaisant\u00a0: sans tâches ni résultats observés, aucune architecture ne peut être défendue.",
    });
  }
  if (evidence.dataQueriesTested === "no") {
    contradictions.push({
      options: ["current-power-apps"],
      message:
        "Conserver l’existant sans corriger les requêtes laisse possible un résultat incomplet, notamment en cas de formule non délégable.",
    });
  }
  if (evidence.licensesFlowsInventoried === "no") {
    contradictions.push({
      options: [...optionOrder],
      message:
        "Le contrôle des licences et flux est insatisfaisant\u00a0: maintien, renforcement, hybride et reconstruction restent incomparables tant que l’inventaire n’est pas défendable.",
    });
  }
  if (
    context.audience === "public" &&
    (context.surface === "canvas" || context.surface === "model-driven")
  ) {
    contradictions.push({
      options: ["current-power-apps"],
      message:
        "Une application canevas ou pilotée par modèle ne doit pas être présentée comme la surface publique retenue\u00a0: évaluez Power Pages, une frontière hybride ou une application dédiée.",
    });
  }
  if (
    context.audience !== "internal" &&
    context.audience !== "unknown" &&
    evidence.identityAudienceValidated === "no"
  ) {
    contradictions.push({
      options: ["current-power-apps", "strengthened-power-apps"],
      message:
        "L’audience externe ne peut pas être traitée comme un simple partage interne\u00a0: identité, droits et licence ne sont pas validés.",
    });
  }
  if (
    context.offlineRequired === "yes" &&
    evidence.offlineFitValidated === "no"
  ) {
    contradictions.push({
      options: ["current-power-apps", "strengthened-power-apps"],
      message:
        "Le besoin hors-ligne testé n’est pas couvert par l’architecture Power Apps actuelle\u00a0; l’offline-first mobile repose notamment sur Dataverse et comporte des limites.",
    });
  }
  if (evidence.uxAccessibilityValidated === "no") {
    contradictions.push({
      options: ["current-power-apps"],
      message:
        "Le parcours actuel échoue à au moins un test d’usage, de clavier, de zoom, de lecteur d’écran ou de marque.",
    });
  }
  if (evidence.securityDlpValidated === "no") {
    contradictions.push({
      options: ["current-power-apps"],
      message:
        "Conserver la configuration actuelle n’est pas défendable\u00a0: le contrôle a montré qu’une politique de données ou un rôle peut bloquer un connecteur, suspendre une application ou exposer trop de données.",
    });
  }
  if (evidence.almValidated === "no") {
    contradictions.push({
      options: ["current-power-apps"],
      message:
        "Une application critique sans environnements séparés, solutions ni déploiement reproductible ne devrait pas être conservée en l’état.",
    });
  }
  if (evidence.ownershipSupportValidated === "no") {
    contradictions.push({
      options: ["current-power-apps"],
      message:
        "Le départ du maker ou un incident laisserait l’entreprise sans propriétaire de secours ni responsable de reprise.",
    });
  }
  if (evidence.exitRestoreValidated === "no") {
    contradictions.push({
      options: ["current-power-apps"],
      message:
        "Conserver l’exploitation actuelle n’est pas défendable\u00a0: le contrôle de restauration a échoué sur les données, connexions, identités, secrets ou automatisations.",
    });
  }
  if (evidence.platformFitValidated === "no") {
    contradictions.push({
      options: ["current-power-apps", "strengthened-power-apps"],
      message:
        "Les cas les plus difficiles ont montré une limite de plateforme ou d’architecture qui n’est pas corrigée par un simple renforcement.",
    });
  }
  if (evidence.separableBoundaryValidated === "no") {
    contradictions.push({
      options: ["hybrid"],
      message:
        "La frontière hybride dupliquerait des règles ou des données\u00a0; elle n’est pas défendable sans nouveau découpage.",
    });
  }

  return contradictions;
}

function optionsWithoutContradiction(
  inputs: DecisionInputs,
  contradictions: DecisionContradiction[],
): DecisionOptionKey[] {
  const excluded = new Set(contradictions.flatMap((item) => item.options));
  const options = optionOrder.filter((option) => !excluded.has(option));

  if (inputs.context.projectKind === "new") {
    return options.filter((option) => option !== "current-power-apps");
  }

  return options;
}

function nextCorrectiveEvidence(inputs: DecisionInputs): string {
  if (
    inputs.context.audience === "public" &&
    (inputs.context.surface === "canvas" ||
      inputs.context.surface === "model-driven")
  ) {
    return "Tester le parcours public sur Power Pages, puis comparer cette surface à une frontière hybride et à une application dédiée.";
  }
  const firstNo = (Object.keys(inputs.evidence) as EvidenceKey[]).find(
    (key) => inputs.evidence[key] === "no",
  );
  return firstNo
    ? `Corriger ou retester : ${evidenceLabels[firstNo]}`
    : "Conserver les preuves datées, puis refaire le diagnostic si l’audience, les volumes, les licences ou le tenant changent.";
}

export function recommendedOptionForDecision(
  status: DecisionStatus,
  projectKind: ProjectKind,
): DecisionOptionKey | null {
  switch (status) {
    case "STOP_MISSING_EVIDENCE":
      return null;
    case "KEEP":
      return projectKind === "new"
        ? "strengthened-power-apps"
        : "current-power-apps";
    case "STRENGTHEN":
      return "strengthened-power-apps";
    case "HYBRID":
      return "hybrid";
    case "DEDICATED_REBUILD":
      return "dedicated";
  }
}

export function evaluateDecision(inputs: DecisionInputs): DecisionResult {
  const criticalUnknowns = collectCriticalUnknowns(inputs);
  const blockingFailures = collectBlockingFailures(inputs);
  const verifiedEvidence = (Object.keys(inputs.evidence) as EvidenceKey[])
    .filter((key) => inputs.evidence[key] === "yes")
    .map((key) => evidenceLabels[key]);
  const contradictions = collectContradictions(inputs);

  if (criticalUnknowns.length > 0 || blockingFailures.length > 0) {
    const nextEvidence =
      criticalUnknowns[0] ??
      blockingFailures[0] ??
      "Reprendre le premier contrôle critique avant tout arbitrage.";
    return {
      status: "STOP_MISSING_EVIDENCE",
      recommendation: null,
      headline:
        blockingFailures.length > 0
          ? "STOP — un contrôle fondateur est insatisfaisant"
          : "STOP — il manque une information qui peut changer le choix",
      rationale: [
        "À vérifier signifie qu’aucune preuve fiable n’est encore disponible\u00a0; non signifie que le contrôle a été réalisé mais que son résultat est insatisfaisant.",
        "Le diagnostic ne remplace ni une inconnue ni un contrôle fondateur en échec par une hypothèse favorable.",
      ],
      verifiedEvidence,
      criticalUnknowns,
      blockingFailures,
      contradictions,
      defensibleOptions: [],
      nextEvidence,
    };
  }

  const { context, evidence } = inputs;
  const publicSurfaceMismatch =
    context.audience === "public" &&
    (context.surface === "canvas" || context.surface === "model-driven");
  const boundaryFailure =
    evidence.platformFitValidated === "no" ||
    (context.offlineRequired === "yes" &&
      evidence.offlineFitValidated === "no") ||
    (context.audience !== "internal" &&
      evidence.identityAudienceValidated === "no") ||
    (context.externalBrandingRequired === "yes" &&
      evidence.uxAccessibilityValidated === "no");

  let status: Exclude<DecisionStatus, "STOP_MISSING_EVIDENCE">;
  if (boundaryFailure) {
    status =
      evidence.separableBoundaryValidated === "yes"
        ? "HYBRID"
        : "DEDICATED_REBUILD";
  } else if (publicSurfaceMismatch) {
    status = "STRENGTHEN";
  } else {
    const remediableKeys: EvidenceKey[] = [
      "dataQueriesTested",
      "uxAccessibilityValidated",
      "securityDlpValidated",
      "almValidated",
      "ownershipSupportValidated",
      "exitRestoreValidated",
    ];
    status = remediableKeys.some((key) => evidence[key] === "no")
      ? "STRENGTHEN"
      : "KEEP";
  }

  const headlineByStatus: Record<typeof status, string> = {
    KEEP:
      context.projectKind === "new"
        ? "Retenir Power Platform est défendable pour ce nouveau projet"
        : "Conserver Power Apps est défendable",
    STRENGTHEN: publicSurfaceMismatch
      ? "Changez de surface\u00a0: évaluez Power Pages avant de retenir Power Platform"
      : context.projectKind === "new"
        ? "Cadrez Power Platform avant de lancer ce nouveau projet"
        : "Renforcez Power Apps avant d’envisager une reconstruction",
    HYBRID: "Isolez la contrainte dans une architecture hybride",
    DEDICATED_REBUILD:
      "Préparez une reconstruction dédiée, avec coexistence et retour arrière",
  };

  const rationaleByStatus: Record<typeof status, string[]> = {
    KEEP: [
      "Les cas difficiles, le coût, la sécurité, l’exploitation et la sortie ont été vérifiés sans contradiction bloquante.",
      context.projectKind === "new"
        ? "Retenez une surface Power Platform cohérente avec ces preuves et revalidez-les avant la mise en production."
        : "Conservez ces preuves et revalidez-les lors d’un changement de volume, de licence, d’audience ou de politique du tenant.",
    ],
    STRENGTHEN: publicSurfaceMismatch
      ? [
          "Une application canevas ou pilotée par modèle n’est pas la surface publique à retenir, même si les autres contrôles sont satisfaisants.",
          "Testez Power Pages sur le parcours externe réel, puis comparez cette option à un hybride et à une application dédiée.",
        ]
      : [
          "Le besoin reste compatible avec Power Platform, mais l’application, le projet ou son exploitation comporte un défaut corrigeable.",
          "Corrigez d’abord les requêtes, rôles, environnements, propriétaires ou procédures de reprise concernés.",
        ],
    HYBRID: [
      "Une contrainte réelle sort du cadre actuel, mais une frontière testée permet de conserver la partie Power Platform qui fonctionne.",
      "Documentez l’API, les données de référence, l’identité, les erreurs et le responsable de chaque côté de cette frontière.",
    ],
    DEDICATED_REBUILD: [
      "Une limite de plateforme ou de parcours a été reproduite et aucun découpage hybride propre n’a été validé.",
      "Une reconstruction reste conditionnée à un inventaire complet, un TCO comparable, une coexistence testée et un retour arrière.",
    ],
  };

  const defensibleOptions = optionsWithoutContradiction(inputs, contradictions);
  const recommendationOption = recommendedOptionForDecision(
    status,
    context.projectKind,
  );

  if (
    recommendationOption === null ||
    !defensibleOptions.includes(recommendationOption)
  ) {
    return {
      status: "STOP_MISSING_EVIDENCE",
      recommendation: null,
      headline: "STOP — le diagnostic produit des options incohérentes",
      rationale: [
        "La recommandation ne correspond à aucune option encore défendable.",
        "Corrigez les preuves ou la surface avant de poursuivre l’arbitrage.",
      ],
      verifiedEvidence,
      criticalUnknowns: [],
      blockingFailures: [
        "L’invariant recommandation-option a échoué\u00a0; aucun verdict n’est affiché.",
      ],
      contradictions,
      defensibleOptions: [],
      nextEvidence:
        "Reprendre la première contradiction et vérifier la surface, l’audience et l’option recommandée.",
    };
  }

  return {
    status,
    recommendation: status,
    headline: headlineByStatus[status],
    rationale: rationaleByStatus[status],
    verifiedEvidence,
    criticalUnknowns: [],
    blockingFailures: [],
    contradictions,
    defensibleOptions,
    nextEvidence: nextCorrectiveEvidence(inputs),
  };
}

export type CostKnowledge = "unknown" | "known" | "not-applicable";

export interface NumericKnowledgeValue {
  knowledge: CostKnowledge;
  amount: number | null;
}

export type LicenseMode =
  | "unknown"
  | "premium-eur"
  | "payg-usd"
  | "contract-monthly-eur"
  | "not-applicable";

export interface LicenseInputs {
  mode: LicenseMode;
  users: NumericKnowledgeValue;
  pricePerUserMonthEur: NumericKnowledgeValue;
  contractualMonthlyEur: NumericKnowledgeValue;
  publicPaygUsdPerActiveUserAppMonth: number;
}

export type OneTimeCostId =
  | "initial-build-setup"
  | "migration-coexistence"
  | "training-change"
  | "exit-reversibility";
export type MonthlyCostId =
  | "hosting-platform"
  | "admin-maintenance"
  | "business-support"
  | "capacity-connectors-other";

export interface CostLine<
  Id extends string = string,
> extends NumericKnowledgeValue {
  id: Id;
  label: string;
}

export interface OptionTcoInputs {
  key: DecisionOptionKey;
  label: string;
  license: LicenseInputs;
  oneTime: CostLine<OneTimeCostId>[];
  monthly: CostLine<MonthlyCostId>[];
}

export type TcoHorizonYears = 1 | 3 | 5;

export interface OptionTcoResult {
  key: DecisionOptionKey;
  label: string;
  complete: boolean;
  monthlyLicenseEur: number | null;
  monthlyTotalEur: number | null;
  oneTimeTotalEur: number | null;
  totalsEur: Record<TcoHorizonYears, number | null>;
  unknownLabels: string[];
  errors: string[];
  notes: string[];
}

const oneTimeDefinitions: Array<[OneTimeCostId, string]> = [
  ["initial-build-setup", "Conception, configuration ou construction initiale"],
  ["migration-coexistence", "Migration des données et coexistence"],
  ["training-change", "Formation et accompagnement du changement"],
  ["exit-reversibility", "Sortie et réversibilité prévues"],
];

const monthlyDefinitions: Array<[MonthlyCostId, string]> = [
  ["hosting-platform", "Hébergement ou plateforme hors licences ci-dessus"],
  ["admin-maintenance", "Administration, maintenance et évolutions"],
  ["business-support", "Support utilisateurs et continuité métier"],
  ["capacity-connectors-other", "Capacité, connecteurs, supervision et autres"],
];

function unknownValue(): NumericKnowledgeValue {
  return { knowledge: "unknown", amount: null };
}

export function createEmptyTcoOptions(): OptionTcoInputs[] {
  return optionOrder.map((key) => ({
    key,
    label: decisionOptionLabels[key],
    license: {
      mode: "unknown",
      users: unknownValue(),
      pricePerUserMonthEur: {
        knowledge: "unknown",
        amount:
          key === "current-power-apps" || key === "strengthened-power-apps"
            ? 17.3
            : null,
      },
      contractualMonthlyEur: unknownValue(),
      publicPaygUsdPerActiveUserAppMonth: 10,
    },
    oneTime: oneTimeDefinitions.map(([id, label]) => ({
      id,
      label,
      ...unknownValue(),
    })),
    monthly: monthlyDefinitions.map(([id, label]) => ({
      id,
      label,
      ...unknownValue(),
    })),
  }));
}

function validateNumericValue(
  value: NumericKnowledgeValue,
  label: string,
  unknownLabels: string[],
  errors: string[],
): number {
  if (value.knowledge === "not-applicable") return 0;
  if (value.knowledge === "unknown") {
    unknownLabels.push(label);
    return 0;
  }
  if (
    value.amount === null ||
    !Number.isFinite(value.amount) ||
    value.amount < 0 ||
    value.amount > Number.MAX_SAFE_INTEGER
  ) {
    errors.push(
      `${label} doit être un nombre connu, fini, positif ou nul et compris dans la plage numérique fiable.`,
    );
    return 0;
  }
  return value.amount;
}

function validateRequiredNumericValue(
  value: NumericKnowledgeValue,
  label: string,
  unknownLabels: string[],
  errors: string[],
): number {
  if (value.knowledge === "not-applicable") {
    errors.push(
      `${label} est requis pour le mode de licence choisi et ne peut pas être « non applicable ».`,
    );
    return 0;
  }
  return validateNumericValue(value, label, unknownLabels, errors);
}

function validateRequiredIntegerQuantity(
  value: NumericKnowledgeValue,
  label: string,
  unknownLabels: string[],
  errors: string[],
): number {
  if (value.knowledge === "not-applicable") {
    errors.push(
      `${label} est requis pour le mode de licence choisi et ne peut pas être « non applicable ».`,
    );
    return 0;
  }
  if (value.knowledge === "unknown") {
    unknownLabels.push(label);
    return 0;
  }
  if (
    value.amount === null ||
    !Number.isSafeInteger(value.amount) ||
    value.amount < 0
  ) {
    errors.push(
      `${label} doit être un entier connu, fini, positif ou nul et compris dans la plage numérique fiable.`,
    );
    return 0;
  }
  return value.amount;
}

function validateCalculatedAmount(
  value: number,
  label: string,
  errors: string[],
): number {
  if (!Number.isFinite(value) || value > Number.MAX_SAFE_INTEGER) {
    errors.push(
      `${label} dépasse la plage numérique fiable du calcul : le TCO est arrêté au lieu d’afficher un total trompeur.`,
    );
    return 0;
  }
  return value;
}

function validateUniqueCostIds(
  lines: CostLine[],
  groupLabel: string,
  errors: string[],
) {
  const ids = new Set<string>();
  for (const line of lines) {
    if (ids.has(line.id)) {
      errors.push(
        `${groupLabel} contient deux fois « ${line.label} » : le calcul est arrêté pour éviter un double compte.`,
      );
    }
    ids.add(line.id);
  }
}

function calculateMonthlyLicense(
  license: LicenseInputs,
  unknownLabels: string[],
  errors: string[],
  notes: string[],
): number {
  if (license.publicPaygUsdPerActiveUserAppMonth !== 10) {
    notes.push(
      "Le tarif PAYG public en USD a été modifié dans le dossier\u00a0; il reste informatif et n’est jamais converti en euros.",
    );
  }

  switch (license.mode) {
    case "unknown":
      unknownLabels.push("Mode de licence");
      return 0;
    case "not-applicable":
      return 0;
    case "premium-eur": {
      const users = validateRequiredIntegerQuantity(
        license.users,
        "Nombre d’utilisateurs licenciés",
        unknownLabels,
        errors,
      );
      const price = validateRequiredNumericValue(
        license.pricePerUserMonthEur,
        "Prix contractuel par utilisateur et par mois en euros",
        unknownLabels,
        errors,
      );
      notes.push(
        "Le repère public de 17,30\u00a0€ HT/utilisateur/mois au 3 août 2026 reste éditable et doit être confirmé dans le contrat.",
      );
      return validateCalculatedAmount(
        users * price,
        "Le total mensuel des licences",
        errors,
      );
    }
    case "payg-usd": {
      notes.push(
        "Le compteur public PAYG à 10 USD/utilisateur actif/application/mois n’est pas converti automatiquement en euros.",
      );
      return validateRequiredNumericValue(
        license.contractualMonthlyEur,
        "Montant mensuel PAYG réellement facturé en euros",
        unknownLabels,
        errors,
      );
    }
    case "contract-monthly-eur":
      return validateRequiredNumericValue(
        license.contractualMonthlyEur,
        "Montant mensuel contractuel des licences en euros",
        unknownLabels,
        errors,
      );
  }
}

export function calculateOptionTco(option: OptionTcoInputs): OptionTcoResult {
  const unknownLabels: string[] = [];
  const errors: string[] = [];
  const notes: string[] = [];

  validateUniqueCostIds(option.oneTime, "Les coûts ponctuels", errors);
  validateUniqueCostIds(option.monthly, "Les coûts mensuels", errors);

  const monthlyLicense = calculateMonthlyLicense(
    option.license,
    unknownLabels,
    errors,
    notes,
  );
  const oneTimeTotal = validateCalculatedAmount(
    option.oneTime.reduce(
      (sum, line) =>
        sum +
        validateNumericValue(
          line,
          `Coût ponctuel : ${line.label}`,
          unknownLabels,
          errors,
        ),
      0,
    ),
    "Le total des coûts ponctuels",
    errors,
  );
  const monthlyOtherTotal = validateCalculatedAmount(
    option.monthly.reduce(
      (sum, line) =>
        sum +
        validateNumericValue(
          line,
          `Coût mensuel : ${line.label}`,
          unknownLabels,
          errors,
        ),
      0,
    ),
    "Le total des coûts mensuels hors licences",
    errors,
  );

  const monthlyTotal = validateCalculatedAmount(
    monthlyLicense + monthlyOtherTotal,
    "Le total mensuel",
    errors,
  );
  const horizons: TcoHorizonYears[] = [1, 3, 5];
  const candidateTotalsEur = Object.fromEntries(
    horizons.map((years) => [
      years,
      validateCalculatedAmount(
        oneTimeTotal + monthlyTotal * 12 * years,
        `Le TCO à ${years} an${years > 1 ? "s" : ""}`,
        errors,
      ),
    ]),
  ) as Record<TcoHorizonYears, number>;
  const complete = unknownLabels.length === 0 && errors.length === 0;
  const totalsEur = Object.fromEntries(
    horizons.map((years) => [
      years,
      complete ? candidateTotalsEur[years] : null,
    ]),
  ) as Record<TcoHorizonYears, number | null>;

  return {
    key: option.key,
    label: option.label,
    complete,
    monthlyLicenseEur: complete ? monthlyLicense : null,
    monthlyTotalEur: complete ? monthlyTotal : null,
    oneTimeTotalEur: complete ? oneTimeTotal : null,
    totalsEur,
    unknownLabels: [...new Set(unknownLabels)],
    errors,
    notes,
  };
}

export function calculateTcoComparison(options: OptionTcoInputs[]) {
  return options.map(calculateOptionTco);
}

/* ──────────────────────────────────────────────
   Pré-remplissage : le cas construit du guide
   ────────────────────────────────────────────── */

/**
 * Le cas construit qui traverse le guide, prêt à être modifié.
 *
 * L'atelier s'ouvrait sur huit postes « à confirmer » et un verdict suspendu :
 * un lecteur y arrivait devant une cinquantaine de champs et aucun euro. Il
 * s'ouvre désormais sur le décompte résolu de la section 05 — neuf
 * utilisateurs, une liste SharePoint, un connecteur SQL Server qui fait
 * basculer la licence — que le lecteur remplace par ses propres nombres. Le
 * bouton « repartir d'une feuille vierge » restitue l'état vide.
 *
 * Les montants ne sont pas des constantes de calcul : ce sont des repères
 * datés, publiés sur /tarifs pour la colonne dédiée et sur la page Microsoft
 * française pour la licence, tous relevés le 28 août 2026.
 */
export function createIncarnatedCaseDecisionInputs(): DecisionInputs {
  const inputs = createEmptyDecisionInputs();
  inputs.context = {
    projectKind: "existing",
    audience: "internal",
    surface: "canvas",
    dataSource: "sharepoint",
    criticality: "important",
    offlineRequired: "no",
    externalBrandingRequired: "no",
    currentUsers: 9,
    projectedUsers: 9,
  };
  // Les neuf contrôles critiques ont été menés dans le cas construit : c'est
  // ce qui permet à l'atelier d'afficher une conclusion au lieu d'un verdict
  // d'impuissance. La frontière hybride reste sans objet tant qu'aucune limite
  // de plateforme n'a été reproduite.
  inputs.evidence = {
    ...inputs.evidence,
    scopeObserved: "yes",
    dataQueriesTested: "yes",
    licensesFlowsInventoried: "yes",
    identityAudienceValidated: "yes",
    offlineFitValidated: "yes",
    uxAccessibilityValidated: "yes",
    securityDlpValidated: "yes",
    almValidated: "yes",
    ownershipSupportValidated: "yes",
    exitRestoreValidated: "yes",
    platformFitValidated: "yes",
  };
  return inputs;
}

/** Coût journalier chargé retenu dans le cas construit du guide, en euros. */
export const CASE_INTERNAL_DAY_RATE_EUR = 350;

/** Repère public du forfait de maintenance le plus bas, en euros par mois. */
export const CASE_CARE_MONTHLY_EUR = 2500;

/** Repère public de construction d'un outil interne Starter, en euros. */
export const CASE_STARTER_BUILD_EUR = 8000;

function knownValue(amount: number): NumericKnowledgeValue {
  return { knowledge: "known", amount };
}

function notApplicable(): NumericKnowledgeValue {
  return { knowledge: "not-applicable", amount: null };
}

function caseCostLines<Id extends string>(
  definitions: Array<[Id, string]>,
  amounts: Partial<Record<Id, NumericKnowledgeValue>>,
): CostLine<Id>[] {
  return definitions.map(([id, label]) => ({
    id,
    label,
    ...(amounts[id] ?? unknownValue()),
  }));
}

export function createIncarnatedCaseTcoOptions(): OptionTcoInputs[] {
  const dayRate = CASE_INTERNAL_DAY_RATE_EUR;

  return createEmptyTcoOptions().map((option) => {
    if (option.key === "current-power-apps") {
      return {
        ...option,
        license: {
          ...option.license,
          mode: "premium-eur",
          users: { knowledge: "known", amount: 9 },
          pricePerUserMonthEur: knownValue(17.3),
          contractualMonthlyEur: notApplicable(),
        },
        oneTime: caseCostLines(oneTimeDefinitions, {
          // Quatre jours pour brancher le connecteur SQL Server, poser la
          // passerelle et reprendre les formules devenues non délégables.
          "initial-build-setup": knownValue(4 * dayRate),
          "migration-coexistence": notApplicable(),
          "training-change": notApplicable(),
          // Sortir de Power Apps revient à payer la colonne dédiée :
          // construction 8 000 € plus reprise des données 1 490 €.
          "exit-reversibility": knownValue(
            CASE_STARTER_BUILD_EUR + 3 * dayRate + 440,
          ),
        }),
        monthly: caseCostLines(monthlyDefinitions, {
          "hosting-platform": notApplicable(),
          "admin-maintenance": knownValue(0.5 * dayRate),
          "business-support": notApplicable(),
          "capacity-connectors-other": notApplicable(),
        }),
      };
    }

    if (option.key === "dedicated") {
      return {
        ...option,
        license: {
          ...option.license,
          mode: "not-applicable",
          users: notApplicable(),
          pricePerUserMonthEur: notApplicable(),
          contractualMonthlyEur: notApplicable(),
        },
        oneTime: caseCostLines(oneTimeDefinitions, {
          "initial-build-setup": knownValue(CASE_STARTER_BUILD_EUR),
          "migration-coexistence": knownValue(3 * dayRate + 440),
          "training-change": notApplicable(),
          // Six jours pour transmettre le code, les accès et l'exploitation à
          // une autre équipe de développement.
          "exit-reversibility": knownValue(6 * dayRate),
        }),
        monthly: caseCostLines(monthlyDefinitions, {
          "hosting-platform": knownValue(CASE_CARE_MONTHLY_EUR),
          "admin-maintenance": knownValue(0.25 * dayRate),
          "business-support": notApplicable(),
          "capacity-connectors-other": notApplicable(),
        }),
      };
    }

    return option;
  });
}

function formatNumber(value: number | null, unit: string): string {
  if (value === null) return "à confirmer";
  return `${new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 2 }).format(value)} ${unit}`;
}

const contextTriStateLabels: Record<TriState, string> = {
  unknown: "à vérifier",
  yes: "oui",
  no: "non",
};

const evidenceStateLabels: Record<TriState, string> = {
  unknown: "non vérifié — aucune preuve fiable",
  yes: "contrôle daté satisfaisant",
  no: "contrôle réalisé — résultat insatisfaisant",
};

export function buildDecisionDossier(
  inputs: DecisionInputs,
  decision: DecisionResult,
  tcoResults: OptionTcoResult[],
): string {
  const contextLines = [
    `Projet : ${inputs.context.projectKind}`,
    `Audience : ${inputs.context.audience}`,
    `Surface Power Platform : ${inputs.context.surface}`,
    `Données principales : ${inputs.context.dataSource}`,
    `Criticité : ${inputs.context.criticality}`,
    `Hors-ligne requis : ${contextTriStateLabels[inputs.context.offlineRequired]}`,
    `Marque externe forte : ${contextTriStateLabels[inputs.context.externalBrandingRequired]}`,
    `Utilisateurs actuels : ${formatNumber(inputs.context.currentUsers, "")}`.trim(),
    `Utilisateurs projetés : ${formatNumber(inputs.context.projectedUsers, "")}`.trim(),
  ];

  const evidenceLines = (Object.keys(inputs.evidence) as EvidenceKey[]).map(
    (key) =>
      `- ${evidenceStateLabels[inputs.evidence[key]]} — ${evidenceLabels[key]}`,
  );

  const recommendationOption = recommendedOptionForDecision(
    decision.status,
    inputs.context.projectKind,
  );

  const tcoLines = tcoResults.flatMap((result) => [
    `${result.label} :`,
    `  Ponctuel : ${formatNumber(result.oneTimeTotalEur, "€ HT")}`,
    `  Mensuel : ${formatNumber(result.monthlyTotalEur, "€ HT/mois")}`,
    `  TCO 1 an : ${formatNumber(result.totalsEur[1], "€ HT")}`,
    `  TCO 3 ans : ${formatNumber(result.totalsEur[3], "€ HT")}`,
    `  TCO 5 ans : ${formatNumber(result.totalsEur[5], "€ HT")}`,
    ...(result.unknownLabels.length
      ? [`  Inconnues : ${result.unknownLabels.join("\u00a0; ")}`]
      : []),
    ...(result.errors.length
      ? [`  Erreurs : ${result.errors.join("\u00a0; ")}`]
      : []),
  ]);

  return [
    "DOSSIER DE DÉCISION — POWER APPS OU APPLICATION SUR MESURE",
    "Généré localement dans le navigateur\u00a0; aucune donnée envoyée.",
    "",
    "CONTEXTE",
    ...contextLines,
    "",
    "ÉLÉMENTS CONTRÔLÉS",
    ...evidenceLines,
    "",
    "DÉCISION",
    `Statut : ${decision.status}`,
    `Conclusion : ${decision.headline}`,
    `Option recommandée : ${recommendationOption ? decisionOptionLabels[recommendationOption] : "aucune"}`,
    `Options défendables : ${decision.defensibleOptions.length ? decision.defensibleOptions.map((key) => decisionOptionLabels[key]).join("\u00a0; ") : "aucune"}`,
    ...decision.rationale.map((line) => `- ${line}`),
    `Prochaine vérification : ${decision.nextEvidence}`,
    ...(decision.criticalUnknowns.length
      ? [
          "Inconnues critiques\u00a0:",
          ...decision.criticalUnknowns.map((line) => `- ${line}`),
        ]
      : []),
    ...(decision.blockingFailures.length
      ? [
          "Contrôles critiques insatisfaisants\u00a0:",
          ...decision.blockingFailures.map((line) => `- ${line}`),
        ]
      : []),
    ...(decision.contradictions.length
      ? [
          "Contradictions\u00a0:",
          ...decision.contradictions.map(
            (item) =>
              `- ${item.message} [${item.options.map((key) => decisionOptionLabels[key]).join(", ")}]`,
          ),
        ]
      : []),
    "",
    "TCO COMPARABLES",
    "Formule\u00a0: coûts ponctuels + coûts mensuels × 12 × années. Chaque poste est compté une fois.",
    ...tcoLines,
    "",
    "LIMITES",
    "Ce dossier n’est ni un devis, ni une validation de licence, de sécurité ou de conformité. Confirmez les prix dans votre contrat, les politiques dans votre tenant et les résultats sur des cas réels.",
  ].join("\n");
}
