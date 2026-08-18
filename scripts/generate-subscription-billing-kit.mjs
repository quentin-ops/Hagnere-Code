import fs from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { strFromU8, strToU8, unzipSync, zipSync } from "fflate";

const require = createRequire(import.meta.url);
const artifactTool = await import(
  pathToFileURL(require.resolve("@oai/artifact-tool")).href
);
const { SpreadsheetFile, Workbook } = artifactTool;

const workspace = process.cwd();
const acceptanceTests = JSON.parse(
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
const workbookSources = JSON.parse(
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
const outputDir = path.join(
  workspace,
  "output",
  "facturation-abonnements-saas-2026-07-28",
);
const publicPath = path.join(
  workspace,
  "public",
  "ressources",
  "kit-pilotage-facturation-saas.xlsx",
);
const previewDir = path.join(outputDir, "previews");

await fs.mkdir(outputDir, { recursive: true });
await fs.mkdir(previewDir, { recursive: true });
await fs.mkdir(path.dirname(publicPath), { recursive: true });

const workbook = Workbook.create();
const sheetNames = [
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
const sheets = Object.fromEntries(
  sheetNames.map((name) => [name, workbook.worksheets.add(name)]),
);

const colors = {
  ink: "#18181B",
  muted: "#5F6068",
  paper: "#FBFAF7",
  white: "#FFFFFF",
  line: "#E4E4E7",
  violet: "#6D28D9",
  violetSoft: "#F3E8FF",
  blue: "#2563EB",
  blueSoft: "#DBEAFE",
  emerald: "#047857",
  emeraldSoft: "#D1FAE5",
  amber: "#B45309",
  amberSoft: "#FEF3C7",
  rose: "#BE123C",
  roseSoft: "#FFE4E6",
};

const moneyFormat = '#,##0 "€";[Red](#,##0 "€");-';
const percentFormat = "0.0%";

function setupSheet(sheet) {
  sheet.showGridLines = false;
}

function serializeTestsFreezePane(xlsxBytes) {
  const archive = unzipSync(new Uint8Array(xlsxBytes));
  const worksheetPath = "xl/worksheets/sheet7.xml";
  const worksheet = archive[worksheetPath];
  if (!worksheet) {
    throw new Error(`Feuille TESTS introuvable dans ${worksheetPath}.`);
  }

  const xml = strFromU8(worksheet);
  const sheetView =
    '<x:sheetView showGridLines="0" workbookViewId="0" />';
  if (!xml.includes(sheetView)) {
    throw new Error(
      "Vue TESTS inattendue : impossible de sérialiser le volet figé.",
    );
  }

  const frozenSheetView = [
    '<x:sheetView showGridLines="0" workbookViewId="0">',
    '<x:pane xSplit="3" ySplit="5" topLeftCell="D6" activePane="bottomRight" state="frozen" />',
    '<x:selection pane="topRight" activeCell="D1" sqref="D1" />',
    '<x:selection pane="bottomLeft" activeCell="A6" sqref="A6" />',
    '<x:selection pane="bottomRight" activeCell="D6" sqref="D6" />',
    "</x:sheetView>",
  ].join("");

  archive[worksheetPath] = strToU8(xml.replace(sheetView, frozenSheetView));
  return zipSync(archive, { level: 6 });
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
    verticalAlignment: "center",
    horizontalAlignment: "left",
  };
  sheet.mergeCells(`A3:${lastColumn}3`);
  sheet.getRange("A3").values = [[subtitle]];
  sheet.getRange(`A3:${lastColumn}3`).format = {
    fill: colors.paper,
    font: { size: 10, color: colors.muted, italic: true },
    wrapText: true,
    verticalAlignment: "center",
  };
  sheet.getRange("A1").format.rowHeight = 28;
  sheet.getRange("A2").format.rowHeight = 28;
  sheet.getRange("A3").format.rowHeight = 34;
}

function sectionHeader(sheet, rangeAddress, text, fill = colors.violetSoft) {
  const range = sheet.getRange(rangeAddress);
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

function tableHeader(sheet, rangeAddress, fill = colors.ink) {
  sheet.getRange(rangeAddress).format = {
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

function inputStyle(range) {
  range.format = {
    fill: colors.blueSoft,
    font: { color: "#1E3A8A", bold: true },
    borders: {
      bottom: { style: "thin", color: "#93C5FD" },
    },
  };
}

function outputStyle(range, fill = colors.emeraldSoft) {
  range.format = {
    fill,
    font: { color: colors.ink, bold: true },
    borders: {
      bottom: { style: "thin", color: colors.line },
    },
  };
}

function setWidths(sheet, widths) {
  for (const [column, width] of Object.entries(widths)) {
    sheet.getRange(`${column}:${column}`).format.columnWidth = width;
  }
}

for (const name of sheetNames) {
  setupSheet(sheets[name]);
}

// ─────────────────────────────────────────────────────────────────────────────
// LIRE_D_ABORD
// ─────────────────────────────────────────────────────────────────────────────
{
  const sheet = sheets.LIRE_D_ABORD;
  titleBlock(
    sheet,
    "Kit de pilotage de la facturation SaaS",
    "Version 1.1 — 28 juillet 2026 — exemple fictif Planor — outil pédagogique, non comptable, fiscal ou juridique.",
    "H",
  );
  setWidths(sheet, {
    A: 4,
    B: 24,
    C: 21,
    D: 21,
    E: 21,
    F: 21,
    G: 22,
    H: 4,
  });
  sectionHeader(sheet, "B5:G5", "Commencez ici");
  sheet.getRange("B6:C9").values = [
    [
      "Question de direction",
      "Pouvez-vous relier une offre acceptée, une facture, un paiement, un droit d’accès et une écriture sans dépendre de la mémoire d’une personne ?",
    ],
    [
      "Mode d’emploi",
      "1. Remplissez REGLES. 2. Remplacez les hypothèses bleues du TCO. 3. Rapprochez un mois. 4. Exécutez les tests prioritaires. 5. Corrigez avant d’automatiser.",
    ],
    [
      "Ce que le kit décide",
      "Il compare un processus manuel, un moteur hébergé, une couche métier et un moteur spécifique sur les mêmes hypothèses.",
    ],
    [
      "Ce qu’il ne décide pas",
      "TVA applicable, conformité d’une facture, reconnaissance du revenu, validité d’un contrat, obligation d’utiliser une plateforme ou politique de suspension d’accès.",
    ],
  ];
  sheet.getRange("B6:B9").format = {
    fill: colors.paper,
    font: { bold: true, color: colors.ink },
    wrapText: true,
    verticalAlignment: "top",
  };
  sheet.getRange("C6:G9").merge(true);
  sheet.getRange("C6:G9").format = {
    wrapText: true,
    verticalAlignment: "top",
    borders: {
      bottom: { style: "thin", color: colors.line },
    },
  };
  sheet.getRange("B6:G9").format.rowHeight = 48;

  sectionHeader(sheet, "B11:G11", "Légende");
  sheet.getRange("B12:G14").values = [
    [
      "BLEU",
      "Entrée à remplacer",
      "VERT",
      "Résultat calculé",
      "AMBRE",
      "À confirmer",
    ],
    [
      "ROUGE",
      "STOP ou contrôle échoué",
      "GRIS",
      "Exemple fictif",
      "URL",
      "Source à rouvrir",
    ],
    [
      "Règle",
      "Décision métier",
      "Preuve",
      "Trace vérifiable",
      "Propriétaire",
      "Personne qui corrige",
    ],
  ];
  sheet.getRange("B12:B12").format.fill = colors.blueSoft;
  sheet.getRange("D12:D12").format.fill = colors.emeraldSoft;
  sheet.getRange("F12:F12").format.fill = colors.amberSoft;
  sheet.getRange("B13:B13").format.fill = colors.roseSoft;
  sheet.getRange("D13:D13").format.fill = colors.paper;
  sheet.getRange("F13:F13").format.fill = colors.violetSoft;
  sheet.getRange("B12:G14").format = {
    wrapText: true,
    borders: {
      bottom: { style: "thin", color: colors.line },
    },
  };

  sectionHeader(sheet, "B16:G16", "État du modèle");
  sheet.getRange("B17:C20").values = [
    ["Statut des contrôles", null],
    ["Hypothèses", "Fictives et remplaçables"],
    ["Données réelles", "Aucune"],
    ["Limite de décision", "GO technique ≠ conformité fiscale ou comptable"],
  ];
  sheet.getRange("D17:G20").merge(true);
  sheet.getRange("D17").formulas = [["='CONTROLES'!B4"]];
  sheet.getRange("D18").values = [
    ["Utilisez les cellules bleues ; les cellules vertes sont des résultats."],
  ];
  sheet.getRange("D19").values = [
    ["L’exemple Planor ne décrit ni client, ni tarif, ni performance réelle."],
  ];
  sheet.getRange("D20").values = [
    [
      "Escaladez les cas fiscaux, juridiques et comptables vers le professionnel adapté.",
    ],
  ];
  sheet.getRange("B17:B20").format = {
    fill: colors.paper,
    font: { bold: true },
  };
  sheet.getRange("C17:C20").format = { wrapText: true };
  sheet.getRange("D17:G20").format = {
    wrapText: true,
    fill: colors.emeraldSoft,
    font: { bold: true },
  };
  sheet.getRange("B17:G20").format.rowHeight = 38;
  sheet.freezePanes.freezeRows(3);
}

// ─────────────────────────────────────────────────────────────────────────────
// REGLES
// ─────────────────────────────────────────────────────────────────────────────
{
  const sheet = sheets.REGLES;
  titleBlock(
    sheet,
    "Règles commerciales et droits d’accès",
    "Remplissez une ligne par transition réellement différente. Une cellule vide signifie « non décidé », pas « réglage par défaut accepté ».",
    "J",
  );
  setWidths(sheet, {
    A: 4,
    B: 17,
    C: 22,
    D: 24,
    E: 24,
    F: 24,
    G: 22,
    H: 18,
    I: 16,
    J: 24,
  });
  sheet.getRange("B5:J5").values = [
    [
      "ID",
      "Transition",
      "Décision métier",
      "Document / facture",
      "Paiement",
      "Droit d’accès",
      "Propriétaire",
      "Statut",
      "Preuve ou question",
    ],
  ];
  tableHeader(sheet, "B5:J5");
  const rows = [
    [
      "R-01",
      "Essai sans carte",
      "Durée et issue à choisir",
      "Aucun document ou document commercial selon le cas",
      "Aucun moyen obligatoire",
      "Limiter, suspendre ou fermer selon règle écrite",
      "Produit",
      "À confirmer",
      "Que voit l’utilisateur au lendemain de l’essai ?",
    ],
    [
      "R-02",
      "Souscription mensuelle carte",
      "Date d’effet et offre acceptée",
      "Facture reliée à la période",
      "Événement asynchrone rapproché",
      "Ouvrir après condition décidée",
      "Finance + Produit",
      "À confirmer",
      "Identifiants communs offre/facture/paiement/droit",
    ],
    [
      "R-03",
      "Vente annuelle par virement",
      "Signature, date d’effet et échéance",
      "Devis + commande + facture annuelle",
      "Rapprochement banque/facture",
      "Ouvrir à la date contractuelle décidée",
      "Administration des ventes",
      "À confirmer",
      "Cas du virement sans référence",
    ],
    [
      "R-04",
      "Upgrade en cours de période",
      "Immédiat ou renouvellement",
      "Débit/crédit explicable",
      "Écart testé dans le moteur",
      "Nouveaux droits à la date décidée",
      "Produit + Finance",
      "À confirmer",
      "Facture précédente impayée ?",
    ],
    [
      "R-05",
      "Downgrade",
      "Immédiat ou prochaine échéance",
      "Crédit, report ou aucun remboursement selon règle validée",
      "Aucun remboursement implicite",
      "Droits réduits à la date décidée",
      "Produit + Finance",
      "À confirmer",
      "Prévenir le client avant perte de fonctions",
    ],
    [
      "R-06",
      "Paiement échoué",
      "Relance, délai et escalade",
      "Facture reste identifiable",
      "Tentatives et moyen alternatif",
      "Ne pas couper sur un signal isolé",
      "Finance + Support",
      "À confirmer",
      "Contrat, litige et virement ne sont pas un refus carte",
    ],
    [
      "R-07",
      "Facture contestée",
      "Responsable et délai de réponse",
      "Avoir éventuel traçable",
      "Paiement en attente ou partiel",
      "Décision explicite pendant le litige",
      "Finance",
      "À confirmer",
      "Motif, montant, preuve et réponse",
    ],
    [
      "R-08",
      "Résiliation fin de période",
      "Date de fin et préavis",
      "Dernière facture et solde",
      "Encaissements rapprochés",
      "Lecture/export/fermeture définis",
      "Support + Produit",
      "À confirmer",
      "Export et conservation des données",
    ],
    [
      "R-09",
      "Résiliation immédiate",
      "Cas permis et autorité",
      "Avoir/remboursement si applicable",
      "Remboursement relié à la facture",
      "Fermeture réversible et journalisée",
      "Direction",
      "STOP juridique",
      "Faire valider contrat et droit applicable",
    ],
    [
      "R-10",
      "Tarification à l’usage",
      "Unité, fenêtre, correction et clôture",
      "Quantité lisible et contestable",
      "Encaissement après quantité figée",
      "Droits indépendants de la mesure brute",
      "Produit + Finance",
      "À confirmer",
      "Mesure tardive ou dupliquée",
    ],
  ];
  sheet.getRange(`B6:J${5 + rows.length}`).values = rows;
  sheet.getRange(`B6:J${5 + rows.length}`).format = {
    wrapText: true,
    verticalAlignment: "top",
    borders: {
      bottom: { style: "thin", color: colors.line },
    },
  };
  sheet.getRange(`I6:I${5 + rows.length}`).dataValidation = {
    rule: {
      type: "list",
      values: [
        "À confirmer",
        "Décidée",
        "Testée",
        "STOP juridique",
        "STOP fiscal",
        "Hors périmètre",
      ],
    },
  };
  sheet.getRange(`H6:H${5 + rows.length}`).dataValidation = {
    rule: {
      type: "list",
      values: [
        "Direction",
        "Finance",
        "Produit",
        "Support",
        "Technique",
        "Administration des ventes",
        "Expert-comptable",
        "Conseil juridique",
      ],
    },
  };
  sheet
    .getRange(`I6:I${5 + rows.length}`)
    .conditionalFormats.add("containsText", {
      text: "STOP",
      format: {
        fill: colors.roseSoft,
        font: { color: colors.rose, bold: true },
      },
    });
  sheet
    .getRange(`I6:I${5 + rows.length}`)
    .conditionalFormats.add("containsText", {
      text: "Testée",
      format: {
        fill: colors.emeraldSoft,
        font: { color: colors.emerald, bold: true },
      },
    });
  sheet.freezePanes.freezeRows(5);
  sheet.freezePanes.freezeColumns(2);
}

// ─────────────────────────────────────────────────────────────────────────────
// TCO_24_MOIS
// ─────────────────────────────────────────────────────────────────────────────
{
  const sheet = sheets.TCO_24_MOIS;
  titleBlock(
    sheet,
    "Comparer quatre architectures sur 24 mois",
    "Toutes les valeurs bleues sont des hypothèses fictives. Le TCO exclut notamment paiement, taxes, comptabilité, litiges, plateforme agréée, migration, sortie et incidents.",
    "J",
  );
  setWidths(sheet, {
    A: 4,
    B: 26,
    C: 15,
    D: 16,
    E: 16,
    F: 30,
    G: 17,
    H: 17,
    I: 17,
    J: 19,
  });
  sectionHeader(sheet, "B5:E5", "Hypothèses communes", colors.blueSoft);
  sheet.getRange("B6:D12").values = [
    ["Variable", "Valeur", "Unité"],
    ["Horizon", 24, "mois"],
    ["Clients actifs moyens", 100, "clients"],
    ["Panier facturé moyen", 100, "€/client/mois"],
    ["Coût horaire interne", 45, "€/heure"],
    ["Frais variables hébergé", 0.007, "% du volume facturé"],
    ["Statut", "Hypothèses fictives", "À remplacer"],
  ];
  tableHeader(sheet, "B6:D6", colors.blue);
  inputStyle(sheet.getRange("C7:C11"));
  sheet.getRange("C7:C10").format.numberFormat = "#,##0";
  sheet.getRange("C11").format.numberFormat = percentFormat;
  sheet.getRange("B7:D12").format.borders = {
    bottom: { style: "thin", color: colors.line },
  };

  sectionHeader(sheet, "F5:J5", "Résultat central", colors.emeraldSoft);
  sheet.getRange("F6:J6").values = [
    ["Option", "Mise en place", "Récurrent", "Temps + variable", "TCO 24 mois"],
  ];
  tableHeader(sheet, "F6:J6", colors.emerald);
  const options = [
    ["Manuel explicite", 0, null, null, null],
    ["Moteur hébergé", 2800, null, null, null],
    ["Hébergé + couche métier", 14000, null, null, null],
    ["Moteur spécifique", 60000, null, null, null],
  ];
  sheet.getRange("F7:J10").values = options;
  sheet.getRange("H7").formulas = [["=0"]];
  sheet.getRange("H8").formulas = [["=150*'TCO_24_MOIS'!$C$7"]];
  sheet.getRange("H9").formulas = [["=700*'TCO_24_MOIS'!$C$7"]];
  sheet.getRange("H10").formulas = [["=1500*'TCO_24_MOIS'!$C$7"]];
  sheet.getRange("I7").formulas = [
    ["='TCO_24_MOIS'!$C$7*'TCO_24_MOIS'!$C$10*(2+0.1*'TCO_24_MOIS'!$C$8)"],
  ];
  sheet.getRange("I8").formulas = [
    [
      "='TCO_24_MOIS'!$C$7*'TCO_24_MOIS'!$C$10*(1+'TCO_24_MOIS'!$C$8/30)+'TCO_24_MOIS'!$C$7*'TCO_24_MOIS'!$C$8*'TCO_24_MOIS'!$C$9*'TCO_24_MOIS'!$C$11",
    ],
  ];
  sheet.getRange("I9").formulas = [
    [
      "='TCO_24_MOIS'!$C$7*'TCO_24_MOIS'!$C$10*(0.5+'TCO_24_MOIS'!$C$8/60)+'TCO_24_MOIS'!$C$7*'TCO_24_MOIS'!$C$8*'TCO_24_MOIS'!$C$9*'TCO_24_MOIS'!$C$11",
    ],
  ];
  sheet.getRange("I10").formulas = [
    ["='TCO_24_MOIS'!$C$7*'TCO_24_MOIS'!$C$10*(1+'TCO_24_MOIS'!$C$8/100)"],
  ];
  sheet.getRange("J7").formulas = [["=G7+H7+I7"]];
  sheet.getRange("J7:J10").fillDown();
  sheet.getRange("G7:J10").format.numberFormat = moneyFormat;
  outputStyle(sheet.getRange("J7:J10"));
  sheet.getRange("F7:J10").format.borders = {
    bottom: { style: "thin", color: colors.line },
  };
  sheet.mergeCells("F12:J12");
  sheet.getRange("F12").values = [
    [
      "Le récurrent est affiché sur l’horizon : bases mensuelles fictives 0 €, 150 €, 700 € et 1 500 €, multipliées par le nombre de mois.",
    ],
  ];
  sheet.getRange("F12:J12").format = {
    fill: colors.paper,
    font: { color: colors.muted, italic: true, size: 9 },
    wrapText: true,
  };

  sectionHeader(sheet, "B14:J14", "Même hypothèse, trois volumes");
  sheet.getRange("B15:F15").values = [
    ["Clients", "Manuel", "Hébergé", "Hébergé + couche", "Spécifique"],
  ];
  tableHeader(sheet, "B15:F15");
  sheet.getRange("B16:B18").values = [[10], [100], [500]];
  sheet.getRange("C16").formulas = [
    ["='TCO_24_MOIS'!$C$7*'TCO_24_MOIS'!$C$10*(2+0.1*B16)"],
  ];
  sheet.getRange("C16:C18").fillDown();
  sheet.getRange("D16").formulas = [
    [
      "=2800+'TCO_24_MOIS'!$C$7*150+'TCO_24_MOIS'!$C$7*'TCO_24_MOIS'!$C$10*(1+B16/30)+'TCO_24_MOIS'!$C$7*B16*'TCO_24_MOIS'!$C$9*'TCO_24_MOIS'!$C$11",
    ],
  ];
  sheet.getRange("D16:D18").fillDown();
  sheet.getRange("E16").formulas = [
    [
      "=14000+'TCO_24_MOIS'!$C$7*700+'TCO_24_MOIS'!$C$7*'TCO_24_MOIS'!$C$10*(0.5+B16/60)+'TCO_24_MOIS'!$C$7*B16*'TCO_24_MOIS'!$C$9*'TCO_24_MOIS'!$C$11",
    ],
  ];
  sheet.getRange("E16:E18").fillDown();
  sheet.getRange("F16").formulas = [
    [
      "=60000+'TCO_24_MOIS'!$C$7*1500+'TCO_24_MOIS'!$C$7*'TCO_24_MOIS'!$C$10*(1+B16/100)",
    ],
  ];
  sheet.getRange("F16:F18").fillDown();
  sheet.getRange("C16:F18").format.numberFormat = moneyFormat;
  sheet.getRange("B16:F18").format.borders = {
    bottom: { style: "thin", color: colors.line },
  };

  sectionHeader(sheet, "B20:J20", "Sensibilité du seuil manuel = hébergé");
  sheet.getRange("B21:F21").values = [
    [
      "Coût horaire",
      "Panier mensuel",
      "Frais variables",
      "Seuil théorique",
      "Lecture",
    ],
  ];
  tableHeader(sheet, "B21:F21", colors.amber);
  sheet.getRange("B22:D26").values = [
    [30, 100, 0.007],
    [45, 100, 0.007],
    [70, 100, 0.007],
    [45, 300, 0.007],
    [45, 100, 0],
  ];
  inputStyle(sheet.getRange("B22:D26"));
  sheet.getRange("B22:B26").format.numberFormat = moneyFormat;
  sheet.getRange("C22:C26").format.numberFormat = moneyFormat;
  sheet.getRange("D22:D26").format.numberFormat = percentFormat;
  sheet.getRange("E22").formulas = [
    [
      "=IF(ABS('TCO_24_MOIS'!$C$7*B22*(0.1-1/30)-'TCO_24_MOIS'!$C$7*C22*D22)<0.000000001,\"\",IF((2800+'TCO_24_MOIS'!$C$7*150-'TCO_24_MOIS'!$C$7*B22)/('TCO_24_MOIS'!$C$7*B22*(0.1-1/30)-'TCO_24_MOIS'!$C$7*C22*D22)<=0,\"\",(2800+'TCO_24_MOIS'!$C$7*150-'TCO_24_MOIS'!$C$7*B22)/('TCO_24_MOIS'!$C$7*B22*(0.1-1/30)-'TCO_24_MOIS'!$C$7*C22*D22)))",
    ],
  ];
  sheet.getRange("E22:E26").fillDown();
  sheet.getRange("E22:E26").format.numberFormat = "0.0";
  sheet.getRange("F22").formulas = [
    [
      "=IF(ABS('TCO_24_MOIS'!$C$7*B22*(0.1-1/30)-'TCO_24_MOIS'!$C$7*C22*D22)<0.000000001,IF(ABS(2800+'TCO_24_MOIS'!$C$7*150-'TCO_24_MOIS'!$C$7*B22)<0.000000001,\"Égalité à tous les volumes\",\"Lignes parallèles ; \"&IF('TCO_24_MOIS'!$C$7*B22*2<2800+'TCO_24_MOIS'!$C$7*150+'TCO_24_MOIS'!$C$7*B22,\"manuel dominant\",\"hébergé dominant\")),IF((2800+'TCO_24_MOIS'!$C$7*150-'TCO_24_MOIS'!$C$7*B22)/('TCO_24_MOIS'!$C$7*B22*(0.1-1/30)-'TCO_24_MOIS'!$C$7*C22*D22)<=0,\"Aucun seuil positif ; \"&IF('TCO_24_MOIS'!$C$7*B22*2<=2800+'TCO_24_MOIS'!$C$7*150+'TCO_24_MOIS'!$C$7*B22,\"manuel dominant\",\"hébergé dominant\"),(INT(ROUND((2800+'TCO_24_MOIS'!$C$7*150-'TCO_24_MOIS'!$C$7*B22)/('TCO_24_MOIS'!$C$7*B22*(0.1-1/30)-'TCO_24_MOIS'!$C$7*C22*D22),9))+1)&\" clients ; dessous : \"&IF('TCO_24_MOIS'!$C$7*B22*2<=2800+'TCO_24_MOIS'!$C$7*150+'TCO_24_MOIS'!$C$7*B22,\"manuel\",\"hébergé\")&\" ; dessus : \"&IF('TCO_24_MOIS'!$C$7*B22*2<=2800+'TCO_24_MOIS'!$C$7*150+'TCO_24_MOIS'!$C$7*B22,\"hébergé\",\"manuel\")))",
    ],
  ];
  sheet.getRange("F22:F26").fillDown();
  sheet.getRange("F22:F26").format.wrapText = true;
  outputStyle(sheet.getRange("E22:F26"), colors.amberSoft);

  sheet.mergeCells("G16:J18");
  sheet.getRange("G16").values = [
    [
      "Lecture : le volume seul ne décide pas. Dix contrats hétérogènes peuvent coûter plus que cinq cents abonnements identiques. Un Merchant of Record n’est pas une cinquième ligne comparable : son rôle contractuel, fiscal et opérationnel doit être qualifié séparément.",
    ],
  ];
  sheet.getRange("G16:J18").format = {
    fill: colors.paper,
    font: { color: colors.muted, italic: true },
    wrapText: true,
    verticalAlignment: "top",
  };
  sheet.freezePanes.freezeRows(3);
}

// ─────────────────────────────────────────────────────────────────────────────
// MRR
// ─────────────────────────────────────────────────────────────────────────────
{
  const sheet = sheets.MRR;
  titleBlock(
    sheet,
    "MRR Planor — mouvements distincts du cash et du revenu comptable",
    "Le MRR est une mesure de revenu récurrent contractuel. Il ne remplace ni facture, ni encaissement, ni reconnaissance comptable du revenu.",
    "J",
  );
  setWidths(sheet, {
    A: 4,
    B: 13,
    C: 15,
    D: 14,
    E: 14,
    F: 14,
    G: 14,
    H: 15,
    I: 16,
    J: 24,
  });
  sheet.getRange("B5:J5").values = [
    [
      "Mois",
      "MRR début",
      "Nouveau MRR",
      "Expansion",
      "Contraction",
      "Churn",
      "MRR fin",
      "ARR indicatif",
      "Contrôle",
    ],
  ];
  tableHeader(sheet, "B5:J5");
  const months = [
    ["2026-01", 1200, 0, 0, 0],
    ["2026-02", 1100, 0, 0, 0],
    ["2026-03", 400, 0, 0, 0],
    ["2026-04", 200, 100, 0, 0],
    ["2026-05", 250, 0, 50, 0],
    ["2026-06", 200, 0, 0, 100],
    ["2026-07", 0, 100, 0, 0],
    ["2026-08", 150, 0, 50, 0],
    ["2026-09", 200, 0, 0, 100],
    ["2026-10", 0, 100, 0, 0],
    ["2026-11", 300, 0, 100, 100],
    ["2026-12", 100, 0, 0, 100],
  ];
  sheet.getRange("B6:B17").values = months.map((row) => [row[0]]);
  sheet.getRange("D6:G17").values = months.map((row) => row.slice(1));
  inputStyle(sheet.getRange("D6:G17"));
  sheet.getRange("C6").values = [[0]];
  sheet.getRange("C7").formulas = [["=H6"]];
  sheet.getRange("C7:C17").fillDown();
  sheet.getRange("H6").formulas = [["=C6+D6+E6-F6-G6"]];
  sheet.getRange("H6:H17").fillDown();
  sheet.getRange("I6").formulas = [["=H6*12"]];
  sheet.getRange("I6:I17").fillDown();
  sheet.getRange("J6").formulas = [['=IF(H6=C6+D6+E6-F6-G6,"OK","ÉCART")']];
  sheet.getRange("J6:J17").fillDown();
  sheet.getRange("C6:I17").format.numberFormat = moneyFormat;
  sheet.getRange("B6:J17").format.borders = {
    bottom: { style: "thin", color: colors.line },
  };
  outputStyle(sheet.getRange("H6:I17"));
  sheet.getRange("J6:J17").conditionalFormats.add("containsText", {
    text: "ÉCART",
    format: { fill: colors.roseSoft, font: { color: colors.rose, bold: true } },
  });
  sectionHeader(sheet, "B19:J19", "Totaux de contrôle");
  sheet.getRange("B20:G20").values = [
    ["Nouveau", null, "Expansion", null, "Contraction", null],
  ];
  sheet.getRange("C20").formulas = [["=SUM(D6:D17)"]];
  sheet.getRange("E20").formulas = [["=SUM(E6:E17)"]];
  sheet.getRange("G20").formulas = [["=SUM(F6:F17)"]];
  sheet.getRange("B21:G21").values = [
    ["Churn", null, "MRR fin", null, "ARR indicatif", null],
  ];
  sheet.getRange("C21").formulas = [["=SUM(G6:G17)"]];
  sheet.getRange("E21").formulas = [["=H17"]];
  sheet.getRange("G21").formulas = [["=I17"]];
  sheet.getRange("C20:G21").format.numberFormat = moneyFormat;
  sheet.getRange("B20:G21").format = {
    fill: colors.paper,
    borders: { bottom: { style: "thin", color: colors.line } },
  };
  sheet.getRange("B20:B21").format.font = { bold: true };
  sheet.getRange("D20:D21").format.font = { bold: true };
  sheet.getRange("F20:F21").format.font = { bold: true };
  sheet.mergeCells("H20:J21");
  sheet.getRange("H20").values = [
    [
      "Planor doit aboutir à 3 800 € de MRR : 4 100 € de nouveau MRR + 300 € d’expansion − 200 € de contraction − 400 € de churn.",
    ],
  ];
  sheet.getRange("H20:J21").format = {
    fill: colors.violetSoft,
    font: { bold: true, color: colors.ink },
    wrapText: true,
  };
  sheet.freezePanes.freezeRows(5);
}

// ─────────────────────────────────────────────────────────────────────────────
// RAPPROCHEMENT
// ─────────────────────────────────────────────────────────────────────────────
{
  const sheet = sheets.RAPPROCHEMENT;
  titleBlock(
    sheet,
    "Rapprochement mensuel Planor",
    "Paiements et créance finale sont observés indépendamment. Une donnée vide impose À REVOIR ; delta ≥ 0,01 € ou ouverture différente de la clôture observée précédente impose STOP.",
    "N",
  );
  setWidths(sheet, {
    A: 4,
    B: 13,
    C: 15,
    D: 12,
    E: 15,
    F: 18,
    G: 16,
    H: 15,
    I: 16,
    J: 16,
    K: 18,
    L: 17,
    M: 24,
    N: 14,
  });
  sheet.getRange("B5:N5").values = [
    [
      "Mois",
      "Factures brutes",
      "Avoirs",
      "Factures nettes",
      "Paiements affectés observés",
      "Remboursements",
      "Cash net",
      "Créance d’ouverture",
      "Créance attendue",
      "Créance finale observée",
      "Delta observée − attendue",
      "Droit d’accès",
      "Statut",
    ],
  ];
  tableHeader(sheet, "B5:N5");
  const gross = [
    2200, 2800, 3200, 3500, 3450, 3550, 3650, 3750, 3600, 3700, 3800, 3800,
  ];
  const credits = [0, 0, 0, 0, 100, 0, 0, 50, 0, 0, 100, 100];
  const payments = [
    2200, 2800, 3200, 3500, 3350, 3550, 3650, 3700, 3600, 3700, 3700, 3800,
  ];
  const refunds = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100];
  sheet.getRange("B6:B17").values = gross.map((_, i) => [
    `2026-${String(i + 1).padStart(2, "0")}`,
  ]);
  sheet.getRange("C6:C17").values = gross.map((value) => [value]);
  sheet.getRange("D6:D17").values = credits.map((value) => [value]);
  sheet.getRange("F6:F17").values = payments.map((value) => [value]);
  sheet.getRange("G6:G17").values = refunds.map((value) => [value]);
  sheet.getRange("I6:I17").values = gross.map(() => [0]);
  sheet.getRange("K6:K17").values = gross.map(() => [0]);
  inputStyle(sheet.getRange("C6:D17"));
  inputStyle(sheet.getRange("F6:G17"));
  inputStyle(sheet.getRange("I6:I17"));
  inputStyle(sheet.getRange("K6:K17"));
  sheet.getRange("E6").formulas = [['=IF(COUNT(C6,D6)<2,"",C6-D6)']];
  sheet.getRange("E6:E17").fillDown();
  sheet.getRange("H6").formulas = [['=IF(COUNT(F6,G6)<2,"",F6-G6)']];
  sheet.getRange("H6:H17").fillDown();
  sheet.getRange("J6").formulas = [
    ['=IF(COUNT(I6,E6,F6,G6)<4,"",I6+E6-F6+G6)'],
  ];
  sheet.getRange("J6:J17").fillDown();
  sheet.getRange("L6").formulas = [['=IF(COUNT(K6,J6)<2,"",K6-J6)']];
  sheet.getRange("L6:L17").fillDown();
  sheet.getRange("M6:M17").values = gross.map((_, i) => [
    i === 11
      ? "Remboursement documenté ; accès selon règle"
      : "Selon règle commerciale",
  ]);
  sheet.getRange("N6").formulas = [
    [
      '=IF(COUNT(C6,D6,F6,G6,I6,K6)<6,"À REVOIR",IF(ABS(L6)>=0.01,"STOP","PASS"))',
    ],
  ];
  sheet.getRange("N7").formulas = [
    [
      '=IF(OR(COUNT(C7,D7,F7,G7,I7,K7)<6,COUNT(K6)=0),"À REVOIR",IF(OR(ABS(L7)>=0.01,ABS(I7-K6)>=0.01),"STOP","PASS"))',
    ],
  ];
  sheet.getRange("N7:N17").fillDown();
  sheet.getRange("C6:L17").format.numberFormat = moneyFormat;
  sheet.getRange("B6:N17").format = {
    wrapText: true,
    borders: {
      bottom: { style: "thin", color: colors.line },
    },
  };
  outputStyle(sheet.getRange("E6:E17"));
  outputStyle(sheet.getRange("H6:H17"));
  outputStyle(sheet.getRange("J6:J17"));
  outputStyle(sheet.getRange("L6:L17"));
  sheet.getRange("N6:N17").conditionalFormats.add("containsText", {
    text: "STOP",
    format: { fill: colors.roseSoft, font: { color: colors.rose, bold: true } },
  });
  sheet.getRange("N6:N17").conditionalFormats.add("containsText", {
    text: "À REVOIR",
    format: {
      fill: colors.amberSoft,
      font: { color: colors.amber, bold: true },
    },
  });
  sheet.getRange("N6:N17").conditionalFormats.add("containsText", {
    text: "PASS",
    format: {
      fill: colors.emeraldSoft,
      font: { color: colors.emerald, bold: true },
    },
  });
  sectionHeader(sheet, "B19:N19", "Totaux Planor");
  sheet.getRange("B20:L20").values = [
    [
      "Brut facturé",
      null,
      "Avoirs",
      null,
      "Paiements observés",
      null,
      "Remboursements",
      null,
      "Cash net",
      null,
      "Statut annuel",
    ],
  ];
  sheet.getRange("C20").formulas = [["=SUM(C6:C17)"]];
  sheet.getRange("E20").formulas = [["=SUM(D6:D17)"]];
  sheet.getRange("G20").formulas = [["=SUM(F6:F17)"]];
  sheet.getRange("I20").formulas = [["=SUM(G6:G17)"]];
  sheet.getRange("K20").formulas = [["=SUM(H6:H17)"]];
  sheet.mergeCells("M20:N20");
  sheet.getRange("M20").formulas = [
    [
      '=IF(COUNTIF(N6:N17,"STOP")>0,"STATUT ANNUEL: STOP",IF(COUNTIF(N6:N17,"À REVOIR")>0,"STATUT ANNUEL: À REVOIR","STATUT ANNUEL: PASS"))',
    ],
  ];
  sheet.getRange("B21:K21").values = [
    [
      "Net facturé",
      null,
      "Créance d’ouverture",
      null,
      "Créance attendue",
      null,
      "Créance observée",
      null,
      "Delta",
      null,
    ],
  ];
  sheet.getRange("C21").formulas = [["=SUM(E6:E17)"]];
  sheet.getRange("E21").formulas = [["=I6"]];
  sheet.getRange("G21").formulas = [["=E21+C21-G20+I20"]];
  sheet.getRange("I21").formulas = [["=K17"]];
  sheet.getRange("K21").formulas = [["=I21-G21"]];
  sheet.getRange("C20:K21").format.numberFormat = moneyFormat;
  sheet.getRange("B20:N21").format = {
    fill: colors.paper,
    borders: { bottom: { style: "thin", color: colors.line } },
  };
  sheet.mergeCells("L21:N22");
  sheet.getRange("L21").values = [
    [
      "Contrôle attendu : 41 000 € bruts − 350 € d’avoirs = 40 650 € nets. Les 40 750 € reçus incluent 100 € ensuite remboursés : cash net 40 650 € et créance nulle. Chaque ouverture doit reprendre la clôture observée précédente ; le droit d’accès reste séparé.",
    ],
  ];
  sheet.getRange("L21:N22").format = {
    fill: colors.violetSoft,
    font: { bold: true },
    wrapText: true,
    verticalAlignment: "top",
  };
  sectionHeader(sheet, "B23:N23", "Pont entre MRR et factures brutes");
  sheet.getRange("B24:G24").values = [
    [
      "Somme des MRR mensuels",
      null,
      "Mise en route + usage ponctuel",
      3500,
      "Factures brutes réconciliées",
      null,
    ],
  ];
  sheet.getRange("C24").formulas = [["=SUM('MRR'!H6:H17)"]];
  sheet.getRange("G24").formulas = [["=C24+E24"]];
  sheet.getRange("C24:G24").format.numberFormat = moneyFormat;
  inputStyle(sheet.getRange("E24"));
  outputStyle(sheet.getRange("C24"));
  outputStyle(sheet.getRange("G24"));
  sheet.mergeCells("H24:N25");
  sheet.getRange("H24").values = [
    [
      "Hypothèse Planor : facturation mensuelle du récurrent, plus 3 500 € de mise en route et d’usage ponctuel. Un contrat annuel payé d’avance exigerait un échéancier de facture et de cash distinct.",
    ],
  ];
  sheet.getRange("H24:N25").format = {
    fill: colors.amberSoft,
    wrapText: true,
    verticalAlignment: "top",
  };
  sheet.getRange("H24:N25").format.rowHeight = 32;
  sheet.freezePanes.freezeRows(5);
}

// ─────────────────────────────────────────────────────────────────────────────
// RELANCES
// ─────────────────────────────────────────────────────────────────────────────
{
  const sheet = sheets.RELANCES;
  titleBlock(
    sheet,
    "Relances après paiement échoué",
    "Les taux sont fictifs. Mesurez votre taux d’échec et votre récupération ; ne recopiez pas un benchmark vendeur.",
    "H",
  );
  setWidths(sheet, {
    A: 4,
    B: 28,
    C: 16,
    D: 16,
    E: 16,
    F: 18,
    G: 18,
    H: 4,
  });
  sectionHeader(sheet, "B5:F5", "Hypothèses");
  sheet.getRange("B6:D8").values = [
    ["MRR facturable", 20000, "€ / mois"],
    ["Échec au premier passage", 0.03, "%"],
    ["Montant échoué", null, "Calculé"],
  ];
  sheet.getRange("C8").formulas = [["=C6*C7"]];
  inputStyle(sheet.getRange("C6:C7"));
  outputStyle(sheet.getRange("C8"));
  sheet.getRange("C6").format.numberFormat = moneyFormat;
  sheet.getRange("C7").format.numberFormat = percentFormat;
  sheet.getRange("C8").format.numberFormat = moneyFormat;
  sectionHeader(sheet, "B10:F10", "Trois hypothèses de récupération");
  sheet.getRange("B11:F11").values = [
    [
      "Scénario",
      "Taux récupéré",
      "Montant récupéré",
      "Reste non récupéré",
      "Décision",
    ],
  ];
  tableHeader(sheet, "B11:F11");
  sheet.getRange("B12:C14").values = [
    ["Prudent", 0.3],
    ["Central", 0.6],
    ["Haut", 0.8],
  ];
  inputStyle(sheet.getRange("C12:C14"));
  sheet.getRange("D12").formulas = [["=$C$8*C12"]];
  sheet.getRange("D12:D14").fillDown();
  sheet.getRange("E12").formulas = [["=$C$8-D12"]];
  sheet.getRange("E12:E14").fillDown();
  sheet.getRange("F12:F14").values = [
    ["Mesurer le coût de relance"],
    ["Comparer au processus actuel"],
    ["Vérifier support, churn et marge"],
  ];
  sheet.getRange("C12:C14").format.numberFormat = percentFormat;
  sheet.getRange("D12:E14").format.numberFormat = moneyFormat;
  outputStyle(sheet.getRange("D12:E14"));
  sheet.getRange("B12:F14").format.borders = {
    bottom: { style: "thin", color: colors.line },
  };
  sectionHeader(sheet, "B16:F16", "Lecture");
  sheet.mergeCells("B17:F19");
  sheet.getRange("B17").values = [
    [
      "Passer fictivement de 30 % à 60 % de récupération représente 180 € de plus par mois, soit 2 160 € par an. Ce n’est ni une marge pure, ni une promesse de gain, ni une preuve de satisfaction. Si aucun paiement n’échoue ou si le processus manuel récupère déjà tout, l’automatisation n’ajoute pas ce revenu.",
    ],
  ];
  sheet.getRange("B17:F19").format = {
    fill: colors.amberSoft,
    wrapText: true,
    verticalAlignment: "top",
  };
  sheet.freezePanes.freezeRows(3);
}

// ─────────────────────────────────────────────────────────────────────────────
// TESTS
// ─────────────────────────────────────────────────────────────────────────────
{
  const sheet = sheets.TESTS;
  titleBlock(
    sheet,
    "Matrice de 24 tests du devis à l’encaissement (quote-to-cash)",
    "Chaque cas doit conserver précondition, idempotence, résultat attendu, journal et reprise. « Documenté » ne signifie pas « exécuté ».",
    "M",
  );
  setWidths(sheet, {
    A: 4,
    B: 8,
    C: 25,
    D: 24,
    E: 18,
    F: 21,
    G: 21,
    H: 21,
    I: 23,
    J: 21,
    K: 20,
    L: 15,
    M: 14,
  });
  sheet.getRange("B5:M5").values = [
    [
      "ID",
      "Cas",
      "Précondition",
      "Clé d’idempotence",
      "Facture attendue",
      "Paiement attendu",
      "Droit attendu",
      "Trace / comptabilité",
      "Reprise",
      "Propriétaire",
      "Risque",
      "État",
    ],
  ];
  tableHeader(sheet, "B5:M5");
  const tests = [
    [
      "T-01",
      "Nouvel abonnement mensuel par carte",
      "Offre et entreprise connues",
      "order_id + event_id",
      "Période et entité correctes",
      "Succès rapproché",
      "Ouvert selon règle",
      "Facture/paiement/droit reliés",
      "Rejouer sans doublon",
      "Produit + Finance",
      "Élevé",
      "À exécuter",
    ],
    [
      "T-02",
      "Authentification requise",
      "Paiement non final",
      "payment_intent + event_id",
      "Pas de duplicat",
      "Action requise",
      "Pas d’ouverture implicite",
      "État explicable",
      "Reprendre après authentification",
      "Technique",
      "Élevé",
      "À exécuter",
    ],
    [
      "T-03",
      "Paiement initial en traitement",
      "Retour navigateur reçu",
      "payment_id",
      "Unique",
      "En traitement",
      "Selon règle, pas retour navigateur",
      "Journal attente",
      "Événement final",
      "Technique",
      "Élevé",
      "À exécuter",
    ],
    [
      "T-04",
      "Échec asynchrone après succès apparent",
      "Accès provisoire possible",
      "event_id",
      "Unique",
      "Échec rapproché",
      "Réviser selon politique",
      "Alerte + décision",
      "Corriger sans double effet",
      "Support",
      "Critique",
      "À exécuter",
    ],
    [
      "T-05",
      "Vente B2B par virement",
      "Devis/commande acceptés",
      "invoice_id + bank_ref",
      "Échéance exacte",
      "En attente puis rapproché",
      "Selon date contractuelle",
      "Dossier commun",
      "Rapprochement manuel possible",
      "Finance",
      "Élevé",
      "À exécuter",
    ],
    [
      "T-06",
      "Virement sans référence",
      "Cash reçu",
      "bank_tx_id",
      "Facture à identifier",
      "Non rapproché",
      "Ne pas déduire automatiquement",
      "File d’exception",
      "Recherche + preuve",
      "Finance",
      "Élevé",
      "À exécuter",
    ],
    [
      "T-07",
      "Webhook reçu deux fois",
      "Premier événement appliqué",
      "event_id",
      "Une seule facture",
      "Un seul effet",
      "Un seul droit",
      "Doublon journalisé",
      "Réponse idempotente",
      "Technique",
      "Critique",
      "À exécuter",
    ],
    [
      "T-08",
      "Événements hors ordre",
      "Événement ancien reçu tard",
      "object_id + version",
      "État le plus récent",
      "Historique conservé",
      "Pas de retour arrière implicite",
      "Ordre observable",
      "Réconciliation",
      "Technique",
      "Critique",
      "À exécuter",
    ],
    [
      "T-09",
      "Upgrade période payée",
      "Facture précédente réglée",
      "change_id",
      "Débit/crédit explicable",
      "Écart rapproché",
      "Nouveaux droits datés",
      "Avant/après",
      "Annuler le changement",
      "Produit + Finance",
      "Élevé",
      "À exécuter",
    ],
    [
      "T-10",
      "Upgrade facture impayée",
      "Créance ouverte",
      "change_id",
      "Pas de crédit incohérent",
      "Créance visible",
      "Règle explicite",
      "Exception signalée",
      "Décision humaine",
      "Finance",
      "Critique",
      "À exécuter",
    ],
    [
      "T-11",
      "Downgrade au renouvellement",
      "Demande enregistrée",
      "change_id",
      "Pas de remboursement implicite",
      "Échéance inchangée",
      "Réduction à date",
      "Demande + date",
      "Annuler avant échéance",
      "Produit",
      "Moyen",
      "À exécuter",
    ],
    [
      "T-12",
      "Résiliation fin de période",
      "Contrat qualifié",
      "cancel_id",
      "Dernière facture définie",
      "Solde rapproché",
      "Export puis fermeture",
      "Date et preuve",
      "Réactiver si autorisé",
      "Support",
      "Élevé",
      "À exécuter",
    ],
    [
      "T-13",
      "Résiliation immédiate + remboursement",
      "Autorisation validée",
      "refund_id",
      "Avoir relié",
      "Remboursement unique",
      "Fermeture journalisée",
      "Conseil/finance",
      "Escalade si litige",
      "Direction",
      "Critique",
      "À exécuter",
    ],
    [
      "T-14",
      "Mesure d’usage dupliquée",
      "Unité et période connues",
      "meter_event_id",
      "Quantité non doublée",
      "Aucun double débit",
      "Sans effet indu",
      "Doublon visible",
      "Rejouer",
      "Technique",
      "Critique",
      "À exécuter",
    ],
    [
      "T-15",
      "Mesure d’usage tardive",
      "Période clôturée",
      "meter_event_id",
      "Correction/avoir selon règle",
      "Écart explicable",
      "Sans coupure implicite",
      "Journal de correction",
      "Réouvrir ou période suivante",
      "Finance + Produit",
      "Élevé",
      "À exécuter",
    ],
    [
      "T-16",
      "Relance réussie nouveau moyen",
      "Paiement échoué",
      "retry_id",
      "Facture inchangée",
      "Récupéré et rapproché",
      "Restauré selon règle",
      "Cohorte relance",
      "Aucun double encaissement",
      "Finance",
      "Élevé",
      "À exécuter",
    ],
    [
      "T-17",
      "Rejet facture électronique / identifiant",
      "Flux dans le périmètre",
      "invoice_id + platform_ref",
      "Rejet visible",
      "Donnée paiement séparée",
      "Ne pas déduire de droit",
      "Motif + horodatage",
      "Corriger et réémettre",
      "Finance",
      "Critique",
      "À exécuter",
    ],
    [
      "T-18",
      "Migration contrat annuel avec avoir",
      "Historique exporté",
      "contract_id + credit_id",
      "Solde repris",
      "Cash historique tracé",
      "Droits continus",
      "Contrôle source/cible",
      "Rollback documenté",
      "Technique + Finance",
      "Critique",
      "À exécuter",
    ],
    [
      "T-19",
      "Paiement partiel",
      "Facture ouverte et règle d’accès écrite",
      "payment_id + allocation_id",
      "Créance résiduelle visible",
      "Part affectée seulement",
      "Selon règle contractuelle",
      "Solde + affectation",
      "Rapprocher le reliquat",
      "Finance + Support",
      "Critique",
      "À exécuter",
    ],
    [
      "T-20",
      "Chargeback après encaissement",
      "Paiement rapproché et preuve conservée",
      "dispute_id + event_id",
      "Avoir seulement si justifié",
      "Cash et litige séparés",
      "Selon arbitrage documenté",
      "Preuves + créance éventuelle",
      "Contester ou corriger sans effacer",
      "Finance + Support",
      "Critique",
      "À exécuter",
    ],
    [
      "T-21",
      "Conversion d’essai",
      "Essai, offre et date d’effet connus",
      "trial_id + conversion_id",
      "Première période exacte",
      "Moyen qualifié",
      "Ouverture à la date décidée",
      "Avant/après reliés",
      "Annuler sans double période",
      "Produit + Finance",
      "Élevé",
      "À exécuter",
    ],
    [
      "T-22",
      "Pause puis reprise",
      "Règle de pause publiée",
      "pause_id + resume_id",
      "Échéance recalculée explicitement",
      "Aucun débit caché",
      "Fermeture et reprise datées",
      "Consommation + droits",
      "Reprendre sans rattrapage implicite",
      "Produit + Support",
      "Élevé",
      "À exécuter",
    ],
    [
      "T-23",
      "Modification rétroactive",
      "Période source déjà clôturée",
      "adjustment_id + source_version",
      "Correction ou période suivante",
      "Écart explicable",
      "Pas de retour arrière silencieux",
      "Journal d’ajustement",
      "Rejouer sur copie",
      "Finance + Technique",
      "Critique",
      "À exécuter",
    ],
    [
      "T-24",
      "Changement fiscal en période",
      "Date d’effet et preuves client connues",
      "tax_evidence_version + invoice_id",
      "Document conforme à la date",
      "Taxe non déduite du paiement seul",
      "Sans effet implicite",
      "Preuves + règle utilisée",
      "STOP puis validation spécialiste",
      "Finance + Fiscal",
      "Critique",
      "À exécuter",
    ],
  ];
  if (acceptanceTests.length !== 24 || tests.length !== 24) {
    throw new Error(
      `La matrice canonique et le classeur doivent contenir 24 tests : ${acceptanceTests.length}/${tests.length}.`,
    );
  }
  acceptanceTests.forEach((test, index) => {
    const workbookRow = tests[index];
    if (workbookRow[0] !== test.id || workbookRow[1] !== test.case) {
      throw new Error(
        `Divergence du test canonique ${index + 1} : ${test.id} / ${test.case}.`,
      );
    }
  });
  sheet.getRange("B6:M29").values = tests;
  sheet.getRange("B6:M29").format = {
    wrapText: true,
    verticalAlignment: "top",
    borders: {
      bottom: { style: "thin", color: colors.line },
    },
  };
  sheet.getRange("L6:L29").dataValidation = {
    rule: { type: "list", values: ["Faible", "Moyen", "Élevé", "Critique"] },
  };
  sheet.getRange("M6:M29").dataValidation = {
    rule: {
      type: "list",
      values: [
        "À documenter",
        "Documenté",
        "À exécuter",
        "PASS",
        "FAIL",
        "STOP",
      ],
    },
  };
  sheet.getRange("M6:M29").conditionalFormats.add("containsText", {
    text: "FAIL",
    format: { fill: colors.roseSoft, font: { color: colors.rose, bold: true } },
  });
  sheet.getRange("M6:M29").conditionalFormats.add("containsText", {
    text: "PASS",
    format: {
      fill: colors.emeraldSoft,
      font: { color: colors.emerald, bold: true },
    },
  });
  sheet.getRange("M6:M29").conditionalFormats.add("containsText", {
    text: "STOP",
    format: { fill: colors.roseSoft, font: { color: colors.rose, bold: true } },
  });
  sheet.freezePanes.freezeRows(5);
  sheet.freezePanes.freezeColumns(3);
}

// ─────────────────────────────────────────────────────────────────────────────
// EXEMPLE_PLANOR
// ─────────────────────────────────────────────────────────────────────────────
{
  const sheet = sheets.EXEMPLE_PLANOR;
  titleBlock(
    sheet,
    "Exemple fictif Planor — synthèse de décision",
    "Aucun chiffre ne décrit un client réel. Cette page sert à apprendre à expliquer un écart et à choisir le prochain contrôle.",
    "J",
  );
  setWidths(sheet, {
    A: 4,
    B: 25,
    C: 16,
    D: 18,
    E: 24,
    F: 20,
    G: 20,
    H: 20,
    I: 20,
    J: 4,
  });
  sectionHeader(sheet, "B5:I5", "Indicateurs clés");
  sheet.getRange("B6:I6").values = [
    [
      "MRR fin",
      null,
      "Nouveau MRR",
      null,
      "Factures brutes",
      null,
      "Cash net",
      null,
    ],
  ];
  sheet.getRange("C6").formulas = [["='MRR'!H17"]];
  sheet.getRange("E6").formulas = [["='MRR'!C20"]];
  sheet.getRange("G6").formulas = [["='RAPPROCHEMENT'!C20"]];
  sheet.getRange("I6").formulas = [["='RAPPROCHEMENT'!K20"]];
  sheet.getRange("B6:I6").format = {
    fill: colors.emeraldSoft,
    font: { bold: true, size: 12 },
    borders: { bottom: { style: "thin", color: colors.line } },
  };
  sheet.getRange("C6:E6").format.numberFormat = moneyFormat;
  sheet.getRange("G6:I6").format.numberFormat = moneyFormat;

  sectionHeader(sheet, "B8:I8", "Sept sources de vérité à relier");
  sheet.getRange("B9:I9").values = [
    [
      "Objet",
      "Système possible",
      "Propriétaire",
      "Identifiant",
      "Fait foi pour",
      "Correction",
      "Preuve",
      "STOP",
    ],
  ];
  tableHeader(sheet, "B9:I9");
  const truthRows = [
    [
      "Offre",
      "CRM / devis",
      "Vente",
      "offer_id",
      "Prix, quantité, conditions",
      "Avenant ou version",
      "Offre datée",
      "Offre introuvable",
    ],
    [
      "Commande",
      "ERP / ADV",
      "ADV",
      "order_id",
      "Client contractant",
      "Correction contrôlée",
      "Bon de commande",
      "Entité inconnue",
    ],
    [
      "Facture",
      "Outil de facturation",
      "Finance",
      "invoice_id",
      "Document et période",
      "Avoir / réémission",
      "Facture + statut",
      "Numérotation incohérente",
    ],
    [
      "Paiement",
      "PSP / banque",
      "Finance",
      "payment_id",
      "Encaissement",
      "Rapprochement",
      "Transaction",
      "Cash sans pièce",
    ],
    [
      "Droit",
      "SaaS",
      "Produit",
      "entitlement_id",
      "Fonctions utilisables",
      "Règle versionnée",
      "Journal d’accès",
      "Accès sans règle",
    ],
    [
      "Comptabilité",
      "Logiciel comptable",
      "Comptabilité",
      "entry_id",
      "Écriture et clôture",
      "Écriture de correction",
      "Grand livre",
      "Clôture non rapprochée",
    ],
    [
      "Événement",
      "Journal technique",
      "Technique",
      "event_id",
      "Ordre et idempotence",
      "Rejeu contrôlé",
      "Horodatage",
      "Événement perdu",
    ],
  ];
  sheet.getRange("B10:I16").values = truthRows;
  sheet.getRange("B10:I16").format = {
    wrapText: true,
    verticalAlignment: "top",
    borders: { bottom: { style: "thin", color: colors.line } },
  };
  sheet.getRange("I10:I16").format = {
    fill: colors.roseSoft,
    font: { color: colors.rose, bold: true },
    wrapText: true,
  };

  sectionHeader(sheet, "B18:I18", "Décision Planor");
  sheet.mergeCells("B19:I21");
  sheet.getRange("B19").values = [
    [
      "Position par défaut : garder un moteur éprouvé pour les mécanismes génériques, posséder les règles commerciales et les droits d’accès, puis rapprocher chaque mois. Ne pas reconstruire le rail de paiement. Une couche métier n’est justifiée que si les contrats, usages, entités, quantités ou droits ne rentrent pas proprement dans le moteur et que son coût de maintien est assumé.",
    ],
  ];
  sheet.getRange("B19:I21").format = {
    fill: colors.violetSoft,
    font: { bold: true, color: colors.ink },
    wrapText: true,
    verticalAlignment: "top",
  };
  sheet.freezePanes.freezeRows(3);
}

// ─────────────────────────────────────────────────────────────────────────────
// CONTROLES
// ─────────────────────────────────────────────────────────────────────────────
{
  const sheet = sheets.CONTROLES;
  titleBlock(
    sheet,
    "Contrôles du modèle",
    "MODEL STATUS contrôle les équations ; RAPPROCHEMENT STATUS contrôle les données observées. Une donnée manquante déclenche REVIEW / À REVOIR sans être masquée par une formule.",
    "H",
  );
  setWidths(sheet, {
    A: 4,
    B: 35,
    C: 20,
    D: 20,
    E: 16,
    F: 28,
    G: 28,
    H: 4,
  });
  const mrrEquationTerms = [];
  for (let row = 6; row <= 17; row += 1) {
    mrrEquationTerms.push(
      `ABS('MRR'!H${row}-('MRR'!C${row}+'MRR'!D${row}+'MRR'!E${row}-'MRR'!F${row}-'MRR'!G${row}))`,
      `ABS('MRR'!I${row}-'MRR'!H${row}*12)`,
    );
  }
  for (let row = 7; row <= 17; row += 1) {
    mrrEquationTerms.push(`ABS('MRR'!C${row}-'MRR'!H${row - 1})`);
  }
  mrrEquationTerms.push(
    "ABS('MRR'!C20-SUM('MRR'!D6:D17))",
    "ABS('MRR'!E20-SUM('MRR'!E6:E17))",
    "ABS('MRR'!G20-SUM('MRR'!F6:F17))",
    "ABS('MRR'!C21-SUM('MRR'!G6:G17))",
    "ABS('MRR'!E21-'MRR'!H17)",
    "ABS('MRR'!G21-'MRR'!I17)",
  );

  const reconciliationStopTerms = [];
  const reconciliationReviewTerms = [];
  const reconciliationEquationTerms = [];
  for (let row = 6; row <= 17; row += 1) {
    const currentInputsMissing = `COUNT('RAPPROCHEMENT'!C${row},'RAPPROCHEMENT'!D${row},'RAPPROCHEMENT'!F${row},'RAPPROCHEMENT'!G${row},'RAPPROCHEMENT'!I${row},'RAPPROCHEMENT'!K${row})<6`;
    const statusInputsMissing =
      row === 6
        ? currentInputsMissing
        : `OR(${currentInputsMissing},COUNT('RAPPROCHEMENT'!K${row - 1})=0)`;
    const continuityFailure =
      row === 6
        ? "0"
        : `ABS('RAPPROCHEMENT'!I${row}-'RAPPROCHEMENT'!K${row - 1})>=0.01`;
    const expectedReceivable = `'RAPPROCHEMENT'!I${row}+('RAPPROCHEMENT'!C${row}-'RAPPROCHEMENT'!D${row})-'RAPPROCHEMENT'!F${row}+'RAPPROCHEMENT'!G${row}`;
    const expectedStatus = `IF(${statusInputsMissing},"À REVOIR",IF(OR(ABS('RAPPROCHEMENT'!K${row}-(${expectedReceivable}))>=0.01,${continuityFailure}),"STOP","PASS"))`;
    reconciliationReviewTerms.push(`IF(${statusInputsMissing},1,0)`);
    reconciliationStopTerms.push(
      `IF(${statusInputsMissing},0,IF(OR(ABS('RAPPROCHEMENT'!K${row}-(${expectedReceivable}))>=0.01,${continuityFailure}),1,0))`,
    );
    reconciliationEquationTerms.push(
      `IF(COUNT('RAPPROCHEMENT'!C${row},'RAPPROCHEMENT'!D${row})<2,IF(COUNT('RAPPROCHEMENT'!E${row})=0,0,1),IF(COUNT('RAPPROCHEMENT'!E${row})=0,1,ABS('RAPPROCHEMENT'!E${row}-('RAPPROCHEMENT'!C${row}-'RAPPROCHEMENT'!D${row}))))`,
      `IF(COUNT('RAPPROCHEMENT'!F${row},'RAPPROCHEMENT'!G${row})<2,IF(COUNT('RAPPROCHEMENT'!H${row})=0,0,1),IF(COUNT('RAPPROCHEMENT'!H${row})=0,1,ABS('RAPPROCHEMENT'!H${row}-('RAPPROCHEMENT'!F${row}-'RAPPROCHEMENT'!G${row}))))`,
      `IF(COUNT('RAPPROCHEMENT'!C${row},'RAPPROCHEMENT'!D${row},'RAPPROCHEMENT'!F${row},'RAPPROCHEMENT'!G${row},'RAPPROCHEMENT'!I${row})<5,IF(COUNT('RAPPROCHEMENT'!J${row})=0,0,1),IF(COUNT('RAPPROCHEMENT'!J${row})=0,1,ABS('RAPPROCHEMENT'!J${row}-(${expectedReceivable}))))`,
      `IF(${currentInputsMissing},IF(COUNT('RAPPROCHEMENT'!L${row})=0,0,1),IF(COUNT('RAPPROCHEMENT'!L${row})=0,1,ABS('RAPPROCHEMENT'!L${row}-('RAPPROCHEMENT'!K${row}-(${expectedReceivable})))))`,
      `IF('RAPPROCHEMENT'!N${row}=${expectedStatus},0,1)`,
    );
  }

  const annualExpectedStatus = `IF((${reconciliationStopTerms.join("+")})>0,"STATUT ANNUEL: STOP",IF((${reconciliationReviewTerms.join("+")})>0,"STATUT ANNUEL: À REVOIR","STATUT ANNUEL: PASS"))`;
  const reconciliationTotalTerms = [
    "ABS('RAPPROCHEMENT'!C20-SUM('RAPPROCHEMENT'!C6:C17))",
    "ABS('RAPPROCHEMENT'!E20-SUM('RAPPROCHEMENT'!D6:D17))",
    "ABS('RAPPROCHEMENT'!G20-SUM('RAPPROCHEMENT'!F6:F17))",
    "ABS('RAPPROCHEMENT'!I20-SUM('RAPPROCHEMENT'!G6:G17))",
    "ABS('RAPPROCHEMENT'!K20-(SUM('RAPPROCHEMENT'!F6:F17)-SUM('RAPPROCHEMENT'!G6:G17)))",
    "ABS('RAPPROCHEMENT'!C21-(SUM('RAPPROCHEMENT'!C6:C17)-SUM('RAPPROCHEMENT'!D6:D17)))",
    "ABS('RAPPROCHEMENT'!E21-'RAPPROCHEMENT'!I6)",
    "ABS('RAPPROCHEMENT'!G21-('RAPPROCHEMENT'!I6+SUM('RAPPROCHEMENT'!C6:C17)-SUM('RAPPROCHEMENT'!D6:D17)-SUM('RAPPROCHEMENT'!F6:F17)+SUM('RAPPROCHEMENT'!G6:G17)))",
    "ABS('RAPPROCHEMENT'!I21-'RAPPROCHEMENT'!K17)",
    "ABS('RAPPROCHEMENT'!K21-('RAPPROCHEMENT'!K17-('RAPPROCHEMENT'!I6+SUM('RAPPROCHEMENT'!C6:C17)-SUM('RAPPROCHEMENT'!D6:D17)-SUM('RAPPROCHEMENT'!F6:F17)+SUM('RAPPROCHEMENT'!G6:G17))))",
    `IF('RAPPROCHEMENT'!M20=${annualExpectedStatus},0,1)`,
  ];

  function thresholdParts(row) {
    const horizon = "'TCO_24_MOIS'!$C$7";
    const hourly = `'TCO_24_MOIS'!B${row}`;
    const basket = `'TCO_24_MOIS'!C${row}`;
    const fee = `'TCO_24_MOIS'!D${row}`;
    const numerator = `(2800+${horizon}*150-${horizon}*${hourly})`;
    const denominator = `(${horizon}*${hourly}*(0.1-1/30)-${horizon}*${basket}*${fee})`;
    const manualFixed = `(${horizon}*${hourly}*2)`;
    const hostedFixed = `(2800+${horizon}*150+${horizon}*${hourly})`;
    return { numerator, denominator, manualFixed, hostedFixed };
  }

  function thresholdValueFormula(row) {
    const { numerator, denominator } = thresholdParts(row);
    return `IF(ABS(${denominator})<0.000000001,"",IF(${numerator}/${denominator}<=0,"",${numerator}/${denominator}))`;
  }

  function thresholdReadingFormula(row) {
    const { numerator, denominator, manualFixed, hostedFixed } =
      thresholdParts(row);
    return `IF(ABS(${denominator})<0.000000001,IF(ABS(${numerator})<0.000000001,"Égalité à tous les volumes","Lignes parallèles ; "&IF(${manualFixed}<${hostedFixed},"manuel dominant","hébergé dominant")),IF(${numerator}/${denominator}<=0,"Aucun seuil positif ; "&IF(${manualFixed}<=${hostedFixed},"manuel dominant","hébergé dominant"),(INT(ROUND(${numerator}/${denominator},9))+1)&" clients ; dessous : "&IF(${manualFixed}<=${hostedFixed},"manuel","hébergé")&" ; dessus : "&IF(${manualFixed}<=${hostedFixed},"hébergé","manuel")))`;
  }

  const checks = [
    {
      label: "TCO — récurrent manuel",
      actual: "='TCO_24_MOIS'!H7",
      expected: "=0",
      where: "TCO_24_MOIS!H7",
    },
    {
      label: "TCO — récurrent hébergé",
      actual: "='TCO_24_MOIS'!H8",
      expected: "=150*'TCO_24_MOIS'!$C$7",
      where: "TCO_24_MOIS!H8",
    },
    {
      label: "TCO — récurrent couche",
      actual: "='TCO_24_MOIS'!H9",
      expected: "=700*'TCO_24_MOIS'!$C$7",
      where: "TCO_24_MOIS!H9",
    },
    {
      label: "TCO — récurrent spécifique",
      actual: "='TCO_24_MOIS'!H10",
      expected: "=1500*'TCO_24_MOIS'!$C$7",
      where: "TCO_24_MOIS!H10",
    },
    {
      label: "TCO — temps/variable manuel",
      actual: "='TCO_24_MOIS'!I7",
      expected:
        "='TCO_24_MOIS'!$C$7*'TCO_24_MOIS'!$C$10*(2+0.1*'TCO_24_MOIS'!$C$8)",
      where: "TCO_24_MOIS!I7",
    },
    {
      label: "TCO — temps/variable hébergé",
      actual: "='TCO_24_MOIS'!I8",
      expected:
        "='TCO_24_MOIS'!$C$7*'TCO_24_MOIS'!$C$10*(1+'TCO_24_MOIS'!$C$8/30)+'TCO_24_MOIS'!$C$7*'TCO_24_MOIS'!$C$8*'TCO_24_MOIS'!$C$9*'TCO_24_MOIS'!$C$11",
      where: "TCO_24_MOIS!I8",
    },
    {
      label: "TCO — temps/variable couche",
      actual: "='TCO_24_MOIS'!I9",
      expected:
        "='TCO_24_MOIS'!$C$7*'TCO_24_MOIS'!$C$10*(0.5+'TCO_24_MOIS'!$C$8/60)+'TCO_24_MOIS'!$C$7*'TCO_24_MOIS'!$C$8*'TCO_24_MOIS'!$C$9*'TCO_24_MOIS'!$C$11",
      where: "TCO_24_MOIS!I9",
    },
    {
      label: "TCO — temps/variable spécifique",
      actual: "='TCO_24_MOIS'!I10",
      expected:
        "='TCO_24_MOIS'!$C$7*'TCO_24_MOIS'!$C$10*(1+'TCO_24_MOIS'!$C$8/100)",
      where: "TCO_24_MOIS!I10",
    },
    {
      label: "TCO — total manuel",
      actual: "='TCO_24_MOIS'!J7",
      expected: "='TCO_24_MOIS'!G7+'TCO_24_MOIS'!H7+'TCO_24_MOIS'!I7",
      where: "TCO_24_MOIS!J7",
    },
    {
      label: "TCO — total hébergé",
      actual: "='TCO_24_MOIS'!J8",
      expected: "='TCO_24_MOIS'!G8+'TCO_24_MOIS'!H8+'TCO_24_MOIS'!I8",
      where: "TCO_24_MOIS!J8",
    },
    {
      label: "TCO — total couche",
      actual: "='TCO_24_MOIS'!J9",
      expected: "='TCO_24_MOIS'!G9+'TCO_24_MOIS'!H9+'TCO_24_MOIS'!I9",
      where: "TCO_24_MOIS!J9",
    },
    {
      label: "TCO — total spécifique",
      actual: "='TCO_24_MOIS'!J10",
      expected: "='TCO_24_MOIS'!G10+'TCO_24_MOIS'!H10+'TCO_24_MOIS'!I10",
      where: "TCO_24_MOIS!J10",
    },
  ];

  for (let row = 22; row <= 26; row += 1) {
    checks.push({
      label: `Seuil — sensibilité ligne ${row}`,
      actual: `='TCO_24_MOIS'!E${row}`,
      expected: `=${thresholdValueFormula(row)}`,
      where: `TCO_24_MOIS!E${row}`,
    });
  }

  const readingActual = `=${[22, 23, 24, 25, 26]
    .map(
      (row) => `IF('TCO_24_MOIS'!F${row}=${thresholdReadingFormula(row)},0,1)`,
    )
    .join("+")}`;
  checks.push(
    {
      label: "Seuil — lecture et gagnants",
      actual: readingActual,
      expected: "=0",
      where: "TCO_24_MOIS!F22:F26",
    },
    {
      label: "MRR — équations et chaînage",
      actual: `=${mrrEquationTerms.join("+")}`,
      expected: "=0",
      where: "MRR!C6:J21",
    },
    {
      label: "Rapprochement — équations mensuelles",
      actual: `=${reconciliationEquationTerms.join("+")}`,
      expected: "=0",
      where: "RAPPROCHEMENT!C6:N17",
    },
    {
      label: "Rapprochement — totaux et créance",
      actual: `=${reconciliationTotalTerms.join("+")}`,
      expected: "=0",
      where: "RAPPROCHEMENT!C20:N21",
    },
    {
      label: "Rapprochement — données observées",
      actual: `=IF((${reconciliationStopTerms.join("+")})>0,1,IF((${reconciliationReviewTerms.join("+")})>0,0.5,0))`,
      expected: "=0",
      where: "RAPPROCHEMENT!C6:K17",
      type: "observed",
    },
    {
      label: "Pont MRR vers factures",
      actual:
        "=ABS('RAPPROCHEMENT'!C24-SUM('MRR'!H6:H17))+ABS('RAPPROCHEMENT'!G24-('RAPPROCHEMENT'!C24+'RAPPROCHEMENT'!E24))+ABS('RAPPROCHEMENT'!C20-'RAPPROCHEMENT'!G24)",
      expected: "=0",
      where: "RAPPROCHEMENT!C24:G24",
    },
  );

  const firstCheckRow = 9;
  const lastCheckRow = firstCheckRow + checks.length - 1;
  sheet.getRange("B4").formulas = [
    [
      `=IF(COUNTIF(F${firstCheckRow}:F${lastCheckRow},"FAIL")>0,"MODEL STATUS: FAIL",IF(COUNTIF(F${firstCheckRow}:F${lastCheckRow},"REVIEW")>0,"MODEL STATUS: REVIEW","MODEL STATUS: PASS"))`,
    ],
  ];
  sheet.getRange("B4:H4").merge();
  sheet.getRange("B4:H4").format = {
    fill: colors.emeraldSoft,
    font: { bold: true, color: colors.emerald, size: 12 },
  };
  sheet.getRange("B4:H4").conditionalFormats.add("containsText", {
    text: "FAIL",
    format: { fill: colors.roseSoft, font: { color: colors.rose, bold: true } },
  });
  sheet.getRange("B4:H4").conditionalFormats.add("containsText", {
    text: "REVIEW",
    format: {
      fill: colors.amberSoft,
      font: { color: colors.amber, bold: true },
    },
  });
  sheet.getRange("B5").formulas = [
    [
      "=IF(AND('TCO_24_MOIS'!C7=24,'TCO_24_MOIS'!C8=100,'TCO_24_MOIS'!C9=100,'TCO_24_MOIS'!C10=45,ABS('TCO_24_MOIS'!C11-0.007)<0.0000001),\"FIXTURE CENTRALE\",\"FIXTURE MODIFIÉE\")",
    ],
  ];
  sheet.getRange("B5:H5").merge();
  sheet.getRange("B5:H5").format = {
    fill: colors.violetSoft,
    font: { bold: true, color: colors.violet, size: 11 },
  };
  sheet.getRange("B5:H5").conditionalFormats.add("containsText", {
    text: "MODIFIÉE",
    format: {
      fill: colors.amberSoft,
      font: { color: colors.amber, bold: true },
    },
  });
  sheet.getRange("B6").formulas = [
    [
      `=IF((${reconciliationStopTerms.join("+")})>0,"RAPPROCHEMENT STATUS: STOP",IF((${reconciliationReviewTerms.join("+")})>0,"RAPPROCHEMENT STATUS: À REVOIR","RAPPROCHEMENT STATUS: PASS"))`,
    ],
  ];
  sheet.getRange("B6:H6").merge();
  sheet.getRange("B6:H6").format = {
    fill: colors.emeraldSoft,
    font: { bold: true, color: colors.emerald, size: 11 },
  };
  sheet.getRange("B6:H6").conditionalFormats.add("containsText", {
    text: "STOP",
    format: { fill: colors.roseSoft, font: { color: colors.rose, bold: true } },
  });
  sheet.getRange("B6:H6").conditionalFormats.add("containsText", {
    text: "À REVOIR",
    format: {
      fill: colors.amberSoft,
      font: { color: colors.amber, bold: true },
    },
  });
  sheet.getRange("B8:G8").values = [
    [
      "Contrôle",
      "Valeur",
      "Recalcul indépendant",
      "Delta",
      "Statut",
      "Où corriger",
    ],
  ];
  tableHeader(sheet, "B8:G8");
  sheet.getRange(`B${firstCheckRow}:B${lastCheckRow}`).values = checks.map(
    (check) => [check.label],
  );
  sheet.getRange(`C${firstCheckRow}:C${lastCheckRow}`).formulas = checks.map(
    (check) => [check.actual],
  );
  sheet.getRange(`D${firstCheckRow}:D${lastCheckRow}`).formulas = checks.map(
    (check) => [check.expected],
  );
  sheet.getRange(`E${firstCheckRow}:E${lastCheckRow}`).formulas = checks.map(
    (check, index) => {
      const row = firstCheckRow + index;
      if (check.type === "text") {
        return [`=IF(C${row}=D${row},0,1)`];
      }
      return [
        `=IF(AND(C${row}="",D${row}=""),0,IF(OR(C${row}="",D${row}=""),1,C${row}-D${row}))`,
      ];
    },
  );
  sheet.getRange(`F${firstCheckRow}:F${lastCheckRow}`).formulas = checks.map(
    (check, index) => {
      const row = firstCheckRow + index;
      if (check.type === "observed") {
        return [`=IF(C${row}=0,"PASS",IF(C${row}=0.5,"REVIEW","FAIL"))`];
      }
      return [`=IF(ABS(E${row})<0.0001,"PASS","FAIL")`];
    },
  );
  sheet.getRange(`G${firstCheckRow}:G${lastCheckRow}`).values = checks.map(
    (check) => [check.where],
  );
  sheet.getRange(`C${firstCheckRow}:E${lastCheckRow}`).format.numberFormat =
    "#,##0.0000";
  sheet.getRange(`B${firstCheckRow}:G${lastCheckRow}`).format.borders = {
    bottom: { style: "thin", color: colors.line },
  };
  sheet
    .getRange(`F${firstCheckRow}:F${lastCheckRow}`)
    .conditionalFormats.add("containsText", {
      text: "FAIL",
      format: {
        fill: colors.roseSoft,
        font: { color: colors.rose, bold: true },
      },
    });
  sheet
    .getRange(`F${firstCheckRow}:F${lastCheckRow}`)
    .conditionalFormats.add("containsText", {
      text: "PASS",
      format: {
        fill: colors.emeraldSoft,
        font: { color: colors.emerald, bold: true },
      },
    });
  sheet
    .getRange(`F${firstCheckRow}:F${lastCheckRow}`)
    .conditionalFormats.add("containsText", {
      text: "REVIEW",
      format: {
        fill: colors.amberSoft,
        font: { color: colors.amber, bold: true },
      },
    });
  sheet.freezePanes.freezeRows(8);
}

// ─────────────────────────────────────────────────────────────────────────────
// SOURCES
// ─────────────────────────────────────────────────────────────────────────────
{
  const sheet = sheets.SOURCES;
  titleBlock(
    sheet,
    "Sources et limites",
    "URLs à rouvrir avant toute mise en production. Les sources produit documentent un fournisseur ; elles ne prouvent ni obligation générale, ni gain.",
    "I",
  );
  setWidths(sheet, {
    A: 4,
    B: 24,
    C: 24,
    D: 44,
    E: 21,
    F: 22,
    G: 28,
    H: 15,
    I: 4,
  });
  sheet.getRange("B5:H5").values = [
    [
      "Sujet",
      "Source",
      "URL",
      "Usage autorisé",
      "Limite",
      "Action de maintenance",
      "Vérifié le",
    ],
  ];
  tableHeader(sheet, "B5:H5");
  const sources = workbookSources;
  sheet.getRange("B6:H20").values = sources;
  sheet.getRange("B6:H20").format = {
    wrapText: true,
    verticalAlignment: "top",
    borders: { bottom: { style: "thin", color: colors.line } },
  };
  sheet.getRange("D6:D20").format.font = {
    color: colors.blue,
    underline: "single",
  };
  sheet.getRange("H6:H20").format.numberFormat = "@";
  sheet.freezePanes.freezeRows(5);
}

// Apply consistent row sizing after content writes.
for (const name of sheetNames) {
  const sheet = sheets[name];
  const used = sheet.getUsedRange();
  used.format.wrapText = true;
  used.format.autofitRows();
}
sheets.LIRE_D_ABORD.getRange("6:6").format.rowHeight = 56;
sheets.RAPPROCHEMENT.getRange("20:22").format.rowHeight = 38;
sheets.RAPPROCHEMENT.getRange("24:25").format.rowHeight = 30;

// Compact verification in the builder.
const checks = await workbook.inspect({
  kind: "table",
  range: "CONTROLES!B4:G31",
  include: "values,formulas",
  tableMaxRows: 32,
  tableMaxCols: 8,
  maxChars: 8000,
});
console.log(checks.ndjson);

const formulaErrors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 300 },
  summary: "final formula error scan",
});
console.log(formulaErrors.ndjson);

for (const name of sheetNames) {
  const preview = await workbook.render({
    sheetName: name,
    autoCrop: "all",
    scale: 1,
    format: "png",
  });
  await fs.writeFile(
    path.join(previewDir, `${name}.png`),
    new Uint8Array(await preview.arrayBuffer()),
  );
}

const finalPath = path.join(outputDir, "kit-pilotage-facturation-saas.xlsx");
const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(finalPath);
const exportedBytes = await fs.readFile(finalPath);
await fs.writeFile(finalPath, serializeTestsFreezePane(exportedBytes));
await fs.copyFile(finalPath, publicPath);

console.log(JSON.stringify({ finalPath, publicPath, previewDir }, null, 2));
