/** @vitest-environment happy-dom */

import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { afterEach, beforeAll, beforeEach, describe, expect, it } from "vitest";
import { ProcessAutomationDecisionWorksheet } from "./ProcessAutomationDecisionWorksheet";

function inputNamed(container: HTMLElement, labelText: string) {
  const label = [...container.querySelectorAll("label")].find((candidate) =>
    candidate.textContent?.includes(labelText),
  );
  const input = label?.querySelector("input");
  if (!(input instanceof HTMLInputElement)) {
    throw new Error(`Champ introuvable : ${labelText}`);
  }
  return input;
}

function fill(input: HTMLInputElement, value: string) {
  act(() => {
    const setter = Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype,
      "value",
    )?.set;
    setter?.call(input, value);
    input.dispatchEvent(new Event("input", { bubbles: true }));
  });
}

describe("ProcessAutomationDecisionWorksheet", () => {
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
    act(() => root.render(<ProcessAutomationDecisionWorksheet />));
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
  });

  it("starts from a labelled, explicitly fictitious example", () => {
    expect(container.textContent).toContain("L’exemple fictif est préchargé");
    expect(inputNamed(container, "Cas observés par mois").value).toBe("120");
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "Candidat à un pilote borné",
    );
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "132 h/an",
    );
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "6 documentées",
    );
    expect(container.querySelector('[role="status"]')?.textContent).not.toContain(
      "13/14",
    );
    expect(
      container.querySelector<HTMLTextAreaElement>(
        'textarea[aria-label="Dossier de tri en texte"]',
      )?.value,
    ).toContain("Candidat à un pilote borné");
    expect(
      container.querySelector(
        'a[download][href="/ressources/grille-premiere-automatisation.csv"]',
      ),
    ).not.toBeNull();
    expect(
      container.querySelector(
        'a[download][href="/ressources/comparaison-options-automatisation.csv"]',
      ),
    ).not.toBeNull();
  });

  it("exposes seven independent readiness groups", () => {
    const readinessGroups = [...container.querySelectorAll("fieldset")].filter(
      (fieldset) => fieldset.querySelectorAll('input[type="radio"]').length > 0,
    );

    expect(readinessGroups).toHaveLength(7);
    expect(container.querySelectorAll('input[type="radio"]')).toHaveLength(21);
    expect(
      container
        .querySelector('input[type="radio"]')
        ?.closest("label")
        ?.className,
    ).toContain("focus-within:ring-2");
  });

  it("starts a genuinely blank candidate without carrying the example proofs", () => {
    const blankButton = [...container.querySelectorAll("button")].find(
      (button) => button.textContent?.includes("Nouveau candidat vierge"),
    );
    if (!(blankButton instanceof HTMLButtonElement)) {
      throw new Error("Bouton de nouveau candidat introuvable");
    }

    act(() => blankButton.click());

    expect(inputNamed(container, "Processus candidat").value).toBe("");
    expect(inputNamed(container, "Cas observés par mois").value).toBe("");
    expect(
      container.querySelectorAll('input[type="radio"][value="unknown"]:checked'),
    ).toHaveLength(7);
    expect(container.querySelector('[role="alert"]')?.textContent).toContain(
      "Le diagnostic ne transforme jamais une case vide en zéro",
    );
    const blankSummary = container.querySelector<HTMLTextAreaElement>(
      'textarea[aria-label="Dossier de tri en texte"]',
    )?.value;
    expect(blankSummary).toContain("à renseigner ou corriger");
    expect(blankSummary).not.toContain("NaN");
  });

  it("turns any hard stop into a non-compensable stop verdict", () => {
    const stop = inputNamed(
      container,
      "L’action est difficile à annuler ou affecte fortement une personne",
    );

    act(() => stop.click());

    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "STOP sur l’automatisation complète",
    );
  });

  it("does not silently convert an empty measure to zero", () => {
    const cases = inputNamed(container, "Cas observés par mois");
    fill(cases, "");

    expect(cases.getAttribute("aria-invalid")).toBe("true");
    expect(container.querySelector('[role="alert"]')?.textContent).toContain(
      "Le diagnostic ne transforme jamais une case vide en zéro",
    );
  });

  it("marks values above the documented engine limit as invalid", () => {
    const cases = inputNamed(container, "Cas observés par mois");
    fill(cases, "1000000001");

    expect(cases.getAttribute("max")).toBe("1000000000");
    expect(cases.getAttribute("aria-invalid")).toBe("true");
    expect(container.querySelector('[role="alert"]')).not.toBeNull();
  });
});
