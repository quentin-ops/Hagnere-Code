import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { bodyHtml } from "@/components/homepage/body";
import { CASES } from "@/components/realisations/cases";
import { buildCaseStudyStructuredData } from "@/lib/case-study-structured-data";

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
  read("src/app/realisations/[slug]/page.tsx"),
  read("src/app/realisations/[slug]/opengraph-image.tsx"),
  read("src/components/realisations/CaseStudyPage.tsx"),
  read("src/components/realisations/RealisationsIndexPage.tsx"),
  read("src/lib/case-study-structured-data.ts"),
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

  it("publishes only dated external analyses and no unsupported proof pack", () => {
    for (const caseStudy of Object.values(CASES)) {
      expect(caseStudy.status).toBe("Analyse publique externe");
      expect(caseStudy.sourceCheckedAt).toBe("20 juillet 2026");
      expect(caseStudy.engagement).toBe(
        "Source externe consultée le 20 juillet 2026",
      );
      expect(caseStudy).not.toHaveProperty("services");
      expect(caseStudy).not.toHaveProperty("team");
      expect(caseStudy).not.toHaveProperty("stack");
      expect(caseStudy.heroIntro).toMatch(/source publique externe/i);
      expect(caseStudy.heroIntro).toMatch(/ne prouve ni/i);
      expect(caseStudy.seo?.description).toMatch(/source publique externe/i);
    }

    expect(realizationClaims).not.toMatch(/produits? opérés? en production/i);
    expect(realizationClaims).not.toMatch(/\bEN PROD(?:UCTION)?\b/i);
    expect(realizationClaims).not.toMatch(/parler à[^.!?]{0,40}utilisateur réel/i);
    expect(realizationClaims).not.toMatch(/pi[eè]ces? sur demande/i);
    expect(realizationClaims).not.toMatch(/reste(?:nt)? à corroborer par des pièces/i);
    expect(realizationClaims).toMatch(/ne (?:prouvent|prouve) (?:pas|ni)/i);
  });

  it("labels every public surface as an external editorial analysis", () => {
    const indexSource = read(
      "src/components/realisations/RealisationsIndexPage.tsx",
    );
    const routeSource = read("src/app/realisations/[slug]/page.tsx");
    const ogSource = read(
      "src/app/realisations/[slug]/opengraph-image.tsx",
    );

    expect(homepageRealizationClaims).toMatch(/pages publiques externes/i);
    expect(homepageRealizationClaims).toMatch(/ne revendiquent ni leur conception/i);
    expect(indexSource).toMatch(/Hagnéré Code analyse ici quatre pages publiques externes/i);
    expect(indexSource).toMatch(/ne sont ni des références client/i);
    expect(routeSource).toContain("Analyse publique externe");
    expect(ogSource).toContain("Analyse externe");

    expect(realizationClaims).not.toMatch(/Réalisations Hagnéré Code/i);
    expect(realizationClaims).not.toMatch(/Étude de cas Hagnéré Code/i);
    expect(realizationClaims).not.toMatch(/fondations techniques déclarées/i);
    expect(realizationClaims).not.toMatch(/HAGNERE CODE[^.!?]{0,100}prestataire technique/i);
  });

  it("keeps technology, delivery, CRM, SEO and Ads attribution out of the case-study surfaces", () => {
    const forbiddenAttributions = [
      /LARAVEL\s*12/i,
      /LIVRÉ\s+AVRIL\s+2026/i,
      /NEXT\.JS[^.!?]{0,80}SEO\s*\+\s*ADS/i,
      /SITE\s*\+\s*CRM/i,
      /back-office interne/i,
      /refonte complète[^.!?]{0,120}stratégie SEO/i,
      /campagnes? Google Ads/i,
      /funnel de qualification/i,
      />\s*Stack\s*</i,
    ];

    for (const pattern of forbiddenAttributions) {
      expect(realizationClaims, pattern.source).not.toMatch(pattern);
    }
  });

  it("describes structured data as an analysis based on the external source", () => {
    for (const caseStudy of Object.values(CASES)) {
      const [article] = buildCaseStudyStructuredData(caseStudy);

      expect(article.headline).toBe(
        `Analyse publique externe : ${caseStudy.brandName}`,
      );
      expect(article.name).toContain("page publique externe");
      expect(article.articleSection).toBe("Analyse de page publique externe");
      expect(article.citation).toBe(caseStudy.url);
      expect(article.isBasedOn).toBe(caseStudy.url);
    }
  });

  it("removes unobservable implementation and acquisition claims from Hagnéré Investissement", () => {
    const investment = CASES["hagnere-investissement"];
    const investmentContent = JSON.stringify(investment);

    expect(investment.features).toEqual([
      "Présentation du service clé en main",
      "Tableau comparatif public",
      "Tarification affichée",
      "Mini-simulateur budget, objectif et horizon",
      "Estimation accompagnée d'hypothèses indicatives",
      "Prise de rendez-vous",
      "Pages de stratégie, fiscalité, étapes et zone",
      "Présentation des partenaires",
    ]);
    expect(investmentContent).not.toMatch(
      /Drizzle|PostgreSQL|Next\.js|React 19|Tailwind|rapport PDF|cash[-‑ ]flow|projection 10 ans|3 segments?|Meta Ads|Google Ads|multi[-‑ ]touch|YouTube API|Plausible|coût par segment|qualité de lead/i,
    );
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
