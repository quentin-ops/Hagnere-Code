import type { Metadata } from "next";
import { MobileApplication } from "@/components/application-mobile/MobileApplication";
import { OG_BASE, SITE_URL } from "@/lib/seo";
import { ORGANIZATION_REF } from "@/lib/organization-structured-data";
import { serviceEntityId } from "@/lib/services";

const MOBILE_OG_IMAGE = {
  url: "/og-image-services.png",
  width: 1200,
  height: 630,
  alt: "Services Hagnéré Code — applications mobiles iOS & Android sur mesure",
};

/** Chemin canonique de la page : le domaine ne s'écrit plus en clair. */
const servicePath = "/services/application-mobile" as const;
const pageUrl = `${SITE_URL}${servicePath}`;

export const metadata: Metadata = {
  title: "Création d'application mobile iOS & Android · Hagnéré Code",
  description:
    "Conception d'applications iOS et Android avec React Native : cadrage, comptes stores au nom du client, livraison, droits et maintenance précisés sur devis.",
  alternates: { canonical: "/services/application-mobile" },
  openGraph: {
    ...OG_BASE,
    title: "Application mobile iOS & Android — Hagnéré Code",
    description:
      "React Native + Expo, préparation des stores et mises à jour encadrées. Périmètre, comptes, droits, calendrier indicatif et maintenance sont confirmés au devis.",
    url: "/services/application-mobile",
    images: [MOBILE_OG_IMAGE],
  },
  twitter: { images: [MOBILE_OG_IMAGE.url] },
};

const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": serviceEntityId(servicePath),
  name: "Création d'application mobile iOS & Android sur mesure",
  url: pageUrl,
  serviceType:
    "Création d'applications mobiles natives iOS et Android sur mesure",
  // Fournisseur = la RÉFÉRENCE à l'entité publique, pas l'entité recopiée.
  // Le nœud complet (logo, fondateur, adresse, géo, horaires, contactPoint,
  // 17 zones desservies, catalogue, TVA, SIREN) pèse 6,6 Ko et était sérialisé
  // à l'identique sur chacune des onze pages service. C'est déjà le motif
  // employé par les guides et les réalisations : un seul nœud complet, publié
  // par l'accueil et par /services, référencé partout ailleurs par son @id.
  provider: ORGANIZATION_REF,
  areaServed: { "@type": "Country", name: "France" },
  description:
    "Développement d'applications mobiles iOS et Android via React Native et Expo. Le devis précise le périmètre de soumission aux stores, les comptes client, le calendrier, les livrables, les droits transférés après paiement complet et la maintenance éventuelle.",
  // Aucun `offers` ici : la page affiche « Sur devis » sur les trois formules.
  // Les trois Offer précédentes déclaraient une devise (`priceCurrency: EUR`)
  // sans aucun montant et une disponibilité `InStock` qui n'a pas de sens pour
  // du développement sur mesure — un balisage plus affirmatif que le visible.
  // Les formules restent décrites sans prix via hasOfferCatalog, comme sur
  // /services/referencement-google et sur l'entité.
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Formules de développement d'application mobile",
    // L'ancre `#tarifs` est portée par l'`Offer`, pas par le `Service`
    // proposé : les trois formules renvoient vers la même section de page, et
    // trois nœuds `Service` anonymes partageant une même `url` sont trois
    // définitions concurrentes de la même adresse — le défaut corrigé à
    // l'échelle du site. Le service décrit, lui, reste distinct par son nom.
    itemListElement: [
      {
        "@type": "Offer",
        url: `${pageUrl}#tarifs`,
        itemOffered: {
          "@type": "Service",
          name: "Lancement · MVP iOS + Android",
          description:
            "App native iOS + Android focalisée sur un cas d'usage : fidélité, réservation, click & collect ou app interne. Périmètre, soumissions, planning indicatif et forfait sont confirmés au devis après cadrage.",
        },
      },
      {
        "@type": "Offer",
        url: `${pageUrl}#tarifs`,
        itemOffered: {
          "@type": "Service",
          name: "Performance · App complète",
          description:
            "App complète iOS + Android + Web mobile avec fonctionnalités et intégrations sélectionnées au cadrage. Planning indicatif, tests, soumissions et forfait sont confirmés au devis.",
        },
      },
      {
        "@type": "Offer",
        url: `${pageUrl}#tarifs`,
        itemOffered: {
          "@type": "Service",
          name: "Sur-mesure · Marketplace, IoT, IA embarquée",
          description:
            "Marketplace, IoT, modules natifs, extensions Watch ou Wear OS, multilingue et intégrations métier selon faisabilité. Le périmètre, les licences, le planning indicatif et le prix sont définis après cadrage approfondi.",
        },
      },
    ],
  },
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
      name: "Application mobile iOS & Android",
      item: pageUrl,
    },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <MobileApplication />
    </>
  );
}
