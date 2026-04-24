import type { Metadata } from "next";
import { RealisationsIndexPage } from "@/components/realisations/RealisationsIndexPage";
import { CASES } from "@/components/realisations/cases";

export const metadata: Metadata = {
  title: "Réalisations — Études de cas Hagnéré Code",
  description:
    "4 études de cas chiffrées : LMNP.AI (5 400 clients), SCI-AI.app, et 2 sites vitrines premium. Résultats mesurés : +340 % SEO, ×2,5 leads, NPS +74.",
  alternates: { canonical: "/realisations" },
  openGraph: {
    title: "Réalisations — Hagnéré Code",
    description:
      "Du code livré, des résultats mesurés. 4 études de cas, NPS +74, 100 % des projets livrés au prix annoncé.",
    url: "/realisations",
    type: "website",
  },
};

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hagnere-code.fr/" },
    { "@type": "ListItem", position: 2, name: "Réalisations", item: "https://hagnere-code.fr/realisations" },
  ],
});

const itemListJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Réalisations Hagnéré Code",
  itemListElement: Object.values(CASES).map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `https://hagnere-code.fr/realisations/${c.slug}`,
    name: `${c.brandName} — ${c.category}`,
    description: c.heroIntro,
  })),
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json">{breadcrumbJsonLd}</script>
      <script type="application/ld+json">{itemListJsonLd}</script>
      <RealisationsIndexPage />
    </>
  );
}
