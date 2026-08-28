import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { composedBodyHtml } from "./composed-body";

const bodySource = readFileSync(new URL("./body.ts", import.meta.url), "utf8");

describe("application mobile public claims", () => {
  it("aligne les droits sur les CGV", () => {
    expect(composedBodyHtml).not.toMatch(/(?:code|propriété)[^<.]{0,80}(?:J\+1|dès le premier jour)/i);
    expect(composedBodyHtml).not.toMatch(/cession exclusive[^<.]{0,80}(?:dans nos|aux) CGV/i);
  });

  it("ne promet pas de pénalité ou de délai de store par défaut", () => {
    expect(composedBodyHtml).not.toMatch(/pénalité de retard contractuelle|pénalité de retard de 7\s*%/i);
    expect(composedBodyHtml).not.toMatch(/garantie sur 2 stores/i);
  });

  it("ne transforme pas des chiffres viraux en statistiques Apple ou produit", () => {
    expect(composedBodyHtml).not.toMatch(/Apple[^<.]{0,100}(?:refuse|rejette)[^<.]{0,40}40\s*%/i);
    expect(composedBodyHtml).not.toMatch(/désinstallée?[^<.]{0,60}(?:6|six) mois/i);
    expect(composedBodyHtml).not.toMatch(/SLA\s*4\s*h/i);
  });

  it("présente DPO et consentement des mineurs de façon conditionnelle", () => {
    expect(composedBodyHtml).not.toMatch(/données santé[^<.]{0,100}DPO obligatoire/i);
    expect(composedBodyHtml).not.toMatch(/mineurs[^<.]{0,100}double consentement parental/i);
  });

  it("ne transforme pas la stack choisie en gain universel", () => {
    expect(composedBodyHtml).not.toMatch(
      /conversion\s*[×x]2|bug fix en prod en\s*10 minutes|zéro republication store|coût divisé par 2|Apple Watch via 1 seule codebase/i,
    );
    expect(composedBodyHtml).not.toMatch(
      /sous-traitance offshore[^<.]{0,100}refus quasi-certain|poubelle dans 6 mois/i,
    );
  });

  it("ne publie plus de benchmarks sectoriels non sourcés", () => {
    expect(composedBodyHtml).not.toMatch(
      /conversion app vs site mobile|conversion mobile \(secteur retail\)|panier moyen mobile observé|ouverture push vs email|Criteo|App Annie|data\.ai/i,
    );
    expect(composedBodyHtml).not.toMatch(/(?:×3|\+40\s*%|5[–-]10×)[^<]{0,100}(?:conversion|panier|ouverture)/i);
  });

  it("ne promet ni OTA instantanée ni calendrier de livraison absolu", () => {
    expect(composedBodyHtml).not.toMatch(/(?:OTA|hot-?fix)[^<.]{0,100}(?:en\s*10\s*min|instantan|sans review)/i);
    expect(composedBodyHtml).not.toMatch(/stores dès\s*12\s*semaines|livraison\s*(?:8 à 12|14 à 20)\s*semaines|livraison\s*5 à 9\s*mois/i);
    expect(composedBodyHtml).toMatch(/planning indicatif[^<.]{0,100}(?:devis|cadrage)/i);
  });

  it("distingue comptes, cession de droits, paiement et licences", () => {
    expect(composedBodyHtml).not.toMatch(/100\s*%[^<.]{0,80}(?:code|comptes|propriété)|(?:code|comptes)[^<.]{0,80}100\s*%/i);
    expect(composedBodyHtml).toMatch(/livrables spécifiques[^<.]{0,160}paiement complet[^<.]{0,120}(?:CGV|licences tierces)/i);
  });

  it("identifie les situations commerciales comme fictives", () => {
    expect(composedBodyHtml).toMatch(/situations-types fictives/i);
    expect(composedBodyHtml).toMatch(/exemples sont fictifs/i);
  });
  it("n'affiche ni note, ni volume de téléchargements, ni label éditorial de store inventés", () => {
    expect(composedBodyHtml).not.toMatch(/★{2,}/);
    expect(composedBodyHtml).not.toMatch(/\d[,.]\d\s*·\s*\d+\s*avis/);
    expect(composedBodyHtml).not.toMatch(/Editor'?s choice/i);
    expect(composedBodyHtml).not.toMatch(/\d+\s*k\+?\s*téléch/i);
    expect(composedBodyHtml).not.toMatch(/Top\s*\d+\s*·/i);
  });

  it("étiquette les fiches store du hero comme des maquettes", () => {
    const flags = composedBodyHtml.match(/MAQUETTE · DONNÉES FICTIVES/g) ?? [];
    expect(flags).toHaveLength(2);
  });

  it("publie la même posture de preuve que les autres pages services", () => {
    expect(composedBodyHtml).toMatch(/pas encore de client externe/i);
    expect(composedBodyHtml).toMatch(/aucun témoignage/i);
    expect(composedBodyHtml).toContain('href="/realisations"');
    expect(composedBodyHtml).toContain("LMNP.AI");
    expect(composedBodyHtml).toContain("SCI-AI.app");
    expect(composedBodyHtml).toMatch(/produits du groupe Hagnéré/i);
    expect(composedBodyHtml).not.toMatch(/nos clients LMNP|client LMNP\.AI/i);
  });

  it("ne conserve aucun footer hérité dans le body", () => {
    expect(bodySource).not.toContain("<footer");
    expect(bodySource).not.toContain("<!-- FOOTER -->");
  });

  it("publie un maillage service→service dans le corps de la page", () => {
    expect(composedBodyHtml).toContain('href="/services/maintenance-evolution"');
    expect(composedBodyHtml).toContain('href="/services/saas-applications-metier"');
    expect(composedBodyHtml).toContain('href="/services/securite-rgpd"');
  });
});
