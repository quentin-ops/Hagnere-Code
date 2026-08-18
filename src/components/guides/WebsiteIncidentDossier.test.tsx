/** @vitest-environment happy-dom */

import axe from "axe-core";
import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { renderToString } from "react-dom/server";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { copyTextToClipboard } from "@/lib/clipboard";
import { WEBSITE_INCIDENT_RECOVERY_GATE_IDS } from "@/lib/website-incident-dossier";
import { WebsiteIncidentDossier } from "./WebsiteIncidentDossier";

vi.mock("@/lib/clipboard", () => ({
  copyTextToClipboard: vi.fn().mockResolvedValue(true),
}));

function buttonByText(container: HTMLElement, text: string): HTMLButtonElement {
  const button = [...container.querySelectorAll("button")].find((candidate) =>
    candidate.textContent?.includes(text),
  );
  if (!(button instanceof HTMLButtonElement)) {
    throw new Error(`Bouton introuvable : ${text}`);
  }
  return button;
}

function checkboxByLabel(
  container: HTMLElement,
  text: string,
): HTMLInputElement {
  const label = [...container.querySelectorAll("label")].find((candidate) =>
    candidate.textContent?.includes(text),
  );
  const checkbox = label?.querySelector('input[type="checkbox"]');
  if (!(checkbox instanceof HTMLInputElement)) {
    throw new Error(`Case à cocher introuvable : ${text}`);
  }
  return checkbox;
}

function inputByLabel(container: HTMLElement, text: string): HTMLInputElement {
  const label = [...container.querySelectorAll("label")].find((candidate) =>
    candidate.textContent?.includes(text),
  );
  const input = label?.querySelector("input");
  if (!(input instanceof HTMLInputElement)) {
    throw new Error(`Champ introuvable : ${text}`);
  }
  return input;
}

function changeControl(
  control: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
  value: string,
) {
  act(() => {
    const prototype =
      control instanceof HTMLInputElement
        ? HTMLInputElement.prototype
        : control instanceof HTMLTextAreaElement
          ? HTMLTextAreaElement.prototype
          : HTMLSelectElement.prototype;
    Object.getOwnPropertyDescriptor(prototype, "value")?.set?.call(
      control,
      value,
    );
    control.dispatchEvent(new Event("input", { bubbles: true }));
    control.dispatchEvent(new Event("change", { bubbles: true }));
  });
}

describe("WebsiteIncidentDossier", () => {
  let container: HTMLDivElement;
  let root: Root;

  beforeEach(() => {
    (
      globalThis as typeof globalThis & {
        IS_REACT_ACT_ENVIRONMENT: boolean;
      }
    ).IS_REACT_ACT_ENVIRONMENT = true;
    vi.clearAllMocks();
    Object.defineProperty(window, "print", {
      configurable: true,
      writable: true,
      value: vi.fn(),
    });
    Object.defineProperty(URL, "createObjectURL", {
      configurable: true,
      writable: true,
      value: vi.fn(() => "blob:incident-report"),
    });
    Object.defineProperty(URL, "revokeObjectURL", {
      configurable: true,
      writable: true,
      value: vi.fn(),
    });
    container = document.createElement("div");
    document.body.append(container);
    root = createRoot(container);
    act(() => root.render(<WebsiteIncidentDossier />));
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
    act(() => root.unmount());
    container.remove();
  });

  it("renders a complete local and printable contract on the server", () => {
    const html = renderToString(<WebsiteIncidentDossier />);

    expect(html).toContain("Dossier local d’incident et de reprise web");
    expect(html).toContain("aucune donnée envoyée");
    expect(html).toContain("aucune sauvegarde automatique");
    expect(html).toContain("dix portes");
    expect(html).toContain('data-read-time-exclude="true"');
    expect(html).toContain("website-incident-print-report");
    expect(html).toContain("font-size: 10pt");
    expect(html).toContain("line-height: 1.20");
    expect(html).toContain("white-space: pre-wrap");
    expect(html).toContain("Clôture interdite");
  });

  it("starts fail-closed with ten unverified gates and ND objectives", () => {
    expect(container.textContent).toContain("Dossier incomplet");
    expect(container.textContent).toContain("Clôture interdite");
    expect(container.textContent).toContain("10/10");
    expect(container.textContent).toContain("RTO : ND");
    expect(container.textContent).toContain("RPO : ND");
    expect(container.textContent).toContain("Total direct prudent : ND");
    expect(container.querySelectorAll("fieldset")).toHaveLength(
      WEBSITE_INCIDENT_RECOVERY_GATE_IDS.length,
    );
  });

  it("loads one coherent fictitious case while keeping HTTP 502 as a symptom", () => {
    act(() => buttonByText(container, "Charger l’exemple fictif").click());

    expect(container.textContent).toContain("Diagnostic technique");
    expect(container.textContent).toContain(
      "ne permet pas d’attribuer la cause",
    );
    expect(container.textContent).toContain("Cause non établie");
    expect(container.textContent).toContain("Clôturé sur preuves");
    expect(container.textContent).toContain("0/10");
    expect(container.textContent).toContain("1 032,5 €");
    expect(container.textContent).toContain("RTO : respecté");
    expect(container.textContent).toContain("RPO : respecté");
  });

  it("rejects a homepage-like proof substituted for independent access", () => {
    act(() => buttonByText(container, "Charger l’exemple fictif").click());

    const firstGate = container.querySelector("fieldset");
    const proofSelect = firstGate?.querySelectorAll("select")[1];
    expect(proofSelect).toBeInstanceOf(HTMLSelectElement);
    changeControl(proofSelect as HTMLSelectElement, "homepage-only");

    expect(firstGate?.textContent).toContain("Statut effectif : non vérifié");
    expect(firstGate?.textContent).toContain(
      "Le type de preuve ne démontre pas la réussite",
    );
    expect(container.textContent).toContain("1/10");
    expect(container.textContent).toContain("Clôture interdite");
  });

  it("requires human review before copying the best-effort redacted report", async () => {
    act(() => buttonByText(container, "Charger l’exemple fictif").click());
    const copyButton = buttonByText(container, "Copier le dossier");
    expect(copyButton.disabled).toBe(true);
    expect(container.textContent).toContain(
      "La détection automatique masque seulement certains motifs",
    );

    act(() => checkboxByLabel(container, "J’ai relu le rapport").click());
    expect(copyButton.disabled).toBe(false);
    await act(async () => copyButton.click());

    expect(copyTextToClipboard).toHaveBeenCalledTimes(1);
    expect(copyTextToClipboard).toHaveBeenCalledWith(
      expect.stringContaining("DOSSIER LOCAL D’INCIDENT ET DE REPRISE WEB"),
    );
    expect(copyTextToClipboard).toHaveBeenCalledWith(
      expect.stringContaining("Cause non établie"),
    );
    expect(container.textContent).toContain(
      "Le dossier a été copié localement après votre confirmation de relecture",
    );
  });

  it("downloads a local TXT report and opens the browser print dialog", () => {
    act(() => buttonByText(container, "Charger l’exemple fictif").click());
    changeControl(
      inputByLabel(container, "Référence d’incident"),
      "client-secret=sk-live-VERYPRIVATE/../../danger",
    );
    let downloadedFilename = "";
    const anchorClick = vi
      .spyOn(HTMLAnchorElement.prototype, "click")
      .mockImplementation(function (this: HTMLAnchorElement) {
        downloadedFilename = this.download;
      });
    act(() => checkboxByLabel(container, "J’ai relu le rapport").click());
    act(() => buttonByText(container, "Télécharger le TXT").click());

    expect(anchorClick).toHaveBeenCalledTimes(1);
    expect(downloadedFilename).toBe("dossier-incident-reprise.txt");
    expect(downloadedFilename).not.toContain("VERYPRIVATE");
    expect(URL.createObjectURL).toHaveBeenCalledWith(expect.any(Blob));
    expect(URL.revokeObjectURL).toHaveBeenCalledWith("blob:incident-report");
    expect(container.textContent).toContain(
      "Le fichier texte a été créé localement après votre confirmation de relecture",
    );

    act(() => buttonByText(container, "Imprimer le dossier").click());
    expect(window.print).toHaveBeenCalledTimes(1);
  });

  it("uses one modal reset dialog with inert background, focus trap, Escape and focus restoration", async () => {
    const trigger = buttonByText(container, "Effacer le dossier");

    act(() => trigger.click());
    const confirm = buttonByText(document.body, "Oui, effacer");
    const cancel = buttonByText(document.body, "Annuler");
    const dialog = document.body.querySelector('[role="alertdialog"]');
    expect(dialog).toBeInstanceOf(HTMLDivElement);
    expect(dialog?.getAttribute("aria-modal")).toBe("true");
    expect(document.activeElement).toBe(confirm);
    expect(container.hasAttribute("inert")).toBe(true);
    expect(container.getAttribute("aria-hidden")).toBe("true");

    act(() => {
      confirm.dispatchEvent(
        new KeyboardEvent("keydown", {
          key: "Tab",
          shiftKey: true,
          bubbles: true,
        }),
      );
    });
    expect(document.activeElement).toBe(cancel);
    act(() => {
      cancel.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Tab", bubbles: true }),
      );
    });
    expect(document.activeElement).toBe(confirm);

    const modalAxe = await axe.run(document.body, {
      rules: {
        region: { enabled: false },
      },
    });
    expect(
      modalAxe.violations.filter((violation) =>
        ["critical", "serious"].includes(violation.impact ?? ""),
      ),
    ).toEqual([]);

    act(() => {
      confirm.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
      );
    });
    expect(document.body.querySelector('[role="alertdialog"]')).toBeNull();
    expect(document.activeElement).toBe(trigger);
    expect(container.hasAttribute("inert")).toBe(false);
    expect(container.hasAttribute("aria-hidden")).toBe(false);

    act(() => trigger.click());
    act(() => buttonByText(document.body, "Oui, effacer").click());
    expect(document.activeElement).toBe(trigger);
    expect(container.textContent).toContain("10/10");
  });

  it("places actionable validation beside invalid fields and keeps gate blockers visible when collapsed", () => {
    const evaluationTime = container.querySelector(
      'input[placeholder="2026-07-27T12:00:00+02:00"]',
    );
    expect(evaluationTime).toBeInstanceOf(HTMLInputElement);
    expect(evaluationTime?.getAttribute("aria-invalid")).toBe("true");
    const describedBy = evaluationTime?.getAttribute("aria-describedby");
    expect(describedBy).toBeTruthy();
    expect(document.getElementById(describedBy ?? "")?.textContent).toContain(
      "instant ISO réel avec décalage explicite",
    );

    const gateDetails = [
      ...container.querySelectorAll<HTMLDetailsElement>(
        "section details:has(fieldset)",
      ),
    ];
    expect(gateDetails).toHaveLength(WEBSITE_INCIDENT_RECOVERY_GATE_IDS.length);
    expect(gateDetails.every((details) => !details.open)).toBe(true);
    expect(
      gateDetails.every((details) =>
        details.querySelector("summary")?.textContent?.includes("Bloquante"),
      ),
    ).toBe(true);

    act(() => buttonByText(container, "Charger l’exemple fictif").click());
    const firstGate = container.querySelector("fieldset");
    const proofSelect = firstGate?.querySelectorAll("select")[1];
    expect(proofSelect).toBeInstanceOf(HTMLSelectElement);
    changeControl(proofSelect as HTMLSelectElement, "homepage-only");
    expect(proofSelect?.getAttribute("aria-invalid")).toBe("true");
    const proofFeedback = proofSelect?.getAttribute("aria-describedby");
    expect(document.getElementById(proofFeedback ?? "")?.textContent).toContain(
      "ne suffit pas pour valider",
    );
    expect(
      firstGate?.closest("details")?.querySelector("summary")?.textContent,
    ).toContain("Bloquante");

    act(() => buttonByText(container, "Charger l’exemple fictif").click());
    const criticalJourney = inputByLabel(container, "Parcours métier critique");
    changeControl(criticalJourney, "");
    expect(criticalJourney.getAttribute("aria-invalid")).toBe("true");
    const criticalJourneyFeedback =
      criticalJourney.getAttribute("aria-describedby");
    expect(criticalJourneyFeedback).toBeTruthy();
    expect(
      document.getElementById(criticalJourneyFeedback ?? "")?.textContent,
    ).toContain(
      "ne peut pas réussir tant que le parcours à recetter n’est pas décrit",
    );
  });

  it("exposes example and export actions before the long form and keeps the report preview keyboard-scrollable", () => {
    const actionSection = container.querySelector(`[id$="-incident-actions"]`);
    const contextTitle = [...container.querySelectorAll("h4")].find((heading) =>
      heading.textContent?.includes("Figer les faits"),
    );
    expect(actionSection).toBeInstanceOf(HTMLElement);
    expect(contextTitle).toBeInstanceOf(HTMLElement);
    if (!actionSection || !contextTitle) {
      throw new Error("La zone d’actions doit précéder le formulaire.");
    }
    expect(
      actionSection.compareDocumentPosition(contextTitle) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();

    const preview = actionSection.querySelector("pre");
    expect(preview?.getAttribute("tabindex")).toBe("0");
    expect(preview?.className).toContain("whitespace-pre-wrap");
    expect(buttonByText(container, "Copier le dossier").disabled).toBe(true);
  });

  it("bounds free-text inputs and has no serious accessibility violation", async () => {
    const textareas = [...container.querySelectorAll("textarea")];
    expect(textareas.length).toBeGreaterThan(0);
    expect(
      textareas.every(
        (textarea) => textarea.maxLength > 0 && textarea.maxLength <= 1_500,
      ),
    ).toBe(true);

    const result = await axe.run(container, {
      rules: {
        region: { enabled: false },
      },
    });
    expect(
      result.violations.filter((violation) =>
        ["critical", "serious"].includes(violation.impact ?? ""),
      ),
    ).toEqual([]);
  });
});
