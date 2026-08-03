import { describe, expect, it } from "vitest";
import {
  assessSaasSpecification,
  createDossierClairExample,
  createEmptySaasSpecification,
  specificationBlocks,
  specificationEntryFields,
  type SaasSpecificationPayload,
} from "./saas-specification-engine";

describe("assessSaasSpecification", () => {
  it("starts with explicit STOPs and never treats an empty field as zero", () => {
    const result = assessSaasSpecification(createEmptySaasSpecification());

    expect(result.status).toBe("STOP_REQUIRED_INPUTS_UNKNOWN");
    expect(result.blockingUnknowns).toHaveLength(
      specificationBlocks.length * 2 + 1,
    );
    expect(result.clarifications).toHaveLength(specificationBlocks.length * 3);
    expect(result.markdown).toContain("STOP — nom du produit à décider");
    expect(result.markdown).toContain("À décider");
    expect(result.markdown).not.toMatch(
      /\b(?:0|zéro)\s*(?:inconnue|manquant)/i,
    );
  });

  it("keeps every decision block as a non-compensable STOP", () => {
    for (const block of specificationBlocks) {
      const input = createDossierClairExample();
      input.entries[block.id].decision = "";

      const result = assessSaasSpecification(input);

      expect(result.status, block.id).toBe("STOP_REQUIRED_INPUTS_UNKNOWN");
      expect(result.blockingUnknowns, block.id).toEqual([
        expect.objectContaining({
          blockId: block.id,
          field: "decision",
        }),
      ]);
      expect(result.clarifications, block.id).toEqual([]);
    }
  });

  it("asks for clarification when ownership, proof or exclusion is absent", () => {
    for (const field of ["owner", "evidence", "exclusion"] as const) {
      const input = createDossierClairExample();
      input.entries.accessLifecycle[field] = "";

      const result = assessSaasSpecification(input);

      expect(result.status, field).toBe("CLARIFY_BEFORE_COMPARISON");
      expect(result.blockingUnknowns, field).toEqual([]);
      expect(result.clarifications, field).toEqual([
        expect.objectContaining({
          blockId: "accessLifecycle",
          field,
        }),
      ]);
    }
  });

  it("requires an explicit blocking-unknown declaration in every block", () => {
    for (const block of specificationBlocks) {
      const input = createDossierClairExample();
      input.entries[block.id].blockingUnknown = "";

      const result = assessSaasSpecification(input);

      expect(result.status, block.id).toBe("STOP_REQUIRED_INPUTS_UNKNOWN");
      expect(result.blockingUnknowns, block.id).toEqual([
        expect.objectContaining({
          blockId: block.id,
          field: "blockingUnknown",
          detail: expect.stringContaining("Déclaration absente"),
        }),
      ]);
      expect(result.clarifications, block.id).toEqual([]);
    }
  });

  it("accepts only the normalized explicit absence declaration as non-blocking", () => {
    const input = createDossierClairExample();
    input.entries.resilienceAndExit.blockingUnknown =
      "  AUCUNE   IDENTIFIÉE.  ";

    const result = assessSaasSpecification(input);

    expect(result.status).toBe("CANDIDATE_FOR_VENDOR_COMPARISON");
    expect(result.blockingUnknowns).toEqual([]);
    expect(result.markdown).toContain(
      "**Inconnue bloquante** — Aucune identifiée",
    );
  });

  it("turns every other non-empty blocking-unknown declaration into a STOP", () => {
    const input = createDossierClairExample();
    input.entries.resilienceAndExit.blockingUnknown =
      "Le seuil de restauration reste à arbitrer";

    const result = assessSaasSpecification(input);

    expect(result.status).toBe("STOP_REQUIRED_INPUTS_UNKNOWN");
    expect(result.blockingUnknowns).toEqual([
      expect.objectContaining({
        blockId: "resilienceAndExit",
        field: "blockingUnknown",
        detail: "Le seuil de restauration reste à arbitrer",
      }),
    ]);
    expect(result.markdown).toContain(
      "**Inconnue bloquante** — STOP — Le seuil de restauration reste à arbitrer",
    );
  });

  it.each([
    "À décider après le devis",
    "A DECIDER après le devis !",
    "à confirmer par le client",
    "A CONFIRMER par le client.",
    "TBD",
    "unknown",
    "inconnu",
    "INCONNUE",
    "inconnues",
    "STOP",
    "non renseigné",
    "NON RENSEIGNE",
  ])("treats the placeholder %s as an unknown", (placeholder) => {
    const input = createDossierClairExample();
    input.entries.offerAndEntitlements.decision = placeholder;

    const result = assessSaasSpecification(input);

    expect(result.status).toBe("STOP_REQUIRED_INPUTS_UNKNOWN");
    expect(result.blockingUnknowns).toEqual([
      expect.objectContaining({ blockId: "offerAndEntitlements" }),
    ]);
  });

  it.each([
    "Aucun problème",
    "Aucune inconnue déclarée",
    "Aucune identifiée sauf le coût de sortie",
  ])(
    "does not let the wording %s clear the dedicated blocking field",
    (declaration) => {
      const input = createDossierClairExample();
      input.entries.resilienceAndExit.blockingUnknown = declaration;

      const result = assessSaasSpecification(input);

      expect(result.status).toBe("STOP_REQUIRED_INPUTS_UNKNOWN");
      expect(result.blockingUnknowns).toEqual([
        expect.objectContaining({
          blockId: "resilienceAndExit",
          field: "blockingUnknown",
          detail: declaration,
        }),
      ]);
    },
  );

  it("does not mistake ordinary decided wording for an unknown", () => {
    const input = createDossierClairExample();
    input.entries.productBoundary.decision =
      "Le sponsor décide de ne pas exposer de téléchargement et décrit le parcours vendu.";

    expect(assessSaasSpecification(input).status).toBe(
      "CANDIDATE_FOR_VENDOR_COMPARISON",
    );
  });

  it("normalizes unsupported runtime values instead of stringifying them", () => {
    const input =
      createDossierClairExample() as unknown as SaasSpecificationPayload;
    if (!input?.entries) throw new Error("Test fixture unavailable");

    input.projectName = { unsafe: true };
    input.entries.dataAndSupport = {
      decision: ["not", "text"],
      owner: 42,
      evidence: false,
      exclusion: Symbol("value"),
    };

    const result = assessSaasSpecification(input);

    expect(result.status).toBe("STOP_REQUIRED_INPUTS_UNKNOWN");
    expect(result.markdown).not.toContain("[object Object]");
    expect(result.markdown).not.toContain("Symbol(value)");
    expect(result.markdown).not.toContain("undefined");
  });

  it("treats non-text runtime payload containers and numeric zero as missing", () => {
    const payload = {
      projectName: 0,
      entries: 0,
    } as unknown as SaasSpecificationPayload;

    const result = assessSaasSpecification(payload);

    expect(result.status).toBe("STOP_REQUIRED_INPUTS_UNKNOWN");
    expect(result.blockingUnknowns).toHaveLength(
      specificationBlocks.length * 2 + 1,
    );
    expect(result.markdown).toContain("STOP — nom du produit à décider");
    expect(result.markdown).not.toContain("[object Object]");
  });

  it("produces a complete and conditional candidate for the fictitious example", () => {
    const example = createDossierClairExample();
    const result = assessSaasSpecification(example);

    expect(result.status).toBe("CANDIDATE_FOR_VENDOR_COMPARISON");
    expect(
      specificationBlocks.every(
        ({ id }) => example.entries[id].blockingUnknown === "Aucune identifiée",
      ),
    ).toBe(true);
    expect(result.blockingUnknowns).toEqual([]);
    expect(result.clarifications).toEqual([]);
    expect(result.title).toMatch(/candidat/i);
    expect(result.explanation).toContain("ne prouve ni la justesse du besoin");
    expect(result.markdown).toContain(
      "# Cahier des charges SaaS — DossierClair — exemple entièrement fictif",
    );
    expect(result.markdown).toContain("Studio Rivage");
    expect(result.markdown).toContain("Remise aux prestataires");
  });

  it("renders all five distinct fields for every block", () => {
    const result = assessSaasSpecification(createDossierClairExample());

    for (const [index, block] of specificationBlocks.entries()) {
      expect(result.markdown).toContain(`## ${index + 1}. ${block.title}`);
    }

    for (const label of [
      "**Décision**",
      "**Responsable**",
      "**Preuve de réception**",
      "**Exclusion**",
      "**Inconnue bloquante**",
    ]) {
      expect(
        result.markdown.match(new RegExp(label.replaceAll("*", "\\*"), "g")),
      ).toHaveLength(specificationBlocks.length);
    }

    expect(specificationEntryFields).toEqual([
      "decision",
      "owner",
      "evidence",
      "exclusion",
      "blockingUnknown",
    ]);
  });

  it("is deterministic and does not mutate the input", () => {
    const input = createDossierClairExample();
    const before = JSON.stringify(input);
    const first = assessSaasSpecification(input);
    const second = assessSaasSpecification(input);

    expect(first).toEqual(second);
    expect(JSON.stringify(input)).toBe(before);
  });

  it("returns independent example and empty-state objects", () => {
    const firstExample = createDossierClairExample();
    const secondExample = createDossierClairExample();
    const firstEmpty = createEmptySaasSpecification();
    const secondEmpty = createEmptySaasSpecification();

    firstExample.entries.productBoundary.decision = "changed";
    firstEmpty.entries.productBoundary.owner = "changed";

    expect(secondExample.entries.productBoundary.decision).not.toBe("changed");
    expect(secondEmpty.entries.productBoundary.owner).toBe("");
  });

  it("contains no score, spreadsheet export or hidden architecture choice", () => {
    const result = assessSaasSpecification(createDossierClairExample());

    for (const forbidden of [
      /score\s*(?:global|sur|\/)/i,
      /note\s+pondérée/i,
      /\.(?:xlsx?|csv)\b/i,
      /architecture recommandée/i,
      /choisir Stripe/i,
      /accepté automatiquement/i,
    ]) {
      expect(result.markdown).not.toMatch(forbidden);
    }
  });
});
