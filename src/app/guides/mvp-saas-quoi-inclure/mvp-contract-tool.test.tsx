// @vitest-environment happy-dom

import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MvpFirstClientContractTool } from "./mvp-contract-tool";

(
  globalThis as typeof globalThis & { IS_REACT_ACT_ENVIRONMENT: boolean }
).IS_REACT_ACT_ENVIRONMENT = true;

let container: HTMLDivElement;
let root: Root;

function findButton(label: string): HTMLButtonElement {
  const button = [...container.querySelectorAll("button")].find(
    (candidate) => candidate.textContent?.trim() === label,
  );
  if (!(button instanceof HTMLButtonElement)) {
    throw new Error(`Button not found: ${label}`);
  }
  return button;
}

async function click(button: HTMLButtonElement) {
  await act(async () => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
}

async function setInputValue(
  input: HTMLInputElement | HTMLTextAreaElement,
  value: string,
) {
  const prototype =
    input instanceof HTMLTextAreaElement
      ? HTMLTextAreaElement.prototype
      : HTMLInputElement.prototype;
  const setter = Object.getOwnPropertyDescriptor(prototype, "value")?.set;
  if (!setter) throw new Error("Native value setter unavailable");

  await act(async () => {
    setter.call(input, value);
    input.dispatchEvent(new Event("input", { bubbles: true }));
  });
}

async function setSelectValue(select: HTMLSelectElement, value: string) {
  const setter = Object.getOwnPropertyDescriptor(
    HTMLSelectElement.prototype,
    "value",
  )?.set;
  if (!setter) throw new Error("Native select value setter unavailable");

  await act(async () => {
    setter.call(select, value);
    select.dispatchEvent(new Event("change", { bubbles: true }));
  });
}

function currentStatus(): string {
  return (
    container.querySelector<HTMLElement>("[data-status]")?.dataset.status ?? ""
  );
}

beforeEach(() => {
  container = document.createElement("div");
  document.body.append(container);
  root = createRoot(container);

  act(() => {
    root.render(<MvpFirstClientContractTool />);
  });
});

afterEach(() => {
  act(() => root.unmount());
  container.remove();
  vi.restoreAllMocks();
});

describe("MvpFirstClientContractTool", () => {
  it("starts empty with seven families and no hidden example values", () => {
    expect(container.querySelectorAll("fieldset")).toHaveLength(7);
    expect(currentStatus()).toBe("STOP_REQUIRED_DECISIONS_UNKNOWN");
    expect(container.textContent).toContain("Format du test à vérifier");
    expect(container.textContent).toContain(
      "Parcours de valeur : nécessité pour le test à vérifier",
    );
    expect(
      container.querySelector<HTMLInputElement>("#mvp-client-count")?.value,
    ).toBe("");
    expect(
      container.querySelector<HTMLTextAreaElement>("#mvp-sold-outcome")?.value,
    ).toBe("");
    expect(
      container.querySelector<HTMLTextAreaElement>("#mvp-test-horizon")?.value,
    ).toBe("");
    expect(container.textContent).not.toContain("Accordia — exemple");
    expect(container.querySelector("a[download]")).toBeNull();
  });

  it("publishes the numeric bounds and keeps raw input strings", async () => {
    await click(findButton("Charger l’exemple fictif Accordia"));
    const clients =
      container.querySelector<HTMLInputElement>("#mvp-client-count");
    const capacity = container.querySelector<HTMLInputElement>(
      "#mvp-manual-capacity",
    );
    if (!clients || !capacity) throw new Error("Numeric inputs unavailable");
    const manualMinutes = container.querySelector<HTMLInputElement>(
      "#mvp-capability-accountsAccess-manual-minutes",
    );
    const manualOccurrences = container.querySelector<HTMLInputElement>(
      "#mvp-capability-accountsAccess-manual-occurrences",
    );
    if (!manualMinutes || !manualOccurrences) {
      throw new Error("Manual numeric inputs unavailable");
    }

    expect(clients.min).toBe("1");
    expect(clients.max).toBe("1000000");
    expect(clients.step).toBe("1");
    expect(capacity.min).toBe("0");
    expect(capacity.max).toBe("1000000");
    expect(capacity.step).toBe("0.001");
    expect(manualMinutes.min).toBe("0.001");
    expect(manualOccurrences.min).toBe("0.001");
    expect(capacity.getAttribute("aria-describedby")).toBe(
      "mvp-contract-number-rules mvp-contract-period-rules",
    );

    await setInputValue(capacity, "9000000000.1234");
    expect(capacity.value).toBe("9000000000.1234");
    expect(container.textContent).toContain(
      "Capacité manuelle disponible invalide : au maximum 3 décimales",
    );
    expect(container.textContent).not.toContain("9000000000.123");
    expect(capacity.getAttribute("aria-invalid")).toBe("true");
    expect(capacity.getAttribute("aria-describedby")).toContain(
      "mvp-manual-capacity-errors",
    );
  });

  it("loads the explicit fictitious example and renders four equations", async () => {
    await click(findButton("Charger l’exemple fictif Accordia"));

    expect(currentStatus()).toBe("PILOT_CANDIDATE_FOR_REVIEW");
    expect(
      container.querySelector<HTMLTextAreaElement>("#mvp-sold-outcome")?.value,
    ).toContain("exemple entièrement fictif");
    expect(
      container.querySelector<HTMLTextAreaElement>("#mvp-test-horizon")?.value,
    ).toBe(
      "Du 7 septembre au 18 octobre 2026 inclus — période fictive du pilote Accordia",
    );
    expect(
      container.querySelectorAll('input[id$="-manual-minutes"]'),
    ).toHaveLength(4);
    expect(container.textContent).toContain("237 min");
    expect(container.textContent).toContain("300 min");
    expect(container.textContent).toContain("63 min");
    expect(container.textContent).toContain(
      "12 min × 2 occurrence(s)/client sur toute la période × 3 client(s) = 72 min sur toute la même période",
    );
    expect(container.querySelector("pre")?.textContent).toContain(
      "# Contrat du premier client SaaS — brouillon local",
    );
  });

  it("changes the candidate into a capacity STOP when clients increase", async () => {
    await click(findButton("Charger l’exemple fictif Accordia"));
    const clients =
      container.querySelector<HTMLInputElement>("#mvp-client-count");
    if (!clients) throw new Error("Client count unavailable");

    await setInputValue(clients, "5");

    expect(currentStatus()).toBe("STOP_MANUAL_CAPACITY_EXCEEDED");
    expect(container.textContent).toContain("395 min");
    expect(container.textContent).toContain("-95 min");
  });

  it("gives a critical report priority over the remaining manual capacity", async () => {
    await click(findButton("Charger l’exemple fictif Accordia"));
    const treatment = container.querySelector<HTMLSelectElement>(
      "#mvp-capability-dataContinuity-treatment",
    );
    if (!treatment) throw new Error("Data treatment unavailable");

    await setSelectValue(treatment, "REPORTER");

    expect(currentStatus()).toBe("STOP_CRITICAL_CAPABILITY_DEFERRED");
    expect(container.textContent).toContain(
      "Report critique : Données et continuité est nécessaire au test",
    );
  });

  it("does not silently replace a cleared manual duration", async () => {
    await click(findButton("Charger l’exemple fictif Accordia"));
    const minutes = container.querySelector<HTMLInputElement>(
      "#mvp-capability-accountsAccess-manual-minutes",
    );
    if (!minutes) throw new Error("Manual minutes unavailable");

    await setInputValue(minutes, "");

    expect(currentStatus()).toBe("STOP_MANUAL_OPERATION_UNBOUNDED");
    expect(container.textContent).toContain(
      "Comptes et accès : minutes par occurrence à vérifier",
    );
    expect(container.textContent).toContain("165 min");
    expect(container.textContent).toContain("partiel/inexploitable");
    expect(
      container.querySelector('[data-manual-load-state="PARTIAL_UNUSABLE"]'),
    ).not.toBeNull();
  });

  it("reveals payment states when autonomous purchase is selected", async () => {
    await click(findButton("Charger l’exemple fictif Accordia"));
    const salesMode =
      container.querySelector<HTMLSelectElement>("#mvp-sales-mode");
    if (!salesMode) throw new Error("Sales mode unavailable");

    await setSelectValue(salesMode, "ACHAT_AUTONOME");

    expect(container.querySelector("#mvp-autonomous-states")).not.toBeNull();
    expect(container.querySelector("#mvp-autonomous-failure")).not.toBeNull();
    expect(currentStatus()).toBe("STOP_REQUIRED_DECISIONS_UNKNOWN");
    expect(container.textContent).toContain(
      "Échec de paiement autonome : détection, information, droits et reprise à vérifier",
    );
    expect(container.textContent).toContain(
      "Vente et droits associés » nécessaire au test",
    );
  });

  it("keeps autonomous NON plus REPORTER stopped after states and recovery are complete", async () => {
    await click(findButton("Charger l’exemple fictif Accordia"));
    const salesMode =
      container.querySelector<HTMLSelectElement>("#mvp-sales-mode");
    if (!salesMode) throw new Error("Sales mode unavailable");
    await setSelectValue(salesMode, "ACHAT_AUTONOME");

    const states = container.querySelector<HTMLTextAreaElement>(
      "#mvp-autonomous-states",
    );
    const failure = container.querySelector<HTMLTextAreaElement>(
      "#mvp-autonomous-failure",
    );
    const necessity = container.querySelector<HTMLSelectElement>(
      "#mvp-capability-salesEntitlements-necessary",
    );
    const treatment = container.querySelector<HTMLSelectElement>(
      "#mvp-capability-salesEntitlements-treatment",
    );
    if (!states || !failure || !necessity || !treatment) {
      throw new Error("Autonomous purchase controls unavailable");
    }

    await setInputValue(
      states,
      "Achat commencé, paiement en traitement, accès ouvert et abonnement interrompu.",
    );
    await setInputValue(
      failure,
      "Détecter l’échec, informer l’acheteur, garder les droits fermés et permettre une reprise contrôlée.",
    );
    await setSelectValue(necessity, "NON");
    await setSelectValue(treatment, "REPORTER");

    expect(currentStatus()).toBe("STOP_REQUIRED_DECISIONS_UNKNOWN");
    expect(container.textContent).toContain(
      "Vente et droits associés : la nécessité doit être « OUI » pour un achat autonome",
    );
    expect(necessity.getAttribute("aria-invalid")).toBe("true");
    expect(necessity.getAttribute("aria-describedby")).toBe(
      "mvp-capability-salesEntitlements-necessary-errors",
    );
  });

  it("labels a complete prototype as non-production instead of a launch candidate", async () => {
    await click(findButton("Charger l’exemple fictif Accordia"));
    const testFormat =
      container.querySelector<HTMLSelectElement>("#mvp-test-format");
    if (!testFormat) throw new Error("Test format unavailable");

    await setSelectValue(testFormat, "PROTOTYPE_SANS_PRODUCTION");

    expect(currentStatus()).toBe("TEST_FORMAT_NOT_PRODUCTION");
    expect(container.textContent).toContain(
      "il n’autorise pas l’accueil d’un client sur un service exploité",
    );
  });

  it("blocks a production family hidden behind NON plus REPORTER", async () => {
    await click(findButton("Charger l’exemple fictif Accordia"));
    const testFormat =
      container.querySelector<HTMLSelectElement>("#mvp-test-format");
    const necessity = container.querySelector<HTMLSelectElement>(
      "#mvp-capability-administrationOperations-necessary",
    );
    const treatment = container.querySelector<HTMLSelectElement>(
      "#mvp-capability-administrationOperations-treatment",
    );
    if (!testFormat || !necessity || !treatment) {
      throw new Error("Production controls unavailable");
    }

    await setSelectValue(testFormat, "PREMIER_CLIENT_PRODUCTION");
    await setSelectValue(necessity, "NON");
    await setSelectValue(treatment, "REPORTER");

    expect(currentStatus()).toBe("STOP_CRITICAL_CAPABILITY_DEFERRED");
    expect(container.textContent).toContain(
      "Report interdit en production : Administration et exploitation",
    );
  });

  it("resets every value and announces the new STOP", async () => {
    await click(findButton("Charger l’exemple fictif Accordia"));
    await click(findButton("Réinitialiser"));

    expect(currentStatus()).toBe("STOP_REQUIRED_DECISIONS_UNKNOWN");
    expect(
      container.querySelector<HTMLTextAreaElement>("#mvp-sold-outcome")?.value,
    ).toBe("");
    expect(container.textContent).toContain(
      "Contrat réinitialisé. Toutes les décisions redeviennent à vérifier.",
    );
  });

  it("copies Markdown without sending or downloading data", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });

    await click(findButton("Charger l’exemple fictif Accordia"));
    await click(findButton("Copier le contrat Markdown"));

    expect(writeText).toHaveBeenCalledTimes(1);
    expect(writeText.mock.calls[0]?.[0]).toContain(
      "PILOT_CANDIDATE_FOR_REVIEW",
    );
    expect(writeText.mock.calls[0]?.[0]).toContain("Accordia");
    expect(writeText.mock.calls[0]?.[0]).toContain(
      "Période couverte par le test : Du 7 septembre au 18 octobre 2026 inclus",
    );
    expect(writeText.mock.calls[0]?.[0]).toContain(
      "Créer ou reprendre les accès du pilote — limite : Deux interventions planifiées par client pendant le pilote.",
    );
    expect(writeText.mock.calls[0]?.[0]).toContain(
      "États d’achat autonome et de droits : Non applicable — achat autonome non retenu",
    );
    expect(container.textContent).toContain("Contrat copié en Markdown");
    expect(container.querySelector("a[download]")).toBeNull();
  });

  it("offers selectable output when the Clipboard API is unavailable", async () => {
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: undefined,
    });

    await click(findButton("Copier le contrat Markdown"));

    expect(container.textContent).toContain(
      "Copie automatique indisponible. Sélectionnez le contrat Markdown ci-dessous.",
    );
    expect(container.querySelector("pre")?.getAttribute("tabindex")).toBe("0");
    expect(container.querySelector("pre")?.textContent).toContain(
      "Période couverte par le test : À vérifier",
    );
    expect(container.querySelector("pre")?.textContent).toContain(
      "Procédure d’échec de paiement autonome : Non applicable — achat autonome non retenu",
    );
  });

  it("gives every form control an associated visible label", () => {
    const controls = container.querySelectorAll<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >("input, select, textarea");

    for (const control of controls) {
      expect(control.id).not.toBe("");
      expect(
        container.querySelector(`label[for="${control.id}"]`),
      ).not.toBeNull();
    }
  });

  it("links each reported error only to its stable affected field", async () => {
    const horizon =
      container.querySelector<HTMLTextAreaElement>("#mvp-test-horizon");
    const soldOutcome =
      container.querySelector<HTMLTextAreaElement>("#mvp-sold-outcome");
    const owner = container.querySelector<HTMLInputElement>(
      "#mvp-capability-valueJourney-owner",
    );
    if (!horizon || !soldOutcome || !owner) {
      throw new Error("Accessibility controls unavailable");
    }

    expect(horizon.getAttribute("aria-invalid")).toBe("true");
    expect(horizon.required).toBe(true);
    expect(horizon.getAttribute("aria-describedby")).toBe(
      "mvp-contract-period-rules mvp-test-horizon-errors",
    );
    expect(
      container.querySelector("#mvp-test-horizon-errors")?.textContent,
    ).toBe("Période couverte par le test à vérifier");
    const horizonError = container.querySelector("#mvp-test-horizon-errors");
    expect(horizonError?.tagName).toBe("SPAN");
    expect(horizonError?.className).toBe("sr-only");
    expect(horizonError?.closest("label")).not.toBeNull();
    for (const label of container.querySelectorAll("label")) {
      expect(label.querySelector("p")).toBeNull();
    }
    expect(soldOutcome.getAttribute("aria-invalid")).toBe("true");
    expect(owner.getAttribute("aria-invalid")).toBeNull();
    expect(owner.getAttribute("aria-describedby")).toBeNull();

    await click(findButton("Charger l’exemple fictif Accordia"));
    const validHorizon =
      container.querySelector<HTMLTextAreaElement>("#mvp-test-horizon");
    expect(validHorizon?.getAttribute("aria-invalid")).toBeNull();
    expect(validHorizon?.getAttribute("aria-describedby")).toBe(
      "mvp-contract-period-rules",
    );
  });
});
