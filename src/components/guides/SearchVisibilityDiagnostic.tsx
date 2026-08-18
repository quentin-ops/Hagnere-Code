"use client";

import { useState } from "react";
import {
  findFirstUnprovedStep,
  formatSearchVisibilityDiagnostic,
  SEARCH_VISIBILITY_RULES,
  SEARCH_VISIBILITY_STATUS_LABELS,
  type SearchVisibilityIdentity,
  type SearchVisibilityStatus,
  type SearchVisibilityStepId,
  type SearchVisibilitySteps,
} from "@/lib/search-visibility-diagnostic";

const INITIAL_IDENTITY: SearchVisibilityIdentity = {
  checkedAt: "",
  period: "",
  url: "",
  query: "",
  queryType: "",
  context: "",
  owner: "",
  recheckAt: "",
};

const INITIAL_STEPS: SearchVisibilitySteps = {
  crawl: { status: "unknown", evidence: "" },
  index: { status: "unknown", evidence: "" },
  impressions: { status: "unknown", evidence: "" },
  clicks: { status: "unknown", evidence: "" },
};

const stepCopy: Record<
  SearchVisibilityStepId,
  {
    question: string;
    help: string;
    placeholder: string;
    options: SearchVisibilityStatus[];
  }
> = {
  crawl: {
    question: "Google connaît-il l’adresse et a-t-il pu ouvrir la page ?",
    help: "L’inspection d’URL affiche la date de la dernière exploration, le résultat de récupération et un éventuel blocage. Relevez ces éléments ou indiquez que l’adresse est inconnue.",
    placeholder:
      "Exemple de saisie : date affichée ; récupération réussie ; réponse normale du serveur (HTTP 200)",
    options: ["unknown", "url-unknown", "crawl-success", "crawl-failed"],
  },
  index: {
    question: "Google a-t-il retenu cette version ?",
    help: "Dans la vue Index Google, relevez l’état d’indexation, l’instruction noindex éventuelle, puis l’adresse principale déclarée par le site et celle choisie par Google. Le test en direct ne prouve pas l’indexation.",
    placeholder:
      "Exemple de saisie : URL non indexée ; autre adresse principale choisie par Google",
    options: ["unknown", "indexed", "not-indexed"],
  },
  impressions: {
    question: "La page est-elle proposée pour cette recherche ?",
    help: "Dans Performances, fixez le contexte, filtrez l’adresse canonique choisie par Google et relevez le total de la page. Ajoutez la recherche exacte en dernier. Si aucune ligne n’apparaît, choisissez « aucune donnée visible » plutôt que zéro.",
    placeholder:
      "Exemple de saisie : total de la page relevé ; ligne présente après le filtre · France · mobile",
    options: ["unknown", "visible-impressions", "no-visible-data"],
  },
  clicks: {
    question: "Les internautes choisissent-ils ce résultat ?",
    help: "Relevez le nombre de clics avec exactement les mêmes filtres que pour les impressions.",
    placeholder:
      "Exemple de saisie : clics relevés avec les mêmes filtres et la même période",
    options: [
      "unknown",
      "visible-clicks",
      "zero-visible-clicks",
      "no-visible-data",
    ],
  },
};

const identityFields: Array<{
  key: keyof SearchVisibilityIdentity;
  label: string;
  placeholder?: string;
  type?: "date" | "text" | "url";
}> = [
  { key: "checkedAt", label: "Date du contrôle", type: "date" },
  {
    key: "period",
    label: "Période observée",
    placeholder: "Ex. : les 28 derniers jours",
  },
  {
    key: "url",
    label: "URL complète",
    placeholder: "https://www.exemple.fr/page",
    type: "url",
  },
  {
    key: "query",
    label: "Recherche exacte",
    placeholder: "Ex. : isolation extérieure Chambéry",
  },
  {
    key: "queryType",
    label: "Type de recherche",
    placeholder: "Marque ou recherche métier",
  },
  {
    key: "context",
    label: "Pays et appareil",
    placeholder: "Ex. : France · mobile",
  },
  {
    key: "owner",
    label: "Responsable du contrôle",
    placeholder: "Nom ou fonction",
  },
  { key: "recheckAt", label: "Date de recontrôle", type: "date" },
];

export function SearchVisibilityDiagnostic() {
  const [identity, setIdentity] =
    useState<SearchVisibilityIdentity>(INITIAL_IDENTITY);
  const [steps, setSteps] = useState<SearchVisibilitySteps>(INITIAL_STEPS);
  const [feedback, setFeedback] = useState("");
  const finding = findFirstUnprovedStep(steps);

  function updateIdentity(key: keyof SearchVisibilityIdentity, value: string) {
    setIdentity((current) => ({ ...current, [key]: value }));
  }

  function updateStep(
    id: SearchVisibilityStepId,
    key: "status" | "evidence",
    value: string,
  ) {
    setSteps((current) => ({
      ...current,
      [id]: { ...current[id], [key]: value },
    }));
  }

  async function copyDiagnostic() {
    const output = formatSearchVisibilityDiagnostic(identity, steps, finding);
    try {
      await navigator.clipboard.writeText(output);
      setFeedback("Fiche copiée. Vous pouvez l’envoyer à votre prestataire.");
    } catch {
      setFeedback(
        "La copie automatique a échoué. Utilisez l’impression ou copiez les champs visibles.",
      );
    }
  }

  function resetDiagnostic() {
    setIdentity(INITIAL_IDENTITY);
    setSteps(INITIAL_STEPS);
    setFeedback("La fiche a été réinitialisée.");
  }

  return (
    <>
      <style>
        {
          "@media print { @page { margin: 10mm; } body { margin: 0 !important; } body:has(#search-visibility-diagnostic) > *:not(:has(#search-visibility-diagnostic)):not(#search-visibility-diagnostic), body *:has(#search-visibility-diagnostic) > *:not(:has(#search-visibility-diagnostic)):not(#search-visibility-diagnostic) { display: none !important; } #search-visibility-diagnostic { width: 100% !important; margin: 0 !important; overflow: visible !important; border: 0 !important; box-shadow: none !important; background: white !important; color: #18181b !important; } #search-visibility-diagnostic * { background-color: white !important; color: #18181b !important; } #search-visibility-diagnostic fieldset, #search-visibility-diagnostic label, #search-visibility-diagnostic [role='status'] { break-inside: avoid; page-break-inside: avoid; } #search-visibility-diagnostic input, #search-visibility-diagnostic select, #search-visibility-diagnostic textarea { border: 1px solid #a1a1aa !important; } #search-visibility-diagnostic button { display: none !important; } }"
        }
      </style>
      <section
        id="search-visibility-diagnostic"
        className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm print:shadow-none dark:border-zinc-800 dark:bg-zinc-950"
        aria-labelledby="search-visibility-diagnostic-title"
      >
        <div className="border-b border-zinc-800 bg-zinc-950 px-4 py-5 text-white sm:px-6">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-300">
            Outil local · aucune donnée envoyée
          </p>
          <h3
            id="search-visibility-diagnostic-title"
            className="m-0 text-xl font-bold sm:text-2xl"
          >
            Préparez votre fiche URL-recherche
          </h3>
          <p className="mb-0 mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">
            Remplissez une fiche par page et par recherche. L’outil vous arrête
            au premier contrôle à reprendre. Il ne se connecte pas à Search
            Console et ne rend pas un verdict au nom de Google.
          </p>
        </div>

        <div className="border-b border-zinc-200 p-4 dark:border-zinc-800 sm:p-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-zinc-500">
            1 · Le contrôle que vous réalisez
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {identityFields.map((field) => (
              <label key={field.key} className="block">
                <span className="mb-1.5 block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {field.label}
                </span>
                <input
                  type={field.type || "text"}
                  value={identity[field.key]}
                  placeholder={field.placeholder}
                  onChange={(event) =>
                    updateIdentity(field.key, event.target.value)
                  }
                  className="min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:ring-emerald-950"
                />
              </label>
            ))}
          </div>
        </div>

        <div className="p-4 sm:p-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-zinc-500">
            2 · Les quatre contrôles, dans l’ordre
          </p>
          <div className="space-y-4">
            {SEARCH_VISIBILITY_RULES.map((rule) => {
              const copy = stepCopy[rule.id];
              return (
                <fieldset
                  key={rule.id}
                  className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800 sm:p-5"
                >
                  <legend className="px-1 text-sm font-bold text-zinc-950 dark:text-white sm:text-base">
                    {rule.title}
                  </legend>
                  <p className="mb-1 mt-1 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                    {copy.question}
                  </p>
                  <p
                    id={`search-visibility-${rule.id}-help`}
                    className="mb-4 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400"
                  >
                    {copy.help}
                  </p>
                  <div className="grid gap-3 lg:grid-cols-[0.85fr_1.15fr]">
                    <label>
                      <span className="mb-1.5 block text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                        État observé
                      </span>
                      <select
                        value={steps[rule.id].status}
                        aria-describedby={`search-visibility-${rule.id}-help`}
                        onChange={(event) =>
                          updateStep(rule.id, "status", event.target.value)
                        }
                        className="min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:ring-emerald-950"
                      >
                        {copy.options.map((option) => (
                          <option key={option} value={option}>
                            {SEARCH_VISIBILITY_STATUS_LABELS[option]}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label>
                      <span className="mb-1.5 block text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                        Constat relevé
                      </span>
                      <textarea
                        value={steps[rule.id].evidence}
                        placeholder={copy.placeholder}
                        rows={2}
                        onChange={(event) =>
                          updateStep(rule.id, "evidence", event.target.value)
                        }
                        className="w-full resize-y rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:ring-emerald-950"
                      />
                    </label>
                  </div>
                </fieldset>
              );
            })}
          </div>
        </div>

        <div className="border-t border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/60 sm:p-6">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
            3 · Votre premier contrôle à reprendre
          </p>
          <div
            className="rounded-xl border border-emerald-200 bg-white p-4 dark:border-emerald-900 dark:bg-zinc-950 sm:p-5"
            role="status"
            aria-live="polite"
          >
            <p className="mb-2 text-lg font-bold text-zinc-950 dark:text-white">
              {finding.title}
            </p>
            <p className="mb-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {finding.conclusion}
            </p>
            <p className="mb-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              <strong>Action :</strong> {finding.action}
            </p>
            <p className="mb-0 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              <strong>Limite du constat :</strong> {finding.limit}
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-2 sm:flex-row print:hidden">
            <button
              type="button"
              onClick={copyDiagnostic}
              className="min-h-11 rounded-lg bg-zinc-950 px-4 py-2.5 text-sm font-semibold text-white outline-none hover:bg-zinc-800 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              Copier la fiche
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="min-h-11 rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-800 outline-none hover:bg-zinc-100 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
            >
              Imprimer
            </button>
            <button
              type="button"
              onClick={resetDiagnostic}
              className="min-h-11 rounded-lg px-4 py-2.5 text-sm font-semibold text-zinc-600 underline-offset-4 outline-none hover:underline focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:text-zinc-300"
            >
              Réinitialiser
            </button>
          </div>
          <p
            className="mb-0 mt-3 min-h-5 text-xs text-zinc-500 print:hidden"
            role="status"
          >
            {feedback}
          </p>
        </div>
      </section>
    </>
  );
}
