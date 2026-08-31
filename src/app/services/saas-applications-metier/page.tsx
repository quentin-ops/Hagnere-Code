import type { Metadata } from "next";
import { SaasApplicationsMetier } from "@/components/saas-applications/SaasApplicationsMetier";
import { OG_BASE, SERVICES_OG_IMAGE, SITE_URL } from "@/lib/seo";
import { ORGANIZATION_REF } from "@/lib/organization-structured-data";
import { serviceEntityId } from "@/lib/services";

// Le title porte « agence développement SaaS sur mesure » plutôt que le seul
// « SaaS sur mesure » : l'audit SERP a montré que cette requête commerciale
// est servie par des pages service, et cette page est la nôtre. Créer une
// page /agence-developpement-saas distincte l'aurait cannibalisée.
/** Chemin canonique de la page : le domaine ne s'écrit plus en clair. */
const servicePath = "/services/saas-applications-metier" as const;
const pageUrl = `${SITE_URL}${servicePath}`;

export const metadata: Metadata = {
  title: "Agence développement SaaS sur mesure · Hagnéré Code",
  description:
    "Agence de développement SaaS sur mesure : cadrage, UX, web, mobile, IA, mise en production et reprise. Prix, droits et documentation précisés au devis.",
  alternates: { canonical: "/services/saas-applications-metier" },
  openGraph: {
    ...OG_BASE,
    title: "Agence développement SaaS sur mesure · Hagnéré Code",
    description:
      "Plateformes SaaS B2B et applications métier : cadrage, développement, mise en production et transfert selon le devis et les CGV.",
    url: "/services/saas-applications-metier",
    images: [SERVICES_OG_IMAGE],
  },
  twitter: { images: [SERVICES_OG_IMAGE.url] },
};

// JSON-LD structured data — static, author-controlled content. The rendered
// string is injected in the script element after escaping '<' characters.
const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": serviceEntityId(servicePath),
  name: "Développement SaaS et applications métier sur mesure",
  url: pageUrl,
  serviceType: "Développement de SaaS et applications métier sur mesure",
  // Fournisseur = la RÉFÉRENCE à l'entité publique, pas l'entité recopiée.
  // Le nœud complet (logo, fondateur, adresse, géo, horaires, contactPoint,
  // 17 zones desservies, catalogue, TVA, SIREN) pèse 6,6 Ko et était sérialisé
  // à l'identique sur chacune des onze pages service. C'est déjà le motif
  // employé par les guides et les réalisations : un seul nœud complet, publié
  // par l'accueil et par /services, référencé partout ailleurs par son @id.
  provider: ORGANIZATION_REF,
  areaServed: { "@type": "Country", name: "France" },
  description:
    "Développement de plateformes B2B, espaces clients, marketplaces, applications métier et apps mobiles iOS/Android. Stack Next.js, React, TypeScript, React Native et modèles d'IA choisis selon le cas d'usage.",
  offers: [
    {
      "@type": "Offer",
      name: "Essentiel · MVP court",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: "15000",
        maxPrice: "30000",
        priceCurrency: "EUR",
        valueAddedTaxIncluded: false,
      },
      description:
        "MVP SaaS centré sur un parcours critique complet, avec accès, vente, facturation et exploitation cadrés selon le mode de commercialisation",
    },
    {
      "@type": "Offer",
      name: "Standard · MVP complet",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: "30000",
        maxPrice: "60000",
        priceCurrency: "EUR",
        valueAddedTaxIncluded: false,
      },
      description:
        "SaaS centré sur un parcours critique complet ; accès, isolation, administration, paiement, API, automatisations et IA cadrés selon les données et le contrat",
    },
    {
      "@type": "Offer",
      name: "Partenariat · Co-build",
      // 120 000 € nus, sans unité de temps, alors que les trois pages visibles
      // publient « 8-20 k€ HT / mois » (/tarifs, son tableau, et l'accueil).
      // Un moteur lisait donc un ticket d'entree quinze fois supérieur au prix
      // affiche. UnitPriceSpecification permet de porter la periodicite.
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        minPrice: "8000",
        maxPrice: "20000",
        priceCurrency: "EUR",
        valueAddedTaxIncluded: false,
        unitCode: "MON",
        billingIncrement: 1,
        referenceQuantity: {
          "@type": "QuantitativeValue",
          value: 1,
          unitCode: "MON",
        },
      },
      description: "Équipe dédiée et feuille de route pluri-lots sur la durée",
    },
  ],
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
      name: "SaaS & applications métier",
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
      <SaasApplicationsMetier />
    </>
  );
}
