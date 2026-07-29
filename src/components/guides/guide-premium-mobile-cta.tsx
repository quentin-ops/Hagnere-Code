"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, Phone } from "lucide-react";

interface GuidePremiumMobileCtaProps {
  ctaHref: string;
  ctaLabel: string;
  phoneHref: string;
  phoneLabel: string;
  showAfter?: number;
}

export function GuidePremiumMobileCta({
  ctaHref,
  ctaLabel,
  phoneHref,
  phoneLabel,
  showAfter = 400,
}: GuidePremiumMobileCtaProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > showAfter);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfter]);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 lg:hidden print:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-white/95 backdrop-blur border-t border-zinc-200 dark:border-zinc-800 shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.12)] px-3 pt-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)]">
        <div className="flex gap-2 max-w-md mx-auto">
          <Link
            href={ctaHref}
            tabIndex={visible ? undefined : -1}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-950 text-white text-sm font-semibold hover:bg-zinc-800 transition-colors"
          >
            <Calendar className="size-4" aria-hidden="true" />
            <span className="truncate">{ctaLabel}</span>
          </Link>
          <a
            href={phoneHref}
            tabIndex={visible ? undefined : -1}
            aria-label={`Appeler ${phoneLabel}`}
            className="flex items-center justify-center size-12 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-indigo-300 hover:text-indigo-700 transition-colors shrink-0"
          >
            <Phone className="size-5 text-zinc-700 dark:text-white" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
