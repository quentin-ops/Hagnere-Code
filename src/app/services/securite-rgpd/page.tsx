import type { Metadata } from "next";
import { SecuriteRgpd } from "@/components/securite-rgpd/SecuriteRgpd";
import { OG_BASE, SERVICES_OG_IMAGE } from "@/lib/seo";
import { PUBLIC_ORGANIZATION_ENTITY } from "@/lib/organization-structured-data";

export const metadata: Metadata = {
  title: "Audit sécurité & conformité RGPD, AI Act · Hagnéré Code",
  description:
    "Audit technique RGPD et AI Act, cartographie des flux, plan d'action et remédiation codée. Coordination avec votre DPO ou conseil, périmètre fixé au devis.",
  alternates: { canonical: "/services/securite-rgpd" },
  openGraph: {
    ...OG_BASE,
    title: "Sécurité & RGPD — Hagnéré Code",
    description:
      "Audit technique, cartographie, plan d'action et remédiation codée pour les projets RGPD, AI Act, DORA et NIS2, en coordination avec votre conseil.",
    url: "/services/securite-rgpd",
    images: [SERVICES_OG_IMAGE],
  },
  twitter: { images: [SERVICES_OG_IMAGE.url] },
};

const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Audit sécurité et conformité RGPD, AI Act",
  url: "https://hagnere-code.ai/services/securite-rgpd",
  serviceType: "Audit technique RGPD et AI Act, remédiation de sécurité",
  // Fournisseur = l'entité publique unique, importée du registre plutôt que
  // recopiée : adresse, TVA, e-mail et téléphone n'existent qu'à un seul
  // endroit, et la forme du logo reste celle validée pour Google (ImageObject
  // dimensionné) sur toutes les pages.
  provider: PUBLIC_ORGANIZATION_ENTITY,
  areaServed: { "@type": "Country", name: "France" },
  description:
    "Audit technique pour PME et équipes produit : cartographie des sous-traitants et flux, analyse des mesures de sécurité, documentation des écarts et remédiation codée. Les qualifications juridiques et missions de DPO restent validées par le professionnel désigné par le client.",
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
      name: "Sécurité & RGPD",
      item: "https://hagnere-code.ai/services/securite-rgpd",
    },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <SecuriteRgpd />
    </>
  );
}
