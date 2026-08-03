// @vitest-environment happy-dom

import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { PriorityWorkshopTool } from "./priority-workshop-tool";

(
  globalThis as typeof globalThis & { IS_REACT_ACT_ENVIRONMENT: boolean }
).IS_REACT_ACT_ENVIRONMENT = true;

let container: HTMLDivElement;
let root: Root;

function findButton(label: string, occurrence = 0): HTMLButtonElement {
  const buttons = [...container.querySelectorAll("button")].filter(
    (candidate) => candidate.textContent?.trim() === label,
  );
  const button = buttons[occurrence];
  if (!(button instanceof HTMLButtonElement)) {
    throw new Error(`Button not found: ${label} at ${occurrence}`);
  }
  return button;
}

function expectDescribedByTargetsExist(control: Element) {
  const ids = control.getAttribute("aria-describedby")?.split(/\s+/) ?? [];
  expect(ids.length).toBeGreaterThan(0);
  for (const id of ids) {
    expect(
      container.querySelector(`#${id}`),
      `${id} must exist`,
    ).not.toBeNull();
  }
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

function installSuccessfulClipboard() {
  const writeText = vi.fn().mockResolvedValue(undefined);
  Object.defineProperty(navigator, "clipboard", {
    configurable: true,
    value: { writeText },
  });
  return writeText;
}

beforeEach(() => {
  container = document.createElement("div");
  document.body.append(container);
  root = createRoot(container);
  act(() => root.render(<PriorityWorkshopTool />));
});

afterEach(() => {
  act(() => root.unmount());
  container.remove();
  vi.restoreAllMocks();
});

describe("PriorityWorkshopTool", () => {
  it("starts in STOP with no invented value or persistence", () => {
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "STOP_REQUIRED_CONTEXT_UNKNOWN",
    );
    expect(container.textContent).toContain("Aucune demande renseignée");
    expect(container.textContent).toContain("Une case vide reste inconnue");
    expect(container.textContent).toContain(
      "Au-delà de cinq demandes, préparez plusieurs brouillons",
    );
    expect(container.querySelector("pre")?.textContent).toContain(
      "Capacité : inconnue",
    );
    expect(container.innerHTML).not.toMatch(/localStorage|sessionStorage/);
    expect(container.querySelector("a[download]")).toBeNull();

    for (const id of [
      "priority-period",
      "priority-target-result",
      "priority-review-measure",
      "priority-capacity-state",
    ]) {
      const control = container.querySelector(`#${id}`);
      if (!control) throw new Error(`Missing control ${id}`);
      expect(control.getAttribute("aria-invalid")).toBe("true");
      expectDescribedByTargetsExist(control);
    }

    const markdown = container.querySelector("pre");
    expect(markdown?.getAttribute("tabindex")).toBe("0");
    expect(markdown?.getAttribute("aria-labelledby")).toBe(
      "priority-export-title",
    );
    expect(container.querySelector("#priority-export-title")).not.toBeNull();
  });

  it("adds a request and keeps its identifier input focused while editing", async () => {
    await click(findButton("Ajouter une demande"));

    const identifier = container.querySelector<HTMLInputElement>(
      "#priority-request-0-id",
    );
    if (!identifier) throw new Error("Identifier input unavailable");
    identifier.focus();

    for (const value of ["R", "REQ", "REQ-A", "REQ-ALPHA"]) {
      await setInputValue(identifier, value);
      expect(
        container.querySelector<HTMLInputElement>("#priority-request-0-id"),
      ).toBe(identifier);
      expect(identifier.isConnected).toBe(true);
      expect(document.activeElement).toBe(identifier);
    }
    expect(identifier.value).toBe("REQ-ALPHA");
  });

  it("loads five routed requests and renders the 9 of 10 calculation", async () => {
    await click(findButton("Charger l’exemple fictif"));

    expect(container.querySelectorAll("fieldset")).toHaveLength(5);
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "NEXT_LOT_CANDIDATE_FOR_REVIEW",
    );
    expect(container.textContent).toContain("REQ-INCIDENT");
    expect(container.textContent).toContain("Acheter ou intégrer");
    expect(container.textContent).toContain("Différer avec événement");
    expect(container.textContent).toContain(
      "REQ-BUILD (6) + REQ-INTEGRATE (3) = 9",
    );
    expect(container.textContent).toContain("1 j-p");
    expect(findButton("Ajouter une demande").disabled).toBe(true);

    const validOwner = container.querySelector("#priority-request-2-owner");
    const validEffort = container.querySelector("#priority-request-2-effort");
    if (!validOwner || !validEffort)
      throw new Error("Valid controls unavailable");
    expect(validOwner.getAttribute("aria-invalid")).toBeNull();
    expect(validOwner.getAttribute("aria-describedby")).toBeNull();
    expect(validEffort.getAttribute("aria-invalid")).toBeNull();
    expect(validEffort.getAttribute("aria-describedby")).toBe(
      "priority-number-rules",
    );
  });

  it("constrains decisions and capacity selection when the route changes", async () => {
    await click(findButton("Charger l’exemple fictif"));

    const incidentDecision = container.querySelector<HTMLSelectElement>(
      "#priority-request-0-decision",
    );
    const buildRoute = container.querySelector<HTMLSelectElement>(
      "#priority-request-2-route",
    );
    const buildDecision = container.querySelector<HTMLSelectElement>(
      "#priority-request-2-decision",
    );
    const requestFieldsets = [...container.querySelectorAll("fieldset")];
    const incidentSelection =
      requestFieldsets[0]?.querySelector<HTMLInputElement>(
        'input[type="checkbox"]',
      );
    const buildSelection = requestFieldsets[2]?.querySelector<HTMLInputElement>(
      'input[type="checkbox"]',
    );
    const deferSelection = requestFieldsets[4]?.querySelector<HTMLInputElement>(
      'input[type="checkbox"]',
    );
    if (
      !incidentDecision ||
      !buildRoute ||
      !buildDecision ||
      !incidentSelection ||
      !buildSelection ||
      !deferSelection
    ) {
      throw new Error("Route/decision controls unavailable");
    }

    expect([...incidentDecision.options].map((option) => option.value)).toEqual(
      ["treat_first", "unknown"],
    );
    expect(incidentSelection.disabled).toBe(true);
    expect(deferSelection.disabled).toBe(true);
    expect(buildSelection.disabled).toBe(false);
    expect(buildSelection.checked).toBe(true);

    await setSelectValue(buildRoute, "incident");

    expect(buildDecision.value).toBe("unknown");
    expect([...buildDecision.options].map((option) => option.value)).toEqual([
      "treat_first",
      "unknown",
    ]);
    expect(buildSelection.checked).toBe(false);
    expect(buildSelection.disabled).toBe(true);
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "STOP_REQUIRED_CONTEXT_UNKNOWN",
    );
  });

  it("preserves raw extreme numeric text and stops before conversion", async () => {
    await click(findButton("Charger l’exemple fictif"));
    const effort = container.querySelector<HTMLInputElement>(
      "#priority-request-2-effort",
    );
    if (!effort) throw new Error("Effort input unavailable");

    await setInputValue(effort, "999999999999.1234");

    expect(effort.value).toBe("999999999999.1234");
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "STOP_DEPENDENCY_OR_CAPACITY_UNKNOWN",
    );
    expect(container.textContent).toContain("plus de 3 décimales");
    expect(container.textContent).not.toContain("1000000000000");
    expect(effort.getAttribute("aria-invalid")).toBe("true");
    expectDescribedByTargetsExist(effort);
  });

  it("rejects an exponent on an unselected deferred request and links the inline error", async () => {
    await click(findButton("Charger l’exemple fictif"));
    const effort = container.querySelector<HTMLInputElement>(
      "#priority-request-4-effort",
    );
    if (!effort) throw new Error("Deferred effort input unavailable");

    await setInputValue(effort, "1e3");

    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "STOP_DEPENDENCY_OR_CAPACITY_UNKNOWN",
    );
    expect(effort.getAttribute("aria-invalid")).toBe("true");
    expect(effort.getAttribute("aria-describedby")).toContain(
      "priority-request-4-effort-errors",
    );
    expectDescribedByTargetsExist(effort);
    expect(
      container.querySelector("#priority-request-4-effort-errors")?.textContent,
    ).toContain("notation exponentielle");
  });

  it("links dependency and owner errors only to the controls that need correction", async () => {
    await click(findButton("Charger l’exemple fictif"));
    const owner = container.querySelector<HTMLInputElement>(
      "#priority-request-3-owner",
    );
    const dependencies = container.querySelector<HTMLInputElement>(
      "#priority-request-2-dependencies",
    );
    if (!owner || !dependencies) {
      throw new Error("Dependency/owner controls unavailable");
    }

    await setInputValue(owner, "");
    await setInputValue(dependencies, "REQ-INTEGRATE, REQ-ABSENT");

    const currentOwner = container.querySelector("#priority-request-3-owner");
    const currentDependencies = container.querySelector(
      "#priority-request-2-dependencies",
    );
    const validSituation = container.querySelector(
      "#priority-request-2-situation",
    );
    if (!currentOwner || !currentDependencies || !validSituation) {
      throw new Error("Updated controls unavailable");
    }
    expect(currentOwner.getAttribute("aria-invalid")).toBe("true");
    expect(currentDependencies.getAttribute("aria-invalid")).toBe("true");
    expectDescribedByTargetsExist(currentOwner);
    expectDescribedByTargetsExist(currentDependencies);
    expect(validSituation.getAttribute("aria-invalid")).toBeNull();
    expect(validSituation.getAttribute("aria-describedby")).toBeNull();
    expect(container.textContent).toContain(
      "responsable de l’action du lot manquant",
    );
    expect(container.textContent).toContain("dépendance inconnue REQ-ABSENT");
  });

  it("keeps the following request row connected and focused after deletion", async () => {
    await click(findButton("Charger l’exemple fictif"));
    const secondIdentifier = container.querySelector<HTMLInputElement>(
      "#priority-request-1-id",
    );
    if (!secondIdentifier) throw new Error("Second identifier unavailable");
    secondIdentifier.focus();

    await click(findButton("Retirer cette demande", 0));

    expect(container.querySelectorAll("fieldset")).toHaveLength(4);
    expect(secondIdentifier.isConnected).toBe(true);
    expect(document.activeElement).toBe(secondIdentifier);
    expect(secondIdentifier.id).toBe("priority-request-0-id");
    expect(secondIdentifier.value).toBe("REQ-TEST");
  });

  it("copies the selectable Markdown and announces success", async () => {
    const writeText = installSuccessfulClipboard();
    await click(findButton("Charger l’exemple fictif"));
    await click(findButton("Copier le Markdown"));

    expect(writeText).toHaveBeenCalledTimes(1);
    expect(writeText.mock.calls[0]?.[0]).toContain(
      "# Atelier de priorisation SaaS — brouillon local",
    );
    expect(container.textContent).toContain("Brouillon Markdown copié");
    expect(container.querySelector("pre")?.getAttribute("tabindex")).toBe("0");
  });

  it("clears copied feedback after every textual top-level mutation and allows copying again", async () => {
    const writeText = installSuccessfulClipboard();
    await click(findButton("Charger l’exemple fictif"));

    const changes = [
      ["#priority-period", "Lot fictif révisé"],
      ["#priority-target-result", "Résultat fictif révisé"],
      ["#priority-review-measure", "Mesure fictive révisée"],
    ] as const;

    for (const [selector, value] of changes) {
      await click(findButton("Copier le Markdown"));
      expect(container.textContent).toContain("Brouillon Markdown copié");
      const control = container.querySelector<
        HTMLInputElement | HTMLTextAreaElement
      >(selector);
      if (!control)
        throw new Error(`Top-level control unavailable: ${selector}`);
      await setInputValue(control, value);
      expect(container.textContent).not.toContain("Brouillon Markdown copié");
    }

    await click(findButton("Copier le Markdown"));
    expect(container.textContent).toContain("Brouillon Markdown copié");
    expect(writeText).toHaveBeenCalledTimes(4);
    expect(writeText.mock.calls.at(-1)?.[0]).toContain(
      "Mesure fictive révisée",
    );
  });

  it("clears copied feedback after capacity value and state mutations", async () => {
    const writeText = installSuccessfulClipboard();
    await click(findButton("Charger l’exemple fictif"));
    const capacity =
      container.querySelector<HTMLInputElement>("#priority-capacity");
    const capacityState = container.querySelector<HTMLSelectElement>(
      "#priority-capacity-state",
    );
    if (!capacity || !capacityState) {
      throw new Error("Capacity controls unavailable");
    }

    await click(findButton("Copier le Markdown"));
    await setInputValue(capacity, "11");
    expect(container.textContent).not.toContain("Brouillon Markdown copié");

    await click(findButton("Copier le Markdown"));
    expect(container.textContent).toContain("Brouillon Markdown copié");
    await setSelectValue(capacityState, "unknown");
    expect(container.textContent).not.toContain("Brouillon Markdown copié");
    expect(container.querySelector("#priority-capacity")).toBeNull();

    await click(findButton("Copier le Markdown"));
    expect(writeText).toHaveBeenCalledTimes(3);
  });

  it("replaces stale copy feedback after add, remove, load and reset actions", async () => {
    const writeText = installSuccessfulClipboard();

    await click(findButton("Copier le Markdown"));
    await click(findButton("Ajouter une demande"));
    expect(container.textContent).not.toContain("Brouillon Markdown copié");

    await click(findButton("Copier le Markdown"));
    await click(findButton("Retirer cette demande"));
    expect(container.textContent).not.toContain("Brouillon Markdown copié");

    await click(findButton("Copier le Markdown"));
    await click(findButton("Charger l’exemple fictif"));
    expect(container.textContent).not.toContain("Brouillon Markdown copié");
    expect(container.textContent).toContain(
      "Exemple entièrement fictif chargé",
    );

    await click(findButton("Copier le Markdown"));
    await click(findButton("Réinitialiser"));
    expect(container.textContent).not.toContain("Brouillon Markdown copié");
    expect(container.textContent).toContain("Atelier réinitialisé");
    expect(writeText).toHaveBeenCalledTimes(4);
  });

  it("keeps a visible fallback when clipboard access fails", async () => {
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText: vi.fn().mockRejectedValue(new Error("denied")) },
    });
    await click(findButton("Copier le Markdown"));

    expect(container.textContent).toContain(
      "La copie automatique a échoué. Sélectionnez le brouillon Markdown",
    );
    expect(container.querySelector("pre")?.textContent).toContain(
      "STOP_REQUIRED_CONTEXT_UNKNOWN",
    );
  });

  it("resets without retaining the fictitious values", async () => {
    await click(findButton("Charger l’exemple fictif"));
    await click(findButton("Réinitialiser"));

    expect(container.querySelectorAll("fieldset")).toHaveLength(0);
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "STOP_REQUIRED_CONTEXT_UNKNOWN",
    );
    expect(container.textContent).toContain(
      "Atelier réinitialisé. Rien n’a été conservé",
    );
    expect(container.querySelector("pre")?.textContent).not.toContain(
      "REQ-BUILD",
    );
  });
});
