"use client";

import { useId, useMemo, useState } from "react";
import {
  buildGoogleAdsSaasPilotMarkdown,
  calculateGoogleAdsSaasPilot,
  GOOGLE_ADS_SAAS_PILOT_DECISIONS,
  GOOGLE_ADS_SAAS_PILOT_EXAMPLE,
  GOOGLE_ADS_SAAS_PILOT_FIELD_DEFINITIONS,
  GOOGLE_ADS_SAAS_PILOT_NUMERIC_FIELDS,
  parseGoogleAdsSaasPilotDecimal,
  type GoogleAdsSaasPilotCohortStatus,
  type GoogleAdsSaasPilotInputs,
  type GoogleAdsSaasPilotNumericField,
} from "@/lib/google-ads-saas-pilot";

const euro = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 2,
});

const decimal = new Intl.NumberFormat("fr-FR", {
  maximumFractionDigits: 2,
});

type RawValues = Record<GoogleAdsSaasPilotNumericField, string>;
type ExportStatus = "idle" | "downloaded" | "error";

const GROUPS = [
  {
    key: "funnel",
    legend: "1. Suivez une seule cohorte du clic au client présent à M12",
    intro:
      "Tous les volumes doivent décrire le même périmètre, la même période d’entrée et les mêmes règles de déduplication.",
  },
  {
    key: "economics",
    legend: "2. Passez du revenu affiché à la marge et au temps",
    intro:
      "Le payback part de la marge contributive mensuelle. Il ajoute ensuite le cycle de vente et l’onboarding pour revenir à la date de dépense.",
  },
  {
    key: "tco",
    legend: "3. Distinguez le pilote du coût d’exploitation",
    intro:
      "Le TCO applique la même formule sur trois horizons : mise en place + nombre d’années × coût d’exploitation annuel, sans inflation.",
  },
  {
    key: "thresholds",
    legend: "4. Écrivez vos seuils avant de lire le résultat",
    intro:
      "Ces seuils viennent de votre économie et de votre trésorerie. Les valeurs de l’exemple AtelierFlow ne sont pas des recommandations.",
  },
  {
    key: "sensitivities",
    legend: "5. Isolez trois hypothèses fragiles",
    intro:
      "Testez séparément la conversion de la page, le passage SQL vers opportunité et le CPC. Les autres taux restent inchangés pour ne pas mélanger les causes.",
  },
] as const;

const COHORT_OPTIONS: ReadonlyArray<{
  value: GoogleAdsSaasPilotCohortStatus;
  label: string;
  help: string;
}> = [
  {
    value: "forecast",
    label: "Prévision avant pilote",
    help: "Les volumes sont des hypothèses à tester, pas des résultats.",
  },
  {
    value: "running",
    label: "Cohorte en cours",
    help: "Le cycle ou l’observation M12 n’est pas encore terminé.",
  },
  {
    value: "mature",
    label: "Cohorte déclarée mature",
    help: "Chaque dossier a atteint sa date de revue et le statut M12 est disponible.",
  },
];

const DECISION_CLASSES = {
  "launch-test":
    "border-emerald-300 bg-emerald-50 text-emerald-950 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-100",
  "repair-measurement-offer-capacity":
    "border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100",
  "extend-conditionally":
    "border-blue-300 bg-blue-50 text-blue-950 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-100",
  "scale-conditionally":
    "border-emerald-300 bg-emerald-50 text-emerald-950 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-100",
  stop: "border-red-300 bg-red-50 text-red-950 dark:border-red-800 dark:bg-red-950/30 dark:text-red-100",
} as const;

function initialRawValues(): RawValues {
  return Object.fromEntries(
    GOOGLE_ADS_SAAS_PILOT_NUMERIC_FIELDS.map((field) => [
      field,
      String(GOOGLE_ADS_SAAS_PILOT_EXAMPLE[field]),
    ]),
  ) as RawValues;
}

function parseRawInputs(
  rawValues: RawValues,
  readiness: {
    measurementReady: boolean;
    offerReady: boolean;
    salesCapacityReady: boolean;
  },
  cohortStatus: GoogleAdsSaasPilotCohortStatus,
): GoogleAdsSaasPilotInputs {
  const numeric = Object.fromEntries(
    GOOGLE_ADS_SAAS_PILOT_NUMERIC_FIELDS.map((field) => {
      const parsed = parseGoogleAdsSaasPilotDecimal(rawValues[field]);
      return [
        field,
        parsed === null && rawValues[field].trim() !== "" ? Number.NaN : parsed,
      ];
    }),
  ) as Record<GoogleAdsSaasPilotNumericField, number | null>;

  return {
    ...numeric,
    ...readiness,
    cohortStatus,
  };
}

function formatEuro(value: number | null) {
  return value === null || !Number.isFinite(value)
    ? "Non calculable"
    : euro.format(value);
}

function formatDecimal(value: number | null, suffix = "") {
  return value === null || !Number.isFinite(value)
    ? "Non calculable"
    : `${decimal.format(value)}${suffix}`;
}

function thresholdValue(value: number | null, unit: "€" | "mois" | "%") {
  if (value === null) {
    return "Non observable à ce stade";
  }
  if (unit === "€") {
    return euro.format(value);
  }
  return `${decimal.format(value)} ${unit}`;
}

function thresholdResultClass(status: "pass" | "fail" | "not-observable") {
  if (status === "pass") {
    return "border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/25";
  }
  if (status === "fail") {
    return "border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/25";
  }
  return "border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/25";
}

function thresholdResultLabel(status: "pass" | "fail" | "not-observable") {
  if (status === "pass") {
    return "Dans le seuil";
  }
  if (status === "fail") {
    return "Hors seuil";
  }
  return "Non observable à ce stade";
}

export function GoogleAdsSaasPilotCalculator() {
  const instanceId = useId().replaceAll(":", "");
  const [rawValues, setRawValues] = useState<RawValues>(initialRawValues);
  const [readiness, setReadiness] = useState({
    measurementReady: GOOGLE_ADS_SAAS_PILOT_EXAMPLE.measurementReady,
    offerReady: GOOGLE_ADS_SAAS_PILOT_EXAMPLE.offerReady,
    salesCapacityReady: GOOGLE_ADS_SAAS_PILOT_EXAMPLE.salesCapacityReady,
  });
  const [cohortStatus, setCohortStatus] =
    useState<GoogleAdsSaasPilotCohortStatus>(
      GOOGLE_ADS_SAAS_PILOT_EXAMPLE.cohortStatus,
    );
  const [exportStatus, setExportStatus] = useState<ExportStatus>("idle");
  const inputs = useMemo(
    () => parseRawInputs(rawValues, readiness, cohortStatus),
    [rawValues, readiness, cohortStatus],
  );
  const calculation = useMemo(
    () => calculateGoogleAdsSaasPilot(inputs),
    [inputs],
  );
  const firstIssueByField = new Map(
    calculation.validationIssues.map((issue) => [issue.field, issue]),
  );
  const decision = calculation.decision
    ? GOOGLE_ADS_SAAS_PILOT_DECISIONS[calculation.decision]
    : null;

  function inputId(field: GoogleAdsSaasPilotNumericField) {
    return `${instanceId}-ads-saas-${field}`;
  }

  function updateValue(field: GoogleAdsSaasPilotNumericField, raw: string) {
    setRawValues((current) => ({ ...current, [field]: raw }));
    setExportStatus("idle");
  }

  function updateReadiness(field: keyof typeof readiness, checked: boolean) {
    setReadiness((current) => ({ ...current, [field]: checked }));
    setExportStatus("idle");
  }

  function reviewDecision() {
    const firstIssue = calculation.validationIssues[0];
    if (firstIssue) {
      document.getElementById(inputId(firstIssue.field))?.focus();
      return;
    }

    if (!calculation.isDecisionReady) {
      const firstZeroField = [
        "leads",
        "sql",
        "opportunities",
        "signedCustomers",
        "activatedCustomers",
        "retainedCustomersM12",
      ].find(
        (field) => inputs[field as GoogleAdsSaasPilotNumericField] === 0,
      ) as GoogleAdsSaasPilotNumericField | undefined;
      if (firstZeroField) {
        document.getElementById(inputId(firstZeroField))?.focus();
      }
    }
  }

  function resetExample() {
    setRawValues(initialRawValues());
    setReadiness({
      measurementReady: GOOGLE_ADS_SAAS_PILOT_EXAMPLE.measurementReady,
      offerReady: GOOGLE_ADS_SAAS_PILOT_EXAMPLE.offerReady,
      salesCapacityReady: GOOGLE_ADS_SAAS_PILOT_EXAMPLE.salesCapacityReady,
    });
    setCohortStatus(GOOGLE_ADS_SAAS_PILOT_EXAMPLE.cohortStatus);
    setExportStatus("idle");
  }

  function downloadMarkdown() {
    if (
      !calculation.isValid ||
      !calculation.isDecisionReady ||
      !calculation.decision
    ) {
      setExportStatus("error");
      return;
    }

    try {
      const contents = buildGoogleAdsSaasPilotMarkdown(inputs, calculation);
      const blob = new Blob([`\ufeff${contents}`], {
        type: "text/markdown;charset=utf-8",
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "decision-pilote-google-ads-saas-b2b.md";
      document.body.append(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 0);
      setExportStatus("downloaded");
    } catch {
      setExportStatus("error");
    }
  }

  return (
    <section
      className="not-prose my-10 min-w-0 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
      aria-labelledby={`${instanceId}-ads-saas-title`}
    >
      <div className="border-b border-zinc-800 bg-zinc-950 px-4 py-5 text-white sm:px-6">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-300">
          Calcul local · aucun envoi · aucun stockage
        </p>
        <h3
          id={`${instanceId}-ads-saas-title`}
          className="m-0 text-lg font-bold sm:text-xl"
        >
          Reliez votre budget SaaS au client encore présent à M12
        </h3>
        <p className="mb-0 mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">
          AtelierFlow est un cas entièrement fictif :{" "}
          {euro.format(GOOGLE_ADS_SAAS_PILOT_EXAMPLE.mediaCost as number)} de
          média +{" "}
          {euro.format(
            GOOGLE_ADS_SAAS_PILOT_EXAMPLE.otherAcquisitionCosts as number,
          )}{" "}
          d’autres coûts ={" "}
          {euro.format(
            (GOOGLE_ADS_SAAS_PILOT_EXAMPLE.mediaCost as number) +
              (GOOGLE_ADS_SAAS_PILOT_EXAMPLE.otherAcquisitionCosts as number),
          )}{" "}
          de coût complet. Ses volumes et ses seuils ne sont ni des tarifs de
          marché, ni un devis, ni une recommandation. Remplacez chaque valeur
          par une donnée que vous pouvez retrouver.
        </p>
      </div>

      <div className="p-4 sm:p-6">
        <div className="rounded-xl border border-violet-200 bg-violet-50 p-4 text-sm leading-relaxed text-violet-950 dark:border-violet-900 dark:bg-violet-950/30 dark:text-violet-100">
          <strong>Règle de lecture :</strong> une case vide signifie « inconnue
          » et bloque le verdict. Saisissez zéro uniquement lorsqu’un coût ou un
          volume est réellement nul et documenté. Une division par zéro reste «
          non calculable » ; elle ne devient jamais 0 €.
        </div>

        <div className="mt-6 space-y-8">
          {GROUPS.map((group) => {
            const definitions = GOOGLE_ADS_SAAS_PILOT_FIELD_DEFINITIONS.filter(
              (field) => field.group === group.key,
            );

            return (
              <fieldset
                key={group.key}
                className="min-w-0 rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800 sm:p-5"
              >
                <legend className="max-w-full px-2 text-base font-bold leading-snug text-zinc-950 dark:text-white">
                  {group.legend}
                </legend>
                <p className="mb-4 mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {group.intro}
                </p>
                <div className="grid min-w-0 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {definitions.map((field) => {
                    const issue = firstIssueByField.get(field.key);
                    const helpId = `${inputId(field.key)}-help`;
                    const errorId = `${inputId(field.key)}-error`;

                    return (
                      <div key={field.key} className="min-w-0">
                        <label
                          htmlFor={inputId(field.key)}
                          className="block text-sm font-semibold leading-snug text-zinc-900 dark:text-zinc-100"
                        >
                          {field.label}
                        </label>
                        <p
                          id={helpId}
                          className="mb-0 mt-1 min-h-12 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400"
                        >
                          {field.help}
                        </p>
                        <span className="relative mt-2 block">
                          <input
                            id={inputId(field.key)}
                            type="text"
                            inputMode={field.integer ? "numeric" : "decimal"}
                            autoComplete="off"
                            value={rawValues[field.key]}
                            onChange={(event) =>
                              updateValue(field.key, event.target.value)
                            }
                            aria-describedby={helpId}
                            aria-invalid={issue ? true : undefined}
                            aria-errormessage={issue ? errorId : undefined}
                            className={`w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none focus:ring-2 dark:bg-zinc-900 dark:text-white ${
                              field.suffix ? "pr-20" : ""
                            } ${
                              issue
                                ? "border-red-500 focus:border-red-600 focus:ring-red-200 dark:border-red-700 dark:focus:ring-red-950"
                                : "border-zinc-300 focus:border-violet-500 focus:ring-violet-200 dark:border-zinc-700 dark:focus:ring-violet-950"
                            }`}
                          />
                          {field.suffix && (
                            <span className="pointer-events-none absolute inset-y-0 right-3 flex max-w-16 items-center text-right text-xs leading-tight text-zinc-500">
                              {field.suffix}
                            </span>
                          )}
                        </span>
                        {issue && (
                          <p
                            id={errorId}
                            role="alert"
                            className="mb-0 mt-1 text-xs leading-relaxed text-red-700 dark:text-red-300"
                          >
                            {issue.message}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </fieldset>
            );
          })}

          <fieldset className="min-w-0 rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800 sm:p-5">
            <legend className="px-2 text-base font-bold text-zinc-950 dark:text-white">
              6. Vérifiez les trois portes opérationnelles
            </legend>
            <p className="mb-4 mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Cochez uniquement ce qui est déjà vrai. Le calcul ne peut pas
              vérifier la configuration de votre compte, la clarté de votre
              offre ou la disponibilité réelle de vos commerciaux.
            </p>
            <div className="grid gap-3 lg:grid-cols-3">
              {[
                {
                  key: "measurementReady" as const,
                  label: "Mesure exploitable",
                  help: "Clic, lead, statut CRM, signature, activation et M12 utilisent des identifiants et définitions stables.",
                },
                {
                  key: "offerReady" as const,
                  label: "Offre qualifiable",
                  help: "ICP, problème, limites du produit, preuve et prochaine étape sont compris avant le formulaire.",
                },
                {
                  key: "salesCapacityReady" as const,
                  label: "Capacité commerciale disponible",
                  help: "Un responsable rappelle, qualifie, déduplique et clôt les dossiers dans le délai annoncé.",
                },
              ].map((item) => (
                <label
                  key={item.key}
                  className="flex min-w-0 cursor-pointer gap-3 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/60"
                >
                  <input
                    type="checkbox"
                    checked={readiness[item.key]}
                    onChange={(event) =>
                      updateReadiness(item.key, event.target.checked)
                    }
                    className="mt-1 size-4 shrink-0 accent-violet-600"
                  />
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-zinc-950 dark:text-white">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {item.help}
                    </span>
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="min-w-0 rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800 sm:p-5">
            <legend className="px-2 text-base font-bold text-zinc-950 dark:text-white">
              7. Dites où en est la cohorte
            </legend>
            <div className="mt-2 grid gap-3 lg:grid-cols-3">
              {COHORT_OPTIONS.map((option) => (
                <label
                  key={option.value}
                  className={`flex min-w-0 cursor-pointer gap-3 rounded-xl border p-4 ${
                    cohortStatus === option.value
                      ? "border-violet-400 bg-violet-50 dark:border-violet-700 dark:bg-violet-950/30"
                      : "border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/60"
                  }`}
                >
                  <input
                    type="radio"
                    name={`${instanceId}-cohort-status`}
                    value={option.value}
                    checked={cohortStatus === option.value}
                    onChange={() => {
                      setCohortStatus(option.value);
                      setExportStatus("idle");
                    }}
                    className="mt-1 size-4 shrink-0 accent-violet-600"
                  />
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-zinc-950 dark:text-white">
                      {option.label}
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {option.help}
                    </span>
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button
            type="button"
            onClick={reviewDecision}
            className="rounded-lg bg-violet-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-300"
          >
            Vérifier la décision et les erreurs
          </button>
          <button
            type="button"
            onClick={resetExample}
            className="rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-300 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900"
          >
            Réinitialiser l’exemple fictif
          </button>
        </div>
      </div>

      <div className="min-w-0 border-t border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/40 sm:p-6">
        <h3 className="m-0 text-lg font-bold text-zinc-950 dark:text-white">
          Résultat économique de la cohorte saisie
        </h3>

        {!calculation.isValid ? (
          <div
            role="alert"
            className="mt-4 rounded-xl border border-red-300 bg-red-50 p-4 text-sm leading-relaxed text-red-950 dark:border-red-800 dark:bg-red-950/30 dark:text-red-100"
          >
            <strong>Aucun verdict.</strong> Une ou plusieurs données sont
            inconnues ou invalides. Corrigez les champs signalés ; l’outil ne
            remplace aucun montant manquant par zéro.
          </div>
        ) : !calculation.isDecisionReady ? (
          <div
            role="status"
            aria-live="polite"
            className="mt-4 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100"
          >
            <strong>Aucun verdict.</strong> Une division par zéro empêche encore
            de calculer le CPL, les coûts des étapes ou un CAC. Le zéro reste
            visible ; il n’est ni corrigé ni transformé en performance.
          </div>
        ) : decision && calculation.decision ? (
          <div
            role="status"
            aria-live="polite"
            className={`mt-4 rounded-xl border p-4 ${DECISION_CLASSES[calculation.decision]}`}
          >
            <p className="m-0 text-base font-bold">{decision.title}</p>
            <p className="mb-0 mt-2 text-sm leading-relaxed">
              {decision.explanation}
            </p>
          </div>
        ) : null}

        {calculation.metrics && (
          <>
            <div className="mt-6 grid min-w-0 gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  label: "Coût d’acquisition complet",
                  value: formatEuro(
                    calculation.metrics.completeAcquisitionCost,
                  ),
                },
                {
                  label: "CPC média observé",
                  value: formatEuro(calculation.metrics.observedCpc),
                },
                {
                  label: "CPL complet",
                  value: formatEuro(calculation.metrics.costPerLead),
                },
                {
                  label: "Coût par lead ICP",
                  value: formatEuro(calculation.metrics.costPerIcpLead),
                },
                {
                  label: "Coût par SQL",
                  value: formatEuro(calculation.metrics.costPerSql),
                },
                {
                  label: "Coût par opportunité",
                  value: formatEuro(calculation.metrics.costPerOpportunity),
                },
                {
                  label: "CAC signé",
                  value: formatEuro(calculation.metrics.cacSigned),
                },
                {
                  label: "CAC activé",
                  value: formatEuro(calculation.metrics.cacActivated),
                },
                {
                  label: "CAC client présent M12",
                  value:
                    calculation.metrics.cacRetainedM12 === null &&
                    cohortStatus === "running"
                      ? "Non observable à ce stade"
                      : formatEuro(calculation.metrics.cacRetainedM12),
                },
                {
                  label: "Payback depuis activation",
                  value: formatDecimal(
                    calculation.metrics.paybackFromActivationMonths,
                    " mois",
                  ),
                },
                {
                  label: "Payback depuis dépense",
                  value: formatDecimal(
                    calculation.metrics.paybackFromSpendMonths,
                    " mois",
                  ),
                },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="min-w-0 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
                >
                  <p className="m-0 text-xs font-semibold leading-snug text-zinc-500 dark:text-zinc-400">
                    {metric.label}
                  </p>
                  <p className="mb-0 mt-2 break-words text-xl font-bold text-zinc-950 dark:text-white">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950/25">
              <p className="m-0 text-sm font-semibold text-blue-950 dark:text-blue-100">
                Marge contributive mensuelle saisie
              </p>
              <p className="mb-0 mt-1 text-2xl font-bold text-blue-950 dark:text-blue-100">
                {formatEuro(calculation.metrics.monthlyContributionMargin)}
              </p>
              <p className="mb-0 mt-1 text-xs leading-relaxed text-blue-900 dark:text-blue-200">
                Abonnement moins coûts variables mensuels par client. Ce montant
                n’est ni le chiffre d’affaires, ni la trésorerie immédiatement
                encaissée.
              </p>
            </div>
          </>
        )}

        {calculation.thresholdChecks.length > 0 && (
          <section
            className="mt-7"
            aria-labelledby={`${instanceId}-threshold-results`}
          >
            <h4
              id={`${instanceId}-threshold-results`}
              className="m-0 text-base font-bold text-zinc-950 dark:text-white"
            >
              Contrôle des seuils que vous avez saisis
            </h4>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {calculation.thresholdChecks.map((check) => (
                <div
                  key={check.key}
                  className={`min-w-0 rounded-xl border p-4 ${thresholdResultClass(check.status)}`}
                >
                  <p className="m-0 text-sm font-semibold text-zinc-950 dark:text-white">
                    {check.label}
                  </p>
                  <p className="mb-0 mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                    Résultat :{" "}
                    <strong>{thresholdValue(check.actual, check.unit)}</strong>
                    <br />
                    Seuil saisi :{" "}
                    <strong>
                      {thresholdValue(check.threshold, check.unit)}
                    </strong>
                  </p>
                  <p className="mb-0 mt-2 text-xs font-bold uppercase tracking-wide">
                    {thresholdResultLabel(check.status)}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {calculation.tco && (
          <section
            className="mt-7"
            aria-labelledby={`${instanceId}-tco-results`}
          >
            <h4
              id={`${instanceId}-tco-results`}
              className="m-0 text-base font-bold text-zinc-950 dark:text-white"
            >
              TCO du dispositif, sans inflation
            </h4>
            <p className="mb-0 mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Mise en place + exploitation annuelle sur le même périmètre. Le
              TCO ne se compare au coût complet du funnel saisi que si ses
              postes et sa période sont réellement les mêmes.
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {[
                ["12 mois", calculation.tco.month12],
                ["36 mois", calculation.tco.month36],
                ["60 mois", calculation.tco.month60],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="min-w-0 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
                >
                  <p className="m-0 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                    {label}
                  </p>
                  <p className="mb-0 mt-1 break-words text-xl font-bold text-zinc-950 dark:text-white">
                    {euro.format(value as number)}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {calculation.sensitivities.length > 0 && (
          <section
            className="mt-7"
            aria-labelledby={`${instanceId}-sensitivity-results`}
          >
            <h4
              id={`${instanceId}-sensitivity-results`}
              className="m-0 text-base font-bold text-zinc-950 dark:text-white"
            >
              Sensibilités : une hypothèse modifiée à la fois
            </h4>
            <p className="mb-0 mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Ces lignes montrent la fragilité du résultat ; elles ne prédisent
              pas ce qui va arriver.
            </p>
            <div className="mt-3 grid min-w-0 gap-3">
              {calculation.sensitivities.map((row) => (
                <article
                  key={row.key}
                  className="min-w-0 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
                >
                  <h5 className="m-0 text-sm font-bold text-zinc-950 dark:text-white">
                    {row.label}
                  </h5>
                  <p className="mb-0 mt-1 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {row.assumption}
                  </p>
                  <dl className="mb-0 mt-3 grid min-w-0 gap-3 sm:grid-cols-2 xl:grid-cols-6">
                    <div className="min-w-0">
                      <dt className="text-xs text-zinc-500">Clics</dt>
                      <dd className="m-0 break-words text-sm font-semibold text-zinc-950 dark:text-white">
                        {formatDecimal(row.clicks)}
                      </dd>
                    </div>
                    <div className="min-w-0">
                      <dt className="text-xs text-zinc-500">Opportunités</dt>
                      <dd className="m-0 break-words text-sm font-semibold text-zinc-950 dark:text-white">
                        {formatDecimal(row.opportunities)}
                      </dd>
                    </div>
                    <div className="min-w-0">
                      <dt className="text-xs text-zinc-500">Activés</dt>
                      <dd className="m-0 break-words text-sm font-semibold text-zinc-950 dark:text-white">
                        {formatDecimal(row.activatedCustomers)}
                      </dd>
                    </div>
                    <div className="min-w-0">
                      <dt className="text-xs text-zinc-500">CAC activé</dt>
                      <dd className="m-0 break-words text-sm font-semibold text-zinc-950 dark:text-white">
                        {formatEuro(row.cacActivated)}
                      </dd>
                    </div>
                    <div className="min-w-0">
                      <dt className="text-xs text-zinc-500">
                        Payback activation
                      </dt>
                      <dd className="m-0 break-words text-sm font-semibold text-zinc-950 dark:text-white">
                        {formatDecimal(
                          row.paybackFromActivationMonths,
                          " mois",
                        )}
                      </dd>
                    </div>
                    <div className="min-w-0">
                      <dt className="text-xs text-zinc-500">
                        Payback depuis dépense
                      </dt>
                      <dd className="m-0 break-words text-sm font-semibold text-zinc-950 dark:text-white">
                        {formatDecimal(row.paybackFromSpendMonths, " mois")}
                      </dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </section>
        )}

        <div className="mt-7 rounded-xl border border-zinc-300 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-950">
          <p className="m-0 text-sm font-bold text-zinc-950 dark:text-white">
            Limite indispensable
          </p>
          <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            {calculation.decisionLimit}
          </p>
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={downloadMarkdown}
            disabled={
              !calculation.isValid ||
              !calculation.isDecisionReady ||
              !calculation.decision
            }
            className="rounded-lg bg-zinc-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            Télécharger la note Markdown
          </button>
          <p
            aria-live="polite"
            className="m-0 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400"
          >
            {exportStatus === "downloaded"
              ? "Le fichier Markdown UTF-8 a été préparé sur votre appareil."
              : exportStatus === "error"
                ? "Le téléchargement reste bloqué tant que le verdict ne peut pas être calculé."
                : "Le fichier ne contient aucune donnée personnelle et reste sur votre appareil."}
          </p>
        </div>
      </div>
    </section>
  );
}
