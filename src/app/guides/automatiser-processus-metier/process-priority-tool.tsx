"use client";

import { useMemo, useState } from "react";

export interface ProcessPriorityInputs {
  casesPerMonth: number;
  minutesPerCase: number;
  loadedHourlyCost: number;
  automationRate: number;
  adoptionRate: number;
  redeploymentRate: number;
  setupCost: number;
  internalSetupHours: number;
  additionalKnownCosts: number;
  monthlyRunCost: number;
  horizonMonths: number;
  measurableOutcome: boolean;
  stableRules: boolean;
  reliableData: boolean;
  recoverableFailure: boolean;
  namedOwner: boolean;
}

export interface ProcessPriorityResult {
  baselineHours: number;
  technicallyRemovableHours: number;
  actuallyFreedHours: number;
  reassignableHours: number;
  capacityValue: number;
  initialCost: number;
  totalCost: number;
  netValue: number;
  roiPercent: number | null;
  breakEvenMonths: number | null;
  failedGates: string[];
  decision: "blocked" | "unfavorable" | "pilot";
}

const GATE_LABELS = {
  measurableOutcome: "résultat mesurable",
  stableRules: "règles et exceptions décrites",
  reliableData: "source des données fiable et droits d’accès compris",
  recoverableFailure: "erreur détectable et reprise manuelle possible",
  namedOwner: "responsable nommé et validation humaine prévue si nécessaire",
} as const;

function finiteOrZero(value: number): number {
  return Number.isFinite(value) ? Math.max(0, value) : 0;
}

function percentage(value: number): number {
  return Math.min(100, finiteOrZero(value)) / 100;
}

export function calculateProcessPriority(
  raw: ProcessPriorityInputs,
): ProcessPriorityResult {
  const casesPerMonth = finiteOrZero(raw.casesPerMonth);
  const minutesPerCase = finiteOrZero(raw.minutesPerCase);
  const loadedHourlyCost = finiteOrZero(raw.loadedHourlyCost);
  const setupCost = finiteOrZero(raw.setupCost);
  const internalSetupHours = finiteOrZero(raw.internalSetupHours);
  const additionalKnownCosts = finiteOrZero(raw.additionalKnownCosts);
  const monthlyRunCost = finiteOrZero(raw.monthlyRunCost);
  const horizonMonths = Math.max(1, finiteOrZero(raw.horizonMonths));

  const automationRate = percentage(raw.automationRate);
  const adoptionRate = percentage(raw.adoptionRate);
  const redeploymentRate = percentage(raw.redeploymentRate);

  const baselineHours =
    (casesPerMonth * minutesPerCase * horizonMonths) / 60;
  const technicallyRemovableHours = baselineHours * automationRate;
  const actuallyFreedHours = technicallyRemovableHours * adoptionRate;
  const reassignableHours = actuallyFreedHours * redeploymentRate;
  const capacityValue = reassignableHours * loadedHourlyCost;
  const initialCost =
    setupCost +
    internalSetupHours * loadedHourlyCost +
    additionalKnownCosts;
  const totalCost = initialCost + monthlyRunCost * horizonMonths;
  const netValue = capacityValue - totalCost;
  const roiPercent =
    totalCost > 0 ? (netValue / totalCost) * 100 : null;

  const monthlyCapacityValue = capacityValue / horizonMonths;
  const monthlyContribution = monthlyCapacityValue - monthlyRunCost;
  const breakEvenMonths =
    initialCost > 0 && monthlyContribution > 0
      ? initialCost / monthlyContribution
      : initialCost === 0 && monthlyContribution > 0
        ? 0
        : null;

  const failedGates = (
    Object.keys(GATE_LABELS) as (keyof typeof GATE_LABELS)[]
  )
    .filter((key) => !raw[key])
    .map((key) => GATE_LABELS[key]);

  const decision =
    failedGates.length > 0
      ? "blocked"
      : netValue <= 0
        ? "unfavorable"
        : "pilot";

  return {
    baselineHours,
    technicallyRemovableHours,
    actuallyFreedHours,
    reassignableHours,
    capacityValue,
    initialCost,
    totalCost,
    netValue,
    roiPercent,
    breakEvenMonths,
    failedGates,
    decision,
  };
}

const INITIAL_INPUTS: ProcessPriorityInputs = {
  casesPerMonth: 120,
  minutesPerCase: 9,
  loadedHourlyCost: 38,
  automationRate: 70,
  adoptionRate: 80,
  redeploymentRate: 60,
  setupCost: 4_800,
  internalSetupHours: 32,
  additionalKnownCosts: 0,
  monthlyRunCost: 140,
  horizonMonths: 24,
  measurableOutcome: false,
  stableRules: false,
  reliableData: false,
  recoverableFailure: false,
  namedOwner: false,
};

const numberFormatter = new Intl.NumberFormat("fr-FR", {
  maximumFractionDigits: 1,
});

const euroFormatter = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

interface NumberFieldProps {
  id: keyof ProcessPriorityInputs;
  label: string;
  value: number;
  suffix?: string;
  min?: number;
  max?: number;
  step?: number;
  onChange: (key: keyof ProcessPriorityInputs, value: number) => void;
}

function NumberField({
  id,
  label,
  value,
  suffix,
  min = 0,
  max,
  step = 1,
  onChange,
}: NumberFieldProps) {
  return (
    <label
      htmlFor={id}
      className="block rounded-xl border border-zinc-200 bg-white p-3.5 dark:border-zinc-700 dark:bg-zinc-950"
    >
      <span className="block text-xs font-semibold leading-snug text-zinc-700 dark:text-zinc-200">
        {label}
      </span>
      <span className="mt-2 flex items-center gap-2">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(event) => onChange(id, Number(event.target.value))}
          className="min-w-0 flex-1 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-base sm:text-sm tabular-nums text-zinc-950 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
        />
        {suffix ? (
          <span className="shrink-0 text-xs text-zinc-500 dark:text-zinc-400">
            {suffix}
          </span>
        ) : null}
      </span>
    </label>
  );
}

export function ProcessPriorityTool() {
  const [inputs, setInputs] =
    useState<ProcessPriorityInputs>(INITIAL_INPUTS);
  const result = useMemo(() => calculateProcessPriority(inputs), [inputs]);

  const updateNumber = (
    key: keyof ProcessPriorityInputs,
    value: number,
  ) => {
    setInputs((current) => ({ ...current, [key]: value }));
  };

  const decisionCopy = {
    blocked: {
      label: "Pas encore prêt pour un pilote",
      detail:
        "Le calcul économique ne compense pas une porte bloquée. Corrigez les points listés avant de choisir un outil.",
      className:
        "border-amber-200 bg-amber-50 text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100",
    },
    unfavorable: {
      label: "À simplifier, reporter ou traiter autrement",
      detail:
        "Avec ces hypothèses, la valeur de capacité ne couvre pas le coût renseigné sur la période.",
      className:
        "border-zinc-300 bg-zinc-100 text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white",
    },
    pilot: {
      label: "Candidat à vérifier par un pilote limité",
      detail:
        "Le scénario renseigné est positif, mais il n’autorise aucun déploiement. Confirmez les coûts omis, l’adoption moyenne, les erreurs et la reprise, puis testez sur un petit volume.",
      className:
        "border-emerald-200 bg-emerald-50 text-emerald-950 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-100",
    },
  }[result.decision];

  return (
    <div className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/60">
      <div className="border-b border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-400">
          Outil de décision — calcul local dans votre navigateur
        </p>
        <h3 className="mt-2 text-xl font-bold tracking-tight text-zinc-950 dark:text-white">
          Tester un processus avec vos propres hypothèses
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          Les valeurs affichées au départ forment un exemple fictif. Remplacez-les
          par vos mesures. Aucune donnée n’est envoyée par cet outil.
        </p>
      </div>

      <div className="grid gap-7 p-5 sm:p-6 lg:grid-cols-[1.12fr_0.88fr]">
        <div>
          <fieldset>
            <legend className="text-sm font-bold text-zinc-950 dark:text-white">
              1. Les cinq portes qui ne se compensent pas
            </legend>
            <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              Une forte économie théorique ne rend pas acceptable un résultat
              invérifiable ou une erreur impossible à reprendre.
            </p>
            <div className="mt-3 space-y-2">
              {(
                Object.keys(GATE_LABELS) as (keyof typeof GATE_LABELS)[]
              ).map((key) => (
                <label
                  key={key}
                  className="flex min-h-11 cursor-pointer items-start gap-3 rounded-xl border border-zinc-200 bg-white px-3.5 py-3 text-sm text-zinc-700 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200"
                >
                  <input
                    type="checkbox"
                    checked={inputs[key]}
                    onChange={(event) =>
                      setInputs((current) => ({
                        ...current,
                        [key]: event.target.checked,
                      }))
                    }
                    className="mt-0.5 size-4 shrink-0 accent-indigo-600"
                  />
                  <span>{GATE_LABELS[key]}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-7">
            <legend className="text-sm font-bold text-zinc-950 dark:text-white">
              2. Le travail actuel et les heures qui pourront être réaffectées
            </legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <NumberField
                id="casesPerMonth"
                label="Cas traités par mois"
                value={inputs.casesPerMonth}
                onChange={updateNumber}
              />
              <NumberField
                id="minutesPerCase"
                label="Minutes actives par cas"
                value={inputs.minutesPerCase}
                suffix="min"
                onChange={updateNumber}
              />
              <NumberField
                id="loadedHourlyCost"
                label="Coût horaire chargé retenu"
                value={inputs.loadedHourlyCost}
                suffix="€/h"
                step={0.5}
                onChange={updateNumber}
              />
              <NumberField
                id="automationRate"
                label="Part du temps retirée par cas"
                value={inputs.automationRate}
                suffix="%"
                max={100}
                onChange={updateNumber}
              />
              <NumberField
                id="adoptionRate"
                label="Adoption moyenne sur toute la période"
                value={inputs.adoptionRate}
                suffix="%"
                max={100}
                onChange={updateNumber}
              />
              <NumberField
                id="redeploymentRate"
                label="Part affectée à un travail utile identifié"
                value={inputs.redeploymentRate}
                suffix="%"
                max={100}
                onChange={updateNumber}
              />
            </div>
          </fieldset>

          <fieldset className="mt-7">
            <legend className="text-sm font-bold text-zinc-950 dark:text-white">
              3. Le coût renseigné sur une même période
            </legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <NumberField
                id="setupCost"
                label="Conception, intégration et tests"
                value={inputs.setupCost}
                suffix="€"
                onChange={updateNumber}
              />
              <NumberField
                id="internalSetupHours"
                label="Temps interne de préparation et de test"
                value={inputs.internalSetupHours}
                suffix="h"
                onChange={updateNumber}
              />
              <NumberField
                id="additionalKnownCosts"
                label="Autres coûts ponctuels déjà chiffrés"
                value={inputs.additionalKnownCosts}
                suffix="€"
                onChange={updateNumber}
              />
              <NumberField
                id="monthlyRunCost"
                label="Abonnements, suivi et maintenance mensuels"
                value={inputs.monthlyRunCost}
                suffix="€/mois"
                onChange={updateNumber}
              />
              <NumberField
                id="horizonMonths"
                label="Période comparée"
                value={inputs.horizonMonths}
                suffix="mois"
                min={1}
                max={120}
                onChange={updateNumber}
              />
            </div>
            <p className="mt-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              Un zéro dans « autres coûts ponctuels » signifie seulement
              qu’aucun montant supplémentaire n’a été saisi.
            </p>
          </fieldset>
        </div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <div
            aria-live="polite"
            className={`rounded-2xl border p-5 ${decisionCopy.className}`}
          >
            <p className="text-xs font-bold uppercase tracking-[0.12em] opacity-70">
              Décision provisoire
            </p>
            <p className="mt-2 text-lg font-bold">{decisionCopy.label}</p>
            <p className="mt-2 text-sm leading-relaxed opacity-90">
              {decisionCopy.detail}
            </p>
            {result.failedGates.length > 0 ? (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                {result.failedGates.map((gate) => (
                  <li key={gate}>{gate}</li>
                ))}
              </ul>
            ) : null}
          </div>

          <dl className="mt-4 grid grid-cols-2 gap-3">
            {[
              {
                label: "Travail actuel",
                value: `${numberFormatter.format(result.baselineHours)} h`,
              },
              {
                label: "Heures retirables",
                value: `${numberFormatter.format(result.technicallyRemovableHours)} h`,
              },
              {
                label: "Heures après adoption",
                value: `${numberFormatter.format(result.actuallyFreedHours)} h`,
              },
              {
                label: "Heures réaffectées",
                value: `${numberFormatter.format(result.reassignableHours)} h`,
              },
              {
                label: "Valeur de capacité",
                value: euroFormatter.format(result.capacityValue),
              },
              {
                label: "Coût renseigné",
                value: euroFormatter.format(result.totalCost),
              },
              {
                label: "Écart sur la période",
                value: euroFormatter.format(result.netValue),
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-zinc-200 bg-white p-3.5 dark:border-zinc-700 dark:bg-zinc-950"
              >
                <dt className="text-[10px] font-bold uppercase tracking-[0.1em] text-zinc-500 dark:text-zinc-400">
                  {item.label}
                </dt>
                <dd className="mt-1 text-base font-bold tabular-nums text-zinc-950 dark:text-white">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-4 rounded-xl border border-zinc-200 bg-white p-4 text-sm leading-relaxed text-zinc-700 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200">
            <p>
              <strong>ROI du scénario de capacité :</strong>{" "}
              {result.roiPercent === null
                ? "non calculable lorsque le coût est nul"
                : `${numberFormatter.format(result.roiPercent)} %`}
            </p>
            <p className="mt-1">
              <strong>Délai théorique de récupération du coût initial :</strong>{" "}
              {result.breakEvenMonths === null
                ? "non atteint avec ces hypothèses"
                : result.breakEvenMonths === 0
                  ? "immédiat dans ce modèle sans coût initial"
                  : `${numberFormatter.format(result.breakEvenMonths)} mois${
                      result.breakEvenMonths > inputs.horizonMonths
                        ? " — au-delà de la période comparée"
                        : ""
                    }`}
            </p>
          </div>

          <details className="mt-4 rounded-xl border border-zinc-200 bg-white p-4 text-xs leading-relaxed text-zinc-600 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300">
            <summary className="cursor-pointer font-semibold text-zinc-900 dark:text-white">
              Voir les formules et les limites
            </summary>
            <div className="mt-3 space-y-2">
              <p>
                Heures actuelles = cas/mois × minutes/cas ÷ 60 × mois.
                Heures techniquement retirables = heures actuelles × part
                retirée. Heures réellement retirées = heures retirables ×
                adoption moyenne. Heures réaffectées = heures réellement
                retirées × part affectée à un travail utile identifié.
              </p>
              <p>
                Coût renseigné = conception, intégration et tests + temps interne
                × coût horaire + autres coûts ponctuels + coût mensuel × mois.
                ROI = (valeur de capacité − coût renseigné) ÷ coût renseigné.
              </p>
              <p>
                La valeur de capacité utilise le coût horaire chargé : elle ne
                prouve pas une économie de trésorerie. Une dépense n’est évitée
                que si elle disparaît réellement ; ne la comptez pas une seconde
                fois. Le délai suppose une contribution mensuelle constante dès
                le premier mois. Migration, formation, sécurité, fiscalité,
                financement, indisponibilité et sortie restent à chiffrer s’ils
                s’appliquent. Ce résultat n’est ni un devis, ni une prévision,
                ni une autorisation de déployer.
              </p>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
