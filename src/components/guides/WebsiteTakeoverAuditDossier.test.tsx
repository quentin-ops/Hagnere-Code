/** @vitest-environment happy-dom */

import axe from "axe-core";
import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { renderToString } from "react-dom/server";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { copyTextToClipboard } from "@/lib/clipboard";
import {
  buildWebsiteTakeoverAuditJson,
  createFictitiousWebsiteTakeoverAuditDossier,
  WEBSITE_TAKEOVER_ZONE_IDS,
} from "@/lib/website-takeover-audit";
import { WebsiteTakeoverAuditDossier } from "./WebsiteTakeoverAuditDossier";

vi.mock("@/lib/clipboard", () => ({
  copyTextToClipboard: vi.fn().mockResolvedValue(true),
}));

function buttonByText(scope: ParentNode, text: string): HTMLButtonElement {
  const button = [...scope.querySelectorAll("button")].find((candidate) =>
    candidate.textContent?.includes(text),
  );
  if (!(button instanceof HTMLButtonElement)) {
    throw new Error(`Bouton introuvable : ${text}`);
  }
  return button;
}

function controlByLabel<
  T extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
>(scope: ParentNode, text: string, selector: string): T {
  const label = [...scope.querySelectorAll("label")].find((candidate) =>
    candidate.textContent?.includes(text),
  );
  const control = label?.querySelector(selector);
  if (!(
    control instanceof HTMLInputElement ||
    control instanceof HTMLTextAreaElement ||
    control instanceof HTMLSelectElement
  )) {
    throw new Error(`Contrôle introuvable : ${text}`);
  }
  return control as T;
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

function reviewCheckbox(scope: ParentNode): HTMLInputElement {
  return controlByLabel<HTMLInputElement>(
    scope,
    "J’ai relu la synthèse",
    'input[type="checkbox"]',
  );
}

describe("WebsiteTakeoverAuditDossier", () => {
  let container: HTMLDivElement;
  let root: Root;
  let fetchSpy: ReturnType<typeof vi.spyOn>;
  let storageGetSpy: ReturnType<typeof vi.spyOn>;
  let storageSetSpy: ReturnType<typeof vi.spyOn>;

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
      value: vi.fn(() => "blob:website-takeover-audit"),
    });
    Object.defineProperty(URL, "revokeObjectURL", {
      configurable: true,
      writable: true,
      value: vi.fn(),
    });
    fetchSpy = vi.spyOn(globalThis, "fetch");
    storageGetSpy = vi.spyOn(Storage.prototype, "getItem");
    storageSetSpy = vi.spyOn(Storage.prototype, "setItem");
    container = document.createElement("div");
    document.body.append(container);
    root = createRoot(container);
    act(() => root.render(<WebsiteTakeoverAuditDossier />));
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
    vi.restoreAllMocks();
  });

  it("rend sur le serveur un outil local, progressif et imprimable en français", () => {
    const html = renderToString(<WebsiteTakeoverAuditDossier />);

    expect(html).toContain("Dossier d’audit avant reprise d’un site");
    expect(html).toContain("aucune donnée envoyée");
    expect(html).toContain("aucune sauvegarde automatique");
    expect(html).toContain('data-read-time-exclude="true"');
    expect(html).toContain("website-takeover-print-report");
    expect(html).toContain("@page {");
    expect(html).toContain("margin: 16mm 12mm 15mm");
    expect(html).toContain(
      "#website-takeover-audit-dossier > :not(.website-takeover-print-report)",
    );
    expect(html).toContain("SYNTHÈSE DE DÉCISION");
    expect(html).toContain("ANNEXE — PREUVES, LIMITES ET ACTIONS INTERDITES");
    expect(html).toContain("break-after: page");
    expect(html).toContain("website-takeover-print-cost-source");
    expect(html).toContain(".website-takeover-print-tco-details table {");
    expect(html).toContain("font-size: 6.6pt");
    expect(html).toContain("@bottom-right");
    expect(html).toContain("counter(page)");
    expect(html).toContain("counter(pages)");
    expect(html).toContain(
      ".website-takeover-print-running-header,\n          .website-takeover-print-running-footer",
    );
    expect(html).toContain("display: none !important");
    expect(html).toContain("Corrections avant décision");
    expect(html).toContain("Données TCO manquantes");
    expect(html).toContain("Convention TCO");
    expect(html).toContain("trajectories.control.commonScope");
    expect(html).toContain("Progression :");
    expect(html).toContain(
      "Qualifier les données et les treize facteurs imposant un audit",
    );
    expect(html).toContain("focus-within:ring-2");
    expect(html).toContain("min-h-11");

    const report = container.querySelector(".website-takeover-print-report");
    const printTitle = report?.querySelector(
      '[role="heading"][aria-level="1"]',
    );
    expect(printTitle?.textContent).toBe(
      "Dossier d’audit avant reprise d’un site",
    );
    expect(report?.querySelector("h1")).toBeNull();
    const printSummary = report?.querySelector(
      ".website-takeover-print-summary",
    );
    const firstSectionHeading = printSummary?.querySelector("h2");
    expect(printSummary?.contains(printTitle as Node)).toBe(true);
    expect(
      (printTitle as Node).compareDocumentPosition(
        firstSectionHeading as Node,
      ) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      printSummary?.nextElementSibling?.classList.contains(
        "website-takeover-print-annex",
      ),
    ).toBe(true);
  });

  it("commence vide, fermé et sans faux GO avec dix-huit zones", () => {
    expect(container.textContent).toContain("Dossier incomplet");
    expect(container.textContent).toContain("Audit complet requis");
    expect(container.textContent).toContain("Aucun faux GO");
    expect(container.textContent).toContain("ND");
    expect(
      container.querySelectorAll("[data-website-takeover-zone]"),
    ).toHaveLength(WEBSITE_TAKEOVER_ZONE_IDS.length);
    expect(
      container.querySelectorAll("[data-website-takeover-trajectory]"),
    ).toHaveLength(4);
    expect(container.textContent).not.toContain("go-with-reservations");
    expect(container.textContent).not.toContain("declaration-only");
    expect(container.textContent).not.toContain("ownership_authorization");
  });

  it("charge le cas fictif, montre le GO sous réserves et les quatre TCO", () => {
    act(() => buttonByText(container, "Charger l’exemple fictif").click());

    expect(container.textContent).toContain("GO sous réserves");
    expect(container.textContent).toContain("Audit complet requis");
    expect(container.textContent).toContain("Boutique Alpine fictive");
    expect(container.textContent).toContain("Mise sous contrôle de l’existant");
    expect(container.textContent).toContain("Stabilisation ciblée");
    expect(container.textContent).toContain(
      "Modernisation ou migration progressive",
    );
    expect(container.textContent).toContain("Reconstruction ou remplacement");
    const tcoCards = container.querySelectorAll(
      "[data-website-takeover-tco-summary]",
    );
    expect(tcoCards).toHaveLength(4);
    for (const card of tcoCards) {
      expect(card.textContent).toContain("12 mois");
      expect(card.textContent).toContain("36 mois");
      expect(card.textContent).toContain("60 mois");
      expect(card.textContent).toContain("EUR HT");
      expect(card.textContent).not.toContain("ND");
    }
    const prioritySummary = container.querySelector(
      '[aria-label="Réserves par priorité"]',
    );
    expect(prioritySummary?.textContent).toContain("P2");
    expect(prioritySummary?.textContent).toContain("1");
  });

  it("garde le STOP prioritaire même si le reste du dossier est complet", () => {
    act(() => buttonByText(container, "Charger l’exemple fictif").click());
    changeControl(
      controlByLabel<HTMLSelectElement>(
        container,
        "Une compromission active",
        "select",
      ),
      "yes",
    );

    expect(container.textContent).toContain("STOP prioritaire");
    expect(container.textContent).toContain(
      "aucun score, coût ou contrôle positif ne compense une condition P0",
    );
    const prioritySummary = container.querySelector(
      '[aria-label="Réserves par priorité"]',
    );
    expect(prioritySummary?.textContent).toMatch(/P0\s*1/);
  });

  it("rend visible une preuve insuffisante au lieu d’accorder un faux GO", () => {
    act(() => buttonByText(container, "Charger l’exemple fictif").click());
    const firstZone = container.querySelector(
      '[data-website-takeover-zone="1"]',
    );
    expect(firstZone).toBeInstanceOf(HTMLDetailsElement);

    changeControl(
      controlByLabel<HTMLSelectElement>(
        firstZone as HTMLDetailsElement,
        "Type de preuve",
        "select",
      ),
      "declaration-only",
    );

    expect(firstZone?.textContent).toContain(
      "Statut effectif : Déclaré, non prouvé",
    );
    expect(firstZone?.textContent).toContain(
      "Preuve insuffisante : le statut saisi est déclassé",
    );
    expect(container.textContent).toContain("Reprise bloquée — P1 à lever");
    const prioritySummary = container.querySelector(
      '[aria-label="Réserves par priorité"]',
    );
    expect(prioritySummary?.textContent).toMatch(/P1\s*1/);
    expect(container.textContent).not.toContain(
      "GO limité au périmètre prouvé",
    );
  });

  it("ouvre chaque zone bloquante depuis son raccourci de correction", () => {
    const navigation = container.querySelector(
      '[aria-label="Accès direct à toutes les zones bloquantes"]',
    );
    const links = navigation?.querySelectorAll("a") ?? [];
    expect(links).toHaveLength(18);

    const firstLink = links[0] as HTMLAnchorElement;
    const target = container.querySelector(
      firstLink.getAttribute("href") as string,
    ) as HTMLDetailsElement;
    expect(target.open).toBe(false);

    act(() => firstLink.click());

    expect(target.open).toBe(true);
  });

  it("conserve le focus quand un identifiant de coût éditable change", () => {
    act(() => buttonByText(container, "Charger l’exemple fictif").click());
    const firstTrajectory = container.querySelector(
      '[data-website-takeover-trajectory="control"]',
    );
    expect(firstTrajectory).toBeInstanceOf(HTMLDetailsElement);
    const identifier = controlByLabel<HTMLInputElement>(
      firstTrajectory as HTMLDetailsElement,
      "Identifiant interne de ligne",
      "input",
    );

    act(() => identifier.focus());
    changeControl(identifier, "cout-transition-revu");

    expect(document.activeElement).toBe(identifier);
    expect(identifier.value).toBe("cout-transition-revu");
  });

  it("réimporte seulement un JSON R3 valide et révoque la relecture", async () => {
    act(() => buttonByText(container, "Charger l’exemple fictif").click());
    act(() => reviewCheckbox(container).click());
    expect(reviewCheckbox(container).checked).toBe(true);

    const fileInput = controlByLabel<HTMLInputElement>(
      container,
      "Importer un JSON compatible",
      'input[type="file"]',
    );
    const dossier = createFictitiousWebsiteTakeoverAuditDossier();
    dossier.context.siteName = "Dossier réimporté fictif";
    const file = new File(
      [buildWebsiteTakeoverAuditJson(dossier)],
      "dossier-r3.json",
      { type: "application/json" },
    );
    Object.defineProperty(fileInput, "files", {
      configurable: true,
      value: [file],
    });

    await act(async () => {
      fileInput.dispatchEvent(new Event("change", { bubbles: true }));
    });

    expect(container.textContent).toContain("Dossier réimporté fictif");
    expect(container.textContent).toContain(
      "Le JSON compatible a été relu par le moteur",
    );
    expect(reviewCheckbox(container).checked).toBe(false);
    expect(buttonByText(container, "Télécharger le JSON").disabled).toBe(true);
  });

  it("accepte une non-applicabilité seulement avec une justification explicite", () => {
    act(() => buttonByText(container, "Charger l’exemple fictif").click());
    changeControl(
      controlByLabel<HTMLSelectElement>(container, "Code spécifique", "select"),
      "no",
    );
    const codeZone = container.querySelector(
      '[data-website-takeover-zone="4"]',
    );
    expect(codeZone).toBeInstanceOf(HTMLDetailsElement);

    changeControl(
      controlByLabel<HTMLSelectElement>(
        codeZone as HTMLDetailsElement,
        "Applicabilité",
        "select",
      ),
      "not-applicable",
    );
    expect(codeZone?.textContent).toContain("Statut effectif : Non vérifié");

    changeControl(
      controlByLabel<HTMLTextAreaElement>(
        codeZone as HTMLDetailsElement,
        "Justification de non-applicabilité",
        "textarea",
      ),
      "Le site fictif utilise uniquement un service hébergé sans code remis, selon l’inventaire daté.",
    );

    expect(codeZone?.textContent).toContain("Statut effectif : Non applicable");
  });

  it("garde le TCO à ND dès qu’un montant manque et ne le convertit pas en zéro", () => {
    const emptyCards = container.querySelectorAll(
      "[data-website-takeover-tco-summary]",
    );
    for (const card of emptyCards) {
      expect(card.textContent).toContain("ND");
      expect(card.textContent).not.toContain("0,00");
    }

    act(() => buttonByText(container, "Charger l’exemple fictif").click());
    const firstTrajectory = container.querySelector(
      '[data-website-takeover-trajectory="control"]',
    );
    const firstSummary = container.querySelector(
      '[data-website-takeover-tco-summary="control"]',
    );
    expect(firstTrajectory).toBeInstanceOf(HTMLDetailsElement);
    expect(firstSummary?.textContent).not.toContain("ND");

    changeControl(
      controlByLabel<HTMLInputElement>(
        firstTrajectory as HTMLDetailsElement,
        "Montant unitaire",
        "input",
      ),
      "",
    );

    expect(firstSummary?.textContent).toContain("ND");
    expect(firstSummary?.textContent).not.toContain("0,00");
  });

  it("bloque les exports avant relecture, masque au mieux et utilise les noms du moteur", async () => {
    act(() => buttonByText(container, "Charger l’exemple fictif").click());
    const secret = "TOPSECRET987654321";
    changeControl(
      controlByLabel<HTMLInputElement>(
        container,
        "Nom ou description du site",
        "input",
      ),
      `client_secret=${secret}`,
    );

    const copyButton = buttonByText(container, "Copier le rapport");
    const txtButton = buttonByText(container, "Télécharger le TXT");
    const jsonButton = buttonByText(container, "Télécharger le JSON");
    const csvButton = buttonByText(container, "Télécharger le CSV");
    const printButton = buttonByText(container, "Imprimer le rapport");
    expect(copyButton.disabled).toBe(true);
    expect(txtButton.disabled).toBe(true);
    expect(jsonButton.disabled).toBe(true);
    expect(csvButton.disabled).toBe(true);
    expect(printButton.disabled).toBe(true);
    expect(container.textContent).toContain("masquage est best-effort");
    expect(container.textContent).toContain("supprimé manuellement");

    act(() => reviewCheckbox(container).click());
    expect(copyButton.disabled).toBe(false);
    const downloadedNames: string[] = [];
    const anchorClick = vi
      .spyOn(HTMLAnchorElement.prototype, "click")
      .mockImplementation(function (this: HTMLAnchorElement) {
        downloadedNames.push(this.download);
      });

    await act(async () => copyButton.click());
    expect(copyTextToClipboard).toHaveBeenCalledTimes(1);
    const copiedReport = vi.mocked(copyTextToClipboard).mock.calls[0]?.[0];
    expect(copiedReport).not.toContain(secret);
    expect(copiedReport).toContain("MASQUÉ");

    act(() => txtButton.click());
    act(() => jsonButton.click());
    act(() => csvButton.click());
    expect(anchorClick).toHaveBeenCalledTimes(3);
    expect(downloadedNames).toEqual([
      "dossier-audit-reprise-2026-07-27.txt",
      "dossier-audit-reprise-2026-07-27.json",
      "dossier-audit-reprise-2026-07-27.csv",
    ]);
    expect(URL.createObjectURL).toHaveBeenCalledTimes(3);
    expect(URL.revokeObjectURL).toHaveBeenCalledTimes(3);

    act(() => printButton.click());
    expect(window.print).toHaveBeenCalledTimes(1);
  });

  it("confirme l’effacement dans un dialogue accessible et restitue le focus", () => {
    act(() => buttonByText(container, "Charger l’exemple fictif").click());
    const trigger = buttonByText(container, "Effacer le dossier");

    act(() => trigger.click());
    const dialog = document.body.querySelector('[role="alertdialog"]');
    const confirm = buttonByText(document.body, "Oui, effacer");
    expect(dialog).toBeInstanceOf(HTMLDivElement);
    expect(dialog?.getAttribute("aria-modal")).toBe("true");
    expect(document.activeElement).toBe(confirm);
    expect(container.hasAttribute("inert")).toBe(true);
    expect(container.getAttribute("aria-hidden")).toBe("true");

    act(() => {
      confirm.dispatchEvent(
        new KeyboardEvent("keydown", {
          key: "Escape",
          bubbles: true,
        }),
      );
    });
    expect(document.body.querySelector('[role="alertdialog"]')).toBeNull();
    expect(document.activeElement).toBe(trigger);
    expect(container.hasAttribute("inert")).toBe(false);

    act(() => trigger.click());
    act(() => buttonByText(document.body, "Oui, effacer").click());
    expect(document.activeElement).toBe(trigger);
    expect(container.textContent).toContain("Dossier incomplet");
    expect(container.textContent).not.toContain("Boutique Alpine fictive");
  });

  it("protège aussi le dossier contre une navigation interne Next", () => {
    act(() => buttonByText(container, "Charger l’exemple fictif").click());
    const link = document.createElement("a");
    link.href =
      "/demarrer-un-projet?service=audit&source=guide-audit-reprise-site";
    link.textContent = "Demander un cadrage de reprise";
    link.tabIndex = 0;
    let replayedClicks = 0;
    link.addEventListener("click", (event) => {
      replayedClicks += 1;
      event.preventDefault();
    });
    document.body.append(link);
    link.focus();

    act(() => link.click());
    const dialog = document.body.querySelector(
      '[data-website-takeover-navigation-portal="true"] [role="alertdialog"]',
    );
    expect(dialog?.textContent).toContain(
      "Quitter cette page sans exporter le dossier",
    );
    expect(document.activeElement).toBe(
      buttonByText(document.body, "Rester et exporter"),
    );
    expect(replayedClicks).toBe(0);

    act(() => buttonByText(document.body, "Rester et exporter").click());
    expect(
      document.body.querySelector(
        '[data-website-takeover-navigation-portal="true"]',
      ),
    ).toBeNull();
    expect(document.activeElement).toBe(link);

    act(() => link.click());
    act(() => buttonByText(document.body, "Quitter sans exporter").click());
    expect(replayedClicks).toBe(1);
    expect(
      document.body.querySelector(
        '[data-website-takeover-navigation-portal="true"]',
      ),
    ).toBeNull();
    link.remove();
  });

  it("protège le dossier contre le bouton retour d’une navigation SPA", () => {
    const forwardSpy = vi
      .spyOn(History.prototype, "forward")
      .mockImplementation(() => {});
    const goSpy = vi.spyOn(History.prototype, "go").mockImplementation(() => {});
    act(() => buttonByText(container, "Charger l’exemple fictif").click());
    const guardState = window.history.state;
    expect(
      Object.keys(guardState ?? {}).some((key) =>
        key.includes("websiteTakeoverAuditGuard"),
      ),
    ).toBe(true);

    act(() => {
      window.dispatchEvent(new PopStateEvent("popstate", { state: null }));
    });
    expect(forwardSpy).toHaveBeenCalledTimes(1);
    expect(
      document.body.querySelector(
        '[data-website-takeover-navigation-portal="true"]',
      ),
    ).toBeNull();

    act(() => {
      window.dispatchEvent(
        new PopStateEvent("popstate", { state: guardState }),
      );
    });
    expect(
      document.body.querySelector(
        '[data-website-takeover-navigation-portal="true"]',
      )?.textContent,
    ).toContain("Quitter cette page sans exporter le dossier");

    act(() => buttonByText(document.body, "Rester et exporter").click());
    expect(
      document.body.querySelector(
        '[data-website-takeover-navigation-portal="true"]',
      ),
    ).toBeNull();

    act(() => {
      window.dispatchEvent(new PopStateEvent("popstate", { state: null }));
      window.dispatchEvent(
        new PopStateEvent("popstate", { state: guardState }),
      );
    });
    act(() => buttonByText(document.body, "Quitter sans exporter").click());
    expect(goSpy).toHaveBeenCalledWith(-2);
  });

  it("ne déclenche aucune requête, aucun stockage et ne plante pas avec les dix-huit zones", () => {
    act(() => buttonByText(container, "Charger l’exemple fictif").click());
    const zones = [
      ...container.querySelectorAll<HTMLDetailsElement>(
        "[data-website-takeover-zone]",
      ),
    ];
    expect(zones).toHaveLength(18);
    act(() => {
      for (const zone of zones) zone.querySelector("summary")?.click();
    });
    expect(zones.every((zone) => zone.open)).toBe(true);
    expect(fetchSpy).not.toHaveBeenCalled();
    expect(storageGetSpy).not.toHaveBeenCalled();
    expect(storageSetSpy).not.toHaveBeenCalled();
  });

  it("n’expose aucune violation d’accessibilité critique ou sérieuse", async () => {
    act(() => buttonByText(container, "Charger l’exemple fictif").click());
    const results = await axe.run(container, {
      rules: {
        region: { enabled: false },
      },
    });

    expect(
      results.violations.filter((violation) =>
        ["critical", "serious"].includes(violation.impact ?? ""),
      ),
    ).toEqual([]);
  });
});
