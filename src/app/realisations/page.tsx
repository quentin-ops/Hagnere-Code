import type { Metadata } from "next";
import { RealisationsIndexPage } from "@/components/realisations/RealisationsIndexPage";
import { CASES } from "@/components/realisations/cases";
import { OG_BASE, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Réalisations : 4 produits en production · Hagnéré Code",
  description:
    "4 études de cas documentées : SaaS à 5 400 clients payants, +340 % de trafic SEO en 6 mois. Contexte, stack, résultats mesurés — zéro logo volé.",
  alternates: { canonical: "/realisations" },
  openGraph: {
    ...OG_BASE,
    title: "Réalisations · Hagnéré Code",
    description:
      "Quatre projets documentés : contexte, fonctionnement, stack et modules livrés.",
    url: "/realisations",
    images: [DEFAULT_OG_IMAGE],
  },
};

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hagnere-code.ai/" },
    { "@type": "ListItem", position: 2, name: "Réalisations", item: "https://hagnere-code.ai/realisations" },
  ],
});

const itemListJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Réalisations Hagnéré Code",
  itemListElement: Object.values(CASES).map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `https://hagnere-code.ai/realisations/${c.slug}`,
    name: `${c.brandName} — ${c.category}`,
    description: c.heroIntro,
  })),
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: itemListJsonLd.replace(/</g, "\\u003c") }} />
      <RealisationsIndexPage />
    </>
  );
}
