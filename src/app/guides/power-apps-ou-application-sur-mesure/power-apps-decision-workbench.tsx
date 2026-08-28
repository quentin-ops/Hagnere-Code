"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  buildDecisionDossier,
  calculateTcoComparison,
  createEmptyDecisionInputs,
  createEmptyTcoOptions,
  decisionOptionLabels,
  evaluateDecision,
  evidenceLabels,
  type CostKnowledge,
  type DecisionContext,
  type DecisionInputs,
  type EvidenceKey,
  type LicenseMode,
  type NumericKnowledgeValue,
  type OptionTcoInputs,
  type OptionTcoResult,
  type TriState,
} from "./power-apps-decision-model";

const controlClassName =
  "mt-2 min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-base sm:text-sm text-zinc-950 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/25 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white";

const contextTriStateOptions: Array<{ value: TriState; label: string }> = [
  { value: "unknown", label: "À vérifier — bloque la conclusion" },
  { value: "yes", label: "Oui" },
  { value: "no", label: "Non" },
];

const publicDossierContextLabels = {
  projectKind: {
    unknown: "à vérifier",
    new: "nouveau projet",
    existing: "Power App existante",
  } satisfies Record<DecisionContext["projectKind"], string>,
  audience: {
    unknown: "à vérifier",
    internal: "salariés internes",
    guests: "invités Entra B2B",
    public: "clients ou public",
  } satisfies Record<DecisionContext["audience"], string>,
  surface: {
    unknown: "à vérifier",
    canvas: "application canevas",
    "model-driven": "application pilotée par modèle",
    "power-pages": "Power Pages",
    mixed: "combinaison Power Platform",
    "not-chosen": "aucune encore",
  } satisfies Record<DecisionContext["surface"], string>,
  dataSource: {
    unknown: "à vérifier",
    sharepoint: "SharePoint",
    dataverse: "Dataverse",
    sql: "SQL",
    other: "autre ou plusieurs",
  } satisfies Record<DecisionContext["dataSource"], string>,
  criticality: {
    unknown: "à vérifier",
    limited: "limitée",
    important: "importante",
    critical: "critique",
  } satisfies Record<DecisionContext["criticality"], string>,
} as const;

const evidenceTriStateOptions: Array<{ value: TriState; label: string }> = [
  {
    value: "unknown",
    label: "À vérifier — aucune preuve fiable ; décision suspendue",
  },
  { value: "yes", label: "Oui — contrôle daté satisfaisant" },
  {
    value: "no",
    label: "Non — contrôle réalisé, résultat insatisfaisant",
  },
];

const knowledgeOptions: Array<{ value: CostKnowledge; label: string }> = [
  { value: "unknown", label: "Inconnu — arrête le calcul" },
  { value: "known", label: "Connu" },
  { value: "not-applicable", label: "Non applicable" },
];

function decisionStatusLabel(
  status: ReturnType<typeof evaluateDecision>["status"],
  context: DecisionContext,
) {
  if (status === "STOP_MISSING_EVIDENCE") return "Décision suspendue";
  if (status === "KEEP")
    return context.projectKind === "new"
      ? "Retenir Power Platform"
      : "Conserver Power Apps";
  if (status === "STRENGTHEN") {
    if (
      context.audience === "public" &&
      (context.surface === "canvas" || context.surface === "model-driven")
    ) {
      return "Changer de surface Power Platform";
    }
    return context.projectKind === "new"
      ? "Cadrer Power Platform"
      : "Renforcer Power Apps";
  }
  if (status === "HYBRID") return "Architecture hybride";
  return "Reconstruction dédiée";
}

function publicDecisionHeadline(headline: string) {
  return headline.replace(/^STOP — /, "Décision suspendue — ");
}

function publicDecisionDossier(
  dossier: string,
  internalStatus: ReturnType<typeof evaluateDecision>["status"],
  visibleStatus: string,
  context: DecisionContext,
) {
  return dossier
    .replace(
      /^Projet : .*$/m,
      `Projet : ${publicDossierContextLabels.projectKind[context.projectKind]}`,
    )
    .replace(
      /^Audience : .*$/m,
      `Audience : ${publicDossierContextLabels.audience[context.audience]}`,
    )
    .replace(
      /^Surface Power Platform : .*$/m,
      `Surface Power Platform : ${publicDossierContextLabels.surface[context.surface]}`,
    )
    .replace(
      /^Données principales : .*$/m,
      `Données principales : ${publicDossierContextLabels.dataSource[context.dataSource]}`,
    )
    .replace(
      /^Criticité : .*$/m,
      `Criticité : ${publicDossierContextLabels.criticality[context.criticality]}`,
    )
    .replace(`Statut : ${internalStatus}`, `Orientation : ${visibleStatus}`)
    .replace(/^Conclusion : STOP — /m, "Conclusion : Décision suspendue — ");
}

function decisionOptionLabel(
  key: keyof typeof decisionOptionLabels,
  context: DecisionContext,
) {
  if (context.projectKind === "new" && key === "strengthened-power-apps") {
    return "Power Platform cadré pour le nouveau projet";
  }
  return decisionOptionLabels[key];
}

function tcoStateLabel(result: OptionTcoResult) {
  if (result.errors.length > 0) {
    return `${result.errors.length} erreur(s) de saisie — calcul arrêté`;
  }
  if (result.unknownLabels.length > 0) {
    return `${result.unknownLabels.length} inconnue(s) — calcul arrêté`;
  }
  return "Complet";
}

const evidenceGroups: Array<{
  title: string;
  description: string;
  keys: EvidenceKey[];
}> = [
  {
    title: "Besoin et données",
    description:
      "Partir des tâches observées, puis reproduire les requêtes et les cas difficiles sur des données représentatives.",
    keys: ["scopeObserved", "dataQueriesTested", "platformFitValidated"],
  },
  {
    title: "Audience et expérience",
    description:
      "Distinguer salariés, invités B2B et public, puis tester hors-ligne, marque et accessibilité.",
    keys: [
      "identityAudienceValidated",
      "offlineFitValidated",
      "uxAccessibilityValidated",
    ],
  },
  {
    title: "Licences, sécurité et exploitation",
    description:
      "Vérifier le tenant réel : licences, connecteurs, DLP, rôles, environnements, propriétaires et support.",
    keys: [
      "licensesFlowsInventoried",
      "securityDlpValidated",
      "almValidated",
      "ownershipSupportValidated",
    ],
  },
  {
    title: "Sortie et frontière",
    description:
      "Tester une restauration complète et, si une limite existe, prouver qu’une frontière hybride reste propre.",
    keys: ["exitRestoreValidated", "separableBoundaryValidated"],
  },
];

function parseNumber(value: string): number | null {
  if (value.trim() === "") return null;
  const parsed = Number(value.replace(",", "."));
  return Number.isFinite(parsed) ? parsed : null;
}

function numberValue(value: number | null) {
  return value === null ? "" : String(value);
}

function formatEur(value: number | null) {
  if (value === null) return "À confirmer";
  return `${new Intl.NumberFormat("fr-FR", {
    maximumFractionDigits: 2,
  }).format(value)} € HT`;
}

function ContextSelect<K extends keyof DecisionContext>({
  id,
  label,
  value,
  options,
  onChange,
}: {
  id: string;
  label: string;
  value: DecisionContext[K];
  options: Array<{ value: DecisionContext[K]; label: string }>;
  onChange: (value: DecisionContext[K]) => void;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-sm font-semibold text-zinc-900 dark:text-white"
      >
        {label}
      </label>
      <select
        id={id}
        className={controlClassName}
        value={String(value)}
        onChange={(event) => onChange(event.target.value as DecisionContext[K])}
      >
        {options.map((option) => (
          <option key={String(option.value)} value={String(option.value)}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

interface KnowledgeFieldProps {
  id: string;
  label: string;
  value: NumericKnowledgeValue;
  onChange: (value: NumericKnowledgeValue) => void;
  hint?: string;
  allowNotApplicable?: boolean;
}

function KnowledgeValueField({
  id,
  label,
  value,
  onChange,
  hint,
  allowNotApplicable = true,
  valueLabel,
  inputMode,
  step,
}: KnowledgeFieldProps & {
  valueLabel: string;
  inputMode: "decimal" | "numeric";
  step: string;
}) {
  const helpId = `${id}-help`;
  const availableKnowledgeOptions = allowNotApplicable
    ? knowledgeOptions
    : knowledgeOptions.filter((option) => option.value !== "not-applicable");
  return (
    <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(9rem,0.7fr)] sm:items-end">
      <div>
        <label
          htmlFor={`${id}-knowledge`}
          className="text-sm font-semibold text-zinc-900 dark:text-white"
        >
          {label}
        </label>
        {hint ? (
          <p
            id={helpId}
            className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-300"
          >
            {hint}
          </p>
        ) : null}
        <select
          id={`${id}-knowledge`}
          className={controlClassName}
          value={value.knowledge}
          aria-describedby={hint ? helpId : undefined}
          onChange={(event) =>
            onChange({
              knowledge: event.target.value as CostKnowledge,
              amount: event.target.value === "known" ? value.amount : null,
            })
          }
        >
          {availableKnowledgeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor={`${id}-amount`}
          className="text-sm font-semibold text-zinc-900 dark:text-white"
        >
          {valueLabel}
        </label>
        <input
          id={`${id}-amount`}
          type="number"
          inputMode={inputMode}
          min="0"
          step={step}
          className={`${controlClassName} disabled:cursor-not-allowed disabled:bg-zinc-100 disabled:text-zinc-500 dark:disabled:bg-zinc-800 dark:disabled:text-zinc-300`}
          disabled={value.knowledge !== "known"}
          value={value.knowledge === "known" ? numberValue(value.amount) : ""}
          onChange={(event) =>
            onChange({
              knowledge: "known",
              amount: parseNumber(event.target.value),
            })
          }
        />
      </div>
    </div>
  );
}

function KnowledgeAmount(props: KnowledgeFieldProps) {
  return (
    <KnowledgeValueField
      {...props}
      valueLabel="Montant en euros"
      inputMode="decimal"
      step="0.01"
    />
  );
}

function KnowledgeQuantity(props: KnowledgeFieldProps) {
  return (
    <KnowledgeValueField
      {...props}
      valueLabel="Quantité entière d’utilisateurs licenciés"
      inputMode="numeric"
      step="1"
      allowNotApplicable={false}
    />
  );
}

function TcoOptionEditor({
  option,
  onChange,
}: {
  option: OptionTcoInputs;
  onChange: (option: OptionTcoInputs) => void;
}) {
  function updateLicense<K extends keyof OptionTcoInputs["license"]>(
    key: K,
    value: OptionTcoInputs["license"][K],
  ) {
    onChange({ ...option, license: { ...option.license, [key]: value } });
  }

  const licenseModeLabels: Record<LicenseMode, string> = {
    unknown: "À vérifier — arrête le calcul",
    "premium-eur": "Premium ou prix par utilisateur en euros",
    "payg-usd": "Paiement à l’usage PAYG — repère public en USD",
    "contract-monthly-eur": "Forfait mensuel contractuel en euros",
    "not-applicable": "Non applicable",
  };

  return (
    <details
      className="rounded-2xl border border-zinc-200 bg-white p-4 open:ring-2 open:ring-indigo-100 dark:border-zinc-800 dark:bg-zinc-950 dark:open:ring-indigo-950"
      data-power-apps-print-expand="tco-editor"
    >
      <summary className="min-h-11 cursor-pointer py-2 text-base font-semibold text-zinc-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:text-white">
        {option.label}
      </summary>
      <div className="mt-4 space-y-6 border-t border-zinc-200 pt-5 dark:border-zinc-800">
        <fieldset className="space-y-4">
          <legend className="text-sm font-bold text-zinc-950 dark:text-white">
            Licence ou plateforme
          </legend>
          <div>
            <label
              htmlFor={`license-mode-${option.key}`}
              className="text-sm font-semibold text-zinc-900 dark:text-white"
            >
              Mode de facturation
            </label>
            <select
              id={`license-mode-${option.key}`}
              className={controlClassName}
              value={option.license.mode}
              onChange={(event) =>
                updateLicense("mode", event.target.value as LicenseMode)
              }
            >
              {(Object.keys(licenseModeLabels) as LicenseMode[]).map((key) => (
                <option key={key} value={key}>
                  {licenseModeLabels[key]}
                </option>
              ))}
            </select>
          </div>

          {option.license.mode === "premium-eur" ? (
            <>
              <KnowledgeQuantity
                id={`license-users-${option.key}`}
                label="Nombre d’utilisateurs licenciés"
                value={option.license.users}
                onChange={(value) => updateLicense("users", value)}
              />
              <KnowledgeAmount
                id={`license-price-${option.key}`}
                label="Prix contractuel par utilisateur et par mois"
                allowNotApplicable={false}
                hint="Aide éditable : Premium était affiché à 17,30 € HT/utilisateur/mois, paiement annuel, sur la page française Microsoft vérifiée le 3 août 2026. Le calcul reste bloqué tant que vous ne confirmez pas votre prix."
                value={option.license.pricePerUserMonthEur}
                onChange={(value) =>
                  updateLicense("pricePerUserMonthEur", value)
                }
              />
            </>
          ) : null}

          {option.license.mode === "payg-usd" ? (
            <KnowledgeAmount
              id={`license-payg-${option.key}`}
              label="Facture mensuelle PAYG confirmée en euros"
              allowNotApplicable={false}
              hint="Le repère public est 10 USD par utilisateur actif unique, par application et par mois. Le workbench ne convertit jamais ce montant : saisissez une facture ou estimation contractuelle en euros."
              value={option.license.contractualMonthlyEur}
              onChange={(value) =>
                updateLicense("contractualMonthlyEur", value)
              }
            />
          ) : null}

          {option.license.mode === "contract-monthly-eur" ? (
            <KnowledgeAmount
              id={`license-contract-${option.key}`}
              label="Montant mensuel contractuel"
              allowNotApplicable={false}
              value={option.license.contractualMonthlyEur}
              onChange={(value) =>
                updateLicense("contractualMonthlyEur", value)
              }
            />
          ) : null}
        </fieldset>

        <fieldset className="space-y-4">
          <legend className="text-sm font-bold text-zinc-950 dark:text-white">
            Coûts ponctuels
          </legend>
          {option.oneTime.map((line, index) => (
            <KnowledgeAmount
              key={line.id}
              id={`one-${option.key}-${line.id}`}
              label={line.label}
              value={line}
              onChange={(value) => {
                const next = [...option.oneTime];
                next[index] = { ...line, ...value };
                onChange({ ...option, oneTime: next });
              }}
            />
          ))}
        </fieldset>

        <fieldset className="space-y-4">
          <legend className="text-sm font-bold text-zinc-950 dark:text-white">
            Coûts mensuels
          </legend>
          {option.monthly.map((line, index) => (
            <KnowledgeAmount
              key={line.id}
              id={`monthly-${option.key}-${line.id}`}
              label={line.label}
              value={line}
              onChange={(value) => {
                const next = [...option.monthly];
                next[index] = { ...line, ...value };
                onChange({ ...option, monthly: next });
              }}
            />
          ))}
        </fieldset>
      </div>
    </details>
  );
}

interface PowerAppsDecisionWorkbenchProps {
  initialDecisionInputs?: DecisionInputs;
  initialTcoOptions?: OptionTcoInputs[];
}

export function PowerAppsDecisionWorkbench({
  initialDecisionInputs,
  initialTcoOptions,
}: PowerAppsDecisionWorkbenchProps = {}) {
  const workbenchRef = useRef<HTMLElement>(null);
  const [inputs, setInputs] = useState<DecisionInputs>(
    () => initialDecisionInputs ?? createEmptyDecisionInputs(),
  );
  const [tcoOptions, setTcoOptions] = useState<OptionTcoInputs[]>(
    () => initialTcoOptions ?? createEmptyTcoOptions(),
  );
  const [actionMessage, setActionMessage] = useState("");
  const decision = useMemo(() => evaluateDecision(inputs), [inputs]);
  const tcoResults = useMemo(
    () => calculateTcoComparison(tcoOptions),
    [tcoOptions],
  );
  const visibleDecisionStatus = decisionStatusLabel(
    decision.status,
    inputs.context,
  );
  const dossier = useMemo(() => {
    const internalDossier = buildDecisionDossier(inputs, decision, tcoResults);
    return publicDecisionDossier(
      internalDossier,
      decision.status,
      visibleDecisionStatus,
      inputs.context,
    );
  }, [inputs, decision, tcoResults, visibleDecisionStatus]);

  useEffect(() => {
    let detailsClosedBeforePrint: HTMLDetailsElement[] = [];

    const expandPrintDetails = () => {
      detailsClosedBeforePrint = Array.from(
        workbenchRef.current?.querySelectorAll<HTMLDetailsElement>(
          "details[data-power-apps-print-expand]",
        ) ?? [],
      ).filter((details) => !details.open);
      for (const details of detailsClosedBeforePrint) details.open = true;
    };
    const restorePrintDetails = () => {
      for (const details of detailsClosedBeforePrint) details.open = false;
      detailsClosedBeforePrint = [];
    };

    window.addEventListener("beforeprint", expandPrintDetails);
    window.addEventListener("afterprint", restorePrintDetails);
    return () => {
      window.removeEventListener("beforeprint", expandPrintDetails);
      window.removeEventListener("afterprint", restorePrintDetails);
      restorePrintDetails();
    };
  }, []);

  function updateContext<K extends keyof DecisionContext>(
    key: K,
    value: DecisionContext[K],
  ) {
    setInputs((current) => ({
      ...current,
      context: { ...current.context, [key]: value },
    }));
    setActionMessage("");
  }

  function updateEvidence(key: EvidenceKey, value: TriState) {
    setInputs((current) => ({
      ...current,
      evidence: { ...current.evidence, [key]: value },
    }));
    setActionMessage("");
  }

  async function copyDossier() {
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard API unavailable");
      }
      await navigator.clipboard.writeText(dossier);
      setActionMessage("Dossier copié dans le presse-papiers.");
    } catch {
      setActionMessage(
        "Copie impossible : sélectionnez le dossier affiché ou utilisez l’impression.",
      );
    }
  }

  const blockedItemsCount =
    decision.criticalUnknowns.length + decision.blockingFailures.length;
  const liveMessage = actionMessage
    ? actionMessage
    : decision.status === "STOP_MISSING_EVIDENCE"
      ? `Diagnostic arrêté : ${blockedItemsCount} élément(s) critique(s) à traiter.`
      : `Diagnostic disponible : ${visibleDecisionStatus}.`;

  return (
    <section
      ref={workbenchRef}
      aria-labelledby="power-apps-workbench-title"
      className="not-prose my-8 rounded-3xl border border-zinc-200 bg-zinc-50 p-4 shadow-sm sm:p-6 lg:p-8 dark:border-zinc-800 dark:bg-zinc-900"
      data-power-apps-workbench="true"
      data-read-time-exclude="true"
    >
      <style>{`
        @media print {
          [data-power-apps-workbench="true"] details[data-power-apps-print-expand] > :not(summary) {
            display: block !important;
          }

          [data-power-apps-workbench="true"] details[data-power-apps-print-expand="dossier"] > pre {
            max-height: none !important;
            overflow: visible !important;
          }
        }
      `}</style>
      <div className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-300">
          Atelier de décision local · aucune donnée envoyée
        </p>
        <h3
          id="power-apps-workbench-title"
          className="mt-2 text-2xl font-bold tracking-tight text-zinc-950 dark:text-white"
        >
          Réunir les preuves et comparer quatre coûts totaux de possession (TCO)
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          Ce modèle ne note pas votre projet. Une information critique manquante
          suspend la décision. Un coût inconnu reste inconnu. Les résultats sont
          des aides de cadrage, jamais un devis, un audit de sécurité ou une
          validation de licence.
        </p>
      </div>

      <div className="mt-8 space-y-10">
        <fieldset>
          <legend className="text-lg font-bold text-zinc-950 dark:text-white">
            1. Décrire le contexte
          </legend>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
            Le même écran ne convient pas nécessairement à un salarié, un invité
            Entra B2B et un client public.
          </p>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <ContextSelect<"projectKind">
              id="pa-project-kind"
              label="Situation"
              value={inputs.context.projectKind}
              options={[
                { value: "unknown", label: "À vérifier" },
                { value: "new", label: "Nouveau projet" },
                { value: "existing", label: "Power App existante" },
              ]}
              onChange={(value) => updateContext("projectKind", value)}
            />
            <ContextSelect<"audience">
              id="pa-audience"
              label="Audience principale"
              value={inputs.context.audience}
              options={[
                { value: "unknown", label: "À vérifier" },
                { value: "internal", label: "Salariés internes" },
                { value: "guests", label: "Invités Entra B2B" },
                { value: "public", label: "Clients ou public" },
              ]}
              onChange={(value) => updateContext("audience", value)}
            />
            <ContextSelect<"surface">
              id="pa-surface"
              label="Surface envisagée"
              value={inputs.context.surface}
              options={[
                { value: "unknown", label: "À vérifier" },
                { value: "canvas", label: "Application canevas" },
                { value: "model-driven", label: "Pilotée par modèle" },
                { value: "power-pages", label: "Power Pages" },
                { value: "mixed", label: "Combinaison Power Platform" },
                { value: "not-chosen", label: "Aucune encore" },
              ]}
              onChange={(value) => updateContext("surface", value)}
            />
            <ContextSelect<"dataSource">
              id="pa-data-source"
              label="Données principales"
              value={inputs.context.dataSource}
              options={[
                { value: "unknown", label: "À vérifier" },
                { value: "sharepoint", label: "SharePoint" },
                { value: "dataverse", label: "Dataverse" },
                { value: "sql", label: "SQL" },
                { value: "other", label: "Autre ou plusieurs" },
              ]}
              onChange={(value) => updateContext("dataSource", value)}
            />
            <ContextSelect<"criticality">
              id="pa-criticality"
              label="Criticité métier"
              value={inputs.context.criticality}
              options={[
                { value: "unknown", label: "À vérifier" },
                { value: "limited", label: "Limitée" },
                { value: "important", label: "Importante" },
                { value: "critical", label: "Critique" },
              ]}
              onChange={(value) => updateContext("criticality", value)}
            />
            <ContextSelect<"offlineRequired">
              id="pa-offline-required"
              label="Travail hors-ligne requis"
              value={inputs.context.offlineRequired}
              options={contextTriStateOptions}
              onChange={(value) => updateContext("offlineRequired", value)}
            />
            <ContextSelect<"externalBrandingRequired">
              id="pa-branding-required"
              label="Marque externe forte requise"
              value={inputs.context.externalBrandingRequired}
              options={contextTriStateOptions}
              onChange={(value) =>
                updateContext("externalBrandingRequired", value)
              }
            />
            <div>
              <label
                htmlFor="pa-current-users"
                className="text-sm font-semibold text-zinc-900 dark:text-white"
              >
                Utilisateurs actuels
              </label>
              <input
                id="pa-current-users"
                type="number"
                inputMode="numeric"
                min="0"
                step="1"
                className={controlClassName}
                value={numberValue(inputs.context.currentUsers)}
                placeholder="À vérifier"
                onChange={(event) =>
                  updateContext("currentUsers", parseNumber(event.target.value))
                }
              />
            </div>
            <div>
              <label
                htmlFor="pa-projected-users"
                className="text-sm font-semibold text-zinc-900 dark:text-white"
              >
                Utilisateurs projetés
              </label>
              <input
                id="pa-projected-users"
                type="number"
                inputMode="numeric"
                min="0"
                step="1"
                className={controlClassName}
                value={numberValue(inputs.context.projectedUsers)}
                placeholder="À vérifier"
                onChange={(event) =>
                  updateContext(
                    "projectedUsers",
                    parseNumber(event.target.value),
                  )
                }
              />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-lg font-bold text-zinc-950 dark:text-white">
            2. Qualifier les preuves
          </legend>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
            « À vérifier » signifie qu’aucune preuve fiable n’est disponible et
            bloque la conclusion. « Oui » signifie qu’un contrôle daté est
            satisfaisant. « Non » signifie que le contrôle a été réalisé, mais
            que son résultat est insatisfaisant.
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            {evidenceGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <h4 className="font-bold text-zinc-950 dark:text-white">
                  {group.title}
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-300">
                  {group.description}
                </p>
                <div className="mt-4 space-y-4">
                  {group.keys.map((key) => (
                    <div key={key}>
                      <label
                        htmlFor={`evidence-${key}`}
                        className="text-sm font-medium leading-relaxed text-zinc-900 dark:text-white"
                      >
                        {evidenceLabels[key]}
                      </label>
                      <select
                        id={`evidence-${key}`}
                        className={controlClassName}
                        value={inputs.evidence[key]}
                        onChange={(event) =>
                          updateEvidence(key, event.target.value as TriState)
                        }
                      >
                        {evidenceTriStateOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </fieldset>

        <section
          aria-labelledby="diagnostic-result-title"
          className="rounded-2xl border border-zinc-300 bg-white p-5 dark:border-zinc-700 dark:bg-zinc-950"
        >
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-300">
            Résultat du diagnostic
          </p>
          <h4
            id="diagnostic-result-title"
            className="mt-2 text-xl font-bold text-zinc-950 dark:text-white"
          >
            {visibleDecisionStatus}
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
            {publicDecisionHeadline(decision.headline)}
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
            {decision.rationale.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          {decision.criticalUnknowns.length ? (
            <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/30">
              <p className="font-semibold text-amber-900 dark:text-amber-200">
                Inconnues critiques
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-amber-900 dark:text-amber-100">
                {decision.criticalUnknowns.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {decision.blockingFailures.length ? (
            <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/30">
              <p className="font-semibold text-red-900 dark:text-red-200">
                Contrôles critiques insatisfaisants
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-red-900 dark:text-red-100">
                {decision.blockingFailures.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {decision.contradictions.length ? (
            <div className="mt-5">
              <p className="font-semibold text-zinc-950 dark:text-white">
                Contradictions observées
              </p>
              <ul className="mt-2 space-y-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
                {decision.contradictions.map((item) => (
                  <li key={item.message}>
                    {item.message}{" "}
                    <span className="font-medium">
                      Options concernées :{" "}
                      {item.options
                        .map((key) => decisionOptionLabel(key, inputs.context))
                        .join(", ")}
                      .
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <p className="mt-5 text-sm font-semibold text-indigo-700 dark:text-indigo-300">
            Prochaine preuve : {decision.nextEvidence}
          </p>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
            Options encore défendables :{" "}
            {decision.defensibleOptions.length
              ? decision.defensibleOptions
                  .map((key) => decisionOptionLabel(key, inputs.context))
                  .join(" · ")
              : "aucune tant que les preuves critiques manquent"}
            .
          </p>
        </section>

        <fieldset>
          <legend className="text-lg font-bold text-zinc-950 dark:text-white">
            3. Comparer quatre coûts totaux (TCO)
          </legend>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            Formule unique : coûts ponctuels + coûts mensuels × 12 × années.
            Chaque poste n’apparaît que dans une famille. Un montant connu peut
            être zéro ; un montant inconnu arrête seulement le TCO concerné.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            Repères publics vérifiés le 3 août 2026 : Premium affiché à 17,30 €
            HT/utilisateur/mois avec paiement annuel ; PAYG affiché à 10 USD par
            utilisateur actif unique, par application et par mois. Le calcul
            reste bloqué jusqu’à confirmation de vos montants contractuels et ne
            convertit jamais le PAYG en euros.
          </p>
          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            {tcoOptions.map((option, index) => (
              <TcoOptionEditor
                key={option.key}
                option={option}
                onChange={(nextOption) => {
                  setTcoOptions((current) =>
                    current.map((item, itemIndex) =>
                      itemIndex === index ? nextOption : item,
                    ),
                  );
                  setActionMessage("");
                }}
              />
            ))}
          </div>

          <div
            className="mt-6 grid gap-4 xl:hidden"
            data-tco-mobile-results="true"
            aria-label="Résultats TCO Power Apps et sur mesure"
            role="region"
          >
            {tcoResults.map((result) => (
              <div
                key={result.key}
                data-tco-mobile-card={result.key}
                className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <h5 className="text-base font-bold text-zinc-950 dark:text-white">
                  {result.label}
                </h5>
                <dl className="mt-4 grid grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] gap-x-3 gap-y-3 text-sm">
                  {[
                    ["Option", result.label],
                    ["Ponctuel", formatEur(result.oneTimeTotalEur)],
                    ["Mensuel", formatEur(result.monthlyTotalEur)],
                    ["1 an", formatEur(result.totalsEur[1])],
                    ["3 ans", formatEur(result.totalsEur[3])],
                    ["5 ans", formatEur(result.totalsEur[5])],
                    ["État", tcoStateLabel(result)],
                  ].map(([label, value]) => (
                    <div key={label} className="contents">
                      <dt className="font-semibold text-zinc-600 dark:text-zinc-300">
                        {label}
                      </dt>
                      <dd className="break-words text-zinc-950 dark:text-white">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
                {result.errors.length ? (
                  <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-900 dark:border-red-900 dark:bg-red-950/30 dark:text-red-100">
                    <p className="font-semibold">Erreurs à corriger</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5">
                      {result.errors.map((error) => (
                        <li key={error}>{error}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {result.unknownLabels.length ? (
                  <details className="mt-4 text-sm text-zinc-700 dark:text-zinc-200">
                    <summary className="min-h-11 cursor-pointer py-2 font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">
                      Voir les montants encore inconnus
                    </summary>
                    <ul className="mt-2 list-disc space-y-1 pl-5">
                      {result.unknownLabels.map((label) => (
                        <li key={label}>{label}</li>
                      ))}
                    </ul>
                  </details>
                ) : null}
              </div>
            ))}
          </div>

          <div
            className="mt-6 hidden rounded-2xl border border-zinc-200 bg-white xl:block dark:border-zinc-800 dark:bg-zinc-950"
            data-tco-desktop-results="true"
          >
            <table className="w-full table-fixed border-collapse text-xs">
              <caption className="sr-only">
                TCO comparés à un, trois et cinq ans
              </caption>
              <colgroup>
                <col className="w-[18%]" />
                <col className="w-[11%]" />
                <col className="w-[11%]" />
                <col className="w-[11%]" />
                <col className="w-[11%]" />
                <col className="w-[11%]" />
                <col className="w-[27%]" />
              </colgroup>
              <thead>
                <tr className="bg-zinc-100 dark:bg-zinc-900">
                  {[
                    "Option",
                    "Ponctuel",
                    "Mensuel",
                    "1 an",
                    "3 ans",
                    "5 ans",
                    "État",
                  ].map((header) => (
                    <th
                      key={header}
                      scope="col"
                      className="break-words border-b border-zinc-200 p-2 text-left align-top font-semibold text-zinc-950 dark:border-zinc-800 dark:text-white"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tcoResults.map((result) => (
                  <tr key={result.key}>
                    <th
                      scope="row"
                      className="break-words border-b border-zinc-200 p-2 text-left align-top font-semibold text-zinc-950 dark:border-zinc-800 dark:text-white"
                    >
                      {result.label}
                    </th>
                    <td className="break-words border-b border-zinc-200 p-2 align-top text-zinc-700 dark:border-zinc-800 dark:text-zinc-200">
                      {formatEur(result.oneTimeTotalEur)}
                    </td>
                    <td className="break-words border-b border-zinc-200 p-2 align-top text-zinc-700 dark:border-zinc-800 dark:text-zinc-200">
                      {formatEur(result.monthlyTotalEur)}
                    </td>
                    <td className="break-words border-b border-zinc-200 p-2 align-top text-zinc-700 dark:border-zinc-800 dark:text-zinc-200">
                      {formatEur(result.totalsEur[1])}
                    </td>
                    <td className="break-words border-b border-zinc-200 p-2 align-top text-zinc-700 dark:border-zinc-800 dark:text-zinc-200">
                      {formatEur(result.totalsEur[3])}
                    </td>
                    <td className="break-words border-b border-zinc-200 p-2 align-top text-zinc-700 dark:border-zinc-800 dark:text-zinc-200">
                      {formatEur(result.totalsEur[5])}
                    </td>
                    <td className="break-words border-b border-zinc-200 p-2 align-top text-zinc-700 dark:border-zinc-800 dark:text-zinc-200">
                      <span>{tcoStateLabel(result)}</span>
                      {result.errors.length ? (
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-red-700 dark:text-red-200">
                          {result.errors.map((error) => (
                            <li key={error}>{error}</li>
                          ))}
                        </ul>
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </fieldset>

        <section
          aria-labelledby="decision-dossier-title"
          className="rounded-2xl bg-zinc-950 p-5 text-white sm:p-6"
        >
          <h4 id="decision-dossier-title" className="text-lg font-bold">
            4. Emporter le dossier de décision
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-zinc-300">
            La copie reprend les inconnues, contradictions, hypothèses de coût
            et limites. L’impression utilise uniquement la commande du
            navigateur.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={copyDossier}
              className="min-h-11 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 outline-none hover:bg-zinc-100 focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              Copier le dossier texte
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="min-h-11 rounded-xl border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-white outline-none hover:bg-zinc-900 focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              Imprimer cette page
            </button>
          </div>
          <p
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className="mt-4 min-h-6 text-sm text-indigo-200"
          >
            {liveMessage}
          </p>
          <details
            className="mt-4 rounded-xl border border-zinc-800 bg-zinc-900 p-4"
            data-power-apps-print-expand="dossier"
          >
            <summary className="min-h-11 cursor-pointer py-2 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400">
              Afficher le dossier copiable
            </summary>
            <pre className="mt-4 max-h-[32rem] overflow-auto whitespace-pre-wrap break-words text-xs leading-relaxed text-zinc-300">
              {dossier}
            </pre>
          </details>
        </section>
      </div>
    </section>
  );
}
