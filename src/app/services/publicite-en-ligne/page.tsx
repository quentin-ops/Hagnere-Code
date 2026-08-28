import type { Metadata } from "next";
import { PubliciteEnLigne } from "@/components/publicite-en-ligne/PubliciteEnLigne";
import { OG_BASE, SERVICES_OG_IMAGE } from "@/lib/seo";
import { PUBLIC_ORGANIZATION_ENTITY } from "@/lib/organization-structured-data";

export const metadata: Metadata = {
  title: "Agence Google Ads & Meta Ads · Forfait fixe · Hagnéré Code",
  description:
    "Pilotage Google Ads, Meta et LinkedIn au forfait. Périmètre, tracking, reporting, intervenants et droits sont détaillés avant engagement.",
  alternates: { canonical: "/services/publicite-en-ligne" },
  openGraph: {
    ...OG_BASE,
    title: "Publicité en ligne — Hagnéré Code",
    description:
      "SEA et Paid Social avec périmètre, mesure, budget média, responsabilités et livrables détaillés dans le devis.",
    url: "/services/publicite-en-ligne",
    images: [SERVICES_OG_IMAGE],
  },
  twitter: { images: [SERVICES_OG_IMAGE.url] },
};

const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gestion de publicité en ligne — Google Ads, Meta & LinkedIn",
  url: "https://hagnere-code.ai/services/publicite-en-ligne",
  serviceType:
    "Gestion de campagnes publicitaires en ligne (SEA, Paid Social, Display) avec tracking server-side",
  // Fournisseur = l'entité publique unique, importée du registre plutôt que
  // recopiée : adresse, TVA, e-mail et téléphone n'existent qu'à un seul
  // endroit, et la forme du logo reste celle validée pour Google (ImageObject
  // dimensionné) sur toutes les pages.
  provider: PUBLIC_ORGANIZATION_ENTITY,
  areaServed: { "@type": "Country", name: "France" },
  description:
    "Cadrage et pilotage de campagnes publicitaires, du tracking et du reporting. Les plateformes, créations, intervenants, droits, outils et responsabilités réellement inclus sont détaillés dans le devis.",
});


const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hagnere-code.ai/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://hagnere-code.ai/services" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Publicité en ligne",
      item: "https://hagnere-code.ai/services/publicite-en-ligne",
    },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <PubliciteEnLigne />
    </>
  );
}
