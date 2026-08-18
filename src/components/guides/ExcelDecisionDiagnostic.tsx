"use client";

import { useEffect, useMemo, useRef, useState, type ChangeEvent } from "react";
import {
  Check,
  ClipboardCheck,
  Download,
  Printer,
  RotateCcw,
  Save,
  ShieldCheck,
  Trash2,
  Upload,
} from "lucide-react";
import { copyTextToClipboard } from "@/lib/clipboard";
import {
  EXCEL_COST_FIELDS,
  EXCEL_COST_FORMULA,
  EXCEL_CURRENCIES,
  EXCEL_DECISION_DRAFT_MAX_BYTES,
  EXCEL_DECISION_DRAFT_STORAGE_KEY,
  EXCEL_DIAGNOSTIC_VERSION,
  EXCEL_PATHWAY_IDS,
  EXCEL_PATHWAYS,
  EXCEL_SCENARIO_IDS,
  EXCEL_SCENARIOS,
  EXCEL_SOURCE_VERIFIED_ON,
  EXCEL_SOURCE_VERIFIED_ON_FR,
  EXCEL_TEST_OPERATIONS,
  buildExcelDecisionReport,
  changeExcelPlatformPlan,
  changeExcelPlatformProduct,
  changeExcelPlatformType,
  createExcelCandidateDossiers,
  createExcelDecisionDraft,
  evaluateExcelComparison,
  getExcelCostUnit,
  isExcelOperationApplicable,
  parseExcelDecisionDraft,
  serializeExcelDecisionDraft,
  type ExcelCandidateDossier,
  type ExcelConditionalOperationId,
  type ExcelCostBasis,
  type ExcelCostInputs,
  type ExcelCurrency,
  type ExcelEvidenceLevel,
  type ExcelOperationId,
  type ExcelOperationStatus,
  type ExcelPathwayId,
  type ExcelPlatformType,
  type ExcelScenarioId,
  type ExcelSharedReadiness,
} from "@/lib/excel-decision-diagnostic";
import {
  formatExcelLocalIsoDate,
  millisecondsUntilNextExcelLocalMidnight,
} from "@/lib/excel-local-date";
import { trackFunnelEvent } from "@/lib/funnel-analytics";

const STATUS_OPTIONS: Array<{
  value: Exclude<ExcelOperationStatus, "not_applicable">;
  label: string;
}> = [
  { value: "unknown", label: "Non testé" },
  { value: "pass", label: "Réussi" },
  { value: "fail", label: "Échec" },
];

const EVIDENCE_OPTIONS: Array<{
  value: ExcelEvidenceLevel;
  label: string;
}> = [
  { value: "declared", label: "Déclaré" },
  { value: "documented", label: "Documenté" },
  { value: "verified", label: "Vérifié" },
];

const PLATFORM_OPTIONS: Array<{
  value: ExcelPlatformType;
  label: string;
}> = [
  { value: "power_apps", label: "Microsoft Power Apps" },
  { value: "appsheet", label: "Google AppSheet" },
  { value: "airtable", label: "Airtable" },
  { value: "other", label: "Autre produit" },
];

const BOUND_FIELDS: Array<{
  key: "xMin" | "xMax" | "iMin" | "iMax";
  label: string;
}> = [
  { key: "xMin", label: "X minimum" },
  { key: "xMax", label: "X maximum" },
  { key: "iMin", label: "I minimum" },
  { key: "iMax", label: "I maximum" },
];

const READINESS_ITEMS: Array<{
  key: keyof Pick<
    ExcelSharedReadiness,
    "processStable" | "dataReady" | "ownerAndDeputyNamed" | "benefitMeasured"
  >;
  label: string;
  help: string;
}> = [
  {
    key: "processStable",
    label: "Processus et exceptions stabilisés",
    help: "Le cas normal, les refus et la procédure temporaire en cas de panne sont écrits.",
  },
  {
    key: "dataReady",
    label: "Données et jeu d’essai prêts",
    help: "Identifiants, doublons, règles et résultats sont reproductibles.",
  },
  {
    key: "ownerAndDeputyNamed",
    label: "Propriétaire et suppléant nommés",
    help: "Deux personnes savent administrer, restaurer et exporter.",
  },
  {
    key: "benefitMeasured",
    label: "Bénéfice mesuré sur dix jours ouvrés",
    help: "Temps, erreurs, attentes et incidents observés pendant deux semaines.",
  },
];

const INITIAL_READINESS: ExcelSharedReadiness = {
  processStable: false,
  dataReady: false,
  ownerAndDeputyNamed: false,
  benefitMeasured: false,
  reference: "",
  evidenceDate: "",
};

const verdictStyles = {
  launch:
    "border-emerald-300 bg-emerald-50 text-emerald-950 dark:border-emerald-800 dark:bg-emerald-950/35 dark:text-emerald-100",
  do_not_invest:
    "border-blue-300 bg-blue-50 text-blue-950 dark:border-blue-800 dark:bg-blue-950/35 dark:text-blue-100",
  report:
    "border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-800 dark:bg-amber-950/35 dark:text-amber-100",
  stop: "border-rose-300 bg-rose-50 text-rose-950 dark:border-rose-800 dark:bg-rose-950/35 dark:text-rose-100",
};

const candidateStyles = {
  eligible:
    "border-emerald-300 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/25",
  report:
    "border-amber-300 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/25",
  stop: "border-rose-300 bg-rose-50 dark:border-rose-800 dark:bg-rose-950/25",
};

function numberInputValue(value: number | undefined): number | "" {
  return value !== undefined && Number.isFinite(value) ? value : "";
}

function isConditionalOperation(
  id: ExcelOperationId,
): id is ExcelConditionalOperationId {
  return id === 4 || id === 5 || id === 6;
}

function isExcelDiagnosticDirty(
  scenarioId: ExcelScenarioId,
  readiness: ExcelSharedReadiness,
  dossiers: Record<ExcelPathwayId, ExcelCandidateDossier>,
  decisionDate: string,
): boolean {
  if (decisionDate.trim() !== "") return true;
  if (JSON.stringify(readiness) !== JSON.stringify(INITIAL_READINESS)) {
    return true;
  }
  return (
    JSON.stringify(dossiers) !==
    JSON.stringify(createExcelCandidateDossiers(EXCEL_SCENARIOS[scenarioId]))
  );
}

function excelDraftFingerprint(
  scenarioId: ExcelScenarioId,
  activePathway: ExcelPathwayId,
  readiness: ExcelSharedReadiness,
  dossiers: Record<ExcelPathwayId, ExcelCandidateDossier>,
  decisionDate: string,
): string {
  return serializeExcelDecisionDraft(
    createExcelDecisionDraft(
      {
        scenarioId,
        activePathway,
        readiness,
        dossiers,
        decisionDate,
      },
      "2000-01-01T00:00:00.000Z",
    ),
  );
}

export function ExcelDecisionDiagnostic() {
  const [scenarioId, setScenarioId] = useState<ExcelScenarioId>("central");
  const [pendingScenarioId, setPendingScenarioId] =
    useState<ExcelScenarioId | null>(null);
  const [pendingReset, setPendingReset] = useState(false);
  const [activePathway, setActivePathway] =
    useState<ExcelPathwayId>("keep_excel");
  const [dossiers, setDossiers] = useState(() =>
    createExcelCandidateDossiers(EXCEL_SCENARIOS.central),
  );
  const [readiness, setReadiness] =
    useState<ExcelSharedReadiness>(INITIAL_READINESS);
  const [decisionDate, setDecisionDate] = useState("");
  const [currentDate, setCurrentDate] = useState(formatExcelLocalIsoDate);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">(
    "idle",
  );
  const [storedDraftPresent, setStoredDraftPresent] = useState(false);
  const [storedDraftAvailable, setStoredDraftAvailable] = useState(false);
  const [draftStatus, setDraftStatus] = useState<
    | "idle"
    | "available"
    | "saved"
    | "restored"
    | "downloaded"
    | "imported"
    | "cleared"
    | "invalid"
    | "too-large"
    | "error"
    | "modified"
  >("idle");
  const [lastDraftFingerprint, setLastDraftFingerprint] = useState<
    string | null
  >(null);
  const importInputRef = useRef<HTMLInputElement>(null);
  const draftInteractionStartedRef = useRef(false);

  useEffect(() => {
    let midnightTimer: number | undefined;

    function refreshCurrentDate() {
      setCurrentDate(formatExcelLocalIsoDate());
    }

    function scheduleNextMidnight() {
      if (midnightTimer !== undefined) {
        window.clearTimeout(midnightTimer);
      }
      const delay = millisecondsUntilNextExcelLocalMidnight() + 100;
      midnightTimer = window.setTimeout(() => {
        refreshCurrentDate();
        scheduleNextMidnight();
      }, delay);
    }

    function handleVisibilityChange() {
      if (document.visibilityState === "visible") {
        refreshCurrentDate();
        scheduleNextMidnight();
      }
    }

    function handleWindowFocus() {
      refreshCurrentDate();
      scheduleNextMidnight();
    }

    scheduleNextMidnight();
    window.addEventListener("focus", handleWindowFocus);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (midnightTimer !== undefined) {
        window.clearTimeout(midnightTimer);
      }
      window.removeEventListener("focus", handleWindowFocus);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (draftInteractionStartedRef.current) return;
      try {
        const raw = window.localStorage.getItem(
          EXCEL_DECISION_DRAFT_STORAGE_KEY,
        );
        const available = raw !== null && parseExcelDecisionDraft(raw) !== null;
        setStoredDraftPresent(raw !== null);
        setStoredDraftAvailable(available);
        if (raw !== null) {
          setDraftStatus(available ? "available" : "invalid");
        }
      } catch {
        setDraftStatus("error");
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const scenario = EXCEL_SCENARIOS[scenarioId];
  const diagnosticIsDirty = useMemo(
    () => isExcelDiagnosticDirty(scenarioId, readiness, dossiers, decisionDate),
    [scenarioId, readiness, dossiers, decisionDate],
  );
  const comparisonInput = useMemo(
    () => ({
      scenario,
      readiness,
      dossiers,
      decisionDate,
      currentDate,
    }),
    [scenario, readiness, dossiers, decisionDate, currentDate],
  );
  const comparison = useMemo(
    () => evaluateExcelComparison(comparisonInput),
    [comparisonInput],
  );
  const reportText = useMemo(
    () => buildExcelDecisionReport(comparisonInput, comparison),
    [comparisonInput, comparison],
  );
  const activeDossier = dossiers[activePathway];
  const activeResult = comparison.candidateResults[activePathway];
  const preparationCompleted = [
    readiness.processStable,
    readiness.dataReady,
    readiness.ownerAndDeputyNamed,
    readiness.benefitMeasured,
    readiness.reference.trim() !== "",
    readiness.evidenceDate !== "",
    decisionDate !== "",
  ].filter(Boolean).length;
  const completedDossiers = EXCEL_PATHWAY_IDS.filter((pathway) => {
    const candidate = comparison.candidateResults[pathway];
    return (
      candidate !== undefined &&
      candidate.unknownOperations.length === 0 &&
      candidate.missingEvidence.length === 0 &&
      candidate.missingReadiness.length === 0 &&
      candidate.invalidInputs.length === 0
    );
  }).length;
  const currentDraftFingerprint = useMemo(
    () =>
      excelDraftFingerprint(
        scenarioId,
        activePathway,
        readiness,
        dossiers,
        decisionDate,
      ),
    [scenarioId, activePathway, readiness, dossiers, decisionDate],
  );

  function updateDossier(
    pathway: ExcelPathwayId,
    updater: (current: ExcelCandidateDossier) => ExcelCandidateDossier,
  ) {
    setDossiers((current) => ({
      ...current,
      [pathway]: updater(current[pathway]),
    }));
    setCopyStatus("idle");
  }

  function updateActiveDossier(
    updater: (current: ExcelCandidateDossier) => ExcelCandidateDossier,
  ) {
    updateDossier(activePathway, updater);
  }

  function reset() {
    const initialScenario = EXCEL_SCENARIOS.central;
    setScenarioId("central");
    setActivePathway("keep_excel");
    setDossiers(createExcelCandidateDossiers(initialScenario));
    setReadiness(INITIAL_READINESS);
    setDecisionDate("");
    setPendingScenarioId(null);
    setPendingReset(false);
    setCopyStatus("idle");
  }

  function requestReset() {
    if (diagnosticIsDirty) {
      setPendingReset(true);
      return;
    }
    reset();
  }

  function applyScenario(next: ExcelScenarioId) {
    const nextScenario = EXCEL_SCENARIOS[next];
    setScenarioId(next);
    setDossiers(createExcelCandidateDossiers(nextScenario));
    setReadiness(INITIAL_READINESS);
    setDecisionDate("");
    setPendingScenarioId(null);
    setPendingReset(false);
    setCopyStatus("idle");
  }

  function requestScenarioChange(next: ExcelScenarioId) {
    if (next === scenarioId) {
      setPendingScenarioId(null);
      return;
    }
    if (diagnosticIsDirty) {
      setPendingScenarioId(next);
      return;
    }
    applyScenario(next);
  }

  function updateOperation(
    id: ExcelOperationId,
    patch: Partial<ExcelCandidateDossier["operations"][ExcelOperationId]>,
  ) {
    updateActiveDossier((current) => ({
      ...current,
      operations: {
        ...current.operations,
        [id]: { ...current.operations[id], ...patch },
      },
    }));
  }

  function toggleConditional(
    id: ExcelConditionalOperationId,
    applicable: boolean,
  ) {
    setDossiers(
      (current) =>
        Object.fromEntries(
          EXCEL_PATHWAY_IDS.map((pathway) => {
            const dossier = current[pathway];
            return [
              pathway,
              {
                ...dossier,
                conditionalOperations: {
                  ...dossier.conditionalOperations,
                  [id]: applicable,
                },
                operations: {
                  ...dossier.operations,
                  [id]: {
                    ...dossier.operations[id],
                    status: applicable ? "unknown" : "not_applicable",
                  },
                },
              },
            ];
          }),
        ) as Record<ExcelPathwayId, ExcelCandidateDossier>,
    );
    setCopyStatus("idle");
  }

  function setCostInput(key: keyof ExcelCostInputs, rawValue: string) {
    updateActiveDossier((current) => ({
      ...current,
      costInputs: {
        ...current.costInputs,
        [key]: rawValue === "" ? Number.NaN : Number(rawValue),
      },
      costBasis: { ...current.costBasis, confirmed: false },
    }));
  }

  function setCostBasis(
    key: keyof ExcelCostBasis,
    value: string | number | boolean | undefined,
  ) {
    updateActiveDossier((current) => ({
      ...current,
      costBasis: {
        ...current.costBasis,
        [key]: value,
        ...(key === "confirmed" ? {} : { confirmed: false }),
      },
    }));
  }

  function setPlatformPopulation(
    key: "activeUsers" | "externalUsers",
    rawValue: string,
  ) {
    updateActiveDossier((current) => {
      const value = rawValue === "" ? Number.NaN : Number(rawValue);
      const platform = { ...current.platform, [key]: value };
      const total =
        Number.isFinite(platform.activeUsers) &&
        Number.isFinite(platform.externalUsers)
          ? platform.activeUsers + platform.externalUsers
          : Number.NaN;
      return {
        ...current,
        platform,
        costInputs: { ...current.costInputs, licensedUsers: total },
        costBasis: { ...current.costBasis, confirmed: false },
      };
    });
  }

  async function copyResult() {
    const copied = await copyTextToClipboard(reportText);
    setCopyStatus(copied ? "copied" : "error");
    if (copied) {
      trackFunnelEvent("excel_diagnostic_result_copy", {
        guide: "transformer-excel-en-application",
      });
    }
  }

  function currentDraft() {
    return createExcelDecisionDraft({
      scenarioId,
      activePathway,
      readiness,
      dossiers,
      decisionDate,
    });
  }

  function applyDraft(raw: string, status: "restored" | "imported"): boolean {
    const draft = parseExcelDecisionDraft(raw);
    if (!draft) {
      setDraftStatus("invalid");
      return false;
    }
    setScenarioId(draft.scenarioId);
    setActivePathway(draft.activePathway);
    setReadiness(draft.readiness);
    setDossiers(draft.dossiers);
    setDecisionDate(draft.decisionDate);
    setPendingScenarioId(null);
    setPendingReset(false);
    setCopyStatus("idle");
    setLastDraftFingerprint(
      excelDraftFingerprint(
        draft.scenarioId,
        draft.activePathway,
        draft.readiness,
        draft.dossiers,
        draft.decisionDate,
      ),
    );
    setDraftStatus(status);
    return true;
  }

  function saveDraftLocally() {
    draftInteractionStartedRef.current = true;
    try {
      window.localStorage.setItem(
        EXCEL_DECISION_DRAFT_STORAGE_KEY,
        serializeExcelDecisionDraft(currentDraft()),
      );
      setStoredDraftPresent(true);
      setStoredDraftAvailable(true);
      setLastDraftFingerprint(currentDraftFingerprint);
      setDraftStatus("saved");
    } catch {
      setDraftStatus("error");
    }
  }

  function restoreLocalDraft() {
    draftInteractionStartedRef.current = true;
    try {
      const raw = window.localStorage.getItem(EXCEL_DECISION_DRAFT_STORAGE_KEY);
      if (!raw) {
        setStoredDraftPresent(false);
        setStoredDraftAvailable(false);
        return;
      }
      setStoredDraftPresent(true);
      if (!applyDraft(raw, "restored")) {
        setStoredDraftAvailable(false);
      } else {
        setStoredDraftAvailable(true);
      }
    } catch {
      setDraftStatus("error");
    }
  }

  function clearLocalDraft() {
    draftInteractionStartedRef.current = true;
    try {
      window.localStorage.removeItem(EXCEL_DECISION_DRAFT_STORAGE_KEY);
      setStoredDraftPresent(false);
      setStoredDraftAvailable(false);
      setLastDraftFingerprint(null);
      setDraftStatus("cleared");
    } catch {
      setDraftStatus("error");
    }
  }

  function downloadDraft() {
    draftInteractionStartedRef.current = true;
    try {
      const blob = new Blob([serializeExcelDecisionDraft(currentDraft())], {
        type: "application/json;charset=utf-8",
      });
      const href = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = href;
      link.download = `diagnostic-excel-${currentDate}.json`;
      link.click();
      URL.revokeObjectURL(href);
      setLastDraftFingerprint(currentDraftFingerprint);
      setDraftStatus("downloaded");
    } catch {
      setDraftStatus("error");
    }
  }

  async function importDraft(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    draftInteractionStartedRef.current = true;
    if (file.size > EXCEL_DECISION_DRAFT_MAX_BYTES) {
      setDraftStatus("too-large");
      return;
    }
    try {
      applyDraft(await file.text(), "imported");
    } catch {
      setDraftStatus("invalid");
    }
  }

  const effectiveDraftStatus =
    lastDraftFingerprint !== null &&
    lastDraftFingerprint !== currentDraftFingerprint &&
    (draftStatus === "saved" ||
      draftStatus === "restored" ||
      draftStatus === "downloaded" ||
      draftStatus === "imported")
      ? "modified"
      : draftStatus;
  const draftStatusMessage = {
    idle: "",
    available:
      "Un brouillon compatible existe dans ce navigateur. Vous choisissez quand le reprendre.",
    saved: "Brouillon versionné enregistré localement dans ce navigateur.",
    restored: "Brouillon local restauré. Vérifiez les dates et les sources.",
    downloaded: "Fichier JSON téléchargé.",
    imported: "Fichier JSON importé. Vérifiez les dates et les sources.",
    cleared: "Brouillon local supprimé de ce navigateur.",
    invalid:
      "Brouillon incompatible ou endommagé : aucune donnée n’a été chargée.",
    "too-large":
      "Fichier refusé avant lecture : le brouillon JSON dépasse la limite de 2 Mo.",
    error:
      "Le navigateur a refusé cette opération. Téléchargez un JSON si possible.",
    modified:
      "Le diagnostic a changé depuis la dernière sauvegarde ou exportation.",
  }[effectiveDraftStatus];

  return (
    <>
      <style>
        {
          "@media print { body *:not(#excel-decision-diagnostic):not(#excel-decision-diagnostic *):not(:has(#excel-decision-diagnostic)) { display: none !important; } #excel-decision-diagnostic { position: absolute !important; top: 0 !important; left: 0 !important; width: 100% !important; margin: 0 !important; overflow: visible !important; border: 0 !important; box-shadow: none !important; background: white !important; color: #18181b !important; } #excel-decision-diagnostic > :not(.excel-print-report) { display: none !important; } #excel-decision-diagnostic .excel-print-report { display: block !important; margin: 0 !important; background: white !important; color: #18181b !important; } #excel-decision-diagnostic button, #excel-decision-diagnostic input, #excel-decision-diagnostic select, #excel-decision-diagnostic textarea, #excel-decision-diagnostic [data-excel-interactive] { display: none !important; } }"
        }
      </style>
      <section
        id="excel-decision-diagnostic"
        className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm print:shadow-none dark:border-zinc-800 dark:bg-zinc-950"
        aria-labelledby="excel-diagnostic-title"
      >
        <div className="border-b border-zinc-200 bg-zinc-950 px-4 py-5 text-white dark:border-zinc-800 sm:px-6">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-300">
            Test local · 5 dossiers séparés · aucune réponse envoyée
          </p>
          <h3
            id="excel-diagnostic-title"
            className="m-0 text-lg font-bold sm:text-xl"
          >
            Comparer cinq voies sans réutiliser leurs preuves
          </h3>
          <p className="mb-0 mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">
            Complétez chaque dossier avec ses propres tests, références datées,
            coûts et inconnues. Un candidat incomplet bloque le classement s’il
            peut encore changer l’ordre.
          </p>
        </div>

        <div
          className="border-b border-zinc-200 bg-zinc-50 px-4 py-4 print:hidden dark:border-zinc-800 dark:bg-zinc-900/50 sm:px-6"
          data-excel-interactive
        >
          <div className="flex flex-col gap-3">
            <div>
              <p className="m-0 text-xs font-bold text-zinc-900 dark:text-zinc-100">
                Reprendre ce travail sans envoyer vos réponses
              </p>
              <p className="mb-0 mt-1 text-[11px] leading-relaxed text-zinc-500">
                Rien n’est stocké automatiquement. « Enregistrer ici » conserve
                un brouillon versionné dans ce navigateur jusqu’à sa suppression
                ; le JSON permet une sauvegarde portable. N’y placez aucune
                donnée sensible.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={saveDraftLocally}
                className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-xs font-bold text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-800"
              >
                <Save className="size-3.5" aria-hidden="true" />
                Enregistrer ici
              </button>
              {storedDraftAvailable ? (
                <button
                  type="button"
                  onClick={restoreLocalDraft}
                  className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-violet-300 bg-violet-50 px-3 py-2 text-xs font-bold text-violet-950 hover:bg-violet-100 dark:border-violet-800 dark:bg-violet-950/30 dark:text-violet-100"
                >
                  <RotateCcw className="size-3.5" aria-hidden="true" />
                  Reprendre le brouillon local
                </button>
              ) : null}
              <button
                type="button"
                onClick={downloadDraft}
                className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-xs font-bold text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-800"
              >
                <Download className="size-3.5" aria-hidden="true" />
                Télécharger le JSON
              </button>
              <button
                type="button"
                onClick={() => importInputRef.current?.click()}
                className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-xs font-bold text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-800"
              >
                <Upload className="size-3.5" aria-hidden="true" />
                Importer un JSON
              </button>
              {storedDraftPresent ? (
                <button
                  type="button"
                  onClick={clearLocalDraft}
                  className="inline-flex min-h-10 items-center gap-2 rounded-lg px-3 py-2 text-xs font-bold text-rose-700 hover:bg-rose-50 dark:text-rose-300 dark:hover:bg-rose-950/30"
                >
                  <Trash2 className="size-3.5" aria-hidden="true" />
                  Supprimer le brouillon local
                </button>
              ) : null}
              <input
                ref={importInputRef}
                type="file"
                accept="application/json,.json"
                onChange={importDraft}
                className="sr-only"
                aria-label="Choisir un brouillon JSON du diagnostic Excel"
              />
            </div>
            <p
              role="status"
              aria-live="polite"
              className={`m-0 min-h-4 text-[11px] font-medium ${
                effectiveDraftStatus === "invalid" ||
                effectiveDraftStatus === "too-large" ||
                effectiveDraftStatus === "error"
                  ? "text-rose-700 dark:text-rose-300"
                  : effectiveDraftStatus === "modified"
                    ? "text-amber-700 dark:text-amber-300"
                    : "text-emerald-700 dark:text-emerald-300"
              }`}
            >
              {draftStatusMessage}
            </p>
          </div>
        </div>

        <pre className="excel-print-report hidden whitespace-pre-wrap p-6 font-sans text-[10px] leading-relaxed print:block">
          {reportText}
        </pre>

        <div
          className="grid gap-0 print:hidden xl:grid-cols-[1.25fr_0.75fr]"
          data-excel-interactive
        >
          <div className="space-y-8 p-4 sm:p-6">
            <div
              className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-800 dark:bg-zinc-900/50"
              aria-label="Progression du diagnostic"
            >
              <div className="flex items-center justify-between gap-3 text-xs font-bold text-zinc-800 dark:text-zinc-200">
                <span>Progression</span>
                <span className="tabular-nums">
                  préparation {preparationCompleted}/7 · dossiers fermés{" "}
                  {completedDossiers}/5
                </span>
              </div>
              <div
                className="mt-2 h-2 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800"
                role="progressbar"
                aria-label="Étapes fermées"
                aria-valuemin={0}
                aria-valuemax={12}
                aria-valuenow={preparationCompleted + completedDossiers}
              >
                <div
                  className="h-full rounded-full bg-violet-600 transition-[width]"
                  style={{
                    width: `${((preparationCompleted + completedDossiers) / 12) * 100}%`,
                  }}
                />
              </div>
              <p className="mb-0 mt-2 text-[11px] leading-relaxed text-zinc-500">
                Un dossier réussi ou écarté avec des preuves compte comme
                fermé. Le classement reste bloqué tant qu’un dossier peut
                encore changer l’ordre.
              </p>
            </div>
            <fieldset>
              <legend className="mb-3 text-sm font-bold text-zinc-950 dark:text-white">
                1. Fixer le cas commun aux cinq voies
              </legend>
              <div className="grid gap-2 sm:grid-cols-3">
                {EXCEL_SCENARIO_IDS.map((id) => {
                  const item = EXCEL_SCENARIOS[id];
                  return (
                    <label
                      key={id}
                      className={`cursor-pointer rounded-xl border p-3 focus-within:ring-2 focus-within:ring-violet-500 ${
                        scenarioId === id
                          ? "border-violet-400 bg-violet-50 dark:border-violet-700 dark:bg-violet-950/30"
                          : "border-zinc-200 dark:border-zinc-800"
                      }`}
                    >
                      <input
                        type="radio"
                        name="excel-scenario-r2"
                        value={id}
                        checked={scenarioId === id}
                        onChange={() => requestScenarioChange(id)}
                        className="sr-only"
                      />
                      <span className="block text-sm font-bold text-zinc-950 dark:text-white">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                        {item.users} utilisateurs ·{" "}
                        {item.rows.toLocaleString("fr-FR")} lignes ·{" "}
                        {item.integrations} intégration(s)
                      </span>
                    </label>
                  );
                })}
              </div>
              {pendingScenarioId ? (
                <div
                  role="alert"
                  aria-live="assertive"
                  aria-labelledby="excel-scenario-confirmation-title"
                  aria-describedby="excel-scenario-confirmation-description"
                  className="mt-3 rounded-xl border border-rose-300 bg-rose-50 p-4 text-rose-950 dark:border-rose-800 dark:bg-rose-950/30 dark:text-rose-100"
                >
                  <p
                    id="excel-scenario-confirmation-title"
                    className="m-0 text-sm font-bold"
                  >
                    Changer pour le scénario «{" "}
                    {EXCEL_SCENARIOS[pendingScenarioId].label} » ?
                  </p>
                  <p
                    id="excel-scenario-confirmation-description"
                    className="mb-0 mt-1 text-xs leading-relaxed"
                  >
                    La préparation commune et les cinq dossiers seront effacés.
                    Cette action ne peut pas être annulée dans cet onglet.
                  </p>
                  <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => applyScenario(pendingScenarioId)}
                      className="min-h-10 rounded-lg bg-rose-700 px-3 py-2 text-xs font-bold text-white hover:bg-rose-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2"
                    >
                      Effacer et changer de scénario
                    </button>
                    <button
                      type="button"
                      onClick={() => setPendingScenarioId(null)}
                      className="min-h-10 rounded-lg border border-rose-300 bg-white px-3 py-2 text-xs font-bold text-rose-900 hover:bg-rose-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2 dark:border-rose-700 dark:bg-zinc-950 dark:text-rose-100 dark:hover:bg-rose-950/50"
                    >
                      Annuler et conserver le diagnostic
                    </button>
                  </div>
                </div>
              ) : null}
              <p className="mb-3 mt-3 text-xs leading-relaxed text-zinc-500">
                Rôles : {scenario.roles}. Usage : {scenario.usage}.
              </p>
              <div className="mb-3 grid gap-2 rounded-xl border border-violet-200 bg-violet-50 p-3 dark:border-violet-900 dark:bg-violet-950/25 sm:grid-cols-2">
                <div className="text-xs leading-relaxed text-violet-950 dark:text-violet-100">
                  <span className="block font-bold">
                    Sources du guide vérifiées le
                  </span>
                  <span>{EXCEL_SOURCE_VERIFIED_ON}</span>
                  <span className="mt-1 block text-[11px] opacity-75">
                    Cette date éditoriale ne date pas votre dossier.
                  </span>
                </div>
                <label className="text-xs font-bold text-violet-950 dark:text-violet-100">
                  Date de votre décision (obligatoire)
                  <input
                    type="date"
                    required
                    max={currentDate}
                    value={decisionDate}
                    onChange={(event) => {
                      setDecisionDate(event.target.value);
                      setCopyStatus("idle");
                    }}
                    className="mt-1 min-h-10 w-full rounded-lg border border-violet-300 bg-white px-3 text-sm font-normal text-zinc-950 dark:border-violet-800 dark:bg-zinc-900 dark:text-white"
                  />
                  <span className="mt-1 block text-[11px] font-normal opacity-75">
                    Les preuves, motifs et sources de coût doivent être datés au
                    plus tard ce jour-là.
                  </span>
                </label>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {READINESS_ITEMS.map((item) => (
                  <label
                    key={item.key}
                    className={`flex cursor-pointer gap-3 rounded-xl border p-3 ${
                      readiness[item.key]
                        ? "border-emerald-300 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/25"
                        : "border-zinc-200 dark:border-zinc-800"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={readiness[item.key]}
                      onChange={(event) => {
                        setReadiness((current) => ({
                          ...current,
                          [item.key]: event.target.checked,
                        }));
                        setCopyStatus("idle");
                      }}
                      className="mt-0.5 size-4 shrink-0 accent-emerald-700"
                    />
                    <span>
                      <span className="block text-xs font-bold text-zinc-900 dark:text-zinc-100">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-[11px] leading-relaxed text-zinc-500">
                        {item.help}
                      </span>
                    </span>
                  </label>
                ))}
              </div>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Référence commune de préparation
                  <input
                    value={readiness.reference}
                    onChange={(event) => {
                      setReadiness((current) => ({
                        ...current,
                        reference: event.target.value,
                      }));
                      setCopyStatus("idle");
                    }}
                    placeholder="Ex. fiche PREP-07 signée"
                    className="mt-1 min-h-10 w-full rounded-lg border border-zinc-300 bg-white px-3 text-sm font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                  />
                </label>
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Date de cette préparation
                  <input
                    type="date"
                    max={decisionDate || currentDate}
                    value={readiness.evidenceDate}
                    onChange={(event) => {
                      setReadiness((current) => ({
                        ...current,
                        evidenceDate: event.target.value,
                      }));
                      setCopyStatus("idle");
                    }}
                    className="mt-1 min-h-10 w-full rounded-lg border border-zinc-300 bg-white px-3 text-sm font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                  />
                </label>
              </div>
            </fieldset>

            <section aria-labelledby="five-dossiers-title">
              <h4
                id="five-dossiers-title"
                className="mb-3 text-sm font-bold text-zinc-950 dark:text-white"
              >
                2. Ouvrir chacun des cinq dossiers autonomes
              </h4>
              <div className="grid gap-2 sm:grid-cols-2">
                {EXCEL_PATHWAY_IDS.map((pathway) => {
                  const candidate = comparison.candidateResults[pathway];
                  const selected = activePathway === pathway;
                  const gaps = candidate
                    ? candidate.unknownOperations.length +
                      candidate.missingEvidence.length +
                      candidate.missingReadiness.length +
                      candidate.invalidInputs.length
                    : 1;
                  return (
                    <button
                      key={pathway}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => {
                        setActivePathway(pathway);
                        setCopyStatus("idle");
                      }}
                      className={`rounded-xl border p-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${
                        selected
                          ? "border-violet-500 ring-1 ring-violet-500"
                          : candidate
                            ? candidateStyles[candidate.verdict]
                            : "border-zinc-200 dark:border-zinc-800"
                      }`}
                    >
                      <span className="block text-sm font-bold text-zinc-950 dark:text-white">
                        {EXCEL_PATHWAYS[pathway].label}
                      </span>
                      <span className="mt-1 block text-[11px] text-zinc-600 dark:text-zinc-300">
                        {candidate?.label ?? "Dossier absent"} ·{" "}
                        {gaps > 0
                          ? `${gaps} point(s) à fermer`
                          : "dossier complet"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            <fieldset>
              <legend className="mb-3 text-sm font-bold text-zinc-950 dark:text-white">
                3. Condition propre — {EXCEL_PATHWAYS[activePathway].label}
              </legend>
              <p className="mb-3 mt-0 text-xs leading-relaxed text-zinc-500">
                {EXCEL_PATHWAYS[activePathway].gate}
              </p>
              <dl className="mb-4 grid gap-2 text-[11px] leading-relaxed sm:grid-cols-3">
                <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-900">
                  <dt className="font-bold text-zinc-900 dark:text-zinc-100">
                    Déclaré
                  </dt>
                  <dd className="m-0 mt-1 text-zinc-500">
                    Une affirmation seule : elle ne suffit jamais à décider.
                  </dd>
                </div>
                <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-900">
                  <dt className="font-bold text-zinc-900 dark:text-zinc-100">
                    Documenté
                  </dt>
                  <dd className="m-0 mt-1 text-zinc-500">
                    Une référence exploitable et sa date de réalisation.
                  </dd>
                </div>
                <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-900">
                  <dt className="font-bold text-zinc-900 dark:text-zinc-100">
                    Vérifié
                  </dt>
                  <dd className="m-0 mt-1 text-zinc-500">
                    Une preuve documentée contrôlée par une personne et une
                    fonction identifiées.
                  </dd>
                </div>
              </dl>

              {activePathway === "named_platform" ? (
                <div className="mb-4 grid gap-3 rounded-xl border border-zinc-200 p-3 dark:border-zinc-800 sm:grid-cols-2">
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                    Produit testé
                    <select
                      value={activeDossier.platform.type}
                      onChange={(event) =>
                        updateActiveDossier((current) =>
                          changeExcelPlatformType(
                            current,
                            event.target.value as ExcelPlatformType,
                            scenario,
                          ),
                        )
                      }
                      className="mt-1 min-h-10 w-full rounded-lg border border-zinc-300 bg-white px-3 text-sm font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                    >
                      {PLATFORM_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </label>
                  {activeDossier.platform.type === "other" ? (
                    <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                      Nom exact du produit
                      <input
                        value={activeDossier.platform.product}
                        onChange={(event) =>
                          updateActiveDossier((current) =>
                            changeExcelPlatformProduct(
                              current,
                              event.target.value,
                            ),
                          )
                        }
                        className="mt-1 min-h-10 w-full rounded-lg border border-zinc-300 bg-white px-3 text-sm font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                      />
                    </label>
                  ) : (
                    <div className="rounded-lg bg-zinc-50 px-3 py-2 text-xs text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300">
                      Produit :{" "}
                      <strong>{activeDossier.platform.product}</strong>
                    </div>
                  )}
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                    Plan ou offre exacte
                    <input
                      value={activeDossier.platform.plan}
                      onChange={(event) =>
                        updateActiveDossier((current) =>
                          changeExcelPlatformPlan(current, event.target.value),
                        )
                      }
                      placeholder="Ex. Premium, Core, Team…"
                      className="mt-1 min-h-10 w-full rounded-lg border border-zinc-300 bg-white px-3 text-sm font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                    />
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {(["activeUsers", "externalUsers"] as const).map((key) => (
                      <label
                        key={key}
                        className="text-xs font-semibold text-zinc-700 dark:text-zinc-300"
                      >
                        {key === "activeUsers" ? "Actifs" : "Externes/invités"}
                        <input
                          type="number"
                          min={key === "activeUsers" ? 1 : 0}
                          step={1}
                          value={numberInputValue(activeDossier.platform[key])}
                          onChange={(event) =>
                            setPlatformPopulation(key, event.target.value)
                          }
                          className="mt-1 min-h-10 w-full rounded-lg border border-zinc-300 bg-white px-2 text-sm font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                        />
                      </label>
                    ))}
                  </div>
                  <p className="m-0 text-[11px] leading-relaxed text-zinc-500 sm:col-span-2">
                    17,30 € n’est prérempli que pour Power Apps Premium au{" "}
                    {EXCEL_SOURCE_VERIFIED_ON_FR}. AppSheet, Airtable et tout
                    autre produit exigent leur propre plan, prix, devise,
                    population et source.
                  </p>
                </div>
              ) : null}

              {activePathway === "standard_software" ? (
                <label className="mb-4 block text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Couverture sans contournement (0 à 100 %)
                  <input
                    type="number"
                    min={0}
                    max={100}
                    step="0.1"
                    value={numberInputValue(
                      activeDossier.standardCoveragePercent,
                    )}
                    onChange={(event) =>
                      updateActiveDossier((current) => ({
                        ...current,
                        standardCoveragePercent:
                          event.target.value === ""
                            ? Number.NaN
                            : Number(event.target.value),
                      }))
                    }
                    className="mt-1 min-h-10 w-full rounded-lg border border-zinc-300 bg-white px-3 text-sm font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                  />
                  <span className="mt-1 block text-[11px] font-normal leading-relaxed text-zinc-500">
                    Ce diagnostic applique volontairement la règle interne de
                    présélection à 80 %. Si votre organisation retient un autre
                    seuil, documentez-le dans une décision distincte : aucun
                    bloquant ne devient acceptable.
                  </span>
                </label>
              ) : null}

              <div className="grid gap-3 rounded-xl border border-zinc-200 p-3 dark:border-zinc-800 sm:grid-cols-2">
                <label className="flex items-start gap-2 text-xs font-semibold text-zinc-800 dark:text-zinc-200 sm:col-span-2">
                  <input
                    type="checkbox"
                    checked={activeDossier.criterion.met}
                    onChange={(event) =>
                      updateActiveDossier((current) => ({
                        ...current,
                        criterion: {
                          ...current.criterion,
                          met: event.target.checked,
                        },
                      }))
                    }
                    className="mt-0.5 size-4 accent-violet-700"
                  />
                  La condition propre à cette voie est satisfaite
                </label>
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Niveau de preuve
                  <select
                    value={activeDossier.criterion.evidenceLevel}
                    onChange={(event) =>
                      updateActiveDossier((current) => ({
                        ...current,
                        criterion: {
                          ...current.criterion,
                          evidenceLevel: event.target
                            .value as ExcelEvidenceLevel,
                        },
                      }))
                    }
                    className="mt-1 min-h-10 w-full rounded-lg border border-zinc-300 bg-white px-3 text-sm font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                  >
                    {EVIDENCE_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Date de la preuve
                  <input
                    type="date"
                    max={decisionDate || currentDate}
                    value={activeDossier.criterion.evidenceDate}
                    onChange={(event) =>
                      updateActiveDossier((current) => ({
                        ...current,
                        criterion: {
                          ...current.criterion,
                          evidenceDate: event.target.value,
                        },
                      }))
                    }
                    className="mt-1 min-h-10 w-full rounded-lg border border-zinc-300 bg-white px-3 text-sm font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                  />
                </label>
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 sm:col-span-2">
                  Référence qui démontre cette condition
                  <input
                    value={activeDossier.criterion.reference}
                    onChange={(event) =>
                      updateActiveDossier((current) => ({
                        ...current,
                        criterion: {
                          ...current.criterion,
                          reference: event.target.value,
                        },
                      }))
                    }
                    placeholder="Ex. décision GATE-03, procès-verbal ou test vérifié"
                    className="mt-1 min-h-10 w-full rounded-lg border border-zinc-300 bg-white px-3 text-sm font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                  />
                </label>
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 sm:col-span-2">
                  Vérificateur identifié (obligatoire au niveau Vérifié)
                  <input
                    value={activeDossier.criterion.verifiedBy}
                    onChange={(event) =>
                      updateActiveDossier((current) => ({
                        ...current,
                        criterion: {
                          ...current.criterion,
                          verifiedBy: event.target.value,
                        },
                      }))
                    }
                    placeholder="Ex. Marie Dupont, responsable métier"
                    className="mt-1 min-h-10 w-full rounded-lg border border-zinc-300 bg-white px-3 text-sm font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                  />
                </label>
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-3 text-sm font-bold text-zinc-950 dark:text-white">
                4. Rejouer les dix opérations pour cette seule voie
              </legend>
              <div className="space-y-3">
                {EXCEL_TEST_OPERATIONS.map((operation) => {
                  const assessment = activeDossier.operations[operation.id];
                  const conditional = isConditionalOperation(operation.id);
                  const applicable = isExcelOperationApplicable(
                    operation.id,
                    activeDossier.conditionalOperations,
                  );
                  return (
                    <div
                      key={operation.id}
                      className="rounded-xl border border-zinc-200 p-3 dark:border-zinc-800"
                    >
                      <div className="grid gap-3 sm:grid-cols-[1fr_13rem]">
                        <div>
                          <p className="m-0 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                            {operation.id}. {operation.title}
                          </p>
                          <p className="mb-0 mt-1 text-xs leading-relaxed text-zinc-500">
                            Attendu : {operation.expected}
                          </p>
                        </div>
                        <div className="space-y-2">
                          {conditional ? (
                            <label className="flex items-center gap-2 text-xs font-medium text-zinc-600 dark:text-zinc-300">
                              <input
                                type="checkbox"
                                checked={applicable}
                                onChange={(event) =>
                                  toggleConditional(
                                    operation.id as ExcelConditionalOperationId,
                                    event.target.checked,
                                  )
                                }
                                className="size-4 accent-violet-700"
                              />
                              Applicable à ce cas
                            </label>
                          ) : null}
                          <select
                            aria-label={`Résultat de l’opération ${operation.id}`}
                            disabled={!applicable}
                            value={
                              applicable ? assessment.status : "not_applicable"
                            }
                            onChange={(event) =>
                              updateOperation(operation.id, {
                                status: event.target
                                  .value as ExcelOperationStatus,
                              })
                            }
                            className="min-h-10 w-full rounded-lg border border-zinc-300 bg-white px-2 text-xs font-semibold text-zinc-900 disabled:cursor-not-allowed dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                          >
                            {!applicable ? (
                              <option value="not_applicable">
                                Non applicable
                              </option>
                            ) : null}
                            {STATUS_OPTIONS.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {applicable ? (
                        <div className="mt-3 grid gap-2 sm:grid-cols-2">
                          <label className="text-[11px] font-semibold text-zinc-600 dark:text-zinc-300">
                            Niveau
                            <select
                              value={assessment.evidenceLevel}
                              onChange={(event) =>
                                updateOperation(operation.id, {
                                  evidenceLevel: event.target
                                    .value as ExcelEvidenceLevel,
                                })
                              }
                              className="mt-1 min-h-10 w-full rounded-lg border border-zinc-300 bg-white px-2 text-xs font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                            >
                              {EVIDENCE_OPTIONS.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          </label>
                          <label className="text-[11px] font-semibold text-zinc-600 dark:text-zinc-300">
                            Référence obligatoire
                            <input
                              value={assessment.reference}
                              onChange={(event) =>
                                updateOperation(operation.id, {
                                  reference: event.target.value,
                                })
                              }
                              placeholder="Ex. capture REC-03 ou export signé"
                              className="mt-1 min-h-10 w-full rounded-lg border border-zinc-300 bg-white px-3 text-xs font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                            />
                          </label>
                          <label className="text-[11px] font-semibold text-zinc-600 dark:text-zinc-300">
                            Vérificateur (obligatoire si Vérifié)
                            <input
                              value={assessment.verifiedBy}
                              onChange={(event) =>
                                updateOperation(operation.id, {
                                  verifiedBy: event.target.value,
                                })
                              }
                              placeholder="Nom et fonction"
                              className="mt-1 min-h-10 w-full rounded-lg border border-zinc-300 bg-white px-3 text-xs font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                            />
                          </label>
                          <label className="text-[11px] font-semibold text-zinc-600 dark:text-zinc-300">
                            Date
                            <input
                              type="date"
                              max={decisionDate || currentDate}
                              value={assessment.evidenceDate}
                              onChange={(event) =>
                                updateOperation(operation.id, {
                                  evidenceDate: event.target.value,
                                })
                              }
                              className="mt-1 min-h-10 w-full rounded-lg border border-zinc-300 bg-white px-2 text-xs font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                            />
                          </label>
                        </div>
                      ) : (
                        <div className="mt-3 grid gap-2 sm:grid-cols-[1fr_11rem]">
                          <label className="text-[11px] font-semibold text-zinc-600 dark:text-zinc-300">
                            Motif précis de non-applicabilité
                            <input
                              value={assessment.notApplicableReason}
                              onChange={(event) =>
                                updateOperation(operation.id, {
                                  notApplicableReason: event.target.value,
                                })
                              }
                              placeholder="Ex. aucune coédition simultanée dans la fiche signée"
                              className="mt-1 min-h-10 w-full rounded-lg border border-zinc-300 bg-white px-3 text-xs font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                            />
                          </label>
                          <label className="text-[11px] font-semibold text-zinc-600 dark:text-zinc-300">
                            Date du motif
                            <input
                              type="date"
                              max={decisionDate || currentDate}
                              value={assessment.notApplicableDate}
                              onChange={(event) =>
                                updateOperation(operation.id, {
                                  notApplicableDate: event.target.value,
                                })
                              }
                              className="mt-1 min-h-10 w-full rounded-lg border border-zinc-300 bg-white px-2 text-xs font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                            />
                          </label>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-3 text-sm font-bold text-zinc-950 dark:text-white">
                5. Recalculer le coût de cette voie depuis les postes visibles
              </legend>
              <p className="mb-3 mt-0 text-xs leading-relaxed text-zinc-500">
                Formule à 48 mois : {EXCEL_COST_FORMULA}. Les valeurs
                préremplies sont des exemples modifiables, pas des prix complets
                ni un devis.
              </p>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {EXCEL_COST_FIELDS.map((field) => (
                  <label
                    key={field.key}
                    className="text-[11px] font-semibold text-zinc-600 dark:text-zinc-300"
                  >
                    {field.label} (
                    {getExcelCostUnit(
                      field.unitKind,
                      activeDossier.costBasis.currency,
                    )}
                    )
                    <input
                      type="number"
                      min={0}
                      step="0.01"
                      value={numberInputValue(
                        activeDossier.costInputs[field.key],
                      )}
                      onChange={(event) =>
                        setCostInput(field.key, event.target.value)
                      }
                      className="mt-1 min-h-10 w-full rounded-lg border border-zinc-300 bg-white px-3 text-sm font-normal tabular-nums text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                    />
                  </label>
                ))}
              </div>

              <div className="mt-4 grid gap-2 rounded-xl border border-zinc-200 p-3 dark:border-zinc-800 sm:grid-cols-2">
                <label className="flex items-start gap-2 rounded-lg bg-amber-50 p-3 text-xs font-semibold text-amber-950 dark:bg-amber-950/30 dark:text-amber-100 sm:col-span-2">
                  <input
                    type="checkbox"
                    checked={activeDossier.costBasis.confirmed}
                    onChange={(event) =>
                      setCostBasis("confirmed", event.target.checked)
                    }
                    className="mt-0.5 size-4 shrink-0 accent-amber-700"
                  />
                  J’atteste que chaque poste prérempli a été remplacé ou
                  explicitement confirmé contre une mesure, un devis ou une
                  source applicable à cette voie. Toute modification retire
                  cette attestation.
                </label>
                <label className="text-[11px] font-semibold text-zinc-600 dark:text-zinc-300">
                  Source ou référence
                  <input
                    value={activeDossier.costBasis.source}
                    onChange={(event) =>
                      setCostBasis("source", event.target.value)
                    }
                    placeholder="Devis, tarif officiel ou mesure interne"
                    className="mt-1 min-h-10 w-full rounded-lg border border-zinc-300 bg-white px-3 text-sm font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                  />
                </label>
                <label className="text-[11px] font-semibold text-zinc-600 dark:text-zinc-300">
                  Date de la source
                  <input
                    type="date"
                    max={decisionDate || currentDate}
                    value={activeDossier.costBasis.sourceDate}
                    onChange={(event) =>
                      setCostBasis("sourceDate", event.target.value)
                    }
                    className="mt-1 min-h-10 w-full rounded-lg border border-zinc-300 bg-white px-3 text-sm font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                  />
                </label>
                <label className="text-[11px] font-semibold text-zinc-600 dark:text-zinc-300">
                  Devise
                  <select
                    value={activeDossier.costBasis.currency}
                    onChange={(event) =>
                      setCostBasis(
                        "currency",
                        event.target.value as ExcelCurrency,
                      )
                    }
                    className="mt-1 min-h-10 w-full rounded-lg border border-zinc-300 bg-white px-3 text-sm font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                  >
                    <option value="">À renseigner</option>
                    {EXCEL_CURRENCIES.map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="text-[11px] font-semibold text-zinc-600 dark:text-zinc-300">
                  Horizon (mois)
                  <input
                    type="number"
                    min={1}
                    step={1}
                    value={numberInputValue(
                      activeDossier.costBasis.horizonMonths,
                    )}
                    onChange={(event) =>
                      setCostBasis(
                        "horizonMonths",
                        event.target.value === ""
                          ? Number.NaN
                          : Number(event.target.value),
                      )
                    }
                    className="mt-1 min-h-10 w-full rounded-lg border border-zinc-300 bg-white px-3 text-sm font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                  />
                </label>
                {(
                  [
                    ["coverage", "Ce que couvre la base"],
                    ["owner", "Responsable de la base"],
                    ["exclusions", "Exclusions explicites"],
                  ] as const
                ).map(([key, label]) => (
                  <label
                    key={key}
                    className="text-[11px] font-semibold text-zinc-600 dark:text-zinc-300 sm:col-span-2"
                  >
                    {label}
                    <input
                      value={activeDossier.costBasis[key]}
                      onChange={(event) =>
                        setCostBasis(key, event.target.value)
                      }
                      className="mt-1 min-h-10 w-full rounded-lg border border-zinc-300 bg-white px-3 text-sm font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                    />
                  </label>
                ))}
                <div className="grid grid-cols-2 gap-2 sm:col-span-2 sm:grid-cols-4">
                  {BOUND_FIELDS.map((field) => (
                    <label
                      key={field.key}
                      className="text-[11px] font-semibold text-zinc-600 dark:text-zinc-300"
                    >
                      {field.label}
                      <input
                        type="number"
                        min={0}
                        step="0.01"
                        value={numberInputValue(
                          activeDossier.costBasis[field.key],
                        )}
                        onChange={(event) =>
                          setCostBasis(
                            field.key,
                            event.target.value === ""
                              ? undefined
                              : Number(event.target.value),
                          )
                        }
                        className="mt-1 min-h-10 w-full rounded-lg border border-zinc-300 bg-white px-2 text-sm font-normal tabular-nums text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                      />
                    </label>
                  ))}
                </div>
                {(
                  [
                    [
                      "zeroXConfirmed",
                      "zeroXJustification",
                      "Confirmer X = 0",
                      "Justification pour X = 0",
                      "Pourquoi X est réellement nul",
                    ],
                    [
                      "zeroIConfirmed",
                      "zeroIJustification",
                      "Confirmer I = 0",
                      "Justification pour I = 0",
                      "Pourquoi I est réellement nul",
                    ],
                  ] as const
                ).map(
                  ([
                    confirmKey,
                    reasonKey,
                    label,
                    reasonLabel,
                    placeholder,
                  ]) => (
                    <div
                      key={confirmKey}
                      className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-900"
                    >
                      <label className="flex items-center gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                        <input
                          type="checkbox"
                          checked={activeDossier.costBasis[confirmKey]}
                          onChange={(event) =>
                            setCostBasis(confirmKey, event.target.checked)
                          }
                          className="size-4 accent-violet-700"
                        />
                        {label}
                      </label>
                      <label className="mt-2 block text-[11px] font-semibold text-zinc-600 dark:text-zinc-300">
                        {reasonLabel}
                        <input
                          value={activeDossier.costBasis[reasonKey]}
                          onChange={(event) =>
                            setCostBasis(reasonKey, event.target.value)
                          }
                          placeholder={placeholder}
                          className="mt-1 min-h-10 w-full rounded-lg border border-zinc-300 bg-white px-3 text-xs font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                        />
                      </label>
                    </div>
                  ),
                )}
              </div>
            </fieldset>
          </div>

          <aside className="border-t border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/45 sm:p-6 xl:border-l xl:border-t-0">
            <div className="sticky top-24 space-y-5">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white dark:bg-white dark:text-zinc-950">
                  <ShieldCheck className="size-3.5" aria-hidden="true" />
                  {comparison.eligiblePathways.length}/5 admissible(s)
                </span>
                <button
                  type="button"
                  onClick={requestReset}
                  className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs font-medium text-zinc-500 hover:bg-zinc-200 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white"
                >
                  <RotateCcw className="size-3.5" aria-hidden="true" />
                  Réinitialiser
                </button>
              </div>

              {pendingReset ? (
                <div
                  role="alert"
                  aria-live="assertive"
                  className="rounded-xl border border-rose-300 bg-rose-50 p-4 text-rose-950 dark:border-rose-800 dark:bg-rose-950/30 dark:text-rose-100"
                >
                  <p className="m-0 text-sm font-bold">
                    Effacer le diagnostic affiché ?
                  </p>
                  <p className="mb-0 mt-1 text-xs leading-relaxed">
                    Les cinq dossiers à l’écran seront réinitialisés. Un
                    brouillon local déjà enregistré reste disponible tant que
                    vous ne le supprimez pas séparément.
                  </p>
                  <div className="mt-3 flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={reset}
                      className="min-h-10 rounded-lg bg-rose-700 px-3 py-2 text-xs font-bold text-white hover:bg-rose-800"
                    >
                      Oui, effacer l’écran
                    </button>
                    <button
                      type="button"
                      onClick={() => setPendingReset(false)}
                      className="min-h-10 rounded-lg border border-rose-300 bg-white px-3 py-2 text-xs font-bold text-rose-900 hover:bg-rose-100 dark:border-rose-700 dark:bg-zinc-950 dark:text-rose-100"
                    >
                      Annuler
                    </button>
                  </div>
                </div>
              ) : null}

              <div
                className={`rounded-xl border p-4 sm:p-5 ${verdictStyles[comparison.verdict]}`}
                aria-live="polite"
                aria-atomic="true"
              >
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] opacity-70">
                  Verdict final · {comparison.label}
                </p>
                <h4 className="m-0 text-base font-bold leading-snug">
                  {comparison.title}
                </h4>
                <p className="mb-0 mt-3 text-sm leading-relaxed opacity-85">
                  {comparison.summary}
                </p>
              </div>

              {activeResult ? (
                <div
                  className={`rounded-xl border p-4 ${candidateStyles[activeResult.verdict]}`}
                >
                  <p className="m-0 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                    Dossier ouvert
                  </p>
                  <p className="mb-0 mt-2 text-sm font-bold text-zinc-900 dark:text-zinc-100">
                    {activeResult.label}
                  </p>
                  <p className="mb-0 mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {activeResult.title}
                  </p>
                  <p className="mb-0 mt-2 text-[11px] text-zinc-500">
                    {activeResult.passedOperations}/
                    {activeResult.applicableOperations} opérations réussies ·{" "}
                    {activeResult.missingEvidence.length} preuve(s) ou coût(s) à
                    compléter
                  </p>
                </div>
              ) : null}

              <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
                <div className="border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
                  <p className="m-0 text-xs font-bold uppercase tracking-wider text-zinc-500">
                    Synthèse des cinq dossiers
                  </p>
                </div>
                <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  {EXCEL_PATHWAY_IDS.map((pathway) => {
                    const candidate = comparison.candidateResults[pathway];
                    return (
                      <button
                        key={pathway}
                        type="button"
                        aria-pressed={activePathway === pathway}
                        onClick={() => setActivePathway(pathway)}
                        className={`flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-xs ${
                          activePathway === pathway
                            ? "bg-violet-50 font-bold text-violet-950 dark:bg-violet-950/30 dark:text-violet-100"
                            : "text-zinc-600 dark:text-zinc-300"
                        }`}
                      >
                        <span>{EXCEL_PATHWAYS[pathway].shortLabel}</span>
                        <span className="text-right">
                          {candidate?.label ?? "Absent"}
                          <span className="block tabular-nums text-zinc-500">
                            {candidate?.costInterval
                              ? `${candidate.costInterval.minimum.toLocaleString("fr-FR", { maximumFractionDigits: 0 })}–${candidate.costInterval.maximum.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} ${dossiers[pathway].costBasis.currency}`
                              : "coût non comparable"}
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Prochaines actions
                </p>
                <ol className="m-0 space-y-3 p-0">
                  {comparison.actions.map((action, index) => (
                    <li
                      key={action}
                      className="flex gap-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300"
                    >
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-violet-700 shadow-sm dark:bg-zinc-800 dark:text-violet-300">
                        {index + 1}
                      </span>
                      {action}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
                <button
                  type="button"
                  onClick={copyResult}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
                >
                  {copyStatus === "copied" ? (
                    <Check className="size-4" aria-hidden="true" />
                  ) : (
                    <ClipboardCheck className="size-4" aria-hidden="true" />
                  )}
                  {copyStatus === "copied"
                    ? "Rapport copié"
                    : "Copier le rapport"}
                </button>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
                >
                  <Printer className="size-4" aria-hidden="true" />
                  Imprimer
                </button>
              </div>

              <p
                role="status"
                aria-live="polite"
                className={`m-0 min-h-5 text-xs font-medium ${
                  copyStatus === "error"
                    ? "text-red-700 dark:text-red-300"
                    : "text-emerald-700 dark:text-emerald-300"
                }`}
              >
                {copyStatus === "copied"
                  ? "Le cas commun, les cinq dossiers, les preuves, les coûts et le verdict ont été copiés."
                  : copyStatus === "error"
                    ? "La copie a échoué. Autorisez le presse-papiers, puis réessayez."
                    : ""}
              </p>

              {copyStatus === "error" ? (
                <label className="block text-[11px] font-semibold text-zinc-600 dark:text-zinc-300">
                  Copie manuelle du rapport
                  <textarea
                    readOnly
                    value={reportText}
                    onFocus={(event) => event.currentTarget.select()}
                    rows={8}
                    className="mt-1 w-full rounded-lg border border-zinc-300 bg-white p-2 font-mono text-[10px] font-normal leading-relaxed text-zinc-900 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
                  />
                </label>
              ) : null}

              <p className="m-0 text-[11px] leading-relaxed text-zinc-500">
                Version {EXCEL_DIAGNOSTIC_VERSION}. La copie et l’impression
                utilisent le même rapport autonome. Les réponses restent
                seulement en mémoire tant que vous ne choisissez pas une
                sauvegarde locale ou JSON. Les événements de mesure ne
                contiennent ni scénario, ni voie, ni verdict, ni preuve. Ce test
                n’est pas une homologation.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
