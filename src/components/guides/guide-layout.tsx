import {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
} from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { GuideToc } from "./guide-content-blocks";
import { GuideFAQSection } from "./guide-faq-section";
import {
  GuideContextCTA,
  GuideHeroCTA,
  GuideSidebarCTA,
} from "./guide-sidebar";

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
  heroAction?: { href: string; label: string };
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
  showWhitePaperPromo?: boolean;
  /** Affiche le bloc de contact générique placé à côté de l'article. */
  showSidebarCta?: boolean;
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
  heroAction,
  heroImage,
  heroImageAlt,
  author,
  updatedLabel,
  keyPoints,
  relatedLinks,
  faqTitle,
  faqItems,
  showWhitePaperPromo = false,
  showSidebarCta = true,
  children,
}: GuideLayoutProps) {
  /*
   * Les 101 routes /guides partagent ce composant avec six pages commerciales.
   * Le fil d'Ariane /guides permet d'appliquer le gabarit éditorial premium
   * sans modifier le rendu historique des pages agence et livre blanc.
   */
  const isPremiumGuide = breadcrumbs.some(
    (breadcrumb) => breadcrumb.href === "/guides",
  );
  const childNodes = Children.toArray(children);
  const tocIndex = childNodes.findIndex(
    (node) => isValidElement(node) && node.type === GuideToc,
  );
  const tocNode =
    tocIndex >= 0
      ? cloneElement(
          childNodes[tocIndex] as ReactElement<{
            items: { id: string; label: string }[];
            variant?: "stacked" | "pills";
          }>,
          { variant: "pills" },
        )
      : null;
  const articleChildren =
    tocIndex >= 0
      ? childNodes.filter((_, index) => index !== tocIndex)
      : childNodes;
  const authorInitials = author?.name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  if (isPremiumGuide) {
    return (
      <div
        className="guide-code-premium-page bg-[#fbfaf7] dark:bg-zinc-950"
        data-guide-layout="patrimoine-premium"
      >
        {/* Hero éditorial — structure du GuidePremiumLayout Patrimoine. */}
        <section className="bg-[#fbfaf7] pb-10 pt-10 dark:bg-zinc-950 sm:pb-12 sm:pt-12 md:pb-14 md:pt-14">
          <div className="container mx-auto max-w-[1180px] px-4">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_400px] xl:gap-16">
              <div className="min-w-0">
                <nav
                  aria-label="Fil d'Ariane"
                  className="mb-7 flex flex-wrap items-center gap-1.5 text-xs text-zinc-500 sm:mb-9 sm:gap-2 sm:text-sm dark:text-zinc-400"
                >
                  <Link
                    href="/"
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-zinc-900 dark:hover:text-white"
                  >
                    <span className="inline-flex size-4 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-300">
                      <span className="size-1 rounded-full bg-zinc-400" />
                    </span>
                    Accueil
                  </Link>
                  {breadcrumbs.map((crumb, index) => {
                    const isLast = index === breadcrumbs.length - 1;
                    return (
                      <span
                        key={`${crumb.label}-${index}`}
                        className="flex items-center gap-1.5 sm:gap-2"
                      >
                        <ChevronRight
                          className="size-3 text-zinc-300 dark:text-zinc-700"
                          aria-hidden="true"
                        />
                        {crumb.href && !isLast ? (
                          <Link
                            href={crumb.href}
                            className="transition-colors hover:text-zinc-900 dark:hover:text-white"
                          >
                            {crumb.label}
                          </Link>
                        ) : (
                          <span className="inline-flex items-center rounded-full bg-violet-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-violet-700 ring-1 ring-violet-200/60 dark:bg-violet-950/40 dark:text-violet-300 dark:ring-violet-800">
                            {crumb.label}
                          </span>
                        )}
                      </span>
                    );
                  })}
                </nav>

                {keyPoints.length > 0 && (
                  <div className="mb-6 flex flex-wrap items-center gap-2 sm:mb-7">
                    {keyPoints.map((point, index) => {
                      const tone = colorMap[point.color];
                      return (
                        <span
                          key={`${point.title}-${index}`}
                          className={`inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1 text-[11px] font-medium text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200 sm:text-xs ${tone.glow}`}
                        >
                          <span
                            className={`size-1.5 shrink-0 rounded-full ${tone.dot}`}
                            aria-hidden="true"
                          />
                          <span>
                            {point.number && (
                              <>
                                <span className="font-bold tabular-nums text-zinc-950 dark:text-white">
                                  {point.number}
                                </span>{" "}
                              </>
                            )}
                            {point.title}
                          </span>
                        </span>
                      );
                    })}
                  </div>
                )}

                <h1 className="max-w-3xl font-[family-name:var(--font-playfair)] text-[34px] font-bold leading-[1.05] tracking-[-0.02em] text-zinc-950 dark:text-white sm:text-[44px] sm:leading-[1.05] md:text-[52px] md:leading-[1.04]">
                  {heroTitle}
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300 sm:mt-6 sm:text-[17px]">
                  {heroDescription}
                </p>

                {heroAction && (
                  <a
                    href={heroAction.href}
                    className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-zinc-950 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                  >
                    {heroAction.label}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </a>
                )}

                {showSidebarCta && !heroImage && (
                  <div className="mt-7 lg:hidden">
                    <GuideHeroCTA />
                  </div>
                )}

                {(author || updatedLabel) && (
                  <div className="mt-7 flex items-center gap-4 rounded-2xl border border-zinc-200/80 bg-white px-5 py-4 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_4px_14px_rgba(0,0,0,0.04)] dark:border-zinc-800 dark:bg-zinc-950 sm:mt-8">
                    {author && (
                      <span
                        aria-hidden="true"
                        className="flex size-11 shrink-0 items-center justify-center rounded-full bg-violet-700 text-sm font-semibold tracking-wide text-white"
                      >
                        {authorInitials || "HC"}
                      </span>
                    )}
                    <div className="min-w-0 flex-1">
                      {author && (
                        <p className="text-sm text-zinc-900 dark:text-white">
                          {author.href ? (
                            <Link
                              href={author.href}
                              className="font-semibold underline-offset-4 hover:underline"
                            >
                              {author.name}
                            </Link>
                          ) : (
                            <span className="font-semibold">{author.name}</span>
                          )}
                          {author.role && (
                            <>
                              <span
                                className="mx-1.5 text-zinc-400"
                                aria-hidden="true"
                              >
                                ·
                              </span>
                              <span className="text-zinc-600 dark:text-zinc-300">
                                {author.role}
                              </span>
                            </>
                          )}
                        </p>
                      )}
                      {updatedLabel && (
                        <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
                          {updatedLabel}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {heroImage ? (
                <div className="hidden lg:flex lg:pt-2">
                  <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-violet-100 bg-white p-5 shadow-[0_18px_48px_-20px_rgba(109,40,217,0.30)] dark:border-violet-950 dark:bg-zinc-900">
                    <Image
                      src={heroImage}
                      alt={heroImageAlt || heroTitle}
                      fill
                      className="object-contain p-5"
                      sizes="(min-width: 1280px) 400px, (min-width: 1024px) 360px, 0px"
                      priority
                    />
                  </div>
                </div>
              ) : (
                showSidebarCta && (
                  <div className="hidden lg:block lg:pt-2">
                    <GuideHeroCTA />
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {tocNode}

        {/* Article aligné à gauche, jamais recentré lorsque la sidebar est masquée. */}
        <section className="bg-[#fbfaf7] py-12 dark:bg-zinc-950 md:py-16">
          <div className="container mx-auto max-w-[1180px] px-4">
            <div className="flex min-w-0 flex-col gap-10 lg:flex-row lg:gap-14 xl:gap-16">
              <article
                data-guide-article="true"
                className="w-full min-w-0 max-w-[760px] flex-1"
              >
                <div className="guide-code-prose prose prose-zinc max-w-none dark:prose-invert prose-headings:tracking-tight prose-headings:font-semibold prose-h2:font-[family-name:var(--font-playfair)] prose-h2:text-[28px] prose-h2:leading-tight prose-h2:text-zinc-950 prose-h2:mt-14 prose-h2:mb-6 sm:prose-h2:text-[32px] md:prose-h2:text-[38px] dark:prose-h2:text-white prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3 prose-p:my-4 prose-p:text-[15px] prose-p:leading-[1.75] prose-p:text-zinc-700 dark:prose-p:text-zinc-200 prose-li:my-1 prose-li:text-[15px] prose-li:leading-[1.7] prose-li:text-zinc-700 dark:prose-li:text-zinc-200 prose-strong:font-semibold prose-strong:text-zinc-950 dark:prose-strong:text-white prose-a:font-medium prose-a:text-violet-700 prose-a:underline prose-a:decoration-violet-300 prose-a:underline-offset-2 hover:prose-a:decoration-violet-700 dark:prose-a:text-violet-300">
                  {articleChildren}
                </div>

                {relatedLinks.length > 0 && (
                  <div className="mt-10 border-t border-zinc-200 pt-8 dark:border-zinc-800 sm:mt-16 sm:pt-10">
                    <div className="mb-6 flex items-center gap-3">
                      <span className="flex size-9 items-center justify-center rounded-lg bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
                        <BookOpen className="size-4" aria-hidden="true" />
                      </span>
                      <h3 className="text-lg font-bold tracking-tight text-zinc-950 dark:text-white">
                        Guides liés
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {relatedLinks.map((link, index) => (
                        <Link
                          key={`${link.href}-${index}`}
                          href={link.href}
                          className="group flex items-center justify-between gap-4 rounded-xl border border-zinc-200 bg-white px-4 py-3.5 text-sm font-medium leading-snug text-zinc-800 transition-colors hover:border-zinc-300 hover:bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:border-zinc-700"
                        >
                          <span>{link.label}</span>
                          <ChevronRight
                            className="size-4 shrink-0 text-zinc-400 transition-all group-hover:translate-x-0.5 group-hover:text-zinc-700 dark:group-hover:text-zinc-200"
                            aria-hidden="true"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </article>

              {showSidebarCta && (
                <div className="w-full min-w-0 shrink-0 lg:w-[300px] xl:w-[340px]">
                  <div className="lg:sticky lg:top-24">
                    <GuideContextCTA
                      showWhitePaperPromo={showWhitePaperPromo}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {faqItems.length > 0 && (
          <GuideFAQSection
            title={faqTitle}
            items={faqItems}
            premium
          />
        )}
      </div>
    );
  }

  return (
    <>
      {/* Dark Hero Section */}
      <section className="pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 md:pb-16 bg-zinc-950 relative overflow-hidden">
        {/* Subtle gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(109,40,217,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.06),transparent_60%)]" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          {/* Breadcrumbs */}
          <nav
            aria-label="Fil d'Ariane"
            className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-zinc-500 mb-6 sm:mb-8"
          >
            <Link href="/" className="hover:text-zinc-300 transition-colors">
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
          <div
            className={`flex flex-col ${heroImage ? "lg:flex-row lg:items-center lg:gap-12 xl:gap-16" : ""}`}
          >
            {/* Left column: Title + Description + Key Points */}
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3 sm:mb-4 max-w-3xl">
                {heroTitle}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl mb-4 sm:mb-5">
                {heroDescription}
              </p>

              {heroAction && (
                <a
                  href={heroAction.href}
                  className="mb-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 sm:mb-6"
                >
                  {heroAction.label}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              )}

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
                        <span className="text-zinc-300 font-medium">
                          {author.name}
                        </span>
                      )}
                      {author.role && <>, {author.role}</>}
                    </>
                  )}
                  {author && updatedLabel && (
                    <span aria-hidden="true"> · </span>
                  )}
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
          <div className="flex min-w-0 flex-col gap-8 sm:gap-10 lg:flex-row lg:gap-12 xl:gap-20">
            {/* Article */}
            <article
              className={`min-w-0 w-full flex-1 max-w-3xl ${showSidebarCta ? "" : "mx-auto"}`}
            >
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
                    <h3 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                      Guides liés
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {relatedLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        className="group flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl text-sm font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800/50 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-white dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-100 hover:shadow-sm transition-all duration-200"
                      >
                        <span>{link.label}</span>
                        <ArrowRight
                          className="size-3.5 text-zinc-300 dark:text-zinc-600 group-hover:text-zinc-500 dark:group-hover:text-zinc-400 group-hover:translate-x-0.5 transition-all duration-200 shrink-0"
                          aria-hidden="true"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Sidebar — only CTA card, sticky */}
            {showSidebarCta && (
              <div className="min-w-0 w-full shrink-0 lg:w-72 xl:w-80">
                <div className="lg:sticky lg:top-24">
                  <GuideSidebarCTA showWhitePaperPromo={showWhitePaperPromo} />
                </div>
              </div>
            )}
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
