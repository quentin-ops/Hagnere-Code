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
  status: string;
  engagement: string;
  team: string[];
  stack: string[];
  context: string;
  problem: { title: string; body: string }[];
  solution: { title: string; body: string }[];
  features: string[];
  highlights: { value: string; label: string }[];
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
      title: "Étude de cas LMNP.AI · SaaS de comptabilité · Hagnéré Code",
      description:
        "Conception de LMNP.AI : parcours de comptabilité fiscale guidé, amortissements, liasses et télétransmission EDI. Architecture et modules livrés.",
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
      "Plateforme de comptabilité LMNP/LMP au régime réel, avec parcours guidé, assistance contextuelle et télétransmission EDI à la DGFiP.",
    status: "En production",
    engagement: "Produit interne · évolutions continues",
    team: ["Nicolas (CTO)", "Frédéric (Livewire)", "Ryan (IA)", "Arthur (paiements)", "Quentin (produit / UX)"],
    stack: [
      "Laravel 12",
      "Livewire 3",
      "Flux UI",
      "Tailwind v4",
      "Assistant IA",
      "Prism",
      "PostgreSQL",
      "Stripe",
      "EDI DGFiP",
    ],
    context:
      "Au régime réel, l'utilisateur doit réunir des informations comptables, comprendre les amortissements et préparer une liasse fiscale. Le produit a été conçu pour organiser ces étapes dans un parcours explicite, avec des contrôles et des explications en contexte.",
    problem: [
      {
        title: "La fiscalité LMNP demande un parcours pédagogique",
        body: "Amortissements par composants, régime réel et suivi des déficits mobilisent plusieurs notions techniques. Une succession de formulaires sans explication ne suffit pas à guider l'utilisateur ni à lui permettre de contrôler les informations saisies.",
      },
      {
        title: "L'EDI DGFiP impose une chaîne technique stricte",
        body: "La transmission des liasses 2031 et 2033 utilise le format EDI-TDFC, un certificat et des contrôles de cohérence. Le produit doit suivre chaque étape, du fichier généré jusqu'au retour de la télétransmission.",
      },
      {
        title: "Les formulaires ont besoin de contexte",
        body: "Le parcours devait rapprocher chaque question des informations du bien et de la situation déclarée, tout en laissant les données et la validation finale visibles par l'utilisateur.",
      },
    ],
    solution: [
      {
        title: "IA contextualisée à chaque étape",
        body: "À chaque formulaire, l'assistant répond aux questions à partir du contexte fiscal renseigné (régime, situation, biens). Il fournit des explications ; les données utilisées et la validation finale restent du ressort de l'utilisateur.",
      },
      {
        title: "Moteur d'amortissements par composants automatique",
        body: "Le moteur prépare les amortissements par composants à partir de la fiche du bien et rend les hypothèses consultables avant validation.",
      },
      {
        title: "Télétransmission EDI intégrée",
        body: "Les liasses 2031 et 2033 peuvent être générées, transmises via le certificat du partenaire EDI et suivies jusqu'au retour de traitement de la DGFiP.",
      },
      {
        title: "Double offre : autonomie ou validation expert",
        body: "Le même parcours prend en charge une utilisation autonome ou une formule incluant l'intervention d'un expert-comptable partenaire. Le contenu précis des offres est présenté sur le site du produit.",
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
      "Bibliothèque de guides fiscaux",
      "Option validation expert",
    ],
    highlights: [
      { value: "2031 + 2033", label: "liasses prises en charge" },
      { value: "EDI", label: "télétransmission DGFiP" },
      { value: "Multi-biens", label: "parcours de gestion" },
      { value: "Guides", label: "aide fiscale en contexte" },
    ],
    screenshots: [
      {
        title: "Résultat fiscal personnalisé",
        caption:
          "Hypothèses calculées à partir des données saisies, avec progression de la liasse et étapes de validation.",
        kind: "dashboard",
      },
      {
        title: "Assistant IA en contexte",
        caption:
          "L'utilisateur pose ses questions à l'assistant, qui répond avec le contexte du bien en cours.",
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
        "Nous avons cadré ce produit autour d'un principe : expliquer chaque étape et laisser à l'utilisateur la visibilité sur les données transmises.",
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
        "Conception de SCI-AI.app : parcours distincts pour SCI à l'IR et à l'IS, déclarations 2072 et 2065, liasse 2033 selon le régime applicable.",
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
    tagline: "Comptabilité SCI à l'IR comme à l'IS, avec les déclarations adaptées à chaque régime.",
    heroIntro:
      "Un parcours unifié pour gérer une SCI à l'IR ou à l'IS, préparer les déclarations correspondantes et suivre leur télétransmission.",
    status: "En production",
    engagement: "Produit interne · évolutions continues",
    team: ["Nicolas (CTO)", "Frédéric (Livewire)", "Ryan (IA)", "Killian (DevOps)", "Quentin (UX / front)"],
    stack: [
      "Laravel 12",
      "Livewire 3",
      "Tailwind v4",
      "PostgreSQL",
      "Redis",
      "Assistant IA",
      "EDI DGFiP (TDFC)",
      "Stripe",
    ],
    context:
      "Les obligations déclaratives d'une SCI diffèrent selon son régime fiscal. Une SCI non soumise à l'IS déclare ses revenus fonciers avec une 2072 ; une SCI à l'IS dépose une 2065 accompagnée de la liasse applicable. Le produit devait rendre cette distinction explicite tout en centralisant la gestion des associés.",
    problem: [
      {
        title: "La SCI cumule deux régimes fiscaux complexes",
        body: "Une SCI non soumise à l'IS dépose une déclaration 2072 et le résultat est réparti entre les associés. Une SCI à l'IS dépose une déclaration 2065 accompagnée des tableaux de sa liasse fiscale.",
      },
      {
        title: "Gestion des associés et parts",
        body: "Entrées et sorties d'associés, cessions de parts, démembrement et comptes courants exigent des données cohérentes entre le registre, la comptabilité et les déclarations.",
      },
      {
        title: "Amortissements par composants en IS",
        body: "Passage à l'IS = basculement vers une compta d'engagement avec amortissements par composants. Moment charnière où les erreurs coûtent cher.",
      },
    ],
    solution: [
      {
        title: "Interface unifiée IR / IS",
        body: "Un seul parcours adapte les écrans et les contrôles au régime de la SCI. Lors d'une transition vers l'IS, les écritures d'ouverture et les hypothèses sont préparées pour être contrôlées avant validation.",
      },
      {
        title: "Module associés complet",
        body: "Registre des associés, gestion des parts, comptes courants et démembrement sont regroupés dans le même module. Les informations utiles à la répartition du résultat et à la déclaration 2072 restent consultables.",
      },
      {
        title: "Déclarations adaptées au régime fiscal",
        body: "Pour une SCI non soumise à l'IS, le parcours prépare la déclaration 2072-C ou 2072-S. Pour une SCI à l'IS, il prépare la déclaration 2065 et, au régime réel simplifié, les tableaux 2033-A à 2033-G. La liasse 2033 n'est pas une déclaration de SCI à l'IR.",
      },
      {
        title: "Assistant IA fiscal",
        body: "L'assistant formule des réponses en contexte à partir de documents administratifs de référence et affiche les sources utilisées pour permettre leur contrôle.",
      },
    ],
    features: [
      "Gestion IR & IS unifiée",
      "Registre associés complet",
      "Comptes courants associés",
      "Démembrement (NP / US)",
      "Amortissements par composants",
      "Déclaration 2072 pour les SCI non soumises à l'IS",
      "Déclaration 2065 pour les SCI à l'IS",
      "Tableaux 2033 au réel simplifié IS",
      "Télétransmission EDI DGFiP",
      "Assistant IA fiscal",
      "Bilan et compte de résultat",
    ],
    highlights: [
      { value: "IR", label: "déclaration 2072" },
      { value: "IS", label: "déclaration 2065" },
      { value: "2033", label: "tableaux au réel simplifié IS" },
      { value: "Sources", label: "références administratives visibles" },
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
          "Écritures d'ouverture et hypothèses préparées dans un parcours de contrôle avant validation.",
        kind: "form",
      },
      {
        title: "Suivi de la déclaration 2065",
        caption: "Statut de télétransmission et retour de traitement regroupés dans le dossier.",
        kind: "report",
      },
    ],
    testimonial: {
      quote:
        "Le cadrage a commencé par séparer clairement les obligations d'une SCI non soumise à l'IS de celles d'une SCI à l'IS, avant de concevoir les écrans.",
      author: "Quentin Hagnéré",
      role: "Co-fondateur · SCI-AI.app (mot du fondateur — produit interne du groupe Hagnéré)",
      initials: "QH",
    },
  },

  "hagnere-patrimoine": {
    slug: "hagnere-patrimoine",
    seo: {
      title: "Refonte site et CRM patrimoine · Hagnéré Code",
      description:
        "Étude de cas Hagnéré Patrimoine : site éditorial, CRM interne, simulateurs, parcours de qualification et prise de rendez-vous.",
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
    tagline: "Site éditorial et CRM interne pour structurer les contenus, les programmes et les rendez-vous.",
    heroIntro:
      "Refonte du site d'un cabinet de conseil en gestion de patrimoine, avec CRM interne, simulateurs, contenus éditoriaux et parcours de qualification.",
    status: "En production",
    engagement: "Produit interne · évolutions continues",
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
      "Le cabinet disposait d'un site à refondre et de plusieurs flux de travail séparés pour les contenus, les programmes immobiliers et le suivi des demandes. Le projet a consisté à réunir la vitrine publique, les outils de simulation, la prise de rendez-vous et le back-office dans un ensemble cohérent.",
    problem: [
      {
        title: "Une architecture éditoriale à reconstruire",
        body: "Le site existant ne structurait pas clairement les différentes intentions patrimoniales ni les liens entre contenus, outils et prise de rendez-vous.",
      },
      {
        title: "Un parcours de contact trop générique",
        body: "Le formulaire ne permettait pas de préciser suffisamment le besoin avant le rendez-vous. Le nouveau parcours devait recueillir le contexte utile sans transformer le site en questionnaire interminable.",
      },
      {
        title: "Positionnement flou",
        body: "Le site parlait de gestion de patrimoine sans expliciter les besoins traités ni le parcours proposé à chaque profil de visiteur.",
      },
    ],
    solution: [
      {
        title: "Design éditorial premium",
        body: "Palette noir / or, typographies Geist, photographies professionnelles, ton ferme et direct. Positionnement 'cabinet de conseil patrimonial haut de gamme' assumé — quitte à exclure les prospects hors cible.",
      },
      {
        title: "CRM interne · catalogue programmes neufs",
        body: "Le back-office regroupe les fiches de programmes immobiliers neufs, les documents, les disponibilités et le suivi commercial dans une interface unique.",
      },
      {
        title: "Simulateurs et convertisseurs fiscaux",
        body: "Des outils thématiques sont intégrés aux contenus afin d'aider le visiteur à préparer sa réflexion et, s'il le souhaite, transmettre son contexte avant un rendez-vous.",
      },
      {
        title: "Stratégie SEO longue traîne",
        body: "Les contenus sont organisés autour d'intentions patrimoniales distinctes, avec des pages piliers, des guides, des liens internes et des métadonnées propres à chaque sujet.",
      },
      {
        title: "Tunnel de qualification + Google Ads",
        body: "Le formulaire progressif, la prise de rendez-vous et le suivi des événements sont reliés. Les éventuelles campagnes d'acquisition utilisent les mêmes points de mesure, sans promesse de coût ni de volume.",
      },
    ],
    features: [
      "Site éditorial premium",
      "CRM interne programmes neufs",
      "Simulateurs fiscaux (IFI, PER, LMNP, déficit foncier)",
      "Convertisseurs (TMI, rendement net, capacité d'emprunt)",
      "Entonnoirs de conversion défiscalisation",
      "Tunnel de qualification 4 étapes",
      "Prise de RDV Calendly",
      "Pages piliers et guides SEO",
      "Google Ads Search + Performance Max",
      "Tracking Plausible + GA4",
      "Bonnes pratiques d'accessibilité",
    ],
    highlights: [
      { value: "Site", label: "architecture éditoriale" },
      { value: "CRM", label: "back-office interne" },
      { value: "SEO", label: "pages et maillage thématique" },
      { value: "RDV", label: "parcours de qualification" },
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
        caption: "Fiches structurées, documents, disponibilités et suivi commercial regroupés dans le back-office.",
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
      title: "Étude de cas Hagnéré Investissement · Hagnéré Code",
      description:
        "Conception d'un site pour un cabinet d'investissement immobilier : simulateur, parcours de qualification, prise de rendez-vous et contenus vidéo.",
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
    tagline: "Un site qui relie contenus, simulation et qualification des demandes.",
    heroIntro:
      "Plateforme marketing d'un cabinet d'investissement immobilier clé en main, avec simulateur de rendement, funnel de qualification et intégration YouTube.",
    status: "En production",
    engagement: "Produit interne · évolutions continues",
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
      "Le cabinet accompagne des projets d'investissement immobilier clé en main, de la recherche du bien à sa mise en location. Le site devait relier les contenus vidéo, une première simulation, la qualification du projet et la prise de rendez-vous.",
    problem: [
      {
        title: "Leads principalement venus de YouTube sans captage structuré",
        body: "Les vidéos renvoyaient vers un site générique, sans continuité claire entre le sujet consulté, les informations demandées et le rendez-vous.",
      },
      {
        title: "Simulateur inexistant — frein commercial",
        body: "Les prospects demandaient systématiquement 'à partir de combien' et 'quel rendement' avant d'accepter un RDV. Répondre à chaque email était chronophage.",
      },
      {
        title: "Pas de segmentation par profil investisseur",
        body: "Des profils aux budgets et objectifs différents suivaient le même parcours, ce qui limitait la précision des informations recueillies avant le rendez-vous.",
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
        body: "Les nouvelles vidéos peuvent être rattachées automatiquement aux pages pertinentes, par exemple une vidéo sur Lyon à la page consacrée à cette ville.",
      },
      {
        title: "Campagnes Meta + Google synchronisées",
        body: "Les événements du site alimentent une mesure commune aux canaux Google et Meta. Les budgets, audiences et objectifs sont définis par campagne, sans coût d'acquisition garanti.",
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
    highlights: [
      { value: "Simulateur", label: "première estimation" },
      { value: "Funnel", label: "qualification du projet" },
      { value: "Vidéo", label: "contenus reliés aux pages" },
      { value: "RDV", label: "orientation vers un conseiller" },
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
        "L'objectif du simulateur était simple : permettre au prospect de préparer des hypothèses avant le rendez-vous et donner au conseiller un contexte exploitable.",
      author: "Quentin Hagnéré",
      role: "Fondateur · Hagnéré Investissement (mot du fondateur — cabinet du groupe Hagnéré)",
      initials: "QH",
    },
  },
};

export const CASE_SLUGS = Object.keys(CASES);
