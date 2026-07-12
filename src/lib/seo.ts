/**
 * Constantes OpenGraph partagées.
 *
 * Next.js App Router fait un merge SUPERFICIEL des metadata : dès qu'une page
 * déclare son propre objet `openGraph`, celui du layout racine est intégralement
 * écrasé (perte de og:image, og:site_name, og:locale). Chaque page qui définit
 * un bloc openGraph doit donc spreader OG_BASE et fournir une image explicite.
 *
 *   openGraph: {
 *     ...OG_BASE,
 *     title: "…",
 *     description: "…",
 *     url: "/ma-page",
 *     images: [DEFAULT_OG_IMAGE], // ou une image dédiée 1200x630
 *   }
 */

export const SITE_URL = "https://hagnere-code.ai";

export const OG_BASE = {
  type: "website" as const,
  locale: "fr_FR",
  siteName: "Hagnéré Code",
};

export const DEFAULT_OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Hagnéré Code — Développement SaaS, sites & outils sur mesure",
};

export const SERVICES_OG_IMAGE = {
  url: "/og-image-services.png",
  width: 1200,
  height: 630,
  alt: "Services Hagnéré Code — SaaS, applis métier, outils internes, sites vitrines, e-commerce",
};
