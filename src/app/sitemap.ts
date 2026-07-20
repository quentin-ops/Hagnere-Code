import type { MetadataRoute } from "next";
import { CASE_SLUGS } from "@/components/realisations/cases";
import { GUIDES } from "@/lib/guides";
import { LOCAL_PAGES, localPagePath } from "@/lib/local-pages";
import { DOWNLOADABLE_RESOURCES } from "@/lib/resources";
import { WHITE_PAPERS } from "@/lib/white-papers";

const baseUrl = "https://hagnere-code.ai";

const servicesSlugs = [
  "saas-applications-metier",
  "outils-internes-sur-mesure",
  "sites-vitrines",
  "ecommerce",
  "referencement-google",
  "publicite-en-ligne",
  "contenu-video",
  "application-mobile",
  "maintenance-evolution",
  "securite-rgpd",
  "audit-technique",
];

const toolRoutes = [
  // /outils et /outils/estimer-mon-projet (ancien estimateur, supprimé)
  // redirigent vers /demarrer-un-projet — retirés du sitemap.
  "outils/calculateur-cout-excel",
];

const legalRoutes = [
  "legal/mentions",
  "legal/cgv",
  "legal/confidentialite",
  "legal/cookies",
  "legal/reclamations",
  "legal/accessibilite",
];

// Pas de lastModified : une date régénérée à chaque build pour toutes les
// URLs est un signal mensonger que Google apprend à ignorer. On l'omet
// plutôt que de mentir ; à réintroduire si on maintient de vraies dates
// de mise à jour par page.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/methode`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tarifs`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/realisations`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/equipe`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/rendez-vous`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/demarrer-un-projet`,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/guides`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/livres-blancs`,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/ressources`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      // Page service ciblant la requête « agence next js ». Priorité haute :
      // c'est la requête commerciale la plus accessible identifiée par
      // l'audit (docs/audit-concurrentiel-2026-07.md).
      url: `${baseUrl}/agence-next-js`,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      // Page service « agence react » : angle applicatif (espaces clients,
      // outils internes), volontairement distinct de /agence-next-js qui
      // couvre l'angle site public, pour éviter la cannibalisation.
      url: `${baseUrl}/agence-react`,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  // Guides : générés depuis le registre central src/lib/guides.ts —
  // lastModified réel par guide (dateModified maintenue à la main).
  const guideRoutes: MetadataRoute.Sitemap = GUIDES.map((g) => ({
    url: `${baseUrl}/guides/${g.slug}`,
    lastModified: new Date(`${g.dateModified}T12:00:00Z`),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const whitePaperRoutes: MetadataRoute.Sitemap = WHITE_PAPERS.map((entry) => ({
    url: `${baseUrl}${entry.path}`,
    lastModified: new Date(`${entry.dateModified}T12:00:00Z`),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const resourceRoutes: MetadataRoute.Sitemap = DOWNLOADABLE_RESOURCES.map(
    (entry) => ({
      url: `${baseUrl}${entry.path}`,
      lastModified: new Date(`${entry.updatedAt}T12:00:00Z`),
      changeFrequency: "monthly",
      priority: 0.85,
    }),
  );

  const serviceRoutes: MetadataRoute.Sitemap = servicesSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const caseRoutes: MetadataRoute.Sitemap = CASE_SLUGS.map((slug) => ({
    url: `${baseUrl}/realisations/${slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const toolSitemapRoutes: MetadataRoute.Sitemap = toolRoutes.map((route) => ({
    url: `${baseUrl}/${route}`,
    changeFrequency: "monthly",
    priority: 0.55,
  }));

  const legalSitemapRoutes: MetadataRoute.Sitemap = legalRoutes.map(
    (route) => ({
      url: `${baseUrl}/${route}`,
      changeFrequency: "yearly",
      priority: 0.3,
    }),
  );

  // Pages locales : générées depuis le registre src/lib/local-pages.ts.
  // Tableau vide tant qu'aucune page n'est publiée — voir le plan
  // docs/plan-seo-local-savoie.md pour la cadence et la règle d'ouverture.
  const localRoutes: MetadataRoute.Sitemap = LOCAL_PAGES.map((p) => ({
    url: `${baseUrl}${localPagePath(p)}`,
    lastModified: new Date(`${p.dateModified}T12:00:00Z`),
    changeFrequency: "monthly",
    priority: p.level === "ville" ? 0.75 : 0.8,
  }));

  return [
    ...staticRoutes,
    ...guideRoutes,
    ...whitePaperRoutes,
    ...resourceRoutes,
    ...serviceRoutes,
    ...caseRoutes,
    ...toolSitemapRoutes,
    ...legalSitemapRoutes,
    ...localRoutes,
  ];
}
