/**
 * Offre Hagnéré Code rattachable au *type* de produit analysé.
 *
 * Ces entrées décrivent uniquement nos services : elles ne décrivent aucune
 * intervention sur les produits du groupe analysés dans ces fiches, et ne
 * doivent jamais être présentées comme telles (CLAUDE.md, règle d'or).
 */
export type RelatedService = {
  href: string;
  label: string;
  blurb: string;
};

export const RELATED_SERVICES: Record<string, RelatedService> = {
  "saas-applications-metier": {
    href: "/services/saas-applications-metier",
    label: "Développement SaaS sur mesure",
    blurb: "Plateformes métier, espaces clients, abonnements et facturation.",
  },
  "outils-internes-sur-mesure": {
    href: "/services/outils-internes-sur-mesure",
    label: "Outils internes sur mesure",
    blurb: "Interfaces d'administration, workflows et automatisations métier.",
  },
  "maintenance-evolution": {
    href: "/services/maintenance-evolution",
    label: "Maintenance & évolution",
    blurb: "Correctifs, mises à jour et évolutions après la mise en ligne.",
  },
  "securite-rgpd": {
    href: "/services/securite-rgpd",
    label: "Sécurité & RGPD",
    blurb: "Conformité, hébergement en France, registre et sous-traitance.",
  },
  "sites-vitrines": {
    href: "/services/sites-vitrines",
    label: "Sites vitrines & landings",
    blurb: "Sites de présentation orientés prise de contact et rendez-vous.",
  },
  "referencement-google": {
    href: "/services/referencement-google",
    label: "SEO & référencement",
    blurb: "Contenu, technique et netlinking pour la recherche Google.",
  },
  "publicite-en-ligne": {
    href: "/services/publicite-en-ligne",
    label: "Publicité en ligne",
    blurb: "Acquisition payante et mesure des conversions.",
  },
  "audit-technique": {
    href: "/services/audit-technique",
    label: "Audit technique",
    blurb: "Revue de code, performance, sécurité et dette technique.",
  },
};

export type CaseStudy = {
  slug: string;
  /** Title/description SEO dédiés (fallback : template brandName · category). */
  seo?: { title: string; description: string };
  brandName: string;
  brandLogo: string;
  brandColor: string;
  brandSoft: string;
  category: string;
  url: string;
  sourceCheckedAt: string;
  tagline: string;
  heroIntro: string;
  status: string;
  engagement: string;
  context: string;
  /**
   * Ce que la page liée met en avant, en trois entrées.
   *
   * La fiche exposait quatre sections consécutives pour un seul inventaire :
   * `context` en prose, `problem` en cartes sombres, `solution` en cartes
   * claires — mêmes faits, autre couleur — puis `features` en pastilles. Le
   * lecteur croyait avancer et tournait en rond. `solution` a été retiré :
   * chacune de ses entrées reformulait une entrée de `problem` ou une pastille
   * de `features`, et rien d'autre. Ce qu'il portait de plus précis (les
   * formulaires SCI) a été replacé dans `problem`.
   */
  problem: { title: string; body: string }[];
  features: string[];
  highlights: { value: string; label: string }[];
  /**
   * Note éditoriale de l'auteur — JAMAIS un avis client.
   *
   * Le champ s'appelait `testimonial`. Le contenu, lui, a toujours été
   * conforme : il est rendu sous l'étiquette « Note éditoriale · pas un avis
   * client » et signé de l'auteur du site. Mais un champ nommé `testimonial`
   * sur une page de réalisations est une invitation à y mettre un jour un vrai
   * témoignage — ce que la règle d'or du dépôt interdit absolument, faute de
   * client externe à citer. Le nom porte désormais la contrainte.
   */
  editorialNote: {
    quote: string;
    author: string;
    role: string;
    initials: string;
  };
  /**
   * Clés de RELATED_SERVICES : l'offre Hagnéré Code correspondant au *type*
   * de produit analysé. Jamais une prestation réalisée pour cette marque.
   */
  relatedServices: string[];
};

const PUBLIC_SOURCE_CHECKED_AT = "20 juillet 2026";

export const CASES: Record<string, CaseStudy> = {
  "lmnp-ai": {
    slug: "lmnp-ai",
    seo: {
      title: "Produit du groupe : LMNP.AI · Hagnéré Code",
      description:
        "Analyse éditoriale d'un produit du groupe Hagnéré : fonctions et offres visibles sur LMNP.AI, sans attribution de sa conception à Hagnéré Code.",
    },
    brandName: "LMNP.AI",
    brandLogo: "L",
    brandColor: "#6D28D9",
    brandSoft: "#EDE9FE",
    category: "Logiciel en ligne · Comptabilité LMNP/LMP",
    url: "https://lmnp.ai",
    sourceCheckedAt: PUBLIC_SOURCE_CHECKED_AT,
    tagline: "Une page publique consacrée à la comptabilité LMNP/LMP au régime réel.",
    heroIntro:
      "LMNP.AI est un produit du groupe Hagnéré, pas un client indépendant. Cette analyse recense uniquement les fonctions et offres affichées sur LMNP.AI et ne prouve ni l'auteur du code, ni l'équipe, ni la technologie utilisée, ni un résultat obtenu.",
    status: "Groupe Hagnéré · analyse publique",
    engagement: `Page publique du groupe consultée le ${PUBLIC_SOURCE_CHECKED_AT}`,
    context:
      "La page publique présente un logiciel de comptabilité pour les loueurs en meublé LMNP ou LMP. Elle organise son offre autour de la tenue comptable, des amortissements, des documents fiscaux, de la transmission EDI, de deux niveaux d'accompagnement et de ressources éditoriales.",
    problem: [
      {
        title: "Rendre l'offre lisible",
        body: "Le site distingue publiquement une formule Autonomie et une formule avec expert-comptable, avec un périmètre affiché pour chacune.",
      },
      {
        title: "Regrouper les fonctions comptables annoncées",
        body: "La navigation publique cite notamment la gestion multi-biens, l'amortissement automatique, le fichier FEC et l'aide à la déclaration de revenus.",
      },
      {
        title: "Documenter le parcours déclaratif",
        body: "Le site décrit la génération des formulaires 2031 et des tableaux 2033 ainsi que leur transmission EDI par l'intermédiaire d'un partenaire.",
      },
    ],
    features: [
      "Comptabilité LMNP/LMP",
      "Gestion multi-biens",
      "Plan d'amortissement suggéré",
      "Formulaire 2031 et tableaux 2033",
      "Fichier FEC",
      "Transmission EDI",
      "Aide à la déclaration de revenus",
      "Offres Autonomie et Expert-comptable",
      "Guides et simulateurs publics",
    ],
    highlights: [
      { value: "LMNP/LMP", label: "régimes présentés" },
      { value: "Multi-biens", label: "gestion annoncée" },
      { value: "2031/2033", label: "documents cités" },
      { value: "EDI", label: "transmission affichée" },
    ],
    editorialNote: {
      quote:
        "Cette fiche se limite volontairement à ce qu'un visiteur peut vérifier sur la page publique liée.",
      author: "Quentin Hagnéré",
      role: "Note éditoriale de l'auteur · pas un avis client",
      initials: "QH",
    },
    relatedServices: [
      "saas-applications-metier",
      "outils-internes-sur-mesure",
      "maintenance-evolution",
    ],
  },

  "sci-ai": {
    slug: "sci-ai",
    seo: {
      title: "Produit du groupe : SCI-AI.app · Hagnéré Code",
      description:
        "Analyse éditoriale d'un produit du groupe Hagnéré : fonctions visibles sur SCI-AI.app, sans attribution de sa conception à Hagnéré Code.",
    },
    brandName: "SCI-AI.app",
    brandLogo: "S",
    brandColor: "#0066FF",
    brandSoft: "#E0ECFF",
    category: "Logiciel en ligne · Comptabilité SCI",
    url: "https://sci-ai.app",
    sourceCheckedAt: PUBLIC_SOURCE_CHECKED_AT,
    tagline: "Une page publique consacrée à la comptabilité des SCI à l'IR et à l'IS.",
    heroIntro:
      "SCI-AI.app est un produit du groupe Hagnéré, pas un client indépendant. Cette analyse recense uniquement les fonctions et offres affichées sur SCI-AI.app et ne prouve ni l'auteur du code, ni l'équipe, ni la technologie utilisée, ni un résultat obtenu.",
    status: "Groupe Hagnéré · analyse publique",
    engagement: `Page publique du groupe consultée le ${PUBLIC_SOURCE_CHECKED_AT}`,
    context:
      "La page publique présente un logiciel de comptabilité pour les SCI à l'IR et à l'IS. Elle expose les déclarations associées à chaque régime, la gestion des associés et des parts, des documents comptables et la transmission EDI.",
    problem: [
      {
        title: "Distinguer les régimes fiscaux",
        body: "Le site sépare publiquement le formulaire 2072-C ou 2072-S pour les SCI non soumises à l'IS et la déclaration 2065 accompagnée des tableaux 2033-A à 2033-G pour les SCI au réel simplifié à l'IS.",
      },
      {
        title: "Présenter la gestion des associés",
        body: "La navigation publique cite les comptes courants, les mouvements de capital, les cessions, donations et démembrements de parts.",
      },
      {
        title: "Rendre les documents accessibles",
        body: "Le site annonce la génération de documents comptables, un fichier FEC et la transmission EDI des déclarations concernées.",
      },
    ],
    features: [
      "Régimes SCI à l'IR et à l'IS",
      "Formulaires 2072-C et 2072-S",
      "Déclaration 2065 et tableaux 2033-A à 2033-G",
      "Comptes courants d'associés",
      "Capital et parts sociales",
      "Fichier FEC",
      "Transmission EDI",
      "Offres Autonomie et Expert-comptable",
    ],
    highlights: [
      { value: "IR", label: "formulaires 2072 cités" },
      { value: "IS", label: "déclaration 2065 citée" },
      { value: "2033", label: "tableaux cités pour l'IS" },
      { value: "EDI", label: "transmission affichée" },
    ],
    editorialNote: {
      quote:
        "Cette fiche sépare les éléments directement lisibles sur le site des informations techniques qui ne sont pas publiées.",
      author: "Quentin Hagnéré",
      role: "Note éditoriale de l'auteur · pas un avis client",
      initials: "QH",
    },
    relatedServices: [
      "saas-applications-metier",
      "outils-internes-sur-mesure",
      "securite-rgpd",
    ],
  },

  "hagnere-patrimoine": {
    slug: "hagnere-patrimoine",
    seo: {
      title: "Société du groupe : Hagnéré Patrimoine",
      description:
        "Analyse éditoriale d'une société du groupe Hagnéré : contenus visibles sur Hagnéré Patrimoine, sans attribution de sa conception à Hagnéré Code.",
    },
    brandName: "Hagnéré Patrimoine",
    brandLogo: "HP",
    brandColor: "#C9A96E",
    brandSoft: "#FAF3E3",
    category: "Site éditorial · Conseil patrimonial",
    url: "https://hagnere-patrimoine.fr",
    sourceCheckedAt: PUBLIC_SOURCE_CHECKED_AT,
    tagline: "Un site public qui organise expertises, simulateurs, guides et prise de contact.",
    heroIntro:
      "Hagnéré Patrimoine est une société du groupe Hagnéré, pas un client indépendant. Cette analyse recense uniquement les contenus et parcours visibles sur son site et ne prouve ni l'auteur du code, ni un outil interne, ni l'équipe, ni la technologie utilisée, ni une performance commerciale.",
    status: "Groupe Hagnéré · analyse publique",
    engagement: `Page publique du groupe consultée le ${PUBLIC_SOURCE_CHECKED_AT}`,
    context:
      "La page publique présente un cabinet de gestion de patrimoine et de fortune, ses informations réglementaires, un catalogue d'expertises, des simulateurs, des guides et plusieurs portes d'entrée vers un rendez-vous ou un bilan patrimonial.",
    problem: [
      {
        title: "Structurer un catalogue étendu",
        body: "La page regroupe publiquement les expertises et solutions par familles afin d'aider le visiteur à repérer le sujet qui correspond à sa recherche.",
      },
      {
        title: "Donner accès à des outils publics",
        body: "Une rubrique Simulateurs rassemble plusieurs outils de calcul et de comparaison accessibles depuis le site.",
      },
      {
        title: "Relier information et prise de contact",
        body: "Les contenus publics conduisent vers un contact, un bilan patrimonial ou une demande de rendez-vous selon la page consultée.",
      },
    ],
    features: [
      "Présentation des expertises",
      "Informations réglementaires affichées",
      "Lien public vers l'ORIAS",
      "Catalogue de solutions patrimoniales",
      "Simulateurs publics",
      "Guides patrimoniaux",
      "Prise de contact",
      "Demande de bilan patrimonial",
    ],
    highlights: [
      { value: "Expertises", label: "catalogue public" },
      { value: "ORIAS", label: "lien de vérification affiché" },
      { value: "Simulateurs", label: "outils accessibles" },
      { value: "Guides", label: "ressources publiques" },
    ],
    editorialNote: {
      quote:
        "Cette fiche n'attribue pas à Hagnéré Code les éléments internes que la page publique ne permet pas de vérifier.",
      author: "Quentin Hagnéré",
      role: "Note éditoriale de l'auteur · pas un avis client",
      initials: "QH",
    },
    relatedServices: [
      "sites-vitrines",
      "referencement-google",
      "audit-technique",
    ],
  },

  "hagnere-investissement": {
    slug: "hagnere-investissement",
    seo: {
      title: "Société du groupe : Hagnéré Investissement",
      description:
        "Analyse éditoriale d'une société du groupe Hagnéré : contenus visibles sur Hagnéré Investissement, sans attribution de sa conception à Hagnéré Code.",
    },
    brandName: "Hagnéré Investissement",
    brandLogo: "HI",
    brandColor: "#0F766E",
    brandSoft: "#D1FAE5",
    category: "Site vitrine · Investissement locatif",
    url: "https://hagnere-investissement.fr",
    sourceCheckedAt: PUBLIC_SOURCE_CHECKED_AT,
    tagline: "Un site public qui présente un service, un mini-simulateur et une prise de rendez-vous.",
    heroIntro:
      "Hagnéré Investissement est une société du groupe Hagnéré, pas un client indépendant. Cette analyse recense uniquement les contenus et parcours visibles sur son site et ne prouve ni l'auteur du code, ni l'équipe, ni la technologie, ni les canaux d'acquisition, ni les résultats commerciaux.",
    status: "Groupe Hagnéré · analyse publique",
    engagement: `Page publique du groupe consultée le ${PUBLIC_SOURCE_CHECKED_AT}`,
    context:
      "La page publique présente un accompagnement en investissement locatif clé en main. Elle expose le service et sa tarification, un mini-simulateur indicatif, des pages d'information, des partenaires et plusieurs liens de prise de rendez-vous.",
    problem: [
      {
        title: "Expliquer le périmètre du service",
        body: "Le site décrit publiquement les étapes de l'accompagnement, affiche une tarification et propose un tableau comparatif.",
      },
      {
        title: "Proposer un premier calcul indicatif",
        body: "Le mini-simulateur visible demande un budget, un objectif et un horizon avant d'afficher une estimation accompagnée d'hypothèses et de réserves.",
      },
      {
        title: "Orienter vers des informations ou un rendez-vous",
        body: "La navigation publique relie les pages de stratégie, de fiscalité, d'étapes et de zone d'investissement aux appels à la prise de rendez-vous.",
      },
    ],
    features: [
      "Présentation du service clé en main",
      "Tableau comparatif public",
      "Tarification affichée",
      "Mini-simulateur budget, objectif et horizon",
      "Estimation accompagnée d'hypothèses indicatives",
      "Prise de rendez-vous",
      "Pages de stratégie, fiscalité, étapes et zone",
      "Présentation des partenaires",
    ],
    highlights: [
      { value: "Service", label: "périmètre présenté" },
      { value: "Simulateur", label: "outil public indicatif" },
      { value: "Ressources", label: "pages explicatives" },
      { value: "RDV", label: "liens visibles" },
    ],
    editorialNote: {
      quote:
        "Cette fiche exclut les technologies, canaux d'acquisition et mesures internes que le site public ne documente pas.",
      author: "Quentin Hagnéré",
      role: "Note éditoriale de l'auteur · pas un avis client",
      initials: "QH",
    },
    relatedServices: [
      "sites-vitrines",
      "referencement-google",
      "publicite-en-ligne",
    ],
  },
};

export const CASE_SLUGS = Object.keys(CASES);
