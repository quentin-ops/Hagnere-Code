import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const require = createRequire(path.join(process.cwd(), "artifact-loader.cjs"));
const artifactTool = await import(
  pathToFileURL(require.resolve("@oai/artifact-tool")).href
);
const { FileBlob, SpreadsheetFile } = artifactTool;

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const workspace = path.resolve(scriptDir, "..");
const outputPath = path.join(
  workspace,
  "output",
  "reprendre-saas-developpe-par-freelance-2026-07-28",
  "kit-reprise-saas-freelance.xlsx",
);
const publicPath = path.join(
  workspace,
  "public",
  "ressources",
  "kit-reprise-saas-freelance.xlsx",
);
const functions = JSON.parse(
  await fs.readFile(
    path.join(
      workspace,
      "src",
      "lib",
      "saas-freelance-handover-functions.json",
    ),
    "utf8",
  ),
);
const acceptanceTests = JSON.parse(
  await fs.readFile(
    path.join(
      workspace,
      "src",
      "lib",
      "saas-freelance-handover-acceptance-tests.json",
    ),
    "utf8",
  ),
);
const continuityTargets = JSON.parse(
  await fs.readFile(
    path.join(
      workspace,
      "src",
      "lib",
      "saas-freelance-handover-continuity-targets.json",
    ),
    "utf8",
  ),
);
const sources = JSON.parse(
  await fs.readFile(
    path.join(
      workspace,
      "src",
      "lib",
      "saas-freelance-handover-workbook-sources.json",
    ),
    "utf8",
  ),
);

const sha256 = (buffer) => createHash("sha256").update(buffer).digest("hex");
const approx = (actual, expected, tolerance = 1e-8, label = "") => {
  assert.equal(typeof actual, "number", `${label} doit rester numérique.`);
  assert.ok(
    Math.abs(actual - expected) <= tolerance,
    `${label} — attendu ${expected}, obtenu ${actual}`,
  );
};
const formulaErrors = new Set([
  "#REF!",
  "#DIV/0!",
  "#VALUE!",
  "#NAME?",
  "#N/A",
  "#NUM!",
  "#NULL!",
]);

const outputBytes = await fs.readFile(outputPath);
const publicBytes = await fs.readFile(publicPath);
assert.equal(
  sha256(outputBytes),
  sha256(publicBytes),
  "La copie publique doit être strictement identique à l’artefact contrôlé.",
);

const workbook = await SpreadsheetFile.importXlsx(
  await FileBlob.load(outputPath),
);
const publicWorkbook = await SpreadsheetFile.importXlsx(
  await FileBlob.load(publicPath),
);
const expectedSheetNames = [
  "LIRE_D_ABORD",
  "REGISTRE",
  "CRITICITE",
  "RTO_RPO",
  "TCO_36_MOIS",
  "DECISION",
  "PLAN_SORTIE",
  "TESTS",
  "CONTROLES",
  "SOURCES",
];
assert.deepEqual(
  workbook.worksheets.items.map((sheet) => sheet.name),
  expectedSheetNames,
  "L’artefact doit conserver exactement les dix feuilles attendues.",
);
assert.deepEqual(
  publicWorkbook.worksheets.items.map((sheet) => sheet.name),
  expectedSheetNames,
  "La copie publique doit être réimportable avec les dix mêmes feuilles.",
);

const register = workbook.worksheets.getItem("REGISTRE");
const criticality = workbook.worksheets.getItem("CRITICITE");
const rto = workbook.worksheets.getItem("RTO_RPO");
const tco = workbook.worksheets.getItem("TCO_36_MOIS");
const decision = workbook.worksheets.getItem("DECISION");
const tests = workbook.worksheets.getItem("TESTS");
const controls = workbook.worksheets.getItem("CONTROLES");
const sourceSheet = workbook.worksheets.getItem("SOURCES");
const publicControls = publicWorkbook.worksheets.getItem("CONTROLES");
const publicSources = publicWorkbook.worksheets.getItem("SOURCES");

assert.deepEqual(
  register.getRange("B6:I15").values,
  functions.map((entry) => [
    entry.id,
    entry.group,
    entry.service,
    entry.criticality,
    entry.businessImpact,
    entry.decisionOwner,
    entry.companyControl,
    entry.check,
  ]),
  "Le registre doit reprendre le dataset canonique des dix fonctions.",
);
assert.deepEqual(
  register.getRange("K6:M15").values,
  functions.map((entry) => [entry.blocker, entry.action, entry.removal]),
  "Blocages, actions et conditions de retrait doivent rester canoniques.",
);
assert.deepEqual(
  criticality.getRange("B6:G10").values,
  continuityTargets.map((target) => [
    target.journey,
    target.rtoHours,
    target.rpoHours === null ? "Sans objet" : target.rpoHours,
    target.impact,
    target.evidence,
    target.decisionOwner,
  ]),
  "Les cibles RTO/RPO, impacts et preuves doivent rester identiques à la page.",
);
assert.deepEqual(
  tests.getRange("B6:E23").values,
  acceptanceTests.map((test) => [
    test.id,
    test.family,
    test.case,
    test.expected,
  ]),
  "Les dix-huit scénarios doivent rester identiques au dataset canonique.",
);
assert.deepEqual(
  sourceSheet.getRange("B6:H23").values,
  sources,
  "Les dix-huit sources doivent rester identiques au registre canonique.",
);
assert.deepEqual(
  publicSources.getRange("B6:H23").values,
  sources,
  "Les sources de la copie publique doivent rester exactes après réimport.",
);

assert.deepEqual(
  tco.getRange("C13:E13").values.flat(),
  [141500, 186640, 274800],
  "Les trois TCO centraux doivent rester stables.",
);
assert.equal(tco.getRange("C16").values[0][0], 133300);
approx(tco.getRange("C19").values[0][0], 166.625, 1e-9, "Clients-mois");
approx(
  tco.getRange("C20").values[0][0],
  6.171296296296297,
  1e-9,
  "Clients simultanés",
);
assert.equal(tco.getRange("C21").values[0][0], 7);

const centralRto = [
  "C22",
  "C23",
  "C24",
  "C26",
  "C27",
  "C28",
  "C31",
  "C32",
  "C33",
  "C35",
  "C36",
  "C48",
  "C49",
  "C50",
].map((address) => rto.getRange(address).values[0][0]);
const expectedCentralRto = [
  900, 450, 4050, 150, 75, 675, 680, 141.25, 19.256637168141594, 1130, 5085,
  1280, 2720, 1440,
];
assert.equal(centralRto.length, expectedCentralRto.length);
expectedCentralRto.forEach((expected, index) =>
  approx(centralRto[index], expected, 1e-8, `RTO/RPO central ${index + 1}`),
);

const modelStatus = () => controls.getRange("B4").values[0][0];
const controlStatuses = () => controls.getRange("F8:F31").values.flat();
const assertAllControlsPass = (label) => {
  assert.equal(modelStatus(), "MODEL STATUS: PASS", label);
  assert.ok(
    controlStatuses().every((status) => status === "PASS"),
    `${label} — les vingt-quatre contrôles doivent rester PASS.`,
  );
};
const assertModelFails = (label) => {
  assert.equal(modelStatus(), "MODEL STATUS: FAIL", label);
  assert.ok(
    controlStatuses().some((status) => status === "FAIL"),
    `${label} — au moins un contrôle indépendant doit échouer.`,
  );
};
const assertDecisionStops = (label) => {
  decision.getRange("C6").values = [["PASSATION NORMALE"]];
  assert.equal(decision.getRange("C7").values[0][0], "PASS", label);
  assert.equal(
    decision.getRange("C8").values[0][0],
    "MODEL STATUS: FAIL",
    label,
  );
  assert.equal(decision.getRange("C9").values[0][0], "STOP", label);
  decision.getRange("C6").values = [["INCONNU"]];
};

assertAllControlsPass("Fixture centrale");
assert.equal(
  publicControls.getRange("B4").values[0][0],
  "MODEL STATUS: PASS",
  "La copie publique doit conserver le statut central.",
);
assert.ok(
  publicControls
    .getRange("F8:F31")
    .values.flat()
    .every((status) => status === "PASS"),
  "Les contrôles de la copie publique doivent rester PASS.",
);

assert.equal(decision.getRange("C6").values[0][0], "INCONNU");
assert.equal(decision.getRange("C7").values[0][0], "STOP");
assert.equal(decision.getRange("C9").values[0][0], "STOP");
decision.getRange("C6").values = [["PASSATION NORMALE"]];
assert.equal(decision.getRange("C7").values[0][0], "PASS");
assert.equal(decision.getRange("C9").values[0][0], "POURSUIVRE SOUS PREUVES");
decision.getRange("C6").values = [["INCIDENT / LITIGE"]];
assert.equal(decision.getRange("C7").values[0][0], "STOP");
assert.equal(decision.getRange("C9").values[0][0], "STOP");
decision.getRange("C6").values = [["INCONNU"]];
assert.deepEqual(
  rto.getRange("E7:E8").values.flat(),
  ["Oui", "Oui"],
  "Les deux scénarios fictifs centraux doivent déclarer une preuve datée qualifiée.",
);
assert.ok(
  String(rto.getRange("C22").formulas[0][0]).includes('E7="Oui"'),
  "Le RPO actuel doit dépendre de sa preuve de restauration datée.",
);
assert.ok(
  String(rto.getRange("C26").formulas[0][0]).includes('E8="Oui"'),
  "Le RPO amélioré doit dépendre de sa preuve de restauration datée.",
);

const mutationEvidence = {};

tco.getRange("C6").values = [[10000]];
mutationEvidence.tcoTakeover10000 = {
  stabilize: tco.getRange("C13").values[0][0],
  surcharge: tco.getRange("C16").values[0][0],
  roundedClients: tco.getRange("C21").values[0][0],
};
assert.deepEqual(mutationEvidence.tcoTakeover10000, {
  stabilize: 142500,
  surcharge: 132300,
  roundedClients: 7,
});
assertAllControlsPass("Mutation légitime du coût de prise en main");
tco.getRange("C6").values = [[9000]];
assertAllControlsPass("Retour au TCO central");

rto.getRange("C6").values = [[1200]];
mutationEvidence.events1200 = {
  dailyMax: rto.getRange("C22").values[0][0],
  fourHourMax: rto.getRange("C26").values[0][0],
};
assert.deepEqual(mutationEvidence.events1200, {
  dailyMax: 1200,
  fourHourMax: 200,
});
assertAllControlsPass("Mutation légitime du volume d’événements");
rto.getRange("C6").values = [[900]];

rto.getRange("C17").values = [[100]];
approx(
  rto.getRange("C33").values[0][0],
  4.814159292035398,
  1e-9,
  "Seuil à 100 %",
);
mutationEvidence.probability100 = rto.getRange("C33").values[0][0];
assertAllControlsPass("Mutation légitime de probabilité à 100 %");
rto.getRange("C17").values = [[10]];
approx(
  rto.getRange("C33").values[0][0],
  48.14159292035398,
  1e-9,
  "Seuil à 10 %",
);
mutationEvidence.probability10 = rto.getRange("C33").values[0][0];
assertAllControlsPass("Mutation légitime de probabilité à 10 %");
rto.getRange("C17").values = [[25]];

rto.getRange("C39").values = [[6]];
mutationEvidence.sixAccounts = {
  prepared: rto.getRange("C48").values[0][0],
  crisis: rto.getRange("C49").values[0][0],
  difference: rto.getRange("C50").values[0][0],
};
assert.deepEqual(mutationEvidence.sixAccounts, {
  prepared: 1770,
  crisis: 4080,
  difference: 2310,
});
assertAllControlsPass("Mutation légitime du nombre de comptes");
rto.getRange("C39").values = [[4]];

tco.getRange("C6").values = [[null]];
assert.equal(
  tco.getRange("C13").values[0][0],
  "STOP",
  "Une hypothèse TCO manquante doit rester STOP.",
);
assertModelFails("Hypothèse TCO manquante");
tco.getRange("C6").values = [[9000]];
assertAllControlsPass("Restauration de l’hypothèse TCO");

const adversarialEvidence = [];
const rejectInput = (sheet, address, value, label) => {
  const original = sheet.getRange(address).values[0][0];
  sheet.getRange(address).values = [[value]];
  assertModelFails(label);
  assertDecisionStops(label);
  adversarialEvidence.push(`${address}=${value} → STOP`);
  sheet.getRange(address).values = [[original]];
  assertAllControlsPass(`Restauration après ${label}`);
};

rejectInput(tco, "C6", -1, "Coût TCO négatif");
rejectInput(tco, "C6", 1_000_000_000_001, "Coût TCO supérieur à la borne");
rejectInput(rto, "C7", -4, "Intervalle entre points restaurés négatif");
rejectInput(rto, "C17", 101, "Probabilité supérieure à 100 %");
rejectInput(rto, "C12", 1.5, "Nombre de personnes non entier");
rejectInput(rto, "C39", -1, "Nombre de services négatif");
rejectInput(rto, "C39", 1.5, "Nombre de services non entier");
rejectInput(rto, "E7", "Non", "Preuve datée du point actuel négative");
rejectInput(rto, "E7", "Inconnu", "Preuve datée du point actuel inconnue");
rejectInput(rto, "E8", "Non", "Preuve datée du point amélioré négative");
rejectInput(rto, "E8", "Inconnu", "Preuve datée du point amélioré inconnue");

const sabotageEvidence = [];
const originalTcoFormula = tco.getRange("C13").formulas[0][0];
tco.getRange("C13").formulas = [["=1"]];
assertModelFails("Sabotage du total TCO");
sabotageEvidence.push("TCO total détecté");
tco.getRange("C13").formulas = [[originalTcoFormula]];
assertAllControlsPass("Restauration du total TCO");

const originalRoundedClientsFormula = tco.getRange("C21").formulas[0][0];
tco.getRange("C21").formulas = [["=1"]];
assertModelFails("Sabotage de l’arrondi des clients");
sabotageEvidence.push("Arrondi des clients détecté");
tco.getRange("C21").formulas = [[originalRoundedClientsFormula]];
assertAllControlsPass("Restauration de l’arrondi des clients");

const originalRpoFormula = rto.getRange("C22").formulas[0][0];
rto.getRange("C22").formulas = [["=1"]];
assertModelFails("Sabotage du RPO");
sabotageEvidence.push("RPO détecté");
rto.getRange("C22").formulas = [[originalRpoFormula]];
assertAllControlsPass("Restauration du RPO");

const originalCurrentReconstructionFormula = rto.getRange("C24").formulas[0][0];
rto.getRange("C24").formulas = [["=1"]];
assertModelFails("Sabotage du coût de reconstruction actuel");
sabotageEvidence.push("Coût de reconstruction actuel détecté");
rto.getRange("C24").formulas = [[originalCurrentReconstructionFormula]];
assertAllControlsPass("Restauration du coût de reconstruction actuel");

const originalImprovedReconstructionFormula =
  rto.getRange("C28").formulas[0][0];
rto.getRange("C28").formulas = [["=1"]];
assertModelFails("Sabotage du coût de reconstruction amélioré");
sabotageEvidence.push("Coût de reconstruction amélioré détecté");
rto.getRange("C28").formulas = [[originalImprovedReconstructionFormula]];
assertAllControlsPass("Restauration du coût de reconstruction amélioré");

const originalAccountFormula = rto.getRange("C48").formulas[0][0];
rto.getRange("C48").formulas = [["=1"]];
assertModelFails("Sabotage de la passation préparée");
sabotageEvidence.push("Coût de passation détecté");
rto.getRange("C48").formulas = [[originalAccountFormula]];
assertAllControlsPass("Restauration du coût de passation");

const originalAccountDifferenceFormula = rto.getRange("C50").formulas[0][0];
rto.getRange("C50").formulas = [["=1"]];
assertModelFails("Sabotage de l’écart des comptes");
sabotageEvidence.push("Écart des comptes détecté");
rto.getRange("C50").formulas = [[originalAccountDifferenceFormula]];
assertAllControlsPass("Restauration de l’écart des comptes");

const centralStatusFormula = controls.getRange("B4").formulas[0][0];
controls.getRange("B4").values = [["MODEL STATUS: PASS"]];
assert.ok(
  [null, ""].includes(controls.getRange("B4").formulas[0][0]),
  "Le sabotage du statut central doit supprimer la formule et être détectable.",
);
sabotageEvidence.push("Statut central figé détecté");
controls.getRange("B4").formulas = [[centralStatusFormula]];
assertAllControlsPass("Restauration de la formule de statut");

for (const candidateWorkbook of [workbook, publicWorkbook]) {
  for (const sheet of candidateWorkbook.worksheets.items) {
    const used = sheet.getUsedRange();
    if (!used) continue;
    for (const value of used.values.flat()) {
      assert.ok(
        !formulaErrors.has(String(value)),
        `${sheet.name} contient une erreur de formule : ${value}`,
      );
    }
  }
}

const evidencePath = `${outputPath}.validation.json`;
await fs.writeFile(
  evidencePath,
  `${JSON.stringify(
    {
      status: "PASS",
      hash: sha256(outputBytes),
      bytes: outputBytes.length,
      imports: 2,
      sheets: expectedSheetNames.length,
      functions: functions.length,
      acceptanceTests: acceptanceTests.length,
      sources: sources.length,
      controls: controlStatuses().length,
      mutations: mutationEvidence,
      adversarialInputs: adversarialEvidence,
      sabotages: sabotageEvidence,
      formulaErrors: 0,
      excelRecalculation: false,
    },
    null,
    2,
  )}\n`,
  "utf8",
);

console.log(
  JSON.stringify(
    {
      status: "PASS",
      hash: sha256(outputBytes),
      bytes: outputBytes.length,
      imports: 2,
      sheets: expectedSheetNames.length,
      functions: functions.length,
      acceptanceTests: acceptanceTests.length,
      sources: sources.length,
      controls: controlStatuses().length,
      mutations: Object.keys(mutationEvidence).length,
      adversarialInputs: adversarialEvidence.length,
      sabotages: sabotageEvidence.length,
      formulaErrors: 0,
      excelRecalculation: false,
      evidencePath,
    },
    null,
    2,
  ),
);
