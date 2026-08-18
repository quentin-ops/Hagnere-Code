import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";
import { loadArtifactTool } from "./lib/load-artifact-tool.mjs";

const execFileAsync = promisify(execFile);
const artifactTool = await loadArtifactTool();
const { FileBlob, SpreadsheetFile } = artifactTool;
const AS_OF = "2026-07-28";
const AS_OF_SERIAL = Math.floor(
  (Date.parse(`${AS_OF}T00:00:00Z`) - Date.UTC(1899, 11, 30)) /
    (24 * 60 * 60 * 1_000),
);

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const workspace = path.resolve(scriptDir, "..");
const outputDir = path.join(
  workspace,
  "output",
  "sla-maintenance-applicative",
  "workbook",
);
const previewDir = path.join(outputDir, "previews");
const outputPath = path.join(
  outputDir,
  "kit-sla-maintenance-applicative.xlsx",
);
const publicPath = path.join(
  workspace,
  "public",
  "ressources",
  "kit-sla-maintenance-applicative.xlsx",
);
const sources = JSON.parse(
  await fs.readFile(
    path.join(workspace, "src", "lib", "sla-maintenance-workbook-sources.json"),
    "utf8",
  ),
);
const proofs = JSON.parse(
  await fs.readFile(
    path.join(workspace, "src", "lib", "sla-maintenance-required-proofs.json"),
    "utf8",
  ),
);
const expectedSheetNames = [
  "LIRE_D_ABORD",
  "HYPOTHESES",
  "SERVICES_PARCOURS",
  "PLAGES_CALENDRIER",
  "DISPONIBILITE",
  "INCIDENTS",
  "CHRONOLOGIE",
  "COUT_INCIDENT",
  "RPO_OPERATIONS",
  "DEPENDANCES",
  "COUVERTURES",
  "COMPARAISON_12_MOIS",
  "EXERCICES_PREUVES",
  "COMMUNICATION",
  "DECISION",
  "CONTROLES",
  "SOURCES",
];

await fs.mkdir(previewDir, { recursive: true });
const sha256 = (bytes) => createHash("sha256").update(bytes).digest("hex");
const importWorkbook = async (filePath) =>
  SpreadsheetFile.importXlsx(await FileBlob.load(filePath));
const unzipText = async (filePath, entry) =>
  (
    await execFileAsync("/usr/bin/unzip", ["-p", filePath, entry], {
      maxBuffer: 64 * 1024 * 1024,
    })
  ).stdout;
const unzipList = async (filePath) =>
  (
    await execFileAsync("/usr/bin/unzip", ["-Z1", filePath], {
      maxBuffer: 8 * 1024 * 1024,
    })
  ).stdout
    .trim()
    .split("\n");
const approx = (actual, expected, label, tolerance = 0.02) => {
  assert.equal(typeof actual, "number", `${label} doit rester numérique.`);
  assert.ok(
    Math.abs(actual - expected) <= tolerance,
    `${label} : attendu ${expected}, obtenu ${actual}`,
  );
};

const outputBytes = await fs.readFile(outputPath);
const publicBytes = await fs.readFile(publicPath);
const outputHash = sha256(outputBytes);
const publicHash = sha256(publicBytes);
assert.equal(
  outputHash,
  publicHash,
  "L’artefact public doit être identique à la copie de validation.",
);

const workbook = await importWorkbook(outputPath);
const publicWorkbook = await importWorkbook(publicPath);
for (const book of [workbook, publicWorkbook]) {
  assert.deepEqual(
    book.worksheets.items.map((sheet) => sheet.name),
    expectedSheetNames,
    "Les 17 onglets attendus doivent être conservés dans le bon ordre.",
  );
  for (const sheetName of expectedSheetNames) {
    assert.equal(
      book.worksheets.getItem(sheetName).tables.items.length,
      1,
      `${sheetName} doit exposer un tableau filtrable.`,
    );
  }
}

assert.equal(sources.length, 15);
assert.equal(new Set(sources.map((source) => source.id)).size, 15);
assert.equal(proofs.length, 8);
assert.equal(new Set(proofs.map((proof) => proof.id)).size, 8);
const sourceIds = new Set(sources.map((source) => source.id));
for (const proof of proofs) {
  for (const sourceId of proof.sourceIds) {
    assert.ok(sourceIds.has(sourceId), `Source orpheline : ${sourceId}`);
  }
}

const sourceSheet = workbook.worksheets.getItem("SOURCES");
assert.deepEqual(
  sourceSheet.getRange("B6:I20").values,
  sources.map((source) => [
    source.id,
    source.publisher,
    source.title,
    source.url,
    source.accessedOn,
    source.scope,
    source.limits,
    "VERIFIE",
  ]),
  "Le registre des sources doit être identique au JSON canonique.",
);
const proofSheet = workbook.worksheets.getItem("EXERCICES_PREUVES");
assert.deepEqual(
  proofSheet.getRange("B6:F13").values,
  proofs.map((proof) => [
    proof.id,
    proof.label,
    proof.expected,
    proof.acceptedEvidence.join(" | "),
    proof.sourceIds.join(" | "),
  ]),
  "Les huit domaines de preuve doivent être identiques au JSON canonique.",
);

const availability = workbook.worksheets.getItem("DISPONIBILITE");
const expectedMinutes = [432, 216, 43.2, 21.6, 4.32];
availability
  .getRange("F6:F10")
  .values.flat()
  .forEach((value, index) =>
    approx(value, expectedMinutes[index], `Disponibilité ligne ${index + 6}`),
  );
assert.deepEqual(
  availability.getRange("G6:G10").values.flat(),
  [25920, 12960, 2592, 1296, 259],
);

const chronology = workbook.worksheets.getItem("CHRONOLOGIE");
assert.deepEqual(
  chronology.getRange("E6:E12").values.flat(),
  [0, 8, 55, 150, 310, 410, 530],
  "Les sept horloges fictives doivent rester stables.",
);

const incident = workbook.worksheets.getItem("COUT_INCIDENT");
approx(incident.getRange("C15").values[0][0], 1764, "Capacité interne");
approx(incident.getRange("D15").values[0][0], 3564, "Coût brut");
approx(incident.getRange("E15").values[0][0], 200, "Crédit séparé");
approx(incident.getRange("F15").values[0][0], 3364, "Exposition nette");

const rpo = workbook.worksheets.getItem("RPO_OPERATIONS");
approx(rpo.getRange("G6").values[0][0], 60, "Opérations RPO");
approx(rpo.getRange("H6").values[0][0], 140, "Coût de ressaisie");

const comparison = workbook.worksheets.getItem("COMPARAISON_12_MOIS");
assert.deepEqual(
  comparison.getRange("F6:F8").values.flat(),
  [31656, 33828, 53364],
  "Les trois totaux fictifs doivent rester alignés sur le moteur TypeScript.",
);
assert.deepEqual(
  comparison.getRange("G6:G8").values.flat(),
  [1, 2, 3],
  "Le rang de coût doit rester purement descriptif.",
);

const decision = workbook.worksheets.getItem("DECISION");
assert.equal(
  decision.getRange("C16").values[0][0],
  "INCOMPLET",
  "Le classeur livré doit rester bloqué par sa provenance fictive.",
);
assert.equal(decision.getRange("C17").values[0][0], "BLOQUE");

const mutationSpecs = [
  {
    id: "MUT-01",
    input: ["DISPONIBILITE", "B8", 99.5],
    output: ["DISPONIBILITE", "F8", 216],
  },
  {
    id: "MUT-02",
    input: ["COUT_INCIDENT", "C6", 5.2],
    output: ["COUT_INCIDENT", "C15", 2184],
  },
  {
    id: "MUT-03",
    input: ["RPO_OPERATIONS", "D6", 2],
    output: ["RPO_OPERATIONS", "G6", 80],
  },
  {
    id: "MUT-04",
    input: ["COUVERTURES", "E6", 1300],
    output: ["COMPARAISON_12_MOIS", "F6", 32856],
  },
  {
    id: "MUT-05",
    input: ["COUVERTURES", "F7", 4],
    output: ["COMPARAISON_12_MOIS", "F7", 34392],
  },
  {
    id: "MUT-06",
    input: ["COUVERTURES", "J8", 3772],
    output: ["COMPARAISON_12_MOIS", "F8", 53414],
  },
  {
    id: "MUT-07",
    input: ["COUT_INCIDENT", "C6", 5.2],
    output: ["COUT_INCIDENT", "D15", 4098.29],
  },
  {
    id: "MUT-08",
    input: ["COUT_INCIDENT", "C9", 12.3456],
    output: ["COUT_INCIDENT", "C15", 217.78],
  },
];
const mutationScenarios = [];
for (const spec of mutationSpecs) {
  const [inputSheetName, inputAddress, injected] = spec.input;
  const [outputSheetName, outputAddress, expected] = spec.output;
  const inputCell = workbook.worksheets
    .getItem(inputSheetName)
    .getRange(inputAddress);
  const original = inputCell.values[0][0];
  inputCell.values = [[injected]];
  const actual = workbook.worksheets
    .getItem(outputSheetName)
    .getRange(outputAddress).values[0][0];
  approx(actual, expected, spec.id);
  inputCell.values = [[original]];
  mutationScenarios.push({
    id: spec.id,
    input: `${inputSheetName}!${inputAddress}`,
    output: `${outputSheetName}!${outputAddress}`,
    injected,
    expected,
    actual,
    detected: true,
  });
}

const adversarialScenarios = [];
const runAdversarial = ({
  id,
  inputSheet,
  inputAddress,
  injected,
  outputSheet,
  outputAddress,
  expected,
  before,
  after,
}) => {
  before?.();
  const inputCell = workbook.worksheets
    .getItem(inputSheet)
    .getRange(inputAddress);
  const original = structuredClone(inputCell.values);
  inputCell.values = Array.isArray(injected[0]) ? injected : [[injected]];
  const actual = workbook.worksheets
    .getItem(outputSheet)
    .getRange(outputAddress).values[0][0];
  assert.equal(actual, expected, `${id} doit produire ${expected}.`);
  inputCell.values = original;
  after?.();
  adversarialScenarios.push({
    id,
    input: `${inputSheet}!${inputAddress}`,
    output: `${outputSheet}!${outputAddress}`,
    expected,
    actual,
    detected: true,
  });
};

runAdversarial({
  id: "ADV-01",
  inputSheet: "DISPONIBILITE",
  inputAddress: "B6",
  injected: 100,
  outputSheet: "DISPONIBILITE",
  outputAddress: "H6",
  expected: "STOP",
});
runAdversarial({
  id: "ADV-02",
  inputSheet: "COUT_INCIDENT",
  inputAddress: "C6",
  injected: -1,
  outputSheet: "COUT_INCIDENT",
  outputAddress: "H6",
  expected: "STOP",
});
runAdversarial({
  id: "ADV-03",
  inputSheet: "COUT_INCIDENT",
  inputAddress: "C7",
  injected: 1.5,
  outputSheet: "COUT_INCIDENT",
  outputAddress: "H7",
  expected: "STOP",
});
runAdversarial({
  id: "ADV-04",
  inputSheet: "CHRONOLOGIE",
  inputAddress: "D8",
  injected: 46231.38,
  outputSheet: "CHRONOLOGIE",
  outputAddress: "H8",
  expected: "STOP",
});
runAdversarial({
  id: "ADV-05",
  inputSheet: "COUVERTURES",
  inputAddress: "K6",
  injected: "",
  outputSheet: "COMPARAISON_12_MOIS",
  outputAddress: "H6",
  expected: "INCOMPLET",
});
runAdversarial({
  id: "ADV-06",
  inputSheet: "EXERCICES_PREUVES",
  inputAddress: "G6",
  injected: "ECHEC",
  outputSheet: "DECISION",
  outputAddress: "C16",
  expected: "STOP",
});
runAdversarial({
  id: "ADV-07",
  inputSheet: "LIRE_D_ABORD",
  inputAddress: "C9",
  injected: "NON",
  outputSheet: "DECISION",
  outputAddress: "C16",
  expected: "STOP",
});
runAdversarial({
  id: "ADV-08",
  inputSheet: "LIRE_D_ABORD",
  inputAddress: "C10",
  injected: "OUI",
  outputSheet: "DECISION",
  outputAddress: "C16",
  expected: "STOP",
});
runAdversarial({
  id: "ADV-09",
  inputSheet: "LIRE_D_ABORD",
  inputAddress: "C8",
  injected: "NON",
  outputSheet: "DECISION",
  outputAddress: "C16",
  expected: "INCOMPLET",
  before: () => {
    workbook.worksheets.getItem("LIRE_D_ABORD").getRange("C8").values = [["OUI"]];
  },
  after: () => {
    workbook.worksheets.getItem("LIRE_D_ABORD").getRange("C8").values = [["NON"]];
  },
});
runAdversarial({
  id: "ADV-10",
  inputSheet: "EXERCICES_PREUVES",
  inputAddress: "G6:G13",
  injected: Array.from({ length: 8 }, () => ["DECLARE"]),
  outputSheet: "DECISION",
  outputAddress: "C16",
  expected: "COMPARABLE",
  before: () => {
    workbook.worksheets.getItem("LIRE_D_ABORD").getRange("C8").values = [["OUI"]];
  },
  after: () => {
    workbook.worksheets.getItem("LIRE_D_ABORD").getRange("C8").values = [["NON"]];
  },
});
for (const [id, inputAddress] of [
  ["ADV-11", "I6:I13"],
  ["ADV-12", "H6:H13"],
  ["ADV-13", "J6:J13"],
]) {
  runAdversarial({
    id,
    inputSheet: "EXERCICES_PREUVES",
    inputAddress,
    injected: Array.from({ length: 8 }, () => [""]),
    outputSheet: "DECISION",
    outputAddress: "C16",
    expected: "COMPARABLE",
    before: () => {
      workbook.worksheets.getItem("LIRE_D_ABORD").getRange("C8").values = [
        ["OUI"],
      ];
      workbook.worksheets
        .getItem("EXERCICES_PREUVES")
        .getRange("G6:G13").values = Array.from({ length: 8 }, () => [
        "VERIFIE",
      ]);
    },
    after: () => {
      workbook.worksheets.getItem("LIRE_D_ABORD").getRange("C8").values = [
        ["NON"],
      ];
      workbook.worksheets
        .getItem("EXERCICES_PREUVES")
        .getRange("G6:G13").values = Array.from({ length: 8 }, () => [
        "DECLARE",
      ]);
    },
  });
}
runAdversarial({
  id: "ADV-14",
  inputSheet: "RPO_OPERATIONS",
  inputAddress: "C6",
  injected: -1,
  outputSheet: "DECISION",
  outputAddress: "C16",
  expected: "STOP",
});
runAdversarial({
  id: "ADV-15",
  inputSheet: "LIRE_D_ABORD",
  inputAddress: "C11",
  injected: 50_000,
  outputSheet: "DECISION",
  outputAddress: "C16",
  expected: "INCOMPLET",
});
runAdversarial({
  id: "ADV-16",
  inputSheet: "COUVERTURES",
  inputAddress: "K6",
  injected: "     ",
  outputSheet: "COMPARAISON_12_MOIS",
  outputAddress: "H6",
  expected: "INCOMPLET",
});
for (const [id, inputAddress, whitespace] of [
  ["ADV-17", "H6:H13", "      "],
  ["ADV-18", "J6:J13", "   "],
]) {
  runAdversarial({
    id,
    inputSheet: "EXERCICES_PREUVES",
    inputAddress,
    injected: Array.from({ length: 8 }, () => [whitespace]),
    outputSheet: "DECISION",
    outputAddress: "C16",
    expected: "COMPARABLE",
    before: () => {
      workbook.worksheets.getItem("LIRE_D_ABORD").getRange("C8").values = [
        ["OUI"],
      ];
      workbook.worksheets
        .getItem("EXERCICES_PREUVES")
        .getRange("G6:G13").values = Array.from({ length: 8 }, () => [
        "VERIFIE",
      ]);
    },
    after: () => {
      workbook.worksheets.getItem("LIRE_D_ABORD").getRange("C8").values = [
        ["NON"],
      ];
      workbook.worksheets
        .getItem("EXERCICES_PREUVES")
        .getRange("G6:G13").values = Array.from({ length: 8 }, () => [
        "DECLARE",
      ]);
    },
  });
}
runAdversarial({
  id: "ADV-19",
  inputSheet: "COUT_INCIDENT",
  inputAddress: "C6:C13",
  injected: Array.from({ length: 8 }, () => [""]),
  outputSheet: "DECISION",
  outputAddress: "C16",
  expected: "STOP",
});
runAdversarial({
  id: "ADV-20",
  inputSheet: "COUVERTURES",
  inputAddress: "B6:B8",
  injected: [["A"], ["A"], ["A"]],
  outputSheet: "COMPARAISON_12_MOIS",
  outputAddress: "H6",
  expected: "INCOMPLET",
});
runAdversarial({
  id: "ADV-21",
  inputSheet: "COUVERTURES",
  inputAddress: "C6",
  injected: "",
  outputSheet: "COMPARAISON_12_MOIS",
  outputAddress: "H6",
  expected: "INCOMPLET",
});
runAdversarial({
  id: "ADV-22",
  inputSheet: "LIRE_D_ABORD",
  inputAddress: "C10",
  injected: "",
  outputSheet: "DECISION",
  outputAddress: "C16",
  expected: "STOP",
});
runAdversarial({
  id: "ADV-23",
  inputSheet: "COUT_INCIDENT",
  inputAddress: "C13",
  injected: 1_000_000,
  outputSheet: "DECISION",
  outputAddress: "C16",
  expected: "STOP",
});
for (const [id, injected] of [
  ["ADV-24", ""],
  ["ADV-25", 46_230.5],
]) {
  runAdversarial({
    id,
    inputSheet: "LIRE_D_ABORD",
    inputAddress: "C11",
    injected,
    outputSheet: "DECISION",
    outputAddress: "C16",
    expected: "INCOMPLET",
    before: () => {
      workbook.worksheets.getItem("LIRE_D_ABORD").getRange("C8").values = [
        ["OUI"],
      ];
    },
    after: () => {
      workbook.worksheets.getItem("LIRE_D_ABORD").getRange("C8").values = [
        ["NON"],
      ];
    },
  });
}
runAdversarial({
  id: "ADV-26",
  inputSheet: "EXERCICES_PREUVES",
  inputAddress: "I6:I13",
  injected: Array.from({ length: 8 }, () => [46_230.5]),
  outputSheet: "DECISION",
  outputAddress: "C16",
  expected: "COMPARABLE",
  before: () => {
    workbook.worksheets.getItem("LIRE_D_ABORD").getRange("C8").values = [
      ["OUI"],
    ];
    workbook.worksheets
      .getItem("EXERCICES_PREUVES")
      .getRange("G6:G13").values = Array.from({ length: 8 }, () => [
      "VERIFIE",
    ]);
  },
  after: () => {
    workbook.worksheets.getItem("LIRE_D_ABORD").getRange("C8").values = [
      ["NON"],
    ];
    workbook.worksheets
      .getItem("EXERCICES_PREUVES")
      .getRange("G6:G13").values = Array.from({ length: 8 }, () => [
      "DECLARE",
    ]);
  },
});
runAdversarial({
  id: "ADV-27",
  inputSheet: "COUVERTURES",
  inputAddress: "L6",
  injected: 46_230.5,
  outputSheet: "COMPARAISON_12_MOIS",
  outputAddress: "H6",
  expected: "INCOMPLET",
});
for (const [id, injected] of [
  ["ADV-28", 30.5],
  ["ADV-29", 1_000],
]) {
  runAdversarial({
    id,
    inputSheet: "DISPONIBILITE",
    inputAddress: "C6",
    injected,
    outputSheet: "DISPONIBILITE",
    outputAddress: "H6",
    expected: "STOP",
  });
}
for (const [id, inputAddress, injected, outputAddress] of [
  ["ADV-30", "C6", 4.20001, "H6"],
  ["ADV-31", "C6", 2_000_000, "H6"],
  ["ADV-32", "C7", 200_000_000, "H7"],
]) {
  runAdversarial({
    id,
    inputSheet: "COUT_INCIDENT",
    inputAddress,
    injected,
    outputSheet: "COUT_INCIDENT",
    outputAddress,
    expected: "STOP",
  });
}
runAdversarial({
  id: "ADV-33",
  inputSheet: "RPO_OPERATIONS",
  inputAddress: "C6",
  injected: 0.50001,
  outputSheet: "DECISION",
  outputAddress: "C16",
  expected: "STOP",
});
for (const [id, injected] of [
  ["ADV-34", 5_000.00001],
  ["ADV-35", 20_000_000_000],
]) {
  runAdversarial({
    id,
    inputSheet: "COUVERTURES",
    inputAddress: "D6",
    injected,
    outputSheet: "COMPARAISON_12_MOIS",
    outputAddress: "H6",
    expected: "INCOMPLET",
  });
}
runAdversarial({
  id: "ADV-36",
  inputSheet: "COUT_INCIDENT",
  inputAddress: "C6:C13",
  injected: [[0], [12], [35], [100], [0.0049], [0], [0.0049], [0.005]],
  outputSheet: "COUT_INCIDENT",
  outputAddress: "F15",
  expected: "STOP",
});
runAdversarial({
  id: "ADV-37",
  inputSheet: "RPO_OPERATIONS",
  inputAddress: "C6:F6",
  injected: [[0.1234, 0.5678, 60, 10_000]],
  outputSheet: "RPO_OPERATIONS",
  outputAddress: "H6",
  expected: 700.67,
});
runAdversarial({
  id: "ADV-38",
  inputSheet: "COUVERTURES",
  inputAddress: "D6:J6",
  injected: [[0.0049, 0.0001, 0.0049, 1, 0.0049, 0.0049, 1]],
  outputSheet: "COMPARAISON_12_MOIS",
  outputAddress: "F6",
  expected: 0.07,
});
runAdversarial({
  id: "ADV-39",
  inputSheet: "COUVERTURES",
  inputAddress: "B6:B8",
  injected: [[" "], ["  "], ["   "]],
  outputSheet: "COMPARAISON_12_MOIS",
  outputAddress: "H6",
  expected: "INCOMPLET",
});
runAdversarial({
  id: "ADV-40",
  inputSheet: "COUVERTURES",
  inputAddress: "B6",
  injected: 3,
  outputSheet: "COMPARAISON_12_MOIS",
  outputAddress: "H6",
  expected: "INCOMPLET",
});
runAdversarial({
  id: "ADV-41",
  inputSheet: "COUVERTURES",
  inputAddress: "D6:J6",
  injected: [[
    10_000_000_000,
    10_000_000_000,
    10_000_000_000,
    10_000_000_000,
    10_000_000_000,
    10_000_000_000,
    10_000_000_000,
  ]],
  outputSheet: "COMPARAISON_12_MOIS",
  outputAddress: "H6",
  expected: "PASS",
});
runAdversarial({
  id: "ADV-42",
  inputSheet: "COUT_INCIDENT",
  inputAddress: "C6:C13",
  injected: [
    [697_000],
    [50_060_583],
    [5_360_721_370],
    [75.7265],
    [8_059_708_956],
    [8_729_195_211],
    [8_828_211_630],
    [0],
  ],
  outputSheet: "COUT_INCIDENT",
  outputAddress: "D15",
  expected: 1.4164453378181823e23,
});
runAdversarial({
  id: "ADV-43",
  inputSheet: "RPO_OPERATIONS",
  inputAddress: "C6:F6",
  injected: [[
    55_220_724.1219,
    854_982.8893,
    732.7511,
    7_998_262_618.5409,
  ]],
  outputSheet: "RPO_OPERATIONS",
  outputAddress: "H6",
  expected: 4.611693218303003e24,
});
assert.equal(mutationScenarios.length, 8);
assert.equal(adversarialScenarios.length, 43);

const formulaErrors = [
  "#REF!",
  "#DIV/0!",
  "#VALUE!",
  "#NAME?",
  "#N/A",
  "#NUM!",
  "#NULL!",
  "#SPILL!",
  "#CALC!",
];
const secretPatterns = [
  /sk-(?:proj-)?[A-Za-z0-9_-]{20,}/,
  /xox[baprs]-[A-Za-z0-9-]{16,}/,
  /AKIA[0-9A-Z]{16}/,
  /(?:password|api[_-]?token)\s*=\s*[^\s<]{8,}/i,
  /postgres(?:ql)?:\/\/[^:\s]+:[^@\s]+@/i,
];
const formulaErrorHits = [];
const secretHits = [];
let formulaCellCount = 0;
const sheetMetrics = [];
const governedFormulaSpecs = [];
const govern = (sheetName, address, expectedFormula) =>
  governedFormulaSpecs.push([sheetName, address, expectedFormula]);

for (let row = 6; row <= 10; row += 1) {
  govern("DISPONIBILITE", `E${row}`, `=C${row}*D${row}*60`);
  govern(
    "DISPONIBILITE",
    `F${row}`,
    `=E${row}*(1-B${row}/100)`,
  );
  govern("DISPONIBILITE", `G${row}`, `=ROUND(F${row}*60,0)`);
  govern(
    "DISPONIBILITE",
    `H${row}`,
    `=IF(AND(ISNUMBER(B${row}),ISNUMBER(C${row}),ISNUMBER(D${row})),IF(AND(B${row}>0,B${row}<100,ROUND(B${row},4)=B${row},C${row}>0,C${row}<=366,INT(C${row})=C${row},D${row}>0,D${row}<=24,ROUND(D${row},4)=D${row}),"PASS","STOP"),"STOP")`,
  );
}

for (let row = 6; row <= 12; row += 1) {
  govern(
    "CHRONOLOGIE",
    `E${row}`,
    `=ROUND((D${row}-$D$6)*1440,0)`,
  );
  govern(
    "CHRONOLOGIE",
    `H${row}`,
    row === 6
      ? '=IF(ISNUMBER(D6),"PASS","STOP")'
      : `=IF(AND(ISNUMBER(D${row}),D${row}>=D${row - 1}),"PASS","STOP")`,
  );
}

const costStatusFormulas = {
  6: '=IF(ISNUMBER(C6),IF(AND(C6>=0,C6<=1000000,ROUND(C6,4)=C6),"PASS","STOP"),"STOP")',
  7: '=IF(ISNUMBER(C7),IF(AND(C7>=0,C7<=100000000,INT(C7)=C7),"PASS","STOP"),"STOP")',
  8: '=IF(ISNUMBER(C8),IF(AND(C8>=0,C8<=10000000000,ROUND(C8,4)=C8),"PASS","STOP"),"STOP")',
  9: '=IF(ISNUMBER(C9),IF(AND(C9>=0,C9<=100,ROUND(C9,4)=C9),"PASS","STOP"),"STOP")',
  10: '=IF(ISNUMBER(C10),IF(AND(C10>=0,C10<=10000000000,ROUND(C10,4)=C10),"PASS","STOP"),"STOP")',
  11: '=IF(ISNUMBER(C11),IF(AND(C11>=0,C11<=10000000000,ROUND(C11,4)=C11),"PASS","STOP"),"STOP")',
  12: '=IF(ISNUMBER(C12),IF(AND(C12>=0,C12<=10000000000,ROUND(C12,4)=C12),"PASS","STOP"),"STOP")',
  13: '=IF(ISNUMBER(C13),IF(AND(C13>=0,C13<=10000000000,ROUND(C13,4)=C13),"PASS","STOP"),"STOP")',
};
for (let row = 6; row <= 13; row += 1) {
  govern(
    "COUT_INCIDENT",
    `G${row}`,
    row <= 9
      ? "=0"
      : row === 11
        ? "=ROUND(C6*C11,2)"
        : `=ROUND(C${row},2)`,
  );
  govern("COUT_INCIDENT", `H${row}`, costStatusFormulas[row]);
}
govern("COUT_INCIDENT", "C15", "=ROUND(C6*C7*C8*C9/100,2)");
govern(
  "COUT_INCIDENT",
  "D15",
  '=IF(AND(ISNUMBER(C15),ISNUMBER(G10),ISNUMBER(G11),ISNUMBER(G12)),ROUND(C15+(G10+G11+G12),2),"STOP")',
);
govern("COUT_INCIDENT", "E15", "=G13");
govern(
  "COUT_INCIDENT",
  "F15",
  '=IF(AND(ISNUMBER(D15),ISNUMBER(E15)),IF(D15>=E15,ROUND(D15-E15,2),"STOP"),"STOP")',
);

const validCoverageId = (row) =>
  `IF(ISTEXT('COUVERTURES'!B${row}),AND(LEN('COUVERTURES'!B${row})>=1,LEN('COUVERTURES'!B${row})<=64,TRIM(CLEAN('COUVERTURES'!B${row}))='COUVERTURES'!B${row},LEN('COUVERTURES'!B${row})=LEN(SUBSTITUTE('COUVERTURES'!B${row}," ","")),COUNTIF('COUVERTURES'!$B$6:$B$8,'COUVERTURES'!B${row})=1),FALSE)`;

for (let row = 6; row <= 8; row += 1) {
  govern(
    "RPO_OPERATIONS",
    `G${row}`,
    `=IF(AND(ISNUMBER(C${row}),ISNUMBER(D${row})),IF(AND(C${row}>=0,D${row}>=0,C${row}<=100000000,D${row}<=1000000,ROUND(C${row},4)=C${row},ROUND(D${row},4)=D${row}),C${row}*D${row},"STOP"),"STOP")`,
  );
  govern(
    "RPO_OPERATIONS",
    `H${row}`,
    `=IF(AND(ISNUMBER(G${row}),ISNUMBER(E${row}),ISNUMBER(F${row})),IF(AND(E${row}>=0,F${row}>=0,E${row}<=1440,F${row}<=10000000000,ROUND(E${row},4)=E${row},ROUND(F${row},4)=F${row}),ROUND(G${row}*E${row}/60*F${row},2),"STOP"),"STOP")`,
  );
}

for (let row = 6; row <= 8; row += 1) {
  govern(
    "COMPARAISON_12_MOIS",
    `C${row}`,
    `=ROUND('COUVERTURES'!D${row}+'COUVERTURES'!E${row}*12+'COUVERTURES'!H${row},2)`,
  );
  govern(
    "COMPARAISON_12_MOIS",
    `D${row}`,
    `=ROUND('COUVERTURES'!F${row}*'COUVERTURES'!G${row}*12,2)`,
  );
  govern(
    "COMPARAISON_12_MOIS",
    `E${row}`,
    `=ROUND('COUVERTURES'!I${row}*'COUVERTURES'!J${row},2)`,
  );
  govern(
    "COMPARAISON_12_MOIS",
    `F${row}`,
    `=ROUND(SUM(C${row}:E${row}),2)`,
  );
  govern(
    "COMPARAISON_12_MOIS",
    `G${row}`,
    `=RANK(F${row},$F$6:$F$8,1)`,
  );
  govern(
    "COMPARAISON_12_MOIS",
    `H${row}`,
    `=IF(COUNT('COUVERTURES'!D${row}:J${row})=7,IF(AND(MIN('COUVERTURES'!D${row}:J${row})>=0,MAX('COUVERTURES'!D${row}:J${row})<=10000000000,ROUND('COUVERTURES'!D${row},4)='COUVERTURES'!D${row},ROUND('COUVERTURES'!E${row},4)='COUVERTURES'!E${row},ROUND('COUVERTURES'!F${row},4)='COUVERTURES'!F${row},ROUND('COUVERTURES'!G${row},4)='COUVERTURES'!G${row},ROUND('COUVERTURES'!H${row},4)='COUVERTURES'!H${row},ROUND('COUVERTURES'!I${row},4)='COUVERTURES'!I${row},ROUND('COUVERTURES'!J${row},4)='COUVERTURES'!J${row},${validCoverageId(row)},LEN(TRIM('COUVERTURES'!C${row}))>=2,LEN(TRIM('COUVERTURES'!K${row}))>=5,ISNUMBER('COUVERTURES'!L${row})),IF(AND(INT('COUVERTURES'!L${row})='COUVERTURES'!L${row},'COUVERTURES'!L${row}>0,'COUVERTURES'!L${row}<='LIRE_D_ABORD'!$C$11),"PASS","INCOMPLET"),"INCOMPLET"),"INCOMPLET")`,
  );
}

const verifiedProofFormula = `=${Array.from({ length: 8 }, (_, index) => {
  const row = index + 6;
  return `IF(AND('EXERCICES_PREUVES'!$G$${row}="VERIFIE",LEN(TRIM('EXERCICES_PREUVES'!$H$${row}))>=6,LEN(TRIM('EXERCICES_PREUVES'!$J$${row}))>=3,ISNUMBER('EXERCICES_PREUVES'!$I$${row})),IF(AND(INT('EXERCICES_PREUVES'!$I$${row})='EXERCICES_PREUVES'!$I$${row},'EXERCICES_PREUVES'!$I$${row}>0,'EXERCICES_PREUVES'!$I$${row}<='LIRE_D_ABORD'!$C$11),1,0),0)`;
}).join("+")}`;
const decisionGateFormula = `=IF(OR(C6<>"NON",C7<>"OUI",C13>0,C9="STOP",C10="STOP",C11="STOP",C12="STOP"),"STOP",IF(OR(C8<>"OUI",C9<>"PASS",C10<>"PASS",C11<>"PASS",C12<>"PASS",C15<3,COUNT('LIRE_D_ABORD'!$C$11)<>1),"INCOMPLET",IF(OR(INT('LIRE_D_ABORD'!$C$11)<>'LIRE_D_ABORD'!$C$11,'LIRE_D_ABORD'!$C$11<=0,'LIRE_D_ABORD'!$C$11>${AS_OF_SERIAL}),"INCOMPLET",IF(C14<8,"COMPARABLE","DECISION_HUMAINE"))))`;
const decisionFormulas = [
  "='LIRE_D_ABORD'!$C$10",
  "='LIRE_D_ABORD'!$C$9",
  "='LIRE_D_ABORD'!$C$8",
  '=IF(COUNTIF(\'DISPONIBILITE\'!$H$6:$H$10,"PASS")=5,"PASS","STOP")',
  '=IF(COUNTIF(\'CHRONOLOGIE\'!$H$6:$H$12,"PASS")=7,"PASS","STOP")',
  '=IF(AND(COUNTIF(\'COUT_INCIDENT\'!$H$6:$H$13,"PASS")=8,ISNUMBER(\'COUT_INCIDENT\'!$F$15)),IF(\'COUT_INCIDENT\'!$F$15>=0,"PASS","STOP"),"STOP")',
  '=IF(COUNT(\'RPO_OPERATIONS\'!$G$6:$H$8)=6,IF(MIN(\'RPO_OPERATIONS\'!$G$6:$H$8)>=0,"PASS","STOP"),"STOP")',
  '=COUNTIF(\'EXERCICES_PREUVES\'!$G$6:$G$13,"ECHEC")',
  verifiedProofFormula,
  '=COUNTIF(\'COMPARAISON_12_MOIS\'!$H$6:$H$8,"PASS")',
  decisionGateFormula,
  '=IF(C16="DECISION_HUMAINE","AUTORISE","BLOQUE")',
];
decisionFormulas.forEach((expectedFormula, index) => {
  govern("DECISION", `C${index + 6}`, expectedFormula);
});
assert.equal(
  governedFormulaSpecs.length,
  90,
  "Les 90 formules du classeur doivent être gouvernées exactement.",
);

const assertGovernedFormulas = (book) => {
  for (const [sheetName, address, expectedFormula] of governedFormulaSpecs) {
    const actualFormula = book.worksheets
      .getItem(sheetName)
      .getRange(address).formulas[0][0];
    assert.equal(
      actualFormula,
      expectedFormula,
      `Formule gouvernée altérée : ${sheetName}!${address}`,
    );
  }
};
assertGovernedFormulas(workbook);
assertGovernedFormulas(publicWorkbook);

const sabotageScenarios = [];
for (const [sheetName, address, expectedFormula] of governedFormulaSpecs) {
  const formulaCell = workbook.worksheets.getItem(sheetName).getRange(address);
  formulaCell.formulas = [["=1"]];
  assert.throws(
    () => assertGovernedFormulas(workbook),
    `${sheetName}!${address} sabotée doit faire échouer le validateur.`,
  );
  formulaCell.formulas = [[expectedFormula]];
  assertGovernedFormulas(workbook);
  sabotageScenarios.push({
    id: `SAB-${String(sabotageScenarios.length + 1).padStart(2, "0")}`,
    target: `${sheetName}!${address}`,
    injected: "=1",
    expected: expectedFormula,
    detected: true,
  });
}

for (const sheetName of expectedSheetNames) {
  const sheet = workbook.worksheets.getItem(sheetName);
  const used = sheet.getUsedRange();
  const values = used.values;
  const formulas = used.formulas;
  let onSheet = 0;
  for (let row = 0; row < values.length; row += 1) {
    for (let column = 0; column < values[row].length; column += 1) {
      const value = values[row][column];
      const formulaValue = formulas?.[row]?.[column];
      if (typeof formulaValue === "string" && formulaValue.startsWith("=")) {
        formulaCellCount += 1;
        onSheet += 1;
        assert.ok(
          !/\[[^\]]+\.xlsx\]/i.test(formulaValue),
          `${sheetName} contient un lien vers un classeur externe.`,
        );
      }
      if (
        typeof value === "string" &&
        formulaErrors.some((error) => value.includes(error))
      ) {
        formulaErrorHits.push({ sheetName, row, column, value });
      }
      for (const candidate of [value, formulaValue]) {
        if (
          typeof candidate === "string" &&
          secretPatterns.some((pattern) => pattern.test(candidate))
        ) {
          secretHits.push({ sheetName, row, column });
        }
      }
    }
  }
  sheetMetrics.push({
    name: sheetName,
    rows: values.length,
    columns: Math.max(0, ...values.map((row) => row.length)),
    formulas: onSheet,
    tables: sheet.tables.items.length,
  });
}
assert.ok(formulaCellCount >= 60, "Le classeur doit conserver au moins 60 formules.");
assert.deepEqual(formulaErrorHits, []);
assert.deepEqual(secretHits, []);

const zipEntries = await unzipList(outputPath);
assert.ok(!zipEntries.some((entry) => /vbaProject\.bin$/i.test(entry)));
assert.ok(!zipEntries.some((entry) => entry.startsWith("xl/externalLinks/")));
const sheetXml = await Promise.all(
  expectedSheetNames.map((_, index) =>
    unzipText(outputPath, `xl/worksheets/sheet${index + 1}.xml`),
  ),
);
const frozenSheetCount = sheetXml.filter(
  (xml) => /<(?:\w+:)?pane\b/.test(xml) && xml.includes('state="frozen"'),
).length;
const filteredSheetCount = sheetXml.filter(
  (xml) =>
    /<(?:\w+:)?tableParts\b/.test(xml) ||
    /<(?:\w+:)?autoFilter\b/.test(xml),
).length;
const validatedSheetCount = sheetXml.filter((xml) =>
  /<(?:\w+:)?dataValidations\b/.test(xml),
).length;
assert.equal(frozenSheetCount, 17);
assert.equal(filteredSheetCount, 17);
assert.ok(validatedSheetCount >= 12);

const compactInspect = await workbook.inspect({
  kind: "workbook,sheet,table,formula",
  maxChars: 48_000,
  tableMaxRows: 8,
  tableMaxCols: 10,
  options: { maxResults: 250 },
});
await fs.writeFile(
  path.join(outputDir, "workbook-inspect.ndjson"),
  `${compactInspect.ndjson}\n`,
  "utf8",
);

const previewRecords = [];
for (let index = 0; index < expectedSheetNames.length; index += 1) {
  const sheetName = expectedSheetNames[index];
  const blob = await workbook.render({
    sheetName,
    autoCrop: "all",
    scale: 1,
    format: "png",
  });
  const bytes = new Uint8Array(await blob.arrayBuffer());
  assert.ok(bytes.length > 2_000, `${sheetName} doit produire un rendu visible.`);
  const filename = `${String(index + 1).padStart(2, "0")}-${sheetName}.png`;
  await fs.writeFile(path.join(previewDir, filename), bytes);
  previewRecords.push({
    sheet: sheetName,
    filename,
    bytes: bytes.length,
    sha256: sha256(bytes),
  });
}

const validation = {
  status: "PASS_LOCAL",
  generatedAt: new Date().toISOString(),
  workbook: path.relative(workspace, outputPath),
  publicWorkbook: path.relative(workspace, publicPath),
  sha256: outputHash,
  bytes: outputBytes.length,
  sheets: sheetMetrics,
  sources: sources.length,
  proofs: proofs.length,
  formulas: formulaCellCount,
  fixtures: {
    availabilityMinutes: expectedMinutes,
    chronologyMinutes: [0, 8, 55, 150, 310, 410, 530],
    incident: { internal: 1764, gross: 3564, credit: 200, net: 3364 },
    rpo: { operations: 60, reentryHours: 4, cost: 140 },
    annualCoverage: [31656, 33828, 53364],
  },
  scenarios: {
    mutations: mutationScenarios.length,
    adversarial: adversarialScenarios.length,
    sabotage: sabotageScenarios.length,
    total:
      mutationScenarios.length +
      adversarialScenarios.length +
      sabotageScenarios.length,
    details: [
      ...mutationScenarios,
      ...adversarialScenarios,
      ...sabotageScenarios,
    ],
  },
  archive: {
    frozenSheets: frozenSheetCount,
    filteredSheets: filteredSheetCount,
    dataValidationSheets: validatedSheetCount,
    macros: 0,
    externalLinks: 0,
  },
  secretScan: { detectors: secretPatterns.length, candidates: secretHits.length },
  formulaErrors: formulaErrorHits,
  previews: previewRecords,
  recalculation: "Aucune recalculation Microsoft Excel réelle.",
  finalGate:
    "BLOQUE_EXEMPLE_FICTIF — les données et preuves doivent être remplacées et validées humainement.",
};
await fs.writeFile(
  path.join(outputDir, "validation.json"),
  `${JSON.stringify(validation, null, 2)}\n`,
  "utf8",
);
await fs.writeFile(
  path.join(outputDir, "validation.md"),
  [
    "# Validation locale — kit SLA et maintenance applicative",
    "",
    `- Statut : ${validation.status}`,
    `- SHA-256 : \`${outputHash}\``,
    `- Taille : ${outputBytes.length.toLocaleString("fr-FR")} octets`,
    `- Onglets : ${expectedSheetNames.length}/17`,
    `- Sources : ${sources.length}/15`,
    `- Preuves : ${proofs.length}/8`,
    `- Formules : ${formulaCellCount}`,
    `- Scénarios : ${validation.scenarios.total} (${validation.scenarios.mutations} mutations, ${validation.scenarios.adversarial} adversarial, ${validation.scenarios.sabotage} sabotages)`,
    `- Rendus : ${previewRecords.length}/17 PNG`,
    `- Volets figés : ${frozenSheetCount}/17`,
    `- Filtres : ${filteredSheetCount}/17`,
    `- Feuilles avec validation : ${validatedSheetCount}`,
    `- Erreurs de formule : ${formulaErrorHits.length}`,
    `- Candidats secrets : ${secretHits.length}`,
    `- Gate final : ${validation.finalGate}`,
    `- Recalcul : ${validation.recalculation}`,
    "",
  ].join("\n"),
  "utf8",
);

console.log(JSON.stringify(validation, null, 2));
