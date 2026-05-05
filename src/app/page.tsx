import type { Metadata } from "next";
import Script from "next/script";
import { HomepageDesign } from "@/components/homepage/HomepageDesign";

export const metadata: Metadata = {
  title: "Hagnéré Code — Studio produit · SaaS & outils métier",
  description:
    "Studio produit à Chambéry. Sites, applications métier et SaaS sur mesure, au forfait fixe, avec preuves internes assumées.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Hagnéré Code — Studio produit · SaaS & outils métier",
    description:
      "Studio produit à Chambéry. SaaS, applications métier, outils internes, forfait fixe.",
    url: "/",
    type: "website",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://hagnere-code.fr/#organization",
  name: "Hagnéré Code",
  alternateName: ["Hagnere Code", "HAGNÉRÉ CODE", "HAGNERE CODE SAS"],
  legalName: "HAGNÉRÉ CODE SAS",
  url: "https://hagnere-code.fr",
  logo: "https://hagnere-code.fr/logos/logo-dark.png",
  image: "https://hagnere-code.fr/og-image.png",
  description:
    "Studio de développement SaaS, applications métier, sites vitrines et outils internes. Laravel 13, Claude Code, forfait fixe. Basé à Chambéry.",
  foundingDate: "2025-09-30",
  founder: {
    "@type": "Person",
    name: "Quentin Hagnéré",
    jobTitle: "Gérant associé codeur",
    sameAs: ["https://www.linkedin.com/in/quentin-hagnere"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "7 rue Ernest Filliard",
    addressLocality: "Chambéry",
    addressRegion: "Savoie",
    postalCode: "73000",
    addressCountry: "FR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "quentin@hagnere-patrimoine.fr",
    telephone: "+33374472018",
    availableLanguage: ["French"],
    areaServed: "FR",
  },
  // Identifiants légaux FR (SIREN/SIRET/TVA + NAF/APE)
  taxID: "FR30993672856",
  vatID: "FR30993672856",
  identifier: [
    { "@type": "PropertyValue", propertyID: "SIREN", value: "993672856" },
    { "@type": "PropertyValue", propertyID: "SIRET", value: "99367285600016" },
    { "@type": "PropertyValue", propertyID: "NAF", value: "62.01Z" },
  ],
  sameAs: [
    "https://lmnp.ai",
    "https://sci-ai.app",
    "https://hagnere-patrimoine.fr",
    "https://hagnere-investissement.fr",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Hagnéré Code",
  url: "https://hagnere-code.fr",
  inLanguage: "fr-FR",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Hagnéré Code",
  legalName: "HAGNÉRÉ CODE SAS",
  image: "https://hagnere-code.fr/og-image.png",
  logo: "https://hagnere-code.fr/logos/logo-dark.png",
  "@id": "https://hagnere-code.fr/#business",
  url: "https://hagnere-code.fr",
  priceRange: "€€€",
  email: "quentin@hagnere-patrimoine.fr",
  telephone: "+33374472018",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7 rue Ernest Filliard",
    addressLocality: "Chambéry",
    addressRegion: "Savoie",
    postalCode: "73000",
    addressCountry: "FR",
  },
  areaServed: { "@type": "Country", name: "France" },
  vatID: "FR30993672856",
  serviceType: [
    "Développement SaaS",
    "Applications métier",
    "Sites vitrines",
    "Outils internes",
    "SEO",
    "Publicité en ligne",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "19:00",
  },
};

export default function Home() {
  const jsonLd = JSON.stringify([
    organizationJsonLd,
    websiteJsonLd,
    localBusinessJsonLd,
  ]);
  return (
    <>
      <Script
        id="homepage-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {jsonLd}
      </Script>
      <HomepageDesign />
    </>
  );
}
