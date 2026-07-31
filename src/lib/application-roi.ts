export const REQUIRED_APPLICATION_ROI_COST_CATEGORIES = [
  "cadrage",
  "realisation",
  "migration",
  "integrations",
  "formation-change",
  "temps-interne",
  "licences-hebergement",
  "support-maintenance",
  "securite-conformite",
  "evolutions",
  "double-run",
  "sortie",
] as const;

export type ApplicationRoiRequiredCostCategory =
  (typeof REQUIRED_APPLICATION_ROI_COST_CATEGORIES)[number];

export type ApplicationRoiCostCategory =
  | ApplicationRoiRequiredCostCategory
  | "autre";

export type ApplicationRoiCostKind = "cash" | "internal-opportunity";

export type ApplicationRoiCostTiming =
  | "decision"
  | "go-live"
  | "monthly-active"
  | "month"
  | "monthly-range"
  | "exit";

export type ApplicationRoiCostKnowledge =
  | "known"
  | "not-applicable"
  | "unknown";

export interface ApplicationRoiCostItem {
  id: string;
  label: string;
  category: ApplicationRoiCostCategory;
  /**
   * Use only when one indivisible quote line genuinely covers several
   * required families. It prevents inventing an unsupported allocation.
   */
  alsoCovers?: ApplicationRoiRequiredCostCategory[];
  kind: ApplicationRoiCostKind;
  timing: ApplicationRoiCostTiming;
  knowledge: ApplicationRoiCostKnowledge;
  amount: number | null;
  /** Required only when timing is `month`. Month 0 is the decision instant. */
  month?: number;
  /** Inclusive range, required only when timing is `monthly-range`. */
  startMonth?: number;
  /** Inclusive range, required only when timing is `monthly-range`. */
  endMonth?: number;
}

export interface ApplicationRoiInputs {
  /** Month 0 is the decision instant; months 1..H are observed periods. */
  horizonMonths: number | null;
  /** First active period. H=48 and g=5 produce 44 active months. */
  goLiveMonth: number | null;
  /** 0 means full effect from go-live; otherwise gain realization is linear. */
  rampMonths: number | null;
  annualHoursOnTask: number | null;
  /** Marginal cash outlay that can truly disappear per labor hour. */
  avoidableCashHourlyOutlay: number | null;
  /** Justified economic value of one hour usefully reallocated. */
  economicHourlyValue: number | null;
  technicallyRemovablePct: number | null;
  adoptionPct: number | null;
  /** Destination 1 for eligible labor; exclusive with useful reallocation. */
  laborCashRemovalPct: number | null;
  /** Destination 2 for eligible labor; exclusive with cash removal. */
  usefulReallocationPct: number | null;
  annualAvoidableCashCost: number | null;
  cashAvoidanceRealizationPct: number | null;
  costs: ApplicationRoiCostItem[];
}

export type RoiValueStatus = "VALUE" | "NOT_APPLICABLE";

export interface RoiValue {
  status: RoiValueStatus;
  value: number | null;
}

export interface ApplicationRoiMonthlyFlow {
  month: number;
  active: boolean;
  rampFactor: number;
  cashCosts: number;
  internalOpportunityCosts: number;
  economicCosts: number;
  avoidedCashBenefits: number;
  laborCashBenefits: number;
  usefulCapacityBenefits: number;
  cashBenefits: number;
  economicBenefits: number;
  cashNetFlow: number;
  economicNetFlow: number;
  cumulativeCash: number;
  cumulativeEconomic: number;
}

export interface ApplicationRoiOkResult {
  status: "OK";
  activeMonths: number;
  cashTco: number;
  economicTco: number;
  avoidedCashBenefits: number;
  laborCashBenefits: number;
  usefulCapacityBenefits: number;
  cashBenefits: number;
  economicBenefits: number;
  cashRoiPct: RoiValue;
  economicRoiPct: RoiValue;
  firstCashCrossingMonth: number | null;
  durableCashPaybackMonth: number | null;
  cashPaybackStatus: ApplicationRoiPaybackStatus;
  firstEconomicCrossingMonth: number | null;
  durableEconomicPaybackMonth: number | null;
  economicPaybackStatus: ApplicationRoiPaybackStatus;
  monthlyFlows: ApplicationRoiMonthlyFlow[];
}

export interface ApplicationRoiStopResult {
  status: "STOP";
  reasons: string[];
}

export type ApplicationRoiResult =
  | ApplicationRoiOkResult
  | ApplicationRoiStopResult;

export type ApplicationRoiPaybackStatus =
  | "NOT_APPLICABLE"
  | "NO_FINANCING_DEFICIT"
  | "REACHED"
  | "NOT_REACHED";

const PERCENTAGE_FIELDS = [
  "technicallyRemovablePct",
  "adoptionPct",
  "laborCashRemovalPct",
  "usefulReallocationPct",
  "cashAvoidanceRealizationPct",
] as const;

const NON_NEGATIVE_FIELDS = [
  "annualHoursOnTask",
  "avoidableCashHourlyOutlay",
  "economicHourlyValue",
  "annualAvoidableCashCost",
] as const;

const INPUT_LABELS: Record<
  (typeof PERCENTAGE_FIELDS)[number] | (typeof NON_NEGATIVE_FIELDS)[number],
  string
> = {
  technicallyRemovablePct: "La part techniquement retirable",
  adoptionPct: "L’adoption moyenne",
  laborCashRemovalPct:
    "La part des heures donnant lieu à une dépense réellement supprimée",
  usefulReallocationPct: "La part des heures réaffectées utilement",
  cashAvoidanceRealizationPct: "La part des décaissements réellement évités",
  annualHoursOnTask: "Le volume annuel d’heures observées",
  avoidableCashHourlyOutlay: "Le décaissement horaire marginal supprimable",
  economicHourlyValue: "La valeur économique d’une heure utile",
  annualAvoidableCashCost: "Les décaissements annuels évitables hors main-d’œuvre",
};

const COST_CATEGORY_LABELS: Record<
  ApplicationRoiRequiredCostCategory,
  string
> = {
  cadrage: "cadrage",
  realisation: "réalisation",
  migration: "migration",
  integrations: "intégrations",
  "formation-change": "formation et conduite du changement",
  "temps-interne": "temps interne",
  "licences-hebergement": "licences et hébergement",
  "support-maintenance": "support et maintenance",
  "securite-conformite": "sécurité et conformité",
  evolutions: "évolutions",
  "double-run": "double exploitation",
  sortie: "sortie et réversibilité",
};

const NUMERIC_RANGE_STOP_REASON =
  "Les entrées produisent une valeur hors de la plage numérique exploitable du calculateur : réduisez leur échelle avant de recalculer.";

function percentage(value: number): number {
  return value / 100;
}

function hasOnlyFiniteValues(values: number[]): boolean {
  return values.every((value) => Number.isFinite(value));
}

function numericRangeStop(): ApplicationRoiStopResult {
  return { status: "STOP", reasons: [NUMERIC_RANGE_STOP_REASON] };
}

function roiValue(benefits: number, tco: number): RoiValue {
  if (tco === 0) {
    return { status: "NOT_APPLICABLE", value: null };
  }

  return {
    status: "VALUE",
    value: ((benefits - tco) / tco) * 100,
  };
}

function crossingAfterInvestment(
  flows: ApplicationRoiMonthlyFlow[],
  key: "cumulativeCash" | "cumulativeEconomic",
  tco: number,
  durable: boolean,
): number | null {
  if (tco === 0) return null;

  let hasBeenNegative = false;
  for (let index = 0; index < flows.length; index += 1) {
    if (flows[index][key] < 0) {
      hasBeenNegative = true;
      continue;
    }

    if (
      hasBeenNegative &&
      (!durable || flows.slice(index).every((flow) => flow[key] >= 0))
    ) {
      return flows[index].month;
    }
  }

  return null;
}

function paybackStatus(
  flows: ApplicationRoiMonthlyFlow[],
  key: "cumulativeCash" | "cumulativeEconomic",
  tco: number,
  durablePaybackMonth: number | null,
): ApplicationRoiPaybackStatus {
  if (tco === 0) return "NOT_APPLICABLE";
  if (!flows.some((flow) => flow[key] < 0)) return "NO_FINANCING_DEFICIT";
  return durablePaybackMonth === null ? "NOT_REACHED" : "REACHED";
}

function validatePeriod(input: ApplicationRoiInputs, reasons: string[]) {
  const horizon = input.horizonMonths;
  const goLive = input.goLiveMonth;
  const ramp = input.rampMonths;

  if (
    horizon === null ||
    !Number.isInteger(horizon) ||
    horizon < 1 ||
    horizon > 48
  ) {
    reasons.push("L’horizon doit être un nombre entier compris entre 1 et 48.");
  }

  if (
    goLive === null ||
    !Number.isInteger(goLive) ||
    goLive < 1 ||
    (horizon !== null && Number.isInteger(horizon) && goLive > horizon)
  ) {
    reasons.push(
      "Le mois de mise en service doit être un entier compris dans l’horizon.",
    );
  }

  if (ramp === null || !Number.isInteger(ramp) || ramp < 0) {
    reasons.push(
      "La rampe de réalisation des gains doit être un nombre entier positif ou nul.",
    );
  }
}

function validateCostTiming(
  cost: ApplicationRoiCostItem,
  horizon: number | null,
  reasons: string[],
) {
  if (cost.knowledge !== "known" || horizon === null) return;

  if (
    cost.timing === "month" &&
    (!Number.isInteger(cost.month) ||
      (cost.month as number) < 0 ||
      (cost.month as number) > horizon)
  ) {
    reasons.push(
      `Le mois du coût « ${cost.label} » doit être compris entre 0 et l’horizon.`,
    );
  }

  if (
    cost.timing === "monthly-range" &&
    (!Number.isInteger(cost.startMonth) ||
      !Number.isInteger(cost.endMonth) ||
      (cost.startMonth as number) < 0 ||
      (cost.endMonth as number) < (cost.startMonth as number) ||
      (cost.endMonth as number) > horizon)
  ) {
    reasons.push(
      `La période du coût « ${cost.label} » doit être une plage inclusive valide dans l’horizon.`,
    );
  }
}

function validate(input: ApplicationRoiInputs): string[] {
  const reasons: string[] = [];
  validatePeriod(input, reasons);

  for (const key of PERCENTAGE_FIELDS) {
    const value = input[key];
    if (value === null) {
      reasons.push(
        `${INPUT_LABELS[key]} est inconnue : le calcul doit s’arrêter.`,
      );
    } else if (!Number.isFinite(value) || value < 0 || value > 100) {
      reasons.push(`${INPUT_LABELS[key]} doit être comprise entre 0 et 100 %.`);
    }
  }

  for (const key of NON_NEGATIVE_FIELDS) {
    const value = input[key];
    if (value === null) {
      reasons.push(
        `${INPUT_LABELS[key]} est inconnu : le calcul doit s’arrêter.`,
      );
    } else if (!Number.isFinite(value) || value < 0) {
      reasons.push(`${INPUT_LABELS[key]} doit être un nombre positif ou nul.`);
    }
  }

  if (
    input.laborCashRemovalPct !== null &&
    input.usefulReallocationPct !== null &&
    Number.isFinite(input.laborCashRemovalPct) &&
    Number.isFinite(input.usefulReallocationPct) &&
    input.laborCashRemovalPct + input.usefulReallocationPct > 100
  ) {
    reasons.push(
      "Le retrait de trésorerie et la réaffectation utile sont deux destinations exclusives : leur somme ne peut pas dépasser 100 %.",
    );
  }

  const seenCostIds = new Set<string>();
  const seenRequiredCategories = new Set<ApplicationRoiRequiredCostCategory>();

  for (const cost of input.costs) {
    const id = cost.id.trim();
    if (!id) {
      reasons.push("Chaque coût doit avoir un identifiant non vide.");
    } else if (seenCostIds.has(id)) {
      reasons.push(`Le coût ${id} est présent plusieurs fois.`);
    } else {
      seenCostIds.add(id);
    }

    if (
      REQUIRED_APPLICATION_ROI_COST_CATEGORIES.includes(
        cost.category as ApplicationRoiRequiredCostCategory,
      )
    ) {
      seenRequiredCategories.add(
        cost.category as ApplicationRoiRequiredCostCategory,
      );
    }
    for (const coveredCategory of cost.alsoCovers ?? []) {
      seenRequiredCategories.add(coveredCategory);
    }

    if (cost.knowledge === "unknown") {
      reasons.push(
        `Le coût « ${cost.label} » est inconnu : renseignez-le ou marquez-le explicitement non applicable.`,
      );
    } else if (cost.knowledge === "not-applicable") {
      if (cost.amount !== null) {
        reasons.push(
          `Le coût « ${cost.label} » marqué non applicable doit garder une valeur nulle.`,
        );
      }
    } else if (
      cost.amount === null ||
      !Number.isFinite(cost.amount) ||
      cost.amount < 0
    ) {
      reasons.push(
        `Le coût connu « ${cost.label} » doit être un nombre positif ou nul.`,
      );
    }

    validateCostTiming(cost, input.horizonMonths, reasons);
  }

  for (const category of REQUIRED_APPLICATION_ROI_COST_CATEGORIES) {
    if (!seenRequiredCategories.has(category)) {
      reasons.push(
        `La famille de coût « ${COST_CATEGORY_LABELS[category]} » doit être renseignée, connue à zéro ou explicitement non applicable.`,
      );
    }
  }

  return reasons;
}

function costApplies(
  cost: ApplicationRoiCostItem,
  month: number,
  goLive: number,
  horizon: number,
): boolean {
  if (cost.knowledge !== "known") return false;

  switch (cost.timing) {
    case "decision":
      return month === 0;
    case "go-live":
      return month === goLive;
    case "monthly-active":
      return month >= goLive;
    case "month":
      return month === cost.month;
    case "monthly-range":
      return (
        month >= (cost.startMonth as number) &&
        month <= (cost.endMonth as number)
      );
    case "exit":
      return month === horizon;
  }
}

export function calculateApplicationRoi(
  input: ApplicationRoiInputs,
): ApplicationRoiResult {
  const reasons = validate(input);
  if (reasons.length > 0) {
    return { status: "STOP", reasons };
  }

  const horizonMonths = input.horizonMonths as number;
  const goLiveMonth = input.goLiveMonth as number;
  const rampMonths = input.rampMonths as number;
  const annualHoursOnTask = input.annualHoursOnTask as number;
  const avoidableCashHourlyOutlay =
    input.avoidableCashHourlyOutlay as number;
  const economicHourlyValue = input.economicHourlyValue as number;
  const technicallyRemovablePct = input.technicallyRemovablePct as number;
  const adoptionPct = input.adoptionPct as number;
  const laborCashRemovalPct = input.laborCashRemovalPct as number;
  const usefulReallocationPct = input.usefulReallocationPct as number;
  const annualAvoidableCashCost = input.annualAvoidableCashCost as number;
  const cashAvoidanceRealizationPct =
    input.cashAvoidanceRealizationPct as number;

  const benefitEligibility =
    percentage(technicallyRemovablePct) * percentage(adoptionPct);
  const eligibleHoursPerMonth =
    (annualHoursOnTask * benefitEligibility) / 12;
  const monthlyPotentialLaborCash =
    eligibleHoursPerMonth * avoidableCashHourlyOutlay;
  const monthlyPotentialCapacity =
    eligibleHoursPerMonth * economicHourlyValue;
  const monthlyAvoidableCash =
    (annualAvoidableCashCost *
      percentage(adoptionPct) *
      percentage(cashAvoidanceRealizationPct)) /
    12;

  if (
    !hasOnlyFiniteValues([
      benefitEligibility,
      eligibleHoursPerMonth,
      monthlyPotentialLaborCash,
      monthlyPotentialCapacity,
      monthlyAvoidableCash,
    ])
  ) {
    return numericRangeStop();
  }

  const activeMonths = horizonMonths - goLiveMonth + 1;
  const monthlyFlows: ApplicationRoiMonthlyFlow[] = [];

  let cumulativeCash = 0;
  let cumulativeEconomic = 0;

  for (let month = 0; month <= horizonMonths; month += 1) {
    const active = month >= goLiveMonth;
    const rampFactor = active
      ? rampMonths > 0
        ? Math.min(1, (month - goLiveMonth + 1) / rampMonths)
        : 1
      : 0;

    let cashCosts = 0;
    let internalOpportunityCosts = 0;

    for (const cost of input.costs) {
      if (
        cost.amount === null ||
        !costApplies(cost, month, goLiveMonth, horizonMonths)
      ) {
        continue;
      }

      if (cost.kind === "cash") {
        cashCosts += cost.amount;
      } else {
        internalOpportunityCosts += cost.amount;
      }
    }

    if (!hasOnlyFiniteValues([cashCosts, internalOpportunityCosts])) {
      return numericRangeStop();
    }

    const avoidedCashBenefits = active
      ? monthlyAvoidableCash * rampFactor
      : 0;
    const laborCashBenefits = active
      ? monthlyPotentialLaborCash *
        percentage(laborCashRemovalPct) *
        rampFactor
      : 0;
    const usefulCapacityBenefits = active
      ? monthlyPotentialCapacity *
        percentage(usefulReallocationPct) *
        rampFactor
      : 0;
    const cashBenefits = avoidedCashBenefits + laborCashBenefits;
    const economicBenefits = cashBenefits + usefulCapacityBenefits;
    const economicCosts = cashCosts + internalOpportunityCosts;
    const cashNetFlow = cashBenefits - cashCosts;
    const economicNetFlow = economicBenefits - economicCosts;

    cumulativeCash += cashNetFlow;
    cumulativeEconomic += economicNetFlow;

    if (
      !hasOnlyFiniteValues([
        rampFactor,
        cashCosts,
        internalOpportunityCosts,
        economicCosts,
        avoidedCashBenefits,
        laborCashBenefits,
        usefulCapacityBenefits,
        cashBenefits,
        economicBenefits,
        cashNetFlow,
        economicNetFlow,
        cumulativeCash,
        cumulativeEconomic,
      ])
    ) {
      return numericRangeStop();
    }

    monthlyFlows.push({
      month,
      active,
      rampFactor,
      cashCosts,
      internalOpportunityCosts,
      economicCosts,
      avoidedCashBenefits,
      laborCashBenefits,
      usefulCapacityBenefits,
      cashBenefits,
      economicBenefits,
      cashNetFlow,
      economicNetFlow,
      cumulativeCash,
      cumulativeEconomic,
    });
  }

  const cashTco = monthlyFlows.reduce(
    (total, flow) => total + flow.cashCosts,
    0,
  );
  const economicTco = monthlyFlows.reduce(
    (total, flow) => total + flow.economicCosts,
    0,
  );
  const avoidedCashBenefits = monthlyFlows.reduce(
    (total, flow) => total + flow.avoidedCashBenefits,
    0,
  );
  const laborCashBenefits = monthlyFlows.reduce(
    (total, flow) => total + flow.laborCashBenefits,
    0,
  );
  const usefulCapacityBenefits = monthlyFlows.reduce(
    (total, flow) => total + flow.usefulCapacityBenefits,
    0,
  );
  const cashBenefits = avoidedCashBenefits + laborCashBenefits;
  const economicBenefits = cashBenefits + usefulCapacityBenefits;
  const cashRoiPct = roiValue(cashBenefits, cashTco);
  const economicRoiPct = roiValue(economicBenefits, economicTco);

  if (
    !hasOnlyFiniteValues([
      cashTco,
      economicTco,
      avoidedCashBenefits,
      laborCashBenefits,
      usefulCapacityBenefits,
      cashBenefits,
      economicBenefits,
      ...(cashRoiPct.value === null ? [] : [cashRoiPct.value]),
      ...(economicRoiPct.value === null ? [] : [economicRoiPct.value]),
    ])
  ) {
    return numericRangeStop();
  }

  const firstCashCrossingMonth = crossingAfterInvestment(
    monthlyFlows,
    "cumulativeCash",
    cashTco,
    false,
  );
  const durableCashPaybackMonth = crossingAfterInvestment(
    monthlyFlows,
    "cumulativeCash",
    cashTco,
    true,
  );
  const firstEconomicCrossingMonth = crossingAfterInvestment(
    monthlyFlows,
    "cumulativeEconomic",
    economicTco,
    false,
  );
  const durableEconomicPaybackMonth = crossingAfterInvestment(
    monthlyFlows,
    "cumulativeEconomic",
    economicTco,
    true,
  );

  return {
    status: "OK",
    activeMonths,
    cashTco,
    economicTco,
    avoidedCashBenefits,
    laborCashBenefits,
    usefulCapacityBenefits,
    cashBenefits,
    economicBenefits,
    cashRoiPct,
    economicRoiPct,
    firstCashCrossingMonth,
    durableCashPaybackMonth,
    cashPaybackStatus: paybackStatus(
      monthlyFlows,
      "cumulativeCash",
      cashTco,
      durableCashPaybackMonth,
    ),
    firstEconomicCrossingMonth,
    durableEconomicPaybackMonth,
    economicPaybackStatus: paybackStatus(
      monthlyFlows,
      "cumulativeEconomic",
      economicTco,
      durableEconomicPaybackMonth,
    ),
    monthlyFlows,
  };
}
