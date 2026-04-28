import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { accessibiliteSections } from "@/components/legal/content/accessibilite";

const LAST_UPDATED = "2026-04-28";

export const metadata: Metadata = {
  title: "Déclaration d'accessibilité — Hagnéré Code",
  description:
    "Engagement RGAA 4.1 / WCAG 2.1 AA, état de conformité, non-conformités connues, alternatives et voies de recours sur hagnere-code.fr.",
  alternates: { canonical: "/legal/accessibilite" },
  openGraph: {
    title: "Déclaration d'accessibilité — Hagnéré Code",
    description:
      "Engagement d'accessibilité du site hagnere-code.fr : RGAA 4.1, WCAG 2.1 AA, plan d'amélioration et voies de recours.",
    url: "/legal/accessibilite",
    type: "article",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <LegalPageLayout
      title={"Déclaration\nd'accessibilité."}
      intro="Démarche volontaire d'accessibilité numérique RGAA 4.1 / WCAG 2.1 AA. État partiel, non-conformités connues, plan d'amélioration et voies de recours."
      lastUpdated={LAST_UPDATED}
      breadcrumb="Accessibilité"
      sections={accessibiliteSections}
    />
  );
}
