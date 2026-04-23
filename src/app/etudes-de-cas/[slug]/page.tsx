import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/case-study/CaseStudyPage";
import { CASE_STUDIES } from "@/components/case-study/cases";

export function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = CASE_STUDIES[slug];
  if (!cs) return { title: "Étude de cas — Hagnéré Code" };
  const url = `/etudes-de-cas/${slug}`;
  return {
    title: `${cs.title} ${cs.titleAccent} | Hagnéré Code`,
    description: cs.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${cs.title} ${cs.titleAccent} — Hagnéré Code`,
      description: cs.metaDescription,
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
  const cs = CASE_STUDIES[slug];
  if (!cs) notFound();

  const caseStudyJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${cs.title} ${cs.titleAccent}`,
    description: cs.metaDescription,
    author: {
      "@type": "Organization",
      name: "Hagnéré Code",
      url: "https://hagnere-code.fr",
    },
    publisher: {
      "@type": "Organization",
      name: "Hagnéré Code",
      logo: {
        "@type": "ImageObject",
        url: "https://hagnere-code.fr/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://hagnere-code.fr/etudes-de-cas/${slug}`,
    },
    about: {
      "@type": "Service",
      name: "Maintenance & évolution (TMA)",
      url: "https://hagnere-code.fr/services/maintenance-evolution",
    },
  });

  return (
    <>
      <script type="application/ld+json">{caseStudyJsonLd}</script>
      <CaseStudyPage cs={cs} />
    </>
  );
}
