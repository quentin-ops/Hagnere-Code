import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { getGuide, guideRobots } from "./guides";

const root = process.cwd();
const routeSource = readFileSync(
  join(root, "src/app/guides/valider-idee-saas-avant-developper/page.tsx"),
  "utf8",
);
const journalSource = readFileSync(
  join(root, "src/components/guides/SaasValidationDecisionJournal.tsx"),
  "utf8",
);
const engineSource = readFileSync(
  join(root, "src/lib/saas-validation-decision.ts"),
  "utf8",
);
const funnelSource = readFileSync(
  join(root, "src/components/project-funnel/ProjectFunnel.tsx"),
  "utf8",
);
const resourceSource = readFileSync(
  join(root, "public/ressources/journal-validation-saas.csv"),
  "utf8",
);
const normalizedRoute = routeSource.replace(/\s+/g, " ");
const normalizedCombined =
  `${routeSource}\n${journalSource}\n${engineSource}`.replace(/\s+/g, " ");

describe("valider une idée SaaS premium guide contract", () => {
  it("keeps the rewrite closed until human review", () => {
    const guide = getGuide("valider-idee-saas-avant-developper");

    expect(guide.dateModified).toBe("2026-07-28");
    expect(guide.readTimeMin).toBe(23);
    expect(guide.editorialStatus).toBe("ready-for-human-review");
    expect(guideRobots(guide)).toEqual({ index: false, follow: false });
    expect(routeSource).toContain("robots: guideRobots(guide)");
  });

  it("answers before conversion and removes the early commercial sidebar", () => {
    const leadIndex = routeSource.indexOf('<p className="lead">');
    const answerIndex = routeSource.indexOf(
      'title="La réponse en 90 secondes"',
    );
    const noBuildIndex = routeSource.indexOf(
      "Quand la meilleure décision est de ne rien développer",
    );
    const ctaIndex = routeSource.indexOf("<GuideInlineCTA");

    expect(leadIndex).toBeGreaterThan(-1);
    expect(answerIndex).toBeGreaterThan(leadIndex);
    expect(noBuildIndex).toBeGreaterThan(answerIndex);
    expect(ctaIndex).toBeGreaterThan(noBuildIndex);
    expect(routeSource).toContain("showSidebarCta={false}");
    expect(routeSource).not.toMatch(/\btext-center\b|\bmx-auto\b/);
    expect(routeSource).toContain(
      'ctaHref="/demarrer-un-projet?service=saas&source=guide-validation-saas"',
    );
    expect(funnelSource).toContain(
      'params.get("source") === "guide-validation-saas"',
    );
    expect(funnelSource).toContain('projectKind: "saas"');
    expect(funnelSource).toContain(
      "un autre test, un outil existant, un pilote borné et un MVP limité",
    );
    expect(routeSource).not.toContain('"@type": "FAQPage"');
    expect(routeSource).not.toContain("faqJsonLd");
  });

  it("keeps the table of contents and the thirteen sections synchronized", () => {
    const expectedIds = [
      "validation",
      "diagnostic",
      "preuve",
      "segment",
      "entretiens",
      "tests",
      "acheteur",
      "economie",
      "faisabilite",
      "cas",
      "usage",
      "decision",
      "plan-14-jours",
      "sources",
    ];
    const headingIds = [...routeSource.matchAll(/<h2 id="([^"]+)"/g)].map(
      (match) => match[1],
    );

    expect(headingIds).toEqual(expectedIds);
    for (const id of expectedIds) {
      expect(routeSource).toContain(`id: "${id}"`);
    }
  });

  it("uses a non-compensatory evidence ladder through retention", () => {
    for (const expected of [
      "Le verrou le plus faible décide",
      "une preuve forte ne compense jamais un STOP",
      "Fait ou comportement observé",
      "Engagement, usage ou investissement démontré",
      "PIVOT ou ARRÊT",
      "PILOTE BORNÉ",
      "CANDIDAT À UN MVP LIMITÉ",
      "usage répété",
      "renouvellement",
    ]) {
      expect(normalizedCombined).toContain(expected);
    }
    expect(routeSource).toContain("<SaasValidationDecisionJournal />");
  });

  it("delivers ICP, alternatives, analyzable interviews and the full buying committee", () => {
    for (const expected of [
      "Segment éligible",
      "Non-cible",
      "Déclencheur",
      "Statu quo",
      "Critères d’éligibilité avant le rendez-vous",
      "Contradiction",
      "Utilisateur",
      "Champion",
      "Finance / achats / juridique",
      "IT / sécurité / DPO",
      "Signataire",
    ]) {
      expect(normalizedCombined).toContain(expected);
    }
  });

  it("compares experiments by the exact question and limit they carry", () => {
    for (const expected of [
      "Recherche documentaire",
      "Prototype cliquable",
      "Page d’offre test",
      "Service réalisé manuellement",
      "Lettre d’intention ou précommande",
      "Pilote payé",
      "Ce qu’elle ne prouve pas",
      "l’honnêteté fait partie du test",
    ]) {
      expect(normalizedRoute).toContain(expected);
    }
  });

  it("recalculates unit economics and exposes all exclusions", () => {
    for (const expected of [
      "contribution mensuelle = prix encaissable",
      "délai de récupération = coût d’acquisition",
      "12 / 36 / 60 mois",
      "Le développement initial, les coûts fixes, la TVA, l’impôt",
      "sans perte de client",
    ]) {
      expect(normalizedRoute).toContain(expected);
    }
    for (const fixture of [
      "monthlyContributionEur: 240",
      "paybackMonths: 20",
      "cumulativeContribution12MonthsEur: -1920",
      "monthlyContributionEur: 510",
      "paybackMonths: 7.06",
      "cumulativeContribution60MonthsEur: 27000",
      "monthlyContributionEur: 730",
      "paybackMonths: 4.38",
      "cumulativeContribution60MonthsEur: 40600",
    ]) {
      expect(
        readFileSync(
          join(root, "src/lib/saas-validation-decision.test.ts"),
          "utf8",
        ),
      ).toContain(fixture);
    }
  });

  it("ships an autonomous rectangular journal with example and blank rows", () => {
    const rows = resourceSource.trim().split(/\r?\n/);
    const columnCounts = rows.map((row) => row.split(";").length);

    expect(rows).toHaveLength(17);
    expect(new Set(columnCounts)).toEqual(new Set([17]));
    expect(resourceSource).toContain("ConformiSuivi — exemple fictif");
    expect(resourceSource).toContain("Problème et déclencheur");
    expect(resourceSource).toContain("Usage et rétention");
    expect(resourceSource).toContain('"";"";"";"Problème et déclencheur"');
    const exampleRows = rows
      .slice(1, 9)
      .map((row) => row.split(";").map((cell) => cell.replace(/^"|"$/g, "")));
    const externalCostEur = exampleRows.reduce(
      (sum, row) => sum + Number(row[13]),
      0,
    );
    const founderHours = exampleRows.reduce(
      (sum, row) => sum + Number(row[14]),
      0,
    );
    expect(externalCostEur).toBe(1180);
    expect(founderHours).toBe(52);
    expect(externalCostEur + founderHours * 60).toBe(4300);
    expect(journalSource).toContain(
      'href="/ressources/journal-validation-saas.csv"',
    );
    expect(journalSource).toContain("Nouveau dossier vierge");
    expect(journalSource).toContain("copie manuelle toujours disponible");
  });

  it("uses current international frameworks and explicit transfer limits", () => {
    for (const source of [
      "gov.uk",
      "digital.gov.au",
      "canada.ca",
      "strategyzer.com",
      "steveblank.com",
      "ycombinator.com",
      "cnil.fr",
      "inpi.fr",
      "cyber.gouv.fr",
      "owasp.org",
      "ico.org.uk",
      "acma.gov.au",
      "crtc.gc.ca",
      "ftc.gov",
      "economie.gouv.fr",
    ]) {
      expect(routeSource).toContain(source);
    }
    expect(normalizedRoute).toContain(
      "leurs règles administratives, juridiques ou commerciales ne sont pas transposées automatiquement",
    );
    expect(normalizedRoute).toContain("aucune règle mondiale unique");
    expect(normalizedRoute).toContain("OWASP ASVS 5.0.0");
    expect(normalizedRoute).toContain("42 mesures publiées en 2017");
  });
});
