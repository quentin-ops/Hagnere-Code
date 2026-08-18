"use client";

import { useEffect, useState } from "react";
import { MessageSquareText, Phone } from "lucide-react";
import { TrackedGuideCtaLink } from "./tracked-guide-cta-link";

interface GuidePremiumMobileCtaProps {
  ctaHref: string;
  ctaLabel: string;
  phoneHref: string;
  phoneLabel: string;
  showAfter?: number;
  triggerId?: string;
}

export function GuidePremiumMobileCta({
  ctaHref,
  ctaLabel,
  phoneHref,
  phoneLabel,
  showAfter = 400,
  triggerId = "guide-premium-hero",
}: GuidePremiumMobileCtaProps) {
  const [pastTrigger, setPastTrigger] = useState(false);
  const [overCompetingCta, setOverCompetingCta] = useState(false);

  useEffect(() => {
    const trigger = document.getElementById(triggerId);
    const competingSections = Array.from(
      new Set([
        ...["faq", "contact"]
          .map((id) => document.getElementById(id))
          .filter((element): element is HTMLElement => element !== null),
        ...Array.from(document.querySelectorAll<HTMLElement>("footer")),
      ]),
    );
    let animationFrame = 0;

    const updateVisibility = () => {
      setPastTrigger(
        trigger
          ? trigger.getBoundingClientRect().bottom <= 0
          : window.scrollY > showAfter,
      );
      setOverCompetingCta(
        competingSections.some((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top < window.innerHeight && rect.bottom > 0;
        }),
      );
    };
    const scheduleUpdate = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = 0;
        updateVisibility();
      });
    };

    updateVisibility();
    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, [showAfter, triggerId]);

  const visible = pastTrigger && !overCompetingCta;

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 lg:hidden print:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
    >
      <div className="bg-white/95 dark:bg-zinc-950/95 backdrop-blur border-t border-zinc-200 dark:border-zinc-800 shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.12)] px-3 pt-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)]">
        <div className="flex gap-2 max-w-md mx-auto">
          <TrackedGuideCtaLink
            href={ctaHref}
            placement="mobile"
            primary
            tabIndex={visible ? undefined : -1}
            className="min-w-0 flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-950 text-white text-sm font-semibold hover:bg-zinc-800 transition-colors"
          >
            <MessageSquareText className="size-4" aria-hidden="true" />
            <span className="truncate">{ctaLabel}</span>
          </TrackedGuideCtaLink>
          <TrackedGuideCtaLink
            href={phoneHref}
            placement="mobile"
            tabIndex={visible ? undefined : -1}
            ariaLabel={`Appeler ${phoneLabel}`}
            className="flex items-center justify-center size-12 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-indigo-300 hover:text-indigo-700 transition-colors shrink-0"
          >
            <Phone
              className="size-5 text-zinc-700 dark:text-white"
              aria-hidden="true"
            />
          </TrackedGuideCtaLink>
        </div>
      </div>
    </div>
  );
}
