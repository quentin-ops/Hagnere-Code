import type { Metadata } from "next";
import { Ecommerce } from "@/components/ecommerce/Ecommerce";
import { buildEcommerceFaqJsonLd } from "@/components/ecommerce/faq-content";
import { OG_BASE, SERVICES_OG_IMAGE } from "@/lib/seo";

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
  name: "Développement de boutiques e-commerce sur mesure",
  url: "https://hagnere-code.ai/services/ecommerce",
  serviceType:
    "Développement de boutiques e-commerce sur mesure pour PME et ETI",
  provider: {
    "@type": "Organization",
    name: "Hagnéré Code",
    "@id": "https://hagnere-code.ai/#organization",
    legalName: "HAGNERE CODE",
    vatID: "FR30993672856",
    url: "https://hagnere-code.ai",
    logo: "https://hagnere-code.ai/logos/logo-dark.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "82 impasse de Bellevue",
      postalCode: "73000",
      addressLocality: "Bassens",
      addressRegion: "Savoie",
      addressCountry: "FR",
    },
    email: "quentin@hagnere-patrimoine.fr",
    telephone: "+33374472018",
  },
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

const faqJsonLd = JSON.stringify(buildEcommerceFaqJsonLd());

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hagnere-code.ai/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://hagnere-code.ai/services" },
    {
      "@type": "ListItem",
      position: 3,
      name: "E-commerce sur mesure",
      item: "https://hagnere-code.ai/services/ecommerce",
    },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <Ecommerce />
    </>
  );
}
