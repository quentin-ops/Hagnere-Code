import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { GUIDES, PUBLISHED_GUIDES } from "./guides";

const researchRoot = path.join(process.cwd(), "docs/research");

const delegatedPublicationGuides = [
  "audit-google-ads-que-verifier",
  "audit-seo-que-contient-il",
  "automatiser-processus-metier",
  "calculer-roi-application-metier",
  "contrat-tma-application",
  "mvp-saas-quoi-inclure",
  "prix-gestion-google-ads",
  "reprendre-logiciel-metier-existant",
  "seo-ou-google-ads",
  "template-ou-site-sur-mesure",
  "valider-idee-saas-avant-developper",
] as const;

describe("editorial governance evidence", () => {
  it("publishes the delegated corpus only with documented independent counter-audits", () => {
    for (const slug of delegatedPublicationGuides) {
      const guide = GUIDES.find((entry) => entry.slug === slug);
      expect(guide, slug).toBeDefined();
      expect(guide?.editorialStatus, slug).toBeUndefined();
      expect(PUBLISHED_GUIDES, slug).toContain(guide);

      const researchPath = path.join(researchRoot, `${slug}.md`);
      expect(fs.existsSync(researchPath), slug).toBe(true);

      const source = fs.readFileSync(researchPath, "utf8");
      const normalized = source.replace(/\s+/g, " ");

      expect(normalized, slug).toContain(
        "publiable — validation éditoriale déléguée",
      );
      expect(normalized, slug).toContain(
        "Décision de publication : autorisée explicitement par le commanditaire",
      );
      expect(normalized, slug).toMatch(/\b(?:19|20)\/20\b/);
      expect(normalized, slug).toMatch(
        /Test (?:réel|réalisé par une personne réelle)\s*:\s*non/i,
      );
      expect(normalized, slug).not.toMatch(
        /test(?:é|ée)? par (?:un |une )?lecteur humain réel[^.]{0,80}(?:oui|réalisé)/i,
      );
    }
  });
});
