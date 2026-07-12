import type { Metadata } from "next";
import { SecuriteRgpd } from "@/components/securite-rgpd/SecuriteRgpd";
import { OG_BASE, SERVICES_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "DPO externalisé & conformité RGPD, AI Act · Hagnéré Code",
  description:
    "Le studio qui code et audite : cadrage RGPD 4 900 €, DPO externalisé dès 1 900 €/mois, conformité AI Act, DORA, NIS2. Remédiation par nos devs.",
  alternates: { canonical: "/services/securite-rgpd" },
  openGraph: {
    ...OG_BASE,
    title: "Sécurité & RGPD — Hagnéré Code",
    description:
      "DPO externalisé pour PME tech 2026. Audit + remédiation codée dans la même mission. RGPD · AI Act · DORA · NIS2 · SOC 2 readiness.",
    url: "/services/securite-rgpd",
    images: [SERVICES_OG_IMAGE],
  },
  twitter: { images: [SERVICES_OG_IMAGE.url] },
};

const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "DPO externalisé et conformité RGPD, AI Act",
  url: "https://hagnere-code.ai/services/securite-rgpd",
  serviceType: "DPO externalisé, audit RGPD et conformité AI Act",
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
    "DPO externalisé pour PME tech : cartographie des sous-traitants (RGPD, transferts hors UE, SCC), mise en conformité AI Act EU 2026, NIS2, DORA, SOC 2 readiness. Spécificité Hagnéré Code : audit + remédiation codée par les devs internes (chiffrement, logs, IAM, consent mode, anonymisation) — pas de PDF de 80 pages laissé sans suite.",
  offers: [
    {
      "@type": "Offer",
      name: "Diagnostic AI Act",
      price: "1500",
      priceCurrency: "EUR",
      description:
        "15 jours pour cartographier vos systèmes IA (modèles, fournisseurs, finalités, transferts), classifier au regard de l'AI Act, identifier les obligations et fournir un plan de remédiation 12 mois.",
    },
    {
      "@type": "Offer",
      name: "Cadrage RGPD",
      price: "4900",
      priceCurrency: "EUR",
      description:
        "Audit RGPD complet : registre des traitements, sous-traitants & SCC, durées de conservation, exercice des droits, AIPD le cas échéant. Livrable exploitable + plan d'action chiffré.",
    },
    {
      "@type": "Offer",
      name: "DPO externalisé",
      price: "1900",
      priceCurrency: "EUR",
      description:
        "Forfait mensuel de DPO externalisé : tenue du registre, traitement des demandes d'exercice de droits, point trimestriel direction, alertes incidents. Astreinte ouvrée. Engagement 6 mois minimum.",
    },
  ],
});

const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Pourquoi externaliser le DPO plutôt qu'en interne ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Pour une PME tech 10-200 salariés, un DPO interne salarié coûte 60-90 k€/an pour des sujets qui mobilisent au mieux 0,5 ETP. Le DPO externalisé donne accès à un binôme DPO + dev pour 1 900-3 500 €/mois, avec couverture des congés et continuité.",
      },
    },
    {
      "@type": "Question",
      name: "Vous codez vraiment la remédiation, ou vous laissez un PDF ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "On code. Les actions techniques identifiées dans l'audit (chiffrement at-rest, logs d'accès, mise en place du consent mode, anonymisation, durées de conservation automatisées, suppression sur demande de droit à l'effacement) sont chiffrées en sprint et exécutées par nos devs internes — pas de sous-traitance, pas de \"à voir avec votre prestataire\".",
      },
    },
    {
      "@type": "Question",
      name: "L'AI Act me concerne ? Mon SaaS utilise juste OpenAI / Claude.",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Probablement oui. Si votre produit recommande, classe, score ou décide automatiquement (recrutement, crédit, modération, RH), vous tombez sous le régime des systèmes IA à risque élevé ou limité. Le diagnostic 15 j tranche cette question avec une matrice de classification justifiable.",
      },
    },
    {
      "@type": "Question",
      name: "Vous gérez aussi les certifications type SOC 2 ou ISO 27001 ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "On prépare les fondations techniques et organisationnelles (SMSI, contrôles, journalisation, gestion des accès, plan de continuité, gestion des sous-traitants) et on accompagne la phase pré-audit. La certification finale est délivrée par un organisme accrédité, indépendant, qu'on vous présente sans mark-up.",
      },
    },
    {
      "@type": "Question",
      name: "Comment vous engagez-vous contractuellement ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Les missions DPO externalisé incluent un engagement contractuel sur la disponibilité, le délai de réponse aux demandes d'exercice de droits, le traitement des incidents (notification CNIL 72 h) et la confidentialité (NDA mutuel signé J0). Tous ces engagements sont écrits dans le contrat et opposables.",
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
      name: "Sécurité & RGPD",
      item: "https://hagnere-code.ai/services/securite-rgpd",
    },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json">{serviceJsonLd}</script>
      <script type="application/ld+json">{breadcrumbJsonLd}</script>
      <script type="application/ld+json">{faqJsonLd}</script>
      <SecuriteRgpd />
    </>
  );
}
