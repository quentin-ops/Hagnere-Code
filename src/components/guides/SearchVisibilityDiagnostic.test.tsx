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

  it("renders one identity sheet and six accessible evidence steps", () => {
    expect(container.querySelectorAll("fieldset")).toHaveLength(6);
    expect(container.querySelectorAll("select")).toHaveLength(6);
    expect(container.querySelectorAll("textarea")).toHaveLength(6);
    expect(container.textContent).toContain("1. Découverte de l’adresse");
    expect(container.textContent).toContain(
      "La preuve n’est pas encore recopiée",
    );
  });

  it("keeps unattributed requests as the first unresolved commercial step", () => {
    const positiveStatuses = [
      "proved",
      "success",
      "indexed",
      "visible-value",
      "visible-value",
      "observed-unattributed",
    ];
    const selects = [...container.querySelectorAll("select")];
    const notes = [...container.querySelectorAll("textarea")];
    positiveStatuses.forEach((status, index) => {
      change(selects[index], status);
      change(notes[index], `Preuve ${index + 1}`);
    });

    expect(
      container.querySelector('[aria-live="polite"]')?.textContent,
    ).toContain("6. Demandes attribuables à ce parcours");
    expect(container.textContent).toContain(
      "Vérifiez d’abord le comptage et l’attribution",
    );
  });

  it("stops at clicks when the report shows exactly zero clicks", () => {
    const statuses = [
      "proved",
      "success",
      "indexed",
      "visible-value",
      "zero-visible-clicks",
      "attributed-value",
    ];
    const selects = [...container.querySelectorAll("select")];
    const notes = [...container.querySelectorAll("textarea")];
    statuses.forEach((status, index) => {
      change(selects[index], status);
      change(notes[index], index === 4 ? "0 clic visible" : "Preuve positive");
    });

    expect(
      container.querySelector('[aria-live="polite"]')?.textContent,
    ).toContain("5. Clics visibles pour cette recherche");
  });

  it("copies a dated diagnostic without sending data", async () => {
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
      candidate.textContent?.includes("Copier mon diagnostic"),
    );
    await act(async () => button?.click());

    expect(writeText).toHaveBeenCalledOnce();
    expect(writeText.mock.calls[0][0]).toContain("https://example.com/page");
    expect(writeText.mock.calls[0][0]).not.toContain("visible-value");
    expect(container.textContent).toContain("Diagnostic copié");
  });

  it("explains a clipboard failure without losing the form", async () => {
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText: vi.fn().mockRejectedValue(new Error("refusé")) },
    });
    const button = [...container.querySelectorAll("button")].find((candidate) =>
      candidate.textContent?.includes("Copier mon diagnostic"),
    );
    await act(async () => button?.click());
    expect(container.textContent).toContain("La copie automatique a échoué");
    expect(container.querySelectorAll("fieldset")).toHaveLength(6);
  });

  it("calls the browser print dialog and ships an isolated print rule", () => {
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
    expect(container.querySelector("style")?.textContent).toContain(
      "body * { visibility: hidden",
    );
    expect(
      container.querySelector("#search-visibility-diagnostic"),
    ).not.toBeNull();
  });

  it("resets all entered evidence", () => {
    const query = controlAfterText<HTMLInputElement>(
      container,
      "Recherche exacte",
      "input",
    );
    change(query, "requête de test");
    const firstSelect = container.querySelector("select");
    const firstEvidence = container.querySelector("textarea");
    if (!firstSelect || !firstEvidence) throw new Error("Étape introuvable");
    change(firstSelect, "proved");
    change(firstEvidence, "URL reconnue");

    const reset = [...container.querySelectorAll("button")].find((candidate) =>
      candidate.textContent?.includes("Réinitialiser"),
    );
    act(() => reset?.click());

    expect(query.value).toBe("");
    expect(firstSelect.value).toBe("unknown");
    expect(firstEvidence.value).toBe("");
    expect(container.textContent).toContain("Le diagnostic a été réinitialisé");
  });
});
