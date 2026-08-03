"use client";

import { useMemo, useRef, useState } from "react";
import {
  assessPriorityWorkshop,
  compatibleDecisionsForRoute,
  createEmptyPriorityWorkshop,
  createPilotFiveRequests,
  decisionLabels,
  evidenceStrengthLabels,
  isCapacityCountableRequest,
  isDecisionCompatibleWithRoute,
  MAX_DECIMAL_PLACES,
  MAX_PERSON_DAYS,
  MAX_REQUESTS,
  priorityRoutes,
  routeLabels,
  type EvidenceStrength,
  type HumanDecision,
  type PriorityAssessment,
  type PriorityRequest,
  type PriorityRoute,
  type PriorityStatus,
  type PriorityWorkshopInput,
} from "./priority-workshop-engine";

interface PriorityWorkshopDraft extends PriorityWorkshopInput {
  requestUiIds: string[];
}

const statusClasses: Record<PriorityStatus, string> = {
  STOP_REQUIRED_CONTEXT_UNKNOWN:
    "border-red-300 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950/35 dark:text-red-100",
  STOP_CRITICAL_ROUTE_UNASSIGNED:
    "border-red-300 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950/35 dark:text-red-100",
  STOP_DEPENDENCY_OR_CAPACITY_UNKNOWN:
    "border-red-300 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950/35 dark:text-red-100",
  STOP_SELECTED_LOT_EXCEEDS_CAPACITY:
    "border-red-300 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950/35 dark:text-red-100",
  TESTS_REQUIRED_BEFORE_BUILD:
    "border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-900 dark:bg-amber-950/35 dark:text-amber-100",
  NO_BUILD_CANDIDATE:
    "border-zinc-300 bg-zinc-50 text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white",
  NEXT_LOT_CANDIDATE_FOR_REVIEW:
    "border-emerald-300 bg-emerald-50 text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/35 dark:text-emerald-100",
};

const controlClasses =
  "mt-1.5 min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 motion-reduce:transition-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white";

type FieldErrors = PriorityAssessment["fieldErrors"];

function fieldAccessibility(
  id: string,
  errors: readonly string[] | undefined,
  describedBy?: string,
) {
  const hasError = (errors?.length ?? 0) > 0;
  return {
    "aria-invalid": hasError || undefined,
    "aria-describedby":
      [describedBy, hasError ? `${id}-errors` : undefined]
        .filter(Boolean)
        .join(" ") || undefined,
  } as const;
}

function FieldError({
  id,
  errors,
}: {
  id: string;
  errors: readonly string[] | undefined;
}) {
  if (!errors || errors.length === 0) return null;

  return (
    <span
      id={`${id}-errors`}
      className="mt-1.5 block text-xs font-medium leading-relaxed text-red-700 dark:text-red-300"
    >
      {errors.join(" ")}
    </span>
  );
}

function emptyDraft(): PriorityWorkshopDraft {
  return { ...createEmptyPriorityWorkshop(), requestUiIds: [] };
}

function nextRequestId(requests: PriorityRequest[]): string {
  let index = requests.length + 1;
  while (requests.some((request) => request.id === `REQ-${index}`)) index += 1;
  return `REQ-${index}`;
}

function emptyRequest(id: string): PriorityRequest {
  return {
    id,
    rawRequest: "",
    person: "",
    situation: "",
    problem: "",
    evidence: "",
    evidenceSource: "",
    evidencePeriod: "",
    evidenceLimit: "",
    evidenceStrength: "unknown",
    expectedOutcome: "",
    successMeasure: "",
    successThreshold: "",
    route: "unknown",
    owner: "",
    criticalNextAction: "",
    dependencies: [],
    effortPersonDays: "",
    smallestTest: "",
    testMeasure: "",
    testThreshold: "",
    proposedDecision: "unknown",
    decisionReason: "",
    reopenEvent: "",
    selectedForLot: false,
  };
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="block text-xs font-semibold text-zinc-700 dark:text-zinc-200">
      {children}
    </span>
  );
}

function TextField({
  id,
  label,
  value,
  onChange,
  placeholder,
  errors,
  describedBy,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  errors?: readonly string[];
  describedBy?: string;
}) {
  return (
    <label htmlFor={id} className="block">
      <FieldLabel>{label}</FieldLabel>
      <input
        id={id}
        type="text"
        value={value}
        placeholder={placeholder}
        {...fieldAccessibility(id, errors, describedBy)}
        onChange={(event) => onChange(event.target.value)}
        className={controlClasses}
      />
      <FieldError id={id} errors={errors} />
    </label>
  );
}

function TextAreaField({
  id,
  label,
  value,
  onChange,
  rows = 2,
  errors,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  errors?: readonly string[];
}) {
  return (
    <label htmlFor={id} className="block">
      <FieldLabel>{label}</FieldLabel>
      <textarea
        id={id}
        rows={rows}
        value={value}
        {...fieldAccessibility(id, errors)}
        onChange={(event) => onChange(event.target.value)}
        className={controlClasses}
      />
      <FieldError id={id} errors={errors} />
    </label>
  );
}

function SelectField<T extends string>({
  id,
  label,
  value,
  options,
  labels,
  onChange,
  errors,
}: {
  id: string;
  label: string;
  value: T;
  options: readonly T[];
  labels: Record<T, string>;
  onChange: (value: T) => void;
  errors?: readonly string[];
}) {
  return (
    <label htmlFor={id} className="block">
      <FieldLabel>{label}</FieldLabel>
      <select
        id={id}
        value={value}
        {...fieldAccessibility(id, errors)}
        onChange={(event) => onChange(event.target.value as T)}
        className={controlClasses}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {labels[option]}
          </option>
        ))}
      </select>
      <FieldError id={id} errors={errors} />
    </label>
  );
}

export function PriorityWorkshopTool() {
  const nextUiId = useRef(0);
  const [draft, setDraft] = useState<PriorityWorkshopDraft>(emptyDraft);
  const [copyStatus, setCopyStatus] = useState("");
  const assessment = useMemo(() => assessPriorityWorkshop(draft), [draft]);
  const fieldErrors: FieldErrors = assessment.fieldErrors;

  function mutateDraft(
    update: (current: PriorityWorkshopDraft) => PriorityWorkshopDraft,
  ) {
    setDraft(update);
    setCopyStatus("");
  }

  function updateTopLevel(update: Partial<PriorityWorkshopInput>) {
    mutateDraft((current) => ({ ...current, ...update }));
  }

  function updateRequest(index: number, update: Partial<PriorityRequest>) {
    mutateDraft((current) => ({
      ...current,
      requests: current.requests.map((request, requestIndex) =>
        requestIndex === index ? { ...request, ...update } : request,
      ),
    }));
  }

  function updateRoute(
    index: number,
    request: PriorityRequest,
    route: PriorityRoute,
  ) {
    const proposedDecision = isDecisionCompatibleWithRoute(
      route,
      request.proposedDecision,
    )
      ? request.proposedDecision
      : "unknown";
    updateRequest(index, {
      route,
      proposedDecision,
      selectedForLot:
        request.selectedForLot &&
        isCapacityCountableRequest({ route, proposedDecision }),
    });
  }

  function updateDecision(
    index: number,
    request: PriorityRequest,
    proposedDecision: HumanDecision,
  ) {
    updateRequest(index, {
      proposedDecision,
      selectedForLot:
        request.selectedForLot &&
        isCapacityCountableRequest({
          route: request.route,
          proposedDecision,
        }),
    });
  }

  function addRequest() {
    mutateDraft((current) => {
      if (current.requests.length >= MAX_REQUESTS) return current;
      nextUiId.current += 1;
      return {
        ...current,
        requests: [
          ...current.requests,
          emptyRequest(nextRequestId(current.requests)),
        ],
        requestUiIds: [
          ...current.requestUiIds,
          `priority-request-${nextUiId.current}`,
        ],
      };
    });
  }

  function removeRequest(index: number) {
    mutateDraft((current) => ({
      ...current,
      requests: current.requests.filter(
        (_, requestIndex) => requestIndex !== index,
      ),
      requestUiIds: current.requestUiIds.filter(
        (_, requestIndex) => requestIndex !== index,
      ),
    }));
  }

  function loadExample() {
    const example = createPilotFiveRequests();
    const requestUiIds = example.requests.map(() => {
      nextUiId.current += 1;
      return `priority-request-${nextUiId.current}`;
    });
    setDraft({ ...example, requestUiIds });
    setCopyStatus(
      "Exemple entièrement fictif chargé. Remplacez toutes les hypothèses avant une décision réelle.",
    );
  }

  function reset() {
    setDraft(emptyDraft());
    setCopyStatus(
      "Atelier réinitialisé. Rien n’a été conservé dans le navigateur.",
    );
  }

  async function copyMarkdown() {
    try {
      await navigator.clipboard.writeText(assessment.markdown);
      setCopyStatus(
        "Brouillon Markdown copié. Collez-le dans votre document de revue humaine.",
      );
    } catch {
      setCopyStatus(
        "La copie automatique a échoué. Sélectionnez le brouillon Markdown affiché ci-dessous.",
      );
    }
  }

  return (
    <div
      className="not-prose my-8 overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm print:overflow-visible print:shadow-none dark:border-zinc-800 dark:bg-zinc-950"
      data-priority-workshop="true"
      data-read-time-exclude="true"
    >
      <div className="border-b border-zinc-200 bg-zinc-950 px-5 py-6 text-white dark:border-zinc-800 sm:px-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
          Atelier local · 5 demandes maximum · aucun score
        </p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight">
          Préparer le prochain lot pour une revue humaine
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-300">
          L’outil ne contacte aucun service, ne stocke rien et ne classe pas les
          demandes à votre place. Utilisez des libellés sans donnée sensible.
          Les incidents, obligations, engagements et dépendances fondatrices
          restent séparés de la comparaison ordinaire.
        </p>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-300">
          Au-delà de cinq demandes, préparez plusieurs brouillons avec la même
          période, puis relisez tous les brouillons ensemble. L’ordre des
          groupes n’est jamais un classement.
        </p>
        <p
          id="priority-number-rules"
          className="mt-3 max-w-3xl text-xs leading-relaxed text-zinc-400"
        >
          Chaque nombre est vérifié avant le calcul : utilisez uniquement le
          point décimal, de 0 à {MAX_PERSON_DAYS.toLocaleString("fr-FR")}, avec
          au maximum {MAX_DECIMAL_PLACES} décimales et sans exposant. Une case
          vide reste inconnue ; elle ne devient jamais zéro.
        </p>
      </div>

      <div className="space-y-8 px-5 py-6 sm:px-7">
        <section aria-labelledby="priority-horizon-title">
          <h4 id="priority-horizon-title" className="text-lg font-semibold">
            1. Période et capacité
          </h4>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <TextField
              id="priority-period"
              label="Nom exact de la période"
              value={draft.periodName}
              errors={fieldErrors["priority-period"]}
              onChange={(periodName) => updateTopLevel({ periodName })}
              placeholder="Ex. lot du 3 au 14 août"
            />
            <SelectField
              id="priority-capacity-state"
              label="La capacité totale est-elle connue ?"
              value={draft.capacityState}
              errors={fieldErrors["priority-capacity-state"]}
              options={["unknown", "known"] as const}
              labels={{ unknown: "Inconnue", known: "Connue" }}
              onChange={(capacityState) => updateTopLevel({ capacityState })}
            />
            <TextAreaField
              id="priority-target-result"
              label="Résultat visé par le prochain lot"
              value={draft.targetResult}
              errors={fieldErrors["priority-target-result"]}
              onChange={(targetResult) => updateTopLevel({ targetResult })}
            />
            <TextAreaField
              id="priority-review-measure"
              label="Mesure et seuil de revue du lot"
              value={draft.reviewMeasure}
              errors={fieldErrors["priority-review-measure"]}
              onChange={(reviewMeasure) => updateTopLevel({ reviewMeasure })}
            />
            {draft.capacityState === "known" && (
              <label htmlFor="priority-capacity" className="block">
                <FieldLabel>
                  Capacité totale sur cette période, en jours-personne
                </FieldLabel>
                <input
                  id="priority-capacity"
                  type="text"
                  inputMode="decimal"
                  {...fieldAccessibility(
                    "priority-capacity",
                    fieldErrors["priority-capacity"],
                    "priority-number-rules",
                  )}
                  value={draft.capacityPersonDays}
                  onChange={(event) =>
                    updateTopLevel({
                      capacityPersonDays: event.target.value,
                    })
                  }
                  className={controlClasses}
                />
                <FieldError
                  id="priority-capacity"
                  errors={fieldErrors["priority-capacity"]}
                />
              </label>
            )}
          </div>
        </section>

        <section aria-labelledby="priority-requests-title">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h4
                id="priority-requests-title"
                className="text-lg font-semibold"
              >
                2. Demandes à instruire
              </h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                {draft.requests.length} sur {MAX_REQUESTS} · chaque identifiant
                doit rester stable et unique.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 print:hidden">
              <button
                type="button"
                onClick={loadExample}
                className="min-h-11 rounded-xl border border-indigo-300 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-900 hover:bg-indigo-100 dark:border-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-100"
              >
                Charger l’exemple fictif
              </button>
              <button
                type="button"
                onClick={addRequest}
                disabled={draft.requests.length >= MAX_REQUESTS}
                className="min-h-11 rounded-xl bg-zinc-950 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-45 dark:bg-white dark:text-zinc-950"
              >
                Ajouter une demande
              </button>
            </div>
          </div>

          {draft.requests.length === 0 && (
            <p className="mt-4 rounded-2xl border border-dashed border-zinc-300 px-4 py-5 text-sm text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
              Aucune demande renseignée. Ajoutez une demande ou chargez les cinq
              cas fictifs pour comprendre le fonctionnement.
            </p>
          )}

          <div className="mt-5 space-y-5">
            {draft.requests.map((request, index) => {
              const prefix = `priority-request-${index}`;
              const errorsFor = (suffix: string) =>
                fieldErrors[`${prefix}-${suffix}`];
              const canEnterCapacity = isCapacityCountableRequest(request);
              return (
                <fieldset
                  key={draft.requestUiIds[index]}
                  className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800 sm:p-5"
                >
                  <legend className="px-2 text-sm font-semibold">
                    Demande {index + 1} ·{" "}
                    {request.id || "identifiant à vérifier"}
                  </legend>
                  <div className="mt-2 grid gap-4 md:grid-cols-2">
                    <TextField
                      id={`${prefix}-id`}
                      label="Identifiant stable"
                      value={request.id}
                      errors={errorsFor("id")}
                      onChange={(id) => updateRequest(index, { id })}
                    />
                    <SelectField
                      id={`${prefix}-route`}
                      label="Voie d’instruction"
                      value={request.route}
                      errors={errorsFor("route")}
                      options={priorityRoutes}
                      labels={routeLabels}
                      onChange={(route: PriorityRoute) =>
                        updateRoute(index, request, route)
                      }
                    />
                    <div className="md:col-span-2">
                      <TextAreaField
                        id={`${prefix}-raw-request`}
                        label="Demande brute, sans la réécrire en solution"
                        value={request.rawRequest}
                        errors={errorsFor("raw-request")}
                        onChange={(rawRequest) =>
                          updateRequest(index, { rawRequest })
                        }
                      />
                    </div>
                    <TextField
                      id={`${prefix}-person`}
                      label="Personne concernée"
                      value={request.person}
                      errors={errorsFor("person")}
                      onChange={(person) => updateRequest(index, { person })}
                    />
                    <TextField
                      id={`${prefix}-situation`}
                      label="Situation observable"
                      value={request.situation}
                      errors={errorsFor("situation")}
                      onChange={(situation) =>
                        updateRequest(index, { situation })
                      }
                    />
                    <div className="md:col-span-2">
                      <TextAreaField
                        id={`${prefix}-problem`}
                        label="Travail bloqué ou problème"
                        value={request.problem}
                        errors={errorsFor("problem")}
                        onChange={(problem) =>
                          updateRequest(index, { problem })
                        }
                      />
                    </div>
                    <TextAreaField
                      id={`${prefix}-evidence`}
                      label="Preuve observée"
                      value={request.evidence}
                      errors={errorsFor("evidence")}
                      onChange={(evidence) =>
                        updateRequest(index, { evidence })
                      }
                    />
                    <SelectField
                      id={`${prefix}-evidence-strength`}
                      label="Force de la preuve"
                      value={request.evidenceStrength}
                      errors={errorsFor("evidence-strength")}
                      options={["unknown", "weak", "medium", "strong"] as const}
                      labels={evidenceStrengthLabels}
                      onChange={(evidenceStrength: EvidenceStrength) =>
                        updateRequest(index, { evidenceStrength })
                      }
                    />
                    <TextField
                      id={`${prefix}-evidence-source`}
                      label="Source de la preuve"
                      value={request.evidenceSource}
                      errors={errorsFor("evidence-source")}
                      onChange={(evidenceSource) =>
                        updateRequest(index, { evidenceSource })
                      }
                    />
                    <TextField
                      id={`${prefix}-evidence-period`}
                      label="Période de la preuve"
                      value={request.evidencePeriod}
                      errors={errorsFor("evidence-period")}
                      onChange={(evidencePeriod) =>
                        updateRequest(index, { evidencePeriod })
                      }
                    />
                    <div className="md:col-span-2">
                      <TextAreaField
                        id={`${prefix}-evidence-limit`}
                        label="Limite de la preuve"
                        value={request.evidenceLimit}
                        errors={errorsFor("evidence-limit")}
                        onChange={(evidenceLimit) =>
                          updateRequest(index, { evidenceLimit })
                        }
                      />
                    </div>
                    <TextField
                      id={`${prefix}-outcome`}
                      label="Résultat attendu"
                      value={request.expectedOutcome}
                      errors={errorsFor("outcome")}
                      onChange={(expectedOutcome) =>
                        updateRequest(index, { expectedOutcome })
                      }
                    />
                    <TextField
                      id={`${prefix}-measure`}
                      label="Mesure du résultat"
                      value={request.successMeasure}
                      errors={errorsFor("measure")}
                      onChange={(successMeasure) =>
                        updateRequest(index, { successMeasure })
                      }
                    />
                    <TextField
                      id={`${prefix}-threshold`}
                      label="Seuil de résultat"
                      value={request.successThreshold}
                      errors={errorsFor("threshold")}
                      onChange={(successThreshold) =>
                        updateRequest(index, { successThreshold })
                      }
                    />
                    <TextField
                      id={`${prefix}-owner`}
                      label="Responsable"
                      value={request.owner}
                      errors={errorsFor("owner")}
                      onChange={(owner) => updateRequest(index, { owner })}
                    />
                    <TextAreaField
                      id={`${prefix}-critical-action`}
                      label="Prochaine action si la voie est critique"
                      value={request.criticalNextAction}
                      errors={errorsFor("critical-action")}
                      onChange={(criticalNextAction) =>
                        updateRequest(index, { criticalNextAction })
                      }
                    />
                    <TextField
                      id={`${prefix}-dependencies`}
                      label="Dépendances par identifiants, séparées par des virgules"
                      value={request.dependencies.join(", ")}
                      errors={errorsFor("dependencies")}
                      onChange={(value) =>
                        updateRequest(index, {
                          dependencies: value
                            .split(",")
                            .map((item) => item.trim())
                            .filter(Boolean),
                        })
                      }
                    />
                    <label htmlFor={`${prefix}-effort`} className="block">
                      <FieldLabel>
                        Effort complet sur la période, en jours-personne
                      </FieldLabel>
                      <input
                        id={`${prefix}-effort`}
                        type="text"
                        inputMode="decimal"
                        {...fieldAccessibility(
                          `${prefix}-effort`,
                          errorsFor("effort"),
                          "priority-number-rules",
                        )}
                        value={request.effortPersonDays}
                        onChange={(event) =>
                          updateRequest(index, {
                            effortPersonDays: event.target.value,
                          })
                        }
                        className={controlClasses}
                      />
                      <FieldError
                        id={`${prefix}-effort`}
                        errors={errorsFor("effort")}
                      />
                    </label>
                    <SelectField
                      id={`${prefix}-decision`}
                      label="Décision humaine proposée"
                      value={request.proposedDecision}
                      errors={errorsFor("decision")}
                      options={compatibleDecisionsForRoute(request.route)}
                      labels={decisionLabels}
                      onChange={(proposedDecision: HumanDecision) =>
                        updateDecision(index, request, proposedDecision)
                      }
                    />
                    <TextAreaField
                      id={`${prefix}-decision-reason`}
                      label="Motif de la décision"
                      value={request.decisionReason}
                      errors={errorsFor("decision-reason")}
                      onChange={(decisionReason) =>
                        updateRequest(index, { decisionReason })
                      }
                    />
                    <TextAreaField
                      id={`${prefix}-smallest-test`}
                      label="Plus petit test si la preuve est faible ou si vous proposez de tester"
                      value={request.smallestTest}
                      errors={errorsFor("smallest-test")}
                      onChange={(smallestTest) =>
                        updateRequest(index, { smallestTest })
                      }
                    />
                    <TextField
                      id={`${prefix}-test-measure`}
                      label="Mesure du test"
                      value={request.testMeasure}
                      errors={errorsFor("test-measure")}
                      onChange={(testMeasure) =>
                        updateRequest(index, { testMeasure })
                      }
                    />
                    <TextField
                      id={`${prefix}-test-threshold`}
                      label="Seuil du test"
                      value={request.testThreshold}
                      errors={errorsFor("test-threshold")}
                      onChange={(testThreshold) =>
                        updateRequest(index, { testThreshold })
                      }
                    />
                    <div className="md:col-span-2">
                      <TextAreaField
                        id={`${prefix}-reopen-event`}
                        label="Événement observable de réouverture si la demande est différée"
                        value={request.reopenEvent}
                        errors={errorsFor("reopen-event")}
                        onChange={(reopenEvent) =>
                          updateRequest(index, { reopenEvent })
                        }
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label
                        htmlFor={`${prefix}-selection`}
                        className="flex min-h-11 items-center gap-3 rounded-xl border border-zinc-300 px-3 py-2 text-sm dark:border-zinc-700"
                      >
                        <input
                          id={`${prefix}-selection`}
                          type="checkbox"
                          {...fieldAccessibility(
                            `${prefix}-selection`,
                            errorsFor("selection"),
                          )}
                          checked={request.selectedForLot}
                          disabled={!canEnterCapacity}
                          onChange={(event) =>
                            updateRequest(index, {
                              selectedForLot: event.target.checked,
                            })
                          }
                          className="size-5 accent-indigo-600 disabled:cursor-not-allowed disabled:opacity-45"
                        />
                        {canEnterCapacity
                          ? "Inclure cette action dans le calcul de capacité"
                          : "Hors calcul de capacité : choisissez une action comparable à construire, tester ou intégrer"}
                      </label>
                      <FieldError
                        id={`${prefix}-selection`}
                        errors={errorsFor("selection")}
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeRequest(index)}
                    className="mt-4 min-h-11 rounded-xl border border-red-200 px-4 py-2 text-sm font-semibold text-red-800 hover:bg-red-50 print:hidden dark:border-red-900 dark:text-red-200 dark:hover:bg-red-950/30"
                  >
                    Retirer cette demande
                  </button>
                </fieldset>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="priority-result-title">
          <h4 id="priority-result-title" className="text-lg font-semibold">
            3. Résultat calculé, puis décision humaine
          </h4>
          <div
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className={`mt-4 rounded-2xl border p-5 ${statusClasses[assessment.status]}`}
          >
            <p className="font-mono text-xs font-bold tracking-wide">
              {assessment.status}
            </p>
            <p className="mt-1 text-lg font-semibold">
              {assessment.publicLabel}
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
              {assessment.reasons.length > 0 ? (
                assessment.reasons.map((reason) => (
                  <li key={reason}>{reason}</li>
                ))
              ) : (
                <li>
                  Aucun motif bloquant détecté ; le lot reste seulement candidat
                  à une revue humaine.
                </li>
              )}
            </ul>
          </div>

          <dl className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Lot + dépendances",
                assessment.totalSelectedPersonDays ?? "Inconnu",
              ],
              ["Sous-total connu", assessment.knownSubtotalPersonDays],
              ["Capacité", assessment.capacityPersonDays ?? "Inconnue"],
              ["Reste", assessment.remainingPersonDays ?? "Inconnu"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-xl border border-zinc-200 p-3 dark:border-zinc-800"
              >
                <dt className="text-xs font-semibold text-zinc-500 dark:text-zinc-300">
                  {label}
                </dt>
                <dd className="mt-1 font-mono text-lg font-semibold">
                  {value} {value !== "Inconnu" ? "j-p" : ""}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 rounded-xl bg-zinc-100 px-4 py-3 font-mono text-xs leading-relaxed text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
            {assessment.equation}
          </p>
        </section>

        <section aria-labelledby="priority-export-title">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h4 id="priority-export-title" className="text-lg font-semibold">
              4. Brouillon copiable
            </h4>
            <div className="flex flex-wrap gap-2 print:hidden">
              <button
                type="button"
                onClick={copyMarkdown}
                className="min-h-11 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
              >
                Copier le Markdown
              </button>
              <button
                type="button"
                onClick={reset}
                className="min-h-11 rounded-xl border border-zinc-300 px-4 py-2 text-sm font-semibold hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900"
              >
                Réinitialiser
              </button>
            </div>
          </div>
          {copyStatus && (
            <p
              role="status"
              aria-live="polite"
              aria-atomic="true"
              className="mt-3 text-sm font-medium text-indigo-800 print:hidden dark:text-indigo-200"
            >
              {copyStatus}
            </p>
          )}
          <pre
            tabIndex={0}
            aria-labelledby="priority-export-title"
            className="mt-4 max-h-[36rem] overflow-auto whitespace-pre-wrap rounded-2xl bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 print:max-h-none print:overflow-visible print:bg-white print:text-black"
          >
            {assessment.markdown}
          </pre>
          <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-300">
            Aucun fichier XLS, XLSX ou CSV n’est généré. Le texte reste
            sélectionnable si le presse-papiers est indisponible.
          </p>
        </section>
      </div>
    </div>
  );
}
