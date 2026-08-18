export type AutomationOptionId = "native" | "connector" | "custom";

export interface AutomationOptionAssumptions {
  id: AutomationOptionId;
  label: string;
  externalInitialCost: number;
  internalHours: number;
  monthlyServiceCost: number;
  exitCost: number;
  serviceStartMonth: number;
  rampMonths: number;
  coverageRate: number;
}

export interface AutomationOptionResult {
  activeMonths: number;
  equivalentFullCoverageMonths: number;
  capacityProxy: number;
  economicCost: number;
  netEconomicValue: number;
}

export interface KnownCapacityScenario {
  usefulRate: number;
  annualCapacityProxy: number;
  totalKnownCost: number;
  roiPercent: number;
  monthlyNetAfterKnownRecurringCost: number;
  paybackMonths: number | null;
}

export const PROCESS_AUTOMATION_HOURLY_COST = 44.2;
export const PROCESS_AUTOMATION_ANNUAL_HOURS = 345;
export const PROCESS_AUTOMATION_KNOWN_INITIAL_COST = 8_014.4;
export const PROCESS_AUTOMATION_KNOWN_MONTHLY_COST = 225;

export const AUTOMATION_OPTION_ASSUMPTIONS: AutomationOptionAssumptions[] = [
  {
    id: "native",
    label: "Fonction native",
    externalInitialCost: 1_000,
    internalHours: 16,
    monthlyServiceCost: 40,
    exitCost: 300,
    serviceStartMonth: 1,
    rampMonths: 2,
    coverageRate: 0.25,
  },
  {
    id: "connector",
    label: "Connecteur",
    externalInitialCost: 5_000,
    internalHours: 40,
    monthlyServiceCost: 150,
    exitCost: 1_200,
    serviceStartMonth: 2,
    rampMonths: 3,
    coverageRate: 0.55,
  },
  {
    id: "custom",
    label: "Sur-mesure",
    externalInitialCost: 14_000,
    internalHours: 80,
    monthlyServiceCost: 350,
    exitCost: 2_500,
    serviceStartMonth: 4,
    rampMonths: 6,
    coverageRate: 0.8,
  },
];

function assertFiniteNonNegative(value: number, label: string) {
  if (!Number.isFinite(value) || value < 0) {
    throw new Error(`${label} doit être un nombre positif ou nul`);
  }
}

function assertRate(value: number, label: string) {
  if (!Number.isFinite(value) || value < 0 || value > 1) {
    throw new Error(`${label} doit être compris entre 0 et 1`);
  }
}

function round(value: number, digits = 6) {
  const factor = 10 ** digits;
  return Math.round((value + Number.EPSILON) * factor) / factor;
}

export function calculateAutomationOptionValue(
  annualHours: number,
  horizonMonths: number,
  option: AutomationOptionAssumptions,
  hourlyCost = PROCESS_AUTOMATION_HOURLY_COST,
): AutomationOptionResult {
  assertFiniteNonNegative(annualHours, "annualHours");
  assertFiniteNonNegative(horizonMonths, "horizonMonths");
  assertFiniteNonNegative(hourlyCost, "hourlyCost");
  assertRate(option.coverageRate, "coverageRate");
  if (!Number.isInteger(option.serviceStartMonth) || option.serviceStartMonth < 1) {
    throw new Error("serviceStartMonth doit être un entier supérieur ou égal à 1");
  }
  if (!Number.isInteger(option.rampMonths) || option.rampMonths < 1) {
    throw new Error("rampMonths doit être un entier supérieur ou égal à 1");
  }

  const preparationMonths = option.serviceStartMonth - 1;
  const activeMonths = Math.max(0, horizonMonths - preparationMonths);
  const rampActiveMonths = Math.min(activeMonths, option.rampMonths);
  const rampEquivalentMonths =
    (rampActiveMonths * (rampActiveMonths + 1)) / (2 * option.rampMonths);
  const stabilizedMonths = Math.max(0, activeMonths - option.rampMonths);
  const equivalentFullCoverageMonths =
    rampEquivalentMonths + stabilizedMonths;
  const capacityProxy =
    (annualHours *
      hourlyCost *
      option.coverageRate *
      equivalentFullCoverageMonths) /
    12;
  const economicCost =
    option.externalInitialCost +
    option.internalHours * hourlyCost +
    option.monthlyServiceCost * activeMonths +
    option.exitCost;

  return {
    activeMonths,
    equivalentFullCoverageMonths: round(equivalentFullCoverageMonths),
    capacityProxy: round(capacityProxy),
    economicCost: round(economicCost),
    netEconomicValue: round(capacityProxy - economicCost),
  };
}

export function calculateKnownCapacityScenario(
  usefulRate: number,
  horizonMonths = 36,
): KnownCapacityScenario {
  assertRate(usefulRate, "usefulRate");
  assertFiniteNonNegative(horizonMonths, "horizonMonths");

  const annualCapacityProxy =
    PROCESS_AUTOMATION_ANNUAL_HOURS *
    PROCESS_AUTOMATION_HOURLY_COST *
    usefulRate;
  const totalKnownCost =
    PROCESS_AUTOMATION_KNOWN_INITIAL_COST +
    PROCESS_AUTOMATION_KNOWN_MONTHLY_COST * horizonMonths;
  const horizonYears = horizonMonths / 12;
  const roiPercent =
    totalKnownCost === 0
      ? 0
      : ((annualCapacityProxy * horizonYears - totalKnownCost) /
          totalKnownCost) *
        100;
  const monthlyNetAfterKnownRecurringCost =
    annualCapacityProxy / 12 - PROCESS_AUTOMATION_KNOWN_MONTHLY_COST;
  const paybackMonths =
    monthlyNetAfterKnownRecurringCost > 0
      ? PROCESS_AUTOMATION_KNOWN_INITIAL_COST /
        monthlyNetAfterKnownRecurringCost
      : null;

  return {
    usefulRate,
    annualCapacityProxy: round(annualCapacityProxy),
    totalKnownCost: round(totalKnownCost),
    roiPercent: round(roiPercent),
    monthlyNetAfterKnownRecurringCost: round(
      monthlyNetAfterKnownRecurringCost,
    ),
    paybackMonths: paybackMonths === null ? null : round(paybackMonths),
  };
}

export function calculateKnownBreakEvenUsefulRate(horizonMonths = 36) {
  assertFiniteNonNegative(horizonMonths, "horizonMonths");
  const totalKnownCost =
    PROCESS_AUTOMATION_KNOWN_INITIAL_COST +
    PROCESS_AUTOMATION_KNOWN_MONTHLY_COST * horizonMonths;
  const horizonCapacityValue =
    PROCESS_AUTOMATION_ANNUAL_HOURS *
    PROCESS_AUTOMATION_HOURLY_COST *
    (horizonMonths / 12);

  return horizonCapacityValue === 0
    ? null
    : round(totalKnownCost / horizonCapacityValue);
}
