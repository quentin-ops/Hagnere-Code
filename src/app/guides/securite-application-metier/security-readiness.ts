export const securityControls = [
  {
    id: "assetsAndImpact",
    label: "Conséquences et actifs",
    question:
      "Les données, fonctions, dépendances et conséquences d’un accès, d’une erreur ou d’une panne sont-elles décrites ?",
    expectedEvidence:
      "Inventaire court, conséquences métier et hypothèses validées par le propriétaire métier",
    minimum: "written",
  },
  {
    id: "accessAndSecrets",
    label: "Accès et secrets",
    question:
      "Les comptes sensibles, secrets, accès externes et changements d’habilitation sont-ils protégés et contrôlés ?",
    expectedEvidence:
      "Exigence versionnée et test d’un accès refusé, révoqué ou renforcé selon le risque",
    minimum: "tested",
  },
  {
    id: "deliveryAndDependencies",
    label: "Développement, tests et dépendances",
    question:
      "Les environnements, secrets, composants, mises à jour et tests avant livraison sont-ils maîtrisés ?",
    expectedEvidence:
      "Chaîne de livraison automatisée ou procédure observée, inventaire des dépendances et responsable de correction",
    minimum: "tested",
  },
  {
    id: "backupAndRestore",
    label: "Sauvegarde et restauration",
    question:
      "Le périmètre sauvegardé et l’ordre de reprise ont-ils été restaurés dans un environnement isolé ?",
    expectedEvidence:
      "Compte rendu d’exercice, résultat observé, limites, perte et interruption constatées",
    minimum: "tested",
  },
  {
    id: "loggingAndDetection",
    label: "Journaux, alerte et détection",
    question:
      "Un événement sensible déclenche-t-il une trace protégée puis une alerte reçue par une personne nommée ?",
    expectedEvidence:
      "Scénario d’alerte exécuté, horodatage, destinataire et traitement consignés",
    minimum: "tested",
  },
  {
    id: "incidentResponse",
    label: "Réponse à incident",
    question:
      "Les contacts, décisions, actions d’isolement et recours au bon spécialiste ont-ils été exercés ?",
    expectedEvidence:
      "Fiche incident versionnée et exercice court avec responsables et suppléance",
    minimum: "tested",
  },
  {
    id: "maintenance",
    label: "Maintenance et corrections",
    question:
      "Qui surveille les vulnérabilités, qualifie les mises à jour et corrige après la mise en service ?",
    expectedEvidence:
      "Périmètre de maintenance, dépendances suivies, canal et propriétaire écrits",
    minimum: "written",
  },
  {
    id: "responsibilities",
    label: "Responsabilités et suppléance",
    question:
      "Les décisions métier, les alertes, la restauration, les corrections et l’appel au bon niveau ont-ils un responsable ?",
    expectedEvidence:
      "Rôles nommés, limites du prestataire, contacts et suppléance confirmés par un exercice",
    minimum: "tested",
  },
] as const;

export type SecurityControlId = (typeof securityControls)[number]["id"];
export const securityControlIds = securityControls.map(
  ({ id }) => id,
) as SecurityControlId[];

export type ControlStatus =
  "unknown" | "verbal" | "written" | "tested" | "blocker";

export type SecurityEvidence = Record<SecurityControlId, ControlStatus>;

export type BusinessImpact = "unknown" | "limited" | "material" | "critical";
export type TernaryChoice = "unknown" | "no" | "yes";

export interface SecurityContext {
  businessImpact: BusinessImpact;
  personalData: TernaryChoice;
  internetExposure: TernaryChoice;
  activeIncident: TernaryChoice;
}

export type SecurityContextId = keyof SecurityContext;

export function createEmptySecurityContext(): SecurityContext {
  return {
    businessImpact: "unknown",
    personalData: "unknown",
    internetExposure: "unknown",
    activeIncident: "unknown",
  };
}

export function createEmptySecurityEvidence(): SecurityEvidence {
  return Object.fromEntries(
    securityControlIds.map((controlId) => [controlId, "unknown"]),
  ) as SecurityEvidence;
}

export type SecurityVerdict =
  | "ESCALATE_ACTIVE_INCIDENT"
  | "STOP_RELEASE"
  | "CLARIFY_CONTEXT"
  | "CLARIFY_CONTROLS"
  | "REQUEST_WRITTEN_EVIDENCE"
  | "ASSIGN_RESPONSIBILITY"
  | "TEST_RESTORE"
  | "TEST_DETECTION"
  | "RUN_CONTROL_TESTS"
  | "REVIEW_CONTEXTUAL_RISKS"
  | "READY_FOR_REVIEW";

export interface SecurityAssessment {
  verdict: SecurityVerdict;
  title: string;
  explanation: string;
  nextAction: string;
  concernedControls: SecurityControlId[];
  concernedContext: SecurityContextId[];
}

const validStatuses = new Set<ControlStatus>([
  "unknown",
  "verbal",
  "written",
  "tested",
  "blocker",
]);

function normalizeStatus(value: unknown): ControlStatus {
  return validStatuses.has(value as ControlStatus)
    ? (value as ControlStatus)
    : "unknown";
}

function normalizeImpact(value: unknown): BusinessImpact {
  return value === "limited" || value === "material" || value === "critical"
    ? value
    : "unknown";
}

function normalizeTernary(value: unknown): TernaryChoice {
  return value === "no" || value === "yes" ? value : "unknown";
}

export function assessSecurityReadiness(
  context: Partial<SecurityContext> | null | undefined = {},
  evidence: Partial<SecurityEvidence> | null | undefined = {},
): SecurityAssessment {
  const normalizedContext: SecurityContext = {
    businessImpact: normalizeImpact(context?.businessImpact),
    personalData: normalizeTernary(context?.personalData),
    internetExposure: normalizeTernary(context?.internetExposure),
    activeIncident: normalizeTernary(context?.activeIncident),
  };
  const normalizedEvidence = Object.fromEntries(
    securityControlIds.map((controlId) => [
      controlId,
      normalizeStatus(evidence?.[controlId]),
    ]),
  ) as SecurityEvidence;

  if (normalizedContext.activeIncident === "yes") {
    return {
      verdict: "ESCALATE_ACTIVE_INCIDENT",
      title: "STOP — traitez l’incident avant la revue de mise en service",
      explanation:
        "Un incident actif ou soupçonné demande une réponse sur le système réel. Un planificateur générique ne doit pas retarder l’isolement, la conservation des éléments utiles ou l’appel aux personnes compétentes.",
      nextAction:
        "Appliquez la procédure d’incident, prévenez les responsables désignés et sollicitez une expertise adaptée. N’entrez aucun détail sensible dans cet outil.",
      concernedControls: [],
      concernedContext: ["activeIncident"],
    };
  }

  const blockers = securityControlIds.filter(
    (controlId) => normalizedEvidence[controlId] === "blocker",
  );
  if (blockers.length > 0) {
    return {
      verdict: "STOP_RELEASE",
      title: "STOP — ne mettez pas en service dans cet état",
      explanation:
        "Une condition déclarée bloquante touche un contrôle que les autres preuves ne peuvent pas compenser. L’outil ne mesure pas les risques qui restent.",
      nextAction:
        "Corrigez la condition, limitez le périmètre ou reportez. Faites qualifier l’enjeu par le responsable métier et le spécialiste compétent.",
      concernedControls: blockers,
      concernedContext: [],
    };
  }

  const unknownContext = (
    Object.keys(normalizedContext) as SecurityContextId[]
  ).filter((contextId) => normalizedContext[contextId] === "unknown");
  if (unknownContext.length > 0) {
    return {
      verdict: "CLARIFY_CONTEXT",
      title: "Qualifiez d’abord le contexte de l’application",
      explanation:
        "L’impact métier, la présence de données personnelles, l’exposition Internet et l’existence d’un incident changent les contrôles et les personnes à mobiliser.",
      nextAction:
        "Faites répondre le propriétaire métier, le responsable applicatif et, selon le cas, le délégué à la protection des données (DPD ou DPO), le responsable de la sécurité des systèmes d’information (RSSI) ou un autre spécialiste. Une inconnue reste visible.",
      concernedControls: [],
      concernedContext: unknownContext,
    };
  }

  const unknownControls = securityControlIds.filter(
    (controlId) => normalizedEvidence[controlId] === "unknown",
  );
  if (unknownControls.length > 0) {
    return {
      verdict: "CLARIFY_CONTROLS",
      title: "Le dossier contient encore des contrôles inconnus",
      explanation:
        "Sans trace exploitable, l’état du contrôle reste inconnu. La revue ne peut pas trancher ce point par déduction.",
      nextAction:
        "Localisez l’exigence, la procédure, le test ou le responsable de chaque point. Conservez « inconnu » lorsqu’aucune trace exploitable n’existe.",
      concernedControls: unknownControls,
      concernedContext: [],
    };
  }

  const verbalControls = securityControlIds.filter(
    (controlId) => normalizedEvidence[controlId] === "verbal",
  );
  if (verbalControls.length > 0) {
    return {
      verdict: "REQUEST_WRITTEN_EVIDENCE",
      title: "Une affirmation orale doit encore être documentée",
      explanation:
        "Une réponse orale peut orienter la recherche, mais ne fixe ni l’exigence, ni la procédure, ni le résultat d’un exercice.",
      nextAction:
        "Demandez un document versionné ou un compte rendu qui nomme le périmètre, le responsable, le résultat et les limites.",
      concernedControls: verbalControls,
      concernedContext: [],
    };
  }

  if (normalizedEvidence.responsibilities !== "tested") {
    return {
      verdict: "ASSIGN_RESPONSIBILITY",
      title: "Nommez les responsables et vérifiez leur suppléance",
      explanation:
        "Une liste écrite est utile, mais il reste à confirmer qui reçoit une alerte, décide, restaure, corrige et prévient le niveau responsable lorsque la personne principale est absente.",
      nextAction:
        "Rejouez un appel court ou un exercice sur table, confirmez l’acceptation des rôles et corrigez les contacts.",
      concernedControls: ["responsibilities"],
      concernedContext: [],
    };
  }

  if (normalizedEvidence.backupAndRestore !== "tested") {
    return {
      verdict: "TEST_RESTORE",
      title: "Exercez la restauration avant de vous fier à la sauvegarde",
      explanation:
        "Une procédure écrite ne montre pas que les données, la configuration, les secrets et les dépendances peuvent être restaurés dans l’ordre utile.",
      nextAction:
        "Restaurez dans un environnement isolé, observez ce qui manque et comparez la perte et l’interruption constatées aux besoins décidés par le métier.",
      concernedControls: ["backupAndRestore"],
      concernedContext: [],
    };
  }

  if (normalizedEvidence.loggingAndDetection !== "tested") {
    return {
      verdict: "TEST_DETECTION",
      title: "Déclenchez un événement et suivez l’alerte jusqu’à une personne",
      explanation:
        "La présence de journaux ne prouve pas qu’un événement sensible sera détecté, transmis, compris et traité.",
      nextAction:
        "Exécutez un scénario autorisé, vérifiez la trace, l’alerte, le destinataire, l’horodatage et la première action attendue.",
      concernedControls: ["loggingAndDetection"],
      concernedContext: [],
    };
  }

  const controlsRequiringTest = securityControls
    .filter(
      ({ id, minimum }) =>
        minimum === "tested" && normalizedEvidence[id] !== "tested",
    )
    .map(({ id }) => id);
  if (controlsRequiringTest.length > 0) {
    return {
      verdict: "RUN_CONTROL_TESTS",
      title: "Exécutez les contrôles qui ne sont encore que documentés",
      explanation:
        "Les exigences existent, mais leur comportement n’a pas été observé sur l’application et son environnement.",
      nextAction:
        "Préparez des tests autorisés et bornés, conservez les résultats et faites traiter les écarts avant la revue.",
      concernedControls: controlsRequiringTest,
      concernedContext: [],
    };
  }

  const contextualReview: SecurityContextId[] = [];
  const contextualReasons: string[] = [];

  if (
    normalizedContext.businessImpact === "material" ||
    normalizedContext.businessImpact === "critical"
  ) {
    contextualReview.push("businessImpact");
    contextualReasons.push(
      "pour un impact métier matériel ou critique, faites relire la continuité, la manière de poursuivre l’activité sans l’application et les risques qui restent",
    );
  }
  if (normalizedContext.personalData === "yes") {
    contextualReview.push("personalData");
    contextualReasons.push(
      "avec des données personnelles, faites qualifier les rôles, les mesures et les obligations par une compétence en protection des données",
    );
  }
  if (normalizedContext.internetExposure === "yes") {
    contextualReview.push("internetExposure");
    contextualReasons.push(
      "pour une exposition Internet, faites relire la sécurité applicative et l’exploitation",
    );
  }

  if (contextualReview.length > 0) {
    return {
      verdict: "REVIEW_CONTEXTUAL_RISKS",
      title: "Faites relire le dossier dans son contexte",
      explanation: `Les contrôles déclarés sont documentés ou exercés. Le contexte appelle encore une relecture compétente : ${contextualReasons.join(
        " ; ",
      )}. Cette compétence peut appartenir à votre organisation ou être mobilisée à l’extérieur.`,
      nextAction:
        "Faites relire les preuves, les limites et les risques qui restent par les compétences adaptées aux raisons signalées, puis confiez la décision à la personne autorisée.",
      concernedControls: [],
      concernedContext: contextualReview,
    };
  }

  return {
    verdict: "READY_FOR_REVIEW",
    title: "Dossier présentable à une revue métier limitée",
    explanation:
      "Le contexte déclaré est limité, sans données personnelles et sans exposition Internet ; les éléments minimaux sont localisés ou exercés. Ce résultat n’atteste pas la sécurité de l’application et n’autorise pas sa mise en production.",
    nextAction:
      "Présentez les résultats, les limites et les risques qui restent au propriétaire métier et au responsable applicatif. Ils doivent encore décider de maintenir le périmètre limité, corriger ou reporter.",
    concernedControls: [],
    concernedContext: [],
  };
}
