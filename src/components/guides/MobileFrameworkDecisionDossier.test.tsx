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
import { copyTextToClipboard } from "@/lib/clipboard";
import { MOBILE_GATE_IDS } from "@/lib/mobile-framework-decision";
import { MobileFrameworkDecisionDossier } from "./MobileFrameworkDecisionDossier";

vi.mock("@/lib/clipboard", () => ({
  copyTextToClipboard: vi.fn().mockResolvedValue(true),
}));

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

function buttonByText(container: HTMLElement, text: string): HTMLButtonElement {
  const button = [...container.querySelectorAll("button")].find((candidate) =>
    candidate.textContent?.includes(text),
  );
  if (!button) throw new Error(`Bouton introuvable : ${text}`);
  return button;
}

function labelControl<T extends HTMLElement>(
  container: HTMLElement,
  labelText: string,
  selector: string,
): T {
  const label = [...container.querySelectorAll("label")].find((candidate) =>
    candidate.textContent?.includes(labelText),
  );
  const control = label?.querySelector(selector);
  if (!control) throw new Error(`Contrôle introuvable : ${labelText}`);
  return control as T;
}

function evidenceForGate(select: HTMLSelectElement): HTMLTextAreaElement {
  const evidence = select.closest("div")?.querySelector("textarea");
  if (!evidence) throw new Error("Champ de preuve introuvable");
  return evidence;
}

describe("MobileFrameworkDecisionDossier", () => {
  let container: HTMLDivElement;
  let root: Root;

  beforeAll(() => {
    (
      globalThis as typeof globalThis & { IS_REACT_ACT_ENVIRONMENT: boolean }
    ).IS_REACT_ACT_ENVIRONMENT = true;
  });

  beforeEach(() => {
    vi.clearAllMocks();
    container = document.createElement("div");
    document.body.append(container);
    root = createRoot(container);
    act(() => root.render(<MobileFrameworkDecisionDossier />));
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
    vi.restoreAllMocks();
  });

  it("keeps two independent candidate dossiers", () => {
    const tabs = [
      ...container.querySelectorAll("button[aria-pressed]"),
    ] as HTMLButtonElement[];
    expect(tabs).toHaveLength(2);
    expect(
      tabs.filter((button) => button.getAttribute("aria-pressed") === "true"),
    ).toHaveLength(1);

    const name = labelControl<HTMLInputElement>(
      container,
      "Nom de l’option",
      "input",
    );
    changeControl(name, "React Native + Expo");
    expect(tabs[0].textContent).toContain("React Native + Expo");

    act(() => tabs[1].click());
    expect(
      labelControl<HTMLInputElement>(container, "Nom de l’option", "input")
        .value,
    ).toBe("Option B");

    act(() => tabs[0].click());
    expect(
      labelControl<HTMLInputElement>(container, "Nom de l’option", "input")
        .value,
    ).toBe("React Native + Expo");
  });

  it("requires evidence before a pass qualifies or a fail eliminates", () => {
    expect(container.textContent).toContain("Option non qualifiée");

    const firstStatus = container.querySelector("select") as HTMLSelectElement;
    changeControl(firstStatus, "pass");
    expect(container.textContent).toContain("Option non qualifiée");

    changeControl(evidenceForGate(firstStatus), "   ");
    expect(container.textContent).toContain("Option non qualifiée");

    changeControl(firstStatus, "fail");
    expect(container.textContent).toContain("Option non qualifiée");

    changeControl(
      evidenceForGate(firstStatus),
      "Échec daté sur iPhone 12, build abc123.",
    );
    expect(container.textContent).toContain("Option éliminée");

    for (const select of container.querySelectorAll(
      "select",
    ) as NodeListOf<HTMLSelectElement>) {
      changeControl(select, "pass");
      changeControl(
        evidenceForGate(select),
        `Preuve datée sur appareil — ${select.parentElement?.textContent}`,
      );
    }
    expect(container.textContent).toContain("Option qualifiée sur les portes");
    expect(container.querySelectorAll("select")).toHaveLength(
      MOBILE_GATE_IDS.length,
    );
  });

  it("keeps the TCO at ND until every required field is known", () => {
    const values: Array<[string, string]> = [
      ["Taux des journées techniques", "650"],
      ["Coût du temps interne", "500"],
      ["Construction initiale", "116"],
      ["Appareils, comptes et mise en place", "3000"],
      ["Maintenance technique", "20"],
      ["Évolutions métier", "12"],
      ["Incidents et sécurité", "6"],
      ["Temps interne", "8"],
      ["Sortie et reprise", "12"],
    ];

    for (const [label, value] of values) {
      changeControl(
        labelControl<HTMLInputElement>(container, label, "input"),
        value,
      );
    }
    expect(container.textContent).toContain("ND · 1 poste(s) manquant(s)");

    changeControl(
      labelControl<HTMLInputElement>(container, "Services récurrents", "input"),
      "4800",
    );
    expect(container.textContent).toContain("119");
    expect(container.textContent).toContain("700 € HT");
  });

  it("shows a tested sensitivity without changing the baseline", () => {
    const values: Array<[string, string]> = [
      ["Taux des journées techniques", "650"],
      ["Coût du temps interne", "500"],
      ["Construction initiale", "116"],
      ["Appareils, comptes et mise en place", "3000"],
      ["Maintenance technique", "20"],
      ["Évolutions métier", "12"],
      ["Incidents et sécurité", "6"],
      ["Temps interne", "8"],
      ["Services récurrents", "4800"],
      ["Sortie et reprise", "12"],
      ["Sensibilité", "20"],
    ];
    for (const [label, value] of values) {
      changeControl(
        labelControl<HTMLInputElement>(container, label, "input"),
        value,
      );
    }

    expect(container.textContent).toContain("Sensibilité avec +20 jours");
    expect(container.textContent).toContain("199");
    expect(container.textContent).toContain("700 € HT");
    expect(container.textContent).toContain("119");
  });

  it("rejects an invalid sensitivity accessibly and accepts zero", () => {
    const sensitivity = labelControl<HTMLInputElement>(
      container,
      "Sensibilité",
      "input",
    );

    changeControl(sensitivity, "-1");
    expect(sensitivity.value).toBe("");
    expect(sensitivity.getAttribute("aria-invalid")).toBe("true");
    expect(container.querySelector('[role="alert"]')?.textContent).toContain(
      "nombre fini supérieur ou égal à zéro",
    );
    expect(container.textContent).not.toContain("+-");

    changeControl(sensitivity, "0");
    expect(sensitivity.value).toBe("0");
    expect(sensitivity.getAttribute("aria-invalid")).toBe("false");
    expect(container.textContent).toContain("Sensibilité avec +0 jours");
    expect(container.textContent).not.toContain("+-");
  });

  it("protects reset with an accessible confirmation", () => {
    const need = labelControl<HTMLTextAreaElement>(
      container,
      "Besoin et résultat attendu",
      "textarea",
    );
    changeControl(need, "Intervention hors ligne");

    act(() => buttonByText(container, "Réinitialiser").click());
    expect(container.querySelector('[role="alert"]')).not.toBeNull();
    expect(container.querySelector('[role="alert"]')?.textContent).toContain(
      "Cette action ne peut pas être annulée",
    );

    act(() => buttonByText(container, "Annuler et conserver").click());
    expect(need.value).toBe("Intervention hors ligne");

    act(() => buttonByText(container, "Réinitialiser").click());
    act(() => buttonByText(container, "Effacer définitivement").click());
    expect(
      labelControl<HTMLTextAreaElement>(
        container,
        "Besoin et résultat attendu",
        "textarea",
      ).value,
    ).toBe("");
  });

  it("prints only the scoped report and hides article controls", () => {
    const print = vi.fn();
    Object.defineProperty(window, "print", {
      configurable: true,
      value: print,
    });

    act(() => buttonByText(container, "Imprimer le dossier").click());

    const style = container.querySelector("style")?.textContent ?? "";
    expect(print).toHaveBeenCalledOnce();
    expect(style).toContain("body *:not(#mobile-framework-decision-dossier)");
    expect(style).toContain(
      "#mobile-framework-decision-dossier > :not(.mobile-decision-print-report)",
    );
    expect(style).toContain("#mobile-framework-decision-dossier button");
    expect(
      container.querySelector(".mobile-decision-print-report"),
    ).not.toBeNull();
    expect(
      container
        .querySelector(".mobile-decision-print-report")
        ?.getAttribute("data-read-time-exclude"),
    ).toBe("true");
  });

  it("copies a complete neutral report", async () => {
    for (const select of container.querySelectorAll("select")) {
      changeControl(select, "pass");
    }

    await act(async () => {
      buttonByText(container, "Copier le dossier").click();
    });

    expect(copyTextToClipboard).toHaveBeenCalledOnce();
    const copiedReport = vi.mocked(copyTextToClipboard).mock.calls[0][0];
    expect(copiedReport).toContain("DOSSIER DE PREUVE AVANT FRAMEWORK");
    expect(copiedReport).toContain("Verdict des portes : NON QUALIFIÉE");
    expect(copiedReport).toContain(
      "ND — statut PASS non étayé ; preuve requise",
    );
    expect(copiedReport).toContain("Taux des journées techniques : ND");
    expect(copiedReport).toContain("Sensibilité 12 mois : ND");
    expect(copiedReport).toContain("Sensibilité 36 mois : ND");
    expect(copiedReport).toContain("Sensibilité 60 mois : ND");
    expect(copiedReport).toContain("aucun vainqueur automatique");
    expect(container.textContent).toContain("Dossier copié");
  });

  it("offers printing, not a hidden selection, when copy fails", async () => {
    vi.mocked(copyTextToClipboard).mockResolvedValueOnce(false);

    await act(async () => {
      buttonByText(container, "Copier le dossier").click();
    });

    expect(copyTextToClipboard).toHaveBeenCalledOnce();
    expect(container.textContent).toContain(
      "Utilisez le bouton « Imprimer le dossier »",
    );
    expect(container.textContent).not.toContain("sélectionnez le rapport");
  });
});
