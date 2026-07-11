import type { Metadata } from "next";
import { MethodePage } from "@/components/methode/MethodePage";
import { OG_BASE } from "@/lib/seo";

const METHODE_OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Sprint Fixe™ — méthode propriétaire Hagnéré Code (forfait fixe, démos vendredi, code J+1)",
};

export const metadata: Metadata = {
  title: "Notre méthode au forfait fixe : Sprint Fixe™ · Hagnéré Code",
  description:
    "Prix annoncé = prix payé, sinon chaque semaine de retard est offerte. Démos tous les vendredis, code chez vous dès J+1, garantie 30 jours.",
  alternates: { canonical: "/methode" },
  openGraph: {
    ...OG_BASE,
    title: "Sprint Fixe™ — La méthode Hagnéré Code",
    description:
      "Forfait fixe contractuel, démos hebdo, code chez vous J+1. La méthode qui livre dans le budget annoncé.",
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
    "Cinq étapes contractuelles pour livrer un produit numérique au forfait fixe, sans dépassement, avec démos hebdomadaires et code/data du client dès J+1.",
  totalTime: "P12W",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Discovery Sprint payé (1 500 € · 2 jours)",
      text: "Cadrage métier, prototype Figma cliquable, architecture technique, devis ferme. Déduit à 100 % si phase 2.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Devis ferme + signature",
      text: "Forfait fixe contractuel avec date de livraison et clause de pénalité de retard. Aucune zone grise.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Sprints de 2 semaines + démo chaque vendredi",
      text: "Le code part sur votre repo Git dès J+1. Vous voyez votre produit grandir chaque semaine, vous corrigez la trajectoire en temps réel.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Mise en production + formation équipe",
      text: "Déploiement sur votre infrastructure ou la nôtre. Formation de vos équipes incluse. 30 jours de garantie systématique.",
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
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hagnere-code.fr/" },
    { "@type": "ListItem", position: 2, name: "Méthode", item: "https://hagnere-code.fr/methode" },
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
          "On a un bus factor de 2 minimum sur chaque projet : un dev référent + un binôme qui peut prendre le relais en 24 h. Tout passe par notre repo Git, notre Linear et notre runbook documenté. Si un dev est indisponible plus d'une semaine, on prévient, on bascule, et la date de livraison reste celle du contrat.",
      },
    },
    {
      "@type": "Question",
      name: "Vous bossez sur combien de projets en parallèle ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "On limite volontairement à 3 projets actifs en parallèle sur l'équipe tech (1 par binôme). C'est ce qui nous permet de tenir les démos vendredi sans context switching destructeur. Si on est en flux tendu, on vous le dit en cadrage et on vous propose une date de démarrage décalée.",
      },
    },
    {
      "@type": "Question",
      name: "Le forfait fixe pour un MVP, OK. Mais pour un projet à scope évolutif sur 6 mois ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Sprint Fixe™ marche bien sur des projets à périmètre cadrable (MVP SaaS, refonte vitrine, outil interne défini). Pour un projet vraiment évolutif (R&D, recherche utilisateur en continu, pivot fréquent), on bascule sur un format Care+ avec capacité dédiée mensuelle — un développeur senior à temps partiel, engagement 6 mois, livrables par sprints de 2 semaines.",
      },
    },
    {
      "@type": "Question",
      name: "Et si je suis en retard sur mes validations ? Ça décale la pénalité ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Oui, et c'est cadré dans le contrat. Toute attente de validation client supérieure à 5 jours ouvrés décale d'autant la date de livraison contractuelle (clause delay of game). Si vous êtes silencieux 2 semaines, le projet est mis en pause facturée (50 €/jour) jusqu'à reprise.",
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
          "Le code généré ou suggéré par Claude est revu à 100 % par un dev humain senior avant le commit, puis re-revu en code review systématique avant le merge. Claude est un assistant qui défriche, pas un dev qui commit.",
      },
    },
    {
      "@type": "Question",
      name: "Et si Hagnéré Code ferme ses portes ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Vous gardez tout : repo Git sur votre compte dès J+1, hébergement à votre nom, documentation à jour, runbook ops. N'importe quelle équipe React/Next.js peut reprendre le code en moins de 5 jours. Pas de lock-in technique, pas de royalties, pas de dépendance.",
      },
    },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json">{howToJsonLd}</script>
      <script type="application/ld+json">{breadcrumbJsonLd}</script>
      <script type="application/ld+json">{faqJsonLd}</script>
      <MethodePage />
    </>
  );
}
