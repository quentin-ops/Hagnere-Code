import type { Metadata } from "next";
import { HomepageDesign } from "@/components/homepage/HomepageDesign";
import { OG_BASE, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Hagnéré Code — Développement SaaS, sites & outils sur mesure",
  description:
    "Studio à Chambéry : SaaS, applications métier et sites sur mesure au forfait fixe. Code livré chez vous, garantie 30 jours, réponse sous 24 h.",
  alternates: { canonical: "/" },
  openGraph: {
    ...OG_BASE,
    title: "Hagnéré Code — Développement SaaS, sites & outils sur mesure",
    description:
      "Studio à Chambéry : SaaS, applications métier et sites sur mesure au forfait fixe. Code livré chez vous, garantie 30 jours, réponse sous 24 h.",
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
    "Studio de développement SaaS, applications métier, sites vitrines et outils internes. Next.js, React, TypeScript, IA native, forfait fixe. Basé à Chambéry.",
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
