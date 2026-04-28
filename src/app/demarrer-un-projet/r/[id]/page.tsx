/**
 * Lien permanent vers une estimation IA persistée (project_brief.aiEstimate).
 *
 * URL : /demarrer-un-projet/r/{publicSlug}
 * Le segment dynamique reste nommé `[id]` pour des raisons de compatibilité
 * Next.js, mais sa valeur est désormais un slug aléatoire (nanoid 21) qui
 * empêche l'énumération IDOR. La route est noindex.
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";
import { getDb } from "@/db";
import { projectBrief } from "@/db/schema";
import type { MultiServiceEstimate } from "@/components/estimer-mon-projet/types";
import { ResultViewClient } from "@/components/project-funnel/ResultViewClient";

export const metadata: Metadata = {
  title: "Estimation Hagnéré Code",
  description: "Estimation projet — Hagnéré Code",
  robots: { index: false, follow: false },
};

interface PageProps {
  params: Promise<{ id: string }>;
}

const SLUG_RE = /^[A-Za-z0-9_-]{16,32}$/;

export default async function PermanentResultPage({ params }: PageProps) {
  const { id: slugParam } = await params;
  if (!slugParam || !SLUG_RE.test(slugParam)) notFound();

  const rows = await getDb()
    .select({
      publicSlug: projectBrief.publicSlug,
      aiEstimate: projectBrief.aiEstimate,
      aiTokensUsed: projectBrief.aiTokensUsed,
      firstName: projectBrief.firstName,
      company: projectBrief.company,
      email: projectBrief.email,
    })
    .from(projectBrief)
    .where(eq(projectBrief.publicSlug, slugParam))
    .limit(1);

  const brief = rows[0];
  if (!brief || !brief.aiEstimate) notFound();

  const aiResult = brief.aiEstimate as MultiServiceEstimate;

  return (
    <ResultViewClient
      result={aiResult}
      tokensUsed={brief.aiTokensUsed || 0}
      contactEmail={brief.email}
      readOnly
    />
  );
}
