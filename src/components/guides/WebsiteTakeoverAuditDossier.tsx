"use client";

import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { createPortal } from "react-dom";
import {
  ClipboardCheck,
  Download,
  FileJson,
  Printer,
  RotateCcw,
  ShieldAlert,
} from "lucide-react";
import { copyTextToClipboard } from "@/lib/clipboard";
import {
  WEBSITE_TAKEOVER_COST_CATEGORIES,
  WEBSITE_TAKEOVER_COST_CATEGORY_LABELS,
  WEBSITE_TAKEOVER_INSUFFICIENT_PROOF_KINDS,
  WEBSITE_TAKEOVER_PROOF_LABELS,
  WEBSITE_TAKEOVER_TCO_HORIZONS,
  WEBSITE_TAKEOVER_TRAJECTORIES,
  WEBSITE_TAKEOVER_TRAJECTORY_IDS,
  WEBSITE_TAKEOVER_ZONE_IDS,
  WEBSITE_TAKEOVER_ZONES,
  buildWebsiteTakeoverAuditCsv,
  buildWebsiteTakeoverAuditFilename,
  buildWebsiteTakeoverAuditJson,
  buildWebsiteTakeoverAuditReport,
  createEmptyWebsiteTakeoverAuditDossier,
  createFictitiousWebsiteTakeoverAuditDossier,
  evaluateWebsiteTakeoverAudit,
  formatWebsiteTakeoverCents,
  formatWebsiteTakeoverZoneImpact,
  parseWebsiteTakeoverAuditJson,
  redactWebsiteTakeoverSecretsBestEffort,
  type WebsiteTakeoverAuditContext,
  type WebsiteTakeoverAuditDossier,
  type WebsiteTakeoverComplexityProfile,
  type WebsiteTakeoverCostCategory,
  type WebsiteTakeoverCostFrequency,
  type WebsiteTakeoverCostLine,
  type WebsiteTakeoverEvidenceStatus,
  type WebsiteTakeoverProofKind,
  type WebsiteTakeoverStopProfile,
  type WebsiteTakeoverTaxBasis,
  type WebsiteTakeoverTcoConvention,
  type WebsiteTakeoverTcoIssue,
  type WebsiteTakeoverTrajectoryId,
  type WebsiteTakeoverTrajectoryTcoInput,
  type WebsiteTakeoverVerdict,
  type WebsiteTakeoverZoneEntry,
  type WebsiteTakeoverZoneId,
} from "@/lib/website-takeover-audit";

const INPUT_CLASS =
  "mt-1.5 block min-h-11 w-full min-w-0 rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none focus-visible:border-violet-600 focus-visible:ring-2 focus-visible:ring-violet-300 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:focus-visible:ring-violet-800";
const TEXTAREA_CLASS = `${INPUT_CLASS} min-h-24 resize-y leading-relaxed`;
const LABEL_CLASS =
  "block min-w-0 text-sm font-semibold text-zinc-800 dark:text-zinc-200";
const HELP_CLASS =
  "mt-1 block text-xs font-normal leading-relaxed text-zinc-500 dark:text-zinc-400";
const BUTTON_CLASS =
  "inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto";
const HISTORY_GUARD_STATE_KEY = "__websiteTakeoverAuditGuard";

const EVIDENCE_STATUS_OPTIONS: Array<{
  value: WebsiteTakeoverEvidenceStatus;
  label: string;
}> = [
  { value: "unknown", label: "Non vérifié" },
  { value: "declared", label: "Déclaré, mais non prouvé" },
  { value: "verified", label: "Vérifié sur une preuve structurée" },
  { value: "failed", label: "Contrôle en échec" },
  { value: "NA", label: "Non applicable, avec justification" },
];

const EVIDENCE_STATUS_LABELS: Record<WebsiteTakeoverEvidenceStatus, string> = {
  unknown: "Non vérifié",
  declared: "Déclaré, non prouvé",
  verified: "Vérifié",
  failed: "Échec",
  NA: "Non applicable",
};

const STOP_QUESTIONS: Array<{
  key: keyof WebsiteTakeoverStopProfile;
  label: string;
  help: string;
}> = [
  {
    key: "authorizationConfirmed",
    label: "L’autorisation d’auditer et d’intervenir est-elle confirmée ?",
    help: "Une réponse « non » impose un STOP ; une inconnue interdit de conclure.",
  },
  {
    key: "activeCompromise",
    label: "Une compromission active est-elle suspectée ou confirmée ?",
    help: "Une réponse « oui » oriente d’abord vers la réponse à incident.",
  },
  {
    key: "destructiveOperationPlanned",
    label: "Une opération destructive est-elle envisagée ?",
    help: "Migration, écrasement, suppression ou bascule irréversible doivent être nommés.",
  },
  {
    key: "restoreProven",
    label: "La restauration nécessaire a-t-elle été réellement prouvée ?",
    help: "Cette réponse devient bloquante dès qu’une opération destructive est prévue.",
  },
  {
    key: "isolatedTestingPossible",
    label:
      "Les essais peuvent-ils être isolés de la production et des données réelles ?",
    help: "Une réponse « non » impose un STOP pour le test envisagé.",
  },
  {
    key: "blockingAuthorityOrLegalDispute",
    label:
      "Existe-t-il un litige bloquant d’autorité, de mandat ou de droits ?",
    help: "Une réponse « oui » interdit de présumer l’intervention autorisée.",
  },
];

const COMPLEXITY_QUESTIONS: Array<{
  key: keyof WebsiteTakeoverComplexityProfile;
  label: string;
  help: string;
}> = [
  {
    key: "hasPayments",
    label: "Paiements",
    help: "Encaissement, remboursement ou rapprochement.",
  },
  {
    key: "hasAuthentication",
    label: "Authentification",
    help: "Comptes clients, espace privé ou administration.",
  },
  {
    key: "hasAnyPersonalDataProcessing",
    label: "Traitement de données personnelles",
    help:
      "Répondez oui dès qu’une personne peut être identifiée, même par un simple formulaire de contact. Ce critère rend la zone RGPD applicable sans imposer seul un audit complet.",
  },
  {
    key: "processesPersonalData",
    label: "Accès réel ou traitement de données à risque",
    help:
      "Répondez oui si la reprise exige l’accès à de vraies données personnelles ou si le traitement est sensible, substantiel ou à risque. La zone RGPD reste qualifiée séparément.",
  },
  {
    key: "hasMutableBusinessData",
    label: "Données métier modifiables",
    help: "Commandes, stocks, dossiers, contenus ou fichiers.",
  },
  {
    key: "plansMigration",
    label: "Migration prévue",
    help: "Socle, hébergeur, données, domaine ou URL.",
  },
  {
    key: "hasCustomCode",
    label: "Code spécifique",
    help: "Développements propres ou personnalisations importantes.",
  },
  {
    key: "hasMultipleEnvironments",
    label: "Plusieurs environnements",
    help: "Production, préproduction, recette ou développement.",
  },
  {
    key: "hasCriticalIntegration",
    label: "Intégration critique",
    help: "Paiement, ERP, CRM, e-mail, transport ou API métier.",
  },
  {
    key: "highSeoStake",
    label: "Enjeu SEO fort",
    help: "Trafic organique ou revenus dépendants des URL indexées.",
  },
  {
    key: "hasSla",
    label: "Engagement de service",
    help: "Disponibilité, délai d’intervention ou pénalité.",
  },
  {
    key: "hasRpo",
    label: "Objectif de perte de données",
    help: "Perte maximale admissible explicitement décidée.",
  },
  {
    key: "hasRto",
    label: "Objectif de reprise",
    help: "Durée maximale admissible avant rétablissement.",
  },
  {
    key: "hasStructuralUnknown",
    label: "Inconnue structurante",
    help: "Élément susceptible de changer le périmètre ou la décision.",
  },
];

const COST_FREQUENCY_OPTIONS: Array<{
  value: WebsiteTakeoverCostFrequency;
  label: string;
}> = [
  { value: "one-off", label: "Ponctuel" },
  { value: "monthly", label: "Mensuel" },
  { value: "annual", label: "Annuel" },
  { value: "exit", label: "Sortie ou réversibilité" },
];

const PROOF_KINDS = Object.keys(
  WEBSITE_TAKEOVER_PROOF_LABELS,
) as WebsiteTakeoverProofKind[];

function booleanSelectValue(value: boolean | undefined): string {
  if (value === true) return "yes";
  if (value === false) return "no";
  return "unknown";
}

function parseBooleanSelect(value: string): boolean | undefined {
  if (value === "yes") return true;
  if (value === "no") return false;
  return undefined;
}

function verdictLabel(
  verdict: WebsiteTakeoverVerdict,
  p1Count = 0,
  prerequisitesComplete = false,
): string {
  if (verdict === "go") return "GO limité au périmètre prouvé";
  if (verdict === "go-with-reservations") return "GO sous réserves P2";
  if (verdict === "stop") return "STOP prioritaire";
  if (p1Count > 0 && prerequisitesComplete) {
    return "Reprise bloquée — P1 à lever";
  }
  return "Dossier incomplet";
}

function triageLabel(
  level: ReturnType<typeof evaluateWebsiteTakeoverAudit>["triage"]["level"],
): string {
  if (level === "light") return "Audit léger admissible";
  if (level === "stop") return "STOP — interrompre la reprise ordinaire";
  return "Audit complet requis";
}

function decisionPrerequisitesComplete(
  evaluation: ReturnType<typeof evaluateWebsiteTakeoverAudit>,
): boolean {
  return (
    evaluation.triage.complete &&
    (evaluation.triage.level !== "full" || evaluation.tco.kind === "known")
  );
}

function verdictClass(verdict: WebsiteTakeoverVerdict): string {
  if (verdict === "stop") {
    return "border-rose-300 bg-rose-50 text-rose-950 dark:border-rose-800 dark:bg-rose-950/30 dark:text-rose-100";
  }
  if (verdict === "go") {
    return "border-emerald-300 bg-emerald-50 text-emerald-950 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-100";
  }
  if (verdict === "go-with-reservations") {
    return "border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100";
  }
  return "border-blue-300 bg-blue-50 text-blue-950 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-100";
}

function statusClass(status: WebsiteTakeoverEvidenceStatus): string {
  if (status === "verified") {
    return "border-emerald-300 bg-emerald-50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-100";
  }
  if (status === "failed") {
    return "border-rose-300 bg-rose-50 text-rose-900 dark:border-rose-800 dark:bg-rose-950/30 dark:text-rose-100";
  }
  if (status === "NA") {
    return "border-zinc-300 bg-zinc-100 text-zinc-800 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100";
  }
  return "border-amber-300 bg-amber-50 text-amber-900 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100";
}

function centsToEuroInput(value: string | undefined): string {
  if (value === undefined || !/^\d+$/.test(value)) return "";
  const normalized = value.padStart(3, "0");
  return `${normalized.slice(0, -2)},${normalized.slice(-2)}`;
}

function euroInputToCents(value: string): string | undefined {
  const normalized = value.trim().replace(/\s/g, "").replace(",", ".");
  if (!normalized) return undefined;
  const match = /^(\d+)(?:\.(\d{0,2}))?$/.exec(normalized);
  if (!match) return undefined;
  const euros = BigInt(match[1]);
  const fraction = (match[2] ?? "").padEnd(2, "0");
  return (euros * BigInt(100) + BigInt(fraction || "0")).toString();
}

function withoutInternalProofEnums(report: string): string {
  return PROOF_KINDS.reduce(
    (current, kind) => current.replaceAll(` (${kind})`, ""),
    report,
  );
}

function buildPrintableReport(
  dossier: WebsiteTakeoverAuditDossier,
  evaluation: ReturnType<typeof evaluateWebsiteTakeoverAudit>,
): string {
  const summary = [
    "SYNTHÈSE DE DÉCISION",
    `Décision : ${verdictLabel(
      evaluation.verdict,
      evaluation.counts.P1,
      decisionPrerequisitesComplete(evaluation),
    )}`,
    `Triage : ${triageLabel(evaluation.triage.level)}`,
    `Réserves : P0 ${evaluation.counts.P0} — P1 ${evaluation.counts.P1} — P2 ${evaluation.counts.P2}`,
    `Zones bloquant la complétude : ${evaluation.blockingZoneIds.length} sur 18`,
    ...evaluation.reasons.map((reason) => `- ${reason}`),
    "",
    "TCO COMPARABLE À PÉRIMÈTRE ÉGAL",
  ];

  for (const id of WEBSITE_TAKEOVER_TRAJECTORY_IDS) {
    const result = evaluation.tco.trajectories[id];
    if (result.kind !== "known" || !evaluation.tco.convention.taxBasis) {
      summary.push(`${WEBSITE_TAKEOVER_TRAJECTORIES[id].label} : ND`);
      continue;
    }
    summary.push(
      `${WEBSITE_TAKEOVER_TRAJECTORIES[id].label} : ${WEBSITE_TAKEOVER_TCO_HORIZONS.map(
        (horizon) =>
          `${horizon} mois ${formatWebsiteTakeoverCents(
            result.totalsCents[horizon],
            evaluation.tco.convention.currency,
            evaluation.tco.convention.taxBasis as WebsiteTakeoverTaxBasis,
          )}`,
      ).join(" · ")}`,
    );
  }

  return [
    ...summary,
    "",
    "ANNEXE — PREUVES, LIMITES ET ACTIONS INTERDITES",
    withoutInternalProofEnums(buildWebsiteTakeoverAuditReport(dossier)),
  ].join("\n");
}

function printValue(value: string | number | undefined): string {
  if (value === undefined || String(value).trim() === "") return "ND";
  return redactWebsiteTakeoverSecretsBestEffort(String(value).trim());
}

function groupPrintableTcoIssues(issues: WebsiteTakeoverTcoIssue[]) {
  const groups = new Map<
    string,
    {
      code: WebsiteTakeoverTcoIssue["code"];
      message: string;
      trajectoryIds: Set<WebsiteTakeoverTrajectoryId>;
      fields: Set<string>;
    }
  >();
  for (const issue of issues) {
    const key = `${issue.code}\u0000${issue.message}`;
    const group = groups.get(key) ?? {
      code: issue.code,
      message: issue.message,
      trajectoryIds: new Set<WebsiteTakeoverTrajectoryId>(),
      fields: new Set<string>(),
    };
    if (issue.trajectoryId) group.trajectoryIds.add(issue.trajectoryId);
    group.fields.add(issue.field);
    groups.set(key, group);
  }
  return [...groups.values()];
}

function WebsiteTakeoverPrintableReport({
  dossier,
  evaluation,
}: {
  dossier: WebsiteTakeoverAuditDossier;
  evaluation: ReturnType<typeof evaluateWebsiteTakeoverAudit>;
}) {
  const taxBasis = evaluation.tco.convention.taxBasis;
  const printableTcoIssues = groupPrintableTcoIssues(evaluation.tco.issues);
  return (
    <article
      className="website-takeover-print-report hidden"
      aria-label="Rapport imprimable d’audit avant reprise"
    >
      <div className="website-takeover-print-running-header" aria-hidden="true">
        Audit avant reprise · {printValue(dossier.context.reference)}
      </div>
      <div className="website-takeover-print-running-footer" aria-hidden="true">
        Rapport local · {printValue(dossier.context.evaluationDate)}
      </div>

      <section className="website-takeover-print-summary">
        <p className="website-takeover-print-eyebrow">
          Dossier local · {evaluation.version}
        </p>
        <div
          role="heading"
          aria-level={1}
          className="website-takeover-print-title"
        >
          Dossier d’audit avant reprise d’un site
        </div>
        <p className="website-takeover-print-lead">
          Synthèse dirigeant distincte de l’annexe de preuves
        </p>
        <dl className="website-takeover-print-metadata">
          <div>
            <dt>Référence</dt>
            <dd>{printValue(dossier.context.reference)}</dd>
          </div>
          <div>
            <dt>Site</dt>
            <dd>{printValue(dossier.context.siteName)}</dd>
          </div>
          <div>
            <dt>Date</dt>
            <dd>{printValue(dossier.context.evaluationDate)}</dd>
          </div>
          <div>
            <dt>Niveau</dt>
            <dd>{triageLabel(evaluation.triage.level)}</dd>
          </div>
        </dl>
        <h2>Synthèse de décision</h2>
        <p className="website-takeover-print-verdict">
          {verdictLabel(
            evaluation.verdict,
            evaluation.counts.P1,
            decisionPrerequisitesComplete(evaluation),
          )}
        </p>
        <p>
          P0 {evaluation.counts.P0} · P1 {evaluation.counts.P1} · P2{" "}
          {evaluation.counts.P2} · {evaluation.blockingZoneIds.length}/18
          zone(s) bloquante(s)
        </p>
        <p>
          <strong>Périmètre :</strong> {printValue(dossier.context.commonScope)}
        </p>
        <ul>
          {evaluation.reasons.map((reason) => (
            <li key={reason}>{printValue(reason)}</li>
          ))}
        </ul>
        <h2>Corrections avant décision</h2>
        {evaluation.findings.length > 0 ? (
          <ol>
            {evaluation.findings.map((finding, index) => (
              <li key={`${finding.code}-${finding.zoneId ?? "global"}-${index}`}>
                <strong>{finding.severity}</strong> ·{" "}
                {printValue(finding.message)}
              </li>
            ))}
          </ol>
        ) : (
          <p>
            Aucune correction calculée dans le périmètre et à la date du
            dossier ; cela ne constitue ni certification ni garantie.
          </p>
        )}
        {evaluation.tco.issues.length > 0 ? (
          <>
            <h2>Données TCO manquantes</h2>
            <ul>
              {printableTcoIssues.map((issue) => {
                const trajectoryIds = [...issue.trajectoryIds];
                const scope =
                  trajectoryIds.length ===
                  WEBSITE_TAKEOVER_TRAJECTORY_IDS.length
                    ? "Quatre trajectoires"
                    : trajectoryIds.length > 0
                      ? trajectoryIds
                          .map(
                            (id) => WEBSITE_TAKEOVER_TRAJECTORIES[id].label,
                          )
                          .join(", ")
                      : "Convention TCO";
                return (
                  <li key={`${issue.code}-${issue.message}`}>
                  <strong>
                      {scope}
                  </strong>{" "}
                    · {printValue(issue.message)} ·{" "}
                    {issue.fields.size > 1 ? "champs" : "champ"}{" "}
                    {[...issue.fields].map(printValue).join(", ")}
                  </li>
                );
              })}
            </ul>
          </>
        ) : null}
        <h2>TCO comparable</h2>
        <table>
          <thead>
            <tr>
              <th scope="col">Trajectoire</th>
              {WEBSITE_TAKEOVER_TCO_HORIZONS.map((horizon) => (
                <th scope="col" key={horizon}>
                  {horizon} mois
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {WEBSITE_TAKEOVER_TRAJECTORY_IDS.map((id) => {
              const result = evaluation.tco.trajectories[id];
              return (
                <tr key={id}>
                  <th scope="row">{WEBSITE_TAKEOVER_TRAJECTORIES[id].label}</th>
                  {WEBSITE_TAKEOVER_TCO_HORIZONS.map((horizon) => (
                    <td key={horizon}>
                      {result.kind === "known" && taxBasis
                        ? formatWebsiteTakeoverCents(
                            result.totalsCents[horizon],
                            evaluation.tco.convention.currency,
                            taxBasis,
                          )
                        : "ND"}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="website-takeover-print-note">
          Décision limitée au périmètre et à la date ci-dessus. Un P0 ou P1
          interdit le GO de reprise. Le masquage automatique reste best-effort ;
          une relecture humaine est requise avant partage.
        </p>
      </section>

      <section className="website-takeover-print-annex">
        <h2>Annexe — preuves, limites et actions interdites</h2>
        <p>
          Les numéros 01 à 18 suivent la taxonomie canonique de l’outil et du
          dossier hors ligne.
        </p>
        {WEBSITE_TAKEOVER_ZONE_IDS.map((id, index) => {
          const entry = dossier.zones[id];
          const zone = evaluation.zones[id];
          const findingSeverities = evaluation.findings
            .filter((finding) => finding.zoneId === id)
            .map((finding) => finding.severity);
          return (
            <article className="website-takeover-print-zone" key={id}>
              <h3>
                {String(index + 1).padStart(2, "0")} · {zone.label}
              </h3>
              <p>
                <strong>Statut effectif :</strong>{" "}
                {EVIDENCE_STATUS_LABELS[zone.effectiveStatus]} ·{" "}
                <strong>Applicabilité :</strong>{" "}
                {entry.applicable === undefined
                  ? "non qualifiée"
                  : entry.applicable
                    ? "oui"
                    : "non"}{" "}
                · <strong>Impact reprise :</strong>{" "}
                {formatWebsiteTakeoverZoneImpact(
                  entry.blocksReprise,
                  findingSeverities,
                )}
              </p>
              <dl>
                <div>
                  <dt>Preuve</dt>
                  <dd>{WEBSITE_TAKEOVER_PROOF_LABELS[entry.proofKind]}</dd>
                </div>
                <div>
                  <dt>Périmètre / environnement</dt>
                  <dd>{printValue(entry.environment)}</dd>
                </div>
                <div>
                  <dt>Dates</dt>
                  <dd>
                    observée {printValue(entry.observedOn)} · valide jusqu’au{" "}
                    {printValue(entry.validUntil)} · revue{" "}
                    {printValue(entry.dueOn)}
                  </dd>
                </div>
                <div>
                  <dt>Propriétaire / artefact</dt>
                  <dd>
                    {printValue(entry.owner)} ·{" "}
                    {printValue(entry.artifactReference)}
                  </dd>
                </div>
                <div>
                  <dt>Résultat</dt>
                  <dd>{printValue(entry.result)}</dd>
                </div>
                <div>
                  <dt>Limite</dt>
                  <dd>{printValue(entry.limitation)}</dd>
                </div>
                <div>
                  <dt>Action interdite</dt>
                  <dd>{printValue(entry.forbiddenAction)}</dd>
                </div>
                <div>
                  <dt>Réouverture / prochaine action</dt>
                  <dd>
                    {printValue(entry.reopenTrigger)} ·{" "}
                    {printValue(entry.nextAction)}
                  </dd>
                </div>
                {entry.status === "NA" ? (
                  <div>
                    <dt>Justification N/A</dt>
                    <dd>{printValue(entry.naJustification)}</dd>
                  </div>
                ) : null}
              </dl>
              {zone.reasons.length > 0 ? (
                <ul>
                  {zone.reasons.map((reason) => (
                    <li key={reason}>{printValue(reason)}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          );
        })}
      </section>

      <section className="website-takeover-print-tco-details">
        <h2>Annexe TCO — hypothèses et lignes sourcées</h2>
        <p>
          Devise {printValue(evaluation.tco.convention.currency)} · base{" "}
          {taxBasis ?? "ND"} · valorisation{" "}
          {printValue(evaluation.tco.convention.valuationDate)}
        </p>
        <p>
          <strong>Méthode de réserve :</strong>{" "}
          {printValue(evaluation.tco.convention.riskMethod)}
        </p>
        {WEBSITE_TAKEOVER_TRAJECTORY_IDS.map((id) => {
          const trajectory = dossier.tco.trajectories[id];
          return (
            <article className="website-takeover-print-trajectory" key={id}>
              <h3>{WEBSITE_TAKEOVER_TRAJECTORIES[id].label}</h3>
              <p>
                <strong>Hypothèses :</strong>{" "}
                {printValue(trajectory.assumptions)}
              </p>
              <table>
                <colgroup>
                  <col className="website-takeover-print-cost-category" />
                  <col className="website-takeover-print-cost-value" />
                  <col className="website-takeover-print-cost-period" />
                  <col className="website-takeover-print-cost-source" />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">Catégorie</th>
                    <th scope="col">Coût</th>
                    <th scope="col">Période</th>
                    <th scope="col">Source</th>
                  </tr>
                </thead>
                <tbody>
                  {trajectory.costLines.map((line) => (
                    <tr key={line.rowKey}>
                      <th scope="row">
                        {WEBSITE_TAKEOVER_COST_CATEGORY_LABELS[line.category]}
                      </th>
                      <td>
                        {printValue(line.quantity)} ×{" "}
                        {line.amountCents !== undefined &&
                        evaluation.tco.convention.taxBasis
                          ? formatWebsiteTakeoverCents(
                              line.amountCents,
                              evaluation.tco.convention.currency,
                              evaluation.tco.convention.taxBasis,
                            )
                          : "ND"}
                      </td>
                      <td>
                        {line.frequency} · M{printValue(line.startMonth)}–M
                        {printValue(line.endMonth)}
                      </td>
                      <td>
                        {printValue(line.sourceDate)} ·{" "}
                        {printValue(line.source)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </article>
          );
        })}
      </section>
    </article>
  );
}

function createCostLine(
  trajectory: WebsiteTakeoverTrajectoryTcoInput,
): WebsiteTakeoverCostLine {
  let suffix = trajectory.costLines.length + 1;
  while (trajectory.costLines.some((line) => line.id === `cout-${suffix}`)) {
    suffix += 1;
  }
  return {
    rowKey: `cout-${suffix}`,
    id: `cout-${suffix}`,
    costKey: `origine-${suffix}`,
    category: "transition",
    label: "",
    amountCents: undefined,
    quantity: "1",
    frequency: "one-off",
    startMonth: 0,
    endMonth: 0,
    sourceDate: "",
    source: "",
  };
}

function downloadMime(format: "txt" | "json" | "csv"): string {
  if (format === "json") return "application/json;charset=utf-8";
  if (format === "csv") return "text/csv;charset=utf-8";
  return "text/plain;charset=utf-8";
}

export function WebsiteTakeoverAuditDossier() {
  const instanceId = useId().replaceAll(":", "");
  const [dossier, setDossier] = useState(
    createEmptyWebsiteTakeoverAuditDossier,
  );
  const [reviewConfirmed, setReviewConfirmed] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [hasUnsavedWork, setHasUnsavedWork] = useState(false);
  const [resetRequested, setResetRequested] = useState(false);
  const [pendingInternalHref, setPendingInternalHref] = useState("");
  const [pendingHistoryNavigation, setPendingHistoryNavigation] =
    useState(false);
  const resetTriggerRef = useRef<HTMLButtonElement | null>(null);
  const resetConfirmRef = useRef<HTMLButtonElement>(null);
  const resetDialogRef = useRef<HTMLDivElement>(null);
  const navigationTriggerRef = useRef<HTMLAnchorElement | null>(null);
  const navigationStayRef = useRef<HTMLButtonElement>(null);
  const navigationDialogRef = useRef<HTMLDivElement>(null);
  const replayingInternalNavigationRef = useRef(false);
  const historyGuardActiveRef = useRef(false);
  const historyReturnPendingRef = useRef(false);
  const allowHistoryNavigationRef = useRef(false);

  const evaluation = useMemo(
    () => evaluateWebsiteTakeoverAudit(dossier),
    [dossier],
  );
  const printableReport = useMemo(
    () => buildPrintableReport(dossier, evaluation),
    [dossier, evaluation],
  );
  const qualifiedZoneIds = WEBSITE_TAKEOVER_ZONE_IDS.filter(
    (id) =>
      (evaluation.zones[id].effectiveStatus === "verified" ||
        evaluation.zones[id].effectiveStatus === "NA") &&
      dossier.zones[id].blocksReprise === false,
  );

  function markChanged() {
    setReviewConfirmed(false);
    setFeedback("");
    setHasUnsavedWork(true);
  }

  function updateContext<
    K extends keyof Omit<
      WebsiteTakeoverAuditContext,
      "stopProfile" | "complexity"
    >,
  >(key: K, value: WebsiteTakeoverAuditContext[K]) {
    setDossier((current) => ({
      ...current,
      context: { ...current.context, [key]: value },
    }));
    markChanged();
  }

  function updateStop<K extends keyof WebsiteTakeoverStopProfile>(
    key: K,
    value: WebsiteTakeoverStopProfile[K],
  ) {
    setDossier((current) => ({
      ...current,
      context: {
        ...current.context,
        stopProfile: {
          ...current.context.stopProfile,
          [key]: value,
        },
      },
    }));
    markChanged();
  }

  function updateComplexity<K extends keyof WebsiteTakeoverComplexityProfile>(
    key: K,
    value: WebsiteTakeoverComplexityProfile[K],
  ) {
    setDossier((current) => ({
      ...current,
      context: {
        ...current.context,
        complexity: {
          ...current.context.complexity,
          [key]: value,
        },
      },
    }));
    markChanged();
  }

  function updateZone(
    id: WebsiteTakeoverZoneId,
    patch: Partial<WebsiteTakeoverZoneEntry>,
  ) {
    setDossier((current) => ({
      ...current,
      zones: {
        ...current.zones,
        [id]: { ...current.zones[id], ...patch },
      },
    }));
    markChanged();
  }

  function updateZoneApplicability(id: WebsiteTakeoverZoneId, value: string) {
    if (value === "not-applicable") {
      updateZone(id, {
        applicable: false,
        status: "NA",
        blocksReprise: false,
        proofKind: "non-applicability-evidence",
      });
      return;
    }
    if (value === "applicable") {
      updateZone(id, {
        applicable: true,
        status:
          dossier.zones[id].status === "NA"
            ? "unknown"
            : dossier.zones[id].status,
        blocksReprise:
          dossier.zones[id].status === "NA"
            ? undefined
            : dossier.zones[id].blocksReprise,
        proofKind:
          dossier.zones[id].proofKind === "non-applicability-evidence"
            ? "unknown"
            : dossier.zones[id].proofKind,
      });
      return;
    }
    updateZone(id, {
      applicable: undefined,
      status:
        dossier.zones[id].status === "NA"
          ? "unknown"
          : dossier.zones[id].status,
      blocksReprise:
        dossier.zones[id].status === "NA"
          ? undefined
          : dossier.zones[id].blocksReprise,
      proofKind:
        dossier.zones[id].proofKind === "non-applicability-evidence"
          ? "unknown"
          : dossier.zones[id].proofKind,
    });
  }

  function updateZoneStatus(
    id: WebsiteTakeoverZoneId,
    status: WebsiteTakeoverEvidenceStatus,
  ) {
    if (status === "NA") {
      updateZone(id, {
        applicable: false,
        status,
        blocksReprise: false,
        proofKind: "non-applicability-evidence",
      });
      return;
    }
    updateZone(id, {
      applicable:
        dossier.zones[id].applicable === false
          ? true
          : dossier.zones[id].applicable,
      status,
      blocksReprise:
        dossier.zones[id].status === "NA"
          ? undefined
          : dossier.zones[id].blocksReprise,
      proofKind:
        dossier.zones[id].proofKind === "non-applicability-evidence"
          ? "unknown"
          : dossier.zones[id].proofKind,
    });
  }

  function updateTcoConvention<K extends keyof WebsiteTakeoverTcoConvention>(
    key: K,
    value: WebsiteTakeoverTcoConvention[K],
  ) {
    setDossier((current) => ({
      ...current,
      tco: {
        ...current.tco,
        convention: { ...current.tco.convention, [key]: value },
      },
    }));
    markChanged();
  }

  function updateTrajectory(
    id: WebsiteTakeoverTrajectoryId,
    patch: Partial<WebsiteTakeoverTrajectoryTcoInput>,
  ) {
    setDossier((current) => ({
      ...current,
      tco: {
        ...current.tco,
        trajectories: {
          ...current.tco.trajectories,
          [id]: { ...current.tco.trajectories[id], ...patch },
        },
      },
    }));
    markChanged();
  }

  function updateCostLine(
    trajectoryId: WebsiteTakeoverTrajectoryId,
    index: number,
    patch: Partial<WebsiteTakeoverCostLine>,
  ) {
    setDossier((current) => {
      const costLines = current.tco.trajectories[trajectoryId].costLines.map(
        (line, lineIndex) =>
          lineIndex === index ? { ...line, ...patch } : line,
      );
      return {
        ...current,
        tco: {
          ...current.tco,
          trajectories: {
            ...current.tco.trajectories,
            [trajectoryId]: {
              ...current.tco.trajectories[trajectoryId],
              costLines,
            },
          },
        },
      };
    });
    markChanged();
  }

  function addCostLine(id: WebsiteTakeoverTrajectoryId) {
    setDossier((current) => {
      const trajectory = current.tco.trajectories[id];
      return {
        ...current,
        tco: {
          ...current.tco,
          trajectories: {
            ...current.tco.trajectories,
            [id]: {
              ...trajectory,
              costLines: [...trajectory.costLines, createCostLine(trajectory)],
            },
          },
        },
      };
    });
    markChanged();
  }

  function removeCostLine(
    trajectoryId: WebsiteTakeoverTrajectoryId,
    index: number,
  ) {
    setDossier((current) => ({
      ...current,
      tco: {
        ...current.tco,
        trajectories: {
          ...current.tco.trajectories,
          [trajectoryId]: {
            ...current.tco.trajectories[trajectoryId],
            costLines: current.tco.trajectories[trajectoryId].costLines.filter(
              (_line, lineIndex) => lineIndex !== index,
            ),
          },
        },
      },
    }));
    markChanged();
  }

  function copyCommonScopeToTco() {
    setDossier((current) => ({
      ...current,
      tco: {
        ...current.tco,
        convention: {
          ...current.tco.convention,
          commonScope: current.context.commonScope,
        },
        trajectories: Object.fromEntries(
          WEBSITE_TAKEOVER_TRAJECTORY_IDS.map((id) => [
            id,
            {
              ...current.tco.trajectories[id],
              commonScope: current.context.commonScope,
            },
          ]),
        ) as WebsiteTakeoverAuditDossier["tco"]["trajectories"],
      },
    }));
    markChanged();
  }

  function loadFictitiousExample() {
    setDossier(createFictitiousWebsiteTakeoverAuditDossier());
    setResetRequested(false);
    markChanged();
  }

  async function copyReport() {
    if (!reviewConfirmed) return;
    const copied = await copyTextToClipboard(printableReport);
    setFeedback(
      copied
        ? "Le rapport expurgé au mieux a été copié localement."
        : "La copie a échoué. Utilisez un téléchargement après relecture.",
    );
  }

  function downloadExport(format: "txt" | "json" | "csv") {
    if (!reviewConfirmed) return;
    try {
      const content =
        format === "txt"
          ? printableReport
          : format === "json"
            ? buildWebsiteTakeoverAuditJson(dossier)
            : buildWebsiteTakeoverAuditCsv(dossier);
      const blob = new Blob([content], { type: downloadMime(format) });
      const objectUrl = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = objectUrl;
      anchor.download = buildWebsiteTakeoverAuditFilename(dossier, format);
      document.body.append(anchor);
      anchor.click();
      anchor.remove();
      URL.revokeObjectURL(objectUrl);
      setFeedback(
        `Le fichier ${format.toUpperCase()} a été créé localement après relecture.`,
      );
      if (format === "json") setHasUnsavedWork(false);
    } catch {
      setFeedback(
        `Le fichier ${format.toUpperCase()} n’a pas pu être créé dans ce navigateur.`,
      );
    }
  }

  async function importJson(event: ChangeEvent<HTMLInputElement>) {
    const input = event.currentTarget;
    const file = input.files?.[0];
    if (!file) return;
    try {
      const imported = parseWebsiteTakeoverAuditJson(await file.text());
      setDossier(imported);
      setReviewConfirmed(false);
      setHasUnsavedWork(true);
      setFeedback(
        "Le JSON compatible a été relu par le moteur puis chargé localement. Revalidez chaque preuve avant export.",
      );
    } catch (error) {
      setFeedback(
        error instanceof Error
          ? `Import refusé : ${error.message}`
          : "Import refusé : fichier incompatible.",
      );
    } finally {
      input.value = "";
    }
  }

  function printReport() {
    if (!reviewConfirmed) return;
    window.print();
    setFeedback("La fenêtre d’impression du navigateur a été ouverte.");
  }

  function askReset(trigger: HTMLButtonElement) {
    resetTriggerRef.current = trigger;
    setResetRequested(true);
  }

  function cancelReset() {
    setResetRequested(false);
  }

  function confirmReset() {
    setDossier(createEmptyWebsiteTakeoverAuditDossier());
    setResetRequested(false);
    setReviewConfirmed(false);
    setFeedback("");
    setHasUnsavedWork(false);
  }

  useEffect(() => {
    if (!hasUnsavedWork) return;
    const warnBeforeLeaving = (event: BeforeUnloadEvent) => {
      if (allowHistoryNavigationRef.current) return;
      event.preventDefault();
      event.returnValue = "";
    };
    window.addEventListener("beforeunload", warnBeforeLeaving);
    return () => window.removeEventListener("beforeunload", warnBeforeLeaving);
  }, [hasUnsavedWork]);

  useEffect(() => {
    if (!hasUnsavedWork) return;

    const currentState =
      typeof window.history.state === "object" &&
      window.history.state !== null
        ? window.history.state
        : {};
    if (
      window.history.state?.[HISTORY_GUARD_STATE_KEY] !== instanceId
    ) {
      window.history.pushState(
        { ...currentState, [HISTORY_GUARD_STATE_KEY]: instanceId },
        "",
        window.location.href,
      );
    }
    historyGuardActiveRef.current = true;

    const warnBeforeHistoryTraversal = (event: PopStateEvent) => {
      if (allowHistoryNavigationRef.current) {
        allowHistoryNavigationRef.current = false;
        return;
      }
      if (!historyGuardActiveRef.current) return;

      if (event.state?.[HISTORY_GUARD_STATE_KEY] === instanceId) {
        if (historyReturnPendingRef.current) {
          historyReturnPendingRef.current = false;
          setPendingHistoryNavigation(true);
        }
        return;
      }

      historyReturnPendingRef.current = true;
      window.history.forward();
    };

    window.addEventListener("popstate", warnBeforeHistoryTraversal);
    return () =>
      window.removeEventListener("popstate", warnBeforeHistoryTraversal);
  }, [hasUnsavedWork, instanceId]);

  useEffect(() => {
    if (!hasUnsavedWork) return;

    const warnBeforeInternalNavigation = (event: MouseEvent) => {
      if (replayingInternalNavigationRef.current) {
        replayingInternalNavigationRef.current = false;
        return;
      }
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }
      const target =
        event.target instanceof Element
          ? event.target.closest<HTMLAnchorElement>("a[href]")
          : null;
      if (
        !target ||
        target.hasAttribute("download") ||
        (target.target && target.target !== "_self")
      ) {
        return;
      }

      const rawHref = target.getAttribute("href");
      if (!rawHref || rawHref.startsWith("#")) return;

      const destination = new URL(rawHref, window.location.href);
      if (destination.origin !== window.location.origin) return;
      if (
        destination.pathname === window.location.pathname &&
        destination.search === window.location.search &&
        destination.hash
      ) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      navigationTriggerRef.current = target;
      setPendingInternalHref(
        `${destination.pathname}${destination.search}${destination.hash}`,
      );
    };

    document.addEventListener("click", warnBeforeInternalNavigation, true);
    return () =>
      document.removeEventListener(
        "click",
        warnBeforeInternalNavigation,
        true,
      );
  }, [hasUnsavedWork]);

  useEffect(() => {
    if (!resetRequested) return;
    const dialog = resetDialogRef.current;
    if (!dialog) return;

    const background = [...document.body.children].filter(
      (element) => !element.contains(dialog),
    );
    const previous = background.map((element) => ({
      element,
      inert: element.getAttribute("inert"),
      ariaHidden: element.getAttribute("aria-hidden"),
    }));
    for (const { element } of previous) {
      element.setAttribute("inert", "");
      element.setAttribute("aria-hidden", "true");
    }
    resetConfirmRef.current?.focus();

    return () => {
      for (const { element, inert, ariaHidden } of previous) {
        if (inert === null) element.removeAttribute("inert");
        else element.setAttribute("inert", inert);
        if (ariaHidden === null) element.removeAttribute("aria-hidden");
        else element.setAttribute("aria-hidden", ariaHidden);
      }
      resetTriggerRef.current?.focus();
    };
  }, [resetRequested]);

  useEffect(() => {
    if (!pendingInternalHref && !pendingHistoryNavigation) return;
    const dialog = navigationDialogRef.current;
    if (!dialog) return;

    const background = [...document.body.children].filter(
      (element) => !element.contains(dialog),
    );
    const previous = background.map((element) => ({
      element,
      inert: element.getAttribute("inert"),
      ariaHidden: element.getAttribute("aria-hidden"),
    }));
    for (const { element } of previous) {
      element.setAttribute("inert", "");
      element.setAttribute("aria-hidden", "true");
    }
    navigationStayRef.current?.focus();

    return () => {
      for (const { element, inert, ariaHidden } of previous) {
        if (inert === null) element.removeAttribute("inert");
        else element.setAttribute("inert", inert);
        if (ariaHidden === null) element.removeAttribute("aria-hidden");
        else element.setAttribute("aria-hidden", ariaHidden);
      }
      if (document.contains(navigationTriggerRef.current)) {
        navigationTriggerRef.current?.focus();
      }
    };
  }, [pendingHistoryNavigation, pendingInternalHref]);

  function cancelInternalNavigation() {
    setPendingInternalHref("");
    setPendingHistoryNavigation(false);
  }

  function confirmInternalNavigation() {
    if (pendingHistoryNavigation) {
      allowHistoryNavigationRef.current = true;
      historyGuardActiveRef.current = false;
      setHasUnsavedWork(false);
      setPendingHistoryNavigation(false);
      window.history.go(-2);
      return;
    }

    const trigger = navigationTriggerRef.current;
    setHasUnsavedWork(false);
    setPendingInternalHref("");
    if (!trigger) return;
    replayingInternalNavigationRef.current = true;
    trigger.click();
  }

  function handleNavigationDialogKeyDown(
    event: ReactKeyboardEvent<HTMLDivElement>,
  ) {
    if (event.key === "Escape") {
      event.preventDefault();
      cancelInternalNavigation();
      return;
    }
    if (event.key !== "Tab") return;
    const dialog = navigationDialogRef.current;
    if (!dialog) return;
    const buttons = [...dialog.querySelectorAll<HTMLButtonElement>("button")];
    const first = buttons[0];
    const last = buttons.at(-1);
    if (!first || !last) return;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function handleResetDialogKeyDown(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      cancelReset();
      return;
    }
    if (event.key !== "Tab") return;
    const dialog = resetDialogRef.current;
    if (!dialog) return;
    const buttons = [...dialog.querySelectorAll<HTMLButtonElement>("button")];
    const first = buttons[0];
    const last = buttons.at(-1);
    if (!first || !last) return;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <>
      <style>{`
        .prose > pre {
          white-space: pre-wrap !important;
          overflow-wrap: anywhere !important;
          overflow-x: visible !important;
        }

        @page {
          size: A4;
          margin: 16mm 12mm 15mm;

          @top-left {
            content: "Audit avant reprise";
            color: #71717a;
            font: 7pt ui-sans-serif, system-ui, sans-serif;
          }

          @top-right {
            content: "Rapport local";
            color: #71717a;
            font: 7pt ui-sans-serif, system-ui, sans-serif;
          }

          @bottom-left {
            content: "Dossier autonome · preuve locale";
            color: #71717a;
            font: 7pt ui-sans-serif, system-ui, sans-serif;
          }

          @bottom-right {
            content: "Page " counter(page) " / " counter(pages);
            color: #71717a;
            font: 7pt ui-sans-serif, system-ui, sans-serif;
          }
        }

        @media print {
          body *:not(#website-takeover-audit-dossier):not(#website-takeover-audit-dossier *):not(:has(#website-takeover-audit-dossier)) {
            display: none !important;
          }

          #website-takeover-audit-dossier {
            position: absolute !important;
            inset: 0 auto auto 0 !important;
            width: 100% !important;
            margin: 0 !important;
            overflow: visible !important;
            border: 0 !important;
            box-shadow: none !important;
            background: white !important;
            color: #18181b !important;
          }

          #website-takeover-audit-dossier > :not(.website-takeover-print-report) {
            display: none !important;
          }

          #website-takeover-audit-dossier .website-takeover-print-report {
            display: block !important;
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
            color: #18181b !important;
            font-family: ui-sans-serif, system-ui, sans-serif !important;
            font-size: 9pt !important;
            line-height: 1.28 !important;
            orphans: 3;
            widows: 3;
          }

          .website-takeover-print-title {
            margin: 0 0 3mm !important;
            font-size: 22pt !important;
            font-weight: 800 !important;
            line-height: 1.08 !important;
          }

          .website-takeover-print-report h2 {
            margin: 6mm 0 2mm !important;
            font-size: 14pt !important;
            line-height: 1.15 !important;
            break-after: avoid-page;
          }

          .website-takeover-print-report h3 {
            margin: 0 0 2mm !important;
            font-size: 10.5pt !important;
            line-height: 1.2 !important;
            break-after: avoid-page;
          }

          .website-takeover-print-report p,
          .website-takeover-print-report ul,
          .website-takeover-print-report ol,
          .website-takeover-print-report dl {
            margin: 0 0 2.5mm !important;
          }

          .website-takeover-print-report table {
            width: 100% !important;
            border-collapse: collapse !important;
            table-layout: fixed !important;
            font-size: 7.8pt !important;
          }

          .website-takeover-print-report th,
          .website-takeover-print-report td {
            border: 0.25mm solid #d4d4d8 !important;
            padding: 1.4mm !important;
            text-align: left !important;
            vertical-align: top !important;
            overflow-wrap: anywhere !important;
          }

          .website-takeover-print-summary {
            min-height: 250mm;
            break-after: page;
          }

          .website-takeover-print-eyebrow {
            font-size: 8pt !important;
            font-weight: 800 !important;
            letter-spacing: 0.08em !important;
            text-transform: uppercase !important;
            color: #5b21b6 !important;
          }

          .website-takeover-print-lead {
            font-size: 11pt !important;
            color: #52525b !important;
          }

          .website-takeover-print-metadata {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 2mm 5mm !important;
            padding: 3mm !important;
            border: 0.25mm solid #d4d4d8 !important;
          }

          .website-takeover-print-metadata div {
            break-inside: avoid-page;
          }

          .website-takeover-print-metadata dt,
          .website-takeover-print-zone dt {
            font-size: 7.5pt !important;
            font-weight: 800 !important;
            text-transform: uppercase !important;
            color: #52525b !important;
          }

          .website-takeover-print-metadata dd,
          .website-takeover-print-zone dd {
            margin: 0 !important;
            overflow-wrap: anywhere !important;
          }

          .website-takeover-print-verdict {
            display: inline-block !important;
            border: 0.5mm solid #18181b !important;
            padding: 2mm 3mm !important;
            font-size: 13pt !important;
            font-weight: 900 !important;
          }

          .website-takeover-print-note {
            margin-top: 4mm !important;
            padding: 3mm !important;
            border-left: 1mm solid #5b21b6 !important;
            background: #f5f3ff !important;
          }

          .website-takeover-print-annex,
          .website-takeover-print-tco-details {
            break-before: page;
          }

          .website-takeover-print-zone,
          .website-takeover-print-trajectory {
            margin: 0 0 3mm !important;
            padding: 3mm !important;
            border: 0.25mm solid #a1a1aa !important;
            border-radius: 2mm !important;
          }

          .website-takeover-print-zone {
            break-inside: avoid-page;
            page-break-inside: avoid;
          }

          .website-takeover-print-trajectory {
            break-inside: auto;
            page-break-inside: auto;
          }

          .website-takeover-print-zone dl {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 1.5mm 4mm !important;
          }

          .website-takeover-print-zone dl > div {
            break-inside: avoid-page;
          }

          .website-takeover-print-tco-details .website-takeover-print-trajectory {
            margin-bottom: 1.2mm !important;
            padding: 1.4mm !important;
          }

          .website-takeover-print-tco-details .website-takeover-print-trajectory h3 {
            margin-bottom: 0.6mm !important;
            font-size: 8.5pt !important;
          }

          .website-takeover-print-tco-details .website-takeover-print-trajectory p {
            margin-bottom: 0.6mm !important;
            font-size: 6.8pt !important;
            line-height: 1.08 !important;
          }

          .website-takeover-print-tco-details table {
            font-size: 6.6pt !important;
            line-height: 1.05 !important;
          }

          .website-takeover-print-tco-details th,
          .website-takeover-print-tco-details td {
            padding: 0.55mm !important;
          }

          .website-takeover-print-tco-details tr {
            break-inside: avoid-page;
          }

          .website-takeover-print-cost-category {
            width: 25%;
          }

          .website-takeover-print-cost-value {
            width: 19%;
          }

          .website-takeover-print-cost-period {
            width: 16%;
          }

          .website-takeover-print-cost-source {
            width: 40%;
          }

          .website-takeover-print-running-header,
          .website-takeover-print-running-footer {
            display: none !important;
          }

          #website-takeover-audit-dossier button,
          #website-takeover-audit-dossier input,
          #website-takeover-audit-dossier select,
          #website-takeover-audit-dossier textarea,
          #website-takeover-audit-dossier form,
          #website-takeover-audit-dossier a,
          #website-takeover-audit-dossier [data-website-takeover-interactive] {
            display: none !important;
          }
        }
      `}</style>
      <section
        id="website-takeover-audit-dossier"
        className="not-prose my-10 min-w-0 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
        aria-labelledby={`${instanceId}-title`}
        data-read-time-exclude="true"
      >
        <header className="border-b border-zinc-800 bg-zinc-950 px-4 py-6 text-white sm:px-6">
          <p className="m-0 text-[10px] font-bold uppercase tracking-[0.16em] text-violet-300">
            Outil strictement local · aucune donnée envoyée · aucune sauvegarde
            automatique · alerte avant fermeture après modification
          </p>
          <h3
            id={`${instanceId}-title`}
            className="mb-0 mt-2 break-words text-xl font-bold sm:text-2xl"
          >
            Dossier d’audit avant reprise d’un site
          </h3>
          <p className="mb-0 mt-2 max-w-4xl text-sm leading-relaxed text-zinc-300">
            Qualifiez d’abord les raisons de STOP, puis documentez les dix-huit
            zones et comparez quatre trajectoires au même périmètre. Une
            déclaration, un build ou une sauvegarde non restaurée ne créent
            jamais un faux GO.
          </p>
        </header>

        <WebsiteTakeoverPrintableReport
          dossier={dossier}
          evaluation={evaluation}
        />

        <div
          className="space-y-9 p-4 print:hidden sm:p-6"
          data-website-takeover-interactive="true"
          data-read-time-exclude="true"
        >
          <section
            className={`rounded-xl border p-4 ${verdictClass(
              evaluation.verdict,
            )}`}
            aria-labelledby={`${instanceId}-verdict-title`}
            aria-live="polite"
          >
            <div className="grid min-w-0 gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
              <div className="min-w-0">
                <p className="m-0 text-xs font-bold uppercase tracking-wider">
                  Verdict prudent
                </p>
                <h4
                  id={`${instanceId}-verdict-title`}
                  className="mb-0 mt-1 break-words text-lg font-bold"
                >
                  {verdictLabel(
                    evaluation.verdict,
                    evaluation.counts.P1,
                    decisionPrerequisitesComplete(evaluation),
                  )}
                </h4>
                <p className="mb-0 mt-1 text-sm leading-relaxed">
                  {triageLabel(evaluation.triage.level)}
                </p>
              </div>
              <span className="w-fit rounded-full border border-current/25 px-3 py-1 text-xs font-bold">
                {evaluation.blockingZoneIds.length}/18 zone(s) bloquante(s)
              </span>
            </div>
            {evaluation.verdict === "stop" ? (
              <p className="mb-0 mt-3 border-t border-current/20 pt-3 text-sm font-bold">
                STOP prioritaire : aucun score, coût ou contrôle positif ne
                compense une condition P0.
              </p>
            ) : (
              <p className="mb-0 mt-3 border-t border-current/20 pt-3 text-xs leading-relaxed">
                Aucun faux GO : une preuve faible ou incomplète est
                automatiquement déclassée par le moteur.
              </p>
            )}
            <div
              className="mt-4 grid grid-cols-3 gap-2"
              aria-label="Réserves par priorité"
            >
              {(["P0", "P1", "P2"] as const).map((severity) => (
                <div
                  key={severity}
                  className="min-w-0 rounded-lg border border-current/20 bg-white/50 p-2 text-center dark:bg-black/10"
                >
                  <span className="block text-xs font-bold">{severity}</span>
                  <span className="block text-lg font-black">
                    {evaluation.counts[severity]}
                  </span>
                </div>
              ))}
            </div>
            <ul className="mb-0 mt-3 space-y-1 pl-5 text-xs leading-relaxed">
              {evaluation.reasons.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </section>

          <section
            className="rounded-xl border border-violet-200 bg-violet-50/60 p-4 dark:border-violet-900 dark:bg-violet-950/20"
            aria-labelledby={`${instanceId}-start-title`}
          >
            <h4
              id={`${instanceId}-start-title`}
              className="m-0 text-base font-bold text-zinc-950 dark:text-white"
            >
              Démarrer sans écraser le dossier
            </h4>
            <p className="mb-0 mt-2 text-xs leading-relaxed text-zinc-700 dark:text-zinc-300">
              L’état initial est volontairement vide et fermé. L’exemple
              pédagogique est entièrement fictif : il démontre un GO sous
              réserves, des TCO calculables et la différence entre déclaration
              et preuve.
            </p>
            <button
              type="button"
              onClick={loadFictitiousExample}
              className={`${BUTTON_CLASS} mt-4 border border-violet-300 bg-white text-violet-950 hover:bg-violet-100 dark:border-violet-800 dark:bg-zinc-950 dark:text-violet-100`}
            >
              Charger l’exemple fictif
            </button>
          </section>

          <fieldset className="min-w-0">
            <legend className="text-lg font-bold text-zinc-950 dark:text-white">
              1. Contexte et périmètre commun
            </legend>
            <p className="mb-4 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Le même périmètre doit être repris mot pour mot dans le TCO. Une
              date de preuve ne peut pas être postérieure à la date
              d’évaluation.
            </p>
            <div className="grid min-w-0 gap-4 sm:grid-cols-2">
              <label className={LABEL_CLASS}>
                Référence interne
                <input
                  type="text"
                  value={dossier.context.reference}
                  onChange={(event) =>
                    updateContext("reference", event.target.value)
                  }
                  className={INPUT_CLASS}
                  autoComplete="off"
                />
                <span className={HELP_CLASS}>
                  Identifiant du dossier, sans nom de personne ni secret.
                </span>
              </label>
              <label className={LABEL_CLASS}>
                Nom ou description du site
                <input
                  type="text"
                  value={dossier.context.siteName}
                  onChange={(event) =>
                    updateContext("siteName", event.target.value)
                  }
                  className={INPUT_CLASS}
                  autoComplete="off"
                />
                <span className={HELP_CLASS}>
                  Utilisez un libellé non sensible.
                </span>
              </label>
              <label className={LABEL_CLASS}>
                Date d’évaluation
                <input
                  type="date"
                  value={dossier.context.evaluationDate}
                  onChange={(event) =>
                    updateContext("evaluationDate", event.target.value)
                  }
                  className={INPUT_CLASS}
                />
                <span className={HELP_CLASS}>
                  Date locale du dossier, au format année-mois-jour.
                </span>
              </label>
              <label className={`${LABEL_CLASS} sm:col-span-2`}>
                Périmètre fonctionnel, technique et opérationnel commun
                <textarea
                  value={dossier.context.commonScope}
                  onChange={(event) =>
                    updateContext("commonScope", event.target.value)
                  }
                  className={TEXTAREA_CLASS}
                  placeholder="Fonctions, données, URL, intégrations, volumes, environnements, niveaux de service et exclusions."
                />
                <span className={HELP_CLASS}>
                  Une trajectoire plus étroite ou plus large n’est pas
                  comparable.
                </span>
              </label>
            </div>
          </fieldset>

          <section aria-labelledby={`${instanceId}-triage-title`}>
            <h4
              id={`${instanceId}-triage-title`}
              className="m-0 text-lg font-bold text-zinc-950 dark:text-white"
            >
              2. Triage : STOP en 60 secondes, puis complexité
            </h4>
            <p className="mb-4 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Chaque réponse reste « non qualifiée » tant qu’elle n’est pas
              documentée. Une seule condition de STOP prime sur tout le reste.
            </p>

            <fieldset className="rounded-xl border border-rose-200 p-4 dark:border-rose-900">
              <legend className="px-1 text-base font-bold text-rose-900 dark:text-rose-100">
                Questions de sécurité, d’autorité et de réversibilité
              </legend>
              <div className="mt-2 grid min-w-0 gap-4 sm:grid-cols-2">
                {STOP_QUESTIONS.map((question) => (
                  <label key={question.key} className={LABEL_CLASS}>
                    {question.label}
                    <select
                      value={booleanSelectValue(
                        dossier.context.stopProfile[question.key],
                      )}
                      onChange={(event) =>
                        updateStop(
                          question.key,
                          parseBooleanSelect(event.target.value),
                        )
                      }
                      className={INPUT_CLASS}
                    >
                      <option value="unknown">Non qualifié</option>
                      <option value="yes">Oui</option>
                      <option value="no">Non</option>
                    </select>
                    <span className={HELP_CLASS}>{question.help}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <details className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40">
              <summary className="flex min-h-11 cursor-pointer items-center px-4 py-3 text-sm font-bold text-zinc-950 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-violet-500 dark:text-white">
                Qualifier les données et les treize facteurs imposant un audit
                complet
              </summary>
              <fieldset className="border-t border-zinc-200 p-4 dark:border-zinc-800">
                <legend className="sr-only">
                  Facteurs de complexité de la reprise
                </legend>
                <div className="grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {COMPLEXITY_QUESTIONS.map((question) => (
                    <label key={question.key} className={LABEL_CLASS}>
                      {question.label}
                      <select
                        value={booleanSelectValue(
                          dossier.context.complexity[question.key],
                        )}
                        onChange={(event) =>
                          updateComplexity(
                            question.key,
                            parseBooleanSelect(event.target.value),
                          )
                        }
                        className={INPUT_CLASS}
                      >
                        <option value="unknown">Non qualifié</option>
                        <option value="yes">Oui</option>
                        <option value="no">Non</option>
                      </select>
                      <span className={HELP_CLASS}>{question.help}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </details>

            <div
              className="mt-4 rounded-lg border border-zinc-200 bg-white p-3 text-sm text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
            >
              <strong>Résultat du triage : </strong>
              {triageLabel(evaluation.triage.level)}.
              {evaluation.triage.missingFields.length > 0
                ? ` ${evaluation.triage.missingFields.length} critère(s) restent non qualifiés.`
                : " Tous les critères de triage sont qualifiés."}
            </div>
          </section>

          <section aria-labelledby={`${instanceId}-zones-title`}>
            <h4
              id={`${instanceId}-zones-title`}
              className="m-0 text-lg font-bold text-zinc-950 dark:text-white"
            >
              3. Registre des dix-huit zones de preuve
            </h4>
            <p className="mb-4 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Ouvrez seulement les zones utiles à l’étape en cours. « Vérifié »
              exige le type de preuve attendu, l’environnement, la date, le
              propriétaire, la référence, le résultat, la limite et l’action
              interdite.
            </p>
            <div className="mb-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/40">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <strong className="text-sm text-zinc-950 dark:text-white">
                  Progression : {qualifiedZoneIds.length}/18 zones qualifiées et
                  non bloquantes
                </strong>
                <span className="text-xs text-zinc-600 dark:text-zinc-400">
                  {evaluation.blockingZoneIds.length} à lever ou qualifier
                </span>
              </div>
              <progress
                className="mt-3 h-2 w-full accent-violet-600"
                max={18}
                value={qualifiedZoneIds.length}
                aria-label={`${qualifiedZoneIds.length} zones qualifiées et non bloquantes sur 18`}
              />
              {evaluation.blockingZoneIds.length > 0 ? (
                <nav
                  className="mt-3 flex flex-wrap gap-2"
                  aria-label="Accès direct à toutes les zones bloquantes"
                >
                  {evaluation.blockingZoneIds.map((id) => {
                    const index = WEBSITE_TAKEOVER_ZONE_IDS.indexOf(id);
                    return (
                      <a
                        key={id}
                        href={`#${instanceId}-zone-${id}`}
                        onClick={() => {
                          const target = document.getElementById(
                            `${instanceId}-zone-${id}`,
                          );
                          if (target instanceof HTMLDetailsElement) {
                            target.open = true;
                            window.requestAnimationFrame(() => {
                              target
                                .querySelector<HTMLElement>("summary")
                                ?.focus();
                            });
                          }
                        }}
                        className="rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-800 no-underline hover:border-violet-400 hover:text-violet-800 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200"
                      >
                        Aller à {String(index + 1).padStart(2, "0")}
                        <span className="sr-only">
                          {" "}
                          — {WEBSITE_TAKEOVER_ZONES[id].label}
                        </span>
                      </a>
                    );
                  })}
                </nav>
              ) : null}
            </div>
            <div className="space-y-3">
              {WEBSITE_TAKEOVER_ZONE_IDS.map((id, index) => {
                const definition = WEBSITE_TAKEOVER_ZONES[id];
                const entry = dossier.zones[id];
                const zoneEvaluation = evaluation.zones[id];
                const effectiveLabel =
                  EVIDENCE_STATUS_LABELS[zoneEvaluation.effectiveStatus];
                return (
                  <details
                    key={id}
                    id={`${instanceId}-zone-${id}`}
                    className="min-w-0 rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
                    data-website-takeover-zone={String(index + 1)}
                  >
                    <summary className="grid min-h-11 cursor-pointer grid-cols-[auto_minmax(0,1fr)] items-center gap-2 px-3 py-3 text-sm font-bold text-zinc-950 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-violet-500 dark:text-white sm:grid-cols-[auto_minmax(0,1fr)_auto]">
                      <span className="rounded bg-zinc-900 px-2 py-1 text-xs text-white dark:bg-white dark:text-zinc-950">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 break-words">
                        {definition.label}
                      </span>
                      <span
                        className={`col-span-2 w-fit rounded-full border px-2 py-1 text-[11px] font-bold sm:col-span-1 ${statusClass(
                          zoneEvaluation.effectiveStatus,
                        )}`}
                      >
                        {effectiveLabel}
                      </span>
                    </summary>
                    <fieldset className="min-w-0 border-t border-zinc-200 p-4 dark:border-zinc-800">
                      <legend className="sr-only">
                        Preuves pour {definition.label}
                      </legend>
                      <p className="m-0 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                        <strong>Attendu :</strong> {definition.expected}
                      </p>
                      <p className="mb-0 mt-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                        Preuve attendue :{" "}
                        {
                          WEBSITE_TAKEOVER_PROOF_LABELS[
                            definition.acceptedProofKind
                          ]
                        }
                        .{" "}
                        {definition.alwaysApplicable
                          ? "Cette zone reste toujours applicable à une reprise de site."
                          : "Une non-applicabilité doit être explicitement justifiée."}
                      </p>

                      <div className="mt-4 grid min-w-0 gap-4 sm:grid-cols-2">
                        <label className={LABEL_CLASS}>
                          Applicabilité
                          <select
                            value={
                              entry.applicable === undefined
                                ? "unknown"
                                : entry.applicable
                                  ? "applicable"
                                  : "not-applicable"
                            }
                            onChange={(event) =>
                              updateZoneApplicability(id, event.target.value)
                            }
                            className={INPUT_CLASS}
                          >
                            <option value="unknown">Non qualifiée</option>
                            <option value="applicable">Applicable</option>
                            <option value="not-applicable">
                              Non applicable, justification obligatoire
                            </option>
                          </select>
                        </label>
                        <label className={LABEL_CLASS}>
                          Statut déclaré
                          <select
                            value={entry.status}
                            onChange={(event) =>
                              updateZoneStatus(
                                id,
                                event.target
                                  .value as WebsiteTakeoverEvidenceStatus,
                              )
                            }
                            className={INPUT_CLASS}
                          >
                            {EVIDENCE_STATUS_OPTIONS.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </label>
                        <label className={`${LABEL_CLASS} sm:col-span-2`}>
                          Impact du constat ou de la réserve sur la reprise
                          <select
                            value={
                              entry.blocksReprise === undefined
                                ? "unknown"
                                : entry.blocksReprise
                                  ? "blocking"
                                  : "planned"
                            }
                            onChange={(event) =>
                              updateZone(id, {
                                blocksReprise:
                                  event.target.value === "blocking"
                                    ? true
                                    : event.target.value === "planned"
                                      ? false
                                      : undefined,
                              })
                            }
                            className={INPUT_CLASS}
                          >
                            <option value="unknown">
                              Non qualifié — reste bloquant
                            </option>
                            <option value="blocking">
                              Bloque la reprise — P1
                            </option>
                            <option value="planned">
                              Non bloquant — réserve P2 si elle subsiste
                            </option>
                          </select>
                          <span className={HELP_CLASS}>
                            Une zone P1 par défaut ne peut pas être rétrogradée.
                            Une réserve P2 exige un impact explicitement non
                            bloquant, un responsable, une limite, une action
                            interdite, un déclencheur et une échéance.
                          </span>
                        </label>
                        <label className={`${LABEL_CLASS} sm:col-span-2`}>
                          Type de preuve
                          <select
                            value={entry.proofKind}
                            onChange={(event) =>
                              updateZone(id, {
                                proofKind: event.target
                                  .value as WebsiteTakeoverProofKind,
                              })
                            }
                            className={INPUT_CLASS}
                          >
                            <option value="unknown">
                              Preuve non renseignée
                            </option>
                            <optgroup label="Indices insuffisants à eux seuls">
                              {WEBSITE_TAKEOVER_INSUFFICIENT_PROOF_KINDS.map(
                                (kind) => (
                                  <option key={kind} value={kind}>
                                    {WEBSITE_TAKEOVER_PROOF_LABELS[kind]}
                                  </option>
                                ),
                              )}
                            </optgroup>
                            <optgroup label="Contrôles structurés">
                              {PROOF_KINDS.filter(
                                (kind) =>
                                  kind !== "unknown" &&
                                  !(
                                    WEBSITE_TAKEOVER_INSUFFICIENT_PROOF_KINDS as readonly WebsiteTakeoverProofKind[]
                                  ).includes(kind),
                              ).map((kind) => (
                                <option key={kind} value={kind}>
                                  {WEBSITE_TAKEOVER_PROOF_LABELS[kind]}
                                </option>
                              ))}
                            </optgroup>
                          </select>
                          <span className={HELP_CLASS}>
                            Choisir « Vérifié » ne suffit pas : le contrôle doit
                            correspondre à cette zone.
                          </span>
                        </label>
                        <label className={LABEL_CLASS}>
                          Environnement observé
                          <input
                            type="text"
                            value={entry.environment}
                            onChange={(event) =>
                              updateZone(id, {
                                environment: event.target.value,
                              })
                            }
                            className={INPUT_CLASS}
                            autoComplete="off"
                          />
                        </label>
                        <label className={LABEL_CLASS}>
                          Date de la preuve
                          <input
                            type="date"
                            value={entry.observedOn}
                            onChange={(event) =>
                              updateZone(id, {
                                observedOn: event.target.value,
                              })
                            }
                            className={INPUT_CLASS}
                          />
                        </label>
                        <label className={LABEL_CLASS}>
                          Preuve valide jusqu’au
                          <input
                            type="date"
                            value={entry.validUntil}
                            onChange={(event) =>
                              updateZone(id, {
                                validUntil: event.target.value,
                              })
                            }
                            className={INPUT_CLASS}
                          />
                        </label>
                        <label className={LABEL_CLASS}>
                          Propriétaire de la preuve
                          <input
                            type="text"
                            value={entry.owner}
                            onChange={(event) =>
                              updateZone(id, { owner: event.target.value })
                            }
                            className={INPUT_CLASS}
                            autoComplete="off"
                          />
                        </label>
                        <label className={LABEL_CLASS}>
                          Référence expurgée de l’artefact
                          <input
                            type="text"
                            value={entry.artifactReference}
                            onChange={(event) =>
                              updateZone(id, {
                                artifactReference: event.target.value,
                              })
                            }
                            className={INPUT_CLASS}
                            autoComplete="off"
                          />
                          <span className={HELP_CLASS}>
                            Référence ou empreinte, jamais le secret lui-même.
                          </span>
                        </label>
                        <label className={LABEL_CLASS}>
                          Résultat observable
                          <textarea
                            value={entry.result}
                            onChange={(event) =>
                              updateZone(id, { result: event.target.value })
                            }
                            className={TEXTAREA_CLASS}
                          />
                        </label>
                        <label className={LABEL_CLASS}>
                          Limite de la preuve
                          <textarea
                            value={entry.limitation}
                            onChange={(event) =>
                              updateZone(id, {
                                limitation: event.target.value,
                              })
                            }
                            className={TEXTAREA_CLASS}
                          />
                        </label>
                        <label className={LABEL_CLASS}>
                          Action interdite tant que la réserve n’est pas levée
                          <textarea
                            value={entry.forbiddenAction}
                            onChange={(event) =>
                              updateZone(id, {
                                forbiddenAction: event.target.value,
                              })
                            }
                            className={TEXTAREA_CLASS}
                          />
                        </label>
                        <label className={LABEL_CLASS}>
                          Événement imposant de rouvrir le contrôle
                          <textarea
                            value={entry.reopenTrigger}
                            onChange={(event) =>
                              updateZone(id, {
                                reopenTrigger: event.target.value,
                              })
                            }
                            className={TEXTAREA_CLASS}
                            placeholder="Changement de version, compte, fournisseur, incident ou périmètre"
                          />
                        </label>
                        <label className={LABEL_CLASS}>
                          Prochaine action de revue
                          <textarea
                            value={entry.nextAction}
                            onChange={(event) =>
                              updateZone(id, {
                                nextAction: event.target.value,
                              })
                            }
                            className={TEXTAREA_CLASS}
                          />
                        </label>
                        <label className={LABEL_CLASS}>
                          Échéance de la prochaine revue
                          <input
                            type="date"
                            value={entry.dueOn}
                            onChange={(event) =>
                              updateZone(id, {
                                dueOn: event.target.value,
                              })
                            }
                            className={INPUT_CLASS}
                          />
                        </label>
                        <label className={LABEL_CLASS}>
                          Justification de non-applicabilité
                          <textarea
                            value={entry.naJustification}
                            onChange={(event) =>
                              updateZone(id, {
                                naJustification: event.target.value,
                              })
                            }
                            className={TEXTAREA_CLASS}
                          />
                          <span className={HELP_CLASS}>
                            Décrivez le fait vérifiable. Le contrôle dédié,
                            l’auteur, le périmètre, l’artefact, les dates, le
                            résultat, la limite, l’action interdite, l’impact
                            non bloquant, le déclencheur et la prochaine revue
                            restent requis ; « sans objet » ne suffit pas.
                          </span>
                        </label>
                      </div>

                      <div
                        className={`mt-4 rounded-lg border p-3 text-xs leading-relaxed ${statusClass(
                          zoneEvaluation.effectiveStatus,
                        )}`}
                      >
                        <strong>Statut effectif : {effectiveLabel}.</strong>
                        {entry.status === "verified" &&
                        !zoneEvaluation.proofAccepted ? (
                          <span>
                            {" "}
                            Preuve insuffisante : le statut saisi est déclassé.
                          </span>
                        ) : null}
                        {zoneEvaluation.reasons.length > 0 ? (
                          <ul className="mb-0 mt-2 space-y-1 pl-5">
                            {zoneEvaluation.reasons.map((reason) => (
                              <li key={reason}>{reason}</li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </fieldset>
                  </details>
                );
              })}
            </div>
          </section>

          <section aria-labelledby={`${instanceId}-tco-title`}>
            <h4
              id={`${instanceId}-tco-title`}
              className="m-0 text-lg font-bold text-zinc-950 dark:text-white"
            >
              4. TCO à périmètre égal : 12, 36 et 60 mois
            </h4>
            <p className="mb-4 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Un coût absent reste ND, jamais zéro. Les quatre trajectoires
              doivent couvrir exactement le même service, les sept catégories
              canoniques, les quantités, les bornes temporelles et une source
              datée pour chaque montant. Un coût annuel est proratisé selon ses
              mois réellement actifs dans chaque horizon.
            </p>

            <fieldset className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
              <legend className="px-1 text-base font-bold text-zinc-950 dark:text-white">
                Convention commune de calcul
              </legend>
              <div className="mt-2 grid min-w-0 gap-4 sm:grid-cols-2">
                <label className={LABEL_CLASS}>
                  Devise ISO à deux décimales
                  <input
                    type="text"
                    maxLength={3}
                    value={dossier.tco.convention.currency}
                    onChange={(event) =>
                      updateTcoConvention(
                        "currency",
                        event.target.value.toUpperCase(),
                      )
                    }
                    className={INPUT_CLASS}
                    placeholder="EUR"
                    autoComplete="off"
                  />
                  <span className={HELP_CLASS}>
                    L’outil stocke les montants en centièmes : utilisez une
                    devise à deux décimales, par exemple EUR, USD ou CHF.
                  </span>
                </label>
                <label className={LABEL_CLASS}>
                  Base fiscale
                  <select
                    value={dossier.tco.convention.taxBasis ?? ""}
                    onChange={(event) =>
                      updateTcoConvention(
                        "taxBasis",
                        (event.target.value || undefined) as
                          WebsiteTakeoverTaxBasis | undefined,
                      )
                    }
                    className={INPUT_CLASS}
                  >
                    <option value="">Non qualifiée</option>
                    <option value="HT">Hors taxes</option>
                    <option value="TTC">Toutes taxes comprises</option>
                  </select>
                </label>
                <label className={LABEL_CLASS}>
                  Date de valorisation
                  <input
                    type="date"
                    value={dossier.tco.convention.valuationDate}
                    onChange={(event) =>
                      updateTcoConvention("valuationDate", event.target.value)
                    }
                    className={INPUT_CLASS}
                  />
                </label>
                <label className={LABEL_CLASS}>
                  Source des hypothèses
                  <input
                    type="text"
                    value={dossier.tco.convention.source}
                    onChange={(event) =>
                      updateTcoConvention("source", event.target.value)
                    }
                    className={INPUT_CLASS}
                    autoComplete="off"
                  />
                </label>
                <label className={`${LABEL_CLASS} sm:col-span-2`}>
                  Périmètre commun du TCO
                  <textarea
                    value={dossier.tco.convention.commonScope}
                    onChange={(event) =>
                      updateTcoConvention("commonScope", event.target.value)
                    }
                    className={TEXTAREA_CLASS}
                  />
                </label>
                <label className={LABEL_CLASS}>
                  Sept catégories relues sans omission connue
                  <select
                    value={
                      dossier.tco.convention.costCategoriesReviewed ===
                      undefined
                        ? ""
                        : dossier.tco.convention.costCategoriesReviewed
                          ? "yes"
                          : "no"
                    }
                    onChange={(event) =>
                      updateTcoConvention(
                        "costCategoriesReviewed",
                        event.target.value === ""
                          ? undefined
                          : event.target.value === "yes",
                      )
                    }
                    className={INPUT_CLASS}
                  >
                    <option value="">Non qualifié</option>
                    <option value="yes">Oui, revue effectuée</option>
                    <option value="no">Non, le TCO reste ND</option>
                  </select>
                </label>
                <label className={LABEL_CLASS}>
                  Méthode de réserve de risque
                  <textarea
                    value={dossier.tco.convention.riskMethod}
                    onChange={(event) =>
                      updateTcoConvention("riskMethod", event.target.value)
                    }
                    className={TEXTAREA_CLASS}
                    placeholder="Risques couverts, règle de calcul et source de décision"
                  />
                </label>
              </div>
              <button
                type="button"
                onClick={copyCommonScopeToTco}
                className={`${BUTTON_CLASS} mt-4 border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white`}
              >
                Reporter le périmètre commun sur les quatre trajectoires
              </button>
            </fieldset>

            <div
              className="mt-4 grid min-w-0 gap-3 sm:grid-cols-2"
            >
              {WEBSITE_TAKEOVER_TRAJECTORY_IDS.map((id) => {
                const result = evaluation.tco.trajectories[id];
                return (
                  <article
                    key={id}
                    className="min-w-0 rounded-xl border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-800 dark:bg-zinc-900/40"
                    data-website-takeover-tco-summary={id}
                  >
                    <h5 className="m-0 break-words text-sm font-bold text-zinc-950 dark:text-white">
                      {WEBSITE_TAKEOVER_TRAJECTORIES[id].label}
                    </h5>
                    <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
                      {WEBSITE_TAKEOVER_TCO_HORIZONS.map((horizon) => (
                        <div
                          key={horizon}
                          className="min-w-0 rounded-lg border border-zinc-200 bg-white p-2 dark:border-zinc-800 dark:bg-zinc-950"
                        >
                          <span className="block text-[10px] font-bold text-zinc-600 dark:text-zinc-300">
                            {horizon} mois
                          </span>
                          <span className="mt-1 block break-words text-xs font-bold text-zinc-950 dark:text-white">
                            {result.kind === "known" &&
                            dossier.tco.convention.taxBasis
                              ? formatWebsiteTakeoverCents(
                                  result.totalsCents[horizon],
                                  dossier.tco.convention.currency,
                                  dossier.tco.convention.taxBasis,
                                )
                              : "ND"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-4 space-y-3">
              {WEBSITE_TAKEOVER_TRAJECTORY_IDS.map((id) => {
                const trajectory = dossier.tco.trajectories[id];
                const result = evaluation.tco.trajectories[id];
                return (
                  <details
                    key={id}
                    className="min-w-0 rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
                    data-website-takeover-trajectory={id}
                  >
                    <summary className="grid min-h-11 cursor-pointer grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-4 py-3 text-sm font-bold text-zinc-950 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-violet-500 dark:text-white">
                      <span className="min-w-0 break-words">
                        {WEBSITE_TAKEOVER_TRAJECTORIES[id].label}
                      </span>
                      <span
                        className={`rounded-full border px-2 py-1 text-[11px] ${
                          result.kind === "known"
                            ? "border-emerald-300 bg-emerald-50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-100"
                            : "border-amber-300 bg-amber-50 text-amber-900 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100"
                        }`}
                      >
                        {result.kind === "known" ? "Calculé" : "ND"}
                      </span>
                    </summary>
                    <fieldset className="min-w-0 border-t border-zinc-200 p-4 dark:border-zinc-800">
                      <legend className="sr-only">
                        Hypothèses et coûts pour{" "}
                        {WEBSITE_TAKEOVER_TRAJECTORIES[id].label}
                      </legend>
                      <p className="m-0 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {WEBSITE_TAKEOVER_TRAJECTORIES[id].purpose}
                      </p>
                      <div className="mt-4 grid min-w-0 gap-4 sm:grid-cols-2">
                        <label className={LABEL_CLASS}>
                          Périmètre repris à l’identique
                          <textarea
                            value={trajectory.commonScope}
                            onChange={(event) =>
                              updateTrajectory(id, {
                                commonScope: event.target.value,
                              })
                            }
                            className={TEXTAREA_CLASS}
                          />
                        </label>
                        <label className={LABEL_CLASS}>
                          Hypothèses propres à cette trajectoire
                          <textarea
                            value={trajectory.assumptions}
                            onChange={(event) =>
                              updateTrajectory(id, {
                                assumptions: event.target.value,
                              })
                            }
                            className={TEXTAREA_CLASS}
                          />
                        </label>
                      </div>

                      <div className="mt-5 space-y-4">
                        {trajectory.costLines.length === 0 ? (
                          <p className="m-0 rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100">
                            Aucune ligne de coût : les trois horizons restent
                            ND.
                          </p>
                        ) : null}
                        {trajectory.costLines.map((line, lineIndex) => (
                          <fieldset
                            key={line.rowKey}
                            className="min-w-0 rounded-lg border border-zinc-200 p-3 dark:border-zinc-800"
                          >
                            <legend className="px-1 text-sm font-bold text-zinc-950 dark:text-white">
                              Ligne de coût {lineIndex + 1}
                            </legend>
                            <div className="mt-1 grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                              <label className={LABEL_CLASS}>
                                Catégorie canonique
                                <select
                                  value={line.category}
                                  onChange={(event) =>
                                    updateCostLine(id, lineIndex, {
                                      category: event.target
                                        .value as WebsiteTakeoverCostCategory,
                                    })
                                  }
                                  className={INPUT_CLASS}
                                >
                                  {WEBSITE_TAKEOVER_COST_CATEGORIES.map(
                                    (category) => (
                                      <option key={category} value={category}>
                                        {
                                          WEBSITE_TAKEOVER_COST_CATEGORY_LABELS[
                                            category
                                          ]
                                        }
                                      </option>
                                    ),
                                  )}
                                </select>
                              </label>
                              <label className={LABEL_CLASS}>
                                Identifiant interne de ligne
                                <input
                                  type="text"
                                  value={line.id}
                                  onChange={(event) =>
                                    updateCostLine(id, lineIndex, {
                                      id: event.target.value,
                                    })
                                  }
                                  className={INPUT_CLASS}
                                  autoComplete="off"
                                />
                              </label>
                              <label className={LABEL_CLASS}>
                                Origine unique du coût
                                <input
                                  type="text"
                                  value={line.costKey}
                                  onChange={(event) =>
                                    updateCostLine(id, lineIndex, {
                                      costKey: event.target.value,
                                    })
                                  }
                                  className={INPUT_CLASS}
                                  autoComplete="off"
                                />
                              </label>
                              <label className={LABEL_CLASS}>
                                Libellé du coût
                                <input
                                  type="text"
                                  value={line.label}
                                  onChange={(event) =>
                                    updateCostLine(id, lineIndex, {
                                      label: event.target.value,
                                    })
                                  }
                                  className={INPUT_CLASS}
                                  autoComplete="off"
                                />
                              </label>
                              <label className={LABEL_CLASS}>
                                Montant unitaire en{" "}
                                {dossier.tco.convention.currency ||
                                  "devise choisie"}
                                <input
                                  type="text"
                                  inputMode="decimal"
                                  value={centsToEuroInput(line.amountCents)}
                                  onChange={(event) =>
                                    updateCostLine(id, lineIndex, {
                                      amountCents: euroInputToCents(
                                        event.target.value,
                                      ),
                                    })
                                  }
                                  className={INPUT_CLASS}
                                  placeholder="ND tant que vide"
                                  autoComplete="off"
                                />
                                <span className={HELP_CLASS}>
                                  Deux décimales maximum ; zéro doit être
                                  explicite et sourcé. Le total multiplie ce
                                  montant par la quantité et la durée active ;
                                  un coût annuel est proratisé au mois.
                                </span>
                              </label>
                              <label className={LABEL_CLASS}>
                                Quantité
                                <input
                                  type="number"
                                  min={1}
                                  step={1}
                                  value={line.quantity}
                                  onChange={(event) =>
                                    updateCostLine(id, lineIndex, {
                                      quantity: event.target.value,
                                    })
                                  }
                                  className={INPUT_CLASS}
                                />
                              </label>
                              <label className={LABEL_CLASS}>
                                Fréquence
                                <select
                                  value={line.frequency}
                                  onChange={(event) =>
                                    updateCostLine(id, lineIndex, {
                                      frequency: event.target
                                        .value as WebsiteTakeoverCostFrequency,
                                    })
                                  }
                                  className={INPUT_CLASS}
                                >
                                  {COST_FREQUENCY_OPTIONS.map((option) => (
                                    <option
                                      key={option.value}
                                      value={option.value}
                                    >
                                      {option.label}
                                    </option>
                                  ))}
                                </select>
                              </label>
                              <label className={LABEL_CLASS}>
                                Mois de départ
                                <input
                                  type="number"
                                  min={
                                    line.frequency === "monthly" ||
                                    line.frequency === "annual"
                                      ? 1
                                      : 0
                                  }
                                  max={60}
                                  step={1}
                                  value={line.startMonth ?? ""}
                                  onChange={(event) =>
                                    updateCostLine(id, lineIndex, {
                                      startMonth:
                                        event.target.value === ""
                                          ? undefined
                                          : Number(event.target.value),
                                    })
                                  }
                                  className={INPUT_CLASS}
                                />
                              </label>
                              <label className={LABEL_CLASS}>
                                Mois de fin
                                <input
                                  type="number"
                                  min={line.startMonth ?? 0}
                                  max={60}
                                  step={1}
                                  value={line.endMonth ?? ""}
                                  onChange={(event) =>
                                    updateCostLine(id, lineIndex, {
                                      endMonth:
                                        event.target.value === ""
                                          ? undefined
                                          : Number(event.target.value),
                                    })
                                  }
                                  className={INPUT_CLASS}
                                />
                                <span className={HELP_CLASS}>
                                  Pour un coût temporaire, indiquez son dernier
                                  mois ; 60 signifie toute la période étudiée.
                                </span>
                              </label>
                              <label className={LABEL_CLASS}>
                                Date de la source
                                <input
                                  type="date"
                                  value={line.sourceDate}
                                  onChange={(event) =>
                                    updateCostLine(id, lineIndex, {
                                      sourceDate: event.target.value,
                                    })
                                  }
                                  className={INPUT_CLASS}
                                />
                              </label>
                              <label
                                className={`${LABEL_CLASS} sm:col-span-2 lg:col-span-3`}
                              >
                                Source datée du montant
                                <input
                                  type="text"
                                  value={line.source}
                                  onChange={(event) =>
                                    updateCostLine(id, lineIndex, {
                                      source: event.target.value,
                                    })
                                  }
                                  className={INPUT_CLASS}
                                  autoComplete="off"
                                />
                              </label>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeCostLine(id, lineIndex)}
                              className={`${BUTTON_CLASS} mt-3 border border-rose-300 bg-white text-rose-800 hover:bg-rose-50 dark:border-rose-800 dark:bg-zinc-950 dark:text-rose-200`}
                            >
                              Retirer cette ligne
                            </button>
                          </fieldset>
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={() => addCostLine(id)}
                        className={`${BUTTON_CLASS} mt-4 border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white`}
                      >
                        Ajouter une ligne de coût
                      </button>
                      {result.kind === "unknown" && result.issues.length > 0 ? (
                        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100">
                          <strong>Pourquoi le TCO reste ND :</strong>
                          <ul className="mb-0 mt-2 space-y-1 pl-5">
                            {result.issues
                              .slice(0, 5)
                              .map((issue, issueIndex) => (
                              <li
                                key={`${issue.field}-${issue.code}-${issueIndex}`}
                              >
                                {issue.message}
                              </li>
                              ))}
                          </ul>
                          {result.issues.length > 5 ? (
                            <details className="mt-2">
                              <summary className="cursor-pointer font-bold">
                                Afficher les {result.issues.length - 5} autres
                                anomalies
                              </summary>
                              <ul className="mb-0 mt-2 space-y-1 pl-5">
                                {result.issues
                                  .slice(5)
                                  .map((issue, issueIndex) => (
                                    <li
                                      key={`${issue.field}-${issue.code}-${issueIndex}`}
                                    >
                                      {issue.message}
                                    </li>
                                  ))}
                              </ul>
                            </details>
                          ) : null}
                        </div>
                      ) : null}
                    </fieldset>
                  </details>
                );
              })}
            </div>
          </section>

          <section aria-labelledby={`${instanceId}-findings-title`}>
            <h4
              id={`${instanceId}-findings-title`}
              className="m-0 text-lg font-bold text-zinc-950 dark:text-white"
            >
              5. Réserves P0, P1 et P2
            </h4>
            <p className="mb-4 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Les priorités ne sont jamais moyennées. Un P0 suspend la reprise
              ordinaire ; un P1 bloque le GO de reprise tant qu’il n’est pas
              levé ; un P2 peut rester planifié avec son propriétaire, sa
              limite, son échéance et son action interdite.
            </p>
            {evaluation.findings.length === 0 ? (
              <p className="m-0 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-100">
                Aucune réserve calculée dans le périmètre et à la date du
                dossier. Cela ne constitue ni certification ni garantie.
              </p>
            ) : (
              <ul className="m-0 space-y-2 p-0">
                {evaluation.findings.map((finding, index) => (
                  <li
                    key={`${finding.code}-${finding.zoneId ?? finding.field ?? index}`}
                    className="flex min-w-0 items-start gap-3 rounded-lg border border-zinc-200 p-3 text-sm text-zinc-800 dark:border-zinc-800 dark:text-zinc-200"
                  >
                    <span
                      className={`shrink-0 rounded px-2 py-1 text-xs font-black ${
                        finding.severity === "P0"
                          ? "bg-rose-700 text-white"
                          : finding.severity === "P1"
                            ? "bg-amber-300 text-amber-950"
                            : "bg-blue-200 text-blue-950"
                      }`}
                    >
                      {finding.severity}
                    </span>
                    <span className="min-w-0 break-words leading-relaxed">
                      {finding.message}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section
            className="rounded-xl border border-violet-200 bg-violet-50/50 p-4 dark:border-violet-900 dark:bg-violet-950/20"
            aria-labelledby={`${instanceId}-export-title`}
          >
            <h4
              id={`${instanceId}-export-title`}
              className="m-0 text-lg font-bold text-zinc-950 dark:text-white"
            >
              6. Prévisualiser, relire, puis exporter
            </h4>
            <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              Le masquage est best-effort : il reconnaît seulement certains
              motifs et ne garantit pas l’absence de secret ou de donnée
              personnelle. Relisez la synthèse et l’annexe, puis supprimez
              manuellement mots de passe, clés, jetons, cookies, données
              personnelles, données client et journaux bruts.
            </p>
            <details className="mt-4 min-w-0 rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
              <summary className="flex min-h-11 cursor-pointer items-center px-3 py-3 text-sm font-bold text-zinc-950 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-violet-500 dark:text-white">
                Prévisualiser la synthèse puis l’annexe imprimable
              </summary>
              <pre
                tabIndex={0}
                aria-label="Prévisualisation locale du rapport à relire"
                className="m-0 max-h-96 overflow-y-auto whitespace-pre-wrap break-words border-t border-zinc-200 p-3 font-mono text-xs leading-relaxed text-zinc-800 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-violet-500 dark:border-zinc-800 dark:text-zinc-200"
              >
                {printableReport}
              </pre>
            </details>
            <label
              className={`${BUTTON_CLASS} mt-4 cursor-pointer border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100 focus-within:ring-2 focus-within:ring-violet-500 focus-within:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white`}
            >
              <FileJson className="h-4 w-4" aria-hidden="true" />
              Importer un JSON compatible
              <input
                type="file"
                accept="application/json,.json"
                onChange={importJson}
                className="sr-only"
              />
            </label>
            <p className="mb-0 mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
              L’import reste local, refuse les versions et structures
              incompatibles, et révoque la confirmation de relecture.
            </p>
            <label className="mt-4 flex min-h-11 items-start gap-3 rounded-lg border border-zinc-200 bg-white p-3 text-sm font-semibold leading-relaxed text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
              <input
                type="checkbox"
                checked={reviewConfirmed}
                onChange={(event) => {
                  setReviewConfirmed(event.target.checked);
                  setFeedback("");
                }}
                className="mt-0.5 h-5 w-5 shrink-0 accent-violet-700 outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
              />
              <span>
                J’ai relu la synthèse et l’annexe et supprimé manuellement les
                secrets, données personnelles et données client avant copie,
                téléchargement, impression ou partage.
              </span>
            </label>
            <div className="mt-4 grid min-w-0 gap-2 sm:flex sm:flex-wrap">
              <button
                type="button"
                onClick={copyReport}
                disabled={!reviewConfirmed}
                className={`${BUTTON_CLASS} bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950`}
              >
                <ClipboardCheck className="h-4 w-4" aria-hidden="true" />
                Copier le rapport
              </button>
              <button
                type="button"
                onClick={() => downloadExport("txt")}
                disabled={!reviewConfirmed}
                className={`${BUTTON_CLASS} border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white`}
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Télécharger le TXT
              </button>
              <button
                type="button"
                onClick={() => downloadExport("json")}
                disabled={!reviewConfirmed}
                className={`${BUTTON_CLASS} border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white`}
              >
                <FileJson className="h-4 w-4" aria-hidden="true" />
                Télécharger le JSON
              </button>
              <button
                type="button"
                onClick={() => downloadExport("csv")}
                disabled={!reviewConfirmed}
                className={`${BUTTON_CLASS} border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white`}
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Télécharger le CSV
              </button>
              <button
                type="button"
                onClick={printReport}
                disabled={!reviewConfirmed}
                className={`${BUTTON_CLASS} border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white`}
              >
                <Printer className="h-4 w-4" aria-hidden="true" />
                Imprimer le rapport
              </button>
              <button
                type="button"
                onClick={(event) => askReset(event.currentTarget)}
                className={`${BUTTON_CLASS} border border-rose-300 bg-white text-rose-800 hover:bg-rose-50 dark:border-rose-800 dark:bg-zinc-950 dark:text-rose-200`}
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                Effacer le dossier
              </button>
            </div>
            <p
              className="mb-0 mt-3 min-h-5 text-xs font-semibold text-zinc-600 dark:text-zinc-400"
              aria-live="polite"
            >
              {feedback ||
                (reviewConfirmed
                  ? "Relecture confirmée : les exports locaux sont disponibles."
                  : "Copie, téléchargements et impression restent désactivés jusqu’à la relecture.")}
            </p>
          </section>
        </div>
      </section>

      {resetRequested && typeof document !== "undefined"
        ? createPortal(
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/65 p-4"
              data-website-takeover-reset-portal="true"
            >
              <div
                ref={resetDialogRef}
                role="alertdialog"
                aria-modal="true"
                aria-labelledby={`${instanceId}-reset-title`}
                aria-describedby={`${instanceId}-reset-description`}
                onKeyDown={handleResetDialogKeyDown}
                className="w-full max-w-lg rounded-xl border border-rose-300 bg-white p-5 text-rose-950 shadow-2xl outline-none dark:border-rose-800 dark:bg-zinc-950 dark:text-rose-100"
              >
                <div className="flex items-start gap-3">
                  <ShieldAlert
                    className="mt-0.5 h-5 w-5 shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <h2
                      id={`${instanceId}-reset-title`}
                      className="m-0 text-lg font-bold"
                    >
                      Effacer toutes les informations de ce dossier ?
                    </h2>
                    <p
                      id={`${instanceId}-reset-description`}
                      className="mb-0 mt-2 text-sm leading-relaxed"
                    >
                      Aucune copie automatique n’existe. Annulez puis exportez
                      le rapport relu si vous devez conserver ce travail.
                    </p>
                  </div>
                </div>
                <div className="mt-4 grid gap-2 sm:flex sm:flex-wrap">
                  <button
                    ref={resetConfirmRef}
                    type="button"
                    onClick={confirmReset}
                    className={`${BUTTON_CLASS} bg-rose-700 text-white hover:bg-rose-800 focus-visible:ring-rose-500`}
                  >
                    Oui, effacer
                  </button>
                  <button
                    type="button"
                    onClick={cancelReset}
                    className={`${BUTTON_CLASS} border border-rose-300 bg-white text-rose-900 hover:bg-rose-50 focus-visible:ring-rose-500 dark:bg-zinc-950 dark:text-rose-100`}
                  >
                    Annuler
                  </button>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}

      {(pendingInternalHref || pendingHistoryNavigation) &&
      typeof document !== "undefined"
        ? createPortal(
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/65 p-4"
              data-website-takeover-navigation-portal="true"
            >
              <div
                ref={navigationDialogRef}
                role="alertdialog"
                aria-modal="true"
                aria-labelledby={`${instanceId}-navigation-title`}
                aria-describedby={`${instanceId}-navigation-description`}
                onKeyDown={handleNavigationDialogKeyDown}
                className="w-full max-w-lg rounded-xl border border-amber-300 bg-white p-5 text-zinc-950 shadow-2xl outline-none dark:border-amber-700 dark:bg-zinc-950 dark:text-zinc-100"
              >
                <div className="flex items-start gap-3">
                  <ShieldAlert
                    className="mt-0.5 h-5 w-5 shrink-0 text-amber-700 dark:text-amber-300"
                    aria-hidden="true"
                  />
                  <div>
                    <h2
                      id={`${instanceId}-navigation-title`}
                      className="m-0 text-lg font-bold"
                    >
                      Quitter cette page sans exporter le dossier ?
                    </h2>
                    <p
                      id={`${instanceId}-navigation-description`}
                      className="mb-0 mt-2 text-sm leading-relaxed"
                    >
                      Ce dossier reste uniquement dans cet onglet. Restez sur
                      la page et téléchargez le JSON si vous devez conserver le
                      travail saisi.
                    </p>
                  </div>
                </div>
                <div className="mt-4 grid gap-2 sm:flex sm:flex-wrap">
                  <button
                    ref={navigationStayRef}
                    type="button"
                    onClick={cancelInternalNavigation}
                    className={`${BUTTON_CLASS} bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200`}
                  >
                    Rester et exporter
                  </button>
                  <button
                    type="button"
                    onClick={confirmInternalNavigation}
                    className={`${BUTTON_CLASS} border border-rose-300 bg-white text-rose-900 hover:bg-rose-50 focus-visible:ring-rose-500 dark:border-rose-800 dark:bg-zinc-950 dark:text-rose-100`}
                  >
                    Quitter sans exporter
                  </button>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
