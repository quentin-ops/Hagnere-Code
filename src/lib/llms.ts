import { PUBLISHED_GUIDES } from "./guides";
import { DOWNLOADABLE_RESOURCES } from "./resources";
import { SITE_URL } from "./seo";
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
    title: "Méthode Sprint Fixe",
    path: "/methode",
    description:
      "Méthode de cadrage, de livraison, de recette et de transfert appliquée aux projets.",
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

export const LLMS_SERVICE_LINKS: LlmsLink[] = [
  {
    title: "SaaS et applications métier",
    path: "/services/saas-applications-metier",
    description:
      "Conception et développement de logiciels SaaS et d'applications métier sur mesure.",
  },
  {
    title: "Outils internes sur mesure",
    path: "/services/outils-internes-sur-mesure",
    description:
      "Automatisation de processus et remplacement d'outils internes fragiles ou dispersés.",
  },
  {
    title: "Sites vitrines",
    path: "/services/sites-vitrines",
    description:
      "Conception de sites publics rapides, accessibles et administrables.",
  },
  {
    title: "E-commerce",
    path: "/services/ecommerce",
    description:
      "Conception, intégration et évolution de boutiques et parcours de vente en ligne.",
  },
  {
    title: "Référencement Google",
    path: "/services/referencement-google",
    description:
      "Audit, stratégie de contenu, référencement local et amélioration technique mesurable.",
  },
  {
    title: "Publicité en ligne",
    path: "/services/publicite-en-ligne",
    description:
      "Cadrage, instrumentation et gestion de campagnes d'acquisition payante.",
  },
  {
    title: "Contenu et vidéo",
    path: "/services/contenu-video",
    description:
      "Production et intégration de contenus utiles aux parcours éditoriaux et commerciaux.",
  },
  {
    title: "Application mobile",
    path: "/services/application-mobile",
    description:
      "Cadrage et développement d'applications mobiles selon le besoin et les contraintes du produit.",
  },
  {
    title: "Maintenance et évolution",
    path: "/services/maintenance-evolution",
    description:
      "Maintenance corrective, évolutive, observabilité et accompagnement après livraison.",
  },
  {
    title: "Sécurité et RGPD",
    path: "/services/securite-rgpd",
    description:
      "Audit applicatif et remédiation technique en coordination avec les responsables juridiques du client.",
  },
  {
    title: "Audit technique",
    path: "/services/audit-technique",
    description:
      "Diagnostic de performance, qualité, sécurité, dette technique et capacité d'évolution.",
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
    section("Guides", guideLlmsLinks()),
    "",
    section("Livres blancs", whitePaperLlmsLinks()),
    "",
    section("Ressources pratiques", resourceLlmsLinks()),
    "",
    section("Informations légales", LLMS_LEGAL_LINKS),
    "",
  ].join("\n");
}
