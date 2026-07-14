"use client";

import { useRef, useSyncExternalStore } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { toggleThemeWithReveal } from "@/lib/theme-transition";

const emptySubscribe = () => () => {};
/** false pendant SSR/hydratation, true côté client — sans setState. */
function useMounted(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

/**
 * Bouton clair/sombre (next-themes) avec révélation circulaire : le nouveau
 * thème se dévoile dans un cercle qui s'étend depuis le bouton (View
 * Transitions API, fallback instantané). Les deux icônes sont superposées
 * et se passent le relais par rotation — le morphing est piloté par le CSS
 * global `.hc-theme-toggle` (globals.css).
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const btnRef = useRef<HTMLButtonElement>(null);

  const isDark = mounted && resolvedTheme === "dark";

  const onToggle = () => {
    const next = isDark ? "light" : "dark";
    const rect = btnRef.current?.getBoundingClientRect();
    const origin = rect
      ? { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }
      : { x: window.innerWidth, y: 0 };
    toggleThemeWithReveal(origin, () => {
      // flushSync : la View Transition capture le DOM juste après son
      // callback — le changement de thème doit être appliqué de façon
      // synchrone, pas au prochain commit React.
      flushSync(() => setTheme(next));
    });
  };

  return (
    <button
      ref={btnRef}
      type="button"
      className={`hc-theme-toggle ${className}`}
      aria-label={isDark ? "Passer en thème clair" : "Passer en thème sombre"}
      title={isDark ? "Thème clair" : "Thème sombre"}
      onClick={onToggle}
    >
      <Moon size={15} strokeWidth={2} data-icon-moon aria-hidden="true" />
      <Sun size={15} strokeWidth={2} data-icon-sun aria-hidden="true" />
    </button>
  );
}
