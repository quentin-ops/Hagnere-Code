import type { Metadata } from "next";
import { SaasApplicationsMetier } from "@/components/saas-applications/SaasApplicationsMetier";
import { OG_BASE, SERVICES_OG_IMAGE } from "@/lib/seo";

// Le title porte « agence développement SaaS sur mesure » plutôt que le seul
// « SaaS sur mesure » : l'audit SERP a montré que cette requête commerciale
// est servie par des pages service, et cette page est la nôtre. Créer une
// page /agence-developpement-saas distincte l'aurait cannibalisée.
export const metadata: Metadata = {
  title: "Agence développement SaaS sur mesure · Hagnéré Code",
  description:
    "Agence de développement SaaS sur mesure : cadrage, UX, web, mobile, IA, mise en production et reprise. Forfait fixe, code et documentation transférés.",
  alternates: { canonical: "/services/saas-applications-metier" },
  openGraph: {
    ...OG_BASE,
    title: "Agence développement SaaS sur mesure · Hagnéré Code",
    description:
      "Plateformes SaaS B2B et applications métier : cadrage, développement, mise en production et transfert. Forfait fixe et preuves produits vérifiables.",
    url: "/services/saas-applications-metier",
    images: [SERVICES_OG_IMAGE],
  },
  twitter: { images: [SERVICES_OG_IMAGE.url] },
};

// JSON-LD structured data — static, author-controlled content. The rendered
// string is injected in the script element after escaping '<' characters.
const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Développement SaaS et applications métier sur mesure",
  url: "https://hagnere-code.ai/services/saas-applications-metier",
  serviceType: "Développement de SaaS et applications métier sur mesure",
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
    "Développement de plateformes B2B, espaces clients, marketplaces, applications métier et apps mobiles iOS/Android. Stack Next.js, React, TypeScript, React Native et modèles d'IA choisis selon le cas d'usage.",
  offers: [
    {
      "@type": "Offer",
      name: "Essentiel · MVP court",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: "15000",
        maxPrice: "30000",
        priceCurrency: "EUR",
        valueAddedTaxIncluded: false,
      },
      description:
        "MVP SaaS centré sur un parcours critique complet, avec accès, vente, facturation et exploitation cadrés selon le mode de commercialisation",
    },
    {
      "@type": "Offer",
      name: "Standard · MVP complet",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: "30000",
        maxPrice: "60000",
        priceCurrency: "EUR",
        valueAddedTaxIncluded: false,
      },
      description:
        "SaaS centré sur un parcours critique complet ; accès, isolation, administration, paiement, API, automatisations et IA cadrés selon les données et le contrat",
    },
    {
      "@type": "Offer",
      name: "Partenariat · Co-build",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: "120000",
        priceCurrency: "EUR",
        valueAddedTaxIncluded: false,
      },
      description: "Équipe dédiée et feuille de route pluri-lots sur la durée",
    },
  ],
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: "https://hagnere-code.ai/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://hagnere-code.ai/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "SaaS & applications métier",
      item: "https://hagnere-code.ai/services/saas-applications-metier",
    },
  ],
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serviceJsonLd.replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd.replace(/</g, "\\u003c"),
        }}
      />
      <SaasApplicationsMetier />
    </>
  );
}
