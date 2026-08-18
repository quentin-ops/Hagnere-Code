"use client";

import { useMemo, useState } from "react";
import { ClipboardCheck, Printer, RotateCcw } from "lucide-react";
import { copyTextToClipboard } from "@/lib/clipboard";
import {
  MOBILE_DECISION_SOURCE_DATE,
  MOBILE_GATE_IDS,
  MOBILE_GATES,
  MOBILE_TCO_FIELDS,
  addCriticalModuleDays,
  buildMobileDecisionReport,
  calculateMobileTcoSeries,
  createEmptyMobileDecisionContext,
  normalizeMobileSensitivityExtraDays,
  qualifyMobileCandidate,
  type MobileCandidateInput,
  type MobileDecisionContext,
  type MobileGateId,
  type MobileGateStatus,
  type MobileTcoField,
  type MobileTcoResult,
} from "@/lib/mobile-framework-decision";

const CONTEXT_FIELDS: Array<{
  key: Exclude<keyof MobileDecisionContext, "decisionDate" | "candidates">;
  label: string;
  help: string;
  placeholder: string;
}> = [
  {
    key: "businessNeed",
    label: "Besoin et résultat attendu",
    help: "Décrivez la tâche à améliorer, pas la technologie souhaitée.",
    placeholder:
      "Ex. terminer une intervention terrain sans réseau puis transmettre un dossier complet.",
  },
  {
    key: "usersAndTask",
    label: "Utilisateurs, fréquence et conséquence d’un échec",
    help: "Nommez les personnes, la tâche et ce qui se passe si elle échoue.",
    placeholder:
      "Ex. 20 techniciens, 10 interventions/jour ; un dossier perdu bloque la facturation.",
  },
  {
    key: "devicePark",
    label: "Parc d’appareils et versions d’OS",
    help: "Inscrivez au moins l’appareil plancher de chaque système.",
    placeholder:
      "Ex. iPhone 12 sous la version iOS supportée et Android milieu de gamme, modèles à confirmer.",
  },
  {
    key: "criticalFunction",
    label: "Fonction qui peut faire échouer le projet",
    help: "Choisissez une seule première tranche à prototyper.",
    placeholder:
      "Ex. 20 photos, signature et synchronisation après 24 h hors ligne.",
  },
  {
    key: "offlineAndConflicts",
    label: "Hors-ligne, source de vérité et conflits",
    help: "Écrivez qui gagne lorsqu’une donnée a changé à deux endroits.",
    placeholder:
      "Ex. file persistante, identifiant idempotent, conflit soumis au superviseur.",
  },
  {
    key: "distribution",
    label: "Diffusion et propriétaires des comptes",
    help: "Précisez App Store, Google Play, MDM ou web et qui détient les accès.",
    placeholder:
      "Ex. TestFlight + piste Play fermée ; comptes et second administrateur côté entreprise.",
  },
  {
    key: "accessibilityPath",
    label: "Parcours obligatoire avec VoiceOver et TalkBack",
    help: "Décrivez une tâche complète, pas seulement une liste de composants.",
    placeholder:
      "Ex. ouvrir la tournée, saisir une valeur, joindre une photo, corriger une erreur et envoyer.",
  },
];

const STATUS_OPTIONS: Array<{ value: MobileGateStatus; label: string }> = [
  { value: "unknown", label: "ND — non démontré" },
  { value: "pass", label: "Pass — démontré" },
  { value: "fail", label: "Fail — échec" },
];

function numberInputValue(value: number | undefined): number | "" {
  return value === undefined || !Number.isFinite(value) ? "" : value;
}

function formatTco(result: MobileTcoResult): string {
  if (result.kind === "unknown") {
    return `ND · ${result.missing.length} poste(s) manquant(s)`;
  }
  return `${Math.round(result.total).toLocaleString("fr-FR")} € HT`;
}

function qualificationCopy(
  qualification: ReturnType<typeof qualifyMobileCandidate>,
): { title: string; detail: string; className: string } {
  if (qualification.status === "eliminated") {
    return {
      title: "Option éliminée",
      detail: `${qualification.failedGates.length} porte(s) en échec. Le prix ne peut pas les compenser.`,
      className:
        "border-rose-300 bg-rose-50 text-rose-950 dark:border-rose-800 dark:bg-rose-950/30 dark:text-rose-100",
    };
  }
  if (qualification.status === "unqualified") {
    return {
      title: "Option non qualifiée",
      detail: `${qualification.unknownGates.length} porte(s) restent ND. Il est trop tôt pour la classer.`,
      className:
        "border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100",
    };
  }
  return {
    title: "Option qualifiée sur les portes",
    detail:
      "Elle peut être comparée économiquement, sans devenir un vainqueur automatique.",
    className:
      "border-emerald-300 bg-emerald-50 text-emerald-950 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-100",
  };
}

export function MobileFrameworkDecisionDossier() {
  const [context, setContext] = useState(createEmptyMobileDecisionContext);
  const [activeCandidateIndex, setActiveCandidateIndex] = useState<0 | 1>(0);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">(
    "idle",
  );
  const [resetRequested, setResetRequested] = useState(false);
  const [sensitivityErrors, setSensitivityErrors] = useState<
    [string | null, string | null]
  >([null, null]);

  const report = useMemo(() => buildMobileDecisionReport(context), [context]);
  const candidateResults = useMemo(
    () =>
      context.candidates.map((candidate) => {
        const tco = calculateMobileTcoSeries(candidate.tco);
        const sensitivityExtraDays = normalizeMobileSensitivityExtraDays(
          candidate.sensitivityExtraDays,
        );
        const stressedTco =
          sensitivityExtraDays === undefined
            ? null
            : calculateMobileTcoSeries(
                addCriticalModuleDays(candidate.tco, sensitivityExtraDays),
              );
        return {
          qualification: qualifyMobileCandidate(candidate.gates),
          tco,
          stressedTco,
        };
      }),
    [context.candidates],
  );
  const activeCandidate = context.candidates[activeCandidateIndex];
  const activeResult = candidateResults[activeCandidateIndex];
  const qualification = qualificationCopy(activeResult.qualification);
  const activeSensitivityError = sensitivityErrors[activeCandidateIndex];

  function updateContextField(
    key: Exclude<keyof MobileDecisionContext, "candidates">,
    value: string,
  ) {
    setContext((current) => ({ ...current, [key]: value }));
    setCopyStatus("idle");
  }

  function updateCandidate(
    index: 0 | 1,
    updater: (candidate: MobileCandidateInput) => MobileCandidateInput,
  ) {
    setContext((current) => {
      const candidates = [...current.candidates] as [
        MobileCandidateInput,
        MobileCandidateInput,
      ];
      candidates[index] = updater(candidates[index]);
      return { ...current, candidates };
    });
    setCopyStatus("idle");
  }

  function updateActiveCandidate(
    updater: (candidate: MobileCandidateInput) => MobileCandidateInput,
  ) {
    updateCandidate(activeCandidateIndex, updater);
  }

  function updateGate(
    gateId: MobileGateId,
    patch: Partial<MobileCandidateInput["gates"][MobileGateId]>,
  ) {
    updateActiveCandidate((candidate) => ({
      ...candidate,
      gates: {
        ...candidate.gates,
        [gateId]: { ...candidate.gates[gateId], ...patch },
      },
    }));
  }

  function updateTco(field: MobileTcoField, rawValue: string) {
    updateActiveCandidate((candidate) => ({
      ...candidate,
      tco: {
        ...candidate.tco,
        [field]: rawValue === "" ? undefined : Number(rawValue),
      },
    }));
  }

  function updateSensitivity(rawValue: string) {
    const parsedValue = rawValue === "" ? undefined : Number(rawValue);
    const normalizedValue = normalizeMobileSensitivityExtraDays(parsedValue);
    const hasInvalidValue = rawValue !== "" && normalizedValue === undefined;

    updateActiveCandidate((candidate) => ({
      ...candidate,
      sensitivityExtraDays: normalizedValue,
    }));
    setSensitivityErrors((current) => {
      const next = [...current] as [string | null, string | null];
      next[activeCandidateIndex] = hasInvalidValue
        ? "Saisissez un nombre fini supérieur ou égal à zéro."
        : null;
      return next;
    });
  }

  function resetDossier() {
    setContext(createEmptyMobileDecisionContext());
    setActiveCandidateIndex(0);
    setCopyStatus("idle");
    setResetRequested(false);
    setSensitivityErrors([null, null]);
  }

  async function copyReport() {
    const copied = await copyTextToClipboard(report);
    setCopyStatus(copied ? "copied" : "error");
  }

  return (
    <>
      <style>
        {
          "@media print { body *:not(#mobile-framework-decision-dossier):not(#mobile-framework-decision-dossier *):not(:has(#mobile-framework-decision-dossier)) { display: none !important; } #mobile-framework-decision-dossier { position: absolute !important; inset: 0 auto auto 0 !important; width: 100% !important; margin: 0 !important; overflow: visible !important; border: 0 !important; box-shadow: none !important; background: white !important; color: #18181b !important; } #mobile-framework-decision-dossier > :not(.mobile-decision-print-report) { display: none !important; } #mobile-framework-decision-dossier .mobile-decision-print-report { display: block !important; margin: 0 !important; background: white !important; color: #18181b !important; } #mobile-framework-decision-dossier button, #mobile-framework-decision-dossier input, #mobile-framework-decision-dossier select, #mobile-framework-decision-dossier textarea, #mobile-framework-decision-dossier [data-mobile-decision-interactive] { display: none !important; } }"
        }
      </style>
      <section
        id="mobile-framework-decision-dossier"
        className="not-prose my-10 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
        aria-labelledby="mobile-decision-title"
      >
        <div className="border-b border-zinc-800 bg-zinc-950 px-4 py-6 text-white sm:px-6">
          <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-300">
            Outil local · données non envoyées · aucun vainqueur automatique
          </p>
          <h3
            id="mobile-decision-title"
            className="mb-0 mt-2 text-xl font-bold sm:text-2xl"
          >
            Dossier de preuve avant framework
          </h3>
          <p className="mb-0 mt-2 max-w-3xl text-sm leading-relaxed text-zinc-300">
            Consignez le besoin commun, les portes éliminatoires et le coût
            complet de deux options. Une inconnue reste ND ; un échec ne
            disparaît pas derrière une moyenne ou un prix inférieur.
          </p>
        </div>

        <pre
          className="mobile-decision-print-report hidden whitespace-pre-wrap p-6 font-sans text-[10px] leading-relaxed print:block"
          data-read-time-exclude="true"
        >
          {report}
        </pre>

        <div
          className="space-y-8 p-4 print:hidden sm:p-6"
          data-mobile-decision-interactive
        >
          <fieldset>
            <legend className="text-base font-bold text-zinc-950 dark:text-white">
              1. Fixer le même besoin pour les deux options
            </legend>
            <p className="mb-4 mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              Sources techniques du guide vérifiées le{" "}
              {MOBILE_DECISION_SOURCE_DATE}. Datez séparément votre propre
              décision et vos preuves.
            </p>
            <label className="mb-4 block text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              Date de votre décision
              <input
                type="date"
                value={context.decisionDate}
                onChange={(event) =>
                  updateContextField("decisionDate", event.target.value)
                }
                className="mt-1 min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 text-sm font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white sm:max-w-xs"
              />
            </label>
            <div className="grid gap-4 md:grid-cols-2">
              {CONTEXT_FIELDS.map((field) => (
                <label
                  key={field.key}
                  className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300"
                >
                  {field.label}
                  <textarea
                    value={context[field.key]}
                    onChange={(event) =>
                      updateContextField(field.key, event.target.value)
                    }
                    placeholder={field.placeholder}
                    rows={3}
                    className="mt-1 min-h-24 w-full resize-y rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm font-normal leading-relaxed text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                  />
                  <span className="mt-1 block font-normal text-zinc-500 dark:text-zinc-400">
                    {field.help}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-base font-bold text-zinc-950 dark:text-white">
              2. Ouvrir deux dossiers indépendants
            </legend>
            <p className="mb-3 mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              Une preuve obtenue pour A ne valide jamais B. Nommez
              l’architecture complète : React Native avec Expo/EAS ou sans
              framework, Flutter, natif, KMP, PWA ou absence d’application.
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {context.candidates.map((candidate, index) => {
                const candidateIndex = index as 0 | 1;
                const result = qualificationCopy(
                  candidateResults[candidateIndex].qualification,
                );
                return (
                  <button
                    key={candidateIndex}
                    type="button"
                    aria-pressed={activeCandidateIndex === candidateIndex}
                    onClick={() => setActiveCandidateIndex(candidateIndex)}
                    className={`min-h-14 rounded-xl border p-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 ${
                      activeCandidateIndex === candidateIndex
                        ? "border-violet-500 bg-violet-50 dark:bg-violet-950/30"
                        : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
                    }`}
                  >
                    <span className="block text-sm font-bold text-zinc-950 dark:text-white">
                      {candidate.name || `Option ${candidateIndex ? "B" : "A"}`}
                    </span>
                    <span className="mt-1 block text-xs text-zinc-500 dark:text-zinc-400">
                      {result.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          <section
            aria-labelledby="active-mobile-option-title"
            className="space-y-7 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-5"
          >
            <div>
              <h4
                id="active-mobile-option-title"
                className="m-0 text-base font-bold text-zinc-950 dark:text-white"
              >
                Dossier de {activeCandidate.name}
              </h4>
              <p className="mb-0 mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                Chaque champ vide reste explicitement non déterminé.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                Nom de l’option
                <input
                  value={activeCandidate.name}
                  onChange={(event) =>
                    updateActiveCandidate((candidate) => ({
                      ...candidate,
                      name: event.target.value,
                    }))
                  }
                  className="mt-1 min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 text-sm font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                />
              </label>
              <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                Architecture, versions et services
                <textarea
                  value={activeCandidate.stack}
                  onChange={(event) =>
                    updateActiveCandidate((candidate) => ({
                      ...candidate,
                      stack: event.target.value,
                    }))
                  }
                  placeholder="Ex. RN 0.86 + Expo SDK 57 + EAS, versions et sortie du service précisées."
                  rows={3}
                  className="mt-1 min-h-24 w-full resize-y rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                />
              </label>
              <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 md:col-span-2">
                Modules, plugins et SDK
                <textarea
                  value={activeCandidate.moduleInventory}
                  onChange={(event) =>
                    updateActiveCandidate((candidate) => ({
                      ...candidate,
                      moduleInventory: event.target.value,
                    }))
                  }
                  placeholder="Nom, version, licence, données/permissions, compatibilité, mainteneur, code natif et solution de repli."
                  rows={4}
                  className="mt-1 min-h-28 w-full resize-y rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                />
              </label>
            </div>

            <fieldset>
              <legend className="text-sm font-bold text-zinc-950 dark:text-white">
                Portes pass / fail / ND
              </legend>
              <div className="mt-3 space-y-3">
                {MOBILE_GATE_IDS.map((gateId) => {
                  const gate = activeCandidate.gates[gateId];
                  return (
                    <div
                      key={gateId}
                      className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-950 md:grid-cols-[0.65fr_1.35fr]"
                    >
                      <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                        {MOBILE_GATES[gateId].label}
                        <select
                          value={gate.status}
                          onChange={(event) =>
                            updateGate(gateId, {
                              status: event.target.value as MobileGateStatus,
                            })
                          }
                          className="mt-1 min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 text-sm font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                        >
                          {STATUS_OPTIONS.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <span className="mt-1 block font-normal leading-relaxed text-zinc-500 dark:text-zinc-400">
                          {MOBILE_GATES[gateId].expected}
                        </span>
                      </label>
                      <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                        Preuve, version, appareil et date
                        <textarea
                          value={gate.evidence}
                          onChange={(event) =>
                            updateGate(gateId, {
                              evidence: event.target.value,
                            })
                          }
                          placeholder="Ex. build, commit, appareil, scénario, résultat brut et responsable."
                          rows={3}
                          className="mt-1 min-h-24 w-full resize-y rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                        />
                      </label>
                    </div>
                  );
                })}
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-sm font-bold text-zinc-950 dark:text-white">
                TCO à 12, 36 et 60 mois
              </legend>
              <p className="mb-3 mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                TCO signifie coût complet. Les évolutions métier restent
                séparées de la maintenance technique. Chaque champ est requis
                pour calculer ; vide = ND.
              </p>
              <div className="grid gap-3 md:grid-cols-2">
                {MOBILE_TCO_FIELDS.map((field) => (
                  <label
                    key={field.key}
                    className="rounded-xl border border-zinc-200 bg-white p-3 text-xs font-semibold text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
                  >
                    {field.label}
                    <span className="ml-1 font-normal text-zinc-500">
                      ({field.unit})
                    </span>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      inputMode="decimal"
                      value={numberInputValue(activeCandidate.tco[field.key])}
                      onChange={(event) =>
                        updateTco(field.key, event.target.value)
                      }
                      className="mt-1 min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 text-sm font-normal text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                    />
                    <span className="mt-1 block font-normal leading-relaxed text-zinc-500 dark:text-zinc-400">
                      {field.help}
                    </span>
                  </label>
                ))}
                <label className="rounded-xl border border-violet-200 bg-violet-50 p-3 text-xs font-semibold text-violet-950 dark:border-violet-900 dark:bg-violet-950/30 dark:text-violet-100 md:col-span-2">
                  Sensibilité : journées ajoutées si le module critique échoue
                  ou doit être internalisé
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    inputMode="decimal"
                    value={numberInputValue(
                      activeCandidate.sensitivityExtraDays,
                    )}
                    onChange={(event) => updateSensitivity(event.target.value)}
                    aria-invalid={activeSensitivityError !== null}
                    aria-describedby={`mobile-sensitivity-help-${activeCandidateIndex}${
                      activeSensitivityError
                        ? ` mobile-sensitivity-error-${activeCandidateIndex}`
                        : ""
                    }`}
                    className="mt-1 min-h-11 w-full rounded-lg border border-violet-300 bg-white px-3 text-sm font-normal text-zinc-950 dark:border-violet-800 dark:bg-zinc-900 dark:text-white sm:max-w-xs"
                  />
                  <span
                    id={`mobile-sensitivity-help-${activeCandidateIndex}`}
                    className="mt-1 block font-normal leading-relaxed opacity-80"
                  >
                    Cette hypothèse s’ajoute au travail initial et montre si une
                    seule dépendance peut renverser l’écart.
                  </span>
                  {activeSensitivityError ? (
                    <span
                      id={`mobile-sensitivity-error-${activeCandidateIndex}`}
                      role="alert"
                      className="mt-2 block font-semibold text-rose-700 dark:text-rose-300"
                    >
                      {activeSensitivityError}
                    </span>
                  ) : null}
                </label>
              </div>
            </fieldset>

            <div
              className={`rounded-xl border p-4 ${qualification.className}`}
              aria-live="polite"
            >
              <p className="m-0 text-sm font-bold">{qualification.title}</p>
              <p className="mb-0 mt-1 text-xs leading-relaxed">
                {qualification.detail}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {activeResult.tco.map((result) => (
                <div
                  key={result.horizonMonths}
                  className="rounded-xl border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-950"
                >
                  <p className="m-0 text-xs font-bold text-zinc-500">
                    {result.horizonMonths} mois
                  </p>
                  <p className="mb-0 mt-1 text-sm font-bold text-zinc-950 dark:text-white">
                    {formatTco(result)}
                  </p>
                </div>
              ))}
            </div>

            {activeResult.stressedTco ? (
              <div className="rounded-xl border border-violet-200 bg-violet-50 p-3 text-xs leading-relaxed text-violet-950 dark:border-violet-900 dark:bg-violet-950/30 dark:text-violet-100">
                <strong>
                  Sensibilité avec +{activeCandidate.sensitivityExtraDays} jours
                  :
                </strong>{" "}
                12 mois {formatTco(activeResult.stressedTco[0])} · 36 mois{" "}
                {formatTco(activeResult.stressedTco[1])} · 60 mois{" "}
                {formatTco(activeResult.stressedTco[2])}.
              </div>
            ) : null}
          </section>

          <section aria-labelledby="mobile-comparison-summary">
            <h4
              id="mobile-comparison-summary"
              className="m-0 text-base font-bold text-zinc-950 dark:text-white"
            >
              3. Comparer sans fabriquer de gagnant
            </h4>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {context.candidates.map((candidate, index) => {
                const result = candidateResults[index];
                const copy = qualificationCopy(result.qualification);
                return (
                  <div
                    key={index}
                    className={`rounded-xl border p-4 ${copy.className}`}
                  >
                    <p className="m-0 text-sm font-bold">
                      {candidate.name || `Option ${index ? "B" : "A"}`}
                    </p>
                    <p className="mb-0 mt-1 text-xs font-semibold">
                      {copy.title}
                    </p>
                    <p className="mb-0 mt-2 text-xs leading-relaxed">
                      12 mois : {formatTco(result.tco[0])}
                      <br />
                      36 mois : {formatTco(result.tco[1])}
                      <br />
                      60 mois : {formatTco(result.tco[2])}
                    </p>
                  </div>
                );
              })}
            </div>
            <p className="mb-0 mt-3 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              N’utilisez l’écart de coût qu’entre options qualifiées. Le dossier
              laisse volontairement la décision à vos responsables : aucune note
              opaque ne compense une perte de données, un parcours inaccessible
              ou une build impossible à reprendre.
            </p>
          </section>

          {resetRequested ? (
            <div
              role="alert"
              aria-live="assertive"
              aria-labelledby="mobile-reset-title"
              aria-describedby="mobile-reset-description"
              className="rounded-xl border border-rose-300 bg-rose-50 p-4 text-rose-950 dark:border-rose-800 dark:bg-rose-950/30 dark:text-rose-100"
            >
              <p id="mobile-reset-title" className="m-0 text-sm font-bold">
                Effacer les deux dossiers ?
              </p>
              <p
                id="mobile-reset-description"
                className="mb-0 mt-1 text-xs leading-relaxed"
              >
                Le besoin, les preuves, les portes et les coûts seront supprimés
                dans cet onglet. Cette action ne peut pas être annulée.
              </p>
              <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                <button
                  type="button"
                  onClick={resetDossier}
                  className="min-h-11 rounded-lg bg-rose-700 px-4 py-2 text-xs font-bold text-white hover:bg-rose-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2"
                >
                  Effacer définitivement
                </button>
                <button
                  type="button"
                  onClick={() => setResetRequested(false)}
                  className="min-h-11 rounded-lg border border-rose-300 bg-white px-4 py-2 text-xs font-bold text-rose-900 hover:bg-rose-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2 dark:border-rose-700 dark:bg-zinc-950 dark:text-rose-100"
                >
                  Annuler et conserver
                </button>
              </div>
            </div>
          ) : null}

          <div className="flex flex-col gap-2 border-t border-zinc-200 pt-5 dark:border-zinc-800 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={copyReport}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-violet-700 px-4 py-2 text-sm font-bold text-white hover:bg-violet-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2"
            >
              <ClipboardCheck className="size-4" aria-hidden="true" />
              Copier le dossier
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-zinc-900 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900"
            >
              <Printer className="size-4" aria-hidden="true" />
              Imprimer le dossier
            </button>
            <button
              type="button"
              onClick={() => setResetRequested(true)}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-zinc-900 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900"
            >
              <RotateCcw className="size-4" aria-hidden="true" />
              Réinitialiser
            </button>
          </div>

          <p
            className="m-0 text-xs font-semibold text-zinc-600 dark:text-zinc-300"
            aria-live="polite"
          >
            {copyStatus === "copied"
              ? "Dossier copié. Vous pouvez le transmettre à un associé ou à un prestataire."
              : copyStatus === "error"
                ? "La copie a échoué dans ce navigateur. Utilisez le bouton « Imprimer le dossier »."
                : "Vos saisies restent dans cet onglet et ne sont pas envoyées à Hagnéré Code."}
          </p>
        </div>
      </section>
    </>
  );
}
