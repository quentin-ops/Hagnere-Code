import {
  pgTable,
  text,
  timestamp,
  serial,
  jsonb,
  integer,
  boolean,
} from "drizzle-orm/pg-core";

// Contacts particuliers (Individual contacts)
export const contactIndividual = pgTable("contact_individual", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow(),
});

// Contacts entreprises (Company contacts)
export const contactCompany = pgTable("contact_company", {
  id: serial("id").primaryKey(),
  siren: text("siren").notNull(),
  companyName: text("company_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow(),
});

/**
 * project_brief — submissions from the /demarrer-un-projet funnel.
 *
 * Captures the full state of the wizard so that:
 *  - leads aren't lost if the Resend mail fails or lands in spam
 *  - we can analyse drop-off and conversion patterns later
 *  - the AI estimate (full JSON) is browsable when calling the prospect
 *
 * All "optional" funnel inputs are nullable rather than required, since
 * users can skip the périmètre / contraintes steps. Strings stored as
 * Postgres text[] arrays for the multi-value fields (kinds, objectives,
 * mustHaves, integrations, existingAssets) — Drizzle's `.array()` modifier
 * gives us TypeScript-typed arrays.
 */
export const projectBrief = pgTable("project_brief", {
  id: serial("id").primaryKey(),

  /**
   * Slug aléatoire (nanoid 21) exposé publiquement à la place de l'id PK
   * pour empêcher l'énumération IDOR sur /demarrer-un-projet/r/<slug>
   * et /api/brief/<slug>. Nullable pendant la migration ; toute nouvelle
   * insertion remplit cette colonne.
   */
  publicSlug: text("public_slug").unique(),

  // ── Contact ──
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company").notNull(),
  role: text("role"),
  siren: text("siren"),

  // ── Project (étape 1) ──
  projectKinds: text("project_kinds").array().notNull().default([]),
  objectives: text("objectives").array().notNull().default([]),

  // ── Contexte (étape 2) ──
  description: text("description"),
  currentSituation: text("current_situation"),
  audience: text("audience"),

  // ── Le contenu (étape 3) ──
  mustHaves: text("must_haves").array().notNull().default([]),
  integrations: text("integrations").array().notNull().default([]),
  existingAssets: text("existing_assets").array().notNull().default([]),
  openScope: text("open_scope"),

  // ── Contraintes (étape 4) ──
  timeline: text("timeline"),
  budget: text("budget"),
  decisionStage: text("decision_stage"),

  // ── Pré-estimation déterministe affichée ──
  estimateOneshotMin: integer("estimate_oneshot_min"),
  estimateOneshotMax: integer("estimate_oneshot_max"),
  estimateMonthlyMin: integer("estimate_monthly_min"),
  estimateMonthlyMax: integer("estimate_monthly_max"),

  // ── Estimation IA (Claude Opus 4.7) ──
  // Stocké en JSONB pour pouvoir requêter sur des champs précis plus tard
  // (ex: WHERE ai_estimate->'summary'->'overall_confidence' = '"high"').
  aiEstimate: jsonb("ai_estimate"),
  aiTokensUsed: integer("ai_tokens_used"),

  // ── Méta ──
  consent: boolean("consent").notNull().default(false),
  ip: text("ip"),
  userAgent: text("user_agent"),
  mailSent: boolean("mail_sent").notNull().default(false),

  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
});

// ===========================================================================
// KNOWLEDGE BASE — feeds the AI prompt at runtime
// ===========================================================================
//
// Quatre tables qui structurent la connaissance du studio (équipe, projets
// livrés, risques typiques, modèles de phasing). Le prompt Claude charge
// ces données au runtime au lieu de tout coder en dur, ce qui permet
// d'ajuster la KB sans redéploiement.
//
// Chaque table a un flag `active` pour archiver des entrées sans les
// supprimer (utile quand un membre quitte ou un projet devient public).
// ===========================================================================

/**
 * ai_call_log — chaque tentative d'appel IA (réussi, refusé, bloqué).
 *
 * Sert à 4 choses :
 *  1. Rate limiting persistant (survit aux cold starts Cloudflare Workers,
 *     vs l'in-memory Map qui se reset à chaque scale-out)
 *  2. Circuit breaker coût : si tokens cumulés/jour > seuil → kill switch
 *  3. Forensic : qui a abusé, depuis quelle IP, sur quelle plage horaire
 *  4. Métriques produit : taux de complétion, latence moyenne, coût/jour
 *
 * Indexée par (ip, created_at) pour les queries de comptage rapides
 * sur fenêtre glissante (1h / 24h).
 */
export const aiCallLog = pgTable("ai_call_log", {
  id: serial("id").primaryKey(),
  ip: text("ip").notNull(),
  /** Hash base64url tronqué de l'email — pour dedup sans stocker en clair. */
  emailHash: text("email_hash"),
  /**
   * Statut de la tentative :
   *  - "ok"        : appel IA terminé avec succès
   *  - "ai_error"  : Anthropic a renvoyé une erreur
   *  - "blocked"   : refusé avant l'appel IA (rate limit, captcha, breaker)
   *  - "validation": payload invalide
   */
  status: text("status").notNull(),
  /** Sous-raison si blocked (rate_ip_hour, rate_ip_day, rate_global, rate_email, captcha_failed, cost_breaker). */
  blockReason: text("block_reason"),
  tokensUsed: integer("tokens_used").default(0).notNull(),
  /** Latence en ms (de la requête à la réponse). */
  durationMs: integer("duration_ms"),
  /** Brief associé si la persistance a réussi avant le call. */
  briefId: integer("brief_id"),
  userAgent: text("user_agent"),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
});

/**
 * team_member — la vraie équipe Hagnéré Code, source de vérité pour le
 * prompt et /equipe (à terme). Les coûts viennent de pricing-model.ts ;
 * cette table contient les méta affichables (specialties, photo, links).
 */
export const teamMember = pgTable("team_member", {
  id: serial("id").primaryKey(),
  /** Slug stable pour référencer le membre dans le code (e.g. "quentin"). */
  slug: text("slug").notNull().unique(),
  fullName: text("full_name").notNull(),
  /** Étiquette officielle utilisée dans le prompt et la sortie IA. */
  promptLabel: text("prompt_label").notNull(),
  role: text("role").notNull(),
  specialties: text("specialties").array().notNull().default([]),
  /** Profils auxquels ce membre peut être affecté (depuis pricing-model.ts). */
  pricingProfileId: text("pricing_profile_id"),
  hourlySellRate: integer("hourly_sell_rate"),
  availableHoursPerWeek: integer("available_hours_per_week"),
  /** @deprecated Utilise externalProfileUrl + externalProfileLabel à la place. Conservé pour rétrocompat. */
  linkedinUrl: text("linkedin_url"),
  /**
   * URL du profil professionnel externe (LinkedIn, Codeur, GitHub, etc.).
   * Remplace linkedinUrl qui était trop spécifique — un freelance peut
   * n'avoir qu'un Codeur.com sans LinkedIn par exemple.
   */
  externalProfileUrl: text("external_profile_url"),
  /** Label affichable : "LinkedIn", "Codeur", "GitHub". Affiché en alt + tooltip. */
  externalProfileLabel: text("external_profile_label"),
  photoUrl: text("photo_url"),
  active: boolean("active").notNull().default(true),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
});

/**
 * case_study — projets réels que l'IA peut référencer pour rendre
 * l'estimation crédible ("comme LMNP.AI livré en 8 semaines"). Pré-rempli
 * avec les 4 réalisations publiques + extensible.
 */
export const caseStudy = pgTable("case_study", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  clientName: text("client_name").notNull(),
  industry: text("industry").notNull(),
  /** ServiceIds applicables (correspondance avec services). */
  services: text("services").array().notNull().default([]),
  /** Combinaison de ProjectKindId pour matching combo. */
  projectKinds: text("project_kinds").array().notNull().default([]),
  durationWeeks: integer("duration_weeks").notNull(),
  teamSize: integer("team_size").notNull(),
  priceMin: integer("price_min"),
  priceMax: integer("price_max"),
  monthlyMin: integer("monthly_min"),
  monthlyMax: integer("monthly_max"),
  /** Synthèse 1-2 phrases injectable dans le prompt. */
  promptSummary: text("prompt_summary").notNull(),
  outcomeSummary: text("outcome_summary"),
  stack: text("stack").array().notNull().default([]),
  integrations: text("integrations").array().notNull().default([]),
  testimonial: text("testimonial"),
  publicSlug: text("public_slug"),
  publicUrl: text("public_url"),
  active: boolean("active").notNull().default(true),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
});

/**
 * risk_template — risques typés par service. L'IA puise ici au lieu
 * d'inventer, ce qui garantit cohérence d'un appel à l'autre.
 */
export const riskTemplate = pgTable("risk_template", {
  id: serial("id").primaryKey(),
  serviceId: text("service_id").notNull(),
  severity: text("severity").notNull(), // 'low' | 'medium' | 'high'
  title: text("title").notNull(),
  mitigation: text("mitigation").notNull(),
  /** Conditions optionnelles ("multi_tenant=true", "users>500") qui activent ce risque. */
  triggers: text("triggers").array().notNull().default([]),
  active: boolean("active").notNull().default(true),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
});

/**
 * phasing_template — modèles de phasing par service × scale (low/mid/high).
 * Donne à l'IA un squelette à customiser au lieu de tout inventer.
 */
export const phasingTemplate = pgTable("phasing_template", {
  id: serial("id").primaryKey(),
  serviceId: text("service_id").notNull(),
  scale: text("scale").notNull(), // 'low' | 'mid' | 'high'
  week: integer("week").notNull(),
  weekName: text("week_name").notNull(),
  tasks: text("tasks").array().notNull().default([]),
  clientDeliverable: text("client_deliverable").notNull(),
  acceptanceCriteria: text("acceptance_criteria").array().notNull().default([]),
  qualityGates: text("quality_gates").array().notNull().default([]),
  fridayDemo: text("friday_demo").notNull(),
  active: boolean("active").notNull().default(true),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
});
