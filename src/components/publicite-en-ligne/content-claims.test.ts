import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { composedBodyHtml } from "./composed-body";
import { stripFinalCta, stripFooter, stripNav } from "@/components/design-shared/stripBody";

const servicePageSource = readFileSync(
  new URL("../../app/services/publicite-en-ligne/page.tsx", import.meta.url),
  "utf8",
);

const bodySource = readFileSync(new URL("./body.ts", import.meta.url), "utf8");

const renderedHtml = stripNav(stripFooter(stripFinalCta(composedBodyHtml)));

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

  it("ne promet ni calendrier SEO ni placement dans les résultats de Google", () => {
    const publishedContent = `${composedBodyHtml}\n${servicePageSource}`;

    expect(publishedContent).not.toMatch(
      /premiers mouvements à 3 mois|trafic significatif à 6[–-]9 mois|ROI business mesurable à 9[–-]12 mois|SEO se joue sur 9 à 12 mois/i,
    );
    // Motif d'intention plutôt que la chaîne exacte : la promesse précédente
    // avait simplement été reformulée sans que le test ne bronche.
    expect(publishedContent).not.toMatch(
      /devenir l'une de ces|être cité par l'IA de Google|on vise les 6|viser les 6|positionner partout/i,
    );
    expect(publishedContent).not.toMatch(
      /(?:position|place|classement)[^<.]{0,60}garanti(?:e|s)?\b(?!\w)/i,
    );
  });

  it("ne publie aucun pourcentage de clics ou de CTR non sourcé", () => {
    // Toute statistique de comportement sur les SERP doit venir avec sa source.
    expect(composedBodyHtml).not.toMatch(
      /\d{1,3}\s*[–-]?\s*\d{0,3}\s*%[^<.]{0,40}(?:de\s+)?CTR/i,
    );
    expect(composedBodyHtml).not.toMatch(
      /\d{1,3}\s*%\s*des clics/i,
    );
    expect(composedBodyHtml).not.toMatch(/3\s*[–-]\s*5\s*[×x][^<.]{0,60}mots-clés/i);
  });

  it("ne présente aucune licence comme incluse d'office et cite le coût BigQuery", () => {
    expect(composedBodyHtml).not.toMatch(/licence[^<]{0,40}inclus/i);
    expect(composedBodyHtml).not.toMatch(/licence[^<]{0,40}gratuite/i);
    // Si BigQuery est nommé, son modèle de facturation doit être visible.
    if (/BigQuery/i.test(composedBodyHtml)) {
      expect(composedBodyHtml).toMatch(/BigQuery facturé à l'usage/i);
    }
  });

  it("ne présente aucune raison sociale inventée assortie d'une note d'avis", () => {
    expect(composedBodyHtml).not.toMatch(/★\s*4[,.]\d\s*·\s*\d+\s*avis/);
    expect(composedBodyHtml).not.toMatch(
      /Conseil Info 73|PME Services Savoie|Digital Alpes/i,
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

  it("situe l'audit payant par rapport au Discovery Sprint de la grille tarifaire", () => {
    expect(composedBodyHtml).toMatch(
      /porte d'entrée payante propre à ce service/i,
    );
    expect(composedBodyHtml).toContain('href="/tarifs"');
  });

  it("ne conserve aucun footer ni nav hérités dans le body", () => {
    expect(bodySource).not.toContain("<footer");
    expect(bodySource).not.toContain("<!-- FOOTER -->");
  });

  it("publie un maillage service→service dans le HTML réellement rendu", () => {
    const serviceLinks = new Set(
      [...renderedHtml.matchAll(/href="(\/services\/[a-z-]+)"/g)].map(
        (match) => match[1],
      ),
    );
    serviceLinks.delete("/services/publicite-en-ligne");

    expect(serviceLinks.size).toBeGreaterThanOrEqual(3);
    expect(serviceLinks).toContain("/services/referencement-google");
    expect(serviceLinks).toContain("/services/sites-vitrines");
    expect(serviceLinks).toContain("/services/contenu-video");
  });

  it("rend une page dont la CTA héritée a bien été retirée", () => {
    expect(renderedHtml).not.toMatch(/<!-- CTA(?: FINAL)? -->\s*<section/);
    expect(renderedHtml).toContain("<!-- ADS CTA FINAL");
  });
});
