import type { Metadata } from "next";
import { EquipePage } from "@/components/equipe/EquipePage";

export const metadata: Metadata = {
  title: "L'équipe — 6 personnes en CDI à Chambéry · Hagnéré Code",
  description:
    "Un fondateur, un CTO et 4 développeurs Laravel seniors, tous en CDI à Chambéry. Pas de sous-traitance, pas d'offshore, pas de pool de freelances. L'équipe qui construit votre produit.",
  alternates: { canonical: "/equipe" },
  openGraph: {
    title: "L'équipe Hagnéré Code · 6 personnes seniors à Chambéry",
    description:
      "Un fondateur, un CTO, 4 devs Laravel seniors. Tous en CDI, basés à Chambéry. Augmentés par Claude Code.",
    url: "/equipe",
    type: "website",
  },
};

const orgJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hagnéré Code",
  url: "https://hagnere-code.fr",
  logo: "https://hagnere-code.fr/logos/logo-dark.png",
  email: "hello@hagnere-code.fr",
  telephone: "+33-3-74-47-20-18",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7 rue Ernest Filliard",
    postalCode: "73000",
    addressLocality: "Chambéry",
    addressCountry: "FR",
  },
  numberOfEmployees: { "@type": "QuantitativeValue", value: 6 },
  founder: {
    "@type": "Person",
    name: "Quentin Hagnéré",
    jobTitle: "Fondateur",
    sameAs: ["https://www.linkedin.com/in/quentin-hagnere"],
  },
  employee: [
    {
      "@type": "Person",
      name: "Quentin Hagnéré",
      jobTitle: "Fondateur — Front-end / Design / Brief client",
      sameAs: ["https://www.linkedin.com/in/quentin-hagnere"],
    },
    {
      "@type": "Person",
      name: "Nicolas Wallerand",
      jobTitle: "CTO — Direction technique",
      sameAs: ["https://www.linkedin.com/in/nicolas-wallerand-86b0a079/"],
    },
    {
      "@type": "Person",
      name: "Arthur Monney",
      jobTitle: "Senior Dev — Back-end Laravel",
      sameAs: ["https://www.linkedin.com/in/arthurmonney/"],
    },
    {
      "@type": "Person",
      name: "Frédéric Curinckx",
      jobTitle: "Senior Dev — Back-end Laravel",
      sameAs: ["https://www.linkedin.com/in/frederic-curinckx/"],
    },
    {
      "@type": "Person",
      name: "Ryan Mazzitelli",
      jobTitle: "Senior Dev — Back-end Laravel + IA",
      sameAs: ["https://www.linkedin.com/in/ryan-mazzitelli-907716262/"],
    },
    {
      "@type": "Person",
      name: "Killian Hoarau",
      jobTitle: "Senior Dev — Back-end Laravel + DevOps",
      sameAs: ["https://www.linkedin.com/in/killian-hoarau-960927138/"],
    },
  ],
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hagnere-code.fr/" },
    { "@type": "ListItem", position: 2, name: "L'équipe", item: "https://hagnere-code.fr/equipe" },
  ],
});

const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qui sera mon interlocuteur pendant le projet ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Quentin (le fondateur) reste votre interlocuteur principal du brief à la livraison, pour tout ce qui touche au produit, au cadrage et au design. Nicolas (CTO) intervient sur les questions d'architecture et de jalons techniques. Le dev référent du projet est nommé au cadrage et reste le même jusqu'à la livraison — pas de tournante.",
      },
    },
    {
      "@type": "Question",
      name: "Travaillez-vous avec des freelances ou de la sous-traitance ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Non. Toutes les personnes qui touchent à votre code sont salariées en CDI chez Hagnéré Code, basées à Chambéry. Pas de pool de freelances qui changent à chaque projet, pas de sous-traitance offshore, pas de white-label déguisé. C'est un choix structurant qui explique nos prix au forfait.",
      },
    },
    {
      "@type": "Question",
      name: "Tout le monde travaille à distance ou en local ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Mixte. Le studio physique est à Chambéry (7 rue Ernest Filliard), où l'équipe se retrouve 2 à 3 jours par semaine. Les autres jours, télétravail. Les rituels (daily, planning, démo) sont systématiquement en visio pour garantir la même expérience à tout le monde.",
      },
    },
    {
      "@type": "Question",
      name: "Que se passe-t-il si Quentin ou un dev clé est malade ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Tout passe par notre repo Git, notre Linear et notre documentation interne. Le bus factor est de 2 minimum sur chaque projet : un dev référent + un binôme qui peut prendre le relais immédiatement. Aucune information critique ne reste dans la tête d'une seule personne.",
      },
    },
    {
      "@type": "Question",
      name: "Quel est le niveau d'expérience moyen de l'équipe ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "5 ans et plus pour tous les développeurs (CTO inclus). Personne en stage, personne en alternance, personne en première année. Cela coûte plus cher à Hagnéré Code, mais cela garantit qu'aucun client ne sert de terrain d'apprentissage.",
      },
    },
    {
      "@type": "Question",
      name: "Vous parlez beaucoup de Claude Code — c'est l'IA qui code à votre place ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Non. Claude Code est un assistant de développement (recherche, exploration, plans d'implémentation) que chaque dev pilote. Le code commit est revu par un humain à 100 %. Cela nous permet d'aller environ 3 fois plus vite sur les phases d'exploration et de cadrage, et de poser moins de questions au client (« j'ai déjà demandé à Claude »).",
      },
    },
    {
      "@type": "Question",
      name: "Vous recrutez ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Toujours pour des profils alignés. Le prochain recrutement prévu est un Designer produit / UX senior. Les candidatures spontanées sont étudiées sous 5 jours ouvrés à hello@hagnere-code.fr — uniquement profils 5+ ans d'expérience, basés ou prêts à venir à Chambéry.",
      },
    },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json">{orgJsonLd}</script>
      <script type="application/ld+json">{breadcrumbJsonLd}</script>
      <script type="application/ld+json">{faqJsonLd}</script>
      <EquipePage />
    </>
  );
}
