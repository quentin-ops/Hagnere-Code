/** @vitest-environment happy-dom */

import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { renderToStaticMarkup } from "react-dom/server";
import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import {
  AccessExitDossierTool,
  assessExitItem,
  buildExitDossierText,
  EMPTY_ACCESS_ITEM,
  summarizeExitDossier,
  type AccessExitItem,
} from "./access-exit-dossier";

const completeItem: AccessExitItem = {
  ...EMPTY_ACCESS_ITEM,
  id: "complete",
  name: "Éditer le bon d’intervention",
  type: "task",
  owner: "Responsable exploitation",
  frequency: "12 fois par semaine depuis trois mois",
  criticality: "high",
  dependency: "Formulaire F_Bon, requête Q_Bon, modèle Word et Outlook",
  sensitiveData: "yes",
  target: "web-custom",
  recoveryProof:
    "Trois bons rejoués, PDF identiques, destinataire et retour arrière vérifiés",
};

function change(
  control: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
  value: string,
) {
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

function click(button: HTMLButtonElement) {
  act(() => button.dispatchEvent(new MouseEvent("click", { bubbles: true })));
}

function buttonNamed(container: ParentNode, name: string) {
  const button = [...container.querySelectorAll("button")].find(
    (candidate) => candidate.textContent?.trim() === name,
  );
  if (!(button instanceof HTMLButtonElement)) {
    throw new Error(`Bouton introuvable : ${name}`);
  }
  return button;
}

function controlById<
  T extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
>(container: ParentNode, id: string) {
  const control = container.querySelector(`#${id}`);
  if (
    !(control instanceof HTMLInputElement) &&
    !(control instanceof HTMLTextAreaElement) &&
    !(control instanceof HTMLSelectElement)
  ) {
    throw new Error(`Contrôle introuvable : ${id}`);
  }
  return control as T;
}

function summaryValue(container: ParentNode, label: string) {
  const labelNode = [...container.querySelectorAll("p")].find(
    (candidate) => candidate.textContent?.trim() === label,
  );
  return labelNode?.nextElementSibling?.textContent?.trim();
}

describe("assessExitItem", () => {
  it("conserve toutes les inconnues d'une fiche vide", () => {
    const result = assessExitItem(EMPTY_ACCESS_ITEM);

    expect(result.readyForPilotDiscussion).toBe(false);
    expect(result.missingFields).toEqual([
      "objet ou tâche",
      "type",
      "responsable métier",
      "fréquence",
      "criticité",
      "dépendances",
      "nature des données",
      "cible pressentie",
      "preuve de reprise",
    ]);
  });

  it("ne transforme pas un élément critique incomplet en feu vert", () => {
    const result = assessExitItem({
      ...completeItem,
      owner: "",
      recoveryProof: "",
    });

    expect(result.readyForPilotDiscussion).toBe(false);
    expect(result.blockers).toContain(
      "Objet critique sans responsable métier identifié.",
    );
    expect(result.blockers).toContain(
      "Objet critique sans preuve de reprise définie.",
    );
  });

  it("signale une cible choisie avant les dépendances", () => {
    const result = assessExitItem({ ...completeItem, dependency: "" });

    expect(result.blockers).toContain(
      "Cible choisie alors que les dépendances restent inconnues.",
    );
  });

  it("signale les données sensibles sans responsable", () => {
    const result = assessExitItem({
      ...completeItem,
      owner: "",
      sensitiveData: "yes",
    });

    expect(result.blockers).toContain(
      "Données personnelles, confidentielles ou réglementées sans responsable identifié.",
    );
  });

  it("applique le blocage de dépendances à chaque cible de changement, mais pas à la conservation", () => {
    for (const target of [
      "split-data-ui",
      "migrate-storage",
      "standard",
      "low-code",
      "web-custom",
      "remove",
    ] as const) {
      expect(
        assessExitItem({ ...completeItem, target, dependency: "" }).blockers,
        target,
      ).toContain("Cible choisie alors que les dépendances restent inconnues.");
    }

    expect(
      assessExitItem({
        ...completeItem,
        target: "keep-access",
        dependency: "",
      }).blockers,
    ).not.toContain(
      "Cible choisie alors que les dépendances restent inconnues.",
    );
  });

  it("autorise seulement une discussion de pilote lorsque la fiche est complète", () => {
    expect(assessExitItem(completeItem)).toEqual({
      missingFields: [],
      blockers: [],
      readyForPilotDiscussion: true,
    });
  });
});

describe("summarizeExitDossier", () => {
  it("compte séparément les fiches complètes, inconnues et bloquantes", () => {
    const summary = summarizeExitDossier([
      completeItem,
      { ...EMPTY_ACCESS_ITEM, id: "empty" },
      {
        ...completeItem,
        id: "blocked",
        owner: "",
        recoveryProof: "",
      },
    ]);

    expect(summary.totalItems).toBe(3);
    expect(summary.documentedItems).toBe(1);
    expect(summary.itemsWithUnknowns).toBe(2);
    expect(summary.readyForPilotDiscussion).toBe(1);
    expect(summary.blockerCount).toBeGreaterThanOrEqual(3);
  });

  it("génère un texte fidèle sans recommandation d'architecture", () => {
    const text = buildExitDossierText([completeItem, EMPTY_ACCESS_ITEM]);

    expect(text).toContain("Éditer le bon d’intervention");
    expect(text).toContain("Objet ou tâche à nommer");
    expect(text).toContain("À vérifier");
    expect(text).toContain("aucune recommandation automatique");
    expect(text).toContain("ne choisit pas une architecture");
  });
});

describe("AccessExitDossierTool", () => {
  it("rend deux fiches accessibles, des actions locales et aucune soumission", () => {
    const html = renderToStaticMarkup(<AccessExitDossierTool />);
    const wrapper = document.createElement("div");
    wrapper.innerHTML = html;

    expect(wrapper.querySelectorAll("section[aria-labelledby]")).toHaveLength(
      2,
    );
    expect(wrapper.querySelectorAll("input")).toHaveLength(6);
    expect(wrapper.querySelectorAll("textarea")).toHaveLength(4);
    expect(wrapper.querySelectorAll("select")).toHaveLength(8);
    expect(wrapper.querySelectorAll("label")).toHaveLength(18);
    expect(wrapper.querySelectorAll('[id="access-item-1-name"]')).toHaveLength(
      1,
    );
    expect(wrapper.querySelectorAll('[id="access-item-2-name"]')).toHaveLength(
      1,
    );
    expect(html).toContain('type="button"');
    expect(html).toContain("Copier le dossier");
    expect(html).toContain("Imprimer cette page");
    expect(html).not.toContain("<form");
    expect(html).not.toContain('type="submit"');
  });

  it("expose toutes les catégories d’objets et toutes les trajectoires sans orientation cachée", () => {
    const html = renderToStaticMarkup(<AccessExitDossierTool />);
    const wrapper = document.createElement("div");
    wrapper.innerHTML = html;

    expect(
      [...wrapper.querySelectorAll("#access-item-1-type option")].map(
        (option) => option.getAttribute("value"),
      ),
    ).toEqual([
      "unknown",
      "task",
      "table",
      "query",
      "form",
      "report",
      "macro",
      "vba",
      "connection",
      "scheduled-task",
      "attachment-link",
      "other",
    ]);
    expect(
      [...wrapper.querySelectorAll("#access-item-1-target option")].map(
        (option) => option.getAttribute("value"),
      ),
    ).toEqual([
      "unknown",
      "keep-access",
      "split-data-ui",
      "migrate-storage",
      "standard",
      "low-code",
      "web-custom",
      "remove",
    ]);
  });

  it("inclut la synthèse imprimable de toutes les fiches", () => {
    const html = renderToStaticMarkup(<AccessExitDossierTool />);
    const wrapper = document.createElement("div");
    wrapper.innerHTML = html;
    const dossier = wrapper.querySelector(
      '[data-testid="access-exit-dossier"]',
    );
    const printSummary = wrapper.querySelector(
      '[data-testid="access-exit-print-summary"]',
    );

    expect(dossier).not.toBeNull();
    expect(
      [...(dossier?.children ?? [])]
        .slice(0, 3)
        .every((child) => child.classList.contains("print:hidden")),
    ).toBe(true);
    expect(printSummary).not.toBeNull();
    expect(printSummary?.classList.contains("print:block")).toBe(true);
    expect(printSummary?.textContent).toContain("1. Objet ou tâche à nommer");
    expect(printSummary?.textContent).toContain("2. Objet ou tâche à nommer");
  });
});

describe("AccessExitDossierTool interactions", () => {
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
    act(() => root.render(<AccessExitDossierTool />));
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
    vi.restoreAllMocks();
  });

  it("ajoute et supprime des fiches avec des identifiants uniques sans passer sous une fiche", () => {
    const addButton = buttonNamed(container, "Ajouter une fiche");
    click(addButton);
    click(addButton);

    expect(
      [...container.querySelectorAll('input[id$="-name"]')].map(
        (input) => input.id,
      ),
    ).toEqual([
      "access-item-1-name",
      "access-item-2-name",
      "access-item-3-name",
      "access-item-4-name",
    ]);

    const secondRemove = container.querySelector(
      'button[aria-label="Supprimer la fiche 2"]',
    );
    if (!(secondRemove instanceof HTMLButtonElement)) {
      throw new Error("Suppression de la deuxième fiche introuvable");
    }
    click(secondRemove);
    click(addButton);

    const idsAfterReplacement = [
      ...container.querySelectorAll('input[id$="-name"]'),
    ].map((input) => input.id);
    expect(idsAfterReplacement).toEqual([
      "access-item-1-name",
      "access-item-3-name",
      "access-item-4-name",
      "access-item-5-name",
    ]);
    expect(new Set(idsAfterReplacement).size).toBe(idsAfterReplacement.length);

    while (container.querySelectorAll("section[aria-labelledby]").length > 1) {
      const remove = container.querySelector(
        'button[aria-label^="Supprimer la fiche"]:not([disabled])',
      );
      if (!(remove instanceof HTMLButtonElement)) {
        throw new Error("Bouton de suppression actif introuvable");
      }
      click(remove);
    }

    expect(container.querySelectorAll("section[aria-labelledby]")).toHaveLength(
      1,
    );
    const onlyRemove = container.querySelector(
      'button[aria-label="Supprimer la fiche 1"]',
    );
    expect(onlyRemove).toBeInstanceOf(HTMLButtonElement);
    expect((onlyRemove as HTMLButtonElement).disabled).toBe(true);
  });

  it("met à jour les inconnues et les blocages sans transformer la cible en recommandation", () => {
    expect(summaryValue(container, "Éléments")).toBe("2");
    expect(summaryValue(container, "Complets")).toBe("0");
    expect(summaryValue(container, "Avec inconnues")).toBe("2");
    expect(summaryValue(container, "Points bloquants")).toBe("0");

    change(
      controlById<HTMLSelectElement>(container, "access-item-1-criticality"),
      "high",
    );
    change(
      controlById<HTMLSelectElement>(container, "access-item-1-sensitive"),
      "yes",
    );
    change(
      controlById<HTMLSelectElement>(container, "access-item-1-target"),
      "web-custom",
    );
    expect(summaryValue(container, "Points bloquants")).toBe("4");

    change(
      controlById<HTMLInputElement>(container, "access-item-1-name"),
      "Éditer le bon d’intervention",
    );
    change(
      controlById<HTMLSelectElement>(container, "access-item-1-type"),
      "task",
    );
    change(
      controlById<HTMLInputElement>(container, "access-item-1-owner"),
      "Responsable exploitation",
    );
    change(
      controlById<HTMLInputElement>(container, "access-item-1-frequency"),
      "12 fois par semaine depuis trois mois",
    );
    change(
      controlById<HTMLTextAreaElement>(container, "access-item-1-dependency"),
      "Formulaire, requête, modèle Word et Outlook",
    );
    change(
      controlById<HTMLTextAreaElement>(container, "access-item-1-recovery"),
      "Trois bons rejoués et retour arrière vérifié",
    );

    expect(summaryValue(container, "Complets")).toBe("1");
    expect(summaryValue(container, "Avec inconnues")).toBe("1");
    expect(summaryValue(container, "Points bloquants")).toBe("0");
    expect(container.textContent).toContain(
      "Fiche complète pour une discussion de pilote",
    );
    expect(container.textContent).toContain(
      "Cela ne valide ni la cible ni la migration",
    );

    change(
      controlById<HTMLSelectElement>(container, "access-item-1-target"),
      "keep-access",
    );
    change(
      controlById<HTMLTextAreaElement>(container, "access-item-1-dependency"),
      "",
    );
    expect(summaryValue(container, "Points bloquants")).toBe("0");
    expect(container.textContent).toContain("À compléter : dépendances.");
  });

  it("annonce honnêtement le succès puis l’échec de copie", async () => {
    const writeText = vi
      .fn()
      .mockResolvedValueOnce(undefined)
      .mockRejectedValueOnce(new Error("permission refusée"));
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });
    const copyButton = buttonNamed(container, "Copier le dossier");

    await act(async () => {
      copyButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      await Promise.resolve();
    });
    expect(writeText).toHaveBeenCalledOnce();
    expect(writeText.mock.calls[0]?.[0]).toContain(
      "DOSSIER DE SORTIE MICROSOFT ACCESS",
    );
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "Dossier copié dans le presse-papiers.",
    );

    await act(async () => {
      copyButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      await Promise.resolve();
    });
    expect(writeText).toHaveBeenCalledTimes(2);
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "Copie impossible dans ce navigateur.",
    );
    expect(
      container.querySelector('[role="status"]')?.textContent,
    ).not.toContain("Dossier copié");
  });

  it("déclenche uniquement l’impression à la demande", () => {
    const print = vi.fn();
    Object.defineProperty(window, "print", {
      configurable: true,
      value: print,
    });

    click(buttonNamed(container, "Imprimer cette page"));

    expect(print).toHaveBeenCalledOnce();
  });
});
