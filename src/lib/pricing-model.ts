/**
 * INTERNAL PRICING MODEL — Hagnéré Code
 *
 * Source of truth for every price displayed:
 *  - public /tarifs grid (consumed via priceLabels)
 *  - calculator IA system prompt (consumed via buildPromptCatalogSection)
 *  - future admin simulator (consumed via computeBrick)
 *
 * Method
 * ─────────────────────────────────────────────────────────────────────────
 *  1. Each PROFILE has a monthly all-in cost + monthly working hours.
 *     → hourlyCost = monthlyCost / monthlyHours
 *     → hourlySellRate = hourlyCost × SELL_MULTIPLIER (×1.6, base margin)
 *
 *  2. Each ROLE is an abstraction (e.g. "dev-integration") backed by one or
 *     more profiles. Its rate is an average of the eligible profiles.
 *
 *  3. Each BRICK declares hours per role (low/mid/high scale variants),
 *     plus optional risk and acquisition margin overrides.
 *
 *  4. Final price for a brick at a given scale =
 *       Σ(hours × hourlySellRate)        ← raw cost-with-base-margin
 *       × ai_productivity (≈0.85)        ← only for AI-augmentable roles
 *       × (1 + risk_margin)              ← scope creep, bugs, refactor
 *       × (1 + acq_margin)               ← Discovery non facturé, frais fixes, commercial
 *
 *  5. Public range = { min: low, max: high }, rounded to nice numbers.
 *
 *  Salaries are visible to the team — Quentin runs a transparent payroll.
 *  No need to hide them in a private file.
 */

// =====================================================================
// 1. CONSTANTS
// =====================================================================

/** Multiplier applied to hourly cost to get the base sell rate. */
export const SELL_MULTIPLIER = 1.6;

/** Productivity gain when Claude Code assists the role (only on dev/QA work). */
export const AI_PRODUCTIVITY = 0.85;

/** Default risk margin on top of base sell. Covers scope creep, bugs, refactor. */
export const DEFAULT_RISK_MARGIN = 0.25;

/** Default acquisition margin. Covers Discovery non facturé, fixed costs, sales time. */
export const DEFAULT_ACQ_MARGIN = 0.15;

/** Working weeks per month (52/12 ≈ 4.33). */
const WEEKS_PER_MONTH = 52 / 12;

// =====================================================================
// 2. PROFILES — actual people on the team
// =====================================================================

export interface Profile {
  id: string;
  label: string;
  status: "CDI" | "freelance" | "gerant";
  /** Monthly all-in cost in EUR (charges patronales incluses pour CDI, HT pour freelance). */
  monthlyCost: number;
  /** Total working hours per month available to the studio. */
  monthlyHours: number;
  /** Computed hourly cost. */
  hourlyCost: number;
  /** Computed hourly sell rate (cost × SELL_MULTIPLIER). */
  hourlySellRate: number;
}

function buildProfile(
  id: string,
  label: string,
  status: Profile["status"],
  monthlyCost: number,
  monthlyHours: number,
): Profile {
  const hourlyCost = monthlyCost / monthlyHours;
  return {
    id,
    label,
    status,
    monthlyCost,
    monthlyHours,
    hourlyCost,
    hourlySellRate: hourlyCost * SELL_MULTIPLIER,
  };
}

export const PROFILES = {
  // Quentin — gérant associé codeur, facturé au taux freelance marché.
  // hourlyCost = 100 €/h HT, hourlySellRate = ce que le studio facture pour son temps.
  quentin: {
    id: "quentin",
    label: "Quentin Hagnéré (Gérant associé codeur)",
    status: "gerant" as const,
    monthlyCost: 0, // N/A — invoiced at hourly rate
    monthlyHours: 0,
    hourlyCost: 100,
    hourlySellRate: 100 * SELL_MULTIPLIER, // 160
  },

  // CDI — 3 personnes
  // Nicolas (CTO) : forfait cadre jour, ~48 h/sem
  nicolas: buildProfile("nicolas", "Nicolas Wallerand (CTO)", "CDI", 6_000, Math.round(48 * WEEKS_PER_MONTH)),
  // Killian + Frédéric : devs seniors CDI 35 h/sem
  killian: buildProfile("killian", "Killian Hoarau (Dev senior Laravel)", "CDI", 4_200, Math.round(35 * WEEKS_PER_MONTH)),
  frederic: buildProfile("frederic", "Frédéric Curinckx (Dev senior Laravel)", "CDI", 4_700, Math.round(35 * WEEKS_PER_MONTH)),

  // Freelances long-terme — 3 personnes intégrées aux rituels
  // Arthur Monney : senior dev back-end Laravel · 48 h/sem
  arthur: buildProfile("arthur", "Arthur Monney (Dev senior Laravel)", "freelance", 4_200, Math.round(48 * WEEKS_PER_MONTH)),
  // Ryan Mazzitelli : senior dev intégration · 48 h/sem
  ryan: buildProfile("ryan", "Ryan Mazzitelli (Dev intégration)", "freelance", 4_000, Math.round(48 * WEEKS_PER_MONTH)),
  // Peter Sum Sie Kung : dev confirmé back-end Laravel · 35 h/sem
  // 2 812 € / 152 h ≈ 18,50 €/h cost rate × 1,6 = 29,60 €/h sell rate.
  // Profil Codeur : https://www.codeur.com/-peterssk
  peter: buildProfile("peter", "Peter Sum Sie Kung (Dev confirmé Laravel)", "freelance", 2_812, Math.round(35 * WEEKS_PER_MONTH)),
} as const satisfies Record<string, Profile>;

// =====================================================================
// 3. ROLES — pricing abstraction
// =====================================================================

/**
 * IMPORTANT — Role = ACTIVITY, not a person.
 *
 * Une brick alloue des heures par activité. La même personne peut endosser
 * plusieurs rôles sur un projet (ex : Nicolas fait 20 h archi + 50 h dev senior).
 * Le pricing sépare ces deux postes, le planning humain s'occupe de qui fait quoi.
 *
 * Conséquence : un même profile peut figurer dans plusieurs rôles. Le taux
 * d'un rôle est la moyenne des taux des profiles qui peuvent le jouer.
 */
export type Role =
  | "pilotage-strat" // Quentin — arbitrage client, go/no-go, signature
  | "architecture-cto" // Nicolas — cadrage tech, choix stack, revue PR
  | "design-senior" // Quentin — design UI/UX, direction artistique (designer historique du studio)
  | "dev-senior" // Nicolas / Killian / Frédéric / Arthur — front/back senior, fonctionnalités complexes
  | "dev-integration" // Ryan / Peter — intégration, volume, fixes
  | "qa"; // Peter principalement — tests, recettes

/** Which profiles can play each role (used to compute the average sell rate). */
const ROLE_TO_PROFILES: Record<Role, Array<keyof typeof PROFILES>> = {
  "pilotage-strat": ["quentin"],
  "architecture-cto": ["nicolas"],
  "design-senior": ["quentin"],
  // Nicolas code aussi régulièrement sur les projets, pas juste de l'archi.
  "dev-senior": ["nicolas", "killian", "frederic", "arthur"],
  // Quentin n'est PAS dans dev-integration : quand il met les mains dans le code,
  // ses heures sont allouées à pilotage-strat ou design-senior (à 160 €/h),
  // pas à un taux d'intégration. Ryan & Peter sont les seuls vrais intégrateurs.
  "dev-integration": ["ryan", "peter"],
  qa: ["peter"],
};

/** AI productivity is applied only on dev/QA roles (architecture/design/strat keep full hours). */
const AI_AUGMENTED_ROLES = new Set<Role>(["dev-senior", "dev-integration", "qa"]);

/** Computed sell rate per role (average across eligible profiles). */
export const ROLE_RATES: Record<Role, number> = (() => {
  const rates = {} as Record<Role, number>;
  (Object.keys(ROLE_TO_PROFILES) as Role[]).forEach((role) => {
    const profiles = ROLE_TO_PROFILES[role].map((id) => PROFILES[id]);
    const sum = profiles.reduce((acc, p) => acc + p.hourlySellRate, 0);
    rates[role] = sum / profiles.length;
  });
  return rates;
})();

// =====================================================================
// 4. BRICKS — projects priced at a forfait fixe
// =====================================================================

/** A scale variant of a brick: how many hours per role at this scale. */
export type RoleHours = Partial<Record<Role, number>>;

export interface BrickScale {
  /** Short label for this variant (e.g. "5–8 pages"). */
  label: string;
  hours: RoleHours;
  /** Override default 25 % risk margin if needed (e.g. 0.40 for refonte). */
  riskMargin?: number;
  /** Override default 15 % acquisition margin if needed. */
  acqMargin?: number;
}

export interface OneshotBrick {
  id: string;
  label: string;
  /** "construire" for build forfait, "audit" for audit, "refonte" for refonte. */
  category: "construire" | "audit" | "refonte";
  /** Typical timeline range in weeks, displayed in the prompt. */
  weeksRange: [number, number];
  scales: {
    low: BrickScale;
    mid: BrickScale;
    high: BrickScale;
  };
  /** Free-form notes appended to the prompt section. */
  notes?: string[];
  /** Modifiers shown to the AI (e.g. "+20 % e-com léger"). */
  modifiers?: string[];
}

/** A retainer (recurring monthly service). Hours = hours per MONTH. */
export interface RetainerBrick {
  id: string;
  label: string;
  category: "faire-grandir" | "proteger";
  /** Minimum engagement in months. */
  minMonths: number;
  scales: {
    low: BrickScale & { tierName: string };
    mid: BrickScale & { tierName: string };
    high: BrickScale & { tierName: string };
  };
  notes?: string[];
  modifiers?: string[];
  /** Optional setup fee shown alongside the monthly. */
  setupFee?: { amount: number; deductibleIfEngagement: boolean; note?: string };
}

// ─────────────────────────────────────────────────────────────────────
// ONESHOT BRICKS
// ─────────────────────────────────────────────────────────────────────

export const ONESHOT_BRICKS: OneshotBrick[] = [
  {
    // Calibré sur /services/sites-vitrines : Essentiel 6 900 / Perf 14 900 / Sur-mesure 22 000 €
    id: "site-vitrine",
    label: "Site vitrine ou landing",
    category: "construire",
    weeksRange: [2, 14],
    scales: {
      low: {
        label: "Essentiel — Landing / 3–5 pages Next.js statique + CMS (2–4 sem.)",
        hours: { "pilotage-strat": 3, "architecture-cto": 8, "design-senior": 14, "dev-senior": 22, "dev-integration": 35, qa: 6 },
      },
      mid: {
        label: "Performance — Site vitrine 10–20 pages + blog SEO + design sur-mesure + CRM (5–7 sem.)",
        hours: { "pilotage-strat": 5, "architecture-cto": 14, "design-senior": 28, "dev-senior": 60, "dev-integration": 80, qa: 16 },
      },
      high: {
        label: "Sur-mesure — Multi-langue + e-com headless + espace client + intégrations métier (8–14 sem.)",
        hours: { "pilotage-strat": 8, "architecture-cto": 22, "design-senior": 45, "dev-senior": 80, "dev-integration": 100, qa: 22 },
      },
    },
    modifiers: [
      "+20 % e-com léger",
      "+15 % blog SEO cocons",
      "+10 % multilingue",
      "+5 % A/B testing",
    ],
    notes: [
      "Démarrage : Discovery 1 500 € (déduit phase 2)",
      "70 % des clients site signent un retainer SEO 3 mois après livraison",
    ],
  },

  {
    // Calibré sur /services/saas-applications-metier : Essentiel 15 000 / Standard 30 000 / Partenariat 120 000 €
    id: "saas",
    label: "SaaS / appli métier",
    category: "construire",
    weeksRange: [3, 24],
    scales: {
      low: {
        label: "Essentiel — MVP court 3–5 écrans + auth + facturation (3–4 sem.)",
        hours: { "pilotage-strat": 6, "architecture-cto": 22, "design-senior": 22, "dev-senior": 70, "dev-integration": 75, qa: 18 },
        riskMargin: 0.30,
      },
      mid: {
        label: "Standard — MVP complet 10–15 écrans + API + agents IA + RGPD (5–6 sem.)",
        hours: { "pilotage-strat": 10, "architecture-cto": 40, "design-senior": 45, "dev-senior": 145, "dev-integration": 145, qa: 40 },
        riskMargin: 0.30,
      },
      high: {
        label: "Partenariat — Équipe dédiée 3–5 personnes sur 3–6 mois, co-build continu",
        hours: { "pilotage-strat": 40, "architecture-cto": 200, "design-senior": 130, "dev-senior": 700, "dev-integration": 700, qa: 160 },
        riskMargin: 0.30,
      },
    },
    modifiers: [
      "+10 % CRM/ERP intégré",
      "+15 % IA native (RAG, agents Claude)",
      "+20 % app mobile compagnon",
      "+5–10 % RGPD/DPA si grands comptes",
    ],
    notes: [
      "Discovery obligatoire 1 500 € au-delà de 25 k€",
      "Partenariat = équipe dédiée long-terme, pricing indicatif (varie selon scope et durée)",
      "Si grands comptes ciblés → suggérer Sécurité/RGPD audit DPA + SOC2 readiness",
      "Maintenance Care+ quasi obligatoire post-livraison",
    ],
  },

  {
    // Calibré sur /services/outils-internes-sur-mesure : Audit 990 € (hors scales) / Starter 8 000 / Pro 25 000 / Enterprise 80 000 €
    id: "outil-interne",
    label: "Outil interne / back-office",
    category: "construire",
    weeksRange: [2, 12],
    scales: {
      low: {
        label: "Starter — Process ciblé, 1 workflow, 1 équipe (2–3 sem.)",
        hours: { "pilotage-strat": 3, "architecture-cto": 12, "design-senior": 10, "dev-senior": 40, "dev-integration": 50, qa: 10 },
      },
      mid: {
        label: "Pro — CRM métier ou ERP léger, multi-utilisateurs + intégrations (5–8 sem.)",
        hours: { "pilotage-strat": 8, "architecture-cto": 35, "design-senior": 35, "dev-senior": 145, "dev-integration": 120, qa: 30 },
      },
      high: {
        label: "Enterprise — Plateforme multi-départements + SSO + intégrations Sage/Cegid/Salesforce (8–12 sem.)",
        hours: { "pilotage-strat": 22, "architecture-cto": 115, "design-senior": 90, "dev-senior": 500, "dev-integration": 450, qa: 110 },
      },
    },
    modifiers: [
      "+15 % par ERP intégré",
      "+10 % automatisation emails",
      "+8 % dashboards Metabase",
    ],
    notes: [
      "Audit processus initial : 990 € (1 j sur site, déductible du forfait)",
      "Maintenance recommandée",
    ],
  },

  {
    // Calibré sur /services/ecommerce : Launch 15 000 / Scale 30 000 / Enterprise 70 000 €
    // Scope EXPLICITE demandé par Quentin : base technique + DB + back-office + suivi
    // + cookies + site vitrine + préparation produits inclus DÈS le tier Launch.
    id: "ecommerce",
    label: "E-commerce sur mesure",
    category: "construire",
    weeksRange: [6, 16],
    scales: {
      low: {
        label: "Launch — Boutique 500 produits + Stripe/Alma + 2 transporteurs + Factur-X + cookies + tracking (6–8 sem.)",
        hours: { "pilotage-strat": 5, "architecture-cto": 18, "design-senior": 25, "dev-senior": 70, "dev-integration": 80, qa: 18 },
      },
      mid: {
        label: "Scale — Refonte + app mobile iOS/Android + migration Shopify/Presta + marketplaces (8–12 sem.)",
        hours: { "pilotage-strat": 10, "architecture-cto": 35, "design-senior": 50, "dev-senior": 150, "dev-integration": 145, qa: 40 },
      },
      high: {
        label: "Enterprise — B2B + B2C multi-pays + TVA OSS + multi-entrepôt + programme fidélité (12–16 sem.)",
        hours: { "pilotage-strat": 20, "architecture-cto": 90, "design-senior": 90, "dev-senior": 400, "dev-integration": 360, qa: 90 },
        riskMargin: 0.30,
      },
    },
    modifiers: [
      "+10 % app mobile additionnelle",
      "+8 % intégrations logistiques supplémentaires",
      "+12 % multi-boutiques",
    ],
    notes: [
      "Inclut DÈS Launch : base technique + DB produits + back-office complet + tracking (GA4/Meta CAPI) + bannière cookies RGPD + mini-site vitrine + import catalogue initial",
      "Maintenance Care+ obligatoire post-livraison",
      "PAS Shopify Plus pur — voir R14 (orienter partenaire)",
    ],
  },

  {
    id: "app-mobile",
    label: "App mobile iOS / Android",
    category: "construire",
    weeksRange: [4, 10],
    scales: {
      low: {
        label: "Compagnon d'un SaaS — réutilise auth/API",
        hours: { "pilotage-strat": 4, "architecture-cto": 14, "design-senior": 18, "dev-senior": 70, "dev-integration": 60, qa: 16 },
      },
      mid: {
        label: "App autonome 8–12 écrans",
        hours: { "pilotage-strat": 10, "architecture-cto": 40, "design-senior": 40, "dev-senior": 180, "dev-integration": 140, qa: 40 },
      },
      high: {
        label: "Native complexe (BLE / AR / hors-ligne avancé)",
        hours: { "pilotage-strat": 18, "architecture-cto": 80, "design-senior": 70, "dev-senior": 350, "dev-integration": 280, qa: 70 },
        riskMargin: 0.35, // native = + de risque
      },
    },
    notes: [
      "React Native + Expo, push, hors-ligne, GPS, caméra, BLE, AR",
      "Si compagnon d'un SaaS : compter le pricing 'low' EN PLUS du forfait SaaS",
    ],
  },

  {
    id: "refonte",
    label: "Refonte d'un projet existant",
    category: "refonte",
    weeksRange: [4, 12],
    scales: {
      low: {
        label: "Migration WordPress / PHP-old → Laravel 13",
        hours: { "pilotage-strat": 6, "architecture-cto": 25, "design-senior": 20, "dev-senior": 110, "dev-integration": 100, qa: 25 },
        riskMargin: 0.35, // refonte = + risque toujours
      },
      mid: {
        label: "Refonte fonctionnelle + UX + perf",
        hours: { "pilotage-strat": 12, "architecture-cto": 55, "design-senior": 50, "dev-senior": 220, "dev-integration": 180, qa: 50 },
        riskMargin: 0.35,
      },
      high: {
        label: "Migration data lourde + multi-modules + interop legacy",
        hours: { "pilotage-strat": 25, "architecture-cto": 120, "design-senior": 90, "dev-senior": 420, "dev-integration": 340, qa: 100 },
        riskMargin: 0.40, // R13: data lourde
      },
    },
    notes: [
      "Stack étrangère (.NET, Python, Java, Ruby, Node) → R11 not_a_good_fit",
      "Audit technique préalable obligatoire (1 500 € si projet à reprendre)",
      "R13 : si migration data lourde, +20-40 % surcoût (déjà inclus en 'high')",
    ],
  },

  {
    // Calibré sur /services/audit-technique : Express 8 000 / Standard 18 000 / Deep 38 000 €
    // (le 4e tier Tech DD M&A 68 000 € est mentionné en notes — cas spécial 4 personnes 20-30j)
    id: "audit-technique",
    label: "Audit technique",
    category: "audit",
    weeksRange: [1, 6],
    scales: {
      low: {
        label: "Express — 3–5 j ouvrés, 1 senior dédié, 4–5 dimensions, rapport simplifié + Loom",
        hours: { "pilotage-strat": 4, "architecture-cto": 100, "dev-senior": 24 },
        riskMargin: 0.15,
        acqMargin: 0.15,
      },
      mid: {
        label: "Standard — 10 j ouvrés, 2 seniors + associé-lead, 8 dimensions, rapport 40-70 p. + roadmap 6/12/18 mois + C4",
        hours: { "pilotage-strat": 14, "architecture-cto": 170, "dev-senior": 75, qa: 16 },
        riskMargin: 0.15,
        acqMargin: 0.15,
      },
      high: {
        label: "Deep — 15-20 j ouvrés, 3 seniors + architecte + associé-lead, scénarios financiers 3 ans + restitution trilatérale CEO/CTO/CFO",
        hours: { "pilotage-strat": 22, "architecture-cto": 250, "dev-senior": 240, "dev-integration": 80, qa: 30 },
        riskMargin: 0.20,
        acqMargin: 0.15,
      },
    },
    notes: [
      "Code review architecture/patterns/deps/CVE + infra audit + perf + sécurité OWASP",
      "Rapport 15–80 pages + plan remédiation chiffré 12-24 mois",
      "Tier supplémentaire 'Tech Due Diligence M&A' : 68 000 € (4 personnes, 20-30 j ouvrés, NDA renforcé attorney-client privilege, format M&A)",
      "70 % des audits débouchent sur Maintenance ou refonte sous 90 jours",
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────
// RETAINER BRICKS
// ─────────────────────────────────────────────────────────────────────

export const RETAINER_BRICKS: RetainerBrick[] = [
  {
    // Calibré sur /services/referencement-google : Audit 2 400 / Fondations 1 450 / Croissance 2 850 / Premium 4 900 €/m
    id: "seo",
    label: "SEO & référencement",
    category: "faire-grandir",
    minMonths: 3,
    scales: {
      low: {
        tierName: "Fondations",
        label: "8 contenus/m + 3 backlinks DR40+ + corrections tech + reporting Looker",
        hours: { "architecture-cto": 2, "dev-senior": 3, "dev-integration": 30 },
      },
      mid: {
        tierName: "Croissance",
        label: "14 contenus/m + 6 backlinks + dashboard business + consultant dédié",
        hours: { "pilotage-strat": 1, "architecture-cto": 2, "design-senior": 2, "dev-senior": 4, "dev-integration": 48 },
      },
      high: {
        tierName: "Premium",
        label: "20+ contenus full-funnel + 10 BL top-tier + E-E-A-T + AI Overviews + équipe 3 personnes",
        hours: { "pilotage-strat": 2, "architecture-cto": 5, "design-senior": 5, "dev-senior": 10, "dev-integration": 65 },
      },
    },
    setupFee: { amount: 2_400, deductibleIfEngagement: true, note: "Audit SEO 30-50 p. — tech + sémantique + concurrentiel + backlinks (déduit si engagement 3+ mois)" },
    modifiers: [
      "+1 500 €/mois par langue additionnelle",
      "+500 € recovery plan (pénalité Google)",
      "+600 € relations presse",
    ],
    notes: [
      "Effets : 4–8 sem premiers résultats, peak 6–12 mois",
      "DEMANDE le marché (FR/EU/intl), niveau de concurrence, et si site existant trackable",
    ],
  },

  {
    // Calibré sur /services/publicite-en-ligne : Audit 1 500 / Starter 1 800 / Scale 3 500 / Premium 4 500 €/m
    id: "ads",
    label: "Publicité en ligne",
    category: "faire-grandir",
    minMonths: 3,
    scales: {
      low: {
        tierName: "Starter",
        label: "2 canaux + tracking SS + 4 creatives/m + reporting Looker (budget media 8-20 k€/m)",
        hours: { "pilotage-strat": 1, "architecture-cto": 2, "design-senior": 4, "dev-integration": 18 },
      },
      mid: {
        tierName: "Scale",
        label: "3+1 canaux + tracking complet + 8-12 creatives + dashboard CRM × Ads (budget 20-60 k€/m)",
        hours: { "pilotage-strat": 2, "architecture-cto": 3, "design-senior": 8, "dev-integration": 30 },
      },
      high: {
        tierName: "Premium",
        label: "4-6 canaux + attribution multi-touch BigQuery + 12+ creatives + landing A/B illimité + équipe 3 personnes (budget 60-150 k€/m)",
        hours: { "pilotage-strat": 5, "architecture-cto": 3, "design-senior": 9, "dev-integration": 35 },
      },
    },
    setupFee: { amount: 1_500, deductibleIfEngagement: true, note: "Audit Ads 25-40 p. — comptes + tracking + structuration + budget (déduit du 1er mois)" },
    modifiers: [
      "+500 €/mois par canal additionnel",
      "-500 € si transition d'agence (forfait fixe 9 800 €)",
      "Aucun rebilling sur budget media — toujours sur le compte du client",
    ],
    notes: [
      "DEMANDE le budget media mensuel (refuser si < 5 k€/mois → R12)",
    ],
  },

  {
    // Calibré sur /services/contenu-video : Ponctuelle 2 500 / YouTube Founder 3 500 / Content Retainer 6 900 €/m
    // (Studio sur-mesure 15 k€+ = pricing libre, mentionné en modifier)
    id: "video",
    label: "Contenu & vidéo",
    category: "faire-grandir",
    minMonths: 6,
    scales: {
      low: {
        tierName: "YouTube Founder",
        label: "1h/sem tournage — 4 longues + 16 shorts/mois + scripts + thumbnails A/B + VidIQ",
        hours: { "pilotage-strat": 1, "design-senior": 11, "dev-integration": 28 },
      },
      mid: {
        tierName: "Motion Brand",
        label: "1 hero + 3 courts + 5 natives/mois — pricing intermédiaire (extrapolé)",
        hours: { "pilotage-strat": 2, "design-senior": 18, "dev-integration": 35 },
      },
      high: {
        tierName: "Content Retainer DTC",
        label: "Pipeline industriel — 12 ads + 8 UGC + 4 motion + 2 product/mois + ROAS dashboard",
        hours: { "pilotage-strat": 2, "design-senior": 22, "dev-integration": 50 },
      },
    },
    modifiers: [
      "+600 €/mois voix IA",
      "+800 € tournage hors Paris",
      "+15 % localisation FR/EN/DE",
      "Vidéo unique ponctuelle (sans engagement) : 2 500 €",
      "Studio dédié sur-mesure (équipe 2-4 personnes, motion custom, 3D) : à partir de 15 k€",
    ],
  },

  {
    // Calibré sur /services/maintenance-evolution : Audit Flash 2 000 / Essentiel 2 500 / Scale 6 500 / Premium 14 000 €/m
    id: "maintenance",
    label: "Maintenance & évolution",
    category: "proteger",
    minMonths: 3,
    scales: {
      low: {
        tierName: "Essentiel",
        label: "1-2 j/m intervention + monitoring 24/7 (Sentry + Better Stack) + CVE < 48 h + Slack support — SLA 99,5 %",
        hours: { "pilotage-strat": 3, "architecture-cto": 6, "dev-senior": 12, "dev-integration": 18 },
      },
      mid: {
        tierName: "Scale",
        label: "4-6 j/m + 2 devs nommés + observability complète + Grafana Cloud + astreinte 7j/7 PagerDuty MTTR < 30 min — SLA 99,9 %",
        hours: { "pilotage-strat": 5, "architecture-cto": 15, "dev-senior": 35, "dev-integration": 50, qa: 10 },
      },
      high: {
        tierName: "Premium",
        label: "12-16 j/m + équipe 3-4 personnes + PO + astreinte 24/7 MTTR < 1h + pentest annuel + audit trimestriel — SLA 99,95 % + pénalités",
        hours: { "pilotage-strat": 10, "architecture-cto": 28, "dev-senior": 75, "dev-integration": 125, qa: 28 },
      },
    },
    setupFee: { amount: 2_000, deductibleIfEngagement: true, note: "Audit Flash 5 j — code + infra + sécurité + dette tech, rapport 15-25 p. (déduit si engagement 6 mois)" },
    notes: [
      "Monitoring 24/7 (Sentry, Better Stack), patches sécurité mensuels, CVE < 48 h",
      "SLA 99,5 % (Essentiel) → 99,95 % (Premium) avec pénalités contractuelles",
      "Site vitrine ultra-simple : Care Run 390 €/mois disponible (héberg + monitoring seul, pas d'évos) — hors catalogue formel",
    ],
  },

  {
    // Calibré sur /services/securite-rgpd : Cadrage 5 000 / DPO Starter 1 200 / DPO Scale 3 500 €/m
    // (Le 3e tier "DPO Enterprise" n'existe pas publiquement — extrapolé pour ETI multi-sites)
    id: "securite-rgpd",
    label: "Sécurité & RGPD / DPO",
    category: "proteger",
    minMonths: 12,
    scales: {
      low: {
        tierName: "DPO Starter",
        label: "PME tech 10–100 sal. + 1-3 systèmes IA + revue mensuelle 1 h + 1 AIPD/an + monitoring AI Act/NIS2 + SLA 8 h",
        hours: { "pilotage-strat": 1, "architecture-cto": 11, "dev-senior": 4 },
      },
      mid: {
        tierName: "DPO Scale",
        label: "Scale-up 100–500 sal. + IA haut risque + revues bi-mensuelles + 4 AIPD/an + Slack dédié + SLA 4 h + support audit CNIL",
        hours: { "pilotage-strat": 3, "architecture-cto": 32, "dev-senior": 10 },
      },
      high: {
        tierName: "DPO Enterprise",
        label: "ETI multi-sites + SOC2/ISO27001 readiness — pricing indicatif (extrapolé)",
        hours: { "pilotage-strat": 6, "architecture-cto": 60, "dev-senior": 25 },
      },
    },
    setupFee: { amount: 5_000, deductibleIfEngagement: false, note: "Cadrage initial : cartographie + gap analysis RGPD/AI Act/NIS2 + audit grey-box + plan d'action chiffré" },
    notes: [
      "Sprints dev sécurité (chiffrement, IAM, consent, anonymisation) : 3–15 k€ par lot facturés à part",
      "Recommander obligatoirement si SaaS B2B grands comptes ou compliance SOC2/ISO27001 visée",
    ],
  },
];

// =====================================================================
// 5. COMPUTATION
// =====================================================================

export interface ComputedPrice {
  /** Sum of (hours × sell_rate) before any margin. */
  baseCost: number;
  /** After AI productivity discount on eligible roles. */
  aiAdjusted: number;
  /** After risk margin. */
  withRisk: number;
  /** Final retail price after acquisition margin. Round this for display. */
  retail: number;
  /** Total hours invested (pre-AI). */
  totalHours: number;
}

/** Compute the price of a brick at a given scale. */
export function computeScalePrice(
  scale: BrickScale,
  defaultRisk = DEFAULT_RISK_MARGIN,
  defaultAcq = DEFAULT_ACQ_MARGIN,
): ComputedPrice {
  let baseCost = 0;
  let aiAdjusted = 0;
  let totalHours = 0;

  (Object.keys(scale.hours) as Role[]).forEach((role) => {
    const hours = scale.hours[role] ?? 0;
    if (hours === 0) return;
    const rate = ROLE_RATES[role];
    const hoursContribution = hours * rate;
    baseCost += hoursContribution;
    totalHours += hours;
    if (AI_AUGMENTED_ROLES.has(role)) {
      aiAdjusted += hours * AI_PRODUCTIVITY * rate;
    } else {
      aiAdjusted += hoursContribution;
    }
  });

  const risk = scale.riskMargin ?? defaultRisk;
  const acq = scale.acqMargin ?? defaultAcq;
  const withRisk = aiAdjusted * (1 + risk);
  const retail = withRisk * (1 + acq);

  return { baseCost, aiAdjusted, withRisk, retail, totalHours };
}

/** Round a price to a nice number for display (1k below 10k, 5k above 50k, etc.). */
export function roundPrice(value: number): number {
  if (value < 5_000) return Math.round(value / 100) * 100;
  if (value < 15_000) return Math.round(value / 500) * 500;
  if (value < 50_000) return Math.round(value / 1_000) * 1_000;
  if (value < 150_000) return Math.round(value / 5_000) * 5_000;
  return Math.round(value / 10_000) * 10_000;
}

export interface PriceRange {
  min: number;
  max: number;
  /** Pretty label like "6–12 k€" or "1 800–4 500 €/m". */
  label: string;
}

/** Get the public-facing range (low.retail → high.retail) for an oneshot brick. */
export function getOneshotRange(brick: OneshotBrick): PriceRange {
  const min = roundPrice(computeScalePrice(brick.scales.low).retail);
  const max = roundPrice(computeScalePrice(brick.scales.high).retail);
  return { min, max, label: formatRangeOneshot(min, max) };
}

/** Get the public-facing range for a retainer (monthly). */
export function getRetainerRange(brick: RetainerBrick): PriceRange {
  const min = roundPrice(computeScalePrice(brick.scales.low).retail);
  const max = roundPrice(computeScalePrice(brick.scales.high).retail);
  return { min, max, label: formatRangeRetainer(min, max) };
}

function formatRangeOneshot(min: number, max: number): string {
  return `${formatK(min)}–${formatK(max)} k€`;
}

function formatRangeRetainer(min: number, max: number): string {
  // Retainer prices are smaller — show as "1 800–4 500 €/mois HT"
  const minLbl = min >= 10_000 ? `${(min / 1000).toFixed(1).replace(".0", "")} k€` : `${min.toLocaleString("fr-FR")} €`;
  const maxLbl = max >= 10_000 ? `${(max / 1000).toFixed(1).replace(".0", "")} k€` : `${max.toLocaleString("fr-FR")} €`;
  return `${minLbl} – ${maxLbl}/mois HT`;
}

function formatK(value: number): string {
  return Math.round(value / 1000).toString();
}

// =====================================================================
// 6. PROMPT BUILDER — generates the "CATALOG OF 12 SERVICES" section
//    consumed by claude-estimate-prompt.ts. Single source of truth.
// =====================================================================

export function buildPromptCatalogSection(): string {
  const lines: string[] = [];
  lines.push("# CATALOG OF 12 SERVICES (3 categories)");
  lines.push("");
  lines.push("> Pricing fourchettes ci-dessous calculées depuis pricing-model.ts");
  lines.push("> (coûts réels équipe × marge ×1,6 × productivité IA × risque × acquisition).");
  lines.push("> Toujours s'y référer comme source de vérité, pas comme indication floue.");
  lines.push("");

  lines.push("## ═══ CONSTRUIRE — Forfait one-shot Sprint Fixe™ ═══");
  lines.push("");

  function fmtScale(scale: BrickScale): string {
    const retail = roundPrice(computeScalePrice(scale).retail);
    if (retail >= 1000) return `~${formatK(retail)} k€`;
    return `~${retail.toLocaleString("fr-FR")} €`;
  }

  let n = 1;
  for (const brick of ONESHOT_BRICKS.filter((b) => b.category === "construire")) {
    const range = getOneshotRange(brick);
    lines.push(`### ${n}. ${brick.id} (${range.label}, ${brick.weeksRange[0]}–${brick.weeksRange[1]} sem.)`);
    lines.push(`- ${brick.scales.low.label} → ${fmtScale(brick.scales.low)}`);
    lines.push(`- ${brick.scales.mid.label} → ${fmtScale(brick.scales.mid)}`);
    lines.push(`- ${brick.scales.high.label} → ${fmtScale(brick.scales.high)}`);
    if (brick.modifiers?.length) {
      lines.push(`- Modifiers: ${brick.modifiers.join(" · ")}`);
    }
    if (brick.notes?.length) {
      brick.notes.forEach((note) => lines.push(`- ${note}`));
    }
    lines.push("");
    n++;
  }

  // Refonte sits in its own block — but is technically "construire" in catalog
  for (const brick of ONESHOT_BRICKS.filter((b) => b.category === "refonte")) {
    const range = getOneshotRange(brick);
    lines.push(`### ${n}. ${brick.id} (${range.label}, ${brick.weeksRange[0]}–${brick.weeksRange[1]} sem.)`);
    lines.push(`- ${brick.scales.low.label} → ${fmtScale(brick.scales.low)}`);
    lines.push(`- ${brick.scales.mid.label} → ${fmtScale(brick.scales.mid)}`);
    lines.push(`- ${brick.scales.high.label} → ${fmtScale(brick.scales.high)}`);
    if (brick.modifiers?.length) lines.push(`- Modifiers: ${brick.modifiers.join(" · ")}`);
    if (brick.notes?.length) brick.notes.forEach((note) => lines.push(`- ${note}`));
    lines.push("");
    n++;
  }

  lines.push("## ═══ FAIRE GRANDIR — Retainer mensuel ═══");
  lines.push("");

  for (const brick of RETAINER_BRICKS.filter((b) => b.category === "faire-grandir")) {
    const lowP = roundPrice(computeScalePrice(brick.scales.low).retail);
    const midP = roundPrice(computeScalePrice(brick.scales.mid).retail);
    const highP = roundPrice(computeScalePrice(brick.scales.high).retail);
    const tiersLine = `${brick.scales.low.tierName} ${lowP.toLocaleString("fr-FR")} € · ${brick.scales.mid.tierName} ${midP.toLocaleString("fr-FR")} € · ${brick.scales.high.tierName} ${highP.toLocaleString("fr-FR")} €/mois HT · ${brick.minMonths} mois min.`;
    lines.push(`### ${n}. ${brick.id} (${tiersLine})`);
    lines.push(`- ${brick.scales.low.tierName}: ${brick.scales.low.label}`);
    lines.push(`- ${brick.scales.mid.tierName}: ${brick.scales.mid.label}`);
    lines.push(`- ${brick.scales.high.tierName}: ${brick.scales.high.label}`);
    if (brick.setupFee) {
      lines.push(`- Setup: ${brick.setupFee.amount.toLocaleString("fr-FR")} € — ${brick.setupFee.note ?? ""}${brick.setupFee.deductibleIfEngagement ? " (déductible)" : ""}`);
    }
    if (brick.modifiers?.length) lines.push(`- Modifiers: ${brick.modifiers.join(" · ")}`);
    if (brick.notes?.length) brick.notes.forEach((note) => lines.push(`- ${note}`));
    lines.push("");
    n++;
  }

  lines.push("## ═══ PROTÉGER & OPÉRER ═══");
  lines.push("");

  for (const brick of RETAINER_BRICKS.filter((b) => b.category === "proteger")) {
    const lowP = roundPrice(computeScalePrice(brick.scales.low).retail);
    const midP = roundPrice(computeScalePrice(brick.scales.mid).retail);
    const highP = roundPrice(computeScalePrice(brick.scales.high).retail);
    const tiersLine = `${brick.scales.low.tierName} ${lowP.toLocaleString("fr-FR")} € · ${brick.scales.mid.tierName} ${midP.toLocaleString("fr-FR")} € · ${brick.scales.high.tierName} ${highP.toLocaleString("fr-FR")} €/mois HT · ${brick.minMonths} mois min.`;
    lines.push(`### ${n}. ${brick.id} (${tiersLine})`);
    lines.push(`- ${brick.scales.low.tierName}: ${brick.scales.low.label}`);
    lines.push(`- ${brick.scales.mid.tierName}: ${brick.scales.mid.label}`);
    lines.push(`- ${brick.scales.high.tierName}: ${brick.scales.high.label}`);
    if (brick.setupFee) {
      lines.push(`- Setup: ${brick.setupFee.amount.toLocaleString("fr-FR")} € — ${brick.setupFee.note ?? ""}${brick.setupFee.deductibleIfEngagement ? " (déductible)" : ""}`);
    }
    if (brick.modifiers?.length) lines.push(`- Modifiers: ${brick.modifiers.join(" · ")}`);
    if (brick.notes?.length) brick.notes.forEach((note) => lines.push(`- ${note}`));
    lines.push("");
    n++;
  }

  // Audit sits in protéger
  for (const brick of ONESHOT_BRICKS.filter((b) => b.category === "audit")) {
    const lowP = roundPrice(computeScalePrice(brick.scales.low).retail);
    const midP = roundPrice(computeScalePrice(brick.scales.mid).retail);
    const highP = roundPrice(computeScalePrice(brick.scales.high).retail);
    lines.push(`### ${n}. ${brick.id} (Audit court ~${formatK(lowP)} k€ · Audit complet ~${formatK(midP)} k€ · Audit + refacto ~${formatK(highP)} k€)`);
    lines.push(`- ${brick.scales.low.label} → ${fmtScale(brick.scales.low)}`);
    lines.push(`- ${brick.scales.mid.label} → ${fmtScale(brick.scales.mid)}`);
    lines.push(`- ${brick.scales.high.label} → ${fmtScale(brick.scales.high)}`);
    if (brick.notes?.length) brick.notes.forEach((note) => lines.push(`- ${note}`));
    lines.push("");
    n++;
  }

  return lines.join("\n");
}

// =====================================================================
// 7. PUBLIC LABELS — used by /tarifs page if it ever switches from
//    hardcoded HTML to a data-driven render. For now, exported so we
//    can audit drift between this model and the public grid.
// =====================================================================

export const priceLabels = {
  oneshot: Object.fromEntries(
    ONESHOT_BRICKS.map((b) => [b.id, getOneshotRange(b).label]),
  ) as Record<string, string>,
  retainer: Object.fromEntries(
    RETAINER_BRICKS.map((b) => [b.id, getRetainerRange(b).label]),
  ) as Record<string, string>,
};
