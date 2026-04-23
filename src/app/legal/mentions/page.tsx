import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { mentionsLegalesSections } from "@/components/legal/content/mentions-legales";

const LAST_UPDATED = "2026-04-22";

export const metadata: Metadata = {
  title: "Mentions légales — Hagnéré Code",
  description:
    "Informations légales obligatoires : éditeur, hébergeur, directeur de la publication, propriété intellectuelle, RGPD et juridiction compétente pour HAGNÉRÉ CODE SAS.",
  alternates: { canonical: "/legal/mentions" },
  openGraph: {
    title: "Mentions légales — Hagnéré Code",
    description:
      "Informations légales officielles de HAGNÉRÉ CODE SAS — siège social à Chambéry.",
    url: "/legal/mentions",
    type: "article",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <LegalPageLayout
      title={"Mentions\nlégales."}
      intro="Informations légales obligatoires relatives à l'édition du site hagnere-code.fr et à la société HAGNÉRÉ CODE SAS."
      lastUpdated={LAST_UPDATED}
      breadcrumb="Mentions légales"
      sections={mentionsLegalesSections}
    />
  );
}
