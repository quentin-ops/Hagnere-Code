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
import { SaasSpecificationKit } from "./SaasSpecificationKit";

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

function numberInputForOffer(
  container: HTMLElement,
  offer: "A" | "B" | "C",
  fieldText: string,
) {
  const fieldset = [...container.querySelectorAll("fieldset")].find(
    (candidate) =>
      candidate.querySelector("legend")?.textContent?.trim() ===
      `Offre ${offer}`,
  );
  const label = [...(fieldset?.querySelectorAll("label") ?? [])].find(
    (candidate) => candidate.textContent?.includes(fieldText),
  );
  const input = label?.querySelector('input[inputmode="decimal"]');
  if (!(input instanceof HTMLInputElement)) {
    throw new Error(`Montant introuvable : offre ${offer}, ${fieldText}`);
  }
  return input;
}

function radioByLabel(container: HTMLElement, text: string) {
  const label = [...container.querySelectorAll("label")].find(
    (candidate) =>
      candidate.textContent?.includes(text) &&
      candidate.querySelector('input[type="radio"]'),
  );
  const input = label?.querySelector('input[type="radio"]');
  if (!(input instanceof HTMLInputElement)) {
    throw new Error(`Horizon introuvable : ${text}`);
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

describe("SaasSpecificationKit", () => {
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
    act(() => root.render(<SaasSpecificationKit />));
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
    vi.restoreAllMocks();
  });

  it("is local-only and exposes labelled, mobile-friendly controls", () => {
    expect(container.textContent).toContain("sans envoi vers Hagnéré Code");
    expect(container.textContent).toContain(
      "ni des prix de marché, ni des tarifs Hagnéré Code",
    );
    expect(
      container.querySelectorAll('input[inputmode="decimal"]'),
    ).toHaveLength(21);
    expect(container.querySelectorAll('input[type="radio"]')).toHaveLength(3);
    expect(container.querySelectorAll('input[type="checkbox"]')).toHaveLength(
      3,
    );
    expect(
      container.querySelectorAll(
        'input[type="text"]:not([inputmode="decimal"])',
      ),
    ).toHaveLength(3);
    expect(container.querySelectorAll("textarea")).toHaveLength(5);
    expect(container.querySelectorAll('input[type="date"]')).toHaveLength(1);

    for (const input of container.querySelectorAll<HTMLInputElement>(
      'input[inputmode="decimal"]',
    )) {
      expect(input.id).not.toBe("");
      expect(
        [...container.querySelectorAll("label")].some(
          (label) => label.htmlFor === input.id,
        ),
      ).toBe(true);
      const descriptionIds =
        input.getAttribute("aria-describedby")?.split(/\s+/) ?? [];
      expect(descriptionIds.length).toBeGreaterThanOrEqual(2);
      descriptionIds.forEach((id) =>
        expect(document.getElementById(id)).not.toBeNull(),
      );
    }

    expect(container.textContent).toContain(
      "Un fichier .md est un document texte",
    );
    expect(container.textContent).toContain("Word, Google Docs ou Notion");
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "Aucun classement",
    );
  });

  it("shows the three 24-month totals and recalculates closed horizons", () => {
    expect(container.textContent).toContain(euro.format(123200));
    expect(container.textContent).toContain(euro.format(111700));
    expect(container.textContent).toContain(euro.format(120899.92));
    expect(
      numberInputForOffer(container, "C", "Infrastructure mensuelle").value,
    ).toBe("583.33");
    expect(container.textContent).toContain("Un zéro doit aussi être expliqué");

    const twelve = radioByLabel(container, "12 mois");
    act(() => twelve.click());
    expect(twelve.checked).toBe(true);
    expect(container.textContent).toContain(euro.format(94100));
    expect(container.textContent).toContain(euro.format(89350));
    expect(container.textContent).toContain(euro.format(95449.96));

    const thirtySix = radioByLabel(container, "36 mois");
    act(() => thirtySix.click());
    expect(container.textContent).toContain(euro.format(152300));
    expect(container.textContent).toContain(euro.format(134050));
    expect(container.textContent).toContain(euro.format(146349.88));
  });

  it("accepts French decimals without silently rewriting the user's input", () => {
    const construction = numberInputForOffer(container, "A", "Construction");
    change(construction, "1,23");

    expect(construction.value).toBe("1,23");
    expect(container.textContent).toContain(euro.format(78201.23));
  });

  it("withholds every comparison until all unknown-cost boxes are cleared", () => {
    const checkboxes = [
      ...container.querySelectorAll<HTMLInputElement>('input[type="checkbox"]'),
    ];
    expect(checkboxes.every((checkbox) => checkbox.checked)).toBe(true);

    act(() => checkboxes[0].click());
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "Aucun classement",
    );
    expect(container.textContent).not.toContain(
      "Coût renseigné le plus faible",
    );

    act(() => {
      checkboxes[1].click();
      checkboxes[2].click();
    });

    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      `Offre B : coût renseigné le plus faible, à ${euro.format(111700)}`,
    );
    expect(container.textContent).toContain("Coût renseigné le plus faible");
    expect(container.textContent).not.toContain("meilleure offre");
  });

  it("blocks comparison exports for negative and empty amounts", () => {
    const discoveryA = numberInputForOffer(
      container,
      "A",
      "Étude et décisions initiales",
    );
    change(discoveryA, "-1");

    expect(discoveryA.getAttribute("aria-invalid")).toBe("true");
    const errorId = discoveryA.getAttribute("aria-errormessage");
    expect(errorId).not.toBeNull();
    expect(document.getElementById(errorId!)?.textContent).toContain(
      "Les montants négatifs",
    );
    expect(container.querySelector('[role="alert"]')?.textContent).toContain(
      "Corrigez les montants",
    );
    expect(
      buttonByText(container, "Copier le comparatif prêt").hasAttribute(
        "disabled",
      ),
    ).toBe(true);
    expect(
      buttonByText(container, "Télécharger le comparatif (.md)").hasAttribute(
        "disabled",
      ),
    ).toBe(true);

    change(discoveryA, "");
    expect(discoveryA.value).toBe("");
    expect(discoveryA.getAttribute("aria-invalid")).toBe("true");
  });

  it("rejects mixed separators, exponent notation and excess decimals without truncation", () => {
    const discoveryA = numberInputForOffer(
      container,
      "A",
      "Étude et décisions initiales",
    );

    for (const invalid of ["1,250.50", "1e3", "1.234"]) {
      change(discoveryA, invalid);
      expect(discoveryA.value).toBe(invalid);
      expect(discoveryA.getAttribute("aria-invalid")).toBe("true");
      const errorId = discoveryA.getAttribute("aria-errormessage");
      expect(errorId).not.toBeNull();
      expect(document.getElementById(errorId!)).not.toBeNull();
      expect(
        buttonByText(container, "Copier le comparatif prêt").hasAttribute(
          "disabled",
        ),
      ).toBe(true);
    }
  });

  it("connects every invalid amount to its own visible correction message", () => {
    const amountInputs = [
      ...container.querySelectorAll<HTMLInputElement>(
        'input[inputmode="decimal"]',
      ),
    ];

    amountInputs.forEach((input) => change(input, "1e3"));

    const errorIds = amountInputs.map((input) => {
      expect(input.getAttribute("aria-invalid")).toBe("true");
      const errorId = input.getAttribute("aria-errormessage");
      expect(errorId).not.toBeNull();
      expect(document.getElementById(errorId!)?.textContent).toContain(
        "au maximum deux décimales",
      );
      return errorId;
    });

    expect(new Set(errorIds).size).toBe(21);
  });

  it("links a missing zero justification to a visible field error", () => {
    const justificationA = controlByLabel<HTMLTextAreaElement>(
      container,
      "Justification des montants nuls",
    );
    change(justificationA, "");

    expect(justificationA.getAttribute("aria-invalid")).toBe("true");
    const errorId = justificationA.getAttribute("aria-errormessage");
    expect(errorId).not.toBeNull();
    expect(document.getElementById(errorId!)?.textContent).toContain(
      "Expliquez ce zéro",
    );
  });

  it("copies the personalized complete template without a network request", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });
    const fetchSpy = vi.spyOn(globalThis, "fetch");

    change(
      controlByLabel<HTMLInputElement>(container, "Nom du projet"),
      "Portail Réseau",
    );
    change(
      controlByLabel<HTMLInputElement>(
        container,
        "Personne qui décide et accepte",
      ),
      "Sonia, directrice générale",
    );

    await act(async () => {
      buttonByText(container, "Copier la trame prête").click();
      await Promise.resolve();
    });

    expect(writeText).toHaveBeenCalledOnce();
    expect(writeText.mock.calls[0][0]).toContain(
      "# Cahier des charges SaaS — Portail Réseau",
    );
    expect(writeText.mock.calls[0][0]).toContain("Sonia, directrice générale");
    expect(writeText.mock.calls[0][0]).toContain("## 13. Double sortie");
    expect(fetchSpy).not.toHaveBeenCalled();
    expect(container.textContent).toContain("La trame complète a été copiée");
  });

  it("copies the qualified comparison locally without a false verdict", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });
    const fetchSpy = vi.spyOn(globalThis, "fetch");

    await act(async () => {
      buttonByText(container, "Copier le comparatif prêt").click();
      await Promise.resolve();
    });

    expect(writeText).toHaveBeenCalledOnce();
    expect(writeText.mock.calls[0][0]).toContain("Aucun classement");
    expect(writeText.mock.calls[0][0]).toContain("## Inclus dans le calcul");
    expect(writeText.mock.calls[0][0]).toContain(
      "## Exclus du calcul sauf saisie",
    );
    expect(writeText.mock.calls[0][0]).not.toContain("meilleure offre");
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it("generates the template, filled example and comparison Markdown files locally", () => {
    vi.useFakeTimers();
    const downloads: Array<{ href: string; download: string }> = [];
    const createObjectUrl = vi
      .spyOn(URL, "createObjectURL")
      .mockReturnValueOnce("blob:saas-template")
      .mockReturnValueOnce("blob:saas-example")
      .mockReturnValueOnce("blob:saas-comparison");
    const revokeObjectUrl = vi.spyOn(URL, "revokeObjectURL");
    vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(function (
      this: HTMLAnchorElement,
    ) {
      downloads.push({ href: this.href, download: this.download });
    });
    const fetchSpy = vi.spyOn(globalThis, "fetch");

    change(
      controlByLabel<HTMLInputElement>(container, "Nom du projet"),
      "Café Réseau",
    );
    act(() => {
      buttonByText(container, "Télécharger la trame (.md)").click();
      buttonByText(container, "Télécharger l’exemple DossierClair").click();
      buttonByText(container, "Télécharger le comparatif (.md)").click();
    });

    expect(createObjectUrl).toHaveBeenCalledTimes(3);
    for (const [blob] of createObjectUrl.mock.calls) {
      expect(blob).toBeInstanceOf(Blob);
      expect((blob as Blob).type).toBe("text/markdown;charset=utf-8");
    }
    expect(downloads).toEqual([
      {
        href: "blob:saas-template",
        download: "cahier-des-charges-saas-cafe-reseau.md",
      },
      {
        href: "blob:saas-example",
        download: "exemple-rempli-cahier-des-charges-saas-dossierclair.md",
      },
      {
        href: "blob:saas-comparison",
        download: "comparaison-offres-saas-24-mois.md",
      },
    ]);
    vi.runAllTimers();
    expect(revokeObjectUrl).toHaveBeenNthCalledWith(1, "blob:saas-template");
    expect(revokeObjectUrl).toHaveBeenNthCalledWith(2, "blob:saas-example");
    expect(revokeObjectUrl).toHaveBeenNthCalledWith(3, "blob:saas-comparison");
    vi.useRealTimers();
    expect(fetchSpy).not.toHaveBeenCalled();
  });
});
