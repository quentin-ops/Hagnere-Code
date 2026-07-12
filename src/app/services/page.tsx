import type { Metadata } from "next";
import { ServicesHubPage } from "@/components/services/ServicesHubPage";
import { OG_BASE, SERVICES_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "11 services web, SaaS & outils métier · Hagnéré Code",
  description:
    "Du SaaS au SEO : 11 services au forfait fixe pour construire, lancer et faire tourner votre produit. Délais contractuels, code 100 % à vous.",
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
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        ["SaaS & applications métier", "/services/saas-applications-metier"],
        ["Outils internes sur mesure", "/services/outils-internes-sur-mesure"],
        ["Sites vitrines & landing pages", "/services/sites-vitrines"],
        ["E-commerce", "/services/ecommerce"],
        ["Application mobile iOS & Android", "/services/application-mobile"],
        ["SEO & référencement Google", "/services/referencement-google"],
        ["Publicité en ligne", "/services/publicite-en-ligne"],
        ["Contenu & vidéo", "/services/contenu-video"],
        ["Maintenance & évolution", "/services/maintenance-evolution"],
        ["Sécurité & RGPD", "/services/securite-rgpd"],
        ["Audit technique", "/services/audit-technique"],
      ].map(([name, url], index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name,
          url: `https://hagnere-code.ai${url}`,
          provider: {
            "@type": "Organization",
            "@id": "https://hagnere-code.ai/#organization",
            name: "Hagnéré Code",
            url: "https://hagnere-code.ai",
          },
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
      <script type="application/ld+json">{jsonLd}</script>
      <script type="application/ld+json">{breadcrumbJsonLd}</script>
      <ServicesHubPage />
    </>
  );
}
