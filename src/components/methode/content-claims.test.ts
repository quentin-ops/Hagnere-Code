import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { bodyHtml } from "./body";

const pageSource = readFileSync(
  new URL("../../app/methode/page.tsx", import.meta.url),
  "utf8",
);

describe("method page public claims", () => {
  it("n'annonce pas de capacité, pénalité ou résultat automatique", () => {
    const publishedContent = `${bodyHtml}\n${pageSource}`;

    expect(publishedContent).not.toMatch(/pénalité de\s*7\s*%/i);
    expect(publishedContent).not.toMatch(
      /(?:2|deux) places?[^<.]{0,80}(?:mois|disponible)/i,
    );
    expect(publishedContent).not.toMatch(/résultat commercial garanti/i);
  });

  it("rappelle que capacité et conséquences dépendent du devis", () => {
    expect(bodyHtml).toContain(
      "La capacité disponible et la date réaliste de démarrage",
    );
    expect(bodyHtml).toContain("Aucune pénalité automatique");
  });

  it("does not generalize competitor practices or invent a universal delivery ritual", () => {
    expect(bodyHtml).not.toMatch(
      /la pratique courante|l'agence disparaît trois mois|presque toujours lui qui paie|démo chaque vendredi|chaque vendredi à 16 h/i,
    );
    expect(bodyHtml).toContain("Quatre zones de risque");
    expect(bodyHtml).toContain("à la cadence convenue");
  });

  it("keeps scope changes, discounts and estimates in the signed documents", () => {
    expect(bodyHtml).not.toMatch(
      /si on dépasse, c'est notre problème|aucun dépassement caché possible|fourchettes typiques/i,
    );
    expect(bodyHtml).toContain("Aucun coût supplémentaire ne s'applique sans accord écrit");
    expect(bodyHtml).toContain("EXEMPLES INDICATIFS · À RECALCULER APRÈS CADRAGE");
  });
});
