export const EXCEL_CALCULATOR_DEFAULTS = {
  people: 5,
  hoursPerWeek: 6,
  avgSalary: 45_000,
  errorRate: 15,
  errorCostPerIncident: 250,
};

export const REFERENCE_PROJECT_BUDGET = 28_000;
export const AMORTIZATION_YEARS = 3;
export const PRODUCTIVE_HOURS_PER_YEAR = 1_600;
export const WORKING_WEEKS_PER_YEAR = 48;

export type ExcelCostInputs = {
  people: number;
  hoursPerWeek: number;
  avgSalary: number;
  errorRate: number;
  errorCostPerIncident: number;
};

/** Calcul arithmétique illustratif partagé par l'outil et son teaser. */
export function calculateExcelCost(inputs: ExcelCostInputs) {
  const hourlyCost = inputs.avgSalary / PRODUCTIVE_HOURS_PER_YEAR;
  const annualHours =
    inputs.hoursPerWeek * WORKING_WEEKS_PER_YEAR * inputs.people;
  const timeYearCost = Math.round(annualHours * hourlyCost);
  const incidentsPerYear = Math.round(
    (annualHours * (inputs.errorRate / 100)) / 10,
  );
  const errorYearCost = incidentsPerYear * inputs.errorCostPerIncident;
  const totalYearCost = timeYearCost + errorYearCost;
  const totalThreeYears = totalYearCost * AMORTIZATION_YEARS;
  const grossThreeYearGap = totalThreeYears - REFERENCE_PROJECT_BUDGET;
  const grossBreakEvenMonths =
    (REFERENCE_PROJECT_BUDGET / Math.max(totalYearCost, 1)) * 12;

  return {
    annualHours,
    hourlyCost: Math.round(hourlyCost),
    hourlyCostExact: hourlyCost,
    timeYearCost,
    incidentsPerYear,
    errorYearCost,
    totalYearCost,
    totalThreeYears,
    referenceProjectBudget: REFERENCE_PROJECT_BUDGET,
    grossThreeYearGap,
    grossBreakEvenMonths: Math.round(grossBreakEvenMonths),
  };
}
