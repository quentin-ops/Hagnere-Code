// @vitest-environment happy-dom

import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { SaasSpecificationTool } from "./saas-specification-tool";

(
  globalThis as typeof globalThis & { IS_REACT_ACT_ENVIRONMENT: boolean }
).IS_REACT_ACT_ENVIRONMENT = true;

let container: HTMLDivElement;
let root: Root;

function findButton(label: string): HTMLButtonElement {
  const button = [...container.querySelectorAll("button")].find(
    (candidate) => candidate.textContent?.trim() === label,
  );

  if (!(button instanceof HTMLButtonElement)) {
    throw new Error("Button not found: " + label);
  }

  return button;
}

async function click(button: HTMLButtonElement) {
  await act(async () => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
}

beforeEach(() => {
  container = document.createElement("div");
  document.body.append(container);
  root = createRoot(container);

  act(() => {
    root.render(<SaasSpecificationTool />);
  });
});

afterEach(() => {
  act(() => root.unmount());
  container.remove();
  vi.restoreAllMocks();
});

describe("SaasSpecificationTool", () => {
  it("starts empty with every non-compensable decision visible as a STOP", () => {
    expect(container.querySelectorAll("fieldset")).toHaveLength(9);
    expect(container.querySelectorAll("textarea")).toHaveLength(45);
    expect(
      container.querySelectorAll('textarea[id$="-blockingUnknown"]'),
    ).toHaveLength(9);
    expect(container.textContent).toContain(
      "STOP — une décision ou une inconnue bloquante reste à traiter",
    );
    expect(container.textContent).toContain(
      "Premier point à traiter · aucun score",
    );

    const output = container.querySelector(
      'pre[aria-label="Cahier des charges SaaS généré en Markdown"]',
    );
    expect(output?.textContent).toContain("STOP — nom du produit à décider");
  });

  it("announces only the concise verdict while keeping detail lists outside", () => {
    const statusRegions = container.querySelectorAll('[role="status"]');
    expect(statusRegions).toHaveLength(1);

    const status = statusRegions[0];
    const evaluationSection = status?.parentElement;
    expect(evaluationSection?.tagName).toBe("SECTION");
    expect(evaluationSection?.hasAttribute("aria-live")).toBe(false);
    expect(evaluationSection?.hasAttribute("aria-atomic")).toBe(false);
    expect(status?.getAttribute("aria-atomic")).toBe("true");
    expect(status?.textContent).toContain(
      "STOP — une décision ou une inconnue bloquante reste à traiter",
    );
    expect(status?.textContent).toContain("Une décision structurante manque");
    expect(status?.textContent).not.toContain("STOP à attribuer");
    expect(status?.textContent).not.toContain("Points à compléter");
    expect(status?.textContent).not.toContain("Prochaine action");
    expect(evaluationSection?.textContent).toContain("STOP à attribuer");
    expect(evaluationSection?.textContent).toContain("Points à compléter");
    expect(evaluationSection?.textContent).toContain("Prochaine action");
  });

  it("loads the separate fictitious example, then resets every field", async () => {
    await click(findButton("Charger l’exemple fictif"));

    const projectName = container.querySelector<HTMLInputElement>(
      "#saas-spec-project-name",
    );
    expect(projectName?.value).toBe(
      "DossierClair — exemple entièrement fictif",
    );
    expect(
      [...container.querySelectorAll<HTMLTextAreaElement>("textarea")].every(
        (field) => field.value.length > 0,
      ),
    ).toBe(true);
    expect(container.textContent).toContain(
      "Document candidat à une relecture de consultation",
    );
    expect(container.querySelector("pre")?.textContent).toContain(
      "Studio Rivage",
    );

    await click(findButton("Réinitialiser"));

    expect(projectName?.value).toBe("");
    expect(
      [...container.querySelectorAll<HTMLTextAreaElement>("textarea")].every(
        (field) => field.value === "",
      ),
    ).toBe(true);
    expect(container.textContent).toContain(
      "Document réinitialisé. Les décisions sont de nouveau en STOP.",
    );
  });

  it("copies the generated Markdown without sending or downloading it", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });

    await click(findButton("Charger l’exemple fictif"));
    await click(findButton("Copier le Markdown"));

    expect(writeText).toHaveBeenCalledTimes(1);
    expect(writeText.mock.calls[0]?.[0]).toContain(
      "# Cahier des charges SaaS — DossierClair — exemple entièrement fictif",
    );
    expect(container.textContent).toContain(
      "Cahier des charges copié en Markdown",
    );
    expect(container.querySelector("a[download]")).toBeNull();
  });
});
