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
  "maintenance-evolution",
  "securite-rgpd",
  "audit-technique",
];

const toolRoutes = [
  // /outils/estimer-mon-projet → redirect 308 vers /demarrer-un-projet, retiré du sitemap
  "outils/calculateur-cout-excel",
];

const legalRoutes = [
  "legal/mentions",
  "legal/cgv",
  "legal/confidentialite",
  "legal/cookies",
  "legal/accessibilite",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/methode`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tarifs`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/realisations`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/equipe`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/rendez-vous`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/demarrer-un-projet`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = servicesSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const caseRoutes: MetadataRoute.Sitemap = CASE_SLUGS.map((slug) => ({
    url: `${baseUrl}/realisations/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const toolSitemapRoutes: MetadataRoute.Sitemap = toolRoutes.map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.55,
  }));

  const legalSitemapRoutes: MetadataRoute.Sitemap = legalRoutes.map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: now,
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
