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

/**
 * Pages légales et leur date de mise à jour réelle.
 *
 * Ce ne sont pas des dates de build : chaque page légale affiche déjà cette
 * date dans son gabarit (`LegalPageLayout`, balise `<time datetime>`), et la
 * valeur reprise ici est celle de sa constante `LAST_UPDATED`. Le sitemap
 * publie donc la même information que la page.
 *
 * `src/app/route-contracts.test.ts` compare ce tableau aux `LAST_UPDATED` des
 * six pages : une date modifiée d'un côté et pas de l'autre fait échouer la
 * suite, ce qui exclut la dérive silencieuse qui justifiait de tout omettre.
 */
const legalRoutes: { path: string; lastModified: string }[] = [
  { path: "legal/mentions", lastModified: "2026-07-20" },
  { path: "legal/cgv", lastModified: "2026-07-20" },
  { path: "legal/confidentialite", lastModified: "2026-08-27" },
  { path: "legal/cookies", lastModified: "2026-08-27" },
  { path: "legal/reclamations", lastModified: "2026-07-20" },
  { path: "legal/accessibilite", lastModified: "2026-07-20" },
];

// Pas de lastModified générique : une date régénérée à chaque build pour
// toutes les URLs est un signal mensonger que Google apprend à ignorer. Seules
// les familles qui maintiennent une vraie date de mise à jour par page en
// portent une — guides, livres blancs, ressources, pages locales et pages
// légales, chacune adossée à un registre ou à un test anti-dérive.
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
    lastModified: g.dateModified,
  }));

  const whitePaperRoutes: MetadataRoute.Sitemap = WHITE_PAPERS.map((entry) => ({
    url: `${baseUrl}${entry.path}`,
    lastModified: entry.dateModified,
  }));

  const resourceRoutes: MetadataRoute.Sitemap = DOWNLOADABLE_RESOURCES.map(
    (entry) => ({
      url: `${baseUrl}${entry.path}`,
      lastModified: entry.updatedAt,
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
      url: `${baseUrl}/${route.path}`,
      lastModified: route.lastModified,
    }),
  );

  // Pages locales : générées depuis le registre src/lib/local-pages.ts.
  // Toute ouverture ou mise à jour passe par ce registre et par les critères
  // de docs/plan-seo-local-savoie.md.
  const localRoutes: MetadataRoute.Sitemap = LOCAL_PAGES.map((p) => ({
    url: `${baseUrl}${localPagePath(p)}`,
    lastModified: p.dateModified,
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
