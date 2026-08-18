/** @vitest-environment happy-dom */

import axe from "axe-core";
import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { renderToString } from "react-dom/server";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { copyTextToClipboard } from "@/lib/clipboard";
import { MvpVibeCodeTakeoverDossier } from "./MvpVibeCodeTakeoverDossier";

vi.mock("@/lib/clipboard", () => ({
  copyTextToClipboard: vi.fn().mockResolvedValue(true),
}));

function buttonByText(scope: ParentNode, text: string): HTMLButtonElement {
  const button = [...scope.querySelectorAll("button")].find((candidate) =>
    candidate.textContent?.includes(text),
  );
  if (!(button instanceof HTMLButtonElement)) {
    throw new Error(`Bouton introuvable : ${text}`);
  }
  return button;
}

function controlByLabel<
  T extends HTMLInputElement | HTMLSelectElement,
>(
  scope: ParentNode,
  text: string,
  selector: string,
  index = 0,
): T {
  const labels = [...scope.querySelectorAll("label")].filter((candidate) =>
    candidate.textContent?.includes(text),
  );
  const control = labels[index]?.querySelector(selector);
  if (
    !(
      control instanceof HTMLInputElement ||
      control instanceof HTMLSelectElement
    )
  ) {
    throw new Error(`Contrôle introuvable : ${text} #${index}`);
  }
  return control as T;
}

function changeControl(
  control: HTMLInputElement | HTMLSelectElement,
  value: string,
) {
  act(() => {
    const prototype =
      control instanceof HTMLInputElement
        ? HTMLInputElement.prototype
        : HTMLSelectElement.prototype;
    Object.getOwnPropertyDescriptor(prototype, "value")?.set?.call(
      control,
      value,
    );
    control.dispatchEvent(new Event("input", { bubbles: true }));
    control.dispatchEvent(new Event("change", { bubbles: true }));
  });
}

describe("MvpVibeCodeTakeoverDossier", () => {
  let container: HTMLDivElement;
  let root: Root;
  let fetchSpy: ReturnType<typeof vi.spyOn>;
  let createObjectUrl: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    (
      globalThis as typeof globalThis & {
        IS_REACT_ACT_ENVIRONMENT: boolean;
      }
    ).IS_REACT_ACT_ENVIRONMENT = true;
    vi.clearAllMocks();
    createObjectUrl = vi.fn(() => "blob:mvp-vibe-code-current");
    Object.defineProperty(URL, "createObjectURL", {
      configurable: true,
      writable: true,
      value: createObjectUrl,
    });
    Object.defineProperty(URL, "revokeObjectURL", {
      configurable: true,
      writable: true,
      value: vi.fn(),
    });
    fetchSpy = vi.spyOn(globalThis, "fetch");
    container = document.createElement("div");
    document.body.append(container);
    root = createRoot(container);
    act(() => root.render(<MvpVibeCodeTakeoverDossier />));
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
    vi.restoreAllMocks();
  });

  it("rend un outil local, aligné à gauche et sans champ de secret", () => {
    const html = renderToString(<MvpVibeCodeTakeoverDossier />);

    expect(html).toContain("Outil local et déterministe");
    expect(html).toContain("aucun appel réseau");
    expect(html).toContain("aucune sauvegarde automatique");
    expect(html).toContain("text-left");
    expect(html).not.toContain("text-center");
    expect(html).toContain('data-read-time-exclude="true"');
    expect(container.querySelector('input[type="password"]')).toBeNull();
    expect(container.querySelector("textarea")).toBeNull();
  });

  it("garde toutes les sections de détail fermées au départ", () => {
    const details = [...container.querySelectorAll("details")];

    expect(details).toHaveLength(5);
    expect(details.every((detail) => !detail.open)).toBe(true);
  });

  it("reste INCOMPLET tant que la situation est inconnue", () => {
    expect(container.textContent).toContain("INCOMPLET");
    expect(
      buttonByText(container, "Copier la note de décision").disabled,
    ).toBe(true);
    expect(container.textContent).toContain(
      "La note finale reste verrouillée",
    );
  });

  it.each([
    ["Incident ou compromission active", "compromission"],
    ["Litige de propriété ou de droits", "litige"],
    ["Mandat ou autorité absente", "mandat"],
  ])("rend le STOP du mode %s prioritaire", (label, reason) => {
    const radio = controlByLabel<HTMLInputElement>(
      container,
      label,
      'input[type="radio"]',
    );

    act(() => radio.click());

    expect(
      container.querySelector('[data-decision-stage="STOP"]'),
    ).not.toBeNull();
    expect(container.textContent).toContain(reason);
    expect(
      buttonByText(container, "Copier la note de décision").disabled,
    ).toBe(true);
  });

  it("charge un cas fictif complet sans le présenter comme marché", () => {
    act(() => buttonByText(container, "Charger l’exemple fictif").click());

    expect(container.textContent).toContain("EXEMPLE FICTIF");
    expect(container.textContent).toContain("jamais une moyenne");
    expect(
      container.querySelector('[data-decision-stage="DECISION_HUMAINE"]'),
    ).not.toBeNull();
    expect(
      buttonByText(container, "Copier la note de décision").disabled,
    ).toBe(true);
    expect(container.textContent).toContain(
      "la note finale reste verrouillée",
    );
  });

  it("affiche cinq trajectoires et leurs trois horizons", () => {
    act(() => buttonByText(container, "Charger l’exemple fictif").click());

    const summaries = [
      ...container.querySelectorAll("[data-tco-summary]"),
    ];
    expect(summaries).toHaveLength(5);
    for (const summary of summaries) {
      expect(summary.textContent).toContain("12 mois");
      expect(summary.textContent).toContain("36 mois");
      expect(summary.textContent).toContain("60 mois");
      expect(summary.textContent).not.toContain("ND");
    }
  });

  it("préserve la saisie intermédiaire 12, et invalide le calcul", () => {
    act(() => buttonByText(container, "Charger l’exemple fictif").click());
    const input = controlByLabel<HTMLInputElement>(
      container,
      "Durée de double exploitation",
      "input",
      0,
    );

    changeControl(input, "12,");

    expect(input.value).toBe("12,");
    expect(input.dataset.numberState).toBe("intermediate");
    expect(input.getAttribute("aria-invalid")).toBe("true");
    expect(input.getAttribute("aria-errormessage")).toBeTruthy();
    expect(
      document.getElementById(input.getAttribute("aria-errormessage")!),
    ).not.toBeNull();
    expect(
      container.querySelector("[data-numeric-error-summary='true']"),
    ).not.toBeNull();
    expect(
      container.querySelector('[data-decision-stage="INCOMPLET"]'),
    ).not.toBeNull();
  });

  it("refuse un nombre décimal de personnes dans l’interface", () => {
    act(() => buttonByText(container, "Charger l’exemple fictif").click());
    const input = controlByLabel<HTMLInputElement>(
      container,
      "Personnes réellement affectées",
      "input",
    );

    changeControl(input, "2,5");

    expect(input.dataset.numberState).toBe("invalid");
    expect(
      container.querySelector('[data-decision-stage="INCOMPLET"]'),
    ).not.toBeNull();
  });

  it("annonce aussi un champ numérique vidé après interaction", () => {
    act(() => buttonByText(container, "Charger l’exemple fictif").click());
    const input = controlByLabel<HTMLInputElement>(
      container,
      "Coûts ponctuels",
      "input",
      0,
    );

    changeControl(input, "");

    expect(input.getAttribute("aria-invalid")).toBe("true");
    expect(input.getAttribute("aria-errormessage")).toBeTruthy();
    expect(
      container.querySelector("[data-numeric-error-summary='true']"),
    ).not.toBeNull();
  });

  it("copie un brouillon vivant même quand le dossier est incomplet", async () => {
    await act(async () => {
      buttonByText(container, "Copier le brouillon").click();
      await Promise.resolve();
    });

    expect(copyTextToClipboard).toHaveBeenCalledOnce();
    expect(vi.mocked(copyTextToClipboard).mock.calls[0][0]).toContain(
      "BROUILLON EXPORTABLE",
    );
    expect(vi.mocked(copyTextToClipboard).mock.calls[0][0]).toContain(
      "Statut : INCOMPLET",
    );
    expect(container.textContent).toContain(
      "Le brouillon courant a été copié",
    );
  });

  it("déverrouille et copie la note finale seulement après comparaison", async () => {
    act(() => buttonByText(container, "Charger l’exemple fictif").click());
    expect(
      buttonByText(container, "Copier la note de décision").disabled,
    ).toBe(true);

    act(() =>
      buttonByText(
        container,
        "J’atteste avoir remplacé ou vérifié toutes les valeurs fictives",
      ).click(),
    );

    await act(async () => {
      buttonByText(container, "Copier la note de décision").click();
      await Promise.resolve();
    });

    expect(copyTextToClipboard).toHaveBeenCalledOnce();
    expect(vi.mocked(copyTextToClipboard).mock.calls[0][0]).toContain(
      "NOTE DE DÉCISION",
    );
    expect(container.textContent).toContain(
      "La note de décision courante a été copiée",
    );
  });

  it("réinitialise le statut d’export après toute modification", async () => {
    await act(async () => {
      buttonByText(container, "Copier le brouillon").click();
      await Promise.resolve();
    });
    expect(container.textContent).toContain(
      "Le brouillon courant a été copié",
    );

    const reference = controlByLabel<HTMLInputElement>(
      container,
      "Référence du dossier",
      "input",
    );
    changeControl(reference, "DOSSIER-123");

    expect(container.textContent).not.toContain(
      "Le brouillon courant a été copié",
    );
    expect(
      container.querySelector("[data-export-status='idle']"),
    ).not.toBeNull();
  });

  it("génère le CSV depuis les dernières valeurs visibles", async () => {
    act(() => buttonByText(container, "Charger l’exemple fictif").click());
    const oneOff = controlByLabel<HTMLInputElement>(
      container,
      "Coûts ponctuels",
      "input",
      0,
    );
    changeControl(oneOff, "12345");

    act(() => buttonByText(container, "Télécharger le CSV courant").click());

    expect(createObjectUrl).toHaveBeenCalledOnce();
    const blob = createObjectUrl.mock.calls[0][0] as Blob;
    const csv = await blob.text();
    expect(csv).toContain("52345");
    expect(csv).toContain("FICTIF_NON_CONFIRME");
    expect(container.textContent).toContain(
      "Le CSV courant a été téléchargé",
    );
  });

  it("conserve le marquage fictif après une simple modification", () => {
    act(() => buttonByText(container, "Charger l’exemple fictif").click());
    expect(container.textContent).toContain("EXEMPLE FICTIF");

    const reference = controlByLabel<HTMLInputElement>(
      container,
      "Référence du dossier",
      "input",
    );
    changeControl(reference, "DOSSIER-CLIENT");

    expect(container.textContent).toContain("EXEMPLE FICTIF NON CONFIRMÉ");
    expect(
      buttonByText(container, "Copier la note de décision").disabled,
    ).toBe(true);
  });

  it("retire la provenance fictive uniquement après attestation explicite", async () => {
    act(() => buttonByText(container, "Charger l’exemple fictif").click());
    const reference = controlByLabel<HTMLInputElement>(
      container,
      "Référence du dossier",
      "input",
    );
    changeControl(reference, "DOSSIER-CONFIRME");

    act(() =>
      buttonByText(
        container,
        "J’atteste avoir remplacé ou vérifié toutes les valeurs fictives",
      ).click(),
    );

    expect(container.textContent).not.toContain("EXEMPLE FICTIF NON CONFIRMÉ");
    expect(
      buttonByText(container, "Copier la note de décision").disabled,
    ).toBe(false);

    act(() => buttonByText(container, "Télécharger le CSV courant").click());
    const blob = createObjectUrl.mock.calls[0][0] as Blob;
    const csv = await blob.text();
    expect(csv).toContain("UTILISATEUR_CONFIRME");
    expect(csv).not.toContain("FICTIF_NON_CONFIRME");
  });

  it("bloque tous les exports si un candidat secret est saisi", () => {
    act(() => buttonByText(container, "Charger l’exemple fictif").click());
    act(() =>
      buttonByText(
        container,
        "J’atteste avoir remplacé ou vérifié toutes les valeurs fictives",
      ).click(),
    );
    const evidence = controlByLabel<HTMLInputElement>(
      container,
      "Référence de preuve — jamais le secret",
      "input",
      0,
    );

    changeControl(evidence, "sk-proj-abcdefghijklmnopqrstuvwxyz");

    expect(
      container.querySelector("[data-secret-export-block='true']"),
    ).not.toBeNull();
    expect(buttonByText(container, "Copier le brouillon").disabled).toBe(true);
    expect(
      buttonByText(container, "Télécharger le CSV courant").disabled,
    ).toBe(true);
    expect(
      buttonByText(container, "Copier la note de décision").disabled,
    ).toBe(true);
  });

  it("réinitialise réellement champs, mode, exports et marquage", async () => {
    act(() => buttonByText(container, "Charger l’exemple fictif").click());
    const duration = controlByLabel<HTMLInputElement>(
      container,
      "Durée de double exploitation",
      "input",
      0,
    );
    changeControl(duration, "12,");

    await act(async () => {
      buttonByText(container, "Copier le brouillon").click();
      await Promise.resolve();
    });
    act(() => buttonByText(container, "Réinitialiser").click());

    expect(duration.value).toBe("");
    expect(
      controlByLabel<HTMLInputElement>(
        container,
        "Situation non qualifiée",
        'input[type="radio"]',
      ).checked,
    ).toBe(true);
    expect(
      container.querySelector("[data-export-status='idle']"),
    ).not.toBeNull();
    expect(container.textContent).not.toContain(
      "EXEMPLE FICTIF NON CONFIRMÉ",
    );
  });

  it("n’effectue aucun appel réseau lors des copies ou exports", async () => {
    await act(async () => {
      buttonByText(container, "Copier le brouillon").click();
      await Promise.resolve();
    });
    act(() => buttonByText(container, "Télécharger le CSV courant").click());

    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it("conserve chaque section native dans l’ordre de tabulation", () => {
    const summaries = [...container.querySelectorAll("summary")];

    expect(summaries).toHaveLength(5);
    for (const summary of summaries) {
      expect((summary as HTMLElement).tabIndex).toBeGreaterThanOrEqual(0);
      (summary as HTMLElement).focus();
      expect(document.activeElement).toBe(summary);
    }
  });

  it("ne présente aucune violation d’accessibilité sérieuse ou critique", async () => {
    for (const detail of container.querySelectorAll("details")) {
      detail.open = true;
    }
    const results = await axe.run(container, {
      rules: { "color-contrast": { enabled: false } },
    });

    expect(
      results.violations.filter(
        (violation) =>
          violation.impact === "critical" || violation.impact === "serious",
      ),
    ).toEqual([]);
  });
});
