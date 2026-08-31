import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { CASES, RELATED_SERVICES } from "@/components/realisations/cases";

const projectRoot = process.cwd();

function read(relativePath: string): string {
  return fs.readFileSync(path.join(projectRoot, relativePath), "utf8");
}

const caseStudySource = read("src/components/realisations/CaseStudyPage.tsx");
const indexSource = read("src/components/realisations/RealisationsIndexPage.tsx");
const indexCss = read("src/components/realisations/index-page.css");

/** Contenu du bloc `@media (max-width: 480px)` de index-page.css. */
function smallScreenBlock(): string {
  const start = indexCss.indexOf("@media (max-width: 480px)");
  if (start === -1) return "";
  const end = indexCss.indexOf("\n}\n", start);
  return indexCss.slice(start, end === -1 ? indexCss.length : end);
}

describe("realisations → services internal linking", () => {
  it("resolves every related-service key to a real /services route", () => {
    for (const [key, service] of Object.entries(RELATED_SERVICES)) {
      expect(service.href, key).toBe(`/services/${key}`);
      expect(service.label.length, key).toBeGreaterThan(0);
      expect(service.blurb.length, key).toBeGreaterThan(0);
      expect(
        fs.existsSync(path.join(projectRoot, "src/app/services", key, "page.tsx")),
        `route manquante pour ${service.href}`,
      ).toBe(true);
    }
  });

  it("gives every case study at least two service links", () => {
    for (const caseStudy of Object.values(CASES)) {
      expect(caseStudy.relatedServices.length, caseStudy.slug).toBeGreaterThanOrEqual(2);
      for (const key of caseStudy.relatedServices) {
        expect(RELATED_SERVICES, `${caseStudy.slug} → ${key}`).toHaveProperty(key);
      }
      expect(new Set(caseStudy.relatedServices).size, caseStudy.slug).toBe(
        caseStudy.relatedServices.length,
      );
    }
  });

  it("renders the service bridge and the funnel CTA on each case study", () => {
    expect(caseStudySource).toContain("RELATED_SERVICES");
    expect(caseStudySource).toContain("relatedServices");
    expect(caseStudySource).toContain('href="/services"');
    /*
     * Cette garde exigeait la classe exacte `btn btn-primary btn-lg`, c'est-à-
     * dire le bouton NOIR. Elle verrouillait donc une couleur, pas une
     * propriété — et elle verrouillait la mauvaise : le même bouton, même
     * libellé et même flèche, est violet sur /realisations, la page qui mène
     * ici en un clic. Le repère que le visiteur mémorise changeait de couleur
     * d'une page à la suivante.
     *
     * Ce qui compte est que la fiche porte l'action primaire du site, en
     * grande taille. Le test le vérifie maintenant sans nommer d'habillage, et
     * la garde de cohérence ci-dessous remplace ce que celle-ci croyait tenir.
     */
    expect(caseStudySource).toMatch(
      /href="\/demarrer-un-projet"\s+className="btn btn-\w+ btn-lg"/,
    );
  });

  /**
   * L'action primaire doit porter le MÊME habillage sur le hub et sur les
   * fiches qu'il ouvre. C'est la propriété que l'ancienne garde ne tenait pas :
   * elle figeait une classe d'un côté sans jamais la comparer à l'autre.
   */
  it("dresses the primary action identically on the hub and on the case studies", () => {
    const PRIMARY = /href="\/demarrer-un-projet"\s+className="(btn btn-\w+ btn-lg)"/;
    const onCase = caseStudySource.match(PRIMARY);
    const onHub = indexSource.match(PRIMARY);

    expect(onCase, "action primaire absente de la fiche").not.toBeNull();
    expect(onHub, "action primaire absente du hub").not.toBeNull();
    expect(onCase?.[1]).toBe(onHub?.[1]);
  });

  it("renders a service band and the funnel CTA on the /realisations hub", () => {
    expect(indexSource).toContain("RELATED_SERVICES");
    expect(indexSource).toContain("rlm-svc-grid");
    expect(indexSource).toContain('href="/services"');
    expect(indexSource).toContain('href="/demarrer-un-projet"');
  });

  it("never presents the service bridge as work done on a group product", () => {
    /*
     * Ce que cette garde protège : le bloc « Nos services » suit immédiatement
     * l'analyse de produits du groupe, et sans réserve un lecteur pourrait le
     * lire comme du travail fait SUR eux.
     *
     * Elle exigeait deux formulations exactes, ce qui figeait une triple
     * négation que la page répétait trois fois. Une garde doit tenir la
     * propriété, pas la phrase : sinon elle interdit toute reformulation, y
     * compris meilleure. On accepte donc plusieurs manières de dissocier.
     */
    const DISSOCIATION =
      /ne\s+(?:portent|porte|décrivent|décrit)\s+(?:pas\s+sur|aucune\s+intervention)/;
    for (const source of [caseStudySource, indexSource]) {
      expect(source).toMatch(DISSOCIATION);
    }
    const bridgeClaims = [
      caseStudySource,
      indexSource,
      JSON.stringify(RELATED_SERVICES),
    ].join("\n");
    expect(bridgeClaims).not.toMatch(
      /(?:conçu|réalisé|développé|livré)e?s?\s+par Hagnéré Code/i,
    );
    expect(bridgeClaims).not.toMatch(/notre client/i);
  });
});

describe("realisations hero visual — garde sous 480 px", () => {
  it("hides the absolutely positioned hero badge that overlapped the logo", () => {
    expect(smallScreenBlock()).toMatch(
      /\.rlm-float-status\s*\{\s*display:\s*none;?\s*\}/,
    );
  });

  it("shrinks the hero card content so it fits the ~170x140 px tiles", () => {
    const block = smallScreenBlock();
    expect(block).toMatch(/\.rlm-float-card\s*\{[^}]*padding:\s*14px/);
    expect(block).toMatch(/\.rlm-float-logo\s*\{[^}]*width:\s*34px/);
    expect(block).toMatch(/\.rlm-float-name\s*\{[^}]*font-size:\s*13px/);
  });
});
