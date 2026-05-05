import type { Metadata } from "next";
import { SaasApplicationsMetier } from "@/components/saas-applications/SaasApplicationsMetier";

export const metadata: Metadata = {
  title: "SaaS, applications métier & apps mobiles · Hagnéré Code",
  description:
    "Plateformes B2B, espaces clients, marketplaces, applications métier et apps mobiles sur mesure. Stack Laravel 13, React, Next.js, React Native et IA native. Forfait fixe, MVP livré en 3 à 6 semaines.",
  alternates: { canonical: "/services/saas-applications-metier" },
  openGraph: {
    title: "SaaS, applications métier & apps mobiles · Hagnéré Code",
    description:
      "Plateformes B2B et apps mobiles propulsées par Laravel 13, React/Next et IA. Forfait fixe, MVP 3-6 semaines.",
    url: "/services/saas-applications-metier",
    images: [
      {
        url: "/og-image-services.png",
        width: 1200,
        height: 630,
        alt: "Services Hagnéré Code — SaaS, applis métier, outils internes, sites vitrines, e-commerce",
      },
    ],
    type: "website",
  },
};

// JSON-LD structured data — static, author-controlled content.
// We pass it as a child of <script type="application/ld+json"> which React
// emits verbatim without parsing, avoiding dangerouslySetInnerHTML.
const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Développement de SaaS et applications métier sur mesure",
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
      addressCountry: "FR",
    },
    email: "quentin@hagnere-patrimoine.fr",
    telephone: "+33374472018",
  },
  areaServed: { "@type": "Country", name: "France" },
  description:
    "Développement de plateformes B2B, espaces clients, marketplaces, applications métier et apps mobiles iOS/Android. Stack Laravel 13, React, Next.js, React Native, IA native (Claude, GPT-4o).",
  offers: [
    {
      "@type": "Offer",
      name: "Essentiel · MVP court",
      price: "15000",
      priceCurrency: "EUR",
      description: "MVP SaaS 3-5 écrans, Auth, facturation, livré en 3-4 semaines",
    },
    {
      "@type": "Offer",
      name: "Standard · MVP complet",
      price: "30000",
      priceCurrency: "EUR",
      description: "SaaS 10-15 écrans, API, agents IA, RGPD, livré en 5-6 semaines",
    },
    {
      "@type": "Offer",
      name: "Partenariat · Co-build",
      price: "120000",
      priceCurrency: "EUR",
      description: "Équipe dédiée 3-5 personnes sur la durée",
    },
  ],
});

const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien de temps pour livrer un SaaS ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Entre 3 et 6 semaines pour un MVP production-ready, selon la complexité. Pour un périmètre plus large (10-15 écrans, permissions complexes, intégrations multiples), comptez 6 à 10 semaines. Les dates sont fixées au cadrage et contractualisées avec clause de pénalité de retard.",
      },
    },
    {
      "@type": "Question",
      name: "Est-ce qu'on est propriétaire du code ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Oui, intégralement. Le repo Git est chez vous dès J+1. Vous pouvez à tout moment le récupérer et le faire travailler par une autre équipe. Pas de lock-in technique, pas de royalties.",
      },
    },
    {
      "@type": "Question",
      name: "Vous faites du low-code / no-code ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Non. Nous écrivons du vrai code Laravel 13 / React / Next.js, testé, typé, versionné. Le low-code est adapté pour prototyper ou pour des automatisations internes, mais au-delà de 10 utilisateurs payants, cela devient un piège technique et économique.",
      },
    },
    {
      "@type": "Question",
      name: "Que se passe-t-il après la livraison ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Trois options : (1) vous reprenez le code et votre équipe technique prend le relais, (2) vous prenez un forfait de maintenance mensuel chez nous, (3) on continue à construire avec vous en mode co-build long terme. 30 jours de garantie sur les bugs critiques inclus.",
      },
    },
    {
      "@type": "Question",
      name: "Vous reprenez un projet existant mal fichu ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Oui, après un audit technique payant (1 500 €, déduits du devis si mission). On regarde le code, la dette technique, la faisabilité de reprise. Dans 70% des cas on reprend, dans 30% on recommande une réécriture.",
      },
    },
    {
      "@type": "Question",
      name: "Nos données sont-elles hébergées en France ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Par défaut oui — Scaleway Paris ou OVH Roubaix. Pour les clients qui préfèrent un hébergement global (Laravel Cloud, AWS), on peut configurer. Les données sont chiffrées at-rest et in-transit, avec sauvegardes toutes les 15 minutes.",
      },
    },
    {
      "@type": "Question",
      name: "Vous faites aussi du mobile iOS / Android ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Oui. Nous utilisons React Native + Expo : une seule codebase, deux stores (App Store + Play Store), même API que le web. Compter +10 à 20 k€ sur le forfait SaaS pour une app mobile compagnon bien finie, publiée sur les stores avec vos comptes développeur.",
      },
    },
    {
      "@type": "Question",
      name: "React, Next.js, Laravel… qu'est-ce qui détermine la stack ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Le cas d'usage, pas la mode. Laravel 13 + Livewire pour 80% des SaaS B2B. Next.js / React pour les interfaces temps-réel, éditeurs, apps très interactives ou pages publiques SEO-critiques. React Native pour le mobile. La stack est choisie après le cadrage, pas avant.",
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
      name: "SaaS & applications métier",
      item: "https://hagnere-code.fr/services/saas-applications-metier",
    },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json">{serviceJsonLd}</script>
      <script type="application/ld+json">{faqJsonLd}</script>
      <script type="application/ld+json">{breadcrumbJsonLd}</script>
      <SaasApplicationsMetier />
    </>
  );
}
