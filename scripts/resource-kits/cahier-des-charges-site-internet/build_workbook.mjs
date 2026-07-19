import fs from "node:fs/promises";
import path from "node:path";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const outputDir = process.argv[2];
if (!outputDir) {
  throw new Error("Usage: build_workbook.mjs <output-dir> [kit-config.json]");
}

const configPath = process.argv[3] ?? new URL("./kit_config.json", import.meta.url);
const config = JSON.parse(await fs.readFile(configPath, "utf8"));
if (!config.version || !config.publicationDateLabel) {
  throw new Error("kit_config.json doit définir version et publicationDateLabel");
}

await fs.mkdir(outputDir, { recursive: true });

const BLUE = "#1E4F7A";
const BLUE_LIGHT = "#E8EEF5";
const VIOLET = "#6D28D9";
const TEXT = "#1F2937";
const MUTED = "#5B6472";
const BORDER = "#CBD5E1";
const INPUT = "#FFF7E6";
const GREEN = "#DCFCE7";
const RED = "#FEE2E2";
const AMBER = "#FEF3C7";
const GRAY = "#F6F8FB";

const workbook = Workbook.create();
const mode = workbook.worksheets.add("Mode d'emploi");
const recette = workbook.worksheets.add("Recette");
const synthese = workbook.worksheets.add("Synthèse");
const listes = workbook.worksheets.add("Listes");

for (const sheet of [mode, recette, synthese, listes]) {
  sheet.showGridLines = false;
}

function titleBand(sheet, range, title, subtitle) {
  sheet.getRange(range).merge();
  const anchor = sheet.getRange(range.split(":")[0]);
  anchor.values = [[`${title}\n${subtitle}`]];
  anchor.format = {
    fill: BLUE,
    font: { bold: true, color: "#FFFFFF", size: 16 },
    wrapText: true,
    verticalAlignment: "center",
  };
  sheet.getRange(range).format.rowHeight = 48;
}

function formatHeader(range) {
  range.format = {
    fill: BLUE,
    font: { bold: true, color: "#FFFFFF", size: 9 },
    wrapText: true,
    verticalAlignment: "center",
    horizontalAlignment: "left",
    borders: { preset: "all", style: "thin", color: BORDER },
  };
  range.format.rowHeight = 34;
}

function formatBody(range) {
  range.format = {
    font: { color: TEXT, size: 9 },
    wrapText: true,
    verticalAlignment: "top",
    borders: { preset: "all", style: "thin", color: BORDER },
  };
}

// --- Mode d'emploi -------------------------------------------------------
titleBand(
  mode,
  "A1:F2",
  "Grille de recette — site internet",
  `Version ${config.version} · ${config.publicationDateLabel} · à adapter au périmètre contractuel`,
);

mode.getRange("A4:B10").values = [
  ["Objectif", "Tracer des contrôles observables avant acceptation d'une livraison."],
  ["Ordre conseillé", "1. Supprimer les lignes hors périmètre. 2. Ajouter vos critères dans les 12 lignes libres incluses. 3. Assigner. 4. Tester. 5. Référencer les preuves. 6. Retester."],
  ["Cellules jaunes", "Saisie utilisateur. Les cellules calculées ne doivent pas être remplacées par des valeurs."],
  ["Bloquant", "Empêche un parcours critique ou la mise en ligne sans solution de contournement acceptable."],
  ["Majeur", "Dégrade fortement une fonctionnalité importante ; la décision dépend du contrat et du risque."],
  ["Mineur", "Défaut non bloquant n'empêchant pas l'usage principal."],
  ["Décision", "La synthèse aide à décider ; elle ne remplace pas le procès-verbal, le contrat ni une validation juridique."],
];
for (let row = 4; row <= 10; row += 1) {
  // Give each explanation the full remaining page width. Keeping the text in
  // a narrow B column caused wrapped lines to be clipped in rendered previews.
  mode.getRange(`B${row}:F${row}`).merge();
}
mode.getRange("A4:A10").format = {
  fill: BLUE_LIGHT,
  font: { bold: true, color: BLUE },
  wrapText: true,
  borders: { preset: "all", style: "thin", color: BORDER },
};
mode.getRange("B4:F10").format = {
  font: { color: TEXT },
  wrapText: true,
  verticalAlignment: "center",
  borders: { preset: "all", style: "thin", color: BORDER },
};
mode.getRange("A4:A10").format.columnWidth = 24;
for (const [row, height] of [[4, 32], [5, 52], [6, 38], [7, 38], [8, 38], [9, 32], [10, 44]]) {
  mode.getRange(`A${row}:F${row}`).format.rowHeight = height;
}

mode.getRange("A12:F12").values = [["RÈGLES DE QUALITÉ", "PRÉCONDITION", "ACTION", "RÉSULTAT", "PREUVE", "DÉCISION"]];
formatHeader(mode.getRange("A12:F12"));
mode.getRange("A13:F16").values = [
  ["Un critère par ligne", "Contexte connu", "Verbe d'action précis", "État observable", "Capture, URL, log ou document", "Conforme / à corriger"],
  ["Pas d'adjectif seul", "Éviter « rapide »", "Définir l'outil et le contexte", "Valeur ou comportement attendu", "Rapport daté", "Écart documenté"],
  ["Pas de conformité globale", "Périmètre défini", "Exécuter tests adaptés", "Résultats + limites", "Rapport / audit", "Revue compétente"],
  ["Données de test", "Aucun secret réel", "Utiliser des données fictives", "Aucune fuite de données", "Jeu de test décrit", "Suppression après recette"],
];
formatBody(mode.getRange("A13:F16"));
mode.getRange("A12:F16").format.autofitRows();
for (const [column, width] of [["A", 24], ["B", 23], ["C", 28], ["D", 30], ["E", 24], ["F", 23]]) {
  mode.getRange(`${column}:${column}`).format.columnWidth = width;
}
mode.getRange("A18:F18").merge();
mode.getRange("A18").values = [["Ce classeur ne prouve pas à lui seul une conformité RGPD, RGAA/WCAG, sécurité ou contractuelle. Faites adapter les critères aux obligations et risques du projet."]];
mode.getRange("A18:F18").format = {
  fill: AMBER,
  font: { bold: true, color: "#7C4A03", size: 9 },
  wrapText: true,
  verticalAlignment: "center",
  borders: { preset: "outside", style: "thin", color: "#D97706" },
};
mode.getRange("A18:F18").format.rowHeight = 42;
mode.freezePanes.freezeRows(2);

// --- Recette -------------------------------------------------------------
titleBand(
  recette,
  "A1:P2",
  "Recette opérationnelle",
  "Filtrez, adaptez puis renseignez les colonnes jaunes. Les tests doivent refléter votre contrat et votre risque réel.",
);

const headers = [
  "ID",
  "Lot",
  "Priorité",
  "Précondition",
  "Action / scénario",
  "Résultat attendu",
  "Environnement",
  "Preuve attendue",
  "Responsable",
  "Statut",
  "Date test",
  "Résultat observé / référence de preuve",
  "Gravité",
  "Anomalie / réserve",
  "Date retest",
  "Décision calculée",
];
recette.getRange("A4:P4").values = [headers];
formatHeader(recette.getRange("A4:P4"));

const tests = [
  ["NAV-01", "Navigation", "Critique", "Page d'accueil chargée", "Ouvrir le menu au clavier puis atteindre chaque rubrique", "Focus visible, ordre logique, aucune impasse", "Mobile + ordinateur", "Capture ou vidéo courte", "Partagé"],
  ["NAV-02", "Navigation", "Haute", "Toutes les pages V1 publiées", "Tester chaque lien interne et externe", "Aucun lien cassé ; destination cohérente", "Préproduction", "Rapport de liens", "Prestataire"],
  ["NAV-03", "Navigation", "Haute", "Page longue disponible", "Utiliser le sommaire et le retour arrière", "Ancre visible, titre non masqué, historique utilisable", "Mobile + ordinateur", "Capture", "Partagé"],
  ["MOB-01", "Responsive", "Critique", "Parcours principal disponible", "Exécuter le parcours à 320, 360, 390, 430, 640, 768, 1024, 1280, 1440 et 1600 px", "Aucun débordement horizontal ni contrôle inaccessible", "Navigateurs convenus", "Captures datées", "Partagé"],
  ["MOB-02", "Responsive", "Haute", "Formulaires et tableaux disponibles", "Zoomer à 200 % et 400 % puis utiliser les contrôles", "Contenu lisible et réorganisé sans défilement horizontal inutile ; aucun élément masqué", "Ordinateur", "Captures", "Partagé"],
  ["CNT-01", "Contenus", "Haute", "Inventaire validé", "Comparer pages publiées et inventaire", "Chaque contenu prévu est présent, validé ou explicitement exclu", "Préproduction", "Inventaire signé", "Client"],
  ["CNT-02", "Contenus", "Normale", "Médias intégrés", "Vérifier droits, crédits, poids et recadrage", "Droits tracés ; affichage net sans poids disproportionné", "Pages représentatives", "Registre médias", "Client"],
  ["CNT-03", "Contenus", "Haute", "PDF et téléchargements présents", "Ouvrir et télécharger chaque ressource", "Fichier correct, nom lisible, format et taille annoncés", "Mobile + ordinateur", "Fichiers téléchargés", "Partagé"],
  ["FRM-01", "Formulaires", "Critique", "Boîte et destination de test actives", "Envoyer une demande valide", "Confirmation claire ; message reçu une seule fois ; données correctes", "Préproduction", "Email + trace outil", "Partagé"],
  ["FRM-02", "Formulaires", "Haute", "Formulaire vide", "Soumettre puis corriger chaque erreur", "Labels, messages et focus indiquent précisément les erreurs", "Clavier + lecteur d'écran", "Capture / vidéo", "Partagé"],
  ["FRM-03", "Formulaires", "Haute", "Valeurs limites préparées", "Tester champs longs, accents, apostrophes et caractères usuels", "Aucune coupure, corruption ni erreur serveur", "Préproduction", "Jeu de test", "Prestataire"],
  ["FRM-04", "Formulaires", "Critique", "CRM simulé indisponible", "Soumettre une demande pendant l'indisponibilité", "Utilisateur informé sans fuite technique ; solution de secours appliquée", "Préproduction", "Log + preuve de secours", "Prestataire"],
  ["FRM-05", "Formulaires", "Haute", "Protection anti-abus active", "Tester une soumission légitime puis des répétitions", "Utilisateur légitime non bloqué ; abus limité ; solution accessible", "Préproduction", "Rapport", "Prestataire"],
  ["SEO-01", "SEO", "Critique", "Inventaire des anciennes URL final", "Contrôler chaque ancienne URL prioritaire", "Destination finale pertinente par 301 ou 308, sans chaîne évitable", "Préproduction / staging de migration", "Export des statuts", "Prestataire"],
  ["SEO-02", "SEO", "Haute", "Pages finales publiées", "Contrôler title, description, H1, canonical et langue", "Valeurs uniques et cohérentes avec la page", "Préproduction", "Crawl exporté", "Partagé"],
  ["SEO-03", "SEO", "Critique", "Avant ouverture publique", "Vérifier robots.txt, noindex, sitemap et canonical", "Production indexable ; préproduction non indexable", "Préproduction + production", "Rapport daté", "Prestataire"],
  ["SEO-04", "SEO", "Haute", "Après bascule", "Contrôler 404, 5xx, sitemap et Search Console", "Aucune erreur critique non traitée ; plan de suivi actif", "J+1 / J+7 / J+30", "Exports et tickets", "Partagé"],
  ["SEO-05", "SEO", "Normale", "Images et documents migrés", "Tester anciennes URLs de ressources connues", "Ressource conservée ou redirigée vers équivalent utile", "Production", "Rapport de liens", "Prestataire"],
  ["A11Y-01", "Accessibilité", "Critique", "Parcours critique disponible", "Naviguer entièrement au clavier", "Focus visible, aucune impasse ni piège clavier", "Navigateurs convenus", "Vidéo courte", "Partagé"],
  ["A11Y-02", "Accessibilité", "Haute", "Pages types disponibles", "Contrôler titres, landmarks, labels et ordre de lecture", "Structure compréhensible par technologie d'assistance", "Lecteur d'écran convenu", "Rapport manuel", "Prestataire"],
  ["A11Y-03", "Accessibilité", "Haute", "Palette et composants finaux", "Mesurer contrastes texte, composants et focus", "Seuils de la cible retenue respectés ou écarts documentés", "Pages représentatives", "Rapport de contraste", "Prestataire"],
  ["A11Y-04", "Accessibilité", "Haute", "Images finales", "Contrôler alternatives et images décoratives", "Alternatives pertinentes ; décoratives ignorées correctement", "Pages représentatives", "Audit", "Partagé"],
  ["A11Y-05", "Accessibilité", "Haute", "Erreurs de formulaire déclenchées", "Lire les erreurs au lecteur d'écran", "Erreur annoncée et reliée au champ ; correction compréhensible", "Lecteur d'écran", "Vidéo", "Partagé"],
  ["A11Y-06", "Accessibilité", "Normale", "Contenus sans couleur", "Désactiver couleurs ou simuler déficiences", "Aucune information transmise uniquement par la couleur", "Pages types", "Capture", "Prestataire"],
  ["PERF-01", "Performance", "Haute", "Build de production et cache définis", "Exécuter le protocole laboratoire convenu sur pages types", "Budgets convenus atteints ou écarts expliqués", "Appareil/réseau/cache documentés", "Rapport avec plusieurs passes", "Prestataire"],
  ["PERF-02", "Performance", "Normale", "Données terrain suffisantes après lancement", "Consulter LCP, INP et CLS au p75", "Suivi comparé aux repères actuels sans promesse de classement", "Données réelles", "Export CrUX / outil", "Partagé"],
  ["PERF-03", "Performance", "Haute", "Images finales intégrées", "Tester formats, dimensions et chargement différé", "Aucune image surdimensionnée ; contenu principal priorisé", "Pages types", "Rapport réseau", "Prestataire"],
  ["SEC-01", "Sécurité", "Critique", "Comptes administratifs créés", "Vérifier comptes nominatifs, rôles et activation de la MFA sur chaque compte privilégié", "Moindre privilège ; aucun compte partagé ; MFA active lorsque le service le permet, sinon écart et mesure compensatoire documentés", "Administration", "Inventaire expurgé + capture de configuration", "Partagé"],
  ["SEC-02", "Sécurité", "Critique", "Préproduction accessible", "Rechercher données réelles, secrets, clés et chemins locaux", "Aucun secret ni donnée client brute exposé", "Code + préproduction", "Rapport de scan", "Prestataire"],
  ["SEC-03", "Sécurité", "Haute", "Configuration HTTPS finale", "Tester redirections et ressources mixtes", "HTTPS forcé ; aucun contenu mixte", "Production", "Rapport TLS / navigateur", "Prestataire"],
  ["SEC-04", "Sécurité", "Critique", "Sauvegarde disponible", "Effectuer une restauration sur environnement isolé", "Restauration réussie et procédure chronométrée", "Environnement de test", "Compte rendu", "Prestataire"],
  ["SEC-05", "Sécurité", "Haute", "Processus d'incident défini", "Simuler une alerte et l'escalade", "Contacts, informations et responsabilités connus", "Exercice sur table", "Compte rendu", "Partagé"],
  ["SEC-06", "Sécurité", "Normale", "Dépendances inventoriées", "Vérifier versions et politique de mise à jour", "Périmètre maintenu et délais de correction documentés", "Code / hébergement", "Inventaire", "Prestataire"],
  ["DAT-01", "Données / RGPD", "Critique", "Formulaire final", "Comparer champs, finalités et mentions", "Seules données nécessaires ; information présente ; validations juridiques tracées", "Production", "Revue documentée", "Client"],
  ["DAT-02", "Données / RGPD", "Haute", "Liste des sous-traitants", "Vérifier outils, localisation, transferts et garanties", "Registre projet cohérent ; inconnues signalées", "Dossier de livraison", "Liste datée", "Client"],
  ["DAT-03", "Données / RGPD", "Critique", "Traceurs configurés", "Refuser puis accepter les traceurs non exemptés", "Choix respecté ; aucun déclenchement prématuré", "Navigateur vierge", "Capture réseau", "Partagé"],
  ["DAT-04", "Données / RGPD", "Haute", "Demande d'exercice simulée", "Suivre le parcours de contact et traitement", "Point de contact et procédure opérationnels", "Exercice sur table", "Compte rendu", "Client"],
  ["ANA-01", "Mesure", "Haute", "Plan de mesure validé", "Déclencher chaque événement prévu", "Événement unique, nom stable, aucune donnée personnelle libre", "Préproduction", "Console / outil", "Partagé"],
  ["ANA-02", "Mesure", "Normale", "Filtres internes prévus", "Tester visites internes et paramètres", "Mesure comprise et limites documentées", "Production", "Note de configuration", "Client"],
  ["CMS-01", "Autonomie", "Critique", "Formation réalisée", "Créer et publier une page depuis un modèle", "Utilisateur autorisé termine sans intervention technique", "Administration", "Test chronométré", "Client"],
  ["CMS-02", "Autonomie", "Haute", "Rôles configurés", "Tester éditeur et administrateur", "Chaque rôle voit uniquement les actions nécessaires", "Administration", "Captures", "Partagé"],
  ["CMS-03", "Autonomie", "Normale", "Guide de contribution remis", "Mettre à jour texte, image, title et description", "Procédure claire et résultat publié correctement", "Administration", "Vidéo / guide", "Client"],
  ["INT-01", "Intégrations", "Critique", "Compte de test CRM actif", "Envoyer, modifier puis renvoyer une demande", "Données correctes, doublons gérés selon règle", "Préproduction", "CRM + logs", "Partagé"],
  ["INT-02", "Intégrations", "Haute", "Limites API documentées", "Tester timeout, erreur et quota", "Erreur gérée ; alerte et secours fonctionnels", "Préproduction", "Logs expurgés", "Prestataire"],
  ["OPS-01", "Exploitation", "Critique", "Avant procès-verbal", "Vérifier domaine, hébergement, dépôt, analytics et Search Console", "Comptes et facturation conformes au contrat ; accès client remis", "Dossier de livraison", "Inventaire signé", "Partagé"],
  ["OPS-02", "Exploitation", "Haute", "Inventaire des licences", "Contrôler code spécifique, open source, polices, photos et plugins", "Droits et licences identifiés ; exclusions visibles", "Dossier de livraison", "Inventaire licences", "Prestataire"],
  ["OPS-03", "Exploitation", "Haute", "Export disponible", "Exporter contenus et données dans les formats convenus", "Fichiers lisibles et procédure reproductible", "Production", "Archive de test", "Partagé"],
  ["OPS-04", "Exploitation", "Haute", "Maintenance proposée", "Comparer périmètre, délais, exclusions et prix", "Offre exploitable ; garantie et évolutions séparées", "Contrat / offre", "Tableau comparatif", "Client"],
  ["OPS-05", "Exploitation", "Normale", "Procédure de sortie fournie", "Simuler la remise à un tiers", "Accès, données, code et documentation récupérables selon contrat", "Exercice documentaire", "Checklist signée", "Partagé"],
  ["DOC-01", "Documentation", "Haute", "Dossier de livraison complet", "Suivre la procédure d'installation ou reprise", "Un tiers compétent comprend l'architecture et les opérations courantes", "Dossier remis", "Relecture tierce", "Partagé"],
  ["DOC-02", "Documentation", "Normale", "Contacts de support définis", "Créer une demande fictive", "Canal, priorité et délai applicables compris", "Support", "Ticket fictif", "Client"],
  ["LEG-01", "Contractuel", "Critique", "Version finale du périmètre", "Comparer contrat, devis, CDC et addenda", "Ordre de priorité et écarts compris par les parties", "Dossier contractuel", "Revue compétente", "Client"],
  ["LEG-02", "Contractuel", "Haute", "Livrables et droits listés", "Vérifier cession/licence et éléments tiers", "Droits transmis et domaine d'exploitation délimités au contrat", "Dossier contractuel", "Revue juridique", "Client"],
  ["REL-01", "Mise en ligne", "Critique", "Plan de bascule validé", "Exécuter checklist domaine, DNS, sauvegarde, indexation et retour arrière", "Bascule tracée ; responsables et critères de retour connus", "Production", "Journal de bascule", "Partagé"],
  ["REL-02", "Mise en ligne", "Critique", "Production ouverte", "Exécuter le parcours critique de bout en bout", "Parcours, emails, intégrations et mesure fonctionnent en production", "Production", "Preuves datées", "Partagé"],
  ["REL-03", "Mise en ligne", "Haute", "J+1", "Contrôler erreurs, logs, 404, formulaires et performance", "Aucune anomalie critique non traitée ; plan d'action actif", "Production", "Compte rendu J+1", "Partagé"],
];

const testRows = tests.map((row) => [
  ...row,
  "À tester",
  "",
  "",
  "—",
  "",
  "",
  "",
]);
const CUSTOM_ROWS = 12;
const customRows = Array.from({ length: CUSTOM_ROWS }, () => [
  null, null, null, null, null, null, null, null, null, "À tester", null, null, "—", null, null, null,
]);
const dataRows = [...testRows, ...customRows];
recette.getRange(`A5:P${4 + dataRows.length}`).values = dataRows;
formatBody(recette.getRange(`A5:P${4 + dataRows.length}`));

const endRow = 4 + dataRows.length;
recette.getRange(`C5:C${endRow}`).format.fill = INPUT;
recette.getRange(`I5:O${endRow}`).format.fill = INPUT;
recette.getRange(`P5:P${endRow}`).format.fill = GRAY;
recette.getRange("P5").formulas = [[`=IF(A5="","",IF(J5="Non applicable",IF(N5="","INCOMPLET","N/A"),IF(J5="Conforme",IF(OR(K5="",L5=""),"INCOMPLET","OK"),IF(J5="À corriger",IF(OR(K5="",M5="",M5="—",N5=""),"INCOMPLET",IF(M5="Bloquant","BLOQUANT","À traiter")),"En attente"))))`]];
recette.getRange(`P5:P${endRow}`).fillDown();
recette.getRange(`C5:C${endRow}`).dataValidation = { rule: { type: "list", values: ["Critique", "Haute", "Normale"] } };
recette.getRange(`I5:I${endRow}`).dataValidation = { rule: { type: "list", values: ["Client", "Prestataire", "Partagé", "Tiers"] } };
recette.getRange(`J5:J${endRow}`).dataValidation = { rule: { type: "list", values: ["À tester", "En cours", "Conforme", "À corriger", "Non applicable"] } };
recette.getRange(`M5:M${endRow}`).dataValidation = { rule: { type: "list", values: ["—", "Bloquant", "Majeur", "Mineur"] } };
recette.getRange(`K5:K${endRow}`).format.numberFormat = "yyyy-mm-dd";
recette.getRange(`O5:O${endRow}`).format.numberFormat = "yyyy-mm-dd";

recette.getRange(`J5:J${endRow}`).conditionalFormats.add("containsText", { text: "Conforme", format: { fill: GREEN, font: { bold: true, color: "#166534" } } });
recette.getRange(`J5:J${endRow}`).conditionalFormats.add("containsText", { text: "À corriger", format: { fill: RED, font: { bold: true, color: "#991B1B" } } });
recette.getRange(`J5:J${endRow}`).conditionalFormats.add("containsText", { text: "En cours", format: { fill: AMBER, font: { bold: true, color: "#92400E" } } });
recette.getRange(`P5:P${endRow}`).conditionalFormats.add("containsText", { text: "BLOQUANT", format: { fill: RED, font: { bold: true, color: "#991B1B" } } });
recette.getRange(`P5:P${endRow}`).conditionalFormats.add("containsText", { text: "INCOMPLET", format: { fill: AMBER, font: { bold: true, color: "#92400E" } } });
recette.getRange(`P5:P${endRow}`).conditionalFormats.add("containsText", { text: "OK", format: { fill: GREEN, font: { bold: true, color: "#166534" } } });

const widths = [10, 18, 12, 29, 39, 39, 25, 24, 15, 16, 13, 34, 13, 30, 13, 18];
for (let i = 0; i < widths.length; i += 1) {
  recette.getRangeByIndexes(0, i, endRow, 1).format.columnWidth = widths[i];
}
recette.getRange(`A5:P${endRow}`).format.rowHeight = 76;
recette.freezePanes.freezeRows(4);
recette.freezePanes.freezeColumns(3);

// --- Synthèse ------------------------------------------------------------
titleBand(
  synthese,
  "A1:H2",
  "Synthèse de la recette",
  "Les indicateurs sont calculés depuis l'onglet Recette. Ils n'emportent aucune acceptation automatique.",
);
synthese.getRange("A4:B11").values = [
  ["INDICATEUR", "VALEUR"],
  ["Tests au total", ""],
  ["Conformes complets", ""],
  ["À corriger", ""],
  ["Bloquants ouverts", ""],
  ["Non applicables", ""],
  ["Avancement", ""],
  ["Aide à la décision", ""],
];
formatHeader(synthese.getRange("A4:B4"));
formatBody(synthese.getRange("A5:B11"));
synthese.getRange("A5:A11").format = { fill: BLUE_LIGHT, font: { bold: true, color: BLUE }, borders: { preset: "all", style: "thin", color: BORDER } };
// Count rows with an ID. The extensible rows keep a truly empty ID cell so
// they join the total only after the user names a custom test.
synthese.getRange("B5").formulas = [[`=COUNTA('Recette'!A5:A${endRow})`]];
synthese.getRange("B6").formulas = [[`=COUNTIF('Recette'!P5:P${endRow},"OK")`]];
synthese.getRange("B7").formulas = [[`=COUNTIF('Recette'!J5:J${endRow},"À corriger")`]];
synthese.getRange("B8").formulas = [[`=COUNTIF('Recette'!P5:P${endRow},"BLOQUANT")`]];
synthese.getRange("B9").formulas = [[`=COUNTIF('Recette'!P5:P${endRow},"N/A")`]];
synthese.getRange("B10").formulas = [[`=IF((B5-B9)=0,0,B6/(B5-B9))`]];
synthese.getRange("B11").formulas = [[`=IF(B8>0,"RECETTE BLOQUÉE",IF(COUNTIF('Recette'!P5:P${endRow},"INCOMPLET")>0,"RECETTE INCOMPLÈTE",IF(B6=(B5-B9),"PRÊT POUR DÉCISION D'ACCEPTATION","RECETTE EN COURS")))`]];
synthese.getRange("B10").format.numberFormat = "0%";
synthese.getRange("B11").format = { fill: AMBER, font: { bold: true, color: "#92400E" }, wrapText: true, borders: { preset: "all", style: "thin", color: BORDER } };
synthese.getRange("A4:A11").format.columnWidth = 31;
synthese.getRange("B4:B11").format.columnWidth = 42;
synthese.getRange("A4:B11").format.autofitRows();

const lots = [...new Set(tests.map((row) => row[1]))];
synthese.getRange("D4:G4").values = [["LOT", "TOTAL", "CONFORMES", "À CORRIGER"]];
formatHeader(synthese.getRange("D4:G4"));
for (let i = 0; i < lots.length; i += 1) {
  const row = 5 + i;
  synthese.getRange(`D${row}`).values = [[lots[i]]];
  synthese.getRange(`E${row}`).formulas = [[`=COUNTIF('Recette'!B5:B${endRow},D${row})`]];
  synthese.getRange(`F${row}`).formulas = [[`=COUNTIFS('Recette'!B5:B${endRow},D${row},'Recette'!P5:P${endRow},"OK")`]];
  synthese.getRange(`G${row}`).formulas = [[`=COUNTIFS('Recette'!B5:B${endRow},D${row},'Recette'!J5:J${endRow},"À corriger")`]];
}
formatBody(synthese.getRange(`D5:G${4 + lots.length}`));
synthese.getRange(`D5:D${4 + lots.length}`).format.fill = BLUE_LIGHT;
synthese.getRange("D:G").format.columnWidth = 20;
synthese.getRange(`D4:G${4 + lots.length}`).format.autofitRows();
synthese.getRange("A14:B18").values = [
  ["CONTRÔLE AVANT DÉCISION", "RÈGLE"],
  ["Bloquants", "Aucun bloquant ouvert, sauf décision formelle et documentée conforme au contrat."],
  ["Preuves", "Chaque conforme possède une preuve identifiable ou une référence vérifiable."],
  ["Réserves", "Les écarts acceptés ont un responsable, une échéance et une conséquence explicites."],
  ["Signature", "La décision finale appartient aux parties selon le contrat ; cette synthèse n'est pas un procès-verbal."],
];
formatHeader(synthese.getRange("A14:B14"));
formatBody(synthese.getRange("A15:B18"));
synthese.getRange("A14:A18").format.columnWidth = 31;
synthese.getRange("B14:B18").format.columnWidth = 80;
synthese.getRange("A14:B18").format.autofitRows();
synthese.freezePanes.freezeRows(2);

// --- Listes --------------------------------------------------------------
titleBand(
  listes,
  "A1:F2",
  "Listes et définitions",
  "Référentiel visible utilisé par les menus de saisie et les décisions.",
);
listes.getRange("A4:F4").values = [["PRIORITÉ", "STATUT", "GRAVITÉ", "RESPONSABLE", "DÉCISION", "DÉFINITION"]];
formatHeader(listes.getRange("A4:F4"));
listes.getRange("A5:F9").values = [
  ["Critique", "À tester", "—", "Client", "En attente", "Test indispensable avant décision."],
  ["Haute", "En cours", "Bloquant", "Prestataire", "BLOQUANT", "Empêche un parcours critique ou une mise en ligne acceptable."],
  ["Normale", "Conforme", "Majeur", "Partagé", "OK", "Résultat attendu observé et preuve référencée."],
  ["", "À corriger", "Mineur", "Tiers", "À traiter", "Écart documenté, correction et retest nécessaires."],
  ["", "Non applicable", "", "", "N/A", "Ligne conservée mais justifiée hors périmètre."],
];
formatBody(listes.getRange("A5:F9"));
listes.getRange("A5:E9").format.fill = INPUT;
listes.getRange("A4:F9").format.autofitRows();
for (const [column, width] of [["A", 17], ["B", 20], ["C", 17], ["D", 18], ["E", 18], ["F", 68]]) {
  listes.getRange(`${column}:${column}`).format.columnWidth = width;
}
listes.getRange("A12:F15").values = [
  ["SOURCE / LIMITE", "URL", "", "", "", ""],
  ["Le cahier des charges et la recette doivent être adaptés au contrat et au risque.", "https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/batir-le-cahier-des-charges-du-site-internet", "", "", "", ""],
  ["Les données, traceurs et rôles doivent être qualifiés pour le projet.", "https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/comment-mettre-mon-site-web-en-conformite", "", "", "", ""],
  ["Une revendication de conformité accessibilité exige une évaluation adaptée.", "https://accessibilite.numerique.gouv.fr/obligations/champ-application/", "", "", "", ""],
];
listes.getRange("A12:F12").merge(true);
formatHeader(listes.getRange("A12:F12"));
listes.getRange("A13:A15").format = { fill: BLUE_LIGHT, font: { bold: true, color: BLUE }, wrapText: true, borders: { preset: "all", style: "thin", color: BORDER } };
listes.getRange("B13:F15").merge(true);
listes.getRange("B13:F15").format = { font: { color: TEXT, size: 9 }, wrapText: true, borders: { preset: "all", style: "thin", color: BORDER } };
listes.getRange("A12:F15").format.autofitRows();
listes.freezePanes.freezeRows(2);

// Compact structural QA before export.
const sheetCheck = await workbook.inspect({ kind: "sheet", include: "id,name" });
await fs.writeFile(path.join(outputDir, "qa-workbook-sheets.ndjson"), sheetCheck.ndjson, "utf8");

const recipeCheck = await workbook.inspect({
  kind: "table",
  range: `Recette!A1:P${endRow}`,
  include: "values,formulas",
  tableMaxRows: 12,
  tableMaxCols: 16,
});
await fs.writeFile(path.join(outputDir, "qa-workbook-recette.ndjson"), recipeCheck.ndjson, "utf8");

const summaryCheck = await workbook.inspect({
  kind: "table",
  range: "Synthèse!A1:H18",
  include: "values,formulas",
  tableMaxRows: 20,
  tableMaxCols: 8,
});
await fs.writeFile(path.join(outputDir, "qa-workbook-synthese.ndjson"), summaryCheck.ndjson, "utf8");

const formulaErrors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 300 },
  summary: "final formula error scan",
});
await fs.writeFile(path.join(outputDir, "qa-workbook-errors.ndjson"), formulaErrors.ndjson, "utf8");

const previews = [
  ["mode-emploi", "Mode d'emploi", "A1:F18"],
  ["recette-1", "Recette", "A1:P30"],
  ["recette-2", "Recette", `A31:P${endRow}`],
  ["synthese", "Synthèse", `A1:H${Math.max(18, 4 + lots.length)}`],
  ["listes", "Listes", "A1:F15"],
];
for (const [name, sheetName, range] of previews) {
  const blob = await workbook.render({ sheetName, range, scale: 1, format: "png" });
  await fs.writeFile(path.join(outputDir, `qa-${name}.png`), new Uint8Array(await blob.arrayBuffer()));
}

const xlsx = await SpreadsheetFile.exportXlsx(workbook);
await xlsx.save(path.join(outputDir, "grille-de-recette-site-internet.xlsx"));

console.log(`Workbook built: ${path.join(outputDir, "grille-de-recette-site-internet.xlsx")}`);
console.log(`Tests: ${tests.length}; custom rows: ${CUSTOM_ROWS}; sheets: 4`);
