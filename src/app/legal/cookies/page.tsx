import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { cookiesSections } from "@/components/legal/content/cookies";

const LAST_UPDATED = "2026-04-26";

export const metadata: Metadata = {
  title: "Politique cookies — Hagnéré Code",
  description:
    "Informations sur l'utilisation des cookies et services tiers sur le site hagnere-code.fr.",
  alternates: { canonical: "/legal/cookies" },
  openGraph: {
    title: "Politique cookies — Hagnéré Code",
    description:
      "Gestion des cookies, services tiers et choix utilisateur sur hagnere-code.fr.",
    url: "/legal/cookies",
    type: "article",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <LegalPageLayout
      title={"Politique\ncookies."}
      intro="Informations sur les cookies, services tiers et moyens de gérer vos choix lors de la navigation sur hagnere-code.fr."
      lastUpdated={LAST_UPDATED}
      breadcrumb="Cookies"
      sections={cookiesSections}
    />
  );
}
