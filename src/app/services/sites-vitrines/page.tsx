import type { Metadata } from "next";
import { SitesVitrines } from "@/components/sites-vitrines/SitesVitrines";
import { OG_BASE, SERVICES_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Création site vitrine · Performance garantie · Hagnéré Code",
  description:
    "Sites vitrines et landing pages Next.js, 5× plus rapides que WordPress. Lighthouse 95+ garanti par contrat, forfait fixe dès 6 900 €, code à vous.",
  alternates: { canonical: "/services/sites-vitrines" },
  openGraph: {
    ...OG_BASE,
    title: "Sites vitrines & landing pages — Hagnéré Code",
    description:
      "Next.js statique, Lighthouse 95+, SEO technique, CMS headless. Forfait fixe, livré en 2 à 8 semaines, hébergé en France.",
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
    "Création de sites vitrines, landing pages haute conversion, refontes WordPress vers Next.js, sites multilingues et e-commerce headless. Stack Next.js 15, CMS Sanity ou Strapi, hébergement Vercel ou OVH. Performance contractuelle Lighthouse 95+, LCP < 1,5 s, Core Web Vitals verts.",
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
          "2 à 4 semaines pour une landing page ou un mini-site (3–5 pages). 5 à 7 semaines pour un site vitrine corporate de 10–20 pages avec blog et SEO technique. 8 à 14 semaines pour une plateforme multilingue ou un e-commerce. Les délais sont contractualisés au cadrage, avec clause de pénalité si dépassement.",
      },
    },
    {
      "@type": "Question",
      name: "Est-ce qu'on est propriétaire du code et du site ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Oui, à 100 %. Le repo Git est sur votre compte GitHub dès le jour 1, le domaine à votre nom, l'hébergement Vercel ou OVH facturé directement à vous. Vous pouvez partir à tout moment avec le code, la doc et l'historique. Aucun lock-in technique ou contractuel.",
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
          "Non, avec un plan de migration SEO systématique : audit des URLs indexées, redirections 301 page à page, préservation des balises title/meta/h1 qui rankent, monitoring 3 mois des positions post-live. Sur nos migrations WordPress vers Next.js, 98 % des positions sont conservées ou améliorées.",
      },
    },
    {
      "@type": "Question",
      name: "Pourquoi Next.js et pas WordPress, c'est moins cher ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Sur 3 ans, Next.js revient moins cher : pas de maintenance plugins (≈1 800 €/an économisés), pas de hack à réparer, pas de refonte à prévoir. Et 5× plus rapide (LCP 1 s vs 4–6 s en WordPress moyen), ce qui représente +7 à +15 % de conversion selon les données Google. Le ROI se fait en 6–12 mois.",
      },
    },
    {
      "@type": "Question",
      name: "Que garantissez-vous en termes de performance ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Contractuellement : Lighthouse Performance ≥ 95 sur mobile, LCP < 1,5 s, CLS < 0,05, INP < 100 ms. Si les seuils ne sont pas atteints à la livraison, nous corrigeons gratuitement jusqu'à les atteindre. Contrôles Lighthouse CI automatisés à chaque déploiement.",
      },
    },
    {
      "@type": "Question",
      name: "Qui héberge le site et combien ça coûte ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Site statique sur Vercel (edge CDN mondial) ou OVH (serveur français) selon votre préférence. CMS et base de données sur Scaleway Paris ou OVH Roubaix pour la conformité RGPD. Hébergement 12 mois inclus dans le forfait, puis facturé directement par l'hébergeur à vous — pas de marge cachée.",
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
      <script type="application/ld+json">{serviceJsonLd}</script>
      <script type="application/ld+json">{faqJsonLd}</script>
      <script type="application/ld+json">{breadcrumbJsonLd}</script>
      <SitesVitrines />
    </>
  );
}
