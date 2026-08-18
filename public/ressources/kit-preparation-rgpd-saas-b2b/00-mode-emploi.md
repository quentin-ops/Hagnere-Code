# Kit de préparation RGPD pour un SaaS B2B

Version : 1.1  
Date de revue : 24 juillet 2026  
Éditeur : Hagnéré Code

## La décision que ce kit aide à préparer

Un dirigeant ne devrait pas devoir arbitrer une mise en production à partir
d’une promesse vague comme « le prestataire est RGPD ». Ce dossier transforme
une fonction du SaaS en questions vérifiables :

- quelles données circulent et pour quelle finalité ;
- qui décide, qui exécute et quelle qualification reste à confirmer ;
- quels prestataires, pays et accès sont impliqués ;
- quelles clauses, mesures et preuves existent réellement ;
- quels tests ont réussi, quelles inconnues demeurent et qui doit agir ;
- quelle trésorerie, quelle capacité interne et quels engagements récurrents
  doivent être préparés à 12, 36 et 60 mois.

Le résultat attendu n’est pas un certificat. C’est un dossier de décision
compréhensible par la direction et exploitable par les équipes produit,
techniques, sécurité, achats et par le DPO ou le juriste consulté.

Le ZIP contient **neuf tableaux CSV** et **trois documents Markdown**. Un
fichier CSV s’ouvre dans Excel, LibreOffice ou Google Sheets en choisissant le
point-virgule comme séparateur si le logiciel ne le détecte pas. Un fichier
Markdown (`.md`) est un document texte : il s’ouvre dans un éditeur de texte
et son contenu peut être copié dans Word, Google Docs ou Notion.

## Ce que ce kit ne fait pas

Ce kit n’est ni :

- un audit de conformité ;
- un avis juridique ;
- un DPA prêt à signer ;
- une analyse d’impact relative à la protection des données (AIPD) ;
- une analyse d’impact des transferts de données (AITD/TIA) ;
- une certification ;
- un score de risque ou un pourcentage de conformité.

Une ligne remplie ne prouve pas que la qualification ou la décision est juste.
Les champs terminant par `_a_confirmer`, ainsi que `role_suppose_a_confirmer`,
`qualification_revue_par` et `revue_specialiste`, doivent rester ouverts tant
qu’une personne compétente n’a pas examiné les faits et les textes applicables.

## Ordre conseillé, du produit à la décision

1. Dupliquez ce dossier et conservez l’original comme modèle.
2. Travaillez uniquement avec des données et identités fictives dans cette
   copie de préparation.
3. Remplissez `01-registre-responsable.csv` pour les finalités décidées par
   l’entreprise. Pour chaque source, distinguez collecte directe et indirecte,
   puis consignez le support et la date de l’information à examiner au regard
   des articles 13 ou 14.
4. Remplissez `02-registre-sous-traitant.csv` pour les opérations réalisées sur
   instruction des clients.
5. Analysez chaque finalité dans `03-matrice-roles.csv`. Ne donnez jamais un
   rôle unique au SaaS entier sans examiner les finalités une par une.
6. Recensez chaque fournisseur et chaque accès dans
   `04-matrice-prestataires-et-transferts.csv`, y compris l’administration ou
   le support à distance.
7. Rapprochez le produit, le contrat et les preuves dans
   `05-matrice-article-28.csv`.
8. Exécutez sur un environnement fictif les scénarios de
   `06-tests-droits-et-sortie.csv`.
9. Jouez un incident à blanc avec `07-journal-incident.csv` : horodatez la
   découverte et la prise de connaissance à confirmer, contenez sans retarder
   la protection des personnes, préservez les preuves utiles, qualifiez le
   périmètre et les conséquences, alertez selon le rôle, puis consignez chaque
   décision de notification et ses motifs.
10. Utilisez `08-triage-aipd-dpo.md` pour préparer les questions à faire
    qualifier. `09-exemple-orbia.csv` montre comment relier les identifiants
    sans contenir de données personnelles réelles.
11. Consignez l’arbitrage dans `10-releve-de-decision.md`, puis les actions et
    moyens à préparer dans `11-plan-actions-budget.csv`.

## Identifiants : le fil d’Ariane du dossier

Attribuez un identifiant stable à chaque objet. Ne réutilisez jamais un
identifiant pour un autre objet et ne le renumérotez pas après partage.

| Préfixe  | Objet                                                    | Exemple            |
| -------- | -------------------------------------------------------- | ------------------ |
| `TRT`    | traitement pour une finalité propre                      | `TRT-001`          |
| `AST`    | activité réalisée comme sous-traitant                    | `AST-001`          |
| `FIN`    | finalité analysée dans la matrice des rôles              | `FIN-001`          |
| `PREST`  | prestataire ou sous-traitant ultérieur                   | `PREST-001`        |
| `FLUX`   | flux ou accès à examiner                                 | `FLUX-001`         |
| `A28`    | obligation examinée pour un prestataire                  | `A28-PREST-001-01` |
| `TEST`   | test exécutable et daté                                  | `TEST-001`         |
| `INC`    | exercice ou incident                                     | `INC-001`          |
| `ACTION` | action décidée, budgétée et suivie                       | `ACTION-001`       |
| `COUT`   | dépense ou charge unique, pour éviter un double comptage | `COUT-001`         |

Les colonnes au pluriel acceptent plusieurs identifiants séparés par une barre
verticale, par exemple `TRT-001|PREST-002`. Un identifiant cité doit exister
dans le fichier qui le porte. Les préfixes supplémentaires de l’exemple
`ORB` signalent uniquement un scénario fictif, par exemple `TRT-ORB-001`.
Dans la matrice de l’article 28, dupliquez le bloc des dix obligations pour
chaque contrat ou prestataire examiné et conservez son identifiant dans
`obligation_id`.

## Règles de saisie

- Encodage : UTF-8.
- Séparateur CSV : point-virgule.
- Une ligne = un objet ou une décision vérifiable.
- Appliquez la minimisation et la protection des données dès la conception :
  documentez pourquoi chaque champ, accès, durée et réglage par défaut est
  nécessaire au périmètre examiné.
- N’écrivez jamais `0`, `non concerné`, `validé` ou `conforme` pour masquer une
  inconnue. Utilisez `à confirmer`, expliquez ce qui manque et nommez un
  responsable.
- Une preuve doit être localisable : version de contrat, ticket, capture
  expurgée, rapport de test, journal ou procédure datée. Un nom de fichier
  seul n’établit pas que son contenu est suffisant.
- N’insérez aucune donnée personnelle réelle dans le kit envoyé à un
  prestataire ou utilisé pour un exercice.
- Dans un tableur, préfixez d’une apostrophe toute saisie utilisateur qui
  commencerait par `=`, `+`, `-` ou `@` afin d’éviter son interprétation comme
  une formule.

## Lire le plan d’actions sans fabriquer un faux total

`11-plan-actions-budget.csv` sépare trois réalités :

1. la trésorerie ponctuelle, hors engagements récurrents ;
2. la capacité interne en heures, qui n’est pas automatiquement une sortie de
   trésorerie ;
3. les engagements récurrents cumulés sur chaque horizon.

Les colonnes 12, 36 et 60 mois sont cumulatives. Ne les additionnez jamais
entre elles. Ne convertissez pas les heures internes en euros sans une
hypothèse explicite et validée. Chaque dépense reçoit une `cle_cout_unique`.
Si son montant est déjà inclus dans une autre action, renseignez
`cout_inclus_dans_action_id` au lieu de le compter une seconde fois. Tant
qu’une hypothèse manque, conservez `à confirmer` : le kit ne calcule aucun
« coût total de conformité ».

## Portes d’arrêt

Restez sur des données fictives et demandez une revue spécialisée lorsque
l’une de ces questions n’a pas de réponse documentée :

- qui décide la finalité et les moyens essentiels ;
- quelle base juridique est envisagée ;
- si des données relevant de l’article 9 ou des données pénales sont traitées ;
- si un accès ou transfert hors EEE existe et sur quel mécanisme il repose ;
- si une AIPD, une AITD ou la désignation d’un DPO doit être examinée ;
- comment un droit, une restitution ou une suppression est exécuté ;
- qui alerte qui lors d’une violation ;
- si le contrat décrit réellement les sous-traitants, la sécurité et la sortie.

## Mini-lexique pour lire le kit

- **Responsable du traitement** : acteur qui détermine les finalités et les
  moyens essentiels d’un traitement. La qualification dépend des faits et
  s’examine finalité par finalité.
- **Sous-traitant** : acteur qui traite des données pour le compte du
  responsable du traitement, sur instruction. Un même éditeur SaaS peut avoir
  un autre rôle pour une finalité différente.
- **DPO** : délégué à la protection des données.
- **DPA** : appellation courante de l’accord encadrant un traitement confié à
  un sous-traitant. Le contrat doit être examiné au regard de l’article 28.
- **AIPD** : analyse d’impact relative à la protection des données, centrée sur
  les risques du traitement pour les personnes.
- **AITD/TIA** : analyse d’impact d’un transfert de données vers un pays tiers.
  Elle ne se confond pas avec une AIPD.
- **EEE** : Espace économique européen.
- **CCT/SCC** : clauses contractuelles types, en français ou en anglais.
- **Tenant** : espace logique d’un client dans un logiciel partagé. Ce n’est
  pas une qualification juridique.

## Sources de référence

Les champs sont inspirés du RGPD, notamment :

- [l’identification des rôles selon les faits, finalité par
  finalité](https://www.cnil.fr/fr/rgpd-comment-bien-identifier-son-role) ;
- [les articles du chapitre IV, dont l’article
  28](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4) ;
- [le guide pratique de la CNIL sur
  l’AITD](https://www.cnil.fr/sites/cnil/files/2025-02/guide_aitd_pdf.pdf).

Le kit s’appuie également sur les articles 26, 30, 32, 33, 35, 37 et 44 à 49
du RGPD et sur les lignes directrices 07/2020 du CEPD. Les textes,
recommandations, faits du produit et contrats évoluent : vérifiez leur version
au moment de chaque décision.
