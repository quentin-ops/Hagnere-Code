"use client";

import { useMemo, useState } from "react";
import { ClipboardCheck, Download, RotateCcw } from "lucide-react";
import { copyTextToClipboard } from "@/lib/clipboard";
import {
  SLA_REQUIRED_PROOFS,
  buildSlaDecisionCsv,
  buildSlaFinalDecisionNote,
  compareCoverageOptions,
  computeAvailability,
  computeIncidentCost,
  computeIncidentTimeline,
  computeRpoImpact,
  createFictitiousSlaDecisionDossier,
  evaluateDecisionGate,
  type NullableNumber,
  type SlaCoverageOption,
  type SlaDecisionDossier,
  type SlaIncidentCostInput,
  type SlaProofId,
  type SlaProofStatus,
  type SlaRpoImpactInput,
  type SlaTimelineField,
} from "@/lib/sla-maintenance-decision";

const INPUT =
  "mt-1.5 min-h-11 w-full min-w-0 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-left text-sm text-zinc-950 outline-none focus-visible:border-violet-600 focus-visible:ring-2 focus-visible:ring-violet-300 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white";
const LABEL =
  "block min-w-0 text-left text-sm font-semibold text-zinc-800 dark:text-zinc-200";
const HELP =
  "mt-1 block text-left text-xs font-normal leading-relaxed text-zinc-500 dark:text-zinc-400";
const BUTTON =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-45";

const money = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 2,
});

const PROOF_LABELS: Record<SlaProofId, string> = {
  "service-scope": "Service, parcours et exclusions",
  "coverage-window": "Plage, fuseau et astreinte",
  measurement: "Mesure utilisateur et source de données",
  "incident-clock": "Sept horloges et règle de pause",
  "restoration-test": "Restauration chronométrée et contrôlée",
  dependencies: "Dépendances, propriétaires et mode dégradé",
  communications: "Escalade, information et post-mortem",
  "exit-eol": "Correctifs, fin de support et réversibilité",
};

const TIMELINE_LABELS: Record<SlaTimelineField, string> = {
  observedAt: "Blocage observé",
  acknowledgedAt: "Accusé humain",
  interventionAt: "Intervention commencée",
  workaroundAt: "Contournement utilisable",
  restoredAt: "Service métier rétabli",
  dataVerifiedAt: "Données vérifiées",
  closedAt: "Incident clôturé",
};

const INCIDENT_FIELDS: Array<{
  key: keyof SlaIncidentCostInput;
  label: string;
  unit: string;
  help?: string;
}> = [
  { key: "outageHours", label: "Durée d’arrêt métier", unit: "h" },
  { key: "affectedPeople", label: "Personnes réellement affectées", unit: "" },
  { key: "loadedHourlyCost", label: "Coût horaire chargé", unit: "€/h" },
  {
    key: "productiveSharePercent",
    label: "Part du temps réellement perdue",
    unit: "%",
  },
  {
    key: "reentryAndRecoveryCost",
    label: "Ressaisie et rattrapage distincts",
    unit: "€",
    help: "Seulement les tâches non déjà incluses dans le temps interne ou la reprise externe.",
  },
  {
    key: "lostContributionMarginPerHour",
    label: "Marge contributive non reportable",
    unit: "€/h",
    help: "Ne saisissez pas le chiffre d’affaires brut ni une vente simplement décalée.",
  },
  {
    key: "externalRecoveryCosts",
    label: "Reprise externe distincte",
    unit: "€",
  },
  {
    key: "serviceCredit",
    label: "Crédit de service applicable",
    unit: "€",
    help: "Il reste séparé du coût brut : ce n’est pas une indemnisation automatique.",
  },
];

const RPO_FIELDS: Array<{
  key: keyof SlaRpoImpactInput;
  label: string;
  unit: string;
}> = [
  { key: "operationsPerHour", label: "Opérations enregistrées", unit: "/h" },
  { key: "rpoHours", label: "Point de reprise maximal", unit: "h" },
  {
    key: "reentryMinutesPerOperation",
    label: "Ressaisie moyenne",
    unit: "min/opération",
  },
  { key: "loadedHourlyCost", label: "Coût de ressaisie", unit: "€/h" },
];

function numberValue(value: NullableNumber): number | "" {
  return value === null ? "" : value;
}

function parseNumber(value: string): NullableNumber {
  if (value.trim() === "") return null;
  const parsed = Number(value.replace(",", "."));
  return Number.isFinite(parsed) ? parsed : null;
}

function downloadText(filename: string, text: string, type: string) {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function Metric({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail?: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-4 text-left dark:border-zinc-800 dark:bg-zinc-950">
      <p className="m-0 text-xs font-bold uppercase tracking-[0.11em] text-zinc-500 dark:text-zinc-400">
        {label}
      </p>
      <p className="mb-0 mt-2 text-xl font-bold tabular-nums text-zinc-950 dark:text-white">
        {value}
      </p>
      {detail && (
        <p className="mb-0 mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
          {detail}
        </p>
      )}
    </div>
  );
}

export function SlaMaintenanceDecisionDossier() {
  const [dossier, setDossier] = useState<SlaDecisionDossier>(() =>
    createFictitiousSlaDecisionDossier(),
  );
  const [message, setMessage] = useState("");

  const availability = useMemo(
    () => computeAvailability(dossier.availability),
    [dossier.availability],
  );
  const timeline = useMemo(
    () => computeIncidentTimeline(dossier.timeline),
    [dossier.timeline],
  );
  const incident = useMemo(
    () => computeIncidentCost(dossier.incidentCost),
    [dossier.incidentCost],
  );
  const rpo = useMemo(() => computeRpoImpact(dossier.rpo), [dossier.rpo]);
  const coverages = useMemo(
    () => compareCoverageOptions(dossier.coverages),
    [dossier.coverages],
  );
  const gate = useMemo(() => evaluateDecisionGate(dossier), [dossier]);

  const updateCoverage = (
    index: number,
    field: keyof SlaCoverageOption,
    value: string,
  ) => {
    setDossier((current) => ({
      ...current,
      coverages: current.coverages.map((coverage, coverageIndex) =>
        coverageIndex === index
          ? {
              ...coverage,
              [field]:
                field === "name" ||
                field === "residualEstimateSource" ||
                field === "residualEstimateDate"
                  ? value
                  : parseNumber(value),
            }
          : coverage,
      ),
    }));
  };

  const copyFinalNote = async () => {
    if (!gate.finalExportAllowed) {
      setMessage("La note finale reste verrouillée tant que le dossier n’est pas prouvé.");
      return;
    }
    const copied = await copyTextToClipboard(buildSlaFinalDecisionNote(dossier));
    setMessage(copied ? "Note finale copiée." : "Copie impossible.");
  };

  return (
    <section
      id="atelier-sla"
      data-read-time-exclude="true"
      className="not-prose my-10 scroll-mt-24 overflow-hidden rounded-2xl border border-violet-200 bg-[#f7f4ff] text-left shadow-sm dark:border-violet-900 dark:bg-violet-950/20"
      aria-labelledby="atelier-sla-title"
    >
      <div className="border-b border-violet-200 px-4 py-5 dark:border-violet-900 sm:px-6">
        <p className="m-0 text-xs font-bold uppercase tracking-[0.14em] text-violet-700 dark:text-violet-300">
          Outil local et déterministe · aucun appel réseau
        </p>
        <h2
          id="atelier-sla-title"
          className="mb-0 mt-2 text-2xl font-bold text-zinc-950 dark:text-white"
        >
          Atelier SLA — du contrat à la preuve
        </h2>
        <p className="mb-0 mt-3 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          Convertissez un pourcentage en minutes, séparez les sept horloges,
          chiffrez l’incident et la perte de données, puis comparez trois
          couvertures sur douze mois. Les valeurs sont conservées uniquement
          dans cette page et disparaissent au rechargement.
        </p>
      </div>

      <div
        className={`border-b px-4 py-4 text-sm sm:px-6 ${
          dossier.isFictitiousExample
            ? "border-amber-300 bg-amber-50 text-amber-900 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-200"
            : "border-emerald-300 bg-emerald-50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-200"
        }`}
        role="status"
      >
        <strong>
          {dossier.isFictitiousExample
            ? "EXEMPLE FICTIF — jamais une moyenne de marché."
            : "DONNÉES MARQUÉES RÉELLES — les preuves restent à vérifier."}
        </strong>{" "}
        Le bouton final ne s’ouvre ni sur un exemple, ni sur de simples
        déclarations.
      </div>

      <div className="space-y-8 p-4 sm:p-6">
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            className={`${BUTTON} bg-zinc-950 text-white dark:bg-white dark:text-zinc-950`}
            onClick={() =>
              setDossier((current) => ({
                ...current,
                isFictitiousExample: !current.isFictitiousExample,
              }))
            }
          >
            <ClipboardCheck className="size-4" aria-hidden="true" />
            {dossier.isFictitiousExample
              ? "Confirmer mes données réelles"
              : "Repasser en exemple fictif"}
          </button>
          <button
            type="button"
            className={`${BUTTON} border border-zinc-300 bg-white text-zinc-800 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100`}
            onClick={() => {
              setDossier(createFictitiousSlaDecisionDossier());
              setMessage("Exemple fictif réinitialisé.");
            }}
          >
            <RotateCcw className="size-4" aria-hidden="true" />
            Réinitialiser
          </button>
        </div>

        <fieldset className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950 sm:p-5">
          <legend className="px-2 text-base font-bold text-zinc-950 dark:text-white">
            1. Service et autorité
          </legend>
          <div className="mt-2 grid gap-4 md:grid-cols-2">
            {[
              ["serviceName", "Service mesuré"],
              ["criticalJourney", "Parcours métier critique"],
              ["coverageWindow", "Plage et fuseau"],
              ["measurementOwner", "Responsable de la mesure"],
            ].map(([field, label]) => (
              <label key={field} className={LABEL}>
                {label}
                <input
                  className={INPUT}
                  value={
                    dossier[
                      field as
                        | "serviceName"
                        | "criticalJourney"
                        | "coverageWindow"
                        | "measurementOwner"
                    ]
                  }
                  onChange={(event) =>
                    setDossier((current) => ({
                      ...current,
                      [field]: event.target.value,
                    }))
                  }
                />
              </label>
            ))}
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <label className="flex min-h-11 items-start gap-3 rounded-lg border border-zinc-200 p-3 text-left text-sm dark:border-zinc-800">
              <input
                type="checkbox"
                className="mt-0.5 size-5"
                checked={dossier.authorityConfirmed}
                onChange={(event) =>
                  setDossier((current) => ({
                    ...current,
                    authorityConfirmed: event.target.checked,
                  }))
                }
              />
              <span>
                <strong className="block">Autorité confirmée</strong>
                <span className={HELP}>Mandat et droit de décider documentés.</span>
              </span>
            </label>
            <label className="flex min-h-11 items-start gap-3 rounded-lg border border-zinc-200 p-3 text-left text-sm dark:border-zinc-800">
              <input
                type="checkbox"
                className="mt-0.5 size-5"
                checked={dossier.emergencyOrCompromise}
                onChange={(event) =>
                  setDossier((current) => ({
                    ...current,
                    emergencyOrCompromise: event.target.checked,
                  }))
                }
              />
              <span>
                <strong className="block">Incident ou compromission active</strong>
                <span className={HELP}>Déclenche un STOP prioritaire.</span>
              </span>
            </label>
          </div>
        </fieldset>

        <fieldset className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950 sm:p-5">
          <legend className="px-2 text-base font-bold text-zinc-950 dark:text-white">
            2. Disponibilité traduite en temps
          </legend>
          <div className="mt-2 grid gap-4 sm:grid-cols-3">
            {[
              ["targetPercent", "Cible", "%"],
              ["windowDays", "Fenêtre", "jours"],
              ["coveredHoursPerDay", "Couverture quotidienne", "h/jour"],
            ].map(([field, label, unit]) => (
              <label key={field} className={LABEL}>
                {label}
                <span className={HELP}>{unit}</span>
                <input
                  type="number"
                  inputMode="decimal"
                  min={field === "windowDays" ? "1" : "0.0001"}
                  max={
                    field === "targetPercent"
                      ? "99.9999"
                      : field === "windowDays"
                        ? "366"
                        : "24"
                  }
                  step={field === "windowDays" ? "1" : "0.0001"}
                  className={INPUT}
                  value={numberValue(
                    dossier.availability[
                      field as keyof typeof dossier.availability
                    ],
                  )}
                  onChange={(event) =>
                    setDossier((current) => ({
                      ...current,
                      availability: {
                        ...current.availability,
                        [field]: parseNumber(event.target.value),
                      },
                    }))
                  }
                />
              </label>
            ))}
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Metric
              label="Temps couvert"
              value={
                availability.kind === "known"
                  ? `${availability.coveredMinutes.toLocaleString("fr-FR")} min`
                  : "ND"
              }
            />
            <Metric
              label="Arrêt total admis"
              value={
                availability.kind === "known"
                  ? `${availability.allowedDowntimeMinutes.toLocaleString(
                      "fr-FR",
                      { maximumFractionDigits: 2 },
                    )} min`
                  : "ND"
              }
              detail="Avant exclusions éventuelles ; ne prouve ni un parcours ni une réparation."
            />
          </div>
        </fieldset>

        <details className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950 sm:p-5">
          <summary className="min-h-11 cursor-pointer py-2 text-left font-bold text-zinc-950 dark:text-white">
            3. Sept horloges — instants ISO avec fuseau
          </summary>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            Exemple : 2026-07-28T09:10:00+02:00. Un horaire sans décalage
            explicite reste invalide.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {(Object.keys(TIMELINE_LABELS) as SlaTimelineField[]).map(
              (field) => (
                <label key={field} className={LABEL}>
                  {TIMELINE_LABELS[field]}
                  <input
                    className={`${INPUT} font-mono text-xs`}
                    value={dossier.timeline[field]}
                    onChange={(event) =>
                      setDossier((current) => ({
                        ...current,
                        timeline: {
                          ...current.timeline,
                          [field]: event.target.value,
                        },
                      }))
                    }
                  />
                </label>
              ),
            )}
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {timeline.kind === "known" ? (
              Object.entries(timeline.minutes).map(([label, value]) => (
                <Metric key={label} label={label} value={`${value} min`} />
              ))
            ) : (
              <Metric label="Chronologie" value="ND" detail="Instants manquants ou non chronologiques." />
            )}
          </div>
        </details>

        <fieldset className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950 sm:p-5">
          <legend className="px-2 text-base font-bold text-zinc-950 dark:text-white">
            4. Coût d’un incident — chaque poste une seule fois
          </legend>
          <div className="mt-2 grid gap-4 md:grid-cols-2">
            {INCIDENT_FIELDS.map((field) => (
              <label key={field.key} className={LABEL}>
                {field.label}
                <span className={HELP}>
                  {field.unit}
                  {field.help ? ` · ${field.help}` : ""}
                </span>
                <input
                  type="number"
                  inputMode="decimal"
                  min="0"
                  max={
                    field.key === "outageHours"
                      ? "1000000"
                      : field.key === "affectedPeople"
                        ? "100000000"
                        : field.key === "productiveSharePercent"
                          ? "100"
                          : "10000000000"
                  }
                  step={field.key === "affectedPeople" ? "1" : "0.0001"}
                  className={INPUT}
                  value={numberValue(dossier.incidentCost[field.key])}
                  onChange={(event) =>
                    setDossier((current) => ({
                      ...current,
                      incidentCost: {
                        ...current.incidentCost,
                        [field.key]: parseNumber(event.target.value),
                      },
                    }))
                  }
                />
              </label>
            ))}
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Metric
              label="Capacité interne"
              value={
                incident.kind === "known"
                  ? money.format(incident.internalCapacity)
                  : "ND"
              }
            />
            <Metric
              label="Coût brut"
              value={
                incident.kind === "known"
                  ? money.format(incident.grossIncidentCost)
                  : "ND"
              }
            />
            <Metric
              label="Crédit séparé"
              value={
                incident.kind === "known"
                  ? money.format(incident.serviceCredit)
                  : "ND"
              }
            />
            <Metric
              label="Exposition nette"
              value={
                incident.kind === "known"
                  ? money.format(incident.netEconomicExposure)
                  : "ND"
              }
            />
          </div>
        </fieldset>

        <fieldset className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950 sm:p-5">
          <legend className="px-2 text-base font-bold text-zinc-950 dark:text-white">
            5. RPO traduit en opérations et ressaisie
          </legend>
          <div className="mt-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {RPO_FIELDS.map((field) => (
              <label key={field.key} className={LABEL}>
                {field.label}
                <span className={HELP}>{field.unit}</span>
                <input
                  type="number"
                  inputMode="decimal"
                  min="0"
                  max={
                    field.key === "operationsPerHour"
                      ? "100000000"
                      : field.key === "rpoHours"
                        ? "1000000"
                        : field.key === "reentryMinutesPerOperation"
                          ? "1440"
                          : "10000000000"
                  }
                  step="0.0001"
                  className={INPUT}
                  value={numberValue(dossier.rpo[field.key])}
                  onChange={(event) =>
                    setDossier((current) => ({
                      ...current,
                      rpo: {
                        ...current.rpo,
                        [field.key]: parseNumber(event.target.value),
                      },
                    }))
                  }
                />
              </label>
            ))}
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <Metric
              label="Opérations à risque"
              value={rpo.kind === "known" ? String(rpo.operationsAtRisk) : "ND"}
            />
            <Metric
              label="Ressaisie"
              value={rpo.kind === "known" ? `${rpo.reentryHours} h` : "ND"}
            />
            <Metric
              label="Coût de ressaisie"
              value={rpo.kind === "known" ? money.format(rpo.reentryCost) : "ND"}
            />
          </div>
        </fieldset>

        <details className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950 sm:p-5">
          <summary className="min-h-11 cursor-pointer py-2 text-left font-bold text-zinc-950 dark:text-white">
            6. Comparer trois couvertures sur douze mois
          </summary>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            L’exposition résiduelle exige une estimation, une source et une
            date. Laissez une case vide si elle n’est pas défendable : le total
            devient ND au lieu de supposer zéro.
          </p>
          <div className="mt-4 grid gap-4 xl:grid-cols-3">
            {dossier.coverages.map((coverage, index) => {
              const result = coverages[index];
              return (
                <section
                  key={coverage.id}
                  className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-left dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <label className={LABEL}>
                    Nom
                    <input
                      className={INPUT}
                      value={coverage.name}
                      onChange={(event) =>
                        updateCoverage(index, "name", event.target.value)
                      }
                    />
                  </label>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                    {[
                      ["oneOffCost", "Transition ponctuelle", "€"],
                      ["monthlyFee", "Forfait mensuel", "€/mois"],
                      ["internalHoursPerMonth", "Temps interne", "h/mois"],
                      ["loadedHourlyCost", "Coût interne", "€/h"],
                      ["annualExerciseCost", "Exercices annuels", "€/an"],
                      ["residualIncidentsPerYear", "Incidents résiduels", "/an"],
                      ["residualCostPerIncident", "Coût résiduel", "€/incident"],
                    ].map(([field, label, unit]) => (
                      <label key={field} className={LABEL}>
                        {label}
                        <span className={HELP}>{unit}</span>
                        <input
                          type="number"
                          inputMode="decimal"
                          min="0"
                          max="10000000000"
                          step="0.0001"
                          className={INPUT}
                          value={numberValue(
                            coverage[field as keyof SlaCoverageOption] as NullableNumber,
                          )}
                          onChange={(event) =>
                            updateCoverage(
                              index,
                              field as keyof SlaCoverageOption,
                              event.target.value,
                            )
                          }
                        />
                      </label>
                    ))}
                    <label className={LABEL}>
                      Source de l’estimation résiduelle
                      <input
                        className={INPUT}
                        value={coverage.residualEstimateSource}
                        onChange={(event) =>
                          updateCoverage(
                            index,
                            "residualEstimateSource",
                            event.target.value,
                          )
                        }
                      />
                    </label>
                    <label className={LABEL}>
                      Date de l’estimation
                      <input
                        type="date"
                        className={INPUT}
                        value={coverage.residualEstimateDate}
                        onChange={(event) =>
                          updateCoverage(
                            index,
                            "residualEstimateDate",
                            event.target.value,
                          )
                        }
                      />
                    </label>
                  </div>
                  <p className="mb-0 mt-4 rounded-lg bg-white p-3 text-sm font-bold tabular-nums text-zinc-950 dark:bg-zinc-950 dark:text-white">
                    Total annuel :{" "}
                    {result?.kind === "known"
                      ? money.format(result.annualTotal)
                      : "ND"}
                  </p>
                </section>
              );
            })}
          </div>
        </details>

        <fieldset className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950 sm:p-5">
          <legend className="px-2 text-base font-bold text-zinc-950 dark:text-white">
            7. Huit preuves avant décision
          </legend>
          <div className="mt-2 grid gap-3 md:grid-cols-2">
            {SLA_REQUIRED_PROOFS.map((proof) => (
              <section
                key={proof}
                className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-left dark:border-zinc-800 dark:bg-zinc-900"
              >
                <label className={LABEL}>
                  {PROOF_LABELS[proof]}
                  <select
                    className={INPUT}
                    value={dossier.proofs[proof].status}
                    onChange={(event) =>
                      setDossier((current) => ({
                        ...current,
                        proofs: {
                          ...current.proofs,
                          [proof]: {
                            ...current.proofs[proof],
                            status: event.target.value as SlaProofStatus,
                          },
                        },
                      }))
                    }
                  >
                    <option value="unknown">ND — non vérifié</option>
                    <option value="declared">Déclaré — pas une preuve</option>
                    <option value="verified">Vérifié sur artefact</option>
                    <option value="failed">Échec observé</option>
                  </select>
                </label>
                <label className={`${LABEL} mt-3`}>
                  Référence de l’artefact
                  <input
                    className={INPUT}
                    value={dossier.proofs[proof].evidenceRef}
                    onChange={(event) =>
                      setDossier((current) => ({
                        ...current,
                        proofs: {
                          ...current.proofs,
                          [proof]: {
                            ...current.proofs[proof],
                            evidenceRef: event.target.value,
                          },
                        },
                      }))
                    }
                  />
                </label>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <label className={LABEL}>
                    Date de vérification
                    <input
                      type="date"
                      max={dossier.asOfDate}
                      className={INPUT}
                      value={dossier.proofs[proof].checkedOn}
                      onChange={(event) =>
                        setDossier((current) => ({
                          ...current,
                          proofs: {
                            ...current.proofs,
                            [proof]: {
                              ...current.proofs[proof],
                              checkedOn: event.target.value,
                            },
                          },
                        }))
                      }
                    />
                  </label>
                  <label className={LABEL}>
                    Responsable de la vérification
                    <input
                      className={INPUT}
                      value={dossier.proofs[proof].owner}
                      onChange={(event) =>
                        setDossier((current) => ({
                          ...current,
                          proofs: {
                            ...current.proofs,
                            [proof]: {
                              ...current.proofs[proof],
                              owner: event.target.value,
                            },
                          },
                        }))
                      }
                    />
                  </label>
                </div>
              </section>
            ))}
          </div>
        </fieldset>

        <div
          data-decision-stage={gate.state}
          className="rounded-xl border border-zinc-300 bg-zinc-950 p-5 text-left text-white dark:border-zinc-700"
          role="status"
        >
          <p className="m-0 text-xs font-bold uppercase tracking-[0.14em] text-violet-300">
            Gate de décision
          </p>
          <p className="mb-0 mt-2 text-2xl font-bold">{gate.state}</p>
          <ul className="mb-0 mt-3 space-y-1 pl-5 text-sm leading-relaxed text-zinc-300">
            {gate.reasons.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            className={`${BUTTON} border border-zinc-300 bg-white text-zinc-800 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100`}
            onClick={() => {
              downloadText(
                "atelier-sla-brouillon.csv",
                buildSlaDecisionCsv(dossier),
                "text/csv;charset=utf-8",
              );
              setMessage("CSV de travail téléchargé.");
            }}
          >
            <Download className="size-4" aria-hidden="true" />
            Télécharger le CSV de travail
          </button>
          <button
            type="button"
            className={`${BUTTON} bg-violet-700 text-white`}
            disabled={!gate.finalExportAllowed}
            onClick={copyFinalNote}
          >
            <ClipboardCheck className="size-4" aria-hidden="true" />
            Copier la note de décision finale
          </button>
        </div>
        <p className="m-0 min-h-5 text-sm text-zinc-600 dark:text-zinc-300" aria-live="polite">
          {message ||
            (gate.finalExportAllowed
              ? "La note est techniquement exportable ; l’arbitrage reste humain."
              : "La note finale reste verrouillée. Le CSV demeure un brouillon explicite.")}
        </p>
      </div>
    </section>
  );
}
