/**
 * Mapper: ProjectFunnel state → CalculatorInput.
 *
 * The funnel collects loose, prospect-friendly data (free chips, voice
 * dictation, dominant-kind heuristics). The /api/estimate route expects
 * the strict shape used by the AI pipeline. This module is the single
 * bridge between the two — keep all coercion logic here.
 */

import {
  type CalculatorInput,
  type ServiceId,
  type UrgencyLevel,
} from "@/components/estimer-mon-projet/types";

// ---------------------------------------------------------------------------
// Public input shape coming from ProjectFunnel.tsx (kept loose on purpose)
// ---------------------------------------------------------------------------

export type FunnelProjectKindId =
  | "site"
  | "saas"
  | "mobile"
  | "outil"
  | "ecommerce"
  | "seo"
  | "ads"
  | "content"
  | "maintenance"
  | "audit"
  | "security"
  | "automatisation"
  | "unknown";

export interface FunnelStateLike {
  projectKinds: FunnelProjectKindId[];
  objectives: string[];
  description: string;
  currentSituation: string;
  audience: string;
  mustHaves: string[];
  integrations: string[];
  existingAssets: string[];
  openScope: string;
  timeline: string;
  budget: string;
  decisionStage: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  siren: string;
  company: string;
  role: string;
  consent: boolean;
  honeypot: string;
}

// ---------------------------------------------------------------------------
// Project kind → ServiceId
//
// "automatisation" maps to outil-interne by default — most automation
//  asks are internal workflows; the AI will refine when reading the brief.
// "unknown" maps to nothing; the funnel ensures at least one real service
//  is selected before reaching submit (see canSubmit() below).
// ---------------------------------------------------------------------------

const KIND_TO_SERVICE: Record<FunnelProjectKindId, ServiceId | null> = {
  site: "site-vitrine",
  saas: "saas",
  mobile: "app-mobile",
  outil: "outil-interne",
  ecommerce: "ecommerce",
  seo: "seo",
  ads: "ads",
  content: "video",
  maintenance: "maintenance",
  audit: "audit-technique",
  security: "securite-rgpd",
  automatisation: "outil-interne",
  unknown: null,
};

export function mapKindsToServices(kinds: FunnelProjectKindId[]): ServiceId[] {
  const mapped: ServiceId[] = [];
  for (const kind of kinds) {
    const sid = KIND_TO_SERVICE[kind];
    if (sid && !mapped.includes(sid)) mapped.push(sid);
  }
  return mapped;
}

// ---------------------------------------------------------------------------
// Timeline label → UrgencyLevel
//
// The funnel uses fuzzy french strings tailored per project kind (e.g.
// "Incident ou risque immédiat" for maintenance). We classify aggressively
// so urgent maintenance still maps to urgent rather than the default.
// ---------------------------------------------------------------------------

export function mapTimelineToUrgency(timeline: string): UrgencyLevel {
  const t = timeline.toLowerCase();
  if (!t) return "3-months";
  if (
    t.includes("immédiat") ||
    t.includes("incident") ||
    t.includes("urgent") ||
    t.includes("dès que possible") ||
    t.includes("démarrage ce mois") ||
    t.includes("campagnes à lancer maintenant") ||
    t.includes("grand compte") ||
    t.includes("audit proche")
  ) {
    return "urgent";
  }
  if (
    t.includes("2 sem") ||
    t.includes("2 semaines") ||
    t.includes("dans 1 mois") ||
    t.includes("ce trimestre") ||
    t.includes("sprint contenu") ||
    t.includes("décision dans 1 mois")
  ) {
    return "1-month";
  }
  if (
    t.includes("dans 3 mois") ||
    t.includes("plan sur 3 mois") ||
    t.includes("rythme mensuel") ||
    t.includes("sur 90 jours") ||
    t.includes("test sur 90")
  ) {
    return "3-months";
  }
  if (
    t.includes("plan sur 6 mois") ||
    t.includes("trimestriel") ||
    t.includes("annuel") ||
    t.includes("plan annuel")
  ) {
    return "6-months";
  }
  return "no-rush";
}

// ---------------------------------------------------------------------------
// Description compiler
//
// /api/estimate requires a 50-4000 char description. The funnel collects
// up to 5 free fields (description, currentSituation, audience, openScope,
// objective) plus typed chips. We concatenate everything in a structured
// format so the AI gets maximum context — Claude is good at parsing this.
// ---------------------------------------------------------------------------

export function compileDescription(state: FunnelStateLike): string {
  const lines: string[] = [];

  if (state.objectives.length > 0) {
    lines.push(
      state.objectives.length === 1
        ? `Objectif principal : ${state.objectives[0]}.`
        : "Objectifs principaux :",
    );
    if (state.objectives.length > 1) {
      for (const obj of state.objectives) lines.push(`- ${obj}`);
    }
    lines.push("");
  }

  if (state.description.trim()) {
    lines.push("# Description du besoin");
    lines.push(state.description.trim());
    lines.push("");
  }

  if (state.currentSituation.trim()) {
    lines.push("# Situation actuelle / existant");
    lines.push(state.currentSituation.trim());
    lines.push("");
  }

  if (state.audience.trim()) {
    lines.push("# Utilisateurs concernés / audience");
    lines.push(state.audience.trim());
    lines.push("");
  }

  if (state.mustHaves.length > 0) {
    lines.push("# Briques fonctionnelles attendues");
    for (const item of state.mustHaves) lines.push(`- ${item}`);
    lines.push("");
  }

  if (state.integrations.length > 0) {
    lines.push("# Intégrations à prévoir");
    for (const item of state.integrations) lines.push(`- ${item}`);
    lines.push("");
  }

  if (state.existingAssets.length > 0) {
    lines.push("# Existant / actifs disponibles");
    for (const item of state.existingAssets) lines.push(`- ${item}`);
    lines.push("");
  }

  if (state.openScope.trim()) {
    lines.push("# Précisions complémentaires");
    lines.push(state.openScope.trim());
    lines.push("");
  }

  if (state.budget) {
    lines.push(`Budget annoncé par le prospect : ${state.budget}.`);
  }
  if (state.decisionStage) {
    lines.push(`Étape de décision : ${state.decisionStage}.`);
  }
  if (state.role.trim()) {
    lines.push(`Rôle du contact : ${state.role.trim()}.`);
  }
  if (state.siren && state.siren.replace(/\D/g, "").length === 9) {
    lines.push(`SIREN : ${state.siren}.`);
  }

  // Pad to MIN_DESCRIPTION_CHARS (50) if everything is shorter — the API
  // refuses anything below. This shouldn't happen because the funnel gates
  // navigation on description.length >= 40, but be defensive.
  let result = lines.join("\n").trim();
  if (result.length < 50) {
    result =
      result +
      "\n\nLe prospect n'a pas encore décrit son projet en détail. " +
      "Demande un Discovery pour cadrer le périmètre exact.";
  }
  return result.slice(0, 4000);
}

// ---------------------------------------------------------------------------
// Per-service answers — the funnel doesn't collect typed per-service
// answers (no module like service-modules.tsx). We send empty {} for each
// selected service: the AI prompt is configured (in claude-estimate-prompt.ts)
// to lower confidence to "low" for skipped modules and rely on the
// description for context. That's exactly what we want here.
// ---------------------------------------------------------------------------

export function buildPerService(
  services: ServiceId[],
): CalculatorInput["perService"] {
  const out: Record<string, Record<string, unknown>> = {};
  for (const sid of services) out[sid] = {};
  return out as CalculatorInput["perService"];
}

// ---------------------------------------------------------------------------
// Top-level mapper
// ---------------------------------------------------------------------------

export function mapFunnelStateToCalculatorInput(
  state: FunnelStateLike,
): CalculatorInput {
  const services = mapKindsToServices(state.projectKinds);
  return {
    selectedServices: services,
    perService: buildPerService(services),
    urgency: mapTimelineToUrgency(state.timeline),
    description: compileDescription(state),
    email: state.email.trim() || undefined,
    firstName: state.firstName.trim() || undefined,
    company: state.company.trim() || undefined,
    rgpdConsent: state.consent || undefined,
    honeypot: state.honeypot,
  };
}

// ---------------------------------------------------------------------------
// Submit gate — the funnel cannot call /api/estimate when no real service
// was picked (only "unknown") because the API rejects empty selectedServices.
// In that case the funnel falls back to /api/project-inquiry (mail only).
// ---------------------------------------------------------------------------

export function canSubmitToEstimateApi(state: FunnelStateLike): boolean {
  return mapKindsToServices(state.projectKinds).length > 0;
}
