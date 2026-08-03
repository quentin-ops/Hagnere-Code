import { describe, expect, it } from "vitest";
import {
  assessPriorityWorkshop,
  createEmptyPriorityWorkshop,
  createPilotFiveRequests,
  createPilotOverCapacity,
  createPilotUnknownCapacity,
  MAX_PERSON_DAYS,
  priorityStatuses,
  type HumanDecision,
  type PriorityRoute,
  type PriorityWorkshopInput,
} from "./priority-workshop-engine";

function updateRequest(
  input: PriorityWorkshopInput,
  id: string,
  update: Partial<PriorityWorkshopInput["requests"][number]>,
): PriorityWorkshopInput {
  return {
    ...input,
    requests: input.requests.map((request) =>
      request.id === id ? { ...request, ...update } : request,
    ),
  };
}

describe("assessPriorityWorkshop", () => {
  it("keeps the seven statuses in the frozen STOP order", () => {
    expect(priorityStatuses).toEqual([
      "STOP_REQUIRED_CONTEXT_UNKNOWN",
      "STOP_CRITICAL_ROUTE_UNASSIGNED",
      "STOP_DEPENDENCY_OR_CAPACITY_UNKNOWN",
      "STOP_SELECTED_LOT_EXCEEDS_CAPACITY",
      "TESTS_REQUIRED_BEFORE_BUILD",
      "NO_BUILD_CANDIDATE",
      "NEXT_LOT_CANDIDATE_FOR_REVIEW",
    ]);
  });

  it("starts with required context unknown and never invents zero", () => {
    const result = assessPriorityWorkshop(createEmptyPriorityWorkshop());

    expect(result.status).toBe("STOP_REQUIRED_CONTEXT_UNKNOWN");
    expect(result.totalSelectedPersonDays).toBe("0");
    expect(result.capacityPersonDays).toBeNull();
    expect(result.remainingPersonDays).toBeNull();
    expect(result.reasons).toContain("Nom de période manquant.");
    expect(result.markdown).toContain("Capacité : inconnue");
    expect(result.fieldErrors["priority-period"]).toContain(
      "Nom de période manquant.",
    );
    expect(result.fieldErrors["priority-capacity-state"]?.join(" ")).toContain(
      "Capacité totale explicitement inconnue",
    );
  });

  it("routes five fictitious requests and counts 6 + 3 once", () => {
    const result = assessPriorityWorkshop(createPilotFiveRequests());

    expect(result.status).toBe("NEXT_LOT_CANDIDATE_FOR_REVIEW");
    expect(result.fieldErrors).toEqual({});
    expect(result.criticalRequestIds).toEqual(["REQ-INCIDENT"]);
    expect(result.testRequestIds).toEqual(["REQ-TEST"]);
    expect(result.selectedRequestIds).toEqual(["REQ-BUILD"]);
    expect(result.selectedClosureIds).toEqual(["REQ-BUILD", "REQ-INTEGRATE"]);
    expect(result.totalSelectedPersonDays).toBe("9");
    expect(result.capacityPersonDays).toBe("10");
    expect(result.remainingPersonDays).toBe("1");
    expect(result.equation).toContain("REQ-BUILD (6) + REQ-INTEGRATE (3) = 9");
    expect(result.equation).toContain("chaque identifiant une fois");
    expect(result.markdown).not.toContain("à vérifier");
    expect(result.markdown).toContain("non applicable");
  });

  it("refuses a lot whose necessary integration has no owner", () => {
    const input = updateRequest(createPilotFiveRequests(), "REQ-INTEGRATE", {
      owner: "",
    });
    const result = assessPriorityWorkshop(input);

    expect(result.status).toBe("STOP_REQUIRED_CONTEXT_UNKNOWN");
    expect(result.selectedClosureIds).toEqual(["REQ-BUILD", "REQ-INTEGRATE"]);
    expect(result.totalSelectedPersonDays).toBe("9");
    expect(result.reasons).toContain(
      "REQ-INTEGRATE : responsable de l’action du lot manquant.",
    );
    expect(result.fieldErrors["priority-request-3-owner"]).toContain(
      "REQ-INTEGRATE : responsable de l’action du lot manquant.",
    );
    expect(result.markdown).toContain("- Responsable : à vérifier");
  });

  it("stops at 11 for capacity 10 and reports an overrun of 1", () => {
    const result = assessPriorityWorkshop(createPilotOverCapacity());

    expect(result.status).toBe("STOP_SELECTED_LOT_EXCEEDS_CAPACITY");
    expect(result.totalSelectedPersonDays).toBe("11");
    expect(result.capacityPersonDays).toBe("10");
    expect(result.remainingPersonDays).toBeNull();
    expect(result.overrunPersonDays).toBe("1");
    expect(result.fieldErrors["priority-capacity"]).toBeUndefined();
    expect(
      result.fieldErrors["priority-request-2-selection"]?.join(" "),
    ).toContain("dépassent la capacité");
  });

  it("counts a shared dependency once across two selected requests", () => {
    let input = createPilotFiveRequests();
    input = { ...input, capacityPersonDays: "20" };
    input = updateRequest(input, "REQ-TEST", {
      evidenceStrength: "strong",
      proposedDecision: "build",
      selectedForLot: true,
      dependencies: ["REQ-INTEGRATE"],
    });

    const result = assessPriorityWorkshop(input);

    expect(result.status).toBe("NEXT_LOT_CANDIDATE_FOR_REVIEW");
    expect(result.selectedClosureIds).toEqual([
      "REQ-TEST",
      "REQ-INTEGRATE",
      "REQ-BUILD",
    ]);
    expect(result.totalSelectedPersonDays).toBe("13");
    expect(result.remainingPersonDays).toBe("7");
  });

  it("keeps the subtotal visible when capacity is explicitly unknown", () => {
    const result = assessPriorityWorkshop(createPilotUnknownCapacity());

    expect(result.status).toBe("STOP_DEPENDENCY_OR_CAPACITY_UNKNOWN");
    expect(result.knownSubtotalPersonDays).toBe("9");
    expect(result.totalSelectedPersonDays).toBe("9");
    expect(result.capacityPersonDays).toBeNull();
    expect(result.remainingPersonDays).toBeNull();
    expect(result.reasons[0]).toContain(
      "Capacité totale explicitement inconnue",
    );
  });

  it("keeps the total unknown when a selected dependency effort is unknown", () => {
    const input = updateRequest(createPilotFiveRequests(), "REQ-INTEGRATE", {
      effortPersonDays: "",
    });
    const result = assessPriorityWorkshop(input);

    expect(result.status).toBe("STOP_DEPENDENCY_OR_CAPACITY_UNKNOWN");
    expect(result.knownSubtotalPersonDays).toBe("6");
    expect(result.totalSelectedPersonDays).toBeNull();
    expect(result.remainingPersonDays).toBeNull();
    expect(result.reasons).toContain("REQ-INTEGRATE : effort complet inconnu.");
  });

  it("refuses an unselected build decision whose effort is unknown", () => {
    const input = updateRequest(createPilotFiveRequests(), "REQ-BUILD", {
      effortPersonDays: "",
      selectedForLot: false,
    });
    const result = assessPriorityWorkshop(input);

    expect(result.status).toBe("STOP_DEPENDENCY_OR_CAPACITY_UNKNOWN");
    expect(result.reasons).toContain("REQ-BUILD : effort complet inconnu.");
    expect(result.totalSelectedPersonDays).toBeNull();
  });

  it("does not confuse an explicit zero effort with an unknown", () => {
    const input = updateRequest(createPilotFiveRequests(), "REQ-INTEGRATE", {
      effortPersonDays: "0",
    });
    const result = assessPriorityWorkshop(input);

    expect(result.status).toBe("NEXT_LOT_CANDIDATE_FOR_REVIEW");
    expect(result.totalSelectedPersonDays).toBe("6");
    expect(result.remainingPersonDays).toBe("4");
  });

  it.each([
    ["-1", "une valeur négative"],
    ["1.2345", "plus de 3 décimales"],
    ["1e3", "notation exponentielle"],
    ["1,5", "séparateur ambigu"],
    [String(MAX_PERSON_DAYS + 1), "borne technique"],
  ])("rejects raw effort %s before conversion", (raw, expectedReason) => {
    const input = updateRequest(createPilotFiveRequests(), "REQ-BUILD", {
      effortPersonDays: raw,
    });
    const result = assessPriorityWorkshop(input);

    expect(result.status).toBe("STOP_DEPENDENCY_OR_CAPACITY_UNKNOWN");
    expect(result.totalSelectedPersonDays).toBeNull();
    expect(result.reasons.join(" ")).toContain(expectedReason);
    expect(
      result.fieldErrors["priority-request-2-effort"]?.join(" "),
    ).toContain(expectedReason);
  });

  it.each([
    ["REQ-BUILD", "build", true],
    ["REQ-BUILD", "build", false],
    ["REQ-TEST", "test", true],
    ["REQ-TEST", "test", false],
    ["REQ-INTEGRATE", "buy_integrate", true],
    ["REQ-INTEGRATE", "buy_integrate", false],
    ["REQ-DEFER", "defer", true],
    ["REQ-DEFER", "defer", false],
    ["REQ-INCIDENT", "treat_first", true],
    ["REQ-INCIDENT", "treat_first", false],
    ["REQ-DEFER", "unknown", true],
    ["REQ-DEFER", "unknown", false],
  ] as const)(
    "rejects a non-empty exponent for %s with decision %s, selected=%s",
    (id, proposedDecision, selectedForLot) => {
      const input = updateRequest(createPilotFiveRequests(), id, {
        proposedDecision,
        selectedForLot,
        effortPersonDays: "1e3",
      });
      const result = assessPriorityWorkshop(input);
      const index = input.requests.findIndex((request) => request.id === id);

      expect(result.status).not.toBe("NEXT_LOT_CANDIDATE_FOR_REVIEW");
      expect(
        result.reasonsByStatus.STOP_DEPENDENCY_OR_CAPACITY_UNKNOWN.join(" "),
      ).toContain("notation exponentielle");
      expect(
        result.fieldErrors[`priority-request-${index}-effort`]?.join(" "),
      ).toContain("notation exponentielle");
      expect(result.markdown).toContain(`### ${id}`);
      expect(result.markdown).toContain(
        "- Effort complet : 1e3 jour(s)-personne",
      );
    },
  );

  it.each(["REQ-DEFER", "REQ-TEST", "REQ-INCIDENT"] as const)(
    "keeps a blank optional effort unknown without inventing zero for %s",
    (id) => {
      const input = updateRequest(createPilotFiveRequests(), id, {
        effortPersonDays: "",
      });
      const result = assessPriorityWorkshop(input);
      const index = input.requests.findIndex((request) => request.id === id);

      expect(result.status).toBe("NEXT_LOT_CANDIDATE_FOR_REVIEW");
      expect(
        result.reasonsByStatus.STOP_DEPENDENCY_OR_CAPACITY_UNKNOWN,
      ).toEqual([]);
      expect(
        result.fieldErrors[`priority-request-${index}-effort`],
      ).toBeUndefined();
      expect(result.markdown).toContain("- Effort complet : inconnu");
    },
  );

  it("accepts an explicit zero on an unselected deferred request without treating it as blank", () => {
    const input = updateRequest(createPilotFiveRequests(), "REQ-DEFER", {
      effortPersonDays: "0",
    });
    const result = assessPriorityWorkshop(input);

    expect(result.status).toBe("NEXT_LOT_CANDIDATE_FOR_REVIEW");
    expect(result.fieldErrors["priority-request-4-effort"]).toBeUndefined();
    expect(result.markdown).toContain("- Effort complet : 0 jour(s)-personne");
  });

  it("rejects a duplicate stable identifier", () => {
    const input = updateRequest(createPilotFiveRequests(), "REQ-TEST", {
      id: "REQ-BUILD",
    });
    const result = assessPriorityWorkshop(input);

    expect(result.status).toBe("STOP_DEPENDENCY_OR_CAPACITY_UNKNOWN");
    expect(result.reasons).toContain("Identifiant dupliqué : REQ-BUILD.");
  });

  it("rejects missing, self and cyclic dependencies without an exploitable total", () => {
    const missing = assessPriorityWorkshop(
      updateRequest(createPilotFiveRequests(), "REQ-BUILD", {
        dependencies: ["REQ-ABSENT"],
      }),
    );
    expect(missing.status).toBe("STOP_DEPENDENCY_OR_CAPACITY_UNKNOWN");
    expect(missing.reasons.join(" ")).toContain(
      "dépendance inconnue REQ-ABSENT",
    );
    expect(
      missing.fieldErrors["priority-request-2-dependencies"]?.join(" "),
    ).toContain("dépendance inconnue REQ-ABSENT");

    const self = assessPriorityWorkshop(
      updateRequest(createPilotFiveRequests(), "REQ-BUILD", {
        dependencies: ["REQ-BUILD"],
      }),
    );
    expect(self.status).toBe("STOP_DEPENDENCY_OR_CAPACITY_UNKNOWN");
    expect(self.reasons.join(" ")).toContain("dépendance vers elle-même");

    let cycleInput = updateRequest(createPilotFiveRequests(), "REQ-INTEGRATE", {
      dependencies: ["REQ-BUILD"],
    });
    cycleInput = updateRequest(cycleInput, "REQ-BUILD", {
      dependencies: ["REQ-INTEGRATE"],
    });
    const cycle = assessPriorityWorkshop(cycleInput);
    expect(cycle.status).toBe("STOP_DEPENDENCY_OR_CAPACITY_UNKNOWN");
    expect(cycle.reasons.join(" ")).toContain("Cycle de dépendances");
  });

  it("requires a complete test for weak evidence, then returns the test status", () => {
    const missingThreshold = assessPriorityWorkshop(
      updateRequest(createPilotFiveRequests(), "REQ-TEST", {
        selectedForLot: true,
        testThreshold: "",
      }),
    );
    expect(missingThreshold.status).toBe("STOP_REQUIRED_CONTEXT_UNKNOWN");
    expect(missingThreshold.reasons.join(" ")).toContain(
      "preuve faible, seuil du test manquant",
    );

    const completeTestInput = updateRequest(
      { ...createPilotFiveRequests(), capacityPersonDays: "20" },
      "REQ-TEST",
      {
        selectedForLot: true,
      },
    );
    const completeTest = assessPriorityWorkshop(completeTestInput);
    expect(completeTest.status).toBe("TESTS_REQUIRED_BEFORE_BUILD");
    expect(completeTest.reasons.join(" ")).toContain("test explicite requis");
  });

  it("requires a complete protocol for every proposed test action", () => {
    const input = updateRequest(createPilotFiveRequests(), "REQ-INTEGRATE", {
      proposedDecision: "test",
      selectedForLot: true,
      smallestTest: "",
      testMeasure: "",
      testThreshold: "",
    });
    const result = assessPriorityWorkshop(input);

    expect(result.status).toBe("STOP_REQUIRED_CONTEXT_UNKNOWN");
    expect(result.reasons.join(" ")).toContain(
      "décision tester, plus petit test manquant",
    );
    expect(result.selectedClosureIds).toEqual(["REQ-BUILD", "REQ-INTEGRATE"]);
    expect(result.totalSelectedPersonDays).toBe("9");
  });

  it("uses a neutral test label for strong evidence with an explicit test decision", () => {
    const input = updateRequest(
      { ...createPilotFiveRequests(), capacityPersonDays: "20" },
      "REQ-TEST",
      {
        evidenceStrength: "strong",
        proposedDecision: "test",
        selectedForLot: true,
      },
    );
    const result = assessPriorityWorkshop(input);

    expect(result.status).toBe("TESTS_REQUIRED_BEFORE_BUILD");
    expect(result.publicLabel).toBe(
      "Tester avant de construire — test explicite requis",
    );
    expect(result.publicLabel).not.toContain("hypothèse");
    expect(result.reasons).toContain(
      "REQ-TEST : test explicite requis avant une décision de construction.",
    );
    expect(result.reasons.join(" ")).not.toContain("preuve faible");
  });

  it("keeps the neutral label while the reason identifies a weak build hypothesis", () => {
    const input = updateRequest(createPilotFiveRequests(), "REQ-BUILD", {
      evidenceStrength: "weak",
      smallestTest: "Prototype du lot groupé sur trois séquences fictives.",
      testMeasure: "Séquences terminées sans erreur",
      testThreshold: "3 sur 3",
    });
    const result = assessPriorityWorkshop(input);

    expect(result.status).toBe("TESTS_REQUIRED_BEFORE_BUILD");
    expect(result.publicLabel).toBe(
      "Tester avant de construire — test explicite requis",
    );
    expect(result.reasons).toContain(
      "REQ-BUILD : une preuve faible complète ouvre un test, pas une construction immédiate.",
    );
  });

  it("keeps an unassigned critical route above dependency and capacity reasons", () => {
    let input = updateRequest(createPilotFiveRequests(), "REQ-INCIDENT", {
      owner: "",
      criticalNextAction: "",
    });
    input = { ...input, capacityState: "unknown", capacityPersonDays: "" };
    const result = assessPriorityWorkshop(input);

    expect(result.status).toBe("STOP_CRITICAL_ROUTE_UNASSIGNED");
    expect(result.reasons.join(" ")).toContain(
      "voie critique sans responsable",
    );
    expect(result.reasons.join(" ")).toContain(
      "voie critique sans prochaine action assez précise pour être planifiée",
    );
    expect(
      result.reasonsByStatus.STOP_DEPENDENCY_OR_CAPACITY_UNKNOWN.join(" "),
    ).toContain("Capacité totale explicitement inconnue");
  });

  it.each(["build", "test", "buy_integrate", "defer"] as const)(
    "refuses the decision %s on a critical route",
    (proposedDecision) => {
      const input = updateRequest(createPilotFiveRequests(), "REQ-INCIDENT", {
        proposedDecision,
        reopenEvent:
          proposedDecision === "defer" ? "Revue sécurité terminée" : "",
      });
      const result = assessPriorityWorkshop(input);

      expect(result.status).toBe("STOP_REQUIRED_CONTEXT_UNKNOWN");
      expect(result.reasons.join(" ")).toContain(
        "voie d’instruction « Incident à traiter séparément » est incohérente",
      );
      expect(result.totalSelectedPersonDays).toBe("9");
      expect(result.selectedClosureIds).toEqual(["REQ-BUILD", "REQ-INTEGRATE"]);
    },
  );

  it("refuses treat-first on a comparable request", () => {
    const input = updateRequest(createPilotFiveRequests(), "REQ-DEFER", {
      proposedDecision: "treat_first",
    });
    const result = assessPriorityWorkshop(input);

    expect(result.status).toBe("STOP_REQUIRED_CONTEXT_UNKNOWN");
    expect(result.reasons.join(" ")).toContain(
      "voie d’instruction « Demande comparable » est incohérente",
    );
    expect(result.totalSelectedPersonDays).toBe("9");
  });

  it("enforces every known route and decision pair", () => {
    const routes: PriorityRoute[] = [
      "comparable",
      "incident",
      "security",
      "legal_compliance",
      "contract_commitment",
      "foundational_dependency",
    ];
    const decisions: HumanDecision[] = [
      "build",
      "test",
      "treat_first",
      "buy_integrate",
      "defer",
    ];

    for (const route of routes) {
      for (const proposedDecision of decisions) {
        const input = updateRequest(createPilotFiveRequests(), "REQ-INCIDENT", {
          route,
          proposedDecision,
          reopenEvent:
            proposedDecision === "defer" ? "Revue qualifiée terminée" : "",
        });
        const result = assessPriorityWorkshop(input);
        const hasMatrixStop =
          result.reasonsByStatus.STOP_REQUIRED_CONTEXT_UNKNOWN.some((reason) =>
            reason.includes("est incohérente avec la décision"),
          );
        const expectedCompatible =
          route === "comparable"
            ? proposedDecision !== "treat_first"
            : proposedDecision === "treat_first";

        expect(hasMatrixStop, `${route} + ${proposedDecision}`).toBe(
          !expectedCompatible,
        );
      }
    }
  });

  it("keeps every STOP-facing output in reader language", () => {
    const unknownWay = assessPriorityWorkshop(
      updateRequest(createPilotFiveRequests(), "REQ-BUILD", {
        route: "unknown",
      }),
    );
    const incompatibleWay = assessPriorityWorkshop(
      updateRequest(createPilotFiveRequests(), "REQ-INCIDENT", {
        route: "comparable",
        proposedDecision: "treat_first",
      }),
    );
    const selectedDeferred = assessPriorityWorkshop(
      updateRequest(createPilotFiveRequests(), "REQ-DEFER", {
        selectedForLot: true,
      }),
    );
    const deferredDependency = assessPriorityWorkshop(
      updateRequest(createPilotFiveRequests(), "REQ-INTEGRATE", {
        proposedDecision: "defer",
        reopenEvent: "Le fournisseur retire son blocage",
      }),
    );
    const unassignedCriticalWay = assessPriorityWorkshop(
      updateRequest(createPilotFiveRequests(), "REQ-INCIDENT", {
        owner: "",
        criticalNextAction: "",
      }),
    );

    for (const result of [
      unknownWay,
      incompatibleWay,
      selectedDeferred,
      deferredDependency,
      unassignedCriticalWay,
      assessPriorityWorkshop(createPilotUnknownCapacity()),
      assessPriorityWorkshop(createPilotOverCapacity()),
    ]) {
      const readerOutput = priorityStatuses.reduce(
        (copy, status) => copy.replaceAll(status, ""),
        [
          result.publicLabel,
          ...result.reasons,
          result.equation,
          result.markdown,
        ].join("\n"),
      );
      expect(readerOutput).not.toMatch(
        /\b(?:route|fermeture|comptable|comptables)\b/iu,
      );
    }

    expect(unknownWay.markdown).toContain(
      "- Voie d’instruction : Voie d’instruction à vérifier",
    );
    expect(unknownWay.reasons.join(" ")).toContain(
      "voie d’instruction à vérifier",
    );
    expect(incompatibleWay.reasons.join(" ")).toContain(
      "la voie d’instruction",
    );
    expect(selectedDeferred.reasons.join(" ")).toContain(
      "pour entrer dans le calcul de capacité",
    );
    expect(deferredDependency.reasons.join(" ")).toContain(
      "ne peut pas entrer dans le calcul de capacité",
    );
    expect(deferredDependency.equation).toContain(
      "décisions exclues du calcul de capacité",
    );
  });

  it("excludes a selected deferred request from closure and capacity", () => {
    const input = updateRequest(createPilotFiveRequests(), "REQ-DEFER", {
      selectedForLot: true,
    });
    const result = assessPriorityWorkshop(input);

    expect(result.status).toBe("STOP_REQUIRED_CONTEXT_UNKNOWN");
    expect(result.selectedRequestIds).toEqual(["REQ-BUILD"]);
    expect(result.selectedClosureIds).toEqual(["REQ-BUILD", "REQ-INTEGRATE"]);
    expect(result.totalSelectedPersonDays).toBe("9");
    expect(result.remainingPersonDays).toBe("1");
    expect(result.overrunPersonDays).toBeNull();
    expect(result.reasonsByStatus.STOP_SELECTED_LOT_EXCEEDS_CAPACITY).toEqual(
      [],
    );
    expect(result.reasons.join(" ")).toContain(
      "pour entrer dans le calcul de capacité",
    );
  });

  it("excludes a selected critical action even when treat-first is coherent", () => {
    const input = updateRequest(createPilotFiveRequests(), "REQ-INCIDENT", {
      selectedForLot: true,
    });
    const result = assessPriorityWorkshop(input);

    expect(result.status).toBe("STOP_REQUIRED_CONTEXT_UNKNOWN");
    expect(result.selectedRequestIds).toEqual(["REQ-BUILD"]);
    expect(result.selectedClosureIds).toEqual(["REQ-BUILD", "REQ-INTEGRATE"]);
    expect(result.totalSelectedPersonDays).toBe("9");
    expect(result.reasons.join(" ")).toContain(
      "une voie critique ne peut pas être sélectionnée",
    );
    expect(result.equation).toContain("toutes les voies critiques");
    expect(result.equation).not.toContain("voies critiques non sélectionnées");
  });

  it("keeps a selected integration legitimate and deduplicated", () => {
    const input = updateRequest(createPilotFiveRequests(), "REQ-INTEGRATE", {
      selectedForLot: true,
    });
    const result = assessPriorityWorkshop(input);

    expect(result.status).toBe("NEXT_LOT_CANDIDATE_FOR_REVIEW");
    expect(result.selectedRequestIds).toEqual(["REQ-BUILD", "REQ-INTEGRATE"]);
    expect(result.selectedClosureIds).toEqual(["REQ-BUILD", "REQ-INTEGRATE"]);
    expect(result.totalSelectedPersonDays).toBe("9");
  });

  it("keeps a deferred dependency out of the closure and makes the total unknown", () => {
    const input = updateRequest(createPilotFiveRequests(), "REQ-INTEGRATE", {
      proposedDecision: "defer",
      reopenEvent: "Le fournisseur retire son blocage",
    });
    const result = assessPriorityWorkshop(input);

    expect(result.status).toBe("STOP_DEPENDENCY_OR_CAPACITY_UNKNOWN");
    expect(result.selectedClosureIds).toEqual(["REQ-BUILD"]);
    expect(result.knownSubtotalPersonDays).toBe("6");
    expect(result.totalSelectedPersonDays).toBeNull();
    expect(result.reasons.join(" ")).toContain(
      "dépendance nécessaire ne peut pas entrer dans le calcul de capacité",
    );
  });

  it("requires a reopening event before a request can be deferred", () => {
    const result = assessPriorityWorkshop(
      updateRequest(createPilotFiveRequests(), "REQ-DEFER", {
        reopenEvent: "",
      }),
    );

    expect(result.status).toBe("STOP_REQUIRED_CONTEXT_UNKNOWN");
    expect(result.reasons.join(" ")).toContain(
      "événement observable de réouverture",
    );
  });

  it("returns no build candidate when every request is routed elsewhere", () => {
    const input = updateRequest(createPilotFiveRequests(), "REQ-BUILD", {
      proposedDecision: "buy_integrate",
      selectedForLot: false,
    });
    const result = assessPriorityWorkshop(input);

    expect(result.status).toBe("NO_BUILD_CANDIDATE");
    expect(result.reasons[0]).toContain("Aucune demande comparable");
  });
});
