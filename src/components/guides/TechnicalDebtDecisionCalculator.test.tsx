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
import { TechnicalDebtDecisionCalculator } from "./TechnicalDebtDecisionCalculator";
import { parseAmount } from "./TechnicalDebtDecisionCalculator";

const euro = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 2,
});

function inputByLabel(container: HTMLElement, labelText: string) {
  const label = [...container.querySelectorAll("label")].find((candidate) =>
    candidate.textContent?.includes(labelText),
  );
  const input = label?.querySelector('input[type="number"]');

  if (!(input instanceof HTMLInputElement)) {
    throw new Error(`Champ introuvable : ${labelText}`);
  }

  return input;
}

function radioByLabel(container: HTMLElement, labelText: string) {
  const label = [...container.querySelectorAll("label")].find(
    (candidate) =>
      candidate.textContent?.includes(labelText) &&
      candidate.querySelector('input[type="radio"]'),
  );
  const input = label?.querySelector('input[type="radio"]');

  if (!(input instanceof HTMLInputElement)) {
    throw new Error(`Choix introuvable : ${labelText}`);
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

describe("TechnicalDebtDecisionCalculator accessibility and interaction", () => {
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
    act(() => root.render(<TechnicalDebtDecisionCalculator />));
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
    vi.restoreAllMocks();
  });

  it("labels every assumption, horizon and decision lens", () => {
    const numberInputs = [
      ...container.querySelectorAll<HTMLInputElement>('input[type="number"]'),
    ];

    expect(numberInputs).toHaveLength(37);
    expect(container.querySelectorAll('input[type="radio"]')).toHaveLength(6);
    expect(container.querySelectorAll('input[type="checkbox"]')).toHaveLength(
      5,
    );

    for (const input of numberInputs) {
      expect(input.id).not.toBe("");
      expect(
        [...container.querySelectorAll("label")].some(
          (label) => label.htmlFor === input.id,
        ),
      ).toBe(true);
      for (const id of input
        .getAttribute("aria-describedby")
        ?.split(/\s+/)
        .filter(Boolean) ?? []) {
        expect(document.getElementById(id)).not.toBeNull();
      }
    }

    expect(container.textContent).toContain(
      "Une capacité interne valorisée n’est pas une économie de caisse",
    );
  });

  it("shows separate subtotals and the five reference totals", () => {
    expect(container.textContent).toContain(euro.format(25648));
    expect(container.textContent).toContain(euro.format(8400));
    expect(container.textContent).toContain(euro.format(34048));
    expect(container.textContent).toContain(euro.format(126144));
    expect(container.textContent).toContain(euro.format(105979.2));
    expect(container.textContent).toContain(euro.format(120586));
    expect(container.textContent).toContain(euro.format(197821.6));
    expect(container.textContent).toContain(euro.format(190750.4));
  });

  it("changes the visible verdict between cash and capacity", () => {
    const cash = radioByLabel(container, "Trésorerie seule");
    act(() => cash.click());

    expect(cash.checked).toBe(true);
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "Attendre sous surveillance",
    );

    const capacity = radioByLabel(container, "Trésorerie + capacité");
    act(() => capacity.click());

    expect(capacity.checked).toBe(true);
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "Stabiliser une zone",
    );
  });

  it("blocks comparison and exports when a value is empty or invalid", () => {
    const probability = inputByLabel(
      container,
      "Probabilité annuelle de l’incident",
    );
    fill(probability, "101");

    expect(probability.getAttribute("aria-invalid")).toBe("true");
    expect(container.querySelector('[role="alert"]')?.textContent).toContain(
      "entre 0 et 100",
    );
    expect(probability.getAttribute("aria-errormessage")).toBeTruthy();
    expect(
      document.getElementById(
        probability.getAttribute("aria-errormessage") ?? "",
      )?.textContent,
    ).toContain("entre 0 et 100");
    expect(
      [
        ...container.querySelectorAll<HTMLButtonElement>("button[disabled]"),
      ].map((button) => button.textContent?.trim()),
    ).toEqual(["Copier le résumé", "Télécharger le CSV"]);

    fill(probability, "");
    expect(probability.value).toBe("");
    expect(probability.getAttribute("aria-invalid")).toBe("true");
  });

  it("excludes an option with unknown costs from the ranking", () => {
    const checkbox = [
      ...container.querySelectorAll<HTMLInputElement>('input[type="checkbox"]'),
    ][1];
    act(() => checkbox.click());

    expect(checkbox.checked).toBe(true);
    expect(container.textContent).toContain("inconnues");
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "Rénover progressivement",
    );
  });

  it("copies a qualified summary without network access", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });
    const fetchSpy = vi.spyOn(globalThis, "fetch");
    const button = [...container.querySelectorAll("button")].find((candidate) =>
      candidate.textContent?.includes("Copier le résumé"),
    );

    await act(async () => {
      button?.click();
      await Promise.resolve();
    });

    expect(writeText).toHaveBeenCalledOnce();
    expect(writeText.mock.calls[0][0]).toContain("Capacité interne valorisée");
    expect(writeText.mock.calls[0][0]).toContain(
      "n’est pas une économie bancaire",
    );
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it("downloads a UTF-8 CSV on the user device", () => {
    const createObjectUrl = vi
      .spyOn(URL, "createObjectURL")
      .mockReturnValue("blob:technical-debt-test");
    const revokeObjectUrl = vi.spyOn(URL, "revokeObjectURL");
    const click = vi
      .spyOn(HTMLAnchorElement.prototype, "click")
      .mockImplementation(() => undefined);
    const button = [...container.querySelectorAll("button")].find((candidate) =>
      candidate.textContent?.includes("Télécharger le CSV"),
    );

    act(() => button?.click());

    expect(createObjectUrl).toHaveBeenCalledOnce();
    expect(createObjectUrl.mock.calls[0][0]).toBeInstanceOf(Blob);
    expect(click).toHaveBeenCalledOnce();
    expect(revokeObjectUrl).toHaveBeenCalledWith("blob:technical-debt-test");
    expect(container.textContent).toContain(
      "Le fichier CSV a été préparé sur votre appareil",
    );
  });

  it("shows a visible quick test and folds the 37 detailed assumptions", () => {
    const details = container.querySelector("details");
    expect(details).not.toBeNull();
    expect(details?.open).toBe(false);
    expect(details?.querySelector("summary")?.textContent).toContain("37");
    expect(container.textContent).toContain(
      "Quel verdict avec une seule friction annuelle ?",
    );
    expect(container.textContent).toContain("Stabiliser une zone");

    const quick = container.querySelector<HTMLInputElement>(
      'input[id$="-quick-friction"]',
    );
    expect(quick).not.toBeNull();
    fill(quick!, "12000");
    expect(container.textContent).toContain("Attendre sous surveillance");
  });

  it("rejects malformed amounts instead of partially parsing them", () => {
    expect(parseAmount("12abc")).toBeNaN();
    expect(parseAmount("1.2.3")).toBeNaN();
    expect(parseAmount("12,5")).toBe(12.5);
    expect(parseAmount(" 0 ")).toBe(0);
  });

  it("keeps the five options in the decision order", () => {
    const headings = [...container.querySelectorAll("fieldset legend")].map(
      (legend) => legend.textContent?.replace(/^\d+/, "").trim(),
    );
    expect(headings.slice(-5)).toEqual([
      "Attendre sous surveillance",
      "Stabiliser une zone",
      "Rénover progressivement",
      "Remplacer par un logiciel standard",
      "Réécrire l’application",
    ]);
  });
});
