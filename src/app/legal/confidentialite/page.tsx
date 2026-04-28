import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { confidentialiteSections } from "@/components/legal/content/confidentialite";

const LAST_UPDATED = "2026-04-26";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Hagnéré Code",
  description:
    "Politique de confidentialité de HAGNÉRÉ CODE SAS : données collectées, finalités, bases légales, conservation et droits RGPD.",
  alternates: { canonical: "/legal/confidentialite" },
  openGraph: {
    title: "Politique de confidentialité — Hagnéré Code",
    description:
      "Informations RGPD sur le traitement des données personnelles par HAGNÉRÉ CODE SAS.",
    url: "/legal/confidentialite",
    type: "article",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <LegalPageLayout
      title={"Politique de\nconfidentialité."}
      intro="Informations sur les données personnelles traitées par HAGNÉRÉ CODE SAS dans le cadre du site, des demandes de contact et des prestations."
      lastUpdated={LAST_UPDATED}
      breadcrumb="Confidentialité"
      sections={confidentialiteSections}
    />
  );
}
