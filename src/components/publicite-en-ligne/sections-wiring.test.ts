import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  stripFinalCta,
  stripFooter,
  stripNav,
} from "@/components/design-shared/stripBody";

/**
 * Un fichier `sections/*.ts` non importé par le `composed-body.ts` de son
 * service est du contenu rédigé, relu et maintenu qui n'atteint jamais un
 * prospect — et sur lequel des tests peuvent verdir sans rien protéger.
 *
 * Ce test couvre les dix pages services composées par un `composed-body.ts`.
 * Les sections mortes de ecommerce, outils-internes, saas-applications et
 * sites-vitrines ont été supprimées, et la CTA finale comme le <footer> hérités
 * ont été retirés de leur `body.ts` : elles rejoignent donc la liste.
 * `/services/referencement-google` n'a pas de `composed-body.ts` (page rendue
 * depuis `seo-referencement/content.ts`) et reste hors de cette vérification.
 */
const coveredServices = [
  "publicite-en-ligne",
  "contenu-video",
  "maintenance-evolution",
  "securite-rgpd",
  "audit-technique",
  "application-mobile",
  "ecommerce",
  "outils-internes",
  "saas-applications",
  "sites-vitrines",
];

const componentsRoot = path.join(process.cwd(), "src/components");

describe("service section wiring", () => {
  it.each(coveredServices)(
    "n'a aucune section morte dans %s",
    (service) => {
      const sectionsDir = path.join(componentsRoot, service, "sections");
      const composedBody = fs.readFileSync(
        path.join(componentsRoot, service, "composed-body.ts"),
        "utf8",
      );

      const sectionModules = fs
        .readdirSync(sectionsDir)
        .filter((file) => file.endsWith(".ts") && !file.includes(".test."))
        .map((file) => file.replace(/\.ts$/, ""));

      expect(sectionModules.length).toBeGreaterThan(0);

      const orphans = sectionModules.filter(
        (module) => !composedBody.includes(`./sections/${module}"`),
      );

      expect(orphans, `sections non composées dans ${service}`).toEqual([]);
    },
  );

  /**
   * Les gabarits `body.ts` sont d'anciennes maquettes HTML complètes. Leur
   * navigation, leur CTA finale et leur <footer> sont retirés au rendu par
   * `stripNav` / `stripFinalCta` / `stripFooter`, puis rendus par <MainNav /> et
   * <SiteFooter />. Tant qu'ils restent dans la source, ils se relisent et se
   * corrigent comme du contenu publié alors qu'ils n'atteignent personne — et
   * ils portaient encore des mentions légales et un maillage périmés.
   */
  it("ne conserve aucun bloc hérité dans les gabarits body.ts", () => {
    // Répertoires appartenant à d'autres lots : leurs propriétaires doivent
    // retirer les blocs hérités restants avant de sortir de ces exemptions.
    const footerAndCtaExempt = new Set(["homepage"]);
    const navExempt = new Set(["homepage", "equipe", "methode", "tarifs"]);

    const templates = fs
      .readdirSync(componentsRoot, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => ({
        name: entry.name,
        file: path.join(componentsRoot, entry.name, "body.ts"),
      }))
      .filter(({ file }) => fs.existsSync(file));

    expect(templates.length).toBeGreaterThan(10);

    const offenders = templates.flatMap(({ name, file }) => {
      const source = fs.readFileSync(file, "utf8");
      const found: string[] = [];
      if (!footerAndCtaExempt.has(name)) {
        if (source.includes("<footer")) found.push("<footer>");
        if (/<!-- CTA(?: FINAL)? -->/.test(source)) found.push("<!-- CTA -->");
      }
      if (!navExempt.has(name) && source.includes("navHtml")) {
        found.push("navHtml");
      }
      return found.length > 0 ? [`${name}/body.ts: ${found.join(", ")}`] : [];
    });

    expect(offenders).toEqual([]);
  });

  it("ne réintroduit pas la maquette de SERP supprimée de la page publicité", () => {
    expect(
      fs.existsSync(
        path.join(componentsRoot, "publicite-en-ligne/sections/serp-anatomy.ts"),
      ),
    ).toBe(false);
  });

  it.each(coveredServices)(
    "rend un %s structurellement complet après suppression des blocs hérités",
    async (service) => {
      const imported = (await import(`../${service}/composed-body`)) as {
        composedBodyHtml: string;
      };
      const rendered = stripNav(
        stripFooter(stripFinalCta(imported.composedBodyHtml)),
      );

      expect(rendered).not.toContain("<footer");
      expect(rendered).not.toMatch(/<!-- CTA(?: FINAL)? -->\s*<section/);
      expect(rendered).not.toContain("<!-- FOOTER -->");

      const opened = rendered.match(/<section\b/g)?.length ?? 0;
      const closed = rendered.match(/<\/section>/g)?.length ?? 0;
      expect(opened, `${service}: sections ouvertes`).toBeGreaterThan(5);
      expect(closed, `${service}: sections fermées`).toBe(opened);
    },
  );
});
