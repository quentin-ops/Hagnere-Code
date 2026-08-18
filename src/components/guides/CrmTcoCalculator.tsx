"use client";

import { useId, useState } from "react";
import {
  buildCrmTcoCsv,
  buildCrmTcoSummary,
  calculateCrmTco,
  cloneCrmTcoInputs,
  CRM_TCO_COST_FIELDS,
  CRM_TCO_EXAMPLE_INPUTS,
  CRM_TCO_HORIZONS,
  CRM_TCO_PATHS,
  CRM_TCO_SCENARIOS,
  type CrmTcoCostField,
  type CrmTcoHorizon,
  type CrmTcoInputs,
  type CrmTcoPathKey,
  type CrmTcoScenario,
} from "@/lib/crm-tco";

const euro = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 2,
});

type ExportStatus = "idle" | "copied" | "copy-error" | "downloaded";

function formatEuro(value: number) {
  return Number.isFinite(value) ? euro.format(value) : "—";
}

function parseAmount(raw: string) {
  if (raw.trim() === "") {
    return Number.NaN;
  }

  const parsed = Number.parseFloat(raw.replace(",", "."));
  return Number.isFinite(parsed) ? parsed : Number.NaN;
}

export function CrmTcoCalculator() {
  const instanceId = useId().replaceAll(":", "");
  const [inputs, setInputs] = useState<CrmTcoInputs>(() =>
    cloneCrmTcoInputs(CRM_TCO_EXAMPLE_INPUTS),
  );
  const [horizon, setHorizon] = useState<CrmTcoHorizon>(36);
  const [scenario, setScenario] = useState<CrmTcoScenario>("central");
  const [exportStatus, setExportStatus] = useState<ExportStatus>("idle");
  const calculation = calculateCrmTco(inputs, horizon, scenario);
  const limitationsId = `${instanceId}-crm-tco-limitations`;
  const statusId = `${instanceId}-crm-tco-status`;

  function updateAmount(
    path: CrmTcoPathKey,
    field: CrmTcoCostField,
    raw: string,
  ) {
    setInputs((current) => ({
      ...current,
      [path]: {
        ...current[path],
        [field]: parseAmount(raw),
      },
    }));
    setExportStatus("idle");
  }

  function resetExample() {
    setInputs(cloneCrmTcoInputs(CRM_TCO_EXAMPLE_INPUTS));
    setHorizon(36);
    setScenario("central");
    setExportStatus("idle");
  }

  async function copySummary() {
    if (!calculation.isValid) {
      return;
    }

    const summary = buildCrmTcoSummary(inputs, calculation);

    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard API unavailable");
      }

      await navigator.clipboard.writeText(summary);
      setExportStatus("copied");
    } catch {
      setExportStatus("copy-error");
    }
  }

  function downloadCsv() {
    if (!calculation.isValid) {
      return;
    }

    const csv = buildCrmTcoCsv(inputs, calculation);
    const blob = new Blob([`\ufeff${csv}`], {
      type: "text/csv;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `comparaison-crm-tco-${horizon}-mois-${scenario}.csv`;
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

  return (
    <section
      className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
      aria-labelledby={`${instanceId}-crm-tco-title`}
    >
      <div className="border-b border-zinc-800 bg-zinc-950 px-4 py-5 text-white sm:px-6">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-300">
          Calcul local · aucune donnée envoyée
        </p>
        <h3
          id={`${instanceId}-crm-tco-title`}
          className="m-0 text-lg font-bold sm:text-xl"
        >
          Comparez quatre voies avec les mêmes postes de coût
        </h3>
        <p className="mb-0 mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">
          Le jeu de départ est entièrement fictif. Il ne représente ni un prix
          de marché, ni un tarif HubSpot, ni un devis Hagnéré Code. Remplacez
          chaque montant par vos hypothèses documentées.
        </p>
      </div>

      <div className="border-b border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-6">
        <div className="grid gap-5 lg:grid-cols-2">
          <fieldset>
            <legend className="text-sm font-semibold text-zinc-950 dark:text-white">
              Horizon de comparaison
            </legend>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {CRM_TCO_HORIZONS.map((months) => (
                <label
                  key={months}
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm font-medium text-zinc-800 has-[:checked]:border-emerald-600 has-[:checked]:bg-emerald-50 has-[:checked]:text-emerald-900 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200 dark:has-[:checked]:border-emerald-500 dark:has-[:checked]:bg-emerald-950/30 dark:has-[:checked]:text-emerald-200"
                >
                  <input
                    type="radio"
                    name={`${instanceId}-crm-tco-horizon`}
                    value={months}
                    checked={horizon === months}
                    onChange={() => {
                      setHorizon(months);
                      setExportStatus("idle");
                    }}
                    className="size-4 accent-emerald-600"
                  />
                  {months} mois
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-sm font-semibold text-zinc-950 dark:text-white">
              Scénario de sensibilité
            </legend>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {(
                Object.entries(CRM_TCO_SCENARIOS) as Array<
                  [CrmTcoScenario, (typeof CRM_TCO_SCENARIOS)[CrmTcoScenario]]
                >
              ).map(([key, option]) => (
                <label
                  key={key}
                  className="cursor-pointer rounded-lg border border-zinc-300 bg-white px-2 py-2 text-center text-zinc-800 has-[:checked]:border-violet-600 has-[:checked]:bg-violet-50 has-[:checked]:text-violet-900 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200 dark:has-[:checked]:border-violet-500 dark:has-[:checked]:bg-violet-950/30 dark:has-[:checked]:text-violet-200"
                >
                  <span className="flex items-center justify-center gap-1.5 text-sm font-semibold">
                    <input
                      type="radio"
                      name={`${instanceId}-crm-tco-scenario`}
                      value={key}
                      checked={scenario === key}
                      onChange={() => {
                        setScenario(key);
                        setExportStatus("idle");
                      }}
                      className="size-4 accent-violet-600"
                    />
                    {option.label}
                  </span>
                  <span className="mt-1 block text-[11px] leading-tight opacity-75">
                    {option.description}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>
      </div>

      <div className="grid gap-4 p-4 sm:p-6 xl:grid-cols-2">
        {CRM_TCO_PATHS.map((path, pathIndex) => (
          <fieldset
            key={path.key}
            className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800"
          >
            <legend className="max-w-full px-1 text-sm font-bold text-zinc-950 dark:text-white">
              <span className="mr-2 inline-flex size-7 items-center justify-center rounded-full bg-zinc-100 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                {pathIndex + 1}
              </span>
              {path.label}
            </legend>
            <p className="mb-4 mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              {path.description}
            </p>

            <div className="grid gap-3 sm:grid-cols-2 2xl:grid-cols-3">
              {CRM_TCO_COST_FIELDS.map((field) => {
                const inputId = `${instanceId}-${path.key}-${field.key}`;
                const helpId = `${inputId}-help`;
                const value = inputs[path.key][field.key];
                const isInvalid = calculation.validationErrors.some(
                  (error) =>
                    error.path === path.key && error.field === field.key,
                );

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
                          updateAmount(path.key, field.key, event.target.value)
                        }
                        aria-describedby={`${helpId} ${limitationsId}`}
                        aria-invalid={isInvalid}
                        className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 pr-8 text-sm text-zinc-950 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-1 aria-[invalid=true]:ring-red-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:ring-emerald-950"
                      />
                      <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-zinc-500">
                        €
                      </span>
                    </span>
                    <span id={helpId} className="sr-only">
                      {field.help}
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>

      <div className="border-t border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-zinc-500">
              Résultat sur {horizon} mois · scénario{" "}
              {CRM_TCO_SCENARIOS[scenario].label.toLowerCase()}
            </p>
            <p className="mb-0 text-sm text-zinc-600 dark:text-zinc-400">
              {CRM_TCO_SCENARIOS[scenario].description}. Cette variante teste la
              nature du coût qui dérape, pas une hausse identique et
              artificielle de toutes les options.
            </p>
          </div>
          <button
            type="button"
            onClick={resetExample}
            className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:bg-zinc-900"
          >
            Revenir à l’exemple fictif
          </button>
        </div>

        {calculation.isValid ? (
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {CRM_TCO_PATHS.map((path) => {
              const result = calculation.results.find(
                (item) => item.path === path.key,
              );

              if (!result) {
                return null;
              }

              const isLowest = result.differenceFromLowest === 0;

              return (
                <article
                  key={path.key}
                  className={
                    "rounded-xl border bg-white p-4 dark:bg-zinc-950 " +
                    (isLowest
                      ? "border-emerald-300 dark:border-emerald-800"
                      : "border-zinc-200 dark:border-zinc-800")
                  }
                >
                  <p className="mb-1 text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                    {path.shortLabel}
                  </p>
                  <p className="mb-0 text-xl font-bold text-zinc-950 dark:text-white">
                    {formatEuro(result.total)}
                  </p>
                  <p className="mb-0 mt-1 text-xs text-zinc-500">
                    {formatEuro(result.averageMonthly)} par mois en moyenne
                  </p>
                  <p
                    className={
                      "mb-0 mt-3 text-xs font-semibold " +
                      (isLowest
                        ? "text-emerald-700 dark:text-emerald-300"
                        : "text-zinc-600 dark:text-zinc-400")
                    }
                  >
                    {isLowest
                      ? "Minimum chiffré de ce scénario"
                      : `+ ${formatEuro(result.differenceFromLowest)} par rapport au minimum`}
                  </p>
                </article>
              );
            })}
          </div>
        ) : (
          <div
            className="mt-4 rounded-xl border border-red-300 bg-red-50 p-4 text-red-950 dark:border-red-900 dark:bg-red-950/30 dark:text-red-100"
            role="alert"
          >
            <p className="mb-1 font-semibold">
              Corrigez les montants avant de comparer
            </p>
            <p className="mb-0 text-sm leading-relaxed opacity-90">
              Chaque champ doit contenir un nombre positif ou nul. Les champs
              vides, négatifs, non numériques ou trop grands pour un calcul
              fiable ne sont pas calculés.
            </p>
          </div>
        )}

        <p
          id={statusId}
          className="sr-only"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          {calculation.isValid
            ? `Comparaison valide sur ${horizon} mois. Minimum chiffré : ${formatEuro(calculation.lowestTotal ?? 0)}. ${exportMessage}`
            : "Comparaison impossible : corrigez les montants vides, négatifs, non numériques ou trop grands."}
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <button
            type="button"
            disabled={!calculation.isValid}
            onClick={copySummary}
            className="rounded-lg bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-offset-zinc-900"
          >
            Copier le résumé
          </button>
          <button
            type="button"
            disabled={!calculation.isValid}
            onClick={downloadCsv}
            className="rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-800 transition-colors hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900 dark:focus:ring-offset-zinc-900"
          >
            Télécharger le CSV
          </button>
        </div>

        {exportMessage && (
          <p className="mb-0 mt-3 text-sm text-zinc-700 dark:text-zinc-300">
            {exportMessage}
          </p>
        )}

        <div
          id={limitationsId}
          className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-950 dark:border-amber-900 dark:bg-amber-950/20 dark:text-amber-100"
        >
          <p className="mb-2 font-semibold">
            Ce calcul compare des coûts, pas la qualité de la décision
          </p>
          <ul className="m-0 grid gap-1.5 pl-5 text-sm leading-relaxed">
            <li>
              Les coûts sont supposés constants ; inflation, fiscalité,
              financement et remises sont exclus.
            </li>
            <li>
              Aucun gain de temps, vente supplémentaire ou risque évité n’est
              soustrait sans mesure propre à votre entreprise.
            </li>
            <li>
              Les deux scénarios de tension ajoutent 25 % soit aux coûts
              récurrents, soit aux coûts fixes. Ils peuvent donc modifier le
              classement selon la structure de chaque option, mais ce ne sont ni
              des probabilités ni des prévisions.
            </li>
            <li>
              Le total le plus faible peut rester un mauvais choix si le besoin,
              la migration, la sécurité ou la maintenance sont mal couverts.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
