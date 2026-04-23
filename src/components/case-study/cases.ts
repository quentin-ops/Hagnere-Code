export type CaseStudy = {
  slug: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  metaDescription: string;
  heroMetrics: Array<{ v: string; vUnit?: string; k: string }>;
  context: Array<{ k: string; v: string }>;
  before: { title: string; items: string[] };
  after: { title: string; items: string[] };
  timeline: Array<{ marker: string; date: string; title: string; body: string }>;
  metrics: Array<{ k: string; before: string; after: string; delta: string }>;
  archiBefore: string[];
  archiAfter: string[];
  quote: {
    stars: number;
    text: string;
    name: string;
    role: string;
    avatarInitials: string;
    avatarGradient: [string, string];
  };
};

export const CASE_STUDIES: Record<string, CaseStudy> = {
  "saas-b2b-reprise-app-orpheline": {
    slug: "saas-b2b-reprise-app-orpheline",
    eyebrow: "Case study · Maintenance & évolution",
    title: "Reprise d'une app SaaS B2B orpheline en",
    titleAccent: "30 jours chrono.",
    subtitle:
      "Une scale-up parisienne de 32 salariés se retrouve avec son agence historique disparue. App Laravel 9 en prod, 3 200 MAU, monitoring inexistant, dépendances non patchées depuis 14 mois. Voici comment on a repris la main, stabilisé la prod et posé les bases d'un run propre — en 4 semaines.",
    metaDescription:
      "Case study · reprise d'une app SaaS B2B orpheline. Audit flash 5 jours, monitoring en 2 semaines, +38 % de signaux de prod récupérés, 0 incident P1 en 12 mois. Étude anonymisée sous NDA.",
    heroMetrics: [
      { v: "30", vUnit: "jours", k: "Pour reprendre le contrôle complet" },
      { v: "14", vUnit: "mois", k: "De dette dépendances rattrapée" },
      { v: "+38", vUnit: "%", k: "De signaux prod récupérés" },
      { v: "0", vUnit: "", k: "Incident P1 non géré depuis" },
    ],
    context: [
      { k: "Secteur", v: "SaaS B2B · gestion commerciale" },
      { k: "Taille", v: "32 salariés · Paris" },
      { k: "Stack", v: "Laravel 9 · Vue 2 · PostgreSQL 14" },
      { k: "Contexte", v: "App 3 ans · agence précédente disparue" },
    ],
    before: {
      title: "Le point de départ · ce qu'on a hérité",
      items: [
        "Agence précédente disparue 4 mois plus tôt, aucune passation",
        "Sentry installé mais jamais configuré · 0 alerting actif",
        "Dépendances composer + npm non patchées depuis 14 mois (Laravel 9.19, dont 3 CVE critiques)",
        "Backups PostgreSQL existants mais restauration jamais testée",
        "Bus factor = 1 — seul l'ancien lead dev comprenait le code, il ne répondait plus",
        "Downtimes réguliers découverts par les clients via support",
        "Infra AWS chez l'agence, compte inaccessible pendant 6 semaines",
      ],
    },
    after: {
      title: "Ce qu'on a livré à J+30",
      items: [
        "Audit flash 5 jours · rapport 22 pages + roadmap 12 mois chiffrée",
        "Bascule GitHub org vers le client · tous les accès repris",
        "Sentry + Better Stack + Grafana branchés · alertes Slack <5 min",
        "3 CVE critiques patchés en hotfix J+12",
        "Backups testés en restauration · RPO 15 min · RTO <2 h validés",
        "Binôme dev nommé + documentation Notion + Loom onboarding",
        "Infra rebranchée côté client AWS · ancien compte agence abandonné",
      ],
    },
    timeline: [
      {
        marker: "J-5",
        date: "Kickoff",
        title: "Interviews business & cadrage urgence",
        body: "2 h avec le COO et le CPO. Cartographie rapide du périmètre critique (tunnel d'inscription, billing Stripe, back-office commercial). Priorisation : arrêter l'hémorragie d'incidents avant tout le reste.",
      },
      {
        marker: "S1",
        date: "Semaine 1",
        title: "Audit flash · accès cloud · monitoring d'urgence",
        body: "Revue complète du code (2 devs seniors × 5 jours), audit dépendances, audit infra. En parallèle, récupération progressive des accès cloud (AWS, Vercel, Stripe, Sentry). Branchement Sentry fonctionnel dès J+7 pour capter les erreurs live.",
      },
      {
        marker: "S2",
        date: "Semaine 2",
        title: "Better Stack + statuspage + backups testés",
        body: "Monitoring uptime sur 6 régions, statuspage publique en ligne, premier incident P2 détecté et résolu en 18 min. Test de restauration backup PostgreSQL sur env isolé : OK, RPO validé à 15 min. Runbook DR versionné dans Notion.",
      },
      {
        marker: "S3",
        date: "Semaine 3",
        title: "CVE critiques · patch de sécurité urgent",
        body: "Bump Laravel 9.19 → 9.52.16 (3 CVE critiques patchés dont une de sévérité 9.8), bump Vue 2.6 → 2.7, remise à jour de 47 dépendances composer et 183 dépendances npm. Hotfix déployé zero-downtime le vendredi après-midi.",
      },
      {
        marker: "S4",
        date: "Semaine 4",
        title: "Backlog partagé · premier sprint d'évolutions",
        body: "Linear ouvert avec le client, roadmap 90 jours co-construite, 8 tickets métier priorisés. Dashboard Looker Studio live pour le COO : vue SLA + volumétrie + margin. Comité mensuel le 5 du mois calé.",
      },
      {
        marker: "M2+",
        date: "Run permanent",
        title: "Rythme hebdo stabilisé · 14 deploys / trimestre",
        body: "Sprint hebdomadaire avec revue lundi matin, ship mid-week, rapport mensuel envoyé au COO. 12 mois plus tard : 99,97 % uptime réel mesuré, 0 incident P1 non géré, MTTR médian 21 min sur les P2.",
      },
    ],
    metrics: [
      {
        k: "Uptime mesuré (30 j)",
        before: "~96 %",
        after: "99,97 %",
        delta: "+4 points",
      },
      {
        k: "CVE critiques non patchés",
        before: "3",
        after: "0",
        delta: "Tous patchés J+15",
      },
      {
        k: "Signaux prod capturés (Sentry)",
        before: "0",
        after: "+38 % vs avant",
        delta: "Alerting live",
      },
      {
        k: "MTTR incidents P1/P2",
        before: "> 4 h (best effort)",
        after: "21 min médian",
        delta: "× 12",
      },
      {
        k: "Bus factor",
        before: "1 (dev absent)",
        after: "2 + docs",
        delta: "× 2 + onboarding",
      },
      {
        k: "Facturation mensuelle",
        before: "Freelance opaque",
        after: "3 500 € forfait fixe",
        delta: "0 avenant depuis 12 mois",
      },
    ],
    archiBefore: [
      "Laravel 9.19 · PHP 7.4 (EOL)",
      "Vue 2.6 (EOL)",
      "PostgreSQL 14 · backups jamais testés",
      "Pas de monitoring · Sentry inactif",
      "AWS · compte agence (accès perdu)",
      "Pas de CI/CD · deploy manuel",
      "0 documentation · 0 runbook",
    ],
    archiAfter: [
      "Laravel 9.52.16 · PHP 8.2 · plan Laravel 10",
      "Vue 2.7 · plan Vue 3 au trimestre suivant",
      "PostgreSQL 14 · backups testés trimestriels · RPO 15 min",
      "Sentry + Better Stack + Grafana · alertes Slack",
      "AWS · compte client · IAM documenté",
      "GitHub Actions CI/CD · deploy zero-downtime",
      "Notion ADR + runbooks + 12 vidéos Loom onboarding",
    ],
    quote: {
      stars: 5,
      text: "Notre agence avait livré la v1 puis plus rien pendant 4 mois. Hagnéré Code a fait l'audit flash en 5 jours, repris les accès cloud, branché Sentry + Better Stack en 2 semaines. À J+30 notre app était entre des mains adultes, avec un plan de remédiation chiffré qu'on a validé au comité. Un an plus tard, 0 incident P1 non géré, 14 deploys par trimestre. Leur forfait s'auto-justifie chaque mois.",
      name: "Clara M. · sous NDA",
      role: "COO · SaaS B2B 32 salariés · Paris · client depuis 2024",
      avatarInitials: "CM",
      avatarGradient: ["#6D28D9", "#A78BFA"],
    },
  },
};
