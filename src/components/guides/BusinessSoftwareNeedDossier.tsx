"use client";

import { useMemo, useState } from "react";
import {
  ClipboardCheck,
  Download,
  FileCheck2,
  Plus,
  RotateCcw,
  Trash2,
  Upload,
} from "lucide-react";
import { copyTextToClipboard } from "@/lib/clipboard";
import {
  BUSINESS_SOFTWARE_PILOT_GATE_LABELS,
  BUSINESS_SOFTWARE_PROOF_IDS,
  BUSINESS_SOFTWARE_PROOF_LABELS,
  buildBusinessSoftwareNeedCsv,
  buildBusinessSoftwareNeedJson,
  buildBusinessSoftwareNeedNote,
  createFictitiousBusinessSoftwareNeedDossier,
  evaluateBusinessSoftwareNeed,
  parseBusinessSoftwareNeedJson,
  type BusinessSoftwareProof,
  type BusinessSoftwareNeedDossier,
  type CandidateAction,
  type CurrentToolFinding,
  type NullableNumber,
  type ObservedSituation,
  type OptionCost,
  type PilotGate,
  type ProofStatus,
  type RuleStability,
  type SafetyGate,
  type StandardTrialFinding,
  type TriState,
} from "@/lib/business-software-need-decision";

const INPUT =
  "mt-1.5 min-h-11 w-full min-w-0 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-left text-sm text-zinc-950 outline-none focus-visible:border-violet-600 focus-visible:ring-2 focus-visible:ring-violet-300 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white";
const LABEL =
  "block min-w-0 text-left text-sm font-semibold text-zinc-800 dark:text-zinc-200";
const HELP =
  "mt-1 block text-left text-xs font-normal leading-relaxed text-zinc-500 dark:text-zinc-400";
const BUTTON =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-45";
const JSON_IMPORT_MAX_BYTES = 2_000_000;

const STATE_LABELS = {
  SECURISER_D_ABORD: "STOP — sécuriser d’abord",
  INCOMPLET: "INCOMPLET / INVALIDE — corriger le dossier",
  OBSERVER: "OBSERVER — ne pas figer trop tôt",
  CORRIGER_STANDARDISER: "CORRIGER / STANDARDISER",
  COMPARER_PILOTER: "COMPARER / PILOTER",
  DECISION_HUMAINE: "DÉCISION HUMAINE DOCUMENTÉE",
} as const;

const ACTION_LABELS: Record<CandidateAction, string> = {
  SECURISER: "Sécuriser",
  CORRIGER_STANDARDISER: "Corriger / standardiser",
  INTEGRER_AUTOMATISER: "Intégrer / automatiser",
  ACHETER_CONFIGURER: "Acheter / configurer",
  ETUDIER_SUR_MESURE: "Étudier le sur-mesure",
  OBSERVER: "Observer",
};

const COSTED_ACTIONS: OptionCost["action"][] = [
  "CORRIGER_STANDARDISER",
  "INTEGRER_AUTOMATISER",
  "ACHETER_CONFIGURER",
  "ETUDIER_SUR_MESURE",
];

const SAFETY_FIELDS: Array<{
  key: keyof SafetyGate;
  label: string;
  help: string;
}> = [
  {
    key: "activeIncidentOrExposure",
    label: "Incident, fuite ou exposition potentiellement active ?",
    help: "OUI déclenche un STOP. Une suspicion en cours relève d’une réponse spécialisée, pas d’un projet fonctionnel.",
  },
  {
    key: "restorableBackupProved",
    label: "Une restauration utile a-t-elle été exercée ?",
    help: "L’existence d’une sauvegarde ou d’un voyant vert ne suffit pas.",
  },
  {
    key: "privilegedAccessControlled",
    label: "Les comptes privilégiés et les départs sont-ils maîtrisés ?",
    help: "NON déclenche un STOP, même si le futur outil paraît rentable.",
  },
  {
    key: "criticalManualFallbackTested",
    label: "Le mode dégradé d’une activité critique a-t-il été testé ?",
    help: "NON déclenche un STOP jusqu’à l’exercice d’une solution temporaire.",
  },
];

const CURRENT_TOOL_OPTIONS: Array<[CurrentToolFinding, string]> = [
  ["ND", "Inconnu"],
  ["NON_TESTE", "Pas encore testé"],
  ["FONCTIONNE_APRES_CORRECTION", "Réussit après réglage / formation"],
  ["DEFAILLANT", "Défaillant ou obsolète"],
  ["ECART_CONFIRME", "Écart fonctionnel confirmé"],
];

const STANDARD_OPTIONS: Array<[StandardTrialFinding, string]> = [
  ["ND", "Inconnu"],
  ["NON_EXAMINE", "Pas encore examiné"],
  ["COUVRE", "Couvre le cas"],
  ["COUVRE_PARTIELLEMENT", "Couvre avec un écart borné"],
  ["ECHEC_CAS_CRITIQUE", "Échoue sur un cas critique rejoué"],
];

const RULE_OPTIONS: Array<[RuleStability, string]> = [
  ["ND", "Inconnue"],
  ["CHANGEANTE", "Change encore souvent"],
  ["ASSEZ_STABLE", "Assez stable, exceptions restantes"],
  ["STABLE", "Stable et explicable"],
];

const PROOF_OPTIONS: Array<[ProofStatus, string]> = [
  ["ND", "Inconnu"],
  ["DECLARE", "Déclaré, non vérifié"],
  ["VERIFIE", "Vérifié par une preuve"],
  ["ECHEC", "Échec au test"],
];

const money = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});
const number = new Intl.NumberFormat("fr-FR", {
  maximumFractionDigits: 2,
});

function numberValue(value: NullableNumber): number | "" {
  return value === null ? "" : value;
}

function parseNumber(value: string): NullableNumber {
  if (value.trim() === "") return null;
  const parsed = Number(value.replace(",", "."));
  return Number.isFinite(parsed) ? parsed : null;
}

function currentLocalDate(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function downloadText(filename: string, text: string, type: string): boolean {
  try {
    const url = URL.createObjectURL(new Blob([text], { type }));
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    return true;
  } catch {
    return false;
  }
}

function createEmptyOption(options: OptionCost[]): OptionCost {
  const usedIds = new Set(options.map((option) => option.id));
  let sequence = 1;
  while (usedIds.has(`OPT-${String(sequence).padStart(2, "0")}`)) {
    sequence += 1;
  }
  return {
    id: `OPT-${String(sequence).padStart(2, "0")}`,
    label: "Nouvelle option à qualifier",
    action: "ACHETER_CONFIGURER",
    realOptionConfirmed: false,
    samePerimeterConfirmed: "ND",
    criticalCasesReplayed: "ND",
    initialCost: null,
    monthlyRunCost: null,
    exitCost: null,
  };
}

function SelectTriState({
  id,
  value,
  onChange,
}: {
  id: string;
  value: TriState;
  onChange: (value: TriState) => void;
}) {
  return (
    <select
      id={id}
      className={INPUT}
      value={value}
      onChange={(event) => onChange(event.target.value as TriState)}
    >
      <option value="ND">Inconnu</option>
      <option value="OUI">Oui</option>
      <option value="NON">Non</option>
    </select>
  );
}

function Metric({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail?: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-4 text-left dark:border-zinc-800 dark:bg-zinc-950">
      <p className="m-0 text-xs font-bold uppercase tracking-[0.11em] text-zinc-500 dark:text-zinc-400">
        {label}
      </p>
      <p className="mb-0 mt-2 text-xl font-bold tabular-nums text-zinc-950 dark:text-white">
        {value}
      </p>
      {detail && (
        <p className="mb-0 mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
          {detail}
        </p>
      )}
    </div>
  );
}

export function BusinessSoftwareNeedDossier() {
  const [dossier, setDossier] = useState<BusinessSoftwareNeedDossier>(() =>
    createFictitiousBusinessSoftwareNeedDossier(),
  );
  const [message, setMessage] = useState("");
  const decision = useMemo(
    () => evaluateBusinessSoftwareNeed(dossier),
    [dossier],
  );

  const updateSituation = <K extends keyof ObservedSituation>(
    index: number,
    field: K,
    value: ObservedSituation[K],
  ) => {
    setDossier((current) => ({
      ...current,
      humanDecisionConfirmed: false,
      situations: current.situations.map((situation, situationIndex) =>
        situationIndex === index ? { ...situation, [field]: value } : situation,
      ),
    }));
  };

  const updateOption = <K extends keyof OptionCost>(
    index: number,
    field: K,
    value: OptionCost[K],
  ) => {
    setDossier((current) => ({
      ...current,
      humanDecisionConfirmed: false,
      options: current.options.map((option, optionIndex) =>
        optionIndex === index ? { ...option, [field]: value } : option,
      ),
    }));
  };

  const updatePilotGate = <K extends keyof PilotGate>(
    index: number,
    field: K,
    value: PilotGate[K],
  ) => {
    setDossier((current) => ({
      ...current,
      humanDecisionConfirmed: false,
      pilotGates: current.pilotGates.map((gate, gateIndex) =>
        gateIndex === index
          ? {
              ...gate,
              [field]: value,
              ...(field === "realGateConfirmed"
                ? {}
                : { realGateConfirmed: false }),
            }
          : gate,
      ),
    }));
  };

  const addOption = () => {
    setDossier((current) => {
      if (current.options.length >= 6) return current;
      return {
        ...current,
        humanDecisionConfirmed: false,
        options: [...current.options, createEmptyOption(current.options)],
      };
    });
    setMessage(
      dossier.options.length >= 6
        ? "Six options au maximum : regroupez ou retirez une variante."
        : "Option ajoutée : renseignez son identifiant, sa voie, ses cas et son TCO.",
    );
  };

  const removeOption = (index: number) => {
    setDossier((current) => {
      if (current.options.length <= 2) return current;
      return {
        ...current,
        humanDecisionConfirmed: false,
        options: current.options.filter(
          (_, optionIndex) => optionIndex !== index,
        ),
      };
    });
    setMessage(
      dossier.options.length <= 2
        ? "Deux options comparables au minimum sont requises."
        : "Option retirée ; la décision humaine doit être reconfirmée.",
    );
  };

  const copyWorkingNote = async () => {
    const copied = await copyTextToClipboard(
      buildBusinessSoftwareNeedNote(dossier),
    );
    setMessage(copied ? "Note de travail copiée." : "Copie impossible.");
  };

  const copyFinalNote = async () => {
    if (!decision.finalExportAllowed) {
      setMessage(
        "La note finale reste verrouillée : conservez les inconnues et complétez les preuves.",
      );
      return;
    }
    const copied = await copyTextToClipboard(
      buildBusinessSoftwareNeedNote(dossier),
    );
    setMessage(copied ? "Note finale copiée." : "Copie impossible.");
  };

  const importJsonFile = async (file: File | undefined) => {
    if (!file) return;
    if (file.size > JSON_IMPORT_MAX_BYTES) {
      setMessage("Import refusé : le fichier JSON dépasse 2 Mo.");
      return;
    }
    try {
      const imported = parseBusinessSoftwareNeedJson(await file.text());
      setDossier(imported);
      setMessage(
        "Dossier JSON importé et revalidé. Vérifiez ses preuves et confirmations avant toute décision.",
      );
    } catch {
      setMessage(
        "Import refusé : enveloppe, version ou données du dossier invalides.",
      );
    }
  };

  const confirmRealData = () => {
    setDossier((current) => ({
      ...current,
      provenance: "DONNEES_REELLES",
      realDataConfirmed: true,
      asOfDate: currentLocalDate(),
      humanDecisionConfirmed: false,
      sponsor: current.sponsor.includes("exemple") ? "" : current.sponsor,
      processOwner: current.processOwner.includes("exemple")
        ? ""
        : current.processOwner,
      safety: {
        activeIncidentOrExposure: "ND",
        restorableBackupProved: "ND",
        privilegedAccessControlled: "ND",
        criticalManualFallbackTested: "ND",
      },
      situations: current.situations.map((situation) => ({
        ...situation,
        realSituationConfirmed: false,
      })),
      options: current.options.map((option) => ({
        ...option,
        realOptionConfirmed: false,
      })),
      pilotGates: current.pilotGates.map((gate) => ({
        ...gate,
        casePopulation: "",
        baseline: "",
        stopCriterion: "",
        continueCriterion: "",
        rollbackPlan: "",
        owner: "",
        reviewOn: "",
        realGateConfirmed: false,
      })),
      expiresOn: "",
      reviewer: "",
      reviewedOn: "",
      proofs: Object.fromEntries(
        BUSINESS_SOFTWARE_PROOF_IDS.map((id) => [
          id,
          {
            status: "ND",
            evidenceRef: "",
            owner: "",
            verifiedOn: "",
          } satisfies BusinessSoftwareProof,
        ]),
      ) as BusinessSoftwareNeedDossier["proofs"],
    }));
    setMessage(
      "Dossier réel démarré à la date du jour. Remplacez et confirmez séparément chaque situation, option et jalon du pilote.",
    );
  };

  return (
    <section
      id="diagnostic-logiciel-metier"
      data-read-time-exclude="true"
      className="not-prose my-10 scroll-mt-24 overflow-hidden rounded-2xl border border-violet-200 bg-[#f7f4ff] text-left shadow-sm dark:border-violet-900 dark:bg-violet-950/20"
      aria-labelledby="diagnostic-logiciel-metier-title"
    >
      <div className="border-b border-violet-200 px-4 py-5 dark:border-violet-900 sm:px-6">
        <p className="m-0 text-xs font-bold uppercase tracking-[0.14em] text-violet-700 dark:text-violet-300">
          Outil local et déterministe · aucun appel réseau
        </p>
        <p className="mb-0 mt-2 inline-flex rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.12em] text-amber-800 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-200">
          {dossier.provenance === "EXEMPLE_FICTIF"
            ? "EXEMPLE FICTIF"
            : "DONNÉES RÉELLES À VÉRIFIER"}
        </p>
        <h2
          id="diagnostic-logiciel-metier-title"
          className="mb-0 mt-2 text-2xl font-bold text-zinc-950 dark:text-white"
        >
          8. Dossier de décision — trois situations, six voies
        </h2>
        <p className="mb-0 mt-3 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          Remplacez l’exemple fictif par trois événements prouvés. Le moteur
          annualise seulement les temps observés, applique les STOP non
          compensables et compare les coûts complets. Il ne recommande jamais
          automatiquement un logiciel ni du sur-mesure. Les huit réponses du
          guide sont regroupées en six voies de décision : simplifier et
          corriger partagent une porte, tandis que le low-code reste une
          modalité à tester dans la voie réellement concernée.
        </p>
      </div>

      <div className="space-y-8 px-4 py-6 sm:px-6">
        <div className="grid gap-3 sm:grid-cols-3">
          <Metric
            label="État du dossier"
            value={STATE_LABELS[decision.state]}
            detail={
              decision.finalExportAllowed
                ? "La décision reste humaine et doit expirer à sa prochaine revue."
                : "L’export final est verrouillé."
            }
          />
          <Metric
            label="Actions à examiner"
            value={String(decision.eligibleActions.length)}
            detail={
              decision.eligibleActions
                .map((action) => ACTION_LABELS[action])
                .join(" · ") || "Aucune action interprétable"
            }
          />
          <Metric
            label="Preuves à reprendre"
            value={String(decision.missingEvidence.length)}
            detail="Une inconnue reste inconnue : elle ne devient jamais zéro."
          />
        </div>

        <div
          className={`rounded-xl border p-4 text-left ${
            decision.state === "SECURISER_D_ABORD"
              ? "border-red-300 bg-red-50 dark:border-red-900 dark:bg-red-950/30"
              : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
          }`}
          data-decision-stage={decision.state}
        >
          <p className="m-0 text-xs font-extrabold uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-400">
            Prochaine vérification
          </p>
          <p className="mb-0 mt-2 text-sm font-semibold leading-relaxed text-zinc-900 dark:text-white">
            {decision.nextTest}
          </p>
          {decision.stopReasons.length > 0 && (
            <ul className="mb-0 mt-3 space-y-1 pl-5 text-sm text-red-800 dark:text-red-200">
              {decision.stopReasons.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          )}
          {decision.invalidFields.length > 0 && (
            <div className="mt-3 text-sm text-amber-900 dark:text-amber-200">
              <p className="m-0 font-bold">Champs invalides à corriger :</p>
              <ul className="mb-0 mt-1 space-y-1 pl-5">
                {decision.invalidFields.map((field) => (
                  <li key={field}>{field}</li>
                ))}
              </ul>
            </div>
          )}
          {decision.blockedReasons.length > 0 && (
            <div className="mt-3 text-sm text-amber-900 dark:text-amber-200">
              <p className="m-0 font-bold">Blocages à lever :</p>
              <ul className="mb-0 mt-1 space-y-1 pl-5">
                {decision.blockedReasons.map((reason) => (
                  <li key={reason}>{reason}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <fieldset className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
          <legend className="px-2 text-base font-bold text-zinc-950 dark:text-white">
            1. Portes de sécurité et de continuité
          </legend>
          <div className="mt-2 grid gap-4 md:grid-cols-2">
            {SAFETY_FIELDS.map((field) => (
              <label key={field.key} className={LABEL}>
                {field.label}
                <SelectTriState
                  id={`safety-${field.key}`}
                  value={dossier.safety[field.key]}
                  onChange={(value) =>
                    setDossier((current) => ({
                      ...current,
                      humanDecisionConfirmed: false,
                      safety: { ...current.safety, [field.key]: value },
                    }))
                  }
                />
                <span className={HELP}>{field.help}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <h3 className="m-0 text-lg font-bold text-zinc-950 dark:text-white">
            2. Trois situations réellement arrivées
          </h3>
          <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            Conservez un cas courant, un cas difficile et un cas à conséquence.
            Les heures d’attente restent séparées du travail actif et ne sont
            jamais comptées comme économie de trésorerie.
          </p>
          <div className="mt-4 space-y-5">
            {dossier.situations.map((situation, index) => {
              const assessment = decision.situations[index];
              return (
                <fieldset
                  key={situation.id}
                  className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
                >
                  <legend className="px-2 text-base font-bold text-zinc-950 dark:text-white">
                    Situation {index + 1} ·{" "}
                    {assessment?.action
                      ? ACTION_LABELS[assessment.action]
                      : "incomplète"}
                  </legend>
                  <div className="mt-2 grid gap-4 md:grid-cols-2">
                    <label className={LABEL}>
                      Situation observée
                      <input
                        className={INPUT}
                        value={situation.title}
                        onChange={(event) =>
                          updateSituation(index, "title", event.target.value)
                        }
                      />
                    </label>
                    <label className={LABEL}>
                      Date de l’événement
                      <input
                        type="date"
                        max={dossier.asOfDate}
                        className={INPUT}
                        value={situation.observedOn}
                        onChange={(event) =>
                          updateSituation(
                            index,
                            "observedOn",
                            event.target.value,
                          )
                        }
                      />
                    </label>
                    <label className={LABEL}>
                      Référence de preuve, sans secret
                      <input
                        className={INPUT}
                        value={situation.evidenceRef}
                        onChange={(event) =>
                          updateSituation(
                            index,
                            "evidenceRef",
                            event.target.value,
                          )
                        }
                      />
                    </label>
                    <label className={LABEL}>
                      Fréquence observée par mois
                      <input
                        type="number"
                        min="0"
                        max="1000000"
                        step="0.01"
                        className={INPUT}
                        value={numberValue(situation.frequencyPerMonth)}
                        onChange={(event) =>
                          updateSituation(
                            index,
                            "frequencyPerMonth",
                            parseNumber(event.target.value),
                          )
                        }
                      />
                    </label>
                  </div>

                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    {(
                      [
                        [
                          "activeMinutesPerOccurrence",
                          "Minutes actives / occurrence",
                        ],
                        [
                          "correctionMinutesPerOccurrence",
                          "Minutes de correction / occurrence",
                        ],
                        [
                          "waitMinutesPerOccurrence",
                          "Minutes d’attente / occurrence",
                        ],
                      ] as const
                    ).map(([field, label]) => (
                      <label key={field} className={LABEL}>
                        {label}
                        <input
                          type="number"
                          min="0"
                          max="1000000"
                          step="0.01"
                          className={INPUT}
                          value={numberValue(situation[field])}
                          onChange={(event) =>
                            updateSituation(
                              index,
                              field,
                              parseNumber(event.target.value),
                            )
                          }
                        />
                      </label>
                    ))}
                  </div>

                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <label className={LABEL}>
                      Conséquence la plus grave observée
                      <select
                        className={INPUT}
                        value={situation.consequence}
                        onChange={(event) =>
                          updateSituation(
                            index,
                            "consequence",
                            event.target
                              .value as ObservedSituation["consequence"],
                          )
                        }
                      >
                        <option value="ND">Inconnue</option>
                        <option value="FAIBLE">Faible et réversible</option>
                        <option value="SIGNIFICATIVE">
                          Significative pour l’activité ou le client
                        </option>
                        <option value="CRITIQUE">
                          Critique, réglementaire ou arrêt possible
                        </option>
                      </select>
                    </label>
                    <label className={LABEL}>
                      Stabilité de la règle métier
                      <select
                        className={INPUT}
                        value={situation.ruleStability}
                        onChange={(event) =>
                          updateSituation(
                            index,
                            "ruleStability",
                            event.target.value as RuleStability,
                          )
                        }
                      >
                        {RULE_OPTIONS.map(([value, label]) => (
                          <option key={value} value={value}>
                            {label}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className={LABEL}>
                      Résultat après correction de l’outil actuel
                      <select
                        className={INPUT}
                        value={situation.currentToolFinding}
                        onChange={(event) =>
                          updateSituation(
                            index,
                            "currentToolFinding",
                            event.target.value as CurrentToolFinding,
                          )
                        }
                      >
                        {CURRENT_TOOL_OPTIONS.map(([value, label]) => (
                          <option key={value} value={value}>
                            {label}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className={LABEL}>
                      Résultat d’un standard sur le même cas
                      <select
                        className={INPUT}
                        value={situation.standardTrialFinding}
                        onChange={(event) =>
                          updateSituation(
                            index,
                            "standardTrialFinding",
                            event.target.value as StandardTrialFinding,
                          )
                        }
                      >
                        {STANDARD_OPTIONS.map(([value, label]) => (
                          <option key={value} value={value}>
                            {label}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className={LABEL}>
                      Même information transférée manuellement ?
                      <SelectTriState
                        id={`situation-${index}-transfer`}
                        value={situation.repeatedManualTransfer}
                        onChange={(value) =>
                          updateSituation(
                            index,
                            "repeatedManualTransfer",
                            value,
                          )
                        }
                      />
                    </label>
                    <label className={LABEL}>
                      Responsable et mode de secours documentés ?
                      <SelectTriState
                        id={`situation-${index}-owner`}
                        value={situation.ownerAndFallbackDocumented}
                        onChange={(value) =>
                          updateSituation(
                            index,
                            "ownerAndFallbackDocumented",
                            value,
                          )
                        }
                      />
                    </label>
                    <label className={LABEL}>
                      Écart réellement différenciant pour l’entreprise ?
                      <SelectTriState
                        id={`situation-${index}-differentiator`}
                        value={situation.businessDifferentiator}
                        onChange={(value) =>
                          updateSituation(
                            index,
                            "businessDifferentiator",
                            value,
                          )
                        }
                      />
                    </label>
                  </div>

                  <label className="mt-4 flex min-h-11 items-start gap-3 rounded-lg border border-amber-200 bg-amber-50/70 p-3 text-left dark:border-amber-900 dark:bg-amber-950/20">
                    <input
                      type="checkbox"
                      className="mt-1 size-4 accent-violet-700"
                      checked={situation.realSituationConfirmed}
                      onChange={(event) =>
                        updateSituation(
                          index,
                          "realSituationConfirmed",
                          event.target.checked,
                        )
                      }
                    />
                    <span className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                      Je confirme avoir remplacé l’exemple par cet événement
                      réel, daté et expurgé, puis contrôlé sa référence de
                      preuve.
                    </span>
                  </label>

                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    <Metric
                      label="Occurrences / an"
                      value={
                        assessment?.annualOccurrences === null
                          ? "ND"
                          : number.format(assessment.annualOccurrences)
                      }
                    />
                    <Metric
                      label="Travail + correction / an"
                      value={
                        assessment?.annualActiveAndCorrectionHours === null
                          ? "ND"
                          : `${number.format(
                              assessment.annualActiveAndCorrectionHours,
                            )} h`
                      }
                      detail="Capacité observée, pas économie encaissable."
                    />
                    <Metric
                      label="Attente cumulée / an"
                      value={
                        assessment?.annualWaitHours === null
                          ? "ND"
                          : `${number.format(assessment.annualWaitHours)} h`
                      }
                      detail="Délai de flux, séparé du travail."
                    />
                  </div>
                </fieldset>
              );
            })}
          </div>
        </div>

        <fieldset className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
          <legend className="px-2 text-base font-bold text-zinc-950 dark:text-white">
            3. Huit domaines de preuve
          </legend>
          <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            Un statut « vérifié » ne suffit pas : chaque preuve doit garder une
            référence expurgée, un responsable et une date au plus tard égale à
            l’arrêté du dossier.
          </p>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {BUSINESS_SOFTWARE_PROOF_IDS.map((id) => {
              const proof = dossier.proofs[id];
              const updateProof = <K extends keyof BusinessSoftwareProof>(
                field: K,
                value: BusinessSoftwareProof[K],
              ) =>
                setDossier((current) => ({
                  ...current,
                  humanDecisionConfirmed: false,
                  proofs: {
                    ...current.proofs,
                    [id]: { ...current.proofs[id], [field]: value },
                  },
                }));
              return (
                <div
                  key={id}
                  className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-4 text-left dark:border-zinc-800 dark:bg-zinc-900/40"
                >
                  <h4 className="m-0 text-sm font-bold text-zinc-950 dark:text-white">
                    {BUSINESS_SOFTWARE_PROOF_LABELS[id]}
                  </h4>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <label className={LABEL}>
                      Statut
                      <select
                        className={INPUT}
                        value={proof.status}
                        onChange={(event) =>
                          updateProof(
                            "status",
                            event.target.value as ProofStatus,
                          )
                        }
                      >
                        {PROOF_OPTIONS.map(([value, label]) => (
                          <option key={value} value={value}>
                            {label}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className={LABEL}>
                      Date de vérification
                      <input
                        type="date"
                        max={dossier.asOfDate}
                        className={INPUT}
                        value={proof.verifiedOn}
                        onChange={(event) =>
                          updateProof("verifiedOn", event.target.value)
                        }
                      />
                    </label>
                    <label className={LABEL}>
                      Référence expurgée
                      <input
                        className={INPUT}
                        value={proof.evidenceRef}
                        onChange={(event) =>
                          updateProof("evidenceRef", event.target.value)
                        }
                      />
                    </label>
                    <label className={LABEL}>
                      Responsable de la vérification
                      <input
                        className={INPUT}
                        value={proof.owner}
                        onChange={(event) =>
                          updateProof("owner", event.target.value)
                        }
                      />
                    </label>
                  </div>
                </div>
              );
            })}
          </div>
        </fieldset>

        <div>
          <div className="flex flex-wrap items-start justify-between gap-3">
            <h3 className="m-0 text-lg font-bold text-zinc-950 dark:text-white">
              4. TCO comparable à 12, 36 et 60 mois
            </h3>
            <button
              type="button"
              className={`${BUTTON} border border-violet-300 bg-white text-violet-900 hover:bg-violet-50 dark:border-violet-900 dark:bg-zinc-950 dark:text-violet-100`}
              onClick={addOption}
              disabled={dossier.options.length >= 6}
            >
              <Plus className="size-4" aria-hidden="true" />
              Ajouter une option
            </button>
          </div>
          <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            Les montants fictifs servent à montrer la mécanique. Un périmètre
            différent, un cas critique non rejoué ou un coût de sortie inconnu
            bloque les trois horizons ; aucun classement automatique n’est
            produit. Comparez de deux à six options concrètes : plusieurs
            logiciels standards, variantes d’intégration ou prototypes low-code
            peuvent donc être instruits séparément.
          </p>
          <div className="mt-4 space-y-4">
            {dossier.options.map((option, index) => {
              const result = decision.options[index];
              return (
                <fieldset
                  key={index}
                  className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
                >
                  <legend className="px-2 text-base font-bold text-zinc-950 dark:text-white">
                    {option.label || `Option ${index + 1}`}
                  </legend>
                  <div className="mt-2 grid gap-4 md:grid-cols-3">
                    <label className={LABEL}>
                      Identifiant unique
                      <input
                        className={INPUT}
                        value={option.id}
                        onChange={(event) =>
                          updateOption(index, "id", event.target.value)
                        }
                      />
                    </label>
                    <label className={LABEL}>
                      Nom de l’option
                      <input
                        className={INPUT}
                        value={option.label}
                        onChange={(event) =>
                          updateOption(index, "label", event.target.value)
                        }
                      />
                    </label>
                    <label className={LABEL}>
                      Voie évaluée
                      <select
                        className={INPUT}
                        value={option.action}
                        onChange={(event) =>
                          updateOption(
                            index,
                            "action",
                            event.target.value as OptionCost["action"],
                          )
                        }
                      >
                        {COSTED_ACTIONS.map((action) => (
                          <option key={action} value={action}>
                            {ACTION_LABELS[action]}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <div className="mt-3 flex justify-end">
                    <button
                      type="button"
                      className={`${BUTTON} border border-red-200 bg-white text-red-800 hover:bg-red-50 dark:border-red-900 dark:bg-zinc-950 dark:text-red-200`}
                      onClick={() => removeOption(index)}
                      disabled={dossier.options.length <= 2}
                      aria-label={`Supprimer l’option ${option.label || index + 1}`}
                    >
                      <Trash2 className="size-4" aria-hidden="true" />
                      Retirer cette option
                    </button>
                  </div>
                  <div className="mt-2 grid gap-4 sm:grid-cols-3">
                    {(
                      [
                        [
                          "initialCost",
                          "Mise en place",
                          "Cadrage, configuration, intégrations, migration, tests, formation et double fonctionnement.",
                        ],
                        [
                          "monthlyRunCost",
                          "Fonctionnement / mois",
                          "Licences, hébergement, support, supervision, maintenance et administration.",
                        ],
                        [
                          "exitCost",
                          "Sortie et réversibilité",
                          "Export, contrôle, réimport, assistance, conservation et arrêt des anciens accès.",
                        ],
                      ] as const
                    ).map(([field, label, help]) => (
                      <label key={field} className={LABEL}>
                        {label} (€)
                        <input
                          type="number"
                          min="0"
                          max="10000000000"
                          step="0.01"
                          className={INPUT}
                          value={numberValue(option[field])}
                          onChange={(event) =>
                            updateOption(
                              index,
                              field,
                              parseNumber(event.target.value),
                            )
                          }
                        />
                        <span className={HELP}>{help}</span>
                      </label>
                    ))}
                  </div>
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <label className={LABEL}>
                      Même périmètre confirmé ?
                      <SelectTriState
                        id={`option-${index}-perimeter`}
                        value={option.samePerimeterConfirmed}
                        onChange={(value) =>
                          updateOption(index, "samePerimeterConfirmed", value)
                        }
                      />
                    </label>
                    <label className={LABEL}>
                      Cas critiques rejoués ?
                      <SelectTriState
                        id={`option-${index}-critical`}
                        value={option.criticalCasesReplayed}
                        onChange={(value) =>
                          updateOption(index, "criticalCasesReplayed", value)
                        }
                      />
                    </label>
                  </div>
                  <label className="mt-4 flex min-h-11 items-start gap-3 rounded-lg border border-amber-200 bg-amber-50/70 p-3 text-left dark:border-amber-900 dark:bg-amber-950/20">
                    <input
                      type="checkbox"
                      className="mt-1 size-4 accent-violet-700"
                      checked={option.realOptionConfirmed}
                      onChange={(event) =>
                        updateOption(
                          index,
                          "realOptionConfirmed",
                          event.target.checked,
                        )
                      }
                    />
                    <span className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                      Je confirme avoir remplacé les montants fictifs, vérifié
                      ce périmètre et rejoué les cas indiqués pour cette option.
                    </span>
                  </label>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    <Metric
                      label="TCO 12 mois"
                      value={
                        result?.tco12 === null
                          ? "ND"
                          : money.format(result.tco12)
                      }
                    />
                    <Metric
                      label="TCO 36 mois"
                      value={
                        result?.tco36 === null
                          ? "ND"
                          : money.format(result.tco36)
                      }
                    />
                    <Metric
                      label="TCO 60 mois"
                      value={
                        result?.tco60 === null
                          ? "ND"
                          : money.format(result.tco60)
                      }
                    />
                  </div>
                </fieldset>
              );
            })}
          </div>
        </div>

        <fieldset className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
          <legend className="px-2 text-base font-bold text-zinc-950 dark:text-white">
            5. Pilote, suivis +30/+90 et expiration
          </legend>
          <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            La note finale reste bloquée tant que les sept portes du pilote ne
            sont pas documentées. Les suivis sont datés exactement 30 et 90
            jours après la revue J26–J30 ; l’expiration ne peut pas précéder le
            dernier suivi.
          </p>
          <div className="mt-4 space-y-3">
            {dossier.pilotGates.map((gate, gateIndex) => (
              <details
                key={gate.id}
                className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-left dark:border-zinc-800 dark:bg-zinc-900/50"
              >
                <summary className="cursor-pointer text-sm font-bold text-zinc-950 dark:text-white">
                  {BUSINESS_SOFTWARE_PILOT_GATE_LABELS[gate.id]} ·{" "}
                  {gate.realGateConfirmed ? "confirmé" : "à documenter"}
                </summary>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {(
                    [
                      ["casePopulation", "Cas ou population testée"],
                      ["baseline", "Baseline comparable"],
                      ["stopCriterion", "Critère STOP"],
                      ["continueCriterion", "Critère pour continuer"],
                      ["rollbackPlan", "Retour arrière"],
                      ["owner", "Responsable du jalon"],
                    ] as const
                  ).map(([field, label]) => (
                    <label key={field} className={LABEL}>
                      {label}
                      <input
                        className={INPUT}
                        value={gate[field]}
                        onChange={(event) =>
                          updatePilotGate(gateIndex, field, event.target.value)
                        }
                      />
                    </label>
                  ))}
                  <label className={LABEL}>
                    Date de revue du jalon
                    <input
                      type="date"
                      min={dossier.asOfDate}
                      max={dossier.expiresOn || undefined}
                      className={INPUT}
                      value={gate.reviewOn}
                      onChange={(event) =>
                        updatePilotGate(
                          gateIndex,
                          "reviewOn",
                          event.target.value,
                        )
                      }
                    />
                  </label>
                </div>
                <label className="mt-3 flex min-h-11 items-start gap-3 rounded-lg border border-zinc-200 bg-white p-3 text-left dark:border-zinc-800 dark:bg-zinc-950">
                  <input
                    type="checkbox"
                    className="mt-1 size-4 accent-violet-700"
                    checked={gate.realGateConfirmed}
                    onChange={(event) =>
                      updatePilotGate(
                        gateIndex,
                        "realGateConfirmed",
                        event.target.checked,
                      )
                    }
                  />
                  <span className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    Je confirme que ce jalon, ses critères, son responsable et
                    sa date remplacent l’exemple fictif et ont été relus.
                  </span>
                </label>
              </details>
            ))}
          </div>
          <label className={`${LABEL} mt-4 max-w-md`}>
            Date d’expiration de la décision
            <input
              type="date"
              min={dossier.asOfDate}
              className={INPUT}
              value={dossier.expiresOn}
              onChange={(event) =>
                setDossier((current) => ({
                  ...current,
                  humanDecisionConfirmed: false,
                  expiresOn: event.target.value,
                }))
              }
            />
            <span className={HELP}>
              Elle doit être future et ne pas précéder le suivi +90.
            </span>
          </label>
        </fieldset>

        <fieldset className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
          <legend className="px-2 text-base font-bold text-zinc-950 dark:text-white">
            6. Gouvernance et verrou final
          </legend>
          <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            Date du dossier : <strong>{dossier.asOfDate}</strong>. Les
            événements et la revue ne peuvent pas être postérieurs à cet arrêté
            ; le passage en données réelles le remet à la date locale du jour.
          </p>
          <div className="mt-2 grid gap-4 md:grid-cols-2">
            {(
              [
                ["sponsor", "Sponsor de la décision"],
                ["processOwner", "Responsable métier"],
                ["reviewer", "Réviseur indépendant"],
              ] as const
            ).map(([field, label]) => (
              <label key={field} className={LABEL}>
                {label}
                <input
                  className={INPUT}
                  value={dossier[field]}
                  onChange={(event) =>
                    setDossier((current) => ({
                      ...current,
                      humanDecisionConfirmed: false,
                      [field]: event.target.value,
                    }))
                  }
                />
              </label>
            ))}
            <label className={LABEL}>
              Date de revue
              <input
                type="date"
                max={dossier.asOfDate}
                className={INPUT}
                value={dossier.reviewedOn}
                onChange={(event) =>
                  setDossier((current) => ({
                    ...current,
                    humanDecisionConfirmed: false,
                    reviewedOn: event.target.value,
                  }))
                }
              />
            </label>
          </div>
          <label className="mt-4 flex min-h-11 items-start gap-3 rounded-lg border border-zinc-200 p-3 text-left dark:border-zinc-800">
            <input
              type="checkbox"
              className="mt-1 size-4 accent-violet-700"
              checked={dossier.humanDecisionConfirmed}
              onChange={(event) =>
                setDossier((current) => ({
                  ...current,
                  humanDecisionConfirmed: event.target.checked,
                }))
              }
            />
            <span className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              Les responsables confirment eux-mêmes la décision et ses
              inconnues, après documentation des sept portes du pilote, des
              suivis +30/+90 et de l’expiration. Ce contrôle ne transforme pas
              le diagnostic en recommandation automatique.
            </span>
          </label>
        </fieldset>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            className={`${BUTTON} bg-violet-700 text-white hover:bg-violet-800`}
            onClick={() => {
              const downloaded = downloadText(
                "diagnostic-besoin-logiciel-metier.csv",
                buildBusinessSoftwareNeedCsv(dossier),
                "text/csv;charset=utf-8",
              );
              setMessage(
                downloaded
                  ? "CSV de travail téléchargé."
                  : "Téléchargement du CSV impossible.",
              );
            }}
          >
            <Download className="size-4" aria-hidden="true" />
            Télécharger le CSV de travail
          </button>
          <button
            type="button"
            className={`${BUTTON} border border-violet-300 bg-violet-50 text-violet-900 hover:bg-violet-100 dark:border-violet-900 dark:bg-violet-950/30 dark:text-violet-100`}
            onClick={() => {
              const downloaded = downloadText(
                "diagnostic-besoin-logiciel-metier.json",
                buildBusinessSoftwareNeedJson(dossier),
                "application/json;charset=utf-8",
              );
              setMessage(
                downloaded
                  ? "JSON versionné et réimportable téléchargé."
                  : "Téléchargement du JSON impossible.",
              );
            }}
          >
            <Download className="size-4" aria-hidden="true" />
            Télécharger le JSON réimportable
          </button>
          <label
            className={`${BUTTON} cursor-pointer border border-violet-300 bg-white text-violet-900 hover:bg-violet-50 focus-within:ring-2 focus-within:ring-violet-500 focus-within:ring-offset-2 dark:border-violet-900 dark:bg-zinc-950 dark:text-violet-100 dark:hover:bg-violet-950/30`}
          >
            <Upload className="size-4" aria-hidden="true" />
            Importer un dossier JSON
            <input
              type="file"
              accept="application/json,.json"
              className="sr-only"
              aria-label="Importer un dossier JSON versionné"
              aria-describedby="diagnostic-logiciel-metier-message"
              onChange={(event) => {
                const input = event.currentTarget;
                void importJsonFile(input.files?.[0]).finally(() => {
                  input.value = "";
                });
              }}
            />
          </label>
          <button
            type="button"
            className={`${BUTTON} border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white`}
            onClick={copyWorkingNote}
          >
            <ClipboardCheck className="size-4" aria-hidden="true" />
            Copier la note de travail
          </button>
          <button
            type="button"
            className={`${BUTTON} border border-emerald-300 bg-emerald-50 text-emerald-900 hover:bg-emerald-100 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-100`}
            onClick={confirmRealData}
          >
            <FileCheck2 className="size-4" aria-hidden="true" />
            Confirmer mes données réelles
          </button>
          <button
            type="button"
            disabled={!decision.finalExportAllowed}
            className={`${BUTTON} border border-violet-300 bg-violet-50 text-violet-900 hover:bg-violet-100 dark:border-violet-900 dark:bg-violet-950/30 dark:text-violet-100`}
            onClick={copyFinalNote}
          >
            <ClipboardCheck className="size-4" aria-hidden="true" />
            Copier la note finale
          </button>
          <button
            type="button"
            className={`${BUTTON} border border-zinc-300 bg-transparent text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900`}
            onClick={() => {
              setDossier(createFictitiousBusinessSoftwareNeedDossier());
              setMessage("Exemple fictif rétabli.");
            }}
          >
            <RotateCcw className="size-4" aria-hidden="true" />
            Rétablir l’exemple
          </button>
        </div>

        <p
          id="diagnostic-logiciel-metier-message"
          className="m-0 min-h-6 text-sm font-semibold text-violet-800 dark:text-violet-200"
          aria-live="polite"
        >
          {message}
        </p>

        <p className="m-0 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
          Limites : cet outil ne stocke ni n’envoie vos données. N’y inscrivez
          aucun mot de passe, jeton, secret, donnée personnelle inutile ni
          information client non expurgée. Le classeur détaillé reste préférable
          pour travailler à plusieurs et documenter les preuves.
        </p>
      </div>
    </section>
  );
}
