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
import { LandingPageContinuityWorksheet } from "./LandingPageContinuityWorksheet";

type FormControl = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

function buttonAfterText(container: HTMLElement, text: string) {
  const button = [...container.querySelectorAll("button")].find((candidate) =>
    candidate.textContent?.includes(text),
  );
  if (!button) throw new Error(`Bouton introuvable : ${text}`);
  return button;
}

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

function expectLinkedError(control: FormControl, expectedMessage: string) {
  expect(control.getAttribute("aria-invalid")).toBe("true");
  const describedBy = control.getAttribute("aria-describedby");
  expect(describedBy).toBeTruthy();
  const descriptions = describedBy
    ?.split(/\s+/)
    .map((id) => document.getElementById(id)?.textContent?.trim())
    .filter(Boolean);
  expect(descriptions).toContain(expectedMessage);
}

describe("LandingPageContinuityWorksheet", () => {
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
    act(() => root.render(<LandingPageContinuityWorksheet />));
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
    vi.restoreAllMocks();
  });

  it("starts empty, explains local-only handling and never declares the page ready", () => {
    expect(container.textContent).toContain(
      "Fiche locale · aucune donnée envoyée ou enregistrée",
    );
    expect(container.textContent).toContain(
      "Corriger la page ou compléter la fiche, puis retester",
    );
    expect(container.textContent).toContain("point");
    expect(
      controlAfterText<HTMLInputElement>(container, "Recherche représentative")
        .value,
    ).toBe("");
    expect(
      controlAfterText<HTMLInputElement>(
        container,
        "Recherche représentative",
      ).getAttribute("aria-invalid"),
    ).toBeNull();
    expect(container.querySelector("table")).toBeNull();
  });

  it("uses ordinary labels and links each invalid control to its exact local cause", () => {
    act(() => buttonAfterText(container, "Vérifier la fiche").click());

    expect(container.textContent).toContain(
      "Largeur affichée de la page, en pixels",
    );
    expect(container.textContent).toContain(
      "relevez le nombre affiché près du modèle choisi",
    );
    expect(container.textContent).toContain(
      "Utilisation avec la touche Tab et contour visible",
    );
    expect(container.textContent).toContain("lecteur d’écran");
    expect(container.textContent).toContain(
      "Cookies et autres traceurs publicitaires",
    );
    expect(container.textContent).toContain(
      "si une balise Google Ads dépose un traceur",
    );
    expect(container.textContent).not.toContain("Largeur en px CSS");
    expect(container.textContent).not.toContain("Clavier et focus visible");
    expect(container.textContent).not.toContain("nom accessible");

    expectLinkedError(
      controlAfterText<HTMLInputElement>(container, "Recherche représentative"),
      "Indiquez une recherche représentative.",
    );
    expectLinkedError(
      controlAfterText<HTMLInputElement>(
        container,
        "Largeur affichée de la page, en pixels",
      ),
      "Indiquez la largeur affichée de la page, en pixels.",
    );
    expectLinkedError(
      controlAfterText<HTMLInputElement>(
        container,
        "Annonce ou groupe examiné",
      ),
      "Nommez l’annonce ou le groupe d’annonces examiné.",
    );
    expectLinkedError(
      controlAfterText<HTMLInputElement>(
        container,
        "Titres, descriptions et autres composants de chaque annonce active",
      ),
      "Les annonces actives n’ont pas été inventoriées.",
    );
    expectLinkedError(
      controlAfterText<HTMLSelectElement>(
        container,
        "Adaptation du texte active, héritée ou absente",
        "select",
      ),
      "L’état actif, hérité ou absent de l’adaptation du texte n’a pas été vérifié.",
    );
    expectLinkedError(
      controlAfterText<HTMLInputElement>(container, "Texte exact"),
      "Ligne 1 : renseignez le texte exact.",
    );
    expectLinkedError(
      controlAfterText<HTMLSelectElement>(
        container,
        "État du test : Téléphone et connexion représentatifs",
        "select",
      ),
      "Téléphone et connexion représentatifs : test non renseigné.",
    );

    const invalidControls = [
      ...container.querySelectorAll<FormControl>("[aria-invalid='true']"),
    ];
    expect(invalidControls.length).toBeGreaterThan(20);
    invalidControls.forEach((control) => {
      const ids = control.getAttribute("aria-describedby")?.split(/\s+/) ?? [];
      expect(
        ids.some(
          (id) => id.endsWith("-error") && document.getElementById(id) !== null,
        ),
      ).toBe(true);
    });

    const errorIds = [
      ...container.querySelectorAll<HTMLElement>("[id$='-error']"),
    ].map((element) => element.id);
    expect(new Set(errorIds).size).toBe(errorIds.length);

    const phoneStatus = controlAfterText<HTMLSelectElement>(
      container,
      "État du test : Téléphone et connexion représentatifs",
      "select",
    );
    change(phoneStatus, "passed");
    expectLinkedError(
      controlAfterText<HTMLTextAreaElement>(
        container,
        "Note ou référence du test",
        "textarea",
      ),
      "Téléphone et connexion représentatifs : consignez ce qui a été observé ou pourquoi le test ne s’applique pas.",
    );
  });

  it("loads the clearly fictitious example and changes the verdict when a line blocks", () => {
    act(() => buttonAfterText(container, "Charger l’exemple fictif").click());
    act(() => buttonAfterText(container, "Vérifier la fiche").click());

    expect(container.textContent).toContain(
      "ThermoBureau 73 n’est ni un client, ni une réalisation, ni un résultat Hagnéré Code",
    );
    expect(
      controlAfterText<HTMLInputElement>(container, "Recherche représentative")
        .value,
    ).toBe("entretien climatisation bureaux Chambéry");
    expect(
      [...container.querySelectorAll("button")].filter((button) =>
        button.textContent?.includes("Supprimer cette ligne"),
      ),
    ).toHaveLength(10);
    expect(container.textContent).toContain(
      "Une visite technique pour recenser vos équipements et préparer un entretien adapté.",
    );
    const textAdaptation = controlAfterText<HTMLSelectElement>(
      container,
      "Adaptation du texte active, héritée ou absente",
      "select",
    );
    expect(textAdaptation.value).toBe("absent");
    const aiMax = controlAfterText<HTMLSelectElement>(
      container,
      "AI Max pour Search",
      "select",
    );
    const finalUrlExpansion = () =>
      controlAfterText<HTMLSelectElement>(
        container,
        "Extension d’URL finale",
        "select",
      );
    expect(finalUrlExpansion().disabled).toBe(true);
    change(aiMax, "on");
    expect(finalUrlExpansion().disabled).toBe(false);
    expectLinkedError(
      controlAfterText<HTMLInputElement>(
        container,
        "URL incluses, exclues et réellement observées vérifiées",
        "input",
      ),
      "Les URL incluses, exclues et réellement utilisées n’ont pas été vérifiées.",
    );
    expect(
      controlAfterText<HTMLSelectElement>(
        container,
        "Adaptation du texte active, héritée ou absente",
        "select",
      ).value,
    ).toBe("absent");
    change(aiMax, "off");
    expect(finalUrlExpansion().disabled).toBe(true);
    expect(
      controlAfterText<HTMLSelectElement>(
        container,
        "Adaptation du texte active, héritée ou absente",
        "select",
      ).value,
    ).toBe("absent");
    expect(container.textContent).toContain(
      "Corriger la page ou compléter la fiche, puis retester",
    );

    const firstLine = [...container.querySelectorAll("details")].find(
      (details) =>
        details
          .querySelector(":scope > summary")
          ?.textContent?.includes("Ligne 1"),
    );
    if (!firstLine) throw new Error("Première ligne introuvable");
    const firstLineSelects = firstLine.querySelectorAll("select");
    const status = firstLineSelects.item(firstLineSelects.length - 1);
    if (!(status instanceof HTMLSelectElement)) {
      throw new Error("État de la première ligne introuvable");
    }
    change(status, "blocking");

    expect(container.textContent).toContain("Reporter la campagne");
    expect(container.textContent).toContain(
      "Affirmation bloquante : « Entretien climatisation »",
    );
    expectLinkedError(
      controlAfterText<HTMLTextAreaElement>(
        firstLine,
        "Correction à effectuer",
        "textarea",
      ),
      "Ligne 1 : indiquez la correction ou le premier blocage à traiter.",
    );

    act(() => buttonAfterText(container, "Ajouter une affirmation").click());
    expect(container.textContent).toContain("Ligne 11");
    expect(
      [...container.querySelectorAll("button")].filter((button) =>
        button.textContent?.includes("Supprimer cette ligne"),
      ),
    ).toHaveLength(11);
  });

  it("adds and removes dynamic assertion lines", () => {
    expect(
      [...container.querySelectorAll("button")].filter((button) =>
        button.textContent?.includes("Supprimer cette ligne"),
      ),
    ).toHaveLength(1);

    act(() => buttonAfterText(container, "Ajouter une affirmation").click());
    expect(
      [...container.querySelectorAll("button")].filter((button) =>
        button.textContent?.includes("Supprimer cette ligne"),
      ),
    ).toHaveLength(2);

    act(() => buttonAfterText(container, "Supprimer cette ligne").click());
    expect(
      [...container.querySelectorAll("button")].filter((button) =>
        button.textContent?.includes("Supprimer cette ligne"),
      ),
    ).toHaveLength(1);
  });

  it("copies context, lines, tests, unknowns and the decision when permission is granted", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });
    act(() => buttonAfterText(container, "Charger l’exemple fictif").click());

    await act(async () =>
      buttonAfterText(container, "Copier la synthèse complète").click(),
    );

    expect(writeText).toHaveBeenCalledTimes(1);
    const copied = writeText.mock.calls[0][0] as string;
    expect(copied).toContain("CONTEXTE");
    expect(copied).toContain("INVENTAIRE GOOGLE ADS");
    expect(copied).toContain("AFFIRMATIONS ET PAGES");
    expect(copied).toContain("TESTS AVANT LANCEMENT");
    expect(copied).toContain("INCONNUES");
    expect(copied).toContain("DÉCISION");
    expect(copied).toContain("ThermoBureau 73");
    expect(copied).toContain(
      "Une visite technique pour recenser vos équipements et préparer un entretien adapté.",
    );
    expect(container.textContent).toContain("Synthèse copiée");
    expect(container.textContent).not.toContain(
      "Synthèse à copier manuellement",
    );
  });

  it("shows a complete manual fallback when clipboard access is refused", async () => {
    const writeText = vi.fn().mockRejectedValue(new Error("Permission denied"));
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });
    act(() => buttonAfterText(container, "Charger l’exemple fictif").click());

    await act(async () =>
      buttonAfterText(container, "Copier la synthèse complète").click(),
    );

    expect(container.textContent).toContain(
      "La copie automatique a été refusée",
    );
    const fallback = controlAfterText<HTMLTextAreaElement>(
      container,
      "Synthèse à copier manuellement",
      "textarea",
    );
    expect(fallback.readOnly).toBe(true);
    expect(fallback.value).toContain("EXEMPLE ILLUSTRATIF FICTIF");
    expect(fallback.value).toContain("Demande reçue par la bonne personne");
  });

  it("prints an isolated, complete sheet and then resets every value", () => {
    const print = vi.fn(() => {
      const copy = document.body.querySelector<HTMLElement>(
        ":scope > .landing-page-continuity-print-copy",
      );
      expect(copy).not.toBeNull();
      expect(document.body.classList).toContain(
        "printing-landing-page-continuity",
      );
      expect(copy?.querySelector("button, details")).toBeNull();
      expect(copy?.textContent).toContain("CONTEXTE");
      expect(copy?.textContent).toContain("AFFIRMATIONS ET PAGES");
      expect(copy?.textContent).toContain("TESTS AVANT LANCEMENT");
      expect(copy?.textContent).toContain("INCONNUES");
      expect(copy?.textContent).toContain("DÉCISION");
      expect(copy?.textContent).toContain(
        "Une visite technique pour recenser vos équipements et préparer un entretien adapté.",
      );
    });
    Object.defineProperty(window, "print", {
      configurable: true,
      value: print,
    });
    act(() => buttonAfterText(container, "Charger l’exemple fictif").click());

    act(() => buttonAfterText(container, "Imprimer la fiche").click());
    expect(print).toHaveBeenCalledTimes(1);
    expect(
      document.body.querySelector(
        ":scope > .landing-page-continuity-print-copy",
      ),
    ).toBeNull();
    expect(document.body.classList).not.toContain(
      "printing-landing-page-continuity",
    );
    expect(
      container.querySelector(".landing-page-continuity-print-source"),
    ).toBeNull();
    expect(container.querySelector("style")?.textContent).toContain(
      "body.printing-landing-page-continuity > *",
    );

    act(() => buttonAfterText(container, "Tout remettre à zéro").click());
    expect(
      controlAfterText<HTMLInputElement>(container, "Recherche représentative")
        .value,
    ).toBe("");
    expect(
      [...container.querySelectorAll("button")].filter((button) =>
        button.textContent?.includes("Supprimer cette ligne"),
      ),
    ).toHaveLength(1);
    expect(container.textContent).toContain(
      "Tous les champs ont été remis à zéro",
    );
    expect(
      [...container.querySelectorAll("p")].some((paragraph) =>
        paragraph.textContent?.startsWith("Exemple illustratif fictif —"),
      ),
    ).toBe(false);
  });

  it("does not access the network or browser persistence during its actions", async () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch");
    const localGet = vi.spyOn(window.localStorage, "getItem");
    const localSet = vi.spyOn(window.localStorage, "setItem");
    const sessionGet = vi.spyOn(window.sessionStorage, "getItem");
    const sessionSet = vi.spyOn(window.sessionStorage, "setItem");
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });
    Object.defineProperty(window, "print", {
      configurable: true,
      value: vi.fn(),
    });

    act(() => buttonAfterText(container, "Charger l’exemple fictif").click());
    act(() => buttonAfterText(container, "Ajouter une affirmation").click());
    await act(async () =>
      buttonAfterText(container, "Copier la synthèse complète").click(),
    );
    act(() => buttonAfterText(container, "Imprimer la fiche").click());
    act(() => buttonAfterText(container, "Tout remettre à zéro").click());

    expect(fetchSpy).not.toHaveBeenCalled();
    expect(localGet).not.toHaveBeenCalled();
    expect(localSet).not.toHaveBeenCalled();
    expect(sessionGet).not.toHaveBeenCalled();
    expect(sessionSet).not.toHaveBeenCalled();
  });
});
