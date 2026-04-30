"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  Circle,
  ClipboardList,
  Code2,
  FileText,
  Hammer,
  HelpCircle,
  Layers3,
  Loader2,
  Mail,
  Building2,
  Mic,
  Pause,
  Phone,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Timer,
  TrendingUp,
  UserRound,
  Wrench,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState, useCallback, type ReactNode } from "react";
import "./project-funnel.css";
import "@/components/estimer-mon-projet/calculator.css";
import { ResultView } from "@/components/estimer-mon-projet/ResultView";
import { TurnstileWidget, TURNSTILE_ENABLED } from "./TurnstileWidget";
import {
  mapFunnelStateToCalculatorInput,
  canSubmitToEstimateApi,
} from "./funnel-to-input";
import type {
  EstimateApiResponse,
  MultiServiceEstimate,
} from "@/components/estimer-mon-projet/types";
import {
  ONESHOT_BRICKS,
  RETAINER_BRICKS,
  getOneshotRange,
  getRetainerRange,
} from "@/lib/pricing-model";
import { trackFunnelEvent } from "@/lib/funnel-analytics";

type StepId = "projet" | "contexte" | "perimetre" | "contraintes" | "contact" | "recap";
type Status =
  | { kind: "idle" }
  | { kind: "submitting"; phase: number }
  | { kind: "success"; aiResult?: MultiServiceEstimate; aiTokens?: number }
  | { kind: "error"; message: string };

const DRAFT_STORAGE_KEY = "pf:draft:v1";
const BRIEF_ID_STORAGE_KEY = "pf:briefSlug:v1";
const RESULT_STORAGE_KEY = "pf:result:v1";

type ProjectKindId =
  | "site"
  | "saas"
  | "mobile"
  | "outil"
  | "ecommerce"
  | "seo"
  | "ads"
  | "content"
  | "maintenance"
  | "audit"
  | "security"
  | "automatisation"
  | "unknown";

type ProjectKind = {
  id: ProjectKindId;
  label: string;
  family: "Build" | "Grow" | "Run" | "Trust" | "À définir";
  text: string;
  base: number;
};

type FunnelState = {
  projectKinds: ProjectKindId[];
  objectives: string[];
  description: string;
  currentSituation: string;
  audience: string;
  mustHaves: string[];
  integrations: string[];
  existingAssets: string[];
  openScope: string;
  timeline: string;
  budget: string;
  decisionStage: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  siren: string;
  company: string;
  role: string;
  consent: boolean;
  honeypot: string;
};

const INITIAL_STATE: FunnelState = {
  projectKinds: [],
  objectives: [],
  description: "",
  currentSituation: "",
  audience: "",
  mustHaves: [],
  integrations: [],
  existingAssets: [],
  openScope: "",
  timeline: "",
  budget: "",
  decisionStage: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  siren: "",
  company: "",
  role: "",
  consent: false,
  honeypot: "",
};

const steps: Array<{
  id: StepId;
  label: string;
  title: string;
  help: string;
  substeps: string[];
}> = [
  {
    id: "projet",
    label: "Projet",
    title: "Que souhaitez-vous construire, reprendre ou cadrer ?",
    help: "Cochez un ou plusieurs services. Les objectifs et questions suivantes s'ajustent selon vos choix.",
    substeps: ["Service", "Objectif adapté", "Point de départ"],
  },
  {
    id: "contexte",
    label: "Contexte",
    title: "Décrivez le besoin avec vos mots.",
    help: "Champ ouvert volontairement large : texte ou dictée vocale, l'IA analysera ensuite les angles morts.",
    substeps: ["Problème actuel", "Utilisateurs", "Résultat attendu"],
  },
  {
    id: "perimetre",
    label: "Le contenu",
    title: "Quelles fonctionnalités faut-il prévoir ?",
    help: "On liste les fonctionnalités, les outils à connecter, et ce que vous avez déjà sous la main.",
    substeps: ["Fonctionnalités", "Outils à connecter", "Ce qui existe déjà"],
  },
  {
    id: "contraintes",
    label: "Contraintes",
    title: "Délais, budget, niveau de maturité.",
    help: "Ces réponses évitent les devis irréalistes et aident à proposer le bon phasage.",
    substeps: ["Échéance", "Budget", "Décision"],
  },
  {
    id: "contact",
    label: "Coordonnées",
    title: "Où vous envoyer le retour ?",
    help: "On demande uniquement ce qu'il faut pour répondre proprement au brief.",
    substeps: ["Identité", "Entreprise", "Consentement"],
  },
  {
    id: "recap",
    label: "Pré-cadrage",
    title: "Votre brief est prêt à être analysé.",
    help: "Vous voyez la synthèse avant envoi. Le chiffrage affiché reste une pré-estimation.",
    substeps: ["Synthèse", "Fourchette", "Envoi"],
  },
];

const projectKinds: ProjectKind[] = [
  { id: "site", family: "Build", label: "Site web / landing", text: "Vitrine, refonte, pages de conversion, contenus SEO.", base: 9000 },
  { id: "saas", family: "Build", label: "SaaS / application métier", text: "Produit web, rôles utilisateurs, espace client, abonnement.", base: 34000 },
  { id: "mobile", family: "Build", label: "Application mobile", text: "React Native, iOS / Android, app terrain ou compagnon SaaS.", base: 26000 },
  { id: "outil", family: "Build", label: "Outil interne", text: "CRM métier, back-office, automatisation, reporting.", base: 24000 },
  { id: "ecommerce", family: "Build", label: "E-commerce", text: "Boutique, catalogue, paiement, B2B, intégrations.", base: 26000 },
  { id: "seo", family: "Grow", label: "SEO / référencement", text: "Audit, architecture, contenus, maillage, pages qui rankent.", base: 9000 },
  { id: "ads", family: "Grow", label: "Publicité / tracking", text: "Google, Meta, LinkedIn, landing pages, attribution, CAC.", base: 8000 },
  { id: "content", family: "Grow", label: "Contenu & vidéo", text: "Guides, scripts, YouTube, motion, assets pour ads et sales.", base: 7000 },
  { id: "maintenance", family: "Run", label: "Maintenance & évolution", text: "TMA, incidents, dette, monitoring, roadmap, passation.", base: 16000 },
  { id: "audit", family: "Run", label: "Audit technique", text: "Code, sécurité, performance, infra, dette, roadmap chiffrée.", base: 14000 },
  { id: "security", family: "Trust", label: "Sécurité & RGPD", text: "DPA, registre, sous-traitants, droits, logs, conformité.", base: 15000 },
  { id: "automatisation", family: "Build", label: "Automatisation / IA", text: "Workflows, assistants, transcription, génération, reporting.", base: 18000 },
  { id: "unknown", family: "À définir", label: "Je ne sais pas encore", text: "Vous avez le problème, pas encore la bonne forme.", base: 10000 },
];

const commonObjectives = [
  "Clarifier avant de décider",
  "Obtenir un chiffrage fiable",
  "Prioriser la bonne première étape",
];

const objectivesByKind: Record<ProjectKindId, string[]> = {
  site: [
    "Créer ou refondre un site qui convertit",
    "Lancer une offre ou une landing page",
    "Améliorer performance, SEO et tracking",
    "Générer plus de demandes entrantes",
  ],
  saas: [
    "Lancer un MVP exploitable",
    "Créer un portail client ou espace abonné",
    "Structurer auth, rôles et facturation",
    "Industrialiser un produit existant",
  ],
  mobile: [
    "Créer une app mobile compagnon",
    "Publier sur iOS et Android",
    "Ajouter une expérience terrain ou hors bureau",
    "Connecter mobile, API et back-office",
  ],
  outil: [
    "Remplacer un fichier Excel ou un process manuel",
    "Centraliser les opérations",
    "Automatiser un workflow métier",
    "Créer un back-office sur mesure",
  ],
  ecommerce: [
    "Vendre en ligne avec un tunnel propre",
    "Migrer Shopify, Prestashop ou WooCommerce",
    "Brancher stock, paiement et facturation",
    "Lancer une app mobile e-commerce",
  ],
  seo: [
    "Gagner du trafic qualifié",
    "Structurer un plan SEO éditorial",
    "Corriger les freins SEO techniques",
    "Créer des pages qui rankent",
  ],
  ads: [
    "Lancer ou reprendre des campagnes",
    "Fiabiliser tracking et attribution",
    "Réduire le CAC",
    "Créer landing pages et reporting",
  ],
  content: [
    "Produire des contenus utiles aux ventes",
    "Créer un système vidéo / shorts / YouTube",
    "Transformer l'expertise en assets",
    "Nourrir SEO, ads et sales",
  ],
  maintenance: [
    "Stabiliser une application en production",
    "Mettre en place une TMA",
    "Corriger bugs, dette et dépendances",
    "Faire évoluer sans tout refaire",
  ],
  audit: [
    "Auditer avant de décider",
    "Chiffrer la dette technique",
    "Préparer une reprise, levée ou due diligence",
    "Prioriser une roadmap de remédiation",
  ],
  security: [
    "Mettre au clair RGPD, DPA et sous-traitants",
    "Réduire les risques sécurité",
    "Préparer un grand compte ou une due diligence",
    "Corriger logs, droits, consentement et données",
  ],
  automatisation: [
    "Automatiser une partie du métier",
    "Brancher IA, transcription ou génération",
    "Créer un assistant interne",
    "Réduire les tâches répétitives",
  ],
  unknown: [
    "Être orienté vers le bon service",
    "Transformer le problème en périmètre",
    "Valider si le projet mérite d'être lancé",
  ],
};

// Lay terms → plain-French definition shown as native title tooltip.
// The list focuses on chips that explicitly use tech jargon — covering the
// "boucher use case" where someone non-tech might land here. Native title
// works on hover desktop AND on long-press mobile.
const TERM_DEFINITIONS: Record<string, string> = {
  // Auth / sécu
  "Auth / comptes utilisateurs": "Création de comptes, mots de passe, connexion.",
  "OAuth / SSO": "Single Sign-On — un seul login pour tous les outils (ex : « Se connecter avec Google »).",
  "Rôles / permissions": "Qui a le droit de faire quoi (admin, manager, lecture seule, etc.).",
  "Multi-tenant (plusieurs orgs)": "Une seule appli, plusieurs entreprises clientes isolées les unes des autres.",
  "IAM": "Gestion des droits d'accès des utilisateurs et machines.",
  // Tracking / data
  "Tracking conversions": "Compter qui clique, qui achète, qui s'inscrit, pour piloter le marketing.",
  "Tracking server-side": "Tracking côté serveur — plus fiable, contourne les bloqueurs de pub.",
  "Schema.org": "Balises invisibles qui aident Google à mieux comprendre les pages.",
  "GTM Server": "Google Tag Manager côté serveur — pour un tracking propre et conforme RGPD.",
  "Attribution multi-touch": "Mesurer quelles pubs/canaux contribuent à une vente.",
  // Dev / archi
  "API publique + webhooks": "Permettre à d'autres logiciels de communiquer automatiquement avec le vôtre.",
  "API métier existante": "L'application interne qui gère les données métier de l'entreprise.",
  "Real-time (chat, présence)": "Mises à jour instantanées sans rafraîchir (ex : chat, notifications).",
  "Multi-tenant": "Une appli, plusieurs clients isolés.",
  "PWA": "Application web installable comme une app, fonctionne hors-ligne.",
  // Compliance
  "DPA / sous-traitants": "Contrats RGPD obligatoires avec les outils tiers (Stripe, hébergeur, etc.).",
  "DPA existants": "Contrats RGPD déjà signés avec vos sous-traitants.",
  "AI Act": "Règlement européen sur l'IA — applicable depuis 2024.",
  "RGPD": "Règlement européen sur la protection des données personnelles.",
  "Consent Mode": "Système de gestion des cookies conforme RGPD.",
  // E-commerce
  "Stripe": "Plateforme de paiement en ligne (cartes, abonnements).",
  "Alma": "Solution de paiement en plusieurs fois (3x, 4x).",
  "Pennylane": "Logiciel de comptabilité pour PME françaises.",
  "Chorus Pro / Factur-X": "Norme française obligatoire pour la facturation électronique.",
  // Tracking outils
  "Sentry": "Outil pour détecter les bugs en production avant les clients.",
  "Better Stack / Grafana": "Outils de monitoring : voir si le service fonctionne en temps réel.",
  // Roles
  "Documentation / passation": "Pour qu'un autre dev puisse reprendre le projet sans repartir de zéro.",
  "Tableaux de bord": "Écrans de pilotage avec graphiques et indicateurs clés.",
};

function termTitle(term: string): string | undefined {
  return TERM_DEFINITIONS[term];
}

const featureBase = ["Rôles / permissions", "Tableaux de bord", "Documentation / passation"];
const featuresByKind: Record<ProjectKindId, string[]> = {
  site: ["Design system", "CMS / édition contenu", "Formulaires leads", "Pages locales", "Schema.org", "Tracking conversions"],
  saas: ["Auth / comptes utilisateurs", "Espace client", "Abonnement / facturation", "API", "Notifications", "Back-office admin"],
  mobile: ["App iOS / Android", "Notifications push", "Connexion API", "Mode hors ligne", "Publication stores", "Analytics mobile"],
  outil: ["Workflow de validation", "Import / export de données", "Kanban / pipeline", "Génération de documents", "Relances automatiques", "Reporting métier"],
  ecommerce: ["Catalogue produits", "Panier / checkout", "Paiement", "Stock / livraison", "Facturation", "Emails transactionnels"],
  seo: ["Audit technique SEO", "Recherche sémantique", "Architecture / maillage", "Production contenus", "Pages transactionnelles", "Reporting Search Console"],
  ads: ["Tracking server-side", "Landing pages", "Plan média", "Dashboard CAC", "Retargeting", "Attribution CRM"],
  content: ["Stratégie éditoriale", "Scripts vidéo", "Motion design", "Formats courts", "Pages de preuve", "Déclinaisons ads / sales"],
  maintenance: ["Monitoring", "Correction bugs", "Mises à jour dépendances", "Backlog évolutif", "SLA / astreinte", "Roadmap de run"],
  audit: ["Audit code", "Audit infra", "Audit performance", "Audit sécurité", "Dette technique chiffrée", "Roadmap 6/12 mois"],
  security: ["Registre RGPD", "DPA / sous-traitants", "Consent Mode", "Droits / IAM", "Logs / conservation", "Plan de remédiation"],
  automatisation: ["Transcription vocale", "Génération IA", "Assistant interne", "RPA / workflow", "Synchronisation outils", "Validation humaine"],
  unknown: ["Atelier de cadrage", "Cartographie du besoin", "Pré-estimation", "Orientation service"],
};

const integrationBase = ["API métier existante", "Google Workspace", "Notion / Airtable", "Aucune pour l'instant"];
const integrationsByKind: Record<ProjectKindId, string[]> = {
  site: ["HubSpot / CRM", "Matomo / GA4", "Search Console", "CMS headless"],
  saas: ["Stripe", "Pennylane", "OpenAI / Claude", "OAuth / SSO", "Email transactionnel"],
  mobile: ["App Store / Play Console", "Firebase", "Expo", "API existante", "Push notifications"],
  outil: ["Pennylane", "HubSpot / CRM", "ERP / Sage / Cegid", "Google Sheets", "Make / Zapier"],
  ecommerce: ["Stripe", "Alma", "Colissimo / Chronopost", "Sage / Cegid", "Chorus Pro / Factur-X"],
  seo: ["Search Console", "Analytics", "Looker Studio", "CMS", "Semrush / Ahrefs"],
  ads: ["Google Ads", "Meta Ads", "LinkedIn Ads", "GTM Server", "CRM attribution"],
  content: ["YouTube", "Descript", "Runway / HeyGen", "ElevenLabs", "CMS / blog"],
  maintenance: ["Sentry", "Better Stack / Grafana", "GitHub / GitLab", "CI/CD", "Vercel / OVH"],
  audit: ["Repo Git", "Sentry / Datadog", "SonarQube / Snyk", "Cloud / hébergement", "CI/CD"],
  security: ["CMP / Consent Mode", "SSO / IAM", "DPA existants", "OVH / Scaleway / Vercel", "Logs applicatifs"],
  automatisation: ["OpenAI / Claude", "Groq / Whisper", "Make / n8n", "Slack / Teams", "Webhooks"],
  unknown: ["Outils à identifier"],
};

const assetBase = ["Brief ou cahier des charges", "Maquettes Figma", "Équipe interne disponible", "Rien de structuré"];
const assetsByKind: Record<ProjectKindId, string[]> = {
  site: ["Site existant", "Nom de domaine", "Analytics", "Contenus existants", "Charte graphique"],
  saas: ["Code existant", "Base de données", "Roadmap produit", "Utilisateurs beta", "Documentation API"],
  mobile: ["Compte Apple / Google", "API existante", "Maquettes mobile", "App déjà publiée", "Parcours utilisateurs"],
  outil: ["Fichiers Excel", "Process écrit", "Base métier", "Exports existants", "Accès outils internes"],
  ecommerce: ["Catalogue produit", "Shopify / Prestashop", "ERP / stock", "Compte Stripe", "Données clients"],
  seo: ["Search Console", "Liste mots-clés", "Articles existants", "Audit SEO précédent", "Backlinks / PR"],
  ads: ["Comptes publicitaires", "Plan de tracking", "Landing pages", "CRM", "Historique spend"],
  content: ["Charte éditoriale", "Vidéos existantes", "Expert métier disponible", "Calendrier éditorial", "Assets marque"],
  maintenance: ["Accès repo Git", "Accès serveur", "Backlog tickets", "Monitoring existant", "Documentation technique"],
  audit: ["Accès repo Git", "Accès infra", "Incidents connus", "Objectif de décision", "Équipe à interviewer"],
  security: ["Registre RGPD", "DPA / contrats", "Cartographie données", "Politique sécurité", "Liste sous-traitants"],
  automatisation: ["Exemples de tâches", "Données source", "Prompts existants", "Outils à connecter", "Règles de validation"],
  unknown: ["Symptômes métier", "Contexte business", "Contraintes connues"],
};

const timelineBase = ["Dès que possible", "Dans 1 mois", "Dans 3 mois", "Préfère en discuter"];
const timelineByKind: Partial<Record<ProjectKindId, string[]>> = {
  maintenance: ["Incident ou risque immédiat", "Reprise sous 2 semaines", "Run mensuel à cadrer", "Préfère en discuter"],
  audit: ["Décision dans 2 semaines", "Décision dans 1 mois", "Avant levée / due diligence", "Préfère en discuter"],
  seo: ["Démarrage ce mois-ci", "Plan sur 3 mois", "Plan sur 6 mois", "Préfère en discuter"],
  ads: ["Campagnes à lancer maintenant", "Reprise sous 2 semaines", "Test sur 90 jours", "Préfère en discuter"],
  content: ["Sprint contenu", "Rythme mensuel", "Lancement offre / campagne", "Préfère en discuter"],
  security: ["Grand compte / audit proche", "Mise en conformité ce trimestre", "Plan de remédiation annuel", "Préfère en discuter"],
};

const budgetBase = ["< 15k", "15-30k", "30-60k", "60k+", "Préfère en discuter"];
const budgetByKind: Partial<Record<ProjectKindId, string[]>> = {
  maintenance: ["< 3k€/mois", "3-8k€/mois", "8-16k€/mois", "16k€+/mois", "Préfère en discuter"],
  seo: ["< 2k€/mois", "2-5k€/mois", "5-10k€/mois", "10k€+/mois", "Préfère en discuter"],
  ads: ["< 2k€/mois hors média", "2-5k€/mois hors média", "5k€+/mois hors média", "Audit seulement", "Préfère en discuter"],
  content: ["< 5k", "5-15k", "15-30k", "Mensuel récurrent", "Préfère en discuter"],
  audit: ["< 8k", "8-18k", "18-40k", "40k+", "Préfère en discuter"],
  security: ["< 8k", "8-20k", "20-40k", "DPO / run mensuel", "Préfère en discuter"],
};

const decisionBase = [
  "Je découvre les options",
  "J'ai besoin d'un ordre de grandeur",
  "Je compare plusieurs prestataires",
  "J'ai un budget et je veux cadrer vite",
  "J'ai déjà un site / outil qui existe",
  "Préfère en discuter",
];

const decisionByKind: Partial<Record<ProjectKindId, string[]>> = {
  maintenance: ["Je cherche une reprise urgente", "Je veux sécuriser le run avant d'évoluer"],
  audit: ["Un audit est demandé par le board, un client ou un investisseur", "Je veux décider entre reprise et refonte"],
  security: ["Un DPO, RSSI ou grand compte bloque", "Je veux préparer une due diligence"],
  seo: ["Je veux cadrer le canal avant d'investir", "J'ai déjà une baisse ou un plafond SEO"],
  ads: ["Je veux fiabiliser le tracking avant de scaler", "J'ai déjà des campagnes à reprendre"],
  content: ["Je veux transformer l'expertise en contenus récurrents"],
  unknown: ["Je ne sais pas encore quel service choisir"],
};

function toggleArray<T extends string>(values: T[], value: T): T[] {
  return values.includes(value) ? values.filter((v) => v !== value) : [...values, value];
}

function toggleProjectKind(values: ProjectKindId[], value: ProjectKindId): ProjectKindId[] {
  if (value === "unknown") return values.includes("unknown") ? [] : ["unknown"];
  return toggleArray(values.filter((kind) => kind !== "unknown"), value);
}

function unique(values: string[]): string[] {
  return Array.from(new Set(values.filter(Boolean)));
}

function normalizeProjectKinds(kinds: ProjectKindId[]): ProjectKindId[] {
  if (kinds.length > 1) return kinds.filter((kind) => kind !== "unknown");
  return kinds;
}

function getDominantKind(kinds: ProjectKindId[]): ProjectKindId {
  const normalized = normalizeProjectKinds(kinds);
  const priority: ProjectKindId[] = [
    "maintenance",
    "audit",
    "security",
    "mobile",
    "ecommerce",
    "saas",
    "outil",
    "site",
    "ads",
    "seo",
    "content",
    "automatisation",
    "unknown",
  ];
  return priority.find((kind) => normalized.includes(kind)) || "unknown";
}

function optionsForKind(
  kinds: ProjectKindId[],
  catalog: Record<ProjectKindId, string[]>,
  base: string[] = [],
  selectedFirst = true,
): string[] {
  const normalized = normalizeProjectKinds(kinds);
  const ids = normalized.length > 0 ? normalized : (["unknown"] as ProjectKindId[]);
  const selected = ids.flatMap((id) => catalog[id] || []);
  return selectedFirst ? unique([...selected, ...base]) : unique([...base, ...selected]);
}

// Objectifs additifs déclenchés UNIQUEMENT quand toutes les cases listées
// sont cochées ensemble. Pattern : "bonus combinatoires" — pas besoin
// d'énumérer les 4 096 sous-ensembles possibles, on déclare les combos
// les plus stratégiques pour Hagnéré Code et les autres tombent sur le
// fallback (union des objectifs par kind).
const COMBO_BONUS_OBJECTIVES: Array<{
  kinds: ProjectKindId[];
  objectives: string[];
}> = [
  // ── Build × Build ──
  {
    kinds: ["site", "saas"],
    objectives: [
      "Lancer un produit avec un site de conversion en amont",
      "Connecter site marketing et application (auth partagée, tracking unifié)",
    ],
  },
  {
    kinds: ["site", "ecommerce"],
    objectives: [
      "Site éditorial + boutique sous une même identité",
      "Fondation SEO + tunnel d'achat optimisé",
    ],
  },
  {
    kinds: ["saas", "mobile"],
    objectives: [
      "Lancer un SaaS web avec son app mobile compagnon",
      "Une seule API, deux interfaces (web + mobile)",
    ],
  },
  {
    kinds: ["outil", "automatisation"],
    objectives: [
      "Automatiser un processus métier de bout en bout",
      "Remplacer plusieurs outils par un workflow unique",
    ],
  },
  {
    kinds: ["site", "outil"],
    objectives: [
      "Site vitrine côté client + back-office interne pour gérer",
    ],
  },

  // ── Build × Grow ──
  {
    kinds: ["site", "seo"],
    objectives: [
      "Lancer un site qui ranke dès le départ",
      "Architecture SEO intégrée dès le design (pas en patch)",
    ],
  },
  {
    kinds: ["site", "ads"],
    objectives: [
      "Site + tracking server-side mutualisé (économie sur le setup Ads)",
      "Page de conversion + acquisition payante alignées",
    ],
  },
  {
    kinds: ["site", "seo", "ads"],
    objectives: [
      "Acquisition full-funnel : SEO long terme + Ads court terme",
      "Stratégie d'acquisition hybride sur un site optimisé",
    ],
  },
  {
    kinds: ["ecommerce", "ads"],
    objectives: [
      "E-commerce + machine à acquisition Ads scalable",
      "Tracking server-side mutualisé pour ROAS fiable",
    ],
  },
  {
    kinds: ["ecommerce", "content"],
    objectives: [
      "Pipeline DTC : produit + contenu + UGC mensuel",
      "Production de creatives Ads en interne (pas de prestataire externe)",
    ],
  },
  {
    kinds: ["ecommerce", "ads", "content"],
    objectives: [
      "Stack DTC complète : tunnel + media + creatives intégrés",
    ],
  },
  {
    kinds: ["seo", "content"],
    objectives: [
      "Contenu SEO industriel (articles + vidéos liées)",
      "Autorité E-E-A-T via contenu vidéo et écrit",
    ],
  },

  // ── Build × Run ──
  {
    kinds: ["saas", "maintenance"],
    objectives: [
      "Lancer puis maintenir le SaaS sans dette",
      "Garantir uptime 99,9 %+ dès le lancement",
    ],
  },
  {
    kinds: ["ecommerce", "maintenance"],
    objectives: [
      "Boutique + run sécurisé (SLA, monitoring, patches)",
      "Garantir disponibilité pendant les pics de vente",
    ],
  },
  {
    kinds: ["site", "maintenance"],
    objectives: [
      "Site livré + run mensuel léger (Care)",
      "Évolutions et patches sans solliciter l'équipe interne",
    ],
  },

  // ── Run × Run ──
  {
    kinds: ["audit", "maintenance"],
    objectives: [
      "Reprendre un projet existant et stabiliser le run",
      "Audit puis sécurisation d'une application orpheline",
    ],
  },
  {
    kinds: ["audit", "security"],
    objectives: [
      "Audit complet + plan de remédiation RGPD/sécurité",
      "Préparer une due diligence ou certification SOC2",
    ],
  },

  // ── Trust combos ──
  {
    kinds: ["saas", "security"],
    objectives: [
      "SaaS B2B prêt pour les grands comptes (DPA, SOC2)",
      "Compliance dès la construction (privacy by design)",
    ],
  },
  {
    kinds: ["maintenance", "security"],
    objectives: [
      "Run + conformité RGPD continue (DPO mensuel)",
      "Gestion des incidents + audits de sécurité réguliers",
    ],
  },

  // ── Run × Build (combos manquants courants) ──
  {
    kinds: ["outil", "maintenance"],
    objectives: [
      "Outil interne + run mensuel (évolutions, patches, support)",
      "Internalisation progressive : outil + équipe dédiée à l'évolution",
    ],
  },
  {
    kinds: ["mobile", "maintenance"],
    objectives: [
      "App mobile + suivi versions iOS/Android (stores, hotfixes, support)",
    ],
  },
  {
    kinds: ["automatisation", "maintenance"],
    objectives: [
      "Automatisation + maintenance évolutive (logs, suivi des bugs, tunes)",
    ],
  },
  // Note : "refonte" is handled via the "audit" kind + description in the
  // funnel. The IA prompt detects refonte intent from the brief itself.

  // ── SaaS × Acquisition ──
  {
    kinds: ["saas", "ads"],
    objectives: [
      "SaaS B2B + acquisition LinkedIn / Google Ads ciblée",
      "Tracking server-side intégré au produit pour CAC fiable",
    ],
  },
  {
    kinds: ["saas", "seo"],
    objectives: [
      "SaaS + SEO programmatique (pages produit, comparatifs, integrations)",
    ],
  },
  {
    kinds: ["saas", "ads", "seo"],
    objectives: [
      "Stack acquisition complète pour un SaaS B2B (long terme + court terme)",
    ],
  },

  // ── Trust × Outil interne (cas RGPD ETI) ──
  {
    kinds: ["outil", "security"],
    objectives: [
      "Outil métier conforme RGPD (logs, droits, sous-traitants documentés)",
      "Compliance dès la conception pour éviter les audits CNIL",
    ],
  },

  // ── Content × Site / SEO ──
  {
    kinds: ["site", "content"],
    objectives: [
      "Site éditorial + production de contenu vidéo régulière",
    ],
  },
  {
    kinds: ["site", "saas", "seo"],
    objectives: [
      "Lancer un produit avec une fondation SEO solide dès le jour 1",
    ],
  },
  {
    kinds: ["site", "saas", "ads"],
    objectives: [
      "Lancer un produit avec acquisition payante synchronisée",
    ],
  },

  // ── Triplets stratégiques ──
  {
    kinds: ["site", "saas", "maintenance"],
    objectives: [
      "Lancer un produit complet (vitrine + app + run)",
      "Le pack standard d'une scale-up B2B française",
    ],
  },
  {
    kinds: ["audit", "maintenance", "security"],
    objectives: [
      "Reprise complète d'un héritage (audit + run + RGPD)",
      "Stabiliser une application avant nouvelles features",
    ],
  },
  {
    kinds: ["site", "outil", "maintenance"],
    objectives: [
      "Pack complet pour cabinet/PME : vitrine + back-office + run",
    ],
  },
  {
    kinds: ["seo", "ads"],
    objectives: [
      "Acquisition payante + SEO long terme alignés sur les mêmes pages",
    ],
  },
  {
    kinds: ["content", "ads"],
    objectives: [
      "Production interne de creatives Ads (zero externe = vitesse + ROAS)",
    ],
  },
];

function getObjectiveOptions(kinds: ProjectKindId[]): string[] {
  const normalized = normalizeProjectKinds(kinds);
  if (normalized.length === 0) return commonObjectives;

  const set = new Set(normalized);
  // Combo bonuses: every entry whose required kinds are ALL selected.
  // Multiple combos can apply at once (e.g. site+saas+maintenance picks
  // bonuses from "site+saas", "saas+maintenance", and the triplet).
  const bonuses = COMBO_BONUS_OBJECTIVES
    .filter((c) => c.kinds.every((k) => set.has(k)))
    .flatMap((c) => c.objectives);

  // Per-kind objectives (existing data) as secondary list.
  const perKind = normalized.flatMap((k) => objectivesByKind[k] || []);

  // Bonuses first → most contextually relevant. Then per-kind. Then commons.
  // Cap at 12 to keep the chip wall manageable.
  return unique([...bonuses, ...perKind, ...commonObjectives]).slice(0, 12);
}

function getFeatureOptions(kinds: ProjectKindId[]): string[] {
  return optionsForKind(kinds, featuresByKind, featureBase);
}

function getIntegrationOptions(kinds: ProjectKindId[]): string[] {
  return optionsForKind(kinds, integrationsByKind, integrationBase);
}

function getAssetOptions(kinds: ProjectKindId[]): string[] {
  return optionsForKind(kinds, assetsByKind, assetBase);
}

function getTimelineOptions(kinds: ProjectKindId[]): string[] {
  const dominant = getDominantKind(kinds);
  const specific = timelineByKind[dominant];
  return specific ? unique(specific) : timelineBase;
}

function getBudgetOptions(kinds: ProjectKindId[]): string[] {
  const dominant = getDominantKind(kinds);
  const specific = budgetByKind[dominant];
  return specific ? unique(specific) : budgetBase;
}

function getDecisionOptions(kinds: ProjectKindId[]): string[] {
  return unique([...normalizeProjectKinds(kinds).flatMap((kind) => decisionByKind[kind] || []), ...decisionBase]);
}

function getStepCopy(id: StepId, state: FunnelState) {
  const dominant = getDominantKind(state.projectKinds);
  if (id === "projet") {
    return {
      title: "Que souhaitez-vous construire, reprendre ou cadrer ?",
      help: "Cochez un ou plusieurs services. Les objectifs et questions suivantes s'ajustent selon vos choix.",
    };
  }
  if (id === "contexte" && dominant === "security") {
    return {
      title: "Décrivez le contexte sécurité / RGPD.",
      help: "On veut comprendre les données, les sous-traitants, les preuves attendues et ce qui bloque la vente ou la conformité.",
    };
  }
  if (id === "contexte" && ["maintenance", "audit"].includes(dominant)) {
    return {
      title: "Décrivez l'existant, les risques et les irritants.",
      help: "On veut comprendre ce qui tourne déjà, ce qui bloque, ce qui inquiète et ce qui doit être prouvé.",
    };
  }
  if (id === "contexte" && ["seo", "ads", "content"].includes(dominant)) {
    return {
      title: "Décrivez l'objectif de croissance.",
      help: "Trafic, leads, CAC, contenus, tracking : donnez le contexte actuel et la cible business.",
    };
  }
  if (id === "perimetre" && dominant === "security") {
    return {
      title: "Quels sujets de confiance faut-il couvrir ?",
      help: "On identifie les données, sous-traitants, droits, logs, consentements et preuves attendues.",
    };
  }
  if (id === "perimetre" && ["maintenance", "audit"].includes(dominant)) {
    return {
      title: "Quelles zones faut-il reprendre ou auditer ?",
      help: "Code, infra, monitoring, dette, sécurité, performance : on cerne les zones à regarder en priorité.",
    };
  }
  if (id === "perimetre" && ["seo", "ads", "content"].includes(dominant)) {
    return {
      title: "Quels leviers faut-il brancher ?",
      help: "On liste canaux, tracking, contenus, pages, reporting et actifs déjà disponibles.",
    };
  }
  if (id === "contraintes" && dominant === "maintenance") {
    return {
      title: "SLA, rythme, budget et niveau d'urgence.",
      help: "Le bon format dépend du risque en production, du rythme d'évolution et du niveau de support attendu.",
    };
  }
  if (id === "contraintes" && ["seo", "ads", "content"].includes(dominant)) {
    return {
      title: "Rythme, budget mensuel et décision.",
      help: "Ces réponses aident à choisir entre audit, sprint de lancement ou accompagnement récurrent.",
    };
  }
  return { title: steps.find((step) => step.id === id)?.title || "", help: steps.find((step) => step.id === id)?.help || "" };
}

function getContextFields(state: FunnelState) {
  const dominant = getDominantKind(state.projectKinds);
  // Placeholder par kind dominant — plus engageant qu'un placeholder
  // unique générique. L'utilisateur projette directement son cas.
  const SAAS_PLACEHOLDER =
    "Ex : on veut lancer un MVP B2B pour gérer les abonnements de notre cabinet de conseil. Dashboard client, facturation Stripe, intégration Pennylane. Cible 100 clients pros la 1re année. Budget ~30k.";
  const ECOM_PLACEHOLDER =
    "Ex : on veut migrer notre Shopify vers du sur-mesure. 800 SKU, 5000 commandes/an, intégration Sage et Chorus Pro. Marketplaces secondaire. Budget ~40k.";
  const MOBILE_PLACEHOLDER =
    "Ex : on veut une app mobile compagnon de notre SaaS web. Notifications push, mode hors-ligne, scan code-barres. iOS + Android. Budget ~20k.";
  const OUTIL_PLACEHOLDER =
    "Ex : on veut digitaliser le suivi de mission de notre cabinet (12 consultants). Aujourd'hui Excel + emails, on veut un outil avec timesheets, facturation auto Pennylane, mini espace client.";
  const SITE_PLACEHOLDER =
    "Ex : on veut refondre notre site corporate pour générer plus de leads. 15-20 pages, blog SEO, formulaire CRM, design haut de gamme. Cible DRH d'ETI 200-500 sal.";
  if (["maintenance", "audit"].includes(dominant)) {
    return {
      descriptionLabel: "Décrivez l'application existante et les problèmes connus",
      descriptionPlaceholder:
        "Ex : application Laravel en production, incidents récurrents sur la facturation, dépendances non mises à jour, besoin de reprendre le run et de prioriser la dette...",
      situationLabel: "Stack, accès et état actuel",
      situationPlaceholder: "Stack technique, hébergement, repo, CI/CD, monitoring, documentation, incidents récents...",
      audienceLabel: "Utilisateurs et criticité",
      audiencePlaceholder: "Utilisateurs internes, clients, volumes, horaires critiques, SLA attendu, impacts business...",
      scopeLabel: "Zones sensibles ou arbitrages",
      scopePlaceholder: "Modules fragiles, dette connue, risques sécurité, arbitrage reprise/refonte, contraintes de continuité...",
    };
  }
  if (dominant === "security") {
    return {
      descriptionLabel: "Décrivez le contexte sécurité / RGPD",
      descriptionPlaceholder:
        "Ex : un grand compte demande un DPA, on collecte des données sensibles, on doit clarifier les sous-traitants, logs, durées de conservation et transferts...",
      situationLabel: "Données et sous-traitants",
      situationPlaceholder: "Types de données, hébergement, outils tiers, pays, contrats, consentement, politique actuelle...",
      audienceLabel: "Qui doit être rassuré ?",
      audiencePlaceholder: "DPO, RSSI client, investisseur, direction, équipe interne, utilisateurs finaux...",
      scopeLabel: "Preuves et remédiations attendues",
      scopePlaceholder: "Registre, DPA, DPIA, logs, droits, chiffrement, consent mode, corrections à coder...",
    };
  }
  if (["seo", "ads", "content"].includes(dominant)) {
    return {
      descriptionLabel: "Décrivez le canal, la cible et le résultat attendu",
      descriptionPlaceholder:
        "Ex : on veut générer plus de leads qualifiés sur une offre B2B, aujourd'hui le tracking est flou, les pages convertissent peu et le contenu n'est pas structuré...",
      situationLabel: "Acquisition actuelle",
      situationPlaceholder: "Trafic, campagnes, contenus, Search Console, CRM, conversion, CAC, historique ou blocages...",
      audienceLabel: "Cible commerciale",
      audiencePlaceholder: "Personas, secteurs, panier moyen, cycle de vente, zones géographiques, volumes attendus...",
      scopeLabel: "Canaux et contenus prioritaires",
      scopePlaceholder: "SEO, ads, vidéo, landing pages, reporting, offres à pousser, preuves commerciales disponibles...",
    };
  }
  // Sélection du placeholder selon le kind dominant pour le champ
  // description principal. Les autres champs gardent un placeholder neutre.
  const descPlaceholder =
    dominant === "saas"
      ? SAAS_PLACEHOLDER
      : dominant === "ecommerce"
        ? ECOM_PLACEHOLDER
        : dominant === "mobile"
          ? MOBILE_PLACEHOLDER
          : dominant === "site"
            ? SITE_PLACEHOLDER
            : OUTIL_PLACEHOLDER;
  return {
    descriptionLabel: "Décrivez le projet aussi précisément que possible",
    descriptionPlaceholder: descPlaceholder,
    situationLabel: "Situation actuelle",
    situationPlaceholder: "Quels outils, fichiers ou process utilisez-vous aujourd'hui ?",
    audienceLabel: "Utilisateurs concernés",
    audiencePlaceholder: "Équipe interne, clients, prospects, partenaires, volume estimé...",
    scopeLabel: "Complément libre",
    scopePlaceholder: "Ajoutez les écrans, rôles, exports, règles métier, contraintes ou cas particuliers que vous avez en tête.",
  };
}

function isValidEmail(value: string): boolean {
  // RFC-light : exige TLD ≥ 2 chars ET un point dans la partie domaine
  // (rejette "test@test", "a@b").
  const v = value.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return false;
  const domain = v.split("@")[1] || "";
  return domain.includes(".") && !/\.\.|^\.|\.$/.test(domain);
}

/**
 * Validation Luhn du SIREN (norme INSEE).
 * Algorithme : on multiplie par 2 les chiffres en position paire (depuis
 * la droite, 0-indexed), on somme les chiffres résultants, le total doit
 * être divisible par 10.
 */
function isValidSiren(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  if (digits.length !== 9) return false;
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    let d = parseInt(digits[8 - i]!, 10);
    if (i % 2 === 1) {
      d *= 2;
      if (d > 9) d -= 9;
    }
    sum += d;
  }
  return sum % 10 === 0;
}

/**
 * Validation téléphone : accepte format E.164 (+33...) ou national FR
 * (0X XX XX XX XX). 10 chiffres après nettoyage = valide pour FR ;
 * commence par + et ≥ 8 chiffres = valide international.
 */
function isValidPhone(value: string): boolean {
  const v = value.trim();
  if (!v) return true; // optionnel
  if (v.startsWith("+")) {
    const digits = v.replace(/\D/g, "");
    return digits.length >= 8 && digits.length <= 15;
  }
  const digits = v.replace(/\D/g, "");
  return digits.length === 10 && /^0[1-9]/.test(digits);
}

function mapProjectType(state: FunnelState): string {
  const labels = normalizeProjectKinds(state.projectKinds)
    .map((id) => projectKinds.find((kind) => kind.id === id)?.label)
    .filter(Boolean);
  return labels.length > 0 ? labels.join(" + ") : "Préfère en discuter";
}

function makeLeadMessage(state: FunnelState, estimate: ReturnType<typeof computeEstimate>): string {
  const selectedKinds = state.projectKinds
    .map((id) => projectKinds.find((kind) => kind.id === id)?.label)
    .filter(Boolean)
    .join(", ");

  return [
    "Brief envoyé depuis le funnel de cadrage.",
    "",
    `Projet : ${selectedKinds || "Non précisé"}`,
    `Objectifs : ${state.objectives.length > 0 ? state.objectives.join(" · ") : "Non précisé"}`,
    `Échéance : ${state.timeline || "Non précisée"}`,
    `Budget déclaré : ${state.budget || "Non précisé"}`,
    `Maturité : ${state.decisionStage || "Non précisée"}`,
    `Pré-estimation affichée : ${estimate.combinedLabel}`,
    state.siren ? `SIREN : ${state.siren}` : "",
    "",
    "Description :",
    state.description || "Non renseigné",
    "",
    "Situation actuelle :",
    state.currentSituation || "Non renseignée",
    "",
    `Utilisateurs / audience : ${state.audience || "Non précisé"}`,
    `Fonctionnalités : ${state.mustHaves.join(", ") || "Non précisées"}`,
    `Intégrations : ${state.integrations.join(", ") || "Non précisées"}`,
    `Existant : ${state.existingAssets.join(", ") || "Non précisé"}`,
    "",
    "Périmètre libre :",
    state.openScope || "Non renseigné",
    "",
    `Rôle du contact : ${state.role || "Non précisé"}`,
  ].join("\n");
}

type FunnelEstimate = {
  oneshotMin: number;
  oneshotMax: number;
  monthlyMin: number;
  monthlyMax: number;
  oneshotLabel: string;
  monthlyLabel: string;
  combinedLabel: string;
  complexity: string;
  /** Legacy fields kept for the lead-mail formatter that already references them. */
  low: string;
  high: string;
};

/**
 * Live estimate. Backed by pricing-model.ts (real team costs × margins ×
 * AI productivity × risk × acq). Replaces a previous fictional formula
 * that was diverging from the actual /tarifs grid by 30-50 %.
 *
 * Returns separate oneshot vs monthly ranges so the display can surface
 * both ("12 000 – 25 000 € + 2 000 – 4 500 €/mois").
 */
function computeEstimate(state: FunnelState): FunnelEstimate {
  const services = state.projectKinds
    .map((k) => KIND_TO_SERVICE_ID[k])
    .filter((s): s is string => s !== null);

  let oneshotMin = 0;
  let oneshotMax = 0;
  let monthlyMin = 0;
  let monthlyMax = 0;

  for (const sid of services) {
    const oneshot = ONESHOT_BRICKS.find((b) => b.id === sid);
    if (oneshot) {
      const range = getOneshotRange(oneshot);
      oneshotMin += range.min;
      oneshotMax += range.max;
      continue;
    }
    const retainer = RETAINER_BRICKS.find((b) => b.id === sid);
    if (retainer) {
      const range = getRetainerRange(retainer);
      monthlyMin += range.min;
      monthlyMax += range.max;
    }
  }

  // Urgency premium on build only (retainers are per-month, urgency irrelevant).
  // Mirrors the /api/estimate prompt's "+30-50 % urgent" rule, conservatively.
  const urgencyFactor =
    state.timeline.toLowerCase().includes("immédiat") ||
    state.timeline === "Dès que possible" ||
    state.timeline.toLowerCase().includes("urgent")
      ? 1.25
      : state.timeline === "Dans 1 mois"
        ? 1.1
        : 1;
  oneshotMin = Math.round(oneshotMin * urgencyFactor);
  oneshotMax = Math.round(oneshotMax * urgencyFactor);

  // No oneshot AND no retainer (only "unknown" selected) → conservative
  // default that signals "à cadrer ensemble".
  if (oneshotMin === 0 && monthlyMin === 0) {
    oneshotMin = 8000;
    oneshotMax = 25000;
  }

  const oneshotLabel =
    oneshotMin > 0 ? `${formatThousands(oneshotMin)} – ${formatThousands(oneshotMax)} € HT` : "";
  const monthlyLabel =
    monthlyMin > 0 ? `${formatThousands(monthlyMin)} – ${formatThousands(monthlyMax)} €/mois HT` : "";

  let combinedLabel: string;
  if (oneshotLabel && monthlyLabel) {
    combinedLabel = `${oneshotLabel} (build) + ${monthlyLabel}`;
  } else {
    combinedLabel = oneshotLabel || monthlyLabel;
  }

  // Complexity heuristic — used to nuance the copy.
  const totalSignal = oneshotMax + monthlyMax * 12;
  const complexity =
    totalSignal > 90_000 || state.mustHaves.length >= 8
      ? "Élevée"
      : totalSignal > 35_000 || state.integrations.length >= 3
        ? "Intermédiaire"
        : "Cadrable rapidement";

  return {
    oneshotMin,
    oneshotMax,
    monthlyMin,
    monthlyMax,
    oneshotLabel,
    monthlyLabel,
    combinedLabel,
    complexity,
    low: oneshotLabel || monthlyLabel,
    high: combinedLabel,
  };
}

function formatThousands(n: number): string {
  return n.toLocaleString("fr-FR");
}

/**
 * Mirrors the FunnelProjectKindId → ServiceId map in funnel-to-input.ts
 * but inlined here as an object lookup (we don't import to avoid a hard
 * dependency cycle, and the IDs are tiny and stable).
 */
const KIND_TO_SERVICE_ID: Record<ProjectKindId, string | null> = {
  site: "site-vitrine",
  saas: "saas",
  mobile: "app-mobile",
  outil: "outil-interne",
  ecommerce: "ecommerce",
  seo: "seo",
  ads: "ads",
  content: "video",
  maintenance: "maintenance",
  audit: "audit-technique",
  security: "securite-rgpd",
  automatisation: "outil-interne",
  unknown: null,
};

/**
 * Résumé court d'un step pour l'afficher dans le sidebar (au lieu des
 * substeps génériques) une fois que l'utilisateur a renseigné quelque
 * chose. Donne un sentiment de progression et de cohérence.
 */
function summariseStep(id: StepId, state: FunnelState): string {
  if (id === "projet") {
    const kindLabels = normalizeProjectKinds(state.projectKinds)
      .map((k) => projectKinds.find((kind) => kind.id === k)?.label?.split(" ")[0])
      .filter(Boolean);
    if (kindLabels.length === 0) return "";
    const obj = state.objectives.length > 0 ? ` · ${state.objectives.length} obj.` : "";
    return `${kindLabels.length} service${kindLabels.length > 1 ? "s" : ""}${obj}`;
  }
  if (id === "contexte") {
    const len = state.description.trim().length;
    return len > 0 ? `${len} car. décrits` : "";
  }
  if (id === "perimetre") {
    const total = state.mustHaves.length + state.integrations.length + state.existingAssets.length;
    if (total === 0 && !state.openScope.trim()) return "";
    return `${total} cases${state.openScope.trim() ? " + texte" : ""}`;
  }
  if (id === "contraintes") {
    const parts: string[] = [];
    if (state.timeline) parts.push(state.timeline.split(" ")[0] || state.timeline);
    if (state.budget) parts.push(state.budget);
    return parts.join(" · ");
  }
  if (id === "contact") {
    if (state.firstName.trim() && state.email.trim()) {
      return `${state.firstName.trim()}${state.company.trim() ? " · " + state.company.trim() : ""}`;
    }
    return "";
  }
  return "";
}

function stepIsComplete(id: StepId, state: FunnelState): boolean {
  if (id === "projet") return state.projectKinds.length > 0 && state.objectives.length > 0;
  if (id === "contexte") return state.description.trim().length >= 40;
  if (id === "perimetre") return state.mustHaves.length > 0 || state.openScope.trim().length >= 20;
  if (id === "contraintes") return Boolean(state.timeline && state.budget && state.decisionStage);
  if (id === "contact") {
    // Phone et SIREN sont optionnels mais doivent être valides s'ils sont
    // remplis — éviter d'envoyer du déchet à l'équipe.
    const phoneOk = !state.phone.trim() || isValidPhone(state.phone);
    const sirenOk = !state.siren.replace(/\D/g, "") || isValidSiren(state.siren);
    return Boolean(
      state.firstName.trim() &&
        state.lastName.trim() &&
        isValidEmail(state.email.trim()) &&
        state.company.trim() &&
        state.consent &&
        phoneOk &&
        sirenOk,
    );
  }
  if (id === "recap") return true;
  return false;
}

function validationText(id: StepId): string {
  if (id === "projet") return "Sélectionnez au moins un type de projet et un objectif (vous pouvez en cocher plusieurs).";
  if (id === "contexte") return "Ajoutez au moins quelques phrases sur le besoin ou dictez-les au micro.";
  if (id === "perimetre") return "Cochez au moins une fonctionnalité ou décrivez le contenu librement.";
  if (id === "contraintes") return "Renseignez le délai, le budget et le niveau de décision (ou cochez « Préfère en discuter »).";
  if (id === "contact") return "Prénom, nom, email, entreprise et consentement sont requis pour envoyer le brief.";
  return "";
}

/**
 * Champ Objectifs — affiche 6 chips par défaut + lien "Voir plus" pour
 * les combos qui génèrent jusqu'à 12 options (saas + maintenance + sécurité
 * peut produire 10+ chips, c'est trop pour un coup d'œil).
 */
function ObjectivesField({
  options,
  selected,
  onToggle,
}: {
  options: string[];
  selected: string[];
  onToggle: (v: string) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const COLLAPSED_LIMIT = 6;
  const visible = expanded ? options : options.slice(0, COLLAPSED_LIMIT);
  const hidden = options.length - visible.length;
  // Toujours afficher les chips déjà sélectionnés même si dans la "queue".
  const merged = expanded
    ? options
    : [
        ...visible,
        ...options.slice(COLLAPSED_LIMIT).filter((o) => selected.includes(o)),
      ];

  return (
    <div className="pf-field">
      <label>
        Objectifs principaux
        <small> &middot; un ou plusieurs &middot; les options s&apos;adaptent à votre combinaison</small>
      </label>
      <div className="pf-chip-row">
        {merged.map((objective) => (
          <button
            key={objective}
            type="button"
            className={`pf-chip ${selected.includes(objective) ? "is-selected" : ""}`}
            onClick={() => onToggle(objective)}
          >
            {objective}
          </button>
        ))}
        {hidden > 0 && !expanded && (
          <button
            type="button"
            className="pf-chip pf-chip-more"
            onClick={() => setExpanded(true)}
          >
            + Voir {hidden} autre{hidden > 1 ? "s" : ""}
          </button>
        )}
        {expanded && options.length > COLLAPSED_LIMIT && (
          <button
            type="button"
            className="pf-chip pf-chip-more"
            onClick={() => setExpanded(false)}
          >
            − Réduire
          </button>
        )}
      </div>
    </div>
  );
}

function ButtonCheck({ active }: { active: boolean }) {
  return active ? <Check size={16} strokeWidth={2.4} /> : <Circle size={16} strokeWidth={1.8} />;
}

/**
 * Step 1 — grille groupée par famille (Build, Grow, Run, Trust) avec
 * compteur de cases cochées par famille et description courte. Évite le
 * mur de 12 cases pour un non-tech, et permet à un boucher de scanner
 * verticalement les 3-4 services qui le concernent.
 */
type FamilyId = "Build" | "Grow" | "Run" | "Trust";
const FAMILY_META: Record<FamilyId, { label: string; sub: string; Icon: typeof Hammer }> = {
  Build: { label: "Construire", sub: "Site, app, SaaS, outil interne", Icon: Hammer },
  Grow: { label: "Faire grandir", sub: "SEO, Ads, contenu vidéo", Icon: TrendingUp },
  Run: { label: "Maintenir / auditer", sub: "Run, audit, reprise", Icon: Wrench },
  Trust: { label: "Sécuriser", sub: "RGPD, DPO, conformité", Icon: ShieldCheck },
};

function ProjectKindsGroupedGrid({
  selected,
  onToggle,
}: {
  selected: ProjectKindId[];
  onToggle: (kindId: ProjectKindId) => void;
}) {
  const groups: Record<FamilyId, ProjectKind[]> = {
    Build: [],
    Grow: [],
    Run: [],
    Trust: [],
  };
  for (const kind of projectKinds) {
    if (kind.id === "unknown") continue;
    if (kind.family === "Build" || kind.family === "Grow" || kind.family === "Run" || kind.family === "Trust") {
      groups[kind.family].push(kind);
    }
  }

  return (
    <div className="pf-kind-groups">
      {(Object.keys(groups) as FamilyId[]).map((family) => {
        const items = groups[family];
        if (items.length === 0) return null;
        const meta = FAMILY_META[family];
        const selectedCount = items.filter((k) => selected.includes(k.id)).length;
        return (
          <details key={family} className="pf-kind-group" open>
            <summary className="pf-kind-group-summary">
              <span className="pf-kind-group-icon" aria-hidden="true">
                <meta.Icon size={20} strokeWidth={1.7} />
              </span>
              <span className="pf-kind-group-meta">
                <b>{meta.label}</b>
                <small>{meta.sub}</small>
              </span>
              {selectedCount > 0 && (
                <span className="pf-kind-group-count">{selectedCount} coché{selectedCount > 1 ? "s" : ""}</span>
              )}
              <span className="pf-kind-group-toggle" aria-hidden="true">▾</span>
            </summary>
            <div className="pf-kind-group-grid">
              {items.map((kind) => {
                const active = selected.includes(kind.id);
                return (
                  <button
                    key={kind.id}
                    type="button"
                    className={`pf-choice ${active ? "is-selected" : ""}`}
                    onClick={() => onToggle(kind.id)}
                    aria-pressed={active}
                  >
                    <span className="pf-choice-check"><ButtonCheck active={active} /></span>
                    <span>
                      <b>{kind.label}</b>
                      <small>{kind.text}</small>
                    </span>
                  </button>
                );
              })}
            </div>
          </details>
        );
      })}
    </div>
  );
}

function getRecorderMimeType(): string {
  if (typeof MediaRecorder === "undefined") return "";
  return [
    "audio/webm;codecs=opus",
    "audio/webm",
    "audio/mp4",
    "audio/mpeg",
    "audio/wav",
  ].find((type) => MediaRecorder.isTypeSupported(type)) || "";
}

function getAudioFilename(mimeType: string): string {
  if (mimeType.includes("mp4")) return "brief.m4a";
  if (mimeType.includes("mpeg")) return "brief.mp3";
  if (mimeType.includes("wav")) return "brief.wav";
  return "brief.webm";
}

type MicErrorKind = "denied" | "no-device" | "in-use" | "constraint" | "unsupported" | "other";

interface MicErrorDiagnostics {
  isSecureContext: boolean | null;
  hasMediaDevices: boolean;
  hasGetUserMedia: boolean;
  hasMediaRecorder: boolean;
  hasPermissionsAPI: boolean;
  permissionState: string;
  errorName: string;
  errorMessage: string;
  origin: string;
  userAgent: string;
}

interface MicError {
  kind: MicErrorKind;
  message: string;
  diag?: MicErrorDiagnostics;
}

function microphoneErrorMessage(error: unknown): MicError {
  const name = error instanceof DOMException ? error.name : "";
  if (name === "NotAllowedError" || name === "SecurityError") {
    return {
      kind: "denied",
      message:
        "Autorisation micro refusée par le navigateur. Autorisez l'accès, puis réessayez.",
    };
  }
  if (name === "NotFoundError" || name === "DevicesNotFoundError") {
    return { kind: "no-device", message: "Aucun micro détecté sur cet appareil." };
  }
  if (name === "NotReadableError" || name === "TrackStartError") {
    return {
      kind: "in-use",
      message:
        "Le micro est déjà utilisé. Fermez l'autre application qui l'occupe (Zoom, Meet, Discord…), puis réessayez.",
    };
  }
  if (name === "OverconstrainedError" || name === "ConstraintNotSatisfiedError") {
    return {
      kind: "constraint",
      message:
        "Le micro ne répond pas aux contraintes. Branchez un autre micro ou utilisez celui de l'ordinateur.",
    };
  }
  if (name === "NotSupportedError") {
    return {
      kind: "unsupported",
      message:
        "L'enregistrement audio n'est pas supporté par ce navigateur. Essayez depuis Chrome, Edge ou Safari récent.",
    };
  }
  return {
    kind: "other",
    message:
      "Impossible d'activer le micro. Pas grave : vous pouvez écrire le brief à la main, c'est tout aussi exploitable.",
  };
}

function VoiceTextarea({
  value,
  onChange,
  placeholder,
  minRows = 6,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  minRows?: number;
}) {
  const [recording, setRecording] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<MicError | null>(null);
  const [elapsedMs, setElapsedMs] = useState(0);
  const [audioLevel, setAudioLevel] = useState(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);

  // Cleanup web-audio resources when recording stops.
  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      audioContextRef.current?.close().catch(() => {});
    };
  }, []);

  const startRecording = useCallback(async () => {
    setError(null);
    // Diagnostic logging — surfaces all the conditions for getUserMedia.
    // Open DevTools → Console to see why a recording attempt fails.
    const diag = {
      isSecureContext: typeof window !== "undefined" ? window.isSecureContext : null,
      hasMediaDevices: Boolean(navigator.mediaDevices),
      hasGetUserMedia: Boolean(navigator.mediaDevices?.getUserMedia),
      hasMediaRecorder: typeof MediaRecorder !== "undefined",
      hasPermissionsAPI: Boolean(navigator.permissions?.query),
      userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
      origin: typeof window !== "undefined" ? window.location.origin : "",
    };
    console.log("[VoiceTextarea] startRecording diagnostics:", diag);

    if (!navigator.mediaDevices?.getUserMedia) {
      setError({
        kind: "unsupported",
        message: `La dictée vocale n'est pas disponible (mediaDevices=${diag.hasMediaDevices}, isSecureContext=${diag.isSecureContext}).`,
      });
      return;
    }
    if (typeof MediaRecorder === "undefined") {
      setError({
        kind: "unsupported",
        message:
          "L'enregistrement audio n'est pas supporté par ce navigateur. Essayez depuis Chrome, Edge ou Safari récent.",
      });
      return;
    }

    // Check the Permissions API state BEFORE getUserMedia so we can give
    // a precise diagnosis. Chrome implements it for "microphone".
    let permissionState: PermissionState | "unknown" = "unknown";
    if (navigator.permissions?.query) {
      try {
        const status = await navigator.permissions.query({
          name: "microphone" as PermissionName,
        });
        permissionState = status.state;
        console.log("[VoiceTextarea] permission state =", permissionState);
      } catch (permErr) {
        console.log("[VoiceTextarea] permissions.query failed:", permErr);
      }
    }

    let stream: MediaStream | null = null;
    try {
      console.log("[VoiceTextarea] calling getUserMedia…");
      stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });
      console.log("[VoiceTextarea] getUserMedia OK — tracks:", stream.getTracks().length);
      const preferredMimeType = getRecorderMimeType();
      const recorder = preferredMimeType
        ? new MediaRecorder(stream, { mimeType: preferredMimeType })
        : new MediaRecorder(stream);
      const mimeType = recorder.mimeType || preferredMimeType || "audio/webm";
      const activeStream = stream;
      mediaRecorderRef.current = recorder;
      chunksRef.current = [];

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) chunksRef.current.push(event.data);
      };
      recorder.onstop = async () => {
        setProcessing(true);
        activeStream.getTracks().forEach((track) => track.stop());
        try {
          const audio = new Blob(chunksRef.current, { type: mimeType });
          const formData = new FormData();
          formData.append("audio", audio, getAudioFilename(mimeType));
          const res = await fetch("/api/transcribe", { method: "POST", body: formData });
          const json = (await res.json().catch(() => ({}))) as { text?: string; error?: string };
          if (!res.ok) {
            setError({ kind: "other", message: json.error || "Transcription impossible pour le moment." });
            return;
          }
          if (json.text) {
            const next = value.trim() ? `${value.trim()}\n\n${json.text.trim()}` : json.text.trim();
            onChange(next);
          }
        } catch {
          setError({
            kind: "other",
            message: "La transcription a échoué. Vous pouvez écrire le brief à la main.",
          });
        } finally {
          setProcessing(false);
        }
      };

      recorder.start();
      setRecording(true);
      trackFunnelEvent("pf:voice_record_start", {});
      // Lance la viz audio (analyser FFT) et le timer.
      try {
        const AudioCtx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioCtx();
        const source = ctx.createMediaStreamSource(activeStream);
        const analyser = ctx.createAnalyser();
        analyser.fftSize = 256;
        source.connect(analyser);
        audioContextRef.current = ctx;
        analyserRef.current = analyser;
        startTimeRef.current = Date.now();
        const buf = new Uint8Array(analyser.frequencyBinCount);
        const tick = () => {
          analyser.getByteFrequencyData(buf);
          // RMS sur les 128 bins basses (voix humaine = 80-3000 Hz)
          let sum = 0;
          for (let i = 0; i < buf.length; i++) sum += buf[i]! * buf[i]!;
          const rms = Math.sqrt(sum / buf.length) / 255;
          setAudioLevel(Math.min(1, rms * 2.5));
          setElapsedMs(Date.now() - startTimeRef.current);
          rafRef.current = requestAnimationFrame(tick);
        };
        tick();
      } catch {
        /* viz audio optionnelle — pas bloquante si AudioContext fail */
      }
    } catch (err) {
      stream?.getTracks().forEach((track) => track.stop());
      const errName = err instanceof DOMException ? err.name : (err instanceof Error ? err.name : typeof err);
      const errMessage = err instanceof Error ? err.message : String(err);
      // Use console.log to avoid Next.js dev overlay treating this as an
      // unhandled error — the UI already surfaces the same info via setError.
      console.log("[VoiceTextarea] getUserMedia failed", { errName, errMessage, permissionState, diag });

      const fullDiag: MicErrorDiagnostics = {
        ...diag,
        permissionState,
        errorName: errName,
        errorMessage: errMessage,
      };

      const base = microphoneErrorMessage(err);
      // Enrich the message with the permission state so the UI helper
      // can pick the right instructions.
      const enriched: MicError = (() => {
        if (
          (errName === "NotAllowedError" || errName === "SecurityError") &&
          permissionState === "granted"
        ) {
          // Site has permission but the OS may still block Chrome at
          // the system level (macOS Settings → Privacy → Microphone).
          return {
            kind: "denied",
            message:
              "Le navigateur a la permission, mais le système a refusé l'accès. Vérifiez les Réglages macOS / Windows : Confidentialité → Microphone → Chrome doit être autorisé.",
            diag: fullDiag,
          };
        }
        if ((errName === "NotAllowedError" || errName === "SecurityError") && permissionState === "prompt") {
          return {
            kind: "denied",
            message:
              "L'autorisation a été fermée sans choisir. Cliquez à nouveau sur Dicter et choisissez « Autoriser ».",
            diag: fullDiag,
          };
        }
        return { ...base, diag: fullDiag };
      })();
      setError(enriched);
    }
  }, [onChange, value]);

  const stopRecording = useCallback(() => {
    if (!mediaRecorderRef.current || !recording) return;
    mediaRecorderRef.current.stop();
    setRecording(false);
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    audioContextRef.current?.close().catch(() => {});
    audioContextRef.current = null;
    analyserRef.current = null;
    setAudioLevel(0);
    setElapsedMs(0);
  }, [recording]);

  return (
    <div className="pf-voice-field">
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={minRows}
        placeholder={placeholder}
      />
      <div className="pf-voice-toolbar">
        {recording ? (
          <div className="pf-voice-meter" aria-hidden="true">
            <span className="pf-voice-timer">
              {Math.floor(elapsedMs / 60000)}:
              {String(Math.floor(elapsedMs / 1000) % 60).padStart(2, "0")}
            </span>
            <span className="pf-voice-bars">
              {[0.2, 0.4, 0.6, 0.8, 1.0, 0.8, 0.6, 0.4, 0.2].map((mult, i) => (
                <span
                  key={i}
                  className="pf-voice-bar"
                  style={{
                    transform: `scaleY(${Math.max(0.15, audioLevel * mult * 1.2)})`,
                  }}
                />
              ))}
            </span>
          </div>
        ) : (
          <span>{processing ? "Transcription en cours..." : "Vous pouvez écrire ou dicter votre réponse."}</span>
        )}
        <button
          type="button"
          className={`pf-mic ${recording ? "is-recording" : ""}`}
          onClick={recording ? stopRecording : startRecording}
          disabled={processing}
        >
          {processing ? (
            <Loader2 size={16} className="pf-spin" />
          ) : recording ? (
            <Pause size={16} />
          ) : (
            <Mic size={16} />
          )}
          {recording ? "Arrêter" : "Dicter"}
        </button>
      </div>
      {error && (
        <div className="pf-mic-error" role="alert">
          <div className="pf-mic-error-head">
            <strong>{error.message}</strong>
            <button
              type="button"
              className="pf-mic-error-dismiss"
              onClick={() => setError(null)}
              aria-label="Fermer le message d'erreur"
            >
              <X size={14} />
            </button>
          </div>
          {error.kind === "denied" && (
            <details className="pf-mic-error-help" open>
              <summary>Comment autoriser le micro ?</summary>
              <ol>
                <li>
                  <b>1. Niveau site (navigateur)</b> — cliquez sur l&apos;icône{" "}
                  <span className="pf-kbd">🔒</span> à gauche de l&apos;URL →
                  « Paramètres du site » → <b>Microphone : Autoriser</b> →{" "}
                  <b>rechargez la page</b> (Chrome affiche parfois une bannière « Actualiser » en haut).
                </li>
                <li>
                  <b>2. Niveau système (macOS)</b> — Réglages Système →
                  Confidentialité et sécurité → <b>Microphone</b> → vérifiez que{" "}
                  <b>Google Chrome</b> (ou Safari/Firefox) est <b>activé</b>. C&apos;est
                  la cause #1 des refus persistants après autorisation site.
                </li>
                <li>
                  <b>2bis. Niveau système (Windows)</b> — Paramètres → Confidentialité
                  → Microphone → autoriser les applications de bureau et Chrome.
                </li>
                <li>
                  <b>Safari</b> : menu Safari → Réglages → Sites web → Microphone →
                  trouvez ce site et passez sur <b>Autoriser</b>.
                </li>
                <li>
                  <b>Firefox</b> : icône cadenas → permissions → Microphone : <b>Autorisé</b>.
                </li>
              </ol>
              <p>
                Pas grave si ça reste bloqué : <b>vous pouvez écrire votre réponse à
                la main</b> dans la zone de texte au-dessus, l&apos;IA traite les
                deux de la même façon.
              </p>
            </details>
          )}
          {error.diag && (
            <details className="pf-mic-error-help pf-mic-error-diag" open>
              <summary>Détails techniques</summary>
              <pre>{`isSecureContext   : ${error.diag.isSecureContext}
hasMediaDevices   : ${error.diag.hasMediaDevices}
hasGetUserMedia   : ${error.diag.hasGetUserMedia}
hasMediaRecorder  : ${error.diag.hasMediaRecorder}
hasPermissionsAPI : ${error.diag.hasPermissionsAPI}
permissionState   : ${error.diag.permissionState}
errorName         : ${error.diag.errorName}
errorMessage      : ${error.diag.errorMessage}
origin            : ${error.diag.origin}
userAgent         : ${error.diag.userAgent.slice(0, 80)}…`}</pre>
              <button
                type="button"
                className="pf-mic-retry"
                onClick={() => {
                  if (error.diag) {
                    void navigator.clipboard
                      .writeText(JSON.stringify(error.diag, null, 2))
                      .catch(() => {});
                  }
                }}
              >
                Copier le diagnostic
              </button>
            </details>
          )}
          <button
            type="button"
            className="pf-mic-retry"
            onClick={() => {
              setError(null);
              void startRecording();
            }}
          >
            <Mic size={13} /> Réessayer
          </button>
        </div>
      )}
    </div>
  );
}

export function ProjectFunnel() {
  const [activeStep, setActiveStep] = useState(0);
  // Always initialize with INITIAL_STATE so SSR and the first client
  // render produce identical markup. Hydration of any saved draft happens
  // in a post-mount useEffect below — this is the canonical pattern to
  // avoid the "Hydration failed because the server rendered text didn't
  // match the client" warning on data that lives in localStorage.
  const [state, setState] = useState<FunnelState>(INITIAL_STATE);
  const [hydrated, setHydrated] = useState(false);
  // Cloudflare Turnstile token — récolté avant submit pour anti-bot.
  // Si TURNSTILE_ENABLED est false (NEXT_PUBLIC_TURNSTILE_SITE_KEY absent),
  // on bypass : le bouton submit est actif sans token et /api/estimate
  // skip aussi la vérification (mode dev).
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [showValidation, setShowValidation] = useState(false);
  const [skippedSteps, setSkippedSteps] = useState<Set<StepId>>(new Set());
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  // Hydrate the saved draft after mount. Client-only (useEffect doesn't
  // run on the server), so SSR markup matches the first client render.
  // Si un résultat IA précédent est en cache local, on le re-affiche
  // directement — l'utilisateur peut refresh ou revenir le lendemain
  // pour retrouver son estimation sans tout refaire.
  // Hydration depuis localStorage : pattern canonical SSR-safe pour
  // synchroniser React avec un système externe (le storage navigateur).
  // La règle react-hooks/set-state-in-effect est volontairement désactivée
  // pour ce cas légitime — le setState dépend uniquement de la lecture
  // synchrone d'un storage externe et ne se relance jamais (deps = []).
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    try {
      const rawResult = window.localStorage.getItem(RESULT_STORAGE_KEY);
      if (rawResult) {
        const parsed = JSON.parse(rawResult) as {
          aiResult?: MultiServiceEstimate;
          aiTokens?: number;
          email?: string;
        };
        if (parsed.aiResult) {
          setStatus({
            kind: "success",
            aiResult: parsed.aiResult,
            aiTokens: parsed.aiTokens || 0,
          });
          if (parsed.email) {
            setState((prev) => ({ ...prev, email: parsed.email || prev.email }));
          }
          setHydrated(true);
          return;
        }
      }
      const raw = window.localStorage.getItem(DRAFT_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<FunnelState>;
        // Toujours arriver sur la page avec aucun service coché — l'utilisateur
        // doit re-sélectionner explicitement, même s'il avait sauvegardé un brouillon.
        setState((prev) => ({ ...prev, ...parsed, projectKinds: [] }));
      }
    } catch {
      /* corrupt JSON / private mode — ignore */
    }
    setHydrated(true);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  // Persist on every state change once hydrated. We delay until hydration
  // finishes so the empty INITIAL_STATE doesn't overwrite a real draft.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!hydrated) return;
    if (status.kind === "success") return;
    try {
      window.localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* quota / private mode — ignore */
    }
  }, [state, status.kind, hydrated]);

  // Fire one open event per session — we use sessionStorage to avoid
  // double-firing on Strict Mode double-mounts in dev.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const key = "pf:opened";
    if (window.sessionStorage.getItem(key)) return;
    window.sessionStorage.setItem(key, "1");
    trackFunnelEvent("pf:funnel_open", {});
  }, []);
  const current = steps[activeStep]!;
  const currentCopy = useMemo(() => getStepCopy(current.id, state), [current.id, state]);
  const contextFields = useMemo(() => getContextFields(state), [state]);
  const objectiveOptions = useMemo(() => getObjectiveOptions(state.projectKinds), [state.projectKinds]);
  const featureOptions = useMemo(() => getFeatureOptions(state.projectKinds), [state.projectKinds]);
  const integrationOptions = useMemo(() => getIntegrationOptions(state.projectKinds), [state.projectKinds]);
  const assetOptions = useMemo(() => getAssetOptions(state.projectKinds), [state.projectKinds]);
  const timelineOptions = useMemo(() => getTimelineOptions(state.projectKinds), [state.projectKinds]);
  const budgetOptions = useMemo(() => getBudgetOptions(state.projectKinds), [state.projectKinds]);
  const decisionOptions = useMemo(() => getDecisionOptions(state.projectKinds), [state.projectKinds]);
  const estimate = useMemo(() => computeEstimate(state), [state]);
  const completedStepCount = steps.filter((step) => step.id !== "recap" && stepIsComplete(step.id, state)).length;

  function patch<K extends keyof FunnelState>(key: K, value: FunnelState[K]) {
    setState((prev) => ({ ...prev, [key]: value }));
  }

  function setProjectKinds(nextKinds: ProjectKindId[]) {
    const nextObjectives = getObjectiveOptions(nextKinds);
    const nextFeatures = getFeatureOptions(nextKinds);
    const nextIntegrations = getIntegrationOptions(nextKinds);
    const nextAssets = getAssetOptions(nextKinds);
    const nextTimelines = getTimelineOptions(nextKinds);
    const nextBudgets = getBudgetOptions(nextKinds);
    const nextDecisions = getDecisionOptions(nextKinds);

    setState((prev) => ({
      ...prev,
      projectKinds: nextKinds,
      // Keep only the previously selected objectives that are still valid
      // for the new combination. Switching from "saas" alone to "saas+ads"
      // surfaces the combo bonuses but doesn't lose what the user already picked.
      objectives: prev.objectives.filter((o) => nextObjectives.includes(o)),
      mustHaves: prev.mustHaves.filter((item) => nextFeatures.includes(item)),
      integrations: prev.integrations.filter((item) => nextIntegrations.includes(item)),
      existingAssets: prev.existingAssets.filter((item) => nextAssets.includes(item)),
      timeline: prev.timeline && nextTimelines.includes(prev.timeline) ? prev.timeline : "",
      budget: prev.budget && nextBudgets.includes(prev.budget) ? prev.budget : "",
      decisionStage: prev.decisionStage && nextDecisions.includes(prev.decisionStage) ? prev.decisionStage : "",
    }));
  }

  function canContinue() {
    if (current.id === "recap") return stepIsComplete("contact", state);
    if (skippedSteps.has(current.id)) return true;
    return stepIsComplete(current.id, state);
  }

  function goNext() {
    if (!canContinue()) {
      setShowValidation(true);
      trackFunnelEvent("pf:step_validation_block", { step: current.id });
      return;
    }
    setShowValidation(false);
    trackFunnelEvent("pf:step_complete", {
      step: current.id,
      index: activeStep,
      services: state.projectKinds.length,
    });
    if (activeStep < steps.length - 1) setActiveStep((step) => step + 1);
  }

  function goBack() {
    setShowValidation(false);
    if (activeStep > 0) setActiveStep((step) => step - 1);
  }

  function skipCurrent() {
    setSkippedSteps((prev) => {
      const next = new Set(prev);
      next.add(current.id);
      return next;
    });
    setShowValidation(false);
    trackFunnelEvent("pf:step_skip", { step: current.id, index: activeStep });
    if (activeStep < steps.length - 1) setActiveStep((step) => step + 1);
  }

  // Steps that allow being skipped — leave perimetre and contraintes
  // optional for users who can't or don't want to fill them.
  const isSkippable = current.id === "perimetre" || current.id === "contraintes";

  async function submitBrief() {
    if (!stepIsComplete("contact", state)) {
      setShowValidation(true);
      setActiveStep(4);
      return;
    }
    setStatus({ kind: "submitting", phase: 0 });
    const message = makeLeadMessage(state, estimate);
    const wantsAi = canSubmitToEstimateApi(state);
    trackFunnelEvent("pf:submit_start", {
      services: state.projectKinds.length,
      with_ai: wantsAi,
      has_siren: state.siren.replace(/\D/g, "").length === 9,
      has_phone: Boolean(state.phone.trim()),
    });

    // STEP 1 — Lead capture + mail (always). Sequential first call so the
    // DB row gets created and we receive a briefId/Slug to attach the AI
    // estimate to next. The ~1s wait is negligible against the 30-60s
    // Claude call that follows.
    let briefId: number | null = null;
    let briefSlug: string | null = null;
    let mailOk = false;
    let mailError = "";
    try {
      const mailRes = await fetch("/api/project-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // Legacy fields used by the existing email template
          firstName: state.firstName.trim(),
          lastName: state.lastName.trim(),
          email: state.email.trim(),
          company: state.company.trim(),
          phone: state.phone.trim(),
          projectType: mapProjectType(state),
          timeline: state.timeline,
          budget: state.budget,
          message,
          honeypot: state.honeypot,
          // Full funnel state for DB persistence (project_brief table)
          role: state.role.trim(),
          siren: state.siren,
          projectKinds: state.projectKinds,
          objectives: state.objectives,
          description: state.description,
          currentSituation: state.currentSituation,
          audience: state.audience,
          mustHaves: state.mustHaves,
          integrations: state.integrations,
          existingAssets: state.existingAssets,
          openScope: state.openScope,
          decisionStage: state.decisionStage,
          estimateOneshotMin: estimate.oneshotMin || null,
          estimateOneshotMax: estimate.oneshotMax || null,
          estimateMonthlyMin: estimate.monthlyMin || null,
          estimateMonthlyMax: estimate.monthlyMax || null,
          consent: state.consent,
        }),
      });
      const mailJson = (await mailRes.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        errors?: Record<string, string>;
        briefId?: number;
        briefSlug?: string;
      };
      mailOk = mailRes.ok;
      mailError =
        mailJson.error ||
        Object.values(mailJson.errors || {}).join(" ") ||
        (mailOk ? "" : "Le brief n'a pas pu être envoyé par email.");
      briefId = mailJson.briefId ?? null;
      briefSlug = mailJson.briefSlug ?? null;
    } catch {
      mailError = "Impossible de contacter le serveur d'envoi.";
    }

    // STEP 2 — AI estimate. Pass briefId so the route can write the
    // result back to the same DB row.
    let aiData: MultiServiceEstimate | undefined;
    let aiTokens: number | undefined;
    if (wantsAi) {
      try {
        const aiRes = await fetch("/api/estimate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...mapFunnelStateToCalculatorInput(state),
            briefId,
            // Cloudflare Turnstile token (anti-bot). Vérifié server-side
            // avant l'appel Anthropic. Null si pas configuré (mode dev).
            turnstileToken: turnstileToken || undefined,
          }),
        });
        const aiJson = (await aiRes.json()) as EstimateApiResponse;
        if (aiRes.ok && aiJson.ok) {
          aiData = aiJson.result;
          aiTokens = aiJson.tokens_used;
        }
      } catch {
        /* AI failed — mail might still have succeeded */
      }
    }

    // Outcome dispatch
    if (mailOk || aiData) {
      setStatus({ kind: "success", aiResult: aiData, aiTokens });
      trackFunnelEvent("pf:submit_success", {
        mail_ok: mailOk,
        ai_ok: Boolean(aiData),
        tokens: aiTokens || 0,
      });
      try {
        window.localStorage.removeItem(DRAFT_STORAGE_KEY);
        if (briefSlug !== null) {
          window.localStorage.setItem(BRIEF_ID_STORAGE_KEY, briefSlug);
        }
        // Cache local du résultat IA → un refresh ne perd plus
        // l'estimation ; partage facile vers son CTO.
        if (aiData) {
          window.localStorage.setItem(
            RESULT_STORAGE_KEY,
            JSON.stringify({ aiResult: aiData, aiTokens, email: state.email }),
          );
        }
      } catch {
        /* ignore */
      }
      return;
    }

    trackFunnelEvent("pf:submit_error", { mail_error: mailError });
    setStatus({
      kind: "error",
      message:
        mailError ||
        "Impossible d'envoyer le brief pour le moment. Réessayez dans un instant.",
    });
  }

  function restart() {
    setState(INITIAL_STATE);
    setStatus({ kind: "idle" });
    setActiveStep(0);
    setShowValidation(false);
    try {
      window.localStorage.removeItem(DRAFT_STORAGE_KEY);
      window.localStorage.removeItem(BRIEF_ID_STORAGE_KEY);
      window.localStorage.removeItem(RESULT_STORAGE_KEY);
    } catch {
      /* ignore */
    }
    trackFunnelEvent("pf:restart", {});
  }

  return (
    <div className="pf-root">
      <header className="pf-topbar">
        <div className="pf-top-left">
          <Link href="/" className="pf-brand" aria-label="Retour à l'accueil Hagnéré Code">
            <span className="pf-brand-mark">HC</span>
            <span><b>Hagnéré</b> Code</span>
          </Link>
          <div className="pf-breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <span>Démarrer un nouveau projet</span>
          </div>
        </div>
        <nav className="pf-topnav" aria-label="Navigation secondaire">
          <Link href="/" className="pf-site-return">
            <ArrowLeft size={16} strokeWidth={2} />
            <span>Retour au site vitrine</span>
          </Link>
        </nav>
      </header>

      {status.kind === "submitting" ? (
        <FunnelLoadingView />
      ) : status.kind === "success" && status.aiResult ? (
        <ResultView
          result={status.aiResult}
          tokensUsed={status.aiTokens || 0}
          contactEmail={state.email}
          onRestart={restart}
          briefId={(typeof window !== "undefined" && window.localStorage.getItem(BRIEF_ID_STORAGE_KEY)) || null}
        />
      ) : status.kind === "success" ? (
        <FunnelMailSentView email={state.email} onRestart={restart} />
      ) : (
      <main className="pf-shell">
        <aside className="pf-sidebar" aria-label="Progression du cadrage">
          <div className="pf-side-card">
            <div className="pf-side-top">
              <span className="pf-kicker"><Sparkles size={14} /> Cadrage projet</span>
              <span className="pf-count">{activeStep + 1}/{steps.length}</span>
            </div>
            <h1>Démarrer un projet, sans brief interminable.</h1>
            <p>
              On récupère les informations utiles, on clarifie le périmètre, puis on prépare
              une première base de chiffrage.
            </p>
            <div className="pf-progress-block">
              <div className="pf-progress-meta">
                <span>Étape {activeStep + 1} sur {steps.length}</span>
                <b>{completedStepCount} étape{completedStepCount > 1 ? "s" : ""} validée{completedStepCount > 1 ? "s" : ""}</b>
              </div>
              <div className="pf-progress-segments" aria-label={`Progression : étape ${activeStep + 1} sur ${steps.length}`}>
                {steps.map((step, index) => {
                  const complete = step.id !== "recap" && stepIsComplete(step.id, state);
                  return (
                    <span
                      key={step.id}
                      className={`${complete ? "is-complete" : ""} ${index === activeStep ? "is-active" : ""}`}
                    />
                  );
                })}
              </div>
            </div>

            <div className="pf-stepper">
              {steps.map((step, index) => {
                const active = index === activeStep;
                const complete = step.id === "recap" ? index < activeStep : stepIsComplete(step.id, state);
                const unlocked = index <= activeStep || steps.slice(0, index).every((item) => stepIsComplete(item.id, state));
                const summary = summariseStep(step.id, state);
                return (
                  <button
                    key={step.id}
                    type="button"
                    className={`pf-stepper-item ${active ? "is-active" : ""} ${complete ? "is-complete" : ""}`}
                    onClick={() => {
                      if (!unlocked) return;
                      setShowValidation(false);
                      setActiveStep(index);
                    }}
                    disabled={!unlocked}
                  >
                    <span className="pf-step-index">{complete ? <Check size={14} /> : String(index + 1).padStart(2, "0")}</span>
                    <span className="pf-step-meta">
                      <b>{step.label}</b>
                      {summary ? (
                        <small className="pf-step-values">{summary}</small>
                      ) : (
                        <small>{step.substeps.join(" · ")}</small>
                      )}
                    </span>
                    {active && <ChevronRight size={16} />}
                  </button>
                );
              })}
            </div>

            <div className="pf-side-note">
              <ShieldCheck size={16} />
              <span>Pré-cadrage gratuit. Les données servent uniquement à qualifier votre demande.</span>
            </div>
            {hydrated && (
              <div className="pf-saved-badge" aria-live="polite">
                <Check size={11} strokeWidth={3} />
                <span>Sauvegardé localement — tu peux fermer et revenir.</span>
              </div>
            )}
          </div>
        </aside>

        <section className="pf-main-card" aria-live="polite">
          <div className="pf-card-head">
            <div>
              <span className="pf-eyebrow">Étape {activeStep + 1} / {steps.length}</span>
              <h2>{currentCopy.title}</h2>
              <p>{currentCopy.help}</p>
            </div>
            <div className="pf-estimate-pill">
              <Timer size={16} />
              <span>5-7 min</span>
            </div>
          </div>

          <div className="pf-card-body" key={current.id} data-step={current.id}>
            {current.id === "projet" && (
              <div className="pf-stack">
                <ProjectKindsGroupedGrid
                  selected={state.projectKinds}
                  onToggle={(kindId) =>
                    setProjectKinds(toggleProjectKind(state.projectKinds, kindId))
                  }
                />

                <button
                  type="button"
                  className={`pf-unknown-cta ${state.projectKinds.includes("unknown") ? "is-selected" : ""}`}
                  onClick={() =>
                    setProjectKinds(
                      toggleProjectKind(state.projectKinds, "unknown"),
                    )
                  }
                >
                  <span className="pf-unknown-cta-icon">
                    <HelpCircle size={20} strokeWidth={1.7} />
                  </span>
                  <span>
                    <b>Je ne sais pas encore</b>
                    <small>Tu as un problème métier mais pas la bonne forme — on cadre ensemble.</small>
                  </span>
                </button>

                <ObjectivesField
                  options={objectiveOptions}
                  selected={state.objectives}
                  onToggle={(v) =>
                    patch("objectives", toggleArray(state.objectives, v))
                  }
                />

                <div className="pf-social-proof">
                  <div className="pf-social-proof-item">
                    <b>Forfait</b>
                    <span>fixe contractuel</span>
                  </div>
                  <div className="pf-social-proof-divider" aria-hidden="true" />
                  <div className="pf-social-proof-item">
                    <b>100 %</b>
                    <span>livrés à l&apos;heure</span>
                  </div>
                  <div className="pf-social-proof-divider" aria-hidden="true" />
                  <div className="pf-social-proof-item">
                    <b>30 j</b>
                    <span>warranty post-launch</span>
                  </div>
                </div>
              </div>
            )}

            {current.id === "contexte" && (
              <div className="pf-stack">
                <div className="pf-field">
                  <label>{contextFields.descriptionLabel}</label>
                  <VoiceTextarea
                    value={state.description}
                    onChange={(value) => patch("description", value)}
                    placeholder={contextFields.descriptionPlaceholder}
                    minRows={8}
                  />
                </div>
                <div className="pf-split">
                  <div className="pf-field">
                    <label>{contextFields.situationLabel}</label>
                    <VoiceTextarea
                      value={state.currentSituation}
                      onChange={(value) => patch("currentSituation", value)}
                      minRows={4}
                      placeholder={contextFields.situationPlaceholder}
                    />
                  </div>
                  <div className="pf-field">
                    <label>{contextFields.audienceLabel}</label>
                    <VoiceTextarea
                      value={state.audience}
                      onChange={(value) => patch("audience", value)}
                      minRows={4}
                      placeholder={contextFields.audiencePlaceholder}
                    />
                  </div>
                </div>
              </div>
            )}

            {current.id === "perimetre" && (
              <div className="pf-stack">
                <div className="pf-field">
                  <label>Fonctionnalités possibles</label>
                  <div className="pf-chip-grid">
                    {featureOptions.map((item) => (
                      <button
                        key={item}
                        type="button"
                        className={`pf-chip ${state.mustHaves.includes(item) ? "is-selected" : ""} ${termTitle(item) ? "has-tooltip" : ""}`}
                        onClick={() => patch("mustHaves", toggleArray(state.mustHaves, item))}
                        title={termTitle(item)}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="pf-split">
                  <div className="pf-field">
                    <label>Intégrations à prévoir</label>
                    <div className="pf-chip-grid compact">
                      {integrationOptions.map((item) => (
                        <button
                          key={item}
                          type="button"
                          className={`pf-chip ${state.integrations.includes(item) ? "is-selected" : ""} ${termTitle(item) ? "has-tooltip" : ""}`}
                          onClick={() => patch("integrations", toggleArray(state.integrations, item))}
                          title={termTitle(item)}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="pf-field">
                    <label>Ce qui existe déjà</label>
                    <div className="pf-chip-grid compact">
                      {assetOptions.map((item) => (
                        <button
                          key={item}
                          type="button"
                          className={`pf-chip ${state.existingAssets.includes(item) ? "is-selected" : ""} ${termTitle(item) ? "has-tooltip" : ""}`}
                          onClick={() => patch("existingAssets", toggleArray(state.existingAssets, item))}
                          title={termTitle(item)}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="pf-field">
                  <label>{contextFields.scopeLabel}</label>
                  <VoiceTextarea
                    value={state.openScope}
                    onChange={(value) => patch("openScope", value)}
                    placeholder={contextFields.scopePlaceholder}
                    minRows={5}
                  />
                </div>
              </div>
            )}

            {current.id === "contraintes" && (
              <div className="pf-stack">
                <div className="pf-split">
                  <RadioBlock title="Échéance visée" values={timelineOptions} value={state.timeline} onChange={(value) => patch("timeline", value)} />
                  <RadioBlock title="Budget envisagé" values={budgetOptions} value={state.budget} onChange={(value) => patch("budget", value)} />
                </div>
                <RadioBlock
                  title="Où en êtes-vous dans la décision ?"
                  values={decisionOptions}
                  value={state.decisionStage}
                  onChange={(value) => patch("decisionStage", value)}
                />
                <div className="pf-insight">
                  <ClipboardList size={18} />
                  <div>
                    <b>Fourchette indicative (pré-IA)</b>
                    {estimate.oneshotLabel && (
                      <span><strong>Build :</strong> {estimate.oneshotLabel}</span>
                    )}
                    {estimate.monthlyLabel && (
                      <span><strong>Récurrent :</strong> {estimate.monthlyLabel}</span>
                    )}
                    <span>
                      <em>Calcul brut</em> sur les briques cochées. L&apos;IA affinera ±20-30%
                      selon synergies, urgence et description du brief — la vraie
                      fourchette s&apos;affiche à la fin.
                    </span>
                  </div>
                </div>
              </div>
            )}

            {current.id === "contact" && (
              <div className="pf-stack">
                <div className="pf-split">
                  <TextInput icon={<UserRound size={16} />} label="Prénom" value={state.firstName} onChange={(value) => patch("firstName", value)} />
                  <TextInput label="Nom" value={state.lastName} onChange={(value) => patch("lastName", value)} />
                </div>
                <div className="pf-split">
                  <TextInput
                    icon={<Mail size={16} />}
                    label="Email professionnel"
                    value={state.email}
                    onChange={(value) => patch("email", value)}
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="prenom@entreprise.com"
                    error={
                      state.email.trim() && !isValidEmail(state.email.trim())
                        ? "Adresse email invalide."
                        : undefined
                    }
                  />
                  <TextInput
                    icon={<Phone size={16} />}
                    label="Téléphone"
                    value={state.phone}
                    onChange={(value) => patch("phone", value)}
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="06 12 34 56 78"
                    optional
                    hint="Format FR (06…) ou international (+33…)"
                    error={
                      state.phone.trim() && !isValidPhone(state.phone)
                        ? "Numéro invalide. 10 chiffres en France ou format international."
                        : undefined
                    }
                  />
                </div>
                <SirenLookup
                  siren={state.siren}
                  onSirenChange={(v) => patch("siren", v)}
                  onCompanyFound={(name) => patch("company", name)}
                />
                <div className="pf-split">
                  <TextInput label="Entreprise" value={state.company} onChange={(value) => patch("company", value)} />
                  <TextInput label="Rôle / fonction" value={state.role} onChange={(value) => patch("role", value)} optional />
                </div>
                <label className={`pf-consent ${!state.consent && showValidation ? "is-required" : ""} ${state.consent ? "is-checked" : ""}`}>
                  <input
                    type="checkbox"
                    checked={state.consent}
                    onChange={(event) => patch("consent", event.target.checked)}
                  />
                  <span className="pf-consent-box" aria-hidden="true">
                    {state.consent && <Check size={12} strokeWidth={3} />}
                  </span>
                  <span className="pf-consent-text">
                    <b>Consentement RGPD</b>
                    <small>
                      J&apos;accepte que Hagnéré Code utilise mes coordonnées pour
                      analyser ma demande et me recontacter. Mes données ne sont
                      jamais transmises à un tiers et peuvent être supprimées sur
                      simple demande à quentin@hagnere-patrimoine.fr.
                    </small>
                  </span>
                </label>
                <input
                  className="pf-hp"
                  tabIndex={-1}
                  autoComplete="off"
                  value={state.honeypot}
                  onChange={(event) => patch("honeypot", event.target.value)}
                  aria-hidden="true"
                  // Hardening : si la classe CSS .pf-hp ne charge pas, le champ
                  // reste invisible/inintéressant pour un humain mais détectable
                  // par les bots qui remplissent tous les inputs.
                  style={{
                    position: "absolute",
                    left: "-9999px",
                    top: "auto",
                    width: 1,
                    height: 1,
                    overflow: "hidden",
                    opacity: 0,
                  }}
                />
              </div>
            )}

            {current.id === "recap" && (
              <div className="pf-recap">
                <div className="pf-result-card">
                  <div>
                    <span className="pf-eyebrow">Pré-estimation (avant analyse IA)</span>
                    <strong>{estimate.combinedLabel}</strong>
                    <p>
                      Fourchette indicative basée sur les briques cochées, les
                      intégrations et l&apos;urgence. L&apos;IA Claude Opus 4.7 va
                      maintenant analyser ton brief en détail pour produire un
                      chiffrage multi-volets, une roadmap et l&apos;équipe à allouer.
                    </p>
                  </div>
                  <div className="pf-result-meta">
                    <span>{estimate.complexity}</span>
                    <span>{state.timeline || "Délai à préciser"}</span>
                  </div>
                </div>

                <div className="pf-summary-grid">
                  <SummaryBlock
                    icon={<Layers3 size={18} />}
                    label="Projet"
                    value={normalizeProjectKinds(state.projectKinds).map((id) => projectKinds.find((kind) => kind.id === id)?.label).filter(Boolean).join(", ") || "Non précisé"}
                    onEdit={() => { setActiveStep(0); setShowValidation(false); }}
                  />
                  <SummaryBlock
                    icon={<Sparkles size={18} />}
                    label={state.objectives.length > 1 ? "Objectifs" : "Objectif"}
                    value={state.objectives.length > 0 ? state.objectives.join(" · ") : "Non précisé"}
                    onEdit={() => { setActiveStep(0); setShowValidation(false); }}
                  />
                  <SummaryBlock
                    icon={<Code2 size={18} />}
                    label="Briques"
                    value={state.mustHaves.length > 0 ? `${state.mustHaves.length} cochée${state.mustHaves.length > 1 ? "s" : ""}` : "À cadrer"}
                    onEdit={() => { setActiveStep(2); setShowValidation(false); }}
                  />
                  <SummaryBlock
                    icon={<FileText size={18} />}
                    label="Budget"
                    value={state.budget || "Non précisé"}
                    onEdit={() => { setActiveStep(3); setShowValidation(false); }}
                  />
                  <SummaryBlock
                    icon={<Timer size={18} />}
                    label="Échéance"
                    value={state.timeline || "Non précisée"}
                    onEdit={() => { setActiveStep(3); setShowValidation(false); }}
                  />
                  <SummaryBlock
                    icon={<UserRound size={18} />}
                    label="Contact"
                    value={`${state.firstName} ${state.lastName} · ${state.company || "—"}`}
                    onEdit={() => { setActiveStep(4); setShowValidation(false); }}
                  />
                </div>

                <div className="pf-brief-preview">
                  <b>Brief transmis</b>
                  <p>{state.description || "Votre description apparaîtra ici."}</p>
                </div>

                {TURNSTILE_ENABLED && (
                  <TurnstileWidget
                    onToken={setTurnstileToken}
                    onExpire={() => setTurnstileToken(null)}
                  />
                )}

                <button
                  type="button"
                  className="pf-submit"
                  onClick={submitBrief}
                  disabled={TURNSTILE_ENABLED && !turnstileToken}
                  aria-disabled={TURNSTILE_ENABLED && !turnstileToken}
                  title={
                    TURNSTILE_ENABLED && !turnstileToken
                      ? "Vérification anti-bot en cours…"
                      : undefined
                  }
                >
                  <Send size={18} />
                  Lancer l&apos;analyse IA et envoyer le brief
                </button>

                <div className="pf-reassure">
                  <div className="pf-reassure-item">
                    <Timer size={14} />
                    <span><b>30 à 60 s</b> &middot; durée moyenne de l&apos;analyse</span>
                  </div>
                  <div className="pf-reassure-item">
                    <Sparkles size={14} />
                    <span><b>Gratuit, sans engagement</b> &middot; tu peux fermer l&apos;onglet</span>
                  </div>
                  <div className="pf-reassure-item">
                    <ShieldCheck size={14} />
                    <span><b>Tes données restent privées</b> &middot; pas de revente, conforme RGPD</span>
                  </div>
                  <div className="pf-reassure-item">
                    <Mail size={14} />
                    <span><b>Réponse humaine sous 24 h</b> &middot; Quentin ou Nicolas te recontacte</span>
                  </div>
                </div>

                {status.kind === "error" && <div className="pf-field-error">{status.message}</div>}
              </div>
            )}
          </div>

          {showValidation && current.id !== "recap" && (
            <div className="pf-validation" role="alert">
              {validationText(current.id)}
            </div>
          )}

          {current.id !== "recap" && (
            <div className="pf-actions">
              <button type="button" className="pf-secondary" onClick={goBack} disabled={activeStep === 0}>
                <ArrowLeft size={16} />
                Retour
              </button>
              {isSkippable && (
                <button
                  type="button"
                  className="pf-skip"
                  onClick={skipCurrent}
                  aria-label="Passer cette étape sans répondre"
                >
                  Passer cette étape
                </button>
              )}
              <button type="button" className="pf-primary" onClick={goNext}>
                Continuer
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </section>
      </main>
      )}
    </div>
  );
}

// =====================================================================
// Loading view — shown while /api/estimate runs (30-60s typical).
// Phase ticker mirrors EstimerMonProjet's so the wait feels intentional.
// =====================================================================

function FunnelLoadingView() {
  const [phase, setPhase] = useState(0);
  const [elapsedSec, setElapsedSec] = useState(0);
  const phases = [
    "Lecture du brief multi-services…",
    "Croisement avec les barèmes Sprint Fixe™…",
    "Détection des synergies (tracking mutualisé, retainers décalés)…",
    "Choix de la stack et de l'équipe à allouer…",
    "Construction de la roadmap de déploiement…",
    "Rédaction de l'estimation finale…",
  ];
  useEffect(() => {
    const phaseId = setInterval(
      () => setPhase((p) => Math.min(p + 1, phases.length - 1)),
      6000,
    );
    const tickId = setInterval(() => setElapsedSec((s) => s + 1), 1000);
    return () => {
      clearInterval(phaseId);
      clearInterval(tickId);
    };
  }, [phases.length]);

  // Messages contextuels selon le temps écoulé.
  const longRunNote =
    elapsedSec > 90
      ? "C'est plus long qu'à l'habitude — on tient bon. Tu peux fermer l'onglet, l'estimation arrivera par email si tu as renseigné ton mail."
      : elapsedSec > 45
        ? "C'est presque fini — l'IA termine la rédaction des phases."
        : null;

  return (
    <main className="pf-shell pf-shell-loading">
      <div className="pf-loading-card" role="status" aria-live="polite" aria-busy="true">
        <div className="pf-loading-orb">
          <Sparkles size={28} />
          <span className="pf-loading-pulse" />
        </div>
        <div className="pf-loading-tag">
          <span className="dot" />
          CLAUDE OPUS 4.7 · ANALYSE DU BRIEF · {Math.floor(elapsedSec / 60)}:{String(elapsedSec % 60).padStart(2, "0")}
        </div>
        <h2 className="pf-loading-title">
          On chiffre votre projet
          <br />
          <span className="pf-grad">comme un Discovery élargi.</span>
        </h2>
        <p className="pf-loading-sub">
          L&apos;IA croise les services, détecte les synergies, choisit la stack
          et renvoie une fourchette globale + un plan de déploiement cohérent.
          30 à 60 secondes en moyenne.
        </p>
        <div className="pf-loading-phases">
          {phases.map((label, i) => (
            <div
              key={label}
              className={`pf-loading-phase ${
                i < phase ? "is-done" : i === phase ? "is-active" : ""
              }`}
            >
              <span className="pf-loading-phase-dot">
                {i < phase ? (
                  <Check size={11} strokeWidth={3} />
                ) : i === phase ? (
                  <Loader2 size={11} className="pf-spin" />
                ) : null}
              </span>
              <span>{label}</span>
            </div>
          ))}
        </div>
        {longRunNote && (
          <div className="pf-loading-longrun" role="status">
            <Loader2 size={13} className="pf-spin" />
            <span>{longRunNote}</span>
          </div>
        )}
      </div>
    </main>
  );
}

// =====================================================================
// Mail-sent view — fallback when AI couldn't run (only "unknown" was
// selected) or AI failed but the lead mail went through.
// =====================================================================

function FunnelMailSentView({
  email,
  onRestart,
}: {
  email: string;
  onRestart: () => void;
}) {
  return (
    <main className="pf-shell pf-shell-success">
      <div className="pf-success-card">
        <div className="pf-success-icon">
          <Check size={28} strokeWidth={2.4} />
        </div>
        <h2>Brief envoyé à l&apos;équipe.</h2>
        <p>
          On a bien reçu votre demande{email ? <> à <b>{email}</b></> : null}.
          Quentin ou Nicolas revient vers vous sous 24 h ouvrées avec une
          fourchette ferme et 3 créneaux Discovery.
          <br />
          <br />
          Pour gagner 24 h&nbsp;: réservez directement un créneau Discovery
          (gratuit, 30 min, sans engagement).
        </p>
        <div className="pf-success-actions">
          <a
            href="https://calendly.com/hagnere-patrimoine/hagnere-code-entretien-de-decouverte"
            target="_blank"
            rel="noopener noreferrer"
            className="pf-primary"
          >
            Réserver 30 min Discovery
            <ArrowRight size={16} />
          </a>
          <Link href="/realisations" className="pf-secondary">
            Voir les réalisations
          </Link>
          <button type="button" className="pf-secondary" onClick={onRestart}>
            Refaire un brief
          </button>
        </div>
      </div>
    </main>
  );
}

function RadioBlock({
  title,
  values,
  value,
  onChange,
}: {
  title: string;
  values: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="pf-field">
      <label>{title}</label>
      <div className="pf-radio-list">
        {values.map((item) => (
          <button
            key={item}
            type="button"
            className={`pf-radio ${value === item ? "is-selected" : ""}`}
            onClick={() => onChange(item)}
          >
            <ButtonCheck active={value === item} />
            <span>{item}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function TextInput({
  label,
  value,
  onChange,
  icon,
  type = "text",
  optional = false,
  error,
  hint,
  inputMode,
  autoComplete,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  icon?: ReactNode;
  type?: string;
  optional?: boolean;
  error?: string;
  hint?: string;
  inputMode?: "text" | "tel" | "email" | "numeric";
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <label className={`pf-field ${error ? "is-invalid" : ""}`}>
      <span>
        {label}
        {optional && <small> optionnel</small>}
      </span>
      <div className="pf-input-wrap">
        {icon}
        <input
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          inputMode={inputMode}
          autoComplete={autoComplete}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
        />
      </div>
      {error && <small className="pf-field-error-inline">{error}</small>}
      {!error && hint && <small className="pf-field-hint">{hint}</small>}
    </label>
  );
}

// =====================================================================
// SIRENE auto-fill — typing 9 digits triggers a lookup against the
// French government's open business registry (recherche-entreprises.api.gouv.fr).
// On success, the company name is auto-filled in the parent state.
// =====================================================================

type SirenStatus =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "found"; name: string }
  | { kind: "error"; message: string };

function SirenLookup({
  siren,
  onSirenChange,
  onCompanyFound,
}: {
  siren: string;
  onSirenChange: (v: string) => void;
  onCompanyFound: (name: string) => void;
}) {
  const [status, setStatus] = useState<SirenStatus>({ kind: "idle" });
  const lastQueryRef = useRef("");

  const digitsOnly = siren.replace(/\D/g, "").slice(0, 9);
  const display = formatSirenForDisplay(digitsOnly);

  const lookup = useCallback(
    async (clean: string) => {
      if (clean.length !== 9) return;
      if (lastQueryRef.current === clean) return;
      lastQueryRef.current = clean;
      setStatus({ kind: "loading" });
      try {
        const res = await fetch(`/api/sirene?siren=${encodeURIComponent(clean)}`);
        const json = (await res.json().catch(() => ({}))) as {
          companyName?: string;
          error?: string;
        };
        if (!res.ok || !json.companyName) {
          setStatus({
            kind: "error",
            message: json.error || "Aucune entreprise trouvée pour ce SIREN.",
          });
          trackFunnelEvent("pf:siren_lookup_fail", { reason: json.error || "not_found" });
          return;
        }
        setStatus({ kind: "found", name: json.companyName });
        onCompanyFound(json.companyName);
        trackFunnelEvent("pf:siren_lookup_success", {});
      } catch {
        setStatus({
          kind: "error",
          message: "Le service SIRENE est indisponible. Saisissez le nom à la main.",
        });
        trackFunnelEvent("pf:siren_lookup_fail", { reason: "network" });
      }
    },
    [onCompanyFound],
  );

  // Lookups are dispatched directly from the input handler (not from an
  // effect) so React's set-state-in-effect rule stays happy and the
  // intent is clearer: the user just typed the 9th digit → fire.
  function handleChange(raw: string) {
    const nextDigits = raw.replace(/\D/g, "").slice(0, 9);
    if (nextDigits.length === 9) {
      // Vérif Luhn AVANT de hit l'API gouv : si la clé est fausse, autant
      // épargner le call et donner un feedback immédiat.
      if (!isValidSiren(nextDigits)) {
        lastQueryRef.current = nextDigits;
        setStatus({
          kind: "error",
          message: "SIREN invalide (clé de contrôle incorrecte). Vérifiez la saisie.",
        });
      } else {
        void lookup(nextDigits);
      }
    } else if (status.kind !== "idle") {
      lastQueryRef.current = "";
      setStatus({ kind: "idle" });
    }
    onSirenChange(raw);
  }

  function clear() {
    onSirenChange("");
    setStatus({ kind: "idle" });
  }

  return (
    <label className="pf-field pf-siren">
      <span>
        SIREN <small>optionnel — auto-remplit le nom de l&apos;entreprise</small>
      </span>
      <div className="pf-input-wrap pf-siren-wrap">
        <Building2 size={16} />
        <input
          type="text"
          inputMode="numeric"
          autoComplete="off"
          value={display}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="123 456 789"
          aria-describedby="pf-siren-status"
        />
        {status.kind === "loading" && (
          <span className="pf-siren-icon" aria-hidden="true">
            <Loader2 size={14} className="pf-spin" />
          </span>
        )}
        {status.kind === "found" && (
          <span className="pf-siren-icon pf-siren-ok" aria-hidden="true">
            <Check size={14} strokeWidth={2.6} />
          </span>
        )}
        {status.kind === "error" && (
          <button
            type="button"
            className="pf-siren-icon pf-siren-clear"
            onClick={clear}
            aria-label="Effacer le SIREN"
          >
            <X size={14} />
          </button>
        )}
      </div>
      <div id="pf-siren-status" className="pf-siren-status" role="status">
        {status.kind === "idle" && digitsOnly.length > 0 && digitsOnly.length < 9 && (
          <span className="pf-siren-hint">
            <Search size={12} /> {9 - digitsOnly.length} chiffre
            {9 - digitsOnly.length > 1 ? "s" : ""} restant
            {9 - digitsOnly.length > 1 ? "s" : ""}
          </span>
        )}
        {status.kind === "loading" && <span>Recherche INSEE…</span>}
        {status.kind === "found" && (
          <span className="pf-siren-success">
            <Check size={12} strokeWidth={2.6} /> {status.name}
          </span>
        )}
        {status.kind === "error" && (
          <span className="pf-siren-error">{status.message}</span>
        )}
      </div>
    </label>
  );
}

function formatSirenForDisplay(digits: string): string {
  // Group SIREN as "123 456 789" for readability.
  const parts: string[] = [];
  for (let i = 0; i < digits.length; i += 3) {
    parts.push(digits.slice(i, i + 3));
  }
  return parts.join(" ");
}

function SummaryBlock({
  icon,
  label,
  value,
  onEdit,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  onEdit?: () => void;
}) {
  return (
    <div className="pf-summary-block">
      <span>{icon}</span>
      <small>{label}</small>
      <b>{value}</b>
      {onEdit && (
        <button
          type="button"
          className="pf-summary-edit"
          onClick={onEdit}
          aria-label={`Modifier ${label.toLowerCase()}`}
        >
          Modifier
        </button>
      )}
    </div>
  );
}
