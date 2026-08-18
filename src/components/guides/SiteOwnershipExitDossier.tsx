"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import {
  ChevronDown,
  ClipboardCheck,
  Download,
  FileCheck2,
  Printer,
  RotateCcw,
} from "lucide-react";
import { copyTextToClipboard } from "@/lib/clipboard";
import {
  SITE_OWNERSHIP_ACCESS_ITEMS,
  SITE_OWNERSHIP_CONTRACT_QUESTIONS,
  SITE_OWNERSHIP_CRITICALITIES,
  SITE_OWNERSHIP_EXIT_PATHS,
  SITE_OWNERSHIP_PLATFORMS,
  SITE_OWNERSHIP_PROOFS,
  SITE_OWNERSHIP_SOURCE_DATE,
  buildSiteOwnershipDossierFilename,
  buildSiteOwnershipDossierReport,
  calculateSiteOwnershipTcoSeries,
  createEmptySiteOwnershipDossier,
  createFictitiousAlpIsolationDossier,
  effectiveSiteOwnershipAccessStatus,
  effectiveSiteOwnershipContractStatus,
  effectiveSiteOwnershipProofStatus,
  evaluateSiteOwnershipDossier,
  isSiteOwnershipAccessCritical,
  type SiteOwnershipAccessId,
  type SiteOwnershipAccessInput,
  type SiteOwnershipAuditStatus,
  type SiteOwnershipBusinessContext,
  type SiteOwnershipContractInput,
  type SiteOwnershipContractQuestionId,
  type SiteOwnershipContractStatus,
  type SiteOwnershipControlStatus,
  type SiteOwnershipCriticality,
  type SiteOwnershipDossier,
  type SiteOwnershipExitCostInput,
  type SiteOwnershipExitPathId,
  type SiteOwnershipPlatform,
  type SiteOwnershipProofId,
  type SiteOwnershipProofInput,
  type SiteOwnershipProofStatus,
  type SiteOwnershipTcoResult,
} from "@/lib/site-ownership-exit";

const fieldClass =
  "mt-1.5 min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm font-normal text-zinc-950 shadow-sm outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white";
const textAreaClass =
  "mt-1.5 min-h-24 w-full resize-y rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm font-normal leading-relaxed text-zinc-950 shadow-sm outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white";
const labelClass =
  "block text-xs font-semibold leading-relaxed text-zinc-700 dark:text-zinc-300";

const ACCESS_STATUS_OPTIONS: Array<{
  value: SiteOwnershipAuditStatus;
  label: string;
}> = [
  { value: "unknown", label: "ND — non contrôlé" },
  { value: "declared", label: "Déclaré, sans preuve suffisante" },
  { value: "verified", label: "Vérifié avec preuve" },
  { value: "blocked", label: "Bloqué ou inaccessible" },
  { value: "not-applicable", label: "Non applicable, à justifier" },
];

const CONTROL_STATUS_OPTIONS: Array<{
  value: SiteOwnershipControlStatus;
  label: string;
}> = [
  { value: "unknown", label: "ND" },
  { value: "yes", label: "Oui, contrôlé" },
  { value: "no", label: "Non" },
  { value: "not-supported", label: "Non proposé par le service" },
];

const PROOF_STATUS_OPTIONS: Array<{
  value: SiteOwnershipProofStatus;
  label: string;
}> = [
  { value: "unknown", label: "ND — non exécuté" },
  { value: "pass", label: "Réussi avec preuve" },
  { value: "fail", label: "Échec observé" },
  { value: "not-applicable", label: "Non applicable, à justifier" },
];

const CONTRACT_STATUS_OPTIONS: Array<{
  value: SiteOwnershipContractStatus;
  label: string;
}> = [
  { value: "unknown", label: "ND — pièce non lue" },
  { value: "yes", label: "Oui, référence précise" },
  { value: "no", label: "Non ou insuffisant" },
  { value: "not-applicable", label: "Non applicable, à justifier" },
];

const COST_FIELDS: Array<{
  key: Exclude<keyof SiteOwnershipExitCostInput, "assumptions">;
  label: string;
  unit: string;
  help: string;
  max?: number;
}> = [
  {
    key: "upfrontCost",
    label: "Coût initial ou devis",
    unit: "€ HT",
    help: "Prix demandé pour la remise, devis juridique ou devis de reconstruction selon le scénario.",
  },
  {
    key: "contingencyPercent",
    label: "Réserve ou dépassement",
    unit: "%",
    help: "0 si le prix est ferme ; sinon hypothèse explicitement documentée.",
    max: 100,
  },
  {
    key: "technicalAuditDays",
    label: "Audit technique",
    unit: "jours",
    help: "Inventaire, test du code, des exports, des licences et de la reprise.",
  },
  {
    key: "technicalDayRate",
    label: "Taux technique",
    unit: "€ HT/j",
    help: "Même convention de coût pour comparer les scénarios.",
  },
  {
    key: "migrationCost",
    label: "Migration et remise en service",
    unit: "€ HT",
    help: "Contenus, données, médias, SEO, DNS, formulaires, paiements et recette.",
  },
  {
    key: "internalDays",
    label: "Temps interne",
    unit: "jours",
    help: "Pilotage, validation, recherche de pièces et reprise des comptes.",
  },
  {
    key: "internalDayRate",
    label: "Coût du temps interne",
    unit: "€ /j",
    help: "Coût chargé ou convention interne identique entre scénarios.",
  },
  {
    key: "annualLicences",
    label: "Licences et services",
    unit: "€ HT/an",
    help: "Thème, extensions, polices, SaaS, stockage ou services techniques.",
  },
  {
    key: "annualMaintenance",
    label: "Maintenance",
    unit: "€ HT/an",
    help: "Entretien technique à périmètre comparable, hors nouvelles fonctions.",
  },
  {
    key: "downtimeWeeks",
    label: "Période d’impact",
    unit: "semaines",
    help: "Durée pendant laquelle l’acquisition ou la vente peut être dégradée ; 0 si aucune.",
  },
  {
    key: "leadDropPercent",
    label: "Baisse des demandes",
    unit: "%",
    help: "Hypothèse propre au dossier ; 0 si elle n’est pas applicable.",
    max: 100,
  },
];

type ContextTextKey =
  "dossierName" | "siteUrl" | "auditDate" | "currentSupplier";
type ContextNumberKey =
  "monthlyLeads" | "leadConversionPercent" | "contributionMarginPerSale";

function parseOptionalNumber(raw: string): number | null {
  if (raw.trim() === "") return null;
  return Number(raw.replace(",", "."));
}

function numberInputValue(value: number | null): number | "" {
  return value === null || !Number.isFinite(value) ? "" : value;
}

function formatEuro(value: number): string {
  return `${Math.round(value).toLocaleString("fr-FR")} €`;
}

function tcoCopy(result: SiteOwnershipTcoResult): string {
  if (result.kind === "unknown") {
    const count = new Set([...result.missing, ...result.invalid]).size;
    return `ND · ${count} champ(s) à corriger`;
  }
  return formatEuro(result.total);
}

function effectiveAccessCopy(
  status: ReturnType<typeof effectiveSiteOwnershipAccessStatus>,
): string {
  const labels = {
    unknown: "ND",
    declared: "Déclaré",
    verified: "Vérifié",
    blocked: "Bloqué",
    "not-applicable": "N/A justifié",
    "declared-from-unproven-verification": "Vérification incomplète",
  } satisfies Record<
    ReturnType<typeof effectiveSiteOwnershipAccessStatus>,
    string
  >;
  return labels[status];
}

function effectiveProofCopy(
  status: ReturnType<typeof effectiveSiteOwnershipProofStatus>,
): string {
  const labels = {
    unknown: "ND",
    pass: "Réussi avec preuve",
    fail: "Échec observé",
    "not-applicable": "N/A prouvé",
  } satisfies Record<
    ReturnType<typeof effectiveSiteOwnershipProofStatus>,
    string
  >;
  return labels[status];
}

function effectiveContractCopy(
  status: ReturnType<typeof effectiveSiteOwnershipContractStatus>,
): string {
  const labels = {
    unknown: "ND",
    yes: "Oui, documenté",
    no: "Non ou insuffisant",
    "not-applicable": "N/A documenté",
  } satisfies Record<
    ReturnType<typeof effectiveSiteOwnershipContractStatus>,
    string
  >;
  return labels[status];
}

function evaluationCopy(
  evaluation: ReturnType<typeof evaluateSiteOwnershipDossier>,
) {
  if (evaluation.code === "danger") {
    return {
      title: "Blocage ou échec observé",
      detail:
        "Sécurisez la continuité technique et faites qualifier les droits avant toute utilisation contestée.",
      className:
        "border-rose-300 bg-rose-50 text-rose-950 dark:border-rose-900 dark:bg-rose-950/30 dark:text-rose-100",
    };
  }
  if (evaluation.code === "documented") {
    return {
      title: "Dossier documenté, pas validation juridique",
      detail:
        "Les rubriques sont prouvées ou justifiées. Un avocat doit encore qualifier les droits et une équipe tierce confirmer la reprise réelle.",
      className:
        "border-emerald-300 bg-emerald-50 text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-100",
    };
  }
  return {
    title: "Dossier incomplet",
    detail:
      "Une case vide reste ND. Une déclaration sans pièce ne devient jamais une vérification.",
    className:
      "border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-100",
  };
}

function downloadLocalText(filename: string, content: string) {
  const url = URL.createObjectURL(
    new Blob([`\ufeff${content}`], {
      type: "text/plain;charset=utf-8",
    }),
  );
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.rel = "noopener";
  document.body.appendChild(link);
  try {
    link.click();
  } finally {
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1_000);
  }
}

export function SiteOwnershipExitDossier() {
  const instanceId = useId().replaceAll(":", "");
  const [dossier, setDossier] = useState<SiteOwnershipDossier>(
    createEmptySiteOwnershipDossier,
  );
  const [activePath, setActivePath] =
    useState<SiteOwnershipExitPathId>("negotiate");
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">(
    "idle",
  );
  const [downloaded, setDownloaded] = useState(false);
  const [resetRequested, setResetRequested] = useState(false);
  const resetTriggerRef = useRef<HTMLButtonElement>(null);
  const confirmResetRef = useRef<HTMLButtonElement>(null);
  const restoreResetFocusRef = useRef(false);

  useEffect(() => {
    if (resetRequested) {
      confirmResetRef.current?.focus();
      return;
    }
    if (restoreResetFocusRef.current) {
      restoreResetFocusRef.current = false;
      resetTriggerRef.current?.focus();
    }
  }, [resetRequested]);

  const evaluation = useMemo(
    () => evaluateSiteOwnershipDossier(dossier),
    [dossier],
  );
  const evaluationMessage = evaluationCopy(evaluation);
  const report = useMemo(
    () => buildSiteOwnershipDossierReport(dossier),
    [dossier],
  );
  const printReportBlocks = useMemo(() => report.split(/\n{2,}/), [report]);
  const pathResults = useMemo(
    () =>
      Object.fromEntries(
        SITE_OWNERSHIP_EXIT_PATHS.map((path) => [
          path.id,
          calculateSiteOwnershipTcoSeries(
            dossier.context,
            dossier.paths[path.id],
            path.id,
          ),
        ]),
      ) as Record<
        SiteOwnershipExitPathId,
        [SiteOwnershipTcoResult, SiteOwnershipTcoResult, SiteOwnershipTcoResult]
      >,
    [dossier],
  );

  function touch() {
    setCopyStatus("idle");
    setDownloaded(false);
  }

  function updateContext<K extends keyof SiteOwnershipBusinessContext>(
    key: K,
    value: SiteOwnershipBusinessContext[K],
  ) {
    setDossier((current) => ({
      ...current,
      context: { ...current.context, [key]: value },
    }));
    touch();
  }

  function updateAccess(
    id: SiteOwnershipAccessId,
    patch: Partial<SiteOwnershipAccessInput>,
  ) {
    setDossier((current) => ({
      ...current,
      accesses: {
        ...current.accesses,
        [id]: { ...current.accesses[id], ...patch },
      },
    }));
    touch();
  }

  function updateProof(
    id: SiteOwnershipProofId,
    patch: Partial<SiteOwnershipProofInput>,
  ) {
    setDossier((current) => ({
      ...current,
      proofs: {
        ...current.proofs,
        [id]: { ...current.proofs[id], ...patch },
      },
    }));
    touch();
  }

  function updateContract(
    id: SiteOwnershipContractQuestionId,
    patch: Partial<SiteOwnershipContractInput>,
  ) {
    setDossier((current) => ({
      ...current,
      contract: {
        ...current.contract,
        [id]: { ...current.contract[id], ...patch },
      },
    }));
    touch();
  }

  function updatePath(
    id: SiteOwnershipExitPathId,
    patch: Partial<SiteOwnershipExitCostInput>,
  ) {
    setDossier((current) => ({
      ...current,
      paths: {
        ...current.paths,
        [id]: { ...current.paths[id], ...patch },
      },
    }));
    touch();
  }

  function loadExample() {
    setDossier(createFictitiousAlpIsolationDossier());
    setActivePath("negotiate");
    setResetRequested(false);
    touch();
  }

  function resetDossier() {
    setDossier(createEmptySiteOwnershipDossier());
    setActivePath("negotiate");
    restoreResetFocusRef.current = true;
    setResetRequested(false);
    touch();
  }

  function cancelReset() {
    restoreResetFocusRef.current = true;
    setResetRequested(false);
  }

  async function copyReport() {
    const copied = await copyTextToClipboard(report);
    setCopyStatus(copied ? "copied" : "error");
  }

  function downloadReport() {
    downloadLocalText(buildSiteOwnershipDossierFilename(dossier), report);
    setDownloaded(true);
  }

  const activeCost = dossier.paths[activePath];
  const activePathTemplate = SITE_OWNERSHIP_EXIT_PATHS.find(
    (path) => path.id === activePath,
  )!;

  return (
    <>
      <style>
        {
          "@page { size: A4; margin: 14mm; } @media print { body *:not(#site-ownership-exit-dossier):not(#site-ownership-exit-dossier *):not(:has(#site-ownership-exit-dossier)) { display: none !important; } #site-ownership-exit-dossier { position: absolute !important; inset: 0 auto auto 0 !important; width: 100% !important; margin: 0 !important; overflow: visible !important; border: 0 !important; box-shadow: none !important; background: white !important; color: #18181b !important; } #site-ownership-exit-dossier > :not(.site-ownership-print-report) { display: none !important; } #site-ownership-exit-dossier .site-ownership-print-report { display: block !important; margin: 0 !important; background: white !important; color: #18181b !important; font-size: 9.5px !important; line-height: 1.45 !important; } #site-ownership-exit-dossier .site-ownership-print-report > pre { break-inside: avoid !important; page-break-inside: avoid !important; margin: 0 0 8px !important; white-space: pre-wrap !important; font-family: inherit !important; font-size: inherit !important; line-height: inherit !important; } #site-ownership-exit-dossier .site-ownership-print-report > pre.site-ownership-print-heading { break-after: avoid !important; page-break-after: avoid !important; font-weight: 700 !important; } }"
        }
      </style>
      <section
        id="site-ownership-exit-dossier"
        className="not-prose my-10 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
        aria-labelledby={`${instanceId}-title`}
        data-read-time-exclude="true"
      >
        <div className="site-ownership-print-report hidden p-6 font-sans text-[10.5px] leading-[1.5] print:block">
          {printReportBlocks.map((block, index) => {
            const isHeading =
              !block.includes("\n") && block === block.toUpperCase();
            return (
              <pre
                key={`${index}-${block.slice(0, 32)}`}
                className={
                  isHeading ? "site-ownership-print-heading" : undefined
                }
              >
                {block}
              </pre>
            );
          })}
        </div>

        <div className="border-b border-zinc-800 bg-zinc-950 px-4 py-6 text-white sm:px-6">
          <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-300">
            Outil local · aucune donnée envoyée · aucun conseil juridique
          </p>
          <h3
            id={`${instanceId}-title`}
            className="mb-0 mt-2 text-xl font-bold tracking-tight sm:text-2xl"
          >
            Dossier 14 accès · 8 preuves ·{" "}
            {SITE_OWNERSHIP_CONTRACT_QUESTIONS.length} questions · TCO 12/36/60
          </h3>
          <p className="mb-0 mt-3 max-w-4xl text-sm leading-relaxed text-zinc-300">
            Documentez ce que l’entreprise contrôle réellement, exécutez les
            tests de reprise, reliez les réponses au contrat et comparez trois
            voies de sortie. « ND » ne vaut jamais zéro ; « déclaré » ne vaut
            jamais « vérifié ». Aucune sauvegarde automatique : copier,
            télécharger ou imprimer avant de recharger ou fermer la page.
          </p>
        </div>

        <div
          className="space-y-9 p-4 print:hidden sm:p-6"
          data-site-ownership-interactive
        >
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={loadExample}
              className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-violet-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2"
            >
              <FileCheck2 className="h-4 w-4" aria-hidden="true" />
              Charger l’exemple fictif
            </button>
            {!resetRequested ? (
              <button
                ref={resetTriggerRef}
                type="button"
                onClick={() => setResetRequested(true)}
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900"
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                Effacer le dossier
              </button>
            ) : (
              <div className="flex flex-wrap items-center gap-2 rounded-lg border border-rose-300 bg-rose-50 p-2 text-xs text-rose-950 dark:border-rose-900 dark:bg-rose-950/30 dark:text-rose-100">
                <span>Effacer toutes les saisies locales ?</span>
                <button
                  ref={confirmResetRef}
                  type="button"
                  onClick={resetDossier}
                  className="min-h-9 rounded-md bg-rose-700 px-3 font-semibold text-white"
                >
                  Oui, effacer
                </button>
                <button
                  type="button"
                  onClick={cancelReset}
                  className="min-h-9 rounded-md border border-rose-300 px-3 font-semibold dark:border-rose-800"
                >
                  Annuler
                </button>
              </div>
            )}
          </div>

          <div
            className={`rounded-xl border p-4 ${evaluationMessage.className}`}
            role="status"
            aria-live="polite"
          >
            <p className="m-0 text-sm font-bold">{evaluationMessage.title}</p>
            <p className="mb-0 mt-1 text-xs leading-relaxed">
              {evaluationMessage.detail}
            </p>
            {!evaluation.context.complete ? (
              <p className="mb-0 mt-2 text-xs leading-relaxed">
                Contexte à compléter : {evaluation.context.issues.join(", ")}.
              </p>
            ) : null}
            <div className="mt-3 grid gap-2 text-xs sm:grid-cols-3">
              <span>
                Accès : {evaluation.access.verified}/
                {SITE_OWNERSHIP_ACCESS_ITEMS.length} vérifiés ·{" "}
                {evaluation.access.controlGaps} contrôle(s) à corriger
              </span>
              <span>
                Preuves : {evaluation.proof.passed}/
                {SITE_OWNERSHIP_PROOFS.length} réussies ·{" "}
                {evaluation.proof.failed} en échec
              </span>
              <span>
                Contrat : {evaluation.contract.yes}/
                {SITE_OWNERSHIP_CONTRACT_QUESTIONS.length} documentées ·{" "}
                {evaluation.contract.no} réponse(s) négative(s)
              </span>
            </div>
            {evaluation.criticalIssues.length > 0 ? (
              <div className="mt-3 border-t border-current/20 pt-3 text-xs">
                <p className="m-0 font-bold">Premiers points à traiter :</p>
                <ul className="mb-0 mt-1 list-disc space-y-1 pl-5">
                  {evaluation.criticalIssues.slice(0, 5).map((issue) => (
                    <li key={issue}>{issue}</li>
                  ))}
                </ul>
                {evaluation.criticalIssues.length > 5 ? (
                  <p className="mb-0 mt-1">
                    + {evaluation.criticalIssues.length - 5} autre(s) point(s)
                    dans le rapport TXT.
                  </p>
                ) : null}
              </div>
            ) : null}
          </div>

          <fieldset>
            <legend className="text-base font-bold text-zinc-950 dark:text-white">
              1. Définir le dossier et la valeur exposée
            </legend>
            <p className="mb-4 mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              Référentiel et documentations du guide contrôlés le{" "}
              {SITE_OWNERSHIP_SOURCE_DATE}. Datez séparément vos propres pièces.
              Les données restent dans votre navigateur.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {(
                [
                  ["dossierName", "Nom du dossier", "Ex. reprise site 2026"],
                  ["siteUrl", "URL du site", "https://…"],
                  [
                    "currentSupplier",
                    "Prestataire ou équipe actuelle",
                    "Raison sociale ou rôle",
                  ],
                ] as Array<[ContextTextKey, string, string]>
              ).map(([key, label, placeholder]) => (
                <label key={key} className={labelClass}>
                  {label}
                  <input
                    type={key === "siteUrl" ? "url" : "text"}
                    value={dossier.context[key]}
                    placeholder={placeholder}
                    onChange={(event) => updateContext(key, event.target.value)}
                    className={fieldClass}
                  />
                </label>
              ))}
              <label className={labelClass}>
                Date de l’audit
                <input
                  type="date"
                  value={dossier.context.auditDate}
                  onChange={(event) =>
                    updateContext("auditDate", event.target.value)
                  }
                  className={fieldClass}
                />
              </label>
              <label className={labelClass}>
                Plateforme ou architecture
                <select
                  value={dossier.context.platform}
                  onChange={(event) =>
                    updateContext(
                      "platform",
                      event.target.value as SiteOwnershipPlatform,
                    )
                  }
                  className={fieldClass}
                >
                  {SITE_OWNERSHIP_PLATFORMS.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className={labelClass}>
                Criticité métier
                <select
                  value={dossier.context.criticality}
                  onChange={(event) =>
                    updateContext(
                      "criticality",
                      event.target.value as SiteOwnershipCriticality,
                    )
                  }
                  className={fieldClass}
                >
                  {SITE_OWNERSHIP_CRITICALITIES.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {(
                [
                  [
                    "monthlyLeads",
                    "Demandes mensuelles",
                    "Moyenne observée, pas objectif commercial.",
                    "",
                    1_000_000,
                  ],
                  [
                    "leadConversionPercent",
                    "Conversion des demandes",
                    "Part des demandes qui deviennent une vente.",
                    "%",
                    100,
                  ],
                  [
                    "contributionMarginPerSale",
                    "Marge contributive par vente",
                    "Marge, pas chiffre d’affaires.",
                    "€",
                    1_000_000_000,
                  ],
                ] as Array<[ContextNumberKey, string, string, string, number]>
              ).map(([key, label, help, unit, max]) => (
                <label key={key} className={labelClass}>
                  {label} {unit ? `(${unit})` : ""}
                  <input
                    type="number"
                    min="0"
                    max={max}
                    step="0.01"
                    inputMode="decimal"
                    value={numberInputValue(dossier.context[key])}
                    onChange={(event) =>
                      updateContext(
                        key,
                        parseOptionalNumber(event.target.value),
                      )
                    }
                    className={fieldClass}
                  />
                  <span className="mt-1 block font-normal text-zinc-500 dark:text-zinc-400">
                    {help} Requis seulement si un scénario prévoit une baisse
                    d’activité.
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-base font-bold text-zinc-950 dark:text-white">
              2. Auditer les 14 accès
            </legend>
            <p className="mb-4 mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              « Vérifié » décrit un fait prouvé, pas forcément favorable.
              L’outil exige l’organisation observée, le contrôle effectif par
              l’entreprise, une pièce, une date non future, la MFA et le
              secours. Un « non » critique déclenche un danger ; une protection
              absente ou non proposée empêche tout résultat vert.
            </p>
            <div className="space-y-3">
              {SITE_OWNERSHIP_ACCESS_ITEMS.map((template, index) => {
                const input = dossier.accesses[template.id];
                const effective = effectiveSiteOwnershipAccessStatus(
                  input,
                  dossier.context.auditDate,
                );
                return (
                  <details
                    key={template.id}
                    className="group rounded-xl border border-zinc-200 bg-zinc-50 open:bg-white dark:border-zinc-800 dark:bg-zinc-900/50 dark:open:bg-zinc-950"
                  >
                    <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-violet-600">
                      <span className="text-sm font-semibold text-zinc-950 dark:text-white">
                        {index + 1}. {template.label}
                        {isSiteOwnershipAccessCritical(
                          template.id,
                          dossier.context.criticality,
                        ) ? (
                          <span className="ml-2 text-[10px] uppercase tracking-wide text-rose-700 dark:text-rose-300">
                            critique
                          </span>
                        ) : null}
                      </span>
                      <span className="flex shrink-0 items-center gap-2">
                        <span className="rounded-full bg-zinc-200 px-2.5 py-1 text-[10px] font-bold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                          {effectiveAccessCopy(effective)}
                        </span>
                        <ChevronDown
                          className="h-4 w-4 text-zinc-500 transition-transform group-open:rotate-180"
                          aria-hidden="true"
                        />
                      </span>
                    </summary>
                    <div className="grid gap-4 border-t border-zinc-200 p-4 dark:border-zinc-800 md:grid-cols-2">
                      <label className={labelClass}>
                        Statut
                        <select
                          value={input.status}
                          onChange={(event) =>
                            updateAccess(template.id, {
                              status: event.target
                                .value as SiteOwnershipAuditStatus,
                            })
                          }
                          className={fieldClass}
                        >
                          {ACCESS_STATUS_OPTIONS.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </label>
                      <label className={labelClass}>
                        Titulaire, organisation ou contrôle observé
                        <input
                          value={input.ownerControl}
                          onChange={(event) =>
                            updateAccess(template.id, {
                              ownerControl: event.target.value,
                            })
                          }
                          className={fieldClass}
                          placeholder="Nom du compte, de l’organisation ou du titulaire"
                        />
                      </label>
                      <label className={labelClass}>
                        Contrôle effectif par l’entreprise
                        <select
                          value={input.companyControl}
                          onChange={(event) =>
                            updateAccess(template.id, {
                              companyControl: event.target
                                .value as SiteOwnershipControlStatus,
                            })
                          }
                          className={fieldClass}
                        >
                          {CONTROL_STATUS_OPTIONS.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </label>
                      <label className={labelClass}>
                        Administrateur de secours
                        <select
                          value={input.backupAdmin}
                          onChange={(event) =>
                            updateAccess(template.id, {
                              backupAdmin: event.target
                                .value as SiteOwnershipControlStatus,
                            })
                          }
                          className={fieldClass}
                        >
                          {CONTROL_STATUS_OPTIONS.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </label>
                      <label className={labelClass}>
                        Authentification multifacteur (MFA)
                        <select
                          value={input.mfa}
                          onChange={(event) =>
                            updateAccess(template.id, {
                              mfa: event.target
                                .value as SiteOwnershipControlStatus,
                            })
                          }
                          className={fieldClass}
                        >
                          {CONTROL_STATUS_OPTIONS.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </label>
                      <label className={labelClass}>
                        Référence de la preuve
                        <textarea
                          value={input.evidenceRef}
                          onChange={(event) =>
                            updateAccess(template.id, {
                              evidenceRef: event.target.value,
                            })
                          }
                          className={textAreaClass}
                          placeholder="Capture, export, ticket, journal ou test — sans coller de secret"
                        />
                      </label>
                      <label className={labelClass}>
                        Date de vérification
                        <input
                          type="date"
                          value={input.checkedOn}
                          onChange={(event) =>
                            updateAccess(template.id, {
                              checkedOn: event.target.value,
                            })
                          }
                          className={fieldClass}
                        />
                        <span className="mt-1 block font-normal text-zinc-500 dark:text-zinc-400">
                          Résultat attendu : {template.proof}
                        </span>
                      </label>
                      <label className={`${labelClass} md:col-span-2`}>
                        Action suivante
                        <textarea
                          value={input.nextAction}
                          onChange={(event) =>
                            updateAccess(template.id, {
                              nextAction: event.target.value,
                            })
                          }
                          className={textAreaClass}
                          placeholder="Responsable, action, échéance et preuve attendue"
                        />
                      </label>
                      {input.status === "not-applicable" ? (
                        <label className={`${labelClass} md:col-span-2`}>
                          Motif précis de non-applicabilité
                          <textarea
                            value={input.notApplicableReason}
                            onChange={(event) =>
                              updateAccess(template.id, {
                                notApplicableReason: event.target.value,
                              })
                            }
                            className={textAreaClass}
                            placeholder="Ex. aucun paiement sur ce site ; preuve : inventaire fonctionnel daté…"
                          />
                        </label>
                      ) : null}
                    </div>
                  </details>
                );
              })}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-base font-bold text-zinc-950 dark:text-white">
              3. Exécuter les 8 preuves de reprise
            </legend>
            <p className="mb-4 mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              Un document de procédure n’est pas un test réussi. « Pass » exige
              une référence et une date ; « fail » reste un échec même si le
              prestataire promet de corriger.
            </p>
            <div className="space-y-3">
              {SITE_OWNERSHIP_PROOFS.map((template, index) => {
                const input = dossier.proofs[template.id];
                const effective = effectiveSiteOwnershipProofStatus(
                  input,
                  dossier.context.auditDate,
                );
                return (
                  <details
                    key={template.id}
                    className="group rounded-xl border border-zinc-200 bg-zinc-50 open:bg-white dark:border-zinc-800 dark:bg-zinc-900/50 dark:open:bg-zinc-950"
                  >
                    <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-violet-600">
                      <span className="text-sm font-semibold text-zinc-950 dark:text-white">
                        {index + 1}. {template.label}
                      </span>
                      <span className="flex shrink-0 items-center gap-2">
                        <span className="rounded-full bg-zinc-200 px-2.5 py-1 text-[10px] font-bold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                          {effectiveProofCopy(effective)}
                        </span>
                        <ChevronDown
                          className="h-4 w-4 text-zinc-500 transition-transform group-open:rotate-180"
                          aria-hidden="true"
                        />
                      </span>
                    </summary>
                    <div className="grid gap-4 border-t border-zinc-200 p-4 dark:border-zinc-800 md:grid-cols-2">
                      <label className={labelClass}>
                        Résultat
                        <select
                          value={input.status}
                          onChange={(event) =>
                            updateProof(template.id, {
                              status: event.target
                                .value as SiteOwnershipProofStatus,
                            })
                          }
                          className={fieldClass}
                        >
                          {PROOF_STATUS_OPTIONS.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </label>
                      <label className={labelClass}>
                        Date d’exécution
                        <input
                          type="date"
                          value={input.checkedOn}
                          onChange={(event) =>
                            updateProof(template.id, {
                              checkedOn: event.target.value,
                            })
                          }
                          className={fieldClass}
                        />
                      </label>
                      <label className={labelClass}>
                        Preuve et résultat brut
                        <textarea
                          value={input.evidenceRef}
                          onChange={(event) =>
                            updateProof(template.id, {
                              evidenceRef: event.target.value,
                            })
                          }
                          className={textAreaClass}
                          placeholder="Environnement, version, personne, scénario, résultat et lien interne"
                        />
                      </label>
                      <label className={labelClass}>
                        Action suivante
                        <textarea
                          value={input.nextAction}
                          onChange={(event) =>
                            updateProof(template.id, {
                              nextAction: event.target.value,
                            })
                          }
                          className={textAreaClass}
                        />
                        <span className="mt-1 block font-normal text-zinc-500 dark:text-zinc-400">
                          Attendu : {template.expected}
                        </span>
                      </label>
                      {input.status === "not-applicable" ? (
                        <label className={`${labelClass} md:col-span-2`}>
                          Motif précis de non-applicabilité
                          <textarea
                            value={input.notApplicableReason}
                            onChange={(event) =>
                              updateProof(template.id, {
                                notApplicableReason: event.target.value,
                              })
                            }
                            className={textAreaClass}
                          />
                        </label>
                      ) : null}
                    </div>
                  </details>
                );
              })}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-base font-bold text-zinc-950 dark:text-white">
              4. Relier les {SITE_OWNERSHIP_CONTRACT_QUESTIONS.length} questions
              au contrat
            </legend>
            <p className="mb-4 mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              La référence doit permettre à un avocat de retrouver la clause,
              l’annexe ou la pièce. L’outil ne juge pas sa validité.
            </p>
            <div className="space-y-3">
              {SITE_OWNERSHIP_CONTRACT_QUESTIONS.map((template, index) => {
                const input = dossier.contract[template.id];
                const effective = effectiveSiteOwnershipContractStatus(input);
                return (
                  <details
                    key={template.id}
                    className="group rounded-xl border border-zinc-200 bg-zinc-50 open:bg-white dark:border-zinc-800 dark:bg-zinc-900/50 dark:open:bg-zinc-950"
                  >
                    <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-violet-600">
                      <span className="text-sm font-semibold text-zinc-950 dark:text-white">
                        {index + 1}. {template.label}
                      </span>
                      <span className="flex shrink-0 items-center gap-2">
                        <span className="rounded-full bg-zinc-200 px-2.5 py-1 text-[10px] font-bold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                          {effectiveContractCopy(effective)}
                        </span>
                        <ChevronDown
                          className="h-4 w-4 text-zinc-500 transition-transform group-open:rotate-180"
                          aria-hidden="true"
                        />
                      </span>
                    </summary>
                    <div className="grid gap-4 border-t border-zinc-200 p-4 dark:border-zinc-800 md:grid-cols-2">
                      <label className={labelClass}>
                        Réponse documentaire
                        <select
                          value={input.status}
                          onChange={(event) =>
                            updateContract(template.id, {
                              status: event.target
                                .value as SiteOwnershipContractStatus,
                            })
                          }
                          className={fieldClass}
                        >
                          {CONTRACT_STATUS_OPTIONS.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </label>
                      <label className={labelClass}>
                        Clause, annexe ou pièce
                        <textarea
                          value={input.contractRef}
                          onChange={(event) =>
                            updateContract(template.id, {
                              contractRef: event.target.value,
                            })
                          }
                          className={textAreaClass}
                          placeholder="Ex. contrat signé, art. 8.2 + annexe B, version et date"
                        />
                      </label>
                      <label className={`${labelClass} md:col-span-2`}>
                        Action à faire valider
                        <textarea
                          value={input.nextAction}
                          onChange={(event) =>
                            updateContract(template.id, {
                              nextAction: event.target.value,
                            })
                          }
                          className={textAreaClass}
                        />
                        <span className="mt-1 block font-normal text-zinc-500 dark:text-zinc-400">
                          Attendu : {template.expected}
                        </span>
                      </label>
                      {input.status === "not-applicable" ? (
                        <label className={`${labelClass} md:col-span-2`}>
                          Motif précis de non-applicabilité
                          <textarea
                            value={input.notApplicableReason}
                            onChange={(event) =>
                              updateContract(template.id, {
                                notApplicableReason: event.target.value,
                              })
                            }
                            className={textAreaClass}
                          />
                        </label>
                      ) : null}
                    </div>
                  </details>
                );
              })}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-base font-bold text-zinc-950 dark:text-white">
              5. Comparer trois scénarios à 12, 36 et 60 mois
            </legend>
            <p className="mb-4 mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              Formule : devis corrigé de la réserve + audit + migration + temps
              interne + marge exposée pendant l’impact + licences et maintenance
              sur l’horizon. Il s’agit d’un coût brut, non d’un différentiel
              avec le contrat actuel. Les frais juridiques restent ND sans devis
              et cadrage d’un avocat.
            </p>
            <div className="grid gap-2 md:grid-cols-3">
              {SITE_OWNERSHIP_EXIT_PATHS.map((path) => {
                const results = pathResults[path.id];
                return (
                  <button
                    key={path.id}
                    type="button"
                    aria-pressed={activePath === path.id}
                    onClick={() => setActivePath(path.id)}
                    className={`min-h-20 rounded-xl border p-3 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 ${
                      activePath === path.id
                        ? "border-violet-500 bg-violet-50 dark:bg-violet-950/30"
                        : "border-zinc-200 bg-white hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900"
                    }`}
                  >
                    <span className="block text-sm font-bold text-zinc-950 dark:text-white">
                      {path.label}
                    </span>
                    <span className="mt-1 block text-xs text-zinc-500 dark:text-zinc-400">
                      36 mois : {tcoCopy(results[1])}
                    </span>
                  </button>
                );
              })}
            </div>

            <section
              className="mt-5 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-5"
              aria-labelledby={`${instanceId}-active-path`}
            >
              <h4
                id={`${instanceId}-active-path`}
                className="m-0 text-base font-bold text-zinc-950 dark:text-white"
              >
                {activePathTemplate.label}
              </h4>
              <p className="mb-4 mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                {activePathTemplate.help}
              </p>
              <div className="grid gap-3 md:grid-cols-2">
                {COST_FIELDS.map((field) => (
                  <label
                    key={field.key}
                    className="rounded-xl border border-zinc-200 bg-white p-3 text-xs font-semibold text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
                  >
                    {field.label}{" "}
                    <span className="font-normal text-zinc-500">
                      ({field.unit})
                    </span>
                    <input
                      type="number"
                      min="0"
                      max={field.max}
                      step="0.01"
                      inputMode="decimal"
                      value={numberInputValue(activeCost[field.key])}
                      onChange={(event) =>
                        updatePath(activePath, {
                          [field.key]: parseOptionalNumber(event.target.value),
                        })
                      }
                      className={fieldClass}
                    />
                    <span className="mt-1 block font-normal leading-relaxed text-zinc-500 dark:text-zinc-400">
                      {field.help}
                    </span>
                  </label>
                ))}
                <label
                  className={`${labelClass} rounded-xl border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-950 md:col-span-2`}
                >
                  Hypothèses, exclusions et source des montants (obligatoire)
                  <textarea
                    value={activeCost.assumptions}
                    onChange={(event) =>
                      updatePath(activePath, {
                        assumptions: event.target.value,
                      })
                    }
                    className={textAreaClass}
                    placeholder={
                      activePath === "legal"
                        ? "Devis de l’avocat, date JJ/MM/AAAA, stratégie couverte, exclusions, aléas et personne qui valide"
                        : "Devis, date, périmètre, exclusions, incertitudes et personne qui doit valider"
                    }
                  />
                </label>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {pathResults[activePath].map((result) => (
                  <div
                    key={result.horizonMonths}
                    className="rounded-xl border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-950"
                  >
                    <p className="m-0 text-[10px] font-bold uppercase tracking-wide text-zinc-500">
                      {result.horizonMonths} mois
                    </p>
                    <p className="mb-0 mt-1 text-sm font-bold text-zinc-950 dark:text-white">
                      {tcoCopy(result)}
                    </p>
                    {result.kind === "known" ? (
                      <p className="mb-0 mt-1 text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-400">
                        Initial {formatEuro(result.initial)} · récurrent{" "}
                        {formatEuro(result.recurring)} · marge exposée{" "}
                        {formatEuro(result.interruptionLoss)}
                      </p>
                    ) : (
                      <p className="mb-0 mt-1 text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-400">
                        {[...result.missing, ...result.invalid]
                          .slice(0, 3)
                          .join(" · ")}
                        {[...result.missing, ...result.invalid].length > 3
                          ? "…"
                          : ""}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <div
              className="mt-4 overflow-x-auto rounded-xl border border-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 dark:border-zinc-800"
              tabIndex={0}
              role="region"
              aria-label="Tableau comparatif des coûts de sortie ; défilement horizontal possible"
            >
              <table className="w-full min-w-[620px] border-collapse text-left text-xs">
                <caption className="sr-only">
                  Comparaison des trois scénarios de sortie
                </caption>
                <thead className="bg-zinc-100 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                  <tr>
                    <th className="px-3 py-2.5 font-semibold">Scénario</th>
                    <th className="px-3 py-2.5 font-semibold">12 mois</th>
                    <th className="px-3 py-2.5 font-semibold">36 mois</th>
                    <th className="px-3 py-2.5 font-semibold">60 mois</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                  {SITE_OWNERSHIP_EXIT_PATHS.map((path) => (
                    <tr key={path.id}>
                      <th className="px-3 py-2.5 font-semibold text-zinc-950 dark:text-white">
                        {path.label}
                      </th>
                      {pathResults[path.id].map((result) => (
                        <td
                          key={result.horizonMonths}
                          className="px-3 py-2.5 text-zinc-600 dark:text-zinc-300"
                        >
                          {tcoCopy(result)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mb-0 mt-3 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              Le total le plus bas parmi les scénarios complets n’est pas une
              recommandation. Un scénario ND ne vaut ni zéro ni exclusion.
              Faites décider séparément les droits, la continuité, le risque
              commercial et les coûts. Le calcul n’actualise ni inflation, ni
              fiscalité, ni valeur temps de l’argent : saisissez, lorsque
              pertinents, chevauchement, décommissionnement, cloud, données,
              sécurité et impacts SEO dans les postes et les hypothèses.
            </p>
          </fieldset>

          <section
            aria-labelledby={`${instanceId}-export`}
            className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-5"
          >
            <h4
              id={`${instanceId}-export`}
              className="m-0 text-base font-bold text-zinc-950 dark:text-white"
            >
              Exporter le dossier de travail
            </h4>
            <p className="mb-4 mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              Le fichier texte contient les ND, les statuts retenus, les preuves
              et toutes les hypothèses de calcul. Aucun envoi réseau n’est
              effectué.
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={downloadReport}
                className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-violet-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Télécharger le TXT
              </button>
              <button
                type="button"
                onClick={copyReport}
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:bg-zinc-900"
              >
                <ClipboardCheck className="h-4 w-4" aria-hidden="true" />
                Copier le rapport
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:bg-zinc-900"
              >
                <Printer className="h-4 w-4" aria-hidden="true" />
                Imprimer
              </button>
            </div>
            <p
              className="mb-0 mt-3 min-h-5 text-xs text-zinc-600 dark:text-zinc-300"
              role="status"
              aria-live="polite"
            >
              {downloaded
                ? "Fichier préparé localement."
                : copyStatus === "copied"
                  ? "Rapport copié."
                  : copyStatus === "error"
                    ? "Copie impossible dans ce navigateur ; utilisez le téléchargement."
                    : ""}
            </p>
          </section>
        </div>
      </section>
    </>
  );
}
