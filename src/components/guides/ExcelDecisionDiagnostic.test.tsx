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
import { EXCEL_DECISION_DRAFT_MAX_BYTES } from "@/lib/excel-decision-diagnostic";
import { ExcelDecisionDiagnostic } from "./ExcelDecisionDiagnostic";

function changeInput(control: HTMLInputElement, value: string) {
  act(() => {
    Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype,
      "value",
    )?.set?.call(control, value);
    control.dispatchEvent(new Event("input", { bubbles: true }));
    control.dispatchEvent(new Event("change", { bubbles: true }));
  });
}

function buttonByText(container: HTMLElement, text: string): HTMLButtonElement {
  const button = [...container.querySelectorAll("button")].find((candidate) =>
    candidate.textContent?.includes(text),
  );
  if (!button) throw new Error(`Bouton introuvable : ${text}`);
  return button;
}

function scenarioRadio(
  container: HTMLElement,
  value: "simple" | "central" | "demanding",
): HTMLInputElement {
  const radio = container.querySelector(
    `input[name="excel-scenario-r2"][value="${value}"]`,
  );
  if (!radio) throw new Error(`Scénario introuvable : ${value}`);
  return radio as HTMLInputElement;
}

describe("ExcelDecisionDiagnostic P4 safeguards", () => {
  let container: HTMLDivElement;
  let root: Root;

  beforeAll(() => {
    (
      globalThis as typeof globalThis & { IS_REACT_ACT_ENVIRONMENT: boolean }
    ).IS_REACT_ACT_ENVIRONMENT = true;
  });

  beforeEach(() => {
    window.localStorage.clear();
    container = document.createElement("div");
    document.body.append(container);
    root = createRoot(container);
    act(() => root.render(<ExcelDecisionDiagnostic />));
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
    vi.restoreAllMocks();
  });

  it("changes scenario directly while the diagnostic is pristine", () => {
    const simple = scenarioRadio(container, "simple");

    act(() => simple.click());

    expect(simple.checked).toBe(true);
    expect(scenarioRadio(container, "central").checked).toBe(false);
    expect(container.querySelector('[role="alert"]')).toBeNull();
  });

  it("keeps a dirty diagnostic until the inline destructive action is confirmed", () => {
    const decisionDate = container.querySelector(
      'input[type="date"][required]',
    ) as HTMLInputElement;
    changeInput(decisionDate, "2026-07-25");

    act(() => scenarioRadio(container, "simple").click());

    const alert = container.querySelector('[role="alert"]');
    expect(alert?.getAttribute("aria-live")).toBe("assertive");
    expect(alert?.textContent).toContain(
      "La préparation commune et les cinq dossiers seront effacés.",
    );
    expect(scenarioRadio(container, "central").checked).toBe(true);
    expect(scenarioRadio(container, "simple").checked).toBe(false);

    act(() =>
      buttonByText(container, "Annuler et conserver le diagnostic").click(),
    );
    expect(container.querySelector('[role="alert"]')).toBeNull();
    expect(decisionDate.value).toBe("2026-07-25");
    expect(scenarioRadio(container, "central").checked).toBe(true);

    act(() => scenarioRadio(container, "simple").click());
    act(() =>
      buttonByText(container, "Effacer et changer de scénario").click(),
    );
    expect(container.querySelector('[role="alert"]')).toBeNull();
    expect(scenarioRadio(container, "simple").checked).toBe(true);
    expect(decisionDate.value).toBe("");
  });

  it("detects a change made inside one of the five dossiers", () => {
    const reference = container.querySelector(
      'input[placeholder="Ex. décision GATE-03, procès-verbal ou test vérifié"]',
    ) as HTMLInputElement;
    changeInput(reference, "TEST-DOSSIER-01");

    act(() => scenarioRadio(container, "demanding").click());

    expect(container.querySelector('[role="alert"]')).not.toBeNull();
    expect(scenarioRadio(container, "central").checked).toBe(true);
  });

  it("exposes the active dossier and the two zero-cost justifications", () => {
    const dossierSection = container.querySelector(
      'section[aria-labelledby="five-dossiers-title"]',
    );
    const dossierButtons = [
      ...(dossierSection?.querySelectorAll("button[aria-pressed]") ?? []),
    ] as HTMLButtonElement[];

    expect(dossierButtons).toHaveLength(5);
    expect(
      dossierButtons.filter(
        (button) => button.getAttribute("aria-pressed") === "true",
      ),
    ).toHaveLength(1);

    act(() => dossierButtons[2].click());
    expect(dossierButtons[0].getAttribute("aria-pressed")).toBe("false");
    expect(dossierButtons[2].getAttribute("aria-pressed")).toBe("true");

    for (const labelText of [
      "Justification pour X = 0",
      "Justification pour I = 0",
    ]) {
      const label = [...container.querySelectorAll("label")].find((candidate) =>
        candidate.textContent?.includes(labelText),
      );
      expect(label?.querySelector("input")).not.toBeNull();
    }
  });

  it("prints only the scoped preformatted report", () => {
    const print = vi.fn();
    Object.defineProperty(window, "print", {
      configurable: true,
      value: print,
    });

    act(() => buttonByText(container, "Imprimer").click());

    const style = container.querySelector("style")?.textContent ?? "";
    expect(print).toHaveBeenCalledOnce();
    expect(
      container.querySelector("#excel-decision-diagnostic"),
    ).not.toBeNull();
    expect(
      container.querySelector(
        "#excel-decision-diagnostic > .excel-print-report",
      ),
    ).not.toBeNull();
    expect(style).toContain(
      "body *:not(#excel-decision-diagnostic):not(#excel-decision-diagnostic *):not(:has(#excel-decision-diagnostic)) { display: none !important; }",
    );
    expect(style).not.toMatch(
      /@media print \{[\s\S]*?body \* \{ visibility: hidden/,
    );
    expect(style).toContain(
      "#excel-decision-diagnostic > :not(.excel-print-report)",
    );
    expect(style).toContain("#excel-decision-diagnostic button");
    expect(style).toContain("position: absolute");
  });

  it("saves, resets with confirmation, and restores a versioned local draft", () => {
    const decisionDate = container.querySelector(
      'input[type="date"][required]',
    ) as HTMLInputElement;
    changeInput(decisionDate, "2026-07-25");

    act(() => buttonByText(container, "Enregistrer ici").click());
    const stored = window.localStorage.getItem(
      "hagnere-code:excel-decision-draft:r5",
    );
    expect(stored).toContain('"version":"excel-decision-r5-2026-07-28"');
    expect(stored).toContain('"decisionDate":"2026-07-25"');

    act(() => buttonByText(container, "Réinitialiser").click());
    expect(container.querySelector('[role="alert"]')?.textContent).toContain(
      "Effacer le diagnostic affiché",
    );
    expect(decisionDate.value).toBe("2026-07-25");

    act(() => buttonByText(container, "Oui, effacer l’écran").click());
    expect(decisionDate.value).toBe("");
    expect(
      buttonByText(container, "Reprendre le brouillon local"),
    ).toBeDefined();

    act(() => buttonByText(container, "Reprendre le brouillon local").click());
    expect(decisionDate.value).toBe("2026-07-25");
    expect(container.textContent).toContain(
      "Brouillon local restauré. Vérifiez les dates et les sources.",
    );
  }, 20_000);

  it("imports valid JSON, rejects invalid JSON, and downloads a portable draft", async () => {
    const decisionDate = container.querySelector(
      'input[type="date"][required]',
    ) as HTMLInputElement;
    changeInput(decisionDate, "2026-07-25");
    act(() => buttonByText(container, "Enregistrer ici").click());
    const validDraft = window.localStorage.getItem(
      "hagnere-code:excel-decision-draft:r5",
    );
    expect(validDraft).not.toBeNull();

    changeInput(decisionDate, "2026-07-26");
    const importInput = container.querySelector(
      'input[type="file"]',
    ) as HTMLInputElement;
    Object.defineProperty(importInput, "files", {
      configurable: true,
      value: [{ text: vi.fn().mockResolvedValue(validDraft) }],
    });
    await act(async () => {
      importInput.dispatchEvent(new Event("change", { bubbles: true }));
      await Promise.resolve();
    });
    expect(decisionDate.value).toBe("2026-07-25");
    expect(container.textContent).toContain("Fichier JSON importé.");

    Object.defineProperty(importInput, "files", {
      configurable: true,
      value: [{ text: vi.fn().mockResolvedValue("{") }],
    });
    await act(async () => {
      importInput.dispatchEvent(new Event("change", { bubbles: true }));
      await Promise.resolve();
    });
    expect(container.textContent).toContain(
      "Brouillon incompatible ou endommagé",
    );
    expect(decisionDate.value).toBe("2026-07-25");

    const createObjectURL = vi.fn(() => "blob:diagnostic-excel");
    const revokeObjectURL = vi.fn();
    Object.defineProperty(URL, "createObjectURL", {
      configurable: true,
      value: createObjectURL,
    });
    Object.defineProperty(URL, "revokeObjectURL", {
      configurable: true,
      value: revokeObjectURL,
    });
    const click = vi
      .spyOn(HTMLAnchorElement.prototype, "click")
      .mockImplementation(() => undefined);

    act(() => buttonByText(container, "Télécharger le JSON").click());

    expect(createObjectURL).toHaveBeenCalledOnce();
    expect(click).toHaveBeenCalledOnce();
    expect(revokeObjectURL).toHaveBeenCalledWith("blob:diagnostic-excel");
    expect(container.textContent).toContain("Fichier JSON téléchargé.");
  });

  it("rejects an oversized JSON file before reading it", async () => {
    const fileText = vi.fn().mockResolvedValue("{}");
    const importInput = container.querySelector(
      'input[type="file"]',
    ) as HTMLInputElement;
    Object.defineProperty(importInput, "files", {
      configurable: true,
      value: [
        {
          size: EXCEL_DECISION_DRAFT_MAX_BYTES + 1,
          text: fileText,
        },
      ],
    });

    await act(async () => {
      importInput.dispatchEvent(new Event("change", { bubbles: true }));
      await Promise.resolve();
    });

    expect(fileText).not.toHaveBeenCalled();
    expect(container.textContent).toContain("Fichier refusé avant lecture");
    expect(container.textContent).toContain("limite de 2 Mo");
  });

  it("lets the reader delete a corrupted local draft without restoring it", async () => {
    act(() => root.unmount());
    window.localStorage.setItem(
      "hagnere-code:excel-decision-draft:r5",
      "{corrompu",
    );
    root = createRoot(container);
    act(() => root.render(<ExcelDecisionDiagnostic />));
    await act(async () => {
      await new Promise((resolve) => window.setTimeout(resolve, 0));
    });

    expect(container.textContent).toContain(
      "Brouillon incompatible ou endommagé",
    );
    expect(
      [...container.querySelectorAll("button")].some((button) =>
        button.textContent?.includes("Reprendre le brouillon local"),
      ),
    ).toBe(false);

    act(() => buttonByText(container, "Supprimer le brouillon local").click());

    expect(
      window.localStorage.getItem("hagnere-code:excel-decision-draft:r5"),
    ).toBeNull();
    expect(container.textContent).toContain("Brouillon local supprimé");
  });

  it("exposes the autonomous report for manual copy when clipboard access fails", async () => {
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: {
        writeText: vi.fn().mockRejectedValue(new Error("permission denied")),
      },
    });
    Object.defineProperty(document, "execCommand", {
      configurable: true,
      value: vi.fn(() => false),
    });

    await act(async () => {
      buttonByText(container, "Copier le rapport").click();
      await Promise.resolve();
    });

    expect(container.textContent).toContain("Copie manuelle du rapport");
    const fallback = [...container.querySelectorAll("label")]
      .find((label) => label.textContent?.includes("Copie manuelle du rapport"))
      ?.querySelector("textarea");
    expect(fallback?.value).toContain(
      "Décision Excel vers application — Hagnéré Code",
    );

    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: undefined,
    });
  });
});

describe("ExcelDecisionDiagnostic calendar refresh behavior", () => {
  it("refreshes at local midnight, on focus, and when the tab becomes visible", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 6, 28, 23, 59, 59, 500));
    const container = document.createElement("div");
    document.body.append(container);
    const root = createRoot(container);
    act(() => root.render(<ExcelDecisionDiagnostic />));

    const decisionDate = () =>
      container.querySelector(
        'input[type="date"][required]',
      ) as HTMLInputElement;
    expect(decisionDate().max).toBe("2026-07-28");

    act(() => {
      vi.advanceTimersByTime(700);
    });
    expect(decisionDate().max).toBe("2026-07-29");

    vi.setSystemTime(new Date(2026, 6, 30, 10, 0, 0));
    act(() => window.dispatchEvent(new Event("focus")));
    expect(decisionDate().max).toBe("2026-07-30");

    const visibilityDescriptor = Object.getOwnPropertyDescriptor(
      document,
      "visibilityState",
    );
    Object.defineProperty(document, "visibilityState", {
      configurable: true,
      value: "visible",
    });
    vi.setSystemTime(new Date(2026, 6, 31, 10, 0, 0));
    act(() => document.dispatchEvent(new Event("visibilitychange")));
    expect(decisionDate().max).toBe("2026-07-31");

    act(() => root.unmount());
    container.remove();
    if (visibilityDescriptor) {
      Object.defineProperty(document, "visibilityState", visibilityDescriptor);
    }
    vi.useRealTimers();
  }, 20_000);
});
