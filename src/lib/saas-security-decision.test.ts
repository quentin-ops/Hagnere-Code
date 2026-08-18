import { describe, expect, it } from "vitest";
import {
  buildSaasSecurityDecisionFilename,
  buildSaasSecurityDecisionText,
  cloneSaasSecurityAssessment,
  createEmptySaasSecurityAssessment,
  createFictitiousSaasSecurityAssessment,
  evaluateSaasSecurityAssessment as evaluateAtDate,
  SAAS_SECURITY_MIN_PLANNED_HOURS,
  type SaasSecurityAssessment,
} from "./saas-security-decision";

const EVALUATION_DATE = "2026-07-25";

function evaluateSaasSecurityAssessment(
  assessment: SaasSecurityAssessment,
  evaluationDate = EVALUATION_DATE,
) {
  return evaluateAtDate(assessment, evaluationDate);
}

function createProvenAssessment(): SaasSecurityAssessment {
  const assessment = createEmptySaasSecurityAssessment();
  assessment.context = {
    reference: "DOSSIER-2026-001",
    productScope: "Application B2B — production France",
    observationDate: "2026-07-01",
    signatureDate: "2026-07-29",
    weeklyCapacityHours: 20,
    safetyMarginPercent: 25,
    riskApproverRole: "Direction générale",
    buyerRequirementsComplete: true,
    remediationWorkComplete: true,
  };
  assessment.requirements = assessment.requirements.map((requirement) => ({
    ...requirement,
    buyerRequirement: `Prouver : ${requirement.label}`,
    nature: "contractual",
    importance: "critical",
    status: "proven",
    evidenceKind: "tested",
    evidenceScope: "exact",
    evidenceReference: `TEST-${requirement.id}-2026-06`,
    evidenceResult:
      "Le contrôle a réussi sur le produit et les fonctions inclus dans la vente.",
    evidenceInvalidationTrigger:
      "Changement du contrôle, du produit, du flux ou du fournisseur observé.",
    freshnessConfirmed: true,
    evidenceDate: "2026-06-20",
    reviewDueDate: "2026-09-20",
    residualRisk: "low",
    ownerRole: "Responsable technique",
    remediationHours: 0,
    targetDate: "2026-07-01",
    nextAction: "Conserver la pièce et la revoir après un changement.",
    disposition: "keep-as-is",
  }));
  return assessment;
}

function createConditionallySignableAssessment(): SaasSecurityAssessment {
  const assessment = createProvenAssessment();
  assessment.requirements[5] = {
    ...assessment.requirements[5],
    importance: "non-critical",
    status: "partial",
    evidenceKind: "document",
    residualRisk: "moderate",
    remediationHours: 4,
    targetDate: "2026-08-15",
    disposition: "condition-after-signature",
    internalAcceptance: true,
    internalAcceptanceReference: "DECISION-RISQUE-2026-010",
    internalAcceptanceDate: "2026-07-24",
    buyerAcceptance: true,
    buyerAcceptanceReference: "AVENANT-SECURITE-05",
    buyerAcceptanceDate: "2026-07-24",
    temporaryMeasure:
      "Astreinte renforcée et alerte testée chaque semaine jusqu’à l’exercice.",
    reportabilityBasis:
      "La direction compétente et l’acheteur ont confirmé par écrit que ce point non critique peut être reporté.",
    fundingConfirmed: true,
    fundingReference: "BUDGET-2026-014",
    fundingDate: "2026-07-23",
    nextAction: "Rejouer un exercice complémentaire.",
  };
  return assessment;
}

describe("saas security decision", () => {
  it("refuses to invent a decision from an empty form", () => {
    const result = evaluateSaasSecurityAssessment(
      createEmptySaasSecurityAssessment(),
    );

    expect(result.code).toBe("incomplete");
    expect(result.valid).toBe(false);
    expect(result.issues.map((issue) => issue.code)).toEqual(
      expect.arrayContaining([
        "missing-context",
        "invalid-date",
        "invalid-capacity",
      ]),
    );
    expect(result.capacity.status).toBe("unknown");
  });

  it("reproduces the fictitious 150 h versus 80 h capacity case", () => {
    const assessment = createFictitiousSaasSecurityAssessment(EVALUATION_DATE);
    const result = evaluateSaasSecurityAssessment(assessment);

    expect(result.valid).toBe(true);
    expect(result.capacity).toMatchObject({
      status: "deficit",
      calendarDays: 28,
      baseHours: 120,
      prudentHours: 150,
      availableHours: 80,
      gapHours: -70,
    });
    expect(result.code).toBe("postpone-and-qualify");
    expect(result.triggers.join(" ")).toContain("70");
  });

  it("keeps the fictitious capacity example relative to the evaluation day", () => {
    for (const [evaluationDate, signatureDate] of [
      ["2026-08-23", "2026-09-20"],
      ["2026-12-20", "2027-01-17"],
      ["2028-02-28", "2028-03-27"],
    ]) {
      const assessment = createFictitiousSaasSecurityAssessment(evaluationDate);
      const result = evaluateSaasSecurityAssessment(assessment, evaluationDate);

      expect(assessment.context.observationDate).toBe(evaluationDate);
      expect(assessment.context.signatureDate).toBe(signatureDate);
      expect(result.valid).toBe(true);
      expect(result.issues).toEqual([]);
      expect(result.capacity).toMatchObject({
        status: "deficit",
        calendarDays: 28,
        baseHours: 120,
        prudentHours: 150,
        availableHours: 80,
        gapHours: -70,
      });
    }
  });

  it("requires an explicit date to build the fictitious example", () => {
    expect(() => createFictitiousSaasSecurityAssessment("")).toThrow(
      "date locale d’évaluation valide",
    );
  });

  it("signs only on the exact scope with current tested evidence", () => {
    const result = evaluateSaasSecurityAssessment(createProvenAssessment());

    expect(result.valid).toBe(true);
    expect(result.code).toBe("sign-on-scope");
    expect(result.blockingRequirementIds).toEqual([]);
  });

  it("treats a document as insufficient evidence for a critical control", () => {
    const assessment = createProvenAssessment();
    assessment.requirements[0] = {
      ...assessment.requirements[0],
      evidenceKind: "document",
      disposition: "fix-before-signature",
      remediationHours: 4,
      targetDate: "2026-07-26",
      nextAction: "Exécuter et conserver un test.",
    };

    const result = evaluateSaasSecurityAssessment(assessment);

    expect(result.code).toBe("fix-before-signing");
    expect(result.blockingRequirementIds).toContain("privileged-access");
  });

  it("does not let several low risks compensate one high risk", () => {
    const assessment = createProvenAssessment();
    assessment.requirements[1] = {
      ...assessment.requirements[1],
      residualRisk: "high",
      disposition: "fix-before-signature",
      remediationHours: 8,
      targetDate: "2026-07-27",
      nextAction: "Réduire le risque et contre-tester.",
    };

    const result = evaluateSaasSecurityAssessment(assessment);

    expect(result.code).toBe("fix-before-signing");
    expect(result.blockingRequirementIds).toEqual(["tenant-separation"]);
  });

  it("never lets buyer acceptance neutralize a critical failed control", () => {
    const assessment = createProvenAssessment();
    assessment.requirements[2] = {
      ...assessment.requirements[2],
      status: "absent",
      evidenceKind: "none",
      importance: "critical",
      residualRisk: "critical",
      remediationHours: 10,
      targetDate: "2026-08-15",
      disposition: "condition-after-signature",
      internalAcceptance: true,
      internalAcceptanceReference: "DECISION-RISQUE-2026-008",
      internalAcceptanceDate: "2026-07-24",
      buyerAcceptance: true,
      buyerAcceptanceReference: "AVENANT-SECURITE-03",
      buyerAcceptanceDate: "2026-07-24",
      nextAction: "Tester la restauration plus tard.",
    };

    const result = evaluateSaasSecurityAssessment(assessment);

    expect(result.code).toBe("postpone-and-qualify");
    expect(result.blockingRequirementIds).toContain("restoration");
    expect(result.code).not.toBe("sign-with-conditions");
  });

  it("allows conditions only for a non-critical, reportable, covered and funded gap", () => {
    const assessment = createConditionallySignableAssessment();

    const result = evaluateSaasSecurityAssessment(assessment);

    expect(result.code).toBe("sign-with-conditions");
    expect(result.conditionalRequirementIds).toEqual(["formal-assurance"]);
  });

  it("fails closed below the shared minimum workload for an open plan", () => {
    for (const remediationHours of [
      Number.MIN_VALUE,
      0.001,
      SAAS_SECURITY_MIN_PLANNED_HOURS - Number.EPSILON,
    ]) {
      const assessment = createConditionallySignableAssessment();
      assessment.requirements[5].remediationHours = remediationHours;

      const result = evaluateSaasSecurityAssessment(assessment);

      expect(result.valid).toBe(false);
      expect(result.code).toBe("incomplete");
      expect(result.issues).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            code: "invalid-hours",
            requirementId: "formal-assurance",
          }),
        ]),
      );
      expect(result.deferredCapacities[0]?.status).toBe("unknown");
      const text = buildSaasSecurityDecisionText(assessment, EVALUATION_DATE);
      const extraRequirementText = text.split("EXIGENCE 6 —")[1] ?? "";
      expect(text).not.toContain("Statut : DOSSIER ÉVALUÉ");
      expect(extraRequirementText).not.toContain("Charge : 0 h");
    }
  });

  it("accepts and preserves workloads at and just above the shared minimum", () => {
    for (const remediationHours of [
      SAAS_SECURITY_MIN_PLANNED_HOURS,
      SAAS_SECURITY_MIN_PLANNED_HOURS + 0.01,
    ]) {
      const assessment = createConditionallySignableAssessment();
      assessment.requirements[5].remediationHours = remediationHours;

      const result = evaluateSaasSecurityAssessment(assessment);
      const text = buildSaasSecurityDecisionText(assessment, EVALUATION_DATE);

      expect(result.valid).toBe(true);
      expect(result.code).toBe("sign-with-conditions");
      const extraRequirementText = text.split("EXIGENCE 6 —")[1] ?? "";
      expect(extraRequirementText).toContain(
        `Charge : ${remediationHours.toLocaleString("fr-FR")} h`,
      );
      expect(extraRequirementText).not.toContain("Charge : 0 h");
    }
  });

  it("fails closed when declared hours exceed the numerical safety ceiling", () => {
    const assessment = createProvenAssessment();
    assessment.context.weeklyCapacityHours = 1e308;
    assessment.requirements[5] = {
      ...assessment.requirements[5],
      importance: "non-critical",
      status: "absent",
      evidenceKind: "none",
      residualRisk: "low",
      remediationHours: 1e100,
      targetDate: "9999-12-31",
      disposition: "condition-after-signature",
      internalAcceptance: true,
      internalAcceptanceReference: "DECISION-RISQUE-2026-099",
      internalAcceptanceDate: "2026-07-24",
      buyerAcceptance: true,
      buyerAcceptanceReference: "AVENANT-SECURITE-99",
      buyerAcceptanceDate: "2026-07-24",
      temporaryMeasure:
        "Contrôle manuel quotidien tracé jusqu’à la correction définitive.",
      reportabilityBasis:
        "La direction compétente et l’acheteur ont confirmé ce report non critique.",
      fundingConfirmed: true,
      fundingReference: "BUDGET-2026-099",
      fundingDate: "2026-07-23",
      nextAction: "Corriger puis faire vérifier le résultat.",
    };

    const result = evaluateSaasSecurityAssessment(assessment);

    expect(result.valid).toBe(false);
    expect(result.code).toBe("incomplete");
    expect(result.code).not.toBe("sign-with-conditions");
    expect(result.issues.map((issue) => issue.code)).toEqual(
      expect.arrayContaining(["invalid-capacity", "invalid-hours"]),
    );
    expect(result.capacity.availableHours).toBeNull();
    expect(result.capacity.gapHours).toBeNull();
    expect(result.deferredCapacities[0]?.status).toBe("unknown");
  });

  it("never contradicts an explicit disposition when the evidence is already sufficient", () => {
    for (const disposition of [
      "fix-before-signature",
      "condition-after-signature",
    ] as const) {
      const assessment = createProvenAssessment();
      assessment.requirements[5] = {
        ...assessment.requirements[5],
        disposition,
      };

      const result = evaluateSaasSecurityAssessment(assessment);

      expect(result.code).toBe("incomplete");
      expect(result.issues).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ code: "inconsistent-disposition" }),
        ]),
      );
    }

    const refused = createProvenAssessment();
    refused.requirements[5] = {
      ...refused.requirements[5],
      disposition: "renegotiate-or-refuse",
    };
    expect(evaluateSaasSecurityAssessment(refused).code).toBe(
      "refuse-or-renegotiate",
    );
  });

  it("honours a positive, feasible fix chosen for a non-critical gap", () => {
    const assessment = createProvenAssessment();
    assessment.requirements[5] = {
      ...assessment.requirements[5],
      importance: "non-critical",
      status: "partial",
      evidenceKind: "document",
      residualRisk: "low",
      remediationHours: 4,
      targetDate: "2026-07-27",
      disposition: "fix-before-signature",
      nextAction: "Corriger le point puis conserver le contre-test.",
    };

    const result = evaluateSaasSecurityAssessment(assessment);

    expect(result.code).toBe("fix-before-signing");
    expect(result.blockingRequirementIds).toContain("formal-assurance");
  });

  it("never treats zero hours as a real open correction", () => {
    const assessment = createProvenAssessment();
    assessment.requirements[0] = {
      ...assessment.requirements[0],
      status: "absent",
      evidenceKind: "none",
      residualRisk: "high",
      remediationHours: 0,
      targetDate: "2026-07-27",
      disposition: "fix-before-signature",
      nextAction: "Corriger puis contre-tester le contrôle.",
    };

    const result = evaluateSaasSecurityAssessment(assessment);

    expect(result.code).toBe("incomplete");
    expect(result.issues).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          code: "invalid-hours",
          requirementId: "privileged-access",
        }),
      ]),
    );
  });

  it("rejects a fix decision for a justified non-applicable condition", () => {
    const assessment = createProvenAssessment();
    assessment.requirements[5] = {
      ...assessment.requirements[5],
      status: "not-applicable",
      residualRisk: "moderate",
      disposition: "fix-before-signature",
      remediationHours: 4,
      targetDate: "2026-07-27",
      notApplicableReason:
        "La condition ne figure pas dans la demande d’achat ni dans le champ contractuel vérifié.",
      nextAction: "Corriger la qualification contradictoire du dossier.",
    };

    const result = evaluateSaasSecurityAssessment(assessment);

    expect(result.code).toBe("incomplete");
    expect(result.issues).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          code: "inconsistent-disposition",
          requirementId: "formal-assurance",
        }),
      ]),
    );
  });

  it("requires a conditional deadline strictly after the signature", () => {
    const assessment = createProvenAssessment();
    assessment.requirements[5] = {
      ...assessment.requirements[5],
      importance: "non-critical",
      status: "absent",
      evidenceKind: "none",
      residualRisk: "low",
      remediationHours: 4,
      targetDate: assessment.context.signatureDate,
      disposition: "condition-after-signature",
      internalAcceptance: true,
      internalAcceptanceReference: "DECISION-RISQUE-2026-013",
      internalAcceptanceDate: "2026-07-24",
      buyerAcceptance: true,
      buyerAcceptanceReference: "AVENANT-SECURITE-07",
      buyerAcceptanceDate: "2026-07-24",
      temporaryMeasure:
        "Une surveillance quotidienne est vérifiée jusqu’au contre-test complet.",
      reportabilityBasis:
        "La personne compétente a confirmé que ce point non critique peut être reporté.",
      fundingConfirmed: true,
      fundingReference: "BUDGET-2026-016",
      fundingDate: "2026-07-23",
      nextAction: "Exécuter le contre-test et archiver son résultat.",
    };

    const result = evaluateSaasSecurityAssessment(assessment);

    expect(result.code).toBe("postpone-and-qualify");
    expect(result.triggers.join(" ")).toContain(
      "strictement postérieure à la signature",
    );
  });

  it("rejects acceptances or funding recorded before the observed dossier", () => {
    const assessment = createProvenAssessment();
    assessment.requirements[5] = {
      ...assessment.requirements[5],
      importance: "non-critical",
      status: "partial",
      evidenceKind: "document",
      residualRisk: "low",
      remediationHours: 4,
      targetDate: "2026-08-15",
      disposition: "condition-after-signature",
      internalAcceptance: true,
      internalAcceptanceReference: "DECISION-RISQUE-ANTERIEURE",
      internalAcceptanceDate: "2026-06-30",
      buyerAcceptance: true,
      buyerAcceptanceReference: "AVENANT-ANTERIEUR",
      buyerAcceptanceDate: "2026-06-30",
      temporaryMeasure:
        "Une surveillance quotidienne est vérifiée jusqu’au contre-test complet.",
      reportabilityBasis:
        "La personne compétente a confirmé que ce point non critique peut être reporté.",
      fundingConfirmed: true,
      fundingReference: "BUDGET-ANTERIEUR",
      fundingDate: "2026-06-30",
      nextAction: "Exécuter le contre-test et archiver son résultat.",
    };

    const result = evaluateSaasSecurityAssessment(assessment);

    expect(result.code).toBe("postpone-and-qualify");
    expect(result.triggers.join(" ")).toContain(
      "comprise entre l’observation et la décision",
    );
  });

  it("rejects a conditional plan without a temporary measure, a reportability basis and funding", () => {
    const assessment = createProvenAssessment();
    assessment.requirements[5] = {
      ...assessment.requirements[5],
      importance: "non-critical",
      status: "partial",
      evidenceKind: "document",
      residualRisk: "low",
      remediationHours: 4,
      targetDate: "2026-08-15",
      disposition: "condition-after-signature",
      internalAcceptance: true,
      internalAcceptanceReference: "DECISION-RISQUE-2026-009",
      internalAcceptanceDate: "2026-07-24",
      buyerAcceptance: true,
      buyerAcceptanceReference: "AVENANT-SECURITE-04",
      buyerAcceptanceDate: "2026-07-24",
      nextAction: "Rejouer un exercice complémentaire.",
    };

    const result = evaluateSaasSecurityAssessment(assessment);

    expect(result.code).toBe("postpone-and-qualify");
    expect(result.triggers.join(" ")).toContain("mesure temporaire");
    expect(result.triggers.join(" ")).toContain("reportable");
    expect(result.triggers.join(" ")).toContain("financement");
  });

  it("rejects a conditional plan without both acceptances", () => {
    const assessment = createProvenAssessment();
    assessment.requirements[5] = {
      ...assessment.requirements[5],
      importance: "non-critical",
      status: "partial",
      evidenceKind: "document",
      residualRisk: "low",
      remediationHours: 4,
      targetDate: "2026-08-15",
      disposition: "condition-after-signature",
      internalAcceptance: true,
      buyerAcceptance: false,
      nextAction: "Rejouer un exercice complémentaire.",
    };

    expect(evaluateSaasSecurityAssessment(assessment).code).toBe(
      "postpone-and-qualify",
    );
  });

  it("refuses or renegotiates a formal requirement the company will not meet", () => {
    const assessment = createProvenAssessment();
    assessment.requirements[0] = {
      ...assessment.requirements[0],
      nature: "applicable-obligation",
      status: "absent",
      evidenceKind: "none",
      residualRisk: "moderate",
      disposition: "renegotiate-or-refuse",
      remediationHours: 0,
    };

    expect(evaluateSaasSecurityAssessment(assessment).code).toBe(
      "refuse-or-renegotiate",
    );
  });

  it("does not claim that a fix fits before signature when its target date is later", () => {
    const assessment = createProvenAssessment();
    assessment.requirements[0] = {
      ...assessment.requirements[0],
      status: "partial",
      evidenceKind: "document",
      residualRisk: "high",
      remediationHours: 4,
      targetDate: "2026-08-15",
      disposition: "fix-before-signature",
      nextAction: "Corriger et contre-tester l’accès.",
    };

    const result = evaluateSaasSecurityAssessment(assessment);

    expect(result.code).toBe("postpone-and-qualify");
    expect(result.code).not.toBe("fix-before-signing");
  });

  it("keeps unknown work different from zero work", () => {
    const assessment = createProvenAssessment();
    assessment.requirements[3] = {
      ...assessment.requirements[3],
      status: "partial",
      importance: "critical",
      evidenceKind: "document",
      residualRisk: "moderate",
      remediationHours: null,
      disposition: "fix-before-signature",
      targetDate: "2026-07-27",
      nextAction: "Qualifier la correction.",
    };

    const result = evaluateSaasSecurityAssessment(assessment);

    expect(result.capacity.status).toBe("unknown");
    expect(result.capacity.baseHours).toBeNull();
    expect(result.code).toBe("postpone-and-qualify");
  });

  it("invalidates evidence after its review date or a significant change", () => {
    const stale = createProvenAssessment();
    stale.requirements[0] = {
      ...stale.requirements[0],
      reviewDueDate: "2026-06-30",
    };
    expect(evaluateSaasSecurityAssessment(stale).staleEvidenceIds).toContain(
      "privileged-access",
    );

    const changed = createProvenAssessment();
    changed.requirements[0] = {
      ...changed.requirements[0],
      changedSinceEvidence: true,
    };
    expect(evaluateSaasSecurityAssessment(changed).code).toBe(
      "postpone-and-qualify",
    );
  });

  it("accepts a review due on the decision date", () => {
    const assessment = createProvenAssessment();
    assessment.requirements[0] = {
      ...assessment.requirements[0],
      reviewDueDate: EVALUATION_DATE,
    };

    expect(evaluateSaasSecurityAssessment(assessment).code).toBe(
      "sign-on-scope",
    );
  });

  it("does not treat proven evidence without a review date as current forever", () => {
    const assessment = createProvenAssessment();
    assessment.requirements[0] = {
      ...assessment.requirements[0],
      reviewDueDate: "",
      disposition: "fix-before-signature",
      remediationHours: 2,
      targetDate: EVALUATION_DATE,
      nextAction: "Fixer la prochaine revue puis vérifier la pièce.",
    };

    expect(evaluateSaasSecurityAssessment(assessment).code).toBe(
      "fix-before-signing",
    );
  });

  it("rejects future evidence and impossible date ordering", () => {
    const assessment = createProvenAssessment();
    assessment.requirements[0] = {
      ...assessment.requirements[0],
      evidenceDate: "2026-07-02",
      reviewDueDate: "2026-06-30",
    };

    expect(
      evaluateSaasSecurityAssessment(assessment).issues.map(
        (issue) => issue.code,
      ),
    ).toEqual(
      expect.arrayContaining(["future-evidence", "review-before-evidence"]),
    );
  });

  it("requires a real justification for non-applicable", () => {
    const assessment = createProvenAssessment();
    assessment.requirements[0] = {
      ...assessment.requirements[0],
      status: "not-applicable",
      notApplicableReason: "Non",
    };

    expect(
      evaluateSaasSecurityAssessment(assessment).issues.map(
        (issue) => issue.code,
      ),
    ).toContain("unjustified-not-applicable");
  });

  it("handles zero capacity without turning it into missing data", () => {
    const assessment = createProvenAssessment();
    assessment.context.weeklyCapacityHours = 0;
    const result = evaluateSaasSecurityAssessment(assessment);

    expect(result.valid).toBe(true);
    expect(result.capacity.availableHours).toBe(0);
    expect(result.capacity.status).toBe("available");
    expect(result.code).toBe("sign-on-scope");
  });

  it("calculates leap-day capacity in UTC without daylight-saving drift", () => {
    const assessment = createProvenAssessment();
    assessment.context.observationDate = "2028-02-28";
    assessment.context.signatureDate = "2028-03-06";
    assessment.requirements = assessment.requirements.map((requirement) => ({
      ...requirement,
      evidenceDate: "2028-02-20",
      reviewDueDate: "2028-06-20",
      targetDate: "2028-02-28",
    }));

    expect(
      evaluateSaasSecurityAssessment(assessment, "2028-02-28").capacity
        .calendarDays,
    ).toBe(7);
  });

  it("exports assumptions, unknowns, limits and a safe filename", () => {
    const assessment = createProvenAssessment();
    assessment.context.reference = " Client / À supprimer\u0000 ";
    const text = buildSaasSecurityDecisionText(assessment, EVALUATION_DATE);

    expect(text).toContain("DÉCISION PROVISOIRE");
    expect(text).toContain("CAPACITÉ AVANT SIGNATURE");
    expect(text).toContain("Capacité nette déclarée : 20 h/semaine");
    expect(text).toContain("Marge de prudence déclarée : 25 %");
    expect(text).toContain("Jours calendaires disponibles : 4");
    expect(text).toContain("REGISTRE");
    expect(text).toContain("LIMITES");
    expect(text).toContain("Statut : DOSSIER ÉVALUÉ");
    expect(text).toContain("L’accord du client ne neutralise");
    expect(text).toContain("Mesure temporaire");
    expect(text).toContain("Base du report");
    expect(text).toContain("Financement confirmé");
    expect(text).toContain(
      "EXIGENCE 6 — Autre exigence produit, contractuelle, sectorielle ou d’assurance",
    );
    expect(text).not.toContain("[formal-assurance]");
    expect(buildSaasSecurityDecisionFilename(assessment)).toBe(
      "dossier-decision-securite-client-a-supprimer-2026-07-01-v1.txt",
    );
  });

  it("clones without sharing requirement objects", () => {
    const original = createProvenAssessment();
    const clone = cloneSaasSecurityAssessment(original);
    clone.requirements[0].ownerRole = "Autre rôle";

    expect(original.requirements[0].ownerRole).toBe("Responsable technique");
  });

  it("rejects a missing or duplicated control family", () => {
    const missing = createProvenAssessment();
    missing.requirements = missing.requirements.slice(1);
    expect(
      evaluateSaasSecurityAssessment(missing).issues.map((issue) => issue.code),
    ).toContain("invalid-requirements");

    const duplicated = createProvenAssessment();
    duplicated.requirements[5] = { ...duplicated.requirements[0] };
    expect(
      evaluateSaasSecurityAssessment(duplicated).issues.map(
        (issue) => issue.code,
      ),
    ).toContain("invalid-requirements");
  });

  it("requires an explicit attestation that every buyer demand was mapped", () => {
    const assessment = createProvenAssessment();
    assessment.context.buyerRequirementsComplete = false;

    expect(
      evaluateSaasSecurityAssessment(assessment).issues.map(
        (issue) => issue.code,
      ),
    ).toContain("incomplete-buyer-list");
  });

  it("requires the workload to include every open fix and counter-test", () => {
    const assessment = createProvenAssessment();
    assessment.context.remediationWorkComplete = false;

    expect(
      evaluateSaasSecurityAssessment(assessment).issues.map(
        (issue) => issue.code,
      ),
    ).toContain("incomplete-workload");
  });

  it("rejects a future observation and an expired signature deadline", () => {
    const future = createProvenAssessment();
    future.context.observationDate = "2026-07-26";
    expect(
      evaluateSaasSecurityAssessment(future).issues.map((issue) => issue.code),
    ).toContain("future-observation");

    const expired = createProvenAssessment();
    expired.context.signatureDate = "2026-07-24";
    expect(
      evaluateSaasSecurityAssessment(expired).issues.map((issue) => issue.code),
    ).toContain("expired-signature-date");
  });

  it("judges freshness on the decision date, not only on the observation date", () => {
    const assessment = createProvenAssessment();
    assessment.requirements[0] = {
      ...assessment.requirements[0],
      reviewDueDate: "2026-07-10",
    };

    expect(
      evaluateSaasSecurityAssessment(assessment).staleEvidenceIds,
    ).toContain("privileged-access");
  });

  it("does not accept non-applicable without current exact-scope evidence", () => {
    const assessment = createProvenAssessment();
    assessment.requirements[5] = {
      ...assessment.requirements[5],
      status: "not-applicable",
      notApplicableReason:
        "Cette condition ne figure pas dans la demande d’achat reçue.",
      evidenceKind: "none",
      evidenceReference: "",
      evidenceResult: "",
      freshnessConfirmed: false,
    };

    expect(
      evaluateSaasSecurityAssessment(assessment).issues.map(
        (issue) => issue.code,
      ),
    ).toContain("unjustified-not-applicable");
  });

  it("calculates a deferred plan from signature to its deadline", () => {
    const assessment = createProvenAssessment();
    assessment.context.signatureDate = "2026-07-26";
    assessment.context.weeklyCapacityHours = 7;
    assessment.context.safetyMarginPercent = 0;
    assessment.requirements[5] = {
      ...assessment.requirements[5],
      importance: "non-critical",
      status: "partial",
      evidenceKind: "document",
      residualRisk: "low",
      remediationHours: 7,
      targetDate: "2026-08-02",
      disposition: "condition-after-signature",
      internalAcceptance: true,
      internalAcceptanceReference: "DECISION-RISQUE-2026-011",
      internalAcceptanceDate: "2026-07-24",
      buyerAcceptance: true,
      buyerAcceptanceReference: "AVENANT-SECURITE-06",
      buyerAcceptanceDate: "2026-07-24",
      temporaryMeasure:
        "Alerte quotidienne vérifiée jusqu’au contre-test complet du dispositif.",
      reportabilityBasis:
        "La personne compétente a confirmé que ce point non critique peut être reporté.",
      fundingConfirmed: true,
      fundingReference: "BUDGET-2026-015",
      fundingDate: "2026-07-23",
      nextAction: "Exécuter le contre-test et archiver son résultat.",
    };

    const result = evaluateSaasSecurityAssessment(assessment);
    expect(result.code).toBe("sign-with-conditions");
    expect(result.deferredCapacities[0]).toMatchObject({
      calendarDays: 7,
      cumulativePrudentHours: 7,
      availableHours: 7,
      gapHours: 0,
      status: "available",
    });
  });

  it("marks an incomplete export as a draft that cannot authorize signing", () => {
    const text = buildSaasSecurityDecisionText(
      createEmptySaasSecurityAssessment(),
      EVALUATION_DATE,
    );

    expect(text).toContain(
      "Statut : BROUILLON INCOMPLET — NE PAS UTILISER POUR AUTORISER UNE SIGNATURE",
    );
  });

  it("never lets a user downgrade one of the five essential controls", () => {
    for (const index of [0, 1, 2, 3, 4]) {
      const assessment = createProvenAssessment();
      assessment.requirements[index] = {
        ...assessment.requirements[index],
        importance: "non-critical",
        status: "absent",
        evidenceKind: "none",
        residualRisk: "low",
        remediationHours: 4,
        targetDate: "2026-08-15",
        disposition: "condition-after-signature",
        internalAcceptance: true,
        buyerAcceptance: true,
        temporaryMeasure:
          "Une surveillance quotidienne limite temporairement l’exposition.",
        reportabilityBasis:
          "L’équipe affirme que le point pourrait être traité après la vente.",
        fundingConfirmed: true,
        nextAction: "Corriger le contrôle puis conserver le contre-test.",
      };

      const result = evaluateSaasSecurityAssessment(assessment);
      expect(result.code).toBe("incomplete");
      expect(result.code).not.toBe("sign-with-conditions");
      expect(result.issues.map((issue) => issue.code)).toContain(
        "downgraded-critical-control",
      );
    }
  });

  it("never lets one of the five essential controls disappear as not applicable", () => {
    for (const index of [0, 1, 2, 3, 4]) {
      const assessment = createProvenAssessment();
      assessment.requirements[index] = {
        ...assessment.requirements[index],
        status: "not-applicable",
        notApplicableReason:
          "L’équipe estime que ce contrôle ne concernerait pas cette architecture dédiée.",
        evidenceKind: "independent",
      };

      const result = evaluateSaasSecurityAssessment(assessment);
      expect(result.code).toBe("incomplete");
      expect(result.code).not.toBe("sign-on-scope");
      expect(result.issues.map((issue) => issue.code)).toContain(
        "essential-control-not-applicable",
      );
    }
  });

  it("requires independent evidence in every family when independent assurance is demanded", () => {
    for (const index of [0, 1, 2, 3, 4, 5]) {
      const assessment = createProvenAssessment();
      assessment.requirements[index] = {
        ...assessment.requirements[index],
        buyerRequirement:
          "Fournir un rapport indépendant exact sur cette famille.",
        nature: "independent-assurance",
        evidenceKind: "tested",
        evidenceReference: `TEST-INTERNE-${index}`,
      };

      const result = evaluateSaasSecurityAssessment(assessment);
      expect(result.code).toBe("incomplete");
      expect(result.code).not.toBe("sign-on-scope");
      expect(result.issues.map((issue) => issue.code)).toContain(
        "insufficient-formal-evidence",
      );
    }
  });

  it("never lets an independent assurance be dismissed by an internal note", () => {
    const assessment = createProvenAssessment();
    assessment.requirements[5] = {
      ...assessment.requirements[5],
      buyerRequirement:
        "Le prospect exige un rapport SOC 2 indépendant avant engagement.",
      nature: "independent-assurance",
      importance: "non-critical",
      status: "not-applicable",
      evidenceKind: "document",
      notApplicableReason:
        "Une note interne affirme que le rapport ne serait pas nécessaire sur cette vente.",
    };

    const result = evaluateSaasSecurityAssessment(assessment);
    expect(result.code).toBe("incomplete");
    expect(result.code).not.toBe("sign-on-scope");
    expect(result.issues.map((issue) => issue.code)).toContain(
      "independent-assurance-dismissed",
    );
  });

  it("never authorizes deferring an applicable legal or sectoral obligation", () => {
    const assessment = createProvenAssessment();
    assessment.requirements[5] = {
      ...assessment.requirements[5],
      nature: "applicable-obligation",
      importance: "non-critical",
      status: "absent",
      evidenceKind: "none",
      residualRisk: "low",
      remediationHours: 4,
      targetDate: "2026-08-15",
      disposition: "condition-after-signature",
      internalAcceptance: true,
      internalAcceptanceReference: "DECISION-RISQUE-2026-013",
      internalAcceptanceDate: "2026-07-24",
      buyerAcceptance: true,
      buyerAcceptanceReference: "AVENANT-SECURITE-06",
      buyerAcceptanceDate: "2026-07-24",
      temporaryMeasure:
        "Contrôle manuel quotidien tracé jusqu’à la correction définitive.",
      reportabilityBasis:
        "Les parties déclarent par écrit vouloir reporter cette obligation après la signature.",
      fundingConfirmed: true,
      fundingReference: "BUDGET-2026-015",
      fundingDate: "2026-07-23",
      nextAction: "Corriger puis faire vérifier le résultat.",
    };

    const result = evaluateSaasSecurityAssessment(assessment);

    expect(result.code).toBe("incomplete");
    expect(result.code).not.toBe("sign-with-conditions");
    expect(result.issues.map((issue) => issue.code)).toContain(
      "non-reportable-obligation",
    );
  });

  it("rejects an obligation described as both applicable and not applicable", () => {
    const assessment = createProvenAssessment();
    assessment.requirements[5] = {
      ...assessment.requirements[5],
      nature: "applicable-obligation",
      importance: "non-critical",
      status: "not-applicable",
      evidenceKind: "document",
      notApplicableReason:
        "Le dossier interne affirme pourtant que cette obligation ne viserait pas le périmètre proposé.",
    };

    const result = evaluateSaasSecurityAssessment(assessment);

    expect(result.code).toBe("incomplete");
    expect(result.issues.map((issue) => issue.code)).toContain(
      "applicable-obligation-dismissed",
    );
  });

  it("never lets an indispensable extra requirement be dismissed as not applicable", () => {
    const assessment = createProvenAssessment();
    assessment.requirements[5] = {
      ...assessment.requirements[5],
      importance: "critical",
      status: "not-applicable",
      evidenceKind: "document",
      notApplicableReason:
        "Le dossier interne affirme que cette demande ne viserait pas le périmètre proposé.",
      disposition: "keep-as-is",
    };

    const result = evaluateSaasSecurityAssessment(assessment);

    expect(result.code).toBe("incomplete");
    expect(result.code).not.toBe("sign-on-scope");
    expect(result.issues.map((issue) => issue.code)).toContain(
      "critical-requirement-dismissed",
    );
  });

  it("requires a dated internal decision for a moderate residual risk", () => {
    const assessment = createProvenAssessment();
    assessment.requirements[0] = {
      ...assessment.requirements[0],
      residualRisk: "moderate",
    };

    expect(evaluateSaasSecurityAssessment(assessment).code).toBe(
      "postpone-and-qualify",
    );

    assessment.requirements[0] = {
      ...assessment.requirements[0],
      internalAcceptance: true,
      internalAcceptanceReference: "DECISION-RISQUE-2026-012",
      internalAcceptanceDate: "2026-07-24",
    };
    expect(evaluateSaasSecurityAssessment(assessment).code).toBe(
      "sign-on-scope",
    );
  });

  it("does not accept boolean-only records for a conditional signature", () => {
    const assessment = createProvenAssessment();
    assessment.requirements[5] = {
      ...assessment.requirements[5],
      importance: "non-critical",
      status: "partial",
      evidenceKind: "document",
      residualRisk: "low",
      remediationHours: 4,
      targetDate: "2026-08-15",
      disposition: "condition-after-signature",
      internalAcceptance: true,
      buyerAcceptance: true,
      temporaryMeasure:
        "Astreinte renforcée et alerte testée chaque semaine jusqu’au contre-test.",
      reportabilityBasis:
        "Le point est non critique et son report a été validé par les fonctions compétentes.",
      fundingConfirmed: true,
      nextAction: "Exécuter le contre-test puis archiver son résultat.",
    };

    const result = evaluateSaasSecurityAssessment(assessment);
    expect(result.code).toBe("postpone-and-qualify");
    expect(result.triggers.join(" ")).toMatch(
      /référence et une date comprise entre l’observation et la décision/,
    );
  });
});
