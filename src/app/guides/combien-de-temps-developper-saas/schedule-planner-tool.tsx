"use client";

import { useMemo, useRef, useState } from "react";
import {
  assessSaasSchedule,
  createEmptySaasSchedule,
  createRelaisProExample,
  MAX_WORKING_DAYS,
  type BaseScheduleScenarioId,
  type SchedulePlannerInput,
  type SchedulePlannerStatus,
  type ScheduleTask,
  type StressKind,
  type WorkingDaysInput,
} from "./schedule-planner-engine";

const statusClasses: Record<SchedulePlannerStatus, string> = {
  STOP_REQUIRED_INPUTS_UNKNOWN:
    "border-red-300 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950/35 dark:text-red-100",
  STOP_INVALID_DEPENDENCY_NETWORK:
    "border-red-300 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950/35 dark:text-red-100",
  CLARIFY_CAPACITY_BEFORE_CALENDAR:
    "border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-900 dark:bg-amber-950/35 dark:text-amber-100",
  CALENDAR_CANDIDATE_FOR_REVIEW:
    "border-emerald-300 bg-emerald-50 text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/35 dark:text-emerald-100",
};

const durationLabels: Record<BaseScheduleScenarioId, string> = {
  favorable: "Favorable",
  central: "Centrale",
  prudent: "Prudente",
};

interface SchedulePlannerDraft extends SchedulePlannerInput {
  taskUiIds: string[];
}

function createEmptyScheduleDraft(): SchedulePlannerDraft {
  return {
    ...createEmptySaasSchedule(),
    taskUiIds: [],
  };
}

function nextTaskId(tasks: ScheduleTask[]): string {
  let index = tasks.length + 1;
  while (tasks.some((task) => task.id === `tache-${index}`)) index += 1;
  return `tache-${index}`;
}

function emptyTask(id: string): ScheduleTask {
  return {
    id,
    result: "",
    owner: "",
    capacityId: "",
    dependsOn: [],
    durations: { favorable: null, central: null, prudent: null },
    uncertainty: "",
  };
}

function preserveRawWorkingDays(value: string): WorkingDaysInput {
  return value.trim() === "" ? null : value;
}

function formatWorkingDays(value: number): string {
  return new Intl.NumberFormat("fr-FR", {
    maximumFractionDigits: 6,
    useGrouping: false,
  }).format(value);
}

function NumberField({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: WorkingDaysInput;
  onChange: (value: WorkingDaysInput) => void;
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="block text-xs font-semibold text-zinc-700 dark:text-zinc-200">
        {label}
      </span>
      <input
        id={id}
        type="number"
        min="0"
        max={MAX_WORKING_DAYS}
        step="0.000001"
        inputMode="decimal"
        aria-describedby="schedule-number-rules"
        value={value ?? ""}
        onChange={(event) =>
          onChange(preserveRawWorkingDays(event.target.value))
        }
        className="mt-1.5 min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 motion-reduce:transition-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
      />
    </label>
  );
}

export function SaasSchedulePlannerTool() {
  const nextTaskUiId = useRef(0);
  const [draft, setDraft] = useState<SchedulePlannerDraft>(
    createEmptyScheduleDraft,
  );
  const [copyStatus, setCopyStatus] = useState("");
  const assessment = useMemo(() => assessSaasSchedule(draft), [draft]);

  function updateTask(index: number, update: Partial<ScheduleTask>) {
    setDraft((current) => ({
      ...current,
      tasks: current.tasks.map((task, taskIndex) =>
        taskIndex === index ? { ...task, ...update } : task,
      ),
    }));
    setCopyStatus("");
  }

  function updateDuration(
    index: number,
    scenario: BaseScheduleScenarioId,
    value: WorkingDaysInput,
  ) {
    setDraft((current) => ({
      ...current,
      tasks: current.tasks.map((task, taskIndex) =>
        taskIndex === index
          ? {
              ...task,
              durations: { ...task.durations, [scenario]: value },
            }
          : task,
      ),
    }));
    setCopyStatus("");
  }

  function addTask() {
    nextTaskUiId.current += 1;
    const taskUiId = `schedule-task-row-${nextTaskUiId.current}`;
    setDraft((current) => ({
      ...current,
      tasks: [...current.tasks, emptyTask(nextTaskId(current.tasks))],
      taskUiIds: [...current.taskUiIds, taskUiId],
    }));
    setCopyStatus("");
  }

  function removeTask(index: number) {
    setDraft((current) => ({
      ...current,
      tasks: current.tasks.filter((_, taskIndex) => taskIndex !== index),
      taskUiIds: current.taskUiIds.filter(
        (_, taskIndex) => taskIndex !== index,
      ),
    }));
    setCopyStatus("");
  }

  function setStress(index: number, kind: StressKind | "") {
    updateTask(index, {
      stress: kind ? { kind, extraDays: null } : undefined,
    });
  }

  function loadExample() {
    const example = createRelaisProExample();
    const taskUiIds = example.tasks.map(() => {
      nextTaskUiId.current += 1;
      return `schedule-task-row-${nextTaskUiId.current}`;
    });
    setDraft({ ...example, taskUiIds });
    setCopyStatus(
      "Exemple fictif RelaisPro chargé. Remplacez chaque hypothèse avant une décision réelle.",
    );
  }

  function reset() {
    setDraft(createEmptyScheduleDraft());
    setCopyStatus("Plan réinitialisé. Le statut revient au STOP.");
  }

  async function copyMarkdown() {
    try {
      await navigator.clipboard.writeText(assessment.markdown);
      setCopyStatus(
        "Brouillon Markdown copié. Collez-le dans votre document de revue.",
      );
    } catch {
      setCopyStatus(
        "La copie automatique a échoué. Sélectionnez le Markdown affiché ci-dessous.",
      );
    }
  }

  return (
    <div className="not-prose my-8 overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="border-b border-zinc-200 bg-zinc-950 px-5 py-6 text-white dark:border-zinc-800 sm:px-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
          Planificateur local · calcul déterministe · aucun score
        </p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight">
          Tester l’ordre réel des travaux en jours ouvrés
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-300">
          Vos saisies restent locales à l’outil : aucun service n’est contacté,
          rien n’est stocké et aucune promesse ni date contractuelle n’est
          produite. Utilisez des libellés génériques sans donnée sensible. J+N
          désigne N jours ouvrés écoulés depuis l’ouverture de J1 : une tâche de
          1 jour occupe J1 et atteint son jalon à J+1.
        </p>
        <p
          id="schedule-number-rules"
          className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-300"
        >
          Chaque chaîne saisie est contrôlée avant conversion : utilisez le
          point décimal (par exemple 0.5), sans exposant, avec au plus 6
          décimales significatives et au maximum 1 000 000 jours ouvrés. Une
          saisie ou une somme hors borne laisse tous les scénarios en STOP,
          jamais dans un résultat arrondi ou partiel.
        </p>
      </div>

      <div className="space-y-9 px-5 py-6 sm:px-7 sm:py-8">
        <section aria-labelledby="schedule-finish-heading">
          <h4
            id="schedule-finish-heading"
            className="text-lg font-semibold text-zinc-950 dark:text-white"
          >
            1. Fixer ce qui doit être prêt et le temps disponible
          </h4>
          <label htmlFor="schedule-finish-line" className="mt-4 block">
            <span className="block text-sm font-semibold text-zinc-900 dark:text-white">
              Ligne d’arrivée observable
            </span>
            <span className="mt-1 block text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
              Nommez le résultat livré, la population concernée, les preuves et
              les conditions d’exploitation incluses.
            </span>
            <textarea
              id="schedule-finish-line"
              rows={4}
              value={draft.finishLine}
              onChange={(event) => {
                setDraft((current) => ({
                  ...current,
                  finishLine: event.target.value,
                }));
                setCopyStatus("");
              }}
              placeholder="STOP tant que prototype, pilote privé, mise en production ou service soutenable ne sont pas distingués"
              className="mt-2 w-full resize-y rounded-xl border border-zinc-300 bg-white px-3 py-3 text-sm leading-relaxed text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 motion-reduce:transition-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:placeholder:text-zinc-500"
            />
          </label>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <NumberField
              id="schedule-reserve"
              label="Réserve explicite, séparée des durées (jours ouvrés)"
              value={draft.reserveDays}
              onChange={(reserveDays) => {
                setDraft((current) => ({ ...current, reserveDays }));
                setCopyStatus("");
              }}
            />
            <NumberField
              id="schedule-maximum"
              label="Maximum réellement disponible (jours ouvrés)"
              value={draft.maxWorkingDays}
              onChange={(maxWorkingDays) => {
                setDraft((current) => ({ ...current, maxWorkingDays }));
                setCopyStatus("");
              }}
            />
          </div>
        </section>

        <section aria-labelledby="schedule-tasks-heading">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h4
                id="schedule-tasks-heading"
                className="text-lg font-semibold text-zinc-950 dark:text-white"
              >
                2. Décrire les résultats, les personnes disponibles et l’ordre
                des tâches
              </h4>
              <p className="mt-1 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                Une capacité représente la personne ou l’équipe réellement
                disponible. Deux tâches portant le même identifiant de capacité
                exigent un ordre de dépendance explicite.
              </p>
            </div>
            <button
              type="button"
              onClick={addTask}
              className="min-h-11 rounded-xl border border-indigo-300 bg-indigo-50 px-4 py-2.5 text-sm font-semibold text-indigo-800 transition hover:border-indigo-500 motion-reduce:transition-none dark:border-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-200"
            >
              Ajouter une tâche
            </button>
          </div>

          {draft.tasks.length === 0 ? (
            <p className="mt-5 rounded-2xl border border-dashed border-red-300 bg-red-50 p-4 text-sm text-red-900 dark:border-red-900 dark:bg-red-950/30 dark:text-red-100">
              STOP — ajoutez au moins une tâche, son résultat et son
              responsable.
            </p>
          ) : (
            <div className="mt-5 space-y-5">
              {draft.tasks.map((task, index) => (
                <fieldset
                  key={draft.taskUiIds[index]}
                  data-task-index={index}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50/60 p-4 dark:border-zinc-800 dark:bg-zinc-900/45 sm:p-5"
                >
                  <legend className="px-2 text-sm font-semibold text-zinc-900 dark:text-white">
                    Tâche {index + 1} · {task.id || "identifiant à préciser"}
                  </legend>

                  <div className="mt-2 grid gap-4 md:grid-cols-2">
                    <label htmlFor={`schedule-task-${index}-id`}>
                      <span className="block text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                        Identifiant stable
                      </span>
                      <input
                        id={`schedule-task-${index}-id`}
                        value={task.id}
                        onChange={(event) =>
                          updateTask(index, { id: event.target.value })
                        }
                        className="mt-1.5 min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                      />
                    </label>
                    <label htmlFor={`schedule-task-${index}-result`}>
                      <span className="block text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                        Résultat observable
                      </span>
                      <input
                        id={`schedule-task-${index}-result`}
                        value={task.result}
                        onChange={(event) =>
                          updateTask(index, { result: event.target.value })
                        }
                        className="mt-1.5 min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                      />
                    </label>
                    <label htmlFor={`schedule-task-${index}-owner`}>
                      <span className="block text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                        Responsable du résultat
                      </span>
                      <input
                        id={`schedule-task-${index}-owner`}
                        value={task.owner}
                        onChange={(event) =>
                          updateTask(index, { owner: event.target.value })
                        }
                        className="mt-1.5 min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                      />
                    </label>
                    <label htmlFor={`schedule-task-${index}-capacity`}>
                      <span className="block text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                        Identifiant de la personne ou équipe disponible
                      </span>
                      <input
                        id={`schedule-task-${index}-capacity`}
                        value={task.capacityId}
                        onChange={(event) =>
                          updateTask(index, { capacityId: event.target.value })
                        }
                        className="mt-1.5 min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                      />
                    </label>
                    <label
                      htmlFor={`schedule-task-${index}-dependencies`}
                      className="md:col-span-2"
                    >
                      <span className="block text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                        Dépend de — identifiants séparés par des virgules
                      </span>
                      <span className="mt-1 block text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                        Renommer ou retirer une tâche ne réécrit pas ces liens :
                        toute référence devenue inconnue déclenche un STOP.
                      </span>
                      <input
                        id={`schedule-task-${index}-dependencies`}
                        value={task.dependsOn.join(", ")}
                        onChange={(event) =>
                          updateTask(index, {
                            dependsOn: event.target.value
                              .split(",")
                              .map((value) => value.trim())
                              .filter(Boolean),
                          })
                        }
                        placeholder="Laisser vide seulement si la tâche peut réellement commencer à J1"
                        className="mt-1.5 min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                      />
                    </label>
                  </div>

                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    {(
                      Object.keys(durationLabels) as BaseScheduleScenarioId[]
                    ).map((scenario) => (
                      <NumberField
                        key={scenario}
                        id={`schedule-task-${index}-${scenario}`}
                        label={`${durationLabels[scenario]} (jours ouvrés)`}
                        value={task.durations[scenario]}
                        onChange={(value) =>
                          updateDuration(index, scenario, value)
                        }
                      />
                    ))}
                  </div>

                  <label
                    htmlFor={`schedule-task-${index}-uncertainty`}
                    className="mt-4 block"
                  >
                    <span className="block text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                      Ce qui explique l’écart entre les trois durées
                    </span>
                    <textarea
                      id={`schedule-task-${index}-uncertainty`}
                      rows={2}
                      value={task.uncertainty}
                      onChange={(event) =>
                        updateTask(index, { uncertainty: event.target.value })
                      }
                      className="mt-1.5 w-full resize-y rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                    />
                  </label>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <label htmlFor={`schedule-task-${index}-stress-kind`}>
                      <span className="block text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                        Facteur de stress éventuel
                      </span>
                      <select
                        id={`schedule-task-${index}-stress-kind`}
                        value={task.stress?.kind ?? ""}
                        onChange={(event) =>
                          setStress(
                            index,
                            event.target.value as StressKind | "",
                          )
                        }
                        className="mt-1.5 min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                      >
                        <option value="">Aucun effet additionnel</option>
                        <option value="external-wait">Attente externe</option>
                        <option value="internal-validation">
                          Validation interne
                        </option>
                      </select>
                    </label>
                    {task.stress && (
                      <NumberField
                        id={`schedule-task-${index}-stress-days`}
                        label="Jours ouvrés additionnels en stress"
                        value={task.stress.extraDays}
                        onChange={(extraDays) =>
                          updateTask(index, {
                            stress: { ...task.stress!, extraDays },
                          })
                        }
                      />
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => removeTask(index)}
                    className="mt-5 min-h-11 rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-700 transition hover:border-red-400 hover:text-red-700 motion-reduce:transition-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200"
                  >
                    Retirer cette tâche
                  </button>
                </fieldset>
              ))}
            </div>
          )}
        </section>

        <section aria-labelledby="schedule-result-heading">
          <h4
            id="schedule-result-heading"
            className="text-lg font-semibold text-zinc-950 dark:text-white"
          >
            3. Lire le statut avant de regarder les scénarios
          </h4>
          <div
            className={`mt-4 rounded-2xl border p-4 sm:p-5 ${statusClasses[assessment.status]}`}
          >
            <div role="status" aria-live="polite" aria-atomic="true">
              <p className="text-xs font-bold uppercase tracking-[0.14em]">
                {assessment.status}
              </p>
              <p className="mt-2 text-base font-semibold">{assessment.title}</p>
              <p className="mt-1 text-sm leading-relaxed">
                {assessment.explanation}
              </p>
            </div>
            <p className="mt-3 text-sm leading-relaxed">
              <strong>Prochaine action :</strong> {assessment.nextAction}
            </p>

            {assessment.missingInputs.length > 0 && (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                {assessment.missingInputs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {assessment.networkErrors.length > 0 && (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                {assessment.networkErrors.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {assessment.capacityConflicts.length > 0 && (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                {assessment.capacityConflicts.map((conflict) => (
                  <li
                    key={`${conflict.capacityId}-${conflict.firstTaskId}-${conflict.secondTaskId}`}
                  >
                    {conflict.capacityId} : {conflict.firstTaskId} et{" "}
                    {conflict.secondTaskId} sans ordre explicite
                  </li>
                ))}
              </ul>
            )}
          </div>

          {assessment.scenarios.length > 0 && (
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {assessment.scenarios.map((scenario) => (
                <article
                  key={scenario.id}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/60"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-indigo-700 dark:text-indigo-300">
                    {scenario.label}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-zinc-950 dark:text-white">
                    J+{formatWorkingDays(scenario.durationDays)}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                    Réserve séparée : {formatWorkingDays(scenario.reserveDays)}{" "}
                    j · total de revue : J+
                    {formatWorkingDays(scenario.durationWithReserveDays)}
                  </p>
                  {scenario.stressDescription && (
                    <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                      {scenario.stressDescription}
                    </p>
                  )}
                  <div className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
                    {scenario.determiningPathsIds.length > 1 && (
                      <p className="font-semibold">
                        {scenario.determiningPathsIds.length} chemins
                        déterminants ex aequo
                      </p>
                    )}
                    {scenario.determiningPathsIds.map((path, pathIndex) => (
                      <div key={path.join("→")}>
                        <p>{path.join(" → ")}</p>
                        <p className="mt-1 font-mono text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                          {scenario.equations[pathIndex]}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          )}

          {assessment.reverseReasoning && (
            <div className="mt-5 rounded-2xl border border-indigo-200 bg-indigo-50/70 p-4 text-sm text-indigo-950 dark:border-indigo-900 dark:bg-indigo-950/30 dark:text-indigo-100">
              <p className="font-semibold">Raisonnement inverse</p>
              <p className="mt-1 leading-relaxed">
                Maximum disponible :{" "}
                {formatWorkingDays(assessment.reverseReasoning.maxWorkingDays)}{" "}
                j. Prudent avec réserve séparée :{" "}
                {formatWorkingDays(
                  assessment.reverseReasoning.prudentWithReserveDays,
                )}{" "}
                j. Écart :{" "}
                <strong>
                  {formatWorkingDays(assessment.reverseReasoning.gapDays)} j
                </strong>
                .
                {assessment.reverseReasoning.needsDecision
                  ? " Cet écart appelle une décision humaine ; l’outil n’invente aucune réduction."
                  : " Aucun écart arithmétique, sous réserve de confirmer les hypothèses."}
              </p>
            </div>
          )}
        </section>

        <section aria-labelledby="schedule-markdown-heading">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h4
                id="schedule-markdown-heading"
                className="text-lg font-semibold text-zinc-950 dark:text-white"
              >
                4. Copier le brouillon pour le faire relire
              </h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                Le texte reste sélectionnable. Aucun fichier n’est généré.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={loadExample}
                className="min-h-11 rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-800 transition hover:border-indigo-400 motion-reduce:transition-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
              >
                Charger l’exemple fictif
              </button>
              <button
                type="button"
                onClick={reset}
                className="min-h-11 rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-800 transition hover:border-indigo-400 motion-reduce:transition-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
              >
                Réinitialiser
              </button>
              <button
                type="button"
                onClick={copyMarkdown}
                className="min-h-11 rounded-xl bg-zinc-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-800 motion-reduce:transition-none dark:bg-white dark:text-zinc-950"
              >
                Copier le Markdown
              </button>
            </div>
          </div>

          {copyStatus && (
            <p
              role="status"
              aria-live="polite"
              aria-atomic="true"
              className="mt-3 text-sm text-zinc-700 dark:text-zinc-200"
            >
              {copyStatus}
            </p>
          )}
          <pre
            aria-label="Plan de calendrier SaaS généré en Markdown"
            tabIndex={0}
            className="mt-4 max-h-[34rem] overflow-auto whitespace-pre-wrap rounded-2xl border border-zinc-200 bg-zinc-950 p-4 font-mono text-xs leading-relaxed text-zinc-100 dark:border-zinc-800 sm:p-5"
          >
            {assessment.markdown}
          </pre>
        </section>
      </div>
    </div>
  );
}
