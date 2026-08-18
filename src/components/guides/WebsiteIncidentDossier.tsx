"use client";

import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { createPortal } from "react-dom";
import {
  ClipboardCheck,
  Download,
  Printer,
  RotateCcw,
  ShieldAlert,
} from "lucide-react";
import { copyTextToClipboard } from "@/lib/clipboard";
import {
  WEBSITE_INCIDENT_DIRECT_COST_LIMITS,
  WEBSITE_INCIDENT_RECOVERY_GATE_IDS,
  WEBSITE_INCIDENT_RECOVERY_GATES,
  buildWebsiteIncidentDossierReport,
  createEmptyWebsiteIncidentDossier,
  createFictitiousWebsiteIncidentDossier,
  evaluateWebsiteIncidentDossier,
  type WebsiteIncidentContext,
  type WebsiteIncidentDirectCostInput,
  type WebsiteIncidentDirectCostNumericField,
  type WebsiteIncidentDossier,
  type WebsiteIncidentGateEvidence,
  type WebsiteIncidentGateProofKind,
  type WebsiteIncidentGateStatus,
  type WebsiteIncidentIssue,
  type WebsiteIncidentObjectives,
  type WebsiteIncidentProviderObservation,
  type WebsiteIncidentRecentChange,
  type WebsiteIncidentRecoveryGateId,
  type WebsiteIncidentServiceProfile,
  type WebsiteIncidentTimeline,
} from "@/lib/website-incident-dossier";

const MAX_SHORT_TEXT = 300;
const MAX_LONG_TEXT = 1_500;
const FICTITIOUS_EVALUATION_TIME = "2026-07-27T12:00:00+02:00";

const INPUT_CLASS =
  "mt-1.5 block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm font-normal text-zinc-950 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:focus:ring-violet-950";
const LABEL_CLASS =
  "block text-sm font-semibold text-zinc-800 dark:text-zinc-200";
const HELP_CLASS =
  "mt-1 block text-xs font-normal leading-relaxed text-zinc-500 dark:text-zinc-400";
const ERROR_CLASS =
  "mt-1.5 block text-xs font-semibold leading-relaxed text-rose-700 dark:text-rose-300";

interface UiValidationMessage {
  message: string;
  severity: WebsiteIncidentIssue["severity"];
}

function uniqueValidationMessages(
  messages: UiValidationMessage[],
): UiValidationMessage[] {
  return messages.filter(
    (candidate, index) =>
      messages.findIndex(
        (message) =>
          message.message === candidate.message &&
          message.severity === candidate.severity,
      ) === index,
  );
}

function gateStatusLabel(status: WebsiteIncidentGateStatus): string {
  if (status === "pass") return "réussie";
  if (status === "NA") return "non applicable";
  if (status === "fail") return "en échec";
  return "non vérifiée";
}

const TIMELINE_FIELDS: Array<{
  key: keyof WebsiteIncidentTimeline;
  label: string;
  help: string;
}> = [
  {
    key: "lastKnownGoodAt",
    label: "Dernier fonctionnement connu",
    help: "Dernier instant où le parcours a réellement réussi.",
  },
  {
    key: "firstFailureObservedAt",
    label: "Premier échec observé",
    help: "Ce n’est pas nécessairement le début réel de la panne.",
  },
  {
    key: "detectedAt",
    label: "Détection",
    help: "Instant où l’organisation a identifié l’incident.",
  },
  {
    key: "acknowledgedAt",
    label: "Prise en charge",
    help: "Accusé explicite d’un intervenant.",
  },
  {
    key: "mitigatedAt",
    label: "Mode dégradé ou mitigation",
    help: "Téléphone, page statique, bascule ou autre mesure bornée.",
  },
  {
    key: "technicallyRestoredAt",
    label: "Rétablissement technique",
    help: "Le service répond, avant validation métier.",
  },
  {
    key: "businessValidatedAt",
    label: "Validation métier",
    help: "Un responsable a accepté les parcours réellement utiles.",
  },
  {
    key: "monitoringEndedAt",
    label: "Fin de surveillance",
    help: "La période d’observation décidée est terminée.",
  },
  {
    key: "closedAt",
    label: "Clôture",
    help: "À laisser vide tant que toutes les portes applicables ne sont pas levées.",
  },
];

const COST_FIELDS: Array<{
  key: WebsiteIncidentDirectCostNumericField;
  label: string;
  help: string;
  step: string;
}> = [
  {
    key: "irrecoverableTransactions",
    label: "Opérations définitivement perdues",
    help: "Excluez les demandes retardées ou récupérables.",
    step: "1",
  },
  {
    key: "marginPerTransaction",
    label: "Marge par opération (€)",
    help: "Utilisez la marge, pas le chiffre d’affaires.",
    step: "0.01",
  },
  {
    key: "productivityPeople",
    label: "Personnes réellement bloquées",
    help: "Seulement les personnes dont le travail a été empêché.",
    step: "1",
  },
  {
    key: "productivityHoursPerPerson",
    label: "Heures perdues par personne",
    help: "Déduisez le travail reporté ou réalisé autrement.",
    step: "0.01",
  },
  {
    key: "productivityHourlyCost",
    label: "Coût horaire productif (€)",
    help: "Hypothèse interne à documenter.",
    step: "0.01",
  },
  {
    key: "coordinationPeople",
    label: "Personnes en coordination",
    help: "Ne les recomptez pas si leurs heures sont déjà ci-dessus.",
    step: "1",
  },
  {
    key: "coordinationHoursPerPerson",
    label: "Heures de coordination par personne",
    help: "Temps consacré à l’incident, pas durée totale de la panne.",
    step: "0.01",
  },
  {
    key: "coordinationHourlyCost",
    label: "Coût horaire de coordination (€)",
    help: "Hypothèse interne à documenter.",
    step: "0.01",
  },
  {
    key: "confirmedDirectCosts",
    label: "Autres coûts directs confirmés (€)",
    help: "Intervention, communication ou rapprochement déjà documentés.",
    step: "0.01",
  },
];

const GATE_STATUS_OPTIONS: Array<{
  value: WebsiteIncidentGateStatus;
  label: string;
}> = [
  { value: "unknown", label: "Non vérifié" },
  { value: "pass", label: "Réussi et prouvé" },
  { value: "fail", label: "Échec" },
  { value: "NA", label: "Non applicable, avec justification" },
];

const GATE_PROOF_OPTIONS: Array<{
  value: WebsiteIncidentGateProofKind;
  label: string;
}> = [
  { value: "unknown", label: "ND — aucun type de preuve" },
  { value: "claim-only", label: "Simple affirmation — insuffisante" },
  {
    value: "same-environment-only",
    label: "Même environnement seulement — insuffisant",
  },
  {
    value: "provider-status-only",
    label: "Page d’état fournisseur seulement — insuffisante",
  },
  {
    value: "homepage-only",
    label: "Page d’accueil seulement — insuffisante",
  },
  {
    value: "api-accepted-only",
    label: "API ayant accepté la requête seulement — insuffisant",
  },
  {
    value: "backup-exists-only",
    label: "Sauvegarde existante seulement — insuffisante",
  },
  { value: "failure-observation", label: "Observation documentée d’un échec" },
  {
    value: "applicability-justification",
    label: "Justification documentée de non-applicabilité",
  },
  {
    value: "independent-access",
    label: "Accès réellement indépendant",
  },
  {
    value: "dns-tls-observation",
    label: "Observation DNS et TLS complète",
  },
  { value: "http-observation", label: "Observation HTTP contrôlée" },
  { value: "end-to-end", label: "Recette de bout en bout" },
  {
    value: "payment-reconciliation",
    label: "Rapprochement paiement et commande",
  },
  {
    value: "delivery-confirmation",
    label: "Réception réelle de l’e-mail",
  },
  {
    value: "webhook-reconciliation",
    label: "Rapprochement des webhooks",
  },
  {
    value: "data-reconciliation",
    label: "Rapprochement des données",
  },
  {
    value: "authorized-cyber-clearance",
    label: "Levée cyber explicitement autorisée",
  },
  {
    value: "business-signoff",
    label: "Acceptation métier documentée",
  },
];

function createInitialDossier(): WebsiteIncidentDossier {
  const dossier = createEmptyWebsiteIncidentDossier();
  dossier.context.timeZone = "Europe/Paris";
  return dossier;
}

function numberInput(value: number | undefined): number | "" {
  return value === undefined || !Number.isFinite(value) ? "" : value;
}

function optionalBoolean(value: string): boolean | undefined {
  if (value === "yes") return true;
  if (value === "no") return false;
  return undefined;
}

function optionalBooleanValue(value: boolean | undefined): string {
  if (value === true) return "yes";
  if (value === false) return "no";
  return "unknown";
}

function routeClass(
  route: ReturnType<typeof evaluateWebsiteIncidentDossier>["route"],
) {
  if (route === "cyber") {
    return "border-rose-300 bg-rose-50 text-rose-950 dark:border-rose-800 dark:bg-rose-950/30 dark:text-rose-100";
  }
  if (route === "incomplete") {
    return "border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100";
  }
  if (route === "local") {
    return "border-blue-300 bg-blue-50 text-blue-950 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-100";
  }
  return "border-violet-300 bg-violet-50 text-violet-950 dark:border-violet-800 dark:bg-violet-950/30 dark:text-violet-100";
}

function closureLabel(
  status: ReturnType<
    typeof evaluateWebsiteIncidentDossier
  >["closure"]["status"],
): string {
  if (status === "closed") return "Clôturé sur preuves";
  if (status === "ready") return "Prêt pour autorisation";
  return "Clôture interdite";
}

export function WebsiteIncidentDossier() {
  const instanceId = useId().replaceAll(":", "");
  const [dossier, setDossier] = useState(createInitialDossier);
  const [evaluationTime, setEvaluationTime] = useState("");
  const [copyStatus, setCopyStatus] = useState<
    "idle" | "copied" | "copy-error"
  >("idle");
  const [downloadStatus, setDownloadStatus] = useState<
    "idle" | "downloaded" | "download-error"
  >("idle");
  const [reviewConfirmed, setReviewConfirmed] = useState(false);
  const [resetRequested, setResetRequested] = useState(false);
  const [openGateIds, setOpenGateIds] = useState<
    Set<WebsiteIncidentRecoveryGateId>
  >(() => new Set());
  const resetTriggerRef = useRef<HTMLButtonElement | null>(null);
  const resetConfirmRef = useRef<HTMLButtonElement>(null);
  const resetDialogRef = useRef<HTMLDivElement>(null);

  const evaluation = useMemo(
    () => evaluateWebsiteIncidentDossier(dossier, evaluationTime),
    [dossier, evaluationTime],
  );
  const report = useMemo(
    () => buildWebsiteIncidentDossierReport(dossier, evaluationTime),
    [dossier, evaluationTime],
  );

  function clearFeedback() {
    setCopyStatus("idle");
    setDownloadStatus("idle");
    setReviewConfirmed(false);
  }

  function updateContext<K extends keyof WebsiteIncidentContext>(
    key: K,
    value: WebsiteIncidentContext[K],
  ) {
    setDossier((current) => ({
      ...current,
      context: { ...current.context, [key]: value },
    }));
    clearFeedback();
  }

  function updateService<K extends keyof WebsiteIncidentServiceProfile>(
    key: K,
    value: WebsiteIncidentServiceProfile[K],
  ) {
    setDossier((current) => ({
      ...current,
      context: {
        ...current.context,
        service: { ...current.context.service, [key]: value },
      },
    }));
    clearFeedback();
  }

  function updateProvider(
    key: keyof WebsiteIncidentProviderObservation,
    value: WebsiteIncidentProviderObservation[keyof WebsiteIncidentProviderObservation],
  ) {
    setDossier((current) => ({
      ...current,
      context: {
        ...current.context,
        provider: { ...current.context.provider, [key]: value },
      },
    }));
    clearFeedback();
  }

  function updateRecentChange(
    key: keyof WebsiteIncidentRecentChange,
    value: WebsiteIncidentRecentChange[keyof WebsiteIncidentRecentChange],
  ) {
    setDossier((current) => ({
      ...current,
      context: {
        ...current.context,
        recentChange: { ...current.context.recentChange, [key]: value },
      },
    }));
    clearFeedback();
  }

  function updateTimeline(key: keyof WebsiteIncidentTimeline, value: string) {
    setDossier((current) => ({
      ...current,
      timeline: { ...current.timeline, [key]: value },
    }));
    clearFeedback();
  }

  function updateObjective<K extends keyof WebsiteIncidentObjectives>(
    key: K,
    value: WebsiteIncidentObjectives[K],
  ) {
    setDossier((current) => ({
      ...current,
      objectives: { ...current.objectives, [key]: value },
    }));
    clearFeedback();
  }

  function updateCost(
    key: keyof WebsiteIncidentDirectCostInput,
    value: WebsiteIncidentDirectCostInput[keyof WebsiteIncidentDirectCostInput],
  ) {
    setDossier((current) => ({
      ...current,
      directCost: { ...current.directCost, [key]: value },
    }));
    clearFeedback();
  }

  function updateGate(
    id: WebsiteIncidentRecoveryGateId,
    patch: Partial<WebsiteIncidentGateEvidence>,
  ) {
    setDossier((current) => ({
      ...current,
      recoveryGates: {
        ...current.recoveryGates,
        [id]: { ...current.recoveryGates[id], ...patch },
      },
    }));
    clearFeedback();
  }

  function loadFictitiousExample() {
    setEvaluationTime(FICTITIOUS_EVALUATION_TIME);
    setDossier(
      createFictitiousWebsiteIncidentDossier(
        FICTITIOUS_EVALUATION_TIME,
        "Europe/Paris",
      ),
    );
    setResetRequested(false);
    setOpenGateIds(new Set());
    clearFeedback();
  }

  async function copyReport() {
    if (!reviewConfirmed) return;
    const copied = await copyTextToClipboard(report);
    setCopyStatus(copied ? "copied" : "copy-error");
  }

  function downloadReport() {
    if (!reviewConfirmed) return;
    try {
      const blob = new Blob([report], { type: "text/plain;charset=utf-8" });
      const objectUrl = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = objectUrl;
      anchor.download = "dossier-incident-reprise.txt";
      document.body.append(anchor);
      anchor.click();
      anchor.remove();
      URL.revokeObjectURL(objectUrl);
      setDownloadStatus("downloaded");
    } catch {
      setDownloadStatus("download-error");
    }
  }

  function askReset(trigger: HTMLButtonElement) {
    resetTriggerRef.current = trigger;
    setResetRequested(true);
  }

  function cancelReset() {
    setResetRequested(false);
  }

  function confirmReset() {
    setDossier(createInitialDossier());
    setEvaluationTime("");
    setOpenGateIds(new Set());
    setResetRequested(false);
    clearFeedback();
  }

  useEffect(() => {
    if (!resetRequested) return;

    const dialog = resetDialogRef.current;
    if (!dialog) return;
    const background = [...document.body.children].filter(
      (element) => !element.contains(dialog),
    );
    const previous = background.map((element) => ({
      element,
      inert: element.getAttribute("inert"),
      ariaHidden: element.getAttribute("aria-hidden"),
    }));

    for (const { element } of previous) {
      element.setAttribute("inert", "");
      element.setAttribute("aria-hidden", "true");
    }
    resetConfirmRef.current?.focus();

    return () => {
      for (const { element, inert, ariaHidden } of previous) {
        if (inert === null) element.removeAttribute("inert");
        else element.setAttribute("inert", inert);
        if (ariaHidden === null) element.removeAttribute("aria-hidden");
        else element.setAttribute("aria-hidden", ariaHidden);
      }
      resetTriggerRef.current?.focus();
    };
  }, [resetRequested]);

  function handleResetDialogKeyDown(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      cancelReset();
      return;
    }
    if (event.key !== "Tab") return;

    const dialog = resetDialogRef.current;
    if (!dialog) return;
    const focusable = [...dialog.querySelectorAll<HTMLButtonElement>("button")];
    const first = focusable[0];
    const last = focusable.at(-1);
    if (!first || !last) return;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function validationId(field: string): string {
    return `${instanceId}-${field.replace(/[^a-zA-Z0-9_-]/g, "-")}-feedback`;
  }

  function fieldValidation(field: string): UiValidationMessage[] {
    const messages: UiValidationMessage[] = evaluation.issues
      .filter((issue) => issue.field === field)
      .map((issue) => ({
        message: issue.message,
        severity: issue.severity,
      }));
    const add = (
      condition: boolean,
      message: string,
      severity: WebsiteIncidentIssue["severity"] = "error",
    ) => {
      if (condition) messages.push({ message, severity });
    };

    add(
      field === "context.reference" && !dossier.context.reference.trim(),
      "Ajoutez une référence interne pour identifier ce dossier.",
    );
    add(
      field === "context.url" && !dossier.context.url.trim(),
      "Ajoutez l’adresse HTTP ou HTTPS exacte observée, sans identifiant ni secret.",
    );
    add(
      field === "context.symptom" && !dossier.context.symptom.trim(),
      "Recopiez le symptôme ou le message visible, sans en déduire la cause.",
    );
    add(
      field === "context.impact" && !dossier.context.impact.trim(),
      "Décrivez la fonction métier réellement touchée et ce qui reste inconnu.",
    );
    add(
      field === "context.scope" && dossier.context.scope === "unknown",
      "Qualifiez le périmètre observé ; conservez ND tant qu’aucun constat sûr n’est disponible.",
    );
    add(
      field === "timeline.firstFailureObservedAt" &&
        !dossier.timeline.firstFailureObservedAt.trim(),
      "Ajoutez le premier échec observé avec un décalage explicite.",
    );
    add(
      field === "timeline.detectedAt" && !dossier.timeline.detectedAt.trim(),
      "Ajoutez l’instant de détection avec un décalage explicite.",
    );

    if (dossier.context.provider.status !== "unknown") {
      const providerRequired: Record<string, string> = {
        "context.provider.name":
          "Identifiez le fournisseur dont le statut a été consulté.",
        "context.provider.checkedAt":
          "Ajoutez l’heure de consultation du statut avec son décalage.",
        "context.provider.reference":
          "Ajoutez la référence de la page d’état ou du ticket.",
        "context.provider.scope":
          "Précisez la région, le produit ou la fonction couverts par ce statut.",
      };
      const providerValue: Record<string, string> = {
        "context.provider.name": dossier.context.provider.name,
        "context.provider.checkedAt": dossier.context.provider.checkedAt,
        "context.provider.reference": dossier.context.provider.reference,
        "context.provider.scope": dossier.context.provider.scope,
      };
      add(
        field in providerRequired && !providerValue[field]?.trim(),
        providerRequired[field] ?? "",
      );
    }

    if (dossier.context.recentChange.status === "known") {
      add(
        field === "context.recentChange.changedAt" &&
          !dossier.context.recentChange.changedAt.trim(),
        "Ajoutez l’instant du changement connu avec son décalage.",
      );
      add(
        field === "context.recentChange.description" &&
          !dossier.context.recentChange.description.trim(),
        "Décrivez le changement comme un fait temporel, sans le présenter comme la cause.",
      );
    }

    if (dossier.objectives.rtoMinutes !== undefined) {
      add(
        field === "objectives.rtoStartedAt" &&
          !dossier.objectives.rtoStartedAt.trim(),
        "Ajoutez le départ documenté du chronomètre RTO.",
        "warning",
      );
      add(
        field === "objectives.rtoSource" &&
          !dossier.objectives.rtoSource.trim(),
        "Identifiez la source décidée avant l’incident pour ce RTO.",
        "warning",
      );
    }
    if (dossier.objectives.rpoMinutes !== undefined) {
      add(
        field === "objectives.dataRecoveryPointAt" &&
          !dossier.objectives.dataRecoveryPointAt.trim(),
        "Ajoutez le point de données réellement récupéré.",
        "warning",
      );
      add(
        field === "objectives.rpoReferenceAt" &&
          !dossier.objectives.rpoReferenceAt.trim(),
        "Ajoutez l’instant auquel comparer le point récupéré.",
        "warning",
      );
      add(
        field === "objectives.rpoSource" &&
          !dossier.objectives.rpoSource.trim(),
        "Identifiez la source décidée avant l’incident pour ce RPO.",
        "warning",
      );
    }
    const slaHasValue = Boolean(
      dossier.objectives.slaReference.trim() ||
      dossier.objectives.slaCoverageWindow.trim() ||
      dossier.objectives.slaClockRule.trim(),
    );
    if (slaHasValue) {
      add(
        field === "objectives.slaReference" &&
          !dossier.objectives.slaReference.trim(),
        "Ajoutez la référence exacte du SLA.",
        "warning",
      );
      add(
        field === "objectives.slaCoverageWindow" &&
          !dossier.objectives.slaCoverageWindow.trim(),
        "Ajoutez les jours, heures et fuseau couverts par le SLA.",
        "warning",
      );
      add(
        field === "objectives.slaClockRule" &&
          !dossier.objectives.slaClockRule.trim(),
        "Ajoutez l’événement qui déclenche le chronomètre contractuel.",
        "warning",
      );
    }

    const gateMatch = field.match(
      /^recoveryGates\.([^.]+)\.(status|proofKind|observedAt|evidenceReference|result|owner)$/,
    );
    if (gateMatch) {
      const gateId = gateMatch[1] as WebsiteIncidentRecoveryGateId;
      const gateField = gateMatch[2] as keyof WebsiteIncidentGateEvidence;
      const gate = dossier.recoveryGates[gateId];
      const compositeIssues = evaluation.issues.filter(
        (issue) => issue.field === `recoveryGates.${gateId}`,
      );
      if (
        gate.status !== "unknown" &&
        ["observedAt", "evidenceReference", "result", "owner"].includes(
          gateField,
        ) &&
        !String(gate[gateField]).trim()
      ) {
        for (const issue of compositeIssues) {
          messages.push({
            message: `${issue.message} Renseignez ce champ ou repassez la porte à « Non vérifié ».`,
            severity: issue.severity,
          });
        }
      }
    }

    if (field.startsWith("directCost.")) {
      const costField = field.replace(
        "directCost.",
        "",
      ) as keyof WebsiteIncidentDirectCostInput;
      for (const issue of evaluation.directCost.issues) {
        const matchesDoubleCount =
          costField === "coordinationDistinctFromProductivity" &&
          issue.field === "possibleDoubleCount";
        if (
          (issue.field === costField || matchesDoubleCount) &&
          issue.code !== "missing"
        ) {
          messages.push({
            message: issue.message,
            severity:
              issue.code === "possible-double-count" ? "warning" : "error",
          });
        }
      }
    }

    return uniqueValidationMessages(
      messages.filter((message) => message.message.trim()),
    );
  }

  function validationProps(field: string) {
    const messages = fieldValidation(field);
    return {
      "aria-invalid":
        messages.some((message) => message.severity === "error") || undefined,
      "aria-describedby": messages.length > 0 ? validationId(field) : undefined,
    };
  }

  function renderValidation(field: string) {
    const messages = fieldValidation(field);
    if (messages.length === 0) return null;
    const hasError = messages.some((message) => message.severity === "error");
    return (
      <span
        id={validationId(field)}
        className={
          hasError
            ? ERROR_CLASS
            : "mt-1.5 block text-xs font-semibold leading-relaxed text-amber-700 dark:text-amber-300"
        }
      >
        {messages.map((message) => message.message).join(" ")}
      </span>
    );
  }

  function fieldsNeedingAttention(fields: string[]): number {
    return fields.filter((field) => fieldValidation(field).length > 0).length;
  }

  function toggleGate(id: WebsiteIncidentRecoveryGateId, open: boolean): void {
    setOpenGateIds((current) => {
      if (current.has(id) === open) return current;
      const next = new Set(current);
      if (open) next.add(id);
      else next.delete(id);
      return next;
    });
  }

  return (
    <>
      <style>
        {
          ".prose > pre:not(.website-incident-print-report) { white-space: pre-wrap !important; overflow-wrap: anywhere !important; overflow-x: visible !important; } .prose > pre:not(.website-incident-print-report) code { white-space: inherit !important; } @page { size: A4; margin: 12mm; } @media print { body *:not(#website-incident-dossier):not(#website-incident-dossier *):not(:has(#website-incident-dossier)) { display: none !important; } #website-incident-dossier { position: absolute !important; inset: 0 auto auto 0 !important; width: 100% !important; margin: 0 !important; overflow: visible !important; border: 0 !important; box-shadow: none !important; background: white !important; color: #18181b !important; } #website-incident-dossier > :not(.website-incident-print-report) { display: none !important; } #website-incident-dossier .website-incident-print-report { display: block !important; margin: 0 !important; white-space: pre-wrap !important; overflow-wrap: anywhere !important; background: white !important; color: #18181b !important; font-size: 10pt !important; line-height: 1.20 !important; orphans: 2; widows: 2; } }"
        }
      </style>
      <section
        id="website-incident-dossier"
        className="not-prose my-10 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
        aria-labelledby={`${instanceId}-incident-title`}
        data-read-time-exclude="true"
      >
        <div className="border-b border-zinc-800 bg-zinc-950 px-4 py-6 text-white sm:px-6">
          <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-300">
            Outil local · aucune donnée envoyée · aucune sauvegarde automatique
          </p>
          <h3
            id={`${instanceId}-incident-title`}
            className="mb-0 mt-2 text-xl font-bold sm:text-2xl"
          >
            Dossier local d’incident et de reprise web
          </h3>
          <p className="mb-0 mt-2 max-w-4xl text-sm leading-relaxed text-zinc-300">
            Orientez l’escalade sans inventer la cause, consignez RTO, RPO et
            coût sans transformer une inconnue en zéro, puis levez dix portes
            avant la clôture. Cet outil ne teste aucun site et ne remplace ni
            une astreinte, ni une réponse à incident cyber.
          </p>
        </div>

        <pre
          className="website-incident-print-report hidden p-6 font-sans text-[10pt] leading-[1.35] print:block"
          data-read-time-exclude="true"
        >
          {report}
        </pre>

        <div className="space-y-9 p-4 print:hidden sm:p-6">
          <div
            className={`rounded-xl border p-4 ${routeClass(evaluation.route)}`}
            aria-live="polite"
          >
            <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-start">
              <div>
                <p className="m-0 text-xs font-bold uppercase tracking-wider">
                  Route prudente
                </p>
                <p className="mb-0 mt-1 text-lg font-bold">
                  {evaluation.routeLabel}
                </p>
                <p className="mb-0 mt-1 text-sm leading-relaxed">
                  {evaluation.routeReason}
                </p>
              </div>
              <span className="w-fit rounded-full border border-current/25 px-3 py-1 text-xs font-bold">
                {closureLabel(evaluation.closure.status)}
              </span>
            </div>
            <p className="mb-0 mt-3 border-t border-current/20 pt-3 text-xs leading-relaxed">
              {evaluation.causeConclusion}
            </p>
          </div>

          <section
            id={`${instanceId}-incident-actions`}
            className="rounded-xl border border-violet-200 bg-violet-50/50 p-4 dark:border-violet-900 dark:bg-violet-950/20"
            aria-labelledby={`${instanceId}-actions-title`}
          >
            <h4
              id={`${instanceId}-actions-title`}
              className="m-0 text-base font-bold text-zinc-950 dark:text-white"
            >
              Exemple, relecture et export
            </h4>
            <p className="mb-0 mt-2 text-xs leading-relaxed text-zinc-700 dark:text-zinc-300">
              La détection automatique masque seulement certains motifs
              ressemblant à des secrets. Elle fonctionne au mieux et peut
              laisser passer une donnée sensible ou masquer un texte légitime.
              Avant toute copie, impression, téléchargement ou partage, relisez
              le rapport ci-dessous et retirez manuellement mots de passe, clés,
              jetons, cookies, données client et journaux bruts.
            </p>
            <details className="mt-4 rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
              <summary className="cursor-pointer px-3 py-3 text-sm font-bold text-zinc-950 dark:text-white">
                Prévisualiser le rapport texte à relire
              </summary>
              <pre
                tabIndex={0}
                aria-label="Prévisualisation locale du rapport à relire avant partage"
                className="m-0 max-h-80 overflow-y-auto whitespace-pre-wrap break-words border-t border-zinc-200 p-3 font-mono text-xs leading-relaxed text-zinc-800 dark:border-zinc-800 dark:text-zinc-200"
              >
                {report}
              </pre>
            </details>
            <label className="mt-4 flex items-start gap-2 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
              <input
                type="checkbox"
                checked={reviewConfirmed}
                onChange={(event) => {
                  setReviewConfirmed(event.target.checked);
                  setCopyStatus("idle");
                  setDownloadStatus("idle");
                }}
                className="mt-0.5 h-4 w-4 shrink-0 accent-violet-700"
              />
              <span>
                J’ai relu le rapport et retiré manuellement les informations
                sensibles avant export ou partage.
              </span>
            </label>
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={loadFictitiousExample}
                className="rounded-lg border border-violet-300 bg-white px-4 py-2.5 text-sm font-semibold text-violet-950 hover:bg-violet-100 focus:outline-none focus:ring-2 focus:ring-violet-400 dark:border-violet-800 dark:bg-violet-950/30 dark:text-violet-100"
              >
                Charger l’exemple fictif
              </button>
              <button
                type="button"
                onClick={copyReport}
                disabled={!reviewConfirmed}
                className="inline-flex items-center gap-2 rounded-lg bg-zinc-950 px-4 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-zinc-950"
              >
                <ClipboardCheck className="h-4 w-4" aria-hidden="true" />
                Copier le dossier
              </button>
              <button
                type="button"
                onClick={downloadReport}
                disabled={!reviewConfirmed}
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-800 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-400 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Télécharger le TXT
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                disabled={!reviewConfirmed}
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-800 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-400 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200"
              >
                <Printer className="h-4 w-4" aria-hidden="true" />
                Imprimer le dossier
              </button>
              <button
                type="button"
                onClick={(event) => askReset(event.currentTarget)}
                className="inline-flex items-center gap-2 rounded-lg border border-rose-300 bg-white px-4 py-2.5 text-sm font-semibold text-rose-800 hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-rose-400 dark:border-rose-800 dark:bg-zinc-950 dark:text-rose-200"
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                Effacer le dossier
              </button>
            </div>
            <p
              className="mb-0 mt-3 min-h-5 text-xs text-zinc-600 dark:text-zinc-400"
              aria-live="polite"
            >
              {copyStatus === "copied"
                ? "Le dossier a été copié localement après votre confirmation de relecture."
                : copyStatus === "copy-error"
                  ? "La copie a échoué. Utilisez le téléchargement ou l’impression après relecture."
                  : downloadStatus === "downloaded"
                    ? "Le fichier texte a été créé localement après votre confirmation de relecture."
                    : downloadStatus === "download-error"
                      ? "Le fichier n’a pas pu être créé. Utilisez la copie ou l’impression après relecture."
                      : reviewConfirmed
                        ? "Relecture confirmée. Les actions d’export sont disponibles."
                        : "Les actions d’export restent désactivées jusqu’à la confirmation de relecture."}
            </p>
          </section>

          <section aria-labelledby={`${instanceId}-context-title`}>
            <h4
              id={`${instanceId}-context-title`}
              className="m-0 text-lg font-bold text-zinc-950 dark:text-white"
            >
              1. Figer les faits et l’heure d’évaluation
            </h4>
            <p className="mb-5 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Utilisez des instants ISO avec décalage explicite, par exemple{" "}
              <code>2026-07-27T08:42:00+02:00</code>. Le décalage doit
              correspondre au fuseau IANA à cette date. Ne collez ni secret, ni
              donnée client, ni journal brut.
            </p>

            <div className="grid gap-4 lg:grid-cols-2">
              <label className={LABEL_CLASS}>
                Heure d’évaluation
                <input
                  value={evaluationTime}
                  onChange={(event) => {
                    setEvaluationTime(event.target.value);
                    clearFeedback();
                  }}
                  maxLength={40}
                  placeholder="2026-07-27T12:00:00+02:00"
                  {...validationProps("evaluationTime")}
                  className={INPUT_CLASS}
                />
                <span className={HELP_CLASS}>
                  Toutes les preuves doivent être antérieures ou égales à cet
                  instant.
                </span>
                {renderValidation("evaluationTime")}
              </label>
              <label className={LABEL_CLASS}>
                Fuseau IANA
                <input
                  value={dossier.context.timeZone}
                  onChange={(event) =>
                    updateContext("timeZone", event.target.value)
                  }
                  maxLength={80}
                  placeholder="Europe/Paris"
                  {...validationProps("context.timeZone")}
                  className={INPUT_CLASS}
                />
                <span className={HELP_CLASS}>
                  Exemple : Europe/Paris, Europe/London ou UTC.
                </span>
                {renderValidation("context.timeZone")}
              </label>
              <label className={LABEL_CLASS}>
                Référence d’incident
                <input
                  value={dossier.context.reference}
                  onChange={(event) =>
                    updateContext("reference", event.target.value)
                  }
                  maxLength={MAX_SHORT_TEXT}
                  placeholder="INC-2026-042"
                  {...validationProps("context.reference")}
                  className={INPUT_CLASS}
                />
                {renderValidation("context.reference")}
              </label>
              <label className={LABEL_CLASS}>
                URL observée
                <input
                  type="url"
                  value={dossier.context.url}
                  onChange={(event) => updateContext("url", event.target.value)}
                  maxLength={MAX_SHORT_TEXT}
                  placeholder="https://exemple.fr/parcours"
                  {...validationProps("context.url")}
                  className={INPUT_CLASS}
                />
                <span className={HELP_CLASS}>
                  Sans identifiant, mot de passe, jeton ni paramètre secret.
                </span>
                {renderValidation("context.url")}
              </label>
              <label className={`${LABEL_CLASS} lg:col-span-2`}>
                Symptôme observé, mot pour mot
                <textarea
                  value={dossier.context.symptom}
                  onChange={(event) =>
                    updateContext("symptom", event.target.value)
                  }
                  maxLength={MAX_LONG_TEXT}
                  rows={3}
                  placeholder="Ex. HTTP 502 sur l’accueil et le formulaire depuis deux réseaux."
                  {...validationProps("context.symptom")}
                  className={INPUT_CLASS}
                />
                {renderValidation("context.symptom")}
              </label>
              <label className={LABEL_CLASS}>
                Étendue observée
                <select
                  value={dossier.context.scope}
                  onChange={(event) =>
                    updateContext(
                      "scope",
                      event.target.value as WebsiteIncidentContext["scope"],
                    )
                  }
                  {...validationProps("context.scope")}
                  className={INPUT_CLASS}
                >
                  <option value="unknown">ND — à qualifier</option>
                  <option value="single-device">Un seul appareil</option>
                  <option value="single-network">Un seul réseau</option>
                  <option value="multiple-networks">Plusieurs réseaux</option>
                  <option value="regional">Une ou plusieurs régions</option>
                  <option value="global">Généralisée</option>
                  <option value="partial">Partielle, fonction précise</option>
                </select>
                {renderValidation("context.scope")}
              </label>
              <label className={LABEL_CLASS}>
                Résultat depuis un accès indépendant
                <select
                  value={dossier.context.independentAccess}
                  onChange={(event) =>
                    updateContext(
                      "independentAccess",
                      event.target
                        .value as WebsiteIncidentContext["independentAccess"],
                    )
                  }
                  className={INPUT_CLASS}
                >
                  <option value="unknown">ND — non testé</option>
                  <option value="pass">Le service répond</option>
                  <option value="fail">Le service échoue aussi</option>
                </select>
              </label>
              <label className={`${LABEL_CLASS} lg:col-span-2`}>
                Impact métier observé
                <textarea
                  value={dossier.context.impact}
                  onChange={(event) =>
                    updateContext("impact", event.target.value)
                  }
                  maxLength={MAX_LONG_TEXT}
                  rows={3}
                  placeholder="Ex. formulaires indisponibles ; nombre de demandes manquantes encore inconnu."
                  {...validationProps("context.impact")}
                  className={INPUT_CLASS}
                />
                {renderValidation("context.impact")}
              </label>
              <label className={LABEL_CLASS}>
                Statut HTTP observé
                <input
                  type="number"
                  min={100}
                  max={599}
                  step={1}
                  value={numberInput(dossier.context.httpStatus)}
                  onChange={(event) =>
                    updateContext(
                      "httpStatus",
                      event.target.value === ""
                        ? undefined
                        : Number(event.target.value),
                    )
                  }
                  placeholder="502"
                  {...validationProps("context.httpStatus")}
                  className={INPUT_CLASS}
                />
                <span className={HELP_CLASS}>
                  Un 502 oriente ; il ne prouve pas la cause.
                </span>
                {renderValidation("context.httpStatus")}
              </label>
              <label className={LABEL_CLASS}>
                Parcours métier critique
                <input
                  value={dossier.context.service.criticalJourney}
                  onChange={(event) =>
                    updateService("criticalJourney", event.target.value)
                  }
                  maxLength={MAX_LONG_TEXT}
                  placeholder="Envoyer un formulaire et recevoir le message"
                  {...validationProps("context.service.criticalJourney")}
                  className={INPUT_CLASS}
                />
                {renderValidation("context.service.criticalJourney")}
              </label>
              <label className={`${LABEL_CLASS} lg:col-span-2`}>
                Référence technique expurgée
                <textarea
                  value={dossier.context.technicalEvidence}
                  onChange={(event) =>
                    updateContext("technicalEvidence", event.target.value)
                  }
                  maxLength={MAX_LONG_TEXT}
                  rows={2}
                  placeholder="Capture ou identifiant de requête conservé ailleurs ; aucun log brut."
                  className={INPUT_CLASS}
                />
              </label>
            </div>
          </section>

          <details className="rounded-xl border border-zinc-200 bg-zinc-50 open:bg-white dark:border-zinc-800 dark:bg-zinc-900/40 dark:open:bg-zinc-950">
            <summary className="cursor-pointer px-4 py-4 text-sm font-bold text-zinc-950 dark:text-white">
              <span className="flex flex-wrap items-center justify-between gap-2">
                <span>
                  2. Fournisseur, changement récent et profil du service
                </span>
                {fieldsNeedingAttention([
                  "context.provider.name",
                  "context.provider.checkedAt",
                  "context.provider.reference",
                  "context.provider.scope",
                  "context.recentChange.changedAt",
                  "context.recentChange.description",
                ]) > 0 ? (
                  <span className="rounded-full bg-rose-100 px-2 py-1 text-xs text-rose-800 dark:bg-rose-950 dark:text-rose-200">
                    À corriger · ouvrir
                  </span>
                ) : null}
              </span>
            </summary>
            <div className="grid gap-4 border-t border-zinc-200 p-4 dark:border-zinc-800 lg:grid-cols-2">
              <label className={LABEL_CLASS}>
                Fournisseur observé
                <input
                  value={dossier.context.provider.name}
                  onChange={(event) =>
                    updateProvider("name", event.target.value)
                  }
                  maxLength={MAX_SHORT_TEXT}
                  placeholder="Hébergeur, CDN, paiement…"
                  {...validationProps("context.provider.name")}
                  className={INPUT_CLASS}
                />
                {renderValidation("context.provider.name")}
              </label>
              <label className={LABEL_CLASS}>
                Statut public du fournisseur
                <select
                  value={dossier.context.provider.status}
                  onChange={(event) =>
                    updateProvider(
                      "status",
                      event.target
                        .value as WebsiteIncidentProviderObservation["status"],
                    )
                  }
                  className={INPUT_CLASS}
                >
                  <option value="unknown">ND — non vérifié</option>
                  <option value="operational">Annoncé opérationnel</option>
                  <option value="degraded">Dégradation annoncée</option>
                  <option value="outage">Panne annoncée</option>
                </select>
              </label>
              <label className={LABEL_CLASS}>
                Statut consulté à
                <input
                  value={dossier.context.provider.checkedAt}
                  onChange={(event) =>
                    updateProvider("checkedAt", event.target.value)
                  }
                  maxLength={40}
                  placeholder="2026-07-27T08:48:00+02:00"
                  {...validationProps("context.provider.checkedAt")}
                  className={INPUT_CLASS}
                />
                {renderValidation("context.provider.checkedAt")}
              </label>
              <label className={LABEL_CLASS}>
                Référence de la page d’état ou du ticket
                <input
                  value={dossier.context.provider.reference}
                  onChange={(event) =>
                    updateProvider("reference", event.target.value)
                  }
                  maxLength={MAX_SHORT_TEXT}
                  {...validationProps("context.provider.reference")}
                  className={INPUT_CLASS}
                />
                {renderValidation("context.provider.reference")}
              </label>
              <label className={`${LABEL_CLASS} lg:col-span-2`}>
                Périmètre annoncé par le fournisseur
                <input
                  value={dossier.context.provider.scope}
                  onChange={(event) =>
                    updateProvider("scope", event.target.value)
                  }
                  maxLength={MAX_LONG_TEXT}
                  placeholder="Région, produit ou fonction explicitement visés."
                  {...validationProps("context.provider.scope")}
                  className={INPUT_CLASS}
                />
                {renderValidation("context.provider.scope")}
              </label>
              <label className={LABEL_CLASS}>
                Changement récent
                <select
                  value={dossier.context.recentChange.status}
                  onChange={(event) =>
                    updateRecentChange(
                      "status",
                      event.target
                        .value as WebsiteIncidentRecentChange["status"],
                    )
                  }
                  className={INPUT_CLASS}
                >
                  <option value="unknown">ND — à vérifier</option>
                  <option value="none-known">Aucun changement connu</option>
                  <option value="known">Changement connu</option>
                </select>
              </label>
              <label className={LABEL_CLASS}>
                Changement effectué à
                <input
                  value={dossier.context.recentChange.changedAt}
                  onChange={(event) =>
                    updateRecentChange("changedAt", event.target.value)
                  }
                  maxLength={40}
                  placeholder="2026-07-27T08:34:00+02:00"
                  {...validationProps("context.recentChange.changedAt")}
                  className={INPUT_CLASS}
                />
                {renderValidation("context.recentChange.changedAt")}
              </label>
              <label className={`${LABEL_CLASS} lg:col-span-2`}>
                Description factuelle du changement
                <textarea
                  value={dossier.context.recentChange.description}
                  onChange={(event) =>
                    updateRecentChange("description", event.target.value)
                  }
                  maxLength={MAX_LONG_TEXT}
                  rows={2}
                  placeholder="Une proximité temporelle n’en fait pas automatiquement la cause."
                  {...validationProps("context.recentChange.description")}
                  className={INPUT_CLASS}
                />
                {renderValidation("context.recentChange.description")}
              </label>

              {(
                [
                  ["usesPayments", "Le site utilise-t-il un paiement ?"],
                  [
                    "sendsTransactionalEmail",
                    "Envoie-t-il des e-mails transactionnels ?",
                  ],
                  ["usesWebhooks", "Utilise-t-il des webhooks ?"],
                  ["hasMutableData", "Conserve-t-il des données modifiables ?"],
                ] as Array<[keyof WebsiteIncidentServiceProfile, string]>
              ).map(([key, label]) => (
                <label key={key} className={LABEL_CLASS}>
                  {label}
                  <select
                    value={optionalBooleanValue(
                      dossier.context.service[key] as boolean | undefined,
                    )}
                    onChange={(event) =>
                      updateService(key, optionalBoolean(event.target.value))
                    }
                    className={INPUT_CLASS}
                  >
                    <option value="unknown">ND — à qualifier</option>
                    <option value="yes">Oui</option>
                    <option value="no">Non</option>
                  </select>
                </label>
              ))}
            </div>
          </details>

          <section
            className="rounded-xl border border-rose-200 bg-rose-50/60 p-4 dark:border-rose-900 dark:bg-rose-950/20"
            aria-labelledby={`${instanceId}-cyber-title`}
          >
            <div className="flex items-start gap-3">
              <ShieldAlert
                className="mt-0.5 h-5 w-5 shrink-0 text-rose-700 dark:text-rose-300"
                aria-hidden="true"
              />
              <div className="min-w-0 flex-1">
                <h4
                  id={`${instanceId}-cyber-title`}
                  className="m-0 text-base font-bold text-rose-950 dark:text-rose-100"
                >
                  3. Porte cyber prioritaire
                </h4>
                <p className="mb-4 mt-1 text-xs leading-relaxed text-rose-900/80 dark:text-rose-200/80">
                  Un signal suffit à arrêter les tests actifs non autorisés.
                  Utilisez un canal sûr et faites préserver les traces par une
                  personne compétente.
                </p>
                <div className="grid gap-4 lg:grid-cols-2">
                  <label className={LABEL_CLASS}>
                    Évaluation cyber
                    <select
                      value={dossier.context.cyberAssessment}
                      onChange={(event) =>
                        updateContext(
                          "cyberAssessment",
                          event.target
                            .value as WebsiteIncidentContext["cyberAssessment"],
                        )
                      }
                      {...validationProps("context.cyberAssessment")}
                      className={INPUT_CLASS}
                    >
                      <option value="unknown">ND — non qualifiée</option>
                      <option value="no-signal">
                        Aucun signal observé, sans exclure une attaque
                      </option>
                      <option value="suspected">Compromission possible</option>
                      <option value="confirmed">
                        Compromission confirmée par une personne compétente
                      </option>
                    </select>
                    {renderValidation("context.cyberAssessment")}
                  </label>
                  <label className={LABEL_CLASS}>
                    Signaux factuels, un par ligne
                    <textarea
                      value={dossier.context.cyberSignals.join("\n")}
                      onChange={(event) =>
                        updateContext(
                          "cyberSignals",
                          event.target.value
                            .split(/\r?\n/)
                            .map((value) => value.trim())
                            .filter(Boolean)
                            .slice(0, 20),
                        )
                      }
                      maxLength={MAX_LONG_TEXT}
                      rows={4}
                      placeholder="Redirection inconnue&#10;Compte administrateur nouveau"
                      {...validationProps("context.cyberSignals")}
                      className={INPUT_CLASS}
                    />
                    {renderValidation("context.cyberSignals")}
                  </label>
                </div>
              </div>
            </div>
          </section>

          <details className="rounded-xl border border-zinc-200 bg-zinc-50 open:bg-white dark:border-zinc-800 dark:bg-zinc-900/40 dark:open:bg-zinc-950">
            <summary className="cursor-pointer px-4 py-4 text-sm font-bold text-zinc-950 dark:text-white">
              <span className="flex flex-wrap items-center justify-between gap-2">
                <span>4. Chronologie complète · neuf instants</span>
                {fieldsNeedingAttention(
                  TIMELINE_FIELDS.map((field) => `timeline.${field.key}`),
                ) > 0 ? (
                  <span className="rounded-full bg-rose-100 px-2 py-1 text-xs text-rose-800 dark:bg-rose-950 dark:text-rose-200">
                    À corriger · ouvrir
                  </span>
                ) : null}
              </span>
            </summary>
            <div className="grid gap-4 border-t border-zinc-200 p-4 dark:border-zinc-800 lg:grid-cols-2">
              {TIMELINE_FIELDS.map((field) => (
                <label key={field.key} className={LABEL_CLASS}>
                  {field.label}
                  <input
                    value={dossier.timeline[field.key]}
                    onChange={(event) =>
                      updateTimeline(field.key, event.target.value)
                    }
                    maxLength={40}
                    placeholder="2026-07-27T08:42:00+02:00"
                    {...validationProps(`timeline.${field.key}`)}
                    className={INPUT_CLASS}
                  />
                  <span className={HELP_CLASS}>{field.help}</span>
                  {renderValidation(`timeline.${field.key}`)}
                </label>
              ))}
            </div>
          </details>

          <details className="rounded-xl border border-zinc-200 bg-zinc-50 open:bg-white dark:border-zinc-800 dark:bg-zinc-900/40 dark:open:bg-zinc-950">
            <summary className="cursor-pointer px-4 py-4 text-sm font-bold text-zinc-950 dark:text-white">
              <span className="flex flex-wrap items-center justify-between gap-2">
                <span>5. RTO, RPO et SLA · les absents restent ND</span>
                {fieldsNeedingAttention([
                  "objectives.rtoMinutes",
                  "objectives.rtoStartedAt",
                  "objectives.rtoSource",
                  "objectives.rpoMinutes",
                  "objectives.dataRecoveryPointAt",
                  "objectives.rpoReferenceAt",
                  "objectives.rpoSource",
                  "objectives.slaReference",
                  "objectives.slaCoverageWindow",
                  "objectives.slaClockRule",
                ]) > 0 ? (
                  <span className="rounded-full bg-amber-100 px-2 py-1 text-xs text-amber-800 dark:bg-amber-950 dark:text-amber-200">
                    À compléter · ouvrir
                  </span>
                ) : null}
              </span>
            </summary>
            <div className="grid gap-4 border-t border-zinc-200 p-4 dark:border-zinc-800 lg:grid-cols-2">
              <label className={LABEL_CLASS}>
                RTO cible, en minutes
                <input
                  type="number"
                  min={1}
                  max={525600}
                  step={1}
                  value={numberInput(dossier.objectives.rtoMinutes)}
                  onChange={(event) =>
                    updateObjective(
                      "rtoMinutes",
                      event.target.value === ""
                        ? undefined
                        : Number(event.target.value),
                    )
                  }
                  {...validationProps("objectives.rtoMinutes")}
                  className={INPUT_CLASS}
                />
                {renderValidation("objectives.rtoMinutes")}
              </label>
              <label className={LABEL_CLASS}>
                Départ du chronomètre RTO
                <input
                  value={dossier.objectives.rtoStartedAt}
                  onChange={(event) =>
                    updateObjective("rtoStartedAt", event.target.value)
                  }
                  maxLength={40}
                  placeholder="2026-07-27T08:42:00+02:00"
                  {...validationProps("objectives.rtoStartedAt")}
                  className={INPUT_CLASS}
                />
                {renderValidation("objectives.rtoStartedAt")}
              </label>
              <label className={`${LABEL_CLASS} lg:col-span-2`}>
                Source du RTO
                <input
                  value={dossier.objectives.rtoSource}
                  onChange={(event) =>
                    updateObjective("rtoSource", event.target.value)
                  }
                  maxLength={MAX_SHORT_TEXT}
                  placeholder="PCA, procédure ou décision datée — pas une valeur reconstruite après coup."
                  {...validationProps("objectives.rtoSource")}
                  className={INPUT_CLASS}
                />
                {renderValidation("objectives.rtoSource")}
              </label>
              <label className={LABEL_CLASS}>
                RPO cible, en minutes
                <input
                  type="number"
                  min={1}
                  max={525600}
                  step={1}
                  value={numberInput(dossier.objectives.rpoMinutes)}
                  onChange={(event) =>
                    updateObjective(
                      "rpoMinutes",
                      event.target.value === ""
                        ? undefined
                        : Number(event.target.value),
                    )
                  }
                  {...validationProps("objectives.rpoMinutes")}
                  className={INPUT_CLASS}
                />
                {renderValidation("objectives.rpoMinutes")}
              </label>
              <label className={LABEL_CLASS}>
                Point de données réellement récupéré
                <input
                  value={dossier.objectives.dataRecoveryPointAt}
                  onChange={(event) =>
                    updateObjective("dataRecoveryPointAt", event.target.value)
                  }
                  maxLength={40}
                  placeholder="2026-07-27T08:30:00+02:00"
                  {...validationProps("objectives.dataRecoveryPointAt")}
                  className={INPUT_CLASS}
                />
                {renderValidation("objectives.dataRecoveryPointAt")}
              </label>
              <label className={LABEL_CLASS}>
                Instant de référence du RPO
                <input
                  value={dossier.objectives.rpoReferenceAt}
                  onChange={(event) =>
                    updateObjective("rpoReferenceAt", event.target.value)
                  }
                  maxLength={40}
                  placeholder="2026-07-27T08:42:00+02:00"
                  {...validationProps("objectives.rpoReferenceAt")}
                  className={INPUT_CLASS}
                />
                {renderValidation("objectives.rpoReferenceAt")}
              </label>
              <label className={LABEL_CLASS}>
                Source du RPO
                <input
                  value={dossier.objectives.rpoSource}
                  onChange={(event) =>
                    updateObjective("rpoSource", event.target.value)
                  }
                  maxLength={MAX_SHORT_TEXT}
                  {...validationProps("objectives.rpoSource")}
                  className={INPUT_CLASS}
                />
                {renderValidation("objectives.rpoSource")}
              </label>
              <label className={LABEL_CLASS}>
                Référence du SLA
                <input
                  value={dossier.objectives.slaReference}
                  onChange={(event) =>
                    updateObjective("slaReference", event.target.value)
                  }
                  maxLength={MAX_SHORT_TEXT}
                  {...validationProps("objectives.slaReference")}
                  className={INPUT_CLASS}
                />
                {renderValidation("objectives.slaReference")}
              </label>
              <label className={LABEL_CLASS}>
                Fenêtre de couverture
                <input
                  value={dossier.objectives.slaCoverageWindow}
                  onChange={(event) =>
                    updateObjective("slaCoverageWindow", event.target.value)
                  }
                  maxLength={MAX_SHORT_TEXT}
                  placeholder="Ex. lundi-vendredi 08:00-18:00 Europe/Paris"
                  {...validationProps("objectives.slaCoverageWindow")}
                  className={INPUT_CLASS}
                />
                {renderValidation("objectives.slaCoverageWindow")}
              </label>
              <label className={`${LABEL_CLASS} lg:col-span-2`}>
                Règle de départ du chronomètre SLA
                <input
                  value={dossier.objectives.slaClockRule}
                  onChange={(event) =>
                    updateObjective("slaClockRule", event.target.value)
                  }
                  maxLength={MAX_LONG_TEXT}
                  placeholder="Ex. première alerte qualifiée enregistrée par le support."
                  {...validationProps("objectives.slaClockRule")}
                  className={INPUT_CLASS}
                />
                {renderValidation("objectives.slaClockRule")}
              </label>
              <div className="rounded-lg border border-zinc-200 bg-white p-3 text-sm dark:border-zinc-800 dark:bg-zinc-950">
                <p className="m-0 font-bold text-zinc-950 dark:text-white">
                  RTO : {evaluation.rto.label}
                </p>
                <p className="mb-0 mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                  {evaluation.rto.reason}
                </p>
              </div>
              <div className="rounded-lg border border-zinc-200 bg-white p-3 text-sm dark:border-zinc-800 dark:bg-zinc-950">
                <p className="m-0 font-bold text-zinc-950 dark:text-white">
                  RPO : {evaluation.rpo.label} · SLA : {evaluation.sla.label}
                </p>
                <p className="mb-0 mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                  {evaluation.rpo.reason} {evaluation.sla.reason}
                </p>
              </div>
            </div>
          </details>

          <details className="rounded-xl border border-zinc-200 bg-zinc-50 open:bg-white dark:border-zinc-800 dark:bg-zinc-900/40 dark:open:bg-zinc-950">
            <summary className="cursor-pointer px-4 py-4 text-sm font-bold text-zinc-950 dark:text-white">
              <span className="flex flex-wrap items-center justify-between gap-2">
                <span>6. Coût direct prudent · jamais de zéro par défaut</span>
                {fieldsNeedingAttention([
                  ...COST_FIELDS.map((field) => `directCost.${field.key}`),
                  "directCost.coordinationDistinctFromProductivity",
                ]) > 0 ? (
                  <span className="rounded-full bg-rose-100 px-2 py-1 text-xs text-rose-800 dark:bg-rose-950 dark:text-rose-200">
                    À corriger · ouvrir
                  </span>
                ) : null}
              </span>
            </summary>
            <div className="border-t border-zinc-200 p-4 dark:border-zinc-800">
              <div className="grid gap-4 lg:grid-cols-2">
                {COST_FIELDS.map((field) => {
                  const limits = WEBSITE_INCIDENT_DIRECT_COST_LIMITS[field.key];
                  return (
                    <label key={field.key} className={LABEL_CLASS}>
                      {field.label}
                      <input
                        type="number"
                        min={limits.minimum}
                        max={limits.maximum}
                        step={field.step}
                        value={numberInput(dossier.directCost[field.key])}
                        onChange={(event) =>
                          updateCost(
                            field.key,
                            event.target.value === ""
                              ? undefined
                              : Number(event.target.value),
                          )
                        }
                        {...validationProps(`directCost.${field.key}`)}
                        className={INPUT_CLASS}
                      />
                      <span className={HELP_CLASS}>{field.help}</span>
                      {renderValidation(`directCost.${field.key}`)}
                    </label>
                  );
                })}
                <label className={LABEL_CLASS}>
                  Les heures de coordination sont-elles distinctes ?
                  <select
                    value={optionalBooleanValue(
                      dossier.directCost.coordinationDistinctFromProductivity,
                    )}
                    onChange={(event) =>
                      updateCost(
                        "coordinationDistinctFromProductivity",
                        optionalBoolean(event.target.value),
                      )
                    }
                    {...validationProps(
                      "directCost.coordinationDistinctFromProductivity",
                    )}
                    className={INPUT_CLASS}
                  >
                    <option value="unknown">ND — à vérifier</option>
                    <option value="yes">Oui, heures distinctes</option>
                    <option value="no">
                      Non ou doute : ne pas additionner
                    </option>
                  </select>
                  {renderValidation(
                    "directCost.coordinationDistinctFromProductivity",
                  )}
                </label>
              </div>
              <div className="mt-4 rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
                {evaluation.directCost.kind === "known" ? (
                  <>
                    <p className="m-0 text-lg font-bold text-zinc-950 dark:text-white">
                      Total direct prudent :{" "}
                      {evaluation.directCost.total.toLocaleString("fr-FR", {
                        maximumFractionDigits: 2,
                      })}{" "}
                      €
                    </p>
                    <p className="mb-0 mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                      Marge irrécupérable{" "}
                      {evaluation.directCost.lostMargin.toLocaleString("fr-FR")}{" "}
                      € · productivité{" "}
                      {evaluation.directCost.productivityCost.toLocaleString(
                        "fr-FR",
                      )}{" "}
                      € · coordination{" "}
                      {evaluation.directCost.coordinationCost.toLocaleString(
                        "fr-FR",
                      )}{" "}
                      € · autres coûts{" "}
                      {evaluation.directCost.confirmedDirectCosts.toLocaleString(
                        "fr-FR",
                      )}{" "}
                      €.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="m-0 text-lg font-bold text-amber-800 dark:text-amber-200">
                      Total direct prudent : ND
                    </p>
                    <p className="mb-0 mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                      {evaluation.directCost.issues.length} valeur(s)
                      manquante(s), invalide(s) ou possiblement comptée(s) deux
                      fois.
                    </p>
                  </>
                )}
              </div>
            </div>
          </details>

          <section aria-labelledby={`${instanceId}-gates-title`}>
            <h4
              id={`${instanceId}-gates-title`}
              className="m-0 text-lg font-bold text-zinc-950 dark:text-white"
            >
              7. Lever dix portes sans score moyen
            </h4>
            <p className="mb-5 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Une porte réussie exige un instant, une référence, un résultat et
              un responsable. Une fonction absente doit être explicitement
              déclarée non applicable. Un seul échec applicable interdit la
              clôture, même si l’accueil répond en 200.
            </p>

            <div className="mb-4 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() =>
                  setOpenGateIds(new Set(evaluation.blockingGateIds))
                }
                className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-xs font-semibold text-zinc-800 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-violet-400 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200"
              >
                Ouvrir les {evaluation.blockingGateIds.length} portes bloquantes
              </button>
              <button
                type="button"
                onClick={() => setOpenGateIds(new Set())}
                className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-xs font-semibold text-zinc-800 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-violet-400 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200"
              >
                Tout replier
              </button>
            </div>

            <div className="space-y-3">
              {WEBSITE_INCIDENT_RECOVERY_GATE_IDS.map((id, index) => {
                const definition = WEBSITE_INCIDENT_RECOVERY_GATES[id];
                const evidence = dossier.recoveryGates[id];
                const effective = evaluation.gates[id];
                const blocking = evaluation.blockingGateIds.includes(id);
                return (
                  <details
                    key={id}
                    open={openGateIds.has(id)}
                    onToggle={(event) =>
                      toggleGate(id, event.currentTarget.open)
                    }
                    className="rounded-xl border border-zinc-200 bg-zinc-50 open:bg-white dark:border-zinc-800 dark:bg-zinc-900/40 dark:open:bg-zinc-950"
                  >
                    <summary className="cursor-pointer px-4 py-3 text-sm font-bold text-zinc-950 dark:text-white">
                      <span className="flex flex-wrap items-center justify-between gap-2">
                        <span>
                          {index + 1}. {definition.label}
                        </span>
                        <span
                          className={`rounded-full px-2 py-1 text-xs ${
                            blocking
                              ? effective.effectiveStatus === "fail"
                                ? "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-200"
                                : "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200"
                              : "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200"
                          }`}
                        >
                          {blocking ? "Bloquante · " : ""}
                          {gateStatusLabel(effective.effectiveStatus)}
                        </span>
                      </span>
                    </summary>
                    <fieldset className="border-0 border-t border-zinc-200 p-4 dark:border-zinc-800">
                      <legend className="sr-only">
                        {index + 1}. {definition.label}
                      </legend>
                      <p className="mb-3 mt-0 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                        {definition.expected}
                      </p>
                      <div className="grid gap-3 lg:grid-cols-2">
                        <label className={LABEL_CLASS}>
                          Statut déclaré
                          <select
                            value={evidence.status}
                            onChange={(event) =>
                              updateGate(id, {
                                status: event.target
                                  .value as WebsiteIncidentGateStatus,
                              })
                            }
                            {...validationProps(`recoveryGates.${id}.status`)}
                            className={INPUT_CLASS}
                          >
                            {GATE_STATUS_OPTIONS.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                          {renderValidation(`recoveryGates.${id}.status`)}
                        </label>
                        <label className={LABEL_CLASS}>
                          Observé à
                          <input
                            value={evidence.observedAt}
                            onChange={(event) =>
                              updateGate(id, { observedAt: event.target.value })
                            }
                            maxLength={40}
                            placeholder="2026-07-27T10:32:00+02:00"
                            {...validationProps(
                              `recoveryGates.${id}.observedAt`,
                            )}
                            className={INPUT_CLASS}
                          />
                          {renderValidation(`recoveryGates.${id}.observedAt`)}
                        </label>
                        <label className={`${LABEL_CLASS} lg:col-span-2`}>
                          Nature de la preuve
                          <select
                            value={evidence.proofKind}
                            onChange={(event) =>
                              updateGate(id, {
                                proofKind: event.target
                                  .value as WebsiteIncidentGateProofKind,
                              })
                            }
                            {...validationProps(
                              `recoveryGates.${id}.proofKind`,
                            )}
                            className={INPUT_CLASS}
                          >
                            {GATE_PROOF_OPTIONS.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                          <span className={HELP_CLASS}>
                            Pour un succès, cette porte attend :{" "}
                            <code>{definition.acceptedPassProof}</code>. Pour un
                            N/A : <code>applicability-justification</code>.
                          </span>
                          {renderValidation(`recoveryGates.${id}.proofKind`)}
                        </label>
                        <label className={LABEL_CLASS}>
                          Référence de preuve
                          <input
                            value={evidence.evidenceReference}
                            onChange={(event) =>
                              updateGate(id, {
                                evidenceReference: event.target.value,
                              })
                            }
                            maxLength={MAX_SHORT_TEXT}
                            placeholder="PV, ticket ou capture conservée ailleurs"
                            {...validationProps(
                              `recoveryGates.${id}.evidenceReference`,
                            )}
                            className={INPUT_CLASS}
                          />
                          {renderValidation(
                            `recoveryGates.${id}.evidenceReference`,
                          )}
                        </label>
                        <label className={LABEL_CLASS}>
                          Responsable
                          <input
                            value={evidence.owner}
                            onChange={(event) =>
                              updateGate(id, { owner: event.target.value })
                            }
                            maxLength={MAX_SHORT_TEXT}
                            {...validationProps(`recoveryGates.${id}.owner`)}
                            className={INPUT_CLASS}
                          />
                          {renderValidation(`recoveryGates.${id}.owner`)}
                        </label>
                        <label className={`${LABEL_CLASS} lg:col-span-2`}>
                          Résultat ou justification N/A
                          <textarea
                            value={evidence.result}
                            onChange={(event) =>
                              updateGate(id, { result: event.target.value })
                            }
                            maxLength={MAX_LONG_TEXT}
                            rows={2}
                            {...validationProps(`recoveryGates.${id}.result`)}
                            className={INPUT_CLASS}
                          />
                          {renderValidation(`recoveryGates.${id}.result`)}
                        </label>
                      </div>
                      <p
                        className={`mb-0 mt-3 text-xs font-bold ${
                          effective.effectiveStatus === "pass" ||
                          effective.effectiveStatus === "NA"
                            ? "text-emerald-700 dark:text-emerald-300"
                            : effective.effectiveStatus === "fail"
                              ? "text-rose-700 dark:text-rose-300"
                              : "text-amber-700 dark:text-amber-300"
                        }`}
                      >
                        Statut effectif :{" "}
                        {effective.effectiveStatus === "pass"
                          ? "réussi"
                          : effective.effectiveStatus === "NA"
                            ? "non applicable"
                            : effective.effectiveStatus === "fail"
                              ? "échec"
                              : "non vérifié"}
                        {effective.reasons.length > 0
                          ? ` — ${effective.reasons.join(" ")}`
                          : ""}
                      </p>
                    </fieldset>
                  </details>
                );
              })}
            </div>
          </section>

          <section
            className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/40"
            aria-labelledby={`${instanceId}-verdict-title`}
          >
            <h4
              id={`${instanceId}-verdict-title`}
              className="m-0 text-lg font-bold text-zinc-950 dark:text-white"
            >
              8. Verdict reproductible
            </h4>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-950">
                <p className="m-0 text-xs text-zinc-500 dark:text-zinc-400">
                  Portes encore bloquantes
                </p>
                <p className="mb-0 mt-1 text-2xl font-bold text-zinc-950 dark:text-white">
                  {evaluation.blockingGateIds.length}/10
                </p>
              </div>
              <div className="rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-950">
                <p className="m-0 text-xs text-zinc-500 dark:text-zinc-400">
                  Erreurs de cohérence
                </p>
                <p className="mb-0 mt-1 text-2xl font-bold text-zinc-950 dark:text-white">
                  {
                    evaluation.issues.filter(
                      (issue) => issue.severity === "error",
                    ).length
                  }
                </p>
              </div>
              <div className="rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-950">
                <p className="m-0 text-xs text-zinc-500 dark:text-zinc-400">
                  Avertissements
                </p>
                <p className="mb-0 mt-1 text-2xl font-bold text-zinc-950 dark:text-white">
                  {
                    evaluation.issues.filter(
                      (issue) => issue.severity === "warning",
                    ).length
                  }
                </p>
              </div>
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              <div>
                <p className="m-0 text-sm font-bold text-zinc-950 dark:text-white">
                  Prochaines actions
                </p>
                <ul className="mb-0 mt-2 space-y-1 pl-5 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {evaluation.nextActions.map((action) => (
                    <li key={action}>{action}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="m-0 text-sm font-bold text-zinc-950 dark:text-white">
                  Blocages de clôture
                </p>
                {evaluation.closure.reasons.length > 0 ? (
                  <ul className="mb-0 mt-2 space-y-1 pl-5 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {evaluation.closure.reasons.map((reason) => (
                      <li key={reason}>{reason}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mb-0 mt-2 text-xs text-emerald-700 dark:text-emerald-300">
                    Aucun blocage détecté par les règles du dossier. Une
                    personne autorisée reste responsable de la décision.
                  </p>
                )}
              </div>
            </div>
          </section>

          <div className="border-t border-zinc-200 pt-5 dark:border-zinc-800">
            <p className="m-0 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
              Les exports exigent la relecture humaine confirmée dans{" "}
              <a
                href={`#${instanceId}-incident-actions`}
                className="font-semibold text-violet-700 underline underline-offset-2 dark:text-violet-300"
              >
                la zone de prévisualisation au début du dossier
              </a>
              .
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={copyReport}
                disabled={!reviewConfirmed}
                className="inline-flex items-center gap-2 rounded-lg bg-zinc-950 px-4 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-zinc-950"
              >
                <ClipboardCheck className="h-4 w-4" aria-hidden="true" />
                Copier le dossier
              </button>
              <button
                type="button"
                onClick={downloadReport}
                disabled={!reviewConfirmed}
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-800 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-400 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Télécharger le TXT
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                disabled={!reviewConfirmed}
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-800 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-400 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200"
              >
                <Printer className="h-4 w-4" aria-hidden="true" />
                Imprimer le dossier
              </button>
              <button
                type="button"
                onClick={(event) => askReset(event.currentTarget)}
                className="inline-flex items-center gap-2 rounded-lg border border-rose-300 bg-white px-4 py-2.5 text-sm font-semibold text-rose-800 hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-rose-400 dark:border-rose-800 dark:bg-zinc-950 dark:text-rose-200"
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                Effacer le dossier
              </button>
            </div>
            <p
              className="mb-0 mt-3 min-h-5 text-xs text-zinc-600 dark:text-zinc-400"
              aria-live="polite"
            >
              {copyStatus === "copied"
                ? "Le dossier a été copié localement après votre confirmation de relecture."
                : copyStatus === "copy-error"
                  ? "La copie a échoué."
                  : downloadStatus === "downloaded"
                    ? "Le fichier texte a été créé localement après votre confirmation de relecture."
                    : downloadStatus === "download-error"
                      ? "Le fichier n’a pas pu être créé."
                      : reviewConfirmed
                        ? "Relecture confirmée ; les exports sont disponibles."
                        : "Exports désactivés tant que la relecture n’est pas confirmée."}
            </p>
          </div>
        </div>
      </section>
      {resetRequested && typeof document !== "undefined"
        ? createPortal(
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/65 p-4"
              data-website-incident-reset-portal="true"
            >
              <div
                ref={resetDialogRef}
                role="alertdialog"
                aria-modal="true"
                aria-labelledby={`${instanceId}-reset-title`}
                aria-describedby={`${instanceId}-reset-description`}
                onKeyDown={handleResetDialogKeyDown}
                className="w-full max-w-lg rounded-xl border border-rose-300 bg-white p-5 text-rose-950 shadow-2xl dark:border-rose-800 dark:bg-zinc-950 dark:text-rose-100"
              >
                <p
                  id={`${instanceId}-reset-title`}
                  className="m-0 text-lg font-bold"
                >
                  Effacer toutes les informations de ce dossier ?
                </p>
                <p
                  id={`${instanceId}-reset-description`}
                  className="mb-0 mt-2 text-sm leading-relaxed"
                >
                  Rien n’est sauvegardé automatiquement. Si vous devez conserver
                  ce dossier, annulez, relisez la prévisualisation puis exportez
                  le rapport avant de recommencer.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    ref={resetConfirmRef}
                    type="button"
                    onClick={confirmReset}
                    className="rounded-lg bg-rose-700 px-4 py-2.5 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-rose-400"
                  >
                    Oui, effacer
                  </button>
                  <button
                    type="button"
                    onClick={cancelReset}
                    className="rounded-lg border border-rose-300 bg-white px-4 py-2.5 text-sm font-semibold text-rose-900 focus:outline-none focus:ring-2 focus:ring-rose-400 dark:bg-zinc-950 dark:text-rose-100"
                  >
                    Annuler
                  </button>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
