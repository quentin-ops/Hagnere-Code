import comparisonData from "@/data/quote-comparison.json";

export type QuoteScore = 0 | 1 | 2 | 3;

export interface QuoteCriterion {
  category: string;
  criterion: string;
  weight: number;
  proofHint: string;
}

export interface QuoteOfferCosts {
  initial: number;
  requiredOptions: number;
  year1: number;
  year2: number;
  year3: number;
  internalHours: number;
  internalHourCost: number;
  exitCost: number;
  riskReserve: number;
  credits: number;
}

export interface QuoteExampleOffer {
  id: string;
  name: string;
  shortName: string;
  costs: QuoteOfferCosts;
  scores: QuoteScore[];
  eligible: boolean;
  decision: string;
}

export type SpreadsheetFormulaLocale = "fr" | "en";

export const QUOTE_CRITERIA: QuoteCriterion[] = comparisonData.criteria;

export const QUOTE_EXAMPLE_OFFERS: QuoteExampleOffer[] =
  comparisonData.offers.map((offer) => ({
    ...offer,
    scores: offer.scores as QuoteScore[],
  }));

export const QUOTE_CRITERIA_TOTAL_WEIGHT = QUOTE_CRITERIA.reduce(
  (total, criterion) => total + criterion.weight,
  0,
);

export function calculateQuoteTco(costs: QuoteOfferCosts): number {
  return (
    costs.initial +
    costs.requiredOptions +
    costs.year1 +
    costs.year2 +
    costs.year3 +
    costs.internalHours * costs.internalHourCost +
    costs.exitCost +
    costs.riskReserve -
    costs.credits
  );
}

export function calculateQuoteScore(scores: readonly QuoteScore[]): number {
  if (scores.length !== QUOTE_CRITERIA.length) {
    throw new Error(
      `Le nombre de notes (${scores.length}) doit correspondre aux ${QUOTE_CRITERIA.length} critères.`,
    );
  }

  const rawScore = scores.reduce<number>(
    (total, score, index) =>
      total + (score / 3) * QUOTE_CRITERIA[index].weight,
    0,
  );

  return Math.round(rawScore * 10) / 10;
}

function spreadsheetSyntax(locale: SpreadsheetFormulaLocale) {
  return locale === "fr"
    ? {
        if: "SI",
        count: "NB",
        sumProduct: "SOMMEPROD",
        separator: ";",
      }
    : {
        if: "IF",
        count: "COUNT",
        sumProduct: "SUMPRODUCT",
        separator: ",",
      };
}

export function quoteScoreFormula(
  column: string,
  locale: SpreadsheetFormulaLocale = "fr",
): string {
  const lastRow = QUOTE_CRITERIA.length + 1;
  const syntax = spreadsheetSyntax(locale);
  return `=${syntax.if}(${syntax.count}(${column}2:${column}${lastRow})=${QUOTE_CRITERIA.length}${syntax.separator}${syntax.sumProduct}(${column}2:${column}${lastRow}/3${syntax.separator}$C$2:$C$${lastRow})${syntax.separator}"")`;
}

export function quoteTcoFormula(
  column: string,
  locale: SpreadsheetFormulaLocale = "fr",
): string {
  const syntax = spreadsheetSyntax(locale);
  return `=${syntax.if}(${syntax.count}(${column}2:${column}8${syntax.separator}${column}10:${column}12)=10${syntax.separator}${column}2+${column}3+${column}4+${column}5+${column}6+${column}9+${column}10+${column}11-${column}12${syntax.separator}"")`;
}

export function quoteInternalCostFormula(
  column: string,
  locale: SpreadsheetFormulaLocale = "fr",
): string {
  const syntax = spreadsheetSyntax(locale);
  return `=${syntax.if}(${syntax.count}(${column}7:${column}8)=2${syntax.separator}${column}7*${column}8${syntax.separator}"")`;
}

export function quoteCostStatusFormula(
  column: string,
  locale: SpreadsheetFormulaLocale = "fr",
): string {
  const syntax = spreadsheetSyntax(locale);
  return `=${syntax.if}(${syntax.count}(${column}2:${column}8${syntax.separator}${column}10:${column}12)=10${syntax.separator}"Complet"${syntax.separator}"À confirmer — cellule vide")`;
}

export function quoteTcoGapFormula(
  column: string,
  locale: SpreadsheetFormulaLocale = "fr",
): string {
  const syntax = spreadsheetSyntax(locale);
  return `=${syntax.if}(${syntax.count}($B$13:$D$13)=3${syntax.separator}${column}13-MIN($B$13:$D$13)${syntax.separator}"")`;
}
