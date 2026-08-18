export interface ContentPreparationProfile {
  companyName: string;
  mainOffer: string;
  targetCustomer: string;
  geographicArea: string;
  validator: string;
  desiredLaunchDate: string;
}

export const EMPTY_CONTENT_PREPARATION_PROFILE: ContentPreparationProfile = {
  companyName: "",
  mainOffer: "",
  targetCustomer: "",
  geographicArea: "",
  validator: "",
  desiredLaunchDate: "",
};

export const CONTENT_ROLE_KEYS = ["direction", "team", "provider"] as const;
export type ContentRoleKey = (typeof CONTENT_ROLE_KEYS)[number];

export const CONTENT_ROLE_FIELDS: ReadonlyArray<{
  key: ContentRoleKey;
  label: string;
  help: string;
}> = [
  {
    key: "direction",
    label: "Direction",
    help: "Décisions sur l’offre, les limites, les preuves et la version finale.",
  },
  {
    key: "team",
    label: "Équipe métier",
    help: "Entretiens, exemples, documents existants et contrôle des faits.",
  },
  {
    key: "provider",
    label: "Prestataire",
    help: "Entretiens, structure, rédaction, corrections et préparation du test.",
  },
];

export const CONTENT_PRODUCTION_OPTION_KEYS = [
  "internal",
  "hybrid",
  "delegated",
] as const;
export type ContentProductionOptionKey =
  (typeof CONTENT_PRODUCTION_OPTION_KEYS)[number];

export const CONTENT_PRODUCTION_OPTIONS: ReadonlyArray<{
  key: ContentProductionOptionKey;
  label: string;
  shortLabel: string;
  description: string;
}> = [
  {
    key: "internal",
    label: "Écriture principalement interne",
    shortLabel: "Interne",
    description:
      "L’entreprise écrit les pages ; le prestataire les relit et les prépare pour le site.",
  },
  {
    key: "hybrid",
    label: "Entretiens et rédaction hybride",
    shortLabel: "Hybride",
    description:
      "L’entreprise apporte les faits en entretien ; le prestataire structure et rédige.",
  },
  {
    key: "delegated",
    label: "Rédaction largement déléguée",
    shortLabel: "Déléguée",
    description:
      "Le prestataire mène davantage de recherche et de production ; l’entreprise valide toujours les faits.",
  },
];

export type ContentRoleValues = Record<ContentRoleKey, number>;

export type ContentProductionInputs = Record<
  ContentProductionOptionKey,
  ContentRoleValues & { hasUnknownCosts: boolean; zeroJustification: string }
>;

export interface ContentProductionModel {
  rates: ContentRoleValues;
  options: ContentProductionInputs;
}

export const CONTENT_PRODUCTION_EXAMPLE_MODEL: ContentProductionModel = {
  rates: {
    direction: 75,
    team: 40,
    provider: 90,
  },
  options: {
    internal: {
      direction: 20,
      team: 8,
      provider: 4,
      hasUnknownCosts: true,
      zeroJustification: "",
    },
    hybrid: {
      direction: 8,
      team: 4,
      provider: 14,
      hasUnknownCosts: true,
      zeroJustification: "",
    },
    delegated: {
      direction: 5,
      team: 3,
      provider: 26,
      hasUnknownCosts: true,
      zeroJustification: "",
    },
  },
};

export interface ContentProductionValidationError {
  scope: "rate" | "hours" | "zeroJustification";
  role?: ContentRoleKey;
  option?: ContentProductionOptionKey;
}

export interface ContentProductionResult {
  option: ContentProductionOptionKey;
  internalHours: number;
  providerHours: number;
  totalHours: number;
  internalCapacityValue: number;
  providerCost: number;
  totalValue: number;
  hasUnknownCosts: boolean;
  differenceFromLowest: number | null;
}

export interface ContentProductionCalculation {
  isValid: boolean;
  results: ContentProductionResult[];
  hasAnyUnknownCosts: boolean;
  lowestValue: number | null;
  validationErrors: ContentProductionValidationError[];
}

function isValidNonNegative(value: number) {
  return Number.isFinite(value) && value >= 0;
}

function roundCurrency(value: number) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

export function cloneContentProductionModel(
  model: ContentProductionModel,
): ContentProductionModel {
  return {
    rates: { ...model.rates },
    options: {
      internal: { ...model.options.internal },
      hybrid: { ...model.options.hybrid },
      delegated: { ...model.options.delegated },
    },
  };
}

export function calculateContentProduction(
  model: ContentProductionModel,
): ContentProductionCalculation {
  const validationErrors: ContentProductionValidationError[] = [];

  for (const role of CONTENT_ROLE_KEYS) {
    if (!isValidNonNegative(model.rates[role])) {
      validationErrors.push({ scope: "rate", role });
    }
  }

  for (const option of CONTENT_PRODUCTION_OPTION_KEYS) {
    for (const role of CONTENT_ROLE_KEYS) {
      if (!isValidNonNegative(model.options[option][role])) {
        validationErrors.push({ scope: "hours", option, role });
      }
    }
    const hasZero = CONTENT_ROLE_KEYS.some(
      (role) => model.options[option][role] === 0,
    );
    if (hasZero && model.options[option].zeroJustification.trim() === "") {
      validationErrors.push({ scope: "zeroJustification", option });
    }
  }

  if (validationErrors.length > 0) {
    return {
      isValid: false,
      results: [],
      hasAnyUnknownCosts: CONTENT_PRODUCTION_OPTION_KEYS.some(
        (option) => model.options[option].hasUnknownCosts,
      ),
      lowestValue: null,
      validationErrors,
    };
  }

  const resultsWithoutComparison = CONTENT_PRODUCTION_OPTION_KEYS.map(
    (option) => {
      const hours = {
        direction: roundCurrency(model.options[option].direction),
        team: roundCurrency(model.options[option].team),
        provider: roundCurrency(model.options[option].provider),
      };
      const rates = {
        direction: roundCurrency(model.rates.direction),
        team: roundCurrency(model.rates.team),
        provider: roundCurrency(model.rates.provider),
      };
      const internalHours = roundCurrency(hours.direction + hours.team);
      const providerHours = hours.provider;
      const internalCapacityValue =
        hours.direction * rates.direction + hours.team * rates.team;
      const providerCost = hours.provider * rates.provider;

      return {
        option,
        internalHours,
        providerHours,
        totalHours: internalHours + providerHours,
        internalCapacityValue: roundCurrency(internalCapacityValue),
        providerCost: roundCurrency(providerCost),
        totalValue: roundCurrency(internalCapacityValue + providerCost),
        hasUnknownCosts: model.options[option].hasUnknownCosts,
      };
    },
  );

  if (
    resultsWithoutComparison.some((result) =>
      Object.values(result).some(
        (value) => typeof value === "number" && !Number.isFinite(value),
      ),
    )
  ) {
    return {
      isValid: false,
      results: [],
      hasAnyUnknownCosts: true,
      lowestValue: null,
      validationErrors: CONTENT_PRODUCTION_OPTION_KEYS.flatMap((option) =>
        CONTENT_ROLE_KEYS.map((role) => ({
          scope: "hours" as const,
          option,
          role,
        })),
      ),
    };
  }

  const hasAnyUnknownCosts = resultsWithoutComparison.some(
    (result) => result.hasUnknownCosts,
  );
  const lowestValue = hasAnyUnknownCosts
    ? null
    : Math.min(...resultsWithoutComparison.map((result) => result.totalValue));

  return {
    isValid: true,
    hasAnyUnknownCosts,
    lowestValue,
    validationErrors: [],
    results: resultsWithoutComparison.map((result) => ({
      ...result,
      differenceFromLowest:
        lowestValue === null ? null : result.totalValue - lowestValue,
    })),
  };
}

function cleanInline(value: string, fallback: string) {
  const cleaned = value
    .trim()
    .replaceAll("\\", "\\\\")
    .replaceAll("|", "\\|")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\n", " ");
  return cleaned || `[${fallback}]`;
}

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

export function contentPreparationFileName(companyName: string) {
  return `dossier-contenus-site-vitrine-${slugify(companyName) || "a-completer"}.md`;
}

export function buildContentPreparationMarkdown(
  profile: ContentPreparationProfile,
) {
  const company = cleanInline(profile.companyName, "nom de l’entreprise");
  const offer = cleanInline(profile.mainOffer, "offre principale");
  const target = cleanInline(profile.targetCustomer, "client concerné");
  const area = cleanInline(profile.geographicArea, "zone d’intervention");
  const validator = cleanInline(profile.validator, "personne qui valide");
  const launchDate = cleanInline(
    profile.desiredLaunchDate,
    "date de lancement souhaitée",
  );

  return `# Dossier de contenus du site vitrine — ${company}

> Document de travail éditable. Une case vide reste une inconnue à attribuer,
> pas une invitation à inventer une promesse.

## 0. Décision et responsables

| Question | Réponse |
| --- | --- |
| Offre prioritaire | ${offer} |
| Client concerné | ${target} |
| Zone | ${area} |
| Personne qui tranche les désaccords | ${validator} |
| Date de lancement souhaitée | ${launchDate} |
| Mode envisagé | [interne / hybride / délégué / réduction / report] |
| Prochaine décision | [lancer / réduire / faire produire / confirmer / reporter] |

## 1. Carte des pages

| Page envisagée | Question du visiteur | Réponse courte | Preuve | Action attendue | Créer, fusionner ou reporter | Responsable | Date de revue |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Accueil | [à compléter] | [à compléter] | [à compléter] | [à compléter] | [à décider] | [à nommer] | [date] |
| ${offer} | [à compléter] | [à compléter] | [à compléter] | [à compléter] | [à décider] | [à nommer] | [date] |

## 2. Phrases réellement employées par les clients

| Phrase exacte | Source | Date | Situation ou objection | Page qui doit répondre |
| --- | --- | --- | --- | --- |
| [phrase entendue] | [appel / e-mail / devis / entretien / recherche interne] | [date] | [contexte] | [page] |

## 3. Fiche de l’offre prioritaire

- Client concerné : ${target}
- Situation qui déclenche la recherche : [situation observable]
- Résultat ou prochaine étape recherchée : [résultat sans promesse absolue]
- Ce qui est compris : [liste]
- Ce qui n’est pas compris : [liste]
- Zone, disponibilité ou condition importante : ${area}
- Prix affiché, prix sur devis ou information à confirmer : [réponse]
- Question fréquente avant la décision : [question]
- Réponse courte : [réponse]
- Preuve réellement publiable : [preuve, source, portée]
- Action suivante : [appeler / demander un devis / réserver / venir]
- Personne qui valide : ${validator}

## 4. De la note brute à la page

### Note métier non publiée

[Collez ici les notes, formulations imparfaites et faits à vérifier.]

### Version de page à tester

**Titre qui nomme le service et la situation**

[Titre]

**Réponse courte**

[À qui le service s’adresse, ce qui se passe et la prochaine étape.]

**Ce qui est compris**

- [élément]

**Ce qui n’est pas compris ou doit être confirmé**

- [limite ou inconnue]

**Preuve**

[Affirmation] — [preuve] — [source] — [portée] — [date de revue]

**Question difficile**

[Objection réelle]  
[Réponse factuelle]

**Action proposée**

[Action et résultat attendu après le contact]

## 5. Registre des preuves

| Affirmation | Preuve | Source | Ce qu’elle prouve vraiment | Droit ou autorisation | Objection traitée | État | Date de revue |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [affirmation] | [document, réalisation, méthode, avis] | [lien ou fichier] | [portée exacte] | [confirmé / à confirmer] | [question du client] | [publier / confirmer / retirer] | [date] |

## 6. Plan des photos

| Page | Scène à photographier | Ce qu’elle doit faire comprendre | Auteur ou fournisseur | Personnes reconnaissables | Licence ou autorisation | Alternative |
| --- | --- | --- | --- | --- | --- | --- |
| ${offer} | [scène] | [message] | [nom] | [oui / non] | [preuve conservée] | [photo ou illustration de remplacement] |

## 7. Identité et informations pratiques

| Information | Valeur à publier | Source qui fait foi | Personne qui confirme | Date |
| --- | --- | --- | --- | --- |
| Nom exact de l’entreprise | ${company} | [source] | ${validator} | [date] |
| Téléphone | [à compléter] | [source] | [nom] | [date] |
| Adresse ou zone | ${area} | [source] | [nom] | [date] |
| Horaires | [à compléter] | [source] | [nom] | [date] |
| Identité légale et hébergeur | [à compléter selon le cas] | [source] | [nom] | [date] |

## 8. Formulaire et traitement de la demande

| Champ demandé | Pourquoi est-il nécessaire ? | Obligatoire ? | Destinataire | Réponse prévue | Durée de conservation ou critère | Test effectué |
| --- | --- | --- | --- | --- | --- | --- |
| E-mail | [raison] | [oui / non] | [personne] | [délai ou prochaine étape] | [à confirmer] | [date et résultat] |

Vérifications : message de confirmation, réception sur téléphone, solution de
secours, information des personnes et paramètres réellement appliqués.

## 9. Qui produit et qui valide ?

| Élément | L’entreprise apporte | Le prestataire produit | Personne qui valide | Nombre de retours inclus | Version qui fait foi |
| --- | --- | --- | --- | --- | --- |
| Textes | [faits / entretien / texte final] | [structure / rédaction / intégration] | ${validator} | [nombre] | [lien] |
| Photos | [fichiers / accès / personnes] | [plan / prise de vue / traitement] | [nom] | [nombre] | [dossier] |
| Preuves | [source / autorisation] | [présentation sans élargir la portée] | [nom] | [nombre] | [registre] |

## 10. Test avant publication

Ne demandez pas seulement « aimez-vous la page ? ». Faites accomplir ces quatre
tâches à trois à cinq personnes proches de la cible :

1. expliquer avec leurs mots ce que l’entreprise propose ;
2. trouver une limite, une condition ou ce qui n’est pas inclus ;
3. montrer la preuve qui les aide à croire l’affirmation principale ;
4. expliquer ce qu’elles feraient ensuite.

| Personne et profil | Tâche | Ce qu’elle a compris ou cherché | Phrase exacte | Correction | Nouveau test |
| --- | --- | --- | --- | --- | --- |
| [profil, sans donnée inutile] | [1 à 4] | [observation] | [phrase] | [action] | [date et résultat] |

Ce petit test révèle des défauts de compréhension. Il ne mesure pas un taux de
conversion et ne prouve pas que tous les clients réagiront de la même façon.

## 11. Décision de lancement

- [ ] Les offres et leurs limites sont confirmées.
- [ ] Chaque affirmation importante a une preuve ou a été retirée.
- [ ] Les photos ont un usage clair et des droits vérifiés.
- [ ] Le formulaire arrive à la bonne personne et a été testé.
- [ ] Un seul décideur valide la version finale.
- [ ] Les inconnues restantes ont un responsable et une date.
- [ ] Une personne extérieure aux échanges retrouve la bonne version, le
      validateur et le droit d’usage en moins de deux minutes.

Verdict : [lancer / lancer avec production éditoriale / réduire / reporter]

Raison : [faits observables]

## 12. Suivi après publication

| Élément à suivre | Mesure de départ | Contrôle à 30 jours | Décision à 90 jours ou après un cycle commercial | Propriétaire |
| --- | --- | --- | --- | --- |
| Réception des demandes | [test et volume] | [résultat] | [maintenir / corriger] | [nom] |
| Demandes qualifiées | [définition et valeur] | [résultat] | [maintenir / réécrire] | [nom] |
| Prix, horaires, zone | [valeur et source] | [erreurs] | [mettre à jour / retirer] | [nom] |
| Preuves et avis | [source et date] | [validité] | [conserver / remplacer] | [nom] |
| Questions qui persistent | [liste] | [verbatim] | [créer / fusionner / supprimer une page] | [nom] |

## 13. Sources et limites

- Sources métier : [documents, entretiens, appels, devis]
- Sources juridiques ou réglementaires à vérifier : [liens et date]
- Inconnues qui exigent un conseil spécialisé : [liste]
- Ce document ne garantit ni classement dans Google, ni volume de demandes,
  ni conformité juridique universelle.
`;
}

export function buildServiMecaExampleMarkdown() {
  return `# Exemple de travail — offre, page, coûts et test — ServiMeca Industrie

> Exemple entièrement fictif. ServiMeca Industrie, ses chiffres, ses clients,
> ses personnes et ses résultats n’existent pas. Le document montre le niveau
> de précision attendu ; il ne fournit ni norme de durée, ni tarif de marché.

## 0. Décision et périmètre

- Entreprise : ServiMeca Industrie
- Offre prioritaire : diagnostic de pannes récurrentes sur équipements de production
- Client concerné : responsable de production d’une PME industrielle
- Zone : interventions dans un rayon de 120 km autour de l’atelier fictif
- Validatrice : Nora, dirigeante fictive
- Périmètre comparé : huit pages, quatre offres, mêmes preuves, mêmes photos,
  deux cycles de retours ; intégration technique et séance photo hors calcul
- Mode retenu pour le test : hybride, sous réserve de vérifier les inconnues

## 1. Phrases clients conservées

| Phrase exacte fictive | Source fictive | Ce que la page doit expliquer |
| --- | --- | --- |
| « Pouvez-vous diagnostiquer sans arrêter toute la ligne ? » | appel avant devis | les conditions du diagnostic et les arrêts possibles |
| « Les pièces sont-elles comprises ? » | e-mail après proposition | ce qui est compris et exclu |
| « Que vais-je recevoir après votre passage ? » | entretien perdu | le compte rendu et la prochaine décision |

## 2. Fiche de l’offre

- Situation : une panne revient après plusieurs remises en route et l’équipe
  interne ne sait plus quelle cause traiter en premier.
- Réponse : observation sur site, entretiens, mesures compatibles avec l’accès
  autorisé, puis compte rendu des causes probables et actions prioritaires.
- Compris : préparation, intervention planifiée, observations accessibles,
  entretien opérateur et compte rendu.
- Non compris : réparation, pièces, location d’un moyen d’accès, arrêt de
  production et intervention d’urgence.
- Preuve : exemple anonymisé de structure de compte rendu, méthode en cinq
  étapes et qualifications réellement vérifiées avant publication.
- Action : transmettre l’équipement, le symptôme, la localisation et la
  fenêtre d’arrêt possible pour confirmer si un diagnostic est pertinent.

## 3. De la note brute à la page

### Note brute fictive

« On vient, on regarde la machine, on parle aux gars, on fait des mesures et on
dit ce qui ne va pas. Très réactifs. Toutes marques. Devis gratuit. »

### Ce qui est retiré ou confirmé

- « très réactifs » : retiré tant qu’aucun délai et aucune capacité ne sont définis ;
- « toutes marques » : remplacé par la liste vérifiée des équipements maîtrisés ;
- « devis gratuit » : à confirmer selon la distance et les informations disponibles ;
- « on dit ce qui ne va pas » : remplacé par le livrable et ses limites.

### Version de page à tester

**Une panne revient et vous ne savez plus quelle cause traiter en premier ?**

ServiMeca Industrie réalise un diagnostic planifié sur les équipements listés
dans un rayon de 120 km. L’intervention aboutit à un compte rendu qui classe
les causes probables et les contrôles ou réparations à décider. Elle ne comprend
ni les pièces, ni la réparation, ni l’arrêt de production.

**Avant de confirmer l’intervention**, l’entreprise demande le type
d’équipement, le symptôme, les actions déjà tentées, la localisation et la
fenêtre pendant laquelle l’équipement peut être observé.

**Preuve à présenter** : extrait anonymisé d’un compte rendu réel autorisé,
qualification vérifiée et cinq étapes effectivement suivies. Aucun taux de
réussite n’est publié sans méthode et historique suffisants.

**Action proposée** : décrire la panne et la fenêtre d’observation pour savoir
si un diagnostic est pertinent ou si un autre spécialiste doit intervenir.

## 4. Coût et temps illustratifs

Avec 75 €/h pour la direction, 40 €/h pour l’équipe et 90 €/h pour le
prestataire :

| Mode | Direction | Équipe | Prestataire | Capacité ou coût renseigné |
| --- | ---: | ---: | ---: | ---: |
| Principalement interne | 20 h | 8 h | 4 h | 2 180 € |
| Hybride | 8 h | 4 h | 14 h | 2 020 € |
| Largement délégué | 5 h | 3 h | 26 h | 2 835 € |

Le modèle hybride est inférieur de 160 € à l’interne et de 815 € à la
délégation dans ce seul scénario. Il ne devient pas automatiquement la meilleure
option : compétence interne, disponibilité, photographie, intégration, droits,
traduction et nouveaux cycles de validation restent à vérifier.

## 5. Test fictif avant publication

Trois responsables de production proches de la cible accomplissent quatre
tâches : reformuler l’offre, trouver une exclusion, identifier la preuve et
expliquer la prochaine action.

Observation fictive : deux personnes cherchent encore si les pièces sont
comprises. Correction : placer l’exclusion dans la réponse courte et dans le
résumé avant le formulaire. Un second test vérifie seulement si ce défaut précis
a disparu ; il ne produit pas un taux de conversion.

## 6. Décision

Lancer la rédaction hybride après confirmation des équipements couverts et des
droits sur l’extrait de compte rendu. Reporter la séance photo tant que la liste
des scènes, les autorisations et les conditions de sécurité ne sont pas écrites.
`;
}

const currency = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 2,
});

function optionLabel(option: ContentProductionOptionKey) {
  return (
    CONTENT_PRODUCTION_OPTIONS.find((candidate) => candidate.key === option)
      ?.label ?? option
  );
}

export function buildContentProductionComparisonMarkdown(
  model: ContentProductionModel,
  calculation: ContentProductionCalculation,
) {
  if (!calculation.isValid) {
    throw new Error("Le comparatif doit être valide avant son export.");
  }

  const lowest = calculation.results.find(
    (result) => result.differenceFromLowest === 0,
  );

  return `# Comparatif de production des contenus

> Calcul local fondé uniquement sur les heures et valeurs saisies. Les valeurs
> internes représentent une capacité mobilisée, pas nécessairement une facture
> ou une économie. Les résultats ne sont ni des prix de marché, ni des tarifs
> Hagnéré Code, ni une mesure de qualité.

## Périmètre à rendre identique avant comparaison

- Nombre de pages : [à compléter]
- Nombre d’offres : [à compléter]
- Preuves et photos : [à compléter]
- Entretiens : [à compléter]
- Cycles de retours : [à compléter]
- Intégration technique : [incluse / exclue / inconnue]
- Traductions et droits : [inclus / exclus / inconnus]

## Valeur d’une heure saisie

| Rôle | Valeur |
| --- | ---: |
${CONTENT_ROLE_FIELDS.map(
  (role) => `| ${role.label} | ${currency.format(model.rates[role.key])} |`,
).join("\n")}

## Heures et résultats

| Option | Direction | Équipe | Prestataire | Temps interne | Décaissement prestataire | Total renseigné | Inconnus |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
${calculation.results
  .map(
    (result) =>
      `| ${optionLabel(result.option)} | ${model.options[result.option].direction} h | ${model.options[result.option].team} h | ${model.options[result.option].provider} h | ${result.internalHours} h / ${currency.format(result.internalCapacityValue)} | ${currency.format(result.providerCost)} | ${currency.format(result.totalValue)} | ${result.hasUnknownCosts ? "oui" : "non déclaré"} |`,
  )
  .join("\n")}

## Justification des heures nulles

${CONTENT_PRODUCTION_OPTION_KEYS.map(
  (option) =>
    `- ${optionLabel(option)} : ${model.options[option].zeroJustification.trim() || "aucune heure nulle saisie"}`,
).join("\n")}

## Lecture

${
  calculation.hasAnyUnknownCosts || !lowest
    ? "Aucun classement : au moins une option contient encore un coût, une tâche ou un risque important inconnu."
    : `Coût renseigné le plus faible : ${optionLabel(lowest.option)}, à ${currency.format(lowest.totalValue)}. Cela ne signifie pas « meilleure option » : la qualité de la matière, la compétence, la disponibilité et les risques restent à juger séparément.`
}

## Inconnus à fermer

- photographie ou achat d’images ;
- recherche documentaire et vérification des preuves ;
- droits, traductions et validations spécialisées ;
- intégration dans le site ;
- nouvelle offre encore floue ;
- cycles supplémentaires et disponibilité du décideur ;
- maintenance des pages après publication.
`;
}
