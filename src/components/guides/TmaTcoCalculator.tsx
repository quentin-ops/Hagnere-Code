"use client";

import { useId, useState } from "react";
import {
  buildTmaTcoCsv,
  buildTmaTcoSummary,
  calculateTmaTco,
  cloneTmaTcoInputs,
  TMA_TCO_EXAMPLE_INPUTS,
  TMA_TCO_FIELDS,
  TMA_TCO_HORIZONS,
  TMA_TCO_PATHS,
  type TmaTcoField,
  type TmaTcoHorizon,
  type TmaTcoInputs,
  type TmaTcoPathKey,
} from "@/lib/tma-tco";

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

export function TmaTcoCalculator() {
  const instanceId = useId().replaceAll(":", "");
  const [inputs, setInputs] = useState<TmaTcoInputs>(() =>
    cloneTmaTcoInputs(TMA_TCO_EXAMPLE_INPUTS),
  );
  const [horizon, setHorizon] = useState<TmaTcoHorizon>(12);
  const [internalHourlyRate, setInternalHourlyRate] = useState(60);
  const [exportStatus, setExportStatus] = useState<ExportStatus>("idle");
  const calculation = calculateTmaTco(inputs, horizon, internalHourlyRate);
  const limitationsId = `${instanceId}-tma-tco-limitations`;
  const statusId = `${instanceId}-tma-tco-status`;

  function updatePath(path: TmaTcoPathKey, field: TmaTcoField, raw: string) {
    setInputs((current) => ({
      ...current,
      [path]: {
        ...current[path],
        [field]: parseAmount(raw),
      },
    }));
    setExportStatus("idle");
  }

  function updateUnknownCosts(path: TmaTcoPathKey, checked: boolean) {
    setInputs((current) => ({
      ...current,
      [path]: {
        ...current[path],
        hasUnknownCosts: checked,
      },
    }));
    setExportStatus("idle");
  }

  function resetExample() {
    setInputs(cloneTmaTcoInputs(TMA_TCO_EXAMPLE_INPUTS));
    setHorizon(12);
    setInternalHourlyRate(60);
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
        buildTmaTcoSummary(inputs, calculation),
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

    const csv = buildTmaTcoCsv(inputs, calculation);
    const blob = new Blob([`\ufeff${csv}`], {
      type: "text/csv;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `comparaison-tma-regie-${horizon}-mois.csv`;
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
  const lowestComparableResult = calculation.results.find(
    (result) => result.differenceFromLowest === 0,
  );
  const lowestComparablePath = TMA_TCO_PATHS.find(
    (path) => path.key === lowestComparableResult?.path,
  );

  return (
    <section
      className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
      aria-labelledby={`${instanceId}-tma-tco-title`}
    >
      <div className="border-b border-zinc-800 bg-zinc-950 px-4 py-5 text-white sm:px-6">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-300">
          Calcul local · aucune donnée envoyée
        </p>
        <h3
          id={`${instanceId}-tma-tco-title`}
          className="m-0 text-lg font-bold sm:text-xl"
        >
          Comparez sept options avec le temps de votre propre équipe
        </h3>
        <p className="mb-0 mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">
          Les montants de départ sont entièrement fictifs. Ils ne représentent
          ni des prix de marché, ni un tarif Hagnéré Code. Remplacez-les par vos
          devis, votre temps chargé et vos risques documentés.
        </p>
      </div>

      <div className="grid gap-5 border-b border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-6 lg:grid-cols-2">
        <fieldset>
          <legend className="text-sm font-semibold text-zinc-950 dark:text-white">
            Horizon de comparaison
          </legend>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {TMA_TCO_HORIZONS.map((months) => (
              <label
                key={months}
                className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm font-medium text-zinc-800 has-[:checked]:border-emerald-600 has-[:checked]:bg-emerald-50 has-[:checked]:text-emerald-900 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200 dark:has-[:checked]:border-emerald-500 dark:has-[:checked]:bg-emerald-950/30 dark:has-[:checked]:text-emerald-200"
              >
                <input
                  type="radio"
                  name={`${instanceId}-tma-tco-horizon`}
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
          <p className="mb-0 mt-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
            Sur 24 ou 36 mois, le calcul répète sans changement les coûts
            annuels, le temps de votre équipe et les risques déclarés. Il ne
            compte la reprise et la sortie qu’une fois, sans inflation,
            renégociation ni variation de charge.
          </p>
        </fieldset>

        <label htmlFor={`${instanceId}-internal-hourly-rate`} className="block">
          <span className="block text-sm font-semibold text-zinc-950 dark:text-white">
            Coût d’une heure de votre équipe, salaire et charges compris
          </span>
          <span className="relative mt-2 block max-w-xs">
            <input
              id={`${instanceId}-internal-hourly-rate`}
              type="number"
              min={0}
              step={0.01}
              inputMode="decimal"
              value={
                Number.isFinite(internalHourlyRate) ? internalHourlyRate : ""
              }
              onChange={(event) => {
                setInternalHourlyRate(parseAmount(event.target.value));
                setExportStatus("idle");
              }}
              aria-describedby={limitationsId}
              aria-invalid={calculation.validationErrors.some(
                (error) => error.field === "internalHourlyRate",
              )}
              className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 pr-8 text-sm text-zinc-950 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-1 aria-[invalid=true]:ring-red-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:focus:ring-emerald-950"
            />
            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-zinc-500">
              €
            </span>
          </span>
        </label>
      </div>

      <div className="grid gap-4 p-4 sm:p-6 xl:grid-cols-2">
        {TMA_TCO_PATHS.map((path, pathIndex) => (
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

            <div className="grid gap-3 sm:grid-cols-2">
              {TMA_TCO_FIELDS.map((field) => {
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
                          updatePath(path.key, field.key, event.target.value)
                        }
                        aria-describedby={`${helpId} ${limitationsId}`}
                        aria-invalid={isInvalid}
                        className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 pr-8 text-sm text-zinc-950 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-1 aria-[invalid=true]:ring-red-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:ring-emerald-950"
                      />
                      <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-zinc-500">
                        {field.suffix}
                      </span>
                    </span>
                    <span id={helpId} className="sr-only">
                      {field.help}
                    </span>
                  </label>
                );
              })}
            </div>

            <label className="mt-4 flex cursor-pointer items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs leading-relaxed text-amber-950 dark:border-amber-900 dark:bg-amber-950/20 dark:text-amber-200">
              <input
                type="checkbox"
                checked={inputs[path.key].hasUnknownCosts}
                onChange={(event) =>
                  updateUnknownCosts(path.key, event.target.checked)
                }
                className="mt-0.5 size-4 shrink-0 accent-amber-600"
              />
              <span>
                <strong className="block">
                  Des coûts importants restent à confirmer
                </strong>
                Cochez cette case tant que la reprise, les outils, la sortie ou
                des pertes restant à votre charge ne sont pas chiffrés. Cette
                option sera exclue du classement, mais ses coûts connus
                resteront visibles.
              </span>
            </label>
          </fieldset>
        ))}
      </div>

      <div className="border-t border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-6">
        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-zinc-500">
            Coûts renseignés sur {horizon} mois
          </p>
          <p className="mb-0 text-sm text-zinc-600 dark:text-zinc-400">
            Coût externe ou coût de la fonction + temps de votre équipe +
            reprise, outils et sortie + pertes restant à votre charge.
          </p>
        </div>

        {calculation.isValid ? (
          <>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {calculation.results.map((result) => {
                const path = TMA_TCO_PATHS.find(
                  (item) => item.key === result.path,
                );
                const isLowest = result.differenceFromLowest === 0;

                return (
                  <article
                    key={result.path}
                    className={`rounded-xl border p-4 ${
                      result.hasUnknownCosts
                        ? "border-amber-300 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/20"
                        : isLowest
                          ? "border-emerald-400 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-950/30"
                          : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
                    }`}
                  >
                    <p className="mb-1 text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                      {path?.shortLabel}
                    </p>
                    <p className="mb-0 text-xl font-bold text-zinc-950 dark:text-white">
                      {formatEuro(result.total)}
                    </p>
                    <p className="mb-0 mt-1 text-[11px] font-medium text-zinc-600 dark:text-zinc-400">
                      Coût renseigné
                    </p>
                    <p className="mb-0 mt-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                      Externe / fonction {formatEuro(result.providerTotal)} ·
                      temps de votre équipe {formatEuro(result.internalTotal)}
                    </p>
                    <p className="mb-0 mt-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                      {result.hasUnknownCosts
                        ? "Coût partiel — exclu du classement tant que des postes restent à confirmer"
                        : isLowest
                          ? "Coût renseigné le plus faible — comparaison à confirmer sur le service"
                          : `Écart : + ${formatEuro(result.differenceFromLowest ?? 0)}`}
                    </p>
                  </article>
                );
              })}
            </div>
            <p
              className="sr-only"
              aria-live="polite"
              aria-atomic="true"
              id={statusId}
              role="status"
            >
              {lowestComparableResult
                ? `Recalcul effectué : ${lowestComparablePath?.shortLabel ?? "une option"} possède le coût renseigné le plus faible parmi les options sans poste à confirmer, à ${formatEuro(lowestComparableResult.total)}.`
                : "Recalcul effectué : aucun classement tant que chaque option conserve au moins un poste important à confirmer."}
            </p>
          </>
        ) : (
          <div
            className="mt-5 rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-900 dark:border-red-900 dark:bg-red-950/30 dark:text-red-200"
            role="alert"
            id={statusId}
          >
            Corrigez les montants avant de comparer. Chaque champ doit contenir
            un nombre supérieur ou égal à zéro.
          </div>
        )}

        <div
          id={limitationsId}
          className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs leading-relaxed text-amber-950 dark:border-amber-900 dark:bg-amber-950/20 dark:text-amber-200"
        >
          <strong>Limites :</strong> ce calcul ne mesure pas la qualité du code,
          la compétence disponible, la couverture horaire, la probabilité d’un
          incident ni la valeur d’une évolution. Saisissez zéro uniquement
          lorsqu’un poste est réellement nul ou déjà inclus et documenté. Sinon,
          gardez « à confirmer » coché : le coût connu restera visible sans être
          présenté comme un coût complet ni comme un vainqueur. Comparez ensuite
          accès, sécurité, acceptation, dépendance et sortie.
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={copySummary}
            disabled={!calculation.isValid}
            className="rounded-lg bg-zinc-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            Copier le résumé
          </button>
          <button
            type="button"
            onClick={downloadCsv}
            disabled={!calculation.isValid}
            className="rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 transition hover:border-zinc-400 hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900"
          >
            Télécharger le CSV
          </button>
          <button
            type="button"
            onClick={resetExample}
            className="rounded-lg px-4 py-2.5 text-sm font-semibold text-zinc-600 transition hover:bg-zinc-200 dark:text-zinc-300 dark:hover:bg-zinc-800"
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
      </div>
    </section>
  );
}
