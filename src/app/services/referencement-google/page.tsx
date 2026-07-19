import type { Metadata } from "next";
import { SeoReferencement } from "@/components/seo-referencement/SeoReferencement";
import { SEO_FAQS, SEO_FORMATS } from "@/components/seo-referencement/content";
import { GUIDES } from "@/lib/guides";
import { OG_BASE, SERVICES_OG_IMAGE, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Agence SEO pour PME · Hagnéré Code",
  description:
    "Audit technique, stratégie éditoriale, maillage, Search Console et autorité. Une méthode transparente, sans promesse de position ni quota artificiel.",
  alternates: { canonical: "/services/referencement-google" },
  openGraph: {
    ...OG_BASE,
    title: "Agence SEO pour PME · Hagnéré Code",
    description:
      "Audit, architecture, contenus, maillage et autorité : une stratégie organique fondée sur les preuves disponibles et des livrables vérifiables.",
    url: "/services/referencement-google",
    images: [SERVICES_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agence SEO pour PME · Hagnéré Code",
    description:
      "Audit, architecture, contenus, maillage et autorité, sans promesse de position.",
    images: [SERVICES_OG_IMAGE.url],
  },
};

const pageUrl = `${SITE_URL}/services/referencement-google`;

const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Accompagnement SEO et référencement naturel pour PME",
  url: pageUrl,
  serviceType: "Audit et accompagnement en référencement naturel",
  description:
    "Audit technique, mesure Search Console, architecture par intentions, contenus sourcés, maillage interne, référencement local et construction d'autorité.",
  provider: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Hagnéré Code",
    legalName: "HAGNÉRÉ CODE SAS",
    url: SITE_URL,
    logo: `${SITE_URL}/logos/logo-dark.png`,
    vatID: "FR30993672856",
    email: "quentin@hagnere-patrimoine.fr",
    telephone: "+33374472018",
    address: {
      "@type": "PostalAddress",
      streetAddress: "82 impasse de Bellevue",
      postalCode: "73000",
      addressLocality: "Bassens",
      addressRegion: "Savoie",
      addressCountry: "FR",
    },
  },
  areaServed: [
    { "@type": "Country", name: "France" },
    { "@type": "AdministrativeArea", name: "Savoie" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Formats d'intervention SEO",
    itemListElement: SEO_FORMATS.map((format) => ({
      "@type": "Offer",
      name: format.title,
      description: format.description,
      url: `${SITE_URL}/demarrer-un-projet`,
      itemOffered: {
        "@type": "Service",
        name: format.title,
      },
    })),
  },
});

const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SEO_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
    { "@type": "ListItem", position: 3, name: "Référencement naturel", item: pageUrl },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json">{serviceJsonLd}</script>
      <script type="application/ld+json">{faqJsonLd}</script>
      <script type="application/ld+json">{breadcrumbJsonLd}</script>
      <SeoReferencement guideCount={GUIDES.length} />
    </>
  );
}
