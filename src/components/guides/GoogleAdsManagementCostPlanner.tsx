"use client";

import { useState } from "react";
import {
  calculateGoogleAdsManagementCost,
  type GoogleAdsFeeModel,
  type GoogleAdsManagementCostInputs,
} from "@/lib/google-ads-management-cost";

const INITIAL_VALUES: GoogleAdsManagementCostInputs = {
  monthlyMediaSpend: 5000,
  percentageFeeBasisMonthly: 5000,
  jurisdictionSurchargeRate: 2,
  surchargeEligibleSpendShareRate: 100,
  horizonMonths: 6,
  fixedMonthlyFee: 900,
  percentageFeeRate: 15,
  hybridBaseMonthlyFee: 500,
  hybridPercentageFeeRate: 10,
  oneOffExternalCosts: 2550,
  monthlyExternalCosts: 150,
  initialInternalHours: 8,
  monthlyInternalHours: 2,
  internalHourlyCost: 44.2,
  qualifiedLeadsPerMonth: 15,
};

const groups: Array<{
  legend: string;
  description: string;
  fields: Array<{
    key: keyof GoogleAdsManagementCostInputs;
    label: string;
    help: string;
    suffix: string;
    min: number;
    max?: number;
    step: number;
  }>;
}> = [
  {
    legend: "1. Cadre commun",
    description:
      "Ces données restent identiques pour les trois modèles d’honoraires.",
    fields: [
      {
        key: "monthlyMediaSpend",
        label: "Dépense média mensuelle retenue",
        help: "Prévision de dépense réellement facturée — ou dépense observée. Ce n’est pas le plafond configuré.",
        suffix: "€",
        min: 0.01,
        step: 0.01,
      },
      {
        key: "percentageFeeBasisMonthly",
        label: "Assiette mensuelle des honoraires variables",
        help: "Montant auquel le contrat applique son pourcentage : dépense, budget configuré ou autre base explicitée.",
        suffix: "€",
        min: 0.01,
        step: 0.01,
      },
      {
        key: "jurisdictionSurchargeRate",
        label: "Surcharge liée au pays de diffusion",
        help: "2 % pour des annonces diffusées en France au 27 juillet 2026.",
        suffix: "%",
        min: 0,
        max: 100,
        step: 0.01,
      },
      {
        key: "surchargeEligibleSpendShareRate",
        label: "Part de la dépense soumise à cette surcharge",
        help: "100 % si toute la dépense concerne des annonces servies dans la juridiction indiquée.",
        suffix: "%",
        min: 0,
        max: 100,
        step: 0.01,
      },
      {
        key: "horizonMonths",
        label: "Horizon de comparaison",
        help: "Entre 1 et 60 mois ; utilisez au moins l’engagement contractuel.",
        suffix: "mois",
        min: 1,
        max: 60,
        step: 1,
      },
      {
        key: "qualifiedLeadsPerMonth",
        label: "Prospects qualifiés par mois",
        help: "Même définition et même cohorte pour chaque offre.",
        suffix: "",
        min: 0.01,
        step: 0.01,
      },
    ],
  },
  {
    legend: "2. Trois formules à comparer",
    description:
      "Le pourcentage est appliqué à l’assiette renseignée plus haut, qui peut différer de la dépense réellement facturée.",
    fields: [
      {
        key: "fixedMonthlyFee",
        label: "Forfait fixe mensuel",
        help: "Prix de gestion, hors média et coûts communs.",
        suffix: "€",
        min: 0,
        step: 0.01,
      },
      {
        key: "percentageFeeRate",
        label: "Gestion au pourcentage",
        help: "Taux appliqué à l’assiette mensuelle définie au contrat.",
        suffix: "%",
        min: 0,
        max: 100,
        step: 0.01,
      },
      {
        key: "hybridBaseMonthlyFee",
        label: "Base fixe du modèle hybride",
        help: "Part fixe payée chaque mois.",
        suffix: "€",
        min: 0,
        step: 0.01,
      },
      {
        key: "hybridPercentageFeeRate",
        label: "Pourcentage du modèle hybride",
        help: "Part variable appliquée à la même assiette contractuelle.",
        suffix: "%",
        min: 0,
        max: 100,
        step: 0.01,
      },
    ],
  },
  {
    legend: "3. Coûts communs du périmètre renseigné",
    description:
      "Détaillez d’abord setup, mesure, pages, créations, outils et temps dans la grille téléchargeable, puis reportez les totaux ici.",
    fields: [
      {
        key: "oneOffExternalCosts",
        label: "Coûts externes ponctuels",
        help: "Setup, mesure, page et créations initiales déjà chiffrés.",
        suffix: "€",
        min: 0,
        step: 0.01,
      },
      {
        key: "monthlyExternalCosts",
        label: "Autres coûts externes mensuels",
        help: "Outils, suivi d’appels, créations et licences.",
        suffix: "€",
        min: 0,
        step: 0.01,
      },
      {
        key: "initialInternalHours",
        label: "Heures internes au démarrage",
        help: "Brief, validation, données et recette.",
        suffix: "h",
        min: 0,
        step: 0.1,
      },
      {
        key: "monthlyInternalHours",
        label: "Heures internes chaque mois",
        help: "Validation, qualification, revue et coordination.",
        suffix: "h",
        min: 0,
        step: 0.1,
      },
      {
        key: "internalHourlyCost",
        label: "Valeur d’une heure interne",
        help: "Votre coût chargé ou coût d’opportunité, pas un tarif universel.",
        suffix: "€",
        min: 0,
        step: 0.01,
      },
    ],
  },
];

const euro = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 2,
});

const modelLabels: Record<GoogleAdsFeeModel, string> = {
  fixed: "Forfait fixe",
  percentage: "Pourcentage du média",
  hybrid: "Hybride",
};

function formatEuro(value: number | null) {
  return value !== null && Number.isFinite(value) ? euro.format(value) : "—";
}

export function GoogleAdsManagementCostPlanner() {
  const [values, setValues] =
    useState<GoogleAdsManagementCostInputs>(INITIAL_VALUES);
  const result = calculateGoogleAdsManagementCost(values);

  function update(key: keyof GoogleAdsManagementCostInputs, raw: string) {
    const parsed = Number.parseFloat(raw.replace(",", "."));
    setValues((current) => ({
      ...current,
      [key]: Number.isFinite(parsed) ? parsed : Number.NaN,
    }));
  }

  const lowestHorizonCost =
    result.status === "ready"
      ? Math.min(
          ...result.comparisons.map(
            (comparison) => comparison.knownHorizonCost,
          ),
        )
      : null;

  return (
    <section
      className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white text-left shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
      aria-labelledby="google-ads-management-planner-title"
    >
      <div className="border-b border-zinc-800 bg-zinc-950 px-4 py-5 text-white sm:px-6">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-300">
          Calcul local · aucune donnée envoyée
        </p>
        <h3
          id="google-ads-management-planner-title"
          className="m-0 text-lg font-bold text-white sm:text-xl"
        >
          Comparez fixe, pourcentage et hybride sur le même périmètre
        </h3>
        <p className="mb-0 mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">
          Les valeurs de départ sont un exemple fictif. Le résultat reste un
          coût renseigné : une ligne inconnue ne devient jamais zéro.
        </p>
      </div>

      <div className="grid xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-7 p-4 sm:p-6">
          {groups.map((group) => (
            <fieldset key={group.legend} className="m-0 border-0 p-0">
              <legend className="text-sm font-bold text-zinc-950 dark:text-white">
                {group.legend}
              </legend>
              <p className="mb-3 mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                {group.description}
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {group.fields.map((field) => {
                  const invalid =
                    result.status === "invalid-input" &&
                    result.invalidFields.includes(field.key);
                  const helpId = `ads-management-${field.key}-help`;
                  return (
                    <label key={field.key} className="block">
                      <span className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        {field.label}
                      </span>
                      <span
                        id={helpId}
                        className="mt-1 block min-h-8 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400"
                      >
                        {field.help}
                      </span>
                      <span className="relative mt-2 block">
                        <input
                          type="number"
                          value={
                            Number.isFinite(values[field.key])
                              ? values[field.key]
                              : ""
                          }
                          min={field.min}
                          max={field.max}
                          step={field.step}
                          aria-describedby={helpId}
                          aria-invalid={invalid}
                          onChange={(event) =>
                            update(field.key, event.target.value)
                          }
                          className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 pr-12 text-sm text-zinc-950 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:ring-violet-950"
                        />
                        {field.suffix ? (
                          <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-zinc-500">
                            {field.suffix}
                          </span>
                        ) : null}
                      </span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
          ))}

          <div className="flex flex-wrap items-center gap-3 border-t border-zinc-200 pt-5 dark:border-zinc-800">
            <button
              type="button"
              onClick={() => setValues(INITIAL_VALUES)}
              className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-violet-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
            >
              Restaurer l’exemple
            </button>
            <a
              href="/ressources/grille-comparaison-devis-google-ads.csv"
              download
              className="rounded-lg bg-zinc-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-violet-400 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              Télécharger la grille CSV
            </a>
          </div>
        </div>

        <div className="border-t border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-6 xl:border-l xl:border-t-0">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-zinc-500">
            Résultat sur {values.horizonMonths || "—"} mois
          </p>

          {result.status === "invalid-input" ? (
            <div
              className="rounded-xl border border-red-300 bg-red-50 p-4 text-red-950 dark:border-red-900 dark:bg-red-950/30 dark:text-red-100"
              role="alert"
            >
              <p className="mb-1 font-semibold">Calcul impossible</p>
              <p className="mb-0 text-sm leading-relaxed">
                Corrigez les champs signalés. La dépense média, l’assiette des
                honoraires et le nombre de prospects doivent être positifs ;
                l’horizon doit être un entier de 1 à 60 et les taux compris
                entre 0 et 100.
              </p>
            </div>
          ) : (
            <>
              <p className="mb-3 rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs leading-relaxed text-amber-950 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-100">
                Le total chiffré le plus bas n’est pas un verdict : il n’est
                comparable que si le périmètre et les obligations sont
                identiques.
              </p>
              <div className="space-y-3">
                {result.comparisons.map((comparison) => {
                  const lowest =
                    comparison.knownHorizonCost === lowestHorizonCost;
                  return (
                    <article
                      key={comparison.model}
                      className={
                        "rounded-xl border bg-white p-4 dark:bg-zinc-950 " +
                        (lowest
                          ? "border-emerald-300 dark:border-emerald-800"
                          : "border-zinc-200 dark:border-zinc-800")
                      }
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <p className="mb-1 text-xs font-semibold text-violet-700 dark:text-violet-300">
                            {modelLabels[comparison.model]}
                          </p>
                          <p className="mb-0 text-2xl font-bold text-zinc-950 dark:text-white">
                            {formatEuro(comparison.knownHorizonCost)}
                          </p>
                        </div>
                        {lowest ? (
                          <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                            Plus bas chiffré ici
                          </span>
                        ) : null}
                      </div>
                      <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-xs">
                        <div>
                          <dt className="text-zinc-500">Gestion / mois</dt>
                          <dd className="mt-0.5 font-semibold text-zinc-900 dark:text-zinc-100">
                            {formatEuro(comparison.managementFeeMonthly)}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-zinc-500">
                            Coût renseigné / mois
                          </dt>
                          <dd className="mt-0.5 font-semibold text-zinc-900 dark:text-zinc-100">
                            {formatEuro(comparison.knownMonthlyCost)}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-zinc-500">
                            Dépense + surcharge / mois
                          </dt>
                          <dd className="mt-0.5 font-semibold text-zinc-900 dark:text-zinc-100">
                            {formatEuro(
                              comparison.mediaSpendWithSurchargeMonthly,
                            )}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-zinc-500">
                            Coût / prospect qualifié
                          </dt>
                          <dd className="mt-0.5 font-semibold text-zinc-900 dark:text-zinc-100">
                            {formatEuro(comparison.knownCostPerQualifiedLead)}
                          </dd>
                        </div>
                      </dl>
                    </article>
                  );
                })}
              </div>

              <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50 p-4 text-blue-950 dark:border-blue-900 dark:bg-blue-950/30 dark:text-blue-100">
                <p className="mb-1 font-semibold">Ce que le calcul inclut</p>
                <p className="mb-0 text-sm leading-relaxed">
                  Coûts ponctuels renseignés :{" "}
                  {formatEuro(result.knownOneOffCost)}. Surcharge média :{" "}
                  {formatEuro(result.comparisons[0].mediaSurchargeMonthly)} par
                  mois, calculée sur la part de dépense déclarée comme
                  concernée. Volume étudié : {result.totalQualifiedLeads}{" "}
                  prospects qualifiés sur l’horizon.
                </p>
              </div>

              <div className="mt-4 rounded-xl border border-zinc-200 bg-white p-4 text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100">
                <p className="mb-2 font-semibold">
                  Seuils théoriques des honoraires
                </p>
                <p className="mb-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                  Ces croisements supposent des formules linéaires, sans
                  minimum, plafond ni palier.
                </p>
                <ul className="m-0 space-y-1.5 pl-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  <li>
                    fixe = pourcentage à{" "}
                    {formatEuro(result.fixedVsPercentageFeeBasisCrossing)}{" "}
                    d’assiette mensuelle ;
                  </li>
                  <li>
                    fixe = hybride à{" "}
                    {formatEuro(result.fixedVsHybridFeeBasisCrossing)} ;
                  </li>
                  <li>
                    pourcentage = hybride à{" "}
                    {formatEuro(result.percentageVsHybridFeeBasisCrossing)}.
                  </li>
                </ul>
              </div>
            </>
          )}

          <p
            className="sr-only"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            {result.status === "invalid-input"
              ? "Calcul impossible : corrigez les champs signalés."
              : result.comparisons
                  .map(
                    (comparison) =>
                      `${modelLabels[comparison.model]} : ${formatEuro(
                        comparison.knownHorizonCost,
                      )} sur ${values.horizonMonths} mois.`,
                  )
                  .join(" ")}
          </p>

          <p className="mb-0 mt-4 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
            Le total le plus bas n’est pas automatiquement le meilleur devis. Il
            n’est comparable que si campagnes, pays, mesure, créations, cadence,
            engagement et sortie sont identiques. TVA, change, crédits,
            remboursements et coûts inconnus restent à traiter séparément.
          </p>
        </div>
      </div>
    </section>
  );
}
