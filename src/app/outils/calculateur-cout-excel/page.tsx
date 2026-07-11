import type { Metadata } from "next";
import { ExcelCalculator } from "@/components/tools/ExcelCalculator";
import { OG_BASE, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Combien coûte votre Excel ? Calcul gratuit · Hagnéré Code",
  description:
    "Chiffrez en 2 minutes le coût caché de vos fichiers Excel : temps perdu, erreurs, ressaisies. Gratuit, sans email obligatoire, ROI en mois.",
  alternates: { canonical: "/outils/calculateur-cout-excel" },
  openGraph: {
    ...OG_BASE,
    title: "Combien vous coûte réellement votre Excel ?",
    description:
      "Calculateur gratuit du coût caché de vos tableurs métier. ROI outil sur mesure en mois.",
    url: "/outils/calculateur-cout-excel",
    images: [DEFAULT_OG_IMAGE],
  },
};

const webAppJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Calculateur : combien vous coûte votre Excel ?",
  url: "https://hagnere-code.fr/outils/calculateur-cout-excel",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
});

// Le parent /outils est une redirection : le fil d'Ariane saute directement
// de l'accueil au calculateur.
const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hagnere-code.fr/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Calculateur coût Excel",
      item: "https://hagnere-code.fr/outils/calculateur-cout-excel",
    },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json">{webAppJsonLd}</script>
      <script type="application/ld+json">{breadcrumbJsonLd}</script>
      <ExcelCalculator />
    </>
  );
}
