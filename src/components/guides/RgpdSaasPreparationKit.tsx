"use client";

import { flushSync } from "react-dom";
import { useId, useRef, useState } from "react";
import {
  RGPD_PREPARATION_QUESTIONS,
  RGPD_PREPARATION_STEPS,
  buildRgpdPreparationMarkdown,
  createEmptyRgpdAction,
  createEmptyRgpdPreparation,
  createEmptyRgpdProvider,
  createFictitiousRgpdPreparationExample,
  determineRgpdNextAction,
  rgpdPreparationFileName,
  summarizeRgpdCosts,
  validateRgpdPreparation,
  type RgpdPreparationAction,
  type RgpdPreparationAnswer,
  type RgpdPreparationContext,
  type RgpdPreparationIssue,
  type RgpdPreparationProvider,
  type RgpdPreparationQuestionId,
  type RgpdPreparationStatus,
  type RgpdPreparationStep,
  type RgpdRoleHypothesis,
  type RgpdSaasPreparation,
} from "@/lib/rgpd-saas-preparation-kit";

const inputClass =
  "min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 focus:border-violet-600 focus:ring-2 focus:ring-violet-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:focus:ring-violet-950";
const primaryButtonClass =
  "min-h-11 rounded-lg bg-violet-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-violet-600 dark:hover:bg-violet-500";
const secondaryButtonClass =
  "min-h-11 rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 transition hover:border-zinc-400 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900";
const labelClass =
  "mb-1.5 block text-sm font-semibold text-zinc-900 dark:text-zinc-100";

const STATUS_OPTIONS: ReadonlyArray<{
  id: RgpdPreparationStatus;
  label: string;
  explanation: string;
}> = [
  {
    id: "unknown",
    label: "À documenter",
    explanation: "Le fait ou la preuve manque encore.",
  },
  {
    id: "documented",
    label: "Documenté",
    explanation: "Une preuve ou une référence datée peut être indiquée.",
  },
  {
    id: "review-needed",
    label: "À faire relire",
    explanation: "La question exacte et la personne attendue sont identifiées.",
  },
  {
    id: "not-applicable-with-justification",
    label: "Non applicable",
    explanation: "Une justification précise est obligatoire.",
  },
];

const ROLE_OPTIONS: ReadonlyArray<{
  id: RgpdRoleHypothesis;
  label: string;
  explanation: string;
}> = [
  {
    id: "unknown",
    label: "Rôle non examiné",
    explanation: "Aucune hypothèse ne doit être déduite par défaut.",
  },
  {
    id: "controller-to-confirm",
    label: "Responsable du traitement à confirmer",
    explanation:
      "L’acteur semble décider de la finalité et des moyens essentiels.",
  },
  {
    id: "processor-to-confirm",
    label: "Sous-traitant à confirmer",
    explanation: "L’acteur semble agir sur les instructions d’un client.",
  },
  {
    id: "joint-to-review",
    label: "Responsabilité conjointe à examiner",
    explanation:
      "Plusieurs acteurs semblent prendre ensemble des décisions essentielles.",
  },
  {
    id: "mixed-purposes-to-split",
    label: "Finalités mixtes à séparer",
    explanation:
      "Le fournisseur semble aussi poursuivre un ou plusieurs usages propres.",
  },
];

const money = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 2,
});

function downloadMarkdown(contents: string, fileName: string) {
  const blob = new Blob([`\ufeff${contents}`], {
    type: "text/markdown;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1_000);
}

function ErrorMessage({
  id,
  issue,
}: {
  id: string;
  issue: RgpdPreparationIssue | undefined;
}) {
  if (!issue) return null;
  return (
    <p
      id={id}
      className="mb-0 mt-1.5 text-sm font-medium text-red-700 dark:text-red-300"
    >
      {issue.message}
    </p>
  );
}

function TextField({
  id,
  label,
  value,
  placeholder,
  issue,
  onChange,
  type = "text",
  inputMode,
  multiline = false,
}: {
  id: string;
  label: string;
  value: string;
  placeholder?: string;
  issue?: RgpdPreparationIssue;
  onChange: (value: string) => void;
  type?: "text" | "date";
  inputMode?: "decimal";
  multiline?: boolean;
}) {
  const errorId = `${id}-error`;
  const invalid = Boolean(issue);
  const shared = {
    id,
    value,
    placeholder,
    inputMode,
    onChange: (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => onChange(event.target.value),
    className: `${inputClass} ${invalid ? "border-red-600 focus:border-red-600 focus:ring-red-200" : ""}`,
    "aria-invalid": invalid || undefined,
    "aria-errormessage": invalid ? errorId : undefined,
  };

  return (
    <label htmlFor={id} className="block">
      <span className={labelClass}>{label}</span>
      {multiline ? (
        <textarea {...shared} rows={3} />
      ) : (
        <input {...shared} type={type} />
      )}
      <ErrorMessage id={errorId} issue={issue} />
    </label>
  );
}

interface QuestionCardProps {
  instanceId: string;
  question: (typeof RGPD_PREPARATION_QUESTIONS)[number];
  answer: RgpdPreparationAnswer;
  issueFor: (path: string) => RgpdPreparationIssue | undefined;
  onChange: (
    field: keyof RgpdPreparationAnswer,
    value: RgpdPreparationAnswer[keyof RgpdPreparationAnswer],
  ) => void;
}

function QuestionCard({
  instanceId,
  question,
  answer,
  issueFor,
  onChange,
}: QuestionCardProps) {
  const statusPath = `answer.${question.id}.status`;
  const statusId = `${instanceId}-${statusPath.replaceAll(".", "-")}`;
  const statusIssue = issueFor(statusPath);
  const statusErrorId = `${statusId}-error`;
  const notePath = `answer.${question.id}.note`;
  const noteId = `${instanceId}-${notePath.replaceAll(".", "-")}`;
  const justificationPath = `answer.${question.id}.justification`;
  const justificationId = `${instanceId}-${justificationPath.replaceAll(".", "-")}`;

  return (
    <fieldset className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
      <legend className="px-1 text-base font-bold text-zinc-950 dark:text-white">
        {question.legend}
      </legend>
      <p className="mb-1 mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        {question.prompt}
      </p>
      <p className="mb-3 mt-0 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
        {question.evidence}
      </p>

      <div
        className="grid gap-2 sm:grid-cols-2"
        role="radiogroup"
        aria-label={`${question.legend} — état de préparation`}
        aria-invalid={Boolean(statusIssue) || undefined}
        aria-errormessage={statusIssue ? statusErrorId : undefined}
      >
        {STATUS_OPTIONS.filter(
          (option) =>
            option.id !== "not-applicable-with-justification" ||
            question.allowsNotApplicable,
        ).map((option, optionIndex) => {
          const optionId =
            optionIndex === 0 ? statusId : `${statusId}-${option.id}`;
          return (
            <label
              key={option.id}
              htmlFor={optionId}
              className={`flex cursor-pointer gap-2 rounded-lg border p-3 text-sm ${
                answer.status === option.id
                  ? "border-violet-500 bg-violet-50 dark:border-violet-700 dark:bg-violet-950/30"
                  : "border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50"
              }`}
            >
              <input
                id={optionId}
                type="radio"
                name={`${instanceId}-${question.id}-status`}
                value={option.id}
                checked={answer.status === option.id}
                onChange={() => onChange("status", option.id)}
                aria-describedby={statusIssue ? statusErrorId : undefined}
                className="mt-1 size-4 accent-violet-700"
              />
              <span>
                <span className="block font-semibold text-zinc-900 dark:text-zinc-100">
                  {option.label}
                </span>
                <span className="mt-0.5 block text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {option.explanation}
                </span>
              </span>
            </label>
          );
        })}
      </div>
      <ErrorMessage id={statusErrorId} issue={statusIssue} />

      {(answer.status === "documented" ||
        answer.status === "review-needed") && (
        <div className="mt-4">
          <TextField
            id={noteId}
            label={
              answer.status === "documented"
                ? "Preuve, référence et date"
                : "Question exacte, responsable attendu et échéance"
            }
            value={answer.note}
            placeholder={
              answer.status === "documented"
                ? "Ex. procédure SUP-04, testée le…"
                : "Ex. le DPO doit confirmer si… avant le…"
            }
            issue={issueFor(notePath)}
            onChange={(value) => onChange("note", value)}
            multiline
          />
        </div>
      )}

      {answer.status === "not-applicable-with-justification" && (
        <div className="mt-4">
          <TextField
            id={justificationId}
            label="Pourquoi ce point ne s’applique-t-il pas au périmètre exact ?"
            value={answer.justification}
            placeholder="Décrivez le périmètre vérifié et la preuve utilisée."
            issue={issueFor(justificationPath)}
            onChange={(value) => onChange("justification", value)}
            multiline
          />
        </div>
      )}
    </fieldset>
  );
}

export function RgpdSaasPreparationKit() {
  const instanceId = useId().replaceAll(":", "");
  const [preparation, setPreparation] = useState<RgpdSaasPreparation>(() =>
    createEmptyRgpdPreparation(),
  );
  const [activeStep, setActiveStep] = useState<RgpdPreparationStep>(1);
  const [showErrors, setShowErrors] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [resetConfirmationPending, setResetConfirmationPending] =
    useState(false);
  const nextProviderNumber = useRef(1);
  const nextActionNumber = useRef(2);

  const validation = validateRgpdPreparation(preparation);
  const nextAction = determineRgpdNextAction(preparation);
  const costs = summarizeRgpdCosts(preparation);

  function controlId(path: string) {
    return `${instanceId}-${path.replaceAll(".", "-")}`;
  }

  function issueFor(path: string) {
    if (!showErrors) return undefined;
    return validation.issues.find((issue) => issue.path === path);
  }

  function markEdited() {
    setFeedback("");
    setResetConfirmationPending(false);
  }

  function updateContext<K extends keyof RgpdPreparationContext>(
    field: K,
    value: RgpdPreparationContext[K],
  ) {
    setPreparation((current) => ({
      ...current,
      fictitiousExample: false,
      context: { ...current.context, [field]: value },
    }));
    markEdited();
  }

  function updateAnswer(
    questionId: RgpdPreparationQuestionId,
    field: keyof RgpdPreparationAnswer,
    value: RgpdPreparationAnswer[keyof RgpdPreparationAnswer],
  ) {
    setPreparation((current) => ({
      ...current,
      fictitiousExample: false,
      answers: {
        ...current.answers,
        [questionId]: {
          ...current.answers[questionId],
          [field]: value,
        },
      },
    }));
    markEdited();
  }

  function addProvider() {
    const id = `provider-${nextProviderNumber.current}`;
    nextProviderNumber.current += 1;
    setPreparation((current) => ({
      ...current,
      fictitiousExample: false,
      providers: [...current.providers, createEmptyRgpdProvider(id)],
    }));
    setFeedback("Un prestataire vide a été ajouté.");
  }

  function updateProvider<K extends keyof RgpdPreparationProvider>(
    providerId: string,
    field: K,
    value: RgpdPreparationProvider[K],
  ) {
    setPreparation((current) => ({
      ...current,
      fictitiousExample: false,
      providers: current.providers.map((provider) =>
        provider.id === providerId ? { ...provider, [field]: value } : provider,
      ),
    }));
    markEdited();
  }

  function removeProvider(providerId: string) {
    setPreparation((current) => ({
      ...current,
      fictitiousExample: false,
      providers: current.providers.filter(
        (provider) => provider.id !== providerId,
      ),
    }));
    setFeedback("Le prestataire a été retiré du brouillon local.");
  }

  function addAction() {
    const id = `action-${nextActionNumber.current}`;
    nextActionNumber.current += 1;
    setPreparation((current) => ({
      ...current,
      fictitiousExample: false,
      actions: [...current.actions, createEmptyRgpdAction(id)],
    }));
    setFeedback("Une action vide a été ajoutée.");
  }

  function updateAction<K extends keyof RgpdPreparationAction>(
    actionId: string,
    field: K,
    value: RgpdPreparationAction[K],
  ) {
    setPreparation((current) => ({
      ...current,
      fictitiousExample: false,
      actions: current.actions.map((action) =>
        action.id === actionId ? { ...action, [field]: value } : action,
      ),
    }));
    markEdited();
  }

  function removeAction(actionId: string) {
    setPreparation((current) => ({
      ...current,
      fictitiousExample: false,
      actions: current.actions
        .filter((action) => action.id !== actionId)
        .map((action) =>
          action.includedInActionId === actionId
            ? { ...action, includedInActionId: "" }
            : action,
        ),
    }));
    setFeedback(
      "L’action a été retirée ; ses éventuelles actions incluses sont redevenues indépendantes.",
    );
  }

  function loadExample() {
    setPreparation(createFictitiousRgpdPreparationExample());
    nextProviderNumber.current = 2;
    nextActionNumber.current = 5;
    setActiveStep(1);
    setShowErrors(false);
    setResetConfirmationPending(false);
    setFeedback(
      "Exemple entièrement fictif chargé. Les montants illustrent la méthode : ce ne sont ni des tarifs, ni un résultat Hagnéré Code.",
    );
  }

  function resetTool() {
    if (!resetConfirmationPending) {
      setResetConfirmationPending(true);
      setFeedback(
        "Aucune donnée n’a encore été supprimée. Cliquez sur « Confirmer la remise à zéro » pour effacer ce brouillon local, ou annulez.",
      );
      return;
    }

    setPreparation(createEmptyRgpdPreparation());
    nextProviderNumber.current = 1;
    nextActionNumber.current = 2;
    setActiveStep(1);
    setShowErrors(false);
    setResetConfirmationPending(false);
    setFeedback("Le questionnaire local a été remis à zéro.");
  }

  function cancelReset() {
    setResetConfirmationPending(false);
    setFeedback("Remise à zéro annulée. Votre brouillon local est conservé.");
  }

  function verifyPreparation() {
    const firstIssue = validation.issues[0];
    flushSync(() => {
      setShowErrors(true);
      if (firstIssue) setActiveStep(firstIssue.step);
      setFeedback(
        firstIssue
          ? `${validation.issues.length} point${validation.issues.length > 1 ? "s" : ""} à traiter. Le premier est affiché dans l’étape ${firstIssue.step}.`
          : "Le dossier est suffisamment renseigné pour une revue. Cela ne valide ni le rôle, ni la base juridique, ni le transfert, ni la conformité du SaaS.",
      );
    });

    if (firstIssue) {
      document.getElementById(controlId(firstIssue.path))?.focus();
    }
  }

  function exportMarkdown() {
    const fileName = rgpdPreparationFileName(preparation, validation);
    downloadMarkdown(buildRgpdPreparationMarkdown(preparation), fileName);
    setFeedback(
      validation.isReviewReady
        ? "Le relevé UTF-8 a été préparé sur votre appareil. Il reste un dossier de revue, pas une validation de conformité."
        : "Un brouillon UTF-8 a été préparé sur votre appareil. Les points manquants restent visibles et le fichier n’est pas présenté comme prêt pour revue.",
    );
  }

  function renderRoleChoices(
    path: string,
    value: RgpdRoleHypothesis,
    onChange: (value: RgpdRoleHypothesis) => void,
  ) {
    const issue = issueFor(path);
    const baseId = controlId(path);
    const errorId = `${baseId}-error`;
    return (
      <>
        <div
          className="grid gap-2 md:grid-cols-2"
          role="radiogroup"
          aria-label="Hypothèse de rôle à confirmer"
          aria-invalid={Boolean(issue) || undefined}
          aria-errormessage={issue ? errorId : undefined}
        >
          {ROLE_OPTIONS.map((option, optionIndex) => {
            const optionId =
              optionIndex === 0 ? baseId : `${baseId}-${option.id}`;
            return (
              <label
                key={option.id}
                htmlFor={optionId}
                className={`flex cursor-pointer gap-2 rounded-lg border p-3 text-sm ${
                  value === option.id
                    ? "border-violet-500 bg-violet-50 dark:border-violet-700 dark:bg-violet-950/30"
                    : "border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50"
                }`}
              >
                <input
                  id={optionId}
                  type="radio"
                  name={`${baseId}-group`}
                  checked={value === option.id}
                  onChange={() => onChange(option.id)}
                  aria-describedby={issue ? errorId : undefined}
                  className="mt-1 size-4 accent-violet-700"
                />
                <span>
                  <span className="block font-semibold text-zinc-900 dark:text-zinc-100">
                    {option.label}
                  </span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {option.explanation}
                  </span>
                </span>
              </label>
            );
          })}
        </div>
        <ErrorMessage id={errorId} issue={issue} />
      </>
    );
  }

  const questionsForStep = RGPD_PREPARATION_QUESTIONS.filter(
    (question) => question.step === activeStep,
  );
  const activeDefinition = RGPD_PREPARATION_STEPS.find(
    (step) => step.id === activeStep,
  )!;

  return (
    <section
      className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
      aria-labelledby={`${instanceId}-title`}
    >
      <div className="border-b border-zinc-800 bg-zinc-950 px-4 py-5 text-white sm:px-6">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-300">
          Questionnaire local · aucun envoi · aucun enregistrement
        </p>
        <h3 id={`${instanceId}-title`} className="m-0 text-xl font-bold">
          Préparez les faits avant une revue RGPD de votre SaaS
        </h3>
        <p className="mb-0 mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">
          L’outil ne calcule aucun score et ne prononce aucune conformité. Il
          vous aide à suivre un traitement réel, rendre les inconnues visibles,
          relier produit, contrat et tests, puis attribuer la prochaine action.
          Les saisies restent dans cet onglet et disparaissent à sa fermeture ou
          lors de la remise à zéro.
        </p>
      </div>

      <div className="border-b border-zinc-200 p-4 dark:border-zinc-800 sm:p-6">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={loadExample}
            className={secondaryButtonClass}
          >
            Charger l’exemple entièrement fictif
          </button>
          <button
            type="button"
            onClick={resetTool}
            className={secondaryButtonClass}
            aria-describedby={`${instanceId}-feedback`}
          >
            {resetConfirmationPending
              ? "Confirmer la remise à zéro"
              : "Repartir d’un questionnaire vide"}
          </button>
          {resetConfirmationPending && (
            <button
              type="button"
              onClick={cancelReset}
              className={secondaryButtonClass}
            >
              Annuler
            </button>
          )}
        </div>
        {preparation.fictitiousExample && (
          <p className="mb-0 mt-4 rounded-xl border border-amber-300 bg-amber-50 p-3 text-sm font-medium leading-relaxed text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100">
            Orbia Démo, ses prestataires, ses décisions et ses montants sont
            entièrement inventés. Ils expliquent le fonctionnement de l’outil ;
            ce ne sont ni des tarifs de marché, ni un client, ni un résultat
            Hagnéré Code.
          </p>
        )}
      </div>

      <nav
        className="border-b border-zinc-200 px-4 py-4 dark:border-zinc-800 sm:px-6"
        aria-label="Étapes du questionnaire RGPD"
      >
        <ol className="m-0 grid list-none gap-2 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {RGPD_PREPARATION_STEPS.map((step) => (
            <li key={step.id}>
              <button
                type="button"
                onClick={() => setActiveStep(step.id)}
                aria-current={activeStep === step.id ? "step" : undefined}
                className={`min-h-11 w-full rounded-lg border px-3 py-2 text-left text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-violet-400 ${
                  activeStep === step.id
                    ? "border-violet-600 bg-violet-50 text-violet-950 dark:border-violet-500 dark:bg-violet-950/40 dark:text-violet-100"
                    : "border-zinc-200 text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
                }`}
              >
                <span className="mr-1 text-xs text-violet-700 dark:text-violet-300">
                  {step.id}.
                </span>
                {step.shortLabel}
              </button>
            </li>
          ))}
        </ol>
      </nav>

      <div className="p-4 sm:p-6">
        <div className="mb-6 max-w-3xl">
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-violet-700 dark:text-violet-300">
            Étape {activeDefinition.id} sur 4
          </p>
          <h4 className="m-0 text-xl font-bold text-zinc-950 dark:text-white">
            {activeDefinition.title}
          </h4>
          <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {activeDefinition.introduction}
          </p>
        </div>

        {activeStep === 1 && (
          <div className="mb-6 space-y-5">
            <fieldset className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
              <legend className="px-1 text-base font-bold text-zinc-950 dark:text-white">
                Périmètre de la revue
              </legend>
              <div className="mt-2 grid gap-4 sm:grid-cols-2">
                <TextField
                  id={controlId("context.projectName")}
                  label="Projet ou produit"
                  value={preparation.context.projectName}
                  placeholder="Ex. Portail partenaires"
                  issue={issueFor("context.projectName")}
                  onChange={(value) => updateContext("projectName", value)}
                />
                <TextField
                  id={controlId("context.treatmentName")}
                  label="Traitement ou usage concret"
                  value={preparation.context.treatmentName}
                  placeholder="Ex. Import et attribution des demandes"
                  issue={issueFor("context.treatmentName")}
                  onChange={(value) => updateContext("treatmentName", value)}
                />
                <div className="sm:col-span-2">
                  <TextField
                    id={controlId("context.purpose")}
                    label="Décision métier ou finalité examinée"
                    value={preparation.context.purpose}
                    placeholder="Qui fait quoi, pour obtenir quel résultat concret ?"
                    issue={issueFor("context.purpose")}
                    onChange={(value) => updateContext("purpose", value)}
                    multiline
                  />
                </div>
                <TextField
                  id={controlId("context.decisionOwner")}
                  label="Rôle responsable de la prochaine décision"
                  value={preparation.context.decisionOwner}
                  placeholder="Ex. direction produit"
                  issue={issueFor("context.decisionOwner")}
                  onChange={(value) => updateContext("decisionOwner", value)}
                />
                <TextField
                  id={controlId("context.reviewDate")}
                  label="Date de cette revue"
                  value={preparation.context.reviewDate}
                  type="date"
                  issue={issueFor("context.reviewDate")}
                  onChange={(value) => updateContext("reviewDate", value)}
                />
              </div>
            </fieldset>

            <fieldset className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
              <legend className="px-1 text-base font-bold text-zinc-950 dark:text-white">
                Hypothèse de rôle — à confirmer, jamais déduite par l’outil
              </legend>
              <p className="mb-3 mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Choisissez l’hypothèse qui mérite d’être examinée. Décrivez
                ensuite qui décide des finalités et des moyens essentiels.
              </p>
              {renderRoleChoices(
                "context.roleHypothesis",
                preparation.context.roleHypothesis,
                (value) => updateContext("roleHypothesis", value),
              )}
              <div className="mt-4">
                <TextField
                  id={controlId("context.roleReasoning")}
                  label="Faits qui fondent cette hypothèse"
                  value={preparation.context.roleReasoning}
                  placeholder="Distinguez les décisions du client, du fournisseur et les usages propres éventuels."
                  issue={issueFor("context.roleReasoning")}
                  onChange={(value) => updateContext("roleReasoning", value)}
                  multiline
                />
              </div>
            </fieldset>
          </div>
        )}

        <div className="space-y-4">
          {questionsForStep.map((question) => (
            <QuestionCard
              key={question.id}
              instanceId={instanceId}
              question={question}
              answer={preparation.answers[question.id]}
              issueFor={issueFor}
              onChange={(field, value) =>
                updateAnswer(question.id, field, value)
              }
            />
          ))}
        </div>

        {activeStep === 2 && (
          <div className="mt-6 rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="max-w-2xl">
                <h5 className="m-0 text-lg font-bold text-zinc-950 dark:text-white">
                  Prestataires réellement utilisés
                </h5>
                <p className="mb-0 mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Écrivez les pays explicitement. « Europe », « mondial » ou une
                  marque seule ne permettent pas de suivre les accès.
                </p>
              </div>
              <button
                id={controlId("providers")}
                type="button"
                onClick={addProvider}
                className={secondaryButtonClass}
              >
                Ajouter un prestataire
              </button>
            </div>
            <ErrorMessage
              id={`${controlId("providers")}-error`}
              issue={issueFor("providers")}
            />

            {preparation.providers.length === 0 ? (
              <p className="mb-0 mt-4 rounded-lg bg-zinc-50 p-3 text-sm text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
                Aucun prestataire saisi. Si ce point ne s’applique réellement
                pas, utilisez le statut « Non applicable » et justifiez-le.
              </p>
            ) : (
              <div className="mt-5 space-y-5">
                {preparation.providers.map((provider, index) => {
                  const prefix = `provider.${provider.id}`;
                  return (
                    <fieldset
                      key={provider.id}
                      className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800"
                    >
                      <legend className="px-1 text-base font-bold text-zinc-950 dark:text-white">
                        Prestataire {index + 1}
                      </legend>
                      <div className="mt-2 grid gap-4 sm:grid-cols-2">
                        <TextField
                          id={controlId(`${prefix}.name`)}
                          label="Nom du prestataire"
                          value={provider.name}
                          placeholder="Ex. hébergeur, support ou outil de mesure"
                          issue={issueFor(`${prefix}.name`)}
                          onChange={(value) =>
                            updateProvider(provider.id, "name", value)
                          }
                        />
                        <TextField
                          id={controlId(`${prefix}.service`)}
                          label="Service et données concernés"
                          value={provider.service}
                          placeholder="Décrivez ce qui est réellement utilisé."
                          issue={issueFor(`${prefix}.service`)}
                          onChange={(value) =>
                            updateProvider(provider.id, "service", value)
                          }
                        />
                        <TextField
                          id={controlId(`${prefix}.storageCountries`)}
                          label="Pays de stockage et de sauvegarde"
                          value={provider.storageCountries}
                          placeholder="Pays précis, ou « aucun stockage » après vérification"
                          issue={issueFor(`${prefix}.storageCountries`)}
                          onChange={(value) =>
                            updateProvider(
                              provider.id,
                              "storageCountries",
                              value,
                            )
                          }
                        />
                        <TextField
                          id={controlId(`${prefix}.remoteAccessCountries`)}
                          label="Pays d’accès du support et des administrateurs"
                          value={provider.remoteAccessCountries}
                          placeholder="Pays précis, ou « aucun accès » après vérification"
                          issue={issueFor(`${prefix}.remoteAccessCountries`)}
                          onChange={(value) =>
                            updateProvider(
                              provider.id,
                              "remoteAccessCountries",
                              value,
                            )
                          }
                        />
                        <div className="sm:col-span-2">
                          <fieldset>
                            <legend className={labelClass}>
                              Hypothèse de rôle à confirmer
                            </legend>
                            {renderRoleChoices(
                              `${prefix}.roleHypothesis`,
                              provider.roleHypothesis,
                              (value) =>
                                updateProvider(
                                  provider.id,
                                  "roleHypothesis",
                                  value,
                                ),
                            )}
                          </fieldset>
                        </div>
                        <div className="sm:col-span-2">
                          <TextField
                            id={controlId(`${prefix}.evidence`)}
                            label="Source consultée et date de vérification"
                            value={provider.evidence}
                            placeholder="Ex. annexe prestataires v3 consultée le…"
                            issue={issueFor(`${prefix}.evidence`)}
                            onChange={(value) =>
                              updateProvider(provider.id, "evidence", value)
                            }
                            multiline
                          />
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeProvider(provider.id)}
                        className={`${secondaryButtonClass} mt-4 text-red-700 dark:text-red-300`}
                      >
                        Retirer ce prestataire
                      </button>
                    </fieldset>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {activeStep === 4 && (
          <div className="mt-6 space-y-6">
            <section
              className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800"
              aria-labelledby={`${instanceId}-actions-title`}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="max-w-2xl">
                  <h5
                    id={`${instanceId}-actions-title`}
                    className="m-0 text-lg font-bold text-zinc-950 dark:text-white"
                  >
                    Actions, responsables et coûts renseignés
                  </h5>
                  <p className="mb-0 mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    La trésorerie ponctuelle, le récurrent et les jours internes
                    restent séparés. Une action incluse dans une autre ne porte
                    aucun montant propre.
                  </p>
                </div>
                <button
                  id={controlId("actions")}
                  type="button"
                  onClick={addAction}
                  className={secondaryButtonClass}
                >
                  Ajouter une action
                </button>
              </div>
              <ErrorMessage
                id={`${controlId("actions")}-error`}
                issue={issueFor("actions")}
              />

              <div className="mt-5 space-y-5">
                {preparation.actions.map((action, index) => {
                  const prefix = `action.${action.id}`;
                  const inclusionIssue = issueFor(
                    `${prefix}.includedInActionId`,
                  );
                  const inclusionId = controlId(`${prefix}.includedInActionId`);
                  return (
                    <fieldset
                      key={action.id}
                      className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800"
                    >
                      <legend className="px-1 text-base font-bold text-zinc-950 dark:text-white">
                        Action {index + 1}
                      </legend>
                      <div className="mt-2 grid gap-4 sm:grid-cols-2">
                        <TextField
                          id={controlId(`${prefix}.title`)}
                          label="Action concrète"
                          value={action.title}
                          placeholder="Ex. tester une restauration représentative"
                          issue={issueFor(`${prefix}.title`)}
                          onChange={(value) =>
                            updateAction(action.id, "title", value)
                          }
                        />
                        <TextField
                          id={controlId(`${prefix}.owner`)}
                          label="Rôle responsable"
                          value={action.owner}
                          placeholder="Ex. responsable technique"
                          issue={issueFor(`${prefix}.owner`)}
                          onChange={(value) =>
                            updateAction(action.id, "owner", value)
                          }
                        />
                        <TextField
                          id={controlId(`${prefix}.dueDate`)}
                          label="Échéance"
                          value={action.dueDate}
                          type="date"
                          issue={issueFor(`${prefix}.dueDate`)}
                          onChange={(value) =>
                            updateAction(action.id, "dueDate", value)
                          }
                        />
                        <label htmlFor={inclusionId} className="block">
                          <span className={labelClass}>
                            Coût inclus dans une autre action
                          </span>
                          <select
                            id={inclusionId}
                            value={action.includedInActionId}
                            onChange={(event) =>
                              updateAction(
                                action.id,
                                "includedInActionId",
                                event.target.value,
                              )
                            }
                            className={inputClass}
                            aria-invalid={Boolean(inclusionIssue) || undefined}
                            aria-errormessage={
                              inclusionIssue
                                ? `${inclusionId}-error`
                                : undefined
                            }
                          >
                            <option value="">Non, coût indépendant</option>
                            {preparation.actions
                              .filter((candidate) => candidate.id !== action.id)
                              .map((candidate, candidateIndex) => (
                                <option key={candidate.id} value={candidate.id}>
                                  {candidate.title ||
                                    `Action ${candidateIndex + 1}`}
                                </option>
                              ))}
                          </select>
                          <span className="mt-1 block text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                            Si vous choisissez une action mère, videz les trois
                            montants et décochez « coût inconnu ».
                          </span>
                          <ErrorMessage
                            id={`${inclusionId}-error`}
                            issue={inclusionIssue}
                          />
                        </label>
                        <TextField
                          id={controlId(`${prefix}.oneOffCash`)}
                          label="Trésorerie ponctuelle (€)"
                          value={action.oneOffCash}
                          placeholder="Ex. 2 500,00"
                          inputMode="decimal"
                          issue={issueFor(`${prefix}.oneOffCash`)}
                          onChange={(value) =>
                            updateAction(action.id, "oneOffCash", value)
                          }
                        />
                        <label
                          htmlFor={controlId(`${prefix}.recurringCash`)}
                          className="block"
                        >
                          <span className={labelClass}>
                            Trésorerie récurrente (€)
                          </span>
                          <div className="grid grid-cols-[1fr_auto] gap-2">
                            <input
                              id={controlId(`${prefix}.recurringCash`)}
                              value={action.recurringCash}
                              inputMode="decimal"
                              placeholder="Ex. 300"
                              onChange={(event) =>
                                updateAction(
                                  action.id,
                                  "recurringCash",
                                  event.target.value,
                                )
                              }
                              className={inputClass}
                              aria-invalid={
                                Boolean(issueFor(`${prefix}.recurringCash`)) ||
                                undefined
                              }
                              aria-errormessage={
                                issueFor(`${prefix}.recurringCash`)
                                  ? `${controlId(`${prefix}.recurringCash`)}-error`
                                  : undefined
                              }
                            />
                            <select
                              value={action.recurringPeriod}
                              onChange={(event) =>
                                updateAction(
                                  action.id,
                                  "recurringPeriod",
                                  event.target.value as "monthly" | "annual",
                                )
                              }
                              aria-label={`Période du coût récurrent de l’action ${index + 1}`}
                              className={`${inputClass} w-auto`}
                            >
                              <option value="monthly">par mois</option>
                              <option value="annual">par an</option>
                            </select>
                          </div>
                          <ErrorMessage
                            id={`${controlId(`${prefix}.recurringCash`)}-error`}
                            issue={issueFor(`${prefix}.recurringCash`)}
                          />
                        </label>
                        <TextField
                          id={controlId(`${prefix}.internalDays`)}
                          label="Capacité interne (jours)"
                          value={action.internalDays}
                          placeholder="Ex. 3,5"
                          inputMode="decimal"
                          issue={issueFor(`${prefix}.internalDays`)}
                          onChange={(value) =>
                            updateAction(action.id, "internalDays", value)
                          }
                        />
                        <TextField
                          id={controlId(`${prefix}.zeroJustification`)}
                          label="Justification si un montant saisi vaut zéro"
                          value={action.zeroJustification}
                          placeholder="Laissez vide si aucun zéro n’est saisi."
                          issue={issueFor(`${prefix}.zeroJustification`)}
                          onChange={(value) =>
                            updateAction(action.id, "zeroJustification", value)
                          }
                        />
                        <div className="sm:col-span-2">
                          <label
                            htmlFor={controlId(`${prefix}.costUnknown`)}
                            className="flex min-h-11 cursor-pointer items-start gap-3 rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-sm dark:border-zinc-800 dark:bg-zinc-900/50"
                          >
                            <input
                              id={controlId(`${prefix}.costUnknown`)}
                              type="checkbox"
                              checked={action.costUnknown}
                              onChange={(event) =>
                                updateAction(
                                  action.id,
                                  "costUnknown",
                                  event.target.checked,
                                )
                              }
                              aria-invalid={
                                Boolean(issueFor(`${prefix}.costUnknown`)) ||
                                undefined
                              }
                              aria-errormessage={
                                issueFor(`${prefix}.costUnknown`)
                                  ? `${controlId(`${prefix}.costUnknown`)}-error`
                                  : undefined
                              }
                              className="mt-0.5 size-4 accent-violet-700"
                            />
                            <span>
                              <span className="block font-semibold text-zinc-900 dark:text-zinc-100">
                                Au moins un coût reste inconnu
                              </span>
                              <span className="mt-0.5 block text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                                Laissez cette option active tant qu’un devis,
                                une charge ou un coût récurrent peut encore
                                manquer.
                              </span>
                            </span>
                          </label>
                          <ErrorMessage
                            id={`${controlId(`${prefix}.costUnknown`)}-error`}
                            issue={issueFor(`${prefix}.costUnknown`)}
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <TextField
                            id={controlId(`${prefix}.evidence`)}
                            label="Résultat attendu ou preuve à conserver"
                            value={action.evidence}
                            placeholder="Ex. procès-verbal de restauration avec durée et anomalies"
                            issue={issueFor(`${prefix}.evidence`)}
                            onChange={(value) =>
                              updateAction(action.id, "evidence", value)
                            }
                            multiline
                          />
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeAction(action.id)}
                        className={`${secondaryButtonClass} mt-4 text-red-700 dark:text-red-300`}
                      >
                        Retirer cette action
                      </button>
                    </fieldset>
                  );
                })}
              </div>
            </section>

            <section
              className="rounded-xl border border-violet-200 bg-violet-50 p-4 dark:border-violet-900 dark:bg-violet-950/20"
              aria-labelledby={`${instanceId}-summary-title`}
            >
              <h5
                id={`${instanceId}-summary-title`}
                className="m-0 text-lg font-bold text-violet-950 dark:text-violet-100"
              >
                Sous-totaux des seuls montants renseignés
              </h5>
              <dl className="mt-4 grid gap-3 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-violet-700 dark:text-violet-300">
                    Trésorerie ponctuelle
                  </dt>
                  <dd className="m-0 mt-1 text-lg font-bold text-zinc-950 dark:text-white">
                    {money.format(costs.oneOffCashEntered)}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-violet-700 dark:text-violet-300">
                    Capacité interne
                  </dt>
                  <dd className="m-0 mt-1 text-lg font-bold text-zinc-950 dark:text-white">
                    {costs.internalDaysEntered.toLocaleString("fr-FR")} jour(s)
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-violet-700 dark:text-violet-300">
                    Récurrent mensuel
                  </dt>
                  <dd className="m-0 mt-1 text-lg font-bold text-zinc-950 dark:text-white">
                    {money.format(costs.monthlyCashEntered)} / mois
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-violet-700 dark:text-violet-300">
                    Récurrent annuel
                  </dt>
                  <dd className="m-0 mt-1 text-lg font-bold text-zinc-950 dark:text-white">
                    {money.format(costs.annualCashEntered)} / an
                  </dd>
                </div>
              </dl>
              <p className="mb-0 mt-4 text-sm font-medium leading-relaxed text-violet-950 dark:text-violet-100">
                {costs.hasUnknownCosts
                  ? "Au moins un coût reste inconnu : ces sous-totaux ne constituent pas un coût complet et l’inconnue n’est pas convertie en zéro."
                  : "Aucun coût n’est marqué inconnu. Vérifiez encore le périmètre avant de comparer ou budgéter."}
              </p>
            </section>

            <section
              className="rounded-xl border border-zinc-800 bg-zinc-950 p-5 text-white"
              aria-labelledby={`${instanceId}-decision-title`}
            >
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-violet-300">
                Prochaine action proposée · jamais un verdict de conformité
              </p>
              <h5
                id={`${instanceId}-decision-title`}
                className="m-0 text-xl font-bold"
              >
                {nextAction.label}
              </h5>
              <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-300">
                {nextAction.explanation}
              </p>
              {nextAction.firstReasons.length > 0 && (
                <ul className="mb-0 mt-3 space-y-1 pl-5 text-sm text-zinc-300">
                  {nextAction.firstReasons.map((reason) => (
                    <li key={reason}>{reason}</li>
                  ))}
                </ul>
              )}
            </section>
          </div>
        )}

        <div className="mt-7 flex flex-wrap justify-between gap-3 border-t border-zinc-200 pt-5 dark:border-zinc-800">
          <button
            type="button"
            onClick={() =>
              setActiveStep(Math.max(1, activeStep - 1) as RgpdPreparationStep)
            }
            disabled={activeStep === 1}
            className={secondaryButtonClass}
          >
            Étape précédente
          </button>
          {activeStep < 4 ? (
            <button
              type="button"
              onClick={() =>
                setActiveStep((activeStep + 1) as RgpdPreparationStep)
              }
              className={primaryButtonClass}
            >
              Étape suivante
            </button>
          ) : (
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={verifyPreparation}
                className={secondaryButtonClass}
              >
                Vérifier le dossier
              </button>
              <button
                type="button"
                onClick={exportMarkdown}
                className={primaryButtonClass}
              >
                {validation.isReviewReady
                  ? "Télécharger le relevé Markdown (.md) pour revue"
                  : "Télécharger le brouillon Markdown (.md)"}
              </button>
            </div>
          )}
        </div>

        <p
          id={`${instanceId}-feedback`}
          className="mb-0 mt-4 min-h-6 text-sm font-medium text-zinc-700 dark:text-zinc-300"
          role="status"
          aria-live="polite"
        >
          {feedback}
        </p>
      </div>
    </section>
  );
}
