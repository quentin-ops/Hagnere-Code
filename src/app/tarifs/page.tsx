import type { Metadata } from "next";
import { TarifsPage } from "@/components/tarifs/TarifsPage";
import { OG_BASE, SITE_URL } from "@/lib/seo";
import {
  ORGANIZATION_ID,
  PUBLIC_ORGANIZATION_JSON_LD,
} from "@/lib/organization-structured-data";

// Image sociale dédiée : /tarifs partageait /og-image.png avec 27 autres URL,
// dont l'accueil. La route est déclarée explicitement (et non laissée à la
// convention de fichier) pour que og:image ET twitter:image restent maîtrisés,
// comme sur les 18 guides.
const TARIFS_OG_IMAGE = {
  url: `${SITE_URL}/tarifs/opengraph-image`,
  width: 1200,
  height: 630,
  alt: "Tarifs Hagnéré Code — forfait fixe et prix publics hors taxes",
};

export const metadata: Metadata = {
  title: "Tarifs développement web & SaaS au forfait · Hagnéré Code",
  description:
    "Discovery Sprint et projets web sur devis. Prix, périmètre, délais, livrables, droits, accès, recette et éventuelle garantie sont détaillés avant engagement.",
  alternates: { canonical: "/tarifs" },
  openGraph: {
    ...OG_BASE,
    title: "Tarifs · Forfait fixe, périmètre écrit · Hagnéré Code",
    description:
      "Ordres de grandeur indicatifs pour cadrage, SaaS et sites vitrines. Le devis fixe le périmètre, les livrables, les accès, les droits et la recette.",
    url: "/tarifs",
    images: [TARIFS_OG_IMAGE],
  },
  twitter: { images: [TARIFS_OG_IMAGE.url] },
};

// L'entité est publiée telle quelle. Elle redéfinissait auparavant son propre
// `hasOfferCatalog` ici : le même @id #organization annonçait alors un
// catalogue de 11 prestations sur l'accueil, /agence, /equipe et /contact, mais
// un catalogue d'une seule offre sur /tarifs — soit deux descriptions
// incompatibles de l'offre selon la page crawlée, précisément sur la page la
// plus susceptible de servir de landing page publicitaire.
const organizationJsonLd = JSON.stringify({ ...PUBLIC_ORGANIZATION_JSON_LD });

// Le Discovery Sprint est le seul prix ferme publié sur le site : il vit dans
// son propre nœud, avec son propre @id, plutôt que d'écraser l'entité.
const discoverySprintJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/tarifs#discovery-sprint`,
  name: "Discovery Sprint",
  url: `${SITE_URL}/tarifs`,
  serviceType: "Cadrage de projet web : périmètre, prototype et devis ferme",
  provider: { "@id": ORGANIZATION_ID },
  offers: {
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
      "Prix de 1 500 euros hors taxes. Deux jours de cadrage, prototype Figma cliquable et devis chiffré au forfait fixe. Si la phase 2 est lancée avec nous, le devis précise la déduction applicable.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: organizationJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: discoverySprintJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <TarifsPage />
    </>
  );
}
