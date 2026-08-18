import { describe, expect, it } from "vitest";
import {
  SAAS_BUILD_DECISION_VERSION,
  SAAS_DOSSIER_MAX_JSON_BYTES,
  SAAS_DOSSIER_MAX_TEXT_LENGTH,
  SAAS_PROOF_GATES,
  SAAS_SCOPE_ITEMS,
  SAAS_TCO_MAX_INPUT,
  buildSaasDecisionReport,
  calculateSaasTco,
  createEmptySaasCandidate,
  createEmptySaasDecisionContext,
  createFictitiousSaasDecisionDossier,
  parseSaasDecisionDossierJson,
  qualifySaasCandidate,
  recommendMinimumSaasRoute,
  serializeSaasDecisionDossier,
  type SaasCandidate,
  type SaasDecisionContext,
} from "./saas-build-path-decision";

function completeContext(
  patch: Partial<SaasDecisionContext> = {},
): SaasDecisionContext {
  return {
    decisionDate: "2026-07-27",
    need: "Vérifier un parcours d’audit.",
    firstBuyer: "Deux utilisateurs interrogés.",
    commercialEvidence: "interviews",
    stage: "demo",
    dataRisk: "fictitious",
    tenancy: "no-account",
    payment: "none",
    integration: "none",
    outageImpact: "low",
    teamCapability: "frontend",
    ...patch,
  };
}

function qualifyCandidate(candidate: SaasCandidate): SaasCandidate {
  candidate.route = "Outil Pro, version 2026-07";
  candidate.proposalReference = "Devis V3 du 2026-07-27";
  for (const item of SAAS_SCOPE_ITEMS) {
    candidate.scope[item.id] = {
      status: "included",
      note: "Livrable référencé dans le périmètre commun.",
    };
  }
  for (const gate of SAAS_PROOF_GATES) {
    candidate.proofs[gate.id] = {
      status: "pass",
      testedAt: "2026-07-27",
      environment: "Préproduction, commit abc123",
      owner: "Alice",
      independentReviewer: "Benoît",
      evidenceReference: `preuve-${gate.id}`,
      notes: "Résultat relu.",
    };
  }
  return candidate;
}

describe("SaaS build path recommendation", () => {
  it("keeps missing information explicit", () => {
    const result = recommendMinimumSaasRoute(
      createEmptySaasDecisionContext(),
      "2026-07-27",
    );

    expect(result.route).toBe("incomplete");
    expect(result.missing).toContain("date de décision");
    expect(result.missing).toContain("preuve commerciale");
    expect(result.missing).toContain("besoin à démontrer");
  });

  it("rejects a decision date after the evaluation day", () => {
    const result = recommendMinimumSaasRoute(
      completeContext({ decisionDate: "2099-01-02" }),
      "2026-07-27",
    );

    expect(result.route).toBe("incomplete");
    expect(result.missing).toContain("date de décision non future");
  });

  it("recommends pausing when demand is not evidenced", () => {
    const result = recommendMinimumSaasRoute(
      completeContext({ commercialEvidence: "none" }),
    );

    expect(result.route).toBe("pause");
    expect(result.title).toMatch(/Ne construisez pas/i);
  });

  it("allows only a fictitious disposable prototype at low risk", () => {
    const result = recommendMinimumSaasRoute(completeContext());

    expect(result.route).toBe("solo-prototype");
    expect(result.reasons.join(" ")).toMatch(/fictives/i);
  });

  it("requires an independent review for a paid pilot", () => {
    const result = recommendMinimumSaasRoute(
      completeContext({
        stage: "paid-pilot",
        tenancy: "multi-tenant",
      }),
    );

    expect(result.route).toBe("reviewed-pilot");
    expect(result.reasons.join(" ")).toMatch(/paiera|organisations/i);
  });

  it.each([
    { stage: "production" as const },
    { dataRisk: "sensitive" as const },
    { payment: "live" as const },
    { integration: "critical" as const },
    { outageImpact: "contractual" as const },
  ])("requires named responsibility for $stage$dataRisk$payment$integration$outageImpact", (patch) => {
    const result = recommendMinimumSaasRoute(completeContext(patch));

    expect(result.route).toBe("responsible-build");
  });
});

describe("SaaS TCO", () => {
  it("keeps every missing amount as ND instead of zero", () => {
    const candidate = createEmptySaasCandidate("Option");
    const result = calculateSaasTco(candidate.tco, 12);

    expect(result.kind).toBe("unknown");
    if (result.kind === "unknown") {
      expect(result.missing.length).toBe(11);
    }
  });

  it("calculates construction, run and exit without a false HT label", () => {
    const { candidates } = createFictitiousSaasDecisionDossier();
    const result12 = calculateSaasTco(candidates[0].tco, 12);
    const result36 = calculateSaasTco(candidates[0].tco, 36);
    const result60 = calculateSaasTco(candidates[0].tco, 60);

    expect(result12).toMatchObject({
      kind: "known",
      initial: 15_000,
      recurring: 14_760,
      exit: 3_600,
      total: 33_360,
    });
    expect(result36).toMatchObject({ kind: "known", total: 62_880 });
    expect(result60).toMatchObject({ kind: "known", total: 92_400 });
  });

  it("rejects negative, non-finite and excessive numbers", () => {
    const { candidates } = createFictitiousSaasDecisionDossier();
    candidates[0].tco.servicesMonthly = -1;
    candidates[0].tco.exitDays = Number.POSITIVE_INFINITY;
    candidates[0].tco.annualExercises = SAAS_TCO_MAX_INPUT + 1;

    const result = calculateSaasTco(candidates[0].tco, 12);

    expect(result.kind).toBe("unknown");
    if (result.kind === "unknown") {
      expect(result.missing).toEqual(
        expect.arrayContaining([
          "servicesMonthly",
          "exitDays",
          "annualExercises",
        ]),
      );
    }
  });
});

describe("portable local dossier", () => {
  it("round-trips the full fictitious dossier without losing fields", () => {
    const dossier = createFictitiousSaasDecisionDossier();
    const serialized = serializeSaasDecisionDossier(
      dossier,
      "2026-07-27",
    );
    const parsed = parseSaasDecisionDossierJson(serialized);

    expect(serialized).toContain(SAAS_BUILD_DECISION_VERSION);
    expect(parsed).toEqual({ ok: true, dossier });
  });

  it("rejects incompatible versions, invalid enums and negative costs", () => {
    const serialized = serializeSaasDecisionDossier(
      createFictitiousSaasDecisionDossier(),
      "2026-07-27",
    );

    expect(
      parseSaasDecisionDossierJson(
        serialized.replace(SAAS_BUILD_DECISION_VERSION, "ancienne-version"),
      ),
    ).toMatchObject({ ok: false, error: expect.stringMatching(/version/i) });
    expect(
      parseSaasDecisionDossierJson(
        serialized.replace(
          '"initialSubscriptions": 600',
          '"initialSubscriptions": -1',
        ),
      ),
    ).toMatchObject({ ok: false, error: expect.stringMatching(/coût/i) });
    expect(
      parseSaasDecisionDossierJson(
        serialized.replace('"status": "unknown"', '"status": "hacked"'),
      ),
    ).toMatchObject({
      ok: false,
      error: expect.stringMatching(/livrable/i),
    });
  });

  it("rejects an oversized local file before parsing it", () => {
    const result = parseSaasDecisionDossierJson(
      "x".repeat(SAAS_DOSSIER_MAX_JSON_BYTES + 1),
    );

    expect(result).toMatchObject({
      ok: false,
      error: expect.stringMatching(/512 Ko/i),
    });
  });

  it("never exports a dossier that its own importer would reject", () => {
    const dossier = createFictitiousSaasDecisionDossier();
    dossier.context.need = "x".repeat(
      SAAS_DOSSIER_MAX_TEXT_LENGTH + 1,
    );

    expect(() =>
      serializeSaasDecisionDossier(dossier, "2026-07-27"),
    ).toThrow(/export impossible.*contexte/i);

    dossier.context.need = "Besoin borné et réimportable.";
    dossier.candidates[0].tco.initialSubscriptions =
      SAAS_TCO_MAX_INPUT + 1;

    expect(() =>
      serializeSaasDecisionDossier(dossier, "2026-07-27"),
    ).toThrow(/export impossible.*coût/i);
  });
});

describe("candidate qualification", () => {
  it("does not qualify an empty dossier", () => {
    const candidate = createEmptySaasCandidate("Option");
    const result = qualifySaasCandidate(
      completeContext(),
      candidate,
      "2026-07-27",
    );

    expect(result.status).toBe("unqualified");
    expect(result.scopeGaps.length).toBe(SAAS_SCOPE_ITEMS.length);
    expect(result.unverifiedProofs.length).toBe(SAAS_PROOF_GATES.length);
  });

  it("blocks an N/A tenant test when multiple organizations are declared", () => {
    const candidate = qualifyCandidate(createEmptySaasCandidate("Option"));
    candidate.proofs["tenant-attacks"] = {
      ...candidate.proofs["tenant-attacks"],
      status: "not-applicable",
      notes: "Deux sociétés mais test considéré inutile.",
    };

    const result = qualifySaasCandidate(
      completeContext({ tenancy: "multi-tenant" }),
      candidate,
      "2026-07-27",
    );

    expect(result.status).toBe("blocked");
    expect(result.prohibitedNotApplicable).toContain("tenant-attacks");
  });

  it("blocks self-validation, missing references and future evidence", () => {
    const candidate = qualifyCandidate(createEmptySaasCandidate("Option"));
    candidate.proofs["clean-build"] = {
      ...candidate.proofs["clean-build"],
      testedAt: "2026-07-28",
      owner: "Alice",
      independentReviewer: "alice",
      evidenceReference: "",
    };

    const result = qualifySaasCandidate(
      completeContext(),
      candidate,
      "2026-07-27",
    );

    expect(result.status).toBe("blocked");
    expect(result.invalidProofs).toContain("clean-build");
  });

  it("blocks one failed proof regardless of every other pass", () => {
    const candidate = qualifyCandidate(createEmptySaasCandidate("Option"));
    candidate.proofs["secret-rotation"].status = "fail";

    const result = qualifySaasCandidate(
      completeContext(),
      candidate,
      "2026-07-27",
    );

    expect(result.status).toBe("blocked");
    expect(result.failedProofs).toEqual(["secret-rotation"]);
  });

  it("qualifies only a complete independently reviewed option", () => {
    const candidate = qualifyCandidate(createEmptySaasCandidate("Option"));
    const result = qualifySaasCandidate(
      completeContext(),
      candidate,
      "2026-07-27",
    );

    expect(result).toMatchObject({
      status: "qualified",
      contextGaps: [],
      candidateGaps: [],
      scopeGaps: [],
      invalidScopeEvidence: [],
      failedProofs: [],
      unverifiedProofs: [],
      invalidProofs: [],
    });
  });

  it("keeps an otherwise complete option unqualified when context is incomplete", () => {
    const context = createEmptySaasDecisionContext();
    const candidate = qualifyCandidate(
      createEmptySaasCandidate("Option documentée"),
    );
    for (const field of Object.keys(candidate.tco) as Array<
      keyof SaasCandidate["tco"]
    >) {
      candidate.tco[field] = 0;
    }

    const result = qualifySaasCandidate(
      context,
      candidate,
      "2026-07-27",
    );
    const report = buildSaasDecisionReport(
      context,
      [candidate, candidate],
      "2026-07-27",
    );

    expect(result.status).toBe("unqualified");
    expect(result.contextGaps).toContain("date de décision");
    expect(report).toContain(
      "12 mois : ND (périmètre ou preuves non qualifiés)",
    );
    expect(report).not.toContain(
      "12 mois : 0 € (construction 0 €, exploitation 0 €, sortie 0 €)",
    );
  });

  it("rejects future decisions and evidence even when they agree with each other", () => {
    const context = completeContext({ decisionDate: "2099-01-02" });
    const candidate = qualifyCandidate(
      createEmptySaasCandidate("Option documentée"),
    );
    for (const gate of SAAS_PROOF_GATES) {
      candidate.proofs[gate.id].testedAt = "2099-01-01";
    }

    const result = qualifySaasCandidate(
      context,
      candidate,
      "2026-07-27",
    );

    expect(result.status).toBe("blocked");
    expect(result.contextGaps).toContain("date de décision non future");
    expect(result.invalidProofs).toHaveLength(SAAS_PROOF_GATES.length);
  });

  it("requires an option snapshot and a reference for every declared deliverable", () => {
    const candidate = qualifyCandidate(
      createEmptySaasCandidate("Option documentée"),
    );
    candidate.proposalReference = "";
    candidate.scope["business-rules"].note = "";

    const result = qualifySaasCandidate(
      completeContext(),
      candidate,
      "2026-07-27",
    );

    expect(result.status).toBe("unqualified");
    expect(result.candidateGaps).toContain("devis, date ou snapshot");
    expect(result.invalidScopeEvidence).toContain("business-rules");
  });

  it("exports raw TCO assumptions and explicit invalid-proof reasons", () => {
    const context = completeContext();
    const candidate = qualifyCandidate(
      createEmptySaasCandidate("Option documentée"),
    );
    candidate.tco = createFictitiousSaasDecisionDossier().candidates[0].tco;
    candidate.proofs["clean-build"].owner = "Alice";
    candidate.proofs["clean-build"].independentReviewer = "alice";

    const report = buildSaasDecisionReport(
      context,
      [candidate, candidate],
      "2026-07-27",
    );

    expect(report).toContain("Preuve commerciale : Entretiens");
    expect(report).toContain("Hypothèses brutes du coût économique");
    expect(report).toContain(
      "Temps initial du porteur et de l’équipe : 18 jours",
    );
    expect(report).toContain(
      "INVALIDE : responsable et relecteur identiques",
    );
    expect(report).toContain(
      "Preuve invalide : Clone, installation propre",
    );
  });

  it("hides numeric TCO in the exported report while evidence is unqualified", () => {
    const example = createFictitiousSaasDecisionDossier();
    const report = buildSaasDecisionReport(
      example.context,
      example.candidates,
      "2026-07-27",
    );

    expect(report).toContain(
      "12 mois : ND (périmètre ou preuves non qualifiés)",
    );
    expect(report).not.toContain("33 360 €");
    expect(report).toContain("Une inconnue reste ND");
    expect(report).toContain("jamais en € HT");
  });
});
