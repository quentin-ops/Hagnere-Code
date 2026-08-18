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
const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const workspace = path.resolve(scriptDir, "..");
const outputDir = path.join(
  workspace,
  "output",
  "signes-besoin-logiciel-metier",
  "workbook",
);
const previewDir = path.join(outputDir, "previews");
const outputPath = path.join(
  outputDir,
  "kit-diagnostic-besoin-logiciel-metier.xlsx",
);
const publicPath = path.join(
  workspace,
  "public",
  "ressources",
  "kit-diagnostic-besoin-logiciel-metier.xlsx",
);
const sources = JSON.parse(
  await fs.readFile(
    path.join(workspace, "src", "lib", "business-software-need-sources.json"),
    "utf8",
  ),
);
const proofs = JSON.parse(
  await fs.readFile(
    path.join(workspace, "src", "lib", "business-software-need-proofs.json"),
    "utf8",
  ),
);
const expectedSheetNames = [
  "00_MODE_EMPLOI",
  "01_DOSSIER",
  "02_SITUATIONS",
  "03_BASELINE",
  "04_REGLES_EXCEPTIONS",
  "05_OPTIONS_TESTS",
  "06_TCO_12_36_60",
  "07_RISQUES_STOP",
  "08_PILOTE",
  "09_DECISION",
  "10_DICTIONNAIRE",
  "11_CONTROLES",
  "12_SOURCES",
];
const dateSerial = (date) =>
  Math.floor(
    (Date.parse(`${date}T00:00:00Z`) - Date.UTC(1899, 11, 30)) /
      (24 * 60 * 60 * 1_000),
  );
const MIN_DATE_SERIAL = dateSerial("2000-01-01");
const MAX_DATE_SERIAL = dateSerial("9999-12-31");
const OPTION_FIRST_ROW = 6;
const OPTION_LAST_ROW = 11;
const OPTION_ACTIONS = [
  "CORRIGER_STANDARDISER",
  "INTEGRER_AUTOMATISER",
  "ACHETER_CONFIGURER",
  "ETUDIER_SUR_MESURE",
];
const formulaOrEquals = (cell, values) =>
  `OR(${values.map((value) => `${cell}="${value}"`).join(",")})`;
const formulaFixtureFree = (...cells) =>
  `AND(${cells
    .flatMap((cell) => [
      `IFERROR(SEARCH("FICTI",${cell}),0)=0`,
      `IFERROR(SEARCH("EXEMPLE",${cell}),0)=0`,
      `IFERROR(SEARCH("FIXTURE",${cell}),0)=0`,
    ])
    .join(",")})`;
const formulaNonEmptyText = (cell, minimum = 3) =>
  `AND(LEN(TRIM(${cell}))>=${minimum},${formulaFixtureFree(cell)})`;
const GLOBAL_INVALID_CHECKS = "FALSE";
const optionStatusFormula = (row) => {
  const inactive = Array.from(
    { length: 12 },
    (_, index) =>
      `${String.fromCharCode("B".charCodeAt(0) + index)}${row}="NON_UTILISE"`,
  ).join(",");
  return `=IF(AND(${inactive}),"NON_UTILISE",IF(OR(F${row}="NON",G${row}="ECHEC",H${row}="ECHEC",I${row}="ECHEC",J${row}="ECHEC",K${row}="ECHEC",L${row}="ECHEC"),"STOP",IF(AND(${formulaNonEmptyText(`B${row}`)},${formulaNonEmptyText(`C${row}`)},${formulaOrEquals(`D${row}`, OPTION_ACTIONS)},E${row}="OUI",F${row}="OUI",G${row}="PASS",H${row}="PASS",I${row}="PASS",J${row}="PASS",K${row}="PASS",L${row}="VERIFIE",${formulaNonEmptyText(`M${row}`)},COUNTIF($B$${OPTION_FIRST_ROW}:$B$${OPTION_LAST_ROW},B${row})=1,COUNTIF($C$${OPTION_FIRST_ROW}:$C$${OPTION_LAST_ROW},C${row})=1,'06_TCO_12_36_60'!B${row}=B${row},'06_TCO_12_36_60'!C${row}=C${row}),"PASS","INCOMPLET")))`;
};
const tcoFormula = (row, months) =>
  `=IF(AND(B${row}="NON_UTILISE",C${row}="NON_UTILISE",COUNT(D${row}:F${row})=0,G${row}="NON_UTILISE",H${row}="NON_UTILISE"),"NON_UTILISE",IF(COUNT(D${row}:F${row})<>3,"ND",IF(AND(B${row}='05_OPTIONS_TESTS'!B${row},C${row}='05_OPTIONS_TESTS'!C${row},'05_OPTIONS_TESTS'!B${row}<>"NON_UTILISE",D${row}>=0,E${row}>=0,F${row}>=0,D${row}<=10000000000,E${row}<=10000000000,F${row}<=10000000000,ROUND(D${row},4)=D${row},ROUND(E${row},4)=E${row},ROUND(F${row},4)=F${row},G${row}="OUI",H${row}="OUI"),ROUND(D${row}+E${row}*${months}+F${row},2),"ND")))`;
const situationWorkFormula = (row) =>
  `=IF(COUNT(G${row}:J${row})=4,IF(AND(G${row}>=0,H${row}>=0,I${row}>=0,J${row}>=0,G${row}<=1000000,H${row}<=1000000,I${row}<=1000000,J${row}<=1000000,ROUND(G${row},4)=G${row},ROUND(H${row},4)=H${row},ROUND(I${row},4)=I${row},ROUND(J${row},4)=J${row}),ROUND(G${row}*12*(H${row}+I${row})/60,2),"ND"),"ND")`;
const situationWaitFormula = (row) =>
  `=IF(COUNT(G${row}:J${row})=4,IF(AND(G${row}>=0,H${row}>=0,I${row}>=0,J${row}>=0,G${row}<=1000000,H${row}<=1000000,I${row}<=1000000,J${row}<=1000000,ROUND(G${row},4)=G${row},ROUND(H${row},4)=H${row},ROUND(I${row},4)=I${row},ROUND(J${row},4)=J${row}),ROUND(G${row}*12*J${row}/60,2),"ND"),"ND")`;
const situationObservationFirstFormula = (row) =>
  `OR(L${row}="CHANGEANTE",AND(K${row}="FAIBLE",R${row}<1))`;
const situationStatusFormula = (row) =>
  `=IF(AND(COUNT(D${row})=1,COUNT(G${row}:J${row})=4),IF(OR(NOT(${formulaNonEmptyText(`B${row}`)}),NOT(${formulaNonEmptyText(`C${row}`, 10)}),D${row}<${MIN_DATE_SERIAL},INT(D${row})<>D${row},D${row}>'01_DOSSIER'!C9,NOT(${formulaNonEmptyText(`E${row}`, 6)}),F${row}<>"OUI",R${row}="ND",S${row}="ND",NOT(${formulaOrEquals(`K${row}`, ["FAIBLE", "SIGNIFICATIVE", "CRITIQUE"])}),NOT(${formulaOrEquals(`L${row}`, ["CHANGEANTE", "ASSEZ_STABLE", "STABLE"])}),NOT(${formulaOrEquals(`M${row}`, ["NON_TESTE", "FONCTIONNE_APRES_CORRECTION", "DEFAILLANT", "ECART_CONFIRME"])}),NOT(${formulaOrEquals(`N${row}`, ["OUI", "NON"])}),NOT(${formulaOrEquals(`O${row}`, ["NON_EXAMINE", "COUVRE", "COUVRE_PARTIELLEMENT", "ECHEC_CAS_CRITIQUE"])}),NOT(${formulaOrEquals(`P${row}`, ["OUI", "NON"])}),NOT(${formulaOrEquals(`Q${row}`, ["OUI", "NON"])}),AND(NOT(${situationObservationFirstFormula(row)}),OR(M${row}="NON_TESTE",O${row}="NON_EXAMINE")),COUNTIF($B$6:$B$8,B${row})<>1,COUNTIF($C$6:$C$8,C${row})<>1,COUNTIF($E$6:$E$8,E${row})<>1),"INCOMPLET",IF(${situationObservationFirstFormula(row)},"OBSERVER",IF(M${row}="FONCTIONNE_APRES_CORRECTION","CORRIGER_STANDARDISER",IF(N${row}="OUI","INTEGRER_AUTOMATISER",IF(OR(O${row}="COUVRE",O${row}="COUVRE_PARTIELLEMENT"),"ACHETER_CONFIGURER",IF(AND(O${row}="ECHEC_CAS_CRITIQUE",OR(L${row}="STABLE",L${row}="ASSEZ_STABLE"),OR(K${row}="SIGNIFICATIVE",K${row}="CRITIQUE"),P${row}="OUI",Q${row}="OUI"),"ETUDIER_SUR_MESURE","OBSERVER")))))),"INCOMPLET")`;

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

const outputBytes = await fs.readFile(outputPath);
const publicBytes = await fs.readFile(publicPath);
const outputHash = sha256(outputBytes);
assert.equal(
  outputHash,
  sha256(publicBytes),
  "L’artefact public doit être identique à la copie de validation.",
);

const workbook = await importWorkbook(outputPath);
const publicWorkbook = await importWorkbook(publicPath);
for (const book of [workbook, publicWorkbook]) {
  assert.deepEqual(
    book.worksheets.items.map((sheet) => sheet.name),
    expectedSheetNames,
    "Les treize onglets attendus doivent rester dans le bon ordre.",
  );
  for (const sheetName of expectedSheetNames) {
    assert.equal(
      book.worksheets.getItem(sheetName).tables.items.length,
      1,
      `${sheetName} doit exposer un tableau filtrable.`,
    );
  }
}

assert.equal(sources.length, 26);
assert.equal(new Set(sources.map((source) => source.id)).size, 26);
assert.equal(proofs.length, 8);
assert.equal(new Set(proofs.map((proof) => proof.id)).size, 8);
const sourceIds = new Set(sources.map((source) => source.id));
for (const proof of proofs) {
  for (const sourceId of proof.sourceIds) {
    assert.ok(sourceIds.has(sourceId), `Source orpheline : ${sourceId}`);
  }
}
const sourceSheet = workbook.worksheets.getItem("12_SOURCES");
assert.deepEqual(
  sourceSheet.getRange(`B6:I${5 + sources.length}`).values,
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
  "Le registre des sources doit rester identique au JSON canonique.",
);
const proofSheet = workbook.worksheets.getItem("09_DECISION");
assert.deepEqual(
  proofSheet.getRange("B6:H13").values,
  proofs.map((proof) => [
    proof.label,
    "DECLARE",
    null,
    null,
    proof.expected,
    proof.sourceIds.join(" | "),
    "À nommer",
  ]),
  "Les huit domaines de preuve doivent rester identiques au JSON canonique.",
);

const situations = workbook.worksheets.getItem("02_SITUATIONS");
assert.deepEqual(situations.getRange("R6:R8").values.flat(), [72, 91, 99]);
assert.deepEqual(situations.getRange("S6:S8").values.flat(), [324, 195, 432]);
assert.deepEqual(situations.getRange("T6:T8").values.flat(), [
  "INCOMPLET",
  "INCOMPLET",
  "INCOMPLET",
]);

const tco = workbook.worksheets.getItem("06_TCO_12_36_60");
assert.deepEqual(tco.getRange("I6:K7").values, [
  [9640, 17320, 25000],
  [27120, 45360, 63600],
]);
assert.deepEqual(tco.getRange("I8:K8").values[0], ["ND", "ND", "ND"]);
assert.deepEqual(tco.getRange("I9:K9").values[0], [115200, 165600, 216000]);
assert.deepEqual(tco.getRange("I10:K11").values, [
  ["NON_UTILISE", "NON_UTILISE", "NON_UTILISE"],
  ["NON_UTILISE", "NON_UTILISE", "NON_UTILISE"],
]);
const risks = workbook.worksheets.getItem("07_RISQUES_STOP");
const optionTests = workbook.worksheets.getItem("05_OPTIONS_TESTS");
assert.equal(risks.getRange("G11").values[0][0], "PASS");
assert.deepEqual(optionTests.getRange("N6:N11").values.flat(), [
  "INCOMPLET",
  "INCOMPLET",
  "STOP",
  "INCOMPLET",
  "NON_UTILISE",
  "NON_UTILISE",
]);
assert.equal(proofSheet.getRange("I15").values[0][0], "INCOMPLET");
assert.equal(proofSheet.getRange("I16").values[0][0], "BLOQUE");

const governedFormulaSpecs = [];
const govern = (sheetName, address, expectedFormula) =>
  governedFormulaSpecs.push([sheetName, address, expectedFormula]);
[
  `=IF(${formulaNonEmptyText("C6")},"PASS","INCOMPLET")`,
  `=IF(${formulaNonEmptyText("C7")},"PASS","INCOMPLET")`,
  `=IF(${formulaNonEmptyText("C8")},"PASS","INCOMPLET")`,
  `=IF(ISNUMBER(C9),IF(AND(INT(C9)=C9,C9>=${MIN_DATE_SERIAL},C9<=TODAY()),"PASS","INCOMPLET"),"INCOMPLET")`,
  `=IF(AND(${formulaNonEmptyText("C10")},C10<>C7,C10<>C8),"PASS","INCOMPLET")`,
  `=IF(ISNUMBER(C11),IF(AND(INT(C11)=C11,C11>=${MIN_DATE_SERIAL},C11<=C9,C11>=MAX(MAX('02_SITUATIONS'!D6:D8),MAX('09_DECISION'!E6:E13))),"PASS","INCOMPLET"),"INCOMPLET")`,
  '=IF(C12="OUI","PASS","INCOMPLET")',
  '=IF(C13="OUI","PASS","INCOMPLET")',
  `=IF(AND(ISNUMBER(C14),ISNUMBER(C11),ISNUMBER(C9)),IF(AND(INT(C14)=C14,C14<=${MAX_DATE_SERIAL},C14>C11,C14>C9,C14>TODAY()),"PASS","INCOMPLET"),"INCOMPLET")`,
].forEach((expectedFormula, index) =>
  govern("01_DOSSIER", `G${index + 6}`, expectedFormula),
);
for (let row = 6; row <= 8; row += 1) {
  govern("02_SITUATIONS", `R${row}`, situationWorkFormula(row));
  govern("02_SITUATIONS", `S${row}`, situationWaitFormula(row));
  govern("02_SITUATIONS", `T${row}`, situationStatusFormula(row));
}
for (let row = 6; row <= 8; row += 1) {
  govern(
    "03_BASELINE",
    `I${row}`,
    `=IF(COUNT(C${row}:G${row})=5,IF(AND(${formulaNonEmptyText(`B${row}`)},COUNTIF($B$6:$B$8,B${row})=1,C${row}>0,INT(C${row})=C${row},D${row}>=0,INT(D${row})=D${row},D${row}<=C${row},E${row}>=0,F${row}>=E${row},C${row}<=1000000,D${row}<=1000000,E${row}<=1000000,F${row}<=1000000,G${row}>=0,G${row}<=1,ROUND(G${row},4)=G${row},${formulaNonEmptyText(`H${row}`, 6)}),"PASS","INCOMPLET"),"INCOMPLET")`,
  );
}
for (let row = 6; row <= 11; row += 1) {
  govern(
    "04_REGLES_EXCEPTIONS",
    `I${row}`,
    `=IF(AND(${["B", "C", "D", "E", "F", "G", "H"]
      .map((column) => formulaNonEmptyText(`${column}${row}`))
      .join(",")},COUNTIF($B$6:$B$11,B${row})=1),"PASS","INCOMPLET")`,
  );
}
for (let row = OPTION_FIRST_ROW; row <= OPTION_LAST_ROW; row += 1) {
  govern("05_OPTIONS_TESTS", `N${row}`, optionStatusFormula(row));
  for (const [column, months] of [
    ["I", 12],
    ["J", 36],
    ["K", 60],
  ]) {
    govern("06_TCO_12_36_60", `${column}${row}`, tcoFormula(row, months));
  }
}
govern(
  "07_RISQUES_STOP",
  "G6",
  '=IF(C6="OUI","STOP",IF(C6="NON","PASS","INCOMPLET"))',
);
for (let row = 7; row <= 9; row += 1) {
  govern(
    "07_RISQUES_STOP",
    `G${row}`,
    `=IF(C${row}="NON","STOP",IF(C${row}="OUI","PASS","INCOMPLET"))`,
  );
}
govern(
  "07_RISQUES_STOP",
  "G11",
  '=IF(COUNTIF(G6:G9,"STOP")>0,"STOP",IF(COUNTIF(G6:G9,"INCOMPLET")>0,"INCOMPLET","PASS"))',
);
for (let row = 6; row <= 12; row += 1) {
  const followUpConstraint =
    row === 11 ? ",I11=I10+30" : row === 12 ? ",I12=I10+90" : "";
  govern(
    "08_PILOTE",
    `J${row}`,
    `=IF(ISNUMBER(I${row}),IF(AND(${["B", "C", "D", "E", "F", "G", "H"]
      .map((column) => formulaNonEmptyText(`${column}${row}`))
      .join(
        ",",
      )},INT(I${row})=I${row},I${row}<=${MAX_DATE_SERIAL},I${row}>'01_DOSSIER'!C9,I${row}<='01_DOSSIER'!C14,COUNTIF($I$6:$I$12,I${row})=1${row > 6 ? `,I${row}>I${row - 1}` : ""}${followUpConstraint}),"PASS","INCOMPLET"),"INCOMPLET")`,
  );
}
for (let row = 6; row <= 13; row += 1) {
  govern(
    "09_DECISION",
    `I${row}`,
    `=IF(C${row}="ECHEC","STOP",IF(C${row}<>"VERIFIE","INCOMPLET",IF(ISNUMBER(E${row}),IF(AND(${formulaNonEmptyText(`B${row}`)},COUNTIF($B$6:$B$13,B${row})=1,${formulaNonEmptyText(`D${row}`, 6)},COUNTIF($D$6:$D$13,D${row})=1,INT(E${row})=E${row},E${row}>=${MIN_DATE_SERIAL},E${row}<='01_DOSSIER'!C9,E${row}<='01_DOSSIER'!C11,${formulaNonEmptyText(`H${row}`)}),"PASS","INCOMPLET"),"INCOMPLET")))`,
  );
}
govern(
  "09_DECISION",
  "I15",
  `=IF('07_RISQUES_STOP'!G11="STOP","SECURISER_D_ABORD",IF(OR(${GLOBAL_INVALID_CHECKS}),"INVALIDE",IF(OR('07_RISQUES_STOP'!G11<>"PASS",COUNTIF('02_SITUATIONS'!T6:T8,"INCOMPLET")>0,COUNTIF('02_SITUATIONS'!M6:M8,"NON_TESTE")>0,COUNTIF('02_SITUATIONS'!O6:O8,"NON_EXAMINE")>0,COUNTIF('02_SITUATIONS'!T6:T8,"OBSERVER")+COUNTIF('02_SITUATIONS'!T6:T8,"CORRIGER_STANDARDISER")+COUNTIF('02_SITUATIONS'!T6:T8,"INTEGRER_AUTOMATISER")+COUNTIF('02_SITUATIONS'!T6:T8,"ACHETER_CONFIGURER")+COUNTIF('02_SITUATIONS'!T6:T8,"ETUDIER_SUR_MESURE")<>3,COUNTIF('03_BASELINE'!I6:I8,"PASS")<>3,COUNTIF('04_REGLES_EXCEPTIONS'!I6:I11,"PASS")<>6,COUNTIF('05_OPTIONS_TESTS'!N6:N11,"PASS")<2,COUNTIF('05_OPTIONS_TESTS'!N6:N11,"PASS")+COUNTIF('05_OPTIONS_TESTS'!N6:N11,"NON_UTILISE")<>6,${OPTION_ACTIONS.map((action) => `AND(COUNTIF('02_SITUATIONS'!T6:T8,"${action}")>0,COUNTIF('05_OPTIONS_TESTS'!D6:D11,"${action}")=0)`).join(",")},'00_MODE_EMPLOI'!C7<>"DONNEES_REELLES",'00_MODE_EMPLOI'!C8<>"OUI",'01_DOSSIER'!C12<>"OUI",AND('01_DOSSIER'!C13<>"OUI",'01_DOSSIER'!C13<>"NON"),COUNTIF(I6:I13,"PASS")<>8,COUNTIF('06_TCO_12_36_60'!I6:K11,"ND")>0,COUNT('06_TCO_12_36_60'!I6:K11)<>3*COUNTIF('05_OPTIONS_TESTS'!N6:N11,"PASS"),COUNTIF('06_TCO_12_36_60'!I6:K11,"NON_UTILISE")<>3*COUNTIF('05_OPTIONS_TESTS'!N6:N11,"NON_UTILISE"),COUNTIF('01_DOSSIER'!G6:G12,"PASS")<>7,'01_DOSSIER'!G14<>"PASS",COUNTIF('08_PILOTE'!J6:J12,"PASS")<>7,COUNTA('12_SOURCES'!B6:B${5 + sources.length})<>${sources.length}),"INCOMPLET",IF('01_DOSSIER'!C13="OUI","DECISION_HUMAINE",IF(COUNTIF('02_SITUATIONS'!T6:T8,"OBSERVER")=3,"OBSERVER",IF(COUNTIF('02_SITUATIONS'!T6:T8,"CORRIGER_STANDARDISER")=3,"CORRIGER_STANDARDISER","COMPARER_PILOTER"))))))`,
);
governedFormulaSpecs[governedFormulaSpecs.length - 1][2] = governedFormulaSpecs[
  governedFormulaSpecs.length - 1
][2].replace('"INVALIDE"', '"INCOMPLET"');
govern("09_DECISION", "I16", '=IF(I15="DECISION_HUMAINE","AUTORISE","BLOQUE")');
[
  '=IF(OR(\'00_MODE_EMPLOI\'!C7="EXEMPLE_FICTIF",\'00_MODE_EMPLOI\'!C7="DONNEES_REELLES"),"PASS","STOP")',
  '=IF(OR(\'00_MODE_EMPLOI\'!C8="OUI",\'00_MODE_EMPLOI\'!C8="NON"),"PASS","STOP")',
  '=IF(AND(OR(\'01_DOSSIER\'!C12="OUI",\'01_DOSSIER\'!C12="NON"),OR(\'01_DOSSIER\'!C13="OUI",\'01_DOSSIER\'!C13="NON")),"PASS","STOP")',
  '=IF(AND(COUNTIF(\'01_DOSSIER\'!G6:G12,"PASS")=7,\'01_DOSSIER\'!G14="PASS"),"PASS","STOP")',
  '=IF(COUNTIF(\'02_SITUATIONS\'!T6:T8,"OBSERVER")+COUNTIF(\'02_SITUATIONS\'!T6:T8,"CORRIGER_STANDARDISER")+COUNTIF(\'02_SITUATIONS\'!T6:T8,"INTEGRER_AUTOMATISER")+COUNTIF(\'02_SITUATIONS\'!T6:T8,"ACHETER_CONFIGURER")+COUNTIF(\'02_SITUATIONS\'!T6:T8,"ETUDIER_SUR_MESURE")=3,"PASS","STOP")',
  "=IF(AND(COUNTIF('02_SITUATIONS'!B6:B8,'02_SITUATIONS'!B6)=1,COUNTIF('02_SITUATIONS'!B6:B8,'02_SITUATIONS'!B7)=1,COUNTIF('02_SITUATIONS'!B6:B8,'02_SITUATIONS'!B8)=1,COUNTIF('02_SITUATIONS'!C6:C8,'02_SITUATIONS'!C6)=1,COUNTIF('02_SITUATIONS'!C6:C8,'02_SITUATIONS'!C7)=1,COUNTIF('02_SITUATIONS'!C6:C8,'02_SITUATIONS'!C8)=1,COUNTIF('02_SITUATIONS'!E6:E8,'02_SITUATIONS'!E6)=1,COUNTIF('02_SITUATIONS'!E6:E8,'02_SITUATIONS'!E7)=1,COUNTIF('02_SITUATIONS'!E6:E8,'02_SITUATIONS'!E8)=1),\"PASS\",\"STOP\")",
  '=IF(COUNTIF(\'03_BASELINE\'!I6:I8,"PASS")=3,"PASS","STOP")',
  '=IF(COUNTIF(\'04_REGLES_EXCEPTIONS\'!I6:I11,"PASS")=6,"PASS","STOP")',
  '=IF(COUNTIF(\'05_OPTIONS_TESTS\'!N6:N11,"PASS")+COUNTIF(\'05_OPTIONS_TESTS\'!N6:N11,"STOP")+COUNTIF(\'05_OPTIONS_TESTS\'!N6:N11,"INCOMPLET")+COUNTIF(\'05_OPTIONS_TESTS\'!N6:N11,"NON_UTILISE")=6,"PASS","STOP")',
  '=IF(AND(COUNTIF(\'05_OPTIONS_TESTS\'!N6:N11,"PASS")>=2,COUNTIF(\'05_OPTIONS_TESTS\'!N6:N11,"PASS")+COUNTIF(\'05_OPTIONS_TESTS\'!N6:N11,"NON_UTILISE")=6),"PASS","STOP")',
  `=IF(OR(${OPTION_ACTIONS.map((action) => `AND(COUNTIF('02_SITUATIONS'!T6:T8,"${action}")>0,COUNTIF('05_OPTIONS_TESTS'!D6:D11,"${action}")=0)`).join(",")}),"STOP","PASS")`,
  '=IF(AND(COUNTIF(\'06_TCO_12_36_60\'!I6:K11,"ND")=0,COUNT(\'06_TCO_12_36_60\'!I6:K11)=3*COUNTIF(\'05_OPTIONS_TESTS\'!N6:N11,"PASS"),COUNTIF(\'06_TCO_12_36_60\'!I6:K11,"NON_UTILISE")=3*COUNTIF(\'05_OPTIONS_TESTS\'!N6:N11,"NON_UTILISE")),"PASS","STOP")',
  "=IF(AND('05_OPTIONS_TESTS'!B6='06_TCO_12_36_60'!B6,'05_OPTIONS_TESTS'!C6='06_TCO_12_36_60'!C6,'05_OPTIONS_TESTS'!B7='06_TCO_12_36_60'!B7,'05_OPTIONS_TESTS'!C7='06_TCO_12_36_60'!C7,'05_OPTIONS_TESTS'!B8='06_TCO_12_36_60'!B8,'05_OPTIONS_TESTS'!C8='06_TCO_12_36_60'!C8,'05_OPTIONS_TESTS'!B9='06_TCO_12_36_60'!B9,'05_OPTIONS_TESTS'!C9='06_TCO_12_36_60'!C9,'05_OPTIONS_TESTS'!B10='06_TCO_12_36_60'!B10,'05_OPTIONS_TESTS'!C10='06_TCO_12_36_60'!C10,'05_OPTIONS_TESTS'!B11='06_TCO_12_36_60'!B11,'05_OPTIONS_TESTS'!C11='06_TCO_12_36_60'!C11),\"PASS\",\"STOP\")",
  '=IF(OR(\'07_RISQUES_STOP\'!G11="PASS",\'07_RISQUES_STOP\'!G11="STOP",\'07_RISQUES_STOP\'!G11="INCOMPLET"),"PASS","STOP")',
  '=IF(\'07_RISQUES_STOP\'!G11="PASS","PASS","STOP")',
  '=IF(COUNTIF(\'08_PILOTE\'!J6:J12,"PASS")=7,"PASS","STOP")',
  '=IF(COUNTA(\'09_DECISION\'!B6:B13)=8,"PASS","STOP")',
  '=IF(COUNTIF(\'09_DECISION\'!I6:I13,"PASS")+COUNTIF(\'09_DECISION\'!I6:I13,"STOP")+COUNTIF(\'09_DECISION\'!I6:I13,"INCOMPLET")=8,"PASS","STOP")',
  '=IF(COUNTIF(\'09_DECISION\'!I6:I13,"PASS")=8,"PASS","STOP")',
  '=IF(AND(\'01_DOSSIER\'!G9="PASS",\'01_DOSSIER\'!G11="PASS",\'01_DOSSIER\'!G14="PASS"),"PASS","STOP")',
  '=IF(OR(\'09_DECISION\'!I15="SECURISER_D_ABORD",\'09_DECISION\'!I15="INCOMPLET",\'09_DECISION\'!I15="OBSERVER",\'09_DECISION\'!I15="CORRIGER_STANDARDISER",\'09_DECISION\'!I15="COMPARER_PILOTER",\'09_DECISION\'!I15="DECISION_HUMAINE"),"PASS","STOP")',
  '=IF(OR(AND(\'09_DECISION\'!I15="DECISION_HUMAINE",\'09_DECISION\'!I16="AUTORISE"),AND(\'09_DECISION\'!I15<>"DECISION_HUMAINE",\'09_DECISION\'!I16="BLOQUE")),"PASS","STOP")',
  '=IF(OR(\'00_MODE_EMPLOI\'!C7="DONNEES_REELLES",\'09_DECISION\'!I16="BLOQUE"),"PASS","STOP")',
  `=IF(COUNTA('12_SOURCES'!B6:B${5 + sources.length})=${sources.length},"PASS","STOP")`,
].forEach((expectedFormula, index) =>
  govern("11_CONTROLES", `G${index + 6}`, expectedFormula),
);
assert.equal(governedFormulaSpecs.length, 97);

const assertGovernedFormulas = (book) => {
  for (const [sheetName, address, expectedFormula] of governedFormulaSpecs) {
    assert.equal(
      book.worksheets.getItem(sheetName).getRange(address).formulas[0][0],
      expectedFormula,
      `Formule gouvernée altérée : ${sheetName}!${address}`,
    );
  }
};
assertGovernedFormulas(workbook);
assertGovernedFormulas(publicWorkbook);

const mutationScenarios = [];
const mutate = ({
  id,
  sheet,
  address,
  value,
  outputSheet,
  outputAddress,
  expected,
}) => {
  const inputCell = workbook.worksheets.getItem(sheet).getRange(address);
  const original = structuredClone(inputCell.values);
  inputCell.values = [[value]];
  assert.deepEqual(
    workbook.worksheets.getItem(outputSheet).getRange(outputAddress)
      .values[0][0],
    expected,
    id,
  );
  mutationScenarios.push({
    id,
    input: `${sheet}!${address}=${String(value)}`,
    output: `${outputSheet}!${outputAddress}`,
    expected,
  });
  inputCell.values = original;
};

mutate({
  id: "MUT-01",
  sheet: "02_SITUATIONS",
  address: "G6",
  value: 20,
  outputSheet: "02_SITUATIONS",
  outputAddress: "R6",
  expected: 80,
});
mutate({
  id: "MUT-02",
  sheet: "02_SITUATIONS",
  address: "G6",
  value: 20,
  outputSheet: "02_SITUATIONS",
  outputAddress: "S6",
  expected: 360,
});
mutate({
  id: "MUT-03",
  sheet: "02_SITUATIONS",
  address: "H7",
  value: 6,
  outputSheet: "02_SITUATIONS",
  outputAddress: "R7",
  expected: 104,
});
mutate({
  id: "MUT-04",
  sheet: "02_SITUATIONS",
  address: "J8",
  value: 120,
  outputSheet: "02_SITUATIONS",
  outputAddress: "S8",
  expected: 216,
});
mutate({
  id: "MUT-05",
  sheet: "02_SITUATIONS",
  address: "H6",
  value: 0,
  outputSheet: "02_SITUATIONS",
  outputAddress: "R6",
  expected: 28.8,
});
mutate({
  id: "MUT-06",
  sheet: "02_SITUATIONS",
  address: "I6",
  value: 0,
  outputSheet: "02_SITUATIONS",
  outputAddress: "R6",
  expected: 43.2,
});
mutate({
  id: "MUT-07",
  sheet: "02_SITUATIONS",
  address: "J6",
  value: 0,
  outputSheet: "02_SITUATIONS",
  outputAddress: "S6",
  expected: 0,
});
mutate({
  id: "MUT-08",
  sheet: "02_SITUATIONS",
  address: "G8",
  value: 10,
  outputSheet: "02_SITUATIONS",
  outputAddress: "R8",
  expected: 110,
});
mutate({
  id: "MUT-09",
  sheet: "06_TCO_12_36_60",
  address: "D6",
  value: 5000,
  outputSheet: "06_TCO_12_36_60",
  outputAddress: "I6",
  expected: 9840,
});
mutate({
  id: "MUT-10",
  sheet: "06_TCO_12_36_60",
  address: "E7",
  value: 800,
  outputSheet: "06_TCO_12_36_60",
  outputAddress: "K7",
  expected: 66000,
});
mutate({
  id: "MUT-11",
  sheet: "06_TCO_12_36_60",
  address: "F9",
  value: 13000,
  outputSheet: "06_TCO_12_36_60",
  outputAddress: "I9",
  expected: 116200,
});
mutate({
  id: "MUT-12",
  sheet: "06_TCO_12_36_60",
  address: "E6",
  value: 0,
  outputSheet: "06_TCO_12_36_60",
  outputAddress: "J6",
  expected: 5800,
});
assert.equal(mutationScenarios.length, 12);

const adversarialScenarios = [];
const adversarial = (id, action, expected) => {
  action();
  adversarialScenarios.push({ id, expected, detected: true });
};

adversarial(
  "ADV-01",
  () => {
    const cell = tco.getRange("F6");
    const original = cell.values;
    cell.values = [[null]];
    assert.equal(tco.getRange("I6").values[0][0], "ND");
    cell.values = original;
  },
  "coût de sortie inconnu bloque le TCO",
);
adversarial(
  "ADV-02",
  () => {
    const cell = tco.getRange("G6");
    const original = cell.values;
    cell.values = [["ND"]];
    assert.equal(tco.getRange("K6").values[0][0], "ND");
    cell.values = original;
  },
  "périmètre inconnu bloque le TCO",
);
adversarial(
  "ADV-03",
  () => {
    const cell = tco.getRange("H6");
    const original = cell.values;
    cell.values = [["NON"]];
    assert.equal(tco.getRange("J6").values[0][0], "ND");
    cell.values = original;
  },
  "cas critique non rejoué bloque le TCO",
);
adversarial(
  "ADV-04",
  () => {
    const cell = risks.getRange("C6");
    const original = cell.values;
    cell.values = [["OUI"]];
    assert.equal(proofSheet.getRange("I15").values[0][0], "SECURISER_D_ABORD");
    cell.values = original;
  },
  "incident actif prioritaire",
);
adversarial(
  "ADV-05",
  () => {
    const cell = situations.getRange("G6");
    const original = cell.values;
    cell.values = [[null]];
    assert.equal(situations.getRange("R6").values[0][0], "ND");
    assert.equal(situations.getRange("S6").values[0][0], "ND");
    assert.equal(situations.getRange("T6").values[0][0], "INCOMPLET");
    assert.equal(proofSheet.getRange("I15").values[0][0], "INCOMPLET");
    cell.values = original;
  },
  "inconnue jamais remplacée par zéro",
);
adversarial(
  "ADV-06",
  () => {
    const cell = situations.getRange("G6");
    const original = cell.values;
    cell.values = [[0]];
    assert.equal(situations.getRange("R6").values[0][0], 0);
    assert.equal(situations.getRange("S6").values[0][0], 0);
    assert.notEqual(situations.getRange("G6").values[0][0], null);
    cell.values = original;
  },
  "zéro observé distinct de ND",
);
adversarial(
  "ADV-07",
  () => {
    const confirmation = situations.getRange("E8:F8");
    const originalConfirmation = confirmation.values;
    const cell = situations.getRange("O8");
    const original = cell.values;
    const stability = situations.getRange("L8");
    const originalStability = stability.values;
    confirmation.values = [["PREUVE-REELLE-03", "OUI"]];
    cell.values = [["NON_EXAMINE"]];
    assert.equal(situations.getRange("T8").values[0][0], "INCOMPLET");
    stability.values = [["CHANGEANTE"]];
    assert.equal(situations.getRange("T8").values[0][0], "OBSERVER");
    stability.values = originalStability;
    cell.values = original;
    confirmation.values = originalConfirmation;
  },
  "standard non examiné reste provisoire et ne prouve pas le sur-mesure",
);
adversarial(
  "ADV-08",
  () => {
    const confirmation = situations.getRange("E8:F8");
    const originalConfirmation = confirmation.values;
    const cell = situations.getRange("P8");
    const original = cell.values;
    confirmation.values = [["PREUVE-REELLE-03", "OUI"]];
    cell.values = [["NON"]];
    assert.equal(situations.getRange("T8").values[0][0], "OBSERVER");
    cell.values = original;
    confirmation.values = originalConfirmation;
  },
  "absence de responsable bloque la voie spécifique",
);
adversarial(
  "ADV-09",
  () => {
    const confirmation = situations.getRange("E8:F8");
    const originalConfirmation = confirmation.values;
    const cell = situations.getRange("Q8");
    const original = cell.values;
    confirmation.values = [["PREUVE-REELLE-03", "OUI"]];
    cell.values = [["NON"]];
    assert.equal(situations.getRange("T8").values[0][0], "OBSERVER");
    cell.values = original;
    confirmation.values = originalConfirmation;
  },
  "écart non différenciant ne route pas vers le spécifique",
);
adversarial(
  "ADV-10",
  () => {
    const cell = risks.getRange("C8");
    const original = cell.values;
    cell.values = [["NON"]];
    tco.getRange("D6:F6").values = [[0, 0, 0]];
    assert.equal(proofSheet.getRange("I15").values[0][0], "SECURISER_D_ABORD");
    cell.values = original;
    tco.getRange("D6:F6").values = [[4800, 320, 1000]];
  },
  "un TCO nul ne compense jamais un STOP",
);
adversarial(
  "ADV-11",
  () => {
    const cell = proofSheet.getRange("C6");
    const original = cell.values;
    cell.values = [["ECHEC"]];
    assert.equal(proofSheet.getRange("I6").values[0][0], "STOP");
    cell.values = original;
  },
  "preuve échouée visible",
);
adversarial(
  "ADV-12",
  () => {
    assert.equal(
      workbook.worksheets.getItem("00_MODE_EMPLOI").getRange("C9").values[0][0],
      "INTERDITE",
    );
  },
  "décision automatique interdite",
);
adversarial(
  "ADV-13",
  () => {
    assert.equal(
      workbook.worksheets.getItem("10_DICTIONNAIRE").getRange("C6")
        .values[0][0],
      "texte",
    );
    assert.equal(
      workbook.worksheets.getItem("10_DICTIONNAIRE").getRange("D6")
        .values[0][0],
      "Inconnu conservé explicitement",
    );
  },
  "ND documenté",
);
adversarial(
  "ADV-14",
  () => {
    assert.equal(
      workbook.worksheets.getItem("08_PILOTE").getRange("E6").values[0][0],
      "Sécurité non maîtrisée",
    );
    assert.equal(
      workbook.worksheets.getItem("08_PILOTE").getRange("G6").values[0][0],
      "Mode manuel",
    );
  },
  "pilote possède STOP et rollback",
);
adversarial(
  "ADV-15",
  () => {
    assert.ok(sources.every((source) => source.accessedOn === "2026-07-28"));
  },
  "dates de sources bornées",
);
adversarial(
  "ADV-16",
  () => {
    assert.ok(sources.every((source) => source.scope.length > 100));
    assert.ok(sources.every((source) => source.limits.length > 100));
  },
  "portées et limites explicites",
);
adversarial(
  "ADV-17",
  () => {
    assert.ok(proofs.every((proof) => proof.acceptedEvidence.length >= 3));
  },
  "preuves acceptables multiples",
);
adversarial(
  "ADV-18",
  () => {
    assert.equal(new Set(situations.getRange("B6:B8").values.flat()).size, 3);
  },
  "identifiants uniques",
);
adversarial(
  "ADV-19",
  () => {
    assert.equal(tco.getRange("I8").values[0][0], "ND");
    assert.notEqual(tco.getRange("I8").values[0][0], 0);
  },
  "sortie inconnue non assimilée à zéro",
);
adversarial(
  "ADV-20",
  () => {
    assert.equal(proofSheet.getRange("I16").values[0][0], "BLOQUE");
  },
  "export final fictif bloqué",
);

const dossierSheet = workbook.worksheets.getItem("01_DOSSIER");
const modeSheet = workbook.worksheets.getItem("00_MODE_EMPLOI");
const baselineSheet = workbook.worksheets.getItem("03_BASELINE");
const rulesSheet = workbook.worksheets.getItem("04_REGLES_EXCEPTIONS");
const pilotSheet = workbook.worksheets.getItem("08_PILOTE");
const sourcesSheet = workbook.worksheets.getItem("12_SOURCES");
const workbookAsOf = dossierSheet.getRange("C9").values[0][0];
const readyRanges = [
  {
    sheet: modeSheet,
    address: "C7:C8",
    values: [["DONNEES_REELLES"], ["OUI"]],
  },
  {
    sheet: dossierSheet,
    address: "C6:C14",
    values: [
      ["DOSSIER-REEL-001"],
      ["Direction générale"],
      ["Responsable opérations"],
      [workbookAsOf],
      ["Réviseur indépendant"],
      [workbookAsOf],
      ["OUI"],
      ["OUI"],
      [workbookAsOf + 121],
    ],
  },
  {
    sheet: situations,
    address: "B6:B8",
    values: [["SIT-01"], ["SIT-02"], ["SIT-03"]],
  },
  {
    sheet: situations,
    address: "D6:D8",
    values: [[46210], [46213], [46217]],
  },
  {
    sheet: situations,
    address: "E6:E8",
    values: [["PREUVE-REELLE-01"], ["PREUVE-REELLE-02"], ["PREUVE-REELLE-03"]],
  },
  {
    sheet: situations,
    address: "F6:F8",
    values: [["OUI"], ["OUI"], ["OUI"]],
  },
  {
    sheet: baselineSheet,
    address: "H6:H8",
    values: [
      ["PREUVE-BASELINE-01"],
      ["PREUVE-BASELINE-02"],
      ["PREUVE-BASELINE-03"],
    ],
  },
  {
    sheet: rulesSheet,
    address: "G6:G11",
    values: Array.from({ length: 6 }, () => ["v1 contrôlée"]),
  },
  {
    sheet: optionTests,
    address: "E6:L9",
    values: Array.from({ length: 4 }, () => [
      "OUI",
      "OUI",
      "PASS",
      "PASS",
      "PASS",
      "PASS",
      "PASS",
      "VERIFIE",
    ]),
  },
  {
    sheet: tco,
    address: "D6:H9",
    values: [
      [4800, 320, 1000, "OUI", "OUI"],
      [14000, 760, 4000, "OUI", "OUI"],
      [31000, 1450, 8000, "OUI", "OUI"],
      [78000, 2100, 12000, "OUI", "OUI"],
    ],
  },
  {
    sheet: risks,
    address: "C6:C9",
    values: [["NON"], ["OUI"], ["OUI"], ["OUI"]],
  },
  {
    sheet: pilotSheet,
    address: "B6:B12",
    values: [
      ["J1-J5 — préparation"],
      ["J6-J10 — données"],
      ["J11-J20 — usages"],
      ["J21-J25 — robustesse"],
      ["J26-J30 — décision"],
      ["Suivi +30 après pilote"],
      ["Suivi +90 après pilote"],
    ],
  },
  {
    sheet: proofSheet,
    address: "C6:E13",
    values: Array.from({ length: 8 }, (_, index) => [
      "VERIFIE",
      `PREUVE-REELLE-${String(index + 1).padStart(2, "0")}`,
      workbookAsOf,
    ]),
  },
  {
    sheet: proofSheet,
    address: "H6:H13",
    values: Array.from({ length: 8 }, () => ["Responsable de preuve"]),
  },
];

const withReadyWorkbook = (action) => {
  const saved = readyRanges.map(({ sheet, address }) =>
    structuredClone(sheet.getRange(address).values),
  );
  try {
    readyRanges.forEach(({ sheet, address, values }) => {
      sheet.getRange(address).values = values;
    });
    assert.equal(proofSheet.getRange("I15").values[0][0], "DECISION_HUMAINE");
    assert.equal(proofSheet.getRange("I16").values[0][0], "AUTORISE");
    action();
  } finally {
    readyRanges.forEach(({ sheet, address }, index) => {
      sheet.getRange(address).values = saved[index];
    });
  }
};

const withReadyMutationBlocked = (
  sheet,
  address,
  values,
  assertLocal = () => undefined,
) =>
  withReadyWorkbook(() => {
    const range = sheet.getRange(address);
    const original = structuredClone(range.values);
    try {
      range.values = values;
      assertLocal();
      assert.equal(proofSheet.getRange("I15").values[0][0], "INCOMPLET");
      assert.equal(proofSheet.getRange("I16").values[0][0], "BLOQUE");
    } finally {
      range.values = original;
    }
  });

adversarial(
  "ADV-21",
  () => withReadyWorkbook(() => undefined),
  "le scénario réel complet ouvre seulement la décision humaine",
);
adversarial(
  "ADV-22",
  () =>
    withReadyWorkbook(() => {
      dossierSheet.getRange("C7").values = [[""]];
      assert.equal(proofSheet.getRange("I15").values[0][0], "INCOMPLET");
      assert.equal(proofSheet.getRange("I16").values[0][0], "BLOQUE");
    }),
  "sponsor vide bloque la décision",
);
adversarial(
  "ADV-23",
  () =>
    withReadyWorkbook(() => {
      dossierSheet.getRange("C11").values = [["pas-une-date"]];
      assert.equal(proofSheet.getRange("I15").values[0][0], "INCOMPLET");
    }),
  "date de revue invalide bloque la décision",
);
adversarial(
  "ADV-24",
  () =>
    withReadyWorkbook(() => {
      risks.getRange("C7").values = [["ND"]];
      assert.equal(risks.getRange("G11").values[0][0], "INCOMPLET");
      assert.equal(proofSheet.getRange("I15").values[0][0], "INCOMPLET");
    }),
  "sécurité incomplète ne traverse jamais le gate",
);
adversarial(
  "ADV-25",
  () =>
    withReadyWorkbook(() => {
      situations.getRange("B7").values = [["SIT-01"]];
      assert.equal(proofSheet.getRange("I15").values[0][0], "INCOMPLET");
    }),
  "identifiant de situation dupliqué bloque la décision",
);
adversarial(
  "ADV-26",
  () =>
    withReadyWorkbook(() => {
      situations.getRange("D6").values = [[workbookAsOf + 1]];
      assert.equal(situations.getRange("T6").values[0][0], "INCOMPLET");
      assert.equal(proofSheet.getRange("I15").values[0][0], "INCOMPLET");
    }),
  "événement postérieur à l’arrêté bloque la décision",
);
adversarial(
  "ADV-27",
  () =>
    withReadyWorkbook(() => {
      tco.getRange("D6").values = [[-1]];
      assert.equal(tco.getRange("I6").values[0][0], "ND");
      assert.equal(proofSheet.getRange("I15").values[0][0], "INCOMPLET");
    }),
  "TCO négatif reste ND et bloque la décision",
);
adversarial(
  "ADV-28",
  () =>
    withReadyWorkbook(() => {
      optionTests.getRange("H6").values = [["ECHEC"]];
      assert.equal(optionTests.getRange("N6").values[0][0], "STOP");
      assert.equal(proofSheet.getRange("I15").values[0][0], "INCOMPLET");
    }),
  "échec d’un cas d’option bloque la décision",
);
adversarial(
  "ADV-29",
  () =>
    withReadyWorkbook(() => {
      proofSheet.getRange("D6").values = [[""]];
      assert.equal(proofSheet.getRange("I6").values[0][0], "INCOMPLET");
      assert.equal(proofSheet.getRange("I15").values[0][0], "INCOMPLET");
    }),
  "preuve sans référence bloque la décision",
);

const readyFailureCases = [
  {
    sheet: modeSheet,
    address: "C7",
    values: [["MODE_INVENTE"]],
    expected: "provenance inconnue",
  },
  {
    sheet: modeSheet,
    address: "C8",
    values: [["MAYBE"]],
    expected: "confirmation globale hors enum",
  },
  {
    sheet: dossierSheet,
    address: "C6",
    values: [["DOSSIER_EXEMPLE_001"]],
    expected: "identifiant dossier encore fictif",
  },
  {
    sheet: dossierSheet,
    address: "C7",
    values: [["Sponsor exemple"]],
    expected: "sponsor encore fictif",
  },
  {
    sheet: dossierSheet,
    address: "C8",
    values: [["Responsable fixture"]],
    expected: "responsable métier encore fictif",
  },
  {
    sheet: dossierSheet,
    address: "C10",
    values: [["Réviseur fictif"]],
    expected: "réviseur encore fictif",
  },
  {
    sheet: dossierSheet,
    address: "C11",
    values: [[workbookAsOf - 1]],
    expected: "revue antérieure aux preuves",
  },
  {
    sheet: dossierSheet,
    address: "C14",
    values: [[workbookAsOf]],
    expected: "expiration non future",
  },
  {
    sheet: dossierSheet,
    address: "C9",
    values: [[dateSerial("1999-12-31")]],
    expected: "arrêté antérieur à la borne 2000",
  },
  {
    sheet: dossierSheet,
    address: "C12",
    values: [["MAYBE"]],
    expected: "confirmation des données hors enum",
  },
  {
    sheet: dossierSheet,
    address: "C13",
    values: [["MAYBE"]],
    expected: "décision humaine hors enum",
  },
  {
    sheet: risks,
    address: "C6",
    values: [["MAYBE"]],
    expected: "incident actif hors enum",
  },
  {
    sheet: risks,
    address: "C7",
    values: [["MAYBE"]],
    expected: "restauration hors enum",
  },
  ...[
    ["K6", "conséquence hors enum"],
    ["L6", "stabilité hors enum"],
    ["M6", "résultat outil hors enum"],
    ["N6", "transfert manuel hors enum"],
    ["O6", "test standard hors enum"],
    ["P6", "secours métier hors enum"],
    ["Q6", "différenciation hors enum"],
  ].map(([address, expected]) => ({
    sheet: situations,
    address,
    values: [["MAYBE"]],
    expected,
  })),
  {
    sheet: situations,
    address: "B6",
    values: [["SIT_EXEMPLE_01"]],
    expected: "identifiant situation encore fictif",
  },
  {
    sheet: situations,
    address: "B6:C6",
    values: [["S", "Court"]],
    expected: "identifiant et titre de situation trop courts",
  },
  {
    sheet: situations,
    address: "E6",
    values: [["12345"]],
    expected: "référence de situation trop courte",
  },
  {
    sheet: situations,
    address: "C6",
    values: [["Situation fictive non recevable"]],
    expected: "titre de situation encore fictif",
  },
  {
    sheet: situations,
    address: "E6",
    values: [["PREUVE-REELLE-02"]],
    expected: "référence de situation dupliquée",
  },
  {
    sheet: situations,
    address: "D6",
    values: [[workbookAsOf - 0.5]],
    expected: "date de situation non entière",
  },
  {
    sheet: situations,
    address: "G6",
    values: [[1_000_001]],
    expected: "volume de situation hors borne",
  },
  {
    sheet: optionTests,
    address: "B6",
    values: [[""]],
    expected: "identifiant option vide",
  },
  {
    sheet: optionTests,
    address: "B6:C6",
    values: [["O", "X"]],
    expected: "identifiant et libellé option trop courts",
  },
  {
    sheet: optionTests,
    address: "B6",
    values: [["OPT-02"]],
    expected: "identifiant option dupliqué",
  },
  {
    sheet: optionTests,
    address: "C6",
    values: [["Option fixture"]],
    expected: "libellé option encore fictif",
  },
  {
    sheet: optionTests,
    address: "D6",
    values: [["ACTION_INVENTEE"]],
    expected: "action option hors enum",
  },
  {
    sheet: optionTests,
    address: "E6",
    values: [["MAYBE"]],
    expected: "confirmation option hors enum",
  },
  {
    sheet: optionTests,
    address: "F6",
    values: [["MAYBE"]],
    expected: "périmètre option hors enum",
  },
  {
    sheet: optionTests,
    address: "G6",
    values: [["MAYBE"]],
    expected: "résultat de test option hors enum",
  },
  {
    sheet: optionTests,
    address: "L6",
    values: [["MAYBE"]],
    expected: "niveau de preuve option hors enum",
  },
  {
    sheet: optionTests,
    address: "M6",
    values: [["Écart fictif"]],
    expected: "écart option encore fictif",
  },
  {
    sheet: optionTests,
    address: "B10",
    values: [["OPT-05"]],
    expected: "ligne option partiellement non utilisée",
  },
  {
    sheet: optionTests,
    address: "D7",
    values: [["CORRIGER_STANDARDISER"]],
    expected: "voie requise sans option correspondante",
  },
  {
    sheet: tco,
    address: "B6",
    values: [["OPT-AUTRE"]],
    expected: "identifiant TCO désaligné",
  },
  {
    sheet: tco,
    address: "C6",
    values: [["Libellé autre"]],
    expected: "libellé TCO désaligné",
  },
  {
    sheet: tco,
    address: "D6",
    values: [[10_000_000_001]],
    expected: "montant TCO supérieur à la borne",
  },
  {
    sheet: tco,
    address: "D6",
    values: [[1.00001]],
    expected: "montant TCO à plus de quatre décimales",
  },
  {
    sheet: tco,
    address: "G6",
    values: [["MAYBE"]],
    expected: "périmètre TCO hors enum",
  },
  {
    sheet: proofSheet,
    address: "B6",
    values: [[""]],
    expected: "domaine de preuve supprimé",
  },
  {
    sheet: proofSheet,
    address: "B6",
    values: [[proofSheet.getRange("B7").values[0][0]]],
    expected: "domaine de preuve dupliqué",
  },
  {
    sheet: proofSheet,
    address: "D6",
    values: [["PREUVE_FICTIVE_01"]],
    expected: "référence de preuve encore fictive",
  },
  {
    sheet: proofSheet,
    address: "D6",
    values: [["PREUVE-REELLE-02"]],
    expected: "référence de preuve dupliquée",
  },
  {
    sheet: proofSheet,
    address: "E6",
    values: [[workbookAsOf + 1]],
    expected: "preuve postérieure à l’arrêté",
  },
  {
    sheet: proofSheet,
    address: "H6",
    values: [["Auteur exemple"]],
    expected: "responsable de preuve encore fictif",
  },
  {
    sheet: proofSheet,
    address: "C6",
    values: [["MAYBE"]],
    expected: "statut de preuve hors enum",
  },
  {
    sheet: baselineSheet,
    address: "B6:H6",
    values: [Array.from({ length: 7 }, () => null)],
    expected: "ligne baseline supprimée",
  },
  {
    sheet: baselineSheet,
    address: "B6",
    values: [[baselineSheet.getRange("B7").values[0][0]]],
    expected: "période baseline dupliquée",
  },
  {
    sheet: rulesSheet,
    address: "B6:H6",
    values: [Array.from({ length: 7 }, () => null)],
    expected: "ligne de règle supprimée",
  },
  {
    sheet: rulesSheet,
    address: "B6",
    values: [[rulesSheet.getRange("B7").values[0][0]]],
    expected: "identifiant de règle dupliqué",
  },
  {
    sheet: pilotSheet,
    address: "B6:I6",
    values: [Array.from({ length: 8 }, () => null)],
    expected: "ligne pilote supprimée",
  },
  {
    sheet: pilotSheet,
    address: "I7",
    values: [[pilotSheet.getRange("I6").values[0][0]]],
    expected: "date de pilote dupliquée",
  },
  {
    sheet: situations,
    address: "L6:O6",
    values: [["CHANGEANTE", "NON_TESTE", "NON", "NON_EXAMINE"]],
    expected: "observation provisoire non testée bloque l’export final",
    assertLocal: () =>
      assert.equal(situations.getRange("T6").values[0][0], "OBSERVER"),
  },
  {
    sheet: pilotSheet,
    address: "B11:I11",
    values: [Array.from({ length: 8 }, () => null)],
    expected: "suivi +30 après pilote supprimé",
  },
  {
    sheet: pilotSheet,
    address: "B12:I12",
    values: [Array.from({ length: 8 }, () => null)],
    expected: "suivi +90 après pilote supprimé",
  },
  {
    sheet: pilotSheet,
    address: "I11",
    values: [[pilotSheet.getRange("I10").values[0][0] + 1]],
    expected: "suivi étiqueté +30 mais daté à +1",
  },
  {
    sheet: pilotSheet,
    address: "I12",
    values: [[pilotSheet.getRange("I10").values[0][0] + 2]],
    expected: "suivi étiqueté +90 mais daté à +2",
  },
  {
    sheet: optionTests,
    address: "B7:M11",
    values: Array.from({ length: 5 }, () =>
      Array.from({ length: 12 }, () => "NON_UTILISE"),
    ),
    expected: "moins de deux options actives",
  },
  {
    sheet: sourcesSheet,
    address: "B6",
    values: [[null]],
    expected: "source canonique supprimée",
  },
];

let nextReadyFailureId = 30;
for (const failure of readyFailureCases) {
  const id = `ADV-${String(nextReadyFailureId).padStart(2, "0")}`;
  nextReadyFailureId += 1;
  adversarial(
    id,
    () => {
      try {
        withReadyMutationBlocked(
          failure.sheet,
          failure.address,
          failure.values,
          failure.assertLocal,
        );
      } catch (error) {
        throw new Error(`${id} (${failure.expected}) : ${error.message}`, {
          cause: error,
        });
      }
    },
    failure.expected,
  );
}
for (const routeCase of [
  {
    id: "ADV-94",
    values: [
      "SIGNIFICATIVE",
      "CHANGEANTE",
      "DEFAILLANT",
      "NON",
      "COUVRE",
      "OUI",
      "NON",
    ],
    expectedState: "OBSERVER",
    expected: "taxonomie globale OBSERVER alignée avec le web",
  },
  {
    id: "ADV-95",
    values: [
      "SIGNIFICATIVE",
      "STABLE",
      "FONCTIONNE_APRES_CORRECTION",
      "NON",
      "COUVRE",
      "OUI",
      "NON",
    ],
    expectedState: "CORRIGER_STANDARDISER",
    expected: "taxonomie globale CORRIGER_STANDARDISER alignée avec le web",
  },
]) {
  adversarial(
    routeCase.id,
    () =>
      withReadyWorkbook(() => {
        const originalRoutes = structuredClone(
          situations.getRange("K6:Q8").values,
        );
        try {
          situations.getRange("K6:Q8").values = Array.from(
            { length: 3 },
            () => routeCase.values,
          );
          dossierSheet.getRange("C13").values = [["NON"]];
          assert.deepEqual(situations.getRange("T6:T8").values, [
            [routeCase.expectedState],
            [routeCase.expectedState],
            [routeCase.expectedState],
          ]);
          assert.equal(
            proofSheet.getRange("I15").values[0][0],
            routeCase.expectedState,
          );
          assert.equal(proofSheet.getRange("I16").values[0][0], "BLOQUE");
        } finally {
          situations.getRange("K6:Q8").values = originalRoutes;
        }
      }),
    routeCase.expected,
  );
}
adversarial(
  "ADV-96",
  () =>
    withReadyMutationBlocked(dossierSheet, "C14", [[MAX_DATE_SERIAL + 1]], () =>
      assert.equal(dossierSheet.getRange("G14").values[0][0], "INCOMPLET"),
    ),
  "expiration au-delà du maximum représentable par Excel",
);
assert.equal(adversarialScenarios.length, 96);

const sabotageScenarios = [];
for (const [sheetName, address, expectedFormula] of governedFormulaSpecs) {
  const formulaCell = workbook.worksheets.getItem(sheetName).getRange(address);
  formulaCell.formulas = [["=1"]];
  assert.throws(() => assertGovernedFormulas(workbook));
  formulaCell.formulas = [[expectedFormula]];
  assertGovernedFormulas(workbook);
  sabotageScenarios.push({
    id: `SAB-${String(sabotageScenarios.length + 1).padStart(2, "0")}`,
    target: `${sheetName}!${address}`,
    detected: true,
  });
}
assert.equal(sabotageScenarios.length, 97);

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
  /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
  /postgres(?:ql)?:\/\/[^:\s]+:[^@\s]+@/i,
];
const formulaErrorHits = [];
const secretHits = [];
let formulaCellCount = 0;
const sheetMetrics = [];
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
        assert.ok(!/\[[^\]]+\.xlsx\]/i.test(formulaValue));
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
assert.equal(formulaCellCount, 97);
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
    /<(?:\w+:)?tableParts\b/.test(xml) || /<(?:\w+:)?autoFilter\b/.test(xml),
).length;
const validatedSheetCount = sheetXml.filter((xml) =>
  /<(?:\w+:)?dataValidations\b/.test(xml),
).length;
assert.equal(frozenSheetCount, 13);
assert.equal(filteredSheetCount, 13);
assert.ok(validatedSheetCount >= 6);

const compactInspect = await workbook.inspect({
  kind: "workbook,sheet,table,formula",
  maxChars: 48_000,
  tableMaxRows: 8,
  tableMaxCols: 12,
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
  assert.ok(
    bytes.length > 2_000,
    `${sheetName} doit produire un rendu visible.`,
  );
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
    annualWorkHours: [72, 91, 99],
    annualWaitHours: [324, 195, 432],
    tco: {
      correction: [9640, 17320, 25000],
      integration: [27120, 45360, 63600],
      standard: ["ND", "ND", "ND"],
      custom: [115200, 165600, 216000],
    },
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
  secretScan: {
    detectors: secretPatterns.length,
    candidates: secretHits.length,
  },
  formulaErrors: formulaErrorHits,
  previews: previewRecords,
  recalculation: "Aucune recalculation Microsoft Excel réelle.",
  finalGate:
    "BLOQUE_EXEMPLE_FICTIF — remplacer et vérifier données, preuves, TCO, responsables et décision humaine.",
};
await fs.writeFile(
  path.join(outputDir, "validation.json"),
  `${JSON.stringify(validation, null, 2)}\n`,
  "utf8",
);
await fs.writeFile(
  path.join(outputDir, "validation.md"),
  [
    "# Validation locale — kit diagnostic du besoin logiciel métier",
    "",
    `- Statut : ${validation.status}`,
    `- SHA-256 : \`${outputHash}\``,
    `- Taille : ${outputBytes.length.toLocaleString("fr-FR")} octets`,
    `- Onglets : ${expectedSheetNames.length}/13`,
    `- Sources : ${sources.length}/26`,
    `- Preuves : ${proofs.length}/8`,
    `- Formules gouvernées : ${formulaCellCount}`,
    `- Scénarios : ${validation.scenarios.total} (${validation.scenarios.mutations} mutations, ${validation.scenarios.adversarial} adversarial, ${validation.scenarios.sabotage} sabotages)`,
    `- Rendus : ${previewRecords.length}/13 PNG`,
    `- Volets figés : ${frozenSheetCount}/13`,
    `- Filtres : ${filteredSheetCount}/13`,
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
