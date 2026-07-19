"use client";

import { useState } from "react";
import { Check, Clipboard, RotateCcw } from "lucide-react";
import { trackFunnelEvent } from "@/lib/funnel-analytics";
import { QUOTE_CRITERIA } from "@/lib/quote-comparison";

type Offer = {
  name: string;
  initial: number;
  requiredOptions: number;
  year1: number;
  year2: number;
  year3: number;
  internalHours: number;
  internalHourCost: number;
  exitCost: number;
  riskReserve: number;
};

type NumericKey = Exclude<keyof Offer, "name">;

const INITIAL_OFFERS: Offer[] = [
  {
    name: "Offre A · abonnement",
    initial: 8900,
    requiredOptions: 3600,
    year1: 4680,
    year2: 4980,
    year3: 5280,
    internalHours: 48,
    internalHourCost: 55,
    exitCost: 2500,
    riskReserve: 1800,
  },
  {
    name: "Offre B · forfait",
    initial: 17900,
    requiredOptions: 900,
    year1: 2160,
    year2: 2280,
    year3: 2400,
    internalHours: 28,
    internalHourCost: 55,
    exitCost: 800,
    riskReserve: 900,
  },
  {
    name: "Offre C · premium",
    initial: 24800,
    requiredOptions: 0,
    year1: 1800,
    year2: 1900,
    year3: 2000,
    internalHours: 20,
    internalHourCost: 55,
    exitCost: 500,
    riskReserve: 600,
  },
];

const COST_ROWS: Array<{
  key: NumericKey;
  label: string;
  hint: string;
  unit: "eur" | "hours";
}> = [
  {
    key: "initial",
    label: "Création et lancement",
    hint: "Cadrage, UX/UI, développement, recette, mise en ligne",
    unit: "eur",
  },
  {
    key: "requiredOptions",
    label: "Options nécessaires exclues",
    hint: "Ce qu'il faut rajouter pour retrouver un périmètre comparable",
    unit: "eur",
  },
  {
    key: "year1",
    label: "Récurrent · année 1",
    hint: "Hébergement, licences, maintenance, support, suivi",
    unit: "eur",
  },
  {
    key: "year2",
    label: "Récurrent · année 2",
    hint: "Avec l'indexation réellement prévue au devis",
    unit: "eur",
  },
  {
    key: "year3",
    label: "Récurrent · année 3",
    hint: "Même base de calcul que les deux autres offres",
    unit: "eur",
  },
  {
    key: "internalHours",
    label: "Temps interne à fournir",
    hint: "Contenus, arbitrages, imports, recette et coordination",
    unit: "hours",
  },
  {
    key: "internalHourCost",
    label: "Coût horaire interne chargé",
    hint: "Utilisez la même hypothèse pour les trois offres",
    unit: "eur",
  },
  {
    key: "exitCost",
    label: "Réversibilité et sortie",
    hint: "Exports, documentation, reprise des comptes et migration",
    unit: "eur",
  },
  {
    key: "riskReserve",
    label: "Provision de risques identifiés",
    hint: "Probabilité × impact, jamais un pourcentage arbitraire",
    unit: "eur",
  },
];

function tco(offer: Offer) {
  return (
    offer.initial +
    offer.requiredOptions +
    offer.year1 +
    offer.year2 +
    offer.year3 +
    offer.internalHours * offer.internalHourCost +
    offer.exitCost +
    offer.riskReserve
  );
}

function euro(value: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

async function copyText(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

export function QuoteComparisonWorkbench() {
  const [offers, setOffers] = useState<Offer[]>(INITIAL_OFFERS);
  const [announcement, setAnnouncement] = useState("");

  const totals = offers.map(tco);
  const bestTotal = Math.min(...totals);
  const bestIndex = totals.indexOf(bestTotal);

  function updateOffer(index: number, key: keyof Offer, value: string) {
    setOffers((current) =>
      current.map((offer, offerIndex) =>
        offerIndex === index
          ? {
              ...offer,
              [key]: key === "name" ? value : Math.max(0, Number(value) || 0),
            }
          : offer,
      ),
    );
  }

  async function copyCostGrid() {
    const rows = [
      ["Poste", ...offers.map((offer) => offer.name)],
      ["Création et lancement", ...offers.map((offer) => offer.initial)],
      ["Options nécessaires exclues", ...offers.map((offer) => offer.requiredOptions)],
      ["Récurrent année 1", ...offers.map((offer) => offer.year1)],
      ["Récurrent année 2", ...offers.map((offer) => offer.year2)],
      ["Récurrent année 3", ...offers.map((offer) => offer.year3)],
      ["Heures internes", ...offers.map((offer) => offer.internalHours)],
      ["Coût horaire interne", ...offers.map((offer) => offer.internalHourCost)],
      ["Coût du temps interne", "=B7*B8", "=C7*C8", "=D7*D8"],
      ["Réversibilité et sortie", ...offers.map((offer) => offer.exitCost)],
      ["Provision de risques", ...offers.map((offer) => offer.riskReserve)],
      [
        "TCO 36 mois",
        "=B2+B3+B4+B5+B6+B9+B10+B11",
        "=C2+C3+C4+C5+C6+C9+C10+C11",
        "=D2+D3+D4+D5+D6+D9+D10+D11",
      ],
      [
        "Écart vs offre la moins chère",
        "=B12-MIN($B$12:$D$12)",
        "=C12-MIN($B$12:$D$12)",
        "=D12-MIN($B$12:$D$12)",
      ],
    ];

    await copyText(rows.map((row) => row.join("\t")).join("\n"));
    trackFunnelEvent("white_paper_grid_copy", {
      resource: "comparaison_devis_web_3_ans",
      format: "tsv_clipboard",
    });
    setAnnouncement(
      "Grille copiée. Ouvrez Excel ou Google Sheets, sélectionnez A1 puis collez.",
    );
  }

  async function copyCriteria() {
    const rows = [
      ["Catégorie", "Critère", "Poids", "Offre A (0-3)", "Offre B (0-3)", "Offre C (0-3)", "Preuve ou note"],
      ...QUOTE_CRITERIA.map(([category, criterion, weight]) => [
        category,
        criterion,
        weight,
        "",
        "",
        "",
        "",
      ]),
    ];
    await copyText(rows.map((row) => row.join("\t")).join("\n"));
    trackFunnelEvent("white_paper_checklist_copy", {
      resource: "comparaison_devis_web_3_ans",
      criteria: QUOTE_CRITERIA.length,
    });
    setAnnouncement(
      "Checklist de 40 critères copiée. Collez-la dans un second onglet Excel ou Google Sheets.",
    );
  }

  function resetExample() {
    setOffers(INITIAL_OFFERS.map((offer) => ({ ...offer })));
    setAnnouncement("Exemple fictif réinitialisé.");
  }

  return (
    <section
      aria-labelledby="comparateur-title"
      className="not-prose my-8 overflow-hidden rounded-2xl border border-violet-200 bg-white shadow-sm dark:border-violet-900/70 dark:bg-zinc-950"
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
          <button
            type="button"
            onClick={copyCostGrid}
            className="inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 lg:w-auto dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            <Clipboard className="size-4" aria-hidden="true" />
            Copier pour Excel / Sheets
          </button>
        </div>
      </div>

      <div className="p-4 sm:p-7">
        <div className="overflow-x-auto pb-2">
          <div className="min-w-[680px]">
            <div className="grid grid-cols-[minmax(200px,1.2fr)_repeat(3,minmax(140px,1fr))] gap-px overflow-hidden rounded-xl border border-zinc-200 bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-800">
              <div className="bg-zinc-950 p-3 text-xs font-bold uppercase tracking-wider text-zinc-400">
                Poste comparable
              </div>
              {offers.map((offer, index) => (
                <div key={index} className="bg-zinc-950 p-2">
                  <label className="sr-only" htmlFor={`offer-name-${index}`}>
                    Nom de l&apos;offre {index + 1}
                  </label>
                  <input
                    id={`offer-name-${index}`}
                    value={offer.name}
                    onChange={(event) => updateOffer(index, "name", event.target.value)}
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-2 py-2 text-xs font-semibold text-white outline-none focus:border-violet-400"
                  />
                </div>
              ))}

              {COST_ROWS.map((row) => (
                <div key={row.key} className="contents">
                  <div className="bg-white p-3 dark:bg-zinc-950">
                    <b className="block text-sm text-zinc-900 dark:text-zinc-100">
                      {row.label}
                    </b>
                    <span className="mt-1 block text-xs leading-relaxed text-zinc-500">
                      {row.hint}
                    </span>
                  </div>
                  {offers.map((offer, index) => (
                    <div
                      key={`${row.key}-${index}`}
                      className="flex items-center bg-white p-3 dark:bg-zinc-950"
                    >
                      <label className="sr-only" htmlFor={`${row.key}-${index}`}>
                        {row.label} · {offer.name}
                      </label>
                      <div className="relative w-full">
                        <input
                          id={`${row.key}-${index}`}
                          type="number"
                          min="0"
                          step={row.unit === "hours" ? 1 : 100}
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
                    </div>
                  ))}
                </div>
              ))}

              <div className="bg-violet-50 p-4 dark:bg-violet-950/40">
                <b className="block text-sm text-violet-950 dark:text-violet-100">
                  Coût total sur 36 mois
                </b>
                <span className="mt-1 block text-xs text-violet-700 dark:text-violet-300">
                  Avant comparaison qualitative et critères éliminatoires
                </span>
              </div>
              {totals.map((total, index) => (
                <div
                  key={`total-${index}`}
                  className={`p-4 text-right ${
                    index === bestIndex
                      ? "bg-emerald-50 dark:bg-emerald-950/40"
                      : "bg-violet-50 dark:bg-violet-950/40"
                  }`}
                >
                  <strong className="block font-mono text-lg text-zinc-950 dark:text-white">
                    {euro(total)}
                  </strong>
                  <span
                    className={`mt-1 inline-flex items-center gap-1 text-xs font-semibold ${
                      index === bestIndex
                        ? "text-emerald-700 dark:text-emerald-300"
                        : "text-zinc-500"
                    }`}
                  >
                    {index === bestIndex ? (
                      <>
                        <Check className="size-3" aria-hidden="true" />
                        Moins chère sur 36 mois
                      </>
                    ) : (
                      `+ ${euro(total - bestTotal)}`
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0 max-w-2xl text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
            Dans l&apos;exemple, l&apos;offre B coûte {euro(28880)} sur trois ans :
            elle est {euro(5500)} moins chère que A malgré un prix de lancement
            supérieur. Ce résultat économique ne la rend éligible qu&apos;après
            vérification du périmètre et des preuves.
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

        <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-4 sm:flex sm:items-center sm:justify-between sm:gap-5 dark:border-zinc-800 dark:bg-zinc-900/60">
          <div>
            <h3 className="m-0 text-sm font-semibold text-zinc-950 dark:text-white">
              Deuxième onglet : la checklist pondérée de 40 critères
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              Notez chaque offre de 0 à 3, exigez une preuve et gardez les
              critères éliminatoires hors de la moyenne.
            </p>
          </div>
          <button
            type="button"
            onClick={copyCriteria}
            className="mt-3 inline-flex min-h-10 w-full shrink-0 items-center justify-center gap-2 rounded-lg border border-violet-300 bg-white px-4 py-2 text-sm font-semibold text-violet-800 hover:bg-violet-50 sm:mt-0 sm:w-auto dark:border-violet-800 dark:bg-zinc-950 dark:text-violet-300 dark:hover:bg-violet-950/40"
          >
            <Clipboard className="size-4" aria-hidden="true" />
            Copier les 40 critères
          </button>
        </div>

        <p className="sr-only" role="status" aria-live="polite">
          {announcement}
        </p>
        {announcement && (
          <p className="mt-3 text-center text-xs font-medium text-emerald-700 dark:text-emerald-300">
            {announcement}
          </p>
        )}
      </div>
    </section>
  );
}
