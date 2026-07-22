"use client";

import { useRef, useState } from "react";
import {
  CLAIM_LEVELS,
  CLAIM_ORIGINS,
  CLAIM_STATUSES,
  PRE_LAUNCH_TESTS,
  TEST_STATUSES,
  createEmptyLandingClaim,
  createEmptyLandingPageWorksheet,
  createThermoBureauExample,
  decideLandingPage,
  formatLandingPageContinuitySummary,
  validateLandingPageWorksheet,
  type LandingPageClaim,
  type LandingPageContext,
  type LandingPageContinuityWorksheet,
  type LandingPageInventory,
  type LandingPageTest,
  type PreLaunchTestId,
} from "@/lib/landing-page-continuity";

const inputClass =
  "min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:focus:ring-sky-950";
const labelClass =
  "mb-1.5 block text-sm font-semibold text-zinc-900 dark:text-zinc-100";
const primaryButtonClass =
  "min-h-11 rounded-lg bg-sky-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 dark:bg-sky-600 dark:hover:bg-sky-500";
const secondaryButtonClass =
  "min-h-11 rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900";

const decisionRules = [
  {
    id: "keep",
    title: "Garder",
    text: "Toutes les lignes sont prêtes, l’inventaire est renseigné et les tests sont réussis.",
  },
  {
    id: "correct",
    title: "Corriger",
    text: "Une réponse est réparable sur cette page, ou une information reste inconnue.",
  },
  {
    id: "create",
    title: "Créer",
    text: "La page générale mélange plusieurs offres ou actions, mais les contenus vrais existent.",
  },
  {
    id: "postpone",
    title: "Reporter",
    text: "Une affirmation est bloquante ou un test avant lancement a échoué.",
  },
] as const;

const decisionStyles = {
  keep: "border-emerald-300 bg-emerald-50 text-emerald-950 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-100",
  correct:
    "border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100",
  create:
    "border-violet-300 bg-violet-50 text-violet-950 dark:border-violet-800 dark:bg-violet-950/30 dark:text-violet-100",
  postpone:
    "border-red-300 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950/30 dark:text-red-100",
} as const;

export function LandingPageContinuityWorksheet() {
  const [worksheet, setWorksheet] = useState<LandingPageContinuityWorksheet>(
    () => createEmptyLandingPageWorksheet(),
  );
  const [feedback, setFeedback] = useState("");
  const [manualCopyVisible, setManualCopyVisible] = useState(false);
  const [showFieldErrors, setShowFieldErrors] = useState(false);
  const nextClaimNumber = useRef(2);

  const validation = validateLandingPageWorksheet(worksheet);
  const decision = decideLandingPage(worksheet);
  const manualSummary = formatLandingPageContinuitySummary(worksheet, decision);

  function markEdited() {
    setFeedback("");
  }

  function updateContext<K extends keyof LandingPageContext>(
    field: K,
    value: LandingPageContext[K],
  ) {
    setWorksheet((current) => ({
      ...current,
      context: { ...current.context, [field]: value },
    }));
    markEdited();
  }

  function updateInventory<K extends keyof LandingPageInventory>(
    field: K,
    value: LandingPageInventory[K],
  ) {
    setWorksheet((current) => ({
      ...current,
      inventory: { ...current.inventory, [field]: value },
    }));
    markEdited();
  }

  function updateAiMaxStatus(status: LandingPageInventory["aiMaxStatus"]) {
    setWorksheet((current) => ({
      ...current,
      inventory: {
        ...current.inventory,
        aiMaxStatus: status,
        finalUrlExpansionStatus:
          status === "on" ? current.inventory.finalUrlExpansionStatus : status,
        finalUrlExpansionReviewed:
          status === "on" ? current.inventory.finalUrlExpansionReviewed : false,
      },
    }));
    markEdited();
  }

  function updateClaim<K extends keyof LandingPageClaim>(
    claimId: string,
    field: K,
    value: LandingPageClaim[K],
  ) {
    setWorksheet((current) => ({
      ...current,
      claims: current.claims.map((claim) =>
        claim.id === claimId ? { ...claim, [field]: value } : claim,
      ),
    }));
    markEdited();
  }

  function updateTest<K extends keyof LandingPageTest>(
    testId: PreLaunchTestId,
    field: K,
    value: LandingPageTest[K],
  ) {
    setWorksheet((current) => ({
      ...current,
      tests: {
        ...current.tests,
        [testId]: { ...current.tests[testId], [field]: value },
      },
    }));
    markEdited();
  }

  function addClaim() {
    const claim = createEmptyLandingClaim(`claim-${nextClaimNumber.current}`);
    nextClaimNumber.current += 1;
    setWorksheet((current) => ({
      ...current,
      claims: [...current.claims, claim],
    }));
    setFeedback("Une ligne vide a été ajoutée.");
  }

  function removeClaim(claimId: string) {
    setWorksheet((current) => ({
      ...current,
      claims: current.claims.filter((claim) => claim.id !== claimId),
    }));
    setFeedback("La ligne a été supprimée.");
  }

  function loadExample() {
    setWorksheet(createThermoBureauExample());
    nextClaimNumber.current = 11;
    setManualCopyVisible(false);
    setFeedback(
      "Exemple fictif chargé. Il illustre la méthode et ne présente aucun client ni résultat Hagnéré Code.",
    );
  }

  function resetTool() {
    setWorksheet(createEmptyLandingPageWorksheet());
    nextClaimNumber.current = 2;
    setManualCopyVisible(false);
    setShowFieldErrors(false);
    setFeedback("Tous les champs ont été remis à zéro.");
  }

  function requestValidation() {
    setShowFieldErrors(true);
    setFeedback(
      validation.issues.length === 0
        ? "Tous les champs nécessaires sont renseignés. Relisez maintenant la décision."
        : `${validation.issues.length} point${validation.issues.length > 1 ? "s" : ""} à vérifier ${validation.issues.length > 1 ? "sont signalés" : "est signalé"} sous les champs concernés.`,
    );
  }

  async function copySummary() {
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard API unavailable");
      }
      await navigator.clipboard.writeText(manualSummary);
      setManualCopyVisible(false);
      setFeedback(
        "Synthèse copiée. Relisez les inconnues avant de la partager.",
      );
    } catch {
      setManualCopyVisible(true);
      setFeedback(
        "La copie automatique a été refusée. La synthèse complète est affichée ci-dessous pour une copie manuelle.",
      );
    }
  }

  function printWorksheet() {
    const printableCopy = document.createElement("section");
    printableCopy.classList.add("landing-page-continuity-print-copy");
    printableCopy.setAttribute("aria-label", "Fiche complète à imprimer");

    const title = document.createElement("h1");
    title.textContent = "Fiche annonce → page Google Ads";

    const explanation = document.createElement("p");
    explanation.textContent =
      "Rendu complet destiné à l’impression. Il reprend tous les champs, toutes les affirmations, tous les tests, les inconnues et la décision actuelle.";

    const summary = document.createElement("pre");
    summary.textContent = manualSummary;
    printableCopy.append(title, explanation, summary);

    document.body.classList.add("printing-landing-page-continuity");
    document.body.append(printableCopy);

    try {
      window.print();
      setFeedback(
        "La fiche complète a été préparée pour l’impression, sans le reste de l’article.",
      );
    } finally {
      printableCopy.remove();
      document.body.classList.remove("printing-landing-page-continuity");
    }
  }

  const getIssue = (
    area: "context" | "inventory" | "claim" | "test",
    field: string,
    id?: string,
  ) =>
    validation.issues.find(
      (issue) =>
        issue.area === area &&
        issue.field === field &&
        (area === "claim"
          ? issue.claimId === id
          : area === "test"
            ? issue.testId === id
            : true),
    );

  const hasIssue = (
    area: "context" | "inventory" | "claim" | "test",
    field: string,
    id?: string,
  ) =>
    showFieldErrors && Boolean(getIssue(area, field, id)) ? true : undefined;

  const issueId = (
    area: "context" | "inventory" | "claim" | "test",
    field: string,
    id?: string,
  ) =>
    `landing-page-${area}-${id?.replace(/[^a-z0-9-]/gi, "-") ?? "main"}-${field}-error`;

  const describedBy = (
    area: "context" | "inventory" | "claim" | "test",
    field: string,
    id?: string,
    helpId?: string,
  ) => {
    const ids = [
      helpId,
      hasIssue(area, field, id) ? issueId(area, field, id) : undefined,
    ].filter(Boolean);
    return ids.length > 0 ? ids.join(" ") : undefined;
  };

  const renderIssue = (
    area: "context" | "inventory" | "claim" | "test",
    field: string,
    id?: string,
  ) => {
    if (!showFieldErrors) return null;
    const issue = getIssue(area, field, id);
    if (!issue) return null;
    return (
      <span
        id={issueId(area, field, id)}
        className="mt-1 block text-xs leading-relaxed text-red-700 dark:text-red-300"
      >
        {issue.message}
      </span>
    );
  };

  return (
    <section
      id="landing-page-continuity-worksheet"
      className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
      aria-labelledby="landing-page-continuity-title"
    >
      <div className="border-b border-zinc-800 bg-zinc-950 px-4 py-5 text-white sm:px-6">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-sky-300">
          Fiche locale · aucune donnée envoyée ou enregistrée
        </p>
        <h3
          id="landing-page-continuity-title"
          className="m-0 text-xl font-bold sm:text-2xl"
        >
          Vérifiez ce que l’annonce promet et ce que la page répond
        </h3>
        <p className="mb-0 mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">
          Vos saisies restent seulement dans la mémoire de cette page et
          disparaissent au rechargement. N’inscrivez ni nom, ni e-mail, ni
          téléphone de prospect. L’outil ne donne aucun score et ne promet
          aucune conversion.
        </p>
        {worksheet.fictitiousExample && (
          <p className="mb-0 mt-3 inline-flex rounded-full border border-amber-500/50 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-200">
            Exemple illustratif fictif — ThermoBureau 73 n’est ni un client, ni
            une réalisation, ni un résultat Hagnéré Code.
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3 border-b border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="m-0 max-w-2xl text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
          Commencez par une recherche et une page. Ouvrez ensuite seulement les
          contrôles dont vous avez besoin.
        </p>
        <button
          type="button"
          onClick={loadExample}
          className={secondaryButtonClass}
        >
          Charger l’exemple fictif ThermoBureau 73
        </button>
      </div>

      <form
        onSubmit={(event) => event.preventDefault()}
        className="space-y-4 p-4 sm:p-6"
      >
        <details
          open
          className="group rounded-xl border border-zinc-200 dark:border-zinc-800"
        >
          <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 font-bold text-zinc-950 marker:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:text-white sm:px-5">
            <span>1 · La recherche, la page et le test</span>
            <span aria-hidden="true" className="text-sky-700 dark:text-sky-300">
              +
            </span>
          </summary>
          <div className="border-t border-zinc-200 p-4 dark:border-zinc-800 sm:p-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className={labelClass}>Recherche représentative</span>
                <input
                  type="text"
                  value={worksheet.context.search}
                  onChange={(event) =>
                    updateContext("search", event.target.value)
                  }
                  aria-invalid={hasIssue("context", "search")}
                  aria-describedby={describedBy("context", "search")}
                  placeholder="Ex. : entretien climatisation bureaux Chambéry"
                  autoComplete="off"
                  className={inputClass}
                />
                {renderIssue("context", "search")}
              </label>
              <label className="block">
                <span className={labelClass}>URL ou référence de la page</span>
                <input
                  type="text"
                  value={worksheet.context.pageReference}
                  onChange={(event) =>
                    updateContext("pageReference", event.target.value)
                  }
                  aria-invalid={hasIssue("context", "pageReference")}
                  aria-describedby={describedBy("context", "pageReference")}
                  placeholder="Ex. : /entretien-climatisation-bureaux"
                  autoComplete="off"
                  className={inputClass}
                />
                {renderIssue("context", "pageReference")}
              </label>
              <label className="block">
                <span className={labelClass}>Action principale proposée</span>
                <input
                  type="text"
                  value={worksheet.context.primaryAction}
                  onChange={(event) =>
                    updateContext("primaryAction", event.target.value)
                  }
                  aria-invalid={hasIssue("context", "primaryAction")}
                  aria-describedby={describedBy("context", "primaryAction")}
                  placeholder="Ex. : demander une visite"
                  autoComplete="off"
                  className={inputClass}
                />
                {renderIssue("context", "primaryAction")}
              </label>
              <label className="block">
                <span className={labelClass}>
                  Qui reçoit réellement la demande ?
                </span>
                <input
                  type="text"
                  value={worksheet.context.recipient}
                  onChange={(event) =>
                    updateContext("recipient", event.target.value)
                  }
                  aria-invalid={hasIssue("context", "recipient")}
                  aria-describedby={describedBy("context", "recipient")}
                  placeholder="Une fonction ou une équipe, jamais un prospect"
                  autoComplete="off"
                  className={inputClass}
                />
                {renderIssue("context", "recipient")}
              </label>
              <label className="block sm:col-span-2">
                <span className={labelClass}>
                  Confirmation réellement attendue
                </span>
                <input
                  type="text"
                  value={worksheet.context.expectedConfirmation}
                  onChange={(event) =>
                    updateContext("expectedConfirmation", event.target.value)
                  }
                  aria-invalid={hasIssue("context", "expectedConfirmation")}
                  aria-describedby={describedBy(
                    "context",
                    "expectedConfirmation",
                  )}
                  placeholder="Ex. : demande transmise ; le rendez-vous n’est pas encore confirmé"
                  autoComplete="off"
                  className={inputClass}
                />
                {renderIssue("context", "expectedConfirmation")}
              </label>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              <label className="block">
                <span className={labelClass}>Appareil</span>
                <input
                  type="text"
                  value={worksheet.context.device}
                  onChange={(event) =>
                    updateContext("device", event.target.value)
                  }
                  aria-invalid={hasIssue("context", "device")}
                  aria-describedby={describedBy("context", "device")}
                  placeholder="Ex. : iPhone 15"
                  autoComplete="off"
                  className={inputClass}
                />
                {renderIssue("context", "device")}
              </label>
              <label className="block">
                <span className={labelClass}>Navigateur</span>
                <input
                  type="text"
                  value={worksheet.context.browser}
                  onChange={(event) =>
                    updateContext("browser", event.target.value)
                  }
                  aria-invalid={hasIssue("context", "browser")}
                  aria-describedby={describedBy("context", "browser")}
                  placeholder="Ex. : Safari"
                  autoComplete="off"
                  className={inputClass}
                />
                {renderIssue("context", "browser")}
              </label>
              <label className="block">
                <span className={labelClass}>
                  Largeur affichée de la page, en pixels
                </span>
                <input
                  type="number"
                  min={240}
                  max={5000}
                  step={1}
                  inputMode="numeric"
                  value={worksheet.context.viewportWidth}
                  onChange={(event) =>
                    updateContext("viewportWidth", event.target.value)
                  }
                  aria-invalid={hasIssue("context", "viewportWidth")}
                  aria-describedby={describedBy(
                    "context",
                    "viewportWidth",
                    undefined,
                    "landing-page-width-help",
                  )}
                  placeholder="390"
                  className={inputClass}
                />
                <span
                  id="landing-page-width-help"
                  className="mt-1 block text-xs leading-relaxed text-zinc-500 dark:text-zinc-400"
                >
                  Dans le mode téléphone des outils du navigateur, relevez le
                  nombre affiché près du modèle choisi, par exemple 390.
                </span>
                {renderIssue("context", "viewportWidth")}
              </label>
              <label className="block">
                <span className={labelClass}>Réseau</span>
                <input
                  type="text"
                  value={worksheet.context.network}
                  onChange={(event) =>
                    updateContext("network", event.target.value)
                  }
                  aria-invalid={hasIssue("context", "network")}
                  aria-describedby={describedBy("context", "network")}
                  placeholder="Ex. : 4G"
                  autoComplete="off"
                  className={inputClass}
                />
                {renderIssue("context", "network")}
              </label>
              <label className="block">
                <span className={labelClass}>Date du test</span>
                <input
                  type="date"
                  value={worksheet.context.testDate}
                  onChange={(event) =>
                    updateContext("testDate", event.target.value)
                  }
                  aria-invalid={hasIssue("context", "testDate")}
                  aria-describedby={describedBy("context", "testDate")}
                  className={inputClass}
                />
                {renderIssue("context", "testDate")}
              </label>
            </div>

            <label className="mt-5 block">
              <span className={labelClass}>
                La page générale mélange-t-elle encore plusieurs offres ou
                actions ?
              </span>
              <select
                value={worksheet.context.dedicatedPageNeed}
                onChange={(event) =>
                  updateContext(
                    "dedicatedPageNeed",
                    event.target
                      .value as LandingPageContext["dedicatedPageNeed"],
                  )
                }
                aria-invalid={hasIssue("context", "dedicatedPageNeed")}
                aria-describedby={describedBy("context", "dedicatedPageNeed")}
                className={inputClass}
              >
                <option value="unknown">Je ne l’ai pas encore vérifié</option>
                <option value="no">
                  Non, une seule offre et une seule action restent claires
                </option>
                <option value="yes">
                  Oui, les contenus vrais existent, mais une page dédiée est
                  nécessaire pour les distinguer
                </option>
              </select>
              {renderIssue("context", "dedicatedPageNeed")}
            </label>
          </div>
        </details>

        <details className="group rounded-xl border border-zinc-200 dark:border-zinc-800">
          <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 font-bold text-zinc-950 marker:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:text-white sm:px-5">
            <span>2 · L’inventaire Google Ads avancé</span>
            <span aria-hidden="true" className="text-sky-700 dark:text-sky-300">
              +
            </span>
          </summary>
          <div className="border-t border-zinc-200 p-4 dark:border-zinc-800 sm:p-5">
            <p className="mb-4 mt-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              Ne vous fiez pas à un seul aperçu. Si une agence ou un salarié
              gère le compte, demandez-lui ces vérifications et gardez leur date
              dans la fiche.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <label className="block">
                <span className={labelClass}>Annonce ou groupe examiné</span>
                <input
                  type="text"
                  value={worksheet.inventory.adReference}
                  onChange={(event) =>
                    updateInventory("adReference", event.target.value)
                  }
                  aria-invalid={hasIssue("inventory", "adReference")}
                  aria-describedby={describedBy("inventory", "adReference")}
                  placeholder="Référence interne sans donnée client"
                  autoComplete="off"
                  className={inputClass}
                />
                {renderIssue("inventory", "adReference")}
              </label>
              <label className="block">
                <span className={labelClass}>Campagne examinée</span>
                <input
                  type="text"
                  value={worksheet.inventory.campaignReference}
                  onChange={(event) =>
                    updateInventory("campaignReference", event.target.value)
                  }
                  aria-invalid={hasIssue("inventory", "campaignReference")}
                  aria-describedby={describedBy(
                    "inventory",
                    "campaignReference",
                  )}
                  placeholder="Référence de campagne"
                  autoComplete="off"
                  className={inputClass}
                />
                {renderIssue("inventory", "campaignReference")}
              </label>
              <label className="block">
                <span className={labelClass}>Compte examiné</span>
                <input
                  type="text"
                  value={worksheet.inventory.accountReference}
                  onChange={(event) =>
                    updateInventory("accountReference", event.target.value)
                  }
                  aria-invalid={hasIssue("inventory", "accountReference")}
                  aria-describedby={describedBy(
                    "inventory",
                    "accountReference",
                  )}
                  placeholder="Référence non personnelle"
                  autoComplete="off"
                  className={inputClass}
                />
                {renderIssue("inventory", "accountReference")}
              </label>
            </div>

            <fieldset className="mt-5 border-0 p-0">
              <legend className="text-sm font-bold text-zinc-950 dark:text-white">
                Contrôles effectués dans les rapports et associations
              </legend>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {[
                  [
                    "activeAdsReviewed",
                    "Titres, descriptions et autres composants de chaque annonce active",
                  ],
                  [
                    "campaignComponentsReviewed",
                    "Composants au niveau de la campagne",
                  ],
                  [
                    "accountComponentsReviewed",
                    "Composants manuels au niveau du compte",
                  ],
                  [
                    "automaticComponentsReviewed",
                    "Composants automatiques au niveau du compte",
                  ],
                  [
                    "enhancedFlexibilityReviewed",
                    "Flexibilité améliorée et autres annonces actives du groupe",
                  ],
                ].map(([field, label]) => (
                  <div key={field}>
                    <label className="flex min-h-11 cursor-pointer items-start gap-3 rounded-lg border border-zinc-200 p-3 text-sm text-zinc-800 dark:border-zinc-800 dark:text-zinc-200">
                      <input
                        type="checkbox"
                        checked={
                          worksheet.inventory[
                            field as keyof LandingPageInventory
                          ] as boolean
                        }
                        onChange={(event) =>
                          updateInventory(
                            field as
                              | "activeAdsReviewed"
                              | "campaignComponentsReviewed"
                              | "accountComponentsReviewed"
                              | "automaticComponentsReviewed"
                              | "enhancedFlexibilityReviewed",
                            event.target.checked,
                          )
                        }
                        aria-invalid={hasIssue("inventory", field)}
                        aria-describedby={describedBy("inventory", field)}
                        className="mt-0.5 h-4 w-4 shrink-0 accent-sky-700"
                      />
                      <span>{label}</span>
                    </label>
                    {renderIssue("inventory", field)}
                  </div>
                ))}
              </div>
            </fieldset>

            <div className="mt-5 rounded-xl border border-violet-200 bg-violet-50 p-4 dark:border-violet-900 dark:bg-violet-950/20">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className={labelClass}>AI Max pour Search</span>
                  <select
                    value={worksheet.inventory.aiMaxStatus}
                    onChange={(event) =>
                      updateAiMaxStatus(
                        event.target
                          .value as LandingPageInventory["aiMaxStatus"],
                      )
                    }
                    aria-invalid={hasIssue("inventory", "aiMaxStatus")}
                    aria-describedby={describedBy("inventory", "aiMaxStatus")}
                    className={inputClass}
                  >
                    <option value="unknown">État inconnu</option>
                    <option value="off">Désactivé</option>
                    <option value="on">Activé</option>
                  </select>
                  {renderIssue("inventory", "aiMaxStatus")}
                </label>
                <label className="block">
                  <span className={labelClass}>Extension d’URL finale</span>
                  <select
                    value={worksheet.inventory.finalUrlExpansionStatus}
                    onChange={(event) =>
                      updateInventory(
                        "finalUrlExpansionStatus",
                        event.target
                          .value as LandingPageInventory["finalUrlExpansionStatus"],
                      )
                    }
                    disabled={worksheet.inventory.aiMaxStatus !== "on"}
                    aria-invalid={hasIssue(
                      "inventory",
                      "finalUrlExpansionStatus",
                    )}
                    aria-describedby={describedBy(
                      "inventory",
                      "finalUrlExpansionStatus",
                    )}
                    className={`${inputClass} disabled:cursor-not-allowed disabled:opacity-60`}
                  >
                    <option value="unknown">État inconnu</option>
                    <option value="off">Désactivée</option>
                    <option value="on">Activée</option>
                  </select>
                  {renderIssue("inventory", "finalUrlExpansionStatus")}
                </label>
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                <label className="flex min-h-11 cursor-pointer items-start gap-3 rounded-lg border border-violet-200 bg-white/70 p-3 text-sm text-violet-950 dark:border-violet-900 dark:bg-zinc-950/40 dark:text-violet-100">
                  <span className="block w-full">
                    <span className={labelClass}>
                      Adaptation du texte active, héritée ou absente
                    </span>
                    <select
                      value={worksheet.inventory.textCustomizationStatus}
                      onChange={(event) =>
                        updateInventory(
                          "textCustomizationStatus",
                          event.target
                            .value as LandingPageInventory["textCustomizationStatus"],
                        )
                      }
                      aria-invalid={hasIssue(
                        "inventory",
                        "textCustomizationStatus",
                      )}
                      aria-describedby={describedBy(
                        "inventory",
                        "textCustomizationStatus",
                      )}
                      className={inputClass}
                    >
                      <option value="unknown">Je ne sais pas encore</option>
                      <option value="active">Active</option>
                      <option value="legacy">Héritée d’avant AI Max</option>
                      <option value="absent">Absente après vérification</option>
                    </select>
                    {renderIssue("inventory", "textCustomizationStatus")}
                  </span>
                </label>
                {worksheet.inventory.aiMaxStatus === "on" && (
                  <div>
                    <label className="flex min-h-11 cursor-pointer items-start gap-3 rounded-lg border border-violet-200 bg-white/70 p-3 text-sm text-violet-950 dark:border-violet-900 dark:bg-zinc-950/40 dark:text-violet-100">
                      <input
                        type="checkbox"
                        checked={worksheet.inventory.finalUrlExpansionReviewed}
                        onChange={(event) =>
                          updateInventory(
                            "finalUrlExpansionReviewed",
                            event.target.checked,
                          )
                        }
                        aria-invalid={hasIssue(
                          "inventory",
                          "finalUrlExpansionReviewed",
                        )}
                        aria-describedby={describedBy(
                          "inventory",
                          "finalUrlExpansionReviewed",
                        )}
                        className="mt-0.5 h-4 w-4 shrink-0 accent-violet-700"
                      />
                      URL incluses, exclues et réellement observées vérifiées
                    </label>
                    {renderIssue("inventory", "finalUrlExpansionReviewed")}
                  </div>
                )}
              </div>

              <label className="mt-4 block">
                <span className={labelClass}>
                  Notes sur les textes, composants ou URL possibles
                </span>
                <textarea
                  rows={3}
                  value={worksheet.inventory.advancedNotes}
                  onChange={(event) =>
                    updateInventory("advancedNotes", event.target.value)
                  }
                  placeholder="Ex. : autre annonce active, texte généré observé, URL incluse ou exclue…"
                  className={inputClass}
                />
              </label>
            </div>
          </div>
        </details>

        <details
          open
          className="group rounded-xl border border-zinc-200 dark:border-zinc-800"
        >
          <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 font-bold text-zinc-950 marker:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:text-white sm:px-5">
            <span>
              3 · Les affirmations à retrouver ({worksheet.claims.length})
            </span>
            <span aria-hidden="true" className="text-sky-700 dark:text-sky-300">
              +
            </span>
          </summary>
          <div className="border-t border-zinc-200 p-4 dark:border-zinc-800 sm:p-5">
            <p className="mb-4 mt-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              Créez une ligne par affirmation importante, même si elle se
              répète. Un champ vide reste inconnu et empêche la décision «
              garder ».
            </p>

            <div className="space-y-3">
              {worksheet.claims.map((claim, index) => (
                <details
                  key={claim.id}
                  open={index === 0 ? true : undefined}
                  className="rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40"
                >
                  <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 px-3 py-3 marker:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 sm:px-4">
                    <span className="min-w-0">
                      <span className="block text-xs font-bold uppercase tracking-wide text-sky-700 dark:text-sky-300">
                        Ligne {index + 1} ·{" "}
                        {
                          CLAIM_STATUSES.find(
                            (item) => item.id === claim.status,
                          )?.label
                        }
                      </span>
                      <span className="mt-0.5 block truncate text-sm font-semibold text-zinc-950 dark:text-white">
                        {claim.text || "Affirmation à renseigner"}
                      </span>
                    </span>
                    <span aria-hidden="true" className="text-zinc-500">
                      +
                    </span>
                  </summary>

                  <div className="border-t border-zinc-200 p-3 dark:border-zinc-800 sm:p-4">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      <label className="block">
                        <span className={labelClass}>Origine</span>
                        <select
                          value={claim.origin}
                          onChange={(event) =>
                            updateClaim(
                              claim.id,
                              "origin",
                              event.target.value as LandingPageClaim["origin"],
                            )
                          }
                          className={inputClass}
                        >
                          {CLAIM_ORIGINS.map((origin) => (
                            <option key={origin.id} value={origin.id}>
                              {origin.label}
                            </option>
                          ))}
                        </select>
                      </label>
                      <label className="block">
                        <span className={labelClass}>Niveau</span>
                        <select
                          value={claim.level}
                          onChange={(event) =>
                            updateClaim(
                              claim.id,
                              "level",
                              event.target.value as LandingPageClaim["level"],
                            )
                          }
                          className={inputClass}
                        >
                          {CLAIM_LEVELS.map((level) => (
                            <option key={level.id} value={level.id}>
                              {level.label}
                            </option>
                          ))}
                        </select>
                      </label>
                      <label className="block sm:col-span-2">
                        <span className={labelClass}>Texte exact</span>
                        <input
                          type="text"
                          value={claim.text}
                          onChange={(event) =>
                            updateClaim(claim.id, "text", event.target.value)
                          }
                          aria-invalid={hasIssue("claim", "text", claim.id)}
                          aria-describedby={describedBy(
                            "claim",
                            "text",
                            claim.id,
                          )}
                          placeholder="Recopiez le titre, la description ou le composant"
                          autoComplete="off"
                          className={inputClass}
                        />
                        {renderIssue("claim", "text", claim.id)}
                      </label>
                    </div>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className={labelClass}>URL possible</span>
                        <input
                          type="text"
                          value={claim.possibleUrl}
                          onChange={(event) =>
                            updateClaim(
                              claim.id,
                              "possibleUrl",
                              event.target.value,
                            )
                          }
                          aria-invalid={hasIssue(
                            "claim",
                            "possibleUrl",
                            claim.id,
                          )}
                          aria-describedby={describedBy(
                            "claim",
                            "possibleUrl",
                            claim.id,
                          )}
                          placeholder="URL finale que ce composant peut ouvrir"
                          autoComplete="off"
                          className={inputClass}
                        />
                        {renderIssue("claim", "possibleUrl", claim.id)}
                      </label>
                      <label className="block">
                        <span className={labelClass}>
                          Réponse trouvée sur la page
                        </span>
                        <input
                          type="text"
                          value={claim.pageResponse}
                          onChange={(event) =>
                            updateClaim(
                              claim.id,
                              "pageResponse",
                              event.target.value,
                            )
                          }
                          aria-invalid={hasIssue(
                            "claim",
                            "pageResponse",
                            claim.id,
                          )}
                          aria-describedby={describedBy(
                            "claim",
                            "pageResponse",
                            claim.id,
                          )}
                          placeholder="Où et comment la page répond-elle ?"
                          autoComplete="off"
                          className={inputClass}
                        />
                        {renderIssue("claim", "pageResponse", claim.id)}
                      </label>
                      <label className="block">
                        <span className={labelClass}>
                          Élément vérifiable ou condition
                        </span>
                        <textarea
                          rows={3}
                          value={claim.evidenceOrCondition}
                          onChange={(event) =>
                            updateClaim(
                              claim.id,
                              "evidenceOrCondition",
                              event.target.value,
                            )
                          }
                          aria-invalid={hasIssue(
                            "claim",
                            "evidenceOrCondition",
                            claim.id,
                          )}
                          aria-describedby={describedBy(
                            "claim",
                            "evidenceOrCondition",
                            claim.id,
                          )}
                          placeholder="Document autorisé, méthode réelle, condition, limite…"
                          className={inputClass}
                        />
                        {renderIssue("claim", "evidenceOrCondition", claim.id)}
                      </label>
                      <label className="block">
                        <span className={labelClass}>
                          Correction à effectuer
                        </span>
                        <textarea
                          rows={3}
                          value={claim.correction}
                          onChange={(event) =>
                            updateClaim(
                              claim.id,
                              "correction",
                              event.target.value,
                            )
                          }
                          aria-invalid={hasIssue(
                            "claim",
                            "correction",
                            claim.id,
                          )}
                          aria-describedby={describedBy(
                            "claim",
                            "correction",
                            claim.id,
                          )}
                          placeholder="Obligatoire si l’état est à corriger ou bloquant"
                          className={inputClass}
                        />
                        {renderIssue("claim", "correction", claim.id)}
                      </label>
                    </div>

                    <div className="mt-4 grid gap-4 sm:grid-cols-3">
                      <label className="block">
                        <span className={labelClass}>Responsable</span>
                        <input
                          type="text"
                          value={claim.owner}
                          onChange={(event) =>
                            updateClaim(claim.id, "owner", event.target.value)
                          }
                          aria-invalid={hasIssue("claim", "owner", claim.id)}
                          aria-describedby={describedBy(
                            "claim",
                            "owner",
                            claim.id,
                          )}
                          placeholder="Une fonction, pas un prospect"
                          autoComplete="off"
                          className={inputClass}
                        />
                        {renderIssue("claim", "owner", claim.id)}
                      </label>
                      <label className="block">
                        <span className={labelClass}>
                          Dernière vérification
                        </span>
                        <input
                          type="date"
                          value={claim.checkedAt}
                          onChange={(event) =>
                            updateClaim(
                              claim.id,
                              "checkedAt",
                              event.target.value,
                            )
                          }
                          aria-invalid={hasIssue(
                            "claim",
                            "checkedAt",
                            claim.id,
                          )}
                          aria-describedby={describedBy(
                            "claim",
                            "checkedAt",
                            claim.id,
                          )}
                          className={inputClass}
                        />
                        {renderIssue("claim", "checkedAt", claim.id)}
                      </label>
                      <label className="block">
                        <span className={labelClass}>État</span>
                        <select
                          value={claim.status}
                          onChange={(event) =>
                            updateClaim(
                              claim.id,
                              "status",
                              event.target.value as LandingPageClaim["status"],
                            )
                          }
                          aria-invalid={hasIssue("claim", "status", claim.id)}
                          aria-describedby={describedBy(
                            "claim",
                            "status",
                            claim.id,
                          )}
                          className={inputClass}
                        >
                          {CLAIM_STATUSES.map((status) => (
                            <option key={status.id} value={status.id}>
                              {status.label}
                            </option>
                          ))}
                        </select>
                        {renderIssue("claim", "status", claim.id)}
                      </label>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeClaim(claim.id)}
                      className="mt-4 min-h-11 rounded-lg border border-red-300 bg-white px-3 py-2 text-sm font-semibold text-red-800 transition hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-400 dark:border-red-900 dark:bg-zinc-950 dark:text-red-200 dark:hover:bg-red-950/30"
                    >
                      Supprimer cette ligne
                    </button>
                  </div>
                </details>
              ))}
            </div>

            <button
              type="button"
              onClick={addClaim}
              aria-describedby={describedBy("claim", "claims")}
              className={`${secondaryButtonClass} mt-4`}
            >
              Ajouter une affirmation
            </button>
            {renderIssue("claim", "claims")}
          </div>
        </details>

        <details className="group rounded-xl border border-zinc-200 dark:border-zinc-800">
          <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 font-bold text-zinc-950 marker:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:text-white sm:px-5">
            <span>4 · Les tests avant lancement</span>
            <span aria-hidden="true" className="text-sky-700 dark:text-sky-300">
              +
            </span>
          </summary>
          <div className="border-t border-zinc-200 p-4 dark:border-zinc-800 sm:p-5">
            <p className="mb-4 mt-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              Testez la vraie page et la réception avec des données fictives
              clairement identifiées. Une note automatique de performance ou un
              voyant vert dans l’outil ne remplace pas ces essais.
            </p>
            <div className="grid gap-3 lg:grid-cols-2">
              {PRE_LAUNCH_TESTS.map((definition) => {
                const test = worksheet.tests[definition.id];
                return (
                  <fieldset
                    key={definition.id}
                    className="rounded-xl border border-zinc-200 p-3 dark:border-zinc-800"
                  >
                    <legend className="px-1 text-sm font-bold text-zinc-950 dark:text-white">
                      {definition.label}
                    </legend>
                    <p
                      id={`landing-page-test-${definition.id}-help`}
                      className="mb-3 mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400"
                    >
                      {definition.help}
                    </p>
                    <label className="block">
                      <span className="sr-only">
                        État du test : {definition.label}
                      </span>
                      <select
                        value={test.status}
                        onChange={(event) =>
                          updateTest(
                            definition.id,
                            "status",
                            event.target.value as LandingPageTest["status"],
                          )
                        }
                        aria-invalid={hasIssue("test", "status", definition.id)}
                        aria-describedby={describedBy(
                          "test",
                          "status",
                          definition.id,
                          `landing-page-test-${definition.id}-help`,
                        )}
                        className={inputClass}
                      >
                        {TEST_STATUSES.filter(
                          (status) =>
                            status.id !== "not-applicable" ||
                            definition.allowNotApplicable,
                        ).map((status) => (
                          <option key={status.id} value={status.id}>
                            {status.label}
                          </option>
                        ))}
                      </select>
                      {renderIssue("test", "status", definition.id)}
                    </label>
                    <label className="mt-3 block">
                      <span className="mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                        Note ou référence du test
                      </span>
                      <textarea
                        rows={2}
                        value={test.note}
                        onChange={(event) =>
                          updateTest(definition.id, "note", event.target.value)
                        }
                        aria-invalid={hasIssue("test", "note", definition.id)}
                        aria-describedby={describedBy(
                          "test",
                          "note",
                          definition.id,
                          `landing-page-test-${definition.id}-help`,
                        )}
                        placeholder="Ce qui a été observé, sans donnée de prospect"
                        className={inputClass}
                      />
                      {renderIssue("test", "note", definition.id)}
                    </label>
                  </fieldset>
                );
              })}
            </div>
          </div>
        </details>
      </form>

      <div className="border-t border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-6">
        <div className="mb-4 flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950 sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            Lorsque vous avez fini, lancez ce contrôle : les informations
            manquantes ou incohérentes apparaîtront directement sous les champs
            concernés.
          </p>
          <button
            type="button"
            onClick={requestValidation}
            className={secondaryButtonClass}
          >
            Vérifier la fiche
          </button>
        </div>

        <div
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className={`rounded-xl border p-4 ${decisionStyles[decision.id]}`}
        >
          <p className="mb-1 text-xs font-bold uppercase tracking-widest opacity-80">
            Décision actuelle
          </p>
          <p className="mb-1 text-lg font-bold">{decision.label}</p>
          <p className="mb-0 text-sm leading-relaxed">{decision.explanation}</p>
          {decision.blockingReasons.length > 0 && (
            <ul className="mb-0 mt-3 space-y-1 pl-5 text-sm">
              {decision.blockingReasons.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          )}
        </div>

        {decision.unknowns.length > 0 && (
          <details className="mt-3 rounded-xl border border-amber-200 bg-white dark:border-amber-900 dark:bg-zinc-950">
            <summary className="min-h-11 cursor-pointer px-4 py-3 text-sm font-semibold text-amber-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 dark:text-amber-200">
              {decision.unknowns.length} point
              {decision.unknowns.length > 1 ? "s" : ""} encore inconnu
              {decision.unknowns.length > 1 ? "s" : ""}
            </summary>
            <ul className="mb-4 mt-0 space-y-1 px-9 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {decision.unknowns.map((unknown) => (
                <li key={unknown}>{unknown}</li>
              ))}
            </ul>
          </details>
        )}

        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {decisionRules.map((rule) => (
            <div
              key={rule.id}
              aria-current={decision.id === rule.id ? "true" : undefined}
              className={`rounded-lg border p-3 ${
                decision.id === rule.id
                  ? decisionStyles[rule.id]
                  : "border-zinc-200 bg-white text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
              }`}
            >
              <p className="m-0 text-sm font-bold">{rule.title}</p>
              <p className="mb-0 mt-1 text-xs leading-relaxed opacity-90">
                {rule.text}
              </p>
            </div>
          ))}
        </div>

        <p className="mb-0 mt-4 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
          Cette décision porte uniquement sur les informations saisies. Elle ne
          certifie ni l’approbation Google Ads, ni la conformité juridique ou
          WCAG, ni un résultat commercial.
        </p>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button
            type="button"
            onClick={copySummary}
            className={primaryButtonClass}
          >
            Copier la synthèse complète
          </button>
          <button
            type="button"
            onClick={printWorksheet}
            className={secondaryButtonClass}
          >
            Imprimer la fiche
          </button>
          <button
            type="button"
            onClick={resetTool}
            className={secondaryButtonClass}
          >
            Tout remettre à zéro
          </button>
        </div>

        <p
          aria-live="polite"
          className="mb-0 mt-3 min-h-5 text-sm text-zinc-600 dark:text-zinc-300"
        >
          {feedback}
        </p>

        {manualCopyVisible && (
          <label className="mt-4 block">
            <span className={labelClass}>Synthèse à copier manuellement</span>
            <textarea
              readOnly
              rows={14}
              value={manualSummary}
              onFocus={(event) => event.currentTarget.select()}
              className={`${inputClass} font-mono text-xs leading-relaxed`}
            />
          </label>
        )}
      </div>

      <style>{`
        @page {
          size: A4;
          margin: 14mm;
        }

        @media print {
          body.printing-landing-page-continuity > * {
            display: none !important;
          }

          body.printing-landing-page-continuity > .landing-page-continuity-print-copy {
            display: block !important;
            width: auto !important;
            margin: 0 !important;
            padding: 0 !important;
            color: #111827 !important;
            background: #ffffff !important;
            font-family: Arial, Helvetica, sans-serif !important;
            font-size: 10pt !important;
            line-height: 1.45 !important;
          }

          .landing-page-continuity-print-copy h1 {
            margin: 0 0 6mm !important;
            font-size: 18pt !important;
            line-height: 1.2 !important;
          }

          .landing-page-continuity-print-copy p {
            margin: 0 0 6mm !important;
            color: #374151 !important;
          }

          .landing-page-continuity-print-copy pre {
            display: block !important;
            margin: 0 !important;
            overflow: visible !important;
            white-space: pre-wrap !important;
            overflow-wrap: anywhere !important;
            color: #111827 !important;
            background: transparent !important;
            font-family: Arial, Helvetica, sans-serif !important;
            font-size: 9pt !important;
            line-height: 1.45 !important;
          }
        }
      `}</style>
    </section>
  );
}
