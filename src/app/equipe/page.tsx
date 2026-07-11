import type { Metadata } from "next";
import { EquipePage } from "@/components/equipe/EquipePage";
import { OG_BASE } from "@/lib/seo";

const EQUIPE_OG_IMAGE = {
  url: "/illustrations/equipe-atmosphere.png",
  width: 1792,
  height: 1024,
  alt: "L'équipe Hagnéré Code — 3 CDI + 3 freelances long-terme, zéro pool anonyme, stack maîtrisée",
};

export const metadata: Metadata = {
  title: "L'équipe · Développeurs full-stack à Chambéry · Hagnéré Code",
  description:
    "1 gérant qui code, 1 CTO et 5 développeurs full-stack seniors — 3 CDI à Chambéry, zéro offshore. Les noms de votre équipe figurent dans le devis.",
  alternates: { canonical: "/equipe" },
  openGraph: {
    ...OG_BASE,
    title: "L'équipe Hagnéré Code · 7 personnes seniors · 3 CDI à Chambéry",
    description:
      "1 gérant associé codeur + 3 CDI (CTO + 2 devs) + 3 freelances long-terme intégrés. Tous seniors ou confirmés, écosystème React/Next.js (et Laravel pour les reprises). Augmentés par Claude Code.",
    url: "/equipe",
    images: [EQUIPE_OG_IMAGE],
  },
  twitter: { images: [EQUIPE_OG_IMAGE] },
};

const orgJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://hagnere-code.fr/#organization",
  name: "Hagnéré Code",
  legalName: "HAGNÉRÉ CODE SAS",
  url: "https://hagnere-code.fr",
  logo: "https://hagnere-code.fr/logos/logo-dark.png",
  email: "quentin@hagnere-patrimoine.fr",
  telephone: "+33374472018",
  vatID: "FR30993672856",
  foundingDate: "2025-09-30",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7 rue Ernest Filliard",
    postalCode: "73000",
    addressLocality: "Chambéry",
    addressRegion: "Savoie",
    addressCountry: "FR",
  },
  // 4 personnes au sens schema.org "employee" (CDI, fondateur inclus).
  // L'équipe complète (7 pers.) est listée via employee + contractor.
  numberOfEmployees: { "@type": "QuantitativeValue", value: 4 },
  founder: {
    "@type": "Person",
    name: "Quentin Hagnéré",
    jobTitle: "Gérant associé codeur",
    sameAs: ["https://www.linkedin.com/in/quentin-hagnere"],
  },
  employee: [
    {
      "@type": "Person",
      name: "Quentin Hagnéré",
      jobTitle: "Gérant associé codeur — Brief client / Design / Front-end / Back-office",
      sameAs: ["https://www.linkedin.com/in/quentin-hagnere"],
    },
    {
      "@type": "Person",
      name: "Nicolas Wallerand",
      jobTitle: "CTO — Direction technique (CDI)",
      sameAs: ["https://www.linkedin.com/in/nicolas-wallerand-86b0a079/"],
    },
    {
      "@type": "Person",
      name: "Frédéric Curinckx",
      jobTitle: "Développeur full-stack senior (CDI)",
      sameAs: ["https://www.linkedin.com/in/frederic-curinckx/"],
    },
    {
      "@type": "Person",
      name: "Killian Hoarau",
      jobTitle: "Développeur back-end senior + DevOps (CDI)",
      sameAs: ["https://www.linkedin.com/in/killian-hoarau-960927138/"],
    },
  ],
  contractor: [
    {
      "@type": "Person",
      name: "Arthur Monney",
      jobTitle: "Développeur back-end senior — Paiements (Freelance long-terme)",
      sameAs: ["https://www.linkedin.com/in/arthurmonney/"],
    },
    {
      "@type": "Person",
      name: "Ryan Mazzitelli",
      jobTitle: "Développeur back-end senior — IA / Agents (Freelance long-terme)",
      sameAs: ["https://www.linkedin.com/in/ryan-mazzitelli-907716262/"],
    },
    {
      "@type": "Person",
      name: "Peter Sum Sie Kung",
      jobTitle: "Développeur full-stack confirmé (Freelance long-terme)",
      sameAs: ["https://www.codeur.com/-peterssk"],
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
          "Quentin (gérant associé codeur) reste votre interlocuteur principal du brief à la livraison, pour tout ce qui touche au produit, au cadrage et au design. Nicolas (CTO) intervient sur les questions d'architecture et de jalons techniques. Le dev référent du projet — qu'il soit en CDI ou freelance long-terme — est nommé au cadrage et reste le même jusqu'à la livraison. Pas de tournante.",
      },
    },
    {
      "@type": "Question",
      name: "Travaillez-vous avec des freelances ou de la sous-traitance ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Oui, mais pas n'importe lesquels. L'équipe est composée de 3 CDI à Chambéry (CTO + 2 devs seniors) et de 3 freelances long-terme nommés (Arthur, Ryan, Peter) intégrés à nos rituels — daily, démo hebdo, revue de code. Pas de pool anonyme qui change à chaque projet, pas de sous-traitance offshore, pas de white-label déguisé. Ce sont les mêmes personnes d'un projet à l'autre, et leurs noms sont dans le devis.",
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
          "5 ans et plus pour tous les seniors (CTO inclus, CDI comme freelances long-terme). Notre freelance long-terme Peter est dev confirmé (3+ ans XP) et opère systématiquement sous code review du CTO et d'un senior. Personne en stage, personne en alternance, personne en première année. Cela coûte plus cher, mais cela garantit qu'aucun client ne sert de terrain d'apprentissage.",
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
          "Toujours pour des profils alignés. Le prochain recrutement prévu est un Designer produit / UX senior. Les candidatures spontanées sont étudiées sous 5 jours ouvrés à quentin@hagnere-patrimoine.fr — uniquement profils 5+ ans d'expérience, basés ou prêts à venir à Chambéry.",
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
