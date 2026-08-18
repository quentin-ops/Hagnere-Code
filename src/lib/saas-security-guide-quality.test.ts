import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { getGuide } from "./guides";

const routeSource = readFileSync(
  join(process.cwd(), "src/app/guides/securite-saas-b2b/page.tsx"),
  "utf8",
);
const toolSource = readFileSync(
  join(process.cwd(), "src/components/guides/SaasSecurityDecisionTool.tsx"),
  "utf8",
);
const engineSource = readFileSync(
  join(process.cwd(), "src/lib/saas-security-decision.ts"),
  "utf8",
);
const ogSource = readFileSync(
  join(process.cwd(), "src/app/guides/securite-saas-b2b/opengraph-image.tsx"),
  "utf8",
);

describe("premium security SaaS guide", () => {
  it("opens with a concrete buyer decision in plain French", () => {
    const lead = routeSource.match(/<p className="lead">([\s\S]*?)<\/p>/)?.[1];
    const visible = (lead ?? "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    expect(lead).toBeDefined();
    expect(visible).toMatch(/vous êtes à quelques jours de signer/i);
    expect(visible).toContain("direction informatique");
    expect(visible).toContain("si la loi et le contrat le permettent");
    expect(visible.split(/\s+/).length).toBeLessThanOrEqual(150);
    expect(visible).not.toMatch(/\b(DSI|roadmap|périmètre|preuve)\b/i);
  });

  it("separates organization badges from product security", () => {
    expect(routeSource).toContain(
      "Un badge d’entreprise ne répond pas à une question sur le logiciel",
    );
    expect(routeSource).toContain("Software Security Code of Practice");
    expect(routeSource).toContain("SecureByDemandGuide_080624_508c.pdf");
    expect(routeSource).toContain("réglages sont sûrs dès l’installation");
    expect(routeSource).toContain("l’environnement de construction");
    expect(routeSource).toContain("versions sont maintenues et jusqu’à quand");
    expect(routeSource).toContain("quel dirigeant répond");
  });

  it("turns claims into a falsifiable argument and visible limits", () => {
    expect(routeSource).toContain(
      "Transformez une promesse en affirmation que l’on peut contredire",
    );
    expect(routeSource).toContain("principles-based-assurance");
    expect(routeSource).toContain("1. Affirmation");
    expect(routeSource).toContain("2. Raisonnement");
    expect(routeSource).toContain("3. Faits et limite");
    expect(routeSource).toContain(
      "l’export asynchrone manque, l’affirmation globale reste trop large",
    );
  });

  it("teaches encryption, key lifecycle and usable logging as separate controls", () => {
    expect(routeSource).toContain(
      "Prouvez le chiffrement, la gestion des clés et les journaux",
    );
    expect(routeSource).toContain("key-management-guidelines");
    expect(routeSource).toContain("sp/800/53/r5/upd1/final");
    expect(routeSource).toContain("données en transit");
    expect(routeSource).toContain("données stockées");
    expect(routeSource).toMatch(/copies\s+de sauvegarde/);
    expect(routeSource).toContain("séparation des rôles");
    expect(routeSource).toContain("rotation, révocation, récupération");
    expect(routeSource).toContain("horodatage, résultat, rétention");
    expect(routeSource).toContain(
      "Une connexion chiffrée ne prouve ni l’identité autorisée ni la séparation entre clients",
    );
  });

  it("teaches a real exit exercise without overstating the Data Act", () => {
    expect(routeSource).toContain("règlement européen Data Act");
    expect(routeSource).toContain("s’applique depuis le 12 septembre 2025");
    expect(routeSource).toContain("période transitoire maximale de");
    expect(routeSource).toContain("12 janvier 2027");
    expect(routeSource).toMatch(
      /Ce délai n’est pas\s+une promesse qu’une migration complète réussira en 30 jours/,
    );
    expect(routeSource).toContain("Le Data Act ne s’applique pas par slogan");
    expect(routeSource).toContain(
      "Ce total interne n’est pas synonyme de « frais de changement »",
    );
    expect(routeSource).not.toMatch(
      /toute sortie (?:est|doit être) (?:déjà )?gratuite/i,
    );
  });

  it("goes beyond an SBOM inventory and reads assurance documents", () => {
    expect(routeSource).toContain("NIST SP 1326");
    expect(routeSource).toContain("différents étages de la chaîne");
    expect(routeSource).toContain(
      "Une liste de composants sans version en production",
    );
    expect(routeSource).toContain("Lisez le document avant de compter le logo");
    expect(routeSource).toMatch(/contrôles\s+que\s+le client\s+doit/);
    expect(routeSource).toContain("inclus ou exclus");
    expect(routeSource).toContain("lettre peut décrire une période non");
    expect(routeSource).toContain(
      "niveau 1, qui repose sur une auto-évaluation",
    );
    expect(routeSource).toMatch(
      /niveau\s+2, qui ajoute une certification ou une attestation par\s+un tiers/,
    );
    expect(routeSource).toContain("ISO/IEC 27017:2015");
    expect(routeSource).toContain("ISO/IEC 27018:2025");
    expect(routeSource).toContain("ISO/IEC 27701:2025");
    expect(routeSource).toContain(
      "Leur simple mention ne prouve ni leur inclusion dans le périmètre",
    );
  });

  it("compares equal-scope total cost without inventing market prices", () => {
    expect(routeSource).toContain("COÛT COMPLET SUR 36 MOIS");
    expect(routeSource).toContain("préparation interne");
    expect(routeSource).toContain("corrections et contre-tests");
    expect(routeSource).toContain("exploitation, revues et renouvellements");
    expect(routeSource).toContain("coût de remplacement ou de sortie");
    expect(routeSource).toMatch(/Une valeur inconnue reste «\s+inconnue/);
  });

  it("keeps every editorial comparison readable on mobile", () => {
    const headerBlocks = routeSource.matchAll(
      /<GuideTable[\s\S]*?headers=\{\[([\s\S]*?)\]\}/g,
    );

    for (const match of headerBlocks) {
      const headers = match[1].match(/(["'])(?:\\.|(?!\1)[\s\S])*?\1/g) ?? [];
      expect(headers.length).toBeLessThanOrEqual(3);
    }
  });

  it("does not squeeze the five evidence cards into clipped columns", () => {
    expect(routeSource).toContain("grid gap-4 sm:grid-cols-2 lg:grid-cols-3");
    expect(routeSource).not.toContain(
      "grid gap-4 sm:grid-cols-2 lg:grid-cols-5",
    );
  });

  it("makes the local workshop conservative and recoverable as a draft", () => {
    expect(toolSource).toContain("cinq contrôles essentiels");
    expect(toolSource).toContain("remediationWorkComplete");
    expect(toolSource).toContain("Télécharger le brouillon");
    expect(toolSource).toContain("Imprimer le brouillon");
    expect(toolSource).toContain("Référence de l’accord écrit de l’acheteur");
    expect(routeSource).toContain(
      "Une condition distincte exige un dossier distinct",
    );
    expect(engineSource).toContain("downgraded-critical-control");
    expect(engineSource).toContain("essential-control-not-applicable");
    expect(engineSource).toContain("non-reportable-obligation");
    expect(engineSource).toContain("applicable-obligation-dismissed");
    expect(engineSource).toContain("independent-assurance-dismissed");
    expect(engineSource).toContain("critical-requirement-dismissed");
    expect(engineSource).toContain("insufficient-formal-evidence");
    expect(toolSource).toContain(
      "un dossier distinct ne la rend pas optionnelle",
    );
    expect(engineSource).toContain("BROUILLON INCOMPLET");
  });

  it("aligns the social card with five essentials and one extra family", () => {
    expect(ogSource).toContain("5 contrôles essentiels + 1 famille");
    expect(ogSource).toContain('"Autres exigences"');
    expect(ogSource).toContain("1 famille d’autres exigences");
    expect(ogSource).not.toContain("Huit fiches");
    expect(ogSource).not.toContain('"Continuité"');
  });

  it("keeps the rewritten guide outside the published index", () => {
    const guide = getGuide("securite-saas-b2b");

    expect(guide.dateModified).toBe("2026-07-25");
    expect(guide.editorialStatus).toBe("ready-for-human-review");
  });
});
