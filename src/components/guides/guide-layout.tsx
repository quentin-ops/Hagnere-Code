import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { GuideFAQSection } from "./guide-faq-section";
import { GuideSidebarCTA } from "./guide-sidebar";

export interface GuideBreadcrumb {
  label: string;
  href?: string;
}

export interface GuideTocItem {
  id: string;
  label: string;
}

export interface GuideSidebarKeyPoint {
  number: string;
  title: string;
  description: string;
  color: "emerald" | "blue" | "violet" | "amber";
}

export interface GuideSidebarLink {
  href: string;
  label: string;
}

export interface GuideFAQItem {
  question: string;
  answer: string;
}

interface GuideLayoutProps {
  breadcrumbs: GuideBreadcrumb[];
  heroTitle: string;
  heroDescription: string;
  heroImage?: string;
  heroImageAlt?: string;
  /** Byline E-E-A-T affichée sous la description du hero. */
  author?: { name: string; role?: string; href?: string };
  /** Date de mise à jour lisible, ex. « Mis à jour le 13 juillet 2026 ». */
  updatedLabel?: string;
  keyPoints: GuideSidebarKeyPoint[];
  relatedLinks: GuideSidebarLink[];
  faqTitle: string;
  faqItems: GuideFAQItem[];
  children: React.ReactNode;
}

const colorMap = {
  emerald: {
    dot: "bg-emerald-400",
    glow: "shadow-[0_0_8px_rgba(52,211,153,0.25)]",
  },
  blue: {
    dot: "bg-blue-400",
    glow: "shadow-[0_0_8px_rgba(96,165,250,0.25)]",
  },
  violet: {
    dot: "bg-violet-400",
    glow: "shadow-[0_0_8px_rgba(167,139,250,0.25)]",
  },
  amber: {
    dot: "bg-amber-400",
    glow: "shadow-[0_0_8px_rgba(251,191,36,0.25)]",
  },
};

export function GuideLayout({
  breadcrumbs,
  heroTitle,
  heroDescription,
  heroImage,
  heroImageAlt,
  author,
  updatedLabel,
  keyPoints,
  relatedLinks,
  faqTitle,
  faqItems,
  children,
}: GuideLayoutProps) {
  return (
    <>
      {/* Dark Hero Section */}
      <section className="pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 md:pb-16 bg-zinc-950 relative overflow-hidden">
        {/* Subtle gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(109,40,217,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.06),transparent_60%)]" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-zinc-500 mb-6 sm:mb-8">
            <Link
              href="/"
              className="hover:text-zinc-300 transition-colors"
            >
              Accueil
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="flex items-center gap-2">
                <ChevronRight className="size-3" aria-hidden="true" />
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-zinc-300 transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-zinc-200 font-medium">
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </nav>

          {/* Split layout: Text + Image card */}
          <div className={`flex flex-col ${heroImage ? 'lg:flex-row lg:items-center lg:gap-12 xl:gap-16' : ''}`}>
            {/* Left column: Title + Description + Key Points */}
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3 sm:mb-4 max-w-3xl">
                {heroTitle}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl mb-4 sm:mb-5">
                {heroDescription}
              </p>

              {/* Byline auteur + date de mise à jour (E-E-A-T + fraîcheur) */}
              {(author || updatedLabel) && (
                <p className="text-xs sm:text-sm text-zinc-500 mb-6 sm:mb-8">
                  {author && (
                    <>
                      Écrit par{" "}
                      {author.href ? (
                        <Link
                          href={author.href}
                          className="text-zinc-300 font-medium hover:text-white transition-colors"
                        >
                          {author.name}
                        </Link>
                      ) : (
                        <span className="text-zinc-300 font-medium">{author.name}</span>
                      )}
                      {author.role && <>, {author.role}</>}
                    </>
                  )}
                  {author && updatedLabel && <span aria-hidden="true"> · </span>}
                  {updatedLabel}
                </p>
              )}

              {/* Key points — glassmorphism badges */}
              {keyPoints.length > 0 && (
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {keyPoints.map((point, index) => (
                    <div
                      key={index}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] backdrop-blur-sm border border-white/[0.10] ${colorMap[point.color].glow} transition-all duration-200`}
                    >
                      <span
                        className={`size-1.5 rounded-full ${colorMap[point.color].dot} shrink-0`}
                      />
                      <span className="text-xs font-medium text-zinc-300 tracking-wide">
                        {point.title}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right column: Glassmorphism image card */}
            {heroImage && (
              <div className="hidden lg:flex lg:w-[38%] xl:w-[35%] shrink-0 items-center justify-center">
                <div className="relative w-full aspect-square max-w-[340px] rounded-2xl bg-violet-500/[0.07] backdrop-blur-xl border border-white/[0.08] shadow-[0_0_80px_-20px_rgba(109,40,217,0.25)] p-5">
                  {/* Inner glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_center,_rgba(109,40,217,0.08),transparent_70%)]" />
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image
                      src={heroImage}
                      alt={heroImageAlt || heroTitle}
                      fill
                      className="object-contain"
                      sizes="(min-width: 1280px) 35vw, (min-width: 1024px) 38vw, 0vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Two-column layout: Article + Sidebar */}
          <div className="flex flex-col gap-8 sm:gap-10 lg:flex-row lg:gap-16 xl:gap-24">
            {/* Article */}
            <article className="flex-1 max-w-3xl">
              <div className="prose prose-zinc prose-sm max-w-none dark:prose-invert prose-headings:tracking-tight prose-headings:font-semibold prose-h1:text-2xl prose-h1:mb-6 prose-h2:text-lg prose-h2:mt-10 prose-h2:mb-4 prose-p:text-zinc-600 dark:prose-p:text-zinc-400 prose-p:leading-relaxed prose-li:text-zinc-600 dark:prose-li:text-zinc-400 prose-strong:text-zinc-900 dark:prose-strong:text-zinc-100">
                {children}
              </div>

              {/* Related Links — at bottom of article */}
              {relatedLinks.length > 0 && (
                <div className="mt-10 sm:mt-16 pt-8 sm:pt-10 border-t border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center size-8 rounded-lg bg-zinc-900 dark:bg-zinc-100">
                      <BookOpen className="size-4 text-white dark:text-zinc-900" />
                    </div>
                    <h4 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                      Guides liés
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {relatedLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        className="group flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl text-sm font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800/50 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-white dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-100 hover:shadow-sm transition-all duration-200"
                      >
                        <span>{link.label}</span>
                        <ArrowRight className="size-3.5 text-zinc-300 dark:text-zinc-600 group-hover:text-zinc-500 dark:group-hover:text-zinc-400 group-hover:translate-x-0.5 transition-all duration-200 shrink-0" aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Sidebar — only CTA card, sticky */}
            <aside className="w-full lg:w-80 xl:w-96 shrink-0">
              <div className="lg:sticky lg:top-24">
                <GuideSidebarCTA />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {faqItems.length > 0 && (
        <GuideFAQSection title={faqTitle} items={faqItems} />
      )}
    </>
  );
}
