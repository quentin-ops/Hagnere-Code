import type { Metadata } from "next";
import { MaintenanceEvolution } from "@/components/maintenance-evolution/MaintenanceEvolution";
import { OG_BASE, SERVICES_OG_IMAGE, SITE_URL } from "@/lib/seo";
import { ORGANIZATION_REF } from "@/lib/organization-structured-data";
import { serviceEntityId } from "@/lib/services";

/** Chemin canonique de la page : le domaine ne s'écrit plus en clair. */
const servicePath = "/services/maintenance-evolution" as const;
const pageUrl = `${SITE_URL}${servicePath}`;

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
  "@id": serviceEntityId(servicePath),
  name: "Maintenance applicative (TMA) et évolution continue",
  url: pageUrl,
  serviceType:
    "Tierce maintenance applicative (TMA), supervision et évolution de logiciels",
  // Fournisseur = la RÉFÉRENCE à l'entité publique, pas l'entité recopiée.
  // Le nœud complet (logo, fondateur, adresse, géo, horaires, contactPoint,
  // 17 zones desservies, catalogue, TVA, SIREN) pèse 6,6 Ko et était sérialisé
  // à l'identique sur chacune des onze pages service. C'est déjà le motif
  // employé par les guides et les réalisations : un seul nœud complet, publié
  // par l'accueil et par /services, référencé partout ailleurs par son @id.
  provider: ORGANIZATION_REF,
  areaServed: { "@type": "Country", name: "France" },
  description:
    "Maintenance applicative pour PME, ETI et scale-up : reprise, supervision, correctifs de sécurité, évolutions, exploitation d'infrastructure et reporting. Le devis précise l'équipe, les outils, les horaires de couverture, les objectifs de service, les accès et la réversibilité.",
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
      name: "Maintenance & évolution",
      item: pageUrl,
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
