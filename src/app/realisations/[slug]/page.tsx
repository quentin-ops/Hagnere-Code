import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/realisations/CaseStudyPage";
import { CASES, CASE_SLUGS, type CaseStudy } from "@/components/realisations/cases";
import { OG_BASE, DEFAULT_OG_IMAGE } from "@/lib/seo";

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
  if (!c) return { title: "Réalisation · Hagnéré Code" };
  const url = `/realisations/${slug}`;
  const title = c.seo?.title ?? `${c.brandName} · ${c.category} · Hagnéré Code`;
  const description = c.seo?.description ?? c.heroIntro;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      ...OG_BASE,
      type: "article",
      title: `${c.brandName} · Étude de cas`,
      description,
      url,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

// JSON-LD construit côté serveur à partir du CaseStudy (données 100 % contrôlées,
// pas d'input utilisateur), puis injecté via <script>{jsonString}</script>.
// React échappe naturellement le contenu textuel, et JSON-LD ne contient pas de
// caractères HTML problématiques (les `<` éventuels dans des chaînes seraient
// déjà échappés par JSON.stringify dans ce cas-ci).
function buildCaseJsonLd(c: CaseStudy): string {
  const url = `https://hagnere-code.fr/realisations/${c.slug}`;
  // Nœud Organization inline : le @id "#organization" n'est résolvable que sur
  // la home, les crawlers ne suivent pas les références cross-page.
  const organization = {
    "@type": "Organization",
    name: "Hagnéré Code",
    logo: {
      "@type": "ImageObject",
      url: "https://hagnere-code.fr/logos/logo-dark.png",
    },
  };
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${c.brandName} · ${c.category}`,
    name: `${c.brandName} · Étude de cas Hagnéré Code`,
    description: c.heroIntro,
    url,
    image: "https://hagnere-code.fr/og-image.png",
    inLanguage: "fr-FR",
    datePublished: `${c.year}-01-01`,
    author: organization,
    publisher: organization,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    about: {
      "@type": "SoftwareApplication",
      name: c.brandName,
      url: c.url,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
    },
    keywords: c.stack.join(", "),
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hagnere-code.fr/" },
      { "@type": "ListItem", position: 2, name: "Réalisations", item: "https://hagnere-code.fr/realisations" },
      { "@type": "ListItem", position: 3, name: c.brandName, item: url },
    ],
  };
  return JSON.stringify([article, breadcrumb]);
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = CASES[slug];
  if (!c) notFound();
  const jsonLd = buildCaseJsonLd(c);
  return (
    <>
      <script type="application/ld+json">{jsonLd}</script>
      <CaseStudyPage caseStudy={c} />
    </>
  );
}
