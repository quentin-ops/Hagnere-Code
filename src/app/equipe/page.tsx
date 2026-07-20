import type { Metadata } from "next";
import { EquipePage } from "@/components/equipe/EquipePage";
import { OG_BASE } from "@/lib/seo";
import { TEAM_PUBLIC_COMPOSITION } from "@/lib/team";

const EQUIPE_OG_IMAGE = {
  url: "/illustrations/equipe-atmosphere.png",
  width: 1792,
  height: 1024,
  alt: `L'équipe Hagnéré Code — ${TEAM_PUBLIC_COMPOSITION}, zéro pool anonyme, stack maîtrisée`,
};

export const metadata: Metadata = {
  title: "L'équipe · Développeurs full-stack en Savoie · Hagnéré Code",
  description:
    "Un gérant qui code, un CTO et des développeurs full-stack seniors rattachés à notre studio de Bassens, en Savoie. Les noms de votre équipe figurent dans le devis.",
  alternates: { canonical: "/equipe" },
  openGraph: {
    ...OG_BASE,
    title: "L'équipe Hagnéré Code · Développeurs seniors en Savoie",
    description: `${TEAM_PUBLIC_COMPOSITION}. Toute l'équipe partage les mêmes rituels. Profils seniors ou confirmés, écosystème React/Next.js (et Laravel pour les reprises), augmentés par Claude Code.`,
    url: "/equipe",
    images: [EQUIPE_OG_IMAGE],
  },
  twitter: { images: [EQUIPE_OG_IMAGE] },
};

const orgJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://hagnere-code.ai/#organization",
  name: "Hagnéré Code",
  legalName: "HAGNÉRÉ CODE SAS",
  url: "https://hagnere-code.ai",
  logo: "https://hagnere-code.ai/logos/logo-dark.png",
  email: "quentin@hagnere-patrimoine.fr",
  telephone: "+33374472018",
  vatID: "FR30993672856",
  foundingDate: "2025-09-30",
  address: {
    "@type": "PostalAddress",
    streetAddress: "82 impasse de Bellevue",
    postalCode: "73000",
    addressLocality: "Bassens",
    addressRegion: "Savoie",
    addressCountry: "FR",
  },
  // Les personnes sont listées via "member" : on ne publie pas leur statut
  // contractuel, seulement leur rôle réel dans l'organisation.
  founder: {
    "@type": "Person",
    name: "Quentin Hagnéré",
    jobTitle: "Gérant associé codeur",
    sameAs: ["https://www.linkedin.com/in/quentin-hagnere"],
  },
  member: [
    {
      "@type": "Person",
      name: "Quentin Hagnéré",
      jobTitle: "Gérant associé codeur — Brief client / Design / Front-end / Back-office",
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
      name: "Frédéric Curinckx",
      jobTitle: "Développeur full-stack senior",
      sameAs: ["https://www.linkedin.com/in/frederic-curinckx/"],
    },
    {
      "@type": "Person",
      name: "Killian Hoarau",
      jobTitle: "Développeur back-end senior + DevOps",
      sameAs: ["https://www.linkedin.com/in/killian-hoarau-960927138/"],
    },
    {
      "@type": "Person",
      name: "Arthur Monney",
      jobTitle: "Développeur back-end senior — Paiements",
      sameAs: ["https://www.linkedin.com/in/arthurmonney/"],
    },
    {
      "@type": "Person",
      name: "Ryan Mazzitelli",
      jobTitle: "Développeur back-end senior — IA / Agents",
      sameAs: ["https://www.linkedin.com/in/ryan-mazzitelli-907716262/"],
    },
    {
      "@type": "Person",
      name: "Peter Sum Sie Kung",
      jobTitle: "Développeur full-stack confirmé",
      sameAs: ["https://www.codeur.com/-peterssk"],
    },
  ],
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hagnere-code.ai/" },
    { "@type": "ListItem", position: 2, name: "L'équipe", item: "https://hagnere-code.ai/equipe" },
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
          "Quentin (gérant associé codeur) reste votre interlocuteur principal du brief à la livraison, pour tout ce qui touche au produit, au cadrage et au design. Nicolas (CTO) intervient sur les questions d'architecture et de jalons techniques. Le dev référent du projet est nommé au cadrage et reste le même jusqu'à la livraison. Pas de tournante.",
      },
    },
    {
      "@type": "Question",
      name: "Travaillez-vous avec un pool externe ou de la sous-traitance ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Pas de pool anonyme, jamais. ${TEAM_PUBLIC_COMPOSITION} — Quentin au pilotage, Nicolas au CTO, Frédéric, Killian, Arthur et Ryan en seniors, Peter en dev confirmé — tous intégrés aux mêmes rituels : daily, démo, revue de code. Pas de pool anonyme qui change à chaque projet, pas de sous-traitance offshore, pas de white-label déguisé. Ce sont les mêmes personnes d'un projet à l'autre, et leurs noms sont dans le devis.`,
      },
    },
    {
      "@type": "Question",
      name: "Tout le monde travaille à distance ou en local ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Mixte. Le studio physique est à Bassens, aux portes de Chambéry (82 impasse de Bellevue), où l'équipe se retrouve 2 à 3 jours par semaine. Les autres jours, télétravail. Les rituels (daily, planning, démo) sont systématiquement en visio pour garantir la même expérience à tout le monde.",
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
          "5 ans et plus pour tous les seniors, CTO inclus. Peter est dev confirmé (3+ ans XP) et opère systématiquement sous code review du CTO et d'un senior. Personne en stage, personne en alternance, personne en première année. Cela coûte plus cher, mais cela garantit que personne n'apprend le métier en solo sur un projet.",
      },
    },
    {
      "@type": "Question",
      name: "Vous parlez beaucoup de Claude Code — c'est l'IA qui code à votre place ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Non. Claude Code est un assistant de développement pour la recherche, l'exploration et la préparation. Une personne nommée reste responsable des choix, des tests et de la validation avant intégration. Nous ne publions pas de multiplicateur de productivité non mesuré.",
      },
    },
    {
      "@type": "Question",
      name: "Vous recrutez ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Toujours pour des profils alignés. Le prochain recrutement prévu est un Designer produit / UX senior. Les candidatures spontanées sont étudiées sous 5 jours ouvrés à quentin@hagnere-patrimoine.fr — uniquement profils 5+ ans d'expérience, basés ou prêts à venir à Bassens.",
      },
    },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: orgJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd.replace(/</g, "\\u003c") }} />
      <EquipePage />
    </>
  );
}
