"use client";

import { useMemo, useState } from "react";
import {
  MAX_SAFE_OBSERVED_MINUTES,
  WORKLOAD_ROUNDING_NOTE,
  buildDecisionDossier,
  createEmptyDecisionInputs,
  decisionOptionLabels,
  evaluateDecision,
  periodLabels,
  proofQuestions,
  proofStateLabels,
  type DecisionInputs,
  type DecisionOption,
  type ObservedPeriod,
  type ProofKey,
  type ProofState,
  type WorkloadInputs,
} from "./back-office-decision-model";

const controlClassName =
  "mt-2 min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/25 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white";

const proofGroups: Array<{
  title: string;
  description: string;
  keys: ProofKey[];
}> = [
  {
    title: "Travail et alternatives",
    description:
      "Observez la tâche, puis confrontez l’outil ou le processus actuel et le standard au même contrat d’écran.",
    keys: [
      "taskObserved",
      "processStable",
      "existingOptionTested",
      "existingCoversContract",
      "standardTested",
      "standardCoversContract",
      "boundaryIsolable",
    ],
  },
  {
    title: "Responsabilités, droits et continuité",
    description:
      "Nommez qui décide, qui soutient l’outil, qui accède aux données et comment l’activité continue en cas d’échec.",
    keys: [
      "businessOwnerNamed",
      "supportOwnerNamed",
      "rightsDataExportQualified",
      "criticalFallbackTested",
    ],
  },
  {
    title: "Coût, contrat, traces et sortie",
    description:
      "Qualifiez le coût total, le contrat, les traces et la réversibilité avant de choisir.",
    keys: [
      "tcoAndHorizonDocumented",
      "contractAndExitReviewed",
      "monitoringPurposeQualified",
    ],
  },
];

const statusLabels = {
  AVAILABLE: "Compatible avec les preuves saisies",
  TO_TEST: "Preuves encore à produire",
  CONTRADICTED: "Contredite par les preuves saisies",
} as const;

function cloneInputs(inputs: DecisionInputs): DecisionInputs {
  return {
    evidence: { ...inputs.evidence },
    workload: { ...inputs.workload },
    selectedOption: inputs.selectedOption,
  };
}

function parseNumber(value: string): number | null {
  return value.trim() === "" ? null : Number(value);
}

function ProofSelect({
  proofKey,
  value,
  onChange,
}: {
  proofKey: ProofKey;
  value: ProofState;
  onChange: (value: ProofState) => void;
}) {
  const proof = proofQuestions.find((question) => question.key === proofKey);
  if (!proof) return null;
  const id = `back-office-proof-${proof.key}`;

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
      <label
        htmlFor={id}
        className="block text-sm font-semibold leading-snug text-zinc-950 dark:text-white"
      >
        {proof.number}. {proof.label}
      </label>
      <p
        id={`${id}-help`}
        className="mt-1.5 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300"
      >
        {proof.question}
      </p>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value as ProofState)}
        className={controlClassName}
        aria-describedby={`${id}-help`}
      >
        {(Object.keys(proofStateLabels) as ProofState[]).map((state) => (
          <option key={state} value={state}>
            {proofStateLabels[state]}
          </option>
        ))}
      </select>
    </div>
  );
}

function NumberField({
  id,
  label,
  help,
  value,
  integer = false,
  max = Number.MAX_SAFE_INTEGER,
  onChange,
}: {
  id: string;
  label: string;
  help: string;
  value: number | null;
  integer?: boolean;
  max?: number;
  onChange: (value: number | null) => void;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-sm font-semibold text-zinc-950 dark:text-white"
      >
        {label}
      </label>
      <input
        id={id}
        type="number"
        inputMode="decimal"
        min="0"
        max={max}
        step={integer ? "1" : "0.1"}
        value={value === null ? "" : String(value)}
        onChange={(event) => onChange(parseNumber(event.target.value))}
        className={controlClassName}
        aria-describedby={`${id}-help`}
      />
      <p
        id={`${id}-help`}
        className="mt-1.5 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400"
      >
        {help}
      </p>
    </div>
  );
}

export interface BackOfficeDecisionWorkbenchProps {
  initialInputs?: DecisionInputs;
}

export function BackOfficeDecisionWorkbench({
  initialInputs,
}: BackOfficeDecisionWorkbenchProps = {}) {
  const [inputs, setInputs] = useState(() =>
    cloneInputs(initialInputs ?? createEmptyDecisionInputs()),
  );
  const [copyMessage, setCopyMessage] = useState("");
  const result = useMemo(() => evaluateDecision(inputs), [inputs]);
  const dossier = useMemo(
    () => buildDecisionDossier(inputs, result),
    [inputs, result],
  );

  function updateEvidence(key: ProofKey, value: ProofState) {
    setInputs((current) => ({
      ...current,
      evidence: { ...current.evidence, [key]: value },
    }));
  }

  function updateWorkload<K extends keyof WorkloadInputs>(
    key: K,
    value: WorkloadInputs[K],
  ) {
    setInputs((current) => ({
      ...current,
      workload: { ...current.workload, [key]: value },
    }));
  }

  async function copyDossier() {
    try {
      await navigator.clipboard.writeText(dossier);
      setCopyMessage("Dossier copié dans le presse-papiers.");
    } catch {
      setCopyMessage(
        "Copie impossible dans ce navigateur. Ouvrez le dossier texte et sélectionnez-le manuellement.",
      );
    }
  }

  return (
    <section
      className="not-prose my-9 overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
      aria-label="Atelier local de décision pour un back-office de PME"
      data-back-office-workbench="true"
      data-read-time-exclude="true"
    >
      <style>{`
        @page {
          size: A4;
          margin: 10mm;
        }
        @media print {
          [data-back-office-workbench="true"] details > * {
            display: block !important;
          }
          [data-back-office-workbench="true"] [data-back-office-dossier="true"] {
            max-height: none !important;
            overflow: visible !important;
            white-space: pre-wrap !important;
          }
          [data-back-office-workbench="true"] button {
            display: none !important;
          }
        }
      `}</style>

      <header className="border-b border-zinc-200 bg-white px-5 py-6 dark:border-zinc-800 dark:bg-zinc-950 sm:px-7">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-300">
          Atelier local · aucune donnée envoyée
        </p>
        <h3 className="mt-2 text-xl font-bold text-zinc-950 dark:text-white sm:text-2xl">
          Mettre cinq options à l’épreuve, sans score caché
        </h3>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          Saisissez des faits observés. Zéro est une valeur valable ; une case
          vide reste inconnue. L’atelier calcule seulement la charge active et
          la reprise. Il ne choisit jamais une solution à votre place et ne
          transforme pas des minutes en euros.
        </p>
      </header>

      <div className="space-y-9 px-5 py-6 sm:px-7 sm:py-8">
        <section aria-labelledby="back-office-workload-title">
          <h4
            id="back-office-workload-title"
            className="text-base font-bold text-zinc-950 dark:text-white"
          >
            1. Mesurer une période réelle
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            Séparez le temps où une personne agit de l’attente d’un tiers ou
            d’un système. Les quatre champs numériques portent leurs unités ; ne
            les remplissez pas par estimation silencieuse.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            <div>
              <label
                htmlFor="back-office-period"
                className="text-sm font-semibold text-zinc-950 dark:text-white"
              >
                Période observée
              </label>
              <select
                id="back-office-period"
                className={controlClassName}
                value={inputs.workload.period}
                onChange={(event) =>
                  updateWorkload("period", event.target.value as ObservedPeriod)
                }
              >
                {(Object.keys(periodLabels) as ObservedPeriod[]).map(
                  (period) => (
                    <option key={period} value={period}>
                      {periodLabels[period]}
                    </option>
                  ),
                )}
              </select>
            </div>
            <NumberField
              id="back-office-case-count"
              label="Nombre de cas"
              help="Dossiers traités sur la période. Entier, zéro admis."
              value={inputs.workload.caseCount}
              integer
              onChange={(value) => updateWorkload("caseCount", value)}
            />
            <NumberField
              id="back-office-active-minutes"
              label="Minutes actives / cas"
              help="Temps humain actif moyen, hors attente. Pas de 0,1 minute."
              value={inputs.workload.activeMinutesPerCase}
              max={MAX_SAFE_OBSERVED_MINUTES}
              onChange={(value) =>
                updateWorkload("activeMinutesPerCase", value)
              }
            />
            <NumberField
              id="back-office-recovery-count"
              label="Cas en reprise"
              help="Cas ayant exigé correction ou réparation. Entier inférieur ou égal au nombre total de cas."
              value={inputs.workload.recoveryCaseCount}
              integer
              onChange={(value) => updateWorkload("recoveryCaseCount", value)}
            />
            <NumberField
              id="back-office-recovery-minutes"
              label="Minutes / reprise"
              help="Temps humain actif pour une reprise. Pas de 0,1 minute."
              value={inputs.workload.recoveryMinutesPerCase}
              max={MAX_SAFE_OBSERVED_MINUTES}
              onChange={(value) =>
                updateWorkload("recoveryMinutesPerCase", value)
              }
            />
          </div>
          <label className="mt-4 flex min-h-11 cursor-pointer items-start gap-3 rounded-xl border border-zinc-200 bg-white p-3 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
            <input
              id="back-office-recovery-included"
              type="checkbox"
              className="mt-0.5 size-5 accent-indigo-600"
              checked={inputs.workload.recoveryAlreadyIncluded}
              onChange={(event) =>
                updateWorkload("recoveryAlreadyIncluded", event.target.checked)
              }
            />
            <span>
              Le temps de reprise est déjà inclus dans les minutes actives. Il
              restera visible, mais ne sera pas additionné une seconde fois.
            </span>
          </label>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              ["Charge active", result.workload.activeMinutes],
              ["Charge de reprise", result.workload.recoveryMinutes],
              ["Charge totale observée", result.workload.totalObservedMinutes],
            ].map(([label, value]) => (
              <div
                key={String(label)}
                className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                  {label}
                </p>
                <p className="mt-1 text-lg font-bold tabular-nums text-zinc-950 dark:text-white">
                  {typeof value === "number" ? `${value} min` : "À vérifier"}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
            {result.workload.explanation}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
            {WORKLOAD_ROUNDING_NOTE}
          </p>
        </section>

        <section aria-labelledby="back-office-proof-title">
          <h4
            id="back-office-proof-title"
            className="text-base font-bold text-zinc-950 dark:text-white"
          >
            2. Qualifier les preuves qui changent la décision
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            « Oui » suppose une preuve consultable. « Non » décrit un test qui
            contredit le point. « À vérifier » suspend toute conclusion que ce
            point pourrait modifier.
          </p>
          <div className="mt-5 space-y-7">
            {proofGroups.map((group) => (
              <div key={group.title}>
                <h5 className="text-sm font-bold text-zinc-950 dark:text-white">
                  {group.title}
                </h5>
                <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {group.description}
                </p>
                <div className="mt-3 grid gap-3 lg:grid-cols-2">
                  {group.keys.map((key) => (
                    <ProofSelect
                      key={key}
                      proofKey={key}
                      value={inputs.evidence[key]}
                      onChange={(value) => updateEvidence(key, value)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <fieldset>
          <legend className="text-base font-bold text-zinc-950 dark:text-white">
            3. Choisir manuellement une issue à vérifier
          </legend>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            Le choix ne vient ni d’un score, ni du volume, ni d’un seuil de
            coût. Vous pouvez aussi ne rien sélectionner tant que les
            responsables n’ont pas relu le dossier.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {(Object.keys(decisionOptionLabels) as DecisionOption[]).map(
              (option) => (
                <label
                  key={option}
                  className="flex min-h-14 cursor-pointer items-start gap-3 rounded-xl border border-zinc-200 bg-white p-4 text-sm font-semibold text-zinc-900 transition focus-within:ring-2 focus-within:ring-indigo-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                >
                  <input
                    type="radio"
                    name="back-office-selected-option"
                    value={option}
                    checked={inputs.selectedOption === option}
                    onChange={() =>
                      setInputs((current) => ({
                        ...current,
                        selectedOption: option,
                      }))
                    }
                    className="mt-0.5 size-5 accent-indigo-600"
                  />
                  <span>{decisionOptionLabels[option]}</span>
                </label>
              ),
            )}
          </div>
          <button
            type="button"
            className="mt-3 min-h-11 rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 hover:border-indigo-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
            onClick={() =>
              setInputs((current) => ({ ...current, selectedOption: null }))
            }
          >
            Ne choisir aucune option pour l’instant
          </button>
        </fieldset>

        <section
          aria-labelledby="back-office-result-title"
          className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5 dark:border-indigo-900 dark:bg-indigo-950/40 sm:p-6"
          role="status"
          aria-live="polite"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-indigo-700 dark:text-indigo-300">
            Lecture transparente des preuves
          </p>
          <h4
            id="back-office-result-title"
            className="mt-2 text-xl font-bold text-zinc-950 dark:text-white"
          >
            {result.label}
          </h4>
          {result.reasons.length > 0 && (
            <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
              {result.reasons.map((reason) => (
                <li key={reason}>• {reason}</li>
              ))}
            </ul>
          )}

          {(result.criticalUnknowns.length > 0 ||
            result.blockingFacts.length > 0 ||
            result.inputErrors.length > 0) && (
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-sm font-semibold text-zinc-950 dark:text-white">
                  Preuves manquantes
                </p>
                <ul className="mt-2 space-y-1 text-xs leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {result.criticalUnknowns.slice(0, 8).map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                  {result.criticalUnknowns.length === 0 && <li>• Aucune</li>}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-950 dark:text-white">
                  Faits bloquants
                </p>
                <ul className="mt-2 space-y-1 text-xs leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {result.blockingFacts.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                  {result.blockingFacts.length === 0 && <li>• Aucun</li>}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-950 dark:text-white">
                  Saisies à corriger
                </p>
                <ul className="mt-2 space-y-1 text-xs leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {result.inputErrors.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                  {result.inputErrors.length === 0 && <li>• Aucune</li>}
                </ul>
              </div>
            </div>
          )}
        </section>

        <section aria-labelledby="back-office-five-options-title">
          <h4
            id="back-office-five-options-title"
            className="text-base font-bold text-zinc-950 dark:text-white"
          >
            4. Lire les cinq sorties sans classement automatique
          </h4>
          <div className="mt-4 grid gap-3 lg:grid-cols-2">
            {result.optionAssessments.map((assessment) => (
              <article
                key={assessment.option}
                className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <p className="text-sm font-bold text-zinc-950 dark:text-white">
                  {assessment.label}
                </p>
                <p className="mt-1 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
                  {statusLabels[assessment.status]}
                </p>
                {assessment.missingEvidence.length > 0 && (
                  <ul className="mt-3 space-y-1 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {assessment.missingEvidence.slice(0, 4).map((item) => (
                      <li key={item}>À prouver : {item}</li>
                    ))}
                  </ul>
                )}
                {assessment.contradictions.length > 0 && (
                  <ul className="mt-3 space-y-1 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {assessment.contradictions.slice(0, 4).map((item) => (
                      <li key={item}>Contradiction : {item}</li>
                    ))}
                  </ul>
                )}
                <p className="mt-3 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                  <strong>Test suivant :</strong> {assessment.nextTest}
                </p>
              </article>
            ))}
          </div>
        </section>

        <details className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
          <summary className="min-h-11 cursor-pointer py-2 text-base font-bold text-zinc-950 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:text-white">
            Voir le dossier texte complet
          </summary>
          <pre
            className="mt-4 max-h-[38rem] overflow-auto whitespace-pre-wrap rounded-xl bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-100"
            data-back-office-dossier="true"
          >
            {dossier}
          </pre>
        </details>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={copyDossier}
            className="min-h-11 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            Copier le dossier texte
          </button>
          <button
            type="button"
            onClick={() => window.print()}
            className="min-h-11 rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900"
          >
            Imprimer cette page
          </button>
        </div>
        <p
          className="min-h-5 text-sm text-zinc-600 dark:text-zinc-300"
          aria-live="polite"
        >
          {copyMessage}
        </p>

        <p className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-100">
          Cet atelier prépare une décision. Il ne constitue ni un devis, ni un
          audit de sécurité ou de conformité, ni un calcul de rentabilité. Les
          faits doivent être relus par les personnes responsables du métier, des
          données, de l’exploitation et du contrat.
        </p>
      </div>
    </section>
  );
}
