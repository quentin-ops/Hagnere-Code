import type { Metadata } from "next";
import { RealisationsIndexPage } from "@/components/realisations/RealisationsIndexPage";
import { CASES } from "@/components/realisations/cases";
import { OG_BASE, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Les 4 produits publics du groupe Hagnéré · Hagnéré Code",
  description:
    "Analyse éditoriale des quatre produits du groupe Hagnéré : éléments visibles, source datée et limites de preuve. Ce ne sont pas des clients indépendants.",
  alternates: { canonical: "/realisations" },
  openGraph: {
    ...OG_BASE,
    title: "Les 4 produits publics du groupe Hagnéré · Hagnéré Code",
    description:
      "Quatre produits du groupe Hagnéré, pas des clients indépendants : source consultable, éléments visibles et absence d'attribution de conception ou de performance.",
    url: "/realisations",
    images: [DEFAULT_OG_IMAGE],
  },
};

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hagnere-code.ai/" },
    { "@type": "ListItem", position: 2, name: "Produits du groupe", item: "https://hagnere-code.ai/realisations" },
  ],
});

const itemListJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Analyses des pages publiques des produits du groupe Hagnéré",
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
