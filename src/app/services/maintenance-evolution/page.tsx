import type { Metadata } from "next";
import { MaintenanceEvolution } from "@/components/maintenance-evolution/MaintenanceEvolution";
import { OG_BASE, SERVICES_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Maintenance applicative & TMA sur mesure · Hagnéré Code",
  description:
    "Maintenance, supervision et évolution d'applications : périmètre, équipe, niveaux de service et réversibilité définis dans un devis adapté à votre production.",
  alternates: { canonical: "/services/maintenance-evolution" },
  openGraph: {
    ...OG_BASE,
    title: "Maintenance & évolution — Hagnéré Code",
    description:
      "Maintenance, supervision, correctifs et évolutions avec responsabilités, niveaux de service et réversibilité cadrés au contrat.",
    url: "/services/maintenance-evolution",
    images: [SERVICES_OG_IMAGE],
  },
  twitter: { images: [SERVICES_OG_IMAGE.url] },
};

const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Maintenance applicative (TMA) et évolution continue",
  url: "https://hagnere-code.ai/services/maintenance-evolution",
  serviceType:
    "Tierce maintenance applicative (TMA), supervision et évolution de logiciels",
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
    "Maintenance applicative pour PME, ETI et scale-up : reprise, supervision, correctifs de sécurité, évolutions, exploitation d'infrastructure et reporting. Le devis précise l'équipe, les outils, les horaires de couverture, les objectifs de service, les accès et la réversibilité.",
  offers: [
    {
      "@type": "Offer",
      name: "Audit flash",
      price: "2000",
      priceCurrency: "EUR",
      description:
        "Diagnostic initial dont le périmètre, les jours mobilisés et les livrables sont précisés dans le devis.",
    },
    {
      "@type": "Offer",
      name: "Essentiel · Run",
      price: "2500",
      priceCurrency: "EUR",
      description:
        "Base indicative pour une application stable. Volume, supervision, support, délais de traitement et reporting sont confirmés au devis.",
    },
    {
      "@type": "Offer",
      name: "Scale · Évolution",
      price: "6500",
      priceCurrency: "EUR",
      description:
        "Base indicative pour maintenance et évolutions régulières. Équipe, volume, outils, couverture et rituels sont définis au devis.",
    },
    {
      "@type": "Offer",
      name: "Premium · Partner",
      price: "14000",
      priceCurrency: "EUR",
      description:
        "Base indicative pour un dispositif renforcé. Astreinte, objectifs de reprise, audits tiers et engagements de service sont optionnels et contractualisés selon l'architecture.",
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
      name: "Maintenance & évolution",
      item: "https://hagnere-code.ai/services/maintenance-evolution",
    },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <MaintenanceEvolution />
    </>
  );
}
