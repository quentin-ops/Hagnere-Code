import type { Metadata } from "next";
import { TarifsPage } from "@/components/tarifs/TarifsPage";
import { OG_BASE, DEFAULT_OG_IMAGE } from "@/lib/seo";
import { PUBLIC_ORGANIZATION_JSON_LD } from "@/lib/organization-structured-data";

export const metadata: Metadata = {
  title: "Tarifs développement web & SaaS au forfait · Hagnéré Code",
  description:
    "Discovery Sprint et projets web sur devis. Prix, périmètre, délais, livrables, droits, accès, recette et éventuelle garantie sont détaillés avant engagement.",
  alternates: { canonical: "/tarifs" },
  openGraph: {
    ...OG_BASE,
    title: "Tarifs · Forfait fixe, jamais de surprise · Hagnéré Code",
    description:
      "Ordres de grandeur indicatifs pour cadrage, SaaS et sites vitrines. Le devis fixe le périmètre, les livrables, les accès, les droits et la recette.",
    url: "/tarifs",
    images: [DEFAULT_OG_IMAGE],
  },
};

const offersJsonLd = JSON.stringify({
  ...PUBLIC_ORGANIZATION_JSON_LD,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tarifs Hagnéré Code",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Discovery Sprint",
        price: "1500",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "1500",
          priceCurrency: "EUR",
          valueAddedTaxIncluded: false,
        },
        description:
          "Prix de 1 500 euros hors taxes. Deux jours de cadrage, prototype Figma cliquable et devis chiffré au forfait fixe. Déduit du devis si lancement.",
      },
    ],
  },
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hagnere-code.ai/" },
    { "@type": "ListItem", position: 2, name: "Tarifs", item: "https://hagnere-code.ai/tarifs" },
  ],
});


export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: offersJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <TarifsPage />
    </>
  );
}
