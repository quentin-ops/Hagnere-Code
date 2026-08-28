import type { Metadata } from "next";
import { SitesVitrines } from "@/components/sites-vitrines/SitesVitrines";
import { OG_BASE, SERVICES_OG_IMAGE } from "@/lib/seo";
import { PUBLIC_ORGANIZATION_ENTITY } from "@/lib/organization-structured-data";

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
  name: "Création de sites vitrines et landing pages sur mesure",
  url: "https://hagnere-code.ai/services/sites-vitrines",
  serviceType:
    "Création de sites vitrines, landing pages et refontes web sur mesure",
  // Fournisseur = l'entité publique unique, importée du registre plutôt que
  // recopiée : adresse, TVA, e-mail et téléphone n'existent qu'à un seul
  // endroit, et la forme du logo reste celle validée pour Google (ImageObject
  // dimensionné) sur toutes les pages.
  provider: PUBLIC_ORGANIZATION_ENTITY,
  areaServed: { "@type": "Country", name: "France" },
  description:
    "Création de sites vitrines, landing pages et refontes web avec Next.js et CMS adapté. Le devis précise le budget, le calendrier, l'hébergement, la migration SEO et les objectifs de performance mesurables.",
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
      name: "Sites vitrines & landing pages",
      item: "https://hagnere-code.ai/services/sites-vitrines",
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
