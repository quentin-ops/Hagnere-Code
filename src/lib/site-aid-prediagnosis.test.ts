import { describe, expect, it } from "vitest";
import {
  SITE_AID_PREDIAGNOSIS_DEFINITIONS,
  SITE_AID_PREDIAGNOSIS_ITEM_COUNT,
  createEmptySiteAidPreDiagnosis,
  createSiteAidPreDiagnosisTransfer,
  parseSiteAidPreDiagnosis,
  siteAidPreDiagnosisCorrectionTargetId,
} from "@/lib/site-aid-prediagnosis";

describe("site-aid-prediagnosis", () => {
  it("maps every unresolved item to its own editable correction control", () => {
    const ids = SITE_AID_PREDIAGNOSIS_DEFINITIONS.flatMap((definition) => [
      siteAidPreDiagnosisCorrectionTargetId(definition.id, "no"),
      siteAidPreDiagnosisCorrectionTargetId(definition.id, "confirm"),
    ]);

    expect(new Set(ids).size).toBe(SITE_AID_PREDIAGNOSIS_ITEM_COUNT * 2);
    expect(siteAidPreDiagnosisCorrectionTargetId("expenses", "no")).toBe(
      "site-aid-prediagnosis-expenses-no",
    );
    expect(siteAidPreDiagnosisCorrectionTargetId("expenses", "confirm")).toBe(
      "site-aid-prediagnosis-expenses-evidence",
    );
  });

  it("creates fourteen declarative unknowns without legal or numeric facts", () => {
    const empty = createEmptySiteAidPreDiagnosis();
    expect(empty.items).toHaveLength(SITE_AID_PREDIAGNOSIS_ITEM_COUNT);
    expect(empty.items.every((item) => item.status === "confirm")).toBe(true);
    expect(empty.items.every((item) => item.declaredEvidence === "")).toBe(
      true,
    );
    expect(empty.transferredAt).toBe("");
  });

  it("round-trips statuses, labels and declared evidence", () => {
    const statuses = Object.fromEntries(
      SITE_AID_PREDIAGNOSIS_DEFINITIONS.map((definition) => [
        definition.id,
        definition.id === "expenses" ? "no" : "documented",
      ]),
    ) as Record<string, "documented" | "no">;
    const transfer = createSiteAidPreDiagnosisTransfer(
      statuses,
      Object.fromEntries(
        SITE_AID_PREDIAGNOSIS_DEFINITIONS.map((definition) => [
          definition.id,
          definition.id === "expenses"
            ? "Déclaration interne : ligne à reventiler."
            : `Preuve déclarée pour ${definition.label}`,
        ]),
      ),
      "2026-07-26T12:00:00.000Z",
    );

    expect(parseSiteAidPreDiagnosis(transfer)).toEqual(transfer);
    expect(transfer.items.find((item) => item.id === "expenses")).toMatchObject(
      {
        label: "Dépenses admissibles",
        status: "no",
        declaredEvidence: "Déclaration interne : ligne à reventiler.",
      },
    );
  });

  it("rejects unknown keys, duplicate ids, missing controls and oversized text", () => {
    const unknownKey = {
      ...createEmptySiteAidPreDiagnosis(),
      verdict: "eligible",
    };
    expect(() => parseSiteAidPreDiagnosis(unknownKey)).toThrow(/verdict/);

    const duplicate = structuredClone(createEmptySiteAidPreDiagnosis());
    duplicate.items[1].id = duplicate.items[0].id;
    expect(() => parseSiteAidPreDiagnosis(duplicate)).toThrow(
      /ordre canonique|dupliqué/,
    );

    const missing = structuredClone(createEmptySiteAidPreDiagnosis());
    missing.items.pop();
    expect(() => parseSiteAidPreDiagnosis(missing)).toThrow(/exactement 14/);

    const oversized = structuredClone(createEmptySiteAidPreDiagnosis());
    oversized.items[0].declaredEvidence = "x".repeat(4_001);
    expect(() => parseSiteAidPreDiagnosis(oversized)).toThrow(/4000/);
  });

  it("rejects polluted objects, invalid statuses and impossible timestamps", () => {
    const polluted = JSON.parse(
      `{"kind":"hagnere-code-site-aid-prediagnosis","version":"site-aid-prediagnosis-r25-2026-07-26","transferredAt":"","items":[],"__proto__":{"polluted":true}}`,
    ) as unknown;
    expect(() => parseSiteAidPreDiagnosis(polluted)).toThrow(/__proto__/);
    expect(({} as { polluted?: boolean }).polluted).toBeUndefined();

    const invalidStatus = structuredClone(createEmptySiteAidPreDiagnosis()) as {
      items: Array<{ status: string }>;
    };
    invalidStatus.items[0].status = "probably";
    expect(() => parseSiteAidPreDiagnosis(invalidStatus)).toThrow(/status/);

    expect(() =>
      createSiteAidPreDiagnosisTransfer({}, {}, "2026-02-30T12:00:00.000Z"),
    ).toThrow(/UTC ISO/);
  });

  it("rejects reordered or tampered canonical labels and expected evidence", () => {
    const reordered = structuredClone(createEmptySiteAidPreDiagnosis());
    [reordered.items[0], reordered.items[1]] = [
      reordered.items[1],
      reordered.items[0],
    ];
    expect(() => parseSiteAidPreDiagnosis(reordered)).toThrow(
      /ordre canonique/,
    );

    const renamed = structuredClone(createEmptySiteAidPreDiagnosis());
    renamed.items[0].label = "Source prétendument validée";
    expect(() => parseSiteAidPreDiagnosis(renamed)).toThrow(
      /libellé canonique/,
    );

    const alteredEvidence = structuredClone(createEmptySiteAidPreDiagnosis());
    alteredEvidence.items[0].evidenceToConfirm = "Aucune preuve nécessaire";
    expect(() => parseSiteAidPreDiagnosis(alteredEvidence)).toThrow(
      /preuve canonique/,
    );
  });

  it("downgrades documented-without-proof on construction and rejects it on strict import", () => {
    const built = createSiteAidPreDiagnosisTransfer(
      { source: "documented" },
      {},
      "2026-07-26T12:00:00.000Z",
    );
    expect(built.items[0].status).toBe("confirm");

    const tampered = structuredClone(createEmptySiteAidPreDiagnosis());
    tampered.transferredAt = "2026-07-26T12:00:00.000Z";
    tampered.items[0].status = "documented";
    tampered.items[0].declaredEvidence = "   ";
    expect(() => parseSiteAidPreDiagnosis(tampered)).toThrow(
      /declaredEvidence est requis/,
    );
  });
});
