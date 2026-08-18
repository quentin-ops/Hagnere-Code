"use client";

import { useId, useState } from "react";
import {
  AUTOMATION_HARD_STOP_KEYS,
  AUTOMATION_READINESS_KEYS,
  PROCESS_AUTOMATION_EXAMPLE,
  PROCESS_AUTOMATION_MAX_INPUT,
  buildProcessAutomationSummary,
  cloneProcessAutomationCandidate,
  createEmptyProcessAutomationCandidate,
  evaluateProcessAutomationCandidate,
  type AutomationDecisionVerdict,
  type AutomationHardStopKey,
  type AutomationReadinessKey,
  type AutomationReadinessLevel,
  type ProcessAutomationCandidate,
} from "@/lib/process-automation-decision";

const READINESS_FIELDS: Record<
  AutomationReadinessKey,
  { label: string; help: string }
> = {
  boundary: {
    label: "Début, fin et résultat",
    help: "Le déclencheur, le résultat attendu et les cas hors périmètre sont écrits.",
  },
  baseline: {
    label: "Mesure de départ représentative",
    help: "Le volume, le temps actif, les corrections et l’attente couvrent un vrai cycle.",
  },
  rules: {
    label: "Règles suffisamment stables",
    help: "Les règles ne dépendent pas, à chaque dossier, d’une négociation implicite.",
  },
  inputs: {
    label: "Source des données fiable",
    help: "Chaque information a une source désignée, avec les champs manquants repérables.",
  },
  exceptions: {
    label: "Exceptions connues et orientées",
    help: "Les cas anormaux rejoignent une file, un responsable et un délai de traitement.",
  },
  verification: {
    label: "Résultat vérifiable et réversible",
    help: "Une erreur se voit, se corrige et ne déclenche pas silencieusement une seconde action.",
  },
  ownership: {
    label: "Responsable et mode manuel",
    help: "Une personne porte la règle, reçoit les alertes et sait reprendre le travail.",
  },
};

const HARD_STOP_FIELDS: Record<
  AutomationHardStopKey,
  { label: string; consequence: string }
> = {
  undefinedOutcome: {
    label: "Personne ne peut définir un résultat correct.",
    consequence: "Clarifier le processus avant tout choix d’outil.",
  },
  untrustedSource: {
    label: "Les données d’entrée n’ont aucune source fiable.",
    consequence: "Nettoyer et attribuer les données avant d’automatiser.",
  },
  irreversibleAction: {
    label:
      "L’action est difficile à annuler ou affecte fortement une personne, sans validation humaine effective.",
    consequence:
      "Conserver la décision humaine et limiter l’outil à la préparation.",
  },
  noOwnerOrFallback: {
    label:
      "Personne ne surveillera les échecs et aucun traitement manuel n’est prévu.",
    consequence: "Nommer le responsable et écrire le mode dégradé avant pilote.",
  },
};

const VERDICT_COPY: Record<
  Exclude<AutomationDecisionVerdict, "invalid">,
  { title: string; text: string; classes: string }
> = {
  stop: {
    title: "STOP sur l’automatisation complète",
    text: "Un motif non compensable est déclaré. Gardez le flux manuel ou assisté tant que la condition n’est pas fermée ; davantage de volume ou de temps perdu ne rend pas le risque acceptable.",
    classes:
      "border-red-300 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950/30 dark:text-red-100",
  },
  observe: {
    title: "Observer ou clarifier avant de choisir l’outil",
    text: "La préparation est encore partielle. Complétez les éléments inconnus sur une période représentative, puis réévaluez le même candidat. Cette décision peut parfaitement conduire à supprimer une étape.",
    classes:
      "border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-100",
  },
  "bounded-pilot": {
    title: "Candidat à un pilote borné, pas à un déploiement général",
    text: "Les prérequis de tri sont suffisamment documentés pour concevoir un petit essai avec de vrais cas, une file d’exceptions, un retour manuel et une condition d’arrêt. Le pilote doit encore prouver la qualité et l’économie.",
    classes:
      "border-emerald-300 bg-emerald-50 text-emerald-950 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-100",
  },
};

const READINESS_OPTIONS: Array<{
  value: AutomationReadinessLevel;
  label: string;
}> = [
  { value: "unknown", label: "Inconnu" },
  { value: "partial", label: "Partiel" },
  { value: "documented", label: "Documenté" },
];

const decimal = new Intl.NumberFormat("fr-FR", {
  maximumFractionDigits: 2,
});

function parseNumber(raw: string) {
  if (raw.trim() === "") {
    return Number.NaN;
  }
  const value = Number.parseFloat(raw.replace(",", "."));
  return Number.isFinite(value) ? value : Number.NaN;
}

function displayNumber(value: number | null) {
  return value === null ? "—" : decimal.format(value);
}

export function ProcessAutomationDecisionWorksheet() {
  const instanceId = useId().replaceAll(":", "");
  const [candidate, setCandidate] = useState<ProcessAutomationCandidate>(() =>
    cloneProcessAutomationCandidate(PROCESS_AUTOMATION_EXAMPLE),
  );
  const [copyStatus, setCopyStatus] = useState<
    "idle" | "copied" | "copy-error"
  >("idle");
  const decision = evaluateProcessAutomationCandidate(candidate);
  const verdict =
    decision.verdict === "invalid" ? null : VERDICT_COPY[decision.verdict];
  const summary = buildProcessAutomationSummary(candidate, decision);
  const documentedReadiness =
    AUTOMATION_READINESS_KEYS.length -
    decision.unknownReadiness.length -
    decision.partialReadiness.length;

  function updateNumber(
    key:
      | "casesPerMonth"
      | "activeMinutesPerCase"
      | "correctionHoursPerMonth",
    raw: string,
  ) {
    setCandidate((current) => ({ ...current, [key]: parseNumber(raw) }));
    setCopyStatus("idle");
  }

  function updateReadiness(
    key: AutomationReadinessKey,
    value: AutomationReadinessLevel,
  ) {
    setCandidate((current) => ({
      ...current,
      readiness: { ...current.readiness, [key]: value },
    }));
    setCopyStatus("idle");
  }

  function updateHardStop(key: AutomationHardStopKey, checked: boolean) {
    setCandidate((current) => ({
      ...current,
      hardStops: { ...current.hardStops, [key]: checked },
    }));
    setCopyStatus("idle");
  }

  async function copySummary() {
    try {
      await navigator.clipboard.writeText(summary);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("copy-error");
    }
  }

  function restoreExample() {
    setCandidate(cloneProcessAutomationCandidate(PROCESS_AUTOMATION_EXAMPLE));
    setCopyStatus("idle");
  }

  function startBlankCandidate() {
    setCandidate(createEmptyProcessAutomationCandidate());
    setCopyStatus("idle");
  }

  return (
    <section
      className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
      aria-labelledby={`${instanceId}-title`}
      data-read-time-exclude="true"
    >
      <div className="border-b border-zinc-800 bg-zinc-950 px-4 py-5 text-white sm:px-6">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-300">
          Diagnostic local · aucune donnée envoyée
        </p>
        <h3
          id={`${instanceId}-title`}
          className="m-0 text-lg font-bold sm:text-xl"
        >
          Votre premier candidat est-il prêt pour un pilote ?
        </h3>
        <p className="mb-0 mt-2 max-w-3xl text-sm leading-relaxed text-zinc-300">
          Évaluez un seul processus, puis recommencez avec les autres. Les
          motifs d’arrêt restent prioritaires : les preuves de préparation ne
          peuvent jamais les compenser.
        </p>
      </div>

      <div className="space-y-8 p-4 sm:p-6">
        <fieldset>
          <legend className="text-base font-bold text-zinc-950 dark:text-white">
            1. Nommer et mesurer le travail actuel
          </legend>
          <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            L’exemple fictif est préchargé. Remplacez-le par une période qui
            contient aussi une clôture, un pic ou une saison si votre activité
            en dépend.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="sm:col-span-2">
              <span className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Processus candidat
              </span>
              <input
                type="text"
                value={candidate.name}
                onChange={(event) => {
                  setCandidate((current) => ({
                    ...current,
                    name: event.target.value,
                  }));
                  setCopyStatus("idle");
                }}
                className="mt-1.5 min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-950 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:ring-violet-950"
              />
            </label>

            {[
              {
                key: "casesPerMonth" as const,
                label: "Cas observés par mois",
                help: "Volume réellement compté, pas capacité théorique.",
                suffix: "cas/mois",
              },
              {
                key: "activeMinutesPerCase" as const,
                label: "Temps actif moyen par cas",
                help: "Séparez l’attente du travail effectivement réalisé.",
                suffix: "min/cas",
              },
              {
                key: "correctionHoursPerMonth" as const,
                label: "Corrections manuelles par mois",
                help: "Reprises, doublons, recherche et réconciliation.",
                suffix: "h/mois",
              },
            ].map((field) => {
              const helpId = `${instanceId}-${field.key}-help`;
              const isInvalid =
                !Number.isFinite(candidate[field.key]) ||
                candidate[field.key] < 0 ||
                candidate[field.key] > PROCESS_AUTOMATION_MAX_INPUT;
              return (
                <label key={field.key}>
                  <span className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    {field.label}
                  </span>
                  <span className="mt-1 flex overflow-hidden rounded-xl border border-zinc-300 bg-white focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-200 dark:border-zinc-700 dark:bg-zinc-900 dark:focus-within:ring-violet-950">
                    <input
                      type="number"
                      min="0"
                      max={PROCESS_AUTOMATION_MAX_INPUT}
                      step="0.1"
                      value={
                        Number.isFinite(candidate[field.key])
                          ? candidate[field.key]
                          : ""
                      }
                      onChange={(event) =>
                        updateNumber(field.key, event.target.value)
                      }
                      aria-describedby={helpId}
                      aria-invalid={isInvalid}
                      className="min-h-11 min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-zinc-950 outline-none dark:text-white"
                    />
                    <span className="flex items-center border-l border-zinc-200 px-3 text-xs font-medium text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
                      {field.suffix}
                    </span>
                  </span>
                  <span
                    id={helpId}
                    className="mt-1.5 block text-xs leading-relaxed text-zinc-500 dark:text-zinc-400"
                  >
                    {field.help}
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <div>
          <h4 className="m-0 text-base font-bold text-zinc-950 dark:text-white">
            2. Qualifier les sept prérequis
          </h4>
          <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            « Documenté » signifie qu’une preuve existe et peut être relue par
            une autre personne. Une impression ou une démonstration ne suffit
            pas.
          </p>
          <div className="mt-4 space-y-3">
            {AUTOMATION_READINESS_KEYS.map((key) => {
              const field = READINESS_FIELDS[key];
              return (
                <fieldset
                  key={key}
                  className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800"
                >
                  <legend className="px-1 text-sm font-semibold text-zinc-950 dark:text-white">
                    {field.label}
                  </legend>
                  <p className="mb-3 mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {field.help}
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {READINESS_OPTIONS.map((option) => (
                      <label
                        key={option.value}
                        className={`flex min-h-11 cursor-pointer items-center justify-center rounded-lg border px-2 text-center text-xs font-semibold transition focus-within:outline-none focus-within:ring-2 focus-within:ring-violet-500 focus-within:ring-offset-2 dark:focus-within:ring-offset-zinc-950 ${
                          candidate.readiness[key] === option.value
                            ? "border-violet-500 bg-violet-50 text-violet-900 dark:border-violet-500 dark:bg-violet-950/40 dark:text-violet-100"
                            : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name={`${instanceId}-${key}`}
                          value={option.value}
                          checked={candidate.readiness[key] === option.value}
                          onChange={() => updateReadiness(key, option.value)}
                          className="sr-only"
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                </fieldset>
              );
            })}
          </div>
        </div>

        <fieldset>
          <legend className="text-base font-bold text-zinc-950 dark:text-white">
            3. Vérifier les quatre motifs d’arrêt
          </legend>
          <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Cochez ce qui est vrai aujourd’hui. Un seul motif impose de
            conserver le traitement manuel, ou une assistance avec validation
            humaine, jusqu’à correction.
          </p>
          <div className="mt-4 space-y-3">
            {AUTOMATION_HARD_STOP_KEYS.map((key) => {
              const field = HARD_STOP_FIELDS[key];
              return (
                <label
                  key={key}
                  className="flex cursor-pointer gap-3 rounded-xl border border-zinc-200 p-4 transition hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"
                >
                  <input
                    type="checkbox"
                    checked={candidate.hardStops[key]}
                    onChange={(event) =>
                      updateHardStop(key, event.target.checked)
                    }
                    className="mt-0.5 size-4 shrink-0 accent-violet-700"
                  />
                  <span>
                    <span className="block text-sm font-semibold text-zinc-950 dark:text-white">
                      {field.label}
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                      {field.consequence}
                    </span>
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        {decision.verdict === "invalid" ? (
          <div
            role="alert"
            className="rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-950 dark:border-red-900 dark:bg-red-950/30 dark:text-red-100"
          >
            Corrigez les trois mesures : elles doivent être des nombres
            positifs ou nuls. Le diagnostic ne transforme jamais une case vide
            en zéro.
          </div>
        ) : (
          <div
            role="status"
            aria-live="polite"
            className={`rounded-xl border p-4 sm:p-5 ${verdict?.classes}`}
          >
            <p className="m-0 text-base font-bold">{verdict?.title}</p>
            <p className="mb-0 mt-2 text-sm leading-relaxed">{verdict?.text}</p>
            <dl className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg bg-white/70 p-3 dark:bg-black/20">
                <dt className="text-[10px] font-bold uppercase tracking-wide opacity-70">
                  Volume annualisé
                </dt>
                <dd className="mb-0 mt-1 text-lg font-bold">
                  {displayNumber(decision.annualCases)} cas
                </dd>
              </div>
              <div className="rounded-lg bg-white/70 p-3 dark:bg-black/20">
                <dt className="text-[10px] font-bold uppercase tracking-wide opacity-70">
                  Temps observé
                </dt>
                <dd className="mb-0 mt-1 text-lg font-bold">
                  {displayNumber(decision.annualObservedHours)} h/an
                </dd>
              </div>
              <div className="rounded-lg bg-white/70 p-3 dark:bg-black/20">
                <dt className="text-[10px] font-bold uppercase tracking-wide opacity-70">
                  Preuves préparées
                </dt>
                <dd className="mb-0 mt-1 text-sm font-bold leading-relaxed">
                  {documentedReadiness} documentée
                  {documentedReadiness > 1 ? "s" : ""}
                  <br />
                  {decision.partialReadiness.length} partielle
                  {decision.partialReadiness.length > 1 ? "s" : ""} ·{" "}
                  {decision.unknownReadiness.length} inconnue
                  {decision.unknownReadiness.length > 1 ? "s" : ""}
                </dd>
              </div>
            </dl>
            <p className="mb-0 mt-3 text-xs leading-relaxed opacity-80">
              Les {displayNumber(decision.annualObservedHours)} heures sont une
              charge observée, pas une économie. Elles ne deviennent une valeur
              économique que si une partie est réellement réaffectée ou si un
              décaissement identifiable disparaît.
            </p>
          </div>
        )}

        <details className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
          <summary className="cursor-pointer text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Afficher le dossier de tri en texte
          </summary>
          <p className="mb-3 mt-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
            Ce texte reste visible même si votre navigateur refuse la copie
            automatique. Vous pouvez le sélectionner, l’enregistrer ou le
            transmettre à la personne qui relira le pilote.
          </p>
          <textarea
            readOnly
            value={summary}
            rows={18}
            aria-label="Dossier de tri en texte"
            className="w-full resize-y rounded-lg border border-zinc-300 bg-white p-3 font-mono text-xs leading-relaxed text-zinc-900 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
          />
        </details>

        <div className="flex flex-col gap-3 border-t border-zinc-200 pt-5 dark:border-zinc-800 sm:flex-row sm:flex-wrap">
          <button
            type="button"
            onClick={copySummary}
            disabled={decision.verdict === "invalid"}
            className="min-h-11 rounded-xl bg-zinc-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            Copier le dossier de tri
          </button>
          <button
            type="button"
            onClick={startBlankCandidate}
            className="min-h-11 rounded-xl border border-violet-300 bg-violet-50 px-4 py-2.5 text-sm font-semibold text-violet-950 transition hover:bg-violet-100 dark:border-violet-800 dark:bg-violet-950/30 dark:text-violet-100 dark:hover:bg-violet-950/50"
          >
            Nouveau candidat vierge
          </button>
          <button
            type="button"
            onClick={restoreExample}
            className="min-h-11 rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            Restaurer l’exemple fictif
          </button>
          <a
            href="/ressources/grille-premiere-automatisation.csv"
            download
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-800 no-underline transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            Télécharger le diagnostic CSV
          </a>
          <a
            href="/ressources/comparaison-options-automatisation.csv"
            download
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-800 no-underline transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            Télécharger le comparateur CSV
          </a>
          <p
            className="mb-0 self-center text-xs text-zinc-500 dark:text-zinc-400"
            aria-live="polite"
          >
            {copyStatus === "copied"
              ? "Dossier copié."
              : copyStatus === "copy-error"
                ? "Copie impossible : le dossier reste affichable juste au-dessus."
                : "Le dossier reste dans votre navigateur."}
          </p>
        </div>
      </div>
    </section>
  );
}
