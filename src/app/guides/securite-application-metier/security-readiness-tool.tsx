"use client";

import { useState } from "react";
import {
  assessSecurityReadiness,
  createEmptySecurityContext,
  createEmptySecurityEvidence,
  securityControls,
  type BusinessImpact,
  type ControlStatus,
  type SecurityContext,
  type SecurityContextId,
  type SecurityControlId,
  type SecurityEvidence,
  type SecurityVerdict,
  type TernaryChoice,
} from "./security-readiness";

const impactOptions: { value: BusinessImpact; label: string }[] = [
  { value: "unknown", label: "Inconnu" },
  { value: "limited", label: "Impact limité et contournement disponible" },
  { value: "material", label: "Impact notable sur l’activité" },
  { value: "critical", label: "Impact critique ou activité interrompue" },
];

const ternaryOptions: { value: TernaryChoice; label: string }[] = [
  { value: "unknown", label: "Inconnu" },
  { value: "no", label: "Non" },
  { value: "yes", label: "Oui" },
];

const statusOptions: {
  value: ControlStatus;
  label: string;
  help: string;
}[] = [
  {
    value: "unknown",
    label: "Inconnu",
    help: "Aucune réponse ou trace exploitable n’est disponible.",
  },
  {
    value: "verbal",
    label: "Affirmé oralement",
    help: "Le point a été évoqué, sans document ni résultat localisé.",
  },
  {
    value: "written",
    label: "Écrit et versionné",
    help: "Une exigence, une procédure ou un responsable est localisé.",
  },
  {
    value: "tested",
    label: "Exercé avec preuve",
    help: "Le contrôle a été observé ; le résultat et ses limites sont conservés.",
  },
  {
    value: "blocker",
    label: "STOP / condition bloquante",
    help: "Le point est incompatible avec la mise en service prévue.",
  },
];

const contextLabels: Record<SecurityContextId, string> = {
  businessImpact: "Impact métier",
  personalData: "Données personnelles",
  internetExposure: "Exposition Internet",
  activeIncident: "Incident actif ou soupçonné",
};

const verdictClasses: Record<SecurityVerdict, string> = {
  ESCALATE_ACTIVE_INCIDENT:
    "border-red-300 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950/35 dark:text-red-100",
  STOP_RELEASE:
    "border-red-300 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950/35 dark:text-red-100",
  CLARIFY_CONTEXT:
    "border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-900 dark:bg-amber-950/35 dark:text-amber-100",
  CLARIFY_CONTROLS:
    "border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-900 dark:bg-amber-950/35 dark:text-amber-100",
  REQUEST_WRITTEN_EVIDENCE:
    "border-orange-300 bg-orange-50 text-orange-950 dark:border-orange-900 dark:bg-orange-950/35 dark:text-orange-100",
  ASSIGN_RESPONSIBILITY:
    "border-violet-300 bg-violet-50 text-violet-950 dark:border-violet-900 dark:bg-violet-950/35 dark:text-violet-100",
  TEST_RESTORE:
    "border-blue-300 bg-blue-50 text-blue-950 dark:border-blue-900 dark:bg-blue-950/35 dark:text-blue-100",
  TEST_DETECTION:
    "border-cyan-300 bg-cyan-50 text-cyan-950 dark:border-cyan-900 dark:bg-cyan-950/35 dark:text-cyan-100",
  RUN_CONTROL_TESTS:
    "border-indigo-300 bg-indigo-50 text-indigo-950 dark:border-indigo-900 dark:bg-indigo-950/35 dark:text-indigo-100",
  REVIEW_CONTEXTUAL_RISKS:
    "border-teal-300 bg-teal-50 text-teal-950 dark:border-teal-900 dark:bg-teal-950/35 dark:text-teal-100",
  READY_FOR_REVIEW:
    "border-emerald-300 bg-emerald-50 text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/35 dark:text-emerald-100",
};

export function SecurityReadinessTool() {
  const [context, setContext] = useState<SecurityContext>(
    createEmptySecurityContext,
  );
  const [evidence, setEvidence] = useState<SecurityEvidence>(
    createEmptySecurityEvidence,
  );
  const assessment = assessSecurityReadiness(context, evidence);

  function updateContext<ContextId extends SecurityContextId>(
    contextId: ContextId,
    value: SecurityContext[ContextId],
  ) {
    setContext((current) => ({ ...current, [contextId]: value }));
  }

  function updateEvidence(controlId: SecurityControlId, status: ControlStatus) {
    setEvidence((current) => ({ ...current, [controlId]: status }));
  }

  function reset() {
    setContext(createEmptySecurityContext());
    setEvidence(createEmptySecurityEvidence());
  }

  const concernedControlLabels = assessment.concernedControls.map(
    (controlId) =>
      securityControls.find(({ id }) => id === controlId)?.label ?? controlId,
  );
  const concernedContextLabels = assessment.concernedContext.map(
    (contextId) => contextLabels[contextId],
  );

  return (
    <div className="not-prose my-8 overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="border-b border-zinc-200 bg-zinc-950 px-5 py-6 text-white dark:border-zinc-800 sm:px-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
          Revue avant mise en service · outil local
        </p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight">
          Quel point devez-vous établir maintenant ?
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-300">
          Choisissez uniquement des états génériques. Ne saisissez ni nom,
          détail d’incident, information métier, secret ou donnée personnelle :
          aucune réponse ne quitte la page ni n’est enregistrée durablement par
          cet outil.
        </p>
      </div>

      <div className="space-y-9 px-5 py-6 sm:px-7 sm:py-8">
        <fieldset>
          <legend className="text-lg font-semibold text-zinc-950 dark:text-white">
            1. Qualifier le contexte
          </legend>
          <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            Ces quatre choix ne calculent pas un risque. Ils empêchent l’outil
            de donner la même réponse à un prototype isolé et à une application
            devenue indispensable ou exposée.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800">
              <label
                htmlFor="security-context-impact"
                className="block text-sm font-semibold text-zinc-950 dark:text-white"
              >
                Impact métier d’une erreur ou indisponibilité
              </label>
              <select
                id="security-context-impact"
                value={context.businessImpact}
                onChange={(event) =>
                  updateContext(
                    "businessImpact",
                    event.target.value as BusinessImpact,
                  )
                }
                className="mt-3 min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-3 text-sm text-zinc-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
              >
                {impactOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {(
              [
                {
                  id: "personalData",
                  label:
                    "L’application traite-t-elle des données personnelles ?",
                },
                {
                  id: "internetExposure",
                  label: "Une interface est-elle accessible depuis Internet ?",
                },
                {
                  id: "activeIncident",
                  label: "Un incident est-il actif ou soupçonné ?",
                },
              ] as const
            ).map((field) => (
              <div
                key={field.id}
                className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800"
              >
                <label
                  htmlFor={`security-context-${field.id}`}
                  className="block text-sm font-semibold text-zinc-950 dark:text-white"
                >
                  {field.label}
                </label>
                <select
                  id={`security-context-${field.id}`}
                  value={context[field.id]}
                  onChange={(event) =>
                    updateContext(field.id, event.target.value as TernaryChoice)
                  }
                  className="mt-3 min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-3 text-sm text-zinc-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                >
                  {ternaryOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-lg font-semibold text-zinc-950 dark:text-white">
            2. Où en êtes-vous sur les huit contrôles ?
          </legend>
          <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            Même exercé, un contrôle peut garder des limites. Son résultat, sa
            date et son périmètre doivent pouvoir être relus. Choisissez STOP
            dès qu’une condition interdit la mise en service envisagée.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {securityControls.map((control, index) => {
              const selectId = `security-control-${control.id}`;
              const selectedOption = statusOptions.find(
                ({ value }) => value === evidence[control.id],
              );

              return (
                <div
                  key={control.id}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-4 dark:border-zinc-800 dark:bg-zinc-900/60"
                >
                  <label
                    htmlFor={selectId}
                    className="block text-sm font-semibold text-zinc-950 dark:text-white"
                  >
                    <span className="mr-2 text-xs text-zinc-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {control.label}
                  </label>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {control.question}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                    <strong>Trace attendue :</strong> {control.expectedEvidence}
                    .
                  </p>
                  <select
                    id={selectId}
                    value={evidence[control.id]}
                    onChange={(event) =>
                      updateEvidence(
                        control.id,
                        event.target.value as ControlStatus,
                      )
                    }
                    className="mt-3 min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-3 text-sm text-zinc-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                  >
                    {statusOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
                    {selectedOption?.help}
                  </p>
                </div>
              );
            })}
          </div>
        </fieldset>

        <section
          aria-live="polite"
          aria-atomic="true"
          className={`rounded-2xl border p-5 sm:p-6 ${
            verdictClasses[assessment.verdict]
          }`}
        >
          <p className="text-xs font-bold uppercase tracking-[0.16em] opacity-70">
            Prochaine étape prudente
          </p>
          <h4 className="mt-2 text-xl font-semibold">{assessment.title}</h4>
          <p className="mt-3 text-sm leading-relaxed">
            {assessment.explanation}
          </p>

          {(concernedControlLabels.length > 0 ||
            concernedContextLabels.length > 0) && (
            <div className="mt-4 rounded-xl border border-current/15 bg-white/45 p-4 dark:bg-black/10">
              <p className="text-xs font-semibold uppercase tracking-wide opacity-70">
                Points à reprendre
              </p>
              <ul className="mt-2 space-y-1 text-sm">
                {[...concernedContextLabels, ...concernedControlLabels].map(
                  (label) => (
                    <li key={label}>• {label}</li>
                  ),
                )}
              </ul>
            </div>
          )}

          <p className="mt-4 text-sm leading-relaxed">
            <strong>Action :</strong> {assessment.nextAction}
          </p>
        </section>

        <div className="flex flex-col gap-3 border-t border-zinc-200 pt-5 dark:border-zinc-800 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
            Aucun score n’est calculé. Le résultat dépend uniquement de vos
            choix et ne remplace ni une analyse de risques, ni un audit, ni un
            test d’intrusion encadré, ni une décision de mise en service.
          </p>
          <button
            type="button"
            onClick={reset}
            className="min-h-11 shrink-0 rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm font-semibold text-zinc-800 transition motion-reduce:transition-none hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900"
          >
            Réinitialiser
          </button>
        </div>
      </div>
    </div>
  );
}
