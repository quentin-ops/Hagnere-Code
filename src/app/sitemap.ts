import type { MetadataRoute } from "next";
import { CASE_SLUGS } from "@/components/realisations/cases";
import { PUBLISHED_GUIDES } from "@/lib/guides";
import { LOCAL_PAGES, localPagePath } from "@/lib/local-pages";
import { DOWNLOADABLE_RESOURCES } from "@/lib/resources";
import { SITE_URL } from "@/lib/seo";
import { SERVICE_LINKS } from "@/lib/services";
import { WHITE_PAPERS } from "@/lib/white-papers";

const baseUrl = SITE_URL;

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
    { url: baseUrl },
    { url: `${baseUrl}/services` },
    { url: `${baseUrl}/methode` },
    { url: `${baseUrl}/tarifs` },
    { url: `${baseUrl}/realisations` },
    { url: `${baseUrl}/equipe` },
    { url: `${baseUrl}/contact` },
    { url: `${baseUrl}/rendez-vous` },
    { url: `${baseUrl}/demarrer-un-projet` },
    { url: `${baseUrl}/guides` },
    { url: `${baseUrl}/livres-blancs` },
    { url: `${baseUrl}/ressources` },
    {
      // Page service ciblant la requête « agence next js ».
      url: `${baseUrl}/agence-next-js`,
    },
    {
      // Page service « agence react » : angle applicatif (espaces clients,
      // outils internes), volontairement distinct de /agence-next-js qui
      // couvre l'angle site public, pour éviter la cannibalisation.
      url: `${baseUrl}/agence-react`,
    },
  ];

  // Guides : générés depuis le registre central src/lib/guides.ts —
  // lastModified réel par guide (dateModified maintenue à la main).
  const guideRoutes: MetadataRoute.Sitemap = PUBLISHED_GUIDES.map((g) => ({
    url: `${baseUrl}/guides/${g.slug}`,
    lastModified: new Date(`${g.dateModified}T12:00:00Z`),
  }));

  const whitePaperRoutes: MetadataRoute.Sitemap = WHITE_PAPERS.map((entry) => ({
    url: `${baseUrl}${entry.path}`,
    lastModified: new Date(`${entry.dateModified}T12:00:00Z`),
  }));

  const resourceRoutes: MetadataRoute.Sitemap = DOWNLOADABLE_RESOURCES.map(
    (entry) => ({
      url: `${baseUrl}${entry.path}`,
      lastModified: new Date(`${entry.updatedAt}T12:00:00Z`),
    }),
  );

  const serviceRoutes: MetadataRoute.Sitemap = SERVICE_LINKS.map((service) => ({
    url: `${baseUrl}${service.path}`,
  }));

  const caseRoutes: MetadataRoute.Sitemap = CASE_SLUGS.map((slug) => ({
    url: `${baseUrl}/realisations/${slug}`,
  }));

  const toolSitemapRoutes: MetadataRoute.Sitemap = toolRoutes.map((route) => ({
    url: `${baseUrl}/${route}`,
  }));

  const legalSitemapRoutes: MetadataRoute.Sitemap = legalRoutes.map(
    (route) => ({
      url: `${baseUrl}/${route}`,
    }),
  );

  // Pages locales : générées depuis le registre src/lib/local-pages.ts.
  // Toute ouverture ou mise à jour passe par ce registre et par les critères
  // de docs/plan-seo-local-savoie.md.
  const localRoutes: MetadataRoute.Sitemap = LOCAL_PAGES.map((p) => ({
    url: `${baseUrl}${localPagePath(p)}`,
    lastModified: new Date(`${p.dateModified}T12:00:00Z`),
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
