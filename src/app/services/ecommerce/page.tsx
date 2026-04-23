import type { Metadata } from "next";
import { Ecommerce } from "@/components/ecommerce/Ecommerce";

export const metadata: Metadata = {
  title: "Boutique e-commerce sur mesure PME & ETI — Alternative Shopify Plus | Hagnéré Code",
  description:
    "Boutiques e-commerce sur mesure : Next.js + Laravel 13 + React Native. Intégrations FR natives (Stripe, Alma, Colissimo, Sage, Pennylane, Chorus Pro). Forfait fixe 15-120 k€, zéro % sur vos ventes. Factur-X 2026-ready.",
  alternates: { canonical: "/services/ecommerce" },
  openGraph: {
    title: "Boutique e-commerce sur mesure — Hagnéré Code",
    description:
      "Alternative Shopify Plus pour PME/ETI : Next.js + Laravel + IA Claude + app mobile React Native. Forfait fixe, 0 % sur vos ventes. Factur-X, Chorus Pro, intégrations FR natives.",
    url: "/services/ecommerce",
    type: "website",
  },
};

const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType:
    "Développement de boutiques e-commerce sur mesure pour PME et ETI",
  provider: {
    "@type": "Organization",
    name: "Hagnéré Code",
    url: "https://hagnere-code.fr",
    logo: "https://hagnere-code.fr/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "7 rue Ernest Filliard",
      postalCode: "73000",
      addressLocality: "Chambéry",
      addressCountry: "FR",
    },
    email: "hello@hagnere-code.fr",
    telephone: "+33-3-74-47-20-18",
  },
  areaServed: { "@type": "Country", name: "France" },
  description:
    "Développement de boutiques e-commerce sur mesure : storefront Next.js + back-office Laravel + app mobile React Native + IA Claude native. Intégrations FR natives (Stripe, Alma, Colissimo, Chronopost, Sage, Cegid, Pennylane, Chorus Pro, Factur-X 2026). Hébergement France. Forfait fixe, zéro commission sur les ventes.",
  offers: [
    {
      "@type": "Offer",
      name: "Launch · Nouvelle boutique",
      price: "15000",
      priceCurrency: "EUR",
      description:
        "Nouvelle boutique e-commerce jusqu'à 500 produits, Stripe + Alma + 2 transporteurs, Factur-X, livrée en 6-8 semaines",
    },
    {
      "@type": "Offer",
      name: "Scale · Refonte + app mobile",
      price: "30000",
      priceCurrency: "EUR",
      description:
        "Refonte complète incluant app mobile iOS + Android, migration Shopify/Prestashop, marketplaces, livrée en 8-12 semaines",
    },
    {
      "@type": "Offer",
      name: "Enterprise · B2B + multi-pays",
      price: "70000",
      priceCurrency: "EUR",
      description:
        "Boutique B2B + B2C multi-pays, TVA OSS intracom, multi-entrepôt, programme fidélité, livrée en 12-16 semaines",
    },
  ],
});

const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien coûte vraiment une boutique e-commerce sur mesure ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Entre 15 k€ (Launch, nouvelle boutique simple) et 120 k€ (Enterprise multi-pays B2B+B2C). Le prix est fixe, contractuel, zéro % sur les ventes après livraison. Break-even vs Shopify Plus en général à partir de 500 k€ de GMV annuel, vers 12-18 mois.",
      },
    },
    {
      "@type": "Question",
      name: "Shopify ou Prestashop suffirait pas ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Pour une boutique qui démarre, probablement oui. Shopify à 36 €/mois est imbattable tant qu'on accepte le checkout standard et 0,5-2 % de fees. Le sur-mesure commence à faire sens quand : (a) vous payez déjà plus de 1 000 €/mois d'apps Shopify, (b) vous voulez une app mobile native, (c) vous avez des intégrations FR spécifiques (Sage, Chorus Pro), ou (d) vous faites plus de 500 k€ de GMV.",
      },
    },
    {
      "@type": "Question",
      name: "Qui maintient après la livraison ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Trois options : (1) forfait TMA mensuel chez nous (monitoring + évolutions + hotline, 800 à 2 500 €/mois) ; (2) votre équipe interne reprend (stack 100 % standard Laravel + React, doc livrée) ; (3) une autre ESN française prend le relais. 30 jours de garantie bugs inclus.",
      },
    },
    {
      "@type": "Question",
      name: "On a 5 000 produits + 10 000 clients sur Prestashop, comment on migre ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Migration en 4 phases : extraction des données (API ou dump DB), nettoyage et import dans la nouvelle stack, mapping 301 exhaustif (chaque URL ancienne vers URL nouvelle), bascule DNS zero-downtime avec monitoring SEO continu sur 30 jours. Jamais de perte de trafic organique sur nos 6 dernières migrations.",
      },
    },
    {
      "@type": "Question",
      name: "Vous faites aussi le design et la charte graphique ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Oui, inclus dans tous les forfaits. Si vous n'avez pas de charte : moodboard, charte couleurs et typographie, logo avec déclinaisons, design system Figma complet, maquettes web + mobile + email. Si vous avez déjà une charte, on adapte et on étend.",
      },
    },
    {
      "@type": "Question",
      name: "Est-ce qu'on est propriétaire du code ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Oui, intégralement. Repo Git sur votre organisation dès J+1. Aucune licence propriétaire Hagnéré, aucun royalties, aucune clé cachée. Reprise possible par une autre équipe en 2 à 3 semaines de ramp-up.",
      },
    },
    {
      "@type": "Question",
      name: "Et la facturation électronique 2026 ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Obligation 1er septembre 2026 pour les grandes entreprises et ETI, 1er septembre 2027 pour les PME/TPE. Votre boutique Hagnéré émet nativement en Factur-X (PDF/A-3 + XML CII), dépose automatiquement chez une Plateforme Agréée (Pennylane, Docaposte) et fait le e-reporting B2C.",
      },
    },
    {
      "@type": "Question",
      name: "Et si on a un pic Black Friday, ça tient la charge ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Oui : infra stateless, scale horizontal auto, CDN Cloudflare devant, queues Redis isolées. Chaque livraison inclut un test de charge à 10× le pic normal avant go-live. Monitoring 24/7 avec alertes.",
      },
    },
    {
      "@type": "Question",
      name: "App mobile iOS + Android, c'est vraiment inclus ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Oui sur les forfaits Scale et Enterprise. Une seule codebase React Native + Expo, publiée sur App Store et Play Store sous vos comptes développeur. Push notifications, wallet client, scan code produit, panier synchro cross-device, OTA updates via EAS. Sur le Launch, l'app est en option (+15 à 25 k€).",
      },
    },
    {
      "@type": "Question",
      name: "Marketplaces (Amazon, CDiscount, ManoMano) : vous savez intégrer ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Oui. On synchronise catalogue (produits, stocks, prix) et commandes via Lengow, ShoppingFeed ou Iziflux, ou en direct via API Amazon SP-API / CDiscount Pro / ManoMano Seller selon le volume. Les commandes marketplaces tombent dans le même back-office que la boutique.",
      },
    },
  ],
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hagnere-code.fr/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://hagnere-code.fr/#services" },
    {
      "@type": "ListItem",
      position: 3,
      name: "E-commerce sur mesure",
      item: "https://hagnere-code.fr/services/ecommerce",
    },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json">{serviceJsonLd}</script>
      <script type="application/ld+json">{faqJsonLd}</script>
      <script type="application/ld+json">{breadcrumbJsonLd}</script>
      <Ecommerce />
    </>
  );
}
