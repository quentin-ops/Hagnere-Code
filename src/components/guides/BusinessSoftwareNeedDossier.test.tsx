/** @vitest-environment happy-dom */
import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  buildBusinessSoftwareNeedJson,
  createFictitiousBusinessSoftwareNeedDossier,
} from "@/lib/business-software-need-decision";
import { BusinessSoftwareNeedDossier } from "./BusinessSoftwareNeedDossier";

vi.mock("@/lib/clipboard", () => ({
  copyTextToClipboard: vi.fn(async () => true),
}));

describe("BusinessSoftwareNeedDossier", () => {
  let container: HTMLDivElement | null = null;
  let root: Root | null = null;

  beforeEach(() => {
    (
      globalThis as typeof globalThis & {
        IS_REACT_ACT_ENVIRONMENT: boolean;
      }
    ).IS_REACT_ACT_ENVIRONMENT = true;
  });

  afterEach(() => {
    if (root) act(() => root?.unmount());
    container?.remove();
    container = null;
    root = null;
  });

  it("rend un dossier fictif bloqué, étiqueté et aligné à gauche", () => {
    container = document.createElement("div");
    document.body.append(container);
    root = createRoot(container);
    act(() => root?.render(<BusinessSoftwareNeedDossier />));

    expect(container.textContent).toContain("EXEMPLE FICTIF");
    expect(container.textContent).toContain("INCOMPLET");
    expect(container.textContent).toContain("Blocages à lever");
    expect(container.textContent).toContain("EXEMPLE/FICTIF/FIXTURE");
    expect(container.textContent).toContain("TCO 12 mois");
    expect(container.querySelectorAll("fieldset")).toHaveLength(11);
    expect(container.querySelectorAll("details")).toHaveLength(7);
    expect(container.querySelectorAll("input").length).toBeGreaterThan(80);
    expect(container.querySelectorAll("select").length).toBeGreaterThan(20);
    expect(
      [...container.querySelectorAll("input, select")].every(
        (field) =>
          field.closest("label") !== null ||
          field.getAttribute("aria-label") !== null,
      ),
    ).toBe(true);
    expect(container.innerHTML).not.toContain("text-center");
    const finalButton = [...container.querySelectorAll("button")].find(
      (button) => button.textContent?.includes("note finale"),
    );
    expect(finalButton?.disabled).toBe(true);
  });

  it("réinitialise l’exemple et annonce le résultat", () => {
    container = document.createElement("div");
    document.body.append(container);
    root = createRoot(container);
    act(() => root?.render(<BusinessSoftwareNeedDossier />));
    const reset = [...container.querySelectorAll("button")].find((button) =>
      button.textContent?.includes("Rétablir"),
    );
    act(() => reset?.dispatchEvent(new MouseEvent("click", { bubbles: true })));
    expect(container.textContent).toContain("Exemple fictif rétabli.");
  });

  it("remet les quatre portes de sécurité à inconnu au passage en données réelles", () => {
    container = document.createElement("div");
    document.body.append(container);
    root = createRoot(container);
    act(() => root?.render(<BusinessSoftwareNeedDossier />));

    const confirmRealData = [...container.querySelectorAll("button")].find(
      (button) => button.textContent?.includes("Confirmer mes données réelles"),
    );
    act(() =>
      confirmRealData?.dispatchEvent(
        new MouseEvent("click", { bubbles: true }),
      ),
    );

    for (const id of [
      "activeIncidentOrExposure",
      "restorableBackupProved",
      "privilegedAccessControlled",
      "criticalManualFallbackTested",
    ]) {
      expect(
        container.querySelector<HTMLSelectElement>(`#safety-${id}`)?.value,
      ).toBe("ND");
    }
    expect(container.textContent).toContain(
      "Remplacez et confirmez séparément chaque situation, option et jalon du pilote",
    );
    const pilotConfirmations = [
      ...container.querySelectorAll<HTMLInputElement>('input[type="checkbox"]'),
    ].filter((input) =>
      input.parentElement?.textContent?.includes(
        "ce jalon, ses critères, son responsable",
      ),
    );
    expect(pilotConfirmations).toHaveLength(7);
    expect(pilotConfirmations.every((input) => !input.checked)).toBe(true);
    const expiration = [
      ...container.querySelectorAll<HTMLInputElement>('input[type="date"]'),
    ].find((input) =>
      input.parentElement?.textContent?.includes(
        "Date d’expiration de la décision",
      ),
    );
    expect(expiration?.value).toBe("");
  });

  it("priorise un STOP saisi dans l’interface et garde la note finale bloquée", () => {
    container = document.createElement("div");
    document.body.append(container);
    root = createRoot(container);
    act(() => root?.render(<BusinessSoftwareNeedDossier />));

    const activeIncident = container.querySelector<HTMLSelectElement>(
      "#safety-activeIncidentOrExposure",
    );
    expect(activeIncident).not.toBeNull();
    act(() => {
      if (!activeIncident) return;
      activeIncident.value = "OUI";
      activeIncident.dispatchEvent(new Event("change", { bubbles: true }));
    });

    expect(container.textContent).toContain("STOP — sécuriser d’abord");
    const finalButton = [...container.querySelectorAll("button")].find(
      (button) => button.textContent?.includes("note finale"),
    );
    expect(finalButton?.disabled).toBe(true);
  });

  it("permet deux à six options et annule la confirmation après une modification", () => {
    container = document.createElement("div");
    document.body.append(container);
    root = createRoot(container);
    act(() => root?.render(<BusinessSoftwareNeedDossier />));

    const add = [...container.querySelectorAll("button")].find((button) =>
      button.textContent?.includes("Ajouter une option"),
    );
    const removeButtons = () =>
      [...container!.querySelectorAll("button")].filter((button) =>
        button.getAttribute("aria-label")?.startsWith("Supprimer l’option"),
      );
    expect(removeButtons()).toHaveLength(4);
    act(() => add?.dispatchEvent(new MouseEvent("click", { bubbles: true })));
    act(() => add?.dispatchEvent(new MouseEvent("click", { bubbles: true })));
    expect(removeButtons()).toHaveLength(6);
    expect(add?.disabled).toBe(true);
    act(() =>
      removeButtons()[0]?.dispatchEvent(
        new MouseEvent("click", { bubbles: true }),
      ),
    );
    expect(removeButtons()).toHaveLength(5);

    const humanConfirmation = [
      ...container.querySelectorAll<HTMLInputElement>('input[type="checkbox"]'),
    ].find((input) =>
      input.parentElement?.textContent?.includes(
        "Les responsables confirment eux-mêmes",
      ),
    );
    expect(humanConfirmation).not.toBeNull();
    act(() => {
      if (!humanConfirmation) return;
      humanConfirmation.checked = true;
      humanConfirmation.dispatchEvent(new Event("change", { bubbles: true }));
    });
    expect(humanConfirmation?.checked).toBe(true);

    const safetyGate = container.querySelector<HTMLSelectElement>(
      "#safety-activeIncidentOrExposure",
    );
    act(() => {
      if (!safetyGate) return;
      safetyGate.value = "OUI";
      safetyGate.dispatchEvent(new Event("change", { bubbles: true }));
    });
    const refreshedHumanConfirmation = [
      ...container.querySelectorAll<HTMLInputElement>('input[type="checkbox"]'),
    ].find((input) =>
      input.parentElement?.textContent?.includes(
        "Les responsables confirment eux-mêmes",
      ),
    );
    expect(refreshedHumanConfirmation?.checked).toBe(false);
  });

  it("réimporte un JSON versionné et refuse un fichier invalide", async () => {
    container = document.createElement("div");
    document.body.append(container);
    root = createRoot(container);
    await act(async () => root?.render(<BusinessSoftwareNeedDossier />));

    const input =
      container.querySelector<HTMLInputElement>('input[type="file"]');
    expect(input).not.toBeNull();

    const dossier = createFictitiousBusinessSoftwareNeedDossier();
    dossier.sponsor = "Sponsor importé";
    const validFile = {
      size: 1_000,
      text: vi.fn(async () => buildBusinessSoftwareNeedJson(dossier)),
    } as unknown as File;
    Object.defineProperty(input, "files", {
      configurable: true,
      value: [validFile],
    });
    await act(async () => {
      input?.dispatchEvent(new Event("change", { bubbles: true }));
      await Promise.resolve();
    });
    expect(container.textContent).toContain(
      "Dossier JSON importé et revalidé.",
    );
    expect(
      [...container.querySelectorAll("input")].some(
        (field) => field.value === "Sponsor importé",
      ),
    ).toBe(true);

    const invalidFile = {
      size: 100,
      text: vi.fn(async () => '{"schema":"invalide"}'),
    } as unknown as File;
    Object.defineProperty(input, "files", {
      configurable: true,
      value: [invalidFile],
    });
    await act(async () => {
      input?.dispatchEvent(new Event("change", { bubbles: true }));
      await Promise.resolve();
    });
    expect(container.textContent).toContain("Import refusé");
    expect(
      [...container.querySelectorAll("input")].some(
        (field) => field.value === "Sponsor importé",
      ),
    ).toBe(true);

    const oversizedFile = {
      size: 2 * 1024 * 1024 + 1,
      text: vi.fn(async () => buildBusinessSoftwareNeedJson(dossier)),
    } as unknown as File;
    Object.defineProperty(input, "files", {
      configurable: true,
      value: [oversizedFile],
    });
    await act(async () => {
      input?.dispatchEvent(new Event("change", { bubbles: true }));
      await Promise.resolve();
    });
    expect(container.textContent).toContain("dépasse 2 Mo");
    expect(oversizedFile.text).not.toHaveBeenCalled();
  });
});
