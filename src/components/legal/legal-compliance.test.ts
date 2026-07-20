import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

function read(relativePath: string): string {
  return readFileSync(new URL(relativePath, import.meta.url), "utf8");
}

const mentions = read("./content/mentions-legales.tsx");
const cookies = read("./content/cookies.tsx");
const footer = read("../design-shared/SiteFooter.tsx");
const compactFooter = read("./LegalLinksFooter.tsx");
const cookieBanner = read("../cookies/CookieBanner.tsx");
const accessibilityPage = read("../../app/legal/accessibilite/page.tsx");
const rootLayout = read("../../app/layout.tsx");
const projectInquiryRoute = read("../../app/api/project-inquiry/route.ts");

describe("public legal alignment", () => {
  it("publie uniquement l'adresse de Bassens et aucun ancien SIRET", () => {
    const publicIdentitySources = [mentions, footer, compactFooter].join("\n");

    expect(publicIdentitySources).toContain(
      "82 impasse de Bellevue, 73000 Bassens",
    );
    expect(publicIdentitySources).not.toContain("7 rue Ernest Filliard");
    expect(publicIdentitySources).not.toMatch(/993\s?672\s?856\s?00016/);
  });

  it("identifie la société, sa forme et son capital", () => {
    expect(mentions).toContain("HAGNERE CODE");
    expect(mentions).toContain("SASU au capital social de 10 €");
    expect(mentions).toContain("RCS Chambéry 993 672 856");
  });

  it("décrit le brouillon de session sans coordonnées", () => {
    expect(cookies).toContain("pf:draft:v3");
    expect(cookies).toContain("sessionStorage");
    expect(cookies).toContain("24 heures au plus après la dernière sauvegarde");
    expect(cookies).toContain("activation volontaire du bouton");
    expect(cookies).not.toContain("pf:draft:v2");
    expect(rootLayout).toContain("<LegacyProjectDraftCleanup />");
  });

  it("informe de l'analytics avant les boutons accepter et refuser", () => {
    expect(cookieBanner).toContain(
      "« Accepter » autorise aussi une mesure",
    );
    expect(cookieBanner).toContain("Refuser");
    expect(cookieBanner).toContain("Accepter");
    expect(cookieBanner).toContain(
      "Autoriser la mesure d’audience facultative",
    );
  });

  it("donne accès aux six documents et aux préférences depuis le footer compact", () => {
    for (const href of [
      "/legal/mentions",
      "/legal/cgv",
      "/legal/confidentialite",
      "/legal/cookies",
      "/legal/reclamations",
      "/legal/accessibilite",
    ]) {
      expect(compactFooter).toContain(href);
    }
    expect(compactFooter).toContain("Gérer mes cookies");
  });

  it("ne présente pas la démarche accessibilité comme une déclaration auditée", () => {
    expect(accessibilityPage).toContain("Démarche d'accessibilité");
    expect(accessibilityPage).not.toContain("Déclaration d'accessibilité");
  });

  it("versionne la notice courte dans la base et les courriels de preuve", () => {
    expect(projectInquiryRoute).toContain(
      "privacyNoticeVersion: PROJECT_INQUIRY_PRIVACY_NOTICE_VERSION",
    );
    expect(projectInquiryRoute).toContain(
      "Notice vie privée lue : version ${PROJECT_INQUIRY_PRIVACY_NOTICE_VERSION}",
    );
    expect(projectInquiryRoute).toContain(
      "prise de connaissance confirmée",
    );
  });
});
