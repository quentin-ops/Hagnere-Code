# Dossier de travail — Site indexé mais sans trafic Google

> Dossier ouvert en passe 1 puis complété jusqu'à la validation P4. Il conserve
> la recherche historique et documente la rédaction, les contre-audits et les
> contrôles terminés le 24 juillet 2026. Il ne suppose pas qu'une page indexée
> mérite automatiquement une position ni qu'un trafic peut être garanti.

Le workflow de référence est
[`docs/workflow-maitre-guides-4-passes.md`](../workflow-maitre-guides-4-passes.md).

## Journal des quatre passes

Propriétaire éditorial unique : équipe éditoriale Hagnéré Code, orchestration
du lot du 23 juillet 2026.

| Passe                        | État                     | Date             | Responsable                                   | Snapshot | Blocages |
| ---------------------------- | ------------------------ | ---------------- | --------------------------------------------- | -------- | -------- |
| 1. Recherche                 | Terminée — porte validée | 23 juillet 2026  | Agent recherche                               | Manifeste P1 | Aucun |
| 2. Rédaction et intégration  | Terminée — porte validée | 24 juillet 2026  | équipe éditoriale Hagnéré Code                | Manifeste P2 | Aucun |
| 3. Contre-audit indépendant  | Terminée — porte validée | 24 juillet 2026  | final_audit_marketing, anti_ia_final, seo_tech_final | Manifeste P3 | Aucun P0/P1 restant |
| 4. Plume humaine et contrôle | Terminée — porte validée | 24 juillet 2026  | orchestration éditoriale                      | Manifeste P4 | Aucun blocage éditorial |

### Manifeste du snapshot

| Fichier contrôlé | Passe | Remarque |
| ---------------- | ----- | -------- |
| `docs/research/manifests/site-indexe-sans-trafic-p1.sha256` | P1 | Manifeste existant ; historique de recherche conservé. |
| `docs/research/manifests/site-indexe-sans-trafic-p2.sha256` | P2 | Manifeste existant de rédaction et d'intégration. |
| `docs/research/manifests/site-indexe-sans-trafic-p3.sha256` | P3 | Manifeste existant après contre-audit et corrections. |
| `docs/research/manifests/site-indexe-sans-trafic-p4.sha256` | P4 | Manifeste final créé après les contrôles P4 ; son empreinte est intégrée au snapshot commun du lot. |

## 1. Fiche d'identité

```text
Slug : site-indexe-sans-trafic
Statut actuel : publiable — validation éditoriale déléguée
Requête principale, encore hypothétique avant recherche : site indexé mais pas de trafic
Moment du parcours : comprendre puis décider
Lecteur précis : dirigeant ou indépendant dont le prestataire annonce que les pages sont indexées, alors que Search Console et les demandes commerciales ne montrent presque aucune visibilité utile
Situation déclenchante : « 200 URL indexées » est présenté comme une réussite, mais le site ne reçoit ni impressions pertinentes, ni clics, ni contacts
Décision principale après lecture : pour chaque groupe de pages, attendre avec une date de revue, améliorer l'adéquation à la recherche, consolider des pages concurrentes, corriger une sélection/canonique, ou retirer une page inutile
Niveau de connaissance au départ : sait regarder Google ou Search Console, mais confond indexation, apparition, position et trafic
5 questions indispensables : l'URL exacte est-elle indexée avec la bonne canonique ? reçoit-elle des impressions ? sur quelles requêtes et avec quelle intention ? son extrait obtient-il des clics quand elle apparaît ? une autre page du site répond-elle déjà au même besoin ?
3 objections ou craintes : « Google m'a pénalisé » ; « il faut juste attendre » ; « je dois réécrire tout le site »
Action utile sans contact commercial : construire un registre page-requête et attribuer une décision datée à chaque groupe d'URL
CTA possible : faire vérifier les pages indexées sans visibilité utile, vers /demarrer-un-projet
Hors périmètre : audit exhaustif sans données, garantie de position, seuil universel de CTR/impressions/position, diagnostic d'une chute après trafic établi, tutoriel complet Search Console
Date de la recherche : 23 juillet 2026
Responsable de la synthèse : agent recherche du lot batch 4
```

## 1 bis. Contrat de langage humain

- Phrase exacte que le lecteur pourrait dire au téléphone : « Search Console
  dit que mes pages sont indexées, mais elles n'apportent aucune visite. Est-ce
  un problème technique, un mauvais contenu ou faut-il attendre ? »
- Réponse qu'il attend en une phrase : l'indexation signifie seulement que
  Google peut conserver la page dans son index ; regardez ensuite ses
  impressions, les recherches qui la déclenchent, les clics et les pages
  concurrentes du site pour décider quoi corriger.
- Terme central expliqué sans jargon : une page **indexée** est une page que
  Google a ajoutée à son index ; cela ne lui garantit ni apparition pour une
  recherche précise, ni bonne position, ni clic.
- Mots ordinaires employés par le lecteur : page connue de Google, visible,
  recherche client, apparaît, clic, visite, demande de devis, bon sujet,
  doublon.
- Mots d'agence ou de consultant à éviter : crawl budget, topical authority,
  content pruning, query fan-out, cannibalisation sémantique, E-E-A-T utilisé
  comme note, pénalité supposée.
- Projet des 150 premiers mots : ouvrir avec un rapport « 200 pages indexées,
  0 visite utile ». Dire que ce n'est pas une contradiction, définir
  indexation, puis faire choisir la prochaine observation dans Search Console.
- Ce que le lecteur saura décider après ces 150 mots : s'il doit vérifier la
  page choisie par Google, la demande et l'intention, l'extrait, ou un conflit
  entre plusieurs pages — au lieu de tout réécrire.
- H2 relus isolément : à valider en P2.
- Comparaison comprise à 390 px sans colonne masquée : à valider en P4 ;
  présenter l'arbre de décision en cartes verticales.
- FAQ dont la première phrase répond : à valider en P2.
- CTA formulé comme résultat pour le prospect : « Identifier quelles pages
  garder, améliorer, regrouper ou retirer ».

### Test sujet, action, résultat

| Phrase initiale à surveiller | Qui agit ? | Action concrète | Résultat pour le lecteur | Formulation attendue |
| ---------------------------- | ---------- | --------------- | ------------------------ | -------------------- |
| « Améliorer la visibilité organique » | Le dirigeant ou son prestataire | Il classe les pages par impressions, requêtes et clics | Il sait quelles pages examiner d'abord | « Regroupez les pages qui n'apparaissent jamais séparément de celles qui apparaissent sans être cliquées. » |
| « Travailler l'intention de recherche » | L'auteur | Il compare la question du lecteur à la réponse de la page | La page vise une décision précise | « Lisez les requêtes réelles puis vérifiez si la page répond à la question qu'elles posent. » |
| « Optimiser le CTR » | L'éditeur | Il ajuste titre, description et promesse visibles sans tromper | Davantage de personnes pertinentes peuvent choisir le résultat | « Si la page apparaît mais n'est pas choisie, réécrivez son titre pour annoncer sa réponse exacte. » |
| « Résoudre la cannibalisation » | L'équipe | Elle choisit une page principale et regroupe ou différencie les doublons | Google et le lecteur rencontrent une réponse claire | « Si deux pages répondent à la même décision, gardez la plus utile et consolidez l'autre. » |
| « Renforcer le maillage interne » | L'éditeur | Il ajoute un lien depuis une page réellement connexe avec une ancre explicite | Le lecteur et Google découvrent le rapport entre les sujets | « Liez la page depuis le guide qui prépare naturellement cette décision. » |

### Test de l'ouverture

- [x] la situation vécue apparaît avant la méthode ;
- [x] indexation, impression, clic et canonique seront définis au premier usage ;
- [x] aucun lexique massif ne retarde la réponse ;
- [x] aucune métaphore ne devient un système ;
- [x] aucune pénalité n'est suggérée sans preuve.

## 2. Cannibalisation

| Page existante | Intention de cette page | Différence du nouveau guide | Lien ou arbitrage nécessaire |
| -------------- | ----------------------- | --------------------------- | ---------------------------- |
| `/guides/pourquoi-site-pas-visible-google` | Diagnostiquer largement la chaîne découverte, indexation, position, clic et conversion | Le nouveau guide commence après confirmation de l'indexation et se concentre sur l'absence de visibilité/trafic utile | Introduction avec frontière claire et lien si l'URL n'est pas indexée |
| `/guides/positions-google-baissent` | Comprendre une baisse depuis une visibilité antérieure | Le nouveau guide traite les pages qui n'ont jamais acquis de trafic utile | Renvoyer vers le guide de baisse si une base historique existe |
| `/guides/combien-de-temps-resultats-seo` | Décider quand attendre et quand agir après des travaux SEO | Le nouveau guide segmente immédiatement les pages indexées avec leurs données | Lier pour la temporalité, sans faire d'attente la réponse par défaut |
| `/guides/audit-seo-que-contient-il` | Définir un audit SEO livrable | Le nouveau guide donne un premier diagnostic autonome avant commande d'audit | CTA possible seulement après le registre |

**Justification d'une URL distincte :** l'intention est resserrée sur un
paradoxe précis — indexation confirmée mais aucune visibilité utile — et
conduit à une décision par groupe de pages, alors que les pages existantes
traitent la non-visibilité générale, la baisse, le délai ou le contenu d'un
audit.

## 3. Demande et vocabulaire du lecteur

Questions observées le 23 juillet 2026 :

- pourquoi mon site est indexé mais n'a pas de trafic ?
- pourquoi mes pages sont dans Google mais ne se positionnent pas ?
- combien de temps après indexation avant d'avoir des visiteurs ?
- zéro impression dans Search Console, est-ce normal ?
- faut-il réécrire, supprimer ou fusionner une page ?
- la commande `site:` prouve-t-elle l'indexation ?
- pourquoi une autre page apparaît à la place ?

Recherche principale : `site indexé mais pas de trafic`. Variantes :
`page indexée mais pas de clic`, `site indexé mais pas visible`,
`page indexée ne se positionne pas`, `search console zéro impression` et
`google page indexée sans visite`.

Le lecteur dit souvent « Google voit mon site » ou « mon site est référencé ».
Le guide doit partir de ces mots et établir quatre niveaux simples :

1. l'URL est dans l'index ;
2. elle produit une impression lorsqu'elle apparaît dans un résultat ;
3. une personne clique ;
4. la visite contribue éventuellement à une action métier.

Limite : l'observation SERP est qualitative et ne fournit aucun volume. Les
requêtes réelles de chaque site doivent être lues dans sa propre Search
Console. Aucune intention ou demande ne peut être déduite du seul nombre d'URL
indexées.

## 4. Carte concurrentielle

| Page | Réponse et angle | Preuves/artefacts | Bon point | Manque décisionnel | Conflit d'intérêt éventuel |
| ---- | ---------------- | ----------------- | --------- | ------------------ | -------------------------- |
| [Frédéric Kabouche — site indexé mais ne se positionne pas](https://www.frederic-kabouche.com/blog/site-indexe-mais-ne-se-positionne-pas/) | Causes possibles de non-positionnement | Explications de consultant | Nomme précisément le problème | Peu de segmentation reproductible page/requête et de verdict par groupe | Consultant SEO |
| [Google Search Console — rapport Performances](https://support.google.com/webmasters/answer/7576553?hl=fr) | Définition des métriques et dimensions | Documentation primaire | Précise ce qui est réellement mesuré | Ne transforme pas seule les données en décision de contenu | Éditeur du moteur |
| [Google Search Console — tâches courantes](https://support.google.com/webmasters/answer/17010961?hl=fr) | Lecture des tendances et actions usuelles | Conseils officiels | Met l'accent sur impressions/clics et explique le CTR faible | Ne connaît pas l'objectif commercial de la page | Éditeur du moteur |
| [Google Search Central — fonctionnement de la recherche](https://developers.google.com/search/docs/fundamentals/how-search-works?hl=fr) | Exploration, indexation, diffusion | Documentation primaire | Sépare clairement les étapes | Pas un diagnostic prêt à employer par un dirigeant | Éditeur du moteur |
| [France Num — améliorer son référencement](https://www.francenum.gouv.fr/guides-et-conseils/communication-et-publicite/referencement-seo/comment-ameliorer-le-referencement) | Vue générale du SEO pour TPE/PME | Conseils institutionnels | Langage accessible | Trop large pour le cas « indexé sans trafic » ; les délais génériques ne doivent pas devenir une règle | Mission publique, pas de vente SEO directe |

**Angle mort commun :** de nombreuses pages mélangent « indexée », « classée »
et « visible », puis donnent une longue liste de causes. Peu proposent un
registre qui force une décision différente selon les impressions, les requêtes,
les clics et les doublons internes.

**Valeur originale que le guide apportera :** un diagnostic en quatre groupes
de pages, sans seuil universel, avec un artefact page-requête et une décision
datée : attendre, améliorer, différencier, fusionner ou retirer.

## 5. Fiche de preuves

| Affirmation utilisable | Source primaire, URL et passage utile | Nature | Périmètre | Date/consultation | Confiance | Emplacement du lien visible | Conséquence lecteur | Fraîcheur |
| ---------------------- | ------------------------------------- | ------ | --------- | ----------------- | --------- | --------------------------- | ------------------- | --------- |
| L'inspection d'URL indique si une URL est présente dans l'index Google et fournit des informations sur la version indexée, dont la canonique sélectionnée | [Search Console, Outil d'inspection d'URL](https://support.google.com/webmasters/answer/9012289?hl=fr) | Fait produit officiel | Propriété Search Console accessible ; données de l'index et test en direct à distinguer | 2026-07-23 | Élevée | Première vérification du diagnostic | Confirmer l'URL exacte et la canonique avant de parler de contenu | Volatile |
| Être indexé ne garantit pas l'affichage pour une requête ni le trafic | [Google Search Central, Fonctionnement de la recherche Google](https://developers.google.com/search/docs/fundamentals/how-search-works?hl=fr), étapes exploration/indexation/diffusion | Déduction directe de la documentation officielle | Recherche Google ; résultats dépendants de nombreux systèmes | 2026-07-23 | Élevée | Réponse d'ouverture | Le paradoxe « indexé mais zéro visite » est possible | À surveiller |
| Le rapport Performances fournit notamment clics, impressions, CTR et position moyenne, analysables par requête, page, pays, appareil, apparence et date | [Search Console, Rapport sur les performances](https://support.google.com/webmasters/answer/7576553?hl=fr) | Fait produit officiel | Données Search Console, filtres et limites propres au rapport | 2026-07-23 | Élevée | Section registre page-requête | Le dirigeant peut séparer absence d'apparition et absence de clic | Volatile |
| La position moyenne varie et les résultats peuvent différer selon l'heure, le lieu, l'appareil et l'historique ; ce n'est pas un rang fixe observé par tous | Même source officielle | Limite métrique officielle | Lecture de la position Search Console | 2026-07-23 | Élevée | Avertissement sur le seuil de position | Ne pas décider à partir d'un seul nombre de position | Volatile |
| Google recommande de regarder les tendances des impressions et clics plutôt que de se concentrer uniquement sur la position | [Search Console, Tâches courantes dans le rapport sur les performances](https://support.google.com/webmasters/answer/17010961?hl=fr) | Recommandation officielle | Analyse Search Console | 2026-07-23 | Élevée | Arbre de décision | Suivre l'évolution d'un groupe de pages après une action | Volatile |
| Un CTR faible peut conduire à revoir le titre, la description ou l'adéquation du contenu à la recherche | Même source officielle | Recommandation officielle, non garantie | Pages qui reçoivent déjà des impressions pertinentes | 2026-07-23 | Élevée | Groupe « impressions sans clics » | Ne pas réécrire tout le contenu si le problème visible est d'abord la promesse du résultat | Volatile |
| Search Console permet actuellement de distinguer ou filtrer des requêtes de marque et hors marque selon les fonctions disponibles | Même source officielle, filtre de marque actuel | Fait produit daté | Fonctionnalité/disponibilité du rapport | 2026-07-23 | Moyenne à élevée | Analyse de la demande utile | Une visibilité de marque ne prouve pas l'acquisition sur des problèmes inconnus | Très volatile |
| Google recommande de créer du contenu utile, fiable et pensé d'abord pour les personnes, avec un objectif principal clair | [Google Search Central, Créer du contenu utile et fiable](https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=fr) | Recommandation officielle | Contenu destiné à la recherche | 2026-07-23 | Élevée | Groupe « requêtes non pertinentes » | Améliorer la réponse pour le lecteur plutôt qu'ajouter mécaniquement des mots | À surveiller |

### Contradictions et données à ne pas publier

- Aucun seuil universel de bonnes impressions, CTR ou position. Le niveau
  dépend de la demande, de la marque, du type de résultat, de l'appareil, de la
  zone et de la valeur métier.
- Ne pas diagnostiquer une « pénalité » sans message, preuve et analyse
  spécifique. Zéro trafic peut provenir d'une faible demande ou d'une page mal
  alignée.
- Ne pas dire que la commande `site:` fournit une liste exhaustive de toutes
  les URL indexées. L'inspection d'URL est la référence pour une URL précise.
- Ne pas promettre un délai après indexation. Une page peut rester sans
  visibilité utile si elle ne répond à aucune demande pertinente ou si une
  autre page est retenue.
- Ne pas recommander de réécrire, fusionner ou supprimer toutes les pages sans
  segmentation et sans plan de redirection/impact.
- Ne pas transformer la position moyenne en rang exact vu par chaque
  internaute.
- Ne pas déduire des conversions ou du chiffre d'affaires du nombre de clics.
- Ne pas présenter les systèmes Google comme une formule maîtrisable ou une
  checklist garantissant la première place.

### Calculs reproductibles

Aucun benchmark ne sera calculé. L'exemple fictif doit apprendre à segmenter :

```text
Groupe A : 20 pages indexées, aucune impression observée sur la période choisie
Groupe B : 12 pages, impressions surtout hors sujet, 3 clics
Groupe C : 8 pages, impressions pertinentes, 0 clic
Groupe D : 5 pages, impressions et clics pertinents, aucune demande suivie

Contrôle :
Nombre total de pages analysées = 20 + 12 + 8 + 5 = 45

Décisions possibles :
A : vérifier période, canonique, demande et liens ; attendre seulement avec date
B : reprendre l'intention ou consolider les pages hors sujet
C : revoir promesse visible et réponse, sans seuil de CTR arbitraire
D : examiner page, offre et suivi de conversion, hors intention centrale du guide
```

- Nature du résultat : inventaire de diagnostic, pas performance attendue.
- Horizon et périodicité : période explicitement choisie dans Search Console,
  comparée à une période précédente pertinente si les données existent.
- Postes inclus une seule fois : chaque URL dans un seul groupe au moment de la
  revue.
- Postes exclus ou inconnus : demandes hors ligne, saisonnalité, changements
  d'algorithme, activité média, historique antérieur et pages non incluses.
- CTR, si illustré : `clics / impressions × 100`, uniquement pour une page ou
  un groupe comparable. Un CTR de 0 % sur très peu d'impressions n'autorise pas
  une conclusion forte.
- Contrôle inverse possible : `impressions × CTR = clics`, en conservant les
  arrondis et en signalant qu'il s'agit d'une métrique descriptive.

## 6. Empreinte éditoriale à ne pas reproduire

| Guide | Type d'ouverture | Progression | Dispositif récurrent | Type d'exemple | Place du CTA | Type de conclusion |
| ----- | ---------------- | ----------- | -------------------- | -------------- | ------------ | ------------------ |
| `pourquoi-site-pas-visible-google` | Site introuvable | Chaîne technique à commerciale | Diagnostic global | Symptômes | Fin | Trouver le maillon |
| `positions-google-baissent` | Perte constatée | Causes de baisse | Comparaison avant/après | Déclin | Fin | Corriger selon cause |
| `combien-de-temps-resultats-seo` | Impatience après travaux | Frise temporelle | Jalons | Site récent/modifié | Tardif | Attendre ou agir |
| `audit-seo-que-contient-il` | Rapport trop vague | Contenu d'audit | Checklist | Livrable | Fin | Commander utilement |

Choix du nouveau guide :

```text
Tension ou question motrice : « 200 URL indexées » paraît rassurant alors que personne ne trouve le site sur une recherche utile
Type d'ouverture retenu et pourquoi : lecture d'un rapport contradictoire, pour clarifier immédiatement indexation et trafic
Progression retenue et pourquoi : diagnostic par données visibles — canonique, impressions, requêtes, clics, chevauchement — puis décision par groupe
Artefact signature : registre page-requête copiable
Rythme/registre de voix : enquête sobre ; une question et une action à la fois
Place naturelle du CTA : après que le lecteur a classé les URL et identifié un groupe qu'il ne peut résoudre seul
Forme de conclusion : tableau de bord de décisions datées, pas promesse de classement
Au moins trois différences avec les guides voisins : commence après indexation confirmée ; matrice par groupe de pages ; aucune frise d'attente centrale ; pas de longue liste de causes ; conclusion URL par URL
```

## 7. Plan annoté

| Section provisoire | Question résolue | Preuve ou exemple | Conséquence/décision | Format choisi |
| ------------------ | ---------------- | ----------------- | -------------------- | ------------- |
| « Indexé » et « visité » ne veulent pas dire la même chose | Le rapport se contredit-il ? | Fonctionnement de Search + définitions | Arrêter de compter l'indexation comme résultat final | Ouverture narrative |
| Vérifiez l'URL et la page choisie par Google | Est-ce la bonne version ? | Inspection d'URL et canonique | Corriger sélection/technique ou poursuivre | Checklist courte |
| Première séparation : aucune impression ou quelques impressions ? | La page apparaît-elle ? | Rapport Performances | Explorer demande, période, requêtes et liens | Deux cartes |
| Lisez les recherches réelles avant de réécrire | La page répond-elle au bon besoin ? | Dimensions requête/page ; contenu utile | Garder, différencier ou réorienter | Exemples de requêtes fictifs |
| Impressions pertinentes mais aucun clic | La promesse visible est-elle choisie ? | Recommandation Google sur CTR/titre/contenu | Réécrire titre/promesse honnête et observer | Avant/après, sans garantie |
| Deux pages répondent-elles à la même décision ? | Le site se concurrence-t-il lui-même ? | Registre page-requête | Différencier ou consolider avec précautions | Comparaison à deux pages |
| Attendre n'est une décision que si elle a une date et un signal | Quand laisser du temps ? | Tendances impressions/clics | Fixer une revue et une hypothèse | Carte décisionnelle |
| Remplissez votre registre page-requête | Comment agir sans audit complet ? | Artefact inline | Décision par URL/groupe | Tableau copiable |
| Garder, améliorer, regrouper ou retirer | Quel verdict final ? | Quatre groupes fictifs | Créer un backlog priorisé | Conclusion |
| Questions restantes | Cas résiduels | Sources et liens internes | Orientation claire | FAQ |

FAQ prévue :

1. **Une page indexée peut-elle ne jamais apparaître pour ma requête ?** Oui :
   l'indexation ne garantit ni diffusion pour une recherche précise ni position.
2. **La commande `site:` prouve-t-elle l'indexation ?** Elle peut donner un
   indice, mais elle n'est pas exhaustive ; utilisez l'inspection d'URL pour
   vérifier une URL précise.
3. **Zéro impression signifie-t-il que le SEO est mauvais ?** Pas à lui seul :
   vérifiez période, filtres, canonique, demande, intention et page analysée.
4. **Faut-il réécrire toutes les pages ?** Non : classez-les d'abord, car une
   page sans impression et une page affichée sans clic ne posent pas la même
   question.
5. **Combien de temps faut-il attendre ?** Il n'existe pas de délai universel ;
   fixez une période cohérente avec votre site et une date de revue, puis
   observez les tendances plutôt qu'une promesse de calendrier.

## 8. Ressource et conversion

```text
Une ressource est-elle naturellement nécessaire ? Non en téléchargement en P1 ; oui comme registre copiable dans la page
Problème qu'elle résout après la lecture : passer d'un nombre global d'URL indexées à des décisions page par page
Résultat autonome produit : un backlog garder/améliorer/différencier/regrouper/retirer avec date de revue
Format éditable et format de consultation : tableau HTML/Markdown copiable ; aucune ressource à télécharger annoncée
Rubriques, champs ou matrices réellement livrés : URL, date d'inspection, canonique choisie, indexée oui/non, période, impressions, clics, requêtes pertinentes, marque/hors marque si disponible, page chevauchante, rôle métier, décision, responsable, date de revue
Exemple rempli : groupe fictif, sans données client ni seuil
Conclusion « ne pas investir » possible : oui, si la demande n'existe pas ou si la page n'a aucun rôle utile à conserver
Sources, hypothèses et limites visibles : définitions Google et période de données affichées
Données saisies et destination de ces données : aucune collecte par Hagnéré Code ; copie dans l'outil du lecteur
Processus de génération reproductible : modèle statique et règles de classement
Journal de QA (formats, pages, visuel, accessibilité, liens, compatibilité) : produit en P4 ; synthèse en section 12
Limites connues et niveau de revue humaine : le registre oriente, il ne remplace pas l'accès au site, aux données et au contexte commercial
Mode de maintenance : documentation Search Console revue en P3/P4 puis au moins annuellement
Test du fichier ou outil : copie, formule et lecture mobile contrôlées en P4
Bon fit Hagnéré Code : URL indexées, données Search Console disponibles, offre claire et besoin de prioriser des corrections
Mauvais fit : URL non indexées, chute depuis une base historique, action manuelle connue, absence d'accès aux données ou attente d'une garantie de classement
Action non commerciale : classer dix URL prioritaires et fixer une date de revue
CTA principal et résultat après clic : « Identifier les pages à garder, améliorer ou regrouper » vers /demarrer-un-projet ; le clic ouvre le cadrage d'un diagnostic
```

Maillage prévu : `/services/referencement-google`,
`/guides/pourquoi-site-pas-visible-google`,
`/guides/positions-google-baissent`,
`/guides/combien-de-temps-resultats-seo` et
`/guides/audit-seo-que-contient-il`.

## 9. Rapports de sortie des quatre passes

### Rapport P1 — Recherche

```text
PASSE 1 TERMINÉE
Slug : site-indexe-sans-trafic
Lecteur et phrase réelle : dirigeant avec URL indexées et zéro visite utile ; « problème technique, contenu ou attente ? »
Décision : garder, attendre avec date, améliorer, différencier, regrouper ou retirer par groupe d'URL
Angle et forme dominante : partir du paradoxe « indexé sans trafic », puis classer par données Search Console
Pages proches et différence : diagnostic général, baisse, délai et audit existent ; ce guide démarre seulement après indexation confirmée
Sources décisives : inspection d'URL, rapport Performances, tâches courantes, fonctionnement de Search et contenu utile de Google
Incertitudes exclues : seuils universels, pénalité supposée, délai garanti, commande site: exhaustive, trafic/conversion promis
Action autonome et CTA possible : registre page-requête copiable ; CTA de diagnostic vers /demarrer-un-projet
Plan : définition, canonique, impressions, requêtes, clics, chevauchement, attente datée, registre, verdict
Snapshot : dossier P1 achevé ; hash/manifeste à consigner par l'orchestrateur
```

### Rapport P2 — Rédaction et intégration

```text
P2 TERMINÉE LE 24 JUILLET 2026.
Article rédigé et intégré ; rapport détaillé et snapshot en section 12.
```

### Rapport P3 — Contre-audit indépendant

```text
P3 TERMINÉE LE 24 JUILLET 2026.
Contre-audits final_audit_marketing, anti_ia_final et seo_tech_final consignés en section 12.
```

### Rapport P4 — Plume humaine et contrôle final

```text
P4 TERMINÉE LE 24 JUILLET 2026.
Contrôles de rendu, tests, build et validation éditoriale consignés en section 12.
```

## 10. Historique P1 — revue préparatoire du 23 juillet 2026

> Cette scorecard et les cases ci-dessous photographient l’état avant rédaction.
> Elles ne décrivent plus le statut courant, établi en section 12.

### Scorecard préparatoire conservée

| Axe         | Note 0-2 | Preuve dans la page | Correction éventuelle |
| ----------- | -------: | ------------------- | --------------------- |
| Intention   | — | État P1 : texte à rédiger | Confirmer indexation avant d'entrer dans le guide |
| Décision    | — | État P1 : texte à rédiger | Décision datée par groupe d'URL |
| Pédagogie   | — | État P1 : texte à rédiger | Tester les quatre niveaux avec un dirigeant |
| Profondeur  | — | État P1 : texte à rédiger | Canonique, demande, requête, clic, doublon |
| Preuve      | — | État P1 : texte à rédiger | Revérifier Search Console |
| Comparaison | — | État P1 : texte à rédiger | Comparer les groupes, pas des seuils |
| Originalité | — | État P1 : texte à rédiger | Conserver le registre page-requête |
| Style       | — | État P1 : texte à rédiger | Éliminer jargon et listes de causes |
| Conversion  | — | État P1 : texte à rédiger | Action autonome avant CTA |
| SEO/produit | — | État P1 : texte à rédiger | Vérifier intégration, maillage et metadata |

### Test lecteur non technique

```text
État historique P1 — test par une personne réelle : non
Profil du lecteur : dirigeant ayant accès à Search Console sans expertise SEO
Ce qu'il a compris comme réponse : à renseigner
Décision qu'il prendrait : à renseigner
Endroit où il a commencé à survoler : à renseigner
Passage crédible ou trop commercial : à renseigner
Termes ou passages bloquants : à renseigner
Questions encore sans réponse : à renseigner
Corrections appliquées : à renseigner
```

### Contre-audit indépendant

```text
État historique P1 — auteur du contre-audit : non désigné à cette date
Indépendant de la rédaction : à garantir
Réserves sur les sources et calculs : à établir
Réserves sur la clarté et le plan : à établir
Réserves sur la conversion : à établir
Corrections ou justification : à renseigner
État au 23 juillet 2026 : P1 — recherche validée
```

### Vérifications historiques P1

- [ ] les 150 premiers mots réels passent le contrat humain ;
- [ ] chaque H2 est compris hors contexte ;
- [ ] cinq phrases abstraites sont réécrites sur le brouillon ;
- [x] aucun mur de lexique n'est prévu ;
- [ ] arbre/cartes testés à 390 px ;
- [ ] FAQ et CTA contrôlés dans la page ;
- [x] faits et fraîcheur vérifiés en P1 le 23 juillet 2026 ;
- [x] calcul de groupes refait et sans benchmark ;
- [x] exemples fictifs identifiés ;
- [x] aucun seuil, taux ou résultat décisif non sourcé n'est retenu ;
- [x] aucune pénalité ou situation extrême n'est inventée ;
- [ ] aucune trace d'audit visible dans l'article ;
- [x] empreinte distincte des guides voisins ;
- [x] aucune ressource téléchargeable inexistante promise ;
- [ ] metadata, données structurées, registre, maillage et ancres cohérents ;
- [ ] TypeScript, ESLint, tests et build passés ;
- [ ] rendu observé aux largeurs prescrites ;
- [x] aucune publication ou indexation déclarée en P1.

## 12. Validation finale P2, P3 et P4 — 24 juillet 2026

### Rapport P2 — Rédaction et intégration

- Article complet intégré sur `/guides/site-indexe-sans-trafic`, avec ouverture
  destinée au dirigeant, distinction indexation/impression/clic/demande,
  sources Search Console, cas fictif signalé, FAQ, maillage et CTA unique.
- Métadonnées, données structurées `Article` et `BreadcrumbList`, image sociale
  dédiée et inscription au registre des guides contrôlées.
- Snapshot : `docs/research/manifests/site-indexe-sans-trafic-p2.sha256`.

### Rapport P3 — Contre-audits et corrections

- `final_audit_marketing` : contre-audit indépendant des définitions Search
  Console, des calculs, des décisions éditoriales et de la pédagogie dirigeant.
- `anti_ia_final` : passe de plume humaine, suppression des formulations
  mécaniques et vérification de la réponse dans l'ouverture.
- `seo_tech_final` : contrôle indépendant de l'intégration SEO et technique.
- Le cas des 200 pages est explicitement annoncé comme fictif et la différence
  clic/visite reste explicite. Aucun P0 ni P1 ne reste.
- Snapshot :
  `docs/research/manifests/site-indexe-sans-trafic-p3.sha256`.

### Rapport P4 — Contrôle final du lot

- 55 tests ciblés, `check:seo` 228, suite générale 453, TypeScript, ESLint et
  `diff-check` : validés.
- Build : 159 pages générées.
- Audit d'artefact : 143 URLs, 126 liens, 143 pages, 101 temps de lecture et
  274 blocs JSON-LD contrôlés.
- Navigateur réel : 10 routes × 5 largeurs = 50 contrôles, thèmes clair et
  sombre compris.
- Images sociales : 10/10 au format 1200 × 630.
- Snapshot P4 :
  `docs/research/manifests/site-indexe-sans-trafic-p4.sha256`.

### Verdict

**Score final : 19/20.** Le fond, la pédagogie, les définitions, les sources,
la conversion et l'intégration sont validés. Un point reste volontairement
retiré car aucun lecteur humain réel indépendant n'a participé au test final.

Statut actuel : publiable — validation éditoriale déléguée

Décision de publication : autorisée explicitement par le commanditaire

Test réalisé par une personne réelle : non

Réserve SEO : la page est techniquement indexable ; indexable ne signifie pas
indexée par Google, et aucune indexation effective ni position n'est promise.
