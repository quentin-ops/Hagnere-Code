/** @vitest-environment happy-dom */

import axe from "axe-core";
import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { renderToString } from "react-dom/server";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  SaasFreelanceHandoverDecisionDossier,
  parseSaasHandoverAmount,
} from "./SaasFreelanceHandoverDecisionDossier";

function inputNamed(container: HTMLElement, labelText: string, index = 0) {
  const labels = [...container.querySelectorAll("label")].filter((candidate) =>
    candidate.textContent?.includes(labelText),
  );
  const input = labels[index]?.querySelector("input");
  if (!(input instanceof HTMLInputElement)) {
    throw new Error(`Champ introuvable : ${labelText} #${index}`);
  }
  return input;
}

function fill(input: HTMLInputElement, value: string) {
  act(() => {
    Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype,
      "value",
    )?.set?.call(input, value);
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
  });
}

describe("SaasFreelanceHandoverDecisionDossier", () => {
  let container: HTMLDivElement;
  let root: Root;

  beforeEach(() => {
    (
      globalThis as typeof globalThis & {
        IS_REACT_ACT_ENVIRONMENT: boolean;
      }
    ).IS_REACT_ACT_ENVIRONMENT = true;
    container = document.createElement("div");
    document.body.append(container);
    root = createRoot(container);
    act(() => root.render(<SaasFreelanceHandoverDecisionDossier />));
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
    vi.restoreAllMocks();
  });

  it("rend un dossier local aligné à gauche et sans champ libre de secret", () => {
    const html = renderToString(<SaasFreelanceHandoverDecisionDossier />);

    expect(html).toContain("Rien n’est envoyé ni enregistré");
    expect(html).toContain("aucun mot de passe, secret");
    expect(html).toContain("text-left");
    expect(html).not.toContain("text-center");
    expect(container.querySelectorAll('input[type="text"]')).toHaveLength(43);
    expect(container.querySelectorAll('input[type="radio"]')).toHaveLength(3);
    expect(container.querySelector("textarea")).toBeNull();
    expect(
      [...container.querySelectorAll("summary")].filter((summary) =>
        /^(4\. RPO|5\. RTO|6\. Passation)/.test(
          summary.textContent?.trim() ?? "",
        ),
      ),
    ).toHaveLength(3);
  });

  it("reste en STOP tant que la situation est inconnue ou incidente", () => {
    expect(container.textContent).toContain(
      "STOP — qualifiez d’abord la situation",
    );
    expect(
      [...container.querySelectorAll<HTMLButtonElement>("button")].find(
        (button) => button.textContent?.includes("Copier le résumé"),
      )?.disabled,
    ).toBe(true);

    act(() => inputNamed(container, "Incident ou conflit").click());
    expect(container.textContent).toContain(
      "STOP — incident, détournement ou violation",
    );
  });

  it("affiche les cinq résultats centraux sans présenter la réécriture comme gagnante", () => {
    act(() => inputNamed(container, "Passation normale").click());

    expect(container.textContent).toContain("141 500,00 €");
    expect(container.textContent).toContain("186 640,00 €");
    expect(container.textContent).toContain("274 800,00 €");
    expect(container.textContent).toContain("133 300,00 €");
    expect(container.textContent).toContain("166,63");
    expect(container.textContent).toContain(
      "Clients équivalents sur toute la période",
    );
    expect(container.textContent).toContain("7");
    expect(container.textContent).toContain(
      "Le moins coûteux dans cet exemple, pas un vainqueur universel",
    );
    expect(container.textContent).toContain("PASS — hypothèses calculables");
  });

  it("propage une modification TCO et bloque une valeur vide", () => {
    act(() => inputNamed(container, "Passation normale").click());
    fill(inputNamed(container, "Maintenance sur 36 mois", 0), "80000");
    expect(container.textContent).toContain("142 300,00 €");

    fill(inputNamed(container, "Maintenance sur 36 mois", 0), "");
    expect(container.textContent).toContain(
      "STOP — au moins une hypothèse est vide ou invalide",
    );
  });

  it("conserve une virgule intermédiaire pendant la saisie décimale", () => {
    act(() => inputNamed(container, "Passation normale").click());
    const interval = inputNamed(container, "Intervalle du point restaurable");

    fill(interval, "12,");
    expect(interval.value).toBe("12,");
    expect(container.textContent).toContain(
      "STOP — au moins une hypothèse est vide ou invalide",
    );

    fill(interval, "12,5");
    expect(interval.value).toBe("12,5");
    expect(container.textContent).toContain("PASS — hypothèses calculables");
  });

  it("corrige le seuil probabiliste de l’exercice de restauration", () => {
    act(() => inputNamed(container, "Passation normale").click());

    expect(container.textContent).toContain("19,26 h");
    fill(inputNamed(container, "Probabilité annuelle d’incident"), "10");
    expect(container.textContent).toContain("48,14 h");
    fill(inputNamed(container, "Probabilité annuelle d’incident"), "0");
    expect(container.textContent).toContain(
      "STOP — au moins une hypothèse est vide ou invalide",
    );
  });

  it("affiche RPO, RTO et coût de récupération sans les confondre", () => {
    expect(container.textContent).toContain("Exposition moyenne");
    expect(container.textContent).toContain("450");
    expect(container.textContent).toContain("Exposition maximale");
    expect(container.textContent).toContain("900");
    expect(container.textContent).toContain("4 050,00 €");
    expect(container.textContent).toContain("1 130,00 €");
    expect(container.textContent).toContain("1 280,00 €");
    expect(container.textContent).toContain("2 720,00 €");
    expect(container.textContent).toContain("1 440,00 €");
  });

  it("copie seulement une décision qualifiée et ne contacte aucun serveur", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });
    const fetchSpy = vi.spyOn(globalThis, "fetch");
    act(() => inputNamed(container, "Passation normale").click());
    fill(inputNamed(container, "Intervalle du point restaurable"), "3");
    fill(inputNamed(container, "Probabilité annuelle d’incident"), "10");
    fill(inputNamed(container, "Durée d’arrêt à simuler"), "11");
    const copy = [...container.querySelectorAll("button")].find((button) =>
      button.textContent?.includes("Copier le résumé"),
    );

    await act(async () => {
      copy?.click();
      await Promise.resolve();
    });

    expect(writeText).toHaveBeenCalledOnce();
    expect(writeText.mock.calls[0][0]).toContain(
      "TCO 36 mois — stabiliser : 141500",
    );
    expect(writeText.mock.calls[0][0]).toContain(
      "point restaurable toutes les 3 h",
    );
    expect(writeText.mock.calls[0][0]).toContain("probabilité annuelle 10 %");
    expect(writeText.mock.calls[0][0]).toContain("Arrêt saisi 11 h");
    expect(container.textContent).toContain("Le résumé a été copié");
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it.each([
    ["RPO", "Intervalle du point restaurable", "3"],
    ["RTO", "Probabilité annuelle d’incident", "10"],
    ["comptes", "Services sur comptes personnels", "6"],
  ])(
    "réinitialise le statut d’export après une modification %s",
    async (_group, label, value) => {
      const writeText = vi.fn().mockResolvedValue(undefined);
      Object.defineProperty(navigator, "clipboard", {
        configurable: true,
        value: { writeText },
      });
      act(() => inputNamed(container, "Passation normale").click());
      const copy = [...container.querySelectorAll("button")].find((button) =>
        button.textContent?.includes("Copier le résumé"),
      );

      await act(async () => {
        copy?.click();
        await Promise.resolve();
      });
      expect(container.textContent).toContain("Le résumé a été copié");

      fill(inputNamed(container, label), value);

      expect(container.textContent).toContain(
        "Les exports sont activés uniquement après qualification",
      );
      expect(container.textContent).not.toContain("Le résumé a été copié");
    },
  );

  it("propose CSV, XLSX et impression avec un contrat accessible", async () => {
    expect(
      container.querySelector(
        'a[download][href="/ressources/kit-reprise-saas-freelance.xlsx"]',
      ),
    ).not.toBeNull();

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

  it("refuse les montants partiellement lisibles", () => {
    expect(parseSaasHandoverAmount("12abc")).toBeNaN();
    expect(parseSaasHandoverAmount("1.2.3")).toBeNaN();
    expect(parseSaasHandoverAmount("12,5")).toBe(12.5);
    expect(parseSaasHandoverAmount(" 0 ")).toBe(0);
  });
});
