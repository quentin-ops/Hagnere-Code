import type { Metadata } from "next";
import { AuditTechnique } from "@/components/audit-technique/AuditTechnique";
import { OG_BASE, SERVICES_OG_IMAGE } from "@/lib/seo";
import { TEAM_PUBLIC_COMPOSITION } from "@/lib/team";

export const metadata: Metadata = {
  title: "Audit technique · Dette chiffrée en 10 jours · Hagnéré Code",
  description:
    "Audit technique indépendant pour dirigeants, VC et M&A : dette chiffrée en euros, rapport board-ready en 10 jours. 4 formats de 8 à 68 k€.",
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
        "Format Express 3-5 jours ouvrés, 1 senior dédié, 4-5 dimensions couvertes, livrable Notion + Loom 15 min, Tech Debt P&L simplifié. Pour post-incident, pré-décision urgente, 2e avis rapide. Démarrage sous 3 jours ouvrés.",
    },
    {
      "@type": "Offer",
      name: "Audit Standard · 10 jours",
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
        "Format Deep 15-20 jours ouvrés, 3 seniors + architecte + lead, tout inclus dans Standard + rapport 60-80 pages, 3 scenarios chiffrés sur 3 ans, restitution trilatérale CEO + CTO + CFO, dashboard opex vs capex, version data-room contrôlée. Pour décisions > 500 k€ : go/no-go refonte, Série B côté vendeur, gros gap SOC2. Démarrage sous 5 jours ouvrés.",
    },
    {
      "@type": "Offer",
      name: "Tech Due Diligence M&A · acquisition",
      price: "68000",
      priceCurrency: "EUR",
      description:
        "Format Tech DD M&A 20-30 jours ouvrés, 4 personnes dédiées + coordination avocats M&A, rapport format acquisition 80-120 pages, analyse licences open source + IP + propriété code, liste deal-breakers flaggés go/no-go/re-négo, roadmap remédiation post-deal chiffrée 12/24 mois, NDA renforcé attorney-client privilege. Pour acquéreurs en rachat de scale-up. Démarrage sous 3 jours ouvrés.",
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
          "Premiers insights transmis à J+5 par note de synthèse 3-4 pages (format Standard). Rapport complet livré à J+10 Standard, J+5 Express, J+20 Deep, J+30 Tech DD M&A. Vous pouvez arrêter l'audit à tout moment si le scope doit pivoter — paiement au prorata des jours consommés.",
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
          "Démarrage sous 5 jours ouvrés après signature (3 jours pour une urgence justifiée, Tech DD M&A ou Express). Phase J-5 à J0 : brief technique 90 min, NDA mutuel signé, accès read-only configurés (GitHub, cloud, Sentry, Linear, Notion). Votre équipe a environ 2 heures de travail total pour la partie setup.",
      },
    },
    {
      "@type": "Question",
      name: "On a déjà SonarQube et Snyk, pourquoi faire appel à vous ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Ces outils trouvent des bugs techniques, pas des problèmes de business. Aucun SaaS ne chiffre votre dette tech en euros, ne priorise par impact board, ne produit un rapport défendable en DD VC ou M&A. Un audit Hagnéré, ce n'est pas un scan, c'est une traduction technique vers business — on agrège vos outils + les nôtres + entretiens équipe pour produire un verdict exploitable par votre CA.",
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
      <script type="application/ld+json">{serviceJsonLd}</script>
      <script type="application/ld+json">{faqJsonLd}</script>
      <script type="application/ld+json">{breadcrumbJsonLd}</script>
      <AuditTechnique />
    </>
  );
}
