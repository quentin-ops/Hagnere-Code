import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { cookiesSections } from "@/components/legal/content/cookies";
import { OG_BASE, DEFAULT_OG_IMAGE } from "@/lib/seo";

const LAST_UPDATED = "2026-08-27";

export const metadata: Metadata = {
  title: "Politique cookies et stockages · Hagnéré Code",
  description:
    "Stockages navigateur de hagnere-code.ai : inventaire complet, régime de consentement, mesure Google soumise à votre accord et cas du widget Calendly.",
  alternates: { canonical: "/legal/cookies" },
  openGraph: {
    ...OG_BASE,
    type: "article",
    title: "Politique cookies et stockages · Hagnéré Code",
    description:
      "Gestion des cookies, services tiers et choix utilisateur sur hagnere-code.ai.",
    url: "/legal/cookies",
    images: [DEFAULT_OG_IMAGE],
  },
};

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hagnere-code.ai/" },
    { "@type": "ListItem", position: 2, name: "Politique cookies", item: "https://hagnere-code.ai/legal/cookies" },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <LegalPageLayout
        title={"Politique\ncookies."}
        intro="Informations sur les cookies, services tiers et moyens de gérer vos choix lors de la navigation sur hagnere-code.ai."
        lastUpdated={LAST_UPDATED}
        breadcrumb="Cookies"
        sections={cookiesSections}
      />
    </>
  );
}
