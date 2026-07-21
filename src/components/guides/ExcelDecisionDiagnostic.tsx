"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check, ClipboardCheck, RotateCcw } from "lucide-react";
import { copyTextToClipboard } from "@/lib/clipboard";
import {
  buildExcelDiagnosticClipboardText,
  getExcelDiagnosticRecommendation,
  getExcelPainScore,
  type ExcelDiagnosticAnswers,
  type ExcelPainKey,
} from "@/lib/excel-decision-diagnostic";
import { trackFunnelEvent } from "@/lib/funnel-analytics";

type QuestionKey = keyof ExcelDiagnosticAnswers;

const INITIAL_ANSWERS: ExcelDiagnosticAnswers = {
  simultaneous: false,
  mobile: false,
  permissions: false,
  duplicates: false,
  auditTrail: false,
  fragileRules: false,
  integrations: false,
  costlyIncident: false,
  processRulesUnderstood: false,
  existingSoftwareCoversEssentials: false,
  microsoft365: false,
};

const PAIN_QUESTIONS: Array<{
  key: ExcelPainKey;
  label: string;
  help: string;
}> = [
  {
    key: "simultaneous",
    label:
      "Plusieurs personnes doivent modifier les mêmes données en même temps",
    help: "Le fichier se verrouille, les équipes attendent ou créent des copies.",
  },
  {
    key: "mobile",
    label:
      "Des personnes saisissent des données en déplacement, sur mobile ou tablette",
    help: "Techniciens, commerciaux, équipes de chantier ou responsables multi-sites.",
  },
  {
    key: "permissions",
    label:
      "Chaque profil ne devrait voir ou modifier qu’une partie des informations",
    help: "Par exemple : marge, données RH, validation ou portefeuille client.",
  },
  {
    key: "duplicates",
    label:
      "Vous consolidez plusieurs fichiers ou ressaisissez les mêmes informations",
    help: "Les versions divergent et personne ne sait immédiatement laquelle fait foi.",
  },
  {
    key: "auditTrail",
    label: "Vous devez savoir qui a modifié quoi, quand et pourquoi",
    help: "Une couleur de cellule ou un nom de fichier ne suffit plus comme preuve.",
  },
  {
    key: "fragileRules",
    label:
      "Des formules, macros ou règles métier sont comprises par une seule personne",
    help: "Son absence ou son départ mettrait le processus en difficulté.",
  },
  {
    key: "integrations",
    label:
      "Le fichier doit échanger avec votre CRM, ERP, comptabilité ou machines",
    help: "Les exports et imports manuels sont devenus une tâche récurrente.",
  },
  {
    key: "costlyIncident",
    label:
      "Une erreur ou une indisponibilité peut bloquer une vente, une paie ou une production",
    help: "Le risque dépasse le simple inconfort d’utilisation.",
  },
];

const CONTEXT_QUESTIONS: Array<{
  key:
    | "processRulesUnderstood"
    | "existingSoftwareCoversEssentials"
    | "microsoft365";
  label: string;
}> = [
  {
    key: "processRulesUnderstood",
    label: "Le déroulement normal et les principales exceptions sont compris",
  },
  {
    key: "existingSoftwareCoversEssentials",
    label: "Un logiciel existant couvre tous les besoins indispensables",
  },
  {
    key: "microsoft365",
    label: "Tous les utilisateurs ont déjà Microsoft 365",
  },
];

const toneStyles = {
  green:
    "border-emerald-200 bg-emerald-50 text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/35 dark:text-emerald-100",
  blue: "border-blue-200 bg-blue-50 text-blue-950 dark:border-blue-900 dark:bg-blue-950/35 dark:text-blue-100",
  violet:
    "border-violet-200 bg-violet-50 text-violet-950 dark:border-violet-900 dark:bg-violet-950/35 dark:text-violet-100",
};

export function ExcelDecisionDiagnostic() {
  const [answers, setAnswers] =
    useState<ExcelDiagnosticAnswers>(INITIAL_ANSWERS);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">(
    "idle",
  );

  const painScore = getExcelPainScore(answers);
  const recommendation = getExcelDiagnosticRecommendation(answers);

  function toggle(key: QuestionKey) {
    setAnswers((current) => ({ ...current, [key]: !current[key] }));
    setCopyStatus("idle");
  }

  async function copyResult() {
    const text = buildExcelDiagnosticClipboardText({
      recommendation,
      painScore,
      painSignalCount: PAIN_QUESTIONS.length,
      selectedSignals: PAIN_QUESTIONS.filter(
        (question) => answers[question.key],
      ).map((question) => question.label),
      contextAnswers: CONTEXT_QUESTIONS.map((question) => ({
        label: question.label,
        checked: answers[question.key],
      })),
    });
    const copied = await copyTextToClipboard(text);

    if (!copied) {
      setCopyStatus("error");
      return;
    }

    setCopyStatus("copied");
    trackFunnelEvent("excel_diagnostic_result_copy", {
      guide: "transformer-excel-en-application",
      recommendation: recommendation.label,
      pain_score: painScore,
    });
  }

  return (
    <section
      className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
      aria-labelledby="excel-diagnostic-title"
    >
      <div className="border-b border-zinc-200 bg-zinc-950 px-4 py-5 text-white dark:border-zinc-800 sm:px-6">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-300">
          Diagnostic local · sans email
        </p>
        <h3
          id="excel-diagnostic-title"
          className="m-0 text-lg font-bold sm:text-xl"
        >
          Excel doit-il vraiment devenir une application ?
        </h3>
        <p className="mb-0 mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">
          Cochez uniquement les situations observées. Cette orientation peut
          recommander de garder Excel, mais elle isole les risques qui exigent
          une étude humaine.
        </p>
      </div>

      <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="p-4 sm:p-6">
          <fieldset>
            <legend className="mb-4 text-sm font-semibold text-zinc-950 dark:text-white">
              Quels problèmes rencontrez-vous réellement ?
            </legend>
            <div className="space-y-2.5">
              {PAIN_QUESTIONS.map((question) => (
                <label
                  key={question.key}
                  className={`flex cursor-pointer gap-3 rounded-xl border p-3.5 transition-colors sm:p-4 ${
                    answers[question.key]
                      ? "border-violet-300 bg-violet-50 dark:border-violet-800 dark:bg-violet-950/30"
                      : "border-zinc-200 bg-zinc-50 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={answers[question.key]}
                    onChange={() => toggle(question.key)}
                    className="mt-0.5 size-4 shrink-0 accent-violet-700"
                  />
                  <span>
                    <span className="block text-sm font-semibold leading-snug text-zinc-900 dark:text-zinc-100">
                      {question.label}
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                      {question.help}
                    </span>
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-6 grid gap-3 sm:grid-cols-3">
            <legend className="mb-3 text-sm font-semibold text-zinc-950 dark:text-white">
              Trois informations qui peuvent changer l’orientation
            </legend>
            {CONTEXT_QUESTIONS.map((question) => (
              <label
                key={question.key}
                className={`flex cursor-pointer gap-2 rounded-xl border p-3 text-xs font-medium leading-relaxed ${
                  answers[question.key]
                    ? "border-violet-300 bg-violet-50 text-violet-950 dark:border-violet-800 dark:bg-violet-950/30 dark:text-violet-100"
                    : "border-zinc-200 text-zinc-600 dark:border-zinc-800 dark:text-zinc-300"
                }`}
              >
                <input
                  type="checkbox"
                  checked={answers[question.key]}
                  onChange={() => toggle(question.key)}
                  className="mt-0.5 size-4 shrink-0 accent-violet-700"
                />
                {question.label}
              </label>
            ))}
          </fieldset>
        </div>

        <div className="border-t border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-6 lg:border-l lg:border-t-0">
          <div className="sticky top-24">
            <div className="mb-4 flex items-center justify-between gap-3">
              <span className="rounded-full bg-zinc-900 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white dark:bg-white dark:text-zinc-950">
                {painScore}/8 signaux
              </span>
              <button
                type="button"
                onClick={() => {
                  setAnswers(INITIAL_ANSWERS);
                  setCopyStatus("idle");
                }}
                className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs font-medium text-zinc-500 hover:bg-zinc-200 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:hover:bg-zinc-800 dark:hover:text-white"
              >
                <RotateCcw className="size-3.5" aria-hidden="true" />
                Réinitialiser
              </button>
            </div>

            <div
              className={`rounded-xl border p-4 sm:p-5 ${toneStyles[recommendation.tone]}`}
              aria-live="polite"
              aria-atomic="true"
            >
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] opacity-70">
                {recommendation.label}
              </p>
              <h4 className="m-0 text-base font-bold leading-snug">
                {recommendation.title}
              </h4>
              <p className="mb-0 mt-3 text-sm leading-relaxed opacity-80">
                {recommendation.summary}
              </p>
            </div>

            <div className="mt-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-zinc-500">
                Vos trois prochaines actions
              </p>
              <ol className="m-0 space-y-3 p-0">
                {recommendation.actions.map((action, index) => (
                  <li
                    key={action}
                    className="flex gap-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300"
                  >
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-violet-700 shadow-sm dark:bg-zinc-800 dark:text-violet-300">
                      {index + 1}
                    </span>
                    {action}
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-6 flex flex-col gap-2 sm:flex-row lg:flex-col xl:flex-row">
              <button
                type="button"
                onClick={copyResult}
                className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
              >
                {copyStatus === "copied" ? (
                  <Check className="size-4" aria-hidden="true" />
                ) : (
                  <ClipboardCheck className="size-4" aria-hidden="true" />
                )}
                {copyStatus === "copied"
                  ? "Résultat copié"
                  : "Copier mon résultat"}
              </button>
              <Link
                href="/demarrer-un-projet"
                onClick={() =>
                  trackFunnelEvent("guide_cta_click", {
                    guide: "transformer-excel-en-application",
                    placement: "diagnostic_result",
                    recommendation: recommendation.label,
                    pain_score: painScore,
                  })
                }
                className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-zinc-950 px-4 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
              >
                Faire vérifier mon cas
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>

            <p
              role="status"
              aria-live="polite"
              className={`mb-0 mt-3 min-h-5 text-xs font-medium ${
                copyStatus === "error"
                  ? "text-red-700 dark:text-red-300"
                  : "text-emerald-700 dark:text-emerald-300"
              }`}
            >
              {copyStatus === "copied"
                ? "Le résultat complet, contexte compris, a été copié."
                : copyStatus === "error"
                  ? "La copie a échoué. Autorisez le presse-papiers dans le navigateur, puis réessayez."
                  : ""}
            </p>

            <p className="mb-0 mt-4 text-[11px] leading-relaxed text-zinc-500">
              Les réponses détaillées restent dans votre navigateur. Si un outil
              de mesure est configuré et que vous copiez le résultat ou ouvrez
              le formulaire, seuls l’action, le score total et la recommandation
              peuvent être mesurés — jamais le détail des cases. Ce diagnostic
              oriente une étude ; il ne remplace pas l’examen du fichier, du
              processus et des obligations applicables.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
