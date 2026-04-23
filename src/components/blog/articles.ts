export type PlannedArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  plannedDate: string; // "Mai 2026"
  readTime: string; // "8 min"
  author: string;
  status: "planned" | "draft" | "published";
  coverKind: "code" | "chart" | "quote" | "mock";
  accent: string; // color for cover accent
};

export const PLANNED_ARTICLES: PlannedArticle[] = [
  {
    slug: "claude-code-production-retour-experience",
    title:
      "18 mois de Claude Code en production : ce qui marche, ce qui ne marche pas",
    excerpt:
      "Retour d'expérience terrain sur l'utilisation quotidienne de Claude Code dans une agence de dev : gain de temps réel, écueils fréquents, workflows testés, et ce qu'on ne ferait plus jamais à la main.",
    category: "Méthode & outillage",
    plannedDate: "Mai 2026",
    readTime: "12 min",
    author: "Quentin Hagnéré",
    status: "planned",
    coverKind: "code",
    accent: "#6D28D9",
  },
  {
    slug: "laravel-13-features-ia-native",
    title:
      "Laravel 13 · la couche IA native change la donne pour les SaaS français",
    excerpt:
      "Décryptage des nouveautés IA intégrées à Laravel 13, des cas d'usage concrets sur 4 projets en prod, et un comparatif honnête avec Prism et les solutions maison.",
    category: "Stack technique",
    plannedDate: "Mai 2026",
    readTime: "10 min",
    author: "Thomas M.",
    status: "planned",
    coverKind: "mock",
    accent: "#FF2D20",
  },
  {
    slug: "edi-dgfip-integration-laravel",
    title:
      "Intégrer l'EDI DGFiP dans une application Laravel : guide technique complet",
    excerpt:
      "Protocole TDFC, certificat éditeur, génération des liasses 2031/2033/2065, télétransmission, accusés de réception. Le guide que nous aurions voulu trouver en démarrant LMNP.AI.",
    category: "Fiscalité · Compta",
    plannedDate: "Juin 2026",
    readTime: "18 min",
    author: "Sami L.",
    status: "planned",
    coverKind: "chart",
    accent: "#0066FF",
  },
  {
    slug: "forfait-fixe-vs-regie-agence-dev",
    title:
      "Forfait fixe ou régie : ce que personne ne dit aux PME qui s'apprêtent à signer",
    excerpt:
      "Les zones d'ombre du contrat en régie, les pièges du forfait mal rédigé, et comment structurer un accord qui protège vraiment le client final sur des tickets 25-60 k€.",
    category: "Business & contrats",
    plannedDate: "Juin 2026",
    readTime: "9 min",
    author: "Quentin Hagnéré",
    status: "planned",
    coverKind: "quote",
    accent: "#0F766E",
  },
  {
    slug: "saas-comptable-rgpd-hebergement-france",
    title:
      "SaaS comptable · RGPD · hébergement France : la checklist de conformité pour passer l'audit du cabinet",
    excerpt:
      "Ce que les experts-comptables vous demanderont quand vous leur proposerez votre outil : DPA, localisation, certifs, politique de rétention. Fichier PDF téléchargeable inclus.",
    category: "Sécurité & RGPD",
    plannedDate: "Juillet 2026",
    readTime: "14 min",
    author: "Antoine K.",
    status: "planned",
    coverKind: "chart",
    accent: "#C9A96E",
  },
  {
    slug: "choisir-entre-freelance-agence-cabinet",
    title:
      "Freelance, agence ou grand cabinet : l'arbre de décision pour un dirigeant qui ne sait pas coder",
    excerpt:
      "Critères objectifs (budget, complexité, dépendance, maintenance) et arbre de décision pratique. On dit aussi quand ce n'est pas nous qu'il vous faut.",
    category: "Business & contrats",
    plannedDate: "Juillet 2026",
    readTime: "7 min",
    author: "Quentin Hagnéré",
    status: "planned",
    coverKind: "quote",
    accent: "#171717",
  },
];
