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
import { RgpdSaasPreparationKit } from "./RgpdSaasPreparationKit";

type FormControl = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

function buttonByText(container: HTMLElement, text: string) {
  const button = [...container.querySelectorAll("button")].find((candidate) =>
    candidate.textContent?.includes(text),
  );
  if (!button) throw new Error(`Bouton introuvable : ${text}`);
  return button;
}

function fieldsetByLegend(container: HTMLElement, legend: string) {
  const fieldset = [...container.querySelectorAll("fieldset")].find(
    (candidate) =>
      candidate.querySelector(":scope > legend")?.textContent?.trim() ===
      legend,
  );
  if (!fieldset) throw new Error(`Groupe introuvable : ${legend}`);
  return fieldset;
}

function controlByLabel<T extends FormControl>(
  container: HTMLElement,
  labelText: string,
  selector = "input, select, textarea",
) {
  const label = [...container.querySelectorAll("label")].find((candidate) =>
    candidate.textContent?.includes(labelText),
  );
  const control = label?.querySelector(selector);
  if (!control) throw new Error(`Contrôle introuvable : ${labelText}`);
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
    control.dispatchEvent(new Event("input", { bubbles: true }));
    control.dispatchEvent(new Event("change", { bubbles: true }));
  });
}

function expectLinkedError(control: FormControl, message: string) {
  expect(control.getAttribute("aria-invalid")).toBe("true");
  const id = control.getAttribute("aria-errormessage");
  expect(id).toBeTruthy();
  expect(document.getElementById(id!)?.textContent).toContain(message);
}

function openStep(container: HTMLElement, label: string) {
  act(() => buttonByText(container, label).click());
}

function loadExample(container: HTMLElement) {
  act(() =>
    buttonByText(container, "Charger l’exemple entièrement fictif").click(),
  );
}

describe("RgpdSaasPreparationKit", () => {
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
    act(() => root.render(<RgpdSaasPreparationKit />));
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
    vi.restoreAllMocks();
  });

  it("starts as a local preparation tool, with four human-readable steps and no score", () => {
    expect(container.textContent).toContain(
      "Questionnaire local · aucun envoi · aucun enregistrement",
    );
    expect(container.textContent).toContain(
      "ne calcule aucun score et ne prononce aucune conformité",
    );
    expect(
      container.querySelectorAll(
        'nav[aria-label="Étapes du questionnaire RGPD"] button',
      ),
    ).toHaveLength(4);
    expect(container.textContent).toContain("Traitements et rôles");
    expect(container.textContent).toContain("Prestataires et pays");
    expect(container.textContent).toContain("Produit, contrat et tests");
    expect(container.textContent).toContain("Actions, coûts et relevé");
    expect(
      controlByLabel<HTMLInputElement>(container, "Projet ou produit").value,
    ).toBe("");

    for (const fieldset of container.querySelectorAll("fieldset")) {
      expect(fieldset.querySelector(":scope > legend")).not.toBeNull();
    }
  });

  it("shows exact linked errors and moves focus to the first missing fact", () => {
    openStep(container, "Actions, coûts et relevé");
    act(() => buttonByText(container, "Vérifier le dossier").click());

    const project = controlByLabel<HTMLInputElement>(
      container,
      "Projet ou produit",
    );
    expect(document.activeElement).toBe(project);
    expectLinkedError(project, "Nommez le projet");
    expect(container.textContent).toContain(
      "Le premier est affiché dans l’étape 1",
    );
  });

  it("keeps every legal role as an explicit hypothesis", () => {
    expect(container.textContent).toContain(
      "Hypothèse de rôle — à confirmer, jamais déduite par l’outil",
    );
    expect(container.textContent).toContain(
      "Responsable du traitement à confirmer",
    );
    expect(container.textContent).toContain("Sous-traitant à confirmer");
    expect(container.textContent).toContain(
      "Responsabilité conjointe à examiner",
    );
    expect(container.textContent).toContain("Finalités mixtes à séparer");
  });

  it("loads a complete, unmistakably fictitious example with separated subtotals", () => {
    loadExample(container);
    expect(container.textContent).toContain(
      "Orbia Démo, ses prestataires, ses décisions et ses montants sont entièrement inventés",
    );

    openStep(container, "Actions, coûts et relevé");
    expect(container.textContent).toContain("8 400");
    expect(container.textContent).toContain("9,5 jour(s)");
    expect(container.textContent).toContain("3 000");
    expect(container.textContent).toContain("Au moins un coût reste inconnu");
    expect(container.textContent).toContain(
      "Préparer une revue avec le DPO, le juriste ou le spécialiste concerné",
    );

    act(() => buttonByText(container, "Vérifier le dossier").click());
    expect(container.textContent).toContain(
      "Le dossier est suffisamment renseigné pour une revue. Cela ne valide ni le rôle, ni la base juridique, ni le transfert, ni la conformité du SaaS.",
    );
    expect(
      buttonByText(
        container,
        "Télécharger le relevé Markdown (.md) pour revue",
      ),
    ).toBeDefined();
  });

  it("requires an explicit second action before clearing the local questionnaire", () => {
    loadExample(container);
    const project = controlByLabel<HTMLInputElement>(
      container,
      "Projet ou produit",
    );
    expect(project.value).toBe("Orbia Démo");

    const reset = buttonByText(container, "Repartir d’un questionnaire vide");
    const feedbackId = reset.getAttribute("aria-describedby");
    act(() => reset.click());

    expect(project.value).toBe("Orbia Démo");
    expect(buttonByText(container, "Confirmer la remise à zéro")).toBeDefined();
    expect(document.getElementById(feedbackId!)?.textContent).toContain(
      "Aucune donnée n’a encore été supprimée",
    );

    act(() => buttonByText(container, "Annuler").click());
    expect(project.value).toBe("Orbia Démo");
    expect(container.textContent).toContain(
      "Votre brouillon local est conservé",
    );

    act(() =>
      buttonByText(container, "Repartir d’un questionnaire vide").click(),
    );
    act(() => buttonByText(container, "Confirmer la remise à zéro").click());
    expect(project.value).toBe("");
    expect(container.textContent).toContain(
      "Le questionnaire local a été remis à zéro",
    );
  });

  it("links radio-group errors with an accessible group and described radios", () => {
    openStep(container, "Actions, coûts et relevé");
    act(() => buttonByText(container, "Vérifier le dossier").click());

    const roleGroup = fieldsetByLegend(
      container,
      "Hypothèse de rôle — à confirmer, jamais déduite par l’outil",
    );
    const roleUnknown = controlByLabel<HTMLInputElement>(
      roleGroup,
      "Rôle non examiné",
      'input[type="radio"]',
    );
    const roleRadios = roleGroup.querySelector('[role="radiogroup"]')!;
    expect(roleRadios.getAttribute("aria-invalid")).toBe("true");
    expect(roleRadios.getAttribute("aria-errormessage")).toBeTruthy();
    expect(roleUnknown.getAttribute("aria-describedby")).toBe(
      roleRadios.getAttribute("aria-errormessage"),
    );
    expect(
      document.getElementById(roleRadios.getAttribute("aria-errormessage")!)
        ?.textContent,
    ).toContain("Choisissez une hypothèse de rôle");

    const purposeGroup = fieldsetByLegend(container, "Finalité et nécessité");
    const purposeUnknown = controlByLabel<HTMLInputElement>(
      purposeGroup,
      "À documenter",
      'input[type="radio"]',
    );
    const purposeRadios = purposeGroup.querySelector('[role="radiogroup"]')!;
    expect(purposeRadios.getAttribute("aria-invalid")).toBe("true");
    expect(purposeRadios.getAttribute("aria-errormessage")).toBeTruthy();
    expect(purposeUnknown.getAttribute("aria-describedby")).toBe(
      purposeRadios.getAttribute("aria-errormessage"),
    );
  });

  it("requires a precise justification when a point is marked not applicable", () => {
    loadExample(container);
    openStep(container, "Actions, coûts et relevé");
    const cookiesGroup = fieldsetByLegend(
      container,
      "Cookies, traceurs et SDK",
    );
    const notApplicable = controlByLabel<HTMLInputElement>(
      cookiesGroup,
      "Non applicable",
      'input[type="radio"]',
    );
    act(() => notApplicable.click());

    const justification = controlByLabel<HTMLTextAreaElement>(
      cookiesGroup,
      "Pourquoi ce point ne s’applique-t-il pas au périmètre exact ?",
      "textarea",
    );
    change(justification, "");
    act(() => buttonByText(container, "Vérifier le dossier").click());
    expectLinkedError(
      justification,
      "Cookies, traceurs et SDK : expliquez précisément pourquoi ce point ne s’applique pas",
    );
  });

  it("adds a provider and focuses its first missing field during verification", () => {
    loadExample(container);
    openStep(container, "Prestataires et pays");
    act(() => buttonByText(container, "Ajouter un prestataire").click());
    expect(container.textContent).toContain("Prestataire 2");

    openStep(container, "Actions, coûts et relevé");
    act(() => buttonByText(container, "Vérifier le dossier").click());

    const emptyName = [
      ...container.querySelectorAll<HTMLInputElement>("input"),
    ].find(
      (input) =>
        input.value === "" &&
        input.labels?.[0]?.textContent?.includes("Nom du prestataire"),
    );
    expect(emptyName).toBeDefined();
    expect(document.activeElement).toBe(emptyName);
    expectLinkedError(emptyName!, "Prestataire 2 : nommez le prestataire");
  });

  it("rejects partial cost strings and links the correction to the exact field", () => {
    loadExample(container);
    openStep(container, "Actions, coûts et relevé");
    const actionOne = fieldsetByLegend(container, "Action 1");
    const oneOff = controlByLabel<HTMLInputElement>(
      actionOne,
      "Trésorerie ponctuelle",
    );
    change(oneOff, "2 jours");
    act(() => buttonByText(container, "Vérifier le dossier").click());

    expect(document.activeElement).toBe(oneOff);
    expectLinkedError(oneOff, "doit être un nombre positif");
  });

  it("blocks a second amount on an action already included in its parent", () => {
    loadExample(container);
    openStep(container, "Actions, coûts et relevé");
    const included = fieldsetByLegend(container, "Action 4");
    const oneOff = controlByLabel<HTMLInputElement>(
      included,
      "Trésorerie ponctuelle",
    );
    change(oneOff, "500");
    act(() => buttonByText(container, "Vérifier le dossier").click());

    const parent = controlByLabel<HTMLSelectElement>(
      included,
      "Coût inclus dans une autre action",
      "select",
    );
    expect(document.activeElement).toBe(parent);
    expectLinkedError(parent, "risque d’être compté deux fois");
  });

  it("exports a local UTF-8 review file without network or browser storage", async () => {
    loadExample(container);
    openStep(container, "Actions, coûts et relevé");

    const createObjectUrl = vi
      .spyOn(URL, "createObjectURL")
      .mockReturnValue("blob:rgpd-review");
    vi.spyOn(URL, "revokeObjectURL").mockImplementation(() => undefined);
    const downloads: string[] = [];
    vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(
      function captureDownload(this: HTMLAnchorElement) {
        downloads.push(this.download);
      },
    );
    const fetchSpy = vi.spyOn(globalThis, "fetch");
    const storageSpy = vi.spyOn(Storage.prototype, "setItem");

    act(() =>
      buttonByText(
        container,
        "Télécharger le relevé Markdown (.md) pour revue",
      ).click(),
    );

    expect(createObjectUrl).toHaveBeenCalledOnce();
    const blob = createObjectUrl.mock.calls[0][0] as Blob;
    expect(blob.type).toBe("text/markdown;charset=utf-8");
    expect((await blob.text()).startsWith("\ufeff# Relevé")).toBe(true);
    expect(downloads).toEqual(["releve-preparation-rgpd-orbia-demo.md"]);
    expect(fetchSpy).not.toHaveBeenCalled();
    expect(storageSpy).not.toHaveBeenCalled();
    expect(container.textContent).toContain(
      "Il reste un dossier de revue, pas une validation de conformité",
    );
  });

  it("exports an incomplete questionnaire only as an explicit draft", () => {
    openStep(container, "Actions, coûts et relevé");
    vi.spyOn(URL, "createObjectURL").mockReturnValue("blob:rgpd-draft");
    vi.spyOn(URL, "revokeObjectURL").mockImplementation(() => undefined);
    const downloads: string[] = [];
    vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(
      function captureDownload(this: HTMLAnchorElement) {
        downloads.push(this.download);
      },
    );

    act(() =>
      buttonByText(
        container,
        "Télécharger le brouillon Markdown (.md)",
      ).click(),
    );

    expect(downloads).toEqual(["brouillon-preparation-rgpd-projet.md"]);
    expect(container.textContent).toContain(
      "le fichier n’est pas présenté comme prêt pour revue",
    );
  });
});
