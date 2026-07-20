import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const source = readFileSync(new URL("./ProjectFunnel.tsx", import.meta.url), "utf8");

describe("project funnel public claims", () => {
  it("ne publie pas les anciennes preuves de livraison ou garanties non étayées", () => {
    expect(source).not.toMatch(/100\s*%[\s\S]{0,120}livrés à l'heure/i);
    expect(source).not.toMatch(/30\s*j[\s\S]{0,120}garantie post-lancement/i);
    expect(source).not.toMatch(/Garantir uptime 99[,.]9|Garantir disponibilité pendant les pics/i);
  });

  it("ne présente pas un outil ou le formulaire comme automatiquement conforme", () => {
    expect(source).not.toMatch(/Données privées, conforme RGPD|pas de revente, conforme RGPD/i);
    expect(source).not.toMatch(/Système de gestion des cookies conforme RGPD/i);
    expect(source).not.toMatch(/Outil métier conforme RGPD|éviter les audits CNIL/i);
  });

  it("qualifie la case comme un accusé de lecture avec la base adaptée au rôle", () => {
    expect(source).not.toContain("<b>Consentement RGPD</b>");
    expect(source).toContain("Accusé de lecture et demande de traitement");
    expect(source).toContain("des mesures précontractuelles ou sur l&apos;intérêt légitime");
  });
});
