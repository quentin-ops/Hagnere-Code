export interface ExcelDiagnosticContextAnswer {
  label: string;
  checked: boolean;
}

export interface ExcelDiagnosticClipboardInput {
  recommendation: {
    label: string;
    title: string;
    summary: string;
    actions: readonly string[];
  };
  painScore: number;
  painSignalCount: number;
  selectedSignals: readonly string[];
  contextAnswers: readonly ExcelDiagnosticContextAnswer[];
}

export function buildExcelDiagnosticClipboardText({
  recommendation,
  painScore,
  painSignalCount,
  selectedSignals,
  contextAnswers,
}: ExcelDiagnosticClipboardInput): string {
  return [
    "Diagnostic Excel vers application — Hagnéré Code",
    `Résultat : ${recommendation.label}`,
    recommendation.title,
    recommendation.summary,
    "",
    `Signaux cochés (${painScore}/${painSignalCount}) :`,
    ...(selectedSignals.length > 0
      ? selectedSignals.map((signal) => `- ${signal}`)
      : ["- Aucun signal coché"]),
    "",
    "Contexte de décision :",
    ...contextAnswers.map(
      ({ label, checked }) => `- ${label} : ${checked ? "Oui" : "Non"}`,
    ),
    "",
    "Prochaines actions :",
    ...recommendation.actions.map((action) => `- ${action}`),
    "",
    "Résultat indicatif : à confronter au processus, aux données et aux offres du marché.",
  ].join("\n");
}
