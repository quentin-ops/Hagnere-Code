"use client";

import { useState } from "react";
import {
  assessProviderEvidence,
  costFields,
  createEmptyCandidateEvidence,
  createEmptyCostBreakdown,
  evidenceCriteria,
  type CandidateEvidence,
  type CostBreakdown,
  type CostFieldId,
  type EvidenceCriterionId,
  type EvidenceLevel,
  type ProviderVerdict,
} from "./provider-evidence";

const levelOptions: {
  value: EvidenceLevel;
  label: string;
  help: string;
}[] = [
  {
    value: "unknown",
    label: "Inconnu",
    help: "Aucune réponse exploitable n’est disponible.",
  },
  {
    value: "verbal",
    label: "Réponse orale",
    help: "Le point a été discuté, mais il n’engage pas encore la proposition.",
  },
  {
    value: "written",
    label: "Écrit vérifiable",
    help: "Le point figure dans une proposition, une annexe ou un autre document identifié.",
  },
  {
    value: "written_and_observed",
    label: "Écrit + observé",
    help: "Le point est écrit et le candidat a aussi montré sa méthode sur la même situation fictive que les autres.",
  },
  {
    value: "blocker",
    label: "STOP / condition inacceptable",
    help: "La réponse est incompatible avec une condition qui ne peut pas être compensée.",
  },
];

const verdictClasses: Record<ProviderVerdict, string> = {
  STOP_CANDIDATE:
    "border-red-300 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950/35 dark:text-red-100",
  CLARIFY_UNKNOWN:
    "border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-900 dark:bg-amber-950/35 dark:text-amber-100",
  REQUEST_WRITTEN_PROOF:
    "border-orange-300 bg-orange-50 text-orange-950 dark:border-orange-900 dark:bg-orange-950/35 dark:text-orange-100",
  RUN_COMMON_CASE:
    "border-blue-300 bg-blue-50 text-blue-950 dark:border-blue-900 dark:bg-blue-950/35 dark:text-blue-100",
  NORMALIZE_COSTS:
    "border-violet-300 bg-violet-50 text-violet-950 dark:border-violet-900 dark:bg-violet-950/35 dark:text-violet-100",
  CANDIDATE_FOR_DECISION:
    "border-emerald-300 bg-emerald-50 text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/35 dark:text-emerald-100",
};

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function ProviderEvidenceTool() {
  const [evidence, setEvidence] = useState<CandidateEvidence>(
    createEmptyCandidateEvidence,
  );
  const [costs, setCosts] = useState<CostBreakdown>(createEmptyCostBreakdown);
  const assessment = assessProviderEvidence(evidence, costs);

  function updateEvidence(
    criterionId: EvidenceCriterionId,
    level: EvidenceLevel,
  ) {
    setEvidence((current) => ({ ...current, [criterionId]: level }));
  }

  function updateCost(costId: CostFieldId, rawValue: string) {
    setCosts((current) => ({
      ...current,
      [costId]: rawValue === "" ? null : Number(rawValue),
    }));
  }

  function reset() {
    setEvidence(createEmptyCandidateEvidence());
    setCosts(createEmptyCostBreakdown());
  }

  const concernedCriterionLabels = assessment.concernedCriteria.map(
    (criterionId) =>
      evidenceCriteria.find(({ id }) => id === criterionId)?.label ??
      criterionId,
  );
  const concernedCostLabels = assessment.concernedCosts.map(
    (costId) => costFields.find(({ id }) => id === costId)?.label ?? costId,
  );

  return (
    <div className="not-prose my-8 overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="border-b border-zinc-200 bg-zinc-950 px-5 py-6 text-white dark:border-zinc-800 sm:px-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
          Relecture d’un dossier · outil local
        </p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight">
          Ce dossier est-il assez documenté pour être comparé ?
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-300">
          Relisez un seul candidat à la fois, puis recommencez avec le suivant
          sur la même période et le même résultat attendu. Ne saisissez ni nom,
          ni information métier, ni donnée personnelle : les réponses restent
          dans cette page et ne sont pas envoyées.
        </p>
      </div>

      <div className="space-y-9 px-5 py-6 sm:px-7 sm:py-8">
        <fieldset>
          <legend className="text-lg font-semibold text-zinc-950 dark:text-white">
            1. Situer les huit points non compensables
          </legend>
          <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            « Écrit vérifiable » signifie que la réponse apparaît dans la
            proposition, une annexe ou un document identifié. « Écrit + observé
            » conserve cette trace et ajoute le travail sur le cas fictif commun
            ; cela ne garantit pas le projet.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {evidenceCriteria.map((criterion, index) => {
              const selectId = `provider-evidence-${criterion.id}`;
              const selectedOption = levelOptions.find(
                ({ value }) => value === evidence[criterion.id],
              );

              return (
                <div
                  key={criterion.id}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-4 dark:border-zinc-800 dark:bg-zinc-900/60"
                >
                  <label
                    htmlFor={selectId}
                    className="block text-sm font-semibold text-zinc-950 dark:text-white"
                  >
                    <span className="mr-2 text-xs text-zinc-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {criterion.label}
                  </label>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {criterion.question}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                    <strong>Trace attendue :</strong> {criterion.expectedProof}.
                  </p>
                  <select
                    id={selectId}
                    value={evidence[criterion.id]}
                    onChange={(event) =>
                      updateEvidence(
                        criterion.id,
                        event.target.value as EvidenceLevel,
                      )
                    }
                    className="mt-3 min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-3 text-base sm:text-sm text-zinc-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                  >
                    {levelOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
                    {selectedOption?.help}
                  </p>
                </div>
              );
            })}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-lg font-semibold text-zinc-950 dark:text-white">
            2. Additionner les seuls coûts connus
          </legend>
          <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            Utilisez des montants hors taxes portant sur la même période. Zéro
            signifie que l’absence de coût a été vérifiée ; laissez vide
            lorsqu’un montant n’est pas écrit. Le total n’inclut pas le temps
            interne, une option écartée ou un coût encore inconnu.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {costFields.map((field) => {
              const inputId = `provider-cost-${field.id}`;

              return (
                <div
                  key={field.id}
                  className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800"
                >
                  <label
                    htmlFor={inputId}
                    className="block text-sm font-semibold text-zinc-950 dark:text-white"
                  >
                    {field.label} · € HT
                  </label>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {field.help}
                  </p>
                  <input
                    id={inputId}
                    type="number"
                    inputMode="decimal"
                    min="0"
                    max="1000000000"
                    step="0.01"
                    value={costs[field.id] ?? ""}
                    onChange={(event) =>
                      updateCost(field.id, event.target.value)
                    }
                    placeholder="Inconnu"
                    className="mt-3 min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-3 text-base sm:text-sm tabular-nums text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                  />
                </div>
              );
            })}
          </div>
        </fieldset>

        <section
          aria-live="polite"
          aria-atomic="true"
          className={`rounded-2xl border p-5 sm:p-6 ${
            verdictClasses[assessment.verdict]
          }`}
        >
          <p className="text-xs font-bold uppercase tracking-[0.16em] opacity-70">
            État du dossier
          </p>
          <h4 className="mt-2 text-xl font-semibold">{assessment.title}</h4>
          <p className="mt-3 text-sm leading-relaxed">
            {assessment.explanation}
          </p>

          {(concernedCriterionLabels.length > 0 ||
            concernedCostLabels.length > 0) && (
            <div className="mt-4 rounded-xl border border-current/15 bg-white/45 p-4 dark:bg-black/10">
              <p className="text-xs font-semibold uppercase tracking-wide opacity-70">
                Points à reprendre
              </p>
              <ul className="mt-2 space-y-1 text-sm">
                {[...concernedCriterionLabels, ...concernedCostLabels].map(
                  (label) => (
                    <li key={label}>• {label}</li>
                  ),
                )}
              </ul>
            </div>
          )}

          {assessment.knownCostTotal !== null && (
            <p className="mt-4 text-sm tabular-nums">
              Total des quatre postes connus :{" "}
              <strong>{formatCurrency(assessment.knownCostTotal)} HT</strong>
            </p>
          )}

          <p className="mt-4 text-sm leading-relaxed">
            <strong>Prochaine action :</strong> {assessment.nextAction}
          </p>
        </section>

        <div className="flex flex-col gap-3 border-t border-zinc-200 pt-5 dark:border-zinc-800 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
            Cet outil signale ce qu’il reste à vérifier. Il ne certifie pas un
            prestataire. Il ne classe pas une agence contre un freelance et ne
            remplace ni la négociation, ni l’analyse contractuelle, ni l’examen
            des risques de données et de sécurité.
          </p>
          <button
            type="button"
            onClick={reset}
            className="min-h-11 shrink-0 rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm font-semibold text-zinc-800 transition motion-reduce:transition-none hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900"
          >
            Réinitialiser
          </button>
        </div>
      </div>
    </div>
  );
}
