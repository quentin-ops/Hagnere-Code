import { describe, expect, it } from "vitest";
import {
  assessProviderEvidence,
  calculateKnownCostTotal,
  createEmptyCandidateEvidence,
  evidenceCriterionIds,
  type CandidateEvidence,
  type EvidenceLevel,
} from "./provider-evidence";

const completeCosts = {
  initial: 20_000,
  recurring: 3_600,
  options: 1_250.5,
  exit: 900,
} as const;

function readyEvidence(): CandidateEvidence {
  return {
    ...createEmptyCandidateEvidence(),
    businessUnderstanding: "written_and_observed",
    scopeAndExclusions: "written",
    acceptance: "written",
    costs: "written",
    dataAndSecurity: "written",
    rightsAndAccounts: "written",
    maintenance: "written",
    exit: "written",
  };
}

describe("calculateKnownCostTotal", () => {
  it("additionne les quatre postes en centimes", () => {
    expect(calculateKnownCostTotal(completeCosts)).toEqual({
      total: 25_750.5,
      missingOrInvalid: [],
    });
  });

  it("accepte un zéro vérifié sans le confondre avec une inconnue", () => {
    expect(
      calculateKnownCostTotal({
        initial: 0,
        recurring: 0,
        options: 0,
        exit: 0,
      }),
    ).toEqual({ total: 0, missingOrInvalid: [] });
  });

  it.each([
    ["vide", null],
    ["négatif", -1],
    ["infini", Number.POSITIVE_INFINITY],
    ["NaN", Number.NaN],
    ["hors borne", 1_000_000_001],
  ])("conserve un coût %s comme inconnu ou invalide", (_label, value) => {
    const result = calculateKnownCostTotal({
      ...completeCosts,
      options: value,
    });

    expect(result.total).toBeNull();
    expect(result.missingOrInvalid).toEqual(["options"]);
  });

  it("arrondit chaque entrée au centime avant la somme", () => {
    expect(
      calculateKnownCostTotal({
        initial: 0.105,
        recurring: 0.105,
        options: 0.105,
        exit: 0.105,
      }),
    ).toEqual({ total: 0.44, missingOrInvalid: [] });
  });

  it("applique un arrondi monétaire stable aux demi-centimes", () => {
    expect(
      calculateKnownCostTotal({
        initial: 1.005,
        recurring: 1.005,
        options: 1.005,
        exit: 1.005,
      }),
    ).toEqual({ total: 4.04, missingOrInvalid: [] });
  });

  it("ne transforme pas un montant positif inférieur au demi-centime en zéro", () => {
    expect(
      calculateKnownCostTotal({
        ...completeCosts,
        options: 0.004,
      }),
    ).toEqual({ total: null, missingOrInvalid: ["options"] });
  });

  it("additionne la borne maximale sans débordement", () => {
    expect(
      calculateKnownCostTotal({
        initial: 1_000_000_000,
        recurring: 1_000_000_000,
        options: 1_000_000_000,
        exit: 1_000_000_000,
      }),
    ).toEqual({ total: 4_000_000_000, missingOrInvalid: [] });
  });
});

describe("assessProviderEvidence", () => {
  it("ne compense jamais un STOP", () => {
    const evidence = readyEvidence();
    evidence.exit = "blocker";

    const result = assessProviderEvidence(evidence, completeCosts);

    expect(result.verdict).toBe("STOP_CANDIDATE");
    expect(result.concernedCriteria).toEqual(["exit"]);
    expect(result.knownCostTotal).toBeNull();
  });

  it("traite une valeur étrangère comme inconnue", () => {
    const evidence = readyEvidence() as Record<string, unknown>;
    evidence.maintenance = "excellent";

    const result = assessProviderEvidence(
      evidence as Partial<CandidateEvidence>,
      completeCosts,
    );

    expect(result.verdict).toBe("CLARIFY_UNKNOWN");
    expect(result.concernedCriteria).toEqual(["maintenance"]);
  });

  it("demande un écrit avant de calculer le coût", () => {
    const evidence = readyEvidence();
    evidence.costs = "verbal";

    expect(assessProviderEvidence(evidence, completeCosts).verdict).toBe(
      "REQUEST_WRITTEN_PROOF",
    );
  });

  it("exige d’observer la compréhension sur le cas commun", () => {
    const evidence = readyEvidence();
    evidence.businessUnderstanding = "written";

    const result = assessProviderEvidence(evidence, completeCosts);

    expect(result.verdict).toBe("RUN_COMMON_CASE");
    expect(result.concernedCriteria).toEqual(["businessUnderstanding"]);
  });

  it("traite « écrit + observé » comme une preuve écrite cumulative", () => {
    const evidence = readyEvidence();
    evidence.rightsAndAccounts = "written_and_observed";

    expect(assessProviderEvidence(evidence, completeCosts).verdict).toBe(
      "CANDIDATE_FOR_DECISION",
    );
  });

  it("refuse de produire un total si un poste manque", () => {
    const result = assessProviderEvidence(readyEvidence(), {
      ...completeCosts,
      exit: null,
    });

    expect(result.verdict).toBe("NORMALIZE_COSTS");
    expect(result.concernedCosts).toEqual(["exit"]);
    expect(result.knownCostTotal).toBeNull();
  });

  it("rend un dossier candidat sans désigner de gagnant", () => {
    const result = assessProviderEvidence(readyEvidence(), completeCosts);

    expect(result.verdict).toBe("CANDIDATE_FOR_DECISION");
    expect(result.knownCostTotal).toBe(25_750.5);
    expect(result.title).not.toMatch(/meilleur|gagnant/i);
  });

  it("respecte la précédence conservatrice sur les 390 625 combinaisons", () => {
    const levels: EvidenceLevel[] = [
      "unknown",
      "verbal",
      "written",
      "written_and_observed",
      "blocker",
    ];
    const failures: string[] = [];
    const current = createEmptyCandidateEvidence();

    function expectedVerdict(evidence: CandidateEvidence) {
      const values = evidenceCriterionIds.map((id) => evidence[id]);
      if (values.includes("blocker")) return "STOP_CANDIDATE";
      if (values.includes("unknown")) return "CLARIFY_UNKNOWN";
      if (values.includes("verbal")) return "REQUEST_WRITTEN_PROOF";
      if (evidence.businessUnderstanding === "written") {
        return "RUN_COMMON_CASE";
      }
      return "CANDIDATE_FOR_DECISION";
    }

    function visit(index: number) {
      if (index === evidenceCriterionIds.length) {
        const actual = assessProviderEvidence(current, completeCosts).verdict;
        const expected = expectedVerdict(current);
        if (actual !== expected && failures.length < 10) {
          failures.push(`${JSON.stringify(current)}: ${actual}/${expected}`);
        }
        return;
      }

      const criterionId = evidenceCriterionIds[index];
      for (const level of levels) {
        current[criterionId] = level;
        visit(index + 1);
      }
    }

    visit(0);
    expect(failures).toEqual([]);
  }, 15_000);
});
