"use client";

import { useState } from "react";
import {
  acceptanceGates,
  assessAcceptanceReadiness,
  campaignFactFields,
  createEmptyAcceptanceGates,
  createEmptyCampaignFacts,
  type AcceptanceGateId,
  type AcceptanceGates,
  type AcceptanceGateStatus,
  type AcceptanceVerdict,
  type CampaignFactId,
  type CampaignFacts,
} from "./acceptance-readiness";

const statusOptions: {
  value: AcceptanceGateStatus;
  label: string;
  help: string;
}[] = [
  {
    value: "unknown",
    label: "Non renseigné",
    help: "Le point n’est pas encore décrit.",
  },
  {
    value: "partial",
    label: "Partiel",
    help: "Le point existe, mais il n’est pas encore assez précis pour être vérifié.",
  },
  {
    value: "ready",
    label: "Prêt",
    help: "Le point est explicite, observable et vérifiable.",
  },
  {
    value: "blocked",
    label: "Bloqué",
    help: "Le point ne peut pas être préparé ou exécuté dans l’état.",
  },
];

const verdictClasses: Record<AcceptanceVerdict, string> = {
  STOP_PREPARATION:
    "border-red-300 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950/35 dark:text-red-100",
  REWRITE_CASE:
    "border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-900 dark:bg-amber-950/35 dark:text-amber-100",
  COMPLETE_CASE:
    "border-orange-300 bg-orange-50 text-orange-950 dark:border-orange-900 dark:bg-orange-950/35 dark:text-orange-100",
  MEASURE_CAMPAIGN:
    "border-blue-300 bg-blue-50 text-blue-950 dark:border-blue-900 dark:bg-blue-950/35 dark:text-blue-100",
  FIX_BEFORE_DECISION:
    "border-rose-300 bg-rose-50 text-rose-950 dark:border-rose-900 dark:bg-rose-950/35 dark:text-rose-100",
  REVIEW_RESIDUAL_RISK:
    "border-violet-300 bg-violet-50 text-violet-950 dark:border-violet-900 dark:bg-violet-950/35 dark:text-violet-100",
  CANDIDATE_FOR_ACCEPTANCE:
    "border-emerald-300 bg-emerald-50 text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/35 dark:text-emerald-100",
};

export function AcceptanceReadinessTool() {
  const [gates, setGates] = useState<AcceptanceGates>(
    createEmptyAcceptanceGates,
  );
  const [facts, setFacts] = useState<CampaignFacts>(createEmptyCampaignFacts);
  const assessment = assessAcceptanceReadiness(gates, facts);

  function updateGate(gateId: AcceptanceGateId, status: AcceptanceGateStatus) {
    setGates((current) => ({ ...current, [gateId]: status }));
  }

  function updateFact(factId: CampaignFactId, rawValue: string) {
    setFacts((current) => ({
      ...current,
      [factId]: rawValue === "" ? null : Number(rawValue),
    }));
  }

  function reset() {
    setGates(createEmptyAcceptanceGates());
    setFacts(createEmptyCampaignFacts());
  }

  const concernedGateLabels = assessment.concernedGateIds.map(
    (gateId) =>
      acceptanceGates.find((gate) => gate.id === gateId)?.label ?? gateId,
  );
  const concernedFactLabels = assessment.concernedFactIds.map(
    (factId) =>
      campaignFactFields.find((field) => field.id === factId)?.shortLabel ??
      factId,
  );

  return (
    <div className="not-prose my-8 overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="border-b border-zinc-200 bg-zinc-950 px-5 py-6 text-white dark:border-zinc-800 sm:px-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
          Chaîne de preuve de recette · outil local
        </p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight">
          Votre dossier peut-il être soumis au décideur ?
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-300">
          Relisez un cas et les règles de décision, puis saisissez uniquement
          les nombres de la campagne. N’entrez aucun nom, contenu métier ou
          donnée personnelle : vos réponses restent dans cette page,{" "}
          {"elles ne sont ni envoyées ni enregistrées"}.
        </p>
      </div>

      <div className="space-y-9 px-5 py-6 sm:px-7 sm:py-8">
        <fieldset>
          <legend className="text-lg font-semibold text-zinc-950 dark:text-white">
            1. Relire le cas et les deux garde-fous de campagne
          </legend>
          <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            Les six premiers points rendent le cas rejouable. Les deux derniers
            vérifient les critères de sortie et l’autorité réelle de décision.
            Choisissez l’état constaté. Une réponse favorable ne compense jamais
            une information manquante.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {acceptanceGates.map((gate, index) => {
              const selectId = `acceptance-gate-${gate.id}`;
              const selectedOption = statusOptions.find(
                ({ value }) => value === gates[gate.id],
              );

              return (
                <div
                  key={gate.id}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-4 dark:border-zinc-800 dark:bg-zinc-900/60"
                >
                  <label
                    htmlFor={selectId}
                    className="block text-sm font-semibold text-zinc-950 dark:text-white"
                  >
                    <span className="mr-2 text-xs text-zinc-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {gate.label}
                  </label>
                  <p className="mt-1 min-h-10 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {gate.question}
                  </p>
                  <select
                    id={selectId}
                    value={gates[gate.id]}
                    onChange={(event) =>
                      updateGate(
                        gate.id,
                        event.target.value as AcceptanceGateStatus,
                      )
                    }
                    className="mt-3 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                  >
                    {statusOptions.map((option) => (
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
            2. Décrire l’état de la campagne
          </legend>
          <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            Utilisez des entiers issus du même relevé. Zéro signifie que le
            compteur a été vérifié ; laissez vide lorsque vous ne savez pas.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {campaignFactFields.map((field) => {
              const inputId = `campaign-fact-${field.id}`;

              return (
                <div
                  key={field.id}
                  className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800"
                >
                  <label
                    htmlFor={inputId}
                    className="block text-sm font-semibold text-zinc-950 dark:text-white"
                  >
                    {field.label}
                  </label>
                  <p className="mt-1 min-h-10 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {field.help}
                  </p>
                  <input
                    id={inputId}
                    type="number"
                    inputMode="numeric"
                    min={field.minimum}
                    step="1"
                    value={facts[field.id] ?? ""}
                    onChange={(event) =>
                      updateFact(field.id, event.target.value)
                    }
                    placeholder="Non renseigné"
                    className="mt-3 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm tabular-nums text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
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
            Résultat de préparation
          </p>
          <h4 className="mt-2 text-xl font-semibold">{assessment.title}</h4>
          <p className="mt-3 text-sm leading-relaxed">
            {assessment.explanation}
          </p>

          {(concernedGateLabels.length > 0 ||
            concernedFactLabels.length > 0) && (
            <div className="mt-4 rounded-xl border border-current/15 bg-white/45 p-4 dark:bg-black/10">
              <p className="text-xs font-semibold uppercase tracking-wide opacity-70">
                Points concernés
              </p>
              <ul className="mt-2 space-y-1 text-sm">
                {[...concernedGateLabels, ...concernedFactLabels].map(
                  (label) => (
                    <li key={label}>• {label}</li>
                  ),
                )}
              </ul>
            </div>
          )}

          {assessment.remainingCriticalCases !== null && (
            <p className="mt-4 text-sm tabular-nums">
              Cas critiques restant à prouver :{" "}
              <strong>{assessment.remainingCriticalCases}</strong>
            </p>
          )}

          <p className="mt-4 text-sm leading-relaxed">
            <strong>Prochaine action :</strong> {assessment.nextAction}
          </p>
        </section>

        <div className="flex flex-col gap-3 border-t border-zinc-200 pt-5 dark:border-zinc-800 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
            Cet outil prépare une revue. Il ne remplace ni les tests du logiciel
            réel, ni un audit de sécurité ou d’accessibilité, ni la lecture des
            documents contractuels. Une alerte de sécurité, juridique ou
            d’intégrité déjà connue suit immédiatement son circuit d’escalade,
            quel que soit le résultat affiché.
          </p>
          <button
            type="button"
            onClick={reset}
            className="shrink-0 rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900"
          >
            Réinitialiser
          </button>
        </div>
      </div>
    </div>
  );
}
