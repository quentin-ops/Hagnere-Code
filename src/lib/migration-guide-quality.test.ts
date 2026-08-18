import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { unzipSync } from "fflate";
import { describe, expect, it } from "vitest";

const root = process.cwd();
const pagePath = join(
  root,
  "src/app/guides/migrer-logiciel-metier-sans-interruption/page.tsx",
);
const page = readFileSync(pagePath, "utf8");
const normalized = page.replace(/\s+/g, " ");
const guideRegistry = readFileSync(join(root, "src/lib/guides.ts"), "utf8");
const openGraphImage = readFileSync(
  join(
    root,
    "src/app/guides/migrer-logiciel-metier-sans-interruption/opengraph-image.tsx",
  ),
  "utf8",
);
const kitRoot = join(root, "public/ressources/kit-migration-logiciel-metier");

const expectedKitFiles = [
  "00-mode-emploi.md",
  "01-inventaire-dependances-exemple.csv",
  "01-inventaire-dependances-vierge.csv",
  "02-mapping-donnees-exemple.csv",
  "02-mapping-donnees-vierge.csv",
  "03-source-de-verite-exemple.csv",
  "03-source-de-verite-vierge.csv",
  "04-journal-lots-exemple.csv",
  "04-journal-lots-vierge.csv",
  "05-rapprochement-exemple.csv",
  "05-rapprochement-vierge.csv",
  "06-rpo-rto-mtd-exemple.csv",
  "06-rpo-rto-mtd-vierge.csv",
  "07-matrice-tests-exemple.csv",
  "07-matrice-tests-vierge.csv",
  "08-runbook-exemple.csv",
  "08-runbook-vierge.csv",
  "09-decision-stop-go-exemple.csv",
  "09-decision-stop-go-vierge.csv",
  "10-registre-copies-acces-exemple.csv",
  "10-registre-copies-acces-vierge.csv",
  "11-hypercare-exemple.csv",
  "11-hypercare-vierge.csv",
  "12-tco-exemple.csv",
  "12-tco-vierge.csv",
  "13-releve-de-decision-vierge.md",
  "14-releve-de-decision-nova-exemple.md",
];

function readKit(name: string) {
  return readFileSync(join(kitRoot, name), "utf8");
}

describe("guide migration de logiciel métier — profondeur et cohérence", () => {
  it("répond d'abord au dirigeant et sépare quatre décisions de trois trajectoires", () => {
    const lead =
      page
        .match(/<p className="lead">([\s\S]*?)<\/p>/)?.[1]
        ?.replace(/\s+/g, " ") ?? "";

    expect(lead).toContain(
      "personne ne peut le promettre avant d’avoir mesuré",
    );
    expect(normalized).toContain(
      "que doit encore pouvoir faire l’équipe lundi matin",
    );
    expect(normalized).toContain("qui a le droit d’écrire");
    expect(normalized).toContain("combien de temps il reste");
    expect(normalized).toContain("La décision en cinq minutes");
    for (const executiveDecision of [
      "Protégez le travail, pas seulement le logiciel",
      "Choisissez selon les frontières réelles",
      "Prouvez les données et le retour",
      "Écrivez le STOP avant le jour J",
      "Commencez avec trois fichiers",
    ]) {
      expect(normalized).toContain(executiveDecision);
    }
    expect(normalized).not.toContain("La réponse en une minute");

    for (const trajectory of [
      "Stabiliser et reporter quatre semaines",
      "Migration progressive par domaine ou population",
      "Bascule en une fois",
      "Remplacement ciblé de type strangler",
    ]) {
      expect(page).toContain(`"${trajectory}"`);
    }

    expect(normalized).toContain(
      "une migration progressive mal découpée est plus dangereuse qu’une bascule complète bien répétée",
    );
    expect(normalized).toContain(
      "La période parallèle n’est pas une cinquième trajectoire",
    );
    expect(normalized).toContain(
      "Quatre décisions restent possibles, mais elles ne produisent pas le même résultat",
    );
    expect(page).toContain("Comparer un report et trois trajectoires");
    expect(page).not.toContain("Comparer quatre trajectoires");
    expect(normalized).toContain(
      "Les trois trajectoires de migration — progressive, bascule complète et remplacement ciblé",
    );
    expect(normalized).toContain("coût total sur la durée (TCO)");
    expect(normalized).toContain(
      "Hagnéré Code développe, reprend et maintient des applications métier",
    );
    expect(guideRegistry).toContain(
      "Préparez le remplacement d’un logiciel métier sans arrêt subi",
    );
    expect(guideRegistry).not.toContain(
      "Changez de logiciel sans arrêter commandes",
    );
    expect(openGraphImage).toContain(
      "Changer de logiciel : éviter l’arrêt subi",
    );
    expect(openGraphImage).not.toContain(
      "Changer de logiciel sans arrêter l’activité",
    );
  });

  it("traite les écritures, le rejeu et le rapprochement sans double écriture naïve", () => {
    for (const phrase of [
      "Par défaut, une seule source écrit",
      "source d’écriture de référence",
      "Une architecture multi-écriture peut exister",
      "CDC",
      "idempotent",
      "rejouer",
      "Volumes",
      "Somme",
      "Relations",
      "Droits",
      "Roll-forward",
      "point de non-retour",
    ]) {
      expect(normalized).toContain(phrase);
    }

    expect(normalized).toContain(
      "Une sauvegarde n’est une preuve de retour que si une restauration a été testée",
    );
    expect(normalized).toContain(
      "Un retour qui détruit les nouvelles commandes n’est pas un retour",
    );
  });

  it("garde un cas Nova unique et un verdict STOP explicable", () => {
    for (const value of [
      "40 utilisateurs",
      "2 400 clients",
      "8 000 dossiers historiques",
      "300 dossiers ouverts",
      "220 factures",
      "cinq intégrations",
      "dix rôles",
      "cinquante écritures",
      "2 420 lignes",
      "20 lignes en doublon",
    ]) {
      expect(normalized).toContain(value);
    }

    expect(page).not.toContain("12 480");
    expect(page).not.toContain("8 640");
    expect(page).not.toContain("420 dossiers");
    expect(normalized).toContain("TST-002 échoue");
    expect(normalized).toContain(
      "La porte A donne quatre raisons de s’arrêter",
    );
    expect(normalized).toContain("299 relations correctes sur 300");
    expect(normalized).toContain("un rejet sans propriétaire");
    expect(normalized).toContain("La porte B mesure 2 h 30");
    expect(normalized).toContain("300 relations sur 300");
    expect(normalized).toContain("zéro rejet non attribué");
    expect(normalized).toContain("TST-002 échoue encore");
    expect(normalized).toContain(
      "corrige seulement le rattachement entre dossiers et clients",
    );
    expect(normalized).toContain(
      "Elle ne corrige pas encore la règle de statut manquante",
    );
    expect(normalized).not.toContain(
      "attribue le rejet, corrige le mapping, exécute LOT-002-R1",
    );
  });

  it("calcule exactement les répétitions, l'arrêt et les objectifs de continuité", () => {
    for (const expression of [
      "3 h 20 + 1 h 10 + 1 h 45 = 6 h 15",
      "20 min + 1 h 10 + 15 min + 45 min = 2 h 30",
      "40 personnes × 7 heures × 55 € = 15 400 €",
      "RPO",
      "RTO",
      "MTD",
      "SLA",
    ]) {
      expect(normalized).toContain(expression);
    }

    const continuity = readKit("06-rpo-rto-mtd-exemple.csv");
    expect(continuity).toContain("Mesure_observee");
    expect(continuity).toContain("RPO 12 min et RTO 24 min");
    expect(continuity).toContain("RPO 3 h 10 et RTO 6 h");
    expect(continuity).toContain(
      "Fraicheur maximale du dernier snapshot 24 h aucune ecriture active",
    );
    expect(normalized).toContain(
      "Le RPO désigne le point ou la fenêtre temporelle",
    );
    expect(normalized).toContain("NIST SP 800-34 Rev.1");
    expect(page).toContain(
      'href="https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final"',
    );
    expect(normalized).toContain("aucun RPO d’écriture ne s’applique");
  });

  it("recalcule le TCO 12, 36 et 60 mois avec les mêmes unités", () => {
    const tco = readKit("12-tco-exemple.csv").trim().split("\n");
    const headers = tco[0].split(";");
    const get = (row: string, column: string) =>
      row.split(";")[headers.indexOf(column)];

    const expected = new Map([
      [
        "Bascule_en_une_fois",
        { days: 117, oldMonths: 4, totals: [134850, 211650, 300450] },
      ],
      [
        "Migration_progressive",
        { days: 146, oldMonths: 8, totals: [160900, 237700, 326500] },
      ],
      [
        "Strangler_cible",
        { days: 181, oldMonths: 11, totals: [189050, 265850, 354650] },
      ],
    ]);

    for (const row of tco.slice(1)) {
      const scenario = get(row, "Scenario");
      const expectation = expected.get(scenario);
      expect(expectation, scenario).toBeDefined();
      if (!expectation) continue;

      const days = Number(get(row, "Jours_projet"));
      const dayComponents = [
        "Cadrage_jours",
        "Nettoyage_mapping_jours",
        "Integrations_jours",
        "Tests_repetitions_jours",
        "Conduite_changement_jours",
        "Pilotage_sortie_jours",
      ].map((column) => Number(get(row, column)));
      const daily = Number(get(row, "Cout_jour_eur"));
      const userTime = Number(get(row, "Temps_utilisateurs_hypercare_eur"));
      const targetMonthly = Number(get(row, "Cible_mensuelle_eur"));
      const oldMonthly = Number(get(row, "Ancien_mensuel_eur"));
      const oldMonths = Number(get(row, "Mois_coexistence"));
      const archiveMonthly = Number(get(row, "Archive_mensuelle_eur"));
      const exit = Number(get(row, "Exercice_sortie_60_eur"));
      const calculatedUserTime =
        Number(get(row, "Utilisateurs_impacts")) *
        Number(get(row, "Heures_indisponibilite_planifiee")) *
        Number(get(row, "Cout_heure_utilisateur_eur"));
      const calculatedHypercare =
        Number(get(row, "Personnes_hypercare")) *
        Number(get(row, "Heures_hypercare_par_personne")) *
        Number(get(row, "Cout_heure_hypercare_eur"));

      const total12 =
        days * daily +
        userTime +
        12 * targetMonthly +
        oldMonths * oldMonthly +
        Number(get(row, "Mois_archive_12")) * archiveMonthly;
      const total36 =
        days * daily +
        userTime +
        36 * targetMonthly +
        oldMonths * oldMonthly +
        Number(get(row, "Mois_archive_36")) * archiveMonthly;
      const total60 =
        days * daily +
        userTime +
        60 * targetMonthly +
        oldMonths * oldMonthly +
        Number(get(row, "Mois_archive_60")) * archiveMonthly +
        exit;

      expect(days).toBe(expectation.days);
      expect(dayComponents.reduce((sum, value) => sum + value, 0)).toBe(days);
      expect(calculatedUserTime).toBe(
        Number(get(row, "Temps_utilisateurs_eur")),
      );
      expect(calculatedHypercare).toBe(Number(get(row, "Hypercare_eur")));
      expect(calculatedUserTime + calculatedHypercare).toBe(userTime);
      expect(userTime).toBe(13200);
      expect(oldMonths).toBe(expectation.oldMonths);
      expect([total12, total36, total60]).toEqual(expectation.totals);
      expect([
        Number(get(row, "TCO_12_mois_eur")),
        Number(get(row, "TCO_36_mois_eur")),
        Number(get(row, "TCO_60_mois_eur")),
      ]).toEqual(expectation.totals);
    }

    for (const total of [
      "134 850 €",
      "211 650 €",
      "300 450 €",
      "160 900 €",
      "237 700 €",
      "326 500 €",
      "189 050 €",
      "265 850 €",
      "354 650 €",
    ]) {
      expect(page).toContain(total);
    }

    expect(normalized).toContain("40 utilisateurs × 4 h × 55 € = 8 800 €");
    expect(normalized).toContain(
      "2 personnes d’hypercare × 40 h × 55 € = 4 400 €",
    );
    expect(normalized).toContain(
      "Les 13 200 € ne représentent pas les six heures d’indisponibilité",
    );
    expect(160900 - 134850).toBe(26050);
    expect(189050 - 134850).toBe(54200);
    expect(41 * 650).toBe(26650);
    expect(11.85 * 40 * 55).toBe(26070);
    expect(normalized).toContain("41 jours × 650 € = 26 650 €");
    expect(normalized).toContain("11 h 51 × 40 personnes × 55 €/h = 26 070 €");
    expect(normalized).toContain("Plus de 54 200 €");
  });

  it("aligne les deux portes Nova et interdit toute réussite prématurée", () => {
    const inventory = readKit("01-inventaire-dependances-exemple.csv");
    const writeContract = readKit("03-source-de-verite-exemple.csv");
    const journal = readKit("04-journal-lots-exemple.csv");
    const reconciliation = readKit("05-rapprochement-exemple.csv");
    const runbook = readKit("08-runbook-exemple.csv");
    const gates = readKit("09-decision-stop-go-exemple.csv");
    const decision = readKit("14-releve-de-decision-nova-exemple.md");
    const combined = [
      inventory,
      writeContract,
      journal,
      reconciliation,
      gates,
      decision,
    ].join("\n");

    expect(combined).not.toContain("2380");
    expect(inventory).toContain("2400 clients");
    expect(writeContract).toContain("2400 clients uniques");
    expect(journal).toContain(
      "2420;2400;20;0;Oui;Non applicable au premier passage",
    );
    expect(reconciliation).toContain(
      "2420 lignes source dont 20 doublons expliques vers clients uniques;2420;2400;20 doublons approuves;20",
    );
    expect(2420 - 20).toBe(2400);

    expect(journal.indexOf("LOT-003;")).toBeLessThan(
      journal.indexOf("LOT-004;"),
    );
    const journalRows = journal
      .trim()
      .split("\n")
      .map((line) => line.split(";"));
    const journalHeaders = journalRows[0];
    const journalColumn = (row: string[], name: string) =>
      row[journalHeaders.indexOf(name)];
    const localCestToTimestamp = (value: string) => {
      const match = value.match(/^(\d{2})h(\d{2})$/);
      expect(match, `heure CEST invalide: ${value}`).not.toBeNull();
      return Date.parse(`2026-07-24T${match![1]}:${match![2]}:00+02:00`);
    };
    const watermarkToTimestamp = (value: string) => {
      const match = value.match(/^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z)-/);
      expect(match, `watermark UTC invalide: ${value}`).not.toBeNull();
      return Date.parse(match![1]);
    };

    for (const row of journalRows.slice(1)) {
      const startWatermark = journalColumn(row, "Watermark_debut");
      const endWatermark = journalColumn(row, "Watermark_fin");
      if (!startWatermark.match(/^\d{4}-/)) continue;

      expect(
        watermarkToTimestamp(startWatermark),
        `${journalColumn(row, "Lot")}: début du watermark dans le futur`,
      ).toBeLessThanOrEqual(localCestToTimestamp(journalColumn(row, "Debut")));
      expect(
        watermarkToTimestamp(endWatermark),
        `${journalColumn(row, "Lot")}: fin du watermark après l’exécution`,
      ).toBeLessThanOrEqual(localCestToTimestamp(journalColumn(row, "Fin")));
    }

    expect(journal).toContain(
      "LOT-003;B;Derniere heure passage initial;17h30;17h33;2026-07-24T14:30:00Z-EVT-0000;2026-07-24T15:30:00Z-EVT-0050",
    );
    expect(runbook).toContain("LOT-003 puis rejouer avec LOT-004");
    expect(journal).toContain("LOT-002-R1;Entre A et B");
    expect(journal).toContain("LOT-002-R2;Entre A et B");

    expect(reconciliation).toContain(
      "REC-003-A;A;Dossiers ouverts;Lien client correct;300;299",
    );
    expect(reconciliation).toContain(
      "REC-003-B;B;Dossiers ouverts;Lien client correct apres LOT-002-R1 et LOT-002-R2;300;300",
    );

    for (const requiredGate of [
      "GO-A-002",
      "GO-A-003",
      "GO-A-004",
      "GO-A-005",
      "GO-B-001",
      "GO-B-002",
      "GO-B-003",
      "GO-B-004",
      "TST-002",
      "Un rejet sans proprietaire",
      "Zero rejet non attribue",
    ]) {
      expect(gates).toContain(requiredGate);
    }

    expect(decision).toContain("## Porte A — STOP");
    expect(decision).toContain("## Porte B — STOP");
    expect(decision).toContain("299 reliés au bon client");
    expect(decision).toContain("300 dossiers sur 300 reliés");
    expect(decision).toContain("zéro rejet non attribué");
    expect(decision).toContain("TST-002 toujours en échec");
    expect(decision).not.toMatch(/LOT-002-R[12].*non exécut|R1\/R2.*planifi/iu);
    expect(page).not.toContain(
      "Porte B après correction et rejeu de preuve (R1/R2)",
    );

    const copyRegister = readKit("10-registre-copies-acces-exemple.csv");
    expect(copyRegister).toContain(
      "Rejet attribue et traite entre les portes A et B registre ferme",
    );
    expect(copyRegister).not.toContain("Ouvert car un rejet non attribue");

    const hypercare = readKit("11-hypercare-exemple.csv");
    expect(hypercare).toContain("Exercice de preparation non observe");
    expect(hypercare).toContain(
      "Jour 1 si une porte ulterieure autorise le demarrage",
    );
    expect(hypercare).not.toContain(";2026-07-25;");
    expect(hypercare).not.toMatch(/;(?:Corrige|Sous surveillance);/);

    const kitInstructions = readKit("00-mode-emploi.md");
    expect(kitInstructions).toContain(
      "Par défaut, désignez une source d'écriture de référence",
    );
    expect(kitInstructions).toContain("architecture multi-écriture");
    for (const starterFile of [
      "01-inventaire-dependances-vierge.csv",
      "06-rpo-rto-mtd-vierge.csv",
      "09-decision-stop-go-vierge.csv",
    ]) {
      expect(page).toContain(starterFile);
      expect(kitInstructions).toContain(starterFile);
    }

    const testMatrix = readKit("07-matrice-tests-exemple.csv");
    expect(testMatrix).toContain(
      "Au moins 29 ouvertures sur 30 en 2 s ou moins",
    );
    expect(testMatrix).toContain(
      "29 sur 30 en 2 s ou moins plus lente a 2,1 s",
    );
    expect(testMatrix).not.toContain("Affichage dans le seuil decide");
  });

  it("couvre réellement les automatismes, équipements et contrats de sortie", () => {
    const inventory = readKit("01-inventaire-dependances-exemple.csv");

    for (const family of ["Automatisme", "Equipement", "Contrat_sortie"]) {
      expect(inventory).toContain(`;${family};`);
    }
  });

  it("livre le kit complet sans collecte et avec un exemple STOP cohérent", () => {
    expect(readdirSync(kitRoot).sort()).toEqual(expectedKitFiles.sort());

    for (const filename of expectedKitFiles) {
      const path = join(kitRoot, filename);
      expect(existsSync(path), filename).toBe(true);
      expect(statSync(path).size, filename).toBeGreaterThan(30);
    }

    expect(page).toContain(
      'href="/ressources/kit-migration-logiciel-metier.zip"',
    );
    expect(normalized).toContain("sans formulaire ni adresse email");
    expect(normalized).toContain("sans compte et sans transmission de données");

    const decision = readKit("14-releve-de-decision-nova-exemple.md");
    expect(decision).toContain("## Porte A — STOP");
    expect(decision).toContain("## Porte B — STOP");
    expect(decision).toContain("TST-002");
    expect(decision).toContain("6 h 15");
    expect(decision).toContain("299 reliés");
  });

  it("garde une archive exacte sans chemin parasite", () => {
    const prefix = "kit-migration-logiciel-metier/";
    const archive = unzipSync(
      readFileSync(
        join(root, "public/ressources/kit-migration-logiciel-metier.zip"),
      ),
    );
    const archiveNames = Object.keys(archive);
    const fileNames = archiveNames.filter((name) => !name.endsWith("/")).sort();
    const expectedNames = expectedKitFiles
      .map((name) => `${prefix}${name}`)
      .sort();

    expect(fileNames).toEqual(expectedNames);
    expect(
      archiveNames.every(
        (name) =>
          (name === prefix || name.startsWith(prefix)) &&
          !name.includes("..") &&
          !name.includes("\\") &&
          !name.startsWith("/"),
      ),
    ).toBe(true);

    for (const filename of expectedKitFiles) {
      const archived = Buffer.from(archive[`${prefix}${filename}`]);
      const standalone = readFileSync(join(kitRoot, filename));
      expect(archived.equals(standalone), `archive:${filename}`).toBe(true);
    }
  });

  it("garde tous les fichiers en UTF-8 et les CSV sans préfixe de formule", () => {
    for (const filename of expectedKitFiles) {
      expect(readKit(filename), filename).not.toContain("\uFFFD");
    }

    const csvFiles = expectedKitFiles.filter((name) => name.endsWith(".csv"));

    for (const filename of csvFiles) {
      const lines = readKit(filename).trim().split("\n");
      const columnCounts = lines.map((line) => line.split(";").length);
      expect(new Set(columnCounts), filename).toEqual(
        new Set([columnCounts[0]]),
      );

      for (const [lineIndex, line] of lines.entries()) {
        if (lineIndex === 0) continue;
        for (const cell of line.split(";")) {
          expect(cell, `${filename}:${lineIndex + 1}`).not.toMatch(
            /^(?:[=+@]|-(?!\d+(?:[.,]\d+)?$))|\t|^\r/,
          );
        }
      }
    }
  });

  it("conserve une conversion sobre et des limites honnêtes", () => {
    expect(page.match(/<GuideInlineCTA\b/g)).toHaveLength(1);
    expect(page.match(/<GuideTable\b/g)?.length ?? 0).toBeLessThanOrEqual(14);
    expect(page.match(/<InfoBox\b/g)?.length ?? 0).toBeLessThanOrEqual(7);
    expect(page.indexOf("<GuideInlineCTA")).toBeGreaterThan(
      page.indexOf('<h2 id="fermeture">'),
    );
    expect(page.indexOf("<GuideInlineCTA")).toBeLessThan(
      page.indexOf('<h2 id="sources">'),
    );
    expect(page).toContain("showPhone={false}");
    expect(page).toContain("showSidebarCta={false}");
    expect(page).not.toMatch(/FAQPage|HowTo|Offer/i);
    expect(normalized).toContain("Aucun chiffre ne constitue un benchmark");
    expect(normalized).toContain("ni un devis ni un benchmark");
  });
});
