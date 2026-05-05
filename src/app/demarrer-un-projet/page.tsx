import type { Metadata } from "next";
import { ProjectFunnel } from "@/components/project-funnel/ProjectFunnel";

export const metadata: Metadata = {
  title: "Démarrer un projet · Cadrage & pré-devis · Hagnéré Code",
  description:
    "Cadrez votre projet web, SaaS, application métier ou reprise technique en quelques étapes. Décrivez le besoin, estimez le périmètre et envoyez un brief clair à Hagnéré Code.",
  alternates: { canonical: "/demarrer-un-projet" },
  openGraph: {
    title: "Démarrer un projet web · Hagnéré Code",
    description:
      "Un parcours de cadrage pour transformer une idée floue en brief exploitable, avec dictée vocale et pré-estimation.",
    url: "/demarrer-un-projet",
    type: "website",
  },
};

export default function Page() {
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Cadrage projet Hagnéré Code",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://hagnere-code.fr/demarrer-un-projet",
    description:
      "Parcours de cadrage pour préparer un projet web, SaaS, application métier, e-commerce ou reprise technique avant devis.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
  });

  return (
    <>
      <script type="application/ld+json">{jsonLd}</script>
      <ProjectFunnel />
    </>
  );
}
