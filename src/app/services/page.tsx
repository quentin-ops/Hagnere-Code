import type { Metadata } from "next";
import { ServicesHubPage } from "@/components/services/ServicesHubPage";

export const metadata: Metadata = {
  title: "Services web, SaaS et outils métier · Hagnéré Code",
  description:
    "Tous les services Hagnéré Code : SaaS, applications métier, outils internes, sites vitrines, e-commerce, SEO, publicité, contenu, maintenance, sécurité et RGPD.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services web, SaaS et outils métier · Hagnéré Code",
    description:
      "Choisissez le bon levier : produit, acquisition, run ou confiance. Services web, SaaS, outils métier et accompagnement au forfait fixe.",
    url: "/services",
    images: [
      {
        url: "/og-image-services.png",
        width: 1200,
        height: 630,
        alt: "Services Hagnéré Code — SaaS, applis métier, outils internes, sites vitrines, e-commerce",
      },
    ],
    type: "website",
  },
};

export default function Page() {
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Services Hagnéré Code",
    description:
      "Services de développement web, SaaS, applications métier, acquisition, maintenance et sécurité pour PME, ETI et scale-up.",
    url: "https://hagnere-code.fr/services",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        ["SaaS & applications métier", "/services/saas-applications-metier"],
        ["Outils internes sur mesure", "/services/outils-internes-sur-mesure"],
        ["Sites vitrines & landing pages", "/services/sites-vitrines"],
        ["E-commerce", "/services/ecommerce"],
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
          url: `https://hagnere-code.fr${url}`,
          provider: {
            "@type": "Organization",
            "@id": "https://hagnere-code.fr/#organization",
            name: "Hagnéré Code",
            url: "https://hagnere-code.fr",
          },
        },
      })),
    },
  });

  return (
    <>
      <script type="application/ld+json">{jsonLd}</script>
      <ServicesHubPage />
    </>
  );
}
