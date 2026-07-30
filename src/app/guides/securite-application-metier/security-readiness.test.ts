import { describe, expect, it } from "vitest";
import {
  assessSecurityReadiness,
  createEmptySecurityEvidence,
  securityControlIds,
  type BusinessImpact,
  type ControlStatus,
  type SecurityContext,
  type SecurityEvidence,
  type SecurityVerdict,
  type TernaryChoice,
} from "./security-readiness";

const knownContext: SecurityContext = {
  businessImpact: "material",
  personalData: "yes",
  internetExposure: "yes",
  activeIncident: "no",
};

function testedEvidence(): SecurityEvidence {
  return Object.fromEntries(
    securityControlIds.map((controlId) => [controlId, "tested"]),
  ) as SecurityEvidence;
}

describe("assessSecurityReadiness", () => {
  it("traite un incident actif avant toute revue générique", () => {
    const result = assessSecurityReadiness(
      { ...knownContext, activeIncident: "yes" },
      createEmptySecurityEvidence(),
    );

    expect(result.verdict).toBe("ESCALATE_ACTIVE_INCIDENT");
    expect(result.concernedContext).toEqual(["activeIncident"]);
  });

  it("ne compense jamais un contrôle bloquant", () => {
    const evidence = testedEvidence();
    evidence.maintenance = "blocker";

    const result = assessSecurityReadiness(knownContext, evidence);

    expect(result.verdict).toBe("STOP_RELEASE");
    expect(result.concernedControls).toEqual(["maintenance"]);
  });

  it("traite une valeur étrangère comme une inconnue", () => {
    const evidence = testedEvidence() as Record<string, unknown>;
    evidence.accessAndSecrets = "excellent";

    expect(
      assessSecurityReadiness(
        knownContext,
        evidence as Partial<SecurityEvidence>,
      ).verdict,
    ).toBe("CLARIFY_CONTROLS");
  });

  it("normalise aussi les valeurs étrangères du contexte", () => {
    const context = {
      ...knownContext,
      businessImpact: "negligible",
      activeIncident: "perhaps",
    } as unknown as SecurityContext;

    const result = assessSecurityReadiness(context, testedEvidence());

    expect(result.verdict).toBe("CLARIFY_CONTEXT");
    expect(result.concernedContext).toEqual([
      "businessImpact",
      "activeIncident",
    ]);
  });

  it("conserve la priorité d’un blocage sur un contexte encore inconnu", () => {
    const evidence = testedEvidence();
    evidence.maintenance = "blocker";

    const result = assessSecurityReadiness(
      {
        ...knownContext,
        businessImpact: "unknown",
      },
      evidence,
    );

    expect(result.verdict).toBe("STOP_RELEASE");
    expect(result.concernedControls).toEqual(["maintenance"]);
  });

  it("conserve chaque inconnue de contexte", () => {
    const result = assessSecurityReadiness(
      {
        ...knownContext,
        businessImpact: "unknown",
        personalData: "unknown",
      },
      testedEvidence(),
    );

    expect(result.verdict).toBe("CLARIFY_CONTEXT");
    expect(result.concernedContext).toEqual(["businessImpact", "personalData"]);
  });

  it("demande une preuve écrite avant un exercice", () => {
    const evidence = testedEvidence();
    evidence.incidentResponse = "verbal";

    expect(assessSecurityReadiness(knownContext, evidence).verdict).toBe(
      "REQUEST_WRITTEN_EVIDENCE",
    );
  });

  it("fait exercer la restauration avant la détection", () => {
    const evidence = testedEvidence();
    evidence.backupAndRestore = "written";
    evidence.loggingAndDetection = "written";

    expect(assessSecurityReadiness(knownContext, evidence).verdict).toBe(
      "TEST_RESTORE",
    );
  });

  it("exige un exercice des responsabilités et de la suppléance", () => {
    const evidence = testedEvidence();
    evidence.responsibilities = "written";

    const result = assessSecurityReadiness(knownContext, evidence);

    expect(result.verdict).toBe("ASSIGN_RESPONSIBILITY");
    expect(result.concernedControls).toEqual(["responsibilities"]);
  });

  it("ne confond pas dossier relisible et application sécurisée", () => {
    const limitedContext: SecurityContext = {
      businessImpact: "limited",
      personalData: "no",
      internetExposure: "no",
      activeIncident: "no",
    };
    const result = assessSecurityReadiness(limitedContext, testedEvidence());

    expect(result.verdict).toBe("READY_FOR_REVIEW");
    expect(result.title).toMatch(/revue métier limitée/i);
    expect(result.explanation).toMatch(
      /n’atteste pas la sécurité de l’application et n’autorise pas sa mise en production/i,
    );
  });

  it("ne donne pas la même prochaine étape aux contextes limité et renforcé", () => {
    const limitedContext: SecurityContext = {
      businessImpact: "limited",
      personalData: "no",
      internetExposure: "no",
      activeIncident: "no",
    };
    const reinforcedContext: SecurityContext = {
      businessImpact: "critical",
      personalData: "yes",
      internetExposure: "yes",
      activeIncident: "no",
    };

    const limited = assessSecurityReadiness(limitedContext, testedEvidence());
    const reinforced = assessSecurityReadiness(
      reinforcedContext,
      testedEvidence(),
    );

    expect(limited.verdict).toBe("READY_FOR_REVIEW");
    expect(reinforced.verdict).toBe("REVIEW_CONTEXTUAL_RISKS");
    expect(reinforced.concernedContext).toEqual([
      "businessImpact",
      "personalData",
      "internetExposure",
    ]);
    expect(reinforced.explanation).toContain(
      "appartenir à votre organisation ou être mobilisée à l’extérieur",
    );
  });

  it("couvre les branches de contexte indépendamment des contrôles", () => {
    const impacts: BusinessImpact[] = [
      "unknown",
      "limited",
      "material",
      "critical",
    ];
    const ternary: TernaryChoice[] = ["unknown", "no", "yes"];
    const failures: string[] = [];
    let visitedContexts = 0;

    for (const businessImpact of impacts) {
      for (const personalData of ternary) {
        for (const internetExposure of ternary) {
          for (const activeIncident of ternary) {
            visitedContexts += 1;
            const context: SecurityContext = {
              businessImpact,
              personalData,
              internetExposure,
              activeIncident,
            };
            const actual = assessSecurityReadiness(
              context,
              testedEvidence(),
            ).verdict;
            const hasUnknown =
              businessImpact === "unknown" ||
              personalData === "unknown" ||
              internetExposure === "unknown" ||
              activeIncident === "unknown";
            const expected: SecurityVerdict =
              activeIncident === "yes"
                ? "ESCALATE_ACTIVE_INCIDENT"
                : hasUnknown
                  ? "CLARIFY_CONTEXT"
                  : businessImpact === "material" ||
                      businessImpact === "critical" ||
                      personalData === "yes" ||
                      internetExposure === "yes"
                    ? "REVIEW_CONTEXTUAL_RISKS"
                    : "READY_FOR_REVIEW";

            if (actual !== expected) {
              failures.push(
                `${JSON.stringify(context)}: ${actual}/${expected}`,
              );
            }
          }
        }
      }
    }

    expect(visitedContexts).toBe(108);
    expect(failures).toEqual([]);
  });

  it("respecte un oracle indépendant sur les 390 625 combinaisons", () => {
    const statuses: ControlStatus[] = [
      "unknown",
      "verbal",
      "written",
      "tested",
      "blocker",
    ];
    const evidence = createEmptySecurityEvidence();
    const failures: string[] = [];
    let visitedCombinations = 0;
    const testRequired = [
      "accessAndSecrets",
      "deliveryAndDependencies",
      "incidentResponse",
    ] as const;

    function expectedVerdict(current: SecurityEvidence): SecurityVerdict {
      const values = securityControlIds.map((controlId) => current[controlId]);
      if (values.includes("blocker")) return "STOP_RELEASE";
      if (values.includes("unknown")) return "CLARIFY_CONTROLS";
      if (values.includes("verbal")) return "REQUEST_WRITTEN_EVIDENCE";
      if (current.responsibilities !== "tested") {
        return "ASSIGN_RESPONSIBILITY";
      }
      if (current.backupAndRestore !== "tested") return "TEST_RESTORE";
      if (current.loggingAndDetection !== "tested") return "TEST_DETECTION";
      if (testRequired.some((controlId) => current[controlId] !== "tested")) {
        return "RUN_CONTROL_TESTS";
      }
      return "REVIEW_CONTEXTUAL_RISKS";
    }

    function visit(index: number) {
      if (index === securityControlIds.length) {
        visitedCombinations += 1;
        const actual = assessSecurityReadiness(knownContext, evidence).verdict;
        const expected = expectedVerdict(evidence);
        if (actual !== expected && failures.length < 10) {
          failures.push(`${JSON.stringify(evidence)}: ${actual}/${expected}`);
        }
        return;
      }

      const controlId = securityControlIds[index];
      for (const status of statuses) {
        evidence[controlId] = status;
        visit(index + 1);
      }
    }

    visit(0);
    expect(securityControlIds).toHaveLength(8);
    expect(visitedCombinations).toBe(390_625);
    expect(failures).toEqual([]);
  }, 20_000);
});
