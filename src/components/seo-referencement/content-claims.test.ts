import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import {
  SEO_BUDGET_SHAPES,
  SEO_COMMITMENTS,
  SEO_RELATED_RESOURCES,
  SEO_SCOPE_EXCLUDED,
  SEO_SCOPE_INCLUDED,
  SEO_TECH_FAQS,
} from "./content";

const source = readFileSync(new URL("./SeoReferencement.tsx", import.meta.url), "utf8");
const contentSource = readFileSync(new URL("./content.ts", import.meta.url), "utf8");

describe("SEO public page claims", () => {
  it("limits proof to public pages and scopes price and rights", () => {
    expect(source).not.toMatch(/produits du groupe en production|groupe que nous exploitons|100\s*%[^\n]{0,80}livrables conservés/i);
    expect(source).toContain("pas leur exploitation interne, leur sécurité ou leurs résultats");
    expect(source).toContain("transfert après paiement complet selon les CGV");
    expect(source).toContain("sans accord écrit préalable");
  });

  it("states response timing as a non-guaranteed objective", () => {
    expect(source).not.toMatch(/réponse[^\n]{0,80}sous 24 h/i);
    expect(source).toContain("répondre le prochain jour ouvré, sans délai garanti");
  });

  it("publie les blocs de fond attendus sur les autres pages services", () => {
    // Bloc tarifaire ancré comme sur les dix autres pages services.
    expect(source).toContain('id="tarifs"');
    expect(SEO_BUDGET_SHAPES.length).toBeGreaterThanOrEqual(3);
    // Checklist inclus / hors scope.
    expect(SEO_SCOPE_INCLUDED.length).toBeGreaterThanOrEqual(4);
    expect(SEO_SCOPE_EXCLUDED.length).toBeGreaterThanOrEqual(4);
    expect(source).toContain("HORS PÉRIMÈTRE");
    // Engagements & points à contractualiser.
    expect(SEO_COMMITMENTS.length).toBeGreaterThanOrEqual(4);
    expect(source).toContain("ENGAGEMENTS &amp; POINTS À CONTRACTUALISER");
    // FAQ technique.
    expect(SEO_TECH_FAQS.length).toBeGreaterThanOrEqual(5);
    expect(source).toContain("QUESTIONS TECHNIQUES");
  });

  /**
   * La ronde d'audit de 2026-08 a trouvé une impasse circulaire : cette page
   * écrivait « les paliers publiés et leur prix mensuel figurent sur la grille
   * tarifaire » pendant que /tarifs affiche « Sur devis » sur les trois colonnes
   * SEO et renvoyait, dans sa note de lecture, vers cette page-ci. Chaque
   * extrémité désignait l'autre comme détentrice du prix ; le prix n'existait
   * nulle part, et l'ancienne version de ce test verrouillait la phrase fautive.
   *
   * Arbitrage : aucun palier SEO n'étant arrêté, en publier trois violerait la
   * règle d'or. La page dit donc qu'elle ne chiffre pas, sans envoyer le lecteur
   * chercher ailleurs un montant qui n'y est pas.
   */
  it("ne renvoie pas vers /tarifs pour un montant que /tarifs ne publie pas", () => {
    // La page ne doit ni nier l'existence de la grille, ni republier ses montants.
    expect(source).not.toMatch(/catalogue artificiel/i);
    expect(contentSource).not.toMatch(/\d[\d\s ]*€\s*\/?\s*(?:m|mois)/i);
    expect(source).toContain('href="/tarifs"');

    // Plus aucune promesse de paliers ou de prix « publiés » ailleurs.
    const budget = `${source}\n${contentSource}`;
    expect(budget).not.toMatch(/figurent sur la grille tarifaire/i);
    expect(budget).not.toMatch(/(?:sont|est) publiés? sur (?:la )?grille tarifaire/i);
    expect(budget).not.toMatch(
      /grille tarifaire[^.<]{0,40}(?:publie|affiche)[^.<]{0,40}(?:prix|montants?|paliers?)/i,
    );
    expect(budget).not.toMatch(/publiés? à un seul endroit/i);

    // …et une position explicite : le montant est fixé au devis.
    expect(contentSource).toMatch(/figurent au devis/i);
    expect(source).toMatch(/aucun montant\s*\n?\s*n&apos;est publié/i);
  });

  it("ne promet ni position ni citation par une IA", () => {
    const published = `${source}\n${contentSource}`;
    expect(published).not.toMatch(/première page garantie|position garantie sur/i);
    expect(published).not.toMatch(/devenir l'une de ces|être cité par l'IA de Google/i);
    expect(contentSource).toMatch(/Aucune position garantie/i);
  });

  it("renvoie vers la publicité en ligne, en réciprocité du lien inverse", () => {
    const hrefs = SEO_RELATED_RESOURCES.map((resource) => resource.href);
    expect(hrefs).toContain("/services/publicite-en-ligne");
    expect(hrefs).toContain("/services/audit-technique");
    expect(hrefs).toContain("/guides/pourquoi-site-pas-visible-google");
  });
});
