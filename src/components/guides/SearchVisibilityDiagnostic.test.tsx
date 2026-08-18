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
    expect(container.textContent).toContain(
      "filtrez l’adresse canonique choisie par Google",
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

  it("calls print and removes the surrounding document from print layout", () => {
    const print = vi.fn();
    Object.defineProperty(window, "print", {
      configurable: true,
      value: print,
    });
    const button = [...container.querySelectorAll("button")].find((candidate) =>
      candidate.textContent?.includes("Imprimer"),
    );
    act(() => button?.click());
    expect(print).toHaveBeenCalledOnce();
    const printCss = container.querySelector("style")?.textContent ?? "";
    expect(printCss).toContain(":has(#search-visibility-diagnostic)");
    expect(printCss).toContain("display: none !important");
    expect(printCss).toContain("break-inside: avoid");
    expect(printCss).not.toContain("visibility: hidden");
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
