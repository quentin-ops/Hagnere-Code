import type { Metadata } from "next";
import { TarifsPage } from "@/components/tarifs/TarifsPage";
import { OG_BASE, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Tarifs développement web & SaaS au forfait · Hagnéré Code",
  description:
    "Discovery Sprint 1 500 €, projets de 6 à 60 k€, partenariat dès 8 k€/mois. Forfaits fixes contractuels, garantie 30 jours, code 100 % à vous.",
  alternates: { canonical: "/tarifs" },
  openGraph: {
    ...OG_BASE,
    title: "Tarifs · Forfait fixe, jamais de surprise · Hagnéré Code",
    description:
      "Discovery Sprint 1 500 €, MVP SaaS dès 15 k€, sites vitrines dès 6,9 k€. Code chez vous, garantie 30 jours.",
    url: "/tarifs",
    images: [DEFAULT_OG_IMAGE],
  },
};

const offersJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://hagnere-code.fr/#business",
  name: "Hagnéré Code",
  url: "https://hagnere-code.fr",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tarifs Hagnéré Code",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Discovery Sprint",
        price: "1500",
        priceCurrency: "EUR",
        description:
          "2 jours de cadrage, prototype Figma cliquable et devis chiffré forfait fixe. Déduit du devis si lancement.",
      },
      {
        "@type": "Offer",
        name: "Essentiel — Site vitrine ou MVP court",
        price: "6000",
        priceCurrency: "EUR",
        description: "Site vitrine 5–10 pages OU MVP SaaS 3–5 écrans, livré en 2–4 semaines.",
      },
      {
        "@type": "Offer",
        name: "Standard — Projet complet",
        price: "25000",
        priceCurrency: "EUR",
        description:
          "SaaS, outil interne ou marketplace 10–15 écrans avec back-office, intégrations et IA.",
      },
      {
        "@type": "Offer",
        name: "Partenariat — Équipe dédiée",
        price: "8000",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "8000",
          priceCurrency: "EUR",
          unitCode: "MON",
        },
        description: "Forfait mensuel, équipe 2–5 personnes, engagement 6 mois minimum.",
      },
      {
        "@type": "Offer",
        name: "Care — Maintenance mensuelle",
        description:
          "Hébergement, monitoring, sauvegardes, bugfix prioritaires. Trois niveaux, sur devis.",
      },
    ],
  },
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hagnere-code.fr/" },
    { "@type": "ListItem", position: 2, name: "Tarifs", item: "https://hagnere-code.fr/tarifs" },
  ],
});

const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Pourquoi un prix fixe et pas un TJM ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Parce qu'on vend un résultat, pas du temps. Le TJM transfère tout le risque de dérive sur vous. Le forfait nous oblige à bien cadrer en amont — c'est tout l'intérêt du Discovery Sprint à 1 500 €.",
      },
    },
    {
      "@type": "Question",
      name: "Que se passe-t-il en cas de dépassement de périmètre ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Le périmètre est figé au cadrage et signé. Si vous voulez ajouter des choses en cours de route, on chiffre l'ajout en avenant clair (toujours forfait fixe). On n'a jamais facturé de dépassement caché.",
      },
    },
    {
      "@type": "Question",
      name: "Le Discovery Sprint est-il vraiment déduit ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Oui, à 100 %. Si vous lancez la phase 2 avec nous (sous 90 jours), les 1 500 € sont retirés du devis final. Si vous ne partez pas avec nous, vous gardez le prototype Figma et les specs — utilisables par n'importe quelle autre équipe.",
      },
    },
    {
      "@type": "Question",
      name: "Pourquoi des fourchettes (15-30 k€) et pas un prix sec ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Parce que tant qu'on n'a pas fait le Discovery, le périmètre n'est pas figé. Les fourchettes affichées ici sont le résultat statistique de nos 23 derniers projets. À l'issue du Discovery, vous recevez un devis ferme à un prix unique.",
      },
    },
    {
      "@type": "Question",
      name: "Acomptes, paiements, échelonnement ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "30 % à la signature, 30 % à mi-parcours, 40 % à la livraison. Pour les projets > 50 k€, on peut découper en jalons mensuels. Paiement par virement, factures conformes Pennylane, TVA française récupérable.",
      },
    },
    {
      "@type": "Question",
      name: "L'hébergement et les outils tiers sont compris ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "L'hébergement est inclus 6 à 12 mois selon le forfait, puis facturé à coût réel sans marge (40-200 €/mois selon trafic). Les outils tiers (Stripe, Loops, OpenAI…) sont sur vos comptes, vous les payez directement à l'éditeur.",
      },
    },
    {
      "@type": "Question",
      name: "Garantie après livraison, ça veut dire quoi exactement ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "30 jours après la mise en production, on corrige gratuitement tout bug critique (bloquant, sécurité, data). Au-delà, c'est facturé en TJM ou couvert par un forfait Care mensuel. Les évolutions fonctionnelles sont hors garantie dans tous les cas.",
      },
    },
    {
      "@type": "Question",
      name: "Vous prenez de l'equity au lieu de cash ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Uniquement en mode Partenariat long terme avec un projet à fort potentiel — et toujours en complément d'un cash floor. On ne fait pas de « 100 % equity ». Ce serait malhonnête vis-à-vis de nos équipes salariées.",
      },
    },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json">{offersJsonLd}</script>
      <script type="application/ld+json">{breadcrumbJsonLd}</script>
      <script type="application/ld+json">{faqJsonLd}</script>
      <TarifsPage />
    </>
  );
}
