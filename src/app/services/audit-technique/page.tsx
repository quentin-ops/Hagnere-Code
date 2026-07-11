import type { Metadata } from "next";
import { AuditTechnique } from "@/components/audit-technique/AuditTechnique";
import { OG_BASE, SERVICES_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Audit technique · Dette chiffrée en 10 jours · Hagnéré Code",
  description:
    "Audit technique indépendant pour dirigeants, VC et M&A : dette chiffrée en euros, rapport board-ready en 10 jours. 4 formats de 8 à 68 k€.",
  alternates: { canonical: "/services/audit-technique" },
  openGraph: {
    ...OG_BASE,
    title: "Audit technique — Hagnéré Code",
    description:
      "Votre dette technique, chiffrée en euros. Livrée en 10 jours. Rapport board-ready exploitable par VC / acquéreur / board. 100 % déductible si mission de remédiation > 50 k€ suit.",
    url: "/services/audit-technique",
    images: [SERVICES_OG_IMAGE],
  },
  twitter: { images: [SERVICES_OG_IMAGE.url] },
};

const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Audit technique indépendant, dette chiffrée en euros",
  url: "https://hagnere-code.fr/services/audit-technique",
  serviceType:
    "Audit technique indépendant (code, architecture, sécurité, performance, infrastructure, DevEx, FinOps, équipe) avec livrable board-ready Tech Debt P&L",
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
    "Audit technique one-shot pour PME, ETI, scale-up et investisseurs français : 8 dimensions couvertes (Code quality, Architecture, Performance, Sécurité, Infrastructure, DevEx/DORA, FinOps cloud, Équipe & organisation), Tech Debt P&L chiffré en euros, deck exécutif board-ready, backlog priorisé Notion/Linear, version board-safe anonymisée, diagrammes C4 AS-IS/TO-BE, roadmap 6/12/18 mois. Méthodologie ISO 19011, clause de non-conflit d'intérêt publique (100 % déduit si mission de remédiation > 50 k€ suit), garantie ≥ 3 recommandations actionnables ou 50 % remboursé.",
  offers: [
    {
      "@type": "Offer",
      name: "Audit Express · urgence",
      price: "8000",
      priceCurrency: "EUR",
      description:
        "Format Express 3-5 jours ouvrés, 1 senior dédié, 4-5 dimensions couvertes, livrable Notion + Loom 15 min, Tech Debt P&L simplifié. Pour post-incident, pré-décision urgente, 2e avis rapide. Démarrage sous 3 jours ouvrés.",
    },
    {
      "@type": "Offer",
      name: "Audit Standard · 10 jours",
      price: "18000",
      priceCurrency: "EUR",
      description:
        "Format Standard 10 jours ouvrés, 2 seniors + associé-lead, 8 dimensions couvertes, rapport PDF 40-70 pages, Tech Debt P&L chiffré en euros, deck exécutif 12-18 slides board-ready, version board-safe, backlog Notion 20-30 tickets, diagrammes C4, Loom 20-30 min, roadmap 6/12/18 mois. Pour baseline CTO, pré-levée, préparation SOC2, go/no-go interne. Déduit 100 % si mission remédiation > 50 k€ suit.",
    },
    {
      "@type": "Offer",
      name: "Audit Deep · refonte ou levée",
      price: "38000",
      priceCurrency: "EUR",
      description:
        "Format Deep 15-20 jours ouvrés, 3 seniors + architecte + associé-lead, tout inclus dans Standard + rapport 60-80 pages, 3 scenarios chiffrés sur 3 ans, restitution trilatérale CEO + CTO + CFO, dashboard opex vs capex, version data-room contrôlée. Pour décisions > 500 k€ : go/no-go refonte, Série B côté vendeur, gros gap SOC2. Démarrage sous 5 jours ouvrés.",
    },
    {
      "@type": "Offer",
      name: "Tech Due Diligence M&A · acquisition",
      price: "68000",
      priceCurrency: "EUR",
      description:
        "Format Tech DD M&A 20-30 jours ouvrés, 4 personnes dédiées + coordination avocats M&A, rapport format acquisition 80-120 pages, analyse licences open source + IP + propriété code, liste deal-breakers flaggés go/no-go/re-négo, roadmap remédiation post-deal chiffrée 12/24 mois, NDA renforcé attorney-client privilege. Pour acquéreurs en rachat de scale-up. Démarrage sous 3 jours ouvrés.",
    },
  ],
});

const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien de temps avant les premiers insights d'un audit technique ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Premiers insights transmis à J+5 par note de synthèse 3-4 pages (format Standard). Rapport complet livré à J+10 Standard, J+5 Express, J+20 Deep, J+30 Tech DD M&A. Vous pouvez arrêter l'audit à tout moment si le scope doit pivoter — paiement au prorata des jours consommés.",
      },
    },
    {
      "@type": "Question",
      name: "Le prix de l'audit technique est-il vraiment fixe ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Oui, et publiquement affiché : Express 8 000 €, Standard 18 000 €, Deep 38 000 €, Tech DD M&A 68 000 € HT. Les extras (pentest CERT-FR, retest post-remédiation, shadow CTO, restitution board physique, FinOps deep-dive, couche IA/LLM) sont chiffrés à l'avance dans le devis initial. Zéro avenant surprise en cours d'audit.",
      },
    },
    {
      "@type": "Question",
      name: "Pourquoi une clause de non-conflit d'intérêt publique ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Pour aligner nos intérêts économiques sur la qualité du diagnostic. Si une mission de remédiation > 50 k€ suit l'audit, 100 % du prix de l'audit est déduit de la première facture. Résultat : nous n'avons aucun intérêt économique à noircir le rapport pour pousser une mission ensuite — l'incitation est inverse.",
      },
    },
    {
      "@type": "Question",
      name: "Vous garantissez quoi exactement sur l'audit ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Sept engagements écrits en CGV : NDA mutuel J0 opposable, clause de non-conflit d'intérêt publique (100 % déduit si mission > 50 k€), garantie ≥ 3 recos actionnables ou 50 % remboursé, version board-safe anonymisée incluse, méthodologie ISO 19011 téléchargeable, sample report anonymisé disponible avant signature, propriété client exclusive des livrables sans watermark ni clause de republication.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps prend le démarrage de l'audit ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Démarrage sous 5 jours ouvrés après signature (3 jours pour une urgence justifiée, Tech DD M&A ou Express). Phase J-5 à J0 : brief technique 90 min, NDA mutuel signé, accès read-only configurés (GitHub, cloud, Sentry, Linear, Notion). Votre équipe a environ 2 heures de travail total pour la partie setup.",
      },
    },
    {
      "@type": "Question",
      name: "On a déjà SonarQube et Snyk, pourquoi faire appel à vous ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Ces outils trouvent des bugs techniques, pas des problèmes de business. Aucun SaaS ne chiffre votre dette tech en euros, ne priorise par impact board, ne produit un rapport défendable en DD VC ou M&A. Un audit Hagnéré, ce n'est pas un scan, c'est une traduction technique vers business — on agrège vos outils + les nôtres + entretiens équipe pour produire un verdict exploitable par votre CA.",
      },
    },
    {
      "@type": "Question",
      name: "Qui va concrètement ausculter notre code ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "2 seniors + un associé-lead nommés dans le devis (photo, prénom, LinkedIn visibles). Pas de stagiaire, pas de junior, pas de sous-traitance offshore. Chaque dimension auditée a un owner dédié qui la signe. Zéro rotation en cours d'audit. Équipe 100 % salariée Chambéry, ancienneté moyenne 4 ans chez Hagnéré.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle taille d'application pour qu'un audit soit pertinent ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "En dessous de 1 000 utilisateurs actifs mensuels sans enjeu board / VC / compliance, un audit Express (8 000 €) suffit souvent. Au-dessus, Standard (18 000 €) est le sweet spot pour 90 % de nos clients. Règle empirique : si votre prochaine décision tech vaut plus de 80 k€ (refonte, levée, M&A, certification), un audit se rembourse en économies de mauvaises décisions.",
      },
    },
    {
      "@type": "Question",
      name: "Si on part, on récupère quoi ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Tous les livrables en propriété exclusive client à J+10 : rapport PDF, Tech Debt P&L, deck exécutif, version board-safe, backlog Notion, diagrammes C4 SVG, Loom restitution, exports bruts SAST/CVE, roadmap 6/12/18 mois. Aucun watermark, aucune clause de republication, aucune mention imposée. Les accès read-only sur votre infra sont révoqués à J+11 automatiquement.",
      },
    },
    {
      "@type": "Question",
      name: "C'est quoi exactement dans les 18 000 € du format Standard ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "10 jours ouvrés de travail par 2 seniors + 1 associé-lead. 8 dimensions auditées : Code quality (SAST, coverage, complexité), Architecture (C4, couplage), Performance (p95/p99, N+1, CWV), Sécurité (OWASP, CVE, RGPD), Infrastructure (IaC, DR, RPO/RTO), DevEx (DORA metrics), FinOps (cost per feature), Équipe (5-8 entretiens no-blame SPACE framework). Livrables inclus : rapport 40-70 pages, Tech Debt P&L chiffré, deck 12-18 slides board-ready, version board-safe, backlog Notion 20-30 tickets, diagrammes C4, Loom 20-30 min, roadmap 6/12/18 mois. Licences enterprise SonarQube, Snyk, Datadog incluses.",
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
      name: "Audit technique",
      item: "https://hagnere-code.fr/services/audit-technique",
    },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json">{serviceJsonLd}</script>
      <script type="application/ld+json">{faqJsonLd}</script>
      <script type="application/ld+json">{breadcrumbJsonLd}</script>
      <AuditTechnique />
    </>
  );
}
