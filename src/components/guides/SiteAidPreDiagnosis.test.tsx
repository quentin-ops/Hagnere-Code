/** @vitest-environment happy-dom */

import axe from "axe-core";
import { act } from "react";
import { createRoot, hydrateRoot, type Root } from "react-dom/client";
import { renderToString } from "react-dom/server";
import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import { SiteAidPreDiagnosis } from "./SiteAidPreDiagnosis";
import {
  SITE_AID_PREDIAGNOSIS_DIRTY_EVENT,
  SITE_AID_PREDIAGNOSIS_TRANSFER_EVENT,
  type SiteAidPreDiagnosisTransfer,
} from "@/lib/site-aid-prediagnosis";

function radioByQuestion(
  container: HTMLElement,
  question: string,
  answer: "Oui documenté" | "À confirmer" | "Non",
) {
  const fieldset = [...container.querySelectorAll("fieldset")].find(
    (candidate) =>
      candidate
        .querySelector(":scope > legend")
        ?.textContent?.includes(question),
  );
  const label = [...(fieldset?.querySelectorAll("label") ?? [])].find(
    (candidate) => candidate.textContent?.includes(answer),
  );
  const radio = label?.querySelector('input[type="radio"]');
  if (!(radio instanceof HTMLInputElement)) {
    throw new Error(`Choix introuvable : ${question} / ${answer}`);
  }
  return radio;
}

function choose(
  container: HTMLElement,
  question: string,
  answer: "Oui documenté" | "À confirmer" | "Non",
) {
  act(() => radioByQuestion(container, question, answer).click());
}

function chooseDocumentedForAll(container: HTMLElement) {
  for (const question of [
    "Source officielle actuelle",
    "Implantation",
    "Activité",
    "Forme ou statut",
    "Ancienneté",
    "Taille de l’entreprise",
    "Dépenses admissibles",
    "Calendrier et ordre des actes",
    "Trésorerie sans aide",
    "Délai et destinataire du versement",
    "Pièces à fournir",
    "Obligations après attribution",
    "Base juridique",
    "Cumul et aides antérieures",
  ]) {
    choose(container, question, "Oui documenté");
    const fieldset = [...container.querySelectorAll("fieldset")].find(
      (candidate) =>
        candidate
          .querySelector(":scope > legend")
          ?.textContent?.includes(question),
    );
    const evidence = fieldset?.querySelector("textarea");
    if (!(evidence instanceof HTMLTextAreaElement)) {
      throw new Error(`Preuve introuvable : ${question}`);
    }
    act(() => {
      Object.getOwnPropertyDescriptor(
        HTMLTextAreaElement.prototype,
        "value",
      )?.set?.call(evidence, `Preuve déclarée pour ${question}`);
      evidence.dispatchEvent(new Event("input", { bubbles: true }));
      evidence.dispatchEvent(new Event("change", { bubbles: true }));
    });
  }
}

describe("SiteAidPreDiagnosis", () => {
  let container: HTMLDivElement;
  let root: Root;

  beforeAll(() => {
    (
      globalThis as typeof globalThis & { IS_REACT_ACT_ENVIRONMENT: boolean }
    ).IS_REACT_ACT_ENVIRONMENT = true;
  });

  beforeEach(() => {
    container = document.createElement("div");
    document.body.append(container);
    root = createRoot(container);
    act(() => root.render(<SiteAidPreDiagnosis />));
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
    vi.restoreAllMocks();
  });

  it("starts with fourteen independent tri-state questions and preserves unknowns", () => {
    expect(container.querySelectorAll("fieldset")).toHaveLength(14);
    expect(container.querySelectorAll('input[type="radio"]')).toHaveLength(42);
    expect(
      container.querySelectorAll('input[type="radio"]:checked'),
    ).toHaveLength(14);

    for (const fieldset of container.querySelectorAll("fieldset")) {
      expect(fieldset.querySelector(":scope > legend")).not.toBeNull();
      const radios = fieldset.querySelectorAll<HTMLInputElement>(
        'input[type="radio"]',
      );
      expect(radios).toHaveLength(3);
      expect([...radios].find((radio) => radio.checked)?.value).toBe("confirm");
      expect(new Set([...radios].map((radio) => radio.name)).size).toBe(1);
      for (const radio of radios) {
        expect(radio.id).not.toBe("");
        expect(
          container.querySelector(`label[for="${radio.id}"]`),
        ).not.toBeNull();
      }
    }

    expect(container.textContent).toContain(
      "Instruction suspendue : preuves à obtenir",
    );
    expect(container.textContent).toContain("14 à confirmer");
    expect(container.textContent).toContain(
      "Page officielle actuelle : URL directe",
    );
    expect(container.textContent).toContain(
      "aucune donnée n’est envoyée, enregistrée, persistée ou transmise par le réseau",
    );
  });

  it("prioritizes a negative answer and gives only targeted corrective actions", () => {
    choose(container, "Dépenses admissibles", "Non");

    expect(container.textContent).toContain(
      "Piste à écarter ou à redéfinir avant instruction",
    );
    expect(container.textContent).toContain(
      "Retirez ou reventilez les lignes exclues",
    );
    expect(container.textContent).toContain(
      "Pièces à obtenir pour redéfinir ou confirmer la piste",
    );
    expect(container.textContent).toContain(
      "Classement ligne par ligne du devis",
    );
    expect(container.textContent).not.toContain(
      "Ouvrir le dossier à instruire",
    );

    choose(container, "Source officielle actuelle", "Non");
    expect(container.textContent).toContain(
      "Écartez la fiche ancienne ou secondaire",
    );
  });

  it("lists exactly the outstanding proof when only one answer remains unknown", () => {
    chooseDocumentedForAll(container);
    choose(container, "Implantation", "À confirmer");

    expect(container.textContent).toContain(
      "Instruction suspendue : preuves à obtenir",
    );
    const proofHeading = [...container.querySelectorAll("p")].find(
      (candidate) => candidate.textContent === "Preuves exactes à obtenir",
    );
    const proofList = proofHeading?.nextElementSibling;
    expect(proofList?.querySelectorAll("li")).toHaveLength(1);
    expect(proofList?.textContent).toContain(
      "Passage officiel qui nomme le territoire admissible",
    );
    expect(proofList?.textContent).not.toContain("Plan de trésorerie TTC daté");
  });

  it("opens the dossier only after fourteen documented answers", () => {
    chooseDocumentedForAll(container);

    expect(container.textContent).toContain(
      "Piste à instruire, sans verdict d’éligibilité",
    );
    expect(container.textContent).toContain("14 oui documentés, 0 à confirmer");
    expect(
      container.querySelector<HTMLAnchorElement>(
        'a[href="#site-aid-decision-dossier"]',
      )?.textContent,
    ).toContain("Ouvrir le dossier à instruire");
    expect(
      [...container.querySelectorAll("li")].filter((item) =>
        item.textContent?.includes("Page officielle actuelle : URL directe"),
      ),
    ).toHaveLength(1);
  });

  it("keeps native radio focus and a concise polite live result", () => {
    const radio = radioByQuestion(
      container,
      "Source officielle actuelle",
      "Oui documenté",
    );
    act(() => {
      radio.focus();
      radio.dispatchEvent(
        new KeyboardEvent("keydown", { key: " ", bubbles: true }),
      );
      radio.click();
    });

    expect(document.activeElement).toBe(radio);
    expect(radio.checked).toBe(true);
    const liveResult = container.querySelector('[role="status"]');
    expect(liveResult?.getAttribute("aria-live")).toBe("polite");
    expect(liveResult?.getAttribute("aria-atomic")).toBe("true");
    expect(liveResult?.querySelector("ul")).toBeNull();
  });

  it("never counts a documented answer without a declared proof", () => {
    choose(container, "Source officielle actuelle", "Oui documenté");

    expect(container.textContent).toContain("0 oui documenté");
    expect(container.textContent).toContain("14 à confirmer");
    expect(container.textContent).toContain(
      "Ajoutez une référence de preuve pour compter cette réponse",
    );
    expect(
      container.querySelector(
        "#site-aid-prediagnosis-source-evidence[aria-invalid='true']",
      ),
    ).not.toBeNull();

    const transferButton = [...container.querySelectorAll("button")].find(
      (candidate) =>
        candidate.textContent?.includes(
          "Transférer mes réponses vers le dossier",
        ),
    );
    let transferredStatus: string | undefined;
    const listener = (event: Event) => {
      if (event instanceof CustomEvent) {
        transferredStatus = (
          event.detail as SiteAidPreDiagnosisTransfer
        ).items.find((item) => item.id === "source")?.status;
      }
    };
    window.addEventListener(SITE_AID_PREDIAGNOSIS_TRANSFER_EVENT, listener);
    act(() => transferButton?.click());
    window.removeEventListener(SITE_AID_PREDIAGNOSIS_TRANSFER_EVENT, listener);
    expect(transferredStatus).toBe("confirm");
  });

  it("transfers all fourteen declarative answers and proofs even with a negative blocker", () => {
    choose(container, "Dépenses admissibles", "Non");
    const evidence = container.querySelector<HTMLTextAreaElement>(
      "#site-aid-prediagnosis-expenses-evidence",
    );
    expect(evidence).not.toBeNull();
    act(() => {
      Object.getOwnPropertyDescriptor(
        HTMLTextAreaElement.prototype,
        "value",
      )?.set?.call(evidence, "Devis Q-42, ligne à reventiler.");
      evidence?.dispatchEvent(new Event("input", { bubbles: true }));
      evidence?.dispatchEvent(new Event("change", { bubbles: true }));
    });
    let received: SiteAidPreDiagnosisTransfer | undefined;
    const listener = (event: Event) => {
      if (event instanceof CustomEvent) {
        received = event.detail as SiteAidPreDiagnosisTransfer;
      }
    };
    window.addEventListener(SITE_AID_PREDIAGNOSIS_TRANSFER_EVENT, listener);
    act(() => {
      const button = [...container.querySelectorAll("button")].find(
        (candidate) =>
          candidate.textContent?.includes(
            "Transférer mes réponses vers le dossier",
          ),
      );
      button?.click();
    });
    window.removeEventListener(SITE_AID_PREDIAGNOSIS_TRANSFER_EVENT, listener);

    expect(received?.items).toHaveLength(14);
    expect(
      received?.items.find((item) => item.id === "expenses"),
    ).toMatchObject({
      label: "Dépenses admissibles",
      status: "no",
      declaredEvidence: "Devis Q-42, ligne à reventiler.",
    });
    expect(container.textContent).toContain(
      "14 réponses transférées localement",
    );
    expect(container.textContent).toContain(
      "restent déclaratives et chaque détail ou preuve doit encore être confirmé",
    );
  });

  it("warns only while autonomous answers remain untransferred and keeps one live announcement", () => {
    expect(
      container.querySelectorAll('[role="status"][aria-live="polite"]'),
    ).toHaveLength(1);
    const cleanEvent = new Event("beforeunload", { cancelable: true });
    window.dispatchEvent(cleanEvent);
    expect(cleanEvent.defaultPrevented).toBe(false);

    choose(container, "Dépenses admissibles", "Non");
    expect(
      container.querySelector(
        "[data-site-aid-prediagnosis-unsaved-status='unsent']",
      )?.textContent,
    ).toContain("Modifications non transférées");
    const dirtyEvent = new Event("beforeunload", { cancelable: true });
    window.dispatchEvent(dirtyEvent);
    expect(dirtyEvent.defaultPrevented).toBe(true);

    act(() => {
      [...container.querySelectorAll("button")]
        .find((candidate) =>
          candidate.textContent?.includes(
            "Transférer mes réponses vers le dossier",
          ),
        )
        ?.click();
    });
    expect(
      container.querySelector(
        "[data-site-aid-prediagnosis-unsaved-status='aligned']",
      )?.textContent,
    ).toContain("14 réponses transférées localement");
    expect(
      container.querySelector('[role="status"][aria-live="polite"]')
        ?.textContent,
    ).toContain("Aucune modification non transférée ne subsiste");
    const transferredEvent = new Event("beforeunload", { cancelable: true });
    window.dispatchEvent(transferredEvent);
    expect(transferredEvent.defaultPrevented).toBe(false);
  });

  it("announces one dirty transition per transfer cycle and exposes a stable transfer target", () => {
    const dirtyListener = vi.fn();
    window.addEventListener(SITE_AID_PREDIAGNOSIS_DIRTY_EVENT, dirtyListener);

    choose(container, "Dépenses admissibles", "Non");
    choose(container, "Implantation", "Non");
    expect(dirtyListener).toHaveBeenCalledTimes(1);
    expect(
      (
        dirtyListener.mock.calls[0]?.[0] as CustomEvent<{
          questionId: string;
        }>
      ).detail,
    ).toEqual({ questionId: "expenses" });

    const transferButton = container.querySelector<HTMLButtonElement>(
      "#site-aid-prediagnosis-transfer-button",
    );
    expect(transferButton?.textContent).toContain(
      "Transférer mes réponses vers le dossier",
    );
    act(() => transferButton?.click());

    choose(container, "Activité", "Non");
    expect(dirtyListener).toHaveBeenCalledTimes(2);
    expect(
      (
        dirtyListener.mock.calls[1]?.[0] as CustomEvent<{
          questionId: string;
        }>
      ).detail,
    ).toEqual({ questionId: "activity" });

    window.removeEventListener(
      SITE_AID_PREDIAGNOSIS_DIRTY_EVENT,
      dirtyListener,
    );
  });

  it("hydrates fourteen unknown criteria without changing the server markup", async () => {
    act(() => root.unmount());
    const consoleError = vi
      .spyOn(console, "error")
      .mockImplementation(() => undefined);
    const serverMarkup = renderToString(<SiteAidPreDiagnosis />);
    expect(serverMarkup.match(/<fieldset/g)).toHaveLength(14);
    expect(serverMarkup.match(/type="radio"/g)).toHaveLength(42);
    container.innerHTML = serverMarkup;
    await act(async () => {
      root = hydrateRoot(container, <SiteAidPreDiagnosis />);
      await Promise.resolve();
    });
    expect(consoleError).not.toHaveBeenCalled();
    expect(
      container.querySelectorAll('input[type="radio"]:checked'),
    ).toHaveLength(14);
  });

  it("passes the full axe-core ruleset in suspended and completed states", async () => {
    expect((await axe.run(container)).violations).toEqual([]);

    chooseDocumentedForAll(container);
    expect((await axe.run(container)).violations).toEqual([]);
  });
});
