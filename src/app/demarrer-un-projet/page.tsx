import type { Metadata } from "next";
import { ProjectFunnel } from "@/components/project-funnel/ProjectFunnel";
import { OG_BASE, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Démarrer un projet web · Hagnéré Code",
  description:
    "Décrivez votre projet (SaaS, site, outil métier) en 3 minutes, au clavier ou à la voix. Objectif : une réponse personnelle le prochain jour ouvré.",
  alternates: { canonical: "/demarrer-un-projet" },
  openGraph: {
    ...OG_BASE,
    title: "Démarrer un projet web · Hagnéré Code",
    description:
      "Un parcours guidé de 3 minutes pour transmettre votre besoin — texte ou dictée vocale. Nous visons une réponse personnelle le prochain jour ouvré, sans délai garanti.",
    url: "/demarrer-un-projet",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Page() {
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Démarrer un projet — Hagnéré Code",
    url: "https://hagnere-code.ai/demarrer-un-projet",
    description:
      "Parcours guidé pour décrire un projet web, SaaS, application métier, e-commerce ou reprise technique. Demande relue par l'équipe, avec un objectif de réponse le prochain jour ouvré.",
    provider: {
      "@type": "Organization",
      name: "Hagnéré Code",
      url: "https://hagnere-code.ai",
    },
  });

  const breadcrumbJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hagnere-code.ai/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Démarrer un projet",
        item: "https://hagnere-code.ai/demarrer-un-projet",
      },
    ],
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <ProjectFunnel />
    </>
  );
}
