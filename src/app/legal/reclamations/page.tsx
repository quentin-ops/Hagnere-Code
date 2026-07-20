import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { reclamationsSections } from "@/components/legal/content/reclamations";
import { DEFAULT_OG_IMAGE, OG_BASE } from "@/lib/seo";

const LAST_UPDATED = "2026-07-20";

export const metadata: Metadata = {
  title: "Réclamations et médiation · Hagnéré Code",
  description:
    "Coordonnées et procédure de réclamation Hagnéré Code, résolution amiable B2B, Médiateur des entreprises et recours relatifs aux données.",
  alternates: { canonical: "/legal/reclamations" },
  openGraph: {
    ...OG_BASE,
    type: "article",
    title: "Réclamations et médiation · Hagnéré Code",
    description:
      "Comment adresser une réclamation et rechercher une résolution amiable avec HAGNERE CODE.",
    url: "/legal/reclamations",
    images: [DEFAULT_OG_IMAGE],
  },
};

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: "https://hagnere-code.ai/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Réclamations et médiation",
      item: "https://hagnere-code.ai/legal/reclamations",
    },
  ],
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd.replace(/</g, "\\u003c"),
        }}
      />
      <LegalPageLayout
        title={"Réclamations\net médiation."}
        intro="Les contacts et étapes utiles pour documenter un différend, rechercher une solution amiable entre professionnels ou exercer un droit relatif aux données."
        lastUpdated={LAST_UPDATED}
        breadcrumb="Réclamations"
        sections={reclamationsSections}
      />
    </>
  );
}
