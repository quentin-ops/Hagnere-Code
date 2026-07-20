import type { Metadata } from "next";
import { MethodePage } from "@/components/methode/MethodePage";
import { OG_BASE } from "@/lib/seo";

const METHODE_OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Sprint Fixe™ — méthode de cadrage et de suivi de projet Hagnéré Code",
};

export const metadata: Metadata = {
  title: "Notre méthode au forfait fixe : Sprint Fixe™ · Hagnéré Code",
  description:
    "Périmètre, prix, jalons, validations et réversibilité : découvrez les points que Hagnéré Code propose de cadrer par écrit avant chaque projet.",
  alternates: { canonical: "/methode" },
  openGraph: {
    ...OG_BASE,
    title: "Sprint Fixe™ — La méthode Hagnéré Code",
    description:
      "Une méthode lisible pour cadrer le périmètre, le prix, les démonstrations, la recette et la remise des livrables.",
    url: "/methode",
    images: [METHODE_OG_IMAGE],
  },
  twitter: { images: [METHODE_OG_IMAGE] },
};

const howToJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Sprint Fixe™ — Méthode Hagnéré Code",
  description:
    "Cinq étapes proposées pour cadrer et suivre un projet numérique. Les engagements applicables sont ceux du devis ou du contrat signé.",
  totalTime: "P12W",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Discovery Sprint payé (1 500 € · 2 jours)",
      text: "Cadrage métier et technique, livrables et prix précisés dans la proposition commerciale. Toute remise éventuelle est écrite dans le devis.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Devis ferme + signature",
      text: "Le devis fixe le périmètre, le prix, les dépendances, les responsabilités et les jalons applicables au projet.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Sprints de 2 semaines + démo chaque vendredi",
      text: "Le rythme des démonstrations, les accès au dépôt et les validations sont organisés au démarrage selon le devis.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Mise en production + formation équipe",
      text: "La recette, le déploiement, la formation et la période de correction sont définis selon le périmètre signé.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Care mensuel ou autonomie complète",
      text: "Trois forfaits Care (390/890/2400 €/mois) ou reprise du code par votre équipe. Aucune option n'est obligatoire.",
    },
  ],
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hagnere-code.ai/" },
    { "@type": "ListItem", position: 2, name: "Méthode", item: "https://hagnere-code.ai/methode" },
  ],
});

const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Et si on veut ajouter du scope en cours de route ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Tout ajout passe par un avenant chiffré au forfait fixe, signé avant que la moindre ligne de code ne soit écrite. Vous décidez si l'ajout vaut le coup. Le périmètre initial reste figé, le total reste contrôlé. On n'a jamais facturé d'avenant non-signé.",
      },
    },
    {
      "@type": "Question",
      name: "Vous n'êtes que 7 — qu'est-ce qui se passe si quelqu'un démissionne ou tombe malade ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Le référent, les personnes mobilisées et le dispositif de continuité sont précisés au lancement. En cas d'indisponibilité, nous informons le client et appliquons la procédure convenue dans le document signé.",
      },
    },
    {
      "@type": "Question",
      name: "Vous bossez sur combien de projets en parallèle ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "La capacité disponible et la date réaliste de démarrage sont confirmées avant signature. Nous ne publions pas de quota permanent qui pourrait devenir faux selon les projets en cours.",
      },
    },
    {
      "@type": "Question",
      name: "Le forfait fixe pour un MVP, OK. Mais pour un projet à scope évolutif sur 6 mois ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Sprint Fixe™ convient aux projets dont le périmètre peut être cadré. Pour une activité évolutive ou de R&D, nous proposons un fonctionnement mensuel sur devis, avec capacité et règles de sortie écrites avant signature.",
      },
    },
    {
      "@type": "Question",
      name: "Et si je suis en retard sur mes validations ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Un retard de validation ou un élément manquant peut décaler le planning. Le délai de réponse attendu, la procédure d'alerte et les éventuelles conséquences financières doivent figurer dans le devis signé ; aucune pénalité automatique n'est annoncée sur cette page.",
      },
    },
    {
      "@type": "Question",
      name: "Combien coûte un Sprint Fixe™ typique ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Site vitrine Performance : 14,9 k€ en 5-7 semaines. Outil interne Pro : 25 k€ en 5-8 semaines. MVP SaaS Standard : 30 k€ en 5-6 semaines. E-commerce Scale : 30 k€ en 8-12 semaines. Le Discovery Sprint à 1 500 € est obligatoire pour tout projet supérieur à 8 k€ — il transforme ces fourchettes en devis ferme à un chiffre unique.",
      },
    },
    {
      "@type": "Question",
      name: "Vous codez sur quelle stack ? Et si on a déjà un existant en .NET / Node / Python ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "On code en Next.js + React (TypeScript) par défaut. On reprend aussi l'existant Laravel/PHP — audit, maintenance, évolutions. Si vous avez un existant en .NET / Node / Python qu'on devrait étendre, on vous le dit honnêtement : on n'est pas la bonne équipe et on vous oriente vers des confrères spécialisés. En revanche, si vous voulez ré-écrire from scratch ou ajouter un outil nouveau à côté de votre existant, Next.js marche très bien — vos deux outils communiquent par API.",
      },
    },
    {
      "@type": "Question",
      name: "Et si Claude Code se trompe ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Claude Code est un outil d'assistance. Un développeur reste responsable des choix, des tests et de la validation des changements avant leur intégration.",
      },
    },
    {
      "@type": "Question",
      name: "Et si Hagnéré Code ferme ses portes ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "La réversibilité est prévue dans les CGV : code, accès et documentation nécessaires à la reprise sont remis selon le périmètre signé. Les livrables spécifiques sont transférés après paiement complet, sous réserve des composants tiers et préexistants.",
      },
    },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: howToJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd.replace(/</g, "\\u003c") }} />
      <MethodePage />
    </>
  );
}
