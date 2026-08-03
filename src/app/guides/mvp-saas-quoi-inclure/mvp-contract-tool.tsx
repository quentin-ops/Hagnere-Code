"use client";

import { useMemo, useState } from "react";
import {
  assessMvpContract,
  createAccordiaExample,
  createEmptyMvpContract,
  MAX_MANUAL_MINUTES,
  MAX_OCCURRENCES_PER_CLIENT,
  MAX_PILOT_CLIENTS,
  mvpFamilyIds,
  mvpFamilyLabels,
  mvpNecessities,
  mvpSalesModeLabels,
  mvpSalesModes,
  mvpTestFormatLabels,
  mvpTestFormats,
  mvpTreatmentLabels,
  mvpTreatments,
  type DecimalInput,
  type MvpCapabilityInput,
  type MvpContractAssessment,
  type MvpContractInput,
  type MvpContractStatus,
} from "./mvp-contract-engine";

const statusClasses: Record<MvpContractStatus, string> = {
  STOP_REQUIRED_DECISIONS_UNKNOWN:
    "border-red-300 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950/35 dark:text-red-100",
  STOP_CRITICAL_CAPABILITY_DEFERRED:
    "border-red-300 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950/35 dark:text-red-100",
  STOP_MANUAL_OPERATION_UNBOUNDED:
    "border-red-300 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950/35 dark:text-red-100",
  STOP_MANUAL_CAPACITY_EXCEEDED:
    "border-red-300 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950/35 dark:text-red-100",
  TEST_FORMAT_NOT_PRODUCTION:
    "border-blue-300 bg-blue-50 text-blue-950 dark:border-blue-900 dark:bg-blue-950/35 dark:text-blue-100",
  PILOT_CANDIDATE_FOR_REVIEW:
    "border-emerald-300 bg-emerald-50 text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/35 dark:text-emerald-100",
  FIRST_CLIENT_CANDIDATE_FOR_REVIEW:
    "border-emerald-300 bg-emerald-50 text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/35 dark:text-emerald-100",
};

function preserveRawDecimal(value: string): DecimalInput {
  return value === "" ? null : value;
}

function minuteValueLabel(value: string | null): string {
  return value === null ? "À vérifier" : `${value} min`;
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-1.5 block text-xs font-semibold leading-relaxed text-zinc-700 dark:text-zinc-200">
      {children}
    </span>
  );
}

type FieldErrors = MvpContractAssessment["fieldErrors"];

function fieldAccessibility(
  fieldId: string,
  fieldErrors: FieldErrors,
  describedBy?: string,
) {
  const hasError = (fieldErrors[fieldId]?.length ?? 0) > 0;
  return {
    "aria-invalid": hasError || undefined,
    "aria-describedby":
      [describedBy, hasError ? `${fieldId}-errors` : undefined]
        .filter(Boolean)
        .join(" ") || undefined,
  } as const;
}

function FieldError({
  fieldId,
  fieldErrors,
  showInlineErrors,
}: {
  fieldId: string;
  fieldErrors: FieldErrors;
  showInlineErrors: boolean;
}) {
  const errors = fieldErrors[fieldId] ?? [];
  if (errors.length === 0) return null;

  return (
    <span
      id={`${fieldId}-errors`}
      className={
        showInlineErrors
          ? "mt-1.5 block text-xs font-medium leading-relaxed text-red-700 dark:text-red-300"
          : "sr-only"
      }
    >
      {errors.join(" ")}
    </span>
  );
}

function CapabilityEditor({
  capability,
  fieldErrors,
  showInlineErrors,
  onChange,
}: {
  capability: MvpCapabilityInput;
  fieldErrors: FieldErrors;
  showInlineErrors: boolean;
  onChange: (capability: MvpCapabilityInput) => void;
}) {
  const prefix = `mvp-capability-${capability.id}`;

  function update(updateValue: Partial<MvpCapabilityInput>) {
    onChange({ ...capability, ...updateValue });
  }

  function updateManual(
    updateValue: Partial<MvpCapabilityInput["manualOperation"]>,
  ) {
    update({
      manualOperation: { ...capability.manualOperation, ...updateValue },
    });
  }

  return (
    <fieldset className="rounded-2xl border border-zinc-200 bg-white p-4 sm:p-5 dark:border-zinc-800 dark:bg-zinc-950">
      <legend className="px-2 text-sm font-bold text-zinc-950 dark:text-white">
        {mvpFamilyLabels[capability.id]}
      </legend>

      <div className="grid gap-4 md:grid-cols-2">
        <label htmlFor={`${prefix}-necessary`}>
          <FieldLabel>Cette famille est-elle nécessaire au test ?</FieldLabel>
          <select
            id={`${prefix}-necessary`}
            {...fieldAccessibility(`${prefix}-necessary`, fieldErrors)}
            value={capability.necessaryForTest}
            onChange={(event) =>
              update({
                necessaryForTest: event.target
                  .value as MvpCapabilityInput["necessaryForTest"],
              })
            }
            className="min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
          >
            {mvpNecessities.map((necessity) => (
              <option key={necessity} value={necessity}>
                {necessity === "OUI"
                  ? "Oui"
                  : necessity === "NON"
                    ? "Non"
                    : "À vérifier"}
              </option>
            ))}
          </select>
          <FieldError
            fieldId={`${prefix}-necessary`}
            fieldErrors={fieldErrors}
            showInlineErrors={showInlineErrors}
          />
        </label>

        <label htmlFor={`${prefix}-treatment`}>
          <FieldLabel>Comment la traiter pendant ce test ?</FieldLabel>
          <select
            id={`${prefix}-treatment`}
            {...fieldAccessibility(`${prefix}-treatment`, fieldErrors)}
            value={capability.treatment}
            onChange={(event) =>
              update({
                treatment: event.target
                  .value as MvpCapabilityInput["treatment"],
              })
            }
            className="min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
          >
            {mvpTreatments.map((treatment) => (
              <option key={treatment} value={treatment}>
                {mvpTreatmentLabels[treatment]}
              </option>
            ))}
          </select>
          <FieldError
            fieldId={`${prefix}-treatment`}
            fieldErrors={fieldErrors}
            showInlineErrors={showInlineErrors}
          />
        </label>

        <label htmlFor={`${prefix}-owner`}>
          <FieldLabel>Qui en est responsable ?</FieldLabel>
          <input
            id={`${prefix}-owner`}
            {...fieldAccessibility(`${prefix}-owner`, fieldErrors)}
            value={capability.owner}
            onChange={(event) => update({ owner: event.target.value })}
            placeholder="Rôle ou personne responsable"
            className="min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
          />
          <FieldError
            fieldId={`${prefix}-owner`}
            fieldErrors={fieldErrors}
            showInlineErrors={showInlineErrors}
          />
        </label>

        <label htmlFor={`${prefix}-trigger`}>
          <FieldLabel>Quand faut-il revoir ce choix ?</FieldLabel>
          <input
            id={`${prefix}-trigger`}
            {...fieldAccessibility(`${prefix}-trigger`, fieldErrors)}
            value={capability.reviewTrigger}
            onChange={(event) => update({ reviewTrigger: event.target.value })}
            placeholder="Volume, événement ou limite qui impose une nouvelle décision"
            className="min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
          />
          <FieldError
            fieldId={`${prefix}-trigger`}
            fieldErrors={fieldErrors}
            showInlineErrors={showInlineErrors}
          />
        </label>

        <label htmlFor={`${prefix}-proof`}>
          <FieldLabel>Quelle preuve attendez-vous ?</FieldLabel>
          <textarea
            id={`${prefix}-proof`}
            {...fieldAccessibility(`${prefix}-proof`, fieldErrors)}
            value={capability.expectedProof}
            onChange={(event) => update({ expectedProof: event.target.value })}
            rows={3}
            placeholder="Ce qui sera observé, rejoué ou accepté"
            className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
          />
          <FieldError
            fieldId={`${prefix}-proof`}
            fieldErrors={fieldErrors}
            showInlineErrors={showInlineErrors}
          />
        </label>

        <label htmlFor={`${prefix}-failure`}>
          <FieldLabel>Que faire en cas d’échec ?</FieldLabel>
          <textarea
            id={`${prefix}-failure`}
            {...fieldAccessibility(`${prefix}-failure`, fieldErrors)}
            value={capability.failureRecovery}
            onChange={(event) =>
              update({ failureRecovery: event.target.value })
            }
            rows={3}
            placeholder="Qui détecte, suspend, informe, corrige et revient en arrière ?"
            className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
          />
          <FieldError
            fieldId={`${prefix}-failure`}
            fieldErrors={fieldErrors}
            showInlineErrors={showInlineErrors}
          />
        </label>
      </div>

      {capability.treatment === "MANUEL" && (
        <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50/60 p-4 dark:border-amber-900 dark:bg-amber-950/20">
          <p className="mb-3 text-sm font-semibold text-amber-950 dark:text-amber-100">
            Opération manuelle planifiée
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <label htmlFor={`${prefix}-manual-label`}>
              <FieldLabel>Nom de l’opération</FieldLabel>
              <input
                id={`${prefix}-manual-label`}
                {...fieldAccessibility(`${prefix}-manual-label`, fieldErrors)}
                value={capability.manualOperation.label}
                onChange={(event) =>
                  updateManual({ label: event.target.value })
                }
                className="min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
              />
              <FieldError
                fieldId={`${prefix}-manual-label`}
                fieldErrors={fieldErrors}
                showInlineErrors={showInlineErrors}
              />
            </label>

            <label htmlFor={`${prefix}-manual-limit`}>
              <FieldLabel>Limite prévue pour ce test</FieldLabel>
              <input
                id={`${prefix}-manual-limit`}
                {...fieldAccessibility(`${prefix}-manual-limit`, fieldErrors)}
                value={capability.manualOperation.explicitLimit}
                onChange={(event) =>
                  updateManual({ explicitLimit: event.target.value })
                }
                className="min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
              />
              <FieldError
                fieldId={`${prefix}-manual-limit`}
                fieldErrors={fieldErrors}
                showInlineErrors={showInlineErrors}
              />
            </label>

            <label htmlFor={`${prefix}-manual-minutes`}>
              <FieldLabel>
                Minutes par occurrence, strictement positives
              </FieldLabel>
              <input
                id={`${prefix}-manual-minutes`}
                type="number"
                min="0.001"
                max={MAX_MANUAL_MINUTES}
                step="0.001"
                inputMode="decimal"
                {...fieldAccessibility(
                  `${prefix}-manual-minutes`,
                  fieldErrors,
                  "mvp-contract-number-rules",
                )}
                value={capability.manualOperation.minutesPerOccurrence ?? ""}
                onChange={(event) =>
                  updateManual({
                    minutesPerOccurrence: preserveRawDecimal(
                      event.target.value,
                    ),
                  })
                }
                className="min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
              />
              <FieldError
                fieldId={`${prefix}-manual-minutes`}
                fieldErrors={fieldErrors}
                showInlineErrors={showInlineErrors}
              />
            </label>

            <label htmlFor={`${prefix}-manual-occurrences`}>
              <FieldLabel>
                Occurrences par client sur toute la période, strictement
                positives
              </FieldLabel>
              <input
                id={`${prefix}-manual-occurrences`}
                type="number"
                min="0.001"
                max={MAX_OCCURRENCES_PER_CLIENT}
                step="0.001"
                inputMode="decimal"
                {...fieldAccessibility(
                  `${prefix}-manual-occurrences`,
                  fieldErrors,
                  "mvp-contract-number-rules mvp-contract-period-rules",
                )}
                value={capability.manualOperation.occurrencesPerClient ?? ""}
                onChange={(event) =>
                  updateManual({
                    occurrencesPerClient: preserveRawDecimal(
                      event.target.value,
                    ),
                  })
                }
                className="min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
              />
              <FieldError
                fieldId={`${prefix}-manual-occurrences`}
                fieldErrors={fieldErrors}
                showInlineErrors={showInlineErrors}
              />
            </label>
          </div>
        </div>
      )}
    </fieldset>
  );
}

export function MvpFirstClientContractTool() {
  const [draft, setDraft] = useState<MvpContractInput>(createEmptyMvpContract);
  const [copyFeedback, setCopyFeedback] = useState("");
  const [showInlineErrors, setShowInlineErrors] = useState(false);
  const assessment = useMemo(() => assessMvpContract(draft), [draft]);

  function updateDraft(updateValue: Partial<MvpContractInput>) {
    setDraft((current) => ({ ...current, ...updateValue }));
  }

  function updateCapability(capability: MvpCapabilityInput) {
    setDraft((current) => ({
      ...current,
      capabilities: current.capabilities.map((candidate) =>
        candidate.id === capability.id ? capability : candidate,
      ),
    }));
  }

  function loadExample() {
    setDraft(createAccordiaExample());
    setCopyFeedback(
      "Exemple fictif Accordia chargé. Remplacez toutes ses hypothèses avant une décision réelle.",
    );
  }

  function reset() {
    setDraft(createEmptyMvpContract());
    setShowInlineErrors(false);
    setCopyFeedback(
      "Contrat réinitialisé. Toutes les décisions redeviennent à vérifier.",
    );
  }

  async function copyMarkdown() {
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("clipboard unavailable");
      }
      await navigator.clipboard.writeText(assessment.markdown);
      setCopyFeedback(
        "Contrat copié en Markdown. Relisez les inconnues et les limites avant de le partager.",
      );
    } catch {
      setCopyFeedback(
        "Copie automatique indisponible. Sélectionnez le contrat Markdown ci-dessous.",
      );
    }
  }

  return (
    <section
      aria-labelledby="mvp-contract-tool-title"
      className="not-prose my-8 rounded-3xl border border-zinc-200 bg-zinc-50/70 p-4 sm:p-6 dark:border-zinc-800 dark:bg-zinc-900/45"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-indigo-700 dark:text-indigo-300">
            Outil local, sans envoi
          </p>
          <h3
            id="mvp-contract-tool-title"
            className="mt-2 text-xl font-bold text-zinc-950 dark:text-white sm:text-2xl"
          >
            Écrire le contrat de votre premier test réel
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            Rien n’est prérempli. Vos saisies restent dans cette page : aucun
            envoi, cookie ou stockage local. L’outil calcule uniquement le
            travail manuel planifié. Un incident imprévisible reste à traiter :
            il ne vaut jamais zéro. Les occurrences par client et la capacité
            totale doivent couvrir toute la même période nommée, sans conversion
            implicite. L’outil n’attribue aucun score.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={loadExample}
            className="min-h-11 rounded-xl border border-indigo-300 bg-white px-4 py-2.5 text-sm font-semibold text-indigo-800 outline-none hover:bg-indigo-50 focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 dark:border-indigo-700 dark:bg-zinc-950 dark:text-indigo-200"
          >
            Charger l’exemple fictif Accordia
          </button>
          <button
            type="button"
            onClick={reset}
            className="min-h-11 rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-800 outline-none hover:bg-zinc-100 focus-visible:ring-2 focus-visible:ring-zinc-700 focus-visible:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
          >
            Réinitialiser
          </button>
        </div>
      </div>

      <p
        id="mvp-contract-number-rules"
        className="mt-4 rounded-xl border border-zinc-200 bg-white px-4 py-3 text-xs leading-relaxed text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
      >
        Règles de saisie : clients entiers de 1 à 1 000 000 ; minutes par
        occurrence et occurrences par client strictement supérieures à 0 et au
        plus égales à 1 000 000 ; capacité totale de 0 à 1 000 000 minutes. Les
        décimaux acceptent trois décimales au maximum et un point comme
        séparateur. Une valeur vide, négative, nulle pour une opération, trop
        précise ou hors limite reste à corriger.
      </p>
      <p
        id="mvp-contract-period-rules"
        className="mt-2 rounded-xl border border-zinc-200 bg-white px-4 py-3 text-xs leading-relaxed text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
      >
        Nommez la période exacte couverte par le test. Toutes les occurrences
        par client et la capacité manuelle totale saisie portent sur l’ensemble
        de cette même période. Le moteur ne convertit ni semaine, ni jour, ni
        disponibilité d’une personne.
      </p>

      <div className="mt-4 flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800 dark:bg-zinc-950">
        <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
          Les inconnues restent reliées à leur champ et listées dans le
          résultat. Affichez les détails sous chaque saisie lorsque vous voulez
          les corriger une par une.
        </p>
        <button
          type="button"
          aria-pressed={showInlineErrors}
          onClick={() => setShowInlineErrors((current) => !current)}
          className="min-h-11 shrink-0 rounded-xl border border-zinc-300 bg-white px-3 py-2 text-xs font-semibold text-zinc-800 outline-none hover:bg-zinc-100 focus-visible:ring-2 focus-visible:ring-zinc-700 focus-visible:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
        >
          {showInlineErrors
            ? "Replier les erreurs détaillées"
            : "Afficher les erreurs sous les champs"}
        </button>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <label htmlFor="mvp-test-format">
          <FieldLabel>Format du test</FieldLabel>
          <select
            id="mvp-test-format"
            {...fieldAccessibility("mvp-test-format", assessment.fieldErrors)}
            value={draft.testFormat}
            onChange={(event) =>
              updateDraft({
                testFormat: event.target
                  .value as MvpContractInput["testFormat"],
              })
            }
            className="min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
          >
            <option value="">À vérifier</option>
            {mvpTestFormats.map((format) => (
              <option key={format} value={format}>
                {mvpTestFormatLabels[format]}
              </option>
            ))}
          </select>
          <FieldError
            fieldId="mvp-test-format"
            fieldErrors={assessment.fieldErrors}
            showInlineErrors={showInlineErrors}
          />
        </label>

        <label htmlFor="mvp-sales-mode">
          <FieldLabel>Mode de vente</FieldLabel>
          <select
            id="mvp-sales-mode"
            {...fieldAccessibility("mvp-sales-mode", assessment.fieldErrors)}
            value={draft.salesMode}
            onChange={(event) =>
              updateDraft({
                salesMode: event.target.value as MvpContractInput["salesMode"],
              })
            }
            className="min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
          >
            <option value="">À vérifier</option>
            {mvpSalesModes.map((mode) => (
              <option key={mode} value={mode}>
                {mvpSalesModeLabels[mode]}
              </option>
            ))}
          </select>
          <FieldError
            fieldId="mvp-sales-mode"
            fieldErrors={assessment.fieldErrors}
            showInlineErrors={showInlineErrors}
          />
        </label>

        <label htmlFor="mvp-test-horizon" className="md:col-span-2">
          <FieldLabel>Période exacte couverte par ce test</FieldLabel>
          <textarea
            id="mvp-test-horizon"
            {...fieldAccessibility(
              "mvp-test-horizon",
              assessment.fieldErrors,
              "mvp-contract-period-rules",
            )}
            value={draft.testHorizon}
            required
            onChange={(event) =>
              updateDraft({ testHorizon: event.target.value })
            }
            rows={2}
            placeholder="Ex. du 7 septembre au 18 octobre 2026 inclus — période propre à ce test"
            className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
          />
          <FieldError
            fieldId="mvp-test-horizon"
            fieldErrors={assessment.fieldErrors}
            showInlineErrors={showInlineErrors}
          />
        </label>

        <label htmlFor="mvp-sold-outcome" className="md:col-span-2">
          <FieldLabel>Résultat métier vendu</FieldLabel>
          <textarea
            id="mvp-sold-outcome"
            {...fieldAccessibility("mvp-sold-outcome", assessment.fieldErrors)}
            value={draft.soldOutcome}
            onChange={(event) =>
              updateDraft({ soldOutcome: event.target.value })
            }
            rows={3}
            placeholder="Ce que le client obtient, dans ses mots"
            className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
          />
          <FieldError
            fieldId="mvp-sold-outcome"
            fieldErrors={assessment.fieldErrors}
            showInlineErrors={showInlineErrors}
          />
        </label>

        <label htmlFor="mvp-proof-event" className="md:col-span-2">
          <FieldLabel>Événement qui prouve ce résultat</FieldLabel>
          <textarea
            id="mvp-proof-event"
            {...fieldAccessibility("mvp-proof-event", assessment.fieldErrors)}
            value={draft.proofEvent}
            onChange={(event) =>
              updateDraft({ proofEvent: event.target.value })
            }
            rows={3}
            placeholder="Action, état ou trace observable — pas une simple connexion"
            className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
          />
          <FieldError
            fieldId="mvp-proof-event"
            fieldErrors={assessment.fieldErrors}
            showInlineErrors={showInlineErrors}
          />
        </label>

        <label htmlFor="mvp-client-count">
          <FieldLabel>Nombre de clients du test</FieldLabel>
          <input
            id="mvp-client-count"
            type="number"
            min="1"
            max={MAX_PILOT_CLIENTS}
            step="1"
            inputMode="numeric"
            {...fieldAccessibility(
              "mvp-client-count",
              assessment.fieldErrors,
              "mvp-contract-number-rules mvp-contract-period-rules",
            )}
            value={draft.pilotClientCount ?? ""}
            onChange={(event) =>
              updateDraft({
                pilotClientCount: preserveRawDecimal(event.target.value),
              })
            }
            className="min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
          />
          <FieldError
            fieldId="mvp-client-count"
            fieldErrors={assessment.fieldErrors}
            showInlineErrors={showInlineErrors}
          />
        </label>

        <label htmlFor="mvp-manual-capacity">
          <FieldLabel>
            Capacité manuelle totale disponible sur toute la période, en minutes
          </FieldLabel>
          <input
            id="mvp-manual-capacity"
            type="number"
            min="0"
            max={MAX_MANUAL_MINUTES}
            step="0.001"
            inputMode="decimal"
            {...fieldAccessibility(
              "mvp-manual-capacity",
              assessment.fieldErrors,
              "mvp-contract-number-rules mvp-contract-period-rules",
            )}
            value={draft.manualCapacityMinutes ?? ""}
            onChange={(event) =>
              updateDraft({
                manualCapacityMinutes: preserveRawDecimal(event.target.value),
              })
            }
            className="min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
          />
          <FieldError
            fieldId="mvp-manual-capacity"
            fieldErrors={assessment.fieldErrors}
            showInlineErrors={showInlineErrors}
          />
        </label>
      </div>

      {draft.salesMode === "ACHAT_AUTONOME" && (
        <div className="mt-5 grid gap-4 rounded-2xl border border-blue-200 bg-blue-50/60 p-4 md:grid-cols-2 dark:border-blue-900 dark:bg-blue-950/20">
          <p className="text-sm leading-relaxed text-blue-950 md:col-span-2 dark:text-blue-100">
            Un achat autonome rend la famille « Vente et droits associés »
            nécessaire au test : choisissez « Oui ». « Non » puis « Reporter »
            ne peut pas produire un statut « candidat à relire », même avec des
            états et une procédure complets.
          </p>
          <label htmlFor="mvp-autonomous-states">
            <FieldLabel>États d’achat et de droits à gérer</FieldLabel>
            <textarea
              id="mvp-autonomous-states"
              {...fieldAccessibility(
                "mvp-autonomous-states",
                assessment.fieldErrors,
              )}
              value={draft.autonomousPurchaseStates}
              onChange={(event) =>
                updateDraft({ autonomousPurchaseStates: event.target.value })
              }
              rows={3}
              className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
            />
            <FieldError
              fieldId="mvp-autonomous-states"
              fieldErrors={assessment.fieldErrors}
              showInlineErrors={showInlineErrors}
            />
          </label>
          <label htmlFor="mvp-autonomous-failure">
            <FieldLabel>Procédure en cas d’échec de paiement</FieldLabel>
            <textarea
              id="mvp-autonomous-failure"
              {...fieldAccessibility(
                "mvp-autonomous-failure",
                assessment.fieldErrors,
              )}
              value={draft.autonomousPurchaseFailureProcedure}
              onChange={(event) =>
                updateDraft({
                  autonomousPurchaseFailureProcedure: event.target.value,
                })
              }
              rows={3}
              className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
            />
            <FieldError
              fieldId="mvp-autonomous-failure"
              fieldErrors={assessment.fieldErrors}
              showInlineErrors={showInlineErrors}
            />
          </label>
        </div>
      )}

      <div className="mt-7 space-y-4">
        <div>
          <h4 className="text-base font-bold text-zinc-950 dark:text-white">
            Décidez pour chacune des sept familles
          </h4>
          <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            « Nécessaire » dépend de votre test, de vos données, du contrat et
            du premier client. Reporter une famille nécessaire provoque un STOP.
            Pour un premier client en production, « Non » puis « Reporter » ne
            peut contourner aucune des sept responsabilités. Cela n’impose pas
            sept fonctions : un choix manuel ou intégré reste possible.
          </p>
        </div>
        {mvpFamilyIds.map((id) => {
          const capability = draft.capabilities.find(
            (candidate) => candidate.id === id,
          );
          if (!capability) return null;
          return (
            <CapabilityEditor
              key={id}
              capability={capability}
              fieldErrors={assessment.fieldErrors}
              showInlineErrors={showInlineErrors}
              onChange={updateCapability}
            />
          );
        })}
      </div>

      <section
        aria-labelledby="mvp-contract-result-title"
        className="mt-7 rounded-2xl border border-zinc-200 bg-white p-4 sm:p-5 dark:border-zinc-800 dark:bg-zinc-950"
      >
        <h4
          id="mvp-contract-result-title"
          className="text-base font-bold text-zinc-950 dark:text-white"
        >
          Résultat calculé — décision humaine séparée
        </h4>

        <div
          className={`mt-4 rounded-xl border p-4 ${statusClasses[assessment.status]}`}
          data-status={assessment.status}
        >
          <p
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className="font-semibold"
          >
            {assessment.status} — {assessment.publicLabel}
          </p>
          <p className="mt-2 text-sm leading-relaxed">
            {assessment.explanation}
          </p>
          <p className="mt-2 text-sm font-medium leading-relaxed">
            Prochaine action : {assessment.nextAction}
          </p>
        </div>

        <p className="mt-5 rounded-xl bg-zinc-50 px-3 py-2 text-sm leading-relaxed text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
          <span className="block font-semibold">Période commune du calcul</span>
          <span className="mt-1 block">
            {draft.testHorizon.trim() || "À vérifier"}
          </span>
          <span className="mt-1 block">
            Les occurrences par client et la capacité totale portent sur toute
            cette même période, sans conversion implicite.
          </span>
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-zinc-200 p-3 dark:border-zinc-800">
            <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
              Charge planifiée sur la période
            </p>
            <p
              data-manual-load-state={assessment.manualLoadState}
              className="mt-1 text-lg font-bold text-zinc-950 dark:text-white"
            >
              {minuteValueLabel(assessment.manualLoadMinutes)}
              {assessment.manualLoadState === "PARTIAL_UNUSABLE" ? (
                <span className="mt-1 block text-xs font-semibold text-red-700 dark:text-red-300">
                  partiel/inexploitable
                </span>
              ) : null}
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 p-3 dark:border-zinc-800">
            <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
              Capacité totale sur la même période
            </p>
            <p className="mt-1 text-lg font-bold text-zinc-950 dark:text-white">
              {minuteValueLabel(assessment.manualCapacityMinutes)}
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 p-3 dark:border-zinc-800">
            <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
              Reste après charge
            </p>
            <p className="mt-1 text-lg font-bold text-zinc-950 dark:text-white">
              {assessment.manualLoadState === "PARTIAL_UNUSABLE"
                ? "partiel/inexploitable"
                : minuteValueLabel(assessment.remainingCapacityMinutes)}
            </p>
          </div>
        </div>

        {assessment.manualEquations.length > 0 && (
          <div className="mt-5">
            <p className="text-sm font-semibold text-zinc-900 dark:text-white">
              Calculs détaillés
            </p>
            <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              {assessment.manualEquations.map((equation) => (
                <li
                  key={equation.familyId}
                  data-calculation-status={equation.calculationStatus}
                  className="rounded-lg bg-zinc-50 px-3 py-2 font-mono text-xs leading-relaxed dark:bg-zinc-900"
                >
                  {equation.operation} : {equation.equation}. Limite :{" "}
                  {equation.explicitLimit}. Calcul{" "}
                  {equation.calculationStatus === "EXPLOITABLE"
                    ? "exploitable"
                    : "inexploitable"}
                  .
                </li>
              ))}
            </ul>
          </div>
        )}

        {assessment.missingDecisions.length > 0 && (
          <div className="mt-5">
            <p className="text-sm font-semibold text-zinc-900 dark:text-white">
              Décisions à vérifier
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              {assessment.missingDecisions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {assessment.criticalDeferredCapabilities.length > 0 && (
          <div className="mt-5">
            <p className="text-sm font-semibold text-zinc-900 dark:text-white">
              Familles critiques reportées
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              {assessment.criticalDeferredCapabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {assessment.unboundedManualOperations.length > 0 && (
          <div className="mt-5">
            <p className="text-sm font-semibold text-zinc-900 dark:text-white">
              Opérations manuelles non bornées
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              {assessment.unboundedManualOperations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={copyMarkdown}
            className="min-h-11 rounded-xl bg-zinc-950 px-4 py-2.5 text-sm font-semibold text-white outline-none hover:bg-zinc-800 focus-visible:ring-2 focus-visible:ring-zinc-700 focus-visible:ring-offset-2 dark:bg-white dark:text-zinc-950"
          >
            Copier le contrat Markdown
          </button>
          <p
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className="text-sm text-zinc-600 dark:text-zinc-300"
          >
            {copyFeedback}
          </p>
        </div>

        <pre
          tabIndex={0}
          aria-label="Contrat du premier client SaaS généré en Markdown"
          className="mt-5 max-h-[34rem] overflow-auto whitespace-pre-wrap rounded-xl border border-zinc-200 bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-100 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-zinc-700"
        >
          {assessment.markdown}
        </pre>
      </section>
    </section>
  );
}
