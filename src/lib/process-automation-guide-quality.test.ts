import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { getGuide, guideRobots } from "./guides";

const root = process.cwd();
const routeSource = readFileSync(
  join(root, "src/app/guides/automatiser-processus-metier/page.tsx"),
  "utf8",
);
const worksheetSource = readFileSync(
  join(root, "src/components/guides/ProcessAutomationDecisionWorksheet.tsx"),
  "utf8",
);
const resourceSource = readFileSync(
  join(root, "public/ressources/grille-premiere-automatisation.csv"),
  "utf8",
);
const comparisonResourceSource = readFileSync(
  join(root, "public/ressources/comparaison-options-automatisation.csv"),
  "utf8",
);
const normalizedRoute = routeSource.replace(/\s+/g, " ");
const normalizedCombined = `${routeSource}\n${worksheetSource}`.replace(
  /\s+/g,
  " ",
);

describe("automatiser un processus métier premium guide contract", () => {
  it("keeps the rewritten guide closed until human review", () => {
    const guide = getGuide("automatiser-processus-metier");

    expect(guide.dateModified).toBe("2026-07-28");
    expect(guide.readTimeMin).toBe(24);
    expect(guide.editorialStatus).toBe("ready-for-human-review");
    expect(guideRobots(guide)).toEqual({ index: false, follow: false });
    expect(routeSource).toContain("robots: guideRobots(guide)");
  });

  it("answers before conversion and keeps the Patrimoine editorial layout left aligned", () => {
    const leadIndex = routeSource.indexOf('<p className="lead">');
    const answerIndex = routeSource.indexOf('title="La réponse en 90 secondes"');
    const ctaIndex = routeSource.indexOf("<GuideInlineCTA");

    expect(leadIndex).toBeGreaterThan(-1);
    expect(answerIndex).toBeGreaterThan(leadIndex);
    expect(ctaIndex).toBeGreaterThan(answerIndex);
    expect(normalizedRoute).toContain(
      "Si vous ne lisez que cinq étapes",
    );
    expect(normalizedRoute).toContain(
      "copiez le dossier de tri affiché par le diagnostic",
    );
    expect(routeSource).toContain("<GuideLayout");
    expect(routeSource).toContain("showSidebarCta={false}");
    expect(routeSource).not.toMatch(/\btext-center\b|\bmx-auto\b/);
  });

  it("keeps the table of contents and the twelve main sections synchronized", () => {
    const expectedIds = [
      "definition",
      "observation",
      "diagnostic",
      "simplifier",
      "options",
      "techniques",
      "roi",
      "responsabilites",
      "pilote-recette",
      "suivi",
      "avis",
      "sources",
    ];
    const headingIds = [
      ...routeSource.matchAll(/<h2 id="([^"]+)"/g),
    ].map((match) => match[1]);

    expect(headingIds).toEqual(expectedIds);
    for (const id of expectedIds) {
      expect(routeSource).toContain(`id: "${id}"`);
    }
  });

  it("makes hard stops non-compensable and the interactive result modest", () => {
    for (const expected of [
      "quatre motifs d’arrêt",
      "ne peuvent jamais les compenser",
      "STOP sur l’automatisation complète",
      "Candidat à un pilote borné, pas à un déploiement général",
      "aucune donnée envoyée",
      "charge observée, pas une économie",
    ]) {
      expect(normalizedCombined).toContain(expected);
    }
    expect(routeSource).toContain("<ProcessAutomationDecisionWorksheet />");
  });

  it("separates cash, capacity, hiring, margin and risk without false TCO claims", () => {
    for (const expected of [
      "Trésorerie libérée",
      "Capacité utile",
      "Embauche évitée",
      "Marge additionnelle",
      "Risque réduit",
      "interdisez le double comptage",
      "Socle connu",
      "pas un coût complet",
      "À confirmer",
    ]) {
      expect(normalizedRoute).toContain(expected);
    }
    expect(normalizedRoute).not.toMatch(
      /calcul de rentabilité complet|coût complet de l’automatisation/i,
    );
  });

  it("publishes reproducible same-scope comparisons and conservative paybacks", () => {
    for (const expected of [
      "Mois équivalents à pleine couverture : 35,5 / 34 / 30,5",
      "Le même cas de 600 h/an change de gagnant selon l’horizon",
      "12 mois",
      "36 mois",
      "60 mois",
      "+ 3 867 €",
      "+ 28 109 €",
      "+ 53 681 €",
      "+ 56 370 €",
      "ROI −43,22 % ; retour théorique après environ 274,9 mois",
      "ROI provisoire 13,56 %",
      "retour théorique après environ 28,3 mois",
      "partent du premier euro engagé",
      "225 € de coûts récurrents par mois",
      "dates favorables, pas des promesses",
    ]) {
      expect(normalizedRoute).toContain(expected);
    }
    expect(normalizedRoute).not.toContain("53 665 €");
    expect(normalizedRoute).not.toContain(
      "retranchent 375 € de coûts récurrents par mois",
    );
    expect(routeSource).not.toContain("<ApplicationRoiCalculator");
  });

  it("uses current international public frameworks with explicit transfer limits", () => {
    for (const source of [
      "francenum.gouv.fr",
      "insee.fr",
      "anact.fr",
      "cnil.fr",
      "gsa.gov",
      "gov.uk",
      "digital.gov.au",
      "gao.gov",
      "canada.ca",
      "airc.nist.gov",
      "ai-act-service-desk.ec.europa.eu",
    ]) {
      expect(routeSource).toContain(source);
    }
    expect(normalizedRoute).toContain(
      "leurs règles, seuils et périmètres administratifs ne sont pas transposés automatiquement",
    );
  });

  it("ships two autonomous, rectangular and reader-facing resources", () => {
    const rows = resourceSource.trim().split(/\r?\n/);
    const columnCounts = rows.map((row) => row.split(";").length);
    const comparisonRows = comparisonResourceSource.trim().split(/\r?\n/);
    const comparisonColumnCounts = comparisonRows.map(
      (row) => row.split(";").length,
    );

    expect(rows).toHaveLength(4);
    expect(new Set(columnCounts)).toEqual(new Set([18]));
    expect(resourceSource).toContain("Processus candidat");
    expect(resourceSource).not.toContain("type_ligne");
    expect(comparisonRows).toHaveLength(10);
    expect(new Set(comparisonColumnCounts)).toEqual(new Set([20]));
    expect(comparisonResourceSource).toContain(
      "Coût horaire de référence HT",
    );
    expect(comparisonResourceSource).toContain(
      "Mois équivalents à pleine couverture",
    );
    expect(comparisonResourceSource).toContain(
      "600;60;Connecteur;5000;40;150;1200;2;3;55 %;44,20;59;58;70499;16818;53681",
    );
    expect(worksheetSource).toContain(
      'href="/ressources/grille-premiere-automatisation.csv"',
    );
    expect(worksheetSource).toContain(
      'href="/ressources/comparaison-options-automatisation.csv"',
    );
    expect(worksheetSource).toContain("download");
  });
});
