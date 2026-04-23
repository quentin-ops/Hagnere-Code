import type { Metadata } from "next";
import { BlogIndex } from "@/components/blog/BlogIndex";

export const metadata: Metadata = {
  title: "Blog — Hagnéré Code",
  description:
    "Retours terrain sur Laravel, Claude Code, SaaS métier et agence de développement en France. Lancement éditorial prévu mai 2026.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog Hagnéré Code — sortie prochaine",
    description:
      "Deux articles par mois, retours terrain de l'équipe. Laravel, IA, SaaS, business agence.",
    url: "/blog",
    type: "website",
  },
};

export default function Page() {
  return <BlogIndex />;
}
