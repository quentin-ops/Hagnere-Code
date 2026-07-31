/** @vitest-environment happy-dom */

import { act } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createRoot, type Root } from "react-dom/client";
import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
} from "vitest";
import {
  ApplicationRoiCalculator,
  createInitialApplicationRoiInputs,
  interpretApplicationRoiResult,
} from "./application-roi-calculator";

function change(
  control: HTMLInputElement | HTMLSelectElement,
  value: string,
) {
  act(() => {
    const prototype =
      control instanceof HTMLSelectElement
        ? HTMLSelectElement.prototype
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

describe("ApplicationRoiCalculator", () => {
  it("renders the complete fictional example without claiming a market benchmark", () => {
    const html = renderToStaticMarkup(<ApplicationRoiCalculator />);

    expect(html).toContain("Calcul local · aucune donnée envoyée");
    expect(html).toContain(
      "Trésorerie et valeur économique donnent deux résultats",
    );
    expect(html).toContain("TCO de trésorerie");
    expect(html).toContain("TCO économique");
    expect(html).toContain("ROI de trésorerie");
    expect(html).toContain("ROI économique");
    expect(html).toContain("Décaissements évités");
    expect(html).toContain("Capacité utile");
    expect(html).toContain("Qualitatif");
    expect(html).toContain("Gain net de trésorerie");
    expect(html).toContain("Gain net économique");
    expect(html).toContain("Mois 39");
    expect(html).toContain("Ces trois scénarios complets");
    expect(html).toContain("hébergement + maintenance");
    expect(html).toContain('aria-live="polite"');
    expect(html).not.toMatch(/ROI moyen|retour moyen|délai moyen/i);
    expect(html).not.toContain("39,49");
  });

  it("exposes every required TCO family and the distinction between zero and unknown", () => {
    const html = renderToStaticMarkup(<ApplicationRoiCalculator />);

    for (const label of [
      "Cadrage",
      "Réalisation + intégrations",
      "Migration + formation et changement",
      "Temps interne",
      "Licences + hébergement",
      "Support + maintenance",
      "Sécurité + conformité",
      "Évolutions",
      "Double exploitation",
      "Sortie + réversibilité",
    ]) {
      expect(html, label).toContain(label);
    }
    expect(html).toContain("À chiffrer — arrêt du calcul");
    expect(html).toContain("hypothèses explicites");
    expect(html).toContain("sans transformer une inconnue en zéro");
  });

  it("stops the visible calculation when a cost is unknown", () => {
    const inputs = createInitialApplicationRoiInputs();
    inputs.costs = inputs.costs.map((cost) =>
      cost.id === "security"
        ? { ...cost, knowledge: "unknown", amount: null }
        : cost,
    );
    const html = renderToStaticMarkup(
      <ApplicationRoiCalculator initialInputs={inputs} />,
    );

    expect(html).toContain("STOP · aucune estimation produite");
    expect(html).toContain("Le calcul est arrêté");
    expect(html).toContain("Sécurité et conformité");
    expect(html).not.toContain(
      "Trésorerie et valeur économique donnent deux résultats",
    );
  });

  it("stops visibly when finite entries exceed the calculator numeric range", () => {
    const inputs = createInitialApplicationRoiInputs();
    inputs.annualHoursOnTask = Number.MAX_VALUE;
    inputs.economicHourlyValue = Number.MAX_VALUE;
    const html = renderToStaticMarkup(
      <ApplicationRoiCalculator initialInputs={inputs} />,
    );

    expect(html).toContain("STOP · aucune estimation produite");
    expect(html).toContain("plage numérique exploitable du calculateur");
    expect(html).not.toContain(
      "Trésorerie et valeur économique donnent deux résultats",
    );
    expect(html).not.toMatch(/Infinity|NaN/);
  });

  it("associates fields explicitly, uses native controls and never submits data", () => {
    const html = renderToStaticMarkup(<ApplicationRoiCalculator />);

    expect(html).toContain('for="roi-horizon"');
    expect(html).toContain('id="roi-horizon"');
    expect(html).toContain('for="knowledge-cadrage"');
    expect(html).toContain('id="knowledge-cadrage"');
    expect(html).toContain('aria-pressed="true"');
    expect(html).toContain('type="button"');
    expect(html).toContain("<caption");
    expect(html).not.toContain("<form");
    expect(html).not.toContain('type="submit"');
  });

  it("keeps unit suffixes and disabled controls readable in dark mode", () => {
    const inputs = createInitialApplicationRoiInputs();
    inputs.costs = inputs.costs.map((cost) =>
      cost.id === "security"
        ? { ...cost, knowledge: "unknown", amount: null }
        : cost,
    );
    const wrapper = document.createElement("div");
    wrapper.innerHTML = renderToStaticMarkup(
      <ApplicationRoiCalculator initialInputs={inputs} />,
    );
    const suffixes = [...wrapper.querySelectorAll('span[aria-hidden="true"]')]
      .filter((element) =>
        ["mois", "h", "%", "€"].includes(element.textContent?.trim() ?? ""),
      );

    expect(suffixes.length).toBeGreaterThan(10);
    for (const suffix of suffixes) {
      expect(suffix.classList.contains("dark:text-zinc-300")).toBe(true);
    }

    const disabledControls = [...wrapper.querySelectorAll(":disabled")];
    expect(disabledControls.length).toBeGreaterThan(0);
    for (const control of disabledControls) {
      expect(control.classList.contains("dark:disabled:text-zinc-300")).toBe(
        true,
      );
    }
  });

  it("renders non-applicable cash ROI separately from a positive economic ROI", () => {
    const inputs = createInitialApplicationRoiInputs();
    inputs.costs = inputs.costs.map((cost) =>
      cost.id === "initial-internal"
        ? { ...cost, amount: 100 }
        : {
            ...cost,
            knowledge: "not-applicable" as const,
            amount: null,
          },
    );
    const html = renderToStaticMarkup(
      <ApplicationRoiCalculator initialInputs={inputs} />,
    );

    expect(html).toContain(
      "Le ROI de trésorerie n’est pas applicable : son TCO est nul.",
    );
    expect(html).toContain("Le ROI économique est positif");
    expect(html).not.toContain("Les deux lectures sont positives");
  });

  it("renders an exact zero ROI as an equilibrium, never as positive", () => {
    const inputs = createInitialApplicationRoiInputs();
    Object.assign(inputs, {
      annualHoursOnTask: 0,
      avoidableCashHourlyOutlay: 0,
      economicHourlyValue: 0,
      technicallyRemovablePct: 0,
      laborCashRemovalPct: 0,
      usefulReallocationPct: 0,
      annualAvoidableCashCost: 1200,
    });
    inputs.costs = inputs.costs.map((cost) =>
      cost.id === "cadrage"
        ? { ...cost, amount: 3080 }
        : {
            ...cost,
            knowledge: "not-applicable" as const,
            amount: null,
          },
    );
    const html = renderToStaticMarkup(
      <ApplicationRoiCalculator initialInputs={inputs} />,
    );

    expect(html).toContain("Le ROI de trésorerie est nul");
    expect(html).toContain("Le ROI économique est nul");
    expect(html).toContain("Traitez cet équilibre comme une limite");
    expect(html).not.toContain("Les deux lectures sont positives");
  });
});

describe("interpretApplicationRoiResult", () => {
  const notApplicable = { status: "NOT_APPLICABLE", value: null } as const;
  const negative = { status: "VALUE", value: -1 } as const;
  const zero = { status: "VALUE", value: 0 } as const;
  const positive = { status: "VALUE", value: 1 } as const;

  it("covers the economic non-applicable branch", () => {
    const message = interpretApplicationRoiResult({
      cashRoiPct: notApplicable,
      economicRoiPct: notApplicable,
    });

    expect(message).toContain("Le ROI de trésorerie n’est pas applicable");
    expect(message).toContain("Le ROI économique n’est pas applicable");
    expect(message).toContain("n’affichez pas un pourcentage infini");
  });

  it("covers the economic negative branch without hiding a positive cash ROI", () => {
    const message = interpretApplicationRoiResult({
      cashRoiPct: positive,
      economicRoiPct: negative,
    });

    expect(message).toContain("Le ROI de trésorerie est positif");
    expect(message).toContain("Le ROI économique est négatif");
    expect(message).toContain(
      "les bénéfices économiques ne couvrent pas le coût total",
    );
  });

  it("covers the exact economic zero branch", () => {
    const message = interpretApplicationRoiResult({
      cashRoiPct: zero,
      economicRoiPct: zero,
    });

    expect(message).toContain("Le ROI de trésorerie est nul");
    expect(message).toContain("Le ROI économique est nul");
    expect(message).toContain("pas comme un résultat positif");
  });

  it("covers positive economics with a non-applicable cash ratio", () => {
    const message = interpretApplicationRoiResult({
      cashRoiPct: notApplicable,
      economicRoiPct: positive,
    });

    expect(message).toContain("Le ROI de trésorerie n’est pas applicable");
    expect(message).toContain("Le ROI économique est positif");
    expect(message).toContain("n’en déduisez pas une rentabilité infinie");
  });

  it("covers positive economics with negative cash ROI", () => {
    const message = interpretApplicationRoiResult({
      cashRoiPct: negative,
      economicRoiPct: positive,
    });

    expect(message).toContain("Le ROI de trésorerie est négatif");
    expect(message).toContain("uniquement grâce à la capacité réaffectée");
  });

  it("covers positive economics with a zero cash ROI", () => {
    const message = interpretApplicationRoiResult({
      cashRoiPct: zero,
      economicRoiPct: positive,
    });

    expect(message).toContain("Le ROI de trésorerie est nul");
    expect(message).toContain("La trésorerie atteint seulement l’équilibre");
  });

  it("covers the two-positive branch", () => {
    const message = interpretApplicationRoiResult({
      cashRoiPct: positive,
      economicRoiPct: positive,
    });

    expect(message).toContain("Le ROI de trésorerie est positif");
    expect(message).toContain("Le ROI économique est positif");
    expect(message).toContain("Testez encore le scénario prudent");
  });
});

describe("ApplicationRoiCalculator interactions", () => {
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
    act(() => root.render(<ApplicationRoiCalculator />));
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
  });

  it("applies a complete prudent preset, marks edits as custom and resets", () => {
    const prudentButton = [...container.querySelectorAll("button")].find(
      (button) => button.textContent?.trim() === "Prudent",
    );
    if (!(prudentButton instanceof HTMLButtonElement)) {
      throw new Error("Bouton prudent introuvable");
    }
    click(prudentButton);

    expect((container.querySelector("#roi-go-live") as HTMLInputElement).value).toBe(
      "8",
    );
    expect((container.querySelector("#roi-ramp") as HTMLInputElement).value).toBe(
      "6",
    );
    expect((container.querySelector("#roi-adoption") as HTMLInputElement).value).toBe(
      "70",
    );
    expect(
      (container.querySelector("#amount-realisation-integrations") as HTMLInputElement)
        .value,
    ).toBe("29900");
    expect(
      (container.querySelector("#amount-hosting") as HTMLInputElement).value,
    ).toBe("172.5");
    expect(
      (container.querySelector("#amount-double-run") as HTMLInputElement).value,
    ).toBe("600");
    expect(
      (container.querySelector("#start-double-run") as HTMLInputElement).value,
    ).toBe("7");
    expect(
      (container.querySelector("#end-double-run") as HTMLInputElement).value,
    ).toBe("9");
    expect(prudentButton.getAttribute("aria-pressed")).toBe("true");

    change(
      container.querySelector("#roi-adoption") as HTMLInputElement,
      "65",
    );
    expect(container.textContent).toContain("Personnalisé");
    expect(prudentButton.getAttribute("aria-pressed")).toBe("false");

    const resetButton = [...container.querySelectorAll("button")].find(
      (button) =>
        button.textContent?.includes("Réinitialiser le scénario central"),
    );
    if (!(resetButton instanceof HTMLButtonElement)) {
      throw new Error("Bouton de réinitialisation introuvable");
    }
    click(resetButton);

    expect((container.querySelector("#roi-go-live") as HTMLInputElement).value).toBe(
      "5",
    );
    expect((container.querySelector("#roi-ramp") as HTMLInputElement).value).toBe(
      "0",
    );
    expect(container.textContent).not.toContain("Personnalisé");
  });

  it("stops on a blank field and announces the result change", () => {
    const adoption = container.querySelector("#roi-adoption");
    if (!(adoption instanceof HTMLInputElement)) {
      throw new Error("Champ adoption introuvable");
    }

    change(adoption, "");

    expect(container.textContent).toContain("STOP · aucune estimation produite");
    const status = container.querySelector('[role="status"]');
    expect(status?.getAttribute("aria-live")).toBe("polite");
    expect(status?.textContent).toContain("Calcul arrêté");
    expect(status?.textContent).toContain("L’adoption moyenne");
    expect(adoption.getAttribute("aria-invalid")).toBe("true");
    const describedBy = adoption.getAttribute("aria-describedby") ?? "";
    expect(describedBy).toContain("roi-adoption-help");
    expect(describedBy).toContain("roi-adoption-error");
    expect(container.querySelector("#roi-adoption-error")?.textContent).toContain(
      "Valeur requise",
    );
  });

  it("keeps unknown-to-known blank until an explicit zero resumes calculation", () => {
    const knowledge = container.querySelector("#knowledge-security");
    if (!(knowledge instanceof HTMLSelectElement)) {
      throw new Error("Sélecteur sécurité introuvable");
    }

    change(knowledge, "unknown");
    expect(container.textContent).toContain("STOP · aucune estimation produite");
    expect(knowledge.getAttribute("aria-invalid")).toBe("true");
    expect(knowledge.getAttribute("aria-describedby")).toBe(
      "knowledge-security-error",
    );

    change(knowledge, "known");
    const amount = container.querySelector("#amount-security");
    if (!(amount instanceof HTMLInputElement)) {
      throw new Error("Montant sécurité introuvable");
    }
    expect(amount.value).toBe("");
    expect(amount.getAttribute("aria-invalid")).toBe("true");
    expect(amount.getAttribute("aria-describedby")).toBe(
      "amount-security-error",
    );
    expect(container.textContent).toContain("STOP · aucune estimation produite");

    change(amount, "0");
    expect(container.textContent).toContain(
      "Trésorerie et valeur économique donnent deux résultats",
    );
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "Calcul disponible",
    );
  });

  it("uses numeric mobile keyboards and marks a dated cost edit as custom", () => {
    expect(
      (container.querySelector("#roi-hours") as HTMLInputElement).inputMode,
    ).toBe("decimal");
    expect(
      (container.querySelector("#month-exit") as HTMLInputElement | null),
    ).toBeNull();

    const prudentButton = [...container.querySelectorAll("button")].find(
      (button) => button.textContent?.trim() === "Prudent",
    ) as HTMLButtonElement;
    click(prudentButton);

    const rangeStart = container.querySelector("#start-double-run");
    if (!(rangeStart instanceof HTMLInputElement)) {
      throw new Error("Début de double exploitation introuvable");
    }
    expect(rangeStart.inputMode).toBe("numeric");
    change(rangeStart, "8");
    expect(container.textContent).toContain("Personnalisé");
  });
});
