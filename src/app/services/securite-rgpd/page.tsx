import type { Metadata } from "next";
import { SecuriteRgpd } from "@/components/securite-rgpd/SecuriteRgpd";
import { OG_BASE, SERVICES_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Audit sécurité & conformité RGPD, AI Act · Hagnéré Code",
  description:
    "Audit technique RGPD et AI Act, cartographie des flux, plan d'action et remédiation codée. Coordination avec votre DPO ou conseil, périmètre fixé au devis.",
  alternates: { canonical: "/services/securite-rgpd" },
  openGraph: {
    ...OG_BASE,
    title: "Sécurité & RGPD — Hagnéré Code",
    description:
      "Audit technique, cartographie, plan d'action et remédiation codée pour les projets RGPD, AI Act, DORA et NIS2, en coordination avec votre conseil.",
    url: "/services/securite-rgpd",
    images: [SERVICES_OG_IMAGE],
  },
  twitter: { images: [SERVICES_OG_IMAGE.url] },
};

const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Audit sécurité et conformité RGPD, AI Act",
  url: "https://hagnere-code.ai/services/securite-rgpd",
  serviceType: "Audit technique RGPD et AI Act, remédiation de sécurité",
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
    "Audit technique pour PME et équipes produit : cartographie des sous-traitants et flux, analyse des mesures de sécurité, documentation des écarts et remédiation codée. Les qualifications juridiques et missions de DPO restent validées par le professionnel désigné par le client.",
  offers: [
    {
      "@type": "Offer",
      name: "Diagnostic technique AI Act",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "1500",
        priceCurrency: "EUR",
        valueAddedTaxIncluded: false,
      },
      description:
        "Budget indicatif HT pour inventorier les systèmes IA, fournisseurs, finalités, données et mesures techniques. Qualification juridique à valider avec le conseil du client.",
    },
    {
      "@type": "Offer",
      name: "Cadrage RGPD",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "5000",
        priceCurrency: "EUR",
        valueAddedTaxIncluded: false,
      },
      description:
        "Budget indicatif HT pour la cartographie, l'audit technique, la documentation des écarts et un plan d'action chiffré. Périmètre confirmé au devis.",
    },
    {
      "@type": "Offer",
      name: "Accompagnement RGPD technique récurrent",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: "1200",
        maxPrice: "3500",
        priceCurrency: "EUR",
        valueAddedTaxIncluded: false,
      },
      description:
        "Budget mensuel indicatif HT pour maintenir la documentation, suivre le plan d'action et coordonner la remédiation technique avec le DPO ou conseil du client. Modalités confirmées au devis.",
    },
  ],
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hagnere-code.ai/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://hagnere-code.ai/services" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Sécurité & RGPD",
      item: "https://hagnere-code.ai/services/securite-rgpd",
    },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <SecuriteRgpd />
    </>
  );
}
