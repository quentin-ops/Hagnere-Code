import type { Metadata } from "next";
import { GuidesHubPage } from "@/components/guides/GuidesHubPage";
import { GUIDES_COLLECTION_ID } from "@/lib/guide-page-seo";
import {
  ORGANIZATION_ID,
  WEBSITE_ID,
} from "@/lib/organization-structured-data";
import { OG_BASE, DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo";
import { PUBLISHED_GUIDES, guideUrl } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Guides pour décider avant de développer · Hagnéré Code",
  description:
    "Des guides sourcés, des calculs transparents et des méthodes concrètes pour cadrer un projet numérique avant de choisir un outil ou un prestataire.",
  authors: [{ name: "Hagnéré Code" }],
  creator: "Hagnéré Code",
  publisher: "Hagnéré Code",
  alternates: { canonical: "/guides" },
  openGraph: {
    ...OG_BASE,
    title: "Guides pour décider avant de développer · Hagnéré Code",
    description:
      "Des méthodes sourcées et des calculs transparents pour cadrer un projet numérique avant de choisir une solution.",
    url: "/guides",
    images: [DEFAULT_OG_IMAGE],
  },
};

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
  ],
});

const collectionJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": GUIDES_COLLECTION_ID,
  name: "Guides Hagnéré Code pour cadrer un projet numérique",
  description:
    "Des guides pratiques, sourcés et vérifiables pour cadrer un projet numérique avant de choisir une solution.",
  url: `${SITE_URL}/guides`,
  isPartOf: { "@id": WEBSITE_ID },
  author: { "@id": ORGANIZATION_ID },
  publisher: { "@id": ORGANIZATION_ID },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: PUBLISHED_GUIDES.map((g, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: g.cardTitle,
      url: guideUrl(g),
    })),
  },
});

export default function GuidesPage() {
  return (
    <>
      {/* JSON-LD structured data — chaînes statiques uniquement. Injectées via
          dangerouslySetInnerHTML (même pattern que la homepage) : le rendu en
          enfant texte provoquait un décalage d'hydratation (useId) sur cette
          page. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: collectionJsonLd.replace(/</g, "\\u003c") }}
      />
      <GuidesHubPage />
    </>
  );
}
