import type { Metadata } from "next";
import { SeoReferencement } from "@/components/seo-referencement/SeoReferencement";
import { OG_BASE, SERVICES_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Agence SEO PME · Forfaits dès 1 450 €/mois · Hagnéré Code",
  description:
    "SEO pour PME : +150 % de trafic en 9 mois. Consultant senior dédié, forfaits clairs de 1 450 à 4 900 €/mois, engagement limité à 3 mois.",
  alternates: { canonical: "/services/referencement-google" },
  openGraph: {
    ...OG_BASE,
    title: "SEO & référencement Google — Hagnéré Code",
    description:
      "Consultant senior dédié, KPIs business, reporting mensuel. Audit 2 400 €, retainer 1 450–4 900 €/mois. 3 mois puis mois par mois.",
    url: "/services/referencement-google",
    images: [SERVICES_OG_IMAGE],
  },
  twitter: { images: [SERVICES_OG_IMAGE.url] },
};

const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO & référencement Google pour PME et ETI",
  url: "https://hagnere-code.ai/services/referencement-google",
  serviceType: "Accompagnement SEO et référencement Google pour PME et ETI",
  provider: {
    "@type": "Organization",
    name: "Hagnéré Code",
    "@id": "https://hagnere-code.ai/#organization",
    legalName: "HAGNÉRÉ CODE SAS",
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
    "Accompagnement SEO complet : audit technique 200+ points, recherche sémantique 1 000 mots-clés, architecture en cocons, rédaction éditoriale experte (hybride IA + humain), netlinking qualitatif white-hat, reporting business mensuel Looker Studio. Consultant senior dédié, sans rotation.",
  offers: [
    {
      "@type": "Offer",
      name: "Audit SEO",
      price: "2400",
      priceCurrency: "EUR",
      description:
        "Audit technique + sémantique + concurrentiel + backlinks. Rapport 30-50 pages + roadmap 12 mois priorisée. Déduit du forfait si mission signée.",
    },
    {
      "@type": "Offer",
      name: "Fondations · Démarrage SEO",
      price: "1450",
      priceCurrency: "EUR",
      description:
        "8 contenus/mois, 3 backlinks, corrections techniques, reporting mensuel. Pour PME < 5 000 visiteurs/mois.",
    },
    {
      "@type": "Offer",
      name: "Croissance · SEO scale",
      price: "2850",
      priceCurrency: "EUR",
      description:
        "14 contenus/mois, 6 backlinks DR 40+, dashboard business, consultant dédié. Pour PME 5 000-30 000 visiteurs/mois.",
    },
    {
      "@type": "Offer",
      name: "Premium · Performance",
      price: "4900",
      priceCurrency: "EUR",
      description:
        "20+ contenus/mois full-funnel, 10 backlinks top-tier, E-E-A-T + AI Overviews, équipe dédiée 3 personnes.",
    },
  ],
});

const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien de temps avant d'avoir des résultats SEO ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Premiers mouvements à 3 mois (positions, impressions). Trafic significatif à 6–9 mois. ROI business mesurable à 9–12 mois. Nous posons des jalons mensuels pour juger la trajectoire en continu.",
      },
    },
    {
      "@type": "Question",
      name: "Le SEO marche-t-il encore avec l'IA de Google (SGE, AI Overviews) ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Oui. Un site bien structuré peut même y gagner du trafic organique. Les AI Overviews citent des sources — notre job est de faire que votre site soit l'une de ces sources. On optimise pour l'ère post-IA : E-E-A-T, contenu original, données propriétaires, structure claire.",
      },
    },
    {
      "@type": "Question",
      name: "Vous garantissez des positions Google ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Non, et personne de sérieux ne le fait — Google l'interdit explicitement. Nous garantissons la méthode, la qualité des livrables, et des jalons mensuels (nouvelles pages indexées, impressions, backlinks acquis, positions en mouvement). Si à 4 mois la trajectoire n'est pas bonne, on adapte la stratégie gratuitement.",
      },
    },
    {
      "@type": "Question",
      name: "Vous utilisez de l'IA pour rédiger ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Oui comme outil d'assistance, non comme générateur brut. Chaque contenu passe par 3 étapes : structure experte → rédaction hybride IA + humain → validation métier + SEO. 4-8 h de travail humain par contenu. Le contenu IA brut se fait pénaliser par Helpful Content Update depuis 2023.",
      },
    },
    {
      "@type": "Question",
      name: "Mon site a perdu 50% de trafic après un update Google, c'est récupérable ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "70% des cas oui. On commence par un audit dédié (inclus dans les forfaits Croissance et Premium) pour identifier la cause : contenu low-value, problèmes E-E-A-T, sur-optimisation, backlinks toxiques. Récupération partielle à 3-4 mois, stabilisation à 6-9 mois. 30% des cas nécessitent une refonte fondamentale.",
      },
    },
    {
      "@type": "Question",
      name: "Vous faites du netlinking acheté ou qualitatif ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Mix de vrais placements rédactionnels (presse éco, blogs spécialisés, médias verticaux) + partenariats + RP + contenu linkable. Jamais de PBN, jamais de liens en masse sur plateformes douteuses. Objectif : des liens qui tiennent 5 ans, pas 5 mois.",
      },
    },
    {
      "@type": "Question",
      name: "Si je ne suis pas satisfait au bout de 3 mois, que se passe-t-il ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Revue de pilotage à 3 mois. Si les jalons ne sont pas atteints, on ajuste la stratégie sans frais. Engagement contractuel limité à 3 mois, puis reconductible mois par mois avec préavis de 30 jours. Vous récupérez tous les contenus, accès et livrables.",
      },
    },
    {
      "@type": "Question",
      name: "C'est quoi exactement dans les 2 400 € de l'audit SEO ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "3 semaines de travail : audit technique complet (200+ points), recherche sémantique (500 mots-clés), cartographie concurrentielle, analyse backlinks, audit E-E-A-T. Rapport écrit 30-50 pages + roadmap 12 mois priorisée + restitution en visio 2 h. Les 2 400 € sont déduits à 100% du premier mois si vous signez un accompagnement dans les 60 jours.",
      },
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
      name: "SEO & référencement",
      item: "https://hagnere-code.ai/services/referencement-google",
    },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json">{serviceJsonLd}</script>
      <script type="application/ld+json">{faqJsonLd}</script>
      <script type="application/ld+json">{breadcrumbJsonLd}</script>
      <SeoReferencement />
    </>
  );
}
