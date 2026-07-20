import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { mentionsLegalesSections } from "@/components/legal/content/mentions-legales";
import { OG_BASE, DEFAULT_OG_IMAGE } from "@/lib/seo";

const LAST_UPDATED = "2026-07-20";

export const metadata: Metadata = {
  title: "Mentions légales · Hagnéré Code",
  description:
    "Éditeur, direction de publication, siège social, hébergeur et informations juridiques de HAGNERE CODE à Bassens.",
  alternates: { canonical: "/legal/mentions" },
  openGraph: {
    ...OG_BASE,
    type: "article",
    title: "Mentions légales · Hagnéré Code",
    description:
      "Informations légales de HAGNERE CODE : identité, siège social à Bassens, direction de publication et hébergement Vercel.",
    url: "/legal/mentions",
    images: [DEFAULT_OG_IMAGE],
  },
};

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hagnere-code.ai/" },
    { "@type": "ListItem", position: 2, name: "Mentions légales", item: "https://hagnere-code.ai/legal/mentions" },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <LegalPageLayout
        title={"Mentions\nlégales."}
        intro="Informations légales obligatoires relatives à l'édition du site hagnere-code.ai par la société HAGNERE CODE."
        lastUpdated={LAST_UPDATED}
        breadcrumb="Mentions légales"
        sections={mentionsLegalesSections}
      />
    </>
  );
}
