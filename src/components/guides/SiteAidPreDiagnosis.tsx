"use client";

import { useEffect, useRef, useState } from "react";
import {
  SITE_AID_PREDIAGNOSIS_DEFINITIONS,
  SITE_AID_PREDIAGNOSIS_DIRTY_EVENT,
  SITE_AID_PREDIAGNOSIS_MAX_EVIDENCE_LENGTH,
  SITE_AID_PREDIAGNOSIS_TRANSFER_EVENT,
  createSiteAidPreDiagnosisTransfer,
  type SiteAidPreDiagnosisStatus,
} from "@/lib/site-aid-prediagnosis";

const QUESTIONS = SITE_AID_PREDIAGNOSIS_DEFINITIONS;

const STATUS_OPTIONS: Array<{
  value: SiteAidPreDiagnosisStatus;
  label: string;
  help: string;
}> = [
  {
    value: "documented",
    label: "Oui documenté",
    help: "Une pièce actuelle et vérifiable est sous la main.",
  },
  {
    value: "confirm",
    label: "À confirmer",
    help: "La réponse ou la preuve manque encore.",
  },
  {
    value: "no",
    label: "Non",
    help: "Le critère n’est pas rempli dans la situation actuelle.",
  },
];

function initialAnswers(): Record<string, SiteAidPreDiagnosisStatus> {
  return Object.fromEntries(
    QUESTIONS.map((question) => [question.id, "confirm"]),
  );
}

export function SiteAidPreDiagnosis() {
  const [answers, setAnswers] =
    useState<Record<string, SiteAidPreDiagnosisStatus>>(initialAnswers);
  const [declaredEvidence, setDeclaredEvidence] = useState<
    Record<string, string>
  >({});
  const [transferMessage, setTransferMessage] = useState("");
  const [hasUntransferredChanges, setHasUntransferredChanges] = useState(false);
  const dirtyEventSentRef = useRef(false);

  useEffect(() => {
    if (!hasUntransferredChanges) return;
    const warnBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = "";
    };
    window.addEventListener("beforeunload", warnBeforeUnload);
    return () => window.removeEventListener("beforeunload", warnBeforeUnload);
  }, [hasUntransferredChanges]);

  const effectiveStatus = (questionId: string): SiteAidPreDiagnosisStatus =>
    answers[questionId] === "documented" &&
    !(declaredEvidence[questionId] ?? "").trim()
      ? "confirm"
      : answers[questionId];
  const documentedQuestions = QUESTIONS.filter(
    (question) => effectiveStatus(question.id) === "documented",
  );
  const questionsToConfirm = QUESTIONS.filter(
    (question) => effectiveStatus(question.id) === "confirm",
  );
  const negativeQuestions = QUESTIONS.filter(
    (question) => effectiveStatus(question.id) === "no",
  );
  const piecesToSecure = QUESTIONS.filter(
    (question) => effectiveStatus(question.id) !== "documented",
  );

  function transferToDossier() {
    const transfer = createSiteAidPreDiagnosisTransfer(
      answers,
      declaredEvidence,
      new Date().toISOString(),
    );
    window.dispatchEvent(
      new CustomEvent(SITE_AID_PREDIAGNOSIS_TRANSFER_EVENT, {
        detail: transfer,
      }),
    );
    dirtyEventSentRef.current = false;
    setHasUntransferredChanges(false);
    setTransferMessage(
      `${QUESTIONS.length} réponses transférées localement. Elles restent déclaratives et chaque détail ou preuve doit encore être confirmé dans le dossier.`,
    );
  }

  function markPrediagnosisDirty(questionId: string) {
    if (!dirtyEventSentRef.current) {
      window.dispatchEvent(
        new CustomEvent(SITE_AID_PREDIAGNOSIS_DIRTY_EVENT, {
          detail: { questionId },
        }),
      );
      dirtyEventSentRef.current = true;
    }
    setHasUntransferredChanges(true);
    setTransferMessage("");
  }

  const outcome =
    negativeQuestions.length > 0
      ? {
          title: "Piste à écarter ou à redéfinir avant instruction",
          nextAction:
            "Traitez d’abord chaque point marqué « non ». Ne signez et ne budgétez aucune aide sur la base de cette piste.",
          tone: "border-red-300 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950/30 dark:text-red-100",
        }
      : questionsToConfirm.length > 0
        ? {
            title: "Instruction suspendue : preuves à obtenir",
            nextAction:
              "Demandez les confirmations écrites listées ci-dessous et gardez l’aide à 0 € dans le budget.",
            tone: "border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-100",
          }
        : {
            title: "Piste à instruire, sans verdict d’éligibilité",
            nextAction:
              "Reprenez les quatorze contrôles dans le dossier complet, vérifiez les données conditionnelles, puis lancez son analyse.",
            tone: "border-emerald-300 bg-emerald-50 text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-100",
          };

  const liveMessage = hasUntransferredChanges
    ? `${outcome.title}. ${documentedQuestions.length} oui documenté, ${questionsToConfirm.length} à confirmer, ${negativeQuestions.length} non. Modifications non transférées.`
    : transferMessage
      ? "Prédiagnostic transféré vers le dossier. Aucune modification non transférée ne subsiste."
      : "";

  return (
    <section
      aria-labelledby="prediagnostic-aide-site"
      className="not-prose my-8 overflow-hidden rounded-2xl border border-violet-200 bg-white shadow-sm dark:border-violet-900 dark:bg-zinc-950"
    >
      <div className="border-b border-violet-200 bg-violet-50 px-4 py-5 dark:border-violet-900 dark:bg-violet-950/30 sm:px-6">
        <p className="m-0 text-xs font-black uppercase tracking-[0.14em] text-violet-700 dark:text-violet-300">
          Prédiagnostic d’orientation · repère de 10 à 15 minutes
        </p>
        <h3
          id="prediagnostic-aide-site"
          className="mb-0 mt-2 text-xl font-black text-zinc-950 dark:text-white sm:text-2xl"
        >
          Quatorze sous-critères pour décider si la piste mérite un dossier
        </h3>
        <p className="mb-0 mt-3 max-w-3xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          Choisissez « oui documenté », « à confirmer » ou « non ». Par
          prudence, les quatorze réponses commencent à « à confirmer » : une
          intuition, une publicité ou une ancienne fiche ne devient jamais une
          preuve. Ce prédiagnostic oriente le travail ; il ne rend aucun verdict
          d’éligibilité.
        </p>
      </div>

      <div className="space-y-5 p-4 sm:p-6">
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/60">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="m-0 text-sm font-bold text-zinc-950 dark:text-white">
              Progression : {documentedQuestions.length} preuve
              {documentedQuestions.length === 1 ? "" : "s"} documentée
              {documentedQuestions.length === 1 ? "" : "s"} sur{" "}
              {QUESTIONS.length}
            </p>
            <p className="m-0 text-xs text-zinc-600 dark:text-zinc-400">
              {documentedQuestions.length} oui documenté
              {documentedQuestions.length === 1 ? "" : "s"} ·{" "}
              {questionsToConfirm.length} à confirmer ·{" "}
              {negativeQuestions.length} non
            </p>
          </div>
          <progress
            className="mt-3 h-2 w-full accent-violet-700"
            value={documentedQuestions.length}
            max={QUESTIONS.length}
            aria-label={`${documentedQuestions.length} preuves documentées sur ${QUESTIONS.length}`}
          />
        </div>

        <div className="space-y-4">
          {QUESTIONS.map((question, index) => (
            <fieldset
              key={question.id}
              className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800"
              aria-describedby={`site-aid-prediagnosis-${question.id}-question`}
            >
              <legend className="px-1 text-sm font-black text-zinc-950 dark:text-white sm:text-base">
                {index + 1}. {question.label}
              </legend>
              <p
                id={`site-aid-prediagnosis-${question.id}-question`}
                className="mb-4 mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300"
              >
                {question.question}
              </p>
              <div className="grid gap-2 sm:grid-cols-3">
                {STATUS_OPTIONS.map((option) => {
                  const inputId = `site-aid-prediagnosis-${question.id}-${option.value}`;
                  return (
                    <label
                      key={option.value}
                      htmlFor={inputId}
                      className={`block cursor-pointer rounded-lg border p-3 transition focus-within:ring-2 focus-within:ring-violet-500 focus-within:ring-offset-2 dark:focus-within:ring-offset-zinc-950 ${
                        answers[question.id] === option.value
                          ? "border-violet-500 bg-violet-50 dark:border-violet-600 dark:bg-violet-950/40"
                          : "border-zinc-200 bg-white hover:border-violet-300 dark:border-zinc-700 dark:bg-zinc-950"
                      }`}
                    >
                      <span className="flex items-start gap-2">
                        <input
                          id={inputId}
                          type="radio"
                          name={`site-aid-prediagnosis-${question.id}`}
                          value={option.value}
                          checked={answers[question.id] === option.value}
                          onChange={() => {
                            setAnswers((current) => ({
                              ...current,
                              [question.id]: option.value,
                            }));
                            markPrediagnosisDirty(question.id);
                          }}
                          className="mt-0.5 size-4 shrink-0 accent-violet-700"
                        />
                        <span>
                          <span className="block text-sm font-bold text-zinc-950 dark:text-white">
                            {option.label}
                          </span>
                          <span className="mt-1 block text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                            {option.help}
                          </span>
                        </span>
                      </span>
                    </label>
                  );
                })}
              </div>
              <label
                htmlFor={`site-aid-prediagnosis-${question.id}-evidence`}
                className="mt-3 block text-xs font-bold leading-relaxed text-zinc-800 dark:text-zinc-200"
              >
                Référence ou preuve déclarée — à confirmer
                <textarea
                  id={`site-aid-prediagnosis-${question.id}-evidence`}
                  rows={2}
                  maxLength={SITE_AID_PREDIAGNOSIS_MAX_EVIDENCE_LENGTH}
                  value={declaredEvidence[question.id] ?? ""}
                  onChange={(event) => {
                    setDeclaredEvidence((current) => ({
                      ...current,
                      [question.id]: event.target.value,
                    }));
                    markPrediagnosisDirty(question.id);
                  }}
                  aria-invalid={
                    answers[question.id] === "documented" &&
                    !(declaredEvidence[question.id] ?? "").trim()
                      ? true
                      : undefined
                  }
                  aria-describedby={`site-aid-prediagnosis-${question.id}-evidence-help${
                    answers[question.id] === "documented" &&
                    !(declaredEvidence[question.id] ?? "").trim()
                      ? ` site-aid-prediagnosis-${question.id}-evidence-required`
                      : ""
                  }`}
                  className="mt-1.5 min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-950 shadow-sm outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/25 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
                  placeholder="URL, article, courriel ou référence interne ; ne saisissez pas de donnée personnelle."
                />
                <span
                  id={`site-aid-prediagnosis-${question.id}-evidence-help`}
                  className="mt-1 block text-[11px] font-normal text-zinc-500 dark:text-zinc-400"
                >
                  Pièce attendue : {question.evidenceToConfirm}
                </span>
                {answers[question.id] === "documented" &&
                !(declaredEvidence[question.id] ?? "").trim() ? (
                  <span
                    id={`site-aid-prediagnosis-${question.id}-evidence-required`}
                    className="mt-1 block text-[11px] font-bold text-rose-700 dark:text-rose-300"
                  >
                    Ajoutez une référence de preuve pour compter cette réponse
                    comme « oui documenté » ; sinon elle reste « à confirmer ».
                  </span>
                ) : null}
              </label>
            </fieldset>
          ))}
        </div>

        <div className={`rounded-xl border p-4 sm:p-5 ${outcome.tone}`}>
          <p className="m-0 text-base font-black">
            {outcome.title}. Résumé : {documentedQuestions.length} oui documenté
            {documentedQuestions.length === 1 ? "" : "s"},{" "}
            {questionsToConfirm.length} à confirmer, {negativeQuestions.length}{" "}
            non.
          </p>
          <p className="mb-0 mt-2 text-sm leading-relaxed">
            <strong>Prochaine action :</strong> {outcome.nextAction}
          </p>

          {negativeQuestions.length > 0 ? (
            <>
              <p className="mb-0 mt-4 text-sm font-black">
                Actions ciblées pour redéfinir la piste
              </p>
              <ul className="mb-0 mt-2 space-y-2 pl-5 text-sm">
                {negativeQuestions.map((question) => (
                  <li key={question.id}>
                    <strong>{question.label.replace(/^\d+\.\s*/, "")} :</strong>{" "}
                    {question.negativeAction}
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          {piecesToSecure.length > 0 ? (
            <>
              <p className="mb-0 mt-4 text-sm font-black">
                {negativeQuestions.length > 0
                  ? "Pièces à obtenir pour redéfinir ou confirmer la piste"
                  : "Preuves exactes à obtenir"}
              </p>
              <ul className="mb-0 mt-2 space-y-2 pl-5 text-sm">
                {piecesToSecure.map((question) => (
                  <li key={question.id}>
                    <strong>{question.label.replace(/^\d+\.\s*/, "")} :</strong>{" "}
                    {question.evidenceToConfirm}
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          {questionsToConfirm.length === 0 && negativeQuestions.length === 0 ? (
            <>
              <p className="mb-0 mt-4 text-sm font-black">
                Pièces déclarées disponibles à reprendre
              </p>
              <ul className="mb-0 mt-2 space-y-2 pl-5 text-sm">
                {QUESTIONS.map((question) => (
                  <li key={question.id}>{question.evidenceToConfirm}</li>
                ))}
              </ul>
              <a
                href="#site-aid-decision-dossier"
                className="mt-4 inline-flex min-h-11 items-center rounded-lg bg-emerald-800 px-4 py-2.5 text-sm font-bold text-white underline-offset-4 hover:bg-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2 dark:bg-emerald-700 dark:hover:bg-emerald-600"
              >
                Ouvrir le dossier à instruire
              </a>
            </>
          ) : null}

          <button
            id="site-aid-prediagnosis-transfer-button"
            type="button"
            onClick={transferToDossier}
            className="mt-4 inline-flex min-h-11 items-center rounded-lg bg-violet-800 px-4 py-2.5 text-sm font-bold text-white hover:bg-violet-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-700 focus-visible:ring-offset-2 dark:bg-violet-700 dark:hover:bg-violet-600"
          >
            Transférer mes réponses vers le dossier
          </button>
          <p
            className="mb-0 mt-2 text-xs font-semibold"
            data-site-aid-prediagnosis-unsaved-status={
              hasUntransferredChanges ? "unsent" : "aligned"
            }
          >
            {hasUntransferredChanges
              ? "Modifications non transférées — la fermeture de la page déclenchera l’avertissement natif du navigateur."
              : transferMessage ||
                "Aucune modification non transférée vers le dossier."}
          </p>
          <p
            className="sr-only"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            {liveMessage}
          </p>
        </div>

        <p className="m-0 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
          Toutes les réponses restent dans la mémoire de cet onglet : aucune
          donnée n’est envoyée, enregistrée, persistée ou transmise par le
          réseau. Recharger ou fermer la page efface ce prédiagnostic.
        </p>
      </div>
    </section>
  );
}
