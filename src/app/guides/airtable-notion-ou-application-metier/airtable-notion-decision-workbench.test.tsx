/** @vitest-environment happy-dom */

import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { act, type ComponentProps } from "react";
import { createRoot, type Root } from "react-dom/client";
import { renderToStaticMarkup } from "react-dom/server";
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import {
  createEmptyDecisionInputs,
  createEmptyExitGrid,
  organizationalDimensions,
  type DecisionInputs,
} from "./airtable-notion-decision-model";
import { AirtableNotionDecisionWorkbench } from "./airtable-notion-decision-workbench";

const source = readFileSync(
  resolve(
    dirname(fileURLToPath(import.meta.url)),
    "airtable-notion-decision-workbench.tsx",
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

function mount(
  props: ComponentProps<typeof AirtableNotionDecisionWorkbench> = {},
) {
  const container = document.createElement("div");
  document.body.append(container);
  const root = createRoot(container);
  act(() => root.render(<AirtableNotionDecisionWorkbench {...props} />));
  currentRoot = root;
  currentContainer = container;
  return container;
}

function controlledInputs(platform: "airtable" | "notion" = "airtable") {
  const inputs = createEmptyDecisionInputs();
  inputs.context = {
    currentPlatform: platform,
    processShape:
      platform === "airtable"
        ? "structured-records"
        : "knowledge-collaboration",
    criticality: "important",
    boundarySeparation: "not-needed",
    activeUsers: 12,
    activeObjects: 8_000,
    monthlyWrites: 3_500,
  };
  for (const dimension of organizationalDimensions) {
    inputs.evidence[dimension.key] = "controlled";
  }
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

describe("AirtableNotionDecisionWorkbench", () => {
  it("renders a suspended local decision by default", () => {
    const html = renderToStaticMarkup(<AirtableNotionDecisionWorkbench />);
    expect(html).toContain("Atelier local · aucune donnée envoyée");
    expect(html).toContain("Décision suspendue");
    expect(html).toContain("aucun seuil caché");
    expect(html).not.toContain("STOP_MISSING_EVIDENCE");
  });

  it("renders twelve proof controls and twelve exit fields with accessible labels", () => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = renderToStaticMarkup(
      <AirtableNotionDecisionWorkbench />,
    );

    expect(
      wrapper.querySelectorAll('select[id^="airtable-notion-proof-"]'),
    ).toHaveLength(12);
    expect(
      wrapper.querySelectorAll('textarea[id^="airtable-notion-exit-"]'),
    ).toHaveLength(12);
    for (const control of wrapper.querySelectorAll("select, input, textarea")) {
      expect(
        wrapper.querySelector(`label[for="${control.id}"]`),
        control.id,
      ).not.toBeNull();
    }
  });

  it("uses one status region, no form and integer number inputs", () => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = renderToStaticMarkup(
      <AirtableNotionDecisionWorkbench />,
    );
    expect(wrapper.querySelectorAll('[role="status"]')).toHaveLength(1);
    expect(wrapper.querySelector("form")).toBeNull();
    expect(wrapper.querySelector('[type="submit"]')).toBeNull();
    const numbers = wrapper.querySelectorAll('input[type="number"]');
    expect(numbers).toHaveLength(3);
    for (const input of numbers) {
      expect(input.getAttribute("min")).toBe("0");
      expect(input.getAttribute("step")).toBe("1");
      expect(input.getAttribute("inputmode")).toBe("numeric");
    }
  });

  it("shows a defensible keep outcome for Airtable and Notion", () => {
    expect(
      renderToStaticMarkup(
        <AirtableNotionDecisionWorkbench
          initialInputs={controlledInputs("airtable")}
        />,
      ),
    ).toContain("Conserver Airtable");
    expect(
      renderToStaticMarkup(
        <AirtableNotionDecisionWorkbench
          initialInputs={controlledInputs("notion")}
        />,
      ),
    ).toContain("Conserver Notion");
  });

  it("shows hybrid only after a reproduced and separable boundary", () => {
    const inputs = controlledInputs();
    inputs.evidence.integrationsApi = "failed";
    inputs.failureAttribution.integrationsApi = "platform-boundary";
    inputs.context.boundarySeparation = "yes";
    const html = renderToStaticMarkup(
      <AirtableNotionDecisionWorkbench initialInputs={inputs} />,
    );
    expect(html).toContain("Architecture hybride");
    expect(html).toContain(
      "Limite de plateforme reproduite et isolable : Intégrations et API",
    );
  });

  it("shows an explicit cause selector and keeps an unqualified failure suspended", () => {
    const inputs = controlledInputs();
    inputs.evidence.rolesPermissions = "failed";

    const wrapper = document.createElement("div");
    wrapper.innerHTML = renderToStaticMarkup(
      <AirtableNotionDecisionWorkbench initialInputs={inputs} />,
    );

    expect(wrapper.textContent).toContain("Décision suspendue");
    expect(wrapper.textContent).toContain("Cause de l’échec");
    expect(wrapper.textContent).toContain("cause de l’échec à qualifier");
    expect(
      wrapper.querySelector("#airtable-notion-cause-rolesPermissions"),
    ).not.toBeNull();
  });

  it("renders invalid, zero and safe extreme values without Infinity", () => {
    const zero = controlledInputs();
    zero.context.activeUsers = 0;
    zero.context.activeObjects = 0;
    zero.context.monthlyWrites = 0;
    const zeroHtml = renderToStaticMarkup(
      <AirtableNotionDecisionWorkbench initialInputs={zero} />,
    );
    expect(zeroHtml).toContain("Conserver Airtable");

    const extreme = controlledInputs();
    extreme.context.activeObjects = Number.MAX_SAFE_INTEGER;
    const extremeHtml = renderToStaticMarkup(
      <AirtableNotionDecisionWorkbench initialInputs={extreme} />,
    );
    expect(extremeHtml).toContain("Conserver Airtable");
    expect(extremeHtml).not.toMatch(/Infinity|∞/);

    const invalid = controlledInputs();
    invalid.context.monthlyWrites = -1;
    const invalidHtml = renderToStaticMarkup(
      <AirtableNotionDecisionWorkbench initialInputs={invalid} />,
    );
    expect(invalidHtml).toContain("Décision suspendue");
    expect(invalidHtml).toContain("entier fini");
  });

  it("copies a complete public dossier including the exit grid", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });
    const grid = createEmptyExitGrid();
    grid.objects = "Dossiers et commandes";
    grid.rollback = "Lecture seule pendant un mois";
    const container = mount({
      initialInputs: controlledInputs(),
      initialExitGrid: grid,
    });

    await act(async () => {
      buttonNamed(container, "Copier le dossier texte").click();
      await Promise.resolve();
    });

    expect(writeText).toHaveBeenCalledOnce();
    const copied = String(writeText.mock.calls[0][0]);
    expect(copied).toContain("Orientation : Conserver Airtable");
    expect(copied).toContain("Objets et périmètre : Dossiers et commandes");
    expect(copied).toContain(
      "Retour arrière et extinction : Lecture seule pendant un mois",
    );
    expect(container.textContent).toContain("Dossier copié");
  });

  it("announces clipboard failure and prints only on explicit action", async () => {
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
    expect(container.textContent).toContain("Copie impossible");
    act(() => buttonNamed(container, "Imprimer cette page").click());
    expect(print).toHaveBeenCalledOnce();
  });

  it("opens and restores the exit grid and dossier around printing", () => {
    const container = mount();
    const details = container.querySelectorAll<HTMLDetailsElement>(
      'details[data-airtable-notion-print-expand="true"]',
    );
    expect(details).toHaveLength(2);
    expect([...details].every((item) => !item.open)).toBe(true);
    act(() => window.dispatchEvent(new Event("beforeprint")));
    expect([...details].every((item) => item.open)).toBe(true);
    act(() => window.dispatchEvent(new Event("afterprint")));
    expect([...details].every((item) => !item.open)).toBe(true);
  });

  it("contains no network, persistence or spreadsheet download path", () => {
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

  it("does not mutate caller-owned initial inputs", () => {
    const initial: DecisionInputs = controlledInputs();
    const before = JSON.stringify(initial);
    renderToStaticMarkup(
      <AirtableNotionDecisionWorkbench initialInputs={initial} />,
    );
    expect(JSON.stringify(initial)).toBe(before);
  });
});
