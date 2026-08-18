/** @vitest-environment happy-dom */

import axe from "axe-core";
import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { renderToString } from "react-dom/server";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { SiteAidQuickCheck } from "./SiteAidQuickCheck";

function buttonByText(container: HTMLElement, text: string): HTMLButtonElement {
  const button = [...container.querySelectorAll("button")].find((candidate) =>
    candidate.textContent?.includes(text),
  );
  if (!(button instanceof HTMLButtonElement)) {
    throw new Error(`Bouton introuvable : ${text}`);
  }
  return button;
}

function chooseGrant(container: HTMLElement) {
  selectValue(container, "site-aid-support-type", "grant");
}

function selectValue(container: HTMLElement, id: string, value: string) {
  const select = container.querySelector(`#${id}`);
  if (!(select instanceof HTMLSelectElement)) {
    throw new Error(`Sélecteur introuvable : ${id}`);
  }
  act(() => {
    select.value = value;
    select.dispatchEvent(new Event("change", { bubbles: true }));
  });
}

function setNumber(container: HTMLElement, id: string, value: number) {
  const input = container.querySelector(`#${id}`);
  if (!(input instanceof HTMLInputElement)) {
    throw new Error(`Champ numérique introuvable : ${id}`);
  }
  act(() => {
    input.value = String(value);
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
  });
}

describe("SiteAidQuickCheck", () => {
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
    act(() => root.render(<SiteAidQuickCheck />));
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
  });

  it("renders a short discovery branch on the server", () => {
    const html = renderToString(<SiteAidQuickCheck />);

    expect(html).toContain("Tri local — 3 à 5 minutes");
    expect(html).toContain("France Num");
    expect(html).toContain("Les-aides.fr — réseau CCI");
    expect(html).not.toContain("Aides-territoires");
    expect(html).not.toContain("<textarea");
  });

  it("separates discovery from the official-source check", () => {
    expect(container.textContent).toContain(
      "Commencez par trouver une fiche officielle actuelle",
    );

    act(() => buttonByText(container, "J’ai une fiche officielle").click());
    chooseGrant(container);

    expect(container.textContent).toContain(
      "Vérifier la piste, sans analyser le texte de la pièce",
    );
    expect(container.querySelectorAll("select")).toHaveLength(5);
    expect(container.querySelector("textarea")).toBeNull();
  });

  it("shows one step at a time", () => {
    act(() => buttonByText(container, "J’ai une fiche officielle").click());
    chooseGrant(container);
    act(() => buttonByText(container, "Continuer vers les montants").click());

    expect(container.textContent).toContain(
      "Chiffrer uniquement ce qui est connu",
    );
    expect(container.textContent).not.toContain(
      "Vérifier la piste, sans analyser le texte de la pièce",
    );
    expect(container.textContent).not.toContain("Décision de travail");
  });

  it("moves keyboard focus to each newly displayed step", () => {
    act(() => buttonByText(container, "J’ai une fiche officielle").click());
    expect(document.activeElement?.id).toBe("site-aid-quick-step-1");

    chooseGrant(container);
    act(() => buttonByText(container, "Continuer vers les montants").click());
    expect(document.activeElement?.id).toBe("site-aid-quick-step-2");

    act(() => buttonByText(container, "Voir la décision").click());
    expect(document.activeElement?.id).toBe("site-aid-quick-step-3");
  });

  it("connects every visible form control to contextual help", () => {
    act(() => buttonByText(container, "J’ai une fiche officielle").click());
    chooseGrant(container);

    for (const control of container.querySelectorAll("input, select")) {
      const helpId = control.getAttribute("aria-describedby");
      expect(helpId).toBeTruthy();
      expect(container.querySelector(`#${helpId}`)).not.toBeNull();
    }
  });

  it("stops a loan before displaying or reading grant-only fields", () => {
    act(() => buttonByText(container, "J’ai une fiche officielle").click());
    selectValue(container, "site-aid-support-type", "loan-or-guarantee");

    expect(container.querySelectorAll("select")).toHaveLength(1);
    act(() => buttonByText(container, "Continuer vers l’orientation").click());

    expect(container.querySelector("input")).toBeNull();
    expect(container.textContent).toContain(
      "Cet instrument sort du calcul de subvention",
    );

    act(() => buttonByText(container, "Voir la décision").click());
    expect(container.textContent).toContain(
      "Analysez cet instrument séparément du coût du site",
    );
    expect(container.textContent).toContain("Subvention au budget");
    expect(container.textContent).toContain("0 €");
  });

  it("purges and marks forecast values as not applicable at the paid stage", () => {
    act(() => buttonByText(container, "J’ai une fiche officielle").click());
    chooseGrant(container);
    selectValue(
      container,
      "site-aid-commitment-rule",
      "forbidden-before-decision",
    );
    act(() => buttonByText(container, "Continuer vers les montants").click());

    setNumber(container, "site-aid-eligible", 7_000);
    setNumber(container, "site-aid-rate", 30);
    setNumber(container, "site-aid-cap", 7_500);
    selectValue(container, "site-aid-viable-zero", "no");
    selectValue(container, "site-aid-cash", "no");
    setNumber(container, "site-aid-delay-months", 2);
    setNumber(container, "site-aid-monthly-margin", 1_300);
    setNumber(container, "site-aid-application-costs", 100);
    selectValue(container, "site-aid-notification-stage", "paid");

    expect(container.querySelector("#site-aid-eligible")).toBeNull();
    expect(container.querySelector("#site-aid-viable-zero")).toBeNull();
    expect(container.querySelector("#site-aid-cash")).toBeNull();
    expect(container.querySelector("#site-aid-delay-months")).toBeNull();

    act(() => buttonByText(container, "Vérifier la piste").click());
    expect(container.querySelector("#site-aid-commitment-rule")).toBeNull();
    expect(container.textContent).toContain(
      "l’ordre d’engagement n’est plus une porte prévisionnelle",
    );

    act(() => buttonByText(container, "Chiffrer").click());
    act(() => buttonByText(container, "Voir la décision").click());
    expect(container.textContent).toContain("Sans objet — stade payé");
    expect(container.textContent).not.toContain("2 700");
  });

  it("keeps a human-readable download available for incomplete data", () => {
    act(() => buttonByText(container, "J’ai une fiche officielle").click());
    act(() => buttonByText(container, "Décider").click());

    expect(
      buttonByText(container, "Télécharger le dossier de travail").disabled,
    ).toBe(false);
    expect(container.textContent).toContain(
      "Le téléchargement reste disponible même si le dossier est incomplet",
    );
  });

  it("has no obvious accessibility violation on the official-source branch", async () => {
    act(() => buttonByText(container, "J’ai une fiche officielle").click());
    chooseGrant(container);

    const results = await axe.run(container);
    expect(results.violations).toEqual([]);
  });
});
