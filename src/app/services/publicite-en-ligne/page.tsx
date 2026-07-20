import type { Metadata } from "next";
import { PubliciteEnLigne } from "@/components/publicite-en-ligne/PubliciteEnLigne";
import { OG_BASE, SERVICES_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Agence Google Ads & Meta Ads · Forfait fixe · Hagnéré Code",
  description:
    "Pilotage Google Ads, Meta et LinkedIn au forfait. Périmètre, tracking, reporting, intervenants et droits sont détaillés avant engagement.",
  alternates: { canonical: "/services/publicite-en-ligne" },
  openGraph: {
    ...OG_BASE,
    title: "Publicité en ligne — Hagnéré Code",
    description:
      "SEA et Paid Social avec périmètre, mesure, budget média, responsabilités et livrables détaillés dans le devis.",
    url: "/services/publicite-en-ligne",
    images: [SERVICES_OG_IMAGE],
  },
  twitter: { images: [SERVICES_OG_IMAGE.url] },
};

const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gestion de publicité en ligne — Google Ads, Meta & LinkedIn",
  url: "https://hagnere-code.ai/services/publicite-en-ligne",
  serviceType:
    "Gestion de campagnes publicitaires en ligne (SEA, Paid Social, Display) avec tracking server-side",
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
    "Cadrage et pilotage de campagnes publicitaires, du tracking et du reporting. Les plateformes, créations, intervenants, droits, outils et responsabilités réellement inclus sont détaillés dans le devis.",
  offers: [
    {
      "@type": "Offer",
      name: "Audit Ads",
      price: "1500",
      priceCurrency: "EUR",
      description:
        "Audit des comptes et du tracking avec périmètre, livrables et restitution précisés au devis. Toute remise éventuelle doit être écrite dans le devis signé.",
    },
    {
      "@type": "Offer",
      name: "Starter · Démarrage Ads",
      price: "1800",
      priceCurrency: "EUR",
      description:
        "Scénario indicatif pour 1 à 2 canaux : tracking, créations et reporting à confirmer selon les accès, le consentement et l'intervenant nommé au devis.",
    },
    {
      "@type": "Offer",
      name: "Scale · Performance multi-canaux",
      price: "3500",
      priceCurrency: "EUR",
      description:
        "Scénario multi-canaux indicatif : plateformes, tracking, créations, reporting, alertes et budget média sont dimensionnés dans le devis.",
    },
    {
      "@type": "Offer",
      name: "Premium · Performance avancée",
      price: "4500",
      priceCurrency: "EUR",
      description:
        "Scénario multi-canaux sur devis : attribution, créations et tests dimensionnés selon le budget, les données et les intervenants réellement mobilisés.",
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
      name: "Publicité en ligne",
      item: "https://hagnere-code.ai/services/publicite-en-ligne",
    },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <PubliciteEnLigne />
    </>
  );
}
