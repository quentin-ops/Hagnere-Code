import type { Metadata } from "next";
import { ContactPage } from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact projet web sur mesure à Chambéry · Hagnéré Code",
  description:
    "Contactez Hagnéré Code à Chambéry pour un SaaS B2B, une application métier, un outil interne, une reprise Laravel ou un site web sur mesure. Réponse sous 24 h ouvrées.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact projet web sur mesure · Hagnéré Code Chambéry",
    description:
      "SaaS, applications métier, outils internes, reprise Laravel. Un associé qui code répond sous 24 h ouvrées.",
    url: "/contact",
    type: "website",
  },
};

const contactJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact · Hagnéré Code",
  url: "https://hagnere-code.fr/contact",
  description:
    "Prendre contact avec Hagnéré Code pour un projet web sur mesure : SaaS B2B, application métier, outil interne, reprise Laravel ou site vitrine.",
  mainEntity: {
    "@type": "ProfessionalService",
    "@id": "https://hagnere-code.fr/#business",
    name: "Hagnéré Code",
    legalName: "HAGNÉRÉ CODE SAS",
    url: "https://hagnere-code.fr",
    logo: "https://hagnere-code.fr/logos/logo-dark.png",
    image: "https://hagnere-code.fr/og-image.png",
    priceRange: "€€€",
    email: "quentin@hagnere-patrimoine.fr",
    telephone: "+33374472018",
    vatID: "FR30993672856",
    foundingDate: "2025-09-30",
    address: {
      "@type": "PostalAddress",
      streetAddress: "7 rue Ernest Filliard",
      addressLocality: "Chambéry",
      addressRegion: "Savoie",
      postalCode: "73000",
      addressCountry: "FR",
    },
    areaServed: [
      "Chambéry",
      "Savoie",
      "Haute-Savoie",
      "Lyon",
      "Grenoble",
      "France",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "quentin@hagnere-patrimoine.fr",
      telephone: "+33374472018",
      availableLanguage: ["French"],
      areaServed: "FR",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
    },
  },
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json">{contactJsonLd}</script>
      <ContactPage />
    </>
  );
}
