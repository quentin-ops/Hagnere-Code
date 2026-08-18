import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { getGuide } from "./guides";

const pagePath = path.join(
  process.cwd(),
  "src/app/guides/rgpd-saas-b2b/page.tsx",
);
const page = fs.readFileSync(pagePath, "utf8");
const normalized = page.replace(/\s+/g, " ");
const guide = getGuide("rgpd-saas-b2b");
const kitRoot = path.join(
  process.cwd(),
  "public/ressources/kit-preparation-rgpd-saas-b2b",
);

function parseSemicolonCsv(source: string) {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let quoted = false;

  for (let index = 0; index < source.length; index += 1) {
    const character = source[index];
    const next = source[index + 1];

    if (character === '"') {
      if (quoted && next === '"') {
        cell += '"';
        index += 1;
      } else {
        quoted = !quoted;
      }
    } else if (character === ";" && !quoted) {
      row.push(cell);
      cell = "";
    } else if ((character === "\n" || character === "\r") && !quoted) {
      if (character === "\r" && next === "\n") {
        index += 1;
      }
      row.push(cell);
      if (row.some((value) => value !== "")) {
        rows.push(row);
      }
      row = [];
      cell = "";
    } else {
      cell += character;
    }
  }

  if (cell !== "" || row.length > 0) {
    row.push(cell);
    rows.push(row);
  }

  expect(quoted, "guillemets CSV non refermés").toBe(false);
  return rows;
}

describe("guide RGPD SaaS B2B renforcé", () => {
  it("répond d’abord à la situation du dirigeant et borne le livrable", () => {
    const opening = normalized.slice(0, normalized.indexOf("<GuideToc"));

    expect(opening).toContain("Vous êtes sur le point de signer un client");
    expect(opening).toContain("La mauvaise réponse consiste à envoyer");
    expect(opening).toContain(
      "La bonne réponse consiste à suivre une donnée de sa collecte à sa suppression",
    );
    expect(opening).toContain(
      "pas un avis juridique ni un certificat de conformité",
    );
    expect(page.match(/<GuideInlineCTA\b/g)).toHaveLength(1);
  });

  it("couvre les rôles, le DPA et la chaîne de sous-traitance sans qualification automatique", () => {
    [
      "article 26 du RGPD",
      "article 28 du RGPD",
      "article 28, paragraphe 10",
      "autorisation écrite préalable",
      "obligations pertinentes doivent descendre dans la chaîne",
      "Une contradiction produit–contrat",
    ].forEach((expected) => expect(normalized).toContain(expected));

    expect(normalized).toContain(
      "Le tableau ne qualifie pas votre service à distance",
    );
    expect(normalized).not.toMatch(
      /(?:votre SaaS|un SaaS B2B) est toujours (?:un )?sous-traitant/i,
    );
  });

  it("sépare finalité, base, données sensibles, registres et information", () => {
    [
      "base de l’article 6",
      "catégories particulières de l’article 9",
      "article 10",
      "registre de responsable",
      "registre de sous-traitant",
      "moins de 250",
      "Notice accessible",
      "article 25 du RGPD",
      "collecte indirecte",
      "au plus tard dans un mois",
    ].forEach((expected) => expect(normalized).toContain(expected));

    expect(normalized).toContain(
      "Le consentement, le contrat et l’intérêt légitime ne sont pas trois formulations interchangeables",
    );
  });

  it("traite les transferts hors EEE comme une décision documentée", () => {
    [
      "Espace économique européen (EEE)",
      "Une décision d’adéquation",
      "garanties de l’article 46",
      "analyse d’impact du transfert",
      "mesures supplémentaires",
      "article 49",
      "transfert à examiner",
    ].forEach((expected) => expect(normalized).toContain(expected));

    expect(normalized).toContain(
      "Un accès depuis un pays tiers peut compter dans l’analyse",
    );
    expect(normalized).toContain(
      'question: "Un hébergement en Europe suffit-il pour respecter le RGPD ?", answer: "Non.',
    );
    expect(normalized).not.toMatch(
      /(?:hébergé|hébergement) en Europe (?:garantit|rend automatiquement) (?:la )?conform/i,
    );
  });

  it("rend les droits, la sécurité, l’incident et la sortie testables", () => {
    [
      "délai d’un mois",
      "prolongation possible de deux mois",
      "Limiter ou traiter une opposition",
      "Décision automatisée",
      "confidentialité, l’intégrité, la disponibilité, la résilience",
      "de manière échelonnée",
      "documente toutes les violations",
      "Data Act",
      "12 septembre 2025",
      "articles 23 à 30",
      "article 31, paragraphe 1",
      "article 23, point d, article 29 et article 30, paragraphes 1 et 3",
      "version hors production fournie pendant une durée limitée",
      "paragraphe 3 impose d’informer le prospect",
      "12 janvier 2027",
      "frais de changement réduits",
    ].forEach((expected) => expect(normalized).toContain(expected));

    expect(normalized).toContain(
      "Le droit à la portabilité n’est pas synonyme de « migration B2B universelle »",
    );
  });

  it("ouvre explicitement les portes cookies, IA, AIPD et DPO", () => {
    [
      "article 82 de la loi Informatique et Libertés",
      "Le contexte B2B n’accorde pas d’exemption générale",
      "autorisation écrite du responsable initial",
      "Toute fonction d’IA n’impose donc pas automatiquement une AIPD",
      "les trois déclencheurs de l’article 37",
      "L’article 38 exige",
      "interne, externe ou mutualisé",
      "coordonnées doivent être publiées",
      "conflit d’intérêts",
      "l’éventuelle désignation auprès de la CNIL",
    ].forEach((expected) => expect(normalized).toContain(expected));
  });

  it("présente trois budgets fictifs reproductibles sans les comparer comme des offres", () => {
    const pme = 3_900 + 2_500 + 2_000 + 3_000;
    const enterprise =
      20_000 + 12_000 + 8_000 + 1_500 * 36 + 9_000 * 3 + 32_000 * 0.15 * 3;
    const international = 35_000 + 20_000 + 2_000 * 60 + 15_000;

    expect(pme).toBe(11_400);
    expect(enterprise).toBe(135_400);
    expect(international).toBe(190_000);
    expect(international + 30_000).toBe(220_000);

    ["11 400 €", "135 400 €", "190 000 €", "220 000 €"].forEach((amount) =>
      expect(normalized).toContain(amount),
    );
    expect(normalized).toContain("hypothèses entièrement fictives");
    expect(normalized).toContain(
      "ne doivent pas être comparées comme des offres concurrentes",
    );
    expect(normalized).toContain("Un coût inconnu ne vaut jamais zéro");
  });

  it("propose un kit autonome sans score ni captation commerciale", () => {
    expect(normalized).toContain(
      "/ressources/kit-preparation-rgpd-saas-b2b.zip",
    );
    expect(normalized).toContain("Aucun formulaire commercial");
    expect(normalized).toContain("ne produit de score de conformité");
    expect(normalized).toContain("L’exemple Orbia est fictif");
    expect(normalized).toContain("un seul relevé Markdown (`.md`)");
    expect(normalized).toContain(
      "neuf tableaux CSV et trois documents Markdown",
    );
    expect(normalized).toContain(
      "Le questionnaire interactif suit l’import et l’inscription à une session",
    );
  });

  it("livre un kit statique complet dont tous les CSV restent rectangulaires", () => {
    const expectedFiles = [
      "00-mode-emploi.md",
      "01-registre-responsable.csv",
      "02-registre-sous-traitant.csv",
      "03-matrice-roles.csv",
      "04-matrice-prestataires-et-transferts.csv",
      "05-matrice-article-28.csv",
      "06-tests-droits-et-sortie.csv",
      "07-journal-incident.csv",
      "08-triage-aipd-dpo.md",
      "09-exemple-orbia.csv",
      "10-releve-de-decision.md",
      "11-plan-actions-budget.csv",
    ];

    expect(fs.readdirSync(kitRoot).sort()).toEqual(expectedFiles);
    expect(
      fs.existsSync(
        path.join(
          process.cwd(),
          "public/ressources/kit-preparation-rgpd-saas-b2b.zip",
        ),
      ),
    ).toBe(true);

    for (const fileName of expectedFiles.filter((name) =>
      name.endsWith(".csv"),
    )) {
      const rows = parseSemicolonCsv(
        fs.readFileSync(path.join(kitRoot, fileName), "utf8"),
      );
      expect(rows.length, fileName).toBeGreaterThan(1);
      const width = rows[0].length;
      expect(width, fileName).toBeGreaterThan(3);

      rows.forEach((row, rowIndex) => {
        expect(row.length, `${fileName}:${rowIndex + 1}`).toBe(width);
        row.forEach((cell, columnIndex) => {
          expect(
            cell.trim(),
            `${fileName}:${rowIndex + 1}:${columnIndex + 1}`,
          ).not.toMatch(/^[=+\-@]/);
        });
      });
    }

    const modeEmploi = fs.readFileSync(
      path.join(kitRoot, "00-mode-emploi.md"),
      "utf8",
    );
    expect(modeEmploi).toContain("Ce kit n’est ni");
    expect(modeEmploi).toContain("un score de risque");
    expect(modeEmploi).toContain("Chaque dépense reçoit une `cle_cout_unique`");
    expect(modeEmploi).toContain("données et identités fictives");
    expect(modeEmploi).toContain("neuf tableaux CSV");
    expect(modeEmploi).toContain("trois documents Markdown");
    expect(modeEmploi).toContain("collecte directe et indirecte");

    const incidentJournal = fs.readFileSync(
      path.join(kitRoot, "07-journal-incident.csv"),
      "utf8",
    );
    [
      "date_heure_prise_de_connaissance_a_confirmer",
      "nombre_approximatif_personnes",
      "nombre_approximatif_enregistrements",
      "consequences_probables",
      "motif_retard_ou_absence_notification",
      "complements_echelonnes",
      "exception_article_34_a_confirmer",
    ].forEach((expected) => expect(incidentJournal).toContain(expected));

    const dpoTriage = fs.readFileSync(
      path.join(kitRoot, "08-triage-aipd-dpo.md"),
      "utf8",
    );
    [
      "interne, externe ou mutualisé",
      "publication des coordonnées",
      "désignation auprès de la CNIL",
      "absence d’instruction, de sanction et de conflit d’intérêts",
    ].forEach((expected) => expect(dpoTriage).toContain(expected));
  });

  it("aligne la fiche guide sur la profondeur réellement rendue", () => {
    expect(guide.readTimeMin).toBe(35);
    expect(guide.heroTitle).toContain("quel dossier préparer");
    expect(guide.metaDescription).toContain("transferts");
    expect(guide.metaDescription).toContain("kit de préparation");
  });
});
