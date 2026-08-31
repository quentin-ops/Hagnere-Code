"use client";

import { useEffect, useState } from "react";
import { MessageSquareText, Phone } from "lucide-react";
import { TrackedGuideCtaLink } from "./tracked-guide-cta-link";

/**
 * Hauteur de fenêtre au-dessous de laquelle la barre d'action n'a plus le droit
 * de rester en permanence : à 200 % de zoom (1280x720 physiques, soit 360 px
 * CSS de haut), la barre et la nav mangeaient 138 px sur 360, soit 38 % de la
 * hauteur de lecture, sur des guides de 26 à 41 pages. Le même cas se présente
 * sur un téléphone tenu en paysage.
 */
const SHORT_VIEWPORT_HEIGHT = 480;

/** Marge morte, pour ne pas basculer sur le tremblement d'un défilement. */
const SCROLL_DIRECTION_THRESHOLD = 12;

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
  // Sur une fenêtre courte seulement : la barre cède la place pendant la
  // lecture vers le bas et revient au premier défilement vers le haut. Sur un
  // téléphone tenu debout, rien ne change.
  const [yieldingToReading, setYieldingToReading] = useState(false);

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
    let lastScrollY = window.scrollY;

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

      const shortViewport = window.innerHeight <= SHORT_VIEWPORT_HEIGHT;
      const delta = window.scrollY - lastScrollY;
      if (Math.abs(delta) > SCROLL_DIRECTION_THRESHOLD) {
        lastScrollY = window.scrollY;
      }
      setYieldingToReading((current) => {
        if (!shortViewport) return false;
        if (delta > SCROLL_DIRECTION_THRESHOLD) return true;
        if (delta < -SCROLL_DIRECTION_THRESHOLD) return false;
        return current;
      });
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

  const visible = pastTrigger && !overCompetingCta && !yieldingToReading;

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
