"use client";

import { useEffect, useMemo, useState } from "react";
import { ClipboardCheck, Printer, RotateCcw } from "lucide-react";
import { copyTextToClipboard } from "@/lib/clipboard";
import {
  WEBSITE_INCIDENT_FIELDS,
  WEBSITE_MAINTENANCE_GATE_EVIDENCE_FIELDS,
  WEBSITE_MAINTENANCE_GATE_IDS,
  WEBSITE_MAINTENANCE_GATES,
  WEBSITE_MAINTENANCE_SOURCE_DATE,
  WEBSITE_MAINTENANCE_TCO_FIELDS,
  buildWebsiteMaintenanceDecisionReport,
  calculateWebsiteIncidentImpact,
  calculateWebsiteMaintenanceTcoSeries,
  createEmptyWebsiteMaintenanceDecisionContext,
  effectiveWebsiteMaintenanceGateStatus,
  missingWebsiteMaintenanceGateEvidenceFields,
  qualifyWebsiteMaintenanceOffer,
  validateWebsiteMaintenanceEvidenceDate,
  websiteMaintenanceEvidenceDateMaximum,
  type WebsiteIncidentField,
  type WebsiteMaintenanceDecisionContext,
  type WebsiteMaintenanceEvidenceDateContext,
  type WebsiteMaintenanceEvidenceDateValidation,
  type WebsiteMaintenanceGateEvidenceField,
  type WebsiteMaintenanceGateId,
  type WebsiteMaintenanceGateStatus,
  type WebsiteMaintenanceOfferInput,
  type WebsiteMaintenanceTcoField,
  type WebsiteMaintenanceTcoResult,
} from "@/lib/website-maintenance-decision";

const CONTEXT_FIELDS: Array<{
  key: Exclude<
    keyof WebsiteMaintenanceDecisionContext,
    "decisionDate" | "incident" | "offers"
  >;
  label: string;
  help: string;
  placeholder: string;
}> = [
  {
    key: "siteClass",
    label: "Classe et criticité du site",
    help: "Distinguez vitrine, boutique et service critique ; nommez la conséquence d’un arrêt.",
    placeholder:
      "Ex. boutique centrale : une commande impossible reporte ou fait perdre une vente.",
  },
  {
    key: "businessFunctions",
    label: "Fonctions métier et dépendances",
    help: "Décrivez ce qui doit fonctionner, y compris paiement, e-mail, consentement et services tiers.",
    placeholder:
      "Ex. catalogue, panier, paiement, stock, facture, e-mails et synchronisation transporteur.",
  },
  {
    key: "coverageWindow",
    label: "Fenêtre réellement couverte",
    help: "Précisez jours, horaires, fuseau et astreinte ; « 24/7 » doit être démontré.",
    placeholder:
      "Ex. surveillance continue ; intervention humaine du lundi au samedi, 8 h–20 h, heure de Paris.",
  },
  {
    key: "rpoRto",
    label: "Perte de données et durée de reprise admises",
    help: "Écrivez la quantité maximale de données perdues et la durée maximale avant retour du service.",
    placeholder:
      "Ex. au plus 15 min de commandes perdues ; parcours de paiement rétabli sous 2 h.",
  },
  {
    key: "lastRestoredPoint",
    label: "Dernier point réellement restauré",
    help: "Une sauvegarde non restaurée ne prouve pas la reprise. Notez date, périmètre et durée mesurée.",
    placeholder:
      "Ex. restauration complète du 12/06/2026, commande testée, 1 h 24, procès-verbal joint.",
  },
  {
    key: "measurementOwner",
    label: "Responsable des mesures et décisions",
    help: "Nommez le titulaire, son suppléant et la personne autorisée à accepter un risque résiduel.",
    placeholder:
      "Ex. direction e-commerce ; suppléant DAF ; revue mensuelle des incidents et du budget.",
  },
];

const OFFER_FIELDS: Array<{
  key: Exclude<keyof WebsiteMaintenanceOfferInput, "name" | "gates" | "tco">;
  label: string;
  placeholder: string;
}> = [
  {
    key: "deliveryMode",
    label: "Mode de prise en charge",
    placeholder:
      "Ex. agence, freelance avec relais, équipe interne ou TMA organisée.",
  },
  {
    key: "scopeSummary",
    label: "Périmètre inclus",
    placeholder:
      "Actifs, horaires, quantité de corrections, surveillance, sauvegarde, restauration et sortie.",
  },
  {
    key: "exclusions",
    label: "Exclusions et dépassements",
    placeholder:
      "Ce qui déclenche un devis, un taux horaire, une limite mensuelle ou une absence de couverture.",
  },
  {
    key: "residualRiskPayer",
    label: "Risque résiduel et payeur",
    placeholder:
      "Ex. perte au-delà du point restaurable supportée par l’entreprise ; plafond et recours indiqués.",
  },
];

const STATUS_OPTIONS: Array<{
  value: WebsiteMaintenanceGateStatus;
  label: string;
}> = [
  { value: "unknown", label: "ND — non démontré" },
  { value: "pass", label: "Pass — conclusion déclarée" },
  { value: "fail", label: "Fail — conclusion déclarée" },
];

const EVIDENCE_PLACEHOLDERS: Record<
  WebsiteMaintenanceGateEvidenceField,
  string
> = {
  evidenceDate: "",
  artifactReference: "Ex. PV-RESTORE-2026-07 ou lien interne",
  scope: "Ex. fichiers, base, configuration et parcours de commande",
  result: "Ex. restauration réussie en 1 h 24, contrôles conformes",
  responsible: "Ex. responsable exploitation, titulaire du contrôle",
};

type IncidentErrors = Partial<Record<WebsiteIncidentField, string>>;
type TcoErrors = Partial<Record<WebsiteMaintenanceTcoField, string>>;

function numberInputValue(value: number | undefined): number | "" {
  return value === undefined || !Number.isFinite(value) ? "" : value;
}

function currentLocalIsoDate(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatIsoDateForDisplay(value: string): string {
  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return value || "ND";
  return `${match[3]}/${match[2]}/${match[1]}`;
}

function evidenceDateErrorMessage(
  validation: WebsiteMaintenanceEvidenceDateValidation,
  context: WebsiteMaintenanceEvidenceDateContext,
): string | undefined {
  if (validation.valid) return undefined;
  if (validation.issues.includes("invalidEvidenceDate")) {
    return "Saisissez une date de preuve réelle au format ISO.";
  }
  if (validation.issues.includes("invalidEvaluationDate")) {
    return "La date d’évaluation du dossier est invalide : la preuve ne peut pas être démontrée.";
  }

  const limits = [
    validation.issues.includes("afterEvaluationDate")
      ? `la date d’évaluation (${formatIsoDateForDisplay(
          context.evaluationDate,
        )})`
      : "",
    validation.issues.includes("afterDecisionDate")
      ? `la date de décision (${formatIsoDateForDisplay(context.decisionDate)})`
      : "",
  ].filter(Boolean);
  return `La date de preuve ne peut pas être postérieure à ${limits.join(
    " ni à ",
  )}. Date maximale autorisée : ${formatIsoDateForDisplay(
    validation.maximumDate ?? "",
  )}.`;
}

function formatPreciseEuro(value: number): string {
  return `${value.toLocaleString("fr-FR", {
    maximumFractionDigits: 2,
  })} €`;
}

function parseNonNegativeNumber(
  rawValue: string,
  maximum?: number,
): { value: number | undefined; error: string | null } {
  if (rawValue === "") return { value: undefined, error: null };
  const value = Number(rawValue);
  if (!Number.isFinite(value) || value < 0) {
    return {
      value: undefined,
      error: "Saisissez un nombre fini supérieur ou égal à zéro.",
    };
  }
  if (maximum !== undefined && value > maximum) {
    return {
      value: undefined,
      error: `La valeur ne peut pas dépasser ${maximum}.`,
    };
  }
  return { value, error: null };
}

function formatTco(
  result: WebsiteMaintenanceTcoResult,
  comparable: boolean,
): string {
  if (result.kind === "unknown") {
    return `ND · ${result.issues.length} poste(s) à renseigner`;
  }
  const amount = `${Math.round(result.total).toLocaleString("fr-FR")} € HT`;
  return comparable ? amount : `Sous-total non comparable · ${amount}`;
}

function qualificationCopy(
  qualification: ReturnType<typeof qualifyWebsiteMaintenanceOffer>,
): { title: string; detail: string; className: string } {
  if (qualification.status === "eliminated") {
    return {
      title: "Offre éliminée",
      detail: `${qualification.failedGates.length} porte(s) sont en échec prouvé. Un prix inférieur ne les compense pas.`,
      className:
        "border-rose-300 bg-rose-50 text-rose-950 dark:border-rose-800 dark:bg-rose-950/30 dark:text-rose-100",
    };
  }
  if (qualification.status === "unqualified") {
    const blockers = [
      qualification.missingCommonFields.length
        ? `${qualification.missingCommonFields.length} champ(s) commun(s)`
        : "",
      qualification.missingOfferFields.length
        ? `${qualification.missingOfferFields.length} descriptif(s) d’offre`
        : "",
      qualification.unknownGates.length
        ? `${qualification.unknownGates.length} porte(s)`
        : "",
      qualification.unknownTcoFields.length
        ? `${qualification.unknownTcoFields.length} poste(s) TCO`
        : "",
    ].filter(Boolean);
    return {
      title: "Offre non qualifiée",
      detail: `${blockers.join(" · ")} restent incomplets ou ND. Tout montant calculable reste un sous-total non comparable.`,
      className:
        "border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100",
    };
  }
  return {
    title: "Offre qualifiée et comparable",
    detail:
      "Les 6 champs communs, 4 descriptifs, 9 preuves structurées et 10 postes TCO sont complets. Cela n’en fait pas un gagnant automatique.",
    className:
      "border-emerald-300 bg-emerald-50 text-emerald-950 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-100",
  };
}

export function WebsiteMaintenanceDecisionDossier() {
  const [evaluationDate, setEvaluationDate] = useState("");
  const [context, setContext] = useState(
    createEmptyWebsiteMaintenanceDecisionContext,
  );
  const [activeOfferIndex, setActiveOfferIndex] = useState<0 | 1>(0);
  const [incidentErrors, setIncidentErrors] = useState<IncidentErrors>({});
  const [tcoErrors, setTcoErrors] = useState<[TcoErrors, TcoErrors]>([{}, {}]);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">(
    "idle",
  );
  const [resetRequested, setResetRequested] = useState(false);

  useEffect(() => {
    let mounted = true;
    queueMicrotask(() => {
      if (mounted) setEvaluationDate(currentLocalIsoDate());
    });
    return () => {
      mounted = false;
    };
  }, []);

  const report = useMemo(
    () => buildWebsiteMaintenanceDecisionReport(context, evaluationDate),
    [context, evaluationDate],
  );
  const incident = useMemo(
    () => calculateWebsiteIncidentImpact(context.incident),
    [context.incident],
  );
  const offerResults = useMemo(
    () =>
      context.offers.map((offer) => ({
        qualification: qualifyWebsiteMaintenanceOffer(
          context,
          offer,
          evaluationDate,
        ),
        tco: calculateWebsiteMaintenanceTcoSeries(offer.tco),
      })),
    [context, evaluationDate],
  );

  const activeOffer = context.offers[activeOfferIndex];
  const activeResult = offerResults[activeOfferIndex];
  const activeQualification = qualificationCopy(activeResult.qualification);
  const comparisonAuthorized = offerResults.every(
    ({ qualification }) => qualification.status === "qualified",
  );
  const recoverableCompensationError =
    incident.kind === "unknown" &&
    incident.grossBeforeCompensation !== undefined
      ? `La compensation récupérable ne peut pas dépasser le coût brut de l’incident, soit ${formatPreciseEuro(
          incident.grossBeforeCompensation,
        )}.`
      : undefined;

  function markChanged() {
    setCopyStatus("idle");
  }

  function updateContextField(
    key: Exclude<
      keyof WebsiteMaintenanceDecisionContext,
      "incident" | "offers"
    >,
    value: string,
  ) {
    setContext((current) => ({ ...current, [key]: value }));
    markChanged();
  }

  function updateOffer(
    index: 0 | 1,
    updater: (
      offer: WebsiteMaintenanceOfferInput,
    ) => WebsiteMaintenanceOfferInput,
  ) {
    setContext((current) => {
      const offers = [...current.offers] as [
        WebsiteMaintenanceOfferInput,
        WebsiteMaintenanceOfferInput,
      ];
      offers[index] = updater(offers[index]);
      return { ...current, offers };
    });
    markChanged();
  }

  function updateActiveOffer(
    updater: (
      offer: WebsiteMaintenanceOfferInput,
    ) => WebsiteMaintenanceOfferInput,
  ) {
    updateOffer(activeOfferIndex, updater);
  }

  function updateIncident(field: WebsiteIncidentField, rawValue: string) {
    const parsed = parseNonNegativeNumber(
      rawValue,
      field === "redeployedSharePercent" ? 100 : undefined,
    );
    setContext((current) => ({
      ...current,
      incident: { ...current.incident, [field]: parsed.value },
    }));
    setIncidentErrors((current) => ({
      ...current,
      [field]: parsed.error ?? undefined,
    }));
    markChanged();
  }

  function updateGate(
    gateId: WebsiteMaintenanceGateId,
    patch: Partial<
      WebsiteMaintenanceOfferInput["gates"][WebsiteMaintenanceGateId]
    >,
  ) {
    updateActiveOffer((offer) => ({
      ...offer,
      gates: {
        ...offer.gates,
        [gateId]: { ...offer.gates[gateId], ...patch },
      },
    }));
  }

  function updateGateEvidence(
    gateId: WebsiteMaintenanceGateId,
    field: WebsiteMaintenanceGateEvidenceField,
    value: string,
  ) {
    updateGate(gateId, { [field]: value });
  }

  function updateTco(field: WebsiteMaintenanceTcoField, rawValue: string) {
    const parsed = parseNonNegativeNumber(rawValue);
    updateActiveOffer((offer) => ({
      ...offer,
      tco: { ...offer.tco, [field]: parsed.value },
    }));
    setTcoErrors((current) => {
      const next = [...current] as [TcoErrors, TcoErrors];
      next[activeOfferIndex] = {
        ...next[activeOfferIndex],
        [field]: parsed.error ?? undefined,
      };
      return next;
    });
  }

  function resetDossier() {
    setContext(createEmptyWebsiteMaintenanceDecisionContext());
    setActiveOfferIndex(0);
    setIncidentErrors({});
    setTcoErrors([{}, {}]);
    setCopyStatus("idle");
    setResetRequested(false);
  }

  async function copyReport() {
    const copied = await copyTextToClipboard(report);
    setCopyStatus(copied ? "copied" : "error");
  }

  return (
    <>
      <style>
        {
          "@media print { body *:not(#website-maintenance-decision-dossier):not(#website-maintenance-decision-dossier *):not(:has(#website-maintenance-decision-dossier)) { display: none !important; } #website-maintenance-decision-dossier { position: absolute !important; inset: 0 auto auto 0 !important; width: 100% !important; margin: 0 !important; overflow: visible !important; border: 0 !important; box-shadow: none !important; background: white !important; color: #18181b !important; } #website-maintenance-decision-dossier > :not(.website-maintenance-print-report) { display: none !important; } #website-maintenance-decision-dossier .website-maintenance-print-report { display: block !important; margin: 0 !important; background: white !important; color: #18181b !important; } #website-maintenance-decision-dossier button, #website-maintenance-decision-dossier input, #website-maintenance-decision-dossier select, #website-maintenance-decision-dossier textarea, #website-maintenance-decision-dossier [data-website-maintenance-interactive] { display: none !important; } }"
        }
      </style>
      <section
        id="website-maintenance-decision-dossier"
        className="not-prose my-10 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
        aria-labelledby="website-maintenance-decision-title"
        data-read-time-exclude="true"
      >
        <div className="border-b border-zinc-800 bg-zinc-950 px-4 py-6 text-white sm:px-6">
          <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-300">
            Outil local · données non envoyées · aucune offre choisie pour vous
          </p>
          <h3
            id="website-maintenance-decision-title"
            className="mb-0 mt-2 text-xl font-bold sm:text-2xl"
          >
            Comparateur de maintenance par la preuve
          </h3>
          <p className="mb-0 mt-2 max-w-3xl text-sm leading-relaxed text-zinc-300">
            Une comparaison exige 6 champs communs, 4 descriptifs par offre, 9
            preuves structurées et les 10 postes du coût complet à 12 et 36
            mois. Vide ne signifie jamais zéro.
          </p>
        </div>

        <pre
          className="website-maintenance-print-report hidden whitespace-pre-wrap p-6 font-sans text-[10px] leading-relaxed print:block"
          data-read-time-exclude="true"
        >
          {report}
        </pre>

        <div
          className="space-y-8 p-4 print:hidden sm:p-6"
          data-website-maintenance-interactive
          data-read-time-exclude="true"
        >
          <fieldset>
            <legend className="text-base font-bold text-zinc-950 dark:text-white">
              1. Écrire le besoin commun
            </legend>
            <p className="mb-4 mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              Sources du guide vérifiées le {WEBSITE_MAINTENANCE_SOURCE_DATE}.
              Date d’évaluation figée à l’ouverture :{" "}
              {evaluationDate ? (
                <>
                  <time dateTime={evaluationDate}>
                    {formatIsoDateForDisplay(evaluationDate)}
                  </time>{" "}
                  ({evaluationDate})
                </>
              ) : (
                "calculée après ouverture dans ce navigateur"
              )}
              . Datez séparément vos preuves et votre décision.
            </p>
            <label className="mb-4 block text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              Date de votre décision
              <input
                type="date"
                value={context.decisionDate}
                onChange={(event) =>
                  updateContextField("decisionDate", event.target.value)
                }
                className="mt-1 min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 text-sm font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white sm:max-w-xs"
              />
            </label>
            <div className="grid gap-4 md:grid-cols-2">
              {CONTEXT_FIELDS.map((field) => (
                <label
                  key={field.key}
                  className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300"
                >
                  {field.label}
                  <textarea
                    value={context[field.key]}
                    onChange={(event) =>
                      updateContextField(field.key, event.target.value)
                    }
                    placeholder={field.placeholder}
                    rows={3}
                    className="mt-1 min-h-24 w-full resize-y rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm font-normal leading-relaxed text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                  />
                  <span className="mt-1 block font-normal leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {field.help}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-base font-bold text-zinc-950 dark:text-white">
              2. Chiffrer un incident de référence
            </legend>
            <p className="mb-3 mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              Le résultat reste ND tant qu’une hypothèse manque. Il n’est pas
              ajouté au TCO : inscrivez seulement la réserve résiduelle propre à
              chaque offre, une seule fois.
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              {WEBSITE_INCIDENT_FIELDS.map((field) => {
                const error =
                  incidentErrors[field.key] ??
                  (field.key === "recoverableCompensation"
                    ? recoverableCompensationError
                    : undefined);
                const errorId = `website-incident-${field.key}-error`;
                return (
                  <label
                    key={field.key}
                    className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-xs font-semibold text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-300"
                  >
                    {field.label}
                    <span className="ml-1 font-normal text-zinc-500">
                      ({field.unit})
                    </span>
                    <input
                      type="number"
                      min="0"
                      max={
                        field.key === "redeployedSharePercent"
                          ? "100"
                          : undefined
                      }
                      step="0.01"
                      inputMode="decimal"
                      value={numberInputValue(context.incident[field.key])}
                      onChange={(event) =>
                        updateIncident(field.key, event.target.value)
                      }
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? errorId : undefined}
                      className="mt-1 min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 text-sm font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                    />
                    <span className="mt-1 block font-normal leading-relaxed text-zinc-500 dark:text-zinc-400">
                      {field.help}
                    </span>
                    {error ? (
                      <span
                        id={errorId}
                        role="alert"
                        className="mt-2 block font-semibold text-rose-700 dark:text-rose-300"
                      >
                        {error}
                      </span>
                    ) : null}
                  </label>
                );
              })}
            </div>
            <div
              className="mt-3 rounded-xl border border-violet-200 bg-violet-50 p-4 text-violet-950 dark:border-violet-900 dark:bg-violet-950/30 dark:text-violet-100"
              aria-live="polite"
            >
              <p className="m-0 text-sm font-bold">Impact de référence</p>
              <p className="mb-0 mt-1 text-xs leading-relaxed">
                {incident.kind === "unknown"
                  ? incident.grossBeforeCompensation !== undefined
                    ? `ND · Corrigez la compensation récupérable : elle dépasse le coût brut de ${formatPreciseEuro(
                        incident.grossBeforeCompensation,
                      )}.`
                    : `ND · ${incident.issues.length} hypothèse(s) à renseigner ou corriger.`
                  : `${Math.round(incident.total).toLocaleString("fr-FR")} € · marge perdue ${Math.round(incident.lostMargin).toLocaleString("fr-FR")} € · coûts directs ${Math.round(incident.directCosts).toLocaleString("fr-FR")} € · capacité interne ${Math.round(incident.internalCapacityCost).toLocaleString("fr-FR")} €.`}
              </p>
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-base font-bold text-zinc-950 dark:text-white">
              3. Ouvrir deux offres indépendantes
            </legend>
            <p className="mb-3 mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              La preuve de l’offre A ne valide jamais l’offre B. Un statut Pass
              ou Fail sans date, artefact ou référence, périmètre, résultat et
              responsable reste ND.
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {context.offers.map((offer, index) => {
                const offerIndex = index as 0 | 1;
                const copy = qualificationCopy(
                  offerResults[offerIndex].qualification,
                );
                return (
                  <button
                    key={offerIndex}
                    type="button"
                    aria-pressed={activeOfferIndex === offerIndex}
                    onClick={() => setActiveOfferIndex(offerIndex)}
                    className={`min-h-14 rounded-xl border p-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 ${
                      activeOfferIndex === offerIndex
                        ? "border-violet-500 bg-violet-50 dark:bg-violet-950/30"
                        : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
                    }`}
                  >
                    <span className="block text-sm font-bold text-zinc-950 dark:text-white">
                      {offer.name || `Offre ${offerIndex ? "B" : "A"}`}
                    </span>
                    <span className="mt-1 block text-xs text-zinc-500 dark:text-zinc-400">
                      {copy.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          <section
            aria-labelledby="active-maintenance-offer-title"
            className="space-y-7 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-5"
          >
            <div>
              <h4
                id="active-maintenance-offer-title"
                className="m-0 text-base font-bold text-zinc-950 dark:text-white"
              >
                Dossier de {activeOffer.name}
              </h4>
              <p className="mb-0 mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                Chaque champ vide reste non déterminé ; aucun défaut n’est
                transformé en zéro.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                Nom de l’offre
                <input
                  value={activeOffer.name}
                  onChange={(event) =>
                    updateActiveOffer((offer) => ({
                      ...offer,
                      name: event.target.value,
                    }))
                  }
                  className="mt-1 min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 text-sm font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                />
              </label>
              {OFFER_FIELDS.map((field) => (
                <label
                  key={field.key}
                  className={`block text-xs font-semibold text-zinc-700 dark:text-zinc-300 ${
                    field.key === "deliveryMode" ? "" : "md:col-span-2"
                  }`}
                >
                  {field.label}
                  <textarea
                    value={activeOffer[field.key]}
                    onChange={(event) =>
                      updateActiveOffer((offer) => ({
                        ...offer,
                        [field.key]: event.target.value,
                      }))
                    }
                    placeholder={field.placeholder}
                    rows={field.key === "deliveryMode" ? 2 : 3}
                    className="mt-1 min-h-20 w-full resize-y rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm font-normal leading-relaxed text-zinc-950 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                  />
                </label>
              ))}
            </div>

            <fieldset>
              <legend className="text-sm font-bold text-zinc-950 dark:text-white">
                Neuf portes Pass / Fail / ND
              </legend>
              <div className="mt-3 space-y-3">
                {WEBSITE_MAINTENANCE_GATE_IDS.map((gateId) => {
                  const gate = activeOffer.gates[gateId];
                  const dateContext = {
                    evaluationDate,
                    decisionDate: context.decisionDate,
                  };
                  const dateValidation =
                    validateWebsiteMaintenanceEvidenceDate(
                      gate.evidenceDate,
                      dateContext,
                    );
                  const evidenceDateError = gate.evidenceDate.trim()
                    ? evidenceDateErrorMessage(dateValidation, dateContext)
                    : undefined;
                  const evidenceDateErrorId = `website-maintenance-${activeOfferIndex}-${gateId}-evidence-date-error`;
                  const maximumEvidenceDate =
                    websiteMaintenanceEvidenceDateMaximum(dateContext);
                  const effectiveStatus =
                    effectiveWebsiteMaintenanceGateStatus(gate, dateContext);
                  const missingEvidence =
                    missingWebsiteMaintenanceGateEvidenceFields(
                      gate,
                      dateContext,
                    );
                  return (
                    <div
                      key={gateId}
                      className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-950 md:grid-cols-[0.7fr_1.3fr]"
                    >
                      <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                        {WEBSITE_MAINTENANCE_GATES[gateId].label}
                        <select
                          value={gate.status}
                          onChange={(event) =>
                            updateGate(gateId, {
                              status: event.target
                                .value as WebsiteMaintenanceGateStatus,
                            })
                          }
                          className="mt-1 min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 text-sm font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                        >
                          {STATUS_OPTIONS.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <span className="mt-1 block font-normal leading-relaxed text-zinc-500 dark:text-zinc-400">
                          {WEBSITE_MAINTENANCE_GATES[gateId].expected}
                        </span>
                        <span className="mt-2 block font-bold leading-relaxed text-zinc-700 dark:text-zinc-200">
                          État effectif :{" "}
                          {effectiveStatus === "unknown"
                            ? `ND — ${
                                missingEvidence.length > 0
                                  ? `${missingEvidence.length} élément(s) de preuve manquant(s) ou invalide(s)`
                                  : "choisissez une conclusion Pass ou Fail"
                              }`
                            : `${effectiveStatus.toUpperCase()} démontré`}
                        </span>
                      </label>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {WEBSITE_MAINTENANCE_GATE_EVIDENCE_FIELDS.map(
                          (field) => {
                            if (field.key === "evidenceDate") {
                              return (
                                <label
                                  key={field.key}
                                  className="text-xs font-semibold text-zinc-700 dark:text-zinc-300"
                                >
                                  {field.label}
                                  <input
                                    type="date"
                                    value={gate[field.key]}
                                    max={maximumEvidenceDate}
                                    onChange={(event) =>
                                      updateGateEvidence(
                                        gateId,
                                        field.key,
                                        event.target.value,
                                      )
                                    }
                                    aria-invalid={Boolean(evidenceDateError)}
                                    aria-describedby={
                                      evidenceDateError
                                        ? evidenceDateErrorId
                                        : undefined
                                    }
                                    className="mt-1 min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 text-sm font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                                  />
                                  {evidenceDateError ? (
                                    <span
                                      id={evidenceDateErrorId}
                                      role="alert"
                                      className="mt-2 block font-semibold leading-relaxed text-rose-700 dark:text-rose-300"
                                    >
                                      {evidenceDateError}
                                    </span>
                                  ) : null}
                                </label>
                              );
                            }

                            return (
                              <label
                                key={field.key}
                                className={`text-xs font-semibold text-zinc-700 dark:text-zinc-300 ${
                                  field.key === "result"
                                    ? "sm:col-span-2"
                                    : ""
                                }`}
                              >
                                {field.label}
                                {field.key === "result" ? (
                                  <textarea
                                    value={gate[field.key]}
                                    onChange={(event) =>
                                      updateGateEvidence(
                                        gateId,
                                        field.key,
                                        event.target.value,
                                      )
                                    }
                                    placeholder={
                                      EVIDENCE_PLACEHOLDERS[field.key]
                                    }
                                    rows={2}
                                    className="mt-1 min-h-20 w-full resize-y rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm font-normal leading-relaxed text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                                  />
                                ) : (
                                  <input
                                    value={gate[field.key]}
                                    onChange={(event) =>
                                      updateGateEvidence(
                                        gateId,
                                        field.key,
                                        event.target.value,
                                      )
                                    }
                                    placeholder={
                                      EVIDENCE_PLACEHOLDERS[field.key]
                                    }
                                    className="mt-1 min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 text-sm font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                                  />
                                )}
                              </label>
                            );
                          },
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-sm font-bold text-zinc-950 dark:text-white">
                TCO à 12 et 36 mois
              </legend>
              <p className="mb-3 mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                Le TCO est le coût complet. Les dix lignes sont obligatoires ;
                saisissez zéro seulement lorsqu’un poste est réellement nul et
                démontré.
              </p>
              <div className="grid gap-3 md:grid-cols-2">
                {WEBSITE_MAINTENANCE_TCO_FIELDS.map((field) => {
                  const error = tcoErrors[activeOfferIndex][field.key];
                  const errorId = `website-tco-${activeOfferIndex}-${field.key}-error`;
                  return (
                    <label
                      key={field.key}
                      className="rounded-xl border border-zinc-200 bg-white p-3 text-xs font-semibold text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
                    >
                      {field.label}
                      <span className="ml-1 font-normal text-zinc-500">
                        ({field.unit})
                      </span>
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        inputMode="decimal"
                        value={numberInputValue(activeOffer.tco[field.key])}
                        onChange={(event) =>
                          updateTco(field.key, event.target.value)
                        }
                        aria-invalid={Boolean(error)}
                        aria-describedby={error ? errorId : undefined}
                        className="mt-1 min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 text-sm font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                      />
                      <span className="mt-1 block font-normal leading-relaxed text-zinc-500 dark:text-zinc-400">
                        {field.help}
                      </span>
                      {error ? (
                        <span
                          id={errorId}
                          role="alert"
                          className="mt-2 block font-semibold text-rose-700 dark:text-rose-300"
                        >
                          {error}
                        </span>
                      ) : null}
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <div
              className={`rounded-xl border p-4 ${activeQualification.className}`}
              aria-live="polite"
            >
              <p className="m-0 text-sm font-bold">
                {activeQualification.title}
              </p>
              <p className="mb-0 mt-1 text-xs leading-relaxed">
                {activeQualification.detail}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {activeResult.tco.map((result) => (
                <div
                  key={result.horizonMonths}
                  className="rounded-xl border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-950"
                >
                  <p className="m-0 text-xs font-bold text-zinc-500">
                    {result.horizonMonths} mois
                  </p>
                  <p className="mb-0 mt-1 text-sm font-bold text-zinc-950 dark:text-white">
                    {formatTco(
                      result,
                      activeResult.qualification.status === "qualified",
                    )}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="website-maintenance-comparison-title">
            <h4
              id="website-maintenance-comparison-title"
              className="m-0 text-base font-bold text-zinc-950 dark:text-white"
            >
              4. Vérifier si la comparaison est autorisée
            </h4>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {context.offers.map((offer, index) => {
                const result = offerResults[index];
                const copy = qualificationCopy(result.qualification);
                return (
                  <div
                    key={index}
                    className={`rounded-xl border p-4 ${copy.className}`}
                  >
                    <p className="m-0 text-sm font-bold">
                      {offer.name || `Offre ${index ? "B" : "A"}`}
                    </p>
                    <p className="mb-0 mt-1 text-xs font-semibold">
                      {copy.title}
                    </p>
                    <p className="mb-0 mt-2 text-xs leading-relaxed">
                      12 mois :{" "}
                      {formatTco(
                        result.tco[0],
                        result.qualification.status === "qualified",
                      )}
                      <br />
                      36 mois :{" "}
                      {formatTco(
                        result.tco[1],
                        result.qualification.status === "qualified",
                      )}
                    </p>
                  </div>
                );
              })}
            </div>
            <p className="mb-0 mt-3 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              {comparisonAuthorized
                ? "Les deux offres sont qualifiées et leurs TCO sont connus : vous pouvez comparer ces coûts à périmètre égal. Le dossier ne fabrique aucun gagnant ; la décision finale appartient à vos responsables."
                : "Comparaison bloquée : les deux offres doivent être qualifiées et leurs TCO connus. Ne classez pas les sous-totaux non comparables ; une offre incomplète n’est pas « moins chère »."}
            </p>
          </section>

          {resetRequested ? (
            <div
              role="alert"
              aria-live="assertive"
              aria-labelledby="website-maintenance-reset-title"
              aria-describedby="website-maintenance-reset-description"
              className="rounded-xl border border-rose-300 bg-rose-50 p-4 text-rose-950 dark:border-rose-800 dark:bg-rose-950/30 dark:text-rose-100"
            >
              <p
                id="website-maintenance-reset-title"
                className="m-0 text-sm font-bold"
              >
                Effacer le besoin et les deux offres ?
              </p>
              <p
                id="website-maintenance-reset-description"
                className="mb-0 mt-1 text-xs leading-relaxed"
              >
                Les hypothèses, preuves et coûts seront supprimés dans cet
                onglet. Cette action ne peut pas être annulée.
              </p>
              <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                <button
                  type="button"
                  onClick={resetDossier}
                  className="min-h-11 rounded-lg bg-rose-700 px-4 py-2 text-xs font-bold text-white hover:bg-rose-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2"
                >
                  Effacer définitivement
                </button>
                <button
                  type="button"
                  onClick={() => setResetRequested(false)}
                  className="min-h-11 rounded-lg border border-rose-300 bg-white px-4 py-2 text-xs font-bold text-rose-900 hover:bg-rose-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2 dark:border-rose-700 dark:bg-zinc-950 dark:text-rose-100"
                >
                  Annuler et conserver
                </button>
              </div>
            </div>
          ) : null}

          <div className="flex flex-col gap-2 border-t border-zinc-200 pt-5 dark:border-zinc-800 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={copyReport}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-violet-700 px-4 py-2 text-sm font-bold text-white hover:bg-violet-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2"
            >
              <ClipboardCheck className="size-4" aria-hidden="true" />
              Copier le dossier
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-zinc-900 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900"
            >
              <Printer className="size-4" aria-hidden="true" />
              Imprimer le dossier
            </button>
            <button
              type="button"
              onClick={() => setResetRequested(true)}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-zinc-900 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900"
            >
              <RotateCcw className="size-4" aria-hidden="true" />
              Réinitialiser
            </button>
          </div>

          <p
            className="m-0 text-xs font-semibold text-zinc-600 dark:text-zinc-300"
            aria-live="polite"
          >
            {copyStatus === "copied"
              ? "Dossier copié. Vous pouvez le transmettre à votre équipe ou aux deux prestataires."
              : copyStatus === "error"
                ? "La copie a échoué dans ce navigateur. Utilisez le bouton « Imprimer le dossier »."
                : "Vos saisies restent dans cet onglet et ne sont pas envoyées à Hagnéré Code."}
          </p>
        </div>
      </section>
    </>
  );
}
