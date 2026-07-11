import type { MetadataRoute } from "next";
import { CASE_SLUGS } from "@/components/realisations/cases";

const baseUrl = "https://hagnere-code.fr";

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
      url: `${baseUrl}/guides/combien-coute-un-site-internet`,
      changeFrequency: "monthly",
      priority: 0.75,
    },
  ];

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

  const legalSitemapRoutes: MetadataRoute.Sitemap = legalRoutes.map((route) => ({
    url: `${baseUrl}/${route}`,
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...caseRoutes,
    ...toolSitemapRoutes,
    ...legalSitemapRoutes,
  ];
}
