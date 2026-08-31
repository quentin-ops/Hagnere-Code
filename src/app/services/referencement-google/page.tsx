import type { Metadata } from "next";
import { SeoReferencement } from "@/components/seo-referencement/SeoReferencement";
import { SEO_FORMATS } from "@/components/seo-referencement/content";
import { PUBLISHED_GUIDES } from "@/lib/guides";
import { OG_BASE, SERVICES_OG_IMAGE, SITE_URL } from "@/lib/seo";
import { ORGANIZATION_REF } from "@/lib/organization-structured-data";
import { serviceEntityId } from "@/lib/services";

export const metadata: Metadata = {
  title: "Agence SEO pour PME · Hagnéré Code",
  description:
    "Audit technique, stratégie éditoriale, maillage, Search Console et autorité. Une méthode transparente, sans promesse de position ni quota artificiel.",
  alternates: { canonical: "/services/referencement-google" },
  openGraph: {
    ...OG_BASE,
    title: "Agence SEO pour PME · Hagnéré Code",
    description:
      "Audit, architecture, contenus, maillage et autorité : une stratégie organique fondée sur les preuves disponibles et des livrables vérifiables.",
    url: "/services/referencement-google",
    images: [SERVICES_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agence SEO pour PME · Hagnéré Code",
    description:
      "Audit, architecture, contenus, maillage et autorité, sans promesse de position.",
    images: [SERVICES_OG_IMAGE.url],
  },
};

/** Chemin canonique de la page : le domaine ne s'écrit plus en clair. */
const servicePath = "/services/referencement-google" as const;
const pageUrl = `${SITE_URL}${servicePath}`;

const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": serviceEntityId(servicePath),
  name: "Accompagnement SEO et référencement naturel pour PME",
  url: pageUrl,
  serviceType: "Audit et accompagnement en référencement naturel",
  description:
    "Audit technique, mesure Search Console, architecture par intentions, contenus sourcés, maillage interne, référencement local et construction d'autorité.",
  // Fournisseur = la RÉFÉRENCE à l'entité publique, pas l'entité recopiée.
  // Le nœud complet (logo, fondateur, adresse, géo, horaires, contactPoint,
  // 17 zones desservies, catalogue, TVA, SIREN) pèse 6,6 Ko et était sérialisé
  // à l'identique sur chacune des onze pages service. C'est déjà le motif
  // employé par les guides et les réalisations : un seul nœud complet, publié
  // par l'accueil et par /services, référencé partout ailleurs par son @id.
  provider: ORGANIZATION_REF,
  areaServed: [
    { "@type": "Country", name: "France" },
    { "@type": "AdministrativeArea", name: "Savoie" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Formats d'intervention SEO",
    itemListElement: SEO_FORMATS.map((format) => ({
      "@type": "Offer",
      name: format.title,
      description: format.description,
      url: `${SITE_URL}/demarrer-un-projet`,
      itemOffered: {
        "@type": "Service",
        name: format.title,
      },
    })),
  },
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
    { "@type": "ListItem", position: 3, name: "Référencement naturel", item: pageUrl },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <SeoReferencement guideCount={PUBLISHED_GUIDES.length} />
    </>
  );
}
