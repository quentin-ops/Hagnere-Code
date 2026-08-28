import { describe, expect, it } from "vitest";

import { composedBodyHtml as applicationMobile } from "../application-mobile/composed-body";
import { composedBodyHtml as auditTechnique } from "../audit-technique/composed-body";
import { composedBodyHtml as contenuVideo } from "../contenu-video/composed-body";
import { composedBodyHtml as ecommerce } from "../ecommerce/composed-body";
import { composedBodyHtml as homepage } from "../homepage/composed-body";
import { composedBodyHtml as maintenanceEvolution } from "../maintenance-evolution/composed-body";
import { composedBodyHtml as outilsInternes } from "../outils-internes/composed-body";
import { composedBodyHtml as publiciteEnLigne } from "../publicite-en-ligne/composed-body";
import { composedBodyHtml as saasApplications } from "../saas-applications/composed-body";
import { composedBodyHtml as securiteRgpd } from "../securite-rgpd/composed-body";
import { composedBodyHtml as sitesVitrines } from "../sites-vitrines/composed-body";

/**
 * Marques produit qui ne correspondent à aucune entité réelle du groupe.
 *
 * ⚠️ « Comptabilité AI » a longtemps figuré ici, et c'était une ERREUR : voir
 * la liste des sociétés du groupe dans CLAUDE.md. COMPTABILITE-AI est une
 * société réelle (SIREN 978548899, active depuis le 02/08/2023), éditrice de
 * LMNP.AI et de SCI-AI.app. Deux audits successifs l'ont prise pour une
 * invention et l'ont interdite par test, ce qui empêchait de nommer une
 * société du groupe sur son propre site.
 *
 * Avant d'ajouter une marque ici, VÉRIFIER son absence à l'annuaire des
 * entreprises (recherche-entreprises.api.gouv.fr) — pas seulement son absence
 * de CLAUDE.md.
 */
const INVENTED_BRANDS: string[] = [];

const PAGES: ReadonlyArray<readonly [string, string]> = [
  ["homepage", homepage],
  ["saas-applications", saasApplications],
  ["outils-internes", outilsInternes],
  ["sites-vitrines", sitesVitrines],
  ["ecommerce", ecommerce],
  ["publicite-en-ligne", publiciteEnLigne],
  ["contenu-video", contenuVideo],
  ["maintenance-evolution", maintenanceEvolution],
  ["securite-rgpd", securiteRgpd],
  ["audit-technique", auditTechnique],
  ["application-mobile", applicationMobile],
];

describe("aucune marque produit inventée sur les pages publiées", () => {
  for (const [name, html] of PAGES) {
    it(`${name} n'affiche aucune marque inventée`, () => {
      for (const brand of INVENTED_BRANDS) {
        expect(html).not.toContain(brand);
      }
    });
  }

  it("toute maquette chiffrée porte une étiquette de données fictives", () => {
    // Les visuels d'études de cas (.scase-shot) affichent des montants ; ils ne
    // doivent jamais pouvoir être lus comme une capture d'écran réelle.
    for (const [name, html] of PAGES) {
      const shots = [...html.matchAll(/<div class="scase-shot">([\s\S]*?)<\/div>/g)];
      for (const [, shot] of shots) {
        const hasNumbers = /\d[\d\s]{2,}(?:€|,\d{2})/.test(shot);
        if (!hasNumbers) continue;
        expect(
          shot,
          `${name} : maquette chiffrée sans étiquette « données fictives »`,
        ).toMatch(/DONNÉES FICTIVES|AUCUNE DONNÉE RÉELLE/i);
      }
    }
  });
});
