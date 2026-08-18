import { ChevronDown } from "lucide-react";
import type { GuideFAQItem } from "./guide-layout";

interface GuideFAQSectionProps {
  title: string;
  items: GuideFAQItem[];
  premium?: boolean;
}

/**
 * FAQ en <details>/<summary> natifs (server component, zéro JS).
 *
 * Volontairement PAS d'accordéon Radix ici : Radix démonte le contenu des
 * items fermés → les réponses n'existent pas dans le HTML servi, Google ne
 * les indexe pas et rend les réponses inaccessibles aux lecteurs
 * (violation des guidelines structured data). Avec <details>, tout le texte
 * est dans le DOM, replié visuellement, et le premier item est ouvert.
 */
export function GuideFAQSection({
  title,
  items,
  premium = false,
}: GuideFAQSectionProps) {
  return (
    <section
      className={`border-t border-zinc-200/60 py-8 dark:border-zinc-800/60 sm:py-12 md:py-20 ${
        premium
          ? "bg-[#fbfaf7] dark:bg-zinc-950"
          : "bg-zinc-50 dark:bg-zinc-900"
      }`}
    >
      <div
        className={`container mx-auto px-4 ${
          premium ? "max-w-[1180px]" : "max-w-4xl"
        }`}
      >
        <div
          className={`mb-6 sm:mb-10 md:mb-16 ${
            premium ? "max-w-3xl text-left" : "text-center"
          }`}
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200/50 bg-zinc-200/50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-600 dark:border-zinc-700/50 dark:bg-zinc-800/50 dark:text-zinc-400">
            Questions fréquentes
          </span>
          <h2
            className={`font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 ${
              premium
                ? "font-[family-name:var(--font-playfair)] text-[28px] leading-tight sm:text-[34px] md:text-[40px]"
                : "text-xl sm:text-2xl md:text-3xl"
            }`}
          >
            {title}
          </h2>
        </div>

        <div className={premium ? "max-w-4xl space-y-3" : "space-y-3"}>
          {items.map((item, index) => (
            <details
              key={index}
              open={index === 0}
              className="group rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 sm:px-6"
            >
              <summary className="flex items-center justify-between gap-3 cursor-pointer list-none [&::-webkit-details-marker]:hidden text-zinc-900 dark:text-zinc-100 font-semibold tracking-tight py-3 sm:py-4 text-sm sm:text-base text-left">
                {item.question}
                <ChevronDown
                  className="size-4 shrink-0 text-zinc-400 transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm sm:text-base pb-4 sm:pb-5">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
