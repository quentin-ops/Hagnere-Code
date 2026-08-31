import { CONTACT_ADDRESS } from "@/lib/contact-details";

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

/**
 * Formes d'engagement publiées. Aucun montant n'est recopié ici : la grille
 * tarifaire (/tarifs) est la seule page qui publie les prix, pour éviter deux
 * catalogues qui divergent. Ce bloc décrit uniquement la forme de l'engagement.
 */
export const SEO_BUDGET_SHAPES: SeoItem[] = [
  {
    title: "Diagnostic ponctuel",
    description:
      "Un audit se paie une fois, sans suite obligatoire. Son prix dépend du nombre d'URL, des gabarits, des accès disponibles et de la profondeur demandée ; il est fixé au devis après le cadrage.",
  },
  {
    title: "Sprint à périmètre borné",
    description:
      "Une correction délimitée — migration, indexation, architecture, données structurées — est chiffrée au forfait sur un périmètre écrit avant intervention. Aucun travail hors périmètre n'est engagé sans accord écrit.",
  },
  {
    title: "Accompagnement mensuel",
    description:
      "L'accompagnement organique prend la forme d'un abonnement mensuel. Aucun palier n'est publié : le volume de production, les chantiers techniques et la mesure varient trop d'un site à l'autre. Le palier retenu, son prix mensuel hors taxes, la durée et le préavis figurent au devis.",
  },
];

export const SEO_SCOPE_INCLUDED: SeoItem[] = [
  {
    title: "Accès et mesure",
    description:
      "Lecture de la Search Console, de l'outil d'analyse d'audience et des journaux serveur lorsqu'ils sont disponibles, avec les droits strictement nécessaires.",
  },
  {
    title: "Corrections livrées sur votre dépôt",
    description:
      "Les modifications techniques sont poussées sur votre Git, en branches relues, avec le détail de ce qui a changé.",
  },
  {
    title: "Recette avant et après mise en ligne",
    description:
      "Contrôle du rendu, des redirections, des canonicals, du sitemap et des données structurées, puis vérification après bascule.",
  },
  {
    title: "Journal des actions daté",
    description:
      "Chaque intervention est consignée avec sa date et son intention, pour pouvoir relier une variation observée à une cause plausible.",
  },
  {
    title: "Restitution et transmission",
    description:
      "Les constats, priorités et procédures sont écrits pour pouvoir être repris par votre équipe ou par un autre prestataire. Chaque constat porte un responsable et un critère d'acceptation : un audit doit permettre de corriger, déléguer et contrôler, pas seulement de constater.",
  },
];

/**
 * Colonne « hors périmètre » de la section PÉRIMÈTRE.
 *
 * Passe UX du 31/08/2026 : la page portait deux sections de refus consécutives
 * — cette colonne (5 croix) puis « La confiance commence par les limites »
 * (6 croix) — soit onze refus en deux écrans, dont deux littéralement
 * redondants (« Achat de liens » / « Des backlinks vendus au kilo », et
 * « Rédaction en volume » / « Un quota d'articles pour remplir un forfait »).
 * Les deux sections sont fusionnées ici ; les doublons ont disparu, les refus
 * réellement distincts ont rejoint la liste, et « Une position garantie » vit
 * désormais uniquement dans SEO_COMMITMENTS, qui est sa place contractuelle.
 * Le mot d'ordre : six refus, une seule fois, dans le même écran que les
 * cinq engagements qui leur font face.
 */
export const SEO_SCOPE_EXCLUDED: SeoItem[] = [
  {
    title: "Achat de liens et réseaux privés",
    description:
      "Aucun achat de lien, ferme de contenus ou réseau de sites n'entre dans le périmètre, quel que soit le budget proposé. Le nombre et le score d'un domaine ne suffisent pas : un lien doit être éditorialement justifiable et durable.",
  },
  {
    title: "Rédaction en volume sans intention",
    description:
      "Un quota d'articles mensuel n'est pas vendu comme tel. Le volume découle du nombre d'intentions réellement distinctes, des preuves disponibles et de la place de chaque page dans le parcours.",
  },
  {
    title: "Pages locales interchangeables",
    description:
      "Une page ville doit reposer sur une présence, un service ou une connaissance territoriale réelle. Changer uniquement le nom de la commune ne crée aucune légitimité et expose le site.",
  },
  {
    title: "Preuves de résultats fabriquées",
    description:
      "Une simulation reste une simulation et une estimation reste une estimation. Aucun chiffre, capture ou témoignage n'est publié s'il ne peut pas être relié à un artefact vérifiable.",
  },
  {
    title: "Budget média, licences et outils tiers",
    description:
      "Les enchères publicitaires relèvent d'une autre prestation et restent sur vos comptes. Pour le crawl, le suivi de positions ou la veille de liens, le devis dit lesquels sont nécessaires, qui porte la licence et à quel coût.",
  },
  {
    title: "Traduction et conseil juridique",
    description:
      "Localisation professionnelle, mentions légales et qualification réglementaire sont confiées aux professionnels compétents.",
  },
];

export const SEO_COMMITMENTS: SeoItem[] = [
  {
    title: "Périmètre écrit avant de commencer",
    description:
      "Le devis liste les livrables, les exclusions, le calendrier de travail, les intervenants et les critères d'acceptation. Aucun dépassement n'est facturé sans accord écrit préalable.",
  },
  {
    title: "Aucune position garantie",
    description:
      "Nous nous engageons sur des actions et des livrables vérifiables, jamais sur un classement, un volume de trafic ou une citation par une IA. Google reste seul maître de son index.",
  },
  {
    title: "Droits et accès au devis",
    description:
      "Le devis inventorie les dépôts, comptes et accès. Les livrables spécifiques sont transférés après paiement complet selon les CGV, sous réserve des composants préexistants et licences tierces.",
  },
  {
    title: "Réversibilité prévue dès le départ",
    description:
      "Procédures, journaux et documentation sont rédigés pour être repris sans nous. Aucun outil propriétaire Hagnéré n'est imposé pour continuer le travail.",
  },
];

/**
 * Gabarit de livrable montré sur la page.
 *
 * Ajouté le 31/08/2026, avec l'écran libéré par la fusion des deux sections de
 * refus : sur quatorze sections, six mettaient en garde et aucune ne montrait
 * ce que la mission produit. Ces deux panneaux sont la forme exacte de nos deux
 * livrables permanents — la ligne de constat d'audit et le journal des actions
 * daté — remplie avec un cas FICTIF.
 *
 * ⚠️ Règle d'or : aucun de ces contenus ne provient d'une mission réelle. Le
 * domaine est un domaine d'exemple réservé (RFC 2606), les dates et les
 * variations sont inventées, et aucun chiffre de résultat n'y figure. Un
 * garde-fou de test interdit d'y écrire un gain de trafic ou de position.
 */
export type SeoAuditFinding = {
  url: string;
  finding: string;
  evidence: string;
  priority: string;
  effort: string;
};

export type SeoLogEntry = {
  date: string;
  action: string;
  intent: string;
};

export const SEO_AUDIT_SAMPLE: SeoAuditFinding[] = [
  {
    url: "/produits/*?couleur=",
    finding: "Variantes explorées et indexées comme des pages distinctes",
    evidence: "1 pattern d'URL, canonical absente sur le gabarit produit",
    priority: "P1",
    effort: "Faible",
  },
  {
    url: "/blog/",
    finding: "Liste paginée sans lien interne vers les pages commerciales",
    evidence: "Aucun lien sortant contextuel sur le gabarit article",
    priority: "P2",
    effort: "Moyen",
  },
  {
    url: "/contact",
    finding: "Rendue côté client : le HTML initial ne contient ni titre ni NAP",
    evidence: "Réponse serveur brute vs rendu après hydratation",
    priority: "P1",
    effort: "Moyen",
  },
];

export const SEO_ACTION_LOG_SAMPLE: SeoLogEntry[] = [
  {
    date: "12/03",
    action: "Canonical ajoutée sur le gabarit produit",
    intent: "Consolider les variantes sur une URL de référence",
  },
  {
    date: "14/03",
    action: "Sitemap régénéré, 340 URL de facettes retirées",
    intent: "Cesser de déclarer des URL qu'on ne veut pas voir indexées",
  },
  {
    date: "21/03",
    action: "Rendu serveur activé sur /contact",
    intent: "Servir le NAP et le titre sans dépendre du JavaScript",
  },
  {
    date: "02/04",
    action: "Relevé Search Console — aucune conclusion tirée",
    intent: "Trois semaines d'exploration ne suffisent pas à conclure",
  },
];

export const SEO_TECH_FAQS = [
  {
    question: "Travaillez-vous sur un site rendu côté client (React, Vue, SPA) ?",
    answer:
      "Oui. Nous vérifions d'abord ce que voit réellement le robot : rendu du HTML initial, contenu injecté après hydratation, liens accessibles sans JavaScript, codes de statut et balises servies. Selon le constat, la correction passe par du rendu serveur, du prérendu ou une simple restructuration des liens.",
  },
  {
    question: "Comment décidez-vous entre canonical, noindex et redirection 301 ?",
    answer:
      "Par ce que la page doit devenir. Une variante à consolider reçoit une canonical ; une page qui ne doit plus être servie mais reste utile aux visiteurs reçoit un noindex ; une page remplacée par une autre reçoit une 301 vers son équivalent le plus proche. Le choix est consigné URL par URL dans le plan de migration.",
  },
  {
    question: "Analysez-vous les journaux serveur ?",
    answer:
      "Lorsqu'ils sont disponibles et exploitables, oui. Ils permettent de voir la fréquence réelle de passage des robots, les gabarits qui consomment le budget d'exploration et les codes renvoyés. Quand ils ne sont pas accessibles, nous l'écrivons dans le diagnostic plutôt que d'extrapoler.",
  },
  {
    question: "Les Core Web Vitals font-ils partie du périmètre ?",
    answer:
      "Nous mesurons les données de terrain lorsqu'elles existent et les données de laboratoire sinon, puis nous priorisons les correctifs qui touchent le parcours réel. Aucun score cible n'est garanti : la performance dépend aussi de l'hébergement, des scripts tiers et des contenus ajoutés après notre intervention.",
  },
  {
    question: "Quelles données structurées mettez-vous en place ?",
    answer:
      "Celles qui correspondent à un contenu réellement présent sur la page — organisation, fil d'Ariane, article, FAQ, produit, établissement local. Le balisage n'invente jamais une information absente de la page visible, et aucun affichage enrichi n'est promis : Google décide seul de l'utiliser.",
  },
  {
    question: "Comment gérez-vous les robots d'IA et les fichiers robots.txt / llms.txt ?",
    answer:
      "Le devis précise les agents autorisés ou bloqués, les répertoires exclus et la manière dont le sitemap et le fichier llms.txt sont générés. C'est une décision d'exposition qui vous appartient : nous documentons les conséquences de chaque option, sans promettre d'être repris par un assistant.",
  },
  {
    question: "Que se passe-t-il si une mise à jour de Google fait chuter le trafic ?",
    answer:
      "Nous reprenons la mesure avant d'agir : périmètre des pages touchées, requêtes concernées, date exacte et évolution des impressions. Aucune contre-mesure n'est appliquée à l'aveugle, et aucune récupération n'est garantie — ni dans son ampleur, ni dans son délai.",
  },
] as const;

export const SEO_RELATED_RESOURCES = [
  {
    href: "/guides/pourquoi-site-pas-visible-google",
    label: "Visibilité Google",
    title: "Trouver où une URL disparaît entre exploration et clics",
  },
  {
    href: "/services/publicite-en-ligne",
    label: "Acquisition payante",
    title: "Compléter l’organique par des campagnes Google, Meta ou LinkedIn",
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
      `Oui. Nous travaillons la cohérence NAP, Google Business Profile, les avis, les citations, les pages territoriales et leur maillage. Hagnéré Code est installé au ${CONTACT_ADDRESS.street} à ${CONTACT_ADDRESS.locality}, aux portes de Chambéry, et intervient en Savoie comme à distance partout en France.`,
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
