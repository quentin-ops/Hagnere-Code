"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { GuideFAQItem } from "./guide-layout";

interface GuideFAQSectionProps {
  title: string;
  items: GuideFAQItem[];
}

export function GuideFAQSection({ title, items }: GuideFAQSectionProps) {
  return (
    <section className="py-8 sm:py-12 md:py-20 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200/60 dark:border-zinc-800/60">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-6 sm:mb-10 md:mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200/50 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 text-[10px] font-bold uppercase tracking-wider mb-4 border border-zinc-200/50 dark:border-zinc-700/50">
            Questions fréquentes
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            {title}
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 sm:px-6"
            >
              <AccordionTrigger className="text-zinc-900 dark:text-zinc-100 font-semibold tracking-tight py-3 sm:py-4 text-sm sm:text-base hover:no-underline text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm sm:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
