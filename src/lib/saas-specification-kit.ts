export interface SaasSpecificationProfile {
  projectName: string;
  targetCompany: string;
  observedProblem: string;
  expectedOutcome: string;
  decisionMaker: string;
  reviewDate: string;
}

export const EMPTY_SAAS_SPECIFICATION_PROFILE: SaasSpecificationProfile = {
  projectName: "",
  targetCompany: "",
  observedProblem: "",
  expectedOutcome: "",
  decisionMaker: "",
  reviewDate: "",
};

export const SAAS_OFFER_KEYS = ["A", "B", "C"] as const;
export type SaasOfferKey = (typeof SAAS_OFFER_KEYS)[number];

export const SAAS_OFFER_FIELDS = [
  {
    key: "discovery",
    label: "Étude et décisions initiales",
    help: "Entretiens, clarification des décisions, parcours et risques avant construction.",
    cadence: "one-off",
  },
  {
    key: "construction",
    label: "Construction",
    help: "Conception, développement, tests et préparation de la mise en ligne.",
    cadence: "one-off",
  },
  {
    key: "migration",
    label: "Migration initiale",
    help: "Nettoyage, reprise, contrôle et correction des données de départ.",
    cadence: "one-off",
  },
  {
    key: "monthlyMaintenance",
    label: "Maintenance et assistance mensuelles",
    help: "Corrections, canal et horaires d’assistance, surveillance ou capacité récurrente réellement inclus dans l’offre.",
    cadence: "monthly",
  },
  {
    key: "monthlyInfrastructure",
    label: "Infrastructure mensuelle",
    help: "Hébergement, sauvegardes, supervision et services techniques récurrents.",
    cadence: "monthly",
  },
  {
    key: "monthlyLicenses",
    label: "Licences mensuelles",
    help: "Services tiers, outils et licences nécessaires à la version comparée.",
    cadence: "monthly",
  },
  {
    key: "exit",
    label: "Sortie et transfert",
    help: "Export, documentation, transfert et assistance de sortie chiffrés une seule fois.",
    cadence: "one-off",
  },
] as const;

export type SaasOfferField = (typeof SAAS_OFFER_FIELDS)[number]["key"];
export type SaasOfferInput = Record<SaasOfferField, number> & {
  hasUnknownCosts: boolean;
  zeroJustification: string;
};
export type SaasOfferInputs = Record<SaasOfferKey, SaasOfferInput>;

export const SAAS_OFFER_HORIZONS = [12, 24, 36] as const;
export type SaasOfferHorizon = (typeof SAAS_OFFER_HORIZONS)[number];

/**
 * Accepte uniquement un montant décimal écrit avec une virgule française ou
 * un point, avec au plus deux décimales. Les signes, espaces, séparateurs
 * mixtes et notations exponentielles restent invalides : une saisie ambiguë ne
 * doit jamais être tronquée silencieusement dans un comparatif de devis.
 */
export function parseSaasDecimalAmount(raw: string) {
  const normalized = raw.trim();
  if (!/^\d+(?:[.,]\d{1,2})?$/.test(normalized)) {
    return Number.NaN;
  }

  const value = Number(normalized.replace(",", "."));
  return Number.isFinite(value) ? value : Number.NaN;
}

/**
 * Cas fictif DossierClair. Les valeurs servent seulement à vérifier le calcul
 * et à montrer pourquoi des offres doivent être ramenées au même horizon.
 */
export const SAAS_OFFER_EXAMPLE_INPUTS: SaasOfferInputs = {
  A: {
    discovery: 0,
    construction: 45000,
    migration: 12000,
    monthlyMaintenance: 36000 / 24,
    monthlyInfrastructure: 18000 / 24,
    monthlyLicenses: 4200 / 24,
    exit: 8000,
    hasUnknownCosts: true,
    zeroJustification:
      "L’étude et les décisions initiales sont incluses dans la construction ; aucun autre poste n’est à zéro.",
  },
  B: {
    discovery: 0,
    construction: 62000,
    migration: 0,
    monthlyMaintenance: 30000 / 24,
    monthlyInfrastructure: 12000 / 24,
    monthlyLicenses: 2700 / 24,
    exit: 5000,
    hasUnknownCosts: true,
    zeroJustification:
      "L’étude et la migration limitée sont incluses dans les 62 000 € de construction.",
  },
  C: {
    discovery: 8000,
    construction: 52000,
    migration: 4000,
    monthlyMaintenance: 33600 / 24,
    monthlyInfrastructure: 583.33,
    monthlyLicenses: 3300 / 24,
    exit: 6000,
    hasUnknownCosts: true,
    zeroJustification: "Aucun poste renseigné n’est à zéro.",
  },
};

export interface SaasOfferValidationError {
  offer?: SaasOfferKey;
  field: SaasOfferField | "horizonMonths" | "zeroJustification";
}

export interface SaasOfferResult {
  offer: SaasOfferKey;
  oneOffTotal: number;
  monthlyTotal: number;
  recurringTotal: number;
  total: number;
  hasUnknownCosts: boolean;
  differenceFromLowest: number | null;
}

export interface SaasOfferCalculation {
  isValid: boolean;
  horizonMonths: number;
  results: SaasOfferResult[];
  hasAnyUnknownCosts: boolean;
  lowestTotal: number | null;
  validationErrors: SaasOfferValidationError[];
}

function isValidAmount(value: number) {
  return Number.isFinite(value) && value >= 0;
}

function roundCurrency(value: number) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

export function isSaasOfferHorizon(value: number): value is SaasOfferHorizon {
  return SAAS_OFFER_HORIZONS.some((horizon) => horizon === value);
}

export function cloneSaasOfferInputs(inputs: SaasOfferInputs): SaasOfferInputs {
  return {
    A: { ...inputs.A },
    B: { ...inputs.B },
    C: { ...inputs.C },
  };
}

export function calculateSaasOfferComparison(
  inputs: SaasOfferInputs,
  horizonMonths: number,
): SaasOfferCalculation {
  const validationErrors: SaasOfferValidationError[] = [];

  if (!isSaasOfferHorizon(horizonMonths)) {
    validationErrors.push({ field: "horizonMonths" });
  }

  for (const offer of SAAS_OFFER_KEYS) {
    for (const field of SAAS_OFFER_FIELDS) {
      if (!isValidAmount(inputs[offer][field.key])) {
        validationErrors.push({ offer, field: field.key });
      }
    }
    const hasZero = SAAS_OFFER_FIELDS.some(
      (field) => inputs[offer][field.key] === 0,
    );
    if (hasZero && inputs[offer].zeroJustification.trim() === "") {
      validationErrors.push({ offer, field: "zeroJustification" });
    }
  }

  if (validationErrors.length > 0) {
    return {
      isValid: false,
      horizonMonths,
      results: [],
      hasAnyUnknownCosts: SAAS_OFFER_KEYS.some(
        (offer) => inputs[offer].hasUnknownCosts,
      ),
      lowestTotal: null,
      validationErrors,
    };
  }

  const resultsWithoutComparison = SAAS_OFFER_KEYS.map((offer) => {
    const values = { ...inputs[offer] };
    for (const field of SAAS_OFFER_FIELDS) {
      values[field.key] = roundCurrency(values[field.key]);
    }
    const oneOffTotal =
      values.discovery + values.construction + values.migration + values.exit;
    const monthlyTotal =
      values.monthlyMaintenance +
      values.monthlyInfrastructure +
      values.monthlyLicenses;
    const recurringTotal = roundCurrency(monthlyTotal * horizonMonths);

    return {
      offer,
      oneOffTotal,
      monthlyTotal,
      recurringTotal,
      total: roundCurrency(oneOffTotal + recurringTotal),
      hasUnknownCosts: values.hasUnknownCosts,
    };
  });

  if (
    resultsWithoutComparison.some((result) =>
      Object.values(result).some(
        (value) => typeof value === "number" && !Number.isFinite(value),
      ),
    )
  ) {
    return {
      isValid: false,
      horizonMonths,
      results: [],
      hasAnyUnknownCosts: true,
      lowestTotal: null,
      validationErrors: SAAS_OFFER_KEYS.flatMap((offer) =>
        SAAS_OFFER_FIELDS.map((field) => ({
          offer,
          field: field.key,
        })),
      ),
    };
  }

  const hasAnyUnknownCosts = resultsWithoutComparison.some(
    (result) => result.hasUnknownCosts,
  );
  const lowestTotal = hasAnyUnknownCosts
    ? null
    : Math.min(...resultsWithoutComparison.map((result) => result.total));

  return {
    isValid: true,
    horizonMonths,
    hasAnyUnknownCosts,
    lowestTotal,
    validationErrors,
    results: resultsWithoutComparison.map((result) => ({
      ...result,
      differenceFromLowest:
        lowestTotal === null ? null : roundCurrency(result.total - lowestTotal),
    })),
  };
}

function inlineValue(value: string, fallback: string) {
  const normalized = value
    .trim()
    .replace(/\s+/g, " ")
    .replace(/([\\`*_{}[\]()#+.!|>-])/g, "\\$1")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
  return normalized || fallback;
}

function textAmount(value: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 2,
  }).format(value);
}

export function saasSpecificationFileName(projectName: string) {
  const slug = projectName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);

  return `cahier-des-charges-saas-${slug || "a-completer"}.md`;
}

export function buildSaasSpecificationMarkdown(
  profile: SaasSpecificationProfile,
) {
  const projectName = inlineValue(profile.projectName, "[Nom du projet]");
  const targetCompany = inlineValue(
    profile.targetCompany,
    "[Entreprise cliente et utilisateurs concernés]",
  );
  const observedProblem = inlineValue(
    profile.observedProblem,
    "[Situation observable, fréquence, personnes touchées et conséquence]",
  );
  const expectedOutcome = inlineValue(
    profile.expectedOutcome,
    "[Résultat que l’utilisateur doit obtenir sans décrire la solution]",
  );
  const decisionMaker = inlineValue(
    profile.decisionMaker,
    "[Personne qui décide ce qui est inclus et accepte la livraison]",
  );
  const reviewDate = inlineValue(
    profile.reviewDate,
    "[Date de la prochaine revue]",
  );

  return `# Cahier des charges SaaS — ${projectName}

> Trame de décision à compléter avec les utilisateurs, le décideur et les prestataires. Une instruction entre crochets signale une réponse encore attendue.

## 0. Contrôle du document

- Projet : ${projectName}
- Entreprise et public cible : ${targetCompany}
- Personne qui décide ce qui est inclus : ${decisionMaker}
- Prochaine revue : ${reviewDate}
- Version : 0.1
- État : brouillon à challenger
- Auteur de chaque modification : [nom, date et raison]

## 1. Décision : poursuivre, arrêter ou reporter

- Décision attendue : [étudier, consulter, construire, reporter ou arrêter]
- Date limite de décision : [date]
- Condition minimale pour **poursuivre** : [preuve de demande, budget, responsable, données disponibles et risque acceptable]
- Condition qui impose **l’arrêt ou le report** : [incertitude bloquante]
- Personne qui tranche : ${decisionMaker}
- Preuve conservée : [compte rendu, test, devis comparables ou décision signée]

## 2. Résumé dirigeant

### Situation observée

${observedProblem}

### Résultat attendu

${expectedOutcome}

### Client et utilisateur

${targetCompany}

### Ce que la première version inclut et refuse

- Parcours vendu en une phrase : [acteur + action + résultat + preuve]
- Inclus : [3 à 7 résultats observables]
- Exclu : [fonctions explicitement repoussées]
- Reste manuel au lancement : [tâches et personne responsable]
- Hypothèse commerciale la plus fragile : [hypothèse à tester]
- Date ou contrainte réelle : [raison vérifiable, pas une urgence inventée]

## 3. Rôles, droits et responsabilités

| Rôle | Peut voir | Peut créer ou modifier | Peut décider | Interdictions à tester |
|---|---|---|---|---|
| Acheteur / administrateur | [à compléter] | [à compléter] | [à compléter] | [à compléter] |
| Utilisateur opérationnel | [à compléter] | [à compléter] | [à compléter] | [à compléter] |
| Support | [accès permanent, temporaire ou aucun] | [à compléter] | [à compléter] | [à compléter] |
| Exploitant technique | [à compléter] | [à compléter] | [à compléter] | [à compléter] |

- Règle de séparation entre entreprises clientes : [résultat attendu]
- Retrait d’un droit pendant une session ouverte : [comportement attendu]
- Accès exceptionnel du support : [autorisation, durée, trace et révocation]
- Responsable de chaque décision : [nom ou rôle, jamais « l’équipe »]

## 4. Parcours principal et échecs

### Parcours vendu

1. Étant donné [situation de départ],
2. lorsque [acteur] réalise [action],
3. alors [résultat visible et donnée créée],
4. et la preuve d’acceptation est [écran, export, trace ou mesure].

### Échecs à spécifier

| Événement | Message montré | Droit ou état appliqué | Reprise possible | Responsable |
|---|---|---|---|---|
| Donnée obligatoire absente | [à compléter] | [à compléter] | [à compléter] | [à compléter] |
| Action reçue deux fois | [à compléter] | [aucun doublon attendu] | [à compléter] | [à compléter] |
| Service tiers indisponible | [à compléter] | [à compléter] | [à compléter] | [à compléter] |
| Session expirée ou droit retiré | [à compléter] | [à compléter] | [à compléter] | [à compléter] |
| Paiement refusé ou en attente | [à compléter] | [à compléter] | [à compléter] | [à compléter] |

## 5. Données et intégrations

### Données

| Donnée | Utilité | Source | Personnes autorisées | Durée utile | Export | Suppression |
|---|---|---|---|---|---|---|
| [donnée] | [pourquoi] | [saisie/import/API] | [rôles] | [durée décidée] | [format] | [règle et responsable] |

- Volumes de départ et à 12 mois : [enregistrements, utilisateurs, fichiers]
- Données interdites dans cette version : [catégories]
- Données réelles autorisées en test : [aucune par défaut]
- Qualité minimale avant migration : [doublons, formats, champs obligatoires]

### Intégrations

| Service | Données échangées | Sens | Échec et nouvelle tentative | Compte contrôlé par | Coût |
|---|---|---|---|---|---|
| [paiement, courriel, CRM…] | [à compléter] | [entrant/sortant] | [à compléter] | [entreprise/prestataire] | [inclus, variable ou inconnu] |

## 6. Qualité, sécurité et exploitation

- Navigateurs, appareils et débits réellement pris en charge : [liste testée]
- Accessibilité : [processus complet, critères retenus, méthode et preuve]
- Authentification : [création, vérification, oubli, révocation et protections]
- Autorisation : [contrôle de chaque accès et test entre deux entreprises]
- Journaux utiles : [événement, durée, accès et absence de données sensibles]
- Sauvegarde : [quoi, fréquence, rétention et compte séparé]
- Restauration : [fréquence du test, perte maximale admise et preuve]
- Incident : [niveau, personne alertée, délai de prise en compte à contractualiser]
- Déploiement : [environnement de test, validation, retour arrière et surveillance]
- Documentation remise : [installation, exploitation, données, dépendances et secrets]
- Limite : aucune formule telle que « sécurisé », « conforme » ou « haute disponibilité » n’est acceptée sans contenu précis, test et preuve.

## 7. Facturation et droits d’accès

- Offre vendue : [prix, période, utilisateurs, limites et taxes à valider]
- Création du droit d’accès : [événement fiable, jamais simple retour du navigateur]
- Paiement en attente : [message, droit et responsable]
- Paiement refusé : [nouvelles tentatives, communication et délai décidé]
- Régularisation : [retour des droits sans doublon]
- Changement d’offre et prorata : [inclus ou explicitement exclu]
- Annulation, remboursement et contestation : [règles et part manuelle]
- Facture : [service qui la produit, mentions et contrôle comptable]
- Rapprochement : [comment vérifier ensemble commande, paiement, facture et droit d’accès]

## 8. Migration et mise en service

- Source des données : [fichier, outil, propriétaire et accès]
- Cartographie ancien → nouveau : [annexe versionnée]
- Nettoyage et décisions sur les doublons : [responsable]
- Migration à blanc : [date, volume, résultat et corrections]
- Gel éventuel : [durée et plan de rattrapage]
- Contrôles : [comptages, totaux, échantillons et anomalies tolérées]
- Retour arrière : [condition, délai et personne qui décide]
- Mise en service : [séquence, surveillance et communication]
- Surveillance renforcée après mise en ligne : [durée, canal, capacité et condition de fin]

## 9. Tests d’acceptation et nouveaux essais après correction

| ID | Scénario | Données de test | Résultat attendu | Preuve | Responsable | État |
|---|---|---|---|---|---|---|
| R-01 | Parcours vendu de bout en bout | [fictives] | ${expectedOutcome} | [capture/export/trace] | ${decisionMaker} | À jouer |
| R-02 | Séparation de deux clients | [deux espaces fictifs] | Aucun accès croisé ni donnée révélée | [preuve] | [à compléter] | À jouer |
| R-03 | Même événement reçu deux fois | [événement fictif] | Aucun doublon ni double droit | [preuve] | [à compléter] | À jouer |
| R-04 | Restauration isolée | [sauvegarde choisie] | Parcours central rejoué dans le délai retenu | [procès-verbal] | [à compléter] | À jouer |
| R-05 | Export et suppression | [compte sortant] | Données récupérables puis suppression selon règle | [preuve] | [à compléter] | À jouer |

- Une anomalie bloquante empêche l’acceptation.
- Chaque correction rejoue le test en échec et un jeu de non-régression convenu.
- Le décideur accepte le résultat ; le prestataire ne s’auto-réceptionne pas.
- Les tests prennent fin avec une liste signée : accepté, accepté avec réserve ou refusé.

## 10. Coûts renseignés sur 24 mois

| Poste | Montant | Inclus | Exclu | Inconnu | Hypothèse |
|---|---:|---|---|---|---|
| Étude et décisions initiales | [€] | [oui/non] | [oui/non] | [oui/non] | [à compléter] |
| Construction | [€] | [oui/non] | [oui/non] | [oui/non] | [à compléter] |
| Migration | [€] | [oui/non] | [oui/non] | [oui/non] | [à compléter] |
| Maintenance et assistance, 24 mois | [€] | [oui/non] | [oui/non] | [oui/non] | [canal, capacité et exclusions] |
| Infrastructure, 24 mois | [€] | [oui/non] | [oui/non] | [oui/non] | [volumes et dépassements] |
| Licences, 24 mois | [€] | [oui/non] | [oui/non] | [oui/non] | [quantité et indexation] |
| Temps de l’entreprise | [€] | [oui/non] | [oui/non] | [oui/non] | [heures × coût chargé] |
| Sortie et transfert | [€] | [oui/non] | [oui/non] | [oui/non] | [contenu et assistance] |
| Risque ou marge d’incertitude | [€] | [oui/non] | [oui/non] | [oui/non] | [méthode] |

- Formule : coûts ponctuels + 24 × coûts mensuels + temps interne + risques chiffrés.
- Ne jamais transformer un poste inconnu en zéro.
- Comparer les offres avec le même contenu, les mêmes volumes et les mêmes preuves.

## 11. Hypothèses, décisions et questions ouvertes

| ID | Type | Énoncé | Impact coût/délai/risque | Propriétaire | Échéance | État |
|---|---|---|---|---|---|---|
| H-01 | Hypothèse | [à vérifier] | [impact] | [nom] | [date] | Ouverte |
| D-01 | Décision | [choix retenu et raison] | [impact] | ${decisionMaker} | ${reviewDate} | À confirmer |
| Q-01 | Question | [question précise] | [impact si sans réponse] | [nom] | [date] | Ouverte |

## 12. Changements et version de référence

1. Toute demande reçoit un identifiant, une raison et un demandeur.
2. Le prestataire décrit l’impact sur prix, délai, exploitation, données et tests d’acceptation.
3. ${decisionMaker} accepte, refuse ou reporte avant construction.
4. La version de référence et les tests concernés sont mis à jour.
5. La livraison indique exactement la version construite.

| Changement | Raison | Impact | Décision | Version | Tests à rejouer |
|---|---|---|---|---|---|
| [CH-001] | [à compléter] | [€ / délai / risque] | [accepté/refusé/reporté] | [0.2] | [R-…] |

## 13. Double sortie

### Sortie de l’entreprise abonnée

- Période d’accès après résiliation : [durée et droits]
- Contenu exporté : [données, relations, fichiers, historique et réglages]
- Formats et dictionnaire : [formats ouverts et documentation]
- Assistance : [libre-service, canal, délai et coût]
- Suppression : [base active, sauvegardes, archives obligatoires et preuve]

### Sortie du commanditaire vis-à-vis du prestataire

- Dépôt de code et historique : [propriétaire et accès]
- Droits sur le code et les créations : [contrat à vérifier]
- Comptes de domaine, hébergement, paiement et courriel : [contrôle]
- Secrets, dépendances et licences : [inventaire et transfert]
- Procédures de déploiement, sauvegarde et restauration : [remise et test]
- Dictionnaire de données et assistance de transfert : [contenu, durée et coût]

## 14. Mesures à 30 et 90 jours

| Moment | Mesure | Point de départ | Cible | Source | Responsable | Décision si écart |
|---|---|---:|---:|---|---|---|
| 30 jours | Premier parcours vendu terminé | [valeur] | [cible] | [source] | [nom] | [corriger/observer/arrêter] |
| 30 jours | Échecs ou demandes de support | [valeur] | [cible] | [source] | [nom] | [action] |
| 90 jours | Usage répété par le public cible | [valeur] | [cible] | [source] | [nom] | [action] |
| 90 jours | Temps ou coût réellement économisé | [valeur] | [cible] | [source] | [nom] | [action] |
| 90 jours | Paiements, impayés et résiliations | [valeur] | [cible] | [source] | [nom] | [action] |

## 15. Sources, preuves et limites

| Affirmation ou exigence | Source | Date de consultation | Ce que la source prouve | Ce qu’elle ne prouve pas |
|---|---|---|---|---|
| [exigence] | [URL, entretien, donnée interne ou contrat] | [date] | [portée exacte] | [limite] |

- Distinguer fait vérifié, hypothèse, estimation, décision et obligation juridique.
- Vérifier les règles de données, fiscalité, facturation, accessibilité et propriété intellectuelle avec les spécialistes compétents pour le cas réel.
- Une source fournisseur explique son service ; elle ne prouve ni l’adéquation au projet ni la conformité globale.
- Les montants, délais et seuils du document restent des hypothèses jusqu’à validation écrite.
- Dernière relecture factuelle : [nom et date].
`;
}

export function buildDossierClairExampleMarkdown() {
  return `# Cahier des charges SaaS — DossierClair

> Exemple entièrement fictif. DossierClair, Atelier Nord, Studio Rivage, Claire et Léa ne sont ni des clients, ni des réalisations, ni des résultats de Hagnéré Code. Les montants illustrent une méthode et ne sont ni des prix de marché ni des tarifs Hagnéré Code.

## 0. Contrôle du document

- Projet : DossierClair
- Public cible : petites sociétés de conseil qui démarrent des missions client
- Personne qui décide ce qui est inclus : fondatrice de DossierClair
- Prochaine revue : 15 septembre 2026
- Version : 0.4, exemple de consultation
- État : prêt à challenger, pas prêt à signer sans devis et vérifications juridiques

## 1. Décision : poursuivre, arrêter ou reporter

- **Poursuivre la consultation** si trois sociétés pilotes confirment le parcours, si la fondatrice accepte le coût sur 24 mois et si chaque offre chiffre la séparation des clients, la facturation, la restauration et la sortie.
- **Reporter** si les données à reprendre contiennent des pièces ou catégories non inventoriées, si personne n’accepte de mener les tests ou si une offre transforme des postes inconnus en zéro.
- **Arrêter ces demandes pour la première version** : application mobile, plusieurs offres, connexion unique d’entreprise et portail client final.
- La fondatrice tranche et conserve le compte rendu ainsi que la version de référence envoyée aux trois prestataires.

## 2. Résumé dirigeant

Les informations nécessaires au démarrage d’une mission sont dispersées entre courriels et documents. Claire, responsable des opérations d’Atelier Nord, doit pouvoir créer un dossier, inviter Léa, lui faire compléter les informations, contrôler le résultat puis exporter un dossier validé.

La première version vend un seul résultat : **un dossier de démarrage complet, relu et exportable sans mélanger les données de deux sociétés clientes**.

Inclus : une offre mensuelle pour cinq utilisateurs, paiement hébergé, deux rôles, dossier structuré, commentaire de renvoi, validation, PDF et CSV. Exclu : essai gratuit, rôles personnalisables, application mobile, pièce jointe libre, CRM, support téléphonique permanent et disponibilité garantie.

### Mesure de départ fictive

Pendant quatre semaines, Atelier Nord observe 24 dossiers. Le temps de travail actif médian est de 52 minutes par dossier. Cinq dossiers sur 24 reviennent pour information manquante, soit 20,8 %. La consolidation des statuts et relances mobilise deux heures par semaine. Le temps d’attente du client n’est pas encore mesuré et reste explicitement inconnu.

### Cibles de décision fictives à 90 jours

- au moins 20 dossiers par mois traversent le parcours complet ;
- le temps actif médian descend à 35 minutes ou moins ;
- au plus 2 dossiers sur 24 reviennent pour information manquante ;
- la consolidation hebdomadaire reste sous 45 minutes ;
- aucun test ne révèle d’accès entre Atelier Nord et Studio Rivage ;
- l’équipe sait exporter les données et restaurer le scénario convenu.

Si moins de dix dossiers réels traversent le parcours, si plus de la moitié exige encore une reprise hors outil ou si le gain vient seulement d’un renfort humain temporaire, la fondatrice ne finance pas automatiquement le passage à 30 entreprises.

## 3. Rôles et droits

| Rôle | Droits | Interdiction vérifiée |
|---|---|---|
| Claire, administratrice | Membres, abonnement, tous les dossiers d’Atelier Nord, validation et export | Ne voit jamais Studio Rivage |
| Léa, contributrice | Dossiers d’Atelier Nord qui lui sont affectés | Ne gère ni membres ni abonnement ; ne voit pas un dossier non affecté |
| Support | Aucun accès permanent ; accès temporaire autorisé et tracé si nécessaire | Ne se donne pas seul un accès |
| Fondatrice | Paramètres commerciaux, incidents et exceptions | Ne modifie pas une donnée cliente sans trace |

Une révocation coupe le prochain accès de Léa et invalide sa session dans le délai technique annoncé par l’offre. Toute proposition doit préciser et tester ce délai.

## 4. Parcours et échecs

1. Claire crée un dossier et l’affecte à Léa.
2. Léa complète entreprise, contact, service, objectif, date, contraintes et note.
3. Un champ obligatoire absent bloque la soumission et le message nomme le champ.
4. Claire renvoie avec un commentaire ou valide.
5. La validation conserve auteur et date, puis produit un PDF lisible et un CSV structuré.

| Échec | Décision attendue | Résultat du test |
|---|---|---|
| Même confirmation de paiement reçue deux fois | Un seul espace et un seul abonnement | Comptage avant/après et trace de l’événement rejoué |
| Paiement en attente | Aucun espace actif ; prochaine action visible | Compte sans droit et message testé |
| Paiement refusé | Deux nouvelles tentatives fictives aux jours 2 et 5 | Chronologie simulée, aucun dossier supprimé |
| Sept jours sans régularisation | Lecture seule ; Claire peut payer et exporter | Tests sur Claire et Léa |
| Invitation expirée | Une nouvelle invitation invalide l’ancienne | Deux liens rejoués |
| Léa tente une URL de Studio Rivage | Accès refusé sans révéler la donnée | Réponse et trace sans contenu client |

## 5. Données et intégrations

- Démarrage : 3 entreprises ; hypothèse haute à 12 mois : 30 entreprises et 5 utilisateurs chacune.
- Volume : 2 000 dossiers actifs et 20 000 archivés, sans pièce jointe.
- Données : contact professionnel, service, objectif, date, contraintes, statut, commentaires et historique utile.
- Interdit dans cette version : santé, identité officielle, carte bancaire et pièce jointe libre.
- Paiement : page hébergée ; DossierClair ne stocke pas la carte.
- Courriel et authentification : services externes, comptes contrôlés par la fondatrice.
- Chaque service doit déclarer données échangées, nouvelle tentative, coût, compte propriétaire et procédure de sortie.

## 6. Qualité et exploitation

- Navigateurs récents sur ordinateur, tablette et téléphone ; aucune application native.
- Environnement de test séparé de la production.
- Sauvegarde quotidienne, conservation fictive de 30 jours et copie séparée.
- Test de restauration avant lancement puis tous les trois mois.
- Hypothèse de travail : perte maximale de 24 heures et remise du parcours central en moins de 8 heures ouvrées. Ces seuils sont à confronter au coût des offres.
- Le test de restauration rejoue connexion, droits, création, validation et export.
- Chaque déploiement possède auteur, raison, tests, surveillance et retour arrière.
- Les critères d’accessibilité retenus couvrent clavier, focus, intitulés, erreurs et messages sur le parcours complet. L’exemple ne revendique aucune conformité globale.

## 7. Facturation

Une confirmation serveur valable crée exactement un espace Atelier Nord. Le retour du navigateur ne crée aucun droit. Un paiement régularisé rétablit les droits sans recréer l’entreprise. Changement d’offre et prorata sont exclus. Remboursement et contestation restent manuels.

Le prestataire de paiement produit la facture selon la configuration validée ; DossierClair affiche l’état et applique les droits. La fondatrice doit encore faire vérifier pays de vente, taxes, mentions et traitement comptable.

## 8. Migration et mise en service

Les trois offres couvrent le même lot limité : 240 dossiers historiques provenant de trois fichiers CSV documentés, sans pièce jointe. Les champs repris sont le contact, le service, l’objectif, la date, les contraintes, le statut et l’identifiant externe. Le lot comprend cartographie, nettoyage des dates et statuts connus, import à blanc, comptage avant/après, échantillon de 30 dossiers, liste des lignes refusées et retour arrière. Les pièces jointes, champs libres non cartographiés et nouvelles sources sont exclus.

Dans l’offre A, l’étude initiale est incluse dans la construction et la migration est séparée à 12 000 €. Dans l’offre B, étude et migration sont incluses dans les 62 000 € de construction. Dans l’offre C, elles sont séparées à 8 000 € et 4 000 €. Ces différences de ventilation ne changent pas le résultat de migration demandé.

La mise en ligne prévoit cinq jours ouvrés fictifs de surveillance renforcée, à chiffrer séparément de la maintenance et de l’assistance récurrentes.

## 9. Tests d’acceptation et nouveaux essais après correction

| ID | Scénario | Résultat |
|---|---|---|
| DC-01 | Claire crée, Léa complète, Claire renvoie puis valide | Historique conservé, PDF et CSV conformes |
| DC-02 | Léa tente Studio Rivage | Refus sans donnée révélée |
| DC-03 | Confirmation de paiement rejouée | Aucun doublon |
| DC-04 | Sauvegarde restaurée en environnement isolé | Parcours DC-01 rejoué et durée consignée |
| DC-05 | Claire résilie et exporte | Export documenté puis suppression selon calendrier |

Une anomalie bloquante interdit l’acceptation. Une correction rejoue le scénario et les tests liés. La fondatrice accepte ; le prestataire remet la preuve.

## 10. Coûts renseignés sur 24 mois

Le comparateur joint au guide contient trois offres fictives ramenées au même horizon :

| Poste renseigné | Offre A | Offre B | Offre C |
|---|---:|---:|---:|
| Étude et décisions initiales | 0 € | 0 € | 8 000 € |
| Construction | 45 000 € | 62 000 € | 52 000 € |
| Migration | 12 000 € | 0 € | 4 000 € |
| Maintenance et assistance sur 24 mois | 36 000 € | 30 000 € | 33 600 € |
| Infrastructure sur 24 mois | 18 000 € | 12 000 € | 13 999,92 € |
| Licences sur 24 mois | 4 200 € | 2 700 € | 3 300 € |
| Sortie et transfert | 8 000 € | 5 000 € | 6 000 € |
| **Coût renseigné sur 24 mois** | **123 200 €** | **111 700 €** | **120 899,92 €** |

Justification des zéros : A inclut l’étude dans la construction ; B inclut l’étude et la migration limitée dans la construction ; C ne contient aucun poste à zéro.

Aucun classement n’est permis tant qu’une offre conserve un poste important inconnu. Ces montants excluent notamment le temps de la fondatrice, la fiscalité, l’inflation et les incidents non chiffrés.

La décision ne retient jamais une offre uniquement parce que son coût renseigné est le plus faible. Elle compare aussi ce qui est réellement inclus, les preuves, les responsabilités, les volumes, la capacité de maintenance et la sortie.

## 11. Hypothèses et décisions

| ID | Type | Énoncé | Responsable | État |
|---|---|---|---|---|
| H-01 | Hypothèse | 30 entreprises et 150 utilisateurs à 12 mois | Fondatrice | À tester |
| H-02 | Hypothèse | Une seule offre mensuelle suffit au lancement | Fondatrice | À tester |
| D-01 | Décision | Aucun essai gratuit en première version | Fondatrice | Retenue |
| D-02 | Décision | Aucun accès support permanent | Fondatrice | Retenue |
| Q-01 | Question | Coût réel du support et des courriels à 30 entreprises | Prestataires | Ouverte |

## 12. Changements et version

Toute demande reçoit un identifiant. Le prestataire chiffre l’impact sur prix, délai, exploitation, données et tests d’acceptation. La fondatrice accepte avant construction. La livraison nomme la version construite et les tests rejoués. « Ajouter le CRM » est donc un changement chiffré, pas une phrase glissée dans un courriel.

## 13. Double sortie

**Atelier Nord** reste actif jusqu’à la fin de la période payée, puis passe en lecture seule pendant 30 jours fictifs. Claire récupère utilisateurs, rôles, dossiers, relations, statuts, commentaires, dates, historique et réglages dans des formats structurés documentés, ainsi que les PDF. La base active est ensuite supprimée ; les sauvegardes suivent leur cycle annoncé.

**La fondatrice de DossierClair** récupère dépôt et historique, documentation, dictionnaire des données, procédures de déploiement et restauration, inventaire des dépendances, accès aux comptes de domaine, hébergement, paiement et courriel, ainsi que l’assistance de transfert chiffrée. Les droits sur le code restent ceux du contrat vérifié, jamais une supposition.

## 14. Mesures à 30 et 90 jours

| Moment | Mesure fictive | Départ | Cible | Décision préparée |
|---|---|---:|---:|---|
| 30 jours | Dossiers réels ayant terminé DC-01 | À observer | Progression suffisante pour atteindre 20 par mois | Corriger le blocage dominant avant toute nouvelle fonction |
| 30 jours | Demandes de support par dossier validé | À observer | Tendance en baisse après correction | Clarifier l’interface ou le mode d’emploi |
| 90 jours | Travail actif médian par dossier | 52 min | 35 min ou moins | Poursuivre seulement si la baisse ne vient pas d’un renfort temporaire |
| 90 jours | Dossiers revenus incomplets | 5 sur 24 | 2 sur 24 au plus | Traiter la règle ou l’étape qui provoque les retours |
| 90 jours | Consolidation des statuts et relances | 2 h par semaine | Moins de 45 min | Vérifier si le suivi hors outil reste nécessaire |
| 90 jours | Accès révélé entre deux entreprises | 0 admis | 0 | Bloquer la mise en ligne ou l’extension tant que le défaut existe |

Ces valeurs sont fictives et servent uniquement à montrer comment relier une mesure de départ, une cible et une décision. Elles doivent être remplacées par les observations du projet réel.

## 15. Sources et limites

- Sources attendues : entretiens pilotes, mesures du prototype, réponses des prestataires, documentation des services de paiement et d’authentification, contrats et vérifications juridiques.
- Les règles de données, facturation, fiscalité, accessibilité, propriété intellectuelle et changement de fournisseur doivent être qualifiées pour l’activité réelle.
- Une documentation fournisseur prouve le fonctionnement annoncé du service, pas la conformité globale ni l’adéquation commerciale de DossierClair.
- Les seuils, dates, volumes et montants de cet exemple sont fictifs et doivent être remplacés avant toute décision.
`;
}

export function buildSaasOfferComparisonMarkdown(
  inputs: SaasOfferInputs,
  calculation: SaasOfferCalculation,
) {
  if (!calculation.isValid) {
    throw new Error(
      "La comparaison doit être valide avant de générer le Markdown.",
    );
  }

  const lines = [
    "# Comparaison de trois offres SaaS — coûts renseignés",
    "",
    `- Durée commune de comparaison : ${calculation.horizonMonths} mois`,
    "- Montants fictifs et modifiables : ni prix de marché ni tarifs Hagnéré Code.",
    "- Formule : étude et décisions initiales + construction + migration + sortie et transfert + horizon × (maintenance et assistance mensuelles + infrastructure mensuelle + licences mensuelles).",
    "- Un zéro signifie que le poste est réellement nul ou déjà inclus et documenté ; jamais qu’il est inconnu.",
    "",
    "## Résultats",
    "",
    "| Offre | Ponctuel | Mensuel | Récurrent sur l’horizon | Coût renseigné | Coûts importants inconnus |",
    "|---|---:|---:|---:|---:|---|",
  ];

  for (const result of calculation.results) {
    lines.push(
      `| ${result.offer} | ${textAmount(result.oneOffTotal)} | ${textAmount(result.monthlyTotal)} | ${textAmount(result.recurringTotal)} | ${textAmount(result.total)} | ${result.hasUnknownCosts ? "Oui — ne pas classer" : "Non déclaré"} |`,
    );
  }

  lines.push(
    "",
    calculation.lowestTotal === null
      ? "**Aucun classement : au moins une offre conserve des coûts importants inconnus.**"
      : `**Coût renseigné le plus faible : ${calculation.results
          .filter((result) => result.differenceFromLowest === 0)
          .map((result) => `offre ${result.offer}`)
          .join(
            " et ",
          )} à ${textAmount(calculation.lowestTotal)}.** Ce constat ne juge ni ce qui est inclus, ni la qualité, ni le risque.`,
    "",
    "## Hypothèses saisies",
    "",
  );

  for (const offer of SAAS_OFFER_KEYS) {
    const values = inputs[offer];
    lines.push(
      `### Offre ${offer}`,
      "",
      `- Étude et décisions initiales : ${textAmount(values.discovery)}`,
      `- Construction : ${textAmount(values.construction)}`,
      `- Migration initiale : ${textAmount(values.migration)}`,
      `- Maintenance et assistance mensuelles : ${textAmount(values.monthlyMaintenance)}, soit ${textAmount(values.monthlyMaintenance * calculation.horizonMonths)} sur l’horizon`,
      `- Infrastructure mensuelle : ${textAmount(values.monthlyInfrastructure)}, soit ${textAmount(values.monthlyInfrastructure * calculation.horizonMonths)} sur l’horizon`,
      `- Licences mensuelles : ${textAmount(values.monthlyLicenses)}, soit ${textAmount(values.monthlyLicenses * calculation.horizonMonths)} sur l’horizon`,
      `- Sortie et transfert : ${textAmount(values.exit)}`,
      `- Justification des montants nuls : ${inlineValue(values.zeroJustification, "à compléter avant de lever les inconnus")}`,
      `- Coûts importants encore inconnus : ${values.hasUnknownCosts ? "oui" : "non déclaré"}`,
      "",
    );
  }

  lines.push(
    "## Inclus dans le calcul",
    "",
    "- Les sept postes saisis pour chaque offre, à leur cadence affichée.",
    "- La sortie une seule fois et les trois postes mensuels multipliés par le même horizon.",
    "",
    "## Exclus du calcul sauf saisie dans un poste",
    "",
    "- Temps de l’équipe dirigeante et des utilisateurs, coût d’opportunité et conduite du changement.",
    "- Taxes, financement, inflation, indexation, dépassements de volume et change.",
    "- Incidents, perte d’exploitation, audit juridique, sécurité supplémentaire et évolution non incluse.",
    "- Différences de service, de délai, de preuve, de qualité, de propriété et de dépendance.",
    "",
    "## Inconnus à fermer avant décision",
    "",
    ...SAAS_OFFER_KEYS.map(
      (offer) =>
        `- Offre ${offer} : ${inputs[offer].hasUnknownCosts ? "au moins un coût important reste inconnu ; demander une réponse écrite." : "aucun coût important déclaré inconnu ; faire confirmer ce qui est inclus et exclu."}`,
    ),
    "",
    "## Limites",
    "",
    "Ce fichier compare des coûts renseignés, pas des offres équivalentes. Joindre le même cahier des charges, documenter le lot de migration, justifier les zéros, demander les inclusions, exclusions, volumes, responsabilités et preuves, puis documenter la décision. Le coût renseigné le plus faible n’est pas à lui seul un choix professionnel.",
  );

  return lines.join("\n");
}
