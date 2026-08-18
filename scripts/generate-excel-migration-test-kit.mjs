import { createHash } from "node:crypto";
import {
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  statSync,
  utimesSync,
  writeFileSync,
} from "node:fs";
import { join, relative } from "node:path";
import { spawnSync } from "node:child_process";

const repositoryRoot = process.cwd();
const resourceRoot = join(
  repositoryRoot,
  "public",
  "ressources",
  "jeu-essai-migration-excel",
);
const attachmentsRoot = join(resourceRoot, "pieces-jointes");
const zipPath = join(
  repositoryRoot,
  "public",
  "ressources",
  "jeu-essai-migration-excel.zip",
);
const fixedDate = new Date("2026-07-28T12:00:00.000Z");

rmSync(resourceRoot, { recursive: true, force: true });
rmSync(zipPath, { force: true });
mkdirSync(attachmentsRoot, { recursive: true });

function csvCell(value) {
  const text = String(value ?? "");
  return /[;"\r\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function csvLine(values) {
  return `${values.map(csvCell).join(";")}\n`;
}

function isoDateForIndex(index) {
  const day = String(((index - 1) % 28) + 1).padStart(2, "0");
  const month = String((Math.floor((index - 1) / 28) % 12) + 1).padStart(
    2,
    "0",
  );
  return `2025-${month}-${day}`;
}

let baseCsv =
  "\uFEFF" +
  csvLine([
    "id",
    "montant_eur",
    "date_intervention",
    "statut",
    "responsable",
    "piece_jointe",
    "commentaire",
  ]);

for (let index = 1; index <= 3_050; index += 1) {
  const id = `X-${String(index).padStart(4, "0")}`;
  baseCsv += csvLine([
    id,
    index,
    isoDateForIndex(index),
    index % 11 === 0 ? "clos" : "ouvert",
    `Equipe-${String(((index - 1) % 7) + 1).padStart(2, "0")}`,
    index <= 10
      ? `pieces-jointes/piece-factice-${String(index).padStart(2, "0")}.txt`
      : "",
    index % 97 === 0
      ? "Contrôle manuel demandé ; donnée entièrement fictive"
      : "",
  ]);
}

writeFileSync(join(resourceRoot, "jeu-depart-3050-lignes.csv"), baseCsv);

let importCsv =
  "\uFEFF" +
  csvLine([
    "id",
    "montant_eur",
    "date_intervention",
    "statut",
    "responsable",
    "piece_jointe",
    "commentaire",
  ]);
let oracleCsv =
  "\uFEFF" +
  csvLine([
    "numero_ligne_import",
    "id_lu",
    "decision_attendue",
    "motif_attendu",
  ]);

for (let index = 3_052; index <= 3_146; index += 1) {
  const importRowNumber = index - 3_051;
  const id = `X-${String(index).padStart(4, "0")}`;
  importCsv += csvLine([
    id,
    1,
    "2026-07-28",
    "ouvert",
    "Equipe-Import",
    "",
    "",
  ]);
  oracleCsv += csvLine([
    importRowNumber,
    id,
    "ACCEPTER",
    "",
  ]);
}

const rejectedRows = [
  {
    values: ["X-0042", 1, "2026-07-28", "ouvert", "Equipe-Import", "", ""],
    reason: "Identifiant déjà présent",
  },
  {
    values: ["", 1, "2026-07-28", "ouvert", "Equipe-Import", "", ""],
    reason: "Identifiant obligatoire",
  },
  {
    values: [
      "X-3147",
      "un euro",
      "2026-07-28",
      "ouvert",
      "Equipe-Import",
      "",
      "",
    ],
    reason: "Montant non numérique",
  },
  {
    values: ["X-3148", 1, "2026-02-31", "ouvert", "Equipe-Import", "", ""],
    reason: "Date impossible",
  },
  {
    values: [
      "X-3149",
      1,
      "2026-07-28",
      "à deviner",
      "Equipe-Import",
      "",
      "",
    ],
    reason: "Statut hors liste",
  },
];

for (const [offset, rejected] of rejectedRows.entries()) {
  importCsv += csvLine(rejected.values);
  oracleCsv += csvLine([
    96 + offset,
    rejected.values[0],
    "REJETER",
    rejected.reason,
  ]);
}
writeFileSync(join(resourceRoot, "lot-import-100-lignes.csv"), importCsv);
writeFileSync(join(resourceRoot, "oracle-import.csv"), oracleCsv);

for (let index = 1; index <= 11; index += 1) {
  const number = String(index).padStart(2, "0");
  writeFileSync(
    join(attachmentsRoot, `piece-factice-${number}.txt`),
    [
      `PIÈCE FACTICE ${number}/11`,
      "Jeu d’essai Hagnéré Code — aucune donnée personnelle.",
      index === 11
        ? "À joindre à X-3051 lors de l’opération 1."
        : `Référencée par X-${String(index).padStart(4, "0")} dans le jeu de départ.`,
      "",
    ].join("\n"),
  );
}

writeFileSync(
  join(resourceRoot, "attendus-et-mode-emploi.txt"),
  [
    "JEU D’ESSAI — TRANSFORMER EXCEL EN APPLICATION",
    "Version : excel-migration-test-kit-r2-2026-07-28",
    "Données : entièrement fictives, sans donnée personnelle.",
    "",
    "FORMAT",
    "- CSV UTF-8 avec BOM, séparateur point-virgule.",
    "- Dates ISO AAAA-MM-JJ ; montant numérique en EUR ; identifiant unique.",
    "- 10 pièces sont référencées dans le jeu de départ.",
    "- La pièce 11 doit être jointe à X-3051 pendant l’opération 1.",
    "- Importer uniquement lot-import-100-lignes.csv : ses sept colonnes métier sont identiques à celles du jeu de départ.",
    "- Ne jamais importer oracle-import.csv : il contient les décisions et motifs attendus, référencés par numéro de ligne du lot.",
    "",
    "RÉSULTATS ATTENDUS",
    "0. Départ : 3 050 IDs distincts ; total = 4 652 775 EUR ; 10 pièces référencées.",
    "1. Créer X-3051 avec montant 3 051, date valide et pièce-factice-11.txt.",
    "   Attendu : 3 051 IDs ; total = 4 655 826 EUR ; 11 pièces.",
    "2. Tenter une date impossible et un montant texte sans écriture partielle.",
    "3. Retrouver X-2501 et recalculer sur toutes les lignes.",
    "4. Remplacer le montant de X-0042, 42 par 142.",
    "   Attendu : auteur/date/avant/après ; total = 4 655 926 EUR.",
    "5-6. Rejouer droits et concurrence selon le scénario retenu.",
    "7. Importer lot-import-100-lignes.csv.",
    "   Comparer ensuite le journal d’import à oracle-import.csv.",
    "   Attendu : 95 acceptées, 5 rejetées avec le motif attendu ; 3 146 IDs ; total = 4 656 021 EUR.",
    "8. Supprimer X-2501.",
    "   Attendu : 3 145 IDs ; total = 4 653 520 EUR ; restaurer ensuite 3 146 IDs et 4 656 021 EUR.",
    "9. Exporter puis réimporter : 3 146 IDs distincts, total exact, 11 pièces réutilisables.",
    "10. Faire reprendre export, restauration et exploitation par le suppléant.",
    "",
    "PORTE",
    "Un total faux, une ligne silencieusement perdue, un rejet inexpliqué ou une pièce non récupérable fait échouer la voie.",
    "",
  ].join("\n"),
);

function listFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolute = join(directory, entry.name);
    return entry.isDirectory() ? listFiles(absolute) : [absolute];
  });
}

for (const file of listFiles(resourceRoot)) {
  utimesSync(file, fixedDate, fixedDate);
}

const manifestEntries = listFiles(resourceRoot)
  .filter((file) => !file.endsWith("SHA256SUMS"))
  .sort()
  .map((file) => ({
    file,
    digest: createHash("sha256").update(readFileSync(file)).digest("hex"),
  }));

writeFileSync(
  join(resourceRoot, "SHA256SUMS"),
  `${manifestEntries
    .map(
      ({ file, digest }) =>
        `${digest}  ${relative(resourceRoot, file).replaceAll("\\", "/")}`,
    )
    .join("\n")}\n`,
);
utimesSync(join(resourceRoot, "SHA256SUMS"), fixedDate, fixedDate);

const zipEntries = listFiles(resourceRoot)
  .map((file) => relative(resourceRoot, file).replaceAll("\\", "/"))
  .sort();
const zip = spawnSync("zip", ["-X", "-D", "-q", zipPath, ...zipEntries], {
  cwd: resourceRoot,
  encoding: "utf8",
});
if (zip.status !== 0 || !statSync(zipPath).isFile()) {
  throw new Error(zip.stderr || "Impossible de créer l’archive ZIP");
}
utimesSync(zipPath, fixedDate, fixedDate);

console.log(
  `Kit généré : ${relative(repositoryRoot, zipPath)} (${zipEntries.length} fichiers)`,
);
