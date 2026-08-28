import {
  PayloadTooLargeError,
  readRequestBytesWithLimit,
} from "@/lib/read-request-body";
import {
  checkRateLimit,
  createRateLimitStore,
  gcRateLimitStore,
  getClientIp,
} from "@/lib/rate-limit";
import { log } from "@/lib/logger";

export const runtime = "nodejs";

/**
 * Réception des violations de Content-Security-Policy.
 *
 * Objectif unique : voir immédiatement, côté serveur, qu'une ressource
 * légitime est bloquée par la CSP — typiquement le tag de conversion Google
 * au moment du lancement des campagnes. Sans cette route, un blocage reste
 * invisible en dehors de la console du visiteur.
 *
 * La route n'écrit RIEN en base : elle ne fait que journaliser. Deux
 * précautions, parce qu'un endpoint de report est public par nature :
 *   - un compteur mémoire par IP, pour que le journal ne soit pas une
 *     surface d'inondation ;
 *   - un filtre de provenance : les rapports déclenchés par les extensions
 *     de navigateur (chrome-extension://, inline, eval…) sont acceptés puis
 *     ignorés. Ils représentent l'essentiel du bruit d'un endpoint CSP et
 *     n'apprennent rien sur le site.
 *
 * Aucun contrôle d'`Origin` ici : un rapport CSP est émis par le navigateur
 * lui-même, sans en-tête d'origine garanti.
 */
const MAX_BODY_BYTES = 16_384;
const REPORT_WINDOW_MS = 60 * 60 * 1000;
const REPORT_PER_IP_HOUR = parseInt(
  process.env.CSP_REPORT_PER_IP_HOUR || "30",
  10,
);
const reportStore = createRateLimitStore();

type CspViolation = {
  documentUri: string;
  directive: string;
  blockedUri: string;
};

function asString(value: unknown): string {
  return typeof value === "string" ? value.slice(0, 300) : "";
}

/** Accepte les deux formats : `report-uri` (legacy) et `report-to` (Reporting API). */
function extractViolations(parsed: unknown): CspViolation[] {
  const entries: Array<Record<string, unknown>> = [];

  if (Array.isArray(parsed)) {
    for (const item of parsed.slice(0, 20)) {
      if (item && typeof item === "object") {
        const body = (item as Record<string, unknown>).body;
        if (body && typeof body === "object") {
          entries.push(body as Record<string, unknown>);
        }
      }
    }
  } else if (parsed && typeof parsed === "object") {
    const legacy = (parsed as Record<string, unknown>)["csp-report"];
    if (legacy && typeof legacy === "object") {
      entries.push(legacy as Record<string, unknown>);
    }
  }

  return entries.map((entry) => ({
    documentUri: asString(entry.documentURL ?? entry["document-uri"]),
    directive: asString(
      entry.effectiveDirective ??
        entry["effective-directive"] ??
        entry["violated-directive"],
    ),
    blockedUri: asString(entry.blockedURL ?? entry["blocked-uri"]),
  }));
}

/**
 * Ne conserve que ce qui peut correspondre à une ressource réellement
 * demandée par le site. Le reste (extensions, inline, eval) est du bruit.
 */
function isActionable(violation: CspViolation): boolean {
  return /^https?:\/\//i.test(violation.blockedUri);
}

export async function POST(request: Request): Promise<Response> {
  const ip = getClientIp(request);
  gcRateLimitStore(reportStore);
  const rate = checkRateLimit(reportStore, ip, {
    windowMs: REPORT_WINDOW_MS,
    max: REPORT_PER_IP_HOUR,
  });
  if (!rate.ok) {
    return new Response(null, {
      status: 429,
      headers: { "Retry-After": String(rate.retryAfterSec ?? 60) },
    });
  }

  let parsed: unknown;
  try {
    const bytes = await readRequestBytesWithLimit(request, MAX_BODY_BYTES);
    parsed = JSON.parse(new TextDecoder().decode(bytes));
  } catch (error) {
    if (error instanceof PayloadTooLargeError) {
      return new Response(null, { status: 413 });
    }
    return new Response(null, { status: 400 });
  }

  for (const violation of extractViolations(parsed)) {
    if (!isActionable(violation)) continue;
    log.warn("csp_violation_reported", {
      directive: violation.directive,
      blockedUri: violation.blockedUri,
      documentUri: violation.documentUri,
    });
  }

  return new Response(null, { status: 204 });
}
