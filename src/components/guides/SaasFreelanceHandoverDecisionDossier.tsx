"use client";

import { useMemo, useState } from "react";
import { ClipboardCheck, Download, Printer, RotateCcw } from "lucide-react";
import { copyTextToClipboard } from "@/lib/clipboard";
import {
  SAAS_HANDOVER_EXAMPLE_TCO,
  SAAS_HANDOVER_OPTIONS,
  SAAS_HANDOVER_TCO_FIELDS,
  buildSaasHandoverCsv,
  buildSaasHandoverSummary,
  calculateAccountRecovery,
  calculateOutage,
  calculateRecoveryExercise,
  calculateRewriteThreshold,
  calculateRpo,
  calculateSaasHandoverTco,
  cloneSaasHandoverTcoInputs,
  type AccountRecoveryInput,
  type RecoveryExerciseInput,
  type RewriteThresholdInput,
  type RpoInput,
  type SaasHandoverOptionKey,
  type SaasHandoverTcoField,
  type SaasHandoverTcoInputs,
} from "@/lib/saas-handover-decision";

type TransitionMode = "unknown" | "normal" | "incident";
type ExportStatus = "idle" | "copied" | "copy-error" | "downloaded";

const euro = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 2,
});
const decimal = new Intl.NumberFormat("fr-FR", {
  maximumFractionDigits: 2,
});

const recoveryExample: RecoveryExerciseInput = {
  monthlyContribution: 22_500,
  responderCount: 2,
  responderHourlyCost: 55,
  exerciseExternalHours: 6,
  exerciseExternalRate: 95,
  exerciseInternalHours: 2,
  annualIncidentProbabilityPercent: 25,
};

const rpoExample: RpoInput = {
  eventsPerDay: 900,
  backupIntervalHours: 24,
  minutesPerEvent: 6,
  reconstructionHourlyCost: 45,
};

const accountExample: AccountRecoveryInput = {
  personalServiceCount: 4,
  preparedExternalHoursPerService: 2,
  crisisExternalHoursPerService: 6,
  externalHourlyRate: 95,
  preparedInternalHoursPerService: 1,
  crisisInternalHoursPerService: 2,
  internalHourlyCost: 55,
  commonPreparedTooling: 300,
};

function parseAmount(raw: string): number {
  const normalized = raw.trim().replace(",", ".");
  if (normalized === "" || !/^(?:\d+(?:\.\d+)?|\.\d+)$/.test(normalized)) {
    return Number.NaN;
  }
  const value = Number(normalized);
  return Number.isFinite(value) ? value : Number.NaN;
}

function displayValue(value: number): string {
  return Number.isFinite(value) ? String(value) : "";
}

function NumericField({
  label,
  value,
  onChange,
  suffix,
  help,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  suffix: string;
  help?: string;
}) {
  const [rawValue, setRawValue] = useState(() => displayValue(value));

  return (
    <label className="grid gap-1.5 text-sm text-zinc-700 dark:text-zinc-200">
      <span className="font-semibold">{label}</span>
      <span className="flex overflow-hidden rounded-xl border border-zinc-300 bg-white focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-500/20 dark:border-zinc-700 dark:bg-zinc-950">
        <input
          type="text"
          inputMode="decimal"
          value={rawValue}
          onChange={(event) => {
            const next = event.target.value;
            setRawValue(next);
            onChange(parseAmount(next));
          }}
          onBlur={() => {
            const parsed = parseAmount(rawValue);
            if (Number.isFinite(parsed)) {
              setRawValue(displayValue(parsed));
            }
          }}
          aria-invalid={!Number.isFinite(value)}
          className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-left text-zinc-950 outline-none dark:text-white"
          aria-label={label}
        />
        <span className="flex items-center border-l border-zinc-200 bg-zinc-50 px-3 text-xs font-semibold text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
          {suffix}
        </span>
      </span>
      {help ? (
        <span className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
          {help}
        </span>
      ) : null}
    </label>
  );
}

function Metric({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
      <p className="mb-1 text-xs font-bold uppercase tracking-[0.08em] text-zinc-500 dark:text-zinc-400">
        {label}
      </p>
      <p className="mb-1 text-xl font-black text-zinc-950 dark:text-white">
        {value}
      </p>
      <p className="mb-0 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
        {detail}
      </p>
    </div>
  );
}

export function SaasFreelanceHandoverDecisionDossier() {
  const [transitionMode, setTransitionMode] =
    useState<TransitionMode>("unknown");
  const [tcoInputs, setTcoInputs] = useState<SaasHandoverTcoInputs>(() =>
    cloneSaasHandoverTcoInputs(SAAS_HANDOVER_EXAMPLE_TCO),
  );
  const [rewriteInput, setRewriteInput] = useState<RewriteThresholdInput>({
    monthlyContributionPerClient: 800,
    productiveMonths: 27,
  });
  const [rpoInput, setRpoInput] = useState<RpoInput>({ ...rpoExample });
  const [recoveryInput, setRecoveryInput] = useState<RecoveryExerciseInput>({
    ...recoveryExample,
  });
  const [outageHours, setOutageHours] = useState(8);
  const [accountInput, setAccountInput] = useState<AccountRecoveryInput>({
    ...accountExample,
  });
  const [exportStatus, setExportStatus] = useState<ExportStatus>("idle");
  const [resetVersion, setResetVersion] = useState(0);

  const tco = useMemo(() => calculateSaasHandoverTco(tcoInputs), [tcoInputs]);
  const rewrite = useMemo(
    () => calculateRewriteThreshold(tco, rewriteInput),
    [rewriteInput, tco],
  );
  const rpo = useMemo(() => calculateRpo(rpoInput), [rpoInput]);
  const recovery = useMemo(
    () => calculateRecoveryExercise(recoveryInput),
    [recoveryInput],
  );
  const outage = useMemo(
    () => calculateOutage(recoveryInput, outageHours),
    [outageHours, recoveryInput],
  );
  const accounts = useMemo(
    () => calculateAccountRecovery(accountInput),
    [accountInput],
  );

  const modelStatus =
    transitionMode === "normal" &&
    tco.status === "PASS" &&
    rewrite.status === "PASS" &&
    rpo.status === "PASS" &&
    recovery.status === "PASS" &&
    outage.status === "PASS" &&
    accounts.status === "PASS"
      ? "PASS"
      : "STOP";

  const exportState = useMemo(
    () => ({
      tcoInputs,
      tco,
      rewriteInput,
      rewrite,
      rpoInput,
      rpo,
      recoveryInput,
      recovery,
      outageHours,
      outage,
      accountInput,
      accounts,
    }),
    [
      accountInput,
      accounts,
      outage,
      outageHours,
      recovery,
      recoveryInput,
      rewrite,
      rewriteInput,
      rpo,
      rpoInput,
      tco,
      tcoInputs,
    ],
  );
  const summary = useMemo(
    () => buildSaasHandoverSummary(exportState),
    [exportState],
  );

  function updateTco(
    option: SaasHandoverOptionKey,
    field: SaasHandoverTcoField,
    value: number,
  ) {
    setTcoInputs((current) => ({
      ...current,
      [option]: { ...current[option], [field]: value },
    }));
    setExportStatus("idle");
  }

  function updateRpo(field: keyof RpoInput, value: number) {
    setRpoInput((current) => ({ ...current, [field]: value }));
    setExportStatus("idle");
  }

  function updateRecovery(field: keyof RecoveryExerciseInput, value: number) {
    setRecoveryInput((current) => ({ ...current, [field]: value }));
    setExportStatus("idle");
  }

  function updateOutageHours(value: number) {
    setOutageHours(value);
    setExportStatus("idle");
  }

  function updateAccount(field: keyof AccountRecoveryInput, value: number) {
    setAccountInput((current) => ({ ...current, [field]: value }));
    setExportStatus("idle");
  }

  function resetExample() {
    setTransitionMode("unknown");
    setTcoInputs(cloneSaasHandoverTcoInputs(SAAS_HANDOVER_EXAMPLE_TCO));
    setRewriteInput({
      monthlyContributionPerClient: 800,
      productiveMonths: 27,
    });
    setRpoInput({ ...rpoExample });
    setRecoveryInput({ ...recoveryExample });
    setOutageHours(8);
    setAccountInput({ ...accountExample });
    setExportStatus("idle");
    setResetVersion((version) => version + 1);
  }

  async function copySummary() {
    if (modelStatus !== "PASS") return;
    const copied = await copyTextToClipboard(
      `Mode : passation normale\n${summary}`,
    );
    setExportStatus(copied ? "copied" : "copy-error");
  }

  function downloadCsv() {
    if (modelStatus !== "PASS") return;
    const csv = buildSaasHandoverCsv(exportState);
    const blob = new Blob([`\ufeff${csv}`], {
      type: "text/csv;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "comparatif-reprise-saas-36-mois.csv";
    link.click();
    URL.revokeObjectURL(url);
    setExportStatus("downloaded");
  }

  const statusCopy =
    transitionMode === "unknown"
      ? "STOP — qualifiez d’abord la situation."
      : transitionMode === "incident"
        ? "STOP — incident, détournement ou violation : sortez de la passation normale."
        : modelStatus === "PASS"
          ? "PASS — hypothèses calculables ; décision humaine encore requise."
          : "STOP — au moins une hypothèse est vide ou invalide.";

  return (
    <section
      id="outil-decision"
      className="not-prose my-10 scroll-mt-28 overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60"
      aria-labelledby="outil-reprise-saas-title"
    >
      <div className="border-b border-zinc-200 bg-zinc-950 p-5 text-white dark:border-zinc-800 sm:p-7">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-violet-300">
          Dossier local de décision
        </p>
        <h2
          id="outil-reprise-saas-title"
          className="mb-3 text-left text-2xl font-black text-white sm:text-3xl"
        >
          10. Comparez reprise, perte acceptable et réécriture
        </h2>
        <p className="mb-0 max-w-3xl text-left text-sm leading-relaxed text-zinc-300 sm:text-base">
          Remplacez l’exemple fictif par vos hypothèses. Rien n’est envoyé ni
          enregistré. N’inscrivez ici aucun mot de passe, secret, donnée client
          ou information bancaire.
        </p>
      </div>

      <div key={resetVersion} className="grid gap-7 p-5 sm:p-7">
        <fieldset className="grid gap-3">
          <legend className="text-lg font-bold text-zinc-950 dark:text-white">
            1. Passation normale ou incident ?
          </legend>
          <p className="m-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            L’outil ne doit pas transformer une situation inconnue ou hostile en
            simple checklist de transfert.
          </p>
          <div className="grid gap-2 sm:grid-cols-3">
            {[
              {
                value: "unknown" as const,
                label: "Je ne sais pas",
                detail: "Qualifiez avant toute révocation ou bascule.",
              },
              {
                value: "normal" as const,
                label: "Passation normale",
                detail:
                  "Coopération, comptes accessibles, aucun incident actif.",
              },
              {
                value: "incident" as const,
                label: "Incident ou conflit",
                detail:
                  "Intrusion, compte détourné, données exposées ou litige aigu.",
              },
            ].map((option) => (
              <label
                key={option.value}
                className={[
                  "cursor-pointer rounded-xl border p-4 text-left transition",
                  transitionMode === option.value
                    ? "border-violet-500 bg-violet-50 ring-2 ring-violet-500/20 dark:bg-violet-950/30"
                    : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950",
                ].join(" ")}
              >
                <span className="flex items-center gap-2 font-bold text-zinc-950 dark:text-white">
                  <input
                    type="radio"
                    name="handover-mode"
                    value={option.value}
                    checked={transitionMode === option.value}
                    onChange={() => {
                      setTransitionMode(option.value);
                      setExportStatus("idle");
                    }}
                    className="accent-violet-600"
                  />
                  {option.label}
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {option.detail}
                </span>
              </label>
            ))}
          </div>
          <div
            role="status"
            aria-live="polite"
            className={[
              "rounded-xl border px-4 py-3 text-sm font-bold",
              modelStatus === "PASS"
                ? "border-emerald-300 bg-emerald-50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-100"
                : "border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100",
            ].join(" ")}
          >
            {statusCopy}
          </div>
        </fieldset>

        <div className="border-t border-zinc-200 pt-7 dark:border-zinc-800">
          <h3 className="mb-2 text-xl font-black text-zinc-950 dark:text-white">
            2. TCO illustratif sur 36 mois
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            Même périmètre : fonctions actuelles, continuité, maintenance,
            infrastructure, temps interne et sortie. Les montants sont HT,
            fictifs et ne constituent ni devis ni moyenne de marché.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {SAAS_HANDOVER_OPTIONS.map((option) => (
              <Metric
                key={option.key}
                label={option.shortLabel}
                value={
                  tco.totals[option.key] === null
                    ? "STOP"
                    : euro.format(tco.totals[option.key] as number)
                }
                detail={
                  tco.cheapest === option.key
                    ? "Le moins coûteux dans cet exemple, pas un vainqueur universel."
                    : "À comparer après remplacement de toutes les hypothèses."
                }
              />
            ))}
          </div>
          <div className="mt-4 grid gap-3">
            {SAAS_HANDOVER_OPTIONS.map((option) => (
              <details
                key={option.key}
                className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <summary className="cursor-pointer font-bold text-zinc-950 dark:text-white">
                  Modifier les postes — {option.label}
                </summary>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {SAAS_HANDOVER_TCO_FIELDS.map((field) => (
                    <NumericField
                      key={field.key}
                      label={field.label}
                      value={tcoInputs[option.key][field.key]}
                      onChange={(value) =>
                        updateTco(option.key, field.key, value)
                      }
                      suffix="€"
                    />
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>

        <div className="border-t border-zinc-200 pt-7 dark:border-zinc-800">
          <h3 className="mb-2 text-xl font-black text-zinc-950 dark:text-white">
            3. Quelle valeur minimale doit créer la réécriture ?
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <NumericField
              label="Contribution mensuelle par client"
              value={rewriteInput.monthlyContributionPerClient}
              onChange={(value) =>
                setRewriteInput((current) => ({
                  ...current,
                  monthlyContributionPerClient: value,
                }))
              }
              suffix="€ / mois"
              help="Marge ou contribution réellement définie, pas chiffre d’affaires brut par défaut."
            />
            <NumericField
              label="Mois productifs après mise en service"
              value={rewriteInput.productiveMonths}
              onChange={(value) =>
                setRewriteInput((current) => ({
                  ...current,
                  productiveMonths: value,
                }))
              }
              suffix="mois"
              help="Dans l’exemple : lancement au mois 9, puis 27 mois dans l’horizon."
            />
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <Metric
              label="Surcoût contre stabilisation"
              value={
                rewrite.surcharge === null
                  ? "STOP"
                  : euro.format(rewrite.surcharge)
              }
              detail="Réécriture moins stabilisation, sans valeur terminale."
            />
            <Metric
              label="Clients-mois requis"
              value={
                rewrite.clientMonths === null
                  ? "STOP"
                  : decimal.format(rewrite.clientMonths)
              }
              detail="Surcoût divisé par la contribution mensuelle saisie."
            />
            <Metric
              label="Clients équivalents sur toute la période"
              value={
                rewrite.roundedClients === null
                  ? "STOP"
                  : String(rewrite.roundedClients)
              }
              detail="Moyenne arrondie au supérieur ; ce n’est pas un calendrier de cohortes."
            />
          </div>
        </div>

        <details className="group border-t border-zinc-200 pt-5 dark:border-zinc-800">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-1 py-2 text-left text-xl font-black text-zinc-950 marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:text-white">
            <span>4. RPO : combien d’événements pouvez-vous perdre ?</span>
            <span
              aria-hidden="true"
              className="text-zinc-500 transition group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="mt-3">
            <p className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              Ce calcul suppose une reprise au dernier point exploitable. Il
              n’intègre ni journal transactionnel, ni réplication, ni corruption
              silencieuse, ni sauvegarde échouée.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <NumericField
                label="Événements métier par jour"
                value={rpoInput.eventsPerDay}
                onChange={(value) => updateRpo("eventsPerDay", value)}
                suffix="/ jour"
              />
              <NumericField
                label="Intervalle du point restaurable"
                value={rpoInput.backupIntervalHours}
                onChange={(value) => updateRpo("backupIntervalHours", value)}
                suffix="heures"
              />
              <NumericField
                label="Reconstitution par événement"
                value={rpoInput.minutesPerEvent}
                onChange={(value) => updateRpo("minutesPerEvent", value)}
                suffix="min"
              />
              <NumericField
                label="Coût de capacité"
                value={rpoInput.reconstructionHourlyCost}
                onChange={(value) =>
                  updateRpo("reconstructionHourlyCost", value)
                }
                suffix="€ / h"
              />
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <Metric
                label="Exposition moyenne"
                value={
                  rpo.averageEventsExposed === null
                    ? "STOP"
                    : decimal.format(rpo.averageEventsExposed)
                }
                detail="Hypothèse d’un incident uniformément réparti dans l’intervalle."
              />
              <Metric
                label="Exposition maximale"
                value={
                  rpo.maximumEventsExposed === null
                    ? "STOP"
                    : decimal.format(rpo.maximumEventsExposed)
                }
                detail="À faire accepter par le métier, pas par le développeur seul."
              />
              <Metric
                label="Capacité maximale de reconstitution"
                value={
                  rpo.maximumReconstructionCost === null
                    ? "STOP"
                    : euro.format(rpo.maximumReconstructionCost)
                }
                detail="Valorisation de temps ; ce n’est pas forcément une sortie de trésorerie."
              />
            </div>
          </div>
        </details>

        <details className="group border-t border-zinc-200 pt-5 dark:border-zinc-800">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-1 py-2 text-left text-xl font-black text-zinc-950 marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:text-white">
            <span>5. RTO et exercice de restauration</span>
            <span
              aria-hidden="true"
              className="text-zinc-500 transition group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="mt-3">
            <p className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              Le seuil dépend de la probabilité annuelle saisie. Avec 100 %, le
              scénario donne 4,81 h ; avec 25 %, environ 19,26 h ; avec 10 %,
              environ 48,14 h. Une durée évitée doit être attribuable à
              l’exercice pour que cette comparaison ait un sens.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <NumericField
                label="Contribution mensuelle exposée"
                value={recoveryInput.monthlyContribution}
                onChange={(value) =>
                  updateRecovery("monthlyContribution", value)
                }
                suffix="€ / mois"
              />
              <NumericField
                label="Personnes mobilisées"
                value={recoveryInput.responderCount}
                onChange={(value) => updateRecovery("responderCount", value)}
                suffix="personnes"
              />
              <NumericField
                label="Coût horaire par personne"
                value={recoveryInput.responderHourlyCost}
                onChange={(value) =>
                  updateRecovery("responderHourlyCost", value)
                }
                suffix="€ / h"
              />
              <NumericField
                label="Heures externes de l’exercice"
                value={recoveryInput.exerciseExternalHours}
                onChange={(value) =>
                  updateRecovery("exerciseExternalHours", value)
                }
                suffix="heures"
              />
              <NumericField
                label="Tarif externe"
                value={recoveryInput.exerciseExternalRate}
                onChange={(value) =>
                  updateRecovery("exerciseExternalRate", value)
                }
                suffix="€ / h"
              />
              <NumericField
                label="Heures internes de l’exercice"
                value={recoveryInput.exerciseInternalHours}
                onChange={(value) =>
                  updateRecovery("exerciseInternalHours", value)
                }
                suffix="heures"
              />
              <NumericField
                label="Probabilité annuelle d’incident"
                value={recoveryInput.annualIncidentProbabilityPercent}
                onChange={(value) =>
                  updateRecovery("annualIncidentProbabilityPercent", value)
                }
                suffix="%"
              />
              <NumericField
                label="Durée d’arrêt à simuler"
                value={outageHours}
                onChange={updateOutageHours}
                suffix="heures"
              />
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <Metric
                label="Coût de l’exercice"
                value={
                  recovery.exerciseCost === null
                    ? "STOP"
                    : euro.format(recovery.exerciseCost)
                }
                detail="Décaissement externe + capacité interne valorisée."
              />
              <Metric
                label="Heures à éviter au seuil"
                value={
                  recovery.breakEvenHours === null
                    ? "STOP"
                    : `${decimal.format(recovery.breakEvenHours)} h`
                }
                detail="Probabilité × exposition horaire ; pas une promesse de rendement."
              />
              <Metric
                label={`Arrêt simulé — ${displayValue(outageHours) || "?"} h`}
                value={
                  outage.total === null ? "STOP" : euro.format(outage.total)
                }
                detail="Contribution exposée + capacité mobilisée, sans pénalité ni réputation."
              />
            </div>
          </div>
        </details>

        <details className="group border-t border-zinc-200 pt-5 dark:border-zinc-800">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-1 py-2 text-left text-xl font-black text-zinc-950 marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:text-white">
            <span>6. Passation préparée ou récupération en crise</span>
            <span
              aria-hidden="true"
              className="text-zinc-500 transition group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="mt-3">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <NumericField
                label="Services sur comptes personnels"
                value={accountInput.personalServiceCount}
                onChange={(value) =>
                  updateAccount("personalServiceCount", value)
                }
                suffix="services"
              />
              <NumericField
                label="Heures externes préparées / service"
                value={accountInput.preparedExternalHoursPerService}
                onChange={(value) =>
                  updateAccount("preparedExternalHoursPerService", value)
                }
                suffix="heures"
              />
              <NumericField
                label="Heures externes en crise / service"
                value={accountInput.crisisExternalHoursPerService}
                onChange={(value) =>
                  updateAccount("crisisExternalHoursPerService", value)
                }
                suffix="heures"
              />
              <NumericField
                label="Tarif externe"
                value={accountInput.externalHourlyRate}
                onChange={(value) => updateAccount("externalHourlyRate", value)}
                suffix="€ / h"
              />
              <NumericField
                label="Heures internes préparées / service"
                value={accountInput.preparedInternalHoursPerService}
                onChange={(value) =>
                  updateAccount("preparedInternalHoursPerService", value)
                }
                suffix="heures"
              />
              <NumericField
                label="Heures internes en crise / service"
                value={accountInput.crisisInternalHoursPerService}
                onChange={(value) =>
                  updateAccount("crisisInternalHoursPerService", value)
                }
                suffix="heures"
              />
              <NumericField
                label="Coût interne"
                value={accountInput.internalHourlyCost}
                onChange={(value) => updateAccount("internalHourlyCost", value)}
                suffix="€ / h"
              />
              <NumericField
                label="Coffre et MFA communs"
                value={accountInput.commonPreparedTooling}
                onChange={(value) =>
                  updateAccount("commonPreparedTooling", value)
                }
                suffix="€"
              />
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <Metric
                label="Passation préparée"
                value={
                  accounts.preparedCost === null
                    ? "STOP"
                    : euro.format(accounts.preparedCost)
                }
                detail="Temps + outillage commun, hors frais fournisseur."
              />
              <Metric
                label="Récupération en crise"
                value={
                  accounts.crisisCost === null
                    ? "STOP"
                    : euro.format(accounts.crisisCost)
                }
                detail="Sans jours d’attente, avocat ni compte irrécupérable."
              />
              <Metric
                label="Écart direct illustratif"
                value={
                  accounts.directDifference === null
                    ? "STOP"
                    : euro.format(accounts.directDifference)
                }
                detail="Ce n’est pas une probabilité ni une économie garantie."
              />
            </div>
          </div>
        </details>

        <div className="flex flex-wrap gap-3 border-t border-zinc-200 pt-7 dark:border-zinc-800">
          <button
            type="button"
            onClick={resetExample}
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-bold text-zinc-900 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Réinitialiser l’exemple
          </button>
          <button
            type="button"
            onClick={copySummary}
            disabled={modelStatus !== "PASS"}
            className="inline-flex items-center gap-2 rounded-xl bg-violet-700 px-4 py-2.5 text-sm font-bold text-white hover:bg-violet-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ClipboardCheck className="h-4 w-4" aria-hidden="true" />
            Copier le résumé
          </button>
          <button
            type="button"
            onClick={downloadCsv}
            disabled={modelStatus !== "PASS"}
            className="inline-flex items-center gap-2 rounded-xl bg-zinc-950 px-4 py-2.5 text-sm font-bold text-white hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Télécharger le CSV
          </button>
          <a
            href="/ressources/kit-reprise-saas-freelance.xlsx"
            download
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-bold text-zinc-900 no-underline hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Télécharger le kit XLSX
          </a>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-bold text-zinc-900 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900"
          >
            <Printer className="h-4 w-4" aria-hidden="true" />
            Imprimer
          </button>
        </div>

        <p
          role="status"
          aria-live="polite"
          className="m-0 text-sm font-semibold text-zinc-600 dark:text-zinc-300"
        >
          {
            {
              idle: "Les exports sont activés uniquement après qualification « passation normale » et calculs valides.",
              copied: "Le résumé a été copié.",
              "copy-error":
                "La copie a échoué ; utilisez le CSV ou l’impression.",
              downloaded: "Le CSV a été généré localement.",
            }[exportStatus]
          }
        </p>
      </div>
    </section>
  );
}

export { parseAmount as parseSaasHandoverAmount };
