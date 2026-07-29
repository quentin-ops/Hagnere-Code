"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export interface GuidePremiumTocPillsItem {
  id: string;
  number?: string;
  label: string;
  shortLabel?: string;
}

interface GuidePremiumTocPillsProps {
  toc: GuidePremiumTocPillsItem[];
  label?: string;
}

export function GuidePremiumTocPills({
  toc,
  label = "Sommaire",
}: GuidePremiumTocPillsProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const updateFades = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const overflow = el.scrollWidth - el.clientWidth;
    setShowLeft(el.scrollLeft > 8);
    setShowRight(overflow > 8 && el.scrollLeft < overflow - 8);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateFades();
    el.addEventListener("scroll", updateFades, { passive: true });
    window.addEventListener("resize", updateFades);
    return () => {
      el.removeEventListener("scroll", updateFades);
      window.removeEventListener("resize", updateFades);
    };
  }, [updateFades]);

  return (
    <nav
      aria-label={label}
      className="relative bg-[#fbfaf7] dark:bg-zinc-950 py-3 sm:py-4 print:hidden"
    >
      <div className="container mx-auto px-4 max-w-[1180px]">
        <div className="relative rounded-2xl border border-zinc-200/80 bg-white dark:bg-zinc-950 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_4px_14px_rgba(0,0,0,0.04)]">
          {/* Left fade — fades white card edge into the scrolled content */}
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white via-white/80 to-transparent rounded-l-2xl z-10 transition-opacity duration-200 ${
              showLeft ? "opacity-100" : "opacity-0"
            }`}
          />
          {/* Right fade */}
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white via-white/80 to-transparent rounded-r-2xl z-10 transition-opacity duration-200 ${
              showRight ? "opacity-100" : "opacity-0"
            }`}
          />

          <div
            ref={scrollerRef}
            className="flex items-center gap-3 sm:gap-5 px-4 sm:px-5 py-3 overflow-x-auto scrollbar-thin scroll-px-4 snap-x"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500 dark:text-white shrink-0">
              {label}
            </span>
            <div className="flex items-center gap-2 flex-1">
              {toc.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`shrink-0 snap-start inline-flex items-center px-3.5 min-h-11 sm:min-h-9 rounded-full border text-xs font-medium transition-colors ${
                    index === 0
                      ? "bg-zinc-950 text-white border-zinc-950"
                      : "bg-white dark:bg-zinc-950 text-zinc-700 dark:text-white border-zinc-200 dark:border-zinc-800 hover:border-indigo-300 hover:text-indigo-700"
                  }`}
                >
                  {item.number ? `${item.number}. ` : ""}
                  {item.shortLabel ?? item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
