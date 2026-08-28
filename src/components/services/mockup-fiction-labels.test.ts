import { describe, expect, it } from "vitest";

import { composedBodyHtml as auditTechnique } from "../audit-technique/composed-body";
import { composedBodyHtml as ecommerce } from "../ecommerce/composed-body";
import { composedBodyHtml as maintenanceEvolution } from "../maintenance-evolution/composed-body";
import { composedBodyHtml as outilsInternes } from "../outils-internes/composed-body";
import { composedBodyHtml as saasApplications } from "../saas-applications/composed-body";
import { composedBodyHtml as securiteRgpd } from "../securite-rgpd/composed-body";
import { composedBodyHtml as sitesVitrines } from "../sites-vitrines/composed-body";

/**
 * `design-shared/invented-brands.test.ts` protège deux chaînes littérales
 * (à tort, voir CLAUDE.md) et n'exige une étiquette de fiction que dans les blocs
 * `.scase-shot`. Les maquettes de ces pages affichent pourtant d'autres raisons
 * sociales inventées — ÆTHER, ACME, MARTIN SARL, DUPONT SA, NOVA Tech,
 * LEDUC BTP, Bernard & Fils — dans des `<svg>` inline, des `.mock-window` ou
 * des blocs `.ec-b-*` qu'aucun contrôle ne regardait.
 *
 * Règle vérifiée ici : une raison sociale inventée ne peut apparaître que dans
 * une section qui dit, en toutes lettres, qu'il s'agit d'une fiction. Le
 * découpage par `<section>` garde l'étiquette à portée de lecture — une mention
 * unique en pied de page ne suffirait pas.
 */
const INVENTED_COMPANY_NAMES = [
  "ÆTHER",
  "Æther",
  "ACME",
  "MARTIN SARL",
  "DUPONT SA",
  "Dupont SA",
  "NOVA Tech",
  "LEDUC BTP",
  "Bernard &amp; Fils",
] as const;

/**
 * Formulations acceptées. Volontairement limitées à des mentions explicites :
 * « ce sont des maquettes » ne dit pas que la société affichée est inventée.
 */
const FICTION_MARKER =
  /DONNÉES FICTIVES|MARQUE FICTIVE|SOCIÉTÉS FICTIVES|AUCUNE DONNÉE RÉELLE|données de démonstration|EXEMPLE ILLUSTRATIF|FORMAT ILLUSTRATIF|EXEMPLE · FICTIF/i;

const PAGES: ReadonlyArray<readonly [string, string]> = [
  ["saas-applications", saasApplications],
  ["outils-internes", outilsInternes],
  ["sites-vitrines", sitesVitrines],
  ["ecommerce", ecommerce],
  ["maintenance-evolution", maintenanceEvolution],
  ["securite-rgpd", securiteRgpd],
  ["audit-technique", auditTechnique],
];

/** Découpe grossière mais suffisante : le HTML est un flux de `<section>`. */
function sections(html: string): string[] {
  return html.split(/(?=<section\b)/);
}

describe("étiquetage des maquettes de service", () => {
  it.each(PAGES)(
    "%s : toute raison sociale inventée est étiquetée dans sa section",
    (name, html) => {
      const offenders: string[] = [];

      for (const section of sections(html)) {
        const brands = INVENTED_COMPANY_NAMES.filter((brand) =>
          section.includes(brand),
        );
        if (brands.length === 0) continue;
        if (FICTION_MARKER.test(section)) continue;

        const heading = section.match(/<h[123][^>]*>([\s\S]{0,80}?)</)?.[1];
        offenders.push(
          `${brands.join(", ")} — section « ${heading?.trim() ?? "?"} »`,
        );
      }

      expect(offenders, `${name} : maquette non étiquetée`).toEqual([]);
    },
  );

  it("outils internes étiquette chacune de ses maquettes de cas d'usage", () => {
    const visuals = [
      ...outilsInternes.matchAll(
        /<div class="uc-visual">([\s\S]*?)<\/svg>/g,
      ),
    ];

    expect(visuals.length, "aucune maquette de cas d'usage trouvée").toBeGreaterThan(0);
    for (const [, visual] of visuals) {
      expect(visual, "maquette .uc-visual sans étiquette").toMatch(
        /uc-visual-note/,
      );
    }
  });

  it("la page SaaS n'affiche plus de taux de réussite d'agent IA", () => {
    // `outils-internes/content-claims.test.ts` interdisait déjà 98,4 % sur sa
    // page ; la métrique survivait sur la page voisine, qui montrait la même
    // maquette. L'interdiction porte désormais sur les deux.
    for (const [name, html] of PAGES) {
      expect(html, `${name} : taux de performance non étayé`).not.toMatch(
        /98[,.]4\s*%|40\s*000\s*factures|0[,.]004\s*€/i,
      );
    }
  });
});
