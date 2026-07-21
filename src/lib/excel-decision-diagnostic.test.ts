import { describe, expect, it } from "vitest";
import {
  buildExcelDiagnosticClipboardText,
  getExcelDiagnosticRecommendation,
  type ExcelDiagnosticAnswers,
} from "./excel-decision-diagnostic";

const BASE_ANSWERS: ExcelDiagnosticAnswers = {
  simultaneous: false,
  mobile: false,
  permissions: false,
  duplicates: false,
  auditTrail: false,
  fragileRules: false,
  integrations: false,
  costlyIncident: false,
  processRulesUnderstood: false,
  existingSoftwareCoversEssentials: false,
  microsoft365: false,
};

describe("Excel decision diagnostic clipboard export", () => {
  it("keeps every answer that can change the recommendation", () => {
    const text = buildExcelDiagnosticClipboardText({
      recommendation: {
        label: "Priorité : prototype Power Apps",
        title: "Votre besoin mérite un prototype.",
        summary: "Le processus bouge encore.",
        actions: ["Tester un seul flux."],
      },
      painScore: 3,
      painSignalCount: 8,
      selectedSignals: ["Plusieurs personnes modifient les mêmes données"],
      contextAnswers: [
        {
          label:
            "Le déroulement normal et les principales exceptions sont compris",
          checked: false,
        },
        {
          label: "Un logiciel existant couvre tous les besoins indispensables",
          checked: false,
        },
        {
          label: "Tous les utilisateurs ont déjà Microsoft 365",
          checked: true,
        },
      ],
    });

    expect(text).toContain("Signaux cochés (3/8)");
    expect(text).toContain(
      "Le déroulement normal et les principales exceptions sont compris : Non",
    );
    expect(text).toContain(
      "Un logiciel existant couvre tous les besoins indispensables : Non",
    );
    expect(text).toContain(
      "Tous les utilisateurs ont déjà Microsoft 365 : Oui",
    );
    expect(text).toContain("Le processus bouge encore.");
  });

  it("makes an empty pain-signal selection explicit", () => {
    const text = buildExcelDiagnosticClipboardText({
      recommendation: {
        label: "Priorité : fiabiliser Excel",
        title: "Gardez Excel pour le moment.",
        summary: "Les symptômes restent limités.",
        actions: [],
      },
      painScore: 0,
      painSignalCount: 8,
      selectedSignals: [],
      contextAnswers: [],
    });

    expect(text).toContain("- Aucun signal coché");
  });
});

describe("Excel diagnostic decision rules", () => {
  it("never recommends keeping Excel for a critical incident alone", () => {
    const recommendation = getExcelDiagnosticRecommendation({
      ...BASE_ANSWERS,
      costlyIncident: true,
    });

    expect(recommendation.code).toBe("secure_and_scope");
    expect(recommendation.code).not.toBe("keep_excel");
  });

  it("prioritizes existing software only when essential needs are covered", () => {
    const incompleteCoverage = getExcelDiagnosticRecommendation({
      ...BASE_ANSWERS,
      simultaneous: true,
      duplicates: true,
      fragileRules: true,
    });
    const essentialCoverage = getExcelDiagnosticRecommendation({
      ...BASE_ANSWERS,
      simultaneous: true,
      existingSoftwareCoversEssentials: true,
    });

    expect(incompleteCoverage.code).not.toBe("existing_software");
    expect(essentialCoverage.code).toBe("existing_software");
  });

  it("keeps Microsoft licences and connectors as checks, not assumptions", () => {
    const recommendation = getExcelDiagnosticRecommendation({
      ...BASE_ANSWERS,
      simultaneous: true,
      mobile: true,
      duplicates: true,
      microsoft365: true,
    });
    const actions = recommendation.actions.join(" ").toLowerCase();

    expect(recommendation.code).toBe("prototype");
    expect(actions).toContain("licences");
    expect(actions).toContain("connecteur");
    expect(actions).toContain("vérifier");
    expect(actions).not.toContain("déjà comprise");
  });
});
