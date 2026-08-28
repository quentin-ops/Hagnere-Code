import type { Metadata } from "next";
import { ServicesHubPage } from "@/components/services/ServicesHubPage";
import { OG_BASE, SERVICES_OG_IMAGE, SITE_URL } from "@/lib/seo";
import { PUBLIC_ORGANIZATION_ENTITY } from "@/lib/organization-structured-data";
import { SERVICE_LINKS } from "@/lib/services";

// Le nombre affiché est dérivé du registre plutôt que figé : il était écrit en
// dur dans le title, la meta description, le pied de page et un CTA de
// l'accueil, et une entrée ajoutée à SERVICE_LINKS aurait laissé les quatre
// littéraux mentir sans qu'aucun test ne rougisse.
const SERVICE_COUNT = SERVICE_LINKS.length;

export const metadata: Metadata = {
  title: `${SERVICE_COUNT} services web, SaaS & outils métier · Hagnéré Code`,
  description: `Du SaaS au SEO : ${SERVICE_COUNT} services pour construire, lancer et faire évoluer votre produit. Périmètre, délais, livrables, accès et droits sont écrits au devis.`,
  alternates: { canonical: "/services" },
  openGraph: {
    ...OG_BASE,
    title: "Services web, SaaS et outils métier · Hagnéré Code",
    description:
      "Choisissez le bon levier : produit, acquisition, run ou confiance. Services web, SaaS, outils métier et accompagnement au forfait fixe.",
    url: "/services",
    images: [SERVICES_OG_IMAGE],
  },
  twitter: { images: [SERVICES_OG_IMAGE.url] },
};

export default function Page() {
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Services Hagnéré Code",
    description:
      "Services de développement web, SaaS, applications métier, acquisition, maintenance et sécurité pour PME, ETI et scale-up.",
    url: "https://hagnere-code.ai/services",
    // L'entité est déclarée sur la page : sans elle, le `provider` de chaque
    // Service est un @id pendant que Google ne résout pas hors du graphe de la
    // page courante. Elle est écrite une fois, les items la référencent.
    publisher: PUBLIC_ORGANIZATION_ENTITY,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: SERVICE_COUNT,
      // Liste dérivée de SERVICE_LINKS, comme le sitemap, llms.txt et le
      // catalogue d'offres de l'entité. La liste codée en dur donnait sept noms
      // divergents pour les mêmes URL et pouvait omettre un service ajouté au
      // registre sans qu'aucun test ne le détecte.
      itemListElement: SERVICE_LINKS.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          url: `${SITE_URL}${service.path}`,
          provider: { "@id": PUBLIC_ORGANIZATION_ENTITY["@id"] },
        },
      })),
    },
  });

  const breadcrumbJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hagnere-code.ai/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://hagnere-code.ai/services" },
    ],
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <ServicesHubPage />
    </>
  );
}
