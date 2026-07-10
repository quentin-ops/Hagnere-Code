import type { Metadata } from "next";
import { ProjectFunnel } from "@/components/project-funnel/ProjectFunnel";

export const metadata: Metadata = {
  title: "Démarrer un projet · Décrivez votre besoin en 3 minutes · Hagnéré Code",
  description:
    "Décrivez votre projet web, SaaS, application métier ou reprise technique en quelques étapes guidées. Réponse personnelle et argumentée sous 24 h ouvrées.",
  alternates: { canonical: "/demarrer-un-projet" },
  openGraph: {
    title: "Démarrer un projet web · Hagnéré Code",
    description:
      "Un parcours guidé de 3 minutes pour transmettre votre besoin — texte ou dictée vocale. Réponse personnelle et argumentée sous 24 h ouvrées.",
    url: "/demarrer-un-projet",
    type: "website",
  },
};

export default function Page() {
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Démarrer un projet — Hagnéré Code",
    url: "https://hagnere-code.fr/demarrer-un-projet",
    description:
      "Parcours guidé pour décrire un projet web, SaaS, application métier, e-commerce ou reprise technique. Réponse personnelle sous 24 h ouvrées.",
    provider: {
      "@type": "Organization",
      name: "Hagnéré Code",
      url: "https://hagnere-code.fr",
    },
  });

  return (
    <>
      <script type="application/ld+json">{jsonLd}</script>
      <ProjectFunnel />
    </>
  );
}
