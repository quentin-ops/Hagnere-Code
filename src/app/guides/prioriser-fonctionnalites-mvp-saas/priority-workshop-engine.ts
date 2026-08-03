export const MAX_REQUESTS = 5;
export const MAX_PERSON_DAYS = 10_000;
export const MAX_DECIMAL_PLACES = 3;

const PERSON_DAY_SCALE = 1_000;
const MAX_SCALED_PERSON_DAYS = MAX_PERSON_DAYS * PERSON_DAY_SCALE;

export const priorityStatuses = [
  "STOP_REQUIRED_CONTEXT_UNKNOWN",
  "STOP_CRITICAL_ROUTE_UNASSIGNED",
  "STOP_DEPENDENCY_OR_CAPACITY_UNKNOWN",
  "STOP_SELECTED_LOT_EXCEEDS_CAPACITY",
  "TESTS_REQUIRED_BEFORE_BUILD",
  "NO_BUILD_CANDIDATE",
  "NEXT_LOT_CANDIDATE_FOR_REVIEW",
] as const;

export type PriorityStatus = (typeof priorityStatuses)[number];

export const priorityRoutes = [
  "comparable",
  "incident",
  "security",
  "legal_compliance",
  "contract_commitment",
  "foundational_dependency",
  "unknown",
] as const;

export type PriorityRoute = (typeof priorityRoutes)[number];

export const humanDecisions = [
  "build",
  "test",
  "treat_first",
  "buy_integrate",
  "defer",
  "unknown",
] as const;

export type HumanDecision = (typeof humanDecisions)[number];
export type EvidenceStrength = "strong" | "medium" | "weak" | "unknown";
export type CapacityState = "known" | "unknown";

export interface PriorityRequest {
  id: string;
  rawRequest: string;
  person: string;
  situation: string;
  problem: string;
  evidence: string;
  evidenceSource: string;
  evidencePeriod: string;
  evidenceLimit: string;
  evidenceStrength: EvidenceStrength;
  expectedOutcome: string;
  successMeasure: string;
  successThreshold: string;
  route: PriorityRoute;
  owner: string;
  criticalNextAction: string;
  dependencies: string[];
  effortPersonDays: string;
  smallestTest: string;
  testMeasure: string;
  testThreshold: string;
  proposedDecision: HumanDecision;
  decisionReason: string;
  reopenEvent: string;
  selectedForLot: boolean;
}

export interface PriorityWorkshopInput {
  periodName: string;
  targetResult: string;
  reviewMeasure: string;
  capacityState: CapacityState;
  capacityPersonDays: string;
  requests: PriorityRequest[];
}

export interface PriorityAssessment {
  status: PriorityStatus;
  publicLabel: string;
  reasons: string[];
  reasonsByStatus: Record<PriorityStatus, string[]>;
  fieldErrors: Record<string, string[]>;
  criticalRequestIds: string[];
  testRequestIds: string[];
  selectedRequestIds: string[];
  selectedClosureIds: string[];
  knownSubtotalPersonDays: string;
  totalSelectedPersonDays: string | null;
  capacityPersonDays: string | null;
  remainingPersonDays: string | null;
  overrunPersonDays: string | null;
  equation: string;
  markdown: string;
}

interface ParsedPersonDays {
  kind: "known" | "unknown" | "invalid";
  scaled?: number;
  display?: string;
  reason?: string;
}

const statusLabels: Record<PriorityStatus, string> = {
  STOP_REQUIRED_CONTEXT_UNKNOWN:
    "STOP — contexte, preuve ou décision requis encore inconnu",
  STOP_CRITICAL_ROUTE_UNASSIGNED:
    "STOP — voie critique sans responsable ou prochaine action",
  STOP_DEPENDENCY_OR_CAPACITY_UNKNOWN:
    "STOP — dépendance, effort ou capacité inexploitable",
  STOP_SELECTED_LOT_EXCEEDS_CAPACITY:
    "STOP — le lot sélectionné dépasse la capacité déclarée",
  TESTS_REQUIRED_BEFORE_BUILD:
    "Tester avant de construire — test explicite requis",
  NO_BUILD_CANDIDATE:
    "Aucun lot à construire — traiter, tester, intégrer, différer ou préciser",
  NEXT_LOT_CANDIDATE_FOR_REVIEW: "Lot suivant candidat à une revue humaine",
};

export const routeLabels: Record<PriorityRoute, string> = {
  comparable: "Demande comparable",
  incident: "Incident à traiter séparément",
  security: "Sécurité à traiter séparément",
  legal_compliance: "Obligation légale ou conformité",
  contract_commitment: "Engagement contractuel",
  foundational_dependency: "Dépendance fondatrice",
  unknown: "Voie d’instruction à vérifier",
};

export const decisionLabels: Record<HumanDecision, string> = {
  build: "Construire dans le lot proposé",
  test: "Tester avant de construire",
  treat_first: "Traiter d’abord hors comparaison",
  buy_integrate: "Acheter ou intégrer",
  defer: "Différer avec événement de réouverture",
  unknown: "Décision à vérifier",
};

export const evidenceStrengthLabels: Record<EvidenceStrength, string> = {
  strong: "Forte",
  medium: "Moyenne",
  weak: "Faible / hypothèse",
  unknown: "À vérifier",
};

const criticalRoutes = new Set<PriorityRoute>([
  "incident",
  "security",
  "legal_compliance",
  "contract_commitment",
  "foundational_dependency",
]);

const comparableDecisions = [
  "build",
  "test",
  "buy_integrate",
  "defer",
  "unknown",
] as const satisfies readonly HumanDecision[];

const criticalDecisions = [
  "treat_first",
  "unknown",
] as const satisfies readonly HumanDecision[];

const capacityCountableDecisions = new Set<HumanDecision>([
  "build",
  "test",
  "buy_integrate",
]);

export function compatibleDecisionsForRoute(
  route: PriorityRoute,
): readonly HumanDecision[] {
  if (route === "comparable") return comparableDecisions;
  if (criticalRoutes.has(route)) return criticalDecisions;
  return ["unknown"];
}

export function isDecisionCompatibleWithRoute(
  route: PriorityRoute,
  decision: HumanDecision,
): boolean {
  if (route === "unknown" || decision === "unknown") return true;
  if (route === "comparable") return decision !== "treat_first";
  return criticalRoutes.has(route) && decision === "treat_first";
}

export function isCapacityCountableRequest(
  request: Pick<PriorityRequest, "route" | "proposedDecision">,
): boolean {
  return (
    request.route === "comparable" &&
    capacityCountableDecisions.has(request.proposedDecision)
  );
}

function isBlank(value: string): boolean {
  return value.trim() === "";
}

function normalizeId(value: string): string {
  return value.trim();
}

function parsePersonDays(raw: string, label: string): ParsedPersonDays {
  const value = raw.trim();
  if (value === "") return { kind: "unknown" };

  if (/[eE]/.test(value)) {
    return {
      kind: "invalid",
      reason: `${label} : notation exponentielle refusée avant conversion.`,
    };
  }
  if (value.includes(",")) {
    return {
      kind: "invalid",
      reason: `${label} : séparateur ambigu refusé ; utilisez un point.`,
    };
  }
  if (value.startsWith("-")) {
    return {
      kind: "invalid",
      reason: `${label} : une valeur négative est impossible.`,
    };
  }
  if (!/^\d+(?:\.\d+)?$/.test(value)) {
    return {
      kind: "invalid",
      reason: `${label} : saisie numérique invalide.`,
    };
  }

  const [integerPart = "0", decimalPart = ""] = value.split(".");
  if (decimalPart.length > MAX_DECIMAL_PLACES) {
    return {
      kind: "invalid",
      reason: `${label} : plus de ${MAX_DECIMAL_PLACES} décimales ; saisie refusée avant conversion.`,
    };
  }

  const canonicalInteger = integerPart.replace(/^0+(?=\d)/, "");
  const scaled =
    Number(canonicalInteger || "0") * PERSON_DAY_SCALE +
    Number((decimalPart + "000").slice(0, MAX_DECIMAL_PLACES));

  if (!Number.isSafeInteger(scaled) || scaled > MAX_SCALED_PERSON_DAYS) {
    return {
      kind: "invalid",
      reason: `${label} : valeur supérieure à la borne technique de ${MAX_PERSON_DAYS.toLocaleString("fr-FR")} jours-personne.`,
    };
  }

  return { kind: "known", scaled, display: formatScaled(scaled) };
}

function formatScaled(value: number): string {
  const sign = value < 0 ? "-" : "";
  const absolute = Math.abs(value);
  const integer = Math.trunc(absolute / PERSON_DAY_SCALE);
  const decimal = (absolute % PERSON_DAY_SCALE)
    .toString()
    .padStart(MAX_DECIMAL_PLACES, "0")
    .replace(/0+$/, "");
  return `${sign}${integer}${decimal ? `.${decimal}` : ""}`;
}

function emptyReasonMap(): Record<PriorityStatus, string[]> {
  return {
    STOP_REQUIRED_CONTEXT_UNKNOWN: [],
    STOP_CRITICAL_ROUTE_UNASSIGNED: [],
    STOP_DEPENDENCY_OR_CAPACITY_UNKNOWN: [],
    STOP_SELECTED_LOT_EXCEEDS_CAPACITY: [],
    TESTS_REQUIRED_BEFORE_BUILD: [],
    NO_BUILD_CANDIDATE: [],
    NEXT_LOT_CANDIDATE_FOR_REVIEW: [],
  };
}

function addReason(
  map: Record<PriorityStatus, string[]>,
  status: PriorityStatus,
  reason: string,
  fieldErrors?: Record<string, string[]>,
  fieldIds: readonly string[] = [],
) {
  if (!map[status].includes(reason)) map[status].push(reason);
  for (const fieldId of fieldIds) {
    const current = fieldErrors?.[fieldId] ?? [];
    if (fieldErrors && !current.includes(reason)) {
      fieldErrors[fieldId] = [...current, reason];
    }
  }
}

function requestFieldId(index: number, suffix: string): string {
  return `priority-request-${index}-${suffix}`;
}

function detectCycles(requestsById: Map<string, PriorityRequest>): string[][] {
  const state = new Map<string, "visiting" | "visited">();
  const stack: string[] = [];
  const cycles: string[][] = [];

  function visit(id: string) {
    const currentState = state.get(id);
    if (currentState === "visited") return;
    if (currentState === "visiting") {
      const start = stack.indexOf(id);
      const cycle = [...stack.slice(start), id];
      const signature = cycle.join(" → ");
      if (!cycles.some((item) => item.join(" → ") === signature)) {
        cycles.push(cycle);
      }
      return;
    }

    state.set(id, "visiting");
    stack.push(id);
    const request = requestsById.get(id);
    for (const dependency of request?.dependencies ?? []) {
      const dependencyId = normalizeId(dependency);
      if (requestsById.has(dependencyId)) visit(dependencyId);
    }
    stack.pop();
    state.set(id, "visited");
  }

  for (const id of requestsById.keys()) visit(id);
  return cycles;
}

function computeClosure(
  selectedIds: string[],
  requestsById: Map<string, PriorityRequest>,
): string[] {
  const closure = new Set<string>();

  function include(id: string) {
    if (closure.has(id)) return;
    const request = requestsById.get(id);
    if (!request) return;
    closure.add(id);
    for (const dependency of request.dependencies) {
      include(normalizeId(dependency));
    }
  }

  for (const id of selectedIds) include(id);
  return [...closure];
}

function firstStatus(
  reasonsByStatus: Record<PriorityStatus, string[]>,
): PriorityStatus {
  return (
    priorityStatuses.find((status) => reasonsByStatus[status].length > 0) ??
    "NEXT_LOT_CANDIDATE_FOR_REVIEW"
  );
}

function formatList(values: string[]): string {
  return values.length === 0 ? "aucun" : values.join(", ");
}

function formatConditionalValue(value: string, applies: boolean): string {
  const normalized = value.trim();
  if (normalized !== "") return normalized;
  return applies ? "à vérifier" : "non applicable";
}

function makeMarkdown(
  input: PriorityWorkshopInput,
  assessment: Omit<PriorityAssessment, "markdown">,
): string {
  const lines = [
    "# Atelier de priorisation SaaS — brouillon local",
    "",
    `- Statut : ${assessment.status}`,
    `- Libellé : ${assessment.publicLabel}`,
    `- Période : ${input.periodName.trim() || "à vérifier"}`,
    `- Résultat visé : ${input.targetResult.trim() || "à vérifier"}`,
    `- Mesure de revue : ${input.reviewMeasure.trim() || "à vérifier"}`,
    `- Capacité : ${assessment.capacityPersonDays ?? "inconnue"} jour(s)-personne`,
    `- Lot proposé : ${formatList(assessment.selectedRequestIds)}`,
    `- Lot avec dépendances, comptées une fois : ${formatList(assessment.selectedClosureIds)}`,
    `- Total : ${assessment.totalSelectedPersonDays ?? "inconnu"} jour(s)-personne`,
    `- Sous-total connu : ${assessment.knownSubtotalPersonDays} jour(s)-personne`,
    `- Reste : ${assessment.remainingPersonDays ?? "inconnu"} jour(s)-personne`,
    `- Équation : ${assessment.equation}`,
    "",
    "## Motifs à revoir",
    "",
    ...(assessment.reasons.length > 0
      ? assessment.reasons.map((reason) => `- ${reason}`)
      : ["- Aucun motif bloquant détecté par le moteur local."]),
    "",
    "## Demandes",
    "",
  ];

  for (const request of input.requests) {
    const id = normalizeId(request.id);
    const isCritical = criticalRoutes.has(request.route);
    const needsTestProtocol =
      request.evidenceStrength === "weak" ||
      request.proposedDecision === "test";
    const ownerIsRequired =
      isCritical ||
      request.proposedDecision === "build" ||
      assessment.selectedClosureIds.includes(id);
    lines.push(
      `### ${id || "identifiant à vérifier"}`,
      "",
      `- Demande brute : ${request.rawRequest.trim() || "à vérifier"}`,
      `- Personne et situation : ${request.person.trim() || "à vérifier"} — ${request.situation.trim() || "à vérifier"}`,
      `- Problème : ${request.problem.trim() || "à vérifier"}`,
      `- Preuve : ${request.evidence.trim() || "à vérifier"}`,
      `- Source / période / limite : ${request.evidenceSource.trim() || "à vérifier"} / ${request.evidencePeriod.trim() || "à vérifier"} / ${request.evidenceLimit.trim() || "à vérifier"}`,
      `- Résultat / mesure / seuil : ${request.expectedOutcome.trim() || "à vérifier"} / ${request.successMeasure.trim() || "à vérifier"} / ${request.successThreshold.trim() || "à vérifier"}`,
      `- Voie d’instruction : ${routeLabels[request.route]}`,
      `- Décision humaine proposée : ${decisionLabels[request.proposedDecision]}`,
      `- Motif : ${request.decisionReason.trim() || "à vérifier"}`,
      `- Responsable : ${formatConditionalValue(request.owner, ownerIsRequired)}`,
      `- Prochaine action critique : ${formatConditionalValue(request.criticalNextAction, isCritical)}`,
      `- Dépendances : ${formatList(request.dependencies.map(normalizeId).filter(Boolean))}`,
      `- Effort complet : ${request.effortPersonDays.trim() || "inconnu"} jour(s)-personne`,
      `- Test / mesure / seuil : ${formatConditionalValue(request.smallestTest, needsTestProtocol)} / ${formatConditionalValue(request.testMeasure, needsTestProtocol)} / ${formatConditionalValue(request.testThreshold, needsTestProtocol)}`,
      `- Réouverture : ${formatConditionalValue(request.reopenEvent, request.proposedDecision === "defer")}`,
      `- Sélectionné : ${request.selectedForLot ? "oui" : "non"}`,
      "",
    );
  }

  lines.push(
    "## Limites",
    "",
    "Ce document ne classe pas automatiquement les demandes et n’autorise aucun développement. Les voies critiques restent séparées. Une personne doit revoir les preuves, hypothèses, responsabilités, dépendances et la capacité avant toute décision.",
  );
  return lines.join("\n");
}

export function assessPriorityWorkshop(
  input: PriorityWorkshopInput,
): PriorityAssessment {
  const reasonsByStatus = emptyReasonMap();
  const fieldErrors: Record<string, string[]> = {};

  if (isBlank(input.periodName)) {
    addReason(
      reasonsByStatus,
      "STOP_REQUIRED_CONTEXT_UNKNOWN",
      "Nom de période manquant.",
      fieldErrors,
      ["priority-period"],
    );
  }
  if (isBlank(input.targetResult)) {
    addReason(
      reasonsByStatus,
      "STOP_REQUIRED_CONTEXT_UNKNOWN",
      "Résultat visé par le prochain lot manquant.",
      fieldErrors,
      ["priority-target-result"],
    );
  }
  if (isBlank(input.reviewMeasure)) {
    addReason(
      reasonsByStatus,
      "STOP_REQUIRED_CONTEXT_UNKNOWN",
      "Mesure de revue du lot manquante.",
      fieldErrors,
      ["priority-review-measure"],
    );
  }
  if (input.requests.length === 0) {
    addReason(
      reasonsByStatus,
      "STOP_REQUIRED_CONTEXT_UNKNOWN",
      "Ajoutez au moins une demande réelle à instruire.",
    );
  }
  if (input.requests.length > MAX_REQUESTS) {
    addReason(
      reasonsByStatus,
      "STOP_REQUIRED_CONTEXT_UNKNOWN",
      `L’atelier accepte au maximum ${MAX_REQUESTS} demandes à la fois.`,
    );
  }

  const requestsById = new Map<string, PriorityRequest>();
  const requestIndexById = new Map<string, number>();
  for (const [index, request] of input.requests.entries()) {
    const id = normalizeId(request.id);
    const label = id || `demande ${index + 1}`;
    if (id === "") {
      addReason(
        reasonsByStatus,
        "STOP_REQUIRED_CONTEXT_UNKNOWN",
        `Identifiant stable manquant pour la demande ${index + 1}.`,
        fieldErrors,
        [requestFieldId(index, "id")],
      );
    } else if (requestsById.has(id)) {
      addReason(
        reasonsByStatus,
        "STOP_DEPENDENCY_OR_CAPACITY_UNKNOWN",
        `Identifiant dupliqué : ${id}.`,
        fieldErrors,
        [
          requestFieldId(index, "id"),
          requestFieldId(requestIndexById.get(id) ?? index, "id"),
        ],
      );
    } else {
      requestsById.set(id, request);
      requestIndexById.set(id, index);
    }

    for (const [fieldLabel, value, fieldSuffix] of [
      ["demande brute", request.rawRequest, "raw-request"],
      ["personne", request.person, "person"],
      ["situation", request.situation, "situation"],
      ["problème", request.problem, "problem"],
      ["preuve", request.evidence, "evidence"],
      ["source de preuve", request.evidenceSource, "evidence-source"],
      ["période de preuve", request.evidencePeriod, "evidence-period"],
      ["limite de preuve", request.evidenceLimit, "evidence-limit"],
      ["résultat attendu", request.expectedOutcome, "outcome"],
      ["mesure de réussite", request.successMeasure, "measure"],
      ["seuil de réussite", request.successThreshold, "threshold"],
      ["motif de décision", request.decisionReason, "decision-reason"],
    ] as const) {
      if (isBlank(value)) {
        addReason(
          reasonsByStatus,
          "STOP_REQUIRED_CONTEXT_UNKNOWN",
          `${label} : ${fieldLabel} à vérifier.`,
          fieldErrors,
          [requestFieldId(index, fieldSuffix)],
        );
      }
    }
    if (request.evidenceStrength === "unknown") {
      addReason(
        reasonsByStatus,
        "STOP_REQUIRED_CONTEXT_UNKNOWN",
        `${label} : force de preuve à vérifier.`,
        fieldErrors,
        [requestFieldId(index, "evidence-strength")],
      );
    }
    if (request.route === "unknown") {
      addReason(
        reasonsByStatus,
        "STOP_REQUIRED_CONTEXT_UNKNOWN",
        `${label} : voie d’instruction à vérifier.`,
        fieldErrors,
        [requestFieldId(index, "route")],
      );
    }
    if (request.proposedDecision === "unknown") {
      addReason(
        reasonsByStatus,
        "STOP_REQUIRED_CONTEXT_UNKNOWN",
        `${label} : décision humaine proposée à vérifier.`,
        fieldErrors,
        [requestFieldId(index, "decision")],
      );
    }
    if (
      !isDecisionCompatibleWithRoute(request.route, request.proposedDecision)
    ) {
      addReason(
        reasonsByStatus,
        "STOP_REQUIRED_CONTEXT_UNKNOWN",
        `${label} : la voie d’instruction « ${routeLabels[request.route]} » est incohérente avec la décision « ${decisionLabels[request.proposedDecision]} ».`,
        fieldErrors,
        [requestFieldId(index, "route"), requestFieldId(index, "decision")],
      );
    }
    if (request.proposedDecision === "defer" && isBlank(request.reopenEvent)) {
      addReason(
        reasonsByStatus,
        "STOP_REQUIRED_CONTEXT_UNKNOWN",
        `${label} : une décision de report exige un événement observable de réouverture.`,
        fieldErrors,
        [requestFieldId(index, "reopen-event")],
      );
    }

    const enteredEffort = parsePersonDays(
      request.effortPersonDays,
      `${label} · effort complet`,
    );
    if (
      !isBlank(request.effortPersonDays) &&
      enteredEffort.kind === "invalid"
    ) {
      addReason(
        reasonsByStatus,
        "STOP_DEPENDENCY_OR_CAPACITY_UNKNOWN",
        enteredEffort.reason ?? `${label} : effort complet invalide.`,
        fieldErrors,
        [requestFieldId(index, "effort")],
      );
    }
    if (
      request.evidenceStrength === "weak" ||
      request.proposedDecision === "test"
    ) {
      const testContext =
        request.evidenceStrength === "weak"
          ? "preuve faible"
          : "décision tester";
      for (const [fieldLabel, value, fieldSuffix] of [
        ["plus petit test", request.smallestTest, "smallest-test"],
        ["mesure du test", request.testMeasure, "test-measure"],
        ["seuil du test", request.testThreshold, "test-threshold"],
      ] as const) {
        if (isBlank(value)) {
          addReason(
            reasonsByStatus,
            "STOP_REQUIRED_CONTEXT_UNKNOWN",
            `${label} : ${testContext}, ${fieldLabel} manquant.`,
            fieldErrors,
            [requestFieldId(index, fieldSuffix)],
          );
        }
      }
    }
    if (request.proposedDecision === "build") {
      if (isBlank(request.owner)) {
        addReason(
          reasonsByStatus,
          "STOP_REQUIRED_CONTEXT_UNKNOWN",
          `${label} : responsable du lot manquant.`,
          fieldErrors,
          [requestFieldId(index, "owner")],
        );
      }
      const buildEffort = parsePersonDays(
        request.effortPersonDays,
        `${label} · effort complet`,
      );
      if (buildEffort.kind !== "known") {
        addReason(
          reasonsByStatus,
          "STOP_DEPENDENCY_OR_CAPACITY_UNKNOWN",
          buildEffort.reason ?? `${label} : effort complet inconnu.`,
          fieldErrors,
          [requestFieldId(index, "effort")],
        );
      }
      if (request.evidenceStrength === "weak") {
        addReason(
          reasonsByStatus,
          "TESTS_REQUIRED_BEFORE_BUILD",
          `${label} : une preuve faible complète ouvre un test, pas une construction immédiate.`,
        );
      }
    }
    if (criticalRoutes.has(request.route)) {
      if (isBlank(request.owner)) {
        addReason(
          reasonsByStatus,
          "STOP_CRITICAL_ROUTE_UNASSIGNED",
          `${label} : voie critique sans responsable.`,
          fieldErrors,
          [requestFieldId(index, "owner")],
        );
      }
      if (isBlank(request.criticalNextAction)) {
        addReason(
          reasonsByStatus,
          "STOP_CRITICAL_ROUTE_UNASSIGNED",
          `${label} : voie critique sans prochaine action assez précise pour être planifiée.`,
          fieldErrors,
          [requestFieldId(index, "critical-action")],
        );
      }
      if (request.selectedForLot) {
        addReason(
          reasonsByStatus,
          "STOP_REQUIRED_CONTEXT_UNKNOWN",
          `${label} : une voie critique ne peut pas être sélectionnée par la comparaison ordinaire.`,
          fieldErrors,
          [requestFieldId(index, "selection")],
        );
      }
    }
    if (
      request.selectedForLot &&
      !criticalRoutes.has(request.route) &&
      !isCapacityCountableRequest(request)
    ) {
      addReason(
        reasonsByStatus,
        "STOP_REQUIRED_CONTEXT_UNKNOWN",
        `${label} : pour entrer dans le calcul de capacité, la demande doit être comparable et proposer de construire, tester ou acheter/intégrer.`,
        fieldErrors,
        [
          requestFieldId(index, "route"),
          requestFieldId(index, "decision"),
          requestFieldId(index, "selection"),
        ],
      );
    }
  }

  for (const [index, request] of input.requests.entries()) {
    const id = normalizeId(request.id) || "demande sans identifiant";
    const seenDependencies = new Set<string>();
    for (const rawDependency of request.dependencies) {
      const dependency = normalizeId(rawDependency);
      if (dependency === "") continue;
      if (seenDependencies.has(dependency)) continue;
      seenDependencies.add(dependency);
      if (dependency === normalizeId(request.id)) {
        addReason(
          reasonsByStatus,
          "STOP_DEPENDENCY_OR_CAPACITY_UNKNOWN",
          `${id} : dépendance vers elle-même.`,
          fieldErrors,
          [requestFieldId(index, "dependencies")],
        );
      } else if (!requestsById.has(dependency)) {
        addReason(
          reasonsByStatus,
          "STOP_DEPENDENCY_OR_CAPACITY_UNKNOWN",
          `${id} : dépendance inconnue ${dependency}.`,
          fieldErrors,
          [requestFieldId(index, "dependencies")],
        );
      }
    }
  }

  for (const cycle of detectCycles(requestsById)) {
    addReason(
      reasonsByStatus,
      "STOP_DEPENDENCY_OR_CAPACITY_UNKNOWN",
      `Cycle de dépendances : ${cycle.join(" → ")}.`,
      fieldErrors,
      cycle.flatMap((id) => {
        const index = requestIndexById.get(id);
        return index === undefined
          ? []
          : [requestFieldId(index, "dependencies")];
      }),
    );
  }

  const selectedRequestIds = input.requests
    .filter(
      (request) =>
        request.selectedForLot && isCapacityCountableRequest(request),
    )
    .map((request) => normalizeId(request.id))
    .filter(Boolean);
  const rawSelectedClosureIds = computeClosure(
    selectedRequestIds,
    requestsById,
  );
  const selectedClosureIds: string[] = [];
  for (const id of rawSelectedClosureIds) {
    const request = requestsById.get(id);
    if (!request) continue;
    if (isCapacityCountableRequest(request)) {
      selectedClosureIds.push(id);
    } else {
      addReason(
        reasonsByStatus,
        "STOP_DEPENDENCY_OR_CAPACITY_UNKNOWN",
        `${id} : cette dépendance nécessaire ne peut pas entrer dans le calcul de capacité ; elle doit être comparable et proposer de construire, tester ou acheter/intégrer.`,
        fieldErrors,
        (() => {
          const index = requestIndexById.get(id);
          return index === undefined
            ? []
            : [
                requestFieldId(index, "route"),
                requestFieldId(index, "decision"),
              ];
        })(),
      );
    }
  }

  for (const id of selectedClosureIds) {
    const request = requestsById.get(id);
    if (
      request &&
      request.proposedDecision !== "build" &&
      isBlank(request.owner)
    ) {
      addReason(
        reasonsByStatus,
        "STOP_REQUIRED_CONTEXT_UNKNOWN",
        `${id} : responsable de l’action du lot manquant.`,
        fieldErrors,
        (() => {
          const index = requestIndexById.get(id);
          return index === undefined ? [] : [requestFieldId(index, "owner")];
        })(),
      );
    }
  }

  let knownSubtotalScaled = 0;
  let totalKnown =
    reasonsByStatus.STOP_DEPENDENCY_OR_CAPACITY_UNKNOWN.length === 0;
  for (const id of selectedClosureIds) {
    const request = requestsById.get(id);
    if (!request) {
      totalKnown = false;
      continue;
    }
    const parsed = parsePersonDays(
      request.effortPersonDays,
      `${id} · effort complet`,
    );
    if (parsed.kind === "known") {
      knownSubtotalScaled += parsed.scaled ?? 0;
    } else {
      totalKnown = false;
      addReason(
        reasonsByStatus,
        "STOP_DEPENDENCY_OR_CAPACITY_UNKNOWN",
        parsed.reason ?? `${id} : effort complet inconnu.`,
        fieldErrors,
        (() => {
          const index = requestIndexById.get(id);
          return index === undefined ? [] : [requestFieldId(index, "effort")];
        })(),
      );
    }
  }

  const capacity =
    input.capacityState === "known"
      ? parsePersonDays(input.capacityPersonDays, "Capacité")
      : ({ kind: "unknown" } as ParsedPersonDays);
  if (input.capacityState === "unknown") {
    addReason(
      reasonsByStatus,
      "STOP_DEPENDENCY_OR_CAPACITY_UNKNOWN",
      "Capacité totale explicitement inconnue : le sous-total reste visible, le reste ne peut pas être calculé.",
      fieldErrors,
      ["priority-capacity-state"],
    );
  }
  if (input.capacityState === "known" && capacity.kind !== "known") {
    addReason(
      reasonsByStatus,
      "STOP_DEPENDENCY_OR_CAPACITY_UNKNOWN",
      capacity.reason ?? "Capacité déclarée connue mais valeur manquante.",
      fieldErrors,
      ["priority-capacity"],
    );
  }

  const totalSelectedScaled = totalKnown ? knownSubtotalScaled : null;
  const capacityScaled =
    capacity.kind === "known" ? (capacity.scaled ?? 0) : null;
  let remainingScaled: number | null = null;
  let overrunScaled: number | null = null;
  if (totalSelectedScaled !== null && capacityScaled !== null) {
    const difference = capacityScaled - totalSelectedScaled;
    if (difference < 0) {
      overrunScaled = -difference;
      addReason(
        reasonsByStatus,
        "STOP_SELECTED_LOT_EXCEEDS_CAPACITY",
        `Le lot et ses dépendances dépassent la capacité de ${formatScaled(overrunScaled)} jour(s)-personne.`,
        fieldErrors,
        selectedRequestIds.flatMap((id) => {
          const index = requestIndexById.get(id);
          return index === undefined
            ? []
            : [requestFieldId(index, "selection")];
        }),
      );
    } else {
      remainingScaled = difference;
    }
  }

  const testRequestIds = input.requests
    .filter(
      (request) =>
        request.evidenceStrength === "weak" ||
        request.proposedDecision === "test",
    )
    .map((request) => normalizeId(request.id))
    .filter(Boolean);
  if (testRequestIds.length > 0) {
    for (const id of testRequestIds) {
      const request = requestsById.get(id);
      if (
        request &&
        request.selectedForLot &&
        !isBlank(request.smallestTest) &&
        !isBlank(request.testMeasure) &&
        !isBlank(request.testThreshold)
      ) {
        addReason(
          reasonsByStatus,
          "TESTS_REQUIRED_BEFORE_BUILD",
          `${id} : test explicite requis avant une décision de construction.`,
        );
      }
    }
  }

  const validBuildCandidates = input.requests.filter(
    (request) =>
      request.route === "comparable" &&
      request.proposedDecision === "build" &&
      request.selectedForLot,
  );
  if (validBuildCandidates.length === 0) {
    addReason(
      reasonsByStatus,
      "NO_BUILD_CANDIDATE",
      "Aucune demande comparable n’est sélectionnée avec la décision humaine « construire ».",
    );
  }

  const status = firstStatus(reasonsByStatus);
  const reasons = reasonsByStatus[status];
  const knownSubtotalPersonDays = formatScaled(knownSubtotalScaled);
  const totalSelectedPersonDays =
    totalSelectedScaled === null ? null : formatScaled(totalSelectedScaled);
  const capacityPersonDays =
    capacityScaled === null ? null : formatScaled(capacityScaled);
  const remainingPersonDays =
    remainingScaled === null ? null : formatScaled(remainingScaled);
  const overrunPersonDays =
    overrunScaled === null ? null : formatScaled(overrunScaled);
  const sumExpression =
    selectedClosureIds.length === 0
      ? "aucun élément sélectionné"
      : selectedClosureIds
          .map((id) => {
            const parsed = parsePersonDays(
              requestsById.get(id)?.effortPersonDays ?? "",
              id,
            );
            return `${id} (${parsed.kind === "known" ? parsed.display : "inconnu"})`;
          })
          .join(" + ");
  const equation = `${sumExpression} = ${totalSelectedPersonDays ?? "total inconnu"} jour(s)-personne sur « ${input.periodName.trim() || "période inconnue"} » ; capacité ${capacityPersonDays ?? "inconnue"} ; reste ${remainingPersonDays ?? "inconnu"}. Inclus : éléments sélectionnés et dépendances nécessaires, chaque identifiant une fois. Exclus de ce total : toutes les voies critiques, les demandes différées, les décisions exclues du calcul de capacité et le travail non déclaré.`;

  const withoutMarkdown: Omit<PriorityAssessment, "markdown"> = {
    status,
    publicLabel: statusLabels[status],
    reasons,
    reasonsByStatus,
    fieldErrors,
    criticalRequestIds: input.requests
      .filter((request) => criticalRoutes.has(request.route))
      .map((request) => normalizeId(request.id))
      .filter(Boolean),
    testRequestIds,
    selectedRequestIds,
    selectedClosureIds,
    knownSubtotalPersonDays,
    totalSelectedPersonDays,
    capacityPersonDays,
    remainingPersonDays,
    overrunPersonDays,
    equation,
  };

  return {
    ...withoutMarkdown,
    markdown: makeMarkdown(input, withoutMarkdown),
  };
}

export function createEmptyPriorityWorkshop(): PriorityWorkshopInput {
  return {
    periodName: "",
    targetResult: "",
    reviewMeasure: "",
    capacityState: "unknown",
    capacityPersonDays: "",
    requests: [],
  };
}

function baseExampleRequests(): PriorityRequest[] {
  return [
    {
      id: "REQ-INCIDENT",
      rawRequest: "Corriger immédiatement les doubles factures signalées.",
      person: "Responsable finance d’un client pilote",
      situation: "Deux factures ont été émises pour une même échéance.",
      problem: "Le client ne peut pas rapprocher la bonne facture.",
      evidence: "Deux tickets rapprochés des identifiants de facturation.",
      evidenceSource: "Tickets support et journal de facturation fictifs",
      evidencePeriod: "Semaine du 3 août 2026",
      evidenceLimit: "Cas fictif ; cause technique non diagnostiquée.",
      evidenceStrength: "strong",
      expectedOutcome:
        "Aucune nouvelle double émission et correction des cas ouverts.",
      successMeasure: "Nombre de doubles émissions sur le périmètre contrôlé",
      successThreshold: "0 nouvelle double émission après correction",
      route: "incident",
      owner: "Lina · exploitation",
      criticalNextAction:
        "Geler les réémissions et diagnostiquer avant le 4 août.",
      dependencies: [],
      effortPersonDays: "2",
      smallestTest: "",
      testMeasure: "",
      testThreshold: "",
      proposedDecision: "treat_first",
      decisionReason:
        "Incident actif : il ne doit pas gagner ou perdre contre une fonctionnalité.",
      reopenEvent: "",
      selectedForLot: false,
    },
    {
      id: "REQ-TEST",
      rawRequest: "Ajouter un tableau de bord personnalisable.",
      person: "Responsable d’équipe chez un prospect",
      situation: "Il prépare une revue hebdomadaire dans un tableur.",
      problem:
        "Nous ignorons quelles décisions nécessitent réellement une nouvelle vue.",
      evidence: "Une demande orale isolée, sans observation d’usage.",
      evidenceSource: "Note d’entretien fictive",
      evidencePeriod: "Entretien du 31 juillet 2026",
      evidenceLimit: "Un seul interlocuteur ; aucune fréquence observée.",
      evidenceStrength: "weak",
      expectedOutcome:
        "Identifier la vue minimale qui change la revue hebdomadaire.",
      successMeasure: "Décisions correctement prises avec le prototype",
      successThreshold: "3 revues sur 3 terminées sans export parallèle",
      route: "comparable",
      owner: "Noé · produit",
      criticalNextAction: "",
      dependencies: [],
      effortPersonDays: "4",
      smallestTest:
        "Prototype de deux vues avec trois responsables d’équipe fictifs.",
      testMeasure: "Revues terminées sans tableur parallèle",
      testThreshold: "3 sur 3",
      proposedDecision: "test",
      decisionReason:
        "La demande décrit une solution, mais la preuve du problème reste faible.",
      reopenEvent: "",
      selectedForLot: false,
    },
    {
      id: "REQ-BUILD",
      rawRequest: "Valider plusieurs dossiers en une seule action contrôlée.",
      person: "Gestionnaire du client pilote",
      situation: "Il traite chaque matin une série de dossiers déjà vérifiés.",
      problem:
        "La validation unitaire répète la même action sans nouvelle information.",
      evidence: "12 séquences observées et chronométrées dans le cas fictif.",
      evidenceSource: "Observation de tâche fictive",
      evidencePeriod: "Du 27 au 31 juillet 2026",
      evidenceLimit: "Un rôle et un type de dossier seulement.",
      evidenceStrength: "strong",
      expectedOutcome:
        "Valider un lot homogène avec aperçu et résultat vérifiable.",
      successMeasure: "Lots terminés sans validation erronée dans le pilote",
      successThreshold: "10 lots sur 10, puis revue humaine",
      route: "comparable",
      owner: "Maya · produit",
      criticalNextAction: "",
      dependencies: ["REQ-INTEGRATE"],
      effortPersonDays: "6",
      smallestTest: "",
      testMeasure: "",
      testThreshold: "",
      proposedDecision: "build",
      decisionReason:
        "Problème observé, résultat mesurable, seuil et lot cohérent explicités.",
      reopenEvent: "",
      selectedForLot: true,
    },
    {
      id: "REQ-INTEGRATE",
      rawRequest: "Notifier les responsables après chaque validation groupée.",
      person: "Responsable opérationnel du client pilote",
      situation:
        "Il doit confirmer le résultat aux propriétaires des dossiers.",
      problem: "Une validation sans notification laisse le traitement ambigu.",
      evidence: "Étape présente dans les 12 séquences observées.",
      evidenceSource: "Observation de tâche fictive",
      evidencePeriod: "Du 27 au 31 juillet 2026",
      evidenceLimit: "Le canal final et ses erreurs restent à recetter.",
      evidenceStrength: "medium",
      expectedOutcome:
        "Chaque propriétaire reçoit un état compréhensible et traçable.",
      successMeasure: "Notifications reçues avec le bon résultat",
      successThreshold: "10 lots sur 10 dans le pilote",
      route: "comparable",
      owner: "Sam · intégration",
      criticalNextAction: "",
      dependencies: [],
      effortPersonDays: "3",
      smallestTest: "",
      testMeasure: "",
      testThreshold: "",
      proposedDecision: "buy_integrate",
      decisionReason:
        "Un service existant peut couvrir le canal ; ses états et erreurs restent à recetter.",
      reopenEvent: "",
      selectedForLot: false,
    },
    {
      id: "REQ-DEFER",
      rawRequest: "Permettre à chaque équipe de choisir ses couleurs.",
      person: "Administratrice d’un prospect",
      situation: "Elle souhaite rapprocher l’interface de sa charte interne.",
      problem: "Aucun blocage d’usage ou de vente n’est établi sur le pilote.",
      evidence: "Suggestion écrite sans incident ni tâche empêchée.",
      evidenceSource: "Compte rendu fictif de démonstration",
      evidencePeriod: "Démonstration du 30 juillet 2026",
      evidenceLimit:
        "Une suggestion ; accessibilité et maintenance non évaluées.",
      evidenceStrength: "medium",
      expectedOutcome:
        "Conserver une interface compréhensible sans retarder le lot utile.",
      successMeasure: "Blocages imputables à l’absence de personnalisation",
      successThreshold:
        "Réouvrir dès 2 blocages documentés sur une même période de revue",
      route: "comparable",
      owner: "Noé · produit",
      criticalNextAction: "",
      dependencies: [],
      effortPersonDays: "2",
      smallestTest: "",
      testMeasure: "",
      testThreshold: "",
      proposedDecision: "defer",
      decisionReason:
        "Aucune preuve actuelle ne justifie de l’inclure dans le prochain lot.",
      reopenEvent: "Deux blocages documentés avant une revue mensuelle.",
      selectedForLot: false,
    },
  ];
}

export function createPilotFiveRequests(): PriorityWorkshopInput {
  return {
    periodName: "Lot pilote fictif du 3 au 14 août 2026",
    targetResult:
      "Valider un groupe homogène de dossiers avec notification vérifiable.",
    reviewMeasure:
      "10 lots sur 10 terminés sans validation erronée, puis revue humaine.",
    capacityState: "known",
    capacityPersonDays: "10",
    requests: baseExampleRequests(),
  };
}

export function createPilotOverCapacity(): PriorityWorkshopInput {
  const input = createPilotFiveRequests();
  return {
    ...input,
    requests: input.requests.map((request) =>
      request.id === "REQ-BUILD"
        ? { ...request, effortPersonDays: "8" }
        : request,
    ),
  };
}

export function createPilotUnknownCapacity(): PriorityWorkshopInput {
  const input = createPilotFiveRequests();
  return {
    ...input,
    capacityState: "unknown",
    capacityPersonDays: "",
  };
}
