"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

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
 * Bouton clair/sombre (next-themes). Rendu neutre avant hydratation pour
 * éviter tout mismatch SSR (le thème n'est connu que côté client).
 *
 * Style par défaut : pastille ronde discrète qui hérite des tokens du
 * contexte (fonctionne dans la nav vitrine, le funnel et les guides).
 * Surchargez via className si besoin.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      className={`hc-theme-toggle ${className}`}
      aria-label={isDark ? "Passer en thème clair" : "Passer en thème sombre"}
      title={isDark ? "Thème clair" : "Thème sombre"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {mounted ? (
        isDark ? (
          <Sun size={15} strokeWidth={2} />
        ) : (
          <Moon size={15} strokeWidth={2} />
        )
      ) : (
        <Moon size={15} strokeWidth={2} style={{ opacity: 0 }} />
      )}
    </button>
  );
}
