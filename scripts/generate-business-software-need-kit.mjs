import fs from "node:fs/promises";
import { execFile } from "node:child_process";
import path from "node:path";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";
import { loadArtifactTool } from "./lib/load-artifact-tool.mjs";

const execFileAsync = promisify(execFile);
const artifactTool = await loadArtifactTool();
const { SpreadsheetFile, Workbook } = artifactTool;

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const workspace = path.resolve(scriptDir, "..");
const outputDir = path.join(
  workspace,
  "output",
  "signes-besoin-logiciel-metier",
  "workbook",
);
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

await fs.mkdir(outputDir, { recursive: true });
await fs.mkdir(path.dirname(publicPath), { recursive: true });

const AS_OF = "2026-07-28";
const dateSerial = (date) =>
  Math.floor(
    (Date.parse(`${date}T00:00:00Z`) - Date.UTC(1899, 11, 30)) /
      (24 * 60 * 60 * 1_000),
  );
const AS_OF_SERIAL = dateSerial(AS_OF);
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
const sheetNames = [
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
const subtitles = {
  "00_MODE_EMPLOI": "Mode d’emploi, provenance et règles non compensables",
  "01_DOSSIER": "Sponsor, responsable, arrêté et revue humaine",
  "02_SITUATIONS": "Trois événements datés, temps séparés et voie à examiner",
  "03_BASELINE": "Période normale, tension et cas rare critique",
  "04_REGLES_EXCEPTIONS":
    "Règles versionnées, exceptions, arbitres et contrôles",
  "05_OPTIONS_TESTS": "Même périmètre et mêmes cas rejoués pour chaque option",
  "06_TCO_12_36_60": "Coût complet sans classement automatique",
  "07_RISQUES_STOP": "Incident, restauration, privilèges et mode dégradé",
  "08_PILOTE": "Critères locaux, rollback et suivis +30/+90 après le pilote",
  "09_DECISION": "Preuves, portes et décision strictement humaine",
  "10_DICTIONNAIRE": "Définitions, unités, inconnues et limites",
  "11_CONTROLES": "Contrôles indépendants du scénario fictif livré",
  "12_SOURCES": "Corpus officiel international et limites d’usage",
};

const colors = {
  ink: "#172033",
  white: "#FFFFFF",
  paper: "#F8FAFC",
  line: "#CBD5E1",
  violet: "#6D28D9",
  violetSoft: "#EDE9FE",
  blue: "#1D4ED8",
  blueSoft: "#DBEAFE",
  green: "#047857",
  greenSoft: "#D1FAE5",
  orange: "#B45309",
  orangeSoft: "#FEF3C7",
  red: "#B91C1C",
  redSoft: "#FEE2E2",
};

const workbook = Workbook.create();
const sheets = Object.fromEntries(
  sheetNames.map((name) => [name, workbook.worksheets.add(name)]),
);
workbook.comments.setSelf({ displayName: "Hagnéré Code" });

function title(sheet, name, lastColumn = "H") {
  sheet.showGridLines = false;
  sheet.mergeCells(`A1:${lastColumn}2`);
  sheet.getRange("A1").values = [[name.replaceAll("_", " ")]];
  sheet.getRange(`A1:${lastColumn}2`).format = {
    fill: colors.ink,
    font: {
      name: "Aptos Display",
      size: 19,
      bold: true,
      color: colors.white,
    },
    verticalAlignment: "center",
    horizontalAlignment: "left",
  };
  sheet.mergeCells(`A3:${lastColumn}3`);
  sheet.getRange("A3").values = [
    [`${subtitles[name]} — EXEMPLE FICTIF — arrêté ${AS_OF}`],
  ];
  sheet.getRange(`A3:${lastColumn}3`).format = {
    fill: colors.orangeSoft,
    font: { bold: true, italic: true, color: colors.orange, size: 10 },
    wrapText: true,
    verticalAlignment: "center",
  };
  sheet.getRange("A1").format.rowHeight = 28;
  sheet.getRange("A2").format.rowHeight = 28;
  sheet.getRange("A3").format.rowHeight = 32;
}

function setWidths(sheet, widths) {
  for (const [column, width] of Object.entries(widths)) {
    sheet.getRange(`${column}:${column}`).format.columnWidth = width;
  }
}

function header(range) {
  range.format = {
    fill: colors.ink,
    font: { bold: true, color: colors.white, size: 9 },
    wrapText: true,
    verticalAlignment: "center",
    horizontalAlignment: "left",
    borders: { bottom: { style: "medium", color: colors.ink } },
  };
  range.format.rowHeight = 34;
}

function body(range, height = 46) {
  range.format = {
    font: { color: colors.ink, size: 9 },
    wrapText: true,
    verticalAlignment: "top",
    horizontalAlignment: "left",
    borders: { bottom: { style: "thin", color: colors.line } },
  };
  range.format.rowHeight = height;
}

function input(range) {
  range.format = {
    fill: colors.blueSoft,
    font: { color: colors.blue },
    borders: { bottom: { style: "thin", color: "#93C5FD" } },
  };
}

function formula(range) {
  range.format = {
    fill: colors.greenSoft,
    font: { bold: true, color: colors.green },
    borders: { bottom: { style: "thin", color: "#6EE7B7" } },
  };
}

function warning(range) {
  range.format = {
    fill: colors.orangeSoft,
    font: { bold: true, color: colors.orange },
  };
}

function table(sheet, range, name) {
  const value = sheet.tables.add(range, true, name);
  value.showHeaders = true;
  value.showFilterButton = true;
  return value;
}

function addListValidation(sheet, range, values) {
  sheet.dataValidations.add({
    range,
    rule: { type: "list", formula1: `"${values.join(",")}"` },
  });
}

function statusRules(range) {
  range.conditionalFormats.add("containsText", {
    text: "STOP",
    format: { fill: colors.redSoft, font: { bold: true, color: colors.red } },
  });
  range.conditionalFormats.add("containsText", {
    text: "BLOQUE",
    format: { fill: colors.redSoft, font: { bold: true, color: colors.red } },
  });
  range.conditionalFormats.add("containsText", {
    text: "INCOMPLET",
    format: {
      fill: colors.orangeSoft,
      font: { bold: true, color: colors.orange },
    },
  });
  range.conditionalFormats.add("containsText", {
    text: "PASS",
    format: {
      fill: colors.greenSoft,
      font: { bold: true, color: colors.green },
    },
  });
}

for (const name of sheetNames) {
  const lastColumn =
    {
      "02_SITUATIONS": "T",
      "03_BASELINE": "I",
      "04_REGLES_EXCEPTIONS": "I",
      "05_OPTIONS_TESTS": "N",
      "06_TCO_12_36_60": "K",
      "08_PILOTE": "J",
      "09_DECISION": "I",
      "12_SOURCES": "I",
    }[name] ?? "H";
  title(sheets[name], name, lastColumn);
}

{
  const sheet = sheets["00_MODE_EMPLOI"];
  setWidths(sheet, { A: 3, B: 25, C: 26, D: 18, E: 28, F: 18, G: 30, H: 3 });
  sheet.getRange("B5:G5").values = [
    ["Champ", "Valeur livrée", "Unité", "À remplacer", "Règle", "Statut"],
  ];
  sheet.getRange("B6:G16").values = [
    [
      "Version",
      "business-software-need-kit-r1",
      "texte",
      "Non",
      "Traçabilité",
      "PASS",
    ],
    [
      "Provenance",
      "EXEMPLE_FICTIF",
      "texte",
      "Oui",
      "DONNEES_REELLES requis",
      "INCOMPLET",
    ],
    [
      "Données réelles confirmées",
      "NON",
      "OUI/NON",
      "Oui",
      "OUI requis",
      "INCOMPLET",
    ],
    [
      "Décision automatique",
      "INTERDITE",
      "texte",
      "Non",
      "Arbitrage humain",
      "PASS",
    ],
    ["Inconnues", "ND", "texte", "Non", "Jamais remplacées par zéro", "PASS"],
    [
      "Secrets",
      "INTERDITS",
      "texte",
      "Non",
      "Références expurgées seulement",
      "PASS",
    ],
    [
      "Nombre de situations",
      3,
      "événements",
      "Oui",
      "IDs uniques et preuves",
      "PASS",
    ],
    ["Horizon TCO", "12 / 36 / 60", "mois", "Non", "Même périmètre", "PASS"],
    [
      "STOP compensable",
      "NON",
      "OUI/NON",
      "Non",
      "Aucun gain ne compense",
      "PASS",
    ],
    [
      "Dernière date de source",
      AS_OF_SERIAL,
      "AAAA-MM-JJ",
      "Oui",
      "Jamais future",
      "PASS",
    ],
    [
      "Excel réel recalculé",
      "NON",
      "OUI/NON",
      "Oui",
      "À refaire avant usage final",
      "INCOMPLET",
    ],
  ];
  header(sheet.getRange("B5:G5"));
  body(sheet.getRange("B6:G16"), 52);
  input(sheet.getRange("C7:C8"));
  addListValidation(sheet, "C7", ["EXEMPLE_FICTIF", "DONNEES_REELLES"]);
  addListValidation(sheet, "C8", ["NON", "OUI"]);
  sheet.getRange("C15").format.numberFormat = "yyyy-mm-dd";
  warning(sheet.getRange("C7:C8"));
  statusRules(sheet.getRange("G6:G16"));
  table(sheet, "B5:G16", "T_ModeEmploi");
}

{
  const sheet = sheets["01_DOSSIER"];
  setWidths(sheet, { A: 3, B: 29, C: 30, D: 22, E: 30, F: 18, G: 20, H: 3 });
  sheet.getRange("B5:G5").values = [
    ["Champ", "Valeur", "Preuve / référence", "Responsable", "Règle", "Statut"],
  ];
  sheet.getRange("B6:G14").values = [
    [
      "Identifiant dossier",
      "DOSSIER-FICTIF-001",
      "Référence interne",
      "Sponsor",
      "Unique",
      "PASS",
    ],
    [
      "Sponsor",
      "Direction — exemple",
      "Mandat à joindre",
      "Direction",
      "Obligatoire",
      "INCOMPLET",
    ],
    [
      "Responsable métier",
      "Responsable opérations — exemple",
      "Rôle et suppléant",
      "Direction",
      "Obligatoire",
      "INCOMPLET",
    ],
    [
      "Arrêté",
      AS_OF_SERIAL,
      "Registre de baseline",
      "Responsable métier",
      "Date non future",
      "PASS",
    ],
    [
      "Réviseur indépendant",
      "",
      "Compte rendu",
      "Sponsor",
      "Obligatoire",
      "INCOMPLET",
    ],
    ["Date de revue", "", "AAAA-MM-JJ", "Réviseur", "Obligatoire", "INCOMPLET"],
    [
      "Données réelles confirmées",
      "NON",
      "OUI/NON",
      "Responsable métier",
      "OUI requis",
      "INCOMPLET",
    ],
    [
      "Décision humaine confirmée",
      "NON",
      "OUI/NON",
      "Sponsor",
      "OUI requis",
      "INCOMPLET",
    ],
    [
      "Date d’expiration",
      dateSerial("2026-11-26"),
      "Prochaine revue",
      "Sponsor",
      "Toute décision expire",
      "PASS",
    ],
  ];
  const dossierStatusFormulas = [
    `=IF(${formulaNonEmptyText("C6")},"PASS","INCOMPLET")`,
    `=IF(${formulaNonEmptyText("C7")},"PASS","INCOMPLET")`,
    `=IF(${formulaNonEmptyText("C8")},"PASS","INCOMPLET")`,
    `=IF(ISNUMBER(C9),IF(AND(INT(C9)=C9,C9>=${MIN_DATE_SERIAL},C9<=TODAY()),"PASS","INCOMPLET"),"INCOMPLET")`,
    `=IF(AND(${formulaNonEmptyText("C10")},C10<>C7,C10<>C8),"PASS","INCOMPLET")`,
    `=IF(ISNUMBER(C11),IF(AND(INT(C11)=C11,C11>=${MIN_DATE_SERIAL},C11<=C9,C11>=MAX(MAX('02_SITUATIONS'!D6:D8),MAX('09_DECISION'!E6:E13))),"PASS","INCOMPLET"),"INCOMPLET")`,
    '=IF(C12="OUI","PASS","INCOMPLET")',
    '=IF(C13="OUI","PASS","INCOMPLET")',
    `=IF(AND(ISNUMBER(C14),ISNUMBER(C11),ISNUMBER(C9)),IF(AND(INT(C14)=C14,C14<=${MAX_DATE_SERIAL},C14>C11,C14>C9,C14>TODAY()),"PASS","INCOMPLET"),"INCOMPLET")`,
  ];
  sheet.getRange("G6:G14").formulas = dossierStatusFormulas.map((formula) => [
    formula,
  ]);
  header(sheet.getRange("B5:G5"));
  body(sheet.getRange("B6:G14"), 52);
  input(sheet.getRange("C6:E14"));
  formula(sheet.getRange("G6:G14"));
  sheet.getRange("C9:C9").format.numberFormat = "yyyy-mm-dd";
  sheet.getRange("C11:C11").format.numberFormat = "yyyy-mm-dd";
  sheet.getRange("C14:C14").format.numberFormat = "yyyy-mm-dd";
  addListValidation(sheet, "C12:C13", ["NON", "OUI"]);
  statusRules(sheet.getRange("G6:G14"));
  table(sheet, "B5:G14", "T_Dossier");
}

{
  const sheet = sheets["02_SITUATIONS"];
  setWidths(sheet, {
    A: 3,
    B: 13,
    C: 28,
    D: 15,
    E: 24,
    F: 18,
    G: 13,
    H: 13,
    I: 13,
    J: 13,
    K: 16,
    L: 16,
    M: 25,
    N: 16,
    O: 24,
    P: 16,
    Q: 16,
    R: 18,
    S: 18,
    T: 27,
  });
  sheet.getRange("B5:T5").values = [
    [
      "ID",
      "Situation observée",
      "Date",
      "Référence de preuve",
      "Situation réelle confirmée",
      "Fréquence / mois",
      "Minutes actives",
      "Minutes correction",
      "Minutes attente",
      "Conséquence",
      "Stabilité règle",
      "Outil actuel",
      "Transfert manuel",
      "Test standard",
      "Responsable + secours",
      "Différenciant",
      "Travail + correction / an (h)",
      "Attente / an (h)",
      "Voie à examiner",
    ],
  ];
  const situations = [
    [
      "SIT-01",
      "Commande bloquée par une règle de remise",
      dateSerial("2026-07-07"),
      "EXEMPLE-FICTIF-TICKET-01",
      "NON",
      18,
      12,
      8,
      90,
      "SIGNIFICATIVE",
      "STABLE",
      "FONCTIONNE_APRES_CORRECTION",
      "NON",
      "COUVRE",
      "OUI",
      "NON",
    ],
    [
      "SIT-02",
      "Adresse et date recopiées entre CRM et planning",
      dateSerial("2026-07-10"),
      "EXEMPLE-FICTIF-JOURNAL-02",
      "NON",
      65,
      5,
      2,
      15,
      "SIGNIFICATIVE",
      "STABLE",
      "ECART_CONFIRME",
      "OUI",
      "COUVRE_PARTIELLEMENT",
      "OUI",
      "NON",
    ],
    [
      "SIT-03",
      "Ordonnancement spécifique non couvert au test",
      dateSerial("2026-07-14"),
      "EXEMPLE-FICTIF-REJEU-03",
      "NON",
      9,
      35,
      20,
      240,
      "CRITIQUE",
      "STABLE",
      "ECART_CONFIRME",
      "NON",
      "ECHEC_CAS_CRITIQUE",
      "OUI",
      "OUI",
    ],
  ];
  sheet.getRange("B6:Q8").values = situations;
  for (let row = 6; row <= 8; row += 1) {
    sheet.getRange(`R${row}`).formulas = [
      [`=${situationWorkFormula(row).slice(1)}`],
    ];
    sheet.getRange(`S${row}`).formulas = [
      [`=${situationWaitFormula(row).slice(1)}`],
    ];
    sheet.getRange(`T${row}`).formulas = [[situationStatusFormula(row)]];
  }
  header(sheet.getRange("B5:T5"));
  body(sheet.getRange("B6:T8"), 88);
  input(sheet.getRange("B6:Q8"));
  formula(sheet.getRange("R6:T8"));
  sheet.getRange("D6:D8").format.numberFormat = "yyyy-mm-dd";
  addListValidation(sheet, "F6:F8", ["NON", "OUI"]);
  addListValidation(sheet, "K6:K8", [
    "ND",
    "FAIBLE",
    "SIGNIFICATIVE",
    "CRITIQUE",
  ]);
  addListValidation(sheet, "L6:L8", [
    "ND",
    "CHANGEANTE",
    "ASSEZ_STABLE",
    "STABLE",
  ]);
  addListValidation(sheet, "M6:M8", [
    "ND",
    "NON_TESTE",
    "FONCTIONNE_APRES_CORRECTION",
    "DEFAILLANT",
    "ECART_CONFIRME",
  ]);
  addListValidation(sheet, "N6:N8", ["ND", "OUI", "NON"]);
  addListValidation(sheet, "O6:O8", [
    "ND",
    "NON_EXAMINE",
    "COUVRE",
    "COUVRE_PARTIELLEMENT",
    "ECHEC_CAS_CRITIQUE",
  ]);
  addListValidation(sheet, "P6:Q8", ["ND", "OUI", "NON"]);
  statusRules(sheet.getRange("T6:T8"));
  table(sheet, "B5:T8", "T_Situations");
}

{
  const sheet = sheets["03_BASELINE"];
  setWidths(sheet, { A: 3, B: 18, C: 16, D: 16, E: 16, F: 16, G: 18, H: 26 });
  sheet.getRange("B5:I5").values = [
    [
      "Période",
      "Dénominateur",
      "Événements",
      "Médiane (min)",
      "Maximum (min)",
      "Taux exception",
      "Preuve / limite",
      "Statut",
    ],
  ];
  sheet.getRange("B6:H8").values = [
    [
      "Fonctionnement normal",
      420,
      18,
      20,
      150,
      0.043,
      "EXEMPLE FICTIF — semaine ordinaire",
    ],
    ["Période de tension", 610, 41, 28, 310, 0.067, "EXEMPLE FICTIF — clôture"],
    ["Cas rare critique", 1, 1, 55, 240, 1, "EXEMPLE FICTIF — ne pas moyenner"],
  ];
  for (let row = 6; row <= 8; row += 1) {
    sheet.getRange(`I${row}`).formulas = [
      [
        `=IF(COUNT(C${row}:G${row})=5,IF(AND(${formulaNonEmptyText(`B${row}`)},COUNTIF($B$6:$B$8,B${row})=1,C${row}>0,INT(C${row})=C${row},D${row}>=0,INT(D${row})=D${row},D${row}<=C${row},E${row}>=0,F${row}>=E${row},C${row}<=1000000,D${row}<=1000000,E${row}<=1000000,F${row}<=1000000,G${row}>=0,G${row}<=1,ROUND(G${row},4)=G${row},${formulaNonEmptyText(`H${row}`, 6)}),"PASS","INCOMPLET"),"INCOMPLET")`,
      ],
    ];
  }
  header(sheet.getRange("B5:I5"));
  body(sheet.getRange("B6:I8"), 64);
  input(sheet.getRange("B6:H8"));
  formula(sheet.getRange("I6:I8"));
  sheet.getRange("G6:G8").format.numberFormat = "0.0%";
  statusRules(sheet.getRange("I6:I8"));
  table(sheet, "B5:I8", "T_Baseline");
}

{
  const sheet = sheets["04_REGLES_EXCEPTIONS"];
  setWidths(sheet, { A: 3, B: 14, C: 28, D: 28, E: 28, F: 22, G: 18, H: 24 });
  sheet.getRange("B5:I5").values = [
    [
      "ID",
      "Condition",
      "Résultat attendu",
      "Exception / cas négatif",
      "Arbitre",
      "Version",
      "Contrôle",
      "Statut",
    ],
  ];
  sheet.getRange("B6:H11").values = [
    [
      "REG-01",
      "Remise > 12 %",
      "Validation commerciale",
      "Contrat-cadre",
      "Direction commerciale",
      "v1 — fictif",
      "Test positif + négatif",
    ],
    [
      "REG-02",
      "Commande validée",
      "Créneau proposé",
      "Capacité incertaine",
      "Responsable planning",
      "v1 — fictif",
      "Journal réservation",
    ],
    [
      "REG-03",
      "Client actif",
      "Dossier synchronisé",
      "Doublon d’identité",
      "Data owner",
      "v1 — fictif",
      "Rapprochement",
    ],
    [
      "REG-04",
      "Adresse modifiée",
      "Planning mis à jour",
      "Intervention commencée",
      "Opérations",
      "v1 — fictif",
      "Rejeu idempotent",
    ],
    [
      "REG-05",
      "Responsable absent",
      "Suppléant notifié",
      "Aucun suppléant",
      "Direction",
      "v1 — fictif",
      "Exercice mode dégradé",
    ],
    [
      "REG-06",
      "Export demandé",
      "Données + liens fournis",
      "Pièce inaccessible",
      "DSI / prestataire",
      "v1 — fictif",
      "Réimport de contrôle",
    ],
  ];
  for (let row = 6; row <= 11; row += 1) {
    sheet.getRange(`I${row}`).formulas = [
      [
        `=IF(AND(${["B", "C", "D", "E", "F", "G", "H"]
          .map((column) => formulaNonEmptyText(`${column}${row}`))
          .join(",")},COUNTIF($B$6:$B$11,B${row})=1),"PASS","INCOMPLET")`,
      ],
    ];
  }
  header(sheet.getRange("B5:I5"));
  body(sheet.getRange("B6:I11"), 72);
  input(sheet.getRange("B6:H11"));
  formula(sheet.getRange("I6:I11"));
  statusRules(sheet.getRange("I6:I11"));
  table(sheet, "B5:I11", "T_Regles");
}

{
  const sheet = sheets["05_OPTIONS_TESTS"];
  setWidths(sheet, {
    A: 3,
    B: 17,
    C: 24,
    D: 18,
    E: 18,
    F: 18,
    G: 18,
    H: 18,
    I: 18,
    J: 18,
    K: 22,
    L: 26,
    M: 26,
    N: 18,
  });
  sheet.getRange("B5:N5").values = [
    [
      "ID",
      "Option",
      "Action",
      "Option réelle confirmée",
      "Périmètre identique",
      "Cas courant",
      "Cas difficile",
      "Cas critique",
      "Export",
      "Mode dégradé",
      "Niveau de preuve",
      "Écart précis",
      "Statut",
    ],
  ];
  sheet.getRange("B6:M11").values = [
    [
      "OPT-01",
      "Corriger l’existant",
      "CORRIGER_STANDARDISER",
      "NON",
      "OUI",
      "PASS",
      "PASS",
      "PASS",
      "PASS",
      "PASS",
      "VERIFIE",
      "Ne traite pas la cause SIT-03",
    ],
    [
      "OPT-02",
      "Connecter CRM et planning",
      "INTEGRER_AUTOMATISER",
      "NON",
      "OUI",
      "PASS",
      "PASS",
      "PASS",
      "PASS",
      "PASS",
      "VERIFIE",
      "Dépend des identifiants",
    ],
    [
      "OPT-03",
      "Standard configuré",
      "ACHETER_CONFIGURER",
      "NON",
      "OUI",
      "PASS",
      "PASS",
      "ECHEC",
      "NON_TESTE",
      "PASS",
      "DECLARE",
      "Cas critique non rejoué",
    ],
    [
      "OPT-04",
      "Fonction sur mesure",
      "ETUDIER_SUR_MESURE",
      "NON",
      "OUI",
      "PASS",
      "PASS",
      "PASS",
      "PASS",
      "PASS",
      "VERIFIE",
      "Maintenance à financer",
    ],
    Array.from({ length: 12 }, () => "NON_UTILISE"),
    Array.from({ length: 12 }, () => "NON_UTILISE"),
  ];
  for (let row = OPTION_FIRST_ROW; row <= OPTION_LAST_ROW; row += 1) {
    sheet.getRange(`N${row}`).formulas = [[optionStatusFormula(row)]];
  }
  header(sheet.getRange("B5:N5"));
  body(sheet.getRange("B6:N11"), 76);
  input(sheet.getRange("B6:M11"));
  formula(sheet.getRange("N6:N11"));
  addListValidation(sheet, "D6:D11", [...OPTION_ACTIONS, "NON_UTILISE"]);
  addListValidation(sheet, "E6:F11", ["NON_UTILISE", "ND", "OUI", "NON"]);
  addListValidation(sheet, "G6:K11", [
    "NON_UTILISE",
    "ND",
    "NON_TESTE",
    "PASS",
    "ECHEC",
  ]);
  addListValidation(sheet, "L6:L11", [
    "NON_UTILISE",
    "ND",
    "DECLARE",
    "VERIFIE",
    "ECHEC",
  ]);
  statusRules(sheet.getRange("G6:N11"));
  table(sheet, "B5:N11", "T_OptionsTests");
}

{
  const sheet = sheets["06_TCO_12_36_60"];
  setWidths(sheet, {
    A: 3,
    B: 17,
    C: 27,
    D: 18,
    E: 18,
    F: 18,
    G: 17,
    H: 17,
    I: 18,
    J: 18,
    K: 18,
  });
  sheet.getRange("B5:K5").values = [
    [
      "ID",
      "Option",
      "Mise en place (€)",
      "Fonctionnement / mois (€)",
      "Sortie (€)",
      "Même périmètre",
      "Cas critiques rejoués",
      "TCO 12 mois",
      "TCO 36 mois",
      "TCO 60 mois",
    ],
  ];
  sheet.getRange("B6:H11").values = [
    ["OPT-01", "Corriger l’existant", 4800, 320, 1000, "OUI", "OUI"],
    ["OPT-02", "Connecter CRM et planning", 14000, 760, 4000, "OUI", "OUI"],
    ["OPT-03", "Standard configuré", 31000, 1450, null, "OUI", "NON"],
    ["OPT-04", "Fonction sur mesure", 78000, 2100, 12000, "OUI", "OUI"],
    [
      "NON_UTILISE",
      "NON_UTILISE",
      null,
      null,
      null,
      "NON_UTILISE",
      "NON_UTILISE",
    ],
    [
      "NON_UTILISE",
      "NON_UTILISE",
      null,
      null,
      null,
      "NON_UTILISE",
      "NON_UTILISE",
    ],
  ];
  for (let row = OPTION_FIRST_ROW; row <= OPTION_LAST_ROW; row += 1) {
    for (const [column, months] of [
      ["I", 12],
      ["J", 36],
      ["K", 60],
    ]) {
      sheet.getRange(`${column}${row}`).formulas = [[tcoFormula(row, months)]];
    }
  }
  header(sheet.getRange("B5:K5"));
  body(sheet.getRange("B6:K11"), 62);
  input(sheet.getRange("B6:H11"));
  formula(sheet.getRange("I6:K11"));
  sheet.getRange("D6:F11").format.numberFormat = '#,##0.00 "€"';
  sheet.getRange("I6:K11").format.numberFormat = '#,##0.00 "€"';
  addListValidation(sheet, "G6:H11", ["NON_UTILISE", "ND", "OUI", "NON"]);
  statusRules(sheet.getRange("I6:K11"));
  table(sheet, "B5:K11", "T_TCO");
}

{
  const sheet = sheets["07_RISQUES_STOP"];
  setWidths(sheet, { A: 3, B: 28, C: 18, D: 28, E: 28, F: 20, G: 18, H: 3 });
  sheet.getRange("B5:G5").values = [
    [
      "Porte",
      "Valeur",
      "Preuve attendue",
      "Action si échec",
      "Responsable",
      "Statut",
    ],
  ];
  sheet.getRange("B6:F9").values = [
    [
      "Incident / exposition active",
      "NON",
      "Qualification spécialisée",
      "Réponse à incident",
      "Direction / sécurité",
    ],
    [
      "Restauration utile prouvée",
      "OUI",
      "PV de restauration",
      "Restaurer et exercer",
      "Exploitation",
    ],
    [
      "Accès privilégiés maîtrisés",
      "OUI",
      "Revue + départ exercé",
      "Révoquer et nommer",
      "Responsable accès",
    ],
    [
      "Mode dégradé critique testé",
      "OUI",
      "Exercice chronométré",
      "Préparer le secours",
      "Responsable métier",
    ],
  ];
  sheet.getRange("G6").formulas = [
    ['=IF(C6="OUI","STOP",IF(C6="NON","PASS","INCOMPLET"))'],
  ];
  sheet.getRange("G7").formulas = [
    ['=IF(C7="NON","STOP",IF(C7="OUI","PASS","INCOMPLET"))'],
  ];
  sheet.getRange("G8").formulas = [
    ['=IF(C8="NON","STOP",IF(C8="OUI","PASS","INCOMPLET"))'],
  ];
  sheet.getRange("G9").formulas = [
    ['=IF(C9="NON","STOP",IF(C9="OUI","PASS","INCOMPLET"))'],
  ];
  sheet.getRange("B11:F11").values = [["PORTE GLOBALE", "", "", "", ""]];
  sheet.getRange("G11").formulas = [
    [
      '=IF(COUNTIF(G6:G9,"STOP")>0,"STOP",IF(COUNTIF(G6:G9,"INCOMPLET")>0,"INCOMPLET","PASS"))',
    ],
  ];
  header(sheet.getRange("B5:G5"));
  body(sheet.getRange("B6:G9"), 66);
  body(sheet.getRange("B11:G11"), 46);
  input(sheet.getRange("B6:F9"));
  formula(sheet.getRange("G6:G11"));
  addListValidation(sheet, "C6:C9", ["ND", "OUI", "NON"]);
  statusRules(sheet.getRange("G6:G11"));
  table(sheet, "B5:G9", "T_Risques");
}

{
  const sheet = sheets["08_PILOTE"];
  setWidths(sheet, {
    A: 3,
    B: 14,
    C: 24,
    D: 24,
    E: 24,
    F: 24,
    G: 22,
    H: 20,
    I: 18,
    J: 18,
  });
  sheet.getRange("B5:J5").values = [
    [
      "Phase",
      "Cas / population",
      "Baseline",
      "Critère STOP",
      "Critère continuer",
      "Rollback",
      "Responsable",
      "Date de revue",
      "Statut",
    ],
  ];
  sheet.getRange("B6:I12").values = [
    [
      "J1–J5 — EXEMPLE FICTIF",
      "Trois situations, utilisateurs nommés",
      "Volumes et temps gelés",
      "Sécurité non maîtrisée",
      "Dossier testable",
      "Mode manuel",
      "Responsable métier",
      dateSerial("2026-08-02"),
    ],
    [
      "J6–J10 — EXEMPLE FICTIF",
      "Import expurgé et cas limites",
      "Qualité initiale",
      "Réconciliation impossible",
      "Données rapprochées",
      "Restaurer l’environnement",
      "Data owner",
      dateSerial("2026-08-07"),
    ],
    [
      "J11–J20 — EXEMPLE FICTIF",
      "Utilisateurs réels bornés",
      "Parcours avant",
      "Incident éliminatoire",
      "Cas critiques réussis",
      "Retour à l’outil actuel",
      "Pilote",
      dateSerial("2026-08-17"),
    ],
    [
      "J21–J25 — EXEMPLE FICTIF",
      "Erreurs et accessibilité",
      "Taux d’exception",
      "Contournement persistant",
      "Résultat reproductible",
      "Correction puis rejeu",
      "UX / exploitation",
      dateSerial("2026-08-22"),
    ],
    [
      "J26–J30 — EXEMPLE FICTIF",
      "Décision collective",
      "TCO actualisé",
      "Inconnue critique",
      "Décision humaine écrite",
      "Arrêt documenté",
      "Sponsor",
      dateSerial("2026-08-27"),
    ],
    [
      "Suivi +30 après pilote — EXEMPLE FICTIF",
      "Adoption, support et dépendances",
      "Usage et incidents depuis J30",
      "Dépendance cachée ou risque critique",
      "Service exploitable et écarts bornés",
      "Retour à la voie précédente",
      "Responsable exploitation",
      dateSerial("2026-09-26"),
    ],
    [
      "Suivi +90 après pilote — EXEMPLE FICTIF",
      "Charge, coût complet et sortie",
      "TCO et qualité depuis J30",
      "Résultat non durable ou sortie impossible",
      "Décision humaine et prochaine revue",
      "Arrêt ou réduction documentés",
      "Sponsor et responsable métier",
      dateSerial("2026-11-25"),
    ],
  ];
  for (let row = 6; row <= 12; row += 1) {
    const followUpConstraint =
      row === 11 ? ",I11=I10+30" : row === 12 ? ",I12=I10+90" : "";
    sheet.getRange(`J${row}`).formulas = [
      [
        `=IF(ISNUMBER(I${row}),IF(AND(${["B", "C", "D", "E", "F", "G", "H"]
          .map((column) => formulaNonEmptyText(`${column}${row}`))
          .join(
            ",",
          )},INT(I${row})=I${row},I${row}<=${MAX_DATE_SERIAL},I${row}>'01_DOSSIER'!C9,I${row}<='01_DOSSIER'!C14,COUNTIF($I$6:$I$12,I${row})=1${row > 6 ? `,I${row}>I${row - 1}` : ""}${followUpConstraint}),"PASS","INCOMPLET"),"INCOMPLET")`,
      ],
    ];
  }
  header(sheet.getRange("B5:J5"));
  body(sheet.getRange("B6:J12"), 78);
  input(sheet.getRange("B6:I12"));
  formula(sheet.getRange("J6:J12"));
  sheet.getRange("I6:I12").format.numberFormat = "yyyy-mm-dd";
  statusRules(sheet.getRange("J6:J12"));
  table(sheet, "B5:J12", "T_Pilote");
}

{
  const sheet = sheets["09_DECISION"];
  setWidths(sheet, {
    A: 3,
    B: 24,
    C: 16,
    D: 27,
    E: 16,
    F: 34,
    G: 28,
    H: 22,
    I: 18,
  });
  sheet.getRange("B5:I5").values = [
    [
      "Domaine de preuve",
      "Statut",
      "Référence expurgée",
      "Date de preuve",
      "Preuve attendue",
      "Sources",
      "Responsable",
      "Contrôle",
    ],
  ];
  sheet.getRange("B6:H13").values = proofs.map((proof) => [
    proof.label,
    "DECLARE",
    "",
    "",
    proof.expected,
    proof.sourceIds.join(" | "),
    "À nommer",
  ]);
  sheet.getRange("I6:I13").formulas = proofs.map((_, index) => [
    `=IF(C${index + 6}="ECHEC","STOP",IF(C${index + 6}<>"VERIFIE","INCOMPLET",IF(ISNUMBER(E${index + 6}),IF(AND(${formulaNonEmptyText(`B${index + 6}`)},COUNTIF($B$6:$B$13,B${index + 6})=1,${formulaNonEmptyText(`D${index + 6}`, 6)},COUNTIF($D$6:$D$13,D${index + 6})=1,INT(E${index + 6})=E${index + 6},E${index + 6}>=${MIN_DATE_SERIAL},E${index + 6}<='01_DOSSIER'!C9,E${index + 6}<='01_DOSSIER'!C11,${formulaNonEmptyText(`H${index + 6}`)}),"PASS","INCOMPLET"),"INCOMPLET")))`,
  ]);
  sheet.getRange("B15:H15").values = [["ÉTAT GLOBAL", "", "", "", "", "", ""]];
  sheet.getRange("I15").formulas = [
    [
      `=IF('07_RISQUES_STOP'!G11="STOP","SECURISER_D_ABORD",IF(OR(${GLOBAL_INVALID_CHECKS}),"INVALIDE",IF(OR('07_RISQUES_STOP'!G11<>"PASS",COUNTIF('02_SITUATIONS'!T6:T8,"INCOMPLET")>0,COUNTIF('02_SITUATIONS'!M6:M8,"NON_TESTE")>0,COUNTIF('02_SITUATIONS'!O6:O8,"NON_EXAMINE")>0,COUNTIF('02_SITUATIONS'!T6:T8,"OBSERVER")+COUNTIF('02_SITUATIONS'!T6:T8,"CORRIGER_STANDARDISER")+COUNTIF('02_SITUATIONS'!T6:T8,"INTEGRER_AUTOMATISER")+COUNTIF('02_SITUATIONS'!T6:T8,"ACHETER_CONFIGURER")+COUNTIF('02_SITUATIONS'!T6:T8,"ETUDIER_SUR_MESURE")<>3,COUNTIF('03_BASELINE'!I6:I8,"PASS")<>3,COUNTIF('04_REGLES_EXCEPTIONS'!I6:I11,"PASS")<>6,COUNTIF('05_OPTIONS_TESTS'!N6:N11,"PASS")<2,COUNTIF('05_OPTIONS_TESTS'!N6:N11,"PASS")+COUNTIF('05_OPTIONS_TESTS'!N6:N11,"NON_UTILISE")<>6,${OPTION_ACTIONS.map((action) => `AND(COUNTIF('02_SITUATIONS'!T6:T8,"${action}")>0,COUNTIF('05_OPTIONS_TESTS'!D6:D11,"${action}")=0)`).join(",")},'00_MODE_EMPLOI'!C7<>"DONNEES_REELLES",'00_MODE_EMPLOI'!C8<>"OUI",'01_DOSSIER'!C12<>"OUI",AND('01_DOSSIER'!C13<>"OUI",'01_DOSSIER'!C13<>"NON"),COUNTIF(I6:I13,"PASS")<>8,COUNTIF('06_TCO_12_36_60'!I6:K11,"ND")>0,COUNT('06_TCO_12_36_60'!I6:K11)<>3*COUNTIF('05_OPTIONS_TESTS'!N6:N11,"PASS"),COUNTIF('06_TCO_12_36_60'!I6:K11,"NON_UTILISE")<>3*COUNTIF('05_OPTIONS_TESTS'!N6:N11,"NON_UTILISE"),COUNTIF('01_DOSSIER'!G6:G12,"PASS")<>7,'01_DOSSIER'!G14<>"PASS",COUNTIF('08_PILOTE'!J6:J12,"PASS")<>7,COUNTA('12_SOURCES'!B6:B${5 + sources.length})<>${sources.length}),"INCOMPLET",IF('01_DOSSIER'!C13="OUI","DECISION_HUMAINE",IF(COUNTIF('02_SITUATIONS'!T6:T8,"OBSERVER")=3,"OBSERVER",IF(COUNTIF('02_SITUATIONS'!T6:T8,"CORRIGER_STANDARDISER")=3,"CORRIGER_STANDARDISER","COMPARER_PILOTER"))))))`,
    ],
  ];
  // Le web et le classeur utilisent le même état global fail-closed :
  // les détails restent distingués dans les contrôles, mais l’état est INCOMPLET.
  sheet.getRange("I15").formulas = [
    [sheet.getRange("I15").formulas[0][0].replace('"INVALIDE"', '"INCOMPLET"')],
  ];
  sheet.getRange("B16:H16").values = [["EXPORT FINAL", "", "", "", "", "", ""]];
  sheet.getRange("I16").formulas = [
    ['=IF(I15="DECISION_HUMAINE","AUTORISE","BLOQUE")'],
  ];
  header(sheet.getRange("B5:I5"));
  body(sheet.getRange("B6:I13"), 92);
  body(sheet.getRange("B15:I16"), 48);
  input(sheet.getRange("C6:E13"));
  input(sheet.getRange("H6:H13"));
  formula(sheet.getRange("I6:I16"));
  sheet.getRange("E6:E13").format.numberFormat = "yyyy-mm-dd";
  addListValidation(sheet, "C6:C13", ["ND", "DECLARE", "VERIFIE", "ECHEC"]);
  statusRules(sheet.getRange("I6:I16"));
  table(sheet, "B5:I13", "T_Decision");
}

{
  const sheet = sheets["10_DICTIONNAIRE"];
  setWidths(sheet, { A: 3, B: 24, C: 22, D: 36, E: 30, F: 24, G: 18, H: 3 });
  sheet.getRange("B5:G5").values = [
    [
      "Terme",
      "Unité / valeurs",
      "Définition",
      "Ne signifie pas",
      "Propriétaire",
      "Statut",
    ],
  ];
  sheet.getRange("B6:G17").values = [
    [
      "ND",
      "texte",
      "Inconnu conservé explicitement",
      "Zéro",
      "Auteur du champ",
      "PASS",
    ],
    [
      "Temps actif",
      "minutes",
      "Travail réellement mobilisé",
      "Temps d’attente",
      "Responsable métier",
      "PASS",
    ],
    [
      "Temps d’attente",
      "minutes",
      "Délai entre deux étapes",
      "Salaire économisable",
      "Responsable métier",
      "PASS",
    ],
    [
      "TCO",
      "EUR / horizon",
      "Coût total comparable du cycle",
      "Prix initial seul",
      "Sponsor",
      "PASS",
    ],
    [
      "ERP",
      "catégorie",
      "Système intégré de fonctions et référentiels",
      "Sur-mesure automatique",
      "Direction",
      "PASS",
    ],
    [
      "COTS / standard",
      "catégorie",
      "Produit existant configuré",
      "Couverture prouvée",
      "Acheteur",
      "PASS",
    ],
    [
      "Low-code / no-code",
      "catégorie",
      "Plateforme de construction",
      "Absence de maintenance",
      "Owner plateforme",
      "PASS",
    ],
    [
      "RTO",
      "durée",
      "Temps de reprise dérivé de l’impact",
      "Délai éditeur générique",
      "Métier / exploitation",
      "PASS",
    ],
    [
      "RPO",
      "durée / opérations",
      "Point de données récupérable",
      "Fréquence de sauvegarde seule",
      "Data owner",
      "PASS",
    ],
    [
      "Capacité",
      "heures",
      "Temps potentiellement réaffectable",
      "Économie de trésorerie",
      "Direction",
      "PASS",
    ],
    [
      "Preuve déclarée",
      "DECLARE",
      "Affirmation non encore vérifiée",
      "Test réussi",
      "Auteur",
      "PASS",
    ],
    [
      "Décision humaine",
      "état",
      "Arbitrage signé avec limites et expiration",
      "Score automatique",
      "Sponsor",
      "PASS",
    ],
  ];
  header(sheet.getRange("B5:G5"));
  body(sheet.getRange("B6:G17"), 64);
  statusRules(sheet.getRange("G6:G17"));
  table(sheet, "B5:G17", "T_Dictionnaire");
}

{
  const sheet = sheets["11_CONTROLES"];
  setWidths(sheet, { A: 3, B: 14, C: 34, D: 32, E: 26, F: 20, G: 18, H: 3 });
  sheet.getRange("B5:G5").values = [
    ["ID", "Contrôle", "Attendu", "Observé", "Portée", "Statut"],
  ];
  const controls = [
    [
      "CTL-01",
      "Provenance reconnue",
      "EXEMPLE_FICTIF ou DONNEES_REELLES",
      "00_MODE_EMPLOI!C7",
      "Gouvernance",
      '=IF(OR(\'00_MODE_EMPLOI\'!C7="EXEMPLE_FICTIF",\'00_MODE_EMPLOI\'!C7="DONNEES_REELLES"),"PASS","STOP")',
    ],
    [
      "CTL-02",
      "Confirmation du mode typée",
      "OUI ou NON",
      "00_MODE_EMPLOI!C8",
      "Gouvernance",
      '=IF(OR(\'00_MODE_EMPLOI\'!C8="OUI",\'00_MODE_EMPLOI\'!C8="NON"),"PASS","STOP")',
    ],
    [
      "CTL-03",
      "Confirmations dossier typées",
      "OUI/NON x2",
      "01_DOSSIER!C12:C13",
      "Gouvernance",
      '=IF(AND(OR(\'01_DOSSIER\'!C12="OUI",\'01_DOSSIER\'!C12="NON"),OR(\'01_DOSSIER\'!C13="OUI",\'01_DOSSIER\'!C13="NON")),"PASS","STOP")',
    ],
    [
      "CTL-04",
      "Gouvernance dossier",
      "7 PASS + expiration PASS",
      "01_DOSSIER!G6:G14",
      "Gouvernance",
      '=IF(AND(COUNTIF(\'01_DOSSIER\'!G6:G12,"PASS")=7,\'01_DOSSIER\'!G14="PASS"),"PASS","STOP")',
    ],
    [
      "CTL-05",
      "Trois situations instruites",
      "3 voies canoniques",
      "02_SITUATIONS!T6:T8",
      "Structure",
      '=IF(COUNTIF(\'02_SITUATIONS\'!T6:T8,"OBSERVER")+COUNTIF(\'02_SITUATIONS\'!T6:T8,"CORRIGER_STANDARDISER")+COUNTIF(\'02_SITUATIONS\'!T6:T8,"INTEGRER_AUTOMATISER")+COUNTIF(\'02_SITUATIONS\'!T6:T8,"ACHETER_CONFIGURER")+COUNTIF(\'02_SITUATIONS\'!T6:T8,"ETUDIER_SUR_MESURE")=3,"PASS","STOP")',
    ],
    [
      "CTL-06",
      "Identités situations distinctes",
      "IDs, titres, preuves uniques",
      "02_SITUATIONS!B6:E8",
      "Traçabilité",
      "=IF(AND(COUNTIF('02_SITUATIONS'!B6:B8,'02_SITUATIONS'!B6)=1,COUNTIF('02_SITUATIONS'!B6:B8,'02_SITUATIONS'!B7)=1,COUNTIF('02_SITUATIONS'!B6:B8,'02_SITUATIONS'!B8)=1,COUNTIF('02_SITUATIONS'!C6:C8,'02_SITUATIONS'!C6)=1,COUNTIF('02_SITUATIONS'!C6:C8,'02_SITUATIONS'!C7)=1,COUNTIF('02_SITUATIONS'!C6:C8,'02_SITUATIONS'!C8)=1,COUNTIF('02_SITUATIONS'!E6:E8,'02_SITUATIONS'!E6)=1,COUNTIF('02_SITUATIONS'!E6:E8,'02_SITUATIONS'!E7)=1,COUNTIF('02_SITUATIONS'!E6:E8,'02_SITUATIONS'!E8)=1),\"PASS\",\"STOP\")",
    ],
    [
      "CTL-07",
      "Baseline vérifiée",
      "3 PASS",
      "03_BASELINE!I6:I8",
      "Mesure",
      '=IF(COUNTIF(\'03_BASELINE\'!I6:I8,"PASS")=3,"PASS","STOP")',
    ],
    [
      "CTL-08",
      "Règles vérifiées",
      "6 PASS",
      "04_REGLES_EXCEPTIONS!I6:I11",
      "Règles",
      '=IF(COUNTIF(\'04_REGLES_EXCEPTIONS\'!I6:I11,"PASS")=6,"PASS","STOP")',
    ],
    [
      "CTL-09",
      "États options reconnus",
      "6 états canoniques",
      "05_OPTIONS_TESTS!N6:N11",
      "Options",
      '=IF(COUNTIF(\'05_OPTIONS_TESTS\'!N6:N11,"PASS")+COUNTIF(\'05_OPTIONS_TESTS\'!N6:N11,"STOP")+COUNTIF(\'05_OPTIONS_TESTS\'!N6:N11,"INCOMPLET")+COUNTIF(\'05_OPTIONS_TESTS\'!N6:N11,"NON_UTILISE")=6,"PASS","STOP")',
    ],
    [
      "CTL-10",
      "Deux à six options actives",
      ">=2 PASS, reste NON_UTILISE",
      "05_OPTIONS_TESTS!N6:N11",
      "Options",
      '=IF(AND(COUNTIF(\'05_OPTIONS_TESTS\'!N6:N11,"PASS")>=2,COUNTIF(\'05_OPTIONS_TESTS\'!N6:N11,"PASS")+COUNTIF(\'05_OPTIONS_TESTS\'!N6:N11,"NON_UTILISE")=6),"PASS","STOP")',
    ],
    [
      "CTL-11",
      "Couverture des actions",
      "Chaque voie a une option",
      "02_SITUATIONS!T6:T8 ↔ 05_OPTIONS_TESTS!D6:D11",
      "Options",
      `=IF(OR(${OPTION_ACTIONS.map((action) => `AND(COUNTIF('02_SITUATIONS'!T6:T8,"${action}")>0,COUNTIF('05_OPTIONS_TESTS'!D6:D11,"${action}")=0)`).join(",")}),"STOP","PASS")`,
    ],
    [
      "CTL-12",
      "TCO complets ou non utilisés",
      "3 horizons par option active",
      "06_TCO_12_36_60!I6:K11",
      "TCO",
      '=IF(AND(COUNTIF(\'06_TCO_12_36_60\'!I6:K11,"ND")=0,COUNT(\'06_TCO_12_36_60\'!I6:K11)=3*COUNTIF(\'05_OPTIONS_TESTS\'!N6:N11,"PASS"),COUNTIF(\'06_TCO_12_36_60\'!I6:K11,"NON_UTILISE")=3*COUNTIF(\'05_OPTIONS_TESTS\'!N6:N11,"NON_UTILISE")),"PASS","STOP")',
    ],
    [
      "CTL-13",
      "Correspondance options / TCO",
      "6 lignes alignées",
      "05_OPTIONS_TESTS!B6:C11 ↔ 06_TCO_12_36_60!B6:C11",
      "TCO",
      "=IF(AND('05_OPTIONS_TESTS'!B6='06_TCO_12_36_60'!B6,'05_OPTIONS_TESTS'!C6='06_TCO_12_36_60'!C6,'05_OPTIONS_TESTS'!B7='06_TCO_12_36_60'!B7,'05_OPTIONS_TESTS'!C7='06_TCO_12_36_60'!C7,'05_OPTIONS_TESTS'!B8='06_TCO_12_36_60'!B8,'05_OPTIONS_TESTS'!C8='06_TCO_12_36_60'!C8,'05_OPTIONS_TESTS'!B9='06_TCO_12_36_60'!B9,'05_OPTIONS_TESTS'!C9='06_TCO_12_36_60'!C9,'05_OPTIONS_TESTS'!B10='06_TCO_12_36_60'!B10,'05_OPTIONS_TESTS'!C10='06_TCO_12_36_60'!C10,'05_OPTIONS_TESTS'!B11='06_TCO_12_36_60'!B11,'05_OPTIONS_TESTS'!C11='06_TCO_12_36_60'!C11),\"PASS\",\"STOP\")",
    ],
    [
      "CTL-14",
      "Porte sécurité reconnue",
      "PASS / STOP / INCOMPLET",
      "07_RISQUES_STOP!G11",
      "Sécurité",
      '=IF(OR(\'07_RISQUES_STOP\'!G11="PASS",\'07_RISQUES_STOP\'!G11="STOP",\'07_RISQUES_STOP\'!G11="INCOMPLET"),"PASS","STOP")',
    ],
    [
      "CTL-15",
      "Porte sécurité ouverte",
      "PASS",
      "07_RISQUES_STOP!G11",
      "Sécurité",
      '=IF(\'07_RISQUES_STOP\'!G11="PASS","PASS","STOP")',
    ],
    [
      "CTL-16",
      "Plan de pilote documenté",
      "7 jalons PASS",
      "08_PILOTE!J6:J12",
      "Pilote",
      '=IF(COUNTIF(\'08_PILOTE\'!J6:J12,"PASS")=7,"PASS","STOP")',
    ],
    [
      "CTL-17",
      "Huit preuves",
      "8",
      "09_DECISION!B6:B13",
      "Structure",
      '=IF(COUNTA(\'09_DECISION\'!B6:B13)=8,"PASS","STOP")',
    ],
    [
      "CTL-18",
      "États preuves reconnus",
      "8 états canoniques",
      "09_DECISION!I6:I13",
      "Preuves",
      '=IF(COUNTIF(\'09_DECISION\'!I6:I13,"PASS")+COUNTIF(\'09_DECISION\'!I6:I13,"STOP")+COUNTIF(\'09_DECISION\'!I6:I13,"INCOMPLET")=8,"PASS","STOP")',
    ],
    [
      "CTL-19",
      "Huit preuves vérifiées",
      "8 PASS",
      "09_DECISION!I6:I13",
      "Preuves",
      '=IF(COUNTIF(\'09_DECISION\'!I6:I13,"PASS")=8,"PASS","STOP")',
    ],
    [
      "CTL-20",
      "Chronologie cohérente",
      "Arrêté, revue, expiration PASS",
      "01_DOSSIER!G9,G11,G14",
      "Dates",
      '=IF(AND(\'01_DOSSIER\'!G9="PASS",\'01_DOSSIER\'!G11="PASS",\'01_DOSSIER\'!G14="PASS"),"PASS","STOP")',
    ],
    [
      "CTL-21",
      "État global reconnu",
      "État canonique",
      "09_DECISION!I15",
      "Fail-closed",
      '=IF(OR(\'09_DECISION\'!I15="SECURISER_D_ABORD",\'09_DECISION\'!I15="INCOMPLET",\'09_DECISION\'!I15="OBSERVER",\'09_DECISION\'!I15="CORRIGER_STANDARDISER",\'09_DECISION\'!I15="COMPARER_PILOTER",\'09_DECISION\'!I15="DECISION_HUMAINE"),"PASS","STOP")',
    ],
    [
      "CTL-22",
      "Export cohérent avec l’état",
      "AUTORISE seulement si décision humaine",
      "09_DECISION!I15:I16",
      "Fail-closed",
      '=IF(OR(AND(\'09_DECISION\'!I15="DECISION_HUMAINE",\'09_DECISION\'!I16="AUTORISE"),AND(\'09_DECISION\'!I15<>"DECISION_HUMAINE",\'09_DECISION\'!I16="BLOQUE")),"PASS","STOP")',
    ],
    [
      "CTL-23",
      "Exemple livré bloqué",
      "BLOQUE avant données réelles",
      "00_MODE_EMPLOI!C7 + 09_DECISION!I16",
      "Fail-closed",
      '=IF(OR(\'00_MODE_EMPLOI\'!C7="DONNEES_REELLES",\'09_DECISION\'!I16="BLOQUE"),"PASS","STOP")',
    ],
    [
      "CTL-24",
      "Sources officielles bornées",
      String(sources.length),
      `12_SOURCES!B6:B${5 + sources.length}`,
      "Sources",
      `=IF(COUNTA('12_SOURCES'!B6:B${5 + sources.length})=${sources.length},"PASS","STOP")`,
    ],
  ];
  sheet.getRange("B6:F29").values = controls.map((row) => row.slice(0, 5));
  sheet.getRange("G6:G29").formulas = controls.map((row) => [row[5]]);
  header(sheet.getRange("B5:G5"));
  body(sheet.getRange("B6:G29"), 56);
  formula(sheet.getRange("G6:G29"));
  statusRules(sheet.getRange("G6:G29"));
  table(sheet, "B5:G29", "T_Controles");
}

{
  const sheet = sheets["12_SOURCES"];
  setWidths(sheet, {
    A: 3,
    B: 20,
    C: 25,
    D: 34,
    E: 44,
    F: 15,
    G: 50,
    H: 50,
    I: 18,
  });
  sheet.getRange("B5:I5").values = [
    [
      "ID",
      "Éditeur",
      "Titre",
      "URL",
      "Consulté le",
      "Portée",
      "Limites",
      "Statut",
    ],
  ];
  const last = 5 + sources.length;
  sheet.getRange(`B6:I${last}`).values = sources.map((source) => [
    source.id,
    source.publisher,
    source.title,
    source.url,
    source.accessedOn,
    source.scope,
    source.limits,
    "VERIFIE",
  ]);
  header(sheet.getRange("B5:I5"));
  body(sheet.getRange(`B6:I${last}`), 104);
  sheet.getRange(`E6:E${last}`).format.font = {
    color: colors.blue,
    underline: true,
  };
  statusRules(sheet.getRange(`I6:I${last}`));
  table(sheet, `B5:I${last}`, "T_Sources");
}

for (const name of sheetNames) {
  sheets[name].freezePanes.freezeRows(5);
}
sheets["02_SITUATIONS"].freezePanes.freezeColumns(2);
sheets["12_SOURCES"].freezePanes.freezeColumns(2);

workbook.comments.addThread(
  { cell: sheets["00_MODE_EMPLOI"].getRange("C7") },
  "Les valeurs livrées sont fictives et ne représentent ni une fréquence, ni un prix, ni une moyenne de marché.",
);
workbook.comments.addThread(
  { cell: sheets["09_DECISION"].getRange("I16") },
  "L’export final reste bloqué tant que provenance, preuves, TCO, responsables et décision humaine ne sont pas confirmés.",
);

const inspect = await workbook.inspect({
  kind: "workbook,sheet,table,formula",
  maxChars: 32_000,
  tableMaxRows: 6,
  tableMaxCols: 12,
  options: { maxResults: 180 },
});
await fs.writeFile(
  path.join(outputDir, "generation-inspect.ndjson"),
  `${inspect.ndjson}\n`,
  "utf8",
);

const xlsx = await SpreadsheetFile.exportXlsx(workbook);
await xlsx.save(outputPath);

const archiveDir = await fs.mkdtemp(path.join(outputDir, ".freeze-"));
try {
  await execFileAsync("/usr/bin/unzip", ["-qq", outputPath, "-d", archiveDir]);
  for (let index = 0; index < sheetNames.length; index += 1) {
    const sheetPath = path.join(
      archiveDir,
      "xl",
      "worksheets",
      `sheet${index + 1}.xml`,
    );
    let xml = await fs.readFile(sheetPath, "utf8");
    const freezeColumns = [2, 12].includes(index);
    const pane = `<x:pane${freezeColumns ? ' xSplit="2"' : ""} ySplit="5" topLeftCell="${freezeColumns ? "C6" : "A6"}" activePane="${freezeColumns ? "bottomRight" : "bottomLeft"}" state="frozen" /><x:selection pane="${freezeColumns ? "bottomRight" : "bottomLeft"}" />`;
    xml = xml.replace(
      /<x:sheetView([^>]*)\/>/,
      `<x:sheetView$1>${pane}</x:sheetView>`,
    );
    if (!xml.includes('state="frozen"')) {
      throw new Error(`Volet figé non sérialisé : ${sheetNames[index]}`);
    }
    await fs.writeFile(sheetPath, xml, "utf8");
  }
  const patched = path.join(outputDir, `.patched-${process.pid}.xlsx`);
  await execFileAsync("/usr/bin/zip", ["-qr", patched, "."], {
    cwd: archiveDir,
  });
  await fs.rename(patched, outputPath);
} finally {
  await fs.rm(archiveDir, { recursive: true, force: true });
}

await fs.copyFile(outputPath, publicPath);
console.log(
  JSON.stringify(
    {
      status: "GENERATED",
      sheets: sheetNames.length,
      sources: sources.length,
      proofs: proofs.length,
      outputPath,
      publicPath,
      note: "Généré avec @oai/artifact-tool ; aucune recalculation Microsoft Excel réelle.",
    },
    null,
    2,
  ),
);
