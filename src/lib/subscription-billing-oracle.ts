export const SUBSCRIPTION_BILLING_ORACLE_VERSION =
  "subscription-billing-r4-2026-07-28";
export const SUBSCRIPTION_BILLING_SOURCES_VERIFIED_ON = "2026-07-28";

export type BillingVerdict = "pass" | "review" | "stop";
export type BillingIssueSeverity = "review" | "stop";

export interface BillingIssue {
  code:
    | "missing-value"
    | "missing-currency"
    | "not-finite"
    | "negative-value"
    | "credits-exceed-invoices"
    | "unexplained-balance"
    | "unallocated-cash"
    | "access-policy-missing"
    | "access-mismatch"
    | "tax-rule-unvalidated"
    | "late-financial-event"
    | "idempotency-conflict"
    | "mixed-currency"
    | "incomparable-option";
  severity: BillingIssueSeverity;
  message: string;
  fields: string[];
}

export interface BillingPeriodInput {
  currency: string | null;
  openingReceivable: number | null;
  grossInvoices: number | null;
  creditNotes: number | null;
  allocatedPayments: number | null;
  refunds: number | null;
  reportedClosingReceivable: number | null;
  unallocatedCash: number | null;
  accessMismatchCount: number | null;
  accessPolicyValidated: boolean | null;
  taxRuleRequired: boolean | null;
  taxRuleValidated: boolean | null;
  periodClosed: boolean;
  lateFinancialEvent: boolean;
  idempotencyConflict: boolean;
}

export interface BillingReconciliationResult {
  verdict: BillingVerdict;
  complete: boolean;
  issues: BillingIssue[];
  netInvoiced: number | null;
  cashNet: number | null;
  expectedClosingReceivable: number | null;
  reconciliationDelta: number | null;
}

const BILLING_MONEY_FIELDS = [
  "openingReceivable",
  "grossInvoices",
  "creditNotes",
  "allocatedPayments",
  "refunds",
  "reportedClosingReceivable",
  "unallocatedCash",
] as const;

function normalizeCurrencySyntax(value: string | null) {
  const cleaned = value?.trim().toUpperCase() ?? "";
  return /^[A-Z]{3}$/.test(cleaned) ? cleaned : null;
}

function hasStop(issues: BillingIssue[]) {
  return issues.some((issue) => issue.severity === "stop");
}

export function reconcileBillingPeriod(
  input: BillingPeriodInput,
): BillingReconciliationResult {
  const issues: BillingIssue[] = [];
  const currency = normalizeCurrencySyntax(input.currency);

  if (currency === null) {
    issues.push({
      code: "missing-currency",
      severity: "review",
      message:
        "La devise manque ou n’utilise pas le format attendu à trois lettres. La validité du code monétaire doit être contrôlée séparément.",
      fields: ["currency"],
    });
  }

  for (const field of BILLING_MONEY_FIELDS) {
    const value = input[field];
    if (value === null) {
      issues.push({
        code: "missing-value",
        severity: "review",
        message: `${field} reste inconnu ; il ne devient pas zéro.`,
        fields: [field],
      });
    } else if (!Number.isFinite(value)) {
      issues.push({
        code: "not-finite",
        severity: "stop",
        message: `${field} doit être un nombre fini.`,
        fields: [field],
      });
    } else if (value < 0) {
      issues.push({
        code: "negative-value",
        severity: "stop",
        message: `${field} ne peut pas être négatif dans ce modèle.`,
        fields: [field],
      });
    }
  }

  if (input.accessMismatchCount === null) {
    issues.push({
      code: "missing-value",
      severity: "review",
      message:
        "Le nombre de droits incohérents n’a pas été contrôlé ; il reste inconnu.",
      fields: ["accessMismatchCount"],
    });
  } else if (
    !Number.isFinite(input.accessMismatchCount) ||
    input.accessMismatchCount < 0 ||
    !Number.isInteger(input.accessMismatchCount)
  ) {
    issues.push({
      code: "not-finite",
      severity: "stop",
      message:
        "Le nombre de droits incohérents doit être un entier positif ou nul.",
      fields: ["accessMismatchCount"],
    });
  } else if (input.accessMismatchCount > 0) {
    issues.push({
      code: "access-mismatch",
      severity: "stop",
      message:
        "Au moins un droit d’accès contredit la règle commerciale : corrigez avant de clôturer.",
      fields: ["accessMismatchCount"],
    });
  }

  if (input.accessPolicyValidated !== true) {
    issues.push({
      code: "access-policy-missing",
      severity: "stop",
      message:
        "Aucune politique d’accès validée ne relie paiement, contrat et droits.",
      fields: ["accessPolicyValidated"],
    });
  }

  if (input.taxRuleRequired === null) {
    issues.push({
      code: "tax-rule-unvalidated",
      severity: "stop",
      message:
        "La qualification fiscale du flux reste inconnue. Indiquez explicitement si une validation est requise.",
      fields: ["taxRuleRequired"],
    });
  } else if (input.taxRuleRequired && input.taxRuleValidated !== true) {
    issues.push({
      code: "tax-rule-unvalidated",
      severity: "stop",
      message:
        "Une qualification fiscale est requise mais n’a pas été validée par le professionnel compétent.",
      fields: ["taxRuleRequired", "taxRuleValidated"],
    });
  }

  if (input.periodClosed && input.lateFinancialEvent) {
    issues.push({
      code: "late-financial-event",
      severity: "stop",
      message:
        "Un événement financier tardif ne doit pas réécrire silencieusement une période clôturée.",
      fields: ["periodClosed", "lateFinancialEvent"],
    });
  }

  if (input.idempotencyConflict) {
    issues.push({
      code: "idempotency-conflict",
      severity: "stop",
      message:
        "La même clé métier porte deux contenus différents. Mettez le flux en STOP et arbitrez la source.",
      fields: ["idempotencyConflict"],
    });
  }

  const moneyComplete =
    currency !== null &&
    BILLING_MONEY_FIELDS.every((field) => {
      const value = input[field];
      return value !== null && Number.isFinite(value) && value >= 0;
    });

  if (!moneyComplete) {
    return {
      verdict: hasStop(issues) ? "stop" : "review",
      complete: false,
      issues,
      netInvoiced: null,
      cashNet: null,
      expectedClosingReceivable: null,
      reconciliationDelta: null,
    };
  }

  const openingReceivable = input.openingReceivable as number;
  const grossInvoices = input.grossInvoices as number;
  const creditNotes = input.creditNotes as number;
  const allocatedPayments = input.allocatedPayments as number;
  const refunds = input.refunds as number;
  const reportedClosingReceivable = input.reportedClosingReceivable as number;
  const unallocatedCash = input.unallocatedCash as number;

  if (creditNotes > grossInvoices + openingReceivable) {
    issues.push({
      code: "credits-exceed-invoices",
      severity: "stop",
      message:
        "Les avoirs dépassent les factures et la créance d’ouverture documentées.",
      fields: ["creditNotes", "grossInvoices", "openingReceivable"],
    });
  }

  const netInvoiced = grossInvoices - creditNotes;
  const cashNet = allocatedPayments - refunds;
  const expectedClosingReceivable =
    openingReceivable + netInvoiced - allocatedPayments + refunds;
  const reconciliationDelta =
    reportedClosingReceivable - expectedClosingReceivable;

  if (
    ![
      netInvoiced,
      cashNet,
      expectedClosingReceivable,
      reconciliationDelta,
    ].every(Number.isFinite)
  ) {
    issues.push({
      code: "not-finite",
      severity: "stop",
      message:
        "Le rapprochement produit un débordement arithmétique. Réduisez l’échelle ou contrôlez les montants sources avant de conclure.",
      fields: [
        "netInvoiced",
        "cashNet",
        "expectedClosingReceivable",
        "reconciliationDelta",
      ],
    });
    return {
      verdict: "stop",
      complete: false,
      issues,
      netInvoiced: null,
      cashNet: null,
      expectedClosingReceivable: null,
      reconciliationDelta: null,
    };
  }

  if (Math.abs(reconciliationDelta) >= 0.01) {
    issues.push({
      code: "unexplained-balance",
      severity: "stop",
      message: `L’écart inexpliqué est de ${reconciliationDelta.toFixed(
        2,
      )} ${currency}.`,
      fields: [
        "openingReceivable",
        "grossInvoices",
        "creditNotes",
        "allocatedPayments",
        "refunds",
        "reportedClosingReceivable",
      ],
    });
  }

  if (unallocatedCash > 0) {
    issues.push({
      code: "unallocated-cash",
      severity: "review",
      message:
        "Du cash reste sans facture affectée. Il reste visible mais ne solde aucune créance.",
      fields: ["unallocatedCash"],
    });
  }

  return {
    verdict: hasStop(issues) ? "stop" : issues.length > 0 ? "review" : "pass",
    complete: true,
    issues,
    netInvoiced,
    cashNet,
    expectedClosingReceivable,
    reconciliationDelta,
  };
}

export type BillingTcoOptionId =
  "manual" | "hosted" | "hosted_with_layer" | "specific";

export interface BillingTcoOptionInput {
  id: BillingTcoOptionId;
  label: string;
  setupCost: number | null;
  fixedMonthlyCost: number | null;
  fixedInternalHoursMonthly: number | null;
  minutesPerClientMonthly: number | null;
  variableFeeRate: number | null;
}

export interface SubscriptionBillingTcoInputs {
  currency: string | null;
  horizonMonths: number | null;
  averageActiveClients: number | null;
  averageBilledPerClientMonthly: number | null;
  internalHourlyCost: number | null;
  options: BillingTcoOptionInput[];
}

export interface BillingTcoOptionResult {
  id: BillingTcoOptionId;
  label: string;
  comparable: boolean;
  issues: BillingIssue[];
  setupCost: number | null;
  recurringCost: number | null;
  internalTimeCost: number | null;
  variableCost: number | null;
  totalCost: number | null;
}

export interface BillingTcoResult {
  complete: boolean;
  issues: BillingIssue[];
  optionResults: BillingTcoOptionResult[];
  lowestComparableOptionId: BillingTcoOptionId | null;
}

function invalidTcoValue(value: number | null) {
  return value === null || !Number.isFinite(value) || value < 0;
}

export function calculateSubscriptionBillingTco(
  input: SubscriptionBillingTcoInputs,
): BillingTcoResult {
  const issues: BillingIssue[] = [];
  const commonFields = [
    ["horizonMonths", input.horizonMonths],
    ["averageActiveClients", input.averageActiveClients],
    ["averageBilledPerClientMonthly", input.averageBilledPerClientMonthly],
    ["internalHourlyCost", input.internalHourlyCost],
  ] as const;

  if (normalizeCurrencySyntax(input.currency) === null) {
    issues.push({
      code: "missing-currency",
      severity: "review",
      message: "La devise du comparatif TCO manque.",
      fields: ["currency"],
    });
  }

  for (const [field, value] of commonFields) {
    if (invalidTcoValue(value) || (field === "horizonMonths" && value === 0)) {
      const missing = value === null;
      const nonFinite = value !== null && !Number.isFinite(value);
      issues.push({
        code: missing
          ? "missing-value"
          : nonFinite
            ? "not-finite"
            : "negative-value",
        severity: missing ? "review" : "stop",
        message:
          field === "horizonMonths"
            ? "horizonMonths doit être un nombre fini strictement positif."
            : `${field} doit être renseigné avec une valeur positive ou nulle.`,
        fields: [field],
      });
    }
  }

  const commonValid =
    normalizeCurrencySyntax(input.currency) !== null &&
    commonFields.every(
      ([field, value]) =>
        !invalidTcoValue(value) && !(field === "horizonMonths" && value === 0),
    );

  const optionResults = input.options.map((option): BillingTcoOptionResult => {
    const optionIssues: BillingIssue[] = [];
    const optionFields = [
      ["setupCost", option.setupCost],
      ["fixedMonthlyCost", option.fixedMonthlyCost],
      ["fixedInternalHoursMonthly", option.fixedInternalHoursMonthly],
      ["minutesPerClientMonthly", option.minutesPerClientMonthly],
      ["variableFeeRate", option.variableFeeRate],
    ] as const;

    for (const [field, value] of optionFields) {
      if (invalidTcoValue(value)) {
        const nonFinite = value !== null && !Number.isFinite(value);
        optionIssues.push({
          code: nonFinite ? "not-finite" : "incomparable-option",
          severity:
            nonFinite || (value !== null && value < 0) ? "stop" : "review",
          message: `${option.label} est visible mais exclue du classement : ${field} manque ou est invalide.`,
          fields: [`${option.id}.${field}`],
        });
      }
    }

    const comparable =
      commonValid &&
      optionIssues.length === 0 &&
      (input.horizonMonths as number) > 0;

    if (!comparable) {
      return {
        id: option.id,
        label: option.label,
        comparable: false,
        issues: optionIssues,
        setupCost: null,
        recurringCost: null,
        internalTimeCost: null,
        variableCost: null,
        totalCost: null,
      };
    }

    const horizonMonths = input.horizonMonths as number;
    const clients = input.averageActiveClients as number;
    const billedPerClient = input.averageBilledPerClientMonthly as number;
    const hourlyCost = input.internalHourlyCost as number;
    const setupCost = option.setupCost as number;
    const recurringCost = (option.fixedMonthlyCost as number) * horizonMonths;
    const internalTimeCost =
      horizonMonths *
      hourlyCost *
      ((option.fixedInternalHoursMonthly as number) +
        (clients * (option.minutesPerClientMonthly as number)) / 60);
    const variableCost =
      horizonMonths *
      clients *
      billedPerClient *
      (option.variableFeeRate as number);
    const totalCost =
      setupCost + recurringCost + internalTimeCost + variableCost;

    if (
      ![
        setupCost,
        recurringCost,
        internalTimeCost,
        variableCost,
        totalCost,
      ].every(Number.isFinite)
    ) {
      optionIssues.push({
        code: "not-finite",
        severity: "stop",
        message: `${option.label} produit un débordement arithmétique et sort du classement.`,
        fields: [`${option.id}.derived-costs`],
      });
      return {
        id: option.id,
        label: option.label,
        comparable: false,
        issues: optionIssues,
        setupCost: null,
        recurringCost: null,
        internalTimeCost: null,
        variableCost: null,
        totalCost: null,
      };
    }

    return {
      id: option.id,
      label: option.label,
      comparable: true,
      issues: optionIssues,
      setupCost,
      recurringCost,
      internalTimeCost,
      variableCost,
      totalCost,
    };
  });

  const ranked = optionResults
    .filter(
      (result): result is BillingTcoOptionResult & { totalCost: number } =>
        result.comparable && result.totalCost !== null,
    )
    .sort((a, b) => a.totalCost - b.totalCost);

  return {
    complete:
      commonValid &&
      optionResults.length > 0 &&
      optionResults.every((result) => result.comparable),
    issues: [...issues, ...optionResults.flatMap((result) => result.issues)],
    optionResults,
    lowestComparableOptionId: ranked[0]?.id ?? null,
  };
}

export interface BillingThresholdResult {
  thresholdClients: number | null;
  firstWholeClient: number | null;
  belowThresholdOptionId: BillingTcoOptionId | null;
  aboveThresholdOptionId: BillingTcoOptionId | null;
  reason:
    | "available"
    | "missing-input"
    | "invalid-input"
    | "first-dominates"
    | "second-dominates"
    | "parallel-distinct"
    | "equal-all-volumes";
}

export function calculateBillingClientThreshold(
  input: Omit<SubscriptionBillingTcoInputs, "options">,
  first: BillingTcoOptionInput,
  second: BillingTcoOptionInput,
): BillingThresholdResult {
  const commonValues = [
    input.horizonMonths,
    input.averageBilledPerClientMonthly,
    input.internalHourlyCost,
  ];
  const optionValues = [
    first.setupCost,
    first.fixedMonthlyCost,
    first.fixedInternalHoursMonthly,
    first.minutesPerClientMonthly,
    first.variableFeeRate,
    second.setupCost,
    second.fixedMonthlyCost,
    second.fixedInternalHoursMonthly,
    second.minutesPerClientMonthly,
    second.variableFeeRate,
  ];

  const allThresholdValues = [...commonValues, ...optionValues];
  const currencyText = input.currency?.trim() ?? "";
  const thresholdInputMissing =
    currencyText === "" || allThresholdValues.some((value) => value === null);

  if (thresholdInputMissing) {
    return {
      thresholdClients: null,
      firstWholeClient: null,
      belowThresholdOptionId: null,
      aboveThresholdOptionId: null,
      reason: "missing-input",
    };
  }

  const thresholdInputInvalid =
    normalizeCurrencySyntax(input.currency) === null ||
    allThresholdValues.some(
      (value) => value !== null && (!Number.isFinite(value) || value < 0),
    ) ||
    (input.horizonMonths as number) <= 0;

  if (thresholdInputInvalid) {
    return {
      thresholdClients: null,
      firstWholeClient: null,
      belowThresholdOptionId: null,
      aboveThresholdOptionId: null,
      reason: "invalid-input",
    };
  }

  const months = input.horizonMonths as number;
  const billedPerClient = input.averageBilledPerClientMonthly as number;
  const hourlyCost = input.internalHourlyCost as number;

  function coefficients(option: BillingTcoOptionInput) {
    return {
      fixed:
        (option.setupCost as number) +
        months * (option.fixedMonthlyCost as number) +
        months * hourlyCost * (option.fixedInternalHoursMonthly as number),
      perClient:
        months *
          hourlyCost *
          ((option.minutesPerClientMonthly as number) / 60) +
        months * billedPerClient * (option.variableFeeRate as number),
    };
  }

  const firstCoefficients = coefficients(first);
  const secondCoefficients = coefficients(second);
  if (
    ![
      firstCoefficients.fixed,
      firstCoefficients.perClient,
      secondCoefficients.fixed,
      secondCoefficients.perClient,
    ].every(Number.isFinite)
  ) {
    return {
      thresholdClients: null,
      firstWholeClient: null,
      belowThresholdOptionId: null,
      aboveThresholdOptionId: null,
      reason: "invalid-input",
    };
  }
  const denominator =
    firstCoefficients.perClient - secondCoefficients.perClient;
  const numerator = secondCoefficients.fixed - firstCoefficients.fixed;

  if (denominator === 0) {
    if (firstCoefficients.fixed === secondCoefficients.fixed) {
      return {
        thresholdClients: null,
        firstWholeClient: null,
        belowThresholdOptionId: null,
        aboveThresholdOptionId: null,
        reason: "equal-all-volumes",
      };
    }
    const dominant =
      firstCoefficients.fixed < secondCoefficients.fixed ? first.id : second.id;
    return {
      thresholdClients: null,
      firstWholeClient: null,
      belowThresholdOptionId: dominant,
      aboveThresholdOptionId: dominant,
      reason: "parallel-distinct",
    };
  }

  const thresholdClients = numerator / denominator;
  if (!Number.isFinite(thresholdClients)) {
    return {
      thresholdClients: null,
      firstWholeClient: null,
      belowThresholdOptionId: null,
      aboveThresholdOptionId: null,
      reason: "invalid-input",
    };
  }
  if (thresholdClients <= 0) {
    const firstCostAtOneClient =
      firstCoefficients.fixed + firstCoefficients.perClient;
    const secondCostAtOneClient =
      secondCoefficients.fixed + secondCoefficients.perClient;
    const firstDominates = firstCostAtOneClient < secondCostAtOneClient;
    const dominant = firstDominates ? first.id : second.id;
    return {
      thresholdClients: null,
      firstWholeClient: null,
      belowThresholdOptionId: dominant,
      aboveThresholdOptionId: dominant,
      reason: firstDominates ? "first-dominates" : "second-dominates",
    };
  }
  const firstWinsBelow = firstCoefficients.fixed <= secondCoefficients.fixed;
  return {
    thresholdClients,
    firstWholeClient: Math.floor(thresholdClients) + 1,
    belowThresholdOptionId: firstWinsBelow ? first.id : second.id,
    aboveThresholdOptionId: firstWinsBelow ? second.id : first.id,
    reason: "available",
  };
}

export const DEFAULT_BILLING_TCO_OPTIONS: BillingTcoOptionInput[] = [
  {
    id: "manual",
    label: "Processus manuel explicite",
    setupCost: 0,
    fixedMonthlyCost: 0,
    fixedInternalHoursMonthly: 2,
    minutesPerClientMonthly: 6,
    variableFeeRate: 0,
  },
  {
    id: "hosted",
    label: "Moteur hébergé",
    setupCost: 2_800,
    fixedMonthlyCost: 150,
    fixedInternalHoursMonthly: 1,
    minutesPerClientMonthly: 2,
    variableFeeRate: 0.007,
  },
  {
    id: "hosted_with_layer",
    label: "Moteur hébergé + couche métier",
    setupCost: 14_000,
    fixedMonthlyCost: 700,
    fixedInternalHoursMonthly: 0.5,
    minutesPerClientMonthly: 1,
    variableFeeRate: 0.007,
  },
  {
    id: "specific",
    label: "Moteur spécifique, paiement externalisé",
    setupCost: 60_000,
    fixedMonthlyCost: 1_500,
    fixedInternalHoursMonthly: 1,
    minutesPerClientMonthly: 0.6,
    variableFeeRate: 0,
  },
];

export const PLANOR_MONTHLY_RECONCILIATION: BillingPeriodInput = {
  currency: "EUR",
  openingReceivable: 0,
  grossInvoices: 10_000,
  creditNotes: 100,
  allocatedPayments: 9_600,
  refunds: 0,
  reportedClosingReceivable: 300,
  unallocatedCash: 0,
  accessMismatchCount: 0,
  accessPolicyValidated: true,
  taxRuleRequired: false,
  taxRuleValidated: null,
  periodClosed: false,
  lateFinancialEvent: false,
  idempotencyConflict: false,
};

export const PLANOR_ANNUAL_RECONCILIATION: BillingPeriodInput = {
  currency: "EUR",
  openingReceivable: 0,
  grossInvoices: 41_000,
  creditNotes: 350,
  allocatedPayments: 40_750,
  refunds: 100,
  reportedClosingReceivable: 0,
  unallocatedCash: 0,
  accessMismatchCount: 0,
  accessPolicyValidated: true,
  taxRuleRequired: false,
  taxRuleValidated: null,
  periodClosed: false,
  lateFinancialEvent: false,
  idempotencyConflict: false,
};

export type BillingEventType =
  | "invoice_finalized"
  | "credit_note_created"
  | "payment_succeeded"
  | "refund_created"
  | "entitlement_changed"
  | "usage_reported";

export interface BillingEvent {
  eventId: string;
  businessKey: string;
  payloadFingerprint: string;
  type: BillingEventType;
  amount: number | null;
  currency: string | null;
  occurredAt: string;
  receivedAt: string;
  periodClosed: boolean;
}

export interface BillingEventLedger {
  currency: string | null;
  processedEventFingerprints: Record<string, string>;
  businessKeyFingerprints: Record<string, string>;
  eventSnapshots: Record<string, BillingEvent>;
  appliedEventIds: string[];
  financialEffects: {
    grossInvoices: number;
    creditNotes: number;
    allocatedPayments: number;
    refunds: number;
  };
}

export interface BillingEventApplication {
  status: "applied" | "duplicate" | "stop";
  state: BillingEventLedger;
  issues: BillingIssue[];
}

function sameBillingEventPayload(first: BillingEvent, second: BillingEvent) {
  return (
    first.businessKey === second.businessKey &&
    first.payloadFingerprint === second.payloadFingerprint &&
    first.type === second.type &&
    Object.is(first.amount, second.amount) &&
    normalizeCurrencySyntax(first.currency) ===
      normalizeCurrencySyntax(second.currency) &&
    first.occurredAt === second.occurredAt &&
    first.periodClosed === second.periodClosed
  );
}

export function createBillingEventLedger(): BillingEventLedger {
  return {
    currency: null,
    processedEventFingerprints: {},
    businessKeyFingerprints: {},
    eventSnapshots: {},
    appliedEventIds: [],
    financialEffects: {
      grossInvoices: 0,
      creditNotes: 0,
      allocatedPayments: 0,
      refunds: 0,
    },
  };
}

export function applyBillingEvent(
  state: BillingEventLedger,
  event: BillingEvent,
): BillingEventApplication {
  const existingEvent = state.processedEventFingerprints[event.eventId];
  if (existingEvent !== undefined) {
    const existingSnapshot = state.eventSnapshots[event.eventId];
    if (
      existingEvent === event.payloadFingerprint &&
      existingSnapshot !== undefined &&
      sameBillingEventPayload(existingSnapshot, event)
    ) {
      return { status: "duplicate", state, issues: [] };
    }
    return {
      status: "stop",
      state,
      issues: [
        {
          code: "idempotency-conflict",
          severity: "stop",
          message: "Le même eventId a été reçu avec un contenu différent.",
          fields: ["eventId", "payloadFingerprint"],
        },
      ],
    };
  }

  const existingBusinessKey = state.businessKeyFingerprints[event.businessKey];
  if (existingBusinessKey !== undefined) {
    const existingSnapshot = Object.values(state.eventSnapshots).find(
      (snapshot) => snapshot.businessKey === event.businessKey,
    );
    if (
      existingBusinessKey === event.payloadFingerprint &&
      existingSnapshot !== undefined &&
      sameBillingEventPayload(existingSnapshot, event)
    ) {
      return { status: "duplicate", state, issues: [] };
    }
    return {
      status: "stop",
      state,
      issues: [
        {
          code: "idempotency-conflict",
          severity: "stop",
          message: "La même clé métier porte deux contenus différents.",
          fields: ["businessKey", "payloadFingerprint"],
        },
      ],
    };
  }

  const financial = [
    "invoice_finalized",
    "credit_note_created",
    "payment_succeeded",
    "refund_created",
  ].includes(event.type);
  const billingSensitive = financial || event.type === "usage_reported";
  if (billingSensitive && event.periodClosed) {
    return {
      status: "stop",
      state,
      issues: [
        {
          code: "late-financial-event",
          severity: "stop",
          message:
            "Un événement qui affecte la facturation après clôture doit aller en file d’ajustement.",
          fields: ["periodClosed", "type"],
        },
      ],
    };
  }

  const eventCurrency = normalizeCurrencySyntax(event.currency);
  if (
    financial &&
    (event.amount === null ||
      !Number.isFinite(event.amount) ||
      event.amount < 0 ||
      eventCurrency === null)
  ) {
    return {
      status: "stop",
      state,
      issues: [
        {
          code: "missing-value",
          severity: "stop",
          message:
            "Un événement financier doit porter un montant positif ou nul et une devise qualifiée.",
          fields: ["amount", "currency"],
        },
      ],
    };
  }
  if (
    financial &&
    state.currency !== null &&
    state.currency !== eventCurrency
  ) {
    return {
      status: "stop",
      state,
      issues: [
        {
          code: "mixed-currency",
          severity: "stop",
          message:
            "Deux devises ne peuvent pas être additionnées dans le même grand livre.",
          fields: ["currency"],
        },
      ],
    };
  }

  const financialEffects = { ...state.financialEffects };
  const amount = event.amount ?? 0;
  let affectedFinancialField:
    keyof BillingEventLedger["financialEffects"] | null = null;
  if (event.type === "invoice_finalized") {
    affectedFinancialField = "grossInvoices";
  } else if (event.type === "credit_note_created") {
    affectedFinancialField = "creditNotes";
  } else if (event.type === "payment_succeeded") {
    affectedFinancialField = "allocatedPayments";
  } else if (event.type === "refund_created") {
    affectedFinancialField = "refunds";
  }

  if (affectedFinancialField !== null) {
    const nextFinancialEffect =
      financialEffects[affectedFinancialField] + amount;
    if (!Number.isFinite(nextFinancialEffect)) {
      return {
        status: "stop",
        state,
        issues: [
          {
            code: "not-finite",
            severity: "stop",
            message:
              "L’agrégation financière produit un débordement arithmétique. L’événement reste non appliqué.",
            fields: [`financialEffects.${affectedFinancialField}`, "amount"],
          },
        ],
      };
    }
    financialEffects[affectedFinancialField] = nextFinancialEffect;
  }

  const nextState: BillingEventLedger = {
    currency: financial ? (state.currency ?? eventCurrency) : state.currency,
    processedEventFingerprints: {
      ...state.processedEventFingerprints,
      [event.eventId]: event.payloadFingerprint,
    },
    businessKeyFingerprints: {
      ...state.businessKeyFingerprints,
      [event.businessKey]: event.payloadFingerprint,
    },
    eventSnapshots: {
      ...state.eventSnapshots,
      [event.eventId]: { ...event, currency: eventCurrency ?? event.currency },
    },
    appliedEventIds: [...state.appliedEventIds, event.eventId],
    financialEffects,
  };

  return { status: "applied", state: nextState, issues: [] };
}
