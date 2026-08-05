"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  boundarySeparationLabels,
  buildDecisionDossier,
  createEmptyDecisionInputs,
  createEmptyExitGrid,
  criticalityLabels,
  currentPlatformLabels,
  evaluateDecision,
  exitGridFields,
  failureAttributionLabels,
  organizationalDimensions,
  processShapeLabels,
  proofStateLabels,
  type BoundarySeparation,
  type Criticality,
  type CurrentPlatform,
  type DecisionContext,
  type DecisionInputs,
  type DimensionKey,
  type ExitGrid,
  type FailureAttribution,
  type ProcessShape,
  type ProofState,
} from "./airtable-notion-decision-model";

const controlClassName =
  "mt-2 min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-950 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/25 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white";

const proofGroups: Array<{
  title: string;
  description: string;
  keys: DimensionKey[];
}> = [
  {
    title: "Arrêt, accès et données",
    description:
      "Rejouez un arrêt, les rôles et les règles d’intégrité sur un vrai dossier difficile.",
    keys: ["criticalityStopCost", "rolesPermissions", "dataModelIntegrity"],
  },
  {
    title: "Charge et automatisations",
    description:
      "Testez les écritures concurrentes, la croissance et chaque erreur d’automatisation.",
    keys: [
      "concurrencyConflicts",
      "volumeGrowthArchive",
      "automationOperations",
    ],
  },
  {
    title: "Connexions, terrain et contrôle",
    description:
      "Exercez les API, le travail mobile ou dégradé et les preuves d’audit attendues.",
    keys: ["integrationsApi", "mobileDegraded", "auditCompliance"],
  },
  {
    title: "Relève, sortie et continuité",
    description:
      "Prouvez que l’organisation peut administrer, exporter, restaurer et reprendre sans le créateur.",
    keys: ["ownershipAdministration", "exportExit", "supportRestoreContinuity"],
  },
];

function cloneInputs(inputs: DecisionInputs): DecisionInputs {
  return {
    context: { ...inputs.context },
    evidence: { ...inputs.evidence },
    failureAttribution: { ...inputs.failureAttribution },
  };
}

function cloneExitGrid(grid: ExitGrid): ExitGrid {
  return { ...grid };
}

function parseInteger(value: string): number | null {
  if (value.trim() === "") return null;
  return Number(value);
}

function ContextSelect<Value extends string>({
  id,
  label,
  value,
  options,
  onChange,
}: {
  id: string;
  label: string;
  value: Value;
  options: Array<{ value: Value; label: string }>;
  onChange: (value: Value) => void;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-sm font-semibold text-zinc-900 dark:text-white"
      >
        {label}
      </label>
      <select
        id={id}
        className={controlClassName}
        value={String(value)}
        onChange={(event) => onChange(event.target.value as Value)}
      >
        {options.map((option) => (
          <option key={String(option.value)} value={String(option.value)}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function CountField({
  id,
  label,
  help,
  value,
  onChange,
}: {
  id: string;
  label: string;
  help: string;
  value: number | null;
  onChange: (value: number | null) => void;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-sm font-semibold text-zinc-900 dark:text-white"
      >
        {label}
      </label>
      <input
        id={id}
        type="number"
        inputMode="numeric"
        min="0"
        step="1"
        value={value === null ? "" : String(value)}
        onChange={(event) => onChange(parseInteger(event.target.value))}
        className={controlClassName}
        aria-describedby={`${id}-help`}
      />
      <p
        id={`${id}-help`}
        className="mt-1.5 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400"
      >
        {help}
      </p>
    </div>
  );
}

function ProofSelect({
  dimensionKey,
  value,
  failureAttribution,
  onChange,
  onFailureAttributionChange,
}: {
  dimensionKey: DimensionKey;
  value: ProofState;
  failureAttribution: FailureAttribution;
  onChange: (value: ProofState) => void;
  onFailureAttributionChange: (value: FailureAttribution) => void;
}) {
  const dimension = organizationalDimensions.find(
    (item) => item.key === dimensionKey,
  );
  if (!dimension) return null;
  const id = `airtable-notion-proof-${dimension.key}`;
  const attributionId = `airtable-notion-cause-${dimension.key}`;

  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
      <label
        htmlFor={id}
        className="block text-sm font-semibold leading-relaxed text-zinc-900 dark:text-white"
      >
        {dimension.number}. {dimension.shortLabel}
      </label>
      <p className="mt-1 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
        {dimension.question}
      </p>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value as ProofState)}
        className={controlClassName}
      >
        {(Object.keys(proofStateLabels) as ProofState[]).map((state) => (
          <option key={state} value={state}>
            {proofStateLabels[state]}
          </option>
        ))}
      </select>
      {value === "failed" && (
        <div className="mt-3 border-t border-zinc-200 pt-3 dark:border-zinc-800">
          <label
            htmlFor={attributionId}
            className="block text-xs font-semibold leading-relaxed text-zinc-900 dark:text-white"
          >
            Cause de l’échec
          </label>
          <select
            id={attributionId}
            value={failureAttribution}
            onChange={(event) =>
              onFailureAttributionChange(
                event.target.value as FailureAttribution,
              )
            }
            className={controlClassName}
            aria-describedby={`${attributionId}-help`}
          >
            {(
              Object.keys(failureAttributionLabels) as FailureAttribution[]
            ).map((attribution) => (
              <option key={attribution} value={attribution}>
                {failureAttributionLabels[attribution]}
              </option>
            ))}
          </select>
          <p
            id={`${attributionId}-help`}
            className="mt-1.5 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400"
          >
            Appuyez la cause sur le test : un même contrôle peut révéler une
            gouvernance corrigeable ou une contrainte du produit.
          </p>
        </div>
      )}
    </div>
  );
}

export interface AirtableNotionDecisionWorkbenchProps {
  initialInputs?: DecisionInputs;
  initialExitGrid?: ExitGrid;
}

export function AirtableNotionDecisionWorkbench({
  initialInputs,
  initialExitGrid,
}: AirtableNotionDecisionWorkbenchProps = {}) {
  const [inputs, setInputs] = useState(() =>
    cloneInputs(initialInputs ?? createEmptyDecisionInputs()),
  );
  const [exitGrid, setExitGrid] = useState(() =>
    cloneExitGrid(initialExitGrid ?? createEmptyExitGrid()),
  );
  const [copyMessage, setCopyMessage] = useState("");
  const openedForPrint = useRef<HTMLDetailsElement[]>([]);

  const result = useMemo(() => evaluateDecision(inputs), [inputs]);
  const dossier = useMemo(
    () => buildDecisionDossier(inputs, result, exitGrid),
    [exitGrid, inputs, result],
  );

  useEffect(() => {
    function openForPrint() {
      const details = Array.from(
        document.querySelectorAll<HTMLDetailsElement>(
          '[data-airtable-notion-print-expand="true"]',
        ),
      );
      openedForPrint.current = details.filter((item) => !item.open);
      for (const item of details) item.open = true;
    }

    function restoreAfterPrint() {
      for (const item of openedForPrint.current) item.open = false;
      openedForPrint.current = [];
    }

    window.addEventListener("beforeprint", openForPrint);
    window.addEventListener("afterprint", restoreAfterPrint);
    return () => {
      window.removeEventListener("beforeprint", openForPrint);
      window.removeEventListener("afterprint", restoreAfterPrint);
    };
  }, []);

  function updateContext<K extends keyof DecisionContext>(
    key: K,
    value: DecisionContext[K],
  ) {
    setInputs((current) => ({
      ...current,
      context: { ...current.context, [key]: value },
    }));
  }

  function updateProof(key: DimensionKey, value: ProofState) {
    setInputs((current) => ({
      ...current,
      evidence: { ...current.evidence, [key]: value },
      failureAttribution:
        value === "failed"
          ? current.failureAttribution
          : {
              ...current.failureAttribution,
              [key]: "unqualified",
            },
    }));
  }

  function updateFailureAttribution(
    key: DimensionKey,
    value: FailureAttribution,
  ) {
    setInputs((current) => ({
      ...current,
      failureAttribution: {
        ...current.failureAttribution,
        [key]: value,
      },
    }));
  }

  async function copyDossier() {
    try {
      await navigator.clipboard.writeText(dossier);
      setCopyMessage("Dossier copié dans le presse-papiers.");
    } catch {
      setCopyMessage(
        "Copie impossible dans ce navigateur. Ouvrez le dossier texte puis sélectionnez-le manuellement.",
      );
    }
  }

  return (
    <section
      className="not-prose my-9 overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
      aria-label="Test local de charge organisationnelle Airtable, Notion ou application métier"
      data-airtable-notion-workbench="true"
      data-read-time-exclude="true"
    >
      <style>{`
        @media print {
          [data-airtable-notion-workbench="true"] details[data-airtable-notion-print-expand="true"] > * {
            display: block !important;
          }
          [data-airtable-notion-workbench="true"] [data-airtable-notion-dossier="true"] {
            max-height: none !important;
            overflow: visible !important;
            white-space: pre-wrap !important;
          }
          [data-airtable-notion-workbench="true"] button {
            display: none !important;
          }
        }
      `}</style>

      <header className="border-b border-zinc-200 bg-white px-5 py-6 dark:border-zinc-800 dark:bg-zinc-950 sm:px-7">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-300">
          Atelier local · aucune donnée envoyée
        </p>
        <h3 className="mt-2 text-xl font-bold text-zinc-950 dark:text-white sm:text-2xl">
          Rejouer douze contrôles avant de choisir
        </h3>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          Répondez avec une preuve datée, pas avec une impression. Une case
          laissée « à vérifier » ou un échec dont la cause reste à qualifier
          suspend la conclusion. Les nombres décrivent votre charge ; aucun
          seuil caché ne déclenche une migration.
        </p>
      </header>

      <div className="space-y-8 px-5 py-6 sm:px-7 sm:py-8">
        <section aria-labelledby="airtable-notion-context-title">
          <h4
            id="airtable-notion-context-title"
            className="text-base font-bold text-zinc-950 dark:text-white"
          >
            1. Décrire le processus observé
          </h4>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <ContextSelect
              id="airtable-notion-current-platform"
              label="Outil actuel"
              value={inputs.context.currentPlatform}
              options={(
                Object.keys(currentPlatformLabels) as CurrentPlatform[]
              ).map((value) => ({
                value,
                label: currentPlatformLabels[value],
              }))}
              onChange={(value) => updateContext("currentPlatform", value)}
            />
            <ContextSelect
              id="airtable-notion-process-shape"
              label="Forme dominante"
              value={inputs.context.processShape}
              options={(Object.keys(processShapeLabels) as ProcessShape[]).map(
                (value) => ({ value, label: processShapeLabels[value] }),
              )}
              onChange={(value) => updateContext("processShape", value)}
            />
            <ContextSelect
              id="airtable-notion-criticality"
              label="Criticité"
              value={inputs.context.criticality}
              options={(Object.keys(criticalityLabels) as Criticality[]).map(
                (value) => ({ value, label: criticalityLabels[value] }),
              )}
              onChange={(value) => updateContext("criticality", value)}
            />
            <ContextSelect
              id="airtable-notion-boundary"
              label="Frontière isolable"
              value={inputs.context.boundarySeparation}
              options={(
                Object.keys(boundarySeparationLabels) as BoundarySeparation[]
              ).map((value) => ({
                value,
                label: boundarySeparationLabels[value],
              }))}
              onChange={(value) => updateContext("boundarySeparation", value)}
            />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <CountField
              id="airtable-notion-active-users"
              label="Utilisateurs actifs"
              help="Personnes ayant réellement lu ou écrit pendant la période observée. Zéro reste une valeur explicite."
              value={inputs.context.activeUsers}
              onChange={(value) => updateContext("activeUsers", value)}
            />
            <CountField
              id="airtable-notion-active-objects"
              label="Objets actifs"
              help="Enregistrements, pages ou dossiers effectivement utiles, sans confondre archive et activité."
              value={inputs.context.activeObjects}
              onChange={(value) => updateContext("activeObjects", value)}
            />
            <CountField
              id="airtable-notion-monthly-writes"
              label="Écritures mensuelles"
              help="Créations et modifications par les humains, automatisations et intégrations."
              value={inputs.context.monthlyWrites}
              onChange={(value) => updateContext("monthlyWrites", value)}
            />
          </div>
        </section>

        <section aria-labelledby="airtable-notion-proof-title">
          <h4
            id="airtable-notion-proof-title"
            className="text-base font-bold text-zinc-950 dark:text-white"
          >
            2. Qualifier les douze preuves
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            « Non » signifie que le test a échoué. Qualifiez ensuite sa cause à
            partir des faits : gouvernance remédiable ou limite de plateforme
            reproduite. Sans cause prouvée, la décision reste suspendue. « À
            vérifier » n’est ni un échec, ni un zéro.
          </p>
          <div className="mt-5 space-y-6">
            {proofGroups.map((group) => (
              <div key={group.title}>
                <h5 className="text-sm font-bold text-zinc-950 dark:text-white">
                  {group.title}
                </h5>
                <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {group.description}
                </p>
                <div className="mt-3 grid gap-3 lg:grid-cols-3">
                  {group.keys.map((key) => (
                    <ProofSelect
                      key={key}
                      dimensionKey={key}
                      value={inputs.evidence[key]}
                      failureAttribution={inputs.failureAttribution[key]}
                      onChange={(value) => updateProof(key, value)}
                      onFailureAttributionChange={(value) =>
                        updateFailureAttribution(key, value)
                      }
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="airtable-notion-result-title"
          className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5 dark:border-indigo-900 dark:bg-indigo-950/40 sm:p-6"
          role="status"
          aria-live="polite"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-indigo-700 dark:text-indigo-300">
            Orientation calculée par règles visibles
          </p>
          <h4
            id="airtable-notion-result-title"
            className="mt-2 text-xl font-bold text-zinc-950 dark:text-white"
          >
            {result.label}
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
            {result.headline}
          </p>

          {(result.criticalUnknowns.length > 0 ||
            result.blockingFailures.length > 0) && (
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-zinc-950 dark:text-white">
                  Preuves manquantes
                </p>
                <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  {result.criticalUnknowns.slice(0, 8).map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              {result.blockingFailures.length > 0 && (
                <div>
                  <p className="text-sm font-semibold text-zinc-950 dark:text-white">
                    Saisies ou contradictions
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                    {result.blockingFailures.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {result.reasons.length > 0 && (
            <ul className="mt-4 space-y-1.5 text-sm text-zinc-700 dark:text-zinc-300">
              {result.reasons.map((reason) => (
                <li key={reason}>• {reason}</li>
              ))}
            </ul>
          )}

          <div className="mt-5 border-t border-indigo-200 pt-4 dark:border-indigo-900">
            <p className="text-sm font-semibold text-zinc-950 dark:text-white">
              Prochaines actions
            </p>
            <ol className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              {result.nextActions.map((action, index) => (
                <li key={action}>
                  {index + 1}. {action}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <details
          className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
          data-airtable-notion-print-expand="true"
        >
          <summary className="min-h-11 cursor-pointer py-2 text-base font-bold text-zinc-950 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:text-white">
            3. Remplir la grille de sortie
          </summary>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            Cette grille ne lance aucune migration. Elle révèle ce que vous
            récupérez vraiment, qui en répond et comment revenir en arrière.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {exitGridFields.map((field) => {
              const id = `airtable-notion-exit-${field.key}`;
              return (
                <div key={field.key}>
                  <label
                    htmlFor={id}
                    className="text-sm font-semibold text-zinc-900 dark:text-white"
                  >
                    {field.label}
                  </label>
                  <textarea
                    id={id}
                    value={exitGrid[field.key]}
                    onChange={(event) =>
                      setExitGrid((current) => ({
                        ...current,
                        [field.key]: event.target.value,
                      }))
                    }
                    rows={3}
                    className={`${controlClassName} min-h-24 resize-y`}
                    placeholder="Responsable, preuve, format, date ou critère…"
                  />
                </div>
              );
            })}
          </div>
        </details>

        <details
          className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
          data-airtable-notion-print-expand="true"
        >
          <summary className="min-h-11 cursor-pointer py-2 text-base font-bold text-zinc-950 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:text-white">
            Voir le dossier texte complet
          </summary>
          <pre
            className="mt-4 max-h-[36rem] overflow-auto whitespace-pre-wrap rounded-xl bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-100"
            data-airtable-notion-dossier="true"
          >
            {dossier}
          </pre>
        </details>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={copyDossier}
            className="min-h-11 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            Copier le dossier texte
          </button>
          <button
            type="button"
            onClick={() => window.print()}
            className="min-h-11 rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900"
          >
            Imprimer cette page
          </button>
        </div>
        <p
          className="min-h-5 text-sm text-zinc-600 dark:text-zinc-300"
          aria-live="polite"
        >
          {copyMessage}
        </p>

        <p className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-100">
          Cet atelier prépare une discussion. Il ne mesure ni performance
          technique, ni conformité, ni coût total, et ne remplace pas un test
          dans votre espace, votre plan, vos contrats et vos données.
        </p>
      </div>
    </section>
  );
}
