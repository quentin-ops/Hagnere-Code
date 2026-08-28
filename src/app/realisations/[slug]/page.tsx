import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/realisations/CaseStudyPage";
import { CASES, CASE_SLUGS } from "@/components/realisations/cases";
import { buildCaseStudyStructuredData } from "@/lib/case-study-structured-data";
import { OG_BASE } from "@/lib/seo";

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
  if (!c) return { title: "Produit du groupe Hagnéré · Hagnéré Code" };
  const url = `/realisations/${slug}`;
  const socialImage = {
    url: `${url}/opengraph-image`,
    width: 1200,
    height: 630,
    alt: `${c.brandName} · analyse éditoriale d'une page publique du groupe Hagnéré`,
  };
  const title = c.seo?.title ?? `${c.brandName} · ${c.category} · Hagnéré Code`;
  const description = c.seo?.description ?? c.heroIntro;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      ...OG_BASE,
      type: "article",
      title: `${c.brandName} · Produit du groupe Hagnéré`,
      description,
      url,
      images: [socialImage],
    },
    twitter: { images: [socialImage] },
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
  const jsonLd = JSON.stringify(buildCaseStudyStructuredData(c));
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd.replace(/</g, "\\u003c") }} />
      <CaseStudyPage caseStudy={c} />
    </>
  );
}
