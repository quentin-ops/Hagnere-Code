"use client";

import { useRef, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import {
  applyTheme,
  applySystemTheme,
  THEME_CHANGE_EVENT,
  toggleThemeWithReveal,
} from "@/lib/theme-transition";

function subscribeTheme(onStoreChange: () => void): () => void {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const onSystemChange = () => {
    let storedTheme: string | null = null;
    try {
      storedTheme = window.localStorage.getItem("theme");
    } catch {
      /* stockage indisponible : le thème système reste la source */
    }
    if (storedTheme === "dark" || storedTheme === "light") return;
    applySystemTheme(media.matches);
  };

  window.addEventListener(THEME_CHANGE_EVENT, onStoreChange);
  media.addEventListener("change", onSystemChange);
  return () => {
    window.removeEventListener(THEME_CHANGE_EVENT, onStoreChange);
    media.removeEventListener("change", onSystemChange);
  };
}

const getThemeSnapshot = () =>
  document.documentElement.classList.contains("dark");
const getServerThemeSnapshot = () => false;

/**
 * Bouton clair/sombre avec révélation circulaire : le nouveau
 * thème se dévoile dans un cercle qui s'étend depuis le bouton (View
 * Transitions API, fallback instantané). Les deux icônes sont superposées
 * et se passent le relais par rotation — le morphing est piloté par le CSS
 * global `.hc-theme-toggle` (globals.css).
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const isDark = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  const onToggle = () => {
    const next = isDark ? "light" : "dark";
    const rect = btnRef.current?.getBoundingClientRect();
    const origin = rect
      ? { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }
      : { x: window.innerWidth, y: 0 };
    toggleThemeWithReveal(origin, () => {
      applyTheme(next === "dark");
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
