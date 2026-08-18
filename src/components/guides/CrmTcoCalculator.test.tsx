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
import { CrmTcoCalculator } from "./CrmTcoCalculator";

const euro = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 2,
});

function fieldsetNamed(container: HTMLElement, name: string) {
  const fieldset = [...container.querySelectorAll("fieldset")].find(
    (candidate) =>
      candidate.querySelector("legend")?.textContent?.includes(name),
  );

  if (!(fieldset instanceof HTMLFieldSetElement)) {
    throw new Error(`Groupe introuvable : ${name}`);
  }

  return fieldset;
}

function inputNamed(
  container: HTMLElement,
  groupName: string,
  fieldName: string,
) {
  const fieldset = fieldsetNamed(container, groupName);
  const label = [...fieldset.querySelectorAll("label")].find((candidate) =>
    candidate.textContent?.includes(fieldName),
  );
  const input = label?.querySelector('input[type="number"]');

  if (!(input instanceof HTMLInputElement)) {
    throw new Error(`Champ introuvable : ${groupName} / ${fieldName}`);
  }

  return input;
}

function radioNamed(container: HTMLElement, name: string) {
  const label = [...container.querySelectorAll("label")].find(
    (candidate) =>
      candidate.textContent?.includes(name) &&
      candidate.querySelector('input[type="radio"]'),
  );
  const input = label?.querySelector('input[type="radio"]');

  if (!(input instanceof HTMLInputElement)) {
    throw new Error(`Choix introuvable : ${name}`);
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

describe("CrmTcoCalculator accessibility and interaction", () => {
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
    act(() => root.render(<CrmTcoCalculator />));
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
    vi.restoreAllMocks();
  });

  it("exposes twelve labelled amount fields, two radio groups and visible limits", () => {
    const amountInputs = [
      ...container.querySelectorAll<HTMLInputElement>('input[type="number"]'),
    ];

    expect(amountInputs).toHaveLength(12);
    expect(container.querySelectorAll('input[type="radio"]')).toHaveLength(6);
    expect(fieldsetNamed(container, "Horizon de comparaison")).toBeTruthy();
    expect(fieldsetNamed(container, "Scénario de sensibilité")).toBeTruthy();

    for (const input of amountInputs) {
      expect(input.id).not.toBe("");
      expect(
        [...container.querySelectorAll("label")].some(
          (label) => label.htmlFor === input.id,
        ),
      ).toBe(true);

      const describedBy = input
        .getAttribute("aria-describedby")
        ?.split(/\s+/)
        .filter(Boolean);
      expect(describedBy?.length).toBeGreaterThanOrEqual(2);
      for (const id of describedBy ?? []) {
        expect(document.getElementById(id)).not.toBeNull();
      }
    }

    amountInputs[0].focus();
    expect(document.activeElement).toBe(amountInputs[0]);
    expect(container.textContent).toContain(
      "Ce calcul compare des coûts, pas la qualité de la décision",
    );
  });

  it("recalculates when the horizon, scenario and a user amount change", () => {
    const horizon = radioNamed(container, "12 mois");
    const recurring = radioNamed(container, "Récurrent +25 %");

    act(() => horizon.click());
    act(() => recurring.click());

    expect(horizon.checked).toBe(true);
    expect(recurring.checked).toBe(true);
    expect(container.textContent).toContain(euro.format(14220));
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      euro.format(14220),
    );

    const monthly = inputNamed(
      container,
      "Garder une solution standard",
      "Coûts mensuels",
    );
    fill(monthly, "1000");

    expect(container.textContent).toContain(euro.format(17520));
    expect(container.textContent).toContain(
      "Cette variante teste la nature du coût qui dérape",
    );
  });

  it("blocks partial exports and announces invalid or empty amounts", () => {
    const initial = inputNamed(
      container,
      "Construire un CRM sur mesure",
      "Coûts fixes",
    );
    fill(initial, "-1");

    expect(initial.getAttribute("aria-invalid")).toBe("true");
    expect(container.querySelector('[role="alert"]')?.textContent).toContain(
      "Corrigez les montants avant de comparer",
    );
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "Comparaison impossible",
    );

    const buttons = [
      ...container.querySelectorAll<HTMLButtonElement>("button[disabled]"),
    ];
    expect(buttons.map((button) => button.textContent?.trim())).toEqual([
      "Copier le résumé",
      "Télécharger le CSV",
    ]);

    fill(initial, "");
    expect(initial.value).toBe("");
    expect(initial.getAttribute("aria-invalid")).toBe("true");
  });

  it("copies a complete, qualified summary without any network request", async () => {
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
    expect(writeText.mock.calls[0][0]).toContain(
      "Hypothèses fictives et modifiables",
    );
    expect(writeText.mock.calls[0][0]).toContain(
      "Construire un CRM sur mesure",
    );
    expect(writeText.mock.calls[0][0]).toContain(
      "Le total le plus faible n’est pas nécessairement la meilleure décision",
    );
    expect(fetchSpy).not.toHaveBeenCalled();
    expect(container.textContent).toContain(
      "Le résumé lisible a été copié dans le presse-papiers",
    );
  });

  it("downloads a local UTF-8 CSV with a descriptive filename", () => {
    const createObjectUrl = vi
      .spyOn(URL, "createObjectURL")
      .mockReturnValue("blob:crm-tco-test");
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
    expect(revokeObjectUrl).toHaveBeenCalledWith("blob:crm-tco-test");
    expect(container.textContent).toContain(
      "Le fichier CSV a été préparé sur votre appareil",
    );
  });
});
