import type { Metadata } from "next";
import { MethodePage } from "@/components/methode/MethodePage";
import { OG_BASE } from "@/lib/seo";

const METHODE_OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Sprint Fixe™ — méthode de cadrage et de suivi de projet Hagnéré Code",
};

export const metadata: Metadata = {
  title: "Notre méthode au forfait fixe : Sprint Fixe™ · Hagnéré Code",
  description:
    "Périmètre, prix, jalons, validations et réversibilité : découvrez les points que Hagnéré Code propose de cadrer par écrit avant chaque projet.",
  alternates: { canonical: "/methode" },
  openGraph: {
    ...OG_BASE,
    title: "Sprint Fixe™ — La méthode Hagnéré Code",
    description:
      "Une méthode lisible pour cadrer le périmètre, le prix, les démonstrations, la recette et la remise des livrables.",
    url: "/methode",
    images: [METHODE_OG_IMAGE],
  },
  twitter: { images: [METHODE_OG_IMAGE] },
};

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hagnere-code.ai/" },
    { "@type": "ListItem", position: 2, name: "Méthode", item: "https://hagnere-code.ai/methode" },
  ],
});


export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <MethodePage />
    </>
  );
}
