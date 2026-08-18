"use client";

import { useState } from "react";
import {
  assessCutoverReadiness,
  createEmptyCutoverAnswers,
  createEmptyCutoverDurations,
  cutoverDurationFields,
  cutoverGates,
  type CutoverAnswers,
  type CutoverDurationId,
  type CutoverDurations,
  type CutoverGateId,
  type CutoverGateStatus,
  type CutoverVerdict,
} from "./cutover-readiness";

const statusOptions: {
  value: CutoverGateStatus;
  label: string;
  help: string;
}[] = [
  {
    value: "unknown",
    label: "Non renseigné",
    help: "Pas encore observé.",
  },
  {
    value: "partial",
    label: "Partiel",
    help: "Présent, mais incomplet.",
  },
  {
    value: "proved",
    label: "Démontré",
    help: "Rejoué et consigné.",
  },
  {
    value: "blocked",
    label: "Bloqué",
    help: "Impossible à exécuter.",
  },
];

const verdictClasses: Record<CutoverVerdict, string> = {
  STOP: "border-red-300 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950/35 dark:text-red-100",
  REPORTER:
    "border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-900 dark:bg-amber-950/35 dark:text-amber-100",
  REDUIRE_PAR_LOTS:
    "border-indigo-300 bg-indigo-50 text-indigo-950 dark:border-indigo-900 dark:bg-indigo-950/35 dark:text-indigo-100",
  BASCULE_ENCADREE:
    "border-emerald-300 bg-emerald-50 text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/35 dark:text-emerald-100",
};

const minuteFormatter = new Intl.NumberFormat("fr-FR", {
  maximumFractionDigits: 1,
});

const percentFormatter = new Intl.NumberFormat("fr-FR", {
  maximumFractionDigits: 1,
});

export function CutoverReadinessTool() {
  const [answers, setAnswers] = useState<CutoverAnswers>(
    createEmptyCutoverAnswers,
  );
  const [durations, setDurations] = useState<CutoverDurations>(
    createEmptyCutoverDurations,
  );
  const assessment = assessCutoverReadiness(answers, durations);

  function updateAnswer(gateId: CutoverGateId, status: CutoverGateStatus) {
    setAnswers((current) => ({ ...current, [gateId]: status }));
  }

  function updateDuration(durationId: CutoverDurationId, rawValue: string) {
    setDurations((current) => ({
      ...current,
      [durationId]: rawValue === "" ? null : Number(rawValue),
    }));
  }

  function reset() {
    setAnswers(createEmptyCutoverAnswers());
    setDurations(createEmptyCutoverDurations());
  }

  const concernedLabels = assessment.concernedGateIds.map(
    (gateId) => cutoverGates.find((gate) => gate.id === gateId)?.label,
  );
  const missingDurationLabels = assessment.missingDurationIds.map(
    (durationId) =>
      cutoverDurationFields.find((field) => field.id === durationId)
        ?.shortLabel,
  );

  return (
    <div className="not-prose my-8 overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="border-b border-zinc-200 bg-zinc-950 px-5 py-6 text-white dark:border-zinc-800 sm:px-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
          Budget de bascule réversible · calcul local
        </p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight">
          Votre fenêtre contient-elle aussi le retour arrière ?
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-300">
          Qualifiez seulement ce qui a été rejoué, puis saisissez la fenêtre
          métier et les quatre durées de la même répétition. Vos réponses
          restent dans cette page : elles ne sont ni envoyées ni enregistrées.
        </p>
      </div>

      <div className="space-y-8 p-4 sm:p-7">
        <section aria-labelledby="cutover-proofs-title">
          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700 dark:text-indigo-300">
              Étape 1 · cinq preuves à démontrer séparément
            </p>
            <h4
              id="cutover-proofs-title"
              className="mt-1 text-lg font-semibold text-zinc-950 dark:text-white"
            >
              Un blocage doit être levé par une nouvelle preuve
            </h4>
          </div>

          <div className="space-y-4">
            {cutoverGates.map((gate, gateIndex) => {
              const helpId = `cutover-gate-${gate.id}-help`;
              return (
                <fieldset
                  key={gate.id}
                  className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800 sm:p-5"
                  aria-describedby={helpId}
                >
                  <legend className="px-1 text-base font-semibold text-zinc-950 dark:text-white">
                    {gateIndex + 1}. {gate.label}
                  </legend>
                  <p
                    id={helpId}
                    className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300"
                  >
                    {gate.question}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                    Preuve attendue : {gate.expectedProof}
                  </p>

                  <div className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
                    {statusOptions.map((option) => {
                      const inputId = `cutover-${gate.id}-${option.value}`;
                      const checked = answers[gate.id] === option.value;

                      return (
                        <label
                          key={option.value}
                          htmlFor={inputId}
                          className={`min-h-20 cursor-pointer rounded-xl border p-3 transition ${
                            checked
                              ? "border-indigo-500 bg-indigo-50 ring-2 ring-indigo-200 dark:border-indigo-400 dark:bg-indigo-950/40 dark:ring-indigo-900"
                              : "border-zinc-200 bg-zinc-50 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <input
                              id={inputId}
                              type="radio"
                              name={`cutover-${gate.id}`}
                              value={option.value}
                              checked={checked}
                              onChange={() =>
                                updateAnswer(gate.id, option.value)
                              }
                              className="size-4 accent-indigo-600"
                            />
                            <span className="text-sm font-semibold text-zinc-950 dark:text-white">
                              {option.label}
                            </span>
                          </span>
                          <span className="mt-1.5 block pl-6 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                            {option.help}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>
              );
            })}
          </div>
        </section>

        <section
          aria-labelledby="cutover-budget-title"
          className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/70 sm:p-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700 dark:text-indigo-300">
            Étape 2 · fenêtre et durées de répétition
          </p>
          <h4
            id="cutover-budget-title"
            className="mt-1 text-lg font-semibold text-zinc-950 dark:text-white"
          >
            Réservez les minutes du retour avant de donner GO
          </h4>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            Ne reprenez pas une durée d’un autre projet. Une case vide, zéro ou
            une valeur négative reste « non mesuré ».
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {cutoverDurationFields.map((field, index) => {
              const inputId = `cutover-duration-${field.id}`;
              const value = durations[field.id];

              return (
                <label
                  key={field.id}
                  htmlFor={inputId}
                  className={
                    index === 0
                      ? "rounded-xl border border-indigo-200 bg-white p-4 dark:border-indigo-900 dark:bg-zinc-950 sm:col-span-2"
                      : "rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
                  }
                >
                  <span className="block text-sm font-semibold text-zinc-950 dark:text-white">
                    {field.label}
                  </span>
                  <span className="mt-1 block min-h-10 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {field.help}
                  </span>
                  <span className="mt-3 flex items-center gap-2">
                    <input
                      id={inputId}
                      type="number"
                      inputMode="decimal"
                      min="0"
                      step="any"
                      value={value ?? ""}
                      onChange={(event) =>
                        updateDuration(field.id, event.currentTarget.value)
                      }
                      aria-label={`${field.label}, en minutes`}
                      className="min-h-11 min-w-0 flex-1 rounded-lg border border-zinc-300 bg-white px-3 text-base text-zinc-950 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:border-indigo-400 dark:focus:ring-indigo-900"
                    />
                    <span className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
                      min
                    </span>
                  </span>
                </label>
              );
            })}
          </div>
        </section>

        {assessment.budget && (
          <section
            aria-label="Détail du budget en minutes"
            className="grid gap-3 rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800 sm:grid-cols-3 sm:p-5"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Temps requis
              </p>
              <p className="mt-1 text-xl font-semibold tabular-nums text-zinc-950 dark:text-white">
                {minuteFormatter.format(assessment.budget.requiredMinutes)} min
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Fenêtre
              </p>
              <p className="mt-1 text-xl font-semibold tabular-nums text-zinc-950 dark:text-white">
                {minuteFormatter.format(assessment.budget.windowMinutes)} min
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Marge
              </p>
              <p className="mt-1 text-xl font-semibold tabular-nums text-zinc-950 dark:text-white">
                {minuteFormatter.format(assessment.budget.marginMinutes)} min
                <span className="ml-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  (
                  {percentFormatter.format(assessment.budget.marginRatePercent)}
                  %)
                </span>
              </p>
            </div>
          </section>
        )}

        <output
          aria-live="polite"
          className={`block rounded-2xl border p-5 sm:p-6 ${verdictClasses[assessment.verdict]}`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] opacity-75">
            Verdict le plus prudent
          </p>
          <p className="mt-2 text-xl font-semibold">{assessment.title}</p>
          <p className="mt-2 text-sm leading-relaxed">
            {assessment.explanation}
          </p>
          {concernedLabels.length > 0 && (
            <p className="mt-3 text-sm">
              <strong>Preuves concernées :</strong> {concernedLabels.join(", ")}
              .
            </p>
          )}
          {missingDurationLabels.length > 0 && (
            <p className="mt-3 text-sm">
              <strong>Durées non mesurées :</strong>{" "}
              {missingDurationLabels.join(", ")}.
            </p>
          )}
          <p className="mt-3 text-sm leading-relaxed">
            <strong>Prochaine action :</strong> {assessment.nextAction}
          </p>
        </output>

        <div className="flex flex-col gap-3 border-t border-zinc-200 pt-5 dark:border-zinc-800 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
            Cet outil aide à préparer une revue. Il ne remplace ni la
            répétition, ni l’audit, ni les validations métier, sécurité,
            données, contractuelles ou juridiques du cas réel.
          </p>
          <button
            type="button"
            onClick={reset}
            className="min-h-11 shrink-0 rounded-xl border border-zinc-300 px-4 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900"
          >
            Tout effacer
          </button>
        </div>
      </div>
    </div>
  );
}
