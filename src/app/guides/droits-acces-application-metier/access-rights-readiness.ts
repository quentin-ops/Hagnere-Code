export const accessRightControls = [
  {
    id: "matrix",
    label: "Rôles, objets et actions",
    question:
      "Les fonctions de travail, les objets métier et les actions possibles sont-ils distingués ?",
    expectedEvidence:
      "Une matrice lisible qui sépare au minimum consulter, créer, modifier, valider, exporter et supprimer",
  },
  {
    id: "scopeAndRelations",
    label: "Portée et relations",
    question:
      "La règle précise-t-elle le dossier, l’équipe, l’établissement, le propriétaire ou la délégation concernés ?",
    expectedEvidence:
      "Une portée explicite et, si nécessaire, les relations ou états qui changent le droit",
  },
  {
    id: "defaultDeny",
    label: "Refus en l’absence de règle",
    question:
      "Une action est-elle refusée lorsqu’aucune règle explicite ne l’autorise ?",
    expectedEvidence:
      "Règle de refus par défaut écrite et comportement attendu en cas d’échec",
  },
  {
    id: "sensitiveApproval",
    label: "Validation des droits sensibles",
    question:
      "La personne qui valide un droit sensible et celle qui l’applique sont-elles identifiées ?",
    expectedEvidence:
      "Demande, validation métier, application et date de fin d’une éventuelle délégation",
  },
  {
    id: "lifecycle",
    label: "Arrivée, mobilité et départ",
    question:
      "Les droits sont-ils attribués, adaptés et retirés lors des changements de situation ?",
    expectedEvidence:
      "Procédure arrivée–mobilité–départ, propriétaire et délai opérationnel",
  },
  {
    id: "acceptanceTests",
    label: "Tests d’autorisation et de refus",
    question:
      "Chaque règle critique possède-t-elle un cas autorisé et un cas refusé ?",
    expectedEvidence:
      "Tests sur l’objet réel, côté serveur, avec résultat attendu et écart conservé",
  },
  {
    id: "auditTrace",
    label: "Trace d’audit utile",
    question:
      "Les actions à tracer, leur finalité et les personnes autorisées à consulter les traces sont-elles définies ?",
    expectedEvidence:
      "Auteur, date, heure, nature, référence de l’objet, finalité, accès et durée à confirmer selon le contexte",
  },
] as const;

export type AccessRightControlId = (typeof accessRightControls)[number]["id"];

export const accessRightControlIds = accessRightControls.map(
  ({ id }) => id,
) as AccessRightControlId[];

export type RuleStatus = "unknown" | "missing" | "documented";
export type ContextChoice = "unknown" | "no" | "yes";

export type AccessRightEvidence = Record<AccessRightControlId, RuleStatus>;

export interface AccessRightContext {
  personalData: ContextChoice;
  sensitiveActions: ContextChoice;
  multipleEntities: ContextChoice;
  temporaryDelegations: ContextChoice;
}

export type AccessRightContextId = keyof AccessRightContext;

export function createEmptyAccessRightContext(): AccessRightContext {
  return {
    personalData: "unknown",
    sensitiveActions: "unknown",
    multipleEntities: "unknown",
    temporaryDelegations: "unknown",
  };
}

export function createEmptyAccessRightEvidence(): AccessRightEvidence {
  return Object.fromEntries(
    accessRightControlIds.map((controlId) => [controlId, "unknown"]),
  ) as AccessRightEvidence;
}

export type AccessRightVerdict =
  | "CLARIFY_CONTEXT"
  | "CLARIFY_RULES"
  | "STOP_MATRIX_MISSING"
  | "STOP_DEFAULT_DENY_MISSING"
  | "STOP_SENSITIVE_APPROVAL_MISSING"
  | "STOP_LIFECYCLE_MISSING"
  | "STOP_NEGATIVE_TEST_MISSING"
  | "REVIEW_RELATION_RULES"
  | "REVIEW_TRACE_SCOPE"
  | "READY_FOR_WORKSHOP";

export interface AccessRightAssessment {
  verdict: AccessRightVerdict;
  title: string;
  explanation: string;
  nextAction: string;
  concernedControls: AccessRightControlId[];
  concernedContext: AccessRightContextId[];
}

const validRuleStatuses = new Set<RuleStatus>([
  "unknown",
  "missing",
  "documented",
]);

function normalizeRuleStatus(value: unknown): RuleStatus {
  return validRuleStatuses.has(value as RuleStatus)
    ? (value as RuleStatus)
    : "unknown";
}

function normalizeContextChoice(value: unknown): ContextChoice {
  return value === "no" || value === "yes" ? value : "unknown";
}

export function assessAccessRightsReadiness(
  context: Partial<AccessRightContext> | null | undefined = {},
  evidence: Partial<AccessRightEvidence> | null | undefined = {},
): AccessRightAssessment {
  const normalizedContext: AccessRightContext = {
    personalData: normalizeContextChoice(context?.personalData),
    sensitiveActions: normalizeContextChoice(context?.sensitiveActions),
    multipleEntities: normalizeContextChoice(context?.multipleEntities),
    temporaryDelegations: normalizeContextChoice(context?.temporaryDelegations),
  };

  const normalizedEvidence = Object.fromEntries(
    accessRightControlIds.map((controlId) => [
      controlId,
      normalizeRuleStatus(evidence?.[controlId]),
    ]),
  ) as AccessRightEvidence;

  const unknownContext = (
    Object.keys(normalizedContext) as AccessRightContextId[]
  ).filter((contextId) => normalizedContext[contextId] === "unknown");

  if (unknownContext.length > 0) {
    return {
      verdict: "CLARIFY_CONTEXT",
      title: "Commencez par qualifier le contexte",
      explanation:
        "Les données personnelles, les actions sensibles, plusieurs établissements et les délégations temporaires changent les règles à écrire et les personnes à associer.",
      nextAction:
        "Faites répondre le responsable métier. Si le traitement porte sur des données personnelles, associez la compétence en protection des données appropriée sans confondre ce point avec le droit d’accès de la personne concernée.",
      concernedControls: [],
      concernedContext: unknownContext,
    };
  }

  const unknownRules = accessRightControlIds.filter(
    (controlId) => normalizedEvidence[controlId] === "unknown",
  );

  if (unknownRules.length > 0) {
    return {
      verdict: "CLARIFY_RULES",
      title: "Des règles restent inconnues",
      explanation:
        "Une valeur inconnue n’est ni une autorisation, ni un refus décidé par le métier. Les autres réponses ne la compensent pas.",
      nextAction:
        "Localisez la règle, le responsable ou le test. Si personne ne peut trancher, marquez la fonction STOP avant développement ou mise en service.",
      concernedControls: unknownRules,
      concernedContext: [],
    };
  }

  if (normalizedEvidence.matrix === "missing") {
    return {
      verdict: "STOP_MATRIX_MISSING",
      title: "STOP — écrivez la matrice avant de configurer les profils",
      explanation:
        "Des intitulés comme « utilisateur » ou « administrateur » ne disent pas quel objet est concerné ni quelle action est permise.",
      nextAction:
        "Choisissez un objet critique, listez ses actions et écrivez pour chaque fonction de travail : autorisé, refusé ou à décider.",
      concernedControls: ["matrix"],
      concernedContext: [],
    };
  }

  if (normalizedEvidence.defaultDeny === "missing") {
    return {
      verdict: "STOP_DEFAULT_DENY_MISSING",
      title: "STOP — décidez ce qui se passe sans règle correspondante",
      explanation:
        "Une nouvelle action ou un nouveau chemin technique ne doit pas devenir accessible simplement parce qu’aucune règle ne l’a prévu.",
      nextAction:
        "Écrivez un refus par défaut, le message attendu et le traitement sûr de l’échec. Cette recommandation OWASP n’est pas présentée comme une loi universelle.",
      concernedControls: ["defaultDeny"],
      concernedContext: [],
    };
  }

  if (
    normalizedContext.sensitiveActions === "yes" &&
    normalizedEvidence.sensitiveApproval === "missing"
  ) {
    return {
      verdict: "STOP_SENSITIVE_APPROVAL_MISSING",
      title: "STOP — attribuez la validation des droits sensibles",
      explanation:
        "Une exportation, une suppression, une validation financière ou un droit d’administration ne doit pas être accordé sans une décision métier identifiable.",
      nextAction:
        "Distinguez qui demande, qui valide, qui applique et qui revoit. Documentez aussi les cas d’urgence et la date de fin d’un droit temporaire.",
      concernedControls: ["sensitiveApproval"],
      concernedContext: ["sensitiveActions"],
    };
  }

  if (normalizedEvidence.lifecycle === "missing") {
    return {
      verdict: "STOP_LIFECYCLE_MISSING",
      title: "STOP — couvrez l’arrivée, la mobilité et le départ",
      explanation:
        "Une matrice juste au lancement devient fausse si les changements de mission, remplacements et départs ne modifient pas les droits.",
      nextAction:
        "Écrivez le déclencheur, le responsable, les droits à ajouter ou retirer et la manière de vérifier l’exécution.",
      concernedControls: ["lifecycle"],
      concernedContext: [],
    };
  }

  if (normalizedEvidence.acceptanceTests === "missing") {
    return {
      verdict: "STOP_NEGATIVE_TEST_MISSING",
      title: "STOP — ajoutez les tests de refus",
      explanation:
        "Un parcours autorisé réussi ne prouve pas qu’un autre utilisateur, un autre dossier ou une autre action sera refusé.",
      nextAction:
        "Pour chaque règle critique, écrivez au moins un cas autorisé et un cas refusé, puis vérifiez le contrôle sur chaque requête concernée côté serveur.",
      concernedControls: ["acceptanceTests"],
      concernedContext: [],
    };
  }

  if (normalizedEvidence.scopeAndRelations === "missing") {
    return {
      verdict: "REVIEW_RELATION_RULES",
      title: "La portée et les relations restent à écrire",
      explanation:
        "Un rôle ne dit pas encore si le droit porte sur son propre dossier, une équipe, un établissement, un état du processus ou une délégation. Si aucun de ces critères ne change le droit, cette simplicité doit rester explicite.",
      nextAction:
        "Écrivez la portée, les relations et les états qui changent le droit, puis retenez le modèle le plus simple capable de les appliquer et de les tester.",
      concernedControls: ["scopeAndRelations"],
      concernedContext: (
        ["multipleEntities", "temporaryDelegations"] as AccessRightContextId[]
      ).filter((contextId) => normalizedContext[contextId] === "yes"),
    };
  }

  if (normalizedEvidence.auditTrace === "missing") {
    return {
      verdict: "REVIEW_TRACE_SCOPE",
      title: "Définissez les traces utiles sans promettre une alerte",
      explanation:
        "Une trace d’audit peut aider à attribuer ou reconstituer une action. Elle n’alerte pas automatiquement et ne prouve pas, à elle seule, la conformité.",
      nextAction:
        "Choisissez les actions à tracer, la finalité, les champs utiles, les accès, la protection et l’événement de suppression ou de revalidation. Faites qualifier les données personnelles si elles sont concernées.",
      concernedControls: ["auditTrace"],
      concernedContext:
        normalizedContext.personalData === "yes" ? ["personalData"] : [],
    };
  }

  return {
    verdict: "READY_FOR_WORKSHOP",
    title: "La matrice est présentable à un atelier de validation",
    explanation:
      "Les décisions structurantes sont documentées pour le contexte déclaré. Ce résultat ne prouve ni l’application technique des droits, ni la sécurité, ni la conformité du système.",
    nextAction:
      "Faites relire la matrice par les responsables métier et technique, transformez chaque règle critique en tests puis consignez les désaccords et inconnues avant réception.",
    concernedControls: [],
    concernedContext: [],
  };
}
