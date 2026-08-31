import type { Metadata } from "next";
import { OutilsInternes } from "@/components/outils-internes/OutilsInternes";
import { OG_BASE, SERVICES_OG_IMAGE, SITE_URL } from "@/lib/seo";
import { ORGANIZATION_REF } from "@/lib/organization-structured-data";
import { serviceEntityId } from "@/lib/services";

/** Chemin canonique de la page : le domaine ne s'écrit plus en clair. */
const servicePath = "/services/outils-internes-sur-mesure" as const;
const pageUrl = `${SITE_URL}${servicePath}`;

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
  "@id": serviceEntityId(servicePath),
  name: "Développement d'outils internes sur mesure pour PME et ETI",
  url: pageUrl,
  serviceType: "Développement d'outils internes sur mesure pour PME et ETI",
  // Fournisseur = la RÉFÉRENCE à l'entité publique, pas l'entité recopiée.
  // Le nœud complet (logo, fondateur, adresse, géo, horaires, contactPoint,
  // 17 zones desservies, catalogue, TVA, SIREN) pèse 6,6 Ko et était sérialisé
  // à l'identique sur chacune des onze pages service. C'est déjà le motif
  // employé par les guides et les réalisations : un seul nœud complet, publié
  // par l'accueil et par /services, référencé partout ailleurs par son @id.
  provider: ORGANIZATION_REF,
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
      item: `${SITE_URL}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${SITE_URL}/services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Outils internes sur mesure",
      item: pageUrl,
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
