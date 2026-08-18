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
import { TmaTcoCalculator } from "./TmaTcoCalculator";

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

describe("TmaTcoCalculator accessibility and interaction", () => {
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
    act(() => root.render(<TmaTcoCalculator />));
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
    vi.restoreAllMocks();
  });

  it("labels twenty-nine editable assumptions and three horizon choices", () => {
    const numberInputs = [
      ...container.querySelectorAll<HTMLInputElement>('input[type="number"]'),
    ];
    expect(numberInputs).toHaveLength(29);
    expect(container.querySelectorAll('input[type="radio"]')).toHaveLength(3);
    expect(container.querySelectorAll('input[type="checkbox"]')).toHaveLength(
      7,
    );

    for (const input of numberInputs) {
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
      expect(describedBy?.length).toBeGreaterThanOrEqual(1);
      for (const id of describedBy ?? []) {
        expect(document.getElementById(id)).not.toBeNull();
      }
    }

    expect(container.textContent).toContain(
      "ce calcul ne mesure pas la qualité du code",
    );
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "aucun classement",
    );
  });

  it("shows the seven reference totals and recalculates the horizon", () => {
    expect(container.textContent).toContain(euro.format(87600));
    expect(container.textContent).toContain(euro.format(81360));
    expect(container.textContent).toContain(euro.format(80340));
    expect(container.textContent).toContain(euro.format(89010));
    expect(container.textContent).toContain(euro.format(92280));
    expect(container.textContent).toContain(euro.format(103440));
    expect(container.textContent).toContain(euro.format(108240));

    const horizon = radioByLabel(container, "24 mois");
    act(() => horizon.click());

    expect(horizon.checked).toBe(true);
    expect(container.textContent).toContain(euro.format(160680));
  });

  it("recalculates the cost of internal governance", () => {
    const hourlyRate = inputByLabel(
      container,
      "Coût d’une heure de votre équipe",
    );
    fill(hourlyRate, "40");

    expect(container.textContent).toContain(euro.format(78260));
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "aucun classement",
    );

    const unknownCostCheckboxes = [
      ...container.querySelectorAll<HTMLInputElement>('input[type="checkbox"]'),
    ];
    act(() => {
      for (const checkbox of unknownCostCheckboxes) {
        checkbox.click();
      }
    });

    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      euro.format(78240),
    );
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "Capacité reportée",
    );
    expect(container.textContent).toContain(
      "Coût renseigné le plus faible — comparaison à confirmer sur le service",
    );
  });

  it("blocks exports when an amount is empty or negative", () => {
    const hourlyRate = inputByLabel(
      container,
      "Coût d’une heure de votre équipe",
    );
    fill(hourlyRate, "-1");

    expect(hourlyRate.getAttribute("aria-invalid")).toBe("true");
    expect(container.querySelector('[role="alert"]')?.textContent).toContain(
      "Corrigez les montants avant de comparer",
    );
    expect(
      [
        ...container.querySelectorAll<HTMLButtonElement>("button[disabled]"),
      ].map((button) => button.textContent?.trim()),
    ).toEqual(["Copier le résumé", "Télécharger le CSV"]);

    fill(hourlyRate, "");
    expect(hourlyRate.value).toBe("");
    expect(hourlyRate.getAttribute("aria-invalid")).toBe("true");
  });

  it("copies a qualified local summary without network access", async () => {
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
      "hypothèses fictives et modifiables",
    );
    expect(writeText.mock.calls[0][0]).toContain("Formule hybride");
    expect(fetchSpy).not.toHaveBeenCalled();
    expect(container.textContent).toContain(
      "Le résumé lisible a été copié dans le presse-papiers",
    );
  });

  it("downloads a UTF-8 CSV on the user device", () => {
    const createObjectUrl = vi
      .spyOn(URL, "createObjectURL")
      .mockReturnValue("blob:tma-tco-test");
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
    expect(revokeObjectUrl).toHaveBeenCalledWith("blob:tma-tco-test");
    expect(container.textContent).toContain(
      "Le fichier CSV a été préparé sur votre appareil",
    );
  });
});
