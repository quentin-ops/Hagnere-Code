"use client";

import { useId, useState } from "react";
import {
  APPLICATION_ROI_EXAMPLE_INPUTS,
  APPLICATION_ROI_OPTION_KEYS,
  APPLICATION_ROI_OPTION_LABELS,
  buildApplicationRoiCsv,
  buildApplicationRoiSummary,
  calculateApplicationRoi,
  cloneApplicationRoiInputs,
  type ApplicationRoiBaselineField,
  type ApplicationRoiInputs,
  type ApplicationRoiOptionField,
  type ApplicationRoiOptionKey,
} from "@/lib/application-roi";

const euro = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 2,
});

const percentage = new Intl.NumberFormat("fr-FR", {
  maximumFractionDigits: 2,
});

type ExportStatus = "idle" | "copied" | "copy-error" | "downloaded";

const BASELINE_FIELDS: Array<{
  key: ApplicationRoiBaselineField;
  label: string;
  help: string;
  suffix: string;
  minimum: number;
  maximum?: number;
  step: number;
}> = [
  {
    key: "annualHours",
    label: "Heures de travail actuelles par an",
    help: "Mesurez un cycle normal et ses exceptions, sans compter l’attente comme du travail actif.",
    suffix: "h/an",
    minimum: 0,
    step: 0.1,
  },
  {
    key: "hourlyCost",
    label: "Coût chargé d’une heure",
    help: "Utilisez le coût propre à l’entreprise, pas un salaire net ni un repère de marché non adapté.",
    suffix: "€/h",
    minimum: 0,
    step: 0.01,
  },
  {
    key: "annualCashLosses",
    label: "Décaissements actuels réellement évitables",
    help: "Avoirs, pénalités, expéditions, abonnements ou autres paiements qui disparaîtraient réellement.",
    suffix: "€/an",
    minimum: 0,
    step: 0.01,
  },
  {
    key: "horizonMonths",
    label: "Horizon commun de comparaison",
    help: "Entre 12 et 120 mois. Comparez toutes les options entre les mêmes dates.",
    suffix: "mois",
    minimum: 12,
    maximum: 120,
    step: 1,
  },
];

const OPTION_FIELDS: Array<{
  key: ApplicationRoiOptionField;
  label: string;
  help: string;
  suffix: string;
  minimum: number;
  maximum?: number;
  step: number;
}> = [
  {
    key: "initialExternalCost",
    label: "Coûts externes initiaux",
    help: "Achat, cadrage, configuration, développement, migration et formation facturés.",
    suffix: "€",
    minimum: 0,
    step: 0.01,
  },
  {
    key: "internalProjectHours",
    label: "Temps interne avant lancement",
    help: "Heures de cadrage, recette, reprise, formation et conduite du changement.",
    suffix: "h",
    minimum: 0,
    step: 0.1,
  },
  {
    key: "monthlyOperatingCost",
    label: "Coût mensuel en service",
    help: "Licence, hébergement, maintenance, support et opérations additionnelles.",
    suffix: "€/mois",
    minimum: 0,
    step: 0.01,
  },
  {
    key: "exitCost",
    label: "Coût de sortie à l’horizon",
    help: "Export, transfert, archivage, résiliation et remplacement.",
    suffix: "€",
    minimum: 0,
    step: 0.01,
  },
  {
    key: "goLiveMonth",
    label: "Premier mois en service",
    help: "Mois 1 signifie que les premiers bénéfices peuvent apparaître pendant le premier mois.",
    suffix: "mois",
    minimum: 1,
    step: 1,
  },
  {
    key: "rampMonths",
    label: "Montée progressive de l’adoption",
    help: "Le modèle applique 1/n, 2/n, puis n/n du bénéfice stable. Saisissez 1 pour un effet immédiat.",
    suffix: "mois",
    minimum: 1,
    step: 1,
  },
  {
    key: "reusableHoursSharePct",
    label: "Heures supprimées réellement réutilisées",
    help: "Part du temps libéré affectée à une production, une vente ou une charge évitée identifiable.",
    suffix: "%",
    minimum: 0,
    maximum: 100,
    step: 0.1,
  },
  {
    key: "avoidedCashSharePct",
    label: "Décaissements réellement évités",
    help: "Part des pertes actuelles que cette option peut réellement supprimer.",
    suffix: "%",
    minimum: 0,
    maximum: 100,
    step: 0.1,
  },
];

function parseNumber(raw: string) {
  if (raw.trim() === "") {
    return Number.NaN;
  }

  const parsed = Number.parseFloat(raw.replace(",", "."));
  return Number.isFinite(parsed) ? parsed : Number.NaN;
}

function formatEuro(value: number | null) {
  return value === null || !Number.isFinite(value) ? "—" : euro.format(value);
}

function formatPercentage(value: number | null) {
  return value === null || !Number.isFinite(value)
    ? "—"
    : `${percentage.format(value)} %`;
}

function formatRequiredShare(value: number | null) {
  if (value === null || !Number.isFinite(value)) {
    return "Non calculable";
  }
  if (value > 100) {
    return `Impossible entre 0 et 100 % · seuil ${percentage.format(value)} %`;
  }
  if (value === 0) {
    return "Déjà atteint à 0 %";
  }
  return formatPercentage(value);
}

function sensitivityReading(
  netEconomicValue: number,
  referenceCost: number,
  hasUnknownCosts: boolean,
) {
  if (hasUnknownCosts) {
    return "Provisoire : des coûts manquent, aucune décision n’est possible.";
  }
  if (netEconomicValue < 0) {
    return "Le projet détruit de la valeur dans ce scénario.";
  }
  if (netEconomicValue < referenceCost * 0.1) {
    return "Marge faible : pilote et mesure avant engagement.";
  }
  return "Marge positive, à confirmer avec les risques non monétisés.";
}

export function ApplicationRoiCalculator() {
  const instanceId = useId().replaceAll(":", "");
  const [inputs, setInputs] = useState<ApplicationRoiInputs>(() =>
    cloneApplicationRoiInputs(APPLICATION_ROI_EXAMPLE_INPUTS),
  );
  const [exportStatus, setExportStatus] = useState<ExportStatus>("idle");
  const calculation = calculateApplicationRoi(inputs);
  const centralProjectCost = calculation.results?.project.totalCost ?? 0;
  const limitsId = `${instanceId}-application-roi-limits`;
  const liveStatusId = `${instanceId}-application-roi-status`;
  const costStressHelpId = `${instanceId}-cost-stress-help`;
  const costStressErrorId = `${instanceId}-cost-stress-error`;
  const isCostStressInvalid = calculation.validationErrors.some(
    (error) => error.scope === "sensitivity",
  );

  function updateBaseline(field: ApplicationRoiBaselineField, raw: string) {
    setInputs((current) => ({
      ...current,
      baseline: {
        ...current.baseline,
        [field]: parseNumber(raw),
      },
    }));
    setExportStatus("idle");
  }

  function updateOption(
    option: ApplicationRoiOptionKey,
    field: ApplicationRoiOptionField,
    raw: string,
  ) {
    setInputs((current) => ({
      ...current,
      options: {
        ...current.options,
        [option]: {
          ...current.options[option],
          [field]: parseNumber(raw),
        },
      },
    }));
    setExportStatus("idle");
  }

  function updateUnknownCosts(
    option: ApplicationRoiOptionKey,
    checked: boolean,
  ) {
    setInputs((current) => ({
      ...current,
      options: {
        ...current.options,
        [option]: {
          ...current.options[option],
          hasUnknownCosts: checked,
        },
      },
    }));
    setExportStatus("idle");
  }

  function resetExample() {
    setInputs(cloneApplicationRoiInputs(APPLICATION_ROI_EXAMPLE_INPUTS));
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
        buildApplicationRoiSummary(inputs, calculation),
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

    const csv = buildApplicationRoiCsv(inputs, calculation);
    const blob = new Blob([`\ufeff${csv}`], {
      type: "text/csv;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `comparaison-roi-application-metier-${inputs.baseline.horizonMonths}-mois.csv`;
    link.click();
    URL.revokeObjectURL(url);
    setExportStatus("downloaded");
  }

  const exportMessage = {
    idle: "",
    copied: "Le résumé qualifié a été copié dans le presse-papiers.",
    "copy-error":
      "La copie est indisponible dans ce navigateur. Le téléchargement CSV reste utilisable.",
    downloaded: "Le fichier CSV a été préparé sur votre appareil.",
  }[exportStatus];

  const verdict =
    calculation.comparableWinner === null
      ? "Aucun gagnant : au moins une option conserve des coûts importants à confirmer."
      : calculation.comparableWinner === "status-quo"
        ? "Aucune des deux options ne crée de valeur nette positive : mesurez mieux, réduisez le périmètre ou reportez."
        : calculation.comparableWinner === "tie"
          ? "Égalité : les deux options créent la même valeur économique nette avec ces hypothèses."
          : `${APPLICATION_ROI_OPTION_LABELS[calculation.comparableWinner]} crée ici la valeur économique nette la plus élevée.`;

  return (
    <section
      className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
      aria-labelledby={`${instanceId}-application-roi-title`}
    >
      <div className="border-b border-zinc-800 bg-zinc-950 px-4 py-5 text-white sm:px-6">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-300">
          Calcul local · aucune donnée envoyée
        </p>
        <h3
          id={`${instanceId}-application-roi-title`}
          className="m-0 text-lg font-bold sm:text-xl"
        >
          Comparez une option standard au projet que vous envisagez
        </h3>
        <p className="mb-0 mt-2 max-w-4xl text-sm leading-relaxed text-zinc-400">
          L’exemple de départ est entièrement fictif. Remplacez chaque valeur
          par une mesure, un devis ou une hypothèse identifiée. Le calcul classe
          les options sur leur valeur nette, jamais sur le seul pourcentage de
          ROI.
        </p>
      </div>

      <fieldset className="border-b border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-6">
        <legend className="px-1 text-sm font-bold text-zinc-950 dark:text-white">
          1. Situation actuelle et horizon commun
        </legend>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {BASELINE_FIELDS.map((field) => {
            const inputId = `${instanceId}-baseline-${field.key}`;
            const helpId = `${inputId}-help`;
            const errorId = `${inputId}-error`;
            const value = inputs.baseline[field.key];
            const isInvalid = calculation.validationErrors.some(
              (error) =>
                error.scope === "baseline" && error.field === field.key,
            );

            return (
              <label key={field.key} htmlFor={inputId} className="block">
                <span className="block text-xs font-semibold leading-snug text-zinc-800 dark:text-zinc-200">
                  {field.label}
                </span>
                <span className="relative mt-2 block">
                  <input
                    id={inputId}
                    type="number"
                    min={field.minimum}
                    max={field.maximum}
                    step={field.step}
                    inputMode="decimal"
                    value={Number.isFinite(value) ? value : ""}
                    onChange={(event) =>
                      updateBaseline(field.key, event.target.value)
                    }
                    aria-describedby={`${helpId} ${
                      isInvalid ? `${errorId} ` : ""
                    }${limitsId}`}
                    aria-invalid={isInvalid}
                    className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 pr-16 text-sm text-zinc-950 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-1 aria-[invalid=true]:ring-red-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:focus:ring-emerald-950"
                  />
                  <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-zinc-500">
                    {field.suffix}
                  </span>
                </span>
                <span
                  id={helpId}
                  className="mt-1.5 block text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-400"
                >
                  {field.help}
                </span>
                {isInvalid ? (
                  <span
                    id={errorId}
                    className="mt-1 block text-[11px] font-semibold text-red-700 dark:text-red-300"
                  >
                    Valeur à corriger avant le calcul.
                  </span>
                ) : null}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="grid gap-5 p-4 sm:p-6 xl:grid-cols-2">
        {APPLICATION_ROI_OPTION_KEYS.map((option, optionIndex) => (
          <fieldset
            key={option}
            className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800"
          >
            <legend className="max-w-full px-1 text-sm font-bold text-zinc-950 dark:text-white">
              <span className="mr-2 inline-flex size-7 items-center justify-center rounded-full bg-zinc-100 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                {optionIndex + 2}
              </span>
              {APPLICATION_ROI_OPTION_LABELS[option]}
            </legend>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {OPTION_FIELDS.map((field) => {
                const inputId = `${instanceId}-${option}-${field.key}`;
                const helpId = `${inputId}-help`;
                const errorId = `${inputId}-error`;
                const value = inputs.options[option][field.key];
                const isInvalid = calculation.validationErrors.some(
                  (error) =>
                    error.scope === option && error.field === field.key,
                );

                return (
                  <label key={field.key} htmlFor={inputId} className="block">
                    <span className="block text-xs font-semibold leading-snug text-zinc-800 dark:text-zinc-200">
                      {field.label}
                    </span>
                    <span className="relative mt-2 block">
                      <input
                        id={inputId}
                        type="number"
                        min={field.minimum}
                        max={
                          field.key === "goLiveMonth" ||
                          field.key === "rampMonths"
                            ? inputs.baseline.horizonMonths
                            : field.maximum
                        }
                        step={field.step}
                        inputMode="decimal"
                        value={Number.isFinite(value) ? value : ""}
                        onChange={(event) =>
                          updateOption(option, field.key, event.target.value)
                        }
                        aria-describedby={`${helpId} ${
                          isInvalid ? `${errorId} ` : ""
                        }${limitsId}`}
                        aria-invalid={isInvalid}
                        className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 pr-16 text-sm text-zinc-950 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-1 aria-[invalid=true]:ring-red-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:ring-emerald-950"
                      />
                      <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-zinc-500">
                        {field.suffix}
                      </span>
                    </span>
                    <span
                      id={helpId}
                      className="mt-1.5 block text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-400"
                    >
                      {field.help}
                    </span>
                    {isInvalid ? (
                      <span
                        id={errorId}
                        className="mt-1 block text-[11px] font-semibold text-red-700 dark:text-red-300"
                      >
                        Valeur à corriger avant le calcul.
                      </span>
                    ) : null}
                  </label>
                );
              })}
            </div>

            <label className="mt-4 flex cursor-pointer items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs leading-relaxed text-amber-950 dark:border-amber-900 dark:bg-amber-950/20 dark:text-amber-200">
              <input
                type="checkbox"
                checked={inputs.options[option].hasUnknownCosts}
                onChange={(event) =>
                  updateUnknownCosts(option, event.target.checked)
                }
                className="mt-0.5 size-4 shrink-0 accent-amber-600"
              />
              <span>
                <strong className="block">
                  Des coûts importants restent à confirmer
                </strong>
                Le total renseigné restera visible, mais cette option ne pourra
                pas être présentée comme gagnante.
              </span>
            </label>
          </fieldset>
        ))}
      </div>

      <div className="border-t border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-6">
        <label htmlFor={`${instanceId}-cost-stress`} className="block max-w-xl">
          <span className="block text-sm font-bold text-zinc-950 dark:text-white">
            Stress appliqué aux coûts initiaux du projet
          </span>
          <span
            id={costStressHelpId}
            className="mt-1 block text-xs leading-relaxed text-zinc-500 dark:text-zinc-400"
          >
            Le +20 % fictif sert d’exemple. Remplacez-le par l’écart observé
            entre budget et réalisé sur vos projets ou devis comparables.
          </span>
          <span className="relative mt-2 block max-w-48">
            <input
              id={`${instanceId}-cost-stress`}
              type="number"
              min={0}
              max={300}
              step={0.1}
              inputMode="decimal"
              value={
                Number.isFinite(inputs.costStressPct)
                  ? inputs.costStressPct
                  : ""
              }
              onChange={(event) => {
                setInputs((current) => ({
                  ...current,
                  costStressPct: parseNumber(event.target.value),
                }));
                setExportStatus("idle");
              }}
              aria-describedby={`${costStressHelpId} ${
                isCostStressInvalid ? `${costStressErrorId} ` : ""
              }${limitsId}`}
              aria-invalid={isCostStressInvalid}
              className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 pr-10 text-sm text-zinc-950 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-1 aria-[invalid=true]:ring-red-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:focus:ring-emerald-950"
            />
            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-zinc-500">
              %
            </span>
          </span>
          {isCostStressInvalid ? (
            <span
              id={costStressErrorId}
              className="mt-1 block text-[11px] font-semibold text-red-700 dark:text-red-300"
            >
              Valeur à corriger avant le calcul.
            </span>
          ) : null}
        </label>

        {calculation.isValid && calculation.results ? (
          <>
            <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-950 dark:border-blue-900 dark:bg-blue-950/20 dark:text-blue-100">
              <p className="m-0 font-bold">
                Charge économique actuelle sur {inputs.baseline.horizonMonths}{" "}
                mois : {formatEuro(calculation.baselineTotalBurden)}
              </p>
              <p className="mb-0 mt-1 text-xs leading-relaxed">
                Dont {formatEuro(calculation.baselineCapacityValue)} de capacité
                valorisée et {formatEuro(calculation.baselineCashBurden)} de
                décaissements. Ce n’est pas une économie promise : seule la
                fraction réellement évitée ou réutilisée apparaît ci-dessous.
              </p>
            </div>

            <div className="mt-5 grid gap-4 xl:grid-cols-2">
              {APPLICATION_ROI_OPTION_KEYS.map((option) => {
                const result = calculation.results?.[option];
                if (!result) {
                  return null;
                }

                const isWinner = calculation.comparableWinner === option;

                return (
                  <article
                    key={option}
                    className={`rounded-2xl border p-4 ${
                      result.hasUnknownCosts
                        ? "border-amber-300 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/20"
                        : isWinner
                          ? "border-emerald-400 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-950/30"
                          : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
                    }`}
                  >
                    <p className="m-0 text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      {APPLICATION_ROI_OPTION_LABELS[option]}
                    </p>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      <div>
                        <p className="m-0 text-[11px] text-zinc-500 dark:text-zinc-400">
                          Valeur économique nette
                        </p>
                        <p className="m-0 mt-1 text-xl font-bold text-zinc-950 dark:text-white">
                          {formatEuro(result.netEconomicValue)}
                        </p>
                      </div>
                      <div>
                        <p className="m-0 text-[11px] text-zinc-500 dark:text-zinc-400">
                          ROI simple cumulé
                        </p>
                        <p className="m-0 mt-1 text-xl font-bold text-zinc-950 dark:text-white">
                          {formatPercentage(result.roiPct)}
                        </p>
                      </div>
                    </div>
                    <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                      <div>
                        <dt className="text-zinc-500 dark:text-zinc-400">
                          Capacité réutilisée
                        </dt>
                        <dd className="m-0 mt-0.5 font-semibold text-zinc-900 dark:text-white">
                          {formatEuro(result.capacityBenefit)}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-zinc-500 dark:text-zinc-400">
                          Décaissements évités
                        </dt>
                        <dd className="m-0 mt-0.5 font-semibold text-zinc-900 dark:text-white">
                          {formatEuro(result.cashBenefit)}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-zinc-500 dark:text-zinc-400">
                          Coût complet renseigné
                        </dt>
                        <dd className="m-0 mt-0.5 font-semibold text-zinc-900 dark:text-white">
                          {formatEuro(result.totalCost)}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-zinc-500 dark:text-zinc-400">
                          Retour économique
                        </dt>
                        <dd className="m-0 mt-0.5 font-semibold text-zinc-900 dark:text-white">
                          {result.paybackMonth === null
                            ? "hors horizon"
                            : `mois ${result.paybackMonth}`}
                        </dd>
                      </div>
                    </dl>
                    <p className="mb-0 mt-4 text-xs font-semibold leading-relaxed text-zinc-700 dark:text-zinc-300">
                      {result.hasUnknownCosts
                        ? "Résultat partiel : aucun verdict tant que les postes inconnus ne sont pas chiffrés."
                        : isWinner
                          ? "Valeur nette la plus élevée des deux options renseignées."
                          : "Cette option reste visible : un ROI positif ne suffit pas si une autre solution crée plus de valeur."}
                    </p>
                  </article>
                );
              })}
            </div>

            <div
              className={`mt-5 rounded-xl border p-4 ${
                calculation.comparableWinner === null
                  ? "border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-900 dark:bg-amber-950/20 dark:text-amber-100"
                  : calculation.comparableWinner === "status-quo"
                    ? "border-red-300 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950/20 dark:text-red-100"
                    : "border-emerald-300 bg-emerald-50 text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/20 dark:text-emerald-100"
              }`}
            >
              <p className="m-0 text-sm font-bold">{verdict}</p>
              <p className="mb-0 mt-1 text-xs leading-relaxed">
                Ce verdict économique ne compare ni l’adéquation fonctionnelle,
                ni la sécurité, ni la trésorerie disponible. Vérifiez ces
                conditions avant de décider.
              </p>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <article className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
                <p className="m-0 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                  Projet à l’équilibre
                </p>
                <p className="m-0 mt-1 text-lg font-bold text-zinc-950 dark:text-white">
                  {inputs.options.project.hasUnknownCosts
                    ? "Non calculable · coûts incomplets"
                    : formatRequiredShare(
                        calculation.results.project
                          .requiredReusableHoursSharePct,
                      )}
                </p>
                <p className="mb-0 mt-1 text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-400">
                  Part minimale des heures supprimées à réutiliser, autres
                  hypothèses inchangées.
                </p>
              </article>
              <article className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
                <p className="m-0 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                  Coût initial économique maximal
                </p>
                <p className="m-0 mt-1 text-lg font-bold text-zinc-950 dark:text-white">
                  {inputs.options.project.hasUnknownCosts
                    ? "Non calculable · coûts incomplets"
                    : calculation.results.project
                          .canBreakEvenWithZeroInitialCost
                      ? formatEuro(
                          calculation.results.project
                            .maximumInitialEconomicCost,
                        )
                      : "Impossible même à 0 €"}
                </p>
                <p className="mb-0 mt-1 text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-400">
                  Coûts externes et temps interne cumulés pour rester à zéro,
                  exploitation et sortie inchangées.
                </p>
              </article>
              <article className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
                <p className="m-0 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                  Projet au niveau du standard
                </p>
                <p className="m-0 mt-1 text-lg font-bold text-zinc-950 dark:text-white">
                  {inputs.options.standard.hasUnknownCosts ||
                  inputs.options.project.hasUnknownCosts
                    ? "Non classable"
                    : formatRequiredShare(
                        calculation.projectShareToMatchStandardPct,
                      )}
                </p>
                <p className="mb-0 mt-1 text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-400">
                  Part d’heures à réutiliser pour égaler la valeur nette de
                  l’option standard.
                </p>
              </article>
            </div>

            {inputs.options.project.hasUnknownCosts ? (
              <p className="mb-0 mt-5 rounded-xl border border-amber-300 bg-amber-50 p-3 text-xs font-semibold leading-relaxed text-amber-950 dark:border-amber-900 dark:bg-amber-950/20 dark:text-amber-100">
                Sensibilités provisoires : elles utilisent seulement les coûts
                renseignés. Aucun scénario ci-dessous ne peut soutenir une
                décision tant que les postes manquants ne sont pas chiffrés.
              </p>
            ) : null}

            <div className="mt-6 grid gap-3 lg:hidden">
              <h4 className="m-0 text-sm font-bold text-zinc-950 dark:text-white">
                Quand le projet envisagé cesse-t-il de tenir ?
              </h4>
              {calculation.sensitivity.map((item) => (
                <article
                  key={item.key}
                  className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
                >
                  <p className="m-0 text-xs font-bold text-zinc-950 dark:text-white">
                    {item.label}
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div>
                      <p className="m-0 text-[11px] text-zinc-500 dark:text-zinc-400">
                        Valeur nette
                      </p>
                      <p className="m-0 mt-1 text-sm font-bold text-zinc-950 dark:text-white">
                        {formatEuro(item.result.netEconomicValue)}
                      </p>
                    </div>
                    <div>
                      <p className="m-0 text-[11px] text-zinc-500 dark:text-zinc-400">
                        ROI
                      </p>
                      <p className="m-0 mt-1 text-sm font-bold text-zinc-950 dark:text-white">
                        {formatPercentage(item.result.roiPct)}
                      </p>
                    </div>
                  </div>
                  <p className="mb-0 mt-3 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {sensitivityReading(
                      item.result.netEconomicValue,
                      centralProjectCost,
                      inputs.options.project.hasUnknownCosts,
                    )}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-6 hidden overflow-x-auto rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 lg:block">
              <table className="w-full min-w-[680px] border-collapse text-left text-xs">
                <caption className="px-4 pb-2 pt-4 text-left text-sm font-bold text-zinc-950 dark:text-white">
                  Quand le projet envisagé cesse-t-il de tenir ?
                </caption>
                <thead className="border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Test isolé</th>
                    <th className="px-4 py-3 text-right font-semibold">
                      Valeur nette
                    </th>
                    <th className="px-4 py-3 text-right font-semibold">ROI</th>
                    <th className="px-4 py-3 font-semibold">Lecture</th>
                  </tr>
                </thead>
                <tbody>
                  {calculation.sensitivity.map((item) => (
                    <tr
                      key={item.key}
                      className="border-b border-zinc-100 last:border-0 dark:border-zinc-900"
                    >
                      <th className="px-4 py-3 align-top font-semibold text-zinc-900 dark:text-white">
                        {item.label}
                      </th>
                      <td className="px-4 py-3 text-right align-top font-semibold">
                        {formatEuro(item.result.netEconomicValue)}
                      </td>
                      <td className="px-4 py-3 text-right align-top">
                        {formatPercentage(item.result.roiPct)}
                      </td>
                      <td className="px-4 py-3 align-top text-zinc-600 dark:text-zinc-400">
                        {sensitivityReading(
                          item.result.netEconomicValue,
                          centralProjectCost,
                          inputs.options.project.hasUnknownCosts,
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p
              id={liveStatusId}
              className="sr-only"
              aria-live="polite"
              aria-atomic="true"
              role="status"
            >
              {inputs.options.project.hasUnknownCosts ? (
                <>
                  Recalcul effectué. {verdict} Résultat provisoire : les valeurs
                  nettes, le ROI, les seuils et les sensibilités excluent des
                  coûts à confirmer et ne peuvent pas soutenir une décision.
                </>
              ) : (
                <>
                  Recalcul effectué. {verdict} Valeur nette du projet :{" "}
                  {formatEuro(calculation.results.project.netEconomicValue)}.
                  Seuil d’heures réutilisées :{" "}
                  {formatPercentage(
                    calculation.results.project.requiredReusableHoursSharePct,
                  )}
                  .
                </>
              )}
            </p>
          </>
        ) : (
          <div
            className="mt-6 rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-950 dark:border-red-900 dark:bg-red-950/30 dark:text-red-100"
            role="alert"
            id={liveStatusId}
          >
            Corrigez les champs signalés. Les coûts et volumes doivent être
            positifs ou nuls ; les parts doivent rester entre 0 et 100 % ;
            l’horizon doit couvrir 12 à 120 mois et chaque calendrier doit tenir
            dans cet horizon.
          </div>
        )}

        <div
          id={limitsId}
          className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs leading-relaxed text-amber-950 dark:border-amber-900 dark:bg-amber-950/20 dark:text-amber-100"
        >
          <strong>Limites :</strong> estimation économique illustrative, non
          actualisée, sans fiscalité, inflation, financement ni risque
          probabiliste. La capacité réutilisée n’est pas une entrée de caisse.
          La montée linéaire est une approximation. Le coût de sortie est imputé
          au dernier mois, pas provisionné chaque mois : une autre convention
          changerait le délai de retour. Un zéro signifie que le poste est
          réellement nul ou inclus ailleurs ; sinon, cochez « coûts à confirmer
          ». Faites valider le calendrier de trésorerie séparément.
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
