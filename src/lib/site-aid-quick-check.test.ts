import { describe, expect, it } from "vitest";
import {
  buildSiteAidQuickCheckReport,
  calculateSiteAidQuickCheck,
  createEmptySiteAidQuickCheckInput,
  type SiteAidQuickCheckInput,
} from "./site-aid-quick-check";

function completeInput(
  overrides: Partial<SiteAidQuickCheckInput> = {},
): SiteAidQuickCheckInput {
  return {
    ...createEmptySiteAidQuickCheckInput(),
    journey: "official-source",
    supportType: "grant",
    officialSource: "yes",
    profileMatches: "yes",
    expensesConfirmed: "yes",
    commitmentRule: "allowed-in-writing",
    projectViableWithoutAid: "yes",
    cashAvailableBeforePayment: "yes",
    notificationStage: "none",
    quoteExVat: 10_000,
    invoiceVatAmount: 2_000,
    vatRecovery: "full",
    eligibleExVat: 7_000,
    theoreticalRatePercent: 30,
    theoreticalCap: 7_500,
    delayMonths: 2,
    monthlyMarginAtRisk: 1_200,
    applicationCosts: 300,
    ...overrides,
  };
}

describe("site aid quick check", () => {
  it("keeps the aid budgeted at zero before a written notification", () => {
    const result = calculateSiteAidQuickCheck(completeInput());

    expect(result.theoreticalAid).toBe(2_100);
    expect(result.budgetedAid).toBe(0);
    expect(result.paidAid).toBe(0);
    expect(result.invoiceIncludingVat).toBe(12_000);
    expect(result.maximumCashNeedBeforeAid).toBe(12_000);
  });

  it("does not convert an unknown VAT treatment into zero", () => {
    const result = calculateSiteAidQuickCheck(
      completeInput({ vatRecovery: "unknown" }),
    );

    expect(result.economicCostWithoutAid).toEqual({
      min: 10_000,
      max: 12_000,
    });
    expect(result.warnings).toContain(
      "La TVA récupérable est inconnue : le coût économique reste une fourchette.",
    );
  });

  it("calculates a partial VAT recovery exactly", () => {
    const result = calculateSiteAidQuickCheck(
      completeInput({
        vatRecovery: "partial",
        recoverableVatAmount: 1_000,
      }),
    );

    expect(result.recoverableVat).toBe(1_000);
    expect(result.economicCostWithoutAid).toEqual({
      min: 11_000,
      max: 11_000,
    });
  });

  it("uses the invoice VAT total for a multi-rate quote", () => {
    const result = calculateSiteAidQuickCheck(
      completeInput({
        invoiceVatAmount: 1_265,
        vatRecovery: "none",
      }),
    );

    expect(result.invoiceIncludingVat).toBe(11_265);
    expect(result.economicCostWithoutAid).toEqual({
      min: 11_265,
      max: 11_265,
    });
  });

  it("stops when the official profile does not match", () => {
    const result = calculateSiteAidQuickCheck(
      completeInput({ profileMatches: "no" }),
    );

    expect(result.code).toBe("stop-or-requalify");
    expect(result.blockingQuestions).toContain(
      "Le profil ou le territoire déclaré ne correspond pas aux conditions publiées.",
    );
  });

  it("keeps an unknown commitment rule incomplete", () => {
    const result = calculateSiteAidQuickCheck(
      completeInput({ commitmentRule: "unknown" }),
    );

    expect(result.code).toBe("verify-before-commitment");
    expect(result.warnings).toContain(
      "Demandez par écrit si devis, acompte, commande ou début des travaux est autorisé avant la décision.",
    );
  });

  it("never recommends waiting on an unaffordable project", () => {
    const result = calculateSiteAidQuickCheck(
      completeInput({
        projectViableWithoutAid: "no",
        cashAvailableBeforePayment: "no",
      }),
    );

    expect(result.code).toBe("reduce-or-finance");
  });

  it("does not treat unknown viability as a proved financing failure", () => {
    const result = calculateSiteAidQuickCheck(
      completeInput({ projectViableWithoutAid: "unknown" }),
    );

    expect(result.code).toBe("verify-before-commitment");
    expect(result.title).toContain("soutenabilité");
  });

  it("makes the trade-off explicit when commitment is forbidden", () => {
    const result = calculateSiteAidQuickCheck(
      completeInput({
        commitmentRule: "forbidden-before-decision",
        delayMonths: 2,
        monthlyMarginAtRisk: 1_200,
        applicationCosts: 300,
      }),
    );

    expect(result.delayCost).toBe(2_700);
    expect(result.theoreticalAid).toBe(2_100);
    expect(result.code).toBe("choose-between-aid-and-launch");
  });

  it("compares the delay cost with the written contribution", () => {
    const result = calculateSiteAidQuickCheck(
      completeInput({
        notificationStage: "written",
        notifiedContribution: 1_650,
      }),
    );

    expect(result.comparisonAid).toBe(1_650);
    expect(result.delayCost).toBe(2_700);
    expect(result.code).toBe("launch-after-notification");
  });

  it("keeps a written contribution distinct from the theoretical aid", () => {
    const result = calculateSiteAidQuickCheck(
      completeInput({
        notificationStage: "written",
        notifiedContribution: 1_650,
        delayMonths: 0,
        monthlyMarginAtRisk: 0,
        applicationCosts: 0,
      }),
    );

    expect(result.theoreticalAid).toBe(2_100);
    expect(result.budgetedAid).toBe(1_650);
    expect(result.paidAid).toBe(0);
    expect(result.code).toBe("notification-to-secure");
  });

  it("distinguishes a documented payment from a notification", () => {
    const result = calculateSiteAidQuickCheck(
      completeInput({
        notificationStage: "paid",
        notifiedContribution: 1_650,
        paidContribution: 1_500,
        eligibleExVat: undefined,
        theoreticalRatePercent: undefined,
        theoreticalCap: undefined,
        delayMonths: undefined,
        monthlyMarginAtRisk: undefined,
        applicationCosts: undefined,
      }),
    );

    expect(result.budgetedAid).toBe(1_650);
    expect(result.paidAid).toBe(1_500);
    expect(result.code).toBe("paid-to-reconcile");
  });

  it("does not budget a declared notification above the calculated invoice", () => {
    const result = calculateSiteAidQuickCheck(
      completeInput({
        notificationStage: "written",
        notifiedContribution: 12_001,
      }),
    );

    expect(result.code).toBe("verify-before-commitment");
    expect(result.budgetedAid).toBeUndefined();
    expect(result.blockingQuestions).toContain(
      "La contribution notifiée déclarée dépasse la facture TTC calculée ; vérifiez le périmètre et la pièce.",
    );
  });

  it("does not accept a declared payment above the notification", () => {
    const result = calculateSiteAidQuickCheck(
      completeInput({
        notificationStage: "paid",
        notifiedContribution: 1_650,
        paidContribution: 1_651,
      }),
    );

    expect(result.code).toBe("verify-before-commitment");
    expect(result.budgetedAid).toBe(1_650);
    expect(result.paidAid).toBeUndefined();
    expect(result.blockingQuestions).toContain(
      "Le paiement déclaré dépasse la contribution notifiée ; rapprochez la décision modifiée, la facture et la preuve de paiement.",
    );
  });

  it("blocks explicit numerical values outside the published bounds", () => {
    const result = calculateSiteAidQuickCheck(
      completeInput({
        quoteExVat: -1,
        theoreticalRatePercent: 101,
        delayMonths: 121,
      }),
    );

    expect(result.code).toBe("verify-before-commitment");
    expect(result.invoiceIncludingVat).toBeUndefined();
    expect(result.theoreticalAid).toBeUndefined();
    expect(result.blockingQuestions).toEqual(
      expect.arrayContaining([
        "Le devis HT doit être un montant compris entre 0 € et 1 milliard d’euros.",
        "Le taux théorique doit être compris entre 0 % et 100 %.",
        "Le délai doit être compris entre 0 et 120 mois.",
      ]),
    );
  });

  it("rejects an eligible basis above the quote", () => {
    const result = calculateSiteAidQuickCheck(
      completeInput({ eligibleExVat: 12_000 }),
    );

    expect(result.theoreticalAid).toBeUndefined();
    expect(result.blockingQuestions).toContain(
      "L’assiette admissible déclarée dépasse le montant HT du devis.",
    );
  });

  it("blocks a written-notification decision with missing calculation inputs", () => {
    const result = calculateSiteAidQuickCheck(
      completeInput({
        notificationStage: "written",
        notifiedContribution: 1_650,
        quoteExVat: undefined,
        invoiceVatAmount: undefined,
        eligibleExVat: undefined,
        theoreticalRatePercent: undefined,
        theoreticalCap: undefined,
        delayMonths: undefined,
        monthlyMarginAtRisk: undefined,
        applicationCosts: undefined,
      }),
    );

    expect(result.code).toBe("verify-before-commitment");
    expect(result.budgetedAid).toBe(1_650);
    expect(result.blockingQuestions).toEqual(
      expect.arrayContaining([
        "Le montant total HT du devis reste à renseigner.",
        "Le montant total de TVA de la facture reste à renseigner, après addition des lignes et des taux.",
        "L’assiette admissible HT confirmée reste à renseigner.",
        "Le délai d’attente en mois reste à renseigner, même s’il vaut 0.",
      ]),
    );
  });

  it("ignores hidden notification and payment values outside their stage", () => {
    const result = calculateSiteAidQuickCheck(
      completeInput({
        notificationStage: "none",
        notifiedContribution: 1_650,
        paidContribution: 2_000,
      }),
    );

    expect(result.code).toBe("launch-without-budgeting-aid");
    expect(result.budgetedAid).toBe(0);
    expect(result.paidAid).toBe(0);
    expect(result.blockingQuestions).not.toContain(
      "Le paiement déclaré dépasse la contribution notifiée ; rapprochez la décision modifiée, la facture et la preuve de paiement.",
    );
  });

  it("never subtracts a loan or guarantee from the invoice", () => {
    const result = calculateSiteAidQuickCheck(
      completeInput({
        supportType: "loan-or-guarantee",
        notificationStage: "paid",
        notifiedContribution: 10_000,
        paidContribution: 10_000,
      }),
    );

    expect(result.code).toBe("separate-financing-instrument");
    expect(result.theoreticalAid).toBeUndefined();
    expect(result.budgetedAid).toBe(0);
    expect(result.paidAid).toBe(0);
  });

  it("classifies a non-grant before reading grant-only answers or stale values", () => {
    const input = {
      ...createEmptySiteAidQuickCheckInput(),
      journey: "official-source" as const,
      supportType: "loan-or-guarantee" as const,
      expensesConfirmed: "no" as const,
      commitmentRule: "unknown" as const,
      theoreticalRatePercent: -1,
      delayMonths: -1,
      paidContribution: Number.POSITIVE_INFINITY,
    };

    const result = calculateSiteAidQuickCheck(input);

    expect(result.code).toBe("separate-financing-instrument");
    expect(result.blockingQuestions).toEqual([]);
    expect(result.theoreticalAid).toBeUndefined();
    expect(result.delayCost).toBeUndefined();
    expect(result.budgetedAid).toBe(0);
  });

  it("rejects a zero written contribution as no financial notification", () => {
    const result = calculateSiteAidQuickCheck(
      completeInput({
        notificationStage: "written",
        notifiedContribution: 0,
      }),
    );

    expect(result.code).toBe("verify-before-commitment");
    expect(result.budgetedAid).toBeUndefined();
    expect(result.blockingQuestions).toContain(
      "La contribution notifiée doit être strictement positive et inférieure ou égale à 1 milliard d’euros. Un montant nul signifie qu’aucune contribution financière n’est notifiée.",
    );
  });

  it("rejects a zero payment as no documented payment", () => {
    const result = calculateSiteAidQuickCheck(
      completeInput({
        notificationStage: "paid",
        notifiedContribution: 1_650,
        paidContribution: 0,
      }),
    );

    expect(result.code).toBe("verify-before-commitment");
    expect(result.paidAid).toBeUndefined();
    expect(result.blockingQuestions).toContain(
      "Le paiement documenté doit être strictement positif et inférieur ou égal à 1 milliard d’euros. Un montant nul n’est pas un versement.",
    );
  });

  it("ignores every hidden forecast and delay value at the paid stage", () => {
    const result = calculateSiteAidQuickCheck(
      completeInput({
        notificationStage: "paid",
        notifiedContribution: 1_650,
        paidContribution: 1_200,
        eligibleExVat: -1,
        theoreticalRatePercent: -1,
        theoreticalCap: -1,
        delayMonths: -1,
        monthlyMarginAtRisk: Number.POSITIVE_INFINITY,
        applicationCosts: -1,
      }),
    );

    expect(result.code).toBe("paid-to-reconcile");
    expect(result.theoreticalAid).toBeUndefined();
    expect(result.comparisonAid).toBeUndefined();
    expect(result.delayCost).toBeUndefined();
    expect(result.blockingQuestions).toEqual([]);
  });

  it("ignores commitment, viability and pre-payment cash at the paid stage", () => {
    const input = completeInput({
      notificationStage: "paid",
      notifiedContribution: 3_000,
      paidContribution: 3_000,
      commitmentRule: "unknown",
      projectViableWithoutAid: "no",
      cashAvailableBeforePayment: "unknown",
    });
    const result = calculateSiteAidQuickCheck(input);
    const report = buildSiteAidQuickCheckReport(
      input,
      result,
      "27/07/2026 09:30",
    );

    expect(result.code).toBe("paid-to-reconcile");
    expect(result.blockingQuestions).toEqual([]);
    expect(result.warnings).not.toContain(
      "Demandez par écrit si devis, acompte, commande ou début des travaux est autorisé avant la décision.",
    );
    expect(report).toContain(
      "Ordre des actes : Sans objet pour cet état",
    );
    expect(report).toContain(
      "Projet viable avec 0 € d’aide : Sans objet pour cet état",
    );
    expect(report).toContain(
      "Trésorerie avant paiement : Sans objet pour cet état",
    );
  });

  it("warns when the written contribution differs from the theoretical aid", () => {
    const result = calculateSiteAidQuickCheck(
      completeInput({
        notificationStage: "written",
        notifiedContribution: 11_900,
        delayMonths: 0,
        monthlyMarginAtRisk: 0,
        applicationCosts: 0,
      }),
    );

    expect(result.code).toBe("notification-to-secure");
    expect(result.warnings).toContain(
      "La contribution notifiée diffère de l’aide théorique calculée. La notification écrite prévaut pour le budget déclaré, mais rapprochez assiette, taux, plafond, périmètre de facture et décision.",
    );
  });

  it("does not turn the equality zero equals zero into a launch trade-off", () => {
    const result = calculateSiteAidQuickCheck(
      completeInput({
        commitmentRule: "forbidden-before-decision",
        eligibleExVat: 0,
        theoreticalRatePercent: 0,
        theoreticalCap: 0,
        delayMonths: 0,
        monthlyMarginAtRisk: 0,
        applicationCosts: 0,
      }),
    );

    expect(result.theoreticalAid).toBe(0);
    expect(result.delayCost).toBe(0);
    expect(result.code).toBe("verify-before-commitment");
  });

  it("exports every raw hypothesis, formula and prudent result", () => {
    const input = completeInput({
      vatRecovery: "partial",
      recoverableVatAmount: 1_000,
      notificationStage: "written",
      notifiedContribution: 1_650,
    });
    const result = calculateSiteAidQuickCheck(input);
    const report = buildSiteAidQuickCheckReport(
      input,
      result,
      "27/07/2026 09:30",
    );

    expect(report).toContain("Type de soutien : Subvention");
    expect(report).toContain("Devis total HT : 10");
    expect(report).toContain("TVA totale de la facture");
    expect(report).toContain("TVA récupérable déclarée");
    expect(report).toContain("Assiette admissible HT");
    expect(report).toContain("Taux théorique publié");
    expect(report).toContain("Contribution notifiée recopiée");
    expect(report).toContain("Délai d’attente");
    expect(report).toContain(
      "Facture TTC = devis HT + TVA totale de toutes les lignes.",
    );
    expect(report).toContain(
      "Coût de l’attente = délai en mois × marge mensuelle attribuable",
    );
    expect(report).toContain("Coût économique sans aide après TVA récupérable");
    expect(report).toContain("besoin maximal prudent avant aide");
    expect(report).toContain(
      "URL ou référence exacte, autorité instructrice, date/version",
    );
    expect(report).toContain(
      "Ce document ne prouve ni l’éligibilité, ni l’authenticité",
    );
  });

  it("exports missing answers as values to confirm", () => {
    const input = completeInput({
      officialSource: "unknown",
      commitmentRule: "unknown",
      quoteExVat: undefined,
    });
    const result = calculateSiteAidQuickCheck(input);
    const report = buildSiteAidQuickCheckReport(
      input,
      result,
      "27/07/2026 09:30",
    );

    expect(report).toContain("DOSSIER DE TRAVAIL");
    expect(report).toContain("Dossier incomplet");
    expect(report).toContain("Devis total HT : À confirmer");
  });

  it("marks inactive and invalid raw values without contradicting the active stage", () => {
    const input = completeInput({
      notificationStage: "none",
      notifiedContribution: 1_650,
      paidContribution: 1_500,
      quoteExVat: Number.NaN,
    });
    const result = calculateSiteAidQuickCheck(input);
    const report = buildSiteAidQuickCheckReport(
      input,
      result,
      "27/07/2026 09:30",
    );

    expect(report).toContain("Devis total HT : Valeur invalide");
    expect(report).toContain(
      "Contribution notifiée recopiée : Sans objet pour cet état",
    );
    expect(report).toContain(
      "Paiement documenté recopié : Sans objet pour cet état",
    );
    expect(report).not.toContain("NaN");
  });

  it("exports all grant calculations as not applicable for a loan", () => {
    const input = completeInput({
      supportType: "loan-or-guarantee",
      notificationStage: "paid",
      notifiedContribution: 10_000,
      paidContribution: 10_000,
      theoreticalRatePercent: -1,
    });
    const result = calculateSiteAidQuickCheck(input);
    const report = buildSiteAidQuickCheckReport(
      input,
      result,
      "27/07/2026 09:30",
    );

    expect(report).toContain("Notification : Sans objet dans ce tri");
    expect(report).toContain(
      "Assiette admissible HT : Sans objet pour cet état",
    );
    expect(report).toContain(
      "Paiement documenté recopié : Sans objet pour cet état",
    );
    expect(report).not.toContain("-1");
    expect(report).not.toContain("10 000");
  });

  it("keeps accepted aggregate amounts valid in the report", () => {
    const input = completeInput({
      quoteExVat: 1_000_000_000,
      invoiceVatAmount: 1_000_000_000,
      vatRecovery: "none",
      eligibleExVat: 1_000_000_000,
      theoreticalRatePercent: 100,
      theoreticalCap: 1_000_000_000,
      delayMonths: 120,
      monthlyMarginAtRisk: 1_000_000_000,
      applicationCosts: 1_000_000_000,
    });
    const result = calculateSiteAidQuickCheck(input);
    const report = buildSiteAidQuickCheckReport(
      input,
      result,
      "27/07/2026 09:30",
    );

    expect(result.invoiceIncludingVat).toBe(2_000_000_000);
    expect(result.delayCost).toBe(121_000_000_000);
    expect(report).not.toContain(
      "Facture TTC / besoin maximal prudent avant aide : Valeur invalide",
    );
    expect(report).not.toContain(
      "Coût documenté de l’attente : Valeur invalide",
    );
    expect(report).not.toContain(
      "Coût économique sans aide après TVA récupérable : Valeur invalide",
    );
  });
});
