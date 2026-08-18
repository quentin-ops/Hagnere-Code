"use client";

import { useState } from "react";
import {
  CASE_IMPORT_CHECKS,
  CASE_IMPORT_CHECK_STATUSES,
  CASE_MARGIN_STATUSES,
  CONVERSION_STAGES,
  formatConversionCaseSheet,
  formatConversionReconciliationSummary,
  reconcileConversionChain,
  validateConversionCaseSheet,
  validateConversionContext,
  type ConversionCaseSheet,
  type ConversionCaseImportCheckId,
  type ConversionCaseImportCheckStatus,
  type ConversionCaseMarginStatus,
  type ConversionReconciliationContext,
  type ConversionReconciliationVolumes,
  type ConversionStageId,
} from "@/lib/conversion-reconciliation";

const EXAMPLE_VOLUMES: ConversionReconciliationVolumes = {
  eventsSent: 72,
  requestsReceived: 68,
  uniqueRequests: 60,
  qualifiedRequests: 18,
  quotes: 9,
  sales: 4,
};

const EMPTY_CONTEXT: ConversionReconciliationContext = {
  label: "",
  startDate: "",
  endDate: "",
  observedAt: "",
  followUpComplete: null,
};

function createEmptyCaseSheet(): ConversionCaseSheet {
  return {
    caseId: "",
    responsibleRole: "",
    saleDefinition: "",
    advertisingId: "",
    importReference: "",
    importChecks: Object.fromEntries(
      CASE_IMPORT_CHECKS.map((check) => [
        check.id,
        { status: "unknown", date: "", evidence: "" },
      ]),
    ) as ConversionCaseSheet["importChecks"],
    margin: {
      status: "unknown",
      date: "",
      formula: "",
      value: null,
      evidence: "",
    },
    nextAction: "",
    stages: Object.fromEntries(
      CONVERSION_STAGES.map((stage) => [stage.id, { date: "", evidence: "" }]),
    ) as ConversionCaseSheet["stages"],
  };
}

const stageHelp: Record<ConversionStageId, string> = {
  eventsSent:
    "Les événements transmis par votre outil de mesure, après retrait de tous les essais internes.",
  requestsReceived:
    "Les formulaires, appels ou rendez-vous réellement arrivés, toujours sans les tests de votre équipe.",
  uniqueRequests:
    "Les mêmes dossiers après retrait des doubles envois et des demandes de test.",
  qualifiedRequests:
    "Les dossiers qui correspondent à vos critères commerciaux écrits.",
  quotes: "Les dossiers auxquels un devis a réellement été envoyé.",
  sales:
    "Les dossiers qui répondent à votre propre définition de la vente, indiquée dans la fiche ci-dessous.",
};

const dateFields = [
  { key: "startDate", label: "Date de début" },
  { key: "endDate", label: "Date de fin" },
  { key: "observedAt", label: "Date de l’observation" },
] as const;

const integerFormatter = new Intl.NumberFormat("fr-FR", {
  maximumFractionDigits: 0,
});

const rateFormatter = new Intl.NumberFormat("fr-FR", {
  maximumFractionDigits: 1,
});

function displayVolume(value: number | null) {
  return value === null ? "Inconnu" : integerFormatter.format(value);
}

function displayRate(
  status:
    | "first-stage"
    | "available"
    | "unknown-volume"
    | "zero-base"
    | "invalid-chain",
  value: number | null,
) {
  if (status === "zero-base") return "Non calculable : étape précédente à zéro";
  if (status !== "available" || value === null) return "Inconnu";
  return `${rateFormatter.format(value)} %`;
}

function downloadLocalText(filename: string, content: string) {
  const objectUrl = URL.createObjectURL(
    new Blob([content], { type: "text/plain;charset=utf-8" }),
  );
  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = filename;
  link.rel = "noopener";
  document.body.append(link);

  try {
    link.click();
  } finally {
    link.remove();
    URL.revokeObjectURL(objectUrl);
  }
}

function safeFilenameSegment(value: string, fallback: string) {
  return (
    value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 48) || fallback
  );
}

function latestCaseSheetDate(sheet: ConversionCaseSheet) {
  const dates = [
    ...CONVERSION_STAGES.map((stage) => sheet.stages[stage.id].date),
    ...CASE_IMPORT_CHECKS.map((check) => sheet.importChecks[check.id].date),
    sheet.margin.date,
  ].filter((value) => /^\d{4}-\d{2}-\d{2}$/.test(value));

  return dates.sort().at(-1) ?? "sans-date";
}

export function ConversionReconciliationTool() {
  const [context, setContext] =
    useState<ConversionReconciliationContext>(EMPTY_CONTEXT);
  const [volumes, setVolumes] =
    useState<ConversionReconciliationVolumes>(EXAMPLE_VOLUMES);
  const [summaryFeedback, setSummaryFeedback] = useState("");
  const [caseSheet, setCaseSheet] = useState<ConversionCaseSheet>(() =>
    createEmptyCaseSheet(),
  );
  const [caseFeedback, setCaseFeedback] = useState("");
  const [caseCopyAttempted, setCaseCopyAttempted] = useState(false);

  const result = reconcileConversionChain(volumes);
  const contextValidation = validateConversionContext(context);
  const caseValidation = validateConversionCaseSheet(caseSheet);
  const summaryUsable = contextValidation.valid && result.valid;

  function updateContext(
    key: "label" | "startDate" | "endDate" | "observedAt",
    value: string,
  ) {
    setContext((current) => ({ ...current, [key]: value }));
    setSummaryFeedback("");
  }

  function updateFollowUpStatus(value: boolean | null) {
    setContext((current) => ({ ...current, followUpComplete: value }));
    setSummaryFeedback("");
  }

  function updateVolume(key: ConversionStageId, raw: string) {
    const parsed = raw.trim() === "" ? null : Number(raw);
    setVolumes((current) => ({ ...current, [key]: parsed }));
    setSummaryFeedback("");
  }

  function updateCaseField<
    K extends Exclude<keyof ConversionCaseSheet, "stages">,
  >(key: K, value: ConversionCaseSheet[K]) {
    setCaseSheet((current) => ({ ...current, [key]: value }));
    setCaseFeedback("");
  }

  function updateCaseStage(
    stageId: ConversionStageId,
    key: "date" | "evidence",
    value: string,
  ) {
    setCaseSheet((current) => ({
      ...current,
      stages: {
        ...current.stages,
        [stageId]: { ...current.stages[stageId], [key]: value },
      },
    }));
    setCaseFeedback("");
  }

  function updateImportCheck(
    checkId: ConversionCaseImportCheckId,
    status: ConversionCaseImportCheckStatus,
  ) {
    setCaseSheet((current) => ({
      ...current,
      importChecks: {
        ...current.importChecks,
        [checkId]: ["unknown", "not-applicable"].includes(status)
          ? { status, date: "", evidence: "" }
          : { ...current.importChecks[checkId], status },
      },
    }));
    setCaseFeedback("");
  }

  function updateImportCheckField(
    checkId: ConversionCaseImportCheckId,
    key: "date" | "evidence",
    value: string,
  ) {
    setCaseSheet((current) => ({
      ...current,
      importChecks: {
        ...current.importChecks,
        [checkId]: { ...current.importChecks[checkId], [key]: value },
      },
    }));
    setCaseFeedback("");
  }

  function updateMarginStatus(status: ConversionCaseMarginStatus) {
    setCaseSheet((current) => ({
      ...current,
      margin:
        status === "unknown"
          ? { status, date: "", formula: "", value: null, evidence: "" }
          : { ...current.margin, status },
    }));
    setCaseFeedback("");
  }

  function updateMarginField(
    key: "date" | "formula" | "evidence",
    value: string,
  ) {
    setCaseSheet((current) => ({
      ...current,
      margin: { ...current.margin, [key]: value },
    }));
    setCaseFeedback("");
  }

  function updateMarginValue(raw: string) {
    setCaseSheet((current) => ({
      ...current,
      margin: {
        ...current.margin,
        value: raw.trim() === "" ? null : Number(raw),
      },
    }));
    setCaseFeedback("");
  }

  async function copySummary() {
    if (!summaryUsable) {
      setSummaryFeedback(
        "Complétez les dates et corrigez les nombres signalés avant de copier la synthèse.",
      );
      return;
    }

    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard API unavailable");
      }
      await navigator.clipboard.writeText(
        formatConversionReconciliationSummary(context, volumes, result),
      );
      setSummaryFeedback(
        "Synthèse copiée. Vous pouvez maintenant la partager.",
      );
    } catch {
      setSummaryFeedback(
        "La copie automatique a échoué. Vos saisies restent affichées pour une copie manuelle.",
      );
    }
  }

  function downloadSummary() {
    if (!summaryUsable) {
      setSummaryFeedback(
        "Complétez les dates et corrigez les nombres signalés avant de télécharger la synthèse.",
      );
      return;
    }

    try {
      downloadLocalText(
        `registre-conversions-${safeFilenameSegment(context.label, "sans-libelle")}-${context.startDate}-${context.endDate}-v1.txt`,
        formatConversionReconciliationSummary(context, volumes, result),
      );
      setSummaryFeedback(
        "Synthèse téléchargée en fichier texte. Elle reste sur votre appareil.",
      );
    } catch {
      setSummaryFeedback(
        "Le téléchargement local a échoué. Vous pouvez encore copier la synthèse affichée.",
      );
    }
  }

  async function copyCaseSheet() {
    setCaseCopyAttempted(true);
    if (!caseValidation.valid) {
      setCaseFeedback(
        caseValidation.issues[0]?.message ?? "Complétez la fiche.",
      );
      return;
    }

    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard API unavailable");
      }
      await navigator.clipboard.writeText(formatConversionCaseSheet(caseSheet));
      setCaseFeedback("Fiche du dossier copiée.");
    } catch {
      setCaseFeedback(
        "La copie automatique de la fiche a échoué. Les informations restent affichées.",
      );
    }
  }

  function downloadCaseSheet() {
    setCaseCopyAttempted(true);
    if (!caseValidation.valid) {
      setCaseFeedback(
        caseValidation.issues[0]?.message ?? "Complétez la fiche.",
      );
      return;
    }

    try {
      downloadLocalText(
        `fiche-preuve-conversion-${safeFilenameSegment(caseSheet.caseId, "sans-reference")}-${latestCaseSheetDate(caseSheet)}-v1.txt`,
        formatConversionCaseSheet(caseSheet),
      );
      setCaseFeedback(
        "Fiche téléchargée en fichier texte. Elle reste sur votre appareil.",
      );
    } catch {
      setCaseFeedback(
        "Le téléchargement local a échoué. Vous pouvez encore copier la fiche affichée.",
      );
    }
  }

  function resetTool() {
    setContext({ ...EMPTY_CONTEXT });
    setVolumes({ ...EXAMPLE_VOLUMES });
    setSummaryFeedback(
      "L’exemple fictif a été restauré ; les dates sont à renseigner.",
    );
    setCaseSheet(createEmptyCaseSheet());
    setCaseFeedback("");
    setCaseCopyAttempted(false);
  }

  const contextInvalid = (field: ConversionContextIssueField) =>
    contextValidation.issues.some((issue) => issue.fields.includes(field));

  return (
    <section
      id="conversion-reconciliation-tool"
      className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
      aria-labelledby="conversion-reconciliation-title"
    >
      <div className="border-b border-zinc-800 bg-zinc-950 px-4 py-5 text-white sm:px-6">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-sky-300">
          Outil local · aucune donnée envoyée
        </p>
        <h3
          id="conversion-reconciliation-title"
          className="m-0 text-xl font-bold sm:text-2xl"
        >
          Retrouvez où les nombres ne se rejoignent plus
        </h3>
        <p className="mb-0 mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">
          Les six volumes préremplis forment un exemple fictif. Remplacez-les
          par vos nombres, sans inscrire de nom, d’e-mail ni de téléphone. Une
          case vide signifie « inconnu » ; elle ne sera jamais transformée en
          zéro. Vous pourrez copier ou télécharger un fichier texte pour
          archiver chaque contrôle ; aucune saisie n’est envoyée au site.
        </p>
      </div>

      <div className="p-4 sm:p-6">
        <fieldset className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800 sm:p-5">
          <legend className="px-1 text-sm font-bold text-zinc-950 dark:text-white sm:text-base">
            1 · Les dates et dossiers comparés
          </legend>
          <div className="mt-2 grid gap-4 sm:grid-cols-2">
            <label className="block sm:col-span-2">
              <span className="mb-1.5 block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Libellé interne{" "}
                <span className="font-normal">(facultatif)</span>
              </span>
              <input
                type="text"
                value={context.label}
                onChange={(event) => updateContext("label", event.target.value)}
                placeholder="Ex. : Campagne devis isolation"
                autoComplete="off"
                className="min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:ring-sky-950"
              />
              <span className="mt-1 block text-xs text-zinc-500 dark:text-zinc-400">
                Utilisez le nom d’une campagne ou d’un contrôle, jamais celui
                d’un prospect.
              </span>
            </label>

            {dateFields.map((field) => (
              <label key={field.key} className="block">
                <span className="mb-1.5 block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {field.label}
                </span>
                <input
                  type="date"
                  required
                  value={context[field.key]}
                  aria-invalid={contextInvalid(field.key)}
                  onChange={(event) =>
                    updateContext(field.key, event.target.value)
                  }
                  className="min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:ring-sky-950"
                />
              </label>
            ))}
          </div>

          <fieldset className="mt-5 border-0 p-0">
            <legend className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Tous les dossiers ont-ils eu le temps prévu pour avancer ?
            </legend>
            <p
              id="conversion-follow-up-help"
              className="mb-3 mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400"
            >
              Répondez oui uniquement si même les derniers dossiers de la
              période ont eu le délai commercial habituel.
            </p>
            <div className="grid gap-2 sm:grid-cols-3">
              {[
                { value: null, label: "Je ne sais pas encore" },
                { value: true, label: "Oui, le délai est passé pour tous" },
                { value: false, label: "Non, certains peuvent encore avancer" },
              ].map((option) => (
                <label
                  key={String(option.value)}
                  className="flex min-h-11 cursor-pointer items-center gap-3 rounded-lg border border-zinc-300 px-3 py-2 text-sm text-zinc-800 dark:border-zinc-700 dark:text-zinc-200"
                >
                  <input
                    type="radio"
                    name="conversion-follow-up-status"
                    checked={context.followUpComplete === option.value}
                    aria-describedby="conversion-follow-up-help"
                    onChange={() => updateFollowUpStatus(option.value)}
                    className="h-4 w-4 accent-sky-600"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </fieldset>
        </fieldset>

        <fieldset className="mt-5 rounded-xl border border-zinc-200 p-4 dark:border-zinc-800 sm:p-5">
          <legend className="px-1 text-sm font-bold text-zinc-950 dark:text-white sm:text-base">
            2 · Les six volumes à comparer
          </legend>
          <aside className="mb-4 mt-2 rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm leading-relaxed text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100">
            <strong>Retirez vos tests des six nombres.</strong> Un formulaire
            envoyé par votre équipe ne doit apparaître ni parmi les événements,
            ni parmi les demandes, devis ou ventes.
          </aside>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CONVERSION_STAGES.map((stage, index) => {
              const invalid = result.issues.some((issue) =>
                issue.stageIds.includes(stage.id),
              );
              return (
                <label
                  key={stage.id}
                  className="block rounded-xl border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-800 dark:bg-zinc-900/50"
                >
                  <span className="block text-xs font-bold uppercase tracking-wide text-sky-700 dark:text-sky-300">
                    Étape {index + 1}
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-zinc-950 dark:text-white">
                    {stage.label}
                  </span>
                  <span
                    id={`conversion-${stage.id}-help`}
                    className="mt-1 block min-h-12 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400"
                  >
                    {stageHelp[stage.id]}
                  </span>
                  <input
                    type="number"
                    inputMode="numeric"
                    min={0}
                    step={1}
                    value={volumes[stage.id] ?? ""}
                    aria-describedby={`conversion-${stage.id}-help`}
                    aria-invalid={invalid}
                    onChange={(event) =>
                      updateVolume(stage.id, event.target.value)
                    }
                    className="mt-2 min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-base font-semibold text-zinc-950 outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:focus:ring-sky-950"
                  />
                </label>
              );
            })}
          </div>
        </fieldset>
      </div>

      <div className="border-t border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-6">
        <div
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className={`rounded-xl border p-4 ${
            !contextValidation.valid
              ? "border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100"
              : !result.valid
                ? "border-red-300 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950/30 dark:text-red-100"
                : context.followUpComplete
                  ? "border-emerald-300 bg-emerald-50 text-emerald-950 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-100"
                  : "border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100"
          }`}
        >
          <p className="mb-1 font-semibold">
            {!contextValidation.valid
              ? "Avant de lire les taux"
              : !result.valid
                ? "Un nombre doit être corrigé"
                : context.followUpComplete
                  ? "Tous les dossiers ont eu le délai prévu"
                  : "Certains dossiers peuvent encore avancer"}
          </p>
          {!contextValidation.valid ? (
            <ul className="mb-0 mt-2 space-y-1 pl-5 text-sm leading-relaxed">
              {contextValidation.issues.map((issue) => (
                <li key={`${issue.code}-${issue.fields.join("-")}`}>
                  {issue.message}
                </li>
              ))}
            </ul>
          ) : !result.valid ? (
            <ul className="mb-0 mt-2 space-y-1 pl-5 text-sm leading-relaxed">
              {result.issues.map((issue) => (
                <li key={`${issue.code}-${issue.stageIds.join("-")}`}>
                  {issue.message}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mb-0 text-sm leading-relaxed">
              {context.followUpComplete
                ? "Les taux décrivent les nombres saisis pour ces dates et ces dossiers."
                : "Les derniers taux pourront encore évoluer. Conservez cette date d’observation pour comparer le prochain contrôle."}
            </p>
          )}
        </div>

        {summaryUsable && (
          <div className="mt-4">
            {result.firstUnprovedTransition && (
              <div className="mb-4 rounded-xl border border-violet-300 bg-violet-50 p-4 text-violet-950 dark:border-violet-800 dark:bg-violet-950/30 dark:text-violet-100">
                <p className="mb-1 text-sm font-semibold">
                  Premier passage impossible à vérifier
                </p>
                <p className="mb-1 font-bold">
                  {result.firstUnprovedTransition.label}
                </p>
                <p className="mb-0 text-sm leading-relaxed opacity-90">
                  {result.firstUnprovedTransition.message}
                </p>
              </div>
            )}

            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-zinc-500">
              Volumes, écarts et taux calculables
            </p>
            <ol className="grid list-none gap-3 p-0 sm:grid-cols-2 lg:grid-cols-3">
              {result.steps.map((step, index) => (
                <li
                  key={step.id}
                  className="m-0 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
                >
                  <p className="mb-1 text-xs font-semibold text-zinc-500">
                    {index + 1}. {step.label}
                  </p>
                  <p className="mb-0 text-2xl font-bold text-zinc-950 dark:text-white">
                    {displayVolume(step.volume)}
                  </p>
                  {index === 0 ? (
                    <p className="mb-0 mt-2 text-xs text-zinc-500">
                      Premier nombre saisi
                    </p>
                  ) : (
                    <dl className="mb-0 mt-3 grid grid-cols-2 gap-3 border-t border-zinc-100 pt-3 dark:border-zinc-800">
                      <div>
                        <dt className="text-[11px] text-zinc-500">Écart</dt>
                        <dd className="mt-0.5 text-sm font-semibold text-zinc-900 dark:text-white">
                          {step.gapFromPrevious ?? "Inconnu"}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[11px] text-zinc-500">
                          Taux de passage
                        </dt>
                        <dd className="mt-0.5 text-sm font-semibold text-zinc-900 dark:text-white">
                          {displayRate(step.rateStatus, step.passageRate)}
                        </dd>
                      </div>
                    </dl>
                  )}
                </li>
              ))}
            </ol>

            <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-4 text-sky-950 dark:border-sky-900 dark:bg-sky-950/30 dark:text-sky-100">
              <p className="mb-1 font-semibold">
                Un écart ne prouve pas une panne
              </p>
              <p className="mb-0 text-sm leading-relaxed opacity-90">
                Il indique où vérifier les définitions, les doublons, les
                exclusions, les délais et le traitement commercial. Comparez
                toujours les mêmes dates et les mêmes dossiers.
              </p>
            </div>
          </div>
        )}

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button
            type="button"
            onClick={copySummary}
            disabled={!summaryUsable}
            className="min-h-11 rounded-lg bg-sky-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-sky-600 dark:hover:bg-sky-500"
          >
            Copier la synthèse des volumes
          </button>
          <button
            type="button"
            onClick={downloadSummary}
            disabled={!summaryUsable}
            className="min-h-11 rounded-lg border border-sky-300 bg-white px-4 py-2.5 text-sm font-semibold text-sky-800 transition hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-sky-800 dark:bg-zinc-950 dark:text-sky-200 dark:hover:bg-sky-950/30"
          >
            Télécharger la synthèse (.txt)
          </button>
          <button
            type="button"
            onClick={resetTool}
            className="min-h-11 rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900"
          >
            Réinitialiser l’outil
          </button>
        </div>
        <p
          aria-live="polite"
          className="mb-0 mt-3 min-h-5 text-sm text-zinc-600 dark:text-zinc-300"
        >
          {summaryFeedback}
        </p>
      </div>

      <div className="border-t border-zinc-200 p-4 dark:border-zinc-800 sm:p-6">
        <div className="mb-5 max-w-3xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-sky-700 dark:text-sky-300">
            Fiche locale par dossier
          </p>
          <h4 className="m-0 text-lg font-bold text-zinc-950 dark:text-white sm:text-xl">
            Conservez les dates et les preuves d’un seul dossier
          </h4>
          <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            Utilisez une référence interne, jamais le nom ou les coordonnées du
            prospect. La fiche copiée distingue la référence vers l’identifiant
            publicitaire de celle créée pour l’import. Le téléchargement local
            permet d’archiver une fiche datée sans la transmettre au site.
          </p>
        </div>

        <fieldset className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800 sm:p-5">
          <legend className="px-1 text-sm font-bold text-zinc-950 dark:text-white sm:text-base">
            3 · Référence et responsable
          </legend>
          <div className="mt-2 grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Référence interne du dossier (case_id)
              </span>
              <input
                type="text"
                value={caseSheet.caseId}
                autoComplete="off"
                aria-invalid={
                  caseCopyAttempted &&
                  caseValidation.issues.some(
                    (issue) => issue.field === "caseId",
                  )
                }
                onChange={(event) =>
                  updateCaseField("caseId", event.target.value)
                }
                placeholder="Ex. : DOSSIER-2026-001"
                className="min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:ring-sky-950"
              />
              <span className="mt-1 block text-xs text-zinc-500 dark:text-zinc-400">
                Sans nom, e-mail, téléphone ni numéro de commande public.
              </span>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Fonction responsable
              </span>
              <input
                type="text"
                value={caseSheet.responsibleRole}
                autoComplete="off"
                aria-invalid={
                  caseCopyAttempted &&
                  caseValidation.issues.some(
                    (issue) => issue.field === "responsibleRole",
                  )
                }
                onChange={(event) =>
                  updateCaseField("responsibleRole", event.target.value)
                }
                placeholder="Ex. : Direction commerciale"
                className="min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:ring-sky-950"
              />
              <span className="mt-1 block text-xs text-zinc-500 dark:text-zinc-400">
                Indiquez une fonction, pas le nom d’une personne.
              </span>
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1.5 block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Ce que votre entreprise compte comme une vente
              </span>
              <textarea
                rows={2}
                value={caseSheet.saleDefinition}
                aria-invalid={
                  caseCopyAttempted &&
                  caseValidation.issues.some(
                    (issue) => issue.field === "saleDefinition",
                  )
                }
                onChange={(event) =>
                  updateCaseField("saleDefinition", event.target.value)
                }
                placeholder="Ex. : acompte encaissé, prestation réalisée ou contrat signé"
                className="min-h-11 w-full resize-y rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:ring-sky-950"
              />
              <span className="mt-1 block text-xs text-zinc-500 dark:text-zinc-400">
                Choisissez une règle vérifiable : signature, paiement,
                réalisation ou toute autre définition adaptée à votre activité.
              </span>
            </label>
          </div>
        </fieldset>

        <fieldset className="mt-5 rounded-xl border border-zinc-200 p-4 dark:border-zinc-800 sm:p-5">
          <legend className="px-1 text-sm font-bold text-zinc-950 dark:text-white sm:text-base">
            4 · Dates et preuves des six étapes
          </legend>
          <p className="mb-4 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            Une étape peut rester inconnue. Recopiez seulement une référence de
            journal, de dossier ou de devis ; aucun contenu permettant
            d’identifier le prospect.
          </p>
          <div className="grid gap-3 lg:grid-cols-2">
            {CONVERSION_STAGES.map((stage, index) => {
              const invalidDate =
                caseCopyAttempted &&
                caseValidation.issues.some(
                  (issue) =>
                    issue.field === "stage" && issue.stageId === stage.id,
                );
              return (
                <div
                  key={stage.id}
                  className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-800 dark:bg-zinc-900/50"
                >
                  <p className="mb-3 text-sm font-semibold text-zinc-950 dark:text-white">
                    {index + 1}. {stage.label}
                  </p>
                  <div className="grid gap-3 sm:grid-cols-[0.8fr_1.2fr]">
                    <label className="block">
                      <span className="mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                        Date connue
                      </span>
                      <input
                        type="date"
                        value={caseSheet.stages[stage.id].date}
                        aria-invalid={invalidDate}
                        onChange={(event) =>
                          updateCaseStage(stage.id, "date", event.target.value)
                        }
                        className="min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:focus:ring-sky-950"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                        Preuve interne
                      </span>
                      <textarea
                        rows={2}
                        value={caseSheet.stages[stage.id].evidence}
                        onChange={(event) =>
                          updateCaseStage(
                            stage.id,
                            "evidence",
                            event.target.value,
                          )
                        }
                        placeholder="Ex. : journal EVT-001"
                        className="min-h-11 w-full resize-y rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:focus:ring-sky-950"
                      />
                    </label>
                  </div>
                </div>
              );
            })}
          </div>
        </fieldset>

        <fieldset className="mt-5 rounded-xl border border-zinc-200 p-4 dark:border-zinc-800 sm:p-5">
          <legend className="px-1 text-sm font-bold text-zinc-950 dark:text-white sm:text-base">
            5 · Identifiants, contrôles de l’import, marge et prochaine action
          </legend>
          <div className="mt-2 grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Référence interne vers l’identifiant publicitaire
              </span>
              <input
                type="text"
                value={caseSheet.advertisingId}
                autoComplete="off"
                onChange={(event) =>
                  updateCaseField("advertisingId", event.target.value)
                }
                placeholder="Ex. : REF-IDPUB-001"
                className="min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:ring-sky-950"
              />
              <span className="mt-1 block text-xs text-zinc-500 dark:text-zinc-400">
                Conservez l’identifiant réel dans votre espace protégé ; ne le
                collez pas dans cette fiche.
              </span>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Référence propre à l’import
              </span>
              <input
                type="text"
                value={caseSheet.importReference}
                autoComplete="off"
                onChange={(event) =>
                  updateCaseField("importReference", event.target.value)
                }
                placeholder="Ex. : IMPORT-2026-001"
                className="min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:ring-sky-950"
              />
            </label>
          </div>

          <div className="mt-5 border-t border-zinc-200 pt-5 dark:border-zinc-800">
            <h5 className="m-0 text-base font-bold text-zinc-950 dark:text-white">
              Cinq contrôles séparés pour l’import
            </h5>
            <p className="mb-4 mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              « En cours » signifie que Google traite encore l’étape. Utilisez «
              Échec, rejeté ou non confirmé » si le lot est rejeté ou si la
              preuve attendue n’apparaît pas. Un contrôle antérieur peut rester
              inconnu même si un contrôle ultérieur possède une preuve : la
              fiche conservera alors ce passage non prouvé au lieu d’inventer
              une confirmation.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {CASE_IMPORT_CHECKS.map((check, index) => {
                const invalid =
                  caseCopyAttempted &&
                  caseValidation.issues.some(
                    (issue) =>
                      issue.field === "importCheck" &&
                      issue.importCheckId === check.id,
                  );
                return (
                  <div
                    key={check.id}
                    className="block rounded-lg border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-800 dark:bg-zinc-900/50"
                  >
                    <label className="block">
                      <span className="mb-1.5 block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        {index + 1}. {check.label}
                      </span>
                      <select
                        value={caseSheet.importChecks[check.id].status}
                        aria-invalid={invalid}
                        onChange={(event) =>
                          updateImportCheck(
                            check.id,
                            event.target
                              .value as ConversionCaseImportCheckStatus,
                          )
                        }
                        className="min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:focus:ring-sky-950"
                      >
                        {CASE_IMPORT_CHECK_STATUSES.map((status) => (
                          <option key={status.id} value={status.id}>
                            {status.label}
                          </option>
                        ))}
                      </select>
                    </label>
                    {!["unknown", "not-applicable"].includes(
                      caseSheet.importChecks[check.id].status,
                    ) && (
                      <div className="mt-3 space-y-3 border-t border-zinc-200 pt-3 dark:border-zinc-700">
                        <label className="block">
                          <span className="mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                            Date de ce contrôle
                          </span>
                          <input
                            type="date"
                            value={caseSheet.importChecks[check.id].date}
                            aria-invalid={invalid}
                            onChange={(event) =>
                              updateImportCheckField(
                                check.id,
                                "date",
                                event.target.value,
                              )
                            }
                            className="min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:focus:ring-sky-950"
                          />
                        </label>
                        <label className="block">
                          <span className="mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                            Preuve ou référence de ce contrôle
                          </span>
                          <input
                            type="text"
                            value={caseSheet.importChecks[check.id].evidence}
                            aria-invalid={invalid}
                            autoComplete="off"
                            onChange={(event) =>
                              updateImportCheckField(
                                check.id,
                                "evidence",
                                event.target.value,
                              )
                            }
                            placeholder="Ex. : journal ou rapport interne"
                            className="min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:focus:ring-sky-950"
                          />
                        </label>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-5 border-t border-zinc-200 pt-5 dark:border-zinc-800">
            <h5 className="m-0 text-base font-bold text-zinc-950 dark:text-white">
              Marge du dossier
            </h5>
            <p className="mb-4 mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              La marge complète la fiche individuelle. Elle ne devient jamais un
              septième volume et ne modifie aucun taux ci-dessus.
            </p>
            <label className="block max-w-md">
              <span className="mb-1.5 block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Statut de la marge
              </span>
              <select
                value={caseSheet.margin.status}
                aria-invalid={
                  caseCopyAttempted &&
                  caseValidation.issues.some(
                    (issue) => issue.field === "margin",
                  )
                }
                onChange={(event) =>
                  updateMarginStatus(
                    event.target.value as ConversionCaseMarginStatus,
                  )
                }
                className="min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:focus:ring-sky-950"
              >
                {CASE_MARGIN_STATUSES.map((status) => (
                  <option key={status.id} value={status.id}>
                    {status.label}
                  </option>
                ))}
              </select>
            </label>

            {caseSheet.margin.status === "unknown" ? (
              <p className="mb-0 mt-3 rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-300">
                Marge inconnue : la fiche copiée l’indiquera explicitement, sans
                inventer de valeur.
              </p>
            ) : (
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    Date de la marge
                  </span>
                  <input
                    type="date"
                    value={caseSheet.margin.date}
                    onChange={(event) =>
                      updateMarginField("date", event.target.value)
                    }
                    className="min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:focus:ring-sky-950"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    Valeur de marge en euros
                  </span>
                  <input
                    type="number"
                    step="0.01"
                    value={caseSheet.margin.value ?? ""}
                    onChange={(event) => updateMarginValue(event.target.value)}
                    className="min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:focus:ring-sky-950"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    Formule utilisée
                  </span>
                  <input
                    type="text"
                    value={caseSheet.margin.formula}
                    autoComplete="off"
                    onChange={(event) =>
                      updateMarginField("formula", event.target.value)
                    }
                    placeholder="Ex. : chiffre d’affaires HT – achats – sous-traitance"
                    className="min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:focus:ring-sky-950"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    Preuve ou référence du calcul
                  </span>
                  <textarea
                    rows={2}
                    value={caseSheet.margin.evidence}
                    onChange={(event) =>
                      updateMarginField("evidence", event.target.value)
                    }
                    placeholder="Ex. : calcul MARGE-001 validé par la direction"
                    className="min-h-11 w-full resize-y rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:focus:ring-sky-950"
                  />
                </label>
              </div>
            )}
          </div>

          <label className="mt-5 block border-t border-zinc-200 pt-5 dark:border-zinc-800">
            <span className="mb-1.5 block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Prochaine action
            </span>
            <textarea
              rows={2}
              value={caseSheet.nextAction}
              aria-invalid={
                caseCopyAttempted &&
                caseValidation.issues.some(
                  (issue) => issue.field === "nextAction",
                )
              }
              onChange={(event) =>
                updateCaseField("nextAction", event.target.value)
              }
              placeholder="Ex. : vérifier l’acceptation de l’import vendredi"
              className="min-h-11 w-full resize-y rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:ring-sky-950"
            />
          </label>

          {caseCopyAttempted && !caseValidation.valid && (
            <div
              role="status"
              className="mt-4 rounded-lg border border-red-300 bg-red-50 p-3 text-red-950 dark:border-red-900 dark:bg-red-950/30 dark:text-red-100"
            >
              <p className="mb-1 text-sm font-semibold">
                La fiche n’est pas encore copiable
              </p>
              <ul className="mb-0 space-y-1 pl-5 text-xs leading-relaxed">
                {caseValidation.issues.map((issue, index) => (
                  <li
                    key={`${issue.field}-${issue.stageId ?? issue.importCheckId ?? index}`}
                  >
                    {issue.message}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={copyCaseSheet}
              className="min-h-11 rounded-lg bg-violet-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 dark:bg-violet-600 dark:hover:bg-violet-500"
            >
              Copier la fiche de ce dossier
            </button>
            <button
              type="button"
              onClick={downloadCaseSheet}
              className="min-h-11 rounded-lg border border-violet-300 bg-white px-4 py-2.5 text-sm font-semibold text-violet-800 transition hover:bg-violet-50 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 dark:border-violet-800 dark:bg-zinc-950 dark:text-violet-200 dark:hover:bg-violet-950/30"
            >
              Télécharger la fiche (.txt)
            </button>
          </div>
          <p
            aria-live="polite"
            className="mb-0 mt-3 min-h-5 text-sm text-zinc-600 dark:text-zinc-300"
          >
            {caseFeedback}
          </p>
        </fieldset>
      </div>
    </section>
  );
}

type ConversionContextIssueField =
  "startDate" | "endDate" | "observedAt" | "followUpComplete";
