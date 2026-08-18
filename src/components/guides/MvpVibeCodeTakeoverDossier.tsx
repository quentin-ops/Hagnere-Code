"use client";

import { useMemo, useState } from "react";
import {
  ClipboardCheck,
  Download,
  FileCheck2,
  RotateCcw,
} from "lucide-react";
import { copyTextToClipboard } from "@/lib/clipboard";
import {
  MVP_VIBE_CODE_MODES,
  MVP_VIBE_CODE_REQUIRED_PROOFS,
  MVP_VIBE_CODE_STAGE_LABELS,
  MVP_VIBE_CODE_TCO_FIELDS,
  MVP_VIBE_CODE_TCO_HORIZONS,
  MVP_VIBE_CODE_TRAJECTORIES,
  MVP_VIBE_CODE_TRAJECTORY_IDS,
  buildMvpVibeCodeFinalDecisionNote,
  buildMvpVibeCodeTakeoverCsv,
  buildMvpVibeCodeTakeoverSummary,
  createEmptyMvpVibeCodeTakeoverDossier,
  createFictitiousMvpVibeCodeTakeoverDossier,
  evaluateMvpVibeCodeTakeover,
  parseMvpVibeCodeDecimal,
  parseMvpVibeCodeInteger,
  type MvpVibeCodeMode,
  type MvpVibeCodeOutageInput,
  type MvpVibeCodeProofEntry,
  type MvpVibeCodeProofStatus,
  type MvpVibeCodeTakeoverDossier,
  type MvpVibeCodeTcoField,
  type MvpVibeCodeTcoInput,
  type MvpVibeCodeTrajectoryId,
} from "@/lib/mvp-vibe-code-takeover";

const INPUT_CLASS =
  "mt-1.5 block min-h-11 w-full min-w-0 rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-left text-sm text-zinc-950 outline-none focus-visible:border-violet-600 focus-visible:ring-2 focus-visible:ring-violet-300 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:focus-visible:ring-violet-800";
const LABEL_CLASS =
  "block min-w-0 text-left text-sm font-semibold text-zinc-800 dark:text-zinc-200";
const HELP_CLASS =
  "mt-1 block text-left text-xs font-normal leading-relaxed text-zinc-500 dark:text-zinc-400";
const BUTTON_CLASS =
  "inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto";

type ExportStatus =
  | "idle"
  | "draft-copied"
  | "final-copied"
  | "csv-downloaded"
  | "blocked-secret"
  | "copy-error";

type RawTco = Record<
  MvpVibeCodeTrajectoryId,
  Record<MvpVibeCodeTcoField, string>
>;

type RawOutage = Record<
  Exclude<
    keyof MvpVibeCodeOutageInput,
    "probabilitySource" | "probabilityDate"
  >,
  string
> & {
  probabilitySource: string;
  probabilityDate: string;
};

const OUTAGE_FIELDS: ReadonlyArray<{
  key: Exclude<
    keyof MvpVibeCodeOutageInput,
    "probabilitySource" | "probabilityDate"
  >;
  label: string;
  suffix: string;
  integer?: boolean;
  help?: string;
}> = [
  {
    key: "outageHours",
    label: "Durée de panne observée ou simulée",
    suffix: "h",
  },
  {
    key: "affectedPeople",
    label: "Personnes réellement affectées",
    suffix: "personnes",
    integer: true,
  },
  {
    key: "loadedHourlyCost",
    label: "Coût horaire chargé",
    suffix: "€/h",
  },
  {
    key: "lostContributionMargin",
    label: "Marge contributive définitivement perdue",
    suffix: "€",
    help: "Ne saisissez pas le chiffre d’affaires ni une vente simplement différée.",
  },
  {
    key: "catchUpCost",
    label: "Rattrapage",
    suffix: "€",
  },
  {
    key: "providerCost",
    label: "Prestataires",
    suffix: "€",
  },
  {
    key: "communicationCost",
    label: "Communication",
    suffix: "€",
  },
  {
    key: "refundsPenalties",
    label: "Remboursements ou pénalités applicables",
    suffix: "€",
  },
  {
    key: "annualProbabilityPercent",
    label: "Probabilité annuelle documentée — facultative",
    suffix: "%",
    help: "Laissez vide si elle n’est pas connue : aucune probabilité implicite ne sera créée.",
  },
];

const money = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 2,
});

function numberToRaw(value: number | null): string {
  return value === null ? "" : String(value);
}

function tcoToRaw(input: MvpVibeCodeTcoInput): RawTco {
  return Object.fromEntries(
    MVP_VIBE_CODE_TRAJECTORY_IDS.map((trajectoryId) => [
      trajectoryId,
      Object.fromEntries(
        MVP_VIBE_CODE_TCO_FIELDS.map((field) => [
          field.key,
          numberToRaw(input[trajectoryId][field.key]),
        ]),
      ),
    ]),
  ) as RawTco;
}

function outageToRaw(input: MvpVibeCodeOutageInput): RawOutage {
  return {
    outageHours: numberToRaw(input.outageHours),
    affectedPeople: numberToRaw(input.affectedPeople),
    loadedHourlyCost: numberToRaw(input.loadedHourlyCost),
    lostContributionMargin: numberToRaw(input.lostContributionMargin),
    catchUpCost: numberToRaw(input.catchUpCost),
    providerCost: numberToRaw(input.providerCost),
    communicationCost: numberToRaw(input.communicationCost),
    refundsPenalties: numberToRaw(input.refundsPenalties),
    annualProbabilityPercent: numberToRaw(input.annualProbabilityPercent),
    probabilitySource: input.probabilitySource,
    probabilityDate: input.probabilityDate,
  };
}

function rawToTco(input: RawTco): MvpVibeCodeTcoInput {
  return Object.fromEntries(
    MVP_VIBE_CODE_TRAJECTORY_IDS.map((trajectoryId) => [
      trajectoryId,
      Object.fromEntries(
        MVP_VIBE_CODE_TCO_FIELDS.map((field) => {
          const parsed = field.integer
            ? parseMvpVibeCodeInteger(input[trajectoryId][field.key])
            : parseMvpVibeCodeDecimal(input[trajectoryId][field.key]);
          return [field.key, parsed.state === "valid" ? parsed.value : null];
        }),
      ),
    ]),
  ) as MvpVibeCodeTcoInput;
}

function rawToOutage(input: RawOutage): MvpVibeCodeOutageInput {
  const values = Object.fromEntries(
    OUTAGE_FIELDS.map((field) => {
      const parsed = field.integer
        ? parseMvpVibeCodeInteger(input[field.key])
        : parseMvpVibeCodeDecimal(input[field.key]);
      return [field.key, parsed.state === "valid" ? parsed.value : null];
    }),
  ) as Pick<
    MvpVibeCodeOutageInput,
    Exclude<
      keyof MvpVibeCodeOutageInput,
      "probabilitySource" | "probabilityDate"
    >
  >;

  return {
    ...values,
    probabilitySource: input.probabilitySource,
    probabilityDate: input.probabilityDate,
  };
}

function cloneProofs(
  proofs: Record<string, MvpVibeCodeProofEntry>,
): Record<string, MvpVibeCodeProofEntry> {
  return Object.fromEntries(
    Object.entries(proofs).map(([id, proof]) => [id, { ...proof }]),
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  help,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "date";
  help?: string;
}) {
  return (
    <label className={LABEL_CLASS}>
      {label}
      <input
        className={INPUT_CLASS}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        autoComplete="off"
      />
      {help ? <span className={HELP_CLASS}>{help}</span> : null}
    </label>
  );
}

function RawNumberField({
  id,
  label,
  value,
  onChange,
  suffix,
  integer = false,
  help,
  error,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  suffix: string;
  integer?: boolean;
  help?: string;
  error?: string;
}) {
  const parsed = integer
    ? parseMvpVibeCodeInteger(value)
    : parseMvpVibeCodeDecimal(value);
  const malformed =
    value !== "" && parsed.state !== "valid";
  const helpId = help ? `${id}-help` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [helpId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <label className={LABEL_CLASS}>
      {label}
      <span className="mt-1.5 flex min-h-11 overflow-hidden rounded-lg border border-zinc-300 bg-white focus-within:border-violet-600 focus-within:ring-2 focus-within:ring-violet-300 dark:border-zinc-700 dark:bg-zinc-950 dark:focus-within:ring-violet-800">
        <input
          id={id}
          className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-left text-sm text-zinc-950 outline-none dark:text-white"
          type="text"
          inputMode={integer ? "numeric" : "decimal"}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          autoComplete="off"
          aria-invalid={malformed || Boolean(error)}
          aria-describedby={describedBy}
          aria-errormessage={errorId}
          data-number-state={parsed.state}
        />
        <span
          aria-hidden="true"
          className="flex items-center border-l border-zinc-200 bg-zinc-50 px-3 text-xs font-semibold text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400"
        >
          {suffix}
        </span>
      </span>
      {help ? (
        <span id={helpId} className={HELP_CLASS}>
          {help}
        </span>
      ) : null}
      {error ? (
        <span
          id={errorId}
          className="mt-1 block text-left text-xs font-semibold leading-relaxed text-rose-700 dark:text-rose-300"
          role="alert"
          data-field-error={id}
        >
          {error}
        </span>
      ) : null}
    </label>
  );
}

function formatMoney(value: number | null): string {
  return value === null ? "ND" : money.format(value);
}

export function MvpVibeCodeTakeoverDossier() {
  const empty = useMemo(
    () => createEmptyMvpVibeCodeTakeoverDossier(),
    [],
  );
  const [isFictitiousExample, setIsFictitiousExample] = useState(false);
  const [context, setContext] = useState(empty.context);
  const [proofs, setProofs] = useState(() => cloneProofs(empty.proofs));
  const [rawTco, setRawTco] = useState<RawTco>(() => tcoToRaw(empty.tco));
  const [rawOutage, setRawOutage] = useState<RawOutage>(() =>
    outageToRaw(empty.outage),
  );
  const [touchedNumericFields, setTouchedNumericFields] = useState<Set<string>>(
    () => new Set(),
  );
  const [exportStatus, setExportStatus] = useState<ExportStatus>("idle");

  const dossier = useMemo<MvpVibeCodeTakeoverDossier>(
    () => ({
      isFictitiousExample,
      context,
      proofs,
      tco: rawToTco(rawTco),
      outage: rawToOutage(rawOutage),
      rawInputs: {
        tco: rawTco,
        outage: rawOutage,
      },
    }),
    [context, isFictitiousExample, proofs, rawOutage, rawTco],
  );
  const evaluation = useMemo(
    () => evaluateMvpVibeCodeTakeover(dossier),
    [dossier],
  );
  const summary = useMemo(
    () => buildMvpVibeCodeTakeoverSummary(dossier, evaluation),
    [dossier, evaluation],
  );
  const finalNote = useMemo(
    () => buildMvpVibeCodeFinalDecisionNote(dossier, evaluation),
    [dossier, evaluation],
  );

  const resolvedProofCount = evaluation.proofEvaluations.filter(
    (proof) => proof.state === "resolved",
  ).length;
  const numericIssues = [...evaluation.tco.issues, ...evaluation.outage.issues];
  const visibleNumericIssues = numericIssues.filter((issue) => {
    const parts = issue.field.split(".");
    if (parts[0] === "tco" && parts.length >= 3) {
      if (parts[2] === "aggregate") return true;
      const trajectoryId = parts[1] as MvpVibeCodeTrajectoryId;
      const field = parts[2] as MvpVibeCodeTcoField;
      return (
        touchedNumericFields.has(issue.field) ||
        rawTco[trajectoryId]?.[field]?.trim() !== ""
      );
    }
    if (parts[0] === "outage" && parts[1] === "aggregate") return true;
    if (parts[0] === "outage" && parts.length === 2) {
      const field = parts[1] as keyof RawOutage;
      return (
        touchedNumericFields.has(issue.field) ||
        rawOutage[field]?.trim() !== ""
      );
    }
    return true;
  });

  function changed() {
    setExportStatus("idle");
  }

  function updateContext<Key extends keyof typeof context>(
    key: Key,
    value: (typeof context)[Key],
  ) {
    changed();
    setContext((current) => ({ ...current, [key]: value }));
  }

  function updateProof(
    id: string,
    field: keyof MvpVibeCodeProofEntry,
    value: string,
  ) {
    changed();
    setProofs((current) => ({
      ...current,
      [id]: {
        ...current[id],
        [field]: value,
      },
    }));
  }

  function updateTco(
    trajectoryId: MvpVibeCodeTrajectoryId,
    field: MvpVibeCodeTcoField,
    value: string,
  ) {
    changed();
    setTouchedNumericFields((current) => {
      const next = new Set(current);
      next.add(`tco.${trajectoryId}.${field}`);
      return next;
    });
    setRawTco((current) => ({
      ...current,
      [trajectoryId]: {
        ...current[trajectoryId],
        [field]: value,
      },
    }));
  }

  function updateOutage<Key extends keyof RawOutage>(
    key: Key,
    value: RawOutage[Key],
  ) {
    changed();
    setTouchedNumericFields((current) => {
      const next = new Set(current);
      next.add(`outage.${String(key)}`);
      return next;
    });
    setRawOutage((current) => ({ ...current, [key]: value }));
  }

  function confirmFictitiousValuesReplaced() {
    changed();
    setIsFictitiousExample(false);
  }

  function loadExample() {
    const example = createFictitiousMvpVibeCodeTakeoverDossier();
    setIsFictitiousExample(true);
    setContext({ ...example.context });
    setProofs(cloneProofs(example.proofs));
    setRawTco(tcoToRaw(example.tco));
    setRawOutage(outageToRaw(example.outage));
    setTouchedNumericFields(new Set());
    setExportStatus("idle");
  }

  function reset() {
    const next = createEmptyMvpVibeCodeTakeoverDossier();
    setIsFictitiousExample(false);
    setContext({ ...next.context });
    setProofs(cloneProofs(next.proofs));
    setRawTco(tcoToRaw(next.tco));
    setRawOutage(outageToRaw(next.outage));
    setTouchedNumericFields(new Set());
    setExportStatus("idle");
  }

  async function copyDraft() {
    if (!evaluation.canExportDraft) {
      setExportStatus("blocked-secret");
      return;
    }
    const copied = await copyTextToClipboard(summary);
    setExportStatus(copied ? "draft-copied" : "copy-error");
  }

  async function copyFinalNote() {
    if (!finalNote) return;
    const copied = await copyTextToClipboard(finalNote);
    setExportStatus(copied ? "final-copied" : "copy-error");
  }

  function downloadCsv() {
    if (!evaluation.canExportDraft) {
      setExportStatus("blocked-secret");
      return;
    }
    const csv = buildMvpVibeCodeTakeoverCsv(dossier, evaluation);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = objectUrl;
    link.download = "dossier-reprise-mvp-vibe-code.csv";
    link.click();
    URL.revokeObjectURL(objectUrl);
    setExportStatus("csv-downloaded");
  }

  const statusClasses =
    evaluation.stage === "STOP"
      ? "border-rose-300 bg-rose-50 text-rose-950 dark:border-rose-900 dark:bg-rose-950/40 dark:text-rose-100"
      : evaluation.stage === "INCOMPLET"
        ? "border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-100"
        : "border-emerald-300 bg-emerald-50 text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-100";

  return (
    <section
      id="dossier-reprise-mvp-vibe-code"
      data-read-time-exclude="true"
      className="not-prose my-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-left shadow-sm sm:p-6 dark:border-zinc-800 dark:bg-zinc-950"
    >
      <div className="max-w-none text-left">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-violet-700 dark:text-violet-300">
          Outil local et déterministe
        </p>
        <h2 className="mb-3 text-2xl font-black tracking-tight text-zinc-950 dark:text-white">
          Dossier de décision pour reprendre un MVP créé avec l’IA
        </h2>
        <p className="mb-3 max-w-4xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          Tout reste dans votre navigateur : aucun appel réseau, aucune
          sauvegarde automatique. Ne saisissez jamais de mot de passe, clé,
          jeton, donnée client ou information de production. Référencez une
          preuve locale sans la copier ici.
        </p>
        <p className="mb-5 max-w-4xl text-sm font-semibold leading-relaxed text-zinc-700 dark:text-zinc-200">
          Aucun score, coût faible ou scan favorable ne peut annuler un STOP.
          Le coût le plus bas n’est jamais présenté comme une recommandation.
        </p>

        <div className="mb-5 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={loadExample}
            className={`${BUTTON_CLASS} bg-violet-700 text-white hover:bg-violet-800`}
          >
            <FileCheck2 aria-hidden="true" className="size-4" />
            Charger l’exemple fictif
          </button>
          <button
            type="button"
            onClick={reset}
            className={`${BUTTON_CLASS} border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800`}
          >
            <RotateCcw aria-hidden="true" className="size-4" />
            Réinitialiser
          </button>
        </div>

        {isFictitiousExample ? (
          <div
            className="mb-5 rounded-xl border border-blue-300 bg-blue-50 p-3 text-left text-sm text-blue-950 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-100"
            role="status"
            data-fictitious-provenance="unconfirmed"
          >
            <p className="mb-2 font-bold">
              EXEMPLE FICTIF NON CONFIRMÉ — hypothèses pédagogiques, jamais une
              moyenne ni un prix de marché.
            </p>
            <p className="mb-3 leading-relaxed">
              Toute modification conserve ce marquage et la note finale reste
              verrouillée. Confirmez uniquement après avoir remplacé ou vérifié
              toutes les valeurs héritées.
            </p>
            <button
              type="button"
              onClick={confirmFictitiousValuesReplaced}
              className={`${BUTTON_CLASS} border border-blue-400 bg-white text-blue-950 hover:bg-blue-100`}
            >
              J’atteste avoir remplacé ou vérifié toutes les valeurs fictives
            </button>
          </div>
        ) : null}

        {evaluation.hasPotentialSecrets ? (
          <div
            className="mb-5 rounded-xl border border-rose-400 bg-rose-50 p-3 text-left text-sm text-rose-950 dark:border-rose-800 dark:bg-rose-950/40 dark:text-rose-100"
            role="alert"
            data-secret-export-block="true"
          >
            <p className="mb-1 font-bold">
              Export bloqué — candidat secret détecté
            </p>
            <p className="mb-1 leading-relaxed">
              Supprimez la valeur et conservez uniquement une référence non
              sensible. La détection est une protection best effort.
            </p>
            <p className="mb-0 text-xs">
              Champs à corriger : {evaluation.secretCandidateFields.join(", ")}
            </p>
          </div>
        ) : null}

        <fieldset className="mb-5 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/60">
          <legend className="px-1 text-sm font-bold text-zinc-950 dark:text-white">
            1. Qualifier la situation
          </legend>
          <div className="mt-2 grid gap-2 lg:grid-cols-2">
            {MVP_VIBE_CODE_MODES.map((mode) => (
              <label
                key={mode.id}
                className="flex min-h-11 cursor-pointer items-start gap-3 rounded-lg border border-zinc-200 p-3 text-left hover:border-violet-400 dark:border-zinc-700"
              >
                <input
                  type="radio"
                  name="mvp-vibe-code-mode"
                  value={mode.id}
                  checked={context.mode === mode.id}
                  onChange={() =>
                    updateContext("mode", mode.id as MvpVibeCodeMode)
                  }
                  className="mt-0.5 size-4 accent-violet-700"
                />
                <span>
                  <span className="block text-sm font-bold text-zinc-900 dark:text-white">
                    {mode.label}
                  </span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {mode.help}
                  </span>
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div
          className={`mb-5 rounded-xl border p-4 text-left ${statusClasses}`}
          role="status"
          aria-live="polite"
          data-decision-stage={evaluation.stage}
        >
          <p className="mb-1 text-xs font-bold uppercase tracking-[0.1em]">
            État du dossier
          </p>
          <p className="mb-1 text-xl font-black">
            {MVP_VIBE_CODE_STAGE_LABELS[evaluation.stage]}
          </p>
          <p className="mb-0 text-sm leading-relaxed">
            {evaluation.reasons[0] ??
              "Complétez le dossier sans présumer les inconnues."}
          </p>
          <p className="mb-0 mt-2 text-xs font-semibold">
            Preuves résolues : {resolvedProofCount}/
            {MVP_VIBE_CODE_REQUIRED_PROOFS.length}
          </p>
        </div>

        {visibleNumericIssues.length > 0 ? (
          <div
            className="mb-5 rounded-xl border border-rose-300 bg-white p-4 text-left text-rose-950 dark:border-rose-900 dark:bg-zinc-900 dark:text-rose-100"
            role="alert"
            aria-labelledby="mvp-vibe-code-numeric-errors-title"
            data-numeric-error-summary="true"
          >
            <p
              id="mvp-vibe-code-numeric-errors-title"
              className="mb-2 text-sm font-bold"
            >
              Saisies numériques à corriger ({visibleNumericIssues.length})
            </p>
            <ul className="mb-0 list-disc space-y-1 pl-5 text-xs leading-relaxed">
              {visibleNumericIssues.map((issue, index) => (
                <li key={`${issue.field}-${index}`}>{issue.message}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="grid gap-3">
          <details className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/60">
            <summary
              tabIndex={0}
              className="cursor-pointer text-base font-bold text-zinc-950 outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:text-white"
            >
              2. Périmètre commun et référence
            </summary>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <Field
                label="Référence du dossier"
                value={context.reference}
                onChange={(value) => updateContext("reference", value)}
                help="Identifiant interne non sensible."
              />
              <Field
                label="Date d’évaluation"
                type="date"
                value={context.evaluationDate}
                onChange={(value) => updateContext("evaluationDate", value)}
              />
              <div className="md:col-span-2">
                <Field
                  label="Périmètre identique pour les cinq trajectoires"
                  value={context.commonScope}
                  onChange={(value) => updateContext("commonScope", value)}
                  help="Fonctions, volumes, exigences, horaires, données et obligations à comparer sans changer de cas."
                />
              </div>
            </div>
          </details>

          <details className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/60">
            <summary
              tabIndex={0}
              className="cursor-pointer text-base font-bold text-zinc-950 outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:text-white"
            >
              3. Neuf domaines de preuve
            </summary>
            <div className="mt-4 grid gap-4">
              {MVP_VIBE_CODE_REQUIRED_PROOFS.map((definition, index) => {
                const entry = proofs[definition.id];
                const proofEvaluation =
                  evaluation.proofEvaluations[index];
                return (
                  <fieldset
                    key={definition.id}
                    data-proof-id={definition.id}
                    className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-700"
                  >
                    <legend className="px-1 text-sm font-bold text-zinc-950 dark:text-white">
                      {definition.label} —{" "}
                      {definition.severity === "blocking"
                        ? "bloquant"
                        : "majeur"}
                    </legend>
                    <p className="mb-3 mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                      {definition.expected}
                    </p>
                    <div className="grid gap-4 md:grid-cols-2">
                      <label className={LABEL_CLASS}>
                        Statut de la preuve
                        <select
                          className={INPUT_CLASS}
                          value={entry.status}
                          onChange={(event) =>
                            updateProof(
                              definition.id,
                              "status",
                              event.target.value as MvpVibeCodeProofStatus,
                            )
                          }
                        >
                          <option value="unknown">Non qualifié</option>
                          <option value="declared">
                            Déclaré, non prouvé
                          </option>
                          <option value="verified">Vérifié</option>
                          <option value="failed">Échec observé</option>
                          <option value="NA">
                            Non applicable avec justification
                          </option>
                        </select>
                      </label>
                      <Field
                        label="Responsable de la preuve"
                        value={entry.owner}
                        onChange={(value) =>
                          updateProof(definition.id, "owner", value)
                        }
                      />
                      <Field
                        label="Date du contrôle"
                        type="date"
                        value={entry.checkedOn}
                        onChange={(value) =>
                          updateProof(definition.id, "checkedOn", value)
                        }
                      />
                      <Field
                        label="Référence de preuve — jamais le secret"
                        value={entry.evidenceRef}
                        onChange={(value) =>
                          updateProof(definition.id, "evidenceRef", value)
                        }
                        help="Exemple : identifiant de build, hash, ticket ou chemin interne."
                      />
                      {entry.status === "NA" ? (
                        <>
                          <Field
                            label="Justification de non-applicabilité"
                            value={entry.naRationale}
                            onChange={(value) =>
                              updateProof(
                                definition.id,
                                "naRationale",
                                value,
                              )
                            }
                          />
                          <Field
                            label="Approbateur de la non-applicabilité"
                            value={entry.naApprover}
                            onChange={(value) =>
                              updateProof(
                                definition.id,
                                "naApprover",
                                value,
                              )
                            }
                          />
                        </>
                      ) : null}
                    </div>
                    <p className="mb-0 mt-3 text-xs font-semibold text-zinc-600 dark:text-zinc-300">
                      État effectif : {proofEvaluation.state}
                      {proofEvaluation.reasons.length > 0
                        ? ` — ${proofEvaluation.reasons.join(" ")}`
                        : ""}
                    </p>
                  </fieldset>
                );
              })}
            </div>
          </details>

          <details className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/60">
            <summary
              tabIndex={0}
              className="cursor-pointer text-base font-bold text-zinc-950 outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:text-white"
            >
              4. TCO comparable à 12, 36 et 60 mois
            </summary>
            <p className="mb-4 mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              Chaque zéro doit être saisi explicitement. Une cellule vide reste
              ND. Les coûts annuels sont proratisés et la double exploitation
              est plafonnée à l’horizon observé.
            </p>
            <div className="grid gap-5">
              {MVP_VIBE_CODE_TRAJECTORY_IDS.map((trajectoryId) => (
                <fieldset
                  key={trajectoryId}
                  data-tco-trajectory={trajectoryId}
                  className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-700"
                >
                  <legend className="px-1 text-sm font-bold text-zinc-950 dark:text-white">
                    {MVP_VIBE_CODE_TRAJECTORIES[trajectoryId].label}
                  </legend>
                  <p className="mb-3 mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                    {MVP_VIBE_CODE_TRAJECTORIES[trajectoryId].purpose}
                  </p>
                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {MVP_VIBE_CODE_TCO_FIELDS.map((field) => {
                      const fieldPath = `tco.${trajectoryId}.${field.key}`;
                      const error = visibleNumericIssues.find(
                        (issue) => issue.field === fieldPath,
                      )?.message;
                      return (
                        <RawNumberField
                          key={field.key}
                          id={`mvp-tco-${trajectoryId}-${field.key}`}
                          label={field.label}
                          value={rawTco[trajectoryId][field.key]}
                          onChange={(value) =>
                            updateTco(trajectoryId, field.key, value)
                          }
                          suffix={field.suffix}
                          integer={field.integer}
                          error={error}
                        />
                      );
                    })}
                  </div>
                  <dl
                    data-tco-summary={trajectoryId}
                    className="mt-4 grid gap-2 sm:grid-cols-3"
                  >
                    {MVP_VIBE_CODE_TCO_HORIZONS.map((horizon) => (
                      <div
                        key={horizon}
                        className="rounded-lg bg-zinc-100 p-3 dark:bg-zinc-800"
                      >
                        <dt className="text-xs font-bold text-zinc-500 dark:text-zinc-400">
                          {horizon} mois
                        </dt>
                        <dd className="mt-1 text-sm font-black text-zinc-950 dark:text-white">
                          {formatMoney(
                            evaluation.tco.totals[trajectoryId][horizon],
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </fieldset>
              ))}
            </div>
          </details>

          <details className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/60">
            <summary
              tabIndex={0}
              className="cursor-pointer text-base font-bold text-zinc-950 outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:text-white"
            >
              5. Coût observable d’une panne
            </summary>
            <p className="mb-4 mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              Le calcul ne valorise ni réputation, ni churn, ni contentieux
              sans donnée documentée. Une probabilité absente reste non
              renseignée et « non calculée », jamais égale implicitement à 0 %.
            </p>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {OUTAGE_FIELDS.map((field) => {
                const fieldPath = `outage.${field.key}`;
                const error = visibleNumericIssues.find(
                  (issue) => issue.field === fieldPath,
                )?.message;
                return (
                  <RawNumberField
                    key={field.key}
                    id={`mvp-outage-${field.key}`}
                    label={field.label}
                    value={rawOutage[field.key]}
                    onChange={(value) => updateOutage(field.key, value)}
                    suffix={field.suffix}
                    integer={field.integer}
                    help={field.help}
                    error={error}
                  />
                );
              })}
              <Field
                label="Source ou hypothèse de probabilité"
                value={rawOutage.probabilitySource}
                onChange={(value) =>
                  updateOutage("probabilitySource", value)
                }
                help="Obligatoire seulement si une probabilité est saisie."
              />
              <Field
                label="Date de la probabilité"
                type="date"
                value={rawOutage.probabilityDate}
                onChange={(value) => updateOutage("probabilityDate", value)}
              />
            </div>
            <dl className="mt-4 grid gap-3 md:grid-cols-3">
              <div className="rounded-lg bg-zinc-100 p-3 dark:bg-zinc-800">
                <dt className="text-xs font-bold text-zinc-500 dark:text-zinc-400">
                  Capacité immobilisée
                </dt>
                <dd className="mt-1 text-sm font-black text-zinc-950 dark:text-white">
                  {formatMoney(evaluation.outage.capacityCost)}
                </dd>
              </div>
              <div className="rounded-lg bg-zinc-100 p-3 dark:bg-zinc-800">
                <dt className="text-xs font-bold text-zinc-500 dark:text-zinc-400">
                  Coût observable
                </dt>
                <dd className="mt-1 text-sm font-black text-zinc-950 dark:text-white">
                  {formatMoney(evaluation.outage.observableCost)}
                </dd>
              </div>
              <div className="rounded-lg bg-zinc-100 p-3 dark:bg-zinc-800">
                <dt className="text-xs font-bold text-zinc-500 dark:text-zinc-400">
                  Perte annuelle attendue
                </dt>
                <dd className="mt-1 text-sm font-black text-zinc-950 dark:text-white">
                  {formatMoney(evaluation.outage.expectedAnnualCost)}
                </dd>
              </div>
            </dl>
          </details>

          <details className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/60">
            <summary
              tabIndex={0}
              className="cursor-pointer text-base font-bold text-zinc-950 outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:text-white"
            >
              6. Exporter le dossier courant
            </summary>
            <p className="mb-4 mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              Le brouillon et le CSV restent exportables avec leur statut
              visible. La note de décision est verrouillée jusqu’au stade
              COMPARABLE. Chaque modification réinitialise la confirmation
              d’export.
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={copyDraft}
                disabled={!evaluation.canExportDraft}
                className={`${BUTTON_CLASS} border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white`}
              >
                <ClipboardCheck aria-hidden="true" className="size-4" />
                Copier le brouillon
              </button>
              <button
                type="button"
                onClick={downloadCsv}
                disabled={!evaluation.canExportDraft}
                className={`${BUTTON_CLASS} border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white`}
              >
                <Download aria-hidden="true" className="size-4" />
                Télécharger le CSV courant
              </button>
              <button
                type="button"
                onClick={copyFinalNote}
                disabled={!evaluation.canExportFinal}
                className={`${BUTTON_CLASS} bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200`}
              >
                <FileCheck2 aria-hidden="true" className="size-4" />
                Copier la note de décision
              </button>
            </div>
            <p
              className="mb-0 mt-3 text-sm font-semibold text-zinc-600 dark:text-zinc-300"
              aria-live="polite"
              data-export-status={exportStatus}
            >
              {exportStatus === "draft-copied"
                ? "Le brouillon courant a été copié."
                : exportStatus === "final-copied"
                  ? "La note de décision courante a été copiée."
                  : exportStatus === "csv-downloaded"
                    ? "Le CSV courant a été téléchargé."
                  : exportStatus === "copy-error"
                      ? "La copie a échoué ; utilisez le CSV."
                      : exportStatus === "blocked-secret"
                        ? "Export bloqué : supprimez les candidats secrets."
                      : evaluation.canExportFinal
                        ? "La note de décision est déverrouillée ; relisez-la avant usage."
                        : "La note finale reste verrouillée ; le brouillon conserve explicitement le statut incomplet ou STOP."}
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
