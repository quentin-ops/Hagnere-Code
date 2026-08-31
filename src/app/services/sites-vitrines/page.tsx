import type { Metadata } from "next";
import { SitesVitrines } from "@/components/sites-vitrines/SitesVitrines";
import { OG_BASE, SERVICES_OG_IMAGE, SITE_URL } from "@/lib/seo";
import { ORGANIZATION_REF } from "@/lib/organization-structured-data";
import { serviceEntityId } from "@/lib/services";

/** Chemin canonique de la page : le domaine ne s'écrit plus en clair. */
const servicePath = "/services/sites-vitrines" as const;
const pageUrl = `${SITE_URL}${servicePath}`;

export const metadata: Metadata = {
  title: "Création de site vitrine performant · Hagnéré Code",
  description:
    "Sites vitrines et landing pages Next.js : objectifs de performance mesurés, SEO technique, CMS et budget indicatif dès 6 900 € HT, selon périmètre.",
  alternates: { canonical: "/services/sites-vitrines" },
  openGraph: {
    ...OG_BASE,
    title: "Sites vitrines & landing pages — Hagnéré Code",
    description:
      "Next.js, SEO technique, CMS headless et budget de performance défini selon le contenu, les scripts tiers et le périmètre du projet.",
    url: "/services/sites-vitrines",
    images: [SERVICES_OG_IMAGE],
  },
  twitter: { images: [SERVICES_OG_IMAGE.url] },
};

const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": serviceEntityId(servicePath),
  name: "Création de sites vitrines et landing pages sur mesure",
  url: pageUrl,
  serviceType:
    "Création de sites vitrines, landing pages et refontes web sur mesure",
  // Fournisseur = la RÉFÉRENCE à l'entité publique, pas l'entité recopiée.
  // Le nœud complet (logo, fondateur, adresse, géo, horaires, contactPoint,
  // 17 zones desservies, catalogue, TVA, SIREN) pèse 6,6 Ko et était sérialisé
  // à l'identique sur chacune des onze pages service. C'est déjà le motif
  // employé par les guides et les réalisations : un seul nœud complet, publié
  // par l'accueil et par /services, référencé partout ailleurs par son @id.
  provider: ORGANIZATION_REF,
  areaServed: { "@type": "Country", name: "France" },
  description:
    "Création de sites vitrines, landing pages et refontes web avec Next.js et CMS adapté. Le devis précise le budget, le calendrier, l'hébergement, la migration SEO et les objectifs de performance mesurables.",
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
      name: "Sites vitrines & landing pages",
      item: pageUrl,
    },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <SitesVitrines />
    </>
  );
}
