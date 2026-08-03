import { describe, expect, it } from "vitest";
import {
  buildDecisionDossier,
  calculateOptionTco,
  createEmptyDecisionInputs,
  createEmptyTcoOptions,
  evaluateDecision,
  recommendedOptionForDecision,
  type DecisionInputs,
  type DecisionStatus,
  type EvidenceKey,
  type OptionTcoInputs,
} from "./power-apps-decision-model";

function verifiedInputs(): DecisionInputs {
  const inputs = createEmptyDecisionInputs();
  inputs.context = {
    projectKind: "existing",
    audience: "internal",
    surface: "canvas",
    dataSource: "dataverse",
    criticality: "important",
    offlineRequired: "no",
    externalBrandingRequired: "no",
    currentUsers: 20,
    projectedUsers: 30,
  };
  for (const key of Object.keys(inputs.evidence) as Array<
    keyof typeof inputs.evidence
  >) {
    inputs.evidence[key] = "yes";
  }
  return inputs;
}

function completeOption(): OptionTcoInputs {
  const option = createEmptyTcoOptions()[1];
  option.license = {
    ...option.license,
    mode: "premium-eur",
    users: { knowledge: "known", amount: 10 },
    pricePerUserMonthEur: { knowledge: "known", amount: 17.3 },
  };
  option.oneTime = option.oneTime.map((line, index) => ({
    ...line,
    knowledge: "known",
    amount: index === 0 ? 1_000 : 0,
  }));
  option.monthly = option.monthly.map((line, index) => ({
    ...line,
    knowledge: "known",
    amount: index === 0 ? 27 : 0,
  }));
  return option;
}

function withoutAdditionalCosts(option = completeOption()): OptionTcoInputs {
  option.oneTime = option.oneTime.map((line) => ({
    ...line,
    knowledge: "not-applicable",
    amount: null,
  }));
  option.monthly = option.monthly.map((line) => ({
    ...line,
    knowledge: "not-applicable",
    amount: null,
  }));
  return option;
}

describe("Power Apps decision model", () => {
  it("starts in STOP and never manufactures a recommendation", () => {
    const result = evaluateDecision(createEmptyDecisionInputs());

    expect(result.status).toBe("STOP_MISSING_EVIDENCE");
    expect(result.recommendation).toBeNull();
    expect(result.defensibleOptions).toEqual([]);
    expect(result.criticalUnknowns.length).toBeGreaterThan(8);
    expect(result.nextEvidence).toContain("Précisez");
  });

  it("keeps a critical unknown blocking even when every other item is verified", () => {
    const inputs = verifiedInputs();
    inputs.evidence.securityDlpValidated = "unknown";

    const result = evaluateDecision(inputs);
    expect(result.status).toBe("STOP_MISSING_EVIDENCE");
    expect(result.recommendation).toBeNull();
    expect(result.criticalUnknowns.join(" ")).toContain(
      "politiques de données",
    );
  });

  it("treats each blank user count as critical while accepting explicit zero", () => {
    const missingCurrent = verifiedInputs();
    missingCurrent.context.currentUsers = null;
    const currentResult = evaluateDecision(missingCurrent);
    expect(currentResult.status).toBe("STOP_MISSING_EVIDENCE");
    expect(currentResult.criticalUnknowns.join(" ")).toContain(
      "utilisateurs actuels",
    );

    const missingProjected = verifiedInputs();
    missingProjected.context.projectedUsers = null;
    const projectedResult = evaluateDecision(missingProjected);
    expect(projectedResult.status).toBe("STOP_MISSING_EVIDENCE");
    expect(projectedResult.criticalUnknowns.join(" ")).toContain(
      "utilisateurs projetés",
    );

    const explicitZero = verifiedInputs();
    explicitZero.context.currentUsers = 0;
    explicitZero.context.projectedUsers = 0;
    expect(evaluateDecision(explicitZero).status).toBe("KEEP");
  });

  it("rejects negative, fractional and numerically unsafe user counts", () => {
    for (const [key, value] of [
      ["currentUsers", -1],
      ["currentUsers", 1.5],
      ["projectedUsers", Number.POSITIVE_INFINITY],
      ["projectedUsers", Number.NaN],
      ["projectedUsers", Number.MAX_SAFE_INTEGER + 1],
    ] as const) {
      const inputs = verifiedInputs();
      inputs.context[key] = value;
      const result = evaluateDecision(inputs);
      expect(result.status, `${key}:${value}`).toBe("STOP_MISSING_EVIDENCE");
      expect(result.recommendation).toBeNull();
      expect(result.blockingFailures.join(" ")).toContain("entier fini");
    }
  });

  it("distinguishes unverified evidence from an unsatisfactory completed control", () => {
    const unverified = verifiedInputs();
    unverified.evidence.scopeObserved = "unknown";
    const unverifiedResult = evaluateDecision(unverified);
    expect(unverifiedResult.status).toBe("STOP_MISSING_EVIDENCE");
    expect(unverifiedResult.criticalUnknowns.join(" ")).toContain("tâches");
    expect(unverifiedResult.blockingFailures).toEqual([]);

    const failed = verifiedInputs();
    failed.evidence.scopeObserved = "no";
    const failedResult = evaluateDecision(failed);
    expect(failedResult.status).toBe("STOP_MISSING_EVIDENCE");
    expect(failedResult.criticalUnknowns).toEqual([]);
    expect(failedResult.blockingFailures.join(" ")).toContain(
      "contrôle a conclu",
    );
    expect(failedResult.nextEvidence).toContain("aucun arbitrage");
  });

  it("stops on an unsatisfactory scope or license inventory without implying dedicated", () => {
    for (const key of ["scopeObserved", "licensesFlowsInventoried"] as const) {
      const inputs = verifiedInputs();
      inputs.evidence[key] = "no";
      const result = evaluateDecision(inputs);
      expect(result.status, key).toBe("STOP_MISSING_EVIDENCE");
      expect(result.recommendation).toBeNull();
      expect(result.defensibleOptions).toEqual([]);
      expect(result.blockingFailures.length).toBeGreaterThan(0);
    }
  });

  it("can fairly recommend keeping Power Apps when the evidence is positive", () => {
    const result = evaluateDecision(verifiedInputs());

    expect(result.status).toBe("KEEP");
    expect(result.recommendation).toBe("KEEP");
    expect(result.defensibleOptions).toContain("current-power-apps");
    expect(result.criticalUnknowns).toEqual([]);
  });

  it("routes remediable governance failures to strengthening, not rebuilding", () => {
    const inputs = verifiedInputs();
    inputs.evidence.almValidated = "no";
    inputs.evidence.ownershipSupportValidated = "no";

    const result = evaluateDecision(inputs);
    expect(result.status).toBe("STRENGTHEN");
    expect(
      result.contradictions.map((item) => item.message).join(" "),
    ).toContain("propriétaire de secours");
  });

  it("routes a reproduced platform boundary to hybrid only when it is separable", () => {
    const inputs = verifiedInputs();
    inputs.context.offlineRequired = "yes";
    inputs.evidence.offlineFitValidated = "no";
    inputs.evidence.separableBoundaryValidated = "yes";

    const result = evaluateDecision(inputs);
    expect(result.status).toBe("HYBRID");
    expect(result.defensibleOptions).toContain("hybrid");
    expect(
      result.contradictions.map((item) => item.message).join(" "),
    ).toContain("hors-ligne");
  });

  it("routes an inseparable platform boundary to a dedicated rebuild", () => {
    const inputs = verifiedInputs();
    inputs.context.audience = "public";
    inputs.context.externalBrandingRequired = "yes";
    inputs.evidence.identityAudienceValidated = "no";
    inputs.evidence.uxAccessibilityValidated = "no";
    inputs.evidence.separableBoundaryValidated = "no";

    const result = evaluateDecision(inputs);
    expect(result.status).toBe("DEDICATED_REBUILD");
    expect(result.defensibleOptions).not.toContain("hybrid");
    expect(
      result.contradictions.map((item) => item.message).join(" "),
    ).toContain("audience externe");
  });

  it("uses a contextual keep decision for a new project", () => {
    const inputs = verifiedInputs();
    inputs.context.projectKind = "new";

    const result = evaluateDecision(inputs);
    expect(result.status).toBe("KEEP");
    expect(result.headline).toContain("Retenir Power Platform");
    expect(result.headline).not.toContain("Conserver");
    expect(result.defensibleOptions).not.toContain("current-power-apps");
    expect(result.defensibleOptions).toContain("strengthened-power-apps");
  });

  it("never keeps a public canvas or model-driven surface", () => {
    for (const projectKind of ["existing", "new"] as const) {
      for (const surface of ["canvas", "model-driven"] as const) {
        const inputs = verifiedInputs();
        inputs.context.projectKind = projectKind;
        inputs.context.audience = "public";
        inputs.context.surface = surface;

        const result = evaluateDecision(inputs);
        expect(result.status, `${projectKind}:${surface}`).toBe("STRENGTHEN");
        expect(result.headline).toContain("Power Pages");
        expect(result.defensibleOptions).toContain("strengthened-power-apps");
        expect(result.defensibleOptions).not.toContain("current-power-apps");
        expect(result.nextEvidence).toContain("Power Pages");
      }
    }
  });

  it("keeps recommendation and defensible options coherent for every applicable no", () => {
    const cases: Array<{
      key: EvidenceKey;
      expected: DecisionStatus;
      prepare?: (inputs: DecisionInputs) => void;
    }> = [
      { key: "scopeObserved", expected: "STOP_MISSING_EVIDENCE" },
      { key: "dataQueriesTested", expected: "STRENGTHEN" },
      {
        key: "licensesFlowsInventoried",
        expected: "STOP_MISSING_EVIDENCE",
      },
      {
        key: "identityAudienceValidated",
        expected: "HYBRID",
        prepare: (inputs) => {
          inputs.context.audience = "guests";
        },
      },
      {
        key: "offlineFitValidated",
        expected: "HYBRID",
        prepare: (inputs) => {
          inputs.context.offlineRequired = "yes";
        },
      },
      { key: "uxAccessibilityValidated", expected: "STRENGTHEN" },
      { key: "securityDlpValidated", expected: "STRENGTHEN" },
      { key: "almValidated", expected: "STRENGTHEN" },
      { key: "ownershipSupportValidated", expected: "STRENGTHEN" },
      { key: "exitRestoreValidated", expected: "STRENGTHEN" },
      { key: "platformFitValidated", expected: "HYBRID" },
      {
        key: "separableBoundaryValidated",
        expected: "DEDICATED_REBUILD",
        prepare: (inputs) => {
          inputs.evidence.platformFitValidated = "no";
        },
      },
    ];

    for (const testCase of cases) {
      const inputs = verifiedInputs();
      testCase.prepare?.(inputs);
      inputs.evidence[testCase.key] = "no";
      const result = evaluateDecision(inputs);
      expect(result.status, testCase.key).toBe(testCase.expected);

      const recommendedOption = recommendedOptionForDecision(
        result.status,
        inputs.context.projectKind,
      );
      if (result.status === "STOP_MISSING_EVIDENCE") {
        expect(result.recommendation, testCase.key).toBeNull();
        expect(result.defensibleOptions, testCase.key).toEqual([]);
      } else {
        expect(result.recommendation, testCase.key).toBe(result.status);
        expect(recommendedOption, testCase.key).not.toBeNull();
        expect(result.defensibleOptions, testCase.key).toContain(
          recommendedOption,
        );
      }
    }
  });
});

describe("Power Apps TCO model", () => {
  it("keeps every unknown as null and still accepts an explicit zero", () => {
    const unknown = calculateOptionTco(createEmptyTcoOptions()[0]);
    expect(unknown.complete).toBe(false);
    expect(unknown.totalsEur).toEqual({ 1: null, 3: null, 5: null });
    expect(unknown.unknownLabels.length).toBeGreaterThan(0);

    const option = completeOption();
    option.license.users.amount = 0;
    option.license.pricePerUserMonthEur.amount = 0;
    const zero = calculateOptionTco(option);
    expect(zero.complete).toBe(true);
    expect(zero.monthlyLicenseEur).toBe(0);
  });

  it("requires a safe integer Premium quantity while preserving decimal prices", () => {
    for (const users of [1.5, Number.MAX_SAFE_INTEGER + 1]) {
      const option = completeOption();
      option.license.users = { knowledge: "known", amount: users };

      const result = calculateOptionTco(option);
      expect(result.complete, String(users)).toBe(false);
      expect(result.monthlyLicenseEur, String(users)).toBeNull();
      expect(result.totalsEur, String(users)).toEqual({
        1: null,
        3: null,
        5: null,
      });
      expect(result.errors.join(" "), String(users)).toContain(
        "doit être un entier connu",
      );
    }

    const zeroUsers = completeOption();
    zeroUsers.license.users = { knowledge: "known", amount: 0 };
    const zeroResult = calculateOptionTco(zeroUsers);
    expect(zeroResult.complete).toBe(true);
    expect(zeroResult.monthlyLicenseEur).toBe(0);

    const decimalPrice = completeOption();
    decimalPrice.license.users = { knowledge: "known", amount: 2 };
    decimalPrice.license.pricePerUserMonthEur = {
      knowledge: "known",
      amount: 17.35,
    };
    const decimalResult = calculateOptionTco(decimalPrice);
    expect(decimalResult.complete).toBe(true);
    expect(decimalResult.monthlyLicenseEur).toBe(34.7);
  });

  it("requires every operand selected by the license mode while keeping optional costs N/A", () => {
    const premiumUsers = withoutAdditionalCosts();
    premiumUsers.license.users = {
      knowledge: "not-applicable",
      amount: null,
    };

    const premiumPrice = withoutAdditionalCosts();
    premiumPrice.license.pricePerUserMonthEur = {
      knowledge: "not-applicable",
      amount: null,
    };

    const paygContract = withoutAdditionalCosts();
    paygContract.license.mode = "payg-usd";
    paygContract.license.contractualMonthlyEur = {
      knowledge: "not-applicable",
      amount: null,
    };

    const monthlyContract = withoutAdditionalCosts();
    monthlyContract.license.mode = "contract-monthly-eur";
    monthlyContract.license.contractualMonthlyEur = {
      knowledge: "not-applicable",
      amount: null,
    };

    for (const [label, option, expectedField] of [
      ["premium users", premiumUsers, "Nombre d’utilisateurs licenciés"],
      [
        "premium price",
        premiumPrice,
        "Prix contractuel par utilisateur et par mois en euros",
      ],
      [
        "payg contract",
        paygContract,
        "Montant mensuel PAYG réellement facturé en euros",
      ],
      [
        "monthly contract",
        monthlyContract,
        "Montant mensuel contractuel des licences en euros",
      ],
    ] as const) {
      const result = calculateOptionTco(option);
      expect(result.complete, label).toBe(false);
      expect(result.monthlyLicenseEur, label).toBeNull();
      expect(result.totalsEur, label).toEqual({ 1: null, 3: null, 5: null });
      expect(result.errors.join(" "), label).toContain(expectedField);
      expect(result.errors.join(" "), label).toContain(
        "est requis pour le mode de licence choisi",
      );
    }

    const noLicense = withoutAdditionalCosts();
    noLicense.license.mode = "not-applicable";
    const noLicenseResult = calculateOptionTco(noLicense);
    expect(noLicenseResult.complete).toBe(true);
    expect(noLicenseResult.monthlyLicenseEur).toBe(0);
    expect(noLicenseResult.totalsEur).toEqual({ 1: 0, 3: 0, 5: 0 });

    const optionalCosts = withoutAdditionalCosts();
    const optionalCostsResult = calculateOptionTco(optionalCosts);
    expect(optionalCostsResult.complete).toBe(true);
    expect(optionalCostsResult.monthlyLicenseEur).toBe(173);
    expect(optionalCostsResult.totalsEur).toEqual({
      1: 2_076,
      3: 6_228,
      5: 10_380,
    });
  });

  it("counts one-time costs once and monthly costs over 12, 36 and 60 months", () => {
    const result = calculateOptionTco(completeOption());

    expect(result.complete).toBe(true);
    expect(result.oneTimeTotalEur).toBe(1_000);
    expect(result.monthlyLicenseEur).toBe(173);
    expect(result.monthlyTotalEur).toBe(200);
    expect(result.totalsEur).toEqual({
      1: 3_400,
      3: 8_200,
      5: 13_000,
    });
  });

  it("stops on duplicate identifiers instead of double-counting them", () => {
    const option = completeOption();
    option.monthly.push({ ...option.monthly[0] });

    const result = calculateOptionTco(option);
    expect(result.complete).toBe(false);
    expect(result.totalsEur[1]).toBeNull();
    expect(result.errors.join(" ")).toContain("double compte");
  });

  it("rejects invalid or numerically unsafe known amounts", () => {
    for (const amount of [
      -1,
      Number.POSITIVE_INFINITY,
      Number.NaN,
      Number.MAX_SAFE_INTEGER + 1,
    ]) {
      const option = completeOption();
      option.monthly[0].amount = amount;

      const result = calculateOptionTco(option);
      expect(result.complete, String(amount)).toBe(false);
      expect(result.monthlyTotalEur, String(amount)).toBeNull();
      expect(result.totalsEur, String(amount)).toEqual({
        1: null,
        3: null,
        5: null,
      });
      expect(result.errors.join(" "), String(amount)).toContain(
        "plage numérique fiable",
      );
    }
  });

  it("stops when finite inputs overflow a product, an aggregate or a horizon", () => {
    const licenseProduct = completeOption();
    licenseProduct.license.users.amount = Number.MAX_SAFE_INTEGER;
    licenseProduct.license.pricePerUserMonthEur.amount = 2;

    const oneTimeAggregate = completeOption();
    oneTimeAggregate.oneTime[0].amount = Number.MAX_SAFE_INTEGER;
    oneTimeAggregate.oneTime[1].amount = 1;

    const fiveYearHorizon = completeOption();
    fiveYearHorizon.monthly[0].amount = 200_000_000_000_000;

    for (const [label, option] of [
      ["produit licences", licenseProduct],
      ["agrégat ponctuel", oneTimeAggregate],
      ["horizon", fiveYearHorizon],
    ] as const) {
      const result = calculateOptionTco(option);
      expect(result.complete, label).toBe(false);
      expect(result.monthlyLicenseEur, label).toBeNull();
      expect(result.monthlyTotalEur, label).toBeNull();
      expect(result.oneTimeTotalEur, label).toBeNull();
      expect(result.totalsEur, label).toEqual({ 1: null, 3: null, 5: null });
      expect(result.errors.join(" "), label).toContain(
        "plage numérique fiable",
      );
      expect(JSON.stringify(result), label).not.toMatch(/Infinity|NaN/);
    }
  });

  it("keeps the dated Premium aid editable and does not auto-convert PAYG USD", () => {
    const premium = createEmptyTcoOptions()[0];
    expect(premium.license.pricePerUserMonthEur).toEqual({
      knowledge: "unknown",
      amount: 17.3,
    });

    const payg = completeOption();
    payg.license.mode = "payg-usd";
    payg.license.contractualMonthlyEur = { knowledge: "unknown", amount: null };
    const missingContract = calculateOptionTco(payg);
    expect(missingContract.complete).toBe(false);
    expect(missingContract.monthlyLicenseEur).toBeNull();
    expect(missingContract.notes.join(" ")).toContain("n’est pas converti");
    expect(missingContract.unknownLabels.join(" ")).toContain(
      "réellement facturé en euros",
    );

    payg.license.contractualMonthlyEur = { knowledge: "known", amount: 89 };
    const contractual = calculateOptionTco(payg);
    expect(contractual.complete).toBe(true);
    expect(contractual.monthlyLicenseEur).toBe(89);
  });

  it("builds a shareable dossier without hiding assumptions or limits", () => {
    const inputs = verifiedInputs();
    inputs.evidence.exitRestoreValidated = "no";
    const decision = evaluateDecision(inputs);
    const option = completeOption();
    option.monthly[2] = {
      ...option.monthly[2],
      knowledge: "unknown",
      amount: null,
    };
    const dossier = buildDecisionDossier(inputs, decision, [
      calculateOptionTco(option),
    ]);

    expect(dossier).toContain("STRENGTHEN");
    expect(dossier).toContain("Inconnues :");
    expect(dossier).toContain("Support utilisateurs");
    expect(dossier).toContain("TCO 1 an : à confirmer");
    expect(dossier).toContain("ni un devis");
  });
});
