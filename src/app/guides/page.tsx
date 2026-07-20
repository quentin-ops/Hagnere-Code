import type { Metadata } from "next";
import { GuidesHubPage } from "@/components/guides/GuidesHubPage";
import { OG_BASE, DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo";
import { GUIDES, guideUrl } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Guides : prix d'un site internet, SaaS et SEO · Hagnéré Code",
  description:
    "Des guides chiffrés pour cadrer votre projet web : prix d'un site internet, SaaS, outils métier, SEO. Par l'équipe Hagnéré Code, agence Next.js/React.",
  authors: [{ name: "Hagnéré Code" }],
  creator: "Hagnéré Code",
  publisher: "Hagnéré Code",
  alternates: { canonical: "/guides" },
  openGraph: {
    ...OG_BASE,
    title: "Guides : prix d'un site internet, SaaS et SEO · Hagnéré Code",
    description:
      "Des guides chiffrés pour cadrer votre projet web : prix d'un site internet, SaaS, outils métier, SEO.",
    url: "/guides",
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
  name: "Guides : prix d'un site internet, SaaS et SEO",
  description:
    "Des guides pratiques et chiffrés pour cadrer votre projet web, rédigés par l'équipe Hagnéré Code.",
  url: `${SITE_URL}/guides`,
  author: {
    "@type": "Organization",
    name: "Hagnéré Code",
    url: SITE_URL,
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: GUIDES.map((g, i) => ({
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
