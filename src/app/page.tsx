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
  name: "Hagnéré Code",
  alternateName: "Hagnere Code",
  url: "https://hagnere-code.fr",
  logo: "https://hagnere-code.fr/logos/logo-dark.png",
  description:
    "Studio de développement SaaS, applications métier, sites vitrines et outils internes. Laravel 13, Claude Code, forfait fixe. Basé à Chambéry.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chambéry",
    addressRegion: "Savoie",
    postalCode: "73000",
    addressCountry: "FR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "quentin@hagnere-patrimoine.fr",
    availableLanguage: ["French"],
    areaServed: "FR",
  },
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
  image: "https://hagnere-code.fr/og-image.png",
  "@id": "https://hagnere-code.fr/#business",
  url: "https://hagnere-code.fr",
  priceRange: "€€€",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chambéry",
    postalCode: "73000",
    addressCountry: "FR",
  },
  areaServed: { "@type": "Country", name: "France" },
  serviceType: [
    "Développement SaaS",
    "Applications métier",
    "Sites vitrines",
    "Outils internes",
    "SEO",
    "Publicité en ligne",
  ],
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
