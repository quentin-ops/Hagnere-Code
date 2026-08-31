import type { Metadata } from "next";
import { Ecommerce } from "@/components/ecommerce/Ecommerce";
import { OG_BASE, SERVICES_OG_IMAGE, SITE_URL } from "@/lib/seo";
import { ORGANIZATION_REF } from "@/lib/organization-structured-data";
import { serviceEntityId } from "@/lib/services";

/** Chemin canonique de la page : le domaine ne s'écrit plus en clair. */
const servicePath = "/services/ecommerce" as const;
const pageUrl = `${SITE_URL}${servicePath}`;

export const metadata: Metadata = {
  title: "E-commerce sur mesure · Alternative Shopify · Hagnéré Code",
  description:
    "Boutique e-commerce sur mesure, sans commission Hagnéré sur vos ventes. Paiement, livraison et facturation électronique intégrés selon le périmètre du devis.",
  alternates: { canonical: "/services/ecommerce" },
  openGraph: {
    ...OG_BASE,
    title: "Boutique e-commerce sur mesure — Hagnéré Code",
    description:
      "Alternative Shopify pour PME et ETI : architecture choisie selon le besoin, coût sur 36 mois documenté et intégrations françaises cadrées au devis.",
    url: "/services/ecommerce",
    images: [SERVICES_OG_IMAGE],
  },
  twitter: { images: [SERVICES_OG_IMAGE.url] },
};

const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": serviceEntityId(servicePath),
  name: "Développement de boutiques e-commerce sur mesure",
  url: pageUrl,
  serviceType:
    "Développement de boutiques e-commerce sur mesure pour PME et ETI",
  // Fournisseur = la RÉFÉRENCE à l'entité publique, pas l'entité recopiée.
  // Le nœud complet (logo, fondateur, adresse, géo, horaires, contactPoint,
  // 17 zones desservies, catalogue, TVA, SIREN) pèse 6,6 Ko et était sérialisé
  // à l'identique sur chacune des onze pages service. C'est déjà le motif
  // employé par les guides et les réalisations : un seul nœud complet, publié
  // par l'accueil et par /services, référencé partout ailleurs par son @id.
  provider: ORGANIZATION_REF,
  areaServed: { "@type": "Country", name: "France" },
  description:
    "Développement de boutiques e-commerce sur mesure : storefront, back-office, application mobile et automatisations selon le besoin. Intégrations possibles avec Stripe, Alma, Colissimo, Chronopost, Sage, Cegid, Pennylane, une Plateforme Agréée et Factur-X. Hébergement en France disponible, forfait défini au devis et aucune commission Hagnéré sur les ventes.",
  offers: [
    {
      "@type": "Offer",
      name: "Launch · Nouvelle boutique",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: "15000",
        maxPrice: "30000",
        priceCurrency: "EUR",
        valueAddedTaxIncluded: false,
      },
      description:
        "Budget projet indicatif de 15 à 30 k€ HT. Périmètre, coûts tiers et calendrier confirmés au devis après cadrage.",
    },
    {
      "@type": "Offer",
      name: "Scale · Refonte + app mobile",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: "30000",
        maxPrice: "70000",
        priceCurrency: "EUR",
        valueAddedTaxIncluded: false,
      },
      description:
        "Budget projet indicatif de 30 à 70 k€ HT. Application mobile, volumes de migration, marketplaces et calendrier confirmés au devis.",
    },
    {
      "@type": "Offer",
      name: "Enterprise · B2B + multi-pays",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: "70000",
        maxPrice: "120000",
        priceCurrency: "EUR",
        valueAddedTaxIncluded: false,
      },
      description:
        "Budget projet indicatif de 70 à 120 k€ HT. Pays, fiscalité, règles B2B, logistique et accompagnement confirmés au devis.",
    },
  ],
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
    {
      "@type": "ListItem",
      position: 3,
      name: "E-commerce sur mesure",
      item: pageUrl,
    },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <Ecommerce />
    </>
  );
}
