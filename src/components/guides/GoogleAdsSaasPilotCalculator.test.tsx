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
import { GoogleAdsSaasPilotCalculator } from "./GoogleAdsSaasPilotCalculator";

const euro = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 2,
});

function inputNamed(container: HTMLElement, name: string) {
  const label = [...container.querySelectorAll("label")].find((candidate) =>
    candidate.textContent?.includes(name),
  );
  const input = label?.htmlFor
    ? document.getElementById(label.htmlFor)
    : undefined;

  if (!(input instanceof HTMLInputElement)) {
    throw new Error(`Champ introuvable : ${name}`);
  }
  return input;
}

function checkboxNamed(container: HTMLElement, name: string) {
  const label = [...container.querySelectorAll("label")].find(
    (candidate) =>
      candidate.textContent?.includes(name) &&
      candidate.querySelector('input[type="checkbox"]'),
  );
  const input = label?.querySelector('input[type="checkbox"]');

  if (!(input instanceof HTMLInputElement)) {
    throw new Error(`Case introuvable : ${name}`);
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

function buttonNamed(container: HTMLElement, name: string) {
  const button = [...container.querySelectorAll("button")].find((candidate) =>
    candidate.textContent?.includes(name),
  );

  if (!(button instanceof HTMLButtonElement)) {
    throw new Error(`Bouton introuvable : ${name}`);
  }
  return button;
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

function confirmOperationalReadiness(container: HTMLElement) {
  for (const name of [
    "Mesure exploitable",
    "Offre qualifiable",
    "Capacité commerciale disponible",
  ]) {
    const checkbox = checkboxNamed(container, name);
    if (!checkbox.checked) {
      act(() => checkbox.click());
    }
  }
}

describe("GoogleAdsSaasPilotCalculator", () => {
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
    act(() => root.render(<GoogleAdsSaasPilotCalculator />));
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it("groups and labels every editable number for keyboard users", () => {
    const inputs = [
      ...container.querySelectorAll<HTMLInputElement>('input[type="text"]'),
    ];

    expect(inputs).toHaveLength(23);
    expect(container.querySelectorAll("fieldset")).toHaveLength(7);

    for (const input of inputs) {
      expect(input.id).not.toBe("");
      expect(
        [...container.querySelectorAll("label")].some(
          (label) => label.htmlFor === input.id,
        ),
      ).toBe(true);
      const helpId = input.getAttribute("aria-describedby");
      expect(helpId).toBeTruthy();
      expect(document.getElementById(helpId ?? "")).not.toBeNull();
    }
  });

  it("starts with the complete fictitious AtelierFlow example", () => {
    expect(inputNamed(container, "Dépense média de la cohorte").value).toBe(
      "12000",
    );
    expect(
      inputNamed(container, "Autres coûts d’acquisition de la cohorte").value,
    ).toBe("12000");
    expect(inputNamed(container, "Clics de la même cohorte").value).toBe(
      "2000",
    );
    expect(inputNamed(container, "Clients encore présents à M12").value).toBe(
      "2",
    );
    expect(inputNamed(container, "SQL acceptés par les ventes").value).toBe(
      "16",
    );
    expect(
      inputNamed(container, "Opportunités commerciales ouvertes").value,
    ).toBe("8");
    expect(inputNamed(container, "Clients signés").value).toBe("4");
    expect(container.textContent).toContain(
      "AtelierFlow est un cas entièrement fictif",
    );
    expect(container.textContent).toContain(
      "ni des tarifs de marché, ni un devis, ni une recommandation",
    );
  });

  it("shows the 24k funnel metrics and the exact three TCO horizons", () => {
    expect(container.textContent).toContain(euro.format(300));
    expect(container.textContent).toContain(euro.format(1500));
    expect(container.textContent).toContain(euro.format(3000));
    expect(container.textContent).toContain(euro.format(6000));
    expect(container.textContent).toContain(euro.format(8000));
    expect(container.textContent).toContain(euro.format(12000));
    expect(container.textContent).toContain("8,89 mois");
    expect(container.textContent).toContain("12,89 mois");
    expect(container.textContent).toContain(euro.format(96000));
    expect(container.textContent).toContain(euro.format(272000));
    expect(container.textContent).toContain(euro.format(448000));
  });

  it("refuses an automatic green light for the default fictitious scenario", () => {
    const status = container.querySelector('[role="status"]');

    expect(status?.getAttribute("aria-live")).toBe("polite");
    expect(status?.textContent).toContain(
      "Réparer la mesure, l’offre ou la capacité",
    );
    expect(checkboxNamed(container, "Mesure exploitable").checked).toBe(false);
    expect(checkboxNamed(container, "Offre qualifiable").checked).toBe(false);
    expect(
      checkboxNamed(container, "Capacité commerciale disponible").checked,
    ).toBe(false);
  });

  it("keeps an empty amount unknown and links its exact error", () => {
    const cost = inputNamed(container, "Dépense média de la cohorte");
    fill(cost, "");

    expect(cost.value).toBe("");
    expect(cost.getAttribute("aria-invalid")).toBe("true");
    const errorId = cost.getAttribute("aria-errormessage");
    expect(errorId).toBeTruthy();
    expect(document.getElementById(errorId ?? "")?.textContent).toContain(
      "Une case vide ne vaut pas zéro",
    );
    expect(
      [...container.querySelectorAll('[role="alert"]')].some((alert) =>
        alert.textContent?.includes("Aucun verdict"),
      ),
    ).toBe(true);
    expect(
      buttonNamed(container, "Télécharger la note Markdown").disabled,
    ).toBe(true);
  });

  it("rejects an invalid string instead of partially parsing it", () => {
    const run = inputNamed(container, "Coût d’exploitation annuel");
    fill(run, "88 000 euros");

    expect(run.getAttribute("aria-invalid")).toBe("true");
    expect(
      document.getElementById(run.getAttribute("aria-errormessage") ?? "")
        ?.textContent,
    ).toContain("sans texte, exposant ni séparateur de milliers");
    expect(container.textContent).toContain("Aucun verdict");
    expect(container.textContent).not.toContain("88 000 euros €");
  });

  it("enforces the 0 to 100 rate boundary with an exact error", () => {
    const rate = inputNamed(
      container,
      "Part minimale de leads correspondant à l’ICP",
    );
    fill(rate, "101");

    expect(rate.getAttribute("aria-invalid")).toBe("true");
    expect(
      document.getElementById(rate.getAttribute("aria-errormessage") ?? "")
        ?.textContent,
    ).toContain("compris entre 0 et 100 %");
    expect(container.textContent).toContain("Aucun verdict");
  });

  it("focuses the first invalid field when the reader asks for review", () => {
    const cost = inputNamed(container, "Dépense média de la cohorte");
    const run = inputNamed(container, "Coût d’exploitation annuel");
    fill(cost, "");
    fill(run, "");

    act(() =>
      buttonNamed(container, "Vérifier la décision et les erreurs").click(),
    );

    expect(document.activeElement).toBe(cost);
  });

  it("stops a mature zero-sale cohort without inventing unit costs", () => {
    confirmOperationalReadiness(container);
    for (const name of [
      "Leads reçus",
      "Leads correspondant à l’ICP",
      "SQL acceptés par les ventes",
      "Opportunités commerciales ouvertes",
      "Clients signés",
      "Clients activés",
      "Clients encore présents à M12",
    ]) {
      fill(inputNamed(container, name), "0");
    }

    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "Arrêter",
    );
    expect(container.textContent).toContain("Non calculable");
    expect(
      buttonNamed(container, "Télécharger la note Markdown").disabled,
    ).toBe(false);
    expect(container.textContent).not.toContain("Infinity");
  });

  it("asks to repair when measurement is not ready", () => {
    confirmOperationalReadiness(container);
    const measurement = checkboxNamed(container, "Mesure exploitable");
    act(() => measurement.click());

    expect(measurement.checked).toBe(false);
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "Réparer la mesure, l’offre ou la capacité",
    );
  });

  it("extends an open cohort under condition instead of declaring failure", () => {
    confirmOperationalReadiness(container);
    const running = radioNamed(container, "Cohorte en cours");
    act(() => running.click());
    fill(inputNamed(container, "Clients encore présents à M12"), "");

    expect(running.checked).toBe(true);
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "Attendre la maturité, budget plafonné",
    );
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "date et un événement de maturité",
    );
    expect(container.textContent).toContain("Non observable à ce stade");
  });

  it("stops the mature cohort when a user threshold is crossed", () => {
    confirmOperationalReadiness(container);
    const maxCac = inputNamed(
      container,
      "CAC maximal par client présent à M12",
    );
    fill(maxCac, "11999");

    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "Arrêter",
    );
    expect(container.textContent).toContain("Hors seuil");
  });

  it("widens only by one step for a mature cohort inside every threshold", () => {
    confirmOperationalReadiness(container);

    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "Élargir par palier",
    );
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "retour en arrière",
    );
  });

  it("keeps the result layout intrinsically responsive without a wide table", () => {
    const outer = container.querySelector("section");

    expect(outer?.className).toContain("min-w-0");
    expect(outer?.className).toContain("overflow-hidden");
    expect(container.querySelector("table")).toBeNull();
    expect(container.querySelectorAll(".min-w-0").length).toBeGreaterThan(10);
  });

  it("shows the three exact editorial sensitivities from one source", () => {
    expect(container.textContent).toContain("Conversion de la page");
    expect(container.textContent).toContain("2,25");
    expect(container.textContent).toContain(euro.format(10666.666666));
    expect(container.textContent).toContain("11,85 mois");

    expect(container.textContent).toContain("Passage SQL → opportunité");
    expect(container.textContent).toContain("1,5");
    expect(container.textContent).toContain(euro.format(16000));
    expect(container.textContent).toContain("17,78 mois");

    expect(container.textContent).toContain("CPC à budget média constant");
    expect(container.textContent).toContain("1 600");
    expect(container.textContent).toContain("2,4");
    expect(container.textContent).toContain(euro.format(10000));
    expect(container.textContent).toContain("11,11 mois");
  });

  it("downloads a BOM-prefixed UTF-8 Markdown file locally", async () => {
    vi.useFakeTimers();
    const createObjectUrl = vi
      .spyOn(URL, "createObjectURL")
      .mockReturnValue("blob:google-ads-saas-pilot");
    const revokeObjectUrl = vi.spyOn(URL, "revokeObjectURL");
    const click = vi
      .spyOn(HTMLAnchorElement.prototype, "click")
      .mockImplementation(() => undefined);
    const fetchSpy = vi.spyOn(globalThis, "fetch");
    const storageSpy = vi.spyOn(Storage.prototype, "setItem");

    act(() => buttonNamed(container, "Télécharger la note Markdown").click());

    expect(createObjectUrl).toHaveBeenCalledOnce();
    const blob = createObjectUrl.mock.calls[0]?.[0];
    expect(blob).toBeInstanceOf(Blob);
    expect((blob as Blob).type).toBe("text/markdown;charset=utf-8");
    const contents = await (blob as Blob).text();
    expect(contents.charCodeAt(0)).toBe(0xfeff);
    expect(contents).toContain(
      "# Note de décision — pilote d’acquisition SaaS B2B",
    );
    expect(click).toHaveBeenCalledOnce();
    expect(
      document.querySelector(
        'a[download="decision-pilote-google-ads-saas-b2b.md"]',
      ),
    ).toBeNull();
    expect(revokeObjectUrl).not.toHaveBeenCalled();
    act(() => vi.runAllTimers());
    expect(revokeObjectUrl).toHaveBeenCalledWith("blob:google-ads-saas-pilot");
    expect(fetchSpy).not.toHaveBeenCalled();
    expect(storageSpy).not.toHaveBeenCalled();
    expect(container.textContent).toContain(
      "Le fichier Markdown UTF-8 a été préparé sur votre appareil",
    );
  });

  it("contains no false causal or best-channel claim", () => {
    const copy = container.textContent?.toLowerCase() ?? "";

    expect(copy).toContain("pas preuve de causalité");
    expect(copy).toContain(
      "le calcul ne prouve pas que google ads les a créés",
    );
    expect(copy).not.toContain("meilleur canal");
    expect(copy).not.toContain("google ads a généré");
    expect(copy).not.toContain("google ads a créé");
  });

  it("restores every initial assumption after a reset", () => {
    const cost = inputNamed(container, "Dépense média de la cohorte");
    const running = radioNamed(container, "Cohorte en cours");
    fill(cost, "999");
    act(() => running.click());

    act(() => buttonNamed(container, "Réinitialiser l’exemple fictif").click());

    expect(cost.value).toBe("12000");
    expect(radioNamed(container, "Cohorte déclarée mature").checked).toBe(true);
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "Réparer la mesure, l’offre ou la capacité",
    );
    expect(checkboxNamed(container, "Mesure exploitable").checked).toBe(false);
  });
});
