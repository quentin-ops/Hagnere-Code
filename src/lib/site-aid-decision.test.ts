import { describe, expect, it } from "vitest";
import {
  SITE_AID_DECISION_SOURCE_DATE,
  SITE_AID_DECISION_VERSION,
  buildSiteAidDecisionReport,
  calculateSiteAidDecision,
  createEmptySiteAidDecisionInput,
  isSiteAidFrenchCentralRegisterRequired,
  resolveSiteAidLegalBasisResolution,
  siteAidDecisionReportFilename,
  type SiteAidBasisScope,
  type SiteAidCentralRegisterStatus,
  type SiteAidDecisionInput,
  type SiteAidDeductibleVatFraction,
  type SiteAidInstrumentKind,
  type SiteAidLegalBasisStatus,
  type SiteAidPaymentMode,
  type SiteAidStage,
  type SiteAidTriState,
} from "./site-aid-decision";

function completeInput(
  options: {
    deductibleVatFraction?: SiteAidDeductibleVatFraction;
    basisScope?: SiteAidBasisScope;
    stage?: SiteAidStage;
    instrumentKind?: SiteAidInstrumentKind;
    legalAidValueAmount?: number;
    approvedFinancialContributionAmount?: number;
    actualFinancialContributionAmount?: number;
    legalBasisStatus?: SiteAidLegalBasisStatus;
    paymentMode?: SiteAidPaymentMode;
    documentedPrepaymentPercent?: number | "unknown";
    availableCash?: number;
    waitMonths?: number;
    monthlyMargin?: number;
    fees?: number;
  } = {},
): SiteAidDecisionInput {
  const stage = options.stage ?? "none";
  return {
    profile: {
      reference: "Projet vitrine 2026",
      verificationDate: "2026-07-26",
      territory: "Bretagne",
      deMinimisEuTerritorialStatus: "eu-law-applicable",
      deMinimisEuTerritorialEvidence:
        "Avis de l’autorité d’octroi, référence TERR-UE-2026-0001 du 26/07/2026 : le droit de l’Union s’applique au territoire Bretagne",
      deMinimisEuTerritorialEvidenceDate: "2026-07-26",
      activity: "Conseil aux entreprises",
      businessAgeMonths: 30,
      employeeCount: 4,
      annualRevenueExVat: 420_000,
      legalStatus: "SAS",
      businessNeed: "Réduire les demandes non qualifiées",
      successIndicator: "Demandes qualifiées mensuelles",
      decisionOwner: "Direction",
      deMinimisCorporateEventOccurred: "no",
      deMinimisCorporateEventKind: "unknown",
      deMinimisCorporateEventEvidence:
        "Extrait Kbis et historique juridique vérifiés le 26/07/2026 : aucune fusion, acquisition ou scission pertinente sur la fenêtre",
      deMinimisCorporateAidHistoryAdjusted: "unknown",
    },
    authority: {
      name: "Autorité publique fictive",
      officialUrl: "https://example.gouv.fr/aide",
      consultationDate: "2026-07-26",
      scheduleAndAmendmentEvidence:
        "Notification avant engagement, réalisation avant le 31/12/2026 et avenant écrit",
      postAwardEvidenceVerified: "yes",
      postAwardObligationsEvidence:
        "Rapports, livrables, indicateurs, visibilité, pièces à conserver, contrôles, maintien éventuel, changements à notifier et conséquences, réduction ou restitution selon l’acte attributif",
    },
    quoteLines: [
      {
        label: "Conception et développement",
        amountExVat: 7_000,
        vatRatePercent: 20,
        deductibleVatFraction: options.deductibleVatFraction ?? "yes",
        eligibility: "yes",
        evidence: "Règlement, article 4",
      },
      {
        label: "Contenus exclus",
        amountExVat: 3_000,
        vatRatePercent: 20,
        deductibleVatFraction: options.deductibleVatFraction ?? "yes",
        eligibility: "no",
        evidence: "Règlement, annexe des exclusions",
      },
    ],
    gates: {
      authority: "yes",
      beneficiary: "yes",
      activity: "yes",
      startOrder: "yes",
      cumulativeAid: "yes",
      notification: stage === "none" ? "no" : "yes",
    },
    gateEvidence: {
      authority: "Fiche officielle, état au 26/07/2026",
      beneficiary: "Article 2",
      activity: "Article 3",
      startOrder: "Article 5",
      cumulativeAid: "Courriel de l’organisme du 26/07/2026",
      notification:
        stage === "none"
          ? "Registre interne : aucune notification au 26/07/2026"
          : "Notification N-2026-001 du 26/07/2026",
    },
    aid: {
      basisScope: options.basisScope ?? "eligible-ex-vat",
      stage,
      instrumentKind: options.instrumentKind ?? "grant",
      ratePercent: 30,
      capAmount: 7_500,
      legalAidValueAmount:
        stage === "none" ? undefined : (options.legalAidValueAmount ?? 2_100),
      prospectiveDeMinimisAidValueAmount: undefined,
      prospectiveDeMinimisAidValueEvidence: "",
      approvedFinancialContributionAmount:
        stage === "none"
          ? undefined
          : (options.approvedFinancialContributionAmount ?? 2_100),
      actualFinancialContributionAmount:
        stage === "received"
          ? (options.actualFinancialContributionAmount ?? 2_100)
          : undefined,
      paymentMode: options.paymentMode ?? "reimbursement",
      documentedPrepaymentPercent:
        options.documentedPrepaymentPercent ??
        (options.paymentMode === "direct"
          ? 100
          : options.paymentMode === "advance"
            ? 50
            : 0),
      finalInvoiceMatchesQuote: stage === "received" ? "yes" : "unknown",
      finalInvoiceDate: stage === "received" ? "2026-07-25" : "",
      finalInvoiceReference: stage === "received" ? "Facture F-2026-001" : "",
      supplierPaymentReference:
        stage === "received" ? "Paiement fournisseur P-2026-001" : "",
      receiptDate: stage === "received" ? "2026-07-26" : "",
      receiptReference: stage === "received" ? "Virement V-2026-001" : "",
      legalBasisStatus: options.legalBasisStatus ?? "de-minimis",
      deMinimisRegime: "Règlement UE 2023/2831",
      nonDeMinimisLegalBasis: "",
      nonDeMinimisEvidenceReference: "",
      deMinimisMemberState: "France",
      deMinimisSingleUndertakingScope: "Groupe A",
      deMinimisFisheryFiscalYearStartDate: "",
      deMinimisFisheryPreviousFiscalYearStartDate: "",
      deMinimisFisherySecondPreviousFiscalYearStartDate: "",
      deMinimisFisheryCurrentFiscalYearEndDate: "",
      similarUndertakingKeysDistinct: "unknown",
      similarUndertakingKeysEvidence: "",
      sgeiEntrustmentVerified: "unknown",
      sgeiEntrustmentEvidence: "",
      sgeiServiceIdentity: "",
      sgeiSameServiceCompensationPresent: "unknown",
      sgeiCompensationEvidence: "",
      legalGrantStatus: stage === "none" ? "no" : "yes",
      legalGrantDate: stage === "none" ? "" : "2026-07-26",
      centralRegisterStatus: stage === "none" ? "not-applicable" : "registered",
      centralRegisterReference:
        stage === "none"
          ? ""
          : "Attestation de l’autorité d’octroi n° ATT-2026-0001",
    },
    availableCash: options.availableCash ?? 20_000,
    wait: {
      months: options.waitMonths ?? 1,
      monthlyDelayContributionMargin: options.monthlyMargin ?? 500,
      aidSpecificFees: options.fees ?? 0,
    },
    aidRegister: [],
  };
}

function registerEntry(
  overrides: Partial<SiteAidDecisionInput["aidRegister"][number]> = {},
): SiteAidDecisionInput["aidRegister"][number] {
  const entry: SiteAidDecisionInput["aidRegister"][number] = {
    authority: "Région",
    scheme: "Aide antérieure",
    legalBasisStatus: "de-minimis",
    regime: "Règlement UE 2023/2831",
    nonDeMinimisLegalBasis: "",
    nonDeMinimisEvidenceReference: "",
    memberState: "France",
    singleUndertakingScope: "Groupe A",
    similarUndertakingKeysDistinct: "unknown",
    similarUndertakingKeysEvidence: "",
    sgeiEntrustmentVerified: "unknown",
    sgeiEntrustmentEvidence: "",
    sgeiServiceIdentity: "",
    sgeiSameServiceCompensationPresent: "unknown",
    sgeiCompensationEvidence: "",
    sgeiRelationToCurrentService: "unknown",
    sgeiRelationToCurrentServiceEvidence: "",
    amount: 1_000,
    legalGrantDate: "2026-01-01",
    centralRegisterStatus: "registered",
    centralRegisterReference:
      "Attestation de l’autorité d’octroi n° ATT-2026-REG-0001",
    expenses: "Dépenses distinctes",
    sameBaseOrInvoice: "no",
    ...overrides,
  };
  if (
    overrides.centralRegisterStatus === undefined &&
    overrides.centralRegisterReference === undefined
  ) {
    const resolution = resolveSiteAidLegalBasisResolution(
      entry.regime,
      entry.legalBasisStatus,
    );
    const memberStateIsFrance = /^(?:fr|france|francais|français)$/iu.test(
      entry.memberState.trim(),
    );
    const registerRequired =
      memberStateIsFrance &&
      ((resolution === "de-minimis-agriculture" &&
        entry.legalGrantDate >= "2027-01-01") ||
        ((resolution === "de-minimis-general" ||
          resolution === "de-minimis-sgei" ||
          resolution === "de-minimis-fishery") &&
          entry.legalGrantDate >= "2026-01-01"));
    entry.centralRegisterStatus = registerRequired
      ? "registered"
      : "not-applicable";
    entry.centralRegisterReference = registerRequired
      ? `Attestation de l’autorité d’octroi n° ATT-${entry.legalGrantDate}-REG`
      : "";
  }
  return entry;
}

function documentCurrentSgei(input: SiteAidDecisionInput): void {
  input.aid.deMinimisRegime = "Règlement UE 2023/2832";
  input.aid.sgeiEntrustmentVerified = "yes";
  input.aid.sgeiEntrustmentEvidence =
    "Acte écrit SIEG n° SIEG-2026-04 du 02/01/2026 qui confie le service à l’entreprise";
  input.aid.sgeiServiceIdentity =
    "Permanence numérique d’intérêt général du territoire Bretagne";
  input.aid.sgeiSameServiceCompensationPresent = "no";
  input.aid.sgeiCompensationEvidence =
    "Inventaire vérifié au 26/07/2026 et confirmation écrite de l’autorité : aucune autre compensation du même service";
}

function sgeiRegisterEntry(
  overrides: Partial<SiteAidDecisionInput["aidRegister"][number]> = {},
): SiteAidDecisionInput["aidRegister"][number] {
  return registerEntry({
    regime: "Règlement UE 2023/2832",
    sgeiEntrustmentVerified: "yes",
    sgeiEntrustmentEvidence:
      "Acte écrit SIEG n° SIEG-2025-09 du 10/01/2025 qui confie le service à l’entreprise",
    sgeiServiceIdentity:
      "Permanence numérique d’intérêt général du territoire Bretagne",
    sgeiSameServiceCompensationPresent: "no",
    sgeiCompensationEvidence:
      "Inventaire n° INV-SIEG-2026-0001 vérifié et confirmation écrite de l’autorité : aucune autre compensation du même service",
    sgeiRelationToCurrentService: "unknown",
    sgeiRelationToCurrentServiceEvidence: "",
    ...overrides,
  });
}

function documentedSgeiDistinctionEvidence(
  currentServiceIdentity: string,
  registerServiceIdentity: string,
  reference = "ATT-DIST-2026-0042",
): string {
  return `Attestation de l’autorité d’octroi n° ${reference} du 26/07/2026 : le service « ${currentServiceIdentity} » est distinct du service « ${registerServiceIdentity} ».`;
}

const VALID_FRENCH_CENTRAL_REGISTER_RECORD_ID =
  "50f2f945cb505b8c1ab37548149b2e143b4582ab";

function externalReviewRegisterEntry(
  amount: number,
  overrides: Partial<SiteAidDecisionInput["aidRegister"][number]> = {},
): SiteAidDecisionInput["aidRegister"][number] {
  return registerEntry({
    legalBasisStatus: "not-de-minimis",
    regime: "",
    nonDeMinimisLegalBasis: "Règlement (UE) 651/2014, article 14",
    nonDeMinimisEvidenceReference: "Notification officielle N-2026-001",
    amount,
    legalGrantDate: "2025-01-15",
    ...overrides,
  });
}

function unknownLegalBasisRegisterEntry(
  amount: number,
  overrides: Partial<SiteAidDecisionInput["aidRegister"][number]> = {},
): SiteAidDecisionInput["aidRegister"][number] {
  return registerEntry({
    legalBasisStatus: "unknown",
    regime: "Aide locale à qualifier",
    nonDeMinimisLegalBasis: "",
    nonDeMinimisEvidenceReference: "",
    amount,
    legalGrantDate: "2025-01-15",
    ...overrides,
  });
}

function setSingleEligibleInvoice(
  input: SiteAidDecisionInput,
  amountExVat = 100,
  vatRatePercent = 0,
): void {
  input.quoteLines = [
    {
      label: "Prestation test",
      amountExVat,
      vatRatePercent,
      deductibleVatFraction: "yes",
      eligibility: "yes",
      evidence: "Article 4",
    },
  ];
  input.aid.ratePercent = 100;
  input.aid.capAmount = amountExVat;
}

function setFisheryFiscalYearStarts(
  input: SiteAidDecisionInput,
  current: string,
  previous: string,
  secondPrevious: string,
  currentEnd: string,
): void {
  input.aid.deMinimisFisheryFiscalYearStartDate = current;
  input.aid.deMinimisFisheryPreviousFiscalYearStartDate = previous;
  input.aid.deMinimisFisherySecondPreviousFiscalYearStartDate = secondPrevious;
  input.aid.deMinimisFisheryCurrentFiscalYearEndDate = currentEnd;
}

const EU_MEMBER_STATE_CASES = [
  ["AT", "Autriche", "Austria"],
  ["BE", "Belgique", "Belgium"],
  ["BG", "Bulgarie", "Bulgaria"],
  ["HR", "Croatie", "Croatia"],
  ["CY", "Chypre", "Cyprus"],
  ["CZ", "Tchéquie", "Czechia"],
  ["DK", "Danemark", "Denmark"],
  ["EE", "Estonie", "Estonia"],
  ["FI", "Finlande", "Finland"],
  ["FR", "France", "français"],
  ["DE", "Allemagne", "Germany"],
  ["GR", "Grèce", "Greece"],
  ["HU", "Hongrie", "Hungary"],
  ["IE", "Irlande", "Ireland"],
  ["IT", "Italie", "Italy"],
  ["LV", "Lettonie", "Latvia"],
  ["LT", "Lituanie", "Lithuania"],
  ["LU", "Luxembourg", "Luxembourg"],
  ["MT", "Malte", "Malta"],
  ["NL", "Pays-Bas", "Netherlands"],
  ["PL", "Pologne", "Poland"],
  ["PT", "Portugal", "Portugal"],
  ["RO", "Roumanie", "Romania"],
  ["SK", "Slovaquie", "Slovakia"],
  ["SI", "Slovénie", "Slovenia"],
  ["ES", "Espagne", "Spain"],
  ["SE", "Suède", "Sweden"],
] as const;

describe("site aid decision — financial contract", () => {
  it("keeps the 10k/7k/20%/30% example conservative without notification", () => {
    const result = calculateSiteAidDecision(completeInput());

    expect(result).toMatchObject({
      code: "candidate-not-budgeted",
      invoiceTotalExVat: 10_000,
      invoiceVat: 2_000,
      invoiceTotalIncludingVat: 12_000,
      deductibleVat: 2_000,
      nonDeductibleVat: 0,
      eligibleSubtotalExVat: 7_000,
      theoreticalAidNonAcquired: 2_100,
      budgetedAid: 0,
      economicCostWithoutAid: 10_000,
      maximumCashNeed: 12_000,
      cashGap: 0,
      waitingMarginCost: 500,
      waitComparisonAid: 2_100,
      waitDominatesComparisonAid: false,
    });
    expect(result.notifiedAidUnderConditions).toBeUndefined();
    expect(result.receivedAid).toBeUndefined();
    expect(result.conditionalCostAfterNotification).toBeUndefined();
    expect(result.realizedCostAfterReceipt).toBeUndefined();
  });

  it("calculates 7.9k with fully deductible VAT and 9.9k with no VAT deduction", () => {
    const deductible = calculateSiteAidDecision(
      completeInput({ stage: "notified" }),
    );
    const nonDeductible = calculateSiteAidDecision(
      completeInput({
        stage: "notified",
        deductibleVatFraction: "no",
      }),
    );

    expect(deductible).toMatchObject({
      code: "notified-usable",
      notifiedAidUnderConditions: 2_100,
      conditionalCostAfterNotification: 7_900,
      realizedCostAfterReceipt: undefined,
    });
    expect(nonDeductible).toMatchObject({
      code: "notified-usable",
      deductibleVat: 0,
      nonDeductibleVat: 2_000,
      economicCostWithoutAid: 12_000,
      conditionalCostAfterNotification: 9_900,
    });
  });

  it("separates a conditional notification from an amount actually received", () => {
    const notified = calculateSiteAidDecision(
      completeInput({ stage: "notified" }),
    );
    const received = calculateSiteAidDecision(
      completeInput({ stage: "received" }),
    );

    expect(notified).toMatchObject({
      code: "notified-usable",
      notifiedAidUnderConditions: 2_100,
      receivedAid: undefined,
      conditionalCostAfterNotification: 7_900,
      realizedCostAfterReceipt: undefined,
    });
    expect(received).toMatchObject({
      code: "received",
      notifiedAidUnderConditions: 2_100,
      receivedAid: 2_100,
      aidReceiptDifference: 0,
      conditionalCostAfterNotification: undefined,
      realizedCostAfterReceipt: 7_900,
    });
  });

  it("applies the cap to the eligible subtotal", () => {
    const input = completeInput();
    input.aid.capAmount = 1_000;

    expect(calculateSiteAidDecision(input)).toMatchObject({
      code: "candidate-not-budgeted",
      eligibleSubtotalExVat: 7_000,
      theoreticalAidNonAcquired: 1_000,
      budgetedAid: 0,
    });
  });

  it("calculates mixed VAT rates and a partial deductible fraction line by line", () => {
    const input = completeInput();
    input.quoteLines = [
      {
        label: "Développement",
        amountExVat: 4_000,
        vatRatePercent: 20,
        deductibleVatFraction: "yes",
        eligibility: "yes",
        evidence: "Article 4",
      },
      {
        label: "Formation",
        amountExVat: 3_000,
        vatRatePercent: 10,
        deductibleVatFraction: 0.5,
        eligibility: "yes",
        evidence: "Article 5",
      },
      {
        label: "Communication exclue",
        amountExVat: 3_000,
        vatRatePercent: 5.5,
        deductibleVatFraction: "no",
        eligibility: "no",
        evidence: "Annexe 2",
      },
    ];

    expect(calculateSiteAidDecision(input)).toMatchObject({
      code: "candidate-not-budgeted",
      invoiceTotalExVat: 10_000,
      invoiceVat: 1_265,
      invoiceTotalIncludingVat: 11_265,
      deductibleVat: 950,
      nonDeductibleVat: 315,
      economicCostWithoutAid: 10_315,
      eligibleSubtotalExVat: 7_000,
      theoreticalAidNonAcquired: 2_100,
    });
  });

  it("distinguishes reimbursement, advance and direct payment for maximum cash", () => {
    const reimbursement = calculateSiteAidDecision(
      completeInput({
        stage: "notified",
        paymentMode: "reimbursement",
        documentedPrepaymentPercent: 0,
      }),
    );
    const advance = calculateSiteAidDecision(
      completeInput({
        stage: "notified",
        paymentMode: "advance",
        documentedPrepaymentPercent: 50,
      }),
    );
    const direct = calculateSiteAidDecision(
      completeInput({
        stage: "notified",
        paymentMode: "direct",
        documentedPrepaymentPercent: 100,
      }),
    );

    expect(reimbursement).toMatchObject({
      documentedPrepaymentAmount: 0,
      maximumCashNeed: 12_000,
    });
    expect(advance).toMatchObject({
      documentedPrepaymentAmount: 1_050,
      maximumCashNeed: 10_950,
    });
    expect(direct).toMatchObject({
      documentedPrepaymentAmount: 2_100,
      maximumCashNeed: 9_900,
    });
  });

  it("reports a cash gap without treating the notification as received", () => {
    expect(
      calculateSiteAidDecision(
        completeInput({
          stage: "notified",
          availableCash: 10_000,
        }),
      ),
    ).toMatchObject({
      code: "notified-cash-gap",
      notifiedAidUnderConditions: 2_100,
      receivedAid: undefined,
      maximumCashNeed: 12_000,
      cashGap: 2_000,
    });
  });

  it("does not wait solely for aid when waiting cost equals or exceeds theory", () => {
    const equal = calculateSiteAidDecision(
      completeInput({
        stage: "notified",
        waitMonths: 3,
        monthlyMargin: 700,
      }),
    );
    const greater = calculateSiteAidDecision(
      completeInput({
        stage: "notified",
        waitMonths: 4,
        monthlyMargin: 700,
      }),
    );
    const candidate = calculateSiteAidDecision(
      completeInput({
        waitMonths: 3,
        monthlyMargin: 700,
      }),
    );
    const feesReachThreshold = calculateSiteAidDecision(
      completeInput({
        stage: "notified",
        waitMonths: 1,
        monthlyMargin: 1_000,
        fees: 1_100,
      }),
    );

    expect(equal).toMatchObject({
      code: "notified-wait-dominated",
      waitingMarginCost: 2_100,
      theoreticalAidNonAcquired: 2_100,
      waitDominatesComparisonAid: true,
    });
    expect(greater).toMatchObject({
      code: "notified-wait-dominated",
      waitingMarginCost: 2_800,
      waitDominatesComparisonAid: true,
    });
    expect(candidate).toMatchObject({
      code: "candidate-not-budgeted",
      budgetedAid: 0,
      waitDominatesComparisonAid: true,
    });
    expect(candidate.warnings.join(" ")).toContain(
      "ne pas attendre uniquement",
    );
    expect(feesReachThreshold).toMatchObject({
      code: "notified-wait-dominated",
      waitingMarginCost: 1_000,
      waitingAndFeeCost: 2_100,
      waitDominatesComparisonAid: true,
    });
  });

  it("compares waiting with the notified amount once it is known", () => {
    const lowerNotification = calculateSiteAidDecision(
      completeInput({
        stage: "notified",
        legalAidValueAmount: 1_000,
        approvedFinancialContributionAmount: 1_000,
        waitMonths: 1,
        monthlyMargin: 1_500,
      }),
    );
    const equalNotification = calculateSiteAidDecision(
      completeInput({
        stage: "notified",
        legalAidValueAmount: 1_000,
        approvedFinancialContributionAmount: 1_000,
        waitMonths: 2,
        monthlyMargin: 500,
      }),
    );

    expect(lowerNotification).toMatchObject({
      code: "notified-wait-dominated",
      theoreticalAidNonAcquired: 2_100,
      notifiedAidUnderConditions: 1_000,
      waitComparisonAid: 1_000,
      waitingAndFeeCost: 1_500,
      waitDominatesComparisonAid: true,
    });
    expect(equalNotification).toMatchObject({
      code: "notified-wait-dominated",
      waitComparisonAid: 1_000,
      waitingAndFeeCost: 1_000,
      waitDominatesComparisonAid: true,
    });
  });

  it("combines an uneconomic wait with a cash gap instead of implying launch", () => {
    expect(
      calculateSiteAidDecision(
        completeInput({
          stage: "notified",
          availableCash: 5_000,
          waitMonths: 1,
          monthlyMargin: 2_100,
        }),
      ),
    ).toMatchObject({
      code: "notified-wait-dominated-cash-gap",
      cashGap: 7_000,
      waitDominatesComparisonAid: true,
    });
  });

  it("preserves notification history and audits a lower receipt", () => {
    expect(
      calculateSiteAidDecision(
        completeInput({
          stage: "received",
          legalAidValueAmount: 2_100,
          approvedFinancialContributionAmount: 2_100,
          actualFinancialContributionAmount: 1_800,
        }),
      ),
    ).toMatchObject({
      code: "received",
      notifiedAidUnderConditions: 2_100,
      receivedAid: 1_800,
      aidReceiptDifference: -300,
      realizedCostAfterReceipt: 8_200,
    });
  });

  it("uses the amount paid to the supplier for a direct-payment cash reduction", () => {
    expect(
      calculateSiteAidDecision(
        completeInput({
          stage: "received",
          legalAidValueAmount: 2_100,
          approvedFinancialContributionAmount: 2_100,
          actualFinancialContributionAmount: 1_800,
          paymentMode: "direct",
          documentedPrepaymentPercent: 100,
        }),
      ),
    ).toMatchObject({
      code: "received",
      notifiedAidUnderConditions: 2_100,
      receivedAid: 1_800,
      documentedPrepaymentAmount: 1_800,
      maximumCashNeed: 10_200,
      realizedCostAfterReceipt: 8_200,
    });
  });

  it("does not require proof of a zero company remainder when direct payment covers the full invoice", () => {
    const input = completeInput({
      stage: "received",
      legalAidValueAmount: 100,
      approvedFinancialContributionAmount: 100,
      actualFinancialContributionAmount: 100,
      paymentMode: "direct",
      documentedPrepaymentPercent: 100,
      availableCash: 0,
    });
    input.quoteLines = [
      {
        label: "Prestation intégralement couverte",
        amountExVat: 100,
        vatRatePercent: 0,
        deductibleVatFraction: "yes",
        eligibility: "yes",
        evidence: "Article 4",
      },
    ];
    input.aid.ratePercent = 100;
    input.aid.capAmount = 100;
    input.aid.supplierPaymentReference = "";

    const result = calculateSiteAidDecision(input);

    expect(result).toMatchObject({
      code: "received",
      invoiceTotalIncludingVat: 100,
      receivedAid: 100,
      realizedCostAfterReceipt: 0,
      documentedPrepaymentAmount: 100,
      maximumCashNeed: 0,
      cashGap: 0,
      directPaymentArithmeticCoversInvoiceInFull: true,
      directPaymentCoversInvoiceInFull: true,
      directPaymentCoverageStatus: "full-documented",
      directCompanySupplierRemainder: 0,
      supplierRemainderEvidenceRequired: false,
    });
    expect(result.missingEvidence.join(" ")).not.toContain(
      "Reste payé par l’entreprise",
    );
  });

  it("still requires proof of the company remainder when direct payment is partial", () => {
    const input = completeInput({
      stage: "received",
      legalAidValueAmount: 100,
      approvedFinancialContributionAmount: 100,
      actualFinancialContributionAmount: 99.99,
      paymentMode: "direct",
      documentedPrepaymentPercent: 100,
    });
    input.quoteLines = [
      {
        label: "Prestation partiellement couverte",
        amountExVat: 100,
        vatRatePercent: 0,
        deductibleVatFraction: "yes",
        eligibility: "yes",
        evidence: "Article 4",
      },
    ];
    input.aid.ratePercent = 100;
    input.aid.capAmount = 100;
    input.aid.supplierPaymentReference = "";

    const result = calculateSiteAidDecision(input);

    expect(result).toMatchObject({
      code: "incomplete",
      invoiceTotalIncludingVat: 100,
      notifiedAidUnderConditions: 100,
      receivedAid: undefined,
      realizedCostAfterReceipt: undefined,
      maximumCashNeed: 100,
      directPaymentArithmeticCoversInvoiceInFull: false,
      directPaymentCoversInvoiceInFull: false,
      directPaymentCoverageStatus: "partial",
      directCompanySupplierRemainder: 0.01,
      supplierRemainderEvidenceRequired: true,
    });
    expect(result.missingEvidence.join(" ")).toContain(
      "Reste payé par l’entreprise",
    );
  });

  it("never spends a notification that exceeds the 2,100 euro theory", () => {
    const result = calculateSiteAidDecision(
      completeInput({
        stage: "notified",
        legalAidValueAmount: 2_101,
        approvedFinancialContributionAmount: 2_101,
        paymentMode: "advance",
        documentedPrepaymentPercent: 50,
      }),
    );

    expect(result).toMatchObject({
      code: "invalid",
      theoreticalAidNonAcquired: 2_100,
      notifiedAidUnderConditions: undefined,
      conditionalCostAfterNotification: undefined,
      documentedPrepaymentAmount: undefined,
      maximumCashNeed: 12_000,
      waitComparisonAid: undefined,
    });
    expect(result.invalidIssues.join(" ")).toContain("aide théorique");
  });

  it("never spends a notification above the cap when theory is unsupported", () => {
    const result = calculateSiteAidDecision(
      completeInput({
        basisScope: "other",
        stage: "notified",
        legalAidValueAmount: 7_501,
        approvedFinancialContributionAmount: 7_501,
        paymentMode: "advance",
        documentedPrepaymentPercent: 50,
      }),
    );

    expect(result).toMatchObject({
      code: "invalid",
      theoreticalAidNonAcquired: undefined,
      notifiedAidUnderConditions: undefined,
      conditionalCostAfterNotification: undefined,
      documentedPrepaymentAmount: undefined,
      maximumCashNeed: 12_000,
    });
    expect(result.invalidIssues.join(" ")).toContain("plafond");
  });

  it("preserves the approved contribution but never spends an excessive payment", () => {
    const result = calculateSiteAidDecision(
      completeInput({
        stage: "received",
        legalAidValueAmount: 1_800,
        approvedFinancialContributionAmount: 1_800,
        actualFinancialContributionAmount: 1_900,
        paymentMode: "direct",
        documentedPrepaymentPercent: 100,
      }),
    );

    expect(result).toMatchObject({
      code: "invalid",
      approvedFinancialContributionUnderConditions: 1_800,
      notifiedAidUnderConditions: 1_800,
      receivedAid: undefined,
      aidReceiptDifference: undefined,
      realizedCostAfterReceipt: undefined,
      documentedPrepaymentAmount: undefined,
      maximumCashNeed: 12_000,
    });
  });

  it.each([
    ["reimbursement", 50],
    ["advance", 0],
    ["direct", 99],
  ] as const)(
    "keeps cash prudent for inconsistent %s payment terms",
    (paymentMode, documentedPrepaymentPercent) => {
      const result = calculateSiteAidDecision(
        completeInput({
          stage: "notified",
          paymentMode,
          documentedPrepaymentPercent,
        }),
      );

      expect(result).toMatchObject({
        code: "invalid",
        notifiedAidUnderConditions: 2_100,
        conditionalCostAfterNotification: 7_900,
        documentedPrepaymentAmount: undefined,
        maximumCashNeed: 12_000,
      });
    },
  );
});

describe("site aid decision — R6 separated legal and financial amounts", () => {
  it.each(["loan", "guarantee"] as const)(
    "uses a %s ESB only for legal cumulation, never for project cost or cash",
    (instrumentKind) => {
      const input = completeInput({
        stage: "notified",
        instrumentKind,
        legalAidValueAmount: 20_000,
        approvedFinancialContributionAmount: 0,
      });
      input.aidRegister = [
        registerEntry({
          amount: 290_001,
          legalGrantDate: "2025-01-15",
        }),
      ];

      const result = calculateSiteAidDecision(input);

      expect(result).toMatchObject({
        code: "excluded",
        legalAidValueUnderConditions: 20_000,
        approvedFinancialContributionUnderConditions: undefined,
        notifiedAidUnderConditions: undefined,
        conditionalCostAfterNotification: undefined,
        documentedPrepaymentAmount: undefined,
        maximumCashNeed: 12_000,
        waitComparisonAid: undefined,
      });
      expect(result.warnings.join(" ")).toContain("310 001 €");
      expect(result.toolLimitations.join(" ")).toMatch(
        /Instrument non modélisé financièrement.*nominal d’un prêt.*garantie/,
      );
    },
  );

  it("lets a documented grant contribution reduce cost and advance independently of its legal value", () => {
    const result = calculateSiteAidDecision(
      completeInput({
        stage: "notified",
        instrumentKind: "grant",
        legalAidValueAmount: 5_000,
        approvedFinancialContributionAmount: 2_100,
        paymentMode: "advance",
        documentedPrepaymentPercent: 50,
      }),
    );

    expect(result).toMatchObject({
      code: "notified-usable",
      legalAidValueUnderConditions: 5_000,
      approvedFinancialContributionUnderConditions: 2_100,
      conditionalCostAfterNotification: 7_900,
      documentedPrepaymentAmount: 1_050,
      maximumCashNeed: 10_950,
    });
  });

  it("fails closed when the instrument is unknown", () => {
    const result = calculateSiteAidDecision(
      completeInput({
        stage: "notified",
        instrumentKind: "unknown",
        approvedFinancialContributionAmount: 0,
      }),
    );

    expect(result).toMatchObject({
      code: "incomplete",
      legalAidValueUnderConditions: 2_100,
      approvedFinancialContributionUnderConditions: undefined,
      conditionalCostAfterNotification: undefined,
      documentedPrepaymentAmount: undefined,
      maximumCashNeed: 12_000,
      waitComparisonAid: undefined,
    });
    expect(result.missingEvidence.join(" ")).toContain("Instrument d’aide");
  });

  it("does not expose direct coverage from an actual payment above the approved or legal amount", () => {
    const input = completeInput({
      stage: "received",
      legalAidValueAmount: 90,
      approvedFinancialContributionAmount: 90,
      actualFinancialContributionAmount: 100,
      paymentMode: "direct",
      documentedPrepaymentPercent: 100,
    });
    setSingleEligibleInvoice(input);
    input.aid.supplierPaymentReference = "";

    const result = calculateSiteAidDecision(input);
    const report = buildSiteAidDecisionReport(input);

    expect(result).toMatchObject({
      code: "invalid",
      directPaymentCoversInvoiceInFull: undefined,
      directCompanySupplierRemainder: undefined,
      supplierRemainderEvidenceRequired: true,
      actualFinancialContribution: undefined,
      realizedCostAfterReceipt: undefined,
      documentedPrepaymentAmount: undefined,
      maximumCashNeed: 100,
    });
    expect(result.missingEvidence.join(" ")).toContain(
      "Reste payé par l’entreprise",
    );
    expect(report).not.toContain(
      "Reste payé par l’entreprise au fournisseur : 0 € — aucune preuve de reste requise",
    );
    expect(report).toContain("Reste payé par l’entreprise au fournisseur : ND");
  });

  it("keeps direct coverage unknown when the invoice total is unknown", () => {
    const input = completeInput({
      stage: "received",
      legalAidValueAmount: 100,
      approvedFinancialContributionAmount: 100,
      actualFinancialContributionAmount: 100,
      paymentMode: "direct",
      documentedPrepaymentPercent: 100,
    });
    setSingleEligibleInvoice(input);
    input.quoteLines[0].amountExVat = undefined;
    input.aid.supplierPaymentReference = "";

    const result = calculateSiteAidDecision(input);

    expect(result).toMatchObject({
      code: "incomplete",
      invoiceTotalIncludingVat: undefined,
      directPaymentCoversInvoiceInFull: undefined,
      directCompanySupplierRemainder: undefined,
      supplierRemainderEvidenceRequired: true,
    });
    expect(result.missingEvidence.join(" ")).toContain(
      "Reste payé par l’entreprise",
    );
  });

  it("rejects a direct supplier payment allocated above the invoice total", () => {
    const input = completeInput({
      basisScope: "other",
      stage: "received",
      legalAidValueAmount: 101,
      approvedFinancialContributionAmount: 101,
      actualFinancialContributionAmount: 101,
      paymentMode: "direct",
      documentedPrepaymentPercent: 100,
    });
    setSingleEligibleInvoice(input);
    input.aid.basisScope = "other";
    input.aid.capAmount = 200;

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("invalid");
    expect(result.invalidIssues.join(" ")).toContain("dépasse son total TTC");
    expect(result).toMatchObject({
      directPaymentCoversInvoiceInFull: undefined,
      directCompanySupplierRemainder: undefined,
      supplierRemainderEvidenceRequired: true,
      actualFinancialContribution: undefined,
    });
  });
});

describe("site aid decision — R7 fail-closed financial allocation", () => {
  it("publishes the current engine contract", () => {
    expect(SITE_AID_DECISION_VERSION).toBe("site-aid-decision-r31-2026-07-27");
  });

  it.each([
    ["reimbursement", 0],
    ["advance", 50],
    ["direct", 100],
  ] as const)(
    "rejects an approved contribution above the known invoice TTC in %s mode even on an unsupported basis",
    (paymentMode, documentedPrepaymentPercent) => {
      const input = completeInput({
        basisScope: "other",
        stage: "notified",
        legalAidValueAmount: 10_000,
        approvedFinancialContributionAmount: 10_000,
        paymentMode,
        documentedPrepaymentPercent,
        fees: 7.25,
      });
      setSingleEligibleInvoice(input);
      input.aid.basisScope = "other";
      input.aid.capAmount = 20_000;

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("invalid");
      expect(result.invalidIssues.join(" ")).toContain(
        "Contribution financière approuvée",
      );
      expect(result.invalidIssues.join(" ")).toContain(
        "dépasse son total TTC connu",
      );
      expect(result).toMatchObject({
        invoiceTotalIncludingVat: 100,
        approvedFinancialContributionUnderConditions: undefined,
        conditionalCostAfterNotification: undefined,
        documentedPrepaymentAmount: undefined,
        waitComparisonAid: undefined,
        maximumCashNeed: 107.25,
      });
    },
  );

  it.each([
    ["reimbursement", 0],
    ["advance", 50],
    ["direct", 100],
  ] as const)(
    "rejects an effective contribution above the known invoice TTC in %s mode even on an unsupported basis",
    (paymentMode, documentedPrepaymentPercent) => {
      const input = completeInput({
        basisScope: "other",
        stage: "received",
        legalAidValueAmount: 10_000,
        approvedFinancialContributionAmount: 10_000,
        actualFinancialContributionAmount: 10_000,
        paymentMode,
        documentedPrepaymentPercent,
        fees: 7.25,
      });
      setSingleEligibleInvoice(input);
      input.aid.basisScope = "other";
      input.aid.capAmount = 20_000;

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("invalid");
      expect(result.invalidIssues.join(" ")).toContain(
        "Paiement effectif de l’aide",
      );
      expect(result.invalidIssues.join(" ")).toContain(
        "dépasse son total TTC connu",
      );
      expect(result).toMatchObject({
        invoiceTotalIncludingVat: 100,
        actualFinancialContribution: undefined,
        realizedCostAfterReceipt: undefined,
        documentedPrepaymentAmount: undefined,
        waitComparisonAid: undefined,
        maximumCashNeed: 107.25,
      });
      if (paymentMode === "direct") {
        expect(result).toMatchObject({
          directPaymentArithmeticCoversInvoiceInFull: undefined,
          directPaymentCoversInvoiceInFull: undefined,
          directPaymentCoverageStatus: "invalid",
          directCompanySupplierRemainder: undefined,
          supplierRemainderEvidenceRequired: true,
        });
      }
    },
  );

  it.each(["notified", "received"] as const)(
    "keeps every aid-dependent financial output ND on another basis at the %s stage",
    (stage) => {
      const input = completeInput({
        basisScope: "other",
        stage,
        legalAidValueAmount: 80,
        approvedFinancialContributionAmount: 80,
        actualFinancialContributionAmount:
          stage === "received" ? 80 : undefined,
        paymentMode: "advance",
        documentedPrepaymentPercent: 50,
        waitMonths: 1,
        monthlyMargin: 200,
        fees: 7.25,
      });
      setSingleEligibleInvoice(input);
      input.aid.basisScope = "other";
      input.aid.capAmount = 100;

      const result = calculateSiteAidDecision(input);

      expect(result).toMatchObject({
        code: "unsupported-basis",
        invoiceTotalIncludingVat: 100,
        economicCostWithoutAid: 100,
        theoreticalAidNonAcquired: undefined,
        approvedFinancialContributionUnderConditions: undefined,
        actualFinancialContribution: undefined,
        conditionalCostAfterNotification: undefined,
        realizedCostAfterReceipt: undefined,
        documentedPrepaymentAmount: undefined,
        waitComparisonAid: undefined,
        waitDominatesComparisonAid: undefined,
        maximumCashNeed: 107.25,
      });
      expect(
        [
          result.conditionalCostAfterNotification,
          result.realizedCostAfterReceipt,
        ].filter((value) => value !== undefined && value < 0),
      ).toEqual([]);
    },
  );

  it.each([
    {
      label: "annual revenue",
      prepare: () => {
        const input = completeInput();
        input.profile.annualRevenueExVat = 99.999;
        return input;
      },
      output: (result: ReturnType<typeof calculateSiteAidDecision>) =>
        result.code === "invalid" ? undefined : result.economicCostWithoutAid,
    },
    {
      label: "quote line",
      prepare: () => {
        const input = completeInput();
        input.quoteLines[0].amountExVat = 99.999;
        return input;
      },
      output: (result: ReturnType<typeof calculateSiteAidDecision>) =>
        result.invoiceTotalIncludingVat,
    },
    {
      label: "cap",
      prepare: () => {
        const input = completeInput();
        input.aid.capAmount = 99.999;
        return input;
      },
      output: (result: ReturnType<typeof calculateSiteAidDecision>) =>
        result.theoreticalAidNonAcquired,
    },
    {
      label: "legal aid value",
      prepare: () => {
        const input = completeInput({
          stage: "notified",
          legalAidValueAmount: 99.999,
          approvedFinancialContributionAmount: 99,
        });
        setSingleEligibleInvoice(input);
        return input;
      },
      output: (result: ReturnType<typeof calculateSiteAidDecision>) =>
        result.legalAidValueUnderConditions,
    },
    {
      label: "approved contribution",
      prepare: () => {
        const input = completeInput({
          stage: "notified",
          legalAidValueAmount: 100,
          approvedFinancialContributionAmount: 99.999,
        });
        setSingleEligibleInvoice(input);
        return input;
      },
      output: (result: ReturnType<typeof calculateSiteAidDecision>) =>
        result.approvedFinancialContributionUnderConditions,
    },
    {
      label: "effective contribution",
      prepare: () => {
        const input = completeInput({
          stage: "received",
          legalAidValueAmount: 100,
          approvedFinancialContributionAmount: 100,
          actualFinancialContributionAmount: 99.999,
        });
        setSingleEligibleInvoice(input);
        return input;
      },
      output: (result: ReturnType<typeof calculateSiteAidDecision>) =>
        result.actualFinancialContribution,
    },
    {
      label: "register amount",
      prepare: () => {
        const input = completeInput();
        input.aidRegister = [registerEntry({ amount: 99.999 })];
        return input;
      },
      output: (result: ReturnType<typeof calculateSiteAidDecision>) =>
        result.registeredAidTotal,
    },
    {
      label: "fees",
      prepare: () => completeInput({ fees: 99.999 }),
      output: (result: ReturnType<typeof calculateSiteAidDecision>) =>
        result.aidSpecificFees,
    },
    {
      label: "available cash",
      prepare: () => completeInput({ availableCash: 99.999 }),
      output: (result: ReturnType<typeof calculateSiteAidDecision>) =>
        result.cashGap,
    },
    {
      label: "monthly margin",
      prepare: () => completeInput({ monthlyMargin: 99.999 }),
      output: (result: ReturnType<typeof calculateSiteAidDecision>) =>
        result.waitingMarginCost,
    },
  ])(
    "rejects more than two decimal places before rounding: $label",
    ({ prepare, output }) => {
      const result = calculateSiteAidDecision(prepare());

      expect(result.code).toBe("invalid");
      expect(result.invalidIssues.join(" ")).toContain(
        "au plus deux décimales",
      );
      expect(output(result)).toBeUndefined();
    },
  );

  it.each([
    [
      "notification",
      (input: SiteAidDecisionInput) => {
        input.gateEvidence.notification = "";
      },
    ],
    [
      "invoice reconciliation",
      (input: SiteAidDecisionInput) => {
        input.aid.finalInvoiceMatchesQuote = "unknown";
      },
    ],
    [
      "invoice date",
      (input: SiteAidDecisionInput) => {
        input.aid.finalInvoiceDate = "";
      },
    ],
    [
      "invoice reference",
      (input: SiteAidDecisionInput) => {
        input.aid.finalInvoiceReference = "";
      },
    ],
    [
      "payment date",
      (input: SiteAidDecisionInput) => {
        input.aid.receiptDate = "";
      },
    ],
    [
      "payment reference",
      (input: SiteAidDecisionInput) => {
        input.aid.receiptReference = "";
      },
    ],
  ] as const)(
    "keeps an arithmetic zero remainder provisional while %s is missing",
    (_label, removeEvidence) => {
      const input = completeInput({
        stage: "received",
        legalAidValueAmount: 100,
        approvedFinancialContributionAmount: 100,
        actualFinancialContributionAmount: 100,
        paymentMode: "direct",
        documentedPrepaymentPercent: 100,
      });
      setSingleEligibleInvoice(input);
      input.aid.supplierPaymentReference = "";
      removeEvidence(input);

      const result = calculateSiteAidDecision(input);
      const report = buildSiteAidDecisionReport(input);

      expect(result).toMatchObject({
        code: "incomplete",
        directPaymentArithmeticCoversInvoiceInFull: true,
        directPaymentCoversInvoiceInFull: undefined,
        directPaymentCoverageStatus: "full-provisional",
        directCompanySupplierRemainder: 0,
        supplierRemainderEvidenceRequired: false,
        actualFinancialContribution: undefined,
      });
      expect(result.missingEvidence.join(" ")).not.toContain(
        "Reste payé par l’entreprise",
      );
      expect(report).toContain(
        "Reste arithmétique de facture : 0 € — couverture intégrale provisoire",
      );
      expect(report).not.toContain(
        "Référence du reste payé par l’entreprise au fournisseur",
      );
      expect(report).not.toContain("couverture intégrale documentée");
    },
  );

  it("marks a coherent and fully evidenced arithmetic equality as fully documented", () => {
    const input = completeInput({
      stage: "received",
      legalAidValueAmount: 100,
      approvedFinancialContributionAmount: 100,
      actualFinancialContributionAmount: 100,
      paymentMode: "direct",
      documentedPrepaymentPercent: 100,
    });
    setSingleEligibleInvoice(input);
    input.aid.supplierPaymentReference = "";

    expect(calculateSiteAidDecision(input)).toMatchObject({
      code: "received",
      directPaymentArithmeticCoversInvoiceInFull: true,
      directPaymentCoversInvoiceInFull: true,
      directPaymentCoverageStatus: "full-documented",
      directCompanySupplierRemainder: 0,
      supplierRemainderEvidenceRequired: false,
    });
  });

  it("keeps invalid direct-payment data ND and exposes the supplier-proof field", () => {
    const input = completeInput({
      stage: "received",
      legalAidValueAmount: 100,
      approvedFinancialContributionAmount: 100,
      actualFinancialContributionAmount: 99.999,
      paymentMode: "direct",
      documentedPrepaymentPercent: 100,
    });
    setSingleEligibleInvoice(input);
    input.aid.supplierPaymentReference = "";

    const result = calculateSiteAidDecision(input);
    const report = buildSiteAidDecisionReport(input);

    expect(result).toMatchObject({
      code: "invalid",
      directPaymentArithmeticCoversInvoiceInFull: undefined,
      directPaymentCoversInvoiceInFull: undefined,
      directPaymentCoverageStatus: "invalid",
      directCompanySupplierRemainder: undefined,
      supplierRemainderEvidenceRequired: true,
    });
    expect(result.missingEvidence.join(" ")).toContain(
      "Reste payé par l’entreprise",
    );
    expect(report).toContain(
      "Statut de couverture du paiement direct : ND — données invalides",
    );
    expect(report).toContain(
      "Référence du reste payé par l’entreprise au fournisseur",
    );
  });

  it("does not expose a documented full-payment status when chronology is invalid", () => {
    const input = completeInput({
      stage: "received",
      legalAidValueAmount: 100,
      approvedFinancialContributionAmount: 100,
      actualFinancialContributionAmount: 100,
      paymentMode: "direct",
      documentedPrepaymentPercent: 100,
    });
    setSingleEligibleInvoice(input);
    input.profile.verificationDate = "2026-07-30";
    input.aid.finalInvoiceDate = "2026-07-27";
    input.aid.receiptDate = "2026-07-26";
    input.aid.supplierPaymentReference = "";

    expect(calculateSiteAidDecision(input)).toMatchObject({
      code: "invalid",
      directPaymentArithmeticCoversInvoiceInFull: undefined,
      directPaymentCoversInvoiceInFull: undefined,
      directPaymentCoverageStatus: "invalid",
      directCompanySupplierRemainder: undefined,
      supplierRemainderEvidenceRequired: true,
    });
  });
});

describe("site aid decision — unknowns and invalid values", () => {
  it("never assumes an HT basis when the official basis is unknown or different", () => {
    const unknown = calculateSiteAidDecision(
      completeInput({ basisScope: "unknown" }),
    );
    const unsupported = calculateSiteAidDecision(
      completeInput({ basisScope: "other" }),
    );

    expect(unknown).toMatchObject({
      code: "incomplete",
      eligibleSubtotalExVat: 7_000,
      theoreticalAidNonAcquired: undefined,
    });
    expect(unknown.toolLimitations.join(" ")).toContain(
      "n’authentifie aucune pièce",
    );
    expect(unknown.missingEvidence.join(" ")).toContain("Assiette de calcul");

    expect(unsupported).toMatchObject({
      code: "unsupported-basis",
      eligibleSubtotalExVat: 7_000,
      theoreticalAidNonAcquired: undefined,
    });
    expect(unsupported.toolLimitations.join(" ")).toContain(
      "aucune aide théorique",
    );
  });

  it("keeps each unknown scoped to the outputs it actually determines", () => {
    const cases: Array<{
      mutate: (input: SiteAidDecisionInput) => void;
      economicCost: number | undefined;
      theoreticalAid: number | undefined;
    }> = [
      {
        mutate: (input) => {
          input.quoteLines[0].eligibility = "unknown";
        },
        economicCost: 10_000,
        theoreticalAid: undefined,
      },
      {
        mutate: (input) => {
          input.quoteLines[0].deductibleVatFraction = "unknown";
        },
        economicCost: undefined,
        theoreticalAid: 2_100,
      },
      {
        mutate: (input) => {
          input.gates.cumulativeAid = "unknown";
          input.gateEvidence.cumulativeAid = "";
        },
        economicCost: 10_000,
        theoreticalAid: 2_100,
      },
      {
        mutate: (input) => {
          input.aid.paymentMode = "unknown";
        },
        economicCost: 10_000,
        theoreticalAid: 2_100,
      },
      {
        mutate: (input) => {
          input.aid.documentedPrepaymentPercent = "unknown";
        },
        economicCost: 10_000,
        theoreticalAid: 2_100,
      },
      {
        mutate: (input) => {
          input.gates.notification = "unknown";
          input.gateEvidence.notification = "";
        },
        economicCost: 10_000,
        theoreticalAid: 2_100,
      },
      {
        mutate: (input) => {
          input.quoteLines[0].evidence = " ";
        },
        economicCost: 10_000,
        theoreticalAid: undefined,
      },
    ];

    for (const { mutate, economicCost, theoreticalAid } of cases) {
      const input = completeInput();
      mutate(input);
      const result = calculateSiteAidDecision(input);
      expect(result.code).toBe("incomplete");
      expect(result.invoiceTotalIncludingVat).toBe(12_000);
      expect(result.economicCostWithoutAid).toBe(economicCost);
      expect(result.theoreticalAidNonAcquired).toBe(theoreticalAid);
      expect(result.conditionalCostAfterNotification).toBeUndefined();
      expect(result.realizedCostAfterReceipt).toBeUndefined();
      expect(result.missingEvidence.length).toBeGreaterThan(0);
    }
  });

  it("never spends an unproved notification in cost or treasury outputs", () => {
    const input = completeInput({
      stage: "notified",
      paymentMode: "advance",
      documentedPrepaymentPercent: 50,
      waitMonths: 1,
      monthlyMargin: 3_000,
    });
    input.gateEvidence.notification = "";

    expect(calculateSiteAidDecision(input)).toMatchObject({
      code: "incomplete",
      notifiedAidUnderConditions: undefined,
      conditionalCostAfterNotification: undefined,
      documentedPrepaymentAmount: undefined,
      maximumCashNeed: 12_000,
      waitComparisonAid: undefined,
      waitDominatesComparisonAid: undefined,
    });
  });

  it("keeps a proved notification visible when the payment mode is unknown without reducing cash", () => {
    const input = completeInput({ stage: "notified" });
    input.aid.paymentMode = "unknown";
    input.aid.documentedPrepaymentPercent = "unknown";

    expect(calculateSiteAidDecision(input)).toMatchObject({
      code: "incomplete",
      notifiedAidUnderConditions: 2_100,
      conditionalCostAfterNotification: 7_900,
      documentedPrepaymentAmount: undefined,
      maximumCashNeed: 12_000,
      cashGap: 0,
    });
  });

  it("does not call an entered receipt realized without its audit trail", () => {
    const input = completeInput({
      stage: "received",
      legalAidValueAmount: 2_100,
      approvedFinancialContributionAmount: 2_100,
      actualFinancialContributionAmount: 1_800,
    });
    input.aid.receiptReference = "";

    expect(calculateSiteAidDecision(input)).toMatchObject({
      code: "incomplete",
      notifiedAidUnderConditions: 2_100,
      receivedAid: undefined,
      aidReceiptDifference: undefined,
      realizedCostAfterReceipt: undefined,
    });
  });

  it.each([
    "finalInvoiceDate",
    "finalInvoiceReference",
    "supplierPaymentReference",
  ] as const)(
    "requires %s before exposing a received amount",
    (missingField) => {
      const input = completeInput({
        stage: "received",
        legalAidValueAmount: 2_100,
        approvedFinancialContributionAmount: 2_100,
        actualFinancialContributionAmount: 1_800,
      });
      input.aid[missingField] = "";

      expect(calculateSiteAidDecision(input)).toMatchObject({
        code: "incomplete",
        notifiedAidUnderConditions: 2_100,
        receivedAid: undefined,
        aidReceiptDifference: undefined,
        realizedCostAfterReceipt: undefined,
      });
    },
  );

  it("rejects an impossible final-invoice and receipt chronology", () => {
    const input = completeInput({
      stage: "received",
      legalAidValueAmount: 2_100,
      approvedFinancialContributionAmount: 2_100,
      actualFinancialContributionAmount: 1_800,
    });
    input.profile.verificationDate = "2026-07-30";
    input.aid.finalInvoiceDate = "2026-07-27";
    input.aid.receiptDate = "2026-07-26";

    expect(
      calculateSiteAidDecision(input, { analysisDate: "2026-07-30" }),
    ).toMatchObject({
      code: "invalid",
      notifiedAidUnderConditions: 2_100,
      receivedAid: undefined,
      aidReceiptDifference: undefined,
      realizedCostAfterReceipt: undefined,
    });
  });

  it("rejects blank, negative, non-finite and out-of-range values", () => {
    const blank = createEmptySiteAidDecisionInput();
    expect(blank.authority).toMatchObject({
      scheduleAndAmendmentEvidence: "",
      postAwardEvidenceVerified: "unknown",
      postAwardObligationsEvidence: "",
    });
    expect(blank.aid).toMatchObject({
      similarUndertakingKeysDistinct: "unknown",
      similarUndertakingKeysEvidence: "",
    });
    expect(calculateSiteAidDecision(blank)).toMatchObject({
      code: "invalid",
      invoiceTotalIncludingVat: undefined,
      theoreticalAidNonAcquired: undefined,
    });

    const invalidInputs = [
      (() => {
        const input = completeInput();
        input.quoteLines[0].label = " ";
        return input;
      })(),
      (() => {
        const input = completeInput();
        input.quoteLines[0].amountExVat = -1;
        return input;
      })(),
      (() => {
        const input = completeInput();
        input.quoteLines[0].vatRatePercent = 101;
        return input;
      })(),
      (() => {
        const input = completeInput();
        input.quoteLines[0].deductibleVatFraction = 1.01;
        return input;
      })(),
      (() => {
        const input = completeInput();
        input.aid.ratePercent = Number.POSITIVE_INFINITY;
        return input;
      })(),
      (() => {
        const input = completeInput();
        input.aid.capAmount = -1;
        return input;
      })(),
      (() => {
        const input = completeInput();
        input.availableCash = Number.POSITIVE_INFINITY;
        return input;
      })(),
      (() => {
        const input = completeInput();
        input.wait.monthlyDelayContributionMargin = Number.NaN;
        return input;
      })(),
    ];

    for (const input of invalidInputs) {
      const result = calculateSiteAidDecision(input);
      expect(result.code).toBe("invalid");
      expect(result.invalidIssues.length).toBeGreaterThan(0);
      for (const value of Object.values(result)) {
        if (typeof value === "number")
          expect(Number.isFinite(value)).toBe(true);
      }
    }
  });

  it("rejects inconsistent amounts, stages and payment terms", () => {
    const cases = [
      (() => {
        const input = completeInput({ stage: "notified" });
        input.aid.legalAidValueAmount = 2_101;
        input.aid.approvedFinancialContributionAmount = 2_101;
        return input;
      })(),
      (() => {
        const input = completeInput();
        input.aid.legalAidValueAmount = 1;
        input.aid.approvedFinancialContributionAmount = 1;
        return input;
      })(),
      (() => {
        const input = completeInput();
        input.gates.notification = "yes";
        return input;
      })(),
      (() => {
        const input = completeInput({ stage: "notified" });
        input.gates.notification = "no";
        return input;
      })(),
      completeInput({
        stage: "notified",
        paymentMode: "reimbursement",
        documentedPrepaymentPercent: 50,
      }),
      completeInput({
        stage: "notified",
        paymentMode: "advance",
        documentedPrepaymentPercent: 0,
      }),
      completeInput({
        stage: "notified",
        paymentMode: "direct",
        documentedPrepaymentPercent: 99,
      }),
    ];

    for (const input of cases) {
      expect(calculateSiteAidDecision(input).code).toBe("invalid");
    }
  });

  it("rejects runtime-corrupted enum values instead of silently calculating", () => {
    const corruptedEligibility = completeInput();
    corruptedEligibility.quoteLines[0].eligibility =
      "corrupt" as unknown as SiteAidTriState;

    const corruptedSameBase = completeInput();
    corruptedSameBase.aidRegister = [
      registerEntry({
        authority: "Région",
        scheme: "Aide antérieure",
        legalBasisStatus: "de-minimis",
        regime: "Règlement UE 2023/2831",
        nonDeMinimisLegalBasis: "",
        nonDeMinimisEvidenceReference: "",
        memberState: "France",
        singleUndertakingScope: "Groupe A",
        similarUndertakingKeysDistinct: "unknown",
        similarUndertakingKeysEvidence: "",
        amount: 1_000,
        legalGrantDate: "2026-01-01",
        expenses: "Facture distincte",
        sameBaseOrInvoice: "corrupt" as unknown as SiteAidTriState,
      }),
    ];

    const corruptedBasis = completeInput();
    corruptedBasis.aid.basisScope = "corrupt" as unknown as SiteAidBasisScope;

    const corruptedPayment = completeInput({ stage: "notified" });
    corruptedPayment.aid.paymentMode =
      "corrupt" as unknown as SiteAidPaymentMode;

    const corruptedStage = completeInput();
    corruptedStage.aid.stage = "corrupt" as unknown as SiteAidStage;

    const corruptedFinalInvoice = completeInput({ stage: "received" });
    corruptedFinalInvoice.aid.finalInvoiceMatchesQuote =
      "corrupt" as unknown as SiteAidTriState;

    const corruptedGate = completeInput();
    corruptedGate.gates.activity = "corrupt" as unknown as SiteAidTriState;

    const corruptedCurrentGrant = completeInput({ stage: "notified" });
    corruptedCurrentGrant.aid.legalGrantStatus =
      "corrupt" as unknown as SiteAidTriState;

    for (const input of [
      corruptedEligibility,
      corruptedSameBase,
      corruptedBasis,
      corruptedPayment,
      corruptedStage,
      corruptedFinalInvoice,
      corruptedGate,
      corruptedCurrentGrant,
    ]) {
      const result = calculateSiteAidDecision(input);
      expect(result.code).toBe("invalid");
      expect(result.invalidIssues.length).toBeGreaterThan(0);
    }
    expect(
      calculateSiteAidDecision(corruptedEligibility).theoreticalAidNonAcquired,
    ).toBeUndefined();
    expect(
      calculateSiteAidDecision(corruptedSameBase).sameBaseAidTotal,
    ).toBeUndefined();
    expect(calculateSiteAidDecision(corruptedSameBase).registeredAidTotal).toBe(
      1_000,
    );
  });

  it("rejects 1e308 before any derived Infinity or NaN can escape", () => {
    const input = completeInput();
    input.quoteLines[0].amountExVat = 1e308;
    const result = calculateSiteAidDecision(input);

    expect(result).toMatchObject({
      code: "invalid",
      invoiceTotalExVat: undefined,
      invoiceVat: undefined,
      invoiceTotalIncludingVat: undefined,
      theoreticalAidNonAcquired: undefined,
      economicCostWithoutAid: undefined,
      maximumCashNeed: undefined,
    });
    for (const value of Object.values(result)) {
      if (typeof value === "number") {
        expect(Number.isFinite(value)).toBe(true);
      }
    }
  });
});

describe("site aid decision — gates and aid register", () => {
  it("starts with no notification when the financial stage is none", () => {
    const input = createEmptySiteAidDecisionInput();

    expect(input.aid.stage).toBe("none");
    expect(input.gates.notification).toBe("no");
  });

  it("keeps a negative gate without proof incomplete, never proved or excluded", () => {
    const input = completeInput();
    input.gates.authority = "no";
    input.gateEvidence.authority = "";
    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("incomplete");
    expect(result.exclusionReasons).toEqual([]);
    expect(result.missingEvidence.join(" ")).toContain(
      "Guichet ou autorité applicable",
    );
    expect(result.explanation).not.toContain("ÉCARTER");
  });

  it("excludes a closed gate without prior notification", () => {
    const input = completeInput();
    input.gates.authority = "no";

    expect(calculateSiteAidDecision(input)).toMatchObject({
      code: "excluded",
      budgetedAid: 0,
    });
  });

  it("keeps a prior written notification usable after the gate closes", () => {
    const input = completeInput({ stage: "notified" });
    input.gates.authority = "no";
    const result = calculateSiteAidDecision(input);

    expect(result).toMatchObject({
      code: "notified-usable",
      notifiedAidUnderConditions: 2_100,
      conditionalCostAfterNotification: 7_900,
    });
    expect(result.exclusionReasons).toEqual([]);
    expect(result.warnings.join(" ")).toContain("notification antérieure");
  });

  it("keeps a declared register, totals same-base aid and requires written cumulation", () => {
    const input = completeInput();
    input.aidRegister = [
      registerEntry({
        authority: "Région",
        scheme: "Aide précédente",
        legalBasisStatus: "de-minimis",
        regime: "Règlement UE 2023/2831",
        nonDeMinimisLegalBasis: "",
        nonDeMinimisEvidenceReference: "",
        memberState: "France",
        singleUndertakingScope: "SAS et filiale contrôlée",
        similarUndertakingKeysDistinct: "unknown",
        similarUndertakingKeysEvidence: "",
        amount: 800,
        legalGrantDate: "2026-02-01",
        expenses: "Audit et conception",
        sameBaseOrInvoice: "yes",
      }),
      registerEntry({
        authority: "Intercommunalité",
        scheme: "Aide équipement",
        legalBasisStatus: "not-de-minimis",
        regime: "",
        nonDeMinimisLegalBasis: "Régime exempté SA.12345, article 4",
        nonDeMinimisEvidenceReference: "Convention attributive CONV-2025-11-15",
        memberState: "France",
        singleUndertakingScope: "SAS et filiale contrôlée",
        similarUndertakingKeysDistinct: "unknown",
        similarUndertakingKeysEvidence: "",
        amount: 1_200,
        legalGrantDate: "2025-11-15",
        expenses: "Matériel distinct",
        sameBaseOrInvoice: "no",
      }),
    ];

    const confirmed = calculateSiteAidDecision(input);
    expect(confirmed).toMatchObject({
      code: "incomplete",
      registeredAidTotal: 2_000,
      sameBaseAidTotal: 800,
      registerLegalBasisResolutions: [
        "de-minimis-general",
        "not-de-minimis-external-review",
      ],
    });
    expect(confirmed.warnings.join(" ")).toContain("même assiette");
    expect(confirmed.missingEvidence.join(" ")).toContain(
      "validation humaine hors outil requise",
    );

    input.aidRegister[0].sameBaseOrInvoice = "unknown";
    const unresolved = calculateSiteAidDecision(input);
    expect(unresolved.code).toBe("incomplete");
    expect(unresolved.registeredAidTotal).toBe(2_000);
    expect(unresolved.sameBaseAidTotal).toBeUndefined();
    expect(unresolved.economicCostWithoutAid).toBe(10_000);

    input.aidRegister[0].sameBaseOrInvoice = "yes";
    input.gates.cumulativeAid = "no";
    expect(calculateSiteAidDecision(input).code).toBe("excluded");
  });

  it("flags a potential 310k de minimis excess without a legal conclusion", () => {
    const input = completeInput();
    input.aidRegister = [
      registerEntry({
        authority: "Région",
        scheme: "Aide 1",
        legalBasisStatus: "de-minimis",
        regime: "Règlement UE 2023/2831",
        nonDeMinimisLegalBasis: "",
        nonDeMinimisEvidenceReference: "",
        memberState: "France",
        singleUndertakingScope: "Groupe A",
        similarUndertakingKeysDistinct: "unknown",
        similarUndertakingKeysEvidence: "",
        amount: 250_000,
        legalGrantDate: "2024-09-01",
        expenses: "Investissement A",
        sameBaseOrInvoice: "no",
      }),
      registerEntry({
        authority: "Métropole",
        scheme: "Aide 2",
        legalBasisStatus: "de-minimis",
        regime: "Règlement UE 2023/2831",
        nonDeMinimisLegalBasis: "",
        nonDeMinimisEvidenceReference: "",
        memberState: "France",
        singleUndertakingScope: "Groupe A",
        similarUndertakingKeysDistinct: "unknown",
        similarUndertakingKeysEvidence: "",
        amount: 60_000,
        legalGrantDate: "2026-02-01",
        expenses: "Investissement B",
        sameBaseOrInvoice: "no",
      }),
    ];

    const result = calculateSiteAidDecision(input);

    expect(result).toMatchObject({
      code: "incomplete",
      registeredAidTotal: 310_000,
      sameBaseAidTotal: 0,
    });
    expect(result.warnings.join(" ")).toMatch(
      /Dépassement potentiel de minimis.*310 000 €.*2023\/2831.*France.*Groupe A.*conclusion.*aide courante/,
    );
    expect(result.warnings.join(" ")).not.toContain(
      "Cumul potentiel de minimis inter-régimes",
    );
  });

  it("includes the legally granted current aid in the general de minimis total", () => {
    const input = completeInput({ stage: "notified" });
    input.aid.deMinimisRegime = "Règlement UE 2023/2831";
    input.aid.deMinimisMemberState = "France";
    input.aid.deMinimisSingleUndertakingScope = "Groupe A";
    input.aid.legalGrantStatus = "yes";
    input.aid.legalGrantDate = "2026-07-26";
    input.aidRegister = [
      registerEntry({
        amount: 299_000,
        legalGrantDate: "2025-01-15",
      }),
    ];

    const result = calculateSiteAidDecision(input);

    expect(result.registeredAidTotal).toBe(299_000);
    expect(result.warnings.join(" ")).toMatch(
      /Dépassement potentiel de minimis général.*301 100 €.*2023\/2831.*aide courante octroyée incluse/,
    );
  });

  it("does not total the current aid before its legal grant is documented", () => {
    const input = completeInput({ stage: "notified" });
    input.aid.deMinimisRegime = "Règlement UE 2023/2831";
    input.aid.deMinimisMemberState = "France";
    input.aid.deMinimisSingleUndertakingScope = "Groupe A";
    input.aid.legalGrantStatus = "unknown";
    input.aid.legalGrantDate = "";
    input.aidRegister = [
      registerEntry({
        amount: 299_000,
        legalGrantDate: "2025-01-15",
      }),
    ];

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("incomplete");
    expect(result.warnings.join(" ")).not.toContain("301 100 €");
    expect(result.missingEvidence.join(" ")).toContain("octroi juridique");
  });

  it.each([
    "Régime régional numérique",
    "Aide de minimis agricole",
    "Aide de minimis pêche et aquaculture",
  ])("keeps an unrecognized current legal basis unknown: %s", (regime) => {
    const input = completeInput({ stage: "notified" });
    input.aid.deMinimisRegime = regime;
    input.aid.deMinimisMemberState = "France";
    input.aid.deMinimisSingleUndertakingScope = "Groupe A";

    const result = calculateSiteAidDecision(input);
    const warnings = result.warnings.join(" ");

    expect(result.code).toBe("incomplete");
    expect(result.currentLegalBasisResolution).toBe("unknown");
    expect(result.missingEvidence.join(" ")).toContain(
      "numéro exact du règlement",
    );
    expect(warnings).toContain("la base saisie n’est pas résolue");
    expect(warnings).not.toMatch(
      /Dépassement potentiel de minimis (?:général|agricole|pêche)/,
    );
  });

  it.each([
    "Régime régional numérique",
    "Aide de minimis agricole",
    "Aide de minimis pêche et aquaculture",
  ])(
    "keeps an unrecognized register basis out of every de minimis family: %s",
    (regime) => {
      const input = completeInput();
      input.aidRegister = [
        registerEntry({
          regime,
          amount: 310_000,
        }),
      ];

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("incomplete");
      expect(result.currentLegalBasisResolution).toBe("de-minimis-general");
      expect(result.registeredAidTotal).toBe(310_000);
      expect(result.registerLegalBasisResolutions).toEqual(["unknown"]);
      expect(result.missingEvidence.join(" ")).toContain(
        "numéro exact du règlement",
      );
      expect(result.warnings.join(" ")).not.toContain(
        "Dépassement potentiel de minimis général",
      );
    },
  );

  it("requires syntax help and an external review for a declared non-de-minimis branch", () => {
    const input = completeInput({
      stage: "notified",
      legalBasisStatus: "not-de-minimis",
    });
    input.aid.deMinimisRegime = "";
    input.aid.nonDeMinimisLegalBasis = "Hors de minimis";
    input.aid.nonDeMinimisEvidenceReference = "";

    const result = calculateSiteAidDecision(input);

    expect(result).toMatchObject({
      code: "incomplete",
      currentLegalBasisResolution: "not-de-minimis-external-review",
    });
    expect(result.missingEvidence.join(" ")).toContain(
      "instrument juridique identifiable",
    );
    expect(result.missingEvidence.join(" ")).toContain(
      "URL officielle reconnue",
    );
    expect(result.missingEvidence.join(" ")).toContain(
      "validation humaine hors outil requise",
    );
    expect(result.toolLimitations.join(" ")).toContain(
      "l’outil local ne peut authentifier",
    );
    expect(result.warnings.join(" ")).not.toContain(
      "aide courante octroyée incluse",
    );
  });

  it("never authenticates a plausible current non-de-minimis basis locally", () => {
    const input = completeInput({
      stage: "notified",
      legalBasisStatus: "not-de-minimis",
    });
    input.aid.deMinimisRegime = "Hors de minimis";
    input.aid.nonDeMinimisLegalBasis = "Régime exempté SA.12345, article 4";
    input.aid.nonDeMinimisEvidenceReference =
      "Notification officielle N-2026-001";
    input.aid.deMinimisMemberState = "";
    input.aid.deMinimisSingleUndertakingScope = "";
    input.aid.legalAidValueAmount = undefined;

    const result = calculateSiteAidDecision(input);

    expect(result).toMatchObject({
      code: "incomplete",
      currentLegalBasisResolution: "not-de-minimis-external-review",
      legalAidValueUnderConditions: undefined,
      approvedFinancialContributionUnderConditions: 2_100,
      conditionalCostAfterNotification: 7_900,
    });
    expect(result.missingEvidence.join(" ")).toContain(
      "validation humaine hors outil requise",
    );
    expect(result.toolLimitations.join(" ")).toContain(
      "ne peut authentifier le document",
    );
    expect(result.warnings.join(" ")).not.toContain(
      "Dépassement potentiel de minimis",
    );
  });

  it.each([
    "Hors de minimis",
    "Non de minimis",
    "À confirmer : peut-être pas de minimis",
  ])(
    "keeps a bare or uncertain non-de-minimis phrase unknown: %s",
    (regime) => {
      const input = completeInput({
        stage: "notified",
        legalBasisStatus: "unknown",
      });
      input.aid.deMinimisRegime = regime;
      input.aid.nonDeMinimisLegalBasis = "";
      input.aid.nonDeMinimisEvidenceReference = "";
      input.aidRegister = [
        registerEntry({
          amount: 299_000,
          legalGrantDate: "2025-01-15",
        }),
      ];

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("incomplete");
      expect(result.currentLegalBasisResolution).toBe("unknown");
      expect(result.warnings.join(" ")).toContain(
        "ne désactive aucun contrôle",
      );
      expect(result.warnings.join(" ")).toMatch(
        /Signal prudent de cumul à qualification non résolue.*301 100 €.*299 000 €.*2 100 €.*revue externe obligatoire/,
      );
      expect(result.warnings.join(" ")).not.toContain(
        "Dépassement potentiel de minimis général",
      );
    },
  );

  it("never lets an uncertain or negated label masquerade as an exact regulation", () => {
    const input = completeInput({
      stage: "notified",
      legalBasisStatus: "not-de-minimis",
    });
    input.aid.deMinimisRegime = "Règlement (UE) 2023/2831 — hors de minimis ?";
    input.aid.nonDeMinimisLegalBasis = "Régime exempté SA.12345, article 4";
    input.aid.nonDeMinimisEvidenceReference =
      "Notification officielle N-2026-001";
    input.aidRegister = [
      registerEntry({
        amount: 299_000,
        legalGrantDate: "2025-01-15",
      }),
    ];

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("incomplete");
    expect(result.currentLegalBasisResolution).toBe(
      "not-de-minimis-external-review",
    );
    expect(result.invalidIssues.join(" ")).not.toContain(
      "la référence exacte reste retenue",
    );
    expect(result.warnings.join(" ")).toContain("301 100 €");
  });

  it("rejects simultaneous de-minimis and non-de-minimis branches", () => {
    const input = completeInput({
      stage: "notified",
      legalBasisStatus: "de-minimis",
    });
    input.aid.nonDeMinimisLegalBasis = "Régime exempté SA.12345, article 4";
    input.aid.nonDeMinimisEvidenceReference =
      "Notification officielle N-2026-001";

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("invalid");
    expect(result.invalidIssues.join(" ")).toContain(
      "ne peuvent pas être renseignés simultanément",
    );
  });

  it("applies the same fail-closed non-de-minimis contract to register entries", () => {
    const incomplete = completeInput();
    incomplete.aidRegister = [
      registerEntry({
        legalBasisStatus: "not-de-minimis",
        regime: "Hors de minimis",
        nonDeMinimisLegalBasis: "Régime exempté SA.12345, article 4",
        nonDeMinimisEvidenceReference: "",
        memberState: "",
        singleUndertakingScope: "",
      }),
    ];

    const incompleteResult = calculateSiteAidDecision(incomplete);
    expect(incompleteResult.code).toBe("incomplete");
    expect(incompleteResult.missingEvidence.join(" ")).toContain(
      "référence de preuve hors de minimis",
    );
    expect(incompleteResult.registerLegalBasisResolutions).toEqual([
      "not-de-minimis-external-review",
    ]);

    const documented = completeInput();
    documented.aidRegister = [
      registerEntry({
        legalBasisStatus: "not-de-minimis",
        regime: "Hors de minimis",
        nonDeMinimisLegalBasis: "Régime exempté SA.12345, article 4",
        nonDeMinimisEvidenceReference: "Convention attributive CONV-2026-001",
        memberState: "",
        singleUndertakingScope: "",
      }),
    ];

    const documentedResult = calculateSiteAidDecision(documented);
    expect(documentedResult).toMatchObject({
      code: "incomplete",
      registeredAidTotal: 1_000,
      registerLegalBasisResolutions: ["not-de-minimis-external-review"],
    });
    expect(documentedResult.missingEvidence.join(" ")).toContain(
      "validation humaine hors outil requise",
    );
    expect(documentedResult.toolLimitations.join(" ")).toContain(
      "ne peut authentifier le document",
    );
    expect(documentedResult.warnings.join(" ")).not.toContain(
      "Dépassement potentiel de minimis",
    );
  });

  it.each(["bidon123", "Mon aide locale 2026"])(
    "rejects a non-de-minimis basis without an identifiable legal instrument: %s",
    (nonDeMinimisLegalBasis) => {
      const input = completeInput({
        stage: "notified",
        legalBasisStatus: "not-de-minimis",
      });
      input.aid.deMinimisRegime = "";
      input.aid.nonDeMinimisLegalBasis = nonDeMinimisLegalBasis;
      input.aid.nonDeMinimisEvidenceReference =
        "Notification officielle N-2026-001";
      input.aid.deMinimisMemberState = "";
      input.aid.deMinimisSingleUndertakingScope = "";

      const result = calculateSiteAidDecision(input);

      expect(result).toMatchObject({
        code: "incomplete",
        currentLegalBasisResolution: "not-de-minimis-external-review",
      });
      expect(result.missingEvidence.join(" ")).toContain(
        "instrument juridique identifiable",
      );
      expect(result.missingEvidence.join(" ")).toContain(
        "identifiant structuré",
      );
      expect(result.missingEvidence.join(" ")).toContain(
        "validation humaine hors outil requise",
      );
    },
  );

  it.each([
    "preuve456",
    "Courriel quelconque123",
    "URL générique",
    "https://example.com/aide",
  ])(
    "rejects a generic non-de-minimis evidence reference: %s",
    (nonDeMinimisEvidenceReference) => {
      const input = completeInput({
        stage: "notified",
        legalBasisStatus: "not-de-minimis",
      });
      input.aid.deMinimisRegime = "";
      input.aid.nonDeMinimisLegalBasis = "Régime exempté SA.12345, article 4";
      input.aid.nonDeMinimisEvidenceReference = nonDeMinimisEvidenceReference;
      input.aid.deMinimisMemberState = "";
      input.aid.deMinimisSingleUndertakingScope = "";

      const result = calculateSiteAidDecision(input);

      expect(result).toMatchObject({
        code: "incomplete",
        currentLegalBasisResolution: "not-de-minimis-external-review",
      });
      expect(result.missingEvidence.join(" ")).toContain(
        "URL officielle reconnue",
      );
      expect(result.missingEvidence.join(" ")).toContain(
        "identifiant structuré",
      );
      expect(result.missingEvidence.join(" ")).toContain(
        "validation humaine hors outil requise",
      );
    },
  );

  it("keeps an identifiable instrument and official evidence URL under external review", () => {
    const input = completeInput({
      stage: "notified",
      legalBasisStatus: "not-de-minimis",
    });
    input.aid.deMinimisRegime = "";
    input.aid.nonDeMinimisLegalBasis = "Règlement (UE) n° 651/2014, article 14";
    input.aid.nonDeMinimisEvidenceReference =
      "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32014R0651";
    input.aid.deMinimisMemberState = "";
    input.aid.deMinimisSingleUndertakingScope = "";
    input.aid.legalAidValueAmount = undefined;

    expect(calculateSiteAidDecision(input)).toMatchObject({
      code: "incomplete",
      currentLegalBasisResolution: "not-de-minimis-external-review",
      approvedFinancialContributionUnderConditions: 2_100,
      conditionalCostAfterNotification: 7_900,
    });
  });

  it("applies the stricter legal-instrument and authority-proof rules to the register", () => {
    const input = completeInput();
    input.aidRegister = [
      registerEntry({
        legalBasisStatus: "not-de-minimis",
        regime: "",
        nonDeMinimisLegalBasis: "Mon aide locale 2026",
        nonDeMinimisEvidenceReference: "Convention attributive CONV-2026-001",
        memberState: "",
        singleUndertakingScope: "",
      }),
      registerEntry({
        legalBasisStatus: "not-de-minimis",
        regime: "",
        nonDeMinimisLegalBasis: "Décision SA.12345, article 4",
        nonDeMinimisEvidenceReference: "Courriel quelconque123",
        memberState: "",
        singleUndertakingScope: "",
      }),
    ];

    const result = calculateSiteAidDecision(input);

    expect(result).toMatchObject({
      code: "incomplete",
      registerLegalBasisResolutions: [
        "not-de-minimis-external-review",
        "not-de-minimis-external-review",
      ],
    });
    expect(result.missingEvidence.join(" ")).toContain(
      "Registre, aide 1, base hors de minimis",
    );
    expect(result.missingEvidence.join(" ")).toContain(
      "instrument juridique identifiable",
    );
    expect(result.missingEvidence.join(" ")).toContain(
      "Registre, aide 2, référence de preuve hors de minimis",
    );
    expect(result.missingEvidence.join(" ")).toContain(
      "URL officielle reconnue",
    );
  });

  it("anchors the rolling window to the current legal grant date, not the later verification date", () => {
    const input = completeInput({ stage: "notified" });
    input.aid.deMinimisRegime = "CELEX:32023R2831";
    input.aid.deMinimisMemberState = "France";
    input.aid.deMinimisSingleUndertakingScope = "Groupe A";
    input.aid.legalGrantDate = "2026-01-01";
    input.aidRegister = [
      registerEntry({
        amount: 299_000,
        legalGrantDate: "2023-04-01",
      }),
    ];

    const warnings = calculateSiteAidDecision(input).warnings.join(" ");

    expect(warnings).toMatch(
      /301 100 €.*ancrée à la date d’octroi juridique de l’aide courante, le 2026-01-01/,
    );
  });

  it("excludes register grants made after the current legal grant anchor", () => {
    const input = completeInput({ stage: "notified" });
    input.aid.deMinimisRegime = "Règlement UE 2023/2831";
    input.aid.deMinimisMemberState = "France";
    input.aid.deMinimisSingleUndertakingScope = "Groupe A";
    input.aid.legalGrantDate = "2026-01-01";
    input.aidRegister = [
      registerEntry({
        amount: 299_000,
        legalGrantDate: "2026-03-01",
      }),
    ];

    const result = calculateSiteAidDecision(input);

    expect(result.registeredAidTotal).toBe(299_000);
    expect(result.warnings.join(" ")).not.toContain("301 100 €");
  });

  it("documents verification-date anchoring when no current legal grant exists", () => {
    const input = completeInput();
    input.aidRegister = [
      registerEntry({
        amount: 310_000,
        legalGrantDate: "2023-04-01",
      }),
    ];

    const result = calculateSiteAidDecision(input);

    expect(result.warnings.join(" ")).not.toContain(
      "Dépassement potentiel de minimis général",
    );
    expect(result.toolLimitations.join(" ")).toContain(
      "ancré prudemment à la date de vérification (2026-07-26)",
    );
    expect(result.toolLimitations.join(" ")).toContain(
      "rejoué à la date où le droit légal",
    );
  });

  it("canonicalizes ISO codes and usual French/English names for all 27 Member States", () => {
    const input = completeInput();
    input.aidRegister = EU_MEMBER_STATE_CASES.flatMap(
      ([code, frenchName, otherAlias]) =>
        [code, frenchName, otherAlias].map((memberState, index) =>
          registerEntry({
            authority: `${code}-${index}`,
            memberState,
            singleUndertakingScope: `Groupe ${code}`,
            amount: 100_001,
            legalGrantDate: "2026-01-01",
          }),
        ),
    );

    const result = calculateSiteAidDecision(input);
    const warnings = result.warnings.join(" ");
    const warningCount =
      warnings.match(/Dépassement potentiel de minimis général/g)?.length ?? 0;

    expect(result.registeredAidTotal).toBe(8_100_081);
    expect(warningCount).toBe(27);
    for (const [code, frenchName] of EU_MEMBER_STATE_CASES) {
      expect(warnings).toContain(`${frenchName} (${code})`);
      expect(warnings).toContain(`Groupe ${code}`);
    }
  });

  it("groups France, FR and français into one cumulative key", () => {
    const input = completeInput({ stage: "notified" });
    input.aid.deMinimisRegime = "Règlement UE 2023/2831";
    input.aid.deMinimisMemberState = "français";
    input.aid.deMinimisSingleUndertakingScope = "Groupe France";
    input.aidRegister = [
      registerEntry({
        memberState: "FR",
        singleUndertakingScope: "Groupe France",
        amount: 150_000,
      }),
      registerEntry({
        memberState: "France",
        singleUndertakingScope: "Groupe France",
        amount: 149_000,
      }),
    ];

    expect(calculateSiteAidDecision(input).warnings.join(" ")).toMatch(
      /301 100 €.*France \(FR\).*Groupe France/,
    );
  });

  it("applies the 50k agricultural ceiling without relabelling it as general", () => {
    const input = completeInput({ stage: "notified" });
    input.aid.deMinimisRegime = "Règlement UE 1408/2013";
    input.aid.deMinimisMemberState = "France";
    input.aid.deMinimisSingleUndertakingScope = "Exploitation A";
    input.aid.legalGrantStatus = "yes";
    input.aid.legalGrantDate = "2026-07-26";
    input.aidRegister = [
      registerEntry({
        regime: "Règlement UE 1408/2013",
        singleUndertakingScope: "Exploitation A",
        amount: 49_000,
        legalGrantDate: "2024-08-01",
      }),
    ];

    const result = calculateSiteAidDecision(input);
    const warnings = result.warnings.join(" ");

    expect(warnings).toMatch(
      /Dépassement potentiel de minimis agricole.*51 100 €.*1408\/2013.*50 000 €/,
    );
    expect(warnings).not.toContain("de minimis général");
    expect(result.toolLimitations.join(" ")).toContain(
      "plafonds nationaux collectifs",
    );
  });

  it("uses France's 40k fishery ceiling and a conservative fiscal-period pre-check", () => {
    const input = completeInput({ stage: "notified" });
    input.aid.deMinimisRegime = "Règlement UE 717/2014";
    input.aid.deMinimisMemberState = "France";
    setFisheryFiscalYearStarts(
      input,
      "2026-01-01",
      "2025-01-01",
      "2024-01-01",
      "2026-12-31",
    );
    input.aid.deMinimisSingleUndertakingScope = "Armement A";
    input.aid.legalGrantStatus = "yes";
    input.aid.legalGrantDate = "2026-07-26";
    input.aidRegister = [
      registerEntry({
        regime: "Règlement UE 717/2014",
        singleUndertakingScope: "Armement A",
        amount: 39_000,
        legalGrantDate: "2024-01-02",
      }),
      registerEntry({
        regime: "Règlement UE 717/2014",
        singleUndertakingScope: "Armement A",
        amount: 39_000,
        legalGrantDate: "2023-07-25",
      }),
    ];

    const result = calculateSiteAidDecision(input);
    const warnings = result.warnings.join(" ");

    expect(warnings).toMatch(
      /Dépassement potentiel de minimis pêche\/aquaculture.*41 100 €.*717\/2014.*français de 40 000 €/,
    );
    expect(warnings).not.toContain("80 100 €");
    expect(result.toolLimitations.join(" ")).toContain(
      "aucune borne n’est dérivée par anniversaire",
    );
  });

  it("keeps the 30k fishery default outside France and signals the conditional 40k option", () => {
    const input = completeInput();
    input.aidRegister = [
      registerEntry({
        regime: "Règlement UE 717/2014",
        memberState: "Allemagne",
        singleUndertakingScope: "Armement B",
        amount: 31_000,
        legalGrantDate: "2026-01-10",
      }),
    ];

    expect(calculateSiteAidDecision(input).warnings.join(" ")).toMatch(
      /Seuil prudent de minimis pêche\/aquaculture dépassé.*31 000 €.*30 000 €.*40 000 €.*registre central/,
    );
  });

  it("keeps the independent SIEG and other de minimis ceilings at their exact 750k plus 300k boundary", () => {
    const input = completeInput();
    input.aidRegister = [
      sgeiRegisterEntry({
        regime: "Règlement UE 2023/2832",
        singleUndertakingScope: "Groupe SIEG",
        amount: 750_000,
      }),
      registerEntry({
        regime: "Règlement UE 2023/2831",
        singleUndertakingScope: "Groupe SIEG",
        amount: 300_000,
      }),
    ];

    const result = calculateSiteAidDecision(input);
    const warnings = result.warnings.join(" ");
    const limitations = result.toolLimitations.join(" ");

    expect(result.registerLegalBasisResolutions).toEqual([
      "de-minimis-sgei",
      "de-minimis-general",
    ]);
    expect(warnings).not.toContain("Dépassement potentiel de minimis SIEG");
    expect(warnings).not.toContain(
      "Cumul potentiel de minimis SIEG et autres régimes",
    );
    expect(warnings).not.toContain("Dépassement potentiel de minimis général");
    expect(limitations).toContain(
      "interdit le cumul avec toute compensation relative au même service d’intérêt économique général",
    );
    expect(limitations).toContain(
      "exception d’entreprise unique applicable aux entreprises dont le seul lien est leur rattachement direct au même organisme public ou organisme sans but lucratif",
    );
  });

  it("signals the SIEG 750k ceiling and the 1.05m combined review marker without inventing a universal ceiling", () => {
    const input = completeInput();
    input.aidRegister = [
      sgeiRegisterEntry({
        regime: "CELEX:32023R2832",
        singleUndertakingScope: "Groupe SIEG",
        amount: 750_001,
      }),
      registerEntry({
        regime: "Règlement UE 2023/2831",
        singleUndertakingScope: "Groupe SIEG",
        amount: 300_000,
      }),
    ];

    const warnings = calculateSiteAidDecision(input).warnings.join(" ");

    expect(warnings).toMatch(
      /Dépassement potentiel de minimis SIEG.*750 001 €.*2023\/2832.*plafond de 750 000 €/,
    );
    expect(warnings).toMatch(
      /Cumul potentiel de minimis SIEG et autres régimes supérieur à 1 050 000 €.*1 050 001 €.*simple repère arithmétique, sans plafond juridique autonome ou universel.*plafond propre de 750 000 €.*plafonds propres.*repère combiné maximal de 300 000 €/,
    );
    expect(warnings).toContain(
      "interdiction de cumuler toute compensation relative au même SIEG",
    );
    expect(warnings).not.toContain("Dépassement potentiel de minimis général");
  });

  it("checks the combined agriculture and fishery ceiling without merging their subtotals", () => {
    const input = completeInput();
    input.aidRegister = [
      registerEntry({
        regime: "Règlement UE 1408/2013",
        singleUndertakingScope: "Groupe mixte",
        amount: 30_000,
        legalGrantDate: "2025-02-01",
      }),
      registerEntry({
        regime: "Règlement UE 717/2014",
        singleUndertakingScope: "Groupe mixte",
        amount: 25_000,
        legalGrantDate: "2025-03-01",
      }),
    ];

    const warnings = calculateSiteAidDecision(input).warnings.join(" ");

    expect(warnings).toMatch(
      /Cumul potentiel agricole et pêche\/aquaculture.*55 000 €.*50 000 €.*plafond individuel le plus élevé/,
    );
    expect(warnings).not.toContain("Dépassement potentiel de minimis agricole");
    expect(warnings).not.toContain(
      "Dépassement potentiel de minimis pêche/aquaculture",
    );
  });

  it("emits the 300k inter-regime warning only when two regulation families are present", () => {
    const input = completeInput();
    input.aidRegister = [
      registerEntry({
        regime: "Règlement UE 2023/2831",
        amount: 260_000,
      }),
      registerEntry({
        regime: "Règlement UE 1408/2013",
        amount: 45_000,
      }),
    ];

    const warnings = calculateSiteAidDecision(input).warnings.join(" ");

    expect(warnings).toMatch(
      /Cumul potentiel de minimis inter-régimes supérieur à 300 000 €.*305 000 €/,
    );
    expect(warnings).not.toContain("Dépassement potentiel de minimis général");
    expect(warnings).not.toContain("Dépassement potentiel de minimis agricole");
  });

  it("never treats an unidentified de minimis label as regulation 2023/2831", () => {
    const input = completeInput();
    input.aidRegister = [
      registerEntry({
        regime: "Aide de minimis",
        amount: 310_000,
      }),
    ];

    const result = calculateSiteAidDecision(input);
    const warnings = result.warnings.join(" ");

    expect(result.registeredAidTotal).toBe(310_000);
    expect(warnings).toContain("la base saisie n’est pas résolue");
    expect(warnings).not.toContain("Dépassement potentiel de minimis général");
  });
});

describe("site aid decision — R8 external legal review", () => {
  const externalReviewCases = [
    {
      label: "Article 4 plus a generic proof",
      basis: "Article 4",
      evidence: "preuve456",
    },
    {
      label: "syntactically plausible fake identifiers",
      basis: "Décision fake-12",
      evidence: "Notification fake-12",
    },
    {
      label: "an official root URL",
      basis: "Règlement (UE) 651/2014, article 14",
      evidence: "https://eur-lex.europa.eu/",
    },
    {
      label: "the same document used as basis and proof",
      basis: "Décision SA.12345",
      evidence: "Décision SA.12345",
    },
  ] as const;

  it.each([
    ["Règlement UE 2023/2831", "de-minimis-general"],
    ["Règlement UE 2023/2832", "de-minimis-sgei"],
    ["Règlement UE 1408/2013", "de-minimis-agriculture"],
    ["Règlement UE 717/2014", "de-minimis-fishery"],
  ] as const)(
    "resolves the exact recognized regulation mechanically: %s",
    (regime, expectedResolution) => {
      const input = completeInput();
      input.aid.deMinimisRegime = regime;

      expect(calculateSiteAidDecision(input).currentLegalBasisResolution).toBe(
        expectedResolution,
      );
    },
  );

  it("keeps the SIEG compensation and single-undertaking limitations visible when cumulation inputs are incomplete", () => {
    const input = completeInput({ stage: "notified" });
    input.aid.deMinimisRegime = "Règlement UE 2023/2832";
    input.aid.legalAidValueAmount = undefined;
    input.aid.deMinimisMemberState = "";
    input.aid.deMinimisSingleUndertakingScope = "";
    input.aid.legalGrantDate = "";

    const result = calculateSiteAidDecision(input);
    const limitations = result.toolLimitations.join(" ");

    expect(result.currentLegalBasisResolution).toBe("de-minimis-sgei");
    expect(result.code).toBe("incomplete");
    expect(limitations).toContain(
      "interdit le cumul avec toute compensation relative au même service d’intérêt économique général",
    );
    expect(limitations).toContain(
      "exception d’entreprise unique applicable aux entreprises dont le seul lien est leur rattachement direct au même organisme public ou organisme sans but lucratif",
    );
  });

  it.each(externalReviewCases)(
    "never authenticates current non-de-minimis evidence locally: $label",
    ({ basis, evidence }) => {
      const input = completeInput({
        stage: "notified",
        legalBasisStatus: "not-de-minimis",
      });
      input.aid.deMinimisRegime = "";
      input.aid.nonDeMinimisLegalBasis = basis;
      input.aid.nonDeMinimisEvidenceReference = evidence;
      input.aid.deMinimisMemberState = "";
      input.aid.deMinimisSingleUndertakingScope = "";
      input.aid.legalAidValueAmount = undefined;

      const result = calculateSiteAidDecision(input);
      const report = buildSiteAidDecisionReport(input);

      expect(result).toMatchObject({
        code: "incomplete",
        currentLegalBasisResolution: "not-de-minimis-external-review",
      });
      expect(result.missingEvidence.join(" ")).toContain(
        "confirmation écrite de l’autorité compétente ou validation humaine hors outil requise",
      );
      expect(result.toolLimitations.join(" ")).toContain(
        "ne peut authentifier le document, sa pertinence, la décision d’aide ni le bénéficiaire",
      );
      expect(report).toContain(
        "Statut déclaré de la base juridique : Hors de minimis déclaré — revue externe obligatoire",
      );
      expect(report).toContain(
        "Statut résolu par le moteur : Hors de minimis déclaré — revue externe obligatoire",
      );
      expect(report).toContain(
        `Base juridique hors de minimis déclarée : ${basis}`,
      );
      expect(report).toContain(
        `Référence de preuve hors de minimis déclarée : ${evidence}`,
      );
      expect(report).not.toMatch(/hors de minimis[^\n]*prouv/i);
    },
  );

  it("keeps plausible identifiers unknown when no non-de-minimis status is declared", () => {
    const input = completeInput({
      stage: "notified",
      legalBasisStatus: "unknown",
    });
    input.aid.deMinimisRegime = "";
    input.aid.nonDeMinimisLegalBasis = "Décision fake-12";
    input.aid.nonDeMinimisEvidenceReference = "Notification fake-12";

    const result = calculateSiteAidDecision(input);

    expect(result).toMatchObject({
      code: "incomplete",
      currentLegalBasisResolution: "unknown",
    });
    expect(result.toolLimitations.join(" ")).not.toContain(
      "ne peut authentifier le document",
    );
  });

  it("never returns received for a fully populated external-review branch", () => {
    const input = completeInput({
      stage: "received",
      legalBasisStatus: "not-de-minimis",
    });
    input.aid.deMinimisRegime = "";
    input.aid.nonDeMinimisLegalBasis = "Règlement (UE) 651/2014, article 14";
    input.aid.nonDeMinimisEvidenceReference =
      "Notification officielle N-2026-001";
    input.aid.deMinimisMemberState = "";
    input.aid.deMinimisSingleUndertakingScope = "";
    input.aid.legalAidValueAmount = undefined;

    expect(calculateSiteAidDecision(input)).toMatchObject({
      code: "incomplete",
      currentLegalBasisResolution: "not-de-minimis-external-review",
      actualFinancialContribution: 2_100,
    });
  });

  it.each(externalReviewCases)(
    "blocks and exports a register branch for external review: $label",
    ({ basis, evidence }) => {
      const input = completeInput();
      input.aidRegister = [
        registerEntry({
          legalBasisStatus: "not-de-minimis",
          regime: "",
          nonDeMinimisLegalBasis: basis,
          nonDeMinimisEvidenceReference: evidence,
          memberState: "",
          singleUndertakingScope: "",
        }),
      ];

      const result = calculateSiteAidDecision(input);
      const report = buildSiteAidDecisionReport(input);

      expect(result).toMatchObject({
        code: "incomplete",
        registeredAidTotal: 1_000,
        registerLegalBasisResolutions: ["not-de-minimis-external-review"],
      });
      expect(result.missingEvidence.join(" ")).toContain(
        "Registre, aide 1, hors de minimis déclaré",
      );
      expect(report).toContain(
        "statut déclaré Hors de minimis déclaré — revue externe obligatoire",
      );
      expect(report).toContain(
        "statut résolu Hors de minimis déclaré — revue externe obligatoire",
      );
      expect(report).toContain(`base hors de minimis déclarée ${basis}`);
      expect(report).toContain(
        `référence de preuve hors de minimis déclarée ${evidence}`,
      );
      expect(report).not.toMatch(/hors de minimis[^\n]*prouv/i);
    },
  );

  it.each(externalReviewCases)(
    "keeps the current external-review amount in the prudent 301.1k witness: $label",
    ({ basis, evidence }) => {
      const input = completeInput({
        stage: "notified",
        legalBasisStatus: "not-de-minimis",
        legalAidValueAmount: 2_100,
      });
      input.aid.deMinimisRegime = "";
      input.aid.nonDeMinimisLegalBasis = basis;
      input.aid.nonDeMinimisEvidenceReference = evidence;
      input.aid.deMinimisMemberState = "France";
      input.aid.deMinimisSingleUndertakingScope = "Groupe A";
      input.aidRegister = [
        registerEntry({
          amount: 299_000,
          legalGrantDate: "2025-01-15",
        }),
      ];

      const result = calculateSiteAidDecision(input);
      const warnings = result.warnings.join(" ");

      expect(result).toMatchObject({
        code: "incomplete",
        currentLegalBasisResolution: "not-de-minimis-external-review",
        registerLegalBasisResolutions: ["de-minimis-general"],
      });
      expect(warnings).toMatch(
        /Signal prudent de cumul à qualification non résolue.*301 100 €.*299 000 €.*règlements de minimis reconnus.*2 100 €.*base juridique non qualifiée.*revue externe obligatoire/,
      );
      expect(warnings).not.toContain(
        "Dépassement potentiel de minimis général",
      );
      expect(warnings).not.toMatch(
        /2 100 €[^.]*sous (?:le )?règlement 2023\/2831/,
      );
    },
  );

  it.each(externalReviewCases)(
    "keeps an external-review register amount in the prudent 301.1k witness: $label",
    ({ basis, evidence }) => {
      const input = completeInput({ stage: "notified" });
      input.aidRegister = [
        registerEntry({
          legalBasisStatus: "not-de-minimis",
          regime: "",
          nonDeMinimisLegalBasis: basis,
          nonDeMinimisEvidenceReference: evidence,
          amount: 299_000,
          legalGrantDate: "2025-01-15",
        }),
      ];

      const result = calculateSiteAidDecision(input);
      const warnings = result.warnings.join(" ");

      expect(result).toMatchObject({
        code: "incomplete",
        currentLegalBasisResolution: "de-minimis-general",
        registerLegalBasisResolutions: ["not-de-minimis-external-review"],
      });
      expect(warnings).toMatch(
        /Signal prudent de cumul à qualification non résolue.*301 100 €.*2 100 €.*règlements de minimis reconnus.*299 000 €.*base juridique non qualifiée.*revue externe obligatoire/,
      );
      expect(warnings).not.toContain(
        "Dépassement potentiel de minimis général",
      );
      expect(warnings).not.toMatch(
        /299 000 €[^.]*sous (?:le )?règlement 2023\/2831/,
      );
    },
  );

  it("applies the same prudent witness when the current legal basis remains unknown", () => {
    const input = completeInput({
      stage: "notified",
      legalBasisStatus: "unknown",
      legalAidValueAmount: 2_100,
    });
    input.aid.deMinimisRegime = "Aide locale à qualifier";
    input.aidRegister = [
      registerEntry({
        amount: 299_000,
        legalGrantDate: "2025-01-15",
      }),
    ];

    const result = calculateSiteAidDecision(input);
    const warnings = result.warnings.join(" ");

    expect(result.currentLegalBasisResolution).toBe("unknown");
    expect(warnings).toMatch(
      /Signal prudent de cumul à qualification non résolue.*301 100 €.*299 000 €.*2 100 €.*encore inconnue.*revue externe obligatoire/,
    );
    expect(warnings).not.toContain("Dépassement potentiel de minimis général");
  });

  it("applies the same prudent witness when a register legal basis remains unknown", () => {
    const input = completeInput({ stage: "notified" });
    input.aidRegister = [
      registerEntry({
        legalBasisStatus: "unknown",
        regime: "Aide locale à qualifier",
        amount: 299_000,
        legalGrantDate: "2025-01-15",
      }),
    ];

    const result = calculateSiteAidDecision(input);
    const warnings = result.warnings.join(" ");

    expect(result.registerLegalBasisResolutions).toEqual(["unknown"]);
    expect(warnings).toMatch(
      /Signal prudent de cumul à qualification non résolue.*301 100 €.*2 100 €.*299 000 €.*encore inconnue.*revue externe obligatoire/,
    );
    expect(warnings).not.toContain("Dépassement potentiel de minimis général");
  });

  it.each(["current-unresolved", "register-unresolved"] as const)(
    "never crosses State or undertaking groups for %s",
    (orientation) => {
      const input =
        orientation === "current-unresolved"
          ? completeInput({
              stage: "notified",
              legalBasisStatus: "not-de-minimis",
              legalAidValueAmount: 2_100,
            })
          : completeInput({ stage: "notified" });
      if (orientation === "current-unresolved") {
        input.aid.deMinimisRegime = "";
        input.aid.nonDeMinimisLegalBasis =
          "Règlement (UE) 651/2014, article 14";
        input.aid.nonDeMinimisEvidenceReference =
          "Notification officielle N-2026-001";
        input.aid.deMinimisSingleUndertakingScope = "Groupe courant";
        input.aidRegister = [
          registerEntry({
            amount: 299_000,
            singleUndertakingScope: "Groupe distinct",
          }),
        ];
      } else {
        input.aid.deMinimisSingleUndertakingScope = "Groupe courant";
        input.aidRegister = [
          registerEntry({
            legalBasisStatus: "not-de-minimis",
            regime: "",
            nonDeMinimisLegalBasis: "Règlement (UE) 651/2014, article 14",
            nonDeMinimisEvidenceReference: "Notification officielle N-2026-001",
            amount: 299_000,
            memberState: "Belgique",
            singleUndertakingScope: "Groupe courant",
          }),
        ];
      }

      expect(calculateSiteAidDecision(input).warnings.join(" ")).not.toContain(
        "301 100 €",
      );
    },
  );

  it("never invents a current unresolved observation when its prerequisites are missing", () => {
    const input = completeInput({
      stage: "notified",
      legalBasisStatus: "not-de-minimis",
    });
    input.aid.deMinimisRegime = "";
    input.aid.nonDeMinimisLegalBasis = "Règlement (UE) 651/2014, article 14";
    input.aid.nonDeMinimisEvidenceReference =
      "Notification officielle N-2026-001";
    input.aid.legalAidValueAmount = undefined;
    input.aid.deMinimisMemberState = "";
    input.aid.deMinimisSingleUndertakingScope = "";
    input.aidRegister = [registerEntry({ amount: 299_000 })];

    const result = calculateSiteAidDecision(input);

    expect(result.warnings.join(" ")).not.toContain("301 100 €");
    expect(result.warnings.join(" ")).toContain(
      "précontrôle prudent du cumul non calculable",
    );
    expect(result.missingEvidence.join(" ")).toContain(
      "précontrôle prudent du cumul, État membre",
    );
    expect(result.missingEvidence.join(" ")).toContain(
      "précontrôle prudent du cumul, périmètre de l’entreprise unique",
    );
    expect(result.missingEvidence.join(" ")).toContain(
      "précontrôle prudent du cumul, valeur juridique ou ESB",
    );
  });

  it("never invents a register unresolved observation when its prerequisites are missing", () => {
    const input = completeInput({ stage: "notified" });
    input.aidRegister = [
      registerEntry({
        legalBasisStatus: "not-de-minimis",
        regime: "",
        nonDeMinimisLegalBasis: "Règlement (UE) 651/2014, article 14",
        nonDeMinimisEvidenceReference: "Notification officielle N-2026-001",
        memberState: "",
        singleUndertakingScope: "",
        amount: undefined,
        legalGrantDate: "",
      }),
    ];

    const result = calculateSiteAidDecision(input);

    expect(result.warnings.join(" ")).not.toContain("301 100 €");
    expect(result.warnings.join(" ")).toContain(
      "précontrôle prudent du cumul non calculable",
    );
    expect(result.missingEvidence.join(" ")).toContain(
      "précontrôle prudent du cumul, État membre",
    );
    expect(result.missingEvidence.join(" ")).toContain(
      "précontrôle prudent du cumul, périmètre de l’entreprise unique",
    );
    expect(result.missingEvidence.join(" ")).toContain(
      "précontrôle prudent du cumul, valeur juridique ou ESB",
    );
  });

  it.each(["current", "register"] as const)(
    "keeps an exact contradictory regulation in its recognized family without double counting: %s",
    (orientation) => {
      const input = completeInput({
        stage: "notified",
        legalBasisStatus:
          orientation === "current" ? "not-de-minimis" : "de-minimis",
      });
      if (orientation === "current") {
        input.aid.deMinimisRegime = "Règlement (UE) 2023/2831";
        input.aid.nonDeMinimisLegalBasis =
          "Règlement (UE) 651/2014, article 14";
        input.aid.nonDeMinimisEvidenceReference =
          "Notification officielle N-2026-001";
        input.aidRegister = [registerEntry({ amount: 299_000 })];
      } else {
        input.aidRegister = [
          registerEntry({
            legalBasisStatus: "not-de-minimis",
            regime: "Règlement (UE) 2023/2831",
            nonDeMinimisLegalBasis: "Règlement (UE) 651/2014, article 14",
            nonDeMinimisEvidenceReference: "Notification officielle N-2026-001",
            amount: 299_000,
          }),
        ];
      }

      const result = calculateSiteAidDecision(input);
      const warningsAtWitness = result.warnings.filter((warning) =>
        warning.includes("301 100 €"),
      );

      expect(result.code).toBe("invalid");
      expect(result.currentLegalBasisResolution).toBe("de-minimis-general");
      expect(result.registerLegalBasisResolutions).toEqual([
        "de-minimis-general",
      ]);
      expect(warningsAtWitness).toHaveLength(1);
      expect(warningsAtWitness[0]).toContain(
        "Dépassement potentiel de minimis général",
      );
      expect(result.warnings.join(" ")).not.toContain(
        "Signal prudent de cumul à qualification non résolue",
      );
    },
  );

  it("alerts at the universal 300k boundary without assigning the unresolved amount", () => {
    const input = completeInput({
      stage: "notified",
      legalBasisStatus: "not-de-minimis",
      legalAidValueAmount: 1_000,
    });
    input.aid.deMinimisRegime = "";
    input.aid.nonDeMinimisLegalBasis = "Règlement (UE) 651/2014, article 14";
    input.aid.nonDeMinimisEvidenceReference =
      "Notification officielle N-2026-001";
    input.aidRegister = [registerEntry({ amount: 299_000 })];

    const warnings = calculateSiteAidDecision(input).warnings.join(" ");

    expect(warnings).toMatch(
      /Signal prudent de cumul à qualification non résolue.*300 000 €.*299 000 €.*1 000 €.*revue externe obligatoire/,
    );
    expect(warnings).not.toContain("Dépassement potentiel de minimis général");
  });

  it("prefixes quote issues with a stable positional identifier", () => {
    const input = completeInput();
    input.quoteLines[1].eligibility = "unknown";

    expect(calculateSiteAidDecision(input).missingEvidence.join(" ")).toContain(
      "Devis, ligne 2 « Contenus exclus »",
    );
  });
});

describe("site aid decision — R9 receipt and legal-grant chronology", () => {
  it.each([
    ["reimbursement", 0],
    ["direct", 100],
    ["advance", 50],
  ] as const)(
    "rejects in %s mode a payment made before the legal grant",
    (paymentMode, documentedPrepaymentPercent) => {
      const input = completeInput({
        stage: "received",
        paymentMode,
        documentedPrepaymentPercent,
      });
      input.profile.verificationDate = "2026-07-30";
      input.aid.finalInvoiceDate =
        paymentMode === "advance" ? "2026-07-27" : "2026-07-24";
      input.aid.receiptDate = "2026-07-25";
      input.aid.legalGrantDate = "2026-07-26";

      const result = calculateSiteAidDecision(input);
      const report = buildSiteAidDecisionReport(input);

      expect(result.code).toBe("invalid");
      expect(result.invalidIssues.join(" ")).toContain(
        "ne peut pas précéder la date d’octroi juridique",
      );
      expect(result).toMatchObject({
        actualFinancialContribution: undefined,
        receivedAid: undefined,
        financialContributionDifference: undefined,
        aidReceiptDifference: undefined,
        realizedCostAfterReceipt: undefined,
      });
      expect(report).toContain(
        "Coût réalisé non calculable — avant traitement fiscal et comptable : ND",
      );
      expect(report).not.toContain(
        "Verdict : AIDE VERSÉE OU PAYÉE DIRECTEMENT AU FOURNISSEUR — COÛT RÉALISÉ",
      );
    },
  );

  it.each([
    ["same-day", "2026-07-26"],
    ["next-day", "2026-07-27"],
  ] as const)(
    "accepts a documented receipt on or after the legal grant: %s",
    (_label, receiptDate) => {
      const input = completeInput({ stage: "received" });
      input.profile.verificationDate = "2026-07-30";
      input.aid.finalInvoiceDate = "2026-07-24";
      input.aid.legalGrantDate = "2026-07-26";
      input.aid.receiptDate = receiptDate;

      expect(
        calculateSiteAidDecision(input, { analysisDate: "2026-07-30" }),
      ).toMatchObject({
        code: "received",
        actualFinancialContribution: 2_100,
        receivedAid: 2_100,
        realizedCostAfterReceipt: 7_900,
      });
    },
  );

  it("allows an advance before the final invoice when it follows the legal grant", () => {
    const input = completeInput({
      stage: "received",
      paymentMode: "advance",
      documentedPrepaymentPercent: 50,
    });
    input.profile.verificationDate = "2026-07-30";
    input.aid.legalGrantDate = "2026-07-24";
    input.aid.receiptDate = "2026-07-25";
    input.aid.finalInvoiceDate = "2026-07-27";

    expect(
      calculateSiteAidDecision(input, { analysisDate: "2026-07-30" }),
    ).toMatchObject({
      code: "received",
      actualFinancialContribution: 2_100,
      realizedCostAfterReceipt: 7_900,
    });
  });

  it("keeps a chronologically invalid full direct payment ND and its proof requirement visible", () => {
    const input = completeInput({
      stage: "received",
      legalAidValueAmount: 100,
      approvedFinancialContributionAmount: 100,
      actualFinancialContributionAmount: 100,
      paymentMode: "direct",
      documentedPrepaymentPercent: 100,
    });
    setSingleEligibleInvoice(input);
    input.profile.verificationDate = "2026-07-30";
    input.aid.finalInvoiceDate = "2026-07-24";
    input.aid.receiptDate = "2026-07-25";
    input.aid.legalGrantDate = "2026-07-26";
    input.aid.supplierPaymentReference = "";

    const result = calculateSiteAidDecision(input);

    expect(result).toMatchObject({
      code: "invalid",
      actualFinancialContribution: undefined,
      realizedCostAfterReceipt: undefined,
      directPaymentArithmeticCoversInvoiceInFull: undefined,
      directPaymentCoversInvoiceInFull: undefined,
      directPaymentCoverageStatus: "invalid",
      directCompanySupplierRemainder: undefined,
      supplierRemainderEvidenceRequired: true,
    });
    expect(result.missingEvidence.join(" ")).toContain(
      "Reste payé par l’entreprise",
    );
  });
});

describe("site aid decision — R13 positive legal-reference grammar", () => {
  it.each([
    ["general bare number", "2023/2831", "de-minimis-general"],
    ["general slash", "Règlement UE 2023/2831", "de-minimis-general"],
    [
      "general parenthesized UE",
      "Règlement (UE) 2023/2831",
      "de-minimis-general",
    ],
    [
      "general parenthesized UE with number sign",
      "Règlement (UE) n° 2023/2831",
      "de-minimis-general",
    ],
    ["general CELEX", "CELEX:32023R2831", "de-minimis-general"],
    ["general bare CELEX", "32023R2831", "de-minimis-general"],
    [
      "general consolidated CELEX",
      "CELEX:02023R2831-20231215",
      "de-minimis-general",
    ],
    [
      "general ELI root",
      "https://eur-lex.europa.eu/eli/reg/2023/2831",
      "de-minimis-general",
    ],
    [
      "general ELI root trailing slash",
      "https://eur-lex.europa.eu/eli/reg/2023/2831/",
      "de-minimis-general",
    ],
    [
      "general ELI official journal",
      "https://eur-lex.europa.eu/eli/reg/2023/2831/oj",
      "de-minimis-general",
    ],
    [
      "general ELI official journal language",
      "https://EUR-LEX.EUROPA.EU/eli/reg/2023/2831/oj/fra/",
      "de-minimis-general",
    ],
    [
      "general ELI official HTML",
      "https://data.europa.eu/eli/reg/2023/2831/oj/hun/html",
      "de-minimis-general",
    ],
    [
      "general ELI official PDF",
      "HTTPS://data.europa.eu/eli/reg/2023/2831/oj/nld/pdf/",
      "de-minimis-general",
    ],
    ["SIEG bare number", "2023/2832", "de-minimis-sgei"],
    ["SIEG slash", "Règlement UE 2023/2832", "de-minimis-sgei"],
    ["SIEG CELEX", "CELEX:32023R2832", "de-minimis-sgei"],
    ["SIEG consolidated CELEX", "CELEX:02023R2832-20231215", "de-minimis-sgei"],
    [
      "SIEG ELI official journal",
      "https://eur-lex.europa.eu/eli/reg/2023/2832/oj/fra",
      "de-minimis-sgei",
    ],
    [
      "SIEG consolidated ELI",
      "https://data.europa.eu/eli/reg/2023/2832/2023-12-15/eng/pdf",
      "de-minimis-sgei",
    ],
    ["agriculture bare number", "1408/2013", "de-minimis-agriculture"],
    [
      "agriculture slash with number sign",
      "Règlement UE n° 1408/2013",
      "de-minimis-agriculture",
    ],
    ["agriculture CELEX", "CELEX:32013R1408", "de-minimis-agriculture"],
    [
      "agriculture consolidated CELEX",
      "02013R1408-20241216",
      "de-minimis-agriculture",
    ],
    [
      "agriculture ELI language",
      "https://eur-lex.europa.eu/eli/reg/2013/1408/fra",
      "de-minimis-agriculture",
    ],
    [
      "agriculture consolidated ELI",
      "https://eur-lex.europa.eu/eli/reg/2013/1408/2024-12-16/fra",
      "de-minimis-agriculture",
    ],
    [
      "agriculture consolidated ELI date only",
      "https://data.europa.eu/eli/reg/2013/1408/2024-12-16",
      "de-minimis-agriculture",
    ],
    [
      "agriculture consolidated ELI XML",
      "https://data.europa.eu/eli/reg/2013/1408/2024-12-16/fra/xml",
      "de-minimis-agriculture",
    ],
    ["fishery bare number", "717/2014", "de-minimis-fishery"],
    ["fishery slash", "Règlement UE 717/2014", "de-minimis-fishery"],
    ["fishery CELEX", "CELEX:32014R0717", "de-minimis-fishery"],
    [
      "fishery consolidated CELEX",
      "CELEX:02014R0717-20231025",
      "de-minimis-fishery",
    ],
    [
      "fishery ELI official journal",
      "https://eur-lex.europa.eu/eli/reg/2014/717/oj",
      "de-minimis-fishery",
    ],
    [
      "fishery consolidated ELI",
      "https://eur-lex.europa.eu/eli/reg/2014/717/2023-10-25/eng",
      "de-minimis-fishery",
    ],
  ] as const)(
    "accepts exactly one controlled reference form: %s",
    (_label, regime, expectedResolution) => {
      const input = completeInput({ stage: "notified" });
      input.aid.deMinimisRegime = regime;

      const result = calculateSiteAidDecision(input);

      expect(result.currentLegalBasisResolution).toBe(expectedResolution);
      expect(result.toolLimitations.join(" ")).toContain(
        "n’authentifie aucune pièce",
      );
    },
  );

  it.each([
    "9992023/2831000",
    "x2023/2831",
    "2023/2831x",
    "_2023/2831",
    "2023/2831_",
    "abc32023R2831",
    "32023R2831abc",
    "2023/28311408/2013",
    "x1408/2013",
    "1408/2013x",
    "x717/2014",
    "717/2014x",
    "prefix-2023/2831-suffix",
    "prefix-2023/2832-suffix",
    "prefix−2023/2831−suffix",
    "prefix-2023-2831-suffix",
    "Règlement UE 2023-2831",
    "Règlement UE 1408-2013",
    "Règlement UE 717-2014",
    "Règlement 2023/2831",
    "de minimis 2023/2831",
    "Règlement européen 2023/2831",
    "Règlement ＵＥ 2023/2831",
    "Ce n’est plus le règlement (UE) 2023/2831",
    "Il ne s’agit nullement du règlement (UE) 2023/2831",
    "pas le règlement 2023/2831",
    "hors de minimis — règlement 2023/2831",
    "sans application du règlement 2023/2831",
    "sauf règlement 2023/2831",
    "excepté 2023/2831",
    "Règlement 2023/2831 à confirmer",
    "Règlement 2023/2831 ou autre régime",
    "Probablement le règlement 2023/2831",
    "Règlement 2023/2831 ?",
    "This is not Regulation (EU) 2023/2831",
    "No es el Reglamento (UE) 2023/2831",
    "ｐａｓ Règlement (UE) 2023/2831",
    "Règlement 2023/2831 et règlement 1407/2013",
    "Règlement 2023/2832 et règlement 2023/2831",
    "Règlement 2023/2831 et CELEX:32007R1407",
    "Règlement (UE) 2023/2831 et CELEX:12016E107",
    "Règlement (UE) 2023/2831 et ECLI:EU:C:2024:123",
    "Règlement (UE) 2023/2831 et décision C(2024) 1234",
    "Règlements (UE) 2023/2831 et 651–2014",
    "Règlement 2023/\u200B2831",
    "Règlement (UE) 2023/2831\u0301",
    "Règlement (UE) 2023/2831:9999",
    "\tRèglement 2023/2831",
    "2023/2831 + 2023/2831",
    "2023/2832 + 2023/2832",
    "Règlement 2023/2831 et CELEX:32023R2831",
    "2023/2831 + 1408/2013",
    "CELEX:32023R2831 CELEX:32014R0717",
    "CELEX:32023R2832 CELEX:32023R2831",
    "Référence CELEX:32023R2831",
    "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32023R2831",
    "example.com?regime=2023/2831",
    "www.example.com 2023/2831",
    "https：／／evil．example／foo／2023/2831",
    "www．evil．example／2023/2831",
    "eur-lex．europa．eu／eli／reg／2023/2831／oj",
    "http://eur-lex.europa.eu/eli/reg/2023/2831/oj",
    "http://data.europa.eu/eli/reg/2023/2831/oj",
    "http://eur-lex.europa.eu/eli/reg/2023/2832/oj",
    "ftp://eur-lex.europa.eu/eli/reg/2023/2831/oj",
    "eur-lex.europa.eu/eli/reg/2023/2831/oj",
    "https://evil.eur-lex.europa.eu/eli/reg/2023/2831/oj",
    "https://evil.eur-lex.europa.eu/eli/reg/2023/2832/oj",
    "https://eur-lex.europa.eu.evil.example/eli/reg/2023/2831/oj",
    "https://example.com/eli/reg/2023/2831/oj",
    "https://www.eur-lex.europa.eu/eli/reg/2023/2831/oj",
    "https://ｅｕｒ-ｌｅｘ.europa.eu/eli/reg/2023/2831/oj",
    "https://user@eur-lex.europa.eu/eli/reg/2023/2831/oj",
    "https://eur-lex.europa.eu:443/eli/reg/2023/2831/oj",
    "https://eur-lex.europa.eu:444/eli/reg/2023/2831/oj",
    "https://eur-lex.europa.eu//eli/reg/2023/2831/oj",
    "https://eur-lex.europa.eu/eli/reg/2023/2831/../oj",
    "https://eur-lex.europa.eu/eli/reg/2023/2831/%2e%2e/oj",
    "https://eur-lex.europa.eu\\eli\\reg\\2023\\2831\\oj",
    "https://eur-lex.europa.eu/eli/reg/2023/2831/oj\u200B",
    "https://eur-lex.europa.eu/ELI/reg/2023/2831/oj",
    "https://eur-lex.europa.eu/eli/REG/2023/2831/oj",
    "https://eur-lex.europa.eu/eli/reg/2023/2831/evil",
    "https://eur-lex.europa.eu/eli/reg/2023/2831/oj/evil",
    "https://eur-lex.europa.eu/eli/reg/2023/2831/fr",
    "https://eur-lex.europa.eu/eli/reg/2023/2831/2026-02-30/fra",
    "https://eur-lex.europa.eu/eli/reg/2023/2831/oj?source=test",
    "https://eur-lex.europa.eu/eli/reg/2023/2832/oj?source=test",
    "https://eur-lex.europa.eu/eli/reg/2023/2831/oj#fragment",
    "https://eur-lex.europa.eu/eli/reg/2023/2831/oj/evil/2023/2831",
    "CELEX:02023R2831-20260230",
    "CELEX:02023R2832-20260230",
    "CELEX:02007R1407-20131218",
    "CELEX:02023R2831",
    "CELEX:32023R2831-20231215",
    "Règlement (UE) 2023/2831, JO L du 15.12.2023",
    "Règlement (UE) 2023/2832, JO L du 15.12.2023",
  ])(
    "rejects an embedded, duplicated, combined or URL-like impostor: %s",
    (regime) => {
      const input = completeInput({ stage: "notified" });
      input.aid.deMinimisRegime = regime;

      const result = calculateSiteAidDecision(input);

      expect(result.currentLegalBasisResolution).toBe("unknown");
      expect(result.warnings.join(" ")).not.toContain(
        "Dépassement potentiel de minimis",
      );
      expect(result.toolLimitations.join(" ")).not.toContain(
        "Référence de minimis reconnue syntaxiquement",
      );
    },
  );

  it("asks to replace HTTP with HTTPS for an otherwise exact official ELI URL", () => {
    const input = completeInput({ stage: "notified" });
    input.aid.deMinimisRegime = "http://data.europa.eu/eli/reg/2023/2831/oj";

    const result = calculateSiteAidDecision(input);

    expect(result.currentLegalBasisResolution).toBe("unknown");
    expect(result.missingEvidence.join(" ")).toContain(
      "remplacer uniquement le préfixe « http:// » par « https:// »",
    );
    expect(result.missingEvidence.join(" ")).toContain(
      "vérifier l’hôte et le chemin",
    );
    expect(result.missingEvidence.join(" ")).toContain(
      "sans conversion automatique du reste",
    );
    expect(result.missingEvidence.join(" ")).not.toContain(
      "Référence de minimis reconnue syntaxiquement",
    );
  });

  it("explains how to replace a rich citation for both current and register references", () => {
    const input = completeInput({ stage: "notified" });
    input.aid.deMinimisRegime = "Règlement (UE) 2023/2831, JO L du 15.12.2023";
    input.aidRegister = [
      registerEntry({
        regime: "Règlement (UE) 2023/2831 et ECLI:EU:C:2024:123",
      }),
    ];

    const result = calculateSiteAidDecision(input);
    const issues = result.missingEvidence.join(" ");

    expect(result.currentLegalBasisResolution).toBe("unknown");
    expect(result.registerLegalBasisResolutions).toEqual(["unknown"]);
    expect(issues.match(/citation enrichie non prise en charge/g)).toHaveLength(
      2,
    );
    expect(issues).toContain(
      "copier seulement le numéro exact 2023/2831, 2023/2832, 1408/2013 ou 717/2014, un identifiant CELEX exact ou une URL ELI HTTPS exacte",
    );
  });

  it("uses the same strict global classifier for register rows", () => {
    const input = completeInput();
    input.aidRegister = [
      registerEntry({
        regime: "prefix32023R2831suffix",
        amount: 301_100,
      }),
      registerEntry({
        regime: "2023/2831 + 717/2014",
        amount: 301_100,
      }),
      registerEntry({
        regime: "https://eur-lex.europa.eu/eli/reg/2013/1408/oj/fra",
        amount: 10_000,
      }),
    ];

    const result = calculateSiteAidDecision(input);

    expect(result.registerLegalBasisResolutions).toEqual([
      "unknown",
      "unknown",
      "de-minimis-agriculture",
    ]);
    expect(result.warnings.join(" ")).not.toContain(
      "Dépassement potentiel de minimis",
    );
  });
});

describe("site aid decision — R14 legal-basis and authority URL closure", () => {
  it("keeps a pre-notification candidate incomplete until its legal basis is qualified", () => {
    const input = completeInput();
    input.aid.legalBasisStatus = "unknown";
    input.aid.deMinimisRegime = "";
    input.aid.nonDeMinimisLegalBasis = "";
    input.aid.nonDeMinimisEvidenceReference = "";
    input.aid.deMinimisMemberState = "";
    input.aid.deMinimisSingleUndertakingScope = "";

    const result = calculateSiteAidDecision(input);
    const report = buildSiteAidDecisionReport(input);

    expect(result).toMatchObject({
      code: "incomplete",
      budgetedAid: 0,
      currentLegalBasisResolution: "unknown",
    });
    expect(result.missingEvidence.join(" ")).toContain(
      "qualifier la base juridique ou le régime applicable",
    );
    expect(result.missingEvidence.join(" ")).toContain(
      "revue externe obligatoire",
    );
    expect(report).toContain(
      "Statut résolu par le moteur : Base juridique non résolue",
    );
    expect(report).not.toContain(
      "Preuves ou informations manquantes : aucune.",
    );
    expect(report).toContain(
      "Aide budgétée sans notification : 0 € — règle de prudence",
    );
  });

  it("applies the same actionable unresolved-basis requirement to register rows", () => {
    const input = completeInput();
    input.aidRegister = [
      registerEntry({
        legalBasisStatus: "unknown",
        regime: "",
        nonDeMinimisLegalBasis: "",
        nonDeMinimisEvidenceReference: "",
      }),
    ];

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("incomplete");
    expect(result.registerLegalBasisResolutions).toEqual(["unknown"]);
    expect(result.missingEvidence.join(" ")).toContain(
      "Registre, aide 1, base juridique : qualifier la base juridique ou le régime applicable",
    );
  });

  it.each([
    "http://region.bretagne.fr/aide",
    "https://evil.example/phishing",
    "https://127.0.0.1/aide",
    "https://10.0.0.1/aide",
    "https://[::1]/aide",
    "https://intranet/aide",
    "https://-collectivite.fr/aide",
    "https://service.local/aide",
    "https://example.com/aide",
    "https://aides.example.com/aide",
    "https://example.net/aide",
    "https://sous-domaine.example.org/aide",
    "https://home.arpa/aide",
    "https://portail.home.arpa/aide",
    "https://10.in-addr.arpa/aide",
    "https://8.e.f.ip6.arpa/aide",
    "https://6tisch.arpa/aide",
    "https://eap.arpa/aide",
    "https://ipv4only.arpa/aide",
    "https://resolver.arpa/aide",
    "https://sub.resolver.arpa/aide",
    "https://service.arpa/aide",
    "https://service.invalid/aide",
    "https://service.test/aide",
    "https://service.onion/aide",
    "https://service.alt/aide",
    "https://user:secret@example.gouv.fr/aide",
    "https://example.gouv.fr:443/aide",
    "https://example.gouv.fr:444/aide",
  ])("rejects an unsafe authority URL: %s", (officialUrl) => {
    const input = completeInput();
    input.authority.officialUrl = officialUrl;

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("invalid");
    expect(result.invalidIssues.join(" ")).toContain("URL d’organisme");
    expect(result.invalidIssues.join(" ")).toContain("adresse refusée");
  });

  it("keeps a plausible public domain usable but explicitly unauthenticated", () => {
    const input = completeInput();
    input.authority.officialUrl = "https://unknown-public-domain.fr/aide";

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("candidate-not-budgeted");
    expect(result.warnings.join(" ")).toContain(
      "domaine public « unknown-public-domain.fr »",
    );
    expect(result.warnings.join(" ")).toContain(
      "le moteur ne les authentifie pas",
    );
    expect(result.toolLimitations.join(" ")).toContain(
      "il n’authentifie ni le domaine, ni l’autorité, ni le contenu",
    );
  });

  it("accepts a safe institutional namespace without claiming content authentication", () => {
    const input = completeInput();
    input.authority.officialUrl = "https://aides.example.gouv.fr/dispositif";

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("candidate-not-budgeted");
    expect(result.warnings.join(" ")).not.toContain(
      "n’appartient pas aux espaces institutionnels reconnus",
    );
    expect(result.toolLimitations.join(" ")).toContain(
      "il n’authentifie ni le domaine, ni l’autorité, ni le contenu",
    );
  });

  it("does not reject a public domain merely because a label contains arpa", () => {
    const input = completeInput();
    input.authority.officialUrl = "https://arpa.fr/aide";

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("candidate-not-budgeted");
    expect(result.warnings.join(" ")).toContain("domaine public « arpa.fr »");
  });

  it("does not reject an institutional domain merely because an inner label is arpa", () => {
    const input = completeInput();
    input.authority.officialUrl = "https://example.arpa.gouv.fr/aide";

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("candidate-not-budgeted");
    expect(result.warnings.join(" ")).not.toContain(
      "n’appartient pas aux espaces institutionnels reconnus",
    );
  });

  it("requires a separate post-award evidence trail and exports both authority fields", () => {
    const input = completeInput();
    input.authority.postAwardObligationsEvidence = "";

    const result = calculateSiteAidDecision(input);
    const report = buildSiteAidDecisionReport(input);

    expect(result.code).toBe("incomplete");
    expect(result.missingEvidence).toContain(
      "Obligations après attribution et après versement : information manquante.",
    );
    expect(report).toContain(
      "Échéances et règle de modification : Notification avant engagement, réalisation avant le 31/12/2026 et avenant écrit",
    );
    expect(report).toContain(
      "Obligations après attribution et après versement : ND",
    );
  });

  it.each([
    "Rapports et contrôles : à confirmer auprès de l’autorité",
    "Livrables : A\u0300\nCONFIRMER",
    "Maintien éventuel incertain",
    "Pièces justificatives sans preuve",
    "Reporting obligation unknown",
  ])(
    "keeps post-award obligations incomplete while structured verification is unknown: %s",
    (postAwardObligationsEvidence) => {
      const input = completeInput();
      input.authority.postAwardEvidenceVerified = "unknown";
      input.authority.postAwardObligationsEvidence =
        postAwardObligationsEvidence;

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("incomplete");
      expect(result.missingEvidence).toContain(
        "Vérification de la pièce post-attribution : statut à confirmer — indiquer OUI seulement après avoir vérifié la décision, la convention ou la réponse écrite applicable.",
      );
    },
  );

  const r17PostAwardSemanticIgnorables = [
    ["U+200B ZERO WIDTH SPACE", "\u200B"],
    ["U+2060 WORD JOINER", "\u2060"],
    ["U+202E RIGHT-TO-LEFT OVERRIDE", "\u202E"],
    ["U+FE0F VARIATION SELECTOR-16", "\uFE0F"],
    ["U+E0100 VARIATION SELECTOR-17", "\u{E0100}"],
    ["U+D800 lone high surrogate", "\uD800"],
    ["U+DC00 lone low surrogate", "\uDC00"],
    ["U+0000 NULL", "\0"],
    ["U+001B ESCAPE", "\u001B"],
    ["U+0085 NEXT LINE", "\u0085"],
    ["U+2028 LINE SEPARATOR", "\u2028"],
    ["U+2029 PARAGRAPH SEPARATOR", "\u2029"],
  ] as const;
  const r17PostAwardMarker = "à confirmer";
  const r17PostAwardMarkerInsertionCases =
    r17PostAwardSemanticIgnorables.flatMap(([characterLabel, character]) =>
      Array.from(
        { length: r17PostAwardMarker.length + 1 },
        (_unused, offset) =>
          [
            characterLabel,
            offset,
            `${r17PostAwardMarker.slice(
              0,
              offset,
            )}${character}${r17PostAwardMarker.slice(offset)}`,
          ] as const,
      ),
    );

  it.each(r17PostAwardMarkerInsertionCases)(
    "keeps the post-award marker unresolved with %s inserted at UTF-16 offset %i",
    (_characterLabel, _offset, insertedMarker) => {
      const input = completeInput();
      input.authority.postAwardEvidenceVerified = "unknown";
      input.authority.postAwardObligationsEvidence = `Rapports : ${insertedMarker} auprès de l’autorité`;

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("incomplete");
      expect(result.missingEvidence).toContain(
        "Vérification de la pièce post-attribution : statut à confirmer — indiquer OUI seulement après avoir vérifié la décision, la convention ou la réponse écrite applicable.",
      );
    },
  );

  const r18PostAwardZsSeparators = [
    ["U+00A0 NO-BREAK SPACE", "\u00A0"],
    ["U+1680 OGHAM SPACE MARK", "\u1680"],
    ["U+2000 EN QUAD", "\u2000"],
    ["U+2001 EM QUAD", "\u2001"],
    ["U+2002 EN SPACE", "\u2002"],
    ["U+2003 EM SPACE", "\u2003"],
    ["U+2004 THREE-PER-EM SPACE", "\u2004"],
    ["U+2005 FOUR-PER-EM SPACE", "\u2005"],
    ["U+2006 SIX-PER-EM SPACE", "\u2006"],
    ["U+2007 FIGURE SPACE", "\u2007"],
    ["U+2008 PUNCTUATION SPACE", "\u2008"],
    ["U+2009 THIN SPACE", "\u2009"],
    ["U+200A HAIR SPACE", "\u200A"],
    ["U+202F NARROW NO-BREAK SPACE", "\u202F"],
    ["U+205F MEDIUM MATHEMATICAL SPACE", "\u205F"],
    ["U+3000 IDEOGRAPHIC SPACE", "\u3000"],
  ] as const;
  const r18PostAwardZsInsertionCases = r18PostAwardZsSeparators.flatMap(
    ([characterLabel, character]) =>
      Array.from(
        { length: r17PostAwardMarker.length + 1 },
        (_unused, offset) =>
          [
            characterLabel,
            offset,
            `${r17PostAwardMarker.slice(
              0,
              offset,
            )}${character}${r17PostAwardMarker.slice(offset)}`,
          ] as const,
      ),
  );

  it.each(r18PostAwardZsInsertionCases)(
    "keeps the post-award marker unresolved with R18 Zs separator %s at UTF-16 offset %i",
    (_characterLabel, _offset, insertedMarker) => {
      const input = completeInput();
      input.authority.postAwardEvidenceVerified = "unknown";
      input.authority.postAwardObligationsEvidence = `Rapports : ${insertedMarker} auprès de l’autorité`;

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("incomplete");
      expect(result.missingEvidence).toContain(
        "Vérification de la pièce post-attribution : statut à confirmer — indiquer OUI seulement après avoir vérifié la décision, la convention ou la réponse écrite applicable.",
      );
    },
  );

  it.each([
    ["ASCII space", "à confir mer"],
    ["tabulation", "à confi\trmer"],
    ["line feed", "à conf\nirmer"],
    ["carriage return", "à con\rfirmer"],
    ["CRLF", "à confi\r\nrmer"],
  ])(
    "keeps the post-award marker unresolved with an R18 %s between its letters",
    (_separatorLabel, insertedMarker) => {
      const input = completeInput();
      input.authority.postAwardEvidenceVerified = "unknown";
      input.authority.postAwardObligationsEvidence = `Rapports : ${insertedMarker} auprès de l’autorité`;

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("incomplete");
      expect(result.missingEvidence.join(" ")).toContain("statut à confirmer");
    },
  );

  it.each([
    ["incertain", "i n c e r t a i n"],
    ["peut être", "p\teut ê\ntre"],
    ["sans preuve", "s\u2003ans preu\u00A0ve"],
    ["non confirmé", "n\ron confi\u202Frmé"],
    ["unknown", "u n k n o w n"],
  ])(
    "recognizes the R18 separated post-award uncertainty marker %s",
    (_markerLabel, separatedMarker) => {
      const input = completeInput();
      input.authority.postAwardEvidenceVerified = "unknown";
      input.authority.postAwardObligationsEvidence = `Obligations : ${separatedMarker}.`;

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("incomplete");
      expect(result.missingEvidence.join(" ")).toContain("statut à confirmer");
    },
  );

  it.each([
    "confirmés",
    "Confirmation reçue le 26/07/2026",
    "Obligations confirmées par la convention C-2026-17",
  ])(
    "preserves R18 lexical boundaries for documented wording: %s",
    (postAwardObligationsEvidence) => {
      const input = completeInput();
      input.authority.postAwardObligationsEvidence =
        postAwardObligationsEvidence;

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("candidate-not-budgeted");
      expect(result.missingEvidence.join(" ")).not.toContain(
        "Obligations après attribution et après versement",
      );
    },
  );

  it.each([
    "Obligations non confirmées par l’autorité",
    "Éléments non confirmés par l’autorité",
    "Statut non-confirmé par l’autorité",
    "Statut non‑confirmé par l’autorité",
    "Confirmation non reçue",
    "Confirmations non reçues",
  ])(
    "recognizes the R19 natural post-award uncertainty wording: %s",
    (postAwardObligationsEvidence) => {
      const input = completeInput();
      input.authority.postAwardEvidenceVerified = "no";
      input.authority.postAwardObligationsEvidence =
        postAwardObligationsEvidence;

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("incomplete");
      expect(result.missingEvidence.join(" ")).toContain("statut « NON »");
    },
  );

  it.each([
    ["HYPHEN-MINUS", "-"],
    ["U+058A ARMENIAN HYPHEN", "\u058A"],
    ["U+05BE HEBREW PUNCTUATION MAQAF", "\u05BE"],
    ["U+1400 CANADIAN SYLLABICS HYPHEN", "\u1400"],
    ["U+1806 MONGOLIAN TODO SOFT HYPHEN", "\u1806"],
    ["U+2010 HYPHEN", "\u2010"],
    ["U+2011 NON-BREAKING HYPHEN", "\u2011"],
    ["U+2012 FIGURE DASH", "\u2012"],
    ["U+2013 EN DASH", "\u2013"],
    ["U+2014 EM DASH", "\u2014"],
    ["U+2015 HORIZONTAL BAR", "\u2015"],
    ["U+2E17 DOUBLE OBLIQUE HYPHEN", "\u2E17"],
    ["U+2E1A HYPHEN WITH DIAERESIS", "\u2E1A"],
    ["U+2E3A TWO-EM DASH", "\u2E3A"],
    ["U+2E3B THREE-EM DASH", "\u2E3B"],
    ["U+2E40 DOUBLE HYPHEN", "\u2E40"],
    ["U+2E5D OBLIQUE HYPHEN", "\u2E5D"],
    ["U+301C WAVE DASH", "\u301C"],
    ["U+3030 WAVY DASH", "\u3030"],
    ["U+30A0 KATAKANA-HIRAGANA DOUBLE HYPHEN", "\u30A0"],
    ["U+FE31 PRESENTATION FORM FOR VERTICAL EM DASH", "\uFE31"],
    ["U+FE32 PRESENTATION FORM FOR VERTICAL EN DASH", "\uFE32"],
    ["U+FE58 SMALL EM DASH", "\uFE58"],
    ["U+FE63 SMALL HYPHEN-MINUS", "\uFE63"],
    ["U+FF0D FULLWIDTH HYPHEN-MINUS", "\uFF0D"],
    ["U+10D6E GARAY HYPHEN", "\u{10D6E}"],
    ["U+10EAD YEZIDI HYPHENATION MARK", "\u{10EAD}"],
  ])(
    "recognizes the R19 Unicode dash separator %s in a negative confirmation",
    (_separatorLabel, separator) => {
      const input = completeInput();
      input.authority.postAwardEvidenceVerified = "no";
      input.authority.postAwardObligationsEvidence = `Statut non${separator}confirmé par l’autorité`;

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("incomplete");
      expect(result.missingEvidence.join(" ")).toContain("statut « NON »");
    },
  );

  it.each([
    "L’autorité confirme les obligations dans la convention C-2026-17",
    "Aucune confirmation supplémentaire n’est requise par la convention C-2026-17",
    "Confirmation reçue et obligations confirmées",
  ])(
    "does not turn the R19 documented positive wording into uncertainty: %s",
    (postAwardObligationsEvidence) => {
      const input = completeInput();
      input.authority.postAwardObligationsEvidence =
        postAwardObligationsEvidence;

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("candidate-not-budgeted");
      expect(result.missingEvidence.join(" ")).not.toContain(
        "Obligations après attribution et après versement",
      );
    },
  );

  it.each([
    "Durées incertaines",
    "Obligations supposées",
    "Mesures probables",
    "Pièces sans preuves",
    "Aucune confirmation reçue",
    "Confirmation toujours pas reçue",
    "Nous n’avons pas reçu de confirmation écrite",
    "En attente de confirmation",
    "Sous réserve de confirmation",
  ])(
    "keeps every R20 unverified post-award statement incomplete without interpreting its wording: %s",
    (postAwardObligationsEvidence) => {
      const input = completeInput();
      input.authority.postAwardEvidenceVerified = "unknown";
      input.authority.postAwardObligationsEvidence =
        postAwardObligationsEvidence;

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("incomplete");
      expect(result.missingEvidence).toContain(
        "Vérification de la pièce post-attribution : statut à confirmer — indiquer OUI seulement après avoir vérifié la décision, la convention ou la réponse écrite applicable.",
      );
    },
  );

  it.each([
    "Le calendrier n’est pas incertain : échéance ferme au 31/12/2026 selon la convention C-2026-17",
    "La mention « à confirmer » est levée par la convention C-2026-17",
    "La confirmation non reçue au dépôt a été reçue le 26/07/2026 sous la référence R-2026-17",
  ])(
    "accepts the R20 resolved history only when the user declares the applicable written evidence verified: %s",
    (postAwardObligationsEvidence) => {
      const input = completeInput();
      input.authority.postAwardEvidenceVerified = "yes";
      input.authority.postAwardObligationsEvidence =
        postAwardObligationsEvidence;

      const result = calculateSiteAidDecision(input);
      const report = buildSiteAidDecisionReport(input);

      expect(result.code).toBe("candidate-not-budgeted");
      expect(result.missingEvidence.join(" ")).not.toContain(
        "Vérification de la pièce post-attribution",
      );
      expect(result.toolLimitations.join(" ")).toContain(
        "n’interprète, ne lit ni n’authentifie la pièce",
      );
      expect(report).toContain(
        "Pièce post-attribution déclarée vérifiée — déclaration non authentifiée par le moteur : OUI",
      );
    },
  );

  it("does not infer verification from affirmative free text", () => {
    const input = completeInput();
    input.authority.postAwardEvidenceVerified = "unknown";
    input.authority.postAwardObligationsEvidence =
      "Obligations confirmées par la convention C-2026-17";

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("incomplete");
    expect(result.missingEvidence.join(" ")).toContain("statut à confirmer");
  });

  it("rejects an incoherent runtime post-award verification status", () => {
    const input = completeInput();
    input.authority.postAwardEvidenceVerified = "verified" as SiteAidTriState;

    const result = calculateSiteAidDecision(input);
    const report = buildSiteAidDecisionReport(input);

    expect(result.code).toBe("invalid");
    expect(result.invalidIssues).toContain(
      "Vérification de la pièce post-attribution : valeur incohérente.",
    );
    expect(report).toContain(
      "Pièce post-attribution déclarée vérifiée — déclaration non authentifiée par le moteur : ND",
    );
  });

  it.each([
    ["no", "NON"],
    ["unknown", "À CONFIRMER"],
  ] as const)(
    "exports the explicit R20 post-award status without interpreting its evidence: %s",
    (status, expectedLabel) => {
      const input = completeInput();
      input.authority.postAwardEvidenceVerified = status;
      input.authority.postAwardObligationsEvidence =
        "La confirmation a été reçue après le dépôt.";

      const report = buildSiteAidDecisionReport(input);

      expect(report).toContain(
        `Pièce post-attribution déclarée vérifiée — déclaration non authentifiée par le moteur : ${expectedLabel}`,
      );
    },
  );

  it("keeps a post-award value made only of semantic invisibles missing", () => {
    const input = completeInput();
    input.authority.postAwardObligationsEvidence =
      "\0\u001B\u0085\u2028\u2029\u200B\u2060\u202E\uFE0F\u{E0100}\uD800\u200B\uDC00";

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("incomplete");
    expect(result.missingEvidence).toContain(
      "Obligations après attribution et après versement : information manquante.",
    );
    expect(result.missingEvidence.join(" ")).not.toContain(
      "une inconnue reste à confirmer",
    );
  });

  it("does not confuse a documented confirmation with an uncertainty marker", () => {
    const input = completeInput();
    input.authority.postAwardObligationsEvidence =
      "Contrôles et durée de conservation confirmés par la convention C-2026-17";

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("candidate-not-budgeted");
    expect(result.missingEvidence.join(" ")).not.toContain(
      "Obligations après attribution et après versement",
    );
  });

  it("accepts a substantive multiline post-award proof and preserves its whitespace in the neutralized TXT", () => {
    const input = completeInput();
    input.authority.postAwardObligationsEvidence =
      "Rapport annuel déposé sous la référence R-2026-17.\r\nPièces conservées cinq ans selon la convention C-2026-17.\tContrôle attribué à la direction.";

    const result = calculateSiteAidDecision(input);
    const report = buildSiteAidDecisionReport(input);

    expect(result.code).toBe("candidate-not-budgeted");
    expect(result.missingEvidence.join(" ")).not.toContain(
      "Obligations après attribution et après versement",
    );
    expect(report).toContain(
      "Obligations après attribution et après versement : Rapport annuel déposé sous la référence R-2026-17.\\r\\nPièces conservées cinq ans selon la convention C-2026-17.\\tContrôle attribué à la direction.",
    );
  });

  it("keeps the raw Unicode-obscured marker in the TXT only as escaped evidence", () => {
    const input = completeInput();
    input.authority.postAwardEvidenceVerified = "unknown";
    const rawEvidence =
      "Rapports : \u200Bà\u2060confir\u202Emer selon la décision";
    input.authority.postAwardObligationsEvidence = rawEvidence;

    const result = calculateSiteAidDecision(input);
    const report = buildSiteAidDecisionReport(input);
    const postAwardLine = report
      .split("\n")
      .find((line) =>
        line.startsWith("Obligations après attribution et après versement :"),
      );

    expect(result.code).toBe("incomplete");
    expect(result.missingEvidence.join(" ")).toContain("statut à confirmer");
    expect(postAwardLine).toBe(
      "Obligations après attribution et après versement : Rapports : \\u{200B}à\\u{2060}confir\\u{202E}mer selon la décision",
    );
    expect(postAwardLine).not.toContain("\u200B");
    expect(postAwardLine).not.toContain("\u2060");
    expect(postAwardLine).not.toContain("\u202E");
  });

  it("keeps the R18 raw Zs source unchanged and neutralizes it only in the TXT", () => {
    const input = completeInput();
    input.authority.postAwardEvidenceVerified = "unknown";
    const rawEvidence = "Rapports : à\u00A0confir\u2003mer selon la décision";
    input.authority.postAwardObligationsEvidence = rawEvidence;

    const result = calculateSiteAidDecision(input);
    const report = buildSiteAidDecisionReport(input);
    const postAwardLine = report
      .split("\n")
      .find((line) =>
        line.startsWith("Obligations après attribution et après versement :"),
      );

    expect(result.code).toBe("incomplete");
    expect(result.missingEvidence.join(" ")).toContain("statut à confirmer");
    expect(input.authority.postAwardObligationsEvidence).toBe(rawEvidence);
    expect(postAwardLine).toBe(
      "Obligations après attribution et après versement : Rapports : à\\u{00A0}confir\\u{2003}mer selon la décision",
    );
    expect(postAwardLine).not.toContain("\u00A0");
    expect(postAwardLine).not.toContain("\u2003");
  });
});

describe("site aid decision — R21 restructurings and SIEG blocking controls", () => {
  it("publishes fail-closed empty defaults and the same exact legal-basis resolver used by the UI", () => {
    const input = createEmptySiteAidDecisionInput();

    expect(input.profile).toMatchObject({
      deMinimisCorporateEventOccurred: "unknown",
      deMinimisCorporateEventKind: "unknown",
      deMinimisCorporateEventEvidence: "",
      deMinimisCorporateAidHistoryAdjusted: "unknown",
    });
    expect(input.aid).toMatchObject({
      sgeiEntrustmentVerified: "unknown",
      sgeiEntrustmentEvidence: "",
      sgeiServiceIdentity: "",
      sgeiSameServiceCompensationPresent: "unknown",
      sgeiCompensationEvidence: "",
    });
    expect(
      resolveSiteAidLegalBasisResolution(
        "Règlement UE 2023/2832",
        "de-minimis",
      ),
    ).toBe("de-minimis-sgei");
    expect(
      resolveSiteAidLegalBasisResolution(
        "Règlement 2023/2832 et règlement 2023/2831",
        "de-minimis",
      ),
    ).toBe("unknown");
  });

  it("blocks a notified de minimis verdict until the restructuring status is answered", () => {
    const input = completeInput({ stage: "notified" });
    input.profile.deMinimisCorporateEventOccurred = "unknown";
    input.profile.deMinimisCorporateEventEvidence = "";

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("incomplete");
    expect(result.missingEvidence.join(" ")).toContain(
      "indiquer si une fusion, une acquisition ou une scission affecte la fenêtre de trois ans contrôlée",
    );
    expect(result.code).not.toBe("notified-usable");
  });

  it.each([
    ["Règlement UE 2023/2831", "de-minimis-general"],
    ["Règlement UE 2023/2832", "de-minimis-sgei"],
    ["Règlement UE 1408/2013", "de-minimis-agriculture"],
    ["Règlement UE 717/2014", "de-minimis-fishery"],
  ] as const)(
    "applies the restructuring gate to every recognized de minimis family: %s",
    (regime, expectedResolution) => {
      const input = completeInput({ stage: "notified" });
      input.aid.deMinimisRegime = regime;
      if (expectedResolution === "de-minimis-sgei") {
        documentCurrentSgei(input);
      }
      input.profile.deMinimisCorporateEventOccurred = "unknown";
      input.profile.deMinimisCorporateEventEvidence = "";

      const result = calculateSiteAidDecision(input);

      expect(result.currentLegalBasisResolution).toBe(expectedResolution);
      expect(result.code).toBe("incomplete");
      expect(result.missingEvidence.join(" ")).toContain(
        "indiquer si une fusion, une acquisition ou une scission affecte la fenêtre de trois ans contrôlée",
      );
    },
  );

  it("requires evidence for a declared absence of restructuring and never authenticates that absence", () => {
    const incompleteInput = completeInput({ stage: "notified" });
    incompleteInput.profile.deMinimisCorporateEventEvidence = "";

    const incomplete = calculateSiteAidDecision(incompleteInput);

    expect(incomplete.code).toBe("incomplete");
    expect(incomplete.missingEvidence.join(" ")).toContain(
      "citer l’historique juridique, l’extrait d’immatriculation ou la confirmation vérifiée",
    );

    const documented = calculateSiteAidDecision(
      completeInput({ stage: "notified" }),
    );

    expect(documented.code).toBe("notified-usable");
    expect(documented.toolLimitations.join(" ")).toContain(
      "absence déclarée non authentifiée",
    );
    expect(documented.toolLimitations.join(" ")).toContain(
      "ne consulte ni registre des sociétés",
    );
  });

  it("rejects incoherent restructuring status, kind and register-adjustment values", () => {
    const input = completeInput({ stage: "notified" });
    input.profile.deMinimisCorporateEventOccurred = "maybe" as SiteAidTriState;
    input.profile.deMinimisCorporateEventKind = "sale" as never;
    input.profile.deMinimisCorporateAidHistoryAdjusted =
      "perhaps" as SiteAidTriState;

    const result = calculateSiteAidDecision(input);
    const issues = result.invalidIssues.join(" ");

    expect(result.code).toBe("invalid");
    expect(issues).toContain(
      "Restructuration de l’entreprise pour le cumul de minimis : statut incohérent",
    );
    expect(issues).toContain(
      "Type de fusion, acquisition ou scission : valeur incohérente",
    );
    expect(issues).toContain(
      "Registre après fusion, acquisition ou scission : statut d’ajustement incohérent",
    );
  });

  it("rejects operation details that contradict an unknown or negative restructuring answer", () => {
    const unknownInput = completeInput({ stage: "notified" });
    unknownInput.profile.deMinimisCorporateEventOccurred = "unknown";
    unknownInput.profile.deMinimisCorporateEventKind = "merger-acquisition";
    unknownInput.profile.deMinimisCorporateAidHistoryAdjusted = "yes";

    expect(
      calculateSiteAidDecision(unknownInput).invalidIssues.join(" "),
    ).toContain("aucun détail ne doit être conclu");

    const negativeInput = completeInput({ stage: "notified" });
    negativeInput.profile.deMinimisCorporateEventKind = "split";
    negativeInput.profile.deMinimisCorporateAidHistoryAdjusted = "yes";

    expect(calculateSiteAidDecision(negativeInput)).toMatchObject({
      code: "invalid",
    });
    expect(
      calculateSiteAidDecision(negativeInput).invalidIssues.join(" "),
    ).toContain(
      "le type d’opération et l’ajustement du registre doivent rester à confirmer",
    );
  });

  it("requires the operation kind, evidence and adjusted aid history after a restructuring", () => {
    const input = completeInput({ stage: "notified" });
    input.profile.deMinimisCorporateEventOccurred = "yes";
    input.profile.deMinimisCorporateEventKind = "unknown";
    input.profile.deMinimisCorporateEventEvidence = "";
    input.profile.deMinimisCorporateAidHistoryAdjusted = "unknown";

    const result = calculateSiteAidDecision(input);
    const missing = result.missingEvidence.join(" ");

    expect(result.code).toBe("incomplete");
    expect(missing).toContain(
      "préciser si l’historique concerne une fusion ou acquisition, une scission, ou les deux",
    );
    expect(missing).toContain(
      "citer les actes, dates, entreprises parties, activités reprises et méthode d’allocation utilisée",
    );
    expect(missing).toContain(
      "vérifier que toutes les aides antérieures requises sont intégrées ou allouées",
    );

    input.profile.deMinimisCorporateAidHistoryAdjusted = "no";
    expect(calculateSiteAidDecision(input).missingEvidence.join(" ")).toContain(
      "le cumul reste incomplet tant que l’historique n’est pas ajusté",
    );
  });

  it("documents the merger-acquisition carry-over rule without inventing authentication", () => {
    const input = completeInput({ stage: "notified" });
    input.profile.deMinimisCorporateEventOccurred = "yes";
    input.profile.deMinimisCorporateEventKind = "merger-acquisition";
    input.profile.deMinimisCorporateEventEvidence =
      "Traité de fusion F-2025-12, sociétés A et B, effet au 01/01/2026";
    input.profile.deMinimisCorporateAidHistoryAdjusted = "yes";

    const result = calculateSiteAidDecision(input);
    const warnings = result.warnings.join(" ");

    expect(result.code).toBe("notified-usable");
    expect(warnings).toContain(
      "les aides de minimis antérieures de toutes les entreprises parties à l’opération doivent être prises en compte",
    );
    expect(warnings).toContain(
      "les aides légalement octroyées avant l’opération restent légales",
    );
    expect(result.toolLimitations.join(" ")).toContain(
      "registre ajusté déclaré, non authentifié",
    );
  });

  it.each([
    [
      "split",
      "réparties proportionnellement sur la base de la valeur comptable du capital des nouvelles entreprises",
    ],
    [
      "both",
      "réparties proportionnellement sur la base de la valeur comptable du capital des nouvelles entreprises",
    ],
  ] as const)(
    "documents the beneficiary-activity then book-equity allocation rule for %s",
    (kind, expectedWarning) => {
      const input = completeInput({ stage: "notified" });
      input.profile.deMinimisCorporateEventOccurred = "yes";
      input.profile.deMinimisCorporateEventKind = kind;
      input.profile.deMinimisCorporateEventEvidence =
        "Acte de scission S-2026-02, activités reprises et valeur comptable au 01/02/2026";
      input.profile.deMinimisCorporateAidHistoryAdjusted = "yes";

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("notified-usable");
      expect(result.warnings.join(" ")).toContain(
        "allouées à l’entreprise qui en a bénéficié",
      );
      expect(result.warnings.join(" ")).toContain(expectedWarning);
      if (kind === "both") {
        expect(result.warnings.join(" ")).toContain(
          "toutes les entreprises parties à l’opération",
        );
      }
    },
  );

  it("closes the cold-audit two-key counterexample until the corporate history is adjusted", () => {
    const input = completeInput({ stage: "notified" });
    input.aidRegister = [
      registerEntry({
        scheme: "Aide de l’ancienne société",
        singleUndertakingScope: "Ancienne société",
        amount: 200_000,
        legalGrantDate: "2025-01-15",
      }),
      registerEntry({
        scheme: "Aide de la société absorbante",
        singleUndertakingScope: "Nouvelle société",
        amount: 200_000,
        legalGrantDate: "2026-01-15",
      }),
    ];
    input.profile.deMinimisCorporateEventOccurred = "yes";
    input.profile.deMinimisCorporateEventKind = "merger-acquisition";
    input.profile.deMinimisCorporateEventEvidence =
      "Traité de fusion F-2026-01 et historique des sociétés participantes";
    input.profile.deMinimisCorporateAidHistoryAdjusted = "no";

    const blocked = calculateSiteAidDecision(input);

    expect(blocked.code).toBe("incomplete");
    expect(blocked.code).not.toBe("notified-usable");
    expect(blocked.missingEvidence.join(" ")).toContain(
      "le cumul reste incomplet tant que l’historique n’est pas ajusté",
    );

    input.profile.deMinimisCorporateAidHistoryAdjusted = "yes";
    input.aidRegister[0].singleUndertakingScope = "Nouvelle société";
    input.aid.deMinimisSingleUndertakingScope = "Nouvelle société";

    const adjusted = calculateSiteAidDecision(input);

    expect(adjusted.warnings.join(" ")).toMatch(
      /Dépassement potentiel de minimis général.*402 100 €/,
    );
    expect(adjusted.toolLimitations.join(" ")).toContain(
      "ne reconstitue pas les aides des entreprises fusionnées ou acquises",
    );
  });

  it("retains restructuring declarations in the report without invalidating an unrelated non-de-minimis review", () => {
    const input = completeInput({
      stage: "notified",
      legalBasisStatus: "not-de-minimis",
    });
    input.aid.deMinimisRegime = "";
    input.aid.nonDeMinimisLegalBasis = "Règlement (UE) 651/2014, article 14";
    input.aid.nonDeMinimisEvidenceReference =
      "Décision officielle SA.12345 du 26/07/2026";

    const result = calculateSiteAidDecision(input);
    const report = buildSiteAidDecisionReport(input);

    expect(result.code).toBe("incomplete");
    expect(result.invalidIssues).toHaveLength(0);
    expect(result.toolLimitations.join(" ")).toContain(
      "les déclarations saisies sont conservées dans le rapport mais n’entrent pas dans le précontrôle",
    );
    expect(report).toContain(
      "Fusion, acquisition ou scission pertinente déclarée — non authentifiée par le moteur : NON",
    );
  });

  it("blocks an exact SIEG reference until mandate, service identity and compensation inventory are documented", () => {
    const input = completeInput({ stage: "notified" });
    input.aid.deMinimisRegime = "Règlement UE 2023/2832";

    const result = calculateSiteAidDecision(input);
    const missing = result.missingEvidence.join(" ");

    expect(result.currentLegalBasisResolution).toBe("de-minimis-sgei");
    expect(result.code).toBe("incomplete");
    expect(result.code).not.toBe("notified-usable");
    expect(missing).toContain(
      "mandat SIEG : statut à confirmer — vérifier que le service a été confié à l’entreprise par écrit ou par voie électronique",
    );
    expect(missing).toContain(
      "identité du SIEG : décrire exactement le service confié",
    );
    expect(missing).toContain(
      "autre compensation du même SIEG : statut à confirmer",
    );
  });

  it.each([
    ["no", "statut « NON » — le règlement 2023/2832 ne peut pas être retenu"],
    [
      "yes",
      "preuve du mandat SIEG : fournir un acte écrit ou électronique identifiable",
    ],
  ] as const)(
    "blocks an unusable SIEG entrustment declaration: %s",
    (entrustmentStatus, expectedIssue) => {
      const input = completeInput({ stage: "notified" });
      documentCurrentSgei(input);
      input.aid.sgeiEntrustmentVerified = entrustmentStatus;
      if (entrustmentStatus === "yes") {
        input.aid.sgeiEntrustmentEvidence = "";
      }

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe(
        entrustmentStatus === "no" ? "invalid" : "incomplete",
      );
      expect(result.missingEvidence.join(" ")).toContain(expectedIssue);
    },
  );

  it("blocks a SIEG branch whose exact service identity is missing", () => {
    const input = completeInput({ stage: "notified" });
    documentCurrentSgei(input);
    input.aid.sgeiServiceIdentity = "";

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("incomplete");
    expect(result.missingEvidence.join(" ")).toContain(
      "identité du SIEG : décrire exactement le service confié",
    );
  });

  it("blocks any declared compensation of the same SIEG, even when documented and even if it is not State aid", () => {
    const input = completeInput({ stage: "notified" });
    documentCurrentSgei(input);
    input.aid.sgeiSameServiceCompensationPresent = "yes";
    input.aid.sgeiCompensationEvidence =
      "Convention compensatoire C-2026-14 relative au même service, qualifiée hors aide d’État";

    const result = calculateSiteAidDecision(input);
    const missing = result.missingEvidence.join(" ");
    const warnings = result.warnings.join(" ");

    expect(result.code).toBe("incomplete");
    expect(result.code).not.toBe("notified-usable");
    expect(missing).toContain(
      "le règlement 2023/2832 interdit ce cumul ; requalifier la base avec l’autorité",
    );
    expect(warnings).toContain(
      "que cette compensation constitue ou non une aide d’État",
    );
  });

  it("requires evidence for a negative same-SGEI compensation declaration", () => {
    const input = completeInput({ stage: "notified" });
    documentCurrentSgei(input);
    input.aid.sgeiCompensationEvidence = "";

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("incomplete");
    expect(result.missingEvidence.join(" ")).toContain(
      "preuve sur les compensations du même SIEG : fournir un inventaire ou une réponse d’autorité identifiable",
    );
  });

  it("allows the ordinary financial verdict only after every current SIEG control is documented", () => {
    const input = completeInput({ stage: "notified" });
    documentCurrentSgei(input);

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("notified-usable");
    expect(result.toolLimitations.join(" ")).toContain(
      "SIEG — déclarations non authentifiées",
    );
    expect(result.toolLimitations.join(" ")).toContain(
      "ne vérifie ni les pièces, ni leur applicabilité, ni l’identité du SIEG",
    );
  });

  it("applies the same blocking SIEG controls to every register row", () => {
    const input = completeInput({ stage: "notified" });
    input.aidRegister = [
      registerEntry({
        regime: "Règlement UE 2023/2832",
        amount: 25_000,
      }),
    ];

    const blocked = calculateSiteAidDecision(input);

    expect(blocked.code).toBe("incomplete");
    expect(blocked.missingEvidence.join(" ")).toContain(
      "Registre, aide 1, mandat SIEG : statut à confirmer",
    );
    expect(blocked.missingEvidence.join(" ")).toContain(
      "Registre, aide 1, autre compensation du même SIEG : statut à confirmer",
    );

    input.aidRegister = [sgeiRegisterEntry({ amount: 25_000 })];

    expect(calculateSiteAidDecision(input).code).toBe("notified-usable");
  });

  it("rejects stale SIEG-specific declarations under a non-SIEG regulation", () => {
    const input = completeInput({ stage: "notified" });
    input.aid.sgeiEntrustmentVerified = "yes";
    input.aid.sgeiEntrustmentEvidence = "Acte SIEG n° 12";
    input.aid.sgeiServiceIdentity = "Service distinct";
    input.aid.sgeiSameServiceCompensationPresent = "no";
    input.aid.sgeiCompensationEvidence = "Inventaire n° 12";

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("invalid");
    expect(result.invalidIssues.join(" ")).toContain(
      "champs SIEG : ils doivent rester vides et à confirmer lorsque la base résolue n’est pas le règlement 2023/2832",
    );
  });

  it("rejects incoherent SIEG tri-state values for both current aid and register rows", () => {
    const input = completeInput({ stage: "notified" });
    documentCurrentSgei(input);
    input.aid.sgeiEntrustmentVerified = "maybe" as SiteAidTriState;
    input.aidRegister = [
      sgeiRegisterEntry({
        sgeiSameServiceCompensationPresent: "perhaps" as SiteAidTriState,
      }),
    ];

    const result = calculateSiteAidDecision(input);
    const issues = result.invalidIssues.join(" ");

    expect(result.code).toBe("invalid");
    expect(issues).toContain(
      "Aide courante, mandat SIEG : statut de vérification incohérent",
    );
    expect(issues).toContain(
      "Registre, aide 1, autre compensation du même SIEG : statut incohérent",
    );
  });

  it("exports restructuring and SIEG declarations separately without presenting them as authenticated", () => {
    const input = completeInput({ stage: "notified" });
    input.profile.deMinimisCorporateEventOccurred = "yes";
    input.profile.deMinimisCorporateEventKind = "both";
    input.profile.deMinimisCorporateEventEvidence =
      "Traité F-2026-01 et acte S-2026-03";
    input.profile.deMinimisCorporateAidHistoryAdjusted = "yes";
    documentCurrentSgei(input);
    input.aidRegister = [
      sgeiRegisterEntry({
        scheme: "Compensation historique contrôlée",
        amount: 25_000,
      }),
    ];

    const report = buildSiteAidDecisionReport(input);

    expect(report).toContain(
      "Fusion, acquisition ou scission pertinente déclarée — non authentifiée par le moteur : OUI",
    );
    expect(report).toContain(
      "Type d’opération déclaré : Fusion ou acquisition et scission",
    );
    expect(report).toContain(
      "Registre de minimis déclaré ajusté après l’opération — non authentifié par le moteur : OUI",
    );
    expect(report).toContain(
      "Mandat SIEG déclaré vérifié — non authentifié par le moteur : OUI",
    );
    expect(report).toContain(
      "Autre compensation relative au même SIEG déclarée présente — non authentifiée par le moteur : NON",
    );
    expect(report).toContain(
      "Compensation historique contrôlée | statut déclaré",
    );
    expect(report).toContain(
      "mandat SIEG déclaré vérifié — non authentifié OUI",
    );
    expect(report).toContain(
      "preuve et inventaire des compensations du même SIEG déclarés — non authentifiés",
    );
  });
});

describe("site aid decision — R10 entirely unresolved prudent cumulation", () => {
  const alertPrefix = "Cumul prudent non ventilé entièrement non résolu";

  it.each([
    [299_999.99, "299 999,99 €", 0],
    [300_000, "300 000 €", 1],
    [300_001, "300 001 €", 1],
    [301_100, "301 100 €", 1],
  ] as const)(
    "applies the prudent review marker at %s",
    (total, formattedTotal, expectedAlertCount) => {
      const input = completeInput();
      input.aidRegister = [
        externalReviewRegisterEntry(total - 150_000),
        unknownLegalBasisRegisterEntry(150_000),
      ];

      const result = calculateSiteAidDecision(input);
      const alerts = result.warnings.filter((warning) =>
        warning.startsWith(alertPrefix),
      );

      expect(alerts).toHaveLength(expectedAlertCount);
      if (expectedAlertCount === 1) {
        expect(alerts[0]).toContain(formattedTotal);
        expect(alerts[0]).toContain(
          "déclarée hors de minimis en revue externe ou encore inconnue",
        );
        expect(alerts[0]).toContain(
          "il ne constitue pas un plafond juridique universel",
        );
        expect(alerts[0]).toContain(
          "Aucun montant n’est attribué aux règlements 2023/2831, 2023/2832, 1408/2013 ou 717/2014",
        );
        expect(alerts[0]).toContain(
          "une revue externe obligatoire doit qualifier chaque aide",
        );
        expect(alerts[0]).not.toContain(
          "rattachés à des règlements de minimis reconnus",
        );
      }
      expect(result.warnings.join(" ")).not.toContain(
        "Dépassement potentiel de minimis",
      );
    },
  );

  it.each([
    [
      "one row",
      [externalReviewRegisterEntry(300_001)],
      "déclarée hors de minimis et soumise à revue externe",
    ],
    [
      "multiple rows",
      [
        externalReviewRegisterEntry(150_001),
        unknownLegalBasisRegisterEntry(150_000),
      ],
      "déclarée hors de minimis en revue externe ou encore inconnue",
    ],
  ] as const)(
    "emits one alert per group for %s",
    (_label, aidRegister, expectedProvenance) => {
      const input = completeInput();
      input.aidRegister = [...aidRegister];

      const result = calculateSiteAidDecision(input);
      const alerts = result.warnings.filter((warning) =>
        warning.startsWith(alertPrefix),
      );

      expect(alerts).toHaveLength(1);
      expect(alerts[0]).toContain("300 001 €");
      expect(alerts[0]).toContain(expectedProvenance);
      expect(alerts[0]).toContain(
        "ancrée prudemment à la date de vérification, le 2026-07-26",
      );
    },
  );

  it("combines an unresolved current aid and register row at the current legal-grant anchor", () => {
    const input = completeInput({
      stage: "notified",
      legalBasisStatus: "not-de-minimis",
      legalAidValueAmount: 150_001,
    });
    input.aid.deMinimisRegime = "";
    input.aid.nonDeMinimisLegalBasis = "Règlement (UE) 651/2014, article 14";
    input.aid.nonDeMinimisEvidenceReference =
      "Notification officielle N-2026-001";
    input.aidRegister = [unknownLegalBasisRegisterEntry(150_000)];

    const alerts = calculateSiteAidDecision(input).warnings.filter((warning) =>
      warning.startsWith(alertPrefix),
    );

    expect(alerts).toHaveLength(1);
    expect(alerts[0]).toContain("300 001 €");
    expect(alerts[0]).toContain(
      "ancrée à la date d’octroi juridique de l’aide courante, le 2026-07-26",
    );
    expect(alerts[0]).toContain("aide courante juridiquement octroyée incluse");
  });

  it("excludes unresolved observations outside the three-year window", () => {
    const input = completeInput();
    input.aidRegister = [
      externalReviewRegisterEntry(150_001),
      unknownLegalBasisRegisterEntry(150_000, {
        legalGrantDate: "2023-07-25",
      }),
    ];

    expect(calculateSiteAidDecision(input).warnings.join(" ")).not.toContain(
      alertPrefix,
    );
  });

  it("never crosses distinct undertaking groups", () => {
    const input = completeInput();
    input.aidRegister = [
      externalReviewRegisterEntry(150_001, {
        singleUndertakingScope: "Groupe A",
      }),
      unknownLegalBasisRegisterEntry(150_000, {
        singleUndertakingScope: "Groupe B",
      }),
    ];

    expect(calculateSiteAidDecision(input).warnings.join(" ")).not.toContain(
      alertPrefix,
    );
  });

  it("emits one independent alert for each group that reaches the marker", () => {
    const input = completeInput();
    input.aidRegister = [
      externalReviewRegisterEntry(300_001, {
        singleUndertakingScope: "Groupe A",
      }),
      unknownLegalBasisRegisterEntry(300_001, {
        singleUndertakingScope: "Groupe B",
      }),
    ];

    const alerts = calculateSiteAidDecision(input).warnings.filter((warning) =>
      warning.startsWith(alertPrefix),
    );

    expect(alerts).toHaveLength(2);
    expect(
      alerts.filter((warning) => warning.includes("« Groupe A »")),
    ).toHaveLength(1);
    expect(
      alerts.filter((warning) => warning.includes("« Groupe B »")),
    ).toHaveLength(1);
  });

  it("prints the entirely unresolved alert exactly once in the TXT report", () => {
    const input = completeInput();
    input.aidRegister = [
      externalReviewRegisterEntry(151_100),
      unknownLegalBasisRegisterEntry(150_000),
    ];

    const report = buildSiteAidDecisionReport(input);

    expect(report.split(alertPrefix)).toHaveLength(2);
    expect(report).toContain("301 100 €");
    expect(report).not.toContain(
      "rattachés à des règlements de minimis reconnus",
    );
    expect(report).not.toContain("Dépassement potentiel de minimis");
  });
});

describe("site aid decision — R16 exact identity and conservative script profiles", () => {
  const alertPrefix = "Cumul prudent non ventilé entièrement non résolu";
  const distinctionPrefix = "distinction des clés proches";
  const wholeScriptConfusableCases = [
    ["Cyrillic shha", "ha", "һа"],
    ["Cyrillic Komi de", "data", "ԁата"],
    ["Cyrillic we", "wm", "ԝм"],
    ["Greek lunate sigma", "co", "ϲο"],
  ] as const;

  it.each([
    ["identical", "Groupe-A", "Groupe-A"],
    ["NFC-equivalent", "Groupe E\u0301lan", "Groupe Élan"],
    ["outer whitespace ignored as input noise", "  Groupe A ", "Groupe A"],
  ])(
    "totals only keys identical after NFC and outer trim: %s",
    (_label, firstScope, secondScope) => {
      const input = completeInput();
      input.aidRegister = [
        externalReviewRegisterEntry(150_001, {
          singleUndertakingScope: firstScope,
        }),
        unknownLegalBasisRegisterEntry(150_000, {
          singleUndertakingScope: secondScope,
        }),
      ];

      const result = calculateSiteAidDecision(input);
      const alerts = result.warnings.filter((warning) =>
        warning.startsWith(alertPrefix),
      );

      expect(alerts).toHaveLength(1);
      expect(alerts[0]).toContain("300 001 €");
      expect(result.missingEvidence.join(" ")).not.toContain(distinctionPrefix);
    },
  );

  it.each([
    ["Greek alpha", "Groupe Atlas", "Groupe Αtlas"],
    ["Cyrillic A", "Groupe Atlas", "Groupe Аtlas"],
    ["Latin dotless i", "Iris", "Irıs"],
  ])(
    "blocks a confusable identity without merging, then totals after exact recopy: %s",
    (_label, firstScope, secondScope) => {
      const input = completeInput();
      input.aidRegister = [
        externalReviewRegisterEntry(150_001, {
          singleUndertakingScope: firstScope,
        }),
        unknownLegalBasisRegisterEntry(150_000, {
          singleUndertakingScope: secondScope,
        }),
      ];

      const ambiguous = calculateSiteAidDecision(input);

      expect(ambiguous.missingEvidence.join(" ")).toContain(
        "Registre, aide 1, distinction des clés proches : statut à confirmer",
      );
      expect(ambiguous.missingEvidence.join(" ")).toContain(
        "Registre, aide 2, distinction des clés proches : statut à confirmer",
      );
      expect(ambiguous.warnings.join(" ")).toContain("ne sont pas fusionnées");
      expect(ambiguous.toolLimitations.join(" ")).toContain(
        "table bornée de confusables Latin/grec/cyrillique",
      );
      expect(
        ambiguous.warnings.filter((warning) => warning.startsWith(alertPrefix)),
      ).toHaveLength(0);

      input.aidRegister[1].singleUndertakingScope = firstScope;
      const exact = calculateSiteAidDecision(input);
      const alerts = exact.warnings.filter((warning) =>
        warning.startsWith(alertPrefix),
      );

      expect(exact.missingEvidence.join(" ")).not.toContain(distinctionPrefix);
      expect(alerts).toHaveLength(1);
      expect(alerts[0]).toContain("300 001 €");
    },
  );

  it.each(wholeScriptConfusableCases)(
    "blocks distinct script profiles without merging, then totals after exact recopy: %s",
    (_label, firstScope, secondScope) => {
      const input = completeInput();
      input.aidRegister = [
        externalReviewRegisterEntry(150_001, {
          singleUndertakingScope: firstScope,
        }),
        unknownLegalBasisRegisterEntry(150_000, {
          singleUndertakingScope: secondScope,
        }),
      ];

      const ambiguous = calculateSiteAidDecision(input);

      expect(ambiguous.missingEvidence.join(" ")).toContain(
        "Registre, aide 1, distinction des clés proches : statut à confirmer",
      );
      expect(ambiguous.missingEvidence.join(" ")).toContain(
        "Registre, aide 2, distinction des clés proches : statut à confirmer",
      );
      expect(ambiguous.warnings.join(" ")).toContain(
        "entre les profils de scripts Latin",
      );
      expect(ambiguous.warnings.join(" ")).toContain(`« ${firstScope} »`);
      expect(ambiguous.warnings.join(" ")).toContain(`« ${secondScope} »`);
      expect(ambiguous.warnings.join(" ")).toContain("ne sont pas fusionnées");
      expect(ambiguous.toolLimitations.join(" ")).toContain(
        "barrière conservatrice entre profils de scripts Latin/grec/cyrillique",
      );
      expect(ambiguous.toolLimitations.join(" ")).toContain(
        "n’implémente pas intégralement Unicode UTS #39",
      );
      expect(
        ambiguous.warnings.filter((warning) => warning.startsWith(alertPrefix)),
      ).toHaveLength(0);

      input.aidRegister[1].singleUndertakingScope = firstScope;
      const exact = calculateSiteAidDecision(input);
      const alerts = exact.warnings.filter((warning) =>
        warning.startsWith(alertPrefix),
      );

      expect(exact.missingEvidence.join(" ")).not.toContain(distinctionPrefix);
      expect(alerts).toHaveLength(1);
      expect(alerts[0]).toContain("300 001 €");
    },
  );

  it("keeps documented interscript keys exact and separate without authenticating their evidence", () => {
    const input = completeInput();
    input.aidRegister = [
      externalReviewRegisterEntry(150_001, {
        singleUndertakingScope: "ha",
        similarUndertakingKeysDistinct: "yes",
        similarUndertakingKeysEvidence: "Extrait officiel de l’entité latine",
      }),
      unknownLegalBasisRegisterEntry(150_000, {
        singleUndertakingScope: "һа",
        similarUndertakingKeysDistinct: "yes",
        similarUndertakingKeysEvidence:
          "Extrait officiel distinct de l’entité cyrillique",
      }),
    ];

    const result = calculateSiteAidDecision(input);

    expect(result.missingEvidence.join(" ")).not.toContain(distinctionPrefix);
    expect(result.warnings.join(" ")).toContain(
      "clés interscripts déclarées distinctes",
    );
    expect(result.warnings.join(" ")).toContain(
      "preuves saisies ne sont pas authentifiées par l’outil",
    );
    expect(
      result.warnings.filter((warning) => warning.startsWith(alertPrefix)),
    ).toHaveLength(0);
  });

  it.each(wholeScriptConfusableCases)(
    "keeps one coherent non-Latin script identity valid on its own: %s",
    (_label, _latinScope, nonLatinScope) => {
      const input = completeInput();
      input.aidRegister = [
        externalReviewRegisterEntry(300_001, {
          singleUndertakingScope: nonLatinScope,
        }),
      ];

      const result = calculateSiteAidDecision(input);
      const alerts = result.warnings.filter((warning) =>
        warning.startsWith(alertPrefix),
      );

      expect(result.missingEvidence.join(" ")).not.toContain(distinctionPrefix);
      expect(result.missingEvidence.join(" ")).not.toContain(
        "contrôle de graphie Unicode",
      );
      expect(result.warnings.join(" ")).not.toContain("interscripts ambiguë");
      expect(alerts).toHaveLength(1);
      expect(alerts[0]).toContain("300 001 €");
    },
  );

  it.each([
    ["Latin", "ha", "hb"],
    ["Cyrillic", "һа", "һб"],
    ["Greek", "ϲο", "ϲα"],
  ])(
    "does not apply the interscript barrier to distinct coherent keys in one script: %s",
    (_label, firstScope, secondScope) => {
      const input = completeInput();
      input.aidRegister = [
        externalReviewRegisterEntry(150_001, {
          singleUndertakingScope: firstScope,
        }),
        unknownLegalBasisRegisterEntry(150_000, {
          singleUndertakingScope: secondScope,
        }),
      ];

      const result = calculateSiteAidDecision(input);

      expect(result.missingEvidence.join(" ")).not.toContain(distinctionPrefix);
      expect(result.warnings.join(" ")).not.toContain("interscripts ambiguë");
      expect(result.warnings.join(" ")).not.toContain(alertPrefix);
    },
  );

  it("limits the interscript barrier to one Member State and active three-year window", () => {
    const scenarios = [
      [
        externalReviewRegisterEntry(150_001, {
          memberState: "France",
          singleUndertakingScope: "ha",
        }),
        unknownLegalBasisRegisterEntry(150_000, {
          memberState: "Belgique",
          singleUndertakingScope: "һа",
        }),
      ],
      [
        externalReviewRegisterEntry(150_001, {
          singleUndertakingScope: "ha",
          legalGrantDate: "2020-01-01",
        }),
        unknownLegalBasisRegisterEntry(150_000, {
          singleUndertakingScope: "һа",
          legalGrantDate: "2026-01-01",
        }),
      ],
    ];

    for (const aidRegister of scenarios) {
      const input = completeInput();
      input.aidRegister = aidRegister;

      const result = calculateSiteAidDecision(input);

      expect(result.missingEvidence.join(" ")).not.toContain(distinctionPrefix);
      expect(result.warnings.join(" ")).not.toContain("interscripts ambiguë");
    }
  });

  it("suspends every group found by the later verification anchor when the current-grant anchor is asymmetric", () => {
    const input = completeInput({
      stage: "notified",
      legalBasisStatus: "not-de-minimis",
      legalAidValueAmount: 300_001,
    });
    input.aid.deMinimisRegime = "";
    input.aid.nonDeMinimisLegalBasis = "Règlement (UE) 651/2014, article 14";
    input.aid.nonDeMinimisEvidenceReference =
      "Notification officielle N-2025-001";
    input.aid.deMinimisSingleUndertakingScope = "ha";
    input.aid.legalGrantDate = "2025-01-15";
    input.aidRegister = [
      unknownLegalBasisRegisterEntry(300_001, {
        singleUndertakingScope: "һа",
        legalGrantDate: "2026-01-15",
      }),
    ];

    const result = calculateSiteAidDecision(input);

    expect(result.missingEvidence.join(" ")).toContain(
      "Aide courante, distinction des clés proches : statut à confirmer",
    );
    expect(result.missingEvidence.join(" ")).toContain(
      "Registre, aide 1, distinction des clés proches : statut à confirmer",
    );
    expect(result.warnings.join(" ")).toContain(
      "entreprise unique interscripts ambiguë",
    );
    expect(
      result.warnings.filter((warning) => warning.startsWith(alertPrefix)),
    ).toHaveLength(0);
    expect(result.warnings.join(" ")).not.toContain(
      "Dépassement potentiel de minimis",
    );
  });

  it("suspends a lone mixed-script identity until its exact graphy is documented", () => {
    const input = completeInput();
    input.aidRegister = [
      externalReviewRegisterEntry(300_001, {
        singleUndertakingScope: "Groupe Αtlas",
      }),
    ];

    const ambiguous = calculateSiteAidDecision(input);

    expect(ambiguous.missingEvidence.join(" ")).toContain(
      "Registre, aide 1, contrôle de graphie Unicode : statut à confirmer",
    );
    expect(ambiguous.warnings.join(" ")).toContain(
      "Précontrôle prudent du cumul bloqué, graphie Unicode ambiguë",
    );
    expect(ambiguous.warnings.join(" ")).not.toContain(alertPrefix);

    input.aidRegister[0].similarUndertakingKeysDistinct = "yes";
    input.aidRegister[0].similarUndertakingKeysEvidence =
      "Extrait officiel vérifié avec la graphie exacte";
    const documented = calculateSiteAidDecision(input);

    expect(documented.missingEvidence.join(" ")).not.toContain(
      "contrôle de graphie Unicode",
    );
    expect(documented.warnings.join(" ")).toContain(
      "graphie Unicode déclarée vérifiée",
    );
    expect(documented.warnings.join(" ")).toContain("300 001 €");
  });

  it.each([
    ["Greek", "Όμιλος Άτλας"],
    ["Cyrillic", "Группа Атлас"],
  ])(
    "preserves a coherent non-Latin exact identity and totals it normally: %s",
    (_label, scope) => {
      const input = completeInput();
      input.aidRegister = [
        externalReviewRegisterEntry(150_001, {
          singleUndertakingScope: scope,
        }),
        unknownLegalBasisRegisterEntry(150_000, {
          singleUndertakingScope: scope,
        }),
      ];

      const result = calculateSiteAidDecision(input);
      const alerts = result.warnings.filter((warning) =>
        warning.startsWith(alertPrefix),
      );

      expect(result.missingEvidence.join(" ")).not.toContain(
        "contrôle de graphie Unicode",
      );
      expect(result.missingEvidence.join(" ")).not.toContain(distinctionPrefix);
      expect(alerts).toHaveLength(1);
      expect(alerts[0]).toContain("300 001 €");
    },
  );

  it.each([
    ["ampersand spacing", "Groupe A&B", "Groupe A & B"],
    ["plus spacing", "Groupe A+B", "Groupe A + B"],
    ["slash spacing", "Groupe A/B", "Groupe A / B"],
    ["backslash spacing", "Groupe A\\B", "Groupe A \\ B"],
    ["apostrophe spacing", "Groupe d’A", "Groupe d ’ A"],
    ["spaced abbreviation", "S.A.S. Élan", "S. A. S. Elan"],
    ["oe ligature", "Groupe Cœur", "Groupe Coeur"],
    ["ae ligature", "Groupe Cæur", "Groupe Caeur"],
  ])(
    "blocks a 300001 total for a same-separator proximity, then totals only after exact recopy: %s",
    (_label, first, second) => {
      const input = completeInput();
      input.aidRegister = [
        externalReviewRegisterEntry(150_001, {
          singleUndertakingScope: first,
        }),
        unknownLegalBasisRegisterEntry(150_000, {
          singleUndertakingScope: second,
        }),
      ];

      const ambiguous = calculateSiteAidDecision(input);

      expect(ambiguous.missingEvidence.join(" ")).toContain(
        "Registre, aide 1, distinction des clés proches : statut à confirmer",
      );
      expect(ambiguous.missingEvidence.join(" ")).toContain(
        "Registre, aide 2, distinction des clés proches : statut à confirmer",
      );
      expect(
        ambiguous.warnings.filter((warning) => warning.startsWith(alertPrefix)),
      ).toHaveLength(0);

      input.aidRegister[1].singleUndertakingScope = first;
      const exact = calculateSiteAidDecision(input);
      const alerts = exact.warnings.filter((warning) =>
        warning.startsWith(alertPrefix),
      );

      expect(exact.missingEvidence.join(" ")).not.toContain(distinctionPrefix);
      expect(alerts).toHaveLength(1);
      expect(alerts[0]).toContain("300 001 €");
    },
  );

  it.each([
    ["visible whitespace", "Groupe   A", "Groupe A"],
    ["fullwidth compatibility", "Ｇｒｏｕｐｅ Ａ", "Groupe A"],
    ["hyphen and space", "Groupe-A", "Groupe A"],
    ["minus and space", "Groupe−A", "Groupe A"],
    ["middle dot and space", "Groupe·A", "Groupe A"],
    ["case", "GROUPE A", "groupe a"],
    ["accent", "Groupe Élan", "Groupe Elan"],
    ["dash variants", "Groupe–A", "Groupe-A"],
    ["apostrophe variants", "Groupe d’A", "Groupe d'A"],
    ["abbreviation dots", "S.A.S. Élan", "SAS Elan"],
    ["terminal dot", "Groupe A.", "Groupe A"],
    ["separator punctuation", "Groupe, A", "Groupe A"],
    ["same ampersand with spaces", "Groupe A&B", "Groupe A & B"],
    ["same plus with spaces", "Groupe A+B", "Groupe A + B"],
    ["same slash with spaces", "Groupe A/B", "Groupe A / B"],
    ["same backslash with spaces", "Groupe A\\B", "Groupe A \\ B"],
    ["spaced apostrophe", "Groupe d’A", "Groupe d ’ A"],
    ["spaced abbreviation", "S.A.S. Élan", "S. A. S. Elan"],
    ["oe ligature", "Groupe Cœur", "Groupe Coeur"],
    ["ae ligature", "Groupe Cæur", "Groupe Caeur"],
  ])(
    "blocks but never merges close distinct keys: %s",
    (_label, first, second) => {
      const input = completeInput();
      input.aidRegister = [
        externalReviewRegisterEntry(300_001, {
          singleUndertakingScope: first,
        }),
        unknownLegalBasisRegisterEntry(300_001, {
          singleUndertakingScope: second,
        }),
      ];

      const result = calculateSiteAidDecision(input);

      expect(result.warnings.join(" ")).not.toContain(alertPrefix);
      expect(result.missingEvidence.join(" ")).toContain(
        "Registre, aide 1, distinction des clés proches : statut à confirmer",
      );
      expect(result.missingEvidence.join(" ")).toContain(
        "Registre, aide 2, distinction des clés proches : statut à confirmer",
      );
      expect(result.warnings.join(" ")).toContain(
        "ces clés proches mais non identiques ne sont pas fusionnées",
      );
      expect(result.warnings.join(" ")).toContain(
        "aucun total n’est produit pour les groupes concernés",
      );
    },
  );

  it.each([
    ["slash preserved", "AB-CD", "AB/CD"],
    ["backslash preserved", "AB-CD", "AB\\CD"],
    ["numeric slash preserved", "A-1", "A/1"],
    ["ampersand and plus preserved", "A&B", "A+B"],
    ["word boundary", "Groupe AB", "Groupe A B"],
    ["different names", "Groupe A", "Groupe B"],
    ["coherent Greek names", "Όμιλος Άτλας", "Όμιλος Ίρις"],
    ["coherent Cyrillic names", "Группа Атлас", "Группа Ирис"],
  ])("keeps clearly distinct keys separate: %s", (_label, first, second) => {
    const input = completeInput();
    input.aidRegister = [
      externalReviewRegisterEntry(150_001, {
        singleUndertakingScope: first,
      }),
      unknownLegalBasisRegisterEntry(150_000, {
        singleUndertakingScope: second,
      }),
    ];

    const result = calculateSiteAidDecision(input);

    expect(result.warnings.join(" ")).not.toContain(alertPrefix);
    expect(result.missingEvidence.join(" ")).not.toContain(distinctionPrefix);
  });

  it("never treats close keys in different Member States as ambiguous", () => {
    const input = completeInput();
    input.aidRegister = [
      externalReviewRegisterEntry(150_001, {
        memberState: "France",
        singleUndertakingScope: "Groupe-A",
      }),
      unknownLegalBasisRegisterEntry(150_000, {
        memberState: "Belgique",
        singleUndertakingScope: "Groupe A",
      }),
    ];

    const result = calculateSiteAidDecision(input);

    expect(result.missingEvidence.join(" ")).not.toContain(distinctionPrefix);
    expect(result.warnings.join(" ")).not.toContain(alertPrefix);
  });

  it.each(["---", "///", "\\\\\\", "···"])(
    "rejects a punctuation-only register identity and excludes it from totals: %s",
    (scope) => {
      const input = completeInput();
      input.aidRegister = [
        externalReviewRegisterEntry(300_001, {
          singleUndertakingScope: scope,
        }),
      ];

      const result = calculateSiteAidDecision(input);

      expect(result.warnings.join(" ")).not.toContain(alertPrefix);
      expect(result.missingEvidence.join(" ")).toContain(
        "la clé déclarée doit contenir au moins une lettre ou un chiffre",
      );
      expect(result.warnings.join(" ")).toContain(
        "précontrôle prudent du cumul non calculable",
      );
    },
  );

  it.each([
    ["Groupe\u200BA", "U+200B"],
    ["Groupe\u{E0100} A", "U+E0100"],
    ["Groupe\u{E0061} A", "U+E0061"],
  ])(
    "rejects every invisible or default-ignorable code point explicitly: %s",
    (scope, codePoint) => {
      const input = completeInput();
      input.aidRegister = [
        externalReviewRegisterEntry(150_001, {
          singleUndertakingScope: scope,
        }),
        unknownLegalBasisRegisterEntry(150_000, {
          singleUndertakingScope: "Groupe A",
        }),
      ];

      const result = calculateSiteAidDecision(input);

      expect(result.missingEvidence.join(" ")).toContain(
        "caractère Unicode invisible ou de formatage interdit",
      );
      expect(result.missingEvidence.join(" ")).toContain(codePoint);
      expect(result.missingEvidence.join(" ")).not.toContain(distinctionPrefix);
      expect(result.warnings.join(" ")).not.toContain(alertPrefix);
    },
  );

  it("rejects a punctuation-only current identity and never combines it with the register", () => {
    const input = completeInput({
      stage: "notified",
      legalBasisStatus: "not-de-minimis",
      legalAidValueAmount: 150_001,
    });
    input.aid.deMinimisRegime = "";
    input.aid.nonDeMinimisLegalBasis = "Règlement (UE) 651/2014, article 14";
    input.aid.nonDeMinimisEvidenceReference =
      "Notification officielle N-2026-001";
    input.aid.deMinimisSingleUndertakingScope = "---";
    input.aidRegister = [unknownLegalBasisRegisterEntry(150_000)];

    const result = calculateSiteAidDecision(input);

    expect(result.warnings.join(" ")).not.toContain(alertPrefix);
    expect(result.missingEvidence.join(" ")).toContain(
      "Aide courante, précontrôle prudent du cumul, périmètre de l’entreprise unique : la clé déclarée doit contenir au moins une lettre ou un chiffre",
    );
  });

  it("rejects a supplementary-plane invisible character in the current identity", () => {
    const input = completeInput({
      stage: "notified",
      legalBasisStatus: "not-de-minimis",
      legalAidValueAmount: 150_001,
    });
    input.aid.deMinimisRegime = "";
    input.aid.nonDeMinimisLegalBasis = "Règlement (UE) 651/2014, article 14";
    input.aid.nonDeMinimisEvidenceReference =
      "Notification officielle N-2026-001";
    input.aid.deMinimisSingleUndertakingScope = "Groupe\u{E0100} A";
    input.aidRegister = [unknownLegalBasisRegisterEntry(150_000)];

    const result = calculateSiteAidDecision(input);

    expect(result.missingEvidence.join(" ")).toContain(
      "Aide courante, précontrôle prudent du cumul, périmètre de l’entreprise unique : la clé déclarée contient un caractère Unicode invisible ou de formatage interdit (U+E0100)",
    );
    expect(result.missingEvidence.join(" ")).not.toContain(distinctionPrefix);
  });

  it("evaluates proximity only inside the target group's own three-year window", () => {
    const input = completeInput();
    input.aidRegister = [
      externalReviewRegisterEntry(150_000, {
        singleUndertakingScope: "Groupe A&B",
        legalGrantDate: "2020-01-01",
      }),
      unknownLegalBasisRegisterEntry(300_001, {
        singleUndertakingScope: "Groupe A & B",
        legalGrantDate: "2026-01-01",
      }),
    ];

    const result = calculateSiteAidDecision(input);
    const alerts = result.warnings.filter((warning) =>
      warning.startsWith(alertPrefix),
    );

    expect(result.missingEvidence.join(" ")).not.toContain(distinctionPrefix);
    expect(result.warnings.join(" ")).not.toContain(
      "entreprise unique ambiguë",
    );
    expect(alerts).toHaveLength(1);
    expect(alerts[0]).toContain("300 001 €");
    expect(alerts[0]).toContain("« Groupe A & B »");
  });

  it("asks a targeted decision for every register observation in one close-key cluster", () => {
    const input = completeInput();
    input.aidRegister = [
      externalReviewRegisterEntry(300_001, {
        singleUndertakingScope: "Groupe-A",
      }),
      unknownLegalBasisRegisterEntry(300_001, {
        singleUndertakingScope: "Groupe A",
      }),
    ];

    const result = calculateSiteAidDecision(input);

    expect(result.missingEvidence).toContain(
      "Registre, aide 1, distinction des clés proches : statut à confirmer — indiquer si les clés proches désignent des entreprises uniques explicitement distinctes.",
    );
    expect(result.missingEvidence).toContain(
      "Registre, aide 2, distinction des clés proches : statut à confirmer — indiquer si les clés proches désignent des entreprises uniques explicitement distinctes.",
    );
    expect(
      result.warnings.filter((warning) => warning.startsWith(alertPrefix)),
    ).toHaveLength(0);
  });

  it("routes a NON distinction to exact-key correction and a YES without evidence to proof", () => {
    const input = completeInput();
    input.aidRegister = [
      externalReviewRegisterEntry(300_001, {
        singleUndertakingScope: "Groupe A&B",
        similarUndertakingKeysDistinct: "no",
      }),
      unknownLegalBasisRegisterEntry(300_001, {
        singleUndertakingScope: "Groupe A & B",
        similarUndertakingKeysDistinct: "yes",
      }),
    ];

    const result = calculateSiteAidDecision(input);

    expect(result.missingEvidence).toContain(
      "Registre, aide 1, distinction des clés proches : statut « NON » — recopier exactement la même clé si les observations désignent la même entreprise unique.",
    );
    expect(result.missingEvidence).toContain(
      "Registre, aide 2, distinction des clés proches : preuve manquante — décrire la preuve vérifiée permettant de confirmer que les clés proches désignent des entreprises uniques distinctes.",
    );
    expect(result.warnings.join(" ")).toContain("entreprise unique ambiguë");
  });

  it("keeps documented close keys separate, computes each total and states that evidence is unauthenticated", () => {
    const input = completeInput();
    input.aidRegister = [
      externalReviewRegisterEntry(300_001, {
        singleUndertakingScope: "S.A.S. Élan",
        similarUndertakingKeysDistinct: "yes",
        similarUndertakingKeysEvidence: "Kbis 2026 de la société Élan",
      }),
      unknownLegalBasisRegisterEntry(300_001, {
        singleUndertakingScope: "SAS Elan",
        similarUndertakingKeysDistinct: "yes",
        similarUndertakingKeysEvidence: "Kbis 2026 de la société Elan",
      }),
    ];

    const result = calculateSiteAidDecision(input);
    const alerts = result.warnings.filter((warning) =>
      warning.startsWith(alertPrefix),
    );

    expect(result.missingEvidence.join(" ")).not.toContain(distinctionPrefix);
    expect(alerts).toHaveLength(2);
    expect(result.warnings.join(" ")).toContain(
      "clés proches déclarées distinctes",
    );
    expect(result.warnings.join(" ")).toContain(
      "preuves saisies ne sont pas authentifiées par l’outil",
    );
  });

  it("requires a documented YES from every observation, including duplicate exact keys", () => {
    const input = completeInput();
    input.aidRegister = [
      externalReviewRegisterEntry(150_001, {
        singleUndertakingScope: "Groupe-A",
        similarUndertakingKeysDistinct: "yes",
        similarUndertakingKeysEvidence: "Extrait A1",
      }),
      unknownLegalBasisRegisterEntry(150_000, {
        singleUndertakingScope: "Groupe-A",
        similarUndertakingKeysDistinct: "yes",
        similarUndertakingKeysEvidence: "",
      }),
      unknownLegalBasisRegisterEntry(300_001, {
        singleUndertakingScope: "Groupe A",
        similarUndertakingKeysDistinct: "yes",
        similarUndertakingKeysEvidence: "Extrait B",
      }),
    ];

    const result = calculateSiteAidDecision(input);

    expect(result.missingEvidence).toContain(
      "Registre, aide 2, distinction des clés proches : preuve manquante — décrire la preuve vérifiée permettant de confirmer que les clés proches désignent des entreprises uniques distinctes.",
    );
    expect(
      result.warnings.filter((warning) => warning.startsWith(alertPrefix)),
    ).toHaveLength(0);
  });

  it("targets both the current aid and its close register counterpart", () => {
    const input = completeInput({
      stage: "notified",
      legalBasisStatus: "not-de-minimis",
      legalAidValueAmount: 300_001,
    });
    input.aid.deMinimisRegime = "";
    input.aid.nonDeMinimisLegalBasis = "Règlement (UE) 651/2014, article 14";
    input.aid.nonDeMinimisEvidenceReference =
      "Notification officielle N-2026-001";
    input.aid.deMinimisSingleUndertakingScope = "Groupe-A";
    input.aidRegister = [
      unknownLegalBasisRegisterEntry(300_001, {
        singleUndertakingScope: "Groupe A",
      }),
    ];

    const unresolved = calculateSiteAidDecision(input);

    expect(unresolved.missingEvidence.join(" ")).toContain(
      "Aide courante, distinction des clés proches : statut à confirmer",
    );
    expect(unresolved.missingEvidence.join(" ")).toContain(
      "Registre, aide 1, distinction des clés proches : statut à confirmer",
    );

    input.aid.similarUndertakingKeysDistinct = "yes";
    input.aid.similarUndertakingKeysEvidence =
      "Organigramme capitalistique signé";
    input.aidRegister[0].similarUndertakingKeysDistinct = "yes";
    input.aidRegister[0].similarUndertakingKeysEvidence =
      "Extrait de registre vérifié";
    const documented = calculateSiteAidDecision(input);

    expect(documented.missingEvidence.join(" ")).not.toContain(
      distinctionPrefix,
    );
    expect(
      documented.warnings.filter((warning) => warning.startsWith(alertPrefix)),
    ).toHaveLength(2);
  });

  it("isolates multiple close-key clusters and targets every involved row", () => {
    const input = completeInput();
    input.aidRegister = [
      externalReviewRegisterEntry(1, {
        singleUndertakingScope: "Groupe-A",
      }),
      unknownLegalBasisRegisterEntry(1, {
        singleUndertakingScope: "Groupe A",
      }),
      externalReviewRegisterEntry(1, {
        singleUndertakingScope: "Groupe-B",
      }),
      unknownLegalBasisRegisterEntry(1, {
        singleUndertakingScope: "Groupe B",
      }),
    ];

    const result = calculateSiteAidDecision(input);
    const distinctionIssues = result.missingEvidence.filter((issue) =>
      issue.includes(distinctionPrefix),
    );
    const blockedClusters = result.warnings.filter((warning) =>
      warning.startsWith("Précontrôle prudent du cumul bloqué"),
    );

    expect(distinctionIssues).toHaveLength(4);
    expect(blockedClusters).toHaveLength(2);
  });

  it("never asks for close-key confirmation when no relevant cluster exists", () => {
    const input = completeInput();
    input.aidRegister = [
      externalReviewRegisterEntry(300_001, {
        singleUndertakingScope: "Groupe A",
      }),
    ];

    expect(
      calculateSiteAidDecision(input).missingEvidence.join(" "),
    ).not.toContain(distinctionPrefix);
  });

  it("exports current and register distinction declarations and evidence in the TXT audit trail", () => {
    const input = completeInput();
    input.aid.similarUndertakingKeysDistinct = "yes";
    input.aid.similarUndertakingKeysEvidence =
      "Organigramme courant vérifié le 26/07/2026";
    input.aidRegister = [
      registerEntry({
        similarUndertakingKeysDistinct: "yes",
        similarUndertakingKeysEvidence: "Extrait de registre antérieur vérifié",
      }),
    ];

    const report = buildSiteAidDecisionReport(input);

    expect(report).toContain(
      "Clés proches déclarées comme entreprises uniques distinctes — déclaration non authentifiée par le moteur : OUI",
    );
    expect(report).toContain(
      "Preuve de distinction des clés proches déclarée — non authentifiée par le moteur : Organigramme courant vérifié le 26/07/2026",
    );
    expect(report).toContain(
      "clés proches déclarées distinctes — déclaration non authentifiée OUI",
    );
    expect(report).toContain(
      "preuve de distinction déclarée — non authentifiée Extrait de registre antérieur vérifié",
    );
  });

  it("exports a typographic close-key confirmation requirement in the TXT audit trail", () => {
    const input = completeInput();
    input.aidRegister = [
      externalReviewRegisterEntry(150_001, {
        singleUndertakingScope: "Groupe A&B",
      }),
      unknownLegalBasisRegisterEntry(150_000, {
        singleUndertakingScope: "Groupe A & B",
      }),
    ];

    const report = buildSiteAidDecisionReport(input);

    expect(report).toContain(
      "Registre, aide 1, distinction des clés proches : statut à confirmer",
    );
    expect(report).toContain(
      "Registre, aide 2, distinction des clés proches : statut à confirmer",
    );
    expect(report).toContain(
      "ces clés proches mais non identiques ne sont pas fusionnées",
    );
    expect(report).not.toContain(
      "Cumul prudent non ventilé entièrement non résolu : 300 001 €",
    );
  });

  it("exports unknown distinction status and absent evidence as ND", () => {
    const input = completeInput();
    input.aidRegister = [registerEntry()];

    const report = buildSiteAidDecisionReport(input);

    expect(report).toContain(
      "Clés proches déclarées comme entreprises uniques distinctes — déclaration non authentifiée par le moteur : À CONFIRMER",
    );
    expect(report).toContain(
      "Preuve de distinction des clés proches déclarée — non authentifiée par le moteur : ND",
    );
    expect(report).toContain(
      "clés proches déclarées distinctes — déclaration non authentifiée À CONFIRMER",
    );
    expect(report).toContain(
      "preuve de distinction déclarée — non authentifiée ND",
    );
  });
});

describe("site aid decision — R11 outputs require a valid legal grant", () => {
  it.each([
    ["reimbursement", 0],
    ["advance", 50],
    ["direct", 100],
  ] as const)(
    "keeps every realized output ND in %s mode without a valid legal grant",
    (paymentMode, documentedPrepaymentPercent) => {
      const legalGrantCases: Array<{
        status: SiteAidTriState;
        date: string;
      }> = [
        { status: "unknown", date: "" },
        { status: "no", date: "" },
        { status: "yes", date: "" },
        { status: "yes", date: "2026-02-30" },
      ];

      for (const legalGrant of legalGrantCases) {
        const input = completeInput({
          stage: "received",
          paymentMode,
          documentedPrepaymentPercent,
        });
        input.aid.legalGrantStatus = legalGrant.status;
        input.aid.legalGrantDate = legalGrant.date;

        const result = calculateSiteAidDecision(input);
        const report = buildSiteAidDecisionReport(input);
        expect(result).toMatchObject({
          legalAidValueUnderConditions: undefined,
          approvedFinancialContributionUnderConditions: undefined,
          notifiedAidUnderConditions: undefined,
          actualFinancialContribution: undefined,
          financialContributionDifference: undefined,
          receivedAid: undefined,
          aidReceiptDifference: undefined,
          conditionalCostAfterNotification: undefined,
          realizedCostAfterReceipt: undefined,
          documentedPrepaymentAmount: undefined,
          waitComparisonAid: undefined,
          waitDominatesComparisonAid: undefined,
          directPaymentArithmeticCoversInvoiceInFull: undefined,
          directPaymentCoversInvoiceInFull: undefined,
          directCompanySupplierRemainder: undefined,
        });
        expect(result.code).not.toBe("received");
        if (legalGrant.status === "no") {
          expect(result.code).toBe("invalid");
          expect(result.invalidIssues.join(" ")).toContain(
            "l’état notifié ou versé est incompatible avec un octroi déclaré « NON »",
          );
        } else if (legalGrant.status === "unknown") {
          expect(result.code).toBe("incomplete");
          expect(result.missingEvidence.join(" ")).toContain(
            "confirmer si le droit à l’aide est déjà conféré",
          );
        } else if (legalGrant.date === "") {
          expect(result.code).toBe("incomplete");
        } else {
          expect(result.code).toBe("invalid");
        }
        expect(result.directPaymentCoverageStatus).not.toBe("full-documented");
        expect(result.directPaymentCoverageStatus).not.toBe("full-provisional");
        expect(report).toContain(
          "Contribution déclarée — non validée par le moteur : ND",
        );
        expect(report).toContain(
          "Écart entre paiement et contribution approuvée non calculable : ND",
        );
        expect(report).toContain(
          "Coût réalisé non calculable — avant traitement fiscal et comptable : ND",
        );
        expect(report).toContain(
          "Part prépayée conditionnelle ou réalisée non calculable : ND",
        );
        expect(report).toContain(
          "Valeur juridique déclarée par l’utilisateur — non validée par le moteur : 2 100 €",
        );
        expect(report).toContain(
          "Contribution financière déclarée par l’utilisateur — non validée par le moteur : 2 100 €",
        );
        expect(report).not.toContain(" — réalisé");
        expect(report).not.toContain(
          "Verdict : AIDE VERSÉE OU PAYÉE DIRECTEMENT AU FOURNISSEUR — COÛT RÉALISÉ",
        );
      }
    },
  );

  it.each([
    ["reimbursement", 0, 0],
    ["advance", 50, 1_050],
    ["direct", 100, 2_100],
  ] as const)(
    "suspends every notified output for no or unknown grant and resolves it only for yes in %s mode",
    (paymentMode, documentedPrepaymentPercent, expectedPrepayment) => {
      for (const legalGrant of [
        { status: "no" as const, date: "", expectedCode: "invalid" as const },
        {
          status: "unknown" as const,
          date: "",
          expectedCode: "incomplete" as const,
        },
        {
          status: "yes" as const,
          date: "2026-07-26",
          expectedCode: "notified-usable" as const,
        },
      ]) {
        const input = completeInput({
          stage: "notified",
          paymentMode,
          documentedPrepaymentPercent,
        });
        input.aid.legalGrantStatus = legalGrant.status;
        input.aid.legalGrantDate = legalGrant.date;

        const result = calculateSiteAidDecision(input);
        const report = buildSiteAidDecisionReport(input);

        expect(result.code).toBe(legalGrant.expectedCode);
        if (legalGrant.status !== "yes") {
          expect(result).toMatchObject({
            legalAidValueUnderConditions: undefined,
            approvedFinancialContributionUnderConditions: undefined,
            notifiedAidUnderConditions: undefined,
            conditionalCostAfterNotification: undefined,
            documentedPrepaymentAmount: undefined,
            waitComparisonAid: undefined,
            waitDominatesComparisonAid: undefined,
            directPaymentArithmeticCoversInvoiceInFull: undefined,
            directPaymentCoversInvoiceInFull: undefined,
            directCompanySupplierRemainder: undefined,
          });
          expect(report).toContain(
            "Valeur juridique conditionnelle non calculable : ND",
          );
          expect(report).toContain(
            "Contribution déclarée — non validée par le moteur : ND",
          );
          expect(report).toContain(
            "Coût conditionnel non calculable — avant traitement fiscal et comptable : ND",
          );
          expect(report).toContain(
            "Part prépayée conditionnelle ou réalisée non calculable : ND",
          );
          expect(report).toContain(
            "Comparaison de l’aide au coût d’attente non calculable : ND",
          );
        } else {
          expect(result).toMatchObject({
            legalAidValueUnderConditions: 2_100,
            approvedFinancialContributionUnderConditions: 2_100,
            notifiedAidUnderConditions: 2_100,
            conditionalCostAfterNotification: 7_900,
            documentedPrepaymentAmount: expectedPrepayment,
            waitComparisonAid: 2_100,
            waitDominatesComparisonAid: false,
          });
          expect(report).toContain(
            "Contribution financière approuvée pour la facture : 2 100 € — sous conditions",
          );
          expect(report).toContain(
            "Coût conditionnel après notification — avant traitement fiscal et comptable : 7 900 €",
          );
        }
      }
    },
  );

  it.each([
    ["reimbursement", 0, 0],
    ["advance", 50, 1_050],
    ["direct", 100, 2_100],
  ] as const)(
    "keeps realized outputs available with a yes grant and valid date in %s mode",
    (paymentMode, documentedPrepaymentPercent, expectedPrepayment) => {
      const input = completeInput({
        stage: "received",
        paymentMode,
        documentedPrepaymentPercent,
      });

      const result = calculateSiteAidDecision(input);

      expect(result).toMatchObject({
        code: "received",
        legalAidValueUnderConditions: 2_100,
        approvedFinancialContributionUnderConditions: 2_100,
        actualFinancialContribution: 2_100,
        financialContributionDifference: 0,
        receivedAid: 2_100,
        aidReceiptDifference: 0,
        realizedCostAfterReceipt: 7_900,
        documentedPrepaymentAmount: expectedPrepayment,
      });
      if (paymentMode === "direct") {
        expect(result.directPaymentCoverageStatus).toBe("partial");
        expect(result.directPaymentCoversInvoiceInFull).toBe(false);
      }
    },
  );
});

describe("site aid decision — R11 declared versus validated TXT data", () => {
  it("keeps invalid chronology traceable only as user-declared, non-validated data", () => {
    const input = completeInput({ stage: "received" });
    input.profile.verificationDate = "2026-07-30";
    input.aid.finalInvoiceDate = "2026-07-24";
    input.aid.receiptDate = "2026-07-25";
    input.aid.legalGrantDate = "2026-07-26";

    const report = buildSiteAidDecisionReport(input);

    expect(report).toContain(
      "AIDE ET VERSEMENT — DÉCLARATIONS DE L’UTILISATEUR NON VALIDÉES PAR LE MOTEUR",
    );
    expect(report).toContain(
      "État financier déclaré par l’utilisateur — non validé par le moteur : Aide versée ou payée directement au fournisseur",
    );
    expect(report).toContain(
      "Montant d’encaissement déclaré par l’utilisateur — non validé par le moteur : 2 100 €",
    );
    expect(report).toContain(
      "Date d’encaissement par l’entreprise déclarée par l’utilisateur — non validée par le moteur : 2026-07-25",
    );
    expect(report).toContain(
      "Référence d’encaissement par l’entreprise déclarée par l’utilisateur — non validée par le moteur : Virement V-2026-001",
    );
    expect(report).toContain(
      "Contribution déclarée — non validée par le moteur : ND",
    );
    expect(report).toContain(
      "Coût réalisé non calculable — avant traitement fiscal et comptable : ND",
    );
    expect(report).not.toContain(
      "État financier : Aide versée ou payée directement au fournisseur",
    );
    expect(report).not.toContain("Montant encaissé par l’entreprise : 2 100 €");
    expect(report).not.toContain(
      "Date d’encaissement par l’entreprise : 2026-07-25",
    );
    expect(report).not.toContain(
      "Référence d’encaissement par l’entreprise : Virement V-2026-001",
    );
    expect(report).not.toContain(" — réalisé");
    expect(report).not.toContain(
      "Verdict : AIDE VERSÉE OU PAYÉE DIRECTEMENT AU FOURNISSEUR — COÛT RÉALISÉ",
    );
  });

  it("keeps a valid declaration traceable while exposing the realized value only in calculations", () => {
    const input = completeInput({ stage: "received" });

    const report = buildSiteAidDecisionReport(input);

    expect(report).toContain(
      "Montant d’encaissement déclaré par l’utilisateur — non validé par le moteur : 2 100 €",
    );
    expect(report).toContain(
      "Montant encaissé par l’entreprise : 2 100 € — réalisé",
    );
    expect(report).toContain(
      "Verdict : AIDE VERSÉE OU PAYÉE DIRECTEMENT AU FOURNISSEUR — COÛT RÉALISÉ",
    );
  });

  it("labels register aggregates as declarations while retaining each resolved row status", () => {
    const input = completeInput();
    input.aidRegister = [
      registerEntry({
        amount: 12_345,
        sameBaseOrInvoice: "yes",
      }),
    ];

    const report = buildSiteAidDecisionReport(input);

    expect(report).toContain(
      "REGISTRE DES AIDES — DÉCLARATIONS DE L’UTILISATEUR NON VALIDÉES PAR LE MOTEUR",
    );
    expect(report).toContain(
      "statut déclaré De minimis | statut résolu De minimis général — règlement 2023/2831 reconnu",
    );
    expect(report).toContain(
      "Aides antérieures déclarées — non validées par le moteur : 12 345 €",
    );
    expect(report).toContain(
      "Aides déclarées sur la même assiette ou facture — non validées par le moteur : 12 345 €",
    );
    expect(report).not.toContain("Aides antérieures enregistrées :");
    expect(report).not.toContain("Aides sur la même assiette ou facture :");
  });
});

describe("site aid decision — R25 exact de minimis ceiling outcomes", () => {
  it.each(["notified", "received"] as const)(
    "allows the exact individual ceiling and excludes one cent above it at the %s stage",
    (stage) => {
      const currentAidAmount = 2_100;
      const cases = [
        {
          label: "general",
          regime: "Règlement UE 2023/2831",
          ceiling: 300_000,
          scope: "Groupe plafond général",
        },
        {
          label: "SIEG",
          regime: "Règlement UE 2023/2832",
          ceiling: 750_000,
          scope: "Groupe plafond SIEG",
        },
        {
          label: "agriculture",
          regime: "Règlement UE 1408/2013",
          ceiling: 50_000,
          scope: "Exploitation plafond agricole",
        },
        {
          label: "fishery France",
          regime: "Règlement UE 717/2014",
          ceiling: 40_000,
          scope: "Armement plafond pêche",
        },
      ] as const;

      for (const ceilingCase of cases) {
        const input = completeInput({
          stage,
          legalAidValueAmount: currentAidAmount,
        });
        input.aid.deMinimisRegime = ceilingCase.regime;
        input.aid.deMinimisSingleUndertakingScope = ceilingCase.scope;
        if (ceilingCase.label === "fishery France") {
          setFisheryFiscalYearStarts(
            input,
            "2026-01-01",
            "2025-01-01",
            "2024-01-01",
            "2026-12-31",
          );
        }

        if (ceilingCase.label === "SIEG") {
          documentCurrentSgei(input);
          input.aid.deMinimisSingleUndertakingScope = ceilingCase.scope;
          const registerServiceIdentity =
            "Accueil numérique itinérant des îles bretonnes";
          input.aidRegister = [
            sgeiRegisterEntry({
              singleUndertakingScope: ceilingCase.scope,
              sgeiServiceIdentity: registerServiceIdentity,
              sgeiRelationToCurrentService: "no",
              sgeiRelationToCurrentServiceEvidence:
                documentedSgeiDistinctionEvidence(
                  input.aid.sgeiServiceIdentity,
                  registerServiceIdentity,
                  "ATT-CEILING-SGEI-2026-0042",
                ),
              amount: ceilingCase.ceiling - currentAidAmount,
            }),
          ];
        } else {
          input.aidRegister = [
            registerEntry({
              regime: ceilingCase.regime,
              singleUndertakingScope: ceilingCase.scope,
              amount: ceilingCase.ceiling - currentAidAmount,
            }),
          ];
        }

        const exactBoundary = calculateSiteAidDecision(input);

        expect(exactBoundary.code, ceilingCase.label).toBe(
          stage === "received" ? "received" : "notified-usable",
        );
        expect(exactBoundary.exclusionReasons, ceilingCase.label).toEqual([]);

        input.aidRegister[0].amount =
          ceilingCase.ceiling - currentAidAmount + 0.01;
        const justAbove = calculateSiteAidDecision(input);

        expect(justAbove.code, ceilingCase.label).toBe("excluded");
        expect(justAbove.code, ceilingCase.label).not.toBe("notified-usable");
        expect(justAbove.code, ceilingCase.label).not.toBe("received");
        expect(
          justAbove.exclusionReasons.join(" "),
          ceilingCase.label,
        ).toContain(
          "Dépassement calculé d’un plafond de minimis impliquant l’aide courante",
        );
        expect(
          justAbove.exclusionReasons.join(" "),
          ceilingCase.label,
        ).toContain(
          "Le moteur n’invente ni ne substitue aucune autre base juridique",
        );
      }
    },
  );

  it("excludes an exact cross-regime excess involving the current aid, but not the exact 300k boundary", () => {
    const input = completeInput({
      stage: "notified",
      legalAidValueAmount: 251_000,
    });
    input.aid.deMinimisRegime = "Règlement UE 2023/2831";
    input.aid.deMinimisSingleUndertakingScope = "Groupe inter-régimes";
    input.aidRegister = [
      registerEntry({
        regime: "Règlement UE 1408/2013",
        singleUndertakingScope: "Groupe inter-régimes",
        amount: 49_000,
      }),
    ];

    const exactBoundary = calculateSiteAidDecision(input);
    expect(exactBoundary.code).toBe("notified-usable");
    expect(exactBoundary.warnings.join(" ")).not.toContain(
      "Cumul potentiel de minimis inter-régimes supérieur à 300 000 €",
    );

    input.aidRegister[0].amount = 49_000.01;
    const justAbove = calculateSiteAidDecision(input);

    expect(justAbove.code).toBe("excluded");
    expect(justAbove.exclusionReasons.join(" ")).toContain(
      "cumul inter-régimes général, agricole et pêche/aquaculture",
    );
  });

  it("excludes an exact agriculture-fishery combined excess involving the current aid, but not the exact 50k boundary", () => {
    const input = completeInput({
      stage: "notified",
      legalAidValueAmount: 30_000,
    });
    input.aid.deMinimisRegime = "Règlement UE 1408/2013";
    input.aid.deMinimisSingleUndertakingScope = "Groupe sectoriel";
    setFisheryFiscalYearStarts(
      input,
      "2026-01-01",
      "2025-01-01",
      "2024-01-01",
      "2026-12-31",
    );
    input.aidRegister = [
      registerEntry({
        regime: "Règlement UE 717/2014",
        singleUndertakingScope: "Groupe sectoriel",
        amount: 20_000,
      }),
    ];

    const exactBoundary = calculateSiteAidDecision(input);
    expect(exactBoundary.code).toBe("notified-usable");
    expect(exactBoundary.warnings.join(" ")).not.toContain(
      "Cumul potentiel agricole et pêche/aquaculture supérieur",
    );

    input.aidRegister[0].amount = 20_000.01;
    const justAbove = calculateSiteAidDecision(input);

    expect(justAbove.code).toBe("excluded");
    expect(justAbove.exclusionReasons.join(" ")).toContain(
      "cumul sectoriel agricole et pêche/aquaculture",
    );
  });

  it("suspends a foreign fishery current aid between the default and high branches, then excludes above both", () => {
    const input = completeInput({
      stage: "notified",
      legalAidValueAmount: 2_100,
    });
    input.aid.deMinimisRegime = "Règlement UE 717/2014";
    input.aid.deMinimisMemberState = "Belgique";
    setFisheryFiscalYearStarts(
      input,
      "2026-01-01",
      "2025-01-01",
      "2024-01-01",
      "2026-12-31",
    );
    input.aid.deMinimisSingleUndertakingScope = "Armement belge";
    input.aid.centralRegisterStatus = "not-applicable";
    input.aid.centralRegisterReference = "";
    input.aidRegister = [
      registerEntry({
        regime: "Règlement UE 717/2014",
        memberState: "Belgique",
        singleUndertakingScope: "Armement belge",
        amount: 27_900,
      }),
    ];

    expect(calculateSiteAidDecision(input).code).toBe("notified-usable");

    input.aidRegister[0].amount = 27_900.01;
    const aboveDefault = calculateSiteAidDecision(input);
    expect(aboveDefault.code).toBe("incomplete");
    expect(aboveDefault.missingEvidence.join(" ")).toContain(
      "plus que la branche par défaut de 30 000 € sans dépasser 40 000 €",
    );

    input.aidRegister[0].amount = 37_900;
    expect(calculateSiteAidDecision(input).code).toBe("incomplete");

    input.aidRegister[0].amount = 37_900.01;
    const aboveBoth = calculateSiteAidDecision(input);
    expect(aboveBoth.code).toBe("excluded");
    expect(aboveBoth.exclusionReasons.join(" ")).toContain(
      "dépassement même sous la branche haute conditionnelle",
    );
  });

  it("does not turn the non-juridical 1.05m arithmetic marker into an exclusion", () => {
    const input = completeInput({
      stage: "notified",
      legalAidValueAmount: 750_000,
    });
    documentCurrentSgei(input);
    input.aid.deMinimisSingleUndertakingScope = "Groupe repère arithmétique";
    input.aidRegister = [
      registerEntry({
        regime: "Règlement UE 2023/2831",
        singleUndertakingScope: "Groupe repère arithmétique",
        amount: 300_000.01,
      }),
    ];

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("notified-usable");
    expect(result.warnings.join(" ")).toContain(
      "simple repère arithmétique, sans plafond juridique autonome ou universel",
    );
    expect(result.exclusionReasons).toEqual([]);
  });
});

describe("site aid decision — R25 SIEG inventory, structured evidence and French central register", () => {
  it.each([
    ["FR", true],
    ["France", true],
    ["français", true],
    ["française", true],
    ["French", true],
    ["République française", true],
    ["fra", false],
    ["Belgique", false],
    ["", false],
  ])(
    "applies the French central-register rule through the canonical member-state aliases: %s",
    (memberState, expected) => {
      expect(
        isSiteAidFrenchCentralRegisterRequired(
          "de-minimis-general",
          memberState,
          "2026-01-01",
        ),
      ).toBe(expected);
    },
  );

  it.each([
    ["general before start", "de-minimis-general", "2025-12-31", false],
    ["general on start", "de-minimis-general", "2026-01-01", true],
    ["SGEI on start", "de-minimis-sgei", "2026-01-01", true],
    ["fishery on start", "de-minimis-fishery", "2026-01-01", true],
    ["agriculture before start", "de-minimis-agriculture", "2026-12-31", false],
    ["agriculture on start", "de-minimis-agriculture", "2027-01-01", true],
    [
      "outside de minimis",
      "not-de-minimis-external-review",
      "2027-01-01",
      false,
    ],
    ["unresolved basis", "unknown", "2027-01-01", false],
    ["invalid calendar date", "de-minimis-general", "2026-02-30", false],
  ] as const)(
    "applies the French central-register regime and date boundary: %s",
    (_label, resolution, legalGrantDate, expected) => {
      expect(
        isSiteAidFrenchCentralRegisterRequired(
          resolution,
          "France",
          legalGrantDate,
        ),
      ).toBe(expected);
    },
  );

  it("blocks an exact current-to-register SIEG duplicate despite two negative self-declarations", () => {
    const input = completeInput({ stage: "notified" });
    documentCurrentSgei(input);
    input.aidRegister = [
      sgeiRegisterEntry({
        scheme: "Compensation SIEG antérieure",
        sgeiRelationToCurrentService: "yes",
        sgeiRelationToCurrentServiceEvidence:
          "Convention SIEG n° CONV-2023-0042 et attestation de l’autorité",
        amount: 25_000,
      }),
    ];

    const result = calculateSiteAidDecision(input);
    const report = buildSiteAidDecisionReport(input);

    expect(result.code).toBe("incomplete");
    expect(result.missingEvidence.join(" ")).toMatch(
      /Registre, aide 1, relation au service SIEG de l’aide courante[\s\S]*article 5, paragraphe 2[\s\S]*interdit le cumul[\s\S]*quelle que soit son ancienneté/i,
    );
    expect(result.warnings.join(" ")).toContain(
      "L’inventaire des compensations de l’article 5(2) reste distinct du calcul du plafond sur trois ans",
    );
    expect(result.toolLimitations.join(" ")).toContain(
      "Relation SIEG à l’aide courante R27",
    );
    expect(report).toContain("même service SIEG déclaré");
    expect(result.code).not.toBe("notified-usable");
  });

  it("blocks register-to-register duplicates independently of row order", () => {
    const makeInput = (reverse: boolean) => {
      const input = completeInput({ stage: "notified" });
      const rows = [
        sgeiRegisterEntry({
          authority: "Collectivité A",
          scheme: "SIEG A",
          amount: 10_000,
          legalGrantDate: "2025-02-01",
        }),
        sgeiRegisterEntry({
          authority: "Collectivité B",
          scheme: "SIEG B",
          amount: 12_000,
          legalGrantDate: "2026-02-01",
        }),
      ];
      input.aidRegister = reverse ? rows.reverse() : rows;
      return input;
    };

    for (const reverse of [false, true]) {
      const result = calculateSiteAidDecision(makeInput(reverse));

      expect(result.code).toBe("incomplete");
      expect(result.missingEvidence.join(" ")).toMatch(
        /Registre, aide 1 et Registre, aide 2[\s\S]*identité de service exactement identique/,
      );
      expect(result.warnings.join(" ")).toContain(
        "Rapprochement interligne SIEG historique suspendu",
      );
    }
  });

  it.each([
    [
      "case and accents",
      "Permanence numérique d’intérêt général du territoire Bretagne",
      "PERMANENCE NUMERIQUE D'INTERET GENERAL DU TERRITOIRE BRETAGNE",
    ],
    [
      "Unicode compatibility",
      "Permanence numérique – Bretagne",
      "Ｐｅｒｍａｎｅｎｃｅ numerique - Bretagne",
    ],
  ])(
    "rejects a declared distinction contradicted by close SIEG service identities: %s",
    (_label, currentService, registerService) => {
      const input = completeInput({ stage: "notified" });
      documentCurrentSgei(input);
      input.aid.sgeiServiceIdentity = currentService;
      input.aidRegister = [
        sgeiRegisterEntry({
          sgeiServiceIdentity: registerService,
          sgeiRelationToCurrentService: "no",
          sgeiRelationToCurrentServiceEvidence:
            documentedSgeiDistinctionEvidence(currentService, registerService),
          amount: 25_000,
        }),
      ];

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("invalid");
      expect(result.invalidIssues.join(" ")).toContain(
        "le statut « NON » contredit des identités de service textuellement proches",
      );
    },
  );

  it("allows a declared SIEG distinction only with identifiable evidence and without authenticating it", () => {
    const input = completeInput({ stage: "notified" });
    documentCurrentSgei(input);
    const registerServiceIdentity =
      "Transport scolaire adapté des élèves du Finistère";
    input.aidRegister = [
      sgeiRegisterEntry({
        sgeiServiceIdentity: registerServiceIdentity,
        sgeiRelationToCurrentService: "no",
        sgeiRelationToCurrentServiceEvidence: documentedSgeiDistinctionEvidence(
          input.aid.sgeiServiceIdentity,
          registerServiceIdentity,
          "ATT-DIST-2026-0029",
        ),
        amount: 25_000,
      }),
    ];

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("notified-usable");
    expect(result.missingEvidence.join(" ")).not.toContain(
      "relation au service SIEG de l’aide courante",
    );
    expect(result.toolLimitations.join(" ")).toContain(
      "Le moteur n’authentifie ni les services ni la preuve",
    );
  });

  it.each([
    ["generic service-public home page", "https://www.service-public.fr/"],
    [
      "generic official URL with a plausible path identifier",
      "https://www.economie.gouv.fr/aides/decision/ATT-DIST-2026-0029",
    ],
    [
      "missing authority",
      "Attestation n° ATT-DIST-2026-0029 du 26/07/2026 : le service « Permanence numérique d’intérêt général du territoire Bretagne » est distinct du service « Transport scolaire adapté des élèves du Finistère ».",
    ],
    [
      "missing structured reference",
      "Attestation de l’autorité d’octroi du 26/07/2026 : le service « Permanence numérique d’intérêt général du territoire Bretagne » est distinct du service « Transport scolaire adapté des élèves du Finistère ».",
    ],
    [
      "missing date",
      "Attestation de l’autorité d’octroi n° ATT-DIST-2026-0029 : le service « Permanence numérique d’intérêt général du territoire Bretagne » est distinct du service « Transport scolaire adapté des élèves du Finistère ».",
    ],
    [
      "invalid date",
      "Attestation de l’autorité d’octroi n° ATT-DIST-2026-0029 du 31/02/2026 : le service « Permanence numérique d’intérêt général du territoire Bretagne » est distinct du service « Transport scolaire adapté des élèves du Finistère ».",
    ],
    [
      "current service not identified",
      "Attestation de l’autorité d’octroi n° ATT-DIST-2026-0029 du 26/07/2026 : distinction avec le service « Transport scolaire adapté des élèves du Finistère ».",
    ],
    [
      "historical service not identified",
      "Attestation de l’autorité d’octroi n° ATT-DIST-2026-0029 du 26/07/2026 : distinction avec le service « Permanence numérique d’intérêt général du territoire Bretagne ».",
    ],
  ])(
    "rejects an incomplete or generic SIEG relation proof: %s",
    (_label, evidence) => {
      const input = completeInput({ stage: "notified" });
      documentCurrentSgei(input);
      input.aidRegister = [
        sgeiRegisterEntry({
          sgeiServiceIdentity:
            "Transport scolaire adapté des élèves du Finistère",
          sgeiRelationToCurrentService: "no",
          sgeiRelationToCurrentServiceEvidence: evidence,
        }),
      ];

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("incomplete");
      expect(result.code).not.toBe("notified-usable");
      expect(result.missingEvidence.join(" ")).toContain("le type de pièce");
      expect(result.missingEvidence.join(" ")).toContain(
        "l’identification explicite des deux services comparés",
      );
      expect(result.missingEvidence.join(" ")).toContain(
        "page d’accueil service-public.fr",
      );
    },
  );

  it.each([
    ["yes", "« OUI », même service déclaré"],
    ["unknown", "statut à confirmer"],
  ] as const)(
    "applies Article 5(2) between a French current SIEG aid and a Belgian row: %s",
    (relation, expectedIssue) => {
      const input = completeInput({ stage: "notified" });
      documentCurrentSgei(input);
      input.aid.deMinimisMemberState = "France";
      input.aidRegister = [
        sgeiRegisterEntry({
          memberState: "Belgique",
          sgeiRelationToCurrentService: relation,
          sgeiRelationToCurrentServiceEvidence:
            relation === "yes" ? "Convention SIEG n° BE-SIEG-2024-0042" : "",
        }),
      ];

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("incomplete");
      expect(result.code).not.toBe("notified-usable");
      expect(result.missingEvidence.join(" ")).toContain(expectedIssue);
      expect(result.toolLimitations.join(" ")).toContain(
        "sans filtre d’État membre",
      );
    },
  );

  it("reviews matching historical SIEG services across France and Belgium without merging their ceilings", () => {
    const input = completeInput({ stage: "notified" });
    input.aidRegister = [
      sgeiRegisterEntry({
        authority: "Autorité française",
        memberState: "France",
        amount: 400_000,
      }),
      sgeiRegisterEntry({
        authority: "Autorité belge",
        memberState: "Belgique",
        amount: 400_000,
      }),
    ];

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("incomplete");
    expect(result.missingEvidence.join(" ")).toMatch(
      /Registre, aide 1 et Registre, aide 2[\s\S]*entre les États membres d’octroi France \(FR\) et Belgique \(BE\)[\s\S]*identité de service exactement identique/,
    );
    expect(result.toolLimitations.join(" ")).toContain(
      "contrôle transfrontalier de l’article 5(2) reste distinct du calcul des plafonds par État membre",
    );
    expect(result.warnings.join(" ")).not.toContain(
      "Dépassement potentiel de minimis SIEG",
    );
  });

  it("does not create a false current-to-register SIEG match for another exact single undertaking", () => {
    const input = completeInput({ stage: "notified" });
    documentCurrentSgei(input);
    input.aidRegister = [
      sgeiRegisterEntry({
        singleUndertakingScope: "Groupe SIEG distinct",
      }),
    ];

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("notified-usable");
    expect(result.missingEvidence.join(" ")).not.toContain(
      "relation au service SIEG de l’aide courante",
    );
    expect(result.warnings.join(" ")).not.toContain(
      "même service SIEG déclaré",
    );
  });

  it.each([
    ["just before the ceiling window", "2023-07-25", false],
    ["at the ceiling window start", "2023-07-26", true],
    ["just after the ceiling window start", "2023-07-27", true],
    ["an ancient compensation", "2010-01-01", false],
  ] as const)(
    "keeps the Article 5(2) inventory independent from the three-year ceiling: %s",
    (_label, legalGrantDate, includedInCeiling) => {
      const input = completeInput({ stage: "notified" });
      documentCurrentSgei(input);
      input.aidRegister = [
        sgeiRegisterEntry({
          scheme: "Compensation du même service",
          legalGrantDate,
          amount: 800_000,
          sgeiRelationToCurrentService: "yes",
          sgeiRelationToCurrentServiceEvidence:
            "Convention SIEG n° CONV-HIST-2023-0042",
        }),
      ];

      const result = calculateSiteAidDecision(input);
      const warnings = result.warnings.join(" ");

      expect(result.code).toBe(includedInCeiling ? "excluded" : "incomplete");
      expect(result.code).not.toBe("notified-usable");
      expect(result.missingEvidence.join(" ")).toContain(
        "quelle que soit son ancienneté",
      );
      expect(warnings).toContain(
        "cette ligne bloque le précontrôle même hors de la fenêtre triennale",
      );
      expect(warnings.includes("Dépassement potentiel de minimis SIEG")).toBe(
        includedInCeiling,
      );
    },
  );

  it("never infers a favorable distinction from the adversarial SIEG paraphrase", () => {
    const input = completeInput({ stage: "notified" });
    documentCurrentSgei(input);
    input.aid.sgeiServiceIdentity =
      "Transport scolaire adapté des élèves handicapés du Finistère";
    input.aidRegister = [
      sgeiRegisterEntry({
        sgeiServiceIdentity:
          "Ramassage en car des enfants à mobilité réduite scolarisés dans le département 29",
        sgeiRelationToCurrentService: "unknown",
        sgeiRelationToCurrentServiceEvidence: "",
      }),
    ];

    const unknown = calculateSiteAidDecision(input);

    expect(unknown.code).toBe("incomplete");
    expect(unknown.missingEvidence.join(" ")).toContain(
      "Une identité différente, même très éloignée ou paraphrasée, ne prouve jamais que les services sont distincts",
    );

    input.aidRegister[0].sgeiRelationToCurrentService = "no";
    const undocumentedNo = calculateSiteAidDecision(input);

    expect(undocumentedNo.code).toBe("incomplete");
    expect(undocumentedNo.missingEvidence.join(" ")).toContain(
      "preuve de distinction avec le service SIEG de l’aide courante",
    );

    input.aidRegister[0].sgeiRelationToCurrentServiceEvidence =
      documentedSgeiDistinctionEvidence(
        input.aid.sgeiServiceIdentity,
        input.aidRegister[0].sgeiServiceIdentity,
        "ATT-DIST-2026-0029",
      );
    const documentedNo = calculateSiteAidDecision(input);

    expect(documentedNo.code).toBe("notified-usable");
    expect(documentedNo.toolLimitations.join(" ")).toContain(
      "une différence lexicale ne vaut jamais distinction",
    );
  });

  it("blocks a declared same service even when both labels are lexically different", () => {
    const input = completeInput({ stage: "notified" });
    documentCurrentSgei(input);
    input.aidRegister = [
      sgeiRegisterEntry({
        sgeiServiceIdentity: "Libellé historique complètement différent",
        legalGrantDate: "2012-04-03",
        sgeiRelationToCurrentService: "yes",
        sgeiRelationToCurrentServiceEvidence:
          "Décision de l’autorité n° DEC-SIEG-2012-0003",
      }),
    ];

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("incomplete");
    expect(result.missingEvidence.join(" ")).toContain(
      "« OUI », même service déclaré",
    );
  });

  it("rejects an incoherent relation tri-state and exports both structured fields", () => {
    const input = completeInput({ stage: "notified" });
    documentCurrentSgei(input);
    input.aidRegister = [
      sgeiRegisterEntry({
        sgeiRelationToCurrentService: "maybe" as SiteAidTriState,
        sgeiRelationToCurrentServiceEvidence:
          "Attestation de l’autorité d’octroi n° ATT-REL-2026-0042",
      }),
    ];

    const invalid = calculateSiteAidDecision(input);

    expect(invalid.code).toBe("invalid");
    expect(invalid.invalidIssues.join(" ")).toContain(
      "Registre, aide 1, relation au service SIEG de l’aide courante : statut incohérent",
    );

    input.aidRegister[0].sgeiRelationToCurrentService = "no";
    input.aidRegister[0].sgeiServiceIdentity = "Service distinct documenté";
    const report = buildSiteAidDecisionReport(input);

    expect(report).toContain(
      "relation déclarée au service SIEG de l’aide courante — non authentifiée NON",
    );
    expect(report).toContain(
      "preuve de cette relation déclarée — non authentifiée Attestation de l’autorité d’octroi n° ATT-REL-2026-0042",
    );
  });

  it.each([
    [
      "negative restructuring versus affirmative history",
      (input: SiteAidDecisionInput) => {
        input.profile.deMinimisCorporateEventEvidence =
          "FUSION ABSORBÉE le 2 février 2026, opération effective.";
      },
      "Cohérence de la restructuration",
    ],
    [
      "positive written mandate versus oral-only proof",
      (input: SiteAidDecisionInput) => {
        documentCurrentSgei(input);
        input.aid.sgeiEntrustmentEvidence =
          "Mandat ORAL\u00A0UNIQUEMENT, aucun acte électronique.";
      },
      "cohérence du mandat SIEG",
    ],
    [
      "negative compensation versus affirmative inventory",
      (input: SiteAidDecisionInput) => {
        documentCurrentSgei(input);
        input.aid.sgeiCompensationEvidence =
          "AUTRE COMPENSATION liée au MÊME SERVICE, convention C-2026-14.";
      },
      "cohérence des compensations du même SIEG",
    ],
  ] as const)(
    "blocks the literal contradiction: %s",
    (_label, mutate, expectedIssue) => {
      const input = completeInput({ stage: "notified" });
      mutate(input);

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("invalid");
      expect(result.invalidIssues.join(" ")).toContain(expectedIssue);
      expect(result.toolLimitations.join(" ")).toContain(
        "Cohérence des preuves R24",
      );
    },
  );

  it.each([
    [
      "positive restructuring versus explicit absence",
      (input: SiteAidDecisionInput) => {
        input.profile.deMinimisCorporateEventOccurred = "yes";
        input.profile.deMinimisCorporateEventKind = "merger-acquisition";
        input.profile.deMinimisCorporateAidHistoryAdjusted = "yes";
        input.profile.deMinimisCorporateEventEvidence =
          "AUCUNE fusion, aucune acquisition et aucune scission.";
      },
      "Cohérence de la restructuration",
    ],
    [
      "negative mandate versus written act",
      (input: SiteAidDecisionInput) => {
        documentCurrentSgei(input);
        input.aid.sgeiEntrustmentVerified = "no";
        input.aid.sgeiEntrustmentEvidence =
          "Acte écrit SIEG n° SIEG-2026-04 qui confie le service à l’entreprise.";
      },
      "cohérence du mandat SIEG",
    ],
    [
      "positive compensation versus explicit absence",
      (input: SiteAidDecisionInput) => {
        documentCurrentSgei(input);
        input.aid.sgeiSameServiceCompensationPresent = "yes";
        input.aid.sgeiCompensationEvidence =
          "Aucune autre compensation du même service.";
      },
      "cohérence des compensations du même SIEG",
    ],
  ] as const)(
    "also blocks the reverse literal contradiction: %s",
    (_label, mutate, expectedIssue) => {
      const input = completeInput({ stage: "notified" });
      mutate(input);

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("invalid");
      expect(result.invalidIssues.join(" ")).toContain(expectedIssue);
    },
  );

  it.each([
    [
      "negated corporate event",
      (input: SiteAidDecisionInput) => {
        input.profile.deMinimisCorporateEventEvidence =
          "La société n’a jamais été absorbée ; aucune fusion n’est intervenue.";
      },
    ],
    [
      "abandoned corporate project",
      (input: SiteAidDecisionInput) => {
        input.profile.deMinimisCorporateEventEvidence =
          "Projet de fusion abandonné et classé sans suite avant tout effet.";
      },
    ],
    [
      "oral mandate regularized in writing",
      (input: SiteAidDecisionInput) => {
        documentCurrentSgei(input);
        input.aid.sgeiEntrustmentEvidence =
          "Mandat oral initial remplacé par acte écrit SIEG n° 2026-04 qui confie le service à l’entreprise.";
      },
    ],
    [
      "ordinary references",
      (input: SiteAidDecisionInput) => {
        documentCurrentSgei(input);
        input.aid.sgeiEntrustmentEvidence =
          "Acte écrit SIEG n° SIEG-2026-04 du 02/01/2026 qui confie le service à l’entreprise";
        input.aid.sgeiCompensationEvidence =
          "Inventaire C-2026-17 : aucune autre compensation du même service";
      },
    ],
  ] as const)(
    "preserves a coherent negation or normal reference: %s",
    (_label, mutate) => {
      const input = completeInput({ stage: "notified" });
      mutate(input);

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("notified-usable");
      expect(result.invalidIssues.join(" ")).not.toContain("cohérence");
      expect(result.invalidIssues.join(" ")).not.toContain("Cohérence");
    },
  );

  it.each([
    [
      "an acquisition after an expressly absent merger",
      (input: SiteAidDecisionInput) => {
        input.profile.deMinimisCorporateEventOccurred = "yes";
        input.profile.deMinimisCorporateEventKind = "merger-acquisition";
        input.profile.deMinimisCorporateAidHistoryAdjusted = "yes";
        input.profile.deMinimisCorporateEventEvidence =
          "Aucune fusion, mais une acquisition réalisée le 03/02/2026 selon acte ACQ-2026-0042.";
      },
    ],
    [
      "a written entrustment after an oral preparation mandate",
      (input: SiteAidDecisionInput) => {
        documentCurrentSgei(input);
        input.aid.sgeiEntrustmentEvidence =
          "Le mandat oral concerne seulement la préparation ; un acte écrit SIEG n°42 confie le service.";
      },
    ],
  ] as const)(
    "gives priority to the relevant identifiable positive clause: %s",
    (_label, mutate) => {
      const input = completeInput({ stage: "notified" });
      mutate(input);

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("notified-usable");
      expect(result.invalidIssues.join(" ")).not.toContain("cohérence");
      expect(result.missingEvidence.join(" ")).not.toContain(
        "texte mixte ou ambigu",
      );
    },
  );

  it.each([
    "Deuxième compensation versée pour cette même mission de service public, convention C-2026-42.",
    "Seconde compensation octroyée au titre du même SIEG, décision D-2026-43.",
    "Compensation additionnelle payée pour le service concerné, acte A-2026-44.",
  ])(
    "closes the negative-compensation false negative for the synonym matrix: %s",
    (evidence) => {
      const input = completeInput({ stage: "notified" });
      documentCurrentSgei(input);
      input.aid.sgeiCompensationEvidence = evidence;

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("invalid");
      expect(result.invalidIssues.join(" ")).toContain(
        "cohérence des compensations du même SIEG",
      );
    },
  );

  it.each([
    "Aucune autre compensation du même service selon inventaire C-2026-45.",
    "Absence de deuxième compensation pour cette même mission selon attestation A-2026-46.",
    "Sans compensation additionnelle relative au même service, réponse R-2026-47.",
  ])(
    "preserves an actual negative compensation clause in the synonym matrix: %s",
    (evidence) => {
      const input = completeInput({ stage: "notified" });
      documentCurrentSgei(input);
      input.aid.sgeiCompensationEvidence = evidence;

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("notified-usable");
      expect(result.invalidIssues.join(" ")).not.toContain(
        "cohérence des compensations du même SIEG",
      );
    },
  );

  it.each([
    [
      "mixed restructuring",
      (input: SiteAidDecisionInput) => {
        input.profile.deMinimisCorporateEventEvidence =
          "Aucune fusion certaine ; acquisition envisagée sans acte final.";
      },
    ],
    [
      "mixed entrustment",
      (input: SiteAidDecisionInput) => {
        documentCurrentSgei(input);
        input.aid.sgeiEntrustmentEvidence =
          "Mandat oral uniquement ; projet d’acte écrit à confirmer.";
      },
    ],
    [
      "mixed compensation",
      (input: SiteAidDecisionInput) => {
        documentCurrentSgei(input);
        input.aid.sgeiCompensationEvidence =
          "Aucune autre compensation certaine ; deuxième compensation envisagée sans décision.";
      },
    ],
  ] as const)(
    "routes genuinely mixed free text to review instead of a favorable verdict: %s",
    (_label, mutate) => {
      const input = completeInput({ stage: "notified" });
      mutate(input);

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("incomplete");
      expect(result.code).not.toBe("notified-usable");
      expect(
        result.missingEvidence.join(" ").toLocaleLowerCase("fr-FR"),
      ).toMatch(/mixtes? ou ambigu/);
    },
  );

  it("never turns an ended historical compensation into an absence under Article 5(2)", () => {
    const input = completeInput({ stage: "notified" });
    documentCurrentSgei(input);
    input.aid.sgeiCompensationEvidence =
      "Autre compensation résiliée et clôturée avant l’octroi ; aucune compensation active.";

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("incomplete");
    expect(result.missingEvidence.join(" ")).toContain(
      "recenser toute compensation, même ancienne",
    );
    expect(result.toolLimitations.join(" ")).toContain(
      "sans limiter cet inventaire à la fenêtre de trois ans",
    );
  });

  it.each([
    [
      "arbitrary entrustment words",
      (input: SiteAidDecisionInput) => {
        input.aid.sgeiEntrustmentEvidence = "banane 123";
      },
      "preuve du mandat SIEG",
    ],
    [
      "ambiguous draft entrustment",
      (input: SiteAidDecisionInput) => {
        input.aid.sgeiEntrustmentEvidence =
          "Projet d’acte SIEG n° SIEG-2026-0099 à confirmer";
      },
      "preuve du mandat SIEG",
    ],
    [
      "arbitrary compensation words",
      (input: SiteAidDecisionInput) => {
        input.aid.sgeiCompensationEvidence = "banane 456";
      },
      "preuve sur les compensations du même SIEG",
    ],
    [
      "ambiguous provisional inventory",
      (input: SiteAidDecisionInput) => {
        input.aid.sgeiCompensationEvidence =
          "Inventaire provisoire n° INV-2026-0099 : aucune autre compensation du même service";
      },
      "preuve sur les compensations du même SIEG",
    ],
  ] as const)(
    "rejects an unidentifiable or ambiguous SIEG document: %s",
    (_label, mutate, expectedIssue) => {
      const input = completeInput({ stage: "notified" });
      documentCurrentSgei(input);
      mutate(input);

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("incomplete");
      expect(result.code).not.toBe("notified-usable");
      expect(result.missingEvidence.join(" ")).toContain(expectedIssue);
    },
  );

  it.each([
    [
      "entrustment with structured reference",
      (input: SiteAidDecisionInput) => {
        input.aid.sgeiEntrustmentEvidence =
          "Acte écrit SIEG n° SIEG-2026-0042 qui confie le service";
      },
    ],
    [
      "entrustment with authority and date",
      (input: SiteAidDecisionInput) => {
        input.aid.sgeiEntrustmentEvidence =
          "Convention écrite de mandat SIEG de la Région du 02/01/2026 qui confie le service";
      },
    ],
    [
      "compensation inventory with structured reference",
      (input: SiteAidDecisionInput) => {
        input.aid.sgeiCompensationEvidence =
          "Inventaire n° INV-SIEG-2026-0042 : aucune autre compensation du même service SIEG";
      },
    ],
    [
      "compensation authority response with date",
      (input: SiteAidDecisionInput) => {
        input.aid.sgeiCompensationEvidence =
          "Réponse de la Région du 26/07/2026 : aucune autre compensation du même service SIEG";
      },
    ],
  ] as const)(
    "accepts an identifiable structured SIEG document without authenticating it: %s",
    (_label, mutate) => {
      const input = completeInput({ stage: "notified" });
      documentCurrentSgei(input);
      mutate(input);

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("notified-usable");
      expect(result.missingEvidence.join(" ")).not.toContain("Un texte libre");
      expect(result.toolLimitations.join(" ")).toContain(
        "déclarations non authentifiées",
      );
    },
  );

  it("publishes fail-closed central-register defaults and rejects a corrupted status", () => {
    const empty = createEmptySiteAidDecisionInput();

    expect(empty.aid).toMatchObject({
      centralRegisterStatus: "unknown",
      centralRegisterReference: "",
    });

    const input = completeInput({ stage: "notified" });
    input.aid.centralRegisterStatus =
      "published" as SiteAidCentralRegisterStatus;

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("invalid");
    expect(result.invalidIssues.join(" ")).toContain(
      "registre central national : statut incohérent",
    );
  });

  it.each([
    ["unknown", "", "statut à confirmer"],
    ["pending", "", "transmission des données d’octroi déclarée en cours"],
    ["not-registered", "", "aide déclarée non enregistrée"],
    [
      "registered",
      "",
      "fournir un recordid ou identifiant public exploitable du jeu officiel",
    ],
  ] as const)(
    "never returns a favorable French 2026 verdict with central-register status %s",
    (centralRegisterStatus, centralRegisterReference, expectedIssue) => {
      const input = completeInput({ stage: "notified" });
      input.aid.centralRegisterStatus = centralRegisterStatus;
      input.aid.centralRegisterReference = centralRegisterReference;

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("incomplete");
      expect(result.code).not.toBe("notified-usable");
      expect(result.missingEvidence.join(" ")).toContain(expectedIssue);
      expect(result.toolLimitations.join(" ")).toContain(
        "Registre central R26 — transmission, enregistrement et publication distincts",
      );
      if (centralRegisterStatus === "pending") {
        const report = buildSiteAidDecisionReport(input);
        expect(report).toContain(
          "Statut déclaré au registre central national — non authentifié par le moteur : Transmission des données d’octroi en cours",
        );
        expect(report).not.toContain("Délai ou transmission en cours");
        expect(result.missingEvidence.join(" ")).not.toContain(
          "délai ou transmission déclaré en cours",
        );
        expect(result.warnings.join(" ")).toContain(
          "l’article 6, paragraphe 2, du règlement 2023/2831 impose aux États membres l’enregistrement dans les 20 jours ouvrables",
        );
        expect(result.warnings.join(" ")).not.toContain(
          "la publication doit intervenir",
        );
      }
    },
  );

  it.each([
    ["Wikipedia", "https://fr.wikipedia.org/wiki/Poisson"],
    [
      "press",
      "https://www.lesechos.fr/economie-france/budget-fiscalite/aide-2026-004281",
    ],
    [
      "social network",
      "https://www.linkedin.com/posts/autorite-aide-2026-004281",
    ],
    [
      "recognized official dataset without a record identifier",
      "https://data.economie.gouv.fr/explore/dataset/aides_minimis/",
    ],
    [
      "current official assets page without a record identifier",
      "https://data.economie.gouv.fr/explore/assets/aides_minimis/",
    ],
    [
      "generic official page with an unrelated identifier",
      "https://www.economie.gouv.fr/entreprises/aides-minimis/2026-004281",
    ],
    [
      "ambiguous authority attestation",
      "Projet d’attestation de l’autorité d’octroi n° ATT-2026-004281",
    ],
    ["arbitrary recordid", "recordid: banane"],
    ["truncated recordid", "recordid: 50f2f945cb505b8c1ab37548149b2e143b4582a"],
    ["pseudo public ID", "recordid: public-fr-2026-004281"],
    [
      "false query parameter",
      `https://data.economie.gouv.fr/explore/assets/aides_minimis/?public.recordid=${VALID_FRENCH_CENTRAL_REGISTER_RECORD_ID}`,
    ],
    [
      "double-encoded locator",
      `https://data.economie.gouv.fr/explore/dataset/aides_minimis/?q=recordid%253A${VALID_FRENCH_CENTRAL_REGISTER_RECORD_ID}`,
    ],
    [
      "malformed encoded locator",
      `https://data.economie.gouv.fr/explore/dataset/aides_minimis/?q=recordid%ZZ${VALID_FRENCH_CENTRAL_REGISTER_RECORD_ID}`,
    ],
  ])(
    "rejects a generic or ambiguous central-register reference: %s",
    (_label, reference) => {
      const input = completeInput({ stage: "notified" });
      input.aid.centralRegisterStatus = "registered";
      input.aid.centralRegisterReference = reference;

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("incomplete");
      expect(result.code).not.toBe("notified-usable");
      expect(result.missingEvidence.join(" ")).toContain("une URL générique");
      expect(result.missingEvidence.join(" ")).toContain(
        "40 caractères hexadécimaux",
      );
    },
  );

  it("rejects the legacy public API v1 URL while allowing its recordid to be copied separately", () => {
    const input = completeInput({ stage: "notified" });
    input.aid.centralRegisterStatus = "registered";
    input.aid.centralRegisterReference =
      "https://data.economie.gouv.fr/api/records/1.0/search/?dataset=aides_minimis&q=recordid%3A50f2f945cb505b8c1ab37548149b2e143b4582ab";

    const legacyApi = calculateSiteAidDecision(input);

    expect(legacyApi.code).toBe("incomplete");
    expect(legacyApi.missingEvidence.join(" ")).toContain(
      "L’ancienne URL de l’API publique v1",
    );
    expect(legacyApi.missingEvidence.join(" ")).toContain(
      "recopier son recordid autonome",
    );

    input.aid.centralRegisterReference =
      "recordid: 50f2f945cb505b8c1ab37548149b2e143b4582ab";
    expect(calculateSiteAidDecision(input).code).toBe("notified-usable");
  });

  it.each([
    [
      "public URL",
      `https://data.economie.gouv.fr/explore/dataset/aides_minimis/?q=recordid%3A${VALID_FRENCH_CENTRAL_REGISTER_RECORD_ID}`,
    ],
    [
      "current redirected assets URL",
      "https://data.economie.gouv.fr/explore/assets/aides_minimis/?refine=recordid%3A50f2f945cb505b8c1ab37548149b2e143b4582ab",
    ],
    [
      "current refine.recordid assets URL",
      "https://data.economie.gouv.fr/explore/assets/aides_minimis/?refine.recordid=50f2f945cb505b8c1ab37548149b2e143b4582ab",
    ],
    ["public recordid", `recordid: ${VALID_FRENCH_CENTRAL_REGISTER_RECORD_ID}`],
    [
      "identifiable authority attestation",
      "Attestation de l’autorité d’octroi n° ATT-2026-004281",
    ],
  ])(
    "accepts a public central-register trace or authority attestation without authenticating it: %s",
    (_label, reference) => {
      const input = completeInput({ stage: "notified" });
      input.aid.centralRegisterStatus = "registered";
      input.aid.centralRegisterReference = reference;

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("notified-usable");
      expect(result.toolLimitations.join(" ")).toContain(
        "ne consulte pas la Plateforme",
      );
      expect(result.toolLimitations.join(" ")).toMatch(
        /recordid public non authentifié|attestation d’autorité, branche déclarative distincte et non authentifiée/,
      );
    },
  );

  it.each([
    ["general", "Règlement UE 2023/2831", "2026-07-26", "règlement 2023/2831"],
    ["SGEI", "Règlement UE 2023/2832", "2026-07-26", "règlement 2023/2832"],
    [
      "agriculture",
      "Règlement UE 1408/2013",
      "2027-01-01",
      "règlement 1408/2013 modifié",
    ],
  ] as const)(
    "attributes the European 20-working-day registration rule only to a regime that contains it: %s",
    (_label, regime, legalGrantDate, expectedRegulation) => {
      const input = completeInput({ stage: "notified" });
      input.profile.verificationDate =
        legalGrantDate > "2026-07-26" ? legalGrantDate : "2026-07-26";
      input.aid.deMinimisRegime = regime;
      input.aid.legalGrantDate = legalGrantDate;
      if (regime.includes("2023/2832")) documentCurrentSgei(input);
      input.aid.centralRegisterStatus = "pending";
      input.aid.centralRegisterReference = "";

      const result = calculateSiteAidDecision(input, {
        analysisDate: input.profile.verificationDate,
      });
      const registerMessages = [
        ...result.warnings,
        ...result.toolLimitations,
      ].join(" ");

      expect(result.code).toBe("incomplete");
      expect(registerMessages).toContain(expectedRegulation);
      expect(registerMessages).toContain(
        "l’enregistrement dans les 20 jours ouvrables",
      );
    },
  );

  it("uses only the French decree for the fishery transmission delay and preserves the 40k register condition", () => {
    const input = completeInput({ stage: "notified" });
    input.aid.deMinimisRegime = "Règlement UE 717/2014";
    input.aid.deMinimisMemberState = "France";
    setFisheryFiscalYearStarts(
      input,
      "2026-01-01",
      "2025-01-01",
      "2024-01-01",
      "2026-12-31",
    );
    input.aid.centralRegisterStatus = "pending";
    input.aid.centralRegisterReference = "";

    const result = calculateSiteAidDecision(input);
    const registerMessages = [
      ...result.warnings,
      ...result.toolLimitations,
    ].join(" ");

    expect(result.code).toBe("incomplete");
    expect(registerMessages).toContain(
      "le règlement 717/2014 ne fixe pas de délai européen général de 20 jours",
    );
    expect(registerMessages).toContain(
      "ne permet le plafond individuel de 40 000 € que si l’État membre dispose du registre central national",
    );
    expect(registerMessages).toContain(
      "le délai du décret n° 2025-1361 ne concerne que les organismes visés par ses articles 2 et 3",
    );
    expect(registerMessages).toContain(
      "ne connaît pas la catégorie juridique de l’organisme",
    );
  });

  it("does not export a French or European 20-day registration claim for a fishery aid outside the French scope", () => {
    const input = completeInput({ stage: "notified" });
    input.aid.deMinimisRegime = "Règlement UE 717/2014";
    input.aid.deMinimisMemberState = "Belgique";
    setFisheryFiscalYearStarts(
      input,
      "2026-01-01",
      "2025-01-01",
      "2024-01-01",
      "2026-12-31",
    );
    input.aid.centralRegisterStatus = "pending";
    input.aid.centralRegisterReference = "";

    const result = calculateSiteAidDecision(input);
    const registerMessages = [
      ...result.warnings,
      ...result.toolLimitations,
    ].join(" ");

    expect(result.code).toBe("notified-usable");
    expect(registerMessages).toContain(
      "champs obsolètes ou hors champ ignorés",
    );
    expect(registerMessages).not.toContain("20 jours ouvrables");
    expect(registerMessages).not.toContain("20-day");
  });

  it("does not require or accept the publication-excluded internal unique identifier by itself", () => {
    const input = completeInput({ stage: "notified" });
    input.aid.centralRegisterStatus = "registered";
    input.aid.centralRegisterReference = "PDE-FR-2026-AIDE-004281";

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("incomplete");
    expect(result.missingEvidence.join(" ")).toContain(
      "Le numéro d’identification unique interne exclu de la publication",
    );
    expect(result.missingEvidence.join(" ")).toContain("n’est pas requis");
  });

  it.each([
    ["general", "Règlement UE 2023/2831", "2026-01-01", true],
    ["SIEG", "Règlement UE 2023/2832", "2026-01-01", true],
    ["fishery", "Règlement UE 717/2014", "2026-01-01", true],
    ["agriculture before start", "Règlement UE 1408/2013", "2026-12-31", false],
    ["agriculture at start", "Règlement UE 1408/2013", "2027-01-01", true],
    ["general before start", "Règlement UE 2023/2831", "2025-12-31", false],
  ] as const)(
    "applies the exact French central-register start date: %s",
    (_label, regime, legalGrantDate, required) => {
      const input = completeInput({ stage: "notified" });
      input.profile.verificationDate =
        legalGrantDate > "2026-07-26" ? legalGrantDate : "2026-07-26";
      input.aid.deMinimisRegime = regime;
      input.aid.legalGrantDate = legalGrantDate;
      if (regime.includes("2023/2832")) documentCurrentSgei(input);
      input.aid.centralRegisterStatus = required ? "unknown" : "not-applicable";
      input.aid.centralRegisterReference = "";

      const result = calculateSiteAidDecision(input, {
        analysisDate: input.profile.verificationDate,
      });

      if (required) {
        expect(result.code).toBe("incomplete");
        expect(result.missingEvidence.join(" ")).toContain(
          "registre central national : statut à confirmer",
        );
      } else {
        expect(result.code).toBe("notified-usable");
        expect(result.missingEvidence.join(" ")).not.toContain(
          "registre central national",
        );
      }
    },
  );

  it("applies the central-register trace independently to every register row", () => {
    const input = completeInput({ stage: "notified" });
    input.aidRegister = [
      registerEntry({
        centralRegisterStatus: "unknown",
        centralRegisterReference: "",
      }),
      registerEntry({
        authority: "Métropole",
        scheme: "Aide enregistrée",
        centralRegisterStatus: "registered",
        centralRegisterReference:
          "recordid: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      }),
    ];

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("incomplete");
    expect(result.missingEvidence.join(" ")).toContain(
      "Registre, aide 1, registre central national : statut à confirmer",
    );
    expect(result.missingEvidence.join(" ")).not.toContain(
      "Registre, aide 2, registre central national",
    );
  });

  it.each([
    ["Belgian grant", "Belgique", "2026-02-01"],
    ["French pre-2026 grant", "France", "2025-12-31"],
  ])(
    "ignores but reports stale central-register fields outside the French scope: %s",
    (_label, memberState, legalGrantDate) => {
      const input = completeInput({ stage: "notified" });
      input.aid.deMinimisMemberState = memberState;
      input.aid.legalGrantDate = legalGrantDate;
      input.aid.centralRegisterStatus = "registered";
      input.aid.centralRegisterReference = "PDE-STALE-2026-0001";

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("notified-usable");
      expect(result.missingEvidence.join(" ")).not.toContain(
        "registre central national",
      );
      expect(result.warnings.join(" ")).toContain(
        "champs obsolètes ou hors champ ignorés",
      );
    },
  );

  it("exports central-register statuses and references separately for current aid and every row", () => {
    const input = completeInput({ stage: "notified" });
    input.aid.centralRegisterStatus = "registered";
    input.aid.centralRegisterReference =
      "recordid: bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";
    input.aidRegister = [
      registerEntry({
        centralRegisterStatus: "registered",
        centralRegisterReference:
          "Attestation de l’autorité d’octroi n° ATT-2026-ROW-0002",
      }),
    ];

    const report = buildSiteAidDecisionReport(input);

    expect(report).toContain(
      "Statut déclaré au registre central national — non authentifié par le moteur : Enregistré",
    );
    expect(report).toContain(
      "Référence publique ou attestation déclarée du registre central national — non authentifiée par le moteur : recordid: bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    );
    expect(report).toContain(
      "statut du registre central national — non authentifié Enregistré",
    );
    expect(report).toContain(
      "référence publique ou attestation du registre central national — non authentifiée Attestation de l’autorité d’octroi n° ATT-2026-ROW-0002",
    );
    expect(report).toContain("ne consulte pas la Plateforme");
  });
});

describe("site aid decision — R27 exact fishery periods, prospective ceilings and bounded evidence", () => {
  type FisheryFiscalYearStarts = readonly [
    current: string,
    previous: string,
    secondPrevious: string,
    currentEnd: string,
  ];

  function currentFisheryInput(
    legalGrantDate: string,
    fiscalYearStarts?: FisheryFiscalYearStarts,
    registerAmount = 38_000,
  ): SiteAidDecisionInput {
    const input = completeInput({
      stage: "notified",
      legalAidValueAmount: 2_100,
    });
    input.aid.deMinimisRegime = "Règlement UE 717/2014";
    input.aid.deMinimisSingleUndertakingScope = "Armement fiscal R26";
    if (fiscalYearStarts) {
      setFisheryFiscalYearStarts(input, ...fiscalYearStarts);
    }
    input.aidRegister = [
      registerEntry({
        regime: "Règlement UE 717/2014",
        singleUndertakingScope: "Armement fiscal R26",
        amount: registerAmount,
        legalGrantDate,
      }),
    ];
    return input;
  }

  it("uses three real short fiscal exercises without deriving annual anniversaries", () => {
    const emptyAid = createEmptySiteAidDecisionInput().aid;
    expect(emptyAid.deMinimisFisheryFiscalYearStartDate).toBe("");
    expect(emptyAid.deMinimisFisheryPreviousFiscalYearStartDate).toBe("");
    expect(emptyAid.deMinimisFisherySecondPreviousFiscalYearStartDate).toBe("");
    expect(emptyAid.deMinimisFisheryCurrentFiscalYearEndDate).toBe("");
    expect(emptyAid.prospectiveDeMinimisAidValueAmount).toBeUndefined();
    expect(emptyAid.prospectiveDeMinimisAidValueEvidence).toBe("");
    const input = currentFisheryInput("2025-06-30", [
      "2026-07-01",
      "2026-01-01",
      "2025-07-01",
      "2026-12-31",
    ]);

    const result = calculateSiteAidDecision(input);
    const report = buildSiteAidDecisionReport(input);

    expect(result.code).toBe("notified-usable");
    expect(result.exclusionReasons).toEqual([]);
    expect(result.missingEvidence.join(" ")).not.toContain(
      "Période fiscale pêche à résoudre avant verdict",
    );
    expect(result.warnings.join(" ")).not.toContain("40 100 €");
    expect(result.toolLimitations.join(" ")).toContain(
      "exercice fiscal courant et deux précédents",
    );
    expect(result.toolLimitations.join(" ")).toContain(
      "aucune borne n’est dérivée par anniversaire",
    );
    expect(result.toolLimitations.join(" ")).toContain(
      "Période fiscale pêche déclarée — non authentifiée",
    );
    expect(report).toContain(
      "Fin inclusive déclarée de l’exercice fiscal pêche courant — non authentifiée : 2026-12-31",
    );
  });

  it("keeps an aid inside three real long fiscal exercises even beyond a derived two-year anniversary", () => {
    const result = calculateSiteAidDecision(
      currentFisheryInput("2022-06-01", [
        "2026-01-01",
        "2024-01-01",
        "2022-01-01",
        "2027-12-31",
      ]),
    );

    expect(result.code).toBe("excluded");
    expect(result.exclusionReasons.join(" ")).toContain("40 100 €");
    expect(result.toolLimitations.join(" ")).toContain(
      "2022-01-01, 2024-01-01 et 2026-01-01",
    );
  });

  it("never excludes from the uncertain outer fishery slice when the fiscal period is unresolved", () => {
    const result = calculateSiteAidDecision(currentFisheryInput("2023-08-01"));

    expect(result.code).toBe("incomplete");
    expect(result.exclusionReasons).toEqual([]);
    expect(result.missingEvidence.join(" ")).toContain(
      "Période fiscale pêche à résoudre avant verdict",
    );
    expect(result.missingEvidence.join(" ")).toContain(
      "seulement 2 100 € sont assurément compris",
    );
    expect(result.warnings.join(" ")).toContain("40 100 €");
    expect(result.warnings.join(" ")).toContain(
      "aucune exclusion n’est produite à partir de cette tranche",
    );
  });

  it("still excludes a fishery excess calculated entirely from the assured subtotal", () => {
    const result = calculateSiteAidDecision(
      currentFisheryInput("2025-01-01", [
        "2026-01-01",
        "2025-01-01",
        "2024-01-01",
        "2026-12-31",
      ]),
    );

    expect(result.code).toBe("excluded");
    expect(result.exclusionReasons.join(" ")).toContain(
      "règlement pêche/aquaculture 717/2014",
    );
    expect(result.exclusionReasons.join(" ")).toContain("40 100 €");
  });

  it.each([
    [
      "invalid ISO date",
      ["2026-02-30", "2025-01-01", "2024-01-01", "2026-12-31"],
      "date ISO invalide",
    ],
    [
      "invalid current end date",
      ["2026-01-01", "2025-01-01", "2024-01-01", "2026-02-30"],
      "date ISO invalide",
    ],
    [
      "future current start",
      ["2026-08-01", "2025-01-01", "2024-01-01", "2026-12-31"],
      "ne contient pas l’ancre",
    ],
    [
      "current exercise ending before the anchor",
      ["2025-01-01", "2024-01-01", "2023-01-01", "2026-07-25"],
      "ne contient pas l’ancre",
    ],
    [
      "duplicate boundary",
      ["2026-01-01", "2026-01-01", "2024-01-01", "2026-12-31"],
      "strictement ordonnés",
    ],
    [
      "reversed previous starts",
      ["2026-01-01", "2024-01-01", "2025-01-01", "2026-12-31"],
      "strictement ordonnés",
    ],
  ] as const)(
    "rejects incoherent real fishery fiscal starts: %s",
    (_label, fiscalYearStarts, expectedIssue) => {
      const input = currentFisheryInput("2025-01-01", fiscalYearStarts, 1_000);

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("invalid");
      expect(result.invalidIssues.join(" ")).toContain(expectedIssue);
    },
  );

  it("treats a partial fishery fiscal series as incomplete without deriving the missing starts", () => {
    const input = currentFisheryInput("2025-01-01", undefined, 1_000);
    input.aid.deMinimisFisheryFiscalYearStartDate = "2026-01-01";

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("incomplete");
    expect(result.exclusionReasons).toEqual([]);
    expect(result.missingEvidence.join(" ")).toContain(
      "renseigner ensemble les débuts ISO réels",
    );
    expect(result.toolLimitations.join(" ")).toContain(
      "aucune borne n’est dérivée par anniversaire",
    );
  });

  it("keeps a low fishery total incomplete when the whole fiscal quartet is missing", () => {
    const result = calculateSiteAidDecision(
      currentFisheryInput("2025-01-01", undefined, 1_000),
    );

    expect(result.code).toBe("incomplete");
    expect(result.exclusionReasons).toEqual([]);
    expect(result.missingEvidence.join(" ")).toContain(
      "Sans ce quartet, aucune borne exacte n’est retenue",
    );
  });

  function datedFisheryThresholdInput(
    anchorDate: string,
    historicalAmount: number,
    memberState = "France",
  ): SiteAidDecisionInput {
    const input = completeInput({
      stage: "notified",
      legalAidValueAmount: 2_100,
    });
    input.profile.verificationDate = anchorDate;
    input.profile.deMinimisEuTerritorialEvidenceDate = anchorDate;
    input.authority.consultationDate = anchorDate;
    input.aid.deMinimisRegime = "Règlement UE 717/2014";
    input.aid.deMinimisMemberState = memberState;
    input.aid.deMinimisSingleUndertakingScope =
      memberState === "France"
        ? "Armement frontière française"
        : "Armement frontière étrangère";
    input.aid.legalGrantDate = anchorDate;
    input.aid.centralRegisterStatus =
      memberState === "France" && anchorDate >= "2026-01-01"
        ? "registered"
        : "not-applicable";
    input.aid.centralRegisterReference =
      input.aid.centralRegisterStatus === "registered"
        ? "Attestation de l’autorité d’octroi n° ATT-FISH-2026-0001"
        : "";
    setFisheryFiscalYearStarts(
      input,
      "2025-07-01",
      "2024-07-01",
      "2023-07-01",
      "2026-06-30",
    );
    input.aidRegister = [
      registerEntry({
        regime: "Règlement UE 717/2014",
        memberState,
        singleUndertakingScope: input.aid.deMinimisSingleUndertakingScope,
        amount: historicalAmount,
        legalGrantDate: "2024-08-01",
      }),
    ];
    return input;
  }

  it("uses France's 30k fishery ceiling through 2025-12-31 and 40k only from 2026-01-01", () => {
    const beforeBoundary = calculateSiteAidDecision(
      datedFisheryThresholdInput("2025-12-31", 29_000),
    );
    const onBoundary = calculateSiteAidDecision(
      datedFisheryThresholdInput("2026-01-01", 29_000),
    );

    expect(beforeBoundary.code).toBe("excluded");
    expect(beforeBoundary.exclusionReasons.join(" ")).toContain("31 100 €");
    expect(beforeBoundary.exclusionReasons.join(" ")).toContain(
      "plafond individuel français de 30 000 € avant le 1er janvier 2026",
    );
    expect(onBoundary.code).toBe("notified-usable");
    expect(onBoundary.exclusionReasons).toEqual([]);
  });

  it("keeps the exact French 2026 fishery ceiling and excludes one cent above it", () => {
    const exactBoundary = calculateSiteAidDecision(
      datedFisheryThresholdInput("2026-01-01", 37_900),
    );
    const aboveBoundary = calculateSiteAidDecision(
      datedFisheryThresholdInput("2026-01-01", 37_900.01),
    );

    expect(exactBoundary.code).toBe("notified-usable");
    expect(aboveBoundary.code).toBe("excluded");
    expect(aboveBoundary.exclusionReasons.join(" ")).toContain("40 000,01 €");
    expect(aboveBoundary.exclusionReasons.join(" ")).toContain(
      "plafond individuel français de 40 000 € à compter du 1er janvier 2026",
    );
  });

  it("keeps another member state's 30k/40k conditional branches distinct", () => {
    const aboveDefault = calculateSiteAidDecision(
      datedFisheryThresholdInput("2026-01-01", 29_000, "Belgique"),
    );
    const aboveBoth = calculateSiteAidDecision(
      datedFisheryThresholdInput("2026-01-01", 37_900.01, "Belgique"),
    );

    expect(aboveDefault.code).toBe("incomplete");
    expect(aboveDefault.missingEvidence.join(" ")).toContain(
      "plus que la branche par défaut de 30 000 € sans dépasser 40 000 €",
    );
    expect(aboveBoth.code).toBe("excluded");
    expect(aboveBoth.exclusionReasons.join(" ")).toContain(
      "dépassement même sous la branche haute conditionnelle",
    );
  });

  function crossRegimeFisheryInput(
    fisheryGrantDate: string,
    fiscalYearStarts?: FisheryFiscalYearStarts,
  ): SiteAidDecisionInput {
    const input = completeInput({
      stage: "notified",
      legalAidValueAmount: 251_000,
    });
    input.aid.deMinimisRegime = "Règlement UE 2023/2831";
    input.aid.deMinimisSingleUndertakingScope = "Groupe croisé fiscal R26";
    if (fiscalYearStarts) {
      setFisheryFiscalYearStarts(input, ...fiscalYearStarts);
    }
    input.aidRegister = [
      registerEntry({
        regime: "Règlement UE 717/2014",
        singleUndertakingScope: "Groupe croisé fiscal R26",
        amount: 49_000.01,
        legalGrantDate: fisheryGrantDate,
      }),
    ];
    return input;
  }

  it("propagates the unresolved fishery period to the cross-regime ceiling without a false exclusion", () => {
    const result = calculateSiteAidDecision(
      crossRegimeFisheryInput("2023-08-01"),
    );

    expect(result.code).toBe("incomplete");
    expect(result.exclusionReasons).toEqual([]);
    expect(result.missingEvidence.join(" ")).toContain(
      "cumul inter-régimes général, agricole et pêche/aquaculture",
    );
    expect(result.missingEvidence.join(" ")).toContain("300 000 €");
  });

  it("resolves the cross-regime boundary from an explicit fiscal period or an assured subtotal", () => {
    const outsideResolvedPeriod = calculateSiteAidDecision(
      crossRegimeFisheryInput("2023-08-01", [
        "2026-01-01",
        "2025-01-01",
        "2024-01-01",
        "2026-12-31",
      ]),
    );
    const assuredExcess = calculateSiteAidDecision(
      crossRegimeFisheryInput("2025-01-01", [
        "2026-01-01",
        "2025-01-01",
        "2024-01-01",
        "2026-12-31",
      ]),
    );

    expect(outsideResolvedPeriod.code).toBe("notified-usable");
    expect(outsideResolvedPeriod.exclusionReasons).toEqual([]);
    expect(assuredExcess.code).toBe("excluded");
    expect(assuredExcess.exclusionReasons.join(" ")).toContain(
      "cumul inter-régimes général, agricole et pêche/aquaculture",
    );
  });

  function agricultureFisheryInput(
    fisheryGrantDate: string,
    fiscalYearStarts?: FisheryFiscalYearStarts,
  ): SiteAidDecisionInput {
    const input = completeInput({
      stage: "notified",
      legalAidValueAmount: 30_000,
    });
    input.aid.deMinimisRegime = "Règlement UE 1408/2013";
    input.aid.deMinimisSingleUndertakingScope = "Groupe sectoriel fiscal R26";
    if (fiscalYearStarts) {
      setFisheryFiscalYearStarts(input, ...fiscalYearStarts);
    }
    input.aidRegister = [
      registerEntry({
        regime: "Règlement UE 717/2014",
        singleUndertakingScope: "Groupe sectoriel fiscal R26",
        amount: 20_000.01,
        legalGrantDate: fisheryGrantDate,
      }),
    ];
    return input;
  }

  it("propagates the unresolved fishery period to the agriculture-fishery ceiling without a false exclusion", () => {
    const result = calculateSiteAidDecision(
      agricultureFisheryInput("2023-08-01"),
    );

    expect(result.code).toBe("incomplete");
    expect(result.exclusionReasons).toEqual([]);
    expect(result.missingEvidence.join(" ")).toContain(
      "cumul sectoriel agricole et pêche/aquaculture",
    );
    expect(result.missingEvidence.join(" ")).toContain("50 000 €");
  });

  it("resolves the agriculture-fishery boundary from an explicit fiscal period or an assured subtotal", () => {
    const outsideResolvedPeriod = calculateSiteAidDecision(
      agricultureFisheryInput("2023-08-01", [
        "2026-01-01",
        "2025-01-01",
        "2024-01-01",
        "2026-12-31",
      ]),
    );
    const assuredExcess = calculateSiteAidDecision(
      agricultureFisheryInput("2025-01-01", [
        "2026-01-01",
        "2025-01-01",
        "2024-01-01",
        "2026-12-31",
      ]),
    );

    expect(outsideResolvedPeriod.code).toBe("notified-usable");
    expect(outsideResolvedPeriod.exclusionReasons).toEqual([]);
    expect(assuredExcess.code).toBe("excluded");
    expect(assuredExcess.exclusionReasons.join(" ")).toContain(
      "cumul sectoriel agricole et pêche/aquaculture",
    );
  });

  it("never reads a written SIEG phrase saying 'ne confie pas' as affirmative entrustment", () => {
    const input = completeInput({ stage: "notified" });
    documentCurrentSgei(input);
    input.aid.sgeiEntrustmentEvidence =
      "La décision écrite n° DEC-2026-42 ne lui confie pourtant pas le service SIEG Permanence numérique.";

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("invalid");
    expect(result.invalidIssues.join(" ")).toContain(
      "cohérence du mandat SIEG",
    );
    expect(result.code).not.toBe("notified-usable");
  });

  it.each([
    "ne lui confie pas le service d’intérêt économique général",
    "ne confie aucun service d’intérêt économique général",
    "n’a jamais confié le service d’intérêt économique général",
    "ne lui a jamais confié le service d’intérêt économique général",
    "ne leur a pas attribué le service d’intérêt économique général",
    "ne nous ont plus confié le service d’intérêt économique général",
    "ne lui a en aucun cas confié le service d’intérêt économique général",
    "ne lui a en réalité jamais confié le service d’intérêt économique général",
    "ne lui a effectivement jamais confié le service d’intérêt économique général",
    "ne lui a en pratique jamais confié le service d’intérêt économique général",
    "ne lui confie pourtant pas le service d’intérêt économique général",
    "ne lui confie toujours pas le service d’intérêt économique général",
    "ne lui confie absolument pas le service d’intérêt économique général",
    "ne lui confie à ce stade toujours pas le service d’intérêt économique général",
    "ne lui a pourtant absolument pas confié le service d’intérêt économique général",
    "ne leur avait plus attribué le service d’intérêt économique général",
    "ne leur avait dans les faits plus attribué le service d’intérêt économique général",
    "ne lui a en réalité jamais été confié le service d’intérêt économique général",
    "ne lui aura à ce jour en aucun cas confié le service d’intérêt économique général",
    "ne lui a confié aucun service d’intérêt économique général",
    "N'A   JAMAIS   CONFIÉ le service d’intérêt économique général",
    "N’ A   EFFECTIVEMENT   JAMAIS   CONFIÉ le service d’intérêt économique général",
    "ne confie plus le service d’intérêt économique général",
  ])(
    "blocks the adversarial SIEG entrustment negation: %s",
    (negativeClause) => {
      const input = completeInput({ stage: "notified" });
      documentCurrentSgei(input);
      input.aid.sgeiEntrustmentEvidence = `Décision écrite de la Région n° DEC-2026-NEG du 26/07/2026 : le mandat écrit ${negativeClause} à l’entreprise.`;

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("invalid");
      expect(result.invalidIssues.join(" ")).toContain(
        "cohérence du mandat SIEG",
      );
      expect(result.code).not.toBe("notified-usable");
    },
  );

  it.each([
    "confie le service d’intérêt économique général Permanence numérique à l’entreprise",
    "ne confie pas seulement le service d’intérêt économique général Permanence numérique à l’entreprise, mais fixe aussi ses obligations",
    "ne confie pourtant pas seulement le service d’intérêt économique général Permanence numérique à l’entreprise, mais fixe aussi ses obligations",
    "ne lui a pas uniquement confié le service d’intérêt économique général Permanence numérique, mais aussi son suivi",
    "ne lui a à ce stade pas uniquement confié le service d’intérêt économique général Permanence numérique, mais aussi son suivi",
  ])("keeps the positive SIEG entrustment witness coherent: %s", (clause) => {
    const input = completeInput({ stage: "notified" });
    documentCurrentSgei(input);
    input.aid.sgeiEntrustmentEvidence = `Décision écrite de la Région n° DEC-2026-418 du 26/07/2026 : le mandat écrit ${clause}.`;

    expect(calculateSiteAidDecision(input).code).toBe("notified-usable");
  });

  it.each([
    "ne lui a en réalité jamais confié le service d’intérêt économique général",
    "ne lui a effectivement jamais confié le service d’intérêt économique général",
    "ne lui a en pratique jamais confié le service d’intérêt économique général",
    "ne lui a pourtant absolument pas confié le service d’intérêt économique général",
    "ne lui a à ce stade toujours pas confié le service d’intérêt économique général",
    "ne leur avait dans les faits plus attribué le service d’intérêt économique général",
    "N’ A   POURTANT   ABSOLUMENT   PAS   CONFIÉ le service d’intérêt économique général",
  ])(
    "applies the bounded SIEG entrustment negation grammar to a register row: %s",
    (negativeClause) => {
      const input = completeInput({ stage: "notified" });
      documentCurrentSgei(input);
      const historicalService = "Médiation numérique rurale";
      input.aidRegister = [
        sgeiRegisterEntry({
          sgeiEntrustmentEvidence: `Décision écrite de la Région n° DEC-REG-2025-NEG du 10/01/2025 : le mandat écrit ${negativeClause} à l’entreprise.`,
          sgeiServiceIdentity: historicalService,
          sgeiRelationToCurrentService: "no",
          sgeiRelationToCurrentServiceEvidence:
            documentedSgeiDistinctionEvidence(
              input.aid.sgeiServiceIdentity,
              historicalService,
            ),
        }),
      ];

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("invalid");
      expect(result.invalidIssues.join(" ")).toContain(
        "Registre, aide 1, cohérence du mandat SIEG",
      );
      expect(result.code).not.toBe("notified-usable");
    },
  );

  it("blocks the exact adversarial SIEG entrustment sentence on a register row", () => {
    const input = completeInput({ stage: "notified" });
    documentCurrentSgei(input);
    const historicalService = "Médiation numérique rurale";
    input.aidRegister = [
      sgeiRegisterEntry({
        sgeiEntrustmentEvidence:
          "La décision écrite n° DEC-2026-42 ne lui confie pourtant pas le service SIEG Médiation numérique rurale.",
        sgeiServiceIdentity: historicalService,
        sgeiRelationToCurrentService: "no",
        sgeiRelationToCurrentServiceEvidence: documentedSgeiDistinctionEvidence(
          input.aid.sgeiServiceIdentity,
          historicalService,
        ),
      }),
    ];

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("invalid");
    expect(result.invalidIssues.join(" ")).toContain(
      "Registre, aide 1, cohérence du mandat SIEG",
    );
    expect(result.code).not.toBe("notified-usable");
  });

  it("keeps a restrictive register entrustment phrase positive without inferring the structured status", () => {
    const input = completeInput({ stage: "notified" });
    documentCurrentSgei(input);
    const historicalService = "Médiation numérique rurale";
    input.aidRegister = [
      sgeiRegisterEntry({
        sgeiEntrustmentEvidence:
          "Décision écrite de la Région n° DEC-REG-2025-POS du 10/01/2025 : le mandat ne lui a pas seulement confié le service d’intérêt économique général Médiation numérique rurale, mais aussi son suivi.",
        sgeiServiceIdentity: historicalService,
        sgeiRelationToCurrentService: "no",
        sgeiRelationToCurrentServiceEvidence: documentedSgeiDistinctionEvidence(
          input.aid.sgeiServiceIdentity,
          historicalService,
        ),
      }),
    ];

    expect(calculateSiteAidDecision(input).code).toBe("notified-usable");
  });

  it("never turns a positive or uncertain SIEG entrustment text into a favorable structured status", () => {
    const positiveInput = completeInput({ stage: "notified" });
    documentCurrentSgei(positiveInput);
    positiveInput.aid.sgeiEntrustmentVerified = "unknown";
    positiveInput.aid.sgeiEntrustmentEvidence =
      "Décision écrite de la Région n° DEC-2026-TEXT du 26/07/2026 : le mandat confie le service d’intérêt économique général à l’entreprise.";

    const uncertainInput = completeInput({ stage: "notified" });
    documentCurrentSgei(uncertainInput);
    uncertainInput.aid.sgeiEntrustmentEvidence =
      "Décision écrite de la Région n° DEC-2026-UNCERTAIN du 26/07/2026 : le mandat confie peut-être le service d’intérêt économique général à l’entreprise.";

    const positiveResult = calculateSiteAidDecision(positiveInput);
    const uncertainResult = calculateSiteAidDecision(uncertainInput);

    expect(positiveResult.code).toBe("incomplete");
    expect(positiveResult.missingEvidence.join(" ")).toContain(
      "mandat SIEG : statut à confirmer",
    );
    expect(uncertainResult.code).toBe("incomplete");
    expect(uncertainResult.missingEvidence.join(" ")).toContain(
      "preuve du mandat SIEG",
    );
  });

  it("does not let an earlier document reference hide a later negative SIEG clause", () => {
    const input = completeInput({ stage: "notified" });
    documentCurrentSgei(input);
    input.aid.sgeiEntrustmentEvidence =
      "Décision écrite de la Région n° DEC-2026-419 du 26/07/2026. Ce mandat ne confie pas le service d’intérêt économique général à l’entreprise.";

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("invalid");
    expect(result.code).not.toBe("notified-usable");
    expect(result.invalidIssues.join(" ")).toContain(
      "cohérence du mandat SIEG",
    );
  });

  it("never reads 'ne sont pourtant pas juridiquement distincts' as a favorable SIEG distinction", () => {
    const input = completeInput({ stage: "notified" });
    documentCurrentSgei(input);
    input.aid.sgeiServiceIdentity = "Transport scolaire communal";
    const historicalService = "Restauration scolaire communale";
    input.aidRegister = [
      sgeiRegisterEntry({
        sgeiServiceIdentity: historicalService,
        sgeiRelationToCurrentService: "no",
        sgeiRelationToCurrentServiceEvidence:
          "Attestation de la commune, autorité d’octroi, référence ATT-2026-0042, datée du 2026-07-26 : les services Transport scolaire communal et Restauration scolaire communale ne sont pourtant pas juridiquement distincts.",
      }),
    ];

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("invalid");
    expect(result.invalidIssues.join(" ")).toContain(
      "le statut structuré « NON » contredit littéralement une preuve",
    );
    expect(result.code).not.toBe("notified-usable");
  });

  it.each([
    (currentService: string, historicalService: string) =>
      `les services ${currentService} et ${historicalService} ne sont jamais distincts`,
    (currentService: string, historicalService: string) =>
      `les services ${currentService} et ${historicalService} ne sont pas réellement juridiquement distincts`,
    (currentService: string, historicalService: string) =>
      `les services ${currentService} et ${historicalService} ne sont réellement pas juridiquement distincts`,
    (currentService: string, historicalService: string) =>
      `les services ${currentService} et ${historicalService} ne sont en pratique pas juridiquement distincts`,
    (currentService: string, historicalService: string) =>
      `les services ${currentService} et ${historicalService} ne sont toujours pas juridiquement distincts`,
    (currentService: string, historicalService: string) =>
      `les services ${currentService} et ${historicalService} ne sont absolument pas juridiquement distincts`,
    (currentService: string, historicalService: string) =>
      `les services ${currentService} et ${historicalService} ne sont à ce stade toujours pas juridiquement distincts`,
    (currentService: string, historicalService: string) =>
      `les services ${currentService} et ${historicalService} ne sont pourtant absolument pas juridiquement distincts`,
    (currentService: string, historicalService: string) =>
      `les services ${currentService} et ${historicalService} ne sont dans les faits aucunement distincts`,
    (currentService: string, historicalService: string) =>
      `les services ${currentService} et ${historicalService} n’ont en réalité jamais été juridiquement distincts`,
    (currentService: string, historicalService: string) =>
      `les services ${currentService} et ${historicalService} ne peuvent en aucun cas être considérés comme juridiquement distincts`,
    (currentService: string, historicalService: string) =>
      `les services ${currentService} et ${historicalService} ne sont aucunement juridiquement distincts`,
    (currentService: string, historicalService: string) =>
      `les services ${currentService} et ${historicalService} n’ont jamais été juridiquement distincts`,
    (currentService: string, historicalService: string) =>
      `LES SERVICES ${currentService} ET ${historicalService} N'ONT   JAMAIS ÉTÉ DISTINCTS`,
    (currentService: string, historicalService: string) =>
      `LES SERVICES ${currentService} ET ${historicalService} N’ ONT   POURTANT   ABSOLUMENT   PAS   ÉTÉ DISTINCTS`,
    (currentService: string, historicalService: string) =>
      `les services ${currentService} et ${historicalService} n’avaient historiquement plus été juridiquement distincts`,
    (currentService: string, historicalService: string) =>
      `les services ${currentService} et ${historicalService} ne peuvent pas être considérés comme juridiquement distincts`,
    (currentService: string, historicalService: string) =>
      `les services ${currentService} et ${historicalService} ne sauraient en pratique nullement être considérés comme juridiquement distincts`,
    (currentService: string, historicalService: string) =>
      `après comparaison des services ${currentService} et ${historicalService}, aucun service distinct n’est constaté`,
  ])("blocks the adversarial SIEG non-distinction: %#", (negativeRelation) => {
    const input = completeInput({ stage: "notified" });
    documentCurrentSgei(input);
    input.aid.sgeiServiceIdentity = "Transport scolaire communal";
    const historicalService = "Restauration scolaire communale";
    input.aidRegister = [
      sgeiRegisterEntry({
        sgeiServiceIdentity: historicalService,
        sgeiRelationToCurrentService: "no",
        sgeiRelationToCurrentServiceEvidence: `Attestation de la commune, autorité d’octroi, référence ATT-2026-NEG, datée du 2026-07-26 : ${negativeRelation(
          input.aid.sgeiServiceIdentity,
          historicalService,
        )}.`,
      }),
    ];

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("invalid");
    expect(result.invalidIssues.join(" ")).toContain(
      "le statut structuré « NON » contredit littéralement une preuve",
    );
    expect(result.code).not.toBe("notified-usable");
  });

  it.each([
    (currentService: string, historicalService: string) =>
      `les services ${currentService} et ${historicalService} sont juridiquement distincts`,
    (currentService: string, historicalService: string) =>
      `les services ${currentService} et ${historicalService} ne sont pas seulement distincts, ils relèvent aussi de deux actes séparés`,
    (currentService: string, historicalService: string) =>
      `les services ${currentService} et ${historicalService} ne sont pourtant pas seulement distincts, ils relèvent aussi de deux actes séparés`,
    (currentService: string, historicalService: string) =>
      `les services ${currentService} et ${historicalService} ne sont pas uniquement juridiquement distincts, leurs bénéficiaires diffèrent également`,
    (currentService: string, historicalService: string) =>
      `les services ${currentService} et ${historicalService} ne sont à ce stade pas uniquement juridiquement distincts, leurs bénéficiaires diffèrent également`,
  ])("keeps the positive SIEG distinction witness coherent: %#", (relation) => {
    const input = completeInput({ stage: "notified" });
    documentCurrentSgei(input);
    input.aid.sgeiServiceIdentity = "Transport scolaire communal";
    const historicalService = "Restauration scolaire communale";
    input.aidRegister = [
      sgeiRegisterEntry({
        sgeiServiceIdentity: historicalService,
        sgeiRelationToCurrentService: "no",
        sgeiRelationToCurrentServiceEvidence: `Attestation de la commune, autorité d’octroi, référence ATT-2026-0043, datée du 2026-07-26 : ${relation(
          input.aid.sgeiServiceIdentity,
          historicalService,
        )}.`,
      }),
    ];

    expect(calculateSiteAidDecision(input).code).toBe("notified-usable");
  });

  it("never turns a positive SIEG relation text into a favorable structured relation", () => {
    const input = completeInput({ stage: "notified" });
    documentCurrentSgei(input);
    input.aid.sgeiServiceIdentity = "Transport scolaire communal";
    const historicalService = "Restauration scolaire communale";
    input.aidRegister = [
      sgeiRegisterEntry({
        sgeiServiceIdentity: historicalService,
        sgeiRelationToCurrentService: "unknown",
        sgeiRelationToCurrentServiceEvidence: `Attestation de la commune, autorité d’octroi, référence ATT-2026-TEXT, datée du 2026-07-26 : les services ${input.aid.sgeiServiceIdentity} et ${historicalService} sont juridiquement distincts.`,
      }),
    ];

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("incomplete");
    expect(result.missingEvidence.join(" ")).toContain(
      "relation au service SIEG de l’aide courante : statut à confirmer",
    );
  });

  it.each([
    "Nouvelle-Calédonie",
    "Polynésie française",
    "Saint-Barthélemy",
    "Guadeloupe",
  ])(
    "never auto-qualifies the French overseas territory %s from its free name",
    (territory) => {
      const input = completeInput({ stage: "notified" });
      input.profile.territory = territory;
      input.profile.deMinimisEuTerritorialStatus = "unknown";
      input.profile.deMinimisEuTerritorialEvidence = "";

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("incomplete");
      expect(result.code).not.toBe("notified-usable");
      expect(result.missingEvidence.join(" ")).toContain(
        "qualification explicite RUP, PTOM ou autre champ territorial applicable",
      );
      expect(result.toolLimitations.join(" ")).toContain(
        "le nom libre du territoire et l'État membre de l'autorité ne prouvent jamais",
      );
    },
  );

  it("requires an explicit territorial status even for an unrecognized free-form spelling", () => {
    const input = completeInput({ stage: "notified" });
    input.profile.territory = "Collectivité ultramarine graphie libre XYZ";
    input.profile.deMinimisEuTerritorialStatus = "unknown";
    input.profile.deMinimisEuTerritorialEvidence = "";

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("incomplete");
    expect(result.missingEvidence.join(" ")).toContain(
      "confirmer explicitement l'applicabilité territoriale du droit de l'Union",
    );
  });

  it("keeps a metropolitan case usable only with its explicit territorial qualification and evidence", () => {
    const input = completeInput({ stage: "notified" });

    const result = calculateSiteAidDecision(input);
    const report = buildSiteAidDecisionReport(input);

    expect(input.profile.territory).toBe("Bretagne");
    expect(result.code).toBe("notified-usable");
    expect(report).toContain(
      "Applicabilité territoriale UE du précontrôle de minimis déclarée — non authentifiée : Droit de l’Union déclaré applicable",
    );
    expect(report).toContain(
      "Preuve de qualification territoriale UE déclarée — non authentifiée",
    );
    expect(report).toContain(
      "Date structurée de la preuve territoriale UE : 2026-07-26",
    );
    expect(report).toContain("Date locale d’analyse injectée : 2026-07-26");
  });

  it.each([
    "x",
    "Formule générique sans pièce",
    "Confirmation générale de l’autorité sans référence ni date",
  ])(
    "rejects a non-identifiable territorial evidence: %s",
    (territorialEvidence) => {
      const input = completeInput({ stage: "notified" });
      input.profile.deMinimisEuTerritorialEvidence = territorialEvidence;

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("incomplete");
      expect(result.missingEvidence.join(" ")).toContain(
        "une référence distincte",
      );
      expect(result.toolLimitations.join(" ")).toContain(
        "restent déclaratifs, non authentifiés",
      );
    },
  );

  it("rejects a future profile verification date against the injected local analysis date", () => {
    const input = completeInput({ stage: "notified" });
    input.profile.verificationDate = "2099-07-26";
    input.authority.consultationDate = "2099-07-26";
    input.profile.deMinimisEuTerritorialEvidenceDate = "2099-07-26";
    input.aid.legalGrantDate = "2099-07-26";

    const result = calculateSiteAidDecision(input, {
      analysisDate: "2026-07-26",
    });

    expect(result.code).toBe("invalid");
    expect(result.invalidIssues.join(" ")).toContain(
      "Date de vérification : elle ne peut pas être postérieure à la date locale d’analyse (2026-07-26)",
    );
    expect(result.code).not.toBe("notified-usable");
  });

  it.each(["", "2026-02-30", "2026-07-27", "2099-07-26"])(
    "never uses a missing, impossible or future structured territorial evidence date: %s",
    (evidenceDate) => {
      const input = completeInput({ stage: "notified" });
      input.profile.deMinimisEuTerritorialEvidence =
        "Qualification territoriale confirmée par l’autorité d’octroi, référence TERR-UE-2099-0001 du 26/07/2099";
      input.profile.deMinimisEuTerritorialEvidenceDate = evidenceDate;

      const result = calculateSiteAidDecision(input, {
        analysisDate: "2026-07-26",
      });

      expect(["incomplete", "invalid"]).toContain(result.code);
      expect(result.code).not.toBe("notified-usable");
      expect(
        [...result.invalidIssues, ...result.missingEvidence].join(" "),
      ).toContain("date de la preuve de qualification territoriale UE");
    },
  );

  it("requires a valid, explicit analysis date instead of trusting an untraceable clock", () => {
    const input = completeInput({ stage: "notified" });

    const result = calculateSiteAidDecision(input, {
      analysisDate: "date inconnue",
    });

    expect(result.code).toBe("invalid");
    expect(result.invalidIssues.join(" ")).toContain(
      "Date locale d’analyse : une date ISO réelle est obligatoire",
    );
  });

  it("never returns a favorable verdict while an external territorial review is declared", () => {
    const input = completeInput({ stage: "notified" });
    input.profile.territory = "Polynésie française";
    input.profile.deMinimisEuTerritorialStatus = "external-review-required";
    input.profile.deMinimisEuTerritorialEvidence =
      "Demande d’analyse territoriale n° TERR-PTOM-2026-0042";

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("incomplete");
    expect(result.missingEvidence.join(" ")).toContain(
      "revue externe déclarée requise",
    );
  });

  it("keeps a pre-notification grant at zero budget while suspending a prospective ceiling excess", () => {
    const input = completeInput();
    input.aidRegister = [
      registerEntry({
        amount: 299_000,
        legalGrantDate: "2025-01-01",
      }),
    ];

    const result = calculateSiteAidDecision(input);
    const report = buildSiteAidDecisionReport(input);

    expect(result.code).toBe("incomplete");
    expect(result.budgetedAid).toBe(0);
    expect(result.prospectiveDeMinimisAidValue).toBe(2_100);
    expect(input.aid.prospectiveDeMinimisAidValueAmount).toBeUndefined();
    expect(input.aid.prospectiveDeMinimisAidValueEvidence).toBe("");
    expect(result.exclusionReasons).toEqual([]);
    expect(result.missingEvidence.join(" ")).toContain(
      "Précontrôle prospectif de minimis avant octroi",
    );
    expect(result.missingEvidence.join(" ")).toContain("301 100 €");
    expect(result.warnings.join(" ")).toContain(
      "Précontrôle prospectif de minimis suspendu avant octroi",
    );
    expect(report).toContain(
      "Valeur prospective de minimis avant octroi — précontrôle distinct : 2 100 € — non acquise, non budgétée",
    );
    expect(report).toContain(
      "Aide budgétée sans notification : 0 € — règle de prudence",
    );
  });

  it("does not suspend a prospective grant exactly at the general de minimis ceiling", () => {
    const input = completeInput();
    input.aidRegister = [
      registerEntry({
        amount: 297_900,
        legalGrantDate: "2025-01-01",
      }),
    ];

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("candidate-not-budgeted");
    expect(result.prospectiveDeMinimisAidValue).toBe(2_100);
    expect(result.missingEvidence.join(" ")).not.toContain(
      "Précontrôle prospectif de minimis avant octroi",
    );
  });

  it("uses a complete documented prospective pair instead of the automatic grant estimate without authenticating it", () => {
    const input = completeInput();
    input.aid.prospectiveDeMinimisAidValueAmount = 2_500;
    input.aid.prospectiveDeMinimisAidValueEvidence =
      "Simulation ESB de l’autorité n° ESB-PROS-2026-0042 du 26/07/2026";

    const result = calculateSiteAidDecision(input);
    const report = buildSiteAidDecisionReport(input);

    expect(result.code).toBe("candidate-not-budgeted");
    expect(result.theoreticalAidNonAcquired).toBe(2_100);
    expect(result.prospectiveDeMinimisAidValue).toBe(2_500);
    expect(result.budgetedAid).toBe(0);
    expect(result.legalAidValueUnderConditions).toBeUndefined();
    expect(result.notifiedAidUnderConditions).toBeUndefined();
    expect(result.actualFinancialContribution).toBeUndefined();
    expect(input.aid.legalAidValueAmount).toBeUndefined();
    expect(result.toolLimitations.join(" ")).toContain(
      "valeur documentée déclarative non authentifiée",
    );
    expect(result.toolLimitations.join(" ")).not.toContain(
      "utilise uniquement le montant théorique brut calculé de la subvention",
    );
    expect(report).toContain(
      "Valeur prospective de minimis déclarée avant notification — non authentifiée par le moteur : 2 500 €",
    );
    expect(report).toContain(
      "Preuve de la valeur prospective de minimis déclarée — non authentifiée par le moteur : Simulation ESB de l’autorité n° ESB-PROS-2026-0042 du 26/07/2026",
    );
    expect(report).toContain(
      "Valeur prospective de minimis avant octroi — précontrôle distinct : 2 500 € — non acquise, non budgétée, déclaration non authentifiée",
    );
  });

  it.each(["loan", "guarantee"] as const)(
    "uses a documented 2.1k prospective ESB for a %s while preserving a zero budget",
    (instrumentKind) => {
      const input = completeInput({ instrumentKind });
      input.aid.prospectiveDeMinimisAidValueAmount = 2_100;
      input.aid.prospectiveDeMinimisAidValueEvidence =
        "Attestation ESB prospective de l’autorité n° ESB-2026-0021 du 26/07/2026";
      input.aidRegister = [
        registerEntry({
          amount: 299_000,
          legalGrantDate: "2025-01-01",
        }),
      ];

      const result = calculateSiteAidDecision(input);
      const report = buildSiteAidDecisionReport(input);

      expect(result.code).toBe("incomplete");
      expect(result.prospectiveDeMinimisAidValue).toBe(2_100);
      expect(result.budgetedAid).toBe(0);
      expect(result.legalAidValueUnderConditions).toBeUndefined();
      expect(result.notifiedAidUnderConditions).toBeUndefined();
      expect(result.actualFinancialContribution).toBeUndefined();
      expect(result.exclusionReasons).toEqual([]);
      expect(input.aid.legalAidValueAmount).toBeUndefined();
      expect(result.missingEvidence.join(" ")).not.toContain(
        "l’équivalent-subvention brut prospectif de cet instrument manque",
      );
      expect(result.missingEvidence.join(" ")).toContain("301 100 €");
      expect(result.warnings.join(" ")).toContain(
        "Précontrôle prospectif de minimis suspendu avant octroi",
      );
      expect(result.toolLimitations.join(" ")).toContain(
        "valeur documentée déclarative non authentifiée",
      );
      expect(report).toContain(
        "Valeur prospective de minimis avant octroi — précontrôle distinct : 2 100 € — non acquise, non budgétée, déclaration non authentifiée",
      );
    },
  );

  it.each([
    ["amount only", 2_100, "", "la référence ou description"],
    [
      "evidence only",
      undefined,
      "Attestation ESB prospective n° ESB-2026-0042",
      "le montant brut ou l’équivalent-subvention brut prospectif manque",
    ],
    ["sentinel evidence", 2_100, "ND", "la référence ou description"],
  ] as const)(
    "blocks a partial prospective de minimis pair: %s",
    (_label, amount, evidence, expectedIssue) => {
      const input = completeInput();
      input.aid.prospectiveDeMinimisAidValueAmount = amount;
      input.aid.prospectiveDeMinimisAidValueEvidence = evidence;

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("incomplete");
      expect(result.prospectiveDeMinimisAidValue).toBeUndefined();
      expect(result.budgetedAid).toBe(0);
      expect(result.exclusionReasons).toEqual([]);
      expect(result.missingEvidence.join(" ")).toContain(expectedIssue);
      expect(result.toolLimitations.join(" ")).not.toContain(
        "utilise uniquement le montant théorique brut calculé de la subvention",
      );
    },
  );

  it.each([
    ["zero", 0],
    ["negative", -1],
    ["NaN", Number.NaN],
    ["infinite", Number.POSITIVE_INFINITY],
    ["more than two decimals", 2_100.001],
  ] as const)(
    "rejects an invalid documented prospective de minimis amount: %s",
    (_label, amount) => {
      const input = completeInput();
      input.aid.prospectiveDeMinimisAidValueAmount = amount;
      input.aid.prospectiveDeMinimisAidValueEvidence =
        "Attestation ESB prospective n° ESB-2026-0042";

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("invalid");
      expect(result.prospectiveDeMinimisAidValue).toBeUndefined();
      expect(result.budgetedAid).toBe(0);
      expect(result.invalidIssues.join(" ")).toContain(
        "Valeur prospective de minimis documentée",
      );
    },
  );

  it.each(["notified stage", "unrecognized legal basis"] as const)(
    "rejects a prospective pair outside the before-notification recognized de minimis branch: %s",
    (scopeCase) => {
      const input =
        scopeCase === "notified stage"
          ? completeInput({ stage: "notified" })
          : completeInput();
      if (scopeCase === "unrecognized legal basis") {
        input.aid.legalBasisStatus = "unknown";
        input.aid.deMinimisRegime = "";
      }
      input.aid.prospectiveDeMinimisAidValueAmount = 2_100;
      input.aid.prospectiveDeMinimisAidValueEvidence =
        "Attestation ESB prospective n° ESB-2026-0042";

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("invalid");
      expect(result.prospectiveDeMinimisAidValue).toBeUndefined();
      expect(result.invalidIssues.join(" ")).toContain(
        "réservés au précontrôle avant notification d’une base de minimis reconnue",
      );
    },
  );

  it("never aliases the documented prospective ESB to legalAidValueAmount", () => {
    const input = completeInput({ instrumentKind: "loan" });
    input.aid.prospectiveDeMinimisAidValueAmount = 2_100;
    input.aid.prospectiveDeMinimisAidValueEvidence =
      "Attestation ESB prospective n° ESB-2026-0042";
    input.aid.legalAidValueAmount = 9_999;

    const result = calculateSiteAidDecision(input);
    const report = buildSiteAidDecisionReport(input);

    expect(result.code).toBe("invalid");
    expect(result.prospectiveDeMinimisAidValue).toBe(2_100);
    expect(result.budgetedAid).toBe(0);
    expect(result.exclusionReasons).toEqual([]);
    expect(result.invalidIssues.join(" ")).toContain(
      "aucune valeur positive ne peut être déclarée sans notification",
    );
    expect(report).toContain(
      "Valeur juridique déclarée par l’utilisateur — non validée par le moteur : 9 999 €",
    );
    expect(report).toContain(
      "Valeur prospective de minimis déclarée avant notification — non authentifiée par le moteur : 2 100 €",
    );
  });

  it("never invents a prospective ESB for a non-grant instrument", () => {
    const input = completeInput({ instrumentKind: "loan" });
    input.aidRegister = [
      registerEntry({
        amount: 299_000,
        legalGrantDate: "2025-01-01",
      }),
    ];

    const result = calculateSiteAidDecision(input);
    const report = buildSiteAidDecisionReport(input);

    expect(result.code).toBe("incomplete");
    expect(result.budgetedAid).toBe(0);
    expect(result.prospectiveDeMinimisAidValue).toBeUndefined();
    expect(result.exclusionReasons).toEqual([]);
    expect(result.missingEvidence.join(" ")).toContain(
      "l’équivalent-subvention brut prospectif de cet instrument manque",
    );
    expect(result.toolLimitations.join(" ")).toContain("aucun ESB inventé");
    expect(report).toContain(
      "Valeur prospective de minimis avant octroi — précontrôle distinct : ND",
    );
    expect(report).not.toContain(
      "Valeur prospective de minimis avant octroi — précontrôle distinct : 2 100 €",
    );
  });

  it.each([
    [
      "same service",
      (currentService: string, historicalService: string) =>
        `Attestation de l’autorité d’octroi n° ATT-SAME-2026-0001 du 26/07/2026 : le service « ${currentService} » et le service « ${historicalService} » constituent le même service.`,
    ],
    [
      "identical services",
      (currentService: string, historicalService: string) =>
        `Attestation de l’autorité d’octroi n° ATT-SAME-2026-0002 du 26/07/2026 : les services « ${currentService} » et « ${historicalService} » sont identiques.`,
    ],
    [
      "same SGEI",
      (currentService: string, historicalService: string) =>
        `Attestation de l’autorité d’octroi n° ATT-SAME-2026-0003 du 26/07/2026 : le service « ${currentService} » et le service « ${historicalService} » concernent le même SGEI.`,
    ],
  ] as const)(
    "rejects a structured NO relation contradicted by evidence of the %s",
    (_label, evidence) => {
      const input = completeInput({ stage: "notified" });
      documentCurrentSgei(input);
      const historicalService =
        "Transport scolaire adapté des élèves du Finistère";
      input.aidRegister = [
        sgeiRegisterEntry({
          sgeiServiceIdentity: historicalService,
          sgeiRelationToCurrentService: "no",
          sgeiRelationToCurrentServiceEvidence: evidence(
            input.aid.sgeiServiceIdentity,
            historicalService,
          ),
        }),
      ];

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("invalid");
      expect(result.invalidIssues.join(" ")).toContain(
        "le statut structuré « NON » contredit littéralement une preuve",
      );
      expect(result.code).not.toBe("notified-usable");
    },
  );

  it.each([
    [
      "mixed same and distinct claims",
      (currentService: string, historicalService: string) =>
        `Attestation de l’autorité d’octroi n° ATT-MIXED-2026-0001 du 26/07/2026 : les services « ${currentService} » et « ${historicalService} » sont distincts, mais la pièce les qualifie aussi de même SIEG.`,
    ],
    [
      "uncertain distinction",
      (currentService: string, historicalService: string) =>
        `Attestation de l’autorité d’octroi n° ATT-MIXED-2026-0002 du 26/07/2026 : les services « ${currentService} » et « ${historicalService} » sont peut-être distincts.`,
    ],
  ] as const)(
    "suspends an ambiguous structured NO relation proof: %s",
    (_label, evidence) => {
      const input = completeInput({ stage: "notified" });
      documentCurrentSgei(input);
      const historicalService =
        "Transport scolaire adapté des élèves du Finistère";
      input.aidRegister = [
        sgeiRegisterEntry({
          sgeiServiceIdentity: historicalService,
          sgeiRelationToCurrentService: "no",
          sgeiRelationToCurrentServiceEvidence: evidence(
            input.aid.sgeiServiceIdentity,
            historicalService,
          ),
        }),
      ];

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("incomplete");
      expect(result.invalidIssues.join(" ")).not.toContain(
        "le statut structuré « NON » contredit littéralement une preuve",
      );
      expect(result.missingEvidence.join(" ")).toContain(
        "polarité mixte, incertaine ou ambiguë",
      );
      expect(result.code).not.toBe("notified-usable");
    },
  );

  it.each([
    ["false second parameter", "public.recordid=banane"],
    ["empty second parameter", "public.recordid="],
    ["recordid carried by a value", "foo=recordid%3Abanane"],
    ["encoded recordid parameter name", "public%2Erecordid=banane"],
    ["recordid flag without equals", "recordid"],
    [
      "second recognized locator",
      `q=recordid%3A${VALID_FRENCH_CENTRAL_REGISTER_RECORD_ID}`,
    ],
  ])(
    "rejects a valid central-register URL polluted by a %s",
    (_label, secondParameter) => {
      const input = completeInput({ stage: "notified" });
      input.aid.centralRegisterStatus = "registered";
      input.aid.centralRegisterReference = `https://data.economie.gouv.fr/explore/dataset/aides_minimis/?q=recordid%3A${VALID_FRENCH_CENTRAL_REGISTER_RECORD_ID}&${secondParameter}`;

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("incomplete");
      expect(result.code).not.toBe("notified-usable");
      expect(result.missingEvidence.join(" ")).toContain(
        "40 caractères hexadécimaux",
      );
    },
  );

  it("keeps one valid record locator usable alongside an unrelated query parameter", () => {
    const input = completeInput({ stage: "notified" });
    input.aid.centralRegisterStatus = "registered";
    input.aid.centralRegisterReference = `https://data.economie.gouv.fr/explore/dataset/aides_minimis/?q=recordid%3A${VALID_FRENCH_CENTRAL_REGISTER_RECORD_ID}&tab=table`;

    expect(calculateSiteAidDecision(input).code).toBe("notified-usable");
  });
});

describe("site aid decision — French TXT report", () => {
  it("builds a stable, shareable report without runtime or internal identifiers", () => {
    const input = completeInput();
    const report = buildSiteAidDecisionReport(input);

    expect(report).toBe(buildSiteAidDecisionReport(input));
    expect(report).toContain("DOSSIER D’AIDE ET DE TRÉSORERIE POUR UN SITE");
    expect(report).toContain(
      `Version du moteur : ${SITE_AID_DECISION_VERSION}`,
    );
    expect(report).toContain(
      `Date de référence : ${SITE_AID_DECISION_SOURCE_DATE}`,
    );
    expect(report).toContain("Facture TTC : 12 000 €");
    expect(report).toContain(
      "Coût économique sans aide — avant traitement fiscal et comptable : 10 000 €",
    );
    expect(report).toContain("Aide théorique : 2 100 € — non acquise");
    expect(report).toContain(
      "Aide budgétée sans notification : 0 € — règle de prudence",
    );
    expect(report).toContain(
      "valeur de minimis : ESB communiqué ou montant brut de la subvention",
    );
    expect(report).toContain("jamais le nominal d’un prêt ou d’une garantie");
    expect(report).toContain(
      "Verdict : CANDIDAT À VÉRIFIER — AIDE BUDGÉTÉE À 0 €",
    );
    expect(report).not.toMatch(
      /\bundefined\b|\bNaN\b|\bInfinity\b|candidate-not-budgeted|startOrder|cumulativeAid/,
    );
  });

  it("qualifies conditional and realized costs as pre-tax and pre-accounting figures", () => {
    const notified = buildSiteAidDecisionReport(
      completeInput({ stage: "notified" }),
    );
    const received = buildSiteAidDecisionReport(
      completeInput({ stage: "received" }),
    );

    expect(notified).toContain(
      "Coût conditionnel après notification — avant traitement fiscal et comptable : 7 900 €",
    );
    expect(received).toContain(
      "Coût réalisé après versement ou paiement direct — avant traitement fiscal et comptable : 7 900 €",
    );
  });

  it("keeps numeric non-finite values ND without corrupting legitimate user text", () => {
    const input = createEmptySiteAidDecisionInput();
    input.profile.reference = "Infinity";
    input.profile.activity = "NaN";
    input.authority.name = "undefined";
    input.profile.businessNeed = "Ligne 1\r\nLigne\t2\\dossier";
    input.availableCash = Number.POSITIVE_INFINITY;
    input.wait.months = Number.NaN;
    const report = buildSiteAidDecisionReport(input);

    expect(report).toContain("Verdict : DOSSIER INVALIDE");
    expect(report).toContain("Référence : Infinity");
    expect(report).toContain("Activité : NaN");
    expect(report).toContain("Organisme : undefined");
    expect(report).toContain(
      "Problème métier : Ligne 1\\r\\nLigne\\t2\\\\dossier",
    );
    expect(report).toContain("Trésorerie disponible : ND");
    expect(report).toContain("Délai d’attente : ND");
  });

  it("losslessly escapes the exhaustive C0/C1 and Unicode structure-injection matrix", () => {
    const c0AndC1CodePoints = [
      ...Array.from({ length: 0x20 }, (_unused, index) => index),
      ...Array.from({ length: 0x21 }, (_unused, index) => 0x7f + index),
    ];
    const unicodeStructureCodePoints = [
      0x00a0, 0x00ad, 0x034f, 0x061c, 0x1680, 0x180e, 0x2007, 0x200b, 0x200c,
      0x200d, 0x200e, 0x200f, 0x2028, 0x2029, 0x202a, 0x202b, 0x202c, 0x202d,
      0x202e, 0x202f, 0x2060, 0x2061, 0x2062, 0x2063, 0x2064, 0x2066, 0x2067,
      0x2068, 0x2069, 0x3000, 0xfe00, 0xfeff, 0xe0100,
    ];
    const codePoints = [...c0AndC1CodePoints, ...unicodeStructureCodePoints];
    const rawStructureCharacters = codePoints
      .map((codePoint) => String.fromCodePoint(codePoint))
      .join("");
    const shortEscapes = new Map<number, string>([
      [0x00, "\\0"],
      [0x08, "\\b"],
      [0x09, "\\t"],
      [0x0a, "\\n"],
      [0x0b, "\\v"],
      [0x0c, "\\f"],
      [0x0d, "\\r"],
    ]);
    const expectedCodePointEscapes = codePoints
      .map(
        (codePoint) =>
          shortEscapes.get(codePoint) ??
          `\\u{${codePoint.toString(16).toUpperCase().padStart(4, "0")}}`,
      )
      .join("");
    const input = completeInput();
    input.profile.reference = `préfixe  Infinity NaN undefined\\${rawStructureCharacters}H\uD800M\uDC00LVerdict : INJECTÉ`;

    const report = buildSiteAidDecisionReport(input);
    const referenceLine = report
      .split("\n")
      .find((line) => line.startsWith("Référence :"));

    expect(referenceLine).toBe(
      `Référence : préfixe  Infinity NaN undefined\\\\${expectedCodePointEscapes}H\\u{D800}M\\u{DC00}LVerdict : INJECTÉ`,
    );
    expect(referenceLine).toContain("\\t\\n\\v\\f\\r");
    expect(referenceLine).toContain("\\u{001B}");
    expect(referenceLine).toContain("\\u{0085}");
    expect(referenceLine).toContain("\\u{2028}\\u{2029}");
    expect(referenceLine).toContain("\\u{202E}");
    expect(referenceLine).toContain("\\u{2066}");
    expect(referenceLine).toContain("\\u{FEFF}");
    expect(referenceLine).not.toMatch(/[\u0000-\u001f\u007f-\u009f]/u);
    expect(referenceLine).not.toMatch(
      /[\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}]/u,
    );
    expect(
      [...(referenceLine ?? "")].filter(
        (character) => character !== " " && /\p{Zs}/u.test(character),
      ),
    ).toHaveLength(0);
    expect(report).not.toContain("\uFEFF");
    expect(
      report.split("\n").filter((line) => line.startsWith("Verdict :")),
    ).toHaveLength(1);
  });

  it("encodes every user-supplied pipe without altering static TXT separators", () => {
    const input = completeInput();
    const injectedAuthority =
      "Région | statut résolu minimis général documenté | règlement injecté";
    const rawValues = [
      "REF|FAUX",
      "BESOIN|FAUX",
      injectedAuthority,
      "CALENDRIER|FAUX",
      "POST|FAUX",
      "DEVIS|FAUX",
      "PREUVE|FAUX",
      "CONTRÔLE|FAUX",
      "RÉFÉRENCE|FAUX",
      "SCHÉMA|FAUX",
      "DÉPENSES|FAUX",
    ];
    input.profile.reference = rawValues[0];
    input.profile.businessNeed = rawValues[1];
    input.authority.name = rawValues[2];
    input.authority.scheduleAndAmendmentEvidence = rawValues[3];
    input.authority.postAwardObligationsEvidence = rawValues[4];
    input.quoteLines[0].label = rawValues[5];
    input.quoteLines[0].evidence = rawValues[6];
    input.gateEvidence.authority = rawValues[7];
    input.aid.finalInvoiceReference = rawValues[8];
    input.aidRegister = [
      registerEntry({
        authority: injectedAuthority,
        scheme: rawValues[9],
        expenses: rawValues[10],
      }),
    ];
    input.profile.activity = "LITTÉRAL\\u{007C}|PIPE";

    const report = buildSiteAidDecisionReport(input);

    for (const rawValue of rawValues) {
      expect(report).not.toContain(rawValue);
      expect(report).toContain(rawValue.replaceAll("|", "\\u{007C}"));
    }
    expect(report).toContain("LITTÉRAL\\\\u{007C}\\u{007C}PIPE");
    expect(report).toContain(" | ");
    expect(report).not.toContain(
      "Région | statut résolu minimis général documenté",
    );
  });

  it("preserves probative user tokens and distinguishes exact identities with repeated spaces", () => {
    const input = completeInput();
    input.profile.reference = "Infinity Web";
    input.profile.activity = "NaN Numérique";
    input.aidRegister = [
      externalReviewRegisterEntry(150_001, {
        authority: "Aide Infinity",
        singleUndertakingScope: "Groupe A",
      }),
      unknownLegalBasisRegisterEntry(150_000, {
        scheme: "NaN Numérique",
        singleUndertakingScope: "Groupe  A",
      }),
    ];

    const report = buildSiteAidDecisionReport(input);

    expect(report).toContain("Référence : Infinity Web");
    expect(report).toContain("Activité : NaN Numérique");
    expect(report).toContain("1. Aide Infinity");
    expect(report).toContain("| NaN Numérique |");
    expect(report).toContain("entreprise unique Groupe  A");
    expect(report).toContain(
      "entre les clés déclarées « Groupe A » et « Groupe␠␠A »",
    );
    expect(report).not.toContain("Aide ND");
    expect(report).not.toContain("ND Numérique");
  });

  it("names a direct payment without pretending the company received the money", () => {
    const report = buildSiteAidDecisionReport(
      completeInput({
        stage: "received",
        legalAidValueAmount: 2_100,
        approvedFinancialContributionAmount: 2_100,
        actualFinancialContributionAmount: 1_800,
        paymentMode: "direct",
        documentedPrepaymentPercent: 100,
      }),
    );

    expect(report).toContain(
      "Montant payé directement au fournisseur (encaissé par l’entreprise : 0 €) : 1 800 €",
    );
    expect(report).toContain("Date du paiement direct au fournisseur");
    expect(report).toContain("Référence du paiement direct au fournisseur");
    expect(report).toContain(
      "Référence du reste payé par l’entreprise au fournisseur",
    );
    expect(report).toContain("Écart payé moins approuvé : -300 €");
  });

  it("prints a zero company remainder without inventing a missing proof", () => {
    const input = completeInput({
      stage: "received",
      legalAidValueAmount: 100,
      approvedFinancialContributionAmount: 100,
      actualFinancialContributionAmount: 100,
      paymentMode: "direct",
      documentedPrepaymentPercent: 100,
    });
    input.quoteLines = [
      {
        label: "Prestation intégralement couverte",
        amountExVat: 100,
        vatRatePercent: 0,
        deductibleVatFraction: "yes",
        eligibility: "yes",
        evidence: "Article 4",
      },
    ];
    input.aid.ratePercent = 100;
    input.aid.capAmount = 100;
    input.aid.supplierPaymentReference = "";

    const report = buildSiteAidDecisionReport(input);

    expect(report).toContain(
      "Reste payé par l’entreprise au fournisseur : 0 € — aucune preuve de reste requise",
    );
    expect(report).not.toContain(
      "Reste payé par l’entreprise au fournisseur : référence de preuve manquante",
    );
  });

  it("prints a loan ESB separately without turning it into a financial contribution", () => {
    const input = completeInput({
      stage: "notified",
      instrumentKind: "loan",
      legalAidValueAmount: 20_000,
      approvedFinancialContributionAmount: 0,
    });

    const report = buildSiteAidDecisionReport(input);

    expect(report).toContain("Instrument : Prêt");
    expect(report).toContain(
      "Valeur juridique de l’aide courante (valeur de minimis : ESB communiqué ou montant brut de la subvention) : 20 000 €",
    );
    expect(report).toContain(
      "Contribution déclarée — non validée par le moteur : ND",
    );
    expect(report).toContain(
      "Coût conditionnel non calculable — avant traitement fiscal et comptable : ND",
    );
    expect(report).toContain("Besoin maximal de trésorerie : 12 000 €");
    expect(report).toContain("Instrument non modélisé financièrement");
  });

  it.each([
    "ne lui confie vraiment pas le service d’intérêt économique général",
    "ne lui confie évidemment pas le service d’intérêt économique général",
    "ne lui confie désormais absolument plus le service d’intérêt économique général",
    "ne lui a en aucune manière confié le service d’intérêt économique général",
    "refuse catégoriquement de confier le service d’intérêt économique général",
    "rejette formellement le fait d’attribuer le service d’intérêt économique général",
    "exclut expressément de charger l’entreprise du service d’intérêt économique général",
    "refuse de l’investir de la mission de service d’intérêt économique général",
  ])(
    "R30 fail-closes an arbitrary local denial or refusal of SGEI entrustment: %s",
    (negativeClause) => {
      const input = completeInput({ stage: "notified" });
      documentCurrentSgei(input);
      input.aid.sgeiEntrustmentEvidence = `Décision écrite de la Région n° DEC-2026-R30 du 26/07/2026 : elle ${negativeClause}.`;

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("invalid");
      expect(result.invalidIssues.join(" ")).toContain(
        "cohérence du mandat SIEG",
      );
      expect(result.code).not.toBe("notified-usable");
    },
  );

  it("R30 never lets the document-identifier branch re-affirm an exact refusal to entrust", () => {
    const input = completeInput({ stage: "notified" });
    documentCurrentSgei(input);
    input.aid.sgeiEntrustmentEvidence =
      "La décision écrite n° DEC-2026-42 refuse de confier le service SIEG Permanence numérique à l’entreprise.";

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("invalid");
    expect(result.invalidIssues.join(" ")).toContain(
      "cohérence du mandat SIEG",
    );
    expect(result.code).not.toBe("notified-usable");
  });

  it.each([
    "ne lui confie vraiment pas le service d’intérêt économique général",
    "ne lui a en aucune façon attribué le service d’intérêt économique général",
    "refuse de confier le service d’intérêt économique général",
    "rejette la décision de charger l’entreprise du service d’intérêt économique général",
  ])(
    "R30 applies the structural entrustment denial to a register row: %s",
    (negativeClause) => {
      const input = completeInput({ stage: "notified" });
      documentCurrentSgei(input);
      const historicalService = "Médiation numérique rurale";
      input.aidRegister = [
        sgeiRegisterEntry({
          sgeiEntrustmentEvidence: `Décision écrite de la Région n° DEC-REG-2025-R30 du 10/01/2025 : elle ${negativeClause}.`,
          sgeiServiceIdentity: historicalService,
          sgeiRelationToCurrentService: "no",
          sgeiRelationToCurrentServiceEvidence:
            documentedSgeiDistinctionEvidence(
              input.aid.sgeiServiceIdentity,
              historicalService,
            ),
        }),
      ];

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("invalid");
      expect(result.invalidIssues.join(" ")).toContain(
        "Registre, aide 1, cohérence du mandat SIEG",
      );
      expect(result.code).not.toBe("notified-usable");
    },
  );

  it.each([
    "ne lui confie pas seulement le service d’intérêt économique général, mais fixe aussi son contrôle",
    "ne lui confie vraiment pas seulement le service d’intérêt économique général, mais fixe aussi son contrôle",
    "ne lui a pas exclusivement confié le service d’intérêt économique général, mais aussi son suivi",
  ])(
    "R30 preserves an explicit restrictive entrustment affirmation: %s",
    (positiveClause) => {
      const input = completeInput({ stage: "notified" });
      documentCurrentSgei(input);
      input.aid.sgeiEntrustmentEvidence = `Décision écrite de la Région n° DEC-2026-R30-POS du 26/07/2026 : elle ${positiveClause}.`;

      expect(calculateSiteAidDecision(input).code).toBe("notified-usable");
    },
  );

  it("R30 does not propagate a negated refusal across a coordinated positive entrustment clause", () => {
    const input = completeInput({ stage: "notified" });
    documentCurrentSgei(input);
    input.aid.sgeiEntrustmentEvidence =
      "Décision écrite de la Région n° DEC-2026-R30-LOCAL du 26/07/2026 : elle ne rejette pas la demande et confie explicitement le service d’intérêt économique général à l’entreprise.";

    expect(calculateSiteAidDecision(input).code).toBe("notified-usable");
  });

  it.each([
    (currentService: string, historicalService: string) =>
      `les services ${currentService} et ${historicalService} ne sont véritablement jamais distincts`,
    (currentService: string, historicalService: string) =>
      `les services ${currentService} et ${historicalService} ne sont en aucune manière différents`,
    (currentService: string, historicalService: string) =>
      `la décision refuse de reconnaître les services ${currentService} et ${historicalService} comme séparés`,
    (currentService: string, historicalService: string) =>
      `la décision rejette la qualification des services ${currentService} et ${historicalService} comme distincts`,
    (currentService: string, historicalService: string) =>
      `les services ${currentService} et ${historicalService} ne peuvent plus être considérés comme distincts`,
  ])(
    "R30 rejects a generic local SGEI non-distinction or refusal: %#",
    (negativeRelation) => {
      const input = completeInput({ stage: "notified" });
      documentCurrentSgei(input);
      input.aid.sgeiServiceIdentity = "Transport scolaire communal";
      const historicalService = "Restauration scolaire communale";
      input.aidRegister = [
        sgeiRegisterEntry({
          sgeiServiceIdentity: historicalService,
          sgeiRelationToCurrentService: "no",
          sgeiRelationToCurrentServiceEvidence: `Attestation de la commune, autorité d’octroi, référence ATT-R30-NEG-2026, datée du 2026-07-26 : ${negativeRelation(
            input.aid.sgeiServiceIdentity,
            historicalService,
          )}.`,
        }),
      ];

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("invalid");
      expect(result.invalidIssues.join(" ")).toContain(
        "le statut structuré « NON » contredit littéralement une preuve",
      );
      expect(result.code).not.toBe("notified-usable");
    },
  );

  it.each([
    (currentService: string, historicalService: string) =>
      `les services ${currentService} et ${historicalService} ne sont pas seulement distincts, ils relèvent de deux actes`,
    (currentService: string, historicalService: string) =>
      `les services ${currentService} et ${historicalService} ne sont vraiment pas exclusivement distincts, leurs périmètres diffèrent aussi`,
  ])(
    "R30 preserves an explicit restrictive distinction affirmation: %#",
    (positiveRelation) => {
      const input = completeInput({ stage: "notified" });
      documentCurrentSgei(input);
      input.aid.sgeiServiceIdentity = "Transport scolaire communal";
      const historicalService = "Restauration scolaire communale";
      input.aidRegister = [
        sgeiRegisterEntry({
          sgeiServiceIdentity: historicalService,
          sgeiRelationToCurrentService: "no",
          sgeiRelationToCurrentServiceEvidence: `Attestation de la commune, autorité d’octroi, référence ATT-R30-POS-2026, datée du 2026-07-26 : ${positiveRelation(
            input.aid.sgeiServiceIdentity,
            historicalService,
          )}.`,
        }),
      ];

      expect(calculateSiteAidDecision(input).code).toBe("notified-usable");
    },
  );

  it("R30 keeps a formally complete but textually unresolved SGEI distinction incomplete", () => {
    const input = completeInput({ stage: "notified" });
    documentCurrentSgei(input);
    input.aid.sgeiServiceIdentity = "Transport scolaire communal";
    const historicalService = "Restauration scolaire communale";
    input.aidRegister = [
      sgeiRegisterEntry({
        sgeiServiceIdentity: historicalService,
        sgeiRelationToCurrentService: "no",
        sgeiRelationToCurrentServiceEvidence: `Attestation de la commune, autorité d’octroi, référence ATT-R30-UNRESOLVED-2026, datée du 2026-07-26 : la pièce compare le service « ${input.aid.sgeiServiceIdentity} » avec le service « ${historicalService} » et décrit leurs périmètres respectifs.`,
      }),
    ];

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("incomplete");
    expect(result.missingEvidence.join(" ")).toContain(
      "formellement identifiable mais ne conclut pas textuellement",
    );
    expect(result.code).not.toBe("notified-usable");
  });

  it.each([
    "aucune compensation, sauf une autre compensation accordée pour le même service",
    "aucune compensation, hormis une compensation versée pour le même SIEG",
    "aucune compensation, excepté celle accordée pour le même service",
    "aucune compensation, à l’exception de la compensation payée pour le service concerné",
    "aucune autre compensation du même service, sauf une compensation de 200 000 €",
    "aucune autre compensation du même service, hormis la compensation annuelle existante",
  ])(
    "R30 gives a positive compensation exception priority over a general absence: %s",
    (compensationEvidence) => {
      const input = completeInput({ stage: "notified" });
      documentCurrentSgei(input);
      input.aid.sgeiCompensationEvidence = `Inventaire n° INV-R30-2026 du 26/07/2026 : ${compensationEvidence}.`;

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("invalid");
      expect(result.invalidIssues.join(" ")).toContain(
        "cohérence des compensations du même SIEG",
      );
      expect(result.code).not.toBe("notified-usable");
    },
  );

  it.each([
    [
      "Aucune fusion, sauf une acquisition réalisée le 03/02/2026 selon acte ACQ-R30-2026.",
      "merger-acquisition",
    ],
    [
      "Aucune acquisition, hormis une fusion effective le 04/02/2026 selon acte FUS-R30-2026.",
      "merger-acquisition",
    ],
    [
      "Aucune opération de fusion, excepté une scission actée le 05/02/2026 selon acte SCI-R30-2026.",
      "split",
    ],
    [
      "Aucune acquisition, à l’exception d’un rachat finalisé le 06/02/2026 selon acte RAC-R30-2026.",
      "merger-acquisition",
    ],
    [
      "Aucune fusion ni acquisition, hormis le rachat effectif de la société B.",
      "merger-acquisition",
    ],
  ] as const)(
    "R30 gives a completed corporate-event exception priority: %s",
    (corporateEvidence, corporateKind) => {
      const negativeInput = completeInput({ stage: "notified" });
      negativeInput.profile.deMinimisCorporateEventEvidence = corporateEvidence;

      const contradiction = calculateSiteAidDecision(negativeInput);

      expect(contradiction.code).toBe("invalid");
      expect(contradiction.invalidIssues.join(" ")).toContain(
        "Cohérence de la restructuration",
      );

      const positiveInput = completeInput({ stage: "notified" });
      positiveInput.profile.deMinimisCorporateEventOccurred = "yes";
      positiveInput.profile.deMinimisCorporateEventKind = corporateKind;
      positiveInput.profile.deMinimisCorporateEventEvidence = corporateEvidence;
      positiveInput.profile.deMinimisCorporateAidHistoryAdjusted = "yes";

      expect(calculateSiteAidDecision(positiveInput).code).toBe(
        "notified-usable",
      );
    },
  );

  it.each([
    "Avis de la Commission européenne n° TERR-R30-2026 : le droit de l’Union ne s’applique absolument pas au territoire Bretagne.",
    "Avis de la Commission européenne n° TERR-R30-2026 : le territoire Bretagne est hors du champ territorial du droit de l’Union.",
    "Avis de la Commission européenne n° TERR-R30-2026 : le droit de l’Union est non applicable au territoire Bretagne.",
  ])(
    "R30 invalidates an EU-applicable status contradicted by territorial evidence: %s",
    (territorialEvidence) => {
      const input = completeInput({ stage: "notified" });
      input.profile.deMinimisEuTerritorialEvidence = territorialEvidence;

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("invalid");
      expect(result.invalidIssues.join(" ")).toContain(
        "cohérence de la qualification territoriale UE",
      );
      expect(result.code).not.toBe("notified-usable");
    },
  );

  it.each([
    "Avis de la Commission européenne n° TERR-R30-UNC-2026 : l’applicabilité du droit de l’Union reste indéterminée.",
    "Avis de la Commission européenne n° TERR-R30-UNC-2026 : cette pièce ne permet pas de conclure si le droit de l’Union s’applique au territoire.",
  ])(
    "R30 keeps uncertain EU territorial evidence incomplete: %s",
    (territorialEvidence) => {
      const input = completeInput({ stage: "notified" });
      input.profile.deMinimisEuTerritorialEvidence = territorialEvidence;

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("incomplete");
      expect(result.missingEvidence.join(" ")).toContain(
        "la pièce laisse l’applicabilité du droit de l’Union incertaine",
      );
      expect(result.code).not.toBe("notified-usable");
    },
  );

  it("R30 preserves a formally identified affirmative EU territorial witness", () => {
    const input = completeInput({ stage: "notified" });
    input.profile.deMinimisEuTerritorialEvidence =
      "Avis de la Commission européenne n° TERR-R30-POS-2026 : le droit de l’Union demeure pleinement applicable au territoire Bretagne.";

    expect(calculateSiteAidDecision(input).code).toBe("notified-usable");
  });

  it.each([
    "ne lui confie réellement et juridiquement pas le service SIEG",
    "ne saurait confier le service SIEG",
    "ne lui confie en rien le service SIEG",
    "s’oppose à confier le service SIEG",
    "interdit de confier le service SIEG",
    "renonce à confier le service SIEG",
    "ne lui confie ni le service SIEG ni la mission de service public",
    "ne lui délègue en rien le service SIEG",
    "s’oppose à toute délégation du service SIEG",
  ])(
    "R31 fail-closes the adjacent entrustment denial for current aid and register: %s",
    (negativeClause) => {
      const currentInput = completeInput({ stage: "notified" });
      documentCurrentSgei(currentInput);
      currentInput.aid.sgeiEntrustmentEvidence = `Décision écrite de la Région n° DEC-R31-CURRENT du 26/07/2026 : elle ${negativeClause}.`;

      const currentResult = calculateSiteAidDecision(currentInput);

      expect(currentResult.code).toBe("invalid");
      expect(currentResult.invalidIssues.join(" ")).toContain(
        "cohérence du mandat SIEG",
      );

      const registerInput = completeInput({ stage: "notified" });
      documentCurrentSgei(registerInput);
      const historicalService = "Médiation numérique rurale";
      registerInput.aidRegister = [
        sgeiRegisterEntry({
          sgeiEntrustmentEvidence: `Décision écrite de la Région n° DEC-R31-REGISTER du 10/01/2025 : elle ${negativeClause}.`,
          sgeiServiceIdentity: historicalService,
          sgeiRelationToCurrentService: "no",
          sgeiRelationToCurrentServiceEvidence:
            documentedSgeiDistinctionEvidence(
              registerInput.aid.sgeiServiceIdentity,
              historicalService,
            ),
        }),
      ];

      const registerResult = calculateSiteAidDecision(registerInput);

      expect(registerResult.code).toBe("invalid");
      expect(registerResult.invalidIssues.join(" ")).toContain(
        "Registre, aide 1, cohérence du mandat SIEG",
      );
    },
  );

  it("R31 never turns a numbered written act into affirmative entrustment by structure alone", () => {
    const input = completeInput({ stage: "notified" });
    documentCurrentSgei(input);
    input.aid.sgeiEntrustmentEvidence =
      "Décision écrite SIEG n° DEC-R31-NUMBER-ONLY du 26/07/2026.";

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("incomplete");
    expect(result.missingEvidence.join(" ")).toContain(
      "n’affirme pas explicitement que le service est confié",
    );
    expect(result.code).not.toBe("notified-usable");
  });

  it.each([
    [
      "Décision écrite n° DEC-R31-DOUBLE : elle ne refuse pas de confier le service SIEG.",
      "incomplete",
    ],
    [
      "Décision écrite n° DEC-R31-COORD : elle ne refuse pas la demande et confie le service SIEG à l’entreprise.",
      "notified-usable",
    ],
    [
      "Décision écrite n° DEC-R31-RESTRICT : elle ne confie pas que le service SIEG à l’entreprise, mais aussi son suivi.",
      "notified-usable",
    ],
  ] as const)(
    "R31 distinguishes a cancelled refusal or explicit restriction from an actual denial: %s",
    (evidence, expectedCode) => {
      const input = completeInput({ stage: "notified" });
      documentCurrentSgei(input);
      input.aid.sgeiEntrustmentEvidence = evidence;

      expect(calculateSiteAidDecision(input).code).toBe(expectedCode);
    },
  );

  it.each([
    (currentService: string, historicalService: string) =>
      `les services ${currentService} et ${historicalService} ne sont ni distincts ni séparés`,
    (currentService: string, historicalService: string) =>
      `les services ${currentService} et ${historicalService} ne sont en rien distincts`,
    (currentService: string, historicalService: string) =>
      `il est faux que les services ${currentService} et ${historicalService} soient distincts`,
    (currentService: string, historicalService: string) =>
      `l’autorité s’oppose à reconnaître les services ${currentService} et ${historicalService} comme distincts`,
    (currentService: string, historicalService: string) =>
      `les services ${currentService} et ${historicalService} ne sauraient être distincts`,
  ])(
    "R31 fail-closes the adjacent SGEI non-distinction: %#",
    (negativeRelation) => {
      const input = completeInput({ stage: "notified" });
      documentCurrentSgei(input);
      input.aid.sgeiServiceIdentity = "Transport scolaire communal";
      const historicalService = "Restauration scolaire communale";
      input.aidRegister = [
        sgeiRegisterEntry({
          sgeiServiceIdentity: historicalService,
          sgeiRelationToCurrentService: "no",
          sgeiRelationToCurrentServiceEvidence: `Attestation de la commune, autorité d’octroi, référence ATT-R31-NEG-2026, datée du 2026-07-26 : ${negativeRelation(
            input.aid.sgeiServiceIdentity,
            historicalService,
          )}.`,
        }),
      ];

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("invalid");
      expect(result.invalidIssues.join(" ")).toContain(
        "le statut structuré « NON » contredit littéralement une preuve",
      );
    },
  );

  it.each([
    [
      (currentService: string, historicalService: string) =>
        `il n’est pas faux que les services ${currentService} et ${historicalService} soient distincts`,
      "incomplete",
    ],
    [
      (currentService: string, historicalService: string) =>
        `les services ${currentService} et ${historicalService} ne sont pas que distincts, ils relèvent aussi de deux actes`,
      "notified-usable",
    ],
  ] as const)(
    "R31 requires a direct distinction affirmation despite an indirect double negative: %#",
    (relationClause, expectedCode) => {
      const input = completeInput({ stage: "notified" });
      documentCurrentSgei(input);
      input.aid.sgeiServiceIdentity = "Transport scolaire communal";
      const historicalService = "Restauration scolaire communale";
      input.aidRegister = [
        sgeiRegisterEntry({
          sgeiServiceIdentity: historicalService,
          sgeiRelationToCurrentService: "no",
          sgeiRelationToCurrentServiceEvidence: `Attestation de la commune, autorité d’octroi, référence ATT-R31-POS-2026, datée du 2026-07-26 : ${relationClause(
            input.aid.sgeiServiceIdentity,
            historicalService,
          )}.`,
        }),
      ];

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe(expectedCode);
      if (expectedCode === "incomplete") {
        expect(result.missingEvidence.join(" ")).toContain(
          "formellement identifiable mais ne conclut pas textuellement",
        );
      }
    },
  );

  it.each([
    "aucune autre compensation du même service, sauf cette dernière de 200 000 €",
    "aucune autre compensation du même service, mise à part une compensation annuelle de 200 000 €",
    "aucune autre compensation du même service, à part une compensation de 200 000 €",
    "aucune autre compensation du même service, exception faite d’une compensation annuelle de 200 000 €",
    "aucune autre compensation du même service, hors la compensation annuelle existante",
    "aucune autre compensation du même service, sauf un versement compensatoire de 200 000 €",
  ])(
    "R31 gives every clear positive compensation exception priority: %s",
    (evidence) => {
      const input = completeInput({ stage: "notified" });
      documentCurrentSgei(input);
      input.aid.sgeiCompensationEvidence = `Inventaire n° INV-R31-2026 du 26/07/2026 : ${evidence}.`;

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("invalid");
      expect(result.invalidIssues.join(" ")).toContain(
        "cohérence des compensations du même SIEG",
      );
    },
  );

  it("R31 keeps an unclassified exception after a compensation absence incomplete", () => {
    const input = completeInput({ stage: "notified" });
    documentCurrentSgei(input);
    input.aid.sgeiCompensationEvidence =
      "Inventaire n° INV-R31-UNC du 26/07/2026 : aucune autre compensation du même service, sauf un élément non qualifié dans l’annexe.";

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("incomplete");
    expect(result.missingEvidence.join(" ")).toContain("texte mixte ou ambigu");
  });

  it("R31 requires an explicit compensation absence for current aid and register rows", () => {
    const currentInput = completeInput({ stage: "notified" });
    documentCurrentSgei(currentInput);
    currentInput.aid.sgeiCompensationEvidence =
      "Inventaire n° INV-R31-DESC du 26/07/2026 : analyse des compensations du même SIEG.";

    const currentResult = calculateSiteAidDecision(currentInput);

    expect(currentResult.code).toBe("incomplete");
    expect(currentResult.missingEvidence.join(" ")).toContain(
      "ne conclut pas explicitement à l’absence d’une autre compensation",
    );

    const registerInput = completeInput({ stage: "notified" });
    documentCurrentSgei(registerInput);
    const historicalService = "Médiation numérique rurale";
    registerInput.aidRegister = [
      sgeiRegisterEntry({
        sgeiServiceIdentity: historicalService,
        sgeiCompensationEvidence:
          "Attestation de la Région n° ATT-R31-DESC du 25/07/2026 : analyse des compensations du même service.",
        sgeiRelationToCurrentService: "no",
        sgeiRelationToCurrentServiceEvidence: documentedSgeiDistinctionEvidence(
          registerInput.aid.sgeiServiceIdentity,
          historicalService,
        ),
      }),
    ];

    const registerResult = calculateSiteAidDecision(registerInput);

    expect(registerResult.code).toBe("incomplete");
    expect(registerResult.missingEvidence.join(" ")).toContain(
      "Registre, aide 1, preuve sur les compensations du même SIEG : la pièce est peut-être identifiable",
    );
  });

  it("R31 preserves a documented explicit absence of same-service compensation", () => {
    const input = completeInput({ stage: "notified" });
    documentCurrentSgei(input);
    input.aid.sgeiCompensationEvidence =
      "Attestation de la Région n° ATT-R31-NONE du 26/07/2026 : aucune autre compensation du même SIEG.";

    expect(calculateSiteAidDecision(input).code).toBe("notified-usable");
  });

  it.each([
    "Aucune acquisition, sauf le rachat de la société B le 03/02/2026.",
    "Aucune acquisition, sauf nous avons acquis la société B le 03/02/2026.",
    "Aucune acquisition, sauf l’achat de 100 % des titres de la société B le 03/02/2026.",
    "Aucune acquisition, exception faite d’une fusion du 03/02/2026.",
    "Aucune acquisition, mise à part une reprise effective de la société B.",
  ])(
    "R31 gives every clear positive restructuring exception priority: %s",
    (evidence) => {
      const input = completeInput({ stage: "notified" });
      input.profile.deMinimisCorporateEventEvidence = evidence;

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("invalid");
      expect(result.invalidIssues.join(" ")).toContain(
        "Cohérence de la restructuration",
      );
    },
  );

  it("R31 keeps an unclassified exception after a restructuring absence incomplete", () => {
    const input = completeInput({ stage: "notified" });
    input.profile.deMinimisCorporateEventEvidence =
      "Aucune acquisition, sauf une opération décrite sans nature dans l’annexe.";

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("incomplete");
    expect(result.missingEvidence.join(" ")).toContain(
      "clauses mixtes ou ambiguës",
    );
  });

  it("R31 requires an explicit corporate-event absence despite an identifiable descriptive record", () => {
    const input = completeInput({ stage: "notified" });
    input.profile.deMinimisCorporateEventEvidence =
      "Extrait Kbis n° KBIS-R31-DESC du 26/07/2026 : analyse de l’historique juridique et des restructurations de la société.";

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("incomplete");
    expect(result.missingEvidence.join(" ")).toContain(
      "ne conclut pas explicitement à l’absence de fusion",
    );
  });

  it("R31 preserves an explicit corporate-event absence", () => {
    const input = completeInput({ stage: "notified" });
    input.profile.deMinimisCorporateEventEvidence =
      "Extrait Kbis n° KBIS-R31-NONE du 26/07/2026 : aucune fusion, acquisition ou scission pertinente n’est intervenue.";

    expect(calculateSiteAidDecision(input).code).toBe("notified-usable");
  });

  it("R31 requires an explicit corporate-event affirmation despite an identifiable descriptive act", () => {
    const input = completeInput({ stage: "notified" });
    input.profile.deMinimisCorporateEventOccurred = "yes";
    input.profile.deMinimisCorporateEventKind = "merger-acquisition";
    input.profile.deMinimisCorporateEventEvidence =
      "Acte n° CORP-R31-DESC du 26/07/2026 : analyse de la restructuration et des sociétés concernées.";
    input.profile.deMinimisCorporateAidHistoryAdjusted = "yes";

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("incomplete");
    expect(result.missingEvidence.join(" ")).toContain(
      "n’affirme pas explicitement qu’une fusion",
    );
  });

  it("R31 preserves a documented explicit corporate-event affirmation", () => {
    const input = completeInput({ stage: "notified" });
    input.profile.deMinimisCorporateEventOccurred = "yes";
    input.profile.deMinimisCorporateEventKind = "merger-acquisition";
    input.profile.deMinimisCorporateEventEvidence =
      "Acte d’acquisition n° ACQ-R31-POS du 26/07/2026 : l’acquisition de la société B a été réalisée le 03/02/2026.";
    input.profile.deMinimisCorporateAidHistoryAdjusted = "yes";

    expect(calculateSiteAidDecision(input).code).toBe("notified-usable");
  });

  it.each([
    "Avis de la Commission européenne n° TERR-R31-1 : le droit de l’Union ne saurait s’appliquer au territoire Bretagne.",
    "Avis de la Commission européenne n° TERR-R31-2 : le droit de l’Union ne s’applique en rien au territoire Bretagne.",
    "Avis de la Commission européenne n° TERR-R31-3 : l’autorité exclut l’application du droit de l’Union au territoire Bretagne.",
    "Avis de la Commission européenne n° TERR-R31-4 : le territoire Bretagne échappe au droit de l’Union.",
    "Avis de la Commission européenne n° TERR-R31-5 : le droit de l’Union cesse de s’appliquer au territoire Bretagne.",
    "Avis de la Commission européenne n° TERR-R31-6 : le droit de l’Union est sans effet sur le territoire Bretagne.",
    "Avis de la Commission européenne n° TERR-R31-7 : la réglementation européenne ne s’applique pas au territoire Bretagne.",
  ])(
    "R31 fail-closes every adjacent territorial denial: %s",
    (territorialEvidence) => {
      const input = completeInput({ stage: "notified" });
      input.profile.deMinimisEuTerritorialEvidence = territorialEvidence;

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe("invalid");
      expect(result.invalidIssues.join(" ")).toContain(
        "cohérence de la qualification territoriale UE",
      );
    },
  );

  it("R31 requires an explicit affirmative territorial conclusion despite an identifiable document", () => {
    const input = completeInput({ stage: "notified" });
    input.profile.deMinimisEuTerritorialEvidence =
      "Avis de la Commission européenne n° TERR-R31-UNRESOLVED : analyse territoriale du dossier Bretagne.";

    const result = calculateSiteAidDecision(input);

    expect(result.code).toBe("incomplete");
    expect(result.missingEvidence.join(" ")).toContain(
      "n’affirme pas explicitement que le droit de l’Union s’applique",
    );
  });

  it.each([
    [
      "Avis de la Commission européenne n° TERR-R31-DOUBLE : elle ne refuse pas de confirmer que le droit de l’Union s’applique au territoire Bretagne.",
      "incomplete",
    ],
    [
      "Avis de la Commission européenne n° TERR-R31-CONTINUE : le droit de l’Union ne cesse pas de s’appliquer au territoire Bretagne.",
      "notified-usable",
    ],
  ] as const)(
    "R31 distinguishes an indirect absence of refusal from direct territorial applicability: %s",
    (territorialEvidence, expectedCode) => {
      const input = completeInput({ stage: "notified" });
      input.profile.deMinimisEuTerritorialEvidence = territorialEvidence;

      const result = calculateSiteAidDecision(input);

      expect(result.code).toBe(expectedCode);
      if (expectedCode === "incomplete") {
        expect(result.missingEvidence.join(" ")).toContain(
          "n’affirme pas explicitement que le droit de l’Union s’applique",
        );
      }
    },
  );

  it("creates a deterministic, accent-safe TXT filename", () => {
    expect(siteAidDecisionReportFilename("Projet été — Société Élan")).toBe(
      "dossier-aide-tresorerie-site-projet-ete-societe-elan-2026-07-26.txt",
    );
    expect(siteAidDecisionReportFilename("", "date invalide")).toBe(
      "dossier-aide-tresorerie-site-sans-reference-2026-07-26.txt",
    );
  });
});
