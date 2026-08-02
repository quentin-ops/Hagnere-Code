// @vitest-environment happy-dom

import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { SaasSchedulePlannerTool } from "./schedule-planner-tool";

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

async function typeIdentifier(
  input: HTMLInputElement,
  values: string[],
): Promise<void> {
  const valueSetter = Object.getOwnPropertyDescriptor(
    HTMLInputElement.prototype,
    "value",
  )?.set;
  if (!valueSetter) throw new Error("Native input value setter unavailable");

  for (const value of values) {
    await act(async () => {
      valueSetter.call(input, value);
      input.dispatchEvent(new Event("input", { bubbles: true }));
    });
  }
}

function findAnnouncedFeedback(text: string): HTMLElement {
  const feedback = [
    ...container.querySelectorAll<HTMLElement>('[role="status"]'),
  ].find((candidate) => candidate.textContent?.includes(text));

  if (!feedback) throw new Error(`Announced feedback not found: ${text}`);
  return feedback;
}

beforeEach(() => {
  container = document.createElement("div");
  document.body.append(container);
  root = createRoot(container);

  act(() => {
    root.render(<SaasSchedulePlannerTool />);
  });
});

afterEach(() => {
  act(() => root.unmount());
  container.remove();
  vi.restoreAllMocks();
});

describe("SaasSchedulePlannerTool", () => {
  it("starts in STOP and exposes every required input family", () => {
    const status = container.querySelector('[role="status"]');

    expect(status?.textContent).toContain("STOP_REQUIRED_INPUTS_UNKNOWN");
    expect(container.querySelector("#schedule-finish-line")).not.toBeNull();
    const reserve =
      container.querySelector<HTMLInputElement>("#schedule-reserve");
    expect(reserve).not.toBeNull();
    expect(reserve?.max).toBe("1000000");
    expect(reserve?.step).toBe("0.000001");
    expect(reserve?.getAttribute("aria-describedby")).toBe(
      "schedule-number-rules",
    );
    expect(container.querySelector("#schedule-maximum")).not.toBeNull();
    expect(container.textContent).toContain(
      "Chaque chaîne saisie est contrôlée avant conversion",
    );
    expect(container.textContent).toContain(
      "au maximum 1 000 000 jours ouvrés",
    );
    expect(container.textContent).toContain("Aucune tâche renseignée");
    expect(container.querySelector("pre")?.textContent).toContain(
      "STOP — ligne d’arrivée inconnue",
    );
  });

  it("adds an editable task without inventing its missing assumptions", async () => {
    await click(findButton("Ajouter une tâche"));

    expect(container.querySelectorAll("fieldset")).toHaveLength(1);
    expect(
      container.querySelector<HTMLInputElement>("#schedule-task-0-id")?.value,
    ).toBe("tache-1");
    expect(
      container.querySelector<HTMLInputElement>("#schedule-task-0-owner")
        ?.value,
    ).toBe("");
    expect(container.textContent).toContain(
      "Responsable manquant pour tache-1",
    );
    expect(container.textContent).toContain(
      "Durée centrale manquante pour tache-1",
    );
  });

  it("keeps the identifier input connected and focused while its value is typed", async () => {
    await click(findButton("Ajouter une tâche"));

    const originalInput = container.querySelector<HTMLInputElement>(
      "#schedule-task-0-id",
    );
    if (!originalInput) throw new Error("Task identifier input unavailable");
    originalInput.focus();

    for (const value of ["p", "pl", "plan", "planification"]) {
      await typeIdentifier(originalInput, [value]);

      expect(
        container.querySelector<HTMLInputElement>("#schedule-task-0-id"),
      ).toBe(originalInput);
      expect(originalInput.isConnected).toBe(true);
      expect(document.activeElement).toBe(originalInput);
    }

    expect(originalInput.value).toBe("planification");
    expect(container.textContent).toContain(
      "Responsable manquant pour planification",
    );
  });

  it("loads the fully fictitious example and renders four replayable scenarios", async () => {
    await click(findButton("Charger l’exemple fictif"));

    expect(container.querySelectorAll("fieldset")).toHaveLength(6);
    expect(
      container.querySelector<HTMLTextAreaElement>("#schedule-finish-line")
        ?.value,
    ).toContain("pilote privé");
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "CALENDAR_CANDIDATE_FOR_REVIEW",
    );
    expect(container.textContent).toContain("J+16");
    expect(container.textContent).toContain("J+25");
    expect(container.textContent).toContain("J+37");
    expect(container.textContent).toContain("J+47");
    expect(container.textContent).toContain("Stress combiné");
    expect(container.textContent).toContain(
      "Attente externe et validation interne sont dégradées simultanément",
    );
    expect(container.textContent).toContain("Écart :");
    expect(container.textContent).toContain("7 j");
    expect(container.querySelector("pre")?.textContent).toContain(
      "acces-tiers → parcours-construit → recette → pilote-ouvert",
    );
  });

  it("preserves an extreme raw decimal and stops before Number can round it", async () => {
    await click(findButton("Charger l’exemple fictif"));
    const reserve =
      container.querySelector<HTMLInputElement>("#schedule-reserve");
    if (!reserve) throw new Error("Reserve input unavailable");

    await typeIdentifier(reserve, ["9000000000.1234567"]);

    expect(reserve.value).toBe("9000000000.1234567");
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "STOP_INVALID_DEPENDENCY_NETWORK",
    );
    expect(container.textContent).toContain(
      "plus de 6 décimales significatives ; saisie refusée avant conversion",
    );
    expect(container.textContent).not.toContain("9000000000.123457");
  });

  it("keeps the next task row stable when a preceding task is removed and stops on orphan links", async () => {
    await click(findButton("Charger l’exemple fictif"));

    const accessInput = [
      ...container.querySelectorAll<HTMLInputElement>('input[id$="-id"]'),
    ].find((input) => input.value === "acces-tiers");
    if (!accessInput) throw new Error("Access task input unavailable");
    accessInput.focus();

    await click(findButton("Retirer cette tâche"));

    expect(container.querySelectorAll("fieldset")).toHaveLength(5);
    expect(accessInput.isConnected).toBe(true);
    expect(document.activeElement).toBe(accessInput);
    expect(accessInput.id).toBe("schedule-task-0-id");
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "STOP_INVALID_DEPENDENCY_NETWORK",
    );
    expect(container.textContent).toContain(
      "Dépendance inconnue pour parcours-construit : parcours",
    );
  });

  it("does not rewrite dependencies silently when a referenced task is renamed", async () => {
    await click(findButton("Charger l’exemple fictif"));
    const firstIdentifier = container.querySelector<HTMLInputElement>(
      "#schedule-task-0-id",
    );
    if (!firstIdentifier) throw new Error("First task identifier unavailable");

    await typeIdentifier(firstIdentifier, ["parcours-renomme"]);

    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "STOP_INVALID_DEPENDENCY_NETWORK",
    );
    expect(container.textContent).toContain(
      "Dépendance inconnue pour parcours-construit : parcours",
    );
  });

  it("resets the fictitious example to the original STOP", async () => {
    await click(findButton("Charger l’exemple fictif"));
    await click(findButton("Réinitialiser"));

    expect(container.querySelectorAll("fieldset")).toHaveLength(0);
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "STOP_REQUIRED_INPUTS_UNKNOWN",
    );
    expect(container.textContent).toContain(
      "Plan réinitialisé. Le statut revient au STOP.",
    );
    const feedback = findAnnouncedFeedback("Plan réinitialisé");
    expect(feedback.getAttribute("aria-live")).toBe("polite");
    expect(feedback.getAttribute("aria-atomic")).toBe("true");
  });

  it("copies selectable Markdown without creating a download", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });

    await click(findButton("Charger l’exemple fictif"));
    await click(findButton("Copier le Markdown"));

    expect(writeText).toHaveBeenCalledTimes(1);
    expect(writeText.mock.calls[0]?.[0]).toContain(
      "# Plan de calendrier SaaS — brouillon local",
    );
    expect(writeText.mock.calls[0]?.[0]).toContain(
      "CALENDAR_CANDIDATE_FOR_REVIEW",
    );
    expect(container.textContent).toContain("Brouillon Markdown copié");
    const feedback = findAnnouncedFeedback("Brouillon Markdown copié");
    expect(feedback.getAttribute("aria-live")).toBe("polite");
    expect(feedback.getAttribute("aria-atomic")).toBe("true");
    expect(container.querySelector("a[download]")).toBeNull();
  });
});
