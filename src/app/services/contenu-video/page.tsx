import type { Metadata } from "next";
import { ContenuVideo } from "@/components/contenu-video/ContenuVideo";

export const metadata: Metadata = {
  title:
    "Studio contenu & vidéo — Motion, YouTube, UGC & IA | Hagnéré Code",
  description:
    "Studio tech + contenu + IA : YouTube founder-led, motion design, UGC, vidéo produit. Pipeline Claude + Runway + ElevenLabs, 3× plus rapide qu'un studio classique. Forfait mensuel affiché, basé à Chambéry.",
  alternates: { canonical: "/services/contenu-video" },
  openGraph: {
    title: "Studio contenu & vidéo — Hagnéré Code",
    description:
      "Studio FR qui code et filme. Pipeline IA audité (Claude, Runway, ElevenLabs, HeyGen), motion natif web, forfait mensuel transparent.",
    url: "/services/contenu-video",
    type: "website",
  },
};

const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Production de contenu et vidéo avec pipeline IA",
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
    "Studio hybride tech + contenu + IA : production de vidéos YouTube, motion design, UGC, product demos, interviews founder. Pipeline IA avec Claude (scripts), Runway Gen-4 (b-roll), ElevenLabs v3 (voix multilingues), HeyGen (avatars), Descript (post-production). Forfait mensuel transparent.",
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
      name: "Contenu & vidéo",
      item: "https://hagnere-code.fr/services/contenu-video",
    },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json">{serviceJsonLd}</script>
      <script type="application/ld+json">{breadcrumbJsonLd}</script>
      <ContenuVideo />
    </>
  );
}
