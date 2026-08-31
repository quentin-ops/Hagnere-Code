"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, ListOrdered, MessageSquareText } from "lucide-react";

/**
 * Repères de navigation du livre blanc.
 *
 * L'article fait ~10 600 px sur desktop et ~22 800 px sur mobile pour un seul
 * bloc de contenu : le sommaire posé en tête disparaissait après le premier
 * écran et le lecteur n'avait plus aucun point d'ancrage sur les onze écrans
 * suivants. Ce fichier fournit les deux repères manquants :
 *
 *   - `SectionSummaryCard` : le sommaire d'entrée, avec des cibles tactiles
 *     de 44 px (le sommaire partagé descendait à 28 px) ;
 *   - `SectionProgressNav` : une barre collante qui suit le lecteur, annonce
 *     la section courante, montre l'avancement et rouvre le sommaire complet
 *     à n'importe quel moment.
 *
 * Les deux consomment la MÊME liste `WHITE_PAPER_SECTIONS`, pour qu'un ajout
 * de section ne puisse pas désynchroniser les deux repères.
 */

export interface WhitePaperSection {
  /** id de l'ancre, sans le croisillon */
  id: string;
  /** numéro affiché dans la pastille */
  number: number;
  /** libellé complet, sans le numéro */
  label: string;
}

export const WHITE_PAPER_SECTIONS: WhitePaperSection[] = [
  { id: "reponse-rapide", number: 1, label: "La méthode en une minute" },
  { id: "pourquoi-36-mois", number: 2, label: "Pourquoi raisonner sur 36 mois" },
  {
    id: "normaliser",
    number: 3,
    label: "Normaliser les offres avant de calculer",
  },
  { id: "formule", number: 4, label: "La formule du coût total" },
  { id: "grille", number: 5, label: "La grille interactive Excel / Sheets" },
  { id: "exemple", number: 6, label: "Exemple rempli : trois offres fictives" },
  { id: "noter", number: 7, label: "Éliminer d'abord, noter ensuite" },
  { id: "criteres", number: 8, label: "Les 40 critères et leur pondération" },
  {
    id: "couts-oublies",
    number: 9,
    label: "Les coûts presque toujours oubliés",
  },
  {
    id: "questions",
    number: 10,
    label: "Les 15 questions à renvoyer aux candidats",
  },
  { id: "methode-90", number: 11, label: "Comparer trois devis en 90 minutes" },
  { id: "decision", number: 12, label: "Rédiger une décision défendable" },
];

/**
 * Index de la section active : la dernière dont le haut est déjà passé sous la
 * ligne de lecture. `-1` tant qu'aucune section n'a commencé.
 *
 * Fonction pure et exportée pour être testée sans navigateur.
 */
export function activeSectionIndex(
  tops: readonly number[],
  readingLine: number,
): number {
  let active = -1;
  for (let index = 0; index < tops.length; index += 1) {
    if (tops[index] <= readingLine) active = index;
  }
  return active;
}

/**
 * Part de l'article déjà parcourue, entre 0 et 1. Le bas de la fenêtre sert de
 * curseur : la barre atteint 100 % quand la fin de l'article est visible, pas
 * quand elle est dépassée.
 */
export function readingProgress(
  articleTop: number,
  articleHeight: number,
  viewportHeight: number,
): number {
  if (articleHeight <= 0) return 0;
  const read = viewportHeight - articleTop;
  return Math.min(1, Math.max(0, read / articleHeight));
}

const PANEL_ID = "livre-blanc-sommaire-collant";

interface SectionProgressNavProps {
  sections: readonly WhitePaperSection[];
  /** Lien de conversion proposé en bas du sommaire déroulé. */
  ctaHref: string;
  ctaLabel: string;
}

export function SectionProgressNav({
  sections,
  ctaHref,
  ctaLabel,
}: SectionProgressNavProps) {
  const navRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const [progress, setProgress] = useState(0);

  const measure = useCallback(() => {
    const tops = sections.map((section) => {
      const target = document.getElementById(section.id);
      return target
        ? target.getBoundingClientRect().top
        : Number.POSITIVE_INFINITY;
    });
    // La ligne de lecture est posée juste sous la barre collante elle-même,
    // sinon la section annoncée est encore cachée derrière la barre.
    setActive(activeSectionIndex(tops, 160));

    const article = navRef.current?.closest("article");
    if (article) {
      const rect = article.getBoundingClientRect();
      setProgress(readingProgress(rect.top, rect.height, window.innerHeight));
    }
  }, [sections]);

  useEffect(() => {
    let frame = 0;
    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        measure();
      });
    };
    // Première mesure au prochain frame : un setState synchrone dans le corps
    // d'un effet déclenche un rendu en cascade (react-hooks/set-state-in-effect).
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [measure]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const current = active >= 0 ? sections[active] : null;

  return (
    <nav
      ref={navRef}
      aria-label="Progression dans le livre blanc"
      className="not-prose sticky top-[65px] z-30 my-6 print:hidden lg:top-[79px]"
    >
      <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-md dark:border-zinc-800 dark:bg-zinc-950">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={PANEL_ID}
          onClick={() => setOpen((wasOpen) => !wasOpen)}
          className="flex min-h-11 w-full items-center gap-2.5 px-3 py-2 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-inset sm:px-4"
        >
          <ListOrdered
            className="size-4 shrink-0 text-violet-600 dark:text-violet-400"
            aria-hidden="true"
          />
          {current && (
            <span className="shrink-0 text-[11px] font-bold tabular-nums text-zinc-500 dark:text-zinc-400">
              {current.number}/{sections.length}
            </span>
          )}
          <span className="min-w-0 flex-1 truncate text-xs font-semibold text-zinc-900 sm:text-sm dark:text-zinc-100">
            {current ? current.label : `Sommaire · ${sections.length} sections`}
          </span>
          <span className="hidden shrink-0 text-[11px] font-medium text-zinc-500 sm:inline dark:text-zinc-400">
            {open ? "Fermer" : "Ouvrir"}
          </span>
          <ChevronDown
            aria-hidden="true"
            className={`size-4 shrink-0 text-zinc-500 transition-transform motion-reduce:transition-none dark:text-zinc-400 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          aria-hidden="true"
          className="h-0.5 w-full bg-zinc-200 dark:bg-zinc-800"
        >
          <div
            className="h-full bg-violet-600 transition-[width] duration-150 motion-reduce:transition-none dark:bg-violet-400"
            style={{ width: `${Math.round(progress * 100)}%` }}
          />
        </div>

        <div
          id={PANEL_ID}
          hidden={!open}
          className="max-h-[calc(100dvh-9rem)] overflow-y-auto overscroll-contain border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
        >
          <ul className="m-0 list-none p-2">
            {sections.map((section, index) => (
              <li key={section.id} className="m-0 p-0">
                <a
                  href={`#${section.id}`}
                  aria-current={index === active ? "location" : undefined}
                  onClick={() => setOpen(false)}
                  className={`flex min-h-11 items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 sm:text-sm ${
                    index === active
                      ? "bg-violet-50 font-semibold text-violet-900 dark:bg-violet-950/60 dark:text-violet-100"
                      : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
                  }`}
                >
                  <span className="w-5 shrink-0 text-right text-[11px] font-bold tabular-nums text-zinc-400 dark:text-zinc-500">
                    {section.number}
                  </span>
                  <span className="min-w-0">{section.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="border-t border-zinc-200 p-2 dark:border-zinc-800">
            <Link
              href={ctaHref}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center gap-2.5 rounded-lg bg-zinc-950 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 sm:text-sm dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              <MessageSquareText className="size-4 shrink-0" aria-hidden="true" />
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

interface SectionSummaryCardProps {
  sections: readonly WhitePaperSection[];
}

/** Sommaire d'entrée. Cibles tactiles de 44 px, numéros alignés. */
export function SectionSummaryCard({ sections }: SectionSummaryCardProps) {
  return (
    <nav
      aria-label="Sommaire du livre blanc"
      className="not-prose my-6 rounded-xl border border-zinc-200 bg-zinc-50 p-3 sm:my-8 sm:p-4 dark:border-zinc-800 dark:bg-zinc-900"
    >
      <p className="mb-2 px-1.5 text-xs font-bold tracking-widest text-zinc-600 uppercase dark:text-zinc-300">
        Sommaire · {sections.length} sections
      </p>
      <ol className="m-0 grid list-none grid-cols-1 gap-0.5 p-0 sm:grid-cols-2">
        {sections.map((section) => (
          <li key={section.id} className="m-0 p-0">
            <a
              href={`#${section.id}`}
              className="flex min-h-11 items-center gap-2.5 rounded-lg px-1.5 py-2 text-xs text-zinc-600 transition-colors hover:bg-white hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 sm:text-sm dark:text-zinc-300 dark:hover:bg-zinc-950 dark:hover:text-zinc-50"
            >
              <span className="w-5 shrink-0 text-right text-[11px] font-bold tabular-nums text-zinc-400 dark:text-zinc-500">
                {section.number}
              </span>
              <span className="min-w-0">{section.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
