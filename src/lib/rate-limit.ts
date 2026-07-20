import { isIP } from "node:net";

/**
 * Petit rate-limit mémoire conservé pour les tests et les usages locaux qui
 * n'appellent aucun fournisseur. Les routes publiques de production utilisent
 * le limiteur Postgres de `ai-rate-limit.ts` afin de résister au scale-out.
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
 * En production Vercel, `x-vercel-forwarded-for` est prioritaire : Vercel le
 * réécrit avec l'IP publique et documente `x-forwarded-for` comme anti-spoof
 * sur un déploiement direct. Un header Cloudflare fourni par le client ne doit
 * donc jamais pouvoir choisir son bucket sur Vercel.
 *
 * `cf-connecting-ip` n'est fiable que lorsque le runtime Cloudflare est
 * explicitement attesté par l'environnement. Hors plateforme attestée, les
 * en-têtes de proxy ne sont lus que si l'opérateur active explicitement
 * `TRUST_X_FORWARDED_FOR=1` ; un serveur directement exposé retourne sinon
 * `unknown`, pour qu'un client ne puisse pas choisir son bucket.
 */
function firstValidIp(value: string | null): string | null {
  if (!value) return null;
  const first = value.split(",")[0]?.trim() ?? "";
  return isIP(first) > 0 ? first : null;
}

export function getClientIp(request: Request): string {
  if (process.env.VERCEL === "1") {
    return (
      firstValidIp(request.headers.get("x-vercel-forwarded-for")) ||
      firstValidIp(request.headers.get("x-forwarded-for")) ||
      firstValidIp(request.headers.get("x-real-ip")) ||
      "unknown"
    );
  }

  const cloudflareRuntime =
    process.env.CF_PAGES === "1" ||
    process.env.TRUST_CF_CONNECTING_IP === "1";
  if (cloudflareRuntime) {
    const cfIp = firstValidIp(request.headers.get("cf-connecting-ip"));
    if (cfIp) return cfIp;
    return "unknown";
  }

  if (process.env.TRUST_X_FORWARDED_FOR === "1") {
    return (
      firstValidIp(request.headers.get("x-forwarded-for")) ||
      firstValidIp(request.headers.get("x-real-ip")) ||
      "unknown"
    );
  }

  return "unknown";
}
