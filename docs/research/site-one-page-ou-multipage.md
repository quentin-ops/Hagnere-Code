# Dossier de recherche — Site one page ou site multipage

> Dossier de preuve des quatre passes. Recherche, rédaction, contre-audit,
> validation éditoriale déléguée et contrôle technique P4 sont terminés. Le
> choix d'un site durable est déjà supposé acquis : ce guide ne
> compare pas une landing page publicitaire à un site vitrine, mais répartit
> les offres, questions et éléments qui rassurent entre une seule page et
> plusieurs adresses.

## Journal des quatre passes

Propriétaire éditorial unique : `/root`

| Passe                        | État                      | Date            | Responsable                                | Snapshot                                                       | Blocages                                                                          |
| ---------------------------- | ------------------------- | --------------- | ------------------------------------------ | -------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 1. Recherche                 | Terminée — porte validée  | 23 juillet 2026 | `/root/research_marketing_tma_site_batch2` | `docs/research/manifests/site-one-page-ou-multipage-p1.sha256` | Aucun, sous réserve de respecter la frontière avec `landing-page-ou-site-vitrine` |
| 2. Rédaction et intégration  | Terminée — porte P2 prête | 23 juillet 2026 | `/root`                                    | `docs/research/manifests/site-one-page-ou-multipage-p2.sha256` | Aucun                                                                             |
| 3. Contre-audit indépendant  | Terminée — porte validée  | 23 juillet 2026 | `/root/p3_saas_evolution`                  | `docs/research/manifests/site-one-page-ou-multipage-p3.sha256` | Aucun                                                                             |
| 4. Plume humaine et contrôle | Terminée — porte validée  | 23 juillet 2026 | `/root`                                    | `docs/research/manifests/site-one-page-ou-multipage-p4.sha256` | Aucun                                                                             |

### Manifeste du snapshot

La recherche P1 reste conservée dans son manifeste historique. Le snapshot P2
intégré est enregistré dans
`docs/research/manifests/site-one-page-ou-multipage-p2.sha256` ; ses six
empreintes ont été contrôlées exactes lors du premier contre-audit.

## 1. Fiche d'identité

```text
Slug : site-one-page-ou-multipage
Statut actuel : publiable — validation éditoriale déléguée
Requête principale : site one page ou multipage
Moment du parcours : décider et structurer
Lecteur précis : dirigeant ou indépendant qui a choisi de créer ou refaire un site vitrine durable et doit décider si tout tient honnêtement sur une page
Situation déclenchante : il pense économiser avec une seule page, ou craint qu'un site de plusieurs pages soit inutilement complexe, mais ses offres et les questions de ses prospects ne tiennent pas toutes dans la même conversation
Décision principale après lecture : regrouper sur une page ce qui répond à la même intention et mène à la même action ; séparer en URL distinctes ce qui répond à une autre question, une autre offre ou une autre étape de décision
Niveau de connaissance au départ : comprend la notion de page web, ne maîtrise pas nécessairement l'indexation, les titres ou le maillage interne
5 questions indispensables : une page peut-elle être professionnelle et trouvée ? quand une deuxième page devient-elle utile ? faut-il une page par service ? comment éviter un menu artificiel ? comment faire évoluer le site ensuite ?
3 objections ou craintes : « Une seule page ne se référence pas » ; « Plus de pages signifie forcément plus de visibilité » ; « Un site multipage va coûter et devenir impossible à maintenir »
Action utile sans contact commercial : transformer les offres et questions réelles des prospects en une carte de pages avec une règle explicite de regroupement ou séparation
CTA possible : préparer une demande de premier retour sur l'architecture avant le design et le développement, sans promettre une validation automatique
Hors périmètre : landing page de campagne contre site vitrine, template contre sur-mesure, rédaction complète des contenus, prix du site, nombre universel de pages, tutoriel SEO
Date de la recherche : 23 juillet 2026
Responsable de la synthèse : /root/research_marketing_tma_site_batch2
```

## 1 bis. Contrat de langage humain

- Phrase exacte que le lecteur pourrait dire au téléphone : « J'ai trois
  services à présenter. Est-ce que je mets tout sur une seule page ou est-ce
  que je dois faire un vrai site avec plusieurs pages ? »
- Réponse qu'il attend en une phrase : gardez une page si vous parlez à la même
  personne, répondez à la même question et proposez la même action ; créez
  plusieurs pages quand les offres ou les décisions méritent des réponses
  autonomes.
- Terme central expliqué sans jargon : une URL est l'adresse propre d'une page ;
  elle peut avoir son titre, son contenu et ses liens.
- Mots ordinaires employés par le lecteur : page d'accueil, service, menu,
  question, tarif, exemple, contact, devis, portfolio, site simple, faire
  évoluer.
- Mots d'agence ou de consultant à éviter : silo, cocon sémantique, autorité
  topique, profondeur de crawl, page pilier, UX narrative sans traduction.
- Projet des 150 premiers mots : poser les trois services du lecteur sur la
  table, donner la règle même personne/même question/même action, montrer une
  première carte de trois pages, puis annoncer les exceptions.
- Ce que le lecteur saura décider après ces 150 mots : s'il doit réellement
  séparer une offre ou conserver une seule page cohérente.
- H2 relus isolément : validés en P2.
- Comparaison comprise à 390 px sans colonne masquée : validée dans le navigateur en P4.
- FAQ dont la première phrase répond : validée en P2.
- CTA formulé comme résultat pour le prospect : préparer une demande de
  relecture et recevoir une première orientation personnalisée, sans validation
  automatique complète.

### Test sujet, action, résultat

Test effectué en P2 sur l’ouverture, la règle de regroupement, l’exemple
one-page, l’exemple multipage et le CTA. Chaque passage désigne l’entreprise ou
le prospect, une action observable et son résultat. L’expression abstraite
« renforcer la profondeur sémantique » a été exclue : l’entreprise crée une
page qui répond à la question d’un prospect et lui propose l’étape suivante.

### Test de l'ouverture

- [x] les offres et questions du dirigeant précèdent le SEO ;
- [x] URL est expliquée au premier usage ;
- [x] aucun lexique SEO ne retarde le verdict ;
- [x] aucune métaphore structurante n'est prévue ;
- [x] la réponse ne prétend pas qu'un format gagne dans tous les cas.

## 2. Cannibalisation

| Page existante                           | Intention de cette page                                                                                | Différence du nouveau guide                                                                 | Lien ou arbitrage nécessaire                                                                        |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `/guides/landing-page-ou-site-vitrine`   | Choisir entre une page de campagne concentrée et un site durable capable d'expliquer plusieurs besoins | Structurer le site durable après ce premier choix : une seule URL longue ou plusieurs pages | Frontière obligatoire dès l'introduction ; lien au lecteur qui hésite encore entre campagne et site |
| `/guides/template-ou-site-sur-mesure`    | Choisir la base de production et le niveau de personnalisation                                         | Choisir l'architecture de contenu indépendamment de la technologie                          | Ne pas aborder CMS, composants ou sur-mesure                                                        |
| `/guides/preparer-contenus-site-vitrine` | Réunir les informations et preuves avant production                                                    | Transformer les offres et questions déjà collectées en pages                                | Lier vers la collecte des contenus ; ne pas refaire son inventaire                                  |
| `/services/sites-vitrines`               | Présenter l'offre de conception de sites vitrines                                                      | Donner une méthode autonome de cartographie                                                 | CTA uniquement après la carte                                                                       |

**Justification d'une URL distincte :** après avoir choisi un site vitrine
durable, le lecteur doit encore décider comment répartir ses contenus entre une
seule URL et plusieurs pages ; cette décision architecturale n'est pas le sujet
central du guide landing page/site vitrine.

**Verdict de cannibalisation :** risque élevé mais maîtrisable. Le futur guide
est autorisé uniquement s'il :

1. suppose le site durable déjà choisi ;
2. ne redéfinit pas longuement landing page et site vitrine ;
3. produit une architecture concrète à partir d'offres et de questions ;
4. n'emploie pas une liste générique d'avantages/inconvénients comme forme
   principale.

Si ces quatre règles ne sont pas tenues en P2, il faudra enrichir
`landing-page-ou-site-vitrine` au lieu de créer la nouvelle URL.

## 3. Demande et vocabulaire du lecteur

Observation manuelle de résultats français le 23 juillet 2026, sans outil de
volume, pour :

- `site one page ou multipage choisir SEO entreprise France` ;
- `"site one page ou multipage" entreprise` ;
- `site monopage ou multipage professionnel` ;
- `une page ou plusieurs pages site vitrine services`.

Questions et formulations visibles :

- site one page ou site multipage : lequel choisir ?
- avantages et inconvénients ;
- quel format est meilleur pour le SEO ?
- un site one page est-il professionnel ?
- combien de pages faut-il pour un site vitrine ?
- faut-il une page par service ?
- comment faire évoluer le site ?

La SERP est dominée par des comparatifs d'agences et de constructeurs. Leur
structure est très reconnaissable : définition, avantages, inconvénients,
tableau, verdict. Plusieurs assimilent site one page et landing page, ou
attribuent à chaque page « un mot-clé » sans nuance. Aucun volume n'a été
mesuré ; la décision de produire repose sur l'utilité pour le parcours de vente
et la possibilité de créer une approche différente.

Champ lexical humain à privilégier : offre, service, question du prospect,
preuve, page, menu, adresse, titre, lien, demande de devis, même public,
action différente, évolution future, personne responsable du contenu.

## 4. Carte concurrentielle

| Page                                                                                                                               | Réponse et angle                                                   | Preuves/artefacts        | Bon point                                  | Manque décisionnel                                                                        | Conflit d'intérêt éventuel |
| ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ------------------------ | ------------------------------------------ | ----------------------------------------------------------------------------------------- | -------------------------- |
| [Grow Digitale — site one page ou multipages](https://growdigitaleagence.fr/site-one-page-ou-multi-pages/)                         | Définitions, avantages, inconvénients et tableau                   | Comparatif               | Réponse accessible                         | Ne transforme pas les offres du lecteur en architecture                                   | Agence web                 |
| [HTMC — site one page vs multipages](https://htmcagency.com/blog/site-one-page-vs-site-multi-pages/)                               | Comparaison et quiz/score                                          | Grille de choix          | Interaction décisionnelle                  | Certaines règles universelles sur mots clés et potentiel ne sont pas suffisamment fondées | Agence web                 |
| [SiteW — site multipages vs monopage](https://www.sitew.com/Comment-modifier-un-site/Site-multipages-vs-site-monopage)             | Présente les deux formats aux créateurs de sites                   | Exemples de construction | Pédagogie grand public                     | Orienté outil et avantages généraux, pas questions commerciales réelles                   | Éditeur de site            |
| [Stolia — site one page vs site multipage](https://www.stolia.fr/site-vitrine/site-one-page-vs-site-multipage)                     | Comparatif pour projet de site vitrine                             | Conseils d'agence        | Intention proche                           | Reste dans le format pros/cons, avec peu d'artefact réutilisable                          | Agence web                 |
| [Google Search Central — guide SEO pour débutants](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=fr) | Explique organisation logique, URL descriptives, contenus et liens | Documentation officielle | Cadre solide sans nombre de pages prescrit | Ne donne pas une architecture commerciale prête à l'emploi                                | Google opère le moteur     |

**Angle mort commun :** les pages comparent deux formats abstraits et donnent
un verdict selon la taille de l'entreprise, le budget ou le SEO. Elles montrent
rarement comment passer de trois offres et dix questions de prospects à une
carte de pages défendable. Certaines transforment une possibilité
d'organisation en promesse de classement.

**Valeur originale que le guide apportera :** une méthode de cartographie en
huit champs : Offre, Public, Question, Preuve, Action, Personne responsable,
Mise à jour et Décision. Deux éléments restent ensemble seulement si la réponse
et l'action attendues sont réellement les mêmes.

## 5. Fiche de preuves

| Affirmation utilisable                                                                                           | Source primaire, URL et passage utile                                                                                                    | Nature                             | Périmètre                         | Date/consultation | Confiance | Emplacement du lien visible                      | Conséquence lecteur                                               | Fraîcheur                  |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | --------------------------------- | ----------------- | --------- | ------------------------------------------------ | ----------------------------------------------------------------- | -------------------------- |
| Une organisation logique du site aide les utilisateurs et les moteurs à comprendre les relations entre les pages | [Google Search Central — guide SEO pour débutants](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=fr)       | Documentation officielle           | Organisation générale d'un site   | 23/07/2026        | Élevée    | Partie architecture                              | Donner un rôle clair à chaque page                                | Revoir annuellement        |
| Des URL descriptives peuvent aider les utilisateurs à comprendre le contenu d'un résultat                        | [Google Search Central — guide SEO pour débutants](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=fr)       | Documentation officielle           | URL des pages                     | 23/07/2026        | Élevée    | Exemple de carte                                 | Nommer les pages par leur réponse, pas par `page-2`               | Revoir annuellement        |
| Un contenu utile doit être lisible, bien organisé et découpé par des titres qui facilitent la navigation         | [Google Search Central — guide SEO pour débutants](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=fr)       | Documentation officielle           | Contenu d'une page                | 23/07/2026        | Élevée    | Cas one page                                     | Une page longue reste possible si elle reste claire               | Revoir annuellement        |
| Les liens explorables permettent à Google de découvrir d'autres pages et leur texte d'ancrage donne du contexte  | [Google Search Central — liens explorables](https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=fr)           | Documentation officielle           | Navigation et liens               | 23/07/2026        | Élevée    | Partie multipage                                 | Relier les pages selon le parcours, pas seulement remplir le menu | Revoir annuellement        |
| Un titre de page clair et propre à son contenu peut contribuer au lien de titre affiché dans les résultats       | [Google Search Central — guide SEO pour débutants](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=fr)       | Documentation officielle           | Titres de pages                   | 23/07/2026        | Élevée    | Partie « ce qu'une URL distincte permet »        | Chaque réponse autonome peut être nommée précisément              | Revoir annuellement        |
| Des titres et libellés descriptifs aident les utilisateurs à comprendre le sujet ou le but des contenus          | [W3C WAI — comprendre le critère Headings and Labels, WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html)    | Standard et explication officielle | Accessibilité des titres/libellés | 23/07/2026        | Élevée    | Partie lisibilité                                | Ne pas compenser une architecture confuse avec des titres vagues  | Stable, surveiller version |
| Après l'exploration, Google analyse le contenu d'une page et peut tenter de le stocker dans son index            | [Google Search Central — fonctionnement de Google Search](https://developers.google.com/search/docs/fundamentals/how-search-works?hl=fr) | Documentation officielle           | Exploration et indexation         | 23/07/2026        | Élevée    | Définition de l'indexation                       | Expliquer le terme sans confondre stockage et affichage garanti   | Revoir annuellement        |
| Une page techniquement accessible peut être éligible à l'indexation, sans garantie d'indexation ou de classement | [Google Search Central — prérequis techniques](https://developers.google.com/search/docs/essentials/technical?hl=fr)                     | Documentation officielle           | Éligibilité technique             | 23/07/2026        | Élevée    | Encadré « une page peut-elle être référencée ? » | Répondre oui, sans promesse de résultat                           | Revoir annuellement        |

### Contradictions et données à ne pas publier

- Google ne prescrit aucun nombre idéal de pages dans les sources consultées.
- Ne pas écrire « une page = un mot-clé » ni « plusieurs pages = mots-clés
  illimités ».
- Un site multipage ne se positionne pas mieux automatiquement. Chaque URL
  donne seulement la possibilité de fournir une réponse, un titre et des liens
  distincts.
- Un site one page peut être techniquement indexable ; sa pertinence dépend de
  la cohérence de l'offre, du contenu, de l'expérience et du parcours.
- Ne pas inventer un seuil de deux, trois ou cinq services, un nombre de mots,
  un prix ou un délai universel.
- Ne pas assimiler systématiquement un site one page à une landing page de
  campagne.
- Ne pas affirmer que le défilement est meilleur ou pire que les clics sans
  données propres au site.
- L'éligibilité à l'indexation n'est ni une indexation certaine ni une position.

### Calculs reproductibles

Aucun calcul financier n'est requis. La méthode de regroupement sera
reproductible :

| Champ                | Question                                                    |
| -------------------- | ----------------------------------------------------------- |
| Offre                | Quel résultat précis est vendu ?                            |
| Public               | Qui doit se reconnaître ?                                   |
| Question             | Quelle question principale cette personne pose-t-elle ?     |
| Preuve               | Quel exemple, résultat ou élément rassure sur cette offre ? |
| Action               | Quelle étape doit-elle pouvoir entreprendre ?               |
| Personne responsable | Qui maintient cette information ?                           |
| Mise à jour          | À quelle occasion doit-elle être revue ?                    |
| Décision             | Faut-il regrouper, séparer, préparer ou reporter ?          |

Règle éditoriale :

- regrouper si public, question, réponse et action sont identiques ;
- séparer si l'un de ces éléments change assez pour exiger une réponse
  autonome ;
- ne pas créer une page sans contenu utile, preuve ou action propre ;
- ne pas fusionner seulement pour réduire le coût si le lecteur doit démêler
  plusieurs conversations.

## 6. Empreinte éditoriale à ne pas reproduire

| Guide                            | Type d'ouverture                      | Progression                                   | Dispositif récurrent | Type d'exemple         | Place du CTA  | Type de conclusion    |
| -------------------------------- | ------------------------------------- | --------------------------------------------- | -------------------- | ---------------------- | ------------- | --------------------- |
| `landing-page-ou-site-vitrine`   | Choix entre campagne et actif durable | Définitions, nombre de questions, comparaison | Tableau de formats   | Offre/campagne         | Après verdict | Format selon objectif |
| `template-ou-site-sur-mesure`    | Choix de base technique               | Contraintes puis niveaux de personnalisation  | Comparatif           | Site professionnel     | Fin           | Base adaptée          |
| `preparer-contenus-site-vitrine` | Informations manquantes               | Collecte structurée                           | Dossier de contenus  | Entreprise de services | Fin           | Prêt à produire       |
| Page service sites vitrines      | Besoin de présence professionnelle    | Offre, méthode, fonctionnalités               | Blocs commerciaux    | Cas généraux           | Répété        | Prendre contact       |

Choix du nouveau guide :

```text
Tension ou question motrice : les prospects posent-ils une seule conversation ou plusieurs questions qui méritent chacune leur page ?
Type d'ouverture retenu et pourquoi : trois offres et cinq questions écrites sur des cartes, puis regroupées devant le lecteur
Progression retenue et pourquoi : règle courte -> cartographie -> construction one page -> construction multipage -> cas hybride -> plan final
Artefact signature : carte Offre / Public / Question / Preuve / Action / Personne responsable / Mise à jour / Décision
Rythme/registre de voix : atelier guidé, phrases concrètes, décisions visibles à chaque regroupement
Place naturelle du CTA : après que le lecteur a produit sa première carte et voit les arbitrages restants
Forme de conclusion : deux architectures remplies pour la même entreprise, avec la raison du choix
Au moins trois différences avec les guides voisins : le site durable est déjà choisi ; aucune liste générique pros/cons ; la forme dominante est un atelier d'architecture ; un cas hybride est admis ; la conclusion montre des URL concrètes
```

## 7. Plan annoté

| Section provisoire                                          | Question résolue                                | Preuve ou exemple                                                             | Conséquence/décision                     | Format choisi           |
| ----------------------------------------------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------- | ---------------------------------------- | ----------------------- |
| Une page ou plusieurs : la règle la plus utile              | Comment décider vite ?                          | Même public/question/action contre réponses distinctes                        | Première séparation                      | Réponse directe         |
| Écrivez les offres et questions avant de dessiner le menu   | De quoi part l'architecture ?                   | Questions réellement entendues en rendez-vous                                 | Éviter les pages institutionnelles vides | Atelier                 |
| Construisez une carte en huit champs                        | Comment rendre le choix reproductible ?         | Offre/public/question/preuve/action/personne responsable/mise à jour/décision | Produire une liste de pages candidates   | Tableau à remplir       |
| Une seule page suffit quand la conversation reste cohérente | Dans quel cas rester one page ?                 | Un professionnel, une offre principale, preuves et action communes            | Garder une page sans complexe            | Exemple complet         |
| Plusieurs pages deviennent utiles quand la réponse change   | Quand séparer ?                                 | Trois services avec objections et preuves différentes                         | Créer une URL autonome                   | Exemple complet         |
| Un site peut commencer simple et s'étendre proprement       | Faut-il tout construire immédiatement ?         | Accueil synthétique + première page service + plan d'évolution                | Éviter le faux choix tout ou rien        | Scénario progressif     |
| Ce que le SEO change — et ce qu'il ne garantit pas          | Pourquoi les URL distinctes comptent-elles ?    | Titres, contenus, liens propres                                               | Comprendre l'opportunité sans promesse   | Encadré source          |
| Testez l'architecture comme un prospect                     | Le menu et les pages sont-ils compréhensibles ? | Trois tâches sans explication orale                                           | Corriger avant développement             | Test utilisateur simple |
| Bon fit, mauvais fit et accompagnement                      | Quand demander de l'aide ?                      | Offre stabilisée, preuves, responsables                                       | Conversion honnête                       | Deux encadrés           |
| FAQ                                                         | Répondre aux objections                         | Sources et limites                                                            | Fermer les raccourcis                    | FAQ courte              |

## 8. Ressource et conversion

```text
Une ressource est-elle naturellement nécessaire ? non
Problème qu'elle résout après la lecture : transformer les offres et questions en une architecture
Résultat autonome produit : carte de pages réalisable depuis le tableau affiché
Format éditable et format de consultation : tableau HTML à recopier ; aucune promesse de téléchargement
Rubriques, champs ou matrices réellement livrés : Offre, Public, Question, Preuve, Action, Personne responsable, Mise à jour, Décision regrouper/séparer
Exemple rempli : entreprise proposant site vitrine, application métier et maintenance, avec page d'accueil synthétique puis trois pages car les questions, preuves et actions diffèrent
Conclusion « ne pas investir » possible : oui, si l'offre et les contenus ne sont pas assez définis pour justifier les pages
Sources, hypothèses et limites visibles : oui
Données saisies et destination de ces données : aucune donnée saisie
Processus de génération reproductible : sans objet
Journal de QA : à réaliser en P4
Limites connues et niveau de revue humaine : la carte doit être testée avec de vraies questions de prospects
Mode de maintenance : revue lorsque l'offre, le public ou les actions commerciales changent
Test du fichier ou outil : sans objet
Bon fit Hagnéré Code : entreprise avec plusieurs offres ou questions réelles, preuves disponibles et volonté de maintenir les pages
Mauvais fit : demande de multiplier les pages uniquement pour « mettre des mots-clés », sans contenu, preuve ni propriétaire
Action non commerciale : remplir les huit champs pour chaque offre et expliquer chaque séparation en une phrase
CTA principal et résultat après clic : ouvrir un brief guidé d'environ trois minutes pour préparer une demande de relecture ; l'équipe vise un premier retour personnalisé pendant le jour ouvré suivant, sans délai garanti, gratuit et sans engagement ; ce retour indique la prochaine étape utile sans promettre une validation automatique complète
```

## 9. Rapports de sortie des quatre passes

### Rapport P1 — Recherche

```text
PASSE 1 TERMINÉE
Slug : site-one-page-ou-multipage
Lecteur et phrase réelle : dirigeant — « J'ai plusieurs services : une seule page ou plusieurs ? »
Décision : regrouper ce qui répond à la même conversation et séparer les réponses autonomes
Angle et forme dominante : atelier transformant offres et questions en carte d'URL
Pages proches et différence : landing-page-ou-site-vitrine choisit le type d'actif ; ce guide structure le site durable déjà choisi
Sources décisives : Google Search Central sur organisation, URL, contenus, titres et liens ; W3C sur titres descriptifs
Incertitudes exclues : nombre idéal de pages, mots-clés par page, prix, délai et gain de position
Action autonome et CTA possible : matrice en huit champs ; demande de premier retour sur l'architecture avant développement
Plan : règle, questions, carte, one page, multipage, évolution, SEO limité, test, fits, FAQ
Snapshot : docs/research/manifests/site-one-page-ou-multipage-p1.sha256
```

### Rapport P2 — Rédaction et intégration

```text
PASSE 2 TERMINÉE — PRÊTE POUR CONTRE-AUDIT INDÉPENDANT
Éditeur unique : `/root`
Ouverture et réponse : le dirigeant a déjà choisi un site durable ; la règle « même personne, même question, même action » répond dès l'introduction au choix one-page ou multipage
Forme propre au sujet : carte en huit champs ; quatre questions de regroupement ; architecture one-page fictive ; architecture multipage fictive ; évolution progressive ; test en trois tâches avec une personne extérieure
Frontière éditoriale : aucune nouvelle comparaison landing page/site vitrine ; lien vers le guide voisin avant la méthode ; backlink contextuel depuis sa conclusion
Exemples : situations entièrement fictives ; trois offres présentées sur trois colonnes avec public, question, élément à préparer, action et adresse candidate explicitement fictive
SEO et accessibilité : sources officielles Google Search Central et W3C WCAG 2.2 revalidées le 23 juillet 2026 ; aucune promesse d'indexation, de position, de conversion ou de nombre idéal de pages
Action autonome : tableau copiable, décision regrouper/séparer justifiée, test du menu et option d'attendre lorsqu'une offre ou son contenu ne sont pas prêts
CTA : « Préparer ma demande de relecture » vers `/demarrer-un-projet` ; le clic ouvre un brief guidé d'environ trois minutes, lu par l'équipe, avec un premier retour personnalisé visé pendant le jour ouvré suivant sans délai garanti ; brief et réponse gratuits et sans engagement ; aucune validation automatique complète promise
Temps de lecture : 17 minutes pour 3 424 mots visibles au contrôle navigateur
Contrôles rapides : garde-fou éditorial dédié ; tableaux limités à trois colonnes ; cinq largeurs de 320 à 1 440 px sans débordement ; thèmes sombre et clair ; un CTA dans l'article sans téléphone
SEO technique : canonical exacte ; noindex/nofollow ; un H1 ; Article et BreadcrumbList uniquement ; image sociale PNG réelle de 1 200 × 630
Snapshot : `docs/research/manifests/site-one-page-ou-multipage-p2.sha256`
```

### Rapport P3 — Contre-audit indépendant

```text
PASSE 3 TERMINÉE — VALIDÉE APRÈS REPRISE
Relecteur indépendant : `/root/p3_saas_evolution`
Snapshot audité : `docs/research/manifests/site-one-page-ou-multipage-p2.sha256`
Verdict initial : P0 = 0 ; P1 = 1 ; P2 = 3
Corrections appliquées : CTA aligné sur le brief réellement ouvert ; huit champs canoniques harmonisés ; états P2 au futur retirés ; promesse d'architecture validée supprimée ; définition de l'indexation appuyée par `how-search-works`
Revalidation intermédiaire : P0 = 0 ; P1 = 0 ; P2 = 2
Finitions appliquées : huit champs harmonisés dans la valeur originale et la ressource ; source `how-search-works` ajoutée à la fiche de preuves et à la bibliographie publique
Verdict final : P0 = 0 ; P1 = 0 ; P2 = 0
Contrôles : manifeste P2 exact 6/6 au moment du contre-audit ; 49/49 tests ciblés ; ESLint, TypeScript, Prettier et diff-check conformes
Rendu : route locale 200 ; canonical exacte ; noindex/nofollow avant P4 ; un H1 ; Article et BreadcrumbList ; image sociale 1 200 × 630
État : porte P3 validée ; P4 autorisée
```

### Rapport P4 — Plume humaine et contrôle final

```text
PASSE 4 TERMINÉE
Passages humanisés : question one-page/multipage formulée comme au téléphone ; règle même personne/même question/même action donnée immédiatement ; jargon SEO repoussé et défini
Retour P3 effectué : oui ; reprise après un refus temporaire puis validation finale à P0 = 0, P1 = 0 et P2 = 0
Lecture et artefact : 3 129 mots comptés dans l'artefact final, soit 16 minutes avec la convention de 200 mots par minute
Scorecard justifiée : 20/20 ; détail dans la table ci-dessous
Validation humaine réelle : non
Test réalisé par une personne réelle : non
Autorisation éditoriale : Décision de publication : autorisée explicitement par le commanditaire
Commandes et résultats : check:seo, ESLint, TypeScript, batterie Vitest, build Next.js, postbuild et git diff --check conformes au gel final du lot
Largeurs et états contrôlés : 320, 390, 767, 1 024 et 1 440 px ; aucun débordement ; canonical exact ; un H1 ; Article et BreadcrumbList ; un CTA sans téléphone
Snapshot final : docs/research/manifests/site-one-page-ou-multipage-p4.sha256
Statut maximal : publiable — validation éditoriale déléguée
Verdict : porte P4 validée
```

### Scorecard P4

| Axe         | Note 0-2 | Preuve dans la page                                                                                | Correction éventuelle |
| ----------- | -------: | -------------------------------------------------------------------------------------------------- | --------------------- |
| Intention   |        2 | Le guide structure un site durable déjà choisi, sans refaire le choix landing page/site vitrine    | Aucune                |
| Décision    |        2 | Regrouper, séparer, préparer ou reporter chaque réponse est explicite                              | Aucune                |
| Pédagogie   |        2 | Carte en huit champs, exemples one-page/multipage et trois tâches de test                          | Aucune                |
| Profondeur  |        2 | Public, question, preuve, action, responsable, mise à jour, évolution et limites SEO sont couverts | Aucune                |
| Preuve      |        2 | Sources Google Search Central et W3C visibles, actuelles et sans promesse de classement            | Aucune                |
| Comparaison |        2 | Les deux architectures sont appliquées aux mêmes offres fictives sans nombre idéal                 | Aucune                |
| Originalité |        2 | Un atelier de cartographie remplace le comparatif générique d'avantages/inconvénients              | Aucune                |
| Style       |        2 | Mots du dirigeant, URL expliquée au premier usage et titres orientés vers l'action                 | Aucune                |
| Conversion  |        2 | CTA honnête sur le brief, la lecture humaine, le délai non garanti et l'absence d'engagement       | Aucune                |
| SEO/produit |        2 | Intention distincte, metadata, maillage, OG, index/follow et cinq largeurs contrôlés               | Aucune                |

Total final : **20/20**.

### Test lecteur non technique

```text
Test réalisé par une personne réelle : non
Profil du lecteur : non testé
Ce qu'il a compris comme réponse : non revendiqué
Décision qu'il prendrait : non revendiquée
Endroit où il a commencé à survoler : non mesuré
Passage crédible ou trop commercial : non mesuré
Termes ou passages bloquants : non mesurés
Corrections appliquées : contre-audit indépendant, contrôles visuels réels et délégation explicite du commanditaire ; aucun faux test lecteur n'est inventé
```

## 10. Revue historique de porte P1

- [x] site durable supposé acquis ;
- [x] frontière avec le guide landing page/site vitrine rendue testable ;
- [x] décision architecturale unique définie ;
- [x] sources primaires consultées ;
- [x] SERP française observée sans inventer de volume ;
- [x] aucun nombre de pages, mot-clé ou gain SEO universel inventé ;
- [x] artefact, action autonome, bon fit et mauvais fit prévus ;
- [x] aucune ressource téléchargeable inexistante annoncée ;
- [x] au gel P1, P2, P3 et P4 restaient bloquées avant publication.
