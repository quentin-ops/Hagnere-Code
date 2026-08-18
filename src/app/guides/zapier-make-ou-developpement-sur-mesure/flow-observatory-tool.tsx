"use client";

import { useEffect, useMemo, useState } from "react";
import {
  MAX_SAFE_FLOW_COUNT,
  MAX_SAFE_HOURS,
  MAX_SAFE_MONEY_EUR,
  buildFlowDossier,
  candidateKindLabels,
  cloneFlowInputs,
  createEmptyFlowInputs,
  currentPlatformLabels,
  dataScopeLabels,
  decisionOutcomeLabels,
  evaluateFlow,
  failureGates,
  parseLocalizedNumber,
  type CandidateCosts,
  type CurrentCosts,
  type DataScope,
  type DecisionOutcome,
  type EvidenceState,
  type FailureGateKey,
  type FlowObservatoryInputs,
  type ObservationMetrics,
} from "./flow-observatory-engine";

export const FLOW_OBSERVATORY_STORAGE_KEY =
  "hagnere-code:guide:zapier-make-flow-observatory:v1";

const controlClassName =
  "mt-2 min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/25 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white";

const metricFields: Array<{
  key: keyof ObservationMetrics;
  label: string;
  help: string;
  integer?: boolean;
  unit?: string;
}> = [
  {
    key: "events",
    label: "Événements reçus",
    help: "Messages ou éléments arrivés pendant les 30 jours.",
    integer: true,
  },
  {
    key: "branchExecutions",
    label: "Exécutions par branche",
    help: "Addition des branches réellement parcourues, pas le nombre de scénarios dessinés.",
    integer: true,
  },
  {
    key: "billableUnits",
    label: "Actions ou unités comptées",
    help: "Valeur rapprochée de l'historique et de la facture du plan réel.",
    integer: true,
  },
  {
    key: "completeSuccesses",
    label: "Succès complets",
    help: "Événements dont tous les effets attendus sont confirmés.",
    integer: true,
  },
  {
    key: "visibleFailures",
    label: "Échecs visibles",
    help: "Échecs détectés et qualifiés, sans y cacher les succès partiels.",
    integer: true,
  },
  {
    key: "partialSuccesses",
    label: "Succès partiels",
    help: "Au moins un effet réussi et un autre non confirmé ou échoué.",
    integer: true,
  },
  {
    key: "automaticRetries",
    label: "Reprises automatiques",
    help: "Nouveaux essais lancés sans intervention humaine.",
    integer: true,
  },
  {
    key: "manualRetries",
    label: "Reprises manuelles",
    help: "Nouveaux essais déclenchés après diagnostic humain.",
    integer: true,
  },
  {
    key: "duplicates",
    label: "Doublons ou effets à annuler",
    help: "Effets métier reproduits, même si l'exécution technique paraît réussie.",
    integer: true,
  },
  {
    key: "observationHours",
    label: "Heures d'observation",
    help: "Surveillance active et qualification du flux.",
    unit: "h",
  },
  {
    key: "correctionHours",
    label: "Heures de correction",
    help: "Réparation des données, règles ou connexions.",
    unit: "h",
  },
  {
    key: "reconciliationHours",
    label: "Heures de réconciliation",
    help: "Rapprochement des états entre les logiciels.",
    unit: "h",
  },
  {
    key: "includedContractHours",
    label: "Heures déjà incluses",
    help: "Part des heures ci-dessus déjà comprise dans un contrat facturé ailleurs.",
    unit: "h",
  },
];

const currentCostFields: Array<{
  key: keyof CurrentCosts;
  label: string;
  help: string;
}> = [
  {
    key: "subscriptionMonthly",
    label: "Abonnement attribué / mois (€)",
    help: "Part de l'abonnement réellement attribuable à ce flux.",
  },
  {
    key: "overagesMonthly",
    label: "Dépassements / mois (€)",
    help: "Dépassements ou achats de capacité rapprochés de la facture.",
  },
  {
    key: "optionsMonthly",
    label: "Options / mois (€)",
    help: "Fonctions, historique ou sécurité payés pour ce périmètre.",
  },
  {
    key: "externalServicesMonthly",
    label: "Services tiers / mois (€)",
    help: "API, messagerie, stockage ou autres services hors plateforme.",
  },
  {
    key: "humanHourlyCost",
    label: "Coût horaire choisi (€)",
    help: "Coût explicite appliqué aux seules heures non déjà incluses.",
  },
  {
    key: "remediationOneOff",
    label: "Remise en état initiale (€)",
    help: "Travail futur nécessaire pour sécuriser l'option courante ; pas les coûts déjà engagés.",
  },
  {
    key: "codeOperationsMonthly",
    label: "Exploitation du code / mois (€)",
    help: "Code déjà présent : hébergement, surveillance, maintenance et support.",
  },
  {
    key: "apiUpdatesAnnual",
    label: "Mises à jour d'API / an (€)",
    help: "Budget annuel explicite, zéro seulement si cette absence est défendable.",
  },
  {
    key: "incidentCostMonthly",
    label: "Incident / mois (€)",
    help: "Incident documenté ou hypothèse nommée, jamais moyenne implicite.",
  },
  {
    key: "exitCost",
    label: "Sortie à l'horizon (€)",
    help: "Export, documentation, transfert, extinction et reprise des secrets.",
  },
];

const candidateCostFields: Array<{
  key: keyof CandidateCosts;
  label: string;
  help: string;
  kind: "money" | "hours";
}> = [
  {
    key: "framingOneOff",
    label: "Cadrage initial (€)",
    help: "Règles, données, pannes, responsabilité et critères de recette.",
    kind: "money",
  },
  {
    key: "buildOneOff",
    label: "Réalisation initiale (€)",
    help: "Configuration, règle isolée ou développement de la cible.",
    kind: "money",
  },
  {
    key: "testsOneOff",
    label: "Tests initiaux (€)",
    help: "Recette nominale, sept pannes, sécurité et retour au normal.",
    kind: "money",
  },
  {
    key: "migrationOneOff",
    label: "Migration initiale (€)",
    help: "Reprise des scénarios, connexions, files, données et documentation.",
    kind: "money",
  },
  {
    key: "platformMonthly",
    label: "Plateforme / mois (€)",
    help: "Abonnement, dépassements et options de la cible.",
    kind: "money",
  },
  {
    key: "externalServicesMonthly",
    label: "Services tiers / mois (€)",
    help: "Services distincts de la plateforme et du code.",
    kind: "money",
  },
  {
    key: "humanHoursMonthly",
    label: "Heures humaines / mois",
    help: "Observation, correction et rapprochement attendus pour la cible.",
    kind: "hours",
  },
  {
    key: "humanHourlyCost",
    label: "Coût horaire candidat (€)",
    help: "Même définition que pour l'option courante.",
    kind: "money",
  },
  {
    key: "includedContractHours",
    label: "Heures déjà incluses / mois",
    help: "Part à montrer mais à ne pas facturer une seconde fois.",
    kind: "hours",
  },
  {
    key: "hostingMonthly",
    label: "Hébergement / mois (€)",
    help: "Zéro seulement si aucune ressource distincte n'est nécessaire.",
    kind: "money",
  },
  {
    key: "monitoringMonthly",
    label: "Surveillance / mois (€)",
    help: "Alertes, journaux exploitables et vérification de service.",
    kind: "money",
  },
  {
    key: "maintenanceMonthly",
    label: "Maintenance / mois (€)",
    help: "Correctifs, dépendances et changements prévisibles.",
    kind: "money",
  },
  {
    key: "supportMonthly",
    label: "Support / mois (€)",
    help: "Diagnostic, intervention, relève et communication d'incident.",
    kind: "money",
  },
  {
    key: "apiUpdatesAnnual",
    label: "Mises à jour d'API / an (€)",
    help: "Budget annuel distinct de la maintenance courante.",
    kind: "money",
  },
  {
    key: "incidentCostMonthly",
    label: "Incident / mois (€)",
    help: "Incident documenté ou hypothèse candidate explicitement nommée.",
    kind: "money",
  },
  {
    key: "exitCost",
    label: "Sortie à l'horizon (€)",
    help: "Restitution et reprise pratique de la cible.",
    kind: "money",
  },
];

function mergeStoredInputs(value: unknown): FlowObservatoryInputs | null {
  if (!value || typeof value !== "object") return null;
  const stored = value as Partial<FlowObservatoryInputs>;
  const empty = createEmptyFlowInputs();
  return {
    ...empty,
    ...stored,
    observation: { ...empty.observation, ...(stored.observation ?? {}) },
    currentCosts: { ...empty.currentCosts, ...(stored.currentCosts ?? {}) },
    candidateCosts: {
      ...empty.candidateCosts,
      ...(stored.candidateCosts ?? {}),
    },
    gates: { ...empty.gates, ...(stored.gates ?? {}) },
  } as FlowObservatoryInputs;
}

function formatNumberInput(value: number | null) {
  if (value === null || Number.isNaN(value)) return "";
  return String(value).replace(".", ",");
}

function NumericField({
  id,
  label,
  help,
  value,
  integer = false,
  max,
  onChange,
}: {
  id: string;
  label: string;
  help: string;
  value: number | null;
  integer?: boolean;
  max: number;
  onChange: (value: number | null) => void;
}) {
  const [rawValue, setRawValue] = useState(() => formatNumberInput(value));
  const invalid = Number.isNaN(value);

  useEffect(() => {
    if (!invalid) setRawValue(formatNumberInput(value));
  }, [invalid, value]);

  return (
    <div>
      <label
        htmlFor={id}
        className="text-sm font-semibold text-zinc-950 dark:text-white"
      >
        {label}
      </label>
      <input
        id={id}
        type="text"
        inputMode={integer ? "numeric" : "decimal"}
        value={rawValue}
        onChange={(event) => {
          const raw = event.target.value;
          setRawValue(raw);
          const parsed = parseLocalizedNumber(raw);
          if (parsed.state === "unknown") onChange(null);
          else if (
            parsed.state === "invalid" ||
            (integer && !Number.isSafeInteger(parsed.value)) ||
            (parsed.value ?? 0) > max
          )
            onChange(Number.NaN);
          else onChange(parsed.value);
        }}
        className={controlClassName}
        aria-describedby={`${id}-help${invalid ? ` ${id}-error` : ""}`}
        aria-invalid={invalid || undefined}
      />
      <p
        id={`${id}-help`}
        className="mt-1.5 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400"
      >
        {help} Zéro est admis ; vide signifie inconnu.
      </p>
      {invalid ? (
        <p id={`${id}-error`} className="mt-1 text-xs font-semibold text-red-700 dark:text-red-300">
          Valeur invalide. Utilisez un nombre positif ou nul, avec au plus deux décimales.
        </p>
      ) : null}
    </div>
  );
}

function formatCurrency(value: number | null) {
  if (value === null) return "INCONNU";
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 2,
  }).format(value);
}

function CostSummary({
  title,
  cost,
}: {
  title: string;
  cost: ReturnType<typeof evaluateFlow>["currentCost"] | null;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
      <h5 className="text-sm font-bold text-zinc-950 dark:text-white">{title}</h5>
      <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div>
          <dt className="text-zinc-500 dark:text-zinc-400">12 mois</dt>
          <dd className="mt-1 font-bold text-zinc-950 dark:text-white">
            {formatCurrency(cost?.total12Months ?? null)}
          </dd>
        </div>
        <div>
          <dt className="text-zinc-500 dark:text-zinc-400">36 mois</dt>
          <dd className="mt-1 font-bold text-zinc-950 dark:text-white">
            {formatCurrency(cost?.total36Months ?? null)}
          </dd>
        </div>
        <div>
          <dt className="text-zinc-500 dark:text-zinc-400">Humain / mois</dt>
          <dd className="mt-1 font-semibold text-zinc-950 dark:text-white">
            {formatCurrency(cost?.humanMonthly ?? null)}
          </dd>
        </div>
        <div>
          <dt className="text-zinc-500 dark:text-zinc-400">Code / mois</dt>
          <dd className="mt-1 font-semibold text-zinc-950 dark:text-white">
            {formatCurrency(cost?.codeOperationsMonthly ?? null)}
          </dd>
        </div>
      </dl>
      {cost?.interval12Months && cost.interval36Months ? (
        <p className="mt-4 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
          Intervalle saisi : {formatCurrency(cost.interval12Months[0])} à {formatCurrency(cost.interval12Months[1])} sur 12 mois ; {formatCurrency(cost.interval36Months[0])} à {formatCurrency(cost.interval36Months[1])} sur 36 mois.
        </p>
      ) : null}
    </div>
  );
}

export interface FlowObservatoryToolProps {
  initialInputs?: FlowObservatoryInputs;
}

export function FlowObservatoryTool({
  initialInputs,
}: FlowObservatoryToolProps = {}) {
  const [inputs, setInputs] = useState(() =>
    cloneFlowInputs(initialInputs ?? createEmptyFlowInputs()),
  );
  const [storageReady, setStorageReady] = useState(Boolean(initialInputs));
  const [liveMessage, setLiveMessage] = useState("");
  const result = useMemo(() => evaluateFlow(inputs), [inputs]);
  const dossier = useMemo(
    () => buildFlowDossier(inputs, result),
    [inputs, result],
  );

  useEffect(() => {
    if (initialInputs) return;
    try {
      const raw = window.localStorage.getItem(FLOW_OBSERVATORY_STORAGE_KEY);
      if (raw) {
        const restored = mergeStoredInputs(JSON.parse(raw));
        if (restored) setInputs(restored);
      }
    } catch {
      window.localStorage.removeItem(FLOW_OBSERVATORY_STORAGE_KEY);
      setLiveMessage(
        "Le dossier local était illisible : il a été écarté. Aucun envoi n'a eu lieu.",
      );
    } finally {
      setStorageReady(true);
    }
  }, [initialInputs]);

  useEffect(() => {
    if (!storageReady || initialInputs) return;
    try {
      window.localStorage.setItem(
        FLOW_OBSERVATORY_STORAGE_KEY,
        JSON.stringify(inputs),
      );
    } catch {
      setLiveMessage(
        "Le navigateur n'a pas pu enregistrer ce dossier localement. Vous pouvez encore le copier.",
      );
    }
  }, [initialInputs, inputs, storageReady]);

  function updateObservation<K extends keyof ObservationMetrics>(
    key: K,
    value: ObservationMetrics[K],
  ) {
    setInputs((current) => ({
      ...current,
      observation: { ...current.observation, [key]: value },
    }));
  }

  function updateCurrentCost<K extends keyof CurrentCosts>(
    key: K,
    value: CurrentCosts[K],
  ) {
    setInputs((current) => ({
      ...current,
      currentCosts: { ...current.currentCosts, [key]: value },
    }));
  }

  function updateCandidateCost<K extends keyof CandidateCosts>(
    key: K,
    value: CandidateCosts[K],
  ) {
    setInputs((current) => ({
      ...current,
      candidateCosts: { ...current.candidateCosts, [key]: value },
    }));
  }

  function updateGate(key: FailureGateKey, state: EvidenceState) {
    setInputs((current) => ({
      ...current,
      gates: { ...current.gates, [key]: state },
    }));
  }

  async function copyDossier() {
    try {
      await navigator.clipboard.writeText(dossier);
      setLiveMessage("Dossier texte copié dans le presse-papiers.");
    } catch {
      setLiveMessage(
        "Copie impossible dans ce navigateur. Le dossier texte reste sélectionnable ci-dessous.",
      );
    }
  }

  function clearLocalDossier() {
    window.localStorage.removeItem(FLOW_OBSERVATORY_STORAGE_KEY);
    setInputs(createEmptyFlowInputs());
    setLiveMessage("Dossier local effacé de ce navigateur.");
  }

  return (
    <section
      className="not-prose my-9 overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
      aria-label="Observatoire local d'un flux Zapier, Make ou sur mesure"
      data-flow-observatory="true"
      data-read-time-exclude="true"
    >
      <style>{`
        @page { size: A4; margin: 10mm; }
        @media print {
          [data-flow-observatory="true"] details > * { display: block !important; }
          [data-flow-observatory="true"] [data-flow-dossier="true"] {
            max-height: none !important;
            overflow: visible !important;
            white-space: pre-wrap !important;
          }
          [data-flow-observatory="true"] button { display: none !important; }
        }
      `}</style>

      <header className="border-b border-zinc-200 bg-white px-5 py-6 dark:border-zinc-800 dark:bg-zinc-950 sm:px-7">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-300">
          Observatoire local · aucune donnée envoyée
        </p>
        <h3 className="mt-2 text-xl font-bold text-zinc-950 dark:text-white sm:text-2xl">
          Mesurer un flux pendant 30 jours avant de le reconstruire
        </h3>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          Les valeurs restent dans le stockage local de ce navigateur et peuvent être effacées ici. L'outil n'appelle aucun service réseau. Zéro est une mesure ; une case vide reste inconnue. Les calculs comparent des coûts, jamais la fiabilité, la conformité ou la décision à votre place.
        </p>
      </header>

      <div className="space-y-6 px-5 py-6 sm:px-7 sm:py-8">
        <details open className="group rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
          <summary className="cursor-pointer text-base font-bold text-zinc-950 dark:text-white">
            1. Nommer le flux et les responsabilités
          </summary>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="flow-current-platform" className="text-sm font-semibold text-zinc-950 dark:text-white">
                Situation actuelle
              </label>
              <select
                id="flow-current-platform"
                value={inputs.currentPlatform}
                onChange={(event) =>
                  setInputs((current) => ({
                    ...current,
                    currentPlatform: event.target.value as FlowObservatoryInputs["currentPlatform"],
                  }))
                }
                className={controlClassName}
              >
                {Object.entries(currentPlatformLabels).map(([value, label]) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="flow-data-scope" className="text-sm font-semibold text-zinc-950 dark:text-white">
                Données qui transitent
              </label>
              <select
                id="flow-data-scope"
                value={inputs.dataScope}
                onChange={(event) =>
                  setInputs((current) => ({
                    ...current,
                    dataScope: event.target.value as DataScope,
                  }))
                }
                className={controlClassName}
              >
                {Object.entries(dataScopeLabels).map(([value, label]) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
            </div>
            {[
              ["flow-source-of-truth", "Source de vérité", "Ex. le CRM fait foi pour le statut du dossier.", "sourceOfTruth"],
              ["flow-owner", "Propriétaire", "Personne qui tranche les règles et accepte la reprise.", "owner"],
              ["flow-substitute", "Remplaçant", "Personne capable d'agir quand le propriétaire est absent.", "substitute"],
            ].map(([id, label, help, key]) => (
              <div key={id}>
                <label htmlFor={id} className="text-sm font-semibold text-zinc-950 dark:text-white">{label}</label>
                <input
                  id={id}
                  type="text"
                  value={inputs[key as "sourceOfTruth" | "owner" | "substitute"]}
                  onChange={(event) =>
                    setInputs((current) => ({ ...current, [key]: event.target.value }))
                  }
                  className={controlClassName}
                  aria-describedby={`${id}-help`}
                />
                <p id={`${id}-help`} className="mt-1.5 text-xs text-zinc-500 dark:text-zinc-400">{help}</p>
              </div>
            ))}
            <NumericField
              id="flow-maximum-delay"
              label="Délai maximal acceptable (minutes)"
              help="Délai métier, pas promesse de fournisseur."
              value={inputs.maximumAcceptableDelayMinutes}
              integer
              max={MAX_SAFE_FLOW_COUNT}
              onChange={(value) => setInputs((current) => ({ ...current, maximumAcceptableDelayMinutes: value }))}
            />
          </div>
        </details>

        <details open className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
          <summary className="cursor-pointer text-base font-bold text-zinc-950 dark:text-white">
            2. Relever 30 jours sans mélanger les unités
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            Un événement peut parcourir plusieurs branches et consommer plusieurs unités. Un succès partiel n'est ni un succès complet ni un échec sans effet.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {metricFields.map((field) => (
              <NumericField
                key={field.key}
                id={`flow-observation-${field.key}`}
                label={field.label}
                help={field.help}
                value={inputs.observation[field.key]}
                integer={field.integer}
                max={field.integer ? MAX_SAFE_FLOW_COUNT : MAX_SAFE_HOURS}
                onChange={(value) => updateObservation(field.key, value)}
              />
            ))}
          </div>
        </details>

        <details className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
          <summary className="cursor-pointer text-base font-bold text-zinc-950 dark:text-white">
            3. Chiffrer le maintien sur le même horizon
          </summary>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {currentCostFields.map((field) => (
              <NumericField
                key={field.key}
                id={`flow-current-cost-${field.key}`}
                label={field.label}
                help={field.help}
                value={inputs.currentCosts[field.key] as number | null}
                max={MAX_SAFE_MONEY_EUR}
                onChange={(value) => updateCurrentCost(field.key, value)}
              />
            ))}
            <div className="sm:col-span-2 xl:col-span-3">
              <label htmlFor="flow-current-incident-basis" className="text-sm font-semibold text-zinc-950 dark:text-white">
                Base du coût d'incident
              </label>
              <input
                id="flow-current-incident-basis"
                type="text"
                value={inputs.currentCosts.incidentBasis}
                onChange={(event) => updateCurrentCost("incidentBasis", event.target.value)}
                className={controlClassName}
                aria-describedby="flow-current-incident-basis-help"
              />
              <p id="flow-current-incident-basis-help" className="mt-1.5 text-xs text-zinc-500 dark:text-zinc-400">
                Nommez l'incident documenté ou l'hypothèse. Même un coût nul exige une base explicite.
              </p>
            </div>
            <NumericField
              id="flow-uncertainty"
              label="Marge d'incertitude (%)"
              help="De 0 à 100. Elle forme un intervalle, pas une probabilité."
              value={inputs.uncertaintyPercent}
              max={100}
              onChange={(value) => setInputs((current) => ({ ...current, uncertaintyPercent: value }))}
            />
          </div>
        </details>

        <details open className="rounded-2xl border border-amber-300 bg-amber-50/70 p-5 dark:border-amber-800 dark:bg-amber-950/20">
          <summary className="cursor-pointer text-base font-bold text-zinc-950 dark:text-white">
            4. Éprouver les sept pannes non compensables
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
            Testez en sandbox, sur copie ou avec des données anonymisées. « Impossible à tester sans risque » reste inconnu : ce n'est jamais une réussite implicite.
          </p>
          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            {failureGates.map((gate) => {
              const id = `flow-gate-${gate.key}`;
              return (
                <div key={gate.key} className="rounded-xl border border-amber-200 bg-white p-4 dark:border-amber-900 dark:bg-zinc-950">
                  <label htmlFor={id} className="text-sm font-bold text-zinc-950 dark:text-white">
                    {gate.number}. {gate.label}
                  </label>
                  <p id={`${id}-help`} className="mt-1.5 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">{gate.question}</p>
                  <select
                    id={id}
                    value={inputs.gates[gate.key]}
                    onChange={(event) => updateGate(gate.key, event.target.value as EvidenceState)}
                    className={controlClassName}
                    aria-describedby={`${id}-help`}
                  >
                    <option value="unknown">À tester — preuve inconnue</option>
                    <option value="pass">Réussi — preuve consignée</option>
                    <option value="fail">Échec — correction et nouveau test requis</option>
                  </select>
                </div>
              );
            })}
          </div>
        </details>

        <details className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
          <summary className="cursor-pointer text-base font-bold text-zinc-950 dark:text-white">
            5. Chiffrer une seule cible comparable
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            Comparez le maintien à une cible à la fois. Pour comparer plusieurs candidats, copiez le dossier puis remplacez toutes les valeurs de la cible.
          </p>
          <div className="mt-5">
            <label htmlFor="flow-candidate-kind" className="text-sm font-semibold text-zinc-950 dark:text-white">Type de cible</label>
            <select
              id="flow-candidate-kind"
              value={inputs.candidateCosts.kind}
              onChange={(event) => updateCandidateCost("kind", event.target.value as CandidateCosts["kind"])}
              className={controlClassName}
            >
              {Object.entries(candidateKindLabels).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {candidateCostFields.map((field) => (
              <NumericField
                key={field.key}
                id={`flow-candidate-cost-${field.key}`}
                label={field.label}
                help={field.help}
                value={inputs.candidateCosts[field.key] as number | null}
                max={field.kind === "hours" ? MAX_SAFE_HOURS : MAX_SAFE_MONEY_EUR}
                onChange={(value) => updateCandidateCost(field.key, value)}
              />
            ))}
            <div className="sm:col-span-2 xl:col-span-3">
              <label htmlFor="flow-candidate-incident-basis" className="text-sm font-semibold text-zinc-950 dark:text-white">Base du coût d'incident candidat</label>
              <input
                id="flow-candidate-incident-basis"
                type="text"
                value={inputs.candidateCosts.incidentBasis}
                onChange={(event) => updateCandidateCost("incidentBasis", event.target.value)}
                className={controlClassName}
              />
            </div>
          </div>
        </details>

        <section aria-labelledby="flow-results-title" className="rounded-2xl border border-indigo-200 bg-indigo-50/60 p-5 dark:border-indigo-900 dark:bg-indigo-950/20">
          <h4 id="flow-results-title" className="text-base font-bold text-zinc-950 dark:text-white">
            6. Lire les sous-totaux, puis choisir humainement
          </h4>
          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            <CostSummary title="Maintien de la situation actuelle" cost={result.currentCost} />
            <CostSummary title="Cible comparée" cost={result.candidateCost} />
          </div>
          {result.comparison ? (
            <p className="mt-4 rounded-xl bg-white p-4 text-sm leading-relaxed text-zinc-700 dark:bg-zinc-950 dark:text-zinc-200">
              Écart cible − courant : {formatCurrency(result.comparison.difference12Months)} à 12 mois et {formatCurrency(result.comparison.difference36Months)} à 36 mois. Intervalles {result.comparison.intervalsOverlap12Months ? "recouvrants" : "non recouvrants"} à 12 mois et {result.comparison.intervalsOverlap36Months ? "recouvrants" : "non recouvrants"} à 36 mois. Un écart de coût ne compense jamais une porte de panne.
            </p>
          ) : null}

          <fieldset className="mt-6">
            <legend className="text-sm font-bold text-zinc-950 dark:text-white">
              Prochaine étape choisie manuellement
            </legend>
            <div className="mt-3 grid gap-3 lg:grid-cols-2">
              {(Object.keys(decisionOutcomeLabels) as DecisionOutcome[]).map((outcome) => (
                <label key={outcome} className="flex min-h-11 cursor-pointer items-start gap-3 rounded-xl border border-zinc-200 bg-white p-3 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
                  <input
                    type="radio"
                    name="flow-selected-outcome"
                    value={outcome}
                    checked={inputs.selectedOutcome === outcome}
                    onChange={() => setInputs((current) => ({ ...current, selectedOutcome: outcome }))}
                    className="mt-0.5 size-5 accent-indigo-600"
                  />
                  <span>{decisionOutcomeLabels[outcome]}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950" role="status" aria-live="polite">
            <p className="font-bold text-zinc-950 dark:text-white">{result.statusLabel}</p>
            {result.errors.length ? <p className="mt-2 text-sm text-red-700 dark:text-red-300">Erreurs : {result.errors.join(" · ")}</p> : null}
            {result.failedGates.length ? <p className="mt-2 text-sm text-amber-800 dark:text-amber-300">Portes en échec : {result.failedGates.join(" · ")}</p> : null}
            {result.missing.length ? <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">À compléter : {result.missing.join(" · ")}</p> : null}
            {result.nextActions.length ? (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-200">
                {result.nextActions.map((action) => <li key={action}>{action}</li>)}
              </ul>
            ) : null}
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <button type="button" onClick={copyDossier} className="inline-flex min-h-11 items-center justify-center rounded-xl bg-zinc-950 px-4 py-2.5 text-sm font-bold text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950">
              Copier le dossier texte
            </button>
            <button type="button" onClick={() => window.print()} className="inline-flex min-h-11 items-center justify-center rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-bold text-zinc-900 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white">
              Imprimer cette page
            </button>
            <button type="button" onClick={clearLocalDossier} className="inline-flex min-h-11 items-center justify-center rounded-xl border border-red-300 bg-white px-4 py-2.5 text-sm font-bold text-red-700 hover:bg-red-50 dark:border-red-900 dark:bg-zinc-950 dark:text-red-300">
              Effacer le dossier local
            </button>
          </div>
          <p className="mt-3 min-h-5 text-sm font-medium text-indigo-700 dark:text-indigo-300" aria-live="polite">
            {liveMessage}
          </p>

          <details className="mt-5">
            <summary className="cursor-pointer text-sm font-bold text-zinc-950 dark:text-white">Afficher le dossier texte complet</summary>
            <pre data-flow-dossier="true" className="mt-3 max-h-96 overflow-auto whitespace-pre-wrap rounded-xl bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-100">{dossier}</pre>
          </details>
        </section>
      </div>
    </section>
  );
}
