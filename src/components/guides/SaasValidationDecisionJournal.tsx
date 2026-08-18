"use client";

import { useId, useState } from "react";
import {
  SAAS_VALIDATION_EXAMPLE,
  SAAS_VALIDATION_GATE_KEYS,
  SAAS_VALIDATION_HARD_STOP_KEYS,
  SAAS_VALIDATION_MAX_INPUT,
  buildSaasValidationSummary,
  cloneSaasValidationCandidate,
  createEmptySaasValidationCandidate,
  evaluateSaasValidationCandidate,
  type SaasValidationCandidate,
  type SaasValidationEvidenceLevel,
  type SaasValidationGateKey,
  type SaasValidationHardStopKey,
  type SaasValidationRequiredTextKey,
  type SaasValidationVerdict,
} from "@/lib/saas-validation-decision";

const GATE_FIELDS: Record<
  SaasValidationGateKey,
  { label: string; help: string }
> = {
  problem: {
    label: "Problème et déclencheur",
    help: "Un incident récent, sa fréquence, sa conséquence et ce qui déclenche une recherche de solution.",
  },
  segment: {
    label: "Segment éligible et non-cible",
    help: "Secteur, taille, rôle, contexte et critères qui excluent une entreprise du test.",
  },
  alternatives: {
    label: "Alternatives et coût du changement",
    help: "Statu quo, tableur, logiciel, prestataire ou recrutement réellement utilisés aujourd’hui.",
  },
  buyer: {
    label: "Acheteur, sponsor et veto",
    help: "Utilisateur, champion, budget, signataire, achats, juridique, IT et sécurité sont distingués.",
  },
  offer: {
    label: "Prix et engagement réel",
    help: "La personne habilitée a engagé du temps, des données, un pilote signé ou un paiement sur une offre précise.",
  },
  channel: {
    label: "Accès répétable à la cible",
    help: "Des conversations éligibles ont été obtenues hors du seul entourage par un canal traçable.",
  },
  feasibility: {
    label: "Faisabilité, sécurité et économie",
    help: "La donnée, l’intégration, les droits, le support et le coût variable ont été éprouvés au bon niveau.",
  },
  usage: {
    label: "Premier résultat, usage répété et rétention",
    help: "Le pilote mesure l’activation, le temps jusqu’au premier résultat et le retour volontaire à l’usage.",
  },
};

const HARD_STOP_FIELDS: Record<
  SaasValidationHardStopKey,
  { label: string; consequence: string }
> = {
  deceptiveTest: {
    label:
      "Le test fait croire qu’un service opérationnel existe alors qu’il est simulé.",
    consequence:
      "Rendre la simulation explicite et obtenir un consentement éclairé avant de reprendre.",
  },
  unauthorizedData: {
    label:
      "Le pilote exige des données que vous n’êtes pas autorisé à collecter ou traiter.",
    consequence:
      "Utiliser des données fictives ou anonymisées et clarifier les rôles avant tout transfert.",
  },
  impossiblePromise: {
    label:
      "La promesse centrale est impossible dans le coût, le droit ou les contraintes techniques annoncés.",
    consequence:
      "Réduire ou changer la promesse ; davantage d’intérêt commercial ne ferme pas ce risque.",
  },
  noPilotOwner: {
    label:
      "Personne ne porte le pilote, ne traite les incidents ou ne peut revenir au mode précédent.",
    consequence:
      "Nommer un responsable et écrire le mode de retour avant toute utilisation réelle.",
  },
};

const EVIDENCE_OPTIONS: Array<{
  value: SaasValidationEvidenceLevel;
  label: string;
}> = [
  { value: "contradicted", label: "Contredit par le test" },
  { value: "unknown", label: "Inconnu" },
  { value: "hypothesis", label: "Hypothèse écrite" },
  { value: "observed", label: "Fait ou comportement observé" },
  {
    value: "demonstrated",
    label: "Engagement, usage ou investissement démontré",
  },
];

const REQUIRED_FIELD_LABELS: Record<SaasValidationRequiredTextKey, string> = {
  name: "projet ou offre",
  segment: "segment éligible",
  hypothesis: "hypothèse",
  experiment: "population et expérience",
  metric: "mesure",
  threshold: "seuil décidé avant le test",
  result: "résultat",
  nextAction: "prochaine action",
};

const VERDICT_COPY: Record<
  SaasValidationVerdict,
  { title: string; text: string; classes: string }
> = {
  invalid: {
    title: "Compléter le dossier avant de décider",
    text: "Renseignez les champs du test et trois valeurs budgétaires valides. Le journal doit expliquer la décision ; les menus seuls ne peuvent jamais autoriser un pilote ou un MVP.",
    classes:
      "border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-100",
  },
  stop: {
    title: "STOP — condition non compensable",
    text: "Un risque d’intégrité, de données, de faisabilité ou de responsabilité est déclaré. Aucun nombre d’entretiens, de clics ou de prospects ne peut le compenser.",
    classes:
      "border-red-300 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950/30 dark:text-red-100",
  },
  "pivot-or-stop": {
    title: "PIVOT ou ARRÊT — une hypothèse est contredite",
    text: "Ne remplacez pas le seuil après avoir vu le résultat. Expliquez la contradiction, changez une seule hypothèse, puis décidez s’il reste un test honnête et moins coûteux.",
    classes:
      "border-red-300 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950/30 dark:text-red-100",
  },
  discover: {
    title: "DISCOVERY — documenter le problème et le segment",
    text: "Le problème, la cible ou les alternatives reposent encore sur des affirmations. Revenez aux incidents passés et aux pratiques actuelles avant de montrer la solution.",
    classes:
      "border-blue-300 bg-blue-50 text-blue-950 dark:border-blue-900 dark:bg-blue-950/30 dark:text-blue-100",
  },
  "test-offer": {
    title: "TESTER L’OFFRE — pas encore le produit",
    text: "Le problème est assez documenté pour éprouver l’acheteur, le prix, le canal ou la faisabilité. Choisissez le plus petit test qui peut réellement invalider l’hypothèse.",
    classes:
      "border-violet-300 bg-violet-50 text-violet-950 dark:border-violet-900 dark:bg-violet-950/30 dark:text-violet-100",
  },
  "bounded-pilot": {
    title: "PILOTE BORNÉ — pas encore le produit complet",
    text: "Les verrous d’avant-pilote sont suffisamment documentés, mais l’usage répété ne l’est pas. Mesurez le premier résultat utile, les retours à l’usage, le support et une sortie sans dépendance.",
    classes:
      "border-emerald-300 bg-emerald-50 text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-100",
  },
  "limited-mvp": {
    title: "CANDIDAT À UN MVP LIMITÉ — sous conditions",
    text: "Tous les verrous atteignent leur niveau minimal, sans STOP déclaré. Cadrez uniquement le premier usage prouvé, avec mesure, budget plafond, critères de sortie et réversibilité.",
    classes:
      "border-emerald-300 bg-emerald-50 text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-100",
  },
};

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

export function SaasValidationDecisionJournal() {
  const instanceId = useId().replaceAll(":", "");
  const [candidate, setCandidate] = useState<SaasValidationCandidate>(() =>
    cloneSaasValidationCandidate(SAAS_VALIDATION_EXAMPLE),
  );
  const [copyStatus, setCopyStatus] = useState<
    "idle" | "copied" | "copy-error"
  >("idle");
  const decision = evaluateSaasValidationCandidate(candidate);
  const verdict = VERDICT_COPY[decision.verdict];
  const summary = buildSaasValidationSummary(candidate, decision);

  function updateText(
    key:
      | "name"
      | "segment"
      | "hypothesis"
      | "experiment"
      | "metric"
      | "threshold"
      | "result"
      | "nextAction",
    value: string,
  ) {
    setCandidate((current) => ({ ...current, [key]: value }));
    setCopyStatus("idle");
  }

  function updateNumber(
    key: "externalCostEur" | "founderHours" | "founderHourlyValueEur",
    raw: string,
  ) {
    setCandidate((current) => ({ ...current, [key]: parseNumber(raw) }));
    setCopyStatus("idle");
  }

  function updateGate(
    key: SaasValidationGateKey,
    value: SaasValidationEvidenceLevel,
  ) {
    setCandidate((current) => ({
      ...current,
      gates: { ...current.gates, [key]: value },
    }));
    setCopyStatus("idle");
  }

  function updateHardStop(key: SaasValidationHardStopKey, checked: boolean) {
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

  return (
    <section
      className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
      aria-labelledby={`${instanceId}-title`}
      data-read-time-exclude="true"
    >
      <div className="border-b border-zinc-800 bg-zinc-950 px-4 py-5 text-white sm:px-6">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-300">
          Journal local · aucune donnée envoyée
        </p>
        <h3
          id={`${instanceId}-title`}
          className="m-0 text-lg font-bold sm:text-xl"
        >
          Quelle preuve manque avant le prochain euro de développement ?
        </h3>
        <p className="mb-0 mt-2 max-w-3xl text-sm leading-relaxed text-zinc-300">
          Renseignez un seul segment et une seule hypothèse. Le verdict dépend
          du verrou le plus faible : une preuve forte ne compense jamais un STOP
          ni une hypothèse contredite.
        </p>
      </div>

      <div className="space-y-8 p-4 sm:p-6">
        <fieldset>
          <legend className="text-base font-bold text-zinc-950 dark:text-white">
            1. Nommer le dossier et son segment
          </legend>
          <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            L’exemple ConformiSuivi est fictif. Chargez un dossier vierge pour
            travailler sur votre projet.
          </p>
          <div className="mt-4 grid gap-4">
            <label>
              <span className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Projet ou offre testée
              </span>
              <input
                type="text"
                value={candidate.name}
                onChange={(event) => updateText("name", event.target.value)}
                aria-invalid={candidate.name.trim() === ""}
                className="mt-1.5 min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-950 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:ring-violet-950"
              />
            </label>
            <label>
              <span className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Segment éligible
              </span>
              <textarea
                rows={3}
                value={candidate.segment}
                onChange={(event) => updateText("segment", event.target.value)}
                aria-invalid={candidate.segment.trim() === ""}
                className="mt-1.5 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm leading-relaxed text-zinc-950 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:ring-violet-950"
              />
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-base font-bold text-zinc-950 dark:text-white">
            2. Situer chaque verrou par sa meilleure preuve
          </legend>
          <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Sélectionnez ce que votre dossier contient réellement aujourd’hui,
            pas ce que vous espérez obtenir.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {SAAS_VALIDATION_GATE_KEYS.map((key) => {
              const helpId = `${instanceId}-${key}-help`;
              return (
                <label
                  key={key}
                  className="rounded-xl border border-zinc-200 p-3 focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-200 dark:border-zinc-800 dark:focus-within:ring-violet-950"
                >
                  <span className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    {GATE_FIELDS[key].label}
                  </span>
                  <span
                    id={helpId}
                    className="mt-1 block text-xs leading-relaxed text-zinc-500 dark:text-zinc-400"
                  >
                    {GATE_FIELDS[key].help}
                  </span>
                  <select
                    value={candidate.gates[key]}
                    onChange={(event) =>
                      updateGate(
                        key,
                        event.target.value as SaasValidationEvidenceLevel,
                      )
                    }
                    aria-describedby={helpId}
                    className="mt-3 min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-950 outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                  >
                    {EVIDENCE_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>
              );
            })}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-base font-bold text-zinc-950 dark:text-white">
            3. Déclarer les STOP non compensables
          </legend>
          <div className="mt-4 space-y-3">
            {SAAS_VALIDATION_HARD_STOP_KEYS.map((key) => (
              <label
                key={key}
                className="flex cursor-pointer gap-3 rounded-xl border border-zinc-200 p-3 transition focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-200 dark:border-zinc-800 dark:focus-within:ring-red-950"
              >
                <input
                  type="checkbox"
                  checked={candidate.hardStops[key]}
                  onChange={(event) =>
                    updateHardStop(key, event.target.checked)
                  }
                  className="mt-1 size-4 shrink-0 accent-red-600"
                />
                <span>
                  <span className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    {HARD_STOP_FIELDS[key].label}
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {HARD_STOP_FIELDS[key].consequence}
                  </span>
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-base font-bold text-zinc-950 dark:text-white">
            4. Écrire le test avant de voir le résultat
          </legend>
          <div className="mt-4 grid gap-4">
            {[
              {
                key: "hypothesis" as const,
                label: "Hypothèse falsifiable",
                rows: 3,
              },
              {
                key: "experiment" as const,
                label: "Population et expérience",
                rows: 3,
              },
              {
                key: "metric" as const,
                label: "Métrique observée",
                rows: 2,
              },
              {
                key: "threshold" as const,
                label: "Seuil et décision écrits avant le test",
                rows: 3,
              },
              {
                key: "result" as const,
                label: "Résultat, contradictions comprises",
                rows: 3,
              },
              {
                key: "nextAction" as const,
                label: "Prochaine action autorisée",
                rows: 3,
              },
            ].map((field) => (
              <label key={field.key}>
                <span className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {field.label}
                </span>
                <textarea
                  rows={field.rows}
                  value={candidate[field.key]}
                  onChange={(event) =>
                    updateText(field.key, event.target.value)
                  }
                  aria-invalid={candidate[field.key].trim() === ""}
                  className="mt-1.5 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm leading-relaxed text-zinc-950 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:ring-violet-950"
                />
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-base font-bold text-zinc-950 dark:text-white">
            5. Rendre visible le coût de la décision
          </legend>
          <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            La valeur horaire est une convention de décision, pas une dépense
            comptable. L’exemple donne 1 180 € + 52 h × 60 € = 4 300 €.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {[
              {
                key: "externalCostEur" as const,
                label: "Dépenses externes",
                suffix: "€",
              },
              {
                key: "founderHours" as const,
                label: "Temps fondateur",
                suffix: "h",
              },
              {
                key: "founderHourlyValueEur" as const,
                label: "Valeur horaire",
                suffix: "€/h",
              },
            ].map((field) => {
              const invalid =
                !Number.isFinite(candidate[field.key]) ||
                candidate[field.key] < 0 ||
                candidate[field.key] > SAAS_VALIDATION_MAX_INPUT;
              return (
                <label key={field.key}>
                  <span className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    {field.label}
                  </span>
                  <span className="mt-1.5 flex overflow-hidden rounded-xl border border-zinc-300 bg-white focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-200 dark:border-zinc-700 dark:bg-zinc-900 dark:focus-within:ring-violet-950">
                    <input
                      type="number"
                      min="0"
                      max={SAAS_VALIDATION_MAX_INPUT}
                      step="0.01"
                      value={
                        Number.isFinite(candidate[field.key])
                          ? candidate[field.key]
                          : ""
                      }
                      onChange={(event) =>
                        updateNumber(field.key, event.target.value)
                      }
                      aria-invalid={invalid}
                      className="min-h-11 min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-zinc-950 outline-none dark:text-white"
                    />
                    <span className="flex items-center border-l border-zinc-200 px-3 text-xs font-medium text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
                      {field.suffix}
                    </span>
                  </span>
                </label>
              );
            })}
          </div>
          <p className="mt-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Coût valorisé du test :{" "}
            {decision.valuedTestCostEur === null
              ? "à corriger"
              : `${decimal.format(decision.valuedTestCostEur)} €`}
          </p>
        </fieldset>

        <div
          className={`rounded-2xl border p-4 sm:p-5 ${verdict.classes}`}
          aria-live="polite"
        >
          <p className="m-0 text-base font-bold">{verdict.title}</p>
          <p className="mb-0 mt-2 text-sm leading-relaxed">{verdict.text}</p>
          {decision.missingFields.length > 0 ? (
            <p className="mb-0 mt-3 text-xs font-semibold">
              À compléter :{" "}
              {decision.missingFields
                .map((key) => REQUIRED_FIELD_LABELS[key])
                .join(" · ")}
            </p>
          ) : null}
          {decision.weakGates.length > 0 ? (
            <p className="mb-0 mt-3 text-xs font-semibold">
              Verrous sous leur niveau minimal :{" "}
              {decision.weakGates
                .map((key) => GATE_FIELDS[key].label)
                .join(" · ")}
            </p>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={copySummary}
            className="min-h-11 rounded-xl bg-zinc-950 px-4 py-2.5 text-sm font-semibold text-white outline-none transition hover:bg-zinc-800 focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            Copier le dossier
          </button>
          <button
            type="button"
            onClick={() => {
              setCandidate(createEmptySaasValidationCandidate());
              setCopyStatus("idle");
            }}
            className="min-h-11 rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 outline-none transition hover:bg-zinc-50 focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
          >
            Nouveau dossier vierge
          </button>
          <button
            type="button"
            onClick={() => {
              setCandidate(
                cloneSaasValidationCandidate(SAAS_VALIDATION_EXAMPLE),
              );
              setCopyStatus("idle");
            }}
            className="min-h-11 rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 outline-none transition hover:bg-zinc-50 focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
          >
            Recharger l’exemple
          </button>
          <a
            href="/ressources/journal-validation-saas.csv"
            download
            className="inline-flex min-h-11 items-center rounded-xl border border-violet-300 bg-violet-50 px-4 py-2.5 text-sm font-semibold text-violet-950 no-underline outline-none transition hover:bg-violet-100 focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 dark:border-violet-800 dark:bg-violet-950/40 dark:text-violet-100 dark:hover:bg-violet-950/70"
          >
            Télécharger le journal CSV
          </a>
        </div>

        <p className="text-sm" role="status" aria-live="polite">
          {copyStatus === "copied"
            ? "Dossier copié."
            : copyStatus === "copy-error"
              ? "La copie automatique a échoué. Sélectionnez le dossier texte ci-dessous."
              : "Le dossier reste dans ce navigateur jusqu’au rechargement de la page ; il n’est pas envoyé à Hagnéré Code."}
        </p>

        <label>
          <span className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Dossier texte — copie manuelle toujours disponible
          </span>
          <textarea
            readOnly
            rows={16}
            value={summary}
            onFocus={(event) => event.currentTarget.select()}
            className="mt-1.5 w-full rounded-xl border border-zinc-300 bg-zinc-50 px-3 py-2 font-mono text-xs leading-relaxed text-zinc-900 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:ring-violet-950"
          />
        </label>
      </div>
    </section>
  );
}
