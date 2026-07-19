import type { Metadata } from "next";
import { HomepageDesign } from "@/components/homepage/HomepageDesign";
import { OG_BASE, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Hagnéré Code — Agence web à Chambéry : sites, SaaS, SEO, Ads",
  description:
    "Agence web à Bassens, aux portes de Chambéry : sites, e-commerce, SaaS, applications métier, référencement naturel et Google Ads. Forfait fixe.",
  alternates: { canonical: "/" },
  openGraph: {
    ...OG_BASE,
    title: "Hagnéré Code — Agence web à Chambéry : sites, SaaS, SEO, Ads",
    description:
      "Agence web à Bassens, aux portes de Chambéry : sites, e-commerce, SaaS, applications métier, référencement naturel et Google Ads. Forfait fixe.",
    url: "/",
    images: [DEFAULT_OG_IMAGE],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://hagnere-code.ai/#organization",
  name: "Hagnéré Code",
  alternateName: ["Hagnere Code", "HAGNÉRÉ CODE", "HAGNERE CODE SAS"],
  legalName: "HAGNÉRÉ CODE SAS",
  url: "https://hagnere-code.ai",
  logo: "https://hagnere-code.ai/logos/logo-dark.png",
  image: "https://hagnere-code.ai/og-image.png",
  description:
    "Agence web complète basée à Bassens, aux portes de Chambéry (Savoie) : développement sur mesure de sites vitrines, e-commerce, SaaS, applications métier, outils internes, SEO et Google Ads.",
  foundingDate: "2025-09-30",
  founder: {
    "@type": "Person",
    name: "Quentin Hagnéré",
    jobTitle: "Gérant associé codeur",
    sameAs: ["https://www.linkedin.com/in/quentin-hagnere"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "82 impasse de Bellevue",
    addressLocality: "Bassens",
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
  "@id": "https://hagnere-code.ai/#website",
  name: "Hagnéré Code",
  url: "https://hagnere-code.ai",
  inLanguage: "fr-FR",
  publisher: { "@id": "https://hagnere-code.ai/#organization" },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Hagnéré Code",
  legalName: "HAGNÉRÉ CODE SAS",
  image: "https://hagnere-code.ai/og-image.png",
  logo: "https://hagnere-code.ai/logos/logo-dark.png",
  "@id": "https://hagnere-code.ai/#business",
  url: "https://hagnere-code.ai",
  priceRange: "€€€",
  email: "quentin@hagnere-patrimoine.fr",
  telephone: "+33374472018",
  address: {
    "@type": "PostalAddress",
    streetAddress: "82 impasse de Bellevue",
    addressLocality: "Bassens",
    addressRegion: "Savoie",
    postalCode: "73000",
    addressCountry: "FR",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Savoie" },
    { "@type": "AdministrativeArea", name: "Haute-Savoie" },
    { "@type": "AdministrativeArea", name: "Isère" },
    { "@type": "AdministrativeArea", name: "Ain" },
    { "@type": "AdministrativeArea", name: "Auvergne-Rhône-Alpes" },
    { "@type": "Country", name: "France" },
  ],
  vatID: "FR30993672856",
  serviceType: [
    "Création de site internet",
    "Développement web sur mesure",
    "Site e-commerce",
    "Développement SaaS",
    "Applications métier",
    "Outils internes",
    "Application mobile",
    "Référencement naturel (SEO)",
    "Campagnes Google Ads",
    "Refonte de site internet",
    "Maintenance et infogérance web",
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
      {/* JSON-LD inline dans le HTML initial : next/script beforeInteractive
          n'est pas supporté hors root layout et n'émet pas de balise
          application/ld+json parsable par les crawlers. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <HomepageDesign />
    </>
  );
}
