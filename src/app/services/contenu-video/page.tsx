import type { Metadata } from "next";
import { ContenuVideo } from "@/components/contenu-video/ContenuVideo";

export const metadata: Metadata = {
  title: "Studio contenu & vidéo · YouTube, motion, IA · Hagnéré Code",
  description:
    "Studio tech + contenu + IA : YouTube founder-led, motion design, UGC, vidéo produit. Pipeline Claude + Runway + ElevenLabs, 3× plus rapide qu'un studio classique. Forfait mensuel affiché, basé à Chambéry.",
  alternates: { canonical: "/services/contenu-video" },
  openGraph: {
    title: "Studio contenu & vidéo — Hagnéré Code",
    description:
      "Studio FR qui code et filme. Pipeline IA audité (Claude, Runway, ElevenLabs, HeyGen), motion natif web, forfait mensuel transparent.",
    url: "/services/contenu-video",
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

const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Production de contenu et vidéo avec pipeline IA",
  provider: {
    "@type": "Organization",
    name: "Hagnéré Code",
    "@id": "https://hagnere-code.fr/#organization",
    legalName: "HAGNÉRÉ CODE SAS",
    vatID: "FR30993672856",
    url: "https://hagnere-code.fr",
    logo: "https://hagnere-code.fr/logos/logo-dark.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "7 rue Ernest Filliard",
      postalCode: "73000",
      addressLocality: "Chambéry",
      addressCountry: "FR",
    },
    email: "quentin@hagnere-patrimoine.fr",
    telephone: "+33374472018",
  },
  areaServed: { "@type": "Country", name: "France" },
  description:
    "Studio hybride tech + contenu + IA : production de vidéos YouTube, motion design, UGC, product demos, interviews founder. Pipeline IA avec Claude (scripts), Runway Gen-4 (b-roll), ElevenLabs v3 (voix multilingues), HeyGen (avatars), Descript (post-production). Forfait mensuel transparent.",
  offers: [
    {
      "@type": "Offer",
      name: "Sprint vidéo",
      price: "4000",
      priceCurrency: "EUR",
      description:
        "Lot ponctuel de vidéos courtes (UGC, product demo, motion). Script, tournage ou capture, montage, livrables web/social. Sur 2 à 4 semaines.",
    },
    {
      "@type": "Offer",
      name: "Retainer mensuel",
      price: "6900",
      priceCurrency: "EUR",
      description:
        "Pipeline contenu mensuel : 1 vidéo founder-led + 4 à 8 formats courts. Briefs, tournage, montage, motion, distribution. Forfait fixe mensuel, engagement 3 mois.",
    },
    {
      "@type": "Offer",
      name: "Studio premium",
      price: "12000",
      priceCurrency: "EUR",
      description:
        "Production éditoriale étendue : YouTube hebdo + UGC + ads + product. Avec dédié rédaction + motion + post-prod. Pour scale-up et marques DTC.",
    },
  ],
});

const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Vous filmez sur place ou tout est tourné en studio ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Les deux selon le format. Founder-led et interviews : on se déplace dans vos bureaux ou on capte en visio HD selon la qualité visée. UGC et product demos : capture d'écran + voix off ou tournage léger. Motion : 100 % studio.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle est la part d'IA dans votre pipeline ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "L'IA accélère les tâches répétitives (transcription, sous-titrage multilingue, b-roll génératif, voix de doublage), mais l'écriture éditoriale, le montage final et la direction artistique restent humains. Aucun deepfake ni avatar trompeur.",
      },
    },
    {
      "@type": "Question",
      name: "Vous prenez en charge la diffusion (YouTube, ads, social) ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Oui sur le retainer et le studio premium : programmation YouTube, snippets pour ads (Meta, TikTok, LinkedIn), exports formats verticaux, vignettes A/B testées. Pas de gestion de comptes ads (voir service Publicité en ligne).",
      },
    },
    {
      "@type": "Question",
      name: "Pourquoi un retainer plutôt qu'un projet one-shot ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Le contenu performe par la régularité, pas la perfection. Un retainer garantit un pipeline mensuel stable, des itérations basées sur la performance réelle (vues, engagement, leads) et un coût de production amorti. Pour un one-shot ponctuel, on propose le Sprint vidéo.",
      },
    },
    {
      "@type": "Question",
      name: "Qui est propriétaire des vidéos et des rushes ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Vous, à 100 %. Tous les masters, rushes, fichiers projet motion, voix générées, scripts vous sont remis sur votre Drive ou DAM à chaque livraison. Aucune licence, aucun royalties, aucun lock-in studio.",
      },
    },
  ],
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hagnere-code.fr/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://hagnere-code.fr/services" },
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
      <script type="application/ld+json">{faqJsonLd}</script>
      <ContenuVideo />
    </>
  );
}
