"use client";

import { useMemo, useState } from "react";
import {
  Check,
  Clipboard,
  FileSearch,
  Printer,
  ShieldCheck,
} from "lucide-react";

export type DiagnosticAnswer = "unknown" | "yes" | "no";

export type DiagnosticOrientation =
  | "secure"
  | "simplify"
  | "configure"
  | "connect"
  | "standard"
  | "custom"
  | "observe";

export interface SituationDiagnostic {
  name: string;
  expected: string;
  observed: string;
  periodAndFrequency: string;
  consequence: string;
  peopleAndTools: string;
  workaroundAndAttempts: string;
  securityRisk: DiagnosticAnswer;
  repeated: DiagnosticAnswer;
  stableRules: DiagnosticAnswer;
  removableStep: DiagnosticAnswer;
  existingToolTested: DiagnosticAnswer;
  transferIsProblem: DiagnosticAnswer;
  standardTested: DiagnosticAnswer;
  standardFits: DiagnosticAnswer;
  namedOwner: DiagnosticAnswer;
}

export interface SituationOrientationResult {
  orientation: DiagnosticOrientation;
  label: string;
  explanation: string;
  nextQuestion: string;
}

type OrientationCopy = Omit<SituationOrientationResult, "orientation">;

export const EMPTY_SITUATION: SituationDiagnostic = {
  name: "",
  expected: "",
  observed: "",
  periodAndFrequency: "",
  consequence: "",
  peopleAndTools: "",
  workaroundAndAttempts: "",
  securityRisk: "unknown",
  repeated: "unknown",
  stableRules: "unknown",
  removableStep: "unknown",
  existingToolTested: "unknown",
  transferIsProblem: "unknown",
  standardTested: "unknown",
  standardFits: "unknown",
  namedOwner: "unknown",
};

const ORIENTATION_COPY: Record<DiagnosticOrientation, OrientationCopy> = {
  secure: {
    label: "1 · Sécuriser la continuité et les accès",
    explanation:
      "Le risque pour les données, les droits d’accès ou la continuité passe avant le choix d’un nouvel outil.",
    nextQuestion:
      "Qui sécurise, qui reçoit l’alerte et comment l’équipe reprend-elle le travail aujourd’hui ?",
  },
  simplify: {
    label: "2 · Supprimer ou simplifier l’étape",
    explanation:
      "Une étape inutile ou trop compliquée ne gagne pas à être reproduite dans un logiciel.",
    nextQuestion:
      "Quelle validation, saisie ou transmission peut disparaître sans dégrader le résultat attendu ?",
  },
  configure: {
    label: "3 · Configurer l’outil actuel et former",
    explanation:
      "L’outil en place n’a pas encore été testé avec sa fonction, son paramétrage ou son mode d’emploi adapté.",
    nextQuestion:
      "Quelle fonction existante faut-il essayer sur trois cas réels, avec quel critère de réussite ?",
  },
  connect: {
    label: "4 · Connecter ou automatiser de façon limitée",
    explanation:
      "Les outils peuvent rester utiles chacun de leur côté ; le point à tester est le transfert répétitif entre eux.",
    nextQuestion:
      "Quel échange précis peut être limité, surveillé, annulé et repris manuellement ?",
  },
  standard: {
    label: "5 · Adopter un logiciel standard",
    explanation:
      "Le logiciel standard essayé couvre les situations observées et leurs exceptions importantes ; son adoption est raisonnable sous réserve des accès, de la reprise, de l’export, du support et du coût réel.",
    nextQuestion:
      "Quelles réserves devez-vous encore lever avant l’adoption sur les accès, la reprise, l’export, le support et le coût réel ?",
  },
  custom: {
    label: "6 · Étudier une fonction sur mesure",
    explanation:
      "Le besoin paraît répété et stable, les réponses plus simples ont été examinées, et un responsable métier peut porter un pilote.",
    nextQuestion:
      "Sur quel périmètre minimal et réversible pouvez-vous tester le résultat sans engager tout le processus ?",
  },
  observe: {
    label: "OBSERVER · compléter les faits avant d’investir",
    explanation:
      "Il manque encore des faits pour départager les six réponses. Observer n’est pas une septième solution : c’est un verdict de diagnostic.",
    nextQuestion:
      "Quel fait manque : répétition, conséquence, stabilité, essai de l’existant, comparaison standard ou responsable ?",
  },
};

const STANDARD_TEST_COPY: OrientationCopy = {
  label: "5 · Tester un logiciel standard",
  explanation:
    "Aucun logiciel standard plausible n’a encore été essayé sur les trois situations. Cette orientation demande un test sans présumer de son adoption.",
  nextQuestion:
    "Quel logiciel standard allez-vous tester sur les trois situations, leurs exceptions, les droits d’accès, la reprise et l’export ?",
};

const STANDARD_WITHOUT_OWNER_COPY: OrientationCopy = {
  label: "OBSERVER · nommer un responsable avant le sur-mesure",
  explanation:
    "Le logiciel standard testé ne couvre pas les situations importantes, mais aucun responsable métier ne peut encore décider des règles ni arrêter un pilote.",
  nextQuestion:
    "Qui peut accepter le résultat, arbitrer les règles et arrêter le pilote si les critères ne sont pas atteints ?",
};

function standardContradictionCopy(
  standardFits: Exclude<DiagnosticAnswer, "unknown">,
): OrientationCopy {
  const statedFit = standardFits === "yes" ? "déjà adapté" : "déjà inadapté";

  return {
    label: "OBSERVER · vérifier la comparaison standard",
    explanation: `Le logiciel standard est déclaré non testé mais ${statedFit}. Ces réponses se contredisent : sa couverture reste à vérifier par un essai sur les trois situations.`,
    nextQuestion:
      "Quel essai réel permet de vérifier la couverture du résultat attendu et des exceptions importantes ?",
  };
}

function hasUnknown(
  situation: SituationDiagnostic,
  keys: Array<keyof SituationDiagnostic>,
) {
  return keys.some((key) => situation[key] === "unknown");
}

const REQUIRED_FACT_FIELDS: Array<
  keyof Pick<
    SituationDiagnostic,
    | "name"
    | "expected"
    | "observed"
    | "periodAndFrequency"
    | "consequence"
    | "peopleAndTools"
    | "workaroundAndAttempts"
  >
> = [
  "name",
  "expected",
  "observed",
  "periodAndFrequency",
  "consequence",
  "peopleAndTools",
  "workaroundAndAttempts",
];

function hasMissingRequiredFact(situation: SituationDiagnostic) {
  return REQUIRED_FACT_FIELDS.some((key) => !situation[key].trim());
}

/**
 * Orientation éditoriale transparente, sans score ni pondération cachée.
 * L'ordre est volontaire : sécurité, qualité des faits, suppression,
 * correction de l'existant, connexion, standard, puis seulement sur-mesure.
 */
export function orientSituation(
  situation: SituationDiagnostic,
): SituationOrientationResult {
  let orientation: DiagnosticOrientation;
  let copyOverride: OrientationCopy | undefined;

  if (situation.securityRisk === "yes") {
    orientation = "secure";
  } else if (
    hasMissingRequiredFact(situation) ||
    hasUnknown(situation, ["securityRisk", "repeated", "stableRules"]) ||
    situation.repeated === "no" ||
    situation.stableRules === "no"
  ) {
    orientation = "observe";
  } else if (situation.removableStep === "yes") {
    orientation = "simplify";
  } else if (situation.removableStep === "unknown") {
    orientation = "observe";
  } else if (situation.existingToolTested === "no") {
    orientation = "configure";
  } else if (situation.existingToolTested === "unknown") {
    orientation = "observe";
  } else if (situation.transferIsProblem === "yes") {
    orientation = "connect";
  } else if (situation.transferIsProblem === "unknown") {
    orientation = "observe";
  } else if (situation.standardTested === "no") {
    if (situation.standardFits === "unknown") {
      orientation = "standard";
      copyOverride = STANDARD_TEST_COPY;
    } else {
      orientation = "observe";
      copyOverride = standardContradictionCopy(situation.standardFits);
    }
  } else if (situation.standardTested === "unknown") {
    orientation = "observe";
  } else if (situation.standardFits === "yes") {
    orientation = "standard";
  } else if (situation.standardFits === "unknown") {
    orientation = "observe";
  } else if (situation.namedOwner === "yes") {
    orientation = "custom";
  } else if (situation.namedOwner === "no") {
    orientation = "observe";
    copyOverride = STANDARD_WITHOUT_OWNER_COPY;
  } else {
    orientation = "observe";
  }

  return {
    orientation,
    ...(copyOverride ?? ORIENTATION_COPY[orientation]),
  };
}

const ANSWER_OPTIONS: Array<{
  value: DiagnosticAnswer;
  label: string;
}> = [
  { value: "unknown", label: "À vérifier" },
  { value: "yes", label: "Oui" },
  { value: "no", label: "Non" },
];

const DIAGNOSTIC_QUESTIONS: Array<{
  key: keyof Pick<
    SituationDiagnostic,
    | "securityRisk"
    | "repeated"
    | "stableRules"
    | "removableStep"
    | "existingToolTested"
    | "transferIsProblem"
    | "standardTested"
    | "standardFits"
    | "namedOwner"
  >;
  label: string;
  help: string;
}> = [
  {
    key: "securityRisk",
    label:
      "Une panne, une absence, un accès ou une perte de données peut-il arrêter ou compromettre le travail ?",
    help: "Incluez la restauration impossible, le compte partagé et l’action importante non traçable.",
  },
  {
    key: "repeated",
    label: "La situation s’est-elle répétée sur la période observée ?",
    help: "Un incident isolé ou un pic temporaire ne suffit pas à définir un besoin durable.",
  },
  {
    key: "stableRules",
    label:
      "Le résultat attendu et les principales règles sont-ils assez stables ?",
    help: "Si l’équipe redéfinit encore le travail, observez avant de figer une solution.",
  },
  {
    key: "removableStep",
    label: "L’étape gênante peut-elle être supprimée ou simplifiée ?",
    help: "Une validation, un fichier ou une saisie existe parfois seulement par habitude.",
  },
  {
    key: "existingToolTested",
    label:
      "Une fonction, un paramétrage ou une formation de l’outil actuel a-t-il été testé sur des cas réels ?",
    help: "Une recherche rapide dans les menus n’est pas encore un essai conclu.",
  },
  {
    key: "transferIsProblem",
    label:
      "Le blocage vient-il surtout du transfert répété entre deux outils qui conviennent pour le reste ?",
    help: "Exemple : recopier un identifiant et un statut entre devis et facturation.",
  },
  {
    key: "standardTested",
    label:
      "Un logiciel standard plausible a-t-il été démontré ou essayé sur vos trois situations ?",
    help: "Comparez aussi les droits, la reprise, l’export et le coût au volume réel.",
  },
  {
    key: "standardFits",
    label:
      "Ce logiciel standard couvre-t-il le résultat attendu et les exceptions importantes ?",
    help: "Répondez « à vérifier » si l’essai n’a pas encore été fait.",
  },
  {
    key: "namedOwner",
    label:
      "Une personne peut-elle décider des règles, accepter le résultat et arrêter un pilote ?",
    help: "Sans responsable métier, un développement spécifique est prématuré.",
  },
];

const TEXT_FIELDS: Array<{
  key: keyof Pick<
    SituationDiagnostic,
    | "name"
    | "expected"
    | "observed"
    | "periodAndFrequency"
    | "consequence"
    | "peopleAndTools"
    | "workaroundAndAttempts"
  >;
  label: string;
  placeholder: string;
  rows?: number;
}> = [
  {
    key: "name",
    label: "Travail à accomplir",
    placeholder: "Ex. préparer une intervention avant le départ du technicien",
  },
  {
    key: "expected",
    label: "Résultat attendu",
    placeholder: "Ce qui devait être disponible, correct ou validé",
    rows: 2,
  },
  {
    key: "observed",
    label: "Ce qui s’est réellement passé",
    placeholder: "Décrivez un fait datable, pas « l’outil est mauvais »",
    rows: 3,
  },
  {
    key: "periodAndFrequency",
    label: "Période observée et fréquence",
    placeholder: "Ex. quatre fois entre le 1er et le 20 juillet",
  },
  {
    key: "consequence",
    label: "Conséquence et personnes touchées",
    placeholder: "Retard, reprise, erreur, attente, client ou équipe concernés",
    rows: 2,
  },
  {
    key: "peopleAndTools",
    label: "Personnes, fichiers et outils concernés",
    placeholder:
      "Rôles et outils utiles, sans nom, donnée personnelle, secret ni identifiant d’accès",
    rows: 2,
  },
  {
    key: "workaroundAndAttempts",
    label: "Contournement et corrections déjà essayées",
    placeholder: "Ce que l’équipe fait aujourd’hui et ce qui a déjà été testé",
    rows: 2,
  },
];

function answerLabel(answer: DiagnosticAnswer) {
  return ANSWER_OPTIONS.find((option) => option.value === answer)?.label;
}

export function buildDiagnosticSummary(
  situations: SituationDiagnostic[],
): string {
  return situations
    .map((situation, index) => {
      const result = orientSituation(situation);
      const facts = [
        `SITUATION ${index + 1} — ${situation.name || "à nommer"}`,
        `Résultat attendu : ${situation.expected || "à compléter"}`,
        `Fait observé : ${situation.observed || "à compléter"}`,
        `Période et fréquence : ${situation.periodAndFrequency || "à compléter"}`,
        `Conséquence / personnes : ${situation.consequence || "à compléter"}`,
        `Personnes / outils : ${situation.peopleAndTools || "à compléter"}`,
        `Contournement / essais : ${situation.workaroundAndAttempts || "à compléter"}`,
        "",
        "Questions de diagnostic :",
        ...DIAGNOSTIC_QUESTIONS.map(
          (question) =>
            `- ${question.label} ${answerLabel(situation[question.key])}`,
        ),
        "",
        `Orientation de préparation : ${result.label}`,
        `Pourquoi : ${result.explanation}`,
        `Prochaine question : ${result.nextQuestion}`,
      ];

      return facts.join("\n");
    })
    .join("\n\n----------------------------------------\n\n");
}

const ORIENTATION_STYLES: Record<DiagnosticOrientation, string> = {
  secure:
    "border-rose-200 bg-rose-50 text-rose-950 dark:border-rose-900 dark:bg-rose-950/30 dark:text-rose-100",
  simplify:
    "border-sky-200 bg-sky-50 text-sky-950 dark:border-sky-900 dark:bg-sky-950/30 dark:text-sky-100",
  configure:
    "border-violet-200 bg-violet-50 text-violet-950 dark:border-violet-900 dark:bg-violet-950/30 dark:text-violet-100",
  connect:
    "border-cyan-200 bg-cyan-50 text-cyan-950 dark:border-cyan-900 dark:bg-cyan-950/30 dark:text-cyan-100",
  standard:
    "border-emerald-200 bg-emerald-50 text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-100",
  custom:
    "border-indigo-200 bg-indigo-50 text-indigo-950 dark:border-indigo-900 dark:bg-indigo-950/30 dark:text-indigo-100",
  observe:
    "border-amber-200 bg-amber-50 text-amber-950 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-100",
};

export function SituationDiagnosticTool() {
  const [situations, setSituations] = useState<SituationDiagnostic[]>(() =>
    Array.from({ length: 3 }, () => ({ ...EMPTY_SITUATION })),
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [copyStatus, setCopyStatus] = useState("");

  const orientations = useMemo(
    () => situations.map(orientSituation),
    [situations],
  );
  const active = situations[activeIndex];
  const activeOrientation = orientations[activeIndex];

  const updateActive = <Key extends keyof SituationDiagnostic>(
    key: Key,
    value: SituationDiagnostic[Key],
  ) => {
    setSituations((current) =>
      current.map((situation, index) =>
        index === activeIndex ? { ...situation, [key]: value } : situation,
      ),
    );
    setCopyStatus("");
  };

  const fallbackCopy = (text: string) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.inset = "0 auto auto 0";
    textarea.style.opacity = "0";
    document.body.append(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    textarea.remove();
    return copied;
  };

  const copySummary = async () => {
    const summary = buildDiagnosticSummary(situations);
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard API unavailable");
      }
      await navigator.clipboard.writeText(summary);
      setCopyStatus("Synthèse copiée. Relisez-la avant de la partager.");
    } catch {
      try {
        if (fallbackCopy(summary)) {
          setCopyStatus("Synthèse copiée. Relisez-la avant de la partager.");
          return;
        }
      } catch {
        // Le message ci-dessous conserve une sortie utilisable si le navigateur
        // bloque aussi la méthode de compatibilité.
      }
      setCopyStatus(
        "La copie automatique est indisponible. Utilisez l’impression ou copiez les champs visibles.",
      );
    }
  };

  return (
    <section
      aria-labelledby="diagnostic-title"
      className="not-prose my-8 overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70"
    >
      <div className="border-b border-zinc-200 bg-white p-5 print:hidden dark:border-zinc-800 dark:bg-zinc-950 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-700 dark:text-indigo-300">
            <FileSearch className="size-4" aria-hidden="true" />
            Fiche locale · aucun envoi
          </p>
          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-200">
            3 situations réelles
          </span>
        </div>
        <h3
          id="diagnostic-title"
          className="mt-3 text-2xl font-bold tracking-tight text-zinc-950 dark:text-white"
        >
          Préparer le diagnostic sans choisir l’outil à l’avance
        </h3>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          Notez des faits ordinaires, sans nom de client, mot de passe, donnée
          personnelle ou information confidentielle. Tout reste dans cette page
          : ce composant n’envoie ni n’enregistre vos réponses.
        </p>
      </div>

      <div className="border-b border-zinc-200 bg-zinc-100/70 px-3 py-3 print:hidden dark:border-zinc-800 dark:bg-zinc-900 sm:px-5">
        <div
          role="group"
          aria-label="Choisir la situation à documenter"
          className="grid grid-cols-1 gap-2 sm:grid-cols-3"
        >
          {situations.map((situation, index) => {
            const isActive = index === activeIndex;
            const result = orientations[index];
            return (
              <button
                key={index}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveIndex(index)}
                className={`min-h-14 rounded-xl border px-3 py-2.5 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 ${
                  isActive
                    ? "border-indigo-500 bg-white shadow-sm dark:bg-zinc-950"
                    : "border-zinc-200 bg-white/70 hover:border-indigo-300 dark:border-zinc-700 dark:bg-zinc-950/60"
                }`}
              >
                <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400">
                  Situation {index + 1}
                </span>
                <span className="mt-1 block truncate text-sm font-semibold text-zinc-950 dark:text-white">
                  {situation.name || "À documenter"}
                </span>
                <span className="mt-1 block truncate text-[11px] text-zinc-600 dark:text-zinc-300">
                  {result.orientation === "observe"
                    ? "Faits à compléter"
                    : result.label.replace(/^\d · /, "")}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-8 p-5 print:hidden sm:p-7 xl:grid-cols-[1.08fr_0.92fr]">
        <div>
          <fieldset>
            <legend className="text-base font-bold text-zinc-950 dark:text-white">
              1. Décrire le travail réel
            </legend>
            <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              Une situation précise vaut mieux qu’une moyenne reconstituée de
              mémoire.
            </p>
            <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              Hors urgence de sécurité, un champ factuel vide conserve le
              verdict OBSERVER : les neuf réponses ne remplacent pas la
              description du travail réel.
            </p>
            <div className="mt-4 grid gap-4">
              {TEXT_FIELDS.map((field) => (
                <label key={field.key} className="block">
                  <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                    {field.label}
                  </span>
                  {field.rows ? (
                    <textarea
                      value={active[field.key]}
                      rows={field.rows}
                      onChange={(event) =>
                        updateActive(field.key, event.target.value)
                      }
                      placeholder={field.placeholder}
                      className="mt-1.5 block w-full resize-y rounded-xl border border-zinc-300 bg-white px-3.5 py-3 text-base sm:text-sm leading-relaxed text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:placeholder:text-zinc-500"
                    />
                  ) : (
                    <input
                      value={active[field.key]}
                      onChange={(event) =>
                        updateActive(field.key, event.target.value)
                      }
                      placeholder={field.placeholder}
                      className="mt-1.5 block min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3.5 py-2.5 text-base sm:text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:placeholder:text-zinc-500"
                    />
                  )}
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <div>
          <fieldset>
            <legend className="text-base font-bold text-zinc-950 dark:text-white">
              2. Répondre sans forcer une conclusion
            </legend>
            <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              « À vérifier » conserve l’inconnue. L’outil n’ajoute aucun point
              et ne calcule aucune moyenne.
            </p>
            <div className="mt-4 space-y-3">
              {DIAGNOSTIC_QUESTIONS.map((question) => (
                <label
                  key={question.key}
                  className="block rounded-xl border border-zinc-200 bg-white p-3.5 dark:border-zinc-700 dark:bg-zinc-950"
                >
                  <span className="block text-xs font-semibold leading-relaxed text-zinc-800 dark:text-zinc-200">
                    {question.label}
                  </span>
                  <span className="mt-1 block text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {question.help}
                  </span>
                  <select
                    value={active[question.key]}
                    onChange={(event) =>
                      updateActive(
                        question.key,
                        event.target.value as DiagnosticAnswer,
                      )
                    }
                    className="mt-2.5 min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-base sm:text-sm font-medium text-zinc-950 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                  >
                    {ANSWER_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>
              ))}
            </div>
          </fieldset>

          <div
            aria-live="polite"
            className={`mt-5 rounded-2xl border p-5 ${ORIENTATION_STYLES[activeOrientation.orientation]}`}
          >
            <div className="flex items-start gap-3">
              {activeOrientation.orientation === "secure" ? (
                <ShieldCheck
                  className="mt-0.5 size-5 shrink-0"
                  aria-hidden="true"
                />
              ) : activeOrientation.orientation === "observe" ? (
                <FileSearch
                  className="mt-0.5 size-5 shrink-0"
                  aria-hidden="true"
                />
              ) : (
                <Check className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
              )}
              <div>
                <p className="text-sm font-bold">{activeOrientation.label}</p>
                <p className="mt-2 text-sm leading-relaxed opacity-90">
                  {activeOrientation.explanation}
                </p>
                <p className="mt-3 text-xs font-semibold leading-relaxed">
                  Question suivante : {activeOrientation.nextQuestion}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        data-testid="three-situations-print-summary"
        className="hidden bg-white p-6 text-zinc-950 print:block"
      >
        <h3 className="text-xl font-bold">
          Diagnostic préparatoire — trois situations réelles
        </h3>
        <p className="mt-2 text-sm">
          Document préparatoire. Relisez-le et retirez toute donnée personnelle,
          information confidentielle, secret d’affaires ou identifiant d’accès
          avant partage. Les orientations ne remplacent ni audit de sécurité ni
          étude de faisabilité.
        </p>
        <div className="mt-6 space-y-8">
          {situations.map((situation, index) => {
            const result = orientations[index];
            return (
              <section
                key={index}
                className="break-inside-avoid border-t border-zinc-300 pt-4"
              >
                <h4 className="text-base font-bold">
                  Situation {index + 1} — {situation.name || "à nommer"}
                </h4>
                <dl className="mt-3 grid gap-2 text-sm">
                  {[
                    ["Résultat attendu", situation.expected],
                    ["Fait observé", situation.observed],
                    ["Période et fréquence", situation.periodAndFrequency],
                    ["Conséquence / personnes", situation.consequence],
                    ["Personnes / outils", situation.peopleAndTools],
                    ["Contournement / essais", situation.workaroundAndAttempts],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <dt className="font-semibold">{label}</dt>
                      <dd>{value || "À compléter"}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-4">
                  <p className="text-sm font-bold">
                    Réponses brutes aux neuf questions
                  </p>
                  <dl className="mt-2 grid gap-2 text-sm">
                    {DIAGNOSTIC_QUESTIONS.map((question) => (
                      <div key={question.key}>
                        <dt className="font-semibold">{question.label}</dt>
                        <dd>{answerLabel(situation[question.key])}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <p className="mt-4 text-sm font-bold">{result.label}</p>
                <p className="mt-1 text-sm">{result.explanation}</p>
                <p className="mt-1 text-sm">
                  Question suivante : {result.nextQuestion}
                </p>
              </section>
            );
          })}
        </div>
      </div>

      <div className="border-t border-zinc-200 bg-white p-5 print:hidden dark:border-zinc-800 dark:bg-zinc-950 sm:p-7">
        <p className="text-sm font-bold text-zinc-950 dark:text-white">
          Gardez vos trois fiches pour la prochaine décision
        </p>
        <p className="mt-1 max-w-3xl text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
          La synthèse contient vos textes et les règles visibles ci-dessus.
          Relisez-la et retirez toute donnée personnelle, information
          confidentielle, secret d’affaires ou identifiant d’accès avant de la
          partager. L’orientation ne remplace ni un audit de sécurité ni une
          étude de faisabilité.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={copySummary}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-zinc-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            <Clipboard className="size-4" aria-hidden="true" />
            Copier les trois situations
          </button>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-800 transition hover:border-indigo-400 hover:text-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
          >
            <Printer className="size-4" aria-hidden="true" />
            Imprimer les trois fiches
          </button>
        </div>
        <p
          aria-live="polite"
          className="mt-3 min-h-5 text-xs font-medium text-zinc-600 dark:text-zinc-300"
        >
          {copyStatus}
        </p>
      </div>
    </section>
  );
}
