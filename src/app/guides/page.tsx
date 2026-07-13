import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  ArrowDown,
  Globe,
  AppWindow,
  Wrench,
  TrendingUp,
  Calculator,
  FolderOpen,
  type LucideIcon,
} from "lucide-react";
import { GuideCard, GuideCardFeatured } from "@/components/guides/guide-card";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { OG_BASE, DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo";
import { GUIDES, guidePath, guideUrl } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Guides : prix d'un site internet, SaaS et SEO · Hagnéré Code",
  description:
    "Des guides chiffrés pour cadrer votre projet web : prix d'un site internet, SaaS, outils métier, SEO. Par l'équipe Hagnéré Code, agence Next.js/React.",
  authors: [{ name: "Hagnéré Code" }],
  creator: "Hagnéré Code",
  publisher: "Hagnéré Code",
  alternates: { canonical: "/guides" },
  openGraph: {
    ...OG_BASE,
    title: "Guides : prix d'un site internet, SaaS et SEO · Hagnéré Code",
    description:
      "Des guides chiffrés pour cadrer votre projet web : prix d'un site internet, SaaS, outils métier, SEO.",
    url: "/guides",
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/** Icône de carte par guide (défaut : Globe). */
const GUIDE_ICONS: Record<string, LucideIcon> = {
  "combien-coute-un-site-internet": Calculator,
};

const featuredGuide = GUIDES.find((g) => g.featured) ?? GUIDES[0];

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
  ],
});

const collectionJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Guides : prix d'un site internet, SaaS et SEO",
  description:
    "Des guides pratiques et chiffrés pour cadrer votre projet web, rédigés par l'équipe Hagnéré Code.",
  url: `${SITE_URL}/guides`,
  author: {
    "@type": "Organization",
    name: "Hagnéré Code",
    url: SITE_URL,
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: GUIDES.map((g, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: g.cardTitle,
      url: guideUrl(g),
    })),
  },
});

export default function GuidesPage() {
  return (
    <GuidesShell>
      {/* JSON-LD structured data — static hardcoded strings only */}
      <script type="application/ld+json">{breadcrumbJsonLd}</script>
      <script type="application/ld+json">{collectionJsonLd}</script>

      <div className="relative">
        {/* Grid background — absolute, not fixed */}
        <div className="absolute inset-x-0 top-0 h-[900px] pointer-events-none overflow-hidden -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-60% to-white dark:to-zinc-950" />
        </div>

        {/* Hero Section — two columns */}
        <section className="pt-12 sm:pt-16 md:pt-24 pb-12 sm:pb-16 md:pb-24 relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
              {/* Text Content */}
              <div className="order-2 lg:order-1">
                {/* Breadcrumbs */}
                <nav aria-label="Fil d'Ariane" className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-zinc-500 mb-6">
                  <Link
                    href="/"
                    className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  >
                    Accueil
                  </Link>
                  <ChevronRight className="size-3" aria-hidden="true" />
                  <span className="text-zinc-900 dark:text-zinc-100 font-medium">
                    Guides
                  </span>
                </nav>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6">
                  Guides : combien coûte{" "}
                  <br className="hidden lg:block" />
                  et comment réussir votre projet web
                </h1>
                <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8 max-w-lg">
                  Prix d&apos;un site internet, budget d&apos;un SaaS, coûts
                  cachés, SEO, maintenance : des guides pratiques, clairs et
                  chiffrés, rédigés par l&apos;équipe qui code — pas par un
                  rédacteur hors-sol.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={guidePath(featuredGuide)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                  >
                    Voir le guide budget
                    <ArrowRight className="size-4" />
                  </Link>
                  <a
                    href="#guides"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  >
                    Tous les guides
                    <ArrowDown className="size-4" />
                  </a>
                </div>
              </div>

              {/* Hero Visual — hidden on small mobile */}
              <div className="order-1 lg:order-2 relative hidden md:block" aria-hidden="true">
                <div className="relative max-w-[500px] mx-auto lg:ml-auto">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="size-80 rounded-full bg-zinc-100/60 dark:bg-zinc-800/30 blur-3xl" />
                  </div>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-3 sm:gap-4 p-6 sm:p-8">
                      {[
                        { Icon: Globe, label: "Site web", color: "bg-zinc-50 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700" },
                        { Icon: AppWindow, label: "SaaS", color: "bg-violet-50 dark:bg-violet-950/50 text-violet-600 dark:text-violet-400 border-violet-100 dark:border-violet-900" },
                        { Icon: Wrench, label: "Outils métier", color: "bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-900" },
                        { Icon: TrendingUp, label: "SEO", color: "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900" },
                        { Icon: Calculator, label: "Budget", color: "bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-900" },
                      ].map(({ Icon, label, color }) => (
                        <div
                          key={label}
                          className={`flex flex-col items-center gap-2 p-4 rounded-2xl border ${color} transition-transform hover:scale-105`}
                        >
                          <Icon className="size-6" />
                          <span className="text-[10px] font-semibold tracking-wide uppercase opacity-80">
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guides Grid */}
        <section id="guides" className="pb-16 md:pb-24">
          <div className="container mx-auto px-4 max-w-7xl">
            {/* Guide principal (carte large) */}
            <div className="mb-16">
              <GuideCardFeatured
                href={guidePath(featuredGuide)}
                badge="Essentiel"
                readTime={`Temps de lecture : ${featuredGuide.readTimeMin} min`}
                title={featuredGuide.heroTitle}
                description={featuredGuide.cardDescription}
              />
            </div>

            {/*
              Pour ajouter un guide : ajouter son entrée dans src/lib/guides.ts
              puis créer src/app/guides/<slug>/page.tsx sur le modèle du guide
              budget. Les cartes ci-dessous, l'ItemList JSON-LD et le sitemap
              se mettent à jour automatiquement.
            */}
            <div className="mb-10" id="creer-son-site">
              <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                Créer son site web
              </h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
                Budget, cahier des charges, choix techniques et bonnes pratiques.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {GUIDES.map((g) => (
                  <GuideCard
                    key={g.slug}
                    href={guidePath(g)}
                    icon={GUIDE_ICONS[g.slug] ?? Globe}
                    title={g.cardTitle}
                    description={g.cardDescription}
                    badge={g.featured ? "Essentiel" : undefined}
                  />
                ))}
              </div>
            </div>

            {/* Autres ressources */}
            <div className="mt-20 pt-16 border-t border-zinc-100 dark:border-zinc-800">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-8">
                Autres ressources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* Calculateur coût Excel */}
                <Link
                  href="/outils/calculateur-cout-excel"
                  className="group flex items-center gap-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200 hover:shadow-sm"
                >
                  <div className="size-14 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center shrink-0 border border-emerald-100 dark:border-emerald-900 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/50 group-hover:border-emerald-200 dark:group-hover:border-emerald-800 transition-colors">
                    <Calculator className="size-7 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-1 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                      Calculateur coût Excel
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      Combien vous coûte vraiment la gestion manuelle sous
                      Excel ? Calculez le ROI d&apos;un outil métier sur mesure.
                    </p>
                  </div>
                  <div className="ml-auto">
                    <ChevronRight className="size-5 text-zinc-300 dark:text-zinc-600 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors" />
                  </div>
                </Link>

                {/* Réalisations */}
                <Link
                  href="/realisations"
                  className="group flex items-center gap-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200 hover:shadow-sm"
                >
                  <div className="size-14 rounded-xl bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center shrink-0 border border-zinc-100 dark:border-zinc-800 group-hover:bg-white dark:group-hover:bg-zinc-800 group-hover:border-zinc-200 dark:group-hover:border-zinc-700 transition-colors">
                    <FolderOpen className="size-7 text-zinc-700 dark:text-zinc-300" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-1 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                      Nos réalisations
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      Quatre produits documentés en détail : contexte, stack
                      Next.js / React, modules livrés et chiffres mesurés.
                    </p>
                  </div>
                  <div className="ml-auto">
                    <ChevronRight className="size-5 text-zinc-300 dark:text-zinc-600 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </GuidesShell>
  );
}
