"use client";

import { useState } from "react";
import {
  accessRightControls,
  assessAccessRightsReadiness,
  createEmptyAccessRightContext,
  createEmptyAccessRightEvidence,
  type AccessRightContext,
  type AccessRightContextId,
  type AccessRightControlId,
  type AccessRightEvidence,
  type AccessRightVerdict,
  type ContextChoice,
  type RuleStatus,
} from "./access-rights-readiness";

const contextOptions: { value: ContextChoice; label: string }[] = [
  { value: "unknown", label: "Inconnu" },
  { value: "no", label: "Non" },
  { value: "yes", label: "Oui" },
];

const statusOptions: {
  value: RuleStatus;
  label: string;
  help: string;
}[] = [
  {
    value: "unknown",
    label: "Inconnu",
    help: "La réponse ou la personne capable de décider n’est pas localisée.",
  },
  {
    value: "missing",
    label: "Absent",
    help: "Le point a été examiné et la règle ou le test manque.",
  },
  {
    value: "documented",
    label: "Documenté",
    help: "Une règle versionnée, un responsable et une preuve attendue sont localisés.",
  },
];

const contextQuestions: {
  id: AccessRightContextId;
  label: string;
  help: string;
}[] = [
  {
    id: "personalData",
    label: "L’application traite-t-elle des données personnelles ?",
    help: "Cette réponse borne les références RGPD et CNIL ; elle ne concerne pas la demande d’accès d’une personne à ses propres données.",
  },
  {
    id: "sensitiveActions",
    label: "Certaines actions ont-elles un impact sensible ?",
    help: "Par exemple : exporter, supprimer, administrer, valider un paiement ou modifier après clôture.",
  },
  {
    id: "multipleEntities",
    label: "Les droits changent-ils selon une équipe ou un établissement ?",
    help: "Une fonction identique peut avoir une portée différente selon l’agence, le service ou la société.",
  },
  {
    id: "temporaryDelegations",
    label: "Des remplacements ou délégations temporaires existent-ils ?",
    help: "La date de fin et le retrait effectif doivent alors être prévus.",
  },
];

const verdictClasses: Record<AccessRightVerdict, string> = {
  CLARIFY_CONTEXT:
    "border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-900 dark:bg-amber-950/35 dark:text-amber-100",
  CLARIFY_RULES:
    "border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-900 dark:bg-amber-950/35 dark:text-amber-100",
  STOP_MATRIX_MISSING:
    "border-red-300 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950/35 dark:text-red-100",
  STOP_DEFAULT_DENY_MISSING:
    "border-red-300 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950/35 dark:text-red-100",
  STOP_SENSITIVE_APPROVAL_MISSING:
    "border-red-300 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950/35 dark:text-red-100",
  STOP_LIFECYCLE_MISSING:
    "border-red-300 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950/35 dark:text-red-100",
  STOP_NEGATIVE_TEST_MISSING:
    "border-red-300 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950/35 dark:text-red-100",
  REVIEW_RELATION_RULES:
    "border-violet-300 bg-violet-50 text-violet-950 dark:border-violet-900 dark:bg-violet-950/35 dark:text-violet-100",
  REVIEW_TRACE_SCOPE:
    "border-blue-300 bg-blue-50 text-blue-950 dark:border-blue-900 dark:bg-blue-950/35 dark:text-blue-100",
  READY_FOR_WORKSHOP:
    "border-emerald-300 bg-emerald-50 text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/35 dark:text-emerald-100",
};

export function AccessRightsReadinessTool() {
  const [context, setContext] = useState<AccessRightContext>(
    createEmptyAccessRightContext,
  );
  const [evidence, setEvidence] = useState<AccessRightEvidence>(
    createEmptyAccessRightEvidence,
  );

  const assessment = assessAccessRightsReadiness(context, evidence);

  function updateContext(
    contextId: AccessRightContextId,
    value: ContextChoice,
  ) {
    setContext((current) => ({ ...current, [contextId]: value }));
  }

  function updateEvidence(controlId: AccessRightControlId, status: RuleStatus) {
    setEvidence((current) => ({ ...current, [controlId]: status }));
  }

  function reset() {
    setContext(createEmptyAccessRightContext());
    setEvidence(createEmptyAccessRightEvidence());
  }

  const concernedControlLabels = assessment.concernedControls.map(
    (controlId) =>
      accessRightControls.find(({ id }) => id === controlId)?.label ??
      controlId,
  );
  const concernedContextLabels = assessment.concernedContext.map(
    (contextId) =>
      contextQuestions.find(({ id }) => id === contextId)?.label ?? contextId,
  );

  return (
    <div className="not-prose my-8 overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="border-b border-zinc-200 bg-zinc-950 px-5 py-6 text-white dark:border-zinc-800 sm:px-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
          Préparation de la matrice · outil local
        </p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight">
          Quel point faut-il décider avant de développer ?
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-300">
          Choisissez uniquement des réponses génériques. Ne saisissez aucun nom,
          rôle interne, objet métier, secret ou donnée personnelle : l’outil ne
          transmet, ne stocke et ne note aucune réponse.
        </p>
      </div>

      <div className="space-y-9 px-5 py-6 sm:px-7 sm:py-8">
        <section aria-labelledby="access-context-heading">
          <h4
            id="access-context-heading"
            className="text-lg font-semibold text-zinc-950 dark:text-white"
          >
            1. Qualifiez le contexte
          </h4>
          <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            « Inconnu » reste une information à obtenir. Il ne vaut jamais « non
            ».
          </p>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            {contextQuestions.map((question) => {
              const helpId = `access-context-${question.id}-help`;

              return (
                <fieldset
                  key={question.id}
                  aria-describedby={helpId}
                  className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800"
                >
                  <legend className="px-1 font-medium text-zinc-950 dark:text-white">
                    {question.label}
                  </legend>
                  <p
                    id={helpId}
                    className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
                  >
                    {question.help}
                  </p>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {contextOptions.map((option) => {
                      const inputId = `access-context-${question.id}-${option.value}`;
                      const selected = context[question.id] === option.value;

                      return (
                        <label
                          key={option.value}
                          htmlFor={inputId}
                          className={`flex min-h-11 cursor-pointer items-center justify-center rounded-xl border px-2 py-2 text-center text-sm font-medium transition focus-within:ring-2 focus-within:ring-cyan-500 focus-within:ring-offset-2 focus-within:outline-none motion-reduce:transition-none dark:focus-within:ring-offset-zinc-950 ${
                            selected
                              ? "border-cyan-500 bg-cyan-50 text-cyan-950 dark:bg-cyan-950/45 dark:text-cyan-100"
                              : "border-zinc-200 text-zinc-700 hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-300"
                          }`}
                        >
                          <input
                            id={inputId}
                            type="radio"
                            name={`access-context-${question.id}`}
                            value={option.value}
                            checked={selected}
                            onChange={() =>
                              updateContext(question.id, option.value)
                            }
                            className="sr-only"
                          />
                          {option.label}
                        </label>
                      );
                    })}
                  </div>
                </fieldset>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="access-controls-heading">
          <h4
            id="access-controls-heading"
            className="text-lg font-semibold text-zinc-950 dark:text-white"
          >
            2. Localisez les règles et les tests
          </h4>
          <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            « Documenté » signifie qu’un autre lecteur peut retrouver la règle,
            le responsable et le résultat attendu. Ce n’est pas une preuve que
            l’application l’applique déjà.
          </p>

          <div className="mt-5 space-y-5">
            {accessRightControls.map((control) => {
              const questionId = `access-rule-${control.id}-question`;
              const evidenceId = `access-rule-${control.id}-evidence`;

              return (
                <fieldset
                  key={control.id}
                  aria-describedby={`${questionId} ${evidenceId}`}
                  className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800"
                >
                  <legend className="px-1 font-semibold text-zinc-950 dark:text-white">
                    {control.label}
                  </legend>
                  <p
                    id={questionId}
                    className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300"
                  >
                    {control.question}
                  </p>
                  <p
                    id={evidenceId}
                    className="mt-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-500"
                  >
                    Trace attendue : {control.expectedEvidence}
                  </p>

                  <div className="mt-4 grid gap-2 sm:grid-cols-3">
                    {statusOptions.map((option) => {
                      const inputId = `access-rule-${control.id}-${option.value}`;
                      const selected = evidence[control.id] === option.value;

                      return (
                        <label
                          key={option.value}
                          htmlFor={inputId}
                          className={`min-h-11 cursor-pointer rounded-xl border px-3 py-2 transition focus-within:ring-2 focus-within:ring-cyan-500 focus-within:ring-offset-2 focus-within:outline-none motion-reduce:transition-none dark:focus-within:ring-offset-zinc-950 ${
                            selected
                              ? "border-cyan-500 bg-cyan-50 text-cyan-950 dark:bg-cyan-950/45 dark:text-cyan-100"
                              : "border-zinc-200 text-zinc-700 hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-300"
                          }`}
                        >
                          <input
                            id={inputId}
                            type="radio"
                            name={`access-rule-${control.id}`}
                            value={option.value}
                            checked={selected}
                            onChange={() =>
                              updateEvidence(control.id, option.value)
                            }
                            className="sr-only"
                          />
                          <span className="block text-sm font-medium">
                            {option.label}
                          </span>
                          <span className="mt-0.5 block text-xs leading-relaxed opacity-80">
                            {option.help}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>
              );
            })}
          </div>
        </section>

        <section
          aria-live="polite"
          aria-atomic="true"
          className={`rounded-2xl border p-5 ${verdictClasses[assessment.verdict]}`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] opacity-75">
            Prochaine décision · aucun score
          </p>
          <h4 className="mt-2 text-xl font-semibold">{assessment.title}</h4>
          <p className="mt-2 text-sm leading-relaxed">
            {assessment.explanation}
          </p>
          <p className="mt-3 text-sm font-medium leading-relaxed">
            {assessment.nextAction}
          </p>

          {[...concernedContextLabels, ...concernedControlLabels].length >
            0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {[...concernedContextLabels, ...concernedControlLabels].map(
                (label) => (
                  <span
                    key={label}
                    className="rounded-full border border-current/25 px-3 py-1 text-xs font-medium"
                  >
                    {label}
                  </span>
                ),
              )}
            </div>
          )}
        </section>

        <div className="flex flex-col gap-3 border-t border-zinc-200 pt-5 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800">
          <p className="max-w-2xl text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
            L’outil ne remplace ni la validation métier, ni les tests
            techniques, ni un avis juridique ou sécurité adapté. Une matrice
            documentée reste à implémenter et à vérifier.
          </p>
          <button
            type="button"
            onClick={reset}
            className="min-h-11 shrink-0 rounded-xl border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-800 transition hover:border-zinc-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 motion-reduce:transition-none dark:border-zinc-700 dark:text-zinc-200"
          >
            Réinitialiser
          </button>
        </div>
      </div>
    </div>
  );
}
