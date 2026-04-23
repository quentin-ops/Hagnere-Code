// =====================================================================
// Calculator types — multi-services
// Aligned with the site's "Services" dropdown (3 categories, 12 services).
// =====================================================================

// =====================================================================
// SERVICE CATALOG
// =====================================================================

export const SERVICE_CATEGORIES = ["construire", "faire-grandir", "proteger"] as const;
export type ServiceCategory = (typeof SERVICE_CATEGORIES)[number];

export const CATEGORY_LABELS: Record<ServiceCategory, string> = {
  construire: "Construire",
  "faire-grandir": "Faire grandir",
  proteger: "Protéger & opérer",
};

export const CATEGORY_SUBS: Record<ServiceCategory, string> = {
  construire: "Forfaits projet (Sprint Fixe™)",
  "faire-grandir": "Prestations mensuelles (retainers)",
  proteger: "Run, sécurité & audit",
};

export const SERVICE_IDS = [
  // Construire — forfait one-shot
  "site-vitrine",
  "saas",
  "outil-interne",
  "ecommerce",
  "app-mobile",
  "refonte",
  // Faire grandir — retainer
  "seo",
  "ads",
  "video",
  // Protéger & opérer — mixte
  "maintenance",
  "securite-rgpd",
  "audit-technique",
] as const;
export type ServiceId = (typeof SERVICE_IDS)[number];

export interface ServiceDef {
  id: ServiceId;
  category: ServiceCategory;
  label: string;
  shortLabel: string; // for compact UI
  pricingModel: "oneshot" | "retainer" | "mixed";
  description: string; // 1 line, shown under the checkbox
}

export const SERVICES: Record<ServiceId, ServiceDef> = {
  // ── CONSTRUIRE ──
  "site-vitrine": {
    id: "site-vitrine",
    category: "construire",
    label: "Site vitrine ou landing",
    shortLabel: "Site vitrine",
    pricingModel: "oneshot",
    description: "Showcase, conversion, blog SEO. 6–35 k€",
  },
  saas: {
    id: "saas",
    category: "construire",
    label: "SaaS / appli métier",
    shortLabel: "SaaS",
    pricingModel: "oneshot",
    description: "Plateforme B2B/B2C, multi-tenant, IA. 25–120 k€",
  },
  "outil-interne": {
    id: "outil-interne",
    category: "construire",
    label: "Outil interne / back-office",
    shortLabel: "Outil interne",
    pricingModel: "oneshot",
    description: "CRM, workflow, automatisation. 8–80 k€",
  },
  ecommerce: {
    id: "ecommerce",
    category: "construire",
    label: "E-commerce sur mesure",
    shortLabel: "E-commerce",
    pricingModel: "oneshot",
    description: "Boutique haut de gamme, Shopify Plus. 10–150 k€",
  },
  "app-mobile": {
    id: "app-mobile",
    category: "construire",
    label: "App mobile iOS / Android",
    shortLabel: "App mobile",
    pricingModel: "oneshot",
    description: "React Native, push, hors-ligne. +10–60 k€",
  },
  refonte: {
    id: "refonte",
    category: "construire",
    label: "Refonte d'un projet existant",
    shortLabel: "Refonte",
    pricingModel: "oneshot",
    description: "Migration, modernisation. 15–120 k€ + audit",
  },

  // ── FAIRE GRANDIR ──
  seo: {
    id: "seo",
    category: "faire-grandir",
    label: "SEO & référencement",
    shortLabel: "SEO",
    pricingModel: "retainer",
    description: "Audit, contenu, tech, netlinking. 2,5–5 k€/mois",
  },
  ads: {
    id: "ads",
    category: "faire-grandir",
    label: "Publicité en ligne",
    shortLabel: "Ads",
    pricingModel: "retainer",
    description: "Google, Meta, LinkedIn + tracking. 1,8–4,5 k€/mois",
  },
  video: {
    id: "video",
    category: "faire-grandir",
    label: "Contenu & vidéo",
    shortLabel: "Vidéo",
    pricingModel: "retainer",
    description: "YouTube, motion, UGC. 2,5–6,9 k€/mois",
  },

  // ── PROTÉGER & OPÉRER ──
  maintenance: {
    id: "maintenance",
    category: "proteger",
    label: "Maintenance & évolution",
    shortLabel: "Maintenance",
    pricingModel: "retainer",
    description: "Run, monitoring, SLA, évos mensuelles. 2,5–14 k€/mois",
  },
  "securite-rgpd": {
    id: "securite-rgpd",
    category: "proteger",
    label: "Sécurité & RGPD / DPO",
    shortLabel: "Sécurité",
    pricingModel: "mixed",
    description: "Cadrage + DPO mensuel + sprints. 5 k€ + 1,2–3,5 k€/mois",
  },
  "audit-technique": {
    id: "audit-technique",
    category: "proteger",
    label: "Audit technique",
    shortLabel: "Audit tech",
    pricingModel: "oneshot",
    description: "Code review, perf, sécurité, archi. 6–15 k€",
  },
};

// Ordered list grouped by category — for UI rendering
export const SERVICES_BY_CATEGORY: Record<ServiceCategory, ServiceDef[]> = {
  construire: SERVICE_IDS.filter((id) => SERVICES[id].category === "construire").map(
    (id) => SERVICES[id],
  ),
  "faire-grandir": SERVICE_IDS.filter((id) => SERVICES[id].category === "faire-grandir").map(
    (id) => SERVICES[id],
  ),
  proteger: SERVICE_IDS.filter((id) => SERVICES[id].category === "proteger").map(
    (id) => SERVICES[id],
  ),
};

// =====================================================================
// SHARED — urgency
// =====================================================================

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

export const URGENCY_SUBS: Record<UrgencyLevel, string> = {
  urgent: "+30-50 % de surcoût · projets < 15 k€ uniquement",
  "1-month": "Délai serré, scope cadrable nécessaire",
  "3-months": "Sweet spot Sprint Fixe™ — la plupart des projets",
  "6-months": "Confortable, possibilité de Care+ évolutif",
  "no-rush": "Optimisation max coût/qualité",
};

// =====================================================================
// PER-SERVICE QUESTION MODULES (typed answers)
// One module per service. The wizard renders only the modules whose
// service was checked at step 1.
// =====================================================================

// Site vitrine
export interface SiteVitrineAnswers {
  pages: "small" | "medium" | "large" | "xlarge"; // 5/10/20/30+
  multilang: boolean;
  cms: boolean;
  blogSeo: boolean;
  abTesting: boolean;
}

// SaaS
export interface SaasAnswers {
  screens: number; // 5-50
  users: "small" | "medium" | "large" | "huge";
  features: SaasFeatureId[];
}
export const SAAS_FEATURES = [
  { id: "auth-rbac", label: "Authentification & rôles complexes" },
  { id: "billing", label: "Facturation Stripe / abonnements" },
  { id: "ai", label: "Agent IA / extraction LLM" },
  { id: "multi-tenant", label: "Multi-tenant (plusieurs orgs)" },
  { id: "real-time", label: "Temps-réel (chat, présence)" },
  { id: "exports", label: "Exports PDF / Excel / FEC" },
  { id: "api-public", label: "API publique + webhooks" },
  { id: "i18n", label: "Multi-langue" },
] as const;
export type SaasFeatureId = (typeof SAAS_FEATURES)[number]["id"];

// Outil interne
export interface OutilInterneAnswers {
  internalUsers: "small" | "medium" | "large" | "xlarge"; // <10/10-50/50-200/200+
  workflowReplaced: string; // short text
  erpIntegrations: ErpId[];
  reporting: boolean;
}
export const ERP_OPTIONS = [
  { id: "sage", label: "Sage" },
  { id: "cegid", label: "Cegid" },
  { id: "pennylane", label: "Pennylane" },
  { id: "salesforce", label: "Salesforce" },
  { id: "hubspot", label: "HubSpot" },
  { id: "active-directory", label: "Active Directory / SSO" },
  { id: "other", label: "Autre" },
] as const;
export type ErpId = (typeof ERP_OPTIONS)[number]["id"];

// E-commerce
export interface EcommerceAnswers {
  skuCount: "small" | "medium" | "large" | "xlarge"; // <50/50-500/500-5k/5k+
  ordersPerYear: "small" | "medium" | "large" | "xlarge"; // <500/500-5k/5k-50k/50k+
  mobileApp: boolean;
  erpIntegration: boolean;
  multiCurrency: boolean;
}

// App mobile
export interface AppMobileAnswers {
  platforms: "ios" | "android" | "both";
  features: AppMobileFeatureId[];
  isCompanion: boolean; // true = companion of an existing SaaS
  estimatedScreens: number; // 3-30
}
export const APP_MOBILE_FEATURES = [
  { id: "push", label: "Notifications push" },
  { id: "gps", label: "GPS / géolocalisation" },
  { id: "camera", label: "Caméra / scan / photo" },
  { id: "offline", label: "Mode hors-ligne" },
  { id: "biometric", label: "Auth biométrique (FaceID/TouchID)" },
  { id: "payments", label: "Paiements in-app (Apple/Google Pay)" },
] as const;
export type AppMobileFeatureId = (typeof APP_MOBILE_FEATURES)[number]["id"];

// Refonte
export interface RefonteAnswers {
  currentStack: "dotnet" | "python" | "java" | "php-old" | "node" | "ruby" | "wordpress" | "other";
  currentVolume: "small" | "medium" | "large" | "huge"; // <100/100-1k/1k-10k/10k+ users
  dataMigration: boolean;
  scope: "full" | "partial";
}

// SEO
export interface SeoAnswers {
  market: "local" | "fr" | "eu" | "intl";
  competition: "low" | "medium" | "high";
  keywordVolume: "small" | "medium" | "large"; // <100 / 100-500 / 500+
  hasExistingSite: boolean;
}

// Ads
export interface AdsAnswers {
  monthlyBudget: "small" | "medium" | "large" | "huge"; // <5k / 5-15k / 15-50k / 50k+
  channels: AdsChannelId[];
  hasAccountToAudit: boolean;
  objective: "leads" | "conversions" | "branding" | "mixed";
}
export const ADS_CHANNELS = [
  { id: "google", label: "Google Ads" },
  { id: "meta", label: "Meta (Facebook/Instagram)" },
  { id: "linkedin", label: "LinkedIn Ads" },
  { id: "tiktok", label: "TikTok Ads" },
  { id: "youtube", label: "YouTube Ads" },
  { id: "other", label: "Autre" },
] as const;
export type AdsChannelId = (typeof ADS_CHANNELS)[number]["id"];

// Vidéo
export interface VideoAnswers {
  format: "youtube-founder" | "motion-brand" | "dtc-content" | "studio-custom" | "punctual";
  cadence: "punctual" | "monthly";
  shootingLocation: "chambery" | "paris" | "lyon" | "remote" | "other";
}

// Maintenance
export interface MaintenanceAnswers {
  stackToMaintain: "laravel" | "react-next" | "wordpress" | "shopify" | "other";
  businessCriticality: "low" | "medium" | "critical";
  slaNeeded: "99" | "99.5" | "99.9" | "99.95";
  isExisting: boolean; // true = reprend du code qu'on n'a pas écrit
}

// Sécurité / RGPD
export interface SecuriteRgpdAnswers {
  teamSize: "small" | "medium" | "large"; // 10-100 / 100-500 / 500+
  aiSystems: "none" | "1-3" | "4plus";
  compliance: ComplianceId[];
  needs: SecuriteNeedId[];
}
export const COMPLIANCE_OPTIONS = [
  { id: "rgpd", label: "RGPD" },
  { id: "soc2", label: "SOC 2" },
  { id: "iso27001", label: "ISO 27001" },
  { id: "ai-act", label: "AI Act" },
  { id: "none-yet", label: "Pas encore défini" },
] as const;
export type ComplianceId = (typeof COMPLIANCE_OPTIONS)[number]["id"];
export const SECURITE_NEEDS = [
  { id: "framing", label: "Cadrage initial / audit" },
  { id: "dpo", label: "DPO mensuel" },
  { id: "sprint", label: "Sprint de remédiation (chiffrement, IAM, anon)" },
] as const;
export type SecuriteNeedId = (typeof SECURITE_NEEDS)[number]["id"];

// Audit technique
export interface AuditTechniqueAnswers {
  stackToAudit: "laravel" | "react-next" | "node" | "python" | "java" | "dotnet" | "wordpress" | "other";
  depth: "3-days" | "5-days";
  decisionTarget: "refonte" | "maintenance" | "security" | "other";
}

// =====================================================================
// CALCULATOR INPUT — what gets submitted
// =====================================================================

// Map each service to its answer shape (used at validation time)
export interface ServiceAnswerMap {
  "site-vitrine": SiteVitrineAnswers;
  saas: SaasAnswers;
  "outil-interne": OutilInterneAnswers;
  ecommerce: EcommerceAnswers;
  "app-mobile": AppMobileAnswers;
  refonte: RefonteAnswers;
  seo: SeoAnswers;
  ads: AdsAnswers;
  video: VideoAnswers;
  maintenance: MaintenanceAnswers;
  "securite-rgpd": SecuriteRgpdAnswers;
  "audit-technique": AuditTechniqueAnswers;
}

export interface CalculatorInput {
  selectedServices: ServiceId[];
  perService: Partial<ServiceAnswerMap>;
  urgency: UrgencyLevel;
  description: string; // free-form — required, 50-4000 chars
  email?: string;
  firstName?: string;
  company?: string;
  rgpdConsent?: boolean; // required if any contact field is provided
  honeypot?: string;
}

// =====================================================================
// CLAUDE OUTPUT — multi-volet estimate
// =====================================================================

export type Confidence = "low" | "medium" | "high";
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

export interface OverallSummary {
  oneshot_price_total: PriceRange | null;
  monthly_recurring_total: PriceRange | null;
  year_1_total: PriceRange;
  build_duration_weeks: DurationRange | null;
  overall_confidence: Confidence;
  one_liner: string;
  detected_synergies: string[]; // ex: "Site + Ads → tracking server-side mutualisé, −10 %"
}

export interface PhasingWeek {
  week: number;
  name: string;
  tasks: string[];
  friday_demo: string;
}

export interface RiskItem {
  title: string;
  severity: RiskSeverity;
  mitigation: string;
}

export interface Lagniappe {
  feature_idea: string;
  why_it_helps: string;
  estimated_added_days: number;
}

export interface ProjectQuote {
  service_id: ServiceId;
  service_label: string;
  scope_summary: string;
  estimated_price: PriceRange;
  estimated_duration_weeks: DurationRange;
  discovery_required: boolean;
  phasing: PhasingWeek[];
  stack: {
    backend: string[];
    frontend: string[];
    data: string[];
    integrations: string[];
    hosting: string;
  };
  risks: RiskItem[];
  lagniappe?: Lagniappe; // not applicable for audit-technique
}

export interface RetainerQuote {
  service_id: ServiceId;
  service_label: string;
  recommended_tier: string; // "Starter", "Scale", "Premium", "Care+", etc.
  monthly_price: PriceRange;
  minimum_engagement_months: number;
  setup_fee?: number;
  monthly_deliverables: string[];
  starts_after_oneshot?: ServiceId; // ex: SEO starts after site-vitrine
  starts_at_week_offset: number; // 0 = immediately, 4 = month after build start
}

export interface TeamMember {
  role: string; // "CTO" / "Senior Dev Laravel" / "Designer produit"
  involvement: "full-time" | "part-time" | "ponctuel";
  duration_weeks: number;
  ownership: string; // ex: "Architecture & code review"
}

export interface RoadmapPhase {
  order: number;
  name: string;
  starts_at_week: number;
  duration_weeks: number;
  type: "discovery" | "oneshot" | "retainer-start" | "audit";
  related_service_id?: ServiceId;
}

export interface MultiServiceEstimate {
  summary: OverallSummary;
  oneshot_projects: ProjectQuote[];
  monthly_retainers: RetainerQuote[];
  team_allocation: TeamMember[];
  deployment_roadmap: RoadmapPhase[];
  warnings: string[];
  not_a_good_fit_warning?: string;
  next_steps: string[]; // exactly 3
}

// =====================================================================
// API RESPONSE
// =====================================================================

export type EstimateApiResponse =
  | { ok: true; result: MultiServiceEstimate; tokens_used: number }
  | { ok: false; error: string; field_errors?: Record<string, string> };
