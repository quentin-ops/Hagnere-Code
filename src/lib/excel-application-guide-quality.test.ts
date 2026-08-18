import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { getGuide, guideRobots } from "./guides";

const routeSource = readFileSync(
  join(
    process.cwd(),
    "src/app/guides/transformer-excel-en-application/page.tsx",
  ),
  "utf8",
);
const diagnosticSource = readFileSync(
  join(process.cwd(), "src/components/guides/ExcelDecisionDiagnostic.tsx"),
  "utf8",
);

const consultantJargon =
  /\b(cadrage|périmètre|preuve|socle|arbitrage|gouvernance|réversibilité|criticité|recette|jalon|livrable|trajectoire|activation)\b/i;

function visibleText(source: string): string {
  return source
    .replace(/<[^>]+>/g, " ")
    .replace(/\{[^}]*\}/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

describe("transformer-excel-en-application route quality contract", () => {
  it("opens with a short, direct address to the reader", () => {
    const lead = routeSource.match(/<p className="lead">([\s\S]*?)<\/p>/)?.[1];

    expect(lead).toBeDefined();
    expect(lead).toMatch(/\b(vous|votre|vos)\b/i);
    expect(visibleText(lead || "").split(/\s+/).length).toBeLessThanOrEqual(
      150,
    );
    expect(lead).not.toMatch(consultantJargon);
  });

  it("keeps every section title free of the forbidden agency vocabulary", () => {
    const titles = Array.from(
      routeSource.matchAll(/<h[23]\b[^>]*>([\s\S]*?)<\/h[23]>/g),
      (match) => visibleText(match[1]),
    );

    expect(titles.length).toBeGreaterThan(10);
    const invalidTitles = titles.filter((title) =>
      consultantJargon.test(title),
    );
    expect(invalidTitles).toEqual([]);
    expect(titles).toContain("Testez dix opérations avant de choisir");
  });

  it("limits every editorial table on this route to three columns", () => {
    const headerBlocks = Array.from(
      routeSource.matchAll(/<GuideTable[\s\S]*?headers=\{\[([\s\S]*?)\]\}/g),
    );

    expect(headerBlocks.length).toBeGreaterThan(10);
    const wideTables = headerBlocks
      .map((block) => block[1].match(/(["'])(?:\\.|(?!\1)[\s\S])*?\1/g) || [])
      .filter((headers) => headers.length > 3);
    expect(wideTables).toEqual([]);
    expect(routeSource).toContain(
      'headers={["Variable", "Hypothèse", "Valeur calculée"]}',
    );
  });

  it("states the universal first operation and the exact J11-J15 rules", () => {
    const normalized = routeSource.replace(/\s+/g, " ");

    expect(normalized).toContain(
      "création puis réouverture d’une fiche avec sa pièce jointe",
    );
    expect(normalized).toContain(
      "Pour le logiciel standard seulement, exiger au moins 80 % des exigences applicables.",
    );
    expect(normalized).toContain(
      "Pour toute voie, exiger la réussite de toutes les opérations applicables et de sa condition propre.",
    );
    expect(normalized).not.toContain("Écarter tout candidat sous 80 %");
  });

  it("remains a noindex draft awaiting human review", () => {
    const guide = getGuide("transformer-excel-en-application");

    expect(guide.editorialStatus).toBe("ready-for-human-review");
    expect(guide.readTimeMin).toBe(53);
    expect(guideRobots(guide)).toEqual({ index: false, follow: false });
    expect(routeSource.match(/<GuideInlineCTA\b/g)).toHaveLength(1);
    expect(routeSource).toContain("showSidebarCta={false}");
    expect(routeSource).toContain('ctaService="outils-internes"');
    expect(routeSource).toContain('ctaSource="guide-excel-application"');
    expect(routeSource).toContain("showPhone={false}");
  });

  it("ships the mapping, migration, user acceptance and follow-up teaching layers", () => {
    const normalized = routeSource.replace(/\s+/g, " ");

    expect(normalized).toContain(
      "Transformez chaque onglet, formule et geste en élément testable",
    );
    expect(normalized).toContain(
      "Du tableur à l’application : le registre de traduction minimal",
    );
    expect(normalized).toContain("Le protocole de migration et de bascule");
    expect(normalized).toContain(
      "Faites essayer l’outil aux personnes qui feront réellement le travail",
    );
    expect(normalized).toContain(
      "Après la bascule, contrôlez à 30, 60 et 90 jours",
    );
    expect(normalized).toContain(
      "une règle éditoriale interne de présélection Hagnéré Code, pas une norme universelle",
    );
    expect(normalized).toContain("Votre parcours express en cinq minutes");
    expect(normalized).toContain(
      "Le diagnostic ci-dessous l’applique volontairement sans réglage.",
    );
    expect(normalized).toContain(
      "L’outil affiche la progression de la préparation et des cinq dossiers",
    );
  });

  it("links the reproducible fixture and a broader international architecture set", () => {
    expect(routeSource).toContain(
      'href="/ressources/jeu-essai-migration-excel.zip"',
    );
    expect(routeSource).toContain(
      'href="/ressources/jeu-essai-migration-excel/oracle-import.csv"',
    );
    expect(routeSource).toContain(
      "https://support.google.com/appsheet/answer/10099416?hl=en",
    );
    expect(routeSource).toContain("https://retool.com/pricing");
    expect(routeSource).toContain("https://www.getgrist.com/pricing/");
    expect(routeSource).toContain("https://baserow.io/pricing");
    expect(routeSource).toContain(
      "https://support.airtable.com/docs/airtable-attachment-url-behavior",
    );
  });

  it("refreshes the local date after midnight, focus and visibility return", () => {
    expect(diagnosticSource).toContain(
      "const [currentDate, setCurrentDate] = useState(formatExcelLocalIsoDate)",
    );
    expect(diagnosticSource).toContain(
      "millisecondsUntilNextExcelLocalMidnight() + 100",
    );
    expect(diagnosticSource).toContain(
      'window.addEventListener("focus", handleWindowFocus)',
    );
    expect(diagnosticSource).toContain(
      'document.addEventListener("visibilitychange", handleVisibilityChange)',
    );
    expect(diagnosticSource).toContain(
      'window.removeEventListener("focus", handleWindowFocus)',
    );
    expect(diagnosticSource).toContain(
      'document.removeEventListener("visibilitychange", handleVisibilityChange)',
    );
    expect(diagnosticSource).toContain("window.clearTimeout(midnightTimer)");
    expect(diagnosticSource).not.toContain("const [currentDate] = useState");
  });

  it("ships the P4 accessibility and isolated-print safeguards", () => {
    expect(diagnosticSource).toContain('role="alert"');
    expect(diagnosticSource).toContain('aria-live="assertive"');
    expect(diagnosticSource).toContain("aria-pressed={selected}");
    expect(diagnosticSource).toContain(
      "aria-pressed={activePathway === pathway}",
    );
    expect(diagnosticSource).toContain("Justification pour X = 0");
    expect(diagnosticSource).toContain("Justification pour I = 0");
    expect(diagnosticSource).not.toContain("window.confirm");
    expect(diagnosticSource).toContain('id="excel-decision-diagnostic"');
    expect(diagnosticSource).toContain(
      "body *:not(#excel-decision-diagnostic):not(#excel-decision-diagnostic *):not(:has(#excel-decision-diagnostic)) { display: none !important; }",
    );
    expect(diagnosticSource).not.toMatch(
      /@media print \{[\s\S]*?body \* \{ visibility: hidden/,
    );
    expect(diagnosticSource).toContain(
      "#excel-decision-diagnostic > :not(.excel-print-report)",
    );
    expect(diagnosticSource).toContain("EXCEL_DECISION_DRAFT_STORAGE_KEY");
    expect(diagnosticSource).toContain("Enregistrer ici");
    expect(diagnosticSource).toContain("Télécharger le JSON");
    expect(diagnosticSource).toContain("Importer un JSON");
    expect(diagnosticSource).toContain("Copie manuelle du rapport");
    expect(diagnosticSource).toContain('aria-label="Progression du diagnostic"');
    expect(diagnosticSource).toContain(
      "Ce diagnostic applique volontairement la règle interne de",
    );
  });
});
