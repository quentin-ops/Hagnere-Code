/**
 * Rate limiter Postgres-backed multi-services.
 *
 * Sert 2 routes coûteuses :
 *   - 'transcribe' → Groq Whisper (cost = bytes audio uploadés)
 *   - 'inquiry'    → Resend mail (pas de cost unit, juste compteur)
 *
 * 4 protections empilées par service :
 *   1. Per-IP / heure   → anti-burst d'un même prospect
 *   2. Per-IP / 24h     → anti-flood lent depuis 1 IP
 *   3. Per-email / 24h  → anti-spam même boîte mail (inquiry)
 *   4. Global / 24h     → circuit breaker volume
 *
 * 5e protection : circuit breaker COÛT — si cost units cumulés/jour > seuil,
 * on bloque tout le monde pour la journée (anti-attaque distribuée).
 *
 * Toutes les vérifications sont issues de `ai_call_log` (table indexée
 * sur (service, ip, created_at) et (service, email_hash, created_at)).
 * Une seule round-trip Postgres pour récupérer les 5 compteurs.
 *
 * Persistance via Postgres → cold-start safe sur Cloudflare Workers,
 * Vercel Functions, etc. Chaque appel logge un row (ok, blocked, error).
 */

import { sql } from "drizzle-orm";
import { getDb } from "@/db";
import { aiCallLog } from "@/db/schema";
import { createHash } from "node:crypto";
import { log } from "@/lib/logger";

// ── Service identifiers ──────────────────────────────────────────────
// NB : la table ai_call_log contient encore des rows historiques avec
// service='estimate' (ancien estimateur IA supprimé) — ne pas purger.
export type ServiceId = "transcribe" | "inquiry";

// ── Limites par service (defaults conservateurs) ─────────────────────
//
// `costBreaker: null` = pas de circuit breaker coût pour ce service
// (utile pour 'inquiry' qui n'a pas de coût marginal mesurable).
//
// Tous les seuils sont overridables via env pour les tests / scale-up.
const HOUR_MS = 60 * 60 * 1000;
const DAY_MS = 24 * HOUR_MS;

interface ServiceLimits {
  perIpHour: number;
  perIpDay: number;
  /** null = pas de limite per-email (typique pour les services non-email). */
  perEmailDay: number | null;
  globalDay: number;
  /** null = pas de cost breaker. Sinon : seuil cumulé sur 24h. */
  costBreaker: number | null;
}

const SERVICE_LIMITS: Record<ServiceId, ServiceLimits> = {
  transcribe: {
    perIpHour: parseInt(process.env.TRANSCRIBE_RATE_PER_IP_HOUR || "20", 10),
    perIpDay: parseInt(process.env.TRANSCRIBE_RATE_PER_IP_DAY || "50", 10),
    perEmailDay: null, // pas d'email associé à une transcription
    globalDay: parseInt(process.env.TRANSCRIBE_RATE_GLOBAL_DAY || "1000", 10),
    /**
     * 500 MB cumulés/jour ≈ 200 h audio ≈ 8 € de Groq Whisper. Au-dessus
     * du trafic légitime (~50 dictées × 5 MB = 250 MB). Cost unit = bytes
     * uploadés (proxy raisonnable de la durée audio).
     */
    costBreaker: parseInt(process.env.TRANSCRIBE_COST_BREAKER_BYTES_DAY || "524288000", 10),
  },
  inquiry: {
    perIpHour: parseInt(process.env.INQUIRY_RATE_PER_IP_HOUR || "5", 10),
    perIpDay: parseInt(process.env.INQUIRY_RATE_PER_IP_DAY || "15", 10),
    perEmailDay: parseInt(process.env.INQUIRY_RATE_PER_EMAIL_DAY || "2", 10),
    globalDay: parseInt(process.env.INQUIRY_RATE_GLOBAL_DAY || "100", 10),
    costBreaker: null, // pas de coût marginal mesurable côté serveur
  },
};

export type BlockReason =
  | "rate_ip_hour"
  | "rate_ip_day"
  | "rate_email_day"
  | "rate_global_day"
  | "cost_breaker"
  | "captcha_failed"
  | "validation"
  | "ai_error"
  | "secret_misconfigured";

export interface RateLimitDecision {
  allowed: boolean;
  /** Ligne réservée atomiquement avant tout appel externe. */
  reservationId?: number;
  reason?: BlockReason;
  /** Message FR retourné au client (ne révèle pas la raison exacte aux bots). */
  message?: string;
  /** Secondes avant la prochaine fenêtre de réessai possible. */
  retryAfterSec?: number;
}

/**
 * Hash email pour dédup sans stocker en clair (évite PII dans les logs).
 * SHA-256 tronqué base64url 12 chars = collision négligeable à notre échelle.
 */
export function hashEmail(email: string | undefined | null): string | null {
  if (!email) return null;
  const normalised = email.trim().toLowerCase();
  if (!normalised) return null;
  return createHash("sha256")
    .update(normalised)
    .digest("base64url")
    .slice(0, 12);
}

/**
 * Vérifie tous les rate limits en UNE seule query SQL (FILTER WHERE).
 * Filtre sur le service indiqué pour partitionner les compteurs.
 */
export async function checkServiceRateLimit(
  ip: string,
  email: string | undefined | null,
  service: ServiceId,
  userAgent?: string | null,
): Promise<RateLimitDecision> {
  const limits = SERVICE_LIMITS[service];
  const emailHash = hashEmail(email);
  const now = new Date();
  const oneHourAgo = new Date(now.getTime() - HOUR_MS);
  const oneDayAgo = new Date(now.getTime() - DAY_MS);

  // Une seule requête prend un verrou transactionnel par service, lit les
  // compteurs puis insère la réservation. Deux appels concurrents ne peuvent
  // plus tous observer le même compteur avant leur INSERT.
  const result = await getDb().execute(sql`
    WITH rate_lock AS (
      SELECT pg_advisory_xact_lock(hashtext(${"hagnere-code-rate:" + service})) AS locked
    ),
    counters AS (
      SELECT
        COUNT(*) FILTER (
          WHERE service = ${service}
            AND ip = ${ip}
            AND created_at >= ${oneHourAgo}
            AND status = 'reserved'
        )::int AS ip_hour,
        COUNT(*) FILTER (
          WHERE service = ${service}
            AND ip = ${ip}
            AND created_at >= ${oneDayAgo}
            AND status = 'reserved'
        )::int AS ip_day,
        COUNT(*) FILTER (
          WHERE service = ${service}
            AND email_hash = ${emailHash}
            AND created_at >= ${oneDayAgo}
            AND status = 'reserved'
        )::int AS email_day,
        COUNT(*) FILTER (
          WHERE service = ${service}
            AND created_at >= ${oneDayAgo}
            AND status = 'reserved'
        )::int AS global_day,
        COALESCE(SUM(tokens_used) FILTER (
          WHERE service = ${service}
            AND created_at >= ${oneDayAgo}
            AND status = 'reserved'
        ), 0)::bigint AS cost_day
      FROM ai_call_log, rate_lock
    ),
    reservation AS (
      INSERT INTO ai_call_log (
        service, ip, email_hash, status, block_reason, tokens_used,
        duration_ms, brief_id, user_agent
      )
      SELECT
        ${service}, ${ip}, ${emailHash}, 'reserved', NULL, 0,
        NULL, NULL, ${userAgent?.slice(0, 500) || null}
      FROM counters
      WHERE ip_hour < ${limits.perIpHour}
        AND ip_day < ${limits.perIpDay}
        AND global_day < ${limits.globalDay}
        AND (
          ${limits.perEmailDay === null || !emailHash}
          OR email_day < ${limits.perEmailDay ?? 0}
        )
        AND (
          ${limits.costBreaker === null}
          OR cost_day < ${limits.costBreaker ?? 0}
        )
      RETURNING id
    )
    SELECT
      counters.*,
      reservation.id AS reservation_id
    FROM counters
    LEFT JOIN reservation ON TRUE
  `);

  const row = (result as unknown as { rows: Array<Record<string, number | string>> }).rows?.[0];
  if (!row) throw new Error("Rate-limit reservation returned no row");

  const ipHour = Number(row.ip_hour) || 0;
  const ipDay = Number(row.ip_day) || 0;
  const emailDay = Number(row.email_day) || 0;
  const globalDay = Number(row.global_day) || 0;
  const costDay = Number(row.cost_day) || 0;
  const reservationId = Number(row.reservation_id) || 0;

  if (reservationId > 0) {
    return { allowed: true, reservationId };
  }

  // Circuit breaker coût en premier — protection ultime
  if (limits.costBreaker !== null && costDay >= limits.costBreaker) {
    return {
      allowed: false,
      reason: "cost_breaker",
      message:
        "Service temporairement indisponible (volume exceptionnel). Réessaye demain ou contacte quentin@hagnere-patrimoine.fr.",
      retryAfterSec: 3600,
    };
  }

  // Global daily cap
  if (globalDay >= limits.globalDay) {
    return {
      allowed: false,
      reason: "rate_global_day",
      message:
        "Le service est très demandé aujourd'hui. Réessaye dans quelques heures ou écris-nous directement.",
      retryAfterSec: 3600,
    };
  }

  // Per-email cap (anti-spam même boîte) — uniquement si applicable
  if (limits.perEmailDay !== null && emailHash && emailDay >= limits.perEmailDay) {
    return {
      allowed: false,
      reason: "rate_email_day",
      message:
        "Tu as déjà soumis plusieurs demandes aujourd'hui. Si tu as un projet précis, écris-nous à quentin@hagnere-patrimoine.fr.",
      retryAfterSec: DAY_MS / 1000,
    };
  }

  // Per-IP daily cap
  if (ipDay >= limits.perIpDay) {
    return {
      allowed: false,
      reason: "rate_ip_day",
      message:
        "Trop de tentatives depuis ton réseau aujourd'hui. Réessaye demain ou contacte-nous directement.",
      retryAfterSec: DAY_MS / 1000,
    };
  }

  // Per-IP hourly cap
  if (ipHour >= limits.perIpHour) {
    return {
      allowed: false,
      reason: "rate_ip_hour",
      message:
        "Trop de tentatives sur la dernière heure. Réessaye dans une heure.",
      retryAfterSec: HOUR_MS / 1000,
    };
  }

  throw new Error("Rate-limit reservation failed without a matching limit");
}

/**
 * Réserve atomiquement le coût réel une fois le fichier validé, mais avant
 * l'appel Groq. Les réservations concurrentes sont sérialisées par le même
 * verrou que le compteur principal.
 */
export async function reserveServiceCost(
  reservationId: number,
  service: ServiceId,
  tokensUsed: number,
): Promise<RateLimitDecision> {
  const limits = SERVICE_LIMITS[service];
  if (limits.costBreaker === null) {
    return { allowed: true, reservationId };
  }

  const oneDayAgo = new Date(Date.now() - DAY_MS);
  const safeTokens = Math.max(0, Math.trunc(tokensUsed));
  const result = await getDb().execute(sql`
    WITH rate_lock AS (
      SELECT pg_advisory_xact_lock(hashtext(${"hagnere-code-rate:" + service})) AS locked
    ),
    totals AS (
      SELECT COALESCE(SUM(tokens_used), 0)::bigint AS cost_day
      FROM ai_call_log, rate_lock
      WHERE service = ${service}
        AND status = 'reserved'
        AND created_at >= ${oneDayAgo}
        AND id <> ${reservationId}
    ),
    updated AS (
      UPDATE ai_call_log
      SET tokens_used = ${safeTokens}
      FROM totals
      WHERE ai_call_log.id = ${reservationId}
        AND ai_call_log.service = ${service}
        AND ai_call_log.status = 'reserved'
        AND totals.cost_day + ${safeTokens} <= ${limits.costBreaker}
      RETURNING ai_call_log.id
    )
    SELECT totals.cost_day, updated.id AS reservation_id
    FROM totals
    LEFT JOIN updated ON TRUE
  `);
  const row = (result as unknown as {
    rows: Array<Record<string, number | string | null>>;
  }).rows?.[0];
  if (!row) throw new Error("Cost reservation returned no row");
  const updatedId = Number(row.reservation_id) || 0;
  if (updatedId > 0) return { allowed: true, reservationId: updatedId };

  return {
    allowed: false,
    reason: "cost_breaker",
    message:
      "Service temporairement indisponible (volume exceptionnel). Réessaye demain ou saisis ton texte.",
    retryAfterSec: 3600,
  };
}

/**
 * Logge une tentative d'appel. Le service et le cost unit (tokens, bytes)
 * dépendent du caller. Les erreurs DB sont loggées mais ne propagent pas —
 * un échec d'INSERT ne doit jamais casser la réponse au prospect.
 */
export async function logAiCall(args: {
  service: ServiceId;
  ip: string;
  email?: string | null;
  status: "ok" | "ai_error" | "blocked" | "validation";
  blockReason?: BlockReason;
  tokensUsed?: number;
  durationMs?: number;
  briefId?: number | null;
  userAgent?: string | null;
}): Promise<void> {
  try {
    await getDb()
      .insert(aiCallLog)
      .values({
        service: args.service,
        ip: args.ip,
        emailHash: hashEmail(args.email),
        status: args.status,
        blockReason: args.blockReason || null,
        tokensUsed: args.tokensUsed || 0,
        durationMs: args.durationMs || null,
        briefId: args.briefId ?? null,
        userAgent: args.userAgent?.slice(0, 500) || null,
      });
  } catch (err) {
    // Loggé pour observabilité — sans propager pour ne pas casser la
    // réponse. Si la DB tombe, le cost breaker est neutralisé silencieusement
    // sinon. Avec ce log, on peut alerter sur le taux d'erreur.
    log.error("ai_call_log_insert_failed", {
      err: err as Error,
      service: args.service,
      status: args.status,
    });
  }
}
