import { describe, expect, it } from "vitest";

import { bodyHtml as contactBody } from "@/components/contact/body";
import { splitContactPageHtml } from "@/components/contact/contact-html";
import { bodyHtml as equipeBody } from "@/components/equipe/body";
import { pageHtml as methodeHtml } from "@/components/methode/page-html";

/**
 * WCAG 1.3.1 / RGAA 9.1 : un plan de document ne saute pas de niveau.
 * /legal/accessibilite annonce « une structure HTML sémantique et des titres
 * hiérarchisés » — cet invariant doit donc être vérifiable, pas déclaratif.
 *
 * Le contrôle porte sur les pages dont le `body.ts` a été corrigé. /tarifs
 * (18 <h4> pour 8 <h3>, trois ruptures) reste à traiter par son propriétaire ;
 * ajouter son `body.ts` à `PAGES` verrouillera la correction.
 */

type Page = {
  /** Nom affiché en cas d'échec. */
  name: string;
  /** Fragment HTML réellement injecté dans <main>. */
  html: string;
  /**
   * Niveau du dernier titre rendu AVANT ce fragment. /contact rend son <h1>
   * depuis <ContactProjectSection headingLevel="h1"> : le fragment démarre donc
   * légitimement en <h2>.
   */
  precedingLevel: number;
};

const PAGES: Page[] = [
  { name: "/methode", html: methodeHtml, precedingLevel: 0 },
  { name: "/equipe", html: equipeBody, precedingLevel: 0 },
  {
    name: "/contact",
    html: splitContactPageHtml(contactBody).contentHtml,
    precedingLevel: 1,
  },
];

function headings(html: string): Array<{ level: number; text: string }> {
  return [...html.matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/g)].map((m) => ({
    level: Number(m[1]),
    text: m[2]
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 60),
  }));
}

describe("plan de document : aucun saut de niveau de titre", () => {
  it.each(PAGES)("$name enchaîne les titres sans trou", ({ html, precedingLevel }) => {
    const found = headings(html);
    expect(found.length).toBeGreaterThan(3);

    let previous = precedingLevel;
    for (const heading of found) {
      if (previous > 0) {
        expect(
          heading.level,
          `saut h${previous} → h${heading.level} avant « ${heading.text} »`,
        ).toBeLessThanOrEqual(previous + 1);
      }
      previous = heading.level;
    }
  });

  it("détecte bien un saut quand il y en a un", () => {
    const broken = "<h2>Section</h2><h4>Sous-titre orphelin</h4>";
    const levels = headings(broken).map((h) => h.level);
    expect(levels).toEqual([2, 4]);
  });
});
