import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { composedBodyHtml } from "./composed-body";
import { problemsHtml } from "./sections/problems";
import { pricingHtml } from "./sections/pricing";
import { whatWeProduceHtml } from "./sections/what-we-produce";

const bodySource = readFileSync(new URL("./body.ts", import.meta.url), "utf8");

const servicePageSource = readFileSync(
  new URL("../../app/services/contenu-video/page.tsx", import.meta.url),
  "utf8",
);

describe("contenu video public claims", () => {
  it("ne présente pas des métiers créatifs non établis comme salariés internes", () => {
    const publishedContent = `${composedBodyHtml}\n${servicePageSource}`;

    expect(publishedContent).not.toMatch(/studio interne|deux monteurs permanents/i);
    expect(publishedContent).not.toMatch(/(?:DA|media buyer)[^<.]{0,40}interne/i);
    expect(publishedContent).toContain("statut interne ou externe");
  });

  it("ne renvoie pas vers une charte IA inexistante et conserve une validation humaine", () => {
    expect(composedBodyHtml).not.toContain("/charte-ia");
    expect(composedBodyHtml).toContain("validation finale reste humaine");
  });

  it("présente chaque situation comme un scénario fictif, jamais comme un témoignage client", () => {
    expect(problemsHtml).toContain(
      "Scénarios d'illustration fictifs : ni clients, ni témoignages réels.",
    );
    expect(
      problemsHtml.match(
        /Scénario fictif — ni client ni témoignage réel/g,
      ),
    ).toHaveLength(6);
    expect(problemsHtml).not.toContain("<blockquote");
    expect(problemsHtml).not.toMatch(/pas de cas inventé|on entend vraiment/i);
    expect(problemsHtml).not.toMatch(/\b(?:CMO|Head of Growth|GMV|ARR)\b/i);
    expect(problemsHtml).not.toMatch(/(?:Founder|DG)\s*·/i);
  });

  it("n'affiche aucune métrique de performance fictive dans les maquettes", () => {
    const auditedSections = `${problemsHtml}\n${whatWeProduceHtml}`;

    expect(whatWeProduceHtml).toContain(
      "illustrations fictives : ni clients, ni témoignages, ni résultats réels",
    );
    expect(auditedSections).not.toMatch(/\b(?:GMV|ARR|CTR|CPM)\b/i);
    expect(auditedSections).not.toMatch(
      /(?:48K|2,1K|1\.2M|487K|842K|800 abonnés)/i,
    );
  });

  it("écarte les superlatifs et garanties de résultat non démontrés", () => {
    const auditedSections = `${problemsHtml}\n${whatWeProduceHtml}`;

    expect(auditedSections).not.toMatch(
      /imbattable|arrêtent le scroll|qu'on maîtrise|pas soixante qu'on survole|le calendrier est rempli/i,
    );
    expect(auditedSections).not.toMatch(/testés en A\/B|AB-testés/i);
  });
  it("annonce le même nombre de retainers que la grille en contient", () => {
    const retainerTags = pricingHtml.match(/RETAINER · \d\d/g) ?? [];

    expect(retainerTags).toHaveLength(2);
    expect(retainerTags).toEqual(["RETAINER · 01", "RETAINER · 02"]);
    expect(pricingHtml).toMatch(/les deux retainers/i);
    expect(pricingHtml).not.toMatch(/les trois retainers/i);
  });

  it("affiche chaque prix en hors taxes et l'engagement total minimum", () => {
    const amounts = [...pricingHtml.matchAll(/<div class="cv-price-amount">([\s\S]*?)<\/div>/g)]
      .map((match) => match[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());

    expect(amounts.length).toBeGreaterThanOrEqual(4);
    for (const amount of amounts) {
      expect(amount, `montant sans mention HT : ${amount}`).toMatch(/HT/);
    }

    // Un prix mensuel affiché avec une durée minimale doit publier son total.
    expect(pricingHtml).toMatch(/Engagement minimum 6 mois · 21 000 € HT au total/);
    expect(pricingHtml).toMatch(/Engagement minimum 6 mois · 41 400 € HT au total/);
    expect(pricingHtml).toMatch(/hors taxes/i);
  });

  it("étiquette la maquette du hero comme fictive", () => {
    expect(bodySource).toContain("MAQUETTE · MARQUE FICTIVE");
    // Le marqueur doit précéder la marque inventée affichée dans la maquette.
    expect(bodySource.indexOf("MAQUETTE · MARQUE FICTIVE")).toBeLessThan(
      bodySource.indexOf("<!-- Timeline -->"),
    );
  });

  it("ne présente aucune licence comme incluse d'office", () => {
    expect(composedBodyHtml).not.toMatch(/licences?[^<]{0,60}inclus/i);
  });

  it("ne conserve aucun footer hérité dans le body", () => {
    expect(bodySource).not.toContain("<footer");
    expect(bodySource).not.toContain("<!-- FOOTER -->");
  });

  it("publie un maillage service→service dans le corps de la page", () => {
    expect(composedBodyHtml).toContain('href="/services/publicite-en-ligne"');
    expect(composedBodyHtml).toContain('href="/services/sites-vitrines"');
    expect(composedBodyHtml).toContain('href="/services/referencement-google"');
  });
});
