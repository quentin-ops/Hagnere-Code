"use client";

import { useEffect, RefObject } from "react";

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

    // Smooth-scroll on click (browser default isn't always smooth on hash links inside SPA)
    const onClick = (e: Event) => {
      const a = e.currentTarget as HTMLAnchorElement;
      const id = a.dataset.section;
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      // update URL hash without jumping
      history.replaceState(null, "", `#${id}`);
    };
    links.forEach((link) => link.addEventListener("click", onClick));

    return () => {
      io.disconnect();
      links.forEach((link) => link.removeEventListener("click", onClick));
    };
  }, [rootRef]);
}
