"use client";

import {
  type ChangeEvent,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  ClipboardCheck,
  Download,
  FileWarning,
  Printer,
  RotateCcw,
  Upload,
} from "lucide-react";
import { copyTextToClipboard } from "@/lib/clipboard";
import {
  SAAS_BUILD_SOURCE_DATE,
  SAAS_DOSSIER_MAX_JSON_BYTES,
  SAAS_DOSSIER_MAX_TEXT_LENGTH,
  SAAS_PROOF_GATES,
  SAAS_SCOPE_ITEMS,
  SAAS_TCO_FIELDS,
  SAAS_TCO_MAX_INPUT,
  buildSaasDecisionReport,
  calculateSaasTcoSeries,
  createEmptySaasDecisionDossier,
  createFictitiousSaasDecisionDossier,
  parseSaasDecisionDossierJson,
  qualifySaasCandidate,
  recommendMinimumSaasRoute,
  serializeSaasDecisionDossier,
  type SaasCandidate,
  type SaasDecisionContext,
  type SaasProofEvidence,
  type SaasProofGateId,
  type SaasProofStatus,
  type SaasScopeId,
  type SaasScopeStatus,
  type SaasTcoField,
  type SaasTcoResult,
} from "@/lib/saas-build-path-decision";

const CONTEXT_SELECTS: Array<{
  key: Exclude<
    keyof SaasDecisionContext,
    "decisionDate" | "need" | "firstBuyer"
  >;
  label: string;
  help: string;
  options: Array<{ value: string; label: string }>;
}> = [
  {
    key: "commercialEvidence",
    label: "Preuve du besoin",
    help: "Ce qui existe aujourd’hui, pas ce que vous espérez obtenir.",
    options: [
      { value: "unknown", label: "ND — à qualifier" },
      { value: "none", label: "Aucun entretien probant" },
      { value: "interviews", label: "Entretiens et problème confirmé" },
      {
        value: "written-commitment",
        label: "Engagement écrit ou lettre d’intention",
      },
      { value: "paid", label: "Paiement ou commande" },
    ],
  },
  {
    key: "stage",
    label: "Prochaine étape",
    help: "Le niveau réellement visé par cette décision.",
    options: [
      { value: "unknown", label: "ND — à qualifier" },
      { value: "demo", label: "Démonstration jetable" },
      { value: "internal-pilot", label: "Pilote interne" },
      { value: "paid-pilot", label: "Pilote client payé" },
      { value: "production", label: "Production exploitée" },
    ],
  },
  {
    key: "dataRisk",
    label: "Données",
    help: "Utilisez le niveau le plus sensible réellement prévu.",
    options: [
      { value: "unknown", label: "ND — à inventorier" },
      { value: "fictitious", label: "Uniquement fictives" },
      { value: "personal", label: "Personnelles ou confidentielles" },
      { value: "sensitive", label: "Sensibles ou fortement réglementées" },
    ],
  },
  {
    key: "tenancy",
    label: "Comptes et organisations",
    help: "Deux sociétés impliquent un vrai test d’autorisation.",
    options: [
      { value: "unknown", label: "ND — à qualifier" },
      { value: "no-account", label: "Aucun compte" },
      { value: "single-organization", label: "Une seule organisation" },
      { value: "multi-tenant", label: "Plusieurs organisations isolées" },
    ],
  },
  {
    key: "payment",
    label: "Paiement",
    help: "Un mode test exige déjà les cas de webhooks et d’échec.",
    options: [
      { value: "unknown", label: "ND — à qualifier" },
      { value: "none", label: "Aucun paiement" },
      { value: "sandbox", label: "Paiement en bac à sable" },
      { value: "live", label: "Paiement réel" },
    ],
  },
  {
    key: "integration",
    label: "Intégrations",
    help: "Critique signifie que le service ne fonctionne plus sans elle.",
    options: [
      { value: "unknown", label: "ND — à inventorier" },
      { value: "none", label: "Aucune" },
      { value: "non-critical", label: "Présente mais non critique" },
      { value: "critical", label: "Critique pour le service" },
    ],
  },
  {
    key: "outageImpact",
    label: "Conséquence d’une panne",
    help: "Jugez l’impact côté utilisateur, pas votre tolérance personnelle.",
    options: [
      { value: "unknown", label: "ND — à qualifier" },
      { value: "low", label: "Faible, démonstration reportable" },
      { value: "work-delayed", label: "Travail réel retardé" },
      { value: "contractual", label: "Engagement ou activité bloquée" },
    ],
  },
  {
    key: "teamCapability",
    label: "Compétence disponible après le lancement",
    help: "Qui peut diagnostiquer, corriger et remettre en service ?",
    options: [
      { value: "unknown", label: "ND — personne nommée" },
      { value: "non-technical", label: "Aucune compétence technique" },
      { value: "frontend", label: "Interface et intégration légère" },
      { value: "full-stack", label: "Développement full-stack" },
      {
        value: "product-operations",
        label: "Produit, sécurité et exploitation",
      },
    ],
  },
];

const SCOPE_STATUS_OPTIONS: Array<{
  value: SaasScopeStatus;
  label: string;
}> = [
  { value: "unknown", label: "ND — non décrit" },
  { value: "included", label: "Inclus dans le même périmètre" },
  { value: "excluded", label: "Exclu" },
  { value: "not-applicable", label: "N/A — justification obligatoire" },
];

const PROOF_STATUS_OPTIONS: Array<{
  value: SaasProofStatus;
  label: string;
}> = [
  { value: "unverified", label: "Non vérifié" },
  { value: "pass", label: "Réussi et documenté" },
  { value: "fail", label: "Échec" },
  { value: "not-applicable", label: "N/A — justification obligatoire" },
];

function inputNumber(value: number | undefined): number | "" {
  return value === undefined || !Number.isFinite(value) ? "" : value;
}

function currentUtcIsoDate(): string {
  return new Date().toISOString().slice(0, 10);
}

function tcoLabel(result: SaasTcoResult): string {
  if (result.kind === "unknown") {
    return `ND · ${result.missing.length} poste(s) manquant(s)`;
  }
  return `${Math.round(result.total).toLocaleString("fr-FR")} €`;
}

function qualificationCopy(
  qualification: ReturnType<typeof qualifySaasCandidate>,
): { title: string; detail: string; className: string } {
  if (qualification.status === "blocked") {
    return {
      title: "Option bloquée",
      detail: `${qualification.failedProofs.length} échec(s), ${qualification.invalidProofs.length} preuve(s) invalide(s), ${qualification.prohibitedNotApplicable.length} N/A incompatible(s), ${qualification.contextGaps.length} élément(s) de contexte à compléter.`,
      className:
        "border-rose-300 bg-rose-50 text-rose-950 dark:border-rose-800 dark:bg-rose-950/30 dark:text-rose-100",
    };
  }
  if (qualification.status === "unqualified") {
    return {
      title: "Option non qualifiée",
      detail: `${qualification.contextGaps.length} élément(s) de contexte, ${qualification.candidateGaps.length} référence(s) d’option, ${qualification.scopeGaps.length} ligne(s) de périmètre, ${qualification.invalidScopeEvidence.length} livrable(s) sans référence et ${qualification.unverifiedProofs.length} preuve(s) restent à fermer.`,
      className:
        "border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100",
    };
  }
  return {
    title: "Option qualifiée pour comparaison",
    detail:
      "Les portes documentaires sont franchies. Le coût peut être lu, sans devenir un vainqueur automatique.",
    className:
      "border-emerald-300 bg-emerald-50 text-emerald-950 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-100",
  };
}

export function SaasBuildPathDecisionDossier() {
  const instanceId = useId().replaceAll(":", "");
  const [evaluationDate] = useState(currentUtcIsoDate);
  const [dossier, setDossier] = useState(createEmptySaasDecisionDossier);
  const [activeCandidateIndex, setActiveCandidateIndex] = useState<0 | 1>(0);
  const [copyStatus, setCopyStatus] = useState<
    "idle" | "copied" | "copy-error"
  >("idle");
  const [fileStatus, setFileStatus] = useState<
    "idle" | "exported" | "imported" | "file-error"
  >("idle");
  const [fileError, setFileError] = useState("");
  const [resetRequested, setResetRequested] = useState(false);
  const importInputRef = useRef<HTMLInputElement>(null);
  const resetTriggerRef = useRef<HTMLButtonElement>(null);
  const resetConfirmRef = useRef<HTMLButtonElement>(null);

  const recommendation = useMemo(
    () => recommendMinimumSaasRoute(dossier.context, evaluationDate),
    [dossier.context, evaluationDate],
  );
  const report = useMemo(
    () =>
      buildSaasDecisionReport(
        dossier.context,
        dossier.candidates,
        evaluationDate,
      ),
    [dossier, evaluationDate],
  );
  const candidateResults = useMemo(
    () =>
      dossier.candidates.map((candidate) => ({
        qualification: qualifySaasCandidate(
          dossier.context,
          candidate,
          evaluationDate,
        ),
        tco: calculateSaasTcoSeries(candidate.tco),
      })),
    [dossier, evaluationDate],
  );
  const activeCandidate = dossier.candidates[activeCandidateIndex];
  const activeResult = candidateResults[activeCandidateIndex];
  const qualification = qualificationCopy(activeResult.qualification);

  function updateContext<K extends keyof SaasDecisionContext>(
    key: K,
    value: SaasDecisionContext[K],
  ) {
    setDossier((current) => ({
      ...current,
      context: { ...current.context, [key]: value },
    }));
    setCopyStatus("idle");
    setFileStatus("idle");
    setFileError("");
  }

  function updateCandidate(
    index: 0 | 1,
    updater: (candidate: SaasCandidate) => SaasCandidate,
  ) {
    setDossier((current) => {
      const candidates = [...current.candidates] as [
        SaasCandidate,
        SaasCandidate,
      ];
      candidates[index] = updater(candidates[index]);
      return { ...current, candidates };
    });
    setCopyStatus("idle");
    setFileStatus("idle");
    setFileError("");
  }

  function updateActiveCandidate(
    updater: (candidate: SaasCandidate) => SaasCandidate,
  ) {
    updateCandidate(activeCandidateIndex, updater);
  }

  function updateScope(
    scopeId: SaasScopeId,
    patch: Partial<SaasCandidate["scope"][SaasScopeId]>,
  ) {
    updateActiveCandidate((candidate) => ({
      ...candidate,
      scope: {
        ...candidate.scope,
        [scopeId]: { ...candidate.scope[scopeId], ...patch },
      },
    }));
  }

  function updateProof(
    gateId: SaasProofGateId,
    patch: Partial<SaasProofEvidence>,
  ) {
    updateActiveCandidate((candidate) => ({
      ...candidate,
      proofs: {
        ...candidate.proofs,
        [gateId]: { ...candidate.proofs[gateId], ...patch },
      },
    }));
  }

  function updateTco(field: SaasTcoField, raw: string) {
    const value = raw === "" ? undefined : Number(raw);
    updateActiveCandidate((candidate) => ({
      ...candidate,
      tco: { ...candidate.tco, [field]: value },
    }));
  }

  function loadFictitiousExample() {
    setDossier(createFictitiousSaasDecisionDossier());
    setActiveCandidateIndex(0);
    setCopyStatus("idle");
    setFileStatus("idle");
    setFileError("");
    setResetRequested(false);
  }

  async function copyReport() {
    const copied = await copyTextToClipboard(report);
    setCopyStatus(copied ? "copied" : "copy-error");
  }

  function downloadJsonDossier() {
    try {
      const blob = new Blob(
        [serializeSaasDecisionDossier(dossier, evaluationDate)],
        { type: "application/json;charset=utf-8" },
      );
      const objectUrl = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = objectUrl;
      anchor.download = `dossier-saas-${evaluationDate}.json`;
      document.body.append(anchor);
      anchor.click();
      anchor.remove();
      URL.revokeObjectURL(objectUrl);
      setFileStatus("exported");
      setFileError("");
    } catch (error) {
      setFileStatus("file-error");
      setFileError(
        error instanceof Error
          ? error.message
          : "Le navigateur n’a pas pu créer le fichier JSON. Utilisez la copie ou l’impression.",
      );
    }
  }

  async function importJsonDossier(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    if (file.size > SAAS_DOSSIER_MAX_JSON_BYTES) {
      setFileStatus("file-error");
      setFileError("Le fichier dépasse la limite locale de 512 Ko.");
      return;
    }

    try {
      const parsed = parseSaasDecisionDossierJson(await file.text());
      if (!parsed.ok) {
        setFileStatus("file-error");
        setFileError(parsed.error);
        return;
      }
      setDossier(parsed.dossier);
      setActiveCandidateIndex(0);
      setCopyStatus("idle");
      setFileStatus("imported");
      setFileError("");
      setResetRequested(false);
    } catch {
      setFileStatus("file-error");
      setFileError("Le fichier n’a pas pu être lu dans ce navigateur.");
    }
  }

  function askReset() {
    setResetRequested(true);
    window.setTimeout(() => resetConfirmRef.current?.focus(), 0);
  }

  function cancelReset() {
    setResetRequested(false);
    window.setTimeout(() => resetTriggerRef.current?.focus(), 0);
  }

  function confirmReset() {
    setDossier(createEmptySaasDecisionDossier());
    setActiveCandidateIndex(0);
    setCopyStatus("idle");
    setFileStatus("idle");
    setFileError("");
    setResetRequested(false);
    window.setTimeout(() => resetTriggerRef.current?.focus(), 0);
  }

  return (
    <>
      <style>
        {
          "@page { size: A4; margin: 12mm; } @media print { body *:not(#saas-build-path-dossier):not(#saas-build-path-dossier *):not(:has(#saas-build-path-dossier)) { display: none !important; } #saas-build-path-dossier { position: absolute !important; inset: 0 auto auto 0 !important; width: 100% !important; margin: 0 !important; overflow: visible !important; border: 0 !important; box-shadow: none !important; background: white !important; color: #18181b !important; } #saas-build-path-dossier > :not(.saas-build-print-report) { display: none !important; } #saas-build-path-dossier .saas-build-print-report { display: block !important; margin: 0 !important; white-space: pre-wrap !important; background: white !important; color: #18181b !important; orphans: 4; widows: 4; } }"
        }
      </style>
      <section
        id="saas-build-path-dossier"
        className="not-prose my-10 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
        aria-labelledby={`${instanceId}-saas-dossier-title`}
        data-read-time-exclude="true"
      >
        <div className="border-b border-zinc-800 bg-zinc-950 px-4 py-6 text-white sm:px-6">
          <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-300">
            Outil local · aucune donnée envoyée · aucune sauvegarde automatique
          </p>
          <h3
            id={`${instanceId}-saas-dossier-title`}
            className="mb-0 mt-2 text-xl font-bold sm:text-2xl"
          >
            Dossier comparatif builder IA ou accompagnement
          </h3>
          <p className="mb-0 mt-2 max-w-4xl text-sm leading-relaxed text-zinc-300">
            Comparez deux voies sur le même besoin, le même périmètre, les
            mêmes preuves et un coût complet sur 12, 36 et 60 mois. Tant
            qu’une ligne critique reste inconnue ou en échec, le résultat
            économique reste ND. Exportez un JSON local pour reprendre plus
            tard sans compte ni serveur.
          </p>
        </div>

        <pre
          className="saas-build-print-report hidden p-6 font-sans text-[9px] leading-[1.4] print:block"
          data-read-time-exclude="true"
        >
          {report}
        </pre>

        <div className="space-y-10 p-4 print:hidden sm:p-6">
          <section aria-labelledby={`${instanceId}-context-title`}>
            <h4
              id={`${instanceId}-context-title`}
              className="m-0 text-lg font-bold text-zinc-950 dark:text-white"
            >
              1. Fixer le besoin et le risque avant l’outil
            </h4>
            <p className="mb-5 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Les informations produits du guide ont été revérifiées le{" "}
              {SAAS_BUILD_SOURCE_DATE}. Datez séparément votre décision, votre
              offre et vos essais.
            </p>

            <div className="grid gap-4 lg:grid-cols-2">
              <label className="block text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                Date de votre décision
                <input
                  type="date"
                  max={evaluationDate}
                  value={dossier.context.decisionDate}
                  onChange={(event) =>
                    updateContext("decisionDate", event.target.value)
                  }
                  aria-invalid={
                    !dossier.context.decisionDate ||
                    dossier.context.decisionDate > evaluationDate
                  }
                  className="mt-2 block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:focus:ring-violet-950"
                />
                <span className="mt-1 block font-normal leading-relaxed text-zinc-500 dark:text-zinc-400">
                  La décision ne peut pas être postérieure au {evaluationDate}.
                </span>
              </label>
              <label className="block text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                Besoin et preuve attendue
                <textarea
                  value={dossier.context.need}
                  onChange={(event) => updateContext("need", event.target.value)}
                  maxLength={SAAS_DOSSIER_MAX_TEXT_LENGTH}
                  rows={3}
                  placeholder="Ex. vérifier qu’un responsable clôture un audit sans tableur et sans voir les dossiers d’une autre société."
                  className="mt-2 block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm font-normal text-zinc-950 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:focus:ring-violet-950"
                />
              </label>
              <label className="block text-sm font-semibold text-zinc-800 dark:text-zinc-200 lg:col-span-2">
                Premier acheteur ou utilisateur et preuve disponible
                <textarea
                  value={dossier.context.firstBuyer}
                  onChange={(event) =>
                    updateContext("firstBuyer", event.target.value)
                  }
                  maxLength={SAAS_DOSSIER_MAX_TEXT_LENGTH}
                  rows={2}
                  placeholder="Ex. deux cabinets interrogés ; aucune lettre d’intention à ce jour."
                  className="mt-2 block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm font-normal text-zinc-950 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:focus:ring-violet-950"
                />
              </label>
              {CONTEXT_SELECTS.map((field) => (
                <label
                  key={field.key}
                  className="block text-sm font-semibold text-zinc-800 dark:text-zinc-200"
                >
                  {field.label}
                  <select
                    value={dossier.context[field.key]}
                    onChange={(event) =>
                      updateContext(
                        field.key,
                        event.target.value as SaasDecisionContext[typeof field.key],
                      )
                    }
                    className="mt-2 block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm font-normal text-zinc-950 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:focus:ring-violet-950"
                  >
                    {field.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <span className="mt-1 block text-xs font-normal leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {field.help}
                  </span>
                </label>
              ))}
            </div>

            <div
              className={`mt-5 rounded-xl border p-4 ${
                recommendation.route === "incomplete"
                  ? "border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100"
                  : recommendation.route === "pause"
                    ? "border-blue-300 bg-blue-50 text-blue-950 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-100"
                    : recommendation.route === "solo-prototype"
                      ? "border-emerald-300 bg-emerald-50 text-emerald-950 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-100"
                      : "border-violet-300 bg-violet-50 text-violet-950 dark:border-violet-800 dark:bg-violet-950/30 dark:text-violet-100"
              }`}
              aria-live="polite"
            >
              <p className="m-0 text-xs font-bold uppercase tracking-wider">
                Seuil minimal proposé
              </p>
              <p className="mb-0 mt-1 text-base font-bold">
                {recommendation.title}
              </p>
              <ul className="mb-0 mt-2 space-y-1 pl-5 text-sm">
                {recommendation.reasons.map((reason) => (
                  <li key={reason}>{reason}</li>
                ))}
                {recommendation.missing.map((missing) => (
                  <li key={missing}>À renseigner : {missing}.</li>
                ))}
              </ul>
            </div>
          </section>

          <section aria-labelledby={`${instanceId}-options-title`}>
            <h4
              id={`${instanceId}-options-title`}
              className="m-0 text-lg font-bold text-zinc-950 dark:text-white"
            >
              2. Comparer deux voies au même périmètre
            </h4>
            <p className="mb-4 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Nommez librement les options : « Lovable + revue », « Bolt avec
              équipe interne », « v0 + Vercel » ou « agence ». L’outil ne
              préjuge ni du fournisseur ni du plan.
            </p>

            <div
              className="mb-5 grid grid-cols-2 gap-2"
              role="tablist"
              aria-label="Options comparées"
            >
              {dossier.candidates.map((candidate, index) => (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={activeCandidateIndex === index}
                  onClick={() => setActiveCandidateIndex(index as 0 | 1)}
                  className="rounded-lg border border-zinc-300 bg-white px-3 py-3 text-sm font-semibold text-zinc-800 aria-selected:border-violet-600 aria-selected:bg-violet-50 aria-selected:text-violet-950 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200 dark:aria-selected:border-violet-500 dark:aria-selected:bg-violet-950/30 dark:aria-selected:text-violet-100"
                >
                  {candidate.name || `Option ${index + 1}`}
                </button>
              ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              <label className="block text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                Nom de l’option
                <input
                  value={activeCandidate.name}
                  onChange={(event) =>
                    updateActiveCandidate((candidate) => ({
                      ...candidate,
                      name: event.target.value,
                    }))
                  }
                  maxLength={SAAS_DOSSIER_MAX_TEXT_LENGTH}
                  aria-invalid={activeCandidate.name.trim().length < 2}
                  className="mt-2 block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm font-normal text-zinc-950 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:focus:ring-violet-950"
                />
              </label>
              <label className="block text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                Voie, outil, plan et version
                <input
                  value={activeCandidate.route}
                  onChange={(event) =>
                    updateActiveCandidate((candidate) => ({
                      ...candidate,
                      route: event.target.value,
                    }))
                  }
                  maxLength={SAAS_DOSSIER_MAX_TEXT_LENGTH}
                  aria-invalid={activeCandidate.route.trim().length < 3}
                  placeholder="Ex. v0 Business + équipe Next.js"
                  className="mt-2 block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm font-normal text-zinc-950 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:focus:ring-violet-950"
                />
              </label>
              <label className="block text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                Devis, date ou snapshot
                <input
                  value={activeCandidate.proposalReference}
                  onChange={(event) =>
                    updateActiveCandidate((candidate) => ({
                      ...candidate,
                      proposalReference: event.target.value,
                    }))
                  }
                  maxLength={SAAS_DOSSIER_MAX_TEXT_LENGTH}
                  aria-invalid={
                    activeCandidate.proposalReference.trim().length < 3
                  }
                  placeholder="Ex. devis V3 du 27/07/2026"
                  className="mt-2 block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm font-normal text-zinc-950 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:focus:ring-violet-950"
                />
              </label>
            </div>

            <div className={`mt-5 rounded-xl border p-4 ${qualification.className}`}>
              <p className="m-0 text-sm font-bold">{qualification.title}</p>
              <p className="mb-0 mt-1 text-xs leading-relaxed">
                {qualification.detail}
              </p>
            </div>

            <details className="mt-5 rounded-xl border border-zinc-200 bg-zinc-50 open:bg-white dark:border-zinc-800 dark:bg-zinc-900/40 dark:open:bg-zinc-950">
              <summary className="cursor-pointer px-4 py-4 text-sm font-bold text-zinc-950 dark:text-white">
                Périmètre identique · 14 livrables
              </summary>
              <div className="space-y-4 border-t border-zinc-200 p-4 dark:border-zinc-800">
                {SAAS_SCOPE_ITEMS.map((item) => {
                  const evidence = activeCandidate.scope[item.id];
                  return (
                    <fieldset
                      key={item.id}
                      className="rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-950"
                    >
                      <legend className="px-1 text-sm font-semibold text-zinc-950 dark:text-white">
                        {item.label}
                        {item.critical ? " · critique" : ""}
                      </legend>
                      <p className="mb-3 mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                        {item.expected}
                      </p>
                      <div className="grid gap-3 lg:grid-cols-2">
                        <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                          Statut contractuel
                          <select
                            value={evidence.status}
                            onChange={(event) =>
                              updateScope(item.id, {
                                status: event.target.value as SaasScopeStatus,
                              })
                            }
                            className="mt-1 block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                          >
                            {SCOPE_STATUS_OPTIONS.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </label>
                        <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                          Clause, livrable ou justification
                          <input
                            value={evidence.note}
                            onChange={(event) =>
                              updateScope(item.id, {
                                note: event.target.value,
                              })
                            }
                            maxLength={SAAS_DOSSIER_MAX_TEXT_LENGTH}
                            aria-invalid={
                              evidence.status !== "unknown" &&
                              evidence.note.trim().length < 8
                            }
                            placeholder="Référence vérifiable ; au moins 8 caractères pour tout statut renseigné."
                            className="mt-1 block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                          />
                        </label>
                      </div>
                    </fieldset>
                  );
                })}
              </div>
            </details>

            <details className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50 open:bg-white dark:border-zinc-800 dark:bg-zinc-900/40 dark:open:bg-zinc-950">
              <summary className="cursor-pointer px-4 py-4 text-sm font-bold text-zinc-950 dark:text-white">
                Preuves techniques · 12 portes sans score moyen
              </summary>
              <div className="space-y-4 border-t border-zinc-200 p-4 dark:border-zinc-800">
                <p className="m-0 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Une preuve réussie exige une date non future, un
                  environnement, un responsable, une seconde personne
                  distincte et une référence exploitable. « Scanner vert » ou
                  « cela fonctionne chez moi » ne suffit pas.
                </p>
                {SAAS_PROOF_GATES.map((gate) => {
                  const evidence = activeCandidate.proofs[gate.id];
                  return (
                    <fieldset
                      key={gate.id}
                      className="rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-950"
                    >
                      <legend className="px-1 text-sm font-semibold text-zinc-950 dark:text-white">
                        {gate.label}
                      </legend>
                      <div className="mt-2 grid gap-3 lg:grid-cols-2">
                        <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                          Résultat
                          <select
                            value={evidence.status}
                            onChange={(event) =>
                              updateProof(gate.id, {
                                status: event.target.value as SaasProofStatus,
                              })
                            }
                            className="mt-1 block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                          >
                            {PROOF_STATUS_OPTIONS.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </label>
                        <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                          Date du test
                          <input
                            type="date"
                            max={
                              dossier.context.decisionDate &&
                              dossier.context.decisionDate < evaluationDate
                                ? dossier.context.decisionDate
                                : evaluationDate
                            }
                            value={evidence.testedAt}
                            onChange={(event) =>
                              updateProof(gate.id, {
                                testedAt: event.target.value,
                              })
                            }
                            className="mt-1 block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                          />
                        </label>
                        <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                          Environnement et version
                          <input
                            value={evidence.environment}
                            onChange={(event) =>
                              updateProof(gate.id, {
                                environment: event.target.value,
                              })
                            }
                            maxLength={SAAS_DOSSIER_MAX_TEXT_LENGTH}
                            placeholder="Ex. préproduction, commit abc123, plan Pro"
                            className="mt-1 block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                          />
                        </label>
                        <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                          Référence de preuve
                          <input
                            value={evidence.evidenceReference}
                            onChange={(event) =>
                              updateProof(gate.id, {
                                evidenceReference: event.target.value,
                              })
                            }
                            maxLength={SAAS_DOSSIER_MAX_TEXT_LENGTH}
                            placeholder="Capture, journal, rapport ou ticket"
                            className="mt-1 block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                          />
                        </label>
                        <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                          Responsable du test
                          <input
                            value={evidence.owner}
                            onChange={(event) =>
                              updateProof(gate.id, {
                                owner: event.target.value,
                              })
                            }
                            maxLength={SAAS_DOSSIER_MAX_TEXT_LENGTH}
                            className="mt-1 block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                          />
                        </label>
                        <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                          Relecteur indépendant
                          <input
                            value={evidence.independentReviewer}
                            onChange={(event) =>
                              updateProof(gate.id, {
                                independentReviewer: event.target.value,
                              })
                            }
                            maxLength={SAAS_DOSSIER_MAX_TEXT_LENGTH}
                            className="mt-1 block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                          />
                        </label>
                        <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 lg:col-span-2">
                          Notes et justification d’un éventuel N/A
                          <textarea
                            value={evidence.notes}
                            onChange={(event) =>
                              updateProof(gate.id, {
                                notes: event.target.value,
                              })
                            }
                            maxLength={SAAS_DOSSIER_MAX_TEXT_LENGTH}
                            rows={2}
                            className="mt-1 block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                          />
                        </label>
                      </div>
                    </fieldset>
                  );
                })}
              </div>
            </details>

            <details className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50 open:bg-white dark:border-zinc-800 dark:bg-zinc-900/40 dark:open:bg-zinc-950">
              <summary className="cursor-pointer px-4 py-4 text-sm font-bold text-zinc-950 dark:text-white">
                Coût complet · construction, exploitation et sortie
              </summary>
              <div className="border-t border-zinc-200 p-4 dark:border-zinc-800">
                <p className="m-0 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Saisissez zéro seulement si le poste est réellement nul ou
                  inclus ailleurs. Un champ vide reste ND. Les agrégats
                  mélangent dépenses et temps interne : ils sont affichés en €,
                  jamais en € HT.
                </p>
                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  {SAAS_TCO_FIELDS.map((field) => {
                    const value = activeCandidate.tco[field.id];
                    const invalid =
                      value !== undefined &&
                      (!Number.isFinite(value) ||
                        value < 0 ||
                        value > SAAS_TCO_MAX_INPUT);
                    return (
                      <label
                        key={field.id}
                        className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300"
                      >
                        {field.label}
                        <span className="relative mt-1 block">
                          <input
                            type="number"
                            min={0}
                            max={SAAS_TCO_MAX_INPUT}
                            step="any"
                            inputMode="decimal"
                            value={inputNumber(value)}
                            onChange={(event) =>
                              updateTco(field.id, event.target.value)
                            }
                            aria-invalid={invalid}
                            className="block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 pr-20 text-sm font-normal text-zinc-950 aria-[invalid=true]:border-rose-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                          />
                          <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs font-normal text-zinc-500">
                            {field.unit}
                          </span>
                        </span>
                        <span className="mt-1 block font-normal leading-relaxed text-zinc-500 dark:text-zinc-400">
                          {field.help}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </details>
          </section>

          <section aria-labelledby={`${instanceId}-results-title`}>
            <h4
              id={`${instanceId}-results-title`}
              className="m-0 text-lg font-bold text-zinc-950 dark:text-white"
            >
              3. Lire les résultats sans faux vainqueur
            </h4>
            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              {dossier.candidates.map((candidate, index) => {
                const result = candidateResults[index];
                const copy = qualificationCopy(result.qualification);
                const qualified = result.qualification.status === "qualified";
                return (
                  <article
                    key={index}
                    className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800"
                  >
                    <h5 className="m-0 text-base font-bold text-zinc-950 dark:text-white">
                      {candidate.name || `Option ${index + 1}`}
                    </h5>
                    <p className="mb-0 mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                      {copy.title}
                    </p>
                    <dl className="mb-0 mt-4 grid grid-cols-3 gap-2">
                      {result.tco.map((tco) => (
                        <div
                          key={tco.horizonMonths}
                          className="rounded-lg bg-zinc-100 p-3 dark:bg-zinc-900"
                        >
                          <dt className="text-[10px] font-bold uppercase tracking-wide text-zinc-500">
                            {tco.horizonMonths} mois
                          </dt>
                          <dd className="m-0 mt-1 text-sm font-bold text-zinc-950 dark:text-white">
                            {qualified
                              ? tcoLabel(tco)
                              : "ND · option non qualifiée"}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </article>
                );
              })}
            </div>
            <div className="mt-4 flex gap-3 rounded-xl border border-amber-300 bg-amber-50 p-4 text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100">
              <FileWarning className="mt-0.5 size-5 shrink-0" aria-hidden />
              <p className="m-0 text-sm leading-relaxed">
                L’option au coût modélisé le plus faible n’est jamais déclarée
                « meilleure ». Vérifiez l’incertitude des volumes, testez un
                scénario bas et haut et éliminez d’abord toute voie en échec.
              </p>
            </div>
          </section>

          <section
            className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/40"
            aria-label="Actions du dossier"
          >
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={loadFictitiousExample}
                className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm font-semibold text-zinc-800 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:bg-zinc-900"
              >
                Charger l’exemple fictif
              </button>
              <button
                type="button"
                onClick={copyReport}
                className="inline-flex items-center gap-2 rounded-lg bg-violet-700 px-3 py-2 text-sm font-semibold text-white hover:bg-violet-800"
              >
                <ClipboardCheck className="size-4" aria-hidden />
                Copier le dossier
              </button>
              <button
                type="button"
                onClick={downloadJsonDossier}
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm font-semibold text-zinc-800 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:bg-zinc-900"
              >
                <Download className="size-4" aria-hidden />
                Exporter en JSON
              </button>
              <input
                ref={importInputRef}
                type="file"
                accept=".json,application/json"
                onChange={importJsonDossier}
                className="sr-only"
                aria-label="Choisir un dossier JSON à importer"
              />
              <button
                type="button"
                onClick={() => importInputRef.current?.click()}
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm font-semibold text-zinc-800 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:bg-zinc-900"
              >
                <Upload className="size-4" aria-hidden />
                Importer un JSON
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm font-semibold text-zinc-800 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:bg-zinc-900"
              >
                <Printer className="size-4" aria-hidden />
                Imprimer le dossier
              </button>
              <button
                ref={resetTriggerRef}
                type="button"
                onClick={askReset}
                className="inline-flex items-center gap-2 rounded-lg border border-rose-300 bg-white px-3 py-2 text-sm font-semibold text-rose-800 hover:bg-rose-50 dark:border-rose-800 dark:bg-zinc-950 dark:text-rose-200 dark:hover:bg-rose-950/30"
              >
                <RotateCcw className="size-4" aria-hidden />
                Réinitialiser
              </button>
            </div>

            {resetRequested ? (
              <div
                className="mt-4 rounded-lg border border-rose-300 bg-rose-50 p-3 text-rose-950 dark:border-rose-800 dark:bg-rose-950/30 dark:text-rose-100"
                role="alertdialog"
                aria-labelledby={`${instanceId}-reset-title`}
              >
                <p
                  id={`${instanceId}-reset-title`}
                  className="m-0 text-sm font-bold"
                >
                  Effacer toutes les réponses des deux options ?
                </p>
                <p className="mb-0 mt-1 text-xs">
                  La page ne les enregistre pas automatiquement. Exportez le
                  JSON si vous devez reprendre ce dossier ; l’effacement du
                  formulaire courant est irréversible.
                </p>
                <div className="mt-3 flex gap-2">
                  <button
                    ref={resetConfirmRef}
                    type="button"
                    onClick={confirmReset}
                    className="rounded-lg bg-rose-700 px-3 py-2 text-sm font-semibold text-white"
                  >
                    Oui, effacer
                  </button>
                  <button
                    type="button"
                    onClick={cancelReset}
                    className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm font-semibold text-zinc-800 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200"
                  >
                    Annuler
                  </button>
                </div>
              </div>
            ) : null}

            <p
              className="mb-0 mt-3 text-xs text-zinc-600 dark:text-zinc-400"
              aria-live={
                copyStatus === "copy-error" || fileStatus === "file-error"
                  ? "assertive"
                  : "polite"
              }
            >
              {fileStatus === "file-error"
                ? fileError
                : fileStatus === "exported"
                  ? "Le fichier JSON a été créé localement. Il peut contenir vos réponses : conservez-le dans un emplacement adapté."
                  : fileStatus === "imported"
                    ? "Le dossier JSON a été importé localement et reste soumis aux mêmes contrôles."
                    : copyStatus === "copied"
                      ? "Le dossier a été copié dans le presse-papiers."
                      : copyStatus === "copy-error"
                        ? "La copie est indisponible dans ce navigateur. L’impression et le JSON restent utilisables."
                        : "L’exemple est entièrement fictif et ne constitue ni un devis, ni un benchmark, ni un cas client."}
            </p>
          </section>
        </div>
      </section>
    </>
  );
}
