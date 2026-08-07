import Link from "next/link";
import { Send, Phone, ArrowRight, CheckCircle2 } from "lucide-react";

/* ──────────────────────────────────────────────
   Table des matières
   ────────────────────────────────────────────── */
interface TocItem {
  id: string;
  label: string;
}

export function GuideToc({ items }: { items: TocItem[] }) {
  return (
    <nav
      aria-label="Sommaire du guide"
      className="not-prose rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 sm:p-5 my-6 sm:my-8"
    >
      <p className="text-xs font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-300 mb-3">
        Sommaire
      </p>
      <ul className="space-y-1.5 text-xs sm:text-sm">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="flex min-h-7 items-center py-1.5 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ──────────────────────────────────────────────
   Info Boxes (blue, amber, emerald)
   ────────────────────────────────────────────── */
type InfoBoxVariant = "blue" | "amber" | "emerald";

const infoBoxStyles: Record<
  InfoBoxVariant,
  { border: string; bg: string; title: string; text: string }
> = {
  blue: {
    border: "border-blue-200 dark:border-blue-800",
    bg: "bg-blue-50/50 dark:bg-blue-950/30",
    title: "text-blue-800 dark:text-blue-300",
    text: "text-blue-700 dark:text-blue-400",
  },
  amber: {
    border: "border-amber-200 dark:border-amber-800",
    bg: "bg-amber-50/50 dark:bg-amber-950/30",
    title: "text-amber-800 dark:text-amber-300",
    text: "text-amber-700 dark:text-amber-400",
  },
  emerald: {
    border: "border-emerald-200 dark:border-emerald-800",
    bg: "bg-emerald-50/50 dark:bg-emerald-950/30",
    title: "text-emerald-800 dark:text-emerald-300",
    text: "text-emerald-700 dark:text-emerald-400",
  },
};

interface InfoBoxProps {
  variant: InfoBoxVariant;
  title: string;
  children: React.ReactNode;
}

export function InfoBox({ variant, title, children }: InfoBoxProps) {
  const styles = infoBoxStyles[variant];
  return (
    <div
      className={`not-prose rounded-xl border ${styles.border} ${styles.bg} p-4 sm:p-5 my-6`}
    >
      <p className={`text-sm font-semibold ${styles.title} mb-2`}>{title}</p>
      <div className={`text-sm ${styles.text}`}>{children}</div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Comparison Table
   ────────────────────────────────────────────── */
interface GuideTableProps {
  headers: string[];
  rows: (string | { text: string; className?: string; colSpan?: number })[][];
  /** Intitulé accessible explicite. Un intitulé descriptif est sinon dérivé des données. */
  caption?: string;
}

function getCellText(
  cell:
    string | { text: string; className?: string; colSpan?: number } | undefined,
): string {
  return typeof cell === "string" ? cell : cell?.text || "";
}

export function GuideTable({ headers, rows, caption }: GuideTableProps) {
  const isWide = headers.length >= 4;
  const minWidthClass =
    headers.length >= 5
      ? "md:min-w-[680px]"
      : headers.length === 4
        ? "md:min-w-[560px]"
        : "";
  const rowLabels = rows
    .slice(0, 3)
    .map((row) => getCellText(row[0]))
    .filter(Boolean)
    .join(", ");
  const tableCaption =
    caption ||
    `Comparaison ${headers.join(", ")}${rowLabels ? ` — ${rowLabels}` : ""}`;

  /*
    Un seul tableau dans le DOM.

    Ce composant rendait auparavant deux fois le même contenu : des cartes
    `md:hidden` pour le téléphone et un tableau `hidden md:block` pour les
    écrans larges. La feuille de style n'en montrait qu'un, mais les deux
    étaient servis — donc lus deux fois par tout extracteur de texte qui
    n'applique pas le CSS, à commencer par les robots des assistants.

    La présentation en cartes est désormais obtenue par CSS (classe
    `guide-table` dans globals.css) : les libellés de colonne sont réinjectés
    depuis l'attribut `data-label`, qui n'est pas du contenu textuel. Les rôles
    ARIA sont déclarés explicitement car la mise en cartes change le `display`
    des éléments de tableau, ce qui suffirait sinon à leur faire perdre leur
    sémantique auprès des technologies d'assistance.
  */
  return (
    <div
      className="not-prose my-6 md:overflow-x-auto"
      tabIndex={isWide ? 0 : undefined}
      role={isWide ? "region" : undefined}
      aria-label={isWide ? `Tableau défilable : ${tableCaption}` : undefined}
    >
      <table
        role="table"
        className={`guide-table w-full ${minWidthClass} border-collapse text-xs md:text-sm`}
      >
        <caption
          className={`text-left ${
            caption
              ? "mb-3 text-sm font-semibold leading-relaxed text-zinc-900 dark:text-zinc-100"
              : "sr-only"
          } md:sr-only`}
        >
          {caption || tableCaption}
        </caption>
        <thead role="rowgroup">
          <tr role="row" className="bg-zinc-50 dark:bg-zinc-900">
            {headers.map((header, i) => (
              <th
                key={i}
                role="columnheader"
                scope="col"
                className="border border-zinc-200 p-2 text-left font-semibold text-zinc-900 dark:border-zinc-700 dark:text-zinc-100 md:p-3"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody role="rowgroup">
          {rows.map((row, rowIndex) => (
            <tr role="row" key={rowIndex}>
              {row.map((cell, cellIndex) => {
                const isObj = typeof cell === "object";
                const className = `border border-zinc-200 p-2 dark:border-zinc-700 md:p-3 ${
                  isObj && cell.className
                    ? cell.className
                    : cellIndex === 0
                      ? "font-semibold text-zinc-900 dark:text-zinc-100"
                      : "text-zinc-600 dark:text-zinc-400"
                }`;
                const colSpan = isObj ? cell.colSpan : undefined;
                const content = isObj ? cell.text : cell;
                const label = headers[cellIndex] || `Information ${cellIndex + 1}`;

                if (cellIndex === 0) {
                  return (
                    <th
                      key={cellIndex}
                      role="rowheader"
                      scope="row"
                      data-label={label}
                      className={className}
                      colSpan={colSpan}
                    >
                      {content}
                    </th>
                  );
                }

                return (
                  <td
                    key={cellIndex}
                    role="cell"
                    data-label={label}
                    className={className}
                    colSpan={colSpan}
                  >
                    {content}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Formula Box
   ────────────────────────────────────────────── */
export function FormulaBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 sm:p-5 my-6 overflow-x-auto">
      <pre className="whitespace-pre-wrap text-left font-mono text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed">
        {children}
      </pre>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Inline CTA Block (dark card with gradient)
   ────────────────────────────────────────────── */
interface GuideInlineCTAProps {
  title?: string;
  description?: string;
  tags?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  showPhone?: boolean;
}

export function GuideInlineCTA({
  title = "Parlons de ce que votre projet doit vraiment résoudre",
  description = "Décrivez votre activité, le problème rencontré et le résultat attendu. Nous vous répondons avec une première lecture concrète, y compris si une solution plus simple suffit.",
  tags = ["Sans engagement", "Réponse argumentée", "Solution simple possible"],
  ctaLabel = "Décrire mon projet",
  ctaHref = "/demarrer-un-projet",
  showPhone = true,
}: GuideInlineCTAProps) {
  return (
    <div className="not-prose relative my-10 rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800/60">
      {/* Blobs */}
      <div className="absolute -left-10 -top-10 w-56 h-56 rounded-full bg-violet-600/20 blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-40 h-40 rounded-full bg-blue-600/15 blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-6 p-6 sm:p-8">
        {/* Left */}
        <div className="flex-1 min-w-0">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-violet-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Hagnéré Code
          </span>
          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-1.5">
            {title}
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed mb-3">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-xs text-zinc-400"
              >
                <CheckCircle2 className="size-3 text-emerald-400 shrink-0" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right: CTAs */}
        <div className="shrink-0 flex flex-col gap-2.5 w-full sm:w-auto sm:min-w-44">
          <Link
            href={ctaHref}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-zinc-900 text-sm font-semibold hover:bg-zinc-100 transition-colors"
          >
            <Send className="size-4 shrink-0" />
            {ctaLabel}
            <ArrowRight className="size-4 shrink-0" />
          </Link>
          {showPhone ? (
            <a
              href="tel:+33374472018"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-700 text-zinc-400 text-sm hover:bg-zinc-800/60 hover:border-zinc-600 transition-colors"
            >
              <Phone className="size-4 shrink-0" />
              03 74 47 20 18
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Comparison Grid (two side-by-side boxes)
   ────────────────────────────────────────────── */
interface ComparisonItem {
  title: string;
  description: string;
  variant: "blue" | "green";
}

export function ComparisonGrid({ items }: { items: ComparisonItem[] }) {
  const variantStyles = {
    blue: {
      bg: "bg-blue-50 dark:bg-blue-950/30",
      border: "border-blue-100 dark:border-blue-800",
      title: "text-blue-900 dark:text-blue-300",
      text: "text-blue-800 dark:text-blue-400",
    },
    green: {
      bg: "bg-green-50 dark:bg-green-950/30",
      border: "border-green-100 dark:border-green-800",
      title: "text-green-900 dark:text-green-300",
      text: "text-green-800 dark:text-green-400",
    },
  };

  return (
    <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 not-prose mb-6">
      {items.map((item, index) => {
        const styles = variantStyles[item.variant];
        return (
          <div
            key={index}
            className={`p-4 sm:p-5 rounded-2xl ${styles.bg} border ${styles.border}`}
          >
            <h3 className={`mt-0 text-sm font-semibold ${styles.title} mb-2`}>
              {item.title}
            </h3>
            <p className={`text-sm ${styles.text}`}>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}
