import type { Metadata } from "next";
import { AuditTechnique } from "@/components/audit-technique/AuditTechnique";
import { OG_BASE, SERVICES_OG_IMAGE } from "@/lib/seo";
import { TEAM_PUBLIC_COMPOSITION } from "@/lib/team";

export const metadata: Metadata = {
  title: "Audit technique · Décision documentée · Hagnéré Code",
  description:
    "Audit technique pour dirigeants, investisseurs et équipes produit : constats sourcés, hypothèses de coût, priorités, calendrier et livrables cadrés au devis.",
  alternates: { canonical: "/services/audit-technique" },
  openGraph: {
    ...OG_BASE,
    title: "Audit technique — Hagnéré Code",
    description:
      "Audit technique cadré pour une décision de direction : constats, hypothèses de coût, priorités et livrables définis au devis.",
    url: "/services/audit-technique",
    images: [SERVICES_OG_IMAGE],
  },
  twitter: { images: [SERVICES_OG_IMAGE.url] },
};

const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Audit technique indépendant, dette chiffrée en euros",
  url: "https://hagnere-code.ai/services/audit-technique",
  serviceType:
    "Audit technique indépendant (code, architecture, sécurité, performance, infrastructure, DevEx, FinOps, équipe) avec livrable board-ready Tech Debt P&L",
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
    "Audit technique pour PME, ETI, équipes produit et investisseurs : code, architecture, performance, sécurité, infrastructure, DevEx, coûts cloud et organisation. Les dimensions, livrables, hypothèses de chiffrage, calendrier et critères d'acceptation sont confirmés au devis.",
  offers: [
    {
      "@type": "Offer",
      name: "Audit Express · urgence",
      price: "8000",
      priceCurrency: "EUR",
      description:
        "Base budgétaire pour un diagnostic ciblé. Dimensions, intervenants, délai, accès, livrables et critères d'acceptation sont confirmés au devis.",
    },
    {
      "@type": "Offer",
      name: "Audit Standard",
      price: "18000",
      priceCurrency: "EUR",
      description:
        "Base budgétaire pour un format Standard. Dimensions, équipe, calendrier, volume et format des livrables sont confirmés après cadrage dans le devis signé.",
    },
    {
      "@type": "Offer",
      name: "Audit Deep · refonte ou levée",
      price: "38000",
      priceCurrency: "EUR",
      description:
        "Base budgétaire pour une décision complexe. Dimensions, compétences, scénarios, délai, livrables et restitution sont confirmés au devis.",
    },
    {
      "@type": "Offer",
      name: "Tech Due Diligence M&A · acquisition",
      price: "68000",
      priceCurrency: "EUR",
      description:
        "Base budgétaire pour une due diligence technique. Périmètre, intervenants, coordination avec les conseils, confidentialité, délais et livrables sont confirmés au devis.",
    },
  ],
});

const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien de temps avant les premiers insights d'un audit technique ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Le devis fixe les jalons, les restitutions intermédiaires, le rapport final et la procédure à suivre si le périmètre doit évoluer. Aucun paiement au prorata ni droit d'arrêt particulier n'est présumé s'il n'est pas écrit au contrat.",
      },
    },
    {
      "@type": "Question",
      name: "Le prix de l'audit technique est-il vraiment fixe ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Les budgets de départ sont affichés publiquement. Les options, dont un pentest confié à un prestataire qualifié PASSI lorsque le cahier des charges l'exige, sont identifiées et chiffrées dans le devis avant intervention.",
      },
    },
    {
      "@type": "Question",
      name: "Pourquoi une clause de non-conflit d'intérêt publique ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "L'audit sépare les constats, leurs preuves et les hypothèses de coût. Toute remise ou déduction liée à une mission ultérieure doit être indiquée explicitement dans le devis ; elle n'est pas présumée par les CGV publiques.",
      },
    },
    {
      "@type": "Question",
      name: "Vous garantissez quoi exactement sur l'audit ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Le devis indique les livrables, critères d'acceptation, confidentialité, calendrier, accès, réversibilité et droits de propriété applicables. Les livrables spécifiques sont transférés selon les CGV après paiement complet, sous réserve des composants préexistants et licences tierces.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps prend le démarrage de l'audit ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "La date de démarrage dépend des disponibilités, de la confidentialité, des accès en lecture seule et des personnes à interviewer. Le plan de mobilisation et la charge attendue côté client sont précisés au devis.",
      },
    },
    {
      "@type": "Question",
      name: "On a déjà SonarQube et Snyk, pourquoi faire appel à vous ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Les scanners apportent des signaux utiles mais ne remplacent pas l'examen du contexte, de l'architecture, de l'exploitation et de la décision à sécuriser. Le devis précise quelles preuves automatiques et humaines seront utilisées et les limites de l'analyse.",
      },
    },
    {
      "@type": "Question",
      name: "Qui va concrètement ausculter notre code ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          `Les intervenants, leurs rôles et leur statut sont nommés dans le devis selon le périmètre. ${TEAM_PUBLIC_COMPOSITION}. Le devis précise également les responsabilités de revue, les éventuels remplacements et les modalités de continuité.`,
      },
    },
    {
      "@type": "Question",
      name: "Quelle taille d'application pour qu'un audit soit pertinent ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Le bon format dépend moins du nombre d'utilisateurs que du périmètre technique, des accès disponibles et de la décision à sécuriser. Le cadrage permet de distinguer un diagnostic ciblé d'un audit plus large, sans promettre un retour financier automatique.",
      },
    },
    {
      "@type": "Question",
      name: "Si on part, on récupère quoi ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Le devis énumère les livrables remis, les formats, les droits d'utilisation et la procédure de révocation des accès. Conformément aux CGV, les livrables spécifiques sont transférés après paiement complet, sous réserve des éléments préexistants, outils génériques et licences tierces.",
      },
    },
    {
      "@type": "Question",
      name: "C'est quoi exactement dans les 18 000 € du format Standard ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Le format Standard est cadré au devis : jours mobilisés, intervenants, dimensions effectivement auditées, outils autorisés, livrables, calendrier et critères d'acceptation. Les éventuelles licences ou analyses tierces ne sont incluses que lorsqu'elles figurent explicitement dans ce devis.",
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
      name: "Audit technique",
      item: "https://hagnere-code.ai/services/audit-technique",
    },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <AuditTechnique />
    </>
  );
}
