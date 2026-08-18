# Dossier de travail — Pourquoi mon site n'est pas visible sur Google ?

> Nouvelle exécution engagée le **18 août 2026**. Le dossier et les
> manifestes du 21 juillet 2026 sont des archives : ils ont servi à repérer les
> questions déjà rencontrées, mais aucun de leurs verdicts, exemples, scores ou
> contrôles n'est repris comme une validation du `HEAD` actuel.

Le déroulement et les portes sont définis dans
[`docs/workflow-maitre-guides-4-passes.md`](../workflow-maitre-guides-4-passes.md).
Cette fiche conserve la passe 1 puis décrit le contre-audit de passe 2 autorisé
par `GATE_P1: GO_PASSE_2`.

## Journal des quatre passes

Propriétaire éditorial unique : orchestrateur du lot du 18 août 2026.

| Passe                             | État        | Date       | Responsable       | Snapshot       | Blocages                          |
| --------------------------------- | ----------- | ---------- | ----------------- | -------------- | --------------------------------- |
| 1. Création complète              | Livrée à G1 | 2026-08-18 | `guide_google_p1` | `228aa94f56b7` | validation orchestrateur attendue |
| 2. Enrichissement et vérification | Livrée à G2 | 2026-08-18 | `guide_google_p2` | `b498de97c16f` | validation orchestrateur attendue ; trois images Article réservées au contrôle final |
| 3. Polish rédactionnel            | Représentée à G3 | 2026-08-18 | `guide_google_p3` | `29943b368c82` | seconde décision orchestrateur attendue |
| 4. Antipasse IA et contrôle final | Livrée à décision | 2026-08-18 | `guide_google_p4` | `4c392335bffa` | décision orchestrateur attendue ; BAT complet réservé à Q |

Le manifeste de passe ne contient pas ce dossier : son propre hash changerait
quand le journal est complété. Il fige la page, l'image sociale, le registre,
l'outil local et leurs tests.

## A. Identité

```text
Slug : pourquoi-site-pas-visible-google
Thème et numéro roadmap : Référencement naturel, sujet 56 ; premier candidat de la file active
Statut actuel : Brouillon privé
Requête principale : pourquoi mon site n'apparaît pas sur Google
Moment du parcours : comprendre puis sécuriser une première décision
Lecteur précis : dirigeant de TPE/PME ou indépendant qui a une page en ligne mais ne la retrouve pas sur une recherche importante
Situation déclenchante : nouvelle page, nouveau site, refonte ou simple recherche manuelle sans résultat visible
Décision principale : identifier la première étape non confirmée entre exploration, indexation, impressions et clics pour une URL et une requête précises
Route de service pertinente : /services/referencement-google
Date réelle du travail : 2026-08-18
Responsable de la synthèse P1 : agent guide_google_p1
```

### Contrat de langage humain

- **Phrase réelle du lecteur :** « Mon site est en ligne, mais si je tape mon
  activité dans Google je ne le trouve pas. Est-ce que Google le voit ? »
- **Réponse attendue en une phrase :** « Vérifiez une page et une recherche
  précises dans Search Console : si Google ouvre et indexe la page, regardez
  ensuite si elle reçoit des impressions puis des clics pour cette recherche. »
- **Terme central expliqué simplement :** une page _indexée_ est une version
  que Google a retenue dans sa base ; cela ne veut pas dire qu'elle sera
  affichée pour toute recherche.
- **Mots ordinaires :** site, page, adresse, recherche, résultat, visible,
  ouverture, affichage, clic, erreur, attendre, corriger.
- **Mots à éviter ou à traduire :** crawl, SERP, indexabilité, canonique,
  CTR, autorité de domaine, budget de crawl, signal, levier, couverture.
- **Projet des 150 premiers mots :** reconnaître le symptôme, dire qu'une
  recherche manuelle ne suffit pas, demander une URL et une requête, annoncer
  les quatre contrôles et la décision corriger/attendre/transmettre.
- **Décision après l'ouverture :** le lecteur sait qu'il ne faut ni refaire le
  site ni commander du contenu avant de connaître l'étape qui bloque.
- **H2 relus isolément :** oui en auto-contrôle P1 ; chacun nomme une question
  ou une décision sans dépendre du paragraphe précédent.
- **Comparaison à 390 px :** l'article emploie des cartes et le composant de
  tableau partagé qui transforme chaque ligne en carte ; l'outil empile ses
  champs.
- **FAQ :** chaque réponse commence par « Oui », « Non » ou une limite claire.
- **CTA :** « Faire relire mon diagnostic », vers le formulaire de projet ; il
  annonce une relecture de la fiche, pas une position ni un délai Google.

### Test sujet, action, résultat prévu

| Formulation à éviter        | Qui agit ?             | Action concrète                                       | Résultat                               | Formulation retenue                                                                        |
| --------------------------- | ---------------------- | ----------------------------------------------------- | -------------------------------------- | ------------------------------------------------------------------------------------------ |
| améliorer la découvrabilité | propriétaire du site   | inspecter l'URL puis vérifier les liens et le sitemap | savoir si Google connaît l'adresse     | « Inspectez l'URL ; si elle est inconnue, vérifiez les liens qui y mènent et le sitemap. » |
| corriger l'indexabilité     | prestataire            | lire le motif et retirer le blocage observé           | rendre une nouvelle tentative possible | « Corrigez le motif affiché avant de demander une nouvelle exploration. »                  |
| travailler le CTR           | responsable du contenu | comparer le résultat affiché à la recherche           | savoir si la page est choisie          | « Si la page s'affiche sans clic, notez le titre et l'extrait avant de les modifier. »     |
| renforcer les signaux       | équipe SEO             | définir la question visée et la page qui y répond     | éviter une correction générique        | « Associez une recherche précise à la page qui doit y répondre. »                          |
| lancer un audit complet     | dirigeant              | transmettre la fiche datée et les écrans utiles       | borner l'intervention                  | « Demandez un audit si plusieurs pages ou plusieurs étapes restent inexpliquées. »         |

## B. Contrat de réponse

### Réponse courte

Un site en ligne n'est pas automatiquement visible pour chaque recherche.
Commencez par une URL complète et une requête exacte. L'inspection d'URL de
Search Console permet de vérifier la dernière exploration connue et l'état
d'indexation ; le rapport Performances permet ensuite de rechercher les
impressions et les clics de la page. Corrigez seulement le premier obstacle
observé. Si la page est indexée mais n'obtient pas de visibilité utile, le
diagnostic éditorial et concurrentiel appartient au guide frère
`site-indexe-sans-trafic`, pas à cette page.

### Questions indispensables

1. Quelle URL complète doit apparaître ?
2. Pour quelle recherche exacte et dans quel contexte ?
3. Google a-t-il trouvé et ouvert la page ?
4. Quelle version a-t-il indexée, et quel motif affiche-t-il sinon ?
5. La page reçoit-elle des impressions puis des clics avec les mêmes filtres ?

### Questions secondaires

- La commande `site:` suffit-elle ?
- Faut-il redemander l'indexation plusieurs fois ?
- Comment donner un accès Search Console sans partager son mot de passe ?
- Le diagnostic couvre-t-il Google Maps et la fiche d'établissement ?

### Hors périmètre

- Google Business Profile, le pack local et Maps ;
- Google Ads ;
- les baisses historiques de positions ;
- l'audit complet d'un site ;
- le diagnostic approfondi d'une page indexée mais sans trafic ;
- la conversion des visites en demandes ;
- toute garantie d'exploration, d'indexation, de classement ou de délai.

### Bonnes réponses qui peuvent être « ne rien acheter »

- attendre un nouveau contrôle daté si la page est récente, accessible et sans
  motif bloquant ;
- demander au prestataire actuel de corriger un `noindex`, une erreur serveur
  ou une redirection clairement identifiée ;
- ne pas lancer de refonte quand le problème concerne une seule URL ;
- ouvrir un audit seulement lorsque plusieurs URL, une migration ou des états
  contradictoires empêchent une correction bornée.

## C. Corpus interne et cannibalisation

### Pages et outils inspectés

| Page ou code                      | Intention actuelle                                              | Différence du guide                                             | Décision de maillage                                            |
| --------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `/services/referencement-google`  | présenter une prestation SEO transactionnelle et ses formats    | le guide donne un autodiagnostic avant toute prestation         | lien vers le service après les cas où un audit est proportionné |
| `/services/audit-technique`       | faire contrôler le socle d'un site ou d'une application         | le guide ne mène qu'au premier état SEO non confirmé            | lien seulement si l'exploration échoue pour une cause technique |
| `/services/sites-vitrines`        | créer ou refaire un site                                        | le guide peut conclure qu'une refonte n'est pas nécessaire      | aucun renvoi automatique vers une refonte                       |
| futur `site-indexe-sans-trafic`   | expliquer une page indexée qui ne gagne pas de visibilité utile | le présent guide s'arrête à la classification impressions/clics | frontière écrite ; aucun lien public avant publication          |
| futur `positions-google-baissent` | diagnostiquer une perte mesurée dans le temps                   | le présent guide traite une absence ponctuelle                  | exclu du plan                                                   |
| `prix-gestion-google-ads`         | chiffrer une prestation publicitaire                            | canal et intention différents                                   | aucun lien artificiel                                           |
| `SearchVisibilityDiagnostic`      | ancienne fiche locale en six étapes jusqu'aux demandes          | utile comme base technique, mais hors périmètre et trop longue  | réduire à quatre contrôles et retirer les demandes              |

**Justification d'une URL distincte :** aucune page publique actuelle ne
permet à un dirigeant de documenter, sur le même couple URL-requête, le passage
de l'exploration à l'indexation puis aux impressions et aux clics.

### Liens retenus

- aide Google sur l'inspection d'URL, près du mode d'emploi ;
- documentation Google sur l'opérateur `site:`, près de sa limite ;
- documentation Google sur les sitemaps et la nouvelle exploration, près des
  actions correspondantes ;
- aide Google sur le rapport Performances, près des filtres ;
- page service SEO uniquement dans la décision finale et le CTA ;
- aucun guide privé ou futur n'est lié dans le visible.

## D. Analyse externe et demande

### État de la demande

```text
Search Console du site Hagnéré Code : NON_MESUREE (aucun export fourni)
Keyword Planner France/français : NON_MESUREE (aucun export fourni)
Volume mensuel : NON_MESUREE
Tendance chiffrée : NON_MESUREE
Concurrence SEO calculée : NON_MESUREE
Signal disponible : formulation exacte et résultats francophones actuels observés
```

Une suggestion, un résultat visible ou la fraîcheur d'une page ne devient pas
un volume. La priorité D1/A vient de la roadmap et de la présence répétée du
symptôme dans la SERP, pas d'un nombre de recherches revendiqué.

### SERP qualitative du 18 août 2026

Recherches effectuées depuis l'outil web, en français :

- `pourquoi mon site n'apparaît pas sur Google` ;
- `site indexé mais invisible Google`.

Le relevé est une photographie qualitative. L'ordre dépend du lieu, de
l'appareil, de la langue et du moment ; aucune position stable n'est consignée.

| Résultat examiné                                                                                            | Date affichée              | Angle et format                                    | Bon point                                             | Manque ou risque constaté                                                             |
| ----------------------------------------------------------------------------------------------------------- | -------------------------- | -------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [Aide Search Console — page manquante](https://support.google.com/webmasters/answer/7474347?hl=fr)          | page vivante               | procédure officielle par page                      | sépare page nouvelle, indexation et actions manuelles | dense pour un dirigeant et ne fournit pas une fiche transmissible                     |
| [Communic'Action — 10 causes](https://communicaction.net/guides/pourquoi-site-invisible-google)             | 12 juin 2026               | liste de causes + diagnostic express               | langage accessible, actions rapides                   | durées et verdict `site:` plus fermes que les limites officielles ; catalogue large   |
| [M la Fraise — 9 causes](https://www.mlafraise.fr/blog/pourquoi-mon-site-n-apparait-pas-sur-google)         | résultat daté de juin 2026 | causes fréquentes pour non-technicien              | formulation proche du vécu                            | page inaccessible lors de l'ouverture ; aucun fait technique repris                   |
| [Enjin — guide complet](https://www.enjin.fr/pourquoi-mon-site-napparait-pas-sur-google/)                   | 6 mars 2026                | découverte, indexation, causes, WordPress, contenu | distingue indexation et classement                    | part vite vers une longue liste et affirme des fréquences non démontrées              |
| [Innotia — causes et solutions](https://www.innotia.fr/blog/pourquoi-mon-site-napparait-il-pas-sur-google-) | date non trouvée           | checklist technique puis contenu                   | reconnaît l'absence de méthode miracle                | mêle sources primaires et secondaires ; élargit à performance, HTTP, contenu et liens |

**Angle mort commun :** beaucoup de pages donnent une liste de huit à douze
causes. Elles demandent rarement au lecteur de garder la même URL, la même
requête et les mêmes filtres, puis de produire un relevé qu'un prestataire peut
relire sans recommencer tout le diagnostic.

**Valeur originale :** une fiche locale, copiable et imprimable, qui arrête le
lecteur au premier contrôle non fermé. Elle ne note pas le site et n'envoie
aucune donnée.

### Vocabulaire réellement observé

- mon site n'apparaît pas / est invisible / est introuvable ;
- Google voit-il mon site ?
- indexé mais invisible ;
- faire indexer une page ;
- site trop récent ;
- `noindex`, `robots.txt`, sitemap et Search Console, souvent sans distinction.

## E. Matrice d'information utile

| Question du lecteur                    | Ce que la SERP explique déjà       | Ce qui reste imprécis                                 | Réponse supplémentaire du guide                                 | Source nécessaire                           |
| -------------------------------------- | ---------------------------------- | ----------------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------- |
| « Google connaît-il mon site ? »       | utiliser `site:` ou Search Console | un domaine entier masque les différences entre pages  | choisir une URL complète et lire l'inspection                   | inspection d'URL + limite de `site:`        |
| « Google peut-il lire la page ? »      | vérifier robots et serveur         | test actuel et dernière version connue sont confondus | comparer le verdict indexé au test en ligne                     | inspection d'URL                            |
| « Pourquoi n'est-elle pas indexée ? »  | listes de causes fréquentes        | le lecteur corrige tout à la fois                     | recopier le motif exact, la canonique et `noindex`              | inspection + rapport Pages                  |
| « Est-elle affichée sur mon métier ? » | regarder la position               | position unique présentée à tort                      | filtrer page + requête + période ; lire d'abord les impressions | rapport Performances                        |
| « Personne ne clique : que faire ? »   | modifier titre et contenu          | causalité supposée trop vite                          | classer le cas puis s'arrêter avant l'audit de trafic           | rapport Performances + frontière éditoriale |
| « Dois-je payer un audit ? »           | CTA d'agence rapide                | correction ponctuelle et attente peu visibles         | comparer correction interne, recontrôle et audit ciblé          | recommandation éditoriale qualifiée         |

### Matrice de couverture obligatoire — représentation G1

Les sept colonnes ci-dessous reprennent exactement les dimensions demandées
par le §3.2. Dans cette représentation, `RENVOYE` signifie
`RENVOI_EXPLICITE` et `ECARTE` signifie `ECARTE_JUSTIFIE` au sens du document
de gouvernance. `BLOQUANT` reste réservé à une réponse matérielle manquante.

| Angle ou sous-intention                      | Question réelle ou objection du lecteur                                                        | Réponse claire et localisation dans le guide                                                                                                             | Exemple, démonstration ou cas contrasté                                                                                                  | Limite, contre-cas, source ou inconnue                                                                                           | Décision ou action rendue possible                                                                         | Statut  |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------- |
| Unité du diagnostic : page + recherche       | « Tout mon site est-il invisible ou seulement une page sur une recherche ? »                   | §01, H2 « Ne diagnostiquez pas le site » : écrire une URL complète, une recherche, une période et un contexte.                                           | Page d'accueil trouvée sur la marque mais page de service absente sur une recherche métier.                                              | Une recherche manuelle n'est pas un relevé Search Console ; G03, G04 et G09.                                                     | Ouvrir une fiche distincte par couple URL-recherche au lieu de refaire le site.                            | COUVERT |
| Commande `site:`                             | « Si `site:` ne montre pas ma page, est-elle forcément non indexée ? »                         | §01, sous-partie sur la recherche Google : l'opérateur est un indice non exhaustif ; inspecter l'URL.                                                    | Une page absente de `site:` peut encore être connue ou indexée dans Search Console.                                                      | Résultats non exhaustifs selon G06 ; absence non probante.                                                                       | Ne pas annoncer une désindexation à partir de cette commande seule.                                        | COUVERT |
| Exploration de l'URL                         | « Google connaît-il l'adresse et a-t-il pu ouvrir la page ? »                                  | §02 et contrôle 1 de la fiche : séparer la vue Index Google du test en direct, puis recopier adresse, date, récupération et motif.                        | Test en direct réussi opposé à un état indexé encore absent ; échec actuel opposé à une ancienne version toujours susceptible d'être servie. | Le test en direct ne prouve ni indexation ni détection d'un doublon ; inspection officielle G03/G05/G13.                           | Corriger le motif actuel sans annoncer que l'état historique a déjà changé.                                  | COUVERT |
| Découverte par liens et sitemap              | « Que vérifier si l'adresse est inconnue ? »                                                   | §02 « Si l'adresse est inconnue » : vérifier le lien interne réel et la présence de l'URL principale souhaitée dans le sitemap.                          | URL seulement connue par un ancien lien ou l'historique du navigateur, sans lien interne actuel.                                         | Le sitemap aide à découvrir, ne garantit rien et reste un signal canonique plus faible ; G07/G14.                                | Rendre l'URL découvrable sans soumettre toutes ses variantes ni traiter le sitemap comme une commande.       | COUVERT |
| Indexation, `noindex` et version principale  | « Google a-t-il retenu cette URL ou une autre ? »                                              | §03 : dans la vue Index Google, recopier état, règle `noindex`, adresse déclarée et adresse choisie par Google ; vérifier séparément robots.txt.          | `noindex` présent sur une URL bloquée à l'exploration, donc illisible pour Googlebot ; deux URL proches regroupées sous une canonique.      | Une récupération réussie ne prouve pas l'indexation ; robots.txt peut empêcher la lecture de `noindex` ; G03/G05/G12/G15.         | Corriger le motif exact et décider si la canonique choisie est acceptable avant toute demande.              | COUVERT |
| Nouvelle exploration                         | « Combien de fois demander l'indexation et quand la page apparaîtra-t-elle ? »                 | §03 et FAQ : demander après correction, dater la demande et fixer un recontrôle sans promettre l'apparition.                                             | Demande répétée sans correction opposée à une demande unique après vérification en direct.                                               | Quelques jours à quelques semaines, sans inclusion garantie ; répétition sans accélération, G08.                                 | Attendre le recontrôle prévu ou reprendre la cause, pas multiplier les demandes.                           | COUVERT |
| Impressions pour la recherche visée          | « La page indexée est-elle proposée pour cette recherche précise ? »                           | §04 : fixer le contexte, filtrer la canonique Google et noter le total page, puis ajouter la requête exacte.                                             | Page visible sur d'autres recherches, puis aucune donnée affichée après ajout du filtre de requête.                                      | La plupart des données sont attribuées à la canonique, pas au doublon ; « URL sur Google » ne garantit pas l'affichage ; G04/G09/G13. | Conserver deux relevés comparables et ne pas confondre absence générale et absence sur une requête.          | COUVERT |
| Requête absente du tableau                   | « Une ligne absente signifie-t-elle zéro impression ? »                                        | §04 « Une ligne absente n'est pas forcément égale à zéro » : écrire « aucune donnée visible avec ces filtres ».                                          | Total de page positif avant le filtre, puis ligne absente après ajout de la requête exacte.                                               | Requêtes anonymisées, omises ou tronquées ; un filtre de requête retire les anonymisées du total ; G10.                           | Suspendre le verdict « zéro » et transmettre la limite avec la fiche.                                      | COUVERT |
| Clics et frontière du diagnostic             | « Si la page s'affiche sans clic, faut-il refaire son contenu ? »                              | §05 : relever les clics avec les mêmes filtres ; zéro clic classe le cas sans expliquer la cause.                                                        | Trois cas contrastés dans le tableau : aucune impression visible, impressions sans clic, impressions avec clic.                          | Ni la demande, ni la stabilité de position, ni la concurrence ne sont déduites du relevé ; G09 et H02.                           | Conserver le titre et l'extrait affichés puis ouvrir une analyse séparée si nécessaire.                    | COUVERT |
| Page indexée mais trafic insuffisant         | « Que faire si l'URL reçoit déjà des impressions mais reste peu visible ? »                    | §05 annonce la limite ; §07 renvoie explicitement vers le service existant `/services/referencement-google` pour analyser recherche et pages candidates. | Impressions sans clic opposées à impressions et clics : les deux sortent du diagnostic d'indexation.                                     | Le futur guide `site-indexe-sans-trafic` n'est pas publié et n'est donc pas lié ; aucun volume ou classement futur n'est promis. | Utiliser la ressource SEO réellement disponible ou conserver la fiche ; ne pas redemander l'indexation.    | RENVOYE |
| Fiche URL-recherche autonome                 | « Comment transmettre un constat sans empiler des captures isolées ? »                         | §06 : outil local avec identité, quatre contrôles, premier arrêt, copie et impression.                                                                   | Une capture sans URL ni période est opposée à une fiche datée qui conserve tous les filtres.                                             | L'outil ne se connecte pas à Search Console et ne rend aucun verdict au nom de Google.                                           | Produire un document réutilisable par le prestataire actuel ou un autre intervenant.                       | COUVERT |
| Sécurité des accès                           | « Dois-je donner mon mot de passe Search Console à un prestataire ? »                          | FAQ et fin du §06 : ajouter un utilisateur avec l'autorisation nécessaire, puis retirer l'accès.                                                         | Accès par rôle temporaire opposé au partage du compte personnel et d'un code de connexion.                                               | Les rôles de propriétaire et utilisateur diffèrent ; source officielle G11.                                                      | Accorder le minimum nécessaire sans transmettre de secret d'authentification.                              | COUVERT |
| Données saisies dans l'outil                 | « Où vont mon URL, ma requête et mes notes ? »                                                 | Héros de l'outil et §06 : état local du navigateur, aucun réseau ni stockage persistant ; relire avant transmission.                                     | URL non publique ou note interne saisie localement puis copiée volontairement par l'utilisateur.                                         | Aucune connexion Search Console ; la copie ou l'impression choisie par le lecteur sort ensuite du composant.                     | Éviter les données inutiles, relire la fiche et choisir soi-même son destinataire.                         | COUVERT |
| Continuité du diagnostic                     | « Une autre personne peut-elle reprendre le contrôle après une absence ou un incident ? »      | §07 « paquet de diagnostic réutilisable » : fiche, motif, captures filtrées, correction, propriétaire et date de recontrôle.                             | Intervention interrompue après correction : le successeur retrouve ce qui a changé et quand vérifier.                                    | Ce paquet organise le diagnostic, pas un plan complet de continuité d'activité ni une restauration technique.                    | Reprendre sans recommencer par une recherche manuelle ni perdre la chronologie.                            | COUVERT |
| Maintenance générale du site                 | « Ce guide définit-il le plan de maintenance du CMS, du serveur ou des extensions ? »          | Hors périmètre justifié : §07 ne traite que la correction observée et son recontrôle ; tout changement futur ouvre une nouvelle fiche datée.             | Une mise à jour qui réintroduit un blocage est un nouvel événement à diagnostiquer, pas une preuve que ce guide remplace la maintenance. | La maintenance préventive ne change pas l'emplacement du premier arrêt aujourd'hui ; aucun contrat de maintenance n'est évalué.  | Ne pas transformer ce diagnostic ponctuel en programme de maintenance non étudié.                          | ECARTE  |
| Réversibilité et changement de prestataire   | « Puis-je faire reprendre le dossier sans rester dépendant de la personne qui l'a commencé ? » | §06 couvre l'accès par rôle ; §07 fournit un paquet transmissible et nomme la correction déjà tentée.                                                    | Retrait de l'utilisateur Search Console puis transmission de la même fiche au prestataire suivant.                                       | La fiche ne transfère ni propriété de domaine, ni code source, ni contrats ; ces actifs sortent du diagnostic.                   | Garder la maîtrise des accès et transmettre des faits datés plutôt qu'un compte partagé.                   | COUVERT |
| Responsabilité et prochain contrôle          | « Qui corrige, qui vérifie et à quelle date ? »                                                | Outil §06 : champs responsable et date de recontrôle ; §07 : propriétaire de l'action dans le paquet.                                                    | Correction technique par un développeur, contrôle Search Console repris par la personne nommée à la date écrite.                         | Google ne garantit pas la date de traitement ; la date saisie est une date interne de contrôle, pas une promesse.                | Affecter l'action, conserver sa date et éviter une attente sans propriétaire.                              | COUVERT |
| Google Maps et fiche établissement           | « Mon établissement est absent de Maps : cette méthode suffit-elle ? »                         | Encadré §01 et FAQ : séparer URL web et fiche locale, puis arrêter ce parcours si seule la fiche est concernée.                                          | Page web visible mais fiche établissement absente de Maps.                                                                               | Produit et contrôles distincts ; aucune procédure Maps n'est revendiquée ici.                                                    | Ne pas appliquer les verdicts Search Console à la fiche locale.                                            | ECARTE  |
| Google Ads                                   | « Une annonce payante absente ou inactive relève-t-elle de ce diagnostic ? »                   | Hors périmètre du contrat de réponse : le guide traite les pages web dans les résultats naturels et les rapports Search Console.                         | Une campagne Ads peut être inactive alors que l'URL reste explorée, indexée et visible naturellement.                                    | Canal, compte, diffusion et rapports distincts ; aucun lien causal n'est établi.                                                 | Ouvrir un diagnostic publicitaire séparé au lieu de modifier l'indexation.                                 | ECARTE  |
| Dépense, refonte et audit                    | « Dois-je payer une refonte, du contenu ou un audit maintenant ? »                             | §01 refuse l'achat avant localisation ; §07 compare correction bornée, recontrôle daté et audit ciblé.                                                   | Blocage unique déjà nommé opposé à plusieurs URL ou états contradictoires.                                                               | Aucun prix, retour sur investissement ou résultat commercial n'est calculé ; H03 reste une recommandation qualifiée.             | Choisir l'action la moins lourde qui ferme l'inconnue observée.                                            | COUVERT |
| Volume de recherche et priorité SEO du sujet | « Combien de personnes cherchent cette question chaque mois ? »                                | Le guide ne transforme aucune suggestion ou SERP en volume ; le disclaimer précise qu'il ne mesure pas la demande.                                       | Aucun export Search Console ou Keyword Planner fourni : le volume reste `NON_MESUREE`.                                                   | Ce chiffre ne change pas l'ordre du diagnostic d'une URL déjà choisie ; U01 reste inconnu.                                       | Ne pas inventer de volume et ne pas conditionner le contrôle technique à une estimation absente.           | ECARTE  |

**Bilan de couverture après correction : 16 `COUVERT`, 1 `RENVOYE`, 4
`ECARTE`, 0 angle matériel `BLOQUANT`.** Toutes les perspectives demandées —
sécurité, données, continuité, maintenance, réversibilité et responsabilité —
ont une ligne dédiée ; l'écartement de la maintenance générale est justifié
par le périmètre ponctuel et daté du diagnostic.

## F. Registre des affirmations et fiche de preuves

| ID  | Affirmation publiable                                                                                                                           | Type           | Source primaire                                                                                                                       | Périmètre et date                                                       | Statut    |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | --------- |
| G01 | Google décrit trois étapes : exploration, indexation et diffusion des résultats                                                                 | FAIT           | [Google Search Central — fonctionnement de Search](https://developers.google.com/search/docs/fundamentals/how-search-works?hl=fr)     | fonctionnement général ; mise à jour 18/12/2025 ; consulté 18/08/2026   | VERIFIE   |
| G02 | Google ne garantit pas qu'une page sera explorée, indexée ou diffusée                                                                           | FAIT           | même source                                                                                                                           | toutes pages ; consulté 18/08/2026                                      | VERIFIE   |
| G03 | L'inspection montre la version connue de l'index et propose séparément un test en ligne                                                         | FAIT           | [Aide Search Console — inspection d'URL](https://support.google.com/webmasters/answer/9012289?hl=fr)                                  | URL d'une propriété accessible ; consulté 18/08/2026                    | VERIFIE   |
| G04 | « Cette URL est sur Google » ne garantit pas son affichage dans les résultats                                                                   | FAIT           | même source                                                                                                                           | verdict d'inspection ; consulté 18/08/2026                              | VERIFIE   |
| G05 | L'inspection expose exploration, récupération, indexation autorisée et URL canonique choisie                                                    | FAIT           | [Inspecter une seule page](https://support.google.com/webmasters/answer/12482179?hl=fr)                                               | interface Search Console ; consulté 18/08/2026                          | VERIFIE   |
| G06 | Une requête `site:` n'est pas une liste exhaustive des URL indexées                                                                             | FAIT           | [Google — opérateur `site:`](https://developers.google.com/search/docs/monitor-debug/search-operators/all-search-site?hl=fr)          | recherche Google ; mise à jour 18/12/2025 ; consulté 18/08/2026         | VERIFIE   |
| G07 | Un sitemap aide à découvrir les URL sans garantir exploration ni indexation                                                                     | FAIT           | [Google — sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview?hl=fr)                              | sitemap d'un site ; consulté 18/08/2026                                 | VERIFIE   |
| G08 | Une demande de nouvelle exploration peut prendre plusieurs jours ou semaines, sans inclusion garantie ; la répéter n'accélère pas l'exploration | FAIT           | [Google — demander une nouvelle exploration](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl?hl=fr) | URL gérée ; mise à jour 31/12/2025 ; consulté 18/08/2026                | VERIFIE   |
| G09 | Le rapport Performances expose clics, impressions, requêtes et pages, avec filtres et période                                                   | FAIT           | [Aide Search Console — Performances](https://support.google.com/webmasters/answer/7576553?hl=fr)                                      | résultats de recherche couverts ; consulté 18/08/2026                   | VERIFIE   |
| G10 | Certaines requêtes sont anonymisées, omises ou tronquées ; avec un filtre de requête, les anonymisées sortent du total                            | FAIT           | [Aide Search Console — dimensions et regroupements](https://support.google.com/webmasters/answer/17011259?hl=fr)                      | tableau et filtre de requête ; consulté 18/08/2026                      | VERIFIE   |
| G11 | Un propriétaire peut ajouter un utilisateur avec un rôle, sans partager son mot de passe                                                        | FAIT           | [Aide Search Console — utilisateurs et autorisations](https://support.google.com/webmasters/answer/7687615?hl=fr)                     | propriété Search Console ; consulté 18/08/2026                          | VERIFIE   |
| G12 | La règle `noindex`, servie dans une balise meta ou un en-tête HTTP, demande l'exclusion de la page des résultats après exploration              | FAIT           | [Google Search Central — règle noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=fr)             | page accessible au robot ; mise à jour 31/12/2025 ; consulté 18/08/2026 | VERIFIE   |
| G13 | Le test en direct évalue une version actuelle sans prouver son indexation ni détecter les doublons ; la plupart des données de performance vont à la canonique Google | FAIT | [Inspection d'URL](https://support.google.com/webmasters/answer/12482179?hl=fr) et [dimensions Performances](https://support.google.com/webmasters/answer/17011259?hl=fr) | URL d'une propriété ; consulté 18/08/2026 | VERIFIE |
| G14 | Redirection et balise `rel=canonical` sont des indications fortes ; l'inclusion au sitemap est une indication plus faible                         | FAIT           | [Google Search Central — URL canonique](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=fr) | pages doubles ou très similaires ; consulté 18/08/2026                  | VERIFIE   |
| G15 | Un blocage `robots.txt` peut empêcher Googlebot de lire `noindex`, et robots.txt n'est pas un moyen fiable de retirer une URL des résultats       | FAIT           | [Google — noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=fr) et [robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=fr) | pages web ; consulté 18/08/2026 | VERIFIE |
| H01 | Le premier état non confirmé fixe la prochaine vérification de la fiche                                                                         | RECOMMANDATION | logique éditoriale et déterministe de l'outil                                                                                         | ce guide uniquement                                                     | VERIFIE   |
| H02 | Une canonique Google indexée qui reçoit des impressions sort du diagnostic d'indexation                                                         | DEDUCTION      | G03, G04, G09 et G13                                                                                                                  | canonique + requête + période + contexte identiques                      | VERIFIE   |
| H03 | Une correction ponctuelle suffit parfois ; un audit devient proportionné si plusieurs pages ou états restent incohérents                        | RECOMMANDATION | recommandation Hagnéré Code                                                                                                           | non universelle ; à présenter comme choix                               | A_NUANCER |
| U01 | Volume mensuel de la requête                                                                                                                    | INCONNU        | aucun export                                                                                                                          | France, français                                                        | INCONNU   |
| U02 | Position future du guide ou d'un site diagnostiqué                                                                                              | INCONNU        | aucune source possible                                                                                                                | toute page                                                              | A_RETIRER |
| U03 | Délai propre à l'URL du lecteur                                                                                                                 | INCONNU        | Google ne le garantit pas                                                                                                             | cas individuel                                                          | A_RETIRER |

### Contradictions et données à ne pas publier

- La SERP transforme souvent l'absence de résultat `site:` en verdict ; la
  documentation officielle dit que l'opérateur n'est pas exhaustif.
- Plusieurs pages donnent des délais SEO fixes ou des fenêtres d'indexation
  présentées comme normales. Le guide ne publie que la variabilité et
  l'absence de garantie documentées par Google.
- Le sitemap est parfois présenté comme une commande d'indexation. Google le
  décrit comme une aide à la découverte.
- « Cette URL est sur Google » est parfois traduit par « la page est visible ».
  Le verdict signifie seulement qu'elle peut être affichée, sans garantie.
- Les causes « contenu trop court », « manque d'autorité » ou « site lent » ne
  seront pas diagnostiquées sans données propres à la page.
- Aucun volume, difficulté, taux de clics moyen, délai moyen ou nombre de mots
  conseillé n'est disponible.

### Fraîcheur

Les pages Google sont vivantes. Revalider l'inspection d'URL, le rapport
Performances, les libellés d'états et la documentation de nouvelle exploration
avant toute modification substantielle ou au plus tard lorsque l'interface
Search Console change.

## G. Calculs, scénarios et artefact

### Calculs et scénarios

La décision ne nécessite ni estimation de marché, ni faux cas chiffré. La P1
retire donc le scénario fictif de l'archive et n'affiche aucun taux d'exemple.
Si le lecteur veut calculer un taux de clics, Search Console l'affiche déjà et
la source officielle définit la formule `clics / impressions`. Ajouter un
calculateur n'apporterait aucune décision supplémentaire.

### Artefact retenu : fiche URL-requête locale

La ressource interactive est justifiée parce qu'elle produit un document
transmissible que l'article seul ne produit pas.

Entrées d'identité :

```text
Date du contrôle
Période observée
URL complète
Recherche exacte
Type de recherche (marque ou métier)
Pays et appareil
Responsable
Date de recontrôle
```

Quatre contrôles, dans l'ordre :

1. **Exploration :** URL inconnue, ouverture réussie, ouverture échouée ou
   état non vérifié ;
2. **Indexation :** version indexée, non indexée ou état non vérifié ;
3. **Impressions :** valeur visible, aucune donnée visible ou état non vérifié ;
4. **Clics :** valeur positive, zéro visible, aucune donnée visible ou état non
   vérifié.

Sortie : premier contrôle à reprendre, conclusion permise, limite, action,
responsable et date de recontrôle. La fiche peut être copiée et imprimée. Rien
n'est envoyé ni enregistré ; aucune API, aucun stockage local et aucun accès
Search Console ne sont utilisés.

Règles déterministes :

- un état positif sans note recopiée reste incomplet ;
- une URL inconnue ou une exploration échouée arrête la lecture avant le
  contenu ;
- une version non indexée arrête la lecture avant les impressions ;
- l'absence de ligne de requête reste « aucune donnée visible », pas « zéro
  impression certain » ;
- zéro clic visible est distinct d'une ligne absente ;
- une chaîne complète classe le problème mais ne prétend pas expliquer une
  page indexée sans trafic.

### Empreinte éditoriale à ne pas reproduire

| Voisin inspecté                    | Ouverture                        | Progression                       | Dispositif dominant                      | CTA/conclusion                           |
| ---------------------------------- | -------------------------------- | --------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `prix-gestion-google-ads`          | prix incompatibles               | sept coûts puis quatre modèles    | calculateur et exemple chiffré           | fiche pour comparer des offres           |
| `combien-de-temps-developper-saas` | absence de durée universelle     | dépendances, capacités, scénarios | planificateur long et cas fictif         | faire relire un calendrier               |
| `mvp-saas-quoi-inclure`            | résultat et preuve attendue      | familles et cinq choix            | contrat local, états et calcul de charge | figer ou reporter le MVP                 |
| `signes-besoin-logiciel-metier`    | trois situations                 | urgence puis six réponses         | trois exemples fictifs                   | décider d'un pilote ou d'une observation |
| service SEO                        | promesse de visibilité mesurable | problèmes, livrables, formats     | cartes de prestation                     | décrire un besoin                        |

Choix du nouveau guide :

```text
Tension : le lecteur parle de « son site » alors que le constat doit porter sur une page et une recherche
Ouverture : symptôme réel puis réponse immédiate, sans personnage fictif
Progression : quatre écrans Search Console dans l'ordre où ils ferment le diagnostic
Artefact : fiche locale courte, copiable et imprimable
Rythme : prose brève, quatre cartes de contrôle, mode d'emploi puis décision
CTA : une seule sortie commerciale persistante, après une action autonome complète dans le corps
Conclusion : choisir entre correction bornée, recontrôle daté et audit ciblé
Différences : aucun budget, aucun faux cas, aucun score, aucune matrice à six options ; quatre contrôles seulement ; arrêt explicite avant le diagnostic « indexé sans trafic »
```

### Plan annoté

| Section                                         | Question résolue                                   | Source ou exemple                   | Décision                                  | Format               |
| ----------------------------------------------- | -------------------------------------------------- | ----------------------------------- | ----------------------------------------- | -------------------- |
| Commencez par une page et une recherche         | pourquoi « mon site est invisible » est trop vague | limite officielle de `site:`        | écrire l'URL et la requête                | prose + mémo         |
| Vérifiez si Google peut ouvrir la page          | Google connaît-il et récupère-t-il l'URL ?         | inspection indexée et test en ligne | corriger l'obstacle observé ou poursuivre | carte de lecture     |
| Lisez le motif avant de redemander l'indexation | quelle version Google retient-il ?                 | inspection, canonique, `noindex`    | traiter le motif puis demander une fois   | prose + liste        |
| Filtrez page et recherche dans Performances     | la page est-elle montrée ?                         | impressions et limites des requêtes | classer le cas, sans conclure « zéro »    | étapes numérotées    |
| Les clics marquent la frontière de ce guide     | le résultat est-il choisi ?                        | clics Search Console                | transmettre au futur diagnostic de trafic | cartes de sortie     |
| Remplissez la fiche URL-requête                 | comment obtenir un relevé transmissible ?          | outil local déterministe            | copier ou imprimer                        | composant interactif |
| Corrigez, recontrôlez ou faites auditer         | quel niveau d'aide est proportionné ?              | recommandations qualifiées          | choisir la sortie la moins lourde         | trois cartes         |

## H. Ressource, conversion, QA et journal de passe

### Ressource et conversion

```text
Ressource nécessaire : oui, outil intégré ; aucun téléchargement séparé
Résultat autonome : fiche URL-requête avec premier contrôle à reprendre
Données : uniquement dans l'état React de la page ; aucune transmission ni persistance
Exemple rempli : non ; les placeholders restent clairement des exemples de saisie
Conclusion « ne pas investir » : oui
Bon fit : plusieurs pages, migration, motifs contradictoires, obstacle traversant plusieurs métiers
Mauvais fit : un blocage unique déjà nommé et corrigeable, ou une page indexée dont le sujet est désormais la visibilité éditoriale
Action non commerciale : copier la fiche et l'envoyer au prestataire actuel
CTA : « Faire relire mon diagnostic » vers /demarrer-un-projet
Résultat après clic : formulaire de description du besoin, pas réservation automatique
Événement disponible : guide_cta_click sur les composants partagés, après consentement uniquement
```

### P0 à empêcher en P1

- [x] pas de volume, position, délai individuel ni garantie inventés ;
- [x] sources techniques uniquement officielles ;
- [x] frontière avant l'analyse approfondie d'une page indexée sans trafic ;
- [x] `site:` décrit comme indice non exhaustif ;
- [x] sitemap, exploration et indexation non confondus ;
- [x] absence de ligne de requête distincte de zéro ;
- [x] aucun exemple client ou faux résultat ;
- [x] statut du registre conservé à `draft` ;
- [x] ni sitemap ni `llms.txt` modifiés à la main.

### P0/P1 ouverts après auto-contrôle

```text
P0 ouverts : aucun défaut P0 identifié par l'agent P1
P1 ouverts : aucun angle matériel BLOQUANT après correction de la matrice ; nouvelle décision G1 indépendante attendue ; contrôle visuel réel à 390 px réservé à la passe finale ; aucune donnée Search Console ou Keyword Planner du site fournie
GATE_P1 : NO_GO_P1 le 18/08/2026 ; aucune passe suivante autorisée
```

### GATE_P1 — première décision de l'orchestrateur

```text
GATE_P1
Décision : NO_GO_P1
Contrôles :
- intention : réponse directe et frontière URL → exploration → indexation → impressions → clics cohérentes
- sources : sources techniques primaires Google ; assertions structurantes rapprochées du registre
- calculs : aucun calcul ni scénario chiffré nécessaire ; aucune donnée de demande inventée
- structure : sept sections complètes et outil déterministe, mais matrice de couverture obligatoire absente
- technique : manifeste exact ; tests ciblés 36/36 ; snapshot publié exact ; statut draft et robots privés
Corrections exigées : ajouter la matrice de couverture localisable avec les sept colonnes obligatoires et un statut explicite COUVERT, RENVOYE, ECARTE ou BLOQUANT pour chaque angle ; vérifier qu'aucun angle matériel n'est BLOQUANT ; corriger le doublon de requête dans le relevé SERP ; régénérer et revalider le manifeste P1
SHA-256 validé : 228aa94f56b7dcb319cf190608a3239d61b6384123117630b997eb527ed5136e avant corrections
```

### Rapport de correction P1 — représentation à G1

```text
Décision historique préservée : GATE_P1 = NO_GO_P1 le 18/08/2026
Correction 1 : matrice de couverture ajoutée avec exactement sept dimensions et 21 angles matériels localisables
Correction 2 : statuts réconciliés — 16 COUVERT, 1 RENVOYE, 4 ECARTE, 0 BLOQUANT
Correction 3 : sécurité, données, continuité, maintenance, réversibilité et responsabilité disposent chacune d'une ligne ; maintenance générale est ECARTEE avec justification
Correction 4 : formulation redondante supprimée du relevé SERP
Correction 5 : manifeste P1 recalculé sur son périmètre exact ; le dossier de recherche reste exclu conformément au mandat P1 initial
Contrôles de représentation : matrice 21/21 lignes matérielles avec sept colonnes ; doublon SERP absent ; tests ciblés 20/20 ; check:seo 207/207 ; TypeScript, ESLint ciblé et diff-check réussis ; shasum -c exact
Empreinte représentée : 228aa94f56b7dcb319cf190608a3239d61b6384123117630b997eb527ed5136e
REPRESENTATION_G1 : DEMANDEE
Décision attendue : GO_PASSE_2 ou NO_GO_P1 par l'orchestrateur uniquement
Autorisation de passe suivante : aucune au moment de la représentation
```

### GATE_P1 — seconde décision de l'orchestrateur

```text
GATE_P1
Décision : GO_PASSE_2
Contrôles :
- intention : réponse immédiate sur un couple URL-recherche ; progression bornée exploration → indexation → impressions → clics ; frontière explicite avant le diagnostic de trafic
- sources : affirmations techniques rapprochées de sources Google primaires ; fonctionnement général, limites de site: et nouvelle exploration relus par l'orchestrateur le 18/08/2026
- calculs : aucun calcul ni cas chiffré requis ; volumes, positions et délais individuels laissés NON_MESURES ou retirés
- structure : sept sections complètes ; matrice de 21 angles avec 16 COUVERT, 1 RENVOYE, 4 ECARTE et 0 BLOQUANT ; sécurité, données, continuité, maintenance, réversibilité et responsabilité explicitement traitées
- technique : manifeste P1 exact ; tests ciblés 36/36 ; snapshot publié exact ; TypeScript/check:seo/diff-check verts dans le rapport de passe ; statut draft et robots privés
Corrections exigées avant P2 : aucune
Contrôles finaux réservés : trois images Article, BAT visuel multi-largeur, audit complet et validation de production avant publication
SHA-256 validé : 228aa94f56b7dcb319cf190608a3239d61b6384123117630b997eb527ed5136e
```

### Journal P1 — création complète

```text
Agent : guide_google_p1
Fichiers lus intégralement : CLAUDE.md ; règle d'or SEO ; charte qualité ; workflow maître ; roadmap ; modèle de dossier ; archive du guide
Code inspecté : registre, SEO centralisé, layout premium, blocs de contenu, outil historique, page service SEO et quatre guides voisins
Recherche : deux formulations non redondantes conservées dans le relevé SERP du 18/08/2026 ; cinq résultats éditoriaux ; dix pages Google officielles
Décisions : retirer le faux cas historique ; réduire six étapes à quatre ; conserver un outil local sans réseau ; ne pas créer de calculateur
Affirmations retirées : volume, fréquence, taux moyen, causalité de classement et diagnostic de conversion
Tests : 20/20 ciblés ; 36/36 avec le registre ; check:seo 207/207 ; ESLint ciblé, TypeScript et diff-check réussis ; rendu local HTTP 200 ; 2 416 mots visibles / 12 min
Risques résiduels : contre-audit des affirmations, contrôle visuel multi-largeur et lecture humaine réservés aux passes et gates suivantes ; aucune demande réelle mesurée
Décision orchestrateur : NO_GO_P1 le 18/08/2026 préservée ; représentation G1 demandée après correction de la matrice
Empreinte SHA-256 du manifeste P1 : 228aa94f56b7dcb319cf190608a3239d61b6384123117630b997eb527ed5136e
```

### Rapport P1 — livré à la porte G1

```text
PASSE_1_TERMINEE
Slug : pourquoi-site-pas-visible-google
Fichiers créés ou réécrits : page ; image Open Graph ; test de contenu ; fiche interactive et modèle déterministe avec leurs tests ; entrée du registre et test transversal ; icône préparée dans le hub ; retrait de la redirection historique ; snapshot du corpus publié ; dossier de recherche ; manifeste P1
Contrat de réponse : première étape non confirmée entre exploration, indexation, impressions et clics
Sources primaires : Google Search Central et aide Search Console, consultées le 18/08/2026
Plan et sections : sept sections, sans quota
Calculs et exemples : aucun calcul ; aucun scénario fictif
Contre-cas : correction ponctuelle, attente datée, page déjà indexée, audit ciblé
CTA : faire relire la fiche via /demarrer-un-projet
Contrôles : tests ciblés 20/20 ; lot incluant le registre 36/36 ; check:seo 207/207 ; ESLint ciblé ; tsc --noEmit ; git diff --check ; rendu local 200 ; mesure officielle 2 416 mots / 12 min ; shasum -c exact
P0 ouverts : aucun identifié en auto-contrôle P1
P1 ouverts : validation indépendante G1, contre-audit des sources, contrôle visuel final et lecture humaine ; demande SEO chiffrée NON_MESUREE
Statut public : editorialStatus draft ; robots noindex/nofollow ; sitemap et llms non modifiés à la main
Manifeste P1 : docs/research/manifests/pourquoi-site-pas-visible-google-p1.sha256
Hash du snapshot : 228aa94f56b7dcb319cf190608a3239d61b6384123117630b997eb527ed5136e
```

### Assertions recensées avant modification P2

Le contre-audit a commencé par cette liste, dressée avant toute correction du
guide ou de l'outil :

1. Google décrit exploration, indexation et diffusion comme trois étapes, sans
   garantir qu'une URL franchira chacune d'elles.
2. l'inspection distingue la version connue de l'index du test en direct ; le
   second ne prouve ni l'indexation effective ni la canonique retenue ;
3. l'accès HTTP, `robots.txt`, `noindex`, les redirections et la canonique ne
   sont pas des synonymes et ne produisent pas le même verdict ;
4. l'opérateur `site:` est un indice non exhaustif, pas une preuve d'absence ;
5. le sitemap facilite la découverte mais ne garantit ni exploration ni
   indexation ;
6. une demande de nouvelle exploration n'offre ni délai individuel ni garantie
   d'inclusion, et sa répétition n'accélère pas le traitement ;
7. clics et impressions doivent être lus avec la période, le type de recherche,
   le contexte, la page et la requête conservés ;
8. une requête absente du tableau n'établit pas un zéro absolu ;
9. Search Console permet un accès par rôle sans partage du mot de passe ;
10. l'outil doit recommander le premier contrôle non confirmé, dans un ordre
    déterministe ;
11. zéro clic visible et absence de ligne de requête sont deux états distincts ;
12. la frontière éditoriale intervient avant l'explication d'une canonique
    indexée qui reçoit déjà des impressions ;
13. l'outil reste local, sans appel réseau ni stockage persistant ;
14. l'audit commercial ne devient proportionné que si une correction bornée ou
    un recontrôle daté ne suffisent pas.

### Journal P2 — contre-audit contradictoire

```text
Agent distinct : guide_google_p2
Autorisation reçue : GATE_P1 = GO_PASSE_2
Méthode : relecture intégrale du dossier, du guide, du composant, du modèle déterministe, des tests et de leur manifeste P1 ; confrontation indépendante des assertions au registre et aux sources officielles vivantes
Calculs : aucun calcul de performance, de volume, de position, de délai ou de retour ; la mesure de lecture est un contrôle de registre, pas une preuve SEO
Logique refaite : les cinq états incomplets, leur priorité stricte et la sortie complète ont été rejoués indépendamment ; la première étape non confirmée demeure la seule recommandation
Décision éditoriale : ne conserver que les corrections qui modifient le contrôle à faire ou la prudence du verdict
```

#### Contradictions, limites et corrections P2

| Point audité | Limite ou contre-cas rouvert | Correction utile retenue |
| --- | --- | --- |
| Verdict d'inspection | Le test en direct indique si la version actuelle pourrait être indexée ; il ne prouve pas qu'elle l'est et ne détecte pas les doublons ni la canonique retenue. | Chaque contrôle d'indexation demande désormais la **vue Index Google** ; le test en direct est une vérification distincte après correction. |
| Récupération actuelle | Un échec du test actuel ne démontre pas que l'ancienne version indexée a déjà disparu. | Le guide demande de comparer la dernière récupération connue au test actuel avant de conclure. |
| `noindex` et `robots.txt` | Une URL bloquée à l'exploration peut empêcher Googlebot de lire `noindex` ; `robots.txt` n'est pas une méthode fiable de retrait de l'index. | Les deux mécanismes sont séparés et l'ordre de correction est explicite. |
| Canonique et sitemap | Une redirection ou `rel=canonical` est une indication forte ; une présence au sitemap est plus faible et ne garantit pas la canonique choisie. | Le sitemap ne doit contenir que l'URL préférée ; le verdict reste celui observé dans l'inspection. |
| URL filtrée dans Performances | La plupart des données sont attribuées à la canonique choisie par Google, pas à un doublon saisi par le lecteur. | Avant toute lecture d'impressions, le guide demande de vérifier puis filtrer la canonique Google ; une canonique inattendue arrête le parcours. |
| Ordre des filtres | Ajouter immédiatement la requête empêche de distinguer une page vue sur d'autres recherches d'une page sans donnée visible. | Ordre imposé : contexte et période, page canonique, total page, puis requête exacte. |
| Requêtes anonymisées | Avec un filtre de requête, les requêtes anonymisées sortent du total filtré ; une ligne absente ne vaut donc pas zéro absolu. | La fiche conserve le total page avant filtre et formule « aucune donnée visible avec ces filtres ». |
| Frontière éditoriale | Une page canonique indexée avec impressions n'est plus un problème d'indexation, même si le trafic paraît insuffisant. | La sortie `site-indexe-sans-trafic` reste une classification interne ; le futur guide n'est ni publié ni lié, et aucune cause de classement n'est inventée. |

#### Idéation contradictoire P2

| Perspective imposée | Objection testée | Sort |
| --- | --- | --- |
| Lecteur débutant | « Le test en direct dit OK, donc ma page est indexée. » | AJOUTEE puis COUVERTE : distinction visible entre vue Index Google et test en direct. |
| Lecteur prêt à agir | « Quelle URL dois-je filtrer si Google en a retenu une autre ? » | AJOUTEE puis COUVERTE : contrôle de la canonique avant Performances. |
| Profil différent | « Mon problème concerne Maps ou la fiche établissement. » | DEJA_COUVERTE et ECARTEE : produit distinct, arrêt explicite. |
| Cas dégradé | « Le test actuel échoue alors qu'une ancienne version reste indexée. » | AJOUTEE puis COUVERTE : comparaison avec la dernière récupération connue. |
| Cas inverse | « La canonique est indexée et reçoit déjà des impressions. » | DEJA_COUVERTE : frontière conservée avant l'analyse de trafic. |
| Solution opposée | « Dois-je changer de prestataire ou acheter une refonte ? » | DEJA_COUVERTE : correction bornée, recontrôle, fiche transmissible au prestataire actuel. |
| Chronologie | « Dans quel ordre ouvrir les vues et appliquer les filtres ? » | AJOUTEE puis COUVERTE : Index Google, test en direct si utile, canonique, total page, requête. |
| Contradiction technique | « Bloquer robots puis poser noindex suffit-il ? » | AJOUTEE puis COUVERTE : le blocage peut empêcher la lecture de la directive. |
| Autonomie | « Puis-je garder et transmettre le diagnostic sans compte supplémentaire ? » | DEJA_COUVERTE : état local, copie et impression volontaires. |

#### Sources officielles rouvertes le 18 août 2026

- fonctionnement de Google Search et absence de garantie : G01 et G02 ;
- inspection d'URL, vue Index Google, test en direct, récupération et canonique :
  G03 à G05 et G13 ;
- opérateur `site:` : G06 ;
- sitemap, nouvelle exploration, `noindex`, `robots.txt` et consolidation des
  URL dupliquées : G07, G08, G12, G14 et G15 ;
- rapport Performances, dimensions, regroupements, requêtes anonymisées et
  attribution à la canonique : G09, G10 et G13 ;
- utilisateurs et autorisations : G11.

L'ouverture automatisée de l'ancienne URL officielle `9012289` a rencontré la
protection anti-robot de l'aide Google. La page officielle `12482179`, ouverte
et relue le même jour, couvre les comportements d'inspection structurants.
Aucune source secondaire n'a servi à rendre un fait technique publiable.

#### Outil, risques et responsabilité

```text
Déterminisme : statuts proposés fermés ; réponse positive exigée avant de poursuivre ; première étape incomplète prioritaire ; zéro clic distinct d'une ligne de requête absente
Sécurité : accès Search Console par rôle ; aucun mot de passe demandé ou stocké
Données : état React local ; aucun fetch, XHR, stockage navigateur ou cookie ; URL, requête et notes ne sortent que par copie ou impression volontaire
Continuité : la fiche conserve couple URL-requête, filtres, motif, correction, responsable et date de recontrôle
Maintenance : le diagnostic ponctuel ne remplace pas un plan de maintenance ; toute modification ultérieure ouvre un nouveau relevé daté
Réversibilité : accès révocable et fiche transmissible à un autre intervenant
Responsabilité : propriétaire de l'action et date sont saisissables ; cette date interne n'est pas une promesse de traitement par Google
CTA : une seule action commerciale, « Faire relire mon diagnostic », vers /demarrer-un-projet ; aucun délai, position, client ou résultat promis
Cannibalisation : frontière maintenue avant site-indexe-sans-trafic ; aucun lien vers un futur guide privé
```

#### Contrôles et livrables P2

```text
Mesure du guide : 2 670 mots visibles / 13 min ; registre ajusté de 12 à 13 min
Tests ciblés : 43/43 sur contenu, composant, modèle déterministe et registre
Règles SEO : 207/207
Qualité statique : ESLint ciblé, tsc --noEmit et git diff --check réussis
Manifeste publié : manifest:guides:write puis manifest:guides:check exacts
Manifeste P2 : docs/research/manifests/pourquoi-site-pas-visible-google-p2.sha256
SHA-256 du manifeste P2 : b498de97c16fa3fd9b0d249205799b1aae78e4cfd8820585e7d187d04b45d589
Périmètre : page, image Open Graph, test de contenu, hub, outil, modèle déterministe, registre, redirections et tests ; dossier de recherche exclu de sa propre empreinte
Manifeste P1 : conservé comme preuve historique, sans remplacement par le snapshot P2
Fichiers modifiés en P2 : page du guide ; fiche interactive ; modèle déterministe ; leurs tests ; registre guides ; snapshot du corpus publié ; dossier de recherche ; manifeste P2
Fichiers volontairement inchangés : statut editorialStatus draft ; robots noindex/nofollow ; sitemap ; llms.txt ; migrations Drizzle non suivies
Commit, push, déploiement : aucun
```

#### Défauts ouverts remis à G2

```text
P0 ouverts : aucun identifié après contre-audit P2
P1 ouverts : aucun identifié après contre-audit P2
P2 ouverts : les trois images Article finales sont toujours absentes et restent obligatoires avant publication ; BAT visuel multi-largeur, lecture humaine, validation qualité finale et audit de production restent réservés aux passes/gates suivantes
Demande réelle : Search Console, Keyword Planner, volume, tendance et concurrence demeurent NON_MESURES faute d'export fourni
Statut public : editorialStatus draft ; robots noindex/nofollow
Décision de porte suivante : elle appartient exclusivement à l'orchestrateur
```

PASSE_2_TERMINEE

### GATE_P2 — décision de l'orchestrateur

```text
GATE_P2
Décision : GO_PASSE_3
Affirmations contrôlées : vue Index Google distincte du test en direct ; noindex distinct de robots.txt ; données Performances généralement attribuées à la canonique Google ; requêtes anonymisées exclues lors d'un filtre de requête ; sitemap comme indication sans garantie ; nouvelle exploration sans délai ni inclusion garantis
Calculs reproduits : aucun calcul métier ni exemple chiffré ; logique déterministe rejouée sur les états incomplets et la sortie complète ; mesure de lecture cohérente à 2 670 mots visibles / 13 min
Contre-cas couverts : test actuel réussi sans indexation ; échec actuel avec ancienne version encore susceptible d'être servie ; canonique différente ; total page positif mais requête absente ; page canonique déjà indexée avec impressions ; correction bornée ou attente suffisante sans achat
Risques résiduels : demande SEO toujours NON_MESUREE ; trois images Article, BAT multi-largeur, lecture humaine P3, anti-IA P4 et contre-audit indépendant Q obligatoires avant publication
Contrôles : sources Google officielles inspection d'URL et dimensions Performances relues par l'orchestrateur le 18/08/2026 ; tests ciblés 43/43 ; manifeste P2 exact ; statut draft et robots privés
SHA-256 validé : b498de97c16fa3fd9b0d249205799b1aae78e4cfd8820585e7d187d04b45d589
```

### Journal P3 — polish rédactionnel

```text
Agent distinct : guide_google_p3
Autorisation reçue : GATE_P2 = GO_PASSE_3
Méthode : lecture à voix haute section par section, puis lecture du squelette H1, héros, H2, premières phrases, encadrés, FAQ, CTA et libellés de l’outil
Périmètre : fluidité, hiérarchie, langage courant, cohérence terminologique et suppression des automatismes ; aucun ajout de fait, de calcul, de source, de délai ou de promesse
Faits volontairement inchangés : distinction vue Index Google / test en direct ; séparation robots.txt / noindex ; choix de l’adresse canonique ; ordre contexte → canonique et total page → recherche exacte ; limites des requêtes anonymisées ; absence de garantie ; frontière avant « indexé mais sans trafic »
```

#### Automatismes et problèmes de lisibilité corrigés

| Motif observé en P2 | Correction P3 | Effet recherché sans changement de fond |
| --- | --- | --- |
| Héros construit comme une longue question à quatre propositions | Quatre questions courtes, puis les trois sorties réelles : corriger, patienter ou approfondir | La réponse se comprend à l’oral et sur petit écran. |
| Répétition « page précise / recherche précise » | « une page et une recherche précises » | Suppression d’un rythme mécanique dès l’ouverture. |
| H2 négatif « Ne diagnostiquez pas le site » | « Commencez par une URL et une recherche précises » | Le titre reste compréhensible isolément et donne l’action avant l’interdit. |
| H2 abstrait sur « l’exploration » | « Google a-t-il trouvé et ouvert cette page ? » | Le terme technique est expliqué par l’action concrète. |
| H2 technique sur « la version retenue » | « Quelle version de la page Google a-t-il indexée ? » | La question du lecteur apparaît sans perdre la notion d’indexation. |
| H2 final en triptyque d’impératifs | « Quelle suite choisir après le diagnostic ? » | La section annonce une décision, pas un moule rédactionnel. |
| Encadrés formulés en interdits (« Ne mélangez pas… ») | Formulations positives : « Distinguez… », « La cause affichée détermine… » | Réduction des injonctions négatives sans affaiblir les seuils d’arrêt. |
| Phrase incorrecte « Ajoutez seulement après le filtre de requête exacte » | « La recherche exacte — appelée “requête” dans le rapport — vient en dernier. » | Ordre des filtres explicite et terme d’interface traduit au moment utile. |
| Alternance publique `URL-requête` / `URL-recherche` | `fiche URL-recherche` partout dans l’article et l’outil | Un seul nom mémorisable ; « requête » reste réservé au libellé Search Console expliqué. |
| Répétition de « recopiez », « conservez », « vérifiez » | « relevez », « gardez », « comparez », descriptions factuelles et phrases causales | Moins de cadence impérative ; l’action demeure précise. |
| Libellés « À recopier » et « Constat recopié » | « À relever » et « Constat relevé » | Vocabulaire plus naturel dans la fiche et sa version copiée. |
| « paquet de diagnostic », « action étroite », « signaux », « propriétaire de l’action » | « éléments pour reprendre le dossier », « une seule action à la fois », redirections/balise canonique/liens nommés, « personne responsable » | Suppression du langage de consultant au profit des objets et personnes réels. |
| Statistique générale « Données envoyées : Aucune » | « Fiche · envoi : Aucun » | La promesse de traitement local est limitée à l’outil concerné. |
| Bouton « Copier mon diagnostic » | « Copier la fiche », avec retours « Fiche copiée » et « fiche réinitialisée » | L’action et son résultat correspondent exactement au texte produit. |
| Plusieurs titres longs à double négation | Questions ou résultats courts pour exploration, indexation, clics, fiche et décision | Chaque H2 reste lisible seul sans devenir uniforme. |

#### Cohérence du guide après P3

```text
Ouverture : situation vécue, URL + recherche, quatre contrôles et première action sont présents dans les 150 premiers mots
H2 : sept titres relus isolément ; chacun nomme une question ou une action identifiable
Paragraphes : une idée dominante par paragraphe ; transitions reposant sur le résultat du contrôle précédent
Listes et tableaux : conservés uniquement pour les données à relever, les états ou les décisions comparables ; le composant partagé les transforme en cartes sur mobile
FAQ : réponse directe dès la première phrase ; délai non garanti, opérateur site: non exhaustif, accès par rôle et frontière Maps préservés
CTA : « Faire relire mon diagnostic » décrit une relecture via /demarrer-un-projet ; aucune réservation, position ou date promise
Outil : quatre contrôles, états publics en français, copie et impression compréhensibles ; aucun code interne rendu, aucun fetch ni stockage ajouté
Metadata et OG : volontairement inchangées ; elles restent cohérentes avec la promesse « une URL, une recherche, quatre contrôles »
Temps de lecture : 2 631 mots visibles / 13 min ; la valeur de registre reste 13
```

#### Contrôles P3

```text
Tests ciblés : 43/43 sur contenu, composant, modèle déterministe et registre
Règles SEO : premier passage 206/207, uniquement parce que le snapshot publié devait intégrer le nouveau hash du composant partagé ; manifest:guides:write puis manifest:guides:check exécutés ; passage final 207/207
ESLint ciblé : page, OG, tests, outil, modèle et registre réussis
TypeScript : npx tsc --noEmit réussi
Mesure officielle : GUIDE_BASE_URL=http://localhost:3013 npm run measure:guide-readtime -- pourquoi-site-pas-visible-google → 2 631 mots / 13 min
Diff-check : git diff --check réussi
Manifeste P3 : docs/research/manifests/pourquoi-site-pas-visible-google-p3.sha256
SHA-256 du manifeste P3 : 1fc35956e04f17878706bb42412112a0ee9778cec155773bab58aa92cdafb7d4
Vérification du manifeste : 12/12 fichiers OK ; dossier de recherche exclu de sa propre empreinte
Manifestes P1 et P2 : conservés sans modification comme preuves historiques
Commit, push, déploiement : aucun
```

#### Défauts ouverts remis à G3

```text
P0 ouverts : aucun identifié après P3
P1 ouverts : aucun identifié après P3
P2 ouverts : trois images Article encore obligatoires avant publication ; BAT visuel multi-largeur, thème sombre, zoom, clavier, impression et contrôle qualité indépendant restent à exécuter en P4/Q
Demande réelle : Search Console, Keyword Planner, volume, tendance et concurrence demeurent NON_MESURES faute d’export fourni
Statut public : editorialStatus draft ; robots noindex/nofollow ; aucun ajout manuel au sitemap ou à llms.txt
Décision de porte suivante : elle appartient exclusivement à l’orchestrateur
```

PASSE_3_TERMINEE

### GATE_P3 — seconde décision de l'orchestrateur

```text
GATE_P3
Décision : GO_PASSE_4
Contrôles :
- ouverture : problème réel, réponse, quatre contrôles et trois suites présents avant 150 mots
- H2 : sept titres compréhensibles isolément, sans série artificielle uniforme
- longueur : 2 628 mots visibles / 13 min ; couverture utile, aucun quota revendiqué
- FAQ : délai non garanti, limite de site:, accès par rôle et exclusion de Maps annoncés dès la première phrase
- CTA : relecture réelle via /demarrer-un-projet, sans réservation, classement ni date promis
- langage : fiche URL-recherche harmonisée ; tics signaux/périmètre consultant supprimés ; test anti-régression ajouté
- nuances : faits et limites P2 préservés
Risques résiduels : trois images Article, anti-IA P4, BAT visuel et contre-audit Q restent obligatoires
Contrôles : tests ciblés 44/44 ; manifeste P3 exact ; check:seo/TypeScript/ESLint/diff-check verts dans le rapport de passe ; statut draft et robots privés
SHA-256 validé : 29943b368c8262e7c0919217adbefc61e18e17d080bbb6175ee0126461eae9e6
```

### GATE_P3 — première décision de l'orchestrateur

```text
GATE_P3
Décision : NO_GO_PASSE_3
Contrôles :
- ouverture : réponse, quatre contrôles et trois sorties présents dans les 150 premiers mots
- H2 : autonomes, naturels et orientés vers une question ou une décision
- longueur : 2 631 mots utiles / 13 min, sans quota SEO constaté
- FAQ et CTA : réponses directes, destination et action réelles, aucune promesse ajoutée
- nuances P2 : vue Index Google, test en direct, robots.txt/noindex, canonique, données anonymisées et absence de garantie préservés
Corrections exigées : remplacer le vague « signaux de la page » par des objets précis et sourcés ; remplacer le badge consultant « Périmètre écrit avant intervention » par une formulation concrète ; remplacer « le périmètre relève plutôt d'un travail » par une phrase ordinaire ; mettre à jour journal, tests si nécessaire et manifeste P3
SHA-256 validé avant corrections : 1fc35956e04f17878706bb42412112a0ee9778cec155773bab58aa92cdafb7d4
```

### Rapport de correction P3 — représentation à G3

```text
Décision historique préservée : GATE_P3 = NO_GO_PASSE_3 le 18/08/2026
Correction 1 : « Google analyse le contenu, les signaux de la page et les versions proches » devient « Google analyse le contenu, les balises principales et les versions proches » ; l’énumération nomme désormais les objets sans changer le choix possible d’une autre URL principale
Correction 2 : le badge « Périmètre écrit avant intervention » devient « Vérifications prévues par écrit » ; la promesse reste bornée mais se comprend sans vocabulaire de consultant
Correction 3 : « le périmètre relève plutôt d’un travail de référencement Google » devient « si vous ne savez pas quelle recherche ou quelle page travailler, une analyse de référencement Google devient plus utile »
Régression empêchée : le test de contenu exige les trois formulations concrètes et rejette les trois anciens tics
Recherche publique : aucun autre usage de `signaux de la page`, `action étroite`, `paquet de diagnostic`, `consolider les signaux`, `propriétaire de l’action`, `URL-requête`, `levier`, `synergie`, `robuste`, `optimal`, `gouvernance`, `réversibilité`, `criticité`, `recette`, `jalon`, `livrable`, `trajectoire` ou `activation`
Usage conservé : « Périmètre du guide » reste l’étiquette légitime de l’encadré qui explique la frontière éditoriale
Fond P2 : inchangé ; aucune source, affirmation, recommandation, limite, donnée, date, calcul ou promesse ajoutée
```

#### Contrôles de représentation G3

```text
Tests ciblés : 44/44 sur contenu, composant, modèle déterministe et registre
Règles SEO : 207/207
Snapshot publié : manifest:guides:check exact ; aucune réécriture nécessaire car les deux fichiers corrigés appartiennent au brouillon privé
ESLint ciblé : page, OG, tests, outil, modèle et registre réussis
TypeScript : npx tsc --noEmit réussi
Mesure officielle après correction : 2 628 mots visibles / 13 min ; registre inchangé à 13
Diff-check : git diff --check réussi
Manifeste P3 régénéré : docs/research/manifests/pourquoi-site-pas-visible-google-p3.sha256
SHA-256 du manifeste P3 représenté : 29943b368c8262e7c0919217adbefc61e18e17d080bbb6175ee0126461eae9e6
Vérification du manifeste : 12/12 fichiers OK ; dossier de recherche exclu de sa propre empreinte
Manifestes P1 et P2 : conservés comme preuves historiques
Commit, push, déploiement : aucun
```

```text
P0 ouverts : aucun identifié après correction P3
P1 ouverts : aucun identifié après correction P3
P2 ouverts : trois images Article, BAT visuel multi-largeur, thème sombre, zoom, clavier, impression et contrôle qualité indépendant restent réservés aux étapes autorisées après G3
Demande réelle : Search Console, Keyword Planner, volume, tendance et concurrence demeurent NON_MESURES faute d’export fourni
Statut public : editorialStatus draft ; robots noindex/nofollow
REPRESENTATION_G3 : DEMANDEE
Décision attendue : GO_PASSE_4 ou NO_GO_PASSE_3 par l’orchestrateur uniquement
Autorisation de passe suivante : aucune au moment de la représentation
```

PASSE_3_TERMINEE

### Journal P4 — antipasse IA et dernier contrôle contradictoire

```text
Agent distinct : guide_google_p4
Autorisation reçue : GATE_P3 = GO_PASSE_4
Méthode : deux lectures contradictoires, d’abord comme dirigeant non technique qui cherche la prochaine action, puis comme expert SEO qui vérifie chaque nuance et seuil d’arrêt ; contrôle séparé du héros, des 150 premiers mots, des H2, des tableaux, de la FAQ, du CTA, des métadonnées, de l’outil et de ses sorties
Corpus relu : CLAUDE.md ; règle d’or SEO ; charte qualité ; workflow maître ; instructions guide de qualité ; roadmap ; dossier et décisions G1 à G3 ; manifestes P1 à P3 ; page, OG, registre, outil, modèle déterministe et tests ; guides voisins sur le MVP SaaS et le délai de développement d’un SaaS ; page du service de référencement
Périmètre : voix humaine, logique, répétitions, exemples, promesse et contrôle final des trois images Article ; aucune nouvelle affirmation factuelle, source, date, estimation, position ou promesse
```

#### Défauts antipasse IA corrigés

| Défaut observé après P3 | Correction P4 | Nuance conservée |
| --- | --- | --- |
| Le héros et le premier paragraphe répétaient la même séquence presque mot pour mot | L’ouverture part maintenant de la situation vécue, explique pourquoi une recherche manuelle ne suffit pas, puis donne l’ordre des contrôles | L’URL, la recherche, l’exploration, l’indexation, les impressions, les clics et la première décision restent dans les 150 premiers mots. |
| « Délimiter la prochaine intervention utile » sonnait comme une fiche administrative | La FAQ dit désormais « choisir la prochaine intervention utile » | La fiche copiée reste l’objet transmis et ne promet pas un résultat Google. |
| « Un diagnostic de chemin, pas une promesse de position » ressemblait à un slogan de méthode | L’encadré annonce directement : « Ce guide localise un blocage ; il ne promet aucun classement » | La limite de résultat demeure explicite. |
| « Les clics terminent le diagnostic » produisait un H2 mécanique et trop définitif | Le H2 devient « Ce que les clics disent — et ne disent pas » | Les impressions et les clics restent séparés ; l’absence de clic ne prouve pas une cause unique. |
| Des nombres d’exemple dans l’outil pouvaient être pris pour des données réelles ou des seuils | Les exemples numériques et la date factice ont été remplacés par des invites de saisie neutres | Aucun calcul, seuil ou délai métier n’est ajouté. |
| Une même source officielle sur les dimensions Search Console apparaissait deux fois | L’entrée dupliquée a été supprimée | Le lien officiel utile demeure dans la source qui porte l’affirmation. |
| La sortie « le problème est classé du côté de… » avait une voix industrielle | La sortie nomme directement l’état à examiner | L’ordre déterministe des quatre contrôles ne change pas. |
| « Acheter un second abonnement » était une image décorative et trop étroite | Le texte nomme les décisions réelles : acheter un outil ou lancer une refonte | L’option de ne rien acheter avant d’avoir isolé le blocage reste nette. |

#### Contrôle contradictoire après correction

```text
Voix et structure : quinze familles recherchées — séries de phrases de même taille, H2 uniformes, transitions « en outre / par ailleurs / ainsi », conclusions en triptyque, reformulations du héros, jargon de consultant, abstractions sans sujet, fausse assurance, superlatifs, métaphores de méthode, exemples décoratifs, répétitions corps/tableaux/FAQ, CTA commercial, métadonnées plus ambitieuses que l’article et codes de production. Aucun motif résiduel bloquant relevé.
Premiers 150 mots : symptôme réel, limite de la recherche manuelle, URL et recherche exactes, quatre contrôles dans l’ordre et trois suites possibles sont présents.
H2 et ordre : situation précise → exploration → indexation → impressions → clics → fiche → prochaine décision ; chaque H2 se comprend isolément et les formulations ne forment pas une série artificielle.
Alternatives : corriger le premier obstacle observé, patienter après une demande déjà faite, approfondir si l’URL est indexée mais n’apparaît pas, ou transmettre la fiche ; acheter un outil, commander du contenu ou lancer une refonte n’est jamais présenté comme un passage obligé.
Sources, date et périmètre : sources Google officielles datées de la consultation du 18/08/2026 ; distinction vue Index Google / test en direct, robots.txt / noindex, canonique, requêtes anonymisées et absence de garantie préservées ; Google Maps et le futur guide « indexé sans trafic » restent hors périmètre.
Outil : quatre contrôles déterministes dans l’ordre ; états incomplets et sortie complète couverts ; aucun fetch, stockage local, cookie ou code interne rendu ; la copie, l’impression et la réinitialisation annoncent exactement leur effet.
Responsabilité et continuité : une personne responsable et une date de reprise peuvent être notées ; la fiche reste copiable et imprimable sans compte ni dépendance distante ; l’accès Search Console est attribué par rôle et révocable ; aucune donnée de l’outil n’est envoyée ; l’utilisateur peut ne rien acheter et reprendre le diagnostic ultérieurement.
FAQ et CTA : réponses directes, aucune position, date d’indexation ou durée garantie ; « Faire relire mon diagnostic » renvoie au formulaire réel et promet seulement une relecture des éléments transmis.
Métadonnées : titre, description, canonique et OG restent alignés sur « une URL, une recherche, quatre contrôles » ; editorialStatus reste draft et robots reste noindex/nofollow ; aucune entrée manuelle sitemap ou llms.txt.
```

#### Images Article finales

```text
Générateur : scripts/generate-search-visibility-article-images.mjs, Node local déterministe, sans téléchargement, police ni asset tiers
16:9 : public/guides/pourquoi-site-pas-visible-google/diagnostic-google-16x9.svg — 1600 × 900, visible dans l’article
4:3 : public/guides/pourquoi-site-pas-visible-google/diagnostic-google-4x3.svg — 1200 × 900
1:1 : public/guides/pourquoi-site-pas-visible-google/diagnostic-google-1x1.svg — 1200 × 1200
Conception : une URL et une recherche alimentent quatre contrôles visuels ; formes remplies et connecteurs simples, aucun texte fragile, aucune image tierce ou référence de marque copiée
Accessibilité : title et desc intégrés à chaque SVG ; alt visible décrit la fiche et les quatre contrôles sans répéter la légende
Intégration : les trois chemins sont dans articleImagePaths et dans le JSON-LD Article ; le 16:9 est rendu avec next/image dans le corps
Contrôle local : les trois ratios ont été rastérisés puis inspectés ; sujets, marges et ordre restent lisibles ; l’OG local a été inspecté en 1200 × 630, titre et sous-titre restent nets
BAT restant : thème sombre, largeurs multiples, zoom, clavier et impression appartiennent au contrôle qualité indépendant Q ; aucune validation Q n’est revendiquée ici
```

#### Contrôles P4

```text
Tests ciblés avant gel : 46/46 sur contenu, images, HTML, JSON-LD, composant, modèle déterministe et registre
Règles SEO : 207/207
ESLint ciblé : page, OG, tests, composant, modèle, registre, hub, redirections et générateur réussis
TypeScript : npx tsc --noEmit réussi
Diff-check : git diff --check réussi
Dimensions et fichiers : trois SVG présents ; width, height, viewBox, title, desc et absence de balise text vérifiés par test
HTML et JSON-LD : image 16:9 et alt présents dans le rendu ; trois URL absolues présentes dans Article.image
Rendu local : guide HTTP 200 ; OG HTTP 200 image/png, 1200 × 630 ; inspection visuelle réussie
Mesure officielle : 2 656 mots visibles / 13 min ; registre inchangé à 13
Manifeste P4 : docs/research/manifests/pourquoi-site-pas-visible-google-p4.sha256 ; dossier de recherche exclu de sa propre empreinte
SHA-256 du manifeste P4 : 4c392335bffa7595fb767442fd3356929773dd21821069a6660608ad0794e901
Manifestes P1, P2 et P3 : conservés comme preuves historiques
Commit, push, déploiement : aucun
```

#### Défauts ouverts remis à la décision orchestrateur

```text
P0 ouverts : aucun identifié après P4
P1 ouverts : aucun identifié après P4
P2 ouverts : BAT complet multi-largeur, thème sombre, zoom, clavier, impression, audit de production et contre-audit indépendant Q restent obligatoires avant publication ; date de publication à réconcilier seulement au moment d’une décision de mise en ligne
Demande réelle : Search Console, Keyword Planner, volume, tendance et concurrence demeurent NON_MESURES faute d’export fourni
Statut public : editorialStatus draft ; robots noindex/nofollow
Décision suivante : elle appartient exclusivement à l’orchestrateur
```

PASSE_4_TERMINEE

### GATE_P4 — décision de l'orchestrateur

```text
GATE_P4
Décision : GO_CONTROLE_QUALITE
Faits inchangés : nuances P2 sur vue Index Google/test en direct, robots.txt/noindex, canonique, requêtes anonymisées, ordre des filtres et absence de garantie toutes présentes ; aucune nouvelle affirmation, donnée ou promesse ajoutée en P4
Motifs antipasse contrôlés : répétition héros/ouverture, H2 mécaniques, jargon administratif, séries artificielles, exemples décoratifs, source dupliquée, sortie industrielle, superlatifs, CTA et métadonnées ; aucun défaut P0/P1 résiduel constaté
Valeur lecteur : une URL + une recherche, quatre contrôles dans l'ordre, une fiche locale réutilisable, correction bornée/attente/audit distingués et option de ne rien acheter visible
Qualité visuelle : trois SVG originaux 16:9, 4:3 et 1:1 inspectés ; 16:9 visible dans la page ; trois URL dans Article.image ; OG conforme
Score pré-audit : intention 10 ; exactitude 9 ; sources 10 ; valeur nouvelle 9 ; décisions/contre-cas 10 ; calculs/exemples 9 ; clarté 9 ; voix humaine 9 ; SEO/métadonnées/maillage 8 ; technique/accessibilité/rendu 9 ; total 92/100 ; aucun axe critique sous 9
Risques résiduels : BAT multi-largeur, sombre, zoom, clavier, impression, contre-audit indépendant, maillage entrant, date réelle et vérification production ; demande SEO NON_MESUREE
Contrôles : tests ciblés 46/46 ; manifeste P4 16/16 exact ; check:seo/TypeScript/ESLint/diff-check verts dans le rapport ; statut draft et robots privés
SHA-256 validé : 4c392335bffa7595fb767442fd3356929773dd21821069a6660608ad0794e901
```

## Contrôle qualité transversal Q — 18 août 2026

```text
Guide : Pourquoi mon site n’est-il pas visible sur Google ?
Slug : pourquoi-site-pas-visible-google
Branche : codex/pourquoi-site-pas-visible-google-20260818
HEAD audité : a8e8781a4bbe5dd182e5dfc3139f07bf3a5cd843
Relecteur : guide_google_quality
Indépendant des passes P1 à P4 : oui
Mode : lecture et tests indépendants ; aucune confiance accordée aux rapports de passe ; aucun fichier candidat corrigé
Statut réellement contrôlé : draft, noindex/nofollow, prépublication locale

P1 agent / manifeste / décision : guide_google_p1 / pourquoi-site-pas-visible-google-p1.sha256 / GO_PASSE_2
P2 agent / manifeste / décision : guide_google_p2 / pourquoi-site-pas-visible-google-p2.sha256 / GO_PASSE_3
P3 agent / manifeste / décision : guide_google_p3 / pourquoi-site-pas-visible-google-p3.sha256 / GO_PASSE_4 après représentation
P4 agent / manifeste / décision : guide_google_p4 / pourquoi-site-pas-visible-google-p4.sha256 / GO_CONTROLE_QUALITE
Manifeste P4 vérifié par Q : 16/16 fichiers exacts
SHA-256 du manifeste P4 vérifié : 4c392335bffa7595fb767442fd3356929773dd21821069a6660608ad0794e901
```

### Décision en tête

`NO_GO_QUALITE_GUIDE`

Le fond éditorial, les sources, le SEO privé et le BAT écran passent. La porte
qualité reste fermée pour deux P1 reproductibles et liés au candidat : la
batterie globale échoue sur le maillage du nouveau brouillon et la fonction
Imprimer génère huit pages blanches après les deux pages utiles. Un bon score
éditorial ne compense ni une batterie rouge ni une ressource imprimable
défectueuse.

### Matrice finale relocalisée par Q

La matrice historique contenait encore quelques intitulés antérieurs aux
réécritures P3/P4. Q a donc rejoué chaque angle dans la page finale et donne
ci-dessous les localisations actuelles, sans changer les statuts justifiés.

| Angle | Statut Q | Localisation finale contrôlée | Décision ou limite |
| --- | --- | --- | --- |
| Unité page + recherche | COUVERT | Héros et §01 « Commencez par une URL et une recherche précises » | Ouvrir une fiche par couple URL-recherche. |
| Commande `site:` | COUVERT | §01 « Une recherche Google reste un indice » et FAQ 2 | Ne jamais déduire seul un état d’indexation. |
| Exploration de l’URL | COUVERT | §02 et contrôle 1 de la fiche | Distinguer dernière exploration, vue Index Google et test actuel. |
| Découverte par liens et sitemap | COUVERT | §02 « Si l’adresse est inconnue » | Vérifier liens et sitemap sans les traiter comme une garantie. |
| Indexation, `noindex` et version principale | COUVERT | §03 et contrôle 2 | Lire motif, `noindex`, canonique déclarée et canonique Google. |
| Nouvelle exploration | COUVERT | §03 et FAQ 1 | Demander après correction, puis dater un recontrôle sans garantie. |
| Impressions sur la recherche | COUVERT | §04 et contrôle 3 | Contexte, canonique, total page puis recherche exacte. |
| Recherche absente du tableau | COUVERT | §04 « Une requête absente du tableau ne prouve pas zéro impression » | Écrire « aucune donnée visible », pas zéro inventé. |
| Clics et frontière | COUVERT | §05 et contrôle 4 | Zéro clic classe le cas sans en prouver la cause. |
| Page indexée mais visibilité insuffisante | RENVOYE | §05 « Limite volontaire » et §07, lien `/services/referencement-google` | Le futur guide privé n’est pas lié ; ouvrir une analyse distincte. |
| Fiche URL-recherche autonome | COUVERT | §06, `SearchVisibilityDiagnostic` | Copier ou imprimer les relevés ; aucun verdict Google. |
| Sécurité des accès | COUVERT | Fin §06 et FAQ 3 | Accès Search Console par rôle, sans mot de passe partagé. |
| Données saisies dans l’outil | COUVERT | Intro de l’outil et fin §06 | État React local ; envoi et stockage absents ; transmission volontaire seulement. |
| Continuité du diagnostic | COUVERT | §07 « Réunissez les éléments qui permettront de reprendre le dossier » | URL, filtres, correction, responsable et date restent transmissibles. |
| Maintenance générale | ECARTE | Contrat de réponse B et §07 limité au premier arrêt | Le guide ne prétend pas définir la maintenance du site. |
| Réversibilité / changement de prestataire | COUVERT | Fin §06 et §07 | Retirer l’accès puis transmettre les mêmes faits datés. |
| Responsabilité / prochain contrôle | COUVERT | Champs « Responsable » et « Date de recontrôle », puis §07 | Une personne et une date internes, jamais une promesse Google. |
| Google Maps / fiche établissement | ECARTE | Encadré §01 et FAQ 4 | Produit distinct ; arrêter ce parcours si seul Maps est concerné. |
| Google Ads | ECARTE | Contrat de réponse B | Canal distinct, aucune inférence sur l’indexation naturelle. |
| Dépense, refonte et audit | COUVERT | Tableau §07 et encadré « ne rien acheter aujourd’hui » | Choisir correction bornée, recontrôle ou audit proportionné. |
| Volume de recherche / priorité SEO | ECARTE | Avertissement de fin et dossier D | Volumes, tendance et concurrence restent `NON_MESURES`. |

**Bilan Q : 16 `COUVERT`, 1 `RENVOYE`, 4 `ECARTE`, 0
`BLOQUANT`.** Les perspectives sécurité, données, continuité, maintenance,
réversibilité, responsabilité, profil différent, cas inverse, cas dégradé,
chronologie, contradiction et autonomie ont toutes un statut et une
justification.

### Relecture contradictoire et test de reformulation

Questions apparues pendant la relecture Q :

- un test en direct réussi prouve-t-il l’indexation ou le choix canonique ?
- une ligne absente du rapport Performances vaut-elle zéro ?
- un état positif en aval peut-il masquer un arrêt en amont ?
- la page bascule-t-elle trop tôt dans le diagnostic « indexé sans trafic » ?
- l’outil envoie-t-il ou conserve-t-il les URL et notes ?
- l’option de ne rien acheter reste-t-elle réellement accessible ?

Restitution indépendante, écrite après lecture sans recopier le plan :

> Pour comprendre une absence dans Google, je fixe d’abord la page attendue,
> la recherche et le contexte. Je compare ensuite ce que Google avait mémorisé
> avec l’accès actuel ; le test en direct sert seulement à vérifier l’état
> actuel. Si Google n’a pas retenu cette version, je traite le motif et
> l’adresse principale. Je regarde les données de recherche seulement après,
> d’abord pour la page puis avec la recherche ajoutée. Une ligne absente ne
> vaut pas zéro. Dès que des impressions existent, le problème sort du seul
> champ de l’indexation. Je choisis alors une correction bornée, un recontrôle
> ou la transmission de la fiche, sans achat automatique.

Écarts avec la page : aucun écart matériel de chemin ou de décision. Q a rendu
encore plus explicite que le test en direct ne prouve ni l’indexation ni la
canonique ; cette limite est déjà présente dans §02, §03 et l’aide de l’outil.
Le relecteur Q restitue correctement les limites : hors Maps, Ads, baisse
historique, audit complet, conversion et diagnostic approfondi d’une page déjà
indexée avec visibilité insuffisante. Test de reformulation : réussi.

### Fond, sources, cannibalisation et valeur lecteur

Les affirmations structurantes ont été revérifiées sur les dix pages Google
officielles visibles dans l’article le 18 août 2026. Les dix URL répondent
`HTTP 200`. Q confirme notamment : trois étapes de recherche sans garantie
pour une page donnée ; résultats `site:` non exhaustifs ; sitemap utile à la
découverte sans garantie ; nouvelle exploration pouvant demander des jours ou
des semaines et non accélérée par des demandes répétées ; `noindex` lisible
seulement si Googlebot peut explorer ; signaux de canonicalisation de forces
différentes ; vue Index Google distincte du test en direct ; données
Performances rattachées en majorité à la canonique et affectées par les
requêtes anonymisées ou les lignes tronquées ; accès Search Console attribuable
et révocable par rôle.

Nature des éléments : les comportements documentés ci-dessus sont des faits
sourcés ; l’ordre des quatre contrôles est une recommandation éditoriale
Hagnéré Code ; le premier arrêt affiché est une déduction déterministe des
choix et constats saisis ; volumes, tendance, concurrence, position stable,
délai propre au site et résultat commercial sont inconnus. Aucun volume,
position, client, verbatim, prix, taux, délai garanti ou résultat obtenu n’est
inventé. Aucun calcul commercial n’est présenté. La seule durée visible est la
plage indicative officielle de Google, immédiatement bornée par l’absence de
garantie.

La cannibalisation est maîtrisée : `/services/referencement-google` reste
transactionnelle, `/services/audit-technique` reste plus large et technique,
et le guide s’arrête explicitement avant le futur
`site-indexe-sans-trafic`. Aucun lien ne mène à ce brouillon futur. Le CTA réel
et unique de l’article promet une relecture du diagnostic vers
`/demarrer-un-projet`, sans téléphone ajouté dans l’article, position ni date.
L’encadré final autorise explicitement à ne rien acheter.

Valeur originale confirmée : conserver le même couple URL-recherche et les
mêmes filtres, puis remettre une fiche datée qui s’arrête au premier contrôle
non fermé. La mesure officielle indépendante donne `2 656 mots / 13 min`, en
accord avec le registre.

### Outil — replay indépendant

Q a rejoué dans Chromium, sans reprendre les résultats unitaires :

- état initial et constat vide : arrêt exploration ;
- statut exploration positif sans constat : l’arrêt reste exploration ;
- exploration positive documentée : passage à l’indexation ;
- indexation négative documentée avec états aval positifs : l’arrêt reste
  indexation ;
- chaîne entièrement positive : sortie classée avant le diagnostic de trafic ;
- zéro clic visible : arrêt clics ;
- aucune donnée de clic visible : arrêt clics distinct, sans assimilation à
  zéro ;
- exploration négative avec indexation, impressions et clics positifs : le
  premier arrêt garde la priorité ;
- copie avec permission presse-papiers : identité, états et décision exacts ;
- réinitialisation : huit champs vides, quatre états inconnus et retour au
  premier contrôle ;
- aucune requête `fetch`, XHR ou WebSocket pendant la saisie, la copie et le
  reset ; aucun changement de `localStorage`, `sessionStorage` ou cookie.

La logique, les états vides, inconnus, négatifs, contradictoires et positifs,
ainsi que la distinction zéro / absence passent. L’impression ne passe pas la
qualité d’usage, détaillée en P1-Q-02.

### Technique, SEO et données structurées

Sur le serveur construit depuis l’état audité :

- route locale du guide : `HTTP 200` ;
- H1 unique et exact ; title et description alignés sur l’intention ;
- canonical exacte :
  `https://hagnere-code.ai/guides/pourquoi-site-pas-visible-google` ;
- brouillon : meta robots `noindex,nofollow` ;
- JSON-LD parsable limité à `Article` et `BreadcrumbList` ; headline égal au
  H1, fil à trois niveaux et canonical identique ; aucun `FAQPage` ;
- `Article.image` contient trois SVG directs qui répondent `200` : 1600×900,
  1200×900 et 1200×1200 ; le 16:9 est visible dans l’article ;
- OG : route image `200`, PNG inspecté en 1200×630, titre et promesse alignés ;
- `/guides`, `/sitemap.xml` et `/llms.txt` répondent `200` et excluent le
  brouillon ; le manifeste publié est exact ;
- aucune redirection legacy ne masque la nouvelle route ; les tests de
  redirection passent ;
- les dix liens sortants officiels répondent `200`.

### BAT écran, accessibilité et performance laboratoire

Le BAT a utilisé le helper `with_server.py`, Python Playwright, Chromium
headless et `wait_until="networkidle"` sur le build production local.

Résultat écran : `191/191` assertions passent sur `320`, `360`, `390`, `430`,
`640`, `768`, `1024`, `1280`, `1440` et `1600` px ; clair partout et sombre à
390/1440 ; trois contrôles équivalents à 200 % (`320`, `390`, `512` CSS px à
DPR 2). Aucun débordement horizontal. Header, footer, héros, sommaire,
tableaux transformés en cartes avant 768 px, illustration, outil, FAQ et CTA
restent lisibles et non recouverts. Tab, Shift+Tab, selects, boutons, FAQ par
Entrée et focus visible passent. Aucune erreur console, `pageerror`, requête
locale 4xx/5xx ni overlay détecté.

Captures représentatives inspectées manuellement, hors dépôt :

- `/Users/quentinhagnere/.codex/tmp/guide-google-q-20260818/page-390-light.png` ;
- `/Users/quentinhagnere/.codex/tmp/guide-google-q-20260818/page-390-dark.png` ;
- `/Users/quentinhagnere/.codex/tmp/guide-google-q-20260818/page-1440-light.png` ;
- `/Users/quentinhagnere/.codex/tmp/guide-google-q-20260818/page-zoom200-css320.png` ;
- `/Users/quentinhagnere/.codex/tmp/guide-google-q-20260818/opengraph.png` ;
- `/Users/quentinhagnere/.codex/tmp/guide-google-q-20260818/diagnostic-google-16x9.png` ;
- `/Users/quentinhagnere/.codex/tmp/guide-google-q-20260818/diagnostic-google-4x3.png` ;
- `/Users/quentinhagnere/.codex/tmp/guide-google-q-20260818/diagnostic-google-1x1.png`.

Rapport BAT machine :
`/Users/quentinhagnere/.codex/tmp/guide-google-q-20260818/bat-results.json`.

Performance laboratoire, une navigation locale desktop seulement : DCL
`95,2 ms`, load `118,1 ms`, FCP `104 ms`, transfert document `52 906 octets`,
corps décodé `315 555 octets`, `42` ressources et `1 485` nœuds DOM. Ces
valeurs ne sont ni des Core Web Vitals terrain ni une promesse de production.
Aucun script Lighthouse n’est déclaré dans le dépôt ; aucune note Lighthouse
n’est inventée.

### Batterie de commandes Q

| Contrôle | Résultat Q |
| --- | --- |
| Manifeste P4 | 16/16 fichiers OK |
| `npm run manifest:guides:check` | OK, snapshot publié exact |
| Tests ciblés guide/outil/registre/SEO | 90/90 |
| `npm run check:seo` | 207/207 |
| `NODE_ENV=production npm run check:seo` | 207/207 |
| ESLint ciblé | OK |
| `npm run lint` | OK |
| `npx tsc --noEmit` | OK |
| `npm audit --audit-level=moderate` | 0 vulnérabilité |
| `npm audit --omit=dev` | 0 vulnérabilité |
| `NEXT_PUBLIC_ENV=production npm run build` | OK ; postbuild SEO OK, 59 URL publiques, 18 temps de lecture, 106 blocs JSON-LD |
| `git diff --check` | OK |
| `npm test` | **ÉCHEC : 2 échecs, 1 174 réussites** |
| BAT Playwright écran | 191/191 |
| BAT impression | **ÉCHEC : 10 pages dont 8 blanches** |

### Défauts Q et preuves

#### P1-Q-01 — batterie globale rouge sur le maillage du brouillon

Fichiers et lignes :

- `src/lib/guide-internal-linking.test.ts:74` et `:84` appliquent les seuils à
  tous les éléments de `GUIDES` ;
- `src/lib/guides.ts:395` ajoute le candidat, encore `draft` à `:405` ;
- `src/app/guides/pourquoi-site-pas-visible-google/page.tsx:330` ne fournit
  aucun guide associé, conformément à l’intégration différée.

Preuve : `npm test` termine avec `2 failed | 1174 passed`. Le test isolé
reproduit `0` lien sortant au lieu d’au moins `6` et `0` lien entrant au lieu
d’au moins `2`. La page et l’entrée de registre n’existent pas dans le HEAD de
base ; l’échec est donc lié à l’ajout candidat, pas préexistant. Une batterie
locale rouge interdit le GO, que la correction choisie consiste à réserver
l’invariant aux guides publiés ou à terminer le maillage lors de
l’intégration. Q ne tranche pas ce choix et n’a modifié aucun fichier.

#### P1-Q-02 — huit pages blanches à l’impression

Fichier et ligne :

- `src/components/guides/SearchVisibilityDiagnostic.tsx:162` masque
  `body *` avec `visibility: hidden` puis place la fiche en absolu. Les éléments
  invisibles gardent leur hauteur d’impression.

Preuve : clic sur « Imprimer », émulation print Chromium puis PDF A4. `pdfinfo`
indique `10` pages ; les pages 1 et 2 portent la fiche, les pages 3 à 10 sont
entièrement blanches. `pdftotext` confirme que le contenu utile est complet,
mais le rendu visuel confirme huit feuilles inutiles. Artefacts hors dépôt :

- `/Users/quentinhagnere/.codex/tmp/guide-google-q-20260818/diagnostic-print.pdf` ;
- `/Users/quentinhagnere/.codex/tmp/guide-google-q-20260818/diagnostic-print-page1.png` ;
- `/Users/quentinhagnere/.codex/tmp/guide-google-q-20260818/diagnostic-print-contact.png`.

Le bouton d’impression est une fonction visible et promise de l’outil ; ce
n’est pas une préférence cosmétique. Le CSS doit réduire la mise en page au
contenu imprimé, puis le PDF doit être rendu et réinspecté.

### Scorecard Q

| Axe | Note /10 | Justification Q |
| --- | ---: | --- |
| 1. Réponse à l’intention | 10 | Réponse immédiate et chemin URL-recherche exact. |
| 2. Exactitude et fraîcheur | 10 | Faits officiels revérifiés ; limites visibles. |
| 3. Qualité des sources | 10 | Dix sources Google primaires, proches des affirmations, 10/10 en 200. |
| 4. Valeur nouvelle | 9 | Fiche transmissible et premier arrêt, au lieu d’un catalogue de causes. |
| 5. Décisions et contre-cas | 10 | Corriger, attendre, approfondir, transmettre ou ne rien acheter. |
| 6. Calculs et exemples | 9 | Aucun calcul artificiel ; règles déterministes et cas limites rejoués. |
| 7. Clarté non technique | 9 | H2 autonomes, jargon expliqué, cartes mobiles lisibles. |
| 8. Fluidité et voix humaine | 9 | Progression naturelle, répétitions et automatismes largement retirés. |
| 9. SEO, métadonnées et maillage | 6 | SEO privé cohérent, mais invariant de maillage global rouge. |
| 10. Technique, accessibilité et rendu | 6 | Écran, clavier et build verts ; impression défectueuse et batterie globale rouge. |

**Total Q : 88/100.** Seuil non atteint ; axes 9 et 10 sous 8, axe critique
10 sous 9 et deux P1 ouverts. Le NO_GO n’est pas compensable par les autres
axes.

### P2 acceptés, inconnues et conditions de représentation

P0 : aucun.

P1 : P1-Q-01 et P1-Q-02 ouverts.

P2 acceptés à ce stade de brouillon :

- demande, volume, tendance et concurrence `NON_MESURES`, sans chiffre publié ;
- date du registre à réconcilier uniquement lors d’une publication réelle ;
- absence volontaire de maillage public, sitemap et `llms.txt` tant que le
  statut reste draft ; cette absence n’autorise cependant pas une suite de
  tests rouge ;
- pas de mesure Search Console ni de performance terrain ; les mesures Q sont
  uniquement locales.

Inconnues / STOP : aucune URL de production ne doit être annoncée comme
publiée, aucune date publique ni maillage ne doit être activé, aucun commit,
push ou déploiement ne doit être fait sur la base de ce rapport. Après
correction des deux P1, relancer tests ciblés, `npm test`, check SEO, lint,
TypeScript, audit, build, manifeste publié, diff-check, impression rendue et
BAT concerné. Toute correction post-P4 exige un nouveau snapshot qualité exact
et un nouveau contre-audit indépendant.

Manifeste Q : non créé, car réservé à une décision GO sur un état exact.

Décision : `NO_GO_QUALITE_GUIDE`

CONTROLE_QUALITE_TERMINE

## REMEDIATION_Q_1_TERMINEE — 18 août 2026

```text
Agent de remédiation : guide_google_q_fixes
Autorisation : correction fermée des seuls P1-Q-01 et P1-Q-02
Statut du guide pendant toute la remédiation : draft, noindex/nofollow
Réécriture éditoriale : aucune
Commit, push, déploiement : aucun
Décision qualité : réservée au nouveau contrôle indépendant Q
```

### P1-Q-01 — graphe de maillage réservé au corpus publié

Le gate `src/lib/guide-internal-linking.test.ts` construit maintenant le graphe,
les compteurs entrants et les quatre invariants uniquement depuis
`PUBLISHED_GUIDES`. Les cibles connues de ce graphe sont elles aussi limitées
au corpus publié : un guide public ne peut donc pas masquer un lien vers un
brouillon derrière l'existence de son entrée privée dans `GUIDES`.

Un test explicite compare les clés du graphe à `PUBLISHED_GUIDES` et vérifie
que toute entrée `draft` ou `review` de `GUIDES` est absente du graphe et du
compteur entrant. Les seuils historiques — six liens sortants, sauf exception
thématique documentée, et deux liens entrants — restent inchangés pour chaque
guide `published`. Aucun lien artificiel n'a été ajouté au candidat et son
statut n'a pas changé.

### P1-Q-02 — impression limitée à la fiche utile

La règle qui appliquait `visibility: hidden` à tout le document puis plaçait
la fiche en absolu a été retirée. En impression, les branches sœurs qui ne
contiennent pas `#search-visibility-diagnostic` sortent désormais réellement
du flux avec `display: none`. La fiche conserve un flux normal, une largeur de
page, des couleurs lisibles, des bordures de champs et des gardes contre les
coupures internes. Les boutons et le message transitoire de copie ou de remise
à zéro ne sont pas imprimés.

Le comportement écran n'a pas été changé. Sur le build de production local,
la copie contient l'URL et les quatre contrôles sans code interne, la remise à
zéro vide les huit champs et rétablit les quatre états inconnus, et le bouton
Imprimer appelle `window.print()`. Saisie, copie, remise à zéro et impression
n'ont produit aucun `fetch`, XHR ou WebSocket applicatif, aucun changement de
stockage n'a été introduit et aucune erreur console ou `pageerror` n'a été
relevée. Tab puis Maj+Tab conservent l'ordre URL → recherche → URL ;
`localStorage`, `sessionStorage` et les cookies restent identiques avant et
après les actions. Les rendus écran clair et sombre à 390 px restent lisibles.

### Preuve navigateur et PDF réels

Le helper du skill a d'abord été interrogé avec :

```text
python3 .../webapp-testing/scripts/with_server.py --help
```

Le contrôle final a ensuite lancé `npm run start -- --port 3018` depuis le
build de production exact, puis un script Python Playwright avec Chromium
headless et une navigation `networkidle`. La fiche a été remplie entièrement,
copiée, remise à zéro, remplie à nouveau, déclenchée par le bouton Imprimer,
passée en média `print`, enregistrée avec `page.pdf()` puis rendue page par
page avec Poppler.

```text
PDF : /Users/quentinhagnere/.codex/tmp/guide-google-q1-fix-20260818/diagnostic-print.pdf
Producteur : Chromium / Skia PDF m145
Format : A4
Pages : 3 utiles, 0 page blanche
Page 1 : identité complète et contrôle d'exploration
Page 2 : indexation, impressions et clics avec tous les constats
Page 3 : résultat, conclusion, action et limite
Boutons et feedback transitoire : absents du PDF
Extraction texte : identité, quatre contrôles, résultat, action et limite présents
Inspection visuelle : trois PNG relus, aucun contenu tronqué ni feuille vide
Rapport navigateur : /Users/quentinhagnere/.codex/tmp/guide-google-q1-fix-20260818/browser-results.json
```

Les captures, le PDF, les rendus Poppler et le script de BAT restent hors du
dépôt.

### Commandes et résultats de remédiation

```text
Tests ciblés maillage + composant + modèle : 25/25
npx eslint sur les trois fichiers de code touchés : réussi
npx tsc --noEmit : réussi
npm run manifest:guides:write : exécuté
npm run manifest:guides:check : snapshot exact
npm run check:seo : 207/207
npm test : 1 177/1 177
NEXT_PUBLIC_ENV=production npm run build : réussi
Postbuild SEO : 59 URL publiques, 18 temps de lecture, 106 blocs JSON-LD
PDF Chromium : 3 pages utiles, 0 page blanche
git diff --check : réussi après écriture du présent rapport et du manifeste candidat
```

### Fichiers de la remédiation

```text
src/lib/guide-internal-linking.test.ts
src/components/guides/SearchVisibilityDiagnostic.tsx
src/components/guides/SearchVisibilityDiagnostic.test.tsx
docs/research/manifests/published-guides-current.sha256
docs/research/pourquoi-site-pas-visible-google.md
docs/research/manifests/pourquoi-site-pas-visible-google-q1-fix.sha256
```

Les manifestes P1, P2, P3 et P4 restent des preuves historiques : cette
remédiation ne les remplace pas. Le nouveau manifeste candidat contient les
17 fichiers de code, tests, registre, actifs et snapshot contrôlés après P4,
hors le dossier de recherche qui consigne sa propre empreinte.

### Défauts et décisions encore ouverts

```text
P0 observé pendant la remédiation : aucun
P1-Q-01 après correction et auto-contrôle : non reproduit
P1-Q-02 après correction et auto-contrôle : non reproduit
P2 historiques acceptés par Q : inchangés
Recontrôle indépendant Q : obligatoire et non anticipé
GO_QUALITE_GUIDE : non prononcé
Publication, date réelle, maillage entrant final, sitemap et llms.txt : non activés
Statut public : draft ; robots noindex/nofollow
```

REMEDIATION_Q_1_TERMINEE

## Second contrôle qualité transversal Q — état `q1-fix`

```text
Date : 18 août 2026
Relecteur : guide_google_quality, distinct de l’agent de remédiation
Branche : codex/pourquoi-site-pas-visible-google-20260818
HEAD : a8e8781a4bbe5dd182e5dfc3139f07bf3a5cd843
Mode : candidat en lecture seule ; seuls le présent rapport et le manifeste Q ont été écrits
Statut contrôlé : draft, noindex/nofollow, prépublication locale
Manifeste de remédiation : docs/research/manifests/pourquoi-site-pas-visible-google-q1-fix.sha256
SHA-256 du manifeste de remédiation : 849e6b657153456bf2d350a5f5a8a76755ba2336ffe360cfe53f2db74a7a0b1c
Vérification du manifeste de remédiation : 17/17 fichiers exacts
```

### Relecture de la remédiation

Q a relu intégralement `REMEDIATION_Q_1`, le test de graphe, le composant de
fiche et son test. Les changements sont limités aux deux P1 du premier
contrôle :

- le graphe et ses compteurs sont construits depuis `PUBLISHED_GUIDES` ; un
  test compare exactement ses clés au corpus publié et exige que chaque entrée
  `draft` ou `review` soit absente ;
- les seuils historiques des guides publiés restent inchangés : six liens
  sortants, sauf exception thématique documentée, et deux liens entrants ;
- le CSS print ne conserve plus tout le document invisible dans le flux : les
  branches sœurs qui ne contiennent pas la fiche passent en `display: none`,
  tandis que la fiche garde un flux normal et des gardes de coupure ;
- aucune réécriture du guide, aucun changement de statut, date, CTA, maillage
  du candidat, metadata, source, calcul ou recommandation n’a accompagné la
  remédiation.

La matrice et le test de reformulation du premier contrôle restent valides :
16 angles `COUVERT`, 1 `RENVOYE`, 4 `ECARTE` et 0 `BLOQUANT`. Le fond éditorial
n’a pas changé.

### Fermeture des deux P1

#### P1-Q-01 — fermé

Preuves indépendantes :

- `src/lib/guide-internal-linking.test.ts` : 5/5 tests passent ;
- le test « réserve les invariants de maillage aux seuls guides publiés »
  compare le graphe à `PUBLISHED_GUIDES` et exclut explicitement tout
  `draft`/`review` ;
- les tests suivants rejouent sur le seul corpus publié : cible connue, seuil
  sortant, seuil entrant et qualité minimale des ancres ;
- le candidat reste `draft` et ne reçoit aucun lien artificiel ;
- `npm test` complet : 121 fichiers, 1 177/1 177 tests passent.

Conclusion : le brouillon ne peut plus faire échouer un invariant public, et
les invariants des 18 guides publiés ne sont ni affaiblis ni contournés.

#### P1-Q-02 — fermé

Q n’a pas réutilisé les artefacts de l’agent de remédiation. Un nouveau BAT a
rempli les huit champs d’identité, les quatre états et les quatre constats,
obtenu la sortie positive complète, cliqué sur « Imprimer », activé le média
print, généré un PDF Chromium A4, puis rendu chaque page avec Poppler.

Résultat indépendant :

```text
PDF : /Users/quentinhagnere/.codex/tmp/guide-google-q-recheck-20260818/diagnostic-print.pdf
Producteur : Chromium / Skia PDF m145
Pages : 3
Pages utiles : 3
Pages blanches : 0
Page 1 : identité complète et exploration
Page 2 : indexation, impressions et clics avec leurs constats
Page 3 : décision, conclusion, action et limite
Extraction texte : 429 mots
Boutons Copier / Imprimer / Réinitialiser : absents
Feedbacks « Fiche copiée » / « réinitialisée » : absents
Contenu tronqué observé : aucun
```

Poppler a produit trois PNG. La proportion de pixels non blancs est
respectivement `6,15 %`, `6,00 %` et `2,59 %` : aucune page n’est vide. Les
trois pages ont été inspectées visuellement. Les champs saisis, les quatre
contrôles, les quatre preuves, la décision « L’indexation n’est plus le premier
problème », l’action et la limite sont tous présents dans le texte extrait.

Artefacts Q hors dépôt :

- `/Users/quentinhagnere/.codex/tmp/guide-google-q-recheck-20260818/pages/page-1.png` ;
- `/Users/quentinhagnere/.codex/tmp/guide-google-q-recheck-20260818/pages/page-2.png` ;
- `/Users/quentinhagnere/.codex/tmp/guide-google-q-recheck-20260818/pages/page-3.png` ;
- `/Users/quentinhagnere/.codex/tmp/guide-google-q-recheck-20260818/diagnostic-print.txt`.

Conclusion : la fiche imprimée est complète, bornée à trois pages utiles et
ne contient aucune commande ou notification transitoire.

### Régression navigateur indépendante

Le BAT a été exécuté avec le helper du skill, Python Playwright, Chromium
headless, serveur de production local et navigation `networkidle`.

```text
Assertions BAT : 118/118
Écrans : 320, 390 et 1440 px, chacun en clair et sombre
Débordement horizontal : aucun
Header, sommaire, outil, FAQ, CTA et footer : visibles
Tableaux mobiles : présentation en cartes conservée
Clavier : URL → Tab → recherche → Maj+Tab → URL
Focus visible : confirmé
FAQ : ouverture et fermeture par Entrée
Copie : identité, quatre constats et décision complète présents
Reset : 8 champs vides, 4 états inconnus, 4 constats vides
Réseau pendant copie/reset/print : aucun fetch, XHR ou WebSocket
Stockage : localStorage, sessionStorage et cookies inchangés
Console : aucune erreur
pageerror : aucune
Réponse locale 4xx/5xx : aucune
```

Captures inspectées :

- `/Users/quentinhagnere/.codex/tmp/guide-google-q-recheck-20260818/screen-320-light.png` ;
- `/Users/quentinhagnere/.codex/tmp/guide-google-q-recheck-20260818/screen-320-dark.png` ;
- `/Users/quentinhagnere/.codex/tmp/guide-google-q-recheck-20260818/screen-390-light.png` ;
- `/Users/quentinhagnere/.codex/tmp/guide-google-q-recheck-20260818/screen-390-dark.png` ;
- `/Users/quentinhagnere/.codex/tmp/guide-google-q-recheck-20260818/screen-1440-light.png` ;
- `/Users/quentinhagnere/.codex/tmp/guide-google-q-recheck-20260818/screen-1440-dark.png`.

Rapport machine :
`/Users/quentinhagnere/.codex/tmp/guide-google-q-recheck-20260818/recheck-results.json`.

La route du guide répond `200`, conserve `noindex,nofollow`, et le brouillon
reste absent du hub, du sitemap et de `llms.txt`, tous trois servis en `200`.

### Batterie post-remédiation

| Contrôle | Résultat du second Q |
| --- | --- |
| Manifeste `q1-fix` | 17/17 fichiers OK |
| Graphe + outil + modèle + contenu + consommateurs SEO ciblés | 95/95 |
| Test de graphe seul | 5/5 |
| `npm run check:seo` | 207/207 |
| `NODE_ENV=production npm run check:seo` | 207/207 |
| `npx tsc --noEmit` | OK |
| ESLint des fichiers remédiés | OK |
| `npm run lint` | OK |
| `npm test` | 1 177/1 177 |
| `npm audit --omit=dev` | 0 vulnérabilité |
| `NEXT_PUBLIC_ENV=production npm run build` | OK |
| Postbuild SEO | 59 URL publiques, 18 temps de lecture, 106 blocs JSON-LD |
| `npm run manifest:guides:check` | snapshot publié exact |
| `git diff --check` | OK |
| BAT écran et fonctionnel | 118/118 |
| PDF Chromium + Poppler | 3 pages utiles, 0 blanche |

### Scorecard du second Q

| Axe | Note /10 | Réévaluation |
| --- | ---: | --- |
| 1. Réponse à l’intention | 10 | Chemin URL-recherche et réponse immédiate inchangés. |
| 2. Exactitude et fraîcheur | 10 | Faits et limites officiels du premier Q inchangés. |
| 3. Qualité des sources | 10 | Dix sources primaires déjà revérifiées et contenu inchangé. |
| 4. Valeur nouvelle | 9 | Fiche autonome et premier arrêt restent différenciants. |
| 5. Décisions et contre-cas | 10 | Correction, attente, approfondissement, transmission ou aucun achat. |
| 6. Calculs et exemples | 9 | Aucun calcul inventé ; règles et cas limites rejoués. |
| 7. Clarté non technique | 9 | H2, cartes mobiles, aide et sortie restent lisibles. |
| 8. Fluidité et voix humaine | 9 | Aucun retour d’automatisme après la correction technique. |
| 9. SEO, métadonnées et maillage | 9 | Brouillon privé cohérent ; invariants publiés verts et non affaiblis. |
| 10. Technique, accessibilité et rendu | 9 | Build, suite complète, clavier, écran et impression réels passent. |

**Total : 94/100.** Aucun axe sous 8 ; axes 1, 2, 3, 5, 7 et 10 au moins
à 9 ; aucun P0/P1 ; aucune perspective obligatoire sans statut ; batterie
locale et BAT complets verts.

### P2 acceptés et limites du GO

P0 : aucun.

P1 : aucun. P1-Q-01 et P1-Q-02 sont fermés.

P2 acceptés : demande, volume, tendance et concurrence restent
`NON_MESURES` sans chiffre publié ; la date de publication reste à
réconcilier uniquement lors d’une mise en ligne réelle ; aucune donnée Search
Console ni performance terrain n’est revendiquée ; le maillage public, le
sitemap et `llms.txt` restent volontairement inchangés tant que le statut est
draft.

Le présent GO ne signifie ni publié, ni déployé, ni indexé. Il n’autorise pas à
annoncer une URL de production. Q n’a modifié ni le code, ni le statut, ni la
date, ni le maillage, ni les migrations Drizzle ; aucun commit, push ou
déploiement n’a été réalisé.

### Manifeste Q final

```text
Chemin : docs/research/manifests/pourquoi-site-pas-visible-google-q.sha256
Fichiers contrôlés hors dossier : 18/18 exacts
Inclut : snapshot publié, candidat, tests, outil, graphe, registre, redirections, générateur, trois SVG et manifeste q1-fix
Exclut : présent dossier de recherche et le manifeste Q lui-même
SHA-256 : 9f728b08cd5b16efa1aa44f8e27365ad1daae1a248bcc0656385dc6964b2486f
```

Décision : `GO_QUALITE_GUIDE_PREPUBLICATION`

RECONTROLE_QUALITE_TERMINE

## Intégration publique après GO — 18 août 2026

Le GO prépublication portait volontairement sur un brouillon privé. Après ce
GO, l’orchestrateur a réalisé uniquement les opérations qui ne pouvaient pas
être annoncées avant la décision qualité :

- ouverture explicite de la porte éditoriale à `published` ;
- `datePublished` et `dateModified` fixées à l’instant réel de l’intégration
  publique, le 18 août 2026 à 12:42:00 UTC ;
- entrée automatique du guide dans le hub, le sitemap, `llms.txt`, la
  collection JSON-LD et les compteurs dérivés de `PUBLISHED_GUIDES` ;
- lien contextuel depuis la page du service SEO vers le diagnostic ;
- lien contextuel depuis la dimension performance de l’audit technique vers
  le diagnostic, avec invitation à commencer par l’outil gratuit avant
  d’élargir une mission ;
- maintien des deux liens sortants du guide vers les services SEO et audit ;
- mise à jour du manifeste exact du corpus publié.

Le guide inaugure le silo « Référencement naturel ». Aucun lien vers les
guides SaaS ou applications métier n’a été ajouté pour atteindre un quota.
L’exception temporaire du test inter-guides est explicite et compensée par un
contrôle machine des deux liens entrants de service et des deux liens sortants
du guide. Elle devra être réduite puis supprimée à mesure que des guides SEO
réellement voisins seront publiés.

Cette intégration ne constitue pas encore une preuve de déploiement, de
service public, d’indexation Google, de classement ou de trafic. Elle doit
faire l’objet d’un contre-audit sur l’état exact publié avant commit, puis
d’une vérification de production après fusion et déploiement.

INTEGRATION_PUBLICATION_PRETE_POUR_CONTRE_AUDIT

## Contre-audit final Q de l’état publié — 18 août 2026

```text
Relecteur : guide_google_quality, indépendant des passes P1 à P4 et de l’intégration
Branche : codex/pourquoi-site-pas-visible-google-20260818
HEAD : a8e8781a4bbe5dd182e5dfc3139f07bf3a5cd843
Mode : code et contenu candidat en lecture seule ; seuls le présent rapport et le manifeste Q public ont été écrits
État contrôlé : published, indexable dans un build NEXT_PUBLIC_ENV=production
Date publiée : 2026-08-18T12:42:00Z
Date modifiée : 2026-08-18T12:42:00Z
Commit, push, déploiement : aucun
Migrations Drizzle utilisateur : préservées
```

Le contrôle a été repris depuis zéro après la dernière correction du test de
contenu historique. Aucun résultat figé avant cet état exact n’est utilisé
pour la décision ci-dessous.

### Cohérence de la publication et de la découvrabilité

Le registre contient 18 guides, tous explicitement `published` ;
`PUBLISHED_GUIDES` est exactement égal à `GUIDES`. Aucun statut `draft` ou
`review` n’est donc exposé par le hub, le sitemap, `llms.txt` ou le graphe. Les
tests continuent néanmoins à construire des entrées privées synthétiques et
vérifient qu’un statut `draft`, `review` ou absent produit `noindex,nofollow`
et sort du graphe public.

Sur le build de production local, la route
`/guides/pourquoi-site-pas-visible-google` répond directement `200`, sans
redirection. Elle expose :

- le canonical exact
  `https://hagnere-code.ai/guides/pourquoi-site-pas-visible-google` ;
- `robots=index,follow` et la directive Googlebot
  `max-image-preview:large` ;
- le title et le H1 centralisés « Pourquoi mon site n’est-il pas visible sur
  Google ? » ;
- `article:published_time` et `article:modified_time` exactement égaux à
  `2026-08-18T12:42:00Z`, ainsi que « Mis à jour le 18 août 2026 » visible ;
- exactement deux blocs JSON-LD, `Article` puis `BreadcrumbList`, avec les
  mêmes dates, la même URL principale et trois images Article absolues ;
- trois SVG servis directement en `200`, aux dimensions 1600 × 900,
  1200 × 900 et 1200 × 1200 ;
- une image OG servie en `200` et rendue à 1200 × 630.

Le hub sert le guide et affiche `18 guides pratiques`. La page du service SEO
affiche elle aussi 18 guides et porte le lien contextuel « Trouver où une URL
disparaît entre exploration et clics ». La carte Performance de l’audit
technique invite à commencer par le « diagnostic de visibilité d’une URL ».
Le guide possède exactement deux sorties de service dans son contenu : audit
technique et référencement Google.

Le sitemap contient 60 URL, le guide une seule fois et son `lastmod` exact.
`llms.txt` contient 43 liens et le guide une seule fois avec sa mise à jour
réelle. `robots.txt` annonce le sitemap public. Une route guide inexistante
répond `404`, tandis que la collision historique du slug courant a bien été
retirée du registre des redirections.

### Maillage, silo et frontière éditoriale

Le guide inaugure un silo « Référencement naturel » et n’a donc aucun voisin
inter-guide honnête à ce jour. Q accepte comme P2 borné l’exception temporaire
à zéro lien inter-guide entrant et sortant, car elle ne réduit pas les
invariants des 17 guides antérieurs et elle est compensée par un test machine
qui exige simultanément :

- les deux entrants exacts depuis le service SEO et la dimension Performance
  de l’audit technique ;
- au moins deux sorties de service uniques depuis le guide, observées ici
  exactement vers les services SEO et audit ;
- aucune cible guide inconnue et aucune ancre générique dans le corpus public.

Aucun lien artificiel vers les silos SaaS ou applications métier n’a été
ajouté. La page reste volontairement avant l’analyse « site indexé sans
trafic » : ce futur guide n’est ni publié ni lié. La copie conserve l’option
de ne rien acheter après une correction et une demande de nouvelle
exploration. L’exception devra être réduite puis supprimée dès la publication
de guides SEO réellement voisins ; ce déclencheur est explicite et testable.

### Batterie exacte de publication

| Contrôle | Résultat du contre-audit public |
| --- | --- |
| Tests ciblés publication, registre, graphe, contenu, outil, services, sitemap, llms, robots | 13 fichiers, 108/108 |
| `npm run check:seo` | 34 fichiers, 208/208 |
| `npm run lint` | OK |
| `npx tsc --noEmit` | OK |
| `npm test` | 121 fichiers, 1 179/1 179 |
| `NEXT_PUBLIC_ENV=production NODE_ENV=production npm run build` | OK |
| Postbuild SEO | 60 URL, 43 liens llms, 60 pages, 18 temps de lecture, 108 blocs JSON-LD |
| `npm run manifest:guides:check` | snapshot publié exact |
| `git diff --check` avant rapport | OK |
| `npm audit --omit=dev` | 0 vulnérabilité |
| `npm audit --audit-level=moderate` | 0 vulnérabilité |
| Liens techniques Google primaires | 10/10 répondent `200` après redirections |
| BAT production multi-route | 167/167 assertions |
| PDF Chromium + Poppler | 3 pages utiles, 0 blanche, 429 mots extraits |

Le build a généré 76 pages statiques et conserve la route statique du guide.
L’avertissement Next.js relatif à l’usage général d’une route Edge est
préexistant et ne concerne pas cette page ; le build termine avec un code de
sortie nul et le postbuild SEO est vert.

### BAT écran, clavier, outil et impression

Le helper du skill `webapp-testing` a d’abord été interrogé avec `--help`.
Le BAT final a ensuite lancé `npm run start -- -p 3020`, puis Python
Playwright, Chromium headless et `networkidle` sur le build exact.

Matrice visuelle rejouée : guide à 320, 390 et 1440 px en clair et sombre,
hub à 390/1440, service SEO à 390/1440 et audit technique à 390/1440. Tous les
écrans ont un H1 unique, une navigation et un footer visibles, sans
débordement horizontal. Le guide conserve sommaire, tableaux en cartes sur
mobile, tableaux complets sur bureau, SVG, outil, FAQ et CTA sans
recouvrement observé.

Le parcours clavier confirme le focus visible, URL → Tab → recherche →
Maj+Tab → URL, la sélection native par saisie, et l’ouverture/fermeture de la
FAQ par Entrée. La fiche complète produit la décision positive attendue. La
copie contient l’identité, les quatre constats et la décision ; le reset vide
les huit champs, remet les quatre états à `unknown`, vide les quatre constats
et rétablit le premier contrôle. Copie, reset et impression ne produisent
aucun `fetch`, XHR ou WebSocket et ne changent ni `localStorage`, ni
`sessionStorage`, ni les cookies.

Résultat navigateur : aucune erreur console, aucun `pageerror`, aucune réponse
4xx/5xx inattendue. Le seul `404` est la route négative explicitement testée.

L’impression a été matérialisée avec Chromium, puis contrôlée avec `pdfinfo`,
`pdftotext` et `pdftoppm`. Les trois pages contiennent respectivement
l’identité et l’exploration, les trois contrôles suivants, puis la décision,
l’action et la limite. Les proportions de pixels non blancs sont 6,15 %,
6,00 % et 2,59 %. Les boutons Copier, Imprimer et Réinitialiser ainsi que les
feedbacks transitoires sont absents. Les quatre pages écran/services, la carte
Performance, l’outil mobile, l’OG et les trois pages PDF ont été inspectés
visuellement ; aucun élément critique tronqué ou recouvert n’a été relevé.

Artefacts Q hors dépôt :

- `/Users/quentinhagnere/.codex/tmp/guide-google-q-public-20260818/publication-results.json` ;
- `/Users/quentinhagnere/.codex/tmp/guide-google-q-public-20260818/diagnostic-publication.pdf` ;
- `/Users/quentinhagnere/.codex/tmp/guide-google-q-public-20260818/pages/page-1.png` ;
- `/Users/quentinhagnere/.codex/tmp/guide-google-q-public-20260818/pages/page-2.png` ;
- `/Users/quentinhagnere/.codex/tmp/guide-google-q-public-20260818/pages/page-3.png` ;
- `/Users/quentinhagnere/.codex/tmp/guide-google-q-public-20260818/audit-performance-inbound.png` ;
- `/Users/quentinhagnere/.codex/tmp/guide-google-q-public-20260818/opengraph-publication.png`.

### Scorecard Q de publication

| Axe | Note /10 | Décision finale |
| --- | ---: | --- |
| 1. Réponse à l’intention | 10 | Chemin URL → exploration → indexation → impressions → clics immédiat. |
| 2. Exactitude et fraîcheur | 10 | Dates réelles cohérentes ; faits et limites officiels inchangés. |
| 3. Qualité des sources | 10 | Dix sources Google primaires, proches des faits et 10/10 en `200`. |
| 4. Valeur nouvelle | 9 | Fiche locale transmissible et arrêt au premier contrôle non prouvé. |
| 5. Décisions et contre-cas | 10 | Corriger, attendre, approfondir, transmettre ou ne rien acheter. |
| 6. Calculs et exemples | 9 | Aucun volume inventé ; règles déterministes et zéro distinct de l’absence. |
| 7. Clarté non technique | 9 | Parcours, aides, cartes mobiles et sortie restent compréhensibles. |
| 8. Fluidité et voix humaine | 9 | Progression naturelle sans retour des automatismes retirés. |
| 9. SEO, métadonnées et maillage | 10 | Publication découvrable exacte ; silo propre et exception compensée. |
| 10. Technique, accessibilité et rendu | 9 | Batterie, build, clavier, écran, outil et PDF réels passent. |

**Total : 95/100.** Aucun axe sous 8 ; tous les axes critiques atteignent le
seuil ; aucun P0/P1 ; aucun angle `BLOQUANT` ; la matrice finale et le test de
reformulation du Q prépublication restent valides puisque le fond n’a pas été
modifié.

### P2, inconnues et portée du GO

P0 : aucun.

P1 : aucun. Les deux anciens P1 restent fermés sur l’état publié : le graphe
est vert et l’impression tient sur trois pages utiles sans page blanche.

P2 accepté : exception inter-guides temporaire du premier silo SEO, compensée
et assortie d’un déclencheur de suppression. Demande, volume, tendance,
concurrence, position, trafic et délai restent `NON_MESURES` ; aucun chiffre
ou résultat client n’est inventé.

Ce GO prouve la qualité de l’état de publication dans le dépôt et dans son
build de production local. Il ne prouve pas encore un commit, une fusion, un
déploiement public, la réponse de l’URL distante, l’indexation Google, un
classement ou du trafic. Ces vérifications restent postérieures au présent
contre-audit.

### Manifeste final Q public

```text
Chemin : docs/research/manifests/pourquoi-site-pas-visible-google-q-public.sha256
Fichiers contrôlés : 25/25 exacts
Périmètre : candidat complet hors dossier, preuves P1-P4/Q, snapshot publié,
            page, tests, outil, graphe, registre, redirection, générateur,
            trois SVG et les deux sources de maillage service
Exclus : présent dossier de recherche, manifeste Q public lui-même, migrations Drizzle utilisateur
SHA-256 : b1d7aa4ef1c68521f8367200e9759e654b7559e8a2a9ddee6a25d08c4e1304a5
```

Décision : `GO_QUALITE_GUIDE_PUBLICATION`

CONTRE_AUDIT_PUBLICATION_TERMINE
