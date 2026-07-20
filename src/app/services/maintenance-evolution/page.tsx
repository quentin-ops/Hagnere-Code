import type { Metadata } from "next";
import { MaintenanceEvolution } from "@/components/maintenance-evolution/MaintenanceEvolution";
import { OG_BASE, SERVICES_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Maintenance applicative & TMA sur mesure · Hagnéré Code",
  description:
    "Maintenance, supervision et évolution d'applications : périmètre, équipe, niveaux de service et réversibilité définis dans un devis adapté à votre production.",
  alternates: { canonical: "/services/maintenance-evolution" },
  openGraph: {
    ...OG_BASE,
    title: "Maintenance & évolution — Hagnéré Code",
    description:
      "Maintenance, supervision, correctifs et évolutions avec responsabilités, niveaux de service et réversibilité cadrés au contrat.",
    url: "/services/maintenance-evolution",
    images: [SERVICES_OG_IMAGE],
  },
  twitter: { images: [SERVICES_OG_IMAGE.url] },
};

const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Maintenance applicative (TMA) et évolution continue",
  url: "https://hagnere-code.ai/services/maintenance-evolution",
  serviceType:
    "Tierce maintenance applicative (TMA), supervision et évolution de logiciels",
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
    "Maintenance applicative pour PME, ETI et scale-up : reprise, supervision, correctifs de sécurité, évolutions, exploitation d'infrastructure et reporting. Le devis précise l'équipe, les outils, les horaires de couverture, les objectifs de service, les accès et la réversibilité.",
  offers: [
    {
      "@type": "Offer",
      name: "Audit flash",
      price: "2000",
      priceCurrency: "EUR",
      description:
        "Diagnostic initial dont le périmètre, les jours mobilisés et les livrables sont précisés dans le devis.",
    },
    {
      "@type": "Offer",
      name: "Essentiel · Run",
      price: "2500",
      priceCurrency: "EUR",
      description:
        "Base indicative pour une application stable. Volume, supervision, support, délais de traitement et reporting sont confirmés au devis.",
    },
    {
      "@type": "Offer",
      name: "Scale · Évolution",
      price: "6500",
      priceCurrency: "EUR",
      description:
        "Base indicative pour maintenance et évolutions régulières. Équipe, volume, outils, couverture et rituels sont définis au devis.",
    },
    {
      "@type": "Offer",
      name: "Premium · Partner",
      price: "14000",
      priceCurrency: "EUR",
      description:
        "Base indicative pour un dispositif renforcé. Astreinte, objectifs de reprise, audits tiers et engagements de service sont optionnels et contractualisés selon l'architecture.",
    },
  ],
});

const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien de temps avant les premiers effets mesurables en TMA ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Après un diagnostic initial, le devis fixe les accès, priorités, outils, jalons et critères observables. Les délais varient selon l'état de la documentation et de la production.",
      },
    },
    {
      "@type": "Question",
      name: "Qui paye le cloud et l'hébergement ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Vous, directement. AWS, OVH, Scaleway, Vercel restent sur votre compte, facturés par le provider à votre entité. Pas de rebilling, pas de margeage, pas de lock-in. Nous on opère, mais on ne s'intercale pas dans la facture.",
      },
    },
    {
      "@type": "Question",
      name: "Pourquoi Hagnéré Code refuse la facturation au TJM ou à la régie ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Refus de principe. La régie pousse à facturer des heures, pas à produire du résultat. Le forfait fixe mensuel aligne nos intérêts : moins de temps passé sur un incident = meilleur service pour vous. Les intérêts sont alignés par construction.",
      },
    },
    {
      "@type": "Question",
      name: "Quels niveaux de service sont possibles ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Les horaires de couverture, objectifs de disponibilité, temps de prise en charge, méthode de mesure et éventuelles pénalités n'existent que s'ils sont définis dans le devis ou le contrat signé.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps prend l'onboarding d'une TMA ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "La durée dépend des accès, de la documentation, des incidents ouverts et des environnements disponibles. Le plan d'onboarding et ses jalons sont validés au cadrage.",
      },
    },
    {
      "@type": "Question",
      name: "Qui va s'occuper concrètement de mon app ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Le devis nomme les intervenants et leurs rôles selon le périmètre. Il précise également le canal de support, les horaires, les délais cibles et les modalités de continuité en cas d'indisponibilité.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle taille d'application faut-il pour que ça vaille le coup ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "La pertinence dépend surtout de la criticité, de la fréquence des changements, de la dette existante et du niveau de support attendu. Le diagnostic initial sert à dimensionner le dispositif.",
      },
    },
    {
      "@type": "Question",
      name: "Que se passe-t-il si le dev qui gère mon compte part ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Le devis précise l'équipe référente, la documentation attendue et les modalités de remplacement ou de recouvrement adaptées au service retenu.",
      },
    },
    {
      "@type": "Question",
      name: "Si on part, on récupère quoi ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Les accès et comptes placés au nom du client restent sous son contrôle. En fin de contrat, les éléments de reprise prévus par les CGV sont remis ; la durée et le contenu d'une passation éventuelle sont précisés au devis.",
      },
    },
    {
      "@type": "Question",
      name: "C'est quoi exactement dans les 2 000 € de l'audit flash ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Le diagnostic initial est cadré au devis : intervenants, jours mobilisés, code et infrastructure couverts, livrables et restitution. Aucune déduction automatique n'est prévue par les CGV publiques.",
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
      name: "Maintenance & évolution",
      item: "https://hagnere-code.ai/services/maintenance-evolution",
    },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <MaintenanceEvolution />
    </>
  );
}
