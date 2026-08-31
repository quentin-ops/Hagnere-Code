/** @vitest-environment happy-dom */

import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import { SearchVisibilityDiagnostic } from "./SearchVisibilityDiagnostic";

function controlAfterText<
  T extends HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
>(container: HTMLElement, text: string, selector: string) {
  const label = [...container.querySelectorAll("label")].find((candidate) =>
    candidate.textContent?.includes(text),
  );
  const control = label?.querySelector(selector);
  if (!control) throw new Error(`Contrôle introuvable : ${text}`);
  return control as T;
}

function change(
  control: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
  value: string,
) {
  act(() => {
    const prototype =
      control instanceof HTMLSelectElement
        ? HTMLSelectElement.prototype
        : control instanceof HTMLTextAreaElement
          ? HTMLTextAreaElement.prototype
          : HTMLInputElement.prototype;
    Object.getOwnPropertyDescriptor(prototype, "value")?.set?.call(
      control,
      value,
    );
    control.dispatchEvent(new Event("change", { bubbles: true }));
    control.dispatchEvent(new Event("input", { bubbles: true }));
  });
}

describe("SearchVisibilityDiagnostic", () => {
  let container: HTMLDivElement;
  let root: Root;

  beforeAll(() => {
    (
      globalThis as typeof globalThis & { IS_REACT_ACT_ENVIRONMENT: boolean }
    ).IS_REACT_ACT_ENVIRONMENT = true;
  });

  beforeEach(() => {
    container = document.createElement("div");
    document.body.append(container);
    root = createRoot(container);
    act(() => root.render(<SearchVisibilityDiagnostic />));
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
    vi.restoreAllMocks();
  });

  it("renders one identity sheet and four accessible controls", () => {
    expect(container.querySelectorAll("fieldset")).toHaveLength(4);
    expect(container.querySelectorAll("select")).toHaveLength(4);
    expect(container.querySelectorAll("textarea")).toHaveLength(4);
    expect(container.textContent).toContain("1. Exploration de la page");
    expect(container.textContent).toContain("Le constat manque encore");
    expect(container.textContent).not.toContain("demandes attribuables");
    expect(container.textContent).toContain("vue Index Google");
    // Ce test verrouillait « l'adresse canonique choisie par Google », une
    // formule qui n'existe sur aucun écran : le champ de l'inspection d'URL
    // s'appelle « URL canonique sélectionnée par Google » (relevé le
    // 30/08/2026 sur support.google.com/webmasters/answer/9012289?hl=fr). Le
    // guide qui embarque cet outil interdit d'ailleurs l'ancienne formule dans
    // son corps mesuré ; l'outil y échappait faute d'être couvert. Le test est
    // corrigé, pas affaibli : il vérifie toujours la même phrase.
    expect(container.textContent).toContain(
      "filtrez l’URL canonique sélectionnée par Google",
    );
    expect(container.textContent).toContain(
      "Ajoutez la recherche exacte en dernier",
    );
  });

  it("stops at clicks when the report shows exactly zero clicks", () => {
    const statuses = [
      "crawl-success",
      "indexed",
      "visible-impressions",
      "zero-visible-clicks",
    ];
    const selects = [...container.querySelectorAll("select")];
    const notes = [...container.querySelectorAll("textarea")];
    statuses.forEach((status, index) => {
      change(selects[index], status);
      change(notes[index], index === 3 ? "0 clic visible" : "Constat positif");
    });

    expect(
      container.querySelector('[aria-live="polite"]')?.textContent,
    ).toContain("4. Clics pour cette recherche");
    expect(container.textContent).toContain(
      "Des impressions sans clic classent le problème",
    );
  });

  it("copies a dated sheet without exposing internal status codes", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });
    const url = controlAfterText<HTMLInputElement>(
      container,
      "URL complète",
      "input",
    );
    change(url, "https://example.com/page");

    const button = [...container.querySelectorAll("button")].find((candidate) =>
      candidate.textContent?.includes("Copier la fiche"),
    );
    await act(async () => button?.click());

    expect(writeText).toHaveBeenCalledOnce();
    expect(writeText.mock.calls[0][0]).toContain("https://example.com/page");
    expect(writeText.mock.calls[0][0]).not.toContain("crawl-success");
    expect(container.textContent).toContain("Fiche copiée");
  });

  it("explains a clipboard failure without clearing the sheet", async () => {
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText: vi.fn().mockRejectedValue(new Error("refusé")) },
    });
    const button = [...container.querySelectorAll("button")].find((candidate) =>
      candidate.textContent?.includes("Copier la fiche"),
    );
    await act(async () => button?.click());
    expect(container.textContent).toContain("La copie automatique a échoué");
    expect(container.querySelectorAll("fieldset")).toHaveLength(4);
  });

  // Ce test épinglait la présence des chaînes « :has(...) » et « display: none »
  // dans la feuille imprimée, sans jamais vérifier ce qu'elles protègent. Une
  // isolation non conditionnée les satisfaisait pleinement tout en effaçant les
  // 42 000 caractères du guide dès qu'un lecteur faisait Ctrl+P : le PDF ne
  // faisait plus que 3 pages de fiche vierge, contre 27 rétabli. Le test vise
  // désormais la propriété : l'isolation ne vaut que le temps de l'impression
  // déclenchée par le bouton, et elle est portée par une classe sur <body>.
  it("isolates the sheet only while the print button holds the body class", () => {
    const print = vi.fn(() => {
      // Pendant window.print(), et seulement pendant, le document doit porter
      // la classe qui conditionne l'isolation.
      expect(document.body.classList.contains("printing-search-visibility")).toBe(
        true,
      );
    });
    Object.defineProperty(window, "print", {
      configurable: true,
      value: print,
    });

    expect(document.body.classList.contains("printing-search-visibility")).toBe(
      false,
    );

    const button = [...container.querySelectorAll("button")].find((candidate) =>
      candidate.textContent?.includes("Imprimer"),
    );
    act(() => button?.click());

    expect(print).toHaveBeenCalledOnce();
    expect(document.body.classList.contains("printing-search-visibility")).toBe(
      false,
    );

    const printCss = container.querySelector("style")?.textContent ?? "";
    // Aucune règle qui masque du contenu ne doit exister hors de la classe :
    // c'est exactement ce qui effaçait le guide à l'impression navigateur.
    const hidingBlocks = printCss
      .split("}")
      .filter((block) => /display:\s*none/.test(block));
    expect(hidingBlocks.length).toBeGreaterThan(0);
    for (const block of hidingBlocks) {
      const selector = block.slice(0, block.lastIndexOf("{"));
      const scoped =
        selector.includes("body.printing-search-visibility") ||
        // les commandes de la fiche n'ont aucun sens sur papier, dans les deux cas
        selector.includes("#search-visibility-diagnostic button");
      expect(
        scoped,
        `règle d'impression non conditionnée à la classe : ${selector.trim()}`,
      ).toBe(true);
    }
    // La fiche reste isolée du reste du guide quand la classe est posée.
    expect(printCss).toContain(":has(#search-visibility-diagnostic)");
    expect(printCss).toContain("break-inside: avoid");
    expect(printCss).not.toContain("visibility: hidden");
  });

  it("keeps the sheet readable in ink when the whole guide is printed", () => {
    // Les règles de rendu encre (fond blanc, texte sombre) ne sont PAS
    // conditionnées : l'en-tête de l'outil est sombre à l'écran et son fond
    // n'est pas imprimé par défaut, le texte blanc disparaîtrait du guide.
    const printCss = container.querySelector("style")?.textContent ?? "";
    const inkBlock = printCss
      .split("}")
      .find(
        (block) =>
          /#search-visibility-diagnostic \*\s*\{/.test(block + "}") ||
          /#search-visibility-diagnostic\s*\*/.test(block),
      );
    expect(inkBlock).toBeDefined();
    expect(inkBlock ?? "").not.toContain("body.printing-search-visibility");
    expect(inkBlock ?? "").toMatch(/background-color:\s*#ffffff/i);
    expect(inkBlock ?? "").toMatch(/color:\s*#18181b/i);
  });

  it("resets identity and the four observations", () => {
    const query = controlAfterText<HTMLInputElement>(
      container,
      "Recherche exacte",
      "input",
    );
    change(query, "requête de test");
    const firstSelect = container.querySelector("select");
    const firstObservation = container.querySelector("textarea");
    if (!firstSelect || !firstObservation) throw new Error("Étape introuvable");
    change(firstSelect, "crawl-success");
    change(firstObservation, "Ouverture réussie");

    const reset = [...container.querySelectorAll("button")].find((candidate) =>
      candidate.textContent?.includes("Réinitialiser"),
    );
    act(() => reset?.click());

    expect(query.value).toBe("");
    expect(firstSelect.value).toBe("unknown");
    expect(firstObservation.value).toBe("");
    expect(container.textContent).toContain("La fiche a été réinitialisée");
  });
});
