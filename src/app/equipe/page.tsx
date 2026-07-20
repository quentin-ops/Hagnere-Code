import type { Metadata } from "next";
import { EquipePage } from "@/components/equipe/EquipePage";
import { OG_BASE } from "@/lib/seo";
import { TEAM_PUBLIC_COMPOSITION } from "@/lib/team";
import { PUBLIC_ORGANIZATION_JSON_LD } from "@/lib/organization-structured-data";

const EQUIPE_OG_IMAGE = {
  url: "/illustrations/equipe-atmosphere.png",
  width: 1792,
  height: 1024,
  alt: `L'équipe Hagnéré Code — ${TEAM_PUBLIC_COMPOSITION}, zéro pool anonyme, stack maîtrisée`,
};

export const metadata: Metadata = {
  title: "L'équipe · Développeurs full-stack en Savoie · Hagnéré Code",
  description:
    "Un président fondateur qui code, un CTO et des développeurs full-stack seniors rattachés à notre studio de Bassens, en Savoie. Les noms de votre équipe figurent dans le devis.",
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
  ...PUBLIC_ORGANIZATION_JSON_LD,
  // Les personnes sont listées via "member" : on ne publie pas leur statut
  // contractuel, seulement leur rôle réel dans l'organisation.
  member: [
    {
      "@type": "Person",
      name: "Quentin Hagnéré",
      jobTitle: "Président fondateur — Brief client / Design / Front-end / Back-office",
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


export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: orgJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <EquipePage />
    </>
  );
}
