import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import {
  ESTIMATE_SYSTEM_PROMPT,
  ESTIMATE_JSON_SCHEMA,
} from "@/lib/claude-estimate-prompt";
import {
  PROJECT_TYPES,
  URGENCY_LEVELS,
  FEATURE_OPTIONS,
  INTEGRATION_OPTIONS,
  type CalculatorInput,
  type EstimateApiResponse,
  type EstimateResult,
} from "@/components/estimer-mon-projet/types";

export const runtime = "nodejs";

// =====================================================================
// Rate limiting — simple in-memory per-IP bucket.
// In production with multiple instances, replace with Redis or Upstash.
// =====================================================================

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX_REQUESTS = 5; // 5 estimations / hour / IP
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return request.headers.get("x-real-ip") || "unknown";
}

function checkRateLimit(ip: string): { ok: boolean; retryAfterSec?: number } {
  const now = Date.now();
  const bucket = rateLimitStore.get(ip);
  if (!bucket || bucket.resetAt < now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { ok: true };
  }
  if (bucket.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { ok: false, retryAfterSec: Math.ceil((bucket.resetAt - now) / 1000) };
  }
  bucket.count += 1;
  return { ok: true };
}

// Opportunistic GC to prevent unbounded growth.
function gcRateLimitStore() {
  if (rateLimitStore.size < 1000) return;
  const now = Date.now();
  for (const [ip, bucket] of rateLimitStore.entries()) {
    if (bucket.resetAt < now) rateLimitStore.delete(ip);
  }
}

// =====================================================================
// Input validation
// =====================================================================

const FEATURE_IDS = new Set(FEATURE_OPTIONS.map((o) => o.id));
const INTEGRATION_IDS = new Set(INTEGRATION_OPTIONS.map((o) => o.id));
const USERS_COUNTS = new Set(["small", "medium", "large", "huge"]);

function validate(body: unknown): {
  ok: boolean;
  input?: CalculatorInput;
  errors?: Record<string, string>;
} {
  if (!body || typeof body !== "object") {
    return { ok: false, errors: { _: "Payload invalide." } };
  }
  const b = body as Record<string, unknown>;
  const errors: Record<string, string> = {};

  if (typeof b.projectType !== "string" || !PROJECT_TYPES.includes(b.projectType as (typeof PROJECT_TYPES)[number])) {
    errors.projectType = "Type de projet invalide.";
  }
  const screensCount = Number(b.screensCount);
  if (!Number.isFinite(screensCount) || screensCount < 1 || screensCount > 200) {
    errors.screensCount = "Nombre d'écrans entre 1 et 200.";
  }
  if (typeof b.usersCount !== "string" || !USERS_COUNTS.has(b.usersCount)) {
    errors.usersCount = "Taille d'audience invalide.";
  }
  if (!Array.isArray(b.features) || b.features.some((f) => typeof f !== "string" || !FEATURE_IDS.has(f as never))) {
    errors.features = "Features invalides.";
  }
  if (!Array.isArray(b.integrations) || b.integrations.some((i) => typeof i !== "string" || !INTEGRATION_IDS.has(i as never))) {
    errors.integrations = "Intégrations invalides.";
  }
  if (typeof b.urgency !== "string" || !URGENCY_LEVELS.includes(b.urgency as (typeof URGENCY_LEVELS)[number])) {
    errors.urgency = "Délai invalide.";
  }
  const description = (typeof b.description === "string" ? b.description : "").trim();
  if (description.length < 50) errors.description = "Décrivez votre projet en 50 caractères minimum.";
  if (description.length > 4000) errors.description = "Maximum 4 000 caractères.";

  const email = typeof b.email === "string" ? b.email.trim() : undefined;
  const firstName = typeof b.firstName === "string" ? b.firstName.trim().slice(0, 80) : undefined;
  const company = typeof b.company === "string" ? b.company.trim().slice(0, 120) : undefined;
  if (email && email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    errors.email = "Adresse email invalide.";
  }

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  return {
    ok: true,
    input: {
      projectType: b.projectType as CalculatorInput["projectType"],
      screensCount: Math.round(screensCount),
      usersCount: b.usersCount as CalculatorInput["usersCount"],
      features: (b.features as string[]).slice(0, 20) as CalculatorInput["features"],
      integrations: (b.integrations as string[]).slice(0, 20) as CalculatorInput["integrations"],
      urgency: b.urgency as CalculatorInput["urgency"],
      description,
      email: email && email.length > 0 ? email.slice(0, 200) : undefined,
      firstName,
      company,
      honeypot: typeof b.honeypot === "string" ? b.honeypot : undefined,
    },
  };
}

// =====================================================================
// Claude call — structured output enforced via JSON schema
// =====================================================================

function buildUserMessage(input: CalculatorInput): string {
  const featureLabels = input.features
    .map((id) => FEATURE_OPTIONS.find((o) => o.id === id)?.label)
    .filter(Boolean);
  const integrationLabels = input.integrations
    .map((id) => INTEGRATION_OPTIONS.find((o) => o.id === id)?.label)
    .filter(Boolean);

  return `Voici le brief du prospect à analyser. Produis une estimation JSON conforme au schéma.

## Type de projet
${input.projectType}

## Périmètre
- Nombre d'écrans estimé : ${input.screensCount}
- Taille d'audience : ${input.usersCount} (${
    input.usersCount === "small"
      ? "< 50 users"
      : input.usersCount === "medium"
      ? "50 à 500 users"
      : input.usersCount === "large"
      ? "500 à 5 000 users"
      : "5 000+ users"
  })

## Features souhaitées
${featureLabels.length > 0 ? featureLabels.map((l) => `- ${l}`).join("\n") : "Aucune feature spécifique cochée."}

## Intégrations
${integrationLabels.length > 0 ? integrationLabels.map((l) => `- ${l}`).join("\n") : "Aucune intégration spécifique cochée."}

## Délai souhaité
${input.urgency}

## Description libre du projet
"""
${input.description}
"""
`;
}

async function callClaude(input: CalculatorInput): Promise<{
  result: EstimateResult;
  tokens_used: number;
}> {
  const client = new Anthropic();
  const userMessage = buildUserMessage(input);

  // System prompt in an array with cache_control on the last (only) block
  // → cached after first request, ~90 % cost reduction on subsequent requests.
  const response = await client.messages.create({
    model: "claude-opus-4-7",
    max_tokens: 16000,
    thinking: { type: "adaptive" },
    output_config: {
      effort: "high",
      format: {
        type: "json_schema",
        schema: ESTIMATE_JSON_SCHEMA,
      },
    },
    system: [
      {
        type: "text",
        text: ESTIMATE_SYSTEM_PROMPT,
        cache_control: { type: "ephemeral" },
      },
    ],
    messages: [{ role: "user", content: userMessage }],
  });

  // output_config.format with json_schema guarantees the first text block
  // contains valid JSON conforming to the schema.
  const textBlock = response.content.find((b) => b.type === "text");
  if (!textBlock || textBlock.type !== "text") {
    throw new Error("Claude returned no text block");
  }
  const result = JSON.parse(textBlock.text) as EstimateResult;

  const tokens_used =
    (response.usage.input_tokens || 0) +
    (response.usage.output_tokens || 0) +
    (response.usage.cache_read_input_tokens || 0);

  return { result, tokens_used };
}

// =====================================================================
// Route
// =====================================================================

export async function POST(request: Request): Promise<NextResponse<EstimateApiResponse>> {
  // 1. Parse JSON
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Payload JSON invalide." },
      { status: 400 },
    );
  }

  // 2. Honeypot — bots fill every field, humans never see it
  if (body && typeof body === "object" && (body as Record<string, unknown>).honeypot) {
    // Pretend success to waste the bot's time
    return NextResponse.json(
      { ok: false, error: "Merci, votre demande a été reçue." },
      { status: 200 },
    );
  }

  // 3. Rate limit
  gcRateLimitStore();
  const ip = getClientIp(request);
  const rateCheck = checkRateLimit(ip);
  if (!rateCheck.ok) {
    return NextResponse.json(
      {
        ok: false,
        error: `Trop de demandes. Réessaye dans ${Math.ceil((rateCheck.retryAfterSec || 3600) / 60)} minutes.`,
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(rateCheck.retryAfterSec || 3600),
        },
      },
    );
  }

  // 4. Validate input
  const v = validate(body);
  if (!v.ok || !v.input) {
    return NextResponse.json(
      { ok: false, error: "Formulaire invalide.", field_errors: v.errors },
      { status: 400 },
    );
  }

  // 5. Call Claude
  try {
    const { result, tokens_used } = await callClaude(v.input);
    return NextResponse.json({ ok: true, result, tokens_used });
  } catch (err) {
    if (err instanceof Anthropic.APIError) {
      console.error("Anthropic API error:", err.status, err.message);
      if (err.status === 429) {
        return NextResponse.json(
          { ok: false, error: "Service temporairement surchargé. Réessaye dans 1 minute." },
          { status: 503 },
        );
      }
      if (err.status >= 500) {
        return NextResponse.json(
          { ok: false, error: "Service IA temporairement indisponible. Réessaye dans 1 minute." },
          { status: 503 },
        );
      }
      return NextResponse.json(
        { ok: false, error: "Erreur lors de l'estimation. Réessaye ou écris-nous à hello@hagnere-code.fr." },
        { status: 500 },
      );
    }
    console.error("Unexpected estimate error:", err);
    return NextResponse.json(
      { ok: false, error: "Erreur inattendue. Merci de réessayer." },
      { status: 500 },
    );
  }
}
