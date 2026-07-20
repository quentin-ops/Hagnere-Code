import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { mentionsLegalesSections } from "@/components/legal/content/mentions-legales";
import { OG_BASE, DEFAULT_OG_IMAGE } from "@/lib/seo";

const LAST_UPDATED = "2026-04-23";

export const metadata: Metadata = {
  title: "Mentions légales · Hagnéré Code",
  description:
    "Éditeur, hébergement, propriété intellectuelle et RGPD : les informations légales de HAGNÉRÉ CODE SAS, studio basé à Bassens.",
  alternates: { canonical: "/legal/mentions" },
  openGraph: {
    ...OG_BASE,
    type: "article",
    title: "Mentions légales · Hagnéré Code",
    description:
      "Informations légales officielles de HAGNÉRÉ CODE SAS — siège social au 82 impasse de Bellevue à Bassens.",
    url: "/legal/mentions",
    images: [DEFAULT_OG_IMAGE],
  },
};

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hagnere-code.ai/" },
    { "@type": "ListItem", position: 2, name: "Mentions légales", item: "https://hagnere-code.ai/legal/mentions" },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <LegalPageLayout
        title={"Mentions\nlégales."}
        intro="Informations légales obligatoires relatives à l'édition du site hagnere-code.ai et à la société HAGNÉRÉ CODE SAS."
        lastUpdated={LAST_UPDATED}
        breadcrumb="Mentions légales"
        sections={mentionsLegalesSections}
      />
    </>
  );
}
