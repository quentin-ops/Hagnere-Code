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
import { ConversionReconciliationTool } from "./ConversionReconciliationTool";

type FormControl = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

function controlAfterText<T extends FormControl>(
  container: HTMLElement,
  text: string,
  selector = "input, select, textarea",
) {
  const label = [...container.querySelectorAll("label")].find((candidate) =>
    candidate.textContent?.includes(text),
  );
  const control = label?.querySelector(selector);
  if (!control) throw new Error(`Contrôle introuvable : ${text}`);
  return control as T;
}

function change(control: FormControl, value: string) {
  act(() => {
    const prototype =
      control instanceof HTMLSelectElement
        ? HTMLSelectElement.prototype
        : control instanceof HTMLTextAreaElement
          ? HTMLTextAreaElement.prototype
          : HTMLInputElement.prototype;
    Object.getOwnPropertyDescriptor(prototype, "value")?.set?.call(
      control,
      value,
    );
    control.dispatchEvent(new Event("change", { bubbles: true }));
    control.dispatchEvent(new Event("input", { bubbles: true }));
  });
}

function buttonAfterText(container: HTMLElement, text: string) {
  const button = [...container.querySelectorAll("button")].find((candidate) =>
    candidate.textContent?.includes(text),
  );
  if (!button) throw new Error(`Bouton introuvable : ${text}`);
  return button;
}

function completeContext(container: HTMLElement) {
  change(controlAfterText(container, "Date de début"), "2026-06-01");
  change(controlAfterText(container, "Date de fin"), "2026-06-30");
  change(controlAfterText(container, "Date de l’observation"), "2026-07-21");
  act(() =>
    controlAfterText<HTMLInputElement>(
      container,
      "Oui, le délai est passé pour tous",
    ).click(),
  );
}

function completeCaseSheet(container: HTMLElement) {
  change(
    controlAfterText(container, "Référence interne du dossier (case_id)"),
    "DOSSIER-2026-001",
  );
  change(
    controlAfterText(container, "Fonction responsable"),
    "Direction commerciale",
  );
  change(
    controlAfterText<HTMLTextAreaElement>(
      container,
      "Ce que votre entreprise compte comme une vente",
      "textarea",
    ),
    "Acompte encaissé et commande validée",
  );
  const stageCards = [...container.querySelectorAll("div.rounded-xl")].filter(
    (candidate) => candidate.textContent?.includes("1. Événements envoyés"),
  );
  const firstStage = stageCards.at(-1);
  if (!firstStage) throw new Error("Première étape de la fiche introuvable");
  change(
    firstStage.querySelector('input[type="date"]') as HTMLInputElement,
    "2026-07-01",
  );
  change(
    firstStage.querySelector("textarea") as HTMLTextAreaElement,
    "Journal EVT-001",
  );
  const salesStage = [...container.querySelectorAll("div.rounded-xl")]
    .filter((candidate) =>
      candidate.textContent?.includes("6. Ventes conclues"),
    )
    .at(-1);
  if (!salesStage) throw new Error("Étape de vente introuvable");
  change(
    salesStage.querySelector('input[type="date"]') as HTMLInputElement,
    "2026-07-05",
  );
  change(
    salesStage.querySelector("textarea") as HTMLTextAreaElement,
    "Acompte PAY-001",
  );
  change(
    controlAfterText(
      container,
      "Référence interne vers l’identifiant publicitaire",
    ),
    "REF-IDPUB-001",
  );
  const importLabels = [
    "Envoi du lot",
    "Acceptation par Google Ads",
    "Correspondance trouvée par Google",
    "Attribution à la campagne",
    "Visibilité dans le rapport",
  ];
  importLabels.forEach((label, index) => {
    const card = [...container.querySelectorAll("div.rounded-lg")].find(
      (candidate) =>
        candidate.textContent?.includes(`${index + 1}. ${label}`) &&
        candidate.querySelector("select"),
    );
    if (!card) throw new Error(`Contrôle d’import introuvable : ${label}`);
    change(card.querySelector("select") as HTMLSelectElement, "confirmed");
    const refreshedCard = [
      ...container.querySelectorAll("div.rounded-lg"),
    ].find(
      (candidate) =>
        candidate.textContent?.includes(`${index + 1}. ${label}`) &&
        candidate.querySelector('input[type="date"]'),
    );
    if (!refreshedCard) {
      throw new Error(`Preuves du contrôle introuvables : ${label}`);
    }
    change(
      refreshedCard.querySelector('input[type="date"]') as HTMLInputElement,
      `2026-07-${String(index + 6).padStart(2, "0")}`,
    );
    change(
      refreshedCard.querySelector('input[type="text"]') as HTMLInputElement,
      `Preuve import ${index + 1}`,
    );
  });
  change(
    controlAfterText<HTMLTextAreaElement>(
      container,
      "Prochaine action",
      "textarea",
    ),
    "Vérifier le rapport vendredi",
  );
}

describe("ConversionReconciliationTool", () => {
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
    act(() => root.render(<ConversionReconciliationTool />));
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
    vi.restoreAllMocks();
  });

  it("starts with the example volumes but blocks results until context is complete", () => {
    const numberInputs = [
      ...container.querySelectorAll<HTMLInputElement>('input[type="number"]'),
    ];

    expect(numberInputs.map((input) => input.value)).toEqual([
      "72",
      "68",
      "60",
      "18",
      "9",
      "4",
    ]);
    expect(container.textContent).toContain("Avant de lire les taux");
    expect(container.textContent).toContain("Indiquez la date de début");
    expect(buttonAfterText(container, "Copier la synthèse").disabled).toBe(
      true,
    );
    expect(container.querySelectorAll("ol > li")).toHaveLength(0);
    expect(container.querySelector("table")).toBeNull();
  });

  it("reveals the six vertical result cards after valid dates and status", () => {
    completeContext(container);

    expect(container.querySelectorAll("ol > li")).toHaveLength(6);
    expect(container.textContent).toContain("94,4 %");
    expect(container.textContent).toContain(
      "Tous les dossiers ont eu le délai prévu",
    );
    expect(buttonAfterText(container, "Copier la synthèse").disabled).toBe(
      false,
    );
  });

  it("treats a blank as unknown and copies it without changing it to zero", async () => {
    completeContext(container);
    const requests = controlAfterText<HTMLInputElement>(
      container,
      "Demandes reçues",
    );
    change(requests, "");
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });

    expect(requests.getAttribute("aria-invalid")).toBe("false");
    expect(container.textContent).toContain(
      "Premier passage impossible à vérifier",
    );
    expect(container.textContent).toContain(
      "Événements envoyés → Demandes reçues",
    );
    expect(container.textContent).toContain("Inconnu");

    await act(async () =>
      buttonAfterText(container, "Copier la synthèse").click(),
    );
    const copied = writeText.mock.calls[0][0] as string;
    expect(copied).toContain("Demandes reçues : inconnu");
    expect(copied).toContain("Premier passage non vérifiable");
    expect(copied).not.toContain("Demandes reçues : 0");
  });

  it("refuses negative, decimal and increasing known values", () => {
    completeContext(container);
    const requests = controlAfterText<HTMLInputElement>(
      container,
      "Demandes reçues",
    );

    change(requests, "-1");
    expect(container.textContent).toContain("ne peut pas être négatif");
    change(requests, "67.5");
    expect(container.textContent).toContain("doit être un nombre entier");
    change(requests, "73");
    expect(container.textContent).toContain(
      "Le volume « Demandes reçues » (73) dépasse le dernier volume connu « Événements envoyés » (72)",
    );
    expect(buttonAfterText(container, "Copier la synthèse").disabled).toBe(
      true,
    );
  });

  it("keeps zero valid and explains why a zero-base rate cannot be divided", () => {
    completeContext(container);
    const inputs = [
      ...container.querySelectorAll<HTMLInputElement>('input[type="number"]'),
    ];
    inputs.forEach((input) => change(input, "0"));

    expect(container.textContent).toContain(
      "Non calculable : étape précédente à zéro",
    );
    expect(container.textContent).not.toContain("Un nombre doit être corrigé");
    expect(buttonAfterText(container, "Copier la synthèse").disabled).toBe(
      false,
    );
  });

  it("blocks reversed dates and an unknown follow-up status", () => {
    change(controlAfterText(container, "Date de début"), "2026-07-02");
    change(controlAfterText(container, "Date de fin"), "2026-07-01");
    change(controlAfterText(container, "Date de l’observation"), "2026-06-30");

    expect(container.textContent).toContain(
      "La date de fin ne peut pas précéder",
    );
    expect(container.textContent).toContain("date d’observation doit être");
    expect(container.textContent).toContain("Précisez si tous les dossiers");
    expect(buttonAfterText(container, "Copier la synthèse").disabled).toBe(
      true,
    );
  });

  it("copies a dated, cautious summary and reports clipboard failure", async () => {
    completeContext(container);
    const writeText = vi
      .fn()
      .mockResolvedValueOnce(undefined)
      .mockRejectedValueOnce(new Error("refusé"));
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });

    await act(async () =>
      buttonAfterText(container, "Copier la synthèse").click(),
    );
    const copied = writeText.mock.calls[0][0] as string;
    expect(copied).toContain("Début de la période : 2026-06-01");
    expect(copied).toContain("essais internes");
    expect(copied).toContain("ne prouve pas une panne");
    expect(copied).not.toMatch(/cohorte|périmètre|recette/i);
    expect(container.textContent).toContain("Synthèse copiée");

    await act(async () =>
      buttonAfterText(container, "Copier la synthèse").click(),
    );
    expect(container.textContent).toContain("La copie automatique a échoué");
  });

  it("copies a useful case sheet with separated identifiers", async () => {
    completeCaseSheet(container);
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });

    await act(async () =>
      buttonAfterText(container, "Copier la fiche de ce dossier").click(),
    );

    const copied = writeText.mock.calls[0][0] as string;
    expect(copied).toContain("Référence interne (case_id) : DOSSIER-2026-001");
    expect(copied).toContain("Événements envoyés — date : 2026-07-01");
    expect(copied).toContain(
      "Référence interne vers l’identifiant publicitaire : REF-IDPUB-001",
    );
    expect(copied).toContain("Référence propre à l’import : inconnu");
    expect(copied).toContain(
      "Définition de la vente : Acompte encaissé et commande validée",
    );
    expect(copied).toContain("Envoi du lot — état : Confirmé");
    expect(copied).toContain("Acceptation par Google Ads — état : Confirmé");
    expect(copied).toContain(
      "Correspondance trouvée par Google — état : Confirmé",
    );
    expect(copied).toContain("Attribution à la campagne — état : Confirmé");
    expect(copied).toContain("Visibilité dans le rapport — état : Confirmé");
    expect(copied).toContain("Statut de la marge : Inconnue");
    expect(copied).toContain("Valeur de marge : inconnue");
    expect(copied).toContain("Prochaine action : Vérifier le rapport vendredi");
    expect(copied).toContain("SANS COORDONNÉE CLIENT");
    expect(container.textContent).toContain("Fiche du dossier copiée");
  });

  it("refuses to copy an empty case sheet and explains every missing part", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });

    await act(async () =>
      buttonAfterText(container, "Copier la fiche de ce dossier").click(),
    );

    expect(writeText).not.toHaveBeenCalled();
    expect(container.textContent).toContain(
      "La fiche n’est pas encore copiable",
    );
    expect(container.textContent).toContain("référence interne");
    expect(container.textContent).toContain("fonction responsable");
    expect(container.textContent).toContain(
      "Définissez ce que votre entreprise",
    );
    expect(container.textContent).toContain("au moins une étape avec sa date");
  });

  it("copies a fully documented actual margin outside the six volumes", async () => {
    completeCaseSheet(container);
    change(
      controlAfterText<HTMLSelectElement>(
        container,
        "Statut de la marge",
        "select",
      ),
      "actual",
    );
    change(controlAfterText(container, "Date de la marge"), "2026-07-06");
    change(controlAfterText(container, "Valeur de marge en euros"), "1250");
    change(
      controlAfterText(container, "Formule utilisée"),
      "CA HT - achats - sous-traitance",
    );
    change(
      controlAfterText<HTMLTextAreaElement>(
        container,
        "Preuve ou référence du calcul",
        "textarea",
      ),
      "Calcul MARGE-001",
    );
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });

    await act(async () =>
      buttonAfterText(container, "Copier la fiche de ce dossier").click(),
    );

    const copied = writeText.mock.calls[0][0] as string;
    expect(copied).toContain("MARGE DU DOSSIER — HORS DES SIX VOLUMES");
    expect(copied).toContain("Statut de la marge : Réelle");
    expect(copied).toContain("Date de la marge : 2026-07-06");
    expect(copied).toContain("Valeur de marge : 1 250 €");
    expect(copied).toContain("Preuve ou référence de marge : Calcul MARGE-001");
  });

  it("resets context, volumes and the case sheet", () => {
    completeContext(container);
    completeCaseSheet(container);
    change(controlAfterText(container, "Événements envoyés"), "12");

    act(() => buttonAfterText(container, "Réinitialiser l’outil").click());

    expect(controlAfterText(container, "Date de début").value).toBe("");
    expect(controlAfterText(container, "Événements envoyés").value).toBe("72");
    expect(
      controlAfterText(container, "Référence interne du dossier (case_id)")
        .value,
    ).toBe("");
    expect(
      controlAfterText<HTMLInputElement>(container, "Je ne sais pas encore")
        .checked,
    ).toBe(true);
  });

  it("never transmits values and creates local files only after explicit clicks", async () => {
    const fetchSpy = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValue(new Response(null, { status: 204 }));
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });
    const createObjectURL = vi
      .fn()
      .mockReturnValueOnce("blob:summary")
      .mockReturnValueOnce("blob:case");
    const revokeObjectURL = vi.fn();
    Object.defineProperty(URL, "createObjectURL", {
      configurable: true,
      value: createObjectURL,
    });
    Object.defineProperty(URL, "revokeObjectURL", {
      configurable: true,
      value: revokeObjectURL,
    });
    const clickSpy = vi
      .spyOn(HTMLAnchorElement.prototype, "click")
      .mockImplementation(() => undefined);
    const downloadedFilenames: string[] = [];
    clickSpy.mockImplementation(function (this: HTMLAnchorElement) {
      downloadedFilenames.push(this.download);
    });
    completeContext(container);
    change(controlAfterText(container, "Libellé interne"), "Campagnes France");
    completeCaseSheet(container);

    expect(createObjectURL).not.toHaveBeenCalled();
    await act(async () =>
      buttonAfterText(container, "Copier la synthèse").click(),
    );
    await act(async () =>
      buttonAfterText(container, "Copier la fiche de ce dossier").click(),
    );
    expect(createObjectURL).not.toHaveBeenCalled();
    act(() =>
      buttonAfterText(container, "Télécharger la synthèse (.txt)").click(),
    );
    act(() =>
      buttonAfterText(container, "Télécharger la fiche (.txt)").click(),
    );

    expect(fetchSpy).not.toHaveBeenCalled();
    expect(createObjectURL).toHaveBeenCalledTimes(2);
    expect(revokeObjectURL.mock.calls).toEqual([
      ["blob:summary"],
      ["blob:case"],
    ]);
    expect(clickSpy).toHaveBeenCalledTimes(2);
    expect(downloadedFilenames).toEqual([
      "registre-conversions-campagnes-france-2026-06-01-2026-06-30-v1.txt",
      "fiche-preuve-conversion-dossier-2026-001-2026-07-10-v1.txt",
    ]);
    const downloadedTexts = await Promise.all(
      createObjectURL.mock.calls.map(([blob]) => (blob as Blob).text()),
    );
    expect(downloadedTexts[0]).toContain("Début de la période : 2026-06-01");
    expect(downloadedTexts[1]).toContain(
      "Référence interne (case_id) : DOSSIER-2026-001",
    );
    expect(container.querySelector("form")).toBeNull();
    expect(container.querySelector("a[download]")).toBeNull();
    expect(container.textContent).toContain("aucune donnée envoyée");
    expect(container.textContent).toContain(
      "Synthèse téléchargée en fichier texte",
    );
    expect(container.textContent).toContain(
      "Fiche téléchargée en fichier texte",
    );
  });

  it("keeps every button at least 44 pixels high", () => {
    const buttons = [...container.querySelectorAll("button")];
    expect(buttons).toHaveLength(5);
    expect(
      buttons.every((button) => button.className.includes("min-h-11")),
    ).toBe(true);
  });
});
