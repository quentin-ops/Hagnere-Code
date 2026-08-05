# Dossier de travail — Airtable, Notion ou application métier

Gel d’entrée immuable :
[`airtable-notion-ou-application-metier-p0.md`](./airtable-notion-ou-application-metier-p0.md)

Ce dossier accompagne un brouillon privé. Il ne prouve ni déploiement, ni
publication, ni indexation. Les informations de produit ont été relues sur des
sources officielles les **4 et 5 août 2026** ; elles devront être revalidées si
une passe ultérieure modifie leur portée ou si la publication intervient plus
tard.

## Journal des quatre passes

Propriétaire éditorial : `PRIMARY_ORCHESTRATOR`.

| Passe                             | État                   | Date       | Responsable                | Snapshot                                                    | Blocages                      |
| --------------------------------- | ---------------------- | ---------- | -------------------------- | ----------------------------------------------------------- | ----------------------------- |
| 1. Création complète              | Validée — `GO_PASSE_2` | 2026-08-05 | `/root/airtable_notion_p1` | `manifests/airtable-notion-ou-application-metier-p1.sha256` | Aucun défaut slug-only ouvert |
| 2. Enrichissement et vérification | Validée — `GO_PASSE_3` | 2026-08-05 | `/root/airtable_notion_p2` | `manifests/airtable-notion-ou-application-metier-p2.sha256` | Aucun défaut slug-only ouvert |
| 3. Polish rédactionnel            | Validée — `GO_PASSE_4` | 2026-08-05 | `/root/airtable_notion_p3` | `manifests/airtable-notion-ou-application-metier-p3.sha256` | Aucun défaut slug-only ouvert |
| 4. Antipasse IA                   | Validée — G4 puis Q    | 2026-08-05 | Agent P4 distinct          | `manifests/airtable-notion-ou-application-metier-p4.sha256` | `GO_QUALITE_GUIDE` 95/100     |

Toute modification d’un fichier couvert par le manifeste P1 invalide la porte
G1 jusqu’à régénération et recontrôle du nouveau snapshot. Le manifeste ne
couvre ni le gel P0, ni son propre fichier.

## 1. Fiche d’identité

```text
Slug : airtable-notion-ou-application-metier
Statut actuel : brouillon privé, non publié
Requête principale : Airtable, Notion ou application métier
Questions proches : Airtable ou Notion ; quand quitter Notion ; quand quitter Airtable ; no-code ou logiciel métier
Moment du parcours : décider, sécuriser, puis préparer une sortie si elle est prouvée
Lecteur précis : dirigeant, responsable métier, DSI ou opérations d’une PME/ETI
Situation déclenchante : le processus fonctionne encore mais devient difficile à expliquer, modifier, soutenir ou sortir
Décision principale : STOP, conserver, renforcer, hybrider ou sortir progressivement
Niveau de connaissance : connaît l’outil ; ignore parfois ses dépendances, ses limites de plan et ses conditions de sortie
Action utile sans contact : test local de charge organisationnelle et grille de sortie
CTA : décrire le processus sur /demarrer-un-projet ; service /services/outils-internes-sur-mesure
Hors périmètre : classement générique no-code, benchmark de performance non reproduit, promesse de conformité, devis ou ROI automatique
Date de recherche : 4 août 2026 ; revalidation factuelle P2 : 5 août 2026
Responsable de synthèse : agent P1 distinct, sous validation de l’orchestrateur
```

### Contrat de réponse

- Phrase du lecteur : « Notre Airtable ou notre Notion marche, mais personne ne
  sait ce qui casserait si l’on changeait un champ ou si son créateur partait. »
- Réponse des 150 premiers mots : garder l’outil tant que les cas difficiles,
  les droits, les données, l’exploitation et la sortie sont prouvés ; corriger
  la gouvernance avant de reconstruire ; isoler une contrainte si une frontière
  propre existe ; sortir progressivement seulement après échecs reproduits.
- Terme central : **charge organisationnelle**, soit ce que l’équipe doit
  comprendre, contrôler, soutenir et reprendre pour maintenir le service.
- Garde-fou : une inconnue critique reste `À vérifier` et provoque `STOP` ; elle
  n’est jamais transformée en zéro, en échec ou en recommandation par défaut.
- Contre-conclusion obligatoire : garder Airtable ou garder Notion doit pouvoir
  gagner. Deux exemples fictifs démontrent explicitement ces issues.

## 2. Intention de recherche et non-cannibalisation

La recherche française observée le 4 août 2026 présente surtout des pages
d’éditeurs, d’agences et des comparatifs génériques. Cette observation ne sert
pas de preuve factuelle sur les produits. Le manque éditorial retenu est plus
précis : **comment prouver qu’un outil reste exploitable et réversible avant de
le conserver, de l’hybrider ou de le remplacer**.

| Page existante                         | Intention dominante                             | Différence du guide #6                                                                               | Lien retenu                           |
| -------------------------------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------- |
| `signes-besoin-logiciel-metier`        | Reconnaître si un problème mérite un diagnostic | Ici, l’outil existe ou doit être choisi ; on teste produit, exploitation et sortie                   | Guide amont dans les guides liés      |
| `calculer-roi-application-metier`      | Chiffrer le retour d’une application métier     | Ici, aucun ROI générique ; le coût ne devient pertinent qu’après une limite prouvée                  | Guide budgétaire dans les guides liés |
| `power-apps-ou-application-sur-mesure` | Arbitrer dans l’écosystème Microsoft            | Ici, Airtable et Notion sont distingués par leur centre de gravité, leur exploitation et leur export | Guide d’architecture voisin           |
| `transformer-excel-en-application`     | Migrer un tableur devenu système                | Ici, le point de départ est Airtable/Notion et la conclusion peut être de rester                     | Pas de duplication du parcours Excel  |

Justification d’une URL distincte : la page répond à une requête de produits
nommés, mais refuse le classement abstrait. Son actif différenciant est un test
organisationnel à douze dimensions, un moteur transparent à cinq issues et une
grille de sortie couvrant responsabilités, coexistence et retour arrière.

## 3. Méthode de recherche

1. Recherche limitée aux sources primaires : pages d’aide Airtable et Notion,
   documentation API Notion, CNIL et texte du RGPD sur EUR-Lex.
2. Chaque page citée dans le guide a été ouverte et lue, pas seulement repérée
   dans une page de résultats.
3. Les nombres de plan, de débit et d’historique ont été revalidés et datés du
   5 août 2026 dans le contenu P2.
4. Les limites de débit sont distinguées des quotas mensuels et de la capacité
   métier observée.
5. Les fonctions Enterprise ou de résidence sont décrites avec leur périmètre ;
   aucune fonction ne devient une preuve automatique de conformité.
6. Toute contradiction entre deux pages officielles est maintenue visible.
7. Les résultats concurrents servent seulement à identifier les omissions du
   marché, jamais à établir un fait produit.

## 4. Fiche de preuves

Niveaux : `FORT` = texte primaire explicite ; `MOYEN` = déduction bornée à
partir de plusieurs éléments primaires ; `À VÉRIFIER` = dépend du plan, de
l’espace, du contrat ou d’une configuration réelle.

| ID  | Affirmation visible                                                                                                                   | Source primaire relue                                                                          | Passage utile / périmètre                                                                               | Date et confiance                                     | Emplacement / conséquence lecteur                                                  |
| --- | ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------- |
| A01 | Les plans Airtable ont des limites distinctes de lignes, stockage, appels et historique                                               | <https://support.airtable.com/v1/docs/airtable-plans>                                          | Tableau par plan ; le contrat réel prévaut                                                              | 2026-08-04 · FORT                                     | Sources, volume : ne pas extrapoler d’un plan à l’autre                            |
| A02 | La vue d’ensemble Airtable indique un an d’historique Business                                                                        | même source A01                                                                                | Ligne Business de la vue d’ensemble                                                                     | 2026-08-04 · FORT sur le texte, pas sur le contrat    | Sortie : contradiction rendue visible                                              |
| A03 | La page détaillée des snapshots indique deux ans pour Business                                                                        | <https://support.airtable.com/docs/taking-and-restoring-base-snapshots>                        | Tableau de rétention ; page mise à jour le 24 juillet 2026                                              | 2026-08-05 · FORT sur le texte                        | Sortie : inscrire `à vérifier sur notre workspace et notre contrat`                |
| A04 | Restaurer un snapshot Airtable crée une nouvelle base et un nouvel app ID                                                             | même source A03                                                                                | Notes de restauration                                                                                   | 2026-08-04 · FORT                                     | La restauration peut casser des dépendances externes                               |
| A05 | La base restaurée n’emporte pas son historique de révision                                                                            | même source A03                                                                                | Limite explicite                                                                                        | 2026-08-04 · FORT                                     | Ne pas confondre snapshot et reprise complète                                      |
| A06 | Sur Team, Business et Enterprise Scale, les permissions Airtable de champ/table restreignent l’édition, pas la visibilité             | <https://support.airtable.com/using-field-and-table-editing-permissions>                       | Disponibilité par plan ; avertissement sur visibilité et configuration                                  | 2026-08-05 · FORT                                     | Tester lecture, vue, interface, sync, API et export par rôle                       |
| A07 | Un déclenchement d’automatisation Airtable compte même si l’action échoue                                                             | <https://support.airtable.com/getting-started-with-airtable-automations>                       | Définition d’un run et notes du tableau                                                                 | 2026-08-04 · FORT                                     | Dimensionner sur déclenchements et reprises, pas succès                            |
| A08 | Les limites mensuelles d’automatisation varient par plan                                                                              | même source A07                                                                                | Tableau Free, Team, Business, Enterprise Scale                                                          | 2026-08-04 · FORT, volatil                            | Vérifier plan et consommation réels avant décision                                 |
| A09 | L’API Airtable est limitée à cinq requêtes/seconde/base                                                                               | <https://support.airtable.com/managing-api-call-limits-in-airtable>                            | Limite par base et causes de 429                                                                        | 2026-08-05 · FORT                                     | Tester temporisation, file et reprise                                              |
| A10 | Airtable distingue quotas mensuels Free/Team et débit ; Business/Enterprise n’ont pas de plafond mensuel annoncé                      | même source A09                                                                                | Questions fréquentes et 429                                                                             | 2026-08-05 · FORT, volatil                            | Ne pas confondre quota mensuel, débit et capacité du processus                     |
| A11 | Airtable n’offre pas un fonctionnement hors connexion                                                                                 | <https://support.airtable.com/docs/what-are-the-technical-requirements-for-using-airtable>     | Internet requis ; FAQ explicite sur l’absence d’offline                                                 | 2026-08-04 · FORT                                     | Le terrain sans réseau peut devenir une limite structurelle                        |
| A12 | L’export Airtable est table par table ; pièces jointes séparées ; plusieurs éléments ne sont pas inclus dans le CSV                   | même source A11                                                                                | FAQ export : tables, fichiers et contenus exclus                                                        | 2026-08-04 · FORT                                     | Un CSV n’est pas une sortie complète                                               |
| A13 | La résidence Airtable est une option Enterprise Scale et ne couvre pas toutes les métadonnées                                         | <https://support.airtable.com/docs/data-residency-at-airtable>                                 | Régions, données couvertes et données restant aux États-Unis                                            | 2026-08-04 · FORT                                     | Vérifier catégories, support, authentification et contrat                          |
| A14 | Airtable publie aussi une limite de cinquante requêtes/seconde pour les jetons d’un même utilisateur ou compte de service             | même source A09                                                                                | Limite transversale aux jetons d’accès personnels ; attente de trente secondes après dépassement        | 2026-08-05 · FORT, volatil                            | Dimensionner les intégrations au niveau de l’identité technique                    |
| A15 | Le DPA public Airtable indique ne devenir opposable qu’après exécution valable                                                        | <https://www.airtable.com/company/dpa>                                                         | Version publique mise à jour le 5 décembre 2025 ; conditions de signature et fin de prestation          | 2026-08-05 · FORT sur le texte public                 | Conserver la version réellement signée ou acceptée                                 |
| A16 | Airtable publie une liste de sous-traitants et un abonnement aux notifications de changement                                          | <https://www.airtable.com/company/subprocessors>                                               | Liste publique ; contrat et DPA déterminent préavis et recours applicables                              | 2026-08-05 · FORT sur l’existence de la liste         | Ne pas confondre page publique et chaîne contractuelle acceptée                    |
| N01 | Les droits Notion se composent entre pages, teamspaces, workspace, invités et publication                                             | <https://www.notion.com/help/sharing-and-permissions>                                          | Niveaux de partage ; accès le plus large ; export désactivable                                          | 2026-08-04 · FORT                                     | Tester le rôle réel plutôt qu’un écran admin                                       |
| N02 | Sur Business et Enterprise, Notion permet des règles d’accès à des pages de base via des propriétés de personne ou de créateur        | même source N01                                                                                | Disponibilité par plan ; accès au niveau des pages de base                                              | 2026-08-05 · FORT, configuration à vérifier           | Tester mouvement de page, changement d’équipe et connexion                         |
| N03 | Les automatisations de base Notion sont liées aux plans payants et ne se déclenchent pas entre elles                                  | <https://www.notion.com/help/database-automations>                                             | Disponibilité et limites                                                                                | 2026-08-04 · FORT                                     | Ne pas dessiner une chaîne impossible sans test                                    |
| N04 | Des pages restreintes peuvent être exclues d’une automatisation Notion                                                                | même source N03                                                                                | Limite d’accès de l’automatisation                                                                      | 2026-08-04 · FORT                                     | Tester avec les permissions de l’automatisation                                    |
| N05 | L’API Notion annonce trois requêtes/seconde en moyenne par connexion et une limite workspace partagée, ajustée au plan, non chiffrée  | <https://developers.notion.com/reference/request-limits>                                       | Deux limites distinctes ; valeurs susceptibles d’évoluer                                                | 2026-08-05 · FORT, volatil                            | Respecter 429/529 et Retry-After sans inventer le plafond workspace                |
| N06 | L’API Notion limite aussi la taille de certaines charges utiles                                                                       | même source N05                                                                                | Taille totale et nombre de blocs                                                                        | 2026-08-04 · FORT, volatil                            | Découper, valider et journaliser les requêtes                                      |
| N07 | L’API Notion documente erreurs d’autorisation, conflit, débit et indisponibilité, dont 529                                            | <https://developers.notion.com/reference/status-codes>                                         | Codes d’erreur officiels                                                                                | 2026-08-04 · FORT                                     | Tester reprise, doublon et alerte                                                  |
| N08 | La résidence Notion est une option Enterprise avec périmètre limité                                                                   | <https://www.notion.com/help/data-residency>                                                   | Régions, données au repos couvertes, exclusions                                                         | 2026-08-04 · FORT                                     | Une région n’est pas une conformité RGPD                                           |
| N09 | Notion exporte notamment HTML, PDF, Markdown et CSV                                                                                   | <https://www.notion.com/help/export-your-content>                                              | Formats et droits d’export                                                                              | 2026-08-04 · FORT                                     | Choisir un format par objet, pas un export unique                                  |
| N10 | Des relations de base exportées comme URL ne se recréent pas automatiquement à la réimportation                                       | <https://www.notion.com/fr/help/relations-and-rollups>                                         | FAQ officielle : export CSV des relations en URL texte et réimport impossible                           | 2026-08-05 · FORT                                     | Import de contrôle obligatoire                                                     |
| N11 | Les fenêtres d’historique Notion varient par plan                                                                                     | <https://www.notion.com/help/duplicate-delete-and-restore-content>                             | Free, Plus, Business, Enterprise                                                                        | 2026-08-04 · FORT, volatil                            | Vérifier plan et règle de rétention réels                                          |
| N12 | Restaurer une base Notion ne restaure pas automatiquement le contenu de toutes ses pages                                              | même source N11                                                                                | Limite explicite de restauration                                                                        | 2026-08-04 · FORT                                     | Test de restauration avec contenu imbriqué                                         |
| N13 | Notion offre un hors-ligne dans les apps bureau/mobile, avec pages téléchargées et limites de base                                    | <https://www.notion.com/help/use-pages-offline>                                                | Appareils, pages, bases, conflits et actions indisponibles                                              | 2026-08-05 · FORT                                     | Corrige une ancienne généralisation : Notion n’est plus décrit comme sans offline  |
| N14 | Le hors-ligne Notion n’est pas disponible dans le navigateur ; les sous-pages ne suivent pas et une base télécharge d’abord 50 lignes | même source N13                                                                                | Applications bureau/mobile ; 50 premières lignes de la première vue ; conflits non textuels à contrôler | 2026-08-05 · FORT                                     | Rejouer coupure, modification concurrente et resynchronisation sur l’appareil visé |
| N15 | L’API Notion borne les charges à 1 000 éléments de bloc et 500 Ko et recommande des reprises limitées avec recul et aléa              | <https://developers.notion.com/reference/request-limits>                                       | 429/529, `Retry-After`, recul exponentiel, idempotence et limites de payload                            | 2026-08-05 · FORT, volatil                            | Ne pas rejouer aveuglément une écriture                                            |
| N16 | Notion publie un addendum de traitement des données                                                                                   | <https://www.notion.so/Data-Processing-Addendum-361b540101274b1fa7e16b90402b0d99>              | Texte public à rapprocher de l’accord et des services activés                                           | 2026-08-05 · FORT sur l’existence, contrat à vérifier | Archiver la version effectivement applicable                                       |
| N17 | Notion publie une liste de sous-traitants et un mécanisme de notification                                                             | <https://www.notion.so/Notion-s-List-of-Subprocessors-268fa5bcfa0f46b6bc29436b21676734?pvs=24> | Liste publique et notifications ; périmètre dépend des services                                         | 2026-08-05 · FORT sur l’existence                     | Comparer liste, DPA et données réellement confiées                                 |
| C01 | Le recours au cloud laisse au client des responsabilités de sécurité et de continuité                                                 | <https://www.cnil.fr/fr/securite-cloud-informatique-en-nuage>                                  | Cartographie, risque, contrat, accès, sauvegardes, localisation et PCA/PRA                              | 2026-08-05 · FORT                                     | Aucun éditeur ne « prend tout en charge »                                          |
| C02 | Une stratégie de sauvegarde exige copies isolées et restaurations testées                                                             | <https://www.cnil.fr/fr/securite-sauvegarder>                                                  | Fréquence, intégrité, restauration, règle 3-2-1 recommandée                                             | 2026-08-04 · FORT                                     | Sauvegarde fournisseur ≠ reprise métier                                            |
| C03 | La sous-traitance exige responsabilités, contrat, sécurité, assistance, restitution/destruction et chaîne de sous-traitants           | <https://www.cnil.fr/fr/sous-traitant>                                                         | Portail officiel CNIL : contrat, bonnes pratiques, guide et clauses                                     | 2026-08-05 · FORT                                     | Vérifier DPA, localisation effective et fin de contrat                             |
| R01 | L’article 28 du RGPD exige garanties suffisantes, contrat écrit, instructions, sous-traitants ultérieurs, retour/suppression et audit | <https://eur-lex.europa.eu/eli/reg/2016/679/art_28/oj?locale=fr>                               | Texte officiel, article 28                                                                              | 2026-08-04 · FORT                                     | Résidence ou plan Enterprise ne certifie pas la conformité                         |

### Contradiction officielle conservée

Les sources A01 et A03 ne donnent pas la même durée d’historique pour Business.
Le constat est resté visible après la relecture d’A03 le 5 août 2026. La page
n’en choisit aucune : elle nomme les deux valeurs, date l’observation et demande
de vérifier le workspace et le contrat. Cette contradiction est un test
éditorial : une passe ultérieure ne doit pas la lisser sans preuve primaire plus
récente.

## 5. Architecture de décision

### Entrées

Le moteur demande :

- outil actuel : `unknown`, `airtable`, `notion`, `none` ;
- forme dominante : `unknown`, `structured-records`,
  `knowledge-collaboration`, `mixed` ;
- criticité : `unknown`, `limited`, `important`, `critical` ;
- frontière isolable : `unknown`, `not-needed`, `yes`, `no` ;
- utilisateurs actifs, objets actifs et écritures mensuelles : entier sûr,
  fini, positif ou nul ; `null` signifie inconnu.

Un zéro explicite reste valide. Une chaîne vide devient `null`. Un nombre
négatif, fractionnaire, non fini ou hors entier sûr déclenche un blocage. Le
moteur n’utilise aucun seuil caché de volume ou d’utilisateurs.

### Douze dimensions de charge organisationnelle

| #   | Dimension               | Cause initiale | Question centrale                                                            |
| --- | ----------------------- | -------------- | ---------------------------------------------------------------------------- |
| 1   | Criticité et arrêt      | À qualifier    | Coût, durée tolérable et mode dégradé ont-ils été exercés ?                  |
| 2   | Rôles et droits         | À qualifier    | Chaque rôle possède-t-il seulement les droits nécessaires ?                  |
| 3   | Données et intégrité    | À qualifier    | Relations, unicités, statuts et règles tiennent-ils sur les cas difficiles ? |
| 4   | Écritures concurrentes  | À qualifier    | Deux acteurs écrivent-ils sans perte, doublon ou conflit silencieux ?        |
| 5   | Volume et archive       | À qualifier    | Charge active, croissance, fichiers et archive passent-ils le plan réel ?    |
| 6   | Automatisations         | À qualifier    | Propriétaire, alerte, journal et reprise existent-ils ?                      |
| 7   | Intégrations et API     | À qualifier    | Quotas, erreurs, délais, files et identités techniques ont-ils été testés ?  |
| 8   | Mobile et mode dégradé  | À qualifier    | Le travail terrain se termine-t-il dans les conditions visées ?              |
| 9   | Audit et conformité     | À qualifier    | Traces, accès, durées et contrats requis sont-ils disponibles ?              |
| 10  | Propriété et relève     | À qualifier    | L’organisation possède-t-elle comptes, secrets et relève formée ?            |
| 11  | Export et sortie        | À qualifier    | Données, fichiers, relations, règles et historiques ont-ils été relus ?      |
| 12  | Support et restauration | À qualifier    | Escalade, restauration et retour au service ont-ils été exercés ?            |

Chaque dimension prend `unknown`, `controlled` ou `failed`. `unknown` provoque
toujours `STOP_MISSING_EVIDENCE`. Un contrôle `failed` exige ensuite une cause
explicite : `unqualified`, `governance-remediable` ou `platform-boundary`.
`unqualified` maintient le STOP. Aucune cause n’est déduite de la dimension :
des droits insuffisants ou un export incomplet peuvent révéler une configuration
remédiable comme une limite du produit, selon le test reproduit. Une cause
stockée sur un contrôle qui n’est pas en échec est ignorée.

### Règles transparentes

```text
SI une entrée critique ou une dimension est inconnue
  => STOP_MISSING_EVIDENCE

SI un contrôle est en échec mais que sa cause reste à qualifier
  => STOP_MISSING_EVIDENCE

SI une saisie est invalide ou si la frontière déclarée contredit un échec
  => STOP_MISSING_EVIDENCE avec blocage explicite

SI un seul défaut de frontière est reproduit ET qu’une frontière isolable est testée
  => HYBRID

SI plusieurs défauts de frontière sont reproduits OU que la frontière ne s’isole pas
  => EXIT_PROGRESSIVELY

SI seuls des défauts de gouvernance sont reproduits
  => STRENGTHEN

SI tout est contrôlé
  => KEEP
```

Pour un nouveau choix sans outil, la forme `structured-records` route le candidat
vers Airtable et `knowledge-collaboration` vers Notion uniquement après preuve
des douze dimensions. Un processus `mixed` exige une frontière explicite et ne
force pas une marque. La combinaison `mixed` + `not-needed` est désormais une
contradiction bloquante : elle maintient `STOP_MISSING_EVIDENCE` au lieu de
fabriquer une recommandation dédiée.

### Grille de sortie

Le dossier produit par l’atelier contient douze champs libres :

1. objets et périmètre ;
2. propriétaires et relève ;
3. données et formats d’export ;
4. pièces jointes et liens ;
5. identités, rôles et droits ;
6. automatisations, scripts et alertes ;
7. intégrations, secrets et quotas ;
8. règles métier et exceptions ;
9. historique, traces et archives ;
10. recette utilisateur et critères ;
11. coexistence et bascule ;
12. retour arrière et extinction.

La grille ne déclenche aucune migration. Une case vide reste `à renseigner` dans
le dossier copié. Le texte peut être copié ou imprimé, sans envoi réseau ni
stockage local.

## 6. Cas limites et tests du moteur

| Cas                                                      | Attendu                                                   | Couverture P1    |
| -------------------------------------------------------- | --------------------------------------------------------- | ---------------- |
| Formulaire entièrement vide                              | STOP avec toutes les preuves manquantes                   | Test unitaire    |
| Zéro utilisateur, objet ou écriture explicitement saisi  | Valeur valide, pas remplacée par inconnu                  | Test unitaire    |
| Nombre négatif, fractionnaire, infini ou hors entier sûr | STOP avec erreur de saisie                                | Tests unitaires  |
| Une dimension inconnue parmi onze contrôlées             | STOP                                                      | Test unitaire    |
| Un échec sans cause qualifiée                            | STOP sans attribution devinée                             | Test unitaire    |
| Un défaut de gouvernance seulement                       | RENFORCER                                                 | Test unitaire    |
| Droits en gouvernance remédiable                         | RENFORCER                                                 | Test unitaire    |
| Droits ou export en limite produit, frontière isolable   | HYBRIDE                                                   | Tests unitaires  |
| Droits ou export en limite produit, frontière non isolée | SORTIR PROGRESSIVEMENT                                    | Tests unitaires  |
| Cause stockée sur un contrôle satisfaisant               | Ignorée, aucune décision modifiée                         | Test unitaire    |
| Un défaut structurel isolable                            | HYBRIDE                                                   | Test unitaire    |
| Un défaut structurel non isolable                        | SORTIR PROGRESSIVEMENT                                    | Test unitaire    |
| Plusieurs défauts structurels                            | SORTIR PROGRESSIVEMENT                                    | Test unitaire    |
| Tout contrôlé avec Airtable actuel                       | CONSERVER                                                 | Test unitaire    |
| Tout contrôlé avec Notion actuel                         | CONSERVER                                                 | Test unitaire    |
| Nouveau processus structuré                              | Candidat Airtable                                         | Test unitaire    |
| Nouveau processus documentaire                           | Candidat Notion                                           | Test unitaire    |
| Nouveau processus mixte, frontière inconnue              | STOP                                                      | Test unitaire    |
| Nouveau processus mixte, frontière déclarée inutile      | STOP contradiction                                        | Test unitaire P2 |
| Échec structurel mais frontière `not-needed`             | STOP contradiction                                        | Test unitaire    |
| Copie navigateur refusée                                 | Message de sélection manuelle                             | Test composant   |
| Impression                                               | Ouverture des détails, puis restauration après impression | Test composant   |

## 7. Structure éditoriale livrée en P1

1. Réponse directe et cinq issues.
2. Différence de centre de gravité entre Airtable, Notion et le dédié.
3. Journée de preuve, douze dimensions et atelier local.
4. Droits, visibilité, intégrité, concurrence et charge active.
5. Automatisations, API, quotas, erreurs et reprise.
6. Export, snapshots, historique, résidence, RGPD et sauvegardes.
7. Cinq cas explicitement fictifs et contradictoires.
8. Frontière hybride, grille de sortie, coexistence, recette et rollback.
9. Plan d’action du lundi.
10. FAQ en trois catégories, douze réponses visibles.
11. Sources officielles et limites.

Les cinq cas sont déclarés fictifs et ne reprennent aucun client :

- conserver Airtable après nettoyage de gouvernance ;
- conserver Notion pour un besoin réellement documentaire ;
- renforcer une base dont les accès dépendent du créateur ;
- hybrider une connaissance Notion avec une commande terrain dédiée ;
- sortir progressivement après plusieurs limites structurelles reproduites.

## 8. SEO, données structurées et publication

### Contrat privé P1

```text
title/headline/H1 : Airtable, Notion ou application métier : comment choisir ?
meta description : 155 caractères à contrôler automatiquement
canonical : https://hagnere-code.ai/guides/airtable-notion-ou-application-metier
robots : noindex, nofollow
datePublished : absente — STOP jusqu’à preuve de première publication réelle
dateModified : absente — STOP jusqu’au snapshot réellement intégré/publié
readTimeMin : 20 — 3 959 mots mesurés sur le HTML servi localement le 5 août 2026
editorialStatus : ready-for-human-review
```

### Contrat privé P2

```text
title/headline/H1 : inchangés et strictement identiques
canonical : inchangée
robots : noindex, nofollow
datePublished / dateModified : toujours absentes
readTimeMin : 22 — 4 420 mots mesurés sur le HTML servi localement le 5 août 2026
structured data : Article + BreadcrumbList uniquement
editorialStatus : ready-for-human-review
```

Le JSON-LD émis contient uniquement :

- `Article`, avec headline identique au H1, images visibles dans l’article,
  auteur et organisation reliés à leurs identifiants canoniques ;
- `BreadcrumbList`, avec l’URL canonique exacte.

Sont volontairement absents : `FAQPage`, `HowTo`, `Review`, `Product`,
`AggregateRating`, `Offer`, `wordCount`, `datePublished`, `dateModified`.

Le guide n’est pas inscrit dans `src/lib/guides.ts`, les redirections, le hub,
le sitemap ou les fichiers LLM pendant P1. Ces éléments sont partagés et
restent réservés à l’intégration après P4 et contrôle transversal.

## 9. UX, accessibilité et sobriété

- Composants visuels existants réutilisés : `GuidesShell`,
  `GuidePremiumLayout`, `GuidePremiumSection`, `GuidePremiumMemo`,
  `GuidePremiumCase`, `GuideTable`, `InfoBox`.
- Aucun composant partagé copié ou modifié.
- Le H1 est assemblé sans ponctuation orpheline et possède un libellé accessible
  identique au headline.
- L’atelier associe chaque champ à un label, utilise des contrôles d’au moins
  44 px et annonce son résultat via une seule région `role=status`.
- Les détails sont accessibles au clavier et ouverts pour l’impression.
- Les tableaux possèdent un caption et une version mobile en listes de
  définitions via le composant existant.
- Les trois SVG possèdent chacun `<title>`, `<desc>` et `role=img` ; aucun ne
  promet un gain, un prix ou une performance.
- Aucun lien de téléchargement XLS, XLSX ou CSV n’est exposé.
- L’atelier n’appelle ni réseau, ni stockage navigateur ; son dossier reste
  local à la page.

## 10. Mesure de lecture et BAT P1

Le script officiel `scripts/measure-guide-readtime.mjs` a mesuré **3 959 mots,
soit 20 minutes à 200 mots/minute**, sur la route servie localement par le build
de production le 5 août 2026. Le test statique impose au moins 3 800 mots et
vérifie que l’arrondi correspond à `readTimeMin: 20`. Toute passe qui modifie le
corps doit re-servir la page, remesurer et actualiser cette valeur.

Après enrichissement P2, le même script exécuté sur le build de production servi
localement a mesuré **4 420 mots, soit 22 minutes à 200 mots/minute**. Le
`readTimeMin` et son test de cohérence ont été mis à jour uniquement après cette
mesure.

Le BAT Chrome du snapshot P1 initial a précédé la reprise corrective du modèle
et n’est donc pas revendiqué comme preuve du manifeste régénéré. L’orchestrateur
doit rejouer le rendu réel sur ce snapshot avant de prononcer G1. Le BAT
transversal final devra ensuite couvrir toutes les largeurs, zoom/reflow,
thèmes, PDF, accessibilité et liens après intégration.

## 11. Fichiers propres à la passe

```text
docs/research/airtable-notion-ou-application-metier.md
docs/research/manifests/airtable-notion-ou-application-metier-p1.sha256
src/app/guides/airtable-notion-ou-application-metier/guide-data.ts
src/app/guides/airtable-notion-ou-application-metier/page.tsx
src/app/guides/airtable-notion-ou-application-metier/opengraph-image.tsx
src/app/guides/airtable-notion-ou-application-metier/airtable-notion-decision-model.ts
src/app/guides/airtable-notion-ou-application-metier/airtable-notion-decision-model.test.ts
src/app/guides/airtable-notion-ou-application-metier/airtable-notion-decision-workbench.tsx
src/app/guides/airtable-notion-ou-application-metier/airtable-notion-decision-workbench.test.tsx
src/app/guides/airtable-notion-ou-application-metier/content-quality.test.ts
public/guides/airtable-notion-ou-application-metier/article-airtable-notion-16x9.svg
public/guides/airtable-notion-ou-application-metier/article-airtable-notion-4x3.svg
public/guides/airtable-notion-ou-application-metier/article-airtable-notion-1x1.svg
```

Le manifeste final couvrira douze fichiers : le dossier de recherche, les huit
fichiers de route et les trois SVG. Il exclura le P0 immuable et le manifeste
lui-même.

## 12. Rapport P1 — Création complète

### Reprise corrective G1 — 5 août 2026

- le moteur ne déduit plus la cause d’un échec à partir de la dimension ;
- chaque contrôle en échec exige une attribution explicite entre gouvernance
  remédiable et limite de plateforme reproduite ; une cause non qualifiée
  maintient le STOP ;
- les diagnostics HYBRID et EXIT_PROGRESSIVELY conservent séparément les
  défauts de gouvernance coexistants et leur action de fermeture ;
- le dossier copiable inscrit la cause retenue pour chaque contrôle en échec ;
- les cas droits/exports, les échecs mixtes et les causes sans effet sur un
  contrôle satisfaisant sont couverts par des tests dédiés ;
- la date de mise à jour Airtable snapshots, les liens CNIL cloud et
  sous-traitance, la source Notion sur l’export des relations, les périmètres de
  plans des droits Airtable/Notion et les deux limites API Notion ont été
  revalidés sur leurs pages officielles courantes.

### Résultat éditorial

- réponse utile immédiatement, sans migration imposée ;
- comparaison par centre de gravité, pas par catalogue de fonctions ;
- douze contrôles organisationnels et cinq issues transparentes ;
- cinq exemples fictifs contradictoires, dont deux maintiens gagnants ;
- droits, visibilité, intégrité, concurrence, quotas, erreurs, hors-ligne,
  historique, export, résidence, RGPD, sauvegardes et rollback couverts ;
- contradiction Airtable historique Business visible ;
- FAQ visible sans schema FAQ ;
- CTA borné : le premier échange peut conclure au maintien.

### Résultat technique au dernier point de contrôle

```text
Vitest ciblé : 51/51 verts (modèle, atelier, qualité éditoriale)
TypeScript : vert
ESLint ciblé : vert, zéro avertissement
Prettier : vert sur les formats pris en charge de la route et du dossier
XML SVG : 3/3 verts avec xmllint
git diff --check et allowlist slug-only : verts
Build Next 16.2.12 avec webpack : vert, 75/75 pages générées, route statique présente
Mesure servie après build : 3 959 mots / 20 min
```

### Arrêts opérationnels

- aucun commit, push, merge, déploiement ou publication autorisé en P1 ;
- aucune date de publication ou modification inventée ;
- aucun readTime inscrit avant mesure servie ;
- aucun fichier partagé modifié ;
- P2 reste bloquée jusqu’au verdict explicite de l’orchestrateur.

### STOP release partagé — dépendances

Le **5 août 2026**, `npm audit --omit=dev` exécuté sur la base courante signale
**6 vulnérabilités : 5 modérées et 1 haute**. Elles se situent dans les chaînes
partagées Next/PostCSS et Wrangler/undici, hors du périmètre slug-only de cette
reprise. Elles constituent un **STOP release partagé** jusqu’à une correction
coordonnée suivie d’une nouvelle validation globale.

Aucun `npm audit fix --force` n’a été lancé : la commande proposée installerait
notamment une version de Next hors de la plage déclarée et une version majeure
différente de la chaîne Cloudflare. Aucun fichier de dépendances, `package.json`
ou lockfile n’a été modifié en P1.

## 13. Rapports ultérieurs

### Rapport P2 — Enrichissement et vérification

Autorisé par le verdict `GO_PASSE_2` du contrôle G1 ci-dessous. La passe a été
réalisée par l’agent distinct `/root/airtable_notion_p2`, sans modification du
P0, du manifeste P1, du registre, des verrous ou d’un fichier partagé.

#### Audit systématique des 29 familles

| #   | Famille contrôlée                                          | Verdict P2            | Preuve ou action retenue                                                                                                     |
| --- | ---------------------------------------------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 01  | Airtable — centre de gravité et fonctions                  | VÉRIFIÉ               | Comparaison bornée aux bases, enregistrements, vues, formulaires, interfaces et automatisations ; aucun classement absolu.   |
| 02  | Airtable — plans, capacité, stockage, appels et historique | NUANCÉ                | Vue des plans relue ; valeurs non nécessaires laissées hors article ; contradiction Business 1 an/2 ans conservée.           |
| 03  | Airtable — permissions, visibilité et configuration        | VÉRIFIÉ               | Team/Business/Enterprise Scale ; édition distinguée de visibilité et configuration de champ.                                 |
| 04  | Airtable — modèle, intégrité et concurrence                | VÉRIFIÉ PAR PROTOCOLE | Aucune garantie générique attribuée ; unicité, relations et écritures simultanées doivent être reproduites sur le workspace. |
| 05  | Airtable — automatisations, exécutions et erreurs          | VÉRIFIÉ               | Un déclenchement compte même si l’action échoue ; quotas de plan datés mais non transformés en capacité métier.              |
| 06  | Airtable — API, quotas, débit et reprise                   | ENRICHI               | 5 req/s/base, 50 req/s/identité technique et attente 30 s après 429 ajoutés avec date et portée.                             |
| 07  | Airtable — mobile et hors-ligne                            | VÉRIFIÉ               | Internet requis ; aucune promesse de fonctionnement hors connexion.                                                          |
| 08  | Airtable — snapshots et restauration                       | NUANCÉ                | Nouvelle base, nouvel app ID, historique non emporté ; contradiction officielle non arbitrée.                                |
| 09  | Airtable — export, réimport et réversibilité               | VÉRIFIÉ               | CSV table par table, pièces jointes séparées et contenus exclus ; import de contrôle exigé.                                  |
| 10  | Airtable — résidence et transferts                         | NUANCÉ                | Enterprise Scale et données au repos couvertes distingués des métadonnées et traitements hors région.                        |
| 11  | Airtable — DPA, sous-traitants et sécurité                 | ENRICHI               | DPA public, condition d’exécution valable, liste de sous-traitants et notifications ajoutés sans conclure à la conformité.   |
| 12  | Notion — centre de gravité et fonctions                    | VÉRIFIÉ               | Pages, blocs, connaissance, collaboration et bases ; usage transactionnel soumis aux tests d’intégrité.                      |
| 13  | Notion — plans et disponibilité des fonctions              | NUANCÉ                | Droits de pages de base et automations bornés aux plans documentés ; contrat réel à vérifier.                                |
| 14  | Notion — partage, visibilité et permissions                | VÉRIFIÉ               | Accès le plus large, teamspaces, invités et règles de pages Business/Enterprise explicités.                                  |
| 15  | Notion — relations, intégrité et concurrence               | VÉRIFIÉ PAR PROTOCOLE | Relations CSV non restaurables et écritures concurrentes testées sans inventer de garantie produit.                          |
| 16  | Notion — automatisations et autorisations                  | VÉRIFIÉ               | Plans payants, absence de chaînage entre automations et exclusion possible des pages restreintes.                            |
| 17  | Notion — API, payload, erreurs et reprise                  | ENRICHI               | Deux limites distinguées, 1 000 blocs/500 Ko, 429/529, `Retry-After`, recul avec aléa, tentatives bornées et idempotence.    |
| 18  | Notion — mobile, hors-ligne et conflits                    | ENRICHI               | Apps seulement, pas navigateur ; sous-pages séparées, 50 lignes de première vue et conflits non textuels bornés.             |
| 19  | Notion — historique, restauration et audit                 | NUANCÉ                | Fenêtres par plan et restauration page par page conservées ; aucune disponibilité d’audit générique promise.                 |
| 20  | Notion — export, réimport et réversibilité                 | VÉRIFIÉ               | HTML/PDF/Markdown/CSV distingués ; relations exportées comme URL non restaurées automatiquement.                             |
| 21  | Notion — résidence et transferts                           | NUANCÉ                | Option Enterprise, données au repos et exclusions distinguées ; aucun raccourci « Europe = conforme ».                       |
| 22  | Notion — DPA, sous-traitants et sécurité                   | ENRICHI               | DPA et liste publique ajoutés ; version incorporée, services activés et chaîne réelle restent à vérifier.                    |
| 23  | RGPD — rôles, article 28 et contrat                        | VÉRIFIÉ               | EUR-Lex, CNIL et DPA éditeurs croisés ; page publique distinguée de la preuve contractuelle.                                 |
| 24  | Sécurité, sauvegardes, PCA et PRA                          | VÉRIFIÉ               | Responsabilité client, copies isolées et restauration testée ; sauvegarde fournisseur ≠ reprise métier.                      |
| 25  | Dépendances, propriété et relève                           | VÉRIFIÉ               | Comptes, identités, secrets, procédures et exercice sans créateur restent des preuves obligatoires.                          |
| 26  | Migration, coexistence et retour arrière                   | VÉRIFIÉ               | Sources de vérité, identifiants, rejets, recette, signatures, extinction conditionnelle et rollback couverts.                |
| 27  | Coûts, TCO et prix                                         | ENRICHI SANS PRIX     | Grille symétrique accès/mise en place/exploitation/incident-sortie ; chaque inconnue reste à vérifier, aucun tarif inventé.  |
| 28  | Moteur, saisies, cas limites et dossier copiable           | CORRIGÉ               | `mixed` + `not-needed` ferme désormais en STOP ; test ajouté ; zéro, entiers sûrs, causes et 12 champs inchangés.            |
| 29  | Cas fictifs, contre-exemples, limites et inconnues         | VÉRIFIÉ               | Cinq conclusions contradictoires, deux maintiens gagnants, aucun client réel ni bénéfice garanti ; STOP préservé.            |

Bilan : **29/29 familles contrôlées**, **0 P0 ouvert** et **0 P1 ouvert** dans
le périmètre propre. Les prix publics variables n’ont pas été recopiés : le
lecteur obtient une méthode TCO comparable sans valeur volatile présentée comme
universelle.

#### Modifications factuelles et fonctionnelles

- datation visible portée au 5 août 2026 après relecture des pages officielles ;
- API Airtable précisée au niveau base et identité technique, avec attente de
  trente secondes après dépassement du débit ;
- API Notion enrichie avec charge utile, file, tentatives bornées, recul avec
  aléa et garde-fou d’idempotence ;
- hors-ligne Notion borné aux applications, aux sous-pages, aux 50 premières
  lignes de la première vue d’une base et aux conflits non textuels ;
- DPA et listes de sous-traitants Airtable/Notion ajoutés, avec séparation entre
  texte public et preuve contractuelle applicable ;
- comparaison TCO symétrique ajoutée sans prix ni ROI fabriqués ;
- incohérence du moteur `none + mixed + not-needed` fermée par un STOP explicite
  et un test de non-régression ;
- marqueur explicite de brouillon privé ajouté dans la page afin que les
  contrôles structurels l’excluent du sitemap et des routes publiées avant
  intégration ;
- read time remesuré sur HTML servi, puis ajusté de 20 à 22 minutes.

#### Contrôles P2 avant gel

```text
Vitest propre et contrats de composants ciblés : 59/59 verts (5 fichiers)
TypeScript : vert
ESLint ciblé : vert, zéro avertissement
Prettier : vert après formatage mécanique
XML SVG : 3/3 verts
Suite SEO partagée : 185/186 ; seul rouge attendu = route locale explicite encore hors registre
Build Next 16.2.12 avec webpack : vert, 75/75 pages statiques
Route servie : HTTP 200, noindex/nofollow, canonical exacte
Lecture servie : 4 420 mots / 22 min
Liens officiels : 24/24 répondent HTTP 200 après redirections
BAT : 320, 360, 390, 430, 640, ≈768, 1 024, 1 280, 1 440 et 1 600 px sans overflow racine
Médias : 3/3 visibles ; H1 identique au headline ; 12 FAQ et 24 sources présentes
Thème sombre : couleurs appliquées, aucune régression ni overflow
FAQ enrichie : false → true → false au clic, réponse visible
Console : zéro warning/erreur
axe-core 4.11.0 via CLI 4.12.1 : 0 violation
```

Le navigateur intégré n’a pas transformé `Enter` ou `Espace` en événements
clavier lors du contrôle P2, limite déjà isolée en G1. Le composant FAQ n’a pas
été modifié ; son état au clic est vert, ses tests restent verts, et la preuve
Chrome native P1 sur `Tab`, `Entrée` et `Espace` demeure applicable au même
composant. Le contrôle transversal devra néanmoins rejouer le clavier natif sur
le snapshot final intégré.

#### Frontières maintenues

- le manifeste P1 reste immuable ; le manifeste P2 couvre un nouveau snapshot ;
- la date « mise à jour le 24 juillet 2026 » de la page snapshots vient du HTML
  officiel courant ; un ancien libellé d’index ne remplace pas cette page ;
- le STOP dépendances partagé de six vulnérabilités reste hors périmètre ;
- l’unique attente partagée restante exige que le registre ne contienne aucun
  brouillon local non intégré ; la route est bien reconnue `explicitLocalDraft:
true`, absente du sitemap et hors des routes publiées ;
- aucun commit, push, merge, déploiement, publication ou indexation n’a été
  réalisé ou revendiqué.

### Rapport P3 — Polish rédactionnel

Passe autorisée par le verdict `GO_PASSE_3` du contrôle G2 et exécutée par
l’agent distinct `/root/airtable_notion_p3`. Verdict de passe :
`PASSE_3_TERMINEE`, soumis à la porte G3. Ce verdict n’autorise ni P4, ni
intégration, ni publication.

#### Intégrité d’entrée et périmètre

- manifeste P2 vérifié **12/12** avant toute mutation ; empreinte externe
  `bbd3da2456f61de4116da8d80113c491d6f5afc62d617998bafae3ae5621b89d` ;
- empreinte du manifeste P1 inchangée :
  `c5380585dd56f8925d3780ac15f0cc3c9cbb9702e9da89919482d109d959f635` ;
- empreinte du gel P0 inchangée :
  `a50fa14e5206a57b1e4602abc815f2224e0f5ff034a96b3427d070c984c846eb` ;
- mutations limitées au dossier de travail, à la page, à ses données et à son
  test qualité ; aucun moteur, atelier, média, image OG, fichier partagé,
  registre, verrou, dépendance ou lockfile modifié ;
- aucun fait nouveau introduit et aucune source volatile réinterprétée pendant
  cette passe rédactionnelle.

#### Travail éditorial

- fermeture de la concaténation visible après « entièrement fictifs » et ajout
  d’un contrat de non-régression sur les frontières de balises en ligne ;
- réponse directe, CTA, FAQ et cinq issues rendus plus naturels, sans pousser le
  sur-mesure et sans retirer les deux conclusions de maintien ;
- paragraphes denses scindés autour des droits Notion, du hors-ligne, des API,
  des DPA, de la restauration et de la qualification d’un échec ;
- transitions spécifiques ajoutées entre urgence, comparaison, test terrain,
  droits, automatisations, sortie et cas contradictoires ;
- termes susceptibles d’être opaques expliqués dans leur contexte : système qui
  fait foi, gouvernance, tests d’acceptation ou « recette », réversibilité ;
- formulations administratives ou artificielles remplacées, sans simplifier la
  portée factuelle ;
- contrat du H1 renforcé : texte rendu, libellé accessible, métadonnée, titre du
  brouillon et `Article.headline` doivent rester identiques ;
- temps de lecture ajusté uniquement après mesure du HTML servi : **4 656 mots,
  23 min**.

#### Garde-fous P2 préservés

Les **29/29 familles factuelles** restent couvertes. Sont notamment inchangés :

- la contradiction Airtable Business **un an / deux ans**, sans arbitrage ;
- les deux limites API Notion, les réponses 429/529, `Retry-After`, les charges
  de 1 000 blocs / 500 Ko, les tentatives bornées et l’idempotence ;
- le hors-ligne Notion borné aux applications, aux sous-pages et aux 50
  premières lignes de la première vue, face à l’absence de hors-ligne Airtable ;
- la distinction entre DPA public et contrat opposable, ainsi qu’entre résidence
  de données et conformité RGPD ;
- la grille TCO sans prix, seuil, ROI ou date inventés ;
- les cinq issues, les cinq cas contradictoires et les deux conclusions
  `CONSERVER` ;
- `zéro ≠ inconnu`, l’inconnue critique en STOP, l’échec sans cause qualifiée en
  STOP et la contradiction `none + mixed + not-needed` en STOP ;
- les douze dimensions, les douze champs de sortie, `noindex, nofollow` et un
  JSON-LD limité à `Article` et `BreadcrumbList` sans date fabriquée.

#### Contrôles après la dernière mutation applicative

```text
Vitest propre et contrats partagés : 82/82 verts (8 fichiers)
TypeScript : vert
ESLint ciblé : vert, zéro avertissement
Prettier : vert après formatage mécanique
XML SVG : 3/3 verts
Suite SEO partagée : 185/186 ; seul rouge attendu = brouillon local explicite hors registre
Build direct Next 16.2.12 avec webpack : vert, 75/75 pages statiques
Route servie : HTTP 200, canonical exacte, noindex/nofollow
Lecture servie après rebuild : 4 656 mots / 23 min
HTML rendu : zéro concaténation aux frontières a/strong/em et zéro « fictifset »
DOM : 1 H1 identique à Article.headline, 0 ID dupliqué, 0 relation ARIA cassée
JSON-LD : Article + BreadcrumbList seulement, aucune date de publication/modification
BAT : 320, 360, 390, 430, 640, 768, 1 024, 1 280, 1 440 et 1 600 px, zéro overflow racine
Médias : 3/3 chargés et inspectés ; clair, sombre, tables, CTA et FAQ contrôlés
Atelier : douze preuves contrôlées + trois zéros → Conserver Airtable
Atelier contradictoire : aucun outil + processus mixte + frontière inutile → Décision suspendue
Console : zéro warning/erreur ; réseau : zéro requête échouée
axe-core 4.11.0 : 0 violation en clair et 0 en sombre
```

axe a laissé en vérification manuelle le contraste de 103 nœuds en clair et 94
en sombre ; les vues 320, 390 et 1 440 px ont été inspectées visuellement sans
défaut bloquant observé. Le navigateur intégré n’a pas transmis `Tab`, `Entrée`
ou `Espace` : le focus est resté sur `BODY` et les touches n’ont pas modifié la
FAQ, alors que le clic conserve correctement `aria-expanded` et la visibilité
du panneau. Cette limite d’outil n’est pas présentée comme une preuve clavier ;
le parcours natif déjà vert au contrôle G2 doit être rejoué à la porte G3 si
l’orchestrateur exige une preuve post-P3.

La batterie SEO partagée reste volontairement à **185/186** : le seul échec
attend `localDrafts=[]`, alors que cette route est explicitement privée et hors
registre. `npm audit --omit=dev` reproduit **6 vulnérabilités partagées : 5
modérées et 1 haute** dans les chaînes Next/PostCSS et Wrangler/undici. Aucun
`npm audit fix --force` n’a été exécuté.

Le manifeste P3 est créé après ce rapport sur les mêmes douze chemins que P2.
Son empreinte externe est remise à l’orchestrateur hors du journal pour éviter
toute référence circulaire. Aucun commit, push, merge, déploiement, publication
ou indexation n’est réalisé ou revendiqué.

#### Reprise ciblée après `NO_GO_PASSE_3` G3 — pédagogie et jargon

Le contrôle orchestrateur G3 a rejeté le premier snapshot P3 pour un seul axe :
la compréhension autonome par une lectrice ou un lecteur non technique. Avant
toute nouvelle mutation, son manifeste a été revérifié **12/12** avec
l’empreinte externe
`447ec1cb3ca394b7910bbde05676052eb46c54dbe37b94f730e987dd4827d39b`.
Les preuves factuelles, fonctionnelles et de rendu étaient vertes ; la reprise
a donc été strictement limitée à la pédagogie du texte, à son contrat de test,
au temps de lecture et au présent journal.

La page définit désormais, dès leur premier emploi utile :

- l’interface de programmation (`API`) et l’espace de travail (`workspace`) ;
- les notifications automatiques entre services (`webhooks`) ;
- l’instruction `Retry-After`, puis l’attente progressive avec léger décalage
  qui évite des reprises simultanées ;
- le fichier tabulaire de données brutes (`CSV`) et les copies instantanées
  (`snapshots`) ;
- l’addendum contractuel de traitement des données (`DPA`) et le règlement
  général sur la protection des données (`RGPD`) ;
- le logiciel fourni comme un service en ligne (`SaaS`) ;
- les intégrations de ressources humaines, sans abréviation `RH` isolée.

L’idempotence n’est plus demandée comme un mot de passe technique : le critère
dit maintenant que rejouer la même demande ne doit pas produire un second
effet, ou que le doublon doit être détecté explicitement. Un nouveau test
bloquant parcourt le texte rendu dans l’ordre, impose ces définitions au premier
emploi et refuse notamment `RH`, « Idempotence » ou « recul exponentiel et aléa »
sans explication. Les faits, les **29/29 familles**, le moteur de décision et
l’atelier sont restés inchangés. La mesure du dernier HTML servi porte le texte
à **4 752 mots, 24 min**.

Contrôles rejoués après la dernière mutation applicative :

```text
Vitest propre et contrats partagés : 83/83 verts (8 fichiers)
TypeScript : vert
ESLint ciblé : vert, zéro avertissement
Prettier : vert après formatage mécanique
XML SVG : 3/3 verts ; git diff --check : vert
Suite SEO partagée : 185/186 ; seul rouge attendu = brouillon local explicite hors registre
Build direct Next 16.2.12 avec webpack : vert, 75/75 pages statiques
Lecture servie après rebuild : 4 752 mots / 24 min
HTML rendu : zéro concaténation aux frontières de balises en ligne
BAT critique : 320, 390, 768 et 1 440 px, zéro overflow racine
Thème sombre : actif à 390 px, sans overflow
FAQ : clic, Entrée et Espace natifs Chrome verts, focus conservé sur le bouton
Console : zéro warning/erreur ; réseau : zéro échec et zéro statut anormal
```

Deux tentatives d’injection d’axe-core sur ce snapshot exact ont été interrompues
par la perte de connexion à Chrome. Le premier snapshot P3 avait obtenu zéro
violation axe en clair et en sombre, mais cette ancienne mesure n’est pas
présentée comme une preuve du nouveau snapshot. État axe exact : **À REJOUER
G3**. Les inspections visuelles finales des passages modifiés, en particulier
`webhooks`, `Retry-After`, `CSV`, `snapshots` et le titre `DPA`, ne montrent ni
débordement ni rupture de lecture.

Verdict de reprise : `PASSE_3_TERMINEE_APRES_REPRISE_G3`, de nouveau soumis à
G3. Il n’autorise toujours ni P4, ni intégration, ni publication. Le nouveau
manifeste P3 est régénéré en dernier sur les mêmes douze chemins ; son empreinte
externe est remise hors du journal. Les frontières SEO, registre, audit partagé,
commit, push, merge, déploiement, publication et indexation restent inchangées.

### Rapport P4 — Antipasse IA

#### Audit, reprise et conservation du fond

La passe 4 a commencé après le `GO_PASSE_4`, sur le manifeste P3 dont
l’empreinte externe est
`96174ef4c0b7f9a563e4ed1b93ffb591a4c63945e2ea6aa96501224df1d68a7e`.
Deux relectures distinctes, en lecture seule, ont couvert respectivement le
héros et les H2 01 à 05, puis les H2 06 à 09, la FAQ et le CTA. Le pré-score
global était **MIXTE, environ 17,8/20** : le guide restait très utile, mais
quelques formulations techniques, symétries et transitions pouvaient encore
donner une impression mécanique. La cible estimée après reprise est
**19/20**.

Un P1 logique a été détecté puis corrigé dans l’exemple fictif 1. Le cas ne
reproduit aucune limite structurelle : il ne peut donc pas suggérer qu’une
application sur mesure résoudrait le problème observé. Il conclut désormais
explicitement que construire ajouterait du coût sans corriger ce problème.

La reprise a également supprimé l’absolu « La plupart des incidents », rendu
concrets les termes « transformations déterministes », « données de delta »,
« fenêtre tolérée » et « remédiation raisonnable », borné les inconnues, puis
allégé quelques connecteurs et parallélismes. Une statistique ambiguë du héros
a été reformulée. Les faits et chiffres vérifiés, le moteur, les douze
contrôles, les cinq issues, les cinq cas contradictoires et les protections
`zéro ≠ inconnu` sont restés inchangés.

#### Lecture antipasse après correction

| Zone  | Statut | Motif de classement                                                |
| ----- | ------ | ------------------------------------------------------------------ |
| Héros | HUMAN  | Réponse immédiate, réserve explicite et aucune promesse absolue    |
| H2 01 | HUMAN  | Décision ancrée dans les cas difficiles du lecteur                 |
| H2 02 | HUMAN  | Comparaison nuancée, sans vainqueur artificiel                     |
| H2 03 | MIXTE  | Densité méthodique assumée pour rendre le test reproductible       |
| H2 04 | HUMAN  | Risque concret, droits et responsabilités reliés au processus      |
| H2 05 | HUMAN  | Échecs et reprise décrits par comportements observables            |
| H2 06 | HUMAN  | Export, restauration et continuité distingués sans raccourci       |
| H2 07 | HUMAN  | Cinq cas fictifs contradictoires ; P1 logique refermé              |
| H2 08 | MIXTE  | Structure volontairement dense pour préparer une sortie réversible |
| H2 09 | HUMAN  | Plan d’action daté et réalisable avant tout devis                  |
| FAQ   | HUMAN  | Réponses directes, bornées et cohérentes avec le corps             |
| CTA   | HUMAN  | Proposition d’examen du processus, sans migration imposée          |

Aucun H2 n’est classé `IA`. Les deux zones `MIXTE` le sont pour leur densité
fonctionnelle, pas pour une accumulation de formules génériques. L’estimation
post-correction reste **19/20**, à confirmer exclusivement par G4.

#### Preuves produites pendant la passe 4

Les éléments suivants ont été obtenus par l’agent P4 et sont consignés comme
ses preuves ; le finisseur documentaire ne les présente pas comme ses propres
replays :

- BAT aux dix largeurs de **320 à 1 600 px**, sans débordement, en clair et en
  sombre ; trois SVG chargés aux dimensions 1 600 × 900, 1 200 × 900 et
  1 000 × 1 000 ;
- atelier exercé jusqu’à « Conserver Airtable », puis jusqu’au STOP du cas
  contradictoire ; HTML, JSON-LD, console et réseau verts ; axe CLI à zéro ;
- Chrome système 151 au clavier natif à 320, 390, 768 et 1 600 px : skip-link
  visible avec contour de 2 px, `Entrée` vers `MAIN`, CTA atteint et visible,
  FAQ `false → true → false` avec focus conservé ; axe à zéro en clair et en
  sombre après transition, plus contrôle manuel du contraste ;
- PDF A4 inspecté sur **43/43 pages**, 1 992 lignes et 9 056 mots, trois SVG,
  sans clipping ni chevauchement ; grille des douze champs et dossier
  développés, neuf H2, douze FAQ de contenu, sources, action et dossier
  présents. Les douze FAQ éditoriales et trois contrôles de catégorie
  expliquent l’ancien total DOM de quinze éléments apparentés à la FAQ.

Le finisseur a seulement vérifié le périmètre et le gel documentaire :
`git diff --check` est vert, les deux seules mutations applicatives P3 → P4
sont la page et son test qualité, et ce test ciblé repasse **20/20**. Il n’a
modifié aucun contenu, relancé aucun build, navigateur, audit axe ou PDF.

#### Frontières et verdict P4

Le défaut P2 partagé d’impression reste ouvert et visible : le PDF conserve le
formulaire et le pied de page commerciaux globaux sur les pages 40 à 43. Il ne
relève pas du périmètre slug-only et ne doit pas être masqué. Le seul rouge SEO
attendu demeure `localDrafts=[]` tant que le guide reste un brouillon local hors
registre. L’audit de dépendances reste lui aussi une frontière partagée. Rien
ici ne prouve un commit, un push, un déploiement, une publication ou une
indexation.

Estimation en sortie de passe : **P0 = 0, P1 résiduel = 0, P2 partagé = 1**
(impression commerciale globale). Avant tout `GO_CONTROLE_QUALITE`,
l’orchestrateur doit vérifier le manifeste P4 exact et rejouer au minimum les
tests, le build, la batterie SEO, le HTML/JSON-LD, axe, le parcours clavier
natif, le BAT multi-largeur et le contrôle PDF qu’il juge requis.

Verdict borné : `PASSE_4_TERMINEE_A_CONTROLER`. Il n’autorise ni contrôle
transversal, ni intégration, ni publication tant que G4 n’a pas rendu un GO
indépendant sur ce snapshot exact.

## 14. Contrôle orchestrateur G1 — snapshot P1

### Preuves rejouées le 5 août 2026

- manifeste P1 vérifié **12/12** ; son empreinte externe est consignée hors du
  périmètre qu’il couvre afin d’éviter toute référence circulaire ;
- Vitest ciblé **51/51**, TypeScript, ESLint, Prettier, XML des trois SVG et
  `git diff --check` verts ;
- compilation directe Next 16.2.12 avec webpack verte, **75/75** pages
  statiques et route du guide générée ;
- les trois SVG ont été rendus puis inspectés visuellement ; leurs dimensions
  intrinsèques servies sont 1 600 × 900, 1 200 × 900 et 1 000 × 1 000 ;
- rendu réel contrôlé aux largeurs CSS **320, 360, 390, 430, 640, 768, 1 024,
  1 280, 1 440 et 1 600 px**, sans débordement horizontal ;
- héros et CTA inspectés visuellement à 390 et 1 440 px ; thème sombre mobile
  sans débordement ;
- atelier exercé dans le navigateur : zéro est accepté comme valeur connue,
  les cinq issues attendues ont été atteintes (`STOP`, conserver, renforcer,
  hybride, sortir progressivement), et toute inconnue ou cause non qualifiée
  rétablit le STOP ;
- dossier local : **12/12** champs de sortie présents, cause de chaque échec
  incluse, copie presse-papiers confirmée et aucune transmission réseau ;
- métadonnées : un H1, titre et `Article.headline` identiques, canonique
  correcte, `noindex, nofollow`, JSON-LD limité à `Article` et
  `BreadcrumbList`, sans date inventée, `FAQPage` ni `HowTo` ;
- sémantique DOM : **12/12** sélecteurs de preuve, **12/12** champs de sortie,
  **12/12** boutons FAQ, zéro ID dupliqué, zéro relation `aria-controls` ou
  `aria-describedby` cassée ; le seul contrôle sans nom calculé est le
  honeypot global, retiré de l’arbre accessible et du parcours clavier ;
- console navigateur : zéro avertissement et zéro erreur ;
- axe-core 4.11.0 exécuté par le CLI 4.12.1 dans Chrome headless : **0
  violation** sur les règles WCAG 2 A/AA, 2.1 AA, 2.2 AA et bonnes pratiques.
- le contrôle visuel à 390 px a révélé puis fermé une ponctuation orpheline :
  l’espace insécable est désormais porté par `application métier :` ; le H1
  tient sur trois lignes, le deux-points reste avec le mot et le texte visible
  normalisé demeure identique au titre et à `Article.headline` ;
- la compilation directe, les **51/51** tests propres, axe 0 et la mesure
  **3 959 mots / 20 min** ont été rejoués après cette correction ; les 20 tests
  partagés de contrat d’accessibilité et de FAQ sont également verts.

### Frontières techniques connues

- `npm run build -- --webpack` complet s’arrête encore sur trois attentes
  partagées normales à ce stade : route absente du registre, du sitemap et de
  l’assertion d’absence de brouillon ; aucune correction partagée n’est
  autorisée pendant P1 ;
- `npm audit --omit=dev` reste le STOP release partagé documenté plus haut ;
- le navigateur intégré ne transmet pas les frappes `Tab`, `Entrée` ou
  `Espace` : le focus reste sur `BODY` et les boutons FAQ ne réagissent pas à
  l’injection clavier, alors que le clic et les états ARIA sont corrects. Cette
  limite de la première surface de test n’est plus utilisée comme preuve du
  comportement produit ;
- un vérificateur indépendant a reproduit le même résultat aux largeurs 320,
  390, 768 et 1 440 px avec les deux API documentées : `activeElement=BODY`
  après `Tab`. Il a rendu `NO_GO` pour la **preuve** clavier, sans attribuer ce
  défaut au produit, et s’est correctement arrêté quand la correction H1 a
  invalidé le manifeste qu’il avait gelé au démarrage ;
- après autorisation d’ouvrir une fenêtre dédiée, Chrome
  **151.0.7922.72** a fourni la preuve native sur le snapshot régénéré aux
  largeurs **320, 390, 768 et 1 440 px** : premier `Tab` sur « Aller au contenu
  principal », lien visible et contour orange plein de 2 px, `Entrée` vers
  `#main-content` avec focus sur `MAIN`, sans débordement horizontal ;
- à 320 px, le CTA « Décrire mon processus » est atteint au troisième `Tab`
  après `MAIN`, défilé dans le viewport et entouré d’un focus de 2 px ;
- à chacune des quatre largeurs, la deuxième question de FAQ passe de
  `aria-expanded=false` à `true` avec `Entrée`, puis de `true` à `false` avec
  `Espace`, en conservant le focus sur son bouton natif ;
- la console Chrome reste sans avertissement ni erreur après ces parcours.

### Verdict G1

`GO_PASSE_2` : le snapshot P1 satisfait le gel d’entrée, le contenu, le moteur
de décision, les sources, le build direct, le rendu multi-largeur, les données
structurées et l’accessibilité, y compris le parcours clavier natif. Les trois
attentes de registre/sitemap et le STOP dépendances restent des frontières
partagées de l’intégration et de la release, pas des défauts slug-only P1.

## 15. Contrôle orchestrateur G2 — snapshot P2

### Intégrité et périmètre

- manifeste P2 initial vérifié **12/12**, empreinte externe
  `d68705bc820c7fdf026509ca86eaf51714108424988f4adb7cbee7176740bb42` ;
- P0 inchangé, empreinte
  `a50fa14e5206a57b1e4602abc815f2224e0f5ff034a96b3427d070c984c846eb` ;
- manifeste P1 inchangé, empreinte externe
  `c5380585dd56f8925d3780ac15f0cc3c9cbb9702e9da89919482d109d959f635` ;
- six fichiers couverts ont changé depuis P1 : journal, `guide-data.ts`, page,
  moteur, test du moteur et test qualité ; le workbench, son test, l’image OG
  et les trois SVG sont restés identiques ;
- aucun fichier partagé, verrou, registre, fichier Git ou artefact de
  publication n’a été modifié pendant la passe.

### Preuves racine rejouées le 5 août 2026

- **73/73** tests propres et contrats partagés, TypeScript, ESLint, Prettier,
  XML des trois SVG et `git diff --check` verts ;
- batterie SEO **185/186** : le seul rouge est l’attente partagée explicite
  `localDrafts=[]`, alors que cette route est volontairement marquée
  `explicitLocalDraft: true` et absente du registre, du sitemap et des surfaces
  de découverte ;
- compilation directe Next 16.2.12 avec webpack verte, **75/75** pages
  statiques et route du guide générée ;
- HTML servi : HTTP 200, **4 420 mots / 22 min**, un H1, canonique exacte,
  `noindex, nofollow`, zéro ID dupliqué et zéro relation ARIA cassée ;
- JSON-LD limité à `Article` et `BreadcrumbList`, `Article.headline`
  identique au titre, sans `datePublished`, `dateModified`, `FAQPage` ou
  `HowTo` inventé ;
- les **24/24** liens officiels répondent HTTP 200 après redirection ; les
  faits volatils Airtable, Notion, CNIL et RGPD ont été recoupés sur les pages
  primaires courantes, dont les deux limites Notion, les réponses 429/529 et la
  date du 24 juillet 2026 de la page snapshots Airtable ;
- rendu P2 contrôlé sur les dix largeurs de 320 à 1 600 px, sans overflow,
  avec les trois médias visibles, le thème sombre, la FAQ et axe 0 ;
- Chrome 151 natif, après gel : premier `Tab` sur le skip-link visible avec
  contour plein de 2 px, `Entrée` vers `MAIN#main-content`, puis FAQ
  `false → true` avec `Entrée` et `true → false` avec `Espace`, focus
  conservé et aucun débordement racine ;
- atelier navigateur : trois quantités à zéro et douze preuves contrôlées
  concluent « Conserver Airtable » ; `none + mixed + not-needed` conclut
  désormais « Décision suspendue » avec la contradiction explicitée.

### Frontières de release

`npm audit --omit=dev` reproduit **6 vulnérabilités partagées : 5 modérées
et 1 haute** dans les chaînes Next/PostCSS et Wrangler/undici. Elles restent
un STOP de release à traiter ou lever sur la base d’intégration courante ;
aucun `npm audit fix --force` n’a été lancé. Les attentes partagées de registre,
sitemap et brouillon restent elles aussi hors du périmètre des passes.

### Verdict G2

`GO_PASSE_3` : les 29 familles sont couvertes, les enrichissements restent
bornés par des sources primaires ou des preuves à produire, le moteur ferme le
cas contradictoire détecté et aucun P0/P1 slug-only ne reste ouvert. Le polish
rédactionnel peut commencer sur ce snapshot ; il ne doit ni affaiblir les
garde-fous, ni transformer une inconnue en zéro, ni toucher aux fichiers
partagés.

## 16. Contrôle orchestrateur G3 — snapshot P3

### Boucle de reprise et intégrité

Le premier snapshot P3 a reçu `NO_GO_PASSE_3` sur un axe précis : plusieurs
termes techniques restaient compréhensibles pour une équipe produit, mais pas
autonomes pour une lectrice ou un lecteur non technique. Le même agent P3 a
repris uniquement la pédagogie, le contrat rédactionnel, le temps de lecture et
le présent journal. Il a défini au premier emploi utile `API`, `workspace`,
`webhooks`, `Retry-After`, `CSV`, `snapshots`, `DPA`, `RGPD` et `SaaS`, développé
les ressources humaines sans l’abréviation isolée `RH`, et remplacé le mot
« idempotence » par le comportement concret attendu lors d’un rejeu.

Avant le présent rapport, le manifeste P3 final a été vérifié **12/12** et son
empreinte externe était
`9fa3a57513da0c111601eaa1341ae8c87766f42bb0761b0f30b2aa6f9a4344fa`.
Le P0 reste inchangé à
`a50fa14e5206a57b1e4602abc815f2224e0f5ff034a96b3427d070c984c846eb`,
le manifeste P1 à
`c5380585dd56f8925d3780ac15f0cc3c9cbb9702e9da89919482d109d959f635`
et le manifeste P2 final à
`bbd3da2456f61de4116da8d80113c491d6f5afc62d617998bafae3ae5621b89d`.
Quatre fichiers couverts seulement ont changé entre P2 et P3 : page,
`guide-data.ts`, test de qualité et journal. Le moteur, le workbench, leurs
tests, l’image sociale et les trois SVG sont restés identiques. Aucun fichier
partagé ni verrou d’intégration n’a été touché.

### Preuves racine rejouées le 5 août 2026

- Vitest propre et contrats partagés : **84/84** verts sur huit fichiers ;
  TypeScript, ESLint ciblé, Prettier, XML des trois SVG et
  `git diff --check` verts ;
- compilation directe Next 16.2.12 avec webpack verte, **75/75** pages
  statiques ; mesure servie : **4 752 mots / 24 min** ;
- batterie SEO **185/186** : l’unique rouge reste l’attente partagée
  `localDrafts=[]`, normale pour ce brouillon local explicite hors registre ;
- route HTTP 200, un H1 identique au titre et à `Article.headline`, canonique
  exacte, `noindex, nofollow`, zéro ID dupliqué et zéro référence ARIA cassée ;
- JSON-LD limité à `Article` et `BreadcrumbList`, sans `datePublished`,
  `dateModified`, `FAQPage` ou `HowTo` inventé ;
- axe-core 4.11.0 via CLI 4.12.1 : **0 violation** ; second passage dans Chrome
  système, après activation réelle du thème, **0 violation en clair et 0 en
  sombre** sur WCAG 2 A/AA, 2.1 AA, 2.2 AA et bonnes pratiques ; le contraste
  demeure le contrôle manuel signalé par axe ;
- Chrome **151.0.7922.72** au clavier natif à **320, 390, 768 et 1 600 px** :
  premier `Tab` sur le skip-link visible avec contour plein de 2 px, `Entrée`
  vers `MAIN#main-content`, aucun débordement ; FAQ 02
  `false → true → false` avec `Entrée` puis `Espace`, focus conservé ;
- à 320 px, « Décrire mon processus » est atteint au troisième `Tab` après
  `MAIN`, défilé dans le viewport et entouré d’un contour plein de 2 px ;
- atelier réel : douze preuves contrôlées et trois quantités explicitement à
  zéro donnent « Conserver Airtable » ; `none + mixed + not-needed` donne
  « Décision suspendue » et affiche la contradiction ;
- les trois médias ont été chargés après défilement avec leurs dimensions
  intrinsèques 1 600 × 900, 1 200 × 900 et 1 000 × 1 000 ; console et réseau
  restent sans erreur ni requête échouée.

### Contrôle lecteur et protections conservées

La réponse est donnée dès l’ouverture, les neuf H2 restent autonomes et
orientés décision, les exemples fictifs sont annoncés comme tels, les
transitions relient les preuves au choix suivant et le CTA propose un examen du
processus sans imposer une migration. Les corrections de style n’ont affaibli
ni les limites Airtable/Notion, ni les réserves contractuelles, ni la grille de
coût total, ni les douze dimensions et douze champs de sortie, ni la règle
`zéro ≠ inconnu`. Une preuve critique absente, un échec sans cause qualifiée ou
le cas contradictoire continuent à produire un STOP.

`npm audit --omit=dev` et les attentes de registre/sitemap restent des
frontières partagées de la future intégration. Elles n’autorisent ni correction
forcée, ni publication pendant les passes slug-only.

### Verdict G3

`GO_PASSE_4` : le snapshot P3 final ne conserve aucun P0/P1 slug-only ouvert.
La passe antipasse IA peut commencer avec un quatrième agent distinct. Elle ne
peut ni modifier les faits protégés, ni affaiblir le moteur de décision, ni
toucher aux fichiers partagés. Le manifeste P3 est régénéré après ce rapport ;
son empreinte externe finale est consignée hors du journal pour éviter toute
référence circulaire.

## 17. Contrôle orchestrateur G4 — snapshot P4

### Intégrité, reprise et lecture antipasse

Avant le présent rapport, le manifeste P4 a été vérifié **12/12** et son
empreinte externe était
`0228eee2bd13dc1ca5f8551d7fbe6f5049ea8d0ea20e2f9d189f1b79ea266bfe`.
La comparaison binaire avec l’archive racine P3 confirme exactement trois
changements : le présent journal, la page et son test de qualité. Le moteur de
décision, l’atelier, leurs tests, les données, l’image sociale et les trois SVG
sont restés identiques. Aucun fichier partagé, verrou central, registre ou
artefact Git n’a été modifié pendant P4.

La reprise a fermé le P1 logique du premier cas fictif : puisqu’aucune limite de
plateforme n’y est reproduite, le sur-mesure ne peut plus être présenté comme
une réponse au problème observé. Elle a aussi supprimé les absolus, précisé les
termes techniques utiles, diversifié les constructions parallèles et rendu le
CTA plus naturel sans affaiblir les sources, réserves ou règles de STOP. La
relecture H2 par H2 aboutit à **19/20** : héros, H2 01, 02, 04 à 07, 09, FAQ et
CTA `HUMAN` ; H2 03 et 08 `MIXTE` uniquement pour leur densité méthodique
nécessaire ; aucun bloc `IA`.

### Preuves racine rejouées le 5 août 2026

- **96/97** tests ciblés et contrats partagés sont verts ; l’unique rouge est
  l’attente centrale `localDrafts=[]`, normale tant que cette route reste un
  brouillon local explicite. La batterie complète confirme **1 126/1 127** et
  la batterie SEO **185/186**, avec le même et seul échec ;
- TypeScript, ESLint ciblé, Prettier, XML des trois SVG et
  `git diff --check` sont verts ; compilation directe Next 16.2.12 avec webpack
  verte, **75/75** pages statiques ;
- mesure officielle sur le HTML servi : **4 841 mots / 24 min** ; HTTP 200 aux
  dix largeurs **320, 360, 390, 430, 640, 768, 1 024, 1 280, 1 440 et
  1 600 px**, un H1 et aucun débordement horizontal ;
- titre, H1 et `Article.headline` sont identiques ; canonique exacte,
  `noindex, nofollow`, neuf H2, douze questions éditoriales et trois contrôles
  de catégorie ; JSON-LD limité à `Article` et `BreadcrumbList`, sans date,
  `FAQPage` ni `HowTo` inventés ; aucun ID dupliqué ni relation
  `aria-controls` cassée ;
- les trois illustrations sont chargées en 1 600 × 900, 1 200 × 900 et
  1 000 × 1 000 ; console, erreurs de page, réseau et réponses locales restent
  sans anomalie ;
- axe-core est à **0 violation** en thème clair. Une première mesure lancée
  pendant la bascule de thème a capturé un état transitoire et signalé dix-sept
  contrastes ; elle a été rejetée. Un nouveau contexte Chrome sombre chargé
  directement, puis stabilisé 1,2 seconde, rend **0 violation** et les captures
  mobile/desktop confirment le contraste et la hiérarchie ;
- Chrome **151.0.7922.72**, au clavier natif à 320, 390, 768 et 1 600 px :
  premier `Tab` sur le skip-link visible avec contour plein de 2 px, `Entrée`
  vers `MAIN#main-content`, CTA atteint en trois ou quatre tabulations, visible
  avec contour de 2 px, FAQ 02 `false → true → false` avec `Entrée` puis
  `Espace` et focus conservé ;
- atelier réel : Airtable, douze preuves contrôlées et trois quantités
  explicitement à zéro donnent « Conserver Airtable » ; le triplet « aucun
  outil choisi, processus mixte, aucune frontière nécessaire » rend « Décision
  suspendue » et nomme la contradiction ;
- une impression A4 racine distincte a produit **32 pages**, **1 537 lignes**
  et **8 818 mots** extraits. Les 32 pages ont été rendues en images puis
  parcourues en planches, avec inspection détaillée du héros, du tableau, des
  douze contrôles, des douze champs, du dossier texte, des trois illustrations,
  des sources, de la FAQ et des dernières pages : aucun texte coupé,
  chevauchement ou média cassé.

### Frontières et verdict G4

Le PDF racine confirme le P2 partagé déjà déclaré : le CTA, le formulaire et le
pied de page commerciaux globaux restent imprimés sur les pages 29 à 32. Ce
défaut n’est pas imputable au slug et ne peut être corrigé sans fenêtre
d’intégration dédiée. `npm audit --omit=dev` retrouve aussi les **6
vulnérabilités partagées** documentées — 5 modérées et 1 haute dans les chaînes
Next/PostCSS et Wrangler/undici — sans lancer de correction forcée. Ces deux
points restent des réserves d’intégration/release visibles.

`GO_CONTROLE_QUALITE` : **P0 = 0, P1 = 0, P2 slug-only = 0**, score antipasse
**19/20**. Le contrôle transversal peut commencer avec un cinquième agent
distinct, exclusivement sur le manifeste P4 régénéré après ce rapport. Ce GO
n’autorise ni intégration, ni commit, ni push, ni déploiement, ni publication,
ni indexation.

## 18. Contrôle transversal indépendant Q

### Snapshot et verdict

Le cinquième agent distinct `/root/airtable_notion_q` a audité en lecture seule
le manifeste P4 final. Il l’a vérifié **12/12** au début et à la fin ; son
empreinte externe est restée exactement
`200a5e5f832c4dc0acd45a71c1386c84cb1b4cc58850ba91858018012193cb2e`.
Aucun fichier suivi n’a changé pendant son contrôle.

Verdict : `GO_QUALITE_GUIDE`, **95/100**, charte éditoriale **19/20**,
**P0 = 0, P1 = 0**. Les axes sont notés sur dix : intention/réponse 10,
valeur/pédagogie 10, moteur de décision 10, exactitude/sources 9,
clarté/antipasse IA 9, UX responsive 10, accessibilité 9, SEO/schémas 10,
médias 10, impression/frontières de release 8. Aucun axe critique n’est
inférieur à 8/10.

### Preuves indépendantes

- **86/86** tests sur huit fichiers, TypeScript, ESLint, Prettier, XML et
  `git diff --check` verts ; build Next avec webpack **75/75** et postbuild
  vert ; batterie SEO **185/186**, uniquement rouge sur `localDrafts=[]` avant
  l’intégration du slug ;
- audit de contenu rendu : 5 898 mots dans le périmètre large du DOM, neuf H2,
  dix H3, six tableaux, trois figures et douze FAQ. La mesure officielle du
  temps de lecture reste celle de l’article hors composants exclus : **4 841
  mots / 24 min** ;
- les **24/24** URL primaires Airtable, Notion, CNIL et EUR-Lex répondent HTTP
  200, y compris l’article 28 du RGPD. Les faits et leurs portées concordent ;
  la contradiction publique Airtable sur l’historique Business — un an dans
  la vue des plans, deux ans dans la page des copies instantanées — reste
  visible au lieu d’être arbitrairement tranchée ;
- rendu aux dix largeurs de 320 à 1 600 px sans débordement, en clair et en
  sombre, sans avertissement ni erreur de console ; trois SVG aux dimensions
  natives, image sociale HTTP 200 et axe **0 violation** dans les deux thèmes ;
- Chrome 151 natif à 320, 390, 768 et 1 600 px : skip-link visible au premier
  `Tab`, `Entrée` vers `MAIN`, CTA atteint au clavier avec contour de 2 px, FAQ
  ouverte puis refermée avec `Entrée` et `Espace`, focus conservé ; arbre
  d’accessibilité de 4 395 nœuds, 125 éléments interactifs et aucun nom vide ;
- moteur rejoué : les valeurs numériques zéro restent connues, douze preuves
  contrôlées donnent « Conserver Airtable », un seul échec non qualifié remet
  la décision en suspens ;
- JSON-LD limité à `Article` et `BreadcrumbList`, H1 et `headline` identiques,
  canonique correcte, `noindex, nofollow` tant que le guide reste local, aucune
  date inventée et aucun `FAQPage` abusif ;
- PDF A4 indépendant de **43 pages**, article et FAQ lisibles sans coupe. Il
  confirme que les commandes propres à l’atelier sont masquées à l’impression.

### Réserves et frontière d’intégration

Deux P2 partagés restent ouverts et visibles. Le PDF ajoute environ quatre
pages de contact, formulaire et pied de page globaux après la FAQ. L’audit des
dépendances retrouve 5 vulnérabilités modérées et 1 haute dans les chaînes
PostCSS/undici via Next, OpenNext, Miniflare et Wrangler ; les correctifs
proposés impliquent notamment une montée majeure, donc aucun `fix --force` n’a
été lancé.

La présente mise à jour referme le seul P3 documentaire relevé par Q : la ligne
de synthèse de P4 n’annonce plus un G4 « attendu » après sa validation. À la
publication réelle, il faudra encore revalider les plans, permissions, API,
hors-ligne, exports, copies instantanées, résidence, DPA et sous-traitants
Airtable/Notion, les pages CNIL/EUR-Lex et les mentions globales du studio.

Ce `GO_QUALITE_GUIDE` autorise uniquement le passage à
`PRET_A_INTEGRER`. Sous mutex central, l’intégrateur devra ajouter le guide au
registre et au hub, traiter redirection et maillage, fixer les dates au snapshot
réellement déployé, retirer le `noindex` uniquement avec la publication, puis
rejouer batterie globale, build, BAT intégré, audit release et preuve publique.

## 19. Intégration centrale — candidat de release

### Périmètre intégré sous mutex

Le mutex central a été acquis atomiquement le 5 août 2026 à 21 h 37 min 23 s
(Europe/Paris). Le guide est désormais déclaré dans le registre public des
guides, reçoit son icône dans le hub et un lien entrant contextuel depuis le
comparatif Power Apps. Les métadonnées et les données structurées proviennent
du registre central : le H1 et `Article.headline` restent identiques, le
canonique vise l’URL du guide, `Article.articleSection` est renseigné et les
dates sont fixées au candidat d’intégration du 5 août 2026 à 21 h 41 min 54 s.
La route n’émet plus le contrat de brouillon local ni `noindex` dans le build de
production.

Le P2 d’impression constaté en P4 et en Q est fermé dans le composant partagé
`GuidesShell` : navigation, formulaire/contact et pied de page portent une
classe dédiée, masquée uniquement sous `@media print`. Un test de contrat
vérifie la présence des deux exclusions et de la règle CSS. L’article, ses
tableaux, figures, FAQ, sources et dossier de sortie restent imprimables.

Le correctif compatible de PostCSS a été appliqué de 8.5.20 à 8.5.25 dans
l’override et le verrou npm. `npm audit --omit=dev` passe ainsi de six à quatre
vulnérabilités : trois modérées et une haute, toutes dans la chaîne partagée
OpenNext → Wrangler → Miniflare → undici. Au 5 août 2026, la version compatible
de Miniflare continue d’installer undici 7.28.0, tandis que la borne corrigée
publiée de la branche 7 est undici 7.29.0. Aucun override Undici non validé,
aucune montée majeure, rétrogradation ou correction forcée n’ont donc été
imposés dans cette livraison. Ce reliquat demeure un P2 dépendances borné, pas
un défaut propre au guide.

### Preuves intégrées rejouées par l’orchestrateur

- **1 130/1 130** tests sur 115 fichiers et **187/187** contrôles SEO de
  production sont verts ; TypeScript, ESLint, Prettier sur les fichiers TS/TSX
  touchés et le hunk CSS ajouté, ainsi que `git diff --check`, sont verts. Les
  quatre blocs CSS hérités signalés par Prettier sont identiques au `HEAD` et
  restent hors du hunk d’impression ;
- build Next 16.2.12 avec webpack vert, **75/75** pages statiques, puis
  postbuild vert : 50 URL dans robots/sitemap/LLM, 33 liens LLM, 50 pages,
  17 temps de lecture et 88 blocs JSON-LD ;
- route de production locale indexable, titre, H1, canonique, robots,
  Open Graph et deux graphes JSON-LD contrôlés ; `Article` reprend exactement
  le H1, les dates et la section du registre ;
- BAT réel aux dix largeurs 320, 360, 390, 430, 640, 768, 1 024, 1 280,
  1 440 et 1 600 px : aucun débordement, trois SVG visibles avec alternative,
  aucun nom accessible vide sur 128 éléments interactifs ;
- Chrome système 151 au clavier natif à 390 px : premier `Tab` sur le
  skip-link visible, `Entrée` vers `MAIN#main-content`, CTA atteignable et FAQ
  ouverte/refermée avec `Entrée` puis `Espace`, sans erreur de console ;
- en émulation d’impression, les deux conteneurs globaux calculent
  `display: none` tandis que l’article reste affiché. Le PDF indépendant P4/Q
  demeure la preuve de pagination du contenu ; l’outil d’intégration n’expose
  pas de nouvelle commande PDF et cette absence n’est pas maquillée en succès.

Le snapshot intégré n’est pas encore un état public prouvé. Il doit rester
gelé, recevoir un contre-audit release indépendant, être commité et poussé,
puis être vérifié sur l’URL publique, le hub, le sitemap, le fichier LLM et le
maillage entrant avant que le registre de coordination puisse annoncer
`PUBLIE`.
