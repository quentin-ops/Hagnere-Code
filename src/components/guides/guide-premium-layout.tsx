import { isValidElement, type ReactNode } from "react";
import {
  CONTACT_PHONE_DISPLAY_NATIONAL,
  CONTACT_PHONE_E164,
} from "@/lib/contact-details";
import Link from "next/link";
import {
  ChevronRight,
  Phone,
  ArrowRight,
  CheckCircle2,
  FileText,
  MessageSquareText,
  Star,
  AlertTriangle,
  BookOpen,
} from "lucide-react";
import { GuidePremiumFaq } from "./guide-premium-faq";
import { GuidePremiumFaqCategorized } from "./guide-premium-faq-categorized";
import { GuidePremiumMobileCta } from "./guide-premium-mobile-cta";
import { GuidePremiumTocPills } from "./guide-premium-toc-pills";
import { TrackedGuideCtaLink } from "./tracked-guide-cta-link";
import type { GuidePremiumFaqCategory } from "./guide-premium-types";

/* ──────────────────────────────────────────────
   Types
   ────────────────────────────────────────────── */
export interface GuidePremiumBreadcrumb {
  label: string;
  href?: string;
}

export type GuidePremiumBadgeVariant = "dark" | "neutral" | "success" | "muted";

export interface GuidePremiumBadge {
  label: string;
  variant?: GuidePremiumBadgeVariant;
  icon?: ReactNode;
}

export interface GuidePremiumStat {
  label: string;
  value: string;
}

export interface GuidePremiumAuthor {
  initials: string;
  name: string;
  role?: string;
  title?: string;
  subtitle?: string;
  profileUrl?: string;
  linkedinUrl?: string;
}

export interface GuidePremiumSidebarHeroCta {
  eyebrow?: string;
  trustEyebrow?: string;
  titleStart: string;
  titleEm: string;
  description: string;
  benefits: string[];
  /**
   * Ce bloc nomme son action `primaryCta*`, alors que `sidebarContextCta` et
   * `strategyCta` la nomment `cta*`. Plusieurs pages ont logiquement passé la
   * seconde forme ici : `<Link href={undefined}>` faisait alors échouer la
   * résolution d'URL de Next et bloquait le prérendu. Les deux formes sont
   * donc acceptées, plutôt que d'exiger la bonne.
   */
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  ctaLabel?: string;
  ctaHref?: string;
  phoneLabel?: string;
  phoneHref?: string;
}

/** Numéro du cabinet, utilisé en repli d'affichage et de lien. */
/* Ligne publiée : dérivée du module de coordonnées, jamais recopiée.
   Le NAP du site vaut sur les pages de guides comme ailleurs. */
const TEL_CABINET_LABEL = CONTACT_PHONE_DISPLAY_NATIONAL;
const TEL_CABINET_HREF = `tel:${CONTACT_PHONE_E164}`;

/**
 * Construit un href `tel:` à partir du libellé affiché.
 *
 * `phoneLabel` est typé requis, mais plusieurs pages appellent ce layout sans
 * le fournir. L'appel direct à `.replace()` levait alors un TypeError pendant
 * le rendu serveur : React basculait la page en rendu client, et son H1
 * disparaissait du HTML initial — invisible pour un crawler qui n'exécute pas
 * le JavaScript. D'où ce repli plutôt qu'un accès direct.
 */
function telHref(label?: string): string {
  return label ? `tel:${label.replace(/\s/g, "")}` : TEL_CABINET_HREF;
}

export interface GuidePremiumTocItem {
  id: string;
  number?: string;
  label: string;
  shortLabel?: string;
}

export interface GuidePremiumSourceCitation {
  label: string;
  href?: string;
}

export interface GuidePremiumSimulator {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface GuidePremiumStrategyCtaData {
  trustpilotScore?: string;
  trustpilotMax?: string;
  trustpilotLabel?: string;
  titleStart: string;
  titleEm: string;
  description: string;
  /**
   * Accepte des chaînes ou des objets `{ label }`.
   *
   * Le hero de ce même composant attend des objets (il lit `badge.label`), ce
   * qui a naturellement conduit plusieurs pages à passer la même forme ici,
   * où seules des chaînes étaient prévues. React levait alors « Objects are
   * not valid as a React child » pendant le rendu serveur : la page basculait
   * en rendu client et perdait son H1 dans le HTML initial. On tolère donc les
   * deux formes plutôt que d'exiger la bonne.
   */
  badges: (string | { label: string })[];
  /**
   * `ctaHref`, `ctaLabel` et `phoneLabel` sont typés requis mais plusieurs
   * pages passent un `strategyCta` sans eux. `<Link href={undefined}>` faisait
   * alors échouer la résolution d'URL de Next — d'où le « Cannot destructure
   * property 'auth' » au prérendu, qui bloquait le build. D'où les replis
   * ci-dessous plutôt qu'un accès direct.
   */
  ctaLabel?: string;
  ctaHref?: string;
  phoneLabel?: string;
  phoneHref?: string;
  /** Masque l'action téléphonique lorsqu'un guide impose un CTA unique. */
  showPhoneCta?: boolean;
}

/** Repli de destination lorsqu'une page n'a pas fourni de lien d'action. */
const CTA_HREF_DEFAUT = "/demarrer-un-projet";
const CTA_LABEL_DEFAUT = "Démarrer mon projet";

export interface GuidePremiumLegalSource {
  source: string;
  description: string;
  href?: string;
  /**
   * Ajoute `nofollow` au lien sortant.
   *
   * Les sources institutionnelles (Google, CNIL, Légifrance, référentiels
   * publics) restent en dofollow : la citation y est le but. À réserver aux
   * pages commerciales de concurrents citées comme échantillon de prix, où le
   * lien transmettrait un signal de classement sur la requête même que la page
   * vise.
   */
  nofollow?: boolean;
}

export interface GuidePremiumDisclaimerData {
  eyebrow?: string;
  title: string;
  description: string;
}

export interface GuidePremiumRelatedGuide {
  label: string;
  href: string;
}

export interface GuidePremiumFaqMeta {
  eyebrow?: string;
  titleStart?: string;
  titleEm?: string;
  titleEnd?: string;
  subtitle?: string;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface GuidePremiumContextCta {
  eyebrow: string;
  title: string;
  description: string;
  benefits?: string[];
  ctaLabel: string;
  ctaHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  badgeLabel?: string;
}

export interface GuidePremiumLayoutProps {
  breadcrumbs: GuidePremiumBreadcrumb[];
  badges: GuidePremiumBadge[];
  heroTitle: string;
  heroTitleEm?: string;
  heroTitleSuffix?: string;
  heroDescription: string;
  stats: GuidePremiumStat[];
  author: GuidePremiumAuthor;
  sidebarHeroCta?: GuidePremiumSidebarHeroCta;
  toc: GuidePremiumTocItem[];
  tocLabel?: string;
  mobileCtaLabel?: string;
  sidebarContextCta?: GuidePremiumContextCta;
  faqTitle?: string;
  faqItems?: { question: string; answer: ReactNode }[];
  faqMeta?: GuidePremiumFaqMeta;
  faqCategories?: GuidePremiumFaqCategory[];
  strategyCta?: GuidePremiumStrategyCtaData;
  legalSources?: GuidePremiumLegalSource[];
  disclaimer?: GuidePremiumDisclaimerData;
  relatedGuides?: GuidePremiumRelatedGuide[];
  relatedGuidesLabel?: string;
  children: ReactNode;
}

/* ──────────────────────────────────────────────
   Sub-components
   ────────────────────────────────────────────── */
const badgeVariantClasses: Record<GuidePremiumBadgeVariant, string> = {
  dark: "bg-zinc-950 text-white border-zinc-950",
  neutral:
    "bg-white dark:bg-zinc-950 text-zinc-700 dark:text-white border-zinc-200 dark:border-zinc-800",
  success: "bg-emerald-50 text-emerald-700 border-emerald-200",
  muted:
    "bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-white border-zinc-200 dark:border-zinc-800",
};

function PremiumBadge({ badge }: { badge: GuidePremiumBadge }) {
  const variant = badge.variant ?? "neutral";
  const isSuccess = variant === "success";
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium border ${badgeVariantClasses[variant]}`}
    >
      {isSuccess && (
        <span className="size-1.5 rounded-full bg-emerald-500 shrink-0" />
      )}
      {badge.icon}
      {badge.label}
    </span>
  );
}

function PremiumBreadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: GuidePremiumBreadcrumb[];
}) {
  return (
    <nav
      aria-label="Fil d'Ariane"
      className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-zinc-500 dark:text-white mb-7 sm:mb-9 flex-wrap"
    >
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 hover:text-zinc-900 transition-colors"
      >
        <span className="inline-flex items-center justify-center size-4 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-white">
          <span className="size-1 rounded-full bg-zinc-400" />
        </span>
        Accueil
      </Link>
      {breadcrumbs.map((crumb, index) => {
        const isLast = index === breadcrumbs.length - 1;
        return (
          <span key={index} className="flex items-center gap-1.5 sm:gap-2">
            <ChevronRight className="size-3 text-zinc-300" aria-hidden="true" />
            {crumb.href && !isLast ? (
              <Link
                href={crumb.href}
                className="hover:text-zinc-900 transition-colors"
              >
                {crumb.label}
              </Link>
            ) : (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200/60 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider">
                {crumb.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}

function PremiumStatsGrid({ stats }: { stats: GuidePremiumStat[] }) {
  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-3 ${
        stats.length === 6 ? "md:grid-cols-6" : "md:grid-cols-5"
      } gap-x-6 gap-y-5 mt-9 sm:mt-10 pt-7 border-t border-zinc-200 dark:border-zinc-800`}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500 dark:text-white mb-1.5">
            {stat.label}
          </p>
          <p className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-white tabular-nums truncate">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
}

function PremiumAuthorCard({ author }: { author: GuidePremiumAuthor }) {
  return (
    <div className="mt-7 sm:mt-8 flex items-center gap-4 px-5 py-4 rounded-2xl border border-zinc-200/80 bg-white dark:bg-zinc-950 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_4px_14px_rgba(0,0,0,0.04)]">
      <div
        aria-hidden="true"
        className="size-11 shrink-0 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold text-sm tracking-wide"
      >
        {author.initials}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-zinc-900 dark:text-white">
          {author.profileUrl ? (
            <Link
              href={author.profileUrl}
              className="font-semibold underline-offset-4 hover:underline"
            >
              {author.name}
            </Link>
          ) : (
            <span className="font-semibold">{author.name}</span>
          )}
          <span className="mx-1.5 hidden text-zinc-400 sm:inline">·</span>
          <span className="mt-1 block text-zinc-600 dark:text-white sm:mt-0 sm:inline">
            {author.role ?? author.title ?? "Auteur du guide"}
          </span>
        </p>
        {author.subtitle && (
          <p className="text-xs text-zinc-500 dark:text-white mt-0.5 truncate">
            {author.subtitle}
          </p>
        )}
      </div>
      {author.linkedinUrl && (
        <a
          href={author.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-xs font-medium text-zinc-700 dark:text-white hover:bg-zinc-50 hover:border-zinc-300 transition-colors shrink-0"
        >
          <FileText className="size-3.5" aria-hidden="true" />
          Profil LinkedIn
        </a>
      )}
    </div>
  );
}

function PremiumSidebarHeroCta({ cta }: { cta: GuidePremiumSidebarHeroCta }) {
  return (
    <div className="relative rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-600 to-indigo-700 p-7 sm:p-8 text-white overflow-hidden shadow-[0_18px_48px_-20px_rgba(79,70,229,0.55)] print:hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.18),transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(0,0,0,0.18),transparent_60%)] pointer-events-none" />

      <div className="relative z-10">
        <p className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white/85 mb-4">
          <span className="inline-block size-1 rounded-full bg-white/80" />
          {cta.eyebrow ?? cta.trustEyebrow ?? "Accompagnement"}
        </p>
        <p className="font-[family-name:var(--font-playfair)] text-2xl leading-[1.15] tracking-tight font-semibold mb-3">
          {cta.titleStart}{" "}
          <em className="italic font-medium text-white/90">{cta.titleEm}</em>
        </p>
        <p className="text-sm text-white/85 leading-relaxed mb-5">
          {cta.description}
        </p>

        <ul className="space-y-2 mb-6">
          {cta.benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-center gap-2.5 text-sm text-white/95"
            >
              <CheckCircle2
                className="size-4 text-white shrink-0"
                aria-hidden="true"
              />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        <div className="space-y-2.5">
          <TrackedGuideCtaLink
            href={cta.primaryCtaHref ?? cta.ctaHref ?? CTA_HREF_DEFAUT}
            placement="hero"
            primary
            className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold rounded-xl bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white hover:bg-zinc-50 transition-colors"
          >
            <MessageSquareText className="size-4" aria-hidden="true" />
            {cta.primaryCtaLabel ?? cta.ctaLabel ?? CTA_LABEL_DEFAUT}
          </TrackedGuideCtaLink>
          <TrackedGuideCtaLink
            href={cta.phoneHref ?? telHref(cta.phoneLabel)}
            placement="hero"
            className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-medium rounded-xl border border-white/30 text-white hover:bg-white/10 transition-colors"
          >
            <Phone className="size-4" aria-hidden="true" />
            {cta.phoneLabel ?? TEL_CABINET_LABEL}
          </TrackedGuideCtaLink>
        </div>
      </div>
    </div>
  );
}

function PremiumStickySidebar({
  contextCta,
}: {
  contextCta: GuidePremiumContextCta;
}) {
  return (
    <div className="w-full lg:w-[300px] xl:w-[340px] shrink-0 print:hidden">
      <div className="lg:sticky lg:top-24">
        <ContextCtaCard data={contextCta} />
      </div>
    </div>
  );
}

function ContextCtaCard({ data }: { data: GuidePremiumContextCta }) {
  return (
    <div className="relative rounded-2xl border border-indigo-100 bg-white dark:bg-zinc-950 p-6 sm:p-7 shadow-[0_0_0_4px_rgba(99,102,241,0.06),0_18px_48px_-22px_rgba(99,102,241,0.40)]">
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_top_right,_rgba(99,102,241,0.10),transparent_60%)]"
        aria-hidden="true"
      />

      <div className="relative">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center justify-center size-7 rounded-lg bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
            <MessageSquareText className="size-3.5" aria-hidden="true" />
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-700">
            {data.eyebrow}
          </span>
        </div>

        <h3 className="font-[family-name:var(--font-playfair)] text-[22px] leading-[1.15] font-bold tracking-[-0.01em] text-zinc-950 dark:text-white mb-3">
          {data.title}
        </h3>

        <p className="text-[13.5px] text-zinc-600 dark:text-white leading-relaxed mb-5">
          {data.description}
        </p>

        {data.badgeLabel && (
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-medium mb-5">
            <CheckCircle2
              className="size-3 text-emerald-600"
              aria-hidden="true"
            />
            {data.badgeLabel}
          </div>
        )}

        {data.benefits && data.benefits.length > 0 && (
          <ul className="space-y-2 mb-5">
            {data.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-2 text-[13px] text-zinc-700 dark:text-white leading-snug"
              >
                <CheckCircle2
                  className="size-3.5 text-indigo-600 shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="space-y-2">
          <TrackedGuideCtaLink
            href={data.ctaHref ?? CTA_HREF_DEFAUT}
            placement="sidebar"
            primary
            className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-zinc-950 text-white text-sm font-semibold hover:bg-zinc-800 transition-colors"
          >
            <MessageSquareText className="size-4" aria-hidden="true" />
            {data.ctaLabel ?? CTA_LABEL_DEFAUT}
            <ArrowRight className="size-4" aria-hidden="true" />
          </TrackedGuideCtaLink>
          {data.secondaryLabel && (
            <TrackedGuideCtaLink
              href={
                data.secondaryHref ??
                `tel:${data.secondaryLabel.replace(/\s/g, "")}`
              }
              placement="sidebar"
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-800 dark:text-white text-sm font-medium hover:border-indigo-300 hover:text-indigo-700 transition-colors"
            >
              <Phone className="size-4" aria-hidden="true" />
              {data.secondaryLabel}
            </TrackedGuideCtaLink>
          )}
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Main layout
   ────────────────────────────────────────────── */
export function GuidePremiumLayout({
  breadcrumbs,
  badges,
  heroTitle,
  heroTitleEm,
  heroTitleSuffix,
  heroDescription,
  stats,
  author,
  sidebarHeroCta,
  toc,
  tocLabel,
  mobileCtaLabel,
  sidebarContextCta,
  faqTitle = "Questions fréquentes",
  faqItems,
  faqMeta,
  faqCategories,
  strategyCta,
  legalSources,
  disclaimer,
  relatedGuides,
  relatedGuidesLabel,
  children,
}: GuidePremiumLayoutProps) {
  return (
    <div className="guide-premium-page">
      {/* Hero — light cream background (homepage-aligned) */}
      <section
        id="guide-premium-hero"
        className="pt-10 sm:pt-12 md:pt-14 pb-10 sm:pb-12 md:pb-14 bg-[#fbfaf7] dark:bg-zinc-950"
      >
        <div className="container mx-auto px-4 max-w-[1180px]">
          {/*
            Le bloc d'appel à l'action n'est rendu qu'une seule fois. Il était
            auparavant écrit deux fois — une version `lg:hidden` et une version
            `hidden lg:block` — ce qui plaçait tout son texte en double dans le
            HTML servi, donc dans ce que lisent les extracteurs de texte des
            assistants. Le placement de grille suffit à obtenir les deux mises
            en page : sous l'accroche en une colonne, en colonne de droite à
            partir de `lg`.

            Les espacements verticaux restent portés par les marges des blocs
            (`mt-7` du bloc d'action, marges internes des statistiques et de
            l'auteur) : la grille ne prend une gouttière qu'à partir de `lg`,
            et uniquement horizontale.
          */}
          <div className="grid grid-cols-1 items-start gap-0 lg:grid-cols-[1fr_360px] lg:gap-x-12 lg:gap-y-0 xl:grid-cols-[1fr_400px] xl:gap-x-16">
            {/* Colonne de gauche — en-tête éditorial */}
            <div className="min-w-0 lg:col-start-1 lg:row-start-1">
              <PremiumBreadcrumbs breadcrumbs={breadcrumbs} />

              {/* Badges row */}
              <div className="flex flex-wrap items-center gap-2 mb-6 sm:mb-7">
                {badges.map((badge) => (
                  <PremiumBadge key={badge.label} badge={badge} />
                ))}
              </div>

              {/* H1 — serif Playfair Display */}
              <h1
                aria-label={[heroTitle, heroTitleEm, heroTitleSuffix]
                  .filter(Boolean)
                  .join(" ")}
                className="max-w-3xl text-balance font-[family-name:var(--font-playfair)] text-[34px] font-bold leading-[1.05] tracking-[-0.02em] text-zinc-950 dark:text-white sm:text-[44px] sm:leading-[1.05] md:text-[52px] md:leading-[1.04]"
              >
                {heroTitle}
                {heroTitleEm && (
                  <>
                    {" "}
                    <em className="italic font-medium text-indigo-600">
                      {heroTitleEm}
                    </em>
                  </>
                )}
                {heroTitleSuffix && <span> {heroTitleSuffix}</span>}
              </h1>

              {/* Description */}
              <p className="mt-5 sm:mt-6 text-base sm:text-[17px] leading-relaxed text-zinc-600 dark:text-white max-w-2xl">
                {heroDescription}
              </p>

            </div>

            {/*
              Bloc d'action, rendu une seule fois. En une colonne il suit
              l'accroche et reste visible sans défilement ; à partir de `lg` il
              rejoint la colonne de droite et couvre les deux rangées.
            */}
            {sidebarHeroCta && (
              <div className="mt-7 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:pt-2">
                <PremiumSidebarHeroCta cta={sidebarHeroCta} />
              </div>
            )}

            {/* Colonne de gauche — repères chiffrés et signature */}
            <div className="min-w-0 lg:col-start-1 lg:row-start-2">
              {stats.length > 0 && <PremiumStatsGrid stats={stats} />}
              <PremiumAuthorCard author={author} />
            </div>
          </div>
        </div>
      </section>

      {/* Sticky-ish horizontal toc */}
      <GuidePremiumTocPills toc={toc} label={tocLabel} />

      {/* Article + sticky sidebar */}
      {/* Nommée pour la même raison que le bloc d'avertissement : c'est la
          région qui porte le corps du guide et sa colonne latérale, et elle
          n'a pas de titre propre — les titres qu'elle contient appartiennent
          aux chapitres. */}
      <section
        aria-label="Corps du guide"
        className="py-12 md:py-16 bg-[#fbfaf7] dark:bg-zinc-950"
      >
        <div className="container mx-auto px-4 max-w-[1180px]">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-14 xl:gap-16">
            <article className="flex-1 min-w-0 max-w-[760px]">
              <div className="guide-premium-prose">{children}</div>
            </article>

            {sidebarContextCta && (
              <PremiumStickySidebar contextCta={sidebarContextCta} />
            )}
          </div>
        </div>
      </section>

      {/* End-of-article blocks */}
      {strategyCta && <PremiumStrategyCta data={strategyCta} />}

      {legalSources && legalSources.length > 0 && (
        <PremiumSources sources={legalSources} />
      )}

      {disclaimer && <PremiumDisclaimer data={disclaimer} />}

      {relatedGuides && relatedGuides.length > 0 && (
        <PremiumRelatedGuides
          guides={relatedGuides}
          countLabel={relatedGuidesLabel}
        />
      )}

      {/* FAQ — categorized (home-style) takes priority over flat list */}
      {faqCategories && faqCategories.length > 0 ? (
        <GuidePremiumFaqCategorized
          categories={faqCategories}
          eyebrow={faqMeta?.eyebrow}
          titleStart={faqMeta?.titleStart}
          titleEm={faqMeta?.titleEm}
          titleEnd={faqMeta?.titleEnd}
          subtitle={faqMeta?.subtitle}
          ctaTitle={faqMeta?.ctaTitle}
          ctaDescription={faqMeta?.ctaDescription}
          ctaLabel={faqMeta?.ctaLabel}
          ctaHref={faqMeta?.ctaHref}
        />
      ) : (
        faqItems &&
        faqItems.length > 0 && (
          <GuidePremiumFaq title={faqTitle} items={faqItems} meta={faqMeta} />
        )
      )}

      {/* Mobile sticky CTA — only renders <lg, after the guide-specific threshold. */}
      {sidebarContextCta && (
        <GuidePremiumMobileCta
          ctaHref={sidebarContextCta.ctaHref}
          ctaLabel={mobileCtaLabel ?? sidebarContextCta.ctaLabel}
          phoneHref={
            sidebarContextCta.secondaryHref ??
            (sidebarContextCta.secondaryLabel
              ? `tel:${sidebarContextCta.secondaryLabel.replace(/\s/g, "")}`
              : TEL_CABINET_HREF)
          }
          phoneLabel={sidebarContextCta.secondaryLabel ?? TEL_CABINET_LABEL}
        />
      )}
    </div>
  );
}

/* ──────────────────────────────────────────────
   Section wrapper — § number + label + reading + ancrer + H2
   ────────────────────────────────────────────── */
interface GuidePremiumSectionProps {
  number?: string;
  label?: string;
  readingTime?: string;
  id: string;
  title: ReactNode;
  children: ReactNode;
  hideAnchor?: boolean;
}

/**
 * Réduit un titre de section à son texte.
 *
 * Les 168 sections du corpus passent aujourd'hui une chaîne, mais la prop est
 * typée `ReactNode` : un titre enrichi (emphase, `<br />`) doit rester lisible
 * pour construire le nom accessible de l'ancre.
 */
function sectionTitleText(node: ReactNode): string {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(sectionTitleText).join("");
  if (isValidElement<{ children?: ReactNode }>(node)) {
    return sectionTitleText(node.props.children);
  }
  return "";
}

export function GuidePremiumSection({
  number,
  label,
  readingTime,
  id,
  title,
  children,
  hideAnchor = false,
}: GuidePremiumSectionProps) {
  const headingId = `${id}-titre`;
  const anchorLinkId = `${id}-ancre`;
  const hasReadableTitle = sectionTitleText(title).trim() !== "";

  return (
    <section
      id={id}
      className="scroll-mt-28 mb-14 sm:mb-16 md:mb-20 first:mt-0"
    >
      <div className="flex items-start justify-between gap-4 mb-5 sm:mb-6">
        <div className="flex items-center gap-3 flex-wrap">
          {number && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200/60 text-[11px] font-semibold tracking-wide">
              § {number}
            </span>
          )}
          {(label || readingTime) && (
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500 dark:text-white inline-flex items-center gap-2">
              {label}
              {label && readingTime && <span className="text-zinc-300">·</span>}
              {readingTime}
            </span>
          )}
        </div>
        {!hideAnchor && (
          /* Le nom accessible reprend le texte visible « ancrer » puis le titre
             de la section : sans lui, les 168 ancres du corpus partagent le
             même intitulé et la liste des liens d'un lecteur d'écran ne
             distingue plus une cible d'une autre (WCAG 2.4.4, et 2.5.3 qui
             impose que le nom contienne le libellé visible).

             Le titre est référencé par `aria-labelledby` plutôt que recopié
             dans un `sr-only` : le recopier remettrait le texte du H2 une
             seconde fois dans le DOM, ce que le corpus évite précisément pour
             les extracteurs de texte (guide-premium-layout-single-render).
             Le « # » est décoratif, donc retiré de l'arbre d'accessibilité. */
          <a
            id={anchorLinkId}
            href={`#${id}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-[11px] font-medium text-zinc-500 dark:text-white hover:text-zinc-900 hover:border-zinc-300 transition-colors shrink-0"
            aria-labelledby={
              hasReadableTitle ? `${anchorLinkId} ${headingId}` : undefined
            }
          >
            <span className="text-zinc-400" aria-hidden="true">
              #
            </span>
            ancrer
          </a>
        )}
      </div>

      <h2
        id={headingId}
        className="font-[family-name:var(--font-playfair)] text-[28px] sm:text-[32px] md:text-[38px] leading-tight tracking-[-0.02em] font-bold text-zinc-950 dark:text-white mb-6"
      >
        {title}
      </h2>

      <div className="prose prose-zinc dark:prose-invert max-w-none prose-headings:tracking-tight prose-headings:font-semibold prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3 prose-h3:font-semibold prose-h3:text-zinc-900 dark:prose-h3:text-white prose-p:text-[15px] prose-p:leading-[1.75] prose-p:text-zinc-700 dark:prose-p:text-white prose-p:my-4 prose-li:text-[15px] prose-li:leading-[1.7] prose-li:text-zinc-700 dark:prose-li:text-white prose-li:my-1 prose-strong:text-zinc-900 dark:prose-strong:text-white prose-strong:font-semibold prose-a:text-indigo-700 dark:prose-a:text-indigo-400 prose-a:font-medium prose-a:underline prose-a:underline-offset-2 prose-a:decoration-indigo-300 hover:prose-a:decoration-indigo-600 prose-ol:my-4 prose-ul:my-4">
        {children}
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   Memo Express callout (violet, left border)
   ────────────────────────────────────────────── */
interface GuidePremiumMemoProps {
  eyebrow?: string;
  title: string;
  children: ReactNode;
}

export function GuidePremiumMemo({
  eyebrow = "Mémo express",
  title,
  children,
}: GuidePremiumMemoProps) {
  return (
    <div className="not-prose my-7 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900 p-5 sm:p-6 relative overflow-hidden">
      <div
        className="absolute inset-y-0 left-0 w-1 bg-indigo-500"
        aria-hidden="true"
      />
      <div className="pl-2 sm:pl-3">
        <p className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-300 mb-2">
          <span className="inline-flex items-center justify-center size-4 rounded-full bg-indigo-500/15">
            <span className="size-1.5 rounded-full bg-indigo-500" />
          </span>
          {eyebrow}
        </p>
        <p className="text-base font-semibold text-zinc-900 dark:text-white mb-3">
          {title}
        </p>
        <div className="text-sm text-zinc-700 dark:text-white leading-relaxed space-y-1.5 [&_ul]:space-y-1.5 [&_ul]:list-none [&_ul_li]:relative [&_ul_li]:pl-4 [&_ul_li]:before:content-['•'] [&_ul_li]:before:absolute [&_ul_li]:before:left-0 [&_ul_li]:before:text-indigo-500 [&_ul_li]:before:font-bold">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Case study card (for "Cas pratique — Marc, 42 ans · SASU")
   ────────────────────────────────────────────── */
interface GuidePremiumCaseProps {
  id?: string;
  initial: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}

export function GuidePremiumCase({
  id,
  initial,
  eyebrow,
  title,
  children,
}: GuidePremiumCaseProps) {
  return (
    <div
      id={id}
      className="not-prose my-7 scroll-mt-28 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-5 sm:p-6"
    >
      <div className="flex items-start gap-4">
        <div
          aria-hidden="true"
          className="size-10 shrink-0 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-white flex items-center justify-center font-semibold text-sm"
        >
          {initial}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500 dark:text-white mb-1">
            {eyebrow}
          </p>
          <p className="text-base font-semibold text-zinc-900 dark:text-white mb-2">
            {title}
          </p>
          <div className="max-w-[68ch] text-sm text-zinc-700 dark:text-white leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Strategy CTA (Trustpilot + cream background)
   ────────────────────────────────────────────── */
function PremiumStrategyCta({ data }: { data: GuidePremiumStrategyCtaData }) {
  return (
    <section
      data-guide-strategy-cta="true"
      className="bg-[#fbfaf7] dark:bg-zinc-950 pt-12 sm:pt-14 md:pt-16 pb-2 print:hidden"
    >
      <div className="container mx-auto px-4 max-w-[1180px]">
        <div
          className="relative overflow-hidden rounded-3xl border border-[#E8DFCF] bg-[#F5EFE0] dark:bg-zinc-900 p-6 sm:p-8 md:p-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.025) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 lg:gap-10 items-start">
            <div className="min-w-0">
              {data.trustpilotScore && (
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-3.5 fill-amber-400 text-amber-400"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className="text-[13px] text-zinc-700 dark:text-white tabular-nums">
                    <span className="font-semibold">
                      {data.trustpilotScore}
                    </span>
                    {data.trustpilotMax && (
                      <>
                        <span className="text-zinc-400 mx-1">/</span>
                        <span className="font-semibold">
                          {data.trustpilotMax}
                        </span>
                      </>
                    )}
                  </span>
                  {data.trustpilotLabel && (
                    <span className="text-[13px] text-zinc-500 dark:text-white">
                      {data.trustpilotLabel}
                    </span>
                  )}
                </div>
              )}

              <h2 className="font-[family-name:var(--font-playfair)] text-[26px] leading-[1.12] sm:text-[32px] sm:leading-[1.1] md:text-[36px] md:leading-[1.08] font-bold tracking-[-0.02em] text-zinc-950 dark:text-white mb-4 max-w-2xl">
                {data.titleStart}{" "}
                <em className="italic font-medium text-indigo-600">
                  {data.titleEm}
                </em>
              </h2>

              <p className="text-sm sm:text-[15px] text-zinc-600 dark:text-white leading-relaxed max-w-xl mb-5">
                {data.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {data.badges.map((badge) => {
                  const texte = typeof badge === "string" ? badge : badge.label;
                  return (
                    <span
                      key={texte}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] sm:text-xs font-medium"
                    >
                      <CheckCircle2
                        className="size-3 text-emerald-600"
                        aria-hidden="true"
                      />
                      {texte}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="space-y-2.5 lg:pt-1">
              <TrackedGuideCtaLink
                href={data.ctaHref ?? CTA_HREF_DEFAUT}
                placement="article_end"
                primary
                className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl bg-zinc-950 text-white text-sm font-semibold hover:bg-zinc-800 transition-colors"
              >
                <MessageSquareText className="size-4" aria-hidden="true" />
                {data.ctaLabel ?? CTA_LABEL_DEFAUT}
                <ArrowRight className="size-4" aria-hidden="true" />
              </TrackedGuideCtaLink>
              {data.showPhoneCta !== false && (
                <TrackedGuideCtaLink
                  href={data.phoneHref ?? telHref(data.phoneLabel)}
                  placement="article_end"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-zinc-800 dark:text-white text-sm font-medium hover:bg-zinc-50 transition-colors"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  {data.phoneLabel ?? TEL_CABINET_LABEL}
                </TrackedGuideCtaLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   Legal Sources & References
   ────────────────────────────────────────────── */
function PremiumSources({ sources }: { sources: GuidePremiumLegalSource[] }) {
  return (
    <section className="bg-[#fbfaf7] dark:bg-zinc-950 pt-12 sm:pt-14 pb-4">
      <div className="container mx-auto px-4 max-w-[1180px]">
        <h2 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-950 dark:text-white mb-5">
          Sources et références légales
        </h2>
        <div className="rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950">
          <ul className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {sources.map((entry) => (
              <li
                key={entry.source}
                className="flex flex-col gap-3 py-3.5 px-4 sm:py-3 sm:px-5 md:flex-row md:items-center md:gap-5"
              >
                {entry.href ? (
                  <a
                    href={entry.href}
                    target="_blank"
                    rel={
                      entry.nofollow
                        ? "nofollow noopener noreferrer"
                        : "noopener noreferrer"
                    }
                    className="inline-flex items-center justify-center px-3 py-1 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-700 dark:text-white shrink-0 w-fit underline decoration-zinc-300 underline-offset-2 transition-colors hover:border-indigo-400 hover:text-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {entry.source}
                  </a>
                ) : (
                  <span className="inline-flex items-center justify-center px-3 py-1 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-700 dark:text-white shrink-0 w-fit">
                    {entry.source}
                  </span>
                )}
                <p className="min-w-0 text-[13px] sm:text-sm text-zinc-600 dark:text-white leading-relaxed">
                  {entry.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   Disclaimer (amber callout, left border)
   ────────────────────────────────────────────── */
function PremiumDisclaimer({ data }: { data: GuidePremiumDisclaimerData }) {
  return (
    /* `aria-label` : le titre de ce bloc est un <p> stylé, pas un titre de
       niveau. Sans nom accessible, la <section> n'est pas exposée comme repère
       de navigation — un lecteur d'écran qui parcourt les régions saute
       l'avertissement, qui est précisément le bloc qu'il ne faut pas manquer.
       Le libellé suit l'eyebrow réellement affiché. */
    <section
      aria-label={data.eyebrow ?? "Avertissement"}
      className="bg-[#fbfaf7] dark:bg-zinc-950 py-10 sm:py-12"
    >
      <div className="container mx-auto px-4 max-w-[1180px]">
        <div className="relative rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/60 p-5 sm:p-6 overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 w-1 bg-amber-400/80"
            aria-hidden="true"
          />
          <div className="flex items-start gap-4 pl-2">
            <div className="size-9 shrink-0 rounded-lg bg-amber-100/80 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 flex items-center justify-center mt-0.5">
              <AlertTriangle className="size-4" aria-hidden="true" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-amber-700 dark:text-amber-300 mb-1.5">
                {data.eyebrow ?? "Avertissement"}
              </p>
              <p className="text-base font-semibold text-zinc-900 dark:text-white mb-2">
                {data.title}
              </p>
              <p className="max-w-[68ch] text-sm text-zinc-700 dark:text-white leading-relaxed">
                {data.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   Related Guides (2-column grid)
   ────────────────────────────────────────────── */
function PremiumRelatedGuides({
  guides,
  countLabel,
}: {
  guides: GuidePremiumRelatedGuide[];
  countLabel?: string;
}) {
  return (
    <section className="bg-[#fbfaf7] dark:bg-zinc-950 pb-14 sm:pb-16">
      <div className="container mx-auto px-4 max-w-[1180px]">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center justify-center size-9 rounded-lg bg-zinc-950 text-white">
            <BookOpen className="size-4" aria-hidden="true" />
          </span>
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Guides liés
          </h3>
          {countLabel && (
            <span className="text-[12px] sm:text-[13px] text-zinc-600 dark:text-zinc-300 font-medium">
              {countLabel}
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group flex items-center justify-between gap-4 px-4 sm:px-5 py-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-zinc-300 hover:bg-zinc-50/50 transition-colors"
            >
              <span className="text-sm text-zinc-800 dark:text-white font-medium leading-snug group-hover:text-zinc-950 transition-colors">
                {guide.label}
              </span>
              <ChevronRight
                className="size-4 text-zinc-400 group-hover:text-zinc-700 group-hover:translate-x-0.5 transition-all shrink-0"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
