/**
 * Knowledge base loader — charge case_study, team_member, risk_template,
 * phasing_template depuis Postgres et les met en cache module-level pour
 * éviter de hammer la DB à chaque appel /api/estimate.
 *
 * TTL 5 min. Le ré-seed via npx tsx scripts/seed-kb.ts invalide le cache
 * naturellement au prochain redéploiement. Pour un dev qui itère sur la
 * KB, redémarrer le serveur Next force un refresh.
 */

import { eq, sql } from "drizzle-orm";
import { getDb } from "@/db";
import {
  caseStudy,
  teamMember,
  riskTemplate,
  phasingTemplate,
} from "@/db/schema";

const CACHE_TTL_MS = 5 * 60 * 1000;

interface CacheEntry<T> {
  data: T;
  expiresAt: number;
}

let caseStudyCache: CacheEntry<CaseStudyRow[]> | null = null;
let teamMemberCache: CacheEntry<TeamMemberRow[]> | null = null;
let riskTemplateCache: CacheEntry<RiskTemplateRow[]> | null = null;

export type CaseStudyRow = typeof caseStudy.$inferSelect;
export type TeamMemberRow = typeof teamMember.$inferSelect;
export type RiskTemplateRow = typeof riskTemplate.$inferSelect;
export type PhasingTemplateRow = typeof phasingTemplate.$inferSelect;

function fresh<T>(entry: CacheEntry<T> | null): T | null {
  if (!entry) return null;
  if (Date.now() > entry.expiresAt) return null;
  return entry.data;
}

export async function loadCaseStudies(): Promise<CaseStudyRow[]> {
  const cached = fresh(caseStudyCache);
  if (cached) return cached;
  const rows = await getDb()
    .select()
    .from(caseStudy)
    .where(eq(caseStudy.active, true));
  caseStudyCache = { data: rows, expiresAt: Date.now() + CACHE_TTL_MS };
  return rows;
}

export async function loadTeam(): Promise<TeamMemberRow[]> {
  const cached = fresh(teamMemberCache);
  if (cached) return cached;
  const rows = await getDb()
    .select()
    .from(teamMember)
    .where(eq(teamMember.active, true));
  teamMemberCache = { data: rows, expiresAt: Date.now() + CACHE_TTL_MS };
  return rows;
}

export async function loadRiskTemplates(): Promise<RiskTemplateRow[]> {
  const cached = fresh(riskTemplateCache);
  if (cached) return cached;
  const rows = await getDb()
    .select()
    .from(riskTemplate)
    .where(eq(riskTemplate.active, true));
  riskTemplateCache = { data: rows, expiresAt: Date.now() + CACHE_TTL_MS };
  return rows;
}

export async function loadPhasingTemplates(
  serviceIds: string[],
): Promise<PhasingTemplateRow[]> {
  if (serviceIds.length === 0) return [];
  const rows = await getDb()
    .select()
    .from(phasingTemplate)
    .where(
      sql`${phasingTemplate.active} = true AND ${phasingTemplate.serviceId} IN (${sql.join(
        serviceIds.map((s) => sql`${s}`),
        sql`, `,
      )})`,
    );
  return rows;
}

export function invalidateKnowledgeCache(): void {
  caseStudyCache = null;
  teamMemberCache = null;
  riskTemplateCache = null;
}

// ── Prompt builders ────────────────────────────────────────────────────

export async function buildCaseStudiesSection(): Promise<string> {
  const rows = await loadCaseStudies();
  if (rows.length === 0) return "";
  const lines: string[] = [];
  lines.push("# RÉFÉRENCES PROJETS LIVRÉS");
  lines.push("");
  lines.push("Tu peux citer ces projets quand le contexte du prospect s'y prête.");
  lines.push("");
  for (const c of rows) {
    const priceLine =
      c.priceMin && c.priceMax
        ? `${formatK(c.priceMin)}–${formatK(c.priceMax)} k€`
        : "non public";
    const monthlyLine =
      c.monthlyMin && c.monthlyMax
        ? ` + ${(c.monthlyMin / 1000).toFixed(1)}–${(c.monthlyMax / 1000).toFixed(1)} k€/mois`
        : "";
    lines.push(`### ${c.clientName} — ${c.industry}`);
    lines.push(`- Services : ${c.services.join(", ")}`);
    lines.push(`- Durée : ${c.durationWeeks} sem · Équipe : ${c.teamSize} personnes · Budget : ${priceLine}${monthlyLine}`);
    lines.push(`- Synthèse : ${c.promptSummary}`);
    if (c.outcomeSummary) lines.push(`- Résultat : ${c.outcomeSummary}`);
    if (c.publicUrl) lines.push(`- URL publique : ${c.publicUrl}`);
    lines.push("");
  }
  return lines.join("\n");
}

export async function buildTeamSection(): Promise<string> {
  const rows = await loadTeam();
  if (rows.length === 0) return "";
  const lines: string[] = [];
  lines.push("# ÉQUIPE COMPLÈTE (à utiliser STRICTEMENT dans team_allocation)");
  lines.push("");
  for (const m of rows) {
    lines.push(`- **${m.fullName}** (${m.role}) — ${m.specialties.join(", ")}`);
    lines.push(`  Étiquette enum : "${m.promptLabel}"`);
  }
  return lines.join("\n");
}

export async function buildRisksSection(): Promise<string> {
  const rows = await loadRiskTemplates();
  if (rows.length === 0) return "";
  const lines: string[] = [];
  lines.push("# CATALOGUE DE RISQUES PAR SERVICE (puise dedans, n'invente pas)");
  lines.push("");
  const byService = new Map<string, RiskTemplateRow[]>();
  for (const r of rows) {
    const list = byService.get(r.serviceId) || [];
    list.push(r);
    byService.set(r.serviceId, list);
  }
  for (const [serviceId, risks] of byService.entries()) {
    lines.push(`### ${serviceId}`);
    for (const r of risks) {
      const triggers = r.triggers.length > 0 ? ` (déclencheurs : ${r.triggers.join(", ")})` : "";
      lines.push(`- [${r.severity}] **${r.title}**${triggers}`);
      lines.push(`  → ${r.mitigation}`);
    }
    lines.push("");
  }
  return lines.join("\n");
}

function formatK(value: number): string {
  return Math.round(value / 1000).toString();
}
