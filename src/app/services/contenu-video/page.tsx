import type { Metadata } from "next";
import { ContenuVideo } from "@/components/contenu-video/ContenuVideo";
import { OG_BASE, SERVICES_OG_IMAGE } from "@/lib/seo";
import { PUBLIC_ORGANIZATION_ENTITY } from "@/lib/organization-structured-data";

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
  name: "Production de contenu et vidéo avec pipeline IA",
  url: "https://hagnere-code.ai/services/contenu-video",
  serviceType: "Production de contenu et vidéo avec pipeline IA",
  // Fournisseur = l'entité publique unique, importée du registre plutôt que
  // recopiée : adresse, TVA, e-mail et téléphone n'existent qu'à un seul
  // endroit, et la forme du logo reste celle validée pour Google (ImageObject
  // dimensionné) sur toutes les pages.
  provider: PUBLIC_ORGANIZATION_ENTITY,
  areaServed: { "@type": "Country", name: "France" },
  description:
    "Cadrage et coordination de contenus vidéo, démonstrations produit, motion design et formats de campagne. Les outils, intervenants, droits et livrables applicables sont précisés dans le devis.",
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
      name: "Contenu & vidéo",
      item: "https://hagnere-code.ai/services/contenu-video",
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
