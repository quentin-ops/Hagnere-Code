import type { Metadata } from "next";
import { PubliciteEnLigne } from "@/components/publicite-en-ligne/PubliciteEnLigne";
import { OG_BASE, SERVICES_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Agence Google Ads & Meta Ads · Forfait fixe · Hagnéré Code",
  description:
    "Pilotage Google Ads, Meta et LinkedIn au forfait fixe, 0 % de commission sur votre budget. Tracking server-side inclus, CAC suivi dans votre CRM.",
  alternates: { canonical: "/services/publicite-en-ligne" },
  openGraph: {
    ...OG_BASE,
    title: "Publicité en ligne — Hagnéré Code",
    description:
      "SEA + Paid Social piloté par le CAC, pas le ROAS vanity. Tracking server-side inclus, forfait fixe mensuel, budget media sur vos comptes.",
    url: "/services/publicite-en-ligne",
    images: [SERVICES_OG_IMAGE],
  },
  twitter: { images: [SERVICES_OG_IMAGE.url] },
};

const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gestion de publicité en ligne — Google Ads, Meta & LinkedIn",
  url: "https://hagnere-code.fr/services/publicite-en-ligne",
  serviceType:
    "Gestion de campagnes publicitaires en ligne (SEA, Paid Social, Display) avec tracking server-side",
  provider: {
    "@type": "Organization",
    name: "Hagnéré Code",
    "@id": "https://hagnere-code.fr/#organization",
    legalName: "HAGNÉRÉ CODE SAS",
    vatID: "FR30993672856",
    url: "https://hagnere-code.fr",
    logo: "https://hagnere-code.fr/logos/logo-dark.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "7 rue Ernest Filliard",
      postalCode: "73000",
      addressLocality: "Chambéry",
      addressRegion: "Savoie",
      addressCountry: "FR",
    },
    email: "quentin@hagnere-patrimoine.fr",
    telephone: "+33374472018",
  },
  areaServed: { "@type": "Country", name: "France" },
  description:
    "Gestion Ads complète pour PME, ETI et scale-up : Google Ads (Search, PMax, Shopping), Meta (Advantage+, DPA), LinkedIn (ABM, Lead Gen), TikTok, YouTube, Pinterest. Tracking server-side GTM Server + Meta CAPI + Google Enhanced Conversions + LinkedIn Conv API, Consent Mode v2 RGPD, attribution CRM (HubSpot, Salesforce, Pipedrive), reporting Looker Studio CRM × Ads × margin. Consultant senior dédié, forfait fixe mensuel aligné sur votre CAC.",
  offers: [
    {
      "@type": "Offer",
      name: "Audit Ads",
      price: "1500",
      priceCurrency: "EUR",
      description:
        "Audit comptes Google Ads, Meta, LinkedIn + tracking + structuration + budget. Rapport 25-40 pages + roadmap 90 jours. Déduit à 100 % du 1er mois si mission signée sous 60 j.",
    },
    {
      "@type": "Offer",
      name: "Starter · Démarrage Ads",
      price: "1800",
      priceCurrency: "EUR",
      description:
        "2 canaux pilotés, tracking server-side GTM SS + CAPI, 4 variantes creatives/mois, point hebdo + reporting mensuel, consultant senior dédié. Budget media client : 8-20 k€/mois.",
    },
    {
      "@type": "Offer",
      name: "Scale · Performance multi-canaux",
      price: "3500",
      priceCurrency: "EUR",
      description:
        "3 canaux pilotés + 1 en test, stack tracking complète, 8-12 creatives/mois, Looker Studio CRM × Ads × margin, alertes Slack temps réel. Budget media client : 20-60 k€/mois.",
    },
    {
      "@type": "Offer",
      name: "Premium · Performance avancée",
      price: "4500",
      priceCurrency: "EUR",
      description:
        "4-6 canaux, attribution multi-touch BigQuery data-driven, 12+ creatives/mois, landing A/B illimité, équipe dédiée 3 pers. Budget media client : 60-150 k€/mois.",
    },
  ],
});

const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien de temps avant des résultats mesurables en publicité en ligne ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Setup tracking + restructuration live à J+21. Premier effet visible sur le CAC à 4-8 semaines (quand les algos se recalibrent sur les signaux propres). ROAS blended CRM stabilisé à 3-4 mois. Jalons mensuels posés pour juger la trajectoire.",
      },
    },
    {
      "@type": "Question",
      name: "Le budget media reste-t-il sur nos comptes ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Oui, toujours. Le budget reste sur votre compte Google Ads / Meta / LinkedIn, facturé directement par les plateformes. Notre forfait = prestation, pas de commission sur le spend, pas de rebilling media.",
      },
    },
    {
      "@type": "Question",
      name: "Pourquoi Hagnéré Code refuse la rémunération au % du media ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Refus de principe : conflit d'intérêt structurel. Une agence rémunérée au pourcentage a intérêt à pousser votre budget, pas à faire baisser votre CAC. Le forfait fixe aligne nos objectifs sur les vôtres.",
      },
    },
    {
      "@type": "Question",
      name: "Vous garantissez un ROAS ou un CAC chiffré ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Non, et personne de sérieux ne garantit un chiffre précis sur Ads : trop de variables (offre, landing, saisonnalité, concurrence). Nous garantissons la méthode, la qualité des livrables, et des jalons mensuels documentés. Si à 3-4 mois la trajectoire n'est pas la bonne, on adapte sans facturer.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps prend le setup tracking server-side ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "3 semaines en moyenne pour la stack complète : GTM Server déployé (Stape.io), Meta CAPI, Google Enhanced Conversions, LinkedIn Conv API, Consent Mode v2, webhook CRM, Looker Studio premier jet. Vos devs n'ont besoin d'ajouter qu'un seul snippet.",
      },
    },
    {
      "@type": "Question",
      name: "Qui va s'occuper concrètement de mon compte Ads ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Un consultant senior dédié + un media buyer + un creative selon le forfait. Pas de rotation, pas de chargé de compte intermédiaire. Réponse sous 4 h ouvrées en semaine. Nous limitons à 8 clients actifs par consultant pour garantir du temps par compte.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle taille de budget media faut-il ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "En dessous de 8 k€/mois de budget media, notre forfait n'a pas un ROI évident. Entre 8 et 20 k€/mois : forfait Starter. Entre 20 et 60 k€/mois : Scale. Au-delà de 60 k€/mois : Premium. Règle empirique, pas une interdiction.",
      },
    },
    {
      "@type": "Question",
      name: "Si on part, on récupère quoi ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Tout : comptes Ads (déjà chez vous), pixels, audiences 1P, conteneur GTM Server, templates Looker Studio, fichiers Figma / motion, Notion de pilotage, creatives validés. Passation 2 semaines incluse : docs techniques + vidéos de transfert.",
      },
    },
    {
      "@type": "Question",
      name: "C'est quoi exactement dans les 1 500 € de l'audit ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "2 semaines de travail : audit comptes Google + Meta + LinkedIn, diagnostic tracking (signaux perdus, dedupe, Consent), décompte 12 mois du spend gaspillé, identification des 10 leviers à activer, roadmap 90 jours priorisée. Rapport 25-40 pages + restitution 90 min en visio. Déduits à 100 % du 1er mois si signature dans les 60 jours.",
      },
    },
  ],
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hagnere-code.fr/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://hagnere-code.fr/services" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Publicité en ligne",
      item: "https://hagnere-code.fr/services/publicite-en-ligne",
    },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json">{serviceJsonLd}</script>
      <script type="application/ld+json">{faqJsonLd}</script>
      <script type="application/ld+json">{breadcrumbJsonLd}</script>
      <PubliciteEnLigne />
    </>
  );
}
