export const specificationEntryFields = [
  "decision",
  "owner",
  "evidence",
  "exclusion",
  "blockingUnknown",
] as const;

export type SpecificationEntryField = (typeof specificationEntryFields)[number];

export const specificationBlocks = [
  {
    id: "productBoundary",
    title: "Produit vendu et premier parcours",
    decisionPrompt:
      "Problème déjà validé, acheteur, utilisateur, résultat vendu, début et fin du premier parcours, après comparaison avec une fonction déjà payée ou une option plus simple.",
    ownerPrompt:
      "Personne qui tranche la promesse, le périmètre et les cas où il ne faut pas développer.",
    evidencePrompt:
      "Scénario rejouable qui montre le résultat, ses préconditions et son résultat attendu, ainsi que l’écart décisif avec l’option plus simple.",
    exclusionPrompt:
      "Fonctions, segments, canaux ou résultats explicitement hors du premier périmètre.",
    blockingUnknownPrompt:
      "Décision encore ouverte sur le problème validé, l’acheteur, le résultat vendu ou les frontières du premier parcours.",
  },
  {
    id: "organizationLifecycle",
    title: "Cycle de vie de l’organisation cliente",
    decisionPrompt:
      "Création, propriété, administration, changement de propriétaire, suspension et séparation entre organisations.",
    ownerPrompt:
      "Personne métier qui autorise la création, le transfert et la fermeture d’une organisation.",
    evidencePrompt:
      "Cas de création et d’administration, plus un refus entre deux organisations fictives distinctes.",
    exclusionPrompt:
      "Choix d’architecture, de base de données, d’hébergeur ou de modèle d’isolation technique.",
    blockingUnknownPrompt:
      "Décision encore ouverte sur la création, la propriété, l’administration, la suspension ou la séparation des organisations.",
  },
  {
    id: "accessLifecycle",
    title: "Invitations, rôles, portées et révocation",
    decisionPrompt:
      "Invitation, acceptation, rôles, objets, actions, portées, changement, expiration, révocation et sessions déjà ouvertes.",
    ownerPrompt:
      "Personne qui valide les droits sensibles et personne qui applique ou revoit les changements.",
    evidencePrompt:
      "Pour chaque règle critique : un cas autorisé, un cas refusé et un contrôle après révocation.",
    exclusionPrompt:
      "Matrice exhaustive ou modèle technique de droits lorsqu’ils relèvent d’un atelier dédié.",
    blockingUnknownPrompt:
      "Décision encore ouverte sur une invitation, un rôle, une portée, un refus, une expiration ou une révocation.",
  },
  {
    id: "offerAndEntitlements",
    title: "Offres et droits d’usage",
    decisionPrompt:
      "Offres vendues, droit ouvert ou retiré par chaque offre, quotas éventuels, passage à une autre offre et règles de consommation.",
    ownerPrompt:
      "Personne produit ou commerciale qui possède le catalogue et arbitre les droits d’usage.",
    evidencePrompt:
      "Table de correspondance offre → droit → action autorisée/refusée, vérifiée sur une organisation fictive.",
    exclusionPrompt:
      "Prix, remise, fiscalité, comptabilité et conditions commerciales non décidées dans ce document produit.",
    blockingUnknownPrompt:
      "Décision encore ouverte sur une offre, un droit d’usage, une limite, un quota ou un changement d’offre.",
  },
  {
    id: "subscriptionLifecycle",
    title: "Cycle de l’abonnement",
    decisionPrompt:
      "États internes, activation, renouvellement, changement, résiliation, fin et effet de chaque transition sur les droits.",
    ownerPrompt:
      "Personne qui tranche l’état produit et personne qui remet les événements de facturation en cohérence avec cet état.",
    evidencePrompt:
      "Table événement → état interne → droit → message, avec événements répétés et reçus dans un ordre différent.",
    exclusionPrompt:
      "Prestataire de paiement, statuts propriétaires, prix, échéancier et délai commercial imposés dans le document.",
    blockingUnknownPrompt:
      "Décision encore ouverte sur un état interne, un événement, son effet sur les droits ou la fin de l’abonnement.",
  },
  {
    id: "failureAndOperations",
    title: "Échecs, correction et exploitation",
    decisionPrompt:
      "Paiement non abouti, action requise, événement manquant, doublon, tiers indisponible, correction, retour arrière, espace d’administration, support et incident.",
    ownerPrompt:
      "Personne qui détecte l’écart, responsable des opérations, personne qui contacte le client et personne habilitée à corriger, remettre l’état en cohérence ou revenir en arrière.",
    evidencePrompt:
      "Cas de panne ou d’échec, dont un tiers indisponible, montrant détection, message, données préservées, reprise ou retour arrière, trace et état cohérent.",
    exclusionPrompt:
      "Promesse de support, disponibilité, délai de réponse ou geste commercial non validé contractuellement.",
    blockingUnknownPrompt:
      "Décision encore ouverte sur un échec, une action de correction, une correction manuelle, l’espace d’administration, le support ou un incident.",
  },
  {
    id: "dataAndSupport",
    title: "Données, conservation et accès support",
    decisionPrompt:
      "Catégories de données, finalités, accès, journalisation, conservation, correction et accès temporaire du support.",
    ownerPrompt:
      "Responsable métier des données, compétence protection des données et approbateur d’un accès support.",
    evidencePrompt:
      "Inventaire, test de portée, ouverture puis fermeture de l’accès support et trace limitée aux informations nécessaires.",
    exclusionPrompt:
      "Qualification juridique, base légale, durée universelle ou déclaration de conformité produite automatiquement.",
    blockingUnknownPrompt:
      "Décision encore ouverte sur une catégorie de données, une conservation, une trace, une correction ou un accès support.",
  },
  {
    id: "resilienceAndExit",
    title: "Sauvegarde, restauration, résiliation et sortie",
    decisionPrompt:
      "Données sauvegardées, restauration, fonctionnement dégradé, export, annulation, récupération, suppression et preuve de sortie.",
    ownerPrompt:
      "Personne qui accepte le risque de perte/reprise et personne qui valide l’export puis la suppression.",
    evidencePrompt:
      "Restauration d’un jeu fictif, contrôle d’intégrité, export relu et test de refus après la suppression prévue.",
    exclusionPrompt:
      "Objectifs de reprise, niveau de service contractuel (SLA), délais, formats contractuels, droits sur le code et obligations légales non tranchés.",
    blockingUnknownPrompt:
      "Décision encore ouverte sur une sauvegarde, une restauration, un export, une annulation, une récupération ou une suppression.",
  },
  {
    id: "nonFunctionalAndAcceptance",
    title: "Exigences non fonctionnelles et réception",
    decisionPrompt:
      "Conditions, volume de référence, scénario au volume doublé, seuils décidés, méthode, environnement et preuves pour accessibilité, performance, sécurité, mobile et exploitation.",
    ownerPrompt:
      "Propriétaire de chaque exigence, spécialiste chargé du contrôle et autorité humaine de réception.",
    evidencePrompt:
      "Cas clavier, focus, erreur, mobile, clair/sombre, mesure au volume déclaré puis à son double, tests de refus et relevé d’écarts.",
    exclusionPrompt:
      "Certification, conformité déclarative, audit complet et acceptation automatique par l’outil.",
    blockingUnknownPrompt:
      "Décision encore ouverte sur un seuil, une méthode, un environnement, une preuve, un contrôle ou l’autorité de réception.",
  },
] as const;

export type SpecificationBlockId = (typeof specificationBlocks)[number]["id"];

export interface SpecificationEntry {
  decision: string;
  owner: string;
  evidence: string;
  exclusion: string;
  blockingUnknown: string;
}

export type SaasSpecificationEntries = Record<
  SpecificationBlockId,
  SpecificationEntry
>;

export interface SaasSpecificationInput {
  projectName: string;
  entries: SaasSpecificationEntries;
}

export type SaasSpecificationPayload =
  | {
      projectName?: unknown;
      entries?: Partial<
        Record<
          SpecificationBlockId,
          Partial<Record<SpecificationEntryField, unknown>> | null | undefined
        >
      > | null;
    }
  | null
  | undefined;

export type SaasSpecificationStatus =
  | "STOP_REQUIRED_INPUTS_UNKNOWN"
  | "CLARIFY_BEFORE_COMPARISON"
  | "CANDIDATE_FOR_VENDOR_COMPARISON";

export interface SpecificationUnknown {
  blockId: SpecificationBlockId | "project";
  blockTitle: string;
  field: SpecificationEntryField | "projectName";
  fieldLabel: string;
  detail?: string;
}

export interface SaasSpecificationAssessment {
  status: SaasSpecificationStatus;
  title: string;
  explanation: string;
  nextAction: string;
  blockingUnknowns: SpecificationUnknown[];
  clarifications: SpecificationUnknown[];
  markdown: string;
}

const fieldLabels: Record<SpecificationEntryField, string> = {
  decision: "Décision",
  owner: "Responsable",
  evidence: "Preuve de réception",
  exclusion: "Exclusion",
  blockingUnknown: "Inconnue bloquante",
};

const unknownMarker =
  /(?:\b(?:tbd|unknown|inconn(?:u|ue|us|ues)|stop)\b|a\s+(?:decider|confirmer)|non\s+renseigne)/u;

function cleanText(value: unknown): string {
  if (typeof value !== "string") return "";

  return value
    .trim()
    .replace(/\r\n?/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/ *\n */g, "\n")
    .replace(/\n{3,}/g, "\n\n");
}

function isUnknown(value: string): boolean {
  if (value.length === 0) return true;

  const normalized = value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLocaleLowerCase("fr-FR");

  return unknownMarker.test(normalized);
}

function normalizeBlockingUnknownDeclaration(value: string): string {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLocaleLowerCase("fr-FR")
    .replace(/[^\p{Letter}\p{Number}]+/gu, " ")
    .trim();
}

function declaresNoBlockingUnknown(value: string): boolean {
  return normalizeBlockingUnknownDeclaration(value) === "aucune identifiee";
}

function createEmptyEntry(): SpecificationEntry {
  return {
    decision: "",
    owner: "",
    evidence: "",
    exclusion: "",
    blockingUnknown: "",
  };
}

export function createEmptySaasSpecification(): SaasSpecificationInput {
  return {
    projectName: "",
    entries: Object.fromEntries(
      specificationBlocks.map(({ id }) => [id, createEmptyEntry()]),
    ) as SaasSpecificationEntries,
  };
}

function normalizeInput(
  payload: SaasSpecificationPayload,
): SaasSpecificationInput {
  return {
    projectName: cleanText(payload?.projectName),
    entries: Object.fromEntries(
      specificationBlocks.map(({ id }) => {
        const entry = payload?.entries?.[id];

        return [
          id,
          {
            decision: cleanText(entry?.decision),
            owner: cleanText(entry?.owner),
            evidence: cleanText(entry?.evidence),
            exclusion: cleanText(entry?.exclusion),
            blockingUnknown: cleanText(entry?.blockingUnknown),
          } satisfies SpecificationEntry,
        ];
      }),
    ) as SaasSpecificationEntries,
  } satisfies SaasSpecificationInput;
}

function displayValue(
  value: string,
  field: SpecificationEntryField,
  prompt: string,
): string {
  if (!isUnknown(value)) return value;

  return field === "decision"
    ? `STOP — À décider : ${prompt}`
    : `À décider : ${prompt}`;
}

function displayBlockingUnknown(value: string, prompt: string): string {
  if (declaresNoBlockingUnknown(value)) return "Aucune identifiée";

  return value.length === 0
    ? `STOP — déclaration requise : ${prompt}`
    : `STOP — ${value}`;
}

function renderMarkdown(
  input: SaasSpecificationInput,
  status: SaasSpecificationStatus,
  blockingUnknowns: SpecificationUnknown[],
  clarifications: SpecificationUnknown[],
): string {
  const projectName = isUnknown(input.projectName)
    ? "STOP — nom du produit à décider"
    : input.projectName;
  const state =
    status === "STOP_REQUIRED_INPUTS_UNKNOWN"
      ? "STOP — décision ou inconnue bloquante à traiter"
      : status === "CLARIFY_BEFORE_COMPARISON"
        ? "À compléter avant comparaison des offres"
        : "Candidat à une relecture de consultation";

  const lines = [
    `# Cahier des charges SaaS — ${projectName}`,
    "",
    `> État : ${state}`,
    "> Document de travail généré localement. Il ne choisit ni architecture, ni prestataire de paiement, ni prix, ni délai, ni niveau de service contractuel (SLA), et ne vaut pas validation juridique, sécurité ou conformité.",
    "",
    "## Règle de lecture",
    "",
    "Chaque bloc distingue une décision, son responsable, la preuve attendue, ce qui est exclu et la déclaration d’une inconnue bloquante. Une déclaration vide ou différente de « Aucune identifiée » force un STOP. Une ligne STOP n’est compensée par aucun autre bloc.",
    "",
  ];

  if (blockingUnknowns.length > 0) {
    lines.push("## Inconnues bloquantes", "");
    for (const unknown of blockingUnknowns) {
      const detail = unknown.detail ? ` — ${unknown.detail}` : "";
      lines.push(
        `- STOP — ${unknown.blockTitle} · ${unknown.fieldLabel}${detail}`,
      );
    }
    lines.push("");
  }

  if (clarifications.length > 0) {
    lines.push("## Points à compléter", "");
    for (const clarification of clarifications) {
      lines.push(
        `- À décider — ${clarification.blockTitle} · ${clarification.fieldLabel}`,
      );
    }
    lines.push("");
  }

  specificationBlocks.forEach((block, index) => {
    const entry = input.entries[block.id];
    lines.push(`## ${index + 1}. ${block.title}`, "");
    lines.push(
      `**Décision** — ${displayValue(entry.decision, "decision", block.decisionPrompt)}`,
      "",
      `**Responsable** — ${displayValue(entry.owner, "owner", block.ownerPrompt)}`,
      "",
      `**Preuve de réception** — ${displayValue(entry.evidence, "evidence", block.evidencePrompt)}`,
      "",
      `**Exclusion** — ${displayValue(entry.exclusion, "exclusion", block.exclusionPrompt)}`,
      "",
      `**Inconnue bloquante** — ${displayBlockingUnknown(entry.blockingUnknown, block.blockingUnknownPrompt)}`,
      "",
    );
  });

  lines.push(
    "## Remise aux prestataires",
    "",
    "Chaque répondant doit reprendre les décisions ci-dessus, signaler toute hypothèse ajoutée, décrire sa preuve, chiffrer séparément les variantes et laisser les exclusions hors du prix principal. Une réponse qui remplace une ligne STOP par un choix silencieux ne répond pas au même produit.",
  );

  return lines.join("\n");
}

export function assessSaasSpecification(
  payload: SaasSpecificationPayload = {},
): SaasSpecificationAssessment {
  const input = normalizeInput(payload);
  const blockingUnknowns: SpecificationUnknown[] = [];
  const clarifications: SpecificationUnknown[] = [];

  if (isUnknown(input.projectName)) {
    blockingUnknowns.push({
      blockId: "project",
      blockTitle: "Identité du produit",
      field: "projectName",
      fieldLabel: "Nom de travail",
    });
  }

  for (const block of specificationBlocks) {
    for (const field of [
      "decision",
      "owner",
      "evidence",
      "exclusion",
    ] as const) {
      if (!isUnknown(input.entries[block.id][field])) continue;

      const unknown: SpecificationUnknown = {
        blockId: block.id,
        blockTitle: block.title,
        field,
        fieldLabel: fieldLabels[field],
      };

      if (field === "decision") blockingUnknowns.push(unknown);
      else clarifications.push(unknown);
    }

    const blockingUnknown = input.entries[block.id].blockingUnknown;
    if (!declaresNoBlockingUnknown(blockingUnknown)) {
      blockingUnknowns.push({
        blockId: block.id,
        blockTitle: block.title,
        field: "blockingUnknown",
        fieldLabel: fieldLabels.blockingUnknown,
        detail:
          blockingUnknown.length === 0
            ? "Déclaration absente : écrivez « Aucune identifiée » ou décrivez le STOP"
            : blockingUnknown,
      });
    }
  }

  const status: SaasSpecificationStatus =
    blockingUnknowns.length > 0
      ? "STOP_REQUIRED_INPUTS_UNKNOWN"
      : clarifications.length > 0
        ? "CLARIFY_BEFORE_COMPARISON"
        : "CANDIDATE_FOR_VENDOR_COMPARISON";

  const resultByStatus: Record<
    SaasSpecificationStatus,
    Pick<SaasSpecificationAssessment, "title" | "explanation" | "nextAction">
  > = {
    STOP_REQUIRED_INPUTS_UNKNOWN: {
      title: "STOP — une décision ou une inconnue bloquante reste à traiter",
      explanation:
        "Une décision structurante manque, une déclaration d’inconnue bloquante est vide ou un bloc décrit encore un STOP. Les autres rubriques et tout score éventuel ne compensent pas ce point.",
      nextAction:
        "Attribuez chaque STOP à une personne capable de trancher, résolvez-le, puis écrivez exactement « Aucune identifiée » dans le bloc concerné avant la consultation.",
    },
    CLARIFY_BEFORE_COMPARISON: {
      title: "Le produit est décrit, mais la comparaison reste fragile",
      explanation:
        "Une décision existe dans chaque bloc, mais un responsable, une preuve ou une exclusion manque encore. Deux offres pourraient donc couvrir des engagements différents.",
      nextAction:
        "Complétez les responsables, preuves et exclusions, puis faites relire le document par le métier et la personne qui prononcera la réception.",
    },
    CANDIDATE_FOR_VENDOR_COMPARISON: {
      title: "Document candidat à une relecture de consultation",
      explanation:
        "Toutes les rubriques sont renseignées et chaque bloc déclare explicitement qu’aucune inconnue bloquante n’y est identifiée. Ce contrôle vérifie la structure et les marqueurs d’inconnue ; il ne prouve ni la justesse du besoin, ni la faisabilité, ni la conformité, ni l’acceptation contractuelle.",
      nextAction:
        "Faites relire le document par les responsables nommés, joignez les annexes utiles et exigez que chaque répondant rende visibles ses hypothèses et variantes.",
    },
  };

  return {
    status,
    ...resultByStatus[status],
    blockingUnknowns,
    clarifications,
    markdown: renderMarkdown(input, status, blockingUnknowns, clarifications),
  };
}

export const dossierClairExample: SaasSpecificationInput = {
  projectName: "DossierClair — exemple entièrement fictif",
  entries: {
    productBoundary: {
      decision:
        "De petits cabinets de conseil ont déjà validé le besoin de suivre les pièces attendues avant une mission. La dirigeante achète le service. Claire, responsable de mission, crée Atelier Nord, invite Léa, ouvre un dossier, demande une pièce à un contact externe, fait qualifier la pièce puis clôt la demande. Le résultat vendu est un dossier qui montre le statut, le responsable et la prochaine action, sans promesse de gain chiffré. Dans ce scénario fictif, une annexe compare ce parcours à une fonction d’un outil déjà payé et à un processus manuel ; elle consigne les étapes et refus non couverts avant de retenir une consultation de développement.",
      owner:
        "Le sponsor produit fictif tranche la promesse et le périmètre ; la responsable métier valide le parcours.",
      evidence:
        "À partir d’une organisation vide et de données fictives, Claire accomplit le parcours complet et retrouve pour chaque pièce son statut, son responsable et la prochaine action attendue. Le même jeu fictif est rejoué avec les deux options plus simples et leurs écarts décisifs sont joints à la consultation.",
      exclusion:
        "Validation de marché, prospection, comptabilité du cabinet, signature électronique et mesure de productivité.",
      blockingUnknown: "Aucune identifiée",
    },
    organizationLifecycle: {
      decision:
        "Une acheteuse crée Atelier Nord et en devient propriétaire. Elle peut nommer une administratrice et transférer la propriété après une validation distincte. Atelier Nord et Studio Rivage restent deux organisations séparées ; suspendre l’une ne modifie pas l’autre.",
      owner:
        "La dirigeante de chaque organisation autorise la création, le transfert, la suspension et la fermeture.",
      evidence:
        "Créer Atelier Nord et Studio Rivage, transférer la propriété d’Atelier Nord, puis vérifier qu’une action réalisée dans Atelier Nord ne modifie aucun objet de Studio Rivage.",
      exclusion:
        "Architecture d’isolation, fournisseur cloud, modèle de base de données et stratégie de déploiement.",
      blockingUnknown: "Aucune identifiée",
    },
    accessLifecycle: {
      decision:
        "Les rôles sont propriétaire, administratrice, contributrice et contact externe. Les trois premiers restent bornés à leur organisation ; le contact externe voit seulement les demandes qui lui sont adressées. Une invitation indique rôle, organisation et personne invitante. Après retrait de l’adhésion de Léa à Atelier Nord, toute nouvelle requête vers Atelier Nord est refusée, y compris depuis une session déjà ouverte ; ses éventuels accès à une autre organisation ne sont pas modifiés. Si son compte entier est désactivé ou supprimé, toutes ses sessions actives sont terminées.",
      owner:
        "La propriétaire valide les rôles sensibles ; une administratrice applique les invitations et retraits ; le sponsor produit possède la règle.",
      evidence:
        "Tester une action autorisée de Léa dans Atelier Nord, une lecture refusée d’un dossier Studio Rivage, puis la même action Atelier Nord refusée après retrait de l’adhésion sur une session déjà ouverte. Tester séparément la fin de toutes les sessions si le compte entier est désactivé ou supprimé.",
      exclusion:
        "Matrice exhaustive de tous les champs et choix d’un modèle technique de contrôle d’accès.",
      blockingUnknown: "Aucune identifiée",
    },
    offerAndEntitlements: {
      decision:
        "L’offre fictive Équipe ouvre la création de dossiers, les invitations internes, les contacts externes et l’export des dossiers de l’organisation. Un changement d’offre applique la table de droits versionnée sans supprimer silencieusement les données existantes.",
      owner:
        "La responsable produit possède le catalogue ; la responsable commerciale valide ce qui est effectivement vendu.",
      evidence:
        "Comparer la table offre–droits à l’interface et aux contrôles côté service, puis vérifier une action permise et une action refusée pour Atelier Nord.",
      exclusion:
        "Prix, remises, taxes, nombre de sièges, quotas et règles comptables.",
      blockingUnknown: "Aucune identifiée",
    },
    subscriptionLifecycle: {
      decision:
        "Les états produit sont à_activer, active, régularisation, résiliée et sortie_terminée. Chaque transition nomme son événement déclencheur et son effet sur les droits. Un événement de paiement répété ne crée ni deuxième organisation ni double droit d’usage. Ces états restent indépendants du vocabulaire d’un prestataire de paiement.",
      owner:
        "La responsable produit tranche les états et leurs droits ; l’exploitation remet les événements externes en cohérence avec l’état interne.",
      evidence:
        "Rejouer activation, renouvellement, changement et résiliation, puis recevoir deux fois le même événement et des événements dans un ordre différent sans produire un état contradictoire.",
      exclusion:
        "Choix du prestataire de paiement, statuts propriétaires, prix, calendrier de facturation et délai commercial.",
      blockingUnknown: "Aucune identifiée",
    },
    failureAndOperations: {
      decision:
        "Un paiement non abouti place Atelier Nord en régularisation, conserve ses données et présente à la propriétaire une action de correction. Une régularisation confirmée rétablit les droits sans recréer l’organisation. Si le service de paiement ou de notification fictif est indisponible, la transition reste en attente, l’écart devient visible et aucun droit n’est ouvert, retiré ou dupliqué silencieusement. L’espace d’administration montre l’état, la source et la dernière transition ; toute correction, mise en cohérence ou reprise manuelle est autorisée et tracée.",
      owner:
        "La supervision détecte l’écart ; la responsable des opérations le traite et décide la reprise prévue ; la propriétaire du compte corrige le moyen de paiement ; le sponsor produit autorise les corrections manuelles et les retours arrière.",
      evidence:
        "Simuler échec, action requise, événement manquant, doublon, tiers indisponible, correction et retour arrière ; contrôler la détection, le message, la conservation des données, l’absence de double droit, la trace et le retour à un état cohérent.",
      exclusion:
        "Niveau de service contractuel (SLA), disponibilité garantie, délai de réponse, nombre de relances et geste commercial.",
      blockingUnknown: "Aucune identifiée",
    },
    dataAndSupport: {
      decision:
        "Le produit traite organisation, adhésions, demandes de pièces, métadonnées de fichier, états, journal d’actions et données de facturation nécessaires. Le support n’accède pas par défaut aux pièces : Claire demande l’intervention, approuve son périmètre et l’accès est refermé à la fin. Le journal conserve auteur, date, action, objet et organisation sans copier le contenu de la pièce.",
      owner:
        "La responsable métier possède les catégories de données ; la compétence protection des données qualifie le traitement ; Claire approuve l’accès support.",
      evidence:
        "Relire l’inventaire, ouvrir un accès support borné à un dossier fictif, tracer l’intervention, fermer l’accès puis vérifier que la requête suivante est refusée.",
      exclusion:
        "Avis juridique, base légale finale, durée de conservation universelle et déclaration de conformité.",
      blockingUnknown: "Aucune identifiée",
    },
    resilienceAndExit: {
      decision:
        "Les données nécessaires au service sont sauvegardées et restaurables. La résiliation empêche un nouveau renouvellement, ouvre le parcours de sortie prévu, produit un export documenté puis mène à sortie_terminée après validation de la suppression. L’export des données clientes reste séparé des livrables projet et des droits sur le code.",
      owner:
        "Le sponsor accepte le risque de reprise ; l’exploitation réalise la restauration ; la propriétaire valide l’export et la suppression de son organisation.",
      evidence:
        "Restaurer un jeu fictif dans un environnement de test, contrôler son intégrité, relire l’export d’Atelier Nord, demander la suppression puis vérifier le refus d’accès prévu.",
      exclusion:
        "Objectifs chiffrés de perte et de reprise, niveau de service contractuel (SLA), durée contractuelle de récupération, format juridique de preuve et cession du code.",
      blockingUnknown: "Aucune identifiée",
    },
    nonFunctionalAndAcceptance: {
      decision:
        "Le parcours principal fonctionne au clavier avec focus visible, erreurs textuelles et messages de statut perceptibles. Il reste lisible à 320 px, en thèmes clair et sombre, sans perte de contenu. L’hypothèse de consultation entièrement fictive retient 20 organisations, 100 personnes internes et 2 000 dossiers, puis un second passage à 40 organisations, 200 personnes et 4 000 dossiers. La performance est mesurée sur un environnement et un jeu de données documentés contre le seuil fourni par le sponsor. Les contrôles d’organisation, de données et de révocation sont testés côté service.",
      owner:
        "Le sponsor fournit les seuils ; les spécialistes accessibilité, performance et sécurité exécutent leurs contrôles ; la personne nommée dans les documents applicables prononce la réception.",
      evidence:
        "Dossier de réception avec cas clavier, focus, erreur, mobile, clair/sombre, mesures au volume fictif déclaré puis à son double, variation de coût isolée, tests autorisés/refusés, écarts, nouveaux tests après correction et décision humaine signée.",
      exclusion:
        "Certification, déclaration de conformité, audit exhaustif et acceptation automatique par le générateur.",
      blockingUnknown: "Aucune identifiée",
    },
  },
};

export function createDossierClairExample(): SaasSpecificationInput {
  return {
    projectName: dossierClairExample.projectName,
    entries: Object.fromEntries(
      specificationBlocks.map(({ id }) => [
        id,
        { ...dossierClairExample.entries[id] },
      ]),
    ) as SaasSpecificationEntries,
  };
}
