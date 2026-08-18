import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { getGuide } from "./guides";

const PAGE_PATH = path.join(
  process.cwd(),
  "src/app/guides/proprietaire-site-internet-code-source/page.tsx",
);
const page = fs.readFileSync(PAGE_PATH, "utf8");
const normalizedPage = page.replace(/\s+/g, " ");
const dossierComponent = fs.readFileSync(
  path.join(
    process.cwd(),
    "src/components/guides/SiteOwnershipExitDossier.tsx",
  ),
  "utf8",
);

describe("site ownership guide quality gate", () => {
  it("answers immediately and embeds the complete local dossier", () => {
    expect(page).toContain('id="verdict"');
    expect(page).toContain("4 conditions observables");
    expect(page).toContain("<SiteOwnershipExitDossier />");
    expect(page).toContain("14 accès");
    expect(page).toContain("8 preuves");
    expect(dossierComponent).toContain(
      "SITE_OWNERSHIP_CONTRACT_QUESTIONS.length} questions",
    );
    expect(dossierComponent).toContain("Aucune sauvegarde automatique");
    expect(page).toContain("12, 36 et 60 mois");
  });

  it("separates material delivery, technical operability and rights", () => {
    expect(page).toContain(
      "Remise du code et droits sur le code : deux livrables",
    );
    expect(page).toContain("Avez-vous le code ?");
    expect(page).toContain("Pouvez-vous l’utiliser ?");
    expect(page).toContain("Pouvez-vous le modifier ?");
    expect(page).toContain("Pouvez-vous changer d’équipe ?");
  });

  it("covers the controlling French and EU primary sources without pretending to give advice", () => {
    for (const article of [
      "LEGIARTI000042814694",
      "LEGIARTI000039279818",
      "LEGIARTI000006278919",
      "LEGIARTI000006278920",
      "LEGIARTI000006278955",
      "LEGIARTI000006278958",
      "LEGIARTI000049579339",
    ]) {
      expect(page).toContain(article);
    }
    expect(normalizedPage).toContain("article 28 du RGPD publié par la CNIL");
    expect(page).toContain("eur-lex.europa.eu/eli/reg/2016/679/oj");
    expect(normalizedPage).toContain("une autorisation écrite préalable");
    expect(normalizedPage).toContain("demeure pleinement responsable");
    expect(page).toContain("Ce guide n’est pas un avis juridique");
    expect(normalizedPage).toContain(
      "le renvoi ou la suppression des données personnelles",
    );
    expect(page).not.toContain("vrai propriétaire du domaine");
  });

  it("covers the applicable EU Data Act without turning it into a code assignment", () => {
    expect(page).toContain("eur-lex.europa.eu/eli/reg/2023/2854/oj");
    expect(normalizedPage).toContain("applicable depuis le 12 septembre 2025");
    expect(normalizedPage).toContain(
      "une période transitoire maximale de 30 jours",
    );
    expect(page).toContain(
      "Le Data Act n’est pas une cession du site ou du code",
    );
    expect(normalizedPage).toContain(
      "certains services développés sur mesure ou fournis à titre d’essai",
    );
  });

  it("distinguishes domain holder change from registrar transfer", () => {
    expect(normalizedPage).toContain(
      "transmission ou un changement de titulaire",
    );
    expect(normalizedPage).toContain(
      "veut changer de bureau d’enregistrement, demandez un transfert",
    );
    expect(page).toContain("AUTH_INFO");
    expect(page).toContain("charte AFNIC en vigueur");
  });

  it("compares five platforms on internal handoff and external exit", () => {
    for (const platform of [
      "Wix",
      "Shopify",
      "Webflow",
      "HubSpot",
      "Squarespace",
    ]) {
      expect(page).toContain(platform);
    }
    expect(page).toContain("Passation et sortie");
    expect(normalizedPage).toContain(
      "Hors Wix : le site complet dépend de sa technologie et de ses serveurs",
    );
    expect(normalizedPage).toContain(
      "contenus et fonctions CMS, comptes utilisateurs, e-commerce, localisation et composants de code ne suivent pas",
    );
    expect(normalizedPage).toContain(
      "le Site plan et les domaines connectés peuvent suivre",
    );
    expect(normalizedPage).toContain(
      "le plan Ecommerce ne suit pas : le nouveau propriétaire doit souscrire un plan et réactiver le checkout",
    );
    expect(normalizedPage).toContain(
      "l’export exige un Workspace plan payant ; un Site plan seul ne suffit pas",
    );
    expect(normalizedPage).toContain(
      "le traitement des formulaires et la recherche du site ne fonctionnent pas",
    );
    expect(page).toContain(
      "Il ne sert pas à importer un site complet dans un autre Squarespace",
    );
  });

  it("uses an explicitly fictional economic case and keeps legal cost unknown", () => {
    expect(normalizedPage).toContain(
      "Alp’Isolation est un exemple entièrement fictif",
    );
    expect(normalizedPage).toContain("21 600 € HT");
    expect(normalizedPage).toContain("9 000 € HT");
    expect(normalizedPage).toContain("14 500 € HT");
    expect(normalizedPage).toContain("79 € HT par an");
    expect(normalizedPage).toContain("19 333 € / 26 691 € / 34 049 €");
    expect(normalizedPage).toContain("32 910 € / 43 310 € / 53 710 €");
    expect(normalizedPage).toContain("ND sans stratégie et devis d’un avocat");
    expect(normalizedPage).toContain(
      "une baisse de 20 % pendant deux mois expose 20 demandes",
    );
    expect(page).not.toContain("tarif moyen de cession");
    expect(dossierComponent).toContain(
      "Le calcul n’actualise ni inflation, ni",
    );
  });

  it("treats escrow as a maintained and testable mechanism, not a deposit alone", () => {
    expect(page).toContain(
      "Un dépôt probatoire et un entiercement ne sont pas synonymes",
    );
    expect(page).toContain("Fréquence");
    expect(page).toContain("Vérification");
    expect(page).toContain("Libération");
    expect(page).toContain("Droits après accès");
    expect(page).toContain("Demandez un devis daté");
    expect(page).not.toContain("APP-price-legal-entities.pdf");
  });

  it("makes international material methodological and non-transposable", () => {
    expect(normalizedPage).toContain(
      "Les références étrangères ci-dessous ne s’appliquent pas automatiquement",
    );
    expect(page).toContain("Royaume-Uni — GOV.UK");
    expect(page).toContain("États-Unis — FAR et NIST");
    expect(page).toContain("Australie — IP Australia");
    expect(page).toContain(
      "La règle australienne de propriété du contractor n’est pas une règle française",
    );
  });

  it("publishes coherent, current guide metadata", () => {
    const guide = getGuide("proprietaire-site-internet-code-source");
    expect(guide.dateModified).toBe("2026-07-27");
    expect(guide.readTimeMin).toBeGreaterThanOrEqual(25);
    expect(guide.title).toContain("Guide 2026");
    expect(guide.metaDescription.length).toBeGreaterThanOrEqual(120);
    expect(guide.metaDescription.length).toBeLessThanOrEqual(160);
    expect(guide.metaDescription).toContain("12, 36 et 60 mois");
  });

  it("retains Article, Breadcrumb and visible FAQ delivery", () => {
    expect(page).toContain('"@type": "Article"');
    expect(page).toContain('"@type": "BreadcrumbList"');
    expect(page).toContain("faqItems={faqItems}");
    expect(page).toContain("alternates: { canonical: guidePath(guide) }");
  });
});
