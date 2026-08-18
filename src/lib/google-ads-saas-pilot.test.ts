import { describe, expect, it } from "vitest";
import {
  buildGoogleAdsSaasPilotMarkdown,
  calculateGoogleAdsSaasPilot,
  cloneGoogleAdsSaasPilotInputs,
  GOOGLE_ADS_SAAS_PILOT_DECISIONS,
  GOOGLE_ADS_SAAS_PILOT_EXAMPLE,
  parseGoogleAdsSaasPilotDecimal,
  validateGoogleAdsSaasPilotInputs,
  type GoogleAdsSaasPilotInputs,
} from "./google-ads-saas-pilot";

function example(
  changes: Partial<GoogleAdsSaasPilotInputs> = {},
): GoogleAdsSaasPilotInputs {
  return {
    ...cloneGoogleAdsSaasPilotInputs(GOOGLE_ADS_SAAS_PILOT_EXAMPLE),
    ...changes,
  };
}

function readyExample(
  changes: Partial<GoogleAdsSaasPilotInputs> = {},
): GoogleAdsSaasPilotInputs {
  return example({
    measurementReady: true,
    offerReady: true,
    salesCapacityReady: true,
    ...changes,
  });
}

describe("strict decimal parsing", () => {
  it("parses an integer without changing it", () => {
    expect(parseGoogleAdsSaasPilotDecimal("24000")).toBe(24000);
  });

  it("parses a French decimal comma", () => {
    expect(parseGoogleAdsSaasPilotDecimal(" 3,5 ")).toBe(3.5);
  });

  it("parses an explicit zero as zero", () => {
    expect(parseGoogleAdsSaasPilotDecimal("0")).toBe(0);
  });

  it("keeps an empty value unknown instead of turning it into zero", () => {
    expect(parseGoogleAdsSaasPilotDecimal("")).toBeNull();
    expect(parseGoogleAdsSaasPilotDecimal("   ")).toBeNull();
  });

  it("rejects a partially numeric string", () => {
    expect(parseGoogleAdsSaasPilotDecimal("12abc")).toBeNull();
  });

  it("rejects scientific notation", () => {
    expect(parseGoogleAdsSaasPilotDecimal("2e3")).toBeNull();
  });

  it("rejects signs and negative values before calculation", () => {
    expect(parseGoogleAdsSaasPilotDecimal("-1")).toBeNull();
    expect(parseGoogleAdsSaasPilotDecimal("+1")).toBeNull();
  });

  it("rejects ambiguous thousand separators", () => {
    expect(parseGoogleAdsSaasPilotDecimal("24 000")).toBeNull();
    expect(parseGoogleAdsSaasPilotDecimal("24.000,50")).toBeNull();
  });
});

describe("AtelierFlow funnel and unit economics", () => {
  it("calculates every requested cost from the same 24,000 euro cohort", () => {
    const result = calculateGoogleAdsSaasPilot(example());

    expect(result.metrics).toMatchObject({
      completeAcquisitionCost: 24000,
      observedCpc: 6,
      costPerLead: 300,
      costPerIcpLead: 750,
      costPerSql: 1500,
      costPerOpportunity: 3000,
      cacSigned: 6000,
      cacActivated: 8000,
      cacRetainedM12: 12000,
    });
  });

  it("calculates the complete funnel rates without exceeding 100 percent", () => {
    const metrics = calculateGoogleAdsSaasPilot(example()).metrics;

    expect(metrics?.clickToLeadRatePercent).toBe(4);
    expect(metrics?.icpRatePercent).toBe(40);
    expect(metrics?.sqlRateFromIcpPercent).toBe(50);
    expect(metrics?.opportunityRateFromSqlPercent).toBe(50);
    expect(metrics?.signingRateFromOpportunityPercent).toBe(50);
    expect(metrics?.activationRatePercent).toBe(75);
    expect(metrics?.retentionRateM12Percent).toBeCloseTo(66.666666, 5);
  });

  it("subtracts variable costs from subscription before calculating payback", () => {
    const metrics = calculateGoogleAdsSaasPilot(example()).metrics;

    expect(metrics?.monthlyContributionMargin).toBe(900);
    expect(metrics?.paybackFromActivationMonths).toBeCloseTo(8.888888, 5);
  });

  it("adds sales and onboarding delays only to payback from spend", () => {
    const metrics = calculateGoogleAdsSaasPilot(example()).metrics;

    expect(metrics?.paybackFromActivationMonths).toBeCloseTo(8.888888, 5);
    expect(metrics?.paybackFromSpendMonths).toBeCloseTo(12.888888, 5);
  });

  it("computes the exact 96k, 272k and 448k TCO sequence", () => {
    expect(calculateGoogleAdsSaasPilot(example()).tco).toEqual({
      month12: 96000,
      month36: 272000,
      month60: 448000,
    });
  });

  it("keeps a documented zero setup cost as a real zero", () => {
    expect(calculateGoogleAdsSaasPilot(example({ setupCost: 0 })).tco).toEqual({
      month12: 88000,
      month36: 264000,
      month60: 440000,
    });
  });

  it("keeps ratios non-calculable but stops a mature zero-sale cohort", () => {
    const result = calculateGoogleAdsSaasPilot(
      readyExample({
        clicks: 0,
        leads: 0,
        icpLeads: 0,
        sql: 0,
        opportunities: 0,
        signedCustomers: 0,
        activatedCustomers: 0,
        retainedCustomersM12: 0,
      }),
    );

    expect(result.isValid).toBe(true);
    expect(result.metrics?.costPerLead).toBeNull();
    expect(result.metrics?.costPerSql).toBeNull();
    expect(result.metrics?.cacSigned).toBeNull();
    expect(result.metrics?.cacActivated).toBeNull();
    expect(result.metrics?.cacRetainedM12).toBeNull();
    expect(result.metrics?.activationRatePercent).toBeNull();
    expect(result.isDecisionReady).toBe(true);
    expect(result.decision).toBe("stop");
    expect(
      result.thresholdChecks.every(
        (check) => check.status === "not-observable",
      ),
    ).toBe(true);
  });

  it("does not invent a payback when monthly contribution is zero", () => {
    const result = calculateGoogleAdsSaasPilot(
      example({
        monthlySubscriptionPerCustomer: 200,
        monthlyVariableCostPerCustomer: 200,
      }),
    );

    expect(result.metrics?.monthlyContributionMargin).toBe(0);
    expect(result.metrics?.paybackFromActivationMonths).toBeNull();
    expect(result.metrics?.paybackFromSpendMonths).toBeNull();
    expect(result.decision).toBe("repair-measurement-offer-capacity");
  });

  it("does not invent a payback when contribution is negative", () => {
    const result = calculateGoogleAdsSaasPilot(
      example({
        monthlySubscriptionPerCustomer: 200,
        monthlyVariableCostPerCustomer: 250,
      }),
    );

    expect(result.metrics?.monthlyContributionMargin).toBe(-50);
    expect(result.metrics?.paybackFromActivationMonths).toBeNull();
    expect(result.decision).toBe("repair-measurement-offer-capacity");
  });
});

describe("validation and unknown-value boundaries", () => {
  it("blocks every result and verdict when a required amount is unknown", () => {
    const result = calculateGoogleAdsSaasPilot(example({ mediaCost: null }));

    expect(result.isValid).toBe(false);
    expect(result.metrics).toBeNull();
    expect(result.tco).toBeNull();
    expect(result.decision).toBeNull();
    expect(result.validationIssues[0]).toMatchObject({
      field: "mediaCost",
      code: "unknown",
    });
    expect(result.validationIssues[0]?.message).toContain(
      "Une case vide ne vaut pas zéro",
    );
  });

  it("rejects a negative amount", () => {
    expect(
      calculateGoogleAdsSaasPilot(
        example({ monthlyVariableCostPerCustomer: -1 }),
      ).validationIssues,
    ).toContainEqual(
      expect.objectContaining({
        field: "monthlyVariableCostPerCustomer",
        code: "negative",
      }),
    );
  });

  it("requires a positive media cost while keeping other documented costs separate", () => {
    expect(
      calculateGoogleAdsSaasPilot(example({ mediaCost: 0 })).validationIssues,
    ).toContainEqual(
      expect.objectContaining({
        field: "mediaCost",
        code: "must-be-positive",
      }),
    );
  });

  it("rejects fractional people or event counts", () => {
    expect(
      calculateGoogleAdsSaasPilot(example({ signedCustomers: 2.5 }))
        .validationIssues,
    ).toContainEqual(
      expect.objectContaining({
        field: "signedCustomers",
        code: "not-integer",
      }),
    );
  });

  it.each([
    ["minimumIcpRatePercent", -0.01],
    ["minimumIcpRatePercent", 101],
    ["minimumActivationRatePercent", 100.01],
    ["landingPageSensitivityRatePercent", 250],
    ["sqlToOpportunitySensitivityRatePercent", 101],
  ] as const)("rejects %s outside 0 to 100", (field, value) => {
    expect(
      calculateGoogleAdsSaasPilot(example({ [field]: value })).validationIssues,
    ).toContainEqual(
      expect.objectContaining({
        field,
        code: "rate-out-of-range",
      }),
    );
  });

  it("accepts both zero and one hundred as explicit rate boundaries", () => {
    const result = calculateGoogleAdsSaasPilot(
      example({
        minimumIcpRatePercent: 0,
        minimumActivationRatePercent: 100,
        landingPageSensitivityRatePercent: 100,
        sqlToOpportunitySensitivityRatePercent: 0,
      }),
    );

    expect(result.isValid).toBe(true);
  });

  it.each([
    ["leads", "clicks"],
    ["icpLeads", "leads"],
    ["sql", "icpLeads"],
    ["opportunities", "sql"],
    ["signedCustomers", "opportunities"],
    ["activatedCustomers", "signedCustomers"],
    ["retainedCustomersM12", "activatedCustomers"],
  ] as const)(
    "rejects %s when it exceeds %s in the same cohort",
    (field, parent) => {
      const inputs = example();
      const parentValue = inputs[parent];
      inputs[field] = typeof parentValue === "number" ? parentValue + 1 : 1;

      expect(validateGoogleAdsSaasPilotInputs(inputs)).toContainEqual(
        expect.objectContaining({
          field,
          code: "funnel-order",
        }),
      );
    },
  );

  it("rejects non-finite and unsafe values", () => {
    const infinity = calculateGoogleAdsSaasPilot(
      example({ annualRunCost: Number.POSITIVE_INFINITY }),
    );
    const unsafe = calculateGoogleAdsSaasPilot(
      example({ annualRunCost: Number.MAX_VALUE }),
    );

    expect(infinity.validationIssues[0]?.code).toBe("not-finite");
    expect(unsafe.validationIssues[0]?.code).toBe("not-finite");
  });
});

describe("bounded decision vocabulary", () => {
  it("does not give the fictitious default scenario an automatic green light", () => {
    const result = calculateGoogleAdsSaasPilot(example());

    expect(result.decision).toBe("repair-measurement-offer-capacity");
  });

  it("scales by one bounded step when a mature cohort stays inside user thresholds", () => {
    const result = calculateGoogleAdsSaasPilot(readyExample());

    expect(result.thresholdChecks.every((check) => check.passes)).toBe(true);
    expect(result.decision).toBe("scale-conditionally");
    expect(GOOGLE_ADS_SAAS_PILOT_DECISIONS[result.decision!].title).toBe(
      "Élargir par palier",
    );
  });

  it.each(["measurementReady", "offerReady", "salesCapacityReady"] as const)(
    "asks to repair when %s is false",
    (readiness) => {
      expect(
        calculateGoogleAdsSaasPilot(readyExample({ [readiness]: false }))
          .decision,
      ).toBe("repair-measurement-offer-capacity");
    },
  );

  it("waits for a running cohort under a written condition", () => {
    expect(
      calculateGoogleAdsSaasPilot(readyExample({ cohortStatus: "running" }))
        .decision,
    ).toBe("extend-conditionally");
  });

  it("allows M12 to remain unknown while a cohort is still running", () => {
    const result = calculateGoogleAdsSaasPilot(
      readyExample({
        cohortStatus: "running",
        retainedCustomersM12: null,
      }),
    );

    expect(result.isValid).toBe(true);
    expect(result.isDecisionReady).toBe(true);
    expect(result.decision).toBe("extend-conditionally");
    expect(result.metrics?.cacRetainedM12).toBeNull();
    expect(
      result.thresholdChecks.find((check) => check.key === "retained-cac")
        ?.status,
    ).toBe("not-observable");
  });

  it("stops a mature cohort with no signed customer when prerequisites were sound", () => {
    const result = calculateGoogleAdsSaasPilot(
      readyExample({
        signedCustomers: 0,
        activatedCustomers: 0,
        retainedCustomersM12: 0,
      }),
    );

    expect(result.isDecisionReady).toBe(true);
    expect(result.decision).toBe("stop");
    expect(result.metrics?.cacSigned).toBeNull();
  });

  it("stops a mature cohort when its retained CAC exceeds the entered limit", () => {
    const result = calculateGoogleAdsSaasPilot(
      readyExample({ maxRetainedCustomerCac: 11_999 }),
    );

    expect(
      result.thresholdChecks.find((check) => check.key === "retained-cac")
        ?.passes,
    ).toBe(false);
    expect(result.decision).toBe("stop");
  });

  it("stops a mature cohort when payback exceeds the entered limit", () => {
    const result = calculateGoogleAdsSaasPilot(
      readyExample({ maxPaybackFromSpendMonths: 12 }),
    );

    expect(
      result.thresholdChecks.find((check) => check.key === "payback-from-spend")
        ?.passes,
    ).toBe(false);
    expect(result.decision).toBe("stop");
  });

  it("repairs a forecast whose own thresholds are already crossed", () => {
    const result = calculateGoogleAdsSaasPilot(
      readyExample({
        cohortStatus: "forecast",
        maxRetainedCustomerCac: 1,
      }),
    );

    expect(result.decision).toBe("repair-measurement-offer-capacity");
  });

  it("launches only a test for a forecast inside its thresholds", () => {
    const result = calculateGoogleAdsSaasPilot(
      readyExample({ cohortStatus: "forecast" }),
    );

    expect(result.decision).toBe("launch-test");
    expect(
      GOOGLE_ADS_SAAS_PILOT_DECISIONS["launch-test"].explanation,
    ).toContain("ne garantit ni demande, ni vente");
  });

  it("uses only the five authorised lifecycle decisions", () => {
    expect(Object.keys(GOOGLE_ADS_SAAS_PILOT_DECISIONS).sort()).toEqual(
      [
        "extend-conditionally",
        "launch-test",
        "repair-measurement-offer-capacity",
        "scale-conditionally",
        "stop",
      ].sort(),
    );
  });
});

describe("sensitivities and local Markdown", () => {
  it("recomputes the exact 3 percent landing-page sensitivity", () => {
    const result = calculateGoogleAdsSaasPilot(example());
    const page = result.sensitivities.find(
      (row) => row.key === "landing-page-rate",
    );

    expect(page?.clicks).toBe(2000);
    expect(page?.leads).toBe(60);
    expect(page?.activatedCustomers).toBe(2.25);
    expect(page?.cacActivated).toBeCloseTo(10666.666666, 5);
    expect(page?.paybackFromActivationMonths).toBeCloseTo(11.851851, 5);
  });

  it("recomputes the exact 25 percent SQL-to-opportunity sensitivity", () => {
    const result = calculateGoogleAdsSaasPilot(example());
    const sqlToOpportunity = result.sensitivities.find(
      (row) => row.key === "sql-to-opportunity-rate",
    );

    expect(sqlToOpportunity?.opportunities).toBe(4);
    expect(sqlToOpportunity?.activatedCustomers).toBe(1.5);
    expect(sqlToOpportunity?.cacActivated).toBe(16000);
    expect(sqlToOpportunity?.paybackFromActivationMonths).toBeCloseTo(
      17.777777,
      5,
    );
  });

  it("recomputes the exact 7.50 euro CPC sensitivity at fixed media spend", () => {
    const result = calculateGoogleAdsSaasPilot(example());
    const cpc = result.sensitivities.find((row) => row.key === "cpc");

    expect(cpc?.clicks).toBe(1600);
    expect(cpc?.leads).toBe(64);
    expect(cpc?.activatedCustomers).toBeCloseTo(2.4, 10);
    expect(cpc?.cacActivated).toBeCloseTo(10000, 10);
    expect(cpc?.paybackFromActivationMonths).toBeCloseTo(11.111111, 5);
  });

  it("states that isolated sensitivities keep all other funnel rates unchanged", () => {
    const sensitivities = calculateGoogleAdsSaasPilot(example()).sensitivities;

    expect(
      sensitivities.find((row) => row.key === "landing-page-rate")?.assumption,
    ).toContain("autres taux du funnel inchangés");
    expect(
      sensitivities.find((row) => row.key === "cpc")?.assumption,
    ).toContain("autres taux du funnel inchangés");
  });

  it("exports a complete UTF-8-safe Markdown decision note", () => {
    const markdown = buildGoogleAdsSaasPilotMarkdown(example());

    expect(markdown).toContain(
      "# Note de décision — pilote d’acquisition SaaS B2B",
    );
    expect(markdown).toContain("24 000");
    expect(markdown).toContain("12 000");
    expect(markdown).toContain("2 000 → 80 → 32 → 16 → 8 → 4 → 3 → 2");
    expect(markdown).toContain("10 666,67");
    expect(markdown).toContain("16 000");
    expect(markdown).toContain("1 600");
    expect(markdown).toContain("10 000");
    expect(markdown).toContain("96 000");
    expect(markdown).toContain("272 000");
    expect(markdown).toContain("448 000");
    expect(markdown).toContain("Aucune donnée n’a été envoyée ni stockée");
  });

  it("qualifies attribution and never claims a best channel", () => {
    const markdown = buildGoogleAdsSaasPilotMarkdown(example()).toLowerCase();

    expect(markdown).toContain("ne prouve pas que google ads les a créés");
    expect(markdown).not.toContain("meilleur canal");
    expect(markdown).not.toContain("google ads a généré");
    expect(markdown).not.toContain("google ads a créé");
  });

  it("exports the stop decision without inventing ratios for a mature zero-sale cohort", () => {
    const markdown = buildGoogleAdsSaasPilotMarkdown(
      readyExample({
        leads: 0,
        icpLeads: 0,
        sql: 0,
        opportunities: 0,
        signedCustomers: 0,
        activatedCustomers: 0,
        retainedCustomersM12: 0,
      }),
    );

    expect(markdown).toContain("## Décision : Arrêter");
    expect(markdown).toContain("non calculable");
    expect(markdown).not.toContain("Infinity");
  });

  it("refuses a Markdown export when an amount is unknown", () => {
    expect(() =>
      buildGoogleAdsSaasPilotMarkdown(
        example({ monthlyVariableCostPerCustomer: null }),
      ),
    ).toThrow("inconnue");
  });
});
