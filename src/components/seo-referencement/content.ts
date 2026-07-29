export type SeoItem = {
  title: string;
  description: string;
};

export type SeoFormat = SeoItem & {
  label: string;
  forWhom: string;
  outputs: string[];
};

export const SEO_STARTING_POINTS: SeoItem[] = [
  {
    title: "Vous publiez, mais Google ne montre presque rien",
    description:
      "On sépare le problème d’exploration, d’indexation, de positionnement et de demande réelle. Une URL découverte n’est pas forcément indexée ; une URL indexée n’a pas forcément une intention rentable.",
  },
  {
    title: "Votre trafic existe, mais il ne produit pas de demandes",
    description:
      "On relie les requêtes aux pages qui expliquent, comparent et convertissent. Le travail porte autant sur l’offre, le maillage et la prochaine action que sur le volume de contenu.",
  },
  {
    title: "Une refonte ou une migration met vos positions en danger",
    description:
      "On inventorie les URL, les liens et les gabarits avant la bascule, puis on prépare les redirections, la recette et le contrôle post-mise en ligne.",
  },
  {
    title: "Vous devez gagner localement sans fabriquer des pages villes",
    description:
      "On aligne le site, Google Business Profile, les avis, les citations et les pages locales sur une présence réelle et des informations NAP strictement cohérentes.",
  },
];

export const SEO_DELIVERABLES: SeoItem[] = [
  {
    title: "Mesure et diagnostic",
    description:
      "Search Console, indexation, requêtes, pages d’entrée, conversions disponibles et qualité des données. Le diagnostic distingue ce qui est observé de ce qui reste une hypothèse.",
  },
  {
    title: "Socle technique",
    description:
      "Rendu, robots, sitemap, canonicals, redirections, données structurées, performance, accessibilité utile au parcours et erreurs qui empêchent Google ou les lecteurs d’accéder au contenu.",
  },
  {
    title: "Architecture par intentions",
    description:
      "Pages service, comparatifs, guides, outils et contenus locaux reçoivent chacun un rôle précis. On évite les pages concurrentes qui répondent à la même question avec des mots différents.",
  },
  {
    title: "Contenu de décision",
    description:
      "Sources primaires, exemples clairement qualifiés, tableaux, alternatives et cas où il ne faut pas acheter. Une page doit aider à décider, pas seulement couvrir un champ lexical.",
  },
  {
    title: "Maillage et autorité",
    description:
      "Liens internes contextuels, actifs réellement citables, partenariats et relations presse quand elles ont du sens. Aucun quota de backlinks ne remplace la pertinence du site qui fait le lien.",
  },
  {
    title: "Pilotage et amélioration",
    description:
      "Journal des actions, évolution des impressions, clics, requêtes et conversions. Les arbitrages suivants viennent des données collectées, pas d’un calendrier éditorial figé pour douze mois.",
  },
];

export const SEO_PROCESS: SeoItem[] = [
  {
    title: "Établir la vérité",
    description:
      "Accès aux données disponibles, inventaire du site, objectifs commerciaux et contraintes. On note explicitement les données absentes ou peu fiables.",
  },
  {
    title: "Prioriser",
    description:
      "Chaque action reçoit une intention, un impact attendu, un effort et une preuve de réussite. Les blocages techniques et les pages proches du revenu passent avant le volume.",
  },
  {
    title: "Corriger le socle",
    description:
      "Indexation, duplication, rendu, performance, gabarits, maillage et mesure. Le contenu ne compense pas un site qui envoie des signaux contradictoires.",
  },
  {
    title: "Produire les bons actifs",
    description:
      "Pages service, contenus, études, modèles ou outils sont choisis selon l’intention observée. Chaque actif a un propriétaire, des sources et une date de revalidation.",
  },
  {
    title: "Mesurer et réallouer",
    description:
      "On conserve ce qui gagne des impressions, des liens ou des demandes, on enrichit ce qui approche la première page et on arrête ce qui ne justifie plus son coût.",
  },
];

export const SEO_FORMATS: SeoFormat[] = [
  {
    label: "Diagnostic",
    title: "Audit SEO actionnable",
    description:
      "Pour comprendre une stagnation, préparer une refonte ou obtenir une feuille de route indépendante avant de choisir qui exécutera.",
    forWhom: "Site existant, décision à prendre",
    outputs: [
      "Constats reliés à des URL et à des preuves",
      "Priorités classées par impact et effort",
      "Restitution et plan de contrôle",
      "Périmètre et tarif établis au devis",
    ],
  },
  {
    label: "Exécution ciblée",
    title: "Sprint de correction",
    description:
      "Pour traiter un ensemble borné : migration, indexation, architecture, pages business, données structurées ou assainissement éditorial.",
    forWhom: "Problème identifié, résultat borné",
    outputs: [
      "Périmètre écrit avant intervention",
      "Corrections livrées sur votre dépôt",
      "Recette technique et navigateur",
      "Documentation de ce qui a changé",
    ],
  },
  {
    label: "Pilotage",
    title: "Accompagnement organique",
    description:
      "Pour construire progressivement les pages, ressources et signaux d’autorité qui servent une offre sur plusieurs mois.",
    forWhom: "Canal organique à structurer",
    outputs: [
      "Plan mensuel fondé sur les données",
      "Production et corrections priorisées",
      "Suivi Search Console et conversions",
      "Volume défini par la qualité réalisable",
    ],
  },
];

export const SEO_REFUSALS: SeoItem[] = [
  {
    title: "Une position garantie",
    description:
      "Personne ne contrôle l’index de Google. Nous pouvons garantir un périmètre, des livrables et une méthode, jamais une position précise à une date donnée.",
  },
  {
    title: "Un quota d’articles pour remplir un forfait",
    description:
      "Un contenu n’est produit que s’il répond à une intention distincte, s’appuie sur des preuves suffisantes et possède une place claire dans le parcours.",
  },
  {
    title: "Des backlinks vendus au kilo",
    description:
      "Le nombre et le score d’un domaine ne suffisent pas. Un lien doit être éditorialement justifiable, durable et cohérent avec votre activité.",
  },
  {
    title: "Des pages locales interchangeables",
    description:
      "Une page ville doit reposer sur une présence, un service ou une connaissance territoriale réelle. Changer uniquement le nom de la commune ne crée aucune légitimité.",
  },
  {
    title: "Des résultats clients inventés",
    description:
      "Une simulation reste une simulation et une estimation reste une estimation. Toute preuve commerciale publiée doit pouvoir être reliée à un artefact vérifiable.",
  },
  {
    title: "Un rapport qui remplace l’exécution",
    description:
      "Un audit utile doit permettre de corriger, déléguer et contrôler. Les captures d’outils sans décision, responsable ni critère d’acceptation ne suffisent pas.",
  },
];

export const SEO_RELATED_RESOURCES = [
  {
    href: "/methode",
    label: "Diagnostic",
    title: "Notre méthode pour transformer un diagnostic en décisions",
  },
  {
    href: "/services/audit-technique",
    label: "Audit",
    title: "Faire auditer le socle technique d’un site ou d’une application",
  },
  {
    href: "/tarifs",
    label: "Budget",
    title: "Consulter les tarifs et le périmètre de nos prestations",
  },
  {
    href: "/services/sites-vitrines",
    label: "Refonte",
    title: "Cadrer une création ou une refonte de site vitrine",
  },
  {
    href: "/agence-next-js",
    label: "Technique",
    title: "Comprendre les projets que nous réalisons avec Next.js",
  },
  {
    href: "/services/maintenance-evolution",
    label: "Performance",
    title: "Maintenir, corriger et faire évoluer un service existant",
  },
] as const;

export const SEO_FAQS = [
  {
    question: "Combien de temps faut-il pour voir des résultats SEO ?",
    answer:
      "Il n’existe pas de délai universel. Une correction technique peut être observée après une nouvelle exploration ; une page concurrentielle ou une stratégie d’autorité demande généralement plusieurs mois. Le devis fixe des jalons observables — indexation, impressions, requêtes, clics et demandes — sans promettre une position.",
  },
  {
    question: "Pouvez-vous garantir la première page Google ?",
    answer:
      "Non. Nous garantissons les actions et livrables écrits au devis, leur qualité de réalisation et leur vérification. Google reste seul maître de l’exploration, de l’indexation et du classement. Une promesse de position précise serait trompeuse.",
  },
  {
    question: "Utilisez-vous l’intelligence artificielle pour les contenus ?",
    answer:
      "Oui, comme outil de recherche, de structuration ou de contrôle lorsque c’est utile. Elle ne remplace ni les sources, ni l’expérience métier, ni la responsabilité éditoriale. Chaque fait décisif doit pouvoir être vérifié et chaque contenu est relu dans son contexte public.",
  },
  {
    question: "Faut-il publier beaucoup d’articles chaque mois ?",
    answer:
      "Pas nécessairement. Le bon volume dépend du nombre d’intentions réellement distinctes et de la capacité à produire des pages solides. Sur un site récent, améliorer les pages commerciales, l’indexation, le maillage et l’autorité peut être prioritaire sur un nouvel article.",
  },
  {
    question: "Travaillez-vous aussi le référencement local ?",
    answer:
      "Oui. Nous travaillons la cohérence NAP, Google Business Profile, les avis, les citations, les pages territoriales et leur maillage. Hagnéré Code est installé au 82 impasse de Bellevue à Bassens, aux portes de Chambéry, et intervient en Savoie comme à distance partout en France.",
  },
  {
    question: "Pouvez-vous accompagner une migration ou une refonte ?",
    answer:
      "Oui. L’intervention couvre l’inventaire des URL, les redirections, les canonicals, le maillage, les données structurées, la recette avant mise en ligne et le suivi après bascule. Le périmètre exact dépend de l’ancien et du nouveau site.",
  },
  {
    question: "Sommes-nous obligés de vous confier l’exécution après l’audit ?",
    answer:
      "Non. L’audit est conçu pour être transmis à votre équipe, à votre prestataire actuel ou à un autre intervenant. Si nous exécutons ensuite, le périmètre fait l’objet d’un devis séparé.",
  },
  {
    question: "Comment démarre une mission SEO ?",
    answer:
      "Par un échange de cadrage puis un accès strictement nécessaire aux données disponibles. Nous confirmons ensuite le problème à résoudre, le périmètre, les livrables, le calendrier de travail et le prix avant toute intervention.",
  },
] as const;
