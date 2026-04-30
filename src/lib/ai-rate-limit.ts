/**
 * Rate limiter Postgres-backed multi-services.
 *
 * Sert 3 routes coûteuses :
 *   - 'estimate'   → Anthropic Claude Opus 4.7 (cost = tokens IA)
 *   - 'transcribe' → Groq Whisper (cost = bytes audio uploadés)
 *   - 'inquiry'    → Resend mail (pas de cost unit, juste compteur)
 *
 * 4 protections empilées par service :
 *   1. Per-IP / heure   → anti-burst d'un même prospect
 *   2. Per-IP / 24h     → anti-flood lent depuis 1 IP
 *   3. Per-email / 24h  → anti-spam même boîte mail (estimate + inquiry)
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
export type ServiceId = "estimate" | "transcribe" | "inquiry";

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
  estimate: {
    perIpHour: parseInt(process.env.AI_RATE_PER_IP_HOUR || "5", 10),
    perIpDay: parseInt(process.env.AI_RATE_PER_IP_DAY || "10", 10),
    perEmailDay: parseInt(process.env.AI_RATE_PER_EMAIL_DAY || "3", 10),
    globalDay: parseInt(process.env.AI_RATE_GLOBAL_DAY || "300", 10),
    /**
     * 5_000_000 tokens ≈ 90 € (Opus 4.7 input+output mix). Largement
     * au-dessus du trafic légitime (300 calls × 15k tokens ≈ 4.5M).
     */
    costBreaker: parseInt(process.env.AI_COST_BREAKER_TOKENS_DAY || "5000000", 10),
  },
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
): Promise<RateLimitDecision> {
  const limits = SERVICE_LIMITS[service];
  const emailHash = hashEmail(email);
  const now = new Date();
  const oneHourAgo = new Date(now.getTime() - HOUR_MS);
  const oneDayAgo = new Date(now.getTime() - DAY_MS);

  // Une seule round-trip : on agrège les 5 compteurs en parallèle via
  // FILTER (WHERE …) sur la même table, scopés par service.
  const result = await getDb().execute(sql`
    SELECT
      COUNT(*) FILTER (
        WHERE service = ${service}
          AND ip = ${ip}
          AND created_at >= ${oneHourAgo}
          AND status IN ('ok', 'ai_error')
      )::int AS ip_hour,
      COUNT(*) FILTER (
        WHERE service = ${service}
          AND ip = ${ip}
          AND created_at >= ${oneDayAgo}
          AND status IN ('ok', 'ai_error')
      )::int AS ip_day,
      COUNT(*) FILTER (
        WHERE service = ${service}
          AND email_hash = ${emailHash}
          AND created_at >= ${oneDayAgo}
          AND status IN ('ok', 'ai_error')
      )::int AS email_day,
      COUNT(*) FILTER (
        WHERE service = ${service}
          AND created_at >= ${oneDayAgo}
          AND status IN ('ok', 'ai_error')
      )::int AS global_day,
      COALESCE(SUM(tokens_used) FILTER (
        WHERE service = ${service}
          AND created_at >= ${oneDayAgo}
      ), 0)::bigint AS cost_day
    FROM ai_call_log
  `);

  const row = (result as unknown as { rows: Array<Record<string, number | string>> }).rows?.[0];
  if (!row) {
    // Cas impossible (la query renvoie toujours 1 row), mais fail-open
    // pour ne pas bloquer un legit user si Postgres répond bizarrement.
    return { allowed: true };
  }

  const ipHour = Number(row.ip_hour) || 0;
  const ipDay = Number(row.ip_day) || 0;
  const emailDay = Number(row.email_day) || 0;
  const globalDay = Number(row.global_day) || 0;
  const costDay = Number(row.cost_day) || 0;

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

  return { allowed: true };
}

/**
 * Backwards-compat alias — l'ancien checkAiRateLimit ciblait uniquement
 * 'estimate'. Conservé pour ne pas casser un import qui aurait survécu
 * à la migration. Marqué deprecated pour nouvelle vague.
 *
 * @deprecated utilise checkServiceRateLimit(ip, email, 'estimate').
 */
export const checkAiRateLimit = (
  ip: string,
  email: string | undefined | null,
): Promise<RateLimitDecision> => checkServiceRateLimit(ip, email, "estimate");

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

/**
 * Verify Cloudflare Turnstile token côté serveur.
 *
 * En dev (NEXT_PUBLIC_ENV='development'), si TURNSTILE_SECRET_KEY n'est
 * pas configuré, on skip silencieusement (mode setup pas fini).
 *
 * En prod, l'absence de secret est une **erreur de configuration**.
 * On retourne `valid: false` avec reason='secret_misconfigured' pour
 * bloquer toute l'API plutôt que de laisser passer du trafic non vérifié.
 * Couplé au log error, l'incident remonte immédiatement.
 */
export async function verifyTurnstileToken(
  token: string | undefined,
  ip: string,
): Promise<{ valid: boolean; reason?: string }> {
  // En dev, on skip Turnstile complètement (la site key de prod n'est
  // typiquement pas whitelistée pour localhost, le widget reste idle et
  // bloque la dictée + le form). Le côté client a le même garde-fou.
  if (process.env.NEXT_PUBLIC_ENV === "development") {
    return { valid: true };
  }
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    log.error("turnstile_secret_missing_in_prod", {});
    return { valid: false, reason: "secret_misconfigured" };
  }
  if (!token) {
    return { valid: false, reason: "missing_token" };
  }
  try {
    const form = new FormData();
    form.append("secret", secret);
    form.append("response", token);
    form.append("remoteip", ip);
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      { method: "POST", body: form },
    );
    const json = (await res.json()) as { success?: boolean; "error-codes"?: string[] };
    if (!json.success) {
      return { valid: false, reason: (json["error-codes"] || []).join(",") || "rejected" };
    }
    return { valid: true };
  } catch (err) {
    // Cloudflare injoignable : on bloque par défaut (fail-closed) pour
    // pas laisser une attaque profiter d'un outage.
    log.warn("turnstile_verify_unreachable", { err: err as Error });
    return { valid: false, reason: "verify_unreachable" };
  }
}
