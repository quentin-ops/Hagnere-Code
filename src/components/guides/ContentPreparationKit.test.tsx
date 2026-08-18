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
import { ContentPreparationKit } from "./ContentPreparationKit";

type FormControl = HTMLInputElement | HTMLTextAreaElement;

const euro = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 2,
});

function buttonByText(container: HTMLElement, text: string) {
  const button = [...container.querySelectorAll("button")].find((candidate) =>
    candidate.textContent?.includes(text),
  );
  if (!button) {
    throw new Error(`Bouton introuvable : ${text}`);
  }
  return button;
}

function controlByLabel<T extends FormControl>(
  container: HTMLElement,
  text: string,
) {
  const label = [...container.querySelectorAll("label")].find((candidate) =>
    candidate.textContent?.includes(text),
  );
  const control = label?.querySelector("input, textarea");
  if (!control) {
    throw new Error(`Contrôle introuvable : ${text}`);
  }
  return control as T;
}

function optionFieldset(container: HTMLElement, legend: string) {
  const fieldset = [...container.querySelectorAll("fieldset")].find(
    (candidate) =>
      candidate.querySelector("legend")?.textContent?.trim() === legend,
  );
  if (!fieldset) {
    throw new Error(`Option introuvable : ${legend}`);
  }
  return fieldset;
}

function optionNumberInput(
  container: HTMLElement,
  option: string,
  role: string,
) {
  const fieldset = optionFieldset(container, option);
  const label = [...fieldset.querySelectorAll("label")].find((candidate) =>
    candidate.textContent?.includes(role),
  );
  const input = label?.querySelector('input[type="number"]');
  if (!(input instanceof HTMLInputElement)) {
    throw new Error(`Heures introuvables : ${option}, ${role}`);
  }
  return input;
}

function change(control: FormControl, value: string) {
  act(() => {
    const prototype =
      control instanceof HTMLTextAreaElement
        ? HTMLTextAreaElement.prototype
        : HTMLInputElement.prototype;
    Object.getOwnPropertyDescriptor(prototype, "value")?.set?.call(
      control,
      value,
    );
    control.dispatchEvent(new Event("input", { bubbles: true }));
    control.dispatchEvent(new Event("change", { bubbles: true }));
  });
}

describe("ContentPreparationKit", () => {
  let container: HTMLDivElement;
  let root: Root;

  beforeAll(() => {
    (
      globalThis as typeof globalThis & { IS_REACT_ACT_ENVIRONMENT: boolean }
    ).IS_REACT_ACT_ENVIRONMENT = true;
  });

  beforeEach(() => {
    container = document.createElement("div");
    document.body.append(container);
    root = createRoot(container);
    act(() => root.render(<ContentPreparationKit />));
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
    vi.restoreAllMocks();
  });

  it("is local-only, explains the file and exposes labelled controls", () => {
    expect(container.textContent).toContain(
      "ni transmises à Hagnéré Code ni enregistrées par cet outil",
    );
    expect(container.textContent).toContain(
      "copiez son contenu dans Word, Google Docs ou Notion",
    );
    expect(container.querySelectorAll('input[type="number"]')).toHaveLength(12);
    expect(container.querySelectorAll('input[type="checkbox"]')).toHaveLength(
      3,
    );
    expect(container.querySelectorAll('input[type="text"]')).toHaveLength(3);
    expect(container.querySelectorAll("textarea")).toHaveLength(5);
    expect(container.querySelectorAll('input[type="date"]')).toHaveLength(1);

    for (const input of container.querySelectorAll<HTMLInputElement>(
      'input[type="number"]',
    )) {
      expect(input.id).not.toBe("");
      expect(
        [...container.querySelectorAll("label")].some(
          (label) => label.htmlFor === input.id,
        ),
      ).toBe(true);
      const descriptionIds =
        input.getAttribute("aria-describedby")?.split(/\s+/) ?? [];
      expect(descriptionIds.length).toBeGreaterThanOrEqual(1);
      descriptionIds.forEach((id) =>
        expect(document.getElementById(id)).not.toBeNull(),
      );
    }
  });

  it("shows the three central totals but withholds a ranking by default", () => {
    expect(container.textContent).toContain(euro.format(2180));
    expect(container.textContent).toContain(euro.format(2020));
    expect(container.textContent).toContain(euro.format(2835));
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "Aucun classement",
    );
    expect(container.textContent).not.toContain(
      "Option Hybride : coût renseigné le plus faible",
    );
  });

  it("normalizes decimal hours and rates to the displayed precision", () => {
    const directionRate = controlByLabel<HTMLInputElement>(
      container,
      "Direction",
    );
    change(directionRate, "75.009");
    expect(directionRate.value).toBe("75.01");

    const directionHours = optionNumberInput(container, "Interne", "Direction");
    change(directionHours, "20.009");
    expect(directionHours.value).toBe("20.01");
    expect(container.textContent).toContain(euro.format(2180.95));
  });

  it("announces the lowest entered cost only after all unknowns are closed", () => {
    const checkboxes = [
      ...container.querySelectorAll<HTMLInputElement>('input[type="checkbox"]'),
    ];
    expect(checkboxes.every((checkbox) => checkbox.checked)).toBe(true);

    act(() => {
      checkboxes.forEach((checkbox) => checkbox.click());
    });

    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      `Option Hybride : coût renseigné le plus faible, à ${euro.format(2020)}`,
    );
    expect(container.textContent).toContain(
      "Ce constat ne désigne pas automatiquement le meilleur mode",
    );
  });

  it("lists every option in an equality", () => {
    const internal = optionFieldset(container, "Interne");
    const hybrid = optionFieldset(container, "Hybride");
    const internalValues = [
      ...internal.querySelectorAll<HTMLInputElement>('input[type="number"]'),
    ].map((input) => input.value);
    const hybridInputs = [
      ...hybrid.querySelectorAll<HTMLInputElement>('input[type="number"]'),
    ];

    hybridInputs.forEach((input, index) =>
      change(input, internalValues[index]),
    );

    const checkboxes = [
      ...container.querySelectorAll<HTMLInputElement>('input[type="checkbox"]'),
    ];
    act(() => checkboxes.forEach((checkbox) => checkbox.click()));

    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "Options Interne et Hybride : coûts renseignés les plus faibles",
    );
  });

  it("blocks comparison exports for an empty or negative value", () => {
    const providerHours = optionNumberInput(
      container,
      "Hybride",
      "Prestataire",
    );
    change(providerHours, "");

    expect(providerHours.getAttribute("aria-invalid")).toBe("true");
    expect(container.querySelector('[role="alert"]')?.textContent).toContain(
      "Corrigez les valeurs",
    );
    expect(
      buttonByText(container, "Copier le comparatif").hasAttribute("disabled"),
    ).toBe(true);

    change(providerHours, "-1");
    expect(providerHours.getAttribute("aria-invalid")).toBe("true");
  });

  it("requires an explanation before treating zero hours as real", () => {
    const directionHours = optionNumberInput(container, "Interne", "Direction");
    change(directionHours, "0");

    expect(container.querySelector('[role="alert"]')?.textContent).toContain(
      "Corrigez les valeurs",
    );
    const justification = controlByLabel<HTMLTextAreaElement>(
      container,
      "Justification des heures à zéro",
    );
    expect(justification.getAttribute("aria-invalid")).toBe("true");

    change(
      justification,
      "Aucune heure interne : la rédaction est entièrement déléguée.",
    );
    expect(container.querySelector('[role="alert"]')).toBeNull();
  });

  it("copies the personalized dossier without a network request", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });
    const fetchSpy = vi.spyOn(globalThis, "fetch");

    change(
      controlByLabel<HTMLInputElement>(container, "Nom de l’entreprise"),
      "Atelier Réseau",
    );
    change(
      controlByLabel<HTMLInputElement>(
        container,
        "Personne qui tranche et valide",
      ),
      "Sonia, dirigeante",
    );

    await act(async () => {
      buttonByText(container, "Copier le dossier").click();
      await Promise.resolve();
    });

    expect(writeText).toHaveBeenCalledOnce();
    expect(writeText.mock.calls[0][0]).toContain(
      "# Dossier de contenus du site vitrine — Atelier Réseau",
    );
    expect(writeText.mock.calls[0][0]).toContain("Sonia, dirigeante");
    expect(fetchSpy).not.toHaveBeenCalled();
    expect(container.textContent).toContain("Le dossier complet a été copié");
  });
});
