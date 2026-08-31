import type { Metadata } from "next";
import { SecuriteRgpd } from "@/components/securite-rgpd/SecuriteRgpd";
import { OG_BASE, SERVICES_OG_IMAGE, SITE_URL } from "@/lib/seo";
import { ORGANIZATION_REF } from "@/lib/organization-structured-data";
import { serviceEntityId } from "@/lib/services";

/** Chemin canonique de la page : le domaine ne s'écrit plus en clair. */
const servicePath = "/services/securite-rgpd" as const;
const pageUrl = `${SITE_URL}${servicePath}`;

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
  "@id": serviceEntityId(servicePath),
  name: "Audit sécurité et conformité RGPD, AI Act",
  url: pageUrl,
  serviceType: "Audit technique RGPD et AI Act, remédiation de sécurité",
  // Fournisseur = la RÉFÉRENCE à l'entité publique, pas l'entité recopiée.
  // Le nœud complet (logo, fondateur, adresse, géo, horaires, contactPoint,
  // 17 zones desservies, catalogue, TVA, SIREN) pèse 6,6 Ko et était sérialisé
  // à l'identique sur chacune des onze pages service. C'est déjà le motif
  // employé par les guides et les réalisations : un seul nœud complet, publié
  // par l'accueil et par /services, référencé partout ailleurs par son @id.
  provider: ORGANIZATION_REF,
  areaServed: { "@type": "Country", name: "France" },
  description:
    "Audit technique pour PME et équipes produit : cartographie des sous-traitants et flux, analyse des mesures de sécurité, documentation des écarts et remédiation codée. Les qualifications juridiques et missions de DPO restent validées par le professionnel désigné par le client.",
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Sécurité & RGPD",
      item: pageUrl,
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
