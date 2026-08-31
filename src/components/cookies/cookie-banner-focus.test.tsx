/** @vitest-environment happy-dom */

import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { CookieBanner } from "./CookieBanner";
import { COOKIE_CONSENT_STORAGE_KEY } from "@/lib/cookie-consent";

/**
 * Ce que ces contrôles protègent — et pourquoi ils ne visent aucune formulation.
 *
 * Mesuré aux frappes clavier réelles avant correction : les quatre commandes de
 * consentement occupaient les index 134 à 137 sur 138 focusables, soit
 * 137 tabulations sur l'accueil et 149 sur /services/publicite-en-ligne avant
 * d'atteindre le premier lien de la carte. Et `document.activeElement` restait
 * sur BODY au chargement, alors que la carte s'annonce `role="dialog"`.
 *
 * Les assertions portent donc sur la POSITION RELATIVE dans le document et sur
 * l'endroit où se trouve le focus — jamais sur un nom de classe de point de
 * montage, un ordre de nœuds fixe ni un libellé de bouton, qui peuvent tous
 * changer sans que la propriété soit perdue.
 */

let root: Root | null = null;
let container: HTMLDivElement;
let skipLink: HTMLAnchorElement;
let contenuDePage: HTMLElement;

/** Laisse passer le `setTimeout(…, 0)` qui décide de l'affichage. */
async function laisserLaBanniereDecider() {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 5));
  });
}

function carte(): HTMLElement | null {
  return document.querySelector<HTMLElement>(".hc-cb-toast");
}

/** Vrai si `a` précède `b` dans l'ordre du document. */
function precede(a: Node, b: Node): boolean {
  return Boolean(
    a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING,
  );
}

beforeEach(() => {
  window.localStorage.clear();
  document.body.innerHTML = "";

  // Reconstitution minimale de l'ordre réel de `layout.tsx` : le lien
  // d'évitement d'abord, puis le contenu de page, puis le point de montage
  // React de la bannière — c'est-à-dire tout en bas, la situation d'origine.
  skipLink = document.createElement("a");
  skipLink.className = "skip-to-content";
  skipLink.href = "#main-content";
  document.body.append(skipLink);

  contenuDePage = document.createElement("main");
  contenuDePage.innerHTML = '<a href="/tarifs">Tarifs</a>';
  document.body.append(contenuDePage);

  container = document.createElement("div");
  document.body.append(container);
  root = createRoot(container);
});

afterEach(() => {
  act(() => {
    root?.unmount();
  });
  root = null;
  document.body.innerHTML = "";
  window.localStorage.clear();
});

describe("bannière cookies — place dans l'ordre du clavier", () => {
  it("place ses commandes avant le contenu de page, et après le lien d'évitement", async () => {
    await act(async () => {
      root?.render(<CookieBanner />);
    });
    await laisserLaBanniereDecider();

    const toast = carte();
    expect(toast).not.toBeNull();

    // La propriété : le consentement s'atteint AVANT la page, pas après elle.
    expect(precede(skipLink, toast!)).toBe(true);
    expect(precede(toast!, contenuDePage)).toBe(true);

    // Et le lien d'évitement garde la toute première place (WCAG 2.4.1).
    const focusables = Array.from(
      document.querySelectorAll<HTMLElement>('a[href], button, [tabindex="0"]'),
    );
    expect(focusables[0]).toBe(skipLink);
    expect(toast!.contains(focusables[1])).toBe(true);
  });

  it("déplace le focus dans le dialogue à son apparition", async () => {
    await act(async () => {
      root?.render(<CookieBanner />);
    });
    await laisserLaBanniereDecider();

    const toast = carte();
    expect(toast).not.toBeNull();
    // Un conteneur, pas un bouton : ni « Accepter » ni « Refuser » ne doit
    // être présélectionné, la CNIL exige les deux à égalité.
    expect(toast!.contains(document.activeElement)).toBe(true);
    expect(document.activeElement).not.toBe(document.body);
  });

  it("ne s'annonce pas modale, puisqu'elle n'inerte pas la page", async () => {
    await act(async () => {
      root?.render(<CookieBanner />);
    });
    await laisserLaBanniereDecider();

    // Le contenu derrière reste cliquable et atteignable : annoncer
    // `aria-modal` le masquerait aux lecteurs d'écran sans que rien ne le
    // masque à la souris.
    expect(carte()!.getAttribute("aria-modal")).toBeNull();
    expect(contenuDePage.hasAttribute("inert")).toBe(false);
  });

  it("retire son point de montage quand elle disparaît", async () => {
    await act(async () => {
      root?.render(<CookieBanner />);
    });
    await laisserLaBanniereDecider();
    const hote = carte()!.parentElement!;
    expect(document.body.contains(hote)).toBe(true);

    act(() => {
      root?.unmount();
    });
    root = null;
    expect(document.body.contains(hote)).toBe(false);
  });

  it("ne s'affiche pas, et ne prend donc aucun focus, quand un choix est enregistré", async () => {
    window.localStorage.setItem(
      COOKIE_CONSENT_STORAGE_KEY,
      JSON.stringify({
        version: 3,
        necessary: true,
        analytics: false,
        calendly: false,
        categories: { necessary: true, analytics: false, calendly: false },
        ts: Date.now(),
      }),
    );

    await act(async () => {
      root?.render(<CookieBanner />);
    });
    await laisserLaBanniereDecider();

    expect(carte()).toBeNull();
    expect(document.activeElement).toBe(document.body);
  });

  it("rend le focus au bouton du pied de page qui a ouvert les préférences", async () => {
    window.localStorage.setItem(
      COOKIE_CONSENT_STORAGE_KEY,
      JSON.stringify({
        version: 3,
        necessary: true,
        analytics: true,
        calendly: false,
        categories: { necessary: true, analytics: true, calendly: false },
        ts: Date.now(),
      }),
    );

    await act(async () => {
      root?.render(<CookieBanner />);
    });
    await laisserLaBanniereDecider();

    const boutonPiedDePage = document.createElement("button");
    boutonPiedDePage.textContent = "Gérer mes cookies";
    contenuDePage.append(boutonPiedDePage);
    boutonPiedDePage.focus();

    await act(async () => {
      window.openCookiePreferences?.();
    });
    expect(document.querySelector(".hc-cb-modal")).not.toBeNull();

    // Fermeture par Échap : le focus revient au déclencheur, et la carte
    // compacte réaffichée derrière ne doit pas le lui reprendre.
    await act(async () => {
      document.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
      );
    });
    expect(document.activeElement).toBe(boutonPiedDePage);
  });
});
