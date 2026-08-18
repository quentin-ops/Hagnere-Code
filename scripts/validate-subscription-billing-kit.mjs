import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { strFromU8, unzipSync } from "fflate";

const require = createRequire(import.meta.url);
const artifactTool = await import(
  pathToFileURL(require.resolve("@oai/artifact-tool")).href
);
const { FileBlob, SpreadsheetFile } = artifactTool;

const workspace = process.cwd();
const canonicalAcceptanceTests = JSON.parse(
  await fs.readFile(
    path.join(
      workspace,
      "src",
      "lib",
      "subscription-billing-acceptance-tests.json",
    ),
    "utf8",
  ),
);
const canonicalWorkbookSources = JSON.parse(
  await fs.readFile(
    path.join(
      workspace,
      "src",
      "lib",
      "subscription-billing-workbook-sources.json",
    ),
    "utf8",
  ),
);
const outputPath = path.join(
  workspace,
  "output",
  "facturation-abonnements-saas-2026-07-28",
  "kit-pilotage-facturation-saas.xlsx",
);
const publicPath = path.join(
  workspace,
  "public",
  "ressources",
  "kit-pilotage-facturation-saas.xlsx",
);

const sha256 = (buffer) => createHash("sha256").update(buffer).digest("hex");
const isBlank = (value) => value === null || value === "";
const approx = (actual, expected, tolerance = 1e-8, message = "") => {
  assert.ok(
    Math.abs(actual - expected) <= tolerance,
    `${message} — attendu ${expected}, obtenu ${actual}`,
  );
};

function assertTestsFreezePane(xlsxBytes, context) {
  const archive = unzipSync(new Uint8Array(xlsxBytes));
  const worksheet = archive["xl/worksheets/sheet7.xml"];
  assert.ok(worksheet, `${context} — la feuille TESTS doit rester sheet7.xml.`);
  const xml = strFromU8(worksheet);
  assert.ok(
    xml.includes(
      '<x:pane xSplit="3" ySplit="5" topLeftCell="D6" activePane="bottomRight" state="frozen" />',
    ),
    `${context} — les lignes 1:5 et colonnes A:C doivent être réellement figées.`,
  );
  for (const selection of [
    '<x:selection pane="topRight" activeCell="D1" sqref="D1" />',
    '<x:selection pane="bottomLeft" activeCell="A6" sqref="A6" />',
    '<x:selection pane="bottomRight" activeCell="D6" sqref="D6" />',
  ]) {
    assert.ok(
      xml.includes(selection),
      `${context} — sélection de volet absente : ${selection}`,
    );
  }
}

const outputBytes = await fs.readFile(outputPath);
const publicBytes = await fs.readFile(publicPath);
const finalHash = sha256(outputBytes);
assert.equal(
  finalHash,
  sha256(publicBytes),
  "La copie publique doit être strictement identique à l’artefact contrôlé.",
);
assertTestsFreezePane(outputBytes, "Artefact contrôlé");
assertTestsFreezePane(publicBytes, "Copie publique");

const workbook = await SpreadsheetFile.importXlsx(
  await FileBlob.load(outputPath),
);
const publicWorkbook = await SpreadsheetFile.importXlsx(
  await FileBlob.load(publicPath),
);
const tco = workbook.worksheets.getItem("TCO_24_MOIS");
const mrr = workbook.worksheets.getItem("MRR");
const reconciliation = workbook.worksheets.getItem("RAPPROCHEMENT");
const controls = workbook.worksheets.getItem("CONTROLES");
const testsSheet = workbook.worksheets.getItem("TESTS");
const sourcesSheet = workbook.worksheets.getItem("SOURCES");
const publicControls = publicWorkbook.worksheets.getItem("CONTROLES");
const publicReconciliation = publicWorkbook.worksheets.getItem("RAPPROCHEMENT");
const publicSourcesSheet = publicWorkbook.worksheets.getItem("SOURCES");
const firstControlRow = 9;
const lastControlRow = 31;
const controlCount = lastControlRow - firstControlRow + 1;

const modelStatus = () => controls.getRange("B4").values[0][0];
const fixtureStatus = () => controls.getRange("B5").values[0][0];
const reconciliationStatus = () => controls.getRange("B6").values[0][0];
const controlStatuses = () =>
  controls.getRange(`F${firstControlRow}:F${lastControlRow}`).values.flat();
const controlLabels = () =>
  controls.getRange(`B${firstControlRow}:B${lastControlRow}`).values.flat();
const statusRows = () =>
  controlLabels().map((label, index) => ({
    label,
    status: controlStatuses()[index],
  }));

function assertAllControlsPass(context) {
  assert.equal(modelStatus(), "MODEL STATUS: PASS", context);
  assert.equal(
    reconciliationStatus(),
    "RAPPROCHEMENT STATUS: PASS",
    `${context} — les données observées doivent être complètes et rapprochées.`,
  );
  assert.ok(
    controlStatuses().every((status) => status === "PASS"),
    `${context} — les ${controlCount} contrôles doivent rester PASS.`,
  );
}

function assertOnlyObservedControl(expectedStatus, context) {
  const nonPass = statusRows().filter(({ status }) => status !== "PASS");
  assert.deepEqual(
    nonPass,
    [{ label: "Rapprochement — données observées", status: expectedStatus }],
    context,
  );
}

function assertModelFail(context) {
  assert.equal(modelStatus(), "MODEL STATUS: FAIL", context);
  assert.ok(
    controlStatuses().some((status) => status === "FAIL"),
    `${context} — au moins un contrôle indépendant doit être FAIL.`,
  );
}

const expectedSheetNames = [
  "LIRE_D_ABORD",
  "REGLES",
  "TCO_24_MOIS",
  "MRR",
  "RAPPROCHEMENT",
  "RELANCES",
  "TESTS",
  "EXEMPLE_PLANOR",
  "CONTROLES",
  "SOURCES",
];
assert.deepEqual(
  workbook.worksheets.items.map((sheet) => sheet.name),
  expectedSheetNames,
  "L’artefact contrôlé doit conserver exactement dix feuilles.",
);
assert.deepEqual(
  publicWorkbook.worksheets.items.map((sheet) => sheet.name),
  expectedSheetNames,
  "La copie publique doit être réimportable avec les mêmes dix feuilles.",
);
assert.equal(
  publicControls.getRange("B4").values[0][0],
  "MODEL STATUS: PASS",
  "La copie publique réimportée doit conserver le statut central.",
);
assert.equal(
  publicReconciliation.getRange("M20").values[0][0],
  "STATUT ANNUEL: PASS",
  "La copie publique réimportée doit conserver le rapprochement annuel.",
);
assert.deepEqual(
  testsSheet.getRange("B6:C29").values,
  canonicalAcceptanceTests.map((test) => [test.id, test.case]),
  "Le classeur doit reprendre exactement les identifiants et cas de la matrice canonique publiée dans l’article.",
);
const expectedSources = canonicalWorkbookSources;
assert.deepEqual(
  sourcesSheet.getRange("B6:H20").values,
  expectedSources,
  "Les quinze lignes de sources doivent rester exactes dans l’artefact contrôlé.",
);
assert.deepEqual(
  publicSourcesSheet.getRange("B6:H20").values,
  expectedSources,
  "Les quinze lignes de sources doivent rester exactes dans la copie publique réimportée.",
);

assert.deepEqual(
  tco.getRange("J7:J10").values.flat(),
  [12960, 12760, 34820, 98160],
  "Le scénario central 100 clients doit rester stable.",
);
assert.deepEqual(
  tco.getRange("H7:H10").values.flat(),
  [0, 3600, 16800, 36000],
  "Le récurrent doit être affiché sur les 24 mois.",
);
const centralThresholds = tco.getRange("E22:E26").values.flat();
[
  182.05128205128202, 96.37681159420286, 49.57983193277309, 246.2962962962961,
  73.88888888888887,
].forEach((expected, index) =>
  approx(
    centralThresholds[index],
    expected,
    1e-9,
    `Seuil central ligne ${22 + index}`,
  ),
);
assert.deepEqual(
  tco.getRange("F22:F26").values.flat(),
  [
    "183 clients ; dessous : manuel ; dessus : hébergé",
    "97 clients ; dessous : manuel ; dessus : hébergé",
    "50 clients ; dessous : manuel ; dessus : hébergé",
    "247 clients ; dessous : manuel ; dessus : hébergé",
    "74 clients ; dessous : manuel ; dessus : hébergé",
  ],
  "La lecture centrale doit afficher le premier entier strictement au-delà du seuil et les gagnants.",
);

assert.deepEqual(
  reconciliation.getRange("F6:F17").values.flat(),
  [2200, 2800, 3200, 3500, 3350, 3550, 3650, 3700, 3600, 3700, 3700, 3800],
  "Les paiements observés doivent être des entrées indépendantes.",
);
assert.ok(
  reconciliation
    .getRange("F6:F17")
    .formulas.flat()
    .every((formula) => isBlank(formula)),
  "F6:F17 ne doit contenir aucune formule.",
);
assert.deepEqual(
  reconciliation.getRange("I6:I17").values.flat(),
  Array(12).fill(0),
  "Les créances d’ouverture observées centrales doivent être explicites.",
);
assert.deepEqual(
  reconciliation.getRange("K6:K17").values.flat(),
  Array(12).fill(0),
  "Les créances finales observées centrales doivent être explicites.",
);
assert.deepEqual(
  reconciliation.getRange("N6:N17").values.flat(),
  Array(12).fill("PASS"),
  "Chaque mois central doit être rapproché.",
);
assert.equal(reconciliation.getRange("C20").values[0][0], 41000);
assert.equal(reconciliation.getRange("E20").values[0][0], 350);
assert.equal(reconciliation.getRange("G20").values[0][0], 40750);
assert.equal(reconciliation.getRange("I20").values[0][0], 100);
assert.equal(reconciliation.getRange("K20").values[0][0], 40650);
assert.equal(
  reconciliation.getRange("M20").values[0][0],
  "STATUT ANNUEL: PASS",
);
assert.equal(reconciliation.getRange("C21").values[0][0], 40650);
assert.equal(reconciliation.getRange("E21").values[0][0], 0);
assert.equal(reconciliation.getRange("G21").values[0][0], 0);
assert.equal(reconciliation.getRange("I21").values[0][0], 0);
assert.equal(reconciliation.getRange("K21").values[0][0], 0);
assert.deepEqual(
  reconciliation.getRange("E17:N17").values[0],
  [
    3700,
    3800,
    100,
    3700,
    0,
    0,
    0,
    0,
    "Remboursement documenté ; accès selon règle",
    "PASS",
  ],
  "Décembre doit distinguer net facturé, paiement, remboursement, cash, créances et droit.",
);
assert.equal(fixtureStatus(), "FIXTURE CENTRALE");
assert.equal(controlCount, 23);
assertAllControlsPass("La fixture centrale doit être valide.");

const mutationEvidence = {};

// Une mutation d’entrée utilisateur doit propager les quatre TCO sans invalider le modèle.
tco.getRange("C8").values = [[500]];
mutationEvidence.clients500 = tco.getRange("J7:J10").values.flat();
assert.deepEqual(
  mutationEvidence.clients500,
  [56160, 33880, 48740, 102480],
  "La mutation 100 → 500 clients doit recalculer les quatre TCO.",
);
assert.equal(fixtureStatus(), "FIXTURE MODIFIÉE");
assertAllControlsPass(
  "La mutation légitime 100 → 500 clients ne doit pas casser le modèle.",
);
tco.getRange("C8").values = [[100]];
assert.equal(fixtureStatus(), "FIXTURE CENTRALE");
assertAllControlsPass("Le retour à la fixture centrale doit rester valide.");

tco.getRange("C10").values = [[50]];
mutationEvidence.hourly50 = tco.getRange("J7:J10").values.flat();
assert.deepEqual(
  mutationEvidence.hourly50,
  [14400, 13280, 35080, 98400],
  "La mutation 45 → 50 €/h doit recalculer les quatre TCO.",
);
assert.equal(fixtureStatus(), "FIXTURE MODIFIÉE");
assertAllControlsPass(
  "La mutation légitime 45 → 50 €/h ne doit pas casser le modèle.",
);
tco.getRange("C10").values = [[45]];
assert.equal(fixtureStatus(), "FIXTURE CENTRALE");
assertAllControlsPass("Le coût horaire central restauré doit rester valide.");

// Sensibilités du seuil : pente inversée, entier exact, parallèles, égalité et quotient non positif.
const originalSensitivity = tco.getRange("B22:D22").values;
tco.getRange("B22:D22").values = [[300, 3000, 0.007]];
approx(
  tco.getRange("E22").values[0][0],
  33.333333333333336,
  1e-8,
  "La pente inversée doit produire un quotient positif.",
);
assert.equal(
  tco.getRange("F22").values[0][0],
  "34 clients ; dessous : hébergé ; dessus : manuel",
);
mutationEvidence.invertedSlope = {
  threshold: tco.getRange("E22").values[0][0],
  reading: tco.getRange("F22").values[0][0],
};
assertAllControlsPass("La pente inversée doit rester un modèle valide.");

tco.getRange("B22:D22").values = [[100, 1000, 0.005]];
approx(
  tco.getRange("E22").values[0][0],
  100,
  1e-8,
  "Le seuil exact doit être égal à 100.",
);
assert.equal(
  tco.getRange("F22").values[0][0],
  "101 clients ; dessous : manuel ; dessus : hébergé",
);
mutationEvidence.exactInteger = {
  threshold: tco.getRange("E22").values[0][0],
  reading: tco.getRange("F22").values[0][0],
};
assertAllControlsPass("Le seuil entier exact doit utiliser INT(seuil)+1.");

tco.getRange("B22:D22").values = [[45, 100, 0.03]];
assert.ok(
  isBlank(tco.getRange("E22").values[0][0]),
  "Deux pentes égales ne doivent pas produire de quotient.",
);
assert.equal(
  tco.getRange("F22").values[0][0],
  "Lignes parallèles ; manuel dominant",
);
mutationEvidence.parallelDistinct = tco.getRange("F22").values[0][0];
assertAllControlsPass(
  "Les lignes parallèles distinctes doivent être explicites.",
);

const hostedParallelFee = (300 * (0.1 - 1 / 30)) / 100;
tco.getRange("B22:D22").values = [[300, 100, hostedParallelFee]];
assert.ok(
  isBlank(tco.getRange("E22").values[0][0]),
  "Des lignes parallèles ne doivent pas produire de quotient.",
);
assert.equal(
  tco.getRange("F22").values[0][0],
  "Lignes parallèles ; hébergé dominant",
);
mutationEvidence.parallelHostedDominant = tco.getRange("F22").values[0][0];
assertAllControlsPass(
  "Le gagnant hébergé de deux lignes parallèles doit être explicite.",
);

const equalityHourly = 6400 / 24;
const equalityFee = (equalityHourly * (0.1 - 1 / 30)) / 100;
tco.getRange("B22:D22").values = [[equalityHourly, 100, equalityFee]];
assert.ok(
  isBlank(tco.getRange("E22").values[0][0]),
  "L’égalité à tous les volumes ne doit pas produire de quotient.",
);
assert.equal(tco.getRange("F22").values[0][0], "Égalité à tous les volumes");
mutationEvidence.allVolumesEqual = tco.getRange("F22").values[0][0];
assertAllControlsPass("L’égalité à tous les volumes doit être explicite.");

tco.getRange("B22:D22").values = [[45, 100, 0.2]];
assert.ok(
  isBlank(tco.getRange("E22").values[0][0]),
  "Un quotient non positif doit rester vide.",
);
assert.equal(
  tco.getRange("F22").values[0][0],
  "Aucun seuil positif ; manuel dominant",
);
mutationEvidence.noPositiveThreshold = tco.getRange("F22").values[0][0];
assertAllControlsPass("La sortie sans seuil positif doit rester valide.");

tco.getRange("B22:D22").values = [[300, 100, 0]];
assert.ok(
  isBlank(tco.getRange("E22").values[0][0]),
  "Une domination hébergée sans croisement positif doit rester sans quotient.",
);
assert.equal(
  tco.getRange("F22").values[0][0],
  "Aucun seuil positif ; hébergé dominant",
);
mutationEvidence.noPositiveHostedDominant = tco.getRange("F22").values[0][0];
assertAllControlsPass(
  "La domination hébergée sans seuil positif doit être nommée.",
);
tco.getRange("B22:D22").values = originalSensitivity;
assertAllControlsPass("La sensibilité centrale restaurée doit rester valide.");

// Mutation des données observées : exactement un contrôle indépendant doit tomber.
const originalPayment = reconciliation.getRange("F6").values[0][0];
reconciliation.getRange("F6").values = [[9599]];
assert.equal(reconciliation.getRange("J6").values[0][0], -7399);
assert.equal(reconciliation.getRange("L6").values[0][0], 7399);
assert.equal(reconciliation.getRange("N6").values[0][0], "STOP");
assert.equal(
  reconciliation.getRange("M20").values[0][0],
  "STATUT ANNUEL: STOP",
);
assert.equal(reconciliationStatus(), "RAPPROCHEMENT STATUS: STOP");
assert.equal(modelStatus(), "MODEL STATUS: FAIL");
assertOnlyObservedControl(
  "FAIL",
  "La mutation paiement 9 599 € doit isoler le contrôle des données observées.",
);
mutationEvidence.payment9599 = {
  expectedReceivable: reconciliation.getRange("J6").values[0][0],
  observedDelta: reconciliation.getRange("L6").values[0][0],
  monthlyStatus: reconciliation.getRange("N6").values[0][0],
  modelStatus: modelStatus(),
};

reconciliation.getRange("F6").values = [[null]];
assert.ok(isBlank(reconciliation.getRange("H6").values[0][0]));
assert.ok(isBlank(reconciliation.getRange("J6").values[0][0]));
assert.ok(isBlank(reconciliation.getRange("L6").values[0][0]));
assert.equal(reconciliation.getRange("N6").values[0][0], "À REVOIR");
assert.equal(
  reconciliation.getRange("M20").values[0][0],
  "STATUT ANNUEL: À REVOIR",
);
assert.equal(reconciliationStatus(), "RAPPROCHEMENT STATUS: À REVOIR");
assert.equal(modelStatus(), "MODEL STATUS: REVIEW");
assertOnlyObservedControl(
  "REVIEW",
  "Un paiement vide doit isoler un REVIEW sans créer un faux zéro.",
);
mutationEvidence.paymentBlank = {
  expectedReceivable: reconciliation.getRange("J6").values[0][0],
  observedDelta: reconciliation.getRange("L6").values[0][0],
  monthlyStatus: reconciliation.getRange("N6").values[0][0],
  modelStatus: modelStatus(),
};

reconciliation.getRange("F6").values = [[originalPayment]];
assertAllControlsPass(
  "Le paiement central restauré doit rétablir tous les contrôles.",
);

// Porte de continuité : un delta mensuel nul ne doit pas masquer une rupture entre deux mois.
const originalOpening7 = reconciliation.getRange("I7").values[0][0];
const originalClosing7 = reconciliation.getRange("K7").values[0][0];
reconciliation.getRange("I7").values = [[1]];
reconciliation.getRange("K7").values = [[1]];
assert.equal(
  reconciliation.getRange("L7").values[0][0],
  0,
  "Le cas de continuité doit conserver un delta mensuel nul.",
);
assert.equal(
  reconciliation.getRange("N7").values[0][0],
  "STOP",
  "Une ouverture différente de la clôture précédente doit imposer STOP.",
);
assert.equal(
  reconciliation.getRange("N8").values[0][0],
  "STOP",
  "La clôture isolée doit également être visible à la frontière suivante.",
);
assert.equal(reconciliationStatus(), "RAPPROCHEMENT STATUS: STOP");
assert.equal(modelStatus(), "MODEL STATUS: FAIL");
assertOnlyObservedControl(
  "FAIL",
  "La rupture intermensuelle doit être détectée par les données observées, indépendamment du delta mensuel.",
);
mutationEvidence.continuityBreak = {
  monthlyDelta: reconciliation.getRange("L7").values[0][0],
  month7Status: reconciliation.getRange("N7").values[0][0],
  month8Status: reconciliation.getRange("N8").values[0][0],
  modelStatus: modelStatus(),
};
reconciliation.getRange("I7").values = [[originalOpening7]];
reconciliation.getRange("K7").values = [[originalClosing7]];
assertAllControlsPass(
  "La continuité restaurée doit rétablir tous les contrôles.",
);

// Sabotages de formules : TCO, MRR, créance attendue et statut mensuel.
const sabotageEvidence = {};
const originalJ7Formula = tco.getRange("J7").formulas;
tco.getRange("J7").formulas = [["=0"]];
assertModelFail("Un sabotage de TCO_24_MOIS!J7 doit être détecté.");
sabotageEvidence.tcoJ7 = modelStatus();
tco.getRange("J7").formulas = originalJ7Formula;
assertAllControlsPass("La formule TCO restaurée doit rétablir le statut.");

const originalH6Formula = mrr.getRange("H6").formulas;
mrr.getRange("H6").formulas = [["=C6+D6+E6-F6-G6+1"]];
assertModelFail("Un sabotage de MRR!H6 doit être détecté.");
sabotageEvidence.mrrH6 = modelStatus();
mrr.getRange("H6").formulas = originalH6Formula;
assertAllControlsPass("L’équation MRR restaurée doit rétablir le statut.");

const originalJ6Formula = reconciliation.getRange("J6").formulas;
reconciliation.getRange("J6").formulas = [["=I6+E6-F6+G6+1"]];
assertModelFail("Un sabotage de RAPPROCHEMENT!J6 doit être détecté.");
sabotageEvidence.expectedReceivableJ6 = modelStatus();
reconciliation.getRange("J6").formulas = originalJ6Formula;
assertAllControlsPass("La créance attendue restaurée doit rétablir le statut.");

const originalN6Formula = reconciliation.getRange("N6").formulas;
reconciliation.getRange("N6").formulas = [['="STOP"']];
assertModelFail("Un sabotage de RAPPROCHEMENT!N6 doit être détecté.");
sabotageEvidence.monthlyStatusN6 = modelStatus();
reconciliation.getRange("N6").formulas = originalN6Formula;
assertAllControlsPass("Le statut mensuel restauré doit rétablir le statut.");

const formulaErrors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!",
  options: { useRegex: true, maxResults: 300 },
  summary: "formula error scan after restored controlled mutations",
});
assert.match(formulaErrors.ndjson, /matched 0|0 entries/i);

console.log(
  JSON.stringify(
    {
      status: "PASS",
      sha256: finalHash,
      workbooksReimported: 2,
      sheetsPerWorkbook: expectedSheetNames.length,
      centralTco: [12960, 12760, 34820, 98160],
      recurring24Months: [0, 3600, 16800, 36000],
      centralThresholds,
      centralThresholdReadings: tco.getRange("F22:F26").values.flat(),
      acceptanceTests: canonicalAcceptanceTests.length,
      sourceRows: expectedSources.length,
      testsFreezePane: {
        rows: "1:5",
        columns: "A:C",
        topLeftCell: "D6",
        rawOpenXmlCopiesChecked: 2,
      },
      reconciliation: {
        grossInvoices: 41000,
        creditNotes: 350,
        netInvoiced: 40650,
        observedPayments: 40750,
        refunds: 100,
        netCash: 40650,
        openingReceivable: 0,
        expectedClosingReceivable: 0,
        observedClosingReceivable: 0,
        delta: 0,
        annualStatus: "STATUT ANNUEL: PASS",
      },
      mutationEvidence,
      sabotageEvidence,
      controlCount,
      baselineFixtureStatus: "FIXTURE CENTRALE",
      baselineModelStatus: "MODEL STATUS: PASS",
      baselineReconciliationStatus: "RAPPROCHEMENT STATUS: PASS",
      formulaErrors: 0,
      recalculationEngine: "@oai/artifact-tool",
      realExcelRecalculation: false,
    },
    null,
    2,
  ),
);
