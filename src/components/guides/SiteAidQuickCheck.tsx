"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Download, RotateCcw } from "lucide-react";
import {
  buildSiteAidQuickCheckReport,
  calculateSiteAidQuickCheck,
  createEmptySiteAidQuickCheckInput,
  formatSiteAidQuickCheckMoney,
  type SiteAidCommitmentRule,
  type SiteAidJourney,
  type SiteAidNotificationStage,
  type SiteAidQuickCheckInput,
  type SiteAidSupportType,
  type SiteAidTriState,
  type SiteAidVatRecovery,
} from "@/lib/site-aid-quick-check";

const controlClassName =
  "mt-1.5 min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-950 shadow-sm outline-none focus:border-violet-600 focus:ring-2 focus:ring-violet-600/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white";
const labelClassName =
  "block text-sm font-black text-zinc-900 dark:text-zinc-100";
const helpClassName =
  "mb-0 mt-1 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400";

const triStateOptions: Array<{ value: SiteAidTriState; label: string }> = [
  { value: "unknown", label: "À confirmer" },
  { value: "yes", label: "Oui, confirmé" },
  { value: "no", label: "Non" },
];

const supportTypeOptions: Array<{
  value: SiteAidSupportType;
  label: string;
}> = [
  { value: "unknown", label: "À qualifier" },
  { value: "grant", label: "Subvention non remboursable" },
  {
    value: "support-in-kind",
    label: "Accompagnement ou prestation prise en charge",
  },
  {
    value: "loan-or-guarantee",
    label: "Prêt, avance remboursable ou garantie",
  },
  {
    value: "creator-support",
    label: "Aide à la création ou droits du dirigeant",
  },
  { value: "training", label: "Financement de formation" },
  { value: "tax-accounting", label: "Effet fiscal ou comptable" },
];

const vatRecoveryOptions: Array<{
  value: SiteAidVatRecovery;
  label: string;
}> = [
  { value: "unknown", label: "À confirmer" },
  { value: "full", label: "TVA entièrement récupérable" },
  { value: "partial", label: "TVA partiellement récupérable" },
  { value: "none", label: "TVA non récupérable" },
];

function parseOptionalNumber(value: string): number | undefined {
  if (value.trim() === "") return undefined;
  const parsed = Number(value.replace(",", "."));
  return Number.isFinite(parsed) ? parsed : undefined;
}

function SelectField<T extends string>({
  id,
  label,
  help,
  value,
  options,
  onChange,
}: {
  id: string;
  label: string;
  help: string;
  value: T;
  options: Array<{ value: T; label: string }>;
  onChange: (value: T) => void;
}) {
  const helpId = `${id}-help`;
  return (
    <div>
      <label className={labelClassName} htmlFor={id}>
        {label}
      </label>
      <select
        id={id}
        aria-describedby={helpId}
        className={controlClassName}
        value={value}
        onChange={(event) => onChange(event.target.value as T)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p id={helpId} className={helpClassName}>
        {help}
      </p>
    </div>
  );
}

function TriStateField({
  id,
  label,
  help,
  value,
  onChange,
}: {
  id: string;
  label: string;
  help: string;
  value: SiteAidTriState;
  onChange: (value: SiteAidTriState) => void;
}) {
  return (
    <SelectField
      id={id}
      label={label}
      help={help}
      value={value}
      options={triStateOptions}
      onChange={onChange}
    />
  );
}

function NumberField({
  id,
  label,
  help,
  value,
  suffix = "€",
  max = 1_000_000_000,
  onChange,
}: {
  id: string;
  label: string;
  help: string;
  value: number | undefined;
  suffix?: string;
  max?: number;
  onChange: (value: number | undefined) => void;
}) {
  const helpId = `${id}-help`;
  return (
    <div>
      <label className={labelClassName} htmlFor={id}>
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          aria-describedby={helpId}
          className={`${controlClassName} pr-12`}
          type="number"
          min={0}
          max={max}
          step="any"
          inputMode="decimal"
          value={value ?? ""}
          onChange={(event) =>
            onChange(parseOptionalNumber(event.target.value))
          }
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-3 flex items-center pt-1.5 text-xs font-bold text-zinc-500"
        >
          {suffix}
        </span>
      </div>
      <p id={helpId} className={helpClassName}>
        {help}
      </p>
    </div>
  );
}

function Metric({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note?: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
      <dt className="text-xs font-black uppercase tracking-wide text-zinc-500">
        {label}
      </dt>
      <dd className="mb-0 mt-1 text-xl font-black text-zinc-950 dark:text-white">
        {value}
      </dd>
      {note ? (
        <p className="mb-0 mt-1 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
          {note}
        </p>
      ) : null}
    </div>
  );
}

const steps = [
  { id: 1, label: "Vérifier la piste" },
  { id: 2, label: "Chiffrer" },
  { id: 3, label: "Décider" },
] as const;

export function SiteAidQuickCheck() {
  const [input, setInput] = useState<SiteAidQuickCheckInput>(() =>
    createEmptySiteAidQuickCheckInput(),
  );
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);
  const [focusRequest, setFocusRequest] = useState(0);
  const [downloaded, setDownloaded] = useState(false);
  const stepOneHeadingRef = useRef<HTMLHeadingElement>(null);
  const stepTwoHeadingRef = useRef<HTMLHeadingElement>(null);
  const stepThreeHeadingRef = useRef<HTMLHeadingElement>(null);

  const result = useMemo(() => calculateSiteAidQuickCheck(input), [input]);

  useEffect(() => {
    if (input.journey !== "official-source" || focusRequest === 0) return;
    const heading =
      activeStep === 1
        ? stepOneHeadingRef.current
        : activeStep === 2
          ? stepTwoHeadingRef.current
          : stepThreeHeadingRef.current;
    heading?.focus();
  }, [activeStep, focusRequest, input.journey]);

  function update<K extends keyof SiteAidQuickCheckInput>(
    key: K,
    value: SiteAidQuickCheckInput[K],
  ) {
    setInput((current) => ({ ...current, [key]: value }));
    setDownloaded(false);
  }

  function goToStep(step: 1 | 2 | 3) {
    setActiveStep(step);
    setFocusRequest((current) => current + 1);
  }

  function selectJourney(journey: SiteAidJourney) {
    setInput((current) => ({ ...current, journey }));
    setDownloaded(false);
    if (journey === "official-source") goToStep(1);
  }

  function updateSupportType(supportType: SiteAidSupportType) {
    setInput((current) => ({
      ...current,
      supportType,
      ...(supportType === "grant"
        ? {}
        : {
            notificationStage: "none" as const,
            quoteExVat: undefined,
            invoiceVatAmount: undefined,
            vatRecovery: "unknown" as const,
            recoverableVatAmount: undefined,
            eligibleExVat: undefined,
            theoreticalRatePercent: undefined,
            theoreticalCap: undefined,
            notifiedContribution: undefined,
            paidContribution: undefined,
            delayMonths: undefined,
            monthlyMarginAtRisk: undefined,
            applicationCosts: undefined,
            projectViableWithoutAid: "unknown" as const,
            cashAvailableBeforePayment: "unknown" as const,
          }),
    }));
    setDownloaded(false);
  }

  function updateNotificationStage(
    notificationStage: SiteAidNotificationStage,
  ) {
    setInput((current) => ({
      ...current,
      notificationStage,
      ...(notificationStage === "none"
        ? {
            notifiedContribution: undefined,
            paidContribution: undefined,
          }
        : notificationStage === "written"
          ? { paidContribution: undefined }
          : {
              commitmentRule: "unknown" as const,
              eligibleExVat: undefined,
              theoreticalRatePercent: undefined,
              theoreticalCap: undefined,
              delayMonths: undefined,
              monthlyMarginAtRisk: undefined,
              applicationCosts: undefined,
              projectViableWithoutAid: "unknown" as const,
              cashAvailableBeforePayment: "unknown" as const,
            }),
    }));
    setDownloaded(false);
  }

  function updateVatRecovery(vatRecovery: SiteAidVatRecovery) {
    setInput((current) => ({
      ...current,
      vatRecovery,
      ...(vatRecovery === "partial"
        ? {}
        : { recoverableVatAmount: undefined }),
    }));
    setDownloaded(false);
  }

  function downloadReport() {
    const report = buildSiteAidQuickCheckReport(
      input,
      result,
      new Date().toLocaleString("fr-FR"),
    );
    const blob = new Blob([report], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `tri-aides-site-${new Date()
      .toISOString()
      .slice(0, 10)}.txt`;
    anchor.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 0);
    setDownloaded(true);
  }

  function reset() {
    setInput(createEmptySiteAidQuickCheckInput());
    setActiveStep(1);
    setDownloaded(false);
  }

  const resultTone =
    result.code === "stop-or-requalify" || result.code === "reduce-or-finance"
      ? "border-rose-300 bg-rose-50 text-rose-950 dark:border-rose-800 dark:bg-rose-950/30 dark:text-rose-100"
      : result.code === "launch-without-budgeting-aid" ||
          result.code === "launch-after-notification" ||
          result.code === "paid-to-reconcile"
        ? "border-emerald-300 bg-emerald-50 text-emerald-950 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-100"
        : result.code === "separate-financing-instrument"
          ? "border-blue-300 bg-blue-50 text-blue-950 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-100"
          : "border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100";

  const economicCostNote =
    input.vatRecovery === "unknown"
      ? "Fourchette prudente tant que la TVA récupérable est inconnue."
      : input.vatRecovery === "partial"
        ? "Montant exact à partir de la TVA récupérable déclarée."
        : input.vatRecovery === "full"
          ? "Montant HT lorsque toute la TVA est récupérable."
          : "Montant TTC lorsque la TVA n’est pas récupérable.";

  return (
    <section
      id="tri-aides-site"
      aria-labelledby="tri-aides-site-title"
      className="not-prose my-10 scroll-mt-24 overflow-hidden rounded-2xl border border-violet-200 bg-zinc-50 shadow-sm dark:border-violet-900 dark:bg-zinc-950"
    >
      <header className="border-b border-violet-200 bg-gradient-to-br from-violet-950 to-indigo-950 p-5 text-white dark:border-violet-900 sm:p-7">
        <p className="m-0 text-xs font-black uppercase tracking-[0.16em] text-violet-200">
          Tri local — 3 à 5 minutes
        </p>
        <h2 id="tri-aides-site-title" className="mb-0 mt-2 text-2xl text-white">
          Décider quoi vérifier sans simuler une éligibilité
        </h2>
        <p className="mb-0 mt-3 max-w-3xl text-sm leading-relaxed text-violet-100">
          Choisissez d’abord votre situation. Les réponses restent dans cet
          onglet. Aucun texte libre n’est interprété et aucun régime juridique
          n’est déduit par l’outil.
        </p>
      </header>

      <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {input.journey === "official-source"
          ? `Étape ${activeStep} sur 3 : ${steps[activeStep - 1].label}`
          : "Parcours de recherche de sources officielles"}
      </p>

      <div className="space-y-6 p-4 sm:p-6">
        <fieldset>
          <legend className="text-base font-black text-zinc-950 dark:text-white">
            Où en êtes-vous ?
          </legend>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {(
              [
                {
                  value: "searching",
                  title: "Je cherche encore un dispositif",
                  description:
                    "Je veux savoir où chercher et quelles informations préparer.",
                },
                {
                  value: "official-source",
                  title: "J’ai une fiche officielle",
                  description:
                    "Je veux chiffrer la piste et préparer mes questions à l’autorité.",
                },
              ] satisfies Array<{
                value: SiteAidJourney;
                title: string;
                description: string;
              }>
            ).map((option) => (
              <button
                key={option.value}
                type="button"
                aria-pressed={input.journey === option.value}
                onClick={() => selectJourney(option.value)}
                className={`min-h-24 rounded-xl border p-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 ${
                  input.journey === option.value
                    ? "border-violet-700 bg-violet-700 text-white"
                    : "border-zinc-300 bg-white text-zinc-900 hover:border-violet-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                }`}
              >
                <span className="block font-black">{option.title}</span>
                <span className="mt-1 block text-xs leading-relaxed opacity-85">
                  {option.description}
                </span>
              </button>
            ))}
          </div>
        </fieldset>

        {input.journey === "searching" ? (
          <div className="space-y-5">
            <div className={`rounded-xl border p-5 ${resultTone}`}>
              <p className="m-0 text-lg font-black">{result.title}</p>
              <p className="mb-0 mt-2 text-sm leading-relaxed">
                {result.summary}
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <a
                href="https://www.francenum.gouv.fr/aides-financieres/trouver-une-aide-financiere"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-zinc-300 bg-white p-4 no-underline hover:border-violet-500 dark:border-zinc-700 dark:bg-zinc-900"
              >
                <strong className="block text-zinc-950 dark:text-white">
                  France Num
                </strong>
                <span className="mt-1 block text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Repérer des aides numériques par territoire et profil, puis
                  contrôler la fiche du financeur.
                </span>
              </a>
              <a
                href="https://les-aides.fr/aides"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-zinc-300 bg-white p-4 no-underline hover:border-violet-500 dark:border-zinc-700 dark:bg-zinc-900"
              >
                <strong className="block text-zinc-950 dark:text-white">
                  Les-aides.fr — réseau CCI
                </strong>
                <span className="mt-1 block text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Élargir la recherche aux financements des entreprises, sans
                  confondre référencement, éligibilité et accord.
                </span>
              </a>
            </div>

            <ol className="m-0 space-y-2 pl-5 text-sm">
              <li>Notez le territoire d’établissement et celui du projet.</li>
              <li>
                Séparez subvention, accompagnement, prêt, formation et aide à la
                création.
              </li>
              <li>
                Conservez la fiche officielle, sa date, l’autorité et le contact
                d’instruction.
              </li>
              <li>
                Revenez dans la branche « J’ai une fiche officielle » sans
                soustraire encore un euro du budget.
              </li>
            </ol>

            <p className="m-0 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
              Besoin d’un interlocuteur ? Le service public{" "}
              <a
                href="https://conseillers-entreprises.service-public.gouv.fr/aide-entreprise/accueil/theme/internet-web"
                target="_blank"
                rel="noopener noreferrer"
              >
                Conseillers-Entreprises — développement sur internet
              </a>{" "}
              oriente les TPE et PME ; ce n’est pas une promesse de financement.
            </p>
          </div>
        ) : (
          <>
            <nav aria-label="Étapes du tri">
              <ol className="m-0 grid list-none gap-2 p-0 sm:grid-cols-3">
                {steps.map((step) => (
                  <li key={step.id}>
                    <button
                      type="button"
                      aria-current={activeStep === step.id ? "step" : undefined}
                      onClick={() => goToStep(step.id)}
                      className={`min-h-11 w-full rounded-lg border px-3 py-2 text-left text-xs font-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 ${
                        activeStep === step.id
                          ? "border-violet-700 bg-violet-700 text-white"
                          : "border-zinc-300 bg-white text-zinc-800 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                      }`}
                    >
                      <span className="block opacity-70">
                        Étape {step.id}/3
                      </span>
                      {step.label}
                    </button>
                  </li>
                ))}
              </ol>
            </nav>

            {activeStep === 1 ? (
              <div
                role="region"
                aria-labelledby="site-aid-quick-step-1"
                className="space-y-5"
              >
                <div>
                  <h3
                    ref={stepOneHeadingRef}
                    id="site-aid-quick-step-1"
                    tabIndex={-1}
                    className="mb-0 outline-none"
                  >
                    Vérifier la piste, sans analyser le texte de la pièce
                  </h3>
                  <p className="mb-0 mt-2 text-sm">
                    Répondez uniquement à partir de la fiche ou d’une réponse
                    écrite. « À confirmer » est une réponse normale.
                  </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <SelectField
                    id="site-aid-support-type"
                    label="Quelle est la nature exacte du soutien ?"
                    help="Seule une subvention non remboursable peut réduire le coût dans ce tri."
                    value={input.supportType}
                    options={supportTypeOptions}
                    onChange={updateSupportType}
                  />
                  {input.supportType === "grant" ? (
                    <>
                      <TriStateField
                        id="site-aid-official-source"
                        label="La source officielle actuelle est-elle identifiée ?"
                        help="Fiche précise, autorité, date et contact d’instruction."
                        value={input.officialSource}
                        onChange={(value) => update("officialSource", value)}
                      />
                      <TriStateField
                        id="site-aid-profile-match"
                        label="Profil, territoire et secteur correspondent-ils ?"
                        help="Ne déduisez pas un oui de la seule présence d’un montant."
                        value={input.profileMatches}
                        onChange={(value) => update("profileMatches", value)}
                      />
                      <TriStateField
                        id="site-aid-expenses-confirmed"
                        label="Chaque ligne du devis est-elle confirmée admissible ?"
                        help="Une dépense numérique globale ne suffit pas."
                        value={input.expensesConfirmed}
                        onChange={(value) =>
                          update("expensesConfirmed", value)
                        }
                      />
                      {input.notificationStage !== "paid" ? (
                        <SelectField
                          id="site-aid-commitment-rule"
                          label="Que dit l’écrit sur devis, acompte et démarrage ?"
                          help="Un accusé de dépôt ne vaut pas automatiquement autorisation de commencer."
                          value={input.commitmentRule}
                          options={[
                            {
                              value: "unknown",
                              label: "À confirmer par écrit",
                            },
                            {
                              value: "allowed-in-writing",
                              label: "Engagement autorisé par écrit",
                            },
                            {
                              value: "forbidden-before-decision",
                              label: "Engagement interdit avant décision",
                            },
                          ]}
                          onChange={(value: SiteAidCommitmentRule) =>
                            update("commitmentRule", value)
                          }
                        />
                      ) : (
                        <p className="m-0 self-end rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-relaxed text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-100">
                          Au stade payé, l’ordre d’engagement n’est plus une
                          porte prévisionnelle. Conservez néanmoins les pièces
                          utiles aux obligations post-versement.
                        </p>
                      )}
                    </>
                  ) : (
                    <div className="self-end rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm leading-relaxed text-blue-950 dark:border-blue-900 dark:bg-blue-950/30 dark:text-blue-100">
                      {input.supportType === "unknown"
                        ? "Commencez par qualifier l’instrument. Aucun autre champ ne peut produire une décision tant que sa nature reste inconnue."
                        : "Ce tri de subvention s’arrête ici. Passez à l’étape suivante pour obtenir les contrôles propres à un prêt, une garantie, un accompagnement, une formation, la création ou la fiscalité."}
                    </div>
                  )}
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => goToStep(2)}
                    className="min-h-11 rounded-lg bg-violet-700 px-4 py-2 text-sm font-black text-white hover:bg-violet-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2"
                  >
                    {input.supportType === "grant"
                      ? "Continuer vers les montants"
                      : "Continuer vers l’orientation"}
                  </button>
                </div>
              </div>
            ) : null}

            {activeStep === 2 ? (
              <div
                role="region"
                aria-labelledby="site-aid-quick-step-2"
                className="space-y-6"
              >
                <div>
                  <h3
                    ref={stepTwoHeadingRef}
                    id="site-aid-quick-step-2"
                    tabIndex={-1}
                    className="mb-0 outline-none"
                  >
                    Chiffrer uniquement ce qui est connu
                  </h3>
                  <p className="mb-0 mt-2 text-sm">
                    {input.supportType === "grant"
                      ? "Saisissez la TVA totale indiquée par le devis, même si les lignes ont plusieurs taux. Une subvention reste à 0 € au budget tant qu’elle n’est pas notifiée par écrit."
                      : "Aucun montant de cet instrument ne sera traité comme une subvention ou retranché de la facture du site."}
                  </p>
                </div>

                {input.supportType === "grant" ? (
                  <>
                    <div className="grid gap-5 md:grid-cols-2">
                      <NumberField
                        id="site-aid-quote"
                        label="Devis total HT"
                        help="Toutes les lignes du projet, admissibles ou non."
                        value={input.quoteExVat}
                        onChange={(value) => update("quoteExVat", value)}
                      />
                      <NumberField
                        id="site-aid-invoice-vat"
                        label="TVA totale du devis"
                        help="Additionnez les montants de TVA ligne par ligne ; aucun taux moyen n’est inventé."
                        value={input.invoiceVatAmount}
                        onChange={(value) => update("invoiceVatAmount", value)}
                      />
                      <SelectField
                        id="site-aid-vat-recovery"
                        label="Quelle TVA l’entreprise récupère-t-elle ?"
                        help="Demandez au comptable si le traitement n’est pas certain."
                        value={input.vatRecovery}
                        options={vatRecoveryOptions}
                        onChange={updateVatRecovery}
                      />
                      {input.vatRecovery === "partial" ? (
                        <NumberField
                          id="site-aid-recoverable-vat"
                          label="TVA exactement récupérable"
                          help="Ce montant ne peut pas dépasser la TVA totale du devis."
                          value={input.recoverableVatAmount}
                          onChange={(value) =>
                            update("recoverableVatAmount", value)
                          }
                        />
                      ) : null}
                      {input.notificationStage !== "paid" ? (
                        <>
                          <NumberField
                            id="site-aid-eligible"
                            label="Assiette admissible HT confirmée"
                            help="Elle ne peut pas dépasser le devis HT."
                            value={input.eligibleExVat}
                            onChange={(value) =>
                              update("eligibleExVat", value)
                            }
                          />
                          <NumberField
                            id="site-aid-rate"
                            label="Taux théorique publié"
                            help="Ce taux ne vaut ni notification ni paiement."
                            suffix="%"
                            max={100}
                            value={input.theoreticalRatePercent}
                            onChange={(value) =>
                              update("theoreticalRatePercent", value)
                            }
                          />
                          <NumberField
                            id="site-aid-cap"
                            label="Plafond de contribution publié"
                            help="Plafond du dispositif applicable à cette dépense."
                            value={input.theoreticalCap}
                            onChange={(value) =>
                              update("theoreticalCap", value)
                            }
                          />
                        </>
                      ) : null}
                    </div>

                    <fieldset className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
                      <legend className="px-2 text-sm font-black">
                        Où en est la subvention ?
                      </legend>
                      <div className="grid gap-4 md:grid-cols-2">
                        <SelectField
                          id="site-aid-notification-stage"
                          label="État documenté"
                          help="Une demande ou un accusé de dépôt n’est pas une notification."
                          value={input.notificationStage}
                          options={[
                            {
                              value: "none",
                              label: "Aucune notification écrite",
                            },
                            { value: "written", label: "Notification écrite" },
                            {
                              value: "paid",
                              label: "Paiement effectivement documenté",
                            },
                          ]}
                          onChange={(value: SiteAidNotificationStage) =>
                            updateNotificationStage(value)
                          }
                        />
                        {input.notificationStage !== "none" ? (
                          <NumberField
                            id="site-aid-notified"
                            label="Contribution notifiée pour la facture"
                            help="Recopiez un montant strictement positif écrit dans la décision."
                            value={input.notifiedContribution}
                            onChange={(value) =>
                              update("notifiedContribution", value)
                            }
                          />
                        ) : null}
                        {input.notificationStage === "paid" ? (
                          <NumberField
                            id="site-aid-paid"
                            label="Paiement effectivement documenté"
                            help="Recopiez un versement strictement positif ; 0 € n’est pas un paiement."
                            value={input.paidContribution}
                            onChange={(value) =>
                              update("paidContribution", value)
                            }
                          />
                        ) : null}
                      </div>
                    </fieldset>

                    <div className="grid gap-5 md:grid-cols-2">
                      {input.notificationStage !== "paid" ? (
                        <>
                          <TriStateField
                            id="site-aid-viable-zero"
                            label="Le projet reste-t-il viable avec 0 € d’aide ?"
                            help="Budget, exploitation et temps interne inclus."
                            value={input.projectViableWithoutAid}
                            onChange={(value) =>
                              update("projectViableWithoutAid", value)
                            }
                          />
                          <TriStateField
                            id="site-aid-cash"
                            label="La trésorerie couvre-t-elle l’avance maximale ?"
                            help="Ne présumez pas qu’un remboursement arrivera avant la facture."
                            value={input.cashAvailableBeforePayment}
                            onChange={(value) =>
                              update("cashAvailableBeforePayment", value)
                            }
                          />
                          <NumberField
                            id="site-aid-delay-months"
                            label="Mois de retard si vous attendez"
                            help="Saisissez 0 si l’aide ne retarde réellement pas le projet."
                            suffix="mois"
                            max={120}
                            value={input.delayMonths}
                            onChange={(value) => update("delayMonths", value)}
                          />
                          <NumberField
                            id="site-aid-monthly-margin"
                            label="Marge mensuelle attribuable au site"
                            help="Saisissez 0 uniquement si vous avez réellement établi qu’il n’y en a pas."
                            value={input.monthlyMarginAtRisk}
                            onChange={(value) =>
                              update("monthlyMarginAtRisk", value)
                            }
                          />
                          <NumberField
                            id="site-aid-application-costs"
                            label="Coûts de dossier et de financement"
                            help="Temps interne valorisé, conseil et coût financier de l’attente."
                            value={input.applicationCosts}
                            onChange={(value) =>
                              update("applicationCosts", value)
                            }
                          />
                        </>
                      ) : (
                        <p className="m-0 self-end rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-relaxed text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-100">
                          Au stade payé, les hypothèses prévisionnelles
                          d’assiette, de taux, de plafond et d’attente sont
                          écartées. Rapprochez uniquement notification, facture
                          et preuve du versement.
                        </p>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="rounded-xl border border-blue-200 bg-blue-50 p-5 text-sm leading-relaxed text-blue-950 dark:border-blue-900 dark:bg-blue-950/30 dark:text-blue-100">
                    {input.supportType === "unknown" ? (
                      <>
                        <strong className="block">
                          La nature du soutien reste à qualifier.
                        </strong>
                        Revenez à l’étape 1 : aucun montant ni ancien champ ne
                        sera interprété avant ce choix.
                      </>
                    ) : (
                      <>
                        <strong className="block">
                          Cet instrument sort du calcul de subvention.
                        </strong>
                        Un prêt se juge sur dette, échéances, taux, garantie et
                        coût total ; un accompagnement sur la prestation
                        réellement prise en charge ; une formation, une aide à
                        la création ou un effet fiscal sur leurs propres règles.
                        Aucun de ces montants ne réduit automatiquement la
                        facture du site.
                      </>
                    )}
                  </div>
                )}

                <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-between">
                  <button
                    type="button"
                    onClick={() => goToStep(1)}
                    className="min-h-11 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-black text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                  >
                    Revenir aux vérifications
                  </button>
                  <button
                    type="button"
                    onClick={() => goToStep(3)}
                    className="min-h-11 rounded-lg bg-violet-700 px-4 py-2 text-sm font-black text-white hover:bg-violet-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2"
                  >
                    Voir la décision
                  </button>
                </div>
              </div>
            ) : null}

            {activeStep === 3 ? (
              <div
                role="region"
                aria-labelledby="site-aid-quick-step-3"
                className="space-y-6"
              >
                <div>
                  <h3
                    ref={stepThreeHeadingRef}
                    id="site-aid-quick-step-3"
                    tabIndex={-1}
                    className="mb-0 outline-none"
                  >
                    Décision de travail
                  </h3>
                  <p className="mb-0 mt-2 text-sm">
                    Le résultat organise vos questions. Il ne lit ni
                    n’authentifie vos pièces.
                  </p>
                </div>

                <div
                  className={`rounded-xl border p-5 ${resultTone}`}
                  role="status"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  <p className="m-0 text-lg font-black">{result.title}</p>
                  <p className="mb-0 mt-2 text-sm leading-relaxed">
                    {result.summary}
                  </p>
                </div>

                {input.supportType === "grant" ? (
                  <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    <Metric
                      label="Facture TTC"
                      value={
                        result.invoiceIncludingVat === undefined
                          ? "À confirmer"
                          : formatSiteAidQuickCheckMoney(
                              result.invoiceIncludingVat,
                            )
                      }
                      note="Besoin maximal prudent avant aide ; vérifiez le calendrier réel."
                    />
                    <Metric
                      label="Aide théorique"
                      value={
                        input.notificationStage === "paid"
                          ? "Sans objet — stade payé"
                          : result.theoreticalAid === undefined
                            ? "À confirmer"
                            : formatSiteAidQuickCheckMoney(
                                result.theoreticalAid,
                              )
                      }
                      note="Simple comparaison avant décision, jamais une preuve d’octroi."
                    />
                    <Metric
                      label="Aide au budget"
                      value={
                        result.budgetedAid === undefined
                          ? "À confirmer"
                          : formatSiteAidQuickCheckMoney(result.budgetedAid)
                      }
                      note={
                        input.notificationStage === "none"
                          ? "0 € tant qu’aucune contribution n’est notifiée."
                          : "Montant strictement positif recopié de la notification."
                      }
                    />
                    <Metric
                      label="Coût de l’attente"
                      value={
                        input.notificationStage === "paid"
                          ? "Sans objet — stade payé"
                          : result.delayCost === undefined
                            ? "À confirmer"
                            : formatSiteAidQuickCheckMoney(result.delayCost)
                      }
                      note="Marge attribuable + coûts de dossier et de financement."
                    />
                    <Metric
                      label="Coût économique sans aide"
                      value={
                        result.economicCostWithoutAid === undefined
                          ? "À confirmer"
                          : result.economicCostWithoutAid.min ===
                              result.economicCostWithoutAid.max
                            ? formatSiteAidQuickCheckMoney(
                                result.economicCostWithoutAid.min,
                              )
                            : `${formatSiteAidQuickCheckMoney(
                                result.economicCostWithoutAid.min,
                              )} à ${formatSiteAidQuickCheckMoney(
                                result.economicCostWithoutAid.max,
                              )}`
                      }
                      note={economicCostNote}
                    />
                    <Metric
                      label="Paiement documenté"
                      value={
                        result.paidAid === undefined
                          ? "À confirmer"
                          : formatSiteAidQuickCheckMoney(result.paidAid)
                      }
                      note="Distinct de la notification et de l’aide théorique."
                    />
                  </dl>
                ) : (
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Metric
                      label="Subvention au budget"
                      value="0 €"
                      note={
                        input.supportType === "unknown"
                          ? "Aucun calcul tant que l’instrument n’est pas qualifié."
                          : "Cet instrument doit être analysé dans son propre cadre."
                      }
                    />
                    <Metric
                      label="Calculs de subvention"
                      value="Sans objet"
                      note="Aucun ancien champ chiffré n’est lu, affiché ou exporté comme actif."
                    />
                  </div>
                )}

                {result.blockingQuestions.length > 0 ||
                result.warnings.length > 0 ? (
                  <div
                    className="rounded-xl border border-zinc-300 bg-white p-5 dark:border-zinc-700 dark:bg-zinc-900"
                    role={
                      result.blockingQuestions.length > 0 ? "alert" : "status"
                    }
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    <p className="m-0 font-black">
                      À résoudre ou à demander par écrit
                    </p>
                    <ul className="mb-0 mt-3 space-y-2 pl-5 text-sm">
                      {[...result.blockingQuestions, ...result.warnings].map(
                        (item) => (
                          <li key={item}>{item}</li>
                        ),
                      )}
                    </ul>
                  </div>
                ) : null}

                <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
                  <button
                    type="button"
                    onClick={() => goToStep(2)}
                    className="min-h-11 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-black text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                  >
                    {input.supportType === "grant"
                      ? "Modifier les montants"
                      : "Modifier l’orientation"}
                  </button>
                  <button
                    type="button"
                    onClick={downloadReport}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-violet-700 px-4 py-2 text-sm font-black text-white hover:bg-violet-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2"
                  >
                    <Download className="size-4" aria-hidden="true" />
                    Télécharger le dossier de travail
                  </button>
                </div>
                <p
                  className="mb-0 text-xs text-zinc-600 dark:text-zinc-400"
                  role="status"
                  aria-live="polite"
                >
                  {downloaded
                    ? "Dossier TXT téléchargé. Les hypothèses, formules et questions à confirmer sont incluses."
                    : "Le téléchargement reste disponible même si le dossier est incomplet ; il est alors explicitement présenté comme un document de travail."}
                </p>
              </div>
            ) : null}
          </>
        )}

        <div className="flex flex-col gap-3 border-t border-zinc-200 pt-5 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0 max-w-3xl">
            Cas experts — de minimis, SIEG, agriculture ou pêche,
            restructuration, outre-mer, autre compensation ou registre central —
            : arrêtez le tri et demandez une confirmation écrite à l’autorité ou
            à un conseil compétent.
          </p>
          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-3 py-2 font-black text-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
          >
            <RotateCcw className="size-4" aria-hidden="true" />
            Recommencer
          </button>
        </div>
      </div>
    </section>
  );
}
