import type { Metadata } from "next";
import { Ecommerce } from "@/components/ecommerce/Ecommerce";
import { buildEcommerceFaqJsonLd } from "@/components/ecommerce/faq-content";
import { OG_BASE, SERVICES_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "E-commerce sur mesure · Alternative Shopify · Hagnéré Code",
  description:
    "Boutique e-commerce sur mesure, 0 % de commission sur vos ventes. Stripe, Alma, Colissimo intégrés, Factur-X 2026 natif, forfait fixe de 15 à 120 k€.",
  alternates: { canonical: "/services/ecommerce" },
  openGraph: {
    ...OG_BASE,
    title: "Boutique e-commerce sur mesure — Hagnéré Code",
    description:
      "Alternative Shopify Plus pour PME/ETI : Next.js + Laravel + app mobile React Native. Forfait fixe de 15 à 120 k€, 0 % sur vos ventes, intégrations FR natives.",
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
    legalName: "HAGNÉRÉ CODE SAS",
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
    "Développement de boutiques e-commerce sur mesure : storefront Next.js + back-office Laravel + app mobile React Native + IA Claude native. Intégrations FR natives (Stripe, Alma, Colissimo, Chronopost, Sage, Cegid, Pennylane, Chorus Pro, Factur-X 2026). Hébergement France. Forfait fixe, zéro commission sur les ventes.",
  offers: [
    {
      "@type": "Offer",
      name: "Launch · Nouvelle boutique",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: "15000",
        maxPrice: "30000",
        priceCurrency: "EUR",
      },
      description:
        "Nouvelle boutique e-commerce de 15 à 30 k€ jusqu'à 500 produits, Stripe + Alma + 2 transporteurs, Factur-X, livrée en 6-8 semaines",
    },
    {
      "@type": "Offer",
      name: "Scale · Refonte + app mobile",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: "30000",
        maxPrice: "70000",
        priceCurrency: "EUR",
      },
      description:
        "Refonte complète de 30 à 70 k€ incluant app mobile iOS + Android, migration Shopify/Prestashop, marketplaces, livrée en 8-12 semaines",
    },
    {
      "@type": "Offer",
      name: "Enterprise · B2B + multi-pays",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: "70000",
        maxPrice: "120000",
        priceCurrency: "EUR",
      },
      description:
        "Boutique B2B + B2C multi-pays de 70 à 120 k€, TVA OSS intracom, multi-entrepôt, programme fidélité, livrée en 12-16 semaines",
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
      <script type="application/ld+json">{serviceJsonLd}</script>
      <script type="application/ld+json">{faqJsonLd}</script>
      <script type="application/ld+json">{breadcrumbJsonLd}</script>
      <Ecommerce />
    </>
  );
}
