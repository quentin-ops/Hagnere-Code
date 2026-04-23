import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/realisations/CaseStudyPage";
import { CASES, CASE_SLUGS } from "@/components/realisations/cases";

export function generateStaticParams() {
  return CASE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = CASES[slug];
  if (!c) return { title: "Réalisation — Hagnéré Code" };
  const url = `/realisations/${slug}`;
  return {
    title: `${c.brandName} — ${c.category} · Hagnéré Code`,
    description: c.heroIntro,
    alternates: { canonical: url },
    openGraph: {
      title: `${c.brandName} — Étude de cas`,
      description: c.heroIntro,
      url,
      type: "article",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = CASES[slug];
  if (!c) notFound();
  return <CaseStudyPage caseStudy={c} />;
}
