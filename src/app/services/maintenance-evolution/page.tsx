import type { Metadata } from "next";
import { MaintenanceEvolution } from "@/components/maintenance-evolution/MaintenanceEvolution";
import { OG_BASE, SERVICES_OG_IMAGE } from "@/lib/seo";
import { PUBLIC_ORGANIZATION_ENTITY } from "@/lib/organization-structured-data";

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
  name: "Maintenance applicative (TMA) et évolution continue",
  url: "https://hagnere-code.ai/services/maintenance-evolution",
  serviceType:
    "Tierce maintenance applicative (TMA), supervision et évolution de logiciels",
  // Fournisseur = l'entité publique unique, importée du registre plutôt que
  // recopiée : adresse, TVA, e-mail et téléphone n'existent qu'à un seul
  // endroit, et la forme du logo reste celle validée pour Google (ImageObject
  // dimensionné) sur toutes les pages.
  provider: PUBLIC_ORGANIZATION_ENTITY,
  areaServed: { "@type": "Country", name: "France" },
  description:
    "Maintenance applicative pour PME, ETI et scale-up : reprise, supervision, correctifs de sécurité, évolutions, exploitation d'infrastructure et reporting. Le devis précise l'équipe, les outils, les horaires de couverture, les objectifs de service, les accès et la réversibilité.",
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
      name: "Maintenance & évolution",
      item: "https://hagnere-code.ai/services/maintenance-evolution",
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
