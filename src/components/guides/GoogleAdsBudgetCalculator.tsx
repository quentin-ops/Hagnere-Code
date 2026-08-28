"use client";

/**
 * EN RÉSERVE — composant volontairement monté sur aucune page.
 *
 * Destination : le guide dont le slug est `budget-google-ads-pme`, non encore
 * réécrit — son slug figure dans `LEGACY_GUIDE_SLUGS`
 * (src/lib/legacy-guide-redirects.ts:19) et reste donc redirigé.
 * Feuille de route : docs/roadmap-guides-seo.md:140 (« Récupérer P4 ») et
 * :241 (« Calculateur seuil de rentabilité et scénarios »).
 *
 * Ce n'est donc pas du code mort : il est maintenu par
 * `src/lib/google-ads-budget.ts` et sa suite de tests en attendant la
 * publication du guide. Si ce commentaire survit à la mise en ligne du guide,
 * c'est que le montage a été oublié — et inversement, un outil réellement
 * démonté par erreur reste détectable parce qu'il n'aura pas cet en-tête.
 */

import { useState } from "react";
import {
  calculateGoogleAdsBudget,
  type GoogleAdsBudgetInputs,
} from "@/lib/google-ads-budget";

const INITIAL_VALUES: GoogleAdsBudgetInputs = {
  marginPerSale: 1500,
  leadToSaleRate: 25,
  targetQualifiedLeads: 8,
  nonMediaCosts: 900,
  amountToKeep: 300,
  forecastClicks: 300,
  forecastMediaCost: 1800,
  maxAcceptableLoss: 3000,
};

const fields: Array<{
  key: keyof GoogleAdsBudgetInputs;
  label: string;
  help: string;
  suffix: string;
  min: number;
  max?: number;
  step: number;
}> = [
  {
    key: "marginPerSale",
    label: "Marge laissée par une vente",
    help: "Après les coûts variables directement liés à cette vente.",
    suffix: "€",
    min: 0,
    step: 0.01,
  },
  {
    key: "leadToSaleRate",
    label: "Demandes sérieuses qui deviennent des ventes",
    help: "Utilisez vos données ; sinon, testez plusieurs hypothèses.",
    suffix: "%",
    min: 0,
    max: 100,
    step: 0.1,
  },
  {
    key: "targetQualifiedLeads",
    label: "Demandes sérieuses que vous voulez examiner",
    help: "Un objectif choisi pour ce test précis.",
    suffix: "",
    min: 1,
    step: 1,
  },
  {
    key: "nonMediaCosts",
    label: "Coûts du test hors Google",
    help: "Page, mesure, gestion et temps commercial valorisé.",
    suffix: "€",
    min: 0,
    step: 0.01,
  },
  {
    key: "amountToKeep",
    label: "Somme que vous souhaitez encore conserver",
    help: "Pour les charges fixes, le résultat visé et votre marge de sécurité.",
    suffix: "€",
    min: 0,
    step: 0.01,
  },
  {
    key: "forecastClicks",
    label: "Clics prévus",
    help: "Reprenez un export daté du Planificateur de mots clés.",
    suffix: "",
    min: 1,
    step: 1,
  },
  {
    key: "forecastMediaCost",
    label: "Dépense Google estimée par le Planificateur",
    help: "Pour la même offre, la même zone et toute la période du test.",
    suffix: "€",
    min: 0.01,
    step: 0.01,
  },
  {
    key: "maxAcceptableLoss",
    label: "Perte totale maximale sans aucune vente",
    help: "Une limite de trésorerie décidée avant le lancement.",
    suffix: "€",
    min: 0,
    step: 0.01,
  },
];

const euro = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 2,
});

const decimal = new Intl.NumberFormat("fr-FR", {
  maximumFractionDigits: 2,
});

const verdictCopy = {
  "missing-data": {
    title: "Une saisie empêche encore le calcul",
    text: "Les demandes et les clics doivent être des nombres entiers positifs, et la dépense Google estimée doit être positive. Les autres valeurs peuvent être nulles, mais jamais négatives ni infinies.",
    classes:
      "border-zinc-300 bg-zinc-100 text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100",
  },
  "impossible-volume": {
    title: "Le volume demandé est impossible avec ces clics",
    text: "Vous demandez plus d’une demande sérieuse par clic prévu. Réduisez le nombre de demandes visées ou reprenez la prévision de clics avant tout calcul financier.",
    classes:
      "border-red-300 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950/30 dark:text-red-100",
  },
  "financially-compatible": {
    title: "Le scénario est compatible si vos deux objectifs se réalisent",
    text: "La dépense Google estimée reste sous les deux limites si vous atteignez le nombre de demandes et le taux de signature saisis. Le calculateur ne prouve pas que le taux clic vers demande affiché sera atteignable : confrontez-le à vos données ou testez plusieurs hypothèses.",
    classes:
      "border-emerald-300 bg-emerald-50 text-emerald-950 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-100",
  },
  "margin-limit-exceeded": {
    title:
      "La dépense dépasse la marge disponible même si l’objectif est atteint",
    text: "Réduisez l’offre, la zone ou le volume visé, ou revoyez l’économie du projet. Ne baissez pas seulement le budget en conservant des prévisions qui ne décriraient plus le même test.",
    classes:
      "border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100",
  },
  "risk-limit-exceeded": {
    title: "La dépense dépasse votre limite de trésorerie",
    text: "Même si l’objectif de demandes et le taux de signature se réalisent, le pire cas n’est pas compatible avec la perte maximale choisie. Réduisez le coût complet ou reportez le lancement.",
    classes:
      "border-red-300 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950/30 dark:text-red-100",
  },
  "both-limits-exceeded": {
    title: "La dépense dépasse vos deux limites",
    text: "Même si l’objectif de demandes et le taux de signature se réalisent, la marge ne finance pas le test ; dans le pire cas, la perte dépasse aussi votre limite. Réduisez le périmètre et son coût complet, ou reportez.",
    classes:
      "border-red-300 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950/30 dark:text-red-100",
  },
};

function formatEuro(value: number) {
  return Number.isFinite(value) ? euro.format(value) : "—";
}

function formatDecimal(value: number) {
  return Number.isFinite(value) ? decimal.format(value) : "—";
}

export function GoogleAdsBudgetCalculator() {
  const [values, setValues] = useState<GoogleAdsBudgetInputs>(INITIAL_VALUES);
  const result = calculateGoogleAdsBudget(values);
  const verdict = verdictCopy[result.verdict];

  function update(key: keyof GoogleAdsBudgetInputs, raw: string) {
    const parsed = Number.parseFloat(raw.replace(",", "."));
    setValues((current) => ({
      ...current,
      [key]: Number.isFinite(parsed) ? parsed : Number.NaN,
    }));
  }

  return (
    <section
      className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
      aria-labelledby="ads-budget-calculator-title"
    >
      <div className="border-b border-zinc-800 bg-zinc-950 px-4 py-5 text-white sm:px-6">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-300">
          Calcul local · aucune donnée envoyée
        </p>
        <h3
          id="ads-budget-calculator-title"
          className="m-0 text-lg font-bold sm:text-xl"
        >
          Comparez les trois montants de votre test
        </h3>
        <p className="mb-0 mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">
          Les valeurs affichées forment un exemple fictif. Remplacez-les par vos
          données et par une prévision Google datée.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
        <div className="grid gap-4 p-4 sm:grid-cols-2 sm:p-6">
          {fields.map((field) => (
            <label key={field.key} className="block">
              <span className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {field.label}
              </span>
              <span
                id={`ads-budget-${field.key}-help`}
                className="mt-1 block min-h-8 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400"
              >
                {field.help}
              </span>
              <span className="relative mt-2 block">
                <input
                  type="number"
                  value={
                    Number.isFinite(values[field.key]) ? values[field.key] : ""
                  }
                  min={field.min}
                  max={field.max}
                  step={field.step}
                  aria-describedby={`ads-budget-${field.key}-help`}
                  aria-invalid={
                    !Number.isFinite(values[field.key]) ||
                    values[field.key] < field.min ||
                    (field.max !== undefined &&
                      values[field.key] > field.max) ||
                    (field.step === 1 && !Number.isInteger(values[field.key]))
                  }
                  onChange={(event) => update(field.key, event.target.value)}
                  className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 pr-10 text-sm text-zinc-950 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:ring-violet-950"
                />
                {field.suffix && (
                  <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-zinc-500">
                    {field.suffix}
                  </span>
                )}
              </span>
            </label>
          ))}
        </div>

        <div className="border-t border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-6 lg:border-l lg:border-t-0">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-zinc-500">
            Vos trois montants
          </p>
          <div className="space-y-3">
            <div className="rounded-xl border border-blue-200 bg-white p-4 dark:border-blue-900 dark:bg-zinc-950">
              <p className="mb-1 text-xs font-semibold text-blue-700 dark:text-blue-300">
                Dépense Google estimée
              </p>
              <p className="mb-0 text-2xl font-bold text-zinc-950 dark:text-white">
                {formatEuro(result.completeTestCost - values.nonMediaCosts)}
              </p>
              <p className="mb-0 mt-1 text-xs text-zinc-500">
                soit {formatEuro(result.forecastCostPerClick)} par clic prévu
              </p>
            </div>
            <div className="rounded-xl border border-violet-200 bg-white p-4 dark:border-violet-900 dark:bg-zinc-950">
              <p className="mb-1 text-xs font-semibold text-violet-700 dark:text-violet-300">
                Plafond média si vos deux objectifs sont atteints
              </p>
              <p className="mb-0 text-2xl font-bold text-zinc-950 dark:text-white">
                {formatEuro(Math.max(0, result.mediaBudgetIfTargetReached))}
              </p>
              <p className="mb-0 mt-1 text-xs text-zinc-500">
                {Number.isFinite(result.mediaBudgetIfTargetReached) &&
                result.mediaBudgetIfTargetReached < 0
                  ? `${formatEuro(-result.mediaBudgetIfTargetReached)} manquent avant même de financer Google`
                  : "après les coûts hors Google et la somme à conserver"}
              </p>
            </div>
            <div className="rounded-xl border border-amber-200 bg-white p-4 dark:border-amber-900 dark:bg-zinc-950">
              <p className="mb-1 text-xs font-semibold text-amber-700 dark:text-amber-300">
                Montant compatible avec votre perte maximale
              </p>
              <p className="mb-0 text-2xl font-bold text-zinc-950 dark:text-white">
                {formatEuro(Math.max(0, result.riskCompatibleMediaBudget))}
              </p>
              <p className="mb-0 mt-1 text-xs text-zinc-500">
                {Number.isFinite(result.riskCompatibleMediaBudget) &&
                result.riskCompatibleMediaBudget < 0
                  ? `${formatEuro(-result.riskCompatibleMediaBudget)} dépassent déjà la perte maximale`
                  : "après les coûts du test hors Google"}
              </p>
            </div>
          </div>

          <div className={"mt-4 rounded-xl border p-4 " + verdict.classes}>
            <p className="mb-1 font-semibold">{verdict.title}</p>
            <p className="mb-0 text-sm leading-relaxed opacity-90">
              {verdict.text}
            </p>
          </div>

          <p
            className="sr-only"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            {verdict.title}. Dépense Google estimée :{" "}
            {formatEuro(result.completeTestCost - values.nonMediaCosts)}.
            Montant finançable si vos objectifs sont atteints :{" "}
            {formatEuro(Math.max(0, result.mediaBudgetIfTargetReached))}.
            Montant compatible avec la perte maximale :{" "}
            {formatEuro(Math.max(0, result.riskCompatibleMediaBudget))}.
          </p>

          <dl className="mt-4 grid gap-3 sm:grid-cols-2">
            <div>
              <dt className="text-xs text-zinc-500">
                Ventes si l’objectif de demandes est atteint
              </dt>
              <dd className="mt-1 font-semibold text-zinc-900 dark:text-white">
                {formatDecimal(result.salesIfTargetReached)}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-zinc-500">
                Clics devant devenir une demande
              </dt>
              <dd className="mt-1 font-semibold text-zinc-900 dark:text-white">
                {formatDecimal(result.requiredClickToLeadRate)}
                {Number.isFinite(result.requiredClickToLeadRate) ? " %" : ""}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-zinc-500">Coût complet du test</dt>
              <dd className="mt-1 font-semibold text-zinc-900 dark:text-white">
                {formatEuro(result.completeTestCost)}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-zinc-500">
                Marge restante si vos deux objectifs sont atteints
              </dt>
              <dd className="mt-1 font-semibold text-zinc-900 dark:text-white">
                {formatEuro(result.marginLeftIfTargetReached)}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
