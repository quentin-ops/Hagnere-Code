import type { CaseStudy } from "@/components/realisations/cases";
import { ORGANIZATION_ID } from "@/lib/organization-structured-data";
import { SITE_URL } from "@/lib/seo";

const organization = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Hagnéré Code",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logos/logo-dark.png`,
  },
} as const;

/**
 * Données structurées d'une étude de cas.
 *
 * `datePublished` et `dateModified` restent volontairement absentes jusqu'à
 * ce que des dates exactes et vérifiables soient enregistrées.
 */
export function buildCaseStudyStructuredData(c: CaseStudy) {
  const url = `${SITE_URL}/realisations/${c.slug}`;
  const isSoftware = c.slug === "lmnp-ai" || c.slug === "sci-ai";
  const mainEntity = isSoftware
    ? {
        "@type": "SoftwareApplication",
        name: c.brandName,
        url: c.url,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
      }
    : {
        "@type": "WebSite",
        name: c.brandName,
        url: c.url,
        inLanguage: "fr-FR",
      };
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${c.brandName} · ${c.category}`,
    name: `${c.brandName} · Étude de cas Hagnéré Code`,
    description: c.heroIntro,
    url,
    image: `${url}/opengraph-image`,
    inLanguage: "fr-FR",
    author: organization,
    publisher: organization,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    about: mainEntity,
    keywords: c.stack.join(", "),
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Réalisations",
        item: `${SITE_URL}/realisations`,
      },
      { "@type": "ListItem", position: 3, name: c.brandName, item: url },
    ],
  };

  return [article, breadcrumb] as const;
}
