/** @vitest-environment happy-dom */

import { act, type ComponentProps } from "react";
import { createRoot, type Root } from "react-dom/client";
import { renderToStaticMarkup } from "react-dom/server";
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import { PowerAppsDecisionWorkbench } from "./power-apps-decision-workbench";
import {
  createEmptyDecisionInputs,
  createEmptyTcoOptions,
  type DecisionInputs,
  type OptionTcoInputs,
} from "./power-apps-decision-model";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const source = readFileSync(
  resolve(
    dirname(fileURLToPath(import.meta.url)),
    "power-apps-decision-workbench.tsx",
  ),
  "utf8",
);

beforeAll(() => {
  (
    globalThis as typeof globalThis & { IS_REACT_ACT_ENVIRONMENT: boolean }
  ).IS_REACT_ACT_ENVIRONMENT = true;
});

let currentRoot: Root | null = null;
let currentContainer: HTMLDivElement | null = null;

function mount(props: ComponentProps<typeof PowerAppsDecisionWorkbench> = {}) {
  const container = document.createElement("div");
  document.body.append(container);
  const root = createRoot(container);
  act(() => root.render(<PowerAppsDecisionWorkbench {...props} />));
  currentRoot = root;
  currentContainer = container;
  return container;
}

function buttonNamed(container: HTMLElement, name: string) {
  const button = [...container.querySelectorAll("button")].find((candidate) =>
    candidate.textContent?.includes(name),
  );
  if (!(button instanceof HTMLButtonElement)) {
    throw new Error(`Bouton introuvable : ${name}`);
  }
  return button;
}

function verifiedDecisionInputs(): DecisionInputs {
  const inputs = createEmptyDecisionInputs();
  inputs.context = {
    projectKind: "existing",
    audience: "internal",
    surface: "canvas",
    dataSource: "dataverse",
    criticality: "important",
    offlineRequired: "no",
    externalBrandingRequired: "no",
    currentUsers: 20,
    projectedUsers: 30,
  };
  for (const key of Object.keys(inputs.evidence) as Array<
    keyof typeof inputs.evidence
  >) {
    inputs.evidence[key] = "yes";
  }
  return inputs;
}

function tcoOptionsWithOneVisibleError(): OptionTcoInputs[] {
  const options = createEmptyTcoOptions();
  const option = options[0];
  option.license.mode = "not-applicable";
  option.oneTime = option.oneTime.map((line) => ({
    ...line,
    knowledge: "known",
    amount: 0,
  }));
  option.monthly = option.monthly.map((line) => ({
    ...line,
    knowledge: "known",
    amount: 0,
  }));
  option.monthly[0].amount = -1;
  return options;
}

function tcoOptionsWithFractionalPremiumUsers(): OptionTcoInputs[] {
  const options = createEmptyTcoOptions();
  const option = options[0];
  option.license.mode = "premium-eur";
  option.license.users = { knowledge: "known", amount: 1.5 };
  option.license.pricePerUserMonthEur = {
    knowledge: "known",
    amount: 17.3,
  };
  option.oneTime = option.oneTime.map((line) => ({
    ...line,
    knowledge: "not-applicable",
    amount: null,
  }));
  option.monthly = option.monthly.map((line) => ({
    ...line,
    knowledge: "not-applicable",
    amount: null,
  }));
  return options;
}

function tcoOptionsForRequiredLicenseControls(): OptionTcoInputs[] {
  const options = createEmptyTcoOptions();
  const modes = [
    "premium-eur",
    "payg-usd",
    "contract-monthly-eur",
    "not-applicable",
  ] as const;

  return options.map((option, index) => ({
    ...option,
    license: { ...option.license, mode: modes[index] ?? "unknown" },
    oneTime: option.oneTime.map((line) => ({
      ...line,
      knowledge: "not-applicable" as const,
      amount: null,
    })),
    monthly: option.monthly.map((line) => ({
      ...line,
      knowledge: "not-applicable" as const,
      amount: null,
    })),
  }));
}

afterEach(() => {
  if (currentRoot) act(() => currentRoot?.unmount());
  currentContainer?.remove();
  currentRoot = null;
  currentContainer = null;
  vi.restoreAllMocks();
});

describe("PowerAppsDecisionWorkbench", () => {
  it("suspends the decision by default and renders four incomplete TCOs", () => {
    const html = renderToStaticMarkup(<PowerAppsDecisionWorkbench />);

    expect(html).toContain("Atelier de décision local · aucune donnée envoyée");
    expect(html).toContain("Décision suspendue");
    expect(html).toContain("aucune tant que les preuves critiques manquent");
    expect(html).not.toMatch(/\bstop\b/i);
    expect(html).not.toContain("STOP_MISSING_EVIDENCE");
    expect(html.match(/À confirmer/g)?.length).toBeGreaterThanOrEqual(20);
    for (const option of [
      "Power Apps actuel ou configuration minimale",
      "Power Platform cadré ou renforcé",
      "Architecture hybride",
      "Application dédiée",
    ]) {
      expect(html, option).toContain(option);
    }
  });

  it("keeps full TCO cards through xl and uses a non-scrollable xl table", () => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = renderToStaticMarkup(<PowerAppsDecisionWorkbench />);

    expect(
      wrapper.querySelector('label[for="pa-project-kind"]'),
    ).not.toBeNull();
    expect(wrapper.querySelector("#pa-project-kind")).not.toBeNull();
    expect(
      wrapper.querySelector('label[for="evidence-scopeObserved"]'),
    ).not.toBeNull();
    expect(wrapper.querySelector("table caption")?.textContent).toContain(
      "TCO comparés",
    );
    const mobileResults = wrapper.querySelector(
      '[data-tco-mobile-results="true"]',
    );
    expect(mobileResults?.classList.contains("xl:hidden")).toBe(true);
    expect(mobileResults?.classList.contains("md:hidden")).toBe(false);
    const mobileCards = wrapper.querySelectorAll("[data-tco-mobile-card]");
    expect(mobileCards).toHaveLength(4);
    for (const card of mobileCards) {
      for (const label of [
        "Option",
        "Ponctuel",
        "Mensuel",
        "1 an",
        "3 ans",
        "5 ans",
        "État",
      ]) {
        expect(
          card.textContent,
          `${card.getAttribute("data-tco-mobile-card")}:${label}`,
        ).toContain(label);
      }
    }
    const desktopResults = wrapper.querySelector(
      '[data-tco-desktop-results="true"]',
    );
    expect(desktopResults?.classList.contains("hidden")).toBe(true);
    expect(desktopResults?.classList.contains("xl:block")).toBe(true);
    expect(desktopResults?.classList.contains("md:block")).toBe(false);
    expect(desktopResults?.getAttribute("role")).toBeNull();
    expect(desktopResults?.getAttribute("tabindex")).toBeNull();
    expect(desktopResults?.classList.contains("overflow-x-auto")).toBe(false);
    const desktopTable = desktopResults?.querySelector("table");
    expect(desktopTable?.classList.contains("w-full")).toBe(true);
    expect(desktopTable?.classList.contains("table-fixed")).toBe(true);
    expect(desktopTable?.className).not.toContain("min-w-");
    expect(wrapper.querySelectorAll('[role="status"]')).toHaveLength(1);
    expect(wrapper.querySelector("form")).toBeNull();
    expect(wrapper.querySelector('[type="submit"]')).toBeNull();

    const interactive = [
      ...wrapper.querySelectorAll("select, input, button, summary"),
    ];
    expect(interactive.length).toBeGreaterThan(30);
    for (const control of interactive) {
      expect(control.classList.contains("min-h-11"), control.outerHTML).toBe(
        true,
      );
    }
  });

  it("uses explicit tri-state proof semantics", () => {
    const html = renderToStaticMarkup(<PowerAppsDecisionWorkbench />);

    expect(html).toContain(
      "À vérifier — aucune preuve fiable\u00a0; décision suspendue",
    );
    expect(html).toContain("Oui — contrôle daté satisfaisant");
    expect(html).toContain("Non — contrôle réalisé, résultat insatisfaisant");
  });

  it("never tells a new project to keep an existing Power App", () => {
    const inputs = verifiedDecisionInputs();
    inputs.context.projectKind = "new";
    const html = renderToStaticMarkup(
      <PowerAppsDecisionWorkbench initialDecisionInputs={inputs} />,
    );

    expect(html).toContain("Retenir Power Platform");
    expect(html).toContain("Power Platform cadré pour le nouveau projet");
    expect(html).not.toContain("Conserver Power Apps");
  });

  it("separates an unsatisfactory foundational control from unknown evidence", () => {
    const inputs = verifiedDecisionInputs();
    inputs.evidence.scopeObserved = "no";
    const html = renderToStaticMarkup(
      <PowerAppsDecisionWorkbench initialDecisionInputs={inputs} />,
    );

    expect(html).toContain("Décision suspendue");
    expect(html).toContain("Contrôles critiques insatisfaisants");
    expect(html).toContain("aucun arbitrage d’architecture");
    expect(html).toContain("aucune tant que les preuves critiques manquent");
    expect(html).not.toMatch(/\bstop\b/i);
  });

  it("shows a TCO input error without misreporting zero unknowns", () => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = renderToStaticMarkup(
      <PowerAppsDecisionWorkbench
        initialTcoOptions={tcoOptionsWithOneVisibleError()}
      />,
    );
    const mobileCard = wrapper.querySelector(
      '[data-tco-mobile-card="current-power-apps"]',
    );

    expect(mobileCard?.textContent).toContain(
      "1 erreur(s) de saisie — calcul arrêté",
    );
    expect(mobileCard?.textContent).toContain("positif ou nul");
    expect(mobileCard?.textContent).not.toContain("0 inconnue(s)");
    expect(
      wrapper.textContent?.match(/positif ou nul/g)?.length,
    ).toBeGreaterThanOrEqual(2);
  });

  it("keeps the public Premium price only as a dated, editable aid", () => {
    const html = renderToStaticMarkup(<PowerAppsDecisionWorkbench />);

    expect(html).toContain("17,30 € HT/utilisateur/mois");
    expect(html).toContain("vérifiés le 3 août 2026");
    expect(html).toContain("Le calcul reste bloqué");
    expect(html).toContain("10 USD");
    expect(html).toContain("ne convertit jamais");
  });

  it("shows aggregate overflow errors and never renders an infinite TCO", () => {
    const options = createEmptyTcoOptions();
    const option = options[0];
    option.license.mode = "not-applicable";
    option.oneTime = option.oneTime.map((line) => ({
      ...line,
      knowledge: "known",
      amount: 0,
    }));
    option.monthly = option.monthly.map((line) => ({
      ...line,
      knowledge: "known",
      amount: 0,
    }));
    option.monthly[0].amount = Number.MAX_SAFE_INTEGER;
    option.monthly[1].amount = 1;

    const html = renderToStaticMarkup(
      <PowerAppsDecisionWorkbench initialTcoOptions={options} />,
    );

    expect(html).toContain("plage numérique fiable");
    expect(html).toContain("calcul arrêté");
    expect(html).not.toMatch(/Infinity|∞/);
  });

  it("uses an integer quantity field and exposes a fractional Premium error", () => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = renderToStaticMarkup(
      <PowerAppsDecisionWorkbench
        initialTcoOptions={tcoOptionsWithFractionalPremiumUsers()}
      />,
    );

    const quantityInput = wrapper.querySelector(
      "#license-users-current-power-apps-amount",
    );
    const quantityLabel = wrapper.querySelector(
      'label[for="license-users-current-power-apps-amount"]',
    );
    const priceInput = wrapper.querySelector(
      "#license-price-current-power-apps-amount",
    );
    const priceLabel = wrapper.querySelector(
      'label[for="license-price-current-power-apps-amount"]',
    );
    const mobileCard = wrapper.querySelector(
      '[data-tco-mobile-card="current-power-apps"]',
    );

    expect(quantityLabel?.textContent).toContain(
      "Quantité entière d’utilisateurs licenciés",
    );
    expect(quantityInput?.getAttribute("inputmode")).toBe("numeric");
    expect(quantityInput?.getAttribute("step")).toBe("1");
    expect(priceLabel?.textContent).toContain("Montant en euros");
    expect(priceInput?.getAttribute("inputmode")).toBe("decimal");
    expect(priceInput?.getAttribute("step")).toBe("0.01");
    expect(mobileCard?.textContent).toContain(
      "Nombre d’utilisateurs licenciés doit être un entier connu",
    );
    expect(mobileCard?.textContent).toContain("calcul arrêté");
    expect(mobileCard?.textContent).not.toContain("25,95");
  });

  it("hides N/A for required license operands but keeps it for modes and costs", () => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = renderToStaticMarkup(
      <PowerAppsDecisionWorkbench
        initialTcoOptions={tcoOptionsForRequiredLicenseControls()}
      />,
    );

    const requiredSelectIds = [
      "license-users-current-power-apps-knowledge",
      "license-price-current-power-apps-knowledge",
      "license-payg-strengthened-power-apps-knowledge",
      "license-contract-hybrid-knowledge",
    ];
    for (const id of requiredSelectIds) {
      const select = wrapper.querySelector(`#${id}`);
      expect(select, id).not.toBeNull();
      expect(
        select?.querySelector('option[value="not-applicable"]'),
        id,
      ).toBeNull();
    }

    const licenseMode = wrapper.querySelector(
      "#license-mode-current-power-apps",
    );
    const optionalCost = wrapper.querySelector(
      "#one-current-power-apps-initial-build-setup-knowledge",
    );
    expect(
      licenseMode?.querySelector('option[value="not-applicable"]'),
    ).not.toBeNull();
    expect(
      optionalCost?.querySelector('option[value="not-applicable"]'),
    ).not.toBeNull();
  });

  it("copies the complete local dossier and announces success truthfully", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });
    const container = mount();

    await act(async () => {
      buttonNamed(container, "Copier le dossier texte").click();
      await Promise.resolve();
    });

    expect(writeText).toHaveBeenCalledOnce();
    const copiedDossier = String(writeText.mock.calls[0][0]);
    expect(copiedDossier).toContain("Orientation : Décision suspendue");
    expect(copiedDossier).not.toMatch(/\bstop\b/i);
    expect(copiedDossier).not.toContain("STOP_MISSING_EVIDENCE");
    expect(copiedDossier).toContain("TCO COMPARABLES");
    for (const contextLine of [
      "Projet : à vérifier",
      "Audience : à vérifier",
      "Surface Power Platform : à vérifier",
      "Données principales : à vérifier",
      "Criticité : à vérifier",
    ]) {
      expect(copiedDossier).toContain(contextLine);
    }
    expect(copiedDossier).not.toMatch(
      /^(?:Projet|Audience|Surface Power Platform|Données principales|Criticité) : unknown$/m,
    );
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "Dossier copié",
    );
  });

  it("translates populated context enums in the copied public dossier", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });
    const container = mount({
      initialDecisionInputs: verifiedDecisionInputs(),
    });

    await act(async () => {
      buttonNamed(container, "Copier le dossier texte").click();
      await Promise.resolve();
    });

    const copiedDossier = String(writeText.mock.calls[0][0]);
    for (const contextLine of [
      "Projet : Power App existante",
      "Audience : salariés internes",
      "Surface Power Platform : application canevas",
      "Données principales : Dataverse",
      "Criticité : importante",
    ]) {
      expect(copiedDossier).toContain(contextLine);
    }
    expect(copiedDossier).not.toMatch(
      /^(?:Projet|Audience|Surface Power Platform|Données principales|Criticité) : (?:unknown|existing|internal|canvas|dataverse|important)$/m,
    );
  });

  it("announces clipboard failure and prints only after an explicit click", async () => {
    const writeText = vi.fn().mockRejectedValue(new Error("denied"));
    const print = vi.fn();
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });
    Object.defineProperty(window, "print", {
      configurable: true,
      value: print,
    });
    const container = mount();

    expect(print).not.toHaveBeenCalled();
    await act(async () => {
      buttonNamed(container, "Copier le dossier texte").click();
      await Promise.resolve();
    });
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "Copie impossible",
    );

    act(() => buttonNamed(container, "Imprimer cette page").click());
    expect(print).toHaveBeenCalledOnce();
  });

  it("contains no network, persistence or spreadsheet download path", () => {
    expect(source).not.toMatch(
      /\bfetch\s*\(|XMLHttpRequest|WebSocket|sendBeacon/,
    );
    expect(source).not.toMatch(/localStorage|sessionStorage|indexedDB/);
    expect(source).not.toMatch(
      /download\s*=|createObjectURL|\.xlsx?\b|\.csv\b/i,
    );
    expect(source).not.toContain("<form");
    expect(source.match(/role="status"/g)).toHaveLength(1);
    expect(source).toContain("navigator.clipboard.writeText");
    expect(source).toContain("window.print()");
  });

  it("names the mobile TCO region and expands every decision detail for print", () => {
    const container = mount();
    const mobileResults = container.querySelector(
      '[data-tco-mobile-results="true"]',
    );
    const tcoEditors = container.querySelectorAll<HTMLDetailsElement>(
      'details[data-power-apps-print-expand="tco-editor"]',
    );
    const dossier = container.querySelector(
      'details[data-power-apps-print-expand="dossier"]',
    );

    expect(mobileResults?.getAttribute("role")).toBe("region");
    expect(mobileResults?.getAttribute("aria-label")).toBe(
      "Résultats TCO Power Apps et sur mesure",
    );
    expect(tcoEditors).toHaveLength(4);
    expect(dossier?.querySelector("pre")).not.toBeNull();
    expect(source).toContain('data-power-apps-workbench="true"');
    expect(source).toMatch(
      /@media print[\s\S]*details\[data-power-apps-print-expand\][\s\S]*display: block !important;/,
    );
    expect(source).toMatch(
      /data-power-apps-print-expand="dossier"[\s\S]*max-height: none !important;[\s\S]*overflow: visible !important;/,
    );

    act(() => window.dispatchEvent(new Event("beforeprint")));
    expect([...tcoEditors].every((details) => details.open)).toBe(true);
    expect((dossier as HTMLDetailsElement | null)?.open).toBe(true);

    act(() => window.dispatchEvent(new Event("afterprint")));
    expect([...tcoEditors].every((details) => !details.open)).toBe(true);
    expect((dossier as HTMLDetailsElement | null)?.open).toBe(false);
  });
});
