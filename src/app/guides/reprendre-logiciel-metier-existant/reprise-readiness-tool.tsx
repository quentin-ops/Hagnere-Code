"use client";

import { useState } from "react";
import {
  assessRepriseReadiness,
  createEmptyRepriseAnswers,
  repriseGates,
  type RepriseAnswers,
  type RepriseGateId,
  type RepriseGateStatus,
  type RepriseVerdict,
} from "./reprise-readiness";

const statusOptions: {
  value: RepriseGateStatus;
  label: string;
  help: string;
}[] = [
  {
    value: "unknown",
    label: "Non renseigné",
    help: "Aucune démonstration observée.",
  },
  {
    value: "partial",
    label: "Partiel",
    help: "Élément présent, mais preuve incomplète.",
  },
  {
    value: "proved",
    label: "Démontré",
    help: "Démonstration rejouée et preuve datée.",
  },
  {
    value: "blocked",
    label: "Bloqué",
    help: "Accès, droit ou dépendance indisponible.",
  },
];

const verdictClasses: Record<RepriseVerdict, string> = {
  STOP: "border-red-300 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950/35 dark:text-red-100",
  REPORTER:
    "border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-900 dark:bg-amber-950/35 dark:text-amber-100",
  REPRISE_LIMITEE:
    "border-indigo-300 bg-indigo-50 text-indigo-950 dark:border-indigo-900 dark:bg-indigo-950/35 dark:text-indigo-100",
  BASCULE_ENCADREE:
    "border-emerald-300 bg-emerald-50 text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/35 dark:text-emerald-100",
};

export function RepriseReadinessTool() {
  const [answers, setAnswers] = useState<RepriseAnswers>(
    createEmptyRepriseAnswers,
  );
  const assessment = assessRepriseReadiness(answers);

  function updateAnswer(gateId: RepriseGateId, status: RepriseGateStatus) {
    setAnswers((current) => ({ ...current, [gateId]: status }));
  }

  function reset() {
    setAnswers(createEmptyRepriseAnswers());
  }

  const concernedLabels = assessment.concernedGateIds.map(
    (gateId) => repriseGates.find((gate) => gate.id === gateId)?.label,
  );

  return (
    <div className="not-prose my-8 overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="border-b border-zinc-200 bg-zinc-950 px-5 py-6 text-white dark:border-zinc-800 sm:px-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
          Test de relève local · réponses non transmises
        </p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight">
          La nouvelle équipe peut-elle prendre la relève ?
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-300">
          Qualifiez uniquement ce qui a été démontré. N’inscrivez ni nom, mot de
          passe, secret, donnée personnelle ou information confidentielle :
          l’outil n’en a pas besoin.
        </p>
      </div>

      <div className="space-y-5 p-4 sm:p-7">
        {repriseGates.map((gate, gateIndex) => {
          const helpId = `reprise-gate-${gate.id}-help`;
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
                  const inputId = `reprise-${gate.id}-${option.value}`;
                  const checked = answers[gate.id] === option.value;
                  return (
                    <label
                      key={option.value}
                      htmlFor={inputId}
                      className={`min-h-24 cursor-pointer rounded-xl border p-3 transition ${
                        checked
                          ? "border-indigo-500 bg-indigo-50 ring-2 ring-indigo-200 dark:border-indigo-400 dark:bg-indigo-950/40 dark:ring-indigo-900"
                          : "border-zinc-200 bg-zinc-50 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <input
                          id={inputId}
                          type="radio"
                          name={`reprise-${gate.id}`}
                          value={option.value}
                          checked={checked}
                          onChange={() => updateAnswer(gate.id, option.value)}
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

        <output
          aria-live="polite"
          className={`block rounded-2xl border p-5 sm:p-6 ${verdictClasses[assessment.verdict]}`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] opacity-75">
            Résultat le plus prudent
          </p>
          <p className="mt-2 text-xl font-semibold">{assessment.title}</p>
          <p className="mt-2 text-sm leading-relaxed">
            {assessment.explanation}
          </p>
          {concernedLabels.length > 0 && (
            <p className="mt-3 text-sm">
              <strong>Points concernés :</strong> {concernedLabels.join(", ")}.
            </p>
          )}
          <p className="mt-3 text-sm leading-relaxed">
            <strong>Prochaine action :</strong> {assessment.nextAction}
          </p>
        </output>

        <div className="flex flex-col gap-3 border-t border-zinc-200 pt-5 dark:border-zinc-800 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
            Ce test de relève oriente la prochaine étape. Il ne vaut ni audit,
            ni avis juridique, ni certification de sécurité ou de conformité.
          </p>
          <button
            type="button"
            onClick={reset}
            className="min-h-11 shrink-0 rounded-xl border border-zinc-300 px-4 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900"
          >
            Réinitialiser
          </button>
        </div>
      </div>
    </div>
  );
}
