import { describe, expect, it } from "vitest";
import {
  SITE_OWNERSHIP_ACCESS_ITEMS,
  SITE_OWNERSHIP_CONTRACT_QUESTIONS,
  SITE_OWNERSHIP_EXIT_PATHS,
  SITE_OWNERSHIP_PROOFS,
  buildSiteOwnershipDossierFilename,
  buildSiteOwnershipDossierReport,
  calculateSiteOwnershipTco,
  calculateSiteOwnershipTcoSeries,
  createEmptySiteOwnershipDossier,
  createEmptySiteOwnershipExitCost,
  createFictitiousAlpIsolationDossier,
  effectiveSiteOwnershipAccessStatus,
  effectiveSiteOwnershipContractStatus,
  effectiveSiteOwnershipProofStatus,
  evaluateSiteOwnershipDossier,
  isSiteOwnershipAccessCritical,
} from "./site-ownership-exit";

describe("site ownership dossier structure", () => {
  it("keeps the advertised 14 accesses, 8 proofs and 6 contract questions", () => {
    expect(SITE_OWNERSHIP_ACCESS_ITEMS).toHaveLength(14);
    expect(SITE_OWNERSHIP_PROOFS).toHaveLength(8);
    expect(SITE_OWNERSHIP_CONTRACT_QUESTIONS).toHaveLength(6);
    expect(SITE_OWNERSHIP_EXIT_PATHS).toHaveLength(3);

    const dossier = createEmptySiteOwnershipDossier();
    expect(Object.keys(dossier.accesses)).toHaveLength(14);
    expect(Object.keys(dossier.proofs)).toHaveLength(8);
    expect(Object.keys(dossier.contract)).toHaveLength(6);
    expect(Object.keys(dossier.paths)).toHaveLength(3);
  });

  it("does not turn an asserted verification into proof", () => {
    const dossier = createEmptySiteOwnershipDossier();
    dossier.accesses.domain.status = "verified";
    dossier.accesses.domain.ownerControl = "Entreprise";

    expect(effectiveSiteOwnershipAccessStatus(dossier.accesses.domain)).toBe(
      "declared-from-unproven-verification",
    );

    dossier.accesses.domain.evidenceRef = "Capture + test";
    dossier.accesses.domain.checkedOn = "2026-07-27";
    dossier.accesses.domain.companyControl = "yes";
    dossier.accesses.domain.backupAdmin = "yes";
    dossier.accesses.domain.mfa = "yes";

    expect(effectiveSiteOwnershipAccessStatus(dossier.accesses.domain)).toBe(
      "verified",
    );
  });

  it("requires evidence and a valid date before retaining a passed proof", () => {
    const dossier = createEmptySiteOwnershipDossier();
    dossier.proofs.clean_build.status = "pass";
    dossier.proofs.clean_build.evidenceRef = "Build log";
    dossier.proofs.clean_build.checkedOn = "27/07/2026";

    expect(effectiveSiteOwnershipProofStatus(dossier.proofs.clean_build)).toBe(
      "unknown",
    );

    dossier.proofs.clean_build.checkedOn = "2026-07-27";
    expect(effectiveSiteOwnershipProofStatus(dossier.proofs.clean_build)).toBe(
      "pass",
    );
  });

  it("requires a contract reference before retaining a yes", () => {
    const dossier = createEmptySiteOwnershipDossier();
    dossier.contract.foreground.status = "yes";
    expect(
      effectiveSiteOwnershipContractStatus(dossier.contract.foreground),
    ).toBe("unknown");

    dossier.contract.foreground.contractRef = "Contrat art. 8 + annexe B";
    expect(
      effectiveSiteOwnershipContractStatus(dossier.contract.foreground),
    ).toBe("yes");
  });

  it("requires a reason for every not-applicable declaration", () => {
    const dossier = createEmptySiteOwnershipDossier();
    dossier.accesses.payments.status = "not-applicable";
    dossier.proofs.export_import.status = "not-applicable";
    dossier.contract.third_party.status = "not-applicable";

    expect(effectiveSiteOwnershipAccessStatus(dossier.accesses.payments)).toBe(
      "unknown",
    );
    expect(
      effectiveSiteOwnershipProofStatus(dossier.proofs.export_import),
    ).toBe("unknown");
    expect(
      effectiveSiteOwnershipContractStatus(dossier.contract.third_party),
    ).toBe("unknown");

    dossier.accesses.payments.notApplicableReason =
      "Aucun paiement selon l’inventaire daté.";
    dossier.accesses.payments.evidenceRef = "Inventaire fonctionnel daté";
    dossier.accesses.payments.checkedOn = "2026-07-27";
    dossier.proofs.export_import.notApplicableReason =
      "Site statique sans base ni formulaire.";
    dossier.proofs.export_import.evidenceRef =
      "Inventaire et test de la version livrée";
    dossier.proofs.export_import.checkedOn = "2026-07-27";
    dossier.contract.third_party.notApplicableReason =
      "Aucun composant tiers selon l’annexe signée.";
    dossier.contract.third_party.contractRef = "Annexe composants, version 3";

    expect(effectiveSiteOwnershipAccessStatus(dossier.accesses.payments)).toBe(
      "not-applicable",
    );
    expect(
      effectiveSiteOwnershipProofStatus(dossier.proofs.export_import),
    ).toBe("not-applicable");
    expect(
      effectiveSiteOwnershipContractStatus(dossier.contract.third_party),
    ).toBe("not-applicable");
  });

  it("rejects future dates as proof of a completed verification", () => {
    const dossier = createEmptySiteOwnershipDossier();
    dossier.accesses.domain = {
      status: "verified",
      ownerControl: "Entreprise",
      companyControl: "yes",
      backupAdmin: "yes",
      mfa: "yes",
      evidenceRef: "Capture et test",
      checkedOn: "2099-01-01",
      nextAction: "",
      notApplicableReason: "",
    };
    dossier.proofs.clean_build = {
      status: "pass",
      evidenceRef: "Journal de build",
      checkedOn: "2099-01-01",
      nextAction: "",
      notApplicableReason: "",
    };

    expect(effectiveSiteOwnershipAccessStatus(dossier.accesses.domain)).toBe(
      "declared-from-unproven-verification",
    );
    expect(effectiveSiteOwnershipProofStatus(dossier.proofs.clean_build)).toBe(
      "unknown",
    );
  });

  it("does not treat placeholder characters as evidence or a contract reference", () => {
    const dossier = createEmptySiteOwnershipDossier();
    dossier.accesses.domain = {
      status: "verified",
      ownerControl: "x",
      companyControl: "yes",
      backupAdmin: "yes",
      mfa: "yes",
      evidenceRef: "x",
      checkedOn: "2026-07-27",
      nextAction: "",
      notApplicableReason: "",
    };
    dossier.proofs.clean_build = {
      status: "pass",
      evidenceRef: "x",
      checkedOn: "2026-07-27",
      nextAction: "",
      notApplicableReason: "",
    };
    dossier.contract.foreground = {
      status: "yes",
      contractRef: "x",
      nextAction: "",
      notApplicableReason: "",
    };

    expect(effectiveSiteOwnershipAccessStatus(dossier.accesses.domain)).toBe(
      "declared-from-unproven-verification",
    );
    expect(effectiveSiteOwnershipProofStatus(dossier.proofs.clean_build)).toBe(
      "unknown",
    );
    expect(
      effectiveSiteOwnershipContractStatus(dossier.contract.foreground),
    ).toBe("unknown");
  });
});

describe("site ownership TCO", () => {
  it("reconstructs the complete 12, 36 and 60 month calculation", () => {
    const dossier = createEmptySiteOwnershipDossier();
    dossier.context.monthlyLeads = 50;
    dossier.context.leadConversionPercent = 20;
    dossier.context.contributionMarginPerSale = 1_000;
    const input = {
      upfrontCost: 10_000,
      contingencyPercent: 10,
      technicalAuditDays: 2,
      technicalDayRate: 1_000,
      migrationCost: 3_000,
      internalDays: 4,
      internalDayRate: 500,
      annualLicences: 100,
      annualMaintenance: 1_900,
      downtimeWeeks: 52.1429 / 12,
      leadDropPercent: 20,
      assumptions: "Test déterministe",
    };

    const [month12, month36, month60] = calculateSiteOwnershipTcoSeries(
      dossier.context,
      input,
    );

    expect(month12).toMatchObject({
      kind: "known",
      initial: 18_000,
      recurring: 2_000,
      interruptionLoss: 2_000,
      total: 22_000,
    });
    expect(month36).toMatchObject({
      kind: "known",
      initial: 18_000,
      recurring: 6_000,
      interruptionLoss: 2_000,
      total: 26_000,
    });
    expect(month60).toMatchObject({
      kind: "known",
      initial: 18_000,
      recurring: 10_000,
      interruptionLoss: 2_000,
      total: 30_000,
    });
  });

  it("does not require lead economics when the declared impact is zero", () => {
    const dossier = createEmptySiteOwnershipDossier();
    const input = {
      upfrontCost: 1_000,
      contingencyPercent: 0,
      technicalAuditDays: 0,
      technicalDayRate: 0,
      migrationCost: 0,
      internalDays: 0,
      internalDayRate: 0,
      annualLicences: 0,
      annualMaintenance: 0,
      downtimeWeeks: 0,
      leadDropPercent: 0,
      assumptions: "Coût brut, sans inflation ni fiscalité.",
    };

    expect(calculateSiteOwnershipTco(dossier.context, input, 12)).toMatchObject(
      {
        kind: "known",
        total: 1_000,
        interruptionLoss: 0,
      },
    );
  });

  it("keeps an incomplete path ND and rejects negative or impossible values", () => {
    const dossier = createEmptySiteOwnershipDossier();
    const missing = calculateSiteOwnershipTco(
      dossier.context,
      createEmptySiteOwnershipExitCost(),
      12,
    );
    expect(missing.kind).toBe("unknown");
    if (missing.kind === "unknown") {
      expect(missing.missing).toContain("coût initial ou devis");
      expect(missing.missing).toContain("maintenance annuelle");
    }

    const invalid = calculateSiteOwnershipTco(
      dossier.context,
      {
        upfrontCost: -1,
        contingencyPercent: 101,
        technicalAuditDays: 0,
        technicalDayRate: 0,
        migrationCost: 0,
        internalDays: 0,
        internalDayRate: 0,
        annualLicences: 0,
        annualMaintenance: 0,
        downtimeWeeks: 0,
        leadDropPercent: 0,
        assumptions: "",
      },
      12,
    );
    expect(invalid).toMatchObject({ kind: "unknown" });
    if (invalid.kind === "unknown") {
      expect(invalid.invalid).toEqual(
        expect.arrayContaining([
          "coût initial ou devis",
          "réserve ou dépassement (%)",
        ]),
      );
    }
  });

  it("keeps the legal path unknown in the fictional example without a quote", () => {
    const dossier = createFictitiousAlpIsolationDossier();
    const negotiate = calculateSiteOwnershipTcoSeries(
      dossier.context,
      dossier.paths.negotiate,
    );
    const legal = calculateSiteOwnershipTcoSeries(
      dossier.context,
      dossier.paths.legal,
      "legal",
    );
    const rebuild = calculateSiteOwnershipTcoSeries(
      dossier.context,
      dossier.paths.rebuild,
    );

    expect(negotiate.every((result) => result.kind === "known")).toBe(true);
    expect(legal.every((result) => result.kind === "unknown")).toBe(true);
    expect(rebuild.every((result) => result.kind === "known")).toBe(true);
  });

  it("keeps a zero legal estimate unknown and rejects impacts beyond the horizon", () => {
    const dossier = createEmptySiteOwnershipDossier();
    dossier.context.auditDate = "2026-07-27";
    const input = {
      upfrontCost: 0,
      contingencyPercent: 0,
      technicalAuditDays: 0,
      technicalDayRate: 0,
      migrationCost: 0,
      internalDays: 0,
      internalDayRate: 0,
      annualLicences: 0,
      annualMaintenance: 0,
      downtimeWeeks: 0,
      leadDropPercent: 0,
      assumptions: "Devis fictif à compléter et à dater.",
    };

    const legal = calculateSiteOwnershipTco(
      dossier.context,
      input,
      12,
      "legal",
    );
    expect(legal.kind).toBe("unknown");
    if (legal.kind === "unknown") {
      expect(legal.missing).toContain("devis juridique positif et daté");
    }

    const invalidLegalDate = calculateSiteOwnershipTco(
      dossier.context,
      {
        ...input,
        upfrontCost: 1,
        assumptions: "Devis avocat du 99/99/2099.",
      },
      12,
      "legal",
    );
    expect(invalidLegalDate.kind).toBe("unknown");

    const validLegalDate = calculateSiteOwnershipTco(
      dossier.context,
      {
        ...input,
        upfrontCost: 1,
        assumptions: "Devis avocat daté du 27/07/2026.",
      },
      12,
      "legal",
    );
    expect(validLegalDate).toMatchObject({ kind: "known", total: 1 });

    const excessiveImpact = calculateSiteOwnershipTco(
      dossier.context,
      { ...input, upfrontCost: 1_000, downtimeWeeks: 100 },
      12,
      "negotiate",
    );
    expect(excessiveImpact.kind).toBe("unknown");
    if (excessiveImpact.kind === "unknown") {
      expect(excessiveImpact.invalid.join("\n")).toContain(
        "semaines d’impact dans l’horizon de 12 mois",
      );
    }
  });
});

describe("site ownership evaluation and export", () => {
  it("adapts critical controls to the declared business use", () => {
    expect(isSiteOwnershipAccessCritical("email", "lead-generation")).toBe(
      true,
    );
    expect(isSiteOwnershipAccessCritical("payments", "ecommerce")).toBe(true);
    expect(isSiteOwnershipAccessCritical("payments", "brochure")).toBe(false);
  });

  it("requires a complete context before returning a documented dossier", () => {
    const dossier = createEmptySiteOwnershipDossier();
    for (const template of SITE_OWNERSHIP_ACCESS_ITEMS) {
      dossier.accesses[template.id] = {
        status: "verified",
        ownerControl: "Entreprise",
        companyControl: "yes",
        backupAdmin: "yes",
        mfa: "yes",
        evidenceRef: `Capture ${template.id}`,
        checkedOn: "2026-07-27",
        nextAction: "",
        notApplicableReason: "",
      };
    }
    for (const template of SITE_OWNERSHIP_PROOFS) {
      dossier.proofs[template.id] = {
        status: "pass",
        evidenceRef: `Journal ${template.id}`,
        checkedOn: "2026-07-27",
        nextAction: "",
        notApplicableReason: "",
      };
    }
    for (const template of SITE_OWNERSHIP_CONTRACT_QUESTIONS) {
      dossier.contract[template.id] = {
        status: "yes",
        contractRef: `Contrat ${template.id}`,
        nextAction: "",
        notApplicableReason: "",
      };
    }

    expect(evaluateSiteOwnershipDossier(dossier).code).toBe("incomplete");

    dossier.context.dossierName = "Audit annuel";
    dossier.context.siteUrl = "https://example.com";
    dossier.context.auditDate = "2026-07-27";
    dossier.context.currentSupplier = "Équipe interne";
    dossier.context.platform = "custom";
    dossier.context.criticality = "business-critical";

    const evaluation = evaluateSiteOwnershipDossier(dossier);
    expect(evaluation.context.complete).toBe(true);
    expect(evaluation.code).toBe("documented");

    dossier.accesses.domain.companyControl = "not-supported";
    dossier.accesses.domain.backupAdmin = "not-supported";
    dossier.accesses.domain.mfa = "not-supported";
    const unsupportedControls = evaluateSiteOwnershipDossier(dossier);
    expect(unsupportedControls.code).toBe("incomplete");
    expect(unsupportedControls.access.controlGaps).toBe(1);
    expect(unsupportedControls.criticalIssues.join("\n")).toContain(
      "contrôle de l’entreprise — fonction non proposée par le service",
    );
    expect(unsupportedControls.criticalIssues.join("\n")).toContain(
      "administrateur de secours — fonction non proposée par le service",
    );
    expect(unsupportedControls.criticalIssues.join("\n")).toContain(
      "MFA — fonction non proposée par le service",
    );
    dossier.accesses.domain.companyControl = "yes";
    dossier.accesses.domain.backupAdmin = "yes";
    dossier.accesses.domain.mfa = "yes";

    for (const template of SITE_OWNERSHIP_ACCESS_ITEMS) {
      dossier.accesses[template.id].checkedOn = "2001-01-01";
    }
    for (const template of SITE_OWNERSHIP_PROOFS) {
      dossier.proofs[template.id].checkedOn = "2001-01-01";
    }
    expect(evaluateSiteOwnershipDossier(dossier).code).toBe("incomplete");

    for (const template of SITE_OWNERSHIP_ACCESS_ITEMS) {
      dossier.accesses[template.id].checkedOn = "2026-07-27";
    }
    for (const template of SITE_OWNERSHIP_PROOFS) {
      dossier.proofs[template.id] = {
        ...dossier.proofs[template.id],
        status: "not-applicable",
        evidenceRef: `Inventaire daté pour ${template.id}`,
        checkedOn: "2026-07-27",
        notApplicableReason: "Test sans objet selon l’architecture documentée.",
      };
    }
    for (const template of SITE_OWNERSHIP_CONTRACT_QUESTIONS) {
      dossier.contract[template.id] = {
        ...dossier.contract[template.id],
        status: "not-applicable",
        contractRef: `Annexe signée pour ${template.id}`,
        notApplicableReason:
          "Question sans objet selon l’annexe contractuelle signée.",
      };
    }
    const allExecutionNotApplicable = evaluateSiteOwnershipDossier(dossier);
    expect(allExecutionNotApplicable.code).toBe("incomplete");
    expect(allExecutionNotApplicable.criticalIssues.join("\n")).toContain(
      "Répétition de passation",
    );
    expect(allExecutionNotApplicable.criticalIssues.join("\n")).toContain(
      "La sortie est-elle définie",
    );

    for (const template of SITE_OWNERSHIP_ACCESS_ITEMS) {
      dossier.accesses[template.id] = {
        ...dossier.accesses[template.id],
        status: "not-applicable",
        evidenceRef: `Inventaire daté pour ${template.id}`,
        checkedOn: "2026-07-27",
        notApplicableReason:
          "Fonction absente selon l’inventaire fonctionnel signé.",
      };
    }
    for (const template of SITE_OWNERSHIP_PROOFS) {
      dossier.proofs[template.id] = {
        ...dossier.proofs[template.id],
        status: "not-applicable",
        evidenceRef: `Inventaire daté pour ${template.id}`,
        checkedOn: "2026-07-27",
        notApplicableReason: "Test sans objet selon l’architecture documentée.",
      };
    }
    expect(evaluateSiteOwnershipDossier(dossier).code).toBe("incomplete");
    expect(
      evaluateSiteOwnershipDossier(dossier).criticalIssues.join("\n"),
    ).toContain("Nom de domaine et bureau d’enregistrement");
  });

  it("never returns a green result when critical accounts remain outside company control", () => {
    const dossier = createEmptySiteOwnershipDossier();

    for (const template of SITE_OWNERSHIP_ACCESS_ITEMS) {
      dossier.accesses[template.id] = {
        status: "verified",
        ownerControl: "Prestataire externe",
        companyControl: "no",
        backupAdmin: "no",
        mfa: "no",
        evidenceRef: `Capture ${template.id}`,
        checkedOn: "2026-07-27",
        nextAction: "Transférer le contrôle à l’entreprise.",
        notApplicableReason: "",
      };
    }
    for (const template of SITE_OWNERSHIP_PROOFS) {
      dossier.proofs[template.id] = {
        status: "pass",
        evidenceRef: `Journal ${template.id}`,
        checkedOn: "2026-07-27",
        nextAction: "",
        notApplicableReason: "",
      };
    }
    for (const template of SITE_OWNERSHIP_CONTRACT_QUESTIONS) {
      dossier.contract[template.id] = {
        status: "yes",
        contractRef: `Contrat ${template.id}`,
        nextAction: "",
        notApplicableReason: "",
      };
    }

    const evaluation = evaluateSiteOwnershipDossier(dossier);
    expect(evaluation.code).toBe("danger");
    expect(evaluation.access.controlGaps).toBe(14);
    expect(evaluation.criticalIssues.join("\n")).toContain(
      "contrôle de l’entreprise — contrôle absent",
    );
  });

  it("surfaces blocked access, failed execution and missing contract coverage", () => {
    const dossier = createFictitiousAlpIsolationDossier();
    const evaluation = evaluateSiteOwnershipDossier(dossier);

    expect(evaluation.code).toBe("danger");
    expect(evaluation.access.blocked).toBeGreaterThan(0);
    expect(evaluation.proof.failed).toBeGreaterThan(0);
    expect(evaluation.contract.no).toBeGreaterThan(0);
    expect(evaluation.criticalIssues.join("\n")).toContain(
      "Dépôt de code et historique",
    );
    expect(new Set(evaluation.criticalIssues).size).toBe(
      evaluation.criticalIssues.length,
    );
    expect(evaluation.criticalIssues.join("\n")).not.toMatch(
      /(?:^| : )(?:pass|fail|yes|no|not-applicable|unknown)(?:$|\n)/,
    );
    expect(evaluation.criticalIssues.slice(0, 5).join("\n")).toContain("échec");
    expect(evaluation.criticalIssues.slice(0, 5).join("\n")).toContain(": non");
    expect(evaluation.criticalIssues.join("\n")).not.toContain(": nd");
    expect(evaluation.criticalIssues.join("\n")).toContain(
      "DNS, CDN et protection du trafic : non documenté",
    );
  });

  it("exports every section, uncertainty and legal boundary", () => {
    const dossier = createFictitiousAlpIsolationDossier();
    const report = buildSiteOwnershipDossierReport(dossier);

    expect(report).toContain("14 ACCÈS");
    expect(report).toContain("8 PREUVES D’EXÉCUTION");
    expect(report).toContain("6 QUESTIONS CONTRACTUELLES");
    expect(report).toContain("TCO 12 mois");
    expect(report).toContain("TCO 36 mois");
    expect(report).toContain("TCO 60 mois");
    expect(report).toContain("Un scénario ND ne vaut ni zéro ni exclusion");
    expect(report).toContain("ne constitue pas un avis juridique");
    expect(report).toContain(
      "Dépôt de code et historique des versions [critique]",
    );
    expect(report).toContain("FAIRE CHIFFRER LA VOIE JURIDIQUE");
    expect(report).toContain("TCO 12 mois : ND");
    expect(report).toContain("TCO 12 mois : 19 333 €");
    expect(report).not.toContain("TCO 12 mois : 19 333 € HT");
    expect(report).toContain("Temps interne : 3 j × 450 € /j");
    expect(report).not.toContain("Temps interne : 3 j × 450 € HT/j");
  });

  it("builds a stable, sanitized local filename", () => {
    const dossier = createFictitiousAlpIsolationDossier();
    expect(buildSiteOwnershipDossierFilename(dossier)).toBe(
      "dossier-propriete-reversibilite-alp-isolation-exemple-fictif-2026-07-27.txt",
    );
  });
});
