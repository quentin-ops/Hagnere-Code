import { describe, expect, it } from "vitest";
import {
  DEFAULT_BILLING_TCO_OPTIONS,
  PLANOR_ANNUAL_RECONCILIATION,
  PLANOR_MONTHLY_RECONCILIATION,
  applyBillingEvent,
  calculateBillingClientThreshold,
  calculateSubscriptionBillingTco,
  createBillingEventLedger,
  reconcileBillingPeriod,
  type BillingEvent,
  type SubscriptionBillingTcoInputs,
} from "./subscription-billing-oracle";

function tcoInput(clients: number): SubscriptionBillingTcoInputs {
  return {
    currency: "EUR",
    horizonMonths: 24,
    averageActiveClients: clients,
    averageBilledPerClientMonthly: 100,
    internalHourlyCost: 45,
    options: DEFAULT_BILLING_TCO_OPTIONS.map((option) => ({ ...option })),
  };
}

describe("subscription billing reconciliation", () => {
  it("reconciles the complete Planor month without confusing cash and receivable", () => {
    const result = reconcileBillingPeriod(PLANOR_MONTHLY_RECONCILIATION);

    expect(result.verdict).toBe("pass");
    expect(result.netInvoiced).toBe(9_900);
    expect(result.cashNet).toBe(9_600);
    expect(result.expectedClosingReceivable).toBe(300);
    expect(result.reconciliationDelta).toBe(0);
  });

  it("reconciles the annual Planor fixture with a distinct refund", () => {
    const result = reconcileBillingPeriod(PLANOR_ANNUAL_RECONCILIATION);

    expect(result.verdict).toBe("pass");
    expect(result.netInvoiced).toBe(40_650);
    expect(result.cashNet).toBe(40_650);
    expect(result.expectedClosingReceivable).toBe(0);
  });

  it("adds refunds back to receivables and accepts a documented prior-period refund", () => {
    const unexplained = reconcileBillingPeriod({
      ...PLANOR_MONTHLY_RECONCILIATION,
      grossInvoices: 0,
      creditNotes: 0,
      allocatedPayments: 0,
      refunds: 100,
      reportedClosingReceivable: 0,
    });
    const documented = reconcileBillingPeriod({
      ...PLANOR_MONTHLY_RECONCILIATION,
      grossInvoices: 0,
      creditNotes: 0,
      allocatedPayments: 0,
      refunds: 100,
      reportedClosingReceivable: 100,
    });

    expect(unexplained.verdict).toBe("stop");
    expect(unexplained.reconciliationDelta).toBe(-100);
    expect(documented.verdict).toBe("pass");
    expect(documented.cashNet).toBe(-100);
    expect(documented.expectedClosingReceivable).toBe(100);
  });

  it("keeps a blank unknown instead of turning it into zero", () => {
    const result = reconcileBillingPeriod({
      ...PLANOR_MONTHLY_RECONCILIATION,
      creditNotes: null,
    });

    expect(result.verdict).toBe("review");
    expect(result.complete).toBe(false);
    expect(result.netInvoiced).toBeNull();
    expect(result.cashNet).toBeNull();
    expect(result.issues).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          code: "missing-value",
          fields: ["creditNotes"],
        }),
      ]),
    );
  });

  it("stops a one-euro unexplained mutation", () => {
    const result = reconcileBillingPeriod({
      ...PLANOR_MONTHLY_RECONCILIATION,
      allocatedPayments: 9_599,
    });

    expect(result.verdict).toBe("stop");
    expect(result.reconciliationDelta).toBe(-1);
    expect(result.issues).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ code: "unexplained-balance" }),
      ]),
    );
  });

  it("stops negative values, missing access policy and an unvalidated required tax rule", () => {
    const result = reconcileBillingPeriod({
      ...PLANOR_MONTHLY_RECONCILIATION,
      refunds: -1,
      accessPolicyValidated: false,
      taxRuleRequired: true,
      taxRuleValidated: null,
    });

    expect(result.verdict).toBe("stop");
    expect(result.issues.map((issue) => issue.code)).toEqual(
      expect.arrayContaining([
        "negative-value",
        "access-policy-missing",
        "tax-rule-unvalidated",
      ]),
    );
  });

  it("stops while the fiscal qualification itself remains unknown", () => {
    const result = reconcileBillingPeriod({
      ...PLANOR_MONTHLY_RECONCILIATION,
      taxRuleRequired: null,
    });

    expect(result.verdict).toBe("stop");
    expect(result.issues).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          code: "tax-rule-unvalidated",
          fields: ["taxRuleRequired"],
        }),
      ]),
    );
  });

  it("stops an access mismatch, a late financial event and an idempotency conflict", () => {
    const result = reconcileBillingPeriod({
      ...PLANOR_MONTHLY_RECONCILIATION,
      accessMismatchCount: 1,
      periodClosed: true,
      lateFinancialEvent: true,
      idempotencyConflict: true,
    });

    expect(result.verdict).toBe("stop");
    expect(result.issues.map((issue) => issue.code)).toEqual(
      expect.arrayContaining([
        "access-mismatch",
        "late-financial-event",
        "idempotency-conflict",
      ]),
    );
  });

  it("stops and neutralizes derived values when reconciliation arithmetic overflows", () => {
    const result = reconcileBillingPeriod({
      ...PLANOR_MONTHLY_RECONCILIATION,
      openingReceivable: 1e308,
      grossInvoices: 1e308,
      creditNotes: 0,
      allocatedPayments: 0,
      refunds: 0,
      reportedClosingReceivable: 0,
    });

    expect(result).toEqual(
      expect.objectContaining({
        verdict: "stop",
        complete: false,
        netInvoiced: null,
        cashNet: null,
        expectedClosingReceivable: null,
        reconciliationDelta: null,
      }),
    );
    expect(result.issues).toEqual(
      expect.arrayContaining([expect.objectContaining({ code: "not-finite" })]),
    );
  });
});

describe("subscription billing TCO", () => {
  it.each([
    [10, [3_240, 8_008, 31_688, 97_188]],
    [100, [12_960, 12_760, 34_820, 98_160]],
    [500, [56_160, 33_880, 48_740, 102_480]],
  ])("reproduces the four TCO values for %i clients", (clients, expected) => {
    const result = calculateSubscriptionBillingTco(tcoInput(clients));

    expect(result.optionResults.map((option) => option.totalCost)).toEqual(
      expected,
    );
  });

  it("computes 96.3768 clients and rounds the decision threshold to 97", () => {
    const input = tcoInput(100);
    const threshold = calculateBillingClientThreshold(
      input,
      DEFAULT_BILLING_TCO_OPTIONS[0],
      DEFAULT_BILLING_TCO_OPTIONS[1],
    );

    expect(threshold.reason).toBe("available");
    expect(threshold.thresholdClients).toBeCloseTo(96.37681159, 8);
    expect(threshold.firstWholeClient).toBe(97);
    expect(threshold.belowThresholdOptionId).toBe("manual");
    expect(threshold.aboveThresholdOptionId).toBe("hosted");
  });

  it("identifies the manual process when it dominates at every positive volume", () => {
    const input = {
      ...tcoInput(100),
      averageBilledPerClientMonthly: 500,
    };
    const threshold = calculateBillingClientThreshold(
      input,
      DEFAULT_BILLING_TCO_OPTIONS[0],
      DEFAULT_BILLING_TCO_OPTIONS[1],
    );

    expect(threshold).toEqual({
      thresholdClients: null,
      firstWholeClient: null,
      belowThresholdOptionId: "manual",
      aboveThresholdOptionId: "manual",
      reason: "first-dominates",
    });
  });

  it("identifies the hosted option when it dominates at every positive volume", () => {
    const input = tcoInput(100);
    const first = {
      ...DEFAULT_BILLING_TCO_OPTIONS[0],
      setupCost: 5_000,
      fixedInternalHoursMonthly: 0,
      minutesPerClientMonthly: 10,
    };
    const second = {
      ...DEFAULT_BILLING_TCO_OPTIONS[1],
      setupCost: 0,
      fixedMonthlyCost: 0,
      fixedInternalHoursMonthly: 0,
      minutesPerClientMonthly: 1,
      variableFeeRate: 0,
    };

    expect(calculateBillingClientThreshold(input, first, second)).toEqual({
      thresholdClients: null,
      firstWholeClient: null,
      belowThresholdOptionId: "hosted",
      aboveThresholdOptionId: "hosted",
      reason: "second-dominates",
    });
  });

  it("solves a positive crossing when the first option has the lower slope", () => {
    const input = tcoInput(100);
    const first = {
      ...DEFAULT_BILLING_TCO_OPTIONS[0],
      setupCost: 5_000,
      fixedInternalHoursMonthly: 0,
      minutesPerClientMonthly: 1,
    };
    const second = {
      ...DEFAULT_BILLING_TCO_OPTIONS[1],
      setupCost: 0,
      fixedMonthlyCost: 0,
      fixedInternalHoursMonthly: 0,
      minutesPerClientMonthly: 10,
      variableFeeRate: 0,
    };
    const threshold = calculateBillingClientThreshold(input, first, second);

    expect(threshold.reason).toBe("available");
    expect(threshold.thresholdClients).toBeCloseTo(30.86419753, 8);
    expect(threshold.firstWholeClient).toBe(31);
    expect(threshold.belowThresholdOptionId).toBe("hosted");
    expect(threshold.aboveThresholdOptionId).toBe("manual");
  });

  it("distinguishes parallel and equal lines and rounds an exact crossing above the equality", () => {
    const input = {
      ...tcoInput(100),
      horizonMonths: 1,
      internalHourlyCost: 60,
      averageBilledPerClientMonthly: 0,
    };
    const first = {
      ...DEFAULT_BILLING_TCO_OPTIONS[0],
      setupCost: 0,
      fixedInternalHoursMonthly: 0,
      minutesPerClientMonthly: 2,
    };
    const second = {
      ...DEFAULT_BILLING_TCO_OPTIONS[1],
      setupCost: 100,
      fixedMonthlyCost: 0,
      fixedInternalHoursMonthly: 0,
      minutesPerClientMonthly: 1,
      variableFeeRate: 0,
    };
    const exact = calculateBillingClientThreshold(input, first, second);
    const parallel = calculateBillingClientThreshold(input, first, {
      ...second,
      minutesPerClientMonthly: 2,
    });
    const equal = calculateBillingClientThreshold(input, first, {
      ...first,
      id: "hosted",
      label: "Moteur hébergé",
    });

    expect(exact.thresholdClients).toBe(100);
    expect(exact.firstWholeClient).toBe(101);
    expect(parallel.reason).toBe("parallel-distinct");
    expect(parallel.belowThresholdOptionId).toBe("manual");
    expect(parallel.aboveThresholdOptionId).toBe("manual");
    expect(equal.reason).toBe("equal-all-volumes");
    expect(equal.belowThresholdOptionId).toBeNull();
    expect(equal.aboveThresholdOptionId).toBeNull();
  });

  it("keeps an incomplete option visible but excludes it from ranking", () => {
    const input = tcoInput(100);
    input.options[1] = { ...input.options[1], setupCost: null };
    const result = calculateSubscriptionBillingTco(input);

    expect(result.complete).toBe(false);
    expect(result.optionResults[1]).toEqual(
      expect.objectContaining({
        id: "hosted",
        comparable: false,
        totalCost: null,
      }),
    );
    expect(result.lowestComparableOptionId).toBe("manual");
  });

  it("rejects finite inputs whose derived TCO or threshold overflows", () => {
    const input = tcoInput(1e308);
    input.internalHourlyCost = 1e308;
    const result = calculateSubscriptionBillingTco(input);
    const threshold = calculateBillingClientThreshold(
      input,
      DEFAULT_BILLING_TCO_OPTIONS[0],
      DEFAULT_BILLING_TCO_OPTIONS[1],
    );

    expect(result.complete).toBe(false);
    expect(result.optionResults.every((option) => !option.comparable)).toBe(
      true,
    );
    expect(result.issues.map((issue) => issue.code)).toContain("not-finite");
    expect(threshold.reason).toBe("invalid-input");
    expect(threshold.thresholdClients).toBeNull();
  });

  it("distinguishes a missing threshold hypothesis from an invalid one", () => {
    const input = tcoInput(100);
    const missing = calculateBillingClientThreshold(
      { ...input, internalHourlyCost: null },
      DEFAULT_BILLING_TCO_OPTIONS[0],
      DEFAULT_BILLING_TCO_OPTIONS[1],
    );
    const invalidNumber = calculateBillingClientThreshold(
      { ...input, internalHourlyCost: Number.NaN },
      DEFAULT_BILLING_TCO_OPTIONS[0],
      DEFAULT_BILLING_TCO_OPTIONS[1],
    );
    const invalidCurrency = calculateBillingClientThreshold(
      { ...input, currency: "EU" },
      DEFAULT_BILLING_TCO_OPTIONS[0],
      DEFAULT_BILLING_TCO_OPTIONS[1],
    );

    expect(missing.reason).toBe("missing-input");
    expect(invalidNumber.reason).toBe("invalid-input");
    expect(invalidCurrency.reason).toBe("invalid-input");
  });
});

function event(overrides: Partial<BillingEvent> = {}): BillingEvent {
  return {
    eventId: "evt_001",
    businessKey: "invoice:INV-001:v1",
    payloadFingerprint: "sha256:aaa",
    type: "invoice_finalized",
    amount: 100,
    currency: "EUR",
    occurredAt: "2026-07-28T10:00:00Z",
    receivedAt: "2026-07-28T10:00:02Z",
    periodClosed: false,
    ...overrides,
  };
}

describe("billing event idempotence", () => {
  it("applies an event once and turns an identical retry into a no-op", () => {
    const first = applyBillingEvent(createBillingEventLedger(), event());
    const duplicate = applyBillingEvent(first.state, event());

    expect(first.status).toBe("applied");
    expect(first.state.financialEffects.grossInvoices).toBe(100);
    expect(first.state.eventSnapshots.evt_001).toEqual(event());
    expect(duplicate.status).toBe("duplicate");
    expect(duplicate.state.financialEffects.grossInvoices).toBe(100);
    expect(duplicate.state).toBe(first.state);
  });

  it("stops the same event id with different content", () => {
    const first = applyBillingEvent(createBillingEventLedger(), event());
    const conflict = applyBillingEvent(
      first.state,
      event({ payloadFingerprint: "sha256:bbb", amount: 101 }),
    );

    expect(conflict.status).toBe("stop");
    expect(conflict.state.financialEffects.grossInvoices).toBe(100);
    expect(conflict.issues[0].code).toBe("idempotency-conflict");
  });

  it.each([
    ["amount", { amount: 101 }],
    ["currency", { currency: "USD" }],
    ["type", { type: "payment_succeeded" as const }],
    ["occurredAt", { occurredAt: "2026-07-28T10:00:01Z" }],
  ])(
    "stops a changed %s even when the declared fingerprint is unchanged",
    (_field, overrides) => {
      const first = applyBillingEvent(createBillingEventLedger(), event());
      const conflict = applyBillingEvent(
        first.state,
        event({ payloadFingerprint: "sha256:aaa", ...overrides }),
      );

      expect(conflict.status).toBe("stop");
      expect(conflict.state).toBe(first.state);
      expect(conflict.issues[0].code).toBe("idempotency-conflict");
    },
  );

  it("stops the same business key with a different payload", () => {
    const first = applyBillingEvent(createBillingEventLedger(), event());
    const conflict = applyBillingEvent(
      first.state,
      event({
        eventId: "evt_002",
        payloadFingerprint: "sha256:bbb",
        amount: 101,
      }),
    );

    expect(conflict.status).toBe("stop");
    expect(conflict.state.appliedEventIds).toEqual(["evt_001"]);
  });

  it("deduplicates a semantic retry with a new event id", () => {
    const first = applyBillingEvent(createBillingEventLedger(), event());
    const duplicate = applyBillingEvent(
      first.state,
      event({ eventId: "evt_002" }),
    );

    expect(duplicate.status).toBe("duplicate");
    expect(duplicate.state).toBe(first.state);
    expect(duplicate.state.financialEffects.grossInvoices).toBe(100);
  });

  it("stops a semantic retry whose amount changed behind the same fingerprint", () => {
    const first = applyBillingEvent(createBillingEventLedger(), event());
    const conflict = applyBillingEvent(
      first.state,
      event({
        eventId: "evt_002",
        payloadFingerprint: "sha256:aaa",
        amount: 101,
      }),
    );

    expect(conflict.status).toBe("stop");
    expect(conflict.state).toBe(first.state);
    expect(conflict.state.financialEffects.grossInvoices).toBe(100);
  });

  it("stops mixed currencies before aggregating their effects", () => {
    const first = applyBillingEvent(createBillingEventLedger(), event());
    const mixed = applyBillingEvent(
      first.state,
      event({
        eventId: "evt_002",
        businessKey: "payment:PAY-001:v1",
        payloadFingerprint: "sha256:usd",
        type: "payment_succeeded",
        currency: "USD",
      }),
    );

    expect(first.state.currency).toBe("EUR");
    expect(mixed.status).toBe("stop");
    expect(mixed.issues[0].code).toBe("mixed-currency");
    expect(mixed.state.financialEffects.allocatedPayments).toBe(0);
  });

  it("produces the same financial totals when invoice and payment arrive out of order", () => {
    const invoice = event();
    const payment = event({
      eventId: "evt_002",
      businessKey: "payment:PAY-001:v1",
      payloadFingerprint: "sha256:payment",
      type: "payment_succeeded",
    });
    const forwardInvoice = applyBillingEvent(
      createBillingEventLedger(),
      invoice,
    );
    const forward = applyBillingEvent(forwardInvoice.state, payment);
    const reversePayment = applyBillingEvent(
      createBillingEventLedger(),
      payment,
    );
    const reverse = applyBillingEvent(reversePayment.state, invoice);

    expect(forward.status).toBe("applied");
    expect(reverse.status).toBe("applied");
    expect(reverse.state.financialEffects).toEqual(
      forward.state.financialEffects,
    );
  });

  it("stops a financial aggregation that would overflow without mutating the ledger", () => {
    const first = applyBillingEvent(
      createBillingEventLedger(),
      event({ amount: 1e308 }),
    );
    const overflow = applyBillingEvent(
      first.state,
      event({
        eventId: "evt_002",
        businessKey: "invoice:INV-002:v1",
        payloadFingerprint: "sha256:bbb",
        amount: 1e308,
      }),
    );

    expect(first.status).toBe("applied");
    expect(overflow.status).toBe("stop");
    expect(overflow.state).toBe(first.state);
    expect(overflow.state.financialEffects.grossInvoices).toBe(1e308);
    expect(overflow.issues[0]).toEqual(
      expect.objectContaining({
        code: "not-finite",
        fields: ["financialEffects.grossInvoices", "amount"],
      }),
    );
  });

  it("routes a financial event after closure to STOP without changing totals", () => {
    const result = applyBillingEvent(
      createBillingEventLedger(),
      event({ periodClosed: true }),
    );

    expect(result.status).toBe("stop");
    expect(result.state.financialEffects.grossInvoices).toBe(0);
    expect(result.issues[0].code).toBe("late-financial-event");
  });
});
