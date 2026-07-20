import type { Metadata } from "next";
import { EquipePage } from "@/components/equipe/EquipePage";
import { OG_BASE } from "@/lib/seo";
import { TEAM_PUBLIC_COMPOSITION, TEAM_TOTAL_COUNT } from "@/lib/team";
import { PUBLIC_ORGANIZATION_JSON_LD } from "@/lib/organization-structured-data";

const EQUIPE_OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Hagnéré Code — studio de développement à Bassens",
};

export const metadata: Metadata = {
  title: "L'équipe Hagnéré Code · Développement web à Bassens",
  description: `Découvrez les ${TEAM_TOTAL_COUNT} profils Hagnéré Code : fondateur, CTO et développeurs, avec leur rôle, statut et spécialité. Studio à Bassens, en Savoie.`,
  alternates: { canonical: "/equipe" },
  openGraph: {
    ...OG_BASE,
    title: `L'équipe Hagnéré Code · ${TEAM_TOTAL_COUNT} profils présentés`,
    description: `${TEAM_PUBLIC_COMPOSITION}. Rôles, statuts et spécialités sont présentés ; les intervenants affectés à une mission sont précisés dans le devis.`,
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
