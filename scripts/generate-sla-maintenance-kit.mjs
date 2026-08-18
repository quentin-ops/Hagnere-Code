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
  "sla-maintenance-applicative",
  "workbook",
);
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

await fs.mkdir(outputDir, { recursive: true });
await fs.mkdir(path.dirname(publicPath), { recursive: true });

const AS_OF = "2026-07-28";
const AS_OF_SERIAL = Math.floor(
  (Date.parse(`${AS_OF}T00:00:00Z`) - Date.UTC(1899, 11, 30)) /
    (24 * 60 * 60 * 1_000),
);
const sheetNames = [
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
const subtitles = {
  LIRE_D_ABORD: "Mode d’emploi, provenance et garde-fous",
  HYPOTHESES: "Hypothèses fictives, unités, sources et propriétaires",
  SERVICES_PARCOURS: "Services, parcours critiques, SLI et preuves",
  PLAGES_CALENDRIER: "Jours, heures, fuseau, canaux et pauses",
  DISPONIBILITE: "Conversion des cibles en minutes et secondes",
  INCIDENTS: "Registre des incidents, impact et statut",
  CHRONOLOGIE: "Sept horloges distinctes avec décalage explicite",
  COUT_INCIDENT: "Coût brut, crédit séparé et exposition nette",
  RPO_OPERATIONS: "RPO traduit en opérations, ressaisie et coût",
  DEPENDANCES: "Fournisseurs, comptes, contrats et modes dégradés",
  COUVERTURES: "Trois options fictives, hypothèses et risque résiduel",
  COMPARAISON_12_MOIS: "Comparaison annuelle au même périmètre",
  EXERCICES_PREUVES: "Huit preuves, statuts, artefacts et exercices",
  COMMUNICATION: "Escalade, destinataires, cadence et post-mortem",
  DECISION: "Gate STOP, INCOMPLET, COMPARABLE, DECISION_HUMAINE",
  CONTROLES: "Contrôles structurels, formules et scénario livré",
  SOURCES: "Quinze sources officielles et limites d’usage",
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
  };
  sheet.mergeCells(`A3:${lastColumn}3`);
  sheet.getRange("A3").values = [[
    `${subtitles[name]} — EXEMPLE FICTIF — arrêté ${AS_OF}`,
  ]];
  sheet.getRange(`A3:${lastColumn}3`).format = {
    fill: colors.orangeSoft,
    font: { bold: true, italic: true, color: colors.orange, size: 10 },
    wrapText: true,
    verticalAlignment: "center",
  };
  sheet.getRange("A1").format.rowHeight = 28;
  sheet.getRange("A2").format.rowHeight = 28;
  sheet.getRange("A3").format.rowHeight = 32;
  sheet.freezePanes.freezeRows(5);
  for (const [column, width] of Object.entries({
    A: 3,
    B: 21,
    C: 24,
    D: 24,
    E: 24,
    F: 24,
    G: 24,
    H: 28,
  })) {
    sheet.getRange(`${column}:${column}`).format.columnWidth = width;
  }
}

function header(range) {
  range.format = {
    fill: colors.ink,
    font: { bold: true, color: colors.white, size: 9 },
    wrapText: true,
    verticalAlignment: "center",
    borders: { bottom: { style: "medium", color: colors.ink } },
  };
  range.format.rowHeight = 34;
}

function body(range, height = 42) {
  range.format = {
    font: { color: colors.ink, size: 9 },
    wrapText: true,
    verticalAlignment: "top",
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

function statusRules(range) {
  range.conditionalFormats.add("containsText", {
    text: "STOP",
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

function table(sheet, range, name) {
  const value = sheet.tables.add(range, true, name);
  value.showHeaders = true;
  value.showFilterButton = true;
  return value;
}

function addStatusValidation(sheet, range) {
  sheet.dataValidations.add({
    range,
    rule: {
      type: "list",
      formula1: '"ND,DECLARE,VERIFIE,ECHEC,NA"',
    },
  });
}

for (const name of sheetNames) title(sheets[name], name);

{
  const sheet = sheets.LIRE_D_ABORD;
  sheet.getRange("B5:H5").values = [[
    "Champ",
    "Valeur livrée",
    "Unité",
    "À remplacer",
    "Règle",
    "Statut",
    "Note",
  ]];
  sheet.getRange("B6:H16").values = [
    ["Version", "sla-maintenance-kit-r1", "texte", "Non", "Traçabilité", "PASS", AS_OF],
    ["Provenance", "EXEMPLE FICTIF", "texte", "Oui", "Jamais une moyenne de marché", "INCOMPLET", "Le modèle final reste verrouillé"],
    ["Données réelles confirmées", "NON", "OUI/NON", "Oui", "OUI requis avant décision finale", "INCOMPLET", "Validation humaine"],
    ["Autorité confirmée", "OUI", "OUI/NON", "Oui", "NON = STOP", "PASS", "Mandat à référencer"],
    ["Incident actif", "NON", "OUI/NON", "Oui", "OUI = STOP", "PASS", "Traiter avant comparaison"],
    ["Date d’arrêté", AS_OF_SERIAL, "AAAA-MM-JJ", "Oui", "Date non future", "PASS", "Revoir les sources"],
    ["Devise", "EUR", "ISO 4217", "Oui", "Même devise par comparaison", "PASS", "Conversion distincte si nécessaire"],
    ["Secrets", "INTERDITS", "texte", "Non", "Aucun mot de passe, jeton ou clé", "PASS", "Références seulement"],
    ["Inconnues", "ND", "texte", "Non", "Jamais remplacées par zéro", "PASS", "Responsable et date"],
    ["Décision automatique", "INTERDITE", "texte", "Non", "Calculs ≠ recommandation", "PASS", "Arbitrage humain"],
    ["Recalcul Excel", "NON EFFECTUE", "texte", "Non", "Artefact-tool uniquement", "PASS", "Ouvrir dans Excel avant usage réel"],
  ];
  header(sheet.getRange("B5:H5"));
  body(sheet.getRange("B6:H16"), 46);
  input(sheet.getRange("C8:C12"));
  sheet.getRange("C11").format.numberFormat = "yyyy-mm-dd";
  warning(sheet.getRange("B7:H8"));
  statusRules(sheet.getRange("G6:G16"));
  sheet.dataValidations.add({
    range: "C8:C10",
    rule: { type: "list", formula1: '"OUI,NON"' },
  });
  sheet.dataValidations.add({
    range: "C11",
    rule: {
      type: "decimal",
      operator: "between",
      formula1: 1,
      formula2: AS_OF_SERIAL,
    },
  });
  table(sheet, "B5:H16", "T_Lire_Abord");
}

{
  const sheet = sheets.HYPOTHESES;
  const rows = [
    ["H01", "Disponibilité cible", 99.9, "%", "Direction métier", AS_OF, "Fixture", "À remplacer"],
    ["H02", "Fenêtre", 30, "jours", "Exploitation", AS_OF, "Fixture", "À remplacer"],
    ["H03", "Couverture quotidienne", 24, "h/jour", "Exploitation", AS_OF, "Fixture", "À remplacer"],
    ["H04", "Opérations par heure", 40, "op/h", "Métier", AS_OF, "Fixture", "À remplacer"],
    ["H05", "RPO maximal", 1.5, "h", "Métier", AS_OF, "Fixture", "À remplacer"],
    ["H06", "Ressaisie", 4, "min/op", "Métier", AS_OF, "Fixture", "À remplacer"],
    ["H07", "Coût horaire chargé", 35, "€/h", "Finance", AS_OF, "Fixture", "À remplacer"],
    ["H08", "Durée d’arrêt", 4.2, "h", "Exploitation", AS_OF, "Fixture", "À remplacer"],
    ["H09", "Personnes affectées", 12, "personnes", "Métier", AS_OF, "Fixture", "À remplacer"],
  ];
  const last = 5 + rows.length;
  sheet.getRange("B5:I5").values = [[
    "ID",
    "Hypothèse",
    "Valeur",
    "Unité",
    "Propriétaire",
    "Date",
    "Source",
    "Statut",
  ]];
  sheet.getRange(`B6:I${last}`).values = rows;
  header(sheet.getRange("B5:I5"));
  body(sheet.getRange(`B6:I${last}`));
  input(sheet.getRange(`D6:D${last}`));
  table(sheet, `B5:I${last}`, "T_Hypotheses");
  addStatusValidation(sheet, `I6:I${last}`);
}

{
  const sheet = sheets.SERVICES_PARCOURS;
  const rows = [
    ["S01", "Facturation B2B", "Créer, valider et envoyer une facture", "Facture test retrouvée et exacte", "Synthétique 5 min", "24/7 fictif", "Direction opérations"],
    ["S02", "Paiement", "Autoriser et rapprocher un paiement", "Paiement et commande réconciliés", "Synthétique 5 min", "24/7 fictif", "Direction finance"],
    ["S03", "Interventions", "Consulter le dossier terrain", "Dossier complet accessible", "Recette horaire", "06:00-22:00 fictif", "Direction terrain"],
    ["S04", "Documents client", "Télécharger un document attendu", "Document intègre et autorisé", "Recette horaire", "Heures ouvrées fictives", "Service client"],
  ];
  const last = 5 + rows.length;
  sheet.getRange("B5:H5").values = [[
    "ID",
    "Service",
    "Parcours",
    "Preuve utilisateur",
    "Mesure",
    "Plage",
    "Responsable",
  ]];
  sheet.getRange(`B6:H${last}`).values = rows;
  header(sheet.getRange("B5:H5"));
  body(sheet.getRange(`B6:H${last}`), 60);
  input(sheet.getRange(`C6:H${last}`));
  table(sheet, `B5:H${last}`, "T_Services");
  addStatusValidation(sheet, `H6:H${last}`);
}

{
  const sheet = sheets.PLAGES_CALENDRIER;
  const rows = [
    ["P01", "Lundi-vendredi", "08:00", "18:00", "Europe/Paris", "Portail + téléphone", "Ticket qualifié", "Pause référencée"],
    ["P02", "Samedi", "09:00", "13:00", "Europe/Paris", "Téléphone", "Impact + parcours", "Pause référencée"],
    ["P03", "Hors plage", "ND", "ND", "Europe/Paris", "Supervision", "File d’attente", "Départ à l’ouverture"],
    ["P04", "Jours fériés", "EXCLU", "EXCLU", "Europe/Paris", "Aucun", "Aucun", "À négocier"],
  ];
  const last = 5 + rows.length;
  sheet.getRange("B5:I5").values = [[
    "ID",
    "Jours",
    "Début",
    "Fin",
    "Fuseau",
    "Canal",
    "Minimum",
    "Pause",
  ]];
  sheet.getRange(`B6:I${last}`).values = rows;
  header(sheet.getRange("B5:I5"));
  body(sheet.getRange(`B6:I${last}`), 54);
  input(sheet.getRange(`C6:I${last}`));
  table(sheet, `B5:I${last}`, "T_Plages");
  addStatusValidation(sheet, `I6:I${last}`);
}

{
  const sheet = sheets.DISPONIBILITE;
  const targets = [99, 99.5, 99.9, 99.95, 99.99];
  const last = 5 + targets.length;
  sheet.getRange("B5:H5").values = [[
    "Cible %",
    "Jours",
    "Heures/jour",
    "Minutes couvertes",
    "Arrêt admis min",
    "Arrêt admis sec",
    "Statut",
  ]];
  sheet.getRange(`B6:D${last}`).values = targets.map((target) => [
    target,
    30,
    24,
  ]);
  sheet.getRange(`E6:E${last}`).formulas = targets.map((_, index) => [
    `=C${index + 6}*D${index + 6}*60`,
  ]);
  sheet.getRange(`F6:F${last}`).formulas = targets.map((_, index) => [
    `=E${index + 6}*(1-B${index + 6}/100)`,
  ]);
  sheet.getRange(`G6:G${last}`).formulas = targets.map((_, index) => [
    `=ROUND(F${index + 6}*60,0)`,
  ]);
  sheet.getRange(`H6:H${last}`).formulas = targets.map((_, index) => [
    `=IF(AND(ISNUMBER(B${index + 6}),ISNUMBER(C${index + 6}),ISNUMBER(D${index + 6})),IF(AND(B${index + 6}>0,B${index + 6}<100,ROUND(B${index + 6},4)=B${index + 6},C${index + 6}>0,C${index + 6}<=366,INT(C${index + 6})=C${index + 6},D${index + 6}>0,D${index + 6}<=24,ROUND(D${index + 6},4)=D${index + 6}),"PASS","STOP"),"STOP")`,
  ]);
  header(sheet.getRange("B5:H5"));
  body(sheet.getRange(`B6:H${last}`));
  input(sheet.getRange(`B6:D${last}`));
  formula(sheet.getRange(`E6:H${last}`));
  sheet.getRange(`F6:F${last}`).format.numberFormat = "0.00";
  statusRules(sheet.getRange(`H6:H${last}`));
  table(sheet, `B5:H${last}`, "T_Disponibilite");
  sheet.dataValidations.add({
    range: `B6:B${last}`,
    rule: { type: "decimal", operator: "between", formula1: 0.01, formula2: 99.9999 },
  });
  sheet.dataValidations.add({
    range: `C6:C${last}`,
    rule: { type: "wholeNumber", operator: "between", formula1: 1, formula2: 366 },
  });
  sheet.dataValidations.add({
    range: `D6:D${last}`,
    rule: { type: "decimal", operator: "between", formula1: 0.0001, formula2: 24 },
  });
}

{
  const sheet = sheets.INCIDENTS;
  const rows = [
    ["INC-001", "2026-07-28", "Facturation B2B", "P1 fictif", "Parcours bloqué", "Contournement manuel", "CLOS", "EXEMPLE FICTIF"],
    ["INC-002", "", "", "ND", "", "", "OUVERT", "À saisir"],
    ["INC-003", "", "", "ND", "", "", "OUVERT", "À saisir"],
  ];
  sheet.getRange("B5:I5").values = [[
    "Référence",
    "Date",
    "Service",
    "Sévérité",
    "Impact",
    "Contournement",
    "Statut",
    "Provenance",
  ]];
  sheet.getRange("B6:I8").values = rows;
  header(sheet.getRange("B5:I5"));
  body(sheet.getRange("B6:I8"), 58);
  input(sheet.getRange("C6:I8"));
  table(sheet, "B5:I8", "T_Incidents");
  sheet.dataValidations.add({
    range: "E6:E8",
    rule: { type: "list", formula1: '"P1 fictif,P2 fictif,P3 fictif,ND"' },
  });
}

{
  const sheet = sheets.CHRONOLOGIE;
  const serials = [
    46231.3819444444,
    46231.3875,
    46231.4201388889,
    46231.4861111111,
    46231.5972222222,
    46231.6666666667,
    46231.75,
  ];
  const labels = [
    "Observation",
    "Accusé",
    "Intervention",
    "Contournement",
    "Rétablissement",
    "Données vérifiées",
    "Clôture",
  ];
  sheet.getRange("B5:H5").values = [[
    "Ordre",
    "Horloge",
    "Instant Europe/Paris",
    "Minutes depuis observation",
    "Preuve",
    "Responsable",
    "Statut",
  ]];
  sheet.getRange("B6:D12").values = labels.map((label, index) => [
    index + 1,
    label,
    serials[index],
  ]);
  sheet.getRange("E6:E12").formulas = labels.map((_, index) => [
    `=ROUND((D${index + 6}-$D$6)*1440,0)`,
  ]);
  sheet.getRange("F6:G12").values = labels.map(() => [
    "Référence fictive",
    "À attribuer",
  ]);
  sheet.getRange("H6:H12").formulas = labels.map((_, index) => [
    index === 0
      ? '=IF(ISNUMBER(D6),"PASS","STOP")'
      : `=IF(AND(ISNUMBER(D${index + 6}),D${index + 6}>=D${index + 5}),"PASS","STOP")`,
  ]);
  header(sheet.getRange("B5:H5"));
  body(sheet.getRange("B6:H12"));
  input(sheet.getRange("D6:D12"));
  formula(sheet.getRange("E6:E12"));
  formula(sheet.getRange("H6:H12"));
  statusRules(sheet.getRange("H6:H12"));
  sheet.getRange("D6:D12").format.numberFormat = "dd/mm/yyyy hh:mm";
  table(sheet, "B5:H12", "T_Chronologie");
}

{
  const sheet = sheets.COUT_INCIDENT;
  sheet.getRange("B5:H5").values = [[
    "Poste",
    "Valeur",
    "Unité",
    "Formule / définition",
    "Source",
    "Résultat €",
    "Statut",
  ]];
  sheet.getRange("B6:F13").values = [
    ["Durée", 4.2, "h", "Entrée", "Fixture"],
    ["Personnes", 12, "personnes", "Entrée", "Fixture"],
    ["Coût chargé", 35, "€/h", "Entrée", "Fixture"],
    ["Part détournée", 100, "%", "Entrée", "Fixture"],
    ["Rattrapage distinct", 420, "€", "Non inclus ailleurs", "Fixture"],
    ["Marge non reportable", 114.2857, "€/h", "Multipliée par la durée ; distincte du CA", "Fixture"],
    ["Reprise externe", 900, "€", "Non incluse au forfait", "Fixture"],
    ["Crédit de service", 200, "€", "Affiché séparément", "Fixture"],
  ];
  sheet.getRange("G6:G13").formulas = [
    ["=0"],
    ["=0"],
    ["=0"],
    ["=0"],
    ["=ROUND(C10,2)"],
    ["=ROUND(C6*C11,2)"],
    ["=ROUND(C12,2)"],
    ["=ROUND(C13,2)"],
  ];
  sheet.getRange("H6:H13").formulas = [
    ['=IF(ISNUMBER(C6),IF(AND(C6>=0,C6<=1000000,ROUND(C6,4)=C6),"PASS","STOP"),"STOP")'],
    ['=IF(ISNUMBER(C7),IF(AND(C7>=0,C7<=100000000,INT(C7)=C7),"PASS","STOP"),"STOP")'],
    ['=IF(ISNUMBER(C8),IF(AND(C8>=0,C8<=10000000000,ROUND(C8,4)=C8),"PASS","STOP"),"STOP")'],
    ['=IF(ISNUMBER(C9),IF(AND(C9>=0,C9<=100,ROUND(C9,4)=C9),"PASS","STOP"),"STOP")'],
    ['=IF(ISNUMBER(C10),IF(AND(C10>=0,C10<=10000000000,ROUND(C10,4)=C10),"PASS","STOP"),"STOP")'],
    ['=IF(ISNUMBER(C11),IF(AND(C11>=0,C11<=10000000000,ROUND(C11,4)=C11),"PASS","STOP"),"STOP")'],
    ['=IF(ISNUMBER(C12),IF(AND(C12>=0,C12<=10000000000,ROUND(C12,4)=C12),"PASS","STOP"),"STOP")'],
    ['=IF(ISNUMBER(C13),IF(AND(C13>=0,C13<=10000000000,ROUND(C13,4)=C13),"PASS","STOP"),"STOP")'],
  ];
  sheet.getRange("B15:H15").values = [[
    "TOTAL",
    "",
    "",
    "",
    "Capacité | Brut | Crédit | Net",
    "",
    "",
  ]];
  sheet.getRange("C15:F15").formulas = [[
    "=ROUND(C6*C7*C8*C9/100,2)",
    '=IF(AND(ISNUMBER(C15),ISNUMBER(G10),ISNUMBER(G11),ISNUMBER(G12)),ROUND(C15+(G10+G11+G12),2),"STOP")',
    "=G13",
    '=IF(AND(ISNUMBER(D15),ISNUMBER(E15)),IF(D15>=E15,ROUND(D15-E15,2),"STOP"),"STOP")',
  ]];
  header(sheet.getRange("B5:H5"));
  body(sheet.getRange("B6:H13"));
  input(sheet.getRange("C6:C13"));
  formula(sheet.getRange("G6:H13"));
  formula(sheet.getRange("C15:F15"));
  statusRules(sheet.getRange("H6:H13"));
  table(sheet, "B5:H13", "T_Cout_Incident");
  sheet.dataValidations.add({
    range: "C6",
    rule: { type: "decimal", operator: "between", formula1: 0, formula2: 1000000 },
  });
  sheet.dataValidations.add({
    range: "C7",
    rule: { type: "wholeNumber", operator: "between", formula1: 0, formula2: 100000000 },
  });
  sheet.dataValidations.add({
    range: "C8",
    rule: { type: "decimal", operator: "between", formula1: 0, formula2: 10000000000 },
  });
  sheet.dataValidations.add({
    range: "C10:C13",
    rule: { type: "decimal", operator: "between", formula1: 0, formula2: 10000000000 },
  });
  sheet.dataValidations.add({
    range: "C9",
    rule: { type: "decimal", operator: "between", formula1: 0, formula2: 100 },
  });
}

{
  const sheet = sheets.RPO_OPERATIONS;
  sheet.getRange("B5:H5").values = [[
    "Parcours",
    "Opérations/h",
    "RPO h",
    "Minutes/op",
    "Coût €/h",
    "Opérations à risque",
    "Coût de ressaisie €",
  ]];
  sheet.getRange("B6:E8").values = [
    ["Facturation fictive", 40, 1.5, 4],
    ["Commandes fictives", 25, 1, 6],
    ["Interventions fictives", 10, 2, 8],
  ];
  sheet.getRange("F6:F8").values = [[35], [35], [35]];
  sheet.getRange("G6:G8").formulas = [
    [
      '=IF(AND(ISNUMBER(C6),ISNUMBER(D6)),IF(AND(C6>=0,D6>=0,C6<=100000000,D6<=1000000,ROUND(C6,4)=C6,ROUND(D6,4)=D6),C6*D6,"STOP"),"STOP")',
    ],
    [
      '=IF(AND(ISNUMBER(C7),ISNUMBER(D7)),IF(AND(C7>=0,D7>=0,C7<=100000000,D7<=1000000,ROUND(C7,4)=C7,ROUND(D7,4)=D7),C7*D7,"STOP"),"STOP")',
    ],
    [
      '=IF(AND(ISNUMBER(C8),ISNUMBER(D8)),IF(AND(C8>=0,D8>=0,C8<=100000000,D8<=1000000,ROUND(C8,4)=C8,ROUND(D8,4)=D8),C8*D8,"STOP"),"STOP")',
    ],
  ];
  sheet.getRange("H6:H8").formulas = [
    [
      '=IF(AND(ISNUMBER(G6),ISNUMBER(E6),ISNUMBER(F6)),IF(AND(E6>=0,F6>=0,E6<=1440,F6<=10000000000,ROUND(E6,4)=E6,ROUND(F6,4)=F6),ROUND(G6*E6/60*F6,2),"STOP"),"STOP")',
    ],
    [
      '=IF(AND(ISNUMBER(G7),ISNUMBER(E7),ISNUMBER(F7)),IF(AND(E7>=0,F7>=0,E7<=1440,F7<=10000000000,ROUND(E7,4)=E7,ROUND(F7,4)=F7),ROUND(G7*E7/60*F7,2),"STOP"),"STOP")',
    ],
    [
      '=IF(AND(ISNUMBER(G8),ISNUMBER(E8),ISNUMBER(F8)),IF(AND(E8>=0,F8>=0,E8<=1440,F8<=10000000000,ROUND(E8,4)=E8,ROUND(F8,4)=F8),ROUND(G8*E8/60*F8,2),"STOP"),"STOP")',
    ],
  ];
  header(sheet.getRange("B5:H5"));
  body(sheet.getRange("B6:H8"));
  input(sheet.getRange("C6:F8"));
  formula(sheet.getRange("G6:H8"));
  table(sheet, "B5:H8", "T_RPO");
  sheet.dataValidations.add({
    range: "C6:C8",
    rule: { type: "decimal", operator: "between", formula1: 0, formula2: 100000000 },
  });
  sheet.dataValidations.add({
    range: "D6:D8",
    rule: { type: "decimal", operator: "between", formula1: 0, formula2: 1000000 },
  });
  sheet.dataValidations.add({
    range: "E6:E8",
    rule: { type: "decimal", operator: "between", formula1: 0, formula2: 1440 },
  });
  sheet.dataValidations.add({
    range: "F6:F8",
    rule: { type: "decimal", operator: "between", formula1: 0, formula2: 10000000000 },
  });
}

{
  const sheet = sheets.DEPENDANCES;
  const rows = [
    ["D01", "Hébergement", "Facturation", "Compte client", "Support fictif", "Ticket prioritaire", "Export + repli", "DECLARE"],
    ["D02", "Base de données", "Tous parcours", "Compte client", "Support fictif", "Canal urgence", "Restore isolé", "DECLARE"],
    ["D03", "Identité", "Connexion", "Compte client", "Support fictif", "Canal urgence", "Compte break-glass", "DECLARE"],
    ["D04", "Messagerie", "Factures", "Compte client", "Support fictif", "Ticket", "File + renvoi", "DECLARE"],
    ["D05", "Paiement", "Commandes", "Compte client", "Support fictif", "Ticket", "Mode différé", "DECLARE"],
  ];
  sheet.getRange("B5:I5").values = [[
    "ID",
    "Dépendance",
    "Parcours",
    "Propriétaire",
    "Contrat",
    "Escalade",
    "Mode dégradé",
    "Statut",
  ]];
  sheet.getRange("B6:I10").values = rows;
  header(sheet.getRange("B5:I5"));
  body(sheet.getRange("B6:I10"), 60);
  input(sheet.getRange("C6:I10"));
  table(sheet, "B5:I10", "T_Dependances");
  addStatusValidation(sheet, "I6:I10");
}

const coverageRows = [
  ["A", "Heures ouvrées", 5000, 1200, 4, 47, 2000, 2, 4000, "Hypothèse fictive A", AS_OF_SERIAL],
  ["B", "Plage étendue", 4000, 1650, 3, 47, 2500, 1, 5836, "Hypothèse fictive B", AS_OF_SERIAL],
  ["C", "Continuité renforcée", 8000, 3200, 2, 47, 4000, 0.5, 3672, "Hypothèse fictive C", AS_OF_SERIAL],
];

{
  const sheet = sheets.COUVERTURES;
  sheet.getRange("B5:L5").values = [[
    "ID",
    "Option",
    "Transition €",
    "Mensuel €",
    "Interne h/mois",
    "Coût interne €/h",
    "Exercices €/an",
    "Incidents/an",
    "Coût/incident €",
    "Source résiduelle",
    "Date",
  ]];
  sheet.getRange("B6:L8").values = coverageRows;
  header(sheet.getRange("B5:L5"));
  body(sheet.getRange("B6:L8"), 56);
  input(sheet.getRange("D6:L8"));
  sheet.getRange("L6:L8").format.numberFormat = "yyyy-mm-dd";
  table(sheet, "B5:L8", "T_Couvertures");
  sheet.dataValidations.add({
    range: "D6:J8",
    rule: { type: "decimal", operator: "between", formula1: 0, formula2: 10000000000 },
  });
  sheet.dataValidations.add({
    range: "L6:L8",
    rule: {
      type: "decimal",
      operator: "between",
      formula1: 1,
      formula2: AS_OF_SERIAL,
    },
  });
}

{
  const sheet = sheets.COMPARAISON_12_MOIS;
  const validCoverageId = (row) =>
    `IF(ISTEXT('COUVERTURES'!B${row}),AND(LEN('COUVERTURES'!B${row})>=1,LEN('COUVERTURES'!B${row})<=64,TRIM(CLEAN('COUVERTURES'!B${row}))='COUVERTURES'!B${row},LEN('COUVERTURES'!B${row})=LEN(SUBSTITUTE('COUVERTURES'!B${row}," ","")),COUNTIF('COUVERTURES'!$B$6:$B$8,'COUVERTURES'!B${row})=1),FALSE)`;
  sheet.getRange("B5:H5").values = [[
    "Option",
    "Contrat annuel €",
    "Interne annuel €",
    "Résiduel annuel €",
    "Total annuel €",
    "Rang coût",
    "Décision",
  ]];
  sheet.getRange("B6:B8").values = coverageRows.map((row) => [row[1]]);
  sheet.getRange("C6:C8").formulas = [6, 7, 8].map((row) => [
    `=ROUND('COUVERTURES'!D${row}+'COUVERTURES'!E${row}*12+'COUVERTURES'!H${row},2)`,
  ]);
  sheet.getRange("D6:D8").formulas = [6, 7, 8].map((row) => [
    `=ROUND('COUVERTURES'!F${row}*'COUVERTURES'!G${row}*12,2)`,
  ]);
  sheet.getRange("E6:E8").formulas = [6, 7, 8].map((row) => [
    `=ROUND('COUVERTURES'!I${row}*'COUVERTURES'!J${row},2)`,
  ]);
  sheet.getRange("F6:F8").formulas = [6, 7, 8].map((row) => [
    `=ROUND(SUM(C${row}:E${row}),2)`,
  ]);
  sheet.getRange("G6:G8").formulas = [6, 7, 8].map((row) => [
    `=RANK(F${row},$F$6:$F$8,1)`,
  ]);
  sheet.getRange("H6:H8").formulas = [6, 7, 8].map((row) => [
    `=IF(COUNT('COUVERTURES'!D${row}:J${row})=7,IF(AND(MIN('COUVERTURES'!D${row}:J${row})>=0,MAX('COUVERTURES'!D${row}:J${row})<=10000000000,ROUND('COUVERTURES'!D${row},4)='COUVERTURES'!D${row},ROUND('COUVERTURES'!E${row},4)='COUVERTURES'!E${row},ROUND('COUVERTURES'!F${row},4)='COUVERTURES'!F${row},ROUND('COUVERTURES'!G${row},4)='COUVERTURES'!G${row},ROUND('COUVERTURES'!H${row},4)='COUVERTURES'!H${row},ROUND('COUVERTURES'!I${row},4)='COUVERTURES'!I${row},ROUND('COUVERTURES'!J${row},4)='COUVERTURES'!J${row},${validCoverageId(row)},LEN(TRIM('COUVERTURES'!C${row}))>=2,LEN(TRIM('COUVERTURES'!K${row}))>=5,ISNUMBER('COUVERTURES'!L${row})),IF(AND(INT('COUVERTURES'!L${row})='COUVERTURES'!L${row},'COUVERTURES'!L${row}>0,'COUVERTURES'!L${row}<='LIRE_D_ABORD'!$C$11),"PASS","INCOMPLET"),"INCOMPLET"),"INCOMPLET")`,
  ]);
  header(sheet.getRange("B5:H5"));
  body(sheet.getRange("B6:H8"));
  formula(sheet.getRange("C6:G8"));
  formula(sheet.getRange("H6:H8"));
  statusRules(sheet.getRange("H6:H8"));
  table(sheet, "B5:H8", "T_Comparaison");
}

{
  const sheet = sheets.EXERCICES_PREUVES;
  const last = 5 + proofs.length;
  sheet.getRange("B5:J5").values = [[
    "ID",
    "Domaine",
    "Attendu",
    "Preuves admissibles",
    "Sources",
    "Statut",
    "Référence",
    "Date",
    "Responsable",
  ]];
  sheet.getRange(`B6:F${last}`).values = proofs.map((proof) => [
    proof.id,
    proof.label,
    proof.expected,
    proof.acceptedEvidence.join(" | "),
    proof.sourceIds.join(" | "),
  ]);
  sheet.getRange(`G6:J${last}`).values = proofs.map(() => [
    "DECLARE",
    "Référence fictive",
    AS_OF_SERIAL,
    "À attribuer",
  ]);
  header(sheet.getRange("B5:J5"));
  body(sheet.getRange(`B6:J${last}`), 92);
  input(sheet.getRange(`G6:J${last}`));
  sheet.getRange(`I6:I${last}`).format.numberFormat = "yyyy-mm-dd";
  table(sheet, `B5:J${last}`, "T_Preuves");
  addStatusValidation(sheet, `G6:G${last}`);
  sheet.dataValidations.add({
    range: `I6:I${last}`,
    rule: {
      type: "decimal",
      operator: "between",
      formula1: 1,
      formula2: AS_OF_SERIAL,
    },
  });
}

{
  const sheet = sheets.COMMUNICATION;
  const rows = [
    ["C01", "Ouverture P1", "Direction, métier, exploitation", "15 min fictif", "Impact, périmètre, prochaine mise à jour", "Téléphone secours", "DECLARE"],
    ["C02", "Suivi P1", "Même groupe", "30 min fictif", "Actions, risques, décisions", "Téléphone secours", "DECLARE"],
    ["C03", "Rétablissement", "Utilisateurs affectés", "À la recette", "Parcours, limites, données, surveillance", "Portail", "DECLARE"],
    ["C04", "Post-mortem", "Direction et propriétaires", "5 jours fictifs", "Chronologie, facteurs, actions", "Réunion", "DECLARE"],
  ];
  sheet.getRange("B5:H5").values = [[
    "ID",
    "Moment",
    "Destinataires",
    "Cadence",
    "Contenu",
    "Secours",
    "Statut",
  ]];
  sheet.getRange("B6:H9").values = rows;
  header(sheet.getRange("B5:H5"));
  body(sheet.getRange("B6:H9"), 68);
  input(sheet.getRange("C6:H9"));
  table(sheet, "B5:H9", "T_Communication");
  addStatusValidation(sheet, "H6:H9");
}

{
  const sheet = sheets.DECISION;
  const verifiedProofFormula = `=${Array.from({ length: 8 }, (_, index) => {
    const row = index + 6;
    return `IF(AND('EXERCICES_PREUVES'!$G$${row}="VERIFIE",LEN(TRIM('EXERCICES_PREUVES'!$H$${row}))>=6,LEN(TRIM('EXERCICES_PREUVES'!$J$${row}))>=3,ISNUMBER('EXERCICES_PREUVES'!$I$${row})),IF(AND(INT('EXERCICES_PREUVES'!$I$${row})='EXERCICES_PREUVES'!$I$${row},'EXERCICES_PREUVES'!$I$${row}>0,'EXERCICES_PREUVES'!$I$${row}<='LIRE_D_ABORD'!$C$11),1,0),0)`;
  }).join("+")}`;
  const decisionGateFormula = `=IF(OR(C6<>"NON",C7<>"OUI",C13>0,C9="STOP",C10="STOP",C11="STOP",C12="STOP"),"STOP",IF(OR(C8<>"OUI",C9<>"PASS",C10<>"PASS",C11<>"PASS",C12<>"PASS",C15<3,COUNT('LIRE_D_ABORD'!$C$11)<>1),"INCOMPLET",IF(OR(INT('LIRE_D_ABORD'!$C$11)<>'LIRE_D_ABORD'!$C$11,'LIRE_D_ABORD'!$C$11<=0,'LIRE_D_ABORD'!$C$11>${AS_OF_SERIAL}),"INCOMPLET",IF(C14<8,"COMPARABLE","DECISION_HUMAINE"))))`;
  sheet.getRange("B5:H5").values = [[
    "Contrôle",
    "Valeur",
    "Règle",
    "Effet",
    "Responsable",
    "Date",
    "Statut",
  ]];
  sheet.getRange("B6:D17").values = [
    ["Incident actif", "", "OUI = STOP"],
    ["Autorité confirmée", "", "NON ou vide = STOP"],
    ["Exemple fictif remplacé", "", "OUI requis pour final"],
    ["Disponibilité valide", "", "PASS requis"],
    ["Chronologie valide", "", "PASS requis"],
    ["Coût valide", "", "PASS requis"],
    ["RPO valide", "", "PASS requis"],
    ["Preuves en échec", "", "0 requis"],
    ["Preuves vérifiées et documentées", "", "8 requis pour final"],
    ["Couvertures complètes et sourcées", "", "3 requises"],
    ["Gate", "", "STOP > INCOMPLET > COMPARABLE > DECISION_HUMAINE"],
    ["Export final", "", "Seulement DECISION_HUMAINE"],
  ];
  sheet.getRange("C6:C17").formulas = [
    ["='LIRE_D_ABORD'!$C$10"],
    ["='LIRE_D_ABORD'!$C$9"],
    ["='LIRE_D_ABORD'!$C$8"],
    ['=IF(COUNTIF(\'DISPONIBILITE\'!$H$6:$H$10,"PASS")=5,"PASS","STOP")'],
    ['=IF(COUNTIF(\'CHRONOLOGIE\'!$H$6:$H$12,"PASS")=7,"PASS","STOP")'],
    [
      '=IF(AND(COUNTIF(\'COUT_INCIDENT\'!$H$6:$H$13,"PASS")=8,ISNUMBER(\'COUT_INCIDENT\'!$F$15)),IF(\'COUT_INCIDENT\'!$F$15>=0,"PASS","STOP"),"STOP")',
    ],
    [
      '=IF(COUNT(\'RPO_OPERATIONS\'!$G$6:$H$8)=6,IF(MIN(\'RPO_OPERATIONS\'!$G$6:$H$8)>=0,"PASS","STOP"),"STOP")',
    ],
    ['=COUNTIF(\'EXERCICES_PREUVES\'!$G$6:$G$13,"ECHEC")'],
    [verifiedProofFormula],
    ['=COUNTIF(\'COMPARAISON_12_MOIS\'!$H$6:$H$8,"PASS")'],
    [decisionGateFormula],
    ['=IF(C16="DECISION_HUMAINE","AUTORISE","BLOQUE")'],
  ];
  sheet.getRange("E6:H17").values = Array.from({ length: 12 }, () => [
    "Direction",
    "À attribuer",
    AS_OF,
    "DECLARE",
  ]);
  header(sheet.getRange("B5:H5"));
  body(sheet.getRange("B6:H17"), 52);
  formula(sheet.getRange("C6:C17"));
  statusRules(sheet.getRange("C9:C17"));
  table(sheet, "B5:H17", "T_Decision");
  addStatusValidation(sheet, "H6:H17");
}

const tests = [
  ["MUT-01", "mutation", "DISPONIBILITE!B8", "99,9 → 99,5", "Arrêt 216 min"],
  ["MUT-02", "mutation", "COUT_INCIDENT!C6", "+1 h", "Capacité +420 €"],
  ["MUT-03", "mutation", "RPO_OPERATIONS!D6", "RPO +0,5 h", "Opérations +20"],
  ["MUT-04", "mutation", "COUVERTURES!E6", "Mensuel +100 €", "Total +1 200 €"],
  ["MUT-05", "mutation", "COUVERTURES!F7", "Interne +1 h/mois", "Total +564 €"],
  ["MUT-06", "mutation", "COUVERTURES!J8", "Coût résiduel +100 €", "Total +50 €"],
  ["MUT-07", "mutation", "COUT_INCIDENT!C6", "4,2 → 5,2 h", "Brut 4 098,29 €"],
  ["MUT-08", "mutation", "COUT_INCIDENT!C9", "12,3456 %", "Capacité 217,78 €"],
  ["ADV-01", "adversarial", "DISPONIBILITE!B6", "100", "STOP"],
  ["ADV-02", "adversarial", "COUT_INCIDENT!C6", "-1", "STOP"],
  ["ADV-03", "adversarial", "COUT_INCIDENT!C7", "1,5", "STOP"],
  ["ADV-04", "adversarial", "CHRONOLOGIE!D8", "avant D7", "Chronologie invalide"],
  ["ADV-05", "adversarial", "COUVERTURES!K6", "vide", "Total non finalisable"],
  ["ADV-06", "adversarial", "EXERCICES_PREUVES!G6", "ECHEC", "STOP"],
  ["ADV-07", "adversarial", "LIRE_D_ABORD!C9", "NON", "STOP autorité"],
  ["ADV-08", "adversarial", "LIRE_D_ABORD!C10", "OUI", "STOP incident"],
  ["ADV-09", "adversarial", "DECISION!C8", "NON", "INCOMPLET fictif"],
  ["ADV-10", "adversarial", "EXERCICES_PREUVES!G6:G13", "DECLARE", "COMPARABLE au mieux"],
  ["ADV-11", "adversarial", "EXERCICES_PREUVES!I6:I13", "vide", "COMPARABLE au mieux"],
  ["ADV-12", "adversarial", "EXERCICES_PREUVES!H6:H13", "vide", "COMPARABLE au mieux"],
  ["ADV-13", "adversarial", "EXERCICES_PREUVES!J6:J13", "vide", "COMPARABLE au mieux"],
  ["ADV-14", "adversarial", "RPO_OPERATIONS!C6", "-1", "STOP"],
  ["ADV-15", "adversarial", "LIRE_D_ABORD!C11", "date future", "INCOMPLET"],
  ["ADV-16", "adversarial", "COUVERTURES!K6", "espaces", "INCOMPLET"],
  ["ADV-17", "adversarial", "EXERCICES_PREUVES!H6:H13", "espaces", "COMPARABLE au mieux"],
  ["ADV-18", "adversarial", "EXERCICES_PREUVES!J6:J13", "espaces", "COMPARABLE au mieux"],
  ["ADV-19", "adversarial", "COUT_INCIDENT!C6:C13", "vide", "STOP"],
  ["ADV-20", "adversarial", "COUVERTURES!B6:B8", "A/A/A", "INCOMPLET"],
  ["ADV-21", "adversarial", "COUVERTURES!C6", "vide", "INCOMPLET"],
  ["ADV-22", "adversarial", "LIRE_D_ABORD!C10", "vide", "STOP"],
  ["ADV-23", "adversarial", "COUT_INCIDENT!C13", "crédit > brut", "STOP"],
  ["ADV-24", "adversarial", "LIRE_D_ABORD!C11", "vide", "INCOMPLET"],
  ["ADV-25", "adversarial", "LIRE_D_ABORD!C11", "date fractionnaire", "INCOMPLET"],
  ["ADV-26", "adversarial", "EXERCICES_PREUVES!I6:I13", "dates fractionnaires", "COMPARABLE au mieux"],
  ["ADV-27", "adversarial", "COUVERTURES!L6", "date fractionnaire", "INCOMPLET"],
  ["ADV-28", "adversarial", "DISPONIBILITE!C6", "30,5 jours", "STOP"],
  ["ADV-29", "adversarial", "DISPONIBILITE!C6", "1 000 jours", "STOP"],
  ["ADV-30", "adversarial", "COUT_INCIDENT!C6", "4,20001 h", "STOP"],
  ["ADV-31", "adversarial", "COUT_INCIDENT!C6", "2 000 000 h", "STOP"],
  ["ADV-32", "adversarial", "COUT_INCIDENT!C7", "200 000 000 personnes", "STOP"],
  ["ADV-33", "adversarial", "RPO_OPERATIONS!C6", "0,50001 opération/h", "STOP"],
  ["ADV-34", "adversarial", "COUVERTURES!D6", "5 000,00001 €", "INCOMPLET"],
  ["ADV-35", "adversarial", "COUVERTURES!D6", "20 Md€", "INCOMPLET"],
  ["ADV-36", "adversarial", "COUT_INCIDENT!C6:C13", "micro-montants", "STOP crédit > brut"],
  ["ADV-37", "adversarial", "RPO_OPERATIONS!C6:F6", "précision 4 décimales", "Coût 700,67 €"],
  ["ADV-38", "adversarial", "COUVERTURES!D6:J6", "micro-montants", "Total 0,07 €"],
  ["ADV-39", "adversarial", "COUVERTURES!B6:B8", "IDs espaces", "INCOMPLET"],
  ["ADV-40", "adversarial", "COUVERTURES!B6", "ID numérique", "INCOMPLET"],
  ["ADV-41", "adversarial", "COUVERTURES!D6:J6", "7 bornes à 10 Md", "PASS sans exception"],
  ["ADV-42", "adversarial", "COUT_INCIDENT!C6:C13", "bornes hautes", "Brut aligné moteur/classeur"],
  ["ADV-43", "adversarial", "RPO_OPERATIONS!C6:F6", "bornes hautes", "Coût aligné moteur/classeur"],
];
const sabotageTargetNames = [
  ...Array.from({ length: 5 }, (_, index) => index + 6).flatMap((row) =>
    ["E", "F", "G", "H"].map((column) => `DISPONIBILITE!${column}${row}`),
  ),
  ...Array.from({ length: 7 }, (_, index) => index + 6).flatMap((row) =>
    ["E", "H"].map((column) => `CHRONOLOGIE!${column}${row}`),
  ),
  ...Array.from({ length: 8 }, (_, index) => index + 6).flatMap((row) =>
    ["G", "H"].map((column) => `COUT_INCIDENT!${column}${row}`),
  ),
  ...["C", "D", "E", "F"].map(
    (column) => `COUT_INCIDENT!${column}15`,
  ),
  ...Array.from({ length: 3 }, (_, index) => index + 6).flatMap((row) =>
    ["G", "H"].map((column) => `RPO_OPERATIONS!${column}${row}`),
  ),
  ...Array.from({ length: 3 }, (_, index) => index + 6).flatMap((row) =>
    ["C", "D", "E", "F", "G", "H"].map(
      (column) => `COMPARAISON_12_MOIS!${column}${row}`,
    ),
  ),
  ...Array.from({ length: 12 }, (_, index) => `DECISION!C${index + 6}`),
];
const sabotageTargets = sabotageTargetNames.map((target, index) => [
  `SAB-${String(index + 1).padStart(2, "0")}`,
  "sabotage",
  target,
  "Remplacer formule par 1",
  "Validateur = FAIL",
]);
const allTests = [...tests, ...sabotageTargets];

{
  const sheet = sheets.CONTROLES;
  const last = 5 + allTests.length;
  sheet.getRange("B5:H5").values = [[
    "ID",
    "Famille",
    "Cible",
    "Injection",
    "Attendu",
    "Exécution",
    "Statut",
  ]];
  sheet.getRange(`B6:F${last}`).values = allTests;
  sheet.getRange(`G6:H${last}`).values = allTests.map(() => [
    "Validateur externe",
    "SPECIFIE",
  ]);
  header(sheet.getRange("B5:H5"));
  body(sheet.getRange(`B6:H${last}`), 50);
  warning(sheet.getRange(`H6:H${last}`));
  table(sheet, `B5:H${last}`, "T_Controles");
  addStatusValidation(sheet, `H6:H${last}`);
}

{
  const sheet = sheets.SOURCES;
  const last = 5 + sources.length;
  sheet.getRange("B5:I5").values = [[
    "ID",
    "Organisme",
    "Titre",
    "URL officielle",
    "Consulté",
    "Usage",
    "Limite",
    "Statut",
  ]];
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
  body(sheet.getRange(`B6:I${last}`), 100);
  sheet.getRange(`E6:E${last}`).format.font = {
    color: colors.blue,
    underline: true,
  };
  table(sheet, `B5:I${last}`, "T_Sources");
  addStatusValidation(sheet, `I6:I${last}`);
}

for (const name of sheetNames) sheets[name].freezePanes.freezeRows(5);
sheets.SOURCES.freezePanes.freezeColumns(2);
sheets.EXERCICES_PREUVES.freezePanes.freezeColumns(2);

workbook.comments.addThread(
  { cell: sheets.LIRE_D_ABORD.getRange("C7") },
  "Les valeurs du classeur sont fictives et ne représentent ni un prix, ni une fréquence, ni une moyenne de marché.",
);
workbook.comments.addThread(
  { cell: sheets.DECISION.getRange("C8") },
  "Passer à OUI uniquement après remplacement, sourçage et validation humaine de toutes les valeurs fictives.",
);

const inspect = await workbook.inspect({
  kind: "workbook,sheet,table,formula",
  maxChars: 32_000,
  tableMaxRows: 6,
  tableMaxCols: 10,
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
    const freezeColumns = [12, 16].includes(index);
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
  await execFileAsync("/usr/bin/zip", ["-qr", patched, "."], { cwd: archiveDir });
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
      testsSpecified: allTests.length,
      outputPath,
      publicPath,
      note: "Généré avec @oai/artifact-tool ; aucune recalculation Microsoft Excel réelle.",
    },
    null,
    2,
  ),
);
