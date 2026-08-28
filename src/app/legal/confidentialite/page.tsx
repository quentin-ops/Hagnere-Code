import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { confidentialiteSections } from "@/components/legal/content/confidentialite";
import { OG_BASE, DEFAULT_OG_IMAGE } from "@/lib/seo";
import { PRIVACY_NOTICE_VERSION } from "@/lib/privacy-notice";

// Toute modification de fond de cette page doit porter cette date ET ajouter
// une ligne au tableau « Versions de cette politique » (section `versions` de
// content/confidentialite.tsx). L'invariant est verrouillé par
// components/legal/legal-compliance.test.ts.
// Doit rester égal à PRIVACY_NOTICE_VERSION : chaque lead est horodaté avec
// la version de la politique réellement affichée (cf. src/lib/privacy-notice.ts).
const LAST_UPDATED = PRIVACY_NOTICE_VERSION;

export const metadata: Metadata = {
  title: "Politique de confidentialité · Hagnéré Code",
  description:
    "Données, finalités, bases légales, prestataires, transferts, durées et droits RGPD applicables au site et aux demandes Hagnéré Code.",
  alternates: { canonical: "/legal/confidentialite" },
  openGraph: {
    ...OG_BASE,
    type: "article",
    title: "Politique de confidentialité · Hagnéré Code",
    description:
      "Informations RGPD sur le traitement des données personnelles par HAGNERE CODE.",
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
        intro="Informations sur les données personnelles traitées par HAGNERE CODE dans le cadre du site, des demandes de contact et des prestations."
        lastUpdated={LAST_UPDATED}
        breadcrumb="Confidentialité"
        sections={confidentialiteSections}
      />
    </>
  );
}
