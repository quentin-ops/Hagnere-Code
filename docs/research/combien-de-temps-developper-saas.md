# Dossier de recherche — Combien de temps faut-il pour développer un SaaS ?

> Ce dossier prépare un guide destiné à un dirigeant ou à un porteur de projet
> qui reçoit des délais très différents pour son SaaS et ne sait pas lequel est
> crédible. Le guide ne donnera pas un nombre de mois valable pour tous les
> produits. Il aidera le lecteur à définir la ligne d'arrivée, relier les
> travaux qui en dépendent, nommer qui doit fournir quoi et calculer trois
> scénarios qu'il pourra contester ou simplifier avant de signer.

Statut actuel : **P4 terminée — prêt pour validation éditoriale groupée ; route
maintenue en `noindex,nofollow` jusqu'à la publication du lot**.

## Journal des quatre passes

Propriétaire éditorial : **agent Codex délégué en P2, agent racine en P3/P4**.

| Passe                        | État                     | Date       | Responsable                            | Snapshot                                               | Blocages        |
| ---------------------------- | ------------------------ | ---------- | -------------------------------------- | ------------------------------------------------------ | --------------- |
| 1. Recherche                 | Terminée — porte validée | 2026-07-22 | Agent de recherche P1 et synthèse      | `manifests/combien-de-temps-developper-saas-p1.sha256` | Aucun           |
| 2. Rédaction et intégration  | Terminée — porte validée | 2026-07-22 | Agent Codex P2, éditeur unique délégué | `manifests/combien-de-temps-developper-saas-p2.sha256` | Aucun           |
| 3. Contre-audit indépendant  | Terminée — porte validée | 2026-07-22 | Agent distinct, lecture seule          | `manifests/combien-de-temps-developper-saas-p3.sha256` | Aucun           |
| 4. Plume humaine et contrôle | Terminée — porte validée | 2026-07-22 | Agent racine Codex                     | `manifests/combien-de-temps-developper-saas-p4.sha256` | Aucun éditorial |

### Manifeste du snapshot

Le manifeste P1 contient uniquement le SHA-256 du présent dossier. Le hash
n'est pas recopié ici afin de ne pas créer une référence circulaire.

## 1. Fiche d'identité

| Champ                            | Décision documentaire                                                                                                                                                                                                                                          |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Slug                             | `combien-de-temps-developper-saas`                                                                                                                                                                                                                             |
| Titre SEO de travail             | Combien de temps faut-il pour développer un SaaS ?                                                                                                                                                                                                             |
| H1 de travail                    | Combien de temps faut-il pour développer votre SaaS ?                                                                                                                                                                                                          |
| Requête principale qualitative   | combien de temps développer SaaS                                                                                                                                                                                                                               |
| Variantes utiles                 | délai développement SaaS ; durée création SaaS ; combien de temps pour développer un MVP SaaS ; planning développement SaaS ; calendrier prototype MVP production ; estimer délai application SaaS                                                             |
| Moment du parcours               | Comparer puis décider : le besoin existe et des dates circulent, mais prototype, pilote et mise en production sont confondus ; le lecteur doit challenger un calendrier, choisir une première ligne d'arrivée ou réduire le périmètre                          |
| Lecteur précis                   | Dirigeant de TPE/PME, indépendant ou porteur d'un SaaS B2B non technicien ; il connaît le problème métier et parfois une date commerciale, mais pas nécessairement les dépendances techniques, la recette ou les conditions d'exploitation                     |
| Situation déclenchante           | Un prestataire annonce quelques semaines, un autre plusieurs mois ; une échéance client, un salon ou une saison approche ; le lecteur ne sait pas si les deux chiffrent le même résultat                                                                       |
| Phrase qu'il dirait au téléphone | « J'ai une date en tête et deux estimations qui n'ont rien à voir. Je veux savoir ce qui peut vraiment être prêt, ce que je dois fournir et ce qu'il faut retirer si le calendrier ne tient pas. »                                                             |
| Décision principale              | Construire ou challenger un calendrier propre au projet en définissant la ligne d'arrivée, les résultats à produire, leurs dépendances, leur responsable, trois scénarios et la règle de révision ; puis réduire, tester, décaler ou poursuivre                |
| Niveau de connaissance initial   | Le lecteur comprend son offre et ses utilisateurs ; il peut ne pas distinguer prototype, preuve technique, MVP, pilote et production, ni savoir pourquoi deux tâches parallèles ne s'additionnent pas et pourquoi une attente externe peut fixer la date       |
| Action autonome                  | Remplir la fiche « calendrier avant devis », tracer les dépendances, refaire le calcul dans les trois scénarios et identifier la première incertitude à tester                                                                                                 |
| CTA possible                     | « Faire vérifier le calendrier de mon SaaS » vers `/demarrer-un-projet`, après le calcul autonome ; l'échange doit pouvoir recommander un périmètre plus petit, un pilote, un outil existant, une phase de preuve ou le report du projet                       |
| Bon fit Hagnéré Code             | Problème et premier public identifiés ; parcours principal descriptible ; décideur disponible ; dépendances et contraintes accessibles ; besoin d'un SaaS propre ou d'une première version exploitable                                                         |
| Mauvais fit                      | Problème non validé ; aucun utilisateur testeur ni décideur ; date fixe sans périmètre négociable ; attente d'une durée garantie avant accès aux données, interfaces et règles ; produit existant suffisant ; besoin principal de conseil juridique spécialisé |
| Hors périmètre                   | Estimation budgétaire et TCO ; contenu détaillé d'un MVP ; choix prototype/POC/MVP ; cahier des charges complet ; choix d'agence ; roadmap produit après lancement ; promesse de durée moyenne ; plan de lancement marketing                                   |
| Date et mode de recherche        | 22 juillet 2026 ; SERP francophone qualitative et pages originales ; sources GAO, GOV.UK, CNIL, NIST et Stripe ; inventaire du dépôt ; aucune donnée Search Console, Keyword Planner ou historique de projets Hagnéré Code attribuable à cette URL             |
| Responsable de la synthèse       | Agent de recherche P1, sous contrôle de l'agent racine                                                                                                                                                                                                         |

### La réponse en une phrase

**Un SaaS n'a pas de durée universelle. Une date devient défendable lorsqu'elle
précise ce qui sera utilisable, relie tous les travaux et attentes nécessaires
et nomme qui fournit chaque décision ou accès. Trois jeux d'hypothèses simples
permettent ensuite de voir ce qui pourrait déplacer cette date, sans leur
attribuer une probabilité.**

### Questions indispensables

1. La date annoncée concerne-t-elle une démonstration, une preuve technique,
   une première version testée par quelques clients ou un service exploitable ?
2. Qui utilisera réellement cette version et quelle action complète devra-t-il
   pouvoir accomplir ?
3. Quels résultats doivent exister avant les suivants : écrans validés, accès,
   données, règles métier, comptes, parcours principal, connexion externe,
   recette, mise en ligne et support ?
4. Quelles tâches peuvent avancer ensemble et laquelle attend la fin des
   autres ?
5. Qui est responsable de chaque fourniture ou décision : entreprise,
   prestataire ou tiers ?
6. Qu'est-ce qui reste inconnu aujourd'hui et quel essai court peut réduire
   cette incertitude avant de construire le reste ?
7. Quels cas doivent être acceptés avant le pilote ou la production, par qui
   et avec quel délai de réponse ?
8. La version traite-t-elle des données personnelles, des paiements, des
   droits d'accès ou une interface externe qui ajoutent des travaux propres ?
9. Que retire-t-on, simplifie-t-on ou traite-t-on manuellement si la date
   commerciale ne bouge pas ?
10. À quel événement le calendrier est-il recalculé et qui décide lorsqu'une
    hypothèse cesse d'être vraie ?

### Objections et craintes

- « Le concurrent dit qu'un MVP se fait en six semaines. Pourquoi pas le
  mien ? »
- « Je dois présenter quelque chose à un client, mais je ne veux pas vendre une
  fausse date. »
- « Le prestataire me donne un délai de développement ; je ne vois pas le temps
  que mon équipe doit consacrer aux décisions et aux tests. »
- « Nous dépendons d'un logiciel tiers et personne ne sait quand nous aurons
  les accès. »
- « Je crains qu'on appelle “MVP” une démo impossible à exploiter. »
- « Ajouter des développeurs devrait bien accélérer le projet. »
- « L'IA ou le no-code ne divisent-ils pas forcément le délai ? »
- « Je veux lancer vite sans découvrir la sécurité, les paiements et le support
  la veille de la mise en ligne. »

### Score de lancement issu du lot

Cette note interne priorise le sujet. Elle ne prédit ni trafic, ni position
Google, ni conversion.

| Critère                          |       Note | Justification                                                                                                                   |
| -------------------------------- | ---------: | ------------------------------------------------------------------------------------------------------------------------------- |
| Adéquation avec une offre vendue |      25/25 | Le calendrier précède naturellement un projet SaaS et permet aussi de déconseiller un développement immédiat                    |
| Proximité d'une demande de devis |      24/25 | La personne compare déjà des délais ou prépare une échéance ; la ligne d'arrivée reste à préciser                               |
| Preuve qualitative de demande    |      12/15 | SERP active avec formulations exactes et plusieurs pages commerciales ; aucun volume propre au site n'est disponible            |
| Preuve ou outil original         |      15/15 | Fiche copiable, réseau de dépendances, trois scénarios et exemple recalculable produisent une décision vérifiable               |
| Différenciation                  |       9/10 | L'angle « même ligne d'arrivée + chemin déterminant + responsabilités » se distingue des calendriers génériques                 |
| Maillage et CTA utile            |       8/10 | Entrée naturelle depuis le coût et le cahier des charges ; CTA de vérification contextualisé                                    |
| **Total**                        | **93/100** | Sujet retenu, sous réserve de ne jamais transformer l'exemple fictif ou les fourchettes concurrentes en durée moyenne d'un SaaS |

## 1 bis. Contrat de langage humain

### Réponse attendue en une phrase

Avant de croire une date, demandez ce qui sera réellement utilisable ce jour-là,
ce qui doit arriver avant, qui doit le fournir et quelle date ressort si
l'accès ou la validation la plus incertaine prend plus longtemps que prévu.

### Termes centraux expliqués sans jargon

La **ligne d'arrivée** est le résultat précis promis à la date annoncée : une
maquette cliquable, un obstacle technique vérifié, un essai avec quelques
clients ou un service ouvert et pris en charge. Deux délais ne sont comparables
que s'ils visent la même ligne d'arrivée.

Une **dépendance** est quelque chose qui doit être reçu ou terminé avant qu'un
autre travail puisse commencer. Par exemple, la connexion à un logiciel tiers
ne peut pas être testée avant d'obtenir un accès d'essai et des données
représentatives.

Le **chemin déterminant** est la suite de travaux qui fixe la date de fin. Une
tâche parallèle qui se termine plus tôt ne rallonge pas ce chemin. Ce terme
traduit ici la notion de chemin critique ; le guide peut employer le terme
technique une fois entre parenthèses, puis rester en français ordinaire.

### Mots ordinaires à privilégier

| Famille        | Formulations à conserver                                                                                     |
| -------------- | ------------------------------------------------------------------------------------------------------------ |
| Départ         | date annoncée ; résultat attendu ; premier client ; démonstration ; service ouvert                           |
| Travail        | résultat à produire ; décision à prendre ; accès à obtenir ; test à réussir ; correction à accepter          |
| Enchaînement   | attend ; peut avancer en même temps ; commence après ; bloque la suite ; fixe la date                        |
| Responsabilité | qui fournit ; qui décide ; délai de réponse ; prestataire ; équipe cliente ; éditeur tiers                   |
| Incertitude    | hypothèse ; accès non testé ; règle encore discutée ; scénario court, central ou prudent ; date à recalculer |
| Arbitrage      | retirer ; simplifier ; traiter manuellement pendant le pilote ; tester d'abord ; déplacer la date ; reporter |
| Fin            | recette acceptée ; mise en ligne ; surveillance ; reprise ; support ; retour en arrière                      |

### Mots techniques à traduire ou à retarder

- `critical path` : chemin déterminant, c'est-à-dire la suite qui fixe la date
  de fin ;
- `work breakdown structure` ou `WBS` : liste des résultats et travaux à
  produire ; ne pas afficher le sigle ;
- `buffer`, `contingency`, `float`, `Monte Carlo`, `P50`, `P80` : ne pas les
  employer dans le corps ; le guide propose trois scénarios simples sans
  prétendre calculer une probabilité ;
- `backlog`, `sprint`, `velocity`, `story points`, `burndown`, `roadmap` : ne
  sont pas nécessaires pour répondre au dirigeant ;
- `staging` ou `pre-production` : environnement séparé qui permet de vérifier
  le service avant de l'ouvrir aux clients ;
- `go-live` : mise en production ;
- `rollback` : moyen préparé pour revenir à la version précédente ou couper une
  fonction si la mise en ligne échoue ;
- `multi-tenant`, `CI/CD`, `DevSecOps`, `webhook`, `observability` : hors
  vocabulaire visible, sauf explication conditionnelle imposée par un exemple.

### Projet des 150 premiers mots

> Vous avez une date en tête. Un prestataire vous annonce huit semaines, un
> autre plusieurs mois. Lequel croire ? Impossible de les comparer tant qu'ils
> ne promettent pas la même chose : une démonstration cliquable, un essai avec
> trois clients et un service ouvert aux clients visés ne demandent pas le même
> travail.
>
> Un SaaS — un logiciel accessible en ligne et proposé comme un service — n'a
> donc pas de durée universelle. Pour obtenir un calendrier crédible, définissez
> d'abord ce qui devra réellement fonctionner à la date annoncée. Découpez
> ensuite les résultats à produire, reliez ceux qui s'attendent, nommez la
> personne qui doit fournir chaque décision ou accès et calculez un scénario
> court, un scénario central et un scénario prudent.
>
> Ce guide vous montre comment refaire ce calcul avec votre projet. Vous saurez
> quelle tâche fixe réellement la date et pourrez choisir : tester une
> incertitude, réduire la première version, organiser un pilote, déplacer le
> lancement ou reporter le développement.

**Ce que le lecteur saura décider après cette ouverture :** il comprendra que
la première question n'est pas « combien de mois ? », mais « qu'est-ce qui doit
être utilisable, par qui, et sous quelles conditions à cette date ? ».

### Test de l'ouverture

- [x] la situation du dirigeant apparaît dans la première phrase ;
- [x] la question reçoit une réponse nette sans faux nombre ;
- [x] SaaS est défini en une incise courte ;
- [x] prototype, pilote et production sont rendus différents par l'usage, pas
      par une durée inventée ;
- [x] client, prestataire et tiers existent avant toute méthode abstraite ;
- [x] réduire, tester, décaler et reporter restent des conclusions possibles ;
- [x] aucun prix, taux, moyenne de marché ou garantie n'est publié ;
- [x] l'ouverture ne remplace aucun des quatre guides voisins.

### Test sujet, action, résultat préparé pour P4

| Formulation abstraite à bannir | Qui agit ?                     | Action concrète                                                                           | Résultat attendu                                            | Formulation humaine prévue                                                                                                            |
| ------------------------------ | ------------------------------ | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Cadrer le scope                | Le dirigeant et le prestataire | Écrivent ce qui sera utilisable, par qui, et ce qui ne le sera pas                        | Les délais comparent la même ligne d'arrivée                | « Écrivez ce qu'un premier client pourra terminer le jour annoncé, puis ce qu'il ne pourra pas encore faire. »                        |
| Cartographier les dépendances  | La personne qui tient le plan  | Relie chaque résultat à ce qu'il attend                                                   | Une attente externe ou une décision client devient visible  | « Pour chaque travail, notez ce qui doit être reçu ou terminé avant de le commencer. »                                                |
| Identifier le chemin critique  | Le dirigeant ou le prestataire | Additionne chaque suite dépendante et retient la plus longue                              | La tâche qui fixe la date est identifiable                  | « Additionnez les travaux qui s'attendent ; la suite la plus longue donne la date, pas la somme de tout ce qui avance en parallèle. » |
| Mitiger le risque              | Le propriétaire de l'inconnu   | Teste tôt un accès, un jeu de données, une règle ou une intégration                       | L'incertitude se réduit avant d'engager le reste            | « Essayez d'abord ce qui pourrait bloquer le projet, même si ce n'est pas l'écran le plus visible. »                                  |
| Prévoir le go-live             | Les deux parties               | Planifient recette, correction, mise en ligne, surveillance, support et retour en arrière | Le code terminé n'est pas confondu avec le service exploité | « Gardez du travail après le dernier écran : quelqu'un doit accepter, ouvrir, surveiller et pouvoir revenir en arrière. »             |

## 2. Frontières et anti-cannibalisation

### Risque principal

Le risque de recouvrement est élevé parce que plusieurs pages parlent déjà du
SaaS avant sa construction. La nouvelle URL ne doit posséder qu'une intention :
**transformer une ligne d'arrivée et des dépendances propres au projet en un
calendrier à trois scénarios que le dirigeant peut vérifier**.

| Page existante ou prévue             | Intention détenue                                                                                  | Différence obligatoire du nouveau guide                                                                                                 | Lien ou arbitrage nécessaire                                                                                        |
| ------------------------------------ | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `mvp-prototype-ou-poc`               | Choisir le bon format d'apprentissage selon l'inconnu : prototype, preuve technique, pilote ou MVP | Résumer les lignes d'arrivée en quelques phrases seulement ; renvoyer vers cette page pour choisir le format                            | Sortie précoce si le lecteur ne sait pas encore ce qu'il veut prouver                                               |
| `mvp-saas-quoi-inclure`              | Décider ce que la première version client doit contenir et tester                                  | Traiter comptes, données, support, administration, paiement et sécurité comme des lots éventuels du planning, sans refaire leur contenu | Sortie depuis la définition du résultat attendu                                                                     |
| `combien-coute-un-saas`              | Comprendre budget, coût total et arbitrages économiques                                            | Aucun prix, TCO ou fourchette de durée générale ; calculer uniquement un calendrier depuis des hypothèses visibles                      | Entrant prioritaire depuis sa partie « calendrier réaliste » ; sortie si la décision porte finalement sur le budget |
| `cahier-des-charges-saas`            | Décrire le besoin, le cycle client, les responsabilités et les critères d'acceptation              | Utiliser ces éléments comme entrées du calendrier ; ne pas réécrire le cahier des charges                                               | Entrant et sortie contextuels                                                                                       |
| `agence-saas-ou-freelance`           | Choisir une organisation de réalisation                                                            | Aucun comparatif de prestataires ; la disponibilité et les responsabilités deviennent seulement des hypothèses du plan                  | Sortie éventuelle après le calcul                                                                                   |
| `/services/saas-applications-metier` | Présenter l'accompagnement commercial Hagnéré Code                                                 | Le guide reste autonome, ne reprend ni tarifs ni promesses de délai et peut conclure à un report                                        | Présentation de l'offre, puis CTA unique vers `/demarrer-un-projet`                                                 |
| futur ou attendu `lancer-saas-2026`  | Intention supposée de lancement global                                                             | La route n'existe pas dans l'inventaire local au 22 juillet 2026 ; ne créer ni lien mort ni affirmation publique                        | Rechercher à nouveau avant P2 ; l'intention est aujourd'hui répartie entre validation, MVP et service               |

### Constat à transmettre sur les durées déjà présentes

La page locale `combien-coute-un-saas` contient, au 22 juillet 2026, des
fourchettes éditoriales générales pour un prototype, une première version
exploitable et une version commerciale. Le nouveau guide ne doit ni les copier,
ni les présenter comme des références, ni tenter de les « confirmer » par des
pages d'agences. Son apport consiste précisément à montrer pourquoi une
fourchette large ne planifie pas **ce** projet. Une harmonisation éventuelle de
la page coût relève de P2 et de l'éditeur unique ; P1 ne la modifie pas.

### Frontière de réponse à conserver pendant P2

- définir en moins d'une section prototype, preuve technique, MVP, pilote et
  production, puis renvoyer vers les guides propriétaires ;
- ne pas dresser la liste complète des fonctions d'un MVP ;
- ne pas refaire le cahier des charges, l'étude de marché, la validation du
  problème, le budget ou le choix d'un prestataire ;
- ne publier aucune moyenne de marché, durée « habituelle », coefficient de
  marge ou promesse « votre SaaS en X semaines » ;
- ne pas transformer les durées fictives de l'exemple en estimation Hagnéré
  Code ;
- ne pas promettre que l'IA, le no-code ou une équipe plus nombreuse raccourcit
  mécaniquement le calendrier ;
- ne pas repousser sécurité, protection des données, paiements, recette et
  exploitation à une phase finale générique ; ces lots ne s'appliquent que si
  le produit les exige et doivent alors être reliés à leurs vraies dépendances ;
- ne pas créer de téléchargement, calculateur ou modèle externe annoncé : la
  fiche copiable doit être réellement présente dans la page ;
- ne pas créer de lien vers `lancer-saas-2026` tant que la route n'existe pas.

## 3. Demande et vocabulaire du lecteur

### Observation qualitative du 22 juillet 2026

Requêtes observées dans une SERP francophone :

- « combien de temps développer un SaaS » ;
- « délai développement SaaS » ;
- « durée développement MVP SaaS » ;
- « planning développement SaaS » ;
- « calendrier MVP SaaS » ;
- « combien de semaines pour créer un SaaS » ;
- « étapes développement SaaS de l'idée à la production » ;
- « pourquoi un projet SaaS prend du retard ».

Les résultats visibles sont surtout des pages d'agences, des calculateurs
commerciaux et des articles de prestataires. Ils répondent fréquemment par une
fourchette puis déroulent des phases. Les hypothèses de départ, la disponibilité
du client, les délais de tiers et le calcul qui relie les phases sont beaucoup
moins souvent vérifiables.

**Limites de l'observation :** aucun accès Search Console, Keyword Planner ou
outil propriétaire n'a été fourni pour cette requête. Aucune estimation de
volume, de difficulté, de coût par clic ou de conversion ne doit être inventée.
La SERP prouve seulement une intention éditoriale et commerciale active.

### Formulations que le guide doit reprendre en langage naturel

- « Qu'est-ce qui sera vraiment prêt à cette date ? »
- « Est-ce un prototype à montrer ou un logiciel que des clients pourront
  utiliser ? »
- « Qu'est-ce que mon équipe doit fournir au prestataire ? »
- « Que se passe-t-il si l'accès au logiciel tiers arrive en retard ? »
- « Peut-on avancer les écrans pendant que les données sont préparées ? »
- « Quelle partie fixe réellement la date de sortie ? »
- « Qu'est-ce qu'on retire si la date ne peut pas bouger ? »
- « Quand peut-on annoncer la date à un premier client ? »

Ces formulations sont des observations éditoriales et des questions probables,
pas des citations de clients Hagnéré Code.

## 4. Carte concurrentielle

| Page observée                                                                                                                  | Réponse et angle                                                                                      | Bon point                                                                                         | Manque décisionnel                                                                                                               | Conflit d'intérêt ou limite                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| [Techsy — Coût de développement d'un SaaS en 2026](https://techsy.io/fr/ressources/outils/calculateur-cout-developpement-saas) | Fourchettes de mois, coûts et exploitation par segment de marché                                      | La production et l'exploitation ne sont pas réduites au seul codage                               | Le lecteur ne peut pas recalculer sa date depuis ses propres résultats, dépendances et responsables                              | Agence et calculateur commercial ; nombreuses valeurs générales dont le corpus détaillé et le calcul ne sont pas auditables depuis la page |
| [Squaad — Développement produit numérique](https://www.squaad.io/services/developpement-produit)                               | Première version annoncée en semaines, cadrage puis cycles de deux semaines                           | Résultats testables, cycles courts et transfert sont visibles                                     | La disponibilité du client, les tiers, les trois scénarios et la règle de révision ne sont pas détaillés                         | Page de service qui vend la réalisation                                                                                                    |
| [HEXAIT — MVP SaaS : budget, délais et erreurs](https://www.hexait.fr/blog/mvp-saas-budget-delais-erreurs)                     | Catégories de MVP, fourchettes de semaines et calendrier type, sous hypothèse d'un cadrage déjà fait  | L'hypothèse de décisions structurantes déjà prises est explicite ; test et préproduction existent | La promesse type reste rigide ; responsabilités externes et méthode probabilisable absentes ; prix et délai sont fortement mêlés | Agence ; certains pourcentages, ajouts et délais ne sont pas rattachés à un corpus transparent                                             |
| [Madgeek — How Long Does It Take to Build a SaaS MVP?](https://madgeek.ai/resources/saas-mvp-timeline)                         | Calendrier de plusieurs semaines avec équipe senior dédiée, spécification signée et phases détaillées | Les hypothèses de départ, les intégrations, les tests et la mise en ligne sont nommés             | Les phases sont presque entièrement séquentielles ; le lecteur ne voit pas le chemin propre à son projet ni les délais client    | Agence offshore ; portée et équipe particulières, non transposables automatiquement à une TPE/PME française                                |

### Angle mort commun

Les pages observées répondent à « combien de temps ? » par une fourchette ou un
calendrier type. Elles montrent moins souvent :

1. comment vérifier que deux estimations promettent la même ligne d'arrivée ;
2. comment faire apparaître le travail et les décisions de l'entreprise
   cliente ;
3. comment relier un accès externe, une donnée ou une validation à la tâche qui
   l'attend ;
4. pourquoi deux travaux parallèles ne s'additionnent pas ;
5. comment un scénario prudent change de chemin déterminant ;
6. quand et pourquoi recalculer la date ;
7. quelle décision prendre si la date et le périmètre ne peuvent pas tenir
   ensemble.

### Valeur originale à apporter

Le guide doit donner au lecteur une **fiche de calendrier avant devis** et un
exemple complet qu'il peut recalculer. La conclusion n'est pas un nombre de
mois, mais l'une de ces décisions :

- la date est défendable sous des hypothèses écrites ;
- une incertitude doit être testée avant d'annoncer la date ;
- la première ligne d'arrivée doit être réduite ou transformée en pilote ;
- une dépendance client ou tierce doit recevoir un propriétaire et un délai ;
- la date doit être déplacée ;
- le développement doit être reporté.

## 5. Fiche de preuves

| Source primaire ou officielle                                                                                                                                   | Date / consultation                                           | Fait utilisable                                                                                                                                                                                                                                                                                                                                                                               | Usage autorisé dans le guide                                                                                                    | Limite à afficher                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [U.S. GAO — Schedule Assessment Guide](https://www.gao.gov/products/gao-16-89g) et [PDF complet](https://www.gao.gov/assets/gao-16-89g.pdf)                     | Publié le 22 décembre 2015 ; consulté le 22 juillet 2026      | Un calendrier fiable couvre toutes les activités, y compris celles du donneur d'ordre et des prestataires, les relie logiquement, documente les hypothèses de durée, détermine le chemin critique et s'actualise avec l'avancement ; une analyse de risque vise une date avec niveau de confiance et réserve                                                                                  | Fonder la méthode simplifiée : tous les travaux, dépendances, responsables, trois scénarios et recalcul                         | Guide de programmes publics et d'acquisition, pas étude de durée SaaS ; les trois scénarios sont une adaptation pédagogique Hagnéré Code, pas la méthode statistique GAO                                      |
| [GOV.UK Service Manual — Planning in agile](https://www.gov.uk/service-manual/agile-delivery/planning-agile)                                                    | Mis à jour le 31 mars 2026 ; consulté le 22 juillet 2026      | Les plans évoluent à mesure que l'équipe apprend ; le proche est planifié plus finement ; les feuilles de route doivent montrer les dépendances entre équipes, organisations et tiers et être revues régulièrement                                                                                                                                                                            | Justifier un plan visible, détaillé à court terme et recalculé lorsque l'apprentissage ou une dépendance change                 | Conseils pour services publics britanniques ; aucune durée SaaS ni obligation réglementaire pour une entreprise française                                                                                     |
| [GOV.UK Service Manual — How the beta phase works](https://www.gov.uk/service-manual/agile-delivery/how-the-beta-phase-works)                                   | Mis à jour le 19 février 2021 ; consulté le 22 juillet 2026   | Une bêta limitée se confronte à de vrais utilisateurs avec une capacité de support ; la progression couvre contraintes, tests, sécurité et déploiement sûr, pas seulement fonctions visibles                                                                                                                                                                                                  | Distinguer pilote limité et production ; rappeler que support, test et sécurité font partie de la ligne d'arrivée               | Vocabulaire et cadre de service public britannique ; ne pas importer ses durées de phase                                                                                                                      |
| [GOV.UK Service Manual — How the live phase works](https://www.gov.uk/service-manual/agile-delivery/how-the-live-phase-works)                                   | Consulté le 22 juillet 2026                                   | La phase de service en ligne comprend exploitation durable, mesure, sécurité, disponibilité, contrôle qualité et amélioration continue                                                                                                                                                                                                                                                        | Montrer que « code terminé » n'équivaut pas à « service exploitable »                                                           | Cadre public britannique, non définition universelle d'un SaaS                                                                                                                                                |
| [CNIL — Sécurité : encadrer les développements informatiques](https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques)                        | 14 mars 2024 ; consulté le 22 juillet 2026                    | Protection des données et sécurité dès la conception ; tests complets avant mise à disposition ; développement et test séparés de la production avec données fictives ou anonymisées ; si ces tests ne suffisent pas et que des données réelles sont nécessaires en préproduction, celle-ci doit être sécurisée comme la production après les autres tests ; secrets changés avant production | Relier les travaux données, droits, sécurité, tests et passage en production dès que le produit traite des données personnelles | Ne valide ni conformité globale, ni architecture, ni durée ; l'application concrète dépend du traitement et du contexte                                                                                       |
| [NIST SP 800-218 — Secure Software Development Framework v1.1](https://csrc.nist.gov/pubs/sp/800/218/final)                                                     | Version finale de février 2022 ; consultée le 22 juillet 2026 | Les pratiques de développement sécurisé s'intègrent au cycle de développement ; le cadre fournit aussi un vocabulaire utile aux acheteurs et fournisseurs ; exigences, rôles et risques doivent être documentés et suivis                                                                                                                                                                     | Soutenir la présence de décisions et responsabilités de sécurité dans le plan lorsque le risque le justifie                     | Référentiel de sécurité américain, non estimation de délai, non certification et non conseil réglementaire français ; une v1.2 existe en projet public initial depuis décembre 2025, pas comme version finale |
| [Stripe — Test your billing integration](https://docs.stripe.com/billing/testing) et [Go-live checklist](https://docs.stripe.com/get-started/checklist/go-live) | Documentation consultée le 22 juillet 2026                    | Si Stripe est choisi, abonnements et événements doivent être testés ; le passage en direct exige objets et points de réception propres au mode production, gestion des événements retardés, dupliqués ou désordonnés et sécurisation des clés                                                                                                                                                 | Donner un exemple conditionnel de lot paiement qui comprend tests et mise en production, au-delà d'un écran de carte bancaire   | Seulement pour un projet utilisant Stripe ; la documentation peut évoluer et ne donne aucune durée générique                                                                                                  |

### Notes de lecture GAO à conserver pour le rédacteur

- Bonne pratique 1 : inclure tout le travail nécessaire, y compris celui du
  donneur d'ordre et du prestataire ;
- bonne pratique 2 : relier les activités à leurs prédécesseurs et successeurs
  et éviter les contraintes de date artificielles ;
- bonne pratique 4 : documenter les hypothèses et méthodes de durée ; détailler
  davantage le proche que le lointain ;
- bonne pratique 6 : le chemin critique n'est valable que si les activités et
  dépendances sont complètes et mises à jour ;
- bonne pratique 8 : une véritable analyse de risque combine risques et
  simulation pour estimer un niveau de confiance ;
- bonne pratique 9 : mettre le calendrier à jour avec l'avancement réel et la
  logique restante.

Le guide public **ne prétendra pas réaliser une analyse Monte-Carlo**. Il
transpose ces principes à une petite fiche lisible par un dirigeant et nomme
ses trois colonnes « court », « central » et « prudent », sans probabilité.

### Déductions et recommandations à ne pas attribuer aux sources

Les points suivants sont des choix éditoriaux Hagnéré Code, même lorsqu'ils
s'appuient sur les principes précédents :

- utiliser exactement trois scénarios plutôt qu'une simulation ;
- appeler « ligne d'arrivée » le résultat promis ;
- calculer les trois chemins à la main dans l'exemple ;
- tester d'abord l'accès ou la règle qui peut changer de chemin déterminant ;
- raccourcir d'abord en retirant une capacité, en organisant un pilote ou en
  gardant une étape manuelle contrôlée ;
- demander une fenêtre de réponse au client pour chaque décision ou recette ;
- ne jamais ajouter une marge forfaitaire universelle ;
- utiliser la fiche de douze champs ci-dessous avant de comparer deux devis.

### Contradictions et données à ne pas publier

- Les concurrents donnent des fourchettes incompatibles entre elles. Elles
  partent de catégories, équipes, pays et lignes d'arrivée différentes ; elles
  ne forment pas une moyenne de marché.
- Une phase détaillée n'est pas nécessairement un calendrier relié. Sans
  prédécesseurs, propriétaires et mise à jour, sa date ne se recalcule pas.
- La date contractuelle, une estimation et une cible commerciale n'ont pas le
  même statut. P2 doit les nommer correctement.
- « Ajouter des développeurs » n'est pas une preuve d'accélération : certaines
  décisions, validations et dépendances restent séquentielles, et l'effet de
  l'équipe dépend du travail et de son organisation.
- « IA » et « no-code » peuvent réduire certains travaux dans certains
  contextes, mais ne suppriment pas automatiquement cadrage, accès, données,
  recette, sécurité, paiement, support et responsabilités.
- « Ajouter 20 % de marge » est une règle arbitraire tant que les incertitudes
  ne sont pas identifiées ; aucun pourcentage générique ne doit être publié.
- Les chiffres de l'exemple fictif ne sont ni un devis, ni une moyenne, ni un
  délai observé chez un client.

## 6. Dispositif pratique à construire dans la page

### 6.1 Commencer par une ligne d'arrivée observable

Le guide doit proposer cinq définitions brèves et renvoyer vers les pages qui
les possèdent :

| Ligne d'arrivée             | Ce qui existe à la date annoncée                                                                                                                    | Ce qu'elle ne prouve pas                                                                       |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Prototype                   | Un parcours peut être montré et discuté ; certaines interactions peuvent être simulées                                                              | Le service n'est pas nécessairement connecté, sécurisé, complet ou exploitable                 |
| Preuve de faisabilité (POC) | Un obstacle précis — connexion, calcul, donnée ou performance — a été essayé                                                                        | L'ensemble du produit et de l'expérience client ne sont pas construits                         |
| MVP                         | La version la plus légère permet d'apprendre avec de vrais utilisateurs sur un résultat défini                                                      | Le mot seul ne dit ni les fonctions, ni le nombre d'utilisateurs, ni la qualité d'exploitation |
| Pilote limité               | Un petit groupe utilise le service réel dans des conditions encadrées, avec support et éventuelles étapes manuelles                                 | Le produit n'est pas nécessairement prêt à être ouvert sans limite ni assistance renforcée     |
| Production exploitée        | Les utilisateurs visés peuvent accomplir le parcours promis ; accès, données, recette, déploiement, surveillance, support et reprise sont organisés | Le produit est « terminé pour toujours » ; les corrections, mesures et évolutions continuent   |

Le guide `mvp-prototype-ou-poc` décide quel format réduit l'inconnu. Le guide
`mvp-saas-quoi-inclure` décide le contenu de la première version. La présente
page commence lorsque la ligne d'arrivée peut être écrite.

### 6.2 Transformer « développer » en résultats contrôlables

Le lecteur ne doit pas remplir une seule ligne « développement ». Il regroupe
les travaux selon son produit, puis retire les blocs non applicables :

1. décisions sur le public, le parcours et les règles ;
2. écrans ou parcours à valider ;
3. accès, données d'exemple et interfaces externes ;
4. comptes, droits, données et parcours principal ;
5. import, connexion ou calcul à risque ;
6. paiement et abonnements, uniquement si la ligne d'arrivée l'exige ;
7. exigences de sécurité et de protection des données propres au produit ;
8. scénarios et données de recette ;
9. correction des écarts acceptés ;
10. préparation de la production, surveillance et retour en arrière ;
11. documentation et capacité de support ;
12. décision d'ouverture et premier suivi.

Chaque ligne doit produire un résultat vérifiable : « accès d'essai reçu et
connexion démontrée » est plus utile que « intégration en cours ».

### 6.3 Relier les travaux et nommer qui agit

Pour chaque résultat, écrire :

- ce qui doit être terminé ou reçu avant ;
- qui le produit ou le décide ;
- la personne qui peut débloquer l'attente ;
- une durée courte, centrale et prudente fondée sur les informations connues ;
- la preuve qui autorise le travail suivant.

Les trois responsables possibles sont au minimum : **entreprise cliente**,
**prestataire** et **tiers**. Une responsabilité partagée doit désigner les deux
actions séparément. « Client + prestataire » sans verbes précis masque souvent
une attente.

### 6.4 Calculer les trois scénarios sans additionner le travail parallèle

Pour chaque scénario :

1. partir des travaux sans prédécesseur ;
2. pour chaque travail suivant, retenir la date de fin la plus tardive parmi
   ses prédécesseurs ;
3. ajouter sa propre durée ;
4. continuer jusqu'à la ligne d'arrivée ;
5. identifier la suite qui donne la date la plus tardive ;
6. vérifier si une autre suite devient déterminante dans le scénario prudent.

Formule pédagogique :

```text
Début d'un travail = date de fin la plus tardive de ce qu'il attend
Fin d'un travail = son début + sa durée dans le scénario
Date du projet = fin de la ligne d'arrivée la plus tardive
```

Les jours ouvrés de l'exemple mesurent un enchaînement fictif. Pour une date
calendaire réelle, il faut ensuite tenir compte des jours travaillés, congés,
temps partiels, indisponibilités et dates imposées. Le guide ne convertira pas
automatiquement les jours en semaines civiles.

### 6.5 Placer l'incertitude avant le volume de travail

Le premier essai doit viser ce qui peut modifier le plan :

- obtenir l'accès d'essai et un exemple de réponse d'une interface tierce ;
- ouvrir un échantillon représentatif de données et constater ses écarts ;
- faire décider une règle métier encore contradictoire ;
- vérifier un calcul, une performance ou un droit d'accès difficile ;
- tester le cycle réel d'un abonnement si le paiement fait partie de la ligne
  d'arrivée ;
- faire relire les exigences propres aux données ou au secteur si elles peuvent
  changer l'architecture.

Une interface visible mais sûre peut avancer après. Le guide doit expliquer
qu'un essai précoce n'est pas du temps perdu : il remplace une hypothèse fragile
par une information qui permet de recalculer.

### 6.6 Planifier la recette, la mise en production et le support

Une date de production ne peut pas s'arrêter à « dernier développement
terminé ». Selon le produit, le plan doit inclure :

- scénarios et données de test préparés ;
- personne habilitée à accepter ou refuser ;
- délai de réponse et règle de correction ;
- environnement séparé de la production ;
- vérifications fonctionnelles, de sécurité et de non-régression adaptées ;
- configuration et secrets de production ;
- surveillance du service et personne alertée ;
- méthode de retour en arrière ou d'arrêt d'une fonction ;
- canal de support et responsable des premiers utilisateurs ;
- décision explicite d'ouverture.

La liste est un point de départ, pas une certification. Les exigences dépendent
du SaaS, des données, du secteur, des utilisateurs et des fournisseurs retenus.

### 6.7 Recalculer au lieu de défendre une date périmée

Le calendrier doit préciser ses événements de révision, par exemple :

- accès externe reçu et essayé ;
- écrans ou règle principale validés ;
- premier parcours complet démontré ;
- données de recette prêtes ;
- recette intermédiaire terminée ;
- incident ou changement de périmètre accepté.

À chaque événement, remplacer les hypothèses terminées par les durées réelles,
réévaluer le travail restant et vérifier le chemin déterminant. Une date cible
peut rester inchangée ; le plan, lui, ne doit pas rester faux pour protéger la
présentation initiale.

### 6.8 Raccourcir sans supprimer les preuves nécessaires

Si le scénario prudent dépasse la date commerciale, le dirigeant peut :

1. retirer un public, un rôle ou un cas secondaire de la première ligne
   d'arrivée ;
2. remplacer temporairement une connexion complexe par un import de fichier
   contrôlé ;
3. garder une étape manuelle visible pendant un pilote limité ;
4. tester l'obstacle technique avant de commander tout le produit ;
5. différer l'automatisation du paiement si les premiers contrats peuvent être
   traités autrement et si cela respecte le modèle commercial ;
6. limiter le nombre de premiers utilisateurs pour fournir un support réel ;
7. déplacer la date ou reporter le projet.

Il ne faut pas simplement retirer recette, sécurité, protection des données,
surveillance ou support alors que la ligne d'arrivée les exige. Le bon
arbitrage change ce qui est lancé, pas la signification de « prêt » en secret.

### 6.9 Fiche « calendrier avant devis » à copier

```text
1. Ligne d'arrivée exacte :
   À la date annoncée, [public] pourra [action complète] avec [conditions].

2. Ce que cette date ne promet pas encore :
   [public exclu, fonction exclue, volume exclu, étape manuelle ou limite]

3. Date cible et raison métier :
   [date ou fenêtre] parce que [client, saison, contrat, test ou décision]

4. Résultats à produire :
   [un résultat vérifiable par ligne, pas « développement »]

5. Pour chaque résultat, ce qu'il attend :
   [décision, écran, accès, donnée, autre résultat, validation]

6. Responsable et délai de réponse :
   [entreprise / prestataire / tiers] — [personne] — [fenêtre disponible]

7. Preuve de fin :
   [démonstration, fichier reçu, test réussi, validation écrite, recette]

8. Durée propre au projet :
   court [ ] — central [ ] — prudent [ ] — hypothèse [ ]

9. Plus grande incertitude et premier essai :
   [inconnu] — [test] — [responsable] — [date de décision]

10. Conditions particulières :
    données [ ] — droits [ ] — sécurité [ ] — paiement [ ] — tiers [ ]

11. Acceptation et ouverture :
    scénarios [ ] — décideur [ ] — corrections [ ] — surveillance [ ]
    retour en arrière [ ] — support [ ]

12. Règle de mise à jour et arbitrage :
    recalcul après [événements] ; si la date ne tient plus, nous [retirons,
    simplifions, pilotons, décalons ou reportons] sous la décision de [personne].
```

La fiche doit rester copiable directement depuis la page. Aucun téléchargement
ne doit être annoncé tant qu'un fichier séparé n'a pas été construit et testé.

## 7. Exemple illustratif fictif et calcul reproductible

### Étiquette et objectif

**Exemple entièrement fictif — aucun client, devis, historique Hagnéré Code ou
moyenne de marché.** Une entreprise imagine un SaaS de réservation de matériel
partagé entre plusieurs agences. La ligne d'arrivée choisie est un **pilote
limité** : deux agences peuvent se connecter, voir un stock fourni par un outil
externe, réserver un équipement et signaler un retour. Le support renforcé est
accepté ; le paiement, l'application mobile et l'ouverture publique sont hors
périmètre.

Les durées ci-dessous sont inventées pour montrer le calcul. Elles ne doivent
jamais quitter l'encadré fictif ni servir à chiffrer un autre SaaS.

### Travaux, dépendances et trois scénarios fictifs

| Code | Résultat vérifiable                                   | Responsable                                                                           | Attend    | Court | Central | Prudent |
| ---- | ----------------------------------------------------- | ------------------------------------------------------------------------------------- | --------- | ----: | ------: | ------: |
| A    | Règles du pilote et parcours principal décidés        | Prestataire : formalise ; direction cliente : tranche                                 | —         |     4 |       6 |       8 |
| B    | Écrans du parcours validés                            | Prestataire : présente ; entreprise : valide ou refuse                                | A         |     5 |       7 |      10 |
| C    | Accès d'essai et données externes reçus               | Entreprise : demande complète ; éditeur tiers : ouvre l'accès et fournit les données  | A         |     3 |       6 |      20 |
| G    | Droits, données et règles de sécurité décidés         | Prestataire : propose ; entreprise : décide et nomme les personnes autorisées         | A         |     3 |       5 |       8 |
| D    | Comptes, données et réservation fonctionnent          | Prestataire : réalise et démontre                                                     | B et G    |    10 |      15 |      22 |
| E    | Stock externe connecté et testé                       | Prestataire : connecte et teste ; éditeur tiers : répond aux anomalies de son service | C         |     5 |       8 |      18 |
| F    | Données et scénarios de recette prêts                 | Entreprise : prépare les cas ; prestataire : vérifie qu'ils permettent la recette     | A         |     4 |       7 |      12 |
| H    | Parcours complet accepté et écarts convenus corrigés  | Prestataire : corrige les écarts ; entreprise : accepte ou refuse le parcours         | D, E et F |     7 |      10 |      15 |
| P    | Production, surveillance, reprise et support préparés | Prestataire : prépare ; entreprise : nomme le responsable du support                  | D         |     4 |       6 |      10 |
| I    | Pilote ouvert aux deux agences                        | Entreprise : autorise ; prestataire : ouvre et surveille                              | H et P    |     2 |       3 |       5 |

Unité : jours ouvrés fictifs. Chaque durée porte sur le résultat lui-même,
après la fin de ce qu'il attend.

Ces trois colonnes sont trois jeux d'hypothèses à discuter. Elles ne
représentent ni une probabilité, ni une moyenne de marché, ni une garantie de
délai. Les écarts viennent ici des hypothèses fictives suivantes :

- A : disponibilité du décideur et règles contradictoires à arbitrer ;
- B : nombre de cycles de validation des écrans ;
- C : demande d'accès complète ou incomplète et délai de réponse du tiers ;
- G : droits déjà décidés ou arbitrages encore ouverts ;
- D : stabilité des règles et quantité de corrections ;
- E : comportement connu ou découvert tardivement de l'interface externe ;
- F : disponibilité de cas métier représentatifs ;
- H : nombre et gravité des écarts de recette ;
- P : accès de production, responsable du support et reprise disponibles ;
- I : créneau de décision et autorisation d'ouverture.

### Calcul court

Les principales suites sont :

```text
A → B → D → H → I = 4 + 5 + 10 + 7 + 2 = 28 jours ouvrés fictifs
A → G → D → H → I = 4 + 3 + 10 + 7 + 2 = 26 jours ouvrés fictifs
A → C → E → H → I = 4 + 3 + 5 + 7 + 2 = 21 jours ouvrés fictifs
A → F → H → I     = 4 + 4 + 7 + 2 = 17 jours ouvrés fictifs
A → B → D → P → I = 4 + 5 + 10 + 4 + 2 = 25 jours ouvrés fictifs
A → G → D → P → I = 4 + 3 + 10 + 4 + 2 = 23 jours ouvrés fictifs
```

Le scénario court se termine donc au jour fictif **28**. Le chemin déterminant
est A → B → D → H → I. Les travaux C, E, F, G et P ne sont pas ignorés : ils
peuvent avancer en parallèle et se terminent avant que H ou I ne les attende.

### Calcul central

```text
A → B → D → H → I = 6 + 7 + 15 + 10 + 3 = 41 jours ouvrés fictifs
A → G → D → H → I = 6 + 5 + 15 + 10 + 3 = 39 jours ouvrés fictifs
A → C → E → H → I = 6 + 6 + 8 + 10 + 3  = 33 jours ouvrés fictifs
A → F → H → I     = 6 + 7 + 10 + 3      = 26 jours ouvrés fictifs
A → B → D → P → I = 6 + 7 + 15 + 6 + 3 = 37 jours ouvrés fictifs
A → G → D → P → I = 6 + 5 + 15 + 6 + 3 = 35 jours ouvrés fictifs
```

Le scénario central se termine au jour fictif **41**, toujours par le parcours
principal et sa recette.

### Calcul prudent : le chemin change

```text
A → B → D → H → I = 8 + 10 + 22 + 15 + 5 = 60 jours ouvrés fictifs
A → G → D → H → I = 8 + 8 + 22 + 15 + 5  = 58 jours ouvrés fictifs
A → C → E → H → I = 8 + 20 + 18 + 15 + 5 = 66 jours ouvrés fictifs
A → F → H → I     = 8 + 12 + 15 + 5      = 40 jours ouvrés fictifs
A → B → D → P → I = 8 + 10 + 22 + 10 + 5 = 55 jours ouvrés fictifs
A → G → D → P → I = 8 + 8 + 22 + 10 + 5  = 53 jours ouvrés fictifs
```

Le scénario prudent se termine au jour fictif **66**. L'accès au stock externe
et sa connexion deviennent le chemin déterminant. La bonne première décision
n'est donc pas « accélérer tous les écrans » : il faut obtenir et essayer cet
accès tôt, ou décider si un import contrôlé suffit pendant le pilote.

### Vérification à l'envers

- scénario central : A finit au jour 6 ; B au jour 13 ; G au jour 11 ; D peut
  démarrer au jour 13 et finit au jour 28 ; C finit au jour 12 puis E au jour
  20 ; F finit au jour 13 ; H attend D et commence donc au jour 28, finit au
  jour 38 ; P finit au jour 34 ; I attend H et finit au jour 41 ;
- scénario prudent : A finit au jour 8 ; C finit au jour 28 puis E au jour 46 ;
  B finit au jour 18 et G au jour 16, donc D finit au jour 40 ; F finit au jour
  20 ; H attend E et finit au jour 61 ; P finit au jour 50 ; I finit au jour 66.

Ces vérifications confirment que H démarre après son prédécesseur le plus tardif
et I après H **et** P. Elles ne transforment pas les hypothèses en faits.

### Décisions que permet l'exemple

1. annoncer seulement une fenêtre sous hypothèses, pas un jour garanti ;
2. tester l'accès externe avant d'engager tout le parcours ;
3. préparer un import contrôlé comme solution de pilote si l'éditeur tiers ne
   donne pas les accès à temps ;
4. conserver l'application mobile et le paiement hors de la ligne d'arrivée ;
5. recalculer après l'essai de connexion et après la première recette ;
6. déplacer le pilote si aucune réponse de remplacement ne respecte le résultat
   promis.

## 8. Formulations sûres et dangereuses

| Formulation dangereuse                                    | Pourquoi elle échoue                                                                    | Formulation sûre                                                                                                                                      |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| « Un SaaS prend trois mois. »                             | Aucun résultat, public, dépendance, équipe ou niveau d'exploitation n'est défini        | « La durée dépend de la ligne d'arrivée et du chemin des travaux qui s'attendent ; voici comment calculer les trois scénarios de ce projet. »         |
| « MVP livré en six semaines, garanti. »                   | MVP est indéfini et les conditions de garantie sont absentes                            | « Sous ces hypothèses écrites, le scénario central mène à cette fenêtre ; nous recalculons après les accès et la recette intermédiaire. »             |
| « Deux développeurs de plus divisent le délai par deux. » | Décisions, accès et validations restent parfois séquentiels                             | « Renforcer une tâche peut aider seulement si elle appartient au chemin déterminant et peut réellement être partagée. »                               |
| « Ajoutez 20 % de marge. »                                | Le pourcentage masque les risques propres au projet                                     | « Donnez une durée prudente à chaque résultat incertain et vérifiez si le chemin déterminant change. »                                                |
| « On fera la sécurité à la fin. »                         | Certaines décisions de droits, données et architecture commencent dès la conception     | « Lorsque le produit traite des données ou présente des risques, reliez ses exigences de sécurité aux décisions, développements et tests concernés. » |
| « Stripe ajoute toujours deux semaines. »                 | Le fournisseur, le modèle d'abonnement et le périmètre de test varient                  | « Si Stripe est retenu, planifiez les cas d'abonnement, les événements, la configuration en direct et les clés propres à cette intégration. »         |
| « L'IA divise le temps par deux. »                        | Une capacité de production n'efface ni décisions, ni tiers, ni recette, ni exploitation | « Mesurez les tâches réellement réduites par l'outil et recalculez le chemin ; ne modifiez pas les autres hypothèses sans preuve. »                   |
| « Le développement est fini, on peut ouvrir. »            | Recette, configuration, surveillance, reprise et support peuvent rester                 | « Le code est prêt pour la recette ; l'ouverture attend encore les preuves et responsables inscrits dans la ligne d'arrivée. »                        |

## 9. Empreinte éditoriale à ne pas reproduire

```text
Guide voisin : mvp-prototype-ou-poc
Ouverture : un prestataire propose un format et le lecteur choisit ce qu'il faut apprendre
Dispositif : inconnue dominante, distinctions prototype / POC / pilote / MVP, fiche de dix questions
Forme de conclusion : choisir le format d'apprentissage
À ne pas reproduire : longue comparaison des quatre formats, choix selon le risque, fiche de qualification du format

Guide voisin : mvp-saas-quoi-inclure
Ouverture : le lecteur veut décider les fonctions et garanties de la première version client
Dispositif : parcours principal, comptes, données, support, administration, vente, sécurité, mesures et tests
Forme de conclusion : périmètre du premier produit utilisable
À ne pas reproduire : checklist complète des fonctions du MVP et débat « minimum mais viable »

Guide voisin : combien-coute-un-saas
Ouverture : budget et coût total d'un SaaS
Dispositif : postes de coût, scénarios budgétaires, TCO et arbitrages
Forme de conclusion : enveloppe et soutenabilité
À ne pas reproduire : prix, TJM, fourchettes de mois, coûts récurrents ou calcul de ROI

Guide voisin : cahier-des-charges-saas
Ouverture : rendre le besoin compréhensible et les devis comparables
Dispositif : cycle client, règles, données, responsabilités et recette contractuelle
Forme de conclusion : document de cadrage transmissible
À ne pas reproduire : modèle complet de cahier des charges ou inventaire exhaustif des exigences

Choix du nouveau guide
Ouverture : deux délais contradictoires pour une date commerciale
Dispositif : même ligne d'arrivée, résultats, dépendances, responsables, trois scénarios et chemin déterminant
Forme de conclusion : date défendable sous hypothèses ou décision de tester, réduire, piloter, décaler ou reporter
Différences : aucun prix ; aucune durée moyenne ; un exemple fictif où le chemin change ; fiche de calendrier avant devis ; travail client et tiers visible
```

## 10. Plan annoté

| Section provisoire                                              | Question résolue                                         | Preuve, exemple ou catégorie                                  | Conséquence pour le lecteur                                                                        | Format choisi               |
| --------------------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | --------------------------- |
| Ouverture : deux délais, mais pas la même promesse              | Pourquoi les estimations ne sont-elles pas comparables ? | Situation composite, sans nombre présenté comme norme         | Il demande d'abord ce qui sera utilisable à la date                                                | Prose courte                |
| N'annoncez pas une date avant d'avoir défini la ligne d'arrivée | Prototype, preuve, MVP, pilote ou production ?           | Définitions brèves + liens vers propriétaires                 | Il choisit le résultat, pas un mot vague                                                           | Cinq cartes courtes         |
| Remplacez « développement » par des résultats à vérifier        | Quels travaux faut-il faire apparaître ?                 | Liste de lots conditionnels                                   | Il voit décisions, accès, données, recette et exploitation                                         | Liste progressive           |
| Reliez ce qui s'attend et nommez qui doit agir                  | Où naissent les retards invisibles ?                     | GAO + GOV.UK + fiche                                          | Le travail client, prestataire et tiers devient visible                                            | Cartes responsables         |
| Calculez trois scénarios, pas une fausse moyenne                | Comment obtenir une fenêtre propre au projet ?           | Méthode Hagnéré Code dérivée, sans probabilité revendiquée    | Il calcule court, central et prudent sans additionner le parallèle                                 | Formule simple              |
| Testez d'abord ce qui peut déplacer la date                     | Quel travail démarrer en premier ?                       | Recommandation + exemple d'accès externe                      | Il réduit l'inconnu avant le volume                                                                | Questions successives       |
| Le code terminé n'est pas encore un service exploitable         | Que manque-t-il avant l'ouverture ?                      | GOV.UK, CNIL, NIST et Stripe conditionnel                     | Il prévoit recette, sécurité, production, surveillance, reprise et support                         | Encadré de vigilance        |
| Exemple fictif : le chemin passe du parcours à l'accès externe  | Comment refaire le calcul ?                              | Dix travaux, trois scénarios, calcul et vérification inversée | Il comprend parallélisme et changement de chemin                                                   | Cartes sur mobile + formule |
| Si la date ne tient pas, changez ce qui est lancé               | Comment raccourcir honnêtement ?                         | Sept arbitrages                                               | Il retire, simplifie, pilote, décale ou reporte sans appeler une démo « production »               | Liste décisionnelle         |
| Copiez la fiche avant de comparer deux devis                    | Que remettre aux parties ?                               | Fiche de douze champs                                         | Les hypothèses et responsabilités deviennent comparables                                           | Bloc copiable               |
| Décidez quand le calendrier sera recalculé                      | Comment éviter un plan périmé ?                          | GOV.UK + événements de révision                               | La date est mise à jour lorsque l'information change                                               | Mini-calendrier             |
| CTA éventuel                                                    | Quand un échange est-il utile ?                          | Bon fit / mauvais fit                                         | Le lecteur arrive avec une ligne d'arrivée et ses inconnues, ou conclut qu'il doit d'abord valider | Un seul CTA tardif          |
| Sources et limites                                              | Qu'est-ce qui est officiel, observé, adapté ou fictif ?  | Liens proches + qualification                                 | Il peut vérifier les principes sans confondre exemple et norme                                     | Liste courte                |

### H2 de travail, à relire isolément en P2

1. `Avant de croire un délai, vérifiez ce qui sera vraiment prêt`
2. `Prototype, pilote ou production : choisissez la ligne d'arrivée`
3. `Remplacez “développement” par des résultats que vous pouvez vérifier`
4. `Montrez ce que votre entreprise et les tiers doivent fournir`
5. `Reliez les travaux qui s'attendent`
6. `Calculez un scénario court, central et prudent`
7. `Testez d'abord l'inconnu qui peut déplacer la date`
8. `Ajoutez la recette, la mise en ligne et le support au calendrier`
9. `Exemple fictif : pourquoi une connexion externe finit par fixer la date`
10. `Si le délai ne tient pas, réduisez la première ligne d'arrivée`
11. `Copiez la fiche calendrier avant de comparer deux devis`
12. `Décidez quand recalculer la date`
13. `Sources et limites`

P2 peut fusionner les sections 3 à 5 si la lecture devient mécanique. La
structure ne doit pas ressembler à un gabarit répété : alterner situation,
question, calcul, exemple, fiche et arbitrage. Les `id` ne sont pas encore
figés.

### Questions résiduelles possibles pour la FAQ

1. Combien de temps faut-il pour développer un MVP SaaS ?
2. Quelle différence de délai entre un prototype et une mise en production ?
3. Peut-on lancer un SaaS plus vite avec du no-code ou de l'IA ?
4. Ajouter des développeurs réduit-il forcément le délai ?
5. Quand peut-on annoncer une date de sortie à un premier client ?
6. Qui est responsable d'un retard causé par une validation ou un accès ?
7. Que faut-il retirer en premier si la date ne peut pas bouger ?

Chaque réponse doit commencer par une réponse directe ou une condition. La FAQ
ne doit donner ni fourchette universelle, ni nouveau budget, ni avis juridique.

## 11. Ressource et conversion

```text
Une ressource est-elle naturellement nécessaire ? oui, dans la page uniquement
Problème résolu après lecture : transformer un délai annoncé en calendrier propre au projet, comparable et recalculable
Résultat autonome produit : ligne d'arrivée, hors-périmètre, résultats, dépendances, responsables, preuves de fin, trois scénarios, chemin déterminant, premier test et règle d'arbitrage
Format éditable et format de consultation : bloc texte copiable et cartes responsives ; aucun PDF, tableur ou téléchargement annoncé
Rubriques réellement livrées : les douze champs de la fiche calendrier avant devis
Exemple rempli : SaaS fictif de réservation de matériel, dix travaux et calculs court / central / prudent
Conclusion « ne pas investir » possible : oui — valider le problème, utiliser un outil existant, tester une seule inconnue ou reporter
Sources, hypothèses et limites visibles : oui, au plus près des principes et du calcul
Données saisies et destination : aucune saisie sur le site ; le lecteur copie le modèle en interne
Processus de génération reproductible : calcul manuel décrit et vérifié à l'envers ; aucun fichier généré
Journal de QA : non applicable en P1 ; cartes et formules à contrôler à 320 et 390 px en P4
Limites connues et niveau de revue humaine : aucune revue par un dirigeant réel en P1
Mode de maintenance : revalider les pages officielles, les routes locales et les affirmations fournisseur avant toute mise à jour substantielle
Test du fichier ou outil : aucun outil externe ou fichier promis
Bon fit Hagnéré Code : ligne d'arrivée formulable, parcours principal connu, décisions et accès attribuables, besoin spécifique
Mauvais fit : problème non validé, aucun testeur ou décideur, date garantie avant accès, produit standard suffisant ou contrainte juridique spécialisée non instruite
Action non commerciale : remplir la fiche, calculer les trois chemins et tester l'inconnu principal
CTA principal : « Faire vérifier le calendrier de mon SaaS » vers `/demarrer-un-projet`
Résultat après clic : clarifier résultat, dépendances, responsables, critères d'acceptation et arbitrages avant devis ; possibilité de recommander un périmètre réduit, un pilote, un outil ou aucun développement immédiat
```

### Maillage prévu

Entrants prioritaires à considérer en P2, sous contrôle de l'éditeur unique :

1. `combien-coute-un-saas`, depuis la section actuelle sur le calendrier ;
2. `cahier-des-charges-saas`, depuis les responsabilités, dépendances et
   critères d'acceptation ;
3. `/services/saas-applications-metier`, depuis le processus ou la FAQ sur les
   délais, si le lien reste éditorialement utile.

Sorties utiles, sans liste automatique :

- `mvp-prototype-ou-poc` si la ligne d'arrivée n'est pas encore choisie ;
- `mvp-saas-quoi-inclure` pour décider ce que la première version doit contenir ;
- `cahier-des-charges-saas` pour formaliser le besoin et l'acceptation ;
- `combien-coute-un-saas` lorsque la décision porte sur l'enveloppe et le coût
  total ;
- `agence-saas-ou-freelance` lorsque l'organisation de réalisation doit être
  choisie ;
- `/services/saas-applications-metier` pour comprendre l'offre, puis
  `/demarrer-un-projet` uniquement dans le CTA contextualisé.

Ne pas lier `lancer-saas-2026` avant nouvelle vérification de son existence. Ne
pas multiplier les liens dans l'ouverture : la réponse doit rester fluide.

## 12. Tests préparés pour les passes suivantes

### Tests de justesse et de calcul

- refaire les quatre chemins dans les trois scénarios ;
- vérifier séparément G : D attend B **et** G, même si G n'est jamais le plus
  tardif dans l'exemple ;
- vérifier que H attend D, E **et** F ;
- vérifier que I attend H **et** P ;
- vérifier que le chemin déterminant passe de A-B-D-H-I à A-C-E-H-I dans le
  scénario prudent ;
- ne pas convertir les jours ouvrés fictifs en date réelle ;
- ne pas employer « probable » ou un pourcentage de confiance ;
- conserver l'étiquette fictive au-dessus et au-dessous du tableau.

### Tests de compréhension pour dirigeant

- le lecteur sait dire en moins d'une minute pourquoi deux délais ne sont pas
  comparables sans ligne d'arrivée ;
- il sait nommer une fourniture de son entreprise qui peut bloquer le projet ;
- il comprend pourquoi le total n'est pas la somme de toutes les durées ;
- il sait trouver le prédécesseur le plus tardif ;
- il peut choisir un premier test au lieu de demander une marge arbitraire ;
- il distingue pilote limité et production exploitée ;
- il connaît au moins trois décisions honnêtes si la date ne tient pas.

### Tests de plume et d'anti-IA

- aucun paragraphe ne commence par une abstraction non expliquée ;
- chaque section répond à une question que le dirigeant pourrait prononcer ;
- éviter les séries mécaniques de trois adjectifs, les transitions « dans un
  monde », « il est crucial », « en conclusion » et les oppositions creuses ;
- ne pas répéter « dépendance », « crédible » ou « réaliste » dans tous les H2 ;
- conserver des phrases courtes autour des calculs ;
- relire tous les titres sans leur contenu : ils doivent raconter une décision
  et ne pas former un gabarit reconnaissable ;
- faire lire l'ouverture et l'exemple à une personne non technicienne ; ne pas
  simuler ce test si personne n'est disponible.

### Tests de rendu et SEO technique

- tables de ligne d'arrivée, exemple et formulations à transformer en cartes
  ou en tableau accessible à 320 et 390 px ;
- aucune colonne essentielle cachée par un défilement horizontal implicite ;
- formules lisibles en thème clair et sombre ;
- liens internes existants et ancres descriptives ;
- title, description et H1 sans promesse de délai universel ;
- canonical, robots `index, follow`, sitemap et JSON-LD conformes au système du
  site seulement après P4 ;
- FAQ visible identique au balisage FAQ si ce balisage est retenu ;
- aucune note `aggregateRating`, aucun avis ou durée inventés ;
- image sociale sans chiffre présenté comme délai de marché.

## 13. Rapport de sortie P1

```text
PASSE 1 TERMINÉE
Slug : combien-de-temps-developper-saas
Lecteur et phrase réelle : dirigeant avec une échéance et deux délais incompatibles ; « je veux savoir ce qui peut vraiment être prêt, ce que je dois fournir et ce qu'il faut retirer si le calendrier ne tient pas »
Décision : définir la ligne d'arrivée, relier les résultats, attribuer les responsabilités, calculer trois scénarios, tester l'inconnu principal puis poursuivre, réduire, piloter, décaler ou reporter
Angle et forme dominante : calendrier par dépendances et responsabilités ; fiche copiable ; exemple fictif où le chemin déterminant change
Pages proches et différence : format d'apprentissage, contenu du MVP, budget/TCO, cahier des charges et choix du prestataire ; aucune ne calcule le calendrier propre au projet
Sources décisives : GAO pour exhaustivité, liens, hypothèses, chemin et mise à jour ; GOV.UK pour plan évolutif, tiers, pilote et exploitation ; CNIL/NIST pour sécurité intégrée ; Stripe seulement si paiement retenu
Incertitudes exclues : volume de recherche, moyenne de marché, durée Hagnéré Code, probabilité statistique, coefficient de marge, gain automatique par IA/no-code/équipe, conformité globale et date garantie
Action autonome et CTA possible : fiche de douze champs et calcul de trois chemins ; CTA tardif vers /demarrer-un-projet avec réduction, pilote, outil existant ou absence de développement possibles
Plan : douze sections décisionnelles, sept FAQ résiduelles, dix travaux fictifs avec calcul et vérification inversée, sources proches
Snapshot : docs/research/manifests/combien-de-temps-developper-saas-p1.sha256
```

## 14. Porte de sortie P1 et score honnête

### Vérification de la porte

- [x] brief complet et décision principale unique ;
- [x] réponse claire préparée dans les 150 premiers mots ;
- [x] cinq lignes d'arrivée distinguées sans durée normative ;
- [x] quatre pages voisines principales et deux pages commerciales délimitées ;
- [x] route `lancer-saas-2026` contrôlée comme absente de l'inventaire local au
      22 juillet 2026 ;
- [x] fourchettes de la page coût repérées mais non recopiées comme preuve ;
- [x] recherche web actuelle et carte de quatre concurrents ;
- [x] sources officielles et primaires séparées des pages commerciales ;
- [x] transposition GAO qualifiée, sans fausse analyse statistique ;
- [x] sécurité, données et paiement traités conditionnellement ;
- [x] responsabilités entreprise, prestataire et tiers rendues visibles ;
- [x] exemple fictif reproductible et vérifié à l'envers ;
- [x] changement du chemin déterminant démontré ;
- [x] formulations sûres et dangereuses préparées ;
- [x] fiche de douze champs réellement écrite ;
- [x] action autonome, bon fit, mauvais fit et report définis ;
- [x] tests P2, P3 et P4 transmis ;
- [x] aucune page publique, aucun registre, aucun lien entrant et aucun fichier
      partagé modifiés en P1 ;
- [x] propriétaire éditorial unique nommé ;
- [x] manifeste P1 créé après formatage et relecture intégrale.

### Score P1 — 19/20

| Axe de recherche               |  Note 0-2 | Preuve                                                                            | Réserve                                                           |
| ------------------------------ | --------: | --------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Décision du lecteur            |         2 | Date sous hypothèses ou décision de tester, réduire, piloter, décaler ou reporter | —                                                                 |
| Frontière éditoriale           |         2 | Format, contenu, budget, cahier des charges et prestataire restent propriétaires  | Surveiller la page coût en P2                                     |
| Demande observée               |         1 | SERP actuelle et questions spécifiques relevées                                   | Aucun volume Search Console ou Keyword Planner propre à l'URL     |
| Carte concurrentielle          |         2 | Quatre approches commerciales, hypothèses et lacunes comparées                    | Échantillon qualitatif, non exhaustif                             |
| Sources primaires              |         2 | GAO, GOV.UK, CNIL, NIST et documentation fournisseur conditionnelle               | Aucune source ne donne une durée SaaS universelle, volontairement |
| Qualification des affirmations |         2 | Faits, transposition, recommandations et exemple fictif séparés                   | —                                                                 |
| Pédagogie prévue               |         2 | Ligne d'arrivée, fiche, calcul pas à pas et vérification inversée                 | À vérifier avec une personne non technicienne                     |
| Originalité utile              |         2 | Chemin qui change entre central et prudent ; travail client et tiers visible      | —                                                                 |
| Conversion honnête             |         2 | Action autonome et six conclusions, dont report ou absence de développement       | —                                                                 |
| Transmission au rédacteur      |         2 | Plan, preuves, limites, calcul, vocabulaire, CTA, liens et tests documentés       | —                                                                 |
| **Total**                      | **19/20** | P1 complète sans moyenne ni promesse inventée                                     | La demande quantitative, le rendu et la plume restent à prouver   |

### Revalidation contradictoire de P1 — 22 juillet 2026

Un second agent, distinct de la recherche initiale et en lecture seule, a
rouvert les sources et rejoué tout le réseau de dépendances avant P2.

- aucun P0 ;
- les dates finales 28, 41 et 66 jours ouvrés fictifs sont exactes ;
- les six chemins, y compris les deux branches passant par G, figurent
  désormais dans chaque calcul ;
- les responsabilités auparavant écrites « entreprise + prestataire » sont
  séparées en actions attribuées ;
- chaque durée courte, centrale ou prudente est reliée à une hypothèse que le
  lecteur peut contester ;
- la nuance CNIL sur l'éventuelle préproduction avec données réelles a été
  rétablie ;
- NIST SP 800-218 v1.1 reste la version finale consultée, tandis que la v1.2
  n'est qu'un projet public initial à cette date.

La note reste volontairement à **19/20** : la demande quantitative, la plume
publique, le rendu et un test par un dirigeant réel ne sont toujours pas
prouvés en P1.

### Réserves à transmettre en P2

1. Ne jamais ouvrir par « cela dépend ». Ouvrir par les deux délais
   incomparables, puis expliquer immédiatement ce qu'il faut comparer.
2. Aucun chiffre concurrent ni fourchette de la page coût ne doit devenir la
   réponse publique. Le seul tableau chiffré est explicitement fictif.
3. La distinction prototype/POC/MVP/pilote/production doit rester courte ; les
   deux guides MVP possèdent les explications détaillées.
4. « Chemin déterminant » doit être montré avant d'être nommé. Une animation ou
   une visualisation n'est utile que si elle reste lisible et accessible ; les
   formules suffisent.
5. Les trois scénarios ne portent aucun niveau de confiance statistique. Ne pas
   attribuer cette adaptation à la GAO.
6. La sécurité n'est pas un lot final automatique : lorsqu'elle s'applique,
   elle traverse décisions, conception, développement, tests et production.
7. Stripe n'est qu'un exemple conditionnel. Ne pas donner l'impression qu'un
   SaaS doit utiliser Stripe ou accepter un paiement dans sa première version.
8. Les responsabilités partagées doivent toujours être séparées en verbes :
   qui prépare, qui valide, qui corrige et sous quel délai.
9. La réduction de périmètre ne doit pas maquiller une démo en produit prêt. La
   ligne d'arrivée et ses limites restent visibles.
10. L'exemple fictif ne doit pas devenir une carte compacte illisible sur
    mobile. À 390 px, présenter un travail par carte avec code, responsable,
    dépendance et trois durées.
11. Le lien entrant depuis `combien-coute-un-saas` est le plus naturel, mais
    toute harmonisation de ses anciennes fourchettes appartient à l'éditeur
    racine.
12. `lancer-saas-2026` est absent de l'inventaire local constaté ; recontrôler
    avant P2 et ne jamais publier un lien mort.
13. Aucun dirigeant réel n'a encore relu le dossier. Le score P1 juge la
    recherche, pas la plume, le rendu, l'indexation ni la conversion réelle.

## 15. Étapes suivantes laissées volontairement bloquées

### Rapport P2 — Rédaction et intégration

```text
PASSE 2 TERMINÉE
Fichiers créés : page publique et image sociale dédiées.
Fichiers partagés modifiés : registre, icône du hub, garde-fou de langage humain et un lien entrant depuis combien-coute-un-saas.
Ouverture et réponse : 130 mots ; deux délais incompatibles ; SaaS défini ; aucune durée universelle ; cinq décisions annoncées dès l'ouverture.
Forme propre au sujet : cinq lignes d'arrivée brèves ; résultats plutôt que phases ; responsabilités entreprise/prestataire/tiers ; cartes mobiles ; réseau montré avant le terme « chemin déterminant » ; fiche calendrier en douze rubriques.
Exemple et calculs : exemple illustratif entièrement fictif ; dix travaux ; trois jeux d'hypothèses ; six chemins complets par scénario ; résultats 28, 41 et 66 jours ouvrés fictifs ; changement du chemin démontré et vérifié à l'envers.
Sources visibles : GAO et GOV.UK près de la méthode, CNIL et NIST près de la sécurité, Stripe uniquement si ce fournisseur est retenu ; portée et limites visibles.
Action autonome : définir la ligne d'arrivée, attribuer les attentes, refaire les calculs, tester l'inconnu principal et choisir tester, réduire, piloter, simplifier, décaler ou reporter.
Bon fit / mauvais fit : projet avec public, parcours, décideur et accès identifiables ; report ou outil existant explicitement possibles lorsque le problème, les utilisateurs ou les décisions ne sont pas prêts.
CTA : un seul CTA tardif vers /demarrer-un-projet ; résultat annoncé ; showSidebarCta=false pour éviter deux blocs commerciaux.
SEO et produit : title 42 caractères, meta 142, canonical exact, noindex/nofollow conservé par editorialStatus, Article + BreadcrumbList uniquement, FAQ visible sans FAQPage, OG dédiée 1200 × 630.
Contrôles rapides : P1 vérifiée par shasum -c ; Prettier et ESLint ciblés verts ; tsc sans erreur ; 50 tests ciblés verts ; route et six destinations internes en 200 ; OG en 200 ; un H1 ; sept FAQ ; git diff --check vert.
Snapshot : docs/research/manifests/combien-de-temps-developper-saas-p2.sha256
```

#### Score P2 — 19/20, sans anticiper la P3 ni la P4

| Axe         |      Note | Preuve P2                                                                                           |
| ----------- | --------: | --------------------------------------------------------------------------------------------------- |
| Intention   |         2 | La requête reçoit une réponse immédiate : pas de durée universelle, mais un calcul propre au projet |
| Décision    |         2 | Tester, réduire, piloter, simplifier, décaler et reporter sont des sorties réellement expliquées    |
| Pédagogie   |         2 | Réseau montré avec des mots ordinaires avant de nommer le chemin déterminant                        |
| Profondeur  |         2 | Résultat, données, tiers, tests, ouverture, support et révision du plan sont couverts               |
| Preuve      |         2 | Sources primaires visibles, adaptations attribuées et exemple fictif délimité                       |
| Comparaison |         2 | Les deux délais sont comparés seulement après avoir fixé la même ligne d'arrivée                    |
| Originalité |         2 | Six chemins et changement de suite déterminante, plus une fiche de douze rubriques                  |
| Style       |         1 | Lecture éditoriale P2 faite ; contre-audit, passe de plume et test par un dirigeant restent à faire |
| Conversion  |         2 | Action autonome complète, mauvais fit et CTA unique avec résultat explicite                         |
| SEO/produit |         2 | Metadata, canonical, robots, schémas, OG, maillage, registre et garde-fou intégrés                  |
| **Total**   | **19/20** | Le brouillon est complet et testable, mais aucune validation P3, P4 ou humaine n'est simulée        |

La porte P2 est validée. Le stade éditorial honnête reste **Prêt pour
contre-audit**. Le marqueur `editorialStatus: "ready-for-human-review"` est
conservé comme porte binaire du registre : la route reste accessible mais
`noindex,nofollow`, absente du hub public, du sitemap et de `llms.txt`.

### Rapport P3 — Contre-audit indépendant

```text
PASSE 3 TERMINÉE — PORTE VALIDÉE
Relecteur : agent distinct de la recherche et de la rédaction, resté en lecture seule.
Snapshot audité : manifeste P2 vérifié 7/7 avant et après la lecture.
Sources rouvertes : GAO-16-89G ; GOV.UK planning, beta et live ; CNIL ; NIST SP 800-218 v1.1 et projet v1.2 ; documentation Stripe Billing et passage en direct.
Calculs refaits : toutes les dates de fin A à I, les trois jointures D/H/I et les dix-huit équations ; 28, 41 et 66 exacts sous l'hypothèse de capacité parallèle désormais visible.
P0 : aucun.
P1 trouvés : quatre.
P1 corrigés : capacité et disponibilité des personnes ; règle générique sur toutes les suites ; traduction de MVP/POC ; miroir exact du fil d'Ariane JSON-LD.
Suggestions acceptées : test des dix-huit équations et des trois jointures ; régions accessibles reliées à leur H2 ; définition développée de NIST ; réserve adjacente aux fourchettes de l'ancien guide coût.
Suggestions rejetées : aucune.
Contrôles après correction : Prettier, ESLint, test humain ciblé 19/19, TypeScript et git diff --check verts.
Revalidation du relecteur : 0 P0 et 0 P1 ; aucune régression matérielle ; HTML local, données structurées, huit destinations internes et image sociale revérifiés.
Snapshot P3 : docs/research/manifests/combien-de-temps-developper-saas-p3.sha256
```

Le premier verdict indépendant était **0 P0 et 4 P1** :

1. le calcul laissait croire que deux travaux sans lien pouvaient toujours
   avancer en parallèle, sans vérifier la disponibilité d'une même personne ou
   équipe ;
2. la fiche généralisait les six suites propres à l'exemple à tous les projets ;
3. MVP et POC apparaissaient avant leur traduction pour un lecteur non
   technicien ;
4. le troisième libellé du fil d'Ariane structuré différait du fil visible.

Les corrections publiques rendent maintenant l'hypothèse de capacité
explicite, demandent d'ordonner les travaux qui partagent une ressource,
comparent toutes les suites propres au projet, développent les sigles et
alignent le fil d'Ariane. Le champ 06 de la fiche demande aussi la disponibilité
de la personne, pas seulement son nom.

La suggestion sur l'ancien guide `combien-coute-un-saas` a été retenue : ses
fourchettes sont désormais immédiatement présentées comme des repères de
cadrage, jamais comme un délai moyen ou une promesse. Cette correction évite
une contradiction éditoriale sans transformer le guide calendrier en guide de
budget.

Le relecteur indépendant a ensuite relu le nouveau snapshot en lecture seule.
Il confirme les quatre corrections, les dix-huit équations, les trois jointures
et les suggestions acceptées, sans P0 ni P1 résiduel. La page locale répond en
200, les huit destinations internes et l'image sociale répondent en 200, et les
seuls types structurés propres au guide restent `Article` et `BreadcrumbList`.

**Verdict P3 : porte validée.** La plume visuelle, les thèmes, les largeurs, les
interactions, le snapshot P4 et la décision de publication restent à contrôler
séparément.

### Rapport P4 — Plume humaine et contrôle final

```text
PASSE 4 TERMINÉE — PORTE VALIDÉE
Passages humanisés : première version minimale et preuve de faisabilité développées ; hypothèse de personnes disponibles rendue concrète ; règle de calcul généralisée à toutes les suites ; NIST développé ; réserve ajoutée à l'ancien guide coût.
Coupe ou resserrement : aucune section ajoutée pour le principe ; les corrections restent adjacentes au calcul et à l'exemple.
Retour P3 : 4 P1 corrigés, puis revalidation indépendante à 0 P0 / 0 P1.
Diff sémantique après la plume : calculs, sources, CTA et décision inchangés ; seule l'hypothèse de capacité auparavant cachée est devenue explicite.
Validation humaine réelle : non réalisée et non simulée.
Autorisation éditoriale : publication différée jusqu'au gel commun des dix guides ; editorialStatus conservé.
Largeurs : 320, 390, 640, 768, 1024 et 1440 px ; scrollWidth égal à clientWidth partout ; seul un halo décoratif sort visuellement de son bloc sans créer de débordement de page.
Thèmes : sombre à 390 px et clair à 1440 px inspectés ; texte, formules, cartes et CTA lisibles.
Interactions : deuxième FAQ ouverte par clic ; réponse visible ; première FAQ ouverte par défaut ; aucune erreur navigateur.
Structure : un H1, onze H2 propres au guide, onze ancres valides, sept FAQ visibles ; aucun FAQPage/HowTo/Offer.
SEO : title, description, canonical et OG cohérents ; robots noindex,nofollow attendu avant publication ; Article + BreadcrumbList uniquement ; fil structuré identique au fil visible.
Liens : trente-cinq destinations internes uniques du document complet répondent en 200.
Image sociale : HTTP 200, PNG 1200 × 630, inspection visuelle conforme, aucun délai de marché présenté.
Console : aucune erreur ; seulement l'information React DevTools du serveur de développement.
React : composant serveur, aucune cascade de requêtes, aucune dépendance client ajoutée, clés de listes stables ; aucun écart matériel à la checklist React/Next.
Commandes vertes : Prettier ciblé, ESLint global, tsc --noEmit, tests ciblés 21/21, manifeste P3 et git diff --check.
Contrôle commun provisoire : check:seo 187/188 et suite complète 412/413 ; unique échec attendu sur le hash P4 ancien de src/lib/guides.ts pour application-gestion-interventions-terrain, à recalculer au gel commun final.
Snapshot P4 : docs/research/manifests/combien-de-temps-developper-saas-p4.sha256
Statut maximal : prêt pour validation éditoriale groupée, non publié, non indexable.
Verdict : P4 validée à 19/20 ; absence assumée de test par un dirigeant réel.
```

#### Score P4 — 19/20

| Axe         |      Note | Preuve finale                                                                               |
| ----------- | --------: | ------------------------------------------------------------------------------------------- |
| Intention   |         2 | La requête reçoit une réponse immédiate sans durée universelle                              |
| Décision    |         2 | Tester, réduire, piloter, simplifier, décaler ou reporter sont des issues concrètes         |
| Pédagogie   |         2 | Ligne d'arrivée, attentes, capacité et calcul sont expliqués dans cet ordre                 |
| Profondeur  |         2 | Produit, données, tiers, sécurité, tests, ouverture, support et révision sont couverts      |
| Preuve      |         2 | Sources primaires rouvertes, exemple fictif et adaptations clairement séparés               |
| Comparaison |         2 | Les délais ne sont comparés qu'après avoir fixé la même promesse                            |
| Originalité |         2 | Réseau complet, chemin qui change et fiche de douze rubriques                               |
| Style       |         1 | Plume et rendu relus ; aucun test par un dirigeant réel                                     |
| Conversion  |         2 | Action autonome complète, CTA unique et non-développement possible                          |
| SEO/produit |         2 | Metadata, accessibilité, maillage, image et six largeurs contrôlés                          |
| **Total**   | **19/20** | Aucun point manquant bloquant ; la réserve humaine n'est pas maquillée en validation réelle |

### Test lecteur non technique

```text
Test réalisé par une personne réelle : non
Profil prévu : dirigeant ou porteur de SaaS qui compare deux délais ou prépare une échéance client
Ce qu'il doit comprendre : la durée n'est pas un nombre universel ; elle vient d'une ligne d'arrivée et de la plus longue suite de travaux dépendants
Décision qu'il doit pouvoir prendre : demander des hypothèses, tester un inconnu, réduire, piloter, décaler, reporter ou poursuivre
Endroit où il pourrait survoler : tableau fictif et série de calculs ; prévoir des cartes et une phrase de résultat après chaque scénario
Passage qui doit donner confiance : le chemin change dans le scénario prudent et conduit à tester l'accès externe plutôt qu'à accélérer tout le développement
Termes potentiellement bloquants : SaaS, ligne d'arrivée, dépendance, chemin déterminant, recette, préproduction et retour en arrière ; tous sont expliqués ou traduits
Questions encore sans réponse : à recueillir lors du test réel
Corrections appliquées : sigles développés, hypothèse de capacité explicitée et formules rendues réutilisables ; aucune validation humaine simulée
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
