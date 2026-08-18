"use client";

import { useId, useState } from "react";
import {
  buildTechnicalDebtCsv,
  buildTechnicalDebtSummary,
  calculateTechnicalDebtSensitivity,
  calculateTechnicalDebtDecision,
  cloneTechnicalDebtFrictionInputs,
  cloneTechnicalDebtOptionInputs,
  TECHNICAL_DEBT_EXAMPLE_FRICTION,
  TECHNICAL_DEBT_EXAMPLE_OPTIONS,
  TECHNICAL_DEBT_FRICTION_FIELDS,
  TECHNICAL_DEBT_HORIZONS,
  TECHNICAL_DEBT_LENSES,
  TECHNICAL_DEBT_OPTION_FIELDS,
  TECHNICAL_DEBT_OPTIONS,
  getTechnicalDebtValidationMessage,
  type TechnicalDebtFrictionField,
  type TechnicalDebtFrictionInputs,
  type TechnicalDebtHorizon,
  type TechnicalDebtLens,
  type TechnicalDebtOptionField,
  type TechnicalDebtOptionInputs,
  type TechnicalDebtOptionKey,
} from "@/lib/technical-debt-decision";

const euro = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 2,
});

type ExportStatus = "idle" | "copied" | "copy-error" | "downloaded";

function formatEuro(value: number) {
  return Number.isFinite(value) ? euro.format(value) : "—";
}

export function parseAmount(raw: string) {
  const normalized = raw.trim();
  if (normalized === "") {
    return Number.NaN;
  }

  if (!/^(?:\d+(?:[.,]\d+)?|[.,]\d+)$/.test(normalized)) {
    return Number.NaN;
  }

  const parsed = Number(normalized.replace(",", "."));
  return Number.isFinite(parsed) ? parsed : Number.NaN;
}

export function TechnicalDebtDecisionCalculator() {
  const instanceId = useId().replaceAll(":", "");
  const [frictionInputs, setFrictionInputs] =
    useState<TechnicalDebtFrictionInputs>(() =>
      cloneTechnicalDebtFrictionInputs(TECHNICAL_DEBT_EXAMPLE_FRICTION),
    );
  const [optionInputs, setOptionInputs] = useState<TechnicalDebtOptionInputs>(
    () => cloneTechnicalDebtOptionInputs(TECHNICAL_DEBT_EXAMPLE_OPTIONS),
  );
  const [horizon, setHorizon] = useState<TechnicalDebtHorizon>(36);
  const [lens, setLens] = useState<TechnicalDebtLens>("risk");
  const [quickFriction, setQuickFriction] = useState("34048");
  const [exportStatus, setExportStatus] = useState<ExportStatus>("idle");
  const calculation = calculateTechnicalDebtDecision(
    frictionInputs,
    optionInputs,
    horizon,
    lens,
  );
  const quickFrictionValue = parseAmount(quickFriction);
  const quickSensitivity = Number.isFinite(quickFrictionValue)
    ? calculateTechnicalDebtSensitivity(
        frictionInputs,
        optionInputs,
        36,
        "risk",
        [quickFrictionValue],
      )[0]
    : undefined;
  const limitationsId = `${instanceId}-technical-debt-limitations`;
  const statusId = `${instanceId}-technical-debt-status`;

  function updateFriction(field: TechnicalDebtFrictionField, raw: string) {
    setFrictionInputs((current) => ({
      ...current,
      [field]: parseAmount(raw),
    }));
    setExportStatus("idle");
  }

  function updateOption(
    option: TechnicalDebtOptionKey,
    field: TechnicalDebtOptionField,
    raw: string,
  ) {
    setOptionInputs((current) => ({
      ...current,
      [option]: {
        ...current[option],
        [field]: parseAmount(raw),
      },
    }));
    setExportStatus("idle");
  }

  function updateUnknownCosts(
    option: TechnicalDebtOptionKey,
    checked: boolean,
  ) {
    setOptionInputs((current) => ({
      ...current,
      [option]: {
        ...current[option],
        hasUnknownCosts: checked,
      },
    }));
    setExportStatus("idle");
  }

  function resetExample() {
    setFrictionInputs(
      cloneTechnicalDebtFrictionInputs(TECHNICAL_DEBT_EXAMPLE_FRICTION),
    );
    setOptionInputs(
      cloneTechnicalDebtOptionInputs(TECHNICAL_DEBT_EXAMPLE_OPTIONS),
    );
    setHorizon(36);
    setLens("risk");
    setQuickFriction("34048");
    setExportStatus("idle");
  }

  async function copySummary() {
    if (!calculation.isValid) {
      return;
    }

    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard API unavailable");
      }

      await navigator.clipboard.writeText(
        buildTechnicalDebtSummary(frictionInputs, optionInputs, calculation),
      );
      setExportStatus("copied");
    } catch {
      setExportStatus("copy-error");
    }
  }

  function downloadCsv() {
    if (!calculation.isValid) {
      return;
    }

    const csv = buildTechnicalDebtCsv(
      frictionInputs,
      optionInputs,
      calculation,
    );
    const blob = new Blob([`\ufeff${csv}`], {
      type: "text/csv;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `dette-technique-decision-${horizon}-mois-${lens}.csv`;
    link.click();
    URL.revokeObjectURL(url);
    setExportStatus("downloaded");
  }

  const exportMessage = {
    idle: "",
    copied: "Le résumé lisible a été copié dans le presse-papiers.",
    "copy-error":
      "La copie est indisponible dans ce navigateur. Le téléchargement CSV reste utilisable.",
    downloaded: "Le fichier CSV a été préparé sur votre appareil.",
  }[exportStatus];
  const lowestResult = calculation.optionResults.find(
    (result) => result.differenceFromLowest === 0,
  );
  const lowestOption = TECHNICAL_DEBT_OPTIONS.find(
    (option) => option.key === lowestResult?.option,
  );

  return (
    <section
      className="not-prose my-10 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
      aria-labelledby={`${instanceId}-technical-debt-title`}
    >
      <div className="border-b border-zinc-800 bg-zinc-950 px-4 py-5 text-white sm:px-6">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-300">
          Calcul local · aucune donnée envoyée
        </p>
        <h3
          id={`${instanceId}-technical-debt-title`}
          className="m-0 text-lg font-bold sm:text-xl"
        >
          Séparez la trésorerie, la capacité et le risque avant de comparer
        </h3>
        <p className="mb-0 mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">
          Atelier Nova est un exemple entièrement fictif. Les montants ne sont
          ni des prix de marché, ni un devis Hagnéré Code. Remplacez-les par des
          événements, factures et hypothèses que vous pouvez retrouver.
        </p>
      </div>

      <section
        className="border-b border-violet-200 bg-violet-50 p-4 dark:border-violet-900 dark:bg-violet-950/20 sm:p-6"
        aria-labelledby={`${instanceId}-quick-test-title`}
      >
        <p className="m-0 text-xs font-bold uppercase tracking-[0.14em] text-violet-700 dark:text-violet-300">
          Test rapide
        </p>
        <h3
          id={`${instanceId}-quick-test-title`}
          className="mb-0 mt-2 text-lg font-bold text-zinc-950 dark:text-white"
        >
          Quel verdict avec une seule friction annuelle ?
        </h3>
        <p className="mb-0 mt-2 max-w-3xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          Saisissez un seul montant pour obtenir une première lecture à 36 mois,
          sans toucher aux 37 hypothèses détaillées. Le test répartit ce montant
          proportionnellement entre trésorerie et capacité ; les coûts de
          projet, les coûts récurrents, l’impact et les probabilités restent
          inchangés.
        </p>
        <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,18rem)_1fr] lg:items-start">
          <label htmlFor={`${instanceId}-quick-friction`} className="block">
            <span className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Coût annuel observé
            </span>
            <span className="relative mt-2 block">
              <input
                id={`${instanceId}-quick-friction`}
                type="text"
                inputMode="decimal"
                value={quickFriction}
                onChange={(event) => setQuickFriction(event.target.value)}
                aria-describedby={`${instanceId}-quick-friction-help`}
                aria-errormessage={
                  !Number.isFinite(quickFrictionValue)
                    ? `${instanceId}-quick-friction-error`
                    : undefined
                }
                aria-invalid={!Number.isFinite(quickFrictionValue)}
                className="w-full rounded-lg border border-violet-300 bg-white px-3 py-2.5 pr-12 text-sm text-zinc-950 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:border-violet-800 dark:bg-zinc-950 dark:text-white"
              />
              <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-zinc-500">
                € / an
              </span>
            </span>
            <span
              id={`${instanceId}-quick-friction-help`}
              className="mt-1 block text-xs text-zinc-600 dark:text-zinc-400"
            >
              Exemple initial : 34 048 €. Utilisez un point ou une virgule
              décimale.
            </span>
            {!Number.isFinite(quickFrictionValue) ? (
              <span
                id={`${instanceId}-quick-friction-error`}
                role="alert"
                className="mt-1 block text-xs text-red-700 dark:text-red-300"
              >
                Saisissez un nombre positif ou nul.
              </span>
            ) : null}
          </label>
          <div
            aria-live="polite"
            className="min-w-0 rounded-xl border border-violet-200 bg-white p-4 dark:border-violet-900 dark:bg-zinc-950"
          >
            {quickSensitivity?.calculation.isValid ? (
              <>
                <p className="m-0 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  À 36 mois avec risque attendu :{" "}
                  <strong>
                    {
                      TECHNICAL_DEBT_OPTIONS.find(
                        (option) => option.key === quickSensitivity.winner,
                      )?.label
                    }
                  </strong>
                </p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {quickSensitivity.calculation.optionResults.map((result) => (
                    <div
                      key={result.option}
                      className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-800"
                    >
                      <p className="m-0 text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                        {
                          TECHNICAL_DEBT_OPTIONS.find(
                            (option) => option.key === result.option,
                          )?.shortLabel
                        }
                      </p>
                      <p className="mb-0 mt-1 text-sm font-bold text-zinc-950 dark:text-zinc-100">
                        {formatEuro(result.selectedTotal)}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p className="m-0 text-sm text-red-700 dark:text-red-300">
                Saisissez un montant positif ou nul pour lancer le test rapide.
              </p>
            )}
          </div>
        </div>
      </section>

      <details className="border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50">
        <summary className="cursor-pointer px-4 py-4 text-sm font-semibold text-zinc-950 outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:text-white sm:px-6">
          Modifier les 37 hypothèses détaillées
        </summary>
        <div className="grid gap-5 p-4 sm:p-6 lg:grid-cols-2">
          <fieldset>
            <legend className="text-sm font-semibold text-zinc-950 dark:text-white">
              Horizon identique pour les cinq options
            </legend>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {TECHNICAL_DEBT_HORIZONS.map((months) => (
                <label
                  key={months}
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-2 py-2.5 text-sm font-medium text-zinc-800 has-[:checked]:border-violet-600 has-[:checked]:bg-violet-50 has-[:checked]:text-violet-900 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200 dark:has-[:checked]:border-violet-500 dark:has-[:checked]:bg-violet-950/30 dark:has-[:checked]:text-violet-200"
                >
                  <input
                    type="radio"
                    name={`${instanceId}-technical-debt-horizon`}
                    value={months}
                    checked={horizon === months}
                    onChange={() => {
                      setHorizon(months);
                      setExportStatus("idle");
                    }}
                    className="size-4 accent-violet-600"
                  />
                  {months} mois
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-sm font-semibold text-zinc-950 dark:text-white">
              Lecture de la décision
            </legend>
            <div className="mt-2 grid gap-2 sm:grid-cols-3">
              {(
                Object.entries(TECHNICAL_DEBT_LENSES) as Array<
                  [
                    TechnicalDebtLens,
                    (typeof TECHNICAL_DEBT_LENSES)[TechnicalDebtLens],
                  ]
                >
              ).map(([key, item]) => (
                <label
                  key={key}
                  className="cursor-pointer rounded-lg border border-zinc-300 bg-white px-2 py-2 text-zinc-800 has-[:checked]:border-emerald-600 has-[:checked]:bg-emerald-50 has-[:checked]:text-emerald-900 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200 dark:has-[:checked]:border-emerald-500 dark:has-[:checked]:bg-emerald-950/30 dark:has-[:checked]:text-emerald-200"
                >
                  <span className="flex items-center justify-center gap-1.5 text-xs font-semibold">
                    <input
                      type="radio"
                      name={`${instanceId}-technical-debt-lens`}
                      value={key}
                      checked={lens === key}
                      onChange={() => {
                        setLens(key);
                        setExportStatus("idle");
                      }}
                      className="size-4 accent-emerald-600"
                    />
                    {item.label}
                  </span>
                  <span className="mt-1 block text-[10px] leading-tight opacity-75">
                    {item.description}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="p-4 sm:p-6">
          <p className="m-0 text-xs font-bold uppercase tracking-[0.14em] text-violet-700 dark:text-violet-300">
            1. Friction annuelle observée
          </p>
          <p className="mb-5 mt-2 max-w-4xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Les heures d’incident doivent être retirées des changements si elles
            concernent le même ticket. Les factures externes ne doivent pas
            rémunérer les mêmes heures internes. Une inconnue reste inconnue :
            elle ne devient pas zéro.
          </p>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {TECHNICAL_DEBT_FRICTION_FIELDS.map((field) => {
              const inputId = `${instanceId}-friction-${field.key}`;
              const helpId = `${inputId}-help`;
              const errorId = `${inputId}-error`;
              const value = frictionInputs[field.key];
              const validationError = calculation.validationErrors.find(
                (error) =>
                  error.scope === "friction" && error.field === field.key,
              );
              const isInvalid = validationError !== undefined;

              return (
                <label key={field.key} htmlFor={inputId} className="block">
                  <span className="block text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                    {field.label}
                  </span>
                  <span className="relative mt-2 block">
                    <input
                      id={inputId}
                      type="number"
                      min={0}
                      step={0.01}
                      inputMode="decimal"
                      value={Number.isFinite(value) ? value : ""}
                      onChange={(event) =>
                        updateFriction(field.key, event.target.value)
                      }
                      aria-describedby={`${helpId} ${limitationsId}`}
                      aria-errormessage={isInvalid ? errorId : undefined}
                      aria-invalid={isInvalid}
                      className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 pr-14 text-sm text-zinc-950 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200 aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-1 aria-[invalid=true]:ring-red-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:ring-violet-950"
                    />
                    {field.suffix ? (
                      <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-zinc-500">
                        {field.suffix}
                      </span>
                    ) : null}
                  </span>
                  <span
                    id={helpId}
                    className="mt-1 block text-[10px] leading-relaxed text-zinc-500 dark:text-zinc-400"
                  >
                    {field.help}
                  </span>
                  {validationError ? (
                    <span
                      id={errorId}
                      role="alert"
                      className="mt-1 block text-xs text-red-700 dark:text-red-300"
                    >
                      {getTechnicalDebtValidationMessage(validationError)}
                    </span>
                  ) : null}
                </label>
              );
            })}
          </div>

          {calculation.isValid && calculation.friction ? (
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950/20">
                <p className="m-0 text-xs font-semibold text-blue-800 dark:text-blue-200">
                  Capacité interne valorisée
                </p>
                <p className="mb-0 mt-1 text-xl font-bold text-blue-950 dark:text-blue-100">
                  {formatEuro(calculation.friction.internalCapacity)}
                  <span className="text-xs font-medium"> / an</span>
                </p>
                <p className="mb-0 mt-2 text-xs text-blue-800 dark:text-blue-300">
                  Temps potentiellement libérable, pas économie bancaire.
                </p>
              </div>
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900 dark:bg-emerald-950/20">
                <p className="m-0 text-xs font-semibold text-emerald-800 dark:text-emerald-200">
                  Sorties de trésorerie attribuables
                </p>
                <p className="mb-0 mt-1 text-xl font-bold text-emerald-950 dark:text-emerald-100">
                  {formatEuro(calculation.friction.externalCash)}
                  <span className="text-xs font-medium"> / an</span>
                </p>
                <p className="mb-0 mt-2 text-xs text-emerald-800 dark:text-emerald-300">
                  Factures et coûts incrémentaux distincts.
                </p>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/20">
                <p className="m-0 text-xs font-semibold text-amber-800 dark:text-amber-200">
                  Coût annuel observé (capacité + trésorerie)
                </p>
                <p className="mb-0 mt-1 text-xl font-bold text-amber-950 dark:text-amber-100">
                  {formatEuro(calculation.friction.observedFriction)}
                  <span className="text-xs font-medium"> / an</span>
                </p>
                <p className="mb-0 mt-2 text-xs text-amber-800 dark:text-amber-300">
                  Somme de catégories distinctes, jamais gain garanti.
                </p>
              </div>
            </div>
          ) : null}
        </div>

        <div className="border-t border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/40 sm:p-6">
          <p className="m-0 text-xs font-bold uppercase tracking-[0.14em] text-violet-700 dark:text-violet-300">
            2. Cinq options sur le même horizon
          </p>
          <p className="mb-5 mt-2 max-w-4xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Les options doivent couvrir les mêmes parcours, volumes et
            exigences. Ajoutez migration, coexistence, recette, formation,
            exploitation, retour arrière et retrait. Cochez les inconnues
            importantes pour sortir une option du classement.
          </p>

          <div className="grid gap-4 xl:grid-cols-2">
            {TECHNICAL_DEBT_OPTIONS.map((option, optionIndex) => (
              <fieldset
                key={option.key}
                className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <legend className="max-w-full px-1 text-sm font-bold text-zinc-950 dark:text-white">
                  <span className="mr-2 inline-flex size-7 items-center justify-center rounded-full bg-zinc-100 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                    {optionIndex + 1}
                  </span>
                  {option.label}
                </legend>
                <p className="mb-4 mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {option.description}
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  {TECHNICAL_DEBT_OPTION_FIELDS.map((field) => {
                    const inputId = `${instanceId}-${option.key}-${field.key}`;
                    const helpId = `${inputId}-help`;
                    const errorId = `${inputId}-error`;
                    const value = optionInputs[option.key][field.key];
                    const validationError = calculation.validationErrors.find(
                      (error) =>
                        error.scope === "option" &&
                        error.option === option.key &&
                        error.field === field.key,
                    );
                    const isInvalid = validationError !== undefined;

                    return (
                      <label
                        key={field.key}
                        htmlFor={inputId}
                        className="block"
                      >
                        <span className="block text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                          {field.label}
                        </span>
                        <span className="relative mt-2 block">
                          <input
                            id={inputId}
                            type="number"
                            min={0}
                            max={
                              field.key === "cashReductionPercent" ||
                              field.key === "capacityReductionPercent" ||
                              field.key === "incidentProbabilityPercent"
                                ? 100
                                : undefined
                            }
                            step={0.01}
                            inputMode="decimal"
                            value={Number.isFinite(value) ? value : ""}
                            onChange={(event) =>
                              updateOption(
                                option.key,
                                field.key,
                                event.target.value,
                              )
                            }
                            aria-describedby={`${helpId} ${limitationsId}`}
                            aria-errormessage={isInvalid ? errorId : undefined}
                            aria-invalid={isInvalid}
                            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 pr-14 text-sm text-zinc-950 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200 aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-1 aria-[invalid=true]:ring-red-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:ring-violet-950"
                          />
                          <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-zinc-500">
                            {field.suffix}
                          </span>
                        </span>
                        <span
                          id={helpId}
                          className="mt-1 block text-[10px] leading-relaxed text-zinc-500 dark:text-zinc-400"
                        >
                          {field.help}
                        </span>
                        {validationError ? (
                          <span
                            id={errorId}
                            role="alert"
                            className="mt-1 block text-xs text-red-700 dark:text-red-300"
                          >
                            {getTechnicalDebtValidationMessage(validationError)}
                          </span>
                        ) : null}
                      </label>
                    );
                  })}
                </div>

                <label className="mt-4 flex cursor-pointer items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs leading-relaxed text-amber-950 dark:border-amber-900 dark:bg-amber-950/20 dark:text-amber-200">
                  <input
                    type="checkbox"
                    checked={optionInputs[option.key].hasUnknownCosts}
                    onChange={(event) =>
                      updateUnknownCosts(option.key, event.target.checked)
                    }
                    className="mt-0.5 size-4 shrink-0 accent-amber-600"
                  />
                  <span>
                    <strong className="block">
                      Des coûts importants restent inconnus
                    </strong>
                    L’option reste visible, mais elle sort du classement jusqu’à
                    ce que les inconnues soient chiffrées.
                  </span>
                </label>
              </fieldset>
            ))}
          </div>
        </div>
      </details>

      <div className="border-t border-zinc-200 p-4 dark:border-zinc-800 sm:p-6">
        <div>
          <p className="m-0 text-xs font-bold uppercase tracking-[0.14em] text-violet-700 dark:text-violet-300">
            3. Résultats selon la lecture « {TECHNICAL_DEBT_LENSES[lens].label}{" "}
            »
          </p>
          <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Les trois colonnes restent visibles pour éviter de confondre
            trésorerie, temps salarié et risque. L’opportunité commerciale est
            volontairement exclue.
          </p>
        </div>

        {calculation.isValid ? (
          <>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {calculation.optionResults.map((result) => {
                const option = TECHNICAL_DEBT_OPTIONS.find(
                  (item) => item.key === result.option,
                );
                const isLowest = result.differenceFromLowest === 0;

                return (
                  <article
                    key={result.option}
                    className={`rounded-xl border p-4 ${
                      isLowest
                        ? "border-emerald-400 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-950/20"
                        : "border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50"
                    }`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h4 className="m-0 text-sm font-bold text-zinc-950 dark:text-white">
                        {option?.shortLabel}
                      </h4>
                      {isLowest ? (
                        <span className="rounded-full bg-emerald-700 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                          minimum renseigné
                        </span>
                      ) : null}
                      {!result.isComparable ? (
                        <span className="rounded-full bg-amber-600 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                          inconnues
                        </span>
                      ) : null}
                    </div>
                    <p className="mb-0 mt-3 text-xl font-bold text-zinc-950 dark:text-white">
                      {formatEuro(result.selectedTotal)}
                    </p>
                    <dl className="mt-4 grid gap-2 text-xs">
                      <div className="flex justify-between gap-3">
                        <dt className="text-zinc-500">
                          Trésorerie sur l’horizon
                        </dt>
                        <dd className="m-0 font-semibold text-zinc-800 dark:text-zinc-200">
                          {formatEuro(result.cashTotal)}
                        </dd>
                      </div>
                      <div className="flex justify-between gap-3">
                        <dt className="text-zinc-500">Capacité résiduelle</dt>
                        <dd className="m-0 font-semibold text-zinc-800 dark:text-zinc-200">
                          {formatEuro(result.residualCapacity)}
                        </dd>
                      </div>
                      <div className="flex justify-between gap-3">
                        <dt className="text-zinc-500">Risque attendu</dt>
                        <dd className="m-0 font-semibold text-zinc-800 dark:text-zinc-200">
                          {formatEuro(result.riskExposure)}
                        </dd>
                      </div>
                      {result.breakEvenAnnualAmount !== null ? (
                        <div className="flex justify-between gap-3 border-t border-zinc-200 pt-2 dark:border-zinc-700">
                          <dt className="text-zinc-500">
                            {TECHNICAL_DEBT_LENSES[lens].breakEvenLabel}
                          </dt>
                          <dd className="m-0 text-right font-semibold text-zinc-800 dark:text-zinc-200">
                            {formatEuro(result.breakEvenAnnualAmount)}{" "}
                            {TECHNICAL_DEBT_LENSES[lens].breakEvenUnit}
                          </dd>
                        </div>
                      ) : null}
                    </dl>
                  </article>
                );
              })}
            </div>

            <div
              id={statusId}
              role="status"
              aria-live="polite"
              className="mt-5 rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm leading-relaxed text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
            >
              {lowestOption ? (
                <>
                  <strong className="text-zinc-950 dark:text-white">
                    Charge comparable renseignée la plus faible :{" "}
                    {lowestOption.label}.
                  </strong>{" "}
                  Ce résultat dépend de la lecture sélectionnée et ne constitue
                  pas une recommandation. Passez à « Trésorerie seule » puis «
                  Avec risque attendu » : si le verdict change, l’hypothèse qui
                  le fait basculer doit être discutée.
                </>
              ) : (
                <>
                  <strong className="text-zinc-950 dark:text-white">
                    Aucun classement.
                  </strong>{" "}
                  Toutes les options gardent des coûts importants à confirmer.
                </>
              )}
            </div>
          </>
        ) : (
          <div
            role="alert"
            className="mt-5 rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-900 dark:border-red-900 dark:bg-red-950/30 dark:text-red-200"
          >
            Corrigez les montants avant de comparer : les valeurs doivent être
            positives ou nulles, et les pourcentages compris entre 0 et 100.
          </div>
        )}
      </div>

      <div className="border-t border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/40 sm:p-6">
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={copySummary}
            disabled={!calculation.isValid}
            className="rounded-lg bg-zinc-950 px-4 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            Copier le résumé
          </button>
          <button
            type="button"
            onClick={downloadCsv}
            disabled={!calculation.isValid}
            className="rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 hover:border-zinc-400 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900"
          >
            Télécharger le CSV
          </button>
          <button
            type="button"
            onClick={resetExample}
            className="rounded-lg border border-transparent px-4 py-2.5 text-sm font-semibold text-zinc-600 hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Restaurer l’exemple fictif
          </button>
        </div>
        <p
          className="mb-0 mt-3 min-h-5 text-xs text-zinc-600 dark:text-zinc-400"
          aria-live="polite"
        >
          {exportMessage}
        </p>
        <p
          id={limitationsId}
          className="mb-0 mt-4 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400"
        >
          Limites : le calcul ne mesure pas la qualité du code et ne remplace ni
          un audit, ni un devis, ni une analyse juridique ou de sécurité. Chaque
          événement doit être unique. Une capacité interne valorisée n’est pas
          une économie de caisse. Une probabilité fragile ne doit pas décider
          seule d’un investissement.
        </p>
      </div>
    </section>
  );
}
