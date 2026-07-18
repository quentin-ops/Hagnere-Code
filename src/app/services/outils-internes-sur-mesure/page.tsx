import type { Metadata } from "next";
import { OutilsInternes } from "@/components/outils-internes/OutilsInternes";
import { OG_BASE, SERVICES_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Outils internes sur mesure · Sortir d'Excel · Hagnéré Code",
  description:
    "CRM, ERP léger, back-office : remplacez Excel par un outil métier sur mesure. Forfait fixe de 8 à 80 k€, livré en 2 à 10 semaines, hébergé en France.",
  alternates: { canonical: "/services/outils-internes-sur-mesure" },
  openGraph: {
    ...OG_BASE,
    title: "Outils internes sur mesure PME & ETI — Hagnéré Code",
    description:
      "Back-offices, CRM métier, ERP légers. Intégrations Sage, Cegid, Pennylane. Next.js/React + IA. Forfait fixe, données en France.",
    url: "/services/outils-internes-sur-mesure",
    images: [SERVICES_OG_IMAGE],
  },
  twitter: { images: [SERVICES_OG_IMAGE.url] },
};

// JSON-LD structured data
const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Développement d'outils internes sur mesure pour PME et ETI",
  url: "https://hagnere-code.ai/services/outils-internes-sur-mesure",
  serviceType: "Développement d'outils internes sur mesure pour PME et ETI",
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
    "Développement d'outils internes sur mesure pour PME et ETI : CRM métier, ERP léger, back-offices, automatisations. Intégrations ERP legacy (Sage, Cegid, EBP, SAP), CRM (Salesforce, HubSpot, Pipedrive), Active Directory / SSO. Stack Next.js, React, IA Claude — reprises d'outils Laravel existants possibles. Hébergé en France.",
  offers: [
    {
      "@type": "Offer",
      name: "Audit processus 1 jour",
      price: "990",
      priceCurrency: "EUR",
      description: "Audit sur site d'1 journée, observation des équipes, roadmap de digitalisation priorisée, déductible du forfait.",
    },
    {
      "@type": "Offer",
      name: "Starter · Process ciblé",
      price: "8000",
      priceCurrency: "EUR",
      description: "Un outil interne ciblé sur un processus précis, livré en 2–3 semaines",
    },
    {
      "@type": "Offer",
      name: "Pro · Outil métier complet",
      price: "25000",
      priceCurrency: "EUR",
      description: "CRM métier ou ERP léger avec intégrations, multi-utilisateurs, livré en 5–8 semaines",
    },
    {
      "@type": "Offer",
      name: "Enterprise · Plateforme interne",
      price: "80000",
      priceCurrency: "EUR",
      description: "Outil interne multi-départements, SSO enterprise, intégrations lourdes",
    },
  ],
});

const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien de temps pour livrer un outil interne ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Entre 2 et 10 semaines selon l'ampleur. Un outil ciblé (un seul processus, 3–5 écrans) se livre en 2–3 semaines. Un CRM métier complet ou un ERP léger en 5–8 semaines. Les dates sont contractualisées au cadrage avec clause de pénalité.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle différence avec du no-code ou un SaaS standard ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Le no-code (Airtable, Notion, Softr) plafonne à 20–30 utilisateurs et vous verrouille. Le SaaS standard (Salesforce, HubSpot) impose sa logique — pas la vôtre. Un outil sur mesure parle exactement votre métier, s'intègre à votre stack (Sage, Cegid, Active Directory), et vous possédez le code.",
      },
    },
    {
      "@type": "Question",
      name: "Vous intégrez Sage, Cegid, EBP, SAP ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Oui. On a intégré Sage 100, Sage X3, Cegid Loop, EBP, Pennylane, Axonaut, Sellsy, Chorus Pro, Salesforce, HubSpot, Pipedrive, Active Directory, Azure AD, SharePoint, Google Workspace. Si votre SI expose une API REST, SOAP ou un import CSV programmé, on s'y branche.",
      },
    },
    {
      "@type": "Question",
      name: "Et si nos équipes ne l'utilisent pas ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "On pilote le projet avec 3–4 utilisateurs finaux identifiés dès la semaine 1. On les interviewe, on co-design avec eux, on teste. À la livraison : formation sur site (1 journée), vidéo Loom de 10 min, guide PDF, super-users identifiés, session Q&A à J+30 et J+90. L'adoption fait partie du livrable, pas une option.",
      },
    },
    {
      "@type": "Question",
      name: "Les données restent-elles chez nous ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Trois options : (1) hébergement mutualisé Scaleway Paris / OVH Roubaix, le plus rapide ; (2) cloud client (AWS, Azure, OVH privé) ; (3) on-premise sur vos serveurs. Les trois sont compatibles avec SSO entreprise, chiffrement at-rest, sauvegardes 15 min.",
      },
    },
    {
      "@type": "Question",
      name: "On est propriétaire du code à la fin ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Oui, intégralement. Repo Git chez vous dès J+1. Aucune licence, aucun royalties, aucune clé cachée. Si vous voulez reprendre avec votre équipe interne ou une autre ESN dans 2 ans, le code, la doc et le runbook le permettent. C'est le sens du 'sur mesure'.",
      },
    },
    {
      "@type": "Question",
      name: "C'est quoi l'Audit processus à 990 € ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Un format d'entrée peu engageant. 1 journée sur site (ou en visio), on observe 2–3 équipes dans leur quotidien, on cartographie 3–5 processus les plus douloureux, on sort un document de roadmap digitalisation priorisée avec 3 scénarios (coût / délai / ROI). 990 € HT, déductibles du devis si mission derrière.",
      },
    },
    {
      "@type": "Question",
      name: "Et pour un groupe multi-sites / multi-filiales ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Possible. Architecture multi-entités native (une app, N sociétés, cloisonnement des données), SSO groupe, consolidation reporting. Plutôt sur nos forfaits Pro ou Enterprise, après cadrage approfondi.",
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
      name: "Outils internes sur mesure",
      item: "https://hagnere-code.ai/services/outils-internes-sur-mesure",
    },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json">{serviceJsonLd}</script>
      <script type="application/ld+json">{faqJsonLd}</script>
      <script type="application/ld+json">{breadcrumbJsonLd}</script>
      <OutilsInternes />
    </>
  );
}
