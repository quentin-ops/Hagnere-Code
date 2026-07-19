# Kit « cahier des charges de site internet » — génération et release

Ce dossier contient les **sources de génération** du kit téléchargeable associé
au guide `/guides/cahier-des-charges-site-internet`. Les fichiers Office et PDF
présents dans `public/` sont des sorties de build : ils ne doivent jamais être
corrigés à la main.

Le point d'entrée canonique est [`release_kit.py`](release_kit.py). Il génère,
finalise, audite, assemble et, avec `--publish`, copie les livrables dans le
dossier public du dépôt.

## Sources de vérité

| Fichier                                                                | Responsabilité                                                                                                     |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| [`kit_config.json`](kit_config.json)                                   | Version, date publique et horodatages techniques communs à tous les générateurs                                    |
| [`build_documents.py`](build_documents.py)                             | Contenu, structure, styles, liens et métadonnées initiales du modèle Word, de l'exemple fictif et du mode d'emploi |
| [`build_workbook.mjs`](build_workbook.mjs)                             | Contenu, formules, styles et aperçus de la grille de recette Excel                                                 |
| [`finalize_docx.py`](finalize_docx.py)                                 | Métadonnées publiques et langue `fr-FR` des DOCX après nettoyage de confidentialité                                |
| [`finalize_workbook.py`](finalize_workbook.py)                         | Métadonnées, listes nommées, validations, volets, filtre et hyperliens du XLSX final                               |
| [`verify_workbook_recalculation.py`](verify_workbook_recalculation.py) | Scénarios fonctionnels recalculés par LibreOffice sur des copies du XLSX                                           |
| [`release_kit.py`](release_kit.py)                                     | Ordre canonique, audits bloquants, ZIP, manifeste et remplacement sécurisé fichier par fichier dans `public/`      |
| [`requirements.txt`](requirements.txt)                                 | Versions Python utilisées et testées pour générer, rendre et auditer le kit                                        |
| `src/lib/resources.ts`                                                 | Manifeste d'intégration du site : libellés, URL, noms de téléchargement et tailles annoncées                       |
| `public/ressources/kit-cahier-des-charges-site-internet/`              | Sorties publiques générées, jamais sources éditoriales                                                             |

Une correction de texte, de mise en page, de formule ou de lien se fait dans
le générateur concerné. Relancer ensuite le pipeline complet. Une modification
directe d'un DOCX, PDF, XLSX ou ZIP public crée une divergence que la prochaine
release écrasera.

## Prérequis observables dans le pipeline

- Python 3.10 ou plus récent — versions validées : 3.12 et 3.14 — dans un
  environnement où les versions de [`requirements.txt`](requirements.txt)
  sont installées ;
- le skill Documents de Codex contenant `render_docx.py`,
  `scripts/privacy_scrub.py` et `scripts/a11y_audit.py` ;
- LibreOffice (`soffice`) pour les PDF et le recalcul réel des scénarios XLSX ;
- Poppler (`pdfinfo` et `pdftoppm`) utilisé par `pdf2image` pendant le rendu ;
- Node.js et `@oai/artifact-tool` — version testée : `2.8.24` — accessibles
  depuis un même dossier `node_modules` ;
- assez d'espace temporaire pour les intermédiaires, rendus, rapports et
  fichiers de staging.

Le `python3` global n'est pas supposé contenir ces modules. Préparer un
environnement isolé avant la première release, par exemple :

```bash
python3 -m venv /private/tmp/hagnere-kit-python
/private/tmp/hagnere-kit-python/bin/python -m pip install \
  -r scripts/resource-kits/cahier-des-charges-site-internet/requirements.txt
```

Le script vérifie les imports requis **et l'égalité stricte entre chaque version
installée et chaque version épinglée** avant de générer un fichier. Il donne la
commande d'installation si un module manque ou si une version diverge. Il
cherche les outils Codex et LibreOffice dans leurs emplacements connus. Quatre
variables permettent de pointer explicitement vers une installation valide :

```text
CODEX_DOCUMENTS_SKILL_DIR
CODEX_NODE_MODULES_DIR
CODEX_NODE_BIN
CODEX_SOFFICE_BIN        # moteur du recalcul XLSX
```

Ne détournez pas ces variables vers une version non vérifiée uniquement pour
faire passer le build : les PDF publics dépendent du moteur de rendu réellement
appelé par `render_docx.py`. Ce renderer résout lui-même `soffice` et Poppler
dans son environnement ; `CODEX_SOFFICE_BIN` ne remplace que le moteur des
scénarios XLSX. Le manifeste consigne les chemins et versions observables pour
ne pas confondre deux chaînes de génération.

## Commande canonique

Une release utilise **une seule génération**, publiée dans le dépôt puis revue
sur ces fichiers exacts. Depuis la racine, choisir un dossier neuf et lancer :

```bash
/private/tmp/hagnere-kit-python/bin/python \
  scripts/resource-kits/cahier-des-charges-site-internet/release_kit.py \
  --work-dir /private/tmp/hagnere-kit-cdc-v1-0-release \
  --publish
```

Le dossier passé à `--work-dir` doit être neuf ou vide. Le pipeline refuse un
dossier non vide afin de ne pas mélanger deux releases. Conserver ce dossier
jusqu'à la fin de la revue : il contient les rendus et
`release-manifest.json`. Sans `--work-dir`, une exécution de contrôle reste
possible dans un dossier temporaire, mais `--publish` est volontairement
refusé car les preuves seraient supprimées à la fin.

`--publish` signifie uniquement : consigner la demande dans un manifeste
prépublication, préparer les cinq copies, vérifier leurs empreintes puis
remplacer chaque fichier public par renommage atomique. Le manifeste porte
`publicationStatus: pending` avant le premier remplacement et ne passe à
`completed` qu'après relecture des cinq fichiers publics. Les cinq remplacements
ne constituent pas une transaction atomique globale. Cette option ne lance ni
déploiement, ni publication Vercel, ni indexation.

## Ordre du pipeline

`release_kit.py` exécute les opérations suivantes :

1. génération des trois DOCX sources avec `build_documents.py` ;
2. nettoyage de confidentialité, restauration des métadonnées publiques et
   audit d'accessibilité de chaque DOCX ;
3. rendu PDF des trois documents pour contrôle ;
4. conservation du modèle en DOCX, et publication de l'exemple et du mode
   d'emploi en PDF ;
5. génération du XLSX, finalisation OOXML puis recalcul LibreOffice de treize
   scénarios de décision définis dans `verify_workbook_recalculation.py`, sur
   des copies ;
6. création du ZIP avec noms, ordre et horodatage d'archive stabilisés ;
7. audits Office, PDF, liens HTTPS et ZIP ;
8. collecte de toutes les preuves puis écriture et relecture de
   `release-manifest.json`, avec état `pending` si `--publish` a été demandé,
   version, tailles, SHA-256 et chaîne d'outils observée : Python et paquets,
   zlib de construction et d'exécution, Node, Artifact Tool, skill Documents,
   LibreOffice et Poppler visible ;
9. préparation des cinq copies contre les empreintes de ce manifeste, puis
   remplacement atomique fichier par fichier dans `public/` ;
10. relecture des cinq fichiers publics contre le manifeste puis passage de
    `publicationStatus` à `completed`. Sans `--publish`, l'état reste
    `not-requested` et aucun fichier public n'est touché.

Une erreur de génération, d'audit, de collecte ou d'écriture du manifeste
interrompt le pipeline avant la copie. Si une erreur survient pendant les cinq
remplacements publics ou leur relecture, le manifeste reste prudemment
`pending` et `public/` doit être considéré comme potentiellement incohérent :
comparer chaque fichier au `stage/` et au manifeste, puis relancer une release
complète avant toute livraison. Ne contournez pas un audit en copiant
manuellement un intermédiaire.

Le ZIP est reproductible lorsque les quatre fichiers sources **et la chaîne de
compression Python/zlib** sont identiques. Ses noms, son ordre, son système ZIP,
ses permissions et son horodatage sont stabilisés ; une autre version de zlib
peut néanmoins produire un flux DEFLATE différent. Les moteurs Office/PDF,
polices ou bibliothèques peuvent aussi faire varier les fichiers sources sans
changement éditorial. Ne comparez donc pas deux builds par intuition :
conservez le manifeste de la release effectivement revue et publiée dans le
dépôt ; il consigne les versions zlib de construction et d'exécution.

## Contrat des quatre livrables

Les noms sont définis dans `PUBLIC_FILES` et font partie de l'interface
publique du site.

### 1. Modèle Word

`modele-cahier-des-charges-site-internet.docx`

- document éditable en français (`fr-FR`) ;
- dix-huit rubriques guidées ;
- première rubrique intitulée « 1. Identité, statut et contrôle du document » ;
- pour chaque rubrique métier : contexte, champs à compléter, réponse attendue
  du prestataire et critère de fin ;
- références officielles cliquables et licence visibles ;
- aucun composant actif, objet incorporé ou connexion externe Office.

Le PDF rendu du modèle est un artefact de QA ; il ne fait pas partie des quatre
fichiers publics.

### 2. Exemple rempli

`exemple-rempli-cahier-des-charges-site-internet.pdf`

- exemple rempli de bout en bout à partir du même générateur que le modèle ;
- entreprise, personnes, URL, objectifs, dates, budget et résultats
  explicitement fictifs ;
- aucune présentation comme référence client, devis réel ou preuve de
  performance ;
- PDF `fr-FR`, balisé, avec liens et signets ;
- exactement dix-sept pages A4, avec une dernière page substantielle, et au
  moins dix annotations de lien selon l'audit automatisé ;
- aucun `/OpenAction` ni action automatique de document.

### 3. Grille de recette

`grille-de-recette-site-internet.xlsx`

- quatre feuilles : `Mode d'emploi`, `Recette`, `Synthèse` et `Listes` ;
- 56 tests préremplis et 12 lignes libres, soit 68 lignes de recette ;
- seize colonnes `A:P`, avec preuve attendue séparée du résultat observé ou de
  la référence de preuve ;
- volets figés en `D5` et filtre `A4:P72` dans la feuille `Recette` ;
- listes nommées `PriorityList`, `StatusList`, `SeverityList` et `OwnerList` ;
- exactement quatre validations de saisie reliées aux listes nommées ;
- décision calculée sans `#REF!` : « Conforme » reste incomplet sans date et
  preuve, « À corriger » reste incomplet sans date, gravité et anomalie, et une
  ligne non applicable doit être justifiée ;
- le total initial vaut 56 : les douze cellules d'identifiant des lignes libres
  restent réellement vides et ne rejoignent le total qu'après saisie d'un ID ;
- métadonnées publiques `Hagnéré Code`, version lue dans `kit_config.json` et
  langue `fr-FR` ;
- aucun macroprojet, ActiveX, objet incorporé, lien de classeur externe ou
  connexion.

La feuille rappelle que le classeur ne prouve pas à lui seul une conformité
RGPD, RGAA/WCAG, sécurité ou contractuelle.

### 4. Mode d'emploi

`lisez-moi-kit-cahier-des-charges-site-internet.pdf`

- exactement quatre pages A4, sans page finale quasi vide ;
- ordre d'utilisation des fichiers, critères de qualité, limites, maintenance
  et licence ;
- PDF `fr-FR`, balisé, avec au moins cinq liens ;
- aucun `/OpenAction` ni action automatique.

### Archive

`kit-cahier-des-charges-site-internet.zip`

Le ZIP contient **exactement**, à sa racine et dans l'ordre défini par
`PUBLIC_FILES` :

1. `modele-cahier-des-charges-site-internet.docx` ;
2. `exemple-rempli-cahier-des-charges-site-internet.pdf` ;
3. `grille-de-recette-site-internet.xlsx` ;
4. `lisez-moi-kit-cahier-des-charges-site-internet.pdf`.

Le pipeline compare chaque membre du ZIP avec le fichier individuel
correspondant, octet par octet. Aucun manifeste, dossier caché, source DOCX ou
aperçu PNG ne doit être ajouté à l'archive publique.

## Audits automatisés bloquants

### DOCX

- l'audit d'accessibilité du skill Documents doit retourner zéro constat
  `high`, `medium` et `low` ;
- la langue `fr-FR` doit apparaître dans les métadonnées, réglages et styles ;
- la rubrique 1 doit exister ;
- les treize relations externes doivent être exclusivement des hyperliens
  `https://` sans identifiants dans l'URL ;
- les parties `vbaProject`, `ActiveX`, `embeddings`, `externalLinks` et
  `connections` sont interdites.

### PDF

- catalogue en `fr-FR` ;
- arbre de structure et marqueur de document balisé ;
- nombre exact de pages, format A4, densité minimale de la dernière page et
  minimum de liens propre à chaque livrable ;
- signet de la rubrique 1 dans l'exemple ;
- absence d'action automatique à l'ouverture, de formulaire, de script, de
  pièce jointe et d'action de lien dangereuse ;
- seules les actions internes `GoTo` et les URL externes `https://` sont
  autorisées.

### XLSX

- volets, filtre, quatre listes nommées et quatre validations présents ;
- formules présentes et sans `#REF!` ; total initial mis en cache à 56, formule
  de décision contrôlant date, preuve, gravité vide ou « — » et anomalie ;
- recalcul LibreOffice bloquant de treize scénarios couvrant l'état initial,
  les champs manquants de « Conforme » et « À corriger », les gravités vide et
  « — », les corrections majeure/bloquante et « Non applicable » sans/avec
  justification ;
- métadonnées publiques présentes ;
- les trois relations externes doivent être exclusivement des hyperliens
  `https://` ;
- absence des composants actifs, incorporés ou connectés interdits.

### ZIP

- noms et ordre stricts ;
- égalité octet par octet entre membres de l'archive et fichiers individuels.

Ces audits contrôlent la structure et certains risques techniques. Ils ne
remplacent pas une revue visuelle, une lecture éditoriale, un essai des
formules dans le tableur cible ou un test par un dirigeant non technique.

## Revue manuelle avant livraison

Après un build conservé avec `--work-dir` :

1. ouvrir les pages PNG/PDF rendues du modèle, de l'exemple et du mode
   d'emploi ; contrôler couverture, sommaire, tableaux, retours à la ligne,
   pages finales, liens et absence de page vide accidentelle ;
2. ouvrir le XLSX dans les logiciels annoncés comme compatibles ; contrôler
   les quatre feuilles, filtres, volets, menus, dates, preuves, anomalies,
   retests et synthèse ;
3. confirmer les transitions déjà recalculées automatiquement : `À tester` →
   `En attente`, `Conforme` sans preuve → `INCOMPLET`, `Conforme` complet →
   `OK`, `À corriger` avec gravité vide → `INCOMPLET`, anomalie majeure
   documentée → `À traiter`, anomalie bloquante documentée → `BLOQUANT`, et
   `Non applicable` sans justification → `INCOMPLET` ;
4. ouvrir les quatre fichiers individuellement et depuis le ZIP ;
5. vérifier que les URL officielles sont cliquables et que les mentions
   « fictif », limites et licence restent visibles ;
6. comparer les tailles réellement publiées avec `src/lib/resources.ts`, puis
   exécuter les tests du manifeste du site ;
7. contrôler le guide dans un vrai navigateur, y compris ses liens directs,
   avant toute livraison de l'intégration web.

Documenter les commandes, résultats et réserves dans le rapport de QA du
projet. Ne cocher ni test humain, ni déploiement, ni indexation si ces actions
n'ont pas été réellement observées.

La revue porte sur le `stage/` et les fichiers `public/` issus de **cette même
exécution**. Ne relancez pas un second build après la revue pour le publier :
ses octets n'auraient pas été inspectés.

## Version et date publiques

`kit_config.json` est l'unique source de version et de date des générateurs.
Avant une nouvelle release :

1. corriger les sources et vérifier les références officielles concernées ;
2. augmenter la version dans `kit_config.json` : correctif pour une erreur,
   mineure pour un ajout compatible, majeure si les noms ou le contrat des
   fichiers changent ;
3. mettre à jour la date, son libellé français et les deux horodatages
   techniques dans le même fichier ;
4. aligner `src/lib/resources.ts` — son test compare automatiquement version et
   date au fichier canonique ;
5. générer une fois, conserver le manifeste, puis refaire toutes les revues.

## Après une release réussie

- lire `release-manifest.json`, vérifier `publicationStatus: completed` lorsqu'une
  copie publique a été demandée, puis conserver les tailles et SHA-256 dans le
  rapport de QA ;
- mettre à jour les `sizeBytes` et `sizeLabel` de `src/lib/resources.ts` si le
  moindre octet public a changé ;
- vérifier que les cinq chemins publics répondent avec le type de contenu et le
  nom attendus dans l'environnement réellement testé ;
- exécuter les tests, le lint, TypeScript et le build du site selon la portée de
  la modification ;
- inspecter le diff : seules les sources prévues, les sorties publiques et le
  manifeste d'intégration doivent avoir changé ;
- distinguer dans le compte rendu : généré, audité automatiquement, inspecté
  visuellement, copié dans `public/`, déployé et indexé. Ces états ne sont pas
  interchangeables.

## Modifications interdites

- ouvrir un binaire public pour « corriger vite » une phrase, une cellule ou un
  lien ;
- remplacer un PDF seul sans régénérer son DOCX source et le ZIP ;
- remplacer le XLSX seul sans mettre à jour le ZIP et les tailles du manifeste
  web ;
- assouplir un audit pour accepter un fichier actif, non balisé ou incohérent ;
- ajouter au ZIP des sources, captures, rapports ou données internes ;
- inclure des données client, secrets, chemins locaux, emails personnels ou
  identifiants de test réels ;
- présenter l'exemple fictif comme un cas client ;
- déclarer une publication ou une conversion à partir de la seule présence des
  fichiers dans `public/`.

Si un binaire public diverge des générateurs, considérer le binaire comme une
sortie périmée : corriger la source, reconstruire l'ensemble, refaire les
audits, puis publier par `release_kit.py --publish`.
