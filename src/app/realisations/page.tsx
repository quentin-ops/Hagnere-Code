import type { Metadata } from "next";
import { RealisationsIndexPage } from "@/components/realisations/RealisationsIndexPage";
import { CASES } from "@/components/realisations/cases";

export const metadata: Metadata = {
  title: "Réalisations · Études de cas · Hagnéré Code",
  description:
    "Découvrez les réalisations Hagnéré Code : SaaS fiscaux, applications métier et sites d'acquisition. Contexte, modules livrés, stack technique et résultats mesurés.",
  alternates: { canonical: "/realisations" },
  openGraph: {
    title: "Réalisations · Hagnéré Code",
    description:
      "Quatre projets documentés : contexte, fonctionnement, stack et modules livrés.",
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
