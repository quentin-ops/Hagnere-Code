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
import {
  WEBSITE_MAINTENANCE_GATE_IDS,
  WEBSITE_MAINTENANCE_TCO_FIELDS,
} from "@/lib/website-maintenance-decision";
import { WebsiteMaintenanceDecisionDossier } from "./WebsiteMaintenanceDecisionDossier";

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
  return gateEvidenceControl<HTMLTextAreaElement>(
    select,
    "Résultat observé",
    "textarea",
  );
}

function gateEvidenceControl<T extends HTMLElement>(
  select: HTMLSelectElement,
  labelText: string,
  selector: string,
): T {
  const card = select.closest("div");
  const label = [...(card?.querySelectorAll("label") ?? [])].find((candidate) =>
    candidate.textContent?.includes(labelText),
  );
  const control = label?.querySelector(selector);
  if (!control) {
    throw new Error(`Champ de preuve introuvable : ${labelText}`);
  }
  return control as T;
}

function fillStructuredEvidence(
  select: HTMLSelectElement,
  status: "pass" | "fail" = "pass",
) {
  changeControl(select, status);
  changeControl(
    gateEvidenceControl<HTMLInputElement>(
      select,
      "Date de la preuve",
      "input",
    ),
    "2026-07-24",
  );
  changeControl(
    gateEvidenceControl<HTMLInputElement>(
      select,
      "Artefact ou référence",
      "input",
    ),
    "PV-2026-07",
  );
  changeControl(
    gateEvidenceControl<HTMLInputElement>(
      select,
      "Périmètre vérifié",
      "input",
    ),
    "Fichiers, base et parcours métier",
  );
  changeControl(
    evidenceForGate(select),
    status === "pass"
      ? "Contrôle réussi et résultat conforme"
      : "Contrôle échoué, résultat non conforme",
  );
  changeControl(
    gateEvidenceControl<HTMLInputElement>(
      select,
      "Responsable",
      "input",
    ),
    "Responsable exploitation",
  );
}

function fillCommonNeed(container: HTMLElement) {
  const values: Array<[string, string]> = [
    ["Classe et criticité du site", "Boutique centrale"],
    [
      "Fonctions métier et dépendances",
      "Catalogue, panier, paiement et e-mails",
    ],
    ["Fenêtre réellement couverte", "Lundi-samedi, 8 h-20 h, Paris"],
    [
      "Perte de données et durée de reprise admises",
      "RPO 15 minutes, RTO 2 heures",
    ],
    [
      "Dernier point réellement restauré",
      "Restauration complète du 24 juillet, 1 h 24",
    ],
    [
      "Responsable des mesures et décisions",
      "Responsable e-commerce, suppléant DAF",
    ],
  ];
  for (const [label, value] of values) {
    changeControl(
      labelControl<HTMLTextAreaElement>(container, label, "textarea"),
      value,
    );
  }
}

function fillActiveOfferDescriptors(container: HTMLElement) {
  const values: Array<[string, string]> = [
    ["Mode de prise en charge", "Agence avec relais nommé"],
    [
      "Périmètre inclus",
      "Actifs, parcours, sauvegarde, restauration et sortie",
    ],
    ["Exclusions et dépassements", "Évolutions hors capacité et achats tiers"],
    [
      "Risque résiduel et payeur",
      "Entreprise au-delà du plafond contractuel documenté",
    ],
  ];
  for (const [label, value] of values) {
    changeControl(
      labelControl<HTMLTextAreaElement>(container, label, "textarea"),
      value,
    );
  }
}

function fillActiveOfferTco(container: HTMLElement, value = "10") {
  for (const field of WEBSITE_MAINTENANCE_TCO_FIELDS) {
    changeControl(
      labelControl<HTMLInputElement>(container, field.label, "input"),
      value,
    );
  }
}

function fillActiveOfferGates(container: HTMLElement) {
  for (const select of container.querySelectorAll("select")) {
    fillStructuredEvidence(select);
  }
}

function normalizedText(container: HTMLElement): string {
  return (container.textContent ?? "").replace(/[\s\u202f\u00a0]+/g, " ");
}

describe("WebsiteMaintenanceDecisionDossier", () => {
  let container: HTMLDivElement;
  let root: Root;

  beforeAll(() => {
    (
      globalThis as typeof globalThis & { IS_REACT_ACT_ENVIRONMENT: boolean }
    ).IS_REACT_ACT_ENVIRONMENT = true;
  });

  beforeEach(async () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 6, 25, 12, 0, 0));
    vi.clearAllMocks();
    container = document.createElement("div");
    document.body.append(container);
    root = createRoot(container);
    await act(async () => {
      root.render(<WebsiteMaintenanceDecisionDossier />);
      await Promise.resolve();
    });
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it("keeps two independent offer dossiers", () => {
    const tabs = [
      ...container.querySelectorAll("button[aria-pressed]"),
    ] as HTMLButtonElement[];
    expect(tabs).toHaveLength(2);

    const name = labelControl<HTMLInputElement>(
      container,
      "Nom de l’offre",
      "input",
    );
    changeControl(name, "Agence Alpha");
    expect(tabs[0].textContent).toContain("Agence Alpha");

    act(() => tabs[1].click());
    expect(
      labelControl<HTMLInputElement>(container, "Nom de l’offre", "input")
        .value,
    ).toBe("Offre B");

    act(() => tabs[0].click());
    expect(
      labelControl<HTMLInputElement>(container, "Nom de l’offre", "input")
        .value,
    ).toBe("Agence Alpha");
  });

  it("requires all five evidence elements before a fail eliminates", () => {
    expect(container.querySelectorAll("select")).toHaveLength(
      WEBSITE_MAINTENANCE_GATE_IDS.length,
    );
    expect(container.textContent).toContain("Offre non qualifiée");

    const firstStatus = container.querySelector("select") as HTMLSelectElement;
    changeControl(firstStatus, "fail");
    expect(container.textContent).toContain("Offre non qualifiée");
    expect(firstStatus.closest("label")?.textContent).toContain(
      "État effectif : ND",
    );

    changeControl(evidenceForGate(firstStatus), "x");
    expect(container.textContent).toContain("Offre non qualifiée");
    expect(firstStatus.closest("label")?.textContent).toContain(
      "État effectif : ND",
    );

    fillStructuredEvidence(firstStatus, "fail");
    expect(container.textContent).toContain("Offre éliminée");
    expect(firstStatus.closest("label")?.textContent).toContain(
      "État effectif : FAIL démontré",
    );

    changeControl(
      gateEvidenceControl<HTMLInputElement>(
        firstStatus,
        "Artefact ou référence",
        "input",
      ),
      "ND",
    );
    expect(container.textContent).toContain("Offre non qualifiée");
    expect(firstStatus.closest("label")?.textContent).toContain(
      "État effectif : ND",
    );
  });

  it("does not present a calculable offer as green or comparable while common and offer fields are absent", () => {
    fillActiveOfferGates(container);
    fillActiveOfferTco(container);

    expect(container.textContent).toContain("Offre non qualifiée");
    expect(container.textContent).not.toContain("Offre qualifiée et comparable");
    expect(container.textContent).toContain("Comparaison bloquée");
    expect(container.textContent).not.toContain("vous pouvez comparer");
    expect(normalizedText(container)).toContain(
      "Sous-total non comparable · 100 € HT",
    );
  });

  it("does not accept literal ND as a completed common or offer field", () => {
    for (const label of [
      "Classe et criticité du site",
      "Fonctions métier et dépendances",
      "Fenêtre réellement couverte",
      "Perte de données et durée de reprise admises",
      "Dernier point réellement restauré",
      "Responsable des mesures et décisions",
      "Mode de prise en charge",
      "Périmètre inclus",
      "Exclusions et dépassements",
      "Risque résiduel et payeur",
    ]) {
      changeControl(
        labelControl<HTMLTextAreaElement>(container, label, "textarea"),
        " ND ",
      );
    }
    fillActiveOfferGates(container);
    fillActiveOfferTco(container, "0");

    expect(container.textContent).toContain("Offre non qualifiée");
    expect(container.textContent).not.toContain("Offre qualifiée et comparable");
    expect(container.textContent).toContain("Comparaison bloquée");
    expect(normalizedText(container)).toContain(
      "Sous-total non comparable · 0 € HT",
    );
  });

  it("qualifies only after all common, offer, evidence and TCO fields are complete", () => {
    fillCommonNeed(container);
    fillActiveOfferDescriptors(container);
    fillActiveOfferGates(container);
    fillActiveOfferTco(container);

    expect(container.textContent).toContain("Offre qualifiée et comparable");
    expect(normalizedText(container)).toContain("100 € HT");
    expect(normalizedText(container)).not.toContain(
      "Sous-total non comparable · 100 € HT",
    );
  });

  it("blocks and localizes proof after evaluation or decision, then accepts the same day", async () => {
    fillCommonNeed(container);
    fillActiveOfferDescriptors(container);
    fillActiveOfferGates(container);
    fillActiveOfferTco(container);
    const decisionDate = labelControl<HTMLInputElement>(
      container,
      "Date de votre décision",
      "input",
    );
    changeControl(decisionDate, "2026-07-25");

    const firstStatus = container.querySelector("select") as HTMLSelectElement;
    const evidenceDate = gateEvidenceControl<HTMLInputElement>(
      firstStatus,
      "Date de la preuve",
      "input",
    );
    expect(evidenceDate.max).toBe("2026-07-25");
    changeControl(evidenceDate, "2026-07-26");

    const describedBy = evidenceDate.getAttribute("aria-describedby");
    expect(evidenceDate.getAttribute("aria-invalid")).toBe("true");
    expect(describedBy).toBeTruthy();
    expect(document.getElementById(describedBy!)?.getAttribute("role")).toBe(
      "alert",
    );
    expect(document.getElementById(describedBy!)?.textContent).toContain(
      "date d’évaluation (25/07/2026)",
    );
    expect(document.getElementById(describedBy!)?.textContent).toContain(
      "date de décision (25/07/2026)",
    );
    expect(firstStatus.closest("label")?.textContent).toContain(
      "État effectif : ND",
    );
    expect(container.textContent).toContain("Offre non qualifiée");
    expect(container.textContent).toContain("Comparaison bloquée");
    expect(normalizedText(container)).toContain("Sous-total non comparable");

    await act(async () => {
      buttonByText(container, "Copier le dossier").click();
    });
    const report = vi.mocked(copyTextToClipboard).mock.calls.at(-1)?.[0] ?? "";
    expect(report).toContain("Date d’évaluation du dossier : 2026-07-25");
    expect(report).toContain(
      "date de la preuve : ND (postérieure à la date d’évaluation 2026-07-25 ; postérieure à la date de décision 2026-07-25)",
    );
    expect(report).toContain("Verdict de comparabilité : NON QUALIFIÉE");
    expect(report).toContain("Sous-total non comparable à 12 mois");

    changeControl(evidenceDate, "2026-07-25");

    expect(evidenceDate.getAttribute("aria-invalid")).not.toBe("true");
    expect(evidenceDate.getAttribute("aria-describedby")).toBeNull();
    expect(firstStatus.closest("label")?.textContent).toContain(
      "État effectif : PASS démontré",
    );
    expect(container.textContent).toContain("Offre qualifiée et comparable");

    changeControl(decisionDate, "2026-07-23");
    expect(evidenceDate.max).toBe("2026-07-23");
    expect(evidenceDate.getAttribute("aria-invalid")).toBe("true");
    expect(
      document.getElementById(
        evidenceDate.getAttribute("aria-describedby") ?? "",
      )?.textContent,
    ).toContain("date de décision (23/07/2026)");

    changeControl(decisionDate, "2026-07-25");
    expect(evidenceDate.max).toBe("2026-07-25");
    expect(evidenceDate.getAttribute("aria-invalid")).not.toBe("true");
  });

  it("rejects a 2099 proof against the stable local evaluation date with no decision", () => {
    const firstStatus = container.querySelector("select") as HTMLSelectElement;
    fillStructuredEvidence(firstStatus);
    const evidenceDate = gateEvidenceControl<HTMLInputElement>(
      firstStatus,
      "Date de la preuve",
      "input",
    );

    expect(evidenceDate.max).toBe("2026-07-25");
    vi.setSystemTime(new Date(2026, 6, 26, 12, 0, 0));
    changeControl(
      labelControl<HTMLInputElement>(container, "Nom de l’offre", "input"),
      "Offre ouverte la veille",
    );
    expect(evidenceDate.max).toBe("2026-07-25");
    expect(container.textContent).toContain("25/07/2026");
    expect(container.textContent).not.toContain("26/07/2026");

    changeControl(evidenceDate, "2099-01-01");

    const describedBy = evidenceDate.getAttribute("aria-describedby");
    expect(evidenceDate.getAttribute("aria-invalid")).toBe("true");
    expect(document.getElementById(describedBy!)?.textContent).toContain(
      "date d’évaluation (25/07/2026)",
    );
    expect(document.getElementById(describedBy!)?.textContent).not.toContain(
      "date de décision",
    );
    expect(firstStatus.closest("label")?.textContent).toContain(
      "État effectif : ND",
    );
    expect(container.textContent).not.toContain("PASS démontré");
  });

  it("never lets completion of offer A fill or qualify offer B", () => {
    fillCommonNeed(container);
    fillActiveOfferDescriptors(container);
    fillActiveOfferGates(container);
    fillActiveOfferTco(container);

    const tabs = [
      ...container.querySelectorAll("button[aria-pressed]"),
    ] as HTMLButtonElement[];
    expect(tabs[0].textContent).toContain("Offre qualifiée et comparable");

    act(() => tabs[1].click());

    expect(container.textContent).toContain("Offre non qualifiée");
    expect(
      labelControl<HTMLTextAreaElement>(
        container,
        "Mode de prise en charge",
        "textarea",
      ).value,
    ).toBe("");
    expect(container.querySelector("select")?.value).toBe("unknown");
    expect(
      labelControl<HTMLInputElement>(
        container,
        "Remise à niveau et transition",
        "input",
      ).value,
    ).toBe("");

    fillActiveOfferDescriptors(container);
    fillActiveOfferGates(container);
    fillActiveOfferTco(container);

    const refreshedTabs = [
      ...container.querySelectorAll("button[aria-pressed]"),
    ] as HTMLButtonElement[];
    expect(refreshedTabs[0].textContent).toContain(
      "Offre qualifiée et comparable",
    );
    expect(refreshedTabs[1].textContent).toContain(
      "Offre qualifiée et comparable",
    );
    expect(container.textContent).toContain("vous pouvez comparer");

    const offerBFirstStatus = container.querySelector(
      "select",
    ) as HTMLSelectElement;
    changeControl(
      gateEvidenceControl<HTMLInputElement>(
        offerBFirstStatus,
        "Date de la preuve",
        "input",
      ),
      "2026-07-26",
    );

    const temporalTabs = [
      ...container.querySelectorAll("button[aria-pressed]"),
    ] as HTMLButtonElement[];
    expect(temporalTabs[0].textContent).toContain(
      "Offre qualifiée et comparable",
    );
    expect(temporalTabs[1].textContent).toContain("Offre non qualifiée");
    expect(container.textContent).toContain("Comparaison bloquée");
  });

  it("calculates the central incident and rejects invalid values", () => {
    const values: Array<[string, string]> = [
      ["Durée d’indisponibilité", "6"],
      ["Marge non reportable", "180"],
      ["Remboursements, concessions ou pénalités", "0"],
      ["Reprise externe, analyse et reconstruction", "900"],
      ["Communication ou notification", "250"],
      ["Personnes internes mobilisées", "2"],
      ["Heures internes par personne", "4"],
      ["Coût chargé du temps interne", "35"],
      ["Part du temps réellement réaffectée", "50"],
      ["Compensation récupérable", "0"],
    ];

    for (const [label, value] of values) {
      changeControl(
        labelControl<HTMLInputElement>(container, label, "input"),
        value,
      );
    }
    expect(normalizedText(container)).toContain("2 370 €");
    expect(normalizedText(container)).toContain("capacité interne 140 €");

    const duration = labelControl<HTMLInputElement>(
      container,
      "Durée d’indisponibilité",
      "input",
    );
    changeControl(duration, "-1");
    expect(duration.value).toBe("");
    expect(duration.getAttribute("aria-invalid")).toBe("true");
    expect(container.querySelector('[role="alert"]')?.textContent).toContain(
      "nombre fini supérieur ou égal à zéro",
    );

    changeControl(duration, "1e309");
    expect(duration.getAttribute("aria-invalid")).toBe("true");
    expect(
      document.getElementById(
        duration.getAttribute("aria-describedby") ?? "missing",
      )?.textContent,
    ).toContain("nombre fini supérieur ou égal à zéro");

    const share = labelControl<HTMLInputElement>(
      container,
      "Part du temps réellement réaffectée",
      "input",
    );
    changeControl(share, "101");
    expect(share.value).toBe("");
    expect(share.getAttribute("aria-invalid")).toBe("true");
    expect(normalizedText(container)).not.toContain("NaN");
    expect(normalizedText(container)).not.toContain("Infinity");
  });

  it("keeps initial empty incident fields neutral", () => {
    for (const field of [
      "Durée d’indisponibilité",
      "Marge non reportable",
      "Remboursements, concessions ou pénalités",
      "Reprise externe, analyse et reconstruction",
      "Communication ou notification",
      "Personnes internes mobilisées",
      "Heures internes par personne",
      "Coût chargé du temps interne",
      "Part du temps réellement réaffectée",
      "Compensation récupérable",
    ]) {
      const input = labelControl<HTMLInputElement>(container, field, "input");
      expect(input.getAttribute("aria-invalid")).not.toBe("true");
      expect(input.getAttribute("aria-describedby")).toBeNull();
    }
  });

  it("localizes an excessive recoverable compensation and clears it at the gross cap", () => {
    const values: Array<[string, string]> = [
      ["Durée d’indisponibilité", "1"],
      ["Marge non reportable", "100"],
      ["Remboursements, concessions ou pénalités", "0"],
      ["Reprise externe, analyse et reconstruction", "0"],
      ["Communication ou notification", "0"],
      ["Personnes internes mobilisées", "0"],
      ["Heures internes par personne", "0"],
      ["Coût chargé du temps interne", "0"],
      ["Part du temps réellement réaffectée", "0"],
      ["Compensation récupérable", "101"],
    ];
    for (const [label, value] of values) {
      changeControl(
        labelControl<HTMLInputElement>(container, label, "input"),
        value,
      );
    }

    const compensation = labelControl<HTMLInputElement>(
      container,
      "Compensation récupérable",
      "input",
    );
    const describedBy = compensation.getAttribute("aria-describedby");
    expect(compensation.value).toBe("101");
    expect(compensation.getAttribute("aria-invalid")).toBe("true");
    expect(describedBy).toBeTruthy();
    expect(document.getElementById(describedBy!)?.getAttribute("role")).toBe(
      "alert",
    );
    expect(document.getElementById(describedBy!)?.textContent).toContain(
      "ne peut pas dépasser le coût brut de l’incident, soit 100 €",
    );
    expect(normalizedText(container)).toContain(
      "Corrigez la compensation récupérable : elle dépasse le coût brut de 100 €",
    );

    changeControl(compensation, "100");

    expect(compensation.getAttribute("aria-invalid")).not.toBe("true");
    expect(compensation.getAttribute("aria-describedby")).toBeNull();
    expect(normalizedText(container)).not.toContain(
      "Corrigez la compensation récupérable",
    );
    expect(normalizedText(container)).toContain(
      "0 € · marge perdue 100 € · coûts directs 0 €",
    );

    changeControl(
      labelControl<HTMLInputElement>(
        container,
        "Marge non reportable",
        "input",
      ),
      "100.49",
    );
    changeControl(compensation, "100.5");

    const decimalDescription = compensation.getAttribute("aria-describedby");
    expect(compensation.getAttribute("aria-invalid")).toBe("true");
    expect(document.getElementById(decimalDescription!)?.textContent).toContain(
      "100,49 €",
    );
    expect(normalizedText(container)).toContain(
      "elle dépasse le coût brut de 100,49 €",
    );
  });

  it("keeps TCO at ND, then calculates 12 and 36 months without adding the incident", () => {
    const values: Array<[string, string]> = [
      ["Remise à niveau et transition", "2500"],
      ["Préventif et adaptations annuels", "5600"],
      ["Capacité corrective annuelle", "5600"],
      ["Opérations de service annuelles", "5600"],
      ["Contenu et assurance annuels", "0"],
      ["Évolutions planifiées annuelles", "6500"],
      ["Temps interne et relais annuels", "300"],
      ["Hébergement, licences et fin de support", "3000"],
      ["Réserve d’incident résiduel annuelle", "0"],
    ];

    for (const [label, value] of values) {
      changeControl(
        labelControl<HTMLInputElement>(container, label, "input"),
        value,
      );
    }
    expect(normalizedText(container)).toContain("ND · 1 poste(s) à renseigner");

    changeControl(
      labelControl<HTMLInputElement>(
        container,
        "Sortie et reprise à l’horizon",
        "input",
      ),
      "1800",
    );
    expect(normalizedText(container)).toContain(
      "Sous-total non comparable · 30 900 € HT",
    );
    expect(normalizedText(container)).toContain(
      "Sous-total non comparable · 84 100 € HT",
    );
    expect(normalizedText(container)).not.toContain("33 270 € HT");
  });

  it("protects reset with an inline accessible confirmation", () => {
    const siteClass = labelControl<HTMLTextAreaElement>(
      container,
      "Classe et criticité du site",
      "textarea",
    );
    changeControl(siteClass, "Boutique centrale");

    act(() => buttonByText(container, "Réinitialiser").click());
    expect(container.querySelector('[role="alert"]')?.textContent).toContain(
      "Cette action ne peut pas être annulée",
    );

    act(() => buttonByText(container, "Annuler et conserver").click());
    expect(siteClass.value).toBe("Boutique centrale");

    act(() => buttonByText(container, "Réinitialiser").click());
    act(() => buttonByText(container, "Effacer définitivement").click());
    expect(
      labelControl<HTMLTextAreaElement>(
        container,
        "Classe et criticité du site",
        "textarea",
      ).value,
    ).toBe("");
  });

  it("prints only its scoped report and excludes controls from reading time", () => {
    const print = vi.fn();
    Object.defineProperty(window, "print", {
      configurable: true,
      value: print,
    });

    act(() => buttonByText(container, "Imprimer le dossier").click());

    const style = container.querySelector("style")?.textContent ?? "";
    expect(print).toHaveBeenCalledOnce();
    expect(style).toContain(
      "body *:not(#website-maintenance-decision-dossier)",
    );
    expect(style).toContain(
      "#website-maintenance-decision-dossier > :not(.website-maintenance-print-report)",
    );
    expect(style).toContain("#website-maintenance-decision-dossier button");
    expect(
      container
        .querySelector("#website-maintenance-decision-dossier")
        ?.getAttribute("data-read-time-exclude"),
    ).toBe("true");
    expect(
      container
        .querySelector(".website-maintenance-print-report")
        ?.getAttribute("data-read-time-exclude"),
    ).toBe("true");
  });

  it("copies a complete neutral report and offers a fallback on failure", async () => {
    await act(async () => {
      buttonByText(container, "Copier le dossier").click();
    });

    expect(copyTextToClipboard).toHaveBeenCalledOnce();
    const copiedReport = vi.mocked(copyTextToClipboard).mock.calls[0][0];
    expect(copiedReport).toContain("DOSSIER DE MAINTENANCE PROUVÉE");
    expect(copiedReport).toContain(
      "Date d’évaluation du dossier : 2026-07-25",
    );
    expect(container.textContent).toContain(
      "Date d’évaluation figée à l’ouverture",
    );
    expect(container.textContent).toContain("25/07/2026");
    expect(copiedReport).toContain("COÛT D’UN INCIDENT — HYPOTHÈSES COMMUNES");
    expect(copiedReport.match(/HYPOTHÈSES TCO/g)).toHaveLength(2);
    for (const field of WEBSITE_MAINTENANCE_TCO_FIELDS) {
      expect(copiedReport.match(new RegExp(field.label, "g"))).toHaveLength(2);
    }
    expect(copiedReport).toContain("aucun gagnant automatique");
    expect(copiedReport).not.toContain("undefined");
    expect(copiedReport).not.toContain("NaN");
    expect(copiedReport).not.toContain("Infinity");
    expect(container.textContent).toContain("Dossier copié");

    vi.mocked(copyTextToClipboard).mockResolvedValueOnce(false);
    await act(async () => {
      buttonByText(container, "Copier le dossier").click();
    });
    expect(container.textContent).toContain(
      "Utilisez le bouton « Imprimer le dossier »",
    );
  });

  it("keeps every form control programmatically labelled", () => {
    for (const control of container.querySelectorAll(
      "input, textarea, select",
    )) {
      expect(control.closest("label")).not.toBeNull();
    }
  });
});
