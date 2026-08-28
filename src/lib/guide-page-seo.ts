import type { Metadata } from "next";
import type { GuideEntry } from "./guides";
import { guideRobots, guideUrl } from "./guides";
import {
  ORGANIZATION_ID,
  QUENTIN_HAGNERE_PERSON,
  QUENTIN_HAGNERE_URL,
} from "./organization-structured-data";
import { OG_BASE, SITE_URL } from "./seo";
import { TEAM } from "./team";

export const GUIDES_COLLECTION_ID = `${SITE_URL}/guides#collection`;

/**
 * Nom de la collection éditoriale, à côté de son `@id`.
 *
 * Chaque Article publié déclare `isPartOf` vers la même CollectionPage : le
 * nom doit être écrit une fois, jamais retapé au fil des pages. Deux
 * orthographes du même nœud dans un même graphe se lisent comme deux
 * collections.
 */
export const GUIDES_COLLECTION_NAME = "Guides Hagnéré Code";

export function buildGuideMetadata(
  guide: GuideEntry,
  imageAlt: string,
): Metadata {
  const url = guideUrl(guide);
  const image = `${url}/opengraph-image`;

  return {
    title: guide.title,
    description: guide.metaDescription,
    authors: [{ name: TEAM.quentin.fullName, url: QUENTIN_HAGNERE_URL }],
    creator: "Hagnéré Code",
    publisher: "Hagnéré Code",
    robots: guideRobots(guide),
    alternates: { canonical: url },
    openGraph: {
      ...OG_BASE,
      type: "article",
      title: guide.cardTitle,
      description: guide.metaDescription,
      url,
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
      publishedTime: guide.datePublished,
      modifiedTime: guide.dateModified,
      authors: [QUENTIN_HAGNERE_URL],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.cardTitle,
      description: guide.metaDescription,
      images: [image],
    },
  };
}

export function buildGuideStructuredData(
  guide: GuideEntry,
  breadcrumbName: string,
) {
  const url = guideUrl(guide);

  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${url}#article`,
      headline: guide.heroTitle,
      description: guide.metaDescription,
      url,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      image:
        guide.articleImagePaths?.map((path) => `${SITE_URL}${path}`) ?? [
          `${url}/opengraph-image`,
        ],
      datePublished: guide.datePublished,
      dateModified: guide.dateModified,
      inLanguage: "fr-FR",
      articleSection: guide.section,
      isPartOf: {
        "@type": "CollectionPage",
        "@id": GUIDES_COLLECTION_ID,
        name: GUIDES_COLLECTION_NAME,
      },
      author: QUENTIN_HAGNERE_PERSON,
      publisher: {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: "Hagnéré Code",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/logos/logo-dark.png`,
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Guides",
          item: `${SITE_URL}/guides`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: breadcrumbName,
          item: url,
        },
      ],
    },
  ] as const;
}
