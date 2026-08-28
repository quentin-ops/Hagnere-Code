import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { bodyHtml } from "./body";
import { pageHtml } from "./page-html";

const pageSource = readFileSync(
  new URL("../../app/methode/page.tsx", import.meta.url),
  "utf8",
);

describe("method page public claims", () => {
  it("n'annonce pas de capacité, pénalité ou résultat automatique", () => {
    const publishedContent = `${pageHtml}\n${pageSource}`;

    expect(publishedContent).not.toMatch(/pénalité de\s*7\s*%/i);
    expect(publishedContent).not.toMatch(
      /(?:2|deux) places?[^<.]{0,80}(?:mois|disponible)/i,
    );
    expect(publishedContent).not.toMatch(/résultat commercial garanti/i);
  });

  it("rappelle que capacité et conséquences dépendent du devis", () => {
    expect(pageHtml).toContain(
      "La capacité disponible et la date réaliste de démarrage",
    );
    expect(pageHtml).toContain("Aucune pénalité automatique");
  });

  it("does not generalize competitor practices or invent a universal delivery ritual", () => {
    expect(pageHtml).not.toMatch(
      /la pratique courante|l'agence disparaît trois mois|presque toujours lui qui paie|démo chaque vendredi|chaque vendredi à 16 h/i,
    );
    expect(pageHtml).toContain("Quatre zones de risque");
    expect(pageHtml).toContain("à la cadence convenue");
  });

  it("keeps scope changes, discounts and estimates in the signed documents", () => {
    expect(pageHtml).not.toMatch(
      /si on dépasse, c'est notre problème|aucun dépassement caché possible|fourchettes typiques/i,
    );
    expect(pageHtml).toContain(
      "Aucun coût supplémentaire ne s'applique sans accord écrit",
    );
    expect(pageHtml).toContain("EXEMPLES INDICATIFS · À RECALCULER APRÈS CADRAGE");
  });

  it("ne présente pas Sprint Fixe comme une marque déposée ni comme une v4", () => {
    // Aucun dépôt de marque n'est revendiquable pour une société créée le
    // 30/09/2025, et « SPRINT FIXE · v.4.2 » suggérait quatre révisions
    // majeures de la méthode. Le nom reste publié, sans attribut de propriété.
    expect(bodyHtml).not.toContain("™");
    expect(bodyHtml).not.toMatch(/\bv\.\s?\d+\.\d+/i);
    expect(bodyHtml).toContain("SPRINT FIXE");
  });

  it("n'affiche aucune référence de devis inventée dans les schémas", () => {
    // « DEVIS · #2026-118 » laissait entendre 117 devis antérieurs. Les
    // maquettes sont étiquetées comme des exemples, sans numéro.
    expect(bodyHtml).not.toMatch(/#?\s?20\d{2}-\d{2,}/);
    expect(bodyHtml).toContain("DEVIS · EXEMPLE");
  });
});

/**
 * Régression : `stripFinalCta` supprimait toute la section de clôture de
 * /methode — fourchettes de budget, CTA Calendly, renvoi tarifs et CGV —
 * parce qu'elle portait un marqueur `<!-- CTA FINAL -->` en fin de fichier.
 * Le contenu existait dans `body.ts` mais n'atteignait jamais le navigateur.
 */
describe("methode: le HTML rendu ne perd pas le bloc de clôture", () => {
  it("ne réintroduit pas un marqueur CTA FINAL en fin de document", () => {
    expect(bodyHtml).not.toMatch(/<!-- CTA(?: FINAL)?(?:\s+—[^>]*)? -->/);
  });

  it("conserve les fourchettes de budget et les CTA finaux après strip", () => {
    for (const needle of [
      'id="cta-finale"',
      "EXEMPLES INDICATIFS · À RECALCULER APRÈS CADRAGE",
      "Cadrons votre projet.",
      'href="/rendez-vous"',
      'href="/legal/cgv"',
    ]) {
      expect(pageHtml).toContain(needle);
    }
  });

  it("ne perd aucun contenu du body hors navigation", () => {
    // Seule la nav canonique est retirée : aucune section ne doit disparaître.
    expect(pageHtml).toContain("</section>");
    expect(pageHtml.match(/<section\b/g)?.length).toBe(
      bodyHtml.match(/<section\b/g)?.length,
    );
  });

  it("n'oriente le sommaire que vers des ancres présentes dans <main>", () => {
    const anchors = [...pageHtml.matchAll(/class="mtoc-link" href="#([^"]+)"/g)].map(
      (m) => m[1],
    );
    expect(anchors.length).toBeGreaterThan(5);
    for (const anchor of anchors) {
      expect(pageHtml, `ancre #${anchor}`).toContain(`id="${anchor}"`);
    }
  });
});
