/** @vitest-environment happy-dom */

import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { renderToStaticMarkup } from "react-dom/server";
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import { GuidePremiumMobileCta } from "./guide-premium-mobile-cta";

beforeAll(() => {
  (
    globalThis as typeof globalThis & { IS_REACT_ACT_ENVIRONMENT: boolean }
  ).IS_REACT_ACT_ENVIRONMENT = true;
});

let currentRoot: Root | null = null;

afterEach(() => {
  if (currentRoot) {
    act(() => currentRoot?.unmount());
    currentRoot = null;
  }
  document.body.replaceChildren();
  vi.restoreAllMocks();
});

function rect(top: number, bottom: number): DOMRect {
  return {
    top,
    bottom,
    left: 0,
    right: 320,
    width: 320,
    height: bottom - top,
    x: 0,
    y: top,
    toJSON: () => ({}),
  };
}

describe("GuidePremiumMobileCta", () => {
  it("keeps the primary action shrinkable when text is enlarged", () => {
    const html = renderToStaticMarkup(
      <GuidePremiumMobileCta
        ctaHref="/services/outils-internes-sur-mesure"
        ctaLabel="Voir le service outils internes"
        phoneHref="tel:+33660088351"
        phoneLabel="06 60 08 83 51"
      />,
    );

    expect(html).toContain(
      'class="min-w-0 flex-1 flex items-center justify-center',
    );
    expect(html).toContain('href="/services/outils-internes-sur-mesure"');
  });

  it("keeps the secondary action as an explicitly named phone link", () => {
    const html = renderToStaticMarkup(
      <GuidePremiumMobileCta
        ctaHref="/services/outils-internes-sur-mesure"
        ctaLabel="Voir le service outils internes"
        phoneHref="tel:+33660088351"
        phoneLabel="06 60 08 83 51"
      />,
    );

    expect(html).toContain('href="tel:+33660088351"');
    expect(html).toContain('aria-label="Appeler 06 60 08 83 51"');
  });

  it("removes the fixed actions from focus and view when the footer enters the viewport", () => {
    Object.defineProperty(window, "innerHeight", {
      configurable: true,
      value: 800,
    });
    const queuedFrames: FrameRequestCallback[] = [];
    vi.spyOn(window, "requestAnimationFrame").mockImplementation((callback) => {
      queuedFrames.push(callback);
      return queuedFrames.length;
    });
    vi.spyOn(window, "cancelAnimationFrame").mockImplementation(
      () => undefined,
    );

    const hero = document.createElement("section");
    hero.id = "guide-premium-hero";
    hero.getBoundingClientRect = () => rect(-500, -10);
    document.body.append(hero);

    let footerRect = rect(900, 1200);
    const footer = document.createElement("footer");
    footer.getBoundingClientRect = () => footerRect;
    document.body.append(footer);

    const container = document.createElement("div");
    document.body.append(container);
    currentRoot = createRoot(container);
    act(() => {
      currentRoot?.render(
        <GuidePremiumMobileCta
          ctaHref="/demarrer-un-projet"
          ctaLabel="Cadrer mon cas"
          phoneHref="tel:+33660088351"
          phoneLabel="06 60 08 83 51"
        />,
      );
    });
    act(() => queuedFrames.shift()?.(0));

    const bar = container.firstElementChild as HTMLElement;
    const links = [...bar.querySelectorAll("a")];
    expect(bar.getAttribute("aria-hidden")).toBe("false");
    expect(links.map((link) => link.tabIndex)).toEqual([0, 0]);

    footerRect = rect(500, 1000);
    act(() => {
      window.dispatchEvent(new Event("scroll"));
      queuedFrames.shift()?.(16);
    });

    expect(bar.getAttribute("aria-hidden")).toBe("true");
    expect(bar.className).toContain("pointer-events-none");
    expect(links.map((link) => link.tabIndex)).toEqual([-1, -1]);
  });

  /**
   * Monte la barre puis rend la main sur le défilement, en pilotant les frames.
   * `viewportHeight` décide du cas : fenêtre courte (lecteur à 200 % de zoom,
   * téléphone en paysage) ou fenêtre normale.
   */
  function mountBar(viewportHeight: number) {
    Object.defineProperty(window, "innerHeight", {
      configurable: true,
      value: viewportHeight,
    });
    Object.defineProperty(window, "scrollY", { configurable: true, value: 0 });

    const queuedFrames: FrameRequestCallback[] = [];
    vi.spyOn(window, "requestAnimationFrame").mockImplementation((callback) => {
      queuedFrames.push(callback);
      return queuedFrames.length;
    });
    vi.spyOn(window, "cancelAnimationFrame").mockImplementation(
      () => undefined,
    );

    const hero = document.createElement("section");
    hero.id = "guide-premium-hero";
    hero.getBoundingClientRect = () => rect(-500, -10);
    document.body.append(hero);

    const container = document.createElement("div");
    document.body.append(container);
    currentRoot = createRoot(container);
    act(() => {
      currentRoot?.render(
        <GuidePremiumMobileCta
          ctaHref="/demarrer-un-projet"
          ctaLabel="Cadrer mon cas"
          phoneHref="tel:+33660088351"
          phoneLabel="06 60 08 83 51"
        />,
      );
    });
    act(() => queuedFrames.shift()?.(0));

    const scrollTo = (y: number) => {
      Object.defineProperty(window, "scrollY", {
        configurable: true,
        value: y,
      });
      act(() => {
        window.dispatchEvent(new Event("scroll"));
        queuedFrames.shift()?.(16);
      });
    };

    return { bar: container.firstElementChild as HTMLElement, scrollTo };
  }

  // La propriété protégée : sur une fenêtre courte, la barre ne peut pas
  // occuper la hauteur de lecture en permanence. Mesuré à 640x360 px CSS
  // (1280x720 à 200 % de zoom) : la nav et la barre prenaient ensemble 138 px
  // sur 360, soit 38,3 % de la hauteur, sur toute la longueur de guides de 26
  // à 41 pages. Le test ne vise ni une classe ni une durée d'animation, mais
  // l'état annoncé de la barre pendant et après la lecture.
  it("yields the reading height while scrolling down a short viewport", () => {
    const { bar, scrollTo } = mountBar(360);
    expect(bar.getAttribute("aria-hidden")).toBe("false");

    scrollTo(400);
    expect(bar.getAttribute("aria-hidden")).toBe("true");
    expect([...bar.querySelectorAll("a")].map((link) => link.tabIndex)).toEqual([
      -1, -1,
    ]);

    // Elle revient au premier défilement vers le haut : le lecteur qui la
    // cherche la retrouve sans avoir à remonter en haut du guide.
    scrollTo(300);
    expect(bar.getAttribute("aria-hidden")).toBe("false");
    expect([...bar.querySelectorAll("a")].map((link) => link.tabIndex)).toEqual([
      0, 0,
    ]);
  });

  it("ignores the scroll direction on a normal phone viewport", () => {
    const { bar, scrollTo } = mountBar(844);
    expect(bar.getAttribute("aria-hidden")).toBe("false");
    scrollTo(400);
    expect(bar.getAttribute("aria-hidden")).toBe("false");
    scrollTo(1200);
    expect(bar.getAttribute("aria-hidden")).toBe("false");
  });

  it("does not flicker on a scroll shorter than the dead band", () => {
    const { bar, scrollTo } = mountBar(360);
    scrollTo(6);
    expect(bar.getAttribute("aria-hidden")).toBe("false");
    scrollTo(11);
    expect(bar.getAttribute("aria-hidden")).toBe("false");
  });
});
