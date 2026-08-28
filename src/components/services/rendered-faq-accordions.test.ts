import { Window } from "happy-dom";
import { describe, expect, it } from "vitest";

import { composedBodyHtml as applicationMobile } from "../application-mobile/composed-body";
import { composedBodyHtml as auditTechnique } from "../audit-technique/composed-body";
import { bodyHtml as equipe } from "../equipe/body";
import { bodyHtml as methode } from "../methode/body";
import { bodyHtml as tarifs } from "../tarifs/body";
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
 * `publicite-en-ligne/faq-accordion-contract.test.ts` inspecte le *texte des
 * gabarits*. Cet angle de vue rate tout ce qu'une boucle produit : le gabarit
 * de la FAQ e-commerce ne contenait qu'une seule occurrence littérale de
 * `<div class="faq-a" …>`, si bien que le contrôle d'unicité des identifiants
 * portait sur un seul élément — alors que la page servie répétait dix fois
 * `id="faq-a-shop-faq-1"`, renvoyant les dix `aria-controls` vers la première
 * réponse.
 *
 * Ce test-ci part du HTML réellement assemblé (les `composedBodyHtml` sont les
 * chaînes injectées dans la page) et le parse, ce qui couvre aussi bien les
 * gabarits écrits à la main que ceux générés par une fonction de rendu.
 */
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
  // Les trois autres gabarits encore listés `pending` par le contrat
  // d'accordéons : ils n'ont pas de `composedBodyHtml`, mais leur corps est
  // bien le HTML servi.
  ["equipe", equipe],
  ["methode", methode],
  ["tarifs", tarifs],
];

/**
 * Les quatre gabarits que le contrat d'accordéons liste encore comme `pending`
 * servent leurs questions sans `aria-controls`. Ils restent soumis au contrôle
 * d'unicité des identifiants ci-dessous — le seul qui aurait attrapé la FAQ
 * e-commerce — mais pas encore au câblage question ↔ réponse.
 */
const PENDING_MIGRATION = new Set(["homepage", "equipe", "methode", "tarifs"]);

const WIRED_PAGES = PAGES.filter(([name]) => !PENDING_MIGRATION.has(name));

function parse(html: string) {
  const window = new Window();
  window.document.body.innerHTML = html;
  return window.document;
}

describe("accordéons de FAQ dans le HTML assemblé", () => {
  it.each(PAGES)("%s ne sert jamais deux fois le même id", (name, html) => {
    const document = parse(html);
    const seen = new Map<string, number>();

    for (const element of document.querySelectorAll("[id]")) {
      const id = element.getAttribute("id") ?? "";
      seen.set(id, (seen.get(id) ?? 0) + 1);
    }

    const duplicates = [...seen.entries()]
      .filter(([, count]) => count > 1)
      .map(([id, count]) => `${id} × ${count}`);

    expect(duplicates, `${name} : identifiants répétés`).toEqual([]);
  });

  it("garde la liste des pages non migrées à jour", () => {
    // Si `homepage` est migrée, ce test signale qu'il faut la réintégrer au
    // contrôle de câblage plutôt que de laisser l'exception dormir.
    const stillPending = [...PENDING_MIGRATION].filter((name) => {
      const entry = PAGES.find(([page]) => page === name);
      if (!entry) return false;
      const document = parse(entry[1]);
      return [...document.querySelectorAll(".faq-q")].some(
        (question) => !question.getAttribute("aria-controls"),
      );
    });

    expect(stillPending).toEqual([...PENDING_MIGRATION]);
  });

  it.each(WIRED_PAGES)("%s relie chaque question à sa propre réponse", (name, html) => {
    const document = parse(html);
    const questions = [...document.querySelectorAll(".faq-q")];
    const answers = [...document.querySelectorAll(".faq-a")];

    // Une page sans FAQ ne prouve rien : on ne l'exige pas, mais dès qu'il y a
    // des questions il doit y avoir autant de réponses distinctes.
    if (questions.length === 0) return;
    expect(answers.length, `${name} : réponses manquantes`).toBe(
      questions.length,
    );

    const targets = new Set<string>();
    for (const question of questions) {
      const controls = question.getAttribute("aria-controls") ?? "";
      expect(controls, `${name} : question sans aria-controls`).not.toBe("");
      expect(
        targets.has(controls),
        `${name} : deux questions pointent vers ${controls}`,
      ).toBe(false);
      targets.add(controls);

      const answer = document.getElementById(controls);
      expect(answer, `${name} : aria-controls="${controls}" sans cible`).toBeTruthy();
      expect(
        answer?.classList.contains("faq-a"),
        `${name} : ${controls} n'est pas une réponse de FAQ`,
      ).toBe(true);

      // L'état annoncé au lecteur d'écran doit décrire le bloc réellement servi.
      const expanded = question.getAttribute("aria-expanded") === "true";
      expect(
        answer?.hasAttribute("hidden"),
        `${name} : ${controls} — repli incohérent avec aria-expanded`,
      ).toBe(!expanded);
    }
  });
});
