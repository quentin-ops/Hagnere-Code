import type { Metadata } from "next";
import { ContactPage } from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact — Parlons de votre projet · Hagnéré Code",
  description:
    "Contactez Hagnéré Code : un associé qui code vous répond sous 24 h ouvrées. Formulaire, Calendly, email ou téléphone. Cadrage 30 min gratuit, sans engagement.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Hagnéré Code · Studio SaaS à Chambéry",
    description:
      "Associé qui code en direct. Réponse sous 24 h. Cadrage 30 min gratuit.",
    url: "/contact",
    type: "website",
  },
};

const contactJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact — Hagnéré Code",
  url: "https://hagnere-code.fr/contact",
  description:
    "Prendre contact avec Hagnéré Code : formulaire projet, Calendly, email direct, téléphone, adresse Chambéry.",
  mainEntity: {
    "@type": "Organization",
    name: "Hagnéré Code",
    email: "hello@hagnere-code.fr",
    telephone: "+33374472018",
    address: {
      "@type": "PostalAddress",
      streetAddress: "7 rue Ernest Filliard",
      addressLocality: "Chambéry",
      postalCode: "73000",
      addressCountry: "FR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "hello@hagnere-code.fr",
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
