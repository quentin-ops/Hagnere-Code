/** @vitest-environment happy-dom */

import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { act, type ComponentProps } from "react";
import { createRoot, type Root } from "react-dom/client";
import { renderToStaticMarkup } from "react-dom/server";
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import {
  MAX_SAFE_OBSERVED_MINUTES,
  WORKLOAD_ROUNDING_NOTE,
  createEmptyDecisionInputs,
  proofQuestions,
  type DecisionInputs,
} from "./back-office-decision-model";
import { BackOfficeDecisionWorkbench } from "./back-office-decision-workbench";

const source = readFileSync(
  resolve(
    dirname(fileURLToPath(import.meta.url)),
    "back-office-decision-workbench.tsx",
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

function mount(props: ComponentProps<typeof BackOfficeDecisionWorkbench> = {}) {
  const container = document.createElement("div");
  document.body.append(container);
  const root = createRoot(container);
  act(() => root.render(<BackOfficeDecisionWorkbench {...props} />));
  currentRoot = root;
  currentContainer = container;
  return container;
}

function completeInputs(): DecisionInputs {
  const inputs = createEmptyDecisionInputs();
  for (const question of proofQuestions) inputs.evidence[question.key] = "yes";
  inputs.evidence.existingCoversContract = "no";
  inputs.evidence.standardCoversContract = "no";
  inputs.evidence.boundaryIsolable = "no";
  inputs.workload = {
    period: "week",
    caseCount: 50,
    activeMinutesPerCase: 8,
    recoveryCaseCount: 5,
    recoveryMinutesPerCase: 12,
    recoveryAlreadyIncluded: false,
  };
  inputs.selectedOption = "custom-back-office";
  return inputs;
}

function buttonNamed(container: HTMLElement, label: string) {
  const button = [...container.querySelectorAll("button")].find((candidate) =>
    candidate.textContent?.includes(label),
  );
  if (!(button instanceof HTMLButtonElement)) {
    throw new Error(`Bouton introuvable : ${label}`);
  }
  return button;
}

afterEach(() => {
  if (currentRoot) act(() => currentRoot?.unmount());
  currentContainer?.remove();
  currentRoot = null;
  currentContainer = null;
  vi.restoreAllMocks();
});

describe("BackOfficeDecisionWorkbench", () => {
  it("renders a local suspended decision by default", () => {
    const html = renderToStaticMarkup(<BackOfficeDecisionWorkbench />);
    expect(html).toContain("Atelier local · aucune donnée envoyée");
    expect(html).toContain("Décision suspendue");
    expect(html).toContain("sans score caché");
    expect(html).not.toContain("STOP_MISSING_EVIDENCE");
  });

  it("renders fourteen proof selectors and all five outputs", () => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = renderToStaticMarkup(<BackOfficeDecisionWorkbench />);
    expect(
      wrapper.querySelectorAll('select[id^="back-office-proof-"]'),
    ).toHaveLength(14);
    expect(
      wrapper.querySelectorAll('input[name="back-office-selected-option"]'),
    ).toHaveLength(5);
    expect(wrapper.textContent).toContain("Conserver et mieux configurer");
    expect(wrapper.textContent).toContain("Cadrer un back-office dédié");
    expect(wrapper.textContent).toContain("Différer ou abandonner");
  });

  it("renders the proof questions in their numbered order from 1 to 14", () => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = renderToStaticMarkup(<BackOfficeDecisionWorkbench />);
    const renderedKeys = [
      ...wrapper.querySelectorAll('select[id^="back-office-proof-"]'),
    ].map((select) => select.id.replace("back-office-proof-", ""));
    expect(renderedKeys).toEqual(
      proofQuestions.map((question) => question.key),
    );
  });

  it("gives every select and number input an accessible label", () => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = renderToStaticMarkup(<BackOfficeDecisionWorkbench />);
    for (const control of wrapper.querySelectorAll(
      "select, input[type=number]",
    )) {
      expect(
        wrapper.querySelector(`label[for="${control.id}"]`),
        control.id,
      ).not.toBeNull();
    }
  });

  it("uses one status region, no form and explicit numeric units", () => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = renderToStaticMarkup(<BackOfficeDecisionWorkbench />);
    expect(wrapper.querySelectorAll('[role="status"]')).toHaveLength(1);
    expect(wrapper.querySelector("form")).toBeNull();
    expect(wrapper.querySelector('[type="submit"]')).toBeNull();
    const numberInputs = wrapper.querySelectorAll('input[type="number"]');
    expect(numberInputs).toHaveLength(4);
    for (const input of numberInputs) {
      expect(input.getAttribute("min")).toBe("0");
    }
    expect(
      wrapper.querySelector("#back-office-case-count")?.getAttribute("max"),
    ).toBe(String(Number.MAX_SAFE_INTEGER));
    expect(
      wrapper.querySelector("#back-office-recovery-count")?.getAttribute("max"),
    ).toBe(String(Number.MAX_SAFE_INTEGER));
    expect(
      wrapper.querySelector("#back-office-active-minutes")?.getAttribute("max"),
    ).toBe(String(MAX_SAFE_OBSERVED_MINUTES));
    expect(
      wrapper
        .querySelector("#back-office-recovery-minutes")
        ?.getAttribute("max"),
    ).toBe(String(MAX_SAFE_OBSERVED_MINUTES));
    expect(wrapper.textContent).toContain("Pas de 0,1 minute");
    expect(wrapper.textContent).toContain(WORKLOAD_ROUNDING_NOTE);
    expect(wrapper.textContent).toContain("Minutes actives / cas");
    expect(wrapper.textContent).toContain("Minutes / reprise");
    expect(wrapper.textContent).toContain(
      "inférieur ou égal au nombre total de cas",
    );
  });

  it("renders zero as zero and a completed manually selected dossier", () => {
    const inputs = completeInputs();
    inputs.workload.caseCount = 0;
    inputs.workload.recoveryCaseCount = 0;
    const html = renderToStaticMarkup(
      <BackOfficeDecisionWorkbench initialInputs={inputs} />,
    );
    expect(html).toContain("Cadrer un back-office dédié");
    expect(html).toContain("0 min");
    expect(html).not.toMatch(/Infinity|∞/);
  });

  it("renders normalized decimal workload values without a binary tail", () => {
    const inputs = completeInputs();
    inputs.workload = {
      period: "week",
      caseCount: 3,
      activeMinutesPerCase: 0.1,
      recoveryCaseCount: 0,
      recoveryMinutesPerCase: 0,
      recoveryAlreadyIncluded: false,
    };
    const html = renderToStaticMarkup(
      <BackOfficeDecisionWorkbench initialInputs={inputs} />,
    );
    expect(html).toContain("0.3 min");
    expect(html).not.toContain("0.30000000000000004");
  });

  it("shows a standard contradiction instead of steering to custom", () => {
    const inputs = completeInputs();
    inputs.evidence.standardCoversContract = "yes";
    const html = renderToStaticMarkup(
      <BackOfficeDecisionWorkbench initialInputs={inputs} />,
    );
    expect(html).toContain("L’option choisie contredit encore les preuves");
    expect(html).toContain("Standard suffisant");
  });

  it("copies the complete text dossier and announces failure", async () => {
    const writeText = vi.fn().mockResolvedValueOnce(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });
    const container = mount({ initialInputs: completeInputs() });
    await act(async () => {
      buttonNamed(container, "Copier le dossier texte").click();
      await Promise.resolve();
    });
    expect(writeText).toHaveBeenCalledOnce();
    expect(String(writeText.mock.calls[0][0])).toContain(
      "CINQ OPTIONS — AUCUN CLASSEMENT AUTOMATIQUE",
    );
    expect(container.textContent).toContain("Dossier copié");

    writeText.mockRejectedValueOnce(new Error("denied"));
    await act(async () => {
      buttonNamed(container, "Copier le dossier texte").click();
      await Promise.resolve();
    });
    expect(container.textContent).toContain("Copie impossible");
  });

  it("prints only after an explicit button action", () => {
    const print = vi.fn();
    Object.defineProperty(window, "print", {
      configurable: true,
      value: print,
    });
    const container = mount();
    expect(print).not.toHaveBeenCalled();
    act(() => buttonNamed(container, "Imprimer cette page").click());
    expect(print).toHaveBeenCalledOnce();
  });

  it("declares a stable A4 page contract for printed dossiers", () => {
    expect(source).toMatch(/@page\s*{[\s\S]*?size:\s*A4;/);
    expect(source).toMatch(/@page\s*{[\s\S]*?margin:\s*10mm;/);
  });

  it("contains no network, persistence or spreadsheet-download path", () => {
    expect(source).not.toMatch(
      /\bfetch\s*\(|XMLHttpRequest|WebSocket|sendBeacon/,
    );
    expect(source).not.toMatch(/localStorage|sessionStorage|indexedDB/);
    expect(source).not.toMatch(/download\s*=|createObjectURL|\.xlsx?\b/i);
    expect(source).not.toContain("<form");
    expect(source.match(/role="status"/g)).toHaveLength(1);
    expect(source).toContain("navigator.clipboard.writeText");
    expect(source).toContain("window.print()");
  });

  it("does not mutate caller-owned initial data", () => {
    const inputs = completeInputs();
    const before = JSON.stringify(inputs);
    renderToStaticMarkup(
      <BackOfficeDecisionWorkbench initialInputs={inputs} />,
    );
    expect(JSON.stringify(inputs)).toBe(before);
  });
});
