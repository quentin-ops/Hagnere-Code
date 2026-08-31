"use client";

import { useState } from "react";
import {
  GOOGLE_ADS_QUOTE_HORIZONS,
  GOOGLE_ADS_QUOTE_MAX_HOURS,
  GOOGLE_ADS_QUOTE_MAX_MARGIN_WINDOW_MONTHS,
  GOOGLE_ADS_QUOTE_MAX_MONEY,
  GOOGLE_ADS_QUOTE_MAX_RATE,
  GOOGLE_ADS_QUOTE_MAX_VOLUME,
  compareGoogleAdsQuotes,
  type GoogleAdsBreakEvenStatus,
  type GoogleAdsQuoteHorizon,
  type GoogleAdsQuoteInputs,
  type GoogleAdsPricingModel,
} from "@/lib/google-ads-quote-comparison";

const INITIAL_VALUES: GoogleAdsQuoteInputs = {
  monthlyMediaSpendHT: 5000,
  percentageFeeBasisMonthlyHT: 5000,
  hybridFeeBasisMonthlyHT: 5000,
  franceServedSpendSharePct: 100,
  franceRegulatoryOperatingCostPct: 2,
  vatRatePct: 20,
  vatRecoverablePct: 100,
  oneOffCommonExternalHT: 2000,
  monthlyCommonExternalHT: 250,
  internalHourlyCost: 50,
  monthlyClicks: 1000,
  monthlyPrimaryActions: 50,
  monthlyQualifiedLeads: 20,
  monthlyNewCustomers: 4,
  contributionMarginPerAttributedCustomerHT: 2500,
  contributionMarginWindowMonths: 12,
  fixedSetupFeeHT: 750,
  fixedMonthlyFeeHT: 900,
  fixedOneOffScopeAdjustmentHT: 0,
  fixedMonthlyScopeAdjustmentHT: 0,
  fixedExitCost3MonthsHT: 0,
  fixedExitCost6MonthsHT: 0,
  fixedExitCost12MonthsHT: 0,
  fixedInitialInternalHours: 8,
  fixedMonthlyInternalHours: 3,
  percentageSetupFeeHT: 900,
  percentageFeeRatePct: 15,
  percentageMinimumMonthlyFeeHT: 0,
  percentageMaximumMonthlyFeeHT: 0,
  percentageOneOffScopeAdjustmentHT: 0,
  percentageMonthlyScopeAdjustmentHT: 0,
  percentageExitCost3MonthsHT: 0,
  percentageExitCost6MonthsHT: 0,
  percentageExitCost12MonthsHT: 0,
  percentageInitialInternalHours: 8,
  percentageMonthlyInternalHours: 3,
  hybridSetupFeeHT: 800,
  hybridMonthlyBaseFeeHT: 500,
  hybridFeeRatePct: 8,
  hybridMinimumMonthlyFeeHT: 0,
  hybridMaximumMonthlyFeeHT: 0,
  hybridOneOffScopeAdjustmentHT: 0,
  hybridMonthlyScopeAdjustmentHT: 0,
  hybridExitCost3MonthsHT: 0,
  hybridExitCost6MonthsHT: 0,
  hybridExitCost12MonthsHT: 0,
  hybridInitialInternalHours: 8,
  hybridMonthlyInternalHours: 3,
  timeSetupHours: 8,
  timeMonthlyHours: 10,
  timeHourlyRateHT: 100,
  timeOneOffScopeAdjustmentHT: 0,
  timeMonthlyScopeAdjustmentHT: 0,
  timeExitCost3MonthsHT: 0,
  timeExitCost6MonthsHT: 0,
  timeExitCost12MonthsHT: 0,
  timeInitialInternalHours: 8,
  timeMonthlyInternalHours: 3,
};

type Field = {
  key: keyof GoogleAdsQuoteInputs;
  label: string;
  help: string;
  suffix: string;
  step?: number;
  min?: number;
  max?: number;
};

const commonFields: Field[] = [
  {
    key: "monthlyMediaSpendHT",
    label: "Budget média mensuel hors coût réglementaire",
    help: "Base publicitaire avant le coût réglementaire calculé séparément ci-dessous.",
    suffix: "€ HT",
  },
  {
    key: "oneOffCommonExternalHT",
    label: "Coûts externes initiaux vraiment communs",
    help: "Seulement les coûts dus dans les quatre offres. Les différences se saisissent offre par offre.",
    suffix: "€ HT",
  },
  {
    key: "monthlyCommonExternalHT",
    label: "Coûts externes mensuels vraiment communs",
    help: "Outils ou achats strictement identiques dans les quatre scénarios.",
    suffix: "€ HT",
  },
  {
    key: "internalHourlyCost",
    label: "Coût d’une heure interne",
    help: "Coût chargé commun ; les heures nécessaires sont saisies pour chaque offre.",
    suffix: "€",
  },
];

const taxFields: Field[] = [
  {
    key: "franceServedSpendSharePct",
    label: "Part des annonces diffusées en France",
    help: "Hypothèse utilisée pour le coût réglementaire Google France.",
    suffix: "%",
    max: 100,
  },
  {
    key: "franceRegulatoryOperatingCostPct",
    label: "Coût réglementaire Google saisi",
    help: "Valeur modifiable : vérifiez votre facture et l’aide Google à la date du devis.",
    suffix: "%",
    max: GOOGLE_ADS_QUOTE_MAX_RATE,
  },
  {
    key: "vatRatePct",
    label: "TVA décaissée retenue",
    help: "Hypothèse de trésorerie, à adapter à l’émetteur et à votre situation.",
    suffix: "%",
    max: 100,
  },
  {
    key: "vatRecoverablePct",
    label: "Part de TVA récupérable",
    help: "Une récupération à 100 % n’annule pas le décaissement initial.",
    suffix: "%",
    max: 100,
  },
];

const performanceFields: Field[] = [
  {
    key: "monthlyClicks",
    label: "Clics mensuels observés ou prévus",
    help: "Même période et même périmètre que la dépense média.",
    suffix: "",
    step: 1,
    max: GOOGLE_ADS_QUOTE_MAX_VOLUME,
  },
  {
    key: "monthlyPrimaryActions",
    label: "Actions principales mensuelles",
    help: "Actions retenues dans Google Ads ; ce ne sont pas forcément des clients.",
    suffix: "",
    step: 1,
    max: GOOGLE_ADS_QUOTE_MAX_VOLUME,
  },
  {
    key: "monthlyQualifiedLeads",
    label: "Prospects qualifiés mensuels",
    help: "Qualification définie et tracée après la demande.",
    suffix: "",
    step: 1,
    max: GOOGLE_ADS_QUOTE_MAX_VOLUME,
  },
  {
    key: "monthlyNewCustomers",
    label: "Nouveaux clients mensuels attribués",
    help: "Ventes rapprochées des demandes avec une règle d’attribution écrite.",
    suffix: "",
    step: 1,
    max: GOOGLE_ADS_QUOTE_MAX_VOLUME,
  },
  {
    key: "contributionMarginPerAttributedCustomerHT",
    label: "Marge contributive par client attribué",
    help: "Marge totale retenue par client sur la période fixe ci-dessous. Elle n’est pas forcément encaissée à la date comparée.",
    suffix: "€ HT",
  },
  {
    key: "contributionMarginWindowMonths",
    label: "Période retenue pour la marge par client",
    help: "Gardez la même période pour les comparaisons à 3, 6 et 12 mois. Si vous la modifiez, adaptez aussi la marge par client.",
    suffix: "mois",
    step: 1,
    min: 1,
    max: GOOGLE_ADS_QUOTE_MAX_MARGIN_WINDOW_MONTHS,
  },
];

const modelFields: Array<{
  key: GoogleAdsPricingModel;
  legend: string;
  description: string;
  fields: Field[];
}> = [
  {
    key: "fixed",
    legend: "Forfait fixe",
    description:
      "Saisissez le prix de l’offre, puis ajoutez ce qui manque pour comparer le même périmètre.",
    fields: [
      {
        key: "fixedSetupFeeHT",
        label: "Lancement au forfait",
        help: "Audit, reprise ou création selon le devis.",
        suffix: "€ HT",
      },
      {
        key: "fixedMonthlyFeeHT",
        label: "Gestion mensuelle au forfait",
        help: "Montant récurrent du périmètre comparé.",
        suffix: "€ HT",
      },
      {
        key: "fixedOneOffScopeAdjustmentHT",
        label: "Mise à niveau initiale du périmètre",
        help: "Coûts externes absents de cette offre mais nécessaires une fois.",
        suffix: "€ HT",
      },
      {
        key: "fixedMonthlyScopeAdjustmentHT",
        label: "Mise à niveau mensuelle du périmètre",
        help: "Coûts externes récurrents absents de cette offre.",
        suffix: "€ HT",
      },
      {
        key: "fixedInitialInternalHours",
        label: "Temps interne initial",
        help: "Cadrage, accès et travaux laissés à votre équipe au lancement.",
        suffix: "h",
        step: 0.25,
        max: GOOGLE_ADS_QUOTE_MAX_HOURS,
      },
      {
        key: "fixedMonthlyInternalHours",
        label: "Temps interne mensuel",
        help: "Validation, créations, retour commercial et coordination.",
        suffix: "h",
        step: 0.25,
        max: GOOGLE_ADS_QUOTE_MAX_HOURS,
      },
    ],
  },
  {
    key: "percentage",
    legend: "Pourcentage",
    description:
      "Recopiez le taux, son assiette, le minimum et le plafond prévus dans cette offre.",
    fields: [
      {
        key: "percentageFeeBasisMonthlyHT",
        label: "Assiette mensuelle contractuelle",
        help: "Recopiez la définition du devis ; elle peut différer du média.",
        suffix: "€ HT",
      },
      {
        key: "percentageSetupFeeHT",
        label: "Lancement du modèle au pourcentage",
        help: "Frais initiaux facturés séparément.",
        suffix: "€ HT",
      },
      {
        key: "percentageFeeRatePct",
        label: "Taux mensuel",
        help: "Un taux d’honoraires peut dépasser 100 % d’une petite assiette.",
        suffix: "%",
        max: GOOGLE_ADS_QUOTE_MAX_RATE,
      },
      {
        key: "percentageMinimumMonthlyFeeHT",
        label: "Minimum mensuel",
        help: "Saisissez 0 si le devis n’en prévoit pas.",
        suffix: "€ HT",
      },
      {
        key: "percentageMaximumMonthlyFeeHT",
        label: "Plafond mensuel",
        help: "Saisissez 0 si les honoraires ne sont pas plafonnés.",
        suffix: "€ HT",
      },
      {
        key: "percentageOneOffScopeAdjustmentHT",
        label: "Mise à niveau initiale du périmètre",
        help: "Coûts externes absents de cette offre mais nécessaires une fois.",
        suffix: "€ HT",
      },
      {
        key: "percentageMonthlyScopeAdjustmentHT",
        label: "Mise à niveau mensuelle du périmètre",
        help: "Coûts externes récurrents absents de cette offre.",
        suffix: "€ HT",
      },
      {
        key: "percentageInitialInternalHours",
        label: "Temps interne initial",
        help: "Cadrage, accès et travaux laissés à votre équipe au lancement.",
        suffix: "h",
        step: 0.25,
        max: GOOGLE_ADS_QUOTE_MAX_HOURS,
      },
      {
        key: "percentageMonthlyInternalHours",
        label: "Temps interne mensuel",
        help: "Validation, créations, retour commercial et coordination.",
        suffix: "h",
        step: 0.25,
        max: GOOGLE_ADS_QUOTE_MAX_HOURS,
      },
    ],
  },
  {
    key: "hybrid",
    legend: "Hybride",
    description:
      "Recopiez le socle et la part variable du devis, avec son minimum et son plafond éventuels.",
    fields: [
      {
        key: "hybridFeeBasisMonthlyHT",
        label: "Assiette mensuelle contractuelle",
        help: "Ne réutilisez pas l’assiette de l’autre devis sans la vérifier.",
        suffix: "€ HT",
      },
      {
        key: "hybridSetupFeeHT",
        label: "Lancement hybride",
        help: "Frais initiaux propres à cette offre.",
        suffix: "€ HT",
      },
      {
        key: "hybridMonthlyBaseFeeHT",
        label: "Socle mensuel",
        help: "Part fixe due chaque mois.",
        suffix: "€ HT",
      },
      {
        key: "hybridFeeRatePct",
        label: "Taux variable mensuel",
        help: "Appliqué à l’assiette propre à cette offre.",
        suffix: "%",
        max: GOOGLE_ADS_QUOTE_MAX_RATE,
      },
      {
        key: "hybridMinimumMonthlyFeeHT",
        label: "Minimum mensuel total",
        help: "Saisissez 0 si aucun minimum ne complète le socle.",
        suffix: "€ HT",
      },
      {
        key: "hybridMaximumMonthlyFeeHT",
        label: "Plafond mensuel total",
        help: "Saisissez 0 si les honoraires ne sont pas plafonnés.",
        suffix: "€ HT",
      },
      {
        key: "hybridOneOffScopeAdjustmentHT",
        label: "Mise à niveau initiale du périmètre",
        help: "Coûts externes absents de cette offre mais nécessaires une fois.",
        suffix: "€ HT",
      },
      {
        key: "hybridMonthlyScopeAdjustmentHT",
        label: "Mise à niveau mensuelle du périmètre",
        help: "Coûts externes récurrents absents de cette offre.",
        suffix: "€ HT",
      },
      {
        key: "hybridInitialInternalHours",
        label: "Temps interne initial",
        help: "Cadrage, accès et travaux laissés à votre équipe au lancement.",
        suffix: "h",
        step: 0.25,
        max: GOOGLE_ADS_QUOTE_MAX_HOURS,
      },
      {
        key: "hybridMonthlyInternalHours",
        label: "Temps interne mensuel",
        help: "Validation, créations, retour commercial et coordination.",
        suffix: "h",
        step: 0.25,
        max: GOOGLE_ADS_QUOTE_MAX_HOURS,
      },
    ],
  },
  {
    key: "time",
    legend: "Temps passé",
    description:
      "Les heures du prestataire restent distinctes du temps laissé à votre équipe.",
    fields: [
      {
        key: "timeSetupHours",
        label: "Heures de lancement",
        help: "Volume prévisionnel ou plafond contractualisé.",
        suffix: "h",
        step: 0.25,
        max: GOOGLE_ADS_QUOTE_MAX_HOURS,
      },
      {
        key: "timeMonthlyHours",
        label: "Heures mensuelles",
        help: "Volume moyen ou plafond pour la gestion courante.",
        suffix: "h",
        step: 0.25,
        max: GOOGLE_ADS_QUOTE_MAX_HOURS,
      },
      {
        key: "timeHourlyRateHT",
        label: "Taux horaire",
        help: "Même taux pour les deux volumes de cet exemple.",
        suffix: "€ HT",
      },
      {
        key: "timeOneOffScopeAdjustmentHT",
        label: "Mise à niveau initiale du périmètre",
        help: "Coûts externes absents de cette offre mais nécessaires une fois.",
        suffix: "€ HT",
      },
      {
        key: "timeMonthlyScopeAdjustmentHT",
        label: "Mise à niveau mensuelle du périmètre",
        help: "Coûts externes récurrents absents de cette offre.",
        suffix: "€ HT",
      },
      {
        key: "timeInitialInternalHours",
        label: "Temps interne initial",
        help: "Cadrage, accès et travaux laissés à votre équipe au lancement.",
        suffix: "h",
        step: 0.25,
        max: GOOGLE_ADS_QUOTE_MAX_HOURS,
      },
      {
        key: "timeMonthlyInternalHours",
        label: "Temps interne mensuel",
        help: "Validation, créations, retour commercial et coordination.",
        suffix: "h",
        step: 0.25,
        max: GOOGLE_ADS_QUOTE_MAX_HOURS,
      },
    ],
  },
];

type ExitCostField = {
  key: keyof GoogleAdsQuoteInputs;
  months: GoogleAdsQuoteHorizon;
};

const exitCostFields: Record<GoogleAdsPricingModel, ExitCostField[]> = {
  fixed: [
    { key: "fixedExitCost3MonthsHT", months: 3 },
    { key: "fixedExitCost6MonthsHT", months: 6 },
    { key: "fixedExitCost12MonthsHT", months: 12 },
  ],
  percentage: [
    { key: "percentageExitCost3MonthsHT", months: 3 },
    { key: "percentageExitCost6MonthsHT", months: 6 },
    { key: "percentageExitCost12MonthsHT", months: 12 },
  ],
  hybrid: [
    { key: "hybridExitCost3MonthsHT", months: 3 },
    { key: "hybridExitCost6MonthsHT", months: 6 },
    { key: "hybridExitCost12MonthsHT", months: 12 },
  ],
  time: [
    { key: "timeExitCost3MonthsHT", months: 3 },
    { key: "timeExitCost6MonthsHT", months: 6 },
    { key: "timeExitCost12MonthsHT", months: 12 },
  ],
};

const modelLabels: Record<GoogleAdsPricingModel, string> = {
  fixed: "Forfait fixe",
  percentage: "Pourcentage",
  hybrid: "Hybride",
  time: "Temps passé",
};

const breakEvenLabels: Record<GoogleAdsBreakEvenStatus, string> = {
  covered: "Coûts connus couverts",
  "not-covered": "Coûts connus non couverts",
  unavailable: "Couverture non calculable",
};

const breakEvenClasses: Record<GoogleAdsBreakEvenStatus, string> = {
  covered:
    "bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200",
  "not-covered":
    "bg-amber-100 text-amber-950 dark:bg-amber-950 dark:text-amber-200",
  unavailable: "bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200",
};

const euro = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 2,
});

function formatEuro(value: number | null) {
  return value === null || !Number.isFinite(value)
    ? "Non calculable"
    : euro.format(value);
}

function formatEuroHT(value: number | null) {
  return value === null || !Number.isFinite(value)
    ? "Non calculable"
    : `${euro.format(value)} HT`;
}

function NumberField({
  field,
  value,
  update,
}: {
  field: Field;
  value: number;
  update: (key: keyof GoogleAdsQuoteInputs, value: string) => void;
}) {
  const minimum = field.min ?? 0;
  const maximum = field.max ?? GOOGLE_ADS_QUOTE_MAX_MONEY;
  let error: string | null = null;
  if (!Number.isFinite(value)) {
    error = "Saisissez un nombre.";
  } else if (value < minimum || value > maximum) {
    error = `La valeur doit rester entre ${minimum.toLocaleString("fr-FR")} et ${maximum.toLocaleString("fr-FR")}.`;
  }
  const describedBy = [
    `quote-${field.key}-help`,
    error ? `quote-${field.key}-error` : null,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="block">
      <label
        htmlFor={`quote-${field.key}`}
        className="block text-sm font-semibold text-zinc-950 dark:text-white"
      >
        {field.label}
      </label>
      <span
        id={`quote-${field.key}-help`}
        className="mt-1 block min-h-8 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400"
      >
        {field.help}
      </span>
      <span className="relative mt-2 block">
        <input
          id={`quote-${field.key}`}
          type="number"
          min={minimum}
          max={maximum}
          step={field.step ?? 0.01}
          value={Number.isFinite(value) ? value : ""}
          aria-describedby={describedBy}
          aria-invalid={error !== null}
          onChange={(event) => update(field.key, event.target.value)}
          className={`w-full rounded-lg border bg-white px-3 py-2.5 pr-16 text-sm tabular-nums text-zinc-950 outline-none transition focus:ring-2 dark:bg-zinc-900 dark:text-white ${
            error
              ? "border-red-500 focus:border-red-600 focus:ring-red-200 dark:border-red-700 dark:focus:ring-red-950"
              : "border-zinc-300 focus:border-indigo-500 focus:ring-indigo-200 dark:border-zinc-700 dark:focus:ring-indigo-950"
          }`}
        />
        {field.suffix && (
          <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs font-medium text-zinc-500">
            {field.suffix}
          </span>
        )}
      </span>
      {error && (
        <span
          id={`quote-${field.key}-error`}
          className="mt-1.5 block text-xs font-medium text-red-700 dark:text-red-300"
        >
          {error}
        </span>
      )}
    </div>
  );
}

function ExitCostMatrix({
  modelKey,
  fields,
  values,
  update,
}: {
  modelKey: GoogleAdsPricingModel;
  fields: ExitCostField[];
  values: GoogleAdsQuoteInputs;
  update: (key: keyof GoogleAdsQuoteInputs, value: string) => void;
}) {
  const helpId = `quote-${modelKey}-exit-costs-help`;

  return (
    <fieldset className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-800 dark:bg-zinc-900/50 sm:col-span-2">
      <legend className="px-1 text-sm font-semibold text-zinc-950 dark:text-white">
        Sommes dues si vous arrêtez l’offre
      </legend>
      <p
        id={helpId}
        className="mb-0 mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400"
      >
        Pour chaque date d’arrêt, totalisez uniquement le préavis, l’engagement
        restant et les frais alors applicables. Un montant saisi dans une
        colonne n’est ajouté qu’à cette date de comparaison.
      </p>
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {fields.map((field) => {
          const value = values[field.key];
          let error: string | null = null;
          if (!Number.isFinite(value)) {
            error = "Saisissez un nombre.";
          } else if (value < 0 || value > GOOGLE_ADS_QUOTE_MAX_MONEY) {
            error = `La valeur doit rester entre 0 et ${GOOGLE_ADS_QUOTE_MAX_MONEY.toLocaleString("fr-FR")}.`;
          }
          const errorId = `quote-${field.key}-error`;

          return (
            <div key={field.key}>
              <label
                htmlFor={`quote-${field.key}`}
                className="block text-xs font-bold text-zinc-800 dark:text-zinc-200"
              >
                Arrêt à {field.months} mois{" "}
                <span className="font-medium text-zinc-500 dark:text-zinc-400">
                  (€ HT)
                </span>
              </label>
              <span className="relative mt-1.5 block">
                <input
                  id={`quote-${field.key}`}
                  type="number"
                  min={0}
                  max={GOOGLE_ADS_QUOTE_MAX_MONEY}
                  step={0.01}
                  value={Number.isFinite(value) ? value : ""}
                  aria-describedby={`${helpId}${error ? ` ${errorId}` : ""}`}
                  aria-invalid={error !== null}
                  onChange={(event) => update(field.key, event.target.value)}
                  className={`w-full rounded-lg border bg-white px-3 py-2.5 text-sm tabular-nums text-zinc-950 outline-none transition focus:ring-2 dark:bg-zinc-950 dark:text-white ${
                    error
                      ? "border-red-500 focus:border-red-600 focus:ring-red-200 dark:border-red-700 dark:focus:ring-red-950"
                      : "border-zinc-300 focus:border-indigo-500 focus:ring-indigo-200 dark:border-zinc-700 dark:focus:ring-indigo-950"
                  }`}
                />
              </span>
              {error && (
                <span
                  id={errorId}
                  className="mt-1.5 block text-xs font-medium text-red-700 dark:text-red-300"
                >
                  {error}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </fieldset>
  );
}

export function GoogleAdsQuoteComparator() {
  const [values, setValues] = useState<GoogleAdsQuoteInputs>(INITIAL_VALUES);
  const [openModels, setOpenModels] = useState<
    Record<GoogleAdsPricingModel, boolean>
  >({
    fixed: true,
    percentage: false,
    hybrid: false,
    time: false,
  });
  const result = compareGoogleAdsQuotes(values);

  function update(key: keyof GoogleAdsQuoteInputs, raw: string) {
    const parsed = Number.parseFloat(raw.replace(",", "."));
    setValues((current) => ({
      ...current,
      [key]: Number.isFinite(parsed) ? parsed : Number.NaN,
    }));
  }

  return (
    <section
      className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
      aria-labelledby="google-ads-quote-title"
    >
      <div className="border-b border-indigo-900 bg-zinc-950 px-4 py-6 text-white sm:px-6">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-300">
          Calcul local · saisies non transmises
        </p>
        <h3
          id="google-ads-quote-title"
          className="m-0 text-xl font-bold sm:text-2xl"
        >
          Mettez quatre modes de rémunération sur la même base
        </h3>
        <p className="mb-0 mt-2 max-w-4xl text-sm leading-relaxed text-zinc-300">
          Les valeurs initiales forment un cas fictif. Remplacez chaque ligne
          par un élément écrit du devis. Ne laissez dans la base commune que ce
          qui est identique ; ajoutez ensuite, pour chaque offre, les éléments
          manquants, le temps laissé à votre équipe et les sommes dues à la
          sortie.
        </p>
      </div>

      <div className="space-y-7 p-4 sm:p-6">
        <details
          open
          className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800"
        >
          <summary className="flex min-h-11 items-center cursor-pointer text-base font-bold text-zinc-950 dark:text-white">
            1. Base strictement commune
          </summary>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {commonFields.map((field) => (
              <NumberField
                key={field.key}
                field={field}
                value={values[field.key]}
                update={update}
              />
            ))}
          </div>
        </details>

        <details className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
          <summary className="flex min-h-11 items-center cursor-pointer text-base font-bold text-zinc-950 dark:text-white">
            2. Trésorerie, TVA et coût réglementaire
          </summary>
          <p className="mt-3 max-w-4xl text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
            Ces champs sont des hypothèses de calcul, pas un avis fiscal. Le
            calcul applique, par simplification, un taux de TVA commun à tous
            les coûts externes. Le traitement réel peut varier selon l’émetteur,
            la nature de la prestation et votre situation : vérifiez chaque
            facture et votre droit à récupération avec votre conseil.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {taxFields.map((field) => (
              <NumberField
                key={field.key}
                field={field}
                value={values[field.key]}
                update={update}
              />
            ))}
          </div>
        </details>

        <details className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
          <summary className="flex min-h-11 items-center cursor-pointer text-base font-bold text-zinc-950 dark:text-white">
            3. Résultats commerciaux et marge par client
          </summary>
          <p className="mt-3 max-w-4xl text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
            Le calcul reprend le même nombre de clics, d’actions, de prospects
            et de clients chaque mois, dès le départ. Il ne simule ni montée en
            charge ni saisonnalité. Pour un lancement, ajoutez un scénario mois
            par mois. Pour chaque client attribué, la marge saisie couvre toute
            la période indiquée, même si elle est encaissée après la date
            comparée. Ce résultat ne décrit donc pas votre trésorerie à 3, 6 ou
            12 mois. Si vous changez cette période, adaptez aussi la marge par
            client : le calculateur ne la recalcule pas automatiquement.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {performanceFields.map((field) => (
              <NumberField
                key={field.key}
                field={field}
                value={values[field.key]}
                update={update}
              />
            ))}
          </div>
        </details>

        <div>
          <h4 className="m-0 text-base font-bold text-zinc-950 dark:text-white">
            4. Conditions propres à chaque offre
          </h4>
          <p className="mb-0 mt-2 max-w-4xl text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
            Pour les plafonds, 0 signifie « aucun plafond ». Pour chaque offre,
            saisissez séparément les sommes dues si vous arrêtez à 3, 6 ou 12
            mois : chaque montant ne s’applique qu’à sa colonne.
          </p>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {modelFields.map((group) => (
              <details
                key={group.key}
                open={openModels[group.key]}
                onToggle={(event) => {
                  const isOpen = event.currentTarget.open;
                  setOpenModels((current) =>
                    current[group.key] === isOpen
                      ? current
                      : { ...current, [group.key]: isOpen },
                  );
                }}
                className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800"
              >
                <summary className="flex min-h-11 items-center cursor-pointer text-sm font-bold text-indigo-700 dark:text-indigo-300">
                  {group.legend}{" "}
                  <span className="font-normal text-zinc-500 dark:text-zinc-400">
                    —{" "}
                    {openModels[group.key]
                      ? "masquer les prix et ajustements"
                      : "ouvrir les prix et ajustements"}
                  </span>
                </summary>
                <p className="mb-0 mt-3 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {group.description} Commencez par le prix essentiel ; laissez
                  les ajustements à 0 s’ils ne figurent pas au devis ou ne sont
                  pas nécessaires à la comparaison.
                </p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {group.fields.map((field) => (
                    <NumberField
                      key={field.key}
                      field={field}
                      value={values[field.key]}
                      update={update}
                    />
                  ))}
                  <ExitCostMatrix
                    modelKey={group.key}
                    fields={exitCostFields[group.key]}
                    values={values}
                    update={update}
                  />
                </div>
              </details>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-zinc-200 pt-5 dark:border-zinc-800">
          <p className="m-0 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
            Le calcul s’exécute dans votre navigateur. Aucun compte, envoi ou
            conservation des montants saisis dans ce calculateur.
          </p>
          <button
            type="button"
            onClick={() => setValues(INITIAL_VALUES)}
            className="min-h-11 rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900"
          >
            Revenir au cas fictif
          </button>
        </div>

        {!result.valid ? (
          <div
            role="alert"
            className="rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-950 dark:border-red-900 dark:bg-red-950/30 dark:text-red-100"
          >
            <p className="m-0 font-bold">Le calcul est suspendu.</p>
            <ul className="mb-0 mt-2 space-y-1 pl-5">
              {result.errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4 dark:border-indigo-900 dark:bg-indigo-950/30">
              <p className="m-0 text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
                Coût réglementaire média retenu par mois
              </p>
              <p className="mb-0 mt-1 text-2xl font-bold tabular-nums text-zinc-950 dark:text-white">
                {formatEuro(result.monthlyMediaSurchargeHT)}
              </p>
              <p className="mb-0 mt-1 text-xs text-zinc-600 dark:text-zinc-300">
                Calculé seulement sur la part de diffusion France saisie.
              </p>
            </div>

            <div
              className="grid gap-4 xl:hidden"
              aria-label="Comparaison mobile des coûts Google Ads sur trois, six et douze mois"
            >
              {result.models.map((model) => (
                <article
                  key={model.key}
                  className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800"
                >
                  <div className="bg-zinc-950 px-4 py-3 text-white">
                    <h5 className="m-0 text-base font-bold">
                      {modelLabels[model.key]}
                    </h5>
                    <p className="mb-0 mt-1 text-xs text-zinc-300">
                      Coût mensuel comparable{" "}
                      <strong>
                        {formatEuro(model.normalizedMonthlyFeeHT)}
                      </strong>
                      {" · "}coût initial comparable{" "}
                      <strong>{formatEuro(model.normalizedOneOffFeeHT)}</strong>
                    </p>
                  </div>
                  <div className="grid gap-px bg-zinc-200 dark:bg-zinc-800 sm:grid-cols-3">
                    {GOOGLE_ADS_QUOTE_HORIZONS.map((months) => {
                      const horizon = model.horizons[months];
                      return (
                        <dl
                          key={months}
                          className="m-0 bg-white p-4 dark:bg-zinc-950"
                        >
                          <dt className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
                            {months} mois
                          </dt>
                          <dd className="m-0 mt-3 text-sm">
                            <span className="block font-semibold tabular-nums text-zinc-950 dark:text-white">
                              {formatEuro(horizon.externalCashHT)} HT
                            </span>
                            <span className="mt-1 block text-xs tabular-nums text-zinc-600 dark:text-zinc-300">
                              {formatEuro(horizon.ttcCashOut)} décaissés
                            </span>
                            <span className="mt-1 block text-xs tabular-nums text-zinc-600 dark:text-zinc-300">
                              {formatEuro(horizon.knownEconomicCost)} de coût
                              connu
                            </span>
                            <span className="mt-1 block text-xs tabular-nums text-zinc-500 dark:text-zinc-400">
                              dont sortie {formatEuro(horizon.exitCostHT)} HT
                            </span>
                          </dd>
                        </dl>
                      );
                    })}
                  </div>
                </article>
              ))}
            </div>

            <div className="hidden xl:block">
              <p className="mb-2 mt-0 text-xs text-zinc-500 dark:text-zinc-400">
                Le tableau peut défiler horizontalement au zoom. Placez-y le
                focus puis utilisez les flèches ou le pavé tactile.
              </p>
              <div
                role="region"
                aria-label="Comparaison tabulaire des coûts Google Ads sur trois, six et douze mois"
                tabIndex={0}
                className="overflow-x-auto rounded-xl border border-zinc-200 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:border-zinc-800 dark:focus-visible:ring-offset-zinc-950"
              >
                <table className="w-full min-w-[660px] border-collapse text-left text-sm">
                  <caption className="sr-only">
                    Comparaison des coûts Google Ads sur trois, six et douze
                    mois
                  </caption>
                  <thead className="bg-zinc-950 text-white">
                    <tr>
                      <th scope="col" className="px-2 py-3">
                        Modèle
                      </th>
                      <th scope="col" className="px-2 py-3">
                        Coût mensuel comparable
                      </th>
                      {GOOGLE_ADS_QUOTE_HORIZONS.map((months) => (
                        <th key={months} scope="col" className="px-2 py-3">
                          {months} mois
                          <span className="mt-0.5 block text-xs font-normal text-zinc-300">
                            HT / TTC / connu
                          </span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {result.models.map((model) => (
                      <tr
                        key={model.key}
                        className="border-t border-zinc-200 align-top dark:border-zinc-800"
                      >
                        <th
                          scope="row"
                          className="px-2 py-4 text-zinc-950 dark:text-white"
                        >
                          {modelLabels[model.key]}
                          <span className="mt-1 block text-xs font-normal text-zinc-500">
                            coût initial comparable{" "}
                            {formatEuro(model.normalizedOneOffFeeHT)}
                          </span>
                        </th>
                        <td className="px-2 py-4 font-semibold tabular-nums text-zinc-950 dark:text-white">
                          {formatEuro(model.normalizedMonthlyFeeHT)}
                          <span className="mt-1 block text-xs font-normal text-zinc-500">
                            gestion {formatEuro(model.monthlyManagementFeeHT)}
                            {" + "}coûts à ajouter{" "}
                            {formatEuro(model.monthlyScopeAdjustmentHT)}
                          </span>
                        </td>
                        {GOOGLE_ADS_QUOTE_HORIZONS.map((months) => {
                          const horizon = model.horizons[months];
                          return (
                            <td key={months} className="px-2 py-4 tabular-nums">
                              <span className="block font-semibold text-zinc-950 dark:text-white">
                                {formatEuro(horizon.externalCashHT)} HT
                              </span>
                              <span className="mt-1 block text-xs text-zinc-600 dark:text-zinc-300">
                                {formatEuro(horizon.ttcCashOut)} décaissés
                              </span>
                              <span className="mt-1 block text-xs text-zinc-600 dark:text-zinc-300">
                                {formatEuro(horizon.knownEconomicCost)} de coût
                                connu
                              </span>
                              <span className="mt-1 block text-xs text-zinc-500 dark:text-zinc-400">
                                dont sortie {formatEuro(horizon.exitCostHT)} HT
                              </span>
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="m-0 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              Le badge répond à une question : la marge saisie couvre-t-elle les
              coûts connus du scénario ? La réponse est positive lorsque l’écart
              par prospect qualifié est supérieur ou égal à zéro. Si un volume
              indispensable manque, le calcul affiche « Couverture non
              calculable ».
            </p>

            <div className="grid gap-4 lg:grid-cols-2">
              {result.models.map((model) => {
                const horizon = model.horizons[6];
                const gap = horizon.metrics.breakEvenGapPerQualifiedLead;
                const status = horizon.metrics.breakEvenStatus;

                return (
                  <article
                    key={model.key}
                    className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="m-0 text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
                          Résultats à 6 mois
                        </p>
                        <h5 className="mb-0 mt-1 text-lg font-bold text-zinc-950 dark:text-white">
                          {modelLabels[model.key]}
                        </h5>
                      </div>
                      <span
                        data-break-even-status={status}
                        className={`rounded-full px-2.5 py-1 text-xs font-bold ${breakEvenClasses[status]}`}
                      >
                        {breakEvenLabels[status]}
                      </span>
                    </div>
                    <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                      <div>
                        <dt className="text-xs text-zinc-500">
                          CPC média chargé · HT
                        </dt>
                        <dd className="m-0 font-semibold tabular-nums text-zinc-950 dark:text-white">
                          {formatEuroHT(
                            horizon.metrics.chargedMediaCostPerClickHT,
                          )}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs text-zinc-500">
                          CPA média chargé · HT
                        </dt>
                        <dd className="m-0 font-semibold tabular-nums text-zinc-950 dark:text-white">
                          {formatEuroHT(
                            horizon.metrics.chargedMediaCostPerPrimaryActionHT,
                          )}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs text-zinc-500">
                          CPL qualifié média chargé · HT
                        </dt>
                        <dd className="m-0 font-semibold tabular-nums text-zinc-950 dark:text-white">
                          {formatEuroHT(
                            horizon.metrics.chargedMediaCostPerQualifiedLeadHT,
                          )}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs text-zinc-500">
                          CAC complet connu
                        </dt>
                        <dd className="m-0 font-semibold tabular-nums text-zinc-950 dark:text-white">
                          {formatEuro(
                            horizon.metrics.knownFullCustomerAcquisitionCost,
                          )}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs text-zinc-500">
                          TVA à décaisser
                        </dt>
                        <dd className="m-0 font-semibold tabular-nums text-zinc-950 dark:text-white">
                          {formatEuro(horizon.vatCashOut)}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs text-zinc-500">
                          TVA récupérable saisie
                        </dt>
                        <dd className="m-0 font-semibold tabular-nums text-zinc-950 dark:text-white">
                          {formatEuro(horizon.recoverableVAT)}
                        </dd>
                      </div>
                    </dl>
                    <p className="mb-0 mt-4 border-t border-zinc-200 pt-3 text-xs leading-relaxed text-zinc-600 dark:border-zinc-800 dark:text-zinc-300">
                      Écart par rapport au seuil de couverture, par prospect
                      qualifié : <strong>{formatEuro(gap)}</strong>. Ce seuil
                      repose sur les volumes saisis et sur la marge retenue
                      pendant{" "}
                      <strong>
                        {values.contributionMarginWindowMonths} mois par client
                      </strong>
                      . Cette marge peut être encaissée après la comparaison à 6
                      mois : le résultat ne prédit ni les conversions, ni les
                      ventes futures, ni la trésorerie.
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
