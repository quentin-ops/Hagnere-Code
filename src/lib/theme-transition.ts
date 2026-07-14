/**
 * Bascule de thème avec révélation circulaire (View Transitions API).
 *
 * Le nouveau thème est dévoilé par un cercle qui s'étend depuis le bouton
 * cliqué jusqu'à couvrir tout l'écran — l'ancien thème reste figé dessous
 * pendant l'animation. Fallback : bascule instantanée si l'API n'est pas
 * disponible (Firefox) ou si l'utilisateur préfère réduire les animations.
 *
 * Écrit la même clé localStorage que next-themes ("theme") pour que les
 * deux systèmes restent synchronisés.
 */

type DocumentWithViewTransition = Document & {
  startViewTransition?: (callback: () => void | Promise<void>) => {
    ready: Promise<void>;
  };
};

export function applyTheme(dark: boolean): void {
  document.documentElement.classList.toggle("dark", dark);
  document.documentElement.style.colorScheme = dark ? "dark" : "light";
  try {
    window.localStorage.setItem("theme", dark ? "dark" : "light");
  } catch {
    /* private mode */
  }
}

/**
 * @param origin centre du cercle (coordonnées viewport), typiquement le
 *               centre du bouton cliqué.
 * @param applyChange applique le changement de thème de façon SYNCHRONE
 *                    (manipulation DOM directe, ou flushSync côté React).
 */
export function toggleThemeWithReveal(
  origin: { x: number; y: number },
  applyChange: () => void,
): void {
  const doc = document as DocumentWithViewTransition;
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (!doc.startViewTransition || reduceMotion) {
    applyChange();
    return;
  }

  const { x, y } = origin;
  // Rayon = distance du bouton au coin le plus éloigné de l'écran.
  const radius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y),
  );

  const transition = doc.startViewTransition(() => {
    applyChange();
  });

  transition.ready
    .then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${Math.ceil(radius)}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 650,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    })
    .catch(() => {
      /* transition interrompue (navigation…) — le thème est déjà appliqué */
    });
}
