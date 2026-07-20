import type { Metadata } from "next";
import { OutilsInternes } from "@/components/outils-internes/OutilsInternes";
import { OG_BASE, SERVICES_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Outils internes sur mesure · Sortir d'Excel · Hagnéré Code",
  description:
    "CRM, ERP léger et back-office sur mesure : périmètre, budget, calendrier, hébergement, accès et réversibilité sont précisés au devis.",
  alternates: { canonical: "/services/outils-internes-sur-mesure" },
  openGraph: {
    ...OG_BASE,
    title: "Outils internes sur mesure PME & ETI — Hagnéré Code",
    description:
      "Back-offices, CRM métier et ERP légers avec intégrations étudiées selon votre SI. Périmètre, données, délais et droits au devis.",
    url: "/services/outils-internes-sur-mesure",
    images: [SERVICES_OG_IMAGE],
  },
  twitter: { images: [SERVICES_OG_IMAGE.url] },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
    "Développement d'outils internes sur mesure pour PME et ETI : CRM métier, ERP léger, back-offices et automatisations. Les intégrations, technologies, intervenants, délais, hébergement, accès et conditions de reprise sont vérifiés puis écrits au devis.",
  offers: [
    {
      "@type": "Offer",
      name: "Audit processus 1 jour",
      price: "990",
      priceCurrency: "EUR",
      description:
        "Audit sur site d'1 journée, observation des équipes, roadmap de digitalisation priorisée, déductible du forfait.",
    },
    {
      "@type": "Offer",
      name: "Starter · Process ciblé",
      price: "8000",
      priceCurrency: "EUR",
      description:
        "Base budgétaire indicative pour un processus ciblé ; périmètre et calendrier confirmés au devis.",
    },
    {
      "@type": "Offer",
      name: "Pro · Outil métier complet",
      price: "25000",
      priceCurrency: "EUR",
      description:
        "Base budgétaire indicative pour un outil métier ; écrans, intégrations, équipe et calendrier confirmés au devis.",
    },
    {
      "@type": "Offer",
      name: "Enterprise · Plateforme interne",
      price: "80000",
      priceCurrency: "EUR",
      description:
        "Outil interne multi-départements, SSO enterprise, intégrations lourdes",
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
        text: "Le calendrier dépend du périmètre, des accès, des intégrations, de la migration et des validations. Le devis fixe les jalons, les dépendances, la recette et le traitement d'un éventuel retard.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle différence avec du no-code ou un SaaS standard ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Il faut comparer l'adéquation fonctionnelle, les limites, l'intégration, la sécurité, la portabilité et le coût total sur trois ans. Pour le sur-mesure, les droits, le dépôt, les composants préexistants et les licences sont ceux définis au devis et dans les CGV.",
      },
    },
    {
      "@type": "Question",
      name: "Vous intégrez Sage, Cegid, EBP, SAP ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chaque intégration fait l'objet d'une étude de version, API, licence, droits, quotas, formats, sécurité et reprise sur erreur. Le devis ne promet un connecteur qu'après cette vérification.",
      },
    },
    {
      "@type": "Question",
      name: "Et si nos équipes ne l'utilisent pas ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le plan d'adoption précise les utilisateurs référents, les tests, la formation, les supports et les indicateurs d'usage. Les sessions après lancement et les ajustements ne sont inclus que s'ils figurent au devis ; aucun taux d'adoption n'est garanti.",
      },
    },
    {
      "@type": "Question",
      name: "Les données restent-elles chez nous ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'environnement opéré, le compte cloud client ou le déploiement sur site peuvent être étudiés. Le devis précise fournisseur, région, accès, responsabilités, chiffrement, sauvegardes, sous-traitants et réversibilité.",
      },
    },
    {
      "@type": "Question",
      name: "On est propriétaire du code à la fin ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les livrables spécifiques sont transférés après paiement complet selon les CGV. Le devis inventorie le dépôt Git, les accès, la documentation, le runbook et la réversibilité, sous réserve des composants préexistants, open source et licences tierces.",
      },
    },
    {
      "@type": "Question",
      name: "C'est quoi l'Audit processus à 990 € ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un format d'entrée peu engageant. 1 journée sur site (ou en visio), on observe 2–3 équipes dans leur quotidien, on cartographie 3–5 processus les plus douloureux, on sort un document de roadmap digitalisation priorisée avec 3 scénarios (coût / délai / ROI). 990 € HT, déductibles du devis si mission derrière.",
      },
    },
    {
      "@type": "Question",
      name: "Et pour un groupe multi-sites / multi-filiales ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Possible après cadrage. Le modèle d'entités, le cloisonnement, le SSO, les flux et la consolidation doivent être conçus et testés pour votre organisation avant engagement.",
      },
    },
  ],
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: "https://hagnere-code.ai/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://hagnere-code.ai/services",
    },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serviceJsonLd.replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqJsonLd.replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd.replace(/</g, "\\u003c"),
        }}
      />
      <OutilsInternes />
    </>
  );
}
