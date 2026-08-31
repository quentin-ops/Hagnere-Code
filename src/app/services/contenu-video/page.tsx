import type { Metadata } from "next";
import { ContenuVideo } from "@/components/contenu-video/ContenuVideo";
import { OG_BASE, SERVICES_OG_IMAGE, SITE_URL } from "@/lib/seo";
import { ORGANIZATION_REF } from "@/lib/organization-structured-data";
import { serviceEntityId } from "@/lib/services";

/** Chemin canonique de la page : le domaine ne s'écrit plus en clair. */
const servicePath = "/services/contenu-video" as const;
const pageUrl = `${SITE_URL}${servicePath}`;

export const metadata: Metadata = {
  title: "Production de contenu & vidéo sur mesure · Hagnéré Code",
  description:
    "Cadrage de vidéos YouTube, motion design et contenus de campagne, avec intervenants, droits, livrables et délais identifiés dans le devis.",
  alternates: { canonical: "/services/contenu-video" },
  openGraph: {
    ...OG_BASE,
    title: "Production de contenu & vidéo — Hagnéré Code",
    description:
      "Formats, diffusion, droits et éventuels outils IA cadrés ; chaque spécialiste mobilisé est identifié avant signature.",
    url: "/services/contenu-video",
    images: [SERVICES_OG_IMAGE],
  },
  twitter: { images: [SERVICES_OG_IMAGE.url] },
};

const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": serviceEntityId(servicePath),
  name: "Production de contenu et vidéo avec pipeline IA",
  url: pageUrl,
  serviceType: "Production de contenu et vidéo avec pipeline IA",
  // Fournisseur = la RÉFÉRENCE à l'entité publique, pas l'entité recopiée.
  // Le nœud complet (logo, fondateur, adresse, géo, horaires, contactPoint,
  // 17 zones desservies, catalogue, TVA, SIREN) pèse 6,6 Ko et était sérialisé
  // à l'identique sur chacune des onze pages service. C'est déjà le motif
  // employé par les guides et les réalisations : un seul nœud complet, publié
  // par l'accueil et par /services, référencé partout ailleurs par son @id.
  provider: ORGANIZATION_REF,
  areaServed: { "@type": "Country", name: "France" },
  description:
    "Cadrage et coordination de contenus vidéo, démonstrations produit, motion design et formats de campagne. Les outils, intervenants, droits et livrables applicables sont précisés dans le devis.",
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
      name: "Contenu & vidéo",
      item: pageUrl,
    },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <ContenuVideo />
    </>
  );
}
