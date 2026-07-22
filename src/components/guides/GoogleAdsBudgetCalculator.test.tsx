/** @vitest-environment happy-dom */

import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { afterEach, beforeAll, beforeEach, describe, expect, it } from "vitest";
import { GoogleAdsBudgetCalculator } from "./GoogleAdsBudgetCalculator";

function inputNamed(container: HTMLElement, name: string) {
  const label = [...container.querySelectorAll("label")].find((candidate) =>
    candidate.textContent?.includes(name),
  );
  const input = label?.querySelector("input");
  if (!(input instanceof HTMLInputElement)) {
    throw new Error(`Champ introuvable : ${name}`);
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

describe("GoogleAdsBudgetCalculator accessibility and interaction", () => {
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
    act(() => root.render(<GoogleAdsBudgetCalculator />));
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
  });

  it("exposes eight named, focusable fields with associated help", () => {
    expect(container.querySelectorAll('input[type="number"]')).toHaveLength(8);

    const loss = inputNamed(
      container,
      "Perte totale maximale sans aucune vente",
    );
    loss.focus();
    expect(document.activeElement).toBe(loss);
    expect(loss.getAttribute("aria-describedby")).toBeTruthy();
    expect(
      document.getElementById(loss.getAttribute("aria-describedby") || ""),
    ).not.toBeNull();
  });

  it("announces verdict changes and treats a zero loss limit as a decision", () => {
    const status = container.querySelector('[role="status"]');
    expect(status?.getAttribute("aria-live")).toBe("polite");
    expect(status?.textContent).toContain(
      "Le scénario est compatible si vos deux objectifs se réalisent",
    );

    const loss = inputNamed(
      container,
      "Perte totale maximale sans aucune vente",
    );
    fill(loss, "0");

    expect(status?.textContent).toContain(
      "La dépense dépasse votre limite de trésorerie",
    );
    expect(status?.textContent).not.toContain("Une saisie empêche");
  });

  it("announces an impossible target instead of approving it", () => {
    const target = inputNamed(
      container,
      "Demandes sérieuses que vous voulez examiner",
    );
    fill(target, "301");

    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "Le volume demandé est impossible avec ces clics",
    );
  });
});
