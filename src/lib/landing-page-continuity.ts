export const CLAIM_ORIGINS = [
  { id: "title", label: "Titre" },
  { id: "description", label: "Description" },
  { id: "other", label: "Autre composant actif" },
] as const;

export type LandingClaimOrigin = (typeof CLAIM_ORIGINS)[number]["id"];

export const CLAIM_LEVELS = [
  { id: "ad", label: "Annonce" },
  { id: "ad-group", label: "Groupe d’annonces" },
  { id: "campaign", label: "Campagne" },
  { id: "account", label: "Compte" },
] as const;

export type LandingClaimLevel = (typeof CLAIM_LEVELS)[number]["id"];

export const CLAIM_STATUSES = [
  { id: "unknown", label: "Inconnu" },
  { id: "ready", label: "Prêt" },
  { id: "to-correct", label: "À corriger" },
  { id: "blocking", label: "Bloquant" },
] as const;

export type LandingClaimStatus = (typeof CLAIM_STATUSES)[number]["id"];

export const TEST_STATUSES = [
  { id: "unknown", label: "Pas encore testé" },
  { id: "passed", label: "Test réussi" },
  { id: "failed", label: "Test échoué" },
  { id: "not-applicable", label: "Non applicable" },
] as const;

export type LandingTestStatus = (typeof TEST_STATUSES)[number]["id"];

export const PRE_LAUNCH_TESTS = [
  {
    id: "phone",
    label: "Téléphone et connexion représentatifs",
    help: "Le titre, le contenu utile et l’action apparaissent sans défilement horizontal ni élément qui les masque.",
    allowNotApplicable: false,
  },
  {
    id: "visual-stability",
    label: "Affichage stable et utilisable",
    help: "Les éléments ne se déplacent pas au point de provoquer une mauvaise action ; un score automatique ne remplace pas l’observation.",
    allowNotApplicable: false,
  },
  {
    id: "keyboard-focus",
    label: "Utilisation avec la touche Tab et contour visible",
    help: "Appuyez plusieurs fois sur la touche Tab : chaque lien, champ, case et bouton doit pouvoir être utilisé et montrer clairement où vous vous trouvez.",
    allowNotApplicable: false,
  },
  {
    id: "labels-errors",
    label: "Libellés et erreurs compréhensibles",
    help: "Faites lire ponctuellement les champs par un lecteur d’écran : leur intitulé et leurs erreurs doivent être annoncés avec des mots compréhensibles.",
    allowNotApplicable: false,
  },
  {
    id: "server-error",
    label: "Erreur réseau, correction et renvoi sans faux succès",
    help: "Une panne provoquée n’affiche pas de confirmation trompeuse ; la saisie peut être corrigée puis renvoyée sans disparaître silencieusement.",
    allowNotApplicable: false,
  },
  {
    id: "confirmation",
    label: "Confirmation fidèle à l’action",
    help: "Le message affiché décrit la vraie suite, sans promettre automatiquement un rendez-vous ou un délai.",
    allowNotApplicable: false,
  },
  {
    id: "reception",
    label: "Demande reçue par la bonne personne",
    help: "Une demande fictive clairement identifiée a été retrouvée dans la bonne boîte ou le bon outil, puis supprimée selon la procédure interne.",
    allowNotApplicable: false,
  },
  {
    id: "form-information",
    label: "Information du formulaire relue",
    help: "Chaque champ a une finalité et l’information affichée correspond au traitement réellement effectué.",
    allowNotApplicable: false,
  },
  {
    id: "trackers",
    label: "Cookies et autres traceurs publicitaires",
    help: "Par exemple, si une balise Google Ads dépose un traceur qui demande un accord, testez séparément Accepter, Refuser puis Retirer. Sinon, indiquez Non applicable et expliquez pourquoi.",
    allowNotApplicable: true,
  },
] as const;

export type PreLaunchTestId = (typeof PRE_LAUNCH_TESTS)[number]["id"];

export interface LandingPageContext {
  search: string;
  pageReference: string;
  primaryAction: string;
  recipient: string;
  expectedConfirmation: string;
  device: string;
  browser: string;
  viewportWidth: string;
  network: string;
  testDate: string;
  dedicatedPageNeed: "unknown" | "no" | "yes";
}

export interface LandingPageInventory {
  adReference: string;
  campaignReference: string;
  accountReference: string;
  activeAdsReviewed: boolean;
  campaignComponentsReviewed: boolean;
  accountComponentsReviewed: boolean;
  automaticComponentsReviewed: boolean;
  enhancedFlexibilityReviewed: boolean;
  aiMaxStatus: "unknown" | "off" | "on";
  textCustomizationStatus: "unknown" | "active" | "legacy" | "absent";
  finalUrlExpansionStatus: "unknown" | "off" | "on";
  finalUrlExpansionReviewed: boolean;
  advancedNotes: string;
}

export interface LandingPageClaim {
  id: string;
  origin: LandingClaimOrigin;
  level: LandingClaimLevel;
  text: string;
  possibleUrl: string;
  pageResponse: string;
  evidenceOrCondition: string;
  owner: string;
  checkedAt: string;
  correction: string;
  status: LandingClaimStatus;
}

export interface LandingPageTest {
  status: LandingTestStatus;
  note: string;
}

export type LandingPageTests = Record<PreLaunchTestId, LandingPageTest>;

export interface LandingPageContinuityWorksheet {
  context: LandingPageContext;
  inventory: LandingPageInventory;
  claims: LandingPageClaim[];
  tests: LandingPageTests;
  fictitiousExample: boolean;
}

export interface LandingPageWorksheetIssue {
  area: "context" | "inventory" | "claim" | "test";
  field: string;
  message: string;
  claimId?: string;
  testId?: PreLaunchTestId;
}

export type LandingPageDecisionId = "keep" | "correct" | "create" | "postpone";

export interface LandingPageDecision {
  id: LandingPageDecisionId;
  label: string;
  explanation: string;
  unknowns: string[];
  blockingReasons: string[];
}

const EMPTY_CONTEXT: LandingPageContext = {
  search: "",
  pageReference: "",
  primaryAction: "",
  recipient: "",
  expectedConfirmation: "",
  device: "",
  browser: "",
  viewportWidth: "",
  network: "",
  testDate: "",
  dedicatedPageNeed: "unknown",
};

const EMPTY_INVENTORY: LandingPageInventory = {
  adReference: "",
  campaignReference: "",
  accountReference: "",
  activeAdsReviewed: false,
  campaignComponentsReviewed: false,
  accountComponentsReviewed: false,
  automaticComponentsReviewed: false,
  enhancedFlexibilityReviewed: false,
  aiMaxStatus: "unknown",
  textCustomizationStatus: "unknown",
  finalUrlExpansionStatus: "unknown",
  finalUrlExpansionReviewed: false,
  advancedNotes: "",
};

const ORIGIN_LABELS = Object.fromEntries(
  CLAIM_ORIGINS.map((item) => [item.id, item.label]),
) as Record<LandingClaimOrigin, string>;

const LEVEL_LABELS = Object.fromEntries(
  CLAIM_LEVELS.map((item) => [item.id, item.label]),
) as Record<LandingClaimLevel, string>;

const STATUS_LABELS = Object.fromEntries(
  CLAIM_STATUSES.map((item) => [item.id, item.label]),
) as Record<LandingClaimStatus, string>;

const TEST_STATUS_LABELS = Object.fromEntries(
  TEST_STATUSES.map((item) => [item.id, item.label]),
) as Record<LandingTestStatus, string>;

function clean(value: string) {
  return value.trim().replace(/\s+/g, " ");
}

function isIsoDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00Z`);
  return (
    !Number.isNaN(parsed.getTime()) &&
    parsed.toISOString().slice(0, 10) === value
  );
}

function emptyTests(): LandingPageTests {
  return Object.fromEntries(
    PRE_LAUNCH_TESTS.map((test) => [test.id, { status: "unknown", note: "" }]),
  ) as LandingPageTests;
}

export function createEmptyLandingClaim(id: string): LandingPageClaim {
  return {
    id,
    origin: "title",
    level: "ad",
    text: "",
    possibleUrl: "",
    pageResponse: "",
    evidenceOrCondition: "",
    owner: "",
    checkedAt: "",
    correction: "",
    status: "unknown",
  };
}

export function createEmptyLandingPageWorksheet(): LandingPageContinuityWorksheet {
  return {
    context: { ...EMPTY_CONTEXT },
    inventory: { ...EMPTY_INVENTORY },
    claims: [createEmptyLandingClaim("claim-1")],
    tests: emptyTests(),
    fictitiousExample: false,
  };
}

export function validateLandingPageWorksheet(
  worksheet: LandingPageContinuityWorksheet,
) {
  const issues: LandingPageWorksheetIssue[] = [];
  const contextFields = [
    ["search", "Indiquez une recherche représentative."],
    ["pageReference", "Indiquez l’URL ou la référence de la page testée."],
    ["primaryAction", "Indiquez l’action principale proposée."],
    ["recipient", "Indiquez qui reçoit réellement la demande."],
    [
      "expectedConfirmation",
      "Indiquez la confirmation réellement attendue après l’action.",
    ],
    ["device", "Indiquez l’appareil utilisé pour le test."],
    ["browser", "Indiquez le navigateur utilisé pour le test."],
    ["network", "Indiquez le type de réseau utilisé pour le test."],
  ] as const;

  for (const [field, message] of contextFields) {
    if (!clean(worksheet.context[field])) {
      issues.push({ area: "context", field, message });
    }
  }

  const width = Number(worksheet.context.viewportWidth);
  if (!worksheet.context.viewportWidth.trim()) {
    issues.push({
      area: "context",
      field: "viewportWidth",
      message: "Indiquez la largeur affichée de la page, en pixels.",
    });
  } else if (!Number.isInteger(width) || width < 240 || width > 5000) {
    issues.push({
      area: "context",
      field: "viewportWidth",
      message:
        "La largeur doit être un nombre entier compris entre 240 et 5 000 pixels.",
    });
  }

  if (!worksheet.context.testDate) {
    issues.push({
      area: "context",
      field: "testDate",
      message: "Indiquez la date du test.",
    });
  } else if (!isIsoDate(worksheet.context.testDate)) {
    issues.push({
      area: "context",
      field: "testDate",
      message: "La date du test n’est pas valide.",
    });
  }

  if (worksheet.context.dedicatedPageNeed === "unknown") {
    issues.push({
      area: "context",
      field: "dedicatedPageNeed",
      message:
        "Précisez si la page générale mélange encore plusieurs offres ou actions.",
    });
  }

  const inventoryFields = [
    ["adReference", "Nommez l’annonce ou le groupe d’annonces examiné."],
    ["campaignReference", "Nommez la campagne examinée."],
    ["accountReference", "Nommez le compte examiné sans donnée personnelle."],
  ] as const;

  for (const [field, message] of inventoryFields) {
    if (!clean(worksheet.inventory[field])) {
      issues.push({ area: "inventory", field, message });
    }
  }

  const inventoryChecks = [
    ["activeAdsReviewed", "Les annonces actives n’ont pas été inventoriées."],
    [
      "campaignComponentsReviewed",
      "Les composants au niveau de la campagne n’ont pas été vérifiés.",
    ],
    [
      "accountComponentsReviewed",
      "Les composants au niveau du compte n’ont pas été vérifiés.",
    ],
    [
      "automaticComponentsReviewed",
      "Les composants automatiques n’ont pas été vérifiés.",
    ],
    [
      "enhancedFlexibilityReviewed",
      "La flexibilité améliorée et les autres annonces actives du groupe n’ont pas été vérifiées.",
    ],
  ] as const;

  for (const [field, message] of inventoryChecks) {
    if (!worksheet.inventory[field]) {
      issues.push({ area: "inventory", field, message });
    }
  }

  if (worksheet.inventory.aiMaxStatus === "unknown") {
    issues.push({
      area: "inventory",
      field: "aiMaxStatus",
      message: "L’état d’AI Max n’a pas été vérifié.",
    });
  }

  if (worksheet.inventory.textCustomizationStatus === "unknown") {
    issues.push({
      area: "inventory",
      field: "textCustomizationStatus",
      message:
        "L’état actif, hérité ou absent de l’adaptation du texte n’a pas été vérifié.",
    });
  }

  if (worksheet.inventory.aiMaxStatus === "on") {
    if (worksheet.inventory.finalUrlExpansionStatus === "unknown") {
      issues.push({
        area: "inventory",
        field: "finalUrlExpansionStatus",
        message: "L’état de l’extension d’URL finale n’a pas été vérifié.",
      });
    }
    if (!worksheet.inventory.finalUrlExpansionReviewed) {
      issues.push({
        area: "inventory",
        field: "finalUrlExpansionReviewed",
        message:
          "Les URL incluses, exclues et réellement utilisées n’ont pas été vérifiées.",
      });
    }
  }

  if (worksheet.claims.length === 0) {
    issues.push({
      area: "claim",
      field: "claims",
      message: "Ajoutez au moins une affirmation importante de l’annonce.",
    });
  }

  const claimFields = [
    ["text", "le texte exact"],
    ["possibleUrl", "l’URL possible"],
    ["pageResponse", "la réponse trouvée sur la page"],
    ["evidenceOrCondition", "l’élément vérifiable ou la condition"],
    ["owner", "le responsable"],
  ] as const;

  worksheet.claims.forEach((claim, index) => {
    const line = index + 1;
    for (const [field, label] of claimFields) {
      if (!clean(claim[field])) {
        issues.push({
          area: "claim",
          field,
          claimId: claim.id,
          message: `Ligne ${line} : renseignez ${label}.`,
        });
      }
    }

    if (!claim.checkedAt) {
      issues.push({
        area: "claim",
        field: "checkedAt",
        claimId: claim.id,
        message: `Ligne ${line} : indiquez la date de dernière vérification.`,
      });
    } else if (!isIsoDate(claim.checkedAt)) {
      issues.push({
        area: "claim",
        field: "checkedAt",
        claimId: claim.id,
        message: `Ligne ${line} : la date de dernière vérification n’est pas valide.`,
      });
    }

    if (claim.status === "unknown") {
      issues.push({
        area: "claim",
        field: "status",
        claimId: claim.id,
        message: `Ligne ${line} : l’état reste inconnu.`,
      });
    }

    if (
      (claim.status === "to-correct" || claim.status === "blocking") &&
      !clean(claim.correction)
    ) {
      issues.push({
        area: "claim",
        field: "correction",
        claimId: claim.id,
        message: `Ligne ${line} : indiquez la correction ou le premier blocage à traiter.`,
      });
    }
  });

  for (const definition of PRE_LAUNCH_TESTS) {
    const test = worksheet.tests[definition.id];
    if (test.status === "unknown") {
      issues.push({
        area: "test",
        field: "status",
        testId: definition.id,
        message: `${definition.label} : test non renseigné.`,
      });
    }
    if (test.status === "not-applicable" && !definition.allowNotApplicable) {
      issues.push({
        area: "test",
        field: "status",
        testId: definition.id,
        message: `${definition.label} : ce test ne peut pas être écarté comme non applicable.`,
      });
    }
    if (test.status !== "unknown" && !clean(test.note)) {
      issues.push({
        area: "test",
        field: "note",
        testId: definition.id,
        message: `${definition.label} : consignez ce qui a été observé ou pourquoi le test ne s’applique pas.`,
      });
    }
  }

  return { valid: issues.length === 0, issues };
}

export function decideLandingPage(
  worksheet: LandingPageContinuityWorksheet,
): LandingPageDecision {
  const validation = validateLandingPageWorksheet(worksheet);
  const blockingClaims = worksheet.claims.filter(
    (claim) => claim.status === "blocking",
  );
  const failedTests = PRE_LAUNCH_TESTS.filter(
    (test) => worksheet.tests[test.id].status === "failed",
  );
  const blockingReasons = [
    ...blockingClaims.map((claim) =>
      clean(claim.text)
        ? `Affirmation bloquante : « ${clean(claim.text)} ».`
        : "Une affirmation est marquée bloquante.",
    ),
    ...failedTests.map((test) => `Test échoué : ${test.label}.`),
  ];
  const unknowns = [
    ...new Set(validation.issues.map((issue) => issue.message)),
  ];

  if (blockingReasons.length > 0) {
    return {
      id: "postpone",
      label: "Reporter la campagne",
      explanation:
        "Un blocage ou un test échoué reste à traiter avant de payer davantage de clics. Corrigez le premier point signalé, puis rejouez les tests concernés.",
      unknowns,
      blockingReasons,
    };
  }

  if (worksheet.context.dedicatedPageNeed === "yes") {
    return {
      id: "create",
      label: "Créer une page dédiée, puis la tester",
      explanation:
        "La page générale mélange encore plusieurs offres ou actions. Construisez une page distincte avec les contenus vrais déjà disponibles, puis refaites tous les tests avant lancement.",
      unknowns,
      blockingReasons,
    };
  }

  const correctionNeeded = worksheet.claims.some(
    (claim) => claim.status === "to-correct",
  );

  if (correctionNeeded || validation.issues.length > 0) {
    return {
      id: "correct",
      label: "Corriger la page ou compléter la fiche, puis retester",
      explanation: correctionNeeded
        ? "Au moins une réponse peut être réparée sur la page actuelle. Appliquez les corrections écrites et refaites les tests concernés."
        : "Des informations ou des tests restent inconnus. Complétez-les avant de considérer la page comme prête.",
      unknowns,
      blockingReasons,
    };
  }

  return {
    id: "keep",
    label: "Garder la page actuelle",
    explanation:
      "Toutes les affirmations saisies sont prêtes, l’inventaire est renseigné et les tests déclarés sont réussis. Cette conclusion ne garantit ni approbation, ni conversion, ni conformité.",
    unknowns,
    blockingReasons,
  };
}

export function formatLandingPageContinuitySummary(
  worksheet: LandingPageContinuityWorksheet,
  decision = decideLandingPage(worksheet),
) {
  const context = worksheet.context;
  const inventory = worksheet.inventory;
  const lines = [
    "FICHE ANNONCE → PAGE GOOGLE ADS",
    worksheet.fictitiousExample
      ? "EXEMPLE ILLUSTRATIF FICTIF — ThermoBureau 73 (ni client, ni réalisation, ni résultat Hagnéré Code)"
      : "Fiche de travail locale — aucune donnée transmise ni enregistrée par l’outil",
    "",
    "CONTEXTE",
    `Recherche représentative : ${clean(context.search) || "inconnue"}`,
    `Page testée : ${clean(context.pageReference) || "inconnue"}`,
    `Action principale : ${clean(context.primaryAction) || "inconnue"}`,
    `Destinataire réel : ${clean(context.recipient) || "inconnu"}`,
    `Confirmation attendue : ${clean(context.expectedConfirmation) || "inconnue"}`,
    `Test : ${clean(context.device) || "appareil inconnu"} · ${clean(context.browser) || "navigateur inconnu"} · ${clean(context.viewportWidth) ? `${clean(context.viewportWidth)} pixels de large` : "largeur inconnue"} · ${clean(context.network) || "réseau inconnu"} · ${clean(context.testDate) || "date inconnue"}`,
    `Page générale encore confuse : ${context.dedicatedPageNeed === "yes" ? "oui" : context.dedicatedPageNeed === "no" ? "non" : "inconnu"}`,
    "",
    "INVENTAIRE GOOGLE ADS",
    `Annonce ou groupe : ${clean(inventory.adReference) || "inconnu"} — ${inventory.activeAdsReviewed ? "annonces actives vérifiées" : "annonces actives non vérifiées"}`,
    `Campagne : ${clean(inventory.campaignReference) || "inconnue"} — ${inventory.campaignComponentsReviewed ? "composants vérifiés" : "composants non vérifiés"}`,
    `Compte : ${clean(inventory.accountReference) || "inconnu"} — ${inventory.accountComponentsReviewed ? "composants vérifiés" : "composants non vérifiés"}`,
    `Composants automatiques : ${inventory.automaticComponentsReviewed ? "vérifiés" : "non vérifiés"}`,
    `Flexibilité améliorée et autres annonces actives : ${inventory.enhancedFlexibilityReviewed ? "vérifiées" : "non vérifiées"}`,
    `AI Max : ${inventory.aiMaxStatus === "on" ? "actif" : inventory.aiMaxStatus === "off" ? "désactivé" : "inconnu"}`,
    `Adaptation du texte : ${inventory.textCustomizationStatus === "active" ? "active" : inventory.textCustomizationStatus === "legacy" ? "héritée d’avant AI Max" : inventory.textCustomizationStatus === "absent" ? "absente après vérification" : "inconnue"}`,
    `Extension d’URL finale : ${inventory.finalUrlExpansionStatus === "on" ? "active" : inventory.finalUrlExpansionStatus === "off" ? "désactivée" : "inconnue"} — ${inventory.finalUrlExpansionReviewed ? "URL incluses, exclues et observées vérifiées" : "contrôle d’URL non réalisé ou non requis"}`,
    `Notes avancées : ${clean(inventory.advancedNotes) || "aucune"}`,
    "",
    "AFFIRMATIONS ET PAGES",
  ];

  if (worksheet.claims.length === 0) {
    lines.push("Aucune affirmation saisie.");
  } else {
    worksheet.claims.forEach((claim, index) => {
      lines.push(
        `${index + 1}. ${ORIGIN_LABELS[claim.origin]} · ${LEVEL_LABELS[claim.level]} · état ${STATUS_LABELS[claim.status]}`,
        `   Texte : ${clean(claim.text) || "inconnu"}`,
        `   URL possible : ${clean(claim.possibleUrl) || "inconnue"}`,
        `   Réponse sur la page : ${clean(claim.pageResponse) || "inconnue"}`,
        `   Élément ou condition : ${clean(claim.evidenceOrCondition) || "inconnu"}`,
        `   Responsable et date : ${clean(claim.owner) || "inconnu"} · ${clean(claim.checkedAt) || "date inconnue"}`,
        `   Correction : ${clean(claim.correction) || "aucune indiquée"}`,
      );
    });
  }

  lines.push("", "TESTS AVANT LANCEMENT");
  PRE_LAUNCH_TESTS.forEach((definition) => {
    const test = worksheet.tests[definition.id];
    lines.push(
      `- ${definition.label} : ${TEST_STATUS_LABELS[test.status]}${clean(test.note) ? ` — ${clean(test.note)}` : ""}`,
    );
  });

  lines.push("", "INCONNUES");
  if (decision.unknowns.length === 0) {
    lines.push("Aucune inconnue signalée dans les champs de cette fiche.");
  } else {
    decision.unknowns.forEach((unknown) => lines.push(`- ${unknown}`));
  }

  lines.push("", "DÉCISION", decision.label, decision.explanation);
  decision.blockingReasons.forEach((reason) => lines.push(`- ${reason}`));
  lines.push(
    "",
    "Limite : cette fiche n’attribue aucun score et ne garantit ni résultat publicitaire, ni approbation Google Ads, ni conformité juridique ou WCAG.",
  );

  return lines.join("\n");
}

export function createThermoBureauExample(): LandingPageContinuityWorksheet {
  const testDate = "2026-07-15";
  const readyTests = Object.fromEntries(
    PRE_LAUNCH_TESTS.map((test) => [
      test.id,
      {
        status:
          test.id === "reception"
            ? "unknown"
            : test.id === "trackers"
              ? "not-applicable"
              : "passed",
        note:
          test.id === "reception"
            ? "La demande fictive n’a pas encore été retrouvée dans la boîte de test."
            : test.id === "trackers"
              ? "Aucun traceur concerné dans cet exemple fictif."
              : "Contrôle fictif consigné pour expliquer la méthode.",
      },
    ]),
  ) as LandingPageTests;

  const common = {
    origin: "title" as const,
    level: "ad" as const,
    possibleUrl: "/entretien-climatisation-bureaux",
    checkedAt: testDate,
    correction: "",
    status: "ready" as const,
  };

  return {
    fictitiousExample: true,
    context: {
      search: "entretien climatisation bureaux Chambéry",
      pageReference: "/entretien-climatisation-bureaux",
      primaryAction: "Demander une visite technique",
      recipient: "Responsable commercial (rôle fictif)",
      expectedConfirmation:
        "Demande transmise ; le créneau n’est pas encore confirmé",
      device: "Téléphone Android de test (fictif)",
      browser: "Chrome",
      viewportWidth: "390",
      network: "4G simulée",
      testDate,
      dedicatedPageNeed: "no",
    },
    inventory: {
      adReference: "Annonce RSA Entretien — fictive",
      campaignReference: "Campagne Savoie B2B — fictive",
      accountReference: "Compte de démonstration — fictif",
      activeAdsReviewed: true,
      campaignComponentsReviewed: true,
      accountComponentsReviewed: true,
      automaticComponentsReviewed: true,
      enhancedFlexibilityReviewed: true,
      aiMaxStatus: "off",
      textCustomizationStatus: "absent",
      finalUrlExpansionStatus: "off",
      finalUrlExpansionReviewed: false,
      advancedNotes:
        "Adaptation du texte active, héritée ou absente vérifiée : aucune activation dans cet exemple fictif. Autre annonce fictive du groupe : Dépannage climatisation, URL /depannage-climatisation. Liens annexes Entretien et Dépannage vérifiés séparément.",
    },
    claims: [
      {
        ...common,
        id: "claim-1",
        text: "Entretien climatisation",
        pageResponse: "Le premier écran nomme précisément le service.",
        evidenceOrCondition: "Déroulé réel de la visite, sans rapport inventé.",
        owner: "Responsable service (rôle fictif)",
      },
      {
        ...common,
        id: "claim-2",
        text: "Pour bureaux à Chambéry",
        pageResponse:
          "Le public professionnel et la zone apparaissent ensemble.",
        evidenceOrCondition:
          "Types de locaux et communes réellement desservis.",
        owner: "Responsable commercial (rôle fictif)",
      },
      {
        ...common,
        id: "claim-3",
        text: "Demandez une visite",
        pageResponse: "Le formulaire permet de demander une visite.",
        evidenceOrCondition: "Destinataire et confirmation à tester.",
        owner: "Responsable commercial (rôle fictif)",
        correction:
          "Retrouver la demande dans la boîte de test avant lancement.",
        status: "to-correct",
      },
      {
        ...common,
        id: "claim-4",
        text: "Inventaire des équipements",
        pageResponse: "La page explique ce qui sera recensé.",
        evidenceOrCondition:
          "Description exacte du relevé, sans faux document.",
        owner: "Responsable service (rôle fictif)",
      },
      {
        ...common,
        id: "claim-5",
        text: "Proposition d’entretien",
        pageResponse: "La suite de la visite est décrite sans délai inventé.",
        evidenceOrCondition:
          "Contenu effectivement remis et conditions applicables.",
        owner: "Responsable service (rôle fictif)",
      },
      {
        ...common,
        id: "claim-6",
        origin: "description",
        text: "Pour bureaux en Savoie",
        pageResponse: "La page distingue Chambéry de la zone plus large.",
        evidenceOrCondition: "Liste des communes desservies tenue à jour.",
        owner: "Responsable commercial (rôle fictif)",
      },
      {
        ...common,
        id: "claim-7",
        origin: "description",
        text: "Décrivez vos locaux et demandez un créneau de visite",
        pageResponse:
          "L’action parle de demande ; la confirmation ne présente pas le créneau comme acquis.",
        evidenceOrCondition: "Texte de confirmation fidèle à la vraie suite.",
        owner: "Responsable commercial (rôle fictif)",
      },
      {
        ...common,
        id: "claim-8",
        level: "ad-group",
        text: "Dépannage climatisation",
        possibleUrl: "/depannage-climatisation",
        pageResponse: "La page liée décrit un dépannage distinct.",
        evidenceOrCondition:
          "Vérifier ensemble le texte, l’URL et le contexte de l’autre annonce active.",
        owner: "Responsable Ads (rôle fictif)",
      },
      {
        ...common,
        id: "claim-9",
        origin: "other",
        level: "account",
        text: "Lien annexe automatique : Dépannage",
        possibleUrl: "/depannage-climatisation",
        pageResponse: "La destination décrit le dépannage, pas l’entretien.",
        evidenceOrCondition: "Association et rapport des composants du compte.",
        owner: "Responsable Ads (rôle fictif)",
      },
      {
        ...common,
        id: "claim-10",
        origin: "description",
        text: "Une visite technique pour recenser vos équipements et préparer un entretien adapté.",
        pageResponse:
          "La page explique la visite technique, le recensement et la préparation de la proposition.",
        evidenceOrCondition:
          "Déroulé réel de la visite et contenu effectivement préparé, sans prestation inventée.",
        owner: "Responsable service (rôle fictif)",
      },
    ],
    tests: readyTests,
  };
}
