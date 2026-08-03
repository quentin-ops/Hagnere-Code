import { describe, expect, it } from "vitest";
import {
  accessRightControlIds,
  assessAccessRightsReadiness,
  createEmptyAccessRightContext,
  createEmptyAccessRightEvidence,
  type AccessRightContext,
  type AccessRightEvidence,
  type AccessRightVerdict,
  type ContextChoice,
  type RuleStatus,
} from "./access-rights-readiness";

const knownSimpleContext: AccessRightContext = {
  personalData: "no",
  sensitiveActions: "no",
  multipleEntities: "no",
  temporaryDelegations: "no",
};

function documentedEvidence(): AccessRightEvidence {
  return Object.fromEntries(
    accessRightControlIds.map((controlId) => [controlId, "documented"]),
  ) as AccessRightEvidence;
}

describe("assessAccessRightsReadiness", () => {
  it("crée un état initial explicite et non rassurant par défaut", () => {
    expect(createEmptyAccessRightContext()).toEqual({
      personalData: "unknown",
      sensitiveActions: "unknown",
      multipleEntities: "unknown",
      temporaryDelegations: "unknown",
    });
    expect(createEmptyAccessRightEvidence()).toEqual({
      matrix: "unknown",
      scopeAndRelations: "unknown",
      defaultDeny: "unknown",
      sensitiveApproval: "unknown",
      lifecycle: "unknown",
      acceptanceTests: "unknown",
      auditTrace: "unknown",
    });
  });

  it("traite les valeurs absentes ou étrangères comme inconnues", () => {
    const assessment = assessAccessRightsReadiness(
      {
        personalData: "yes",
        sensitiveActions: "no",
        multipleEntities: "no",
        temporaryDelegations: "maybe" as never,
      },
      {
        ...documentedEvidence(),
        auditTrace: "done" as never,
      },
    );

    expect(assessment.verdict).toBe("CLARIFY_CONTEXT");
    expect(assessment.concernedContext).toEqual(["temporaryDelegations"]);
  });

  it("garde les inconnues avant tous les manques documentés", () => {
    const assessment = assessAccessRightsReadiness(knownSimpleContext, {
      ...documentedEvidence(),
      matrix: "missing",
      lifecycle: "unknown",
    });

    expect(assessment.verdict).toBe("CLARIFY_RULES");
    expect(assessment.concernedControls).toEqual(["lifecycle"]);
  });

  it("arrête une matrice absente avant les autres défauts", () => {
    const assessment = assessAccessRightsReadiness(knownSimpleContext, {
      ...documentedEvidence(),
      matrix: "missing",
      defaultDeny: "missing",
      lifecycle: "missing",
    });

    expect(assessment.verdict).toBe("STOP_MATRIX_MISSING");
    expect(assessment.concernedControls).toEqual(["matrix"]);
  });

  it("arrête l’absence de refus par défaut", () => {
    const assessment = assessAccessRightsReadiness(knownSimpleContext, {
      ...documentedEvidence(),
      defaultDeny: "missing",
    });

    expect(assessment.verdict).toBe("STOP_DEFAULT_DENY_MISSING");
  });

  it("demande une validation dédiée seulement si les actions sont sensibles", () => {
    const missingApproval = {
      ...documentedEvidence(),
      sensitiveApproval: "missing" as const,
    };

    expect(
      assessAccessRightsReadiness(
        { ...knownSimpleContext, sensitiveActions: "yes" },
        missingApproval,
      ).verdict,
    ).toBe("STOP_SENSITIVE_APPROVAL_MISSING");

    expect(
      assessAccessRightsReadiness(knownSimpleContext, missingApproval).verdict,
    ).toBe("READY_FOR_WORKSHOP");
  });

  it("arrête le cycle de vie et les tests négatifs avant les revues", () => {
    const lifecycle = assessAccessRightsReadiness(knownSimpleContext, {
      ...documentedEvidence(),
      lifecycle: "missing",
      acceptanceTests: "missing",
      auditTrace: "missing",
    });
    expect(lifecycle.verdict).toBe("STOP_LIFECYCLE_MISSING");

    const tests = assessAccessRightsReadiness(knownSimpleContext, {
      ...documentedEvidence(),
      acceptanceTests: "missing",
      auditTrace: "missing",
    });
    expect(tests.verdict).toBe("STOP_NEGATIVE_TEST_MISSING");
  });

  it("refuse d’ignorer une portée absente, même dans un contexte simple", () => {
    const evidence = {
      ...documentedEvidence(),
      scopeAndRelations: "missing" as const,
    };

    expect(
      assessAccessRightsReadiness(
        { ...knownSimpleContext, multipleEntities: "yes" },
        evidence,
      ).verdict,
    ).toBe("REVIEW_RELATION_RULES");

    expect(
      assessAccessRightsReadiness(
        { ...knownSimpleContext, temporaryDelegations: "yes" },
        evidence,
      ).concernedContext,
    ).toEqual(["temporaryDelegations"]);

    const simpleContext = assessAccessRightsReadiness(
      knownSimpleContext,
      evidence,
    );
    expect(simpleContext.verdict).toBe("REVIEW_RELATION_RULES");
    expect(simpleContext.concernedContext).toEqual([]);
    expect(simpleContext.explanation).toContain("propre dossier");
  });

  it("sépare une trace à définir d’une alerte ou d’une conformité", () => {
    const assessment = assessAccessRightsReadiness(
      { ...knownSimpleContext, personalData: "yes" },
      { ...documentedEvidence(), auditTrace: "missing" },
    );

    expect(assessment.verdict).toBe("REVIEW_TRACE_SCOPE");
    expect(assessment.explanation).toContain(
      "Elle n’alerte pas automatiquement",
    );
    expect(assessment.explanation).toContain("ne prouve pas");
    expect(assessment.concernedContext).toEqual(["personalData"]);
  });

  it("ne transforme jamais le dernier verdict en autorisation", () => {
    const assessment = assessAccessRightsReadiness(
      knownSimpleContext,
      documentedEvidence(),
    );

    expect(assessment.verdict).toBe("READY_FOR_WORKSHOP");
    expect(assessment.explanation).toContain(
      "ne prouve ni l’application technique des droits, ni la sécurité, ni la conformité",
    );
  });

  it("respecte un oracle indépendant sur les 177 147 combinaisons", () => {
    const contextValues: ContextChoice[] = ["unknown", "no", "yes"];
    const statusValues: RuleStatus[] = ["unknown", "missing", "documented"];
    const evidence = createEmptyAccessRightEvidence();
    const failures: string[] = [];
    const reachedVerdicts = new Set<AccessRightVerdict>();
    let visited = 0;

    function expectedVerdict(
      context: AccessRightContext,
      currentEvidence: AccessRightEvidence,
    ): AccessRightVerdict {
      if (Object.values(context).includes("unknown")) {
        return "CLARIFY_CONTEXT";
      }

      const statuses = accessRightControlIds.map(
        (controlId) => currentEvidence[controlId],
      );
      if (statuses.includes("unknown")) return "CLARIFY_RULES";
      if (currentEvidence.matrix === "missing") {
        return "STOP_MATRIX_MISSING";
      }
      if (currentEvidence.defaultDeny === "missing") {
        return "STOP_DEFAULT_DENY_MISSING";
      }
      if (
        context.sensitiveActions === "yes" &&
        currentEvidence.sensitiveApproval === "missing"
      ) {
        return "STOP_SENSITIVE_APPROVAL_MISSING";
      }
      if (currentEvidence.lifecycle === "missing") {
        return "STOP_LIFECYCLE_MISSING";
      }
      if (currentEvidence.acceptanceTests === "missing") {
        return "STOP_NEGATIVE_TEST_MISSING";
      }
      if (currentEvidence.scopeAndRelations === "missing") {
        return "REVIEW_RELATION_RULES";
      }
      if (currentEvidence.auditTrace === "missing") {
        return "REVIEW_TRACE_SCOPE";
      }
      return "READY_FOR_WORKSHOP";
    }

    function visitEvidence(index: number, context: AccessRightContext) {
      if (index === accessRightControlIds.length) {
        visited += 1;
        const actual = assessAccessRightsReadiness(context, evidence).verdict;
        reachedVerdicts.add(actual);
        const expected = expectedVerdict(context, evidence);
        if (actual !== expected && failures.length < 10) {
          failures.push(
            `${JSON.stringify(context)} ${JSON.stringify(evidence)}: ${actual}/${expected}`,
          );
        }
        return;
      }

      const controlId = accessRightControlIds[index];
      for (const status of statusValues) {
        evidence[controlId] = status;
        visitEvidence(index + 1, context);
      }
    }

    for (const personalData of contextValues) {
      for (const sensitiveActions of contextValues) {
        for (const multipleEntities of contextValues) {
          for (const temporaryDelegations of contextValues) {
            visitEvidence(0, {
              personalData,
              sensitiveActions,
              multipleEntities,
              temporaryDelegations,
            });
          }
        }
      }
    }

    expect(accessRightControlIds).toHaveLength(7);
    expect(visited).toBe(177_147);
    expect(failures).toEqual([]);
    expect([...reachedVerdicts].sort()).toEqual(
      [
        "CLARIFY_CONTEXT",
        "CLARIFY_RULES",
        "READY_FOR_WORKSHOP",
        "REVIEW_RELATION_RULES",
        "REVIEW_TRACE_SCOPE",
        "STOP_DEFAULT_DENY_MISSING",
        "STOP_LIFECYCLE_MISSING",
        "STOP_MATRIX_MISSING",
        "STOP_NEGATIVE_TEST_MISSING",
        "STOP_SENSITIVE_APPROVAL_MISSING",
      ].sort(),
    );
  }, 20_000);
});
