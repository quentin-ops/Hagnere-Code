/** @vitest-environment happy-dom */

import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { afterEach, beforeAll, beforeEach, describe, expect, it } from "vitest";
import { GoogleAdsManagementCostPlanner } from "./GoogleAdsManagementCostPlanner";

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

describe("GoogleAdsManagementCostPlanner", () => {
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
    act(() => root.render(<GoogleAdsManagementCostPlanner />));
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
  });

  it("exposes fifteen labelled fields grouped by decision", () => {
    expect(container.querySelectorAll('input[type="number"]')).toHaveLength(15);
    expect(container.querySelectorAll("fieldset")).toHaveLength(3);

    const media = inputNamed(container, "Dépense média mensuelle retenue");
    media.focus();
    expect(document.activeElement).toBe(media);
    expect(media.getAttribute("aria-describedby")).toBeTruthy();
  });

  it("renders all three models and the downloadable comparison grid", () => {
    expect(container.textContent).toContain("Forfait fixe");
    expect(container.textContent).toContain("Pourcentage du média");
    expect(container.textContent).toContain("Hybride");
    const download = container.querySelector(
      'a[download][href="/ressources/grille-comparaison-devis-google-ads.csv"]',
    );
    expect(download).not.toBeNull();
  });

  it("keeps spend and the variable-fee basis independent", () => {
    const status = container.querySelector('[role="status"]');
    expect(status?.textContent).toContain("39 434,00 €");

    fill(inputNamed(container, "Dépense média mensuelle retenue"), "10000");
    expect(status?.textContent).toContain("70 034,00 €");

    fill(
      inputNamed(container, "Assiette mensuelle des honoraires variables"),
      "10000",
    );
    expect(status?.textContent).toContain("74 534,00 €");
  });

  it("applies the surcharge only to the declared jurisdiction share", () => {
    const status = container.querySelector('[role="status"]');

    fill(
      inputNamed(container, "Part de la dépense soumise à cette surcharge"),
      "25",
    );

    expect(status?.textContent).toContain("38 984,00 €");
  });

  it("treats zero fees as values rather than missing data", () => {
    fill(inputNamed(container, "Forfait fixe mensuel"), "0");

    const status = container.querySelector('[role="status"]');
    expect(status?.textContent).not.toContain("Calcul impossible");
  });

  it("rejects a blank media budget and marks the field invalid", () => {
    const media = inputNamed(container, "Dépense média mensuelle retenue");
    fill(media, "");

    expect(media.getAttribute("aria-invalid")).toBe("true");
    expect(container.querySelector('[role="alert"]')?.textContent).toContain(
      "Calcul impossible",
    );
  });

  it("restores the documented example", () => {
    fill(inputNamed(container, "Dépense média mensuelle retenue"), "10000");

    const reset = [...container.querySelectorAll("button")].find((button) =>
      button.textContent?.includes("Restaurer l’exemple"),
    );
    act(() => reset?.click());

    expect(inputNamed(container, "Dépense média mensuelle retenue").value).toBe(
      "5000",
    );
  });
});
