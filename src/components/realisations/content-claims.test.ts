import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { bodyHtml } from "@/components/homepage/body";
import { CASES } from "@/components/realisations/cases";

const projectRoot = process.cwd();

function read(relativePath: string): string {
  return fs.readFileSync(path.join(projectRoot, relativePath), "utf8");
}

const realizationSectionStart = bodyHtml.indexOf("<!-- REALISATIONS -->");
const realizationSectionEnd = bodyHtml.indexOf(
  "<!-- EQUIPE -->",
  realizationSectionStart,
);
const homepageRealizationClaims = bodyHtml.slice(
  realizationSectionStart,
  realizationSectionEnd,
);

const realizationClaims = [
  JSON.stringify(CASES),
  homepageRealizationClaims,
  read("src/app/realisations/page.tsx"),
  read("src/components/realisations/RealisationsIndexPage.tsx"),
].join("\n");

describe("realization claim safeguards", () => {
  it("does not publish unsupported commercial outcomes or volatile vanity metrics", () => {
    expect(realizationSectionStart).toBeGreaterThan(-1);
    expect(realizationSectionEnd).toBeGreaterThan(realizationSectionStart);

    const forbiddenClaims = [
      /5[ .]?400\s+(?:clients|utilisateurs)/i,
      /(?:clients?|utilisateurs)\s+(?:actifs|payants)/i,
      /\+\s*340\s*%/i,
      /4[,.]2\s*%/i,
      /pipeline commercial/i,
      /18\s*M\s*€/i,
      /284\s+clients/i,
      /200\s+backlinks/i,
      /35\s+pages/i,
      /WCAG\s+AA/i,
      /612\s+clients/i,
      /(?:×|x)\s*2[,.]5[^\n]{0,40}leads/i,
      /CPA\s+(?:moyen|cible|segment)/i,
      /3[,.]8\s*M\s*€/i,
      /99[,.]9\s*%/i,
      /médiane utilisateur/i,
      /valoris(?:ation|ée)/i,
      /Google Search Console à l'appui/i,
      /impressions Google/i,
      /clics SEO/i,
      /(?:229|389)\s*€\s*\/\s*an/i,
      /MVP\s+en\s+4\s+mois/i,
      /livré(?:e)?\s+en\s+(?:5\s+mois|6\s+semaines|8\s+semaines)/i,
    ];

    for (const claim of forbiddenClaims) {
      expect(realizationClaims, claim.source).not.toMatch(claim);
    }
  });

  it("does not claim unsupported leadership, fiscal conformity or model training", () => {
    expect(realizationClaims).not.toMatch(/premi(?:er|ère)\s+(?:logiciel|plateforme)/i);
    expect(realizationClaims).not.toMatch(/Conforme\s+BOI/i);
    expect(realizationClaims).not.toMatch(/entraîné(?:e)?\s+sur\s+(?:le\s+)?BO/i);
  });

  it("uses stable product highlights instead of a generic metrics field", () => {
    for (const caseStudy of Object.values(CASES)) {
      expect(caseStudy).not.toHaveProperty("metrics");
      expect(caseStudy).not.toHaveProperty("duration");
      expect(caseStudy.highlights).toHaveLength(4);
      expect(caseStudy.highlights.every(({ value, label }) => value && label)).toBe(true);
    }
  });

  it("maps SCI declarations to the correct tax regimes", () => {
    const sci = CASES["sci-ai"];
    const sciContent = JSON.stringify(sci);

    // Sources de référence : formulaires 2072 et obligations IS publiés par
    // impots.gouv.fr. La 2033 est une série de tableaux du réel simplifié IS,
    // pas la déclaration d'une SCI non soumise à l'IS.
    expect(sciContent).toContain("2072-C ou 2072-S");
    expect(sciContent).toContain("déclaration 2065");
    expect(sciContent).toContain("2033-A à 2033-G");
    expect(sciContent).not.toMatch(/2033\s*\(IR\)/i);
    expect(sciContent).not.toMatch(/2072\s*\(associés\)/i);
  });
});
