import type { Metadata } from "next";
import { AuditTechnique } from "@/components/audit-technique/AuditTechnique";
import { OG_BASE, SERVICES_OG_IMAGE, SITE_URL } from "@/lib/seo";
import { ORGANIZATION_REF } from "@/lib/organization-structured-data";
import { serviceEntityId } from "@/lib/services";

/** Chemin canonique de la page : le domaine ne s'écrit plus en clair. */
const servicePath = "/services/audit-technique" as const;
const pageUrl = `${SITE_URL}${servicePath}`;

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
  "@id": serviceEntityId(servicePath),
  name: "Audit technique indépendant, dette chiffrée en euros",
  url: pageUrl,
  serviceType:
    "Audit technique indépendant (code, architecture, sécurité, performance, infrastructure, DevEx, FinOps, équipe) avec livrable board-ready Tech Debt P&L",
  // Fournisseur = la RÉFÉRENCE à l'entité publique, pas l'entité recopiée.
  // Le nœud complet (logo, fondateur, adresse, géo, horaires, contactPoint,
  // 17 zones desservies, catalogue, TVA, SIREN) pèse 6,6 Ko et était sérialisé
  // à l'identique sur chacune des onze pages service. C'est déjà le motif
  // employé par les guides et les réalisations : un seul nœud complet, publié
  // par l'accueil et par /services, référencé partout ailleurs par son @id.
  provider: ORGANIZATION_REF,
  areaServed: { "@type": "Country", name: "France" },
  description:
    "Audit technique pour PME, ETI, équipes produit et investisseurs : code, architecture, performance, sécurité, infrastructure, DevEx, coûts cloud et organisation. Les dimensions, livrables, hypothèses de chiffrage, calendrier et critères d'acceptation sont confirmés au devis.",
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
      name: "Audit technique",
      item: pageUrl,
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
