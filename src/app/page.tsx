import type { Metadata } from "next";
import { HomepageDesign } from "@/components/homepage/HomepageDesign";
import { OG_BASE, DEFAULT_OG_IMAGE } from "@/lib/seo";
import {
  PUBLIC_ORGANIZATION_JSON_LD,
  WEBSITE_JSON_LD,
} from "@/lib/organization-structured-data";

export const metadata: Metadata = {
  title: "Studio de développement web, SaaS & SEO · Hagnéré Code",
  description:
    "Agence web à Bassens, aux portes de Chambéry : sites, e-commerce, SaaS, applications métier, référencement naturel et Google Ads. Forfait fixe.",
  alternates: { canonical: "/" },
  openGraph: {
    ...OG_BASE,
    title: "Studio de développement web, SaaS & SEO · Hagnéré Code",
    description:
      "Agence web à Bassens, aux portes de Chambéry : sites, e-commerce, SaaS, applications métier, référencement naturel et Google Ads. Forfait fixe.",
    url: "/",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Home() {
  const jsonLd = JSON.stringify([
    PUBLIC_ORGANIZATION_JSON_LD,
    WEBSITE_JSON_LD,
  ]);
  return (
    <>
      {/* JSON-LD inline dans le HTML initial : next/script beforeInteractive
          n'est pas supporté hors root layout et n'émet pas de balise
          application/ld+json parsable par les crawlers. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd.replace(/</g, "\\u003c") }}
      />
      <HomepageDesign />
    </>
  );
}
