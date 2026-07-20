import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { accessibiliteSections } from "@/components/legal/content/accessibilite";
import { OG_BASE, DEFAULT_OG_IMAGE } from "@/lib/seo";

const LAST_UPDATED = "2026-07-20";

export const metadata: Metadata = {
  title: "Démarche d'accessibilité · Hagnéré Code",
  description:
    "Démarche d'accessibilité de hagnere-code.ai, état de conformité non évalué, mesures intégrées, limites à vérifier et contact.",
  alternates: { canonical: "/legal/accessibilite" },
  openGraph: {
    ...OG_BASE,
    type: "article",
    title: "Démarche d'accessibilité · Hagnéré Code",
    description:
      "État d'accessibilité du site hagnere-code.ai, points restant à auditer, assistance et voies de signalement.",
    url: "/legal/accessibilite",
    images: [DEFAULT_OG_IMAGE],
  },
};

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hagnere-code.ai/" },
    { "@type": "ListItem", position: 2, name: "Démarche d'accessibilité", item: "https://hagnere-code.ai/legal/accessibilite" },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <LegalPageLayout
        title={"Démarche\nd'accessibilité."}
        intro="Démarche d'accessibilité numérique fondée sur le RGAA et les WCAG. Le niveau de conformité n'est pas encore évalué par un audit complet."
        lastUpdated={LAST_UPDATED}
        breadcrumb="Accessibilité"
        sections={accessibiliteSections}
      />
    </>
  );
}
