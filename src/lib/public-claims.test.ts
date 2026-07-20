import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const publicRoots = ["src/app", "src/components"];

function visibleClaimText(source: string): string {
  return source
    .replace(/\/\*[\s\S]*?\*\//g, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/\{\s*["'`]\s*["'`]\s*\}/g, " ")
    .replace(/<\/?[A-Za-z][^>]*>/g, " ")
    .replace(/&(?:nbsp|ensp|emsp);|\\u00a0/gi, " ")
    .replace(/&(?:apos|#0*39|rsquo|lsquo);/gi, "'")
    .replace(/&(?:quot|ldquo|rdquo);/gi, '"')
    .replace(/&(?:ndash|mdash);/gi, "-")
    .replace(/&amp;/gi, " et ")
    .replace(/&[a-z]+;|&#x?[0-9a-f]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function publicSources(
  directory: string,
): Array<{ file: string; source: string; claimText: string }> {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) return publicSources(file);
    if (!/\.(?:ts|tsx)$/.test(entry.name) || entry.name.includes(".test.")) {
      return [];
    }
    const source = fs.readFileSync(file, "utf8").replace(/\s+/g, " ");
    return [{ file, source, claimText: visibleClaimText(source) }];
  });
}

const allPublicSources = publicRoots.flatMap((root) =>
  publicSources(path.join(process.cwd(), root)),
);

const commercialPublicSources = allPublicSources.filter(
  ({ file }) =>
    !file.includes(`${path.sep}src${path.sep}app${path.sep}guides${path.sep}`) &&
    !file.endsWith("opengraph-image.tsx"),
);

describe("public commercial claims", () => {
  it("does not turn an unmeasured sales-response objective into a 24-hour guarantee", () => {
    const forbidden = [
      /(?:réponse|répond(?:re|ons|ez)?)[^.!?]{0,120}sous 24\s*(?:h|heures)/i,
      /sous 24\s*(?:h|heures)[^.!?]{0,120}(?:réponse|répond(?:re|ons|ez)?)/i,
      /24 h ouvrées maximum/i,
      /(?:souvent|en pratique)\s+3\s*[–-]\s*6\s*h/i,
    ];

    for (const { file, claimText } of allPublicSources) {
      for (const pattern of forbidden) {
        expect(claimText, `${path.relative(process.cwd(), file)}: ${pattern}`).not.toMatch(
          pattern,
        );
      }
    }
  });

  it("does not promise an unsupported 48-hour quote or plan", () => {
    const forbidden = [
      /(?:fourchette|chiffrage|plan d.action)[^.!?]{0,100}sous 48\s*h/i,
      /sous 48\s*h[^.!?]{0,100}(?:fourchette|chiffrage|plan d.action)/i,
      /(?:fourchette|chiffrage|plan d.action)[^.!?]{0,120}le soir même/i,
      /rapport[^.!?]{0,80}sous 48\s*h/i,
    ];

    for (const { file, claimText } of allPublicSources) {
      for (const pattern of forbidden) {
        expect(claimText, `${path.relative(process.cwd(), file)}: ${pattern}`).not.toMatch(
          pattern,
        );
      }
    }
  });

  it("does not label a form or email link as a reservation", () => {
    const misleadingReservation =
      /<a\s+[^>]*href=["'](?:#contact|mailto:[^"']+)["'][^>]*>(?:(?!<\/a>)[\s\S]){0,500}?réserver/i;

    for (const { file, source } of allPublicSources) {
      expect(
        source,
        `${path.relative(process.cwd(), file)}: reservation CTA destination`,
      ).not.toMatch(misleadingReservation);
    }
  });

  it("does not keep dead placeholder links in public source fragments", () => {
    for (const { file, source } of allPublicSources) {
      expect(source, path.relative(process.cwd(), file)).not.toMatch(
        /<a\s+[^>]*href=["']#["']/i,
      );
    }
  });

  it("does not turn public pages or illustrative mockups into production proof", () => {
    const forbidden = [
      /architecture réelle d.un de nos/i,
      /nos produits internes, en production/i,
      /produits? opérés? en production/i,
      /démonstration en production/i,
      /growth organique/i,
      /investisseurs? confirmés?/i,
      /positionnement blue ocean/i,
      /du MVP à la levée/i,
      /6\s?000[^.!?]{0,80}clients payants/i,
      /format exact du vendredi/i,
    ];

    for (const { file, claimText } of allPublicSources) {
      for (const pattern of forbidden) {
        expect(claimText, `${path.relative(process.cwd(), file)}: ${pattern}`).not.toMatch(
          pattern,
        );
      }
    }
  });

  it("does not promise a zero-loss SEO migration", () => {
    for (const { file, claimText } of allPublicSources) {
      expect(claimText, path.relative(process.cwd(), file)).not.toMatch(
        /protocole SEO zéro perte|zéro perte de PageRank/i,
      );
    }
  });

  it("does not invent recurring client history or universal delivery habits", () => {
    const forbidden = [
      /notre (?:propre )?historique de missions/i,
      /devis concurrents[^.!?]{0,80}que nous voyons passer/i,
      /nous refusons régulièrement/i,
      /nous gardons systématiquement/i,
      /c['’]est déjà arrivé/i,
      /à chaque audit processus, on entend/i,
      /sur les projets que nous reprenons/i,
    ];

    for (const { file, claimText } of allPublicSources) {
      for (const pattern of forbidden) {
        expect(claimText, `${path.relative(process.cwd(), file)}: ${pattern}`).not.toMatch(
          pattern,
        );
      }
    }
  });

  it("does not advertise a PDF or ROI that the Excel tool cannot produce", () => {
    const source = fs.readFileSync(
      path.join(process.cwd(), "src/components/tools/ExcelCalculator.tsx"),
      "utf8",
    );
    const teaser = fs.readFileSync(
      path.join(process.cwd(), "src/components/homepage/sections/calc-teaser.ts"),
      "utf8",
    );

    expect(source).not.toMatch(/Rapport PDF|GAIN NET|ROI estimé|Livré en 5-10/i);
    expect(teaser).not.toMatch(/Rapport PDF|ROI(?:\s|\u00a0)*(?:en|outil)/i);
    expect(source).toContain("ni un gain garanti ni un ROI");
  });

  it("normalizes markup before evaluating a visible claim", () => {
    expect(
      visibleClaimText(
        "<p>Livraison <strong>sous 6&nbsp;semaines</strong></p>",
      ),
    ).toBe("Livraison sous 6 semaines");
  });

  it("does not publish a universal Lighthouse 95 promise", () => {
    const forbidden = [
      /lighthouse[^.!?]{0,100}(?:95\s*(?:\/\s*100)?|95\+)[^.!?]{0,100}(?:garanti|minimum|systématique|sur toutes? les pages|quel que soit)/i,
      /(?:garanti|minimum|systématique|sur toutes? les pages|quel que soit)[^.!?]{0,100}lighthouse[^.!?]{0,100}(?:95\s*(?:\/\s*100)?|95\+)/i,
      /lighthouse[^.!?]{0,80}(?:au moins|minimum)\s+95/i,
    ];

    for (const { file, claimText } of allPublicSources) {
      for (const pattern of forbidden) {
        expect(
          claimText,
          `${path.relative(process.cwd(), file)}: ${pattern}`,
        ).not.toMatch(pattern);
      }
    }
  });

  it("does not publish a fixed delivery or demo cadence as a universal habit", () => {
    const forbidden = [
      /\b(?:nous\s+)?livr(?:ons|er|\u00e9|\u00e9e|\u00e9s|\u00e9es)\b[^.!?]{0,80}\b(?:en|sous)\s+\d{1,2}(?:\s*[\u2013-]\s*\d{1,2})?\s*(?:jours?|semaines?|mois)\b/i,
      /\blivraison\s*(?:ferme|garantie)?\s*(?::|\u00b7|-)?\s*(?:en|sous)?\s*\d{1,2}(?:\s*[\u2013-]\s*\d{1,2})?\s*(?:jours?|semaines?|mois)\b/i,
      /\bsc\u00e9nario\s+\d+[^.!?]{0,120}\d{1,2}\s*[\u2013-]\s*\d{1,2}\s*semaines?\b/i,
      /(?:d\u00e9mo(?:s|nstration)?|revue projet|point d.avancement|restitution)[^.!?]{0,80}(?:chaque|tous les|toutes les)\s+(?:vendredis?|semaines?)/i,
      /(?:chaque|tous les|toutes les)\s+(?:vendredis?|semaines?)[^.!?]{0,80}(?:d\u00e9mo(?:s|nstration)?|revue projet|point d.avancement|restitution)/i,
      /(?:d\u00e9mo(?:s|nstration)?|revue projet|point d.avancement|restitution)[^.!?]{0,50}(?:hebdo|hebdomadaire)/i,
    ];

    for (const { file, claimText } of commercialPublicSources) {
      for (const pattern of forbidden) {
        expect(
          claimText,
          `${path.relative(process.cwd(), file)}: ${pattern}`,
        ).not.toMatch(pattern);
      }
    }
  });

  it("qualifies any claim that AI lowers a project price or schedule", () => {
    const causalPatterns = [
      /(?:l['\u2019]\s*)?i\.?a\.?[^.!?]{0,100}\b(?:divise|r\u00e9duit|baisse|fait baisser|\u00e9conomise)\b[^.!?]{0,100}\b(?:prix|co\u00fbts?|budget|d\u00e9lais?|temps)\b/gi,
      /\b(?:prix|co\u00fbts?|budget|d\u00e9lais?|temps)\b[^.!?]{0,100}\b(?:divis\u00e9s?|r\u00e9duits?|baiss\u00e9s?)\b[^.!?]{0,80}\b(?:gr\u00e2ce|avec|par)\s+(?:l['\u2019]\s*)?i\.?a\.?/gi,
    ];
    const qualification =
      /discours|promesse|affirmation|hypoth\u00e8se|sc\u00e9nario|\u00e9tude(?:s)?(?:\s+de\s+t\u00e2ches?)?|ne (?:d\u00e9montre|prouve|permet|garantit) (?:pas|ni)|sans (?:d\u00e9montrer|prouver|garantir)|pas (?:automatique|uniforme|universel)|selon (?:la|les) t\u00e2che|peut (?:r\u00e9duire|maintenir|augmenter)/i;

    for (const { file, claimText } of allPublicSources) {
      for (const pattern of causalPatterns) {
        for (const match of claimText.matchAll(pattern)) {
          const start = Math.max(0, (match.index ?? 0) - 220);
          const end = Math.min(
            claimText.length,
            (match.index ?? 0) + match[0].length + 220,
          );
          const context = claimText.slice(start, end);

          expect(
            context,
            `${path.relative(process.cwd(), file)}: causalité IA/prix sans qualification`,
          ).toMatch(qualification);
        }
      }
    }
  });

  it("keeps the VAT franchise distinct from the micro-tax regime", () => {
    const microNoVat =
      /(?:micro-entreprise|micro-entrepreneur|r\u00e9gime micro)[^.!?]{0,160}(?:ne facture pas|sans|exon\u00e9r\u00e9e? de)\s+(?:la\s+)?TVA/gi;
    const requiredQualification =
      /franchise en base(?: de TVA)?|sous conditions|qui remplit les conditions|micro-entrepreneur ou non|r\u00e9gime distinct/i;
    const categoricalFiscalClaims = [
      /TVA\s+n['\u2019]est\s+jamais\s+(?:subventionn\u00e9e|\u00e9ligible)/i,
      /\b(?:toujours\s+HT|jamais\s+de\s+TVA)\b/i,
      /franchise en base(?: de TVA)?[^.!?]{0,120}(?:automatique|incluse|propre au|r\u00e9serv\u00e9e? au)[^.!?]{0,80}(?:r\u00e9gime\s+)?micro/i,
    ];

    for (const { file, claimText } of allPublicSources) {
      for (const match of claimText.matchAll(microNoVat)) {
        const start = Math.max(0, (match.index ?? 0) - 180);
        const end = Math.min(
          claimText.length,
          (match.index ?? 0) + match[0].length + 180,
        );
        expect(
          claimText.slice(start, end),
          `${path.relative(process.cwd(), file)}: micro-fiscal confondu avec la franchise de TVA`,
        ).toMatch(requiredQualification);
      }

      for (const pattern of categoricalFiscalClaims) {
        expect(
          claimText,
          `${path.relative(process.cwd(), file)}: ${pattern}`,
        ).not.toMatch(pattern);
      }
    }
  });
});
