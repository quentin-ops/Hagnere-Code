// Shared types between the calculator wizard (frontend) and the
// /api/estimate route (backend).

// =====================================================================
// INPUT — what the user submits (validated server-side too)
// =====================================================================

export const PROJECT_TYPES = [
  "saas",
  "site-vitrine",
  "outil-interne",
  "ecommerce",
  "app-mobile",
  "refonte",
] as const;
export type ProjectType = (typeof PROJECT_TYPES)[number];

export const PROJECT_TYPE_LABELS: Record<ProjectType, string> = {
  saas: "SaaS B2B / B2C",
  "site-vitrine": "Site vitrine ou landing",
  "outil-interne": "Outil interne / back-office",
  ecommerce: "E-commerce",
  "app-mobile": "App mobile iOS/Android",
  refonte: "Refonte d'un projet existant",
};

export const URGENCY_LEVELS = [
  "urgent",
  "1-month",
  "3-months",
  "6-months",
  "no-rush",
] as const;
export type UrgencyLevel = (typeof URGENCY_LEVELS)[number];

export const URGENCY_LABELS: Record<UrgencyLevel, string> = {
  urgent: "Urgent (< 2 sem.)",
  "1-month": "Sous 1 mois",
  "3-months": "Sous 2-3 mois",
  "6-months": "Sous 6 mois",
  "no-rush": "Pas pressé(e)",
};

export const FEATURE_OPTIONS = [
  { id: "auth", label: "Authentification & gestion des utilisateurs" },
  { id: "billing", label: "Facturation / paiement (Stripe, etc.)" },
  { id: "ai", label: "Agents IA / extraction par LLM" },
  { id: "dashboards", label: "Dashboards & visualisations de données" },
  { id: "multi-tenant", label: "Multi-tenant (plusieurs organisations)" },
  { id: "permissions", label: "Permissions complexes / rôles" },
  { id: "real-time", label: "Temps-réel (notifications, chat, présence)" },
  { id: "mobile", label: "App mobile (en plus du web)" },
  { id: "cms", label: "CMS éditable par l'équipe (sans dev)" },
  { id: "api-public", label: "API publique / webhooks" },
  { id: "i18n", label: "Multi-langue (i18n)" },
  { id: "blog-seo", label: "Blog & SEO technique" },
  { id: "search", label: "Moteur de recherche avancé" },
  { id: "exports", label: "Exports (PDF, Excel, CSV, comptables)" },
] as const;
export type FeatureId = (typeof FEATURE_OPTIONS)[number]["id"];

export const INTEGRATION_OPTIONS = [
  { id: "stripe", label: "Stripe" },
  { id: "pennylane", label: "Pennylane" },
  { id: "hubspot", label: "HubSpot" },
  { id: "salesforce", label: "Salesforce" },
  { id: "slack", label: "Slack" },
  { id: "notion", label: "Notion" },
  { id: "google-workspace", label: "Google Workspace" },
  { id: "microsoft365", label: "Microsoft 365" },
  { id: "openai", label: "OpenAI / Claude / Mistral" },
  { id: "twilio", label: "Twilio (SMS / WhatsApp)" },
  { id: "loops", label: "Loops / Resend (emails transactionnels)" },
  { id: "github", label: "GitHub" },
  { id: "shopify", label: "Shopify" },
  { id: "other", label: "Autre (préciser dans la description)" },
] as const;
export type IntegrationId = (typeof INTEGRATION_OPTIONS)[number]["id"];

export interface CalculatorInput {
  projectType: ProjectType;
  screensCount: number; // 1-100
  usersCount: "small" | "medium" | "large" | "huge"; // <50, 50-500, 500-5k, 5k+
  features: FeatureId[];
  integrations: IntegrationId[];
  urgency: UrgencyLevel;
  description: string; // free-form description (50-2000 chars)
  // Contact (optional — required for downloading PDF later)
  email?: string;
  firstName?: string;
  company?: string;
  // Anti-bot
  honeypot?: string;
}

// =====================================================================
// OUTPUT — what Claude returns (enforced via JSON schema server-side)
// =====================================================================

export type Confidence = "low" | "medium" | "high";
export type SuggestedPlan =
  | "Discovery uniquement"
  | "Essentiel"
  | "Standard"
  | "Sur-mesure"
  | "Care+ mensuel (scope évolutif)";
export type RiskSeverity = "low" | "medium" | "high";

export interface PriceRange {
  min: number;
  max: number;
  midpoint: number;
  currency: "EUR";
}

export interface DurationRange {
  min: number;
  max: number;
  midpoint: number;
}

export interface EstimateSummary {
  project_type_label: string;
  estimated_price: PriceRange;
  estimated_duration_weeks: DurationRange;
  suggested_plan: SuggestedPlan;
  confidence: Confidence;
  one_liner: string; // 1-2 sentence summary
}

export interface EstimateDiscovery {
  duration_days: number;
  price: number;
  deliverables: string[];
}

export interface PhasingWeek {
  week: number;
  name: string;
  tasks: string[];
  friday_demo: string; // what is shown at the friday demo
}

export interface EstimateStack {
  backend: string[];
  frontend: string[];
  data: string[];
  integrations: string[];
  hosting: string;
}

export interface EstimateRisk {
  title: string;
  severity: RiskSeverity;
  mitigation: string;
}

export interface EstimateLagniappe {
  feature_idea: string;
  why_it_helps: string;
  estimated_added_days: number;
}

export interface EstimateResult {
  summary: EstimateSummary;
  discovery: EstimateDiscovery;
  phasing: PhasingWeek[];
  stack: EstimateStack;
  risks: EstimateRisk[];
  lagniappe: EstimateLagniappe;
  warnings: string[];
  not_a_good_fit_warning?: string; // populated when the project is outside our sweet spot
  next_steps: string[];
}

// =====================================================================
// API contract
// =====================================================================

export type EstimateApiResponse =
  | { ok: true; result: EstimateResult; tokens_used: number }
  | { ok: false; error: string; field_errors?: Record<string, string> };
