/** @vitest-environment happy-dom */

import axe from "axe-core";
import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { renderToString } from "react-dom/server";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { SiteOwnershipExitDossier } from "./SiteOwnershipExitDossier";

function buttonByText(container: HTMLElement, text: string): HTMLButtonElement {
  const button = [...container.querySelectorAll("button")].find((candidate) =>
    candidate.textContent?.includes(text),
  );
  if (!(button instanceof HTMLButtonElement)) {
    throw new Error(`Bouton introuvable : ${text}`);
  }
  return button;
}

describe("SiteOwnershipExitDossier", () => {
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
    act(() => root.render(<SiteOwnershipExitDossier />));
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
    act(() => root.unmount());
    container.remove();
  });

  it("renders the complete local dossier on the server", () => {
    const html = renderToString(<SiteOwnershipExitDossier />);
    const normalizedHtml = html.replaceAll("<!-- -->", "");

    expect(normalizedHtml).toContain(
      "Dossier 14 accès · 8 preuves · 6 questions · TCO 12/36/60",
    );
    expect(html).toContain("aucune donnée envoyée");
    expect(html).toContain("Aucune sauvegarde automatique");
    expect(html).toContain("@page { size: A4; margin: 14mm; }");
    expect(html).toContain("page-break-inside: avoid");
    expect(html).toContain("Nom de domaine et bureau d’enregistrement");
    expect(html).toContain("Restauration isolée");
    expect(html).toContain("Ce qui est créé pour le projet est-il identifié");
    expect(html).toContain("Faire chiffrer la voie juridique");
  });

  it("exposes exactly 14 access, 8 proof and 6 contract audit rows", () => {
    const details = [...container.querySelectorAll("details")];
    expect(details).toHaveLength(28);
    expect(
      details.filter((detail) =>
        detail.textContent?.includes(
          "Nom de domaine et bureau d’enregistrement",
        ),
      ),
    ).toHaveLength(1);
    expect(
      details.filter((detail) =>
        detail.textContent?.includes("Répétition de passation"),
      ),
    ).toHaveLength(1);
    expect(
      details.filter((detail) =>
        detail.textContent?.includes(
          "La sortie est-elle définie comme un livrable testable",
        ),
      ),
    ).toHaveLength(1);
    expect(
      details.filter((detail) =>
        detail.textContent?.includes(
          "Le DPA et la chaîne des sous-traitants de données",
        ),
      ),
    ).toHaveLength(1);
  });

  it("loads the explicitly fictional case without inventing a legal quote", () => {
    act(() => buttonByText(container, "Charger l’exemple fictif").click());

    const report = container.querySelector(
      ".site-ownership-print-report",
    )?.textContent;
    expect(report).toContain("Alp’Isolation — exemple fictif");
    expect(report).toContain("Dépôt non remis — aucun build tiers possible");
    expect(report).toContain("FAIRE CHIFFRER LA VOIE JURIDIQUE");
    expect(report).toContain("TCO 12 mois : ND");
    expect(report).toContain("Un scénario ND ne vaut ni zéro ni exclusion");
    expect(container.textContent).toContain("Blocage ou échec observé");
    expect(container.textContent).toContain("36 mois : ND");
    const visiblePriorities =
      container.querySelector('[role="status"] ul')?.textContent;
    expect(visiblePriorities).toContain("échec");
    expect(visiblePriorities).toContain(": non");
    expect(visiblePriorities).toContain("non documenté");
    expect(visiblePriorities).not.toContain(": nd");
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "en échec",
    );
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "réponse(s) négative(s)",
    );
  });

  it("keeps the TXT export local and available for an incomplete dossier", () => {
    vi.useFakeTimers();
    const objectUrl = vi
      .spyOn(URL, "createObjectURL")
      .mockReturnValue("blob:local-dossier");
    const revoke = vi
      .spyOn(URL, "revokeObjectURL")
      .mockImplementation(() => {});
    const click = vi
      .spyOn(HTMLAnchorElement.prototype, "click")
      .mockImplementation(() => {});

    act(() => buttonByText(container, "Télécharger le TXT").click());

    expect(objectUrl).toHaveBeenCalledTimes(1);
    expect(click).toHaveBeenCalledTimes(1);
    expect(revoke).not.toHaveBeenCalled();
    act(() => vi.advanceTimersByTime(1_000));
    expect(revoke).toHaveBeenCalledWith("blob:local-dossier");
    expect(container.textContent).toContain("Fichier préparé localement");
    vi.useRealTimers();
  });

  it("uses a two-step reset instead of erasing inputs on the first click", () => {
    act(() => buttonByText(container, "Charger l’exemple fictif").click());
    expect(
      container.querySelector<HTMLInputElement>('input[type="url"]')?.value,
    ).toBe("https://exemple.invalid");

    act(() => buttonByText(container, "Effacer le dossier").click());
    expect(
      container.querySelector<HTMLInputElement>('input[type="url"]')?.value,
    ).toBe("https://exemple.invalid");

    act(() => buttonByText(container, "Oui, effacer").click());
    expect(
      container.querySelector<HTMLInputElement>('input[type="url"]')?.value,
    ).toBe("");
    expect(container.textContent).toContain("Dossier incomplet");
  });

  it("moves focus into the reset confirmation and restores it afterwards", () => {
    const resetTrigger = buttonByText(container, "Effacer le dossier");
    resetTrigger.focus();

    act(() => resetTrigger.click());
    expect(document.activeElement).toBe(
      buttonByText(container, "Oui, effacer"),
    );

    act(() => buttonByText(container, "Annuler").click());
    expect(document.activeElement).toBe(
      buttonByText(container, "Effacer le dossier"),
    );

    act(() => buttonByText(container, "Effacer le dossier").click());
    act(() => buttonByText(container, "Oui, effacer").click());
    expect(document.activeElement).toBe(
      buttonByText(container, "Effacer le dossier"),
    );
  });

  it("has no obvious accessibility violation in the empty state", async () => {
    const results = await axe.run(container);
    expect(results.violations).toEqual([]);
  });

  it("has no obvious accessibility violation with the example and every audit row open", async () => {
    act(() => buttonByText(container, "Charger l’exemple fictif").click());
    for (const detail of container.querySelectorAll("details")) {
      detail.open = true;
    }

    const results = await axe.run(container);
    expect(results.violations).toEqual([]);
  });
});
