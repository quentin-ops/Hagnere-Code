import type { Metadata } from "next";
import { ContenuVideo } from "@/components/contenu-video/ContenuVideo";
import { OG_BASE, SERVICES_OG_IMAGE } from "@/lib/seo";

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
  provider: {
    "@type": "Organization",
    name: "Hagnéré Code",
    "@id": "https://hagnere-code.ai/#organization",
    legalName: "HAGNERE CODE",
    vatID: "FR30993672856",
    url: "https://hagnere-code.ai",
    logo: "https://hagnere-code.ai/logos/logo-dark.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "82 impasse de Bellevue",
      postalCode: "73000",
      addressLocality: "Bassens",
      addressRegion: "Savoie",
      addressCountry: "FR",
    },
    email: "quentin@hagnere-patrimoine.fr",
    telephone: "+33374472018",
  },
  areaServed: { "@type": "Country", name: "France" },
  description:
    "Cadrage et coordination de contenus vidéo, démonstrations produit, motion design et formats de campagne. Les outils, intervenants, droits et livrables applicables sont précisés dans le devis.",
  // Offres alignées sur les 4 cartes visibles de la section Forfaits & tarifs
  // (consigne Google : le balisage doit refléter le contenu affiché).
  offers: [
    {
      "@type": "Offer",
      name: "Vidéo ponctuelle",
      price: "2500",
      priceCurrency: "EUR",
      description:
        "Exemple d'offre ponctuelle : brief, script, une version longue et déclinaisons. Le monteur, les outils et le délai sont confirmés dans le devis.",
    },
    {
      "@type": "Offer",
      name: "YouTube Founder — retainer mensuel",
      price: "3500",
      priceCurrency: "EUR",
      description:
        "Chaîne YouTube clé en main pour CEO / expert : 1 h de tournage par semaine, 4 vidéos longues + 16 shorts par mois, scripts + thumbnails A/B, publication & VidIQ. Engagement 6 mois.",
    },
    {
      "@type": "Offer",
      name: "Content Retainer — pipeline mensuel",
      price: "6900",
      priceCurrency: "EUR",
      description:
        "Pipeline industriel pour marques DTC / SaaS : ~25 livrables par mois (12 ads, 8 UGC, 4 motion + 2 vidéos e-com), localisation FR/EN/DE, dashboard ROAS mensuel. Engagement 6 mois.",
    },
    {
      "@type": "Offer",
      name: "Studio dédié — sur-mesure",
      priceCurrency: "EUR",
      description:
        "Brand film, campagne multi-canaux ou volume hors cadre : composition d'équipe et moyens de tournage définis sur devis, sans présumer de ressources internes.",
    },
  ],
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
