"use client";

import { useId, useState } from "react";
import {
  buildContentPreparationMarkdown,
  buildContentProductionComparisonMarkdown,
  buildServiMecaExampleMarkdown,
  calculateContentProduction,
  cloneContentProductionModel,
  CONTENT_PRODUCTION_EXAMPLE_MODEL,
  CONTENT_PRODUCTION_OPTIONS,
  CONTENT_ROLE_FIELDS,
  contentPreparationFileName,
  EMPTY_CONTENT_PREPARATION_PROFILE,
  type ContentPreparationProfile,
  type ContentProductionOptionKey,
  type ContentRoleKey,
} from "@/lib/content-preparation-kit";

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

function parseNonNegative(raw: string) {
  if (raw.trim() === "") {
    return Number.NaN;
  }
  const value = Number.parseFloat(raw.replace(",", "."));
  return Number.isFinite(value) ? Number(value.toFixed(2)) : Number.NaN;
}

function formatNumberInput(value: number) {
  return Number.isFinite(value) ? Number(value.toFixed(2)) : "";
}

function formatEuro(value: number) {
  return Number.isFinite(value) ? euro.format(value) : "—";
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

function joinFrench(labels: string[]) {
  if (labels.length <= 1) {
    return labels[0] ?? "";
  }
  return `${labels.slice(0, -1).join(", ")} et ${labels.at(-1)}`;
}

export function ContentPreparationKit() {
  const instanceId = useId().replaceAll(":", "");
  const [profile, setProfile] = useState<ContentPreparationProfile>(
    EMPTY_CONTENT_PREPARATION_PROFILE,
  );
  const [generatorStatus, setGeneratorStatus] =
    useState<GeneratorStatus>("idle");
  const [model, setModel] = useState(() =>
    cloneContentProductionModel(CONTENT_PRODUCTION_EXAMPLE_MODEL),
  );
  const [comparisonStatus, setComparisonStatus] =
    useState<ComparisonStatus>("idle");

  const calculation = calculateContentProduction(model);
  const limitsId = `${instanceId}-content-comparison-limits`;
  const statusId = `${instanceId}-content-comparison-status`;
  const lowestResults = calculation.results.filter(
    (result) => result.differenceFromLowest === 0,
  );

  function updateProfile(
    field: keyof ContentPreparationProfile,
    value: string,
  ) {
    setProfile((current) => ({ ...current, [field]: value }));
    setGeneratorStatus("idle");
  }

  async function copyTemplate() {
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard unavailable");
      }
      await navigator.clipboard.writeText(
        buildContentPreparationMarkdown(profile),
      );
      setGeneratorStatus("template-copied");
    } catch {
      setGeneratorStatus("copy-error");
    }
  }

  function downloadTemplate() {
    downloadMarkdown(
      buildContentPreparationMarkdown(profile),
      contentPreparationFileName(profile.companyName),
    );
    setGeneratorStatus("template-downloaded");
  }

  function downloadExample() {
    downloadMarkdown(
      buildServiMecaExampleMarkdown(),
      "exemple-rempli-contenus-site-vitrine-servimeca.md",
    );
    setGeneratorStatus("example-downloaded");
  }

  function updateRate(role: ContentRoleKey, raw: string) {
    setModel((current) => ({
      ...current,
      rates: {
        ...current.rates,
        [role]: parseNonNegative(raw),
      },
    }));
    setComparisonStatus("idle");
  }

  function updateHours(
    option: ContentProductionOptionKey,
    role: ContentRoleKey,
    raw: string,
  ) {
    setModel((current) => ({
      ...current,
      options: {
        ...current.options,
        [option]: {
          ...current.options[option],
          [role]: parseNonNegative(raw),
        },
      },
    }));
    setComparisonStatus("idle");
  }

  function updateUnknown(option: ContentProductionOptionKey, checked: boolean) {
    setModel((current) => ({
      ...current,
      options: {
        ...current.options,
        [option]: {
          ...current.options[option],
          hasUnknownCosts: checked,
        },
      },
    }));
    setComparisonStatus("idle");
  }

  function updateZeroJustification(
    option: ContentProductionOptionKey,
    value: string,
  ) {
    setModel((current) => ({
      ...current,
      options: {
        ...current.options,
        [option]: {
          ...current.options[option],
          zeroJustification: value,
        },
      },
    }));
    setComparisonStatus("idle");
  }

  function resetComparison() {
    setModel(cloneContentProductionModel(CONTENT_PRODUCTION_EXAMPLE_MODEL));
    setComparisonStatus("idle");
  }

  async function copyComparison() {
    if (!calculation.isValid) {
      return;
    }
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard unavailable");
      }
      await navigator.clipboard.writeText(
        buildContentProductionComparisonMarkdown(model, calculation),
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
      buildContentProductionComparisonMarkdown(model, calculation),
      "comparatif-production-contenus-site-vitrine.md",
    );
    setComparisonStatus("downloaded");
  }

  const generatorMessage = {
    idle: "",
    "template-copied":
      "Le dossier complet a été copié. Les réponses manquantes restent visibles entre crochets.",
    "copy-error":
      "La copie automatique est indisponible. Le téléchargement du document texte reste utilisable.",
    "template-downloaded": "Le dossier texte a été préparé sur votre appareil.",
    "example-downloaded":
      "L’exemple de travail fictif ServiMeca (offre, page, coûts et test) a été préparé sur votre appareil.",
  }[generatorStatus];

  const comparisonMessage = {
    idle: "",
    copied:
      "Le comparatif a été copié avec les heures, les valeurs, les inconnues et les limites.",
    "copy-error":
      "La copie automatique est indisponible. Le téléchargement du document texte reste utilisable.",
    downloaded: "Le comparatif a été préparé sur votre appareil.",
  }[comparisonStatus];

  const lowestLabels = lowestResults.map(
    (result) =>
      CONTENT_PRODUCTION_OPTIONS.find((option) => option.key === result.option)
        ?.shortLabel ?? result.option,
  );

  return (
    <section
      className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
      aria-labelledby={`${instanceId}-content-kit-title`}
    >
      <div className="border-b border-zinc-800 bg-zinc-950 px-4 py-5 text-white sm:px-6">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-300">
          Outil local · aucun compte ni adresse e-mail
        </p>
        <h3
          id={`${instanceId}-content-kit-title`}
          className="m-0 text-lg font-bold sm:text-xl"
        >
          Construisez votre dossier, puis comparez qui doit écrire
        </h3>
        <p className="mb-0 mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">
          Vos saisies ne sont ni transmises à Hagnéré Code ni enregistrées par
          cet outil. Elles restent en mémoire dans cet onglet. Une copie ou un
          téléchargement peut ensuite être conservé par votre appareil ou son
          service de synchronisation.
        </p>
      </div>

      <div className="border-b border-zinc-200 p-4 dark:border-zinc-800 sm:p-6">
        <div className="max-w-3xl">
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-violet-700 dark:text-violet-300">
            1 · Dossier éditable
          </p>
          <h4 className="m-0 text-lg font-bold text-zinc-950 dark:text-white">
            Personnalisez la première page sans masquer les inconnues
          </h4>
          <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Le fichier <code>.md</code> est un document texte. Ouvrez-le avec un
            éditeur de texte ou copiez son contenu dans Word, Google Docs ou
            Notion. Il contient la carte des pages, les phrases clients, les
            offres, les preuves, les photos, le formulaire, les responsabilités,
            le test et le suivi à 90 jours.
          </p>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Nom de l’entreprise
            </span>
            <input
              type="text"
              value={profile.companyName}
              onChange={(event) =>
                updateProfile("companyName", event.target.value)
              }
              placeholder="Ex. Atelier Durand"
              className={`${textInputClass} mt-1.5`}
            />
          </label>
          <label className="block">
            <span className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Offre prioritaire
            </span>
            <input
              type="text"
              value={profile.mainOffer}
              onChange={(event) =>
                updateProfile("mainOffer", event.target.value)
              }
              placeholder="Ex. diagnostic sur site"
              className={`${textInputClass} mt-1.5`}
            />
          </label>
          <label className="block">
            <span className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Client concerné
            </span>
            <textarea
              value={profile.targetCustomer}
              onChange={(event) =>
                updateProfile("targetCustomer", event.target.value)
              }
              placeholder="Fonction, situation et besoin"
              rows={3}
              className={`${textInputClass} mt-1.5 resize-y`}
            />
          </label>
          <label className="block">
            <span className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Zone ou condition importante
            </span>
            <textarea
              value={profile.geographicArea}
              onChange={(event) =>
                updateProfile("geographicArea", event.target.value)
              }
              placeholder="Zone, disponibilité ou condition d’accès"
              rows={3}
              className={`${textInputClass} mt-1.5 resize-y`}
            />
          </label>
          <label className="block">
            <span className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Personne qui tranche et valide
            </span>
            <input
              type="text"
              value={profile.validator}
              onChange={(event) =>
                updateProfile("validator", event.target.value)
              }
              placeholder="Nom et fonction"
              className={`${textInputClass} mt-1.5`}
            />
          </label>
          <label className="block">
            <span className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Date de lancement souhaitée
            </span>
            <input
              type="date"
              value={profile.desiredLaunchDate}
              onChange={(event) =>
                updateProfile("desiredLaunchDate", event.target.value)
              }
              className={`${textInputClass} mt-1.5`}
            />
          </label>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={copyTemplate}
            className={primaryButtonClass}
          >
            Copier le dossier prêt à coller
          </button>
          <button
            type="button"
            onClick={downloadTemplate}
            className={secondaryButtonClass}
          >
            Télécharger le dossier (.md)
          </button>
          <button
            type="button"
            onClick={downloadExample}
            className={secondaryButtonClass}
          >
            Télécharger l’exemple de travail (offre, page, coûts et test)
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
            2 · Comparateur de temps et de coûts renseignés
          </p>
          <h4 className="m-0 text-lg font-bold text-zinc-950 dark:text-white">
            Comparez les trois modes sur exactement les mêmes pages
          </h4>
          <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            L’exemple porte sur huit pages, quatre offres, les mêmes preuves et
            photos, deux cycles de retours, hors intégration technique. Les
            valeurs ne sont ni des salaires, ni des prix de marché, ni des
            tarifs Hagnéré Code. Remplacez-les par vos hypothèses.
          </p>
        </div>

        <fieldset className="mt-5">
          <legend className="text-sm font-bold text-zinc-950 dark:text-white">
            Valeur estimée d’une heure
          </legend>
          <p className="mb-0 mt-1 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
            Le temps interne valorisé aide à voir la capacité mobilisée. Il ne
            constitue pas automatiquement une dépense ni une économie.
          </p>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {CONTENT_ROLE_FIELDS.map((role) => {
              const inputId = `${instanceId}-rate-${role.key}`;
              const helpId = `${inputId}-help`;
              const isInvalid = calculation.validationErrors.some(
                (error) => error.scope === "rate" && error.role === role.key,
              );
              return (
                <label key={role.key} htmlFor={inputId} className="block">
                  <span className="block text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                    {role.label}
                  </span>
                  <span className="relative mt-1.5 block">
                    <input
                      id={inputId}
                      type="number"
                      min={0}
                      step={0.01}
                      inputMode="decimal"
                      value={formatNumberInput(model.rates[role.key])}
                      onChange={(event) =>
                        updateRate(role.key, event.target.value)
                      }
                      aria-describedby={`${helpId} ${limitsId}`}
                      aria-invalid={isInvalid}
                      className={`${textInputClass} pr-11 aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-1 aria-[invalid=true]:ring-red-200`}
                    />
                    <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-zinc-500">
                      €/h
                    </span>
                  </span>
                  <span
                    id={helpId}
                    className="mt-1 block text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-500"
                  >
                    {role.help}
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <div className="mt-5 grid gap-4 xl:grid-cols-3">
          {CONTENT_PRODUCTION_OPTIONS.map((option) => (
            <fieldset
              key={option.key}
              className="min-w-0 rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800"
            >
              <legend className="px-1 text-sm font-bold text-zinc-950 dark:text-white">
                {option.shortLabel}
              </legend>
              <p className="mt-1 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                {option.description}
              </p>

              <div className="mt-3 grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
                {CONTENT_ROLE_FIELDS.map((role) => {
                  const inputId = `${instanceId}-${option.key}-${role.key}`;
                  const isInvalid = calculation.validationErrors.some(
                    (error) =>
                      error.scope === "hours" &&
                      error.option === option.key &&
                      error.role === role.key,
                  );
                  return (
                    <label key={role.key} htmlFor={inputId} className="block">
                      <span className="block text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                        {role.label}
                      </span>
                      <span className="relative mt-1.5 block">
                        <input
                          id={inputId}
                          type="number"
                          min={0}
                          step={0.25}
                          inputMode="decimal"
                          value={formatNumberInput(
                            model.options[option.key][role.key],
                          )}
                          onChange={(event) =>
                            updateHours(
                              option.key,
                              role.key,
                              event.target.value,
                            )
                          }
                          aria-describedby={limitsId}
                          aria-invalid={isInvalid}
                          className={`${textInputClass} pr-8 aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-1 aria-[invalid=true]:ring-red-200`}
                        />
                        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-zinc-500">
                          h
                        </span>
                      </span>
                    </label>
                  );
                })}
              </div>

              {(() => {
                const zeroError = calculation.validationErrors.some(
                  (error) =>
                    error.scope === "zeroJustification" &&
                    error.option === option.key,
                );
                const zeroHelpId = `${instanceId}-${option.key}-zero-help`;
                return (
                  <label className="mt-4 block">
                    <span className="block text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                      Justification des heures à zéro
                    </span>
                    <textarea
                      value={model.options[option.key].zeroJustification}
                      onChange={(event) =>
                        updateZeroJustification(option.key, event.target.value)
                      }
                      rows={2}
                      aria-describedby={zeroHelpId}
                      aria-invalid={zeroError}
                      placeholder="Ex. aucune rédaction interne : tout est inclus dans la prestation."
                      className={`${textInputClass} mt-1.5 resize-y aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-1 aria-[invalid=true]:ring-red-200`}
                    />
                    <span
                      id={zeroHelpId}
                      className="mt-1 block text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-500"
                    >
                      Si une heure vaut zéro, expliquez pourquoi avant de fermer
                      les inconnues et de classer les options.
                    </span>
                  </label>
                );
              })()}

              <label className="mt-4 flex cursor-pointer items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs leading-relaxed text-amber-950 dark:border-amber-900 dark:bg-amber-950/20 dark:text-amber-200">
                <input
                  type="checkbox"
                  checked={model.options[option.key].hasUnknownCosts}
                  onChange={(event) =>
                    updateUnknown(option.key, event.target.checked)
                  }
                  className="mt-0.5 size-4 shrink-0 accent-amber-600"
                />
                <span>
                  <strong className="block">
                    Des tâches ou coûts importants restent inconnus
                  </strong>
                  Gardez cette case cochée tant que photographie, droits,
                  intégration, traduction ou retours supplémentaires ne sont pas
                  confirmés.
                </span>
              </label>
            </fieldset>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-5">
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-zinc-500">
            Résultats du périmètre renseigné
          </p>

          {calculation.isValid ? (
            <>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {calculation.results.map((result) => {
                  const option = CONTENT_PRODUCTION_OPTIONS.find(
                    (candidate) => candidate.key === result.option,
                  );
                  const isLowest = result.differenceFromLowest === 0;
                  return (
                    <article
                      key={result.option}
                      className={`rounded-xl border p-4 ${
                        result.hasUnknownCosts
                          ? "border-amber-300 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/20"
                          : isLowest
                            ? "border-emerald-400 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-950/30"
                            : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
                      }`}
                    >
                      <p className="mb-1 text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                        {option?.shortLabel}
                      </p>
                      <p className="mb-0 text-xl font-bold text-zinc-950 dark:text-white">
                        {formatEuro(result.totalValue)}
                      </p>
                      <p className="mb-0 mt-1 text-[11px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {result.internalHours} h internes valorisées à{" "}
                        {formatEuro(result.internalCapacityValue)} ·{" "}
                        {result.providerHours} h de prestation à{" "}
                        {formatEuro(result.providerCost)}
                      </p>
                      <p className="mb-0 mt-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                        {result.hasUnknownCosts
                          ? "Résultat partiel : inconnues à fermer"
                          : calculation.hasAnyUnknownCosts
                            ? "Renseigné, mais comparaison suspendue"
                            : isLowest
                              ? "Coût renseigné le plus faible"
                              : "Tous les postes déclarés ont été renseignés"}
                      </p>
                    </article>
                  );
                })}
              </div>
              <p
                id={statusId}
                role="status"
                aria-live="polite"
                aria-atomic="true"
                className="mb-0 mt-4 rounded-xl border border-zinc-200 bg-white p-3 text-sm font-medium text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
              >
                {lowestResults.length > 0
                  ? `${lowestResults.length > 1 ? "Options" : "Option"} ${joinFrench(lowestLabels)} : ${lowestResults.length > 1 ? "coûts renseignés les plus faibles" : "coût renseigné le plus faible"}, à ${formatEuro(lowestResults[0].totalValue)}. Ce constat ne désigne pas automatiquement le meilleur mode de production.`
                  : "Aucun classement tant qu’au moins une option conserve des tâches ou coûts importants inconnus."}
              </p>
            </>
          ) : (
            <p
              id={statusId}
              role="alert"
              className="mb-0 mt-4 rounded-xl border border-red-300 bg-red-50 p-3 text-sm font-medium text-red-900 dark:border-red-900 dark:bg-red-950/30 dark:text-red-200"
            >
              Corrigez les valeurs avant de comparer. Chaque champ doit contenir
              un nombre supérieur ou égal à zéro.
            </p>
          )}

          <div
            id={limitsId}
            className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs leading-relaxed text-amber-950 dark:border-amber-900 dark:bg-amber-950/20 dark:text-amber-200"
          >
            <strong>Limites :</strong> ce calcul additionne du temps valorisé et
            un coût de prestation. Il ne juge ni la qualité de la matière, ni la
            compétence rédactionnelle, ni la disponibilité réelle, ni le
            résultat commercial. Une valeur nulle doit être expliquée ; une
            inconnue ne vaut jamais zéro.
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
