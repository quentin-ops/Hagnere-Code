export const scheduleScenarioIds = [
  "favorable",
  "central",
  "prudent",
  "combinedStress",
] as const;

export type ScheduleScenarioId = (typeof scheduleScenarioIds)[number];

export type BaseScheduleScenarioId = Exclude<
  ScheduleScenarioId,
  "combinedStress"
>;

export type SchedulePlannerStatus =
  | "STOP_REQUIRED_INPUTS_UNKNOWN"
  | "STOP_INVALID_DEPENDENCY_NETWORK"
  | "CLARIFY_CAPACITY_BEFORE_CALENDAR"
  | "CALENDAR_CANDIDATE_FOR_REVIEW";

export type StressKind = "external-wait" | "internal-validation";

export type WorkingDaysInput = number | string | null;

export const MAX_WORKING_DAYS = 1_000_000;

export interface ScheduleDurations {
  favorable: WorkingDaysInput;
  central: WorkingDaysInput;
  prudent: WorkingDaysInput;
}

export interface ScheduleTask {
  id: string;
  result: string;
  owner: string;
  capacityId: string;
  dependsOn: string[];
  durations: ScheduleDurations;
  uncertainty: string;
  stress?: {
    kind: StressKind;
    extraDays: WorkingDaysInput;
  };
}

export interface SchedulePlannerInput {
  finishLine: string;
  tasks: ScheduleTask[];
  reserveDays: WorkingDaysInput;
  maxWorkingDays: WorkingDaysInput;
}

export interface ScheduledTaskResult {
  id: string;
  result: string;
  owner: string;
  capacityId: string;
  duration: number;
  startDay: number;
  finishDay: number;
  dependsOn: string[];
}

export interface ScheduleScenarioResult {
  id: ScheduleScenarioId;
  label: string;
  stressDescription: string | null;
  durationDays: number;
  reserveDays: number;
  durationWithReserveDays: number;
  determiningPathIds: string[];
  determiningPathResults: string[];
  determiningPathsIds: string[][];
  determiningPathsResults: string[][];
  equation: string;
  equations: string[];
  tasks: ScheduledTaskResult[];
}

export interface ReverseReasoningResult {
  maxWorkingDays: number;
  prudentWithReserveDays: number;
  gapDays: number;
  needsDecision: boolean;
}

export interface CapacityConflict {
  capacityId: string;
  firstTaskId: string;
  secondTaskId: string;
}

export interface SchedulePlannerAssessment {
  status: SchedulePlannerStatus;
  title: string;
  explanation: string;
  nextAction: string;
  missingInputs: string[];
  networkErrors: string[];
  capacityConflicts: CapacityConflict[];
  scenarios: ScheduleScenarioResult[];
  reverseReasoning: ReverseReasoningResult | null;
  markdown: string;
}

const scenarioLabels: Record<BaseScheduleScenarioId, string> = {
  favorable: "Favorable",
  central: "Central",
  prudent: "Prudent",
};

const WORKING_DAY_SCALE = 1_000_000;
const MAX_WORKING_DAY_UNITS = MAX_WORKING_DAYS * WORKING_DAY_SCALE;
const MAX_WORKING_DAYS_LABEL = "1 000 000";
const MAX_DETERMINING_PATHS = 1_000;

type WorkingDaysIssue = "missing" | "format" | "precision" | "maximum";

interface ParsedWorkingDays {
  units: number | null;
  issue: WorkingDaysIssue | null;
}

function cleanText(value: unknown): string {
  if (typeof value !== "string") return "";

  return value
    .trim()
    .replace(/\r\n?/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/ *\n */g, "\n")
    .replace(/\n{3,}/g, "\n\n");
}

function cleanId(value: unknown): string {
  return cleanText(value).replace(/\s+/g, "-").toLocaleLowerCase("fr-FR");
}

function parseWorkingDayUnits(value: unknown): ParsedWorkingDays {
  if (
    value === null ||
    value === undefined ||
    (typeof value === "string" && value.trim() === "")
  ) {
    return { units: null, issue: "missing" };
  }

  if (typeof value === "string") {
    const raw = value.trim();
    const match = /^(\d+)(?:\.(\d*))?$/.exec(raw);
    if (!match) return { units: null, issue: "format" };

    const whole = match[1] ?? "";
    const fraction = match[2] ?? "";
    const significantFraction = fraction.replace(/0+$/, "");
    if (significantFraction.length > 6) {
      return { units: null, issue: "precision" };
    }

    const normalizedWhole = whole.replace(/^0+(?=\d)/, "");
    const maximumWhole = String(MAX_WORKING_DAYS);
    if (
      normalizedWhole.length > maximumWhole.length ||
      (normalizedWhole.length === maximumWhole.length &&
        normalizedWhole > maximumWhole)
    ) {
      return { units: null, issue: "maximum" };
    }

    const normalizedFraction = fraction.slice(0, 6).padEnd(6, "0");
    const exactUnits =
      BigInt(normalizedWhole) * BigInt(WORKING_DAY_SCALE) +
      BigInt(normalizedFraction || "0");
    if (exactUnits > BigInt(MAX_WORKING_DAY_UNITS)) {
      return { units: null, issue: "maximum" };
    }

    const units = Number(exactUnits);
    if (!Number.isSafeInteger(units)) {
      return { units: null, issue: "maximum" };
    }
    return { units, issue: null };
  }

  if (typeof value !== "number" || !Number.isFinite(value) || value < 0) {
    return { units: null, issue: "format" };
  }
  if (value > MAX_WORKING_DAYS) {
    return { units: null, issue: "maximum" };
  }

  const scaledUnits = value * WORKING_DAY_SCALE;
  const units = Math.round(scaledUnits);
  if (
    !Number.isSafeInteger(units) ||
    units > MAX_WORKING_DAY_UNITS ||
    units / WORKING_DAY_SCALE !== value
  ) {
    return { units: null, issue: "precision" };
  }

  return { units, issue: null };
}

function workingDayUnits(value: unknown): number | null {
  return parseWorkingDayUnits(value).units;
}

function isMissingNumber(value: unknown): boolean {
  return parseWorkingDayUnits(value).issue === "missing";
}

function workingDaysValidationError(
  label: string,
  value: unknown,
): string | null {
  const issue = parseWorkingDayUnits(value).issue;
  if (issue === null || issue === "missing") return null;

  if (issue === "precision") {
    return `${label} : plus de 6 décimales significatives ; saisie refusée avant conversion`;
  }
  if (issue === "maximum") {
    return `${label} : borne technique de ${MAX_WORKING_DAYS_LABEL} jours ouvrés dépassée`;
  }
  return `${label} : utilisez un nombre positif ou nul avec un point décimal, sans exposant`;
}

function requiredWorkingDays(value: unknown, context: string): number {
  const units = workingDayUnits(value);
  if (units === null) {
    throw new Error(`Calcul non fiable pour ${context} : saisie invalide`);
  }
  return units / WORKING_DAY_SCALE;
}

function formatDays(value: number): string {
  return `${formatNumber(value)} j ouvré${value > 1 ? "s" : ""}`;
}

function formatInputDays(value: WorkingDaysInput): string {
  if (isMissingNumber(value)) return "?";
  const units = workingDayUnits(value);
  return units === null
    ? "valeur à corriger"
    : formatNumber(units / WORKING_DAY_SCALE);
}

function formatNumber(value: number): string {
  return new Intl.NumberFormat("fr-FR", {
    maximumFractionDigits: 6,
    useGrouping: false,
  }).format(value);
}

function sameDay(first: number, second: number): boolean {
  const firstUnits = workingDayUnits(first);
  return firstUnits !== null && firstUnits === workingDayUnits(second);
}

function addWorkingDays(
  first: WorkingDaysInput,
  second: WorkingDaysInput,
  context: string,
): number {
  const firstUnits = workingDayUnits(first);
  const secondUnits = workingDayUnits(second);
  if (firstUnits === null || secondUnits === null) {
    throw new Error(
      `Calcul non fiable pour ${context} : valeur hors du contrat numérique exact`,
    );
  }
  const resultUnits = firstUnits + secondUnits;
  if (
    !Number.isSafeInteger(resultUnits) ||
    resultUnits > MAX_WORKING_DAY_UNITS
  ) {
    throw new Error(
      `Calcul non fiable pour ${context} : total supérieur à la borne technique de ${MAX_WORKING_DAYS_LABEL} jours ouvrés`,
    );
  }
  return resultUnits / WORKING_DAY_SCALE;
}

export function createEmptySaasSchedule(): SchedulePlannerInput {
  return {
    finishLine: "",
    tasks: [],
    reserveDays: null,
    maxWorkingDays: null,
  };
}

export function createRelaisProExample(): SchedulePlannerInput {
  return {
    finishLine:
      "Un pilote privé peut traiter une demande fictive de bout en bout, avec accès attribués, recette signée, support préparé et retour arrière documenté.",
    reserveDays: 4,
    maxWorkingDays: 34,
    tasks: [
      {
        id: "parcours",
        result: "Parcours pilote et critères de sortie décidés",
        owner: "Responsable produit",
        capacityId: "produit-cadrage",
        dependsOn: [],
        durations: { favorable: 3, central: 5, prudent: 7 },
        uncertainty: "Nombre de cas limites à arbitrer avec le métier",
      },
      {
        id: "acces-tiers",
        result: "Accès de test au service externe ouvert",
        owner: "Équipe du service externe",
        capacityId: "tiers-acces",
        dependsOn: [],
        durations: { favorable: 2, central: 4, prudent: 6 },
        uncertainty: "Temps de réponse et correction éventuelle du dossier",
        stress: { kind: "external-wait", extraDays: 6 },
      },
      {
        id: "parcours-construit",
        result: "Parcours pilote construit et testable",
        owner: "Développeuse dédiée",
        capacityId: "dev-relaispro",
        dependsOn: ["parcours", "acces-tiers"],
        durations: { favorable: 8, central: 12, prudent: 17 },
        uncertainty: "Écarts découverts aux jonctions du parcours",
      },
      {
        id: "support-prepare",
        result: "Support du pilote et procédure de retour arrière prêts",
        owner: "Responsable opérations",
        capacityId: "operations-relaispro",
        dependsOn: ["parcours"],
        durations: { favorable: 4, central: 6, prudent: 9 },
        uncertainty: "Cas dégradés à couvrir avant l’ouverture",
      },
      {
        id: "recette",
        result: "Recette métier et contrôles internes acceptés",
        owner: "Responsable de la recette",
        capacityId: "recette-relaispro",
        dependsOn: ["parcours-construit", "support-prepare"],
        durations: { favorable: 3, central: 5, prudent: 8 },
        uncertainty: "Disponibilité des valideurs et nombre d’écarts à rejouer",
        stress: { kind: "internal-validation", extraDays: 5 },
      },
      {
        id: "pilote-ouvert",
        result: "Pilote privé ouvert selon la ligne d’arrivée",
        owner: "Développeuse dédiée",
        capacityId: "dev-relaispro",
        dependsOn: ["recette"],
        durations: { favorable: 2, central: 3, prudent: 5 },
        uncertainty: "Derniers contrôles d’ouverture et de retour arrière",
      },
    ],
  };
}

interface ValidationResult {
  input: SchedulePlannerInput;
  missingInputs: string[];
  networkErrors: string[];
}

function normalizeTask(task: ScheduleTask, index: number): ScheduleTask {
  const id = cleanId(task?.id) || `tache-${index + 1}`;
  const rawDependencies = Array.isArray(task?.dependsOn) ? task.dependsOn : [];

  return {
    id,
    result: cleanText(task?.result),
    owner: cleanText(task?.owner),
    capacityId: cleanId(task?.capacityId),
    dependsOn: rawDependencies.map(cleanId).filter(Boolean),
    durations: {
      favorable: task?.durations?.favorable ?? null,
      central: task?.durations?.central ?? null,
      prudent: task?.durations?.prudent ?? null,
    },
    uncertainty: cleanText(task?.uncertainty),
    stress: task?.stress
      ? {
          kind: task.stress.kind,
          extraDays: task.stress.extraDays ?? null,
        }
      : undefined,
  };
}

function validateInput(rawInput: SchedulePlannerInput): ValidationResult {
  const rawTasks = Array.isArray(rawInput?.tasks) ? rawInput.tasks : [];
  const input: SchedulePlannerInput = {
    finishLine: cleanText(rawInput?.finishLine),
    tasks: rawTasks.map(normalizeTask),
    reserveDays: rawInput?.reserveDays ?? null,
    maxWorkingDays: rawInput?.maxWorkingDays ?? null,
  };
  const missingInputs: string[] = [];
  const networkErrors: string[] = [];

  if (!input.finishLine) missingInputs.push("Ligne d’arrivée non renseignée");
  if (input.tasks.length === 0) missingInputs.push("Aucune tâche renseignée");
  if (isMissingNumber(input.reserveDays)) {
    missingInputs.push("Réserve explicite en jours ouvrés non renseignée");
  }
  if (isMissingNumber(input.maxWorkingDays)) {
    missingInputs.push("Maximum de jours ouvrés disponibles non renseigné");
  }

  const rawIds = rawTasks.map((task) => cleanId(task?.id));
  const duplicateIds = rawIds.filter(
    (id, index) => id && rawIds.indexOf(id) !== index,
  );
  for (const id of [...new Set(duplicateIds)]) {
    networkErrors.push(`Identifiant de tâche dupliqué : ${id}`);
  }

  for (const [index, task] of input.tasks.entries()) {
    const label = task.id || `tâche ${index + 1}`;
    if (!cleanId(rawTasks[index]?.id)) {
      missingInputs.push(`Identifiant manquant pour la tâche ${index + 1}`);
    }
    if (!task.result) missingInputs.push(`Résultat manquant pour ${label}`);
    if (!task.owner) missingInputs.push(`Responsable manquant pour ${label}`);
    if (!task.capacityId) {
      missingInputs.push(`Capacité dédiée manquante pour ${label}`);
    }
    if (!task.uncertainty) {
      missingInputs.push(`Incertitude manquante pour ${label}`);
    }

    for (const scenario of ["favorable", "central", "prudent"] as const) {
      const value = task.durations[scenario];
      const scenarioLabel =
        scenario === "central"
          ? "centrale"
          : scenario === "prudent"
            ? "prudente"
            : "favorable";
      if (isMissingNumber(value)) {
        missingInputs.push(`Durée ${scenarioLabel} manquante pour ${label}`);
      } else {
        const error = workingDaysValidationError(
          `Durée ${scenarioLabel} invalide pour ${label}`,
          value,
        );
        if (error) networkErrors.push(error);
      }
    }

    if (task.stress) {
      if (
        task.stress.kind !== "external-wait" &&
        task.stress.kind !== "internal-validation"
      ) {
        networkErrors.push(`Nature de stress invalide pour ${label}`);
      }
      if (isMissingNumber(task.stress.extraDays)) {
        missingInputs.push(`Effet du stress manquant pour ${label}`);
      } else {
        const error = workingDaysValidationError(
          `Effet du stress invalide pour ${label}`,
          task.stress.extraDays,
        );
        if (error) networkErrors.push(error);
      }
    }

    const duplicateDependencies = task.dependsOn.filter(
      (dependency, dependencyIndex) =>
        task.dependsOn.indexOf(dependency) !== dependencyIndex,
    );
    for (const dependency of [...new Set(duplicateDependencies)]) {
      networkErrors.push(
        `Dépendance dupliquée pour ${task.id} : ${dependency}`,
      );
    }
  }

  for (const [label, value] of [
    ["Réserve", input.reserveDays],
    ["Maximum disponible", input.maxWorkingDays],
  ] as const) {
    const error = workingDaysValidationError(`${label} invalide`, value);
    if (error) networkErrors.push(error);
  }

  const ids = new Set(input.tasks.map((task) => task.id));
  for (const task of input.tasks) {
    for (const dependency of task.dependsOn) {
      if (dependency === task.id) {
        networkErrors.push(`Auto-dépendance interdite : ${task.id}`);
      } else if (!ids.has(dependency)) {
        networkErrors.push(
          `Dépendance inconnue pour ${task.id} : ${dependency}`,
        );
      }
    }
  }

  return {
    input,
    missingInputs: [...new Set(missingInputs)],
    networkErrors: [...new Set(networkErrors)],
  };
}

function topologicalOrder(tasks: ScheduleTask[]): {
  order: string[];
  cycleIds: string[];
} {
  const taskById = new Map(tasks.map((task) => [task.id, task]));
  const indegree = new Map(tasks.map((task) => [task.id, 0]));
  const dependents = new Map(tasks.map((task) => [task.id, [] as string[]]));

  for (const task of tasks) {
    indegree.set(task.id, task.dependsOn.length);
    for (const dependency of task.dependsOn) {
      dependents.get(dependency)?.push(task.id);
    }
  }

  const ready = [...indegree.entries()]
    .filter(([, degree]) => degree === 0)
    .map(([id]) => id)
    .sort();
  const order: string[] = [];

  while (ready.length > 0) {
    const id = ready.shift();
    if (!id || !taskById.has(id)) continue;
    order.push(id);

    for (const dependent of (dependents.get(id) ?? []).sort()) {
      const nextDegree = (indegree.get(dependent) ?? 0) - 1;
      indegree.set(dependent, nextDegree);
      if (nextDegree === 0) {
        ready.push(dependent);
        ready.sort();
      }
    }
  }

  return {
    order,
    cycleIds: tasks
      .map((task) => task.id)
      .filter((id) => !order.includes(id))
      .sort(),
  };
}

function hasAncestor(
  possibleAncestorId: string,
  taskId: string,
  taskById: Map<string, ScheduleTask>,
  visited = new Set<string>(),
): boolean {
  if (visited.has(taskId)) return false;
  visited.add(taskId);
  const task = taskById.get(taskId);
  if (!task) return false;
  if (task.dependsOn.includes(possibleAncestorId)) return true;

  return task.dependsOn.some((dependency) =>
    hasAncestor(possibleAncestorId, dependency, taskById, visited),
  );
}

function findCapacityConflicts(tasks: ScheduleTask[]): CapacityConflict[] {
  const taskById = new Map(tasks.map((task) => [task.id, task]));
  const conflicts: CapacityConflict[] = [];

  for (let firstIndex = 0; firstIndex < tasks.length; firstIndex += 1) {
    for (
      let secondIndex = firstIndex + 1;
      secondIndex < tasks.length;
      secondIndex += 1
    ) {
      const first = tasks[firstIndex];
      const second = tasks[secondIndex];
      if (!first || !second || first.capacityId !== second.capacityId) continue;

      const explicitlyOrdered =
        hasAncestor(first.id, second.id, taskById) ||
        hasAncestor(second.id, first.id, taskById);
      if (!explicitlyOrdered) {
        conflicts.push({
          capacityId: first.capacityId,
          firstTaskId: first.id,
          secondTaskId: second.id,
        });
      }
    }
  }

  return conflicts;
}

function taskDuration(
  task: ScheduleTask,
  scenario: ScheduleScenarioId,
): number {
  if (scenario !== "combinedStress") {
    return requiredWorkingDays(
      task.durations[scenario],
      `la durée ${scenario} de ${task.id}`,
    );
  }

  return addWorkingDays(
    task.durations.prudent!,
    task.stress?.extraDays ?? 0,
    `la tâche ${task.id} en stress`,
  );
}

function stressScenarioCopy(input: SchedulePlannerInput): {
  label: string;
  description: string;
} {
  const kinds = new Set(
    input.tasks
      .filter((task) => (workingDayUnits(task.stress?.extraDays) ?? 0) > 0)
      .map((task) => task.stress?.kind)
      .filter((kind): kind is StressKind => Boolean(kind)),
  );

  if (kinds.has("external-wait") && kinds.has("internal-validation")) {
    return {
      label: "Stress combiné",
      description:
        "Attente externe et validation interne sont dégradées simultanément.",
    };
  }
  if (kinds.has("external-wait")) {
    return {
      label: "Stress déclaré — attente externe",
      description:
        "Seule l’attente externe porte un effet additionnel strictement positif.",
    };
  }
  if (kinds.has("internal-validation")) {
    return {
      label: "Stress déclaré — validation interne",
      description:
        "Seule la validation interne porte un effet additionnel strictement positif.",
    };
  }

  return {
    label: "Prudent — aucun stress additionnel",
    description:
      "Aucun effet de stress strictement positif n’est renseigné : ce rejeu est identique au prudent.",
  };
}

function pathsEndingAt(
  taskId: string,
  predecessorsById: Map<string, string[]>,
  memo: Map<string, string[][]>,
): string[][] {
  const cached = memo.get(taskId);
  if (cached) return cached;

  const predecessors = predecessorsById.get(taskId) ?? [];
  const paths: string[][] = [];
  if (predecessors.length === 0) {
    paths.push([taskId]);
  } else {
    for (const predecessor of predecessors) {
      for (const path of pathsEndingAt(predecessor, predecessorsById, memo)) {
        paths.push([...path, taskId]);
        if (paths.length > MAX_DETERMINING_PATHS) {
          throw new Error(
            `Réseau non calculable : plus de ${MAX_DETERMINING_PATHS} chemins déterminants ex aequo ; simplifiez le réseau sans en masquer un`,
          );
        }
      }
    }
  }
  memo.set(taskId, paths);
  return paths;
}

function calculateScenario(
  input: SchedulePlannerInput,
  order: string[],
  scenario: ScheduleScenarioId,
): ScheduleScenarioResult {
  const taskById = new Map(input.tasks.map((task) => [task.id, task]));
  const calculatedById = new Map<string, ScheduledTaskResult>();
  const predecessorsById = new Map<string, string[]>();

  for (const id of order) {
    const task = taskById.get(id);
    if (!task) continue;
    const dependencies = task.dependsOn
      .map((dependency) => calculatedById.get(dependency))
      .filter((value): value is ScheduledTaskResult => Boolean(value))
      .sort(
        (first, second) =>
          second.finishDay - first.finishDay ||
          first.id.localeCompare(second.id),
      );
    const startDay = dependencies[0]?.finishDay ?? 0;
    const determiningPredecessors = dependencies
      .filter((dependency) => sameDay(dependency.finishDay, startDay))
      .map((dependency) => dependency.id)
      .sort();
    const duration = taskDuration(task, scenario);
    const finishDay = addWorkingDays(
      startDay,
      duration,
      `la fin de ${task.id}`,
    );

    calculatedById.set(id, {
      id,
      result: task.result,
      owner: task.owner,
      capacityId: task.capacityId,
      duration,
      startDay,
      finishDay,
      dependsOn: [...task.dependsOn],
    });
    predecessorsById.set(id, determiningPredecessors);
  }

  const calculatedTasks = order
    .map((id) => calculatedById.get(id))
    .filter((value): value is ScheduledTaskResult => Boolean(value));
  const nonTerminalIds = new Set(input.tasks.flatMap((task) => task.dependsOn));
  const terminalTasks = calculatedTasks.filter(
    (task) => !nonTerminalIds.has(task.id),
  );
  const durationDays = terminalTasks.reduce(
    (latest, task) => Math.max(latest, task.finishDay),
    0,
  );
  const determiningEndIds = terminalTasks
    .filter((task) => sameDay(task.finishDay, durationDays))
    .map((task) => task.id)
    .sort();
  const pathMemo = new Map<string, string[][]>();
  const determiningPathsIds: string[][] = [];
  for (const id of determiningEndIds) {
    for (const path of pathsEndingAt(id, predecessorsById, pathMemo)) {
      determiningPathsIds.push(path);
      if (determiningPathsIds.length > MAX_DETERMINING_PATHS) {
        throw new Error(
          `Réseau non calculable : plus de ${MAX_DETERMINING_PATHS} chemins déterminants ex aequo ; simplifiez le réseau sans en masquer un`,
        );
      }
    }
  }
  determiningPathsIds.sort((first, second) =>
    first.join("\u0000").localeCompare(second.join("\u0000")),
  );
  const determiningPathIds = determiningPathsIds[0] ?? [];
  const determiningPathResults = determiningPathIds.map(
    (id) => taskById.get(id)?.result ?? id,
  );
  const determiningPathsResults = determiningPathsIds.map((path) =>
    path.map((id) => taskById.get(id)?.result ?? id),
  );
  const reserveDays = requiredWorkingDays(
    input.reserveDays,
    `la réserve du scénario ${scenario}`,
  );
  const durationWithReserveDays = addWorkingDays(
    durationDays,
    reserveDays,
    `le total de revue du scénario ${scenario}`,
  );
  const equations = determiningPathsIds.map((path) => {
    const pathDurations = path.map(
      (id) => calculatedById.get(id)?.duration ?? 0,
    );
    return `${pathDurations.map(formatNumber).join(" + ")} = ${formatNumber(durationDays)} jours ouvrés de chemin ; réserve séparée ${formatNumber(reserveDays)} ; total de revue ${formatNumber(durationWithReserveDays)}`;
  });
  const stressCopy =
    scenario === "combinedStress" ? stressScenarioCopy(input) : null;

  return {
    id: scenario,
    label:
      stressCopy?.label ?? scenarioLabels[scenario as BaseScheduleScenarioId],
    stressDescription: stressCopy?.description ?? null,
    durationDays,
    reserveDays,
    durationWithReserveDays,
    determiningPathIds,
    determiningPathResults,
    determiningPathsIds,
    determiningPathsResults,
    equation: equations[0] ?? "",
    equations,
    tasks: calculatedTasks,
  };
}

function statusCopy(status: SchedulePlannerStatus): {
  title: string;
  explanation: string;
  nextAction: string;
} {
  switch (status) {
    case "STOP_REQUIRED_INPUTS_UNKNOWN":
      return {
        title: "Calcul en attente : informations à compléter",
        explanation:
          "Le calcul ne remplace pas une ligne d’arrivée, un résultat, un responsable, une capacité, trois durées et une incertitude explicitement renseignés.",
        nextAction:
          "Attribuez les entrées manquantes. Conservez une valeur inconnue comme inconnue : ne la remplacez pas par zéro.",
      };
    case "STOP_INVALID_DEPENDENCY_NETWORK":
      return {
        title: "Calcul bloqué : ordre des tâches à corriger",
        explanation:
          "Une valeur non calculable, une dépendance inconnue ou dupliquée, un identifiant dupliqué ou un cycle empêche de calculer une chaîne cohérente.",
        nextAction:
          "Corrigez le réseau, puis rejouez les quatre scénarios sans conserver un ancien résultat.",
      };
    case "CLARIFY_CAPACITY_BEFORE_CALENDAR":
      return {
        title: "Disponibilités à clarifier avant le calcul",
        explanation:
          "Au moins deux tâches utilisent la même capacité sans ordre explicite. Le calcul ne suppose pas qu’une même personne ou équipe exécute deux travaux en parallèle.",
        nextAction:
          "Ajoutez l’ordre réel entre ces tâches ou attribuez des capacités réellement distinctes, puis recalculez.",
      };
    case "CALENDAR_CANDIDATE_FOR_REVIEW":
      return {
        title: "Calendrier prêt à relire",
        explanation:
          "Les entrées permettent de calculer des fins relatives et de montrer la chaîne déterminante. Le résultat n’est ni une promesse, ni une date contractuelle.",
        nextAction:
          "Faites confirmer la ligne d’arrivée, les responsables, les dépendances, les hypothèses de capacité et la décision issue du raisonnement inverse.",
      };
  }
}

function bulletList(items: string[], fallback: string): string {
  if (items.length === 0) return `- ${fallback}`;
  return items.map((item) => `- ${item}`).join("\n");
}

function buildMarkdown(
  input: SchedulePlannerInput,
  copy: ReturnType<typeof statusCopy>,
  missingInputs: string[],
  networkErrors: string[],
  capacityConflicts: CapacityConflict[],
  scenarios: ScheduleScenarioResult[],
  reverseReasoning: ReverseReasoningResult | null,
): string {
  const taskLines = input.tasks.map((task) => {
    const dependencies = task.dependsOn.length
      ? task.dependsOn.join(", ")
      : "aucune";
    const stress = task.stress
      ? ` ; stress ${
          task.stress.kind === "external-wait"
            ? "attente externe"
            : "validation interne"
        } +${formatInputDays(task.stress.extraDays)} j`
      : "";
    return `- **${task.id}** — ${task.result || "résultat à renseigner"} ; responsable ${task.owner || "à renseigner"} ; capacité ${task.capacityId || "à renseigner"} ; dépend de ${dependencies} ; F/C/P ${formatInputDays(task.durations.favorable)}/${formatInputDays(task.durations.central)}/${formatInputDays(task.durations.prudent)} j ; incertitude ${task.uncertainty || "à renseigner"}${stress}`;
  });
  const scenarioBlocks = scenarios.map((scenario) => {
    const paths = scenario.determiningPathsIds
      .map(
        (path, index) =>
          `    ${index + 1}. ${path.join(" → ")} — ${scenario.equations[index]}`,
      )
      .join("\n");
    const pathLabel =
      scenario.determiningPathsIds.length > 1
        ? `Chemins déterminants ex aequo (${scenario.determiningPathsIds.length})`
        : "Chaîne déterminante";
    const stress = scenario.stressDescription
      ? `\n- Qualification du stress : ${scenario.stressDescription}`
      : "";

    return `### ${scenario.label}\n\n- ${pathLabel} :\n${paths}${stress}\n- Fin relative du travail : J+${formatNumber(scenario.durationDays)}\n- Réserve affichée à part : ${formatDays(scenario.reserveDays)}\n- Total soumis à revue : J+${formatNumber(scenario.durationWithReserveDays)}`;
  });
  const reverseBlock = reverseReasoning
    ? `## Raisonnement inverse\n\n- Maximum disponible : ${formatDays(reverseReasoning.maxWorkingDays)}\n- Scénario prudent avec réserve séparée : ${formatDays(reverseReasoning.prudentWithReserveDays)}\n- Écart : ${formatDays(reverseReasoning.gapDays)}\n- Décision : ${
        reverseReasoning.needsDecision
          ? "l’écart impose une décision humaine sur la ligne d’arrivée, le périmètre, l’ordre, la capacité ou la date ; aucune réduction n’est inventée"
          : "aucun écart arithmétique, sous réserve de confirmer les hypothèses"
      }`
    : "## Raisonnement inverse\n\n- Calcul impossible avant de compléter les informations et de corriger l’ordre des tâches.";

  return `# Plan de calendrier SaaS — brouillon local\n\n## État du calcul\n\n**${copy.title}**\n\n${copy.explanation}\n\nProchaine action : ${copy.nextAction}\n\n## Ligne d’arrivée\n\n${input.finishLine || "Ligne d’arrivée à renseigner"}\n\n## Travail, responsables, capacités et dépendances\n\n${taskLines.length ? taskLines.join("\n") : "- Aucune tâche renseignée"}\n\n## Entrées manquantes\n\n${bulletList(missingInputs, "Aucune entrée manquante détectée")}\n\n## Erreurs de réseau\n\n${bulletList(networkErrors, "Aucune erreur de réseau détectée")}\n\n## Conflits de capacité à clarifier\n\n${bulletList(
    capacityConflicts.map(
      (conflict) =>
        `${conflict.capacityId} : ${conflict.firstTaskId} et ${conflict.secondTaskId} n’ont pas d’ordre explicite`,
    ),
    "Aucun conflit de capacité détecté",
  )}\n\n## Scénarios déterministes\n\n${
    scenarioBlocks.length
      ? scenarioBlocks.join("\n\n")
      : "Aucun scénario calculé tant que les corrections demandées ne sont pas terminées"
  }\n\n${reverseBlock}\n\n## Limites\n\n- J+N signifie N jours ouvrés écoulés depuis l’ouverture de J1, pas le numéro ordinal du jour : une tâche de 1 jour occupe J1 et atteint son jalon à J+1.\n- La réserve reste distincte des durées et ne représente aucune probabilité.\n- Les tâches réellement parallèles ne sont pas additionnées ; tous les chemins dépendants ex aequo qui déterminent la fin relative sont affichés.\n- Cet outil calcule. Une personne décide de la ligne d’arrivée, du périmètre, de la capacité et de l’engagement éventuel.`;
}

export function assessSaasSchedule(
  rawInput: SchedulePlannerInput,
): SchedulePlannerAssessment {
  const validation = validateInput(rawInput);
  const { input, missingInputs } = validation;
  const networkErrors = [...validation.networkErrors];
  let order: string[] = [];

  if (networkErrors.length === 0 && missingInputs.length === 0) {
    const sorted = topologicalOrder(input.tasks);
    order = sorted.order;
    if (sorted.cycleIds.length > 0) {
      networkErrors.push(`Cycle détecté entre : ${sorted.cycleIds.join(", ")}`);
    }
  }

  const capacityConflicts =
    missingInputs.length === 0 && networkErrors.length === 0
      ? findCapacityConflicts(input.tasks)
      : [];
  let status: SchedulePlannerStatus =
    missingInputs.length > 0
      ? "STOP_REQUIRED_INPUTS_UNKNOWN"
      : networkErrors.length > 0
        ? "STOP_INVALID_DEPENDENCY_NETWORK"
        : capacityConflicts.length > 0
          ? "CLARIFY_CAPACITY_BEFORE_CALENDAR"
          : "CALENDAR_CANDIDATE_FOR_REVIEW";
  let scenarios: ScheduleScenarioResult[] = [];
  if (status === "CALENDAR_CANDIDATE_FOR_REVIEW") {
    try {
      scenarios = scheduleScenarioIds.map((scenario) =>
        calculateScenario(input, order, scenario),
      );
    } catch (error) {
      networkErrors.push(
        error instanceof Error
          ? error.message
          : "Calcul non fiable : erreur arithmétique non identifiée",
      );
      status = "STOP_INVALID_DEPENDENCY_NETWORK";
    }
  }
  const prudent = scenarios.find((scenario) => scenario.id === "prudent");
  const prudentUnits = prudent
    ? workingDayUnits(prudent.durationWithReserveDays)
    : null;
  const maximumUnits = workingDayUnits(input.maxWorkingDays);
  const reverseReasoning =
    prudent && prudentUnits !== null && maximumUnits !== null
      ? {
          maxWorkingDays: maximumUnits / WORKING_DAY_SCALE,
          prudentWithReserveDays: prudent.durationWithReserveDays,
          gapDays: Math.max(0, prudentUnits - maximumUnits) / WORKING_DAY_SCALE,
          needsDecision: prudentUnits > maximumUnits,
        }
      : null;
  const copy = statusCopy(status);

  return {
    status,
    ...copy,
    missingInputs,
    networkErrors,
    capacityConflicts,
    scenarios,
    reverseReasoning,
    markdown: buildMarkdown(
      input,
      copy,
      missingInputs,
      networkErrors,
      capacityConflicts,
      scenarios,
      reverseReasoning,
    ),
  };
}
