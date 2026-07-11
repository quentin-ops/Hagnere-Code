import type { Metadata } from "next";
import { ProjectFunnel } from "@/components/project-funnel/ProjectFunnel";
import { OG_BASE, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Démarrer un projet web · Réponse sous 24 h · Hagnéré Code",
  description:
    "Décrivez votre projet (SaaS, site, outil métier) en 3 minutes, au clavier ou à la voix. Réponse personnelle et argumentée sous 24 h ouvrées.",
  alternates: { canonical: "/demarrer-un-projet" },
  openGraph: {
    ...OG_BASE,
    title: "Démarrer un projet web · Hagnéré Code",
    description:
      "Un parcours guidé de 3 minutes pour transmettre votre besoin — texte ou dictée vocale. Réponse personnelle et argumentée sous 24 h ouvrées.",
    url: "/demarrer-un-projet",
    images: [DEFAULT_OG_IMAGE],
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

  const breadcrumbJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hagnere-code.fr/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Démarrer un projet",
        item: "https://hagnere-code.fr/demarrer-un-projet",
      },
    ],
  });

  return (
    <>
      <script type="application/ld+json">{jsonLd}</script>
      <script type="application/ld+json">{breadcrumbJsonLd}</script>
      <ProjectFunnel />
    </>
  );
}
