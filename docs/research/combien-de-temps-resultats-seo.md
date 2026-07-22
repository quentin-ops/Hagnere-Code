# Dossier de recherche — Combien de temps faut-il pour obtenir des résultats SEO ?

> Les quatre passes sont terminées et la porte P4 est validée à 19/20. La page
> reste conservée en `ready-for-human-review` et donc en `noindex,nofollow`
> jusqu'au gel commun du lot. Le guide ne promet ni date d'indexation, ni
> position, ni trafic, ni demande commerciale. Les faits attribués à Google viennent
> exclusivement de Google Search Central ou de l'aide Search Console,
> consultées le 22 juillet 2026. Les pages d'agences servent seulement à
> observer les réponses déjà proposées dans la SERP française.

Le déroulement et les portes de sortie sont définis dans
[`docs/workflow-maitre-guides-4-passes.md`](../workflow-maitre-guides-4-passes.md).

## Journal des quatre passes

Propriétaire éditorial unique : **Hagnéré Code, agent racine du lot**. L'agent
P1 prépare le dossier ; il ne modifie ni page publique, ni registre, ni
maillage partagé.

| Passe                        | État                     | Date            | Responsable                         | Snapshot                                             | Blocages                  |
| ---------------------------- | ------------------------ | --------------- | ----------------------------------- | ---------------------------------------------------- | ------------------------- |
| 1. Recherche                 | Terminée — porte validée | 22 juillet 2026 | Agent de recherche P1               | `manifests/combien-de-temps-resultats-seo-p1.sha256` | Aucun pour ouvrir P2      |
| 2. Rédaction et intégration  | Terminée — porte validée | 22 juillet 2026 | Agent éditeur P2 unique             | `manifests/combien-de-temps-resultats-seo-p2.sha256` | Aucun pour ouvrir P3      |
| 3. Contre-audit indépendant  | Terminée — porte validée | 22 juillet 2026 | Relecteur distinct, lecture seule   | `manifests/combien-de-temps-resultats-seo-p3.sha256` | Aucun pour ouvrir P4      |
| 4. Plume humaine et contrôle | Terminée — porte validée | 22 juillet 2026 | Propriétaire éditorial du lot final | `manifests/combien-de-temps-resultats-seo-p4.sha256` | Aucun avant le gel commun |

Toute modification matérielle de ce dossier après le manifeste invalide la
porte P1 jusqu'à une nouvelle lecture et un nouveau hash.

### Manifeste du snapshot

| Fichier contrôlé                                                    | SHA-256                    | Passe | Remarque                                                                        |
| ------------------------------------------------------------------- | -------------------------- | ----- | ------------------------------------------------------------------------------- |
| `docs/research/combien-de-temps-resultats-seo.md`                   | Voir le manifeste frère P4 | P4    | Le dossier ne contient pas son propre hash afin d'éviter une référence instable |
| `src/app/guides/combien-de-temps-resultats-seo/page.tsx`            | Voir le manifeste frère P4 | P4    | Page complète contrôlée sur six largeurs                                        |
| `src/app/guides/combien-de-temps-resultats-seo/opengraph-image.tsx` | Voir le manifeste frère P4 | P4    | Image dédiée 1 200 × 630 inspectée                                              |
| `src/lib/guides.ts`                                                 | Voir le manifeste frère P4 | P4    | Entrée `ready-for-human-review` jusqu'au gel commun                             |
| `src/components/guides/GuidesHubPage.tsx`                           | Voir le manifeste frère P4 | P4    | Icône de collection                                                             |
| `src/lib/guide-human-language.test.ts`                              | Voir le manifeste frère P4 | P4    | Garde-fous propres au sujet                                                     |
| `src/app/guides/seo-ou-google-ads/page.tsx`                         | Voir le manifeste frère P4 | P4    | Un lien entrant contextuel                                                      |

## 1. Fiche d'identité

```text
Slug : combien-de-temps-resultats-seo
Statut actuel : P4 validée à 19/20, prête pour validation éditoriale groupée et maintenue en noindex
Requête principale : combien de temps résultats SEO
Moment du parcours : décider si un investissement SEO commence à produire des preuves utiles, doit être corrigé ou ne mérite plus le même budget
Lecteur précis : dirigeant de TPE/PME ou indépendant qui vient de lancer ou de financer du référencement naturel et veut savoir quand attendre, demander des corrections, réduire le travail ou l'arrêter
Situation déclenchante : des pages ont été publiées ou améliorées, une facture mensuelle arrive, mais le dirigeant ne sait pas distinguer travail livré, page indexée, visibilité, clic utile et demande commerciale
Décision principale après lecture : fixer un état de départ, suivre chaque changement jusqu'aux demandes et ventes, puis décider à une date justifiée de poursuivre, corriger, reporter ou arrêter une action précise sans attendre un classement promis
Niveau de connaissance au départ : comprend qu'une page peut apparaître sur Google, mais confond souvent indexation, position, trafic et résultat commercial
5 questions indispensables :
1. Qu'appelle-t-on exactement un résultat : page indexée, impression, clic, contact qualifié ou vente ?
2. Quelle date, quelles URL, quelles recherches et quel état initial serviront de comparaison ?
3. Quels premiers signes peuvent être lus sans les transformer en promesse de classement ?
4. À quel moment le volume devient-il suffisant pour décider, compte tenu de la saison et du cycle de vente ?
5. Dans quels cas poursuivre, corriger une étape, réduire le périmètre ou arrêter l'action ?
3 objections ou craintes :
1. « Mon agence me demande six mois de patience : comment savoir si elle travaille vraiment ? »
2. « Les impressions montent, donc les ventes vont forcément suivre. »
3. « Au bout de 90 jours sans première page, il faut arrêter tout le SEO. »
Action utile sans contact commercial : remplir pendant 90 jours un journal de preuves pour cinq URL prioritaires, avec état initial, changement, requête, indexation, impressions, clics, contacts, ventes et prochaine décision
CTA possible : faire relire l'état de départ, les travaux réalisés et le calendrier de décision avant de reconduire ou d'augmenter le budget
Hors périmètre : diagnostiquer une baisse acquise, expliquer pourquoi une page est absente de Google, choisir SEO ou Google Ads, détailler le contenu d'un audit, comparer des agences, fixer le prix d'une prestation, garantir un délai ou un classement
Date de la recherche : 22 juillet 2026
Responsable de la synthèse : agent de recherche P1 ; propriété éditoriale et validation des passes suivantes par l'orchestrateur
```

### Décision unique du guide

Le guide ne doit pas répondre par un nombre de mois. Sa décision unique est :

> **Le dirigeant doit définir le résultat commercial attendu, enregistrer
> l'état initial de quelques pages importantes, puis suivre séparément leur
> exploration, leur indexation, leurs impressions, leurs clics et les demandes
> réellement traitées afin de poursuivre, corriger ou arrêter une action SEO à
> partir de preuves comparables.**

Le délai n'est donc pas remplacé par une autre formule magique. Il devient une
suite de questions observables, dont la date dépend du changement réalisé, de
l'état du site, du nombre d'apparitions obtenu, de la saison et du temps
nécessaire à une demande pour devenir une vente.

### Bon fit et mauvais fit

| Situation                                                                                                | Orientation                                                                                                      |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Des travaux SEO viennent de commencer et le dirigeant veut écrire les critères de poursuite              | bon fit : construire l'état initial et le journal avant d'interpréter les premières courbes                      |
| Des pages sont accessibles, indexées et commencent à apparaître sur des recherches cohérentes            | suivre impressions, clics utiles et demandes sans attendre une position unique                                   |
| Des clics naturels existent, mais les contacts ne sont ni qualifiés ni rapprochés du logiciel commercial | corriger la mesure et le traitement des demandes avant de juger le référencement                                 |
| Une migration ou un changement massif d'URL vient d'avoir lieu                                           | suivre le plan de migration et les anciennes/nouvelles URL ; ne pas appliquer un calendrier de contenu ordinaire |
| Le site a perdu brutalement une performance déjà acquise                                                 | mauvais fit pour ce guide : utiliser `positions-google-baissent` et traiter l'incident                           |
| Une page précise n'est pas trouvée ou indexée                                                            | mauvais fit : utiliser `pourquoi-site-pas-visible-google` et fermer d'abord le blocage                           |
| Aucun objectif, aucune page prioritaire et aucune personne ne peut traiter les demandes                  | reporter l'augmentation du budget ; préparer l'offre, la mesure et les responsabilités                           |
| Le prestataire promet un rang ou une date, mais ne montre ni changement ni URL ni contrôle               | demander des éléments vérifiables ; une durée d'engagement ne remplace pas la preuve du travail                  |

### Score de lancement P1

| Critère                          |       Note | Justification                                                                                                |
| -------------------------------- | ---------: | ------------------------------------------------------------------------------------------------------------ |
| Adéquation avec une offre vendue |      25/25 | Le sujet conduit naturellement à un cadrage ou à une reprise de suivi SEO                                    |
| Proximité d'une demande de devis |      23/25 | Le lecteur arbitre une reconduction, un premier budget ou un changement de méthode                           |
| Preuve qualitative de demande    |      11/15 | SERP française actuelle riche ; aucune donnée propriétaire de volume ou de difficulté disponible             |
| Preuve ou outil original         |      15/15 | Journal de preuves sur 90 jours, fondé sur les événements et relié aux demandes commerciales                 |
| Différenciation                  |      10/10 | Le guide refuse la chronologie universelle « mois 1 à 6 » dominante et sépare six niveaux de résultat        |
| Maillage et CTA utile            |       9/10 | Plusieurs guides SEO proches permettent un parcours précis sans forcer le contact                            |
| **Total**                        | **93/100** | Sujet retenu ; aucune fourchette de délai, position ou progression moyenne ne sera présentée comme référence |

## 1 bis. Contrat de langage humain

- **Phrase exacte que le lecteur pourrait dire au téléphone :** « Je paie du
  référencement depuis deux ou trois mois. On me dit d'être patient, mais
  comment savoir si ça avance vraiment et à quel moment je dois arrêter ? »
- **Réponse qu'il attend en une phrase :** « Il n'existe pas de mois garanti :
  vérifiez d'abord ce qui a été publié et vu par Google, puis les recherches,
  clics et demandes réellement obtenus avant de décider de continuer ou de
  corriger. »
- **Terme central expliqué sans jargon :** un résultat SEO peut être une page
  retenue par Google, une apparition dans les résultats, un clic ou une demande
  commerciale ; ces étapes ne se produisent ni toujours ensemble ni à une date
  garantie.
- **Mots ordinaires employés par le lecteur :** apparaître, être trouvé, page,
  recherche, visite, appel, formulaire, devis, client, vente, facture, attendre,
  continuer, corriger, arrêter.
- **Mots d'agence ou de consultant à éviter :** KPI précurseur, vélocité,
  traction organique, autorité, cluster, montée sémantique, quick win,
  maturité, activation, fenêtre d'attribution, ramp-up, seuil de significativité.
- **Projet des 150 premiers mots :** ci-dessous.
- **Ce que le lecteur saura décider après ces 150 mots :** refuser un délai
  isolé, écrire la première preuve attendue et ouvrir son propre journal.
- **H2 relus isolément :** oui au stade du plan ; à revalider après P2.
- **Comparaison comprise à 390 px sans colonne masquée :** le journal public
  devra devenir une suite de cartes sous 768 px ; contrôle réservé à P4.
- **FAQ dont la première phrase répond :** réponses prévues directes ; contrôle
  final réservé à P2/P4.
- **CTA formulé comme résultat pour le prospect :** « Vérifier si mon
  investissement SEO avance vraiment ».

### Projet des 150 premiers mots

> Vous financez des corrections ou des articles pour être mieux trouvé sur
> Google, mais vous ne savez pas quand attendre des appels ou des ventes. Votre
> prestataire parle de patience ; vous voulez vérifier si le travail avance
> vraiment.
>
> **Il n'existe pas de délai SEO valable pour toutes les entreprises.** Google
> indique qu'un changement peut produire un effet en quelques heures ou prendre
> plusieurs mois, et parfois ne produire aucun effet notable. Une page
> explorée ou indexée n'est donc pas encore un résultat commercial.
>
> Regardez chaque étape séparément : travail publié, exploration et indexation,
> apparitions sur des recherches utiles, clics, contacts qualifiés, puis ventes
> après votre cycle commercial. Ce guide vous aide à enregistrer votre point de
> départ, choisir les preuves à attendre et décider quand poursuivre, corriger,
> réduire ou arrêter une action SEO, sans acheter une promesse de classement.

Décompte de contrôle : **140 mots** avec une segmentation par espaces. P2 doit
recompter le texte rendu et conserver la réponse avant toute méthode.

### Définitions autorisées au fil de la lecture

| Terme utile      | Formulation humaine à employer                                                            | Limite à rappeler                                                                                                    |
| ---------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Exploration      | Google consulte une adresse pour lire la page ; s'il la connaissait déjà, il la réexplore | une demande d'exploration n'impose ni date ni inclusion dans les résultats                                           |
| Indexation       | Google retient une version de la page dans son index                                      | une page indexée n'est pas nécessairement affichée pour une recherche utile                                          |
| Impression       | une apparition comptée dans les résultats selon les règles et filtres du rapport          | ce n'est ni une visite ni une preuve que la personne a lu le résultat                                                |
| Taux de clics    | clics divisés par impressions, appelé CTR dans Search Console                             | il dépend du périmètre observé et ne mesure pas la transformation commerciale                                        |
| Position moyenne | moyenne de la meilleure position du site ou de la page dans les affichages retenus        | ce n'est pas une place fixe et universelle sur Google                                                                |
| Contact qualifié | demande correspondant au type de client et au besoin que l'entreprise accepte de traiter  | sa définition appartient à l'entreprise et doit être écrite avant le suivi                                           |
| Cycle commercial | temps entre le premier contact et la décision de vente ou de refus                        | juger les ventes avant la fin de ce cycle confond délai SEO et délai de décision du prospect                         |
| État initial     | chiffres, filtres, URL, recherches et période enregistrés avant le changement             | si aucun « avant » n'existe, repartir de la plus ancienne période comparable et conserver une attribution incertaine |

### Test sujet, action, résultat à imposer à P2

| Phrase abstraite à éviter                     | Qui agit ?                          | Action concrète                                                          | Résultat pour le lecteur                              | Phrase réécrite                                                                                                                 |
| --------------------------------------------- | ----------------------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| « Suivre la montée en puissance organique. »  | dirigeant ou prestataire            | recopie les mêmes URL, recherches et chiffres à chaque date              | il voit ce qui a réellement changé                    | « Comparez les mêmes pages et recherches avec les mêmes filtres à chaque point de contrôle. »                                   |
| « Piloter les indicateurs précurseurs. »      | dirigeant                           | sépare indexation, impressions, clics et demandes                        | il ne prend pas une apparition pour une vente         | « Notez séparément quand la page est indexée, quand elle apparaît, quand elle reçoit un clic et quand une demande arrive. »     |
| « Attendre la maturité du domaine. »          | personne précisément identifiable   | fixe le prochain contrôle selon le changement et les données disponibles | l'attente possède une date et une raison              | « Écrivez ce qui doit être vérifié ensuite, par qui et à quelle date ; ne payez pas pour “attendre” sans travail ni contrôle. » |
| « Valider la traction SEO. »                  | dirigeant et responsable commercial | rapprochent clics, contacts qualifiés et ventes                          | ils savent si la visibilité touche de vrais prospects | « Comptez les demandes correspondant à votre offre et suivez leur issue dans votre outil commercial. »                          |
| « Réallouer le budget selon la performance. » | dirigeant                           | choisit poursuivre, corriger, réduire ou arrêter une action précise      | le budget finance la prochaine preuve utile           | « Si la page apparaît sur les mauvaises recherches, corrigez sa réponse avant de financer de nouvelles pages. »                 |

### Test de l'ouverture

- [x] la facture et l'attente vécues par le dirigeant apparaissent avant la
      méthode de l'agence ;
- [x] le référencement naturel et ses résultats sont décrits en mots courants ;
- [x] la réponse « aucun délai universel » est immédiate ;
- [x] les sept étapes sont annoncées sans promettre qu'elles se succéderont ;
- [x] aucune métaphore de marathon, graine, fondation ou moteur à apprendre ;
- [x] la décision de sortie est annoncée : poursuivre, corriger, réduire ou
      arrêter une action.

## 2. Cannibalisation

| Page existante ou planifiée        | Intention de cette page                                                        | Différence obligatoire du nouveau guide                                                                                 | Lien ou arbitrage nécessaire                                                                                       |
| ---------------------------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `positions-google-baissent`        | enquêter sur des clics, impressions ou positions auparavant acquis puis perdus | ici, écrire les attentes et les contrôles d'un travail qui commence ou change ; aucune baisse historique n'est présumée | lien si une série auparavant stable baisse ; ne pas reprendre sa fiche d'incident ni sa chronologie 30 min/7 jours |
| `pourquoi-site-pas-visible-google` | trouver le premier blocage sur une URL et une recherche aujourd'hui            | ici, suivre dans le temps plusieurs pages après un état initial ; l'absence isolée reste chez le guide voisin           | lien lorsque l'exploration ou l'indexation reste inconnue ; ne pas refaire sa chaîne diagnostique interactive      |
| `seo-ou-google-ads`                | choisir le premier investissement d'acquisition                                | ici, le SEO a déjà été choisi ou commencé ; le lecteur décide comment le juger, non s'il faut préférer Ads              | lien en amont si l'entreprise exige des demandes très rapides ; aucun nouveau comparatif de canaux                 |
| `audit-seo-que-contient-il`        | réceptionner un diagnostic et ses recommandations                              | ici, contrôler les effets et décisions après la mise en œuvre, pas le sommaire ou la qualité d'un rapport               | lien lorsque l'état initial ou les causes restent inconnus                                                         |
| `choisir-agence-seo`               | rendre plusieurs propositions comparables avant signature                      | ici, demander des preuves de progression après décision, y compris lorsque le travail est interne                       | lien si le prestataire refuse de rendre travail, pages, accès et compte rendu vérifiables                          |
| `prix-referencement-naturel`       | comparer budgets, modèles de facturation et rentabilité attendue               | ici, aucun prix de marché ; le budget apparaît seulement comme décision à reconduire, réduire ou déplacer               | lien lorsque le lecteur doit comparer le coût au résultat commercial attendu                                       |
| `/services/referencement-google`   | présenter l'accompagnement SEO Hagnéré Code                                    | le guide fournit une méthode autonome et peut recommander d'attendre, de corriger seul ou d'arrêter une action          | CTA unique après le journal et la règle de décision                                                                |
| futur `site-indexe-sans-trafic`    | approfondir des pages indexées sans impressions ou clics                       | ici, ce cas n'est qu'une branche du calendrier ; le diagnostic détaillé restera dans la future URL                      | aucun lien avant publication                                                                                       |

**Justification d'une URL distincte :** le corpus explique l'absence, la baisse,
le prix, l'audit, le choix du canal et celui d'une agence, mais aucune page ne
permet encore au dirigeant de suivre un travail SEO neuf jusqu'aux demandes et
de décider à une date justifiée de poursuivre, corriger, réduire ou arrêter.

### Frontières de vocabulaire

- Ce guide peut dire « la page n'est pas encore indexée », mais renvoie au
  diagnostic d'invisibilité au lieu d'en lister toutes les causes.
- Il peut constater une baisse entre deux contrôles, mais renvoie au guide de
  baisse si une performance acquise se dégrade réellement.
- Il peut recommander Ads pour une urgence, mais ne recommence pas le comparatif
  SEO/Ads.
- Il peut demander le travail livré, mais ne reconstitue pas le contenu d'un
  audit ni la grille de sélection d'une agence.
- Il ne publie aucun tarif, aucun engagement de durée et aucune estimation de
  rentabilité sans les données propres à l'entreprise.

## 3. Demande et vocabulaire du lecteur

### Observation qualitative datée

Observation web effectuée le **22 juillet 2026** depuis la France sur les
requêtes suivantes :

- `combien de temps résultats SEO` ;
- `combien de temps avant de voir des résultats en SEO` ;
- `délai résultats référencement naturel` ;
- `quand arrêter une prestation SEO`.

Cette observation sert seulement à comprendre les formulations, formats et
promesses visibles. Elle ne mesure ni volume de recherche, ni difficulté, ni
position stable. L'ordre et la composition des résultats peuvent varier selon
le lieu, l'appareil, la date et l'historique. Aucune donnée Search Console ou
Keyword Planner propre à Hagnéré Code n'était disponible dans cette passe.

### Questions observées ou directement suggérées

- Au bout de combien de temps doit-on voir les premiers résultats ?
- Un site neuf prend-il plus de temps qu'un site déjà visible ?
- L'indexation compte-t-elle déjà comme un résultat ?
- Quels chiffres regarder pendant que les ventes ne bougent pas ?
- Pourquoi une agence demande-t-elle trois, six ou douze mois ?
- Comment savoir si le prestataire travaille pendant cette attente ?
- Peut-on obtenir des résultats plus vite avec plus d'articles ou de liens ?
- Que faire si, après plusieurs mois, rien ne bouge ?
- Google Ads accélère-t-il le référencement naturel ?
- Faut-il arrêter si aucune page n'est en première page ?
- Comment relier les clics Google aux formulaires, appels et ventes ?

### Formulations à privilégier

| Ce que le lecteur veut savoir | Formulation humaine                                                                         | Formulation à éviter                                   |
| ----------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| résultat attendu              | « Qu'est-ce qui doit changer pour que cet investissement soit utile à l'entreprise ? »      | « Quel KPI de traction organique valider ? »           |
| état initial                  | « Quels chiffres avions-nous avant de publier ou corriger cette page ? »                    | « Quelle baseline consolider ? »                       |
| premier progrès               | « La page apparaît-elle sur des recherches qui correspondent à de vrais besoins clients ? » | « La couverture sémantique progresse-t-elle ? »        |
| patience justifiée            | « Quel travail a été publié et quelle preuve relirons-nous à la prochaine date ? »          | « Il faut laisser maturer l'autorité. »                |
| décision commerciale          | « Les clics donnent-ils des demandes que l'équipe accepte et transforme ? »                 | « Le trafic organique entre-t-il en phase de scale ? » |
| arrêt ou correction           | « Quelle étape ne progresse pas, et quelle action précise allons-nous changer ? »           | « Faut-il pivoter la stratégie globale ? »             |

## 4. Carte concurrentielle

| Page observée                                                                                                                | Réponse et angle                                                                              | Preuve ou artefact                          | Bon point                                                           | Manque décisionnel                                                                                                                       | Conflit d'intérêt éventuel      |
| ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| [Fidesio](https://www.fidesio.com/combien-de-temps-avant-de-voir-des-resultats-en-seo)                                       | annonce trois à six mois, puis six à douze mois pour des résultats plus marqués               | liste de facteurs et étapes                 | rappelle que l'état du site et la concurrence changent la situation | « résultat significatif » n'est pas défini ; aucun état initial, contact, vente, règle d'arrêt ni source soutenant la durée              | agence web et SEO               |
| [Studio HTTP](https://studio-http.fr/ressources/combien-de-temps-prend-le-seo/)                                              | construit un calendrier mois 1 à 6, de l'indexation aux conversions                           | chronologie mensuelle                       | explique exploration et indexation avant le classement              | calendrier présenté comme réaliste pour tous ; affirmations non sourcées sur fréquence de publication, « autorité » et conversion        | agence web, audit et SEO        |
| [Communic'Action](https://communicaction.net/guides/delai-referencement-google)                                              | donne des délais fixes pour indexation, impressions, première page et maturité                | tableau par étape                           | sépare indexation et position                                       | transforme des ordres de grandeur en parcours attendu ; promet une progression par mois sans volume, requête, saison ni cycle commercial | agence SEO et devis             |
| [Mooood](https://mooood.fr/delai-resultats-referencement-naturel/)                                                           | suit impressions, position, pages indexées et actions locales avant les demandes              | calendrier de 24 mois et quatre indicateurs | demande de préciser ce que signifie « résultat »                    | chiffres et étapes issus de l'expérience déclarée de l'agence ; position moyenne et nombre de pages traités comme progrès prédictifs     | agence SEO, offre et audit      |
| [SEO Tours](https://seotours.fr/combien-de-temps-avant-resultats-seo/)                                                       | décrit un cycle identique puis des délais par type de site                                    | tableaux de durées et facteurs              | reconnaît une forte variabilité                                     | nombreuses durées et causes attribuées sans corpus reproductible ; la fréquence et la fraîcheur sont généralisées comme accélérateurs    | consultant SEO                  |
| [LMWEB](https://lmweb.fr/referencement-naturel-seo/referencement-combien-de-temps-faut-il-pour-voir-des-resultats-en-seo/)   | répond par quatre à douze mois selon le type de site et emploie l'image du marathon           | tableau site neuf/existant/concurrentiel    | distingue état initial et concurrence                               | promet finalement montée, trafic qualifié et ROI supérieur ; aucune mesure des demandes, aucun critère de correction ou d'arrêt          | agence web et référencement     |
| [Google Search Central — guide de démarrage](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=fr) | refuse le secret ou le résultat automatique et décrit une amplitude de quelques heures à mois | limites officielles et attentes             | seule source utilisée pour le délai des effets de Google            | documentation générale, pas calendrier commercial ni fiche de décision pour une PME                                                      | aucun conflit commercial direct |

Les pages d'agences sont étudiées comme concurrents éditoriaux. **Aucun délai,
facteur Google ou taux du futur guide ne reposera sur elles.**

**Angle mort commun :** la SERP répond « trois à six mois » avant d'avoir défini
ce qu'est un résultat, puis déroule des mois identiques pour des sites, des
requêtes et des cycles de vente différents. Elle montre rarement l'état de
départ, le travail réellement publié, la saison, la faiblesse des petits
volumes, le passage du clic au contact qualifié et une décision autre que
« patienter davantage ».

**Valeur originale du guide :** un journal de décision sur 90 jours qui suit
cinq URL depuis le changement livré jusqu'à la vente, sans présenter 90 jours
comme un délai Google. Chaque ligne comporte la preuve, ce qu'elle permet et ne
permet pas de conclure, puis la prochaine décision. Le lecteur peut l'utiliser
avec son équipe ou son prestataire actuel.

## 5. Fiche de preuves officielles

Chaque source doit rester visible près de l'affirmation publique qui change la
décision. Une bibliographie finale ne suffira pas. Les formulations ci-dessous
sont des portées maximales, pas des phrases à recopier mécaniquement.

| Affirmation utilisable                                                                                                                                                                                         | Source primaire et passage utile                                                                                                                                                                   | Nature                         | Périmètre                                                 | Consultation | Confiance | Emplacement public prévu      | Conséquence lecteur                                                                       | Fraîcheur                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | --------------------------------------------------------- | ------------ | --------- | ----------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------- |
| Une modification peut produire un effet dans Google en quelques heures ou prendre plusieurs mois ; elle peut aussi ne produire aucun effet notable                                                             | [Google Search Central — guide de démarrage SEO](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=fr), section « Combien de temps dois-je attendre »                    | FAIT VÉRIFIÉ officiel          | effets d'une modification dans les résultats Google       | 2026-07-22   | élevée    | réponse courte et limites     | refuser une date universelle et exiger un résultat défini                                 | page vivante, revalider avant P2/P3       |
| Google indique généralement d'attendre quelques semaines avant d'évaluer les effets bénéfiques possibles d'un travail, sans promettre qu'un effet apparaîtra                                                   | [Guide de démarrage SEO](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=fr), même section                                                                             | FAIT VÉRIFIÉ officiel + limite | lecture générale après modification, pas contrat de délai | 2026-07-22   | élevée    | choix de la prochaine lecture | ne pas juger quotidiennement, mais ne pas transformer « quelques semaines » en garantie   | page vivante                              |
| Une nouvelle exploration peut prendre plusieurs jours, voire plusieurs semaines ; la demander ne garantit ni inclusion immédiate ni inclusion tout court                                                       | [Google Search Central — demander une nouvelle exploration](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl?hl=fr), introduction et limites                      | FAIT VÉRIFIÉ officiel          | URL nouvelle ou modifiée gérée par le propriétaire        | 2026-07-22   | élevée    | étape exploration             | une demande d'indexation n'est ni le début garanti d'un chronomètre ni un résultat SEO    | page vivante                              |
| Google ne peut pas prédire ni garantir quand ou si une URL sera explorée et indexée ; un sitemap n'assure ni indexation ni hausse de classement                                                                | [Google Search Central — FAQ exploration et indexation](https://developers.google.com/search/help/crawling-index-faq?hl=fr), question sur l'entrée dans Google                                     | FAIT VÉRIFIÉ officiel          | exploration et indexation générales                       | 2026-07-22   | élevée    | limites du premier niveau     | bannir tout « indexé sous X jours » et toute promesse de sitemap                          | revalider si la FAQ change                |
| Search Console présente clics, impressions, taux de clics et position moyenne et permet de les filtrer par requête, page, pays, appareil et type de recherche                                                  | [Aide Search Console — rapport Performances](https://support.google.com/webmasters/answer/7576553?hl=fr), configuration, métriques et dimensions                                                   | FAIT VÉRIFIÉ officiel          | propriété et filtres choisis                              | 2026-07-22   | élevée    | tableau de bord               | conserver les mêmes filtres et séparer apparition, clic et position                       | interface vivante, revalider les libellés |
| Google recommande de se concentrer davantage sur les tendances d'impressions et de clics que sur la position seule                                                                                             | [Aide Search Console — tâches courantes](https://support.google.com/webmasters/answer/17010961?hl=fr), suivi des positions                                                                         | FAIT VÉRIFIÉ officiel          | rapport Performances                                      | 2026-07-22   | élevée    | ordre des signaux             | une position moyenne isolée ne décide ni de la poursuite ni du budget                     | interface vivante                         |
| Les comparaisons hebdomadaires ou mensuelles peuvent réduire l'effet du jour de la semaine ; les filtres et l'agrégation peuvent modifier le calcul des métriques                                              | [Aide Search Console — filtrage et comparaison](https://support.google.com/webmasters/answer/17011165?hl=fr), granularité et limites                                                               | FAIT VÉRIFIÉ officiel          | comparaison de périodes dans Search Console               | 2026-07-22   | élevée    | méthode de comparaison        | comparer des périodes cohérentes et recopier les filtres                                  | interface vivante                         |
| Les données récentes peuvent être préliminaires, et la position moyenne dépend de l'agrégation par propriété ou par page                                                                                       | [Aide Search Console — données du rapport](https://support.google.com/webmasters/answer/17011364?hl=fr), fraîcheur et agrégation                                                                   | FAIT VÉRIFIÉ officiel          | données Search Console                                    | 2026-07-22   | élevée    | limites du journal            | ne pas décider sur une journée incomplète ni appeler la moyenne « notre position »        | interface vivante                         |
| Les lignes de requêtes peuvent être tronquées ou omettre des recherches anonymisées                                                                                                                            | [Aide Search Console — dimensions et regroupements](https://support.google.com/webmasters/answer/17011259?hl=fr), limites des lignes                                                               | FAIT VÉRIFIÉ officiel          | tableau des requêtes                                      | 2026-07-22   | élevée    | limite des requêtes           | ne pas présenter la somme des lignes comme un total exhaustif                             | interface vivante                         |
| Search Console décrit ce qui se passe avant la visite ; Google Analytics décrit les interactions sur le site, et leurs chiffres ne coïncident pas complètement                                                 | [Google Search Central — Search Console et Analytics](https://developers.google.com/search/docs/monitor-debug/google-analytics-search-console?hl=fr), sections sur les deux outils et leurs écarts | FAIT VÉRIFIÉ officiel          | recherche naturelle Google et mesure du site              | 2026-07-22   | élevée    | passage clic → contact        | un clic n'est pas une demande ; rapprocher les outils sans exiger des chiffres identiques | page vivante                              |
| Le rapprochement Search Console/Analytics peut aider à attribuer des formulaires ou transactions à la recherche Google, sous réserve des différences de mesure                                                 | [Même documentation](https://developers.google.com/search/docs/monitor-debug/google-analytics-search-console?hl=fr), section sur l'attribution des conversions                                     | FAIT VÉRIFIÉ officiel + limite | conversions configurées dans les propres outils du site   | 2026-07-22   | élevée    | journal commercial            | compléter Search Console par les contacts qualifiés, ventes et limites d'attribution      | page vivante                              |
| Lors d'une forte baisse de position, Google rappelle que certains effets peuvent arriver en quelques jours et d'autres en plusieurs mois                                                                       | [Google Search Central — déboguer les baisses](https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops?hl=fr), grande baisse de position                            | FAIT VÉRIFIÉ officiel + limite | analyse d'une baisse uniquement                           | 2026-07-22   | élevée    | aucun — guide baisse          | réserver cette chronologie spécialisée à `positions-google-baissent`                      | page vivante                              |
| Lors d'une migration avec changement d'URL, un petit ou moyen site peut demander quelques semaines pour que la plupart des pages changent dans l'index ; les grands sites plus longtemps                       | [Google Search Central — migration avec changement d'URL](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=fr), attentes et variations temporaires        | FAIT VÉRIFIÉ officiel          | migration d'URL, pas SEO courant                          | 2026-07-22   | élevée    | profil migration              | retirer les migrations du calendrier ordinaire et suivre anciennes/nouvelles URL          | page vivante                              |
| Google recommande un contenu utile, fiable et d'abord destiné aux personnes ; il n'a pas de nombre de mots préféré et met en garde contre la production de nombreux contenus dans l'espoir d'attirer du trafic | [Google Search Central — contenu people-first](https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=fr), auto-évaluation et avertissements                           | FAIT VÉRIFIÉ officiel          | qualité éditoriale générale                               | 2026-07-22   | élevée    | facteurs sous contrôle        | ne pas utiliser cadence ou volume d'articles comme preuve de progression                  | page vivante                              |
| Google indique que personne ne peut garantir la première position                                                                                                                                              | [Google Search Central — avez-vous besoin d'un référenceur ?](https://developers.google.com/search/docs/fundamentals/do-i-need-seo?hl=fr), choix d'un référenceur                                  | FAIT VÉRIFIÉ officiel          | promesse de classement d'un prestataire                   | 2026-07-22   | élevée    | FAQ sur les engagements       | contractualiser le travail vérifiable sans promettre un rang                              | page vivante                              |

### Ce qui relève d'une recommandation Hagnéré Code

Les choix suivants structurent le futur guide. Ils ne sont pas présentés comme
des exigences de Google :

1. limiter le premier tableau de bord à cinq URL qui correspondent à des offres
   ou questions commerciales importantes ;
2. enregistrer l'état initial avant chaque modification : période, URL,
   recherche, impressions, clics, contacts et ventes disponibles ;
3. ne pas attendre une date fixe : ouvrir une décision quand un événement est
   observé — page explorée, page indexée, volume d'impressions lisible, clics
   suffisants pour examiner la page, puis fin d'un cycle commercial ;
4. lire le tableau une fois par semaine pour vérifier les obstacles et les
   travaux, mais comparer les tendances sur des semaines ou mois cohérents
   lorsque le volume le permet ;
5. demander à chaque contrôle : « que savons-nous, que ne savons-nous pas et
   quelle décision cette preuve autorise-t-elle ? » ;
6. suivre les contacts qualifiés et leur issue dans l'outil commercial ; ne pas
   attribuer une vente à une requête si la mesure ne le permet pas ;
7. arrêter ou réduire une **action précise** avant de conclure que « le SEO ne
   marche pas » : nouvelle page mal ciblée, publication en volume, lien acheté,
   correctif non déployé ou reporting sans décision ;
8. conserver une issue « ne pas investir davantage » si la demande accessible,
   la marge, les ressources de vente ou les preuves ne justifient pas la suite.

### Contradictions et données à ne pas publier

- Pas de « trois à six mois » comme moyenne, seuil, engagement ou réponse
  courte : aucun corpus primaire adapté au site et au marché du lecteur ne
  soutient cette formule.
- Pas de « premiers résultats », « résultat significatif », « maturité » ou
  « traction » sans définir le chiffre, l'URL, la recherche et la conséquence
  commerciale.
- Pas de chronologie « mois 1 technique, mois 2 contenu, mois 3 impressions,
  mois 6 ventes » : le travail dépend du diagnostic et les résultats ne suivent
  pas un ordre daté garanti.
- Pas d'âge de domaine, « autorité », fréquence de publication, nombre de pages
  indexées, backlinks ou Core Web Vitals présentés isolément comme chronomètre
  ou accélérateur garanti.
- Pas de page 1, top 3, volume de mots-clés ou position moyenne présenté comme
  résultat commercial universel.
- Pas de demande d'exploration décrite comme une indexation forcée.
- Pas d'indexation transformée en impression, de clic transformé en contact ni
  de contact transformé en vente.
- Pas de nombre de contacts minimal universel. Un faible volume doit être
  nommé comme tel ; une variation en pourcentage peut exagérer deux ou trois
  événements.
- Pas d'attribution causale depuis un simple avant/après : saisonnalité,
  changements simultanés, demande, concurrence et traitement commercial
  restent des explications possibles.
- Pas de Search Console présenté comme mesure exhaustive des requêtes, des
  visites, des formulaires ou des ventes.
- Pas de promesse que les pages ou clics acquis resteront après l'arrêt des
  dépenses et du travail.
- Pas d'engagement de douze mois justifié uniquement par le temps que « Google
  exige ».
- Pas de garantie de classement, de trafic, de contact, de vente, de délai ou
  de retour sur investissement.

## 6. Ce qui change réellement le calendrier

La page publique doit distinguer les facteurs vérifiés des raisons de gestion
propres à l'entreprise.

| Situation de départ                         | Ce qui doit être observé avant de juger                                            | Ce qui peut retarder la décision commerciale                                           | Décision possible                                                                  |
| ------------------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Nouvelle page sur un site déjà connu        | exploration, indexation, premières requêtes et impressions                         | faible demande, requête trop étroite, page éloignée dans la navigation                 | corriger découverte ou réponse ; continuer seulement si les recherches sont utiles |
| Page déjà visible que l'on améliore         | état initial précis, même requête, impressions, clics et page de destination       | saison, résultat Google différent, autres modifications simultanées                    | garder, tester le titre, corriger la page ou annuler la modification               |
| Site neuf sans historique                   | propriété Search Console, découverte, indexation et premières apparitions          | absence d'état initial, peu de pages utiles, demande inconnue                          | construire la mesure et tester les offres avant de promettre une progression       |
| Blocage technique corrigé                   | correction réellement en ligne, nouvelle exploration et état d'indexation          | Google n'a pas encore relu la page ; d'autres causes peuvent subsister                 | contrôler la correction avant de financer davantage de contenu                     |
| Migration avec changement d'URL             | anciennes et nouvelles URL, redirections, indexation et trafic des deux propriétés | nombre d'URL, vitesse du serveur et erreurs de correspondance                          | suivre le plan de migration, pas le calendrier ordinaire du guide                  |
| Pages indexées et impressions en hausse     | recherches exactes, pages montrées, CTR et clics                                   | apparitions sur des questions non commerciales ou trop larges                          | resserrer la réponse ou poursuivre selon l'intention                               |
| Clics naturels mais peu de demandes         | mesure des formulaires/appels, qualité des contacts, offre et suivi                | attribution incomplète, page confuse, réponse tardive de l'équipe, cycle de vente long | corriger mesure, page ou traitement commercial avant d'accuser Google              |
| Contacts qualifiés mais ventes non conclues | durée du cycle, motifs de refus, marge et capacité commerciale                     | prix, offre, délai de réponse, saison, échantillon trop faible                         | poursuivre l'acquisition, corriger la vente ou attendre la fin du cycle            |

### Les facteurs à expliquer sans leur attribuer un pouvoir magique

- **État du site :** une page déjà connue et visible ne part pas du même point
  qu'un site neuf ou qu'une migration. L'effet précis reste à observer.
- **Travail réellement livré :** un audit, une recommandation ou un calendrier
  ne change pas le site tant que la correction ou la page n'est pas publiée.
- **Demande :** une page ne peut pas produire beaucoup d'impressions si peu de
  personnes recherchent ce besoin. Aucun volume n'est supposé dans le guide.
- **Réponse concurrente :** d'autres résultats évoluent. Le guide parlera de la
  comparaison des réponses visibles, pas d'un « score d'autorité » comme délai.
- **Saison :** deux périodes non comparables peuvent faire croire à un progrès
  ou à un échec. La comparaison annuelle n'est utilisée que si les données
  existent et sont pertinentes.
- **Cycle commercial :** une mission signée plusieurs semaines après le
  premier contact ne peut pas être jugée le jour du clic.
- **Faible volume :** deux ventes au lieu d'une représentent +100 %, mais ne
  suffisent pas à établir une tendance ou une causalité.

## 7. Exemple illustratif fictif et calcul reproductible

> **EXEMPLE ILLUSTRATIF FICTIF.** Tous les nombres ci-dessous sont inventés
> pour apprendre à lire un tableau de bord. Ils ne représentent ni un client,
> ni une moyenne, ni un objectif, ni un délai recommandé. Les deux périodes
> comptent 90 jours et utilisent fictivement la même propriété, le même type de
> recherche, le même pays, le même appareil et le même groupe de cinq pages
> commerciales.

### Comparaison brute

| Mesure                                     | 90 jours avant | 90 jours après | Calcul du changement                                         | Ce que le chiffre permet de dire                                      |
| ------------------------------------------ | -------------: | -------------: | ------------------------------------------------------------ | --------------------------------------------------------------------- |
| Impressions                                |          5 000 |          8 000 | `(8 000 - 5 000) / 5 000 = +60 %`                            | ces cinq pages ont été montrées plus souvent dans le périmètre choisi |
| Clics                                      |            150 |            280 | `(280 - 150) / 150 = +86,7 %`                                | 130 clics supplémentaires sont comptés, sans prouver leur cause       |
| Taux de clics                              |          3,0 % |          3,5 % | `150 / 5 000 = 3,0 %` ; `280 / 8 000 = 3,5 %` ; `+0,5 point` | une part un peu plus grande des impressions a produit un clic         |
| Contacts qualifiés attribuables au naturel |              8 |             12 | `(12 - 8) / 8 = +50 %`, soit seulement 4 contacts de plus    | le nombre progresse dans cet exemple, mais l'échantillon reste faible |
| Ventes conclues attribuables               |              2 |              2 | `2 - 2 = 0`                                                  | aucune hausse de ventes n'est observée sur ces deux fenêtres          |

Contrôles inverses : `5 000 × 3,0 % = 150` clics et `8 000 × 3,5 % = 280`
clics. Les ratios indicatifs rapprochant ici deux outils seraient fictivement
`8 / 150 = 5,3 %` puis `12 / 280 = 4,3 %`. Ce ne sont pas des taux natifs de
Search Console. Malgré davantage de contacts, la part des clics devenant un
contact baisse dans cet exemple. Le guide ne doit donc pas résumer la situation
par « le SEO progresse ».

### Pourquoi l'avant/après ne prouve pas la cause

Supposons également, toujours fictivement, que cinq autres pages comparables et
non modifiées passent de 6 000 à 8 400 impressions sur les mêmes périodes :
`(8 400 - 6 000) / 6 000 = +40 %`. Cette hausse peut signaler une demande
saisonnière ou un changement commun au site. Elle n'autorise pas à soustraire
automatiquement 40 points aux 60 % des pages modifiées : les groupes ne sont
pas une expérience contrôlée et peuvent couvrir des recherches différentes.

L'exemple impose quatre conclusions prudentes :

1. la visibilité et les clics du groupe suivi augmentent ;
2. la saison ou un effet commun peut expliquer une partie inconnue de la hausse ;
3. quatre contacts supplémentaires restent un faible volume et ne prouvent pas
   que le taux de qualification s'améliore ;
4. le nombre de ventes ne progresse pas encore ; il faut vérifier la durée du
   cycle, les motifs de refus et l'attribution avant de poursuivre ou d'arrêter.

### Décision possible dans l'exemple

Le dirigeant ne double pas immédiatement le budget et ne déclare pas non plus
un échec. Il conserve les cinq pages qui gagnent des recherches pertinentes et
examine pourquoi le ratio contact/clic baisse. Il vérifie d'abord combien des
douze dossiers sont encore ouverts et, si leur cycle commercial n'est pas
terminé, attend leur issue avant de conclure. Il refuse de financer dix nouvelles
pages tant que cette question n'est pas fermée. Cette décision est une
recommandation pédagogique Hagnéré Code, pas une règle de Google.

## 8. Empreinte éditoriale à ne pas reproduire

Cinq voisins ont été lus pour séparer les intentions et éviter une nouvelle
version de leur structure.

| Guide voisin                       | Type d'ouverture                                             | Progression                                                                            | Dispositif récurrent                               | Type d'exemple                             | Place du CTA                                   | Type de conclusion                          |
| ---------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------ | ---------------------------------------------- | ------------------------------------------- |
| `positions-google-baissent`        | dirigeant devant une baisse, réponse « ne changez pas tout » | mesure comparable, quatre chiffres, étendue, chronologie puis causes                   | fiche d'incident et actions 30 min/24 h/7 jours    | perte fictive de 192 clics                 | après la fiche et les contrôles                | correction réversible ou observation        |
| `pourquoi-site-pas-visible-google` | recherche métier introuvable                                 | six preuves, de la découverte à la demande                                             | outil URL-requête en six cartes                    | entreprise fictive suivie sur quatre pages | après le diagnostic autonome                   | première étape bloquée, responsable et date |
| `seo-ou-google-ads`                | choix entre payer des annonces et améliorer le site          | différence, objectifs, options, prérequis et plan de 90 jours                          | situations comparées et cartes de décision         | trois entreprises fictives                 | après la comparaison                           | SEO, Ads, hybride ou correction préalable   |
| `audit-seo-que-contient-il`        | rapport long mais impossible à exécuter                      | périmètre, preuves, modules, réception et mise en œuvre                                | fiche de réception d'une recommandation            | rapport fictif et recommandation           | après les niveaux d'audit                      | accepter, préciser ou refuser le livrable   |
| `choisir-agence-seo`               | trois propositions hétérogènes                               | brief commun, cinq questions, travail technique/contenu/liens, comptes et compte rendu | promesse démontée en cinq réponses et quatre refus | proposition vague puis exploitable         | après conflit d'intérêt et verdict             | signer, corriger, auditer ou reporter       |
| `prix-referencement-naturel`       | dirigeant cherchant un budget                                | prix, modèles de facturation, contenu, risques, calcul et alternatives                 | tableaux de fourchettes et formule économique      | entreprise fictive avec trois devis        | après le calcul et les mauvais investissements | budget à réduire, poursuivre ou reporter    |

### Choix du nouveau guide

```text
Tension ou question motrice : chaque facture ajoute du temps écoulé, mais seule une suite de preuves permet de savoir si le travail rapproche l'entreprise de demandes utiles
Type d'ouverture retenu et pourquoi : dirigeant qui paie et entend « soyez patient » ; cette scène expose immédiatement le besoin de contrôle sans accuser le prestataire
Progression retenue et pourquoi : définir le résultat → enregistrer l'avant → suivre l'événement suivant → lire la demande et le cycle commercial → décider ; l'ordre part de la décision économique et non du fonctionnement de Google
Artefact signature : journal de décision sur 90 jours pour cinq URL, organisé par changement et événement plutôt que par mois 1, 2, 3
Rythme et registre de voix : questions brèves, un fil chiffré sans personnage, cartes d'étape et décisions explicites ; aucun calendrier de maturation
Place naturelle du CTA : après le journal rempli, l'exemple et la grille poursuivre/corriger/réduire/arrêter
Forme de conclusion : écrire la prochaine preuve, la personne qui agit, la date de lecture et ce qui ferait changer la décision
Au moins trois différences avec les voisins : aucun diagnostic d'incident ou d'invisibilité ; aucun plan de 90 jours prescriptif, le nombre désigne seulement la fenêtre du journal ; aucun choix de canal, prix, agence ou audit ; aucun faux client ; conclusion ouverte sur l'arrêt d'une action précise
```

### Risques d'empreinte à surveiller en P2

- Ne pas ouvrir par « le SEO est un marathon » ni créer une autre métaphore de
  graine, fondation, moteur ou escalier.
- Ne pas nommer les étapes « niveaux de maturité », « signaux précurseurs » ou
  « preuves de traction ».
- Ne pas reproduire les six cartes interactives du site invisible ni les
  horaires de l'incident de baisse.
- Ne pas suivre une entreprise fictive nommée sur tout l'article.
- Ne pas transformer le journal de 90 jours en calendrier « semaine 1 à 12 ».
- Ne pas terminer par « soyez patient » : chaque attente possède une preuve,
  une personne, une date et une décision possible.

## 9. Artefact signature — journal de décision SEO sur 90 jours

Les **90 jours sont une fenêtre de tenue du journal**, pas un délai promis pour
obtenir des résultats. Si une migration, un cycle commercial de six mois ou un
volume trop faible exige une période différente, le lecteur conserve la même
fiche et adapte les dates.

La page publique doit proposer la trame en HTML copiable et imprimable. Aucun
téléchargement, sauvegarde ou connexion à Search Console ne doit être promis en
P2 sans artefact réel et testé.

```text
JOURNAL DE DÉCISION SEO — FENÊTRE D'OBSERVATION DE 90 JOURS

A. La décision économique
Offre ou service concerné :
Type de client recherché :
Action attendue après la visite : appel / formulaire / achat / autre :
Définition d'un contact qualifié :
Durée habituelle entre contact et vente ou refus :
Budget et temps interne suivis séparément :
Décision à prendre à la fin de cette fenêtre : poursuivre / corriger / réduire / arrêter une action :

B. L'état initial, avant toute modification
Date et heure de l'export :
Propriété Search Console :
Type de recherche, pays et appareil :
Période de comparaison :
Saison ou événement commercial connu :
URL 1 à 5 :
Requête ou intention visée par chaque URL :
Indexation : oui / non / inconnu :
Impressions, clics, CTR et position moyenne :
Contacts attribuables, contacts qualifiés et ventes :
Ce qui n'est pas mesuré ou reste inconnu :
Si aucun état initial n'a été conservé : plus ancienne période comparable retrouvée et attribution marquée incertaine :

C. Une ligne par changement réellement publié
Date de mise en ligne :
URL :
Ce qui a changé :
Qui a publié ou vérifié :
Preuve que la modification est visible :
Pourquoi ce changement est relié au besoin du lecteur :
Ce qui n'a pas changé afin de limiter les explications possibles :

D. Les événements observés
Date | URL | événement | source | ce que nous savons | ce que nous ignorons
     |     | explorée / indexée / impression / clic / contact / vente |

E. Lecture Search Console comparable
Période et mêmes filtres :
Tous les filtres actifs, dont l'apparence dans les résultats si elle est utilisée :
Requêtes qui gagnent ou perdent des impressions :
Pages qui gagnent ou perdent des clics :
CTR et position moyenne, avec périmètre :
Données préliminaires ou lignes manquantes :
Pages non modifiées servant de comparaison :

F. Lecture commerciale
Clics naturels attribuables :
Formulaires, appels ou achats attribuables :
Contacts correspondant à notre définition :
Ventes, refus et dossiers encore ouverts :
Motifs de refus connus :
Limites d'attribution :

G. Décision suivante
Poursuivre / corriger / réduire / arrêter quelle action précise :
Fait qui justifie cette décision :
Autre explication encore possible :
Travail à réaliser avant le prochain contrôle :
Responsable :
Prochaine date de lecture et raison de cette date :
Fait qui nous ferait changer d'avis :
```

### Critère d'acceptation du journal

Le journal est exploitable lorsqu'une personne absente du projet peut :

1. retrouver les cinq URL, la décision commerciale et l'état initial ;
2. distinguer recommandation, travail publié et effet observé ;
3. reproduire la vue Search Console avec les mêmes filtres ;
4. comprendre où commence la donnée commerciale et ses limites d'attribution ;
5. voir pourquoi la prochaine date a été choisie ;
6. savoir quelle action sera poursuivie, corrigée, réduite ou arrêtée ;
7. identifier une explication concurrente et le fait qui ferait changer la
   décision.

Une ligne « attendre six mois » sans URL, travail publié, preuve attendue et
prochaine décision ne passe pas ce critère.

### Les portes du journal sont des événements, pas des dates fixes

| Événement observé                                         | Question suivante                                                                     | Décision autorisée                                                                                            |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| le travail annoncé n'est pas encore publié                | qui doit le mettre en ligne et comment le vérifier ?                                  | ne pas attribuer à Google une attente qui appartient au projet                                                |
| la page n'a pas encore été réexplorée                     | la page est-elle accessible et une demande unique d'exploration est-elle pertinente ? | contrôler sans promettre la date d'inclusion                                                                  |
| la page est indexée mais possède peu ou aucune impression | la demande existe-t-elle et la page répond-elle à la recherche visée ?                | corriger le diagnostic ou attendre davantage de données ; aucun verdict sur le clic                           |
| les impressions arrivent sur des recherches utiles        | les internautes choisissent-ils le résultat ?                                         | observer les clics et le CTR avec leur position et leur périmètre                                             |
| les clics arrivent                                        | la page permet-elle l'action attendue et la mesure fonctionne-t-elle ?                | corriger la page, l'offre ou le suivi avant de produire davantage                                             |
| des contacts qualifiés arrivent                           | ont-ils terminé le cycle commercial et avec quel résultat ?                           | poursuivre avec prudence, corriger le traitement ou attendre la fin des dossiers ouverts                      |
| le volume reste trop faible pour trancher                 | la requête et le marché peuvent-ils raisonnablement produire assez d'occasions ?      | réduire l'investissement, choisir une autre acquisition ou prolonger l'observation avec une raison économique |

## 10. Règles de décision : poursuivre, renforcer, corriger, réduire ou arrêter

### Poursuivre sans augmenter mécaniquement

Poursuivre est défendable lorsque le travail annoncé est réellement publié,
les pages importantes sont accessibles, les recherches observées correspondent
à l'offre et les clics ou demandes commencent à progresser dans un périmètre
comparable. Cette situation n'autorise pas automatiquement à doubler les pages
ou le budget : la prochaine preuve reste écrite.

### Renforcer une action précise

Renforcer peut signifier améliorer une page qui attire déjà les bonnes
recherches, relier une page utile depuis la navigation ou documenter une
question commerciale réellement posée. La décision s'appuie sur une URL et une
preuve ; elle ne devient pas « publier plus souvent » par réflexe.

### Corriger l'étape qui bloque

- travail non publié : corriger le projet ou le prestataire ;
- page non accessible ou non indexée : fermer le blocage avec le guide
  d'invisibilité ;
- impressions sur les mauvaises recherches : revoir la réponse et le ciblage ;
- impressions utiles mais peu de clics : examiner le titre, l'extrait, la
  position et les autres résultats ;
- clics mais pas de contacts mesurés : vérifier la page, le formulaire, les
  appels et l'attribution ;
- contacts non qualifiés : clarifier l'offre et les critères ;
- contacts qualifiés sans vente : examiner prix, suivi et cycle commercial.

### Réduire ou reporter

Réduire le nombre de pages, limiter le travail aux URL importantes ou reporter
une production en volume est raisonnable lorsque la mesure n'est pas prête,
que l'équipe ne peut pas traiter les demandes, que la saison brouille le test ou
que la requête accessible semble trop faible pour l'économie du projet.

### Arrêter une action précise

Arrêter devient défendable lorsqu'une action répétée ne produit ni travail
vérifiable ni apprentissage, vise des recherches sans rapport avec les clients,
repose sur des promesses de position, ou absorbe un budget que les données de
l'entreprise ne peuvent justifier. Le guide ne conclut pas que tout le SEO est
inutile : il nomme l'action arrêtée et conserve les actifs, accès, contenus et
données déjà payés.

## 11. Plan annoté

| Section provisoire                                            | Question résolue                                                     | Preuve ou exemple                                                                     | Conséquence ou décision                                                         | Format choisi                           |
| ------------------------------------------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | --------------------------------------- |
| Je paie du SEO : combien de temps dois-je encore attendre ?   | quelle est la réponse immédiate ?                                    | projet des 140 premiers mots et limite officielle Google                              | refuser un délai isolé et définir le résultat                                   | ouverture brève                         |
| Une page indexée n'est pas encore un résultat commercial      | que signifie « résultat » à chaque étape ?                           | travail publié puis exploration, indexation, impressions, clics, contacts et ventes   | choisir le prochain fait à vérifier sans imposer une succession rigide          | cartes mobiles                          |
| Commencez par photographier l'état initial                    | comment savoir si le travail a changé quelque chose ?                | URL, requête, filtres, période, saison, contacts et ventes                            | conserver un avant comparable                                                   | mini-fiche copiée du journal            |
| Le travail annoncé est-il réellement en ligne ?               | le délai vient-il de Google ou du projet ?                           | date, URL, modification, responsable et preuve visible                                | ne pas payer une attente fictivement attribuée au moteur                        | dialogue dirigeant/prestataire          |
| Attendez l'événement suivant, pas un mois magique             | à quel moment ouvrir la prochaine décision ?                         | exploration, indexation, impressions, clics, contacts et cycle commercial             | choisir une date justifiée sans calendrier universel                            | frise conditionnelle, cartes sur mobile |
| Qu'est-ce qui change le calendrier de votre entreprise ?      | pourquoi deux sites ne progressent-ils pas au même rythme ?          | états site neuf/existant/migration, demande, concurrence observée, saison et cycle    | adapter la preuve sans inventer un délai                                        | situations comparées                    |
| Exemple fictif : plus de clics, mais toujours deux ventes     | comment lire une progression sans attribuer la cause ?               | calcul 5 000/8 000 impressions, 150/280 clics, contrôle non modifié et petits volumes | poursuivre certaines pages, corriger la qualification, attendre la fin du cycle | tableau calculable + commentaire        |
| Remplissez votre journal de décision SEO                      | que transmettre à l'équipe ou au prestataire ?                       | artefact complet et exemple de fenêtre de 90 jours adaptable                          | obtenir un état reproductible sans compte ni e-mail                             | blocs copiables et imprimables          |
| Faut-il poursuivre, renforcer, corriger, réduire ou arrêter ? | quelle décision correspond à la preuve observée ?                    | cinq issues et branche par étape                                                      | financer la prochaine preuve utile, pas la patience                             | cartes de décision                      |
| Quand un accompagnement extérieur devient-il utile ?          | le lecteur peut-il agir seul ou doit-il faire relire le dispositif ? | bons/mauvais fits, accès, mesure et cycle                                             | corriger seul, faire auditer le suivi ou cadrer la suite                        | encadré sobre avant CTA                 |
| Sources, limites et questions restantes                       | que Google et les données ne permettent-ils pas de promettre ?       | sources officielles adjacentes et FAQ directe                                         | conserver une conclusion sans date de classement                                | liste courte + FAQ                      |

### FAQ résiduelle pressentie

1. **Le SEO prend-il toujours trois à six mois ?** Non. Cette fourchette
   courante ne décrit ni votre site, ni votre recherche, ni le résultat attendu ;
   Google parle d'effets allant de quelques heures à plusieurs mois, parfois
   sans effet notable.
2. **Une page indexée signifie-t-elle que le travail fonctionne ?** Non.
   L'indexation permet seulement à la page d'être éligible ; vérifiez ensuite
   les recherches, impressions, clics et demandes.
3. **À quelle fréquence faut-il regarder Search Console ?** Une lecture
   hebdomadaire peut vérifier les obstacles et les travaux ; les décisions de
   tendance exigent des périodes comparables et assez de données.
4. **Faut-il arrêter si rien ne bouge après 90 jours ?** Pas
   automatiquement. Les 90 jours organisent le journal ; il faut identifier
   l'étape bloquée, le travail livré, la demande disponible et le cycle de vente.
5. **Plus de pages indexées est-il toujours un bon signe ?** Non. Le nombre ne
   dit pas si ces pages répondent à des recherches utiles ni si elles produisent
   des demandes.
6. **Les impressions prouvent-elles que les ventes vont suivre ?** Non. Elles
   montrent des apparitions ; le clic, le contact qualifié, la vente et leur
   attribution se mesurent séparément.
7. **Une agence peut-elle s'engager sur quelque chose ?** Google indique que
   personne ne peut garantir la première position. Contractualisez plutôt les
   travaux, les accès, les livrables et les dates de compte rendu. La première
   phrase est un fait Google ; la seconde, une recommandation Hagnéré Code.

Chaque réponse publique devra commencer par oui, non ou une limite claire et
rester plus courte qu'une nouvelle section. P2 éliminera toute FAQ déjà résolue
de façon suffisante dans le corps.

## 12. Ressource, maillage et conversion

```text
Une ressource est-elle naturellement nécessaire ? oui, comme journal HTML copiable et imprimable ; aucun fichier séparé prévu en P1
Problème qu'elle résout après la lecture : remplacer « attendre encore » par un état initial, des événements, des limites et une décision partageable
Résultat autonome produit : décision économique, cinq URL, travail publié, état Google, recherches, clics, contacts, ventes, explications concurrentes et prochaine décision
Format éditable et format de consultation : blocs de texte copiables depuis la page et impression navigateur ; aucune transmission ni sauvegarde serveur
Rubriques réellement livrées : sept blocs A à G décrits au §9
Exemple rempli : exemple numérique fictif sans entreprise ni faux client
Conclusion « ne pas investir » possible : oui, si la demande, l'économie, les ressources commerciales ou les preuves ne justifient pas la suite
Sources, hypothèses et limites visibles : sources Google adjacentes, 90 jours présenté comme fenêtre de journal et non délai, exemple fictif, faibles volumes et attribution limitée
Données saisies et destination : aucun formulaire interactif nécessaire ; le lecteur copie localement la trame
Processus de génération reproductible : HTML statique de la page
Journal de QA : à ouvrir en P2/P4 pour copie, impression, mobile, liens, thèmes et lisibilité des cartes
Limites connues et niveau de revue humaine : aucune connexion à Search Console, Analytics ou CRM ; aucun test avec un dirigeant réel en P1
Mode de maintenance : revalidation des libellés Search Console et des documentations Google lors de chaque modification substantielle
Test du fichier ou outil : non applicable tant qu'aucun téléchargement ou outil interactif n'est promis
Bon fit Hagnéré Code : état initial absent ou incohérent, plusieurs intervenants, résultats cantonnés aux positions, clics sans demandes, ou budget à reconduire sans décision
Mauvais fit : baisse brutale, blocage d'indexation isolé, garantie de rang recherchée, litige contractuel ou besoin de résultat certain à très court terme
Action non commerciale : remplir le journal avec l'équipe ou le prestataire actuel et fixer la prochaine décision
CTA principal et résultat après clic : « Vérifier si mon investissement SEO avance vraiment » vers `/demarrer-un-projet` ; obtenir la liste des preuves manquantes, les cinq URL à suivre et le périmètre d'une éventuelle intervention, sans promesse de délai ou de classement
```

### Maillage prévu

Liens sortants depuis le futur guide :

- vers `pourquoi-site-pas-visible-google` si exploration ou indexation reste le
  premier blocage ;
- vers `positions-google-baissent` si une performance acquise se dégrade ;
- vers `seo-ou-google-ads` si la trésorerie exige des demandes plus rapides ou
  si le canal n'a pas encore été choisi ;
- vers `audit-seo-que-contient-il` lorsque l'état initial et les causes ne sont
  pas assez documentés ;
- vers `choisir-agence-seo` si le prestataire ne rend pas le travail et les
  preuves comparables ;
- vers `prix-referencement-naturel` pour confronter la décision au budget ;
- vers `/services/referencement-google` dans le passage commercial et le CTA
  unique.

Lien entrant prioritaire à prévoir en P2 sous l'autorité de l'éditeur unique :

1. depuis `seo-ou-google-ads`, après la décision d'investir dans le SEO, sans
   modifier son comparatif principal ;
2. en alternative depuis `prix-referencement-naturel`, dans la FAQ déjà dédiée
   au délai, si la modification ne fragilise pas son propre dossier ;
3. la collection « Référencement naturel » du hub sera alimentée par le registre
   seulement après la porte éditoriale.

### Parcours de conversion honnête

- Le lecteur obtient d'abord le journal complet sans laisser d'adresse e-mail.
- Le texte montre les cas où le prestataire actuel, l'équipe commerciale ou une
  correction ponctuelle suffit.
- Hagnéré Code est un vendeur du service SEO ; ce conflit d'intérêt est déclaré
  avant le CTA.
- Le premier échange doit produire un périmètre vérifiable : cinq URL, état
  initial, travail réellement publié, accès nécessaires et prochaine décision.
- Aucune « estimation de délai » n'est promise avant d'avoir ces informations,
  et même après elles, aucune date de classement n'est garantie.

## 13. P0 et P1 à contrôler avant la porte suivante

### P0 — blocages factuels ou décisionnels

- aucune durée d'agence, étude secondaire ou expérience non documentée utilisée
  pour répondre au délai ;
- amplitude de quelques heures à plusieurs mois attribuée exactement à Google,
  avec possibilité d'absence d'effet notable ;
- plusieurs jours, voire plusieurs semaines, limité à la nouvelle exploration, jamais
  présenté comme délai d'indexation, de rang ou de vente ;
- 90 jours toujours nommé fenêtre de tenue du journal, jamais promesse ou seuil
  d'échec ;
- exploration, indexation, impression, clic, contact et vente séparés ;
- position moyenne expliquée comme agrégat, pas rang universel ;
- mêmes propriété, filtres, URL et périodes comparables avant tout calcul ;
- données préliminaires, lignes de requêtes incomplètes et différences
  Search Console/Analytics visibles ;
- exemple fictif annoncé avant les nombres, calculs refaits et faibles volumes
  explicités ;
- aucune causalité depuis l'avant/après ou le groupe non modifié ;
- aucun contact converti en vente avant la fin du cycle commercial ;
- aucune garantie de délai, d'indexation, de position, de trafic, de contact, de
  vente ou de ROI ;
- aucune publication en volume, fréquence, âge de domaine ou nombre de liens
  présenté comme accélérateur garanti.

### P1 — manques importants à éviter

- réponse directe et définition du résultat dans les 150 premiers mots ;
- le travail annoncé et le travail réellement publié sont distingués ;
- les situations site neuf, page existante, blocage corrigé et migration ne
  reçoivent pas le même calendrier ;
- le journal reste copiable et lisible à 390 px sans colonne essentielle
  masquée ;
- chaque attente possède une preuve, un responsable, une date et un fait qui
  ferait changer la décision ;
- les contacts qualifiés et les ventes restent hors Search Console ;
- le guide accepte poursuivre, renforcer, corriger, réduire, reporter et
  arrêter une action ;
- le CTA vient après le journal, les calculs et les mauvais fits ;
- le plan ne reproduit ni la fiche d'incident, ni les six cartes du site
  invisible, ni le plan prescriptif de 90 jours du comparatif Ads ;
- les H2 publics restent compréhensibles sans « KPI », « traction »,
  « autorité », « vélocité » ou « maturité ».

## 14. Métadonnées provisoires à vérifier en P2

```text
Title envisagé : Combien de temps pour des résultats SEO ? · Hagnéré Code
H1 envisagé : Combien de temps faut-il attendre des résultats SEO ?
Description envisagée : Indexation, impressions, clics, contacts et ventes : suivez les bonnes preuves pour savoir quand poursuivre, corriger ou arrêter une action SEO.
Hero envisagé : Vous payez du référencement : comment savoir si le travail avance vraiment ?
Intention : calendrier de décision après le lancement ou la modification d'un travail SEO, pas diagnostic d'incident ni page de service
Mot-clé principal : combien de temps résultats SEO
Variantes naturelles : délai résultats SEO, combien de temps référencement naturel, quand voir résultats SEO, quand arrêter SEO
```

Ces formulations ne sont pas figées. P2 doit vérifier leur longueur, leur
cohérence avec l'ouverture, leur différence avec le guide de baisse et l'absence
de promesse implicite à 90 jours.

## 15. Rapport de sortie P1 — Recherche

```text
PASSE 1 TERMINÉE
Slug : combien-de-temps-resultats-seo
Lecteur et phrase réelle : dirigeant de TPE/PME — « Je paie du référencement depuis deux ou trois mois. On me dit d'être patient, mais comment savoir si ça avance vraiment et à quel moment je dois arrêter ? »
Décision : fixer un état initial, suivre le travail publié jusqu'aux ventes et décider à une date justifiée de poursuivre, corriger, réduire ou arrêter une action précise
Angle et forme dominante : journal de décision sur 90 jours organisé par événements observables, sans chronologie de classement universelle
Pages proches et différence : baisse = incident historique ; invisibilité = premier blocage d'une URL ; SEO/Ads = choix du canal ; audit = contenu du livrable ; agence = choix du prestataire ; prix = budget ; ici = calendrier de preuves après lancement
Sources décisives : guide de démarrage SEO, nouvelle exploration, FAQ indexation, rapport Performances et ses limites, comparaison de périodes, rapprochement Search Console/Analytics, migrations et contenu people-first
Incertitudes exclues : délai de trois à six mois, progression mensuelle, accélérateur garanti, position future, volume de recherche, seuil de contacts, attribution causale et retour sur investissement
Action autonome et CTA possible : remplir le journal pour cinq URL ; CTA tardif pour faire relire l'état initial, les preuves manquantes et la prochaine décision
Plan : réponse → définition du résultat → état initial → travail publié → événements → situations de départ → exemple calculé → journal → cinq décisions → bon/mauvais fit → limites
Snapshot : docs/research/manifests/combien-de-temps-resultats-seo-p1.sha256
```

### Porte de sortie P1

- [x] documents obligatoires, roadmap, modèle et guides SEO voisins lus ;
- [x] brief complet, lecteur précis et décision unique ;
- [x] URL distincte justifiée contre les guides voisins et futurs ;
- [x] observation web actuelle et datée, sans volume ni position revendiquée ;
- [x] carte concurrentielle constituée sans utiliser les agences comme preuve
      d'un délai ;
- [x] sources officielles Google ouvertes et reliées aux affirmations ;
- [x] faits, limites, déductions et recommandations Hagnéré Code séparés ;
- [x] aucune contradiction décisive masquée ;
- [x] exemple fictif reproductible, avec saisonnalité, faible volume,
      attribution et causalité explicitement bornés ;
- [x] journal de décision copiable et critère d'acceptation définis ;
- [x] poursuivre, renforcer, corriger, réduire, reporter et arrêter traités ;
- [x] bon fit, mauvais fit, maillage et CTA conditionnel définis ;
- [x] plan annoté distinct des voisins ;
- [x] P2, P3 et P4 laissées bloquées ;
- [x] manifeste P1 consigné.

**Verdict P1 : porte validée.** P2 peut commencer sur ce snapshot, avec un seul
éditeur. Une nouvelle durée de référence, un changement d'intention, une
promesse de résultat à 90 jours ou une modification substantielle du journal
impose une nouvelle P1 et un nouveau manifeste.

### Revalidation contradictoire de P1 — 22 juillet 2026

Un second agent, distinct de la recherche initiale et resté en lecture seule,
a rouvert les sources officielles et refait les calculs avant P2.

- aucun P0 ;
- l'amplitude Google de quelques heures à plusieurs mois, parfois sans effet
  notable, est exacte et ne devient pas une promesse ;
- le délai de réexploration reprend désormais les mots officiels « plusieurs
  jours, voire plusieurs semaines » ;
- la documentation sur les fortes baisses est réservée au guide voisin et ne
  sert plus de seconde chronologie générale ;
- les six calculs de variation, les deux contrôles inverses et les ratios
  indicatifs rapprochant Search Console et les données commerciales sont
  exacts ;
- l'exemple demande désormais de compter les dossiers encore ouverts avant
  d'attendre leur issue ;
- la FAQ sépare le fait Google — personne ne peut garantir la première position
  — de la recommandation Hagnéré Code sur les engagements contractuels ;
- travail publié, exploration, indexation, impressions, clics, contacts et
  ventes restent sept repères distincts ; ils peuvent se chevaucher, reculer ou
  rester non mesurables, sans causalité inventée ;
- si aucun état initial n'existe, le journal repart de la plus ancienne période
  comparable et conserve explicitement une attribution incertaine ;
- le prévol P2 a corrigé le décompte de l'ouverture à 140 mots et la mention
  erronée de six étapes avant régénération du manifeste P1.

La rédaction publique devra encore prouver la clarté de la plume, le rendu et
l'utilité du journal pour un dirigeant. Aucun test avec un lecteur réel n'est
revendiqué.

## 16. Passes suivantes — réservées

### Rapport P2 — Rédaction et intégration

```text
PASSE 2 TERMINÉE
État : TERMINÉE — PORTE VALIDÉE, P3 indépendante requise
Fichiers créés ou modifiés : page, image sociale, registre, icône du hub, garde-fou de langage humain, lien entrant depuis seo-ou-google-ads et présent dossier
Ouverture et réponse : 140 mots ; la facture, la patience demandée, l'absence de délai universel, les sept repères et les quatre décisions apparaissent avant toute méthode
Forme propre au sujet : sept repères indépendants puis journal de décision en sept cartes copiables ; les 90 jours sont une fenêtre choisie et non un calendrier Google
Exemples ou calculs : exemple fictif 5 000→8 000 impressions, 150→280 clics, 3,0→3,5 %, 8→12 contacts et 2→2 ventes ; contrôles inverses, ratio contact/clic et groupe non modifié refaits sans causalité
Sources visibles : sources Google adjacentes pour amplitude des effets, exploration, comparaisons, données préliminaires, lignes de requêtes, Search Console/Analytics, migration et absence de garantie de première position
Action autonome, bon fit et mauvais fit : journal utilisable sans compte ni e-mail ; état initial absent accepté comme incertain ; branches distinctes vers incident de baisse, page invisible, urgence commerciale et litige
CTA et destination : un seul GuideInlineCTA tardif « Vérifier si mon investissement SEO avance vraiment » vers /demarrer-un-projet ; sidebar commerciale désactivée et conflit d'intérêt déclaré
Contrôles rapides : manifeste P1 exact ; Prettier vert ; ESLint ciblé vert ; TypeScript vert ; 21/21 tests de langage humain verts ; route et OG locales en 200 ; OG 1 200 × 630 inspectée ; 9 destinations internes en 200 ; un lien entrant rendu ; canonical exact ; noindex,nofollow ; Article + BreadcrumbList uniquement ; git diff --check vert
Snapshot : docs/research/manifests/combien-de-temps-resultats-seo-p2.sha256
```

#### Correctif P2 après le premier contre-audit rejeté

Le premier relecteur indépendant a refusé d'ouvrir la porte P3 avec **un P0 et
quatre P1**. Aucun de ces défauts n'a été reporté à la passe suivante :

- le cas chiffré dit désormais explicitement qu'il ne décrit ni un client réel
  ni un cas client Hagnéré Code ; le garde-fou automatique des scénarios
  fictifs repasse au vert ;
- l'image sociale montre les sept repères distincts, dont l'exploration, sans
  flèches ni succession causale ;
- l'étape « Ventes » ne compte plus un refus comme une vente ; refus et dossiers
  ouverts restent suivis séparément ;
- la méta-description retrouve une phrase humaine avec ses articles ;
- le calcul du taux clic-vers-contact distingue la valeur non arrondie de son
  arrondi à −1,05 point.

Trois suggestions utiles ont aussi été retenues sans alourdir le guide : le
journal demande ses dates de début et de fin ainsi que la décision précise à
prendre à l'issue de la fenêtre ; les écarts de totaux Search Console rappellent
le rôle des filtres et du périmètre ; l'absence de garantie de première position
est reliée directement à la source Google dans le corps de l'article.

Après correction, Prettier, ESLint ciblé, TypeScript, `git diff --check` et les
31 tests ciblés `guides` + `guide-human-language` sont verts. Le manifeste P2
est régénéré sur ce nouvel état. Le relecteur doit recommencer sa validation en
lecture seule ; le rejet initial ne vaut pas porte P3.

### Rapport P3 — Contre-audit indépendant

```text
PASSE 3 TERMINÉE — PORTE VALIDÉE
Relecteur indépendant : agent distinct de la recherche et de la rédaction, resté en lecture seule.
Snapshot audité : manifeste P2 régénéré puis vérifié 7/7 avant et après la lecture.
Affirmations et sources revérifiées : délais d'effet, réexploration, indexation, Search Console/Analytics, migration et absence de garantie ; sources Google officielles rouvertes.
Calculs refaits : +60 %, +86,6667 %, +0,5 point, +50 %, 0 vente, 5,3333 % vers 4,2857 %, −1,047619 point et groupe de contrôle à +40 %.
Premier verdict : rejet avec 1 P0 et 4 P1 ; aucune porte P3 ni manifeste P3 créés sur cet état.
P0 trouvé / corrigé : dénégation d'exemple fictif insuffisante / cas client réel désormais explicitement exclu et garde-fou automatique vert.
P1 trouvés / corrigés : OG à six étapes causales / sept repères neutres ; refus compté comme vente / ventes gagnées séparées ; méta télégraphique / phrase humaine ; arrondi inversé / valeur brute puis arrondie.
Suggestions acceptées : dates et décision de fin de fenêtre ; rôle des filtres et du périmètre ; source Google adjacente à l'absence de garantie de première position.
Suggestions rejetées : aucune.
Revalidation du relecteur : 0 P0 et 0 P1 ; OG réelle 1200 × 630 inspectée et non causale ; aucune régression éditoriale, mathématique, technique ou visuelle.
Contrôles intermédiaires : 35/35 tests ciblés, page et OG 200, canonical exact, Article + BreadcrumbList, noindex,nofollow attendu, liens internes 200.
Snapshot : docs/research/manifests/combien-de-temps-resultats-seo-p3.sha256
```

Le premier état P2 n'a pas été artificiellement validé. Le relecteur a bloqué
la passe parce que le garde-fou des exemples fictifs échouait et que l'image
sociale racontait une suite causale contraire au texte. Il a aussi relevé une
définition incorrecte de la vente, une méta-description peu naturelle et un
libellé d'arrondi inversé. Les cinq défauts ont été corrigés avant de régénérer
le manifeste P2.

La seconde lecture, toujours indépendante et sans écriture, confirme que les
sept repères sont distincts, que les refus ne deviennent pas des ventes, que
l'exemple n'est relié à aucun cas client et que les calculs sont exacts. Elle
confirme aussi les trois améliorations opératoires du journal et de la lecture
Search Console.

**Verdict P3 : porte validée à 0 P0 et 0 P1.** Le contrôle visuel complet, les
six largeurs, les thèmes, les interactions, la scorecard P4 et le snapshot final
restent séparés.

### Rapport P4 — Plume humaine et contrôle final

```text
PASSE 4 TERMINÉE — PORTE VALIDÉE
Passages humanisés : l'ouverture part de la facture et de la patience demandée ; les sept repères répondent chacun à une question de dirigeant ; le journal se termine par une décision datée plutôt que par un délai magique.
Coupe ou resserrement : aucune nouvelle méthode ajoutée après P3 ; l'image sociale a été ramenée à sept repères neutres et le CTA reste unique, précis et tardif.
Retour P3 effectué : le P0 et les quatre P1 du premier audit sont corrigés ; dernière revalidation indépendante à 0 P0 / 0 P1.
Diff sémantique après la plume : aucune promesse ajoutée ; vente, refus et dossier ouvert restent séparés ; le calcul brut précède son arrondi ; les filtres Search Console et l'incertitude d'attribution restent visibles.
Scorecard justifiée : 19/20 ; le seul point manquant est un test conduit avec un dirigeant réel.
Validation humaine réelle : non réalisée
Autorisation éditoriale : publication différée jusqu'au gel commun des dix guides ; editorialStatus conservé.
Commandes et résultats : manifestes P2 et P3 7/7 ; Prettier ; 31/31 tests ciblés ; ESLint ciblé ; TypeScript ; git diff --check.
Largeurs et états contrôlés : 320, 390, 640, 768, 1024 et 1440 px sans débordement du document ; sombre à 390 px et clair à 1440 px inspectés ; journal lisible sur mobile et bureau.
Interactions : ancre d'ouverture activée par clic réel avec arrivée au bon titre ; deuxième FAQ ouverte par clic réel et réponse visible ; première FAQ ouverte par défaut.
Structure : un H1, dix H2 d'article et dix ancres valides ; cinq FAQ visibles ; un seul CTA propre au guide, placé après 96 % de l'article ; aucun CTA latéral.
Route, image sociale et console : route et OG en 200 ; PNG 1200 × 630 inspecté ; canonical exact ; robots noindex,nofollow attendu avant publication ; Article + BreadcrumbList uniquement ; console sans erreur.
Liens : trente-six destinations internes uniques du document complet répondent en 200.
React : composant serveur, aucune cascade de requêtes, aucune dépendance client ajoutée, aucune clé instable ; checklist React/Next sans écart matériel.
Snapshot final : docs/research/manifests/combien-de-temps-resultats-seo-p4.sha256
Statut maximal : prêt pour validation éditoriale groupée, non publié, non indexable.
Verdict : P4 validée à 19/20 ; absence assumée de test par un dirigeant réel.
```

#### Score P4 — 19/20

| Axe         |      Note | Preuve finale                                                                                            |
| ----------- | --------: | -------------------------------------------------------------------------------------------------------- |
| Intention   |         2 | La facture, l'attente et la question commerciale sont comprises avant toute méthode                      |
| Décision    |         2 | Poursuivre, corriger, réduire ou arrêter portent sur une action nommée et une date choisie               |
| Pédagogie   |         2 | Publication, exploration, indexation, impressions, clics, contacts et ventes restent distincts           |
| Profondeur  |         2 | État initial, saison, cycle de vente, pages témoins, filtres et attribution incertaine sont reliés       |
| Preuve      |         2 | Sources Google officielles rouvertes, limites visibles et cas fictif explicitement délimité              |
| Comparaison |         2 | Valeurs initiales/finales, contrôles inverses et groupe non modifié empêchent une lecture causale rapide |
| Originalité |         2 | Journal en sept cartes, fenêtre choisie et décision de fin composent un outil autonome propre au sujet   |
| Style       |         1 | Plume et rendu relus ; aucun test par un dirigeant réel                                                  |
| Conversion  |         2 | Le lecteur peut agir seul avant un CTA unique, tardif, précis et sans garantie                           |
| SEO/produit |         2 | Métadonnées, maillage, image, interactions, données structurées et six largeurs contrôlés                |
| **Total**   | **19/20** | Guide prêt pour le gel commun, encore volontairement hors index avant la décision groupée                |

**Verdict P4 : porte validée.** Le guide reste en
`editorialStatus: "ready-for-human-review"` jusqu'à l'autorisation de
publication commune du lot. Ce statut maintient la route accessible en
`noindex,nofollow` et ne simule ni un test utilisateur réel ni une indexation
Google.

## 17. Revue finale — ouverte, publication différée

La scorecard, le rendu aux largeurs requises, les métadonnées, les données
structurées, les liens, l'image sociale et les interactions ont été contrôlés
localement. Aucun test avec un dirigeant réel n'a été réalisé. Le statut maximal
de ce dossier est donc : **P4 validée, prête pour validation éditoriale groupée,
non publiée et non indexable avant le gel commun**.

## Décision de gel commun — 22 juillet 2026

Les mentions précédentes de publication différée décrivent l’état de contrôle
avant le gel atomique des dix guides.

Statut éditorial final : **publiable — validation éditoriale déléguée**.

Décision de publication : autorisée explicitement par le commanditaire.

Test réalisé par une personne réelle : non.

Le retrait du statut d’attente ouvre la route à `index, follow` dans un build de
production. Il ne prouve ni le déploiement final ni l’indexation effective par
Google, qui doivent être vérifiés séparément.
