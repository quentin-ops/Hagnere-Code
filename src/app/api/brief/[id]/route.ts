/**
 * GET /api/brief/{slug} — fetch a project brief AI estimate by public slug.
 *
 * Lookup is by `project_brief.public_slug` (random 21-char nanoid) to prevent
 * IDOR enumeration of the auto-increment id. The route folder is still named
 * `[id]` for legacy reasons but the param value is treated as a slug.
 */

import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { getDb } from "@/db";
import { projectBrief } from "@/db/schema";
import { log } from "@/lib/logger";

export const runtime = "nodejs";

const SLUG_RE = /^[A-Za-z0-9_-]{16,32}$/;

export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> },
): Promise<NextResponse> {
  const params = await context.params;
  const slug = params.id;

  if (!slug || !SLUG_RE.test(slug)) {
    return NextResponse.json({ ok: false, error: "Slug invalide." }, { status: 400 });
  }

  try {
    const rows = await getDb()
      .select({
        id: projectBrief.id,
        publicSlug: projectBrief.publicSlug,
        aiEstimate: projectBrief.aiEstimate,
        aiTokensUsed: projectBrief.aiTokensUsed,
        company: projectBrief.company,
        firstName: projectBrief.firstName,
        createdAt: projectBrief.createdAt,
      })
      .from(projectBrief)
      .where(eq(projectBrief.publicSlug, slug))
      .limit(1);

    const brief = rows[0];
    if (!brief || !brief.aiEstimate) {
      return NextResponse.json(
        { ok: false, error: "Estimation introuvable ou pas encore prête." },
        { status: 404 },
      );
    }

    return NextResponse.json({
      ok: true,
      brief: {
        id: brief.publicSlug,
        aiEstimate: brief.aiEstimate,
        aiTokensUsed: brief.aiTokensUsed,
        company: brief.company,
        firstName: brief.firstName,
        createdAt: brief.createdAt,
      },
    });
  } catch (err) {
    log.error("brief_fetch_failed", { err: err as Error });
    return NextResponse.json(
      { ok: false, error: "Erreur de récupération." },
      { status: 500 },
    );
  }
}
