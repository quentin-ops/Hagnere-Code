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
import { SaasSecurityDecisionTool } from "./SaasSecurityDecisionTool";

function buttonByText(container: HTMLElement, text: string) {
  const button = [...container.querySelectorAll("button")].find((candidate) =>
    candidate.textContent?.includes(text),
  );
  if (!button) throw new Error(`Bouton introuvable : ${text}`);
  return button;
}

function inputByLabel(container: HTMLElement, text: string) {
  const label = [...container.querySelectorAll("label")].find((candidate) =>
    candidate.textContent?.includes(text),
  );
  const input = label?.querySelector("input");
  if (!input) throw new Error(`Champ introuvable : ${text}`);
  return input as HTMLInputElement;
}

function selectByLabel(container: HTMLElement, text: string) {
  const label = [...container.querySelectorAll("label")].find((candidate) =>
    candidate.textContent?.includes(text),
  );
  const select = label?.querySelector("select");
  if (!select) throw new Error(`Liste introuvable : ${text}`);
  return select as HTMLSelectElement;
}

function changeInput(input: HTMLInputElement, value: string) {
  act(() => {
    Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype,
      "value",
    )?.set?.call(input, value);
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
  });
}

describe("SaasSecurityDecisionTool", () => {
  let container: HTMLDivElement;
  let root: Root;

  beforeAll(() => {
    (
      globalThis as typeof globalThis & { IS_REACT_ACT_ENVIRONMENT: boolean }
    ).IS_REACT_ACT_ENVIRONMENT = true;
  });

  beforeEach(async () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-07-25T12:00:00+02:00"));
    container = document.createElement("div");
    document.body.append(container);
    root = createRoot(container);
    await act(async () => {
      root.render(<SaasSecurityDecisionTool />);
      await Promise.resolve();
    });
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  it("starts with an honest incomplete result and never presents a security score", () => {
    expect(container.textContent).toContain(
      "Peut-on honnêtement signer ce contrat aujourd’hui ?",
    );
    expect(container.textContent).toContain(
      "aucun nom de client, secret, clé, donnée personnelle",
    );
    expect(container.textContent).toContain(
      "Complétez les informations avant de décider",
    );
    expect(container.textContent).toContain(
      "ni note de sécurité ni certificat",
    );
    expect(container.textContent).toContain(
      "cinq contrôles essentiels qui ne peuvent pas être reclassés",
    );
    expect(container.querySelectorAll("details")).toHaveLength(6);
    expect(container.querySelector("form")).toBeNull();
    expect(
      (buttonByText(container, "Télécharger le brouillon") as HTMLButtonElement)
        .disabled,
    ).toBe(false);
    expect(container.textContent).toContain("Imprimer le brouillon");
  });

  it("locks the five essential controls and isolates heterogeneous extra conditions", () => {
    const families = [...container.querySelectorAll("details")];
    const essential = families[0] as HTMLElement;
    const extra = families[5] as HTMLElement;

    expect(
      selectByLabel(essential, "Importance avant signature").disabled,
    ).toBe(true);
    expect(
      [...selectByLabel(essential, "État observé").options].map(
        (option) => option.value,
      ),
    ).not.toContain("not-applicable");
    expect(selectByLabel(extra, "Importance avant signature").disabled).toBe(
      false,
    );
    expect(
      [...selectByLabel(extra, "État observé").options].map(
        (option) => option.value,
      ),
    ).toContain("not-applicable");
    expect(container.textContent).toContain(
      "exportez un dossier par exigence et retenez le verdict le plus restrictif",
    );

    const status = selectByLabel(extra, "État observé");
    const disposition = selectByLabel(extra, "Décision envisagée");
    act(() => {
      status.value = "not-applicable";
      status.dispatchEvent(new Event("change", { bubbles: true }));
      disposition.value = "condition-after-signature";
      disposition.dispatchEvent(new Event("change", { bubbles: true }));
    });

    const nature = selectByLabel(extra, "Nature de la demande");
    act(() => {
      nature.value = "applicable-obligation";
      nature.dispatchEvent(new Event("change", { bubbles: true }));
    });
    expect(
      [...selectByLabel(extra, "Décision envisagée").options].map(
        (option) => option.value,
      ),
    ).not.toContain("condition-after-signature");
    expect(
      [...selectByLabel(extra, "État observé").options].map(
        (option) => option.value,
      ),
    ).not.toContain("not-applicable");
    expect(selectByLabel(extra, "État observé").value).toBe("unknown");
    expect(selectByLabel(extra, "Décision envisagée").value).toBe("unknown");
    expect(container.textContent).toContain(
      "Cet atelier ne peut pas déclarer une obligation applicable reportable",
    );

    act(() => {
      nature.value = "buyer-preference";
      nature.dispatchEvent(new Event("change", { bubbles: true }));
    });
    const optionalStatus = selectByLabel(extra, "État observé");
    act(() => {
      optionalStatus.value = "not-applicable";
      optionalStatus.dispatchEvent(new Event("change", { bubbles: true }));
      nature.value = "independent-assurance";
      nature.dispatchEvent(new Event("change", { bubbles: true }));
    });
    expect(selectByLabel(extra, "État observé").value).toBe("unknown");
    expect(
      [...selectByLabel(extra, "État observé").options].map(
        (option) => option.value,
      ),
    ).not.toContain("not-applicable");
    expect(container.textContent).toContain(
      "ne peut pas être écartée par une note interne",
    );

    act(() => {
      nature.value = "buyer-preference";
      nature.dispatchEvent(new Event("change", { bubbles: true }));
    });
    const statusBeforeCritical = selectByLabel(extra, "État observé");
    act(() => {
      statusBeforeCritical.value = "not-applicable";
      statusBeforeCritical.dispatchEvent(
        new Event("change", { bubbles: true }),
      );
    });
    const importance = selectByLabel(extra, "Importance avant signature");
    act(() => {
      importance.value = "critical";
      importance.dispatchEvent(new Event("change", { bubbles: true }));
    });
    expect(
      [...selectByLabel(extra, "État observé").options].map(
        (option) => option.value,
      ),
    ).not.toContain("not-applicable");
    expect(selectByLabel(extra, "État observé").value).toBe("unknown");
  });

  it("prefixes an incomplete local export as a draft", () => {
    vi.spyOn(URL, "createObjectURL").mockReturnValue("blob:security-draft");
    vi.spyOn(URL, "revokeObjectURL").mockImplementation(() => undefined);
    let filename = "";
    vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(
      function captureFilename(this: HTMLAnchorElement) {
        filename = this.download;
      },
    );

    act(() => buttonByText(container, "Télécharger le brouillon").click());

    expect(filename).toMatch(/^brouillon-dossier-decision-securite-/);
  });

  it("loads the fictitious capacity case without disguising the shortfall", () => {
    act(() => buttonByText(container, "Charger l’exemple fictif").click());

    expect(
      inputByLabel(container, "Référence interne sans nom de client").value,
    ).toBe("EXEMPLE-SAAS-FICTIF-01");
    expect(container.textContent).toContain(
      "Exemple fictif chargé. Remplacez chaque hypothèse avant de décider.",
    );
    expect(container.textContent).toContain(
      "Reporter la signature et qualifier le risque",
    );
    expect(container.textContent).toContain("120 h");
    expect(container.textContent).toContain("150 h");
    expect(container.textContent).toContain("80 h");
    expect(container.textContent).toContain("-70 h");
    expect(container.textContent).toContain(
      "Ne pas demander au client d’accepter un risque critique",
    );
  });

  it("regenerates the fictitious dates from the local day", () => {
    vi.setSystemTime(new Date("2026-08-23T09:00:00+02:00"));
    act(() => window.dispatchEvent(new Event("focus")));
    act(() => buttonByText(container, "Charger l’exemple fictif").click());

    expect(inputByLabel(container, "Date de l’observation").value).toBe(
      "2026-08-23",
    );
    expect(inputByLabel(container, "Date limite de signature").value).toBe(
      "2026-09-20",
    );
    expect(container.textContent).toContain("120 h");
    expect(container.textContent).toContain("150 h");
    expect(container.textContent).toContain("80 h");
    expect(container.textContent).toContain("-70 h");
  });

  it("builds the TXT entirely in the browser and revokes its temporary URL", () => {
    const createObjectURL = vi
      .spyOn(URL, "createObjectURL")
      .mockReturnValue("blob:security-decision");
    const revokeObjectURL = vi
      .spyOn(URL, "revokeObjectURL")
      .mockImplementation(() => undefined);
    const click = vi
      .spyOn(HTMLAnchorElement.prototype, "click")
      .mockImplementation(() => undefined);

    act(() => buttonByText(container, "Charger l’exemple fictif").click());
    const download = buttonByText(
      container,
      "Télécharger le dossier texte",
    ) as HTMLButtonElement;
    expect(download.disabled).toBe(false);

    act(() => download.click());

    expect(createObjectURL).toHaveBeenCalledOnce();
    const blob = createObjectURL.mock.calls[0]?.[0];
    expect(blob).toBeInstanceOf(Blob);
    expect((blob as Blob).type).toBe("text/plain;charset=utf-8");
    expect(click).toHaveBeenCalledOnce();
    expect(revokeObjectURL).toHaveBeenCalledWith("blob:security-decision");
    expect(container.textContent).toContain(
      "Aucune donnée n’a été envoyée au site",
    );
  });

  it("clears the loaded example without retaining its values", () => {
    act(() => buttonByText(container, "Charger l’exemple fictif").click());
    act(() => buttonByText(container, "Effacer").click());
    expect(container.textContent).toContain(
      "Effacer définitivement toutes les saisies",
    );
    expect(
      inputByLabel(container, "Référence interne sans nom de client").value,
    ).toBe("EXEMPLE-SAAS-FICTIF-01");
    act(() => buttonByText(container, "Effacer définitivement").click());

    expect(
      inputByLabel(container, "Référence interne sans nom de client").value,
    ).toBe("");
    expect(container.textContent).toContain("Atelier effacé sur cet appareil.");
    expect(container.textContent).toContain(
      "Complétez les informations avant de décider",
    );
  });

  it("prints a local report without requiring a server round-trip", () => {
    const print = vi.fn();
    Object.defineProperty(window, "print", {
      configurable: true,
      value: print,
    });

    act(() => buttonByText(container, "Imprimer le brouillon").click());

    expect(print).toHaveBeenCalledOnce();
    expect(
      container.querySelector(".saas-security-print-report")?.textContent,
    ).toContain(
      "BROUILLON INCOMPLET — NE PAS UTILISER POUR AUTORISER UNE SIGNATURE",
    );
  });

  it("keeps every interactive control explicitly labelled and keyboard-sized", () => {
    for (const control of container.querySelectorAll(
      "input, select, textarea",
    )) {
      expect(control.closest("label")).not.toBeNull();
    }
    for (const fieldset of container.querySelectorAll("fieldset")) {
      expect(fieldset.querySelector(":scope > legend")).not.toBeNull();
    }
    for (const button of container.querySelectorAll("button")) {
      expect(button.className).toContain("min-h-11");
    }
    expect(container.querySelector("[aria-live='polite']")).not.toBeNull();
    expect(
      inputByLabel(container, "Capacité nette disponible par semaine").max,
    ).toBe("1000000");
    expect(
      inputByLabel(
        container.querySelectorAll("details")[0] as HTMLElement,
        "Charge totale encore ouverte",
      ).max,
    ).toBe("1000000");
  });

  it("uses the same minimum workload in the interface and the decision engine", () => {
    act(() => buttonByText(container, "Charger l’exemple fictif").click());
    const firstFamily = container.querySelectorAll("details")[0] as HTMLElement;
    const workload = inputByLabel(firstFamily, "Charge totale encore ouverte");

    expect(workload.min).toBe("0.01");
    expect(workload.step).toBe("0.01");

    changeInput(workload, "0.001");

    expect(workload.getAttribute("aria-invalid")).toBe("true");
    expect(firstFamily.textContent).toContain(
      "Une charge inférieure à 0,01 heure ne peut pas représenter",
    );
    expect(container.textContent).toContain(
      "Complétez les informations avant de décider",
    );

    changeInput(workload, "0.01");

    expect(workload.getAttribute("aria-invalid")).toBeNull();
  });

  it("links family errors and opens the first invalid family from the result", () => {
    const firstFamily = container.querySelector(
      "details",
    ) as HTMLDetailsElement;
    const describedBy = firstFamily.getAttribute("aria-describedby");
    const liveRegion = container.querySelector(
      "[aria-live='polite']",
    ) as HTMLElement;

    expect(firstFamily.getAttribute("aria-invalid")).toBe("true");
    expect(describedBy).toBeTruthy();
    expect(document.getElementById(describedBy ?? "")?.textContent).toContain(
      "indiquez la demande",
    );
    expect(
      firstFamily.querySelector("[role='group']")?.getAttribute("aria-invalid"),
    ).toBe("true");
    expect(liveRegion.textContent).toContain(
      "Le bouton ouvre ce premier point dans une famille",
    );
    expect(liveRegion.textContent).toContain("indiquez la demande");

    act(() =>
      buttonByText(container, "Ouvrir le premier point à corriger").click(),
    );

    expect(firstFamily.open).toBe(true);
    expect(document.activeElement).toBe(firstFamily.querySelector("summary"));
  });
});
