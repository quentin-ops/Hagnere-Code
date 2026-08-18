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
import { ApplicationRoiCalculator } from "./ApplicationRoiCalculator";

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

function numberInputNamed(
  container: HTMLElement,
  groupName: string,
  labelText: string,
) {
  const fieldset = fieldsetNamed(container, groupName);
  const label = [...fieldset.querySelectorAll("label")].find((candidate) =>
    candidate.textContent?.includes(labelText),
  );
  const input = label?.querySelector('input[type="number"]');

  if (!(input instanceof HTMLInputElement)) {
    throw new Error(`Champ introuvable : ${groupName} / ${labelText}`);
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

function buttonNamed(container: HTMLElement, name: string) {
  const button = [...container.querySelectorAll("button")].find((candidate) =>
    candidate.textContent?.includes(name),
  );

  if (!(button instanceof HTMLButtonElement)) {
    throw new Error(`Bouton introuvable : ${name}`);
  }

  return button;
}

describe("ApplicationRoiCalculator accessibility and interaction", () => {
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
    act(() => root.render(<ApplicationRoiCalculator />));
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
    vi.restoreAllMocks();
  });

  it("labels every editable input and exposes the economic limits", () => {
    const numericInputs = [
      ...container.querySelectorAll<HTMLInputElement>('input[type="number"]'),
    ];

    expect(numericInputs).toHaveLength(21);
    expect(
      fieldsetNamed(container, "Situation actuelle et horizon commun"),
    ).toBeTruthy();
    expect(
      fieldsetNamed(container, "Option simple ou logiciel standard"),
    ).toBeTruthy();
    expect(fieldsetNamed(container, "Projet envisagé")).toBeTruthy();

    for (const optionName of [
      "Option simple ou logiciel standard",
      "Projet envisagé",
    ]) {
      const visibleHelp = [
        ...fieldsetNamed(container, optionName).querySelectorAll<HTMLElement>(
          '[id$="-help"]',
        ),
      ];
      expect(visibleHelp).toHaveLength(8);
      for (const help of visibleHelp) {
        expect(help.className).not.toContain("sr-only");
        expect(help.textContent?.trim().length).toBeGreaterThan(20);
      }
    }

    for (const input of numericInputs) {
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
      "La capacité réutilisée n’est pas une entrée de caisse",
    );
    expect(container.textContent).toContain(
      "Option simple ou logiciel standard crée ici la valeur économique nette la plus élevée",
    );
    expect(container.textContent).toContain("9,18");
    expect(container.textContent).toContain("79,08");

    const mobileSensitivityHeading = [...container.querySelectorAll("h4")].find(
      (heading) =>
        heading.textContent?.includes(
          "Quand le projet envisagé cesse-t-il de tenir",
        ),
    );
    expect(mobileSensitivityHeading?.parentElement?.className).toContain(
      "lg:hidden",
    );
    expect(
      mobileSensitivityHeading?.parentElement?.querySelectorAll("article"),
    ).toHaveLength(5);
    expect(
      container.querySelector("table")?.parentElement?.className,
    ).toContain("hidden");
  });

  it("recalculates adoption and refuses a verdict when a cost is unknown", () => {
    const ramp = numberInputNamed(
      container,
      "Projet envisagé",
      "Montée progressive de l’adoption",
    );
    fill(ramp, "12");

    expect(container.textContent).toContain("707,76");

    const project = fieldsetNamed(container, "Projet envisagé");
    const unknown = project.querySelector('input[type="checkbox"]');
    if (!(unknown instanceof HTMLInputElement)) {
      throw new Error("Case de coûts inconnus introuvable");
    }

    act(() => unknown.click());

    expect(unknown.checked).toBe(true);
    expect(container.textContent).toContain(
      "Aucun gagnant : au moins une option conserve des coûts importants à confirmer",
    );
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "Aucun gagnant",
    );
    expect(container.textContent).toContain(
      "Non calculable · coûts incomplets",
    );
    expect(container.textContent).toContain(
      "Provisoire : des coûts manquent, aucune décision n’est possible",
    );
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "Résultat provisoire",
    );
    expect(
      container.querySelector('[role="status"]')?.textContent,
    ).not.toContain("Seuil d’heures réutilisées");
  });

  it("blocks comparison and export when an input is missing or invalid", () => {
    const hours = numberInputNamed(
      container,
      "Situation actuelle et horizon commun",
      "Heures de travail actuelles",
    );
    fill(hours, "");

    expect(hours.getAttribute("aria-invalid")).toBe("true");
    expect(hours.closest("label")?.textContent).toContain(
      "Valeur à corriger avant le calcul",
    );
    const errorId = hours
      .getAttribute("aria-describedby")
      ?.split(/\s+/)
      .find((id) => id.endsWith("-error"));
    expect(errorId).toBeTruthy();
    expect(document.getElementById(errorId ?? "")).not.toBeNull();
    expect(container.querySelector('[role="alert"]')?.textContent).toContain(
      "Corrigez les champs signalés",
    );
    expect(buttonNamed(container, "Copier le résumé").disabled).toBe(true);
    expect(buttonNamed(container, "Télécharger le CSV").disabled).toBe(true);

    fill(hours, "-1");
    expect(hours.getAttribute("aria-invalid")).toBe("true");
  });

  it("copies a qualified summary locally without a network request", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });
    const fetchSpy = vi.spyOn(globalThis, "fetch");

    await act(async () => {
      buttonNamed(container, "Copier le résumé").click();
      await Promise.resolve();
    });

    expect(writeText).toHaveBeenCalledOnce();
    expect(writeText.mock.calls[0][0]).toContain(
      "Comparaison économique d’une application métier",
    );
    expect(writeText.mock.calls[0][0]).toContain(
      "Part d’heures réutilisées nécessaire au projet",
    );
    expect(writeText.mock.calls[0][0]).toContain(
      "Mise en service retardée de 6 mois",
    );
    expect(fetchSpy).not.toHaveBeenCalled();
    expect(container.textContent).toContain(
      "Le résumé qualifié a été copié dans le presse-papiers",
    );
  });

  it("downloads a local BOM-prefixed CSV with a descriptive name", async () => {
    const blobs: Blob[] = [];
    const createObjectUrl = vi
      .spyOn(URL, "createObjectURL")
      .mockImplementation((blob) => {
        if (!(blob instanceof Blob)) {
          throw new Error("Le calculateur doit exporter un Blob");
        }
        blobs.push(blob);
        return "blob:application-roi-test";
      });
    const revokeObjectUrl = vi.spyOn(URL, "revokeObjectURL");
    const downloaded: string[] = [];
    vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(
      function click(this: HTMLAnchorElement) {
        downloaded.push(this.download);
      },
    );

    act(() => buttonNamed(container, "Télécharger le CSV").click());

    expect(createObjectUrl).toHaveBeenCalledOnce();
    expect(revokeObjectUrl).toHaveBeenCalledWith("blob:application-roi-test");
    expect(downloaded).toEqual([
      "comparaison-roi-application-metier-48-mois.csv",
    ]);
    expect(blobs).toHaveLength(1);
    const contents = await blobs[0].text();
    expect(contents.startsWith("\ufeff")).toBe(true);
    expect(contents).toContain(
      '"heures_reutilisees_projet_pour_egaler_option_standard"',
    );
    expect(container.textContent).toContain(
      "Le fichier CSV a été préparé sur votre appareil",
    );
  });
});
