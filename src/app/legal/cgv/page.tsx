import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { cgvSections } from "@/components/legal/content/cgv";
import { OG_BASE, DEFAULT_OG_IMAGE } from "@/lib/seo";

const LAST_UPDATED = "2026-07-20";

export const metadata: Metadata = {
  title: "Conditions générales de vente · Hagnéré Code",
  description:
    "CGV B2B Hagnéré Code : devis, paiement, délais, recette, propriété intellectuelle, données, responsabilité, réversibilité et litiges.",
  alternates: { canonical: "/legal/cgv" },
  openGraph: {
    ...OG_BASE,
    type: "article",
    title: "Conditions générales de vente · Hagnéré Code",
    description:
      "Cadre contractuel général des prestations réalisées par HAGNERE CODE.",
    url: "/legal/cgv",
    images: [DEFAULT_OG_IMAGE],
  },
};

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hagnere-code.ai/" },
    { "@type": "ListItem", position: 2, name: "Conditions générales de vente", item: "https://hagnere-code.ai/legal/cgv" },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <LegalPageLayout
        title={"Conditions\ngénérales."}
        intro="Cadre général B2B applicable aux prestations réalisées par HAGNERE CODE, sauf conditions particulières prévues au devis ou au contrat."
        lastUpdated={LAST_UPDATED}
        breadcrumb="CGV"
        sections={cgvSections}
      />
    </>
  );
}
