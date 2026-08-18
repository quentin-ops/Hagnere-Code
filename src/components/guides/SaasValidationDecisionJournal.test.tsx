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
import { SaasValidationDecisionJournal } from "./SaasValidationDecisionJournal";

function controlNamed(container: HTMLElement, labelText: string) {
  const label = [...container.querySelectorAll("label")].find((candidate) =>
    candidate.textContent?.includes(labelText),
  );
  const control = label?.querySelector("input, select, textarea");
  if (!(
    control instanceof HTMLInputElement ||
    control instanceof HTMLSelectElement ||
    control instanceof HTMLTextAreaElement
  )) {
    throw new Error(`Champ introuvable : ${labelText}`);
  }
  return control;
}

function fillInput(input: HTMLInputElement, value: string) {
  act(() => {
    const setter = Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype,
      "value",
    )?.set;
    setter?.call(input, value);
    input.dispatchEvent(new Event("input", { bubbles: true }));
  });
}

function choose(select: HTMLSelectElement, value: string) {
  act(() => {
    const setter = Object.getOwnPropertyDescriptor(
      HTMLSelectElement.prototype,
      "value",
    )?.set;
    setter?.call(select, value);
    select.dispatchEvent(new Event("change", { bubbles: true }));
  });
}

describe("SaasValidationDecisionJournal", () => {
  let container: HTMLDivElement;
  let root: Root;

  beforeAll(() => {
    (
      globalThis as typeof globalThis & {
        IS_REACT_ACT_ENVIRONMENT: boolean;
      }
    ).IS_REACT_ACT_ENVIRONMENT = true;
  });

  beforeEach(() => {
    container = document.createElement("div");
    document.body.append(container);
    root = createRoot(container);
    act(() => root.render(<SaasValidationDecisionJournal />));
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
  });

  it("starts from an explicitly fictitious, bounded-pilot example", () => {
    expect(container.textContent).toContain(
      "L’exemple ConformiSuivi est fictif",
    );
    expect(container.textContent).toContain("PILOTE BORNÉ");
    expect(container.textContent).toContain("4 300 €");
    expect(
      container.querySelector(
        'a[download][href="/ressources/journal-validation-saas.csv"]',
      ),
    ).not.toBeNull();
    expect(container.querySelectorAll("select")).toHaveLength(8);
  });

  it("starts a blank dossier with no inherited proof or NaN", () => {
    const button = [...container.querySelectorAll("button")].find((candidate) =>
      candidate.textContent?.includes("Nouveau dossier vierge"),
    );
    if (!(button instanceof HTMLButtonElement)) {
      throw new Error("Bouton dossier vierge introuvable");
    }

    act(() => button.click());

    expect(
      (controlNamed(container, "Projet ou offre testée") as HTMLInputElement)
        .value,
    ).toBe("");
    expect(
      [...container.querySelectorAll("select")].every(
        (select) => select.value === "unknown",
      ),
    ).toBe(true);
    const summary = [...container.querySelectorAll("textarea")].at(-1)?.value;
    expect(summary).toContain("à renseigner ou corriger");
    expect(summary).not.toContain("NaN");
  });

  it("turns any hard stop into a STOP verdict", () => {
    const checkbox = controlNamed(
      container,
      "Le pilote exige des données que vous n’êtes pas autorisé",
    );
    if (!(checkbox instanceof HTMLInputElement)) {
      throw new Error("Case STOP introuvable");
    }

    act(() => checkbox.click());

    expect(container.textContent).toContain("STOP — condition non compensable");
  });

  it("allows a limited-MVP verdict only after observed repeat usage", () => {
    const usage = controlNamed(
      container,
      "Premier résultat, usage répété et rétention",
    );
    if (!(usage instanceof HTMLSelectElement)) {
      throw new Error("Sélecteur usage introuvable");
    }

    choose(usage, "observed");

    expect(container.textContent).toContain("CANDIDAT À UN MVP LIMITÉ");
  });

  it("does not silently convert an empty budget input to zero", () => {
    const externalCost = controlNamed(container, "Dépenses externes");
    if (!(externalCost instanceof HTMLInputElement)) {
      throw new Error("Champ dépenses introuvable");
    }

    fillInput(externalCost, "");

    expect(externalCost.getAttribute("aria-invalid")).toBe("true");
    expect(container.textContent).toContain(
      "Compléter le dossier avant de décider",
    );
  });

  it("enforces the lower, exact upper and over-limit budget boundaries", () => {
    const externalCost = controlNamed(container, "Dépenses externes");
    if (!(externalCost instanceof HTMLInputElement)) {
      throw new Error("Champ dépenses introuvable");
    }

    fillInput(externalCost, "-1");
    expect(externalCost.getAttribute("aria-invalid")).toBe("true");
    expect(container.textContent).toContain(
      "Compléter le dossier avant de décider",
    );

    fillInput(externalCost, "1000000000");
    expect(externalCost.getAttribute("aria-invalid")).toBe("false");
    expect(container.textContent).toContain("PILOTE BORNÉ");

    fillInput(externalCost, "1000000001");
    expect(externalCost.getAttribute("aria-invalid")).toBe("true");
    expect(container.textContent).toContain(
      "Compléter le dossier avant de décider",
    );
    expect(container.textContent).not.toContain("NaN");
  });

  it("restores the complete example after starting a blank dossier", () => {
    const blankButton = [...container.querySelectorAll("button")].find(
      (candidate) => candidate.textContent?.includes("Nouveau dossier vierge"),
    );
    const reloadButton = [...container.querySelectorAll("button")].find(
      (candidate) => candidate.textContent?.includes("Recharger l’exemple"),
    );
    if (
      !(blankButton instanceof HTMLButtonElement) ||
      !(reloadButton instanceof HTMLButtonElement)
    ) {
      throw new Error("Boutons de chargement introuvables");
    }

    act(() => blankButton.click());
    act(() => reloadButton.click());

    expect(
      (controlNamed(container, "Projet ou offre testée") as HTMLInputElement)
        .value,
    ).toContain("ConformiSuivi");
    expect(container.textContent).toContain("PILOTE BORNÉ");
    expect(container.textContent).toContain("4 300 €");
  });

  it("keeps the manual textarea available when clipboard copy fails", async () => {
    const clipboardDescriptor = Object.getOwnPropertyDescriptor(
      navigator,
      "clipboard",
    );
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: {
        writeText: vi.fn().mockRejectedValue(new Error("clipboard denied")),
      },
    });

    try {
      const copyButton = [...container.querySelectorAll("button")].find(
        (candidate) => candidate.textContent?.includes("Copier le dossier"),
      );
      if (!(copyButton instanceof HTMLButtonElement)) {
        throw new Error("Bouton de copie introuvable");
      }

      await act(async () => {
        copyButton.click();
        await Promise.resolve();
      });

      expect(container.textContent).toContain("La copie automatique a échoué");
      const manualCopy = [...container.querySelectorAll("textarea")].at(-1);
      expect(manualCopy?.readOnly).toBe(true);
      expect(manualCopy?.value).toContain(
        "DOSSIER DE DÉCISION — VALIDATION SAAS",
      );
    } finally {
      if (clipboardDescriptor) {
        Object.defineProperty(navigator, "clipboard", clipboardDescriptor);
      } else {
        delete (
          navigator as Navigator & {
            clipboard?: Clipboard;
          }
        ).clipboard;
      }
    }
  });

  it("shows visible keyboard focus treatment on every gate", () => {
    const gateCards = [...container.querySelectorAll("select")].map((select) =>
      select.closest("label"),
    );

    expect(gateCards).toHaveLength(8);
    expect(
      gateCards.every((label) =>
        label?.className.includes("focus-within:ring-2"),
      ),
    ).toBe(true);
  });
});
