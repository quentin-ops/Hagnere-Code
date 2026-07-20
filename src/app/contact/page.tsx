import type { Metadata } from "next";
import { ContactPage } from "@/components/contact/ContactPage";
import { OG_BASE, DEFAULT_OG_IMAGE } from "@/lib/seo";
import { PUBLIC_ORGANIZATION_ENTITY } from "@/lib/organization-structured-data";

export const metadata: Metadata = {
  title: "Contact agence web à Chambéry · Hagnéré Code",
  description:
    "Parlez à quelqu'un qui code — pas à un commercial. Objectif de réponse le prochain jour ouvré, sans délai garanti. Bureau à Bassens, aux portes de Chambéry.",
  alternates: { canonical: "/contact" },
  openGraph: {
    ...OG_BASE,
    title: "Contact projet web sur mesure · Hagnéré Code Chambéry",
    description:
      "SaaS, applications métier, outils internes, reprise Laravel. Votre demande est lue par quelqu'un qui code.",
    url: "/contact",
    images: [DEFAULT_OG_IMAGE],
  },
};

const contactJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact · Hagnéré Code",
  url: "https://hagnere-code.ai/contact",
  description:
    "Prendre contact avec Hagnéré Code pour un projet web sur mesure : SaaS B2B, application métier, outil interne, reprise Laravel ou site vitrine.",
  // Source unique : la page Contact ne redéclare plus une seconde version de
  // l'entreprise avec d'autres zones, horaires ou identifiants.
  mainEntity: PUBLIC_ORGANIZATION_ENTITY,
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hagnere-code.ai/" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://hagnere-code.ai/contact" },
  ],
});


export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: contactJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <ContactPage />
    </>
  );
}
