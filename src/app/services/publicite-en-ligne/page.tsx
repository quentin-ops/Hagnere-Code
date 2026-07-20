import type { Metadata } from "next";
import { PubliciteEnLigne } from "@/components/publicite-en-ligne/PubliciteEnLigne";
import { OG_BASE, SERVICES_OG_IMAGE } from "@/lib/seo";

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
    "Cadrage et pilotage de campagnes publicitaires, du tracking et du reporting. Les plateformes, créations, intervenants, droits, outils et responsabilités réellement inclus sont détaillés dans le devis.",
  offers: [
    {
      "@type": "Offer",
      name: "Audit Ads",
      price: "1500",
      priceCurrency: "EUR",
      description:
        "Audit des comptes et du tracking avec périmètre, livrables et restitution précisés au devis. Toute remise éventuelle doit être écrite dans le devis signé.",
    },
    {
      "@type": "Offer",
      name: "Starter · Démarrage Ads",
      price: "1800",
      priceCurrency: "EUR",
      description:
        "Scénario indicatif pour 1 à 2 canaux : tracking, créations et reporting à confirmer selon les accès, le consentement et l'intervenant nommé au devis.",
    },
    {
      "@type": "Offer",
      name: "Scale · Performance multi-canaux",
      price: "3500",
      priceCurrency: "EUR",
      description:
        "Scénario multi-canaux indicatif : plateformes, tracking, créations, reporting, alertes et budget média sont dimensionnés dans le devis.",
    },
    {
      "@type": "Offer",
      name: "Premium · Performance avancée",
      price: "4500",
      priceCurrency: "EUR",
      description:
        "Scénario multi-canaux sur devis : attribution, créations et tests dimensionnés selon le budget, les données et les intervenants réellement mobilisés.",
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
          "Le devis fixe les jalons techniques et la méthode de mesure. Le délai d'un effet sur le CAC ou le ROAS dépend de l'offre, du volume, de la saisonnalité et des plateformes ; aucun résultat chiffré n'est garanti.",
      },
    },
    {
      "@type": "Question",
      name: "Le budget media reste-t-il sur nos comptes ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Les comptes publicitaires sont ouverts ou conservés au nom du client et les plateformes lui facturent le budget média. Les éventuelles licences ou prestations annexes sont séparées dans le devis.",
      },
    },
    {
      "@type": "Question",
      name: "Pourquoi Hagnéré Code refuse la rémunération au % du media ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Nous préférons un forfait lisible, car une commission augmente avec le budget média. Cela ne rend pas automatiquement le modèle au pourcentage mauvais : il faut comparer le périmètre, les incitations et le coût total.",
      },
    },
    {
      "@type": "Question",
      name: "Vous garantissez un ROAS ou un CAC chiffré ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Non. L'offre, la landing page, la saisonnalité, la concurrence et les plateformes influencent les résultats. Le devis peut en revanche fixer les livrables, les jalons techniques, les métriques suivies et les modalités de révision.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps prend le setup tracking server-side ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Le délai dépend des plateformes, du CMS, du consentement, du CRM, du DNS et des validations disponibles. Le cadrage liste les intégrations, responsabilités et tests de recette nécessaires.",
      },
    },
    {
      "@type": "Question",
      name: "Qui va s'occuper concrètement de mon compte Ads ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Le devis nomme les intervenants, leurs rôles et leur statut selon le forfait. Il précise également les canaux, horaires, délais cibles et modalités de continuité.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle taille de budget media faut-il ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Il n'existe pas de seuil universel. Le cadrage part de la marge, de la valeur d'une conversion, du volume nécessaire à l'apprentissage et du coût de la prestation pour estimer un seuil de rentabilité.",
      },
    },
    {
      "@type": "Question",
      name: "Si on part, on récupère quoi ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Les comptes publicitaires ouverts au nom du client restent sous son contrôle. Le devis inventorie les autres livrables et droits ; la durée et le contenu d'une passation éventuelle sont contractualisés.",
      },
    },
    {
      "@type": "Question",
      name: "C'est quoi exactement dans les 1 500 € de l'audit ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Le devis d'audit précise les plateformes, la période analysée, le tracking, les livrables et la restitution. Aucune déduction automatique n'est prévue par les CGV publiques.",
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
      name: "Publicité en ligne",
      item: "https://hagnere-code.ai/services/publicite-en-ligne",
    },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <PubliciteEnLigne />
    </>
  );
}
