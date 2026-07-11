import type { Metadata } from "next";
import { ContenuVideo } from "@/components/contenu-video/ContenuVideo";
import { OG_BASE, SERVICES_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Studio contenu & vidéo · YouTube, motion, IA · Hagnéré Code",
  description:
    "Vidéos YouTube, motion design et UGC produits 3× plus vite grâce à notre pipeline IA. Dès 2 500 €/vidéo, masters et rushes 100 % à vous.",
  alternates: { canonical: "/services/contenu-video" },
  openGraph: {
    ...OG_BASE,
    title: "Studio contenu & vidéo — Hagnéré Code",
    description:
      "Studio FR qui code et filme. Pipeline IA audité (Claude, Runway, ElevenLabs, HeyGen), motion natif web, forfait mensuel transparent.",
    url: "/services/contenu-video",
    images: [SERVICES_OG_IMAGE],
  },
  twitter: { images: [SERVICES_OG_IMAGE.url] },
};

const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Production de contenu et vidéo avec pipeline IA",
  url: "https://hagnere-code.fr/services/contenu-video",
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
      addressRegion: "Savoie",
      addressCountry: "FR",
    },
    email: "quentin@hagnere-patrimoine.fr",
    telephone: "+33374472018",
  },
  areaServed: { "@type": "Country", name: "France" },
  description:
    "Studio hybride tech + contenu + IA : production de vidéos YouTube, motion design, UGC, product demos, interviews founder. Pipeline IA avec Claude (scripts), Runway Gen-4 (b-roll), ElevenLabs v3 (voix multilingues), HeyGen (avatars), Descript (post-production). Forfait mensuel transparent.",
  // Offres alignées sur les 4 cartes visibles de la section Forfaits & tarifs
  // (consigne Google : le balisage doit refléter le contenu affiché).
  offers: [
    {
      "@type": "Offer",
      name: "Vidéo ponctuelle",
      price: "2500",
      priceCurrency: "EUR",
      description:
        "1 vidéo unique, sans engagement mensuel : 1 brief & 1 script, montage Premiere Pro senior, 1 version longue + 3 shorts, livraison en 10-14 jours.",
    },
    {
      "@type": "Offer",
      name: "YouTube Founder — retainer mensuel",
      price: "3500",
      priceCurrency: "EUR",
      description:
        "Chaîne YouTube clé en main pour CEO / expert : 1 h de tournage par semaine, 4 vidéos longues + 16 shorts par mois, scripts + thumbnails A/B, publication & VidIQ. Engagement 6 mois.",
    },
    {
      "@type": "Offer",
      name: "Content Retainer — pipeline mensuel",
      price: "6900",
      priceCurrency: "EUR",
      description:
        "Pipeline industriel pour marques DTC / SaaS : ~25 livrables par mois (12 ads, 8 UGC, 4 motion + 2 vidéos e-com), localisation FR/EN/DE, dashboard ROAS mensuel. Engagement 6 mois.",
    },
    {
      "@type": "Offer",
      name: "Studio dédié — sur-mesure",
      priceCurrency: "EUR",
      description:
        "Brand film hero, campagne multi-canaux, volumes hors cadre : équipe dédiée 2-4 personnes, tournage multi-jours, motion custom. Sur devis, à partir de 15 k€.",
    },
  ],
});

// FAQ alignée mot pour mot sur les 10 questions visibles de la section FAQ
// (consigne Google : un FAQPage doit reprendre le contenu affiché sur la page).
const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qui monte réellement mes vidéos — un humain ou Opus Clip ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Un monteur senior humain sur Premiere Pro, toujours. On a deux monteurs seniors en interne (10+ ans chacun), jamais d'auto-cut algorithmique livré brut. L'IA (Descript, Opus Clip, Claude) sert d'accélérateur sur les sous-titres, les rushs secs, les scripts — pas de remplacement du montage.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps avant la première livraison ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Première vidéo livrée à J+14 après signature (cadrage + 1 tournage + 1 cycle de montage). La cadence pleine du retainer démarre au mois 2. Pour une vidéo ponctuelle (2 500 €), 10 à 14 jours entre brief validé et livraison.",
      },
    },
    {
      "@type": "Question",
      name: "Pourquoi un engagement de 6 mois sur les retainers ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Parce que la vidéo est un jeu de consistance, pas un coup unique. Les premiers résultats (CTR stabilisé, rétention YouTube, ROAS Meta) se voient à 3-4 mois minimum. 6 mois nous permet aussi de bloquer les créneaux monteurs et d'investir dans votre charte visuelle. Pas de retainer < 6 mois — sinon, prenez la vidéo ponctuelle à 2 500 €.",
      },
    },
    {
      "@type": "Question",
      name: "Qu'est-ce qui se passe si je ne suis pas satisfait après 3 mois ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Revue de pilotage à 3 mois avec KPIs chiffrés. Si les jalons ne sont pas atteints, on ajuste la stratégie sans frais. Si vous voulez sortir, on arrête à 6 mois comme prévu — rushs, projets Premiere, licences musique, tout vous est livré. Pas de lock-in, pas de royalties.",
      },
    },
    {
      "@type": "Question",
      name: "Vous garantissez un nombre de vues ou un ROAS ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Non, et personne de sérieux ne garantit un chiffre précis sur la vidéo. Trop de variables : votre sujet, votre niche, la saisonnalité, les algos YouTube / Meta. On garantit la cadence, la qualité éditoriale, les délais contractuels et le reporting mensuel. Si la trajectoire dérape, on adapte sans refacturer.",
      },
    },
    {
      "@type": "Question",
      name: "Je n'ai pas de studio ni de matos — je dois en acheter ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Non. Deux options : (1) vous tournez face cam iPhone chez vous — on vous envoie un kit lumière + micro RØDE Wireless Pro (offert, vous gardez). (2) vous venez tourner à notre studio Chambéry — fond blanc ou scène éditoriale, caméras Sony FX3/A7S III, lumières Aputure. Pas besoin d'investir en matos.",
      },
    },
    {
      "@type": "Question",
      name: "On a déjà des vidéos qui traînent — vous pouvez repartir de ça ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Oui. Audit des rushs / webinars / vieux contenus inclus dans le cadrage. On repackage ce qui est exploitable en shorts, clips LinkedIn, extraits ads. Un vieux webinar d'1 h peut sortir 20+ shorts. On utilise Descript + Opus Clip pour le premier tri, humain pour la validation.",
      },
    },
    {
      "@type": "Question",
      name: "Le dashboard mensuel, c'est juste un PDF ou c'est live ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Looker Studio connecté à YouTube Studio, Meta Ads Manager, TikTok Ads, GA4, VidIQ. Accès 24/7, URL partagée à votre équipe, pas de PDF qui prend la poussière. On y pose aussi les objectifs et la trajectoire pour que vous puissiez juger à froid. Revue commentée 1 fois par mois en visio avec le DA et le media buyer.",
      },
    },
    {
      "@type": "Question",
      name: "Si on part, on récupère quoi ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Tout : rushs originaux (vidéo + son), projets Premiere Pro & After Effects, assets motion, templates thumbnails Figma, scripts validés, prompts Claude, clone de voix ElevenLabs si vous l'avez activé, fichiers VidIQ. Passation de 2 semaines incluse avec transfert docs + 1 call avec le prestataire suivant si besoin.",
      },
    },
    {
      "@type": "Question",
      name: "Combien ça coûte de vraiment démarrer ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "2 500 € pour une vidéo ponctuelle sans engagement (pour tester notre patte). 3 500 à 6 900 €/mois pour un retainer (engagement 6 mois). À partir de 15 k€ pour un pack sur-mesure (brand film, campagne hero). Les prix sont affichés sur la section Forfaits & tarifs, pas de « sur devis » caché.",
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
