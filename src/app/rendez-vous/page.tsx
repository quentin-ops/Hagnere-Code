import type { Metadata } from "next";
import { RendezVousPage } from "@/components/rendez-vous/RendezVousPage";

export const metadata: Metadata = {
  title: "Rendez-vous découverte projet web · Hagnéré Code",
  description:
    "Réservez 30 min en visio ou téléphone avec un associé qui code (pas un commercial). On cadre votre projet web sur mesure : SaaS, application métier, outil interne, reprise Laravel ou site vitrine. Gratuit, sans engagement.",
  alternates: { canonical: "/rendez-vous" },
  openGraph: {
    title: "Réserver un rendez-vous découverte — Hagnéré Code",
    description:
      "30 min avec un associé qui code. On écoute, on challenge, on chiffre. Gratuit, sans engagement.",
    url: "/rendez-vous",
    type: "website",
  },
};

const rdvJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ReservationPackage",
  name: "Rendez-vous découverte — Hagnéré Code",
  url: "https://hagnere-code.fr/rendez-vous",
  description:
    "Rendez-vous découverte de 30 minutes en visio ou téléphone avec Hagnéré Code pour cadrer un projet web sur mesure.",
  provider: {
    "@type": "ProfessionalService",
    name: "Hagnéré Code",
    legalName: "HAGNÉRÉ CODE SAS",
    url: "https://hagnere-code.fr",
    telephone: "+33374472018",
    email: "quentin@hagnere-patrimoine.fr",
    address: {
      "@type": "PostalAddress",
      streetAddress: "7 rue Ernest Filliard",
      addressLocality: "Chambéry",
      postalCode: "73000",
      addressCountry: "FR",
    },
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

export default function Page() {
  return (
    <>
      <script type="application/ld+json">{rdvJsonLd}</script>
      <RendezVousPage />
    </>
  );
}
