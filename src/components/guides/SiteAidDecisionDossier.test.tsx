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
import {
  SITE_AID_DRAFT_MAX_BYTES,
  SITE_AID_DRAFT_MAX_APPLICATION_DOCUMENTS,
  SITE_AID_DRAFT_R23_VERSION,
  SITE_AID_DRAFT_R26_VERSION,
  SITE_AID_DRAFT_VERSION,
  createEmptySiteAidApplicationDocument,
  createEmptySiteAidApplicationPreparation,
  createSiteAidDraftJson,
} from "@/lib/site-aid-draft";
import { createEmptySiteAidDecisionInput } from "@/lib/site-aid-decision";
import {
  SITE_AID_PREDIAGNOSIS_DEFINITIONS,
  SITE_AID_PREDIAGNOSIS_TRANSFER_EVENT,
  createSiteAidPreDiagnosisTransfer,
} from "@/lib/site-aid-prediagnosis";
import {
  SiteAidDecisionDossier,
  countSiteAidApplicationWords,
} from "./SiteAidDecisionDossier";
import { SiteAidPreDiagnosis } from "./SiteAidPreDiagnosis";

function changeControl(
  control: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
  value: string,
) {
  const renderedControl = control.isConnected
    ? control
    : document.getElementById(control.id);
  if (
    !(renderedControl instanceof HTMLInputElement) &&
    !(renderedControl instanceof HTMLTextAreaElement) &&
    !(renderedControl instanceof HTMLSelectElement)
  ) {
    throw new Error(
      `Contrôle démonté sans remplaçant actif : ${control.id || control.name}`,
    );
  }
  act(() => {
    const setNativeValue = (
      target: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
    ) => {
      const prototype =
        target instanceof HTMLInputElement
          ? HTMLInputElement.prototype
          : target instanceof HTMLTextAreaElement
            ? HTMLTextAreaElement.prototype
            : HTMLSelectElement.prototype;
      Object.getOwnPropertyDescriptor(prototype, "value")?.set?.call(
        target,
        value,
      );
    };
    if (renderedControl !== control) setNativeValue(control);
    setNativeValue(renderedControl);
    renderedControl.dispatchEvent(new Event("input", { bubbles: true }));
    renderedControl.dispatchEvent(new Event("change", { bubbles: true }));
  });
}

function buttonByText(container: HTMLElement, text: string): HTMLButtonElement {
  const button = [...container.querySelectorAll("button")].find((candidate) =>
    candidate.textContent?.includes(text),
  );
  if (!button) throw new Error(`Bouton introuvable : ${text}`);
  return button;
}

type WizardStepId =
  | "profile"
  | "quote"
  | "eligibility"
  | "legal"
  | "payment"
  | "treasury"
  | "history"
  | "application"
  | "review";

const WIZARD_STEP_IDS: WizardStepId[] = [
  "profile",
  "quote",
  "eligibility",
  "legal",
  "payment",
  "treasury",
  "history",
  "application",
  "review",
];

function goToWizardStep(
  container: HTMLElement,
  requestedStepId: WizardStepId | "proof" | "cash",
) {
  const stepId =
    requestedStepId === "proof"
      ? "eligibility"
      : requestedStepId === "cash"
        ? "history"
        : requestedStepId;
  const trigger = container.querySelector<HTMLButtonElement>(
    `nav[aria-label="Progression du dossier"] button[data-site-aid-wizard-step="${stepId}"]`,
  );
  if (!trigger) throw new Error(`Étape introuvable : ${stepId}`);
  if (trigger.getAttribute("aria-current") !== "step") {
    act(() => trigger.click());
  }
  expect(
    container.querySelectorAll("[data-site-aid-wizard-panel]"),
  ).toHaveLength(1);
  expect(
    container
      .querySelector("[data-site-aid-wizard-panel]")
      ?.getAttribute("data-site-aid-wizard-panel"),
  ).toBe(stepId);
  expect(trigger.getAttribute("aria-current")).toBe("step");
}

function analyzeDossier(container: HTMLElement) {
  goToWizardStep(container, "review");
  act(() => buttonByText(container, "Analyser le dossier").click());
}

function reanalyzeExpiredDossier(container: HTMLElement) {
  if (
    container.querySelector("[data-site-aid-analysis-state='stale']") !== null
  ) {
    analyzeDossier(container);
  }
}

async function chooseDraftFile(
  container: HTMLElement,
  contents: string,
  name = "brouillon-aide-site.json",
) {
  const input = container.querySelector<HTMLInputElement>(
    'input[type="file"][accept*="json"]',
  );
  if (!input) throw new Error("Sélecteur de brouillon JSON introuvable");
  const file = new File([contents], name, { type: "application/json" });
  Object.defineProperty(file, "text", {
    configurable: true,
    value: async () => contents,
  });
  Object.defineProperty(input, "files", {
    configurable: true,
    value: [file],
  });
  await act(async () => {
    input.dispatchEvent(new Event("change", { bubbles: true }));
    await Promise.resolve();
  });
}

function labelControl<T extends HTMLElement>(
  container: HTMLElement,
  labelText: string,
  selector: string,
): T {
  const findControl = () => {
    const label = [...container.querySelectorAll("label")].find((candidate) =>
      candidate.textContent?.includes(labelText),
    );
    return label?.querySelector(selector);
  };
  const mountedControl = findControl();
  if (mountedControl) return mountedControl as T;
  goToWizardStep(container, wizardStepForLabelText(labelText));
  const routedControl = findControl();
  if (routedControl) return routedControl as T;
  throw new Error(`Contrôle introuvable : ${labelText}`);
}

function normalizedText(container: HTMLElement): string {
  return (container.textContent ?? "").replace(/[\s\u202f\u00a0]+/g, " ");
}

function draftDecisionInput() {
  const input = createEmptySiteAidDecisionInput();
  input.quoteLines = [
    {
      label: "",
      amountExVat: undefined,
      vatRatePercent: undefined,
      deductibleVatFraction: "unknown",
      eligibility: "unknown",
      evidence: "",
    },
  ];
  return input;
}

function resultCard(container: HTMLElement, label: string): HTMLElement {
  reanalyzeExpiredDossier(container);
  goToWizardStep(container, "review");
  const term = [...container.querySelectorAll("dt")].find((candidate) =>
    candidate.textContent?.includes(label),
  );
  if (!(term?.parentElement instanceof HTMLElement)) {
    throw new Error(`Résultat introuvable : ${label}`);
  }
  return term.parentElement;
}

function issueLink(container: HTMLElement, text: string): HTMLAnchorElement {
  reanalyzeExpiredDossier(container);
  goToWizardStep(container, "review");
  const link = [
    ...container.querySelectorAll<HTMLAnchorElement>(
      "#site-aid-error-summary a",
    ),
  ].find((candidate) => candidate.textContent?.includes(text));
  if (!link) throw new Error(`Lien d’erreur introuvable : ${text}`);
  return link;
}

function controlById<T extends HTMLElement>(
  container: HTMLElement,
  id: string,
): T {
  const mountedControl = container.querySelector(`#${id}`);
  if (mountedControl instanceof HTMLElement) return mountedControl as T;
  const headingMatch = id.match(/^site-aid-wizard-step-(.+)-title$/);
  const stepId = headingMatch?.[1] as WizardStepId | undefined;
  goToWizardStep(
    container,
    stepId && WIZARD_STEP_IDS.includes(stepId)
      ? stepId
      : id === "site-aid-error-summary" ||
          id === "site-aid-analyze-button" ||
          id === "site-aid-result-title"
        ? "review"
        : wizardStepForControlId(id.replace(/-error-message$/, "")),
  );
  const routedControl = container.querySelector(`#${id}`);
  if (routedControl instanceof HTMLElement) return routedControl as T;
  throw new Error(`Contrôle introuvable : ${id}`);
}

function wizardStepForLabelText(
  labelText: string,
): Exclude<WizardStepId, "review"> {
  const normalized = labelText.toLocaleLowerCase("fr-FR");
  if (
    [
      "mode d’attribution",
      "canal officiel",
      "objectifs publiés",
      "critères de sélection",
      "date limite",
      "temps de préparation",
      "relecture finale",
      "validation finale",
      "nom de la pièce",
      "statut de préparation",
      "format attendu",
      "signature",
      "échéance de préparation",
    ].some((fragment) => normalized.includes(fragment))
  ) {
    return "application";
  }
  if (
    [
      "profil",
      "territoire",
      "activité et clientèle",
      "âge de l’entreprise",
      "effectif",
      "chiffre d’affaires",
      "forme ou statut",
      "problème métier",
      "indicateur de réussite",
      "responsable de la décision",
      "organisme officiel",
      "date de consultation",
      "url officielle",
      "échéances",
      "pièce applicable",
      "obligations après attribution",
    ].some((fragment) => normalized.includes(fragment))
  ) {
    return "profile";
  }
  if (
    [
      "bénéficiaire admis",
      "activité admise",
      "ordre des actes",
      "contrôle écrit du cumul",
      "guichet",
      "assiette",
      "taux de l’aide",
      "plafond de l’aide",
    ].some((fragment) => normalized.includes(fragment))
  ) {
    return "eligibility";
  }
  if (
    [
      "état financier",
      "notification",
      "contribution financière approuvée",
      "contribution effectivement payée",
      "mode et destinataire",
      "part de l’aide",
      "part versée",
      "facture finale",
      "paiement fournisseur",
      "versement ou paiement direct",
      "reste payé",
    ].some((fragment) => normalized.includes(fragment))
  ) {
    return "payment";
  }
  if (
    [
      "trésorerie",
      "mois d’attente",
      "marge contributive",
      "frais propres",
    ].some((fragment) => normalized.includes(fragment))
  ) {
    return "treasury";
  }
  if (
    normalized.includes("aide antérieure") ||
    normalized.includes("dépenses concernées") ||
    normalized.includes("même assiette")
  ) {
    return "history";
  }
  return "legal";
}

function wizardStepForControlId(id: string): Exclude<WizardStepId, "review"> {
  if (id.startsWith("site-aid-application-")) return "application";
  if (id.startsWith("site-aid-quote-line-")) return "quote";
  if (
    id.startsWith("site-aid-register-entry-") ||
    id.startsWith("site-aid-profile-corporate-event-")
  ) {
    return "history";
  }
  if (
    [
      "site-aid-available-cash",
      "site-aid-wait-months",
      "site-aid-monthly-delay-margin",
      "site-aid-specific-fees",
    ].includes(id)
  ) {
    return "treasury";
  }
  if (
    id.startsWith("site-aid-profile-") ||
    id.startsWith("site-aid-authority-")
  ) {
    return "profile";
  }
  if (
    id.startsWith("site-aid-gate-") ||
    [
      "site-aid-basis-scope",
      "site-aid-rate-percent",
      "site-aid-cap-amount",
    ].includes(id)
  ) {
    return "eligibility";
  }
  if (
    [
      "site-aid-stage",
      "site-aid-notification-evidence",
      "site-aid-approved-contribution",
      "site-aid-actual-contribution",
      "site-aid-payment-mode",
      "site-aid-prepayment-percent",
      "site-aid-final-invoice-match",
      "site-aid-final-invoice-date",
      "site-aid-final-invoice-reference",
      "site-aid-supplier-payment-reference",
      "site-aid-receipt-date",
      "site-aid-receipt-reference",
    ].includes(id)
  ) {
    return "payment";
  }
  return "legal";
}

function groupByRoleAndName(
  container: HTMLElement,
  accessibleName: string,
): HTMLElement {
  const findGroup = () =>
    [...container.querySelectorAll<HTMLElement>('[role="group"]')].find(
      (candidate) => {
        const labelledBy = candidate.getAttribute("aria-labelledby");
        if (!labelledBy) return false;
        return labelledBy
          .split(/\s+/)
          .map((id) => document.getElementById(id)?.textContent?.trim() ?? "")
          .join(" ")
          .includes(accessibleName);
      },
    );
  const mountedGroup = findGroup();
  if (mountedGroup) return mountedGroup;
  goToWizardStep(
    container,
    accessibleName.includes("Aide antérieure")
      ? "history"
      : accessibleName.includes("Obligations après")
        ? "profile"
        : accessibleName.includes("Registre central")
          ? "legal"
          : "eligibility",
  );
  const routedGroup = findGroup();
  if (routedGroup) return routedGroup;
  throw new Error(`Groupe role/name introuvable : ${accessibleName}`);
}

function controlByAccessibleName<
  T extends HTMLInputElement | HTMLSelectElement,
>(container: HTMLElement, accessibleName: string): T {
  const findMatches = () => {
    const matches = [
      ...container.querySelectorAll<HTMLInputElement | HTMLSelectElement>(
        "input, select",
      ),
    ].filter(
      (candidate) => candidate.getAttribute("aria-label") === accessibleName,
    );
    return matches;
  };
  const mountedMatches = findMatches();
  if (mountedMatches.length > 0) {
    expect(mountedMatches).toHaveLength(1);
    return mountedMatches[0] as T;
  }
  goToWizardStep(
    container,
    accessibleName.includes("Ligne")
      ? "quote"
      : accessibleName.includes("Pièce")
        ? "application"
        : accessibleName.includes("Aide antérieure")
          ? "history"
          : wizardStepForLabelText(accessibleName),
  );
  const routedMatches = findMatches();
  expect(routedMatches).toHaveLength(1);
  if (routedMatches[0]) return routedMatches[0] as T;
  throw new Error(`Contrôle accessible introuvable : ${accessibleName}`);
}

function expectIssueTarget(
  container: HTMLElement,
  issueText: string,
  control: HTMLElement,
) {
  reanalyzeExpiredDossier(container);
  expect(control.id).not.toBe("");
  const expectedStep = wizardStepForControlId(control.id);
  goToWizardStep(container, expectedStep);
  const renderedControl = controlById<HTMLElement>(container, control.id);
  expect(renderedControl.getAttribute("aria-invalid")).toBe("true");
  expect(renderedControl.getAttribute("aria-errormessage")).toBeNull();
  const errorMessageId = `${renderedControl.id}-error-message`;
  const descriptionIds = (
    renderedControl.getAttribute("aria-describedby") ?? ""
  ).split(/\s+/);
  expect(descriptionIds).toContain(errorMessageId);
  expect(descriptionIds).not.toContain("site-aid-error-summary");
  const targetedMessage = container.querySelector(`#${errorMessageId}`);
  expect(targetedMessage?.textContent).toContain(issueText);
  const link = issueLink(container, issueText);
  expect(link.getAttribute("href")).toBe(`#${renderedControl.id}`);
  act(() => link.click());
  expect(
    container
      .querySelector("[data-site-aid-wizard-panel]")
      ?.getAttribute("data-site-aid-wizard-panel"),
  ).toBe(expectedStep);
  expect(document.activeElement).toBe(
    controlById(container, renderedControl.id),
  );
}

async function expectNoFullAxeViolations(container: HTMLElement) {
  vi.useRealTimers();
  let axeResults: axe.AxeResults;
  try {
    axeResults = await axe.run<axe.AxeResults>(container);
  } finally {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 6, 26, 12, 0, 0));
  }
  expect(
    axeResults.violations.map((violation) => ({
      id: violation.id,
      targets: violation.nodes.map((node) => node.target),
    })),
  ).toEqual([]);
}

async function expectNoAxeViolationsAcrossWizard(container: HTMLElement) {
  for (const stepId of WIZARD_STEP_IDS) {
    goToWizardStep(container, stepId);
    await expectNoFullAxeViolations(container);
  }
}

function loadBrittanyExampleWithoutAnalysis(container: HTMLElement) {
  act(() => buttonByText(container, "Charger l’exemple Bretagne").click());
  const confirm = [...container.querySelectorAll("button")].find((candidate) =>
    candidate.textContent?.includes("Confirmer le remplacement"),
  );
  if (confirm) {
    act(() => confirm.click());
  }
  goToWizardStep(container, "review");
}

function loadBrittanyExample(container: HTMLElement) {
  loadBrittanyExampleWithoutAnalysis(container);
  analyzeDossier(container);
}

function completeExampleNotification(container: HTMLElement) {
  goToWizardStep(container, "profile");
  changeControl(
    labelControl<HTMLSelectElement>(
      container,
      "Pièce applicable vérifiée",
      "select",
    ),
    "yes",
  );
  changeControl(
    controlById<HTMLSelectElement>(
      container,
      "site-aid-profile-eu-territorial-status",
    ),
    "eu-law-applicable",
  );
  changeControl(
    controlById<HTMLTextAreaElement>(
      container,
      "site-aid-profile-eu-territorial-evidence",
    ),
    "Autorité publique fictive, réponse TERR-2026-04 du 26/07/2026 : le droit de l’Union s’applique au territoire Bretagne.",
  );
  changeControl(
    controlById<HTMLInputElement>(
      container,
      "site-aid-profile-eu-territorial-evidence-date",
    ),
    "2026-07-26",
  );
  changeControl(
    labelControl<HTMLTextAreaElement>(
      container,
      "Obligations après attribution et après versement",
      "textarea",
    ),
    "Décision fictive : rapport final, conservation des pièces pendant cinq ans et restitution en cas de manquement",
  );
  for (const label of [
    "Bénéficiaire admis",
    "Activité admise",
    "Ordre des actes respecté",
    "Contrôle écrit du cumul",
  ]) {
    goToWizardStep(container, "legal");
    const select = labelControl<HTMLSelectElement>(container, label, "select");
    changeControl(select, "yes");
    const evidence =
      select.parentElement?.parentElement?.querySelector("input");
    if (!(evidence instanceof HTMLInputElement)) {
      throw new Error(`Preuve introuvable : ${label}`);
    }
    changeControl(evidence, `Preuve ${label} — 26/07/2026`);
  }
  goToWizardStep(container, "proof");
  changeControl(
    labelControl<HTMLSelectElement>(container, "État financier", "select"),
    "notified",
  );
  changeControl(
    labelControl<HTMLInputElement>(
      container,
      "Preuve de notification ou d’absence de notification",
      "input",
    ),
    "Notification N-2026-001 du 26/07/2026",
  );
  changeControl(
    labelControl<HTMLInputElement>(
      container,
      "Valeur juridique de l’aide actuelle",
      "input",
    ),
    "2100",
  );
  changeControl(
    labelControl<HTMLInputElement>(
      container,
      "Contribution financière approuvée pour la facture",
      "input",
    ),
    "2100",
  );
  changeControl(
    labelControl<HTMLSelectElement>(
      container,
      "Octroi juridique de l’aide actuelle",
      "select",
    ),
    "yes",
  );
  changeControl(
    labelControl<HTMLInputElement>(
      container,
      "Date d’octroi juridique de l’aide actuelle",
      "input",
    ),
    "2026-07-25",
  );
  const centralRegisterStatus = container.querySelector<HTMLSelectElement>(
    "#site-aid-central-register-status",
  );
  if (centralRegisterStatus) {
    changeControl(centralRegisterStatus, "registered");
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-central-register-reference",
      ),
      "recordid:0123456789abcdef0123456789abcdef01234567",
    );
  }
}

function completeDeMinimisRegisterEntry(
  container: HTMLElement,
  index: number,
  undertakingKey: string,
  amount = "100",
) {
  goToWizardStep(container, "cash");
  const entryNumber = index + 1;
  changeControl(
    controlById<HTMLInputElement>(
      container,
      `site-aid-register-entry-${entryNumber}-authority`,
    ),
    `Autorité ${entryNumber}`,
  );
  changeControl(
    controlById<HTMLInputElement>(
      container,
      `site-aid-register-entry-${entryNumber}-scheme`,
    ),
    `Dispositif ${entryNumber}`,
  );
  changeControl(
    controlById<HTMLSelectElement>(
      container,
      `site-aid-register-entry-${entryNumber}-legal-basis-status`,
    ),
    "de-minimis",
  );
  changeControl(
    controlById<HTMLInputElement>(
      container,
      `site-aid-register-entry-${entryNumber}-de-minimis-regime`,
    ),
    "Règlement (UE) 2023/2831",
  );
  changeControl(
    controlById<HTMLInputElement>(
      container,
      `site-aid-register-entry-${entryNumber}-member-state`,
    ),
    "France",
  );
  changeControl(
    controlById<HTMLInputElement>(
      container,
      `site-aid-register-entry-${entryNumber}-single-undertaking`,
    ),
    undertakingKey,
  );
  changeControl(
    controlById<HTMLInputElement>(
      container,
      `site-aid-register-entry-${entryNumber}-amount`,
    ),
    amount,
  );
  changeControl(
    controlById<HTMLInputElement>(
      container,
      `site-aid-register-entry-${entryNumber}-legal-grant-date`,
    ),
    "2026-01-15",
  );
  const centralRegisterStatus = container.querySelector<HTMLSelectElement>(
    `#site-aid-register-entry-${entryNumber}-central-register-status`,
  );
  if (centralRegisterStatus) {
    changeControl(centralRegisterStatus, "registered");
    changeControl(
      controlById<HTMLInputElement>(
        container,
        `site-aid-register-entry-${entryNumber}-central-register-reference`,
      ),
      `recordid:${entryNumber.toString(16).padStart(40, "0")}`,
    );
  }
  changeControl(
    controlById<HTMLInputElement>(
      container,
      `site-aid-register-entry-${entryNumber}-expenses`,
    ),
    `Dépenses ${entryNumber}`,
  );
  changeControl(
    controlById<HTMLSelectElement>(
      container,
      `site-aid-register-entry-${entryNumber}-same-base`,
    ),
    "no",
  );
}

function completeCurrentSgeiChecks(container: HTMLElement) {
  goToWizardStep(container, "proof");
  changeControl(
    controlById<HTMLSelectElement>(
      container,
      "site-aid-current-sgei-entrustment-status",
    ),
    "yes",
  );
  changeControl(
    controlById<HTMLInputElement>(
      container,
      "site-aid-current-sgei-entrustment-evidence",
    ),
    "Décision de mandat SIEG M-2026-01 vérifiée",
  );
  changeControl(
    controlById<HTMLInputElement>(
      container,
      "site-aid-current-sgei-service-identity",
    ),
    "Service d’accompagnement numérique territorial — 2026",
  );
  changeControl(
    controlById<HTMLSelectElement>(
      container,
      "site-aid-current-sgei-compensation-status",
    ),
    "no",
  );
  changeControl(
    controlById<HTMLInputElement>(
      container,
      "site-aid-current-sgei-compensation-evidence",
    ),
    "Réponse écrite de l’autorité du 26/07/2026 : aucune autre compensation pour ce service",
  );
}

function completeRegisterSgeiChecks(container: HTMLElement, index: number) {
  goToWizardStep(container, "cash");
  const entryNumber = index + 1;
  changeControl(
    controlById<HTMLSelectElement>(
      container,
      `site-aid-register-entry-${entryNumber}-sgei-entrustment-status`,
    ),
    "yes",
  );
  changeControl(
    controlById<HTMLInputElement>(
      container,
      `site-aid-register-entry-${entryNumber}-sgei-entrustment-evidence`,
    ),
    `Mandat SIEG antérieur M-${entryNumber} vérifié`,
  );
  changeControl(
    controlById<HTMLInputElement>(
      container,
      `site-aid-register-entry-${entryNumber}-sgei-service-identity`,
    ),
    `Service SIEG antérieur ${entryNumber}`,
  );
  changeControl(
    controlById<HTMLSelectElement>(
      container,
      `site-aid-register-entry-${entryNumber}-sgei-compensation-status`,
    ),
    "no",
  );
  changeControl(
    controlById<HTMLInputElement>(
      container,
      `site-aid-register-entry-${entryNumber}-sgei-compensation-evidence`,
    ),
    `Inventaire vérifié ${entryNumber} : aucune autre compensation du même service`,
  );
}

function completeFreshCandidateWithoutChangingStage(container: HTMLElement) {
  const textInputs: Array<[string, string]> = [
    ["Territoire de l’établissement", "Bretagne"],
    ["Activité et clientèle", "Conseil aux entreprises"],
    ["Forme ou statut", "SAS"],
    ["Problème métier que le site doit résoudre", "Qualifier les demandes"],
    ["Indicateur de réussite", "Demandes qualifiées"],
    ["Responsable de la décision", "Direction"],
    ["Organisme officiel", "Autorité publique fictive"],
    ["URL officielle directe", "https://example.gouv.fr/aide"],
    [
      "Échéances et règle de modification",
      "Notification avant engagement, avenant écrit si le devis change",
    ],
    [
      "Obligations après attribution et après versement",
      "Décision fictive : rapport final, conservation des pièces pendant cinq ans et restitution en cas de manquement",
    ],
    ["Libellé exact", "Conception et développement"],
    ["Référence de preuve", "Règlement, article 4"],
    [
      "Preuve de notification ou d’absence de notification",
      "Registre interne daté : aucune notification reçue",
    ],
  ];
  const numericInputs: Array<[string, string]> = [
    ["Âge de l’entreprise", "30"],
    ["Effectif", "4"],
    ["Chiffre d’affaires annuel HT", "420000"],
    ["Montant HT", "7000"],
    ["Taux de TVA", "20"],
    ["Part de TVA déductible", "100"],
    ["Taux de l’aide", "30"],
    ["Plafond de l’aide", "7500"],
    ["Trésorerie disponible", "12000"],
    ["Mois d’attente", "1"],
    ["Marge contributive mensuelle", "500"],
    ["Frais propres à la demande", "0"],
  ];

  const profileLabels = new Set([
    "Territoire de l’établissement",
    "Activité et clientèle",
    "Forme ou statut",
    "Problème métier que le site doit résoudre",
    "Indicateur de réussite",
    "Responsable de la décision",
    "Organisme officiel",
    "URL officielle directe",
    "Échéances et règle de modification",
    "Obligations après attribution et après versement",
    "Âge de l’entreprise",
    "Effectif",
    "Chiffre d’affaires annuel HT",
  ]);
  const quoteLabels = new Set([
    "Libellé exact",
    "Référence de preuve",
    "Montant HT",
    "Taux de TVA",
    "Part de TVA déductible",
  ]);
  const cashLabels = new Set([
    "Trésorerie disponible",
    "Mois d’attente",
    "Marge contributive mensuelle",
    "Frais propres à la demande",
  ]);
  for (const [label, value] of [...textInputs, ...numericInputs]) {
    goToWizardStep(
      container,
      profileLabels.has(label)
        ? "profile"
        : quoteLabels.has(label)
          ? "quote"
          : cashLabels.has(label)
            ? "cash"
            : "proof",
    );
    changeControl(
      labelControl<HTMLInputElement | HTMLTextAreaElement>(
        container,
        label,
        "input, textarea",
      ),
      value,
    );
  }

  goToWizardStep(container, "profile");
  changeControl(
    labelControl<HTMLSelectElement>(
      container,
      "Pièce applicable vérifiée",
      "select",
    ),
    "yes",
  );
  changeControl(
    controlById<HTMLSelectElement>(
      container,
      "site-aid-profile-eu-territorial-status",
    ),
    "eu-law-applicable",
  );
  changeControl(
    controlById<HTMLTextAreaElement>(
      container,
      "site-aid-profile-eu-territorial-evidence",
    ),
    "Autorité publique fictive, réponse TERR-2026-04 du 26/07/2026 : le droit de l’Union s’applique au territoire Bretagne.",
  );
  changeControl(
    controlById<HTMLInputElement>(
      container,
      "site-aid-profile-eu-territorial-evidence-date",
    ),
    "2026-07-26",
  );
  goToWizardStep(container, "quote");
  changeControl(
    labelControl<HTMLSelectElement>(container, "Ligne admissible", "select"),
    "yes",
  );
  goToWizardStep(container, "proof");
  for (const label of [
    "Guichet ou autorité applicable",
    "Bénéficiaire admis",
    "Activité admise",
    "Ordre des actes respecté",
    "Contrôle écrit du cumul",
  ]) {
    const select = labelControl<HTMLSelectElement>(container, label, "select");
    changeControl(select, "yes");
    const evidence =
      select.parentElement?.parentElement?.querySelector("input");
    if (!(evidence instanceof HTMLInputElement)) {
      throw new Error(`Preuve introuvable : ${label}`);
    }
    changeControl(evidence, `Preuve ${label} — 26/07/2026`);
  }
  changeControl(
    labelControl<HTMLSelectElement>(
      container,
      "Type d’instrument de l’aide actuelle",
      "select",
    ),
    "grant",
  );
  changeControl(
    labelControl<HTMLSelectElement>(
      container,
      "Statut de la base juridique",
      "select",
    ),
    "de-minimis",
  );
  changeControl(
    labelControl<HTMLInputElement>(
      container,
      "Référence exacte du règlement de minimis",
      "input",
    ),
    "Règlement (UE) 2023/2831",
  );
  goToWizardStep(container, "cash");
  changeControl(
    labelControl<HTMLSelectElement>(
      container,
      "Fusion, acquisition ou scission pertinente",
      "select",
    ),
    "no",
  );
  changeControl(
    labelControl<HTMLTextAreaElement>(
      container,
      "Preuve de l’opération ou de son absence",
      "textarea",
    ),
    "Attestation interne datée et extrait d’immatriculation vérifiés : aucune fusion, acquisition ni scission pertinente",
  );
  goToWizardStep(container, "proof");
  changeControl(
    labelControl<HTMLInputElement>(
      container,
      "État membre de l’autorité d’octroi (pas le siège du bénéficiaire)",
      "input",
    ),
    "France",
  );
  changeControl(
    labelControl<HTMLInputElement>(
      container,
      "Entreprise unique de l’aide actuelle",
      "input",
    ),
    "SAS du cas pédagogique",
  );
  changeControl(
    labelControl<HTMLSelectElement>(
      container,
      "Assiette prévue par le règlement",
      "select",
    ),
    "eligible-ex-vat",
  );
  changeControl(
    labelControl<HTMLSelectElement>(
      container,
      "Octroi juridique de l’aide actuelle",
      "select",
    ),
    "no",
  );
  changeControl(
    labelControl<HTMLSelectElement>(
      container,
      "Mode et destinataire du paiement",
      "select",
    ),
    "reimbursement",
  );
}

function completeApplicationPreparation(container: HTMLElement) {
  goToWizardStep(container, "application");
  changeControl(
    controlById<HTMLSelectElement>(
      container,
      "site-aid-application-award-mode",
    ),
    "right",
  );
  changeControl(
    controlById<HTMLSelectElement>(
      container,
      "site-aid-application-deadline-status",
    ),
    "permanent",
  );
  for (const [id, value] of [
    ["site-aid-application-funder-objectives", "Objectif officiel documenté."],
    [
      "site-aid-application-selection-criteria",
      "Conditions d’attribution documentées.",
    ],
    ["site-aid-application-submission-channel", "Portail officiel documenté."],
    [
      "site-aid-application-deadline-official-reference",
      "Portail officiel, rubrique guichet permanent, référence GUI-2026-42.",
    ],
    ["site-aid-application-deliverables", "Livrable documenté."],
    ["site-aid-application-expected-results", "Résultat mesurable documenté."],
    ["site-aid-application-schedule", "Calendrier documenté."],
    ["site-aid-application-budget-justification", "Budget relié au livrable."],
    ["site-aid-application-final-reviewer", "Direction"],
    ["site-aid-application-document-1-label", "Attestation requise"],
    ["site-aid-application-document-1-owner", "Direction"],
    ["site-aid-application-document-1-format", "PDF"],
  ] as const) {
    changeControl(
      controlById<HTMLInputElement | HTMLTextAreaElement>(container, id),
      value,
    );
  }
  changeControl(
    controlById<HTMLInputElement>(
      container,
      "site-aid-application-deadline-verification-date",
    ),
    "2026-07-26",
  );
  changeControl(
    controlById<HTMLInputElement>(
      container,
      "site-aid-application-preparation-time",
    ),
    "2",
  );
  changeControl(
    controlById<HTMLSelectElement>(
      container,
      "site-aid-application-document-1-status",
    ),
    "ready",
  );
  changeControl(
    controlById<HTMLSelectElement>(
      container,
      "site-aid-application-document-1-signature",
    ),
    "not-required",
  );
  changeControl(
    controlById<HTMLInputElement>(
      container,
      "site-aid-application-document-1-deadline",
    ),
    "2026-08-01",
  );
  changeControl(
    controlById<HTMLSelectElement>(
      container,
      "site-aid-application-final-validation",
    ),
    "yes",
  );
}

describe("SiteAidDecisionDossier", () => {
  let container: HTMLDivElement;
  let root: Root;

  beforeAll(() => {
    (
      globalThis as typeof globalThis & { IS_REACT_ACT_ENVIRONMENT: boolean }
    ).IS_REACT_ACT_ENVIRONMENT = true;
  });

  beforeEach(async () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 6, 26, 12, 0, 0));
    container = document.createElement("div");
    document.body.append(container);
    root = createRoot(container);
    act(() => {
      root.render(<SiteAidDecisionDossier />);
    });
    await act(async () => {
      vi.advanceTimersByTime(0);
      await Promise.resolve();
    });
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
    vi.useRealTimers();
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it("initializes local dates without sending data and keeps blanks unknown", () => {
    expect(
      labelControl<HTMLInputElement>(container, "Date de vérification", "input")
        .value,
    ).toBe("2026-07-26");
    expect(
      labelControl<HTMLInputElement>(container, "Date de consultation", "input")
        .value,
    ).toBe("2026-07-26");
    expect(
      labelControl<HTMLSelectElement>(
        container,
        "Pièce applicable vérifiée",
        "select",
      ).value,
    ).toBe("unknown");
    expect(container.textContent).toContain("données non envoyées");
    expect(
      container
        .querySelector('[role="status"][aria-live="polite"]')
        ?.textContent?.trim(),
    ).toBe("");
    expect(
      container.querySelectorAll('[role="status"][aria-live="polite"]'),
    ).toHaveLength(1);
    expect(container.querySelector("#site-aid-result-title")).toBeNull();
    goToWizardStep(container, "review");
    expect(
      container.querySelector("#site-aid-result-title")?.textContent,
    ).toContain("DOSSIER À COMPLÉTER — AUCUN VERDICT RENDU");
    expect(
      container
        .querySelector("#site-aid-result-title")
        ?.closest("section")
        ?.hasAttribute("aria-live"),
    ).toBe(false);
  });

  it("hydrates as a true nine-step wizard with one mounted panel, soft navigation and persistent values", async () => {
    act(() => root.unmount());
    const consoleError = vi
      .spyOn(console, "error")
      .mockImplementation(() => undefined);
    const consoleWarn = vi
      .spyOn(console, "warn")
      .mockImplementation(() => undefined);
    const serverMarkup = renderToString(<SiteAidDecisionDossier />);
    expect(serverMarkup.match(/data-site-aid-wizard-panel=/g)).toHaveLength(1);
    expect(serverMarkup).toContain('data-site-aid-wizard-panel="profile"');
    expect(serverMarkup).not.toContain("site-aid-quote-line-1-label");

    container.innerHTML = serverMarkup;
    await act(async () => {
      root = hydrateRoot(container, <SiteAidDecisionDossier />);
      await Promise.resolve();
      vi.advanceTimersByTime(0);
      await Promise.resolve();
    });
    expect(consoleError).not.toHaveBeenCalled();
    expect(consoleWarn).not.toHaveBeenCalled();

    const wizardButtons = [
      ...container.querySelectorAll<HTMLButtonElement>(
        'nav[aria-label="Progression du dossier"] button',
      ),
    ];
    expect(wizardButtons).toHaveLength(9);
    expect(
      wizardButtons.filter(
        (button) => button.getAttribute("aria-current") === "step",
      ),
    ).toHaveLength(1);
    expect(wizardButtons[0].getAttribute("aria-controls")).toBe(
      "site-aid-wizard-step-profile-panel",
    );
    expect(
      wizardButtons
        .slice(1)
        .every((button) => !button.hasAttribute("aria-controls")),
    ).toBe(true);
    expect(
      container.querySelectorAll("[data-site-aid-wizard-panel]"),
    ).toHaveLength(1);

    const reference = labelControl<HTMLInputElement>(
      container,
      "Référence interne",
      "input",
    );
    changeControl(reference, "Parcours R24 persistant");
    const nextButton = buttonByText(container, "Étape suivante");
    expect(nextButton.getAttribute("aria-describedby")).toBe(
      "site-aid-soft-navigation-help-profile",
    );
    expect(
      controlById(container, "site-aid-soft-navigation-help-profile")
        .textContent,
    ).toContain("changer d’étape ne valide ni l’éligibilité");
    act(() => nextButton.click());
    expect(document.activeElement).toBe(
      controlById(container, "site-aid-wizard-step-quote-title"),
    );
    expect(
      container.querySelector('[role="status"][aria-live="polite"]')
        ?.textContent,
    ).toContain("Étape 2 sur 9");
    expect(container.querySelector("#site-aid-profile-section")).toBeNull();
    expect(
      container.querySelectorAll("[data-site-aid-wizard-panel]"),
    ).toHaveLength(1);

    act(() => buttonByText(container, "Étape précédente").click());
    expect(document.activeElement).toBe(
      controlById(container, "site-aid-wizard-step-profile-title"),
    );
    expect(
      labelControl<HTMLInputElement>(container, "Référence interne", "input")
        .value,
    ).toBe("Parcours R24 persistant");

    goToWizardStep(container, "review");
    expect(
      container.querySelectorAll("[data-site-aid-review] > article"),
    ).toHaveLength(8);
    expect(
      [...container.querySelectorAll("button")].filter((button) =>
        button.textContent?.startsWith("Modifier"),
      ),
    ).toHaveLength(8);
    expect(container.querySelector("#site-aid-result-title")?.textContent).toBe(
      "DOSSIER EN COURS — VERDICT NON DEMANDÉ",
    );
    expect(
      container
        .querySelector("#site-aid-result-title")
        ?.closest("section")
        ?.querySelector("dl"),
    ).toBeNull();
    expect(container.querySelector(".site-aid-print-report")).toBeNull();

    const quoteReviewCard = container.querySelectorAll<HTMLElement>(
      "[data-site-aid-review] > article",
    )[1];
    act(() => quoteReviewCard.querySelector("button")?.click());
    expect(document.activeElement).toBe(
      controlById(container, "site-aid-wizard-step-quote-title"),
    );
    expect(
      container
        .querySelector("[data-site-aid-wizard-panel]")
        ?.getAttribute("data-site-aid-wizard-panel"),
    ).toBe("quote");
    expect(
      buttonByText(container, "Retour à Vérifier vos réponses"),
    ).toBeTruthy();
    act(() =>
      buttonByText(container, "Retour à Vérifier vos réponses").click(),
    );
    expect(
      container
        .querySelector("[data-site-aid-wizard-panel]")
        ?.getAttribute("data-site-aid-wizard-panel"),
    ).toBe("review");
    expect(document.activeElement).toBe(
      controlById(container, "site-aid-review-quote"),
    );
  });

  it("splits the former mega-step into eight short business panels plus review", () => {
    const activeFieldCount = () =>
      container.querySelectorAll(
        "[data-site-aid-wizard-panel] input:not([type='hidden']), [data-site-aid-wizard-panel] select, [data-site-aid-wizard-panel] textarea",
      ).length;
    const counts = WIZARD_STEP_IDS.slice(0, -1).map((stepId) => {
      goToWizardStep(container, stepId);
      expect(
        container.querySelectorAll("[data-site-aid-wizard-panel]"),
      ).toHaveLength(1);
      return [stepId, activeFieldCount()] as const;
    });

    expect(counts.map(([stepId]) => stepId)).toEqual([
      "profile",
      "quote",
      "eligibility",
      "legal",
      "payment",
      "treasury",
      "history",
      "application",
    ]);
    expect(Math.max(...counts.map(([, count]) => count))).toBeLessThan(27);
    expect(
      counts.find(([stepId]) => stepId === "eligibility")?.[1],
    ).toBeLessThan(15);
    expect(counts.find(([stepId]) => stepId === "treasury")?.[1]).toBe(4);
  });

  it("uses the engine’s French-register scope for current and prior aid, adds exactly two fields and cleans opposite states", () => {
    const activeFieldCount = () =>
      container.querySelectorAll(
        "[data-site-aid-wizard-panel] input:not([type='hidden']), [data-site-aid-wizard-panel] select, [data-site-aid-wizard-panel] textarea",
      ).length;

    goToWizardStep(container, "proof");
    changeControl(
      controlById<HTMLSelectElement>(container, "site-aid-legal-basis-status"),
      "de-minimis",
    );
    changeControl(
      controlById<HTMLInputElement>(container, "site-aid-de-minimis-regime"),
      "2023/2831",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-de-minimis-member-state",
      ),
      "fra",
    );
    changeControl(
      controlById<HTMLSelectElement>(container, "site-aid-legal-grant-status"),
      "yes",
    );
    changeControl(
      controlById<HTMLInputElement>(container, "site-aid-legal-grant-date"),
      "2026-01-01",
    );
    const currentOffScopeCount = activeFieldCount();
    expect(
      container.querySelector("#site-aid-central-register-section"),
    ).toBeNull();

    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-de-minimis-member-state",
      ),
      "République française",
    );
    expect(activeFieldCount()).toBe(currentOffScopeCount + 2);
    const currentRegisterHelp = controlById(
      container,
      "site-aid-central-register-help",
    );
    expect(currentRegisterHelp.textContent).toContain(
      "articles 6 des règlements général, SIEG et agricole fixent le délai européen de 20 jours ouvrables",
    );
    expect(currentRegisterHelp.textContent).toContain(
      "articles 2 et 3 du décret n° 2025-1361 organisent la transmission à la Plateforme",
    );
    expect(currentRegisterHelp.textContent).toContain(
      "publication reste une étape distincte",
    );
    expect(normalizedText(currentRegisterHelp)).toContain(
      "URL de ce jeu contenant un recordid, un recordid autonome exploitable, ou une attestation structurée de l’autorité",
    );
    const currentCentralStatus = controlById<HTMLSelectElement>(
      container,
      "site-aid-central-register-status",
    );
    expect(
      [...currentCentralStatus.options].map((option) => [
        option.value,
        option.textContent,
      ]),
    ).toContainEqual(["pending", "Transmission des données d’octroi en cours"]);
    changeControl(currentCentralStatus, "registered");
    expect(
      controlById<HTMLInputElement>(
        container,
        "site-aid-central-register-reference",
      ).placeholder,
    ).toContain(
      "URL aides_minimis avec recordid, recordid autonome ou attestation structurée",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-central-register-reference",
      ),
      "recordid:0123456789abcdef0123456789abcdef01234567",
    );

    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-de-minimis-member-state",
      ),
      "fra",
    );
    expect(
      container.querySelector("#site-aid-central-register-section"),
    ).toBeNull();
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-de-minimis-member-state",
      ),
      "France",
    );
    expect(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-central-register-status",
      ).value,
    ).toBe("unknown");
    const cleanedCurrentReference = controlById<HTMLInputElement>(
      container,
      "site-aid-central-register-reference",
    );
    expect(cleanedCurrentReference.value).toBe("");
    expect(cleanedCurrentReference.disabled).toBe(true);

    changeControl(
      controlById<HTMLInputElement>(container, "site-aid-de-minimis-regime"),
      "1408/2013",
    );
    changeControl(
      controlById<HTMLInputElement>(container, "site-aid-legal-grant-date"),
      "2026-12-31",
    );
    expect(
      container.querySelector("#site-aid-central-register-section"),
    ).toBeNull();
    changeControl(
      controlById<HTMLInputElement>(container, "site-aid-legal-grant-date"),
      "2027-01-01",
    );
    expect(
      container.querySelector("#site-aid-central-register-section"),
    ).not.toBeNull();

    changeControl(
      controlById<HTMLInputElement>(container, "site-aid-de-minimis-regime"),
      "2023/2831",
    );
    changeControl(
      controlById<HTMLInputElement>(container, "site-aid-legal-grant-date"),
      "2026-01-01",
    );
    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-central-register-status",
      ),
      "registered",
    );
    analyzeDossier(container);
    goToWizardStep(container, "proof");
    const currentCentralReference = controlById<HTMLInputElement>(
      container,
      "site-aid-central-register-reference",
    );
    expectIssueTarget(
      container,
      "Aide courante, référence du registre central national",
      currentCentralReference,
    );
    changeControl(
      controlById<HTMLInputElement>(container, currentCentralReference.id),
      "recordid:0123456789abcdef0123456789abcdef01234567",
    );

    goToWizardStep(container, "history");
    act(() => buttonByText(container, "Ajouter une aide antérieure").click());
    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-register-entry-1-legal-basis-status",
      ),
      "de-minimis",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-register-entry-1-de-minimis-regime",
      ),
      "2023/2831",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-register-entry-1-member-state",
      ),
      "fra",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-register-entry-1-legal-grant-date",
      ),
      "2026-01-01",
    );
    const registerOffScopeCount = activeFieldCount();
    expect(
      container.querySelector(
        "#site-aid-register-entry-1-central-register-status",
      ),
    ).toBeNull();
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-register-entry-1-member-state",
      ),
      "FR",
    );
    expect(activeFieldCount()).toBe(registerOffScopeCount + 2);
    const registerHelp = controlById<HTMLElement>(
      container,
      "site-aid-register-entry-1-central-register-help",
    );
    expect(registerHelp.textContent).toContain(
      "articles 6 des règlements général, SIEG et agricole fixent le délai européen de 20 jours ouvrables",
    );
    expect(registerHelp.textContent).toContain(
      "articles 2 et 3 du décret n° 2025-1361 organisent la transmission à la Plateforme",
    );
    expect(normalizedText(registerHelp)).toContain(
      "URL de ce jeu contenant un recordid, un recordid autonome exploitable, ou une attestation structurée de l’autorité",
    );
    expect(
      controlById(
        container,
        "site-aid-register-entry-1-central-register-status",
      )
        .getAttribute("aria-describedby")
        ?.split(/\s+/),
    ).toContain(registerHelp.id);
    expect(
      controlById(
        container,
        "site-aid-register-section",
      ).compareDocumentPosition(
        controlById(container, "site-aid-corporate-event-section"),
      ) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();

    const registerCentralStatus = controlById<HTMLSelectElement>(
      container,
      "site-aid-register-entry-1-central-register-status",
    );
    changeControl(registerCentralStatus, "registered");
    analyzeDossier(container);
    goToWizardStep(container, "cash");
    const registerCentralReference = controlById<HTMLInputElement>(
      container,
      "site-aid-register-entry-1-central-register-reference",
    );
    expectIssueTarget(
      container,
      "Registre, aide 1, référence du registre central national",
      registerCentralReference,
    );
    changeControl(
      controlById<HTMLInputElement>(container, registerCentralReference.id),
      "recordid:abcdef0123456789abcdef0123456789abcdef01",
    );
    changeControl(
      controlById<HTMLSelectElement>(container, registerCentralStatus.id),
      "pending",
    );
    const cleanedRegisterReference = controlById<HTMLInputElement>(
      container,
      registerCentralReference.id,
    );
    expect(cleanedRegisterReference.value).toBe("");
    expect(cleanedRegisterReference.disabled).toBe(true);
  });

  it("round-trips a sensitive JSON draft locally, confirms overwrite, recreates rows and never restores analysis", async () => {
    const fetchSpy = vi.fn();
    vi.stubGlobal("fetch", fetchSpy);
    const storageSpies = [
      vi.spyOn(Storage.prototype, "getItem"),
      vi.spyOn(Storage.prototype, "setItem"),
      vi.spyOn(Storage.prototype, "removeItem"),
      vi.spyOn(Storage.prototype, "clear"),
    ];
    const createObjectUrl = vi.fn((blob: Blob): string => {
      void blob;
      return "blob:site-aid-r22-draft";
    });
    Object.defineProperty(URL, "createObjectURL", {
      configurable: true,
      value: createObjectUrl,
    });
    Object.defineProperty(URL, "revokeObjectURL", {
      configurable: true,
      value: vi.fn(),
    });
    vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(
      () => undefined,
    );

    goToWizardStep(container, "profile");
    changeControl(
      labelControl<HTMLInputElement>(container, "Référence interne", "input"),
      "Brouillon confidentiel R22",
    );
    goToWizardStep(container, "quote");
    changeControl(
      controlById<HTMLInputElement>(container, "site-aid-quote-line-1-label"),
      "Audit initial",
    );
    act(() => buttonByText(container, "Ajouter une ligne").click());
    changeControl(
      controlById<HTMLInputElement>(container, "site-aid-quote-line-2-label"),
      "Développement",
    );
    goToWizardStep(container, "cash");
    act(() => buttonByText(container, "Ajouter une aide antérieure").click());
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-register-entry-1-authority",
      ),
      "Région — donnée sensible",
    );
    goToWizardStep(container, "application");
    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-application-award-mode",
      ),
      "selection",
    );
    changeControl(
      controlById<HTMLTextAreaElement>(
        container,
        "site-aid-application-funder-objectives",
      ),
      "Impact numérique vérifiable",
    );
    changeControl(
      controlById<HTMLTextAreaElement>(
        container,
        "site-aid-application-selection-criteria",
      ),
      "Qualité et impact local",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-submission-channel",
      ),
      "Portail confidentiel de l’autorité",
    );
    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-application-deadline-status",
      ),
      "exact-date",
    );
    changeControl(
      controlById<HTMLInputElement>(container, "site-aid-application-deadline"),
      "2026-09-30",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-deadline-official-reference",
      ),
      "Calendrier officiel CAL-2026-09.",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-deadline-verification-date",
      ),
      "2026-07-26",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-preparation-time",
      ),
      "14.5",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-final-reviewer",
      ),
      "Direction",
    );
    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-application-final-validation",
      ),
      "yes",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-document-1-label",
      ),
      "Plan de financement",
    );
    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-application-document-1-status",
      ),
      "ready",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-document-1-owner",
      ),
      "Direction financière",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-document-1-format",
      ),
      "PDF",
    );
    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-application-document-1-signature",
      ),
      "signed",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-document-1-deadline",
      ),
      "2026-09-20",
    );
    act(() => buttonByText(container, "Ajouter une pièce").click());
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-document-2-label",
      ),
      "Attestation sensible",
    );
    analyzeDossier(container);
    expect(container.querySelector(".site-aid-print-report")).not.toBeNull();

    act(() => buttonByText(container, "Exporter le brouillon JSON").click());
    expect(createObjectUrl).toHaveBeenCalledOnce();
    const exportedBlob = createObjectUrl.mock.calls[0]?.[0] as Blob;
    const exportedJson = await exportedBlob.text();
    const exportedEnvelope = JSON.parse(exportedJson) as {
      version: string;
      activeStepId: string;
      input: {
        profile: { reference: string };
        quoteLines: Array<{ label: string }>;
        aidRegister: Array<{ authority: string }>;
      };
      application: {
        awardMode: string;
        preparationTimeHours: number;
        documents: Array<{ label: string; owner: string }>;
      };
    };
    expect(exportedEnvelope.version).toBe(SITE_AID_DRAFT_VERSION);
    expect(exportedEnvelope.activeStepId).toBe("review");
    expect(exportedEnvelope.input.profile.reference).toBe(
      "Brouillon confidentiel R22",
    );
    expect(exportedEnvelope.input.quoteLines.map((line) => line.label)).toEqual(
      ["Audit initial", "Développement"],
    );
    expect(exportedEnvelope.input.aidRegister[0].authority).toBe(
      "Région — donnée sensible",
    );
    expect(exportedEnvelope.application).toMatchObject({
      awardMode: "selection",
      preparationTimeHours: 14.5,
    });
    expect(
      exportedEnvelope.application.documents.map((document) => document.label),
    ).toEqual(["Plan de financement", "Attestation sensible"]);
    expect(exportedJson).not.toMatch(/"verdict"|"report"|"result"/);
    expect(
      normalizedText(controlById(container, "site-aid-draft-privacy-help")),
    ).toContain("économiquement sensibles");
    expect(
      normalizedText(controlById(container, "site-aid-draft-privacy-help")),
    ).toContain("sans localStorage, sans sessionStorage et sans réseau");

    goToWizardStep(container, "profile");
    changeControl(
      labelControl<HTMLInputElement>(container, "Référence interne", "input"),
      "Version locale non exportée",
    );
    await chooseDraftFile(container, exportedJson);
    const importConfirmation = controlById<HTMLElement>(
      container,
      "site-aid-import-confirmation",
    );
    expect(importConfirmation.getAttribute("role")).toBe("group");
    const importCancel = buttonByText(
      container,
      "Annuler et conserver le brouillon",
    );
    expect(document.activeElement).toBe(importCancel);
    const escape = new KeyboardEvent("keydown", {
      key: "Escape",
      bubbles: true,
      cancelable: true,
    });
    act(() => importCancel.dispatchEvent(escape));
    expect(escape.defaultPrevented).toBe(true);
    expect(container.querySelector("#site-aid-import-confirmation")).toBeNull();
    expect(document.activeElement).toBe(
      buttonByText(container, "Importer un brouillon JSON"),
    );
    expect(
      labelControl<HTMLInputElement>(container, "Référence interne", "input")
        .value,
    ).toBe("Version locale non exportée");

    await chooseDraftFile(container, exportedJson);
    act(() => buttonByText(container, "Confirmer l’import").click());
    expect(
      container
        .querySelector("[data-site-aid-wizard-panel]")
        ?.getAttribute("data-site-aid-wizard-panel"),
    ).toBe("review");
    expect(document.activeElement).toBe(
      controlById(container, "site-aid-wizard-step-review-title"),
    );
    expect(container.querySelector(".site-aid-print-report")).toBeNull();
    expect(container.querySelector("#site-aid-result-title")?.textContent).toBe(
      "DOSSIER EN COURS — VERDICT NON DEMANDÉ",
    );
    expect(buttonByText(container, "Télécharger le dossier TXT").disabled).toBe(
      true,
    );
    expect(buttonByText(container, "Imprimer le dossier").disabled).toBe(true);

    goToWizardStep(container, "quote");
    expect(
      controlById<HTMLInputElement>(container, "site-aid-quote-line-1-label")
        .value,
    ).toBe("Audit initial");
    expect(
      controlById<HTMLInputElement>(container, "site-aid-quote-line-2-label")
        .value,
    ).toBe("Développement");
    act(() =>
      container
        .querySelector<HTMLButtonElement>(
          'button[aria-label="Supprimer la ligne 2"]',
        )
        ?.click(),
    );
    expect(document.activeElement).toBe(
      controlById(container, "site-aid-quote-line-1-label"),
    );
    goToWizardStep(container, "cash");
    expect(
      controlById<HTMLInputElement>(
        container,
        "site-aid-register-entry-1-authority",
      ).value,
    ).toBe("Région — donnée sensible");
    goToWizardStep(container, "application");
    expect(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-document-1-label",
      ).value,
    ).toBe("Plan de financement");
    expect(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-document-2-label",
      ).value,
    ).toBe("Attestation sensible");
    act(() =>
      container
        .querySelector<HTMLButtonElement>(
          'button[aria-label="Supprimer la pièce 2"]',
        )
        ?.click(),
    );
    expect(document.activeElement).toBe(
      controlById(container, "site-aid-application-document-1-label"),
    );

    expect(fetchSpy).not.toHaveBeenCalled();
    for (const storageSpy of storageSpies) {
      expect(storageSpy).not.toHaveBeenCalled();
    }
  });

  it("marks a current imported draft dirty when an out-of-scope central-register trace is normalized, without a loop or false positive", async () => {
    const importedInput = draftDecisionInput();
    importedInput.aid.centralRegisterStatus = "registered";
    importedInput.aid.centralRegisterReference =
      "recordid:abcdef0123456789abcdef0123456789abcdef01";
    const importedJson = createSiteAidDraftJson(
      importedInput,
      createEmptySiteAidApplicationPreparation(),
      "history",
      "2026-07-26T10:00:00.000Z",
    );

    await chooseDraftFile(container, importedJson);
    expect(
      container.querySelector("[data-site-aid-draft-status='imported']")
        ?.textContent,
    ).toContain(
      "Une trace du registre central incompatible avec le périmètre juridique a été normalisée et vidée",
    );
    expect(
      container
        .querySelector("[data-site-aid-unsaved-status]")
        ?.getAttribute("data-site-aid-unsaved-status"),
    ).toBe("unsaved");
    expect(
      normalizedText(
        container.querySelector(
          '[role="status"][aria-live="polite"]',
        ) as HTMLElement,
      ),
    ).toContain(
      "Une trace du registre central hors périmètre a été normalisée",
    );

    const createObjectUrl = vi.fn((blob: Blob | MediaSource) => {
      expect(blob).toBeInstanceOf(Blob);
      return "blob:normalized-register-draft";
    });
    Object.defineProperty(URL, "createObjectURL", {
      configurable: true,
      value: createObjectUrl,
    });
    Object.defineProperty(URL, "revokeObjectURL", {
      configurable: true,
      value: vi.fn(),
    });
    vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(
      () => undefined,
    );
    act(() => buttonByText(container, "Exporter le brouillon JSON").click());
    const normalizedJson = await (
      createObjectUrl.mock.calls[0]?.[0] as unknown as Blob
    ).text();
    const normalizedDraft = JSON.parse(normalizedJson) as {
      input: {
        aid: {
          centralRegisterStatus: string;
          centralRegisterReference: string;
        };
      };
    };
    expect(normalizedDraft.input.aid).toMatchObject({
      centralRegisterStatus: "not-applicable",
      centralRegisterReference: "",
    });
    expect(
      container.querySelector("[data-site-aid-unsaved-status='aligned']"),
    ).not.toBeNull();

    await chooseDraftFile(container, normalizedJson);
    expect(container.querySelector("#site-aid-import-confirmation")).toBeNull();
    expect(
      container.querySelector("[data-site-aid-unsaved-status='aligned']"),
    ).not.toBeNull();
    expect(
      container.querySelector("[data-site-aid-draft-status='imported']")
        ?.textContent,
    ).not.toContain("registre central incompatible");
  });

  it("refuses malformed, obsolete and oversized JSON drafts inline without changing the dossier", async () => {
    const createObjectUrl = vi.fn((blob: Blob) => {
      void blob;
      return "blob:site-aid-r22-invalid-source";
    });
    Object.defineProperty(URL, "createObjectURL", {
      configurable: true,
      value: createObjectUrl,
    });
    Object.defineProperty(URL, "revokeObjectURL", {
      configurable: true,
      value: vi.fn(),
    });
    vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(
      () => undefined,
    );
    changeControl(
      labelControl<HTMLInputElement>(container, "Référence interne", "input"),
      "Dossier à préserver",
    );
    act(() => buttonByText(container, "Exporter le brouillon JSON").click());
    const validJson = await (createObjectUrl.mock.calls[0]?.[0] as Blob).text();
    const obsoleteEnvelope = JSON.parse(validJson) as { version: string };
    obsoleteEnvelope.version = "site-aid-draft-r21-ancienne-version";

    await chooseDraftFile(container, JSON.stringify(obsoleteEnvelope));
    expect(
      container.querySelector("[data-site-aid-draft-status='import-error']")
        ?.textContent,
    ).toContain("version de brouillon n’est pas prise en charge");
    expect(document.activeElement).toBe(
      buttonByText(container, "Importer un brouillon JSON"),
    );

    await chooseDraftFile(container, "{");
    expect(
      container.querySelector("[data-site-aid-draft-status='import-error']")
        ?.textContent,
    ).toContain("brouillon JSON lisible");

    await chooseDraftFile(
      container,
      " ".repeat(SITE_AID_DRAFT_MAX_BYTES + 1),
      "brouillon-trop-volumineux.json",
    );
    expect(
      container.querySelector("[data-site-aid-draft-status='import-error']")
        ?.textContent,
    ).toContain("taille maximale autorisée de 256 Kio");
    expect(container.querySelector("#site-aid-import-confirmation")).toBeNull();
    expect(
      labelControl<HTMLInputElement>(container, "Référence interne", "input")
        .value,
    ).toBe("Dossier à préserver");
  });

  it("migrates a strict R23 draft without inventing candidature facts", async () => {
    const currentEnvelope = JSON.parse(
      createSiteAidDraftJson(
        draftDecisionInput(),
        createEmptySiteAidApplicationPreparation(),
        "history",
        "2026-07-26T10:00:00.000Z",
      ),
    ) as Record<string, unknown>;
    currentEnvelope.version = SITE_AID_DRAFT_R23_VERSION;
    delete currentEnvelope.application;
    delete currentEnvelope.prediagnosis;
    const legacyAid = (
      currentEnvelope.input as { aid: Record<string, unknown> }
    ).aid;
    const legacyProfile = (
      currentEnvelope.input as { profile: Record<string, unknown> }
    ).profile;
    delete legacyProfile.deMinimisEuTerritorialStatus;
    delete legacyProfile.deMinimisEuTerritorialEvidence;
    delete legacyProfile.deMinimisEuTerritorialEvidenceDate;
    delete legacyAid.deMinimisFisheryFiscalYearStartDate;
    delete legacyAid.deMinimisFisheryPreviousFiscalYearStartDate;
    delete legacyAid.deMinimisFisherySecondPreviousFiscalYearStartDate;
    delete legacyAid.deMinimisFisheryCurrentFiscalYearEndDate;
    delete legacyAid.prospectiveDeMinimisAidValueAmount;
    delete legacyAid.prospectiveDeMinimisAidValueEvidence;

    await chooseDraftFile(container, JSON.stringify(currentEnvelope));
    expect(
      container.querySelector("[data-site-aid-draft-status='imported']")
        ?.textContent,
    ).toContain("Ancien brouillon R23/R24 repris et migré");
    expect(
      container
        .querySelector("[data-site-aid-wizard-panel]")
        ?.getAttribute("data-site-aid-wizard-panel"),
    ).toBe("history");

    goToWizardStep(container, "application");
    expect(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-application-award-mode",
      ).value,
    ).toBe("unknown");
    expect(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-final-reviewer",
      ).value,
    ).toBe("");
    expect(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-document-1-label",
      ).value,
    ).toBe("");
  });

  it("imports R26 without erasing its fishery anchor or prospective pair and keeps later fields neutral", async () => {
    const r26Input = draftDecisionInput();
    r26Input.profile.verificationDate = "2026-07-26";
    r26Input.aid.instrumentKind = "grant";
    r26Input.aid.legalBasisStatus = "de-minimis";
    r26Input.aid.deMinimisRegime = "Règlement (UE) n° 717/2014";
    r26Input.aid.deMinimisFisheryFiscalYearStartDate = "2026-01-01";
    r26Input.aid.prospectiveDeMinimisAidValueAmount = 1_850;
    r26Input.aid.prospectiveDeMinimisAidValueEvidence =
      "Calcul ESB R26 communiqué par l’autorité.";
    const r26Envelope = JSON.parse(
      createSiteAidDraftJson(
        r26Input,
        createEmptySiteAidApplicationPreparation(),
        "legal",
        "2026-07-26T10:00:00.000Z",
      ),
    ) as {
      version: string;
      input: {
        profile: Record<string, unknown>;
        aid: Record<string, unknown>;
      };
    };
    r26Envelope.version = SITE_AID_DRAFT_R26_VERSION;
    delete r26Envelope.input.profile.deMinimisEuTerritorialStatus;
    delete r26Envelope.input.profile.deMinimisEuTerritorialEvidence;
    delete r26Envelope.input.profile.deMinimisEuTerritorialEvidenceDate;
    const r26Application = (
      r26Envelope as unknown as { application: Record<string, unknown> }
    ).application;
    delete r26Application.submissionStatus;
    delete r26Application.submissionDate;
    delete r26Application.submissionReceiptReference;
    delete r26Application.submittedPackageMatchesPreparedPackage;
    delete r26Envelope.input.aid.deMinimisFisheryPreviousFiscalYearStartDate;
    delete r26Envelope.input.aid
      .deMinimisFisherySecondPreviousFiscalYearStartDate;
    delete r26Envelope.input.aid.deMinimisFisheryCurrentFiscalYearEndDate;

    await chooseDraftFile(container, JSON.stringify(r26Envelope));

    expect(
      container.querySelector("[data-site-aid-draft-status='imported']")
        ?.textContent,
    ).toContain("Ancien brouillon R26 repris et migré en R29");
    expect(
      container
        .querySelector("[data-site-aid-unsaved-status]")
        ?.getAttribute("data-site-aid-unsaved-status"),
    ).toBe("unsaved");
    expect(
      controlById<HTMLInputElement>(
        container,
        "site-aid-de-minimis-fishery-fiscal-year-start",
      ).value,
    ).toBe("2026-01-01");
    expect(
      controlById<HTMLInputElement>(
        container,
        "site-aid-de-minimis-fishery-previous-fiscal-year-start",
      ).value,
    ).toBe("");
    expect(
      controlById<HTMLInputElement>(
        container,
        "site-aid-de-minimis-fishery-second-previous-fiscal-year-start",
      ).value,
    ).toBe("");
    expect(
      controlById<HTMLInputElement>(
        container,
        "site-aid-de-minimis-fishery-current-fiscal-year-end",
      ).value,
    ).toBe("");
    expect(
      controlById<HTMLInputElement>(
        container,
        "site-aid-prospective-de-minimis-aid-value",
      ).value,
    ).toBe("1850");
    goToWizardStep(container, "profile");
    expect(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-profile-eu-territorial-status",
      ).value,
    ).toBe("unknown");
    expect(
      controlById<HTMLTextAreaElement>(
        container,
        "site-aid-profile-eu-territorial-evidence",
      ).value,
    ).toBe("");
  });

  it("validates candidature unknowns locally and keeps dynamic pieces keyboard-reachable", () => {
    analyzeDossier(container);
    const applicationLink = issueLink(
      container,
      "confirmez si l’attribution relève d’un droit ou d’une sélection",
    );
    expect(applicationLink.tabIndex).toBe(0);
    applicationLink.focus();
    expect(document.activeElement).toBe(applicationLink);
    act(() => applicationLink.click());
    const awardMode = controlById<HTMLSelectElement>(
      container,
      "site-aid-application-award-mode",
    );
    expect(document.activeElement).toBe(awardMode);
    expect(awardMode.getAttribute("aria-invalid")).toBe("true");
    expect(
      container.querySelector(
        '[data-site-aid-local-error="site-aid-application-award-mode"]',
      )?.textContent,
    ).toContain("droit ou d’une sélection");

    const firstDocument = controlById<HTMLInputElement>(
      container,
      "site-aid-application-document-1-label",
    );
    expect(firstDocument.getAttribute("aria-invalid")).toBe("true");
    act(() => buttonByText(container, "Ajouter une pièce").click());
    expect(document.activeElement).toBe(
      controlById(container, "site-aid-application-document-2-label"),
    );
    act(() =>
      container
        .querySelector<HTMLButtonElement>(
          'button[aria-label="Supprimer la pièce 2"]',
        )
        ?.click(),
    );
    expect(document.activeElement).toBe(firstDocument);
    expect(
      buttonByText(container, "Retour à Vérifier vos réponses"),
    ).toBeTruthy();

    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-application-final-validation",
      ),
      "yes",
    );
    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-application-document-1-status",
      ),
      "in-progress",
    );
    act(() =>
      buttonByText(container, "Retour à Vérifier vos réponses").click(),
    );
    const incoherentValidation = issueLink(
      container,
      "la validation finale est déclarée, mais au moins une pièce reste",
    );
    act(() => incoherentValidation.click());
    expect(document.activeElement).toBe(
      controlById(container, "site-aid-application-final-validation"),
    );
  });

  it("enforces the fifty-piece UI bound after importing a valid R24 draft", async () => {
    const application = createEmptySiteAidApplicationPreparation();
    application.documents = Array.from(
      { length: SITE_AID_DRAFT_MAX_APPLICATION_DOCUMENTS },
      (_, index) => ({
        ...createEmptySiteAidApplicationDocument(),
        label: `Pièce ${index + 1}`,
        status: "in-progress" as const,
        owner: "Direction",
        format: "PDF",
        signatureStatus: "not-required" as const,
        deadline: "2026-09-30",
      }),
    );
    const draft = createSiteAidDraftJson(
      draftDecisionInput(),
      application,
      "application",
      "2026-07-26T10:00:00.000Z",
    );
    await chooseDraftFile(container, draft);

    expect(
      normalizedText(
        controlById(container, "site-aid-application-document-limit"),
      ),
    ).toContain(
      `${SITE_AID_DRAFT_MAX_APPLICATION_DOCUMENTS} sur ${SITE_AID_DRAFT_MAX_APPLICATION_DOCUMENTS} pièces utilisées`,
    );
    expect(buttonByText(container, "Ajouter une pièce").disabled).toBe(true);
    expect(
      container.querySelectorAll(
        '#site-aid-application-document-section [role="group"]',
      ),
    ).toHaveLength(SITE_AID_DRAFT_MAX_APPLICATION_DOCUMENTS);
  });

  it("shows corporate and current SGEI controls only on their exact branches and clears hidden values", () => {
    goToWizardStep(container, "legal");
    changeControl(
      controlById<HTMLSelectElement>(container, "site-aid-legal-basis-status"),
      "de-minimis",
    );

    goToWizardStep(container, "history");
    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-profile-corporate-event-status",
      ),
      "yes",
    );
    changeControl(
      controlById<HTMLTextAreaElement>(
        container,
        "site-aid-profile-corporate-event-evidence",
      ),
      "Traité de fusion F-2026-01",
    );
    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-profile-corporate-event-kind",
      ),
      "merger-acquisition",
    );
    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-profile-corporate-event-history-adjusted",
      ),
      "yes",
    );

    goToWizardStep(container, "proof");
    changeControl(
      controlById<HTMLInputElement>(container, "site-aid-de-minimis-regime"),
      "2023/2832",
    );
    completeCurrentSgeiChecks(container);
    expect(
      container.querySelector("#site-aid-current-sgei-section"),
    ).not.toBeNull();

    goToWizardStep(container, "cash");
    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-profile-corporate-event-status",
      ),
      "no",
    );
    expect(
      controlById<HTMLTextAreaElement>(
        container,
        "site-aid-profile-corporate-event-evidence",
      ).value,
    ).toBe("");
    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-profile-corporate-event-status",
      ),
      "yes",
    );
    expect(
      controlById<HTMLTextAreaElement>(
        container,
        "site-aid-profile-corporate-event-evidence",
      ).value,
    ).toBe("");

    goToWizardStep(container, "proof");
    const mandateStatus = controlById<HTMLSelectElement>(
      container,
      "site-aid-current-sgei-entrustment-status",
    );
    const mandateEvidence = controlById<HTMLInputElement>(
      container,
      "site-aid-current-sgei-entrustment-evidence",
    );
    changeControl(mandateStatus, "no");
    expect(mandateEvidence.value).toBe("");
    changeControl(mandateStatus, "yes");
    expect(mandateEvidence.value).toBe("");

    const compensationStatus = controlById<HTMLSelectElement>(
      container,
      "site-aid-current-sgei-compensation-status",
    );
    const compensationEvidence = controlById<HTMLInputElement>(
      container,
      "site-aid-current-sgei-compensation-evidence",
    );
    changeControl(compensationStatus, "yes");
    expect(compensationEvidence.value).toBe("");
    changeControl(compensationStatus, "no");
    expect(compensationEvidence.value).toBe("");

    changeControl(
      controlById<HTMLInputElement>(container, "site-aid-de-minimis-regime"),
      "2023/2831",
    );
    expect(
      container.querySelector("#site-aid-current-sgei-section"),
    ).toBeNull();
    changeControl(
      controlById<HTMLInputElement>(container, "site-aid-de-minimis-regime"),
      "2023/2832",
    );
    expect(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-current-sgei-entrustment-status",
      ).value,
    ).toBe("unknown");
    expect(
      controlById<HTMLInputElement>(
        container,
        "site-aid-current-sgei-entrustment-evidence",
      ).value,
    ).toBe("");
    expect(
      controlById<HTMLInputElement>(
        container,
        "site-aid-current-sgei-service-identity",
      ).value,
    ).toBe("");
    expect(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-current-sgei-compensation-status",
      ).value,
    ).toBe("unknown");
    expect(
      controlById<HTMLInputElement>(
        container,
        "site-aid-current-sgei-compensation-evidence",
      ).value,
    ).toBe("");

    changeControl(
      controlById<HTMLSelectElement>(container, "site-aid-legal-basis-status"),
      "unknown",
    );
    goToWizardStep(container, "cash");
    expect(
      container.querySelector("#site-aid-corporate-event-section"),
    ).toBeNull();
    goToWizardStep(container, "proof");
    changeControl(
      controlById<HTMLSelectElement>(container, "site-aid-legal-basis-status"),
      "de-minimis",
    );
    goToWizardStep(container, "cash");
    expect(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-profile-corporate-event-status",
      ).value,
    ).toBe("unknown");
    expect(
      controlById<HTMLTextAreaElement>(
        container,
        "site-aid-profile-corporate-event-evidence",
      ).value,
    ).toBe("");
  });

  it("integrates a transferred prediagnosis in review and JSON without converting declarations into legal inputs", async () => {
    const statuses = Object.fromEntries(
      SITE_AID_PREDIAGNOSIS_DEFINITIONS.map((definition) => [
        definition.id,
        definition.id === "expenses"
          ? "no"
          : definition.id === "source"
            ? "documented"
            : "confirm",
      ]),
    ) as Record<string, "documented" | "confirm" | "no">;
    const transfer = createSiteAidPreDiagnosisTransfer(
      statuses,
      {
        source: "URL officielle déclarée, à authentifier.",
        expenses: "Ligne de maintenance déclarée exclue.",
      },
      "2026-07-26T12:00:00.000Z",
    );

    act(() =>
      window.dispatchEvent(
        new CustomEvent(SITE_AID_PREDIAGNOSIS_TRANSFER_EVENT, {
          detail: transfer,
        }),
      ),
    );
    act(() => vi.advanceTimersToNextTimer());

    expect(document.activeElement).toBe(
      controlById(container, "site-aid-decision-title"),
    );
    expect(
      controlById(container, "site-aid-transferred-prediagnosis-summary")
        .textContent,
    ).toContain("1 non");
    expect(
      controlById<HTMLSelectElement>(container, "site-aid-gate-activity-status")
        .value,
    ).toBe("unknown");

    goToWizardStep(container, "review");
    expect(normalizedText(container)).toContain(
      "Dépenses admissibles — bloqueur déclaratif",
    );
    expect(normalizedText(container)).toContain(
      "Ligne de maintenance déclarée exclue",
    );

    const createObjectUrl = vi.fn((blob: Blob) => {
      void blob;
      return "blob:prediagnosis-r25";
    });
    Object.defineProperty(URL, "createObjectURL", {
      configurable: true,
      value: createObjectUrl,
    });
    Object.defineProperty(URL, "revokeObjectURL", {
      configurable: true,
      value: vi.fn(),
    });
    vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(
      () => undefined,
    );
    act(() => buttonByText(container, "Exporter le brouillon JSON").click());
    const json = await (
      createObjectUrl.mock.calls[0]?.[0] as unknown as Blob
    ).text();
    const exported = JSON.parse(json) as {
      version: string;
      prediagnosis: typeof transfer;
      input: { gates: { activity: string } };
    };
    expect(exported.version).toBe(SITE_AID_DRAFT_VERSION);
    expect(exported.prediagnosis).toEqual(transfer);
    expect(exported.input.gates.activity).toBe("unknown");
  });

  it("forces a transferred NO or CONFIRM to the global incomplete state without inventing a legal exclusion", async () => {
    completeFreshCandidateWithoutChangingStage(container);
    completeApplicationPreparation(container);
    const unresolvedStatuses = Object.fromEntries(
      SITE_AID_PREDIAGNOSIS_DEFINITIONS.map((definition) => [
        definition.id,
        definition.id === "expenses" ? "no" : "confirm",
      ]),
    ) as Record<string, "documented" | "confirm" | "no">;
    const unresolvedTransfer = createSiteAidPreDiagnosisTransfer(
      unresolvedStatuses,
      { expenses: "Ligne déclarée à reventiler." },
      "2026-07-26T10:00:00.000Z",
    );
    act(() =>
      window.dispatchEvent(
        new CustomEvent(SITE_AID_PREDIAGNOSIS_TRANSFER_EVENT, {
          detail: unresolvedTransfer,
        }),
      ),
    );

    analyzeDossier(container);
    const resultTitle = controlById(container, "site-aid-result-title");
    expect(resultTitle.textContent).toContain(
      "DOSSIER INCOMPLET — PRÉDIAGNOSTIC À RÉSOUDRE",
    );
    expect(resultTitle.textContent).not.toContain("PISTE À ÉCARTER");
    expect(resultTitle.closest("section")?.className).toContain(
      "border-amber-300",
    );
    expect(
      container.querySelector('[role="status"][aria-live="polite"]')
        ?.textContent,
    ).toContain("DOSSIER INCOMPLET — PRÉDIAGNOSTIC À RÉSOUDRE");
    const printReport =
      container.querySelector(".site-aid-print-report")?.textContent ?? "";
    expect(printReport).toContain("SYNTHÈSE GLOBALE R31");
    expect(printReport).toContain(
      "État effectif : DOSSIER INCOMPLET — PRÉDIAGNOSTIC À RÉSOUDRE",
    );
    expect(printReport).toContain("ne prouvent aucune exclusion juridique");

    const prediagnosisLink = issueLink(
      container,
      "Prédiagnostic — Dépenses admissibles",
    );
    expect(prediagnosisLink.getAttribute("href")).toBe(
      "#site-aid-prediagnosis-expenses-no",
    );

    const createObjectUrl = vi.fn((blob: Blob) => {
      void blob;
      return "blob:global-prediagnosis-r26";
    });
    Object.defineProperty(URL, "createObjectURL", {
      configurable: true,
      value: createObjectUrl,
    });
    Object.defineProperty(URL, "revokeObjectURL", {
      configurable: true,
      value: vi.fn(),
    });
    vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(
      () => undefined,
    );
    act(() => buttonByText(container, "Télécharger le dossier TXT").click());
    expect(
      await (createObjectUrl.mock.calls[0]?.[0] as unknown as Blob).text(),
    ).toContain("DOSSIER INCOMPLET — PRÉDIAGNOSTIC À RÉSOUDRE");

    const documentedStatuses = Object.fromEntries(
      SITE_AID_PREDIAGNOSIS_DEFINITIONS.map((definition) => [
        definition.id,
        "documented",
      ]),
    ) as Record<string, "documented">;
    const documentedEvidence = Object.fromEntries(
      SITE_AID_PREDIAGNOSIS_DEFINITIONS.map((definition) => [
        definition.id,
        `Preuve ${definition.id}`,
      ]),
    );
    act(() =>
      window.dispatchEvent(
        new CustomEvent(SITE_AID_PREDIAGNOSIS_TRANSFER_EVENT, {
          detail: createSiteAidPreDiagnosisTransfer(
            documentedStatuses,
            documentedEvidence,
            "2026-07-26T10:05:00.000Z",
          ),
        }),
      ),
    );
    analyzeDossier(container);
    expect(
      controlById(container, "site-aid-result-title").textContent,
    ).toContain("CANDIDAT À VÉRIFIER — AIDE BUDGÉTÉE À 0 €");
    expect(
      container.querySelector(".site-aid-print-report")?.textContent,
    ).not.toContain("SYNTHÈSE GLOBALE R31");
  });

  it("keeps a favorable engine result globally incomplete until the application is complete", async () => {
    completeFreshCandidateWithoutChangingStage(container);
    analyzeDossier(container);

    const resultTitle = controlById(container, "site-aid-result-title");
    expect(resultTitle.textContent).toContain(
      "DOSSIER INCOMPLET — CANDIDATURE À FINALISER",
    );
    expect(resultTitle.closest("section")?.className).toContain(
      "border-amber-300",
    );
    expect(
      container.querySelector('[role="status"][aria-live="polite"]')
        ?.textContent,
    ).toContain("DOSSIER INCOMPLET — CANDIDATURE À FINALISER");
    const incompletePrint =
      container.querySelector(".site-aid-print-report")?.textContent ?? "";
    expect(incompletePrint).toContain(
      "État effectif : DOSSIER INCOMPLET — CANDIDATURE À FINALISER",
    );
    expect(incompletePrint).toContain("Résultat moteur intermédiaire");
    expect(incompletePrint).not.toContain(
      "Verdict : CANDIDAT À VÉRIFIER — AIDE BUDGÉTÉE À 0 €",
    );

    const applicationLink = issueLink(
      container,
      "consignez les objectifs publiés par le financeur",
    );
    act(() => applicationLink.click());
    expect(document.activeElement).toBe(
      controlById(container, "site-aid-application-funder-objectives"),
    );

    const createObjectUrl = vi.fn((blob: Blob) => {
      void blob;
      return "blob:global-application-r26";
    });
    Object.defineProperty(URL, "createObjectURL", {
      configurable: true,
      value: createObjectUrl,
    });
    Object.defineProperty(URL, "revokeObjectURL", {
      configurable: true,
      value: vi.fn(),
    });
    vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(
      () => undefined,
    );
    goToWizardStep(container, "review");
    act(() => buttonByText(container, "Télécharger le dossier TXT").click());
    expect(
      await (createObjectUrl.mock.calls[0]?.[0] as unknown as Blob).text(),
    ).toContain("DOSSIER INCOMPLET — CANDIDATURE À FINALISER");

    completeApplicationPreparation(container);
    analyzeDossier(container);
    expect(
      controlById(container, "site-aid-result-title").textContent,
    ).toContain("CANDIDAT À VÉRIFIER — AIDE BUDGÉTÉE À 0 €");
    expect(
      container.querySelector(".site-aid-print-report")?.textContent,
    ).not.toContain("SYNTHÈSE GLOBALE R31");
    expect(
      container.querySelector('[role="status"][aria-live="polite"]')
        ?.textContent,
    ).toContain("CANDIDAT À VÉRIFIER — AIDE BUDGÉTÉE À 0 €");
  });

  it("keeps invalid and excluded engine verdicts above composite incompleteness everywhere", async () => {
    completeFreshCandidateWithoutChangingStage(container);
    goToWizardStep(container, "eligibility");
    changeControl(
      labelControl<HTMLSelectElement>(container, "Activité admise", "select"),
      "no",
    );
    analyzeDossier(container);

    const excludedTitle = controlById(container, "site-aid-result-title");
    expect(excludedTitle.textContent).toContain(
      "PISTE À ÉCARTER OU À FAIRE ARBITRER PAR ÉCRIT",
    );
    expect(excludedTitle.textContent).not.toContain("DOSSIER INCOMPLET");
    expect(excludedTitle.closest("section")?.className).toContain(
      "border-rose-300",
    );
    expect(
      container.querySelector('[role="status"][aria-live="polite"]')
        ?.textContent,
    ).toContain("PISTE À ÉCARTER OU À FAIRE ARBITRER PAR ÉCRIT");
    const excludedPrint =
      container.querySelector(".site-aid-print-report")?.textContent ?? "";
    expect(excludedPrint).toContain(
      "Verdict : PISTE À ÉCARTER OU À FAIRE ARBITRER PAR ÉCRIT",
    );
    expect(excludedPrint).not.toContain("État effectif : DOSSIER INCOMPLET");
    expect(excludedPrint).toContain("POINTS DE PRÉPARATION À TRAITER");

    goToWizardStep(container, "eligibility");
    const authority = labelControl<HTMLSelectElement>(
      container,
      "Guichet ou autorité applicable",
      "select",
    );
    const corruptOption = document.createElement("option");
    corruptOption.value = "corrupt";
    corruptOption.textContent = "Valeur corrompue";
    authority.append(corruptOption);
    changeControl(authority, "corrupt");
    analyzeDossier(container);

    const invalidTitle = controlById(container, "site-aid-result-title");
    expect(invalidTitle.textContent).toContain(
      "DOSSIER INVALIDE — CORRIGER LES DONNÉES",
    );
    expect(invalidTitle.textContent).not.toContain("DOSSIER INCOMPLET");
    expect(invalidTitle.closest("section")?.className).toContain(
      "border-rose-300",
    );
    expect(
      container.querySelector(".site-aid-print-report")?.textContent,
    ).toContain("Verdict : DOSSIER INVALIDE — CORRIGER LES DONNÉES");
  });

  it("focuses each transferred prediagnosis issue on its own editable control", async () => {
    act(() => root.unmount());
    container.innerHTML = "";
    root = createRoot(container);
    act(() =>
      root.render(
        <>
          <SiteAidPreDiagnosis />
          <SiteAidDecisionDossier />
        </>,
      ),
    );
    await act(async () => {
      vi.advanceTimersByTime(0);
      await Promise.resolve();
    });

    const statuses = Object.fromEntries(
      SITE_AID_PREDIAGNOSIS_DEFINITIONS.map((definition) => [
        definition.id,
        definition.id === "expenses" ? "no" : "confirm",
      ]),
    ) as Record<string, "no" | "confirm">;
    act(() =>
      window.dispatchEvent(
        new CustomEvent(SITE_AID_PREDIAGNOSIS_TRANSFER_EVENT, {
          detail: createSiteAidPreDiagnosisTransfer(
            statuses,
            { expenses: "Ligne du devis à reventiler." },
            "2026-07-26T10:00:00.000Z",
          ),
        }),
      ),
    );
    analyzeDossier(container);

    const expenseLink = issueLink(
      container,
      "Prédiagnostic — Dépenses admissibles",
    );
    expect(expenseLink.getAttribute("href")).toBe(
      "#site-aid-prediagnosis-expenses-no",
    );
    act(() => expenseLink.click());
    expect(document.activeElement).toBe(
      controlById(container, "site-aid-prediagnosis-expenses-no"),
    );

    const sourceLink = issueLink(
      container,
      "Prédiagnostic — Source officielle actuelle",
    );
    expect(sourceLink.getAttribute("href")).toBe(
      "#site-aid-prediagnosis-source-evidence",
    );
    act(() => sourceLink.click());
    expect(document.activeElement).toBe(
      controlById(container, "site-aid-prediagnosis-source-evidence"),
    );

    const links = SITE_AID_PREDIAGNOSIS_DEFINITIONS.map((definition) =>
      issueLink(container, `Prédiagnostic — ${definition.label}`),
    );
    const targets = links.map((link) => link.getAttribute("href"));
    expect(new Set(targets).size).toBe(
      SITE_AID_PREDIAGNOSIS_DEFINITIONS.length,
    );
    for (const target of targets) {
      const control = target
        ? document.getElementById(target.replace(/^#/, ""))
        : null;
      expect(
        control instanceof HTMLInputElement ||
          control instanceof HTMLTextAreaElement,
      ).toBe(true);
    }
  });

  it("invalidates analysis and final exports after a post-transfer prediagnosis edit", async () => {
    act(() => root.unmount());
    container.innerHTML = "";
    root = createRoot(container);
    act(() =>
      root.render(
        <>
          <SiteAidPreDiagnosis />
          <SiteAidDecisionDossier />
        </>,
      ),
    );
    await act(async () => {
      vi.advanceTimersByTime(0);
      await Promise.resolve();
    });

    completeFreshCandidateWithoutChangingStage(container);
    completeApplicationPreparation(container);
    const documentedStatuses = Object.fromEntries(
      SITE_AID_PREDIAGNOSIS_DEFINITIONS.map((definition) => [
        definition.id,
        "documented",
      ]),
    ) as Record<string, "documented">;
    const documentedEvidence = Object.fromEntries(
      SITE_AID_PREDIAGNOSIS_DEFINITIONS.map((definition) => [
        definition.id,
        `Preuve ${definition.id}`,
      ]),
    );
    act(() =>
      window.dispatchEvent(
        new CustomEvent(SITE_AID_PREDIAGNOSIS_TRANSFER_EVENT, {
          detail: createSiteAidPreDiagnosisTransfer(
            documentedStatuses,
            documentedEvidence,
            "2026-07-26T10:00:00.000Z",
          ),
        }),
      ),
    );
    analyzeDossier(container);
    expect(
      controlById(container, "site-aid-result-title").textContent,
    ).toContain("CANDIDAT À VÉRIFIER — AIDE BUDGÉTÉE À 0 €");
    const createObjectUrl = vi.fn(() => "blob:prediagnosis-stale-r27");
    Object.defineProperty(URL, "createObjectURL", {
      configurable: true,
      value: createObjectUrl,
    });
    Object.defineProperty(URL, "revokeObjectURL", {
      configurable: true,
      value: vi.fn(),
    });
    vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(
      () => undefined,
    );
    act(() => buttonByText(container, "Exporter le brouillon JSON").click());
    expect(
      container
        .querySelector("[data-site-aid-unsaved-status]")
        ?.getAttribute("data-site-aid-unsaved-status"),
    ).toBe("aligned");

    act(() =>
      controlById<HTMLInputElement>(
        container,
        "site-aid-prediagnosis-expenses-no",
      ).click(),
    );
    expect(
      container.querySelector("[data-site-aid-prediagnosis-stale='true']")
        ?.textContent,
    ).toContain("Retransfér");
    expect(buttonByText(container, "Télécharger le dossier TXT").disabled).toBe(
      true,
    );
    expect(buttonByText(container, "Imprimer le dossier").disabled).toBe(true);
    expect(container.querySelector(".site-aid-print-report")).toBeNull();
    expect(
      container
        .querySelector("[data-site-aid-unsaved-status]")
        ?.getAttribute("data-site-aid-unsaved-status"),
    ).toBe("unsaved");
    act(() => buttonByText(container, "Exporter le brouillon JSON").click());
    expect(
      container
        .querySelector("[data-site-aid-unsaved-status]")
        ?.getAttribute("data-site-aid-unsaved-status"),
    ).toBe("unsaved");
    expect(
      container.querySelector("[data-site-aid-draft-status]")?.textContent,
    ).toContain("sans les modifications non retransférées");

    act(() => buttonByText(container, "Analyser le dossier").click());
    expect(document.activeElement).toBe(
      controlById(container, "site-aid-prediagnosis-transfer-button"),
    );
    expect(container.querySelector(".site-aid-print-report")).toBeNull();

    act(() =>
      controlById<HTMLButtonElement>(
        container,
        "site-aid-prediagnosis-transfer-button",
      ).click(),
    );
    analyzeDossier(container);
    expect(
      controlById(container, "site-aid-result-title").textContent,
    ).toContain("DOSSIER INCOMPLET — PRÉDIAGNOSTIC À RÉSOUDRE");
  });

  it("requires and preserves a justification for every non-applicable document", async () => {
    loadBrittanyExampleWithoutAnalysis(container);
    goToWizardStep(container, "application");
    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-application-document-1-status",
      ),
      "not-applicable",
    );
    for (const id of [
      "site-aid-application-document-1-owner",
      "site-aid-application-document-1-format",
      "site-aid-application-document-1-signature",
      "site-aid-application-document-1-deadline",
    ]) {
      expect(container.querySelector(`#${id}`)).toBeNull();
    }
    expect(
      controlById<HTMLTextAreaElement>(
        container,
        "site-aid-application-document-1-not-applicable-justification",
      ).value,
    ).toBe("");

    analyzeDossier(container);
    expect(normalizedText(container)).toContain(
      "justifiez obligatoirement pourquoi la pièce est non applicable",
    );
    expect(normalizedText(container)).not.toContain(
      "pièce 1 : désignez le responsable",
    );
    expect(normalizedText(container)).not.toContain(
      "pièce 1 : confirmez le format attendu",
    );
    expect(normalizedText(container)).not.toContain(
      "pièce 1 : renseignez l’échéance",
    );
    goToWizardStep(container, "application");
    changeControl(
      controlById<HTMLTextAreaElement>(
        container,
        "site-aid-application-document-1-not-applicable-justification",
      ),
      "Le règlement dispense cette pièce pour les entreprises sans salarié ; article 4 à confirmer.",
    );
    analyzeDossier(container);
    expect(normalizedText(container)).toContain(
      "Le règlement dispense cette pièce pour les entreprises sans salarié",
    );
    expect(normalizedText(container)).toContain("ResponsableSans objet");
    expect(normalizedText(container)).toContain("FormatSans objet");
    expect(normalizedText(container)).toContain("SignatureSans objet");
    expect(normalizedText(container)).toContain("ÉchéanceSans objet");
    expect(
      container.querySelector(".site-aid-print-report")?.textContent,
    ).toContain(
      "Justification non applicable : Le règlement dispense cette pièce",
    );

    const createObjectUrl = vi.fn((blob: Blob) => {
      void blob;
      return "blob:document-na-r25";
    });
    Object.defineProperty(URL, "createObjectURL", {
      configurable: true,
      value: createObjectUrl,
    });
    Object.defineProperty(URL, "revokeObjectURL", {
      configurable: true,
      value: vi.fn(),
    });
    vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(
      () => undefined,
    );
    act(() => buttonByText(container, "Exporter le brouillon JSON").click());
    const exported = JSON.parse(
      await (createObjectUrl.mock.calls[0]?.[0] as unknown as Blob).text(),
    ) as {
      application: {
        documents: Array<{
          notApplicableJustification: string;
          owner: string;
          format: string;
          signatureStatus: string;
          deadline: string;
        }>;
      };
    };
    expect(
      exported.application.documents[0].notApplicableJustification,
    ).toContain("article 4 à confirmer");
    expect(exported.application.documents[0]).toMatchObject({
      owner: "Prestataire du site",
      format: "PDF",
      signatureStatus: "signed",
      deadline: "2026-09-20",
    });
  });

  it("shows and clears SGEI controls independently for every prior-aid row", () => {
    goToWizardStep(container, "cash");
    act(() => buttonByText(container, "Ajouter une aide antérieure").click());
    const registerStatus = controlById<HTMLSelectElement>(
      container,
      "site-aid-register-entry-1-legal-basis-status",
    );
    changeControl(registerStatus, "de-minimis");
    const registerRegime = controlById<HTMLInputElement>(
      container,
      "site-aid-register-entry-1-de-minimis-regime",
    );
    changeControl(registerRegime, "2023/2832");
    completeRegisterSgeiChecks(container, 0);

    expect(
      controlById<HTMLElement>(
        container,
        "site-aid-register-entry-1-sgei-entrustment-status",
      ),
    ).not.toBeNull();
    const registerMandateStatus = controlById<HTMLSelectElement>(
      container,
      "site-aid-register-entry-1-sgei-entrustment-status",
    );
    const registerMandateEvidence = controlById<HTMLInputElement>(
      container,
      "site-aid-register-entry-1-sgei-entrustment-evidence",
    );
    changeControl(registerMandateStatus, "no");
    expect(registerMandateEvidence.value).toBe("");
    changeControl(registerMandateStatus, "yes");
    expect(registerMandateEvidence.value).toBe("");
    const registerCompensationStatus = controlById<HTMLSelectElement>(
      container,
      "site-aid-register-entry-1-sgei-compensation-status",
    );
    const registerCompensationEvidence = controlById<HTMLInputElement>(
      container,
      "site-aid-register-entry-1-sgei-compensation-evidence",
    );
    changeControl(registerCompensationStatus, "yes");
    expect(registerCompensationEvidence.value).toBe("");
    changeControl(registerCompensationStatus, "no");
    expect(registerCompensationEvidence.value).toBe("");

    changeControl(registerRegime, "2023/2831");
    expect(
      container.querySelector(
        "#site-aid-register-entry-1-sgei-entrustment-status",
      ),
    ).toBeNull();

    changeControl(registerRegime, "2023/2832");
    expect(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-register-entry-1-sgei-entrustment-status",
      ).value,
    ).toBe("unknown");
    expect(
      controlById<HTMLInputElement>(
        container,
        "site-aid-register-entry-1-sgei-service-identity",
      ).value,
    ).toBe("");
    expect(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-register-entry-1-sgei-compensation-status",
      ).value,
    ).toBe("unknown");

    changeControl(registerStatus, "not-de-minimis");
    expect(
      container.querySelector(
        "#site-aid-register-entry-1-sgei-entrustment-status",
      ),
    ).toBeNull();
  });

  it("keeps verdict, TXT and print unavailable until a current analysis and expires all three after a decision mutation", async () => {
    goToWizardStep(container, "review");
    const download = buttonByText(container, "Télécharger le dossier TXT");
    const printButton = buttonByText(container, "Imprimer le dossier");
    const analyze = buttonByText(container, "Analyser le dossier");
    const createObjectUrl = vi.fn((blob: Blob): string => {
      void blob;
      return "blob:analysis-gated-report";
    });
    const print = vi.fn();
    const anchorClick = vi
      .spyOn(HTMLAnchorElement.prototype, "click")
      .mockImplementation(() => undefined);
    Object.defineProperty(URL, "createObjectURL", {
      configurable: true,
      value: createObjectUrl,
    });
    Object.defineProperty(URL, "revokeObjectURL", {
      configurable: true,
      value: vi.fn(),
    });
    Object.defineProperty(window, "print", {
      configurable: true,
      value: print,
    });

    const expectLocked = () => {
      expect(download.disabled).toBe(true);
      expect(printButton.disabled).toBe(true);
      expect(download.getAttribute("aria-describedby")).toBe(
        "site-aid-export-gate-help",
      );
      expect(printButton.getAttribute("aria-describedby")).toBe(
        "site-aid-export-gate-help",
      );
      expect(
        normalizedText(controlById(container, "site-aid-export-gate-help")),
      ).toContain("Aucun verdict, TXT ou rapport d’impression");
      expect(container.querySelector(".site-aid-print-report")).toBeNull();
      expect(
        container
          .querySelector("#site-aid-result-title")
          ?.closest("section")
          ?.querySelector("dl"),
      ).toBeNull();
    };

    expectLocked();
    act(() => download.click());
    act(() => printButton.click());
    expect(createObjectUrl).not.toHaveBeenCalled();
    expect(anchorClick).not.toHaveBeenCalled();
    expect(print).not.toHaveBeenCalled();

    loadBrittanyExampleWithoutAnalysis(container);
    expect(document.activeElement).toBe(analyze);
    expect(
      container.querySelector("#site-aid-result-title")?.textContent,
    ).toContain("DOSSIER EN COURS — VERDICT NON DEMANDÉ");
    expectLocked();
    act(() => download.click());
    act(() => printButton.click());
    expect(createObjectUrl).not.toHaveBeenCalled();
    expect(print).not.toHaveBeenCalled();

    act(() => analyze.click());
    expect(download.disabled).toBe(false);
    expect(printButton.disabled).toBe(false);
    const firstPrintableReport = container.querySelector<HTMLElement>(
      ".site-aid-print-report",
    );
    expect(firstPrintableReport).not.toBeNull();
    expect(firstPrintableReport?.textContent).toContain(
      "Référence : Exemple fictif Bretagne",
    );
    expect(firstPrintableReport?.textContent).toContain("Verdict :");
    expect(firstPrintableReport?.textContent).toContain(
      "Pièce post-attribution déclarée vérifiée — déclaration non authentifiée par le moteur : OUI",
    );

    act(() => download.click());
    act(() => printButton.click());
    expect(createObjectUrl).toHaveBeenCalledOnce();
    expect(anchorClick).toHaveBeenCalledOnce();
    expect(print).toHaveBeenCalledOnce();
    const firstBlob = createObjectUrl.mock.calls[0]?.[0] as Blob;
    const firstDownloadedReport = await firstBlob.text();
    expect(firstDownloadedReport.charCodeAt(0)).toBe(0xfeff);
    expect(firstDownloadedReport.slice(1)).toBe(
      firstPrintableReport?.textContent,
    );

    goToWizardStep(container, "profile");
    changeControl(
      labelControl<HTMLInputElement>(container, "Référence interne", "input"),
      "Projet modifié après analyse",
    );
    changeControl(
      labelControl<HTMLSelectElement>(
        container,
        "Pièce applicable vérifiée",
        "select",
      ),
      "unknown",
    );
    goToWizardStep(container, "review");
    const updatedDownload = buttonByText(
      container,
      "Télécharger le dossier TXT",
    );
    const updatedPrintButton = buttonByText(container, "Imprimer le dossier");
    expect(
      container.querySelector("#site-aid-result-title")?.textContent,
    ).toContain("ANALYSE PÉRIMÉE — RELANCE REQUISE");
    expect(updatedDownload.disabled).toBe(true);
    expect(updatedPrintButton.disabled).toBe(true);
    expect(container.querySelector(".site-aid-print-report")).toBeNull();
    expect(
      normalizedText(controlById(container, "site-aid-export-gate-help")),
    ).toContain("Analyse périmée");
    expect(
      container.querySelector("[data-site-aid-analysis-state='stale']"),
    ).not.toBeNull();
    act(() => updatedDownload.click());
    act(() => updatedPrintButton.click());
    expect(createObjectUrl).toHaveBeenCalledTimes(1);
    expect(print).toHaveBeenCalledTimes(1);

    act(() => buttonByText(container, "Analyser le dossier").click());
    expect(
      container.querySelector("#site-aid-result-title")?.textContent,
    ).toContain("DOSSIER INCOMPLET — VERDICT GLOBAL SUSPENDU");
    expect(updatedDownload.disabled).toBe(false);
    expect(updatedPrintButton.disabled).toBe(false);
    const reanalyzedPrintableReport = container.querySelector<HTMLElement>(
      ".site-aid-print-report",
    );
    expect(reanalyzedPrintableReport?.textContent).toContain(
      "Référence : Projet modifié après analyse",
    );
    expect(reanalyzedPrintableReport?.textContent).toContain(
      "Pièce post-attribution déclarée vérifiée — déclaration non authentifiée par le moteur : À CONFIRMER",
    );
    expect(reanalyzedPrintableReport?.textContent).toContain(
      "Vérification de la pièce post-attribution : statut à confirmer",
    );
    expect(reanalyzedPrintableReport?.textContent).not.toContain(
      "déclaration non authentifiée par le moteur : OUI",
    );
    act(() => updatedDownload.click());
    act(() => updatedPrintButton.click());
    expect(createObjectUrl).toHaveBeenCalledTimes(2);
    expect(print).toHaveBeenCalledTimes(2);
    const updatedBlob = createObjectUrl.mock.calls[1]?.[0] as Blob;
    expect((await updatedBlob.text()).slice(1)).toBe(
      reanalyzedPrintableReport?.textContent,
    );
  });

  it("recaptures a fresh absolute instant after an analyzed deadline is changed", () => {
    loadBrittanyExample(container);
    const initialReport =
      container.querySelector(".site-aid-print-report")?.textContent ?? "";
    const initialInstant = initialReport.match(
      /Instant absolu évalué : ([^\n]+)/,
    )?.[1];
    expect(initialInstant).toBeTruthy();

    vi.setSystemTime(new Date(2026, 6, 26, 13, 0, 0));
    goToWizardStep(container, "application");
    changeControl(
      controlById<HTMLInputElement>(container, "site-aid-application-deadline"),
      "2026-10-01",
    );
    goToWizardStep(container, "review");

    expect(
      container.querySelector("[data-site-aid-analysis-state='stale']"),
    ).not.toBeNull();
    expect(buttonByText(container, "Télécharger le dossier TXT").disabled).toBe(
      true,
    );
    expect(buttonByText(container, "Imprimer le dossier").disabled).toBe(true);
    expect(container.querySelector(".site-aid-print-report")).toBeNull();

    act(() => buttonByText(container, "Analyser le dossier").click());
    const refreshedReport =
      container.querySelector(".site-aid-print-report")?.textContent ?? "";
    const refreshedInstant = refreshedReport.match(
      /Instant absolu évalué : ([^\n]+)/,
    )?.[1];
    expect(refreshedInstant).toBeTruthy();
    expect(refreshedInstant).not.toBe(initialInstant);
    expect(
      container.querySelector("[data-site-aid-analysis-state='current']"),
    ).not.toBeNull();
    expect(buttonByText(container, "Télécharger le dossier TXT").disabled).toBe(
      false,
    );
  });

  it("refreshes editable civil-date bounds after midnight, expires sharing and keeps the prior analysis anchored until rerun", () => {
    loadBrittanyExample(container);
    goToWizardStep(container, "application");
    const deadlineVerificationId =
      "site-aid-application-deadline-verification-date";
    const historicalEvaluationInstant = normalizedText(
      controlById(
        container,
        "site-aid-application-deadline-evaluation-instant",
      ),
    );
    expect(historicalEvaluationInstant).toContain("2026-07-26T");
    expect(
      controlById<HTMLInputElement>(container, deadlineVerificationId).max,
    ).toBe("2026-07-26");

    vi.setSystemTime(new Date(2026, 6, 27, 12, 0, 0));
    act(() => window.dispatchEvent(new Event("focus")));
    expect(
      controlById<HTMLInputElement>(container, deadlineVerificationId).max,
    ).toBe("2026-07-27");
    expect(
      normalizedText(
        controlById(
          container,
          "site-aid-application-deadline-evaluation-instant",
        ),
      ),
    ).toBe(historicalEvaluationInstant);

    goToWizardStep(container, "review");
    expect(
      container.querySelector("[data-site-aid-analysis-state='stale']"),
    ).not.toBeNull();
    expect(buttonByText(container, "Télécharger le dossier TXT").disabled).toBe(
      true,
    );
    expect(buttonByText(container, "Imprimer le dossier").disabled).toBe(true);
    expect(container.querySelector(".site-aid-print-report")).toBeNull();

    vi.setSystemTime(new Date(2026, 6, 28, 12, 0, 0));
    act(() => window.dispatchEvent(new Event("pageshow")));
    goToWizardStep(container, "application");
    expect(
      controlById<HTMLInputElement>(container, deadlineVerificationId).max,
    ).toBe("2026-07-28");

    const visibilityState = vi.spyOn(document, "visibilityState", "get");
    vi.setSystemTime(new Date(2026, 6, 29, 12, 0, 0));
    visibilityState.mockReturnValue("hidden");
    act(() => document.dispatchEvent(new Event("visibilitychange")));
    expect(
      controlById<HTMLInputElement>(container, deadlineVerificationId).max,
    ).toBe("2026-07-28");
    visibilityState.mockReturnValue("visible");
    act(() => document.dispatchEvent(new Event("visibilitychange")));
    expect(
      controlById<HTMLInputElement>(container, deadlineVerificationId).max,
    ).toBe("2026-07-29");

    goToWizardStep(container, "profile");
    const profileVerification = controlById<HTMLInputElement>(
      container,
      "site-aid-profile-verification-date",
    );
    expect(profileVerification.max).toBe("2026-07-29");
    changeControl(profileVerification, "2026-07-29");
    const territorialEvidenceDate = controlById<HTMLInputElement>(
      container,
      "site-aid-profile-eu-territorial-evidence-date",
    );
    expect(territorialEvidenceDate.max).toBe("2026-07-29");
    changeControl(territorialEvidenceDate, "2026-07-29");

    goToWizardStep(container, "application");
    changeControl(
      controlById<HTMLInputElement>(container, deadlineVerificationId),
      "2026-07-29",
    );
    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-application-submission-status",
      ),
      "submitted",
    );
    const submissionDate = controlById<HTMLInputElement>(
      container,
      "site-aid-application-submission-date",
    );
    expect(submissionDate.max).toBe("2026-07-29");
    changeControl(submissionDate, "2026-07-29");
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-submission-receipt-reference",
      ),
      "DEP-2026-0729",
    );
    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-application-submitted-package-check",
      ),
      "yes",
    );
    expect(
      normalizedText(
        controlById(
          container,
          "site-aid-application-deadline-evaluation-instant",
        ),
      ),
    ).toContain("2026-07-26T");

    goToWizardStep(container, "review");
    expect(
      container.querySelector("[data-site-aid-analysis-state='stale']"),
    ).not.toBeNull();
    expect(container.querySelector(".site-aid-print-report")).toBeNull();

    act(() => buttonByText(container, "Analyser le dossier").click());
    const refreshedReport =
      container.querySelector(".site-aid-print-report")?.textContent ?? "";
    expect(refreshedReport).toContain(
      "Date locale d’analyse injectée : 2026-07-29",
    );
    expect(
      container.querySelector("[data-site-aid-analysis-state='current']"),
    ).not.toBeNull();
  });

  it("wakes at the next local date, locks decision outputs and preserves the historical evaluation instant", () => {
    act(() => root.unmount());
    container.innerHTML = "";
    vi.setSystemTime(new Date(2026, 6, 26, 23, 59, 59, 900));
    root = createRoot(container);
    act(() => {
      root.render(<SiteAidDecisionDossier />);
    });
    act(() => vi.advanceTimersByTime(0));
    loadBrittanyExample(container);

    goToWizardStep(container, "application");
    const deadlineVerificationId =
      "site-aid-application-deadline-verification-date";
    const historicalEvaluationInstant = normalizedText(
      controlById(
        container,
        "site-aid-application-deadline-evaluation-instant",
      ),
    );
    expect(historicalEvaluationInstant).toContain("2026-07-26T");
    expect(
      controlById<HTMLInputElement>(container, deadlineVerificationId).max,
    ).toBe("2026-07-26");

    goToWizardStep(container, "review");
    expect(buttonByText(container, "Télécharger le dossier TXT").disabled).toBe(
      false,
    );
    expect(buttonByText(container, "Imprimer le dossier").disabled).toBe(false);

    act(() => vi.advanceTimersByTime(100));

    expect(
      container.querySelector("[data-site-aid-analysis-state='stale']"),
    ).not.toBeNull();
    expect(buttonByText(container, "Télécharger le dossier TXT").disabled).toBe(
      true,
    );
    expect(buttonByText(container, "Imprimer le dossier").disabled).toBe(true);
    expect(container.querySelector(".site-aid-print-report")).toBeNull();
    expect(normalizedText(container)).toContain(
      "relancez l’analyse pour actualiser le verdict, le TXT et l’impression",
    );

    goToWizardStep(container, "application");
    expect(
      controlById<HTMLInputElement>(container, deadlineVerificationId).max,
    ).toBe("2026-07-27");
    expect(
      normalizedText(
        controlById(
          container,
          "site-aid-application-deadline-evaluation-instant",
        ),
      ),
    ).toBe(historicalEvaluationInstant);
  });

  it("rechecks the local date synchronously before TXT and print when the scheduled wake-up has not fired", () => {
    loadBrittanyExample(container);
    const createObjectUrl = vi.fn(() => "blob:must-not-be-created");
    const anchorClick = vi
      .spyOn(HTMLAnchorElement.prototype, "click")
      .mockImplementation(() => undefined);
    const print = vi.fn();
    Object.defineProperty(URL, "createObjectURL", {
      configurable: true,
      value: createObjectUrl,
    });
    Object.defineProperty(window, "print", {
      configurable: true,
      value: print,
    });

    goToWizardStep(container, "application");
    const historicalEvaluationInstant = normalizedText(
      controlById(
        container,
        "site-aid-application-deadline-evaluation-instant",
      ),
    );
    goToWizardStep(container, "review");
    const download = buttonByText(container, "Télécharger le dossier TXT");
    const printButton = buttonByText(container, "Imprimer le dossier");
    expect(download.disabled).toBe(false);
    expect(printButton.disabled).toBe(false);

    vi.setSystemTime(new Date(2026, 6, 27, 0, 0, 1));
    act(() => {
      download.click();
      printButton.click();
    });

    expect(createObjectUrl).not.toHaveBeenCalled();
    expect(anchorClick).not.toHaveBeenCalled();
    expect(print).not.toHaveBeenCalled();
    expect(
      container.querySelector("[data-site-aid-analysis-state='stale']"),
    ).not.toBeNull();
    expect(download.disabled).toBe(true);
    expect(printButton.disabled).toBe(true);
    expect(container.querySelector(".site-aid-print-report")).toBeNull();
    expect(normalizedText(container)).toContain(
      "Date locale modifiée. Analyse périmée",
    );

    goToWizardStep(container, "application");
    expect(
      normalizedText(
        controlById(
          container,
          "site-aid-application-deadline-evaluation-instant",
        ),
      ),
    ).toBe(historicalEvaluationInstant);
  });

  it("expires analysis on row additions and removals but not on navigation or JSON download", () => {
    loadBrittanyExample(container);
    goToWizardStep(container, "profile");
    goToWizardStep(container, "quote");
    goToWizardStep(container, "review");
    expect(
      container.querySelector("[data-site-aid-analysis-state='current']"),
    ).not.toBeNull();

    Object.defineProperty(URL, "createObjectURL", {
      configurable: true,
      value: vi.fn(() => "blob:navigation-does-not-expire-analysis"),
    });
    Object.defineProperty(URL, "revokeObjectURL", {
      configurable: true,
      value: vi.fn(),
    });
    vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(
      () => undefined,
    );
    act(() => buttonByText(container, "Exporter le brouillon JSON").click());
    expect(
      container.querySelector("[data-site-aid-analysis-state='current']"),
    ).not.toBeNull();
    expect(buttonByText(container, "Télécharger le dossier TXT").disabled).toBe(
      false,
    );

    goToWizardStep(container, "quote");
    act(() => buttonByText(container, "Ajouter une ligne").click());
    goToWizardStep(container, "review");
    expect(
      container.querySelector("[data-site-aid-analysis-state='stale']"),
    ).not.toBeNull();
    expect(buttonByText(container, "Télécharger le dossier TXT").disabled).toBe(
      true,
    );

    act(() => buttonByText(container, "Analyser le dossier").click());
    expect(
      container.querySelector("[data-site-aid-analysis-state='current']"),
    ).not.toBeNull();
    goToWizardStep(container, "quote");
    act(() => buttonByText(container, "Supprimer la ligne 2").click());
    goToWizardStep(container, "review");
    expect(
      container.querySelector("[data-site-aid-analysis-state='stale']"),
    ).not.toBeNull();
    expect(buttonByText(container, "Imprimer le dossier").disabled).toBe(true);
  });

  it("uses valid definition-list groups for every visible result card", async () => {
    loadBrittanyExample(container);
    const resultSection = container
      .querySelector("#site-aid-result-title")
      ?.closest("section");
    const resultList = resultSection?.querySelector("dl");
    if (!(resultList instanceof HTMLDListElement)) {
      throw new Error("Liste de résultats introuvable");
    }

    const resultGroups = [...resultList.children];
    expect(resultGroups.length).toBeGreaterThan(5);
    for (const group of resultGroups) {
      expect(group.tagName).toBe("DIV");
      expect([...group.children].map((child) => child.tagName)).toEqual([
        "DT",
        "DD",
      ]);
      const term = group.querySelector(":scope > dt");
      const definition = group.querySelector(":scope > dd");
      expect(term).not.toBeNull();
      expect(definition).not.toBeNull();
      expect(term?.nextElementSibling).toBe(definition);
      expect(group.querySelector(":scope > p")).toBeNull();
      expect(definition?.querySelector("p")).toBeNull();
    }

    vi.useRealTimers();
    let axeResults: axe.AxeResults;
    try {
      axeResults = await axe.run<axe.AxeResults>(resultList, {
        runOnly: { type: "rule", values: ["definition-list"] },
      });
    } finally {
      vi.useFakeTimers();
      vi.setSystemTime(new Date(2026, 6, 26, 12, 0, 0));
    }
    expect(
      axeResults.violations.map((violation) => ({
        id: violation.id,
        targets: violation.nodes.map((node) => node.target),
      })),
    ).toEqual([]);
  });

  it("passes the full axe-core ruleset for an empty submitted dossier", async () => {
    analyzeDossier(container);
    goToWizardStep(container, "profile");
    expect(
      container.querySelectorAll("[data-site-aid-local-error]").length,
    ).toBeGreaterThan(0);
    await expectNoAxeViolationsAcrossWizard(container);
  });

  it("passes the full axe-core ruleset for the incomplete Brittany example", async () => {
    loadBrittanyExample(container);
    await expectNoAxeViolationsAcrossWizard(container);
  });

  it("passes the full axe-core ruleset with dynamic prior-aid rows", async () => {
    loadBrittanyExample(container);
    goToWizardStep(container, "history");
    act(() => buttonByText(container, "Ajouter une aide antérieure").click());
    act(() => buttonByText(container, "Ajouter une aide antérieure").click());
    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-register-entry-1-legal-basis-status",
      ),
      "de-minimis",
    );
    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-register-entry-2-legal-basis-status",
      ),
      "not-de-minimis",
    );

    expect(
      container.querySelectorAll("#site-aid-register-section [role='group']"),
    ).toHaveLength(2);
    await expectNoAxeViolationsAcrossWizard(container);
  });

  it("passes axe with corporate-event and current/register SGEI branches fully rendered", async () => {
    loadBrittanyExample(container);
    goToWizardStep(container, "history");
    const corporateStatus = controlById<HTMLSelectElement>(
      container,
      "site-aid-profile-corporate-event-status",
    );
    changeControl(corporateStatus, "yes");
    changeControl(
      controlById<HTMLTextAreaElement>(
        container,
        "site-aid-profile-corporate-event-evidence",
      ),
      "Traité de fusion F-2026-01, sociétés parties et aides antérieures vérifiés",
    );
    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-profile-corporate-event-kind",
      ),
      "merger-acquisition",
    );
    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-profile-corporate-event-history-adjusted",
      ),
      "yes",
    );
    goToWizardStep(container, "legal");
    changeControl(
      controlById<HTMLInputElement>(container, "site-aid-de-minimis-regime"),
      "2023/2832",
    );
    completeCurrentSgeiChecks(container);

    goToWizardStep(container, "history");
    act(() => buttonByText(container, "Ajouter une aide antérieure").click());
    completeDeMinimisRegisterEntry(container, 0, "SAS du cas pédagogique");
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-register-entry-1-de-minimis-regime",
      ),
      "2023/2832",
    );
    completeRegisterSgeiChecks(container, 0);

    goToWizardStep(container, "legal");
    expect(
      container.querySelector("#site-aid-current-sgei-section"),
    ).not.toBeNull();
    goToWizardStep(container, "history");
    expect(
      container.querySelector(
        "[aria-labelledby='site-aid-register-entry-1-sgei-title']",
      ),
    ).not.toBeNull();
    const ids = [...container.querySelectorAll<HTMLElement>("[id]")].map(
      (element) => element.id,
    );
    expect(new Set(ids).size).toBe(ids.length);
    await expectNoAxeViolationsAcrossWizard(container);
  });

  it("links corporate-event errors to status, evidence, kind and adjusted history with keyboard focus", () => {
    goToWizardStep(container, "proof");
    changeControl(
      controlById<HTMLSelectElement>(container, "site-aid-legal-basis-status"),
      "de-minimis",
    );
    changeControl(
      controlById<HTMLInputElement>(container, "site-aid-de-minimis-regime"),
      "2023/2831",
    );
    analyzeDossier(container);
    goToWizardStep(container, "cash");

    const corporateStatus = controlById<HTMLSelectElement>(
      container,
      "site-aid-profile-corporate-event-status",
    );
    expectIssueTarget(
      container,
      "Restructuration de l’entreprise pour le cumul de minimis : statut à confirmer",
      corporateStatus,
    );

    changeControl(corporateStatus, "no");
    const corporateEvidence = controlById<HTMLTextAreaElement>(
      container,
      "site-aid-profile-corporate-event-evidence",
    );
    expectIssueTarget(
      container,
      "Restructuration de l’entreprise pour le cumul de minimis : preuve manquante",
      corporateEvidence,
    );

    changeControl(corporateStatus, "yes");
    const corporateKind = controlById<HTMLSelectElement>(
      container,
      "site-aid-profile-corporate-event-kind",
    );
    const adjustedHistory = controlById<HTMLSelectElement>(
      container,
      "site-aid-profile-corporate-event-history-adjusted",
    );
    expectIssueTarget(
      container,
      "Type de fusion, acquisition ou scission : préciser",
      corporateKind,
    );
    expectIssueTarget(
      container,
      "Restructuration de l’entreprise pour le cumul de minimis : preuve manquante",
      corporateEvidence,
    );
    expectIssueTarget(
      container,
      "Registre après fusion, acquisition ou scission : statut à confirmer",
      adjustedHistory,
    );

    const keyboardLink = issueLink(
      container,
      "Registre après fusion, acquisition ou scission : statut à confirmer",
    );
    const keyboardActivation = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      detail: 0,
    });
    act(() => {
      keyboardLink.focus();
      keyboardLink.dispatchEvent(keyboardActivation);
    });
    expect(keyboardActivation.defaultPrevented).toBe(true);
    expect(document.activeElement).toBe(
      controlById(
        container,
        "site-aid-profile-corporate-event-history-adjusted",
      ),
    );
  });

  it("routes current SGEI errors and treats YES compensation as the blocking answer", () => {
    goToWizardStep(container, "proof");
    changeControl(
      controlById<HTMLSelectElement>(container, "site-aid-legal-basis-status"),
      "de-minimis",
    );
    changeControl(
      controlById<HTMLInputElement>(container, "site-aid-de-minimis-regime"),
      "2023/2832",
    );
    goToWizardStep(container, "cash");
    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-profile-corporate-event-status",
      ),
      "no",
    );
    changeControl(
      controlById<HTMLTextAreaElement>(
        container,
        "site-aid-profile-corporate-event-evidence",
      ),
      "Attestation datée : aucune restructuration pertinente",
    );
    analyzeDossier(container);
    goToWizardStep(container, "proof");

    const mandateStatus = controlById<HTMLSelectElement>(
      container,
      "site-aid-current-sgei-entrustment-status",
    );
    const mandateEvidence = controlById<HTMLInputElement>(
      container,
      "site-aid-current-sgei-entrustment-evidence",
    );
    const serviceIdentity = controlById<HTMLInputElement>(
      container,
      "site-aid-current-sgei-service-identity",
    );
    const compensationStatus = controlById<HTMLSelectElement>(
      container,
      "site-aid-current-sgei-compensation-status",
    );
    const compensationEvidence = controlById<HTMLInputElement>(
      container,
      "site-aid-current-sgei-compensation-evidence",
    );

    expectIssueTarget(
      container,
      "Aide courante, mandat SIEG : statut à confirmer",
      mandateStatus,
    );
    expectIssueTarget(
      container,
      "Aide courante, identité du SIEG",
      serviceIdentity,
    );
    expectIssueTarget(
      container,
      "Aide courante, autre compensation du même SIEG : statut à confirmer",
      compensationStatus,
    );

    changeControl(mandateStatus, "yes");
    expect(normalizedText(mandateStatus.parentElement ?? container)).toContain(
      "Oui — mandat écrit ou électronique vérifié",
    );
    changeControl(serviceIdentity, "Service numérique territorial 2026");
    changeControl(compensationStatus, "no");
    expectIssueTarget(
      container,
      "Aide courante, preuve du mandat SIEG",
      mandateEvidence,
    );
    expectIssueTarget(
      container,
      "Aide courante, preuve sur les compensations du même SIEG",
      compensationEvidence,
    );

    changeControl(mandateEvidence, "Mandat M-2026-01 vérifié");
    changeControl(
      compensationEvidence,
      "Réponse écrite : aucune autre compensation pour ce service",
    );
    changeControl(compensationStatus, "yes");
    expect(
      controlById<HTMLInputElement>(container, compensationEvidence.id).value,
    ).toBe("");
    expectIssueTarget(
      container,
      "Aide courante, autre compensation du même SIEG : statut « OUI »",
      compensationStatus,
    );
    expect(
      normalizedText(compensationStatus.parentElement ?? container),
    ).toContain("Oui — autre compensation présente, cumul bloqué");
  });

  it("routes every prior-aid SGEI error to its own row and evidence control", () => {
    goToWizardStep(container, "cash");
    act(() => buttonByText(container, "Ajouter une aide antérieure").click());
    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-register-entry-1-legal-basis-status",
      ),
      "de-minimis",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-register-entry-1-de-minimis-regime",
      ),
      "2023/2832",
    );
    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-profile-corporate-event-status",
      ),
      "no",
    );
    changeControl(
      controlById<HTMLTextAreaElement>(
        container,
        "site-aid-profile-corporate-event-evidence",
      ),
      "Attestation datée : aucune restructuration pertinente",
    );
    analyzeDossier(container);
    goToWizardStep(container, "cash");

    const mandateStatus = controlById<HTMLSelectElement>(
      container,
      "site-aid-register-entry-1-sgei-entrustment-status",
    );
    const mandateEvidence = controlById<HTMLInputElement>(
      container,
      "site-aid-register-entry-1-sgei-entrustment-evidence",
    );
    const serviceIdentity = controlById<HTMLInputElement>(
      container,
      "site-aid-register-entry-1-sgei-service-identity",
    );
    const compensationStatus = controlById<HTMLSelectElement>(
      container,
      "site-aid-register-entry-1-sgei-compensation-status",
    );
    const compensationEvidence = controlById<HTMLInputElement>(
      container,
      "site-aid-register-entry-1-sgei-compensation-evidence",
    );

    expectIssueTarget(
      container,
      "Registre, aide 1, mandat SIEG : statut à confirmer",
      mandateStatus,
    );
    expectIssueTarget(
      container,
      "Registre, aide 1, identité du SIEG",
      serviceIdentity,
    );
    expectIssueTarget(
      container,
      "Registre, aide 1, autre compensation du même SIEG : statut à confirmer",
      compensationStatus,
    );

    changeControl(mandateStatus, "yes");
    changeControl(serviceIdentity, "Service SIEG antérieur 1");
    changeControl(compensationStatus, "no");
    expectIssueTarget(
      container,
      "Registre, aide 1, preuve du mandat SIEG",
      mandateEvidence,
    );
    expectIssueTarget(
      container,
      "Registre, aide 1, preuve sur les compensations du même SIEG",
      compensationEvidence,
    );

    const keyboardLink = issueLink(
      container,
      "Registre, aide 1, preuve sur les compensations du même SIEG",
    );
    const keyboardActivation = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      detail: 0,
    });
    act(() => {
      keyboardLink.focus();
      keyboardLink.dispatchEvent(keyboardActivation);
    });
    expect(keyboardActivation.defaultPrevented).toBe(true);
    expect(document.activeElement).toBe(
      controlById(container, compensationEvidence.id),
    );
  });

  it("keeps generic HTTPS authority guidance tied to the URL control", () => {
    const authorityUrl = controlById<HTMLInputElement>(
      container,
      "site-aid-authority-url",
    );
    const helpId = "site-aid-authority-url-help";
    expect(
      authorityUrl.getAttribute("aria-describedby")?.split(/\s+/),
    ).toContain(helpId);
    const help = controlById<HTMLElement>(container, helpId);
    const helpText = normalizedText(help);
    expect(helpText).toContain("adresse HTTPS directe");
    expect(helpText).toContain(
      "le domaine appartient bien à l’organisme déclaré",
    );
    expect(helpText).toContain("n’authentifie ni le domaine ni son contenu");
    expect(helpText).not.toMatch(/gouv\.fr|eur-lex|data\.europa/i);
  });

  it("links the post-award verification and evidence controls in one accessible group", () => {
    const group = controlById<HTMLElement>(
      container,
      "site-aid-post-award-group",
    );
    const status = controlById<HTMLSelectElement>(
      container,
      "site-aid-authority-post-award-verified",
    );
    const evidence = controlById<HTMLTextAreaElement>(
      container,
      "site-aid-authority-post-award",
    );
    const help = controlById<HTMLElement>(
      container,
      "site-aid-post-award-help",
    );

    expect(group.getAttribute("role")).toBe("group");
    expect(group.getAttribute("aria-labelledby")).toBe(
      "site-aid-post-award-group-title",
    );
    expect(group.getAttribute("aria-describedby")).toBe(
      "site-aid-post-award-help",
    );
    for (const control of [group, status, evidence]) {
      for (const idref of [
        ...(control.getAttribute("aria-labelledby") ?? "").split(/\s+/),
        ...(control.getAttribute("aria-describedby") ?? "").split(/\s+/),
      ].filter(Boolean)) {
        expect(
          document.getElementById(idref),
          `IDREF absent : ${idref}`,
        ).not.toBeNull();
      }
    }
    expect(status.labels?.[0]?.textContent).toContain(
      "Pièce applicable vérifiée",
    );
    expect(evidence.labels?.[0]?.textContent).toContain("contenu probant");
    expect(normalizedText(help)).toContain(
      "Seul « Oui — pièce applicable vérifiée »",
    );
    expect(normalizedText(help)).toContain(
      "« Non » ou « À confirmer » suspend le verdict",
    );
    expect(normalizedText(help)).toContain(
      "n’authentifie ni le document, ni son applicabilité, ni son contenu",
    );
    const ids = [...container.querySelectorAll<HTMLElement>("[id]")].map(
      (element) => element.id,
    );
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("confirms before replacing a modified four-line and two-aid draft", () => {
    const loadTrigger = buttonByText(container, "Charger l’exemple Bretagne");
    const focusSpy = vi.spyOn(HTMLElement.prototype, "focus");
    focusSpy.mockClear();
    act(() => loadTrigger.click());
    expect(
      container.querySelector("#site-aid-example-confirmation"),
    ).toBeNull();
    const analysisTrigger = buttonByText(container, "Analyser le dossier");
    expect(container.querySelector("#site-aid-error-summary")).toBeNull();
    expect(document.activeElement).toBe(analysisTrigger);
    expect(focusSpy).toHaveBeenCalledTimes(1);
    focusSpy.mockClear();
    act(() => analysisTrigger.click());
    const directExampleErrorSummary = container.querySelector(
      "#site-aid-error-summary",
    );
    expect(document.activeElement).toBe(directExampleErrorSummary);
    expect(focusSpy).toHaveBeenCalledTimes(1);

    goToWizardStep(container, "profile");
    expect(
      labelControl<HTMLInputElement>(container, "Référence interne", "input")
        .value,
    ).toBe("Exemple fictif Bretagne");

    goToWizardStep(container, "quote");
    act(() => buttonByText(container, "Ajouter une ligne").click());
    for (let lineNumber = 1; lineNumber <= 4; lineNumber += 1) {
      changeControl(
        controlById<HTMLInputElement>(
          container,
          `site-aid-quote-line-${lineNumber}-label`,
        ),
        `Brouillon devis ${lineNumber}`,
      );
    }
    const quoteDraftValues = new Map(
      [
        ...container.querySelectorAll<HTMLInputElement | HTMLSelectElement>(
          "#site-aid-quote-section input[id], #site-aid-quote-section select[id]",
        ),
      ].map((control) => [control.id, control.value]),
    );

    goToWizardStep(container, "cash");
    act(() => buttonByText(container, "Ajouter une aide antérieure").click());
    act(() => buttonByText(container, "Ajouter une aide antérieure").click());
    for (let entryNumber = 1; entryNumber <= 2; entryNumber += 1) {
      changeControl(
        controlById<HTMLInputElement>(
          container,
          `site-aid-register-entry-${entryNumber}-authority`,
        ),
        `Organisme brouillon ${entryNumber}`,
      );
      changeControl(
        controlById<HTMLInputElement>(
          container,
          `site-aid-register-entry-${entryNumber}-scheme`,
        ),
        `Dispositif brouillon ${entryNumber}`,
      );
    }
    const registerDraftValues = new Map(
      [
        ...container.querySelectorAll<HTMLInputElement | HTMLSelectElement>(
          "#site-aid-register-section input[id], #site-aid-register-section select[id]",
        ),
      ].map((control) => [control.id, control.value]),
    );

    act(() => loadTrigger.click());
    const confirmationGroup = container.querySelector<HTMLElement>(
      "#site-aid-example-confirmation",
    );
    const cancel = buttonByText(container, "Annuler et conserver le brouillon");
    expect(confirmationGroup?.getAttribute("role")).toBe("group");
    expect(confirmationGroup?.getAttribute("aria-labelledby")).toBe(
      "site-aid-example-confirm-title",
    );
    expect(confirmationGroup?.getAttribute("aria-describedby")).toBe(
      "site-aid-example-confirm-description",
    );
    expect(
      confirmationGroup?.matches('[role="alert"], [role="alertdialog"]'),
    ).toBe(false);
    expect(document.activeElement).toBe(cancel);

    const escapeCancel = new KeyboardEvent("keydown", {
      key: "Escape",
      bubbles: true,
      cancelable: true,
    });
    act(() => cancel.dispatchEvent(escapeCancel));
    expect(escapeCancel.defaultPrevented).toBe(true);
    expect(document.activeElement).toBe(loadTrigger);
    expect(
      container.querySelector("#site-aid-example-confirmation"),
    ).toBeNull();
    goToWizardStep(container, "quote");
    for (const [id, value] of quoteDraftValues) {
      expect(
        controlById<HTMLInputElement | HTMLSelectElement>(container, id).value,
      ).toBe(value);
    }
    expect(
      container.querySelectorAll("#site-aid-quote-section [role='group']"),
    ).toHaveLength(4);
    goToWizardStep(container, "cash");
    for (const [id, value] of registerDraftValues) {
      expect(
        controlById<HTMLInputElement | HTMLSelectElement>(container, id).value,
      ).toBe(value);
    }
    expect(
      container.querySelectorAll("#site-aid-register-section [role='group']"),
    ).toHaveLength(2);

    const keyboardLoad = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      detail: 0,
    });
    act(() => loadTrigger.dispatchEvent(keyboardLoad));
    expect(document.activeElement?.textContent).toContain(
      "Annuler et conserver le brouillon",
    );
    focusSpy.mockClear();
    act(() => buttonByText(container, "Confirmer le remplacement").click());
    expect(document.activeElement).toBe(
      buttonByText(container, "Analyser le dossier"),
    );
    expect(focusSpy).toHaveBeenCalledTimes(1);

    goToWizardStep(container, "profile");
    expect(
      labelControl<HTMLInputElement>(container, "Référence interne", "input")
        .value,
    ).toBe("Exemple fictif Bretagne");
    goToWizardStep(container, "quote");
    expect(
      container.querySelectorAll("#site-aid-quote-section [role='group']"),
    ).toHaveLength(3);
    goToWizardStep(container, "cash");
    expect(
      container.querySelectorAll("#site-aid-register-section [role='group']"),
    ).toHaveLength(0);
    goToWizardStep(container, "review");
    expect(container.querySelector("#site-aid-error-summary")).toBeNull();
  });

  it("keeps example and reset confirmations mutually exclusive in both directions", () => {
    loadBrittanyExample(container);
    const loadTrigger = buttonByText(container, "Charger l’exemple Bretagne");
    goToWizardStep(container, "profile");
    const reference = labelControl<HTMLInputElement>(
      container,
      "Référence interne",
      "input",
    );
    changeControl(reference, "Brouillon concurrent");
    goToWizardStep(container, "quote");
    const quoteAmount = labelControl<HTMLInputElement>(
      container,
      "Montant HT",
      "input",
    );
    changeControl(quoteAmount, "6500");
    goToWizardStep(container, "review");

    const activeConfirmations = () =>
      container.querySelectorAll(
        "#site-aid-example-confirmation, #site-aid-reset-confirmation",
      );
    const expectDraftPreserved = () => {
      expect(reference.value).toBe("Brouillon concurrent");
      expect(quoteAmount.value).toBe("6500");
    };
    const pressEscape = (target: HTMLElement) => {
      const event = new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: true,
        cancelable: true,
      });
      act(() => target.dispatchEvent(event));
      expect(event.defaultPrevented).toBe(true);
    };

    act(() => loadTrigger.click());
    const exampleGroup = controlById<HTMLElement>(
      container,
      "site-aid-example-confirmation",
    );
    expect(activeConfirmations()).toHaveLength(1);
    expect(exampleGroup.getAttribute("role")).toBe("group");
    expect(exampleGroup.getAttribute("aria-labelledby")).toBe(
      "site-aid-example-confirm-title",
    );
    expect(document.getElementById("site-aid-example-confirm-title")).not.toBe(
      null,
    );
    expect(document.activeElement).toBe(
      buttonByText(container, "Annuler et conserver le brouillon"),
    );
    expectDraftPreserved();

    act(() => buttonByText(container, "Réinitialiser").click());
    const resetGroup = controlById<HTMLElement>(
      container,
      "site-aid-reset-confirmation",
    );
    const resetCancel = buttonByText(container, "Annuler et conserver");
    expect(activeConfirmations()).toHaveLength(1);
    expect(
      container.querySelector("#site-aid-example-confirmation"),
    ).toBeNull();
    expect(resetGroup.getAttribute("role")).toBe("group");
    expect(resetGroup.getAttribute("aria-labelledby")).toBe(
      "site-aid-reset-title",
    );
    expect(document.getElementById("site-aid-reset-title")).not.toBe(null);
    expect(document.activeElement).toBe(resetCancel);
    expectDraftPreserved();

    pressEscape(resetCancel);
    expect(activeConfirmations()).toHaveLength(0);
    expect(document.activeElement).toBe(
      buttonByText(container, "Réinitialiser"),
    );
    expectDraftPreserved();

    act(() => buttonByText(container, "Réinitialiser").click());
    expect(activeConfirmations()).toHaveLength(1);
    expect(document.activeElement).toBe(
      buttonByText(container, "Annuler et conserver"),
    );
    expectDraftPreserved();

    act(() => loadTrigger.click());
    const reopenedExampleGroup = controlById<HTMLElement>(
      container,
      "site-aid-example-confirmation",
    );
    const exampleCancel = buttonByText(
      container,
      "Annuler et conserver le brouillon",
    );
    expect(activeConfirmations()).toHaveLength(1);
    expect(container.querySelector("#site-aid-reset-confirmation")).toBeNull();
    expect(reopenedExampleGroup.getAttribute("role")).toBe("group");
    expect(reopenedExampleGroup.getAttribute("aria-labelledby")).toBe(
      "site-aid-example-confirm-title",
    );
    expect(document.activeElement).toBe(exampleCancel);
    expectDraftPreserved();

    pressEscape(exampleCancel);
    expect(activeConfirmations()).toHaveLength(0);
    expect(document.activeElement).toBe(loadTrigger);
    expectDraftPreserved();
  });

  it("keeps a first edit neutral until the reader requests a verdict", () => {
    changeControl(
      labelControl<HTMLInputElement>(container, "Territoire", "input"),
      "Bretagne",
    );

    expect(
      container
        .querySelector('[role="status"][aria-live="polite"]')
        ?.textContent?.trim(),
    ).toBe("");
    goToWizardStep(container, "review");
    expect(
      container.querySelector("#site-aid-result-title")?.textContent,
    ).toContain("DOSSIER EN COURS — VERDICT NON DEMANDÉ");
    const resultSection = container
      .querySelector("#site-aid-result-title")
      ?.closest("section");
    expect(resultSection?.textContent).not.toContain("Données invalides");
    expect(resultSection?.textContent).not.toContain(
      "Informations ou preuves manquantes",
    );
    const focusSpy = vi.spyOn(HTMLElement.prototype, "focus");
    focusSpy.mockClear();
    analyzeDossier(container);
    expect(
      container.querySelector("#site-aid-result-title")?.textContent,
    ).toContain("DOSSIER INVALIDE — CORRIGER LES DONNÉES");
    expect(normalizedText(container)).toContain("Données invalides");
    const errorSummary = container.querySelector("#site-aid-error-summary");
    expect(document.activeElement).toBe(errorSummary);
    expect(focusSpy).toHaveBeenCalledTimes(1);
    expect(focusSpy).toHaveBeenLastCalledWith();
    expect(errorSummary?.className).toContain("focus-visible:ring-2");
    expect(resultSection?.className).toContain("focus-visible:ring-2");
    expect(errorSummary?.querySelectorAll("a").length).toBeGreaterThan(0);
    const firstCorrectiveAction =
      errorSummary?.querySelector<HTMLAnchorElement>("a");
    expect(firstCorrectiveAction).not.toBeNull();
    expect(errorSummary?.contains(firstCorrectiveAction ?? null)).toBe(true);
    const firstFocusableAfterSummary = [
      ...container.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])",
      ),
    ].find(
      (candidate) =>
        errorSummary !== null &&
        Boolean(
          errorSummary.compareDocumentPosition(candidate) &
          Node.DOCUMENT_POSITION_FOLLOWING,
        ),
    );
    expect(firstFocusableAfterSummary).toBe(firstCorrectiveAction);
    goToWizardStep(container, "profile");
    const missingActivity = labelControl<HTMLInputElement>(
      container,
      "Activité et clientèle",
      "input",
    );
    expect(missingActivity.getAttribute("aria-invalid")).toBe("true");
    expect(missingActivity.getAttribute("aria-errormessage")).toBeNull();
    expect(
      missingActivity.getAttribute("aria-describedby")?.split(/\s+/),
    ).toContain("site-aid-profile-activity-error-message");
    expect(
      missingActivity.getAttribute("aria-describedby")?.split(/\s+/),
    ).not.toContain("site-aid-error-summary");

    goToWizardStep(container, "proof");
    const instrument = labelControl<HTMLSelectElement>(
      container,
      "Type d’instrument de l’aide actuelle",
      "select",
    );
    expect(instrument.getAttribute("aria-invalid")).toBe("true");

    goToWizardStep(container, "quote");
    const quoteLabel = labelControl<HTMLInputElement>(
      container,
      "Libellé exact",
      "input",
    );
    const quoteAmount = labelControl<HTMLInputElement>(
      container,
      "Montant HT",
      "input",
    );
    expect(quoteLabel.getAttribute("aria-invalid")).toBe("true");
    expect(quoteAmount.getAttribute("aria-invalid")).toBe("true");

    const instrumentIssue = issueLink(container, "Instrument d’aide");
    expect(instrumentIssue.getAttribute("href")).toBe(
      "#site-aid-instrument-kind",
    );
    act(() => instrumentIssue.click());
    expect(document.activeElement).toBe(
      controlById(container, "site-aid-instrument-kind"),
    );

    const quoteAmountIssue = issueLink(container, "Devis, ligne 1, montant HT");
    expect(quoteAmountIssue.getAttribute("href")).toBe(
      "#site-aid-quote-line-1-amount",
    );
    act(() => quoteAmountIssue.click());
    expect(document.activeElement).toBe(
      controlById(container, "site-aid-quote-line-1-amount"),
    );
  });

  it("gives every invalid control only its own targeted error message", () => {
    analyzeDossier(container);
    const summaryLinks = [
      ...container.querySelectorAll<HTMLAnchorElement>(
        "#site-aid-error-summary a",
      ),
    ].map((link) => ({
      href: link.getAttribute("href"),
      text: link.textContent?.trim() ?? "",
    }));
    let invalidControlCount = 0;
    const allErrorMessageIds: string[] = [];
    for (const stepId of WIZARD_STEP_IDS.slice(0, -1)) {
      goToWizardStep(container, stepId);
      const invalidControls = [
        ...container.querySelectorAll<
          HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >(
          "input[aria-invalid='true'], select[aria-invalid='true'], textarea[aria-invalid='true']",
        ),
      ];
      invalidControlCount += invalidControls.length;
      for (const control of invalidControls) {
        const describedByTokens = (
          control.getAttribute("aria-describedby") ?? ""
        ).split(/\s+/);
        expect(describedByTokens).not.toContain("site-aid-error-summary");
        expect(control.getAttribute("aria-errormessage")).toBeNull();
        const errorMessageId = `${control.id}-error-message`;
        allErrorMessageIds.push(errorMessageId);
        expect(describedByTokens).toContain(errorMessageId);
        const targetedMessage = container.querySelector<HTMLElement>(
          `#${errorMessageId}`,
        );
        expect(targetedMessage).not.toBeNull();
        expect(targetedMessage?.closest("label")).toBeNull();
        expect(targetedMessage?.hasAttribute("role")).toBe(false);
        const targetedText = targetedMessage?.textContent ?? "";
        const ownIssues = summaryLinks.filter(
          (link) => link.href === `#${control.id}`,
        );
        const foreignIssues = summaryLinks.filter(
          (link) => link.href !== `#${control.id}`,
        );
        expect(ownIssues.length).toBeGreaterThan(0);
        for (const issue of ownIssues) {
          expect(targetedText).toContain(issue.text);
        }
        for (const issue of foreignIssues) {
          if (issue.text) expect(targetedText).not.toContain(issue.text);
        }
      }
      const mountedMessageIds = [
        ...container.querySelectorAll<HTMLElement>(
          "[data-site-aid-local-error]",
        ),
      ].map((message) => message.id);
      expect(new Set(mountedMessageIds).size).toBe(mountedMessageIds.length);
    }
    expect(invalidControlCount).toBeGreaterThan(10);
    expect(new Set(allErrorMessageIds).size).toBe(allErrorMessageIds.length);
    expect(
      container.querySelector('[aria-describedby~="site-aid-error-summary"]'),
    ).toBeNull();

    goToWizardStep(container, "review");
    const firstIssue = container.querySelector<HTMLAnchorElement>(
      "#site-aid-error-summary a",
    );
    expect(firstIssue).not.toBeNull();
    const targetId = firstIssue?.getAttribute("href")?.slice(1) ?? "";
    act(() => firstIssue?.click());
    const focusedTarget = container.querySelector<HTMLElement>(`#${targetId}`);
    expect(document.activeElement).toBe(focusedTarget);
    const localMessageId = `${targetId}-error-message`;
    expect(
      focusedTarget
        ?.getAttribute("aria-describedby")
        ?.split(/\s+/)
        .includes(localMessageId),
    ).toBe(true);
    expect(container.querySelector(`#${localMessageId}`)).not.toBeNull();
  });

  it("uses only the explicit post-award verification status and still requires evidence text", () => {
    loadBrittanyExample(container);
    goToWizardStep(container, "profile");
    const status = controlById<HTMLSelectElement>(
      container,
      "site-aid-authority-post-award-verified",
    );
    const evidence = controlById<HTMLTextAreaElement>(
      container,
      "site-aid-authority-post-award",
    );
    const historicalResolvedEvidence =
      "Pièce applicable A-2026-02 : l’ancienne obligation « visibilité à confirmer » est désormais résolue et levée ; le rapport final et la conservation des pièces pendant cinq ans restent exigés.";

    expect(status.value).toBe("yes");
    changeControl(evidence, historicalResolvedEvidence);
    reanalyzeExpiredDossier(container);
    goToWizardStep(container, "review");
    expect(
      normalizedText(
        controlById<HTMLElement>(container, "site-aid-error-summary"),
      ),
    ).not.toMatch(
      /Vérification de la pièce post-attribution|Obligations après attribution et après versement/,
    );
    goToWizardStep(container, "profile");
    expect(
      controlById(container, status.id).getAttribute("aria-invalid"),
    ).not.toBe("true");
    expect(
      controlById(container, evidence.id).getAttribute("aria-invalid"),
    ).not.toBe("true");

    changeControl(
      controlById<HTMLSelectElement>(container, status.id),
      "unknown",
    );
    reanalyzeExpiredDossier(container);
    goToWizardStep(container, "review");
    expect(
      container.querySelector("#site-aid-result-title")?.textContent,
    ).toContain("DOSSIER INCOMPLET — VERDICT GLOBAL SUSPENDU");
    expectIssueTarget(
      container,
      "Vérification de la pièce post-attribution : statut à confirmer",
      status,
    );
    expect(
      controlById(container, evidence.id).getAttribute("aria-invalid"),
    ).not.toBe("true");

    changeControl(controlById<HTMLSelectElement>(container, status.id), "no");
    expectIssueTarget(
      container,
      "Vérification de la pièce post-attribution : statut « NON »",
      status,
    );
    expect(
      controlById(container, evidence.id).getAttribute("aria-invalid"),
    ).not.toBe("true");

    changeControl(controlById<HTMLSelectElement>(container, status.id), "yes");
    reanalyzeExpiredDossier(container);
    goToWizardStep(container, "review");
    expect(
      normalizedText(
        controlById<HTMLElement>(container, "site-aid-error-summary"),
      ),
    ).not.toMatch(
      /Vérification de la pièce post-attribution|Obligations après attribution et après versement/,
    );

    goToWizardStep(container, "profile");
    changeControl(controlById<HTMLTextAreaElement>(container, evidence.id), "");
    reanalyzeExpiredDossier(container);
    goToWizardStep(container, "review");
    expect(
      container.querySelector("#site-aid-result-title")?.textContent,
    ).toContain("DOSSIER INCOMPLET — VERDICT GLOBAL SUSPENDU");
    expectIssueTarget(
      container,
      "Obligations après attribution et après versement : information manquante",
      evidence,
    );
    expect(
      controlById(container, status.id).getAttribute("aria-invalid"),
    ).not.toBe("true");
  });

  it("distinguishes profile activity, activity gate evidence and authority schedule", () => {
    loadBrittanyExample(container);
    goToWizardStep(container, "profile");
    const profileActivity = controlById<HTMLInputElement>(
      container,
      "site-aid-profile-activity",
    );
    expect(profileActivity.getAttribute("aria-invalid")).not.toBe("true");
    goToWizardStep(container, "proof");
    const activityStatus = controlById<HTMLSelectElement>(
      container,
      "site-aid-gate-activity-status",
    );
    const activityEvidence = controlById<HTMLInputElement>(
      container,
      "site-aid-gate-activity-evidence",
    );

    expectIssueTarget(
      container,
      "Activité admise : confirmation écrite manquante",
      activityStatus,
    );
    expect(
      controlById(container, activityEvidence.id).getAttribute("aria-invalid"),
    ).not.toBe("true");

    changeControl(
      controlById<HTMLSelectElement>(container, activityStatus.id),
      "yes",
    );
    expect(
      controlById(container, activityStatus.id).getAttribute("aria-invalid"),
    ).not.toBe("true");
    expectIssueTarget(
      container,
      "Activité admise : référence de preuve manquante",
      activityEvidence,
    );
    goToWizardStep(container, "profile");
    expect(
      controlById(container, profileActivity.id).getAttribute("aria-invalid"),
    ).not.toBe("true");

    const authoritySchedule = controlById<HTMLTextAreaElement>(
      container,
      "site-aid-authority-schedule",
    );
    changeControl(authoritySchedule, "");
    expectIssueTarget(
      container,
      "Échéances et règle de modification : information manquante",
      authoritySchedule,
    );

    goToWizardStep(container, "profile");
    const postAwardObligations = controlById<HTMLTextAreaElement>(
      container,
      "site-aid-authority-post-award",
    );
    changeControl(postAwardObligations, "");
    expectIssueTarget(
      container,
      "Obligations après attribution et après versement : information manquante",
      postAwardObligations,
    );
    expect(
      document.getElementById("site-aid-post-award-help")?.textContent,
    ).toContain("réduction ou restitution");
  });

  it("targets quote errors by position when two rows have the same label", () => {
    loadBrittanyExample(container);
    goToWizardStep(container, "quote");
    act(() => buttonByText(container, "Ajouter une ligne").click());

    const firstLabel = controlById<HTMLInputElement>(
      container,
      "site-aid-quote-line-1-label",
    );
    const firstAmount = controlById<HTMLInputElement>(
      container,
      "site-aid-quote-line-1-amount",
    );
    const duplicateLabel = controlById<HTMLInputElement>(
      container,
      "site-aid-quote-line-4-label",
    );
    const duplicateAmount = controlById<HTMLInputElement>(
      container,
      "site-aid-quote-line-4-amount",
    );
    changeControl(duplicateLabel, firstLabel.value);

    expect(firstAmount.getAttribute("aria-invalid")).not.toBe("true");
    expectIssueTarget(
      container,
      `Devis, ligne 4 « ${firstLabel.value} », montant HT`,
      duplicateAmount,
    );
  });

  it("classifies quote issues only after removing numbered user labels", () => {
    loadBrittanyExample(container);
    goToWizardStep(container, "quote");

    const firstLabel = controlById<HTMLInputElement>(
      container,
      "site-aid-quote-line-1-label",
    );
    const firstVatRate = controlById<HTMLInputElement>(
      container,
      "site-aid-quote-line-1-vat-rate",
    );
    const firstEligibility = controlById<HTMLSelectElement>(
      container,
      "site-aid-quote-line-1-eligibility",
    );
    changeControl(firstLabel, "Taux de TVA marketing");
    changeControl(firstEligibility, "unknown");

    const secondLabel = controlById<HTMLInputElement>(
      container,
      "site-aid-quote-line-2-label",
    );
    const secondEligibility = controlById<HTMLSelectElement>(
      container,
      "site-aid-quote-line-2-eligibility",
    );
    const secondEvidence = controlById<HTMLInputElement>(
      container,
      "site-aid-quote-line-2-evidence",
    );
    changeControl(secondLabel, "Admissibilité SEO");
    changeControl(secondEvidence, "");

    const poisonedDuplicateLabel =
      "Montant HT « faux champ » admissibilité, taux de TVA et preuve";
    const thirdLabel = controlById<HTMLInputElement>(
      container,
      "site-aid-quote-line-3-label",
    );
    const thirdAmount = controlById<HTMLInputElement>(
      container,
      "site-aid-quote-line-3-amount",
    );
    const thirdVatRate = controlById<HTMLInputElement>(
      container,
      "site-aid-quote-line-3-vat-rate",
    );
    changeControl(thirdLabel, poisonedDuplicateLabel);
    changeControl(thirdVatRate, "");

    act(() => buttonByText(container, "Ajouter une ligne").click());
    const fourthLabel = controlById<HTMLInputElement>(
      container,
      "site-aid-quote-line-4-label",
    );
    const fourthAmount = controlById<HTMLInputElement>(
      container,
      "site-aid-quote-line-4-amount",
    );
    changeControl(fourthLabel, poisonedDuplicateLabel);
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-quote-line-4-vat-rate",
      ),
      "20",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-quote-line-4-deductible-vat",
      ),
      "100",
    );
    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-quote-line-4-eligibility",
      ),
      "no",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-quote-line-4-evidence",
      ),
      "Exclusion documentée",
    );

    expectIssueTarget(
      container,
      "Devis, ligne 1 « Taux de TVA marketing » : admissibilité à confirmer",
      firstEligibility,
    );
    expect(
      controlById(container, firstVatRate.id).getAttribute("aria-invalid"),
    ).not.toBe("true");
    expectIssueTarget(
      container,
      "Devis, ligne 2 « Admissibilité SEO » : référence de preuve manquante",
      secondEvidence,
    );
    expect(
      controlById(container, secondEligibility.id).getAttribute("aria-invalid"),
    ).not.toBe("true");
    expectIssueTarget(
      container,
      `Devis, ligne 3 « ${poisonedDuplicateLabel} », taux de TVA : valeur à renseigner`,
      thirdVatRate,
    );
    expect(
      controlById(container, thirdAmount.id).getAttribute("aria-invalid"),
    ).not.toBe("true");
    expectIssueTarget(
      container,
      `Devis, ligne 4 « ${poisonedDuplicateLabel} », montant HT : valeur à renseigner`,
      fourthAmount,
    );
    expect(
      controlById(container, fourthLabel.id).getAttribute("aria-invalid"),
    ).not.toBe("true");
  });

  it("restores focus after real mouse clicks on dynamic quote errors", () => {
    loadBrittanyExample(container);
    goToWizardStep(container, "quote");
    act(() => buttonByText(container, "Ajouter une ligne").click());

    const firstLabel = controlById<HTMLInputElement>(
      container,
      "site-aid-quote-line-1-label",
    );
    const duplicateLabel = controlById<HTMLInputElement>(
      container,
      "site-aid-quote-line-4-label",
    );
    changeControl(duplicateLabel, firstLabel.value);

    const mouseCases = [
      {
        issue: `Devis, ligne 4 « ${firstLabel.value} », montant HT`,
        targetId: "site-aid-quote-line-4-amount",
      },
      {
        issue: `Devis, ligne 4 « ${firstLabel.value} », taux de TVA`,
        targetId: "site-aid-quote-line-4-vat-rate",
      },
      {
        issue: `Devis, ligne 4 « ${firstLabel.value} » : admissibilité`,
        targetId: "site-aid-quote-line-4-eligibility",
      },
    ];

    for (const { issue, targetId } of mouseCases) {
      const link = issueLink(container, issue);
      expect(link.getAttribute("href")).toBe(`#${targetId}`);
      const mouseClick = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        button: 0,
        detail: 1,
      });

      act(() => {
        link.dispatchEvent(mouseClick);
      });
      expect(mouseClick.defaultPrevented).toBe(true);
      expect(document.activeElement).toBe(controlById(container, targetId));
      expect(
        container
          .querySelector("[data-site-aid-wizard-panel]")
          ?.getAttribute("data-site-aid-wizard-panel"),
      ).toBe("quote");
    }

    const keyboardLink = issueLink(
      container,
      `Devis, ligne 4 « ${firstLabel.value} », montant HT`,
    );
    const keyboardActivation = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      detail: 0,
    });
    act(() => keyboardLink.dispatchEvent(keyboardActivation));
    expect(keyboardActivation.defaultPrevented).toBe(true);
    expect(document.activeElement).toBe(
      controlById(container, mouseCases[0].targetId),
    );
  });

  it("completes a fresh no-notification dossier without toggling its stage", () => {
    goToWizardStep(container, "proof");
    const stage = labelControl<HTMLSelectElement>(
      container,
      "État financier",
      "select",
    );
    expect(stage.value).toBe("none");

    completeFreshCandidateWithoutChangingStage(container);
    completeApplicationPreparation(container);
    expect(
      labelControl<HTMLSelectElement>(container, "État financier", "select")
        .value,
    ).toBe("none");
    analyzeDossier(container);

    expect(
      container.querySelector("#site-aid-result-title")?.textContent,
    ).toContain("CANDIDAT À VÉRIFIER — AIDE BUDGÉTÉE À 0 €");
    expect(
      container.querySelector(".site-aid-print-report")?.textContent,
    ).toContain("PRÉDIAGNOSTIC — AUCUN TRANSFERT");
    expect(
      container.querySelector(".site-aid-print-report")?.textContent,
    ).not.toContain("SYNTHÈSE GLOBALE R31");
    expect(normalizedText(container)).not.toContain(
      "Notification écrite : confirmation écrite manquante",
    );
  });

  it("moves focus into an added quote row and to its neighbour after deletion", () => {
    goToWizardStep(container, "quote");
    const addButton = buttonByText(container, "Ajouter une ligne");
    addButton.focus();
    act(() => addButton.click());

    const quoteLabels = [
      ...container.querySelectorAll<HTMLInputElement>(
        "#site-aid-quote-section input",
      ),
    ].filter((control) =>
      control.parentElement?.textContent?.includes("Libellé exact"),
    );
    expect(quoteLabels).toHaveLength(2);
    expect(document.activeElement).toBe(quoteLabels[1]);
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "Ligne de devis 2 ajoutée",
    );

    const removeSecond = container.querySelector<HTMLButtonElement>(
      'button[aria-label="Supprimer la ligne 2"]',
    );
    expect(removeSecond).not.toBeNull();
    act(() => removeSecond?.click());

    expect(document.activeElement).toBe(quoteLabels[0]);
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "Ligne de devis 2 supprimée. 1 ligne reste",
    );
  });

  it("moves focus into an added aid row and back to Add after deletion", () => {
    goToWizardStep(container, "cash");
    const addButton = buttonByText(container, "Ajouter une aide antérieure");
    addButton.focus();
    act(() => addButton.click());

    const remove = container.querySelector<HTMLButtonElement>(
      'button[aria-label="Supprimer l’aide antérieure 1"]',
    );
    expect(remove).not.toBeNull();
    const authority =
      remove?.parentElement?.parentElement?.querySelector<HTMLInputElement>(
        "input",
      );
    expect(authority).not.toBeNull();
    expect(document.activeElement).toBe(authority);
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "Aide antérieure 1 ajoutée",
    );

    act(() => remove?.click());

    expect(document.activeElement).toBe(addButton);
    expect(container.querySelector('[role="status"]')?.textContent).toContain(
      "Le focus revient sur le bouton d’ajout",
    );
  });

  it("distinguishes successive deletions and names the sole-line action Vider", () => {
    const liveRegion = container.querySelector<HTMLElement>(
      '[role="status"][aria-live="polite"]',
    );
    goToWizardStep(container, "quote");
    const soleAction = container.querySelector<HTMLButtonElement>(
      'button[aria-label="Vider la ligne 1"]',
    );
    expect(soleAction).not.toBeNull();
    expect(soleAction?.textContent).toContain("Vider la ligne 1");
    changeControl(
      controlById<HTMLInputElement>(container, "site-aid-quote-line-1-label"),
      "Brouillon à vider",
    );
    act(() => soleAction?.click());
    expect(
      controlById<HTMLInputElement>(container, "site-aid-quote-line-1-label")
        .value,
    ).toBe("");
    expect(liveRegion?.textContent).toContain(
      "Ligne de devis 1 vidée. 1 ligne reste",
    );
    const firstEmptyAnnouncement = liveRegion?.querySelector<HTMLElement>(
      "[data-live-announcement-sequence]",
    );
    const firstEmptyAnnouncementSequence = Number(
      firstEmptyAnnouncement?.dataset.liveAnnouncementSequence,
    );

    changeControl(
      controlById<HTMLInputElement>(container, "site-aid-quote-line-1-label"),
      "Second brouillon à vider",
    );
    act(() => soleAction?.click());
    const secondEmptyAnnouncement = liveRegion?.querySelector<HTMLElement>(
      "[data-live-announcement-sequence]",
    );
    const secondEmptyAnnouncementSequence = Number(
      secondEmptyAnnouncement?.dataset.liveAnnouncementSequence,
    );
    expect(secondEmptyAnnouncement?.textContent).toContain(
      "Ligne de devis 1 vidée. 1 ligne reste",
    );
    expect(secondEmptyAnnouncementSequence).toBeGreaterThan(
      firstEmptyAnnouncementSequence,
    );
    expect(secondEmptyAnnouncement).not.toBe(firstEmptyAnnouncement);

    act(() => buttonByText(container, "Ajouter une ligne").click());
    act(() => buttonByText(container, "Ajouter une ligne").click());
    act(() =>
      container
        .querySelector<HTMLButtonElement>(
          'button[aria-label="Supprimer la ligne 2"]',
        )
        ?.click(),
    );
    const firstQuoteDeletion = liveRegion?.textContent ?? "";
    expect(firstQuoteDeletion).toContain(
      "Ligne de devis 2 supprimée. 2 lignes restent",
    );
    act(() =>
      container
        .querySelector<HTMLButtonElement>(
          'button[aria-label="Supprimer la ligne 2"]',
        )
        ?.click(),
    );
    const secondQuoteDeletion = liveRegion?.textContent ?? "";
    expect(secondQuoteDeletion).toContain(
      "Ligne de devis 2 supprimée. 1 ligne reste",
    );
    expect(secondQuoteDeletion).not.toBe(firstQuoteDeletion);
    expect(
      container.querySelector('button[aria-label="Vider la ligne 1"]'),
    ).not.toBeNull();

    goToWizardStep(container, "cash");
    act(() => buttonByText(container, "Ajouter une aide antérieure").click());
    act(() => buttonByText(container, "Ajouter une aide antérieure").click());
    act(() =>
      container
        .querySelector<HTMLButtonElement>(
          'button[aria-label="Supprimer l’aide antérieure 1"]',
        )
        ?.click(),
    );
    const firstRegisterDeletion = liveRegion?.textContent ?? "";
    expect(firstRegisterDeletion).toContain(
      "Aide antérieure 1 supprimée. 1 aide antérieure reste",
    );
    act(() =>
      container
        .querySelector<HTMLButtonElement>(
          'button[aria-label="Supprimer l’aide antérieure 1"]',
        )
        ?.click(),
    );
    const secondRegisterDeletion = liveRegion?.textContent ?? "";
    expect(secondRegisterDeletion).toContain(
      "Aide antérieure 1 supprimée. Aucune aide antérieure restante",
    );
    expect(secondRegisterDeletion).not.toBe(firstRegisterDeletion);
  });

  it("gives static gates, four quote rows and two prior aids unique role/name controls", () => {
    loadBrittanyExample(container);
    goToWizardStep(container, "quote");
    act(() => buttonByText(container, "Ajouter une ligne").click());
    const quoteVisibleLabels = [
      "Libellé exact",
      "Montant HT",
      "Taux de TVA, %",
      "Part de TVA déductible, %",
      "Ligne admissible ?",
      "Référence de preuve",
    ];
    const accessibleNames: string[] = [];
    for (let lineNumber = 1; lineNumber <= 4; lineNumber += 1) {
      const group = groupByRoleAndName(container, `Ligne ${lineNumber}`);
      for (const visibleLabel of quoteVisibleLabels) {
        const accessibleName = `${visibleLabel} — Ligne ${lineNumber}`;
        const control = controlByAccessibleName(container, accessibleName);
        expect(group.contains(control)).toBe(true);
        accessibleNames.push(accessibleName);
      }
    }
    expect(controlByAccessibleName(container, "Montant HT — Ligne 1")).not.toBe(
      controlByAccessibleName(container, "Montant HT — Ligne 4"),
    );

    goToWizardStep(container, "cash");
    act(() => buttonByText(container, "Ajouter une aide antérieure").click());
    act(() => buttonByText(container, "Ajouter une aide antérieure").click());

    const firstRegisterStatus = controlByAccessibleName<HTMLSelectElement>(
      container,
      "Statut de la base juridique — Aide antérieure 1",
    );
    const secondRegisterStatus = controlByAccessibleName<HTMLSelectElement>(
      container,
      "Statut de la base juridique — Aide antérieure 2",
    );
    changeControl(firstRegisterStatus, "de-minimis");
    changeControl(secondRegisterStatus, "not-de-minimis");

    const registerVisibleLabels = [
      [
        "Organisme",
        "Dispositif",
        "Statut de la base juridique",
        "Référence exacte du règlement de minimis",
        "État membre de l’autorité d’octroi (pas le siège du bénéficiaire)",
        "Périmètre de l’entreprise unique",
        "Valeur juridique de l’aide antérieure",
        "Date d’octroi juridique",
        "Dépenses concernées",
        "Même assiette ou facture ?",
      ],
      [
        "Organisme",
        "Dispositif",
        "Statut de la base juridique",
        "Base juridique hors de minimis",
        "Référence officielle hors de minimis",
        "État membre de l’autorité d’octroi (pas le siège du bénéficiaire)",
        "Périmètre entreprise/groupe à qualifier",
        "Valeur juridique de l’aide antérieure",
        "Date d’octroi juridique",
        "Dépenses concernées",
        "Même assiette ou facture ?",
      ],
    ];
    const registerGroups: HTMLElement[] = [];
    for (let entryNumber = 1; entryNumber <= 2; entryNumber += 1) {
      const group = groupByRoleAndName(
        container,
        `Aide antérieure ${entryNumber}`,
      );
      registerGroups.push(group);
      for (const visibleLabel of registerVisibleLabels[entryNumber - 1]) {
        const accessibleName = `${visibleLabel} — Aide antérieure ${entryNumber}`;
        const control = controlByAccessibleName(container, accessibleName);
        expect(group.contains(control)).toBe(true);
        accessibleNames.push(accessibleName);
      }
    }
    expect(
      controlByAccessibleName(container, "Organisme — Aide antérieure 1"),
    ).not.toBe(
      controlByAccessibleName(container, "Organisme — Aide antérieure 2"),
    );

    goToWizardStep(container, "proof");
    const gateLabels = [
      "Guichet ou autorité applicable",
      "Bénéficiaire admis",
      "Activité admise",
      "Ordre des actes respecté",
      "Contrôle écrit du cumul",
    ];

    for (const gateLabel of gateLabels) {
      const group = groupByRoleAndName(container, gateLabel);
      const status = controlByAccessibleName(
        container,
        `Statut — ${gateLabel}`,
      );
      const evidence = controlByAccessibleName(
        container,
        `Référence de preuve — ${gateLabel}`,
      );
      expect(group.contains(status)).toBe(true);
      expect(group.contains(evidence)).toBe(true);
      accessibleNames.push(
        `Statut — ${gateLabel}`,
        `Référence de preuve — ${gateLabel}`,
      );
    }

    const registerNamedControls = registerGroups.flatMap((group) => [
      ...group.querySelectorAll<HTMLElement>(
        "input[aria-label], select[aria-label], button[aria-label]",
      ),
    ]);
    expect(
      registerNamedControls.every((control) =>
        Boolean(control.getAttribute("aria-label")),
      ),
    ).toBe(true);
    expect(new Set(accessibleNames).size).toBe(accessibleNames.length);
  });

  it("numbers successive live announcements for added rows", () => {
    const liveRegion = container.querySelector<HTMLElement>(
      '[role="status"][aria-live="polite"]',
    );

    goToWizardStep(container, "quote");
    act(() => buttonByText(container, "Ajouter une ligne").click());
    const quoteMessage2 = liveRegion?.textContent ?? "";
    expect(quoteMessage2).toContain("Ligne de devis 2 ajoutée");
    act(() => buttonByText(container, "Ajouter une ligne").click());
    const quoteMessage3 = liveRegion?.textContent ?? "";
    expect(quoteMessage3).toContain("Ligne de devis 3 ajoutée");
    expect(quoteMessage3).not.toBe(quoteMessage2);

    goToWizardStep(container, "cash");
    act(() => buttonByText(container, "Ajouter une aide antérieure").click());
    const registerMessage1 = liveRegion?.textContent ?? "";
    expect(registerMessage1).toContain("Aide antérieure 1 ajoutée");
    act(() => buttonByText(container, "Ajouter une aide antérieure").click());
    const registerMessage2 = liveRegion?.textContent ?? "";
    expect(registerMessage2).toContain("Aide antérieure 2 ajoutée");
    expect(registerMessage2).not.toBe(registerMessage1);
  });

  it("loads the Brittany example with a theoretical aid but no budgeted aid", () => {
    loadBrittanyExample(container);
    goToWizardStep(container, "cash");
    expect(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-profile-corporate-event-status",
      ).value,
    ).toBe("no");
    expect(
      controlById<HTMLTextAreaElement>(
        container,
        "site-aid-profile-corporate-event-evidence",
      ).value,
    ).toContain("aucune fusion, acquisition ou scission");
    expect(
      container.querySelector("#site-aid-profile-corporate-event-kind"),
    ).toBeNull();
    expect(
      container.querySelector("#site-aid-current-sgei-section"),
    ).toBeNull();
    goToWizardStep(container, "review");
    const text = normalizedText(container);
    expect(text).toContain("12 000 €");
    expect(text).toContain("2 100 €");
    expect(text).toMatch(/Contribution budgétée\s*0 €/);
    expect(text).toContain("DOSSIER INCOMPLET — VERDICT GLOBAL SUSPENDU");
    expect(text).toContain(
      "Bénéficiaire admis : confirmation écrite manquante",
    );
    expect(text).not.toContain("Coût après notification 7 900 €");
    expect(
      normalizedText(
        resultCard(container, "Aides antérieures déclarées — non validées"),
      ),
    ).toContain("le moteur n’authentifie ni leur base juridique");
    expect(
      normalizedText(
        resultCard(
          container,
          "Aides déclarées sur même assiette — non validées",
        ),
      ),
    ).toContain("aucune compatibilité de cumul n’est conclue");
  });

  it("bounds every cost card before fiscal and accounting treatment", () => {
    loadBrittanyExample(container);
    const expectAccountingBoundary = (card: HTMLElement) => {
      const text = normalizedText(card);
      expect(text).toContain("Avant traitement fiscal et comptable");
      expect(text).toContain(
        "la dépense et la subvention éventuelle peuvent suivre des traitements différents",
      );
      expect(text).toContain(
        "ne constitue pas un conseil fiscal ou comptable individualisé",
      );
    };

    expectAccountingBoundary(resultCard(container, "Coût sans aide"));
    expectAccountingBoundary(resultCard(container, "Coût après notification"));

    goToWizardStep(container, "proof");
    changeControl(
      labelControl<HTMLSelectElement>(container, "État financier", "select"),
      "received",
    );
    expectAccountingBoundary(
      resultCard(container, "Coût réalisé non calculable"),
    );
  });

  it("shows the conditional 7,900 euro cost only after completing the notification", () => {
    loadBrittanyExample(container);
    completeExampleNotification(container);

    reanalyzeExpiredDossier(container);
    goToWizardStep(container, "review");
    const text = normalizedText(container);
    expect(text).toContain(
      "NOTIFICATION SOUS CONDITIONS — PLAN DE TRÉSORERIE SOUTENABLE",
    );
    expect(text).toMatch(/Valeur juridique sous conditions\s*2 100 €/);
    expect(text).toMatch(/Contribution approuvée\s*2 100 €/);
    expect(text).toMatch(/Coût après notification\s*7 900 €/);
    expect(text).toMatch(/Besoin maximal de trésorerie\s*12 000 €/);
    expect(text).toMatch(/Écart de trésorerie\s*0 €/);

    const focusSpy = vi.spyOn(HTMLElement.prototype, "focus");
    focusSpy.mockClear();
    act(() => buttonByText(container, "Analyser le dossier").click());
    expect(document.activeElement).toBe(
      container.querySelector("#site-aid-result-title")?.closest("section"),
    );
    expect(focusSpy).toHaveBeenCalledTimes(1);
  });

  it("keeps notified no-or-unknown grants non-affirmative in cards, live text and TXT", async () => {
    loadBrittanyExample(container);
    completeExampleNotification(container);
    const grantStatus = labelControl<HTMLSelectElement>(
      container,
      "Octroi juridique de l’aide actuelle",
      "select",
    );
    const createObjectUrl = vi.fn((blob: Blob): string => {
      void blob;
      return "blob:site-aid-r11-report";
    });
    Object.defineProperty(URL, "createObjectURL", {
      configurable: true,
      value: createObjectUrl,
    });
    Object.defineProperty(URL, "revokeObjectURL", {
      configurable: true,
      value: vi.fn(),
    });
    vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(
      () => undefined,
    );

    for (const status of ["no", "unknown"]) {
      goToWizardStep(container, "proof");
      changeControl(
        controlById<HTMLSelectElement>(container, grantStatus.id),
        status,
      );
      analyzeDossier(container);

      expect(
        normalizedText(
          resultCard(container, "Contribution déclarée — non validée"),
        ),
      ).toMatch(/Contribution déclarée — non validée\s*ND/);
      expect(
        normalizedText(
          resultCard(container, "Coût conditionnel non calculable"),
        ),
      ).toMatch(/Coût conditionnel non calculable\s*ND/);
      const resultTerms = [
        ...container.querySelectorAll("#site-aid-result-title ~ dl dt"),
      ].map((term) => term.textContent?.trim());
      expect(resultTerms).not.toContain("Contribution approuvée");
      expect(resultTerms).not.toContain("Coût après notification");
      expect(
        container.querySelector("#site-aid-result-title")?.textContent,
      ).not.toContain("NOTIFICATION SOUS CONDITIONS");

      const liveText =
        container.querySelector('[role="status"][aria-live="polite"]')
          ?.textContent ?? "";
      expect(liveText).toContain("Contribution déclarée — non validée : ND");
      expect(liveText).toContain("Coût conditionnel non calculable : ND");
      expect(liveText).not.toContain("Contribution approuvée :");

      act(() => buttonByText(container, "Télécharger le dossier TXT").click());
      const reportBlob = createObjectUrl.mock.calls.at(-1)?.[0] as Blob;
      const reportText = await reportBlob.text();
      expect(reportText).toContain(
        "Contribution déclarée — non validée par le moteur : ND",
      );
      expect(reportText).toContain(
        "Coût conditionnel non calculable — avant traitement fiscal et comptable : ND",
      );
      expect(reportText).toContain(
        "Aides antérieures déclarées — non validées par le moteur",
      );
      expect(reportText).toContain(
        "Aides déclarées sur la même assiette ou facture — non validées par le moteur",
      );
      expect(reportText).not.toContain(
        "Contribution financière approuvée pour la facture : 2 100 € — sous conditions",
      );
      expect(reportText).not.toContain(
        "Coût conditionnel après notification : 7 900 €",
      );
    }
  });

  it("does not present a declared receipt as realized until resolved outputs exist", async () => {
    loadBrittanyExample(container);
    completeExampleNotification(container);
    changeControl(
      labelControl<HTMLSelectElement>(
        container,
        "Octroi juridique de l’aide actuelle",
        "select",
      ),
      "yes",
    );
    changeControl(
      labelControl<HTMLInputElement>(
        container,
        "Date d’octroi juridique de l’aide actuelle",
        "input",
      ),
      "2026-07-25",
    );
    changeControl(
      labelControl<HTMLSelectElement>(container, "État financier", "select"),
      "received",
    );

    const unresolvedContribution = resultCard(
      container,
      "Contribution déclarée — non validée",
    );
    const unresolvedCost = resultCard(container, "Coût réalisé non calculable");
    expect(normalizedText(unresolvedContribution)).toMatch(
      /Contribution déclarée — non validée\s*ND/,
    );
    expect(normalizedText(unresolvedContribution)).toContain(
      "la somme saisie ne devient pas un paiement validé",
    );
    expect(normalizedText(unresolvedContribution)).toContain(
      "chaîne documentaire cohérente",
    );
    expect(normalizedText(unresolvedCost)).toMatch(
      /Coût réalisé non calculable\s*ND/,
    );
    expect(normalizedText(unresolvedCost)).toContain(
      "octroi juridique, facture finale, versement ou paiement direct et chronologie",
    );
    const unresolvedTerms = [
      ...container.querySelectorAll("#site-aid-result-title ~ dl dt"),
    ].map((term) => term.textContent?.trim());
    expect(unresolvedTerms).not.toContain("Contribution payée au fournisseur");
    expect(unresolvedTerms).not.toContain("Contribution payée à l’entreprise");
    expect(normalizedText(unresolvedCost)).not.toContain(
      "Après montant encaissé par l’entreprise",
    );
    expect(normalizedText(unresolvedCost)).not.toContain(
      "Après versement documenté au fournisseur",
    );

    act(() => buttonByText(container, "Analyser le dossier").click());
    const liveMessage =
      container.querySelector('[role="status"][aria-live="polite"]')
        ?.textContent ?? "";
    expect(liveMessage).toContain("Contribution déclarée — non validée : ND");
    expect(liveMessage).toContain("Coût réalisé non calculable : ND");

    const createObjectUrl = vi.fn((blob: Blob): string => {
      void blob;
      return "blob:site-aid-r11-received-report";
    });
    Object.defineProperty(URL, "createObjectURL", {
      configurable: true,
      value: createObjectUrl,
    });
    Object.defineProperty(URL, "revokeObjectURL", {
      configurable: true,
      value: vi.fn(),
    });
    vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(
      () => undefined,
    );
    act(() => buttonByText(container, "Télécharger le dossier TXT").click());
    const unresolvedReportBlob = createObjectUrl.mock.calls[0]?.[0] as Blob;
    const unresolvedReport = await unresolvedReportBlob.text();
    expect(unresolvedReport).toContain(
      "Contribution déclarée — non validée par le moteur : ND",
    );
    expect(unresolvedReport).toContain(
      "Coût réalisé non calculable — avant traitement fiscal et comptable : ND",
    );
    expect(unresolvedReport).not.toContain(
      "Montant encaissé par l’entreprise : 2 100 € — réalisé",
    );

    goToWizardStep(container, "proof");
    changeControl(
      labelControl<HTMLInputElement>(
        container,
        "Contribution effectivement payée à l’entreprise",
        "input",
      ),
      "2100",
    );
    changeControl(
      labelControl<HTMLSelectElement>(
        container,
        "Les lignes reprennent-elles la facture finale acquittée",
        "select",
      ),
      "yes",
    );
    changeControl(
      labelControl<HTMLInputElement>(
        container,
        "Date de la facture finale",
        "input",
      ),
      "2026-07-25",
    );
    changeControl(
      labelControl<HTMLInputElement>(
        container,
        "Référence de la facture finale",
        "input",
      ),
      "FACT-2026-042",
    );
    changeControl(
      labelControl<HTMLInputElement>(
        container,
        "Référence du paiement fournisseur par l’entreprise",
        "input",
      ),
      "Virement fournisseur VF-042",
    );
    changeControl(
      labelControl<HTMLInputElement>(
        container,
        "Date d’encaissement de l’aide par l’entreprise",
        "input",
      ),
      "2026-07-26",
    );
    changeControl(
      labelControl<HTMLInputElement>(
        container,
        "Référence de l’encaissement par l’entreprise",
        "input",
      ),
      "Virement aide VA-001",
    );

    expect(
      normalizedText(
        resultCard(container, "Contribution payée à l’entreprise"),
      ),
    ).toMatch(/Contribution payée à l’entreprise\s*2 100 €/);
    expect(normalizedText(resultCard(container, "Coût réalisé"))).toContain(
      "Après montant encaissé par l’entreprise",
    );
    expect(
      [...container.querySelectorAll("#site-aid-result-title ~ dl dt")].map(
        (term) => term.textContent?.trim(),
      ),
    ).not.toContain("Contribution déclarée — non validée");
  });

  it("separates final invoice, supplier payment and aid receipt evidence", () => {
    loadBrittanyExample(container);
    goToWizardStep(container, "proof");
    changeControl(
      labelControl<HTMLSelectElement>(container, "État financier", "select"),
      "received",
    );

    const finalInvoiceDate = labelControl<HTMLInputElement>(
      container,
      "Date de la facture finale",
      "input",
    );
    const finalInvoiceReference = labelControl<HTMLInputElement>(
      container,
      "Référence de la facture finale",
      "input",
    );
    const supplierPaymentReference = labelControl<HTMLInputElement>(
      container,
      "Référence du paiement fournisseur",
      "input",
    );
    const aidReceiptReference = labelControl<HTMLInputElement>(
      container,
      "Référence de l’encaissement par l’entreprise",
      "input",
    );

    changeControl(finalInvoiceDate, "2026-07-20");
    changeControl(finalInvoiceReference, "FACT-2026-042");
    changeControl(supplierPaymentReference, "Virement fournisseur VF-042");
    changeControl(aidReceiptReference, "Virement aide VA-001");

    expect(finalInvoiceDate.value).toBe("2026-07-20");
    expect(finalInvoiceReference.value).toBe("FACT-2026-042");
    expect(supplierPaymentReference.value).toBe("Virement fournisseur VF-042");
    expect(aidReceiptReference.value).toBe("Virement aide VA-001");
    expect(normalizedText(container)).toContain(
      "Une référence d’aide ne prouve pas le paiement du fournisseur",
    );
  });

  it("preserves notification proof through receipt and clears it only on an explicit none stage", () => {
    loadBrittanyExample(container);
    goToWizardStep(container, "payment");
    const stage = labelControl<HTMLSelectElement>(
      container,
      "État financier",
      "select",
    );
    const notificationEvidence = labelControl<HTMLInputElement>(
      container,
      "Preuve de notification ou d’absence de notification",
      "input",
    );

    changeControl(stage, "notified");
    changeControl(
      notificationEvidence,
      "Notification N-2026-001 du 26/07/2026",
    );
    changeControl(
      labelControl<HTMLInputElement>(
        container,
        "Valeur juridique de l’aide actuelle",
        "input",
      ),
      "2100",
    );
    changeControl(
      labelControl<HTMLInputElement>(
        container,
        "Contribution financière approuvée pour la facture",
        "input",
      ),
      "1800",
    );
    changeControl(
      labelControl<HTMLSelectElement>(container, "État financier", "select"),
      "received",
    );
    changeControl(
      labelControl<HTMLInputElement>(
        container,
        "Contribution effectivement payée à l’entreprise",
        "input",
      ),
      "1700",
    );
    expect(
      labelControl<HTMLInputElement>(
        container,
        "Preuve de notification ou d’absence de notification",
        "input",
      ).value,
    ).toBe("Notification N-2026-001 du 26/07/2026");
    expect(
      labelControl<HTMLInputElement>(
        container,
        "Contribution financière approuvée pour la facture",
        "input",
      ).value,
    ).toBe("1800");
    expect(
      labelControl<HTMLInputElement>(
        container,
        "Contribution effectivement payée à l’entreprise",
        "input",
      ).value,
    ).toBe("1700");
    expect(
      labelControl<HTMLInputElement>(
        container,
        "Valeur juridique de l’aide actuelle",
        "input",
      ).value,
    ).toBe("2100");

    changeControl(
      labelControl<HTMLSelectElement>(container, "État financier", "select"),
      "notified",
    );
    expect(
      labelControl<HTMLInputElement>(
        container,
        "Preuve de notification ou d’absence de notification",
        "input",
      ).value,
    ).toBe("Notification N-2026-001 du 26/07/2026");
    expect(
      labelControl<HTMLInputElement>(
        container,
        "Contribution effectivement payée à l’entreprise",
        "input",
      ).value,
    ).toBe("0");
    expect(
      labelControl<HTMLInputElement>(
        container,
        "Contribution effectivement payée à l’entreprise",
        "input",
      ).disabled,
    ).toBe(true);

    changeControl(
      labelControl<HTMLSelectElement>(container, "État financier", "select"),
      "none",
    );
    expect(
      labelControl<HTMLInputElement>(
        container,
        "Preuve de notification ou d’absence de notification",
        "input",
      ).value,
    ).toBe("");
    expect(
      labelControl<HTMLInputElement>(
        container,
        "Contribution financière approuvée pour la facture",
        "input",
      ).value,
    ).toBe("0");
    expect(
      labelControl<HTMLInputElement>(
        container,
        "Valeur juridique de l’aide actuelle",
        "input",
      ).value,
    ).toBe("0");
  });

  it("announces an expired analysis once and never presents live recalculation from the old instant", () => {
    const status = container.querySelector<HTMLElement>(
      '[role="status"][aria-live="polite"]',
    );
    expect(status?.textContent?.trim()).toBe("");

    loadBrittanyExampleWithoutAnalysis(container);
    expect(status?.textContent).toContain("Exemple chargé");
    goToWizardStep(container, "profile");
    const beforeProfileEdit = status?.textContent;
    changeControl(
      labelControl<HTMLInputElement>(container, "Référence interne", "input"),
      "Référence sans effet sur le calcul",
    );
    expect(status?.textContent).toBe(beforeProfileEdit);
    expect(vi.getTimerCount()).toBe(1);

    analyzeDossier(container);
    const beforeReferenceEdit = status?.textContent;
    expect(beforeReferenceEdit).toContain("Analyse terminée");

    goToWizardStep(container, "quote");
    const beforeQuoteEdit = status?.textContent;
    const firstQuoteAmount = labelControl<HTMLInputElement>(
      container,
      "Montant HT",
      "input",
    );
    changeControl(firstQuoteAmount, "6500");
    changeControl(firstQuoteAmount, "7000");
    expect(status?.textContent).not.toBe(beforeQuoteEdit);
    expect(status?.textContent).toContain("Analyse périmée");
    expect(status?.textContent).not.toContain("Résultat actualisé");
    expect(vi.getTimerCount()).toBe(1);
    expect(
      container.querySelector("[data-site-aid-analysis-state='stale']"),
    ).not.toBeNull();

    goToWizardStep(container, "treasury");
    const beforeCashEdit = status?.textContent;
    changeControl(
      labelControl<HTMLInputElement>(
        container,
        "Trésorerie disponible",
        "input",
      ),
      "1",
    );
    expect(vi.getTimerCount()).toBe(1);
    expect(status?.textContent).toBe(beforeCashEdit);
    expect(status?.textContent).not.toContain("Résultat actualisé");
  });

  it("separates instrument, legal value, approved contribution and prior-aid value", () => {
    loadBrittanyExample(container);
    goToWizardStep(container, "proof");
    const instrument = labelControl<HTMLSelectElement>(
      container,
      "Type d’instrument de l’aide actuelle",
      "select",
    );
    expect(instrument.value).toBe("grant");
    const currentAidLegalBasis = labelControl<HTMLInputElement>(
      container,
      "Référence exacte du règlement de minimis",
      "input",
    );
    expect(currentAidLegalBasis.value).toContain("2023/2831");
    const legalReferenceFormatHelp = controlById<HTMLElement>(
      container,
      "site-aid-de-minimis-regime-format-help",
    );
    const legalReferenceFormatHelpText = normalizedText(
      legalReferenceFormatHelp,
    );
    expect(legalReferenceFormatHelpText).toContain(
      "Un seul numéro isolé (2023/2831, 2023/2832, 1408/2013 ou 717/2014)",
    );
    expect(legalReferenceFormatHelpText).toContain("un CELEX exact");
    expect(legalReferenceFormatHelpText).toContain(
      "une URL ELI officielle en HTTPS",
    );
    expect(legalReferenceFormatHelpText).toContain(
      "remplacer uniquement « http:// » par « https:// », puis vérifier l’hôte et le chemin exacts",
    );
    expect(
      currentAidLegalBasis.getAttribute("aria-describedby")?.split(/\s+/),
    ).toContain("site-aid-de-minimis-regime-format-help");
    const legalValue = labelControl<HTMLInputElement>(
      container,
      "Valeur juridique de l’aide actuelle",
      "input",
    );
    const approvedContribution = labelControl<HTMLInputElement>(
      container,
      "Contribution financière approuvée pour la facture",
      "input",
    );
    expect(legalValue.value).toBe("0");
    expect(approvedContribution.value).toBe("0");
    expect(normalizedText(legalValue.parentElement ?? container)).toContain(
      "équivalent-subvention brut (ESB) communiqué",
    );
    expect(normalizedText(legalValue.parentElement ?? container)).toContain(
      "Ne saisissez jamais le nominal",
    );
    const liveInstrument = controlById<HTMLSelectElement>(
      container,
      instrument.id,
    );
    changeControl(liveInstrument, "loan");
    expect(normalizedText(liveInstrument.parentElement ?? container)).toContain(
      "jamais le capital prêté",
    );
    const grantStatus = labelControl<HTMLSelectElement>(
      container,
      "Octroi juridique de l’aide actuelle",
      "select",
    );
    const grantDate = labelControl<HTMLInputElement>(
      container,
      "Date d’octroi juridique de l’aide actuelle",
      "input",
    );
    expect(grantStatus.value).toBe("no");
    expect(grantDate.disabled).toBe(true);

    changeControl(grantStatus, "yes");
    expect(grantDate.disabled).toBe(false);
    changeControl(grantDate, "2026-07-25");
    changeControl(grantStatus, "no");
    expect(grantDate.value).toBe("");
    expect(grantDate.disabled).toBe(true);

    changeControl(
      labelControl<HTMLSelectElement>(container, "État financier", "select"),
      "notified",
    );
    const liveCurrentAidLegalBasis = controlById<HTMLInputElement>(
      container,
      currentAidLegalBasis.id,
    );
    changeControl(liveCurrentAidLegalBasis, "");
    reanalyzeExpiredDossier(container);
    goToWizardStep(container, "proof");
    const analyzedCurrentAidLegalBasis = controlById<HTMLInputElement>(
      container,
      liveCurrentAidLegalBasis.id,
    );
    expect(analyzedCurrentAidLegalBasis.getAttribute("aria-invalid")).toBe(
      "true",
    );
    expect(
      analyzedCurrentAidLegalBasis.getAttribute("aria-errormessage"),
    ).toBeNull();
    expect(
      analyzedCurrentAidLegalBasis
        .getAttribute("aria-describedby")
        ?.split(/\s+/),
    ).toEqual(
      expect.arrayContaining([
        "site-aid-de-minimis-regime-format-help",
        "site-aid-de-minimis-regime-error-message",
      ]),
    );
    expect(
      analyzedCurrentAidLegalBasis
        .getAttribute("aria-describedby")
        ?.split(/\s+/),
    ).not.toContain("site-aid-error-summary");

    goToWizardStep(container, "cash");
    act(() => buttonByText(container, "Ajouter une aide antérieure").click());
    const registerRow = container.querySelector<HTMLButtonElement>(
      'button[aria-label="Supprimer l’aide antérieure 1"]',
    )?.parentElement?.parentElement;
    if (!(registerRow instanceof HTMLElement)) {
      throw new Error("Ligne d’aide antérieure introuvable");
    }
    changeControl(
      labelControl<HTMLSelectElement>(
        registerRow,
        "Statut de la base juridique",
        "select",
      ),
      "de-minimis",
    );
    const registerLegalBasis = controlById<HTMLInputElement>(
      registerRow,
      "site-aid-register-entry-1-de-minimis-regime",
    );
    expect(
      registerLegalBasis.getAttribute("aria-describedby")?.split(/\s+/),
    ).toContain("site-aid-register-de-minimis-regime-format-help");
    const priorAidAmount = labelControl<HTMLInputElement>(
      registerRow,
      "Valeur juridique de l’aide antérieure",
      "input",
    );
    expect(priorAidAmount).not.toBeNull();
    expect(normalizedText(container)).toContain(
      "jamais le montant nominal d’un prêt ou d’une garantie",
    );
  });

  it("keeps one shared legal-format description resolvable for fresh register rows", () => {
    goToWizardStep(container, "proof");
    const currentLegalBasisStatus = controlById<HTMLSelectElement>(
      container,
      "site-aid-legal-basis-status",
    );
    expect(currentLegalBasisStatus.value).toBe("unknown");
    expect(container.querySelector("#site-aid-de-minimis-regime")).toBeNull();

    const currentHelpId = "site-aid-de-minimis-regime-format-help";
    const registerHelpId = "site-aid-register-de-minimis-regime-format-help";
    expect(container.querySelectorAll(`#${currentHelpId}`)).toHaveLength(1);
    expect(document.getElementById(currentHelpId)).not.toBeNull();

    goToWizardStep(container, "cash");
    act(() => buttonByText(container, "Ajouter une aide antérieure").click());
    act(() => buttonByText(container, "Ajouter une aide antérieure").click());
    for (let entryNumber = 1; entryNumber <= 2; entryNumber += 1) {
      changeControl(
        controlById<HTMLSelectElement>(
          container,
          `site-aid-register-entry-${entryNumber}-legal-basis-status`,
        ),
        "de-minimis",
      );
      const registerRegime = controlById<HTMLInputElement>(
        container,
        `site-aid-register-entry-${entryNumber}-de-minimis-regime`,
      );
      const descriptionIds = (
        registerRegime.getAttribute("aria-describedby") ?? ""
      )
        .split(/\s+/)
        .filter(Boolean);
      expect(descriptionIds).toContain(registerHelpId);
      expect(descriptionIds.length).toBeGreaterThan(0);
      for (const descriptionId of descriptionIds) {
        expect(
          document.getElementById(descriptionId),
          `IDREF absent pour l’aide antérieure ${entryNumber} : ${descriptionId}`,
        ).not.toBeNull();
      }
    }

    expect(container.querySelectorAll(`#${registerHelpId}`)).toHaveLength(1);
    goToWizardStep(container, "proof");
    changeControl(
      controlById<HTMLSelectElement>(container, currentLegalBasisStatus.id),
      "not-de-minimis",
    );
    expect(container.querySelector("#site-aid-de-minimis-regime")).toBeNull();
    expect(container.querySelectorAll(`#${currentHelpId}`)).toHaveLength(1);
  });

  it("keeps every declared outside-de-minimis case blocked for external review", () => {
    loadBrittanyExample(container);
    completeExampleNotification(container);
    const legalBasisStatus = labelControl<HTMLSelectElement>(
      container,
      "Statut de la base juridique",
      "select",
    );

    changeControl(legalBasisStatus, "not-de-minimis");
    reanalyzeExpiredDossier(container);
    goToWizardStep(container, "proof");
    const legalBasis = labelControl<HTMLInputElement>(
      container,
      "Base juridique hors de minimis",
      "input",
    );
    const evidenceReference = labelControl<HTMLInputElement>(
      container,
      "Référence officielle déclarée pour le hors de minimis",
      "input",
    );

    expect(
      [...container.querySelectorAll("label")].some((label) =>
        label.textContent?.includes("Référence exacte du règlement de minimis"),
      ),
    ).toBe(false);
    expect(legalBasis.getAttribute("aria-invalid")).toBe("true");
    expect(evidenceReference.getAttribute("aria-invalid")).toBe("true");
    goToWizardStep(container, "profile");
    expect(
      labelControl<HTMLInputElement>(
        container,
        "Forme ou statut",
        "input",
      ).getAttribute("aria-invalid"),
    ).not.toBe("true");
    goToWizardStep(container, "proof");
    expect(
      controlById(container, legalBasisStatus.id).getAttribute("aria-invalid"),
    ).toBe("true");
    expect(normalizedText(container)).toContain(
      "Hors de minimis déclaré — revue externe obligatoire",
    );
    const legalBasisIssue = issueLink(
      container,
      "base hors de minimis déclarée",
    );
    expect(legalBasisIssue.getAttribute("href")).toBe(
      "#site-aid-non-de-minimis-basis",
    );
    act(() => legalBasisIssue.click());
    expect(document.activeElement).toBe(controlById(container, legalBasis.id));
    const legalEvidenceIssue = issueLink(
      container,
      "preuve hors de minimis déclarée",
    );
    expect(legalEvidenceIssue.getAttribute("href")).toBe(
      "#site-aid-non-de-minimis-evidence",
    );
    act(() => legalEvidenceIssue.click());
    expect(document.activeElement).toBe(
      controlById(container, evidenceReference.id),
    );

    changeControl(
      controlById<HTMLInputElement>(container, legalBasis.id),
      "Régime exempté SA.12345 — article 3",
    );
    reanalyzeExpiredDossier(container);
    goToWizardStep(container, "proof");
    expect(
      controlById(container, legalBasis.id).getAttribute("aria-invalid"),
    ).not.toBe("true");
    expect(
      controlById(container, evidenceReference.id).getAttribute("aria-invalid"),
    ).toBe("true");

    changeControl(
      controlById<HTMLInputElement>(container, evidenceReference.id),
      "Décision Région N-2026-001 du 26/07/2026",
    );
    reanalyzeExpiredDossier(container);
    goToWizardStep(container, "proof");
    expect(
      controlById(container, legalBasis.id).getAttribute("aria-invalid"),
    ).not.toBe("true");
    expect(
      controlById(container, evidenceReference.id).getAttribute("aria-invalid"),
    ).not.toBe("true");
    expectIssueTarget(
      container,
      "hors de minimis déclaré : confirmation écrite",
      legalBasisStatus,
    );
    goToWizardStep(container, "review");
    expect(
      container.querySelector("#site-aid-result-title")?.textContent,
    ).toContain("DOSSIER INCOMPLET — VERDICT GLOBAL SUSPENDU");
    expect(normalizedText(container).toLocaleLowerCase("fr-FR")).not.toContain(
      "base formelle prouvée",
    );

    goToWizardStep(container, "cash");
    act(() => buttonByText(container, "Ajouter une aide antérieure").click());
    const registerRow = container.querySelector<HTMLButtonElement>(
      'button[aria-label="Supprimer l’aide antérieure 1"]',
    )?.parentElement?.parentElement;
    if (!(registerRow instanceof HTMLElement)) {
      throw new Error("Ligne d’aide antérieure introuvable");
    }
    changeControl(
      labelControl<HTMLSelectElement>(
        registerRow,
        "Statut de la base juridique",
        "select",
      ),
      "not-de-minimis",
    );
    expect(
      labelControl<HTMLInputElement>(
        registerRow,
        "Base juridique hors de minimis",
        "input",
      ),
    ).not.toBeNull();
    expect(
      labelControl<HTMLInputElement>(
        registerRow,
        "Référence officielle hors de minimis",
        "input",
      ),
    ).not.toBeNull();
  });

  it("keeps a register-only external limitation non-clickable while exact evidence remains actionable", () => {
    loadBrittanyExample(container);
    completeExampleNotification(container);
    goToWizardStep(container, "cash");
    act(() => buttonByText(container, "Ajouter une aide antérieure").click());
    const registerRow = groupByRoleAndName(container, "Aide antérieure 1");
    changeControl(
      controlByAccessibleName<HTMLSelectElement>(
        registerRow,
        "Statut de la base juridique — Aide antérieure 1",
      ),
      "not-de-minimis",
    );

    reanalyzeExpiredDossier(container);
    goToWizardStep(container, "proof");
    expect(
      controlById<HTMLSelectElement>(container, "site-aid-legal-basis-status")
        .value,
    ).toBe("de-minimis");
    expect(
      container.querySelector("#site-aid-non-de-minimis-basis"),
    ).toBeNull();

    goToWizardStep(container, "review");
    const limitationHeading = [...container.querySelectorAll("p")].find(
      (candidate) =>
        candidate.textContent?.trim() === "Limites de calcul de l’outil",
    );
    const limitationBlock = limitationHeading?.parentElement;
    expect(limitationBlock?.textContent).toContain(
      "l’outil local ne peut authentifier",
    );
    expect(limitationBlock?.querySelector("a")).toBeNull();

    goToWizardStep(container, "cash");
    const registerBasis = controlById<HTMLInputElement>(
      container,
      "site-aid-register-entry-1-non-de-minimis-basis",
    );
    const registerEvidence = controlById<HTMLInputElement>(
      container,
      "site-aid-register-entry-1-non-de-minimis-evidence",
    );
    expectIssueTarget(
      container,
      "Registre, aide 1, base hors de minimis déclarée",
      registerBasis,
    );
    expectIssueTarget(
      container,
      "Registre, aide 1, référence de preuve hors de minimis déclarée",
      registerEvidence,
    );
  });

  it("routes prudent legal-value issues to the exact current and register amounts", () => {
    goToWizardStep(container, "proof");
    changeControl(
      labelControl<HTMLSelectElement>(container, "État financier", "select"),
      "notified",
    );
    analyzeDossier(container);

    goToWizardStep(container, "proof");
    const currentLegalValue = controlById<HTMLInputElement>(
      container,
      "site-aid-legal-aid-value",
    );
    const currentIssueText =
      "Aide courante, précontrôle prudent du cumul, valeur juridique ou ESB : montant manquant";
    expectIssueTarget(container, currentIssueText, currentLegalValue);
    expect(
      controlById(container, currentLegalValue.id)
        .getAttribute("aria-describedby")
        ?.split(/\s+/),
    ).toContain("site-aid-legal-aid-value-help");
    expect(
      controlById<HTMLElement>(container, "site-aid-legal-aid-value-help")
        .textContent,
    ).toContain("Ne saisissez jamais le nominal d’un prêt ou d’une garantie");
    const currentKeyboardLink = issueLink(container, currentIssueText);
    const currentEnterActivation = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      detail: 0,
    });
    act(() => {
      currentKeyboardLink.focus();
      currentKeyboardLink.dispatchEvent(currentEnterActivation);
    });
    expect(currentEnterActivation.defaultPrevented).toBe(true);
    expect(document.activeElement).toBe(
      controlById(container, currentLegalValue.id),
    );

    goToWizardStep(container, "cash");
    act(() => buttonByText(container, "Ajouter une aide antérieure").click());
    const registerAmount = controlById<HTMLInputElement>(
      container,
      "site-aid-register-entry-1-amount",
    );
    const registerIssueText =
      "Registre, aide 1, précontrôle prudent du cumul, valeur juridique ou ESB : montant manquant";
    expectIssueTarget(container, registerIssueText, registerAmount);
    const registerKeyboardLink = issueLink(container, registerIssueText);
    const registerEnterActivation = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      detail: 0,
    });
    act(() => {
      registerKeyboardLink.focus();
      registerKeyboardLink.dispatchEvent(registerEnterActivation);
    });
    expect(registerEnterActivation.defaultPrevented).toBe(true);
    expect(document.activeElement).toBe(
      controlById(container, registerAmount.id),
    );
  });

  it("preserves prudent grouping keys across outside and unknown branches", () => {
    goToWizardStep(container, "proof");
    changeControl(
      labelControl<HTMLSelectElement>(container, "État financier", "select"),
      "notified",
    );
    analyzeDossier(container);
    goToWizardStep(container, "proof");
    const currentLegalBasisStatus = controlById<HTMLSelectElement>(
      container,
      "site-aid-legal-basis-status",
    );
    const currentMemberState = controlById<HTMLInputElement>(
      container,
      "site-aid-de-minimis-member-state",
    );
    const currentUndertaking = controlById<HTMLInputElement>(
      container,
      "site-aid-de-minimis-undertaking",
    );

    expectIssueTarget(
      container,
      "Aide courante, précontrôle prudent du cumul, État membre",
      currentMemberState,
    );
    expectIssueTarget(
      container,
      "Aide courante, précontrôle prudent du cumul, périmètre de l’entreprise unique",
      currentUndertaking,
    );
    expect(
      controlById(container, currentMemberState.id)
        .getAttribute("aria-describedby")
        ?.split(/\s+/),
    ).toContain("site-aid-prudent-grouping-note");
    expect(
      controlById(container, currentUndertaking.id)
        .getAttribute("aria-describedby")
        ?.split(/\s+/),
    ).toContain("site-aid-prudent-grouping-note");

    loadBrittanyExample(container);
    goToWizardStep(container, "proof");
    const currentMemberValue = controlById<HTMLInputElement>(
      container,
      currentMemberState.id,
    ).value;
    const currentUndertakingValue = controlById<HTMLInputElement>(
      container,
      currentUndertaking.id,
    ).value;
    changeControl(
      controlById<HTMLSelectElement>(container, currentLegalBasisStatus.id),
      "not-de-minimis",
    );

    expect(
      controlById<HTMLInputElement>(container, currentMemberState.id).value,
    ).toBe(currentMemberValue);
    expect(
      controlById<HTMLInputElement>(container, currentUndertaking.id).value,
    ).toBe(currentUndertakingValue);
    expect(
      normalizedText(
        controlById(container, currentMemberState.id).parentElement ??
          container,
      ),
    ).toContain(
      "État membre de l’autorité d’octroi (pas le siège du bénéficiaire)",
    );
    expect(
      normalizedText(
        controlById(container, currentUndertaking.id).parentElement ??
          container,
      ),
    ).toContain("Périmètre entreprise/groupe à qualifier");
    expect(normalizedText(container)).toContain(
      "Ces données ne qualifient ni le régime ni l’éligibilité",
    );
    expect(normalizedText(container)).toContain(
      "une revue externe est obligatoire avant toute conclusion",
    );
    expect(container.querySelector("#site-aid-de-minimis-regime")).toBeNull();

    const currentOutsideBasis = controlById<HTMLInputElement>(
      container,
      "site-aid-non-de-minimis-basis",
    );
    const currentOutsideEvidence = controlById<HTMLInputElement>(
      container,
      "site-aid-non-de-minimis-evidence",
    );
    changeControl(currentOutsideBasis, "Régime exempté SA.12345 — article 3");
    changeControl(
      currentOutsideEvidence,
      "Décision Région N-2026-001 du 26/07/2026",
    );
    changeControl(
      controlById<HTMLSelectElement>(container, currentLegalBasisStatus.id),
      "unknown",
    );

    expect(
      controlById<HTMLInputElement>(container, currentMemberState.id).value,
    ).toBe(currentMemberValue);
    expect(
      controlById<HTMLInputElement>(container, currentUndertaking.id).value,
    ).toBe(currentUndertakingValue);
    expect(
      container.querySelector("#site-aid-non-de-minimis-basis"),
    ).toBeNull();
    expect(
      container.querySelector("#site-aid-non-de-minimis-evidence"),
    ).toBeNull();

    changeControl(
      controlById<HTMLSelectElement>(container, currentLegalBasisStatus.id),
      "not-de-minimis",
    );
    expect(
      controlById<HTMLInputElement>(container, "site-aid-non-de-minimis-basis")
        .value,
    ).toBe("");
    expect(
      controlById<HTMLInputElement>(
        container,
        "site-aid-non-de-minimis-evidence",
      ).value,
    ).toBe("");
    expect(
      controlById<HTMLInputElement>(container, currentMemberState.id).value,
    ).toBe(currentMemberValue);
    expect(
      controlById<HTMLInputElement>(container, currentUndertaking.id).value,
    ).toBe(currentUndertakingValue);

    goToWizardStep(container, "cash");
    act(() => buttonByText(container, "Ajouter une aide antérieure").click());
    const registerRow = container.querySelector<HTMLButtonElement>(
      'button[aria-label="Supprimer l’aide antérieure 1"]',
    )?.parentElement?.parentElement;
    if (!(registerRow instanceof HTMLElement)) {
      throw new Error("Ligne d’aide antérieure introuvable");
    }
    const registerLegalBasisStatus = controlById<HTMLSelectElement>(
      registerRow,
      "site-aid-register-entry-1-legal-basis-status",
    );
    const registerMemberState = controlById<HTMLInputElement>(
      registerRow,
      "site-aid-register-entry-1-member-state",
    );
    const registerUndertaking = controlById<HTMLInputElement>(
      registerRow,
      "site-aid-register-entry-1-single-undertaking",
    );

    expectIssueTarget(
      container,
      "Registre, aide 1, précontrôle prudent du cumul, État membre",
      registerMemberState,
    );
    expectIssueTarget(
      container,
      "Registre, aide 1, précontrôle prudent du cumul, périmètre de l’entreprise unique",
      registerUndertaking,
    );
    expect(
      controlById(container, registerMemberState.id)
        .getAttribute("aria-describedby")
        ?.split(/\s+/),
    ).toContain("site-aid-register-entry-1-prudent-grouping-note");
    expect(
      controlById(container, registerUndertaking.id)
        .getAttribute("aria-describedby")
        ?.split(/\s+/),
    ).toContain("site-aid-register-entry-1-prudent-grouping-note");

    changeControl(
      controlById<HTMLInputElement>(container, registerMemberState.id),
      "France",
    );
    changeControl(
      controlById<HTMLInputElement>(container, registerUndertaking.id),
      "SAS et entreprises liées",
    );
    changeControl(
      controlById<HTMLSelectElement>(container, registerLegalBasisStatus.id),
      "de-minimis",
    );
    expect(
      controlById<HTMLInputElement>(container, registerMemberState.id).value,
    ).toBe("France");
    expect(
      controlById<HTMLInputElement>(container, registerUndertaking.id).value,
    ).toBe("SAS et entreprises liées");
    expect(
      normalizedText(
        controlById(container, registerMemberState.id).parentElement ??
          container,
      ),
    ).toContain("État membre");
    expect(
      normalizedText(
        controlById(container, registerUndertaking.id).parentElement ??
          container,
      ),
    ).toContain("Périmètre de l’entreprise unique");

    const registerRegime = controlById<HTMLInputElement>(
      container,
      "site-aid-register-entry-1-de-minimis-regime",
    );
    changeControl(registerRegime, "Règlement (UE) 2023/2831");
    changeControl(
      controlById<HTMLSelectElement>(container, registerLegalBasisStatus.id),
      "not-de-minimis",
    );
    expect(
      container.querySelector("#site-aid-register-entry-1-de-minimis-regime"),
    ).toBeNull();
    expect(
      controlById<HTMLInputElement>(container, registerMemberState.id).value,
    ).toBe("France");
    expect(
      controlById<HTMLInputElement>(container, registerUndertaking.id).value,
    ).toBe("SAS et entreprises liées");
    expect(
      normalizedText(
        controlById(container, registerMemberState.id).parentElement ??
          container,
      ),
    ).toContain(
      "État membre de l’autorité d’octroi (pas le siège du bénéficiaire)",
    );
    expect(
      normalizedText(
        controlById(container, registerUndertaking.id).parentElement ??
          container,
      ),
    ).toContain("Périmètre entreprise/groupe à qualifier");

    const registerOutsideBasis = controlById<HTMLInputElement>(
      container,
      "site-aid-register-entry-1-non-de-minimis-basis",
    );
    const registerOutsideEvidence = controlById<HTMLInputElement>(
      container,
      "site-aid-register-entry-1-non-de-minimis-evidence",
    );
    changeControl(registerOutsideBasis, "Régime exempté SA.12345 — article 3");
    changeControl(
      registerOutsideEvidence,
      "Décision Région N-2026-001 du 26/07/2026",
    );
    changeControl(
      controlById<HTMLSelectElement>(container, registerLegalBasisStatus.id),
      "unknown",
    );

    expect(
      controlById<HTMLInputElement>(container, registerMemberState.id).value,
    ).toBe("France");
    expect(
      controlById<HTMLInputElement>(container, registerUndertaking.id).value,
    ).toBe("SAS et entreprises liées");
    expect(
      container.querySelector(
        "#site-aid-register-entry-1-non-de-minimis-basis",
      ),
    ).toBeNull();
    expect(
      container.querySelector(
        "#site-aid-register-entry-1-non-de-minimis-evidence",
      ),
    ).toBeNull();

    changeControl(
      controlById<HTMLSelectElement>(container, registerLegalBasisStatus.id),
      "not-de-minimis",
    );
    expect(
      controlById<HTMLInputElement>(
        container,
        "site-aid-register-entry-1-non-de-minimis-basis",
      ).value,
    ).toBe("");
    expect(
      controlById<HTMLInputElement>(
        container,
        "site-aid-register-entry-1-non-de-minimis-evidence",
      ).value,
    ).toBe("");
    expect(
      controlById<HTMLInputElement>(container, registerMemberState.id).value,
    ).toBe("France");
    expect(
      controlById<HTMLInputElement>(container, registerUndertaking.id).value,
    ).toBe("SAS et entreprises liées");
  });

  it("requires exact group keys without auto-merging close variants", () => {
    loadBrittanyExample(container);
    goToWizardStep(container, "proof");
    const currentUndertaking = controlById<HTMLInputElement>(
      container,
      "site-aid-de-minimis-undertaking",
    );
    changeControl(currentUndertaking, "Groupe Élan — Holding A");
    expect(
      currentUndertaking.getAttribute("aria-describedby")?.split(/\s+/),
    ).toContain("site-aid-undertaking-scope-help");

    const currentHelp = controlById<HTMLElement>(
      container,
      "site-aid-undertaking-scope-help",
    );
    const helpText = normalizedText(currentHelp);
    expect(helpText.split(/\s+/).length).toBeLessThanOrEqual(65);
    expect(helpText).toContain("Recopiez l’identité exacte");
    expect(helpText).toContain("Unicode NFC");
    expect(helpText).toContain("ne fusionne jamais automatiquement");
    expect(helpText).toContain("alphabets latin, grec ou cyrillique");
    expect(helpText).toContain("Même entreprise : utilisez la même clé exacte");
    expect(helpText).toContain(
      "Entités distinctes : indiquez-le et joignez une preuve",
    );
    expect(helpText).toContain("n’authentifie ni l’identité ni cette preuve");
    expect(
      container.querySelectorAll("#site-aid-undertaking-scope-help"),
    ).toHaveLength(1);
    const currentUndertakingValue = currentUndertaking.value;

    goToWizardStep(container, "cash");
    act(() => buttonByText(container, "Ajouter une aide antérieure").click());
    act(() => buttonByText(container, "Ajouter une aide antérieure").click());
    const firstUndertaking = controlById<HTMLInputElement>(
      container,
      "site-aid-register-entry-1-single-undertaking",
    );
    const secondUndertaking = controlById<HTMLInputElement>(
      container,
      "site-aid-register-entry-2-single-undertaking",
    );
    changeControl(firstUndertaking, "groupe elan holding a");
    changeControl(secondUndertaking, "Groupe Boréal — Holding B");

    expect(firstUndertaking.value).toBe("groupe elan holding a");
    expect(secondUndertaking.value).toBe("Groupe Boréal — Holding B");
    for (const control of [firstUndertaking, secondUndertaking]) {
      const descriptionIds = (
        control.getAttribute("aria-describedby") ?? ""
      ).split(/\s+/);
      expect(descriptionIds).toContain(
        "site-aid-register-undertaking-scope-help",
      );
      for (const descriptionId of descriptionIds.filter(Boolean)) {
        expect(document.getElementById(descriptionId)).not.toBeNull();
      }
    }
    expect(
      container.querySelector(
        '[id^="site-aid-register-entry-"][id$="-undertaking-scope-help"]',
      ),
    ).toBeNull();
    expect(
      container.querySelectorAll("#site-aid-register-undertaking-scope-help"),
    ).toHaveLength(1);
    goToWizardStep(container, "proof");
    expect(
      controlById<HTMLInputElement>(container, currentUndertaking.id).value,
    ).toBe(currentUndertakingValue);
    expect(
      normalizedText(container).match(/Clé d’entreprise partagée\./g),
    ).toHaveLength(1);
  });

  it("collects an explicit documented distinction with unique current and register controls", () => {
    loadBrittanyExample(container);
    goToWizardStep(container, "proof");
    const currentStatus = controlById<HTMLSelectElement>(
      container,
      "site-aid-de-minimis-undertaking-distinct-status",
    );
    expect(currentStatus.value).toBe("unknown");
    expect(
      [...currentStatus.options].map((option) => [
        option.value,
        option.textContent,
      ]),
    ).toEqual([
      ["unknown", "À confirmer"],
      ["yes", "Oui — distinction documentée"],
      ["no", "Non — même entreprise unique, recopier la même clé"],
    ]);
    changeControl(currentStatus, "yes");
    const currentEvidence = controlById<HTMLInputElement>(
      container,
      "site-aid-de-minimis-undertaking-distinct-evidence",
    );
    expect(
      currentEvidence.getAttribute("aria-describedby")?.split(/\s+/),
    ).toContain("site-aid-de-minimis-undertaking-distinct-evidence-help");
    changeControl(currentEvidence, "Organigramme daté du 26/07/2026");
    changeControl(currentStatus, "no");
    expect(
      container.querySelector(
        "#site-aid-de-minimis-undertaking-distinct-evidence",
      ),
    ).toBeNull();
    changeControl(currentStatus, "yes");
    expect(
      controlById<HTMLInputElement>(
        container,
        "site-aid-de-minimis-undertaking-distinct-evidence",
      ).value,
    ).toBe("");
    changeControl(currentStatus, "unknown");

    goToWizardStep(container, "cash");
    act(() => buttonByText(container, "Ajouter une aide antérieure").click());
    act(() => buttonByText(container, "Ajouter une aide antérieure").click());
    const firstStatus = controlByAccessibleName<HTMLSelectElement>(
      container,
      "Ces clés proches désignent-elles des entreprises uniques distinctes ? — Aide antérieure 1",
    );
    const secondStatus = controlByAccessibleName<HTMLSelectElement>(
      container,
      "Ces clés proches désignent-elles des entreprises uniques distinctes ? — Aide antérieure 2",
    );

    expect(firstStatus.value).toBe("unknown");
    expect(secondStatus.value).toBe("unknown");
    expect(
      firstStatus.getAttribute("aria-describedby")?.split(/\s+/),
    ).toContain("site-aid-register-entry-1-undertaking-distinct-help");
    expect(
      secondStatus.getAttribute("aria-describedby")?.split(/\s+/),
    ).toContain("site-aid-register-entry-2-undertaking-distinct-help");
    expect(firstStatus.id).not.toBe(secondStatus.id);

    changeControl(firstStatus, "yes");
    const firstEvidence = controlByAccessibleName<HTMLInputElement>(
      container,
      "Preuve de distinction des clés proches — Aide antérieure 1",
    );
    changeControl(firstEvidence, "Extrait du registre daté du 26/07/2026");
    expect(
      firstEvidence.getAttribute("aria-describedby")?.split(/\s+/),
    ).toContain("site-aid-register-entry-1-undertaking-distinct-evidence-help");
    expect(
      controlById<HTMLElement>(
        container,
        "site-aid-register-entry-1-undertaking-distinct-evidence-help",
      ).textContent,
    ).toContain("sans authentifier cette preuve");
    changeControl(secondStatus, "yes");
    const secondEvidence = controlByAccessibleName<HTMLInputElement>(
      container,
      "Preuve de distinction des clés proches — Aide antérieure 2",
    );
    expect(firstEvidence.id).not.toBe(secondEvidence.id);
    expect(normalizedText(container)).toContain(
      "L’outil n’authentifie ni l’identité ni cette preuve",
    );
  });

  it("routes a current-register close-key decision and proof to each exact control", () => {
    loadBrittanyExample(container);
    completeExampleNotification(container);
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-de-minimis-undertaking",
      ),
      "Groupe Élan",
    );
    goToWizardStep(container, "cash");
    act(() => buttonByText(container, "Ajouter une aide antérieure").click());
    completeDeMinimisRegisterEntry(container, 0, "Groupe Elan");

    goToWizardStep(container, "proof");
    const currentStatus = controlById<HTMLSelectElement>(
      container,
      "site-aid-de-minimis-undertaking-distinct-status",
    );
    const currentKey = controlById<HTMLInputElement>(
      container,
      "site-aid-de-minimis-undertaking",
    );
    goToWizardStep(container, "cash");
    const registerStatus = controlById<HTMLSelectElement>(
      container,
      "site-aid-register-entry-1-similar-undertaking-distinct-status",
    );
    const registerKey = controlById<HTMLInputElement>(
      container,
      "site-aid-register-entry-1-single-undertaking",
    );

    expectIssueTarget(
      container,
      "Aide courante, distinction des clés proches : statut à confirmer",
      currentStatus,
    );
    expectIssueTarget(
      container,
      "Registre, aide 1, distinction des clés proches : statut à confirmer",
      registerStatus,
    );
    goToWizardStep(container, "proof");
    expect(
      controlById(container, currentKey.id).getAttribute("aria-invalid"),
    ).not.toBe("true");
    goToWizardStep(container, "cash");
    expect(
      controlById(container, registerKey.id).getAttribute("aria-invalid"),
    ).not.toBe("true");

    goToWizardStep(container, "proof");
    changeControl(
      controlById<HTMLSelectElement>(container, currentStatus.id),
      "no",
    );
    expectIssueTarget(
      container,
      "Aide courante, distinction des clés proches : statut « NON »",
      currentStatus,
    );
    changeControl(
      controlById<HTMLSelectElement>(container, currentStatus.id),
      "yes",
    );
    goToWizardStep(container, "cash");
    changeControl(
      controlById<HTMLSelectElement>(container, registerStatus.id),
      "yes",
    );

    goToWizardStep(container, "proof");
    const currentEvidence = controlById<HTMLInputElement>(
      container,
      "site-aid-de-minimis-undertaking-distinct-evidence",
    );
    goToWizardStep(container, "cash");
    const registerEvidence = controlById<HTMLInputElement>(
      container,
      "site-aid-register-entry-1-similar-undertaking-distinct-evidence",
    );
    expectIssueTarget(
      container,
      "Aide courante, distinction des clés proches : preuve manquante",
      currentEvidence,
    );
    expectIssueTarget(
      container,
      "Registre, aide 1, distinction des clés proches : preuve manquante",
      registerEvidence,
    );
    goToWizardStep(container, "proof");
    expect(
      controlById(container, currentStatus.id).getAttribute("aria-invalid"),
    ).not.toBe("true");
    goToWizardStep(container, "cash");
    expect(
      controlById(container, registerStatus.id).getAttribute("aria-invalid"),
    ).not.toBe("true");

    goToWizardStep(container, "proof");
    changeControl(
      controlById<HTMLInputElement>(container, currentEvidence.id),
      "Organigramme et extrait RNE vérifiés le 26/07/2026",
    );
    goToWizardStep(container, "cash");
    changeControl(
      controlById<HTMLInputElement>(container, registerEvidence.id),
      "Extrait RNE vérifié le 26/07/2026",
    );
    reanalyzeExpiredDossier(container);
    goToWizardStep(container, "review");
    expect(
      normalizedText(
        container.querySelector<HTMLElement>("#site-aid-error-summary") ??
          container,
      ),
    ).not.toContain("distinction des clés proches");
  });

  it("routes two independent register-register clusters without targeting the current aid", () => {
    loadBrittanyExample(container);
    completeExampleNotification(container);
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-de-minimis-undertaking",
      ),
      "Entreprise sans proximité",
    );
    goToWizardStep(container, "cash");
    const undertakingKeys = [
      "Groupe-A",
      "groupe a",
      "Holding Élan",
      "Holding Elan",
    ];
    for (const [index, undertakingKey] of undertakingKeys.entries()) {
      act(() => buttonByText(container, "Ajouter une aide antérieure").click());
      completeDeMinimisRegisterEntry(container, index, undertakingKey);
    }

    goToWizardStep(container, "proof");
    const currentStatus = controlById<HTMLSelectElement>(
      container,
      "site-aid-de-minimis-undertaking-distinct-status",
    );
    expect(currentStatus.getAttribute("aria-invalid")).not.toBe("true");

    goToWizardStep(container, "cash");
    for (let entryNumber = 1; entryNumber <= 4; entryNumber += 1) {
      const registerStatus = controlById<HTMLSelectElement>(
        container,
        `site-aid-register-entry-${entryNumber}-similar-undertaking-distinct-status`,
      );
      expectIssueTarget(
        container,
        `Registre, aide ${entryNumber}, distinction des clés proches : statut à confirmer`,
        registerStatus,
      );
      expect(
        controlById<HTMLInputElement>(
          container,
          `site-aid-register-entry-${entryNumber}-single-undertaking`,
        ).getAttribute("aria-invalid"),
      ).not.toBe("true");
    }

    const secondStatus = controlById<HTMLSelectElement>(
      container,
      "site-aid-register-entry-2-similar-undertaking-distinct-status",
    );
    const keyboardLink = issueLink(
      container,
      "Registre, aide 2, distinction des clés proches : statut à confirmer",
    );
    const keyboardActivation = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      detail: 0,
    });
    act(() => {
      keyboardLink.focus();
      keyboardLink.dispatchEvent(keyboardActivation);
    });
    expect(keyboardActivation.defaultPrevented).toBe(true);
    expect(document.activeElement).toBe(
      controlById(container, secondStatus.id),
    );
  }, 10_000);

  it("links every register issue to its own stable field without a cash fallback", () => {
    loadBrittanyExample(container);
    goToWizardStep(container, "cash");
    act(() => buttonByText(container, "Ajouter une aide antérieure").click());

    const authority = controlById<HTMLInputElement>(
      container,
      "site-aid-register-entry-1-authority",
    );
    const scheme = controlById<HTMLInputElement>(
      container,
      "site-aid-register-entry-1-scheme",
    );
    const legalBasisStatus = controlById<HTMLSelectElement>(
      container,
      "site-aid-register-entry-1-legal-basis-status",
    );
    const amount = controlById<HTMLInputElement>(
      container,
      "site-aid-register-entry-1-amount",
    );
    const grantDate = controlById<HTMLInputElement>(
      container,
      "site-aid-register-entry-1-legal-grant-date",
    );
    const expenses = controlById<HTMLInputElement>(
      container,
      "site-aid-register-entry-1-expenses",
    );
    const sameBase = controlById<HTMLSelectElement>(
      container,
      "site-aid-register-entry-1-same-base",
    );

    expectIssueTarget(container, "Registre, aide 1, organisme", authority);
    expectIssueTarget(container, "Registre, aide 1, régime", scheme);
    expectIssueTarget(
      container,
      "Registre, aide 1, base juridique : qualifier",
      legalBasisStatus,
    );
    expectIssueTarget(container, "Registre, aide 1, montant", amount);
    expect(
      controlById(container, amount.id)
        .getAttribute("aria-describedby")
        ?.split(/\s+/),
    ).toContain("site-aid-register-entry-1-amount-help");
    expect(
      controlById<HTMLElement>(
        container,
        "site-aid-register-entry-1-amount-help",
      ).textContent,
    ).toContain("jamais le montant nominal d’un prêt ou d’une garantie");
    expect(
      controlById(container, amount.id).getAttribute("aria-errormessage"),
    ).toBeNull();
    expect(
      controlById(container, amount.id)
        .getAttribute("aria-describedby")
        ?.split(/\s+/),
    ).toContain("site-aid-register-entry-1-amount-error-message");
    expect(
      controlById(container, amount.id)
        .getAttribute("aria-describedby")
        ?.split(/\s+/),
    ).not.toContain("site-aid-error-summary");
    expectIssueTarget(
      container,
      "Registre, aide 1, date d’octroi juridique",
      grantDate,
    );
    expectIssueTarget(container, "Registre, aide 1, dépenses", expenses);
    expectIssueTarget(
      container,
      "Registre, aide 1 : même assiette ou même facture",
      sameBase,
    );

    changeControl(legalBasisStatus, "de-minimis");
    const deMinimisRegime = controlById<HTMLInputElement>(
      container,
      "site-aid-register-entry-1-de-minimis-regime",
    );
    expectIssueTarget(
      container,
      "Registre, aide 1, base juridique : qualifier",
      deMinimisRegime,
    );
    changeControl(deMinimisRegime, "Règlement (UE) 2023/2831");

    const memberState = controlById<HTMLInputElement>(
      container,
      "site-aid-register-entry-1-member-state",
    );
    const singleUndertaking = controlById<HTMLInputElement>(
      container,
      "site-aid-register-entry-1-single-undertaking",
    );
    expectIssueTarget(container, "Registre, aide 1, État membre", memberState);
    expectIssueTarget(
      container,
      "Registre, aide 1, périmètre de l’entreprise unique",
      singleUndertaking,
    );

    changeControl(legalBasisStatus, "not-de-minimis");
    const nonDeMinimisBasis = controlById<HTMLInputElement>(
      container,
      "site-aid-register-entry-1-non-de-minimis-basis",
    );
    const nonDeMinimisEvidence = controlById<HTMLInputElement>(
      container,
      "site-aid-register-entry-1-non-de-minimis-evidence",
    );
    expectIssueTarget(
      container,
      "Registre, aide 1, base hors de minimis déclarée",
      nonDeMinimisBasis,
    );
    expectIssueTarget(
      container,
      "Registre, aide 1, référence de preuve hors de minimis déclarée",
      nonDeMinimisEvidence,
    );
    expectIssueTarget(
      container,
      "Registre, aide 1, hors de minimis déclaré : confirmation écrite",
      legalBasisStatus,
    );

    changeControl(nonDeMinimisBasis, "Régime exempté SA.12345 — article 3");
    changeControl(
      nonDeMinimisEvidence,
      "Décision Région N-2026-001 du 26/07/2026",
    );
    reanalyzeExpiredDossier(container);
    goToWizardStep(container, "cash");
    expect(
      controlById(container, nonDeMinimisBasis.id).getAttribute("aria-invalid"),
    ).not.toBe("true");
    expect(
      controlById(container, nonDeMinimisEvidence.id).getAttribute(
        "aria-invalid",
      ),
    ).not.toBe("true");
    expect(
      controlById(container, legalBasisStatus.id).getAttribute("aria-invalid"),
    ).toBe("true");
    goToWizardStep(container, "review");
    expect(
      [
        ...container.querySelectorAll<HTMLAnchorElement>(
          "#site-aid-error-summary a",
        ),
      ]
        .filter((link) => link.textContent?.startsWith("Registre, aide 1"))
        .every(
          (link) => link.getAttribute("href") !== "#site-aid-available-cash",
        ),
    ).toBe(true);
  });

  it("rejects monetary values beyond cents and links each error to the exact control", () => {
    loadBrittanyExample(container);
    goToWizardStep(container, "quote");
    const quoteLabel = labelControl<HTMLInputElement>(
      container,
      "Libellé exact",
      "input",
    );
    const quoteAmount = labelControl<HTMLInputElement>(
      container,
      "Montant HT",
      "input",
    );
    changeControl(quoteAmount, "6000.001");
    reanalyzeExpiredDossier(container);
    goToWizardStep(container, "quote");
    const analyzedQuoteAmount = controlById<HTMLInputElement>(
      container,
      quoteAmount.id,
    );
    const analyzedQuoteLabel = controlById<HTMLInputElement>(
      container,
      quoteLabel.id,
    );

    expect(analyzedQuoteAmount.getAttribute("aria-invalid")).toBe("true");
    expect(analyzedQuoteAmount.getAttribute("aria-errormessage")).toBeNull();
    expect(
      analyzedQuoteAmount.getAttribute("aria-describedby")?.split(/\s+/),
    ).toContain("site-aid-quote-line-1-amount-error-message");
    expect(
      analyzedQuoteAmount.getAttribute("aria-describedby")?.split(/\s+/),
    ).not.toContain("site-aid-error-summary");
    expect(analyzedQuoteLabel.getAttribute("aria-invalid")).not.toBe("true");
    const quotePrecisionIssue = issueLink(
      container,
      "montant HT : un montant monétaire doit comporter au plus deux décimales",
    );
    expect(quotePrecisionIssue.getAttribute("href")).toBe(
      "#site-aid-quote-line-1-amount",
    );
    act(() => quotePrecisionIssue.click());
    expect(document.activeElement).toBe(controlById(container, quoteAmount.id));

    changeControl(
      controlById<HTMLInputElement>(container, quoteAmount.id),
      "6000",
    );
    completeExampleNotification(container);
    const legalValue = labelControl<HTMLInputElement>(
      container,
      "Valeur juridique de l’aide actuelle",
      "input",
    );
    changeControl(legalValue, "2100.001");
    reanalyzeExpiredDossier(container);
    goToWizardStep(container, "proof");
    expect(
      controlById(container, legalValue.id).getAttribute("aria-invalid"),
    ).toBe("true");
    const legalValuePrecisionIssue = issueLink(
      container,
      "Valeur juridique de l’aide : un montant monétaire doit comporter au plus deux décimales",
    );
    expect(legalValuePrecisionIssue.getAttribute("href")).toBe(
      "#site-aid-legal-aid-value",
    );
    act(() => legalValuePrecisionIssue.click());
    expect(document.activeElement).toBe(controlById(container, legalValue.id));
    changeControl(
      controlById<HTMLInputElement>(container, legalValue.id),
      "2100",
    );

    const approvedContribution = labelControl<HTMLInputElement>(
      container,
      "Contribution financière approuvée pour la facture",
      "input",
    );
    changeControl(approvedContribution, "2100.001");
    reanalyzeExpiredDossier(container);
    goToWizardStep(container, "proof");
    expect(
      controlById(container, approvedContribution.id).getAttribute(
        "aria-invalid",
      ),
    ).toBe("true");
    const approvedPrecisionIssue = issueLink(
      container,
      "Contribution financière approuvée : un montant monétaire doit comporter au plus deux décimales",
    );
    expect(approvedPrecisionIssue.getAttribute("href")).toBe(
      "#site-aid-approved-contribution",
    );
    act(() => approvedPrecisionIssue.click());
    expect(document.activeElement).toBe(
      controlById(container, approvedContribution.id),
    );
    changeControl(
      controlById<HTMLInputElement>(container, approvedContribution.id),
      "2100",
    );

    changeControl(
      labelControl<HTMLSelectElement>(
        container,
        "Octroi juridique de l’aide actuelle",
        "select",
      ),
      "yes",
    );
    changeControl(
      labelControl<HTMLInputElement>(
        container,
        "Date d’octroi juridique de l’aide actuelle",
        "input",
      ),
      "2026-07-25",
    );
    changeControl(
      labelControl<HTMLSelectElement>(
        container,
        "Mode et destinataire du paiement",
        "select",
      ),
      "direct",
    );
    changeControl(
      labelControl<HTMLSelectElement>(container, "État financier", "select"),
      "received",
    );
    const actualContribution = labelControl<HTMLInputElement>(
      container,
      "Contribution effectivement payée au fournisseur",
      "input",
    );
    changeControl(actualContribution, "99.999");

    reanalyzeExpiredDossier(container);
    goToWizardStep(container, "payment");
    const analyzedActualContribution = controlById<HTMLInputElement>(
      container,
      actualContribution.id,
    );
    expect(analyzedActualContribution.getAttribute("aria-invalid")).toBe(
      "true",
    );
    expect(
      analyzedActualContribution.getAttribute("aria-errormessage"),
    ).toBeNull();
    expect(
      analyzedActualContribution.getAttribute("aria-describedby")?.split(/\s+/),
    ).toContain("site-aid-actual-contribution-error-message");
    expect(
      analyzedActualContribution.getAttribute("aria-describedby")?.split(/\s+/),
    ).not.toContain("site-aid-error-summary");
    const actualPrecisionIssue = issueLink(
      container,
      "Paiement effectif de l’aide : un montant monétaire doit comporter au plus deux décimales",
    );
    expect(actualPrecisionIssue.getAttribute("href")).toBe(
      "#site-aid-actual-contribution",
    );
    act(() => actualPrecisionIssue.click());
    expect(document.activeElement).toBe(
      controlById(container, actualContribution.id),
    );
    expect(
      normalizedText(resultCard(container, "Reste de facture non calculable")),
    ).toMatch(/Reste de facture non calculable\s*ND/);
    goToWizardStep(container, "proof");
    expect(
      labelControl<HTMLInputElement>(
        container,
        "Référence du reste payé au fournisseur par l’entreprise",
        "input",
      ),
    ).not.toBeNull();
  });

  it("keeps legal value, approved contribution and actual payment independent", () => {
    loadBrittanyExample(container);
    completeExampleNotification(container);
    changeControl(
      labelControl<HTMLInputElement>(
        container,
        "Valeur juridique de l’aide actuelle",
        "input",
      ),
      "1800",
    );
    changeControl(
      labelControl<HTMLInputElement>(
        container,
        "Contribution financière approuvée pour la facture",
        "input",
      ),
      "1200",
    );
    expect(
      labelControl<HTMLInputElement>(
        container,
        "Contribution effectivement payée à l’entreprise",
        "input",
      ).disabled,
    ).toBe(true);

    changeControl(
      labelControl<HTMLSelectElement>(container, "État financier", "select"),
      "received",
    );
    changeControl(
      labelControl<HTMLInputElement>(
        container,
        "Contribution effectivement payée à l’entreprise",
        "input",
      ),
      "900",
    );

    expect(
      labelControl<HTMLInputElement>(
        container,
        "Valeur juridique de l’aide actuelle",
        "input",
      ).value,
    ).toBe("1800");
    expect(
      labelControl<HTMLInputElement>(
        container,
        "Contribution financière approuvée pour la facture",
        "input",
      ).value,
    ).toBe("1200");
    expect(
      labelControl<HTMLInputElement>(
        container,
        "Contribution effectivement payée à l’entreprise",
        "input",
      ).value,
    ).toBe("900");
    expect(normalizedText(container)).toContain(
      "Flux déclaré : l’entreprise reçoit le versement",
    );
  });

  it("exposes every instrument kind without inviting a nominal loan or guarantee amount", () => {
    loadBrittanyExample(container);
    goToWizardStep(container, "proof");
    const instrument = labelControl<HTMLSelectElement>(
      container,
      "Type d’instrument de l’aide actuelle",
      "select",
    );
    expect([...instrument.options].map((option) => option.value)).toEqual([
      "unknown",
      "grant",
      "loan",
      "guarantee",
      "tax-relief",
      "other",
    ]);

    for (const instrumentKind of ["loan", "guarantee"]) {
      changeControl(instrument, instrumentKind);
      const help = normalizedText(instrument.parentElement ?? container);
      expect(help).toContain("équivalent-subvention brut (ESB) communiqué");
      expect(help).toContain("jamais le capital prêté ni le nominal garanti");
    }

    changeControl(instrument, "tax-relief");
    expect(normalizedText(instrument.parentElement ?? container)).toContain(
      "n’inventez pas de versement bancaire",
    );
    changeControl(instrument, "unknown");
    expect(normalizedText(instrument.parentElement ?? container)).toContain(
      "Une catégorie inconnue suspend les conclusions",
    );
  });

  it("clears and disables unsupported financial controls without invalidating a documented non-grant instrument", () => {
    loadBrittanyExample(container);
    completeExampleNotification(container);
    changeControl(
      labelControl<HTMLSelectElement>(
        container,
        "Mode et destinataire du paiement",
        "select",
      ),
      "direct",
    );
    changeControl(
      labelControl<HTMLSelectElement>(container, "État financier", "select"),
      "received",
    );

    const instrumentId = "site-aid-instrument-kind";
    const legalValueId = "site-aid-legal-aid-value";
    const approvedContributionId = "site-aid-approved-contribution";
    const actualContributionId = "site-aid-actual-contribution";
    const paymentModeId = "site-aid-payment-mode";
    const prepaymentId = "site-aid-prepayment-percent";
    changeControl(
      controlById<HTMLInputElement>(container, actualContributionId),
      "1800",
    );

    for (const instrumentKind of ["loan", "guarantee", "tax-relief", "other"]) {
      changeControl(
        controlById<HTMLSelectElement>(container, instrumentId),
        instrumentKind,
      );
      expect(
        controlById<HTMLInputElement>(container, legalValueId).disabled,
      ).toBe(false);
      expect(controlById<HTMLInputElement>(container, legalValueId).value).toBe(
        "2100",
      );
      expect(
        controlById<HTMLInputElement>(container, approvedContributionId)
          .disabled,
      ).toBe(true);
      expect(
        controlById<HTMLInputElement>(container, approvedContributionId).value,
      ).toBe("");
      expect(
        controlById<HTMLInputElement>(container, actualContributionId).disabled,
      ).toBe(true);
      expect(
        controlById<HTMLInputElement>(container, actualContributionId).value,
      ).toBe("");
      expect(
        controlById<HTMLSelectElement>(container, paymentModeId).disabled,
      ).toBe(true);
      expect(
        controlById<HTMLSelectElement>(container, paymentModeId).value,
      ).toBe("unknown");
      expect(
        controlById<HTMLInputElement>(container, prepaymentId).disabled,
      ).toBe(true);
      expect(controlById<HTMLInputElement>(container, prepaymentId).value).toBe(
        "",
      );
      expect(
        controlById<HTMLSelectElement>(container, instrumentId).getAttribute(
          "aria-invalid",
        ),
      ).not.toBe("true");
    }

    const stage = labelControl<HTMLSelectElement>(
      container,
      "État financier",
      "select",
    );
    changeControl(stage, "notified");
    changeControl(stage, "received");
    expect(
      controlById<HTMLInputElement>(container, approvedContributionId).value,
    ).toBe("");
    expect(
      controlById<HTMLInputElement>(container, actualContributionId).value,
    ).toBe("");
    expect(controlById<HTMLSelectElement>(container, paymentModeId).value).toBe(
      "unknown",
    );
    expect(controlById<HTMLInputElement>(container, prepaymentId).value).toBe(
      "",
    );

    const text = normalizedText(container);
    expect(text).toContain("Instrument non modélisé financièrement");
    expect(text).toContain(
      "Ne saisissez ici ni capital de prêt, ni nominal garanti, ni ESB",
    );
    expect(text).not.toContain(
      "Les lignes reprennent-elles la facture finale acquittée",
    );
    expect(
      normalizedText(
        resultCard(container, "Contribution financière non modélisée"),
      ),
    ).toMatch(/Contribution financière non modélisée\s*ND/);
    expect(
      normalizedText(
        resultCard(container, "Coût après instrument non modélisé"),
      ),
    ).toMatch(/Coût après instrument non modélisé\s*ND/);

    goToWizardStep(container, "proof");
    changeControl(
      controlById<HTMLSelectElement>(container, instrumentId),
      "grant",
    );
    expect(
      controlById<HTMLInputElement>(container, approvedContributionId).disabled,
    ).toBe(false);
    expect(
      controlById<HTMLInputElement>(container, approvedContributionId).value,
    ).toBe("");
    expect(
      controlById<HTMLInputElement>(container, actualContributionId).disabled,
    ).toBe(false);
    expect(
      controlById<HTMLInputElement>(container, actualContributionId).value,
    ).toBe("");
    expect(
      controlById<HTMLSelectElement>(container, paymentModeId).disabled,
    ).toBe(false);
    expect(controlById<HTMLSelectElement>(container, paymentModeId).value).toBe(
      "unknown",
    );
    expect(normalizedText(container)).toContain(
      "Les lignes reprennent-elles la facture finale acquittée",
    );
  });

  it("names direct-payment flows without treating them as company cash receipts", async () => {
    loadBrittanyExample(container);
    completeExampleNotification(container);
    changeControl(
      labelControl<HTMLSelectElement>(
        container,
        "Octroi juridique de l’aide actuelle",
        "select",
      ),
      "yes",
    );
    changeControl(
      labelControl<HTMLInputElement>(
        container,
        "Date d’octroi juridique de l’aide actuelle",
        "input",
      ),
      "2026-07-25",
    );
    changeControl(
      labelControl<HTMLSelectElement>(
        container,
        "Mode et destinataire du paiement",
        "select",
      ),
      "direct",
    );

    const prepayment = labelControl<HTMLInputElement>(
      container,
      "Part de l’aide non avancée par l’entreprise",
      "input",
    );
    expect(prepayment.value).toBe("100");
    expect(prepayment.disabled).toBe(true);
    expect(normalizedText(container)).toContain(
      "L’entreprise encaisse 0 € dans ce flux",
    );
    expect(
      normalizedText(resultCard(container, "Reste de facture non calculable")),
    ).toMatch(/Reste de facture non calculable\s*ND/);
    goToWizardStep(container, "proof");

    changeControl(
      labelControl<HTMLSelectElement>(container, "État financier", "select"),
      "received",
    );
    const directAmount = labelControl<HTMLInputElement>(
      container,
      "Contribution effectivement payée au fournisseur",
      "input",
    );
    expect(directAmount.disabled).toBe(false);
    expect(normalizedText(container)).toContain(
      "Référence du reste payé au fournisseur par l’entreprise",
    );
    expect(normalizedText(container)).toContain(
      "Date du versement direct au fournisseur",
    );
    expect(normalizedText(container)).toContain(
      "Référence du versement direct au fournisseur",
    );

    goToWizardStep(container, "quote");
    for (const vatRate of [
      ...container.querySelectorAll<HTMLInputElement>(
        "#site-aid-quote-section input",
      ),
    ].filter((control) =>
      control.parentElement?.textContent?.includes("Taux de TVA"),
    )) {
      changeControl(vatRate, "0");
    }
    for (const eligibility of [
      ...container.querySelectorAll<HTMLSelectElement>(
        "#site-aid-quote-section select",
      ),
    ]) {
      changeControl(eligibility, "yes");
    }
    goToWizardStep(container, "proof");
    changeControl(
      labelControl<HTMLInputElement>(container, "Taux de l’aide", "input"),
      "100",
    );
    changeControl(
      labelControl<HTMLInputElement>(container, "Plafond de l’aide", "input"),
      "10000",
    );
    changeControl(
      labelControl<HTMLInputElement>(
        container,
        "Valeur juridique de l’aide actuelle",
        "input",
      ),
      "10000",
    );
    changeControl(
      labelControl<HTMLInputElement>(
        container,
        "Contribution financière approuvée pour la facture",
        "input",
      ),
      "10000",
    );
    changeControl(directAmount, "10000");
    const finalInvoiceMatch = labelControl<HTMLSelectElement>(
      container,
      "Les lignes reprennent-elles la facture finale acquittée",
      "select",
    );
    changeControl(finalInvoiceMatch, "no");

    expect(normalizedText(container)).toContain(
      "Égalité arithmétique provisoire",
    );
    expect(normalizedText(container)).toContain(
      "la couverture intégrale n’est pas documentée",
    );
    expect(normalizedText(container)).not.toContain(
      "Le moteur a validé que le paiement direct couvre toute la facture",
    );
    expect(
      [...container.querySelectorAll("label")].some((label) =>
        label.textContent?.includes(
          "Référence du reste payé au fournisseur par l’entreprise",
        ),
      ),
    ).toBe(false);
    expect(normalizedText(container)).toContain(
      "Date du versement direct au fournisseur",
    );
    expect(normalizedText(container)).toContain(
      "Référence du versement direct au fournisseur",
    );
    expect(
      normalizedText(
        resultCard(container, "Reste de facture payé par l’entreprise"),
      ),
    ).toMatch(/Reste de facture payé par l’entreprise\s*0 €/);

    const createObjectUrl = vi.fn((blob: Blob): string => {
      void blob;
      return "blob:provisional-direct-report";
    });
    Object.defineProperty(URL, "createObjectURL", {
      configurable: true,
      value: createObjectUrl,
    });
    Object.defineProperty(URL, "revokeObjectURL", {
      configurable: true,
      value: vi.fn(),
    });
    vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(
      () => undefined,
    );
    act(() => buttonByText(container, "Télécharger le dossier TXT").click());
    const provisionalReportBlob = createObjectUrl.mock.calls[0]?.[0] as Blob;
    const provisionalReport = await provisionalReportBlob.text();
    expect(provisionalReport).toContain(
      "Couverture intégrale arithmétique provisoire",
    );
    expect(provisionalReport).toContain(
      "validation suspendue aux pièces du paiement direct",
    );
    expect(provisionalReport).not.toContain(
      "aucune preuve de reste requise ; couverture intégrale documentée",
    );

    goToWizardStep(container, "proof");
    changeControl(
      controlById<HTMLSelectElement>(container, finalInvoiceMatch.id),
      "yes",
    );
    changeControl(
      labelControl<HTMLInputElement>(
        container,
        "Date de la facture finale",
        "input",
      ),
      "2026-07-25",
    );
    changeControl(
      labelControl<HTMLInputElement>(
        container,
        "Référence de la facture finale",
        "input",
      ),
      "FACT-DIRECT-100",
    );
    changeControl(
      labelControl<HTMLInputElement>(
        container,
        "Date du versement direct au fournisseur",
        "input",
      ),
      "2026-07-26",
    );
    changeControl(
      labelControl<HTMLInputElement>(
        container,
        "Référence du versement direct au fournisseur",
        "input",
      ),
      "PAIEMENT-DIRECT-100",
    );
    expect(normalizedText(container)).toContain(
      "Le moteur a validé que le paiement direct couvre toute la facture",
    );
    expect(
      normalizedText(
        resultCard(container, "Reste de facture payé par l’entreprise"),
      ),
    ).toContain("couverture intégrale documentée");
    expect(
      container.querySelector("#site-aid-error-summary")?.textContent ?? "",
    ).not.toContain("Paiement du fournisseur, référence");
  });

  it("keeps the supplier remainder and its proof for a valid partial direct payment", () => {
    loadBrittanyExample(container);
    completeExampleNotification(container);
    changeControl(
      labelControl<HTMLSelectElement>(
        container,
        "Octroi juridique de l’aide actuelle",
        "select",
      ),
      "yes",
    );
    changeControl(
      labelControl<HTMLInputElement>(
        container,
        "Date d’octroi juridique de l’aide actuelle",
        "input",
      ),
      "2026-07-25",
    );
    changeControl(
      labelControl<HTMLSelectElement>(
        container,
        "Mode et destinataire du paiement",
        "select",
      ),
      "direct",
    );
    changeControl(
      labelControl<HTMLSelectElement>(container, "État financier", "select"),
      "received",
    );
    changeControl(
      labelControl<HTMLInputElement>(
        container,
        "Contribution effectivement payée au fournisseur",
        "input",
      ),
      "1800",
    );

    expect(
      labelControl<HTMLInputElement>(
        container,
        "Référence du reste payé au fournisseur par l’entreprise",
        "input",
      ),
    ).not.toBeNull();
    expect(
      normalizedText(
        resultCard(container, "Reste de facture payé par l’entreprise"),
      ),
    ).toMatch(/Reste de facture payé par l’entreprise\s*10 200 €/);
    expect(normalizedText(container)).not.toContain(
      "Le moteur a validé que le paiement direct couvre toute la facture",
    );
  });

  it("keeps supplier proof visible and shows ND when a direct payment is inconsistent", () => {
    loadBrittanyExample(container);
    completeExampleNotification(container);
    changeControl(
      labelControl<HTMLSelectElement>(
        container,
        "Octroi juridique de l’aide actuelle",
        "select",
      ),
      "yes",
    );
    changeControl(
      labelControl<HTMLInputElement>(
        container,
        "Date d’octroi juridique de l’aide actuelle",
        "input",
      ),
      "2026-07-25",
    );
    changeControl(
      labelControl<HTMLSelectElement>(
        container,
        "Mode et destinataire du paiement",
        "select",
      ),
      "direct",
    );
    changeControl(
      labelControl<HTMLSelectElement>(container, "État financier", "select"),
      "received",
    );
    const actualContribution = labelControl<HTMLInputElement>(
      container,
      "Contribution effectivement payée au fournisseur",
      "input",
    );
    changeControl(actualContribution, "12000");

    const supplierProof = labelControl<HTMLInputElement>(
      container,
      "Référence du reste payé au fournisseur par l’entreprise",
      "input",
    );
    expect(supplierProof).not.toBeNull();
    const receiptDate = labelControl<HTMLInputElement>(
      container,
      "Date du versement direct au fournisseur",
      "input",
    );
    const receiptReference = labelControl<HTMLInputElement>(
      container,
      "Référence du versement direct au fournisseur",
      "input",
    );
    reanalyzeExpiredDossier(container);
    goToWizardStep(container, "payment");
    expect(
      controlById(container, actualContribution.id).getAttribute(
        "aria-invalid",
      ),
    ).toBe("true");
    expect(
      controlById(container, supplierProof.id).getAttribute("aria-invalid"),
    ).toBe("true");
    expect(
      controlById(container, receiptDate.id).getAttribute("aria-invalid"),
    ).toBe("true");
    expect(
      controlById(container, receiptReference.id).getAttribute("aria-invalid"),
    ).toBe("true");

    const actualIssue = issueLink(
      container,
      "Paiement effectif de l’aide : il dépasse",
    );
    act(() => actualIssue.click());
    expect(document.activeElement).toBe(
      controlById(container, actualContribution.id),
    );
    const supplierIssue = issueLink(
      container,
      "Reste payé par l’entreprise au fournisseur",
    );
    act(() => supplierIssue.click());
    expect(document.activeElement).toBe(
      controlById(container, supplierProof.id),
    );
    const receiptDateIssue = issueLink(
      container,
      "Versement ou paiement direct : date manquante",
    );
    act(() => receiptDateIssue.click());
    expect(document.activeElement).toBe(controlById(container, receiptDate.id));
    const receiptReferenceIssue = issueLink(
      container,
      "Versement ou paiement direct : référence de preuve manquante",
    );
    act(() => receiptReferenceIssue.click());
    expect(document.activeElement).toBe(
      controlById(container, receiptReference.id),
    );

    const remainder = resultCard(container, "Reste de facture non calculable");
    expect(normalizedText(remainder)).toMatch(
      /Reste de facture non calculable\s*ND/,
    );
    expect(normalizedText(remainder)).toContain(
      "le moteur ne valide aucun reste",
    );
    goToWizardStep(container, "payment");
    expect(normalizedText(container)).toContain(
      "Reste payé par l’entreprise au fournisseur : ND",
    );
    expect(normalizedText(container)).not.toContain(
      "Le moteur a validé que le paiement direct couvre toute la facture",
    );
  });

  it("explains when the official calculation base is outside the tool", () => {
    loadBrittanyExample(container);
    goToWizardStep(container, "proof");
    changeControl(
      labelControl<HTMLSelectElement>(
        container,
        "Assiette prévue par le règlement",
        "select",
      ),
      "other",
    );
    expect(normalizedText(container)).toContain("Assiette hors périmètre");
    analyzeDossier(container);

    const text = normalizedText(container);
    expect(text).toContain("Limites de calcul de l’outil");
  });

  it("withdraws final costs when a VAT fraction becomes unknown", () => {
    loadBrittanyExample(container);
    completeExampleNotification(container);
    goToWizardStep(container, "quote");
    changeControl(
      labelControl<HTMLInputElement>(
        container,
        "Part de TVA déductible",
        "input",
      ),
      "",
    );

    reanalyzeExpiredDossier(container);
    goToWizardStep(container, "review");
    const text = normalizedText(container);
    expect(text).toContain("DOSSIER INCOMPLET — VERDICT GLOBAL SUSPENDU");
    expect(text).toMatch(/Coût conditionnel non calculable\s*ND/);
    expect(text).toContain("part de TVA déductible à confirmer");
  });

  it("renders quote review as mobile cards and a bounded desktop table", () => {
    loadBrittanyExampleWithoutAnalysis(container);
    const cards = container.querySelector("[data-site-aid-review-quote-cards]");
    const table = container.querySelector("[data-site-aid-review-quote-table]");
    expect(cards?.className).toContain("md:hidden");
    expect(cards?.querySelectorAll("section")).toHaveLength(3);
    expect(cards?.querySelectorAll("dl")).toHaveLength(3);
    expect(table?.className).toContain("md:table");
    expect(table?.className).toContain("table-fixed");
    expect(table?.className).not.toContain("min-w-");
    expect(
      container.querySelector("#site-aid-review-quote .overflow-x-auto"),
    ).toBeNull();
  });

  it("returns every review edit directly to the review on the next action", () => {
    loadBrittanyExampleWithoutAnalysis(container);
    const reviewEdits: Array<[string, WizardStepId]> = [
      ["Modifier le profil et la source", "profile"],
      ["Modifier les lignes du devis", "quote"],
      ["Modifier les critères et l’assiette", "eligibility"],
      ["Modifier le droit à l’aide", "legal"],
      ["Modifier le versement et ses preuves", "payment"],
      ["Modifier la trésorerie et l’attente", "treasury"],
      ["Modifier les aides antérieures", "history"],
      ["Modifier la préparation de candidature", "application"],
    ];

    for (const [buttonText, stepId] of reviewEdits) {
      goToWizardStep(container, "review");
      act(() => buttonByText(container, buttonText).click());
      expect(
        container
          .querySelector("[data-site-aid-wizard-panel]")
          ?.getAttribute("data-site-aid-wizard-panel"),
      ).toBe(stepId);
      act(() =>
        buttonByText(container, "Retour à Vérifier vos réponses").click(),
      );
      expect(
        container
          .querySelector("[data-site-aid-wizard-panel]")
          ?.getAttribute("data-site-aid-wizard-panel"),
      ).toBe("review");
      expect(document.activeElement).toBe(
        controlById(container, `site-aid-review-${stepId}`),
      );
    }
  });

  it("downloads a UTF-8 text dossier with a BOM and stable filename", async () => {
    loadBrittanyExample(container);
    const createObjectUrl = vi.fn((blob: Blob): string => {
      void blob;
      return "blob:site-aid-report";
    });
    const revokeObjectUrl = vi.fn();
    Object.defineProperty(URL, "createObjectURL", {
      configurable: true,
      value: createObjectUrl,
    });
    Object.defineProperty(URL, "revokeObjectURL", {
      configurable: true,
      value: revokeObjectUrl,
    });
    const click = vi
      .spyOn(HTMLAnchorElement.prototype, "click")
      .mockImplementation(() => undefined);

    act(() => buttonByText(container, "Télécharger le dossier TXT").click());

    expect(createObjectUrl).toHaveBeenCalledOnce();
    expect(click).toHaveBeenCalledOnce();
    const anchor = click.mock.contexts[0] as HTMLAnchorElement;
    expect(anchor.download).toBe(
      "dossier-aide-tresorerie-site-exemple-fictif-bretagne-2026-07-26.txt",
    );
    const blob = createObjectUrl.mock.calls[0]?.[0] as Blob;
    const content = await blob.text();
    expect(content.charCodeAt(0)).toBe(0xfeff);
    expect(content).toContain("DOSSIER D’AIDE ET DE TRÉSORERIE POUR UN SITE");
    expect(content).toContain("Instrument : Subvention");
    expect(content).toContain("Valeur juridique de l’aide courante");
    expect(content).toContain(
      "Contribution financière approuvée pour la facture",
    );
    expect(content).toContain(
      "Statut déclaré de la base juridique : De minimis",
    );
    expect(content).toContain(
      "Statut résolu par le moteur : De minimis général",
    );
    expect(content).toContain(
      "Fusion, acquisition ou scission pertinente déclarée — non authentifiée par le moteur : NON",
    );
    expect(content).toContain(
      "Attestation fictive du 26/07/2026 : aucune fusion, acquisition ou scission",
    );
    expect(content).toContain("PRÉPARATION DE LA CANDIDATURE");
    expect(content).toContain("site-aid-application-r31-2026-07-27");
    expect(content).toContain(
      "Transformation numérique du commerce et amélioration mesurable",
    );
    expect(content).toContain("1. Devis détaillé et daté");
    expect(content).toContain(
      "Limite : cette préparation ne remplace ni le règlement de l’aide, ni la plateforme officielle, ni la décision de l’autorité compétente.",
    );
    act(() => vi.advanceTimersByTime(0));
    expect(revokeObjectUrl).toHaveBeenCalledWith("blob:site-aid-report");
    expect(container.textContent).toContain("Dossier texte téléchargé");
  });

  it("keeps corporate and SGEI declarations synchronized between the live print report and TXT", async () => {
    loadBrittanyExample(container);
    goToWizardStep(container, "cash");
    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-profile-corporate-event-status",
      ),
      "yes",
    );
    changeControl(
      controlById<HTMLTextAreaElement>(
        container,
        "site-aid-profile-corporate-event-evidence",
      ),
      "Acte de scission S-2026-01 et méthode d’allocation vérifiés",
    );
    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-profile-corporate-event-kind",
      ),
      "split",
    );
    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-profile-corporate-event-history-adjusted",
      ),
      "yes",
    );
    goToWizardStep(container, "proof");
    changeControl(
      controlById<HTMLInputElement>(container, "site-aid-de-minimis-regime"),
      "2023/2832",
    );
    completeCurrentSgeiChecks(container);

    goToWizardStep(container, "cash");
    act(() => buttonByText(container, "Ajouter une aide antérieure").click());
    completeDeMinimisRegisterEntry(container, 0, "SAS du cas pédagogique");
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-register-entry-1-de-minimis-regime",
      ),
      "2023/2832",
    );
    completeRegisterSgeiChecks(container, 0);

    const createObjectUrl = vi.fn((blob: Blob): string => {
      void blob;
      return "blob:r21-site-aid-report";
    });
    Object.defineProperty(URL, "createObjectURL", {
      configurable: true,
      value: createObjectUrl,
    });
    Object.defineProperty(URL, "revokeObjectURL", {
      configurable: true,
      value: vi.fn(),
    });
    vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(
      () => undefined,
    );

    analyzeDossier(container);
    const firstPrintableReport = container.querySelector<HTMLElement>(
      ".site-aid-print-report",
    );
    expect(firstPrintableReport).not.toBeNull();
    const firstReportText = firstPrintableReport?.textContent ?? "";
    expect(firstReportText).toContain(
      "Fusion, acquisition ou scission pertinente déclarée — non authentifiée par le moteur : OUI",
    );
    expect(firstReportText).toContain("Type d’opération déclaré : Scission");
    expect(firstReportText).toContain(
      "Registre de minimis déclaré ajusté après l’opération — non authentifié par le moteur : OUI",
    );
    expect(firstReportText).toContain(
      "Mandat SIEG déclaré vérifié — non authentifié par le moteur : OUI",
    );
    expect(firstReportText).toContain(
      "Autre compensation relative au même SIEG déclarée présente — non authentifiée par le moteur : NON",
    );
    expect(firstReportText).toContain(
      "mandat SIEG déclaré vérifié — non authentifié OUI",
    );
    expect(firstReportText).toContain(
      "preuve et inventaire des compensations du même SIEG déclarés — non authentifiés Inventaire vérifié 1",
    );

    goToWizardStep(container, "review");
    act(() => buttonByText(container, "Télécharger le dossier TXT").click());
    const firstBlob = createObjectUrl.mock.calls[0]?.[0] as Blob;
    expect((await firstBlob.text()).slice(1)).toBe(firstReportText);

    goToWizardStep(container, "proof");
    const currentCompensationStatus = controlById<HTMLSelectElement>(
      container,
      "site-aid-current-sgei-compensation-status",
    );
    changeControl(currentCompensationStatus, "yes");
    expect(
      controlById<HTMLInputElement>(
        container,
        "site-aid-current-sgei-compensation-evidence",
      ).value,
    ).toBe("");

    analyzeDossier(container);
    const updatedPrintableReport = container.querySelector<HTMLElement>(
      ".site-aid-print-report",
    );
    const updatedReportText = updatedPrintableReport?.textContent ?? "";
    expect(updatedReportText).toContain(
      "Autre compensation relative au même SIEG déclarée présente — non authentifiée par le moteur : OUI",
    );
    expect(updatedReportText).toContain(
      "Preuve et inventaire des compensations du même SIEG déclarés — non authentifiés : ND",
    );
    expect(updatedReportText).not.toBe(firstReportText);

    goToWizardStep(container, "review");
    act(() => buttonByText(container, "Télécharger le dossier TXT").click());
    const updatedBlob = createObjectUrl.mock.calls[1]?.[0] as Blob;
    expect((await updatedBlob.text()).slice(1)).toBe(updatedReportText);
  });

  it("prints only the scoped report", () => {
    loadBrittanyExample(container);
    const print = vi.fn();
    Object.defineProperty(window, "print", {
      configurable: true,
      value: print,
    });

    act(() => buttonByText(container, "Imprimer le dossier").click());

    const style = container.querySelector("style")?.textContent ?? "";
    expect(print).toHaveBeenCalledOnce();
    expect(style).toContain("body *:not(#site-aid-decision-dossier)");
    expect(style).toContain(
      "#site-aid-decision-dossier > :not(.site-aid-print-report)",
    );
    expect(container.querySelector(".site-aid-print-report")).not.toBeNull();
  });

  it("protects reset with an accessible second step", () => {
    loadBrittanyExample(container);
    goToWizardStep(container, "profile");
    const reference = labelControl<HTMLInputElement>(
      container,
      "Référence interne",
      "input",
    );
    expect(reference.value).toBe("Exemple fictif Bretagne");
    goToWizardStep(container, "cash");
    expect(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-profile-corporate-event-status",
      ).value,
    ).toBe("no");
    expect(
      controlById<HTMLTextAreaElement>(
        container,
        "site-aid-profile-corporate-event-evidence",
      ).value,
    ).not.toBe("");

    goToWizardStep(container, "quote");
    changeControl(
      labelControl<HTMLInputElement>(container, "Montant HT", "input"),
      "6500",
    );
    expect(vi.getTimerCount()).toBe(1);
    expect(
      container.querySelector("[data-site-aid-analysis-state='stale']"),
    ).not.toBeNull();

    goToWizardStep(container, "review");
    const resetTrigger = buttonByText(container, "Réinitialiser");
    act(() => resetTrigger.click());
    const confirmationGroup = container.querySelector<HTMLElement>(
      "#site-aid-reset-confirmation",
    );
    const safeAction = buttonByText(container, "Annuler et conserver");
    expect(confirmationGroup?.getAttribute("role")).toBe("group");
    expect(confirmationGroup?.getAttribute("aria-labelledby")).toBe(
      "site-aid-reset-title",
    );
    expect(confirmationGroup?.getAttribute("aria-describedby")).toBe(
      "site-aid-reset-description",
    );
    expect(
      confirmationGroup?.matches('[role="alert"], [role="alertdialog"]'),
    ).toBe(false);
    expect(confirmationGroup?.textContent).toContain(
      "Cette action ne peut pas être annulée",
    );
    expect(document.activeElement).toBe(safeAction);

    const escapeCancel = new KeyboardEvent("keydown", {
      key: "Escape",
      bubbles: true,
      cancelable: true,
    });
    act(() => safeAction.dispatchEvent(escapeCancel));
    expect(escapeCancel.defaultPrevented).toBe(true);
    expect(reference.value).toBe("Exemple fictif Bretagne");
    expect(document.activeElement).toBe(resetTrigger);
    expect(container.querySelector("#site-aid-reset-confirmation")).toBeNull();

    act(() => resetTrigger.click());
    expect(document.activeElement).toBe(
      buttonByText(container, "Annuler et conserver"),
    );
    act(() => buttonByText(container, "Annuler et conserver").click());
    expect(reference.value).toBe("Exemple fictif Bretagne");
    expect(document.activeElement).toBe(resetTrigger);

    act(() => resetTrigger.click());
    expect(document.activeElement).toBe(
      buttonByText(container, "Annuler et conserver"),
    );
    act(() => buttonByText(container, "Effacer définitivement").click());
    expect(
      labelControl<HTMLInputElement>(container, "Référence interne", "input")
        .value,
    ).toBe("");
    expect(document.activeElement).toBe(
      controlById(container, "site-aid-wizard-step-profile-title"),
    );
    expect(vi.getTimerCount()).toBe(1);
    const resetLiveMessage = container.querySelector(
      '[role="status"][aria-live="polite"]',
    )?.textContent;
    act(() => vi.advanceTimersByTime(1000));
    expect(
      container.querySelector('[role="status"][aria-live="polite"]')
        ?.textContent,
    ).toBe(resetLiveMessage);
    expect(
      container.querySelector("#site-aid-corporate-event-section"),
    ).toBeNull();
    goToWizardStep(container, "proof");
    changeControl(
      controlById<HTMLSelectElement>(container, "site-aid-legal-basis-status"),
      "de-minimis",
    );
    goToWizardStep(container, "cash");
    expect(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-profile-corporate-event-status",
      ).value,
    ).toBe("unknown");
    expect(
      controlById<HTMLTextAreaElement>(
        container,
        "site-aid-profile-corporate-event-evidence",
      ).value,
    ).toBe("");
  });

  it("blocks incoherent pre-notification chronology but preserves historical notified dossiers", () => {
    loadBrittanyExampleWithoutAnalysis(container);
    goToWizardStep(container, "application");
    changeControl(
      controlById<HTMLInputElement>(container, "site-aid-application-deadline"),
      "2026-07-25",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-document-1-deadline",
      ),
      "2026-07-30",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-deadline-time",
      ),
      "",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-deadline-time-zone",
      ),
      "Europe/Paris",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-deadline-verification-date",
      ),
      "2026-07-25",
    );
    analyzeDossier(container);
    expect(normalizedText(container)).toContain(
      "le guichet est déclaré clos à la date locale du guichet",
    );
    expect(normalizedText(container)).toContain(
      "l’échéance de préparation est postérieure à la clôture du guichet",
    );
    expect(normalizedText(container)).not.toContain(
      "le fuseau doit être un identifiant IANA valide",
    );

    goToWizardStep(container, "payment");
    changeControl(
      controlById<HTMLSelectElement>(container, "site-aid-stage"),
      "notified",
    );
    analyzeDossier(container);
    expect(normalizedText(container)).not.toContain(
      "le guichet est déclaré clos à la date locale du guichet",
    );
    expect(normalizedText(container)).not.toContain(
      "l’échéance de préparation est postérieure à la clôture du guichet",
    );
  });

  it("keeps the bounded criterion matrix in review, JSON and print without scoring it", async () => {
    loadBrittanyExampleWithoutAnalysis(container);
    goToWizardStep(container, "application");
    act(() => buttonByText(container, "Ajouter un critère publié").click());
    expect(document.activeElement).toBe(
      controlById(
        container,
        "site-aid-application-criterion-2-published-criterion",
      ),
    );
    changeControl(
      controlById<HTMLTextAreaElement>(
        container,
        "site-aid-application-criterion-2-published-criterion",
      ),
      "Caractère innovant publié",
    );
    changeControl(
      controlById<HTMLTextAreaElement>(
        container,
        "site-aid-application-criterion-2-project-response",
      ),
      "Réponse factuelle du projet.",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-criterion-2-evidence",
      ),
      "Étude à confirmer",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-criterion-2-owner",
      ),
      "Direction",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-criterion-2-word-limit",
      ),
      "180",
    );
    analyzeDossier(container);
    expect(normalizedText(container)).toContain("Caractère innovant publié");
    expect(normalizedText(container)).toContain("180 mots");
    expect(normalizedText(container)).toContain(
      "l’outil ne note jamais la qualité",
    );
    expect(
      container.querySelector(".site-aid-print-report")?.textContent,
    ).toContain("2. Critère publié : Caractère innovant publié");

    const createObjectUrl = vi.fn((blob: Blob) => {
      void blob;
      return "blob:criterion-r25";
    });
    Object.defineProperty(URL, "createObjectURL", {
      configurable: true,
      value: createObjectUrl,
    });
    Object.defineProperty(URL, "revokeObjectURL", {
      configurable: true,
      value: vi.fn(),
    });
    vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(
      () => undefined,
    );
    act(() => buttonByText(container, "Exporter le brouillon JSON").click());
    const exported = JSON.parse(
      await (createObjectUrl.mock.calls[0]?.[0] as unknown as Blob).text(),
    ) as {
      application: { criteria: Array<{ wordLimit?: number }> };
    };
    expect(exported.application.criteria).toHaveLength(2);
    expect(exported.application.criteria[1].wordLimit).toBe(180);
  });

  it("requires criterion content for selection but never invents an unpublished word limit", () => {
    loadBrittanyExampleWithoutAnalysis(container);
    goToWizardStep(container, "application");
    for (const [id, value] of [
      ["site-aid-application-criterion-1-published-criterion", ""],
      ["site-aid-application-criterion-1-project-response", ""],
    ] as const) {
      changeControl(controlById<HTMLTextAreaElement>(container, id), value);
    }
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-criterion-1-evidence",
      ),
      "",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-criterion-1-owner",
      ),
      "",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-criterion-1-word-limit",
      ),
      "",
    );
    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-application-award-mode",
      ),
      "right",
    );
    analyzeDossier(container);
    expect(normalizedText(container)).not.toContain(
      "Candidature, critère 1 : recopiez le critère publié",
    );

    goToWizardStep(container, "application");
    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-application-award-mode",
      ),
      "selection",
    );
    analyzeDossier(container);
    expect(normalizedText(container)).toContain(
      "Candidature, critère 1 : recopiez le critère publié",
    );
    expect(normalizedText(container)).not.toContain(
      "indiquez une limite de mots",
    );

    goToWizardStep(container, "application");
    changeControl(
      controlById<HTMLTextAreaElement>(
        container,
        "site-aid-application-criterion-1-published-criterion",
      ),
      "Impact publié",
    );
    changeControl(
      controlById<HTMLTextAreaElement>(
        container,
        "site-aid-application-criterion-1-project-response",
      ),
      "Réponse du projet",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-criterion-1-evidence",
      ),
      "Preuve à confirmer",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-criterion-1-owner",
      ),
      "Direction",
    );
    analyzeDossier(container);
    expect(normalizedText(container)).toContain("Non publiée");
    expect(normalizedText(container)).not.toContain(
      "indiquez une limite de mots",
    );
  });

  it("counts Unicode words and suspends a response that exceeds its published limit", () => {
    expect(
      countSiteAidApplicationWords(
        "L’entreprise co-construit\nune réponse très claire.",
      ),
    ).toBe(7);

    loadBrittanyExampleWithoutAnalysis(container);
    goToWizardStep(container, "application");
    changeControl(
      controlById<HTMLTextAreaElement>(
        container,
        "site-aid-application-criterion-1-project-response",
      ),
      "Une réponse contient cinq mots",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-criterion-1-word-limit",
      ),
      "5",
    );
    expect(
      controlById(container, "site-aid-application-criterion-1-word-count")
        .textContent,
    ).toContain("5 mots saisis sur 5");
    analyzeDossier(container);
    expect(normalizedText(container)).not.toContain(
      "dépasse la limite publiée de 5 mots",
    );

    goToWizardStep(container, "application");
    changeControl(
      controlById<HTMLTextAreaElement>(
        container,
        "site-aid-application-criterion-1-project-response",
      ),
      "Une réponse contient maintenant six mots",
    );
    analyzeDossier(container);
    expect(normalizedText(container)).toContain(
      "contient 6 mots et dépasse la limite publiée de 5 mots",
    );
    const response = controlById<HTMLTextAreaElement>(
      container,
      "site-aid-application-criterion-1-project-response",
    );
    expect(response.getAttribute("aria-invalid")).toBe("true");
    expect(response.getAttribute("aria-describedby")?.split(/\s+/)).toEqual(
      expect.arrayContaining([
        "site-aid-application-criterion-1-word-count",
        "site-aid-application-criterion-1-project-response-error-message",
      ]),
    );
    const report =
      container.querySelector(".site-aid-print-report")?.textContent ?? "";
    expect(report).toContain("Nombre de mots détecté : 6");
    expect(report).toContain("Limite : 5 mots");
  });

  it("compares exact deadline instants before, at and after closure and suspends DST anomalies", () => {
    loadBrittanyExampleWithoutAnalysis(container);
    goToWizardStep(container, "application");
    changeControl(
      controlById<HTMLInputElement>(container, "site-aid-application-deadline"),
      "2026-07-26",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-deadline-time",
      ),
      "13:00",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-deadline-time-zone",
      ),
      "Europe/Paris",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-deadline-verification-date",
      ),
      "2026-07-25",
    );
    analyzeDossier(container);
    expect(normalizedText(container)).not.toContain(
      "clos à l’instant absolu d’évaluation",
    );
    expect(
      container.querySelector(".site-aid-print-report")?.textContent,
    ).toContain("Instant absolu évalué : 2026-07-26T10:00:00.000Z");

    goToWizardStep(container, "application");
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-deadline-time",
      ),
      "12:00",
    );
    analyzeDossier(container);
    expect(normalizedText(container)).toContain(
      "clos à l’instant absolu d’évaluation",
    );

    goToWizardStep(container, "application");
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-deadline-time",
      ),
      "11:59",
    );
    analyzeDossier(container);
    expect(normalizedText(container)).toContain(
      "clos à l’instant absolu d’évaluation",
    );

    goToWizardStep(container, "application");
    changeControl(
      controlById<HTMLInputElement>(container, "site-aid-application-deadline"),
      "2026-03-29",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-deadline-time",
      ),
      "02:30",
    );
    analyzeDossier(container);
    expect(normalizedText(container)).toContain(
      "cette heure locale n’existe pas",
    );

    goToWizardStep(container, "application");
    changeControl(
      controlById<HTMLInputElement>(container, "site-aid-application-deadline"),
      "2026-10-25",
    );
    analyzeDossier(container);
    expect(normalizedText(container)).toContain(
      "cette heure locale est ambiguë",
    );

    goToWizardStep(container, "profile");
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-profile-verification-date",
      ),
      "2025-01-01",
    );
    goToWizardStep(container, "application");
    changeControl(
      controlById<HTMLInputElement>(container, "site-aid-application-deadline"),
      "2026-07-26",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-deadline-time",
      ),
      "",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-deadline-time-zone",
      ),
      "Europe/Paris",
    );
    analyzeDossier(container);
    expect(normalizedText(container)).toContain(
      "la clôture intervient le jour local du guichet",
    );
  });

  it("uses the official deadline timezone even when no closing time is published", () => {
    vi.setSystemTime(new Date("2026-07-26T00:30:00.000Z"));
    const nativeDateTimeFormat = Intl.DateTimeFormat;
    vi.spyOn(Intl, "DateTimeFormat").mockImplementation(
      function DateTimeFormatWithBrowserZone(
        locales?: Intl.LocalesArgument,
        options?: Intl.DateTimeFormatOptions,
      ) {
        const formatter = new nativeDateTimeFormat(locales, options);
        if (!options?.timeZone) {
          const nativeResolvedOptions =
            formatter.resolvedOptions.bind(formatter);
          Object.defineProperty(formatter, "resolvedOptions", {
            configurable: true,
            value: () => ({
              ...nativeResolvedOptions(),
              timeZone: "America/Los_Angeles",
            }),
          });
        }
        return formatter;
      } as typeof Intl.DateTimeFormat,
    );
    expect(Intl.DateTimeFormat().resolvedOptions().timeZone).toBe(
      "America/Los_Angeles",
    );

    loadBrittanyExampleWithoutAnalysis(container);
    goToWizardStep(container, "application");
    changeControl(
      controlById<HTMLInputElement>(container, "site-aid-application-deadline"),
      "2026-07-26",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-deadline-time",
      ),
      "",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-deadline-time-zone",
      ),
      "Europe/Paris",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-deadline-verification-date",
      ),
      "2026-07-25",
    );
    analyzeDossier(container);
    expect(normalizedText(container)).toContain(
      "la clôture intervient le jour local du guichet",
    );
    expect(
      container.querySelector(".site-aid-print-report")?.textContent,
    ).toContain("Fuseau de la clôture : Europe/Paris");
    expect(
      container.querySelector(".site-aid-print-report")?.textContent,
    ).toContain(
      "Fuseau du navigateur lors de l’évaluation : America/Los_Angeles",
    );

    goToWizardStep(container, "application");
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-deadline-time-zone",
      ),
      "",
    );
    analyzeDossier(container);
    expect(normalizedText(container)).toContain(
      "renseignez le fuseau officiel du guichet même si aucune heure limite n’est publiée",
    );
  });

  it("enforces the bounded deadline status contract for permanent and unpublished windows", () => {
    goToWizardStep(container, "application");
    expect(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-application-deadline-status",
      ).value,
    ).toBe("unpublished");
    analyzeDossier(container);
    expect(normalizedText(container)).toContain(
      "la date limite n’est pas publiée",
    );

    goToWizardStep(container, "application");
    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-application-deadline-status",
      ),
      "permanent",
    );
    expect(
      container.querySelector("#site-aid-application-deadline"),
    ).toBeNull();
    analyzeDossier(container);
    expect(normalizedText(container)).toContain(
      "un guichet permanent exige une référence officielle",
    );
    expect(normalizedText(container)).toContain(
      "datez la vérification de la référence officielle",
    );

    goToWizardStep(container, "application");
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-deadline-official-reference",
      ),
      "Portail officiel, rubrique calendrier permanent, référence GUI-2026-42.",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-deadline-verification-date",
      ),
      "2026-07-26",
    );
    analyzeDossier(container);
    expect(normalizedText(container)).not.toContain(
      "un guichet permanent exige une référence officielle",
    );
    expect(normalizedText(container)).toContain("Guichet permanent");
  });

  it("rejects generic deadline references and accepts each bounded identifiable form without claiming authentication", () => {
    loadBrittanyExampleWithoutAnalysis(container);
    goToWizardStep(container, "application");
    const referenceId = "site-aid-application-deadline-official-reference";
    const help = controlById(
      container,
      "site-aid-application-deadline-official-reference-help",
    );
    expect(normalizedText(help)).toContain(
      "il n’authentifie ni la source ni son contenu",
    );

    for (const genericReference of [
      "x",
      "xxxxxx",
      "x/000000",
      "test-0000",
      "exemple_1234",
      "TEST-0000",
      "EXEMPLE-0000",
      "Référence TEST-0000-A",
      "Réf/preuve/test-0000",
      "Réponse écrite de la Région : test-0000",
      "Référence officielle du financeur : TEST-0000-A",
      "TEST0000-A",
      "REF-TEST0000-A",
      "AAP-0000",
      "AAP0000",
      "DEMO-42",
      "DÉMO-42",
      "Référence officielle",
      "Portail officiel, rubrique calendrier permanent.",
      "http://aides.example.fr/dispositifs/pass-commerce/calendrier-2026",
      "ftp://aides.example.fr/dispositifs/pass-commerce/calendrier-2026",
      "www.aides.example.fr/dispositifs/pass-commerce/calendrier-2026",
      "http://localhost/aides/2026",
      "http://127.0.0.1/aides/2026",
      "http://[::1]/aides/2026",
      "https://utilisateur:secret@aides.example.fr/dispositifs/pass-commerce/calendrier-2026",
      "https://aides.example.fr:443/dispositifs/pass-commerce/calendrier-2026",
      "https://aides.example.fr:8443/dispositifs/pass-commerce/calendrier-2026",
      "https://192.0.0.1/aides/2026",
      "https://192.168.1.20/aides/2026",
      "https://192.0.2.4/aides/2026",
      "https://[::ffff:192.168.1.1]/aides/2026",
      "https://example.com/aides/2026",
      "https://intranet.local/aides/2026",
      "https://portail.invalid/aides/2026",
      "Réponse écrite du financeur reçue le 26/07/2026, objet : calendrier publié sur service.invalid.",
    ]) {
      changeControl(
        controlById<HTMLInputElement>(container, referenceId),
        genericReference,
      );
      analyzeDossier(container);
      expect(normalizedText(container)).toContain(
        "une date exacte exige une référence officielle identifiable",
      );
      expect(
        buttonByText(container, "Télécharger le dossier TXT").disabled,
      ).toBe(true);
      goToWizardStep(container, "application");
    }

    for (const identifiableReference of [
      "https://aides.example.fr/dispositifs/pass-commerce/calendrier-2026",
      "AAP-2026-0042",
      "Réponse écrite de la Région Bretagne datée du 26 juillet 2026, objet : calendrier du Pass Commerce.",
    ]) {
      changeControl(
        controlById<HTMLInputElement>(container, referenceId),
        identifiableReference,
      );
      analyzeDossier(container);
      expect(normalizedText(container)).not.toContain(
        "une date exacte exige une référence officielle identifiable",
      );
      expect(
        buttonByText(container, "Télécharger le dossier TXT").disabled,
      ).toBe(false);
      goToWizardStep(container, "application");
    }

    expect(
      controlById<HTMLInputElement>(container, referenceId)
        .getAttribute("aria-describedby")
        ?.split(/\s+/),
    ).toContain(help.id);
  });

  it("blocks exact-date TXT and print without an identifiable reference and a valid non-future verification date", () => {
    loadBrittanyExampleWithoutAnalysis(container);
    goToWizardStep(container, "application");
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-deadline-official-reference",
      ),
      "",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-deadline-verification-date",
      ),
      "",
    );
    analyzeDossier(container);

    expect(normalizedText(container)).toContain(
      "une date exacte exige une référence officielle identifiable",
    );
    expect(normalizedText(container)).toContain(
      "datez la vérification de la référence officielle de la date exacte",
    );
    expect(buttonByText(container, "Télécharger le dossier TXT").disabled).toBe(
      true,
    );
    expect(buttonByText(container, "Imprimer le dossier").disabled).toBe(true);
    expect(container.querySelector(".site-aid-print-report")).toBeNull();
    expect(
      normalizedText(controlById(container, "site-aid-export-gate-help")),
    ).toContain("Échéance non traçable");

    goToWizardStep(container, "application");
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-deadline-official-reference",
      ),
      "Portail officiel, calendrier 2026, référence CAL-2026-09.",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-deadline-verification-date",
      ),
      "2026-07-27",
    );
    analyzeDossier(container);
    expect(normalizedText(container)).toContain(
      "la date de vérification ne peut pas être postérieure",
    );
    expect(buttonByText(container, "Télécharger le dossier TXT").disabled).toBe(
      true,
    );

    goToWizardStep(container, "application");
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-deadline-verification-date",
      ),
      "2026-07-26",
    );
    analyzeDossier(container);
    expect(normalizedText(container)).not.toContain(
      "une date exacte exige une référence officielle identifiable",
    );
    expect(normalizedText(container)).not.toContain(
      "la date de vérification ne peut pas être postérieure",
    );
    expect(buttonByText(container, "Télécharger le dossier TXT").disabled).toBe(
      false,
    );
    expect(buttonByText(container, "Imprimer le dossier").disabled).toBe(false);
    expect(container.querySelector(".site-aid-print-report")).not.toBeNull();
  });

  it("rejects a verification date after the local date of analysis", () => {
    completeFreshCandidateWithoutChangingStage(container);
    completeApplicationPreparation(container);
    goToWizardStep(container, "application");
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-deadline-verification-date",
      ),
      "2026-07-27",
    );
    analyzeDossier(container);
    expect(normalizedText(container)).toContain(
      "la date de vérification ne peut pas être postérieure à la date locale de l’analyse",
    );
    expect(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-deadline-verification-date",
      ).getAttribute("aria-invalid"),
    ).toBe("true");

    goToWizardStep(container, "application");
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-deadline-verification-date",
      ),
      "2026-07-26",
    );
    analyzeDossier(container);
    expect(normalizedText(container)).not.toContain(
      "la date de vérification ne peut pas être postérieure",
    );
  });

  it("marks step navigation dirty after export and re-exports the newly active step", async () => {
    loadBrittanyExampleWithoutAnalysis(container);
    let blobIndex = 0;
    const createObjectUrl = vi.fn((blob: Blob) => {
      void blob;
      blobIndex += 1;
      return `blob:navigation-r26-${blobIndex}`;
    });
    Object.defineProperty(URL, "createObjectURL", {
      configurable: true,
      value: createObjectUrl,
    });
    Object.defineProperty(URL, "revokeObjectURL", {
      configurable: true,
      value: vi.fn(),
    });
    vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(
      () => undefined,
    );

    act(() => buttonByText(container, "Exporter le brouillon JSON").click());
    expect(
      container.querySelector("[data-site-aid-unsaved-status='aligned']"),
    ).not.toBeNull();
    goToWizardStep(container, "application");
    expect(
      container.querySelector("[data-site-aid-unsaved-status='unsaved']"),
    ).not.toBeNull();
    const dirtyEvent = new Event("beforeunload", { cancelable: true });
    window.dispatchEvent(dirtyEvent);
    expect(dirtyEvent.defaultPrevented).toBe(true);

    act(() => buttonByText(container, "Exporter le brouillon JSON").click());
    const secondDraft = JSON.parse(
      await (createObjectUrl.mock.calls[1]?.[0] as unknown as Blob).text(),
    ) as { activeStepId: string };
    expect(secondDraft.activeStepId).toBe("application");
    expect(
      container.querySelector("[data-site-aid-unsaved-status='aligned']"),
    ).not.toBeNull();
  });

  it("starts with an empty selection matrix, hides it for a right and restores preserved criteria", async () => {
    goToWizardStep(container, "application");
    expect(container.textContent).toContain(
      "Matrice masquée tant que le mode d’attribution reste à confirmer",
    );
    expect(container.textContent).not.toContain("Ajouter un critère publié");
    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-application-award-mode",
      ),
      "selection",
    );
    expect(container.textContent).toContain("0 sur 25 critères utilisés");
    act(() => buttonByText(container, "Ajouter un critère publié").click());
    changeControl(
      controlById<HTMLTextAreaElement>(
        container,
        "site-aid-application-criterion-1-published-criterion",
      ),
      "Impact publié à préserver",
    );
    expect(container.textContent).toContain(
      "La limite de mots est facultative",
    );

    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-application-award-mode",
      ),
      "right",
    );
    expect(container.textContent).toContain("Sans objet — aide de droit");
    expect(
      container.querySelector(
        "#site-aid-application-criterion-1-published-criterion",
      ),
    ).toBeNull();
    analyzeDossier(container);
    expect(normalizedText(container)).toContain(
      "Matrice des critères publiésSans objet — aide de droit",
    );
    for (const hiddenCriterionIssue of [
      "rédigez la réponse déclarative du projet",
      "associez une preuve à confirmer",
      "critère 1 : désignez un responsable",
    ]) {
      expect(normalizedText(container)).not.toContain(hiddenCriterionIssue);
    }
    const printReport =
      container.querySelector(".site-aid-print-report")?.textContent ?? "";
    expect(printReport).toContain("- Sans objet — aide de droit.");
    expect(printReport).not.toContain("Impact publié à préserver");

    goToWizardStep(container, "application");
    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-application-award-mode",
      ),
      "selection",
    );
    expect(
      controlById<HTMLTextAreaElement>(
        container,
        "site-aid-application-criterion-1-published-criterion",
      ).value,
    ).toBe("Impact publié à préserver");

    const createObjectUrl = vi.fn((blob: Blob) => {
      void blob;
      return "blob:criteria-r26";
    });
    Object.defineProperty(URL, "createObjectURL", {
      configurable: true,
      value: createObjectUrl,
    });
    Object.defineProperty(URL, "revokeObjectURL", {
      configurable: true,
      value: vi.fn(),
    });
    vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(
      () => undefined,
    );
    act(() => buttonByText(container, "Exporter le brouillon JSON").click());
    const draft = JSON.parse(
      await (createObjectUrl.mock.calls[0]?.[0] as unknown as Blob).text(),
    ) as {
      application: { criteria: Array<{ publishedCriterion: string }> };
    };
    expect(draft.application.criteria[0].publishedCriterion).toBe(
      "Impact publié à préserver",
    );
  });

  it("keeps the prudent EU territorial choice and non-authenticated proof in review, TXT and JSON", async () => {
    goToWizardStep(container, "profile");
    changeControl(
      controlById<HTMLInputElement>(container, "site-aid-profile-territory"),
      "Martinique",
    );
    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-profile-eu-territorial-status",
      ),
      "eu-law-applicable",
    );
    changeControl(
      controlById<HTMLTextAreaElement>(
        container,
        "site-aid-profile-eu-territorial-evidence",
      ),
      "Autorité régionale fictive, réponse TERR-2026-04 du 26/07/2026 — non authentifiée",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-profile-eu-territorial-evidence-date",
      ),
      "2026-07-26",
    );

    goToWizardStep(container, "review");
    expect(normalizedText(container)).toContain(
      "Applicabilité territoriale UE déclarée — non authentifiéeDroit de l’Union déclaré applicable — preuve à confirmer",
    );
    expect(normalizedText(container)).toContain(
      "Source/autorité et référence territoriales déclarées — non authentifiéesAutorité régionale fictive, réponse TERR-2026-04 du 26/07/2026 — non authentifiée",
    );
    expect(normalizedText(container)).toContain(
      "Date structurée de la preuve territoriale2026-07-26",
    );
    analyzeDossier(container);
    const printReport =
      container.querySelector(".site-aid-print-report")?.textContent ?? "";
    expect(printReport).toContain(
      "Applicabilité territoriale UE du précontrôle de minimis déclarée — non authentifiée",
    );
    expect(printReport).toContain(
      "Preuve de qualification territoriale UE déclarée — non authentifiée : Autorité régionale fictive, réponse TERR-2026-04 du 26/07/2026 — non authentifiée",
    );
    expect(printReport).toContain(
      "Date structurée de la preuve territoriale UE : 2026-07-26",
    );

    const createObjectUrl = vi.fn((blob: Blob) => {
      void blob;
      return "blob:territorial-r27";
    });
    Object.defineProperty(URL, "createObjectURL", {
      configurable: true,
      value: createObjectUrl,
    });
    Object.defineProperty(URL, "revokeObjectURL", {
      configurable: true,
      value: vi.fn(),
    });
    vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(
      () => undefined,
    );
    act(() => buttonByText(container, "Télécharger le dossier TXT").click());
    const downloadedReport = await (
      createObjectUrl.mock.calls[0]?.[0] as unknown as Blob
    ).text();
    expect(downloadedReport).toContain(
      "Applicabilité territoriale UE du précontrôle de minimis déclarée — non authentifiée",
    );
    expect(downloadedReport).toContain(
      "Preuve de qualification territoriale UE déclarée — non authentifiée : Autorité régionale fictive, réponse TERR-2026-04 du 26/07/2026 — non authentifiée",
    );
    expect(downloadedReport).toContain(
      "Date structurée de la preuve territoriale UE : 2026-07-26",
    );
    act(() => buttonByText(container, "Exporter le brouillon JSON").click());
    const draft = JSON.parse(
      await (createObjectUrl.mock.calls[1]?.[0] as unknown as Blob).text(),
    ) as {
      input: {
        profile: {
          deMinimisEuTerritorialStatus?: string;
          deMinimisEuTerritorialEvidence?: string;
          deMinimisEuTerritorialEvidenceDate?: string;
        };
      };
    };
    expect(draft.input.profile.deMinimisEuTerritorialStatus).toBe(
      "eu-law-applicable",
    );
    expect(draft.input.profile.deMinimisEuTerritorialEvidence).toBe(
      "Autorité régionale fictive, réponse TERR-2026-04 du 26/07/2026 — non authentifiée",
    );
    expect(draft.input.profile.deMinimisEuTerritorialEvidenceDate).toBe(
      "2026-07-26",
    );
  });

  it("routes territorial status and identifiable-proof issues to their exact editable controls", () => {
    loadBrittanyExample(container);
    const statusLink = issueLink(
      container,
      "qualification territoriale UE du précontrôle de minimis",
    );
    expect(statusLink.getAttribute("href")).toBe(
      "#site-aid-profile-eu-territorial-status",
    );
    act(() => statusLink.click());
    expect(document.activeElement).toBe(
      controlById(container, "site-aid-profile-eu-territorial-status"),
    );

    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-profile-eu-territorial-status",
      ),
      "eu-law-applicable",
    );
    changeControl(
      controlById<HTMLTextAreaElement>(
        container,
        "site-aid-profile-eu-territorial-evidence",
      ),
      "Document générique",
    );
    analyzeDossier(container);
    const evidenceDateLink = issueLink(
      container,
      "date de la preuve de qualification territoriale UE",
    );
    expect(evidenceDateLink.getAttribute("href")).toBe(
      "#site-aid-profile-eu-territorial-evidence-date",
    );
    act(() => evidenceDateLink.click());
    expect(document.activeElement).toBe(
      controlById(container, "site-aid-profile-eu-territorial-evidence-date"),
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-profile-eu-territorial-evidence-date",
      ),
      "2026-07-26",
    );
    analyzeDossier(container);
    const evidenceLink = issueLink(
      container,
      "preuve de qualification territoriale UE",
    );
    expect(evidenceLink.getAttribute("href")).toBe(
      "#site-aid-profile-eu-territorial-evidence",
    );
    act(() => evidenceLink.click());
    expect(document.activeElement).toBe(
      controlById(container, "site-aid-profile-eu-territorial-evidence"),
    );
  });

  it("reveals the advanced territorial qualification only when a de minimis branch makes it relevant", () => {
    goToWizardStep(container, "profile");
    const territorialDetails = [...container.querySelectorAll("details")].find(
      (candidate) =>
        candidate.textContent?.includes(
          "Qualification territoriale UE — seulement si une base de minimis est retenue",
        ),
    );
    expect(territorialDetails?.open).toBe(false);
    expect(
      controlById<HTMLInputElement>(
        container,
        "site-aid-profile-verification-date",
      ).max,
    ).toBe("2026-07-26");

    goToWizardStep(container, "legal");
    changeControl(
      controlById<HTMLSelectElement>(container, "site-aid-legal-basis-status"),
      "de-minimis",
    );
    changeControl(
      controlById<HTMLInputElement>(container, "site-aid-de-minimis-regime"),
      "Règlement (UE) 2023/2831",
    );
    goToWizardStep(container, "profile");

    const relevantTerritorialDetails = [
      ...container.querySelectorAll("details"),
    ].find((candidate) =>
      candidate.textContent?.includes(
        "Qualification territoriale UE — seulement si une base de minimis est retenue",
      ),
    );
    expect(relevantTerritorialDetails?.open).toBe(true);
    expect(
      controlById<HTMLInputElement>(
        container,
        "site-aid-profile-eu-territorial-evidence-date",
      ).max,
    ).toBe("2026-07-26");
  });

  it("blocks future verification and territorial evidence dates against the captured local analysis date", () => {
    loadBrittanyExampleWithoutAnalysis(container);
    goToWizardStep(container, "profile");
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-profile-verification-date",
      ),
      "2099-07-26",
    );
    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-profile-eu-territorial-status",
      ),
      "eu-law-applicable",
    );
    changeControl(
      controlById<HTMLTextAreaElement>(
        container,
        "site-aid-profile-eu-territorial-evidence",
      ),
      "Autorité régionale, réponse TERR-2099-0042",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-profile-eu-territorial-evidence-date",
      ),
      "2099-07-26",
    );

    analyzeDossier(container);
    const report =
      container.querySelector(".site-aid-print-report")?.textContent ?? "";
    expect(report).toContain("Date locale d’analyse injectée : 2026-07-26");
    expect(report).toContain(
      "Date de vérification : elle ne peut pas être postérieure à la date locale d’analyse (2026-07-26)",
    );
    expect(report).toContain(
      "date de la preuve de qualification territoriale UE : elle ne peut pas être postérieure à la date locale d’analyse (2026-07-26)",
    );
    expect(
      container.querySelector("#site-aid-result-title")?.textContent,
    ).toContain("DOSSIER INVALIDE");
  });

  it("tracks the package really submitted in review, TXT and JSON without inventing a deposit", async () => {
    loadBrittanyExampleWithoutAnalysis(container);
    goToWizardStep(container, "application");
    expect(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-application-submission-status",
      ).value,
    ).toBe("not-submitted");
    expect(
      container.querySelector("#site-aid-application-submission-date"),
    ).toBeNull();

    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-application-submission-status",
      ),
      "submitted",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-submission-date",
      ),
      "2026-07-26",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-submission-receipt-reference",
      ),
      "Accusé horodaté AR-2026-0042",
    );
    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-application-submitted-package-check",
      ),
      "yes",
    );

    analyzeDossier(container);
    expect(normalizedText(container)).toContain(
      "Statut après dépôtDéposé — accusé à contrôler",
    );
    expect(normalizedText(container)).toContain(
      "Accusé ou référence de dépôtAccusé horodaté AR-2026-0042",
    );
    const report =
      container.querySelector(".site-aid-print-report")?.textContent ?? "";
    expect(report).toContain(
      "Statut après dépôt : Déposé — accusé à contrôler",
    );
    expect(report).toContain(
      "Dossier transmis identique au dossier préparé : Oui — identique au dossier préparé",
    );

    const createObjectUrl = vi.fn((blob: Blob) => {
      void blob;
      return "blob:submission-r28";
    });
    Object.defineProperty(URL, "createObjectURL", {
      configurable: true,
      value: createObjectUrl,
    });
    Object.defineProperty(URL, "revokeObjectURL", {
      configurable: true,
      value: vi.fn(),
    });
    vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(
      () => undefined,
    );
    act(() => buttonByText(container, "Exporter le brouillon JSON").click());
    const draft = JSON.parse(
      await (createObjectUrl.mock.calls[0]?.[0] as unknown as Blob).text(),
    ) as {
      application: {
        submissionStatus: string;
        submissionDate: string;
        submissionReceiptReference: string;
        submittedPackageMatchesPreparedPackage: string;
      };
    };
    expect(draft.application).toMatchObject({
      submissionStatus: "submitted",
      submissionDate: "2026-07-26",
      submissionReceiptReference: "Accusé horodaté AR-2026-0042",
      submittedPackageMatchesPreparedPackage: "yes",
    });

    goToWizardStep(container, "application");
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-submission-receipt-reference",
      ),
      "Accusé corrigé AR-2026-0043",
    );
    goToWizardStep(container, "review");
    expect(
      container.querySelector("[data-site-aid-analysis-state='stale']"),
    ).not.toBeNull();
    expect(buttonByText(container, "Télécharger le dossier TXT").disabled).toBe(
      true,
    );
  });

  it("rejects a generic receipt and accepts bounded number, URL, email and formal-reference witnesses without authenticating them", () => {
    loadBrittanyExampleWithoutAnalysis(container);
    goToWizardStep(container, "application");
    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-application-submission-status",
      ),
      "submitted",
    );
    changeControl(
      controlById<HTMLInputElement>(
        container,
        "site-aid-application-submission-date",
      ),
      "2026-07-26",
    );
    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-application-submitted-package-check",
      ),
      "yes",
    );
    const receiptId = "site-aid-application-submission-receipt-reference";
    const receiptHelp = controlById(
      container,
      "site-aid-application-submission-receipt-reference-help",
    );
    expect(normalizedText(receiptHelp)).toContain("n’authentifie pas l’accusé");

    for (const genericReceipt of [
      "xxxxxx",
      "x/000000",
      "test-0000",
      "exemple_1234",
      "TEST-0000",
      "EXEMPLE-0000",
      "Référence de dépôt : TEST-0000-A",
      "Réf/preuve/test-0000",
      "TEST0000-A",
      "REF-TEST0000-A",
      "Numéro de dépôt : 00000000",
      "Référence du portail : DUMMY-42",
      "AAP-0000",
      "AAP0000",
      "DUMMY-42",
      "Accusé officiel",
      "http://portail.example.fr/depots/123456",
      "ftp://portail.example.fr/depots/123456",
      "www.portail.example.fr/depots/123456",
      "http://localhost/depots/123456",
      "http://127.0.0.1/depots/123456",
      "http://[::1]/depots/123456",
      "https://utilisateur:secret@portail.example.fr/depots/123456",
      "https://portail.example.fr:443/depots/123456",
      "https://portail.example.fr:8443/depots/123456",
      "https://10.0.0.8/depots/123456",
      "https://192.0.0.1/depots/123456",
      "https://203.0.113.8/depots/123456",
      "https://[::ffff:192.168.1.1]/depots/123456",
      "https://example.net/depots/123456",
      "https://portail.internal/depots/123456",
      "Courriel de confirmation reçu de test@example.com le 26/07/2026, objet : dépôt.",
      "Courriel de confirmation reçu de depot@service.invalid le 26/07/2026, objet : dépôt.",
      "Courriel de confirmation reçu de depot@intranet.local le 26/07/2026, objet : dépôt.",
      "Courriel de confirmation reçu de service.invalid le 26/07/2026, objet : dépôt.",
      "Courriel de confirmation reçu de intranet.local le 26/07/2026, objet : dépôt.",
    ]) {
      changeControl(
        controlById<HTMLInputElement>(container, receiptId),
        genericReceipt,
      );
      analyzeDossier(container);
      expect(normalizedText(container)).toContain(
        "consignez un accusé ou une référence de dépôt identifiable",
      );
      goToWizardStep(container, "application");
    }

    for (const identifiableReceipt of [
      "DEP-2026-0042",
      "Numéro de dépôt : 12345678",
      "https://portail.example.fr/depots/123456/accuse",
      "Courriel de confirmation reçu de depot@bretagne.bzh le 26/07/2026, objet : dépôt Pass Commerce.",
    ]) {
      changeControl(
        controlById<HTMLInputElement>(container, receiptId),
        identifiableReceipt,
      );
      analyzeDossier(container);
      expect(normalizedText(container)).not.toContain(
        "consignez un accusé ou une référence de dépôt identifiable",
      );
      goToWizardStep(container, "application");
    }

    expect(
      controlById<HTMLInputElement>(container, receiptId)
        .getAttribute("aria-describedby")
        ?.split(/\s+/),
    ).toContain(receiptHelp.id);
  });

  it("suspends a declared deposit until its date, receipt and package comparison are documented", () => {
    loadBrittanyExampleWithoutAnalysis(container);
    goToWizardStep(container, "application");
    changeControl(
      controlById<HTMLSelectElement>(
        container,
        "site-aid-application-submission-status",
      ),
      "under-review",
    );

    analyzeDossier(container);
    expect(normalizedText(container)).toContain(
      "Suivi après dépôt : renseignez la date civile du dépôt réellement effectué.",
    );
    expect(normalizedText(container)).toContain(
      "Suivi après dépôt : consignez un accusé ou une référence de dépôt identifiable",
    );
    expect(normalizedText(container)).toContain(
      "Suivi après dépôt : comparez le dossier réellement transmis avec le dossier préparé",
    );
    expect(
      container.querySelector("#site-aid-result-title")?.textContent,
    ).toContain("DOSSIER INCOMPLET");
  });

  it("shows, reviews and exports the exact fishery fiscal quartet only for a relevant branch", async () => {
    goToWizardStep(container, "legal");
    changeControl(
      controlById<HTMLSelectElement>(container, "site-aid-legal-basis-status"),
      "de-minimis",
    );
    changeControl(
      controlById<HTMLInputElement>(container, "site-aid-de-minimis-regime"),
      "Règlement (UE) n° 717/2014",
    );
    const fiscalYearStart = controlById<HTMLInputElement>(
      container,
      "site-aid-de-minimis-fishery-fiscal-year-start",
    );
    const previousFiscalYearStart = controlById<HTMLInputElement>(
      container,
      "site-aid-de-minimis-fishery-previous-fiscal-year-start",
    );
    const secondPreviousFiscalYearStart = controlById<HTMLInputElement>(
      container,
      "site-aid-de-minimis-fishery-second-previous-fiscal-year-start",
    );
    const currentFiscalYearEnd = controlById<HTMLInputElement>(
      container,
      "site-aid-de-minimis-fishery-current-fiscal-year-end",
    );
    expect(
      container.querySelector("#site-aid-fishery-fiscal-year-help")
        ?.textContent,
    ).toContain("l’exercice fiscal courant et les deux précédents");
    changeControl(fiscalYearStart, "2026-01-01");
    changeControl(previousFiscalYearStart, "2025-01-01");
    changeControl(secondPreviousFiscalYearStart, "2024-01-01");
    changeControl(currentFiscalYearEnd, "2026-12-31");
    goToWizardStep(container, "review");
    expect(normalizedText(container)).toContain(
      "Début de l’exercice fiscal pêche contenant l’ancre2026-01-01",
    );
    expect(normalizedText(container)).toContain(
      "Début de l’exercice fiscal pêche précédent2025-01-01",
    );
    expect(normalizedText(container)).toContain(
      "Début du deuxième exercice fiscal pêche précédent2024-01-01",
    );
    expect(normalizedText(container)).toContain(
      "Fin de l’exercice fiscal pêche contenant l’ancre2026-12-31",
    );
    analyzeDossier(container);
    const printReport =
      container.querySelector(".site-aid-print-report")?.textContent ?? "";
    expect(printReport).toContain(
      "Début déclaré de l’exercice fiscal contenant l’ancre du précontrôle pêche — non authentifié : 2026-01-01",
    );
    expect(printReport).toContain(
      "Début déclaré de l’exercice fiscal pêche précédent — non authentifié : 2025-01-01",
    );
    expect(printReport).toContain(
      "Début déclaré du deuxième exercice fiscal pêche précédent — non authentifié : 2024-01-01",
    );
    expect(printReport).toContain(
      "Fin inclusive déclarée de l’exercice fiscal pêche courant — non authentifiée : 2026-12-31",
    );

    const createObjectUrl = vi.fn((blob: Blob) => {
      void blob;
      return "blob:fishery-r26";
    });
    Object.defineProperty(URL, "createObjectURL", {
      configurable: true,
      value: createObjectUrl,
    });
    Object.defineProperty(URL, "revokeObjectURL", {
      configurable: true,
      value: vi.fn(),
    });
    vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(
      () => undefined,
    );
    act(() => buttonByText(container, "Exporter le brouillon JSON").click());
    const draft = JSON.parse(
      await (createObjectUrl.mock.calls[0]?.[0] as unknown as Blob).text(),
    ) as {
      input: {
        aid: {
          deMinimisFisheryFiscalYearStartDate?: string;
          deMinimisFisheryPreviousFiscalYearStartDate?: string;
          deMinimisFisherySecondPreviousFiscalYearStartDate?: string;
          deMinimisFisheryCurrentFiscalYearEndDate?: string;
        };
      };
    };
    expect(draft.input.aid.deMinimisFisheryFiscalYearStartDate).toBe(
      "2026-01-01",
    );
    expect(draft.input.aid.deMinimisFisheryPreviousFiscalYearStartDate).toBe(
      "2025-01-01",
    );
    expect(
      draft.input.aid.deMinimisFisherySecondPreviousFiscalYearStartDate,
    ).toBe("2024-01-01");
    expect(draft.input.aid.deMinimisFisheryCurrentFiscalYearEndDate).toBe(
      "2026-12-31",
    );

    goToWizardStep(container, "legal");
    changeControl(
      controlById<HTMLInputElement>(container, "site-aid-de-minimis-regime"),
      "Règlement (UE) 2023/2831",
    );
    expect(
      container.querySelector("#site-aid-de-minimis-fishery-fiscal-year-start"),
    ).toBeNull();
    expect(
      container.querySelector(
        "#site-aid-de-minimis-fishery-previous-fiscal-year-start",
      ),
    ).toBeNull();
    expect(
      container.querySelector(
        "#site-aid-de-minimis-fishery-second-previous-fiscal-year-start",
      ),
    ).toBeNull();
    expect(
      container.querySelector(
        "#site-aid-de-minimis-fishery-current-fiscal-year-end",
      ),
    ).toBeNull();
  });

  it("routes a fishery anchor outside the declared current exercise to the editable end date", () => {
    completeFreshCandidateWithoutChangingStage(container);
    goToWizardStep(container, "legal");
    changeControl(
      controlById<HTMLInputElement>(container, "site-aid-de-minimis-regime"),
      "Règlement (UE) n° 717/2014",
    );
    for (const [id, value] of [
      ["site-aid-de-minimis-fishery-fiscal-year-start", "2026-01-01"],
      ["site-aid-de-minimis-fishery-previous-fiscal-year-start", "2025-01-01"],
      [
        "site-aid-de-minimis-fishery-second-previous-fiscal-year-start",
        "2024-01-01",
      ],
      ["site-aid-de-minimis-fishery-current-fiscal-year-end", "2026-06-30"],
    ]) {
      changeControl(controlById<HTMLInputElement>(container, id), value);
    }
    analyzeDossier(container);
    const intervalLink = issueLink(
      container,
      "l’intervalle déclaré du 2026-01-01 au 2026-06-30",
    );
    expect(intervalLink.getAttribute("href")).toBe(
      "#site-aid-de-minimis-fishery-current-fiscal-year-end",
    );
    act(() => intervalLink.click());
    expect(document.activeElement).toBe(
      controlById(
        container,
        "site-aid-de-minimis-fishery-current-fiscal-year-end",
      ),
    );
  });

  it("keeps the documented prospective de minimis pair scoped to pre-notification without turning it into cash", async () => {
    completeFreshCandidateWithoutChangingStage(container);
    goToWizardStep(container, "legal");
    const amountId = "site-aid-prospective-de-minimis-aid-value";
    const evidenceId = "site-aid-prospective-de-minimis-aid-value-evidence";
    expect(controlById<HTMLInputElement>(container, amountId).required).toBe(
      false,
    );
    expect(
      container.querySelector("#site-aid-prospective-de-minimis-help")
        ?.textContent,
    ).toContain(
      "Pour une subvention, elle est facultative : si elle reste vide",
    );
    expect(
      container.querySelector("#site-aid-prospective-de-minimis-help")
        ?.textContent,
    ).toContain(
      "ne constitue jamais un budget, un octroi, une créance, un encaissement ni un paiement",
    );

    changeControl(
      controlById<HTMLSelectElement>(container, "site-aid-instrument-kind"),
      "loan",
    );
    expect(controlById<HTMLInputElement>(container, amountId).required).toBe(
      true,
    );
    expect(controlById<HTMLInputElement>(container, evidenceId).required).toBe(
      true,
    );
    completeApplicationPreparation(container);
    analyzeDossier(container);
    expectIssueTarget(
      container,
      "l’équivalent-subvention brut prospectif de cet instrument manque",
      controlById<HTMLInputElement>(container, amountId),
    );
    goToWizardStep(container, "legal");
    changeControl(controlById<HTMLInputElement>(container, amountId), "1850");
    changeControl(
      controlById<HTMLInputElement>(container, evidenceId),
      "Calcul ESB officiel ESB-2026-42.",
    );
    analyzeDossier(container);
    expect(normalizedText(container)).toContain(
      "Montant brut ou ESB prospectif documenté — précontrôle uniquement1 850 €",
    );
    expect(normalizedText(container)).toContain(
      "Preuve du montant brut ou de l’ESB prospectifCalcul ESB officiel ESB-2026-42.",
    );
    const printReport =
      container.querySelector(".site-aid-print-report")?.textContent ?? "";
    expect(printReport).toContain("1 850 €");
    expect(printReport).toContain("Calcul ESB officiel ESB-2026-42.");
    expect(printReport).toContain(
      "ne constitue jamais un octroi, un encaissement, une contribution financière ou un montant budgétable",
    );

    const createObjectUrl = vi.fn((blob: Blob) => {
      void blob;
      return "blob:prospective-r26";
    });
    Object.defineProperty(URL, "createObjectURL", {
      configurable: true,
      value: createObjectUrl,
    });
    Object.defineProperty(URL, "revokeObjectURL", {
      configurable: true,
      value: vi.fn(),
    });
    vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(
      () => undefined,
    );
    act(() => buttonByText(container, "Télécharger le dossier TXT").click());
    expect(
      await (createObjectUrl.mock.calls[0]?.[0] as unknown as Blob).text(),
    ).toContain("Calcul ESB officiel ESB-2026-42.");
    act(() => buttonByText(container, "Exporter le brouillon JSON").click());
    const visibleDraft = JSON.parse(
      await (createObjectUrl.mock.calls[1]?.[0] as unknown as Blob).text(),
    ) as {
      input: {
        gates: { notification: string };
        aid: {
          stage: string;
          prospectiveDeMinimisAidValueAmount?: number;
          prospectiveDeMinimisAidValueEvidence?: string;
        };
      };
    };
    expect(visibleDraft.input.aid).toMatchObject({
      prospectiveDeMinimisAidValueAmount: 1_850,
      prospectiveDeMinimisAidValueEvidence: "Calcul ESB officiel ESB-2026-42.",
    });

    goToWizardStep(container, "payment");
    changeControl(
      controlById<HTMLSelectElement>(container, "site-aid-stage"),
      "notified",
    );
    goToWizardStep(container, "legal");
    expect(container.querySelector(`#${amountId}`)).toBeNull();
    analyzeDossier(container);
    expect(normalizedText(container)).not.toContain(
      "ces deux champs sont réservés au précontrôle avant notification",
    );
    expect(
      container.querySelector(`#site-aid-error-summary a[href="#${amountId}"]`),
    ).toBeNull();
    act(() => buttonByText(container, "Exporter le brouillon JSON").click());
    const hiddenDraft = JSON.parse(
      await (createObjectUrl.mock.calls[2]?.[0] as unknown as Blob).text(),
    ) as typeof visibleDraft;
    expect(
      hiddenDraft.input.aid.prospectiveDeMinimisAidValueAmount,
    ).toBeUndefined();
    expect(hiddenDraft.input.aid.prospectiveDeMinimisAidValueEvidence).toBe("");

    const outOfScopeDraft = JSON.parse(
      JSON.stringify(visibleDraft),
    ) as typeof visibleDraft;
    outOfScopeDraft.input.aid.stage = "notified";
    outOfScopeDraft.input.gates.notification = "yes";
    await chooseDraftFile(container, JSON.stringify(outOfScopeDraft));
    expect(
      container.querySelector("[data-site-aid-draft-status='imported']")
        ?.textContent,
    ).toContain("La valeur prospective hors précontrôle a été vidée");
    goToWizardStep(container, "legal");
    expect(container.querySelector(`#${amountId}`)).toBeNull();
    act(() => buttonByText(container, "Exporter le brouillon JSON").click());
    const normalizedImportedDraft = JSON.parse(
      await (createObjectUrl.mock.calls[3]?.[0] as unknown as Blob).text(),
    ) as typeof visibleDraft;
    expect(
      normalizedImportedDraft.input.aid.prospectiveDeMinimisAidValueAmount,
    ).toBeUndefined();
    expect(
      normalizedImportedDraft.input.aid.prospectiveDeMinimisAidValueEvidence,
    ).toBe("");

    goToWizardStep(container, "payment");
    changeControl(
      controlById<HTMLSelectElement>(container, "site-aid-stage"),
      "none",
    );
    goToWizardStep(container, "legal");
    expect(controlById<HTMLInputElement>(container, amountId).value).toBe("");
    expect(controlById<HTMLInputElement>(container, evidenceId).value).toBe("");
  });

  it("warns on unload only while changes have not been exported or imported", () => {
    const cleanEvent = new Event("beforeunload", { cancelable: true });
    window.dispatchEvent(cleanEvent);
    expect(cleanEvent.defaultPrevented).toBe(false);

    changeControl(
      labelControl<HTMLInputElement>(container, "Référence interne", "input"),
      "Brouillon modifié",
    );
    expect(
      container.querySelector("[data-site-aid-unsaved-status='unsaved']")
        ?.textContent,
    ).toContain("Modifications non exportées");
    const dirtyEvent = new Event("beforeunload", { cancelable: true });
    window.dispatchEvent(dirtyEvent);
    expect(dirtyEvent.defaultPrevented).toBe(true);

    Object.defineProperty(URL, "createObjectURL", {
      configurable: true,
      value: vi.fn(() => "blob:clean-r25"),
    });
    Object.defineProperty(URL, "revokeObjectURL", {
      configurable: true,
      value: vi.fn(),
    });
    vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(
      () => undefined,
    );
    act(() => buttonByText(container, "Exporter le brouillon JSON").click());
    expect(
      container.querySelector("[data-site-aid-unsaved-status='aligned']")
        ?.textContent,
    ).toContain("Aucune modification non exportée");
    const exportedEvent = new Event("beforeunload", { cancelable: true });
    window.dispatchEvent(exportedEvent);
    expect(exportedEvent.defaultPrevented).toBe(false);
  });
});
