import type { Metadata } from "next";
import type { GuideEntry } from "./guides";
import { guideRobots, guideUrl } from "./guides";
import { OG_BASE, SITE_URL } from "./seo";

export function buildGuideMetadata(
  guide: GuideEntry,
  imageAlt: string,
): Metadata {
  const url = guideUrl(guide);
  const image = `${url}/opengraph-image`;

  return {
    title: guide.title,
    description: guide.metaDescription,
    authors: [{ name: "Quentin Hagnéré" }],
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
      publishedTime: `${guide.datePublished}T09:00:00+02:00`,
      modifiedTime: `${guide.dateModified}T09:00:00+02:00`,
      authors: [`${SITE_URL}/equipe`],
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
      headline: guide.heroTitle,
      description: guide.metaDescription,
      url,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      image: [`${url}/opengraph-image`],
      datePublished: guide.datePublished,
      dateModified: guide.dateModified,
      inLanguage: "fr-FR",
      articleSection: guide.section,
      isPartOf: {
        "@type": "WebPage",
        "@id": `${SITE_URL}/guides`,
        name: "Guides web Hagnéré Code",
      },
      author: {
        "@type": "Person",
        name: "Quentin Hagnéré",
        jobTitle: "Fondateur de Hagnéré Code",
        url: `${SITE_URL}/equipe`,
        sameAs: ["https://www.linkedin.com/in/quentin-hagnere"],
        worksFor: { "@id": `${SITE_URL}/#organization` },
      },
      publisher: {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
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
