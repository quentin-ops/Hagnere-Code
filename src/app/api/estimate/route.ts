import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import {
  ESTIMATE_SYSTEM_PROMPT,
  ESTIMATE_JSON_SCHEMA,
} from "@/lib/claude-estimate-prompt";
import {
  SERVICE_IDS,
  SERVICES,
  URGENCY_LEVELS,
  SAAS_FEATURES,
  ERP_OPTIONS,
  APP_MOBILE_FEATURES,
  ADS_CHANNELS,
  COMPLIANCE_OPTIONS,
  SECURITE_NEEDS,
  type CalculatorInput,
  type EstimateApiResponse,
  type MultiServiceEstimate,
  type ServiceId,
} from "@/components/estimer-mon-projet/types";

export const runtime = "nodejs";

// =====================================================================
// Rate limiting — in-memory per-IP bucket. Replace with Redis in prod.
// =====================================================================

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
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

function gcRateLimitStore() {
  if (rateLimitStore.size < 1000) return;
  const now = Date.now();
  for (const [ip, bucket] of rateLimitStore.entries()) {
    if (bucket.resetAt < now) rateLimitStore.delete(ip);
  }
}

// =====================================================================
// Validation
// =====================================================================

const SERVICE_ID_SET = new Set<string>(SERVICE_IDS);
const URGENCY_SET = new Set<string>(URGENCY_LEVELS);

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

  // selectedServices
  if (
    !Array.isArray(b.selectedServices) ||
    b.selectedServices.length === 0 ||
    b.selectedServices.length > 12 ||
    b.selectedServices.some((s) => typeof s !== "string" || !SERVICE_ID_SET.has(s))
  ) {
    errors.selectedServices = "Sélectionne entre 1 et 12 services valides.";
  }

  // perService — keys must be a subset of selectedServices
  const perService = (b.perService as Record<string, unknown> | undefined) || {};
  if (typeof perService !== "object" || Array.isArray(perService)) {
    errors.perService = "perService doit être un objet.";
  }

  // urgency
  if (typeof b.urgency !== "string" || !URGENCY_SET.has(b.urgency)) {
    errors.urgency = "Délai invalide.";
  }

  // description
  const description = (typeof b.description === "string" ? b.description : "").trim();
  if (description.length < 50) errors.description = "Décris ton projet en 50 caractères minimum.";
  if (description.length > 4000) errors.description = "Maximum 4 000 caractères.";

  // contact (optional)
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
      selectedServices: b.selectedServices as ServiceId[],
      perService: perService as CalculatorInput["perService"],
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
// User message — turn the structured input into clear French markdown
// =====================================================================

function labelFromList<T extends string>(
  selected: T[] | undefined,
  options: ReadonlyArray<{ id: T; label: string }>,
): string {
  if (!selected || selected.length === 0) return "Aucune";
  return selected
    .map((id) => options.find((o) => o.id === id)?.label || id)
    .join(", ");
}

function buildUserMessage(input: CalculatorInput): string {
  const lines: string[] = [];
  lines.push("# Brief multi-services à analyser");
  lines.push("");

  // Services cochés
  lines.push("## Services sélectionnés");
  for (const sid of input.selectedServices) {
    const def = SERVICES[sid];
    lines.push(`- **${def.label}** (${def.category}, ${def.pricingModel})`);
  }
  lines.push("");

  // Réponses par service
  lines.push("## Réponses détaillées par service");
  for (const sid of input.selectedServices) {
    const def = SERVICES[sid];
    const ans = input.perService[sid] as Record<string, unknown> | undefined;
    lines.push(`### ${def.label}`);
    if (!ans) {
      lines.push("_(pas de réponses détaillées — l'utilisateur a sauté ce module ou utilisé les valeurs par défaut)_");
      lines.push("");
      continue;
    }
    switch (sid) {
      case "site-vitrine": {
        const a = ans as { pages?: string; multilang?: boolean; cms?: boolean; blogSeo?: boolean; abTesting?: boolean };
        const pagesMap: Record<string, string> = { small: "5 pages env.", medium: "10 pages env.", large: "20 pages env.", xlarge: "30+ pages" };
        lines.push(`- Pages : ${pagesMap[a.pages || "medium"]}`);
        lines.push(`- Multi-langue : ${a.multilang ? "oui" : "non"}`);
        lines.push(`- CMS éditable : ${a.cms ? "oui" : "non"}`);
        lines.push(`- Blog SEO : ${a.blogSeo ? "oui" : "non"}`);
        lines.push(`- A/B testing : ${a.abTesting ? "oui" : "non"}`);
        break;
      }
      case "saas": {
        const a = ans as { screens?: number; users?: string; features?: string[] };
        const usersMap: Record<string, string> = { small: "< 50 users", medium: "50-500 users", large: "500-5k users", huge: "5 000+ users" };
        lines.push(`- Nombre d'écrans : ${a.screens || "non précisé"}`);
        lines.push(`- Utilisateurs : ${usersMap[a.users || "small"]}`);
        lines.push(`- Features : ${labelFromList(a.features as never[], SAAS_FEATURES)}`);
        break;
      }
      case "outil-interne": {
        const a = ans as { internalUsers?: string; workflowReplaced?: string; erpIntegrations?: string[]; reporting?: boolean };
        const usersMap: Record<string, string> = { small: "< 10 internes", medium: "10-50 internes", large: "50-200 internes", xlarge: "200+ internes" };
        lines.push(`- Utilisateurs internes : ${usersMap[a.internalUsers || "small"]}`);
        lines.push(`- Workflow remplacé : ${a.workflowReplaced || "non précisé"}`);
        lines.push(`- ERP à intégrer : ${labelFromList(a.erpIntegrations as never[], ERP_OPTIONS)}`);
        lines.push(`- Reporting / dashboards : ${a.reporting ? "oui" : "non"}`);
        break;
      }
      case "ecommerce": {
        const a = ans as { skuCount?: string; ordersPerYear?: string; mobileApp?: boolean; erpIntegration?: boolean; multiCurrency?: boolean };
        const skuMap: Record<string, string> = { small: "< 50 SKU", medium: "50-500 SKU", large: "500-5 000 SKU", xlarge: "5 000+ SKU" };
        const ordersMap: Record<string, string> = { small: "< 500 cmd/an", medium: "500-5 000 cmd/an", large: "5 000-50 000 cmd/an", xlarge: "50 000+ cmd/an" };
        lines.push(`- SKU : ${skuMap[a.skuCount || "small"]}`);
        lines.push(`- Volume cible : ${ordersMap[a.ordersPerYear || "small"]}`);
        lines.push(`- App mobile : ${a.mobileApp ? "oui" : "non"}`);
        lines.push(`- Intégration ERP : ${a.erpIntegration ? "oui" : "non"}`);
        lines.push(`- Multi-devise : ${a.multiCurrency ? "oui" : "non"}`);
        break;
      }
      case "app-mobile": {
        const a = ans as { platforms?: string; features?: string[]; isCompanion?: boolean; estimatedScreens?: number };
        lines.push(`- Plateformes : ${a.platforms || "non précisé"}`);
        lines.push(`- Fonctions natives : ${labelFromList(a.features as never[], APP_MOBILE_FEATURES)}`);
        lines.push(`- Compagnon d'un SaaS existant : ${a.isCompanion ? "oui" : "non (autonome)"}`);
        lines.push(`- Écrans estimés : ${a.estimatedScreens || "non précisé"}`);
        break;
      }
      case "refonte": {
        const a = ans as { currentStack?: string; currentVolume?: string; dataMigration?: boolean; scope?: string };
        const volMap: Record<string, string> = { small: "< 100 users", medium: "100-1k users", large: "1k-10k users", huge: "10k+ users" };
        lines.push(`- Stack actuelle : ${a.currentStack || "non précisé"}`);
        lines.push(`- Volume utilisateurs actuels : ${volMap[a.currentVolume || "small"]}`);
        lines.push(`- Migration de données : ${a.dataMigration ? "oui" : "non"}`);
        lines.push(`- Scope : ${a.scope || "full"}`);
        break;
      }
      case "seo": {
        const a = ans as { market?: string; competition?: string; keywordVolume?: string; hasExistingSite?: boolean };
        lines.push(`- Marché : ${a.market || "non précisé"}`);
        lines.push(`- Niveau de concurrence : ${a.competition || "non précisé"}`);
        lines.push(`- Volume mots-clés visés : ${a.keywordVolume || "non précisé"}`);
        lines.push(`- Site existant à optimiser : ${a.hasExistingSite ? "oui" : "non (à créer ou refondre)"}`);
        break;
      }
      case "ads": {
        const a = ans as { monthlyBudget?: string; channels?: string[]; hasAccountToAudit?: boolean; objective?: string };
        const budgetMap: Record<string, string> = { small: "< 5 k€/mois", medium: "5-15 k€/mois", large: "15-50 k€/mois", huge: "50 k€+/mois" };
        lines.push(`- Budget media mensuel : ${budgetMap[a.monthlyBudget || "small"]}`);
        lines.push(`- Canaux : ${labelFromList(a.channels as never[], ADS_CHANNELS)}`);
        lines.push(`- Compte existant à auditer : ${a.hasAccountToAudit ? "oui" : "non"}`);
        lines.push(`- Objectif : ${a.objective || "non précisé"}`);
        break;
      }
      case "video": {
        const a = ans as { format?: string; cadence?: string; shootingLocation?: string };
        lines.push(`- Format souhaité : ${a.format || "non précisé"}`);
        lines.push(`- Cadence : ${a.cadence || "non précisé"}`);
        lines.push(`- Localisation tournage : ${a.shootingLocation || "non précisé"}`);
        break;
      }
      case "maintenance": {
        const a = ans as { stackToMaintain?: string; businessCriticality?: string; slaNeeded?: string; isExisting?: boolean };
        lines.push(`- Stack à maintenir : ${a.stackToMaintain || "non précisé"}`);
        lines.push(`- Criticité business : ${a.businessCriticality || "non précisé"}`);
        lines.push(`- SLA souhaité : ${a.slaNeeded ? `${a.slaNeeded} %` : "non précisé"}`);
        lines.push(`- Code existant à reprendre (pas écrit par nous) : ${a.isExisting ? "oui — audit préalable nécessaire" : "non"}`);
        break;
      }
      case "securite-rgpd": {
        const a = ans as { teamSize?: string; aiSystems?: string; compliance?: string[]; needs?: string[] };
        const teamMap: Record<string, string> = { small: "10-100 sal.", medium: "100-500 sal.", large: "500+ sal." };
        lines.push(`- Taille équipe : ${teamMap[a.teamSize || "small"]}`);
        lines.push(`- Systèmes IA : ${a.aiSystems || "non précisé"}`);
        lines.push(`- Compliance visée : ${labelFromList(a.compliance as never[], COMPLIANCE_OPTIONS)}`);
        lines.push(`- Besoins : ${labelFromList(a.needs as never[], SECURITE_NEEDS)}`);
        break;
      }
      case "audit-technique": {
        const a = ans as { stackToAudit?: string; depth?: string; decisionTarget?: string };
        lines.push(`- Stack à auditer : ${a.stackToAudit || "non précisé"}`);
        lines.push(`- Profondeur : ${a.depth || "non précisé"}`);
        lines.push(`- Décision visée : ${a.decisionTarget || "non précisé"}`);
        break;
      }
    }
    lines.push("");
  }

  // Délai + description
  lines.push("## Délai souhaité");
  lines.push(`- ${input.urgency}`);
  lines.push("");
  lines.push("## Description libre du projet");
  lines.push("```");
  lines.push(input.description);
  lines.push("```");

  return lines.join("\n");
}

// =====================================================================
// Claude call
// =====================================================================

async function callClaude(input: CalculatorInput): Promise<{
  result: MultiServiceEstimate;
  tokens_used: number;
}> {
  const client = new Anthropic();
  const userMessage = buildUserMessage(input);

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

  const textBlock = response.content.find((b) => b.type === "text");
  if (!textBlock || textBlock.type !== "text") {
    throw new Error("Claude returned no text block");
  }
  const result = JSON.parse(textBlock.text) as MultiServiceEstimate;

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
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Payload JSON invalide." }, { status: 400 });
  }

  // Honeypot
  if (body && typeof body === "object" && (body as Record<string, unknown>).honeypot) {
    return NextResponse.json(
      { ok: false, error: "Merci, votre demande a été reçue." },
      { status: 200 },
    );
  }

  // Rate limit
  gcRateLimitStore();
  const ip = getClientIp(request);
  const rateCheck = checkRateLimit(ip);
  if (!rateCheck.ok) {
    return NextResponse.json(
      {
        ok: false,
        error: `Trop de demandes. Réessaye dans ${Math.ceil((rateCheck.retryAfterSec || 3600) / 60)} minutes.`,
      },
      { status: 429, headers: { "Retry-After": String(rateCheck.retryAfterSec || 3600) } },
    );
  }

  // Validate
  const v = validate(body);
  if (!v.ok || !v.input) {
    return NextResponse.json(
      { ok: false, error: "Formulaire invalide.", field_errors: v.errors },
      { status: 400 },
    );
  }

  // Call Claude
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
