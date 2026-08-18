"use client";

import { useId, useState } from "react";
import {
  buildDossierClairExampleMarkdown,
  buildSaasOfferComparisonMarkdown,
  buildSaasSpecificationMarkdown,
  calculateSaasOfferComparison,
  cloneSaasOfferInputs,
  EMPTY_SAAS_SPECIFICATION_PROFILE,
  parseSaasDecimalAmount,
  SAAS_OFFER_EXAMPLE_INPUTS,
  SAAS_OFFER_FIELDS,
  SAAS_OFFER_HORIZONS,
  SAAS_OFFER_KEYS,
  saasSpecificationFileName,
  type SaasOfferField,
  type SaasOfferHorizon,
  type SaasOfferInputs,
  type SaasOfferKey,
  type SaasSpecificationProfile,
} from "@/lib/saas-specification-kit";

const euro = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 2,
});

const textInputClass =
  "min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 focus:border-violet-600 focus:ring-2 focus:ring-violet-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:focus:ring-violet-950";
const primaryButtonClass =
  "min-h-11 rounded-lg bg-violet-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-violet-600 dark:hover:bg-violet-500";
const secondaryButtonClass =
  "min-h-11 rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 transition hover:border-zinc-400 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900";

type GeneratorStatus =
  | "idle"
  | "template-copied"
  | "copy-error"
  | "template-downloaded"
  | "example-downloaded";
type ComparisonStatus = "idle" | "copied" | "copy-error" | "downloaded";

function formatEuro(value: number) {
  return Number.isFinite(value) ? euro.format(value) : "—";
}

function formatInputAmount(value: number) {
  return Number.isFinite(value) ? String(Number(value.toFixed(2))) : "";
}

type SaasOfferAmountInputs = Record<
  SaasOfferKey,
  Record<SaasOfferField, string>
>;

function buildAmountInputs(inputs: SaasOfferInputs): SaasOfferAmountInputs {
  return Object.fromEntries(
    SAAS_OFFER_KEYS.map((offer) => [
      offer,
      Object.fromEntries(
        SAAS_OFFER_FIELDS.map((field) => [
          field.key,
          formatInputAmount(inputs[offer][field.key]),
        ]),
      ),
    ]),
  ) as SaasOfferAmountInputs;
}

function downloadMarkdown(contents: string, fileName: string) {
  const blob = new Blob([`\ufeff${contents}`], {
    type: "text/markdown;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1_000);
}

export function SaasSpecificationKit() {
  const instanceId = useId().replaceAll(":", "");
  const [profile, setProfile] = useState<SaasSpecificationProfile>(
    EMPTY_SAAS_SPECIFICATION_PROFILE,
  );
  const [generatorStatus, setGeneratorStatus] =
    useState<GeneratorStatus>("idle");
  const [offers, setOffers] = useState<SaasOfferInputs>(() =>
    cloneSaasOfferInputs(SAAS_OFFER_EXAMPLE_INPUTS),
  );
  const [amountInputs, setAmountInputs] = useState<SaasOfferAmountInputs>(() =>
    buildAmountInputs(SAAS_OFFER_EXAMPLE_INPUTS),
  );
  const [horizon, setHorizon] = useState<SaasOfferHorizon>(24);
  const [comparisonStatus, setComparisonStatus] =
    useState<ComparisonStatus>("idle");

  const calculation = calculateSaasOfferComparison(offers, horizon);
  const comparisonLimitsId = `${instanceId}-saas-offer-limits`;
  const comparisonStatusId = `${instanceId}-saas-offer-status`;

  function updateProfile(field: keyof SaasSpecificationProfile, value: string) {
    setProfile((current) => ({ ...current, [field]: value }));
    setGeneratorStatus("idle");
  }

  async function copyTemplate() {
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard API unavailable");
      }
      await navigator.clipboard.writeText(
        buildSaasSpecificationMarkdown(profile),
      );
      setGeneratorStatus("template-copied");
    } catch {
      setGeneratorStatus("copy-error");
    }
  }

  function downloadTemplate() {
    downloadMarkdown(
      buildSaasSpecificationMarkdown(profile),
      saasSpecificationFileName(profile.projectName),
    );
    setGeneratorStatus("template-downloaded");
  }

  function downloadExample() {
    downloadMarkdown(
      buildDossierClairExampleMarkdown(),
      "exemple-rempli-cahier-des-charges-saas-dossierclair.md",
    );
    setGeneratorStatus("example-downloaded");
  }

  function updateOffer(
    offer: SaasOfferKey,
    field: SaasOfferField,
    raw: string,
  ) {
    setAmountInputs((current) => ({
      ...current,
      [offer]: {
        ...current[offer],
        [field]: raw,
      },
    }));
    setOffers((current) => ({
      ...current,
      [offer]: {
        ...current[offer],
        [field]: parseSaasDecimalAmount(raw),
      },
    }));
    setComparisonStatus("idle");
  }

  function updateZeroJustification(offer: SaasOfferKey, value: string) {
    setOffers((current) => ({
      ...current,
      [offer]: {
        ...current[offer],
        zeroJustification: value,
      },
    }));
    setComparisonStatus("idle");
  }

  function updateUnknownCosts(offer: SaasOfferKey, checked: boolean) {
    setOffers((current) => ({
      ...current,
      [offer]: {
        ...current[offer],
        hasUnknownCosts: checked,
      },
    }));
    setComparisonStatus("idle");
  }

  function resetComparison() {
    setOffers(cloneSaasOfferInputs(SAAS_OFFER_EXAMPLE_INPUTS));
    setAmountInputs(buildAmountInputs(SAAS_OFFER_EXAMPLE_INPUTS));
    setHorizon(24);
    setComparisonStatus("idle");
  }

  async function copyComparison() {
    if (!calculation.isValid) {
      return;
    }

    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard API unavailable");
      }
      await navigator.clipboard.writeText(
        buildSaasOfferComparisonMarkdown(offers, calculation),
      );
      setComparisonStatus("copied");
    } catch {
      setComparisonStatus("copy-error");
    }
  }

  function downloadComparison() {
    if (!calculation.isValid) {
      return;
    }

    downloadMarkdown(
      buildSaasOfferComparisonMarkdown(offers, calculation),
      `comparaison-offres-saas-${horizon}-mois.md`,
    );
    setComparisonStatus("downloaded");
  }

  const generatorMessage = {
    idle: "",
    "template-copied":
      "La trame complète a été copiée. Les champs laissés vides restent signalés entre crochets.",
    "copy-error":
      "La copie automatique est indisponible dans ce navigateur. Le téléchargement du document texte reste utilisable.",
    "template-downloaded":
      "Le document texte a été préparé sur votre appareil.",
    "example-downloaded":
      "L’exemple fictif DossierClair a été préparé sur votre appareil.",
  }[generatorStatus];

  const comparisonMessage = {
    idle: "",
    copied:
      "Le comparatif a été copié avec ses hypothèses, inclusions, exclusions et inconnus.",
    "copy-error":
      "La copie automatique est indisponible dans ce navigateur. Le téléchargement du document texte reste utilisable.",
    downloaded: "Le comparatif a été préparé sur votre appareil.",
  }[comparisonStatus];

  const lowestResults = calculation.results.filter(
    (result) => result.differenceFromLowest === 0,
  );

  return (
    <section
      className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
      aria-labelledby={`${instanceId}-saas-kit-title`}
    >
      <div className="border-b border-zinc-800 bg-zinc-950 px-4 py-5 text-white sm:px-6">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-300">
          Outil local · sans envoi vers Hagnéré Code
        </p>
        <h3
          id={`${instanceId}-saas-kit-title`}
          className="m-0 text-lg font-bold sm:text-xl"
        >
          Préparez le dossier, puis comparez trois offres au même horizon
        </h3>
        <p className="mb-0 mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">
          Téléchargez une trame éditable et un exemple rempli, puis remplacez
          les montants fictifs par vos devis. Les saisies restent en mémoire
          dans cet onglet ; une copie ou un téléchargement peut être conservé
          par votre appareil ou son service de synchronisation.
        </p>
      </div>

      <div className="border-b border-zinc-200 p-4 dark:border-zinc-800 sm:p-6">
        <div className="max-w-3xl">
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-violet-700 dark:text-violet-300">
            1 · Générateur de dossier
          </p>
          <h4 className="m-0 text-lg font-bold text-zinc-950 dark:text-white">
            Personnalisez la première page sans perdre les questions difficiles
          </h4>
          <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Un champ vide ne disparaît pas : le fichier le conserve comme
            réponse à compléter. La trame couvre décision, droits, échecs,
            exploitation, tests d’acceptation, coût sur 24 mois, changements et
            sorties.
          </p>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <label
            htmlFor={`${instanceId}-project-name`}
            className="block sm:col-span-2"
          >
            <span className="mb-1.5 block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Nom du projet
            </span>
            <input
              id={`${instanceId}-project-name`}
              type="text"
              value={profile.projectName}
              onChange={(event) =>
                updateProfile("projectName", event.target.value)
              }
              placeholder="Ex. Portail Partenaires"
              className={textInputClass}
            />
          </label>

          <label htmlFor={`${instanceId}-target-company`} className="block">
            <span className="mb-1.5 block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Entreprise cible et utilisateurs
            </span>
            <input
              id={`${instanceId}-target-company`}
              type="text"
              value={profile.targetCompany}
              onChange={(event) =>
                updateProfile("targetCompany", event.target.value)
              }
              placeholder="Ex. réseaux de 20 à 100 magasins"
              className={textInputClass}
            />
          </label>

          <label htmlFor={`${instanceId}-decision-maker`} className="block">
            <span className="mb-1.5 block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Personne qui décide et accepte
            </span>
            <input
              id={`${instanceId}-decision-maker`}
              type="text"
              value={profile.decisionMaker}
              onChange={(event) =>
                updateProfile("decisionMaker", event.target.value)
              }
              placeholder="Ex. Sonia, directrice générale"
              className={textInputClass}
            />
          </label>

          <label
            htmlFor={`${instanceId}-observed-problem`}
            className="block sm:col-span-2"
          >
            <span className="mb-1.5 block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Problème observé, avec sa conséquence
            </span>
            <textarea
              id={`${instanceId}-observed-problem`}
              rows={3}
              value={profile.observedProblem}
              onChange={(event) =>
                updateProfile("observedProblem", event.target.value)
              }
              placeholder="Ex. chaque agence ressaisit les mêmes commandes et les erreurs retardent la facturation."
              className={textInputClass}
            />
          </label>

          <label
            htmlFor={`${instanceId}-expected-outcome`}
            className="block sm:col-span-2"
          >
            <span className="mb-1.5 block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Résultat attendu pour l’utilisateur
            </span>
            <textarea
              id={`${instanceId}-expected-outcome`}
              rows={3}
              value={profile.expectedOutcome}
              onChange={(event) =>
                updateProfile("expectedOutcome", event.target.value)
              }
              placeholder="Ex. une responsable valide une commande complète une seule fois et la comptabilité la retrouve sans ressaisie."
              className={textInputClass}
            />
          </label>

          <label htmlFor={`${instanceId}-review-date`} className="block">
            <span className="mb-1.5 block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Date de la prochaine revue
            </span>
            <input
              id={`${instanceId}-review-date`}
              type="date"
              value={profile.reviewDate}
              onChange={(event) =>
                updateProfile("reviewDate", event.target.value)
              }
              className={textInputClass}
            />
          </label>
        </div>

        <p className="mb-0 mt-5 rounded-xl border border-violet-200 bg-violet-50 p-3 text-sm leading-relaxed text-violet-950 dark:border-violet-900 dark:bg-violet-950/20 dark:text-violet-200">
          Un fichier <code>.md</code> est un document texte. Vous pouvez
          l’ouvrir dans un éditeur de texte ou copier son contenu dans Word,
          Google Docs ou Notion.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={copyTemplate}
            className={primaryButtonClass}
          >
            Copier la trame prête à coller
          </button>
          <button
            type="button"
            onClick={downloadTemplate}
            className={secondaryButtonClass}
          >
            Télécharger la trame (.md)
          </button>
          <button
            type="button"
            onClick={downloadExample}
            className={secondaryButtonClass}
          >
            Télécharger l’exemple DossierClair
          </button>
        </div>
        <p
          className="mb-0 mt-3 min-h-5 text-xs text-zinc-600 dark:text-zinc-400"
          aria-live="polite"
        >
          {generatorMessage}
        </p>
      </div>

      <div className="p-4 sm:p-6">
        <div className="max-w-3xl">
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-violet-700 dark:text-violet-300">
            2 · Comparateur de coûts renseignés
          </p>
          <h4 className="m-0 text-lg font-bold text-zinc-950 dark:text-white">
            Comparez trois offres sur la même durée
          </h4>
          <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Les valeurs DossierClair sont entièrement fictives. Elles ne
            représentent ni des prix de marché, ni des tarifs Hagnéré Code.
            Gardez « coûts inconnus » coché jusqu’à confirmation écrite. Un zéro
            doit aussi être expliqué : inclus dans un autre poste, réellement
            inexistant ou confirmé comme tel.
          </p>
        </div>

        <fieldset className="mt-5 max-w-xl">
          <legend className="text-sm font-semibold text-zinc-950 dark:text-white">
            Durée commune de comparaison
          </legend>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {SAAS_OFFER_HORIZONS.map((months) => (
              <label
                key={months}
                className="flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-2 py-2.5 text-sm font-medium text-zinc-800 has-[:checked]:border-violet-600 has-[:checked]:bg-violet-50 has-[:checked]:text-violet-950 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200 dark:has-[:checked]:border-violet-500 dark:has-[:checked]:bg-violet-950/30 dark:has-[:checked]:text-violet-200"
              >
                <input
                  type="radio"
                  name={`${instanceId}-saas-offer-horizon`}
                  value={months}
                  checked={horizon === months}
                  onChange={() => {
                    setHorizon(months);
                    setComparisonStatus("idle");
                  }}
                  className="size-4 accent-violet-600"
                />
                {months} mois
              </label>
            ))}
          </div>
        </fieldset>

        <details className="mt-5 rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900/50">
          <summary className="cursor-pointer font-semibold text-zinc-950 dark:text-white">
            Que mettre dans chaque poste ?
          </summary>
          <p className="mb-0 mt-3 leading-relaxed text-zinc-600 dark:text-zinc-400">
            Étude : décisions et risques avant construction ; construction :
            conception, développement et tests ; migration : reprise et contrôle
            des données ; maintenance et assistance : corrections, canal,
            horaires et capacité réellement inclus ; infrastructure :
            hébergement, sauvegardes et supervision ; licences : services tiers
            ; sortie : export, documentation et transfert.
          </p>
        </details>

        <div className="mt-5 grid gap-4 xl:grid-cols-3">
          {SAAS_OFFER_KEYS.map((offer) => (
            <fieldset
              key={offer}
              className="min-w-0 rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800"
            >
              <legend className="px-1 text-sm font-bold text-zinc-950 dark:text-white">
                Offre {offer}
              </legend>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                {SAAS_OFFER_FIELDS.map((field) => {
                  const inputId = `${instanceId}-offer-${offer}-${field.key}`;
                  const helpId = `${inputId}-help`;
                  const errorId = `${inputId}-error`;
                  const isInvalid = calculation.validationErrors.some(
                    (error) =>
                      error.offer === offer && error.field === field.key,
                  );

                  return (
                    <label key={field.key} htmlFor={inputId} className="block">
                      <span className="block text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                        {field.label}
                        {field.cadence === "monthly" ? " / mois" : ""}
                      </span>
                      <span className="relative mt-1.5 block">
                        <input
                          id={inputId}
                          type="text"
                          inputMode="decimal"
                          value={amountInputs[offer][field.key]}
                          onChange={(event) =>
                            updateOffer(offer, field.key, event.target.value)
                          }
                          aria-describedby={`${helpId} ${comparisonLimitsId}`}
                          aria-invalid={isInvalid}
                          aria-errormessage={isInvalid ? errorId : undefined}
                          className={`${textInputClass} pr-8 aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-1 aria-[invalid=true]:ring-red-200`}
                        />
                        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-zinc-500">
                          €
                        </span>
                      </span>
                      <span id={helpId} className="sr-only">
                        {field.help}
                      </span>
                      {isInvalid ? (
                        <span
                          id={errorId}
                          className="mt-1.5 block text-[11px] font-medium leading-relaxed text-red-700 dark:text-red-300"
                        >
                          Saisissez un montant positif ou nul, avec une virgule
                          ou un point et au maximum deux décimales, par exemple
                          1250,50. Les montants négatifs et les écritures comme
                          1e3 ne sont pas acceptés.
                        </span>
                      ) : null}
                    </label>
                  );
                })}
              </div>

              <label
                className="mt-4 block"
                htmlFor={`${instanceId}-offer-${offer}-zero-justification`}
              >
                <span className="block text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                  Justification des montants nuls
                </span>
                <textarea
                  id={`${instanceId}-offer-${offer}-zero-justification`}
                  rows={3}
                  value={offers[offer].zeroJustification}
                  onChange={(event) =>
                    updateZeroJustification(offer, event.target.value)
                  }
                  aria-invalid={calculation.validationErrors.some(
                    (error) =>
                      error.offer === offer &&
                      error.field === "zeroJustification",
                  )}
                  aria-errormessage={
                    calculation.validationErrors.some(
                      (error) =>
                        error.offer === offer &&
                        error.field === "zeroJustification",
                    )
                      ? `${instanceId}-offer-${offer}-zero-justification-error`
                      : undefined
                  }
                  className={`${textInputClass} mt-1.5 resize-y aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-1 aria-[invalid=true]:ring-red-200`}
                />
                <span className="mt-1 block text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-500">
                  Exemple : « migration incluse dans la construction » ou « ce
                  poste n’existe pas dans le périmètre ».
                </span>
                {calculation.validationErrors.some(
                  (error) =>
                    error.offer === offer &&
                    error.field === "zeroJustification",
                ) ? (
                  <span
                    id={`${instanceId}-offer-${offer}-zero-justification-error`}
                    className="mt-1.5 block text-[11px] font-medium leading-relaxed text-red-700 dark:text-red-300"
                  >
                    Cette offre contient au moins un montant nul. Expliquez ce
                    zéro avant de comparer les devis.
                  </span>
                ) : null}
              </label>

              <label className="mt-4 flex cursor-pointer items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs leading-relaxed text-amber-950 dark:border-amber-900 dark:bg-amber-950/20 dark:text-amber-200">
                <input
                  type="checkbox"
                  checked={offers[offer].hasUnknownCosts}
                  onChange={(event) =>
                    updateUnknownCosts(offer, event.target.checked)
                  }
                  className="mt-0.5 size-4 shrink-0 accent-amber-600"
                />
                <span>
                  <strong className="block">
                    Des coûts importants restent inconnus
                  </strong>
                  L’offre reste visible mais aucun coût n’est présenté comme le
                  plus faible tant qu’une seule de ces cases reste cochée.
                </span>
              </label>
            </fieldset>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-5">
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-zinc-500">
            Coûts renseignés sur {horizon} mois
          </p>
          <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Ponctuel + {horizon} × (maintenance, infrastructure et licences
            mensuelles). Le temps interne, les taxes, l’inflation et les risques
            non saisis restent exclus.
          </p>

          {calculation.isValid ? (
            <>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {calculation.results.map((result) => {
                  const isLowest = result.differenceFromLowest === 0;
                  return (
                    <article
                      key={result.offer}
                      className={`rounded-xl border p-4 ${
                        result.hasUnknownCosts
                          ? "border-amber-300 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/20"
                          : isLowest
                            ? "border-emerald-400 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-950/30"
                            : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
                      }`}
                    >
                      <p className="mb-1 text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                        Offre {result.offer}
                      </p>
                      <p className="mb-0 text-xl font-bold text-zinc-950 dark:text-white">
                        {formatEuro(result.total)}
                      </p>
                      <p className="mb-0 mt-1 text-[11px] text-zinc-600 dark:text-zinc-400">
                        Ponctuel {formatEuro(result.oneOffTotal)} · mensuel{" "}
                        {formatEuro(result.monthlyTotal)}
                      </p>
                      <p className="mb-0 mt-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                        {result.hasUnknownCosts
                          ? "Coût partiel : postes à confirmer"
                          : calculation.hasAnyUnknownCosts
                            ? "Coûts déclarés, comparaison suspendue"
                            : isLowest
                              ? "Coût renseigné le plus faible"
                              : "Coûts déclarés complets pour ce calcul"}
                      </p>
                    </article>
                  );
                })}
              </div>
              <p
                id={comparisonStatusId}
                role="status"
                aria-live="polite"
                aria-atomic="true"
                className="mb-0 mt-4 rounded-xl border border-zinc-200 bg-white p-3 text-sm font-medium text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
              >
                {lowestResults.length > 0
                  ? `${lowestResults.length > 1 ? "Offres" : "Offre"} ${lowestResults.map((result) => result.offer).join(" et ")} : ${lowestResults.length > 1 ? "coûts renseignés les plus faibles" : "coût renseigné le plus faible"}, à ${formatEuro(lowestResults[0].total)}. Ce constat ne désigne pas automatiquement la meilleure solution.`
                  : "Aucun classement tant qu’au moins une offre conserve des coûts importants inconnus."}
              </p>
            </>
          ) : (
            <p
              id={comparisonStatusId}
              role="alert"
              className="mb-0 mt-4 rounded-xl border border-red-300 bg-red-50 p-3 text-sm font-medium text-red-900 dark:border-red-900 dark:bg-red-950/30 dark:text-red-200"
            >
              Corrigez les montants et les justifications avant de comparer.
              Chaque montant doit être écrit avec une virgule ou un point et au
              maximum deux décimales. Chaque zéro doit être expliqué.
            </p>
          )}

          <div
            id={comparisonLimitsId}
            className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs leading-relaxed text-amber-950 dark:border-amber-900 dark:bg-amber-950/20 dark:text-amber-200"
          >
            <strong>Limites :</strong> ce calcul n’évalue ni ce qui est inclus,
            ni les délais, ni la qualité, ni la sécurité, ni la dépendance. Un
            montant nul doit être documenté comme réellement inclus ou
            inexistant. Un poste non chiffré reste inconnu, jamais égal à zéro.
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={copyComparison}
              disabled={!calculation.isValid}
              className={primaryButtonClass}
            >
              Copier le comparatif prêt à coller
            </button>
            <button
              type="button"
              onClick={downloadComparison}
              disabled={!calculation.isValid}
              className={secondaryButtonClass}
            >
              Télécharger le comparatif (.md)
            </button>
            <button
              type="button"
              onClick={resetComparison}
              className={secondaryButtonClass}
            >
              Restaurer l’exemple fictif
            </button>
          </div>
          <p
            className="mb-0 mt-3 min-h-5 text-xs text-zinc-600 dark:text-zinc-400"
            aria-live="polite"
          >
            {comparisonMessage}
          </p>
        </div>
      </div>
    </section>
  );
}
