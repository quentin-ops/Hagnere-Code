/** @vitest-environment happy-dom */

import axe from "axe-core";
import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { renderToString } from "react-dom/server";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { copyTextToClipboard } from "@/lib/clipboard";
import {
  SAAS_DOSSIER_MAX_TEXT_LENGTH,
  SAAS_PROOF_GATES,
  SAAS_SCOPE_ITEMS,
  SAAS_TCO_FIELDS,
  createFictitiousSaasDecisionDossier,
  serializeSaasDecisionDossier,
} from "@/lib/saas-build-path-decision";
import { SaasBuildPathDecisionDossier } from "./SaasBuildPathDecisionDossier";

vi.mock("@/lib/clipboard", () => ({
  copyTextToClipboard: vi.fn().mockResolvedValue(true),
}));

function buttonByText(container: HTMLElement, text: string): HTMLButtonElement {
  const button = [...container.querySelectorAll("button")].find((candidate) =>
    candidate.textContent?.includes(text),
  );
  if (!(button instanceof HTMLButtonElement)) {
    throw new Error(`Bouton introuvable : ${text}`);
  }
  return button;
}

function changeControl(
  control: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
  value: string,
) {
  act(() => {
    const prototype =
      control instanceof HTMLInputElement
        ? HTMLInputElement.prototype
        : control instanceof HTMLTextAreaElement
          ? HTMLTextAreaElement.prototype
          : HTMLSelectElement.prototype;
    Object.getOwnPropertyDescriptor(prototype, "value")?.set?.call(
      control,
      value,
    );
    control.dispatchEvent(new Event("input", { bubbles: true }));
    control.dispatchEvent(new Event("change", { bubbles: true }));
  });
}

function labelControl<T extends HTMLElement>(
  container: HTMLElement,
  labelText: string,
  selector: string,
): T {
  const label = [...container.querySelectorAll("label")].find((candidate) =>
    candidate.textContent?.includes(labelText),
  );
  const control = label?.querySelector(selector);
  if (!(control instanceof HTMLElement)) {
    throw new Error(`Contrôle introuvable : ${labelText}`);
  }
  return control as T;
}

describe("SaasBuildPathDecisionDossier", () => {
  let container: HTMLDivElement;
  let root: Root;

  beforeEach(() => {
    (
      globalThis as typeof globalThis & {
        IS_REACT_ACT_ENVIRONMENT: boolean;
      }
    ).IS_REACT_ACT_ENVIRONMENT = true;
    vi.clearAllMocks();
    Object.defineProperty(window, "print", {
      configurable: true,
      writable: true,
      value: vi.fn(),
    });
    Object.defineProperty(URL, "createObjectURL", {
      configurable: true,
      writable: true,
      value: vi.fn(() => "blob:local-dossier"),
    });
    Object.defineProperty(URL, "revokeObjectURL", {
      configurable: true,
      writable: true,
      value: vi.fn(),
    });
    container = document.createElement("div");
    document.body.append(container);
    root = createRoot(container);
    act(() => root.render(<SaasBuildPathDecisionDossier />));
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
    act(() => root.unmount());
    container.remove();
  });

  it("renders the complete local comparison dossier on the server", () => {
    const html = renderToString(<SaasBuildPathDecisionDossier />);

    expect(html).toContain("Dossier comparatif builder IA ou accompagnement");
    expect(html).toContain("aucune donnée envoyée");
    expect(html).toContain("14 livrables");
    expect(html).toContain("12 portes");
    expect(html).toContain("12, 36 et 60 mois");
    expect(html).toContain("data-read-time-exclude=\"true\"");
    expect(html).toContain("Une inconnue reste ND");
  });

  it("starts incomplete and refuses numeric comparison", () => {
    expect(container.textContent).toContain("Diagnostic incomplet");
    expect(container.textContent).toContain("ND · option non qualifiée");
    expect(container.textContent).not.toContain("Option qualifiée pour comparaison");
    expect(container.querySelectorAll("details")).toHaveLength(3);
  });

  it("keeps two independent named options", () => {
    const tabs = [
      ...container.querySelectorAll<HTMLButtonElement>('[role="tab"]'),
    ];
    expect(tabs).toHaveLength(2);
    expect(tabs[0].getAttribute("aria-selected")).toBe("true");

    const name = labelControl<HTMLInputElement>(
      container,
      "Nom de l’option",
      "input",
    );
    changeControl(name, "Lovable + revue");
    expect(tabs[0].textContent).toContain("Lovable + revue");

    act(() => tabs[1].click());
    expect(
      labelControl<HTMLInputElement>(container, "Nom de l’option", "input")
        .value,
    ).toBe("Option B");

    act(() => tabs[0].click());
    expect(
      labelControl<HTMLInputElement>(container, "Nom de l’option", "input")
        .value,
    ).toBe("Lovable + revue");
  });

  it("loads fictitious numbers but keeps TCO hidden without scope and proofs", () => {
    act(() => buttonByText(container, "Charger l’exemple fictif").click());

    expect(container.textContent).toContain("Builder + revue");
    expect(container.textContent).toContain(
      "Prototype ou pilote avec revue indépendante",
    );
    expect(
      labelControl<HTMLInputElement>(
        container,
        "Abonnements, crédits et services",
        "input",
      ).value,
    ).toBe("600");
    expect(container.textContent).toContain("ND · option non qualifiée");
    expect(
      container.querySelector(".saas-build-print-report")?.textContent,
    ).toContain("12 mois : ND (périmètre ou preuves non qualifiés)");
  });

  it("exposes exactly fourteen scope rows, twelve proof gates and eleven TCO inputs", () => {
    const details = [...container.querySelectorAll("details")];
    const scopeDetails = details.find((detail) =>
      detail.textContent?.includes("Périmètre identique"),
    );
    const proofDetails = details.find((detail) =>
      detail.textContent?.includes("Preuves techniques"),
    );
    const tcoDetails = details.find((detail) =>
      detail.textContent?.includes("Coût complet"),
    );

    expect(scopeDetails?.querySelectorAll("fieldset")).toHaveLength(
      SAAS_SCOPE_ITEMS.length,
    );
    expect(proofDetails?.querySelectorAll("fieldset")).toHaveLength(
      SAAS_PROOF_GATES.length,
    );
    expect(tcoDetails?.querySelectorAll('input[type="number"]')).toHaveLength(
      SAAS_TCO_FIELDS.length,
    );
  });

  it("copies a local report and reports success", async () => {
    await act(async () => buttonByText(container, "Copier le dossier").click());

    expect(copyTextToClipboard).toHaveBeenCalledTimes(1);
    expect(copyTextToClipboard).toHaveBeenCalledWith(
      expect.stringContaining("Une inconnue reste ND"),
    );
    expect(container.textContent).toContain(
      "Le dossier a été copié dans le presse-papiers.",
    );
  });

  it("opens the browser print dialog for the reproducible dossier", () => {
    act(() => buttonByText(container, "Imprimer le dossier").click());

    expect(window.print).toHaveBeenCalledTimes(1);
  });

  it("exports the complete dossier as a local JSON file", () => {
    act(() => buttonByText(container, "Charger l’exemple fictif").click());

    act(() => buttonByText(container, "Exporter en JSON").click());

    expect(URL.createObjectURL).toHaveBeenCalledWith(expect.any(Blob));
    expect(URL.revokeObjectURL).toHaveBeenCalledWith("blob:local-dossier");
    expect(container.textContent).toContain(
      "Le fichier JSON a été créé localement.",
    );
  });

  it("bounds text fields and explains an invalid export instead of blaming the browser", () => {
    const need = labelControl<HTMLTextAreaElement>(
      container,
      "Besoin et preuve attendue",
      "textarea",
    );
    expect(need.maxLength).toBe(SAAS_DOSSIER_MAX_TEXT_LENGTH);

    changeControl(
      need,
      "x".repeat(SAAS_DOSSIER_MAX_TEXT_LENGTH + 1),
    );
    act(() => buttonByText(container, "Exporter en JSON").click());

    expect(URL.createObjectURL).not.toHaveBeenCalled();
    expect(container.textContent).toMatch(
      /Export impossible.*contexte contient une valeur invalide/i,
    );
    expect(container.textContent).not.toMatch(
      /n’a pas pu créer le fichier JSON/i,
    );
  });

  it("imports a validated JSON dossier without sending it", async () => {
    const dossier = createFictitiousSaasDecisionDossier();
    dossier.context.need = "Besoin restauré depuis le fichier local.";
    const file = new File(
      [serializeSaasDecisionDossier(dossier, "2026-07-27")],
      "dossier.json",
      { type: "application/json" },
    );
    const input = container.querySelector<HTMLInputElement>(
      'input[aria-label="Choisir un dossier JSON à importer"]',
    );
    if (!input) throw new Error("Champ d’import JSON introuvable");
    Object.defineProperty(input, "files", {
      configurable: true,
      value: [file],
    });

    await act(async () => {
      input.dispatchEvent(new Event("change", { bubbles: true }));
      await Promise.resolve();
    });

    expect(
      labelControl<HTMLTextAreaElement>(
        container,
        "Besoin et preuve attendue",
        "textarea",
      ).value,
    ).toBe("Besoin restauré depuis le fichier local.");
    expect(container.textContent).toContain(
      "Le dossier JSON a été importé localement",
    );
  });

  it("protects reset and restores focus after cancel and confirmation", () => {
    vi.useFakeTimers();
    const need = labelControl<HTMLTextAreaElement>(
      container,
      "Besoin et preuve attendue",
      "textarea",
    );
    changeControl(need, "Parcours critique");
    const reset = buttonByText(container, "Réinitialiser");
    reset.focus();

    act(() => reset.click());
    act(() => vi.runOnlyPendingTimers());
    expect(document.activeElement).toBe(
      buttonByText(container, "Oui, effacer"),
    );
    expect(need.value).toBe("Parcours critique");

    act(() => buttonByText(container, "Annuler").click());
    act(() => vi.runOnlyPendingTimers());
    expect(document.activeElement).toBe(reset);
    expect(need.value).toBe("Parcours critique");

    act(() => reset.click());
    act(() => vi.runOnlyPendingTimers());
    act(() => buttonByText(container, "Oui, effacer").click());
    act(() => vi.runOnlyPendingTimers());
    expect(document.activeElement).toBe(reset);
    expect(
      labelControl<HTMLTextAreaElement>(
        container,
        "Besoin et preuve attendue",
        "textarea",
      ).value,
    ).toBe("");
  });

  it("has no obvious accessibility violation in the empty state", async () => {
    const results = await axe.run(container);
    expect(results.violations).toEqual([]);
  });

  it("has no obvious accessibility violation with the example and panels open", async () => {
    act(() => buttonByText(container, "Charger l’exemple fictif").click());
    for (const detail of container.querySelectorAll("details")) {
      detail.open = true;
    }

    const results = await axe.run(container);
    expect(results.violations).toEqual([]);
  });
});
