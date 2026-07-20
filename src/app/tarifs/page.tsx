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
        description:
          "2 jours de cadrage, prototype Figma cliquable et devis chiffré forfait fixe. Déduit du devis si lancement.",
      },
      {
        "@type": "Offer",
        name: "Essentiel — Site vitrine ou MVP court",
        price: "6000",
        priceCurrency: "EUR",
        description: "Site vitrine 5–10 pages OU MVP SaaS 3–5 écrans, livré en 2–4 semaines.",
      },
      {
        "@type": "Offer",
        name: "Standard — Projet complet",
        price: "25000",
        priceCurrency: "EUR",
        description:
          "SaaS, outil interne ou marketplace 10–15 écrans avec back-office, intégrations et IA.",
      },
      {
        "@type": "Offer",
        name: "Partenariat — Capacité mensuelle",
        price: "8000",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "8000",
          priceCurrency: "EUR",
          unitCode: "MON",
        },
        description: "Forfait mensuel dont la capacité, les intervenants, la durée et les modalités de sortie sont définis au devis.",
      },
      {
        "@type": "Offer",
        name: "Care — Maintenance mensuelle",
        description:
          "Hébergement, monitoring, sauvegardes, bugfix prioritaires. Trois niveaux, sur devis.",
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
