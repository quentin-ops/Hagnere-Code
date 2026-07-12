import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { accessibiliteSections } from "@/components/legal/content/accessibilite";
import { OG_BASE, DEFAULT_OG_IMAGE } from "@/lib/seo";

const LAST_UPDATED = "2026-04-28";

export const metadata: Metadata = {
  title: "Déclaration d'accessibilité · Hagnéré Code",
  description:
    "Démarche volontaire RGAA 4.1 / WCAG 2.1 AA : état de conformité, non-conformités connues et alternative garantie sous 5 jours ouvrés.",
  alternates: { canonical: "/legal/accessibilite" },
  openGraph: {
    ...OG_BASE,
    type: "article",
    title: "Déclaration d'accessibilité · Hagnéré Code",
    description:
      "Engagement d'accessibilité du site hagnere-code.ai : RGAA 4.1, WCAG 2.1 AA, plan d'amélioration et voies de recours.",
    url: "/legal/accessibilite",
    images: [DEFAULT_OG_IMAGE],
  },
};

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hagnere-code.ai/" },
    { "@type": "ListItem", position: 2, name: "Déclaration d'accessibilité", item: "https://hagnere-code.ai/legal/accessibilite" },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json">{breadcrumbJsonLd}</script>
      <LegalPageLayout
        title={"Déclaration\nd'accessibilité."}
        intro="Démarche volontaire d'accessibilité numérique RGAA 4.1 / WCAG 2.1 AA. État partiel, non-conformités connues, plan d'amélioration et voies de recours."
        lastUpdated={LAST_UPDATED}
        breadcrumb="Accessibilité"
        sections={accessibiliteSections}
      />
    </>
  );
}
