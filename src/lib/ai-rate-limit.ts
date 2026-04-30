/**
 * Rate limiter Postgres-backed pour /api/estimate.
 *
 * 4 protections empilées :
 *   1. Per-IP / heure   → 5 calls (anti-burst d'un même prospect)
 *   2. Per-IP / 24h     → 10 calls (anti-flood lent depuis 1 IP)
 *   3. Per-email / 24h  → 3 calls (anti-spam même boîte mail)
 *   4. Global / 24h     → 300 calls (circuit breaker volume)
 *
 * 5e protection : circuit breaker COÛT — si tokens cumulés/jour > seuil,
 * on bloque tout le monde pour la journée (anti-attaque distribuée).
 *
 * Toutes les vérifications sont issues de `ai_call_log` (table indexée
 * par created_at + ip + email_hash). Une seule round-trip Postgres pour
 * récupérer les 4 compteurs (1 SQL avec FILTER WHERE).
 *
 * Persistance via Postgres → cold-start safe sur Cloudflare Workers,
 * Vercel Functions, etc. Chaque appel logge un row (ok, blocked, error).
 */

import { sql } from "drizzle-orm";
import { getDb } from "@/db";
import { aiCallLog } from "@/db/schema";
import { createHash } from "node:crypto";

// ── Limites configurables via env (défauts conservateurs) ────────────
const HOUR_MS = 60 * 60 * 1000;
const DAY_MS = 24 * HOUR_MS;

const LIMITS = {
  perIpHour: parseInt(process.env.AI_RATE_PER_IP_HOUR || "5", 10),
  perIpDay: parseInt(process.env.AI_RATE_PER_IP_DAY || "10", 10),
  perEmailDay: parseInt(process.env.AI_RATE_PER_EMAIL_DAY || "3", 10),
  globalDay: parseInt(process.env.AI_RATE_GLOBAL_DAY || "300", 10),
  /**
   * Circuit breaker coût : si la somme des tokens cumulés sur les
   * dernières 24h dépasse ce seuil, on coupe.
   * 5_000_000 tokens ≈ 90 € (Opus 4.7 input+output mix). Largement
   * au-dessus du trafic légitime attendu (300 calls × 15k tokens ≈ 4.5M).
   */
  costBreakerTokensDay: parseInt(
    process.env.AI_COST_BREAKER_TOKENS_DAY || "5000000",
    10,
  ),
};

export type BlockReason =
  | "rate_ip_hour"
  | "rate_ip_day"
  | "rate_email_day"
  | "rate_global_day"
  | "cost_breaker"
  | "captcha_failed"
  | "validation"
  | "ai_error";

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
 * Retourne la décision et la raison de blocage si applicable.
 */
export async function checkAiRateLimit(
  ip: string,
  email: string | undefined | null,
): Promise<RateLimitDecision> {
  const emailHash = hashEmail(email);
  const now = new Date();
  const oneHourAgo = new Date(now.getTime() - HOUR_MS);
  const oneDayAgo = new Date(now.getTime() - DAY_MS);

  // Une seule round-trip : on agrège les 4 compteurs en parallèle via
  // FILTER (WHERE …) sur la même table. Postgres scanne la zone récente
  // grâce aux indexes.
  const result = await getDb().execute(sql`
    SELECT
      COUNT(*) FILTER (
        WHERE ip = ${ip}
          AND created_at >= ${oneHourAgo}
          AND status IN ('ok', 'ai_error')
      )::int AS ip_hour,
      COUNT(*) FILTER (
        WHERE ip = ${ip}
          AND created_at >= ${oneDayAgo}
          AND status IN ('ok', 'ai_error')
      )::int AS ip_day,
      COUNT(*) FILTER (
        WHERE email_hash = ${emailHash}
          AND created_at >= ${oneDayAgo}
          AND status IN ('ok', 'ai_error')
      )::int AS email_day,
      COUNT(*) FILTER (
        WHERE created_at >= ${oneDayAgo}
          AND status IN ('ok', 'ai_error')
      )::int AS global_day,
      COALESCE(SUM(tokens_used) FILTER (
        WHERE created_at >= ${oneDayAgo}
      ), 0)::int AS tokens_day
    FROM ai_call_log
  `);

  // Drizzle execute() renvoie un array de rows. On prend le premier.
  const row = (result as unknown as { rows: Array<Record<string, number>> }).rows?.[0];
  if (!row) {
    // Cas impossible (la query renvoie toujours 1 row), mais on ferme
    // gracieusement si quelque chose tourne mal côté Postgres.
    return { allowed: true };
  }

  const ipHour = Number(row.ip_hour) || 0;
  const ipDay = Number(row.ip_day) || 0;
  const emailDay = Number(row.email_day) || 0;
  const globalDay = Number(row.global_day) || 0;
  const tokensDay = Number(row.tokens_day) || 0;

  // Circuit breaker coût en premier — protection ultime
  if (tokensDay >= LIMITS.costBreakerTokensDay) {
    return {
      allowed: false,
      reason: "cost_breaker",
      message:
        "Service temporairement indisponible (volume exceptionnel). Réessaye demain ou contacte quentin@hagnere-patrimoine.fr.",
      retryAfterSec: 3600,
    };
  }

  // Global daily cap — circuit breaker volume
  if (globalDay >= LIMITS.globalDay) {
    return {
      allowed: false,
      reason: "rate_global_day",
      message:
        "L'estimation IA est très demandée aujourd'hui. Réessaye dans quelques heures ou écris-nous directement.",
      retryAfterSec: 3600,
    };
  }

  // Per-email cap (3/jour) — anti-spam même boîte
  if (emailHash && emailDay >= LIMITS.perEmailDay) {
    return {
      allowed: false,
      reason: "rate_email_day",
      message:
        "Tu as déjà soumis plusieurs briefs aujourd'hui. Si tu as un projet précis, écris-nous à quentin@hagnere-patrimoine.fr.",
      retryAfterSec: DAY_MS / 1000,
    };
  }

  // Per-IP daily cap (10/jour) — anti-flood lent
  if (ipDay >= LIMITS.perIpDay) {
    return {
      allowed: false,
      reason: "rate_ip_day",
      message:
        "Trop de tentatives depuis ton réseau aujourd'hui. Réessaye demain ou contacte-nous directement.",
      retryAfterSec: DAY_MS / 1000,
    };
  }

  // Per-IP hourly cap (5/heure) — anti-burst
  if (ipHour >= LIMITS.perIpHour) {
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
 * Logge une tentative d'appel IA. Best-effort : un échec d'INSERT ne
 * doit jamais casser la réponse au prospect.
 */
export async function logAiCall(args: {
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
        ip: args.ip,
        emailHash: hashEmail(args.email),
        status: args.status,
        blockReason: args.blockReason || null,
        tokensUsed: args.tokensUsed || 0,
        durationMs: args.durationMs || null,
        briefId: args.briefId ?? null,
        userAgent: args.userAgent?.slice(0, 500) || null,
      });
  } catch {
    // Best-effort : on n'échoue jamais à cause d'un log
  }
}

/**
 * Verify Cloudflare Turnstile token côté serveur. Retourne true si valide
 * (ou si TURNSTILE_SECRET_KEY n'est pas configuré → mode dev/skip).
 */
export async function verifyTurnstileToken(
  token: string | undefined,
  ip: string,
): Promise<{ valid: boolean; reason?: string }> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    // Pas configuré → on skip silencieusement (mode dev / setup pas fini).
    return { valid: true };
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
  } catch {
    // Cloudflare injoignable : on bloque par défaut (fail-closed) pour
    // pas laisser une attaque profiter d'un outage.
    return { valid: false, reason: "verify_unreachable" };
  }
}
