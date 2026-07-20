import type { Metadata } from "next";
import { TarifsPage } from "@/components/tarifs/TarifsPage";
import { OG_BASE, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Tarifs développement web & SaaS au forfait · Hagnéré Code",
  description:
    "Discovery Sprint et projets web sur devis. Prix, périmètre, délais, livrables, droits, accès, recette et éventuelle garantie sont détaillés avant engagement.",
  alternates: { canonical: "/tarifs" },
  openGraph: {
    ...OG_BASE,
    title: "Tarifs · Forfait fixe, jamais de surprise · Hagnéré Code",
    description:
      "Ordres de grandeur indicatifs pour cadrage, SaaS et sites vitrines. Le devis fixe le périmètre, les livrables, les accès, les droits et la recette.",
    url: "/tarifs",
    images: [DEFAULT_OG_IMAGE],
  },
};

const offersJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://hagnere-code.ai/#business",
  name: "Hagnéré Code",
  url: "https://hagnere-code.ai",
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
        name: "Partenariat — Capacité mensuelle",
        price: "8000",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "8000",
          priceCurrency: "EUR",
          unitCode: "MON",
        },
        description: "Forfait mensuel dont la capacité, les intervenants, la durée et les modalités de sortie sont définis au devis.",
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
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hagnere-code.ai/" },
    { "@type": "ListItem", position: 2, name: "Tarifs", item: "https://hagnere-code.ai/tarifs" },
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
          "Le périmètre est cadré puis signé. Une demande supplémentaire est expliquée et chiffrée avant réalisation dans un avenant ou un nouveau lot ; aucun dépassement ne peut être ajouté unilatéralement.",
      },
    },
    {
      "@type": "Question",
      name: "Le Discovery Sprint est-il vraiment déduit ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "La déduction, son délai et les droits de réutilisation des livrables sont indiqués dans l'offre de Discovery signée. La page publique présente le format courant, mais seul le devis nominatif engage les parties.",
      },
    },
    {
      "@type": "Question",
      name: "Pourquoi des fourchettes (15-30 k€) et pas un prix sec ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Parce que le périmètre n'est pas figé avant le cadrage. Les fourchettes affichées sont des ordres de grandeur éditoriaux, pas une statistique de 23 missions externes. Seul le devis nominatif signé engage les parties.",
      },
    },
    {
      "@type": "Question",
      name: "Acomptes, paiements, échelonnement ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "L'acompte, les jalons, le solde et le délai de paiement sont précisés dans le devis ou le contrat. Le paiement s'effectue par les moyens indiqués sur la facture.",
      },
    },
    {
      "@type": "Question",
      name: "L'hébergement et les outils tiers sont compris ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Le devis distingue l'hébergement, les outils tiers, leurs titulaires de compte, la durée éventuellement incluse et leur mode de facturation. Aucun coût tiers n'est réputé compris s'il n'est pas listé.",
      },
    },
    {
      "@type": "Question",
      name: "Garantie après livraison, ça veut dire quoi exactement ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "La recette, la période de correction, les niveaux de sévérité, les exclusions et les délais cibles sont définis dans le devis. Une évolution fonctionnelle se distingue d'une non-conformité au périmètre signé.",
      },
    },
    {
      "@type": "Question",
      name: "Vous prenez de l'equity au lieu de cash ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Une composante en capital peut être étudiée au cas par cas, uniquement en complément d'une rémunération en numéraire couvrant le travail prévu. Elle n'est jamais présumée ni annoncée comme financement du projet.",
      },
    },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: offersJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd.replace(/</g, "\\u003c") }} />
      <TarifsPage />
    </>
  );
}
