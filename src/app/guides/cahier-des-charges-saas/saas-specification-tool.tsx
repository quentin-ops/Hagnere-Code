"use client";

import { useMemo, useState } from "react";
import {
  assessSaasSpecification,
  createDossierClairExample,
  createEmptySaasSpecification,
  specificationBlocks,
  type SaasSpecificationInput,
  type SaasSpecificationStatus,
  type SpecificationBlockId,
  type SpecificationEntryField,
} from "./saas-specification-engine";

const fieldPresentation: Record<
  SpecificationEntryField,
  {
    label: string;
    rows: number;
    promptKey:
      | "decisionPrompt"
      | "ownerPrompt"
      | "evidencePrompt"
      | "exclusionPrompt"
      | "blockingUnknownPrompt";
  }
> = {
  decision: { label: "Décision produit", rows: 5, promptKey: "decisionPrompt" },
  owner: { label: "Responsable", rows: 3, promptKey: "ownerPrompt" },
  evidence: {
    label: "Preuve de réception",
    rows: 4,
    promptKey: "evidencePrompt",
  },
  exclusion: { label: "Exclusion", rows: 3, promptKey: "exclusionPrompt" },
  blockingUnknown: {
    label: "Inconnue bloquante",
    rows: 3,
    promptKey: "blockingUnknownPrompt",
  },
};

const statusClasses: Record<SaasSpecificationStatus, string> = {
  STOP_REQUIRED_INPUTS_UNKNOWN:
    "border-red-300 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950/35 dark:text-red-100",
  CLARIFY_BEFORE_COMPARISON:
    "border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-900 dark:bg-amber-950/35 dark:text-amber-100",
  CANDIDATE_FOR_VENDOR_COMPARISON:
    "border-emerald-300 bg-emerald-50 text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/35 dark:text-emerald-100",
};

function FieldLabel({
  blockId,
  field,
  value,
  prompt,
  rows,
  onChange,
}: {
  blockId: SpecificationBlockId;
  field: SpecificationEntryField;
  value: string;
  prompt: string;
  rows: number;
  onChange: (
    blockId: SpecificationBlockId,
    field: SpecificationEntryField,
    value: string,
  ) => void;
}) {
  const inputId = `saas-spec-${blockId}-${field}`;

  return (
    <label
      htmlFor={inputId}
      className={`block rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950 ${
        field === "decision" ||
        field === "evidence" ||
        field === "blockingUnknown"
          ? "md:col-span-2"
          : ""
      }`}
    >
      <span className="block text-sm font-semibold text-zinc-950 dark:text-white">
        {fieldPresentation[field].label}
      </span>
      <span className="mt-1 block text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
        {prompt}
      </span>
      <textarea
        id={inputId}
        rows={rows}
        value={value}
        onChange={(event) => onChange(blockId, field, event.target.value)}
        placeholder={
          field === "blockingUnknown"
            ? "Écrivez « Aucune identifiée » ou décrivez précisément le STOP"
            : "À décider — laissez vide si personne ne peut encore trancher"
        }
        className="mt-3 w-full resize-y rounded-xl border border-zinc-300 bg-white px-3 py-3 text-sm leading-relaxed text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-500/25 motion-reduce:transition-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:placeholder:text-zinc-500"
      />
    </label>
  );
}

export function SaasSpecificationTool() {
  const [draft, setDraft] = useState<SaasSpecificationInput>(
    createEmptySaasSpecification,
  );
  const [copyStatus, setCopyStatus] = useState("");
  const assessment = useMemo(() => assessSaasSpecification(draft), [draft]);

  function updateEntry(
    blockId: SpecificationBlockId,
    field: SpecificationEntryField,
    value: string,
  ) {
    setDraft((current) => ({
      ...current,
      entries: {
        ...current.entries,
        [blockId]: {
          ...current.entries[blockId],
          [field]: value,
        },
      },
    }));
    setCopyStatus("");
  }

  function reset() {
    setDraft(createEmptySaasSpecification());
    setCopyStatus(
      "Document réinitialisé. Les décisions sont de nouveau en STOP.",
    );
  }

  function loadExample() {
    setDraft(createDossierClairExample());
    setCopyStatus(
      "Exemple fictif DossierClair chargé. Remplacez chaque décision avant de l’utiliser.",
    );
  }

  async function copyMarkdown() {
    try {
      await navigator.clipboard.writeText(assessment.markdown);
      setCopyStatus(
        "Cahier des charges copié en Markdown. Collez-le dans votre document de travail.",
      );
    } catch {
      setCopyStatus(
        "La copie automatique a échoué. Sélectionnez le texte Markdown affiché ci-dessous.",
      );
    }
  }

  return (
    <div className="not-prose my-8 overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="border-b border-zinc-200 bg-zinc-950 px-5 py-6 text-white dark:border-zinc-800 sm:px-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
          Générateur Markdown · aucun envoi, aucun stockage
        </p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight">
          Écrire un cahier des charges commun à tous les prestataires
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-300">
          Utilisez des formulations génériques : ne saisissez ni secret, ni
          donnée personnelle, ni information contractuelle sensible. Vos
          réponses restent dans cette page. L’outil contrôle les rubriques et
          les marqueurs d’inconnue ; il ne juge pas la vérité de vos décisions.
        </p>
      </div>

      <div className="space-y-9 px-5 py-6 sm:px-7 sm:py-8">
        <section aria-labelledby="saas-spec-identity-heading">
          <h4
            id="saas-spec-identity-heading"
            className="text-lg font-semibold text-zinc-950 dark:text-white"
          >
            1. Nommer le document
          </h4>
          <label
            htmlFor="saas-spec-project-name"
            className="mt-4 block rounded-2xl border border-zinc-200 bg-zinc-50/70 p-4 dark:border-zinc-800 dark:bg-zinc-900/60"
          >
            <span className="block text-sm font-semibold text-zinc-950 dark:text-white">
              Nom de travail du produit
            </span>
            <span className="mt-1 block text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
              Un nom interne suffit. Laissez vide si le produit n’est pas encore
              identifiable : le document restera en STOP.
            </span>
            <input
              id="saas-spec-project-name"
              type="text"
              value={draft.projectName}
              onChange={(event) => {
                setDraft((current) => ({
                  ...current,
                  projectName: event.target.value,
                }));
                setCopyStatus("");
              }}
              placeholder="Ex. : nom de travail du SaaS"
              className="mt-3 min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-3 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-500/25 motion-reduce:transition-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:placeholder:text-zinc-500"
            />
          </label>
        </section>

        <section aria-labelledby="saas-spec-decisions-heading">
          <h4
            id="saas-spec-decisions-heading"
            className="text-lg font-semibold text-zinc-950 dark:text-white"
          >
            2. Renseigner les neuf blocs de décision
          </h4>
          <p className="mt-1 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            Chaque bloc possède cinq champs séparés. Une décision vide ou
            marquée « à décider », « à confirmer », « TBD », « inconnu » ou «
            STOP » reste bloquante. Un responsable, une preuve ou une exclusion
            manquante impose une clarification. Pour l’inconnue bloquante, un
            champ vide force un STOP, « Aucune identifiée » lève ce STOP, et
            toute autre formulation décrit un blocage. Aucun autre bloc ni score
            ne compense ce point.
          </p>

          <div className="mt-5 space-y-6">
            {specificationBlocks.map((block, index) => (
              <fieldset
                key={block.id}
                className="rounded-3xl border border-zinc-200 bg-zinc-50/55 p-4 dark:border-zinc-800 dark:bg-zinc-900/45 sm:p-5"
              >
                <legend className="px-2 text-base font-semibold text-zinc-950 dark:text-white">
                  <span className="mr-2 text-xs text-cyan-700 dark:text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {block.title}
                </legend>
                <div className="mt-3 grid gap-4 md:grid-cols-2">
                  {(
                    Object.keys(fieldPresentation) as SpecificationEntryField[]
                  ).map((field) => {
                    const presentation = fieldPresentation[field];
                    const prompt = block[presentation.promptKey];

                    return (
                      <FieldLabel
                        key={field}
                        blockId={block.id}
                        field={field}
                        value={draft.entries[block.id][field]}
                        prompt={prompt}
                        rows={presentation.rows}
                        onChange={updateEntry}
                      />
                    );
                  })}
                </div>
              </fieldset>
            ))}
          </div>
        </section>

        <section
          className={`rounded-2xl border p-5 sm:p-6 ${statusClasses[assessment.status]}`}
        >
          <p className="text-xs font-bold uppercase tracking-[0.16em] opacity-70">
            Premier point à traiter · aucun score
          </p>
          <div role="status" aria-atomic="true">
            <h4 className="mt-2 text-xl font-semibold">{assessment.title}</h4>
            <p className="mt-3 text-sm leading-relaxed">
              {assessment.explanation}
            </p>
          </div>

          {assessment.blockingUnknowns.length > 0 ? (
            <div className="mt-4 rounded-xl border border-current/15 bg-white/45 p-4 dark:bg-black/10">
              <p className="text-xs font-semibold uppercase tracking-wide opacity-75">
                STOP à attribuer
              </p>
              <ul className="mt-2 space-y-1 text-sm">
                {assessment.blockingUnknowns.map((unknown) => (
                  <li key={`${unknown.blockId}-${unknown.field}`}>
                    • {unknown.blockTitle} — {unknown.fieldLabel}
                    {unknown.detail ? ` — ${unknown.detail}` : ""}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {assessment.clarifications.length > 0 ? (
            <div className="mt-4 rounded-xl border border-current/15 bg-white/45 p-4 dark:bg-black/10">
              <p className="text-xs font-semibold uppercase tracking-wide opacity-75">
                Points à compléter
              </p>
              <ul className="mt-2 space-y-1 text-sm">
                {assessment.clarifications.map((unknown) => (
                  <li key={`${unknown.blockId}-${unknown.field}`}>
                    • {unknown.blockTitle} — {unknown.fieldLabel}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <p className="mt-4 text-sm leading-relaxed">
            <strong>Prochaine action :</strong> {assessment.nextAction}
          </p>
        </section>

        <section aria-labelledby="saas-spec-output-heading">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h4
                id="saas-spec-output-heading"
                className="text-lg font-semibold text-zinc-950 dark:text-white"
              >
                3. Copier le document Markdown
              </h4>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                Le texte reste sélectionnable. Les lignes STOP et « À décider »
                sont conservées pour empêcher un choix silencieux par un
                répondant.
              </p>
            </div>
            <button
              type="button"
              onClick={copyMarkdown}
              className="min-h-11 shrink-0 rounded-xl bg-zinc-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 motion-reduce:transition-none dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              Copier le Markdown
            </button>
          </div>

          <pre
            tabIndex={0}
            aria-label="Cahier des charges SaaS généré en Markdown"
            className="mt-4 max-h-[560px] overflow-auto whitespace-pre-wrap rounded-2xl border border-zinc-200 bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 sm:p-5"
          >
            {assessment.markdown}
          </pre>
        </section>

        <div className="flex flex-col gap-3 border-t border-zinc-200 pt-5 dark:border-zinc-800 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
            DossierClair est un exemple entièrement fictif. Le charger ne valide
            aucune décision de votre produit. L’outil ne remplace ni la
            relecture métier, ni la recette, ni les contrôles juridiques,
            sécurité, accessibilité ou comptables adaptés.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={loadExample}
              className="min-h-11 rounded-xl border border-cyan-300 bg-cyan-50 px-4 py-3 text-sm font-semibold text-cyan-950 transition hover:border-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 motion-reduce:transition-none dark:border-cyan-800 dark:bg-cyan-950/35 dark:text-cyan-100"
            >
              Charger l’exemple fictif
            </button>
            <button
              type="button"
              onClick={reset}
              className="min-h-11 rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm font-semibold text-zinc-800 transition hover:border-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 motion-reduce:transition-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200"
            >
              Réinitialiser
            </button>
          </div>
        </div>

        <p
          className="text-sm font-medium text-zinc-700 dark:text-zinc-200"
          aria-live="polite"
        >
          {copyStatus}
        </p>
      </div>
    </div>
  );
}
