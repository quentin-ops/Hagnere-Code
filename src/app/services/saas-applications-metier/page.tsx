import type { Metadata } from "next";
import { SaasApplicationsMetier } from "@/components/saas-applications/SaasApplicationsMetier";
import { OG_BASE, SERVICES_OG_IMAGE } from "@/lib/seo";

// Le title porte « agence développement SaaS sur mesure » plutôt que le seul
// « SaaS sur mesure » : l'audit SERP a montré que cette requête commerciale
// est servie par des pages service, et cette page est la nôtre. Créer une
// page /agence-developpement-saas distincte l'aurait cannibalisée.
export const metadata: Metadata = {
  title: "Agence développement SaaS sur mesure · Hagnéré Code",
  description:
    "Agence de développement SaaS sur mesure : cadrage, UX, web, mobile, IA, mise en production et reprise. Forfait fixe, code et documentation transférés.",
  alternates: { canonical: "/services/saas-applications-metier" },
  openGraph: {
    ...OG_BASE,
    title: "Agence développement SaaS sur mesure · Hagnéré Code",
    description:
      "Plateformes SaaS B2B et applications métier : cadrage, développement, mise en production et transfert. Forfait fixe et preuves produits vérifiables.",
    url: "/services/saas-applications-metier",
    images: [SERVICES_OG_IMAGE],
  },
  twitter: { images: [SERVICES_OG_IMAGE.url] },
};

// JSON-LD structured data — static, author-controlled content. The rendered
// string is injected in the script element after escaping '<' characters.
const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Développement SaaS et applications métier sur mesure",
  url: "https://hagnere-code.ai/services/saas-applications-metier",
  serviceType: "Développement de SaaS et applications métier sur mesure",
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
    "Développement de plateformes B2B, espaces clients, marketplaces, applications métier et apps mobiles iOS/Android. Stack Next.js, React, TypeScript, React Native et modèles d'IA choisis selon le cas d'usage.",
  offers: [
    {
      "@type": "Offer",
      name: "Essentiel · MVP court",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: "15000",
        maxPrice: "30000",
        priceCurrency: "EUR",
        valueAddedTaxIncluded: false,
      },
      description: "MVP SaaS de 3 à 5 écrans clés, authentification, facturation et back-office",
    },
    {
      "@type": "Offer",
      name: "Standard · MVP complet",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: "30000",
        maxPrice: "60000",
        priceCurrency: "EUR",
        valueAddedTaxIncluded: false,
      },
      description: "SaaS de 10 à 15 écrans, API, automatisations ou IA et mesures RGPD cadrées",
    },
    {
      "@type": "Offer",
      name: "Partenariat · Co-build",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: "120000",
        priceCurrency: "EUR",
        valueAddedTaxIncluded: false,
      },
      description: "Équipe dédiée et feuille de route pluri-lots sur la durée",
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
          "Le délai dépend du périmètre validé : nombre de parcours, règles métier, reprise de données, intégrations et exigences de sécurité. Un planning et des jalons sont établis après le cadrage puis inscrits au devis.",
      },
    },
    {
      "@type": "Question",
      name: "Est-ce qu'on est propriétaire du code ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Les livrables spécifiques sont transférés après paiement complet selon les CGV. Le devis précise le dépôt Git, les accès, la documentation et la réversibilité ; les composants préexistants, open source et licences tierces restent soumis à leurs droits propres.",
      },
    },
    {
      "@type": "Question",
      name: "Vous faites du low-code / no-code ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Nous développons principalement en TypeScript, React et Next.js. Le no-code reste pertinent pour tester un usage simple ou automatiser un processus interne ; le sur-mesure devient préférable quand les règles métier, les intégrations, la réversibilité ou la maîtrise des coûts l'exigent.",
      },
    },
    {
      "@type": "Question",
      name: "Que se passe-t-il après la livraison ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Le devis définit la recette, la période de correction et la passation. Ensuite, trois options sont possibles : reprise par votre équipe, maintenance ponctuelle ou mensuelle, ou nouveaux lots de développement. Aucune durée de garantie n'est présumée par la page publique.",
      },
    },
    {
      "@type": "Question",
      name: "Vous reprenez un projet existant mal fichu ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Oui, après un audit technique. Nous examinons le code, les dépendances, les données, la sécurité, la couverture de tests et les conditions de déploiement. Le rapport compare ensuite trois options : stabiliser, reprendre progressivement ou réécrire les seules zones qui le justifient.",
      },
    },
    {
      "@type": "Question",
      name: "Nos données sont-elles hébergées en France ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Un hébergement en France ou dans l'Union européenne peut être retenu selon les contraintes du projet. Le devis documente les sous-traitants, la localisation, le chiffrement, la fréquence de sauvegarde ainsi que les objectifs de reprise attendus.",
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
          "Le cas d'usage, pas la mode. Next.js + React (TypeScript) pour l'immense majorité des SaaS B2B : interfaces temps-réel, éditeurs, apps très interactives et pages publiques SEO-critiques. React Native pour le mobile. Nous reprenons et étendons aussi les SaaS Laravel existants — audit, maintenance, évolutions. La stack est choisie après le cadrage, pas avant.",
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
      name: "SaaS & applications métier",
      item: "https://hagnere-code.ai/services/saas-applications-metier",
    },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <SaasApplicationsMetier />
    </>
  );
}
