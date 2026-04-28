import type { Metadata } from "next";
import { MaintenanceEvolution } from "@/components/maintenance-evolution/MaintenanceEvolution";

export const metadata: Metadata = {
  title:
    "TMA SaaS — Maintenance, SLA, forfait fixe | Hagnéré Code",
  description:
    "TMA applicative : monitoring 24/7, patches CVE < 48 h, évolutions continues, infra ops. Équipe nommée au contrat, forfait fixe, SLA 99,5–99,95 % avec pénalités auto.",
  alternates: { canonical: "/services/maintenance-evolution" },
  openGraph: {
    title: "Maintenance & évolution — Hagnéré Code",
    description:
      "SLA 99,5–99,95 % avec pénalités. Deploys hebdo, CVE patchés sous 48 h, forfait fixe mensuel. Reprise d'apps orphelines en 5 jours.",
    url: "/services/maintenance-evolution",
    type: "website",
  },
};

const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType:
    "Tierce maintenance applicative (TMA) et évolution de logiciels SaaS avec SLA contractuel",
  provider: {
    "@type": "Organization",
    name: "Hagnéré Code",
    url: "https://hagnere-code.fr",
    logo: "https://hagnere-code.fr/logos/logo-dark.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "7 rue Ernest Filliard",
      postalCode: "73000",
      addressLocality: "Chambéry",
      addressCountry: "FR",
    },
    email: "hello@hagnere-code.fr",
    telephone: "+33374472018",
  },
  areaServed: { "@type": "Country", name: "France" },
  description:
    "Maintenance applicative long-terme pour PME, ETI et scale-up françaises : reprise d'apps orphelines, monitoring 24/7 (Sentry, Better Stack, Grafana), patches sécurité (Snyk, Dependabot), astreinte PagerDuty avec MTTR < 30 min, évolutions continues, hébergement & infra ops (Laravel Forge, Vercel, Fly.io), reporting mensuel business-ready. Équipe nommée dans le contrat, forfait fixe mensuel, SLA 99,5 à 99,95 % avec pénalités auto-appliquées, propriété 100 % client du code et de l'infra.",
  offers: [
    {
      "@type": "Offer",
      name: "Audit flash",
      price: "2000",
      priceCurrency: "EUR",
      description:
        "Audit 5 jours code + infra + sécurité + dette technique. Rapport 15-25 pages + plan de remédiation 12 mois chiffré. Déduit à 100 % du 1er mois si TMA signée dans les 60 jours.",
    },
    {
      "@type": "Offer",
      name: "Essentiel · Run",
      price: "2500",
      priceCurrency: "EUR",
      description:
        "1-2 j/mois d'intervention, monitoring Sentry + Better Stack 24/7, patches sécurité + CVE < 48 h, support Slack HO, SLA 99,5 %, rapport mensuel, rollover 30 %. Pour PME 10-30 salariés avec app stable.",
    },
    {
      "@type": "Offer",
      name: "Scale · Évolution",
      price: "6500",
      priceCurrency: "EUR",
      description:
        "4-6 j/mois, 2 devs nommés, stack observability complète + Grafana Cloud, astreinte 7j/7 PagerDuty MTTR < 30 min, SLA 99,9 %, roadmap trimestrielle + comité mensuel. Pour scale-up 30-150 salariés.",
    },
    {
      "@type": "Offer",
      name: "Premium · Partner",
      price: "14000",
      priceCurrency: "EUR",
      description:
        "12-16 j/mois, équipe 3-4 pers. + PO, astreinte 24/7 MTTR < 1 h, SLA 99,95 % + pénalités, pentest annuel + audit trimestriel, RPO 15 min / RTO 1 h, SOC2-ready + DPA + ISO27001-ready. Pour ETI et scale-up série B+.",
    },
  ],
});

const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien de temps avant les premiers effets mesurables en TMA ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Monitoring live à J+14, premier deploy utile à J+21, SLA uptime stable à M+2. Jalons documentés au kickoff et publiés dans le rapport mensuel pour juger la trajectoire avant la fin du 1er trimestre.",
      },
    },
    {
      "@type": "Question",
      name: "Qui paye le cloud et l'hébergement ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Vous, directement. AWS, OVH, Scaleway, Vercel restent sur votre compte, facturés par le provider à votre entité. Pas de rebilling, pas de margeage, pas de lock-in. Nous on opère, mais on ne s'intercale pas dans la facture.",
      },
    },
    {
      "@type": "Question",
      name: "Pourquoi Hagnéré Code refuse la facturation au TJM ou à la régie ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Refus de principe. La régie pousse à facturer des heures, pas à produire du résultat. Le forfait fixe mensuel aligne nos intérêts : moins de temps passé sur un incident = meilleur service pour vous. Les intérêts sont alignés par construction.",
      },
    },
    {
      "@type": "Question",
      name: "Vous garantissez vraiment 99,9 % d'uptime ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Oui, avec pénalités auto-appliquées. 99,5 % en Essentiel, 99,9 % en Scale, 99,95 % en Premium. Mesuré par Better Stack, affiché sur Statuspage publique, rapport trimestriel. Si manqué : avoir chiffré en CGV, sans discussion.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps prend l'onboarding d'une TMA ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "4 semaines en standard : audit flash (S1), prise de contrôle accès (S1-S2), branchement observability Sentry + Better Stack + Grafana (S2-S3), backlog + roadmap (S3-S4). À J+30 votre app est sous monitoring complet et on commence à shipper.",
      },
    },
    {
      "@type": "Question",
      name: "Qui va s'occuper concrètement de mon app ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "2 à 4 personnes nommées dans votre contrat (photo, prénom, LinkedIn). Pas de rotation, pas de chargé de compte intermédiaire. Binôme obligatoire — jamais un seul dev sur votre projet. Réponse < 2 h HO en Slack. Maximum 8 clients actifs par consultant.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle taille d'application faut-il pour que ça vaille le coup ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "En dessous de 1 000 utilisateurs actifs mensuels sans enjeu sécurité/SLA, un freelance à la tâche suffit. Au-delà, le forfait fixe s'auto-justifie. Règle empirique : app en prod depuis 1+ an, 1 000+ MAU ou enjeu de sécurité client.",
      },
    },
    {
      "@type": "Question",
      name: "Que se passe-t-il si le dev qui gère mon compte part ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Binôme obligatoire dès J+1, vous n'avez jamais un seul dev qui connaît votre projet. Si un dev part : overlap 2 semaines avec le remplaçant (clause CGV), documentation à jour, Loom d'onboarding. 0 jour de productivité perdu. Turnover interne < 10 %.",
      },
    },
    {
      "@type": "Question",
      name: "Si on part, on récupère quoi ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Tout : repo GitHub, comptes cloud, DNS, Stripe, Sentry, Better Stack, Linear, Notion. Runbooks à jour, post-mortems archivés, Loom onboarding, docs architecture + ADR. Passation 5 jours offerte à votre prestataire suivant : 1 call + docs + vidéos de transfert.",
      },
    },
    {
      "@type": "Question",
      name: "C'est quoi exactement dans les 2 000 € de l'audit flash ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "5 jours de travail par 2 devs seniors : audit code (dette, patterns, dépendances, CVE), audit infra (backups, DR, scaling), audit sécurité (SAST, secrets, RGPD), dépendances obsolètes. Rapport 15-25 pages + plan de remédiation 12 mois chiffré. Restitution 1h30 en visio. Déduits à 100 % du 1er mois si TMA signée dans les 60 jours.",
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
      name: "Maintenance & évolution",
      item: "https://hagnere-code.fr/services/maintenance-evolution",
    },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json">{serviceJsonLd}</script>
      <script type="application/ld+json">{faqJsonLd}</script>
      <script type="application/ld+json">{breadcrumbJsonLd}</script>
      <MaintenanceEvolution />
    </>
  );
}
