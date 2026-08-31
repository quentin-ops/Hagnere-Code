"use client";

import { useEffect, type RefObject } from "react";

/**
 * Scroll-spy for the floating TOC on /methode.
 * Highlights the TOC link whose section is currently in view.
 *
 * Strategy: rootMargin shifts the "viewport" so a section is considered
 * "active" when its top crosses the upper third of the screen — feels
 * natural while reading.
 */
export function useMethodeToc(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const links = Array.from(
      root.querySelectorAll<HTMLAnchorElement>(".mtoc-link"),
    );
    if (links.length === 0) return;

    const sections = links
      .map((link) => {
        const id = link.dataset.section;
        if (!id) return null;
        const target = document.getElementById(id);
        return target ? { link, target } : null;
      })
      .filter((x): x is { link: HTMLAnchorElement; target: HTMLElement } => !!x);

    if (sections.length === 0) return;

    function setActive(id: string | null) {
      sections.forEach(({ link }) => {
        if (link.dataset.section === id) {
          link.classList.add("is-active");
        } else {
          link.classList.remove("is-active");
        }
      });
    }

    // Observe each section. The one with the smallest positive bounding-rect.top
    // (i.e. closest section just past the top of the screen) wins.
    let activeId: string | null = sections[0].link.dataset.section || null;

    const io = new IntersectionObserver(
      () => {
        // Recompute on each event: we look at all sections, find the one
        // whose top is closest to (and above) a 30%-from-top line.
        const offset = window.innerHeight * 0.3;
        let best: { id: string; distance: number } | null = null;
        sections.forEach(({ link, target }) => {
          const id = link.dataset.section;
          if (!id) return;
          const rect = target.getBoundingClientRect();
          // section qualifies if its top is above the offset line
          if (rect.top - offset <= 0) {
            const distance = Math.abs(rect.top - offset);
            if (!best || distance < best.distance) {
              best = { id, distance };
            }
          }
        });
        const newId = best ? (best as { id: string }).id : sections[0].link.dataset.section || null;
        if (newId !== activeId) {
          activeId = newId;
          setActive(activeId);
        }
      },
      { threshold: [0, 0.1, 0.3, 0.6, 1], rootMargin: "0px" },
    );

    sections.forEach(({ target }) => io.observe(target));

    // Initial state
    setActive(activeId);

    /*
     * Le défilement au clic est laissé au gestionnaire partagé
     * (`useDesignInteractive`), et ce hook ne garde que la mise en évidence de
     * la section active.
     *
     * Il faisait auparavant son propre `scrollIntoView({behavior:"smooth"})`
     * après un `preventDefault()`. Deux conséquences : le gestionnaire partagé,
     * qui teste `event.defaultPrevented`, ne s'exécutait jamais sur cette page ;
     * et le défilement fluide était calculé sur une mise en page que
     * `content-visibility: auto` n'avait pas encore résolue. Mesuré sur une page
     * froide : l'ancre #stack atterrissait à 1 630 px de sa cible, #claude à
     * 1 807 px. /methode était la seule page du site à avoir son propre
     * gestionnaire, et la seule dont les ancres rataient.
     */
    return () => {
      io.disconnect();
    };
  }, [rootRef]);
}
