import { getCloudflareContext } from "@opennextjs/cloudflare";
import { FUNNEL_EVENT_NAMES } from "@/lib/funnel-analytics";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 8_192;
const MAX_PROPS = 16;
const ALLOWED_EVENTS = new Set<string>(FUNNEL_EVENT_NAMES);

type Primitive = string | number | boolean;
type AnalyticsPayload = {
  name: string;
  path: string;
  props: Record<string, Primitive>;
};

function sanitizeProps(value: unknown): Record<string, Primitive> {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};

  const clean: Record<string, Primitive> = {};
  for (const [key, item] of Object.entries(value).slice(0, MAX_PROPS)) {
    if (!/^[a-zA-Z0-9_:-]{1,48}$/.test(key)) continue;
    if (typeof item === "string") clean[key] = item.slice(0, 160);
    if (typeof item === "boolean") clean[key] = item;
    if (typeof item === "number" && Number.isFinite(item)) clean[key] = item;
  }
  return clean;
}

function parsePayload(rawBody: string): AnalyticsPayload | null {
  let value: unknown;
  try {
    value = JSON.parse(rawBody);
  } catch {
    return null;
  }

  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const candidate = value as Record<string, unknown>;
  if (typeof candidate.name !== "string" || !ALLOWED_EVENTS.has(candidate.name)) {
    return null;
  }
  if (
    typeof candidate.path !== "string" ||
    !candidate.path.startsWith("/") ||
    candidate.path.length > 512
  ) {
    return null;
  }

  return {
    name: candidate.name,
    path: candidate.path,
    props: sanitizeProps(candidate.props),
  };
}

export async function POST(request: Request): Promise<Response> {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return Response.json({ error: "Payload trop volumineux." }, { status: 413 });
  }

  const requestOrigin = new URL(request.url).origin;
  const origin = request.headers.get("origin");
  if (origin && origin !== requestOrigin) {
    return Response.json({ error: "Origine refusée." }, { status: 403 });
  }

  const rawBody = await request.text();
  if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
    return Response.json({ error: "Payload trop volumineux." }, { status: 413 });
  }

  const payload = parsePayload(rawBody);
  if (!payload) {
    return Response.json({ error: "Événement invalide." }, { status: 400 });
  }

  // `next dev` ne dispose pas du binding Worker. Le log rend les parcours
  // testables localement sans prétendre avoir persisté l'événement.
  if (process.env.NEXT_PUBLIC_ENV !== "production") {
    console.info("[funnel-analytics:dev]", payload);
    return new Response(null, { status: 204 });
  }

  try {
    const { env } = await getCloudflareContext({ async: true });
    if (!env.FUNNEL_ANALYTICS) {
      console.error("[funnel-analytics] Binding FUNNEL_ANALYTICS absent.");
      return Response.json({ error: "Collecteur indisponible." }, { status: 503 });
    }

    // Aucune IP, aucun user-agent, aucun cookie ni identifiant persistant.
    // Analytics Engine horodate lui-même chaque point à l'écriture.
    env.FUNNEL_ANALYTICS.writeDataPoint({
      indexes: [payload.name],
      blobs: [payload.path, JSON.stringify(payload.props)],
      doubles: [Object.keys(payload.props).length],
    });
    return new Response(null, { status: 204 });
  } catch (error) {
    console.error("[funnel-analytics] Écriture impossible.", error);
    return Response.json({ error: "Collecteur indisponible." }, { status: 503 });
  }
}
