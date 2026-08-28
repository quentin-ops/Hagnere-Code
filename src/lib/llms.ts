import { CASES } from "@/components/realisations/cases";
import { PUBLISHED_GUIDES } from "./guides";
import { LOCAL_PAGES, localPagePath } from "./local-pages";
import { DOWNLOADABLE_RESOURCES } from "./resources";
import { SITE_URL } from "./seo";
import { SERVICE_LINKS } from "./services";
import { WHITE_PAPERS } from "./white-papers";

export interface LlmsLink {
  title: string;
  path: string;
  description: string;
  dateModified?: string;
}

export const LLMS_CORE_LINKS: LlmsLink[] = [
  {
    title: "Accueil Hagnéré Code",
    path: "/",
    description:
      "Présentation du studio, de ses domaines d'intervention et de ses réalisations internes.",
  },
  {
    title: "Services",
    path: "/services",
    description:
      "Vue d'ensemble des prestations web, SaaS, applications métier, acquisition et maintenance.",
  },
  {
    title: "Guides",
    path: "/guides",
    description:
      "Guides pratiques pour cadrer, chiffrer et sécuriser un projet numérique.",
  },
  {
    title: "Ressources",
    path: "/ressources",
    description:
      "Kits et modèles téléchargeables, avec leur page de présentation et leur mode d'emploi.",
  },
  {
    title: "Livres blancs",
    path: "/livres-blancs",
    description:
      "Études longues et outils de décision consultables en ligne avant téléchargement.",
  },
  {
    title: "Tarifs",
    path: "/tarifs",
    description:
      "Fourchettes budgétaires par type de projet, ce qu'elles couvrent et ce qui les fait varier.",
  },
  {
    title: "Méthode Sprint Fixe",
    path: "/methode",
    description:
      "Méthode de cadrage, de livraison, de recette et de transfert appliquée aux projets.",
  },
  {
    title: "Démarrer un projet",
    path: "/demarrer-un-projet",
    description:
      "Formulaire de brief détaillé pour décrire un besoin et obtenir une réponse humaine.",
  },
  {
    title: "Prendre rendez-vous",
    path: "/rendez-vous",
    description:
      "Prise de rendez-vous pour un premier échange de cadrage avec le studio.",
  },
  {
    title: "Réalisations",
    path: "/realisations",
    description:
      "Produits du groupe Hagnéré conçus, développés et exploités en interne.",
  },
  {
    title: "Équipe",
    path: "/equipe",
    description: "Présentation des personnes et rôles publics du studio.",
  },
  {
    title: "Contact",
    path: "/contact",
    description: "Coordonnées et formulaire de contact du studio.",
  },
];

export const LLMS_SERVICE_LINKS: LlmsLink[] = SERVICE_LINKS;

/** Pages de spécialisation technique, hors registre /services. */
export const LLMS_STACK_LINKS: LlmsLink[] = [
  {
    title: "Agence Next.js",
    path: "/agence-next-js",
    description:
      "Angle site public : sites, e-commerce et applications métier développés avec Next.js.",
  },
  {
    title: "Agence React",
    path: "/agence-react",
    description:
      "Angle applicatif : applications web, interfaces métier et espaces clients développés avec React.",
  },
];

/** Outils interactifs publics, sans compte ni adresse e-mail obligatoire. */
export const LLMS_TOOL_LINKS: LlmsLink[] = [
  {
    title: "Calculateur du coût d'un fichier Excel",
    path: "/outils/calculateur-cout-excel",
    description:
      "Estimation du coût annuel d'un fichier Excel métier : temps passé, erreurs et ressaisies, hypothèses visibles.",
  },
];

export const LLMS_LEGAL_LINKS: LlmsLink[] = [
  {
    title: "Mentions légales",
    path: "/legal/mentions",
    description: "Identité de l'éditeur, responsable de publication et hébergement.",
  },
  {
    title: "Politique de confidentialité",
    path: "/legal/confidentialite",
    description:
      "Traitements de données, finalités, durées, destinataires et exercice des droits.",
  },
  {
    title: "Conditions générales de vente",
    path: "/legal/cgv",
    description:
      "Conditions contractuelles applicables aux prestations vendues par le studio.",
  },
  {
    title: "Politique cookies et stockages",
    path: "/legal/cookies",
    description:
      "Inventaire des stockages navigateur utilisés par le site, leur finalité et leur durée.",
  },
  {
    title: "Réclamations et médiation",
    path: "/legal/reclamations",
    description:
      "Procédure de réclamation et voies de médiation ouvertes au client.",
  },
  {
    title: "Démarche d'accessibilité",
    path: "/legal/accessibilite",
    description:
      "État de la démarche d'accessibilité numérique du site et modalités de signalement.",
  },
];

function absoluteUrl(path: string): string {
  return path === "/" ? SITE_URL : new URL(path, SITE_URL).toString();
}

function markdownText(value: string): string {
  return value.replace(/\s+/g, " ").replace(/[\[\]]/g, "").trim();
}

function formatLink(link: LlmsLink): string {
  const updated = link.dateModified
    ? ` Mise à jour réelle : ${link.dateModified}.`
    : "";

  return `- [${markdownText(link.title)}](${absoluteUrl(link.path)}): ${markdownText(link.description)}${updated}`;
}

export function guideLlmsLinks(): LlmsLink[] {
  return PUBLISHED_GUIDES.map((guide) => ({
    title: guide.cardTitle,
    path: `/guides/${guide.slug}`,
    description: guide.cardDescription,
    dateModified: guide.dateModified,
  }));
}

export function resourceLlmsLinks(): LlmsLink[] {
  return DOWNLOADABLE_RESOURCES.map((resource) => ({
    title: resource.cardTitle,
    path: resource.path,
    description: resource.description,
    dateModified: resource.updatedAt,
  }));
}

export function whitePaperLlmsLinks(): LlmsLink[] {
  return WHITE_PAPERS.map((entry) => ({
    title: entry.cardTitle,
    path: entry.path,
    description: entry.description,
    dateModified: entry.dateModified,
  }));
}

/** Pages locales, dérivées du registre src/lib/local-pages.ts. */
export function localPageLlmsLinks(): LlmsLink[] {
  return LOCAL_PAGES.map((page) => ({
    title: page.title,
    path: localPagePath(page),
    description: page.metaDescription,
    dateModified: page.dateModified,
  }));
}

/** Analyses des produits du groupe, dérivées du registre des réalisations. */
export function caseStudyLlmsLinks(): LlmsLink[] {
  return Object.values(CASES).map((entry) => ({
    title: `${entry.brandName} · ${entry.category}`,
    path: `/realisations/${entry.slug}`,
    description: entry.heroIntro,
  }));
}

function section(title: string, links: LlmsLink[]): string {
  return [`## ${title}`, ...links.map(formatLink)].join("\n");
}

/**
 * Index éditorial lisible par une personne ou un outil LLM.
 *
 * Il ne remplace ni robots.txt (autorisation de crawl), ni sitemap.xml
 * (découverte des URL), et ne constitue pas un signal de classement Google.
 */
export function buildLlmsText(): string {
  return [
    "# Hagnéré Code",
    "",
    "> Studio de développement basé à Bassens, aux portes de Chambéry : SaaS, applications métier, outils internes, sites web et acquisition numérique.",
    "",
    "Ce fichier est un index éditorial complémentaire. Les autorisations de crawl sont définies par robots.txt et la liste canonique des pages publiques par sitemap.xml. Il ne garantit ni indexation, ni classement, ni citation par un moteur ou un assistant. Google indique que llms.txt n'a aucun impact positif ou négatif sur sa visibilité ou son classement.",
    "",
    section("Pages essentielles", LLMS_CORE_LINKS),
    "",
    section("Services", LLMS_SERVICE_LINKS),
    "",
    section("Spécialisations techniques", LLMS_STACK_LINKS),
    "",
    section("Territoire", localPageLlmsLinks()),
    "",
    section("Analyses publiques des produits du groupe", caseStudyLlmsLinks()),
    "",
    section("Guides", guideLlmsLinks()),
    "",
    section("Livres blancs", whitePaperLlmsLinks()),
    "",
    section("Ressources pratiques", resourceLlmsLinks()),
    "",
    section("Outils publics", LLMS_TOOL_LINKS),
    "",
    section("Informations légales", LLMS_LEGAL_LINKS),
    "",
  ].join("\n");
}
