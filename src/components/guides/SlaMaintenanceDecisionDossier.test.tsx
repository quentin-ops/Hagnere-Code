/** @vitest-environment happy-dom */

import axe from "axe-core";
import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { renderToString } from "react-dom/server";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { SlaMaintenanceDecisionDossier } from "./SlaMaintenanceDecisionDossier";

vi.mock("@/lib/clipboard", () => ({
  copyTextToClipboard: vi.fn().mockResolvedValue(true),
}));

function buttonByText(scope: ParentNode, text: string): HTMLButtonElement {
  const button = [...scope.querySelectorAll("button")].find((candidate) =>
    candidate.textContent?.includes(text),
  );
  if (!(button instanceof HTMLButtonElement)) {
    throw new Error(`Bouton introuvable : ${text}`);
  }
  return button;
}

describe("SlaMaintenanceDecisionDossier", () => {
  let container: HTMLDivElement;
  let root: Root;

  beforeEach(() => {
    (
      globalThis as typeof globalThis & {
        IS_REACT_ACT_ENVIRONMENT: boolean;
      }
    ).IS_REACT_ACT_ENVIRONMENT = true;
    Object.defineProperty(URL, "createObjectURL", {
      configurable: true,
      value: vi.fn(() => "blob:sla"),
    });
    Object.defineProperty(URL, "revokeObjectURL", {
      configurable: true,
      value: vi.fn(),
    });
    container = document.createElement("div");
    document.body.append(container);
    root = createRoot(container);
    act(() => root.render(<SlaMaintenanceDecisionDossier />));
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
    vi.restoreAllMocks();
  });

  it("rend un atelier local, aligné à gauche et explicitement fictif", () => {
    const html = renderToString(<SlaMaintenanceDecisionDossier />);
    expect(html).toContain("Outil local et déterministe");
    expect(html).toContain("EXEMPLE FICTIF");
    expect(html).toContain("text-left");
    expect(html).not.toContain("text-center");
    expect(html).toContain('data-read-time-exclude="true"');
    expect(container.querySelector('input[type="password"]')).toBeNull();
    expect(container.querySelector("textarea")).toBeNull();
  });

  it("affiche les fixtures de disponibilité, incident et RPO", () => {
    expect(container.textContent).toContain("43,2 min");
    expect(container.textContent).toContain("3 564,00 €");
    expect(container.textContent).toContain("60");
    expect(container.textContent).toContain("140,00 €");
  });

  it("reste INCOMPLET et verrouille la note finale sur l’exemple", () => {
    expect(container.querySelector('[data-decision-stage="INCOMPLET"]')).not.toBeNull();
    expect(buttonByText(container, "Copier la note").disabled).toBe(true);
    expect(container.textContent).toContain("La note finale reste verrouillée");
  });

  it("passe à COMPARABLE quand les valeurs sont marquées réelles", () => {
    act(() => buttonByText(container, "Confirmer mes données réelles").click());
    expect(container.querySelector('[data-decision-stage="COMPARABLE"]')).not.toBeNull();
    expect(buttonByText(container, "Copier la note").disabled).toBe(true);
  });

  it("met le dossier en STOP sur incident actif", () => {
    const checkbox = [...container.querySelectorAll('input[type="checkbox"]')].find(
      (candidate) =>
        candidate.parentElement?.textContent?.includes(
          "Incident ou compromission active",
        ),
    );
    expect(checkbox).toBeInstanceOf(HTMLInputElement);
    act(() => (checkbox as HTMLInputElement).click());
    expect(container.querySelector('[data-decision-stage="STOP"]')).not.toBeNull();
  });

  it("contient huit sélecteurs de preuve et trois couvertures", () => {
    expect(container.querySelectorAll("select")).toHaveLength(8);
    const values = [...container.querySelectorAll("input")].map(
      (input) => input.value,
    );
    expect(values).toContain("Heures ouvrées");
    expect(values).toContain("Plage étendue");
    expect(values).toContain("Continuité renforcée");
  });

  it("borne les saisies numériques comme le moteur canonique", () => {
    const numericInputs = [
      ...container.querySelectorAll<HTMLInputElement>('input[type="number"]'),
    ];
    expect(numericInputs.length).toBeGreaterThan(10);
    expect(numericInputs.every((input) => input.step !== "any")).toBe(true);
    expect(numericInputs.every((input) => input.max !== "")).toBe(true);

    const windowInput = [...container.querySelectorAll("label")]
      .find((label) => label.textContent?.includes("Fenêtre"))
      ?.querySelector<HTMLInputElement>('input[type="number"]');
    expect(windowInput).toEqual(
      expect.objectContaining({ max: "366", min: "1", step: "1" }),
    );

    const peopleInput = [...container.querySelectorAll("label")]
      .find((label) =>
        label.textContent?.includes("Personnes réellement affectées"),
      )
      ?.querySelector<HTMLInputElement>('input[type="number"]');
    expect(peopleInput).toEqual(
      expect.objectContaining({ max: "100000000", step: "1" }),
    );
  });

  it("ne présente pas de violation axe sérieuse ou critique", async () => {
    const report = await axe.run(container, {
      rules: { region: { enabled: false } },
    });
    expect(
      report.violations.filter((violation) =>
        ["serious", "critical"].includes(violation.impact ?? ""),
      ),
    ).toEqual([]);
  });
});
