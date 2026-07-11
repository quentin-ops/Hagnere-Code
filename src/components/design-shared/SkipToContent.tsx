"use client";

/**
 * Lien d'évitement global (WCAG 2.4.1).
 *
 * La cible idéale est #main-content, mais la majorité des pages rendent
 * leur contenu via des chaînes HTML (body.ts) sans cette ancre. Plutôt
 * que de patcher chaque gabarit, on résout la cible au clic : ancre
 * dédiée → premier <main> → premier <h1>. Le href reste #main-content
 * pour la navigation sans JavaScript sur les pages qui ont l'ancre.
 */
export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="skip-to-content"
      onClick={(event) => {
        const target =
          document.getElementById("main-content") ??
          document.querySelector("main") ??
          document.querySelector("h1");
        if (!target) return;
        event.preventDefault();
        if (!target.hasAttribute("tabindex")) {
          target.setAttribute("tabindex", "-1");
        }
        (target as HTMLElement).focus({ preventScroll: true });
        target.scrollIntoView();
      }}
    >
      Aller au contenu principal
    </a>
  );
}
