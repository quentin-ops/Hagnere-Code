import {
  pgTable,
  text,
  timestamp,
  serial,
  integer,
  boolean,
  index,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

/**
 * project_brief — submissions from the /demarrer-un-projet funnel.
 *
 * Captures the full state of the wizard so that:
 *  - leads aren't lost if the Resend mail fails or lands in spam
 *  - we can analyse drop-off and conversion patterns later
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
   * Slug aléatoire exposé publiquement à la place de l'id PK pour empêcher
   * l'énumération IDOR. Conservé pour un futur backoffice. Nullable pendant
   * la migration ; toute nouvelle insertion remplit cette colonne.
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

  // ── Méta ──
  /**
   * Nom de colonne historique : enregistre désormais la confirmation de lecture
   * de l'information RGPD et la demande de traitement de la demande, pas un
   * consentement utilisé comme base légale du formulaire. Selon l'interlocuteur,
   * le traitement repose sur l'article 6.1.b ou 6.1.f du RGPD.
   */
  consent: boolean("consent").notNull().default(false),
  /** Version de la notice courte rattachée à la soumission. */
  privacyNoticeVersion: text("privacy_notice_version"),
  /**
   * Colonnes historiques : elles ne sont plus alimentées pour les nouveaux
   * briefs. Les métadonnées anti-abus restent limitées à `ai_call_log`, avec
   * une durée de conservation distincte et plus courte.
   */
  ip: text("ip"),
  userAgent: text("user_agent"),
  mailSent: boolean("mail_sent").notNull().default(false),

  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
});

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
  /**
   * Service consommé : 'estimate' (Anthropic) | 'transcribe' (Groq Whisper)
   * | 'inquiry' (Resend mail). Permet de partitionner les compteurs et
   * cost-breakers par route. Default 'estimate' = backfill compatible.
   */
  service: text("service").notNull().default("estimate"),
  ip: text("ip").notNull(),
  /** Hash base64url tronqué de l'email — pour dedup sans stocker en clair. */
  emailHash: text("email_hash"),
  /**
   * Statut de la tentative :
   *  - "ok"        : appel terminé avec succès
   *  - "ai_error"  : provider a renvoyé une erreur (Anthropic, Groq, Resend)
   *  - "blocked"   : refusé en amont (rate limit, captcha, breaker)
   *  - "validation": payload invalide
   *  - "reserved"  : créneau atomiquement réservé avant l'appel externe
   */
  status: text("status").notNull(),
  /** Sous-raison si blocked (rate_ip_hour, rate_ip_day, rate_global_day, rate_email_day, captcha_failed, cost_breaker, secret_misconfigured). */
  blockReason: text("block_reason"),
  /**
   * Cost unit générique :
   *  - 'estimate' → tokens Anthropic cumulés
   *  - 'transcribe' → bytes audio uploadés (proxy de la durée)
   *  - 'inquiry' → 0 (pas de cost unit pertinent, juste un compteur d'appels)
   */
  tokensUsed: integer("tokens_used").default(0).notNull(),
  /** Latence en ms (de la requête à la réponse). */
  durationMs: integer("duration_ms"),
  /** Brief associé si la persistance a réussi avant le call. */
  briefId: integer("brief_id"),
  userAgent: text("user_agent"),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
}, (t) => [
  // (service, ip, created_at) — sert les compteurs per-IP-per-hour et
  // per-IP-per-day filtrés par service. Aussi utile pour le compteur global
  // qui filtre juste (service, created_at) — Postgres peut leading-prefix.
  index("ai_call_log_service_ip_created_at_idx").on(t.service, t.ip, t.createdAt),
  // (service, email_hash, created_at) — sert le compteur per-email-per-day
  // (utilisé seulement par 'estimate' et 'inquiry' aujourd'hui).
  index("ai_call_log_service_email_created_at_idx").on(t.service, t.emailHash, t.createdAt),
  // Compteurs globaux et coût par service sur la fenêtre de 24 h. Le filtre
  // partiel évite d'indexer les lignes d'issue qui ne comptent pas au quota.
  index("ai_call_log_service_created_at_reserved_idx")
    .on(t.service, t.createdAt)
    .where(sql`${t.status} = 'reserved'`),
]);

/**
 * funnel_analytics_event — événements de parcours first-party et anonymes.
 *
 * Le navigateur n'envoie cet événement qu'après un consentement analytics
 * positif. La route ne persiste ni adresse IP, ni user-agent, ni cookie, ni
 * identifiant visiteur : uniquement un nom allowlisté, le chemin sans query
 * string et quelques propriétés primitives bornées.
 */
export const funnelAnalyticsEvent = pgTable("funnel_analytics_event", {
  id: serial("id").primaryKey(),
  eventName: text("event_name").notNull(),
  path: text("path").notNull(),
  /** JSON sérialisé après allowlist, bornage et suppression des valeurs non primitives. */
  props: text("props").notNull().default("{}"),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
}, (t) => [
  index("funnel_analytics_event_name_created_at_idx").on(
    t.eventName,
    t.createdAt,
  ),
  index("funnel_analytics_event_path_created_at_idx").on(t.path, t.createdAt),
]);
