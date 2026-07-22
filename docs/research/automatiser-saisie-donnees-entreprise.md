# Dossier de recherche — Automatiser la saisie de données en entreprise

> Ce dossier prépare un guide destiné à un dirigeant ou à un indépendant dont
> les équipes recopient des clients, commandes, factures, interventions ou
> mouvements de stock entre des e-mails, des PDF, des tableurs et des logiciels
> de gestion. Le guide ne partira ni d'un outil, ni d'une promesse de « zéro
> erreur » : il suivra une information précise, désignera l'endroit où elle doit
> être corrigée, puis organisera ses contrôles et ses rejets.

Statut actuel : **P4 terminée localement — guide prêt pour le gel commun du lot, non publié**.

## Journal des quatre passes

Propriétaire éditorial unique : **agent racine Codex**.

| Passe                        | État                     | Date       | Responsable                         | Snapshot                                                    | Blocages |
| ---------------------------- | ------------------------ | ---------- | ----------------------------------- | ----------------------------------------------------------- | -------- |
| 1. Recherche                 | Terminée — porte validée | 2026-07-22 | Agent de recherche P1 et synthèse   | `manifests/automatiser-saisie-donnees-entreprise-p1.sha256` | Aucun    |
| 2. Rédaction et intégration  | Terminée — porte validée | 2026-07-22 | Agent P2 dédié, éditeur unique      | `manifests/automatiser-saisie-donnees-entreprise-p2.sha256` | Aucun    |
| 3. Contre-audit indépendant  | Terminée — porte validée | 2026-07-22 | Agent P3 indépendant, lecture seule | `manifests/automatiser-saisie-donnees-entreprise-p3.sha256` | Aucun    |
| 4. Plume humaine et contrôle | Terminée — porte validée | 2026-07-22 | Agent racine Codex                  | `manifests/automatiser-saisie-donnees-entreprise-p4.sha256` | Aucun    |

### Manifeste du snapshot

Le manifeste P1 contient uniquement le SHA-256 du présent dossier. Le hash
n'est pas recopié ici afin de ne pas créer une référence circulaire.

## 1. Fiche d'identité

| Champ                            | Décision documentaire                                                                                                                                                                                                                                                  |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Slug                             | `automatiser-saisie-donnees-entreprise`                                                                                                                                                                                                                                |
| Titre SEO de travail             | Automatiser la saisie de données en entreprise                                                                                                                                                                                                                         |
| H1 de travail                    | Comment automatiser la saisie de données sans perdre le contrôle ?                                                                                                                                                                                                     |
| Requête principale qualitative   | automatiser saisie données entreprise                                                                                                                                                                                                                                  |
| Variantes utiles                 | automatiser la double saisie ; éviter les ressaisies entre logiciels ; automatiser la saisie depuis un PDF ou un e-mail ; supprimer les copier-coller entre CRM, facturation et tableur ; automatiser une saisie comptable sans erreur                                 |
| Moment du parcours               | Sécuriser puis décider : le lecteur connaît la ressaisie, mais ne sait pas quelle copie supprimer, quel outil doit faire référence ni comment essayer une transmission sans créer d'erreurs invisibles                                                                 |
| Lecteur précis                   | Dirigeant de TPE/PME, commerçant, artisan ou indépendant non technicien ; responsable administratif, commercial ou opérationnel mandaté par lui ; équipes qui compensent des outils séparés par des copier-coller                                                      |
| Situation déclenchante           | Un client, une commande, une intervention, une facture ou un mouvement de stock est saisi deux ou trois fois ; une faute, un oubli ou une version différente retarde ensuite la vente, la livraison, la facturation ou le suivi                                        |
| Phrase qu'il dirait au téléphone | « Le commercial saisit le client, l'administration le recopie et la comptabilité le ressaisit. Je veux supprimer ce travail sans découvrir trois semaines plus tard qu'une commande ou une facture est partie avec une mauvaise information. »                         |
| Décision principale              | Choisir le premier trajet d'information à simplifier, désigner pour chaque donnée l'endroit où elle doit être corrigée, définir les contrôles et le traitement des rejets, puis conclure qu'une procédure, un réglage, une transmission limitée ou un projet est utile |
| Niveau de connaissance initial   | Le lecteur comprend ses dossiers et les conséquences d'une erreur, mais ne maîtrise pas nécessairement les termes OCR, RPA, API, webhook, synchronisation bidirectionnelle ou système de référence                                                                     |
| Action autonome                  | Prendre un petit échantillon de dossiers récents, remplir la carte de ressaisie et le journal réel, puis écrire une phrase de fonctionnement qui précise première saisie, destination, contrôle, rejet, responsable et partie laissée manuelle                         |
| CTA possible                     | « Faire relire un trajet de ressaisie » vers `/demarrer-un-projet`, après l'action autonome ; l'échange doit pouvoir recommander un réglage, un outil existant, une vue commune, un import contrôlé, un développement limité ou le maintien du manuel                  |
| Bon fit Hagnéré Code             | Même information recopiée régulièrement ; règles assez stables ; conséquences observables ; plusieurs rôles ou logiciels ; personne capable de décider où corriger et qui traite une anomalie                                                                          |
| Mauvais fit                      | Saisie rare ; information ambiguë ou règle changeante ; décision humaine à fort impact sans contrôle adapté ; aucun responsable métier ; fonction déjà disponible mais non paramétrée ; demande de remplacer tout le système d'information à partir d'un seul symptôme |
| Hors périmètre                   | Choix général du premier processus à automatiser ; migration d'Excel ou Access ; comparatif d'outils ou de licences ; architecture ERP/CRM ; synchronisation bidirectionnelle, webhooks et conception d'API ; TCO ou ROI complet ; conformité comptable personnalisée  |
| Date et mode de recherche        | 22 juillet 2026 ; SERP francophone qualitative et lecture des pages originales ; sources France Num, CNIL, RGPD et ministère de l'Économie ; aucune donnée Search Console ou Keyword Planner attribuable à cette URL                                                   |
| Responsable de la synthèse       | Agent de recherche P1, sous contrôle de l'agent racine                                                                                                                                                                                                                 |

### La décision en une phrase

**Suivez une information de sa première saisie à sa dernière utilisation,
choisissez où elle doit être corrigée, supprimez les copies inutiles et
n'automatisez le reste que si un rejet est visible et attribué à une personne.**

### Questions indispensables

1. Quelle information précise est réellement recopiée, depuis quelle preuve
   et vers quelles destinations ?
2. Pourquoi chaque copie existe-t-elle : besoin réel, absence d'accès, mauvais
   réglage, contrôle, habitude ou contrainte réglementaire ?
3. Dans quel logiciel ou document une correction doit-elle être faite pour
   éviter deux versions concurrentes ?
4. Quelles données peuvent être supprimées du trajet ou seulement consultées
   dans l'outil qui les possède déjà ?
5. Quel moyen est le moins complexe : procédure corrigée, vue du même dossier,
   import contrôlé, transmission automatique limitée, préremplissage avec
   validation ou maintien manuel ?
6. Comment détecter un dossier incomplet, un doublon, un format refusé, une
   destination indisponible ou une relance qui créerait une seconde copie ?
7. Où un rejet apparaît-il, qui le traite et comment sait-on que tous les
   éléments attendus ont bien été reçus ?
8. Comment tester sans utiliser inutilement des données personnelles réelles
   et sans arrêter la procédure manuelle trop tôt ?
9. Que faut-il mesurer avant et après pour constater du temps libéré, mais
   aussi les corrections, retards et dossiers oubliés ?
10. Quand la saisie manuelle reste-t-elle le choix le plus sûr ou le plus
    économique ?

### Objections et craintes

- « Si l'information part automatiquement au mauvais endroit, personne ne le
  verra. »
- « Nos PDF et nos e-mails ne sont jamais présentés de la même manière. »
- « Le client existe déjà dans deux logiciels, mais les fiches ne portent pas
  le même nom. »
- « Je ne sais pas quel logiciel doit avoir raison lorsqu'une adresse ou un
  prix change. »
- « Notre logiciel ne permet pas de connexion. »
- « Un prestataire nous promet du temps réel et zéro erreur, mais ne parle pas
  des rejets. »
- « Nous devons facturer correctement : je ne veux pas qu'un gain de temps
  dégrade les mentions ou les contrôles comptables. »

### Score de lancement issu du lot

Cette note interne priorise le sujet. Elle ne prédit ni trafic, ni position
Google, ni conversion.

| Critère                          |       Note | Justification                                                                                                                      |
| -------------------------------- | ---------: | ---------------------------------------------------------------------------------------------------------------------------------- |
| Adéquation avec une offre vendue |      25/25 | Le besoin mène naturellement vers un outil interne ou une transmission entre logiciels, sans imposer le sur-mesure                 |
| Proximité d'une demande de devis |      22/25 | La douleur et les systèmes sont déjà observables ; le lecteur doit encore réduire le besoin à un trajet                            |
| Preuve qualitative de demande    |      11/15 | SERP active et formulations précises ; aucun volume propre au site ou à la requête n'est disponible                                |
| Preuve ou outil original         |      14/15 | Carte de ressaisie, phrase contractuelle, journal avant/après et protocole de rejets directement réutilisables                     |
| Différenciation                  |       8/10 | Frontière claire si le guide suit une information ; recouvrement très élevé si la page redevient un guide général d'automatisation |
| Maillage et CTA utile            |       6/10 | Trois entrants naturels et un diagnostic utile ; aucun téléchargement nécessaire et futur guide ERP/CRM à ne pas anticiper         |
| **Total**                        | **86/100** | Sujet retenu, sous réserve absolue de conserver la frontière « trajet d'une donnée, référence, contrôles et rejets »               |

## 1 bis. Contrat de langage humain

### Réponse attendue en une phrase

Ne choisissez pas d'abord un robot ou un connecteur : décidez où l'information
est saisie une seule fois, ce qui doit être transmis, quel contrôle autorise la
suite et qui reprend la main si le transfert est refusé.

### Terme central expliqué sans jargon

**Automatiser la saisie** signifie ici éviter qu'une personne retape une
information déjà disponible. Le système peut recopier ou préremplir certains
champs, mais une personne reste responsable des cas incomplets, ambigus ou
refusés.

L'expression **endroit de référence** désigne le logiciel ou le document dans
lequel une information donnée doit être corrigée en premier. Il ne s'agit pas
nécessairement d'un seul logiciel pour toute l'entreprise : l'identité d'un
client peut faire référence dans le logiciel commercial, le numéro de facture
dans le logiciel comptable et le stock disponible dans le logiciel de gestion.

### Mots ordinaires à privilégier

| Famille        | Formulations à conserver                                                                                        |
| -------------- | --------------------------------------------------------------------------------------------------------------- |
| Problème vécu  | je recopie ; je cherche la bonne fiche ; deux adresses différentes ; facture bloquée ; commande oubliée         |
| Trajet         | première saisie ; information reçue ; vérification ; destination ; correction ; dernière utilisation            |
| Choix          | supprimer ; montrer la même fiche ; importer ; transmettre ; préremplir ; laisser manuel                        |
| Erreur         | champ vide ; doublon ; format refusé ; mauvaise version ; transfert arrêté ; dossier renvoyé                    |
| Responsabilité | qui corrige ; qui reçoit l'alerte ; qui reprend à la main ; qui vérifie que tout est arrivé                     |
| Résultat       | minutes de recopie évitées ; corrections évitées ; dossiers arrivés ; rejets traités ; délai jusqu'à la facture |

### Mots techniques à traduire ou à retarder

- `OCR` : lecture automatique d'un document ou d'une image pour proposer des
  champs ; ne jamais la présenter avant le besoin de préremplir un PDF ou un
  e-mail ;
- `RPA` : logiciel qui reproduit des clics et des saisies dans une interface ;
  à mentionner seulement comme solution fragile possible lorsqu'aucun échange
  prévu par les logiciels n'existe ;
- `API` : moyen prévu pour que deux logiciels s'échangent des informations ;
  à expliquer après les solutions plus simples et sans entrer dans
  l'architecture du futur guide ERP/CRM ;
- `webhook`, `ETL`, `middleware`, `mapping`, `master data`, `MDM`, `data
lineage`, `synchronisation bidirectionnelle` : hors vocabulaire visible de
  ce guide, sauf phrase source strictement nécessaire ;
- `source de vérité`, `workflow`, `pipeline`, `orchestration`, `réconciliation`
  : remplacer d'abord par endroit où corriger, étapes, trajet, organisation et
  vérification du nombre d'éléments reçus.

### Projet des 150 premiers mots

> Votre commercial saisit un client dans son logiciel commercial.
> L'administration recopie son nom, son adresse et son numéro d'entreprise
> dans un tableau, puis la comptabilité les ressaisit pour facturer. Une faute
> ou une fiche oubliée peut alors retarder la commande, la facture ou la
> livraison.
>
> N'achetez pas tout de suite un nouveau logiciel. Prenez une information
> précise — un client, une commande, une intervention ou un mouvement de stock
> — et suivez-la de sa première saisie jusqu'au dernier outil. Décidez ensuite
> où cette information doit être corrigée en priorité, quelles copies peuvent
> disparaître, quelles vérifications doivent avoir lieu et qui reprend la main
> lorsqu'un transfert échoue.
>
> Dans ce guide, vous construirez cette carte avec vos propres dossiers,
> comparerez les réponses les plus simples et préparerez un essai limité. Vous
> pourrez conclure qu'une procédure, une vue commune ou un import contrôlé
> suffit, qu'une connexion mérite d'être étudiée, ou que la saisie manuelle
> reste plus sûre.

**Ce que le lecteur saura décider après cette ouverture :** il saura choisir
un trajet à examiner et les quatre décisions à écrire avant une solution :
première saisie, endroit de référence, contrôle et responsable du rejet.

### Test de l'ouverture

- [x] la situation vécue apparaît avant toute méthode ;
- [x] aucun sigle ou nom de technologie ne précède la réponse ;
- [x] la réponse commence par un trajet précis, pas par « tout automatiser » ;
- [x] procédure, réglage, transmission et maintien manuel restent possibles ;
- [x] aucun gain, prix, délai ou taux de réussite n'est promis ;
- [x] le texte reste propre à la ressaisie après le test de substitution ;
- [x] la différence avec `automatiser-processus-metier` apparaît dès les 150
      premiers mots.

### Test sujet, action, résultat préparé pour P4

| Formulation abstraite à bannir      | Qui agit ?                          | Action concrète                                                                | Résultat attendu                                                    | Formulation humaine prévue                                                                                                    |
| ----------------------------------- | ----------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Définir la source de vérité         | Le responsable métier               | Choisit où chaque champ doit être corrigé en premier                           | Deux versions ne sont plus corrigées séparément                     | « Écrivez dans quel logiciel l'adresse, le prix ou le statut doit être corrigé avant d'être transmis ailleurs. »              |
| Cartographier les flux de données   | Une personne qui connaît le dossier | Suit un client ou une commande de la première saisie à la dernière utilisation | Les copies, contrôles et oublis deviennent visibles                 | « Prenez un dossier récent et notez chaque endroit où ses informations sont lues, modifiées ou retapées. »                    |
| Gérer les exceptions                | Un salarié nommé                    | Ouvre la liste des éléments refusés et corrige ou classe chaque cas            | Une panne ou un champ manquant ne crée pas un oubli silencieux      | « Décidez où apparaît un dossier refusé et qui doit le reprendre avant la fin du traitement. »                                |
| Réconcilier les systèmes            | Le responsable du contrôle          | Compare le nombre et les identifiants envoyés avec ceux reçus                  | Il repère un élément perdu ou dupliqué                              | « Vérifiez que chaque commande envoyée existe une seule fois à l'arrivée et que tout écart porte un motif. »                  |
| Mettre en place un workflow robuste | L'entreprise et le prestataire      | Testent les cas normaux, incomplets, doublons, corrections et pannes           | La saisie manuelle n'est retirée qu'après des résultats observables | « Avant d'arrêter le copier-coller, essayez un dossier normal, incomplet, déjà présent, corrigé puis renvoyé, et une panne. » |

## 2. Frontières et anti-cannibalisation

### Risque principal

Le risque de cannibalisation avec `automatiser-processus-metier` est évalué à
**5/5**. Cette page voisine utilise déjà la ressaisie e-mail → tableau →
facturation, une observation sur une semaine, plusieurs réponses possibles, un
calcul économique et un pilote. La nouvelle URL n'est défendable que si elle
abandonne le choix général d'un processus pour suivre **une information, ses
copies, l'endroit où la corriger et ses rejets**.

| Page existante ou prévue                    | Intention détenue                                                                                         | Différence obligatoire du nouveau guide                                                                                                 | Lien ou arbitrage nécessaire                                                                  |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `automatiser-processus-metier`              | Choisir parmi plusieurs tâches ou processus celui qu'il faut simplifier ou automatiser d'abord            | Le lecteur a déjà choisi un trajet de ressaisie ; il décide où saisir, quoi transmettre, quoi contrôler et qui reprend un rejet         | Entrant principal ; ne reprendre ni plan en sept jours, ni matrice générale, ni six solutions |
| `signes-besoin-logiciel-metier`             | Décider si des situations vécues justifient une sécurisation, une correction, un outil ou une observation | Ici, le symptôme est confirmé ; la page produit la carte détaillée d'une seule information recopiée                                     | Entrant contextuel depuis la partie « ressaisies »                                            |
| `application-gestion-interventions-terrain` | Concevoir le parcours complet d'une intervention entre terrain, bureau, planning et facturation           | La nouvelle page utilise éventuellement une intervention comme exemple bref, sans couvrir planning, mobilité, compte rendu ou signature | Entrant contextuel depuis la clôture sans ressaisie                                           |
| `transformer-excel-en-application`          | Décider s'il faut fiabiliser ou remplacer un classeur devenu critique                                     | Aucun diagnostic du classeur, aucune migration et aucun choix d'application ; le tableur n'est qu'une étape possible du trajet          | Lien sortant seulement si le fichier lui-même est le problème                                 |
| `calculer-roi-application-metier`           | Comparer les coûts et bénéfices d'un investissement sur plusieurs années                                  | Ici, le calcul mesure un échantillon avant/après ; aucun TCO, ROI, prix projet ou projection annuelle                                   | Lien sortant si le flux limité devient un investissement                                      |
| `no-code-ou-sur-mesure`                     | Choisir une famille de solution et comparer coûts, limites et possibilité de changer                      | Aucun comparatif technologique, tarif ou éditeur ; la solution la moins complexe est choisie après la carte                             | Ne pas introduire de grille no-code/sur-mesure                                                |
| `erp-ou-logiciel-sur-mesure`                | Choisir une architecture d'outil à l'échelle de plusieurs fonctions                                       | La page ne choisit ni ERP, ni CRM, ni application ; elle peut conclure qu'une vue ou un réglage existant suffit                         | Lien seulement si plusieurs trajets révèlent un problème d'outil global                       |
| futur `connecter-erp-crm-logiciel-metier`   | Concevoir les échanges, leur direction, leurs erreurs et leur reprise entre systèmes                      | La nouvelle page s'arrête au besoin métier : champs utiles, référence, contrôle, rejet et propriétaire ; aucune architecture détaillée  | Ne pas traiter bidirectionnel, temps réel, webhook, reprise technique ou contrat d'interface  |
| `digitaliser-bons-intervention`             | Remplacer papier, PDF et ressaisies d'un parcours terrain spécifique                                      | Aucun traitement du mode hors ligne, de la signature, des pièces ou du bon complet                                                      | Ne pas utiliser le bon d'intervention comme fil rouge                                         |
| `/services/outils-internes-sur-mesure`      | Présenter une offre transactionnelle de CRM métier, ERP léger, back-office et automatisations             | Le guide doit rester autonome et peut conclure qu'aucun développement n'est nécessaire                                                  | CTA unique et tardif vers `/demarrer-un-projet`                                               |

**Justification d'une URL distincte :** aucune page actuelle ne produit la
phrase de fonctionnement « cette information est saisie une fois ici,
transmise après ce contrôle, les refus arrivent à cette personne et cette
décision reste manuelle ».

### Frontière de réponse à conserver pendant P2

- ne pas choisir le premier processus de l'entreprise ; le trajet est déjà
  identifié ;
- ne pas refaire un plan d'automatisation sur sept jours, une matrice de ROI ou
  une comparaison de six technologies ;
- ne pas prendre Excel, Access, un ERP, un CRM ou un bon d'intervention comme
  fil rouge du guide ;
- ne comparer aucune marque, licence ou tarif volatil ;
- ne pas expliquer l'architecture d'une synchronisation bidirectionnelle, les
  webhooks, la fréquence de rafraîchissement, la reprise technique ou les
  contrats d'API ;
- ne pas faire de l'OCR, de la RPA ou de l'IA le point de départ ;
- ne pas promettre « zéro erreur », « temps réel », « aucune intervention
  humaine » ou « une seule base pour toute l'entreprise » ;
- ne pas concevoir la conformité d'une facture : si le trajet alimente la
  facturation, conserver les contrôles du logiciel compétent et renvoyer vers
  les sources officielles à jour ;
- ne pas transformer la carte visible en fichier téléchargeable annoncé tant
  qu'un tel fichier n'existe pas et n'a pas été testé.

## 3. Demande et vocabulaire du lecteur

### Observation qualitative du 22 juillet 2026

Requêtes observées dans une SERP francophone :

- « automatiser saisie données entreprise » ;
- « automatiser la saisie de données entre deux logiciels » ;
- « éviter la double saisie CRM ERP » ;
- « supprimer les ressaisies entre logiciels » ;
- « automatiser saisie facture PDF comptabilité » ;
- « automatiser données e-mail vers logiciel » ;
- « comment éviter les erreurs de saisie » ;
- « source de vérité CRM ERP ».

Les résultats visibles sont principalement des pages d'intégrateurs, des
solutions de CRM/ERP, des plateformes d'automatisation, des spécialistes du
traitement documentaire et quelques guides généraux. Les ouvertures partent
souvent des heures perdues et promettent ensuite connexion en temps réel,
suppression des erreurs ou centralisation complète.

**Limites de l'observation :** aucun accès Search Console, Keyword Planner ou
outil propriétaire n'a été fourni pour cette requête. Aucune estimation de
volume, de difficulté SEO, de coût par clic ou de taux de conversion ne doit
être inventée. La SERP prouve seulement que des acteurs actifs couvrent cette
intention avec un fort intérêt commercial.

### Formulations utiles entendues dans les pages observées

- « Le client est déjà saisi dans le CRM, pourquoi le retaper pour facturer ? »
- « L'adresse a été corrigée dans un outil, mais pas dans l'autre. »
- « Nous exportons un CSV, nous le nettoyons puis nous l'importons. »
- « Quand l'import échoue, nous ne savons pas quelles lignes reprendre. »
- « Le PDF arrive par e-mail et quelqu'un recopie cinq champs. »
- « Le stock du site et celui du logiciel ne disent pas la même chose. »
- « Nous voulons voir les erreurs avant qu'elles touchent le client. »

Ces formulations sont des observations éditoriales, pas des citations de
clients Hagnéré Code.

## 4. Carte concurrentielle

| Page observée                                                                                                                                                     | Réponse et angle                                                              | Bon point                                                                                   | Manque décisionnel                                                                                                  | Conflit d'intérêt ou limite                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| [France Num — L'automatisation](https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/lautomatisation-une-solution) | Panorama TPE/PME, choix d'un processus, connecteurs, tests et maintenance     | Cartographie, exceptions, essai limité et surveillance des échecs sont explicités           | La page reste générale et ne désigne pas l'endroit où corriger chaque information ni la file des rejets             | Portail public, mais dossier rédigé par deux experts du no-code/développement ; chiffres et promesses commerciales à ne pas généraliser |
| [Mekso — Automatisation PME](https://www.mekso.fr/)                                                                                                               | Éliminer double saisie, Excel critique et outils séparés par des connexions   | Situations très reconnaissables : client, commande, stock, facturation                      | Promesses « zéro », temps réel, ROI et volumes non soutenus par un protocole visible ; traitement des rejets absent | Vend l'intégration et affiche des métriques commerciales                                                                                |
| [TC Automation — Automatiser la saisie entre deux logiciels](https://app.tc-automation.fr/blog/automatiser-la-saisie-de-donnees-entre-deux-logiciels)             | Transmettre une donnée d'un logiciel à un autre et supprimer la double saisie | Intention très proche, langage du quotidien                                                 | La décision reste centrée sur l'automatisation ; peu d'aide sur référence, correction, doublon et panne             | Prestataire d'automatisation                                                                                                            |
| [Infocob — CRM administratif](https://infocob.com/crm/services/administratif/)                                                                                    | Centraliser e-mails, fichiers, ERP et tableurs dans un CRM                    | Décrit les conséquences administratives, l'historique incomplet et les versions différentes | La réponse est un produit ; aucune conclusion « réglage, vue existante ou manuel »                                  | Éditeur de CRM avec chiffres commerciaux                                                                                                |
| [Quotex — Exploiter les devis sans ressaisie](https://quotex.eu/exploitez-devis-erp-crm/)                                                                         | Transmettre devis, clients et commandes vers ERP/CRM                          | Trajet devis → commande concret                                                             | Cas centré sur un connecteur et deux familles de logiciels ; contrôles et responsabilités peu visibles              | Vend et configure la connexion                                                                                                          |
| [YAD — Connecteur Sage/Pipedrive](https://www.yad.fr/pipeyad-connecteur-sage-100-pipedrive/)                                                                      | Synchronisation commerciale et gestion entre deux produits nommés             | Rend le problème de fiches concurrentes concret                                             | Ne permet pas de décider sans ces produits et ne couvre pas les échecs silencieux                                   | Page produit et intégrateur                                                                                                             |

### Angle mort commun

Les pages observées expliquent ce qui pourrait circuler automatiquement et
mettent en avant le temps gagné. Elles montrent beaucoup moins souvent :

1. où une donnée doit être corrigée lorsque deux versions existent ;
2. quelles copies sont inutiles avant toute automatisation ;
3. quelles informations seulement doivent être transmises ;
4. comment reconnaître un doublon, un rejet ou un transfert partiel ;
5. qui reprend la main et comment vérifier qu'aucun dossier n'a disparu ;
6. quand un accès à la même fiche, un import contrôlé ou le manuel reste
   préférable.

### Valeur originale à apporter

- une **enquête sur le trajet d'une information**, et non un catalogue
  d'outils ;
- une carte source → transformation ou contrôle → destination ;
- un choix explicite de l'endroit de référence **par information** ;
- une phrase contractuelle simple qui nomme le rejet et le responsable ;
- un journal réel avant/après qui mesure recopie, correction, retard et oubli ;
- un exemple fictif calculé sans projection de ROI ;
- un protocole de cas normaux et anormaux avant l'arrêt du manuel.

## 5. Fiche de preuves

| Affirmation utilisable                                                                                                                                                                                                        | Catégorie      | Source primaire, URL et passage utile                                                                                                                                                                                                                                            | Périmètre                                                                          | Date / consultation                         | Limite                                                                                                                                                                                                                                   | Emplacement du lien visible                                  | Conséquence lecteur                                                                                                        | Fraîcheur                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| France Num recommande de commencer petit, de cartographier étapes, informations, exceptions et rôles, puis de tester la transmission, l'ordre et les notifications avant un déploiement complet                               | `FAIT VÉRIFIÉ` | [France Num — L'automatisation](https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/lautomatisation-une-solution), sections « cinq bonnes pratiques », lignes 365-405                                                            | Dossier de conseil pour TPE/PME, surtout no-code                                   | Mis à jour 09/07/2026 ; consulté 22/07/2026 | Auteurs experts du secteur ; ne pas reprendre les prix, durées, ROI ou promesses d'élimination des erreurs de la page                                                                                                                    | Introduction du protocole de test et source finale           | Cartographier et essayer les cas d'échec avant de retirer la saisie manuelle                                               | Revoir à toute modification substantielle                |
| Le même dossier propose de mesurer fréquence × durée × nombre de personnes, complexité et impact d'une erreur                                                                                                                 | `FAIT VÉRIFIÉ` | [France Num — Priorisez selon le gain potentiel](https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/lautomatisation-une-solution), lignes 323-345                                                                               | Méthode de priorisation générale pour TPE/PME                                      | 09/07/2026 ; 22/07/2026                     | Le nouveau guide n'utilise pas cette formule pour choisir un processus ; il l'adapte au journal d'un trajet déjà choisi                                                                                                                  | Section mesure avant/après                                   | Compter le travail observé plutôt que promettre un gain moyen                                                              | Revue annuelle                                           |
| Pour les données personnelles, le RGPD impose qu'elles soient limitées à ce qui est nécessaire, exactes et si nécessaire à jour, avec une sécurité adaptée                                                                    | `FAIT VÉRIFIÉ` | [CNIL — RGPD, article 5](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre2), points 1.c à 1.f                                                                                                                                                               | Données à caractère personnel ; pas toutes les données d'entreprise                | Texte consolidé consulté 22/07/2026         | Ne pas présenter la suppression de doubles saisies comme une conformité automatique ; finalité, base légale, conservation et droits restent à examiner                                                                                   | Section sur les données à transmettre                        | Ne pas copier un champ personnel « au cas où » et prévoir la correction des données inexactes                              | Revalider en cas d'évolution du texte ou de la doctrine  |
| Le registre RGPD doit notamment recenser finalités, catégories de données, destinataires, conservation et mesures de sécurité                                                                                                 | `FAIT VÉRIFIÉ` | [CNIL — Le registre RGPD de la CNIL](https://www.cnil.fr/fr/le-registre-rgpd-de-la-cnil), lignes 110-136                                                                                                                                                                         | Activités traitant des données personnelles                                        | Mis à jour 20/05/2026 ; consulté 22/07/2026 | La carte de ressaisie ne remplace pas le registre obligatoire ni un conseil RGPD ; elle reprend seulement des questions utiles au trajet                                                                                                 | Encadré données personnelles                                 | Faire relire le trajet au DPO ou référent si des données personnelles circulent                                            | Revoir si la CNIL actualise le modèle                    |
| La CNIL recommande des formats de saisie limités au besoin, des profils d'accès, des tests avant production et l'usage de données fictives autant que possible pendant le développement                                       | `FAIT VÉRIFIÉ` | [CNIL — Encadrer les développements informatiques](https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques), lignes 188-206                                                                                                                                    | Développement ou évolution d'une application traitant des données personnelles     | Consulté 22/07/2026                         | La page publique retiendra une règle plus stricte : scénarios métier représentatifs avec données fictives ou effectivement anonymisées, dans un environnement distinct ; jamais de données de clients réels dans son protocole générique | Section test                                                 | Tester des situations réalistes sans recopier les données personnelles de production                                       | Revue annuelle ou nouvelle édition du guide sécurité     |
| Les données personnelles réelles de production ne doivent pas servir au développement ou au test ; il faut construire un jeu fictif et anonymiser les données personnelles si des configurations de production sont importées | `FAIT VÉRIFIÉ` | [CNIL — Tester vos applications](https://www.cnil.fr/fr/tester-vos-applications), section « Attention aux données de test »                                                                                                                                                      | Développement et test d'applications utilisant des données personnelles            | Consulté 22/07/2026                         | La ressemblance fonctionnelle d'un scénario ne justifie pas la copie des dossiers clients ; une simple pseudonymisation reste soumise au RGPD                                                                                            | Section sur les six situations à tester                      | Préparer des cas normaux et anormaux avec des valeurs fictives ou effectivement anonymisées, hors production               | Revalider avec la doctrine CNIL                          |
| Une anonymisation effective rend l'identification impossible en pratique et de façon irréversible ; une pseudonymisation reste un traitement de données personnelles soumis au RGPD                                           | `FAIT VÉRIFIÉ` | [CNIL — L'anonymisation de données personnelles](https://www.cnil.fr/fr/technologies/lanonymisation-de-donnees-personnelles), sections définition et distinction avec la pseudonymisation                                                                                        | Données relatives à des personnes physiques                                        | 19/05/2020 ; consulté 22/07/2026            | Ne jamais qualifier un jeu de test d'anonyme sur la seule suppression du nom ou le remplacement par un numéro                                                                                                                            | Section test                                                 | Utiliser du fictif par défaut ; traiter tout jeu seulement pseudonymisé avec les protections RGPD                          | Revalider avec la doctrine CNIL                          |
| Une API peut contribuer à fiabiliser, minimiser et sécuriser des échanges si les rôles, données nécessaires, accès, journaux, documentation et tests sont organisés                                                           | `FAIT VÉRIFIÉ` | [CNIL — API : interfaces de programmation applicative](https://www.cnil.fr/fr/securite-api-interfaces-de-programmation-applicative), lignes 159-192                                                                                                                              | Partage de données personnelles par API                                            | 14/03/2024 ; consulté 22/07/2026            | La CNIL ne dit pas qu'une API est obligatoire ni suffisante ; le guide reste en amont de sa conception technique                                                                                                                         | Fin de la comparaison des moyens, après l'explication simple | Si une connexion est retenue, exiger au minimum rôles, données limitées, traces, documentation et espace de test           | Revalider avec la dernière édition du guide CNIL         |
| La CNIL rappelle aux TPE/PME de limiter les données conservées, d'effectuer des sauvegardes et de tester leur restauration                                                                                                    | `FAIT VÉRIFIÉ` | [CNIL — Sécurité des données : les règles essentielles](https://www.cnil.fr/fr/securite-des-donnees-les-regles-essentielles), sections sauvegardes et réflexe RGPD                                                                                                               | Conseils généraux pour entreprises, données personnelles ou non selon les sections | 19/06/2026 ; consulté 22/07/2026            | Ce guide général ne constitue pas une validation de sécurité du projet                                                                                                                                                                   | Encadré sécurité et retour manuel                            | La suppression d'une ressaisie ne justifie pas la suppression prématurée des sauvegardes ou de la possibilité de reprendre | Revoir à chaque mise à jour CNIL                         |
| Une facture comporte des mentions obligatoires qui varient aussi selon la situation et l'opération                                                                                                                            | `FAIT VÉRIFIÉ` | [Ministère de l'Économie — Mentions obligatoires d'une facture](https://www.economie.gouv.fr/entreprises/gerer-son-entreprise-au-quotidien/gerer-sa-comptabilite-et-ses-demarches/mentions-obligatoires-dune-facture-tout-savoir), sections sur le cadre général et les mentions | Entreprises établies en France ; règles variant selon situation et opération       | Écrit 25/02/2026 ; consulté 22/07/2026      | Sujet volatil et juridiquement dépendant du cas ; le guide n'ouvre ni le calendrier ni le fonctionnement de la réforme de la facturation électronique                                                                                    | Encadré « si le trajet alimente une facture »                | Conserver les contrôles du logiciel et faire valider le champ par l'expert-comptable ou la source officielle à jour        | Revalider impérativement avant P2 puis avant publication |

### Déductions et recommandations à ne pas attribuer aux sources

| Proposition prévue                                                                                    | Catégorie exacte              | Justification et limite                                                                                                                                                                        |
| ----------------------------------------------------------------------------------------------------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Désigner un endroit de référence par information plutôt qu'un logiciel unique pour toute l'entreprise | `RECOMMANDATION HAGNÉRÉ CODE` | Évite de créer artificiellement un monolithe ; doit être décidé avec les responsables métier et comptable selon le champ                                                                       |
| Supprimer une copie inutile avant de chercher à l'automatiser                                         | `RECOMMANDATION HAGNÉRÉ CODE` | Déduction de la minimisation, de la cartographie et du choix de la solution la moins complexe ; ce n'est pas une règle universelle d'architecture                                              |
| Commencer par une transmission dans un seul sens, limitée au besoin observé                           | `RECOMMANDATION HAGNÉRÉ CODE` | Réduit le nombre de conflits à tester ; le futur guide ERP/CRM traitera les cas où deux sens sont réellement nécessaires                                                                       |
| Aucun transfert n'est accepté tant qu'un rejet n'a pas un lieu visible et un responsable              | `RECOMMANDATION HAGNÉRÉ CODE` | Garde-fou opérationnel ; le contrôle et l'intervention humaine restent proportionnés au risque, au volume et à l'ambiguïté, sans obligation universelle de valider manuellement chaque élément |
| Un accès en lecture à la même fiche peut être préférable à une copie                                  | `DÉDUCTION`                   | Si le besoin consiste seulement à consulter et que les droits le permettent, ne pas dupliquer évite une version concurrente ; à confirmer dans chaque logiciel                                 |
| Une saisie manuelle rare, instable ou à fort jugement peut rester rationnelle                         | `RECOMMANDATION HAGNÉRÉ CODE` | Le coût et le risque d'une automatisation peuvent dépasser la gêne ; aucun seuil universel n'est fixé                                                                                          |

### Contradictions et données à ne pas publier

- France Num écrit que l'automatisation « élimine » les risques d'erreurs de
  saisie. Ne pas reprendre cet absolu : une règle erronée, une mauvaise
  correspondance ou une relance mal conçue peut répliquer une erreur sur tous
  les dossiers.
- Ne reprendre aucun chiffre de « 15 à 25 heures », « 25 000 à 60 000 € »,
  « 70 % », « 95 % », « ROI moyen », « temps réel » ou « zéro ressaisie »
  observé sur des pages commerciales sans protocole, population et périmètre.
- Ne pas écrire qu'une API, une IA, une lecture automatique de PDF ou un robot
  d'interface constitue la meilleure solution par défaut.
- Ne pas écrire qu'une information peut toujours être centralisée dans une
  seule application. Des responsabilités différentes peuvent justifier
  plusieurs endroits de référence selon les champs.
- Ne pas promettre que la synchronisation bidirectionnelle règle les versions
  concurrentes. Sa conception appartient au futur guide d'intégration.
- Ne pas utiliser des données de clients, salariés, commandes ou factures
  réelles dans le dossier, les captures ou le protocole générique. Les tests de
  P2 emploient des scénarios métier représentatifs avec des valeurs fictives
  ou effectivement anonymisées, dans un environnement distinct. Un identifiant
  remplacé par un numéro n'est que pseudonymisé et reste soumis au RGPD.
- Ne pas annoncer que l'automatisation rend une facture conforme. Les mentions,
  formats et règles doivent être vérifiés dans le logiciel concerné et sur la
  source officielle au moment du projet. Le guide n'ouvre pas la réforme de la
  facturation électronique.
- Ne pas transformer une baisse de minutes dans l'exemple fictif en économie
  annuelle, ROI ou devis Hagnéré Code.

## 6. Dispositif pratique à construire dans la page

### 6.1 La carte de ressaisie

La carte doit être copiable depuis la page, sans téléchargement ni collecte de
données. Sur mobile, elle sera présentée en cartes ou en champs successifs,
jamais en tableau large dont la réponse serait masquée.

```text
Information ou dossier suivi :
Événement qui le fait entrer dans l'entreprise :
Preuve reçue : e-mail, formulaire, PDF, appel retranscrit, bon, autre

1. Première saisie
- Qui la réalise ?
- Dans quel outil ou document ?
- Quels champs sont saisis ?
- Quelle vérification est faite ?

2. Copies et utilisations suivantes
- Où l'information est-elle retapée, importée ou seulement consultée ?
- Par qui ?
- Pourquoi cette étape existe-t-elle ?
- Quels champs changent de nom, de format ou de valeur ?

3. Endroit de référence
- Où chaque champ doit-il être corrigé en premier ?
- Qui a le droit et la responsabilité de le corriger ?
- Comment la correction atteint-elle les destinations utiles ?

4. Contrôles et rejets
- Qu'est-ce qui bloque : champ vide, format, doublon, statut, montant, autre ?
- Où voit-on l'élément refusé ?
- Qui le reprend ?
- Comment vérifie-t-on qu'il n'est ni perdu ni créé deux fois ?

5. Décision
- Copie à supprimer :
- Accès à la même fiche possible :
- Import contrôlé possible :
- Transmission automatique limitée à étudier :
- Préremplissage avec validation humaine à étudier :
- Partie qui reste manuelle et pourquoi :
```

### 6.2 La phrase de fonctionnement à obtenir

Le lecteur doit pouvoir écrire une phrase de ce type, avec ses propres mots :

> « L'identité du client est saisie une fois dans [outil de référence]. Après
> vérification de [champs], seules [informations nécessaires] sont transmises à
> [destination]. Les dossiers incomplets ou refusés apparaissent dans [liste]
> et sont repris par [rôle]. [Décision ou champ à fort impact] reste manuel. »

Cette phrase est une recommandation de préparation. Elle ne remplace ni les
spécifications, ni le contrat, ni les règles de sécurité ou de conformité.

### 6.3 Le journal réel à remplir avant et après

Le journal ne doit contenir aucun exemple présenté comme un client Hagnéré
Code. Le lecteur le remplit en interne avec des identifiants de dossier
minimaux, sans recopier dans le site les noms, coordonnées, montants ou pièces.

Pour chaque événement utile, la trace minimale est : **identifiant interne non
signifiant, date et heure, action tentée, résultat, rôle de l'acteur et
référence du rejet ou de la correction**. Elle ne copie ni le document complet,
ni tous les champs transmis. Si l'identifiant permet encore de retrouver une
personne, la trace reste une donnée personnelle ; sa finalité, ses accès et sa
durée doivent être définis. Le niveau de journalisation doit être proportionné
au risque et limité aux informations nécessaires au contrôle.

| Identifiant minimal | Date et heure | Action | Résultat | Acteur ou rôle | Référence du rejet ou de la correction |
| ------------------- | ------------- | ------ | -------- | -------------- | -------------------------------------- |
|                     |               |        |          |                |                                        |

| Champ à relever                                       | Avant la modification | Pendant l'essai | Après stabilisation |
| ----------------------------------------------------- | --------------------- | --------------- | ------------------- |
| Période et nombre de dossiers observés                |                       |                 |                     |
| Minutes consacrées uniquement à retaper ou reformater |                       |                 |                     |
| Nombre de dossiers incomplets à l'entrée              |                       |                 |                     |
| Nombre de doublons détectés                           |                       |                 |                     |
| Nombre de corrections après la première saisie        |                       |                 |                     |
| Nombre d'éléments attendus, envoyés, reçus et refusés |                       |                 |                     |
| Motifs des refus                                      |                       |                 |                     |
| Minutes de reprise des refus                          |                       |                 |                     |
| Dossiers retardés ou oubliés, avec conséquence        |                       |                 |                     |
| Personne qui contrôle et personne qui corrige         |                       |                 |                     |
| Partie maintenue manuelle                             |                       |                 |                     |

**Règle de comparaison :** utiliser le même type de dossiers, une période
comparable et les mêmes limites. Une semaine calme et une semaine de clôture ne
forment pas un avant/après défendable. Si le volume ou la difficulté change,
le signaler au lieu d'attribuer tout l'écart à l'automatisation.

### 6.4 Les contrôles avant d'arrêter la ressaisie

La future page doit donner ces situations avec des mots ordinaires, puis
expliquer que le détail technique appartient au projet. Les essais utilisent
des scénarios métier réalistes et représentatifs, mais des données fictives ou
effectivement anonymisées, dans un environnement distinct. Une donnée
pseudonymisée reste une donnée personnelle : elle n'autorise pas à reprendre
un fichier client de production dans un test générique.

1. **Dossier normal :** une seule fiche arrive avec tous les champs attendus.
2. **Dossier incomplet :** il est refusé ou mis en attente avec un motif
   compréhensible.
3. **Dossier déjà présent :** une relance ne crée pas silencieusement un
   doublon.
4. **Correction après envoi :** l'entreprise sait où corriger et quelles
   destinations doivent être mises à jour.
5. **Destination indisponible :** l'information n'est ni perdue ni déclarée
   reçue ; elle attend ou repasse manuellement selon la procédure écrite.
6. **Reprise d'un refus :** une personne peut corriger, renvoyer une seule fois
   et voir le résultat final.
7. **Contrôle du lot :** le nombre et les identifiants envoyés sont comparés à
   ceux reçus, sans supposer que l'absence d'alerte prouve le succès.
8. **Droit d'accès :** seules les personnes prévues voient et corrigent les
   données dont elles ont besoin.

Ces situations ne créent aucune obligation universelle de faire valider chaque
transfert par une personne. Le contrôle humain est renforcé lorsque la source
est ambiguë, l'effet difficile à corriger ou le risque élevé ; il peut être
remplacé par un contrôle de lot et une surveillance des rejets lorsque le flux
est stable, réversible et correctement testé.

### 6.5 Ordre des réponses à comparer

Cet ordre est une recommandation Hagnéré Code. Il part de la modification la
moins lourde et s'arrête dès que le besoin est couvert durablement :

1. **Supprimer la copie** si la destination n'utilise pas réellement
   l'information.
2. **Donner accès à la même fiche** si une personne a seulement besoin de lire
   et que les droits le permettent ; il ne s'agit pas de créer un fichier
   partagé supplémentaire.
3. **Corriger un réglage ou utiliser une fonction existante** : modèle,
   préremplissage, champ obligatoire, export ou import déjà prévu.
4. **Faire un import contrôlé** si un lot périodique suffit et qu'une personne
   peut vérifier les refus.
5. **Transmettre automatiquement dans un seul sens** si le volume, la
   fréquence et le délai le justifient ; expliquer ensuite qu'un moyen prévu
   par les logiciels est souvent appelé connecteur ou API.
6. **Préremplir puis faire valider** lorsque la source est un PDF, un e-mail ou
   une image dont la lecture peut être ambiguë.
7. **Conserver la saisie manuelle** si le cas est rare, instable, très ambigu,
   soumis à un jugement important ou moins coûteux à contrôler ainsi.

Le guide ne choisit pas entre no-code, progiciel et sur-mesure. Il produit les
informations qui permettront ensuite ce choix dans une autre page ou un devis.

## 7. Exemple illustratif fictif et calcul reproductible

### Étiquette et objectif

**Exemple illustratif fictif :** une petite entreprise de services reçoit des
demandes par e-mail. L'exemple sert uniquement à montrer comment comparer un
échantillon avant/après. Il ne représente ni un client, ni un résultat Hagnéré
Code, ni un gain moyen de marché.

### Hypothèses du même échantillon

- 40 dossiers de même nature observés sur dix jours ouvrés ;
- avant : 3 minutes pour créer la fiche commerciale, 4 minutes pour retaper les
  informations administratives et 2 minutes pour préparer la facturation ;
- 5 dossiers nécessitent ensuite 12 minutes de correction chacun ;
- pendant l'essai fictif : les 40 dossiers demandent chacun 1 minute de
  contrôle ; 4 dossiers refusés demandent 5 minutes de reprise manuelle ;
- les temps décrivent seulement les manipulations de saisie et de correction,
  pas le travail commercial, administratif ou comptable complet.

```text
Avant = 40 × (3 + 4 + 2) minutes + 5 × 12 minutes
      = 40 × 9 + 60
      = 420 minutes
      = 7 heures

Pendant l'essai = 40 × 1 minute de contrôle + 4 × 5 minutes de reprise
                 = 40 + 20
                 = 60 minutes
                 = 1 heure

Écart observé dans cet exemple = 420 - 60
                               = 360 minutes
                               = 6 heures sur le même échantillon

Part du temps de manipulation retirée dans cet exemple
  = 360 / 420 × 100
  = 85,714... %
  ≈ 85,7 %
```

### Contrôles et limites du calcul

- contrôle inverse : `60 + 360 = 420 minutes` ;
- l'arrondi porte seulement sur le pourcentage, pas sur les minutes ;
- ce résultat n'est ni une économie annuelle, ni un gain de trésorerie, ni un
  ROI ;
- le temps de mise en place, le coût du logiciel, la maintenance, la formation,
  la sécurité, l'évolution des règles et les incidents ne sont pas chiffrés ;
- aucune valeur monétaire n'est calculée, car aucune suppression de poste,
  dépense évitée ou réaffectation productive n'est démontrée ;
- si les dossiers de l'essai sont plus simples que ceux de la période initiale,
  l'écart n'est pas attribuable au seul changement ;
- les quatre refus ne sont pas présentés comme des échecs à supprimer : ils
  prouvent que le contrôle doit rester visible et que la reprise a un coût ;
- une projection d'investissement appartient au guide
  `calculer-roi-application-metier`, avec coûts complets et hypothèses propres à
  l'entreprise.

## 8. Empreinte éditoriale à ne pas reproduire

| Guide voisin                                | Type d'ouverture                                          | Progression                                                     | Dispositif récurrent                                              | Exemple                                      | Place du CTA              | Mécanisme à ne pas reprendre                                                          |
| ------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------------- | ----------------------------------------------------------------- | -------------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------- |
| `automatiser-processus-metier`              | Plusieurs tâches pénibles, puis choix de la première      | Observation une semaine → matrice → six réponses → ROI → pilote | Fiche processus, matrice gain/risque/stabilité et plan sept jours | Demandes hebdomadaires et calcul sur 36 mois | Après le plan             | Ne pas choisir parmi plusieurs processus, refaire la matrice, six solutions ou le ROI |
| `transformer-excel-en-application`          | Fichier devenu difficile à partager ou contrôler          | Diagnostic du fichier → quatre solutions → coût → migration     | Diagnostic d'Excel et plan 30 jours                               | PME et classeur critique                     | Après migration           | Aucun fichier Excel fil rouge, aucune migration ou décision de remplacement           |
| `signes-besoin-logiciel-metier`             | Trois situations vécues révèlent un risque                | Sécuriser → observer → six réponses → trois situations          | Fiches de situations et absence de seuil magique                  | Plusieurs blocages courts                    | Après les situations      | Ne pas rediagnostiquer le besoin d'un logiciel ni comparer six réponses générales     |
| `application-gestion-interventions-terrain` | Une intervention suivie du premier appel à la facturation | Parcours complet → rôles → cas terrain → pilote → données       | Cartes d'étapes et incidents terrain                              | Intervention complète                        | Avant dossier prestataire | Ne pas suivre tout le travail terrain ni reprendre planning, hors-ligne et signature  |
| `calculer-roi-application-metier`           | Doute sur le financement d'une application                | Coût actuel → bénéfices → TCO → ROI → décision                  | Calcul multi-scénarios sur 48 mois                                | Exemple économique complet                   | Après décision            | Aucun budget projet, ROI, TCO ou projection annuelle                                  |

### Choix du nouveau guide

```text
Tension motrice : enlever un copier-coller peut rendre une erreur moins visible si personne ne sait où le transfert a échoué
Type d'ouverture : scène très ordinaire commercial → administration → comptabilité, suivie d'une réponse immédiate sans technologie
Progression : suivre une information → choisir où la corriger → supprimer les copies → choisir le moyen minimal → tester rejets et corrections → mesurer le même échantillon
Artefact signature : carte source / contrôle / destination + phrase de fonctionnement + journal réel avant/après
Rythme et voix : enquête concrète sur un dossier, phrases courtes, exemples de champs et de rejets ; technologie seulement après la décision métier
Place naturelle du CTA : après la carte remplissable, l'ordre des réponses et les tests ; jamais avant l'action autonome
Forme de conclusion : une phrase complète à remettre à l'équipe ou au prestataire, avec possibilité de maintenir le manuel
Différences : un seul trajet plutôt qu'un portefeuille ; aucun personnage ou outil fil rouge ; aucun ROI ; rejet et correction au centre ; aucun plan en jours ; conclusion sous forme de règle opérationnelle écrite
```

## 9. Plan annoté

| Section provisoire                                             | Question résolue                                                             | Preuve, exemple ou catégorie                                                 | Conséquence pour le lecteur                                                                             | Format choisi                |
| -------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------- |
| Ouverture : une information saisie trois fois                  | De quoi parle-t-on et par où commencer ?                                     | Situation composite non attribuée, sans chiffre                              | Le lecteur choisit un client, une commande, une intervention ou un mouvement de stock                   | Prose courte                 |
| Suivez une information avant de choisir un outil               | Comment rendre la ressaisie visible ?                                        | Recommandation + carte de ressaisie                                          | Il ne mélange pas cinq processus ni toute l'entreprise                                                  | Carte copiable               |
| Choisissez où chaque information doit être corrigée            | Un logiciel unique doit-il tout posséder ?                                   | RGPD exactitude pour les données personnelles + recommandation par champ     | Il nomme l'endroit de référence et le responsable de correction                                         | Trois exemples brefs         |
| Supprimez les copies qui ne servent à personne                 | Faut-il automatiser chaque saisie actuelle ?                                 | Minimisation CNIL dans son périmètre + déduction                             | Il supprime, consulte ou conserve avant de construire                                                   | Questions successives        |
| Comparez les réponses de la moins lourde à la plus lourde      | Procédure, vue, import, connexion, préremplissage ou manuel ?                | France Num pour options générales ; recommandation Hagnéré Code pour l'ordre | Il choisit le moyen minimal sans comparatif de marques                                                  | Cartes, pas tableau large    |
| Écrivez où arrivent les dossiers refusés                       | Comment éviter l'échec silencieux ?                                          | France Num surveillance ; CNIL traces pour API si retenue                    | Chaque rejet a un motif, un lieu et un responsable                                                      | Phrase contractuelle + liste |
| Testez avant d'arrêter le copier-coller                        | Quels cas faut-il essayer ?                                                  | CNIL tests et données fictives ; protocole recommandé                        | Le manuel reste disponible tant que normal, incomplet, doublon, correction et panne ne sont pas prouvés | Liste numérotée              |
| Mesurez le même travail avant et après                         | Le changement fait-il réellement gagner du temps sans déplacer le problème ? | Journal copiable + formule France Num limitée                                | Le lecteur compte aussi reprises, rejets, retards et oublis                                             | Journal en cartes sur mobile |
| Exemple fictif : 7 heures puis 1 heure sur le même échantillon | Comment refaire le calcul ?                                                  | Exemple fictif, 40 dossiers, calcul reproductible                            | Il sait calculer un écart sans le transformer en ROI                                                    | Formule + limites            |
| Si le trajet alimente une facture ou des données personnelles  | Quels contrôles ne pas oublier ?                                             | Ministère de l'Économie, CNIL, RGPD                                          | Il conserve la validation métier, comptable, sécurité et droits                                         | Encadré de limites           |
| Décidez avec une phrase complète                               | Que peut-on remettre à l'équipe ou au prestataire ?                          | Carte remplie                                                                | Il choisit réglage, import, étude limitée ou maintien manuel                                            | Modèle de phrase             |
| CTA éventuel                                                   | Quand un échange est-il utile ?                                              | Bon fit / mauvais fit                                                        | Le lecteur apporte un trajet et des rejets, pas « automatisez tout »                                    | Un seul CTA tardif           |
| Sources et limites                                             | Qu'est-ce qui est officiel, observé ou recommandé ?                          | Liens au plus près + récapitulatif                                           | Le lecteur peut vérifier les règles volatiles                                                           | Liste courte                 |

### H2 de travail, à relire isolément en P2

1. `Commencez par suivre une information, pas par choisir un outil`
2. `Dessinez son trajet de la première saisie à la dernière utilisation`
3. `Décidez où chaque information doit être corrigée`
4. `Supprimez les copies qui ne servent plus`
5. `Choisissez le moyen le plus simple de transmettre le reste`
6. `Écrivez ce qui se passe quand une donnée est refusée`
7. `Testez les doublons, corrections et pannes avant d'arrêter le manuel`
8. `Mesurez le même échantillon avant et après`
9. `Exemple fictif : six heures de manipulation retirées sur quarante dossiers`
10. `Conservez les contrôles comptables et les protections des données`
11. `Décidez avec une phrase que toute l'équipe peut vérifier`
12. `Sources et limites`

Le nombre et l'ordre peuvent être resserrés en P2 si deux sections répètent la
même décision. Les `id` n'existent pas encore et ne sont donc pas figés.

### Questions résiduelles possibles pour la FAQ

1. Faut-il mettre toutes les données dans un seul logiciel ?
2. Peut-on automatiser la saisie depuis un PDF ou un e-mail ?
3. Que faire si les deux logiciels ne peuvent pas communiquer ?
4. Qui doit corriger une information différente dans deux outils ?
5. Une automatisation supprime-t-elle les erreurs de saisie ?
6. Quand vaut-il mieux conserver une saisie manuelle ?

Chaque réponse devra commencer par oui, non ou une condition concrète. Aucune
FAQ ne doit ouvrir un nouveau chapitre sur les API, l'OCR, la comptabilité ou
le RGPD.

## 10. Ressource et conversion

```text
Une ressource est-elle naturellement nécessaire ? non pour cette version
Problème résolu après lecture : la carte, le journal et la phrase sont directement copiables dans la page
Résultat autonome produit : un trajet documenté, un endroit de référence par champ, une copie à supprimer, un contrôle, une liste de rejets, un responsable et une décision de maintien ou d'essai
Format éditable et format de consultation : blocs texte et cartes copiables ; aucun PDF, tableur ou téléchargement annoncé
Rubriques réellement livrées : première saisie, copies, raison, transformation, contrôle, destination, référence, rejet, responsable, reprise manuelle, mesure avant/après
Exemple rempli : exemple fictif de 40 dossiers, uniquement pour le calcul ; aucune entreprise ni donnée personnelle inventée
Conclusion « ne pas investir » possible : oui — réglage, accès à la même fiche, import existant ou manuel peuvent suffire
Sources, hypothèses et limites visibles : oui, au plus près des règles et du calcul
Données saisies et destination : aucune saisie sur le site ; le lecteur copie le modèle et le remplit en interne sans transmettre ses dossiers
Processus de génération reproductible : non applicable, aucun fichier généré
Journal de QA : non applicable en P1 ; le rendu des cartes et du tableau devra être vérifié à 390 px en P4
Limites connues et niveau de revue humaine : aucune revue par un dirigeant réel en P1
Mode de maintenance : revalider CNIL, RGPD et facturation avant toute modification substantielle
Test du fichier ou outil : aucun outil ou fichier promis
Bon fit Hagnéré Code : trajet fréquent, règles stables, plusieurs outils ou rôles, rejets et corrections mesurables
Mauvais fit : cas rare ou instable, fonction native non explorée, aucun responsable, demande d'architecture globale, conseil comptable ou juridique spécialisé
Action non commerciale : remplir la carte et le journal, puis tester une seule modification sur un lot limité
CTA principal : « Faire relire un trajet de ressaisie » vers `/demarrer-un-projet`
Résultat après clic : identifier la copie à supprimer, l'endroit de référence, les contrôles et le moyen le moins complexe ; possibilité explicite de recommander un réglage ou aucun développement
```

### Maillage prévu

Entrants prioritaires à considérer en P2, sous contrôle de l'éditeur unique :

1. `automatiser-processus-metier`, depuis le passage sur une ressaisie déjà
   choisie ;
2. `application-gestion-interventions-terrain`, depuis la transmission vers la
   facturation ;
3. `signes-besoin-logiciel-metier`, depuis les informations recopiées.

Sorties utiles, sans liste automatique :

- `automatiser-processus-metier` si le lecteur n'a pas encore choisi quel
  trajet traiter ;
- `calculer-roi-application-metier` si la transmission limitée devient un
  investissement significatif ;
- `/services/outils-internes-sur-mesure` pour comprendre l'offre, puis
  `/demarrer-un-projet` uniquement via le CTA contextualisé.

Le futur `connecter-erp-crm-logiciel-metier` ne sera lié qu'après sa publication
et seulement pour approfondir l'architecture technique.

## 11. Rapport de sortie P1

```text
PASSE 1 TERMINÉE
Slug : automatiser-saisie-donnees-entreprise
Lecteur et phrase réelle : dirigeant dont le commercial, l'administration et la comptabilité ressaisissent le même dossier ; « je veux supprimer ce travail sans créer une erreur invisible »
Décision : choisir un trajet, un endroit de référence par information, les copies à supprimer, les contrôles, le responsable des rejets et le maintien éventuel du manuel
Angle et forme dominante : enquête sur une information ; carte source / contrôle / destination ; phrase de fonctionnement ; journal réel avant/après
Pages proches et différence : automatisation générale, signes de besoin, intervention terrain, Excel, ROI, choix technologique et futur ERP/CRM ; aucune ne produit la règle complète première saisie → contrôle → destination → rejet → responsable
Sources décisives : France Num pour cartographie, mesure, test et maintenance ; RGPD/CNIL pour minimisation, exactitude, sécurité, destinataires, données de test et API ; ministère de l'Économie pour la frontière facturation
Incertitudes exclues : volumes de recherche, gains moyens, zéro erreur, temps réel, prix, ROI, outil recommandé, architecture bidirectionnelle, conformité automatique et centralisation universelle
Action autonome et CTA possible : carte et journal copiables ; CTA tardif vers /demarrer-un-projet pour faire relire un seul trajet, avec réglage, outil existant, maintien manuel ou absence de développement possibles
Plan : onze sections décisionnelles, six FAQ résiduelles possibles, un exemple fictif de 40 dossiers et sources proches
Snapshot : docs/research/manifests/automatiser-saisie-donnees-entreprise-p1.sha256
```

## 12. Porte de sortie P1 et score honnête

### Vérification de la porte

- [x] brief complet et décision principale unique ;
- [x] recouvrement 5/5 avec le guide général explicitement traité ;
- [x] URL distincte justifiée par le trajet, l'endroit de référence et les
      rejets ;
- [x] recherche web actuelle, datée et ouverte sur les pages originales ;
- [x] carte concurrentielle suffisante pour identifier les promesses à ne pas
      reprendre ;
- [x] fiche de preuves officielles exploitable par un autre rédacteur ;
- [x] faits, observations, déductions, recommandations et exemple fictif
      séparés ;
- [x] réglementation sur les données personnelles limitée à son périmètre ;
- [x] facturation sourcée mais conservée hors du cœur du guide ;
- [x] aucune contradiction décisive masquée ;
- [x] calcul fictif reproductible, contrôlé à l'envers et non transformé en
      ROI ;
- [x] plan distinct des voisins et technologie retardée ;
- [x] action autonome, bon fit, mauvais fit et maintien manuel définis ;
- [x] aucune page publique, aucun registre, aucun fichier partagé et aucune
      promesse de téléchargement créés en P1 ;
- [x] propriétaire éditorial unique nommé ;
- [x] manifeste P1 créé après formatage et relecture intégrale.

### Score P1 — 19/20

| Axe de recherche               |  Note 0-2 | Preuve                                                                  | Réserve                                                       |
| ------------------------------ | --------: | ----------------------------------------------------------------------- | ------------------------------------------------------------- |
| Décision du lecteur            |         2 | Un trajet, une référence par champ, contrôles, rejets et responsable    | —                                                             |
| Frontière éditoriale           |         2 | Risque 5/5 documenté et huit sujets voisins délimités                   | Vigilance absolue en P2                                       |
| Demande observée               |         1 | SERP francophone actuelle et formulations précises relevées             | Aucun volume Search Console ou Keyword Planner propre à l'URL |
| Carte concurrentielle          |         2 | Six pages représentatives, bénéfices et conflits d'intérêt comparés     | —                                                             |
| Sources primaires              |         2 | France Num, CNIL, RGPD et ministère de l'Économie                       | —                                                             |
| Qualification des affirmations |         2 | Faits, déductions, recommandations et exemple séparés                   | —                                                             |
| Pédagogie prévue               |         2 | Ouverture sans jargon, carte, phrase et journal concret                 | À vérifier sur la page et à 390 px                            |
| Originalité utile              |         2 | Endroit de référence par champ et rejet au centre de la décision        | —                                                             |
| Conversion honnête             |         2 | Action autonome, manuel et aucun développement possibles                | —                                                             |
| Transmission au rédacteur      |         2 | Plan, preuves, limites, calcul, artefacts, CTA et garde-fous documentés | —                                                             |
| **Total**                      | **19/20** | P1 défendable sans invention                                            | Demande quantitative non mesurée                              |

### Réserves à transmettre en P2

1. Le recouvrement avec `automatiser-processus-metier` est le principal risque
   du lot. Toute section qui choisit « quel processus d'abord », calcule un ROI
   complet ou compare six familles de solutions doit être retirée.
2. Le guide doit rester sur **une information ou un dossier**. Il ne doit pas
   cartographier tout le système d'information ni transformer l'entreprise en
   projet ERP.
3. « Endroit de référence » est une recommandation pédagogique par champ, pas
   un standard d'architecture ni la promesse d'une base unique.
4. L'ordre supprimer → même fiche → réglage/import → transmission limitée →
   préremplissage validé → manuel est une recommandation Hagnéré Code. Ne pas
   l'attribuer à France Num ou à la CNIL.
5. Le terme API ne doit apparaître qu'après « moyen prévu pour que deux
   logiciels s'échangent des informations ». RPA, OCR et IA ne doivent jamais
   piloter l'ouverture ou le plan.
6. Le futur guide `connecter-erp-crm-logiciel-metier` possède l'architecture
   technique, les directions d'échange et la reprise. P2 s'arrête à champs,
   contrôle, rejet et responsabilité métier.
7. Le passage facturation doit rester un encadré de vigilance, avec source
   officielle actuelle et orientation vers le logiciel ou l'expert-comptable.
   Revalider impérativement le calendrier et les mentions avant publication.
8. L'exemple fictif mesure seulement les minutes de manipulation du même
   échantillon. Ne projeter ni économie annuelle, ni coût salarial, ni ROI.
9. La carte et le journal doivent devenir des cartes lisibles à 390 px ; un
   tableau horizontal scrollable qui masque le rejet ou le responsable échoue.
10. Aucun dirigeant réel n'a relu ce dossier. P1 ne valide ni la plume, ni le
    rendu, ni la publication.

## 13. Étapes suivantes laissées volontairement bloquées

### Rapport P2 — Rédaction et intégration

```text
PASSE 2 TERMINÉE
Fichiers créés ou modifiés : page publique et image sociale dédiées ; entrée en tête du registre avec attente de revue humaine ; icône du hub ; garde-fou de langage humain ; lien entrant depuis le guide général d'automatisation ; présent dossier.
Ouverture et réponse : en 108 mots, le commercial saisit un client, l'administration le recopie et la comptabilité le retape ; la réponse consiste à suivre une information, choisir où corriger chaque champ, supprimer les copies inutiles et rendre chaque rejet visible.
Forme propre au sujet : enquête sur un seul trajet ; carte de ressaisie en cinq blocs directement copiables ; phrase de fonctionnement ; ordre des réponses les moins lourdes ; journal minimal et six essais anormaux.
Exemples ou calculs : exemple illustratif fictif d'une identité client ; exemple fictif de 40 dossiers sur dix jours, 420 minutes avant, 60 minutes pendant l'essai, écart de 360 minutes ou 6 heures, soit 85,7 % du seul temps de manipulation.
Sources visibles : France Num près de la description et des tests ; article 5 du RGPD près de la correction des données ; CNIL près des API, des jeux de test, de l'anonymisation et du registre ; ministère de l'Économie près des factures.
Action autonome, bon fit et mauvais fit : carte, journal et phrase copiables sans collecte sur le site ; trajet fréquent et stable avec responsable ; manuel, réglage existant ou report explicites si le cas est rare, ambigu ou sans responsable.
CTA et destination : un seul CTA tardif, « Faire relire un trajet de ressaisie », vers /demarrer-un-projet ; son texte précise qu'un réglage existant ou aucun développement peut être la bonne réponse.
Contrôles rapides : manifeste P1 vérifié avant écriture ; Prettier conforme ; ESLint ciblé conforme ; TypeScript conforme ; 48 tests ciblés conformes ; route locale HTTP 200 en noindex/nofollow avec canonical exact, un H1, Article et BreadcrumbList seulement ; git diff --check conforme. Le check SEO global passe 185 contrôles sur 186 : l'unique échec vient des manifestes P4 historiques qui figent l'ancien hash partagé de src/lib/guides.ts ; ils doivent être recalculés au gel commun du lot et ne sont pas réécrits pendant cette P2.
Snapshot : docs/research/manifests/automatiser-saisie-donnees-entreprise-p2.sha256
```

### Décisions de rédaction P2

- l'ouverture donne le problème et la réponse avant toute technologie ;
- le guide suit une information déjà choisie et ne reprend ni le choix général
  d'un processus, ni son plan en sept jours, ni son calcul de rentabilité ;
- l'« endroit où corriger » est choisi par champ, jamais présenté comme un
  logiciel unique ou une règle d'architecture universelle ;
- l'ordre supprimer → même fiche → fonction ou import existant → transmission
  limitée → préremplissage validé → manuel est explicitement attribué à
  Hagnéré Code ;
- les mots connecteur et API apparaissent seulement après les solutions plus
  simples ; aucune architecture ERP/CRM, aucun échange dans les deux sens et
  aucune promesse de temps réel ne sont développés ;
- les tests génériques utilisent des valeurs fictives ou effectivement
  anonymisées hors production ; le texte rappelle qu'une pseudonymisation
  reste soumise au RGPD ;
- le calcul fictif reste limité au même échantillon et n'est transformé ni en
  économie annuelle, ni en prix, ni en ROI ;
- la facturation reste un encadré de vigilance : les contrôles du logiciel et
  la validation comptable ne sont pas remplacés par l'automatisation ;
- aucune ressource téléchargeable n'est promise : la carte et la phrase sont
  utilisables directement dans la page.

### Score du brouillon P2 — 19/20

Cette note est une auto-évaluation de sortie de rédaction. Elle ne remplace ni
le contre-audit indépendant de P3, ni la passe de plume et le contrôle
navigateur de P4.

| Axe         |  Note 0-2 | Preuve dans le brouillon                                                                            | Réserve P2                                 |
| ----------- | --------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| Intention   |         2 | Triple saisie et réponse complète dans les 108 mots de l'ouverture                                  | —                                          |
| Décision    |         2 | Un trajet, un endroit où corriger par champ, une copie à supprimer et un responsable de rejet       | —                                          |
| Pédagogie   |         2 | Carte en cinq blocs, termes définis dans la phrase, tableaux transformés en cartes sous 768 px      | Rendu réel à vérifier en P4                |
| Profondeur  |         2 | Normal, incomplet, doublon, correction, panne, nouvel envoi, journal et maintien manuel             | —                                          |
| Preuve      |         2 | France Num, CNIL, RGPD et ministère liés près des affirmations qu'ils soutiennent                   | Fraîcheur à revalider avant publication    |
| Comparaison |         2 | Six réponses ordonnées de la suppression au maintien manuel, sans catalogue de marques              | Ordre à contredire en P3                   |
| Originalité |         2 | Carte de ressaisie, phrase de fonctionnement et responsable du rejet propres à cette décision       | —                                          |
| Style       |         1 | Voix directe et titres lisibles ; aucune passe orale ou anti-automatisme complète encore            | P4 reste obligatoire                       |
| Conversion  |         2 | Action autonome, bon et mauvais fit, CTA tardif et développement non imposé                         | —                                          |
| SEO/produit |         2 | Metadata, canonical, noindex d'attente, deux schémas autorisés, OG, hub, test de langue et maillage | Inspection responsive complète réservée P4 |
| **Total**   | **19/20** | Brouillon complet défendable pour P3                                                                | Non publiable à ce stade                   |

### Vérification de la porte P2

- [x] manifeste P1 contrôlé avant toute édition ;
- [x] guide complet sans placeholder ;
- [x] décision et réponse présentes dès l'ouverture ;
- [x] affirmations décisives reliées au dossier P1 et aux sources proches ;
- [x] risques, responsabilités, solutions plus simples et maintien manuel
      couverts sans élargir au choix d'un processus ou à l'architecture
      ERP/CRM ;
- [x] exemple fictif et calcul cohérents, étiquetés avant les nombres ;
- [x] carte, journal et phrase utilisables sans téléchargement ni contact ;
- [x] page, image sociale, registre, données structurées, hub, test de langage
      et maillage entrant intégrés ;
- [x] un seul CTA tardif, fidèle à sa destination ;
- [x] `editorialStatus: "ready-for-human-review"` conservé ;
- [x] Server Component sans état, hooks ou média supplémentaire ;
- [x] contrôles rapides sans défaut de code introduit ;
- [x] manifeste P2 créé sur tous les fichiers modifiés.

### État transmis à P3

La P2 valide un **brouillon complet**, pas sa publication. Aucun lecteur humain
réel n'a participé. Le relecteur indépendant devra notamment contredire la
frontière avec `automatiser-processus-metier`, l'attribution des sources CNIL,
l'ordre recommandé des réponses, le traitement des refus, le calcul fictif et
la prudence des passages RGPD et facturation.

### Rapport P3 — Contre-audit indépendant

```text
PASSE 3 TERMINÉE — PORTE VALIDÉE
Relecteur : agent P3 indépendant, lecture seule ; aucun fichier modifié par le relecteur.
Snapshot d'entrée : manifeste P2 vérifié avant l'audit.
Verdict : PASS, 19/20 ; aucun P0 ni P1.
Frontière éditoriale : le guide suit une information déjà choisie, son endroit de correction, ses copies et ses rejets ; il ne reprend ni la sélection générale d'un processus, ni le plan en sept jours, ni le ROI du guide voisin.
Sources revérifiées : France Num, article 5 du RGPD, pages CNIL sur le registre, les API, les tests et l'anonymisation, et ministère de l'Économie pour les mentions de facture. Les obligations RGPD restent limitées aux données personnelles ; aucune conformité automatique n'est promise.
Calcul refait : 40 × (3 + 4 + 2) + 5 × 12 = 420 minutes ; 40 × 1 + 4 × 5 = 60 minutes ; écart 360 minutes = 6 heures ; 360 / 420 = 85,714... %, arrondi à 85,7 % ; contrôle inverse 60 + 360 = 420.
Recommandations : l'ordre supprimer → même fiche → fonction ou import existant → transmission limitée → préremplissage validé → manuel est correctement attribué à Hagnéré Code et ne devient ni une règle CNIL, ni une obligation universelle.
Pédagogie et conversion : ouverture de 108 mots dans la situation commercial → administration → comptabilité ; titres compréhensibles ; technologie retardée ; action autonome, mauvais fit, maintien manuel et CTA tardif cohérents.
SEO et produit : canonical fidèle, robots noindex/nofollow d'attente, un H1, FAQ visible, Article et BreadcrumbList seulement, image sociale dédiée et maillage entrant contextuel.
P2 documentaires trouvés et corrigés : date de mise à jour de la page CNIL sur le registre corrigée au 20/05/2026 ; source « Tester vos applications » ajoutée à la fiche de preuves avec son périmètre exact.
Contrôles du relecteur : 33 tests ciblés, ESLint, TypeScript et git diff --check conformes.
Limite : la plausibilité mobile a été contrôlée dans le code, pas dans un navigateur ; les cartes sous 768 px, les thèmes, la console, les ancres et l'image sociale restent à vérifier réellement en P4.
Snapshot : docs/research/manifests/automatiser-saisie-donnees-entreprise-p3.sha256
```

### Score indépendant P3 — 19/20

| Axe         |  Note 0-2 | Conclusion indépendante                                                                             |
| ----------- | --------: | --------------------------------------------------------------------------------------------------- |
| Intention   |         2 | Une seule décision, distincte du choix général d'un processus                                       |
| Pédagogie   |         2 | Situation vécue, réponse directe, carte et cas d'échec en mots ordinaires                           |
| Profondeur  |         2 | Référence par champ, copies, rejets, reprise, mesure, données et facturation                        |
| Exactitude  |         2 | Sources officielles correctement bornées après deux corrections documentaires                       |
| Calcul      |         2 | Hypothèses, opérations, arrondi et contrôle inverse exacts                                          |
| Comparaison |         2 | Six réponses possibles, y compris fonction existante et maintien manuel                             |
| Originalité |         2 | Carte de ressaisie et responsable du rejet propres à la décision                                    |
| Style       |         2 | Aucun cadre de consultant dans l'ouverture ou les titres ; termes expliqués au moment utile         |
| Conversion  |         2 | Valeur autonome avant un CTA honnête qui n'impose pas le développement                              |
| Rendu/SEO   |         1 | Code, metadata et structure valides ; contrôle visuel réel encore réservé à P4                      |
| **Total**   | **19/20** | **PASS P3 — aucun P0/P1 ; P4 obligatoire avant tout changement de statut éditorial ou publication** |

### Rapport P4 — Plume humaine et contrôle final

```text
PASSE 4 TERMINÉE — PORTE VALIDÉE LOCALEMENT
Responsable : agent racine Codex, après retour indépendant P3.
Passes de plume : ouverture relue comme un dirigeant ; commercial, administration et comptabilité apparaissent avant toute méthode ; API est expliquée seulement après les réponses simples ; titres, cartes, FAQ et CTA ont été relus isolément ; aucun jargon ou gabarit rejeté par la charte n'a été réintroduit.
Corrections P3 : date CNIL et source directe sur les données de test corrigées dans le dossier ; aucune modification sémantique de la page publique n'a été nécessaire.
Calcul : 420, 60, 360 minutes, 6 heures et 85,7 % rejoués ; exemple toujours annoncé comme fictif et séparé d'un ROI ou d'une promesse.
Rendu réel : navigateur Chromium local aux largeurs 320, 390, 640, 768, 1024 et 1440 px ; aucun débordement horizontal ; un H1 ; toutes les ancres du sommaire trouvent leur cible ; cartes à 320/390/640 et tableaux à partir de 768 px.
États observés : thème clair mobile et thème sombre bureau ; ouverture, carte, journal, tests, calcul, encadrés données/factures, critères de décision et CTA lisibles ; FAQ ouverte et réponse visible.
SEO et technique : HTTP 200 local ; canonical exact ; robots noindex/nofollow d'attente ; Article et BreadcrumbList seulement ; six questions visibles sans FAQPage ; neuf routes internes contrôlées en HTTP 200 ; aucune erreur navigateur, uniquement les journaux HMR du serveur de développement.
Image sociale : route dédiée observée en 1200 × 630 px ; titre, sous-titre et quatre étapes lisibles, sans chiffre présenté comme résultat de marché.
Contrôles de code : Prettier, ESLint ciblé, TypeScript, tests ciblés et git diff --check conformes. Le check SEO global reste à rejouer après recalcul commun des anciens manifestes P4 qui contiennent le hash partagé de src/lib/guides.ts.
Test réalisé par une personne réelle : non. La revue a été menée par l'orchestrateur et un relecteur indépendant, sans inventer de validation par un dirigeant.
Publication : non. L'entrée conserve editorialStatus ready-for-human-review ; elle ne sera retirée qu'au gel final autorisé du lot.
Snapshot final : docs/research/manifests/automatiser-saisie-donnees-entreprise-p4.sha256
```

### Score final P4 — 19/20

| Axe         |  Note 0-2 | Preuve finale                                                                                     |
| ----------- | --------: | ------------------------------------------------------------------------------------------------- |
| Intention   |         2 | Le lecteur traite une ressaisie précise, pas toute l'automatisation de l'entreprise               |
| Pédagogie   |         2 | Situation immédiate, carte copiable, exemples et tests formulés en mots ordinaires                |
| Profondeur  |         2 | Correction, copie, import, transmission, doublon, panne, reprise et maintien manuel               |
| Exactitude  |         2 | Sources officielles revérifiées et recommandations Hagnéré Code explicitement séparées            |
| Calcul      |         2 | Exemple reproductible, limites visibles et contrôle inverse                                       |
| Comparaison |         2 | Six réponses de la suppression au manuel, sans catalogue de marques                               |
| Originalité |         2 | Carte de ressaisie, phrase de fonctionnement et responsable du rejet                              |
| Style       |         2 | Plume directe, titres autonomes, termes techniques retardés et structure propre au sujet          |
| Conversion  |         2 | Valeur autonome, bon/mauvais fit et CTA tardif qui n'impose pas le développement                  |
| Produit/SEO |         1 | Rendu responsive, metadata, données structurées et liens vérifiés ; aucun test par dirigeant réel |
| **Total**   | **19/20** | **P4 validée localement ; publication et indexabilité réservées au gel final du lot**             |

### Test lecteur non technique

```text
Test réalisé par une personne réelle : non
Profil prévu : dirigeant ou indépendant dont plusieurs personnes retapent clients, commandes, factures, interventions ou stocks
Ce qu'il doit comprendre : l'objectif n'est pas de faire circuler toutes les données, mais de saisir une fois le strict nécessaire et de rendre chaque rejet visible
Décision qu'il doit pouvoir prendre : supprimer une copie, partager la même fiche, utiliser un import, étudier une transmission limitée, préremplir avec validation ou conserver le manuel
Endroit où il pourrait survoler : comparaison des moyens ou liste des contrôles ; à resserrer en P4
Passage qui doit donner confiance : exemple fictif limité et phrase qui nomme le responsable du rejet
Termes potentiellement bloquants : endroit de référence, import, API, données personnelles ; à expliquer dans la phrase
Questions encore sans réponse : à recueillir lors du test réel
Corrections appliquées : deux corrections documentaires issues de P3 ; plume, rendu et interactions contrôlés en P4, sans simuler une validation par un dirigeant réel
```

## Décision de gel commun — 22 juillet 2026

Les mentions précédentes de publication différée décrivent l’état de contrôle
avant le gel atomique des dix guides.

Statut éditorial final : **publiable — validation éditoriale déléguée**.

Décision de publication : autorisée explicitement par le commanditaire.

Test réalisé par une personne réelle : non.

Le retrait du statut d’attente ouvre la route à `index, follow` dans un build de
production. Il ne prouve ni le déploiement final ni l’indexation effective par
Google, qui doivent être vérifiés séparément.
