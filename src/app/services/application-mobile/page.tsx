import type { Metadata } from "next";
import { MobileApplication } from "@/components/application-mobile/MobileApplication";
import { OG_BASE } from "@/lib/seo";

const MOBILE_OG_IMAGE = {
  url: "/og-image-services.png",
  width: 1200,
  height: 630,
  alt: "Services Hagnéré Code — applications mobiles iOS & Android sur mesure",
};

export const metadata: Metadata = {
  title: "Création d'application mobile iOS & Android · Hagnéré Code",
  description:
    "Conception d'applications iOS et Android avec React Native : cadrage, comptes stores au nom du client, livraison, droits et maintenance précisés sur devis.",
  alternates: { canonical: "/services/application-mobile" },
  openGraph: {
    ...OG_BASE,
    title: "Application mobile iOS & Android — Hagnéré Code",
    description:
      "React Native + Expo, préparation des stores et mises à jour encadrées. Périmètre, comptes, droits, calendrier indicatif et maintenance sont confirmés au devis.",
    url: "/services/application-mobile",
    images: [MOBILE_OG_IMAGE],
  },
  twitter: { images: [MOBILE_OG_IMAGE.url] },
};

const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Création d'application mobile iOS & Android sur mesure",
  url: "https://hagnere-code.ai/services/application-mobile",
  serviceType:
    "Création d'applications mobiles natives iOS et Android sur mesure",
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
    "Développement d'applications mobiles iOS et Android via React Native et Expo. Le devis précise le périmètre de soumission aux stores, les comptes client, le calendrier, les livrables, les droits transférés après paiement complet et la maintenance éventuelle.",
  offers: [
    {
      "@type": "Offer",
      name: "Lancement · MVP iOS + Android",
      priceCurrency: "EUR",
      url: "https://hagnere-code.ai/services/application-mobile#tarifs",
      availability: "https://schema.org/InStock",
      description:
        "App native iOS + Android focalisée sur un cas d'usage : fidélité, réservation, click & collect ou app interne. Périmètre, soumissions, planning indicatif et forfait sont confirmés au devis après cadrage.",
    },
    {
      "@type": "Offer",
      name: "Performance · App complète",
      priceCurrency: "EUR",
      url: "https://hagnere-code.ai/services/application-mobile#tarifs",
      availability: "https://schema.org/InStock",
      description:
        "App complète iOS + Android + Web mobile avec fonctionnalités et intégrations sélectionnées au cadrage. Planning indicatif, tests, soumissions et forfait sont confirmés au devis.",
    },
    {
      "@type": "Offer",
      name: "Sur-mesure · Marketplace, IoT, IA embarquée",
      priceCurrency: "EUR",
      url: "https://hagnere-code.ai/services/application-mobile#tarifs",
      availability: "https://schema.org/InStock",
      description:
        "Marketplace, IoT, modules natifs, extensions Watch ou Wear OS, multilingue et intégrations métier selon faisabilité. Le périmètre, les licences, le planning indicatif et le prix sont définis après cadrage approfondi.",
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
      name: "Application mobile iOS & Android",
      item: "https://hagnere-code.ai/services/application-mobile",
    },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <MobileApplication />
    </>
  );
}
