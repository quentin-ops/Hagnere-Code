import fs from "node:fs/promises";
import { execFile } from "node:child_process";
import { createRequire } from "node:module";
import path from "node:path";
import { promisify } from "node:util";
import { fileURLToPath, pathToFileURL } from "node:url";

const execFileAsync = promisify(execFile);
const require = createRequire(path.join(process.cwd(), "artifact-loader.cjs"));
const artifactTool = await import(
  pathToFileURL(require.resolve("@oai/artifact-tool")).href,
);
const { SpreadsheetFile, Workbook } = artifactTool;

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const workspace = path.resolve(scriptDir, "..");
const outputDir = path.join(
  workspace,
  "output",
  "reprendre-mvp-vibe-code",
  "workbook",
);
const previewDir = path.join(outputDir, "previews");
const outputPath = path.join(outputDir, "kit-reprise-mvp-vibe-code.xlsx");
const publicPath = path.join(
  workspace,
  "public",
  "ressources",
  "kit-reprise-mvp-vibe-code.xlsx",
);
const readJson = async (name) =>
  JSON.parse(await fs.readFile(path.join(workspace, "src", "lib", name), "utf8"));
const proofs = await readJson("mvp-vibe-code-required-proofs.json");
const platformFacts = await readJson("mvp-vibe-code-platform-facts.json");
const sources = await readJson("mvp-vibe-code-workbook-sources.json");

await fs.mkdir(outputDir, { recursive: true });
await fs.mkdir(previewDir, { recursive: true });
await fs.mkdir(path.dirname(publicPath), { recursive: true });
const artifactWorkDir = path.join(outputDir, ".artifact-work");
await fs.mkdir(artifactWorkDir, { recursive: true });
const runtimeNodeModules = process.env.NODE_PATH?.split(path.delimiter)[0];
if (runtimeNodeModules) {
  const linkPath = path.join(artifactWorkDir, "node_modules");
  try {
    await fs.symlink(runtimeNodeModules, linkPath, "dir");
  } catch (error) {
    if (error?.code !== "EEXIST") throw error;
  }
}

const AS_OF = "2026-07-28";
const MAX_COST = 1_000_000_000;
const MAX_HOURS = 1_000_000;
const MAX_COUNT = 10_000_000;
const MAX_AGGREGATE = 10_000_000_000;
const MAX_DECIMALS = 2;
const sheetNames = [
  "LIRE_D_ABORD",
  "INVENTAIRE",
  "SOURCE_BUILD",
  "SBOM_LICENCES",
  "DONNEES_RESTORE",
  "RTO_RPO",
  "ACCES",
  "PARCOURS_METIER",
  "PRODUCTION",
  "MIGRATION",
  "HYPOTHESES_TCO",
  "TCO_12_36_60",
  "RISQUE_PANNE",
  "DECISION",
  "TESTS",
  "CONTROLES",
  "SOURCES",
];
const subtitles = {
  LIRE_D_ABORD: "Mode d’emploi, garde-fous, contexte et légende",
  INVENTAIRE: "Neuf domaines de preuve, qualification et décision",
  SOURCE_BUILD: "Preuve commit → build → artefact → déploiement",
  SBOM_LICENCES: "Dépendances directes, transitives, copiées et décisions",
  DONNEES_RESTORE: "Sauvegarde et restauration complète sur copie isolée",
  RTO_RPO: "Objectifs et mesures de continuité par parcours",
  ACCES: "Rôles, ressources, actions, tenants, secrets et sessions",
  PARCOURS_METIER: "Idempotence, doublons, retries et rapprochements",
  PRODUCTION: "Logs, métriques, alertes, performance et incidents",
  MIGRATION: "Bascule, rollback, réconciliation et hypercare",
  HYPOTHESES_TCO: "Hypothèses des cinq trajectoires, toutes remplaçables",
  TCO_12_36_60: "TCO comparable à périmètre constant",
  RISQUE_PANNE: "Coût observable séparé et perte attendue nullable",
  DECISION: "Décision sans score, conditionnée aux preuves et aux STOP",
  TESTS: "Recette externe : mutations, adversarial et sabotages",
  CONTROLES: "Contrôles indépendants, bornes et statut du modèle",
  SOURCES: "Registre officiel relu à la date de référence",
};
const colors = {
  ink: "#172033",
  paper: "#F8FAFC",
  white: "#FFFFFF",
  line: "#CBD5E1",
  blue: "#1D4ED8",
  blueSoft: "#DBEAFE",
  green: "#047857",
  greenSoft: "#D1FAE5",
  orange: "#B45309",
  orangeSoft: "#FEF3C7",
  red: "#B91C1C",
  redSoft: "#FEE2E2",
  gray: "#64748B",
  graySoft: "#E2E8F0",
};

const workbook = Workbook.create();
const sheets = Object.fromEntries(
  sheetNames.map((name) => [name, workbook.worksheets.add(name)]),
);
workbook.comments.setSelf({ displayName: "Quentin Hagnéré" });

const setWidths = (sheet, widths) => {
  for (const [column, width] of Object.entries(widths)) {
    sheet.getRange(`${column}:${column}`).format.columnWidth = width;
  }
};
const title = (sheet, name, lastColumn = "N") => {
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
    `${subtitles[name]} — EXEMPLE FICTIF — version ${AS_OF}`,
  ]];
  sheet.getRange(`A3:${lastColumn}3`).format = {
    fill: colors.orangeSoft,
    font: { italic: true, bold: true, color: colors.orange, size: 10 },
    wrapText: true,
    verticalAlignment: "center",
  };
  sheet.getRange("A1").format.rowHeight = 28;
  sheet.getRange("A2").format.rowHeight = 28;
  sheet.getRange("A3").format.rowHeight = 32;
  sheet.freezePanes.freezeRows(5);
};
const header = (range) => {
  range.format = {
    fill: colors.ink,
    font: { bold: true, color: colors.white, size: 9 },
    wrapText: true,
    verticalAlignment: "center",
    borders: { bottom: { style: "medium", color: colors.ink } },
  };
  range.format.rowHeight = 34;
};
const body = (range, height = 36) => {
  range.format = {
    font: { color: colors.ink, size: 9 },
    wrapText: true,
    verticalAlignment: "top",
    borders: { bottom: { style: "thin", color: colors.line } },
  };
  range.format.rowHeight = height;
};
const input = (range) => {
  range.format = {
    fill: colors.blueSoft,
    font: { color: colors.blue },
    borders: { bottom: { style: "thin", color: "#93C5FD" } },
  };
};
const formula = (range) => {
  range.format = {
    fill: colors.greenSoft,
    font: { bold: true, color: colors.green },
    borders: { bottom: { style: "thin", color: "#6EE7B7" } },
  };
};
const unknown = (range) => {
  range.format = {
    fill: colors.orangeSoft,
    font: { bold: true, color: colors.orange },
  };
};
const stop = (range) => {
  range.format = {
    fill: colors.redSoft,
    font: { bold: true, color: colors.red },
  };
};
const section = (sheet, range, label) => {
  sheet.mergeCells(range);
  const anchor = range.split(":")[0];
  sheet.getRange(anchor).values = [[label]];
  sheet.getRange(range).format = {
    fill: colors.graySoft,
    font: { bold: true, color: colors.ink, size: 10 },
    verticalAlignment: "center",
  };
};
const addTable = (sheet, range, name) => {
  const table = sheet.tables.add(range, true, name);
  table.showFilterButton = true;
  table.showHeaders = true;
  return table;
};
const statusRules = (range) => {
  range.conditionalFormats.add("containsText", {
    text: "STOP",
    format: { fill: colors.redSoft, font: { bold: true, color: colors.red } },
  });
  range.conditionalFormats.add("containsText", {
    text: "INCONNU",
    format: {
      fill: colors.orangeSoft,
      font: { bold: true, color: colors.orange },
    },
  });
  range.conditionalFormats.add("containsText", {
    text: "INVALIDE",
    format: { fill: colors.redSoft, font: { bold: true, color: colors.red } },
  });
  range.conditionalFormats.add("containsText", {
    text: "PASS",
    format: {
      fill: colors.greenSoft,
      font: { bold: true, color: colors.green },
    },
  });
  range.conditionalFormats.add("containsText", {
    text: "RESOLU",
    format: {
      fill: colors.greenSoft,
      font: { bold: true, color: colors.green },
    },
  });
  range.conditionalFormats.add("containsText", {
    text: "VALIDE",
    format: {
      fill: colors.greenSoft,
      font: { bold: true, color: colors.green },
    },
  });
};

for (const name of sheetNames) {
  title(sheets[name], name, name === "INVENTAIRE" ? "Q" : "N");
  setWidths(sheets[name], {
    A: 3,
    B: 22,
    C: 24,
    D: 20,
    E: 22,
    F: 22,
    G: 22,
    H: 22,
    I: 20,
    J: 20,
    K: 20,
    L: 20,
    M: 20,
    N: 22,
    O: 16,
    P: 16,
    Q: 16,
  });
}

{
  const sheet = sheets.LIRE_D_ABORD;
  sheet.getRange("B5:G5").values = [[
    "Règle",
    "Application",
    "Couleur",
    "Sens",
    "Statut",
    "Limite",
  ]];
  header(sheet.getRange("B5:G5"));
  sheet.getRange("B6:G11").values = [
    [
      "Aucune inconnue à zéro",
      "Laisser vide : le résultat reste ND, INCONNU ou STOP",
      "Bleu",
      "Entrée utilisateur",
      "CANDIDAT",
      "Aucun résultat ne vaut devis, audit ou certification",
    ],
    [
      "N/A contrôlé",
      "Uniquement si le domaine l’autorise, avec justification et approbateur",
      "Vert",
      "Formule / lien interne",
      AS_OF,
      "Aucune date de preuve future n’est admise",
    ],
    [
      "STOP prioritaire",
      "Aucun score, coût ou économie ne compense un STOP",
      "Orange",
      "Inconnu / à confirmer",
      "EXEMPLE FICTIF",
      "Tous les montants doivent être remplacés et sourcés",
    ],
    [
      "Données héritées",
      "La décision finale reste bloquée jusqu’à confirmation explicite",
      "Rouge",
      "STOP / échec",
      "AUCUN SECRET",
      "Le scan de secrets est best effort, jamais une garantie",
    ],
    [
      "Sécurité financière",
      "Montant individuel ≤ 1 Md€ ; agrégat ≤ 10 Md€",
      "Gris",
      "Contexte / exemple",
      "Cents sûrs",
      "Deux décimales au plus ; heures ≤ 1 M ; comptes ≤ 10 M",
    ],
    [
      "Recalcul",
      "@oai/artifact-tool uniquement",
      "ISO",
      "Dates yyyy-mm-dd",
      "PAS EXCEL",
      "Aucune recalculation Microsoft Excel réelle dans cette génération",
    ],
  ];
  body(sheet.getRange("B6:G11"), 52);
  input(sheet.getRange("D6"));
  formula(sheet.getRange("D7"));
  unknown(sheet.getRange("D8"));
  stop(sheet.getRange("D9"));
  addTable(sheet, "B5:G11", "T_Lire_Regles");

  section(sheet, "B13:G13", "CONTEXTE DU DOSSIER — À REMPLACER");
  sheet.getRange("B14:C20").values = [
    ["Référence du dossier", "CAS-FICTIF-MVP-001"],
    ["Date d’évaluation ISO", AS_OF],
    [
      "Périmètre commun",
      "Mêmes parcours, volumes, sécurité, continuité et obligations pour les cinq trajectoires.",
    ],
    ["Mode", "normal"],
    ["Valeurs fictives remplacées et sourcées ?", "NON"],
    ["Références sans secret confirmées ?", "NON"],
    ["Usage", "BROUILLON"],
  ];
  body(sheet.getRange("B14:C20"), 42);
  input(sheet.getRange("C14:C20"));
  sheet.getRange("C17").dataValidation = {
    rule: {
      type: "list",
      values: ["unknown", "normal", "incident", "dispute", "no-authority"],
    },
  };
  sheet.getRange("C18:C19").dataValidation = {
    rule: { type: "list", values: ["NON", "OUI"] },
  };
  sheet.getRange("C20").dataValidation = {
    rule: { type: "list", values: ["BROUILLON", "INTERNE", "FINAL"] },
  };

  section(sheet, "J5:K5", "CONSTANTES DU MODÈLE");
  sheet.getRange("J6:K11").values = [
    ["MAX_MONTANT_EUR", MAX_COST],
    ["MAX_HEURES", MAX_HOURS],
    ["MAX_COMPTES", MAX_COUNT],
    ["MAX_AGREGAT_EUR", MAX_AGGREGATE],
    ["DATE_MAX_ISO", AS_OF],
    ["DECIMALES_MAX", MAX_DECIMALS],
  ];
  body(sheet.getRange("J6:K11"), 30);
  sheet.getRange("K6:K9").format.numberFormat = "#,##0";
  sheet.getRange("K10").format.numberFormat = "@";
  sheet.getRange("K11").format.numberFormat = "0";
  section(sheet, "J13:N13", "SORTIES");
  sheet.getRange("J14:K18").values = [
    ["Étape", ""],
    ["Finalisation", ""],
    ["Statut modèle", ""],
    ["TCO comparable", ""],
    ["Risque de panne", ""],
  ];
  sheet.getRange("K14:K18").formulas = [
    ["='DECISION'!$C$13"],
    ["='DECISION'!$C$18"],
    ["='CONTROLES'!$B$4"],
    ["='DECISION'!$C$10"],
    ["='DECISION'!$C$11"],
  ];
  body(sheet.getRange("J14:K18"), 34);
  formula(sheet.getRange("K14:K18"));
  statusRules(sheet.getRange("K14:K18"));
}

{
  const sheet = sheets.INVENTAIRE;
  const last = 5 + proofs.length;
  sheet.getRange("B5:Q5").values = [[
    "ID",
    "Domaine",
    "Sévérité",
    "N/A permis",
    "Attendu",
    "Preuves acceptées",
    "Statut",
    "Propriétaire",
    "Vérifiée le",
    "Référence de preuve",
    "Justification N/A",
    "Approbateur N/A",
    "Résultat",
    "STOP bloquant",
    "Bloquant non résolu",
    "Majeur non résolu",
  ]];
  header(sheet.getRange("B5:Q5"));
  sheet.getRange(`B6:G${last}`).values = proofs.map((proof) => [
    proof.id,
    proof.label,
    proof.severity,
    proof.allowsNa ? "Oui" : "Non",
    proof.expected,
    proof.acceptedEvidence.join(" | "),
  ]);
  sheet.getRange(`H6:M${last}`).values = proofs.map((proof) => [
    "verified",
    "Responsable fictif",
    AS_OF,
    `PREUVE-FICTIVE-${proof.id.toUpperCase()}`,
    "",
    "",
  ]);
  sheet.getRange(`N6:N${last}`).formulas = proofs.map((_, index) => {
    const row = index + 6;
    return [
      `=IF(H${row}="failed","STOP",IF(H${row}="NA",IF(AND(E${row}="Oui",LEN(L${row})>=8,LEN(M${row})>=3),"RESOLU","STOP"),IF(H${row}="verified",IF(AND(LEN(I${row})>=3,LEN(J${row})=10,J${row}<='LIRE_D_ABORD'!$C$15,J${row}<='LIRE_D_ABORD'!$K$10,LEN(K${row})>=6),"RESOLU","INVALIDE"),IF(OR(H${row}="unknown",H${row}="declared"),"INCONNU","INVALIDE"))))`,
    ];
  });
  sheet.getRange(`O6:Q${last}`).formulas = proofs.map((_, index) => {
    const row = index + 6;
    return [
      `=IF(AND(D${row}="blocking",N${row}="STOP"),1,0)`,
      `=IF(AND(D${row}="blocking",N${row}<>"RESOLU"),1,0)`,
      `=IF(AND(D${row}="major",N${row}<>"RESOLU"),1,0)`,
    ];
  });
  body(sheet.getRange(`B6:Q${last}`), 84);
  input(sheet.getRange(`H6:M${last}`));
  formula(sheet.getRange(`N6:Q${last}`));
  sheet.getRange(`H6:H${last}`).dataValidation = {
    rule: {
      type: "list",
      values: ["unknown", "declared", "verified", "failed", "NA"],
    },
  };
  statusRules(sheet.getRange(`N6:N${last}`));
  addTable(sheet, `B5:Q${last}`, "T_Inventaire");
  sheet.freezePanes.freezeColumns(2);
}

{
  const sheet = sheets.SOURCE_BUILD;
  const last = 5 + platformFacts.length;
  sheet.getRange("B5:N5").values = [[
    "ID",
    "Plateforme",
    "Capacité",
    "Ce qui ne suit pas",
    "Preuve à exécuter",
    "Frontière",
    "Source",
    "Revue",
    "Statut",
    "Propriétaire",
    "Date",
    "Réf exécution",
    "Résultat",
  ]];
  header(sheet.getRange("B5:N5"));
  sheet.getRange(`B6:I${last}`).values = platformFacts.map((fact) => [
    fact.id,
    fact.plateforme,
    fact.capacité,
    fact.ce_qui_ne_suit_pas,
    fact.preuve_a_executer,
    fact.frontière,
    fact.source,
    fact.checkedAt,
  ]);
  sheet.getRange(`J6:M${last}`).values = platformFacts.map(() => [
    "unknown",
    "",
    "",
    "",
  ]);
  sheet.getRange(`N6:N${last}`).formulas = platformFacts.map((_, index) => {
    const row = index + 6;
    return [
      `=IF(J${row}="failed","STOP",IF(J${row}="verified",IF(AND(LEN(K${row})>=3,LEN(L${row})=10,L${row}<='LIRE_D_ABORD'!$C$15,L${row}<='LIRE_D_ABORD'!$K$10,LEN(M${row})>=6),"RESOLU","INVALIDE"),IF(OR(J${row}="unknown",J${row}="declared"),"INCONNU","INVALIDE")))`,
    ];
  });
  body(sheet.getRange(`B6:N${last}`), 92);
  input(sheet.getRange(`J6:M${last}`));
  unknown(sheet.getRange(`J6:J${last}`));
  formula(sheet.getRange(`N6:N${last}`));
  sheet.getRange(`J6:J${last}`).dataValidation = {
    rule: { type: "list", values: ["unknown", "declared", "verified", "failed"] },
  };
  statusRules(sheet.getRange(`N6:N${last}`));
  addTable(sheet, `B5:N${last}`, "T_Source_Build");
  sheet.freezePanes.freezeColumns(2);
}

{
  const sheet = sheets.SBOM_LICENCES;
  const rows = [
    ["sbom-01", "Application", "Dépendances directes"],
    ["sbom-02", "Application", "Dépendances transitives"],
    ["sbom-03", "Code copié", "Snippets, templates et générateurs"],
    ["sbom-04", "Interface", "Polices, icônes, images et design system"],
    ["sbom-05", "IA", "Modèles, API et SDK"],
    ["sbom-06", "Backend", "Fonctions serverless / edge"],
    ["sbom-07", "Données", "Connecteurs, drivers et extensions"],
    ["sbom-08", "Build", "CI, registry, scanners et outils"],
  ];
  const last = 5 + rows.length;
  sheet.getRange("B5:N5").values = [[
    "ID",
    "Couche",
    "Périmètre",
    "Composant",
    "Version",
    "Licence",
    "Obligations / restriction",
    "Source / provenance",
    "Réf SBOM",
    "Date ISO",
    "Propriétaire",
    "Décision",
    "Résultat",
  ]];
  header(sheet.getRange("B5:N5"));
  sheet.getRange(`B6:D${last}`).values = rows;
  sheet.getRange(`E6:M${last}`).values = rows.map(() => [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "À qualifier",
    "",
  ]);
  sheet.getRange(`N6:N${last}`).formulas = rows.map((_, index) => {
    const row = index + 6;
    return [
      `=IF(COUNTBLANK(E${row}:M${row})>0,"INCONNU",IF(AND(LEN(J${row})>=6,LEN(K${row})=10,K${row}<='LIRE_D_ABORD'!$C$15,K${row}<='LIRE_D_ABORD'!$K$10,LEN(L${row})>=3,OR(M${row}="Conserver",M${row}="Remplacer",M${row}="Retirer",M${row}="Accepter")),"RESOLU","STOP"))`,
    ];
  });
  body(sheet.getRange(`B6:N${last}`), 62);
  input(sheet.getRange(`E6:M${last}`));
  formula(sheet.getRange(`N6:N${last}`));
  sheet.getRange(`M6:M${last}`).dataValidation = {
    rule: {
      type: "list",
      values: ["À qualifier", "Conserver", "Remplacer", "Retirer", "Accepter"],
    },
  };
  statusRules(sheet.getRange(`N6:N${last}`));
  addTable(sheet, `B5:N${last}`, "T_SBOM");
}

{
  const sheet = sheets.DONNEES_RESTORE;
  const rows = [
    ["restore-01", "Schéma", "Tables, vues, contraintes et fonctions"],
    ["restore-02", "Données", "Lignes métier et référentiels"],
    ["restore-03", "Stockage", "Objets, métadonnées et droits"],
    ["restore-04", "Identités", "Comptes, facteurs et rôles"],
    ["restore-05", "Automatismes", "Jobs, webhooks et files"],
    ["restore-06", "Configuration", "Variables référencées, jamais les secrets"],
    ["restore-07", "Audit", "Journaux et preuves de réconciliation"],
    ["restore-08", "Reprise", "Test applicatif sur copie isolée"],
  ];
  const last = 5 + rows.length;
  sheet.getRange("B5:N5").values = [[
    "ID",
    "Couche",
    "Contenu contrôlé",
    "Nombre avant",
    "Nombre après",
    "Écart",
    "Checksum / requête",
    "Début ISO",
    "Fin ISO",
    "Preuve",
    "Propriétaire",
    "Date de contrôle",
    "Résultat",
  ]];
  header(sheet.getRange("B5:N5"));
  sheet.getRange(`B6:D${last}`).values = rows;
  sheet.getRange(`E6:F${last}`).values = rows.map(() => ["", ""]);
  sheet.getRange(`G6:G${last}`).formulas = rows.map((_, index) => {
    const row = index + 6;
    return [`=IF(OR(E${row}="",F${row}=""),"ND",F${row}-E${row})`];
  });
  sheet.getRange(`H6:M${last}`).values = rows.map(() => [
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  sheet.getRange(`N6:N${last}`).formulas = rows.map((_, index) => {
    const row = index + 6;
    return [
      `=IF(OR(E${row}="",F${row}="",LEN(H${row})<8,LEN(I${row})<>10,LEN(J${row})<>10,LEN(K${row})<6,LEN(L${row})<3,LEN(M${row})<>10),"INCONNU",IF(AND(G${row}=0,I${row}<=J${row},J${row}<='LIRE_D_ABORD'!$C$15,J${row}<='LIRE_D_ABORD'!$K$10,M${row}<='LIRE_D_ABORD'!$C$15,M${row}<='LIRE_D_ABORD'!$K$10),"RESOLU","STOP"))`,
    ];
  });
  body(sheet.getRange(`B6:N${last}`), 62);
  input(sheet.getRange(`E6:F${last}`));
  formula(sheet.getRange(`G6:G${last}`));
  input(sheet.getRange(`H6:M${last}`));
  formula(sheet.getRange(`N6:N${last}`));
  sheet.dataValidations.add({
    range: `E6:F${last}`,
    rule: {
      type: "whole",
      operator: "between",
      formula1: 0,
      formula2: MAX_COUNT,
    },
  });
  statusRules(sheet.getRange(`N6:N${last}`));
  addTable(sheet, `B5:N${last}`, "T_Restore");
}

{
  const sheet = sheets.RTO_RPO;
  const rows = [
    ["continuite-01", "Connexion / récupération de compte", 4, 1],
    ["continuite-02", "Création et mise à jour métier", 4, 1],
    ["continuite-03", "Paiement / facturation / webhook", 2, 0.25],
    ["continuite-04", "Exports, reporting et rapprochement", 24, 4],
    ["continuite-05", "Administration et support", 8, 4],
  ];
  const last = 5 + rows.length;
  sheet.getRange("B5:M5").values = [[
    "ID",
    "Parcours",
    "RTO cible (h)",
    "RTO mesuré (h)",
    "RPO cible (h)",
    "RPO mesuré (h)",
    "Scénario testé",
    "Date ISO",
    "Réf preuve",
    "Propriétaire",
    "Approbateur",
    "Résultat",
  ]];
  header(sheet.getRange("B5:M5"));
  sheet.getRange(`B6:E${last}`).values = rows;
  sheet.getRange(`F6:L${last}`).values = rows.map(() => [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  sheet.getRange(`M6:M${last}`).formulas = rows.map((_, index) => {
    const row = index + 6;
    return [
      `=IF(OR(F${row}="",G${row}="",LEN(H${row})<8,LEN(I${row})<>10,LEN(J${row})<6,LEN(K${row})<3,LEN(L${row})<3),"INCONNU",IF(AND(F${row}<=D${row},G${row}<=E${row},I${row}<='LIRE_D_ABORD'!$C$15,I${row}<='LIRE_D_ABORD'!$K$10),"RESOLU","STOP"))`,
    ];
  });
  body(sheet.getRange(`B6:M${last}`), 58);
  input(sheet.getRange(`F6:L${last}`));
  formula(sheet.getRange(`M6:M${last}`));
  sheet.dataValidations.add({
    range: `F6:G${last}`,
    rule: {
      type: "decimal",
      operator: "between",
      formula1: 0,
      formula2: MAX_HOURS,
    },
  });
  statusRules(sheet.getRange(`M6:M${last}`));
  addTable(sheet, `B5:M${last}`, "T_Rto_Rpo");
}

{
  const sheet = sheets.ACCES;
  const rows = [
    ["access-01", "Organisation Git", "Administrer dépôt, équipes et protections"],
    ["access-02", "Build / registry", "Construire, signer et promouvoir l’artefact"],
    ["access-03", "Cloud production", "Déployer, rollback et consulter l’audit"],
    ["access-04", "Base / stockage", "Lire, écrire, restaurer et auditer"],
    ["access-05", "DNS / domaines", "Modifier puis récupérer le compte"],
    ["access-06", "Paiement / e-mail", "Opérer, rapprocher et révoquer"],
    ["access-07", "Observabilité", "Lire métriques, logs, traces et alertes"],
    ["access-08", "Secrets / sessions", "Référencer, faire tourner et révoquer"],
  ];
  const last = 5 + rows.length;
  sheet.getRange("B5:N5").values = [[
    "ID",
    "Ressource",
    "Action attendue",
    "Compte entreprise",
    "Rôle attendu",
    "Rôle observé",
    "Tenant / environnement",
    "Réf secret (jamais valeur)",
    "Test de récupération",
    "Preuve",
    "Date ISO",
    "Propriétaire",
    "Résultat",
  ]];
  header(sheet.getRange("B5:N5"));
  sheet.getRange(`B6:D${last}`).values = rows;
  sheet.getRange(`E6:M${last}`).values = rows.map(() => [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  sheet.getRange(`N6:N${last}`).formulas = rows.map((_, index) => {
    const row = index + 6;
    return [
      `=IF(OR(LEN(E${row})<3,LEN(F${row})<3,LEN(G${row})<3,LEN(H${row})<3,LEN(I${row})<6,LEN(J${row})<3,LEN(K${row})<6,LEN(L${row})<>10,LEN(M${row})<3),"INCONNU",IF(AND(F${row}=G${row},L${row}<='LIRE_D_ABORD'!$C$15,L${row}<='LIRE_D_ABORD'!$K$10),"RESOLU","STOP"))`,
    ];
  });
  body(sheet.getRange(`B6:N${last}`), 62);
  input(sheet.getRange(`E6:M${last}`));
  formula(sheet.getRange(`N6:N${last}`));
  statusRules(sheet.getRange(`N6:N${last}`));
  addTable(sheet, `B5:N${last}`, "T_Acces");
}

{
  const sheet = sheets.PARCOURS_METIER;
  const rows = [
    ["metier-01", "Authentification", "Connexion, déconnexion et récupération"],
    ["metier-02", "Autorisation", "Rôle, ressource, action et tenant"],
    ["metier-03", "Création", "Une commande produit une seule écriture"],
    ["metier-04", "Paiement", "Succès, échec, remboursement et rapprochement"],
    ["metier-05", "Webhook", "Signature, ordre, doublon et rejeu"],
    ["metier-06", "Retry", "Reprise sans double effet"],
    ["metier-07", "Concurrence", "Deux requêtes ne corrompent pas l’état"],
    ["metier-08", "Export", "Exactitude, périmètre et droit d’accès"],
    ["metier-09", "Suppression", "Rétention, cascade et journal d’audit"],
    ["metier-10", "Dégradation", "Quota, timeout et dépendance indisponible"],
  ];
  const last = 5 + rows.length;
  sheet.getRange("B5:M5").values = [[
    "ID",
    "Parcours",
    "Invariant attendu",
    "Précondition",
    "Jeu de données",
    "Action",
    "Résultat observé",
    "Réconciliation",
    "Preuve",
    "Date ISO",
    "Propriétaire",
    "Résultat",
  ]];
  header(sheet.getRange("B5:M5"));
  sheet.getRange(`B6:D${last}`).values = rows;
  sheet.getRange(`E6:L${last}`).values = rows.map(() => [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  sheet.getRange(`M6:M${last}`).formulas = rows.map((_, index) => {
    const row = index + 6;
    return [
      `=IF(COUNTBLANK(E${row}:L${row})>0,"INCONNU",IF(AND(LEN(H${row})>=3,LEN(I${row})>=3,LEN(J${row})>=6,LEN(K${row})=10,K${row}<='LIRE_D_ABORD'!$C$15,K${row}<='LIRE_D_ABORD'!$K$10,LEN(L${row})>=3),"RESOLU","STOP"))`,
    ];
  });
  body(sheet.getRange(`B6:M${last}`), 66);
  input(sheet.getRange(`E6:L${last}`));
  formula(sheet.getRange(`M6:M${last}`));
  statusRules(sheet.getRange(`M6:M${last}`));
  addTable(sheet, `B5:M${last}`, "T_Parcours_Metier");
}

{
  const sheet = sheets.PRODUCTION;
  const rows = [
    ["prod-01", "Logs", "Corrélation, erreurs et données sensibles"],
    ["prod-02", "Métriques", "Latence, erreurs, saturation et métier"],
    ["prod-03", "Traces", "Parcours critique de bout en bout"],
    ["prod-04", "Alertes", "Seuil, fenêtre, routage et acquittement"],
    ["prod-05", "Quotas", "Capacité, limite, consommation et action"],
    ["prod-06", "Charge", "Test réaliste avec données représentatives"],
    ["prod-07", "Incident", "Runbook, chronologie, postmortem et suivi"],
    ["prod-08", "Support", "SLA, escalade, propriétaire et continuité"],
  ];
  const last = 5 + rows.length;
  sheet.getRange("B5:M5").values = [[
    "ID",
    "Contrôle",
    "Attendu",
    "Environnement",
    "Seuil / SLO",
    "Mesure",
    "Fenêtre",
    "Alerte / runbook",
    "Preuve",
    "Date ISO",
    "Propriétaire",
    "Résultat",
  ]];
  header(sheet.getRange("B5:M5"));
  sheet.getRange(`B6:D${last}`).values = rows;
  sheet.getRange(`E6:L${last}`).values = rows.map(() => [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  sheet.getRange(`M6:M${last}`).formulas = rows.map((_, index) => {
    const row = index + 6;
    return [
      `=IF(COUNTBLANK(E${row}:L${row})>0,"INCONNU",IF(AND(LEN(J${row})>=6,LEN(K${row})=10,K${row}<='LIRE_D_ABORD'!$C$15,K${row}<='LIRE_D_ABORD'!$K$10,LEN(L${row})>=3),"RESOLU","STOP"))`,
    ];
  });
  body(sheet.getRange(`B6:M${last}`), 62);
  input(sheet.getRange(`E6:L${last}`));
  formula(sheet.getRange(`M6:M${last}`));
  statusRules(sheet.getRange(`M6:M${last}`));
  addTable(sheet, `B5:M${last}`, "T_Production");
}

{
  const sheet = sheets.MIGRATION;
  const rows = [
    ["migration-01", "Gel et baseline", "Périmètre, commit et exports figés"],
    ["migration-02", "Environnement cible", "Build reproductible et observé"],
    ["migration-03", "Répétition données", "Migration sur copie et réconciliation"],
    ["migration-04", "Double run", "Écarts métier suivis et expliqués"],
    ["migration-05", "Bascule", "Autorité, fenêtre et critères Go/No-Go"],
    ["migration-06", "Rollback", "Seuil, décisionnaire et procédure testée"],
    ["migration-07", "Hypercare", "Alertes, support, incidents et SLA"],
    ["migration-08", "Sortie", "Archives, révocations, contrats et preuves"],
  ];
  const last = 5 + rows.length;
  sheet.getRange("B5:N5").values = [[
    "ID",
    "Phase",
    "Critère",
    "Autorité",
    "Entrée",
    "Sortie",
    "Rollback",
    "Réconciliation",
    "Preuve",
    "Date ISO",
    "Propriétaire",
    "Statut",
    "Résultat",
  ]];
  header(sheet.getRange("B5:N5"));
  sheet.getRange(`B6:D${last}`).values = rows;
  sheet.getRange(`E6:M${last}`).values = rows.map(() => [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "À faire",
    "",
  ]);
  sheet.getRange(`N6:N${last}`).formulas = rows.map((_, index) => {
    const row = index + 6;
    return [
      `=IF(OR(COUNTBLANK(E${row}:L${row})>0,M${row}="À faire"),"INCONNU",IF(AND(M${row}="Validé",J${row}<='LIRE_D_ABORD'!$C$15,J${row}<='LIRE_D_ABORD'!$K$10),"RESOLU","STOP"))`,
    ];
  });
  body(sheet.getRange(`B6:N${last}`), 62);
  input(sheet.getRange(`E6:M${last}`));
  formula(sheet.getRange(`N6:N${last}`));
  sheet.getRange(`M6:M${last}`).dataValidation = {
    rule: { type: "list", values: ["À faire", "Testé", "Validé", "Échec"] },
  };
  statusRules(sheet.getRange(`N6:N${last}`));
  addTable(sheet, `B5:N${last}`, "T_Migration");
}

const trajectories = [
  {
    id: "conserve",
    label: "Conserver",
    purpose: "Maintenir le socle prouvé sans changement structurel inutile.",
    values: [10_000, 1_000, 12_000, 100, 10, 50, 0, 0, 5_000],
  },
  {
    id: "stabilise",
    label: "Stabiliser",
    purpose: "Corriger les risques prioritaires et documenter l’exploitation.",
    values: [25_000, 1_500, 12_000, 200, 10, 50, 2, 1_000, 5_000],
  },
  {
    id: "migrate",
    label: "Migrer progressivement",
    purpose: "Remplacer les composants justifiés avec coexistence et rollback.",
    values: [60_000, 1_800, 12_000, 300, 15, 50, 4, 2_000, 6_000],
  },
  {
    id: "rewrite",
    label: "Réécrire",
    purpose: "Reconstruire le même service puis migrer données et usages.",
    values: [120_000, 2_000, 18_000, 600, 20, 50, 6, 2_000, 8_000],
  },
  {
    id: "stop",
    label: "Arrêter proprement",
    purpose: "Exporter, archiver, informer, révoquer et satisfaire les obligations.",
    values: [20_000, 200, 2_400, 100, 2, 50, 0, 0, 10_000],
  },
];
const tcoHorizons = [
  { column: "C", months: 12 },
  { column: "D", months: 36 },
  { column: "E", months: 60 },
];
const tcoExpectedValues = [
  [50_000, 110_000, 170_000],
  [78_000, 150_000, 222_000],
  [131_600, 216_800, 302_000],
  [224_000, 332_000, 440_000],
  [41_000, 53_000, 65_000],
];
const tcoOutputControls = trajectories.flatMap((trajectory, trajectoryIndex) =>
  tcoHorizons.map((horizon, horizonIndex) => {
    const row = trajectoryIndex + 6;
    const address = `${horizon.column}${row}`;
    return {
      label: `TCO ${trajectory.label} ${horizon.months} mois`,
      sheet: "TCO_12_36_60",
      address,
      expected: tcoExpectedValues[trajectoryIndex][horizonIndex],
      tolerance: 0.01,
      note: "Oracle indépendant",
    };
  }),
);
const riskOutputControls = [
  {
    label: "Capacité immobilisée",
    sheet: "RISQUE_PANNE",
    address: "C19",
    expected: 8_400,
    tolerance: 0.01,
    note: "Durée × personnes × taux",
  },
  {
    label: "Coût observable",
    sheet: "RISQUE_PANNE",
    address: "C20",
    expected: 16_000,
    tolerance: 0.01,
    note: "Capacité + coûts observables",
  },
  {
    label: "Perte annuelle attendue",
    sheet: "RISQUE_PANNE",
    address: "C21",
    expected: 4_000,
    tolerance: 0.01,
    note: "Observable × probabilité",
  },
  {
    label: "Statut de probabilité",
    sheet: "RISQUE_PANNE",
    address: "C22",
    expected: "CONNUE",
    tolerance: 0,
    note: "Source et date requises",
  },
  {
    label: "Validité du modèle de panne",
    sheet: "RISQUE_PANNE",
    address: "C23",
    expected: "VALIDE",
    tolerance: 0,
    note: "Entrées et probabilité valides",
  },
];
const governedOutputControls = [
  ...tcoOutputControls,
  ...riskOutputControls,
];

{
  const sheet = sheets.HYPOTHESES_TCO;
  sheet.getRange("B5:M5").values = [[
    "ID",
    "Trajectoire",
    "Ponctuel (€)",
    "Mensuel (€)",
    "Annuel (€)",
    "Heures internes ponctuelles",
    "Heures internes / mois",
    "Taux interne (€/h)",
    "Double run (mois)",
    "Double run (€/mois)",
    "Sortie (€)",
    "Validité",
  ]];
  header(sheet.getRange("B5:M5"));
  sheet.getRange("B6:L10").values = trajectories.map((trajectory) => [
    trajectory.id,
    trajectory.label,
    ...trajectory.values,
  ]);
  sheet.getRange("M6:M10").formulas = trajectories.map((_, index) => {
    const row = index + 6;
    return [
      `=IF(COUNT(D${row}:L${row})<9,"INCONNU",IF(AND(MIN(D${row}:L${row})>=0,MAX(D${row}:F${row})<='LIRE_D_ABORD'!$K$6,MAX(G${row}:H${row})<='LIRE_D_ABORD'!$K$7,I${row}<='LIRE_D_ABORD'!$K$6,J${row}<=60,INT(J${row})=J${row},K${row}<='LIRE_D_ABORD'!$K$6,L${row}<='LIRE_D_ABORD'!$K$6,ROUND(D${row},'LIRE_D_ABORD'!$K$11)=D${row},ROUND(E${row},'LIRE_D_ABORD'!$K$11)=E${row},ROUND(F${row},'LIRE_D_ABORD'!$K$11)=F${row},ROUND(G${row},'LIRE_D_ABORD'!$K$11)=G${row},ROUND(H${row},'LIRE_D_ABORD'!$K$11)=H${row},ROUND(I${row},'LIRE_D_ABORD'!$K$11)=I${row},ROUND(K${row},'LIRE_D_ABORD'!$K$11)=K${row},ROUND(L${row},'LIRE_D_ABORD'!$K$11)=L${row}),"VALIDE","STOP"))`,
    ];
  });
  body(sheet.getRange("B6:M10"), 62);
  input(sheet.getRange("D6:L10"));
  formula(sheet.getRange("M6:M10"));
  sheet.getRange("D6:F10").format.numberFormat =
    '#,##0.00" €";[Red](#,##0.00" €");-';
  sheet.getRange("I6:I10").format.numberFormat =
    '#,##0.00" €";[Red](#,##0.00" €");-';
  sheet.getRange("K6:L10").format.numberFormat =
    '#,##0.00" €";[Red](#,##0.00" €");-';
  sheet.getRange("G6:H10").format.numberFormat = "#,##0.00";
  sheet.getRange("J6:J10").format.numberFormat = "0";
  sheet.dataValidations.add({
    range: "D6:F10",
    rule: {
      type: "decimal",
      operator: "between",
      formula1: 0,
      formula2: MAX_COST,
    },
  });
  sheet.dataValidations.add({
    range: "G6:H10",
    rule: {
      type: "decimal",
      operator: "between",
      formula1: 0,
      formula2: MAX_HOURS,
    },
  });
  sheet.dataValidations.add({
    range: "I6:I10",
    rule: {
      type: "decimal",
      operator: "between",
      formula1: 0,
      formula2: MAX_COST,
    },
  });
  sheet.dataValidations.add({
    range: "J6:J10",
    rule: { type: "whole", operator: "between", formula1: 0, formula2: 60 },
  });
  sheet.dataValidations.add({
    range: "K6:L10",
    rule: {
      type: "decimal",
      operator: "between",
      formula1: 0,
      formula2: MAX_COST,
    },
  });
  statusRules(sheet.getRange("M6:M10"));
  addTable(sheet, "B5:M10", "T_Hypotheses_TCO");
  section(sheet, "B13:M13", "AVERTISSEMENT");
  sheet.getRange("B14:M15").merge(true);
  sheet.getRange("B14").values = [[
    "EXEMPLE FICTIF : ces chiffres illustrent la mécanique et ne constituent ni prix de marché ni devis.",
  ]];
  sheet.getRange("B15").values = [[
    "La décision finale reste verrouillée tant que LIRE_D_ABORD!C18 n’est pas confirmé OUI après remplacement et sourçage.",
  ]];
  unknown(sheet.getRange("B14:M15"));
}

{
  const sheet = sheets.TCO_12_36_60;
  sheet.getRange("B5:G5").values = [[
    "Trajectoire",
    12,
    36,
    60,
    "Validité agrégat",
    "Finalité",
  ]];
  header(sheet.getRange("B5:G5"));
  sheet.getRange("B6:B10").values = trajectories.map((item) => [item.label]);
  sheet.getRange("G6:G10").values = trajectories.map((item) => [item.purpose]);
  for (let row = 6; row <= 10; row += 1) {
    for (const column of ["C", "D", "E"]) {
      const horizonCell = `${column}$5`;
      const internalOneOff =
        `ROUND('HYPOTHESES_TCO'!$G${row}*` +
        `'HYPOTHESES_TCO'!$I${row},${MAX_DECIMALS})`;
      const internalMonthly =
        `ROUND('HYPOTHESES_TCO'!$H${row}*` +
        `'HYPOTHESES_TCO'!$I${row}*${horizonCell},${MAX_DECIMALS})`;
      const raw =
        `'HYPOTHESES_TCO'!$D${row}+` +
        `'HYPOTHESES_TCO'!$E${row}*${horizonCell}+` +
        `'HYPOTHESES_TCO'!$F${row}*(${horizonCell}/12)+` +
        `${internalOneOff}+` +
        `${internalMonthly}+` +
        `'HYPOTHESES_TCO'!$K${row}*MIN('HYPOTHESES_TCO'!$J${row},${horizonCell})+` +
        `'HYPOTHESES_TCO'!$L${row}`;
      sheet.getRange(`${column}${row}`).formulas = [[
        `=IF('HYPOTHESES_TCO'!$M${row}<>"VALIDE","ND",IF(ROUND(${raw},${MAX_DECIMALS})<='LIRE_D_ABORD'!$K$9,ROUND(${raw},${MAX_DECIMALS}),"STOP"))`,
      ]];
    }
    sheet.getRange(`F${row}`).formulas = [[
      `=IF(COUNT(C${row}:E${row})=3,"VALIDE",IF(COUNTIF(C${row}:E${row},"STOP")>0,"STOP","INCONNU"))`,
    ]];
  }
  body(sheet.getRange("B6:G10"), 60);
  formula(sheet.getRange("C6:F10"));
  sheet.getRange("C6:E10").format.numberFormat =
    '#,##0.00" €";[Red](#,##0.00" €");-';
  statusRules(sheet.getRange("C6:F10"));
  addTable(sheet, "B5:G10", "T_TCO_12_36_60");
  section(sheet, "B13:G13", "SYNTHÈSE COMPARABLE — LE MOINS CHER N’EST PAS UNE DÉCISION");
  sheet.getRange("B14:E16").values = [
    ["Horizon", 12, 36, 60],
    ["Minimum (€)", "", "", ""],
    ["Trajectoire minimum", "", "", ""],
  ];
  sheet.getRange("C15:E15").formulas = [
    ["=MIN(C6:C10)", "=MIN(D6:D10)", "=MIN(E6:E10)"],
  ];
  sheet.getRange("C16:E16").formulas = [
    [
      "=INDEX(B6:B10,MATCH(C15,C6:C10,0))",
      "=INDEX(B6:B10,MATCH(D15,D6:D10,0))",
      "=INDEX(B6:B10,MATCH(E15,E6:E10,0))",
    ],
  ];
  body(sheet.getRange("B14:E16"), 34);
  formula(sheet.getRange("C15:E16"));
  sheet.getRange("C15:E15").format.numberFormat =
    '#,##0.00" €";[Red](#,##0.00" €");-';
}

{
  const sheet = sheets.RISQUE_PANNE;
  sheet.getRange("B5:E5").values = [[
    "Paramètre",
    "Entrée",
    "Unité",
    "Limite / règle",
  ]];
  header(sheet.getRange("B5:E5"));
  sheet.getRange("B6:E16").values = [
    ["Durée de panne", 8, "heures", "> 0 ; ≤ 1 000 000"],
    ["Personnes affectées", 25, "personnes", "entier > 0 ; ≤ 10 000 000"],
    ["Coût horaire chargé", 42, "€/h", "0 à 1 Md€ ; 2 décimales"],
    ["Marge contributive perdue", 3_600, "€", "0 à 1 Md€ ; 2 décimales"],
    ["Rattrapage", 2_000, "€", "0 à 1 Md€ ; 2 décimales"],
    ["Prestataires", 1_000, "€", "0 à 1 Md€ ; 2 décimales"],
    ["Communication", 500, "€", "0 à 1 Md€ ; 2 décimales"],
    ["Remboursements / pénalités", 500, "€", "0 à 1 Md€ ; 2 décimales"],
    ["Probabilité annuelle", 25, "%", "nullable ; si saisie 0 à 100"],
    [
      "Source / hypothèse de probabilité",
      "Hypothèse fictive documentée pour le cas pédagogique",
      "texte",
      "≥ 8 caractères si probabilité fournie",
    ],
    ["Date de probabilité", AS_OF, "ISO", `≤ ${AS_OF}`],
  ];
  body(sheet.getRange("B6:E16"), 40);
  input(sheet.getRange("C6:C16"));
  sheet.getRange("C6:C13").format.numberFormat = "#,##0.00";
  sheet.getRange("C14").format.numberFormat = '0.00"%"';
  sheet.dataValidations.add({
    range: "C6:C6",
    rule: {
      type: "decimal",
      operator: "between",
      formula1: 0.01,
      formula2: MAX_HOURS,
    },
  });
  sheet.dataValidations.add({
    range: "C7:C7",
    rule: {
      type: "whole",
      operator: "between",
      formula1: 1,
      formula2: MAX_COUNT,
    },
  });
  sheet.dataValidations.add({
    range: "C8:C13",
    rule: {
      type: "decimal",
      operator: "between",
      formula1: 0,
      formula2: MAX_COST,
    },
  });
  sheet.dataValidations.add({
    range: "C14:C14",
    rule: {
      type: "decimal",
      operator: "between",
      formula1: 0,
      formula2: 100,
    },
  });
  addTable(sheet, "B5:E16", "T_Risque_Entrees");

  section(sheet, "B18:E18", "CALCULS");
  sheet.getRange("B19:C23").values = [
    ["Capacité immobilisée (€)", ""],
    ["Coût observable (€)", ""],
    ["Perte annuelle attendue (€)", ""],
    ["État probabilité", ""],
    ["Validité du bloc", ""],
  ];
  sheet.getRange("C19:C23").formulas = [
    [
      "=IF(COUNT(C6:C13)<8,\"ND\",IF(AND(C6>0,C6<='LIRE_D_ABORD'!$K$7,ROUND(C6,'LIRE_D_ABORD'!$K$11)=C6,C7>0,C7<='LIRE_D_ABORD'!$K$8,INT(C7)=C7,MIN(C8:C13)>=0,MAX(C8:C13)<='LIRE_D_ABORD'!$K$6,ROUND(C8,'LIRE_D_ABORD'!$K$11)=C8,ROUND(C9,'LIRE_D_ABORD'!$K$11)=C9,ROUND(C10,'LIRE_D_ABORD'!$K$11)=C10,ROUND(C11,'LIRE_D_ABORD'!$K$11)=C11,ROUND(C12,'LIRE_D_ABORD'!$K$11)=C12,ROUND(C13,'LIRE_D_ABORD'!$K$11)=C13),ROUND(C6*C7*C8,2),\"STOP\"))",
    ],
    [
      "=IF(ISNUMBER(C19),IF(ROUND(SUM(C19,C9:C13),2)<='LIRE_D_ABORD'!$K$9,ROUND(SUM(C19,C9:C13),2),\"STOP\"),\"ND\")",
    ],
    [
      '=IF(C22="NON_FOURNIE","ND",IF(AND(C22="CONNUE",ISNUMBER(C20)),ROUND(C20*C14/100,2),"ND"))',
    ],
    [
      `=IF(AND(C14="",C15="",C16=""),"NON_FOURNIE",IF(AND(ISNUMBER(C14),C14>=0,C14<=100,ROUND(C14,'LIRE_D_ABORD'!$K$11)=C14,LEN(C15)>=8,LEN(C16)=10,C16<='LIRE_D_ABORD'!$C$15,C16<='LIRE_D_ABORD'!$K$10),"CONNUE","INVALIDE"))`,
    ],
    [
      '=IF(AND(ISNUMBER(C20),OR(C22="CONNUE",C22="NON_FOURNIE")),"VALIDE",IF(OR(C19="STOP",C20="STOP",C22="INVALIDE"),"STOP","INCONNU"))',
    ],
  ];
  body(sheet.getRange("B19:C23"), 40);
  formula(sheet.getRange("C19:C23"));
  sheet.getRange("C19:C21").format.numberFormat =
    '#,##0.00" €";[Red](#,##0.00" €");-';
  statusRules(sheet.getRange("C19:C23"));
  sheet.getRange("B25:E27").merge(true);
  sheet.getRange("B25").values = [[
    "Le coût observable est calculé même sans probabilité. Si la probabilité est absente avec source et date vides, la perte annuelle attendue reste ND — jamais 0.",
  ]];
  sheet.getRange("B26").values = [[
    "Une probabilité saisie exige une source documentée et une date ISO non future.",
  ]];
  sheet.getRange("B27").values = [[
    "EXEMPLE FICTIF : remplacer toutes les entrées avant toute utilisation décisionnelle.",
  ]];
  body(sheet.getRange("B25:E27"), 42);
  unknown(sheet.getRange("B27:E27"));
}

{
  const sheet = sheets.DECISION;
  sheet.getRange("B5:E5").values = [[
    "Contrôle",
    "Valeur",
    "Règle",
    "Effet",
  ]];
  header(sheet.getRange("B5:E5"));
  sheet.getRange("B6:E18").values = [
    ["Mode", "", "normal requis ; incident/litige/autorité absente = STOP", ""],
    ["Contexte complet", "", "référence + date ISO + périmètre", ""],
    ["STOP bloquants", "", "aucun", ""],
    ["Bloquants non résolus", "", "aucun pour comparer", ""],
    ["TCO", "", "5 trajectoires valides à 12/36/60", ""],
    ["Risque de panne", "", "observable valide ; probabilité nullable", ""],
    ["Majeurs non résolus", "", "réserves ouvertes admises pour COMPARABLE", ""],
    ["Étape", "", "STOP > INCOMPLET > COMPARABLE > DECISION_HUMAINE", ""],
    ["Valeurs fictives remplacées", "", "OUI requis pour finaliser", ""],
    ["Références sans secret", "", "OUI requis ; scan best effort", ""],
    ["Score", "AUCUN_SCORE", "aucun score ne compense un STOP", ""],
    ["Export brouillon", "", "possible si aucune valeur sensible", ""],
    ["Finalisation", "", "étape admissible + données remplacées + aucun secret", ""],
  ];
  sheet.getRange("C6:C18").formulas = [
    ["='LIRE_D_ABORD'!$C$17"],
    [
      `=IF(AND(LEN('LIRE_D_ABORD'!$C$14)>=3,LEN('LIRE_D_ABORD'!$C$15)=10,'LIRE_D_ABORD'!$C$15<='LIRE_D_ABORD'!$K$10,LEN('LIRE_D_ABORD'!$C$16)>=8),"COMPLET","INCOMPLET")`,
    ],
    ["=SUM('INVENTAIRE'!$O$6:$O$14)"],
    ["=SUM('INVENTAIRE'!$P$6:$P$14)"],
    [
      '=IF(COUNTIF(\'TCO_12_36_60\'!$F$6:$F$10,"VALIDE")=5,"CONNU","INCOMPLET")',
    ],
    ["='RISQUE_PANNE'!$C$23"],
    ["=SUM('INVENTAIRE'!$Q$6:$Q$14)"],
    [
      '=IF(OR(C6="incident",C6="dispute",C6="no-authority",C8>0),"STOP",IF(OR(C6<>"normal",C7<>"COMPLET",C9>0,C10<>"CONNU",C11<>"VALIDE"),"INCOMPLET",IF(C12>0,"COMPARABLE","DECISION_HUMAINE")))',
    ],
    ["='LIRE_D_ABORD'!$C$18"],
    ["='LIRE_D_ABORD'!$C$19"],
    [null],
    ['=IF(C15="OUI","AUTORISE_BROUILLON","BLOQUE_SECRETS")'],
    [
      '=IF(C14<>"OUI","BLOQUE_EXEMPLE_FICTIF",IF(C15<>"OUI","BLOQUE_SCAN_SECRETS",IF(OR(C13="COMPARABLE",C13="DECISION_HUMAINE"),"FINALISABLE","BLOQUE_ETAPE")))',
    ],
  ];
  body(sheet.getRange("B6:E18"), 44);
  formula(sheet.getRange("C6:C18"));
  sheet.getRange("C16").values = [["AUCUN_SCORE"]];
  stop(sheet.getRange("C18"));
  statusRules(sheet.getRange("C6:C18"));
  addTable(sheet, "B5:E18", "T_Decision");
  section(sheet, "B21:E21", "ORDRE DE DÉCISION");
  sheet.getRange("B22:E26").values = [
    ["1", "STOP", "Suspendre les changements", "Traiter propriété, autorité, incident ou preuve bloquante en échec."],
    ["2", "INCOMPLET", "Compléter les faits", "Ne pas inventer les inconnues et ne pas les convertir en zéro."],
    ["3", "COMPARABLE", "Comparer avec réserves", "Même périmètre ; majeurs ouverts visibles."],
    ["4", "DECISION_HUMAINE", "Arbitrer", "Les preuves et coûts éclairent mais ne remplacent pas la décision."],
    ["5", "FINALISABLE", "Contrôle humain", "Confirmer remplacement des exemples et absence de secret."],
  ];
  body(sheet.getRange("B22:E26"), 48);
}

const externalTests = [
  ["MUT-01", "mutation", "HYPOTHESES_TCO!D6", "Ponctuel + 1 000 €", "TCO 12/36/60 + 1 000 €"],
  ["MUT-02", "mutation", "HYPOTHESES_TCO!E7", "Mensuel + 100 €", "TCO + horizon × 100 €"],
  ["MUT-03", "mutation", "HYPOTHESES_TCO!G8", "Heures ponctuelles + 10", "TCO + 10 × taux interne"],
  ["MUT-04", "mutation", "HYPOTHESES_TCO!J9", "Double run - 1 mois", "TCO - coût mensuel double run"],
  ["MUT-05", "mutation", "RISQUE_PANNE!C6", "Durée + 1 h", "Capacité + personnes × coût horaire"],
  ["MUT-06", "mutation", "HYPOTHESES_TCO!D6:L10", "Fixture décimale anti-arrondi", `${tcoOutputControls.length} cellules TCO strictement égales à l’oracle en centimes`],
  ["ADV-01", "adversarial", "HYPOTHESES_TCO!D6", "vide", "INCONNU ; TCO ND"],
  ["ADV-02", "adversarial", "HYPOTHESES_TCO!D6", "-1", "STOP"],
  ["ADV-03", "adversarial", "HYPOTHESES_TCO!D6", "1 000 000 000,01", "STOP"],
  ["ADV-04", "adversarial", "HYPOTHESES_TCO!J6", "1,5", "STOP car mois entier"],
  ["ADV-05", "adversarial", "RISQUE_PANNE!C7", "1,5", "STOP car compte entier"],
  ["ADV-06", "adversarial", "RISQUE_PANNE!C14", "25,123", "Probabilité INVALIDE : plus de deux décimales"],
  ["ADV-07", "adversarial", "RISQUE_PANNE!C14:C16", "probabilité vide + métadonnées", "INVALIDE"],
  ["ADV-08", "adversarial", "INVENTAIRE!H6", "failed", "STOP"],
  ["ADV-09", "adversarial", "INVENTAIRE!H6", "NA non permis", "STOP"],
  ["ADV-10", "adversarial", "LIRE_D_ABORD!C17", "incident", "STOP"],
  ...governedOutputControls.map((control, index) => [
    `SAB-${String(index + 1).padStart(2, "0")}`,
    "sabotage",
    `${control.sheet}!${control.address}`,
    "remplacer formule par 1",
    "CONTROLES = FAIL",
  ]),
];

{
  const sheet = sheets.TESTS;
  const last = 5 + externalTests.length;
  sheet.getRange("B5:H5").values = [[
    "ID",
    "Famille",
    "Cible",
    "Injection",
    "Attendu",
    "Exécution",
    "Résultat",
  ]];
  header(sheet.getRange("B5:H5"));
  sheet.getRange(`B6:F${last}`).values = externalTests;
  sheet.getRange(`G6:H${last}`).values = externalTests.map(() => [
    "Validateur externe",
    "SPÉCIFIÉ",
  ]);
  body(sheet.getRange(`B6:H${last}`), 52);
  unknown(sheet.getRange(`H6:H${last}`));
  addTable(sheet, `B5:H${last}`, "T_Tests");
  section(sheet, `B${last + 2}:H${last + 2}`, "PORTÉE");
  sheet.mergeCells(`B${last + 3}:H${last + 4}`);
  sheet.getRange(`B${last + 3}`).values = [[
    `Le rapport de validation réimporte les deux copies, calcule un oracle indépendant, exécute ces ${externalTests.length} scénarios et scanne les erreurs de formule. Ces lignes décrivent la recette ; elles ne prétendent pas être l’exécution elle-même.`,
  ]];
  body(sheet.getRange(`B${last + 3}:H${last + 4}`), 48);
}

{
  const sheet = sheets.CONTROLES;
  sheet.mergeCells("B4:H4");
  sheet.getRange("B4:H4").format = {
    fill: colors.greenSoft,
    font: { bold: true, color: colors.green, size: 14 },
    verticalAlignment: "center",
  };
  sheet.getRange("B4:H4").format.rowHeight = 30;
  sheet.getRange("B5:H5").values = [[
    "Contrôle",
    "Réel",
    "Attendu",
    "Tolérance",
    "Statut",
    "Où corriger",
    "Note",
  ]];
  header(sheet.getRange("B5:H5"));
  const controlSpecs = [
    ["Domaines de preuve", "=COUNTA('INVENTAIRE'!$B$6:$B$14)", 9, 0, "INVENTAIRE", "Dataset canonique"],
    [
      "Faits plateformes",
      `=COUNTA('SOURCE_BUILD'!$B$6:$B$${5 + platformFacts.length})`,
      platformFacts.length,
      0,
      "SOURCE_BUILD",
      "Dataset canonique dynamique",
    ],
    [
      "Sources officielles",
      `=COUNTA('SOURCES'!$B$6:$B$${5 + sources.length})`,
      sources.length,
      0,
      "SOURCES",
      "Dataset canonique dynamique",
    ],
    ["Preuves fictives résolues", '=COUNTIF(\'INVENTAIRE\'!$N$6:$N$14,"RESOLU")', 9, 0, "INVENTAIRE", "Seulement pour tester le moteur"],
    ...governedOutputControls.map((control) => [
      control.label,
      `='${control.sheet}'!$${control.address.replace(/(\D+)(\d+)/, "$1$$$2")}`,
      control.expected,
      control.tolerance,
      `${control.sheet}!${control.address}`,
      control.note,
    ]),
    ["Trajectoires TCO valides", '=COUNTIF(\'TCO_12_36_60\'!$F$6:$F$10,"VALIDE")', 5, 0, "HYPOTHESES_TCO", "Les cinq sont complètes"],
    ["Minimum 12 mois", "=MIN('TCO_12_36_60'!$C$6:$C$10)", 41_000, 0.01, "TCO_12_36_60", "Sortie visible"],
    ["Étape de décision", "='DECISION'!$C$13", "DECISION_HUMAINE", 0, "DECISION!C13", "Les preuves fictives testent la mécanique"],
    ["Finalisation verrouillée", "='DECISION'!$C$18", "BLOQUE_EXEMPLE_FICTIF", 0, "LIRE_D_ABORD!C18", "Verrou obligatoire"],
    ["Date maximale", "='LIRE_D_ABORD'!$K$10", AS_OF, 0, "LIRE_D_ABORD!K10", "Date de référence"],
    ["Absence de score", "='DECISION'!$C$16", "AUCUN_SCORE", 0, "DECISION!C16", "Aucun offset de STOP"],
    ["Marqueur fictif", "='LIRE_D_ABORD'!$C$18", "NON", 0, "LIRE_D_ABORD!C18", "Doit rester bloqué dans le modèle livré"],
    ["Nombre d’onglets", 17, 17, 0, "structure XLSX", "Revalidé après réimport"],
  ];
  const last = 5 + controlSpecs.length;
  sheet.getRange("B4").formulas = [[
    `=IF(COUNTIF(F6:F${last},"FAIL")=0,"MODEL STATUS: PASS","MODEL STATUS: FAIL")`,
  ]];
  sheet.getRange(`B6:E${last}`).values = controlSpecs.map((row) => [
    row[0],
    "",
    row[2],
    row[3],
  ]);
  sheet.getRange(`C6:C${last}`).formulas = controlSpecs.map((row) =>
    typeof row[1] === "string" && row[1].startsWith("=") ? [row[1]] : [null],
  );
  controlSpecs.forEach((row, index) => {
    if (!(typeof row[1] === "string" && row[1].startsWith("="))) {
      sheet.getRange(`C${index + 6}`).values = [[row[1]]];
    }
  });
  sheet.getRange(`F6:F${last}`).formulas = controlSpecs.map((_, index) => {
    const row = index + 6;
    return [
      `=IF(AND(ISNUMBER(C${row}),ISNUMBER(D${row})),IF(ABS(C${row}-D${row})<=E${row},"PASS","FAIL"),IF(C${row}=D${row},"PASS","FAIL"))`,
    ];
  });
  sheet.getRange(`G6:H${last}`).values = controlSpecs.map((row) => [
    row[4],
    row[5],
  ]);
  body(sheet.getRange(`B6:H${last}`), 42);
  formula(sheet.getRange(`C6:C${last}`));
  formula(sheet.getRange(`F6:F${last}`));
  statusRules(sheet.getRange(`F6:F${last}`));
  statusRules(sheet.getRange("B4:H4"));
  addTable(sheet, `B5:H${last}`, "T_Controles");
}

{
  const sheet = sheets.SOURCES;
  const last = 5 + sources.length;
  sheet.getRange("B5:H5").values = [[
    "ID",
    "Zone",
    "Organisme",
    "Titre",
    "URL officielle",
    "Usage",
    "Limite / revue",
  ]];
  header(sheet.getRange("B5:H5"));
  sheet.getRange(`B6:H${last}`).values = sources.map((source) => [
    source.id,
    source.zone,
    source.organisme,
    source.titre,
    source.url,
    source.usage,
    `${source.limite} — revue ${source.checkedAt}`,
  ]);
  sheet.getRange(`F6:F${last}`).format.font = {
    color: colors.blue,
    underline: true,
  };
  body(sheet.getRange(`B6:H${last}`), 76);
  addTable(sheet, `B5:H${last}`, "T_Sources");
  sheet.freezePanes.freezeColumns(2);
}

const commentTargets = [
  ["HYPOTHESES_TCO", "C6", "Hypothèse fictive. À remplacer par une estimation sourcée, datée et approuvée."],
  ["RISQUE_PANNE", "C14", "Probabilité nullable. Si elle est renseignée, la source et la date deviennent obligatoires."],
  ["LIRE_D_ABORD", "C18", "Passer à OUI uniquement après remplacement et sourçage de toutes les valeurs fictives héritées."],
];
for (const [sheetName, cell, message] of commentTargets) {
  workbook.comments.addThread({ cell: sheets[sheetName].getRange(cell) }, message);
}

for (const sheetName of sheetNames) {
  sheets[sheetName].freezePanes.freezeRows(5);
}
sheets.INVENTAIRE.freezePanes.freezeColumns(2);
sheets.SOURCE_BUILD.freezePanes.freezeColumns(2);
sheets.SOURCES.freezePanes.freezeColumns(2);

const inspect = await workbook.inspect({
  kind: "workbook,sheet,table,formula",
  maxChars: 24_000,
  tableMaxRows: 5,
  tableMaxCols: 8,
  options: { maxResults: 120 },
});
await fs.writeFile(
  path.join(outputDir, "generation-inspect.ndjson"),
  `${inspect.ndjson}\n`,
  "utf8",
);
const xlsx = await SpreadsheetFile.exportXlsx(workbook);
await xlsx.save(outputPath);
const frozenArchiveDir = await fs.mkdtemp(path.join(outputDir, ".freeze-"));
try {
  await execFileAsync("/usr/bin/unzip", ["-qq", outputPath, "-d", frozenArchiveDir]);
  for (let index = 0; index < sheetNames.length; index += 1) {
    const sheetPath = path.join(
      frozenArchiveDir,
      "xl",
      "worksheets",
      `sheet${index + 1}.xml`,
    );
    const freezeColumns = [1, 2, 16].includes(index) ? 2 : 0;
    const topLeftCell = freezeColumns ? "C6" : "A6";
    const activePane = freezeColumns ? "bottomRight" : "bottomLeft";
    let xml = await fs.readFile(sheetPath, "utf8");
    const pane = `<x:pane${freezeColumns ? ' xSplit="2"' : ""} ySplit="5" topLeftCell="${topLeftCell}" activePane="${activePane}" state="frozen" /><x:selection pane="${activePane}" />`;
    xml = xml.replace(
      /<x:sheetView([^>]*)\/>/,
      `<x:sheetView$1>${pane}</x:sheetView>`,
    );
    if (!xml.includes('state="frozen"')) {
      throw new Error(`Impossible de sérialiser les volets figés de ${sheetNames[index]}.`);
    }
    await fs.writeFile(sheetPath, xml, "utf8");
  }
  const patchedPath = path.join(outputDir, `.freeze-patched-${process.pid}.xlsx`);
  await execFileAsync("/usr/bin/zip", ["-qr", patchedPath, "."], {
    cwd: frozenArchiveDir,
  });
  await fs.rename(patchedPath, outputPath);
} finally {
  await fs.rm(frozenArchiveDir, { recursive: true, force: true });
}
await fs.copyFile(outputPath, publicPath);

console.log(
  JSON.stringify(
    {
      status: "GENERATED",
      sheets: sheetNames.length,
      tables: sheetNames.length,
      proofs: proofs.length,
      platformFacts: platformFacts.length,
      sources: sources.length,
      testsSpecified: externalTests.length,
      outputPath,
      publicPath,
      note: "Calculé par @oai/artifact-tool ; aucune recalculation Microsoft Excel réelle.",
    },
    null,
    2,
  ),
);
