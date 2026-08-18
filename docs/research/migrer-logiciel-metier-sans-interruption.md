# Dossier de recherche — Migrer un logiciel métier sans interrompre l’activité

> Ce dossier a préparé une première version du guide le 22 juillet 2026. Le
> giga-audit du 24 juillet a invalidé ses anciennes portes P1 à P4 : elles sont
> conservées plus bas comme historique, mais ne qualifient pas la nouvelle
> version. La recherche a été rouverte sur les écritures concurrentes, le
> rapprochement, la réversibilité, les objectifs de continuité et le TCO.

Statut actuel : **P3 indépendante PASS à 99/100 et contre-lecture P4 simulée
GO éditorial local à 97/100, avec P0 = 0, P1 = 0 et P2 = 0 sur le contenu
courant. Le BAT navigateur réel, le test par un dirigeant externe, le manifeste
final, la production et l’indexation restent non prouvés**.

## Journal courant des quatre passes

| Passe                        | État actuel                               | Date       | Preuve ou blocage                                                                                                                                                                            |
| ---------------------------- | ----------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Recherche                 | Rouverte et approfondie                   | 2026-07-24 | Corpus international, matrice des 12 P1 et hypothèses Nova documentés dans l’[audit approfondi](../audits/giga-audit-2026-07-24/guides/migrer-logiciel-metier-sans-interruption.md).         |
| 2. Rédaction et intégration  | Stabilisée, contrôles locaux réussis      | 2026-07-24 | Page, kit vierge + exemple, ZIP exact, métadonnées prudentes et tests spécifiques ; aucun verdict auto-attribué.                                                                             |
| 3. Contre-audit indépendant  | PASS — 99/100, P0/P1/P2 = 0               | 2026-07-24 | Premier NO-GO à 82/100, corrections, PASS à 98/100, réouverture P4 puis revalidation complète et delta final sur le snapshot `53828440…`.                                                    |
| 4. Plume humaine et contrôle | GO éditorial local — 97/100, P0/P1/P2 = 0 | 2026-07-24 | Première P4 simulée NO-GO à 87/100, corrections, contre-lecture à 96/100 puis fermeture des deux P2. BAT navigateur, dirigeant externe, manifeste, production et indexation restent séparés. |

## Journal historique du 22 juillet — invalidé par le giga-audit

Propriétaire éditorial unique : **agent racine Codex**.

| Passe                        | État                     | Date       | Responsable                          | Snapshot                                                       | Blocages |
| ---------------------------- | ------------------------ | ---------- | ------------------------------------ | -------------------------------------------------------------- | -------- |
| 1. Recherche                 | Terminée — porte validée | 2026-07-22 | Recherche officielle et agent racine | `manifests/migrer-logiciel-metier-sans-interruption-p1.sha256` | Aucun    |
| 2. Rédaction et intégration  | Terminée — porte validée | 2026-07-22 | Agent racine Codex                   | `manifests/migrer-logiciel-metier-sans-interruption-p2.sha256` | Aucun    |
| 3. Contre-audit indépendant  | Terminée — porte validée | 2026-07-22 | Agent distinct puis agent racine     | `manifests/migrer-logiciel-metier-sans-interruption-p3.sha256` | Aucun    |
| 4. Plume humaine et contrôle | Terminée localement      | 2026-07-22 | Agent racine Codex                   | `manifests/migrer-logiciel-metier-sans-interruption-p4.sha256` | Gel lot  |

## 1. Fiche d’identité

| Champ                            | Décision documentaire                                                                                                                                                                                           |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Slug                             | `migrer-logiciel-metier-sans-interruption`                                                                                                                                                                      |
| Requête principale qualitative   | migrer un logiciel métier sans interruption                                                                                                                                                                     |
| Moment du parcours               | Une entreprise a choisi de changer ou de reconstruire son logiciel et doit organiser la transition                                                                                                              |
| Lecteur précis                   | Dirigeant ou responsable d’une PME dont les commandes, interventions, stocks, contrats ou factures dépendent d’un logiciel utilisé chaque jour                                                                  |
| Situation déclenchante           | Le nouvel outil avance, mais personne ne peut encore expliquer précisément comment passer de l’ancien au nouveau sans perdre les opérations en cours                                                            |
| Phrase qu’il dirait au téléphone | « Nous devons changer de logiciel, mais nous ne pouvons pas arrêter l’entreprise. Comment préparer la bascule et savoir si nous pouvons vraiment y aller ? »                                                    |
| Décision principale              | Continuer la préparation, migrer par lots, maintenir temporairement les deux outils, repousser la bascule ou revenir à l’ancien système selon des contrôles écrits                                              |
| Niveau de connaissance initial   | Le lecteur connaît le travail de son entreprise, mais pas nécessairement les termes de migration de données                                                                                                     |
| Action autonome                  | Écrire les trois opérations qui ne peuvent pas s’arrêter, la perte de données tolérable et les critères qui imposeraient de revenir à l’ancien outil                                                            |
| Bon fit Hagnéré Code             | Logiciel métier important, règles stables, données récupérables, responsables métier disponibles et besoin d’un plan de migration vérifiable                                                                    |
| Mauvais fit                      | Incident cyber actif, litige sur les accès, absence de sauvegarde exploitable, données dont la légalité ou la qualité n’est pas clarifiée, ou nouveau logiciel encore incapable de traiter le travail principal |
| Hors périmètre                   | Choix initial du nouveau logiciel, reprise d’un code abandonné, plan de réponse à une cyberattaque, conseil juridique individualisé, promesse de continuité absolue                                             |
| Date et mode de recherche        | 22 juillet 2026 ; SERP française qualitative, sources primaires CNIL et ANSSI ; aucun volume Keyword Planner ou Search Console disponible                                                                       |

### Questions indispensables

1. Une migration sans aucune interruption est-elle réellement possible ?
2. Quelles opérations et quelles données faut-il protéger en premier ?
3. Quand préférer une migration par lots, une période parallèle ou une seule bascule ?
4. Que doit prouver une répétition générale avant le jour prévu ?
5. Quels contrôles décident de continuer ou de revenir à l’ancien logiciel ?
6. Comment éviter que les deux outils deviennent chacun une version différente de la vérité ?
7. Quand fermer l’ancien logiciel et que conserver en lecture seule ?

### Score de lancement

La note priorise le sujet. Elle ne prédit ni trafic, ni classement, ni ventes.

| Critère                          |       Note | Justification                                                                                                                                                    |
| -------------------------------- | ---------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Adéquation avec une offre vendue |      25/25 | Mission directement reliée aux outils internes, aux applications métier et à leur maintenance                                                                    |
| Proximité d’une demande de devis |      25/25 | Le lecteur prépare une opération risquée avec un logiciel déjà choisi ou en cours de construction                                                                |
| Preuve qualitative de demande    |      12/15 | La SERP française actuelle présente surtout des éditeurs et intégrateurs parlant de reprise de données, tests et bascule ; aucun volume propriétaire n’est connu |
| Preuve ou outil original         |      15/15 | Chronologie J-30, J-7, J0 et J+7, critères `continuer / revenir`, fiche de contrôle des données                                                                  |
| Différenciation                  |       9/10 | Le guide traite l’exécution de la bascule, pas le diagnostic de reprise ni le choix d’un nouvel outil                                                            |
| Maillage et CTA utile            |      10/10 | Prolongement naturel des guides reprise, Excel, Access, cahier des charges et contrat TMA                                                                        |
| **Total**                        | **96/100** | Sujet maintenu sans promesse de demande ou de résultat commercial                                                                                                |

## 1 bis. Contrat de langage humain

**Réponse attendue en une phrase :** ne remplacez pas l’ancien logiciel le jour
où le nouveau semble terminé ; répétez toute la bascule, contrôlez les données
et le travail réel, puis écrivez avant le jour J les conditions qui autorisent
la mise en service ou imposent un retour temporaire à l’ancien outil.

**Terme central :** la bascule est le moment où l’entreprise cesse d’enregistrer
une partie ou la totalité de son activité dans l’ancien logiciel et commence à
la saisir dans le nouveau. Une migration comprend aussi la préparation, la
copie des données, les vérifications et la période de surveillance qui suit.

**Mots ordinaires à privilégier :** ancien logiciel, nouveau logiciel,
commandes en cours, clients, factures, planning, stock, copie, dernière mise à
jour, essai complet, retour à l’ancien outil, personne responsable, heure de
décision.

**Mots à traduire ou éviter à l’ouverture :** cutover, rollback, go/no-go,
runbook, delta, RPO, RTO, mapping, ETL, recette, hypercare, architecture cible.

### Projet des 150 premiers mots

Le lecteur doit reconnaître son risque : commandes, interventions ou factures
ne peuvent pas attendre que le nouveau logiciel soit réparé. L’ouverture répond
immédiatement qu’une continuité absolue ne se promet pas ; elle s’organise avec
une période choisie, un travail manuel de secours, un essai complet et une
décision de retour. Le guide annonce ensuite ce qu’il faut préparer avant,
pendant et après la bascule.

### Test sujet, action, résultat préparé pour P4

| Formulation abstraite à bannir | Qui agit ?                       | Action concrète                                               | Résultat attendu                                 | Formulation humaine prévue                                                                        |
| ------------------------------ | -------------------------------- | ------------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| Définir la criticité           | La direction et les utilisateurs | Nomment les trois opérations qui ne peuvent pas attendre      | L’ordre des tests devient clair                  | « Écrivez ce que l’entreprise doit encore pouvoir faire lundi matin. »                            |
| Valider le mapping             | Le responsable des données       | Compare chaque information avant et après la copie            | Les champs manquants ou transformés sont repérés | « Prenez dix dossiers connus et vérifiez chaque information dans le nouveau logiciel. »           |
| Préparer le rollback           | Le responsable de la bascule     | Décide quand arrêter et comment reprendre dans l’ancien outil | L’équipe ne discute pas sous pression            | « Écrivez avant le jour J ce qui vous fera revenir à l’ancien logiciel. »                         |
| Organiser le mode dégradé      | Le responsable métier            | Prépare un moyen temporaire de noter le travail               | Les opérations urgentes restent rattrapables     | « Si le logiciel est indisponible deux heures, où notez-vous une commande ou une intervention ? » |
| Faire une recette              | Les utilisateurs concernés       | Rejouent des opérations ordinaires et difficiles              | Le nouvel outil est jugé sur le travail réel     | « Faites créer, modifier puis terminer un dossier du début à la fin. »                            |

## 2. Frontières et anti-cannibalisation

| Page voisine                                 | Intention détenue                                                                   | Différence du nouveau guide                                                                                    | Lien prévu                                   |
| -------------------------------------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| `reprendre-logiciel-metier-existant`         | Savoir si une nouvelle équipe peut reprendre le code, les données et l’exploitation | Ici, le nouvel outil ou la nouvelle version existe déjà ; le sujet est le passage en production                | Lien entrant depuis la stratégie « migrer »  |
| `transformer-excel-en-application`           | Décider si un fichier doit être conservé, fiabilisé ou remplacé                     | Ici, la décision de remplacement est déjà prise et plusieurs données vivantes doivent passer au nouvel outil   | Lien sortant si Excel est la source actuelle |
| `remplacer-microsoft-access-application-web` | Choisir une trajectoire pour sortir d’Access                                        | Le présent guide prend en charge la dernière partie : répéter et exécuter la bascule                           | Lien entrant depuis le plan de migration     |
| `contrat-tma-application`                    | Écrire les responsabilités d’entretien et de correction après livraison             | Ici, on décide qui agit pendant la transition et quand l’ancien système peut être fermé                        | Lien sortant vers la continuité après J+7    |
| `refonte-sans-perdre-son-seo`                | Préserver pages et référencement pendant une refonte de site                        | Le présent guide traite les opérations et données d’une application métier, pas les URL ou le trafic organique | Aucun développement SEO dans cette page      |
| `/services/outils-internes-sur-mesure`       | Présenter l’offre transactionnelle de développement                                 | Le guide doit pouvoir conclure à un report, une migration par lots ou une solution standard                    | CTA après la décision autonome               |

**Justification d’une URL distincte :** aucun guide actuel ne décrit la
répétition complète, la dernière copie des données, les critères de décision du
jour J et le retour temporaire à l’ancien logiciel.

## 3. Demande et vocabulaire observés

La SERP française consultée le 22 juillet 2026 est dominée par des pages
d’éditeurs et d’intégrateurs. Elles parlent surtout de reprise de données,
nettoyage, import, tests, formation et accompagnement au démarrage. Plusieurs
promettent « sans interruption » ou « zéro perte » sans rendre publics les
critères qui permettraient au lecteur de contrôler ces promesses.

Cette observation sert uniquement à confirmer le vocabulaire et l’angle. Elle
ne prouve ni la qualité d’un prestataire, ni une méthode universelle, ni un
volume de recherche.

Questions qualitatives retenues :

- comment changer de logiciel sans arrêter l’activité ;
- comment reprendre les données de l’ancien logiciel ;
- faut-il utiliser les deux logiciels en parallèle ;
- comment tester une migration avant la mise en service ;
- que faire si la bascule échoue ;
- quand fermer l’ancien logiciel.

## 4. Fiche de preuves

| Affirmation utilisable                                                                                                                                                                   | Source primaire                                                                                                                                                                                         | Nature et limite                                                                                                      | Conséquence lecteur                                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Une stratégie de sauvegarde doit partir de la perte de données et de la durée d’interruption que l’activité peut accepter                                                                | [ANSSI — Sauvegarde des systèmes d’information, version 1.1 du 27 novembre 2025](https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf), p. 4 | Recommandations de sécurité à adapter au système ; ce n’est pas un délai universel de migration                       | Écrire ce que l’entreprise accepte de ressaisir et combien de temps elle peut fonctionner autrement                                           |
| Les sauvegardes doivent être testées et une procédure de restauration doit être réellement mise en œuvre                                                                                 | [ANSSI, même guide](https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf), recommandations R22 et R23                                        | Porte sur la sauvegarde et la restauration, pas sur la conformité fonctionnelle du nouveau logiciel                   | Restaurer une copie et vérifier l’ordre des dépendances avant toute répétition de bascule                                                     |
| La présence d’une sauvegarde ne suffit pas : son intégrité et la capacité à la restaurer doivent être contrôlées                                                                         | [CNIL — Sécurité : sauvegarder, 14 mars 2024](https://www.cnil.fr/fr/securite-sauvegarder)                                                                                                              | Précautions de sécurité pour les données ; la fréquence dépend du risque                                              | Refuser un simple voyant vert comme preuve que le retour est possible                                                                         |
| Un plan de continuité doit prévoir les personnes responsables, les alertes, un fonctionnement dégradé, les sauvegardes et des tests réguliers                                            | [CNIL — Prévoir la continuité et la reprise d’activité, version consultée le 22 juillet 2026](https://www.cnil.fr/fr/securite-prevoir-la-continuite-et-la-reprise-dactivite)                            | Recommandations de sécurité, à adapter à l’entreprise                                                                 | Nommer le décideur, le responsable des données et le responsable des utilisateurs avant J0                                                    |
| Une migration doit impliquer tôt les équipes métier, garder un inventaire à jour jusqu’au retrait de l’ancienne solution, adapter la continuité et tester les procédures avant lancement | [ANSSI — Sécuriser une migration numérique, version 1.0 de janvier 2026](https://messervices.cyber.gouv.fr/documents-guides/anssi_essentiels_migration_1.0.pdf)                                         | Fiche de bonnes pratiques de sécurité ; elle ne remplace ni la validation fonctionnelle ni l’analyse propre au projet | Faire participer les utilisateurs, éviter les changements importants pendant la phase critique et fermer l’ancien système après les contrôles |
| La sécurité des données personnelles doit être adaptée au contexte et au risque, y compris pendant les développements, échanges, sous-traitance et fin de vie                            | [CNIL — Guide pratique RGPD, version 2024 mise à jour 2026](https://www.cnil.fr/sites/default/files/2026-05/cnil_guide_securite_personnelle.pdf)                                                        | Guide général ; ne remplace pas une analyse juridique ou sectorielle                                                  | Utiliser des données fictives ou protégées pour les essais, limiter les accès et prévoir restitution/destruction adaptées                     |

### Faits, déductions et recommandations

- **Fait vérifié :** ANSSI et CNIL demandent de ne pas confondre existence
  d’une sauvegarde et restauration réellement testée.
- **Fait vérifié :** les objectifs de perte de données et de durée
  d’interruption partent des besoins métier et doivent être adaptés au système.
- **Fait vérifié :** la fiche ANSSI de janvier 2026 consacrée aux migrations
  demande d’impliquer les métiers, de tester les procédures avant le lancement
  et de maintenir l’inventaire jusqu’au retrait de l’ancienne solution.
- **Déduction éditoriale :** ces deux questions fournissent au dirigeant de
  meilleurs critères que la promesse générale « aucune interruption ».
- **Recommandation Hagnéré Code :** répéter toute la séquence de bascule avec
  un jeu de données autorisé, chronométrer les étapes et conserver les écarts.
- **Recommandation Hagnéré Code :** écrire les conditions de retour avant le
  jour J et donner à une seule personne l’autorité de décider.
- **Recommandation Hagnéré Code :** si deux logiciels coexistent, désigner pour
  chaque information lequel reste la référence et comment l’autre est mis à
  jour ; une double saisie indéfinie n’est pas une stratégie de migration.

### Contradictions et informations à ne pas publier

- aucune promesse de « zéro interruption », « zéro perte » ou migration sans
  risque ;
- aucune durée universelle de J-30, J-7 ou J+7 : ces repères organisent le
  guide, ils ne constituent pas un calendrier contractuel ;
- aucun pourcentage moyen d’échec des migrations sans étude primaire adaptée ;
- aucun volume maximal de données ou seuil d’utilisateurs universel ;
- aucune équivalence entre sauvegarde, réplication, archive légale et plan de
  retour ;
- aucune obligation générale de faire fonctionner deux logiciels en parallèle ;
- aucune recommandation de conserver toutes les anciennes données sans durée
  ni finalité ;
- aucune certification RGPD ou de sécurité issue de la checklist ;
- aucun test direct sur la production avant copie, sauvegarde et autorisation.

## 5. Exemple illustratif fictif et calculs reproductibles

Le guide utilisera une entreprise fictive de maintenance avec trois opérations
qui ne peuvent pas s’arrêter : planifier une intervention, clôturer le travail
du technicien et transmettre les éléments à la facturation.

Données fictives de la répétition :

- 12 480 fiches client ;
- 8 640 interventions terminées conservées dans l’historique ;
- 420 interventions encore ouvertes ;
- 30 factures échantillonnées pour comparer client, montant et statut ;
- 10 utilisateurs représentant les principaux droits ;
- fenêtre de bascule décidée par l’entreprise : 6 heures ;
- copie complète chronométrée : 3 h 20 ;
- contrôles chronométrés : 1 h 10 ;
- marge restante dans la fenêtre : `6 h − 3 h 20 − 1 h 10 = 1 h 30`.

Critères fictifs pour continuer :

1. les 420 interventions ouvertes sont présentes et rattachées au bon client ;
2. les 30 factures de contrôle conservent les montants et statuts attendus ;
3. les 10 utilisateurs peuvent effectuer leur opération principale avec les
   droits prévus ;
4. la copie et les contrôles tiennent dans la fenêtre de 6 heures ;
5. aucune information n’a été saisie simultanément dans deux sources non
   rapprochées.

Le scénario montrera un retour volontaire à l’ancien outil parce que certaines
des 420 interventions ouvertes sont rattachées au mauvais client : ce contrôle
figure explicitement dans le premier critère. Ce retour n’est pas présenté
comme un échec du projet ; il prouve que la décision prévue avant J0 fonctionne.

Ces nombres n’appartiennent à aucun client et ne sont ni des normes, ni des
estimations commerciales. Le lecteur doit remplacer chaque valeur et chaque
seuil par ceux de son entreprise.

## 6. Empreinte éditoriale à ne pas reproduire

| Guide voisin                                 | Ouverture                                              | Progression                                            | Dispositif à ne pas copier                             |
| -------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `reprendre-logiciel-metier-existant`         | Une nouvelle équipe doit remettre le logiciel en route | Accès, sauvegardes, métier, stabiliser/migrer/réécrire | Les « premières 48 heures » et l’inventaire de reprise |
| `transformer-excel-en-application`           | Un classeur devenu fragile doit-il être remplacé ?     | Diagnostic puis quatre solutions                       | Score de fragilité du fichier                          |
| `remplacer-microsoft-access-application-web` | Une base Access limite le travail                      | Inventaire puis trajectoires de remplacement           | Catalogue des tables, formulaires et macros            |
| `contrat-tma-application`                    | Que doit prévoir le contrat avant une panne ?          | Incidents, délais, prix, sortie                        | Lecture clause par clause du contrat                   |

**Tension motrice :** le nouveau logiciel semble prêt, mais personne n’a encore
prouvé que les opérations en cours, les dernières données et le retour à
l’ancien outil peuvent être maîtrisés dans la même séquence.

**Progression propre :** lundi matin → trois décisions de migration → J-30 →
J-7 → J0 → retour possible → J+1/J+7 → fermeture raisonnée.

**Artefact signature :** une feuille de bascule avec une heure, un responsable,
une preuve attendue et une décision pour chaque étape.

## 7. Plan annoté

| Section provisoire                                 | Question résolue                                                          | Preuve ou exemple                                                    | Conséquence                                             | Format                         |
| -------------------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------- | ------------------------------ |
| Lundi matin, que doit encore faire l’entreprise ?  | Quel résultat protéger ?                                                  | Trois opérations non négociables et fonctionnement temporaire        | Éviter une migration centrée sur la technique           | Scène et liste courte          |
| Choisir la forme de migration                      | Tout changer, procéder par lots ou maintenir temporairement deux outils ? | Données, dépendances, fréquence des changements                      | Choisir l’option la moins risquée qui reste exploitable | Trois cartes comparatives      |
| J-30 : préparer les données et les responsabilités | Que faut-il décider tôt ?                                                 | migrer, archiver, abandonner ; responsables nommés                   | Construire le dossier de bascule                        | Tableau 3 colonnes             |
| J-7 : répéter toute la journée                     | Qu’est-ce qu’un vrai essai ?                                              | copie, dernière mise à jour, opérations, droits, temps               | Corriger ou repousser avant J0                          | Chronologie                    |
| J0 : exécuter sans improviser                      | Qui fait quoi et quand ?                                                  | feuille heure/responsable/preuve/décision                            | Une seule décision de continuer ou revenir              | Checklist ordonnée             |
| Revenir à l’ancien logiciel                        | Quand faut-il arrêter ?                                                   | critères écrits et rapprochement des nouvelles saisies               | Protéger l’activité au lieu de sauver la date           | Encadré décisionnel            |
| Exemple illustratif fictif                         | Comment contrôler sans score opaque ?                                     | 420 dossiers ouverts, 30 factures, 10 utilisateurs et fenêtre de 6 h | Refaire les calculs avec ses données                    | Cas chiffré                    |
| J+1 à J+7                                          | Que surveiller après la mise en service ?                                 | erreurs, demandes utilisateurs, données non rapprochées              | Corriger puis décider de fermer l’ancien outil          | Journal de suivi               |
| Fermer, archiver ou garder en lecture seule        | Quand l’ancien logiciel cesse-t-il d’être nécessaire ?                    | besoins métier, obligations adaptées, accès et export                | Éviter suppression précoce et double système permanent  | Comparaison courte             |
| Sources et limites                                 | Que prouvent réellement les sources ?                                     | CNIL et ANSSI                                                        | Revalidation future                                     | Notes proches des affirmations |

## 8. Ressource, conversion et maillage — décision révisée

La conclusion historique selon laquelle une ressource séparée n’était pas
nécessaire est annulée. La P2 du 24 juillet fournit un kit public sans formulaire
commercial :

- inventaire des dépendances, vierge et exemple ;
- mapping des données, vierge et exemple ;
- contrat de source d’écriture par domaine, population et période ;
- journal des lots, rejets, correction et rejeu ;
- rapprochement des volumes, sommes, relations, droits et écritures récentes ;
- RPO, RTO et MTD testables par opération ;
- matrice de tests ;
- runbook avec rollback, roll-forward et point irréversible ;
- critères stop/go ;
- registre des copies, accès, prestataires, comptes et purge ;
- journal d’hypercare avec staffing et critère de sortie ;
- TCO à 12, 36 et 60 mois avec unités et formules ;
- relevé de décision vierge et exemple Nova rempli.

Les paragraphes historiques suivants décrivent la décision du 22 juillet et ne
doivent plus être utilisés pour qualifier la version courante.

Une ressource téléchargeable séparée n’est pas nécessaire. La feuille de
bascule sera entièrement visible et copiable dans l’article. Elle contient :

- l’heure prévue ;
- la personne responsable ;
- l’action à effectuer ;
- la preuve à conserver ;
- la condition pour continuer ;
- la condition pour revenir temporairement à l’ancien outil.

**Action sans contact :** remplir d’abord trois lignes : opération impossible à
arrêter, temps d’interruption acceptable et perte de données acceptable.

**Conclusion « ne pas investir » possible :** oui. Si le nouvel outil ne
réussit pas encore les opérations principales ou si une copie restaurable
n’existe pas, le bon choix est de repousser la bascule et de sécuriser
l’existant.

**CTA envisagé :** « Faire relire mon plan de migration » vers
`/demarrer-un-projet`, après les critères de décision. Le formulaire demande le
logiciel actuel, le nouveau, les opérations critiques, la fenêtre envisagée et
les inconnues. Une personne qui développe examine directement la demande et
cherche à répondre le jour ouvré qui suit, sans garantir ce délai. La première
orientation est gratuite et sans engagement ; elle peut recommander un report.

**Maillage sortant :** `reprendre-logiciel-metier-existant`,
`transformer-excel-en-application`, `contrat-tma-application`,
`cahier-des-charges-application-metier`, `/services/outils-internes-sur-mesure`.

**Maillage entrant prévu :** un lien contextuel depuis la stratégie « migrer »
de `reprendre-logiciel-metier-existant` et, si utile sans répétition, depuis le
plan de sortie de `remplacer-microsoft-access-application-web`.

## 9. Porte de sortie P1

- [x] lecteur, situation et décision unique définis ;
- [x] score supérieur à 70 documenté sans volume inventé ;
- [x] URL distincte justifiée ;
- [x] recherche qualitative actuelle et limites explicites ;
- [x] sources primaires vérifiées et destinées à être placées près des faits ;
- [x] faits, déductions et recommandations séparés ;
- [x] cas fictif cohérent et recalculable ;
- [x] plan distinct des guides voisins ;
- [x] action autonome, bon fit et mauvais fit définis ;
- [x] journal passé à `Terminée — porte validée` ;
- [x] manifeste P1 créé et relu.

## 10. Rapports de sortie

> **Historique invalidé.** Les rapports P1 à P4 et la scorecard qui suivent
> décrivent uniquement la version du 22 juillet 2026. Ils ne qualifient ni la
> page ni le kit réécrits le 24 juillet. Le journal courant et la réouverture
> située après la décision de gel sont les seules références applicables au
> snapshot actuel.

### Rapport P1 — Recherche historique du 22 juillet

```text
PASSE 1 TERMINÉE
Slug : migrer-logiciel-metier-sans-interruption
Lecteur et phrase réelle : dirigeant dont l’activité dépend d’un logiciel et
qui veut changer sans perdre les opérations en cours ; formulation de travail
issue de la SERP, pas d’un entretien réel.
Décision : migrer par lots, organiser une période parallèle, exécuter une seule
bascule, repousser ou revenir selon des contrôles écrits.
Angle et forme dominante : chronologie J-30/J-7/J0/J+7 et feuille de bascule
heure/responsable/preuve/décision.
Pages proches et différence : le guide de reprise diagnostique l’existant ;
Excel et Access choisissent une trajectoire ; ce guide exécute la transition.
Sources décisives : ANSSI sauvegarde v1.1 du 27 novembre 2025 ; CNIL sauvegarde,
continuité et guide pratique mis à jour en 2026, vérifiés le 22 juillet 2026.
Incertitudes exclues : zéro interruption, taux d’échec, durée universelle,
seuil d’utilisateurs et conformité issue d’une checklist.
Action autonome et CTA possible : écrire les opérations critiques et critères
de retour ; CTA de relecture après cette décision, avec report possible.
Plan : résultat métier, forme de migration, J-30, J-7, J0, retour, cas fictif,
J+1/J+7, fermeture et sources.
Snapshot : manifests/migrer-logiciel-metier-sans-interruption-p1.sha256
```

### Rapport P2 — Rédaction historique du 22 juillet

```text
PASSE 2 TERMINÉE
Fichiers créés ou modifiés : page, image sociale, registre, lien entrant depuis
reprendre-logiciel-metier-existant, icône du hub, test de date et présent dossier.
Ouverture et réponse : le dirigeant reconnaît commandes, interventions, stocks
et factures avant la réponse ; répétition, critères de retour et report sont
annoncés dans les 150 premiers mots.
Forme propre au sujet : chronologie J-30/J-7/J0/J+7, feuille horaire et décision
continuer/revenir ; dix H2, trois tableaux mobiles et sept FAQ.
Exemple et calculs : cas explicitement fictif, ne décrivant aucun client ;
12 480 clients, 420 dossiers ouverts, fenêtre de 6 h et marge recalculable de
1 h 30. Le scénario se termine par un report lorsque le stock ne correspond pas.
Sources visibles : ANSSI sauvegarde v1.1, fiche ANSSI migration v1.0 de janvier
2026, et CNIL sauvegarde, continuité et guide pratique placés près des
affirmations qu’ils soutiennent.
Action autonome, bon fit et mauvais fit : trois opérations critiques, durée
acceptable et critères de retour ; attaque active et sauvegarde non restaurée
sortent du parcours ordinaire.
CTA et destination : un seul CTA après sept sections, vers
/demarrer-un-projet ; réponse visée le jour ouvré qui suit sans délai garanti,
gratuite et sans engagement, avec possibilité explicite de reporter.
Contrôles rapides : Prettier, ESLint ciblé, TypeScript et git diff --check
réussis ; tests guides, langage humain et données structurées 30/30 réussis
avec délai adapté à la taille du corpus.
Statut : ready-for-human-review, donc route accessible mais noindex et absente
du hub, du sitemap et de llms.txt.
Snapshot : manifests/migrer-logiciel-metier-sans-interruption-p2.sha256
```

### Rapport P3 — Contre-audit historique du 22 juillet

```text
PASSE 3 — PREMIER VERDICT : FAIL, 18/20
P0 : aucun.
P1 relevés : définir « bascule » dès sa première apparition ; ne pas laisser
« 1 répétition » contredire l’absence de nombre universel ; utiliser dans le
cas fictif un critère de retour annoncé ; intégrer la fiche ANSSI migration de
janvier 2026 ; limiter la formulation absolue « ne supprimez rien ».
Corrections appliquées : héros et ouverture en mots ordinaires avec définition
ponctuelle ; indicateur remplacé par « essai complet et reproductible » et
séquence à rejouer jusqu’à reproductibilité ; retour fictif déclenché par des
interventions ouvertes rattachées au mauvais client ; source ANSSI ajoutée près
de la préparation, du jour J et de la fermeture ; règle de conservation bornée
aux éléments nécessaires au retour.
P2 retenus : repères temporels explicitement indicatifs, « logiciel de
référence » à la place de « source officielle », bloc cyber déplacé après le
sommaire et titre J-7 rendu non prescriptif.
Relecture indépendante du nouveau snapshot : PASS, 20/20. Le second contrôle a
repéré deux reliquats dans le scénario fictif (« première condition » et
« stock »), tous deux corrigés. L’ultime contre-audit a rendu PASS sans réserve.
```

### Rapport P4 — Contrôle historique du 22 juillet

```text
PASSE 4 TERMINÉE LOCALEMENT
Passe humaine : ouverture centrée sur les commandes, interventions, factures et
responsabilités du dirigeant ; définition immédiate de la bascule ; chaque H2
répond à une question opérationnelle avant d'expliquer la méthode.
Responsive réel : contrôlé à 320, 390, 640, 768, 1 024 et 1 440 px ; aucun
débordement horizontal, aucune ancre absente, un seul H1 et uniquement les
JSON-LD Article et BreadcrumbList.
Contrôle visuel : ouverture et CTA mobiles inspectés, cartes lisibles jusqu'à
767 px, puis tableaux lisibles à partir de 768 px.
Contrôles techniques : Prettier, ESLint ciblé, TypeScript, tests éditoriaux et
git diff --check réussis.
Test réel : non. Le contrôle navigateur est automatisé et visuel ; il ne remplace
pas un entretien avec un dirigeant appartenant à la cible.
Décision de publication : autorisée explicitement par le commanditaire, mais
retenue jusqu'au gel commun des dix guides pour un déploiement atomique.
Snapshot : manifests/migrer-logiciel-metier-sans-interruption-p4.sha256
```

## 11. Scorecard historique du 22 juillet — invalidée

| Axe          |      Note | Motif à prouver dans la page                                              |
| ------------ | --------: | ------------------------------------------------------------------------- |
| Intention    |         2 | Situation et question du dirigeant répondue dès l’ouverture               |
| Décision     |         2 | Bascule, lots, parallèle, report et retour restent possibles              |
| Pédagogie    |         2 | Termes techniques traduits au moment utile                                |
| Profondeur   |         2 | Données, personnes, travail temporaire, tests et sortie de l’ancien outil |
| Preuve       |         2 | Sources CNIL et ANSSI près des affirmations sensibles                     |
| Comparaison  |         2 | Trois formes de migration comparées sur les mêmes contraintes             |
| Originalité  |         2 | Chronologie et feuille de bascule propres au sujet                        |
| Style        |         2 | Voix calme, phrases concrètes, aucun héroïsme technique                   |
| Conversion   |         2 | Action autonome puis CTA pouvant conclure au report                       |
| SEO/produit  |         2 | URL distincte, maillage entrant et métadonnées à contrôler                |
| **Total P3** | **20/20** | Contre-audit indépendant validé ; P4 et navigateur exécutés ensuite       |

## Décision de gel commun — 22 juillet 2026

Les mentions précédentes de publication différée décrivent l’état de contrôle
avant le gel atomique des dix guides.

Statut éditorial final : **publiable — validation éditoriale déléguée**.

Décision de publication : autorisée explicitement par le commanditaire.

Test réalisé par une personne réelle : non.

Le retrait du statut d’attente ouvre la route à `index, follow` dans un build de
production. Il ne prouve ni le déploiement final ni l’indexation effective par
Google, qui doivent être vérifiés séparément.

---

## Réouverture du 24 juillet 2026 — spécification de la nouvelle P2

Cette section remplace les verdicts éditoriaux historiques pour la version
courante. Elle ne constitue pas un contre-audit P3.

### Cas commun canonique

Nova Maintenance est une entreprise entièrement fictive :

- 40 utilisateurs ;
- 2 400 clients uniques dans la cible ; l’exemple de lot lit 2 420 lignes
  source, dont 20 doublons approuvés ;
- 8 000 dossiers historiques ;
- 300 dossiers ouverts ;
- 220 factures mensuelles ;
- 5 intégrations ;
- 10 rôles ;
- 50 écritures pendant la dernière heure ;
- une fenêtre de 6 heures ;
- un coût interne chargé fictif de 55 €/h.

La porte A dure `3 h 20 + 1 h 10 + 1 h 45 = 6 h 15` et donne quatre motifs
indépendants de STOP : retour hors fenêtre, relation dossier-client à 299/300,
un rejet sans responsable et TST-002 en échec. Entre A et B, l’équipe attribue
le rejet, corrige la relation, exécute LOT-002-R1 puis LOT-002-R2 et précharge
les données. La porte B dure `20 min + 1 h 10 + 15 min + 45 min = 2 h 30`,
obtient 300/300 relations et zéro rejet non attribué. Elle reste STOP parce que
TST-002 échoue encore. Cette chronologie montre qu’un meilleur temps ne
compense pas une règle métier manquante.

### Traitement des douze P1

| P1 du giga-audit                          | Réponse intégrée en P2                                                                                                                                   | Preuve attendue du contre-audit                                           |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Inventaire des dépendances incomplet      | Matrice application, donnée, interface, automatisme, accès, équipement, contrat et sortie.                                                               | Chaque dépendance possède propriétaire, mode temporaire et preuve.        |
| Mapping et nettoyage trop légers          | Mapping champ source/cible, transformation, absence, doublon, rejet, approbation métier.                                                                 | Les 20 doublons, 10 rejets initiaux et statuts inconnus restent visibles. |
| Coexistence et double écriture ambiguës   | Par défaut, une source d’écriture par domaine, population et période ; une exception multi-écriture exige conflit, idempotence et rapprochement prouvés. | Les populations pilote et hors pilote sont séparées.                      |
| Synchronisation et rejeu absents          | Lot avec watermark composé, clé stable, accusés et test idempotent.                                                                                      | LOT-002, LOT-002-R1 et LOT-002-R2 expliquent correction puis rejeu.       |
| Rapprochement insuffisant                 | Volumes, sommes, répartitions, relations, pièces, droits et écritures récentes.                                                                          | Les 300 dossiers ne sont conformes qu’après le lot de correction.         |
| Stratégies non comparées à périmètre égal | Une décision temporaire de report, puis trois trajectoires exécutables au même résultat ; parallèle séparé comme mécanisme.                              | Même résultat métier et mêmes coûts cachés pour les trois trajectoires.   |
| RPO/RTO/MTD/SLA non expliqués             | Le RPO est un point ou une fenêtre temporelle de reprise, traduisible ensuite en écritures ; RTO, MTD et SLA restent distincts.                          | Le CSV distingue cible, test, mesure observée et décision.                |
| Tests trop généraux                       | Matrice métier, mapping, intégration, performance, droits, restauration, rejeu, retour et suppression.                                                   | TST-002 reste en échec dans l’exemple STOP.                               |
| Bascule non opérationnelle                | Runbook heure, durée, responsable, preuve, arrêt et action en cas d’échec.                                                                               | Une écriture post-bascule est conservée exactement une fois.              |
| Rollback incomplet                        | Retour séparé du roll-forward, journal des écritures post-bascule et point irréversible.                                                                 | La sauvegarde seule n’est jamais présentée comme un retour complet.       |
| Hypercare sans staffing ni sortie         | Couverture horaire, responsable, priorité, délai, contournement, preuve et critère de sortie.                                                            | Les modes temporaires et incidents critiques doivent être fermés.         |
| TCO absent                                | Trois trajectoires exécutables à 12/36/60 mois, unités, jours, cible, ancien contrat, archive et exercice de sortie.                                     | Totaux recalculés et sensibilités +6 000 € / +13 000 € exactes.           |

### TCO canonique

Hypothèses fictives communes : 650 €/jour projet ; 8 800 € de temps
utilisateurs (`40 × 4 h × 55 €`) ; 4 400 € d’hypercare
(`2 personnes × 40 h × 55 €`), soit 13 200 € au total ; cible à
3 000 €/mois ; ancien outil à 2 000 €/mois pendant la coexistence ; archive à
200 €/mois après fermeture et exercice de sortie à 12 000 € à 60 mois. Ces
13 200 € ne sont pas les six heures d’indisponibilité valorisées ailleurs.

Les jours projet se décomposent ainsi :

| Trajectoire           | Cadrage | Nettoyage/mapping | Intégrations | Tests/répétitions | Changement | Pilotage/sortie | Total |
| --------------------- | ------: | ----------------: | -----------: | ----------------: | ---------: | --------------: | ----: |
| Bascule en une fois   |      15 |                22 |           30 |                25 |         15 |              10 |   117 |
| Migration progressive |      18 |                28 |           38 |                30 |         20 |              12 |   146 |
| Remplacement ciblé    |      22 |                34 |           50 |                36 |         24 |              15 |   181 |

Cette ventilation reste une hypothèse éditoriale, jamais une durée de marché.

| Trajectoire                    | Jours | Coexistence ancien outil |   12 mois |   36 mois |   60 mois |
| ------------------------------ | ----: | -----------------------: | --------: | --------: | --------: |
| Bascule en une fois            |   117 |                   4 mois | 134 850 € | 211 650 € | 300 450 € |
| Migration progressive          |   146 |                   8 mois | 160 900 € | 237 700 € | 326 500 € |
| Remplacement ciblé / strangler |   181 |                  11 mois | 189 050 € | 265 850 € | 354 650 € |

La bascule complète possède ici un avantage construit de 26 050 € sur la
migration progressive et de 54 200 € sur le remplacement ciblé. L’exemple
calcule donc aussi les vrais seuils de renversement :

- 41 jours imprévus sur la bascule complète ajoutent
  `41 × 650 = 26 650 €` ; son TCO 12 mois atteint 161 500 € et dépasse la
  progressive de 600 € ;
- 11 h 51 d’indisponibilité supplémentaire pour 40 personnes à 55 €/h
  ajoutent 26 070 € de capacité interne et effacent l’écart de 26 050 € ;
- le remplacement ciblé doit créer ou préserver plus de 54 200 € de valeur
  face à la bascule complète pour gagner selon ces seules hypothèses.

Ces seuils n’estiment aucune probabilité d’incident. « Stabiliser et reporter »
reste une décision temporaire à chiffrer séparément, car elle n’atteint pas à
elle seule le même résultat à 60 mois.

### Frontières factuelles

- Les sources ANSSI et CNIL soutiennent l’inventaire, les objectifs métier,
  la restauration, la continuité, les accès et la fin de vie. Elles ne prouvent
  aucun chiffre Nova.
- Les documentations AWS, GOV.UK et UK Home Office décrivent des patterns
  techniques. Elles ne garantissent pas qu’un strangler, un blue-green ou un
  canary est adapté à une base ou à des écritures partagées.
- Le [NIST SP 800-34 Rev.1](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final)
  soutient l’usage de RPO/RTO dans un cadre de continuité ; il ne fixe aucune
  valeur Nova.
- [Microsoft Learn — duplicate detection](https://learn.microsoft.com/en-us/azure/service-bus-messaging/duplicate-detection)
  illustre l’identifiant stable et la détection de doublons. Le
  [NCSC — decommissioning assets](https://www.ncsc.gov.uk/guidance/decommissioning-assets)
  rappelle que les données de retour dépassent la seule base. Le rejeu exact
  des écritures post-bascule reste à prouver sur le système concerné.
- Le TCO et les durées sont des hypothèses pédagogiques recalculables, ni un
  devis ni un benchmark.
- Une attaque active, une intégrité contestée, un conflit d’accès ou une règle
  sectorielle sortent du conseil générique.

### Rapport P3 final du snapshot corrigé

```text
PASSE 3 INDÉPENDANTE — PASS, 99/100, P0/P1/P2 = 0
Lecteur : dirigeant de PME dont les opérations quotidiennes dépendent du
logiciel à remplacer.
Réponse immédiate : protéger les opérations, désigner par défaut une source
d’écriture, rapprocher les données et garder le temps de revenir.
Comparaison : le report temporaire est chiffré séparément ; migration
progressive, bascule complète et remplacement ciblé sont comparés au même
résultat.
Parallèle, blue-green et canary ne sont pas présentés comme solutions
automatiques aux conflits de données.
Cas : Nova Maintenance, chiffres canoniques ci-dessus, verdict STOP.
Décision chiffrée : répétitions A/B, RPO/RTO/MTD, seuils de rapprochement,
TCO 12/36/60 et sensibilités.
Ressource : kit public sans formulaire, fichiers vierges et exemples, relevé
Nova rempli.
Contrôles finaux : 6 199 mots / 31 min, 27 fichiers identiques dans le ZIP,
watermarks CEST/UTC, deux portes Nova et neuf totaux TCO recalculés.
Empreinte page : 53828440d73cfe6bd480f427325c86d896978cdca02e00dfeb821803c398ef56.
Empreinte test : 89a6c007ca46e668e58c34ba756f2310bd6c31efdfa0820e2b8a3e308714a1c9.
P4 simulée finale : GO éditorial local, 97/100, P0/P1/P2 = 0.
Réserves hors contenu : BAT navigateur réel, test dirigeant externe, manifeste
final, production et indexation.
```

### Vérification ciblée des téléchargements — 25 juillet 2026

Trois chemins CSV non déclarés ont été demandés au serveur local et ont répondu 404. La lecture indépendante a confirmé qu'ils n'existent ni dans la page, ni
dans son HTML, ni dans les tests, ni dans le kit : ce sont des URL de sonde,
pas des liens présentés au lecteur.

Les cinq ressources réellement proposées par la page ont toutes répondu 200
localement : ZIP, mode d'emploi, inventaire des dépendances, objectifs
RPO/RTO/MTD et décision stop/go. Le test spécialisé conserve la liste exacte
des 27 fichiers et leur égalité octet par octet avec l'archive.

Reçu :
[`migrer-logiciel-metier-sans-interruption-resource-links.md`](../audits/giga-audit-2026-07-24/reviews/migrer-logiciel-metier-sans-interruption-resource-links.md).
Ce contrôle ne vaut pas preuve de disponibilité en production.
