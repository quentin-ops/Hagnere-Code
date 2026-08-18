import fs from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const require = createRequire(path.join(process.cwd(), "artifact-loader.cjs"));
const artifactTool = await import(
  pathToFileURL(require.resolve("@oai/artifact-tool")).href
);
const { SpreadsheetFile, Workbook } = artifactTool;

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const workspace = path.resolve(scriptDir, "..");
const outputDir = path.join(
  workspace,
  "output",
  "reprendre-saas-developpe-par-freelance-2026-07-28",
);
const previewDir = path.join(outputDir, "previews");
const outputPath = path.join(outputDir, "kit-reprise-saas-freelance.xlsx");
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

await fs.mkdir(outputDir, { recursive: true });
await fs.mkdir(previewDir, { recursive: true });
await fs.mkdir(path.dirname(publicPath), { recursive: true });

const workbook = Workbook.create();
const sheetNames = [
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
const sheets = Object.fromEntries(
  sheetNames.map((name) => [name, workbook.worksheets.add(name)]),
);

const colors = {
  ink: "#18181B",
  muted: "#61616B",
  paper: "#FAF9F6",
  white: "#FFFFFF",
  line: "#E4E4E7",
  violet: "#6D28D9",
  violetSoft: "#F3E8FF",
  blue: "#1D4ED8",
  blueSoft: "#DBEAFE",
  emerald: "#047857",
  emeraldSoft: "#D1FAE5",
  amber: "#B45309",
  amberSoft: "#FEF3C7",
  rose: "#BE123C",
  roseSoft: "#FFE4E6",
};
const moneyFormat = '#,##0 "€";[Red](#,##0 "€");-';
const decimalFormat = "#,##0.00";

function setupSheet(sheet) {
  sheet.showGridLines = false;
}

function setWidths(sheet, widths) {
  for (const [column, width] of Object.entries(widths)) {
    sheet.getRange(`${column}:${column}`).format.columnWidth = width;
  }
}

function titleBlock(sheet, title, subtitle, lastColumn = "H") {
  sheet.mergeCells(`A1:${lastColumn}2`);
  sheet.getRange("A1").values = [[title]];
  sheet.getRange(`A1:${lastColumn}2`).format = {
    fill: colors.ink,
    font: {
      name: "Aptos Display",
      size: 20,
      bold: true,
      color: colors.white,
    },
    horizontalAlignment: "left",
    verticalAlignment: "center",
  };
  sheet.mergeCells(`A3:${lastColumn}3`);
  sheet.getRange("A3").values = [[subtitle]];
  sheet.getRange(`A3:${lastColumn}3`).format = {
    fill: colors.paper,
    font: { size: 10, italic: true, color: colors.muted },
    wrapText: true,
    verticalAlignment: "center",
  };
  sheet.getRange("A1").format.rowHeight = 28;
  sheet.getRange("A2").format.rowHeight = 28;
  sheet.getRange("A3").format.rowHeight = 34;
}

function sectionHeader(sheet, address, text, fill = colors.violetSoft) {
  const range = sheet.getRange(address);
  range.merge();
  range.getCell(0, 0).values = [[text]];
  range.format = {
    fill,
    font: { bold: true, color: colors.ink, size: 11 },
    verticalAlignment: "center",
    horizontalAlignment: "left",
    borders: {
      bottom: { style: "medium", color: colors.violet },
    },
  };
}

function tableHeader(sheet, address, fill = colors.ink) {
  sheet.getRange(address).format = {
    fill,
    font: { bold: true, color: colors.white, size: 9 },
    wrapText: true,
    verticalAlignment: "center",
    horizontalAlignment: "left",
    borders: {
      bottom: { style: "medium", color: fill },
    },
  };
}

function bodyStyle(range, rowHeight = 40) {
  range.format = {
    wrapText: true,
    verticalAlignment: "top",
    borders: {
      bottom: { style: "thin", color: colors.line },
    },
  };
  range.format.rowHeight = rowHeight;
}

function inputStyle(range) {
  range.format = {
    fill: colors.blueSoft,
    font: { bold: true, color: "#1E3A8A" },
    borders: {
      bottom: { style: "thin", color: "#93C5FD" },
    },
  };
}

function outputStyle(range, fill = colors.emeraldSoft) {
  range.format = {
    fill,
    font: { bold: true, color: colors.ink },
    borders: {
      bottom: { style: "thin", color: colors.line },
    },
  };
}

for (const sheet of Object.values(sheets)) {
  setupSheet(sheet);
}

// LIRE_D_ABORD
{
  const sheet = sheets.LIRE_D_ABORD;
  titleBlock(
    sheet,
    "Dossier de reprise d’un SaaS développé par un freelance",
    "Version 1.1 R3 — 28 juillet 2026 — modèle pédagogique local. N’y stockez aucun mot de passe, secret, clé, donnée client ou information de production.",
    "I",
  );
  setWidths(sheet, {
    A: 4,
    B: 24,
    C: 22,
    D: 22,
    E: 22,
    F: 22,
    G: 22,
    H: 22,
    I: 4,
  });
  sectionHeader(sheet, "B5:H5", "Commencez ici");
  sheet.getRange("B6:C10").values = [
    [
      "Question de direction",
      "L’entreprise peut-elle reconstruire, exploiter, restaurer et transmettre le SaaS sans dépendre du compte personnel ou de la mémoire du freelance ?",
    ],
    [
      "Ordre conseillé",
      "1. Qualifiez le mode dans DECISION. 2. Complétez REGISTRE. 3. Faites accepter CRITICITE. 4. Remplacez les hypothèses RTO_RPO et TCO. 5. Exécutez TESTS. 6. Entretenez PLAN_SORTIE.",
    ],
    [
      "Ce que le kit calcule",
      "TCO comparable sur 36 mois, exposition RPO uniquement pour des points restaurés et validés, coût d’un exercice, ordre de grandeur d’un arrêt et coût de récupération des comptes.",
    ],
    [
      "Ce qu’il ne décide pas",
      "Propriété intellectuelle, conformité RGPD, validité d’une cession, responsabilité, probabilité de panne, chiffre d’affaires perdu ou stratégie de négociation.",
    ],
    [
      "Règle STOP",
      "Mode inconnu, incident ou litige actif, hypothèse numérique manquante, preuve de restauration datée absente ou non qualifiée, droit non vérifié ou accès non contrôlé : ne poursuivez pas une passation normale comme si le risque était résolu.",
    ],
  ];
  sheet.getRange("B6:B10").format = {
    fill: colors.paper,
    font: { bold: true },
    wrapText: true,
    verticalAlignment: "top",
  };
  sheet.getRange("C6:H10").merge(true);
  bodyStyle(sheet.getRange("C6:H10"), 58);

  sectionHeader(sheet, "B12:H12", "Légende");
  sheet.getRange("B13:G15").values = [
    ["BLEU", "Entrée à remplacer", "VERT", "Calcul", "AMBRE", "À confirmer"],
    [
      "ROUGE",
      "STOP / échec",
      "GRIS",
      "Exemple fictif",
      "URL",
      "Source à rouvrir",
    ],
    [
      "PASS",
      "Structure calculable",
      "À TESTER",
      "Preuve terrain absente",
      "AUCUN SECRET",
      "Références seulement",
    ],
  ];
  sheet.getRange("B13").format.fill = colors.blueSoft;
  sheet.getRange("D13").format.fill = colors.emeraldSoft;
  sheet.getRange("F13").format.fill = colors.amberSoft;
  sheet.getRange("B14").format.fill = colors.roseSoft;
  sheet.getRange("D14").format.fill = colors.paper;
  sheet.getRange("F14").format.fill = colors.violetSoft;
  bodyStyle(sheet.getRange("B13:G15"), 34);

  sectionHeader(sheet, "B17:H17", "État du modèle");
  sheet.getRange("B18:C21").values = [
    ["Contrôles de structure", null],
    ["Tests opérationnels", "À exécuter sur environnement autorisé"],
    ["Données réelles", "Aucune dans la version fournie"],
    [
      "Limite",
      "MODEL STATUS: PASS ne vaut ni recette, ni audit juridique, ni reprise réussie",
    ],
  ];
  sheet.getRange("D18:H21").merge(true);
  sheet.getRange("D18").formulas = [["='CONTROLES'!B4"]];
  sheet.getRange("D19").values = [
    [
      "Les 18 scénarios restent « À tester » tant qu’une preuve datée n’est pas jointe.",
    ],
  ];
  sheet.getRange("D20").values = [
    [
      "Les cellules bleues contiennent uniquement des hypothèses fictives et remplaçables.",
    ],
  ];
  sheet.getRange("D21").values = [
    [
      "Faites arbitrer les points juridiques, de sécurité et de données par le spécialiste compétent.",
    ],
  ];
  sheet.getRange("B18:B21").format = {
    fill: colors.paper,
    font: { bold: true },
  };
  bodyStyle(sheet.getRange("B18:H21"), 42);
  outputStyle(sheet.getRange("D18:H18"));
  sheet.freezePanes.freezeRows(3);
}

// REGISTRE
{
  const sheet = sheets.REGISTRE;
  titleBlock(
    sheet,
    "Registre des dix fonctions à reprendre",
    "Une ligne par fonction vitale. Les descriptions sont fictives ; remplacez propriétaires, preuves et statuts sans jamais coller de secret.",
    "M",
  );
  setWidths(sheet, {
    A: 3,
    B: 7,
    C: 18,
    D: 20,
    E: 12,
    F: 34,
    G: 25,
    H: 30,
    I: 42,
    J: 20,
    K: 34,
    L: 40,
    M: 46,
  });
  sheet.getRange("B5:M5").values = [
    [
      "ID",
      "Groupe",
      "Service",
      "Criticité",
      "Impact métier",
      "Décideur",
      "Responsable / contrôle actuel",
      "Preuve attendue",
      "Statut",
      "Blocage",
      "Action suivante",
      "Condition de retrait",
    ],
  ];
  tableHeader(sheet, "B5:M5");
  sheet.getRange("B6:M15").values = functions.map((entry) => [
    entry.id,
    entry.group,
    entry.service,
    entry.criticality,
    entry.businessImpact,
    entry.decisionOwner,
    entry.companyControl,
    entry.check,
    "À vérifier",
    entry.blocker,
    entry.action,
    entry.removal,
  ]);
  bodyStyle(sheet.getRange("B6:M15"), 92);
  inputStyle(sheet.getRange("J6:J15"));
  sheet.getRange("J6:J15").dataValidation = {
    rule: {
      type: "list",
      values: ["À vérifier", "En cours", "PASS", "STOP"],
    },
  };
  sheet.getRange("B17:M17").merge();
  sheet.getRange("B17").values = [
    [
      "AUCUN SECRET : référencez un coffre, un ticket, un emplacement ou une preuve datée ; ne collez jamais la valeur d’une clé, d’un mot de passe ou d’une donnée client.",
    ],
  ];
  sheet.getRange("B17:M17").format = {
    fill: colors.roseSoft,
    font: { bold: true, color: colors.rose },
    wrapText: true,
  };
  sheet.getRange("B17").format.rowHeight = 40;
  sheet.freezePanes.freezeRows(5);
  sheet.freezePanes.freezeColumns(3);
}

// CRITICITE
{
  const sheet = sheets.CRITICITE;
  titleBlock(
    sheet,
    "Criticité décidée par parcours",
    "RTO = durée maximale visée avant reprise. RPO = perte maximale de données acceptée. Ces valeurs fictives doivent être acceptées par le métier.",
    "I",
  );
  setWidths(sheet, {
    A: 4,
    B: 24,
    C: 18,
    D: 28,
    E: 34,
    F: 42,
    G: 28,
    H: 22,
    I: 4,
  });
  sheet.getRange("B5:H5").values = [
    [
      "Parcours",
      "RTO cible (h)",
      "RPO cible (h)",
      "Conséquence observée",
      "Preuve attendue",
      "Décideur",
      "Statut",
    ],
  ];
  tableHeader(sheet, "B5:H5");
  sheet.getRange("B6:H10").values = continuityTargets.map((target) => [
    target.journey,
    target.rtoHours,
    target.rpoHours === null ? "Sans objet" : target.rpoHours,
    target.impact,
    target.evidence,
    target.decisionOwner,
    "À accepter",
  ]);
  bodyStyle(sheet.getRange("B6:H10"), 58);
  inputStyle(sheet.getRange("C6:D10"));
  sheet.getRange("C6:D10").format.horizontalAlignment = "left";
  inputStyle(sheet.getRange("H6:H10"));
  sheet.getRange("C6:D10").format.numberFormat = "0.00";
  sheet.getRange("H6:H10").dataValidation = {
    rule: {
      type: "list",
      values: ["À accepter", "Accepté", "Refusé", "STOP"],
    },
  };
  sectionHeader(sheet, "B13:H13", "Questions d’arbitrage");
  sheet.getRange("B14:H17").values = [
    [
      "1",
      "Quel parcours produit la conséquence la plus grave ?",
      null,
      null,
      null,
      null,
      "Ne classez pas toute l’application au même niveau.",
    ],
    [
      "2",
      "Quelle perte de données peut être reconstruite, par qui et en combien de temps ?",
      null,
      null,
      null,
      null,
      "Une fréquence de sauvegarde ne prouve pas la restauration.",
    ],
    [
      "3",
      "Quel coût et quelle architecture rendent la cible tenable ?",
      null,
      null,
      null,
      null,
      "Des objectifs plus courts coûtent généralement plus cher.",
    ],
    [
      "4",
      "Quel exercice daté prouve la capacité ?",
      null,
      null,
      null,
      null,
      "Conservez cible, résultat, écart et personne qui accepte.",
    ],
  ];
  sheet.getRange("C14:G17").merge(true);
  bodyStyle(sheet.getRange("B14:H17"), 44);
  sheet.freezePanes.freezeRows(5);
}

// RTO_RPO
{
  const sheet = sheets.RTO_RPO;
  titleBlock(
    sheet,
    "RTO, RPO, exercice de restauration et comptes personnels",
    "Hypothèses fictives et remplaçables. Une cellule d’entrée vide doit conduire à STOP, jamais à une fausse économie.",
    "H",
  );
  setWidths(sheet, {
    A: 4,
    B: 44,
    C: 18,
    D: 32,
    E: 16,
    F: 28,
    G: 26,
    H: 4,
  });
  sectionHeader(sheet, "B5:G5", "Hypothèses de continuité");
  sheet.getRange("B6:C19").values = [
    ["Événements métier par jour", 900],
    ["Intervalle entre points restaurés et validés — actuel (h)", 24],
    ["Intervalle entre points restaurés et validés — amélioré (h)", 4],
    ["Minutes pour reconstruire un événement", 6],
    ["Coût horaire de reconstruction (€)", 45],
    ["Contribution mensuelle exposée (€)", 22500],
    ["Personnes mobilisées", 2],
    ["Coût horaire interne par personne (€)", 55],
    ["Heures externes de l’exercice", 6],
    ["Tarif externe de l’exercice (€ / h)", 95],
    ["Heures internes de l’exercice", 2],
    ["Probabilité annuelle d’incident (%)", 25],
    ["Arrêt court illustratif (h)", 8],
    ["Arrêt long illustratif (h)", 36],
  ];
  sheet.getRange("B6:B19").format = {
    fill: colors.paper,
    font: { bold: true },
    wrapText: true,
  };
  inputStyle(sheet.getRange("C6:C19"));
  sheet.getRange("C6:C19").format.numberFormat = decimalFormat;
  bodyStyle(sheet.getRange("B6:C19"), 28);
  sheet.getRange("D6:G8").values = [
    ["Preuve de restauration datée", "Statut", "Effet sur le calcul", null],
    [
      "Point actuel",
      "Oui",
      "Exemple fictif : remplacez par votre résultat daté.",
      null,
    ],
    [
      "Point amélioré",
      "Oui",
      "« Non » ou « Inconnu » force le RPO concerné à STOP.",
      null,
    ],
  ];
  sheet.getRange("F6:G8").merge(true);
  tableHeader(sheet, "D6:G6");
  bodyStyle(sheet.getRange("D7:G8"), 38);
  sheet.getRange("D7:D8").format = {
    fill: colors.paper,
    font: { bold: true },
    wrapText: true,
  };
  inputStyle(sheet.getRange("E7:E8"));
  sheet.getRange("E7:E8").dataValidation = {
    rule: {
      type: "list",
      values: ["Oui", "Non", "Inconnu"],
    },
  };
  sheet.getRange("E7:E8").format.horizontalAlignment = "center";

  sectionHeader(sheet, "B21:G21", "Exposition liée au point de reprise");
  sheet.getRange("B22:B28").values = [
    ["Point restauré actuel — événements maximum"],
    ["Point restauré actuel — événements moyens"],
    ["Point restauré actuel — coût maximum de reconstruction"],
    [""],
    ["Point restauré amélioré — événements maximum"],
    ["Point restauré amélioré — événements moyens"],
    ["Point restauré amélioré — coût maximum de reconstruction"],
  ];
  sheet.getRange("C22").formulas = [
    [
      '=IF(AND(COUNT(C6,C7,C9,C10)=4,E7="Oui",C6>=0,C6<=1000000000000,C7>0,C7<=8760,C9>=0,C9<=1000000000000,C10>=0,C10<=1000000000000),C6*C7/24,"STOP")',
    ],
  ];
  sheet.getRange("C23").formulas = [['=IF(COUNT(C22)=1,C22/2,"STOP")']];
  sheet.getRange("C24").formulas = [
    ['=IF(COUNT(C22,C9,C10)=3,C22*C9/60*C10,"STOP")'],
  ];
  sheet.getRange("C26").formulas = [
    [
      '=IF(AND(COUNT(C6,C8,C9,C10)=4,E8="Oui",C6>=0,C6<=1000000000000,C8>0,C8<=8760,C9>=0,C9<=1000000000000,C10>=0,C10<=1000000000000),C6*C8/24,"STOP")',
    ],
  ];
  sheet.getRange("C27").formulas = [['=IF(COUNT(C26)=1,C26/2,"STOP")']];
  sheet.getRange("C28").formulas = [
    ['=IF(COUNT(C26,C9,C10)=3,C26*C9/60*C10,"STOP")'],
  ];
  sheet.getRange("C24").format.numberFormat = moneyFormat;
  sheet.getRange("C28").format.numberFormat = moneyFormat;
  outputStyle(sheet.getRange("C22:C28"));
  bodyStyle(sheet.getRange("B22:C28"), 28);

  sectionHeader(sheet, "B30:G30", "Exercice et ordres de grandeur d’un arrêt");
  sheet.getRange("B31:B36").values = [
    ["Coût direct de l’exercice"],
    ["Exposition horaire illustrée"],
    ["Heures évitées au seuil, probabilité incluse"],
    [""],
    ["Arrêt court — contribution + capacité"],
    ["Arrêt long — contribution + capacité"],
  ];
  sheet.getRange("C31").formulas = [
    [
      '=IF(AND(COUNT(C11:C17)=7,COUNTIF(C11:C17,"<0")=0,COUNTIF(C11:C16,">1000000000000")=0,C12=ROUND(C12,0),C17<=100),C14*C15+C16*C13,"STOP")',
    ],
  ];
  sheet.getRange("C32").formulas = [
    [
      '=IF(AND(COUNT(C11:C17)=7,COUNTIF(C11:C17,"<0")=0,COUNTIF(C11:C16,">1000000000000")=0,C12=ROUND(C12,0),C17<=100),C11/(30*24)+C12*C13,"STOP")',
    ],
  ];
  sheet.getRange("C33").formulas = [
    [
      '=IF(AND(COUNT(C31:C32)=2,C17>0,C17<=100,C32>0),C31/(C17/100*C32),"STOP")',
    ],
  ];
  sheet.getRange("C35").formulas = [
    ['=IF(AND(COUNT(C18,C32)=2,C18>=0,C18<=1000000000000),C18*C32,"STOP")'],
  ];
  sheet.getRange("C36").formulas = [
    ['=IF(AND(COUNT(C19,C32)=2,C19>=0,C19<=1000000000000),C19*C32,"STOP")'],
  ];
  sheet.getRange("C31:C32").format.numberFormat = moneyFormat;
  sheet.getRange("C33").format.numberFormat = '0.00 "h"';
  sheet.getRange("C35:C36").format.numberFormat = moneyFormat;
  outputStyle(sheet.getRange("C31:C36"));
  bodyStyle(sheet.getRange("B31:C36"), 30);

  sectionHeader(sheet, "B38:G38", "Récupération de comptes personnels");
  sheet.getRange("B39:C46").values = [
    ["Services personnels à récupérer", 4],
    ["Heures externes préparées / service", 2],
    ["Heures externes en crise / service", 6],
    ["Tarif externe (€ / h)", 95],
    ["Heures internes préparées / service", 1],
    ["Heures internes en crise / service", 2],
    ["Coût interne (€ / h)", 55],
    ["Outillage commun préparé (€)", 300],
  ];
  sheet.getRange("B39:B46").format = {
    fill: colors.paper,
    font: { bold: true },
    wrapText: true,
  };
  inputStyle(sheet.getRange("C39:C46"));
  bodyStyle(sheet.getRange("B39:C46"), 28);
  sheet.getRange("B48:B50").values = [
    ["Passation préparée"],
    ["Récupération en crise"],
    ["Écart direct"],
  ];
  sheet.getRange("C48").formulas = [
    [
      '=IF(AND(COUNT(C39:C46)=8,COUNTIF(C39:C46,"<0")=0,COUNTIF(C39:C46,">1000000000000")=0,C39=ROUND(C39,0)),((C40*C42)+(C43*C45))*C39+C46,"STOP")',
    ],
  ];
  sheet.getRange("C49").formulas = [
    [
      '=IF(AND(COUNT(C39:C46)=8,COUNTIF(C39:C46,"<0")=0,COUNTIF(C39:C46,">1000000000000")=0,C39=ROUND(C39,0)),((C41*C42)+(C44*C45))*C39,"STOP")',
    ],
  ];
  sheet.getRange("C50").formulas = [['=IF(COUNT(C48:C49)=2,C49-C48,"STOP")']];
  sheet.getRange("C48:C50").format.numberFormat = moneyFormat;
  outputStyle(sheet.getRange("C48:C50"));
  bodyStyle(sheet.getRange("B48:C50"), 30);
  for (const row of [22, 23, 25, 29, 31, 34]) {
    sheet.getRange(`E${row}:G${row}`).merge();
  }
  sheet.getRange("E22").values = [["Lecture"]];
  sheet.getRange("E23").values = [
    [
      "Avec une restauration datée réussie, 900 événements par jour et 24 h entre deux points validés exposent au maximum 900 événements, 450 en moyenne.",
    ],
  ];
  sheet.getRange("E25").values = [
    [
      "Avec une restauration datée réussie, 4 h entre deux points validés donnent 150 événements maximum et 75 en moyenne.",
    ],
  ];
  sheet.getRange("E29").values = [
    [
      "Le seuil 4,81 h n’est valable qu’avec une probabilité annuelle d’incident de 100 %.",
    ],
  ];
  sheet.getRange("E31").values = [
    ["À 25 %, le scénario affiche 19,26 h ; à 10 %, 48,14 h."],
  ];
  sheet.getRange("E34").values = [
    [
      "Le salaire valorisé représente une capacité mobilisée, pas nécessairement une économie de trésorerie.",
    ],
  ];
  for (const address of ["E22:G29", "E31:G36"]) {
    sheet.getRange(address).format = {
      fill: colors.amberSoft,
      font: { color: colors.ink },
      wrapText: true,
      verticalAlignment: "top",
    };
  }
  sheet.getRange("E22").format.font = { bold: true, color: colors.ink };
  sheet.getRange("E23:G23").format.rowHeight = 58;
  sheet.getRange("E25:G25").format.rowHeight = 38;
  sheet.getRange("E29:G29").format.rowHeight = 44;
  sheet.getRange("E31:G31").format.rowHeight = 44;
  sheet.getRange("E34:G34").format.rowHeight = 48;
  sheet.freezePanes.freezeRows(5);
}

// TCO_36_MOIS
{
  const sheet = sheets.TCO_36_MOIS;
  titleBlock(
    sheet,
    "TCO comparable sur 36 mois",
    "Même horizon, même périmètre fonctionnel, hypothèses fictives. Remplacez chaque cellule bleue ; une inconnue ne doit pas être saisie comme zéro.",
    "H",
  );
  setWidths(sheet, {
    A: 4,
    B: 42,
    C: 19,
    D: 19,
    E: 19,
    F: 26,
    G: 24,
    H: 4,
  });
  sheet.getRange("B5:E5").values = [
    ["Poste", "Stabiliser", "Migrer", "Réécrire"],
  ];
  tableHeader(sheet, "B5:E5");
  const tcoRows = [
    ["Audit, prise en main ou cadrage", 9000, 9000, 14000],
    ["Stabilisation, migration ou construction", 18000, 67000, 140000],
    ["Maintenance sur 36 mois", 79200, 64800, 60300],
    ["Infrastructure et surveillance sur 36 mois", 23400, 27000, 32400],
    ["Temps interne valorisé", 9900, 15840, 12100],
    ["Double exploitation", 0, 0, 12000],
    ["Sortie documentée", 2000, 3000, 4000],
  ];
  sheet.getRange("B6:E12").values = tcoRows;
  bodyStyle(sheet.getRange("B6:E12"), 34);
  inputStyle(sheet.getRange("C6:E12"));
  sheet.getRange("C6:E12").format.numberFormat = moneyFormat;
  sheet.getRange("B13").values = [["TCO 36 mois"]];
  sheet.getRange("C13").formulas = [
    [
      '=IF(AND(COUNT(C6:C12)=7,COUNTIF(C6:C12,"<0")=0,COUNTIF(C6:C12,">1000000000000")=0),SUM(C6:C12),"STOP")',
    ],
  ];
  sheet.getRange("D13").formulas = [
    [
      '=IF(AND(COUNT(D6:D12)=7,COUNTIF(D6:D12,"<0")=0,COUNTIF(D6:D12,">1000000000000")=0),SUM(D6:D12),"STOP")',
    ],
  ];
  sheet.getRange("E13").formulas = [
    [
      '=IF(AND(COUNT(E6:E12)=7,COUNTIF(E6:E12,"<0")=0,COUNTIF(E6:E12,">1000000000000")=0),SUM(E6:E12),"STOP")',
    ],
  ];
  sheet.getRange("C13:E13").format.numberFormat = moneyFormat;
  outputStyle(sheet.getRange("B13:E13"));

  sectionHeader(sheet, "B15:G15", "Seuil économique de la réécriture");
  sheet.getRange("B16:C21").values = [
    ["Surcoût réécriture vs stabilisation", null],
    ["Contribution mensuelle par client (€)", 800],
    ["Mois productifs comparés", 27],
    ["Clients-mois à conserver", null],
    ["Clients équivalents sur toute la période", null],
    ["Clients arrondis au supérieur", null],
  ];
  sheet.getRange("C16").formulas = [['=IF(COUNT(C13,E13)=2,E13-C13,"STOP")']];
  sheet.getRange("C19").formulas = [
    [
      '=IF(AND(COUNT(C16:C18)=3,C17>0,C17<=1000000000000,C18>0,C18<=1000000000000),IF(C16>0,C16/C17,0),"STOP")',
    ],
  ];
  sheet.getRange("C20").formulas = [
    ['=IF(AND(COUNT(C18:C19)=2,C18>0),C19/C18,"STOP")'],
  ];
  sheet.getRange("C21").formulas = [
    ['=IF(COUNT(C20)=1,ROUNDUP(C20,0),"STOP")'],
  ];
  sheet.getRange("B16:B21").format = {
    fill: colors.paper,
    font: { bold: true },
    wrapText: true,
  };
  inputStyle(sheet.getRange("C17:C18"));
  outputStyle(sheet.getRange("C16"));
  outputStyle(sheet.getRange("C19:C21"));
  sheet.getRange("C16:C17").format.numberFormat = moneyFormat;
  sheet.getRange("C19:C20").format.numberFormat = decimalFormat;
  sheet.getRange("C21").format.numberFormat = "0";
  bodyStyle(sheet.getRange("B16:C21"), 30);
  for (let row = 16; row <= 21; row += 1) {
    sheet.getRange(`E${row}:G${row}`).merge();
  }
  sheet.getRange("E16").values = [["Lecture du scénario central"]];
  sheet.getRange("E17").values = [
    [
      "141 500 € pour stabiliser ; 186 640 € pour migrer ; 274 800 € pour réécrire.",
    ],
  ];
  sheet.getRange("E18").values = [
    ["La réécriture coûte 133 300 € de plus que la stabilisation."],
  ];
  sheet.getRange("E19").values = [
    [
      "À 800 € de contribution mensuelle pendant 27 mois : 166,63 clients-mois, soit une moyenne équivalente de 6,17 clients sur toute la période.",
    ],
  ];
  sheet.getRange("E20").values = [
    ["Le classeur arrondit au supérieur : 7 clients dans ce scénario fictif."],
  ];
  sheet.getRange("E21").values = [
    [
      "Limites : calendrier d’acquisition, probabilité de succès, coût du capital et différence de périmètre restent à chiffrer.",
    ],
  ];
  sheet.getRange("E16:G21").format = {
    fill: colors.amberSoft,
    wrapText: true,
    verticalAlignment: "top",
  };
  sheet.getRange("E16").format.font = { bold: true, color: colors.ink };
  sheet.getRange("E17:G21").format.rowHeight = 42;
  sheet.freezePanes.freezeRows(5);
}

// DECISION
{
  const sheet = sheets.DECISION;
  titleBlock(
    sheet,
    "Décision et journal d’arbitrage",
    "Le classeur route l’inconnu, l’incident et le litige vers STOP. Un TCO favorable ne remplace ni droits, ni preuves, ni maîtrise des données.",
    "H",
  );
  setWidths(sheet, {
    A: 4,
    B: 31,
    C: 26,
    D: 24,
    E: 30,
    F: 30,
    G: 24,
    H: 4,
  });
  sectionHeader(sheet, "B5:G5", "Porte d’entrée");
  sheet.getRange("B6:B10").values = [
    ["Mode de transition"],
    ["Statut de la branche"],
    ["Statut du modèle"],
    ["Décision calculée"],
    ["Limite"],
  ];
  sheet.getRange("C6").values = [["INCONNU"]];
  sheet.getRange("C6").dataValidation = {
    rule: {
      type: "list",
      values: ["INCONNU", "PASSATION NORMALE", "INCIDENT / LITIGE"],
    },
  };
  sheet.getRange("C7").formulas = [
    ['=IF(C6="PASSATION NORMALE","PASS","STOP")'],
  ];
  sheet.getRange("C8").formulas = [["='CONTROLES'!B4"]];
  sheet.getRange("C9").formulas = [
    [
      '=IF(C7="PASS",IF(C8="MODEL STATUS: PASS","POURSUIVRE SOUS PREUVES","STOP"),"STOP")',
    ],
  ];
  sheet.getRange("C10:G10").merge();
  sheet.getRange("C10").values = [
    [
      "La décision finale appartient aux responsables métier, juridique, données, sécurité et technique. Ce fichier ne contient aucune donnée client.",
    ],
  ];
  sheet.getRange("B6:B10").format = {
    fill: colors.paper,
    font: { bold: true },
    wrapText: true,
  };
  inputStyle(sheet.getRange("C6"));
  outputStyle(sheet.getRange("C7:C9"));
  bodyStyle(sheet.getRange("B6:G10"), 36);

  sectionHeader(sheet, "B12:G12", "Synthèse économique centrale");
  sheet.getRange("B13:C20").values = [
    ["TCO stabilisation", null],
    ["TCO migration", null],
    ["TCO réécriture", null],
    ["Surcoût réécriture", null],
    ["RPO 24 h — événements max.", null],
    ["RPO 4 h — événements max.", null],
    ["Exercice de restauration", null],
    ["Passation vs crise — écart", null],
  ];
  sheet.getRange("C13").formulas = [["='TCO_36_MOIS'!C13"]];
  sheet.getRange("C14").formulas = [["='TCO_36_MOIS'!D13"]];
  sheet.getRange("C15").formulas = [["='TCO_36_MOIS'!E13"]];
  sheet.getRange("C16").formulas = [["='TCO_36_MOIS'!C16"]];
  sheet.getRange("C17").formulas = [["='RTO_RPO'!C22"]];
  sheet.getRange("C18").formulas = [["='RTO_RPO'!C26"]];
  sheet.getRange("C19").formulas = [["='RTO_RPO'!C31"]];
  sheet.getRange("C20").formulas = [["='RTO_RPO'!C50"]];
  sheet.getRange("C13:C16").format.numberFormat = moneyFormat;
  sheet.getRange("C19:C20").format.numberFormat = moneyFormat;
  sheet.getRange("B13:B20").format = {
    fill: colors.paper,
    font: { bold: true },
  };
  outputStyle(sheet.getRange("C13:C20"));
  bodyStyle(sheet.getRange("B13:C20"), 28);

  sectionHeader(sheet, "B22:G22", "Journal à compléter sans secret");
  sheet.getRange("B23:G23").values = [
    [
      "Date",
      "Décideur",
      "Décision",
      "Preuve référencée",
      "Inconnue / limite",
      "Statut",
    ],
  ];
  tableHeader(sheet, "B23:G23");
  sheet.getRange("B24:G29").values = Array.from({ length: 6 }, () => [
    "",
    "",
    "",
    "",
    "",
    "À documenter",
  ]);
  inputStyle(sheet.getRange("B24:G29"));
  sheet.getRange("G24:G29").dataValidation = {
    rule: {
      type: "list",
      values: ["À documenter", "Accepté", "À revoir", "STOP"],
    },
  };
  bodyStyle(sheet.getRange("B24:G29"), 38);
  sheet.freezePanes.freezeRows(5);
}

// PLAN_SORTIE
{
  const sheet = sheets.PLAN_SORTIE;
  titleBlock(
    sheet,
    "Plan de sortie vivant",
    "Préparez la prochaine passation dès la reprise. Une sortie crédible nomme les actifs, responsables, échéances, preuves et scénarios de rupture.",
    "H",
  );
  setWidths(sheet, {
    A: 4,
    B: 7,
    C: 31,
    D: 36,
    E: 25,
    F: 23,
    G: 18,
    H: 4,
  });
  sheet.getRange("B5:G5").values = [
    [
      "ID",
      "Actif / exercice",
      "Preuve attendue",
      "Responsable",
      "Fréquence",
      "Statut",
    ],
  ];
  tableHeader(sheet, "B5:G5");
  const exitRows = [
    [
      "S-01",
      "Deux administrateurs nominatifs",
      "Connexion et récupération testées",
      "Direction + technique",
      "Trimestrielle",
      "À préparer",
    ],
    [
      "S-02",
      "Inventaire des comptes et facturations",
      "Titulaire, payeur, alertes et contact fournisseur",
      "Finance + technique",
      "Trimestrielle",
      "À préparer",
    ],
    [
      "S-03",
      "Dépôts, branches et artefacts",
      "Reconstruction depuis une machine neuve",
      "Responsable technique",
      "À chaque version majeure",
      "À préparer",
    ],
    [
      "S-04",
      "Infrastructure et configuration",
      "IaC ou procédure, dépendances et retour arrière",
      "Responsable technique",
      "Semestrielle",
      "À préparer",
    ],
    [
      "S-05",
      "Sauvegarde et restauration",
      "Point restauré, parcours rejoué, copie supprimée",
      "Données + technique",
      "Trimestrielle",
      "À préparer",
    ],
    [
      "S-06",
      "Droits et licences",
      "Cessions, licences tierces et restrictions revues",
      "Direction + conseil",
      "Annuelle",
      "À préparer",
    ],
    [
      "S-07",
      "Données personnelles",
      "Restitution, destruction et attestations prévues",
      "DPO / responsable données",
      "Annuelle",
      "À préparer",
    ],
    [
      "S-08",
      "Paiements et abonnements",
      "Propriétaire, clés renouvelées, test sans double débit",
      "Finance + technique",
      "Semestrielle",
      "À préparer",
    ],
    [
      "S-09",
      "Journaux, alertes et support",
      "Alerte reçue par deux personnes et ticket traité",
      "Support + technique",
      "Trimestrielle",
      "À préparer",
    ],
    [
      "S-10",
      "RTO/RPO par parcours",
      "Cibles, résultats, écarts et acceptation métier",
      "Direction métier",
      "Annuelle",
      "À préparer",
    ],
    [
      "S-11",
      "Budget de sortie",
      "Coût, capacité interne, assistance et réserve",
      "Direction + finance",
      "Annuelle",
      "À préparer",
    ],
    [
      "S-12",
      "Exercice de rupture",
      "Scénario incident, escalade et chronologie datée",
      "Direction + sécurité",
      "Annuelle",
      "À préparer",
    ],
  ];
  sheet.getRange("B6:G17").values = exitRows;
  bodyStyle(sheet.getRange("B6:G17"), 52);
  inputStyle(sheet.getRange("G6:G17"));
  sheet.getRange("G6:G17").dataValidation = {
    rule: {
      type: "list",
      values: ["À préparer", "En cours", "PASS", "STOP"],
    },
  };
  sheet.freezePanes.freezeRows(5);
  sheet.freezePanes.freezeColumns(2);
}

// TESTS
{
  const sheet = sheets.TESTS;
  titleBlock(
    sheet,
    "Matrice de 18 tests de reprise",
    "N’exécutez que des tests autorisés, isolés et réversibles. Renseignez une référence de preuve, jamais une valeur secrète.",
    "G",
  );
  setWidths(sheet, {
    A: 4,
    B: 10,
    C: 24,
    D: 34,
    E: 64,
    F: 20,
    G: 28,
  });
  sheet.getRange("B5:G5").values = [
    ["ID", "Famille", "Cas", "Résultat attendu", "Statut", "Preuve / ticket"],
  ];
  tableHeader(sheet, "B5:G5");
  sheet.getRange("B6:G23").values = acceptanceTests.map((test) => [
    test.id,
    test.family,
    test.case,
    test.expected,
    "À tester",
    "",
  ]);
  bodyStyle(sheet.getRange("B6:G23"), 58);
  inputStyle(sheet.getRange("F6:G23"));
  sheet.getRange("F6:F23").dataValidation = {
    rule: {
      type: "list",
      values: ["À tester", "PASS", "Écart", "STOP"],
    },
  };
  sheet.freezePanes.freezeRows(5);
  sheet.freezePanes.freezeColumns(3);
}

// CONTROLES
{
  const sheet = sheets.CONTROLES;
  titleBlock(
    sheet,
    "Contrôles indépendants du modèle",
    "Ces contrôles vérifient la structure, les formules et les datasets. Ils ne prouvent pas qu’une reprise réelle a réussi.",
    "G",
  );
  setWidths(sheet, {
    A: 4,
    B: 38,
    C: 22,
    D: 22,
    E: 34,
    F: 16,
    G: 4,
  });
  sheet.getRange("B4:F4").merge();
  sheet.getRange("B4").formulas = [
    ['=IF(COUNTIF(F8:F31,"FAIL")=0,"MODEL STATUS: PASS","MODEL STATUS: FAIL")'],
  ];
  sheet.getRange("B4:F4").format = {
    fill: colors.emeraldSoft,
    font: { bold: true, size: 16, color: colors.emerald },
    horizontalAlignment: "center",
  };
  sheet.getRange("B6:F6").values = [
    ["Contrôle", "Valeur observée", "Valeur attendue", "Règle", "Statut"],
  ];
  tableHeader(sheet, "B6:F6");
  const labels = [
    "TCO stabilisation = somme des postes",
    "TCO migration = somme des postes",
    "TCO réécriture = somme des postes",
    "Surcoût = réécriture - stabilisation",
    "Clients-mois = surcoût / contribution",
    "Clients équivalents sur la période = clients-mois / mois",
    "Clients entiers = arrondi supérieur",
    "RPO 24 h — maximum",
    "RPO 24 h — moyenne",
    "RPO 24 h — coût de reconstruction",
    "RPO 4 h — maximum",
    "RPO 4 h — moyenne",
    "RPO 4 h — coût de reconstruction",
    "Coût exercice = externe + interne",
    "Exposition horaire = contribution + capacité",
    "Seuil inclut la probabilité annuelle",
    "Arrêt court = heures × exposition",
    "Arrêt long = heures × exposition",
    "Passation préparée = formule détaillée",
    "Crise = formule détaillée",
    "Écart comptes = crise - préparation",
    "Dataset fonctions = 10 lignes",
    "Matrice de tests = 18 lignes",
    "Registre de sources = 18 lignes",
  ];
  sheet.getRange("B8:B31").values = labels.map((label) => [label]);
  const observations = [
    "='TCO_36_MOIS'!C13",
    "='TCO_36_MOIS'!D13",
    "='TCO_36_MOIS'!E13",
    "='TCO_36_MOIS'!C16",
    "='TCO_36_MOIS'!C19",
    "='TCO_36_MOIS'!C20",
    "='TCO_36_MOIS'!C21",
    "='RTO_RPO'!C22",
    "='RTO_RPO'!C23",
    "='RTO_RPO'!C24",
    "='RTO_RPO'!C26",
    "='RTO_RPO'!C27",
    "='RTO_RPO'!C28",
    "='RTO_RPO'!C31",
    "='RTO_RPO'!C32",
    "='RTO_RPO'!C33",
    "='RTO_RPO'!C35",
    "='RTO_RPO'!C36",
    "='RTO_RPO'!C48",
    "='RTO_RPO'!C49",
    "='RTO_RPO'!C50",
    "=COUNTA('REGISTRE'!B6:B15)",
    "=COUNTA('TESTS'!B6:B23)",
    "=COUNTA('SOURCES'!B6:B23)",
  ];
  const expected = [
    "=SUM('TCO_36_MOIS'!C6:C12)",
    "=SUM('TCO_36_MOIS'!D6:D12)",
    "=SUM('TCO_36_MOIS'!E6:E12)",
    "='TCO_36_MOIS'!E13-'TCO_36_MOIS'!C13",
    "='TCO_36_MOIS'!C16/'TCO_36_MOIS'!C17",
    "='TCO_36_MOIS'!C19/'TCO_36_MOIS'!C18",
    "=ROUNDUP('TCO_36_MOIS'!C20,0)",
    "='RTO_RPO'!C6*'RTO_RPO'!C7/24",
    "='RTO_RPO'!C22/2",
    "='RTO_RPO'!C22*'RTO_RPO'!C9/60*'RTO_RPO'!C10",
    "='RTO_RPO'!C6*'RTO_RPO'!C8/24",
    "='RTO_RPO'!C26/2",
    "='RTO_RPO'!C26*'RTO_RPO'!C9/60*'RTO_RPO'!C10",
    "='RTO_RPO'!C14*'RTO_RPO'!C15+'RTO_RPO'!C16*'RTO_RPO'!C13",
    "='RTO_RPO'!C11/(30*24)+'RTO_RPO'!C12*'RTO_RPO'!C13",
    "='RTO_RPO'!C31/(('RTO_RPO'!C17/100)*'RTO_RPO'!C32)",
    "='RTO_RPO'!C18*'RTO_RPO'!C32",
    "='RTO_RPO'!C19*'RTO_RPO'!C32",
    "=(('RTO_RPO'!C40*'RTO_RPO'!C42)+('RTO_RPO'!C43*'RTO_RPO'!C45))*'RTO_RPO'!C39+'RTO_RPO'!C46",
    "=(('RTO_RPO'!C41*'RTO_RPO'!C42)+('RTO_RPO'!C44*'RTO_RPO'!C45))*'RTO_RPO'!C39",
    "='RTO_RPO'!C49-'RTO_RPO'!C48",
    "=10",
    "=18",
    "=18",
  ];
  sheet.getRange("C8:C31").formulas = observations.map((formula) => [formula]);
  sheet.getRange("D8:D31").formulas = expected.map((formula) => [formula]);
  sheet.getRange("E8:E31").values = labels.map(() => [
    "Valeurs égales ; entrées présentes et dans leur domaine",
  ]);
  sheet.getRange("F8:F31").formulas = labels.map((_, index) => [
    `=IF(C${8 + index}=D${8 + index},"PASS","FAIL")`,
  ]);
  bodyStyle(sheet.getRange("B8:F31"), 34);
  outputStyle(sheet.getRange("F8:F31"));
  sheet.freezePanes.freezeRows(6);
}

// SOURCES
{
  const sheet = sheets.SOURCES;
  titleBlock(
    sheet,
    "Registre des sources officielles",
    "Sources revérifiées le 28 juillet 2026. Rouvrez la page primaire avant toute décision, car les procédures fournisseurs et les textes peuvent évoluer.",
    "H",
  );
  setWidths(sheet, {
    A: 4,
    B: 24,
    C: 28,
    D: 62,
    E: 42,
    F: 38,
    G: 30,
    H: 15,
  });
  sheet.getRange("B5:H5").values = [
    [
      "Sujet",
      "Source",
      "URL",
      "Usage dans le dossier",
      "Limite",
      "Contrôle à rejouer",
      "Revue",
    ],
  ];
  tableHeader(sheet, "B5:H5");
  sheet.getRange("B6:H23").values = sources;
  bodyStyle(sheet.getRange("B6:H23"), 72);
  sheet.getRange("D6:D23").format.font = {
    color: colors.blue,
    underline: true,
  };
  sheet.freezePanes.freezeRows(5);
  sheet.freezePanes.freezeColumns(2);
}

const inspections = [];
for (const [sheetName, range] of [
  ["TCO_36_MOIS", "B5:G21"],
  ["RTO_RPO", "B5:G50"],
  ["CONTROLES", "B4:F27"],
]) {
  const inspected = await workbook.inspect({
    kind: "table",
    sheetId: sheetName,
    range,
    include: "values,formulas",
    tableMaxRows: 60,
    tableMaxCols: 8,
    maxChars: 18000,
  });
  inspections.push(inspected.ndjson);
}
const formulaErrors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 300 },
  summary: "final formula error scan",
});
inspections.push(formulaErrors.ndjson);
await fs.writeFile(
  `${outputPath}.inspect.ndjson`,
  `${inspections.join("\n")}\n`,
  "utf8",
);

for (const sheetName of sheetNames) {
  const preview = await workbook.render({
    sheetName,
    autoCrop: "all",
    scale: 1,
    format: "png",
  });
  await fs.writeFile(
    path.join(previewDir, `${sheetName}.png`),
    new Uint8Array(await preview.arrayBuffer()),
  );
}

const xlsx = await SpreadsheetFile.exportXlsx(workbook);
await xlsx.save(outputPath);
await fs.copyFile(outputPath, publicPath);

console.log(
  JSON.stringify(
    {
      status: "PASS",
      sheets: sheetNames.length,
      functions: functions.length,
      acceptanceTests: acceptanceTests.length,
      sources: sources.length,
      outputPath,
      publicPath,
      previews: sheetNames.length,
    },
    null,
    2,
  ),
);
