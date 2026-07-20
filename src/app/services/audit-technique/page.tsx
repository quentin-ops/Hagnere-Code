import type { Metadata } from "next";
import { AuditTechnique } from "@/components/audit-technique/AuditTechnique";
import { OG_BASE, SERVICES_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Audit technique · Décision documentée · Hagnéré Code",
  description:
    "Audit technique pour dirigeants, investisseurs et équipes produit : constats sourcés, hypothèses de coût, priorités, calendrier et livrables cadrés au devis.",
  alternates: { canonical: "/services/audit-technique" },
  openGraph: {
    ...OG_BASE,
    title: "Audit technique — Hagnéré Code",
    description:
      "Audit technique cadré pour une décision de direction : constats, hypothèses de coût, priorités et livrables définis au devis.",
    url: "/services/audit-technique",
    images: [SERVICES_OG_IMAGE],
  },
  twitter: { images: [SERVICES_OG_IMAGE.url] },
};

const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Audit technique indépendant, dette chiffrée en euros",
  url: "https://hagnere-code.ai/services/audit-technique",
  serviceType:
    "Audit technique indépendant (code, architecture, sécurité, performance, infrastructure, DevEx, FinOps, équipe) avec livrable board-ready Tech Debt P&L",
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
    "Audit technique pour PME, ETI, équipes produit et investisseurs : code, architecture, performance, sécurité, infrastructure, DevEx, coûts cloud et organisation. Les dimensions, livrables, hypothèses de chiffrage, calendrier et critères d'acceptation sont confirmés au devis.",
  offers: [
    {
      "@type": "Offer",
      name: "Audit Express · urgence",
      price: "8000",
      priceCurrency: "EUR",
      description:
        "Base budgétaire pour un diagnostic ciblé. Dimensions, intervenants, délai, accès, livrables et critères d'acceptation sont confirmés au devis.",
    },
    {
      "@type": "Offer",
      name: "Audit Standard",
      price: "18000",
      priceCurrency: "EUR",
      description:
        "Base budgétaire pour un format Standard. Dimensions, équipe, calendrier, volume et format des livrables sont confirmés après cadrage dans le devis signé.",
    },
    {
      "@type": "Offer",
      name: "Audit Deep · refonte ou levée",
      price: "38000",
      priceCurrency: "EUR",
      description:
        "Base budgétaire pour une décision complexe. Dimensions, compétences, scénarios, délai, livrables et restitution sont confirmés au devis.",
    },
    {
      "@type": "Offer",
      name: "Tech Due Diligence M&A · acquisition",
      price: "68000",
      priceCurrency: "EUR",
      description:
        "Base budgétaire pour une due diligence technique. Périmètre, intervenants, coordination avec les conseils, confidentialité, délais et livrables sont confirmés au devis.",
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
      name: "Audit technique",
      item: "https://hagnere-code.ai/services/audit-technique",
    },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <AuditTechnique />
    </>
  );
}
