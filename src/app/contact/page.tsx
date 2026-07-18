import type { Metadata } from "next";
import { ContactPage } from "@/components/contact/ContactPage";
import { OG_BASE, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact agence web Chambéry · Réponse 24 h · Hagnéré Code",
  description:
    "Parlez à quelqu'un qui code — pas à un commercial. Réponse sous 24 h ouvrées (souvent 3 à 6 h), 30 min de cadrage gratuit. Bureau à Chambéry.",
  alternates: { canonical: "/contact" },
  openGraph: {
    ...OG_BASE,
    title: "Contact projet web sur mesure · Hagnéré Code Chambéry",
    description:
      "SaaS, applications métier, outils internes, reprise Laravel. Quelqu'un qui code répond sous 24 h ouvrées.",
    url: "/contact",
    images: [DEFAULT_OG_IMAGE],
  },
};

const contactJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact · Hagnéré Code",
  url: "https://hagnere-code.ai/contact",
  description:
    "Prendre contact avec Hagnéré Code pour un projet web sur mesure : SaaS B2B, application métier, outil interne, reprise Laravel ou site vitrine.",
  mainEntity: {
    "@type": "ProfessionalService",
    "@id": "https://hagnere-code.ai/#business",
    name: "Hagnéré Code",
    legalName: "HAGNÉRÉ CODE SAS",
    url: "https://hagnere-code.ai",
    logo: "https://hagnere-code.ai/logos/logo-dark.png",
    image: "https://hagnere-code.ai/og-image.png",
    priceRange: "€€€",
    email: "quentin@hagnere-patrimoine.fr",
    telephone: "+33374472018",
    vatID: "FR30993672856",
    foundingDate: "2025-09-30",
    address: {
      "@type": "PostalAddress",
      streetAddress: "7 rue Ernest Filliard",
      addressLocality: "Chambéry",
      addressRegion: "Savoie",
      postalCode: "73000",
      addressCountry: "FR",
    },
    // Zones réellement desservies depuis Chambéry. Lyon et Grenoble ont été
    // retirées : aucune présence ni client sur place — déclarer une zone sans
    // ancrage ne produit rien et brouille le signal local (voir
    // docs/plan-seo-local-savoie.md, §10).
    areaServed: [
      "Chambéry",
      "Savoie",
      "Haute-Savoie",
      "France",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "quentin@hagnere-patrimoine.fr",
      telephone: "+33374472018",
      availableLanguage: ["French"],
      areaServed: "FR",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
    },
  },
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hagnere-code.ai/" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://hagnere-code.ai/contact" },
  ],
});

const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Je n'ai pas encore de brief précis — je vous dérange ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Non, au contraire. La moitié de nos prospects arrive avec une idée mais pas de cahier des charges. C'est exactement le moment où un cadrage honnête vous fait gagner 3 mois. On vous pose les bonnes questions, vous repartez avec une direction claire — même si on ne bosse finalement pas ensemble.",
      },
    },
    {
      "@type": "Question",
      name: "C'est gratuit, vraiment ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Oui, 100 %. Le premier échange (30 min), le cadrage léger et l'avis franc sont gratuits. Si on décide ensemble de creuser, on passe à un Discovery Sprint payé (1 500 €, 2 jours, entièrement déduit du devis final). Aucune facturation avant signature d'un forfait.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps avant votre réponse ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "24 h ouvrées maximum, en pratique 3–6 h la plupart du temps. Le week-end et les jours fériés, on coupe : mieux vaut une équipe reposée le lundi qu'une équipe rincée le dimanche.",
      },
    },
    {
      "@type": "Question",
      name: "Et si mon projet n'est pas pour vous ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "On vous le dit en 2 minutes et on vous oriente. Réseau de confrères freelances et studios sur Chambéry, Lyon, Paris, Bordeaux. Si ce n'est pas du web (Next.js/React ou reprise Laravel/PHP), pas PME/ETI — on vous envoie vers le bon interlocuteur. Zéro intérêt à vous garder chez nous si on n'est pas la bonne équipe.",
      },
    },
    {
      "@type": "Question",
      name: "Je veux voir du code avant de vous parler.",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Normal. Nos 4 projets publics (LMNP.AI, SCI-AI, Hagnéré Patrimoine, Hagnéré Investissement) sont tous visitables en direct. Pendant l'appel de 30 min, on peut aussi vous faire une démo live en partage d'écran sur nos repos Git privés.",
      },
    },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json">{contactJsonLd}</script>
      <script type="application/ld+json">{breadcrumbJsonLd}</script>
      <script type="application/ld+json">{faqJsonLd}</script>
      <ContactPage />
    </>
  );
}
