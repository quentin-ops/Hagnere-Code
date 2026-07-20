import type { Metadata } from "next";
import { ContenuVideo } from "@/components/contenu-video/ContenuVideo";
import { OG_BASE, SERVICES_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Production de contenu & vidéo sur mesure · Hagnéré Code",
  description:
    "Cadrage de vidéos YouTube, motion design et contenus de campagne, avec intervenants, droits, livrables et délais identifiés dans le devis.",
  alternates: { canonical: "/services/contenu-video" },
  openGraph: {
    ...OG_BASE,
    title: "Production de contenu & vidéo — Hagnéré Code",
    description:
      "Formats, diffusion, droits et éventuels outils IA cadrés ; chaque spécialiste mobilisé est identifié avant signature.",
    url: "/services/contenu-video",
    images: [SERVICES_OG_IMAGE],
  },
  twitter: { images: [SERVICES_OG_IMAGE.url] },
};

const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Production de contenu et vidéo avec pipeline IA",
  url: "https://hagnere-code.ai/services/contenu-video",
  serviceType: "Production de contenu et vidéo avec pipeline IA",
  provider: {
    "@type": "Organization",
    name: "Hagnéré Code",
    "@id": "https://hagnere-code.ai/#organization",
    legalName: "HAGNÉRÉ CODE SAS",
    vatID: "FR30993672856",
    url: "https://hagnere-code.ai",
    logo: "https://hagnere-code.ai/logos/logo-dark.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "82 impasse de Bellevue",
      postalCode: "73000",
      addressLocality: "Bassens",
      addressRegion: "Savoie",
      addressCountry: "FR",
    },
    email: "quentin@hagnere-patrimoine.fr",
    telephone: "+33374472018",
  },
  areaServed: { "@type": "Country", name: "France" },
  description:
    "Cadrage et coordination de contenus vidéo, démonstrations produit, motion design et formats de campagne. Les outils, intervenants, droits et livrables applicables sont précisés dans le devis.",
  // Offres alignées sur les 4 cartes visibles de la section Forfaits & tarifs
  // (consigne Google : le balisage doit refléter le contenu affiché).
  offers: [
    {
      "@type": "Offer",
      name: "Vidéo ponctuelle",
      price: "2500",
      priceCurrency: "EUR",
      description:
        "Exemple d'offre ponctuelle : brief, script, une version longue et déclinaisons. Le monteur, les outils et le délai sont confirmés dans le devis.",
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
        "Brand film, campagne multi-canaux ou volume hors cadre : composition d'équipe et moyens de tournage définis sur devis, sans présumer de ressources internes.",
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
          "Le devis nomme la personne responsable du montage, précise son statut interne ou externe et distingue les tâches éventuellement assistées par IA. La validation finale reste humaine.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps avant la première livraison ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Le délai dépend du format, du tournage, des droits, des validations et de la disponibilité des intervenants. Un jalon indicatif ne devient un engagement qu'une fois inscrit au devis signé.",
      },
    },
    {
      "@type": "Question",
      name: "Pourquoi un engagement de 6 mois sur les retainers ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Une cadence régulière permet d'observer plusieurs publications et d'ajuster. La durée, le préavis et les conditions de sortie sont toutefois ceux de l'offre signée, sans délai universel de résultat.",
      },
    },
    {
      "@type": "Question",
      name: "Qu'est-ce qui se passe si je ne suis pas satisfait après 3 mois ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Le devis précise la fréquence des revues, le nombre de corrections, les conditions de sortie et les fichiers remis. Aucun ajustement gratuit ni passation fixe n'est ajouté par cette FAQ.",
      },
    },
    {
      "@type": "Question",
      name: "Vous garantissez un nombre de vues ou un ROAS ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Non. Les vues, le CTR et le ROAS dépendent notamment du sujet, de l'audience, du budget et des plateformes. Les seuls engagements portent sur les livrables et modalités réellement inscrits au devis.",
      },
    },
    {
      "@type": "Question",
      name: "Je n'ai pas de studio ni de matos — je dois en acheter ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Vous pouvez fournir vos rushs ou prévoir un tournage sur site ou dans un lieu loué. Le matériel, le lieu, les déplacements et le prestataire sont confirmés avant signature ; Hagnéré Code ne revendique pas ici un studio Sony/Aputure permanent à Bassens.",
      },
    },
    {
      "@type": "Question",
      name: "On a déjà des vidéos qui traînent — vous pouvez repartir de ça ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Oui, si vous détenez les droits nécessaires. Le cadrage identifie les passages réellement exploitables et les formats à produire ; aucun nombre de shorts n'est garanti avant visionnage.",
      },
    },
    {
      "@type": "Question",
      name: "Le dashboard mensuel, c'est juste un PDF ou c'est live ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Un tableau de suivi peut être inclus et connecté aux sources autorisées. Les indicateurs, accès, fréquence de revue, responsable et statut de chaque intervenant sont précisés au devis.",
      },
    },
    {
      "@type": "Question",
      name: "Si on part, on récupère quoi ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "La liste des rushs, masters, fichiers sources, licences et documents remis est annexée au devis. Les livrables spécifiques sont transférés après paiement complet ; les éléments tiers et préexistants gardent leurs propres droits.",
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
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hagnere-code.ai/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://hagnere-code.ai/services" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Contenu & vidéo",
      item: "https://hagnere-code.ai/services/contenu-video",
    },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd.replace(/</g, "\\u003c") }} />
      <ContenuVideo />
    </>
  );
}
