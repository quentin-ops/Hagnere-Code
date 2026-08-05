import { describe, expect, it } from "vitest";
import {
  buildDecisionDossier,
  createEmptyDecisionInputs,
  createEmptyExitGrid,
  evaluateDecision,
  organizationalDimensions,
  type DecisionInputs,
  type DimensionKey,
  type FailureAttribution,
} from "./airtable-notion-decision-model";

function controlledInputs(): DecisionInputs {
  const inputs = createEmptyDecisionInputs();
  inputs.context = {
    currentPlatform: "airtable",
    processShape: "structured-records",
    criticality: "important",
    boundarySeparation: "not-needed",
    activeUsers: 18,
    activeObjects: 42_000,
    monthlyWrites: 16_000,
  };
  for (const dimension of organizationalDimensions) {
    inputs.evidence[dimension.key] = "controlled";
  }
  return inputs;
}

function failAs(
  inputs: DecisionInputs,
  key: DimensionKey,
  attribution: Exclude<FailureAttribution, "unqualified">,
) {
  inputs.evidence[key] = "failed";
  inputs.failureAttribution[key] = attribution;
}

describe("Airtable / Notion decision model", () => {
  it("defines exactly twelve organizational dimensions", () => {
    expect(organizationalDimensions).toHaveLength(12);
    expect(new Set(organizationalDimensions.map((item) => item.key)).size).toBe(
      12,
    );
    expect(organizationalDimensions.map((item) => item.number)).toEqual(
      Array.from({ length: 12 }, (_, index) => index + 1),
    );
  });

  it("starts with a suspended decision and no manufactured recommendation", () => {
    const result = evaluateDecision(createEmptyDecisionInputs());
    expect(result.status).toBe("STOP_MISSING_EVIDENCE");
    expect(result.recommendation).toBeNull();
    expect(result.criticalUnknowns.length).toBeGreaterThanOrEqual(15);
  });

  it("keeps one critical unknown blocking when every other proof is controlled", () => {
    const inputs = controlledInputs();
    inputs.evidence.exportExit = "unknown";
    const result = evaluateDecision(inputs);
    expect(result.status).toBe("STOP_MISSING_EVIDENCE");
    expect(result.criticalUnknowns.join(" ")).toContain("Export et sortie");
  });

  it("accepts explicit zero counts without treating them as unknown", () => {
    const inputs = controlledInputs();
    inputs.context.activeUsers = 0;
    inputs.context.activeObjects = 0;
    inputs.context.monthlyWrites = 0;
    expect(evaluateDecision(inputs).status).toBe("KEEP");
  });

  it("rejects negative, fractional, non-finite and unsafe counts", () => {
    for (const [key, value] of [
      ["activeUsers", -1],
      ["activeObjects", 1.5],
      ["monthlyWrites", Number.POSITIVE_INFINITY],
      ["monthlyWrites", Number.NaN],
      ["activeUsers", Number.MAX_SAFE_INTEGER + 1],
    ] as const) {
      const inputs = controlledInputs();
      inputs.context[key] = value;
      const result = evaluateDecision(inputs);
      expect(result.status, `${key}:${value}`).toBe("STOP_MISSING_EVIDENCE");
      expect(result.blockingFailures.join(" ")).toContain("entier fini");
    }
  });

  it("accepts a safe extreme count without using it as an automatic migration threshold", () => {
    const inputs = controlledInputs();
    inputs.context.activeObjects = Number.MAX_SAFE_INTEGER;
    const result = evaluateDecision(inputs);
    expect(result.status).toBe("KEEP");
    expect(result.recommendation).toBe("current-platform");
  });

  it("can fairly recommend keeping Airtable", () => {
    const result = evaluateDecision(controlledInputs());
    expect(result.status).toBe("KEEP");
    expect(result.label).toBe("Conserver Airtable");
  });

  it("can fairly recommend keeping Notion when real controls are positive", () => {
    const inputs = controlledInputs();
    inputs.context.currentPlatform = "notion";
    inputs.context.processShape = "knowledge-collaboration";
    const result = evaluateDecision(inputs);
    expect(result.status).toBe("KEEP");
    expect(result.label).toBe("Conserver Notion");
  });

  it("routes remediable governance failures to strengthening", () => {
    const inputs = controlledInputs();
    failAs(inputs, "rolesPermissions", "governance-remediable");
    failAs(inputs, "ownershipAdministration", "governance-remediable");
    const result = evaluateDecision(inputs);
    expect(result.status).toBe("STRENGTHEN");
    expect(result.label).toBe("Renforcer Airtable");
    expect(result.recommendation).toBe("current-platform");
  });

  it("keeps every failed control in STOP until its cause is explicitly qualified", () => {
    const inputs = controlledInputs();
    inputs.evidence.rolesPermissions = "failed";

    const result = evaluateDecision(inputs);

    expect(result.status).toBe("STOP_MISSING_EVIDENCE");
    expect(result.recommendation).toBeNull();
    expect(result.governanceFailures).toEqual([]);
    expect(result.boundaryFailures).toEqual([]);
    expect(result.criticalUnknowns.join(" ")).toContain(
      "Rôles et droits : cause de l’échec à qualifier",
    );
  });

  it("routes rights and export as product limits only after explicit attribution", () => {
    for (const key of ["rolesPermissions", "exportExit"] as const) {
      const separable = controlledInputs();
      failAs(separable, key, "platform-boundary");
      separable.context.boundarySeparation = "yes";
      expect(evaluateDecision(separable).status, `${key}:yes`).toBe("HYBRID");

      const nonSeparable = controlledInputs();
      failAs(nonSeparable, key, "platform-boundary");
      nonSeparable.context.boundarySeparation = "no";
      expect(evaluateDecision(nonSeparable).status, `${key}:no`).toBe(
        "EXIT_PROGRESSIVELY",
      );
    }
  });

  it("ignores a stale cause when the corresponding control did not fail", () => {
    const inputs = controlledInputs();
    inputs.failureAttribution.exportExit = "platform-boundary";

    const result = evaluateDecision(inputs);

    expect(result.status).toBe("KEEP");
    expect(result.governanceFailures).toEqual([]);
    expect(result.boundaryFailures).toEqual([]);
  });

  it("routes one reproduced and separable platform limit to hybrid", () => {
    const inputs = controlledInputs();
    failAs(inputs, "integrationsApi", "platform-boundary");
    inputs.context.boundarySeparation = "yes";
    const result = evaluateDecision(inputs);
    expect(result.status).toBe("HYBRID");
    expect(result.recommendation).toBe("hybrid");
  });

  it("keeps hybrid while separating platform and governance failures and closing both", () => {
    const inputs = controlledInputs();
    failAs(inputs, "integrationsApi", "platform-boundary");
    failAs(inputs, "automationOperations", "governance-remediable");
    failAs(inputs, "ownershipAdministration", "governance-remediable");
    inputs.context.boundarySeparation = "yes";

    const result = evaluateDecision(inputs);

    expect(result.status).toBe("HYBRID");
    expect(result.label).toBe("Architecture hybride");
    expect(result.boundaryFailures).toEqual(["integrationsApi"]);
    expect(result.governanceFailures).toEqual([
      "automationOperations",
      "ownershipAdministration",
    ]);
    expect(result.reasons).toContain(
      "Limite de plateforme reproduite et isolable : Intégrations et API.",
    );
    expect(result.reasons).toContain(
      "Défauts de gouvernance à fermer en parallèle : Automatisations, Propriété et relève.",
    );
    expect(result.nextActions).toContain(
      "Nommer un responsable et une relève, puis fixer une date et une preuve de fermeture pour chaque défaut de gouvernance.",
    );
  });

  it("routes several structural limits to progressive exit even if one boundary seems separable", () => {
    const inputs = controlledInputs();
    failAs(inputs, "dataModelIntegrity", "platform-boundary");
    failAs(inputs, "concurrencyConflicts", "platform-boundary");
    inputs.context.boundarySeparation = "yes";
    const result = evaluateDecision(inputs);
    expect(result.status).toBe("EXIT_PROGRESSIVELY");
    expect(result.label).toContain("Sortir progressivement");
  });

  it("keeps governance failures visible and actionable during progressive exit", () => {
    const inputs = controlledInputs();
    failAs(inputs, "dataModelIntegrity", "platform-boundary");
    failAs(inputs, "concurrencyConflicts", "platform-boundary");
    failAs(inputs, "rolesPermissions", "governance-remediable");
    failAs(inputs, "supportRestoreContinuity", "governance-remediable");
    inputs.context.boundarySeparation = "yes";

    const result = evaluateDecision(inputs);

    expect(result.status).toBe("EXIT_PROGRESSIVELY");
    expect(result.label).toBe("Sortir progressivement de Airtable");
    expect(result.boundaryFailures).toEqual([
      "dataModelIntegrity",
      "concurrencyConflicts",
    ]);
    expect(result.governanceFailures).toEqual([
      "rolesPermissions",
      "supportRestoreContinuity",
    ]);
    expect(result.reasons).toContain(
      "Limites de plateforme reproduites : Données et intégrité, Écritures concurrentes.",
    );
    expect(result.reasons).toContain(
      "Défauts de gouvernance à fermer pendant la sortie : Rôles et droits, Support et restauration.",
    );
    expect(result.nextActions).toContain(
      "Nommer un responsable et une relève, puis fixer une date et une preuve de fermeture pour chaque défaut de gouvernance pendant la coexistence.",
    );
  });

  it("routes a non-separable platform limit to progressive exit", () => {
    const inputs = controlledInputs();
    failAs(inputs, "mobileDegraded", "platform-boundary");
    inputs.context.boundarySeparation = "no";
    expect(evaluateDecision(inputs).status).toBe("EXIT_PROGRESSIVELY");
  });

  it("requires boundary evidence instead of guessing hybrid or dedicated", () => {
    const inputs = controlledInputs();
    failAs(inputs, "integrationsApi", "platform-boundary");
    inputs.context.boundarySeparation = "unknown";
    const result = evaluateDecision(inputs);
    expect(result.status).toBe("STOP_MISSING_EVIDENCE");
    expect(result.recommendation).toBeNull();
    expect(result.criticalUnknowns.join(" ")).toContain("frontière");
  });

  it("does not accept a declared absence of boundary after reproducing one", () => {
    const inputs = controlledInputs();
    failAs(inputs, "volumeGrowthArchive", "platform-boundary");
    const result = evaluateDecision(inputs);
    expect(result.status).toBe("STOP_MISSING_EVIDENCE");
    expect(result.blockingFailures.join(" ")).toContain("limite de plateforme");
  });

  it("selects Airtable or Notion for a new controlled process without pretending to keep an existing tool", () => {
    const records = controlledInputs();
    records.context.currentPlatform = "none";
    expect(evaluateDecision(records).label).toBe("Retenir Airtable");

    const knowledge = controlledInputs();
    knowledge.context.currentPlatform = "none";
    knowledge.context.processShape = "knowledge-collaboration";
    expect(evaluateDecision(knowledge).label).toBe("Retenir Notion");
  });

  it("requires a tested separation for a new mixed process", () => {
    const inputs = controlledInputs();
    inputs.context.currentPlatform = "none";
    inputs.context.processShape = "mixed";
    inputs.context.boundarySeparation = "unknown";
    expect(evaluateDecision(inputs).status).toBe("STOP_MISSING_EVIDENCE");
    inputs.context.boundarySeparation = "yes";
    expect(evaluateDecision(inputs).status).toBe("HYBRID");
  });

  it("rejects a new mixed process when its required boundary is declared unnecessary", () => {
    const inputs = controlledInputs();
    inputs.context.currentPlatform = "none";
    inputs.context.processShape = "mixed";
    inputs.context.boundarySeparation = "not-needed";

    const result = evaluateDecision(inputs);

    expect(result.status).toBe("STOP_MISSING_EVIDENCE");
    expect(result.recommendation).toBeNull();
    expect(result.blockingFailures.join(" ")).toContain(
      "un nouveau processus mixte exige une frontière testée",
    );
  });

  it("keeps every dimension stable when an unrelated controlled answer changes", () => {
    const keys = organizationalDimensions.map((item) => item.key);
    for (const key of keys as DimensionKey[]) {
      const inputs = controlledInputs();
      inputs.evidence[key] = "controlled";
      expect(evaluateDecision(inputs).status, key).toBe("KEEP");
    }
  });

  it("builds a copyable dossier with all controls and exit fields", () => {
    const inputs = controlledInputs();
    failAs(inputs, "rolesPermissions", "governance-remediable");
    const result = evaluateDecision(inputs);
    const grid = createEmptyExitGrid();
    grid.objects = "Commandes et clients";
    grid.rollback = "Ancien outil en lecture pendant quatre semaines";
    const dossier = buildDecisionDossier(inputs, result, grid);

    expect(dossier).toContain("Orientation : Renforcer Airtable");
    expect(dossier).toContain("Recherche produit revalidée le 5 août 2026");
    expect(dossier).toContain(
      "2. Rôles et droits : Non — test en échec, cause à qualifier ; cause : Gouvernance remédiable",
    );
    expect(dossier).toContain("12. Support et restauration");
    expect(dossier).toContain("Objets et périmètre : Commandes et clients");
    expect(dossier).toContain(
      "Retour arrière et extinction : Ancien outil en lecture pendant quatre semaines",
    );
  });
});
