"use client";

import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import Link from "next/link";
import { ArrowRight, Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type {
  GuidePremiumFaqCategory,
  GuidePremiumFaqItem,
} from "./guide-premium-types";

interface GuidePremiumFaqCategorizedProps {
  categories: GuidePremiumFaqCategory[];
  eyebrow?: string;
  titleStart?: string;
  titleEm?: string;
  titleEnd?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaTitle?: string;
  ctaDescription?: string;
}

export function GuidePremiumFaqCategorized({
  categories,
  eyebrow = "Foire aux questions",
  titleStart = "Tout ce que",
  titleEm = "vous",
  titleEnd = "voulez savoir.",
  subtitle = "Les questions qu'on nous pose le plus — avec des réponses sans détour.",
  ctaTitle = "Pas trouvé votre réponse ?",
  ctaDescription = "Un conseiller vous rappelle sous 24 h.",
  ctaLabel = "Poser ma question",
  ctaHref = "/contact",
}: GuidePremiumFaqCategorizedProps) {
  const [activeKey, setActiveKey] = useState<string>(categories[0].key);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const categoryButtons = useRef<Array<HTMLButtonElement | null>>([]);

  const active = categories.find((c) => c.key === activeKey) ?? categories[0];

  const onSelectCategory = (key: string) => {
    setActiveKey(key);
    setOpenIndex(0);
  };

  const onCategoryKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let nextIndex: number | null = null;

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      nextIndex = (index + 1) % categories.length;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      nextIndex = (index - 1 + categories.length) % categories.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = categories.length - 1;
    }

    if (nextIndex === null) return;
    event.preventDefault();
    onSelectCategory(categories[nextIndex].key);
    categoryButtons.current[nextIndex]?.focus();
  };

  return (
    <section
      id="faq"
      className={cn(
        "relative isolate overflow-hidden border-y",
        "bg-[#fbfaf7] dark:bg-zinc-950",
        "border-zinc-200/70 dark:border-zinc-800",
        "py-20 lg:py-28",
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(0 0 0 / 0.045) 1px, transparent 1px), linear-gradient(to bottom, rgb(0 0 0 / 0.045) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 text-zinc-500 dark:text-white">
            <span aria-hidden className="h-px w-8 bg-current" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em]">
              {eyebrow}
            </span>
          </div>

          <h2
            className={cn(
              "mt-6 font-[family-name:var(--font-playfair)]",
              "text-[34px] font-bold leading-[1.05] tracking-[-0.02em] text-zinc-950 dark:text-white",
              "sm:text-[56px] lg:text-[68px]",
            )}
          >
            {titleStart}{" "}
            <em className="italic text-indigo-600 dark:text-indigo-400">
              {titleEm}
            </em>{" "}
            {titleEnd}
          </h2>

          {subtitle && (
            <p className="mt-6 max-w-xl text-[14.5px] leading-relaxed text-zinc-600 dark:text-white">
              {subtitle}
            </p>
          )}
        </div>

        {/* Layout 2 colonnes */}
        <div className="mt-14 grid gap-10 lg:mt-16 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16">
          {/* Sidebar gauche — catégories */}
          <div className="print:hidden lg:sticky lg:top-24 lg:self-start">
            <div
              className={cn(
                "rounded-2xl border bg-white p-5 dark:bg-zinc-900",
                "border-zinc-200/80 dark:border-zinc-800",
                "shadow-[0_1px_2px_rgba(0,0,0,0.03),0_4px_14px_rgba(0,0,0,0.03)]",
              )}
            >
              <p className="mb-3 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-white">
                Catégories
              </p>
              <ul
                className="flex flex-col"
                role="tablist"
                aria-label="Catégories de questions"
                aria-orientation="vertical"
              >
                {categories.map((cat, idx) => {
                  const isActive = cat.key === activeKey;
                  const isLast = idx === categories.length - 1;
                  return (
                    <li
                      key={cat.key}
                      role="presentation"
                      className={cn(
                        !isLast &&
                          "border-b border-zinc-100 dark:border-zinc-800",
                      )}
                    >
                      <button
                        ref={(element) => {
                          categoryButtons.current[idx] = element;
                        }}
                        id={`faq-category-${cat.key}-button`}
                        type="button"
                        onClick={() => onSelectCategory(cat.key)}
                        onKeyDown={(event) => onCategoryKeyDown(event, idx)}
                        className={cn(
                          "group flex w-full items-center gap-3 py-3 text-left transition-colors",
                          isActive
                            ? "text-zinc-950 dark:text-white"
                            : "text-zinc-500 hover:text-zinc-800 dark:text-white dark:hover:text-zinc-200",
                        )}
                        role="tab"
                        aria-selected={isActive}
                        aria-controls={`faq-category-${cat.key}-panel`}
                        tabIndex={isActive ? 0 : -1}
                      >
                        <span
                          className={cn(
                            "shrink-0 font-[family-name:var(--font-playfair)] text-[13px] italic tabular-nums",
                            isActive
                              ? "text-zinc-950 dark:text-white"
                              : "text-zinc-600 dark:text-white",
                          )}
                        >
                          {cat.num}
                        </span>
                        <span
                          className={cn(
                            "flex-1 text-[13.5px] tracking-tight",
                            isActive ? "font-semibold" : "font-medium",
                          )}
                        >
                          {cat.label}
                        </span>
                        <span className="flex shrink-0 items-center gap-2">
                          <span
                            className={cn(
                              "text-[11px] tabular-nums",
                              isActive
                                ? "text-zinc-500 dark:text-white"
                                : "text-zinc-600 dark:text-white",
                            )}
                          >
                            {cat.items.length}
                          </span>
                          {isActive && (
                            <span
                              aria-hidden
                              className="size-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400"
                            />
                          )}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* CTA "Pas trouvé votre réponse ?" */}
            <div
              className={cn(
                "mt-4 rounded-2xl border bg-white p-5 dark:bg-zinc-900",
                "border-zinc-200/80 dark:border-zinc-800",
                "shadow-[0_1px_2px_rgba(0,0,0,0.03),0_4px_14px_rgba(0,0,0,0.03)]",
              )}
            >
              <p className="text-[13.5px] font-semibold tracking-tight text-zinc-950 dark:text-white">
                {ctaTitle}
              </p>
              <p className="mt-1 text-[12px] text-zinc-500 dark:text-white">
                {ctaDescription}
              </p>
              <Link
                href={ctaHref}
                className={cn(
                  "group mt-4 inline-flex h-11 w-full items-center justify-between gap-2 rounded-lg pl-3.5 pr-1.5 text-[12.5px] font-semibold",
                  "bg-zinc-950 text-white hover:bg-zinc-800",
                  "dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200",
                )}
              >
                <span>{ctaLabel}</span>
                <span
                  aria-hidden
                  className="grid size-7 place-items-center rounded-md bg-white/15 transition-transform group-hover:translate-x-0.5 dark:bg-zinc-950/15"
                >
                  <ArrowRight className="size-3" strokeWidth={2.4} />
                </span>
              </Link>
            </div>
          </div>

          {/* Accordéon droite */}
          <div
            className={cn(
              "self-start rounded-2xl border bg-white px-2 dark:bg-zinc-900 lg:px-4",
              "border-zinc-200/80 dark:border-zinc-800",
              "shadow-[0_1px_2px_rgba(0,0,0,0.03),0_4px_14px_rgba(0,0,0,0.03)]",
            )}
          >
            {categories.map((category, categoryIndex) => {
              const isActive = category.key === active.key;
              return (
                <div
                  key={category.key}
                  id={`faq-category-${category.key}-panel`}
                  role="tabpanel"
                  aria-labelledby={`faq-category-${category.key}-button`}
                  aria-hidden={!isActive}
                  tabIndex={isActive ? 0 : -1}
                  className={cn(
                    isActive ? "block" : "hidden",
                    "print:block",
                    categoryIndex > 0 && "print:mt-8",
                  )}
                >
                  <h3 className="hidden border-b border-zinc-200 px-3 pb-3 pt-4 text-lg font-bold text-zinc-950 print:block dark:border-zinc-700 dark:text-white">
                    {category.num} · {category.label}
                  </h3>
                  <ul>
                    {category.items.map((item, i) => (
                      <FaqAccordionItem
                        key={`${category.key}-${i}`}
                        categoryKey={category.key}
                        index={i}
                        item={item}
                        isOpen={isActive && openIndex === i}
                        onToggle={() =>
                          setOpenIndex((prev) => (prev === i ? null : i))
                        }
                        isFirst={i === 0}
                        isLast={i === category.items.length - 1}
                      />
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqAccordionItem({
  categoryKey,
  index,
  item,
  isOpen,
  onToggle,
  isFirst,
  isLast,
}: {
  categoryKey: string;
  index: number;
  item: GuidePremiumFaqItem;
  isOpen: boolean;
  onToggle: () => void;
  isFirst?: boolean;
  isLast?: boolean;
}) {
  const num = String(index + 1).padStart(2, "0");
  const buttonId = `faq-${categoryKey}-question-${index + 1}`;
  const panelId = `faq-${categoryKey}-answer-${index + 1}`;

  return (
    <li
      className={cn(!isLast && "border-b border-zinc-100 dark:border-zinc-800")}
    >
      <button
        id={buttonId}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className={cn(
          "group flex w-full items-start gap-5 px-3 py-5 text-left lg:gap-7 lg:px-4 lg:py-6",
          isFirst && "rounded-t-2xl",
          isLast && !isOpen && "rounded-b-2xl",
        )}
      >
        <span
          className={cn(
            "mt-1 shrink-0 font-[family-name:var(--font-playfair)] italic tabular-nums",
            "text-[14px] text-zinc-400 dark:text-white",
            "lg:text-[15px]",
          )}
        >
          {num}
        </span>
        <span className="flex-1 text-[15px] font-semibold leading-snug tracking-tight text-zinc-950 dark:text-white lg:text-[16.5px]">
          {item.question}
        </span>
        <span
          aria-hidden
          className={cn(
            "grid size-9 shrink-0 place-items-center rounded-full border transition-colors print:hidden",
            isOpen
              ? "border-indigo-300 bg-indigo-50 text-indigo-700 dark:border-indigo-700/50 dark:bg-indigo-950/40 dark:text-indigo-300"
              : "border-zinc-200 bg-white text-zinc-500 group-hover:border-indigo-200 group-hover:bg-indigo-50/50 group-hover:text-indigo-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:group-hover:border-indigo-700/50 dark:group-hover:text-indigo-400",
          )}
        >
          {isOpen ? (
            <X className="size-4" strokeWidth={2.2} />
          ) : (
            <Plus className="size-4" strokeWidth={2.2} />
          )}
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!isOpen}
        className={cn(
          "px-3 pb-6 pl-12 pr-12 text-[14px] leading-relaxed text-zinc-600 dark:text-white lg:pb-7 lg:pl-16 lg:pr-16",
          !isOpen && "hidden print:block",
        )}
      >
        {item.answer}
      </div>
    </li>
  );
}
