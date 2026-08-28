import type { Metadata } from "next";
import { SeoReferencement } from "@/components/seo-referencement/SeoReferencement";
import { SEO_FORMATS } from "@/components/seo-referencement/content";
import { PUBLISHED_GUIDES } from "@/lib/guides";
import { OG_BASE, SERVICES_OG_IMAGE, SITE_URL } from "@/lib/seo";
import { PUBLIC_ORGANIZATION_ENTITY } from "@/lib/organization-structured-data";

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

const pageUrl = `${SITE_URL}/services/referencement-google`;

const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Accompagnement SEO et référencement naturel pour PME",
  url: pageUrl,
  serviceType: "Audit et accompagnement en référencement naturel",
  description:
    "Audit technique, mesure Search Console, architecture par intentions, contenus sourcés, maillage interne, référencement local et construction d'autorité.",
  // Fournisseur = l'entité publique unique, importée du registre plutôt que
  // recopiée : adresse, TVA, e-mail et téléphone n'existent qu'à un seul
  // endroit, et la forme du logo reste celle validée pour Google (ImageObject
  // dimensionné) sur toutes les pages.
  provider: PUBLIC_ORGANIZATION_ENTITY,
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
