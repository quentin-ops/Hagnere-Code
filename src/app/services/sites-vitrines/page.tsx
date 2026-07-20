import type { Metadata } from "next";
import { SitesVitrines } from "@/components/sites-vitrines/SitesVitrines";
import { OG_BASE, SERVICES_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Création de site vitrine performant · Hagnéré Code",
  description:
    "Sites vitrines et landing pages Next.js : objectifs de performance mesurés, SEO technique, CMS et budget indicatif dès 6 900 € HT, selon périmètre.",
  alternates: { canonical: "/services/sites-vitrines" },
  openGraph: {
    ...OG_BASE,
    title: "Sites vitrines & landing pages — Hagnéré Code",
    description:
      "Next.js, SEO technique, CMS headless et budget de performance défini selon le contenu, les scripts tiers et le périmètre du projet.",
    url: "/services/sites-vitrines",
    images: [SERVICES_OG_IMAGE],
  },
  twitter: { images: [SERVICES_OG_IMAGE.url] },
};

const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Création de sites vitrines et landing pages sur mesure",
  url: "https://hagnere-code.ai/services/sites-vitrines",
  serviceType:
    "Création de sites vitrines, landing pages et refontes web sur mesure",
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
    "Création de sites vitrines, landing pages et refontes web avec Next.js et CMS adapté. Le devis précise le budget, le calendrier, l'hébergement, la migration SEO et les objectifs de performance mesurables.",
  offers: [
    {
      "@type": "Offer",
      name: "Essentiel · Landing Page Performance",
      price: "6900",
      priceCurrency: "EUR",
      description:
        "Landing page longue ou mini-site 3–5 pages, Next.js statique, CMS, formulaires, CWV optimisés. Livraison 2–4 semaines.",
    },
    {
      "@type": "Offer",
      name: "Performance · Site Vitrine Complet",
      price: "14900",
      priceCurrency: "EUR",
      description:
        "10–20 pages + blog architecturé SEO, design sur mesure, SEO technique, intégration CRM, formation. Livraison 5–7 semaines.",
    },
    {
      "@type": "Offer",
      name: "Sur-mesure · Plateforme corporate ou e-commerce",
      price: "22000",
      priceCurrency: "EUR",
      description:
        "Site multilingue, e-commerce headless, espace client, intégrations métier. Devis personnalisé. Livraison 8–14 semaines.",
    },
  ],
});

const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien de temps pour livrer un site vitrine ou une landing page ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Le délai dépend du nombre de gabarits, des contenus, des intégrations et de la migration. Le calendrier et toute conséquence d'un retard ne s'appliquent que s'ils figurent dans le devis signé.",
      },
    },
    {
      "@type": "Question",
      name: "Est-ce qu'on est propriétaire du code et du site ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Le devis précise les accès au dépôt, au domaine et à l'hébergement. Les livrables spécifiques sont transférés après paiement complet conformément aux CGV, sous réserve des composants préexistants et licences tierces.",
      },
    },
    {
      "@type": "Question",
      name: "Comment mettre à jour le contenu du site après la livraison ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Via un CMS headless (Sanity ou Strapi selon votre équipe) avec interface éditeur simple. Votre community manager ou équipe marketing publie articles, visuels, pages sans développeur. Formation 2 h incluse + guide PDF + vidéo Loom de prise en main.",
      },
    },
    {
      "@type": "Question",
      name: "Je vais perdre mes positions SEO si je refais mon site ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Une refonte peut faire varier les positions. Le plan de migration inventorie les URLs, prépare les redirections, conserve les signaux utiles et définit un suivi post-mise en ligne, sans garantir le maintien du classement.",
      },
    },
    {
      "@type": "Question",
      name: "Pourquoi Next.js et pas WordPress, c'est moins cher ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Le coût sur trois ans dépend de l'hébergement, du CMS, des intégrations, de la maintenance et de l'équipe disponible. Nous comparons ces postes dans le devis ; Next.js n'offre ni gain de conversion ni ROI automatique.",
      },
    },
    {
      "@type": "Question",
      name: "Comment définissez-vous les objectifs de performance ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Le devis peut fixer un budget de performance, les pages et conditions de mesure, ainsi que les responsabilités liées au contenu et aux scripts tiers. Les contrôles automatisés et la procédure de correction sont alors décrits explicitement.",
      },
    },
    {
      "@type": "Question",
      name: "Qui héberge le site et combien ça coûte ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Le devis précise le fournisseur, le compte propriétaire, la région d'hébergement, le CMS, la base de données, les sauvegardes, le monitoring, la durée couverte et les coûts tiers. Une localisation en France ou dans l'Union européenne ne suffit pas, à elle seule, à garantir la conformité RGPD.",
      },
    },
    {
      "@type": "Question",
      name: "Vous faites aussi du e-commerce ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Oui, pour des volumes < 500 commandes/mois. Stack Next Commerce + Stripe ou Shopify headless selon vos contraintes. Catalogue, panier, livraison, TVA, RGPD, emails transactionnels. Au-delà, on oriente vers Shopify natif ou un SaaS dédié.",
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
      name: "Sites vitrines & landing pages",
      item: "https://hagnere-code.ai/services/sites-vitrines",
    },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <SitesVitrines />
    </>
  );
}
