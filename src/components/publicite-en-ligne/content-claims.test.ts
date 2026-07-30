import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { composedBodyHtml } from "./composed-body";

const servicePageSource = readFileSync(
  new URL("../../app/services/publicite-en-ligne/page.tsx", import.meta.url),
  "utf8",
);

describe("publicite en ligne public claims", () => {
  it("ne publie pas les anciennes performances et statistiques de missions non prouvées", () => {
    const publishedContent = `${composedBodyHtml}\n${servicePageSource}`;

    expect(publishedContent).not.toMatch(
      /spend\s*\+\s*40|\+42\s*%|[×x]\s*2[,.]3/i,
    );
    expect(publishedContent).not.toMatch(/30[–-]50\s*%[^<.]{0,80}récup/i);
    expect(publishedContent).not.toMatch(/CPL\s*60[–-]180/i);
  });

  it("ne présente pas une équipe, une conformité ou des inclusions universelles", () => {
    const publishedContent = `${composedBodyHtml}\n${servicePageSource}`;

    expect(publishedContent).not.toMatch(
      /équipe dédiée\s*3|consultant senior dédié/i,
    );
    expect(publishedContent).not.toMatch(
      /CNIL OK|100\s*%\s*(?:RGPD|des signaux)/i,
    );
    expect(publishedContent).not.toMatch(/tout est inclus|tout inclus/i);
  });

  it("ne promet ni calendrier SEO ni citation par une IA", () => {
    const publishedContent = `${composedBodyHtml}\n${servicePageSource}`;

    expect(publishedContent).not.toMatch(
      /premiers mouvements à 3 mois|trafic significatif à 6[–-]9 mois|ROI business mesurable à 9[–-]12 mois|SEO se joue sur 9 à 12 mois/i,
    );
    expect(publishedContent).not.toMatch(
      /faire que votre site soit[^<.]{0,80}l'une de ces sources/i,
    );
  });

  it("ne transforme pas des liens publics en preuve de campagnes ou de résultats", () => {
    expect(composedBodyHtml).not.toMatch(
      /ROAS visé|nous payons nos propres campagnes|c'est notre argent|facture média|opéré par nous|CRM maison|8-12\/mois|20\s*% gagnent|on sait ce qu'ils testent/i,
    );
    expect(composedBodyHtml).toContain("ne prouvent ni campagnes actives");
    expect(composedBodyHtml).toContain("aucun ratio gagnant n'est présumé");
    expect(composedBodyHtml).toContain(
      "ne permettent pas de connaître les résultats",
    );
  });

  it("relie la grille tarifaire au guide de comparaison des devis", () => {
    expect(composedBodyHtml).toContain(
      'href="/guides/prix-gestion-google-ads"',
    );
    expect(composedBodyHtml).toContain(
      "guide du coût complet d’une gestion Google Ads",
    );
  });
});
