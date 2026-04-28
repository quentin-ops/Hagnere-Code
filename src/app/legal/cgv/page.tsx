import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { cgvSections } from "@/components/legal/content/cgv";

const LAST_UPDATED = "2026-04-26";

export const metadata: Metadata = {
  title: "Conditions générales de vente — Hagnéré Code",
  description:
    "Conditions générales applicables aux prestations de conseil, développement, audit, maintenance et évolution réalisées par HAGNÉRÉ CODE SAS.",
  alternates: { canonical: "/legal/cgv" },
  openGraph: {
    title: "Conditions générales de vente — Hagnéré Code",
    description:
      "Cadre contractuel général des prestations réalisées par HAGNÉRÉ CODE SAS.",
    url: "/legal/cgv",
    type: "article",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <LegalPageLayout
      title={"Conditions\ngénérales."}
      intro="Cadre général applicable aux prestations réalisées par HAGNÉRÉ CODE SAS, sauf conditions particulières prévues au devis ou au contrat."
      lastUpdated={LAST_UPDATED}
      breadcrumb="CGV"
      sections={cgvSections}
    />
  );
}
