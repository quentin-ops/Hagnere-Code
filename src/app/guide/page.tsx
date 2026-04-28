import type { Metadata } from "next";
import { GuideIndex } from "@/components/guide/GuideIndex";

export const metadata: Metadata = {
  title: "Guide projet web, SaaS et outils métier — Hagnéré Code",
  description:
    "Guide Hagnéré Code : ressources utiles pour mieux comprendre un projet web, cadrer vos besoins et choisir les bons leviers avant de lancer.",
  alternates: { canonical: "/guide" },
  openGraph: {
    title: "Guide projet web, SaaS et outils métier — Hagnéré Code",
    description:
      "Des guides utiles pour comprendre, comparer et préparer un projet web, SaaS, outil interne ou reprise technique.",
    url: "/guide",
    type: "website",
  },
};

export default function Page() {
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Guide Hagnéré Code",
      description:
        "Base de guides Hagnéré Code pour aider les dirigeants à comprendre, cadrer, chiffrer et sécuriser un projet web, SaaS ou outil métier.",
    url: "https://hagnere-code.fr/guide",
    publisher: {
      "@type": "Organization",
      name: "Hagnéré Code",
      url: "https://hagnere-code.fr",
    },
  });

  return (
    <>
      <script type="application/ld+json">{jsonLd}</script>
      <GuideIndex />
    </>
  );
}
