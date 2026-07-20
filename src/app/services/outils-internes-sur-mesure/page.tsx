import type { Metadata } from "next";
import { OutilsInternes } from "@/components/outils-internes/OutilsInternes";
import { OG_BASE, SERVICES_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Outils internes sur mesure · Sortir d'Excel · Hagnéré Code",
  description:
    "CRM, ERP léger et back-office sur mesure : périmètre, budget, calendrier, hébergement, accès et réversibilité sont précisés au devis.",
  alternates: { canonical: "/services/outils-internes-sur-mesure" },
  openGraph: {
    ...OG_BASE,
    title: "Outils internes sur mesure PME & ETI — Hagnéré Code",
    description:
      "Back-offices, CRM métier et ERP légers avec intégrations étudiées selon votre SI. Périmètre, données, délais et droits au devis.",
    url: "/services/outils-internes-sur-mesure",
    images: [SERVICES_OG_IMAGE],
  },
  twitter: { images: [SERVICES_OG_IMAGE.url] },
};

// JSON-LD structured data
const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Développement d'outils internes sur mesure pour PME et ETI",
  url: "https://hagnere-code.ai/services/outils-internes-sur-mesure",
  serviceType: "Développement d'outils internes sur mesure pour PME et ETI",
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
    "Développement d'outils internes sur mesure pour PME et ETI : CRM métier, ERP léger, back-offices et automatisations. Les intégrations, technologies, intervenants, délais, hébergement, accès et conditions de reprise sont vérifiés puis écrits au devis.",
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
      name: "Outils internes sur mesure",
      item: "https://hagnere-code.ai/services/outils-internes-sur-mesure",
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
      <OutilsInternes />
    </>
  );
}
