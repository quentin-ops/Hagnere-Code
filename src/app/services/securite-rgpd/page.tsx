import type { Metadata } from "next";
import { SecuriteRgpd } from "@/components/securite-rgpd/SecuriteRgpd";

export const metadata: Metadata = {
  title:
    "Sécurité & RGPD — DPO externalisé, AI Act, audit cyber | Hagnéré Code",
  description:
    "Studio qui code ET audite. Cartographie de vos sous-traitants (Stripe, Anthropic, OVH...), conformité RGPD + AI Act + DORA + NIS2, remédiation codée par nos devs. Forfait cadrage + DPO mensuel, RC Pro Hiscox 2 M€, basé à Chambéry.",
  alternates: { canonical: "/services/securite-rgpd" },
  openGraph: {
    title: "Sécurité & RGPD — Hagnéré Code",
    description:
      "DPO externalisé pour PME tech 2026. Audit + remédiation codée dans la même mission. RGPD · AI Act · DORA · NIS2 · SOC 2 readiness.",
    url: "/services/securite-rgpd",
    type: "website",
  },
};

const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "DPO externalisé, audit RGPD et conformité AI Act",
  provider: {
    "@type": "Organization",
    name: "Hagnéré Code",
    url: "https://hagnere-code.fr",
    logo: "https://hagnere-code.fr/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "7 rue Ernest Filliard",
      postalCode: "73000",
      addressLocality: "Chambéry",
      addressCountry: "FR",
    },
    email: "hello@hagnere-code.fr",
    telephone: "+33-3-74-47-20-18",
  },
  areaServed: { "@type": "Country", name: "France" },
  description:
    "DPO externalisé pour PME tech : cartographie des sous-traitants (RGPD, transferts hors UE, SCC), mise en conformité AI Act EU 2026, NIS2, DORA, SOC 2 readiness. Spécificité Hagnéré Code : audit + remédiation codée par les devs internes (chiffrement, logs, IAM, consent mode, anonymisation) — pas de PDF de 80 pages laissé sans suite.",
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hagnere-code.fr/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://hagnere-code.fr/#services" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Sécurité & RGPD",
      item: "https://hagnere-code.fr/services/securite-rgpd",
    },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json">{serviceJsonLd}</script>
      <script type="application/ld+json">{breadcrumbJsonLd}</script>
      <SecuriteRgpd />
    </>
  );
}
