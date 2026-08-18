"use client";

import { useEffect, useId, useMemo, useState } from "react";
import {
  buildSaasSecurityDecisionFilename,
  buildSaasSecurityDecisionText,
  cloneSaasSecurityAssessment,
  createEmptySaasSecurityAssessment,
  createFictitiousSaasSecurityAssessment,
  evaluateSaasSecurityAssessment,
  SAAS_SECURITY_CRITICAL_CONTROL_IDS,
  SAAS_SECURITY_CONTROL_STATUSES,
  SAAS_SECURITY_DISPOSITIONS,
  SAAS_SECURITY_EVIDENCE_KINDS,
  SAAS_SECURITY_EVIDENCE_SCOPES,
  SAAS_SECURITY_IMPORTANCE_LEVELS,
  SAAS_SECURITY_MAX_DECLARED_HOURS,
  SAAS_SECURITY_MIN_PLANNED_HOURS,
  SAAS_SECURITY_NATURES,
  SAAS_SECURITY_REQUIREMENT_TEMPLATES,
  SAAS_SECURITY_RISK_LEVELS,
  type SaasSecurityAssessment,
  type SaasSecurityAssessmentContext,
  type SaasSecurityRequirementId,
  type SaasSecurityRequirementInput,
} from "@/lib/saas-security-decision";
import {
  formatSaasSecurityLocalIsoDate,
  millisecondsUntilNextSaasSecurityLocalMidnight,
} from "@/lib/saas-security-local-date";

type NumberContextKey = "weeklyCapacityHours" | "safetyMarginPercent";

const fieldClass =
  "mt-1.5 min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 shadow-sm outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100";

const textAreaClass =
  "mt-1.5 min-h-24 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm leading-relaxed text-zinc-950 shadow-sm outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100";

const labelClass =
  "block text-xs font-semibold leading-relaxed text-zinc-700 dark:text-zinc-300";

function parseOptionalNumber(raw: string) {
  if (raw.trim() === "") return null;
  const value = Number(raw.replace(",", "."));
  return Number.isFinite(value) ? value : Number.NaN;
}

function formatHours(value: number | null) {
  if (value === null || !Number.isFinite(value)) return "Inconnu";
  if (value > 0 && value < SAAS_SECURITY_MIN_PLANNED_HOURS) {
    return "< 0,01 h";
  }
  if (value < 0 && value > -SAAS_SECURITY_MIN_PLANNED_HOURS) {
    return "> -0,01 h";
  }
  return `${new Intl.NumberFormat("fr-FR", {
    maximumFractionDigits: 2,
  }).format(value)} h`;
}

function requirementSummary(requirement: SaasSecurityRequirementInput) {
  const status = SAAS_SECURITY_CONTROL_STATUSES.find(
    (option) => option.id === requirement.status,
  )?.label;
  const importance = SAAS_SECURITY_IMPORTANCE_LEVELS.find(
    (option) => option.id === requirement.importance,
  )?.label;
  return `${importance ?? "À qualifier"} · ${status ?? "Inconnu"}`;
}

function resultStyle(
  code: ReturnType<typeof evaluateSaasSecurityAssessment>["code"],
) {
  if (code === "sign-on-scope") {
    return "border-emerald-300 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/25";
  }
  if (code === "sign-with-conditions" || code === "fix-before-signing") {
    return "border-amber-300 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/25";
  }
  return "border-rose-300 bg-rose-50 dark:border-rose-900 dark:bg-rose-950/25";
}

function normalizeRequirementState(
  requirement: SaasSecurityRequirementInput,
): SaasSecurityRequirementInput {
  let normalized = { ...requirement };
  const statusCannotBeNotApplicable =
    SAAS_SECURITY_CRITICAL_CONTROL_IDS.includes(
      normalized.id as (typeof SAAS_SECURITY_CRITICAL_CONTROL_IDS)[number],
    ) ||
    normalized.importance === "critical" ||
    ["applicable-obligation", "independent-assurance"].includes(
      normalized.nature,
    );

  if (statusCannotBeNotApplicable && normalized.status === "not-applicable") {
    normalized = {
      ...normalized,
      status: "unknown",
      notApplicableReason: "",
    };
  }

  if (
    normalized.nature === "applicable-obligation" &&
    normalized.disposition === "condition-after-signature"
  ) {
    normalized = {
      ...normalized,
      disposition: "unknown",
      temporaryMeasure: "",
      reportabilityBasis: "",
      fundingConfirmed: false,
      fundingReference: "",
      fundingDate: "",
      internalAcceptance: false,
      internalAcceptanceReference: "",
      internalAcceptanceDate: "",
      buyerAcceptance: false,
      buyerAcceptanceReference: "",
      buyerAcceptanceDate: "",
    };
  }

  return normalized;
}

function downloadLocalText(filename: string, content: string) {
  const url = URL.createObjectURL(
    new Blob([content], { type: "text/plain;charset=utf-8" }),
  );
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.rel = "noopener";
  document.body.append(link);

  try {
    link.click();
  } finally {
    link.remove();
    URL.revokeObjectURL(url);
  }
}

export function SaasSecurityDecisionTool() {
  const instanceId = useId().replaceAll(":", "");
  const [evaluationDate, setEvaluationDate] = useState("");
  const [assessment, setAssessment] = useState<SaasSecurityAssessment>(() =>
    createEmptySaasSecurityAssessment(),
  );
  const [downloadFeedback, setDownloadFeedback] = useState("");
  const [resetRequested, setResetRequested] = useState(false);
  const result = useMemo(
    () => evaluateSaasSecurityAssessment(assessment, evaluationDate),
    [assessment, evaluationDate],
  );
  const printableText = useMemo(
    () => buildSaasSecurityDecisionText(assessment, evaluationDate),
    [assessment, evaluationDate],
  );
  const requirementsById = Object.fromEntries(
    assessment.requirements.map((requirement) => [requirement.id, requirement]),
  ) as Record<SaasSecurityRequirementId, SaasSecurityRequirementInput>;
  const issueCountsByRequirement = Object.fromEntries(
    SAAS_SECURITY_REQUIREMENT_TEMPLATES.map((template) => [
      template.id,
      result.issues.filter((issue) => issue.requirementId === template.id)
        .length,
    ]),
  ) as Record<SaasSecurityRequirementId, number>;
  const firstRequirementIssueId = SAAS_SECURITY_REQUIREMENT_TEMPLATES.find(
    (template) => issueCountsByRequirement[template.id] > 0,
  )?.id;
  const firstRequirementIssue = result.issues.find(
    (issue) => issue.requirementId === firstRequirementIssueId,
  );

  useEffect(() => {
    let midnightTimer: number | undefined;

    function refreshEvaluationDate() {
      const now = new Date();
      setEvaluationDate(formatSaasSecurityLocalIsoDate(now));
      if (midnightTimer !== undefined) {
        window.clearTimeout(midnightTimer);
      }
      midnightTimer = window.setTimeout(
        refreshEvaluationDate,
        millisecondsUntilNextSaasSecurityLocalMidnight(now) + 50,
      );
    }

    function handleVisibilityChange() {
      if (document.visibilityState === "visible") refreshEvaluationDate();
    }

    queueMicrotask(refreshEvaluationDate);
    window.addEventListener("focus", refreshEvaluationDate);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      if (midnightTimer !== undefined) window.clearTimeout(midnightTimer);
      window.removeEventListener("focus", refreshEvaluationDate);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  function updateContext<K extends keyof SaasSecurityAssessmentContext>(
    key: K,
    value: SaasSecurityAssessmentContext[K],
  ) {
    setAssessment((current) => ({
      ...current,
      context: { ...current.context, [key]: value },
    }));
    setDownloadFeedback("");
  }

  function updateNumberContext(key: NumberContextKey, raw: string) {
    updateContext(key, parseOptionalNumber(raw));
  }

  function updateRequirement<K extends keyof SaasSecurityRequirementInput>(
    id: SaasSecurityRequirementId,
    key: K,
    value: SaasSecurityRequirementInput[K],
  ) {
    setAssessment((current) => ({
      ...current,
      requirements: current.requirements.map((requirement) =>
        requirement.id === id
          ? normalizeRequirementState({
              ...requirement,
              [key]: value,
            } as SaasSecurityRequirementInput)
          : requirement,
      ),
    }));
    setDownloadFeedback("");
  }

  function loadFictitiousExample() {
    const exampleEvaluationDate =
      evaluationDate || formatSaasSecurityLocalIsoDate();
    setAssessment(
      cloneSaasSecurityAssessment(
        createFictitiousSaasSecurityAssessment(exampleEvaluationDate),
      ),
    );
    setDownloadFeedback(
      "Exemple fictif chargé. Remplacez chaque hypothèse avant de décider.",
    );
  }

  function focusFirstRequirementIssue() {
    if (!firstRequirementIssueId) return;
    const detailsId = `${instanceId}-${firstRequirementIssueId}`;
    const details = document.getElementById(
      `${detailsId}-container`,
    ) as HTMLDetailsElement | null;
    details?.setAttribute("open", "");
    document.getElementById(`${detailsId}-summary`)?.focus();
  }

  function resetAssessment() {
    setAssessment(createEmptySaasSecurityAssessment());
    setDownloadFeedback("Atelier effacé sur cet appareil.");
    setResetRequested(false);
  }

  function downloadDecision() {
    const dossierFilename = buildSaasSecurityDecisionFilename(assessment);
    downloadLocalText(
      result.valid ? dossierFilename : `brouillon-${dossierFilename}`,
      buildSaasSecurityDecisionText(assessment, evaluationDate),
    );
    setDownloadFeedback(
      result.valid
        ? "Le dossier texte a été préparé localement. Aucune donnée n’a été envoyée au site."
        : "Le brouillon incomplet a été préparé localement pour éviter de perdre vos saisies. Il ne peut pas autoriser une signature.",
    );
  }

  function printDecision() {
    window.print();
  }

  return (
    <>
      <style>
        {
          "@media print { body *:not(#saas-security-decision-tool):not(#saas-security-decision-tool *):not(:has(#saas-security-decision-tool)) { display: none !important; } #saas-security-decision-tool { position: absolute !important; inset: 0 auto auto 0 !important; width: 100% !important; margin: 0 !important; overflow: visible !important; border: 0 !important; box-shadow: none !important; background: white !important; color: #18181b !important; } #saas-security-decision-tool > :not(.saas-security-print-report) { display: none !important; } #saas-security-decision-tool .saas-security-print-report { display: block !important; margin: 0 !important; background: white !important; color: #18181b !important; } #saas-security-decision-tool button, #saas-security-decision-tool input, #saas-security-decision-tool select, #saas-security-decision-tool textarea, #saas-security-decision-tool [data-saas-security-interactive] { display: none !important; } }"
        }
      </style>
      <section
        id="saas-security-decision-tool"
        className="not-prose my-10 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
        aria-labelledby={`${instanceId}-title`}
        data-read-time-exclude="true"
      >
        <pre className="saas-security-print-report hidden whitespace-pre-wrap p-6 font-sans text-[9.5px] leading-[1.45] print:block">
          {printableText}
        </pre>
        <div className="border-b border-zinc-800 bg-zinc-950 px-4 py-6 text-white sm:px-6">
          <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-300">
            Atelier local · aucune donnée envoyée
          </p>
          <h3
            id={`${instanceId}-title`}
            className="mb-0 mt-2 text-xl font-bold tracking-tight sm:text-2xl"
          >
            Peut-on honnêtement signer ce contrat aujourd’hui ?
          </h3>
          <p className="mb-0 mt-3 max-w-3xl text-sm leading-relaxed text-zinc-300">
            Qualifiez cinq contrôles essentiels qui ne peuvent pas être
            reclassés, puis placez toute autre exigence produit, contractuelle,
            sectorielle ou d’assurance dans la sixième famille. Elle peut être
            critique : un dossier distinct ne la rend pas optionnelle. Cette
            famille ne peut porter qu’une seule décision ; si les exigences
            diffèrent par leur nature, leur état, leur risque ou leur échéance,
            exportez un dossier par exigence et retenez le verdict le plus
            restrictif. L’outil ne donne ni note de sécurité ni certificat : il
            explique ce qui autorise une signature, impose une correction ou
            justifie un report.
          </p>
        </div>

        <div className="border-b border-amber-200 bg-amber-50 px-4 py-4 text-sm leading-relaxed text-amber-900 dark:border-amber-900 dark:bg-amber-950/25 dark:text-amber-200 sm:px-6">
          <strong>
            Ne saisissez aucun nom de client, secret, clé, donnée personnelle ou
            détail d’architecture exploitable.
          </strong>{" "}
          Utilisez une référence interne et des descriptions suffisamment
          générales pour être partagées.
        </div>

        <div className="space-y-8 p-4 sm:p-6" data-saas-security-interactive>
          <section aria-labelledby={`${instanceId}-context-title`}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="m-0 text-xs font-bold uppercase tracking-[0.14em] text-violet-700 dark:text-violet-300">
                  1. La vente et la capacité disponible
                </p>
                <h3
                  id={`${instanceId}-context-title`}
                  className="mb-0 mt-1 text-lg font-bold text-zinc-950 dark:text-white"
                >
                  Fixez le périmètre avant d’évaluer les pièces
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={loadFictitiousExample}
                  className="min-h-11 rounded-lg border border-violet-300 px-4 py-2 text-sm font-semibold text-violet-800 transition hover:bg-violet-50 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:border-violet-800 dark:text-violet-200 dark:hover:bg-violet-950/40"
                >
                  Charger l’exemple fictif
                </button>
                <button
                  type="button"
                  onClick={() => setResetRequested(true)}
                  className="min-h-11 rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900"
                >
                  Effacer
                </button>
              </div>
            </div>

            {resetRequested && (
              <div
                role="alert"
                className="mt-4 rounded-lg border border-rose-300 bg-rose-50 p-4 text-sm text-rose-950 dark:border-rose-800 dark:bg-rose-950/30 dark:text-rose-100"
              >
                <p className="m-0 font-semibold">
                  Effacer définitivement toutes les saisies de cet atelier ?
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setResetRequested(false)}
                    className="min-h-11 rounded-lg border border-zinc-300 bg-white px-4 py-2 font-semibold text-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                  >
                    Annuler et conserver
                  </button>
                  <button
                    type="button"
                    onClick={resetAssessment}
                    className="min-h-11 rounded-lg bg-rose-700 px-4 py-2 font-semibold text-white focus:outline-none focus:ring-2 focus:ring-rose-500"
                  >
                    Effacer définitivement
                  </button>
                </div>
              </div>
            )}

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <p className="m-0 rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-xs leading-relaxed text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 sm:col-span-2">
                Date locale d’évaluation de l’atelier :{" "}
                <strong>{evaluationDate || "chargement…"}</strong>. Une
                observation future est refusée.
              </p>
              <label className={labelClass}>
                Référence interne sans nom de client
                <input
                  type="text"
                  value={assessment.context.reference}
                  onChange={(event) =>
                    updateContext("reference", event.target.value)
                  }
                  placeholder="DOSSIER-2026-001"
                  className={fieldClass}
                />
              </label>
              <label className={labelClass}>
                Fonction qui accepte le risque restant
                <input
                  type="text"
                  value={assessment.context.riskApproverRole}
                  onChange={(event) =>
                    updateContext("riskApproverRole", event.target.value)
                  }
                  placeholder="Direction générale"
                  className={fieldClass}
                />
              </label>
              <label className={`${labelClass} sm:col-span-2`}>
                Produit, fonctions, environnements et pays réellement vendus
                <textarea
                  value={assessment.context.productScope}
                  onChange={(event) =>
                    updateContext("productScope", event.target.value)
                  }
                  placeholder="Exemple : application B2B, fonctions documentaires, production France, interface technique (API) et export inclus"
                  className={textAreaClass}
                />
              </label>
              <label className={labelClass}>
                Date de l’observation
                <input
                  type="date"
                  value={assessment.context.observationDate}
                  onChange={(event) =>
                    updateContext("observationDate", event.target.value)
                  }
                  className={fieldClass}
                />
              </label>
              <label className={labelClass}>
                Date limite de signature
                <input
                  type="date"
                  value={assessment.context.signatureDate}
                  onChange={(event) =>
                    updateContext("signatureDate", event.target.value)
                  }
                  className={fieldClass}
                />
              </label>
              <label className={labelClass}>
                Capacité nette disponible par semaine
                <span className="block font-normal text-zinc-500 dark:text-zinc-400">
                  Après le travail déjà engagé, y compris zéro.
                </span>
                <input
                  type="number"
                  min="0"
                  max={SAAS_SECURITY_MAX_DECLARED_HOURS}
                  step="0.5"
                  value={assessment.context.weeklyCapacityHours ?? ""}
                  onChange={(event) =>
                    updateNumberContext(
                      "weeklyCapacityHours",
                      event.target.value,
                    )
                  }
                  className={fieldClass}
                />
              </label>
              <label className={labelClass}>
                Marge de prudence sur la charge
                <span className="block font-normal text-zinc-500 dark:text-zinc-400">
                  Pour produire les pièces et rejouer les contrôles.
                </span>
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="1"
                    value={assessment.context.safetyMarginPercent ?? ""}
                    onChange={(event) =>
                      updateNumberContext(
                        "safetyMarginPercent",
                        event.target.value,
                      )
                    }
                    className={`${fieldClass} pr-10`}
                  />
                  <span className="pointer-events-none absolute right-3 top-1/2 mt-0.5 -translate-y-1/2 text-sm text-zinc-500">
                    %
                  </span>
                </div>
              </label>
              <label className="flex min-h-11 items-start gap-3 rounded-lg border border-violet-200 bg-violet-50 p-3 text-sm leading-relaxed text-violet-950 dark:border-violet-900 dark:bg-violet-950/25 dark:text-violet-100 sm:col-span-2">
                <input
                  type="checkbox"
                  checked={assessment.context.buyerRequirementsComplete}
                  onChange={(event) =>
                    updateContext(
                      "buyerRequirementsComplete",
                      event.target.checked,
                    )
                  }
                  className="mt-0.5 size-5 shrink-0 accent-violet-600"
                />
                Toutes les demandes de l’acheteur ont été recensées et
                rattachées aux cinq contrôles essentiels ou à la sixième famille
                pour toute autre exigence produit, contractuelle, sectorielle ou
                d’assurance. Dans chaque famille, l’état saisi correspond au
                contrôle essentiel ou à la demande la moins bien démontrée. Les
                exigences qui n’ont pas la même nature, le même état, le même
                risque et la même échéance font chacune l’objet d’un export
                séparé.
              </label>
              <label className="flex min-h-11 items-start gap-3 rounded-lg border border-violet-200 bg-violet-50 p-3 text-sm leading-relaxed text-violet-950 dark:border-violet-900 dark:bg-violet-950/25 dark:text-violet-100 sm:col-span-2">
                <input
                  type="checkbox"
                  checked={assessment.context.remediationWorkComplete}
                  onChange={(event) =>
                    updateContext(
                      "remediationWorkComplete",
                      event.target.checked,
                    )
                  }
                  className="mt-0.5 size-5 shrink-0 accent-violet-600"
                />
                Pour chaque famille, la charge saisie additionne toutes les
                corrections, productions de pièces et contre-tests encore
                ouverts. Une charge inconnue reste vide et ne vaut pas zéro.
              </label>
            </div>
          </section>

          <section aria-labelledby={`${instanceId}-requirements-title`}>
            <p className="m-0 text-xs font-bold uppercase tracking-[0.14em] text-violet-700 dark:text-violet-300">
              2. Les exigences qui peuvent bloquer la signature
            </p>
            <h3
              id={`${instanceId}-requirements-title`}
              className="mb-0 mt-1 text-lg font-bold text-zinc-950 dark:text-white"
            >
              Ouvrez chaque point et remplacez les suppositions par des faits
            </h3>
            <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              « Inconnu » reste une information utile. Ne choisissez jamais «
              prouvé » uniquement parce qu’une politique ou un logo existe.
            </p>

            <div className="mt-5 space-y-3">
              {SAAS_SECURITY_REQUIREMENT_TEMPLATES.map((template, index) => {
                const requirement = requirementsById[template.id];
                const detailsId = `${instanceId}-${template.id}`;
                const requirementIssues = result.issues.filter(
                  (issue) => issue.requirementId === template.id,
                );
                const requirementErrorsId = `${detailsId}-errors`;
                const remediationHelpId = `${detailsId}-remediation-help`;
                const plannedWork = [
                  "fix-before-signature",
                  "condition-after-signature",
                ].includes(requirement.disposition);
                const plannedWorkHoursInvalid =
                  plannedWork &&
                  requirement.remediationHours !== null &&
                  (!Number.isFinite(requirement.remediationHours) ||
                    requirement.remediationHours <
                      SAAS_SECURITY_MIN_PLANNED_HOURS);
                return (
                  <details
                    key={template.id}
                    id={`${detailsId}-container`}
                    aria-invalid={
                      requirementIssues.length > 0 ? "true" : undefined
                    }
                    aria-describedby={
                      requirementIssues.length > 0
                        ? requirementErrorsId
                        : undefined
                    }
                    className="group overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 open:bg-white dark:border-zinc-800 dark:bg-zinc-900/60 dark:open:bg-zinc-950"
                  >
                    <summary
                      id={`${detailsId}-summary`}
                      className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-violet-500 [&::-webkit-details-marker]:hidden"
                    >
                      <span>
                        <span className="block text-sm font-semibold text-zinc-950 dark:text-white">
                          {index + 1}. {requirement.label}
                        </span>
                        <span className="mt-1 block text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                          {requirementSummary(requirement)}
                          {issueCountsByRequirement[template.id] > 0 &&
                            ` · ${issueCountsByRequirement[template.id]} point${issueCountsByRequirement[template.id] > 1 ? "s" : ""} à corriger`}
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="text-xl text-zinc-500 transition group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>

                    <div
                      id={detailsId}
                      className="border-t border-zinc-200 p-4 dark:border-zinc-800"
                    >
                      <p className="m-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {template.help}
                      </p>
                      {requirementIssues.length > 0 && (
                        <div
                          id={requirementErrorsId}
                          data-requirement-errors={template.id}
                          className="mt-4 rounded-lg border border-rose-200 bg-rose-50 p-3 text-sm leading-relaxed text-rose-900 dark:border-rose-900 dark:bg-rose-950/25 dark:text-rose-200"
                        >
                          <p className="m-0 font-semibold">
                            Points à corriger dans cette famille
                          </p>
                          <ul className="mb-0 mt-2 space-y-1 pl-5">
                            {requirementIssues.map((issue) => (
                              <li key={`${issue.code}-${issue.message}`}>
                                {issue.message}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <div
                        role="group"
                        aria-labelledby={`${detailsId}-summary`}
                        aria-invalid={
                          requirementIssues.length > 0 ? "true" : undefined
                        }
                        aria-describedby={
                          requirementIssues.length > 0
                            ? requirementErrorsId
                            : undefined
                        }
                        className="mt-4 grid gap-4 sm:grid-cols-2"
                      >
                        <label className={`${labelClass} sm:col-span-2`}>
                          Demandes exactes de l’acheteur dans cette famille
                          <textarea
                            value={requirement.buyerRequirement}
                            onChange={(event) =>
                              updateRequirement(
                                template.id,
                                "buyerRequirement",
                                event.target.value,
                              )
                            }
                            placeholder="Une demande par ligne, sans donnée sensible. Si plusieurs demandes existent, évaluez ensuite celle qui est la moins bien démontrée."
                            className={textAreaClass}
                          />
                        </label>
                        <label className={labelClass}>
                          Nature de la demande
                          <select
                            value={requirement.nature}
                            onChange={(event) =>
                              updateRequirement(
                                template.id,
                                "nature",
                                event.target
                                  .value as SaasSecurityRequirementInput["nature"],
                              )
                            }
                            className={fieldClass}
                          >
                            {SAAS_SECURITY_NATURES.map((option) => (
                              <option key={option.id} value={option.id}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </label>
                        <label className={labelClass}>
                          Importance avant signature
                          <select
                            value={requirement.importance}
                            disabled={SAAS_SECURITY_CRITICAL_CONTROL_IDS.includes(
                              template.id as (typeof SAAS_SECURITY_CRITICAL_CONTROL_IDS)[number],
                            )}
                            onChange={(event) =>
                              updateRequirement(
                                template.id,
                                "importance",
                                event.target
                                  .value as SaasSecurityRequirementInput["importance"],
                              )
                            }
                            className={`${fieldClass} disabled:cursor-not-allowed disabled:bg-zinc-100 disabled:text-zinc-600 dark:disabled:bg-zinc-800 dark:disabled:text-zinc-300`}
                          >
                            {SAAS_SECURITY_IMPORTANCE_LEVELS.map((option) => (
                              <option key={option.id} value={option.id}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                          {SAAS_SECURITY_CRITICAL_CONTROL_IDS.includes(
                            template.id as (typeof SAAS_SECURITY_CRITICAL_CONTROL_IDS)[number],
                          ) && (
                            <span className="mt-1.5 block font-normal text-zinc-500 dark:text-zinc-400">
                              Ce contrôle essentiel ne peut pas être reporté en
                              le reclassant.
                            </span>
                          )}
                        </label>
                        <label className={labelClass}>
                          État observé
                          <select
                            value={requirement.status}
                            onChange={(event) =>
                              updateRequirement(
                                template.id,
                                "status",
                                event.target
                                  .value as SaasSecurityRequirementInput["status"],
                              )
                            }
                            className={fieldClass}
                          >
                            {SAAS_SECURITY_CONTROL_STATUSES.filter(
                              (option) =>
                                option.id !== "not-applicable" ||
                                (!SAAS_SECURITY_CRITICAL_CONTROL_IDS.includes(
                                  template.id as (typeof SAAS_SECURITY_CRITICAL_CONTROL_IDS)[number],
                                ) &&
                                  requirement.importance !== "critical" &&
                                  requirement.nature !==
                                    "applicable-obligation" &&
                                  requirement.nature !==
                                    "independent-assurance"),
                            ).map((option) => (
                              <option key={option.id} value={option.id}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                          {requirement.nature === "independent-assurance" && (
                            <span className="mt-1.5 block font-normal text-zinc-500 dark:text-zinc-400">
                              Une assurance indépendante déclarée exigée ne peut
                              pas être écartée par une note interne. Pour la
                              déclarer satisfaite, reliez-la au document ou à
                              l’examen indépendant exact ; sinon,
                              renégociez/refusez l’exigence.
                            </span>
                          )}
                          {requirement.nature === "applicable-obligation" && (
                            <span className="mt-1.5 block font-normal text-rose-700 dark:text-rose-300">
                              Cet atelier ne peut pas déclarer une obligation
                              applicable reportable après la signature :
                              faites-la qualifier, satisfaites-la ou
                              renégociez/refusez le périmètre.
                            </span>
                          )}
                        </label>
                        <label className={labelClass}>
                          Risque qui reste après les mesures
                          <select
                            value={requirement.residualRisk}
                            onChange={(event) =>
                              updateRequirement(
                                template.id,
                                "residualRisk",
                                event.target
                                  .value as SaasSecurityRequirementInput["residualRisk"],
                              )
                            }
                            className={fieldClass}
                          >
                            {SAAS_SECURITY_RISK_LEVELS.map((option) => (
                              <option key={option.id} value={option.id}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </label>
                        <label className={labelClass}>
                          Nature de la pièce
                          <select
                            value={requirement.evidenceKind}
                            onChange={(event) =>
                              updateRequirement(
                                template.id,
                                "evidenceKind",
                                event.target
                                  .value as SaasSecurityRequirementInput["evidenceKind"],
                              )
                            }
                            className={fieldClass}
                          >
                            {SAAS_SECURITY_EVIDENCE_KINDS.map((option) => (
                              <option key={option.id} value={option.id}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </label>
                        <label className={labelClass}>
                          Périmètre réellement couvert
                          <select
                            value={requirement.evidenceScope}
                            onChange={(event) =>
                              updateRequirement(
                                template.id,
                                "evidenceScope",
                                event.target
                                  .value as SaasSecurityRequirementInput["evidenceScope"],
                              )
                            }
                            className={fieldClass}
                          >
                            {SAAS_SECURITY_EVIDENCE_SCOPES.map((option) => (
                              <option key={option.id} value={option.id}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </label>
                        <label className={labelClass}>
                          Référence interne de la pièce
                          <input
                            type="text"
                            value={requirement.evidenceReference}
                            onChange={(event) =>
                              updateRequirement(
                                template.id,
                                "evidenceReference",
                                event.target.value,
                              )
                            }
                            placeholder="TEST-ISOLEMENT-2026-07"
                            className={fieldClass}
                          />
                        </label>
                        <label className={labelClass}>
                          Résultat réellement observé
                          <textarea
                            value={requirement.evidenceResult}
                            onChange={(event) =>
                              updateRequirement(
                                template.id,
                                "evidenceResult",
                                event.target.value,
                              )
                            }
                            placeholder="Décrivez le résultat, l’échec, les exceptions et le contre-test, sans recopier de secret."
                            className={textAreaClass}
                          />
                        </label>
                        <label className={labelClass}>
                          Date de la pièce ou du test
                          <input
                            type="date"
                            value={requirement.evidenceDate}
                            onChange={(event) =>
                              updateRequirement(
                                template.id,
                                "evidenceDate",
                                event.target.value,
                              )
                            }
                            className={fieldClass}
                          />
                        </label>
                        <label className={labelClass}>
                          Date de prochaine revue
                          <span className="block font-normal text-zinc-500 dark:text-zinc-400">
                            Choisissez-la selon le risque et le cycle du
                            contrôle ; ce n’est pas une durée universelle.
                          </span>
                          <input
                            type="date"
                            value={requirement.reviewDueDate}
                            onChange={(event) =>
                              updateRequirement(
                                template.id,
                                "reviewDueDate",
                                event.target.value,
                              )
                            }
                            className={fieldClass}
                          />
                        </label>
                        <label className={`${labelClass} sm:col-span-2`}>
                          Changement qui invaliderait cette pièce
                          <textarea
                            value={requirement.evidenceInvalidationTrigger}
                            onChange={(event) =>
                              updateRequirement(
                                template.id,
                                "evidenceInvalidationTrigger",
                                event.target.value,
                              )
                            }
                            placeholder="Exemple : nouvelle version majeure, changement d’hébergeur, de flux, d’interface technique (API), de configuration ou de sous-traitant."
                            className={textAreaClass}
                          />
                        </label>
                        <label className="flex min-h-11 items-start gap-3 rounded-lg border border-zinc-200 bg-white p-3 text-sm leading-relaxed text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 sm:col-span-2">
                          <input
                            type="checkbox"
                            checked={requirement.freshnessConfirmed}
                            onChange={(event) =>
                              updateRequirement(
                                template.id,
                                "freshnessConfirmed",
                                event.target.checked,
                              )
                            }
                            className="mt-0.5 size-5 shrink-0 accent-violet-600"
                          />
                          J’ai vérifié que la pièce couvre encore la version,
                          les flux, l’environnement et le contrôle décrits pour
                          cette décision.
                        </label>
                        <label className="flex min-h-11 items-start gap-3 rounded-lg border border-zinc-200 bg-white p-3 text-sm leading-relaxed text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 sm:col-span-2">
                          <input
                            type="checkbox"
                            checked={requirement.changedSinceEvidence}
                            onChange={(event) =>
                              updateRequirement(
                                template.id,
                                "changedSinceEvidence",
                                event.target.checked,
                              )
                            }
                            className="mt-0.5 size-5 shrink-0 accent-violet-600"
                          />
                          Le produit, le prestataire, le flux ou le contrôle a
                          changé depuis cette pièce.
                        </label>
                        <label className={labelClass}>
                          Fonction propriétaire
                          <input
                            type="text"
                            value={requirement.ownerRole}
                            onChange={(event) =>
                              updateRequirement(
                                template.id,
                                "ownerRole",
                                event.target.value,
                              )
                            }
                            placeholder="Responsable technique"
                            className={fieldClass}
                          />
                        </label>
                        <label className={labelClass}>
                          Charge totale encore ouverte dans cette famille
                          <span
                            id={remediationHelpId}
                            className="block font-normal text-zinc-500 dark:text-zinc-400"
                          >
                            Somme de toutes les corrections, pièces et
                            contre-tests, pas seulement du point le plus grave.
                            {plannedWork &&
                              " Un travail planifié exige au moins 0,01 heure ; laissez vide si la charge reste inconnue."}
                          </span>
                          <div className="relative">
                            <input
                              type="number"
                              min={
                                plannedWork
                                  ? SAAS_SECURITY_MIN_PLANNED_HOURS
                                  : 0
                              }
                              max={SAAS_SECURITY_MAX_DECLARED_HOURS}
                              step="0.01"
                              value={requirement.remediationHours ?? ""}
                              aria-describedby={remediationHelpId}
                              aria-invalid={
                                plannedWorkHoursInvalid || undefined
                              }
                              onChange={(event) =>
                                updateRequirement(
                                  template.id,
                                  "remediationHours",
                                  parseOptionalNumber(event.target.value),
                                )
                              }
                              className={`${fieldClass} pr-10`}
                            />
                            <span className="pointer-events-none absolute right-3 top-1/2 mt-0.5 -translate-y-1/2 text-sm text-zinc-500">
                              h
                            </span>
                          </div>
                          {plannedWorkHoursInvalid && (
                            <span
                              role="alert"
                              className="mt-1.5 block font-normal text-rose-700 dark:text-rose-300"
                            >
                              Une charge inférieure à 0,01 heure ne peut pas
                              représenter une correction ou un contre-test
                              encore ouvert.
                            </span>
                          )}
                        </label>
                        <label className={labelClass}>
                          Décision envisagée
                          <select
                            value={requirement.disposition}
                            onChange={(event) =>
                              updateRequirement(
                                template.id,
                                "disposition",
                                event.target
                                  .value as SaasSecurityRequirementInput["disposition"],
                              )
                            }
                            className={fieldClass}
                          >
                            {SAAS_SECURITY_DISPOSITIONS.filter(
                              (option) =>
                                option.id !== "condition-after-signature" ||
                                requirement.nature !== "applicable-obligation",
                            ).map((option) => (
                              <option key={option.id} value={option.id}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </label>
                        <label className={labelClass}>
                          Échéance de la correction
                          <input
                            type="date"
                            value={requirement.targetDate}
                            onChange={(event) =>
                              updateRequirement(
                                template.id,
                                "targetDate",
                                event.target.value,
                              )
                            }
                            className={fieldClass}
                          />
                        </label>
                        <label className={`${labelClass} sm:col-span-2`}>
                          Action concrète et contre-test attendu
                          <textarea
                            value={requirement.nextAction}
                            onChange={(event) =>
                              updateRequirement(
                                template.id,
                                "nextAction",
                                event.target.value,
                              )
                            }
                            placeholder="Qui corrige quoi, puis quel résultat fermera réellement l’écart ?"
                            className={textAreaClass}
                          />
                        </label>

                        {requirement.residualRisk === "moderate" &&
                          requirement.disposition !==
                            "condition-after-signature" && (
                            <fieldset className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950/25 sm:col-span-2">
                              <legend className="px-1 text-xs font-semibold text-blue-900 dark:text-blue-200">
                                Décision interne sur le risque modéré restant
                              </legend>
                              <div className="mt-2 grid gap-3 sm:grid-cols-2">
                                <label className="flex min-h-11 items-start gap-3 text-sm leading-relaxed text-blue-900 dark:text-blue-200 sm:col-span-2">
                                  <input
                                    type="checkbox"
                                    checked={requirement.internalAcceptance}
                                    onChange={(event) =>
                                      updateRequirement(
                                        template.id,
                                        "internalAcceptance",
                                        event.target.checked,
                                      )
                                    }
                                    className="mt-0.5 size-5 shrink-0 accent-blue-600"
                                  />
                                  L’autorité interne compétente a accepté ce
                                  risque modéré restant.
                                </label>
                                <label className={labelClass}>
                                  Référence de la décision
                                  <input
                                    type="text"
                                    value={
                                      requirement.internalAcceptanceReference
                                    }
                                    onChange={(event) =>
                                      updateRequirement(
                                        template.id,
                                        "internalAcceptanceReference",
                                        event.target.value,
                                      )
                                    }
                                    placeholder="DECISION-RISQUE-2026-008"
                                    className={fieldClass}
                                  />
                                </label>
                                <label className={labelClass}>
                                  Date de la décision
                                  <input
                                    type="date"
                                    value={requirement.internalAcceptanceDate}
                                    onChange={(event) =>
                                      updateRequirement(
                                        template.id,
                                        "internalAcceptanceDate",
                                        event.target.value,
                                      )
                                    }
                                    className={fieldClass}
                                  />
                                </label>
                              </div>
                            </fieldset>
                          )}

                        {requirement.disposition ===
                          "condition-after-signature" && (
                          <fieldset className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/25 sm:col-span-2">
                            <legend className="px-1 text-xs font-semibold text-amber-900 dark:text-amber-200">
                              Uniquement pour un écart non critique
                            </legend>
                            <div className="mt-2 grid gap-3 sm:grid-cols-2">
                              <label className={`${labelClass} sm:col-span-2`}>
                                Mesure temporaire vérifiable pendant le report
                                <textarea
                                  value={requirement.temporaryMeasure}
                                  onChange={(event) =>
                                    updateRequirement(
                                      template.id,
                                      "temporaryMeasure",
                                      event.target.value,
                                    )
                                  }
                                  placeholder="Quelle protection réduit le risque jusqu’au contre-test, et comment sera-t-elle vérifiée ?"
                                  className={textAreaClass}
                                />
                              </label>
                              <label className={`${labelClass} sm:col-span-2`}>
                                Base qui autorise réellement le report
                                <textarea
                                  value={requirement.reportabilityBasis}
                                  onChange={(event) =>
                                    updateRequirement(
                                      template.id,
                                      "reportabilityBasis",
                                      event.target.value,
                                    )
                                  }
                                  placeholder="Exemple : condition d’achat amendée par écrit ou avis de la fonction compétente confirmant que l’obligation est reportable."
                                  className={textAreaClass}
                                />
                              </label>
                              <label className="flex min-h-11 items-start gap-3 text-sm leading-relaxed text-amber-900 dark:text-amber-200 sm:col-span-2">
                                <input
                                  type="checkbox"
                                  checked={requirement.fundingConfirmed}
                                  onChange={(event) =>
                                    updateRequirement(
                                      template.id,
                                      "fundingConfirmed",
                                      event.target.checked,
                                    )
                                  }
                                  className="mt-0.5 size-5 shrink-0 accent-amber-600"
                                />
                                La charge, la capacité et le financement du plan
                                sont confirmés.
                              </label>
                              <label className={labelClass}>
                                Référence de la décision de financement
                                <input
                                  type="text"
                                  value={requirement.fundingReference}
                                  onChange={(event) =>
                                    updateRequirement(
                                      template.id,
                                      "fundingReference",
                                      event.target.value,
                                    )
                                  }
                                  placeholder="BUDGET-2026-014"
                                  className={fieldClass}
                                />
                              </label>
                              <label className={labelClass}>
                                Date de la décision de financement
                                <input
                                  type="date"
                                  value={requirement.fundingDate}
                                  onChange={(event) =>
                                    updateRequirement(
                                      template.id,
                                      "fundingDate",
                                      event.target.value,
                                    )
                                  }
                                  className={fieldClass}
                                />
                              </label>
                              <label className="flex min-h-11 items-start gap-3 text-sm leading-relaxed text-amber-900 dark:text-amber-200">
                                <input
                                  type="checkbox"
                                  checked={requirement.internalAcceptance}
                                  onChange={(event) =>
                                    updateRequirement(
                                      template.id,
                                      "internalAcceptance",
                                      event.target.checked,
                                    )
                                  }
                                  className="mt-0.5 size-5 shrink-0 accent-amber-600"
                                />
                                Risque restant accepté par l’autorité interne
                                compétente.
                              </label>
                              <label className="flex min-h-11 items-start gap-3 text-sm leading-relaxed text-amber-900 dark:text-amber-200">
                                <input
                                  type="checkbox"
                                  checked={requirement.buyerAcceptance}
                                  onChange={(event) =>
                                    updateRequirement(
                                      template.id,
                                      "buyerAcceptance",
                                      event.target.checked,
                                    )
                                  }
                                  className="mt-0.5 size-5 shrink-0 accent-amber-600"
                                />
                                Plan et limite acceptés par écrit par
                                l’acheteur.
                              </label>
                              <label className={labelClass}>
                                Référence de l’acceptation interne
                                <input
                                  type="text"
                                  value={
                                    requirement.internalAcceptanceReference
                                  }
                                  onChange={(event) =>
                                    updateRequirement(
                                      template.id,
                                      "internalAcceptanceReference",
                                      event.target.value,
                                    )
                                  }
                                  placeholder="DECISION-RISQUE-2026-008"
                                  className={fieldClass}
                                />
                              </label>
                              <label className={labelClass}>
                                Date de l’acceptation interne
                                <input
                                  type="date"
                                  value={requirement.internalAcceptanceDate}
                                  onChange={(event) =>
                                    updateRequirement(
                                      template.id,
                                      "internalAcceptanceDate",
                                      event.target.value,
                                    )
                                  }
                                  className={fieldClass}
                                />
                              </label>
                              <label className={labelClass}>
                                Référence de l’accord écrit de l’acheteur
                                <input
                                  type="text"
                                  value={requirement.buyerAcceptanceReference}
                                  onChange={(event) =>
                                    updateRequirement(
                                      template.id,
                                      "buyerAcceptanceReference",
                                      event.target.value,
                                    )
                                  }
                                  placeholder="AVENANT-SECURITE-03"
                                  className={fieldClass}
                                />
                              </label>
                              <label className={labelClass}>
                                Date de l’accord écrit de l’acheteur
                                <input
                                  type="date"
                                  value={requirement.buyerAcceptanceDate}
                                  onChange={(event) =>
                                    updateRequirement(
                                      template.id,
                                      "buyerAcceptanceDate",
                                      event.target.value,
                                    )
                                  }
                                  className={fieldClass}
                                />
                              </label>
                            </div>
                          </fieldset>
                        )}

                        {requirement.status === "not-applicable" && (
                          <label className={`${labelClass} sm:col-span-2`}>
                            Pourquoi cette exigence ne s’applique-t-elle pas sur
                            le produit vendu ?
                            <span className="block font-normal text-zinc-500 dark:text-zinc-400">
                              Une phrase libre ne suffit pas : renseignez aussi
                              une pièce actuelle, son résultat, son périmètre
                              exact et la fonction responsable.
                            </span>
                            <textarea
                              value={requirement.notApplicableReason}
                              onChange={(event) =>
                                updateRequirement(
                                  template.id,
                                  "notApplicableReason",
                                  event.target.value,
                                )
                              }
                              className={textAreaClass}
                            />
                          </label>
                        )}
                      </div>
                    </div>
                  </details>
                );
              })}
            </div>
          </section>

          <section
            aria-labelledby={`${instanceId}-result-title`}
            className={`rounded-xl border p-4 sm:p-6 ${resultStyle(result.code)}`}
          >
            <p className="m-0 text-xs font-bold uppercase tracking-[0.14em] text-zinc-700 dark:text-zinc-300">
              3. Décision provisoire
            </p>
            <h3
              id={`${instanceId}-result-title`}
              className="mb-0 mt-2 text-xl font-bold text-zinc-950 dark:text-white"
            >
              {result.title}
            </h3>
            <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {result.explanation}
            </p>
            <p aria-live="polite" aria-atomic="true" className="sr-only">
              Décision provisoire mise à jour : {result.title}.{" "}
              {result.issues.length > 0
                ? `${result.issues.length} point${result.issues.length > 1 ? "s" : ""} de saisie à corriger.${firstRequirementIssue ? ` Le bouton ouvre ce premier point dans une famille : ${firstRequirementIssue.message}` : ` Premier point : ${result.issues[0]?.message}`}`
                : "Aucun point de saisie bloquant."}
            </p>

            <dl className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Charge initiale", formatHours(result.capacity.baseHours)],
                [
                  "Avec marge de prudence",
                  formatHours(result.capacity.prudentHours),
                ],
                [
                  "Capacité avant signature",
                  formatHours(result.capacity.availableHours),
                ],
                ["Écart de capacité", formatHours(result.capacity.gapHours)],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-lg border border-black/10 bg-white/70 p-3 dark:border-white/10 dark:bg-black/15"
                >
                  <dt className="text-[11px] font-bold uppercase tracking-[0.1em] text-zinc-500 dark:text-zinc-400">
                    {label}
                  </dt>
                  <dd className="mb-0 mt-1 text-base font-bold text-zinc-950 dark:text-white">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>

            {result.triggers.length > 0 && (
              <div className="mt-5">
                <h4 className="m-0 text-sm font-bold text-zinc-950 dark:text-white">
                  Ce qui produit ce verdict
                </h4>
                <ul className="mb-0 mt-2 space-y-1.5 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {result.triggers.map((trigger) => (
                    <li key={trigger}>{trigger}</li>
                  ))}
                </ul>
              </div>
            )}

            {result.nextActions.length > 0 && (
              <div className="mt-5">
                <h4 className="m-0 text-sm font-bold text-zinc-950 dark:text-white">
                  Les trois prochaines actions
                </h4>
                <ol className="mb-0 mt-2 space-y-1.5 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {result.nextActions.map((action) => (
                    <li key={action}>{action}</li>
                  ))}
                </ol>
              </div>
            )}

            {firstRequirementIssueId && (
              <button
                type="button"
                onClick={focusFirstRequirementIssue}
                className="mt-5 min-h-11 rounded-lg border border-rose-400 bg-white px-4 py-2.5 text-sm font-semibold text-rose-800 transition hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:border-rose-700 dark:bg-zinc-950 dark:text-rose-200 dark:hover:bg-rose-950/30"
              >
                Ouvrir le premier point à corriger
              </button>
            )}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={downloadDecision}
                className="min-h-11 rounded-lg bg-zinc-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
              >
                {result.valid
                  ? "Télécharger le dossier texte"
                  : "Télécharger le brouillon"}
              </button>
              <button
                type="button"
                onClick={printDecision}
                className="min-h-11 rounded-lg border border-zinc-400 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:border-zinc-600 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
              >
                {result.valid ? "Imprimer le dossier" : "Imprimer le brouillon"}
              </button>
              <p
                role="status"
                className="m-0 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400"
              >
                {downloadFeedback ||
                  "Le fichier reste sur votre appareil. Aucun stockage ni envoi réseau propre à cet outil."}
              </p>
            </div>
          </section>

          <p className="m-0 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
            Limite : le calcul vérifie une charge déclarée. Il ne connaît ni les
            dépendances, ni les congés, ni les délais d’un auditeur ou d’un
            fournisseur. « Faisable en heures » ne signifie pas « livraison
            garantie ».
          </p>
        </div>
      </section>
    </>
  );
}
