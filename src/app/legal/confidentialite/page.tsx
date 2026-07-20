import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { confidentialiteSections } from "@/components/legal/content/confidentialite";
import { OG_BASE, DEFAULT_OG_IMAGE } from "@/lib/seo";

const LAST_UPDATED = "2026-04-26";

export const metadata: Metadata = {
  title: "Politique de confidentialité · Hagnéré Code",
  description:
    "Vos données : collecte minimale, hébergement en UE, aucun traitement IA de votre brief, droits RGPD. Transparence complète de HAGNÉRÉ CODE SAS.",
  alternates: { canonical: "/legal/confidentialite" },
  openGraph: {
    ...OG_BASE,
    type: "article",
    title: "Politique de confidentialité · Hagnéré Code",
    description:
      "Informations RGPD sur le traitement des données personnelles par HAGNÉRÉ CODE SAS.",
    url: "/legal/confidentialite",
    images: [DEFAULT_OG_IMAGE],
  },
};

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hagnere-code.ai/" },
    { "@type": "ListItem", position: 2, name: "Politique de confidentialité", item: "https://hagnere-code.ai/legal/confidentialite" },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <LegalPageLayout
        title={"Politique de\nconfidentialité."}
        intro="Informations sur les données personnelles traitées par HAGNÉRÉ CODE SAS dans le cadre du site, des demandes de contact et des prestations."
        lastUpdated={LAST_UPDATED}
        breadcrumb="Confidentialité"
        sections={confidentialiteSections}
      />
    </>
  );
}
