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

const FRENCH_MONTHS = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
] as const;

/**
 * Convertit la date de consultation affichée sur la fiche (« 20 juillet 2026 »)
 * en date ISO. Aucune date n'est fabriquée : la fonction retourne `undefined`
 * dès que la chaîne n'est pas une date française complète, ce qui fait
 * retomber l'Article sur l'absence de date plutôt que sur une approximation
 * du type `année-01-01`.
 */
export function frenchDateToIso(value: string): string | undefined {
  const match = value
    .trim()
    .toLowerCase()
    .match(/^(\d{1,2})\s+([a-zàâçéèêëîïôûùüÿñæœ]+)\s+(\d{4})$/);
  if (!match) return undefined;

  const day = Number(match[1]);
  const monthIndex = FRENCH_MONTHS.indexOf(
    match[2] as (typeof FRENCH_MONTHS)[number],
  );
  const year = Number(match[3]);
  if (monthIndex < 0 || day < 1 || day > 31) return undefined;

  const iso = `${year}-${String(monthIndex + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  // Garde-fou : rejette un 31 février ou toute date qui ne se relit pas.
  return new Date(`${iso}T12:00:00Z`).toISOString().slice(0, 10) === iso
    ? iso
    : undefined;
}

/**
 * Données structurées d'une étude de cas.
 *
 * `datePublished` / `dateModified` reprennent la date de consultation de la
 * source déjà affichée sur la fiche (`sourceCheckedAt`) : c'est la date de
 * l'analyse éditoriale publiée ici, pas une date attribuée au site tiers.
 * Aucune valeur n'est inventée — si la fiche n'expose pas une date complète,
 * l'Article reste sans date.
 */
export function buildCaseStudyStructuredData(c: CaseStudy) {
  const url = `${SITE_URL}/realisations/${c.slug}`;
  const analysedOn = frenchDateToIso(c.sourceCheckedAt);
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
    headline: `Produit du groupe Hagnéré : ${c.brandName}`,
    name: `${c.brandName} · Analyse éditoriale d'une page publique du groupe Hagnéré`,
    description: c.heroIntro,
    url,
    image: `${url}/opengraph-image`,
    inLanguage: "fr-FR",
    ...(analysedOn
      ? { datePublished: analysedOn, dateModified: analysedOn }
      : {}),
    author: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "Hagnéré Code",
      url: SITE_URL,
    },
    publisher: organization,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    about: mainEntity,
    citation: c.url,
    isBasedOn: c.url,
    articleSection: "Analyse d'une page publique du groupe Hagnéré",
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Produits du groupe",
        item: `${SITE_URL}/realisations`,
      },
      { "@type": "ListItem", position: 3, name: c.brandName, item: url },
    ],
  };

  return [article, breadcrumb] as const;
}
