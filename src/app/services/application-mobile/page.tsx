import type { Metadata } from "next";
import { MobileApplication } from "@/components/application-mobile/MobileApplication";
import { OG_BASE } from "@/lib/seo";

const MOBILE_OG_IMAGE = {
  url: "/og-image-services.png",
  width: 1200,
  height: 630,
  alt: "Services Hagnéré Code — applications mobiles iOS & Android sur mesure",
};

export const metadata: Metadata = {
  title: "Création d'application mobile iOS & Android · Hagnéré Code",
  description:
    "Votre app iOS + Android sur les stores dès 12 semaines (React Native). Forfait fixe, code et comptes 100 % à vous, 30 jours de garantie.",
  alternates: { canonical: "/services/application-mobile" },
  openGraph: {
    ...OG_BASE,
    title: "Application mobile iOS & Android — Hagnéré Code",
    description:
      "React Native + Expo, soumission App Store + Play Store incluse, comptes stores à votre nom, OTA updates en 10 min. Forfait fixe sur devis, livraison 8 à 20 semaines.",
    url: "/services/application-mobile",
    images: [MOBILE_OG_IMAGE],
  },
  twitter: { images: [MOBILE_OG_IMAGE.url] },
};

const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Création d'application mobile iOS & Android sur mesure",
  url: "https://hagnere-code.ai/services/application-mobile",
  serviceType:
    "Création d'applications mobiles natives iOS et Android sur mesure",
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
    "Développement d'applications mobiles natives iOS et Android via React Native + Expo. Soumission App Store et Google Play incluse, comptes développeur à votre nom, code source 100 % à vous, OTA updates via EAS, monitoring Sentry. Forfait fixe contractuel, pénalité de retard, 30 jours de garantie post-publication.",
  offers: [
    {
      "@type": "Offer",
      name: "Lancement · MVP iOS + Android",
      priceCurrency: "EUR",
      url: "https://hagnere-code.ai/services/application-mobile#tarifs",
      availability: "https://schema.org/InStock",
      description:
        "App native iOS + Android focalisée sur 1 cas d'usage : fidélité, réservation, click & collect, app interne. Périmètre resserré, login, push, paiement, soumission stores. Livraison 8 à 12 semaines. Forfait fixe sur devis après cadrage.",
    },
    {
      "@type": "Offer",
      name: "Performance · App complète",
      priceCurrency: "EUR",
      url: "https://hagnere-code.ai/services/application-mobile#tarifs",
      availability: "https://schema.org/InStock",
      description:
        "App complète iOS + Android + Web mobile, design sur mesure, Apple Pay + Google Pay + Stripe + IAP, push géoloc, biométrie, hors-ligne, OTA EAS, back-office Filament/Strapi, tests E2E Maestro. Livraison 14 à 20 semaines. Forfait fixe sur devis après cadrage.",
    },
    {
      "@type": "Offer",
      name: "Sur-mesure · Marketplace, IoT, IA embarquée",
      priceCurrency: "EUR",
      url: "https://hagnere-code.ai/services/application-mobile#tarifs",
      availability: "https://schema.org/InStock",
      description:
        "Marketplace 2-sided (Stripe Connect, KYC, escrow), IoT/BLE/NFC, modules natifs Swift/Kotlin si perf critique, Watch/Wear OS, multi-langue, intégration ERP. Livraison 5 à 9 mois. Devis personnalisé après cadrage approfondi.",
    },
  ],
});

const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien coûte une application mobile native iOS et Android chez Hagnéré Code ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Sur devis, après un cadrage qui définit le périmètre exact. Le coût varie fortement selon la complexité : un MVP focalisé sur un seul cas d'usage n'a pas le même prix qu'une marketplace 2-sided ou qu'une app entreprise avec intégrations ERP. Hagnéré Code ne chiffre jamais sur un brief de quelques lignes : un Discovery Sprint payant et déductible cadre les écrans clés et le périmètre, puis le forfait fixe arrive ferme et sans avenant sur le scope validé.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps avant que mon application soit publiée sur l'App Store et Google Play ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Compter 8 à 12 semaines pour un MVP, 14 à 20 semaines pour une application complète, 5 à 9 mois pour une marketplace ou app entreprise. La soumission Apple prend 24-48 h par cycle, avec en moyenne 1 à 3 itérations de revue. La soumission Google Play est plus rapide (1 à 3 jours typique). Délais contractualisés au cadrage avec pénalité de retard de 7 % du forfait par semaine au-delà de J+14.",
      },
    },
    {
      "@type": "Question",
      name: "Qui possède le code source et les comptes App Store / Google Play ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Le client à 100 %, dès le premier jour. Repo Git sur l'organisation GitHub du client. Comptes Apple Developer et Google Play Console créés au nom du client et facturés directement par Apple et Google. Certificats iOS, clés API, fichiers Figma, icônes : tout est sous le contrôle du client. La cession exclusive et totale est écrite dans les CGV. Aucun lock-in technique ou contractuel.",
      },
    },
    {
      "@type": "Question",
      name: "Que se passe-t-il si Apple refuse mon application lors de la review ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Apple refuse 40 % des apps au premier envoi (motif principal : critère 2.1 application incomplète ou buggée). Hagnéré Code prévoit 1 à 3 itérations de review dans le forfait, gère la communication avec les reviewers Apple, et connaît les points sensibles (permissions tracking ATT, IAP vs Stripe, contenu généré par utilisateurs, abonnements clairement affichés). Aucun surcoût si Apple demande 2 à 3 retouches.",
      },
    },
    {
      "@type": "Question",
      name: "React Native, Flutter ou natif Swift/Kotlin : quel est le bon choix ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "React Native + Expo couvre 90 % des besoins d'une PME, divise le coût par 2 par rapport au natif séparé, atteint 60 fps, et permet les OTA updates via EAS. Flutter est techniquement équivalent. Le natif Swift/Kotlin est réservé aux cas où la performance est critique (jeu 3D, IoT BLE pointu, finance lourde). Hagnéré Code utilise React Native + Expo par défaut, et peut développer des modules natifs spécifiques quand le cas d'usage le justifie.",
      },
    },
    {
      "@type": "Question",
      name: "Apple et Google prennent-ils 30 % de commission sur tous les revenus ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Non. La commission de 30 % s'applique uniquement aux biens digitaux et abonnements consommés in-app via Apple IAP. Pour les petites entreprises (moins de 1 M$ de chiffre d'affaires annuel), la commission est de 15 % via Apple Small Business Program. Pour les biens physiques, livraisons, click & collect, services réservés via l'app, le paiement passe par Stripe ou PayPlug en webview avec 0 % de commission Apple/Google. Hagnéré Code conseille la bonne stratégie au cadrage selon le business model.",
      },
    },
    {
      "@type": "Question",
      name: "La maintenance après le lancement, comment c'est facturé ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Forfait maintenance optionnel sur devis selon le volume et la criticité, sans engagement de durée. Inclut selon le scope retenu : compatibilité iOS et Android annuelle, correctifs de sécurité, monitoring 24/7, hot-fixes via OTA, releases régulières. Une app non maintenue est désinstallée par les utilisateurs en moins de six mois — la trajectoire de maintenance est donc cadrée dès le devis initial.",
      },
    },
    {
      "@type": "Question",
      name: "Et si je veux ajouter des fonctionnalités après le lancement ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Évolutions mineures (un écran, une intégration) chiffrées au ticket sur la base d'un cadrage rapide. Modules complets (paiement supplémentaire, vertical secondaire, app Watch) sur devis. Releases mensuelles en standard. Pour un partenariat long terme, forfait évolutions mensuel cadré ensemble selon le rythme de l'équipe — sans friction de devis pour chaque ajustement.",
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
      name: "Application mobile iOS & Android",
      item: "https://hagnere-code.ai/services/application-mobile",
    },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json">{serviceJsonLd}</script>
      <script type="application/ld+json">{faqJsonLd}</script>
      <script type="application/ld+json">{breadcrumbJsonLd}</script>
      <MobileApplication />
    </>
  );
}
