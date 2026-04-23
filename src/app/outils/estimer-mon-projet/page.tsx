import type { Metadata } from "next";
import { EstimerMonProjet } from "@/components/estimer-mon-projet/EstimerMonProjet";

export const metadata: Metadata = {
  title: "Estimer mon projet — Calculateur IA · Hagnéré Code",
  description:
    "Décris ton projet en 90 secondes, notre IA Claude Opus 4.7 te renvoie une fourchette de prix, un phasing semaine par semaine, une stack recommandée et les risques à anticiper. Gratuit, sans inscription, basé sur nos 23 projets livrés.",
  alternates: { canonical: "/outils/estimer-mon-projet" },
  openGraph: {
    title: "Calculateur IA — Estime ton projet en 90 secondes · Hagnéré Code",
    description:
      "Notre IA chiffre ton projet selon nos barèmes Sprint Fixe™. Fourchette + phasing + stack + risques en 30 secondes.",
    url: "/outils/estimer-mon-projet",
    type: "website",
  },
};

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hagnere-code.fr/" },
    { "@type": "ListItem", position: 2, name: "Outils", item: "https://hagnere-code.fr/outils/calculateur-cout-excel" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Estimer mon projet",
      item: "https://hagnere-code.fr/outils/estimer-mon-projet",
    },
  ],
});

const softwareJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Calculateur de devis IA — Hagnéré Code",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Calculateur intelligent qui chiffre un projet web (SaaS, vitrine, outil interne, e-commerce, mobile) selon les barèmes Sprint Fixe™ de Hagnéré Code, propulsé par Claude Opus 4.7.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  publisher: {
    "@type": "Organization",
    name: "Hagnéré Code",
    url: "https://hagnere-code.fr",
  },
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json">{breadcrumbJsonLd}</script>
      <script type="application/ld+json">{softwareJsonLd}</script>
      <EstimerMonProjet />
    </>
  );
}
