"use client";

import { useMemo, useState } from "react";
import {
  calculateApplicationRoi,
  type ApplicationRoiCostItem,
  type ApplicationRoiCostKnowledge,
  type ApplicationRoiCostKind,
  type ApplicationRoiCostTiming,
  type ApplicationRoiInputs,
  type ApplicationRoiOkResult,
  type ApplicationRoiPaybackStatus,
  type RoiValue,
} from "@/lib/application-roi";

type NumericInputKey = Exclude<keyof ApplicationRoiInputs, "costs">;
type ScenarioKey = "prudent" | "central" | "haut" | "personnalise";

interface ScenarioPreset {
  label: string;
  goLiveMonth: number;
  rampMonths: number;
  adoptionPct: number;
  usefulReallocationPct: number;
  cashAvoidanceRealizationPct: number;
  realizationCostMultiplier: number;
  recurringCostMultiplier: number;
  doubleRunMonthlyAmount: number;
  doubleRunStartMonth: number;
  doubleRunEndMonth: number;
}

const scenarioPresets: Record<
  Exclude<ScenarioKey, "personnalise">,
  ScenarioPreset
> = {
  prudent: {
    label: "Prudent",
    goLiveMonth: 8,
    rampMonths: 6,
    adoptionPct: 70,
    usefulReallocationPct: 35,
    cashAvoidanceRealizationPct: 40,
    realizationCostMultiplier: 1.15,
    recurringCostMultiplier: 1.15,
    doubleRunMonthlyAmount: 600,
    doubleRunStartMonth: 7,
    doubleRunEndMonth: 9,
  },
  central: {
    label: "Central",
    goLiveMonth: 5,
    rampMonths: 0,
    adoptionPct: 100,
    usefulReallocationPct: 60,
    cashAvoidanceRealizationPct: 70,
    realizationCostMultiplier: 1,
    recurringCostMultiplier: 1,
    doubleRunMonthlyAmount: 0,
    doubleRunStartMonth: 4,
    doubleRunEndMonth: 5,
  },
  haut: {
    label: "Haut · favorable",
    goLiveMonth: 4,
    rampMonths: 2,
    adoptionPct: 100,
    usefulReallocationPct: 80,
    cashAvoidanceRealizationPct: 90,
    realizationCostMultiplier: 0.95,
    recurringCostMultiplier: 0.9,
    doubleRunMonthlyAmount: 0,
    doubleRunStartMonth: 3,
    doubleRunEndMonth: 4,
  },
};

const costTimingLabels: Record<ApplicationRoiCostTiming, string> = {
  decision: "Une fois, au mois 0",
  "go-live": "Une fois, à la mise en service",
  "monthly-active": "Chaque mois actif",
  month: "Une fois, à un mois précis",
  "monthly-range": "Chaque mois d’une plage",
  exit: "Une fois, à la fin de l’horizon",
};

const costKnowledgeLabels: Record<ApplicationRoiCostKnowledge, string> = {
  known: "Montant connu",
  "not-applicable": "Non applicable",
  unknown: "À chiffrer — arrêt du calcul",
};

const costKindLabels: Record<ApplicationRoiCostKind, string> = {
  cash: "Trésorerie",
  "internal-opportunity": "Coût économique interne",
};

const costCoverage: Record<string, string> = {
  cadrage: "Cadrage",
  "realisation-integrations": "Réalisation + intégrations",
  "migration-formation": "Migration + formation et changement",
  "initial-internal": "Temps interne",
  hosting: "Licences + hébergement",
  maintenance: "Support + maintenance",
  security: "Sécurité + conformité",
  evolutions: "Évolutions",
  "double-run": "Double exploitation",
  exit: "Sortie + réversibilité",
};

const inputClassName =
  "mt-2 min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-950 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 disabled:cursor-not-allowed disabled:bg-zinc-100 disabled:text-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:disabled:bg-zinc-800 dark:disabled:text-zinc-300";

function initialCosts(): ApplicationRoiCostItem[] {
  return [
    {
      id: "cadrage",
      label: "Cadrage",
      category: "cadrage",
      kind: "cash",
      timing: "decision",
      knowledge: "known",
      amount: 4000,
    },
    {
      id: "realisation-integrations",
      label: "Réalisation et intégrations — enveloppe commune",
      category: "realisation",
      alsoCovers: ["integrations"],
      kind: "cash",
      timing: "decision",
      knowledge: "known",
      amount: 26000,
    },
    {
      id: "migration-formation",
      label: "Migration et formation — enveloppe commune",
      category: "migration",
      alsoCovers: ["formation-change"],
      kind: "cash",
      timing: "decision",
      knowledge: "known",
      amount: 2400,
    },
    {
      id: "initial-internal",
      label: "Temps interne de préparation",
      category: "temps-interne",
      kind: "internal-opportunity",
      timing: "decision",
      knowledge: "known",
      amount: 3600,
    },
    {
      id: "hosting",
      label: "Hébergement et surveillance",
      category: "licences-hebergement",
      kind: "cash",
      timing: "monthly-active",
      knowledge: "known",
      amount: 150,
    },
    {
      id: "maintenance",
      label: "Support et maintenance",
      category: "support-maintenance",
      kind: "cash",
      timing: "monthly-active",
      knowledge: "known",
      amount: 250,
    },
    {
      id: "security",
      label: "Sécurité et conformité — hypothèse fictive",
      category: "securite-conformite",
      kind: "cash",
      timing: "decision",
      knowledge: "known",
      amount: 0,
    },
    {
      id: "evolutions",
      label: "Évolutions — hypothèse fictive",
      category: "evolutions",
      kind: "cash",
      timing: "monthly-active",
      knowledge: "known",
      amount: 0,
    },
    {
      id: "double-run",
      label: "Double exploitation — hypothèse fictive",
      category: "double-run",
      kind: "cash",
      timing: "monthly-range",
      knowledge: "known",
      amount: 0,
      startMonth: 4,
      endMonth: 5,
    },
    {
      id: "exit",
      label: "Sortie et réversibilité",
      category: "sortie",
      kind: "cash",
      timing: "exit",
      knowledge: "known",
      amount: 1200,
    },
  ];
}

export function createInitialApplicationRoiInputs(): ApplicationRoiInputs {
  return {
    horizonMonths: 48,
    goLiveMonth: 5,
    rampMonths: 0,
    annualHoursOnTask: 723.2,
    avoidableCashHourlyOutlay: 0,
    economicHourlyValue: 36,
    technicallyRemovablePct: 100,
    adoptionPct: 100,
    laborCashRemovalPct: 0,
    usefulReallocationPct: 60,
    annualAvoidableCashCost: 2400,
    cashAvoidanceRealizationPct: 70,
    costs: initialCosts(),
  };
}

function cloneInputs(input: ApplicationRoiInputs): ApplicationRoiInputs {
  return {
    ...input,
    costs: input.costs.map((cost) => ({
      ...cost,
      alsoCovers: cost.alsoCovers ? [...cost.alsoCovers] : undefined,
    })),
  };
}

function scaledKnownAmount(
  cost: ApplicationRoiCostItem,
  multiplier: number,
): number | null {
  return cost.knowledge === "known" && cost.amount !== null
    ? Math.round(cost.amount * multiplier * 100) / 100
    : null;
}

export function applyApplicationRoiScenario(
  baseInputs: ApplicationRoiInputs,
  key: Exclude<ScenarioKey, "personnalise">,
): ApplicationRoiInputs {
  const preset = scenarioPresets[key];
  const base = cloneInputs(baseInputs);

  return {
    ...base,
    goLiveMonth: preset.goLiveMonth,
    rampMonths: preset.rampMonths,
    adoptionPct: preset.adoptionPct,
    usefulReallocationPct: preset.usefulReallocationPct,
    cashAvoidanceRealizationPct: preset.cashAvoidanceRealizationPct,
    costs: base.costs.map((cost) => {
      if (cost.id === "realisation-integrations") {
        return {
          ...cost,
          amount: scaledKnownAmount(cost, preset.realizationCostMultiplier),
        };
      }
      if (cost.id === "hosting" || cost.id === "maintenance") {
        return {
          ...cost,
          amount: scaledKnownAmount(cost, preset.recurringCostMultiplier),
        };
      }
      if (cost.id === "double-run") {
        return {
          ...cost,
          amount:
            cost.knowledge === "known"
              ? preset.doubleRunMonthlyAmount
              : null,
          timing: "monthly-range",
          startMonth: preset.doubleRunStartMonth,
          endMonth: preset.doubleRunEndMonth,
        };
      }
      return cost;
    }),
  };
}

function parseNullableNumber(value: string): number | null {
  if (value.trim() === "") return null;
  const number = Number(value.replace(",", "."));
  return Number.isFinite(number) ? number : null;
}

const moneyFormatter = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 2,
});

const percentageFormatter = new Intl.NumberFormat("fr-FR", {
  maximumFractionDigits: 1,
});

function formatMoney(value: number): string {
  return moneyFormatter.format(value);
}

function formatPercentage(value: number | null): string {
  return value === null ? "Non applicable" : `${percentageFormatter.format(value)} %`;
}

function paybackLabel(
  status: ApplicationRoiPaybackStatus,
  month: number | null,
): string {
  switch (status) {
    case "NOT_APPLICABLE":
      return "Non applicable : coût total nul";
    case "NO_FINANCING_DEFICIT":
      return "Aucun déficit cumulé sur l’horizon";
    case "REACHED":
      return `Mois ${month}`;
    case "NOT_REACHED":
      return "Non atteint durablement à l’horizon";
  }
}

function netEconomicValue(result: ApplicationRoiOkResult): number {
  return result.economicBenefits - result.economicTco;
}

type RoiDirection = "NOT_APPLICABLE" | "NEGATIVE" | "ZERO" | "POSITIVE";

function roiDirection(roi: RoiValue): RoiDirection {
  if (roi.status === "NOT_APPLICABLE" || roi.value === null) {
    return "NOT_APPLICABLE";
  }
  if (roi.value < 0) return "NEGATIVE";
  if (roi.value === 0) return "ZERO";
  return "POSITIVE";
}

function describeRoiDirection(
  label: "de trésorerie" | "économique",
  direction: RoiDirection,
): string {
  switch (direction) {
    case "NOT_APPLICABLE":
      return `Le ROI ${label} n’est pas applicable : son TCO est nul.`;
    case "NEGATIVE":
      return `Le ROI ${label} est négatif : les bénéfices ne couvrent pas son TCO sur cet horizon.`;
    case "ZERO":
      return `Le ROI ${label} est nul : les bénéfices couvrent exactement son TCO sur cet horizon.`;
    case "POSITIVE":
      return `Le ROI ${label} est positif : les bénéfices dépassent son TCO sur cet horizon.`;
  }
}

export function interpretApplicationRoiResult(
  result: Pick<ApplicationRoiOkResult, "cashRoiPct" | "economicRoiPct">,
): string {
  const cashDirection = roiDirection(result.cashRoiPct);
  const economicDirection = roiDirection(result.economicRoiPct);
  const statusSummary = `${describeRoiDirection(
    "de trésorerie",
    cashDirection,
  )} ${describeRoiDirection("économique", economicDirection)}`;

  if (economicDirection === "NOT_APPLICABLE") {
    return `${statusSummary} Le ratio économique n’a pas de dénominateur : comparez les flux en euros et n’affichez pas un pourcentage infini.`;
  }

  if (economicDirection === "NEGATIVE") {
    return `${statusSummary} Sur ces hypothèses, les bénéfices économiques ne couvrent pas le coût total. Réduisez le périmètre, testez une option plus simple ou cherchez la donnée qui pourrait changer la décision.`;
  }

  if (economicDirection === "ZERO") {
    return `${statusSummary} Il ne reste aucune marge pour absorber un retard, une sortie plus chère ou un bénéfice moindre. Traitez cet équilibre comme une limite, pas comme un résultat positif.`;
  }

  if (cashDirection === "NOT_APPLICABLE") {
    return `${statusSummary} La lecture économique est positive, mais le ratio de trésorerie ne peut pas être calculé. Comparez les flux de trésorerie en euros et n’en déduisez pas une rentabilité infinie.`;
  }

  if (cashDirection === "NEGATIVE") {
    return `${statusSummary} Le projet crée une valeur économique positive uniquement grâce à la capacité réaffectée : il ne se rembourse pas en trésorerie sur cet horizon. Vérifiez quelle activité utilisera réellement ce temps.`;
  }

  if (cashDirection === "ZERO") {
    return `${statusSummary} La trésorerie atteint seulement l’équilibre. La moindre dérive de coût ou de gain peut la rendre négative : testez le scénario prudent avant de décider.`;
  }

  return `${statusSummary} Le calcul mérite d’être approfondi, sans considérer ce résultat comme acquis. Testez encore le scénario prudent, la sortie, le retard et les coûts actuellement connus à zéro.`;
}

interface NumberFieldProps {
  id: string;
  label: string;
  help: string;
  value: number | null;
  suffix?: string;
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: string) => void;
}

function NumberField({
  id,
  label,
  help,
  value,
  suffix,
  min,
  max,
  step = 1,
  onChange,
}: NumberFieldProps) {
  const helpId = `${id}-help`;
  const errorId = `${id}-error`;
  const hasError =
    value === null ||
    !Number.isFinite(value) ||
    (min !== undefined && value < min) ||
    (max !== undefined && value > max) ||
    (step === 1 && !Number.isInteger(value));

  return (
    <label
      htmlFor={id}
      className="block rounded-xl border border-zinc-200 bg-white p-3.5 dark:border-zinc-700 dark:bg-zinc-950"
    >
      <span className="block text-xs font-semibold leading-snug text-zinc-800 dark:text-zinc-100">
        {label}
      </span>
      <span
        id={helpId}
        className="mt-1 block text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-400"
      >
        {help}
      </span>
      <span className="relative block">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={min}
          max={max}
          step={step}
          value={value ?? ""}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={hasError || undefined}
          aria-describedby={`${helpId}${hasError ? ` ${errorId}` : ""}`}
          className={`${inputClassName} ${suffix ? "pr-12" : ""}`}
        />
        {suffix ? (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-3 mt-2 flex items-center text-xs font-semibold text-zinc-500 dark:text-zinc-300"
          >
            {suffix}
          </span>
        ) : null}
      </span>
      {hasError ? (
        <span
          id={errorId}
          className="mt-1.5 block text-[11px] font-medium leading-relaxed text-red-700 dark:text-red-300"
        >
          Valeur requise, comprise dans les limites indiquées.
        </span>
      ) : null}
    </label>
  );
}

interface CostEditorProps {
  cost: ApplicationRoiCostItem;
  horizon: number | null;
  onChange: (next: ApplicationRoiCostItem) => void;
}

function CostEditor({ cost, horizon, onChange }: CostEditorProps) {
  const amountSummary =
    cost.knowledge === "known" && cost.amount !== null
      ? `${formatMoney(cost.amount)} · ${costTimingLabels[cost.timing]}`
      : costKnowledgeLabels[cost.knowledge];
  const knowledgeErrorId = `knowledge-${cost.id}-error`;
  const amountErrorId = `amount-${cost.id}-error`;
  const knowledgeIsUnknown = cost.knowledge === "unknown";
  const amountIsInvalid =
    cost.knowledge === "known" &&
    (cost.amount === null ||
      !Number.isFinite(cost.amount) ||
      cost.amount < 0);

  return (
    <details className="group rounded-xl border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-950">
      <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 marker:hidden">
        <span>
          <span className="block text-sm font-semibold text-zinc-950 dark:text-white">
            {costCoverage[cost.id] ?? cost.label}
          </span>
          <span className="mt-0.5 block text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-400">
            {amountSummary}
          </span>
        </span>
        <span
          aria-hidden="true"
          className="grid size-8 shrink-0 place-items-center rounded-full border border-zinc-200 text-lg text-zinc-500 transition group-open:rotate-45 dark:border-zinc-700"
        >
          +
        </span>
      </summary>

      <div className="grid gap-3 border-t border-zinc-200 p-4 dark:border-zinc-800 sm:grid-cols-2">
        <label htmlFor={`knowledge-${cost.id}`} className="block">
          <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-200">
            État de la donnée
          </span>
          <select
            id={`knowledge-${cost.id}`}
            value={cost.knowledge}
            aria-invalid={knowledgeIsUnknown || undefined}
            aria-describedby={
              knowledgeIsUnknown ? knowledgeErrorId : undefined
            }
            onChange={(event) => {
              const knowledge = event.target.value as ApplicationRoiCostKnowledge;
              onChange({
                ...cost,
                knowledge,
                amount:
                  knowledge === "known" && cost.knowledge === "known"
                    ? cost.amount
                    : null,
              });
            }}
            className={inputClassName}
          >
            {Object.entries(costKnowledgeLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          {knowledgeIsUnknown ? (
            <span
              id={knowledgeErrorId}
              className="mt-1.5 block text-[11px] font-medium leading-relaxed text-red-700 dark:text-red-300"
            >
              Chiffrez cette famille ou marquez-la non applicable pour
              reprendre le calcul.
            </span>
          ) : null}
        </label>

        <label htmlFor={`amount-${cost.id}`} className="block">
          <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-200">
            Montant par occurrence
          </span>
          <span className="relative block">
            <input
              id={`amount-${cost.id}`}
              type="number"
              inputMode="decimal"
              min={0}
              step="0.01"
              value={cost.amount ?? ""}
              disabled={cost.knowledge !== "known"}
              aria-invalid={amountIsInvalid || undefined}
              aria-describedby={amountIsInvalid ? amountErrorId : undefined}
              onChange={(event) =>
                onChange({
                  ...cost,
                  amount: parseNullableNumber(event.target.value),
                })
              }
              className={`${inputClassName} pr-9`}
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-3 mt-2 flex items-center text-xs font-semibold text-zinc-500 dark:text-zinc-300"
            >
              €
            </span>
          </span>
          {amountIsInvalid ? (
            <span
              id={amountErrorId}
              className="mt-1.5 block text-[11px] font-medium leading-relaxed text-red-700 dark:text-red-300"
            >
              Saisissez un montant positif ou nul.
            </span>
          ) : null}
        </label>

        <label htmlFor={`kind-${cost.id}`} className="block">
          <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-200">
            Nature du coût
          </span>
          <select
            id={`kind-${cost.id}`}
            value={cost.kind}
            disabled={cost.knowledge !== "known"}
            onChange={(event) =>
              onChange({
                ...cost,
                kind: event.target.value as ApplicationRoiCostKind,
              })
            }
            className={inputClassName}
          >
            {Object.entries(costKindLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor={`timing-${cost.id}`} className="block">
          <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-200">
            Moment du coût
          </span>
          <select
            id={`timing-${cost.id}`}
            value={cost.timing}
            disabled={cost.knowledge !== "known"}
            onChange={(event) =>
              onChange({
                ...cost,
                timing: event.target.value as ApplicationRoiCostTiming,
              })
            }
            className={inputClassName}
          >
            {Object.entries(costTimingLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>

        {cost.timing === "month" ? (
          <label htmlFor={`month-${cost.id}`} className="block sm:col-span-2">
            <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-200">
              Mois du coût, entre 0 et {horizon ?? "l’horizon"}
            </span>
            <input
              id={`month-${cost.id}`}
              type="number"
              inputMode="numeric"
              min={0}
              max={horizon ?? undefined}
              step={1}
              value={cost.month ?? ""}
              disabled={cost.knowledge !== "known"}
              onChange={(event) =>
                onChange({
                  ...cost,
                  month: parseNullableNumber(event.target.value) ?? undefined,
                })
              }
              className={inputClassName}
            />
          </label>
        ) : null}

        {cost.timing === "monthly-range" ? (
          <>
            <label htmlFor={`start-${cost.id}`} className="block">
              <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                Premier mois inclus
              </span>
              <input
                id={`start-${cost.id}`}
                type="number"
                inputMode="numeric"
                min={0}
                max={horizon ?? undefined}
                step={1}
                value={cost.startMonth ?? ""}
                disabled={cost.knowledge !== "known"}
                onChange={(event) =>
                  onChange({
                    ...cost,
                    startMonth:
                      parseNullableNumber(event.target.value) ?? undefined,
                  })
                }
                className={inputClassName}
              />
            </label>
            <label htmlFor={`end-${cost.id}`} className="block">
              <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                Dernier mois inclus
              </span>
              <input
                id={`end-${cost.id}`}
                type="number"
                inputMode="numeric"
                min={0}
                max={horizon ?? undefined}
                step={1}
                value={cost.endMonth ?? ""}
                disabled={cost.knowledge !== "known"}
                onChange={(event) =>
                  onChange({
                    ...cost,
                    endMonth:
                      parseNullableNumber(event.target.value) ?? undefined,
                  })
                }
                className={inputClassName}
              />
            </label>
          </>
        ) : null}

        <p className="mb-0 text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-400 sm:col-span-2">
          Ligne affichée : {cost.label}. Une enveloppe commune couvre plusieurs
          familles sans inventer leur répartition.
        </p>
      </div>
    </details>
  );
}

function ScenarioComparison({
  baseInputs,
}: {
  baseInputs: ApplicationRoiInputs;
}) {
  const scenarios = Object.entries(scenarioPresets).map(([key, preset]) => {
    const result = calculateApplicationRoi(
      applyApplicationRoiScenario(
        baseInputs,
        key as Exclude<ScenarioKey, "personnalise">,
      ),
    );
    return { key, preset, result };
  });

  return (
    <div className="mt-6">
      <p className="text-sm font-semibold text-zinc-950 dark:text-white">
        Sensibilité conjointe au calendrier, à l’adoption, aux coûts et aux gains
      </p>
      <p className="mt-1 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
        Ces trois scénarios complets appartiennent au cas fictif. Ils ne sont
        ni des moyennes ni des objectifs recommandés.
      </p>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        {scenarios.map(({ key, preset, result }) => (
          <div
            key={key}
            className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-950"
          >
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-indigo-700 dark:text-indigo-300">
              {preset.label}
            </p>
            <p className="mt-2 text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-400">
              Mise en service M{preset.goLiveMonth} · rampe{" "}
              {preset.rampMonths} mois · adoption {preset.adoptionPct} %
            </p>
            <p className="mt-1 text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-400">
              Réalisation{" "}
              {preset.realizationCostMultiplier === 1
                ? "au devis"
                : `${preset.realizationCostMultiplier > 1 ? "+" : "−"}${percentageFormatter.format(
                    Math.abs(
                      (preset.realizationCostMultiplier - 1) * 100,
                    ),
                  )} %`}
              {" · "}hébergement + maintenance{" "}
              {preset.recurringCostMultiplier === 1
                ? "au devis"
                : `${preset.recurringCostMultiplier > 1 ? "+" : "−"}${percentageFormatter.format(
                    Math.abs((preset.recurringCostMultiplier - 1) * 100),
                  )} %`}
              {" · "}double exploitation{" "}
              {formatMoney(preset.doubleRunMonthlyAmount)}/mois
            </p>
            <p className="mt-1 text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-400">
              Capacité utile {preset.usefulReallocationPct} % · décaissements
              évités {preset.cashAvoidanceRealizationPct} %
            </p>
            {result.status === "OK" ? (
              <>
                <p className="mt-3 text-lg font-bold tabular-nums text-zinc-950 dark:text-white">
                  {formatPercentage(result.economicRoiPct.value)}
                </p>
                <p className="mt-0.5 text-[11px] text-zinc-500 dark:text-zinc-400">
                  ROI économique cumulé
                </p>
              </>
            ) : (
              <p className="mt-3 text-xs font-semibold text-amber-800 dark:text-amber-300">
                Incompatible avec les autres valeurs
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ResultPanel({
  baseInputs,
  inputs,
  result,
}: {
  baseInputs: ApplicationRoiInputs;
  inputs: ApplicationRoiInputs;
  result: ReturnType<typeof calculateApplicationRoi>;
}) {
  if (result.status === "STOP") {
    return (
      <section
        aria-labelledby="roi-result-title"
        className="rounded-2xl border border-amber-300 bg-amber-50 p-5 text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100 sm:p-6"
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-amber-700 dark:text-amber-300">
          STOP · aucune estimation produite
        </p>
        <h4 id="roi-result-title" className="mt-2 text-xl font-bold">
          Le calcul est arrêté
        </h4>
        <p className="mt-2 text-sm leading-relaxed">
          Une inconnue n’est pas un zéro. Complétez-la, saisissez un zéro
          réellement établi ou marquez la famille non applicable.
        </p>
        <ul className="mt-4 space-y-2 pl-5 text-sm leading-relaxed">
          {result.reasons.map((reason) => (
            <li key={reason}>{reason}</li>
          ))}
        </ul>
      </section>
    );
  }

  const delayedResult =
    inputs.horizonMonths !== null &&
    inputs.goLiveMonth !== null &&
    inputs.goLiveMonth < inputs.horizonMonths
      ? calculateApplicationRoi({
          ...inputs,
          goLiveMonth: inputs.goLiveMonth + 1,
        })
      : null;
  const delayImpact =
    delayedResult?.status === "OK"
      ? netEconomicValue(result) - netEconomicValue(delayedResult)
      : null;
  const cashNetGain = result.cashBenefits - result.cashTco;
  const economicNetGain = result.economicBenefits - result.economicTco;
  const milestones = Array.from(
    new Set(
      [
        0,
        inputs.goLiveMonth,
        result.firstEconomicCrossingMonth,
        result.durableEconomicPaybackMonth,
        inputs.horizonMonths,
      ].filter((month): month is number => month !== null),
    ),
  )
    .sort((a, b) => a - b)
    .map((month) => result.monthlyFlows[month])
    .filter(Boolean);

  return (
    <section
      aria-labelledby="roi-result-title"
      className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-700 dark:bg-zinc-950 sm:p-6"
    >
      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-700 dark:text-indigo-300">
        Résultat du scénario courant
      </p>
      <h4
        id="roi-result-title"
        className="mt-2 text-xl font-bold text-zinc-950 dark:text-white"
      >
        Trésorerie et valeur économique donnent deux résultats
      </h4>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {[
          ["TCO de trésorerie", formatMoney(result.cashTco)],
          ["TCO économique", formatMoney(result.economicTco)],
          ["Gain net de trésorerie", formatMoney(cashNetGain)],
          ["Gain net économique", formatMoney(economicNetGain)],
          ["ROI de trésorerie", formatPercentage(result.cashRoiPct.value)],
          ["ROI économique", formatPercentage(result.economicRoiPct.value)],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-zinc-500 dark:text-zinc-400">
              {label}
            </p>
            <p className="mt-1.5 text-xl font-bold tabular-nums text-zinc-950 dark:text-white">
              {value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {[
          ["Décaissements évités", result.cashBenefits],
          ["Capacité utile", result.usefulCapacityBenefits],
          ["Qualitatif", null],
        ].map(([label, value]) => (
          <div
            key={label as string}
            className="rounded-xl border border-zinc-200 p-3.5 dark:border-zinc-800"
          >
            <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-100">
              {label}
            </p>
            <p className="mt-1 text-sm font-bold tabular-nums text-zinc-950 dark:text-white">
              {typeof value === "number" ? formatMoney(value) : "Hors du ROI"}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
          <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-100">
            Retour durable de trésorerie
          </p>
          <p className="mt-1 text-sm font-bold text-zinc-950 dark:text-white">
            {paybackLabel(
              result.cashPaybackStatus,
              result.durableCashPaybackMonth,
            )}
          </p>
        </div>
        <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
          <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-100">
            Retour économique durable
          </p>
          <p className="mt-1 text-sm font-bold text-zinc-950 dark:text-white">
            {paybackLabel(
              result.economicPaybackStatus,
              result.durableEconomicPaybackMonth,
            )}
          </p>
          {result.firstEconomicCrossingMonth !== null &&
          result.firstEconomicCrossingMonth !==
            result.durableEconomicPaybackMonth ? (
            <p className="mt-1 text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-400">
              Premier croisement au mois {result.firstEconomicCrossingMonth},
              puis le cumul redevient négatif.
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-indigo-200 bg-indigo-50/70 p-4 text-indigo-950 dark:border-indigo-900 dark:bg-indigo-950/30 dark:text-indigo-100">
        <p className="text-xs font-semibold">Lecture du résultat</p>
        <p className="mt-1 text-sm leading-relaxed">
          {interpretApplicationRoiResult(result)}
        </p>
      </div>

      <div className="mt-5 rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
        <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-100">
          Sensibilité à un mois de mise en service plus tard
        </p>
        <p className="mt-1 text-lg font-bold tabular-nums text-zinc-950 dark:text-white">
          {delayImpact === null
            ? "Non calculable dans cet horizon"
            : delayImpact >= 0
              ? `${formatMoney(delayImpact)} de valeur économique nette non capturée sur l’horizon`
              : `${formatMoney(Math.abs(delayImpact))} de valeur économique nette supplémentaire dans cette simulation`}
        </p>
        <p className="mt-1 text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-400">
          Cette sensibilité décale les bénéfices, le coût de mise en service et
          les coûts mensuels actifs. Les coûts saisis au mois 0, à un mois
          précis, sur une plage datée ou en sortie restent fixes. Ce n’est donc
          pas un « coût universel du retard ».
        </p>
      </div>

      <details className="mt-5 rounded-xl border border-zinc-200 dark:border-zinc-800">
        <summary className="min-h-12 cursor-pointer px-4 py-3 text-sm font-semibold text-zinc-900 dark:text-white">
          Voir les flux aux mois décisifs
        </summary>
        <div
          role="region"
          aria-label="Flux cumulés aux mois décisifs"
          tabIndex={0}
          className="overflow-x-auto border-t border-zinc-200 dark:border-zinc-800"
        >
          <table className="min-w-[560px] w-full border-collapse text-xs">
            <caption className="sr-only">
              Coûts, bénéfices et cumuls aux mois décisifs
            </caption>
            <thead className="bg-zinc-50 dark:bg-zinc-900">
              <tr>
                {[
                  "Mois",
                  "Coût économique",
                  "Bénéfice économique",
                  "Cumul de trésorerie",
                  "Cumul économique",
                ].map((header) => (
                  <th
                    key={header}
                    scope="col"
                    className="border-b border-zinc-200 p-3 text-left font-semibold dark:border-zinc-800"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {milestones.map((flow) => (
                <tr key={flow.month}>
                  <th
                    scope="row"
                    className="border-b border-zinc-200 p-3 text-left font-semibold dark:border-zinc-800"
                  >
                    {flow.month}
                  </th>
                  <td className="border-b border-zinc-200 p-3 tabular-nums dark:border-zinc-800">
                    {formatMoney(flow.economicCosts)}
                  </td>
                  <td className="border-b border-zinc-200 p-3 tabular-nums dark:border-zinc-800">
                    {formatMoney(flow.economicBenefits)}
                  </td>
                  <td className="border-b border-zinc-200 p-3 tabular-nums dark:border-zinc-800">
                    {formatMoney(flow.cumulativeCash)}
                  </td>
                  <td className="border-b border-zinc-200 p-3 tabular-nums dark:border-zinc-800">
                    {formatMoney(flow.cumulativeEconomic)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>

      <ScenarioComparison baseInputs={baseInputs} />
    </section>
  );
}

export function ApplicationRoiCalculator({
  initialInputs,
}: {
  initialInputs?: ApplicationRoiInputs;
} = {}) {
  const baseInputs = useMemo(
    () => cloneInputs(initialInputs ?? createInitialApplicationRoiInputs()),
    [initialInputs],
  );
  const [inputs, setInputs] = useState<ApplicationRoiInputs>(() =>
    applyApplicationRoiScenario(baseInputs, "central"),
  );
  const [scenario, setScenario] = useState<ScenarioKey>("central");
  const result = useMemo(() => calculateApplicationRoi(inputs), [inputs]);

  const updateNumber = (key: NumericInputKey, value: string) => {
    setInputs((current) => ({
      ...current,
      [key]: parseNullableNumber(value),
    }));
    setScenario("personnalise");
  };

  const applyScenario = (key: Exclude<ScenarioKey, "personnalise">) => {
    setInputs(applyApplicationRoiScenario(baseInputs, key));
    setScenario(key);
  };

  const updateCost = (id: string, next: ApplicationRoiCostItem) => {
    setInputs((current) => ({
      ...current,
      costs: current.costs.map((cost) => (cost.id === id ? next : cost)),
    }));
    setScenario("personnalise");
  };

  const reset = () => {
    setInputs(applyApplicationRoiScenario(baseInputs, "central"));
    setScenario("central");
  };

  const liveAnnouncement =
    result.status === "STOP"
      ? `Calcul arrêté. ${result.reasons[0] ?? "Une donnée doit être complétée."}`
      : `Calcul disponible. Gain net de trésorerie ${formatMoney(
          result.cashBenefits - result.cashTco,
        )}. Gain net économique ${formatMoney(
          result.economicBenefits - result.economicTco,
        )}.`;

  return (
    <div className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/60">
      <div className="border-b border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-700 dark:text-indigo-300">
          Calcul local · aucune donnée envoyée
        </p>
        <h3 className="mt-2 text-xl font-bold tracking-tight text-zinc-950 dark:text-white">
          Recalculer le ROI sans transformer une inconnue en zéro
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          Les valeurs de départ appartiennent au cas fictif du guide. Trois
          postes à 0 € — sécurité, évolutions et double exploitation — sont des
          hypothèses explicites, pas des coûts usuels. Passez-les à « à
          chiffrer » si vous ne les avez pas étudiés : le calcul s’arrêtera.
        </p>
      </div>

      <div className="space-y-7 p-5 sm:p-6">
        <fieldset>
          <legend className="text-sm font-bold text-zinc-950 dark:text-white">
            1. Calendrier commun
          </legend>
          <p className="mt-1 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
            Le mois 0 est la décision. Les bénéfices commencent au mois de mise
            en service, avec une rampe de réalisation éventuelle.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <NumberField
              id="roi-horizon"
              label="Horizon"
              help="De 1 à 48 mois."
              value={inputs.horizonMonths}
              suffix="mois"
              min={1}
              max={48}
              onChange={(value) => updateNumber("horizonMonths", value)}
            />
            <NumberField
              id="roi-go-live"
              label="Mise en service"
              help="Premier mois produisant un effet."
              value={inputs.goLiveMonth}
              suffix="mois"
              min={1}
              max={inputs.horizonMonths ?? undefined}
              onChange={(value) => updateNumber("goLiveMonth", value)}
            />
            <NumberField
              id="roi-ramp"
              label="Rampe de réalisation des gains"
              help="0 = effet plein dès la mise en service ; l’adoption reste un facteur séparé."
              value={inputs.rampMonths}
              suffix="mois"
              min={0}
              max={inputs.horizonMonths ?? undefined}
              onChange={(value) => updateNumber("rampMonths", value)}
            />
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-bold text-zinc-950 dark:text-white">
            2. Travail, adoption et bénéfices
          </legend>
          <p className="mt-1 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
            La trésorerie et la capacité utile sont deux destinations
            exclusives des mêmes heures. Le qualitatif reste hors du ratio.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <NumberField
              id="roi-hours"
              label="Heures annuelles observées"
              help="Mesurez un cycle représentatif."
              value={inputs.annualHoursOnTask}
              suffix="h"
              min={0}
              step={0.1}
              onChange={(value) => updateNumber("annualHoursOnTask", value)}
            />
            <NumberField
              id="roi-removable"
              label="Part des heures techniquement supprimables"
              help="Avant de tenir compte de l’adoption et de l’usage du temps libéré."
              value={inputs.technicallyRemovablePct}
              suffix="%"
              min={0}
              max={100}
              step={0.1}
              onChange={(value) =>
                updateNumber("technicallyRemovablePct", value)
              }
            />
            <NumberField
              id="roi-adoption"
              label="Adoption moyenne"
              help="Usage réellement observé ou hypothèse à tester."
              value={inputs.adoptionPct}
              suffix="%"
              min={0}
              max={100}
              step={0.1}
              onChange={(value) => updateNumber("adoptionPct", value)}
            />
            <NumberField
              id="roi-labor-cash-share"
              label="Part des heures supprimant une dépense réelle"
              help="Prestation, heures supplémentaires ou recrutement réellement évité."
              value={inputs.laborCashRemovalPct}
              suffix="%"
              min={0}
              max={100}
              step={0.1}
              onChange={(value) =>
                updateNumber("laborCashRemovalPct", value)
              }
            />
            <NumberField
              id="roi-reallocation"
              label="Heures réaffectées à un travail utile"
              help="Destination nommée et suivie."
              value={inputs.usefulReallocationPct}
              suffix="%"
              min={0}
              max={100}
              step={0.1}
              onChange={(value) =>
                updateNumber("usefulReallocationPct", value)
              }
            />
            <NumberField
              id="roi-cash-hour"
              label="Dépense supprimable par heure"
              help="Pas le coût chargé du salarié si son salaire reste payé."
              value={inputs.avoidableCashHourlyOutlay}
              suffix="€"
              min={0}
              step={0.01}
              onChange={(value) =>
                updateNumber("avoidableCashHourlyOutlay", value)
              }
            />
            <NumberField
              id="roi-economic-hour"
              label="Valeur économique d’une heure utile"
              help="Hypothèse justifiée, distincte de la trésorerie."
              value={inputs.economicHourlyValue}
              suffix="€"
              min={0}
              step={0.01}
              onChange={(value) =>
                updateNumber("economicHourlyValue", value)
              }
            />
            <NumberField
              id="roi-avoidable-cash"
              label="Autres décaissements évitables par an"
              help="Erreurs, prestataires ou achats réellement attribuables."
              value={inputs.annualAvoidableCashCost}
              suffix="€"
              min={0}
              step={0.01}
              onChange={(value) =>
                updateNumber("annualAvoidableCashCost", value)
              }
            />
            <NumberField
              id="roi-cash-realization"
              label="Part de ces dépenses réellement supprimée"
              help="Ne saisissez pas 100 % sans preuve."
              value={inputs.cashAvoidanceRealizationPct}
              suffix="%"
              min={0}
              max={100}
              step={0.1}
              onChange={(value) =>
                updateNumber("cashAvoidanceRealizationPct", value)
              }
            />
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs font-semibold text-zinc-700 dark:text-zinc-200">
              Appliquer au cas fictif :
            </span>
            {(
              Object.keys(scenarioPresets) as Exclude<
                ScenarioKey,
                "personnalise"
              >[]
            ).map((key) => (
              <button
                key={key}
                type="button"
                aria-pressed={scenario === key}
                onClick={() => applyScenario(key)}
                className={`min-h-11 rounded-full border px-4 py-2 text-xs font-semibold transition ${
                  scenario === key
                    ? "border-indigo-600 bg-indigo-600 text-white"
                    : "border-zinc-300 bg-white text-zinc-700 hover:border-indigo-400 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200"
                }`}
              >
                {scenarioPresets[key].label}
              </button>
            ))}
            {scenario === "personnalise" ? (
              <span className="rounded-full bg-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                Personnalisé
              </span>
            ) : null}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-bold text-zinc-950 dark:text-white">
            3. Coût total de possession
          </legend>
          <p className="mt-1 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
            Ouvrez chaque ligne pour changer son état, son montant, sa nature
            ou sa date. Les douze familles obligatoires sont couvertes par dix
            lignes, dont deux enveloppes communes.
          </p>
          <div className="mt-4 space-y-2">
            {inputs.costs.map((cost) => (
              <CostEditor
                key={cost.id}
                cost={cost}
                horizon={inputs.horizonMonths}
                onChange={(next) => updateCost(cost.id, next)}
              />
            ))}
          </div>
        </fieldset>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={reset}
            className="min-h-11 rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200"
          >
            Réinitialiser le scénario central
          </button>
        </div>

        <p
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        >
          {liveAnnouncement}
        </p>

        <ResultPanel baseInputs={baseInputs} inputs={inputs} result={result} />

        <p className="mb-0 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
          Ce calcul est un outil pédagogique. Il n’intègre ni actualisation,
          fiscalité, financement, inflation ni risques non chiffrés. Pour un
          investissement important ou long, faites contrôler les flux datés et
          la méthode par votre direction financière ou votre conseil.
        </p>
      </div>
    </div>
  );
}
