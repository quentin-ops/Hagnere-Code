"use client";

import { useMemo, useState } from "react";
import {
  Calculator,
  CheckCircle2,
  Download,
  RotateCcw,
  ShieldAlert,
} from "lucide-react";
import {
  DEFAULT_BILLING_TCO_OPTIONS,
  PLANOR_MONTHLY_RECONCILIATION,
  calculateBillingClientThreshold,
  calculateSubscriptionBillingTco,
  reconcileBillingPeriod,
  type BillingPeriodInput,
  type BillingTcoOptionInput,
  type SubscriptionBillingTcoInputs,
} from "@/lib/subscription-billing-oracle";

const currencyFormatter = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const reconciliationCurrencyFormatter = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const decimalFormatter = new Intl.NumberFormat("fr-FR", {
  maximumFractionDigits: 1,
});

const optionFields: Array<{
  key: keyof Pick<
    BillingTcoOptionInput,
    | "setupCost"
    | "fixedMonthlyCost"
    | "fixedInternalHoursMonthly"
    | "minutesPerClientMonthly"
    | "variableFeeRate"
  >;
  label: string;
  step: string;
  suffix: string;
}> = [
  { key: "setupCost", label: "Mise en place", step: "100", suffix: "€" },
  {
    key: "fixedMonthlyCost",
    label: "Coût fixe mensuel",
    step: "10",
    suffix: "€",
  },
  {
    key: "fixedInternalHoursMonthly",
    label: "Heures fixes / mois",
    step: "0.1",
    suffix: "h",
  },
  {
    key: "minutesPerClientMonthly",
    label: "Minutes / client / mois",
    step: "0.1",
    suffix: "min",
  },
  {
    key: "variableFeeRate",
    label: "Frais variables",
    step: "0.1",
    suffix: "%",
  },
];

const reconciliationFields: Array<{
  key: keyof Pick<
    BillingPeriodInput,
    | "openingReceivable"
    | "grossInvoices"
    | "creditNotes"
    | "allocatedPayments"
    | "refunds"
    | "reportedClosingReceivable"
    | "unallocatedCash"
    | "accessMismatchCount"
  >;
  label: string;
  step: string;
}> = [
  {
    key: "openingReceivable",
    label: "Créance d’ouverture",
    step: "1",
  },
  { key: "grossInvoices", label: "Factures brutes", step: "1" },
  { key: "creditNotes", label: "Avoirs", step: "1" },
  {
    key: "allocatedPayments",
    label: "Paiements affectés",
    step: "1",
  },
  { key: "refunds", label: "Remboursements", step: "1" },
  {
    key: "reportedClosingReceivable",
    label: "Créance finale observée",
    step: "1",
  },
  { key: "unallocatedCash", label: "Cash non affecté", step: "1" },
  {
    key: "accessMismatchCount",
    label: "Droits incohérents",
    step: "1",
  },
];

const verdictStyles = {
  pass: "border-emerald-300 bg-emerald-50 text-emerald-950 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-100",
  review:
    "border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100",
  stop: "border-rose-300 bg-rose-50 text-rose-950 dark:border-rose-800 dark:bg-rose-950/30 dark:text-rose-100",
};

const verdictLabels = {
  pass: "PASS — le mois se rapproche",
  review: "À REVOIR — une information reste inconnue",
  stop: "STOP — ne clôturez pas et n’automatisez pas",
};

function cloneDefaultOptions() {
  return DEFAULT_BILLING_TCO_OPTIONS.map((option) => ({ ...option }));
}

function clonePlanorMonth(): BillingPeriodInput {
  return {
    ...PLANOR_MONTHLY_RECONCILIATION,
    taxRuleRequired: null,
    taxRuleValidated: null,
  };
}

function parseNumber(value: string) {
  if (value.trim() === "") return null;
  const parsed = Number(value);
  return Number.isNaN(parsed) ? Number.NaN : parsed;
}

function inputValue(value: number | null) {
  return value === null || Number.isNaN(value) ? "" : value;
}

function optionInputValue(
  field: (typeof optionFields)[number]["key"],
  value: number | null,
) {
  if (field === "variableFeeRate" && value !== null && !Number.isNaN(value)) {
    return value * 100;
  }
  return inputValue(value);
}

function parseOptionValue(
  field: (typeof optionFields)[number]["key"],
  value: string,
) {
  const parsed = parseNumber(value);
  if (field === "variableFeeRate" && parsed !== null && !Number.isNaN(parsed)) {
    return parsed / 100;
  }
  return parsed;
}

export function SubscriptionBillingDecisionDossier() {
  const [horizonMonths, setHorizonMonths] = useState<number | null>(24);
  const [clients, setClients] = useState<number | null>(100);
  const [averageBilled, setAverageBilled] = useState<number | null>(100);
  const [hourlyCost, setHourlyCost] = useState<number | null>(45);
  const [options, setOptions] =
    useState<BillingTcoOptionInput[]>(cloneDefaultOptions);
  const [period, setPeriod] = useState<BillingPeriodInput>(clonePlanorMonth);

  const tcoInput = useMemo<SubscriptionBillingTcoInputs>(
    () => ({
      currency: "EUR",
      horizonMonths,
      averageActiveClients: clients,
      averageBilledPerClientMonthly: averageBilled,
      internalHourlyCost: hourlyCost,
      options,
    }),
    [averageBilled, clients, horizonMonths, hourlyCost, options],
  );
  const tco = useMemo(
    () => calculateSubscriptionBillingTco(tcoInput),
    [tcoInput],
  );
  const threshold = useMemo(
    () => calculateBillingClientThreshold(tcoInput, options[0], options[1]),
    [options, tcoInput],
  );
  const reconciliation = useMemo(
    () => reconcileBillingPeriod(period),
    [period],
  );
  const lowestCostOption = tco.optionResults.find(
    (option) => option.id === tco.lowestComparableOptionId,
  );
  const belowThresholdOption = options.find(
    (option) => option.id === threshold.belowThresholdOptionId,
  );
  const aboveThresholdOption = options.find(
    (option) => option.id === threshold.aboveThresholdOptionId,
  );

  function updateOption(
    optionIndex: number,
    field: (typeof optionFields)[number]["key"],
    value: string,
  ) {
    setOptions((current) =>
      current.map((option, index) =>
        index === optionIndex
          ? { ...option, [field]: parseOptionValue(field, value) }
          : option,
      ),
    );
  }

  function updatePeriod(
    field: (typeof reconciliationFields)[number]["key"],
    value: string,
  ) {
    setPeriod((current) => ({
      ...current,
      [field]: parseNumber(value),
    }));
  }

  function reset() {
    setHorizonMonths(24);
    setClients(100);
    setAverageBilled(100);
    setHourlyCost(45);
    setOptions(cloneDefaultOptions());
    setPeriod(clonePlanorMonth());
  }

  return (
    <section
      aria-labelledby="subscription-billing-dossier-title"
      className="not-prose my-10 overflow-hidden rounded-3xl border border-zinc-200 bg-white text-left shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
    >
      <div className="border-b border-zinc-200 bg-zinc-950 px-5 py-6 text-white dark:border-zinc-800 sm:px-7">
        <div className="flex items-start gap-3">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-violet-500/20 text-violet-200">
            <Calculator className="size-5" aria-hidden="true" />
          </span>
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-violet-300">
              Dossier de décision — données locales
            </p>
            <h3
              id="subscription-billing-dossier-title"
              className="m-0 text-xl font-bold tracking-tight text-white sm:text-2xl"
            >
              Comparez le coût total de possession (TCO), puis rapprochez un
              mois
            </h3>
            <p className="mb-0 mt-2 max-w-3xl text-sm leading-relaxed text-zinc-300">
              Les hypothèses fictives Planor sont modifiables. Rien n’est envoyé
              : les calculs restent dans votre navigateur. Un résultat technique
              ne valide ni TVA, ni facture, ni contrat.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-10 p-5 sm:p-7">
        <div>
          <div className="mb-4">
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.13em] text-violet-700 dark:text-violet-300">
              1. Même horizon, même portefeuille
            </p>
            <h4 className="m-0 text-lg font-bold text-zinc-950 dark:text-white">
              Remplacez les quatre hypothèses communes
            </h4>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <NumberField
              label="Horizon"
              value={horizonMonths}
              suffix="mois"
              step="1"
              onChange={setHorizonMonths}
              invalid={tco.issues.some((issue) =>
                issue.fields.includes("horizonMonths"),
              )}
            />
            <NumberField
              label="Clients actifs moyens"
              value={clients}
              suffix="clients"
              step="1"
              onChange={setClients}
              invalid={tco.issues.some((issue) =>
                issue.fields.includes("averageActiveClients"),
              )}
            />
            <NumberField
              label="Facturé moyen / client / mois"
              value={averageBilled}
              suffix="€"
              step="1"
              onChange={setAverageBilled}
              invalid={tco.issues.some((issue) =>
                issue.fields.includes("averageBilledPerClientMonthly"),
              )}
            />
            <NumberField
              label="Coût horaire interne"
              value={hourlyCost}
              suffix="€/h"
              step="1"
              onChange={setHourlyCost}
              invalid={tco.issues.some((issue) =>
                issue.fields.includes("internalHourlyCost"),
              )}
            />
          </div>

          <details className="mt-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/60">
            <summary className="min-h-11 cursor-pointer py-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Modifier les coûts et le temps de chaque option
            </summary>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Une cellule vide reste inconnue : l’option demeure visible mais
              sort du classement. Les frais de paiement, taxes, comptabilité,
              migration, incidents et sortie sont exclus tant que vous ne les
              ajoutez pas au périmètre.
            </p>
            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              {options.map((option, optionIndex) => (
                <fieldset
                  key={option.id}
                  className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
                >
                  <legend className="px-1 text-sm font-bold text-zinc-950 dark:text-white">
                    {option.label}
                  </legend>
                  <div className="mt-2 grid gap-3 sm:grid-cols-2">
                    {optionFields.map((field) => (
                      <label
                        key={field.key}
                        className="text-xs font-medium text-zinc-700 dark:text-zinc-300"
                      >
                        {field.label}
                        <span className="mt-1 flex min-h-11 items-center rounded-xl border border-zinc-300 bg-white px-3 focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-200 dark:border-zinc-700 dark:bg-zinc-950">
                          <input
                            type="number"
                            min="0"
                            step={field.step}
                            value={optionInputValue(
                              field.key,
                              option[field.key],
                            )}
                            onChange={(event) =>
                              updateOption(
                                optionIndex,
                                field.key,
                                event.target.value,
                              )
                            }
                            aria-invalid={tco.issues.some((issue) =>
                              issue.fields.some((issueField) =>
                                issueField.startsWith(
                                  `${option.id}.${field.key}`,
                                ),
                              ),
                            )}
                            className="min-w-0 flex-1 bg-transparent text-sm text-zinc-950 outline-none dark:text-white"
                          />
                          <span className="ml-2 text-[11px] text-zinc-500">
                            {field.suffix}
                          </span>
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              ))}
            </div>
          </details>

          <p className="sr-only" role="status" aria-live="polite">
            {tco.complete
              ? `Quatre options comparables. Coût direct le plus bas : ${
                  lowestCostOption?.label ?? "inconnu"
                }.`
              : `${tco.issues.length} hypothèse ou calcul empêche une comparaison complète.`}
          </p>

          {tco.issues.length > 0 && (
            <div className="mt-5 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-950 dark:border-rose-900 dark:bg-rose-950/30 dark:text-rose-100">
              <p className="mb-2 font-bold">
                Corrigez les hypothèses avant de classer les options
              </p>
              <ul className="mb-0 space-y-1.5 pl-5">
                {tco.issues.map((issue, index) => (
                  <li key={`${issue.code}-${issue.fields.join("-")}-${index}`}>
                    {issue.message}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {tco.optionResults.map((option) => (
              <div
                key={option.id}
                className={`rounded-2xl border p-4 ${
                  option.id === tco.lowestComparableOptionId
                    ? "border-emerald-300 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/25"
                    : "border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/60"
                }`}
              >
                <p className="mb-1 text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                  {option.label}
                </p>
                <p className="mb-0 text-xl font-bold text-zinc-950 dark:text-white">
                  {option.totalCost === null
                    ? "Incomparable"
                    : currencyFormatter.format(option.totalCost)}
                </p>
                <p className="mb-0 mt-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {option.comparable
                    ? "Mise en place, récurrent, temps interne et frais variables visibles."
                    : "Une hypothèse manque ou est invalide."}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-100">
              <p className="mb-1 font-bold">
                Coût direct le plus bas du modèle
              </p>
              <p className="mb-0 leading-relaxed">
                {lowestCostOption
                  ? lowestCostOption.label
                  : "Aucune option n’est actuellement comparable."}{" "}
                Ce résultat ne décide pas seul : complexité, erreurs,
                auditabilité, continuité et sortie peuvent faire gagner une
                autre option.
              </p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-100">
              <p className="mb-1 font-bold">Seuil manuel / moteur hébergé</p>
              <p className="mb-0 leading-relaxed">
                {threshold.reason === "available"
                  ? `${decimalFormatter.format(
                      threshold.thresholdClients ?? 0,
                    )} clients théoriques, soit ${
                      threshold.firstWholeClient
                    } clients entiers au-delà du croisement. En dessous : ${
                      belowThresholdOption?.label ?? "option inconnue"
                    } ; au-dessus : ${
                      aboveThresholdOption?.label ?? "option inconnue"
                    }.`
                  : threshold.reason === "first-dominates" ||
                      threshold.reason === "second-dominates"
                    ? `${
                        belowThresholdOption?.label ?? "Une option"
                      } présente le coût le plus bas pour tout volume positif avec ces hypothèses : aucun croisement positif.`
                    : threshold.reason === "parallel-distinct"
                      ? `Les deux droites de coût sont parallèles : ${
                          belowThresholdOption?.label ?? "une option"
                        } présente le coût le plus bas à tout volume.`
                      : threshold.reason === "equal-all-volumes"
                        ? "Les deux options ont exactement le même coût à tout volume avec ces hypothèses."
                        : threshold.reason === "invalid-input"
                          ? "Seuil invalide : un calcul dépasse la plage numérique sûre."
                          : "Seuil inconnu tant qu’une hypothèse manque."}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <div className="mb-4">
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.13em] text-violet-700 dark:text-violet-300">
              2. Clôture mensuelle
            </p>
            <h4 className="m-0 text-lg font-bold text-zinc-950 dark:text-white">
              Expliquez facture, cash, créance et droits
            </h4>
            <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Exemple initial : 10 000 € facturés, 100 € d’avoirs, 9 600 €
              affectés et 300 € de créance. Un remboursement reste distinct d’un
              avoir. Les montants se rapprochent, mais le verdict reste STOP
              tant que la qualification fiscale du flux n’a pas été décidée
              explicitement.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {reconciliationFields.map((field) => (
              <label
                key={field.key}
                className="text-xs font-medium text-zinc-700 dark:text-zinc-300"
              >
                {field.label}
                <span className="mt-1 flex min-h-11 items-center rounded-xl border border-zinc-300 bg-white px-3 focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-200 dark:border-zinc-700 dark:bg-zinc-950">
                  <input
                    type="number"
                    min="0"
                    step={field.step}
                    value={inputValue(period[field.key])}
                    onChange={(event) =>
                      updatePeriod(field.key, event.target.value)
                    }
                    aria-invalid={
                      reconciliation.issues.some((issue) =>
                        issue.fields.includes(field.key),
                      )
                        ? "true"
                        : "false"
                    }
                    className="min-w-0 flex-1 bg-transparent text-sm text-zinc-950 outline-none dark:text-white"
                  />
                  <span className="ml-2 text-[11px] text-zinc-500">
                    {field.key === "accessMismatchCount" ? "comptes" : "€"}
                  </span>
                </span>
              </label>
            ))}
          </div>

          <div className="mt-4 grid gap-2 md:grid-cols-2">
            <CheckField
              label="La politique des droits d’accès est validée"
              checked={period.accessPolicyValidated === true}
              onChange={(checked) =>
                setPeriod((current) => ({
                  ...current,
                  accessPolicyValidated: checked,
                }))
              }
            />
            <fieldset className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-200">
              <legend className="px-1 font-semibold">
                Qualification fiscale du flux
              </legend>
              <div className="mt-2 space-y-2">
                {[
                  {
                    label: "Inconnue — STOP",
                    value: "unknown",
                    checked: period.taxRuleRequired === null,
                  },
                  {
                    label: "Non requise pour ce test fictif",
                    value: "not-required",
                    checked: period.taxRuleRequired === false,
                  },
                  {
                    label: "Requise — validation à fournir",
                    value: "required",
                    checked: period.taxRuleRequired === true,
                  },
                ].map((choice) => (
                  <label
                    key={choice.value}
                    className="flex min-h-11 cursor-pointer items-center gap-3 rounded-lg px-2 py-1"
                  >
                    <input
                      type="radio"
                      name="subscription-billing-tax-qualification"
                      value={choice.value}
                      checked={choice.checked}
                      onChange={() =>
                        setPeriod((current) => ({
                          ...current,
                          taxRuleRequired:
                            choice.value === "unknown"
                              ? null
                              : choice.value === "required",
                          taxRuleValidated: null,
                        }))
                      }
                      className="size-4 border-zinc-300 text-violet-600 focus:ring-violet-500"
                    />
                    <span>{choice.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            {period.taxRuleRequired === true && (
              <CheckField
                label="La règle fiscale a été validée par le professionnel compétent"
                checked={period.taxRuleValidated === true}
                onChange={(checked) =>
                  setPeriod((current) => ({
                    ...current,
                    taxRuleValidated: checked,
                  }))
                }
              />
            )}
            <CheckField
              label="La période est déjà clôturée"
              checked={period.periodClosed}
              onChange={(checked) =>
                setPeriod((current) => ({
                  ...current,
                  periodClosed: checked,
                }))
              }
            />
            <CheckField
              label="Un événement financier tardif a été reçu"
              checked={period.lateFinancialEvent}
              onChange={(checked) =>
                setPeriod((current) => ({
                  ...current,
                  lateFinancialEvent: checked,
                }))
              }
            />
            <CheckField
              label="Une clé d’idempotence porte deux contenus différents"
              checked={period.idempotencyConflict}
              onChange={(checked) =>
                setPeriod((current) => ({
                  ...current,
                  idempotencyConflict: checked,
                }))
              }
            />
          </div>

          <div
            className={`mt-5 rounded-2xl border p-5 ${verdictStyles[reconciliation.verdict]}`}
          >
            <div className="flex items-start gap-3">
              {reconciliation.verdict === "pass" ? (
                <CheckCircle2
                  className="mt-0.5 size-5 shrink-0"
                  aria-hidden="true"
                />
              ) : (
                <ShieldAlert
                  className="mt-0.5 size-5 shrink-0"
                  aria-hidden="true"
                />
              )}
              <div>
                <p
                  className="mb-1 font-bold"
                  role="status"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {verdictLabels[reconciliation.verdict]}
                </p>
                <p className="mb-0 text-sm leading-relaxed">
                  Net facturé :{" "}
                  {reconciliation.netInvoiced === null
                    ? "inconnu"
                    : reconciliationCurrencyFormatter.format(
                        reconciliation.netInvoiced,
                      )}
                  . Cash net :{" "}
                  {reconciliation.cashNet === null
                    ? "inconnu"
                    : reconciliationCurrencyFormatter.format(
                        reconciliation.cashNet,
                      )}
                  . Créance calculée :{" "}
                  {reconciliation.expectedClosingReceivable === null
                    ? "inconnue"
                    : reconciliationCurrencyFormatter.format(
                        reconciliation.expectedClosingReceivable,
                      )}
                  .
                </p>
                {reconciliation.issues.length > 0 && (
                  <ul className="mb-0 mt-3 space-y-1.5 pl-5 text-sm">
                    {reconciliation.issues.map((issue, index) => (
                      <li key={`${issue.code}-${index}`}>{issue.message}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-zinc-200 pt-6 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800">
          <div>
            <p className="mb-1 text-sm font-bold text-zinc-950 dark:text-white">
              Continuez dans le classeur libre
            </p>
            <p className="mb-0 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              Dix règles, TCO, MRR, rapprochement, relances, 24 tests, 15
              sources et contrôles. Aucune macro, aucune donnée réelle.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={reset}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 text-sm font-semibold text-zinc-800 transition-colors hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900"
            >
              <RotateCcw className="size-4" aria-hidden="true" />
              Réinitialiser
            </button>
            <a
              href="/ressources/kit-pilotage-facturation-saas.xlsx"
              download
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-zinc-950 px-4 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              <Download className="size-4" aria-hidden="true" />
              Télécharger le kit XLSX
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function NumberField({
  label,
  value,
  suffix,
  step,
  onChange,
  invalid,
}: {
  label: string;
  value: number | null;
  suffix: string;
  step: string;
  onChange: (value: number | null) => void;
  invalid: boolean;
}) {
  return (
    <label className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
      {label}
      <span className="mt-1 flex min-h-11 items-center rounded-xl border border-zinc-300 bg-white px-3 focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-200 dark:border-zinc-700 dark:bg-zinc-950">
        <input
          type="number"
          min="0"
          step={step}
          value={inputValue(value)}
          onChange={(event) => onChange(parseNumber(event.target.value))}
          aria-invalid={invalid}
          className="min-w-0 flex-1 bg-transparent text-sm text-zinc-950 outline-none dark:text-white"
        />
        <span className="ml-2 text-[11px] text-zinc-500">{suffix}</span>
      </span>
    </label>
  );
}

function CheckField({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="flex min-h-11 cursor-pointer items-start gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-200">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="mt-0.5 size-4 rounded border-zinc-300 text-violet-600 focus:ring-violet-500"
      />
      <span>{label}</span>
    </label>
  );
}
