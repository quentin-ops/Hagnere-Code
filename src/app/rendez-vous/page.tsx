import type { Metadata } from "next";
import { RendezVousPage } from "@/components/rendez-vous/RendezVousPage";
import { OG_BASE, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Rendez-vous 30 min avec un développeur senior · Hagnéré Code",
  description:
    "Réservez 30 minutes gratuites en visio avec quelqu'un qui code. Cadrage de votre projet, fourchette de budget et calendrier réaliste. Sans engagement.",
  alternates: { canonical: "/rendez-vous" },
  openGraph: {
    ...OG_BASE,
    title: "Réserver un rendez-vous découverte · Hagnéré Code",
    description:
      "30 min avec quelqu'un qui code. On écoute, on challenge, on chiffre. Gratuit, sans engagement.",
    url: "/rendez-vous",
    images: [DEFAULT_OG_IMAGE],
  },
};

const rdvJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Rendez-vous découverte — 30 minutes",
  url: "https://hagnere-code.ai/rendez-vous",
  description:
    "Rendez-vous découverte de 30 minutes en visio ou téléphone avec Hagnéré Code pour cadrer un projet web sur mesure.",
  provider: { "@id": "https://hagnere-code.ai/#business" },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://calendly.com/hagnere-patrimoine/hagnere-code-entretien-de-decouverte",
      inLanguage: "fr-FR",
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
    result: {
      "@type": "Reservation",
      name: "Rendez-vous découverte 30 min",
    },
  },
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hagnere-code.ai/" },
    { "@type": "ListItem", position: 2, name: "Rendez-vous", item: "https://hagnere-code.ai/rendez-vous" },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: rdvJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <RendezVousPage />
    </>
  );
}
