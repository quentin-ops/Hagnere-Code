export type CaseStudy = {
  slug: string;
  /** Title/description SEO dédiés (fallback : template brandName · category). */
  seo?: { title: string; description: string };
  /** Services Hagnéré Code mobilisés sur le cas (maillage interne). */
  services?: { label: string; href: string }[];
  brandName: string;
  brandLogo: string;
  brandColor: string;
  brandSoft: string;
  category: string;
  url: string;
  tagline: string;
  heroIntro: string;
  year: string;
  duration: string;
  team: string[];
  stack: string[];
  context: string;
  problem: { title: string; body: string }[];
  solution: { title: string; body: string }[];
  features: string[];
  metrics: { value: string; label: string; note?: string }[];
  screenshots: {
    title: string;
    caption: string;
    kind: "dashboard" | "form" | "report" | "editorial";
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    initials: string;
  };
};

export const CASES: Record<string, CaseStudy> = {
  "lmnp-ai": {
    slug: "lmnp-ai",
    seo: {
      title: "Étude de cas LMNP.AI · SaaS à 5 400 clients · Hagnéré Code",
      description:
        "Comment on a construit LMNP.AI : SaaS de comptabilité fiscale guidé par IA, MVP en 4 mois, 5 400 clients payants. Stack Laravel, Livewire, Stripe.",
    },
    services: [
      { label: "Développement SaaS", href: "/services/saas-applications-metier" },
    ],
    brandName: "LMNP.AI",
    brandLogo: "L",
    brandColor: "#6D28D9",
    brandSoft: "#EDE9FE",
    category: "SaaS B2C · Comptabilité fiscale",
    url: "https://lmnp.ai",
    tagline: "Le SaaS de compta LMNP/LMP qui rend la liasse fiscale intelligible.",
    heroIntro:
      "Première plateforme française qui fait la comptabilité LMNP au réel en autonomie, guidée par IA, avec télétransmission EDI à la DGFiP.",
    year: "2025",
    duration: "4 mois (MVP) + évolutions continues",
    team: ["Nicolas (CTO)", "Frédéric (Livewire)", "Ryan (IA)", "Arthur (paiements)", "Quentin (produit / UX)"],
    stack: [
      "Laravel 12",
      "Livewire 3",
      "Flux UI",
      "Tailwind v4",
      "Claude Opus 4.7",
      "Prism",
      "PostgreSQL",
      "Stripe",
      "EDI DGFiP",
    ],
    context:
      "Le marché du LMNP est dominé par des expert-comptables à 800-1 500 € / an, ou par des logiciels en marque blanche peu pédagogiques. L'ambition : un produit B2C autonome, pédagogique, et 4 à 6× moins cher, sans jamais sacrifier la conformité.",
    problem: [
      {
        title: "La fiscalité LMNP est incompréhensible pour 90 % des investisseurs",
        body: "Amortissements par composants, régime réel, récupération de déficit, obligations DPE — tous ces concepts sont traités de manière absconse par les logiciels historiques. Résultat : l'investisseur délègue, paie cher, ou abandonne le régime réel au profit du micro-BIC souvent moins avantageux.",
      },
      {
        title: "L'EDI DGFiP est un champ de mines technique",
        body: "La transmission des liasses 2031 et 2033 vers la DGFiP impose un format EDI-TDFC strict, avec certificat requis et contrôles de cohérence. Peu d'éditeurs maîtrisent la chaîne complète.",
      },
      {
        title: "Concurrents : expert-comptable en ligne, pas de self-service guidé",
        body: "Les options existantes laissent l'utilisateur face à des formulaires bruts sans assistance contextuelle.",
      },
    ],
    solution: [
      {
        title: "IA contextualisée à chaque étape",
        body: "À chaque formulaire, Claude Opus 4.7 répond en temps réel aux questions de l'utilisateur avec un contexte fiscal personnalisé (régime, situation, biens). L'IA explique, jamais elle ne décide — traçabilité et responsabilité restent à l'utilisateur.",
      },
      {
        title: "Moteur d'amortissements par composants automatique",
        body: "Moteur fiscal interne qui calcule les amortissements par composants (gros œuvre, toiture, menuiseries, etc.) à partir de la fiche du bien. Conforme BOI-BIC-AMT.",
      },
      {
        title: "Télétransmission EDI intégrée",
        body: "Liasse 2031 et 2033 générées, signées via certificat partenaire, et télétransmises en un clic vers la DGFiP. Accusé de réception sous 24 h.",
      },
      {
        title: "Double offre : autonomie ou validation expert",
        body: "Soit l'utilisateur valide seul (229 € / an), soit un expert-comptable partenaire valide et signe (389 € / an). Même produit, deux niveaux de risque assumé.",
      },
    ],
    features: [
      "Inscription guidée",
      "Gestion multi-biens",
      "Amortissements composants",
      "Déficit reportable",
      "Liasse 2031 / 2033 auto",
      "Télétransmission EDI DGFiP",
      "Assistance IA contextuelle",
      "Bibliothèque de 163 guides",
      "Option validation expert",
    ],
    metrics: [
      { value: "5,4 k", label: "clients actifs", note: "payants en 2025" },
      { value: "163", label: "guides fiscaux rédigés" },
      { value: "15 min", label: "de compta par an", note: "médiane utilisateur" },
      { value: "229 €", label: "prix autonomie", note: "vs 900 € concurrent moyen" },
    ],
    screenshots: [
      {
        title: "Résultat fiscal personnalisé",
        caption:
          "Économie annuelle estimée, régime recommandé, progression de la liasse.",
        kind: "dashboard",
      },
      {
        title: "Assistant IA en contexte",
        caption:
          "L'utilisateur pose ses questions fiscales à Claude — l'IA répond avec le contexte du bien en cours.",
        kind: "form",
      },
      {
        title: "Télétransmission EDI",
        caption: "Génération de la liasse, signature, envoi DGFiP, accusé de réception.",
        kind: "report",
      },
    ],
    testimonial: {
      quote:
        "On a cadré ce SaaS en 6 semaines avec l'équipe. L'impact sur l'adoption du régime réel est concret : 5,4 k clients en moins d'un an.",
      author: "Quentin Hagnéré",
      role: "Fondateur · LMNP.AI (mot du fondateur — produit interne du groupe Hagnéré)",
      initials: "QH",
    },
  },

  "sci-ai": {
    slug: "sci-ai",
    seo: {
      title: "Étude de cas SCI-AI · SaaS compta SCI IR/IS · Hagnéré Code",
      description:
        "Le premier logiciel de comptabilité SCI gérant IR et IS, livré en 5 mois : liasses EDI DGFiP, bilan de clôture en 30 min. Par Hagnéré Code.",
    },
    services: [
      { label: "Développement SaaS", href: "/services/saas-applications-metier" },
    ],
    brandName: "SCI-AI.app",
    brandLogo: "S",
    brandColor: "#0066FF",
    brandSoft: "#E0ECFF",
    category: "SaaS B2C · Comptabilité fiscale",
    url: "https://sci-ai.app",
    tagline: "Comptabilité SCI à l'IR comme à l'IS, liasses 2033 / 2065 / 2072 auto-générées.",
    heroIntro:
      "Le premier logiciel de comptabilité SCI qui gère les deux régimes (IR et IS) dans une seule interface, avec télétransmission EDI DGFiP complète.",
    year: "2025",
    duration: "5 mois",
    team: ["Nicolas (CTO)", "Frédéric (Livewire)", "Ryan (IA)", "Killian (DevOps)", "Quentin (UX / front)"],
    stack: [
      "Laravel 12",
      "Livewire 3",
      "Tailwind v4",
      "PostgreSQL",
      "Redis",
      "Claude Opus 4.7",
      "EDI DGFiP (TDFC)",
      "Stripe",
    ],
    context:
      "Les SCI sont un véhicule d'investissement familial massif en France (plus de 1,5 M immatriculées) mais 70 % sont accompagnées par un cabinet à 1 000-2 500 € / an. L'enjeu : démocratiser la gestion autonome pour les SCI simples (≤ 3 associés, patrimoine locatif direct).",
    problem: [
      {
        title: "La SCI cumule deux régimes fiscaux complexes",
        body: "En IR (par défaut), chaque associé déclare sa quote-part via la 2072. En IS (sur option), la SCI devient assujettie à l'IS avec une 2065. Peu de logiciels gèrent les deux dans une interface unique.",
      },
      {
        title: "Gestion des associés et parts",
        body: "Entrées / sorties d'associés, cessions de parts, démembrement (nue-propriété / usufruit), comptes courants associés — tout ça déclenche des écritures comptables spécifiques qu'un logiciel grand public ne saurait gérer.",
      },
      {
        title: "Amortissements par composants en IS",
        body: "Passage à l'IS = basculement vers une compta d'engagement avec amortissements par composants. Moment charnière où les erreurs coûtent cher.",
      },
    ],
    solution: [
      {
        title: "Interface unifiée IR / IS",
        body: "Un seul parcours qui s'adapte au régime de la SCI. Bascule IR → IS gérée avec génération automatique des écritures d'ouverture IS (bilan initial, amortissements rétroactifs légaux).",
      },
      {
        title: "Module associés complet",
        body: "Registre des associés, gestion des parts, comptes courants, démembrement. Chaque mouvement déclenche les écritures comptables et la mise à jour de la 2072.",
      },
      {
        title: "Télétransmission EDI DGFiP · 3 liasses",
        body: "Liasses 2033 (IR), 2065 (IS) et 2072 (associés) générées et télétransmises en un clic. Accusés de réception conservés.",
      },
      {
        title: "Assistant IA fiscal",
        body: "Claude Opus 4.7 entraîné sur le BOI-IS et le BOFiP SCI pour répondre aux questions en contexte, avec citations des articles CGI de référence.",
      },
    ],
    features: [
      "Gestion IR & IS unifiée",
      "Registre associés complet",
      "Comptes courants associés",
      "Démembrement (NP / US)",
      "Amortissements par composants",
      "Liasse 2033 / 2065 / 2072 auto",
      "Télétransmission EDI DGFiP",
      "Assistant IA fiscal",
      "Bilan et compte de résultat",
    ],
    metrics: [
      { value: "2", label: "régimes gérés (IR/IS)", note: "en parcours unifié" },
      { value: "3", label: "liasses auto-générées" },
      { value: "229 €", label: "/ an autonomie", note: "vs 1 800 € cabinet moyen" },
      { value: "< 30 min", label: "bilan de clôture", note: "médiane utilisateur" },
    ],
    screenshots: [
      {
        title: "Dashboard SCI",
        caption:
          "Bénéfice net, amortissement annuel, détail associés et parts, statut liasses.",
        kind: "dashboard",
      },
      {
        title: "Bascule IR → IS guidée",
        caption:
          "Génération automatique du bilan d'ouverture IS et des amortissements rétroactifs.",
        kind: "form",
      },
      {
        title: "Télétransmission 2065 validée",
        caption: "Accusé de réception DGFiP reçu, archivage 10 ans automatique.",
        kind: "report",
      },
    ],
    testimonial: {
      quote:
        "La bascule IR → IS est le moment le plus risqué pour une SCI. On l'a automatisée proprement grâce à un gros travail de cadrage fiscal avec l'équipe.",
      author: "Quentin Hagnéré",
      role: "Co-fondateur · SCI-AI.app (mot du fondateur — produit interne du groupe Hagnéré)",
      initials: "QH",
    },
  },

  "hagnere-patrimoine": {
    slug: "hagnere-patrimoine",
    seo: {
      title: "Refonte site + CRM patrimoine : +340 % SEO · Hagnéré Code",
      description:
        "Refonte d'un cabinet de gestion de patrimoine : +340 % de trafic en 6 mois, 4,2 % de conversion en RDV, CRM sur mesure. Livré en 6 semaines.",
    },
    services: [
      { label: "Sites vitrines", href: "/services/sites-vitrines" },
      { label: "SEO & référencement", href: "/services/referencement-google" },
    ],
    brandName: "Hagnéré Patrimoine",
    brandLogo: "HP",
    brandColor: "#C9A96E",
    brandSoft: "#FAF3E3",
    category: "Site éditorial + CRM interne · Cabinet CIF",
    url: "https://hagnere-patrimoine.fr",
    tagline: "Site éditorial premium + CRM interne pour piloter des milliers de programmes neufs.",
    heroIntro:
      "Refonte complète d'un cabinet de conseil en gestion de patrimoine — site éditorial premium, CRM interne qui gère des milliers de programmes immobiliers neufs, simulateurs et convertisseurs fiscaux, entonnoirs de conversion défiscalisation.",
    year: "2025",
    duration: "6 semaines + évolutions continues",
    team: ["Quentin (UX / front / SEO)", "Killian (DevOps / hosting)", "Frédéric (back-end / CRM)"],
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind v4",
      "Drizzle ORM",
      "PostgreSQL",
      "Calendly",
      "Plausible",
    ],
    context:
      "Cabinet de gestion de patrimoine agréé CIF · ORIAS basé à Chambéry, 18 M€ sous gestion, 284 clients. Site historique daté, pas de SEO, génération de leads uniquement par recommandation, et aucun outil interne pour gérer le catalogue des programmes immobiliers neufs proposés en défiscalisation. Objectif : doubler le flux entrant qualifié en 6 mois et industrialiser la gestion des programmes côté back-office.",
    problem: [
      {
        title: "Aucune présence SEO",
        body: "Le site existant n'apparaissait sur aucune requête patrimoniale nationale. 100 % du trafic venait du bouche-à-oreille et de quelques backlinks presse.",
      },
      {
        title: "Conversion visiteur → RDV < 0,5 %",
        body: "Pas de qualification, pas de prise de RDV directe, formulaire générique. Les prospects froids abandonnaient avant le contact.",
      },
      {
        title: "Positionnement flou",
        body: "Le site parlait 'gestion de patrimoine' sans promesse claire. Impossible de se différencier face aux dizaines d'autres cabinets CIF régionaux.",
      },
    ],
    solution: [
      {
        title: "Design éditorial premium",
        body: "Palette noir / or, typographies Geist, photographies professionnelles, ton ferme et direct. Positionnement 'cabinet de conseil patrimonial haut de gamme' assumé — quitte à exclure les prospects hors cible.",
      },
      {
        title: "CRM interne · catalogue programmes neufs",
        body: "Back-office sur-mesure pour gérer des milliers de programmes immobiliers neufs (Pinel, Pinel+, LMNP neuf, Denormandie, Malraux). Fiches programme structurées, pièces fiscales, disponibilités, suivi commercial — le commercial pilote son catalogue depuis une seule interface.",
      },
      {
        title: "Simulateurs et convertisseurs fiscaux",
        body: "Suite d'outils intégrés : simulateurs IFI, PER, LMNP, déficit foncier, capacité d'emprunt ; convertisseurs TMI, rendement net, cash-flow. Chaque simulateur sert d'aimant SEO et de point d'entrée d'un entonnoir de conversion vers la prise de RDV.",
      },
      {
        title: "Stratégie SEO longue traîne",
        body: "35 pages piliers rédigées autour des intentions patrimoniales fortes (optimisation fiscale, transmission, SCPI, LMNP, IFI, PER). 200 backlinks patiemment construits sur 4 mois.",
      },
      {
        title: "Tunnel de qualification + Google Ads",
        body: "Formulaire 4 étapes de qualification, RDV Calendly direct avec le fondateur, campagnes Search sur 40 requêtes transactionnelles ('conseil patrimonial [ville]', 'CGP [ville]', 'réduire IFI'). CPA cible < 120 €.",
      },
    ],
    features: [
      "Site éditorial premium",
      "CRM interne programmes neufs (milliers de références)",
      "Simulateurs fiscaux (IFI, PER, LMNP, déficit foncier)",
      "Convertisseurs (TMI, rendement net, capacité d'emprunt)",
      "Entonnoirs de conversion défiscalisation",
      "Tunnel de qualification 4 étapes",
      "Prise de RDV Calendly",
      "35 pages piliers SEO",
      "Google Ads Search + Performance Max",
      "Tracking Plausible + GA4",
      "Accessibilité WCAG AA",
    ],
    metrics: [
      { value: "+ 340 %", label: "trafic organique", note: "en 6 mois" },
      { value: "4,2 %", label: "taux de conversion", note: "visiteurs → RDV qualifié" },
      { value: "× 3", label: "pipeline commercial", note: "en valeur" },
      { value: "98 €", label: "CPA moyen Ads", note: "sous le seuil cible" },
    ],
    screenshots: [
      {
        title: "Page d'accueil éditoriale",
        caption: "Ton assumé, preuve sociale institutionnelle (CIF / ORIAS), offre claire.",
        kind: "editorial",
      },
      {
        title: "Tunnel de qualification",
        caption: "4 étapes pour filtrer les prospects qualifiés avant le RDV.",
        kind: "form",
      },
      {
        title: "CRM interne · programmes neufs",
        caption: "Catalogue de milliers de programmes Pinel / LMNP / Denormandie, fiches structurées, pièces fiscales, suivi commercial du prospect au compromis.",
        kind: "dashboard",
      },
    ],
    testimonial: {
      quote:
        "Refondre le site du cabinet, c'était refondre notre positionnement. On voulait un outil qui qualifie les prospects avant le rendez-vous plutôt qu'une plaquette en ligne.",
      author: "Quentin Hagnéré",
      role: "Fondateur · Hagnéré Patrimoine (mot du fondateur — cabinet du groupe Hagnéré)",
      initials: "QH",
    },
  },

  "hagnere-investissement": {
    slug: "hagnere-investissement",
    seo: {
      title: "Étude de cas : site vitrine à ×2,5 leads · Hagnéré Code",
      description:
        "Site de génération de leads pour un cabinet d'investissement : simulateur de rendement, funnel 3 segments, ×2,5 leads qualifiés. Livré en 8 semaines.",
    },
    services: [
      { label: "Sites vitrines", href: "/services/sites-vitrines" },
      { label: "Publicité en ligne", href: "/services/publicite-en-ligne" },
    ],
    brandName: "Hagnéré Investissement",
    brandLogo: "HI",
    brandColor: "#0F766E",
    brandSoft: "#D1FAE5",
    category: "Site vitrine conversion · Investissement clé en main",
    url: "https://hagnere-investissement.fr",
    tagline: "Le site qui capte des investisseurs immobiliers qualifiés à grande échelle.",
    heroIntro:
      "Plateforme marketing d'un cabinet d'investissement immobilier clé en main, avec simulateur de rendement, funnel de qualification et intégration YouTube.",
    year: "2025",
    duration: "8 semaines",
    team: ["Quentin (UX / front / SEO)", "Killian (DevOps)", "Frédéric (back-end CMS)", "Ryan (intégrations YouTube)"],
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind v4",
      "Drizzle ORM",
      "PostgreSQL",
      "Calendly",
      "YouTube API",
      "Google Ads",
      "Meta Ads",
      "Plausible",
    ],
    context:
      "Cabinet d'investissement immobilier clé en main : recherche, négociation, travaux, location. 612 clients accompagnés depuis 2021. Objectif : industrialiser l'acquisition de leads investisseurs qualifiés via site + contenus vidéo.",
    problem: [
      {
        title: "Leads principalement venus de YouTube sans captage structuré",
        body: "La chaîne YouTube générait du trafic important mais les visiteurs atterrissaient sur un site générique sans parcours de qualification. Perte massive de leads potentiels.",
      },
      {
        title: "Simulateur inexistant — frein commercial",
        body: "Les prospects demandaient systématiquement 'à partir de combien' et 'quel rendement' avant d'accepter un RDV. Répondre à chaque email était chronophage.",
      },
      {
        title: "Pas de segmentation par profil investisseur",
        body: "Investisseurs à 50 k€ et investisseurs à 500 k€ suivaient le même parcours. Mauvaise qualification, temps commercial gâché.",
      },
    ],
    solution: [
      {
        title: "Simulateur de rendement interactif",
        body: "Calculateur en 3 étapes (budget, ville cible, profil fiscal) qui affiche un rendement net estimé, un cash-flow mensuel et une projection 10 ans. Émail capturé à la fin avec téléchargement du rapport PDF.",
      },
      {
        title: "Funnel segmenté par budget",
        body: "3 parcours distincts selon le budget (< 100 k€ / 100-300 k€ / > 300 k€). Chaque segment débouche sur un RDV avec le bon conseiller, avec un script adapté.",
      },
      {
        title: "Intégration YouTube continue",
        body: "Les nouvelles vidéos de la chaîne apparaissent automatiquement dans les pages pertinentes (ex : vidéo Lyon dans la page 'Investir à Lyon'). SEO et temps passé augmentés.",
      },
      {
        title: "Campagnes Meta + Google synchronisées",
        body: "Audiences miroir segmentées sur les 612 clients existants. CPA cible < 80 € sur les investisseurs < 100 k€, < 250 € sur les > 300 k€.",
      },
    ],
    features: [
      "Simulateur de rendement",
      "Funnel 3 segments budget",
      "Pages villes (SEO local)",
      "Intégration YouTube live",
      "Prise de RDV Calendly segmentée",
      "Génération rapport PDF",
      "Google Ads + Meta Ads",
      "Tracking multi-touch attribution",
    ],
    metrics: [
      { value: "612", label: "clients accompagnés", note: "depuis 2021" },
      { value: "7,68 %", label: "rendement net/net moyen", note: "sur leurs projets réalisés — performances passées non garantes du futur, capital non garanti" },
      { value: "× 2,5", label: "leads qualifiés", note: "vs ancien site" },
      { value: "< 80 €", label: "CPA segment A", note: "objectif tenu" },
    ],
    screenshots: [
      {
        title: "Simulateur de rendement",
        caption: "3 étapes, rendement net affiché en temps réel, rapport PDF en sortie.",
        kind: "form",
      },
      {
        title: "Page ville (SEO local)",
        caption: "Chaque ville ciblée a sa propre page avec vidéos YouTube et indicateurs marché.",
        kind: "editorial",
      },
      {
        title: "Dashboard d'acquisition",
        caption: "Attribution multi-touch, coût par segment, qualité de lead.",
        kind: "dashboard",
      },
    ],
    testimonial: {
      quote:
        "L'objectif du simulateur était simple : que le prospect arrive au rendez-vous avec son projet déjà chiffré. C'est ce qui change la nature de la conversation commerciale.",
      author: "Quentin Hagnéré",
      role: "Fondateur · Hagnéré Investissement (mot du fondateur — cabinet du groupe Hagnéré)",
      initials: "QH",
    },
  },
};

export const CASE_SLUGS = Object.keys(CASES);
