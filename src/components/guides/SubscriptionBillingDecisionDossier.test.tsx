/** @vitest-environment happy-dom */

import axe from "axe-core";
import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { renderToString } from "react-dom/server";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { SubscriptionBillingDecisionDossier } from "./SubscriptionBillingDecisionDossier";

function inputNamed(container: HTMLElement, labelText: string) {
  const label = [...container.querySelectorAll("label")].find((candidate) =>
    candidate.textContent?.includes(labelText),
  );
  const input = label?.querySelector("input");
  if (!(input instanceof HTMLInputElement)) {
    throw new Error(`Champ introuvable : ${labelText}`);
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

function toggle(input: HTMLInputElement) {
  act(() => {
    input.click();
  });
}

describe("SubscriptionBillingDecisionDossier", () => {
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
    act(() => root.render(<SubscriptionBillingDecisionDossier />));
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
  });

  it("renders a left-aligned local decision dossier on the server", () => {
    const html = renderToString(<SubscriptionBillingDecisionDossier />);

    expect(html).toContain("Dossier de décision — données locales");
    expect(html).toContain("Rien n’est envoyé");
    expect(html).toContain("text-left");
    expect(html).not.toContain("text-center");
  });

  it("shows the four central TCO results and the corrected 97-client threshold", () => {
    expect(container.textContent).toContain("12 960 €");
    expect(container.textContent).toContain("12 760 €");
    expect(container.textContent).toContain("34 820 €");
    expect(container.textContent).toContain("98 160 €");
    expect(container.textContent).toContain("96,4 clients théoriques");
    expect(container.textContent).toContain("97 clients entiers");
    expect(container.textContent).toContain("Moteur hébergé");
  });

  it("propagates a 500-client mutation across all four options", () => {
    fill(inputNamed(container, "Clients actifs moyens"), "500");

    expect(container.textContent).toContain("56 160 €");
    expect(container.textContent).toContain("33 880 €");
    expect(container.textContent).toContain("48 740 €");
    expect(container.textContent).toContain("102 480 €");
  });

  it("names the option that dominates instead of displaying a false threshold", () => {
    fill(inputNamed(container, "Facturé moyen / client / mois"), "500");

    expect(container.textContent).toContain(
      "Processus manuel explicite présente le coût le plus bas pour tout volume positif",
    );
  });

  it("reconciles the complete Planor month without confusing cash and receivable", () => {
    expect(container.textContent).toContain(
      "STOP — ne clôturez pas et n’automatisez pas",
    );
    expect(container.textContent).toContain(
      "La qualification fiscale du flux reste inconnue",
    );

    toggle(inputNamed(container, "Non requise pour ce test fictif"));

    expect(container.textContent).toContain("PASS — le mois se rapproche");
    expect(container.textContent).toContain("Net facturé : 9 900,00 €");
    expect(container.textContent).toContain("Cash net : 9 600,00 €");
    expect(container.textContent).toContain("Créance calculée : 300,00 €");
  });

  it("keeps a blank credit-note amount unknown", () => {
    toggle(inputNamed(container, "Non requise pour ce test fictif"));
    fill(inputNamed(container, "Avoirs"), "");

    expect(container.textContent).toContain(
      "À REVOIR — une information reste inconnue",
    );
    expect(container.textContent).toContain("Net facturé : inconnu");
    expect(inputNamed(container, "Avoirs").getAttribute("aria-invalid")).toBe(
      "true",
    );
  });

  it("stops a one-euro mismatch and a missing access policy", () => {
    toggle(inputNamed(container, "Non requise pour ce test fictif"));
    fill(inputNamed(container, "Paiements affectés"), "9599");

    expect(container.textContent).toContain(
      "STOP — ne clôturez pas et n’automatisez pas",
    );
    expect(container.textContent).toContain(
      "L’écart inexpliqué est de -1.00 EUR",
    );

    fill(inputNamed(container, "Paiements affectés"), "9600");
    toggle(
      inputNamed(container, "La politique des droits d’accès est validée"),
    );
    expect(container.textContent).toContain("Aucune politique d’accès validée");
  });

  it("offers the controlled XLSX and has no serious accessibility violation", async () => {
    const link = container.querySelector(
      'a[download][href="/ressources/kit-pilotage-facturation-saas.xlsx"]',
    );
    expect(link).not.toBeNull();
    expect(container.querySelectorAll('input[type="number"]')).toHaveLength(32);

    const results = await axe.run(container, {
      rules: {
        "color-contrast": { enabled: false },
      },
    });
    expect(
      results.violations.filter(
        (violation) =>
          violation.impact === "critical" || violation.impact === "serious",
      ),
    ).toEqual([]);
  });
});
