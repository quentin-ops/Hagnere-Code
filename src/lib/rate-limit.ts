/**
 * Per-IP, in-memory rate limit.
 *
 * PER-INSTANCE caveat: Next.js can scale horizontally (Vercel/Cloudflare
 * Workers spawn new instances per cold start), so the effective limit is
 * N × max requests where N = number of instances. Acceptable for low
 * traffic; migrate to Redis/Cloudflare KV/Durable Objects when volume
 * crosses ~50 reqs/min.
 *
 * Usage:
 *   const store = createRateLimitStore();
 *   const check = checkRateLimit(store, ip, { windowMs, max });
 *   if (!check.ok) return 429.
 */

export interface RateLimitBucket {
  count: number;
  resetAt: number;
}

export type RateLimitStore = Map<string, RateLimitBucket>;

export interface RateLimitOptions {
  windowMs: number;
  max: number;
}

export interface RateLimitResult {
  ok: boolean;
  retryAfterSec?: number;
}

export function createRateLimitStore(): RateLimitStore {
  return new Map();
}

export function checkRateLimit(
  store: RateLimitStore,
  ip: string,
  opts: RateLimitOptions,
): RateLimitResult {
  const now = Date.now();
  const bucket = store.get(ip);
  if (!bucket || bucket.resetAt < now) {
    store.set(ip, { count: 1, resetAt: now + opts.windowMs });
    return { ok: true };
  }
  if (bucket.count >= opts.max) {
    return { ok: false, retryAfterSec: Math.ceil((bucket.resetAt - now) / 1000) };
  }
  bucket.count += 1;
  return { ok: true };
}

/**
 * Opportunistic GC. Cheap when the store is small, walks the map
 * when it hits ~1k entries. Call once per request.
 */
export function gcRateLimitStore(store: RateLimitStore): void {
  if (store.size < 1000) return;
  const now = Date.now();
  for (const [ip, bucket] of store.entries()) {
    if (bucket.resetAt < now) store.delete(ip);
  }
}

/**
 * Extracts a client IP from a Request.
 *
 * Order:
 *   1. `cf-connecting-ip` — réécrit par Cloudflare, **impossible à spoofer**
 *      côté client (Cloudflare strip toute valeur fournie en amont). Source
 *      de vérité quand on est derrière Cloudflare Workers / CDN.
 *   2. `x-forwarded-for[0]` — réécrit par Vercel et la plupart des reverse
 *      proxies, mais peut être chained par un client malveillant si on est
 *      derrière un proxy qui ne strip pas. Acceptable en fallback.
 *   3. `x-real-ip` — fallback pour les setups custom.
 *   4. "unknown" — dernier recours, le rate-limit groupera tous les requêteurs
 *      sans IP identifiable dans le même bucket.
 */
export function getClientIp(request: Request): string {
  const cfIp = request.headers.get("cf-connecting-ip");
  if (cfIp && /^[0-9a-fA-F:.]+$/.test(cfIp.trim())) return cfIp.trim();

  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim() ?? "";
    if (/^[0-9a-fA-F:.]+$/.test(first)) return first;
  }
  return request.headers.get("x-real-ip") || "unknown";
}
