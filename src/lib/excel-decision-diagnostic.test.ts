import { describe, expect, it } from "vitest";
import { buildExcelDiagnosticClipboardText } from "./excel-decision-diagnostic";

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
        { label: "Le processus est stable depuis au moins un an", checked: false },
        { label: "Un logiciel existant couvre au moins 80 % du besoin", checked: false },
        { label: "Tous les utilisateurs ont déjà Microsoft 365", checked: true },
      ],
    });

    expect(text).toContain("Signaux cochés (3/8)");
    expect(text).toContain("Le processus est stable depuis au moins un an : Non");
    expect(text).toContain(
      "Un logiciel existant couvre au moins 80 % du besoin : Non",
    );
    expect(text).toContain("Tous les utilisateurs ont déjà Microsoft 365 : Oui");
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
