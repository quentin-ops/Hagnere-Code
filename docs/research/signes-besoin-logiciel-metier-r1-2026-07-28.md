# Refonte premium R1 — `signes-besoin-logiciel-metier`

Date d’arrêté : 28 juillet 2026  
Statut visé : brouillon premium local, non publié  
Périmètre : guide, moteur TypeScript, outil web, classeur XLSX, tests, BAT et sources

## 1. Baseline gelée

L’audit indépendant de la page existante convergeait vers **81/100 — NO-GO premium** :

- bonne prudence : aucune équivalence « signe = sur-mesure » ;
- huit FAQ, neuf chapitres utiles et six réponses non hiérarchiques ;
- priorité correcte aux accès, sauvegardes et modes de secours ;
- mais environ 2 550 mots visibles, aucun tableau, outil ou export ;
- corpus visible exclusivement français ;
- absence de baseline normale/tendue, TCO 12/36/60, données, fit-gap, pilote et réversibilité ;
- trois CTA visibles avec la configuration par défaut du gabarit.

L’audit technique notait le dispositif de décision **43/100** : bonne introduction éditoriale, mais aucun schéma versionné, état `null`, STOP non compensable, moteur, formule, export ou test adversarial.

## 2. Question de recherche

La refonte doit répondre à une question neutre :

> Quelle est la prochaine vérification la moins coûteuse et la plus sûre pour une situation réellement observée ?

Elle ne doit pas répondre automatiquement :

> Quel logiciel acheter ou faut-il développer du sur-mesure ?

Le sur-mesure reste une voie d’étude, jamais un verdict produit par un score.

## 3. Benchmark international

Le corpus canonique est enregistré dans :

- `src/lib/business-software-need-sources.json` ;
- 26 sources uniques, consultées le 28 juillet 2026 ;
- autorités françaises, européennes, britanniques, canadiennes, australiennes, américaines et internationales ;
- chaque entrée contient une portée et une limite de transposition.

Axes repris :

1. **GOV.UK** : besoin avant technologie, construire/acheter/réutiliser, COTS testé comme service complet, standards ouverts, coût de cycle de vie et capacité de sortie.
2. **Canada** : conception avec les utilisateurs, import/export, interopérabilité, sécurité, vie privée et test de bout en bout.
3. **Australie** : intention claire, besoins des utilisateurs, inclusion, confiance, réutilisation, mesure et amélioration continue.
4. **Commission européenne** : maturité numérique multidimensionnelle et principe de réutilisation avant achat puis construction.
5. **OCDE** : transformation des PME dépendante des compétences, moyens et trajectoires, sans seuil individuel.
6. **NIST** : risque cyber gouverné séparément de l’amélioration fonctionnelle.
7. **CNIL** : habilitations, sauvegardes restaurables, continuité et sous-traitance dans le périmètre des données personnelles.
8. **France Num / DesignGouv / RGESN** : observation, utilisateurs, solutions existantes, ERP, no-code et écoconception.

Les cadres étrangers ne sont jamais présentés comme obligations françaises. La documentation Microsoft est explicitement qualifiée de source éditeur bornée à Power Platform.

## 4. Architecture de décision

La refonte éditoriale R1 livre le moteur
`business-software-need-r2-2026-07-28` et l’enveloppe JSON
`schemaVersion: 2`. Ce changement de schéma rend obligatoires les sept jalons
du pilote et la date d’expiration. Une ancienne enveloppe v1 est rejetée avec
un message de version explicite : aucune compatibilité trompeuse n’est promise
avant publication.

Le moteur `business-software-need-decision.ts` applique l’ordre :

1. `SECURISER_D_ABORD` ;
2. `INCOMPLET` — avec liste distincte des champs invalides et des preuves manquantes ;
3. `OBSERVER` ;
4. `CORRIGER_STANDARDISER` ;
5. `COMPARER_PILOTER` ;
6. `DECISION_HUMAINE`.

Il n’existe aucun score compensable. Les sorties à examiner sont :

- sécuriser ;
- corriger ou standardiser ;
- intégrer ou automatiser ;
- acheter et configurer ;
- étudier une fonction sur mesure ;
- observer.

La page explique aussi explicitement la simplification du processus et le prototype low-code/no-code, soit huit réponses pédagogiques.

### Invariants

- `null` et `ND` signifient inconnu, jamais zéro ;
- un incident actif, une restauration non prouvée, des privilèges non maîtrisés ou l’absence de mode dégradé déclenchent un STOP ;
- trois situations sont une heuristique de travail, pas un seuil ;
- un seul événement rare critique peut suffire à sécuriser ;
- les mêmes cas sont rejoués dans chaque option ;
- une déclaration éditeur n’est pas une preuve de test ;
- le temps actif, la correction et l’attente restent séparés ;
- capacité réaffectable, économie de trésorerie, encaissement retardé et marge perdue ne sont pas confondus ;
- un coût ou une sortie inconnu bloque le TCO 12/36/60 ;
- aucune option n’est classée automatiquement ;
- l’export final exige données réelles, huit preuves vérifiées, responsables, revue et confirmation humaines ;
- le web et le classeur exigent tous deux sept portes de pilote, dont les suivis datés exactement à +30 et +90 après J26–J30 ;
- la décision possède une date d’expiration future qui ne précède pas le suivi +90.

## 5. Contenu livré

La page comporte :

- une réponse immédiate et huit voies non hiérarchiques ;
- 16 chapitres ;
- 14 portes « preuve attendue / STOP / conséquence » ;
- au moins 10 tableaux de trois colonnes ;
- 10 FAQ ;
- une baseline normale, tendue et rare critique ;
- un exemple chiffré séparant 72 h de travail et 324 h d’attente ;
- règles métier, exceptions, arbitres et version ;
- carte des données, identifiants, journaux, rejeu et export ;
- fit-gap standard / ERP ;
- gouvernance low-code/no-code ;
- TCO 12/36/60 et sensibilité ;
- pilote J1–J30, puis suivis +30 et +90 après le pilote ;
- accès, données personnelles, RTO/RPO, accessibilité et exploitation ;
- migration, rollback, double fonctionnement et sortie réimportée ;
- un CTA éditorial unique, sans présumer d’un développement.

Le gabarit conserve `GuideLayout`, l’alignement à gauche et désactive CTA latéral et téléphone.

## 6. Outil web

`BusinessSoftwareNeedDossier.tsx` :

- reste local et déterministe, sans appel réseau ;
- livre un exemple fictif explicitement marqué ;
- saisit trois situations, quatre portes de sécurité, huit domaines de preuve et deux à six options avec TCO ;
- exige pour chaque situation et option une confirmation distincte du remplacement de la fixture ;
- documente sept jalons de pilote avec cas, baseline, critères STOP/continuer, rollback, responsable, date et confirmation distincte ;
- vérifie la chronologie J1–J30, les décalages calendaires exacts +30/+90 et l’expiration ;
- exige pour chaque preuve un statut, une référence expurgée, un responsable et une date ;
- annualise le travail actif + correction séparément de l’attente ;
- bloque le TCO si coût, périmètre ou cas critique restent inconnus ;
- exporte un CSV complet neutralisant les préfixes de formule et un JSON versionné réimportable ;
- copie une note de travail ;
- verrouille la note finale ;
- étiquette chaque contrôle et annonce le résultat dans une zone `aria-live` ;
- ne demande aucun secret.

## 7. Classeur

Artefact : `public/ressources/kit-diagnostic-besoin-logiciel-metier.xlsx`

Onglets :

1. `00_MODE_EMPLOI`
2. `01_DOSSIER`
3. `02_SITUATIONS`
4. `03_BASELINE`
5. `04_REGLES_EXCEPTIONS`
6. `05_OPTIONS_TESTS`
7. `06_TCO_12_36_60`
8. `07_RISQUES_STOP`
9. `08_PILOTE`
10. `09_DECISION`
11. `10_DICTIONNAIRE`
12. `11_CONTROLES`
13. `12_SOURCES`

Le classeur est généré avec `@oai/artifact-tool`. Il contient 97 formules gouvernées, dont 24 contrôles vivants, des validations, filtres et volets figés. Le scénario livré reste `INCOMPLET / BLOQUE` parce qu’il est fictif et qu’un TCO standard conserve une sortie inconnue.

Validation locale :

- copie de travail et copie publique identiques ;
- 13 feuilles et 13 tableaux ;
- 26 sources et 8 preuves ;
- 12 mutations ;
- 96 scénarios adversariaux, dont un scénario réel complet, la suppression et le faux décalage des suivis +30/+90, une date au-delà du maximum Excel, les routes globales `OBSERVER` / `CORRIGER_STANDARDISER` et des régressions fail-closed ;
- 97 sabotages de formules détectés ;
- 205 scénarios au total ;
- aucune macro, liaison externe, erreur de formule ou candidat secret ;
- 13 rendus PNG.

Limite : aucune recalculation par Microsoft Excel réel n’a été effectuée. La validation repose sur le moteur du classeur importé, l’OOXML et les rendus locaux.

## 8. Frontière de publication

Le travail constitue un **brouillon premium local**. Il ne prouve ni commit, ni push, ni déploiement, ni publication, ni indexation. Le statut public éventuel doit être contrôlé séparément sur la route servie et l’environnement de production.
