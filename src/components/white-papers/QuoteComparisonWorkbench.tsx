"use client";

import { useState } from "react";
import { Check, Clipboard, RotateCcw, TriangleAlert } from "lucide-react";
import { copyTextToClipboard } from "@/lib/clipboard";
import { trackFunnelEvent } from "@/lib/funnel-analytics";
import {
  calculateQuoteScore,
  calculateQuoteTco,
  QUOTE_CRITERIA,
  QUOTE_EXAMPLE_OFFERS,
  quoteCostStatusFormula,
  quoteInternalCostFormula,
  quoteScoreFormula,
  quoteTcoGapFormula,
  quoteTcoFormula,
  type QuoteOfferCosts,
  type SpreadsheetFormulaLocale,
} from "@/lib/quote-comparison";

type EditableNumber = number | "";
type NumericKey = keyof QuoteOfferCosts;
type EditableOffer = {
  id: string;
  name: string;
} & Record<NumericKey, EditableNumber>;

const NUMERIC_KEYS: NumericKey[] = [
  "initial",
  "requiredOptions",
  "year1",
  "year2",
  "year3",
  "internalHours",
  "internalHourCost",
  "exitCost",
  "riskReserve",
  "credits",
];

const INITIAL_OFFERS: EditableOffer[] = QUOTE_EXAMPLE_OFFERS.map(
  ({ id, name, costs }) => ({ id, name, ...costs }),
);

const COST_ROWS: Array<{
  key: NumericKey;
  label: string;
  hint: string;
  unit: "eur" | "hours";
  step: number;
}> = [
  {
    key: "initial",
    label: "Création et lancement",
    hint: "Cadrage, UX/UI, développement, recette, mise en ligne",
    unit: "eur",
    step: 100,
  },
  {
    key: "requiredOptions",
    label: "Options nécessaires exclues",
    hint: "Ce qu'il faut rajouter pour retrouver un périmètre comparable",
    unit: "eur",
    step: 100,
  },
  {
    key: "year1",
    label: "Récurrent · année 1",
    hint: "Hébergement, licences, maintenance, support, suivi",
    unit: "eur",
    step: 100,
  },
  {
    key: "year2",
    label: "Récurrent · année 2",
    hint: "Avec l'indexation réellement prévue au devis",
    unit: "eur",
    step: 100,
  },
  {
    key: "year3",
    label: "Récurrent · année 3",
    hint: "Même base de calcul que les deux autres offres",
    unit: "eur",
    step: 100,
  },
  {
    key: "internalHours",
    label: "Temps interne à fournir",
    hint: "Contenus, arbitrages, imports, recette et coordination",
    unit: "hours",
    step: 1,
  },
  {
    key: "internalHourCost",
    label: "Coût horaire interne chargé",
    hint: "Utilisez la même hypothèse pour les trois offres",
    unit: "eur",
    step: 1,
  },
  {
    key: "exitCost",
    label: "Réversibilité et sortie",
    hint: "Exports, documentation, reprise des comptes et migration",
    unit: "eur",
    step: 100,
  },
  {
    key: "riskReserve",
    label: "Provision de risques identifiés",
    hint: "Probabilité × impact, jamais un pourcentage arbitraire",
    unit: "eur",
    step: 100,
  },
  {
    key: "credits",
    label: "Remises et crédits certains",
    hint: "Uniquement les montants acquis et documentés, soustraits du total",
    unit: "eur",
    step: 100,
  },
];

function completeCosts(offer: EditableOffer): QuoteOfferCosts | null {
  if (NUMERIC_KEYS.some((key) => offer[key] === "")) {
    return null;
  }

  return Object.fromEntries(
    NUMERIC_KEYS.map((key) => [key, offer[key]]),
  ) as unknown as QuoteOfferCosts;
}

function euro(value: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function QuoteComparisonWorkbench() {
  const [offers, setOffers] = useState<EditableOffer[]>(() =>
    INITIAL_OFFERS.map((offer) => ({ ...offer })),
  );
  const [announcement, setAnnouncement] = useState("");
  const [announcementKind, setAnnouncementKind] = useState<"success" | "error">(
    "success",
  );
  const [formulaLocale, setFormulaLocale] =
    useState<SpreadsheetFormulaLocale>("fr");

  const totals = offers.map((offer) => {
    const costs = completeCosts(offer);
    return costs ? calculateQuoteTco(costs) : null;
  });
  const completeTotals = totals.filter((total): total is number => total !== null);
  const allTotalsComplete = completeTotals.length === totals.length;
  const bestTotal = allTotalsComplete ? Math.min(...completeTotals) : null;
  const bestIndexes = totals.flatMap((total, index) =>
    total !== null && total === bestTotal ? [index] : [],
  );

  const dynamicSummary = (() => {
    if (completeTotals.length !== totals.length || bestTotal === null) {
      return "Au moins une valeur reste à confirmer. Le total correspondant est volontairement suspendu plutôt que remplacé silencieusement par zéro.";
    }

    if (bestIndexes.length > 1) {
      const names = bestIndexes.map((index) => offers[index].name).join(" et ");
      return `${names} sont actuellement ex æquo à ${euro(bestTotal)} sur 36 mois.`;
    }

    const bestIndex = bestIndexes[0];
    const gaps = totals
      .map((total, index) =>
        index === bestIndex || total === null
          ? null
          : `${offers[index].name} : + ${euro(total - bestTotal)}`,
      )
      .filter((value): value is string => value !== null)
      .join(" ; ");

    return `${offers[bestIndex].name} est actuellement la moins chère à ${euro(bestTotal)} sur 36 mois. ${gaps}. Le coût ne départage que les offres qui passent les critères indispensables.`;
  })();

  function updateOffer(index: number, key: keyof EditableOffer, value: string) {
    setOffers((current) =>
      current.map((offer, offerIndex) => {
        if (offerIndex !== index) return offer;
        if (key === "name") return { ...offer, name: value };

        const numericValue = value === "" ? "" : Math.max(0, Number(value));
        return { ...offer, [key]: numericValue };
      }),
    );
  }

  async function copyCostGrid() {
    const rows: Array<Array<string | number>> = [
      ["Poste", ...offers.map((offer) => offer.name)],
      ["Création et lancement", ...offers.map((offer) => offer.initial)],
      ["Options nécessaires exclues", ...offers.map((offer) => offer.requiredOptions)],
      ["Récurrent année 1", ...offers.map((offer) => offer.year1)],
      ["Récurrent année 2", ...offers.map((offer) => offer.year2)],
      ["Récurrent année 3", ...offers.map((offer) => offer.year3)],
      ["Heures internes", ...offers.map((offer) => offer.internalHours)],
      ["Coût horaire interne", ...offers.map((offer) => offer.internalHourCost)],
      [
        "Coût du temps interne",
        quoteInternalCostFormula("B", formulaLocale),
        quoteInternalCostFormula("C", formulaLocale),
        quoteInternalCostFormula("D", formulaLocale),
      ],
      ["Réversibilité et sortie", ...offers.map((offer) => offer.exitCost)],
      ["Provision de risques", ...offers.map((offer) => offer.riskReserve)],
      ["Remises et crédits certains", ...offers.map((offer) => offer.credits)],
      [
        "TCO 36 mois",
        quoteTcoFormula("B", formulaLocale),
        quoteTcoFormula("C", formulaLocale),
        quoteTcoFormula("D", formulaLocale),
      ],
      [
        "Statut des données",
        quoteCostStatusFormula("B", formulaLocale),
        quoteCostStatusFormula("C", formulaLocale),
        quoteCostStatusFormula("D", formulaLocale),
      ],
      [
        "Écart vs offre la moins chère",
        quoteTcoGapFormula("B", formulaLocale),
        quoteTcoGapFormula("C", formulaLocale),
        quoteTcoGapFormula("D", formulaLocale),
      ],
    ];

    const copied = await copyTextToClipboard(
      rows.map((row) => row.join("\t")).join("\n"),
    );

    if (!copied) {
      setAnnouncementKind("error");
      setAnnouncement(
        "La copie a échoué. Autorisez le presse-papiers dans le navigateur, puis réessayez.",
      );
      return;
    }

    trackFunnelEvent("white_paper_grid_copy", {
      resource: "comparaison_devis_web_3_ans",
      format: "tsv_clipboard",
      formula_language: formulaLocale,
    });
    setAnnouncementKind("success");
    setAnnouncement(
      "Grille copiée. Ouvrez Excel ou Google Sheets, sélectionnez A1 puis collez.",
    );
  }

  async function copyCriteria() {
    const rows: Array<Array<string | number>> = [
      [
        "Catégorie",
        "Critère",
        "Poids",
        ...offers.map((offer) => offer.name),
        "Preuve attendue / note",
      ],
      ...QUOTE_CRITERIA.map((criterion, index) => [
        criterion.category,
        criterion.criterion,
        criterion.weight,
        QUOTE_EXAMPLE_OFFERS[0].scores[index],
        QUOTE_EXAMPLE_OFFERS[1].scores[index],
        QUOTE_EXAMPLE_OFFERS[2].scores[index],
        criterion.proofHint,
      ]),
      [
        "Score pondéré / 100",
        "Somme(note / 3 × poids)",
        100,
        quoteScoreFormula("D", formulaLocale),
        quoteScoreFormula("E", formulaLocale),
        quoteScoreFormula("F", formulaLocale),
        "Les 40 notes de l'exemple sont modifiables.",
      ],
      [
        "Éligible dans l'exemple ?",
        "Filtre appliqué avant le score",
        "",
        ...QUOTE_EXAMPLE_OFFERS.map((offer) => (offer.eligible ? "Oui" : "Non")),
        "Un critère indispensable ne se compense pas par la moyenne.",
      ],
      [
        "Décision fictive",
        "",
        "",
        ...QUOTE_EXAMPLE_OFFERS.map((offer) => offer.decision),
        "",
      ],
    ];

    const copied = await copyTextToClipboard(
      rows.map((row) => row.join("\t")).join("\n"),
    );

    if (!copied) {
      setAnnouncementKind("error");
      setAnnouncement(
        "La copie de la checklist a échoué. Autorisez le presse-papiers, puis réessayez.",
      );
      return;
    }

    trackFunnelEvent("white_paper_checklist_copy", {
      resource: "comparaison_devis_web_3_ans",
      criteria: QUOTE_CRITERIA.length,
      formula_language: formulaLocale,
    });
    setAnnouncementKind("success");
    setAnnouncement(
      "Checklist remplie et formules copiées. Collez-la dans un second onglet Excel ou Google Sheets.",
    );
  }

  function resetExample() {
    setOffers(INITIAL_OFFERS.map((offer) => ({ ...offer })));
    setAnnouncementKind("success");
    setAnnouncement("Exemple fictif réinitialisé.");
  }

  return (
    <section
      aria-labelledby="comparateur-title"
      className="not-prose my-8 min-w-0 max-w-full overflow-hidden rounded-2xl border border-violet-200 bg-white shadow-sm dark:border-violet-900/70 dark:bg-zinc-950"
    >
      <div className="border-b border-violet-100 bg-gradient-to-br from-violet-50 via-white to-blue-50 p-5 sm:p-7 dark:border-violet-950 dark:from-violet-950/50 dark:via-zinc-950 dark:to-blue-950/30">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="mb-3 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                Exemple fictif modifiable
              </span>
              <span className="rounded-full bg-white px-2.5 py-1 text-zinc-600 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:ring-zinc-700">
                Calcul local · aucune donnée envoyée
              </span>
            </div>
            <h2
              id="comparateur-title"
              className="m-0 text-xl font-bold tracking-tight text-zinc-950 sm:text-2xl dark:text-white"
            >
              Recalculez trois devis sur 36 mois
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Modifiez les montants, puis copiez la grille : les formules sont
              incluses et fonctionnent dans Excel comme dans Google Sheets.
            </p>
          </div>
          <div className="flex w-full shrink-0 flex-col gap-2 lg:w-auto">
            <label
              htmlFor="spreadsheet-formula-language"
              className="text-xs font-medium text-zinc-600 dark:text-zinc-300"
            >
              Langue des formules
            </label>
            <select
              id="spreadsheet-formula-language"
              value={formulaLocale}
              onChange={(event) =>
                setFormulaLocale(event.target.value as SpreadsheetFormulaLocale)
              }
              className="min-h-10 rounded-lg border border-zinc-300 bg-white px-3 text-sm text-zinc-900 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:ring-violet-950"
            >
              <option value="fr">Français · SI, NB, point-virgule</option>
              <option value="en">International · IF, COUNT, virgule</option>
            </select>
            <button
              type="button"
              onClick={copyCostGrid}
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              <Clipboard className="size-4" aria-hidden="true" />
              Copier pour Excel / Sheets
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-7">
        <div className="min-w-0 max-w-full overflow-x-auto pb-2">
          <table className="min-w-[680px] w-full border-separate border-spacing-px overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="w-[30%] bg-zinc-950 p-3 text-left text-xs font-bold uppercase tracking-wider text-zinc-400"
                >
                  Poste comparable
                </th>
                {offers.map((offer, index) => (
                  <th key={offer.id} scope="col" className="bg-zinc-950 p-2">
                    <label className="sr-only" htmlFor={`offer-name-${offer.id}`}>
                      Nom de l&apos;offre {index + 1}
                    </label>
                    <input
                      id={`offer-name-${offer.id}`}
                      value={offer.name}
                      onChange={(event) =>
                        updateOffer(index, "name", event.target.value)
                      }
                      className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-2 py-2 text-xs font-semibold text-white outline-none focus:border-violet-400"
                    />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COST_ROWS.map((row) => (
                <tr key={row.key}>
                  <th
                    scope="row"
                    className="bg-white p-3 text-left font-normal dark:bg-zinc-950"
                  >
                    <b className="block text-sm text-zinc-900 dark:text-zinc-100">
                      {row.label}
                    </b>
                    <span className="mt-1 block text-xs leading-relaxed text-zinc-500">
                      {row.hint}
                    </span>
                  </th>
                  {offers.map((offer, index) => (
                    <td
                      key={`${row.key}-${offer.id}`}
                      className="bg-white p-3 dark:bg-zinc-950"
                    >
                      <label className="sr-only" htmlFor={`${row.key}-${offer.id}`}>
                        {row.label} · {offer.name}
                      </label>
                      <div className="relative w-full">
                        <input
                          id={`${row.key}-${offer.id}`}
                          type="number"
                          min="0"
                          step={row.step}
                          value={offer[row.key]}
                          onChange={(event) =>
                            updateOffer(index, row.key, event.target.value)
                          }
                          className="w-full rounded-lg border border-zinc-200 bg-zinc-50 py-2 pl-3 pr-8 text-right font-mono text-sm text-zinc-900 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:ring-violet-950"
                        />
                        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400">
                          {row.unit === "hours" ? "h" : "€"}
                        </span>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th
                  scope="row"
                  className="bg-violet-50 p-4 text-left dark:bg-violet-950/40"
                >
                  <b className="block text-sm text-violet-950 dark:text-violet-100">
                    Coût total sur 36 mois
                  </b>
                  <span className="mt-1 block text-xs text-violet-700 dark:text-violet-300">
                    Avant comparaison qualitative et critères éliminatoires
                  </span>
                </th>
                {totals.map((total, index) => {
                  const isBest = total !== null && total === bestTotal;
                  const isTie = isBest && bestIndexes.length > 1;

                  return (
                    <td
                      key={`total-${offers[index].id}`}
                      className={`p-4 text-right ${
                        isBest
                          ? "bg-emerald-50 dark:bg-emerald-950/40"
                          : "bg-violet-50 dark:bg-violet-950/40"
                      }`}
                    >
                      <strong className="block font-mono text-lg text-zinc-950 dark:text-white">
                        {total === null ? "À confirmer" : euro(total)}
                      </strong>
                      <span
                        className={`mt-1 inline-flex items-center gap-1 text-xs font-semibold ${
                          isBest
                            ? "text-emerald-700 dark:text-emerald-300"
                            : "text-zinc-500"
                        }`}
                      >
                        {total === null ? (
                          <>
                            <TriangleAlert className="size-3" aria-hidden="true" />
                            Valeur manquante
                          </>
                        ) : bestTotal === null ? (
                          <>
                            <TriangleAlert className="size-3" aria-hidden="true" />
                            Comparaison suspendue
                          </>
                        ) : isBest ? (
                          <>
                            <Check className="size-3" aria-hidden="true" />
                            {isTie ? "Ex æquo le moins cher" : "Moins chère sur 36 mois"}
                          </>
                        ) : (
                          `+ ${euro(total - bestTotal)}`
                        )}
                      </span>
                    </td>
                  );
                })}
              </tr>
            </tfoot>
          </table>
        </div>

        <p className="sr-only" aria-live="polite">
          {dynamicSummary}
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0 max-w-3xl text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
            {dynamicSummary}
          </p>
          <button
            type="button"
            onClick={resetExample}
            className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900"
          >
            <RotateCcw className="size-4" aria-hidden="true" />
            Réinitialiser l&apos;exemple
          </button>
        </div>

        <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/60">
          <div className="sm:flex sm:items-center sm:justify-between sm:gap-5">
            <div>
              <h3 className="m-0 text-sm font-semibold text-zinc-950 dark:text-white">
                Deuxième onglet : l&apos;exemple qualitatif entièrement rempli
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                Les 40 notes, leurs poids, les preuves attendues et les formules
                de score sont inclus. Modifiez-les après votre filtre
                d&apos;éligibilité.
              </p>
            </div>
            <button
              type="button"
              onClick={copyCriteria}
              className="mt-3 inline-flex min-h-10 w-full shrink-0 items-center justify-center gap-2 rounded-lg border border-violet-300 bg-white px-4 py-2 text-sm font-semibold text-violet-800 hover:bg-violet-50 sm:mt-0 sm:w-auto dark:border-violet-800 dark:bg-zinc-950 dark:text-violet-300 dark:hover:bg-violet-950/40"
            >
              <Clipboard className="size-4" aria-hidden="true" />
              Copier les 40 critères remplis
            </button>
          </div>
          <div className="mt-4 grid gap-2 sm:grid-cols-3">
            {QUOTE_EXAMPLE_OFFERS.map((offer) => (
              <div
                key={offer.id}
                className="rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-700 dark:bg-zinc-950"
              >
                <div className="flex items-center justify-between gap-3">
                  <b className="text-xs text-zinc-800 dark:text-zinc-200">
                    {offer.name}
                  </b>
                  <strong className="font-mono text-sm text-violet-700 dark:text-violet-300">
                    {calculateQuoteScore(offer.scores).toFixed(1)} / 100
                  </strong>
                </div>
                <p className="mt-1 text-xs text-zinc-500">{offer.decision}</p>
              </div>
            ))}
          </div>
        </div>

        <p
          role="status"
          aria-live="polite"
          className={`mt-3 min-h-5 text-center text-xs font-medium ${
            announcementKind === "error"
              ? "text-red-700 dark:text-red-300"
              : "text-emerald-700 dark:text-emerald-300"
          }`}
        >
          {announcement}
        </p>
      </div>
    </section>
  );
}
