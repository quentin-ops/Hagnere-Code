"use client";

import type { ReactNode } from "react";
import { Plus, Minus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface GuidePremiumFaqMetaProps {
  eyebrow?: string;
  titleStart?: string;
  titleEm?: string;
  titleEnd?: string;
  subtitle?: string;
}

interface GuidePremiumFaqProps {
  title: string;
  items: { question: string; answer: ReactNode }[];
  meta?: GuidePremiumFaqMetaProps;
}

export function GuidePremiumFaq({ title, items, meta }: GuidePremiumFaqProps) {
  const eyebrow = meta?.eyebrow ?? "QUESTIONS FRÉQUENTES";
  const titleStart = meta?.titleStart;
  const titleEm = meta?.titleEm;
  const titleEnd = meta?.titleEnd;
  const subtitle = meta?.subtitle;

  return (
    <section
      id="faq"
      className="py-16 sm:py-20 md:py-24 bg-[#fbfaf7] dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800"
    >
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Eyebrow pill */}
        <div className="flex justify-center mb-5">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-700 dark:text-white">
            {eyebrow}
          </span>
        </div>

        {/* Title — serif Playfair with em italic violet */}
        <h2
          className="text-center font-[family-name:var(--font-playfair)] text-[28px] leading-[1.15] sm:text-[36px] sm:leading-[1.1] md:text-[42px] md:leading-[1.08] font-bold tracking-tight text-zinc-950 dark:text-white mb-4"
        >
          {titleStart && titleEm ? (
            <>
              {titleStart}{" "}
              <em className="italic font-medium text-indigo-600">{titleEm}</em>
              {titleEnd && <> {titleEnd}</>}
            </>
          ) : (
            title
          )}
        </h2>

        {subtitle && (
          <p className="text-center text-sm sm:text-base text-zinc-500 dark:text-white max-w-xl mx-auto mb-10 sm:mb-12">
            {subtitle}
          </p>
        )}

        <Accordion
          type="single"
          collapsible
          className="space-y-3 mt-8 sm:mt-10"
        >
          {items.map((item, index) => {
            const number = String(index + 1).padStart(2, "0");
            return (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-5 sm:px-6 data-[state=open]:border-indigo-300 data-[state=open]:shadow-[0_2px_24px_-12px_rgba(99,102,241,0.22)] transition-colors"
              >
                <AccordionTrigger
                  className="hover:no-underline py-5 text-left gap-4 [&>svg]:hidden [&[data-state=open]_.faq-plus]:hidden [&[data-state=closed]_.faq-minus]:hidden"
                >
                  <div className="flex items-center gap-4 min-w-0 flex-1">
                    <span className="text-[11px] font-mono font-medium text-zinc-400 tabular-nums tracking-wider shrink-0">
                      {number}
                    </span>
                    <span className="text-sm sm:text-[15px] font-semibold text-zinc-900 dark:text-white tracking-tight">
                      {item.question}
                    </span>
                  </div>
                  <span
                    aria-hidden="true"
                    className="faq-plus inline-flex items-center justify-center size-7 rounded-full text-zinc-400 shrink-0 group-hover:text-zinc-700 transition-colors"
                  >
                    <Plus className="size-4" />
                  </span>
                  <span
                    aria-hidden="true"
                    className="faq-minus inline-flex items-center justify-center size-7 rounded-full bg-zinc-950 text-white shrink-0"
                  >
                    <Minus className="size-3.5" />
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-zinc-600 dark:text-white text-sm leading-[1.7] pb-5 pl-[44px] pr-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
