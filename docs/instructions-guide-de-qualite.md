# Instructions guide de qualité

Version : 2 août 2026
Statut : protocole obligatoire pour chaque guide Hagnéré Code
Périmètre : recherche, écriture, intégration, publication et contrôle après
publication de toute route `/guides/[slug]`

Ce document complète :

- `docs/workflow-maitre-guides-4-passes.md`, qui gouverne les quatre passes
  éditoriales successives ;
- `docs/charte-qualite-guides.md`, qui définit la qualité éditoriale ;
- `docs/regle-or-vigilance-seo-publication.md`, qui gouverne l’indexation et
  les affirmations publiques.

Il ne les remplace pas. En cas de contradiction, la règle la plus prudente et
la plus vérifiable s’applique.

---

## 1. Principe non négociable

Un guide suit exactement quatre passes d’écriture :

1. création ;
2. enrichissement et vérification ;
3. polish rédactionnel ;
4. antipasse IA et contre-audit.

Chaque passe est confiée à un agent distinct. L’orchestrateur relit, contrôle
et valide la passe avant de lancer la suivante. Un compte rendu d’agent, un
test vert ou un texte long ne valent jamais validation automatique.

Après la passe 4, un **contrôle qualité transversal obligatoire** est réalisé.
Ce contrôle n’est pas une cinquième passe de rédaction : c’est une porte de
sortie qui réconcilie le fond, le rendu, le code, les données structurées, les
signaux Google et la production réellement servie.

> Aucun guide suivant ne commence et aucun guide courant n’est publié tant que
> le contrôle qualité final n’a pas reçu un `GO_QUALITE_GUIDE` explicite de
> l’orchestrateur.

---

## 2. Ce qui a été mis en place lors de la remise à zéro

### 2.1 Corpus

- Les anciens guides ont été retirés du registre, du hub, du sitemap et du
  maillage actif.
- Les 100 anciens slugs sont conservés dans un inventaire fermé.
- Chaque ancien slug est redirigé vers une route active et pertinente du site ;
  une URL inventée n’est pas redirigée par défaut.
- Le premier guide reconstruit est
  `/guides/automatiser-processus-metier`.
- Le hub, le sitemap et `llms.txt` sont alimentés depuis le registre canonique
  `src/lib/guides.ts`, pas par des listes éditées séparément.
- Aucun téléchargement XLS, XLSX ou CSV n’est présenté comme ressource du
  guide.

### 2.2 Gabarit

Le nouveau guide réutilise le système premium du site :

- navigation et pied de page globaux ;
- héros avec badges, promesse, auteur, statistiques et CTA contextuel ;
- sommaire ancré ;
- colonne de lecture et CTA latéral ;
- sections numérotées ;
- tableaux adaptatifs, encadrés, formules et exemple chiffré ;
- calculateur local ;
- sources et avertissement ;
- FAQ catégorisée ;
- CTA mobile et bloc de contact global.

Le gabarit est partagé. Un guide ne doit pas recopier plusieurs centaines de
lignes de mise en page pour créer une variante impossible à maintenir.

### 2.3 Valeur propre au premier guide

Le guide apporte :

- cinq portes bloquantes qui empêchent un gain financier de masquer un risque ;
- sept réponses possibles, dont simplifier, activer une fonction existante ou
  ne pas automatiser ;
- une carte de processus utilisable sans outil ;
- une séparation entre temps retirable, adoption, heures réaffectées, valeur
  de capacité et dépense réellement évitée ;
- un scénario volontairement défavorable et reproductible ;
- un calculateur dont les données restent dans le navigateur ;
- un protocole de pilote, d’erreur, de reprise et de responsabilité ;
- des sources officielles et leurs limites.

### 2.4 Durcissements ajoutés après l’analyse finale

| Modification | Pourquoi | Mise en œuvre | Preuve attendue |
|---|---|---|---|
| H1 équilibré et espace insécable avant `?` | Éviter une ponctuation seule sur une ligne à 390 px | `text-balance` dans le gabarit et `\u00a0` dans le suffixe | Capture et mesure à 320, 360, 390 et 430 px |
| Statistique « Calculateur · envoi : Aucun » | Ne pas laisser croire que toute la page ne traite aucune donnée | Libellé limité au calculateur | Texte visible identique au comportement réseau |
| Parcours express à cinq étapes | Donner une orientation avant la lecture longue | Liens vers carte, portes, options, calcul et décision | Chaque ancre mène à la bonne section |
| Quatre sorties explicites | Ne pas présenter le développement comme issue automatique | Fonction existante, pilote, simplification ou maintien humain | Les quatre issues restent visibles sur mobile |
| Scénario opérationnel concret | Rendre les calculs compréhensibles sans fabriquer un client | Demandes d’intervention, file manuelle et hypothèses visibles | Mention « entièrement fictif » à proximité des chiffres |
| CTA mobile déclenché après le héros | Ne pas recouvrir la promesse avant que le lecteur ait commencé | Géométrie du héros rendu, seuil de pixels seulement en repli | CTA absent dans le héros et visible pendant la lecture |
| CTA masqué devant FAQ et contact | Éviter les doublons et les contenus masqués | Détection de l’intersection visible de `#faq` et `#contact` | Aucun recouvrement aux largeurs mobiles |
| CTA et icônes cohérents | Décrire la vraie destination au lieu de simuler une réservation | Liens vers `/demarrer-un-projet`, libellé mobile « Décrire mon besoin · 3 min » et icône de message dans le gabarit | Libellé, icône et destination cohérents |
| FAQ accessible | Relier catégories, panneaux, questions et réponses | `tablist`, `tab`, `tabpanel`, identifiants uniques, ARIA, flèches, Home et End | Test automatisé, clavier et lecteur d’écran |
| Auteur canonique | Éviter trois intitulés différents pour la même personne | Nom, initiales, rôle et profil issus de `src/lib/team.ts` | Carte, metadata, équipe et JSON-LD réconciliés |
| Métadonnées centralisées | Empêcher le titre, la canonical et l’image sociale de diverger | `buildGuideMetadata` | Test du registre et HTML servi |
| JSON-LD centralisé | Empêcher chaque page de recréer auteur et éditeur | `buildGuideStructuredData` | Tests unitaires et JSON parsable |
| Collection de guides identifiée | Relier le guide à son hub sans inventer une seconde page | `https://hagnere-code.ai/guides#collection` | Même `@id` sur le hub et dans l’Article |
| Directives robots centralisées | Ne pas perdre `max-image-preview:large` lorsqu’une page remplace les metadata globales | Constantes publiques et privées dans `search-indexing.ts` | HTML public et tests robots |
| Dates sans heure inventée | Éviter trois instants artificiels pour une seule date éditoriale | Instants ISO réels, avec fuseau, identiques dans registre, Open Graph, Article et sitemap | Comparaison des sorties servies |
| Trois images Article | Fournir une illustration utile et adaptée aux ratios recommandés sans surcharger l’OG de texte | Illustration visible en 16:9 et déclinaisons 4:3 et 1:1 | Fichiers, dimensions, HTML et tableau `Article.image` |
| Vocabulaire du hub corrigé | Ne pas confondre capacité réaffectée et gain financier | « capacité réaffectée » dans le parcours du hub | Hub et guide réconciliés |
| Dépendances de test déclarées | Empêcher un cache local de masquer un paquet absent en CI | Toute dépendance appelée par Vitest figure dans `devDependencies` et dans le lockfile | Installation propre puis build identique à la plateforme |
| Dépendances de production auditées | Ne pas publier silencieusement une version dans une plage vulnérable connue | `npm audit --omit=dev`, lecture de l’avis officiel et montée de patch ciblée | Version installée, build et tests consignés ; aucune correction `--force` aveugle |

---

## 3. Chaîne d’exécution : quatre passes et quatre gates

### 3.1 Règle d’isolement

Avant la passe 1, l’orchestrateur :

1. choisit un seul slug de la roadmap ;
2. vérifie qu’aucun autre agent ne travaille sur ce slug ;
3. gèle le corpus et les fichiers autorisés ;
4. crée ou complète `docs/research/[slug].md` ;
5. relève l’état Git et sépare tout changement utilisateur sans rapport ;
6. confirme la route de service et le CTA ;
7. vérifie les anciennes URL et la stratégie de redirection ;
8. note les inconnues qui doivent rester des `STOP`, jamais des inventions.

### 3.2 Profondeur utile, exemples et recherche active des angles manquants

Un guide complet n’est pas celui qui traite tout ce qui pourrait être dit sur
un sujet. Il traite tout ce qui peut modifier la compréhension, l’application,
la comparaison, le risque, le coût ou la décision du lecteur. La longueur n’est
jamais un objectif autonome.

Avant `GO_PASSE_2`, le dossier de travail contient une matrice de couverture
localisable dans `docs/research/[slug].md`. Son empreinte figure dans les
manifestes concernés :

| Angle ou sous-intention | Question réelle ou objection du lecteur | Réponse claire et localisation dans le guide | Exemple, démonstration ou cas contrasté | Limite, contre-cas, source ou inconnue | Décision ou action rendue possible | Statut |
|---|---|---|---|---|---|---|
|   |   |   |   |   |   |   |

Chaque angle envisagé reçoit exactement l’un de ces statuts :

- `COUVERT` : la réponse est visible et localisable dans le guide ;
- `RENVOI_EXPLICITE` : le sujet appartient à une autre ressource réellement
  disponible et la frontière est expliquée ;
- `ECARTE_JUSTIFIE` : l’angle ne change pas la décision ou sort du périmètre
  annoncé, avec justification ;
- `BLOQUANT` : une réponse matérielle manque encore.

Une cellule matérielle vide, une réponse présente seulement dans les notes, un
« cela dépend » sans variables ni prochaine action, ou un angle important
écarté sans justification bloque la passe. Une question décisive appartient au
corps du guide ; la FAQ ne reçoit que des questions résiduelles apportant une
réponse autonome.

Pour chaque événement opérationnel susceptible de changer le résultat
(rotation d'équipe ou de prestataire, incident, reprise manuelle, migration,
maintenance, sortie ou équivalent), la matrice et le texte visible séparent au
minimum : perte de revenu ou de capacité, décaissements monétaires, prestation
éventuellement déjà comprise dans un contrat, temps ou coût non monétaire et
conséquence sur la continuité. Ils indiquent aussi les lignes qui pourraient se
recouvrir afin d'empêcher un oubli ou un double compte. Nommer un angle ou
écrire qu'il « crée des coûts » ne prouve pas sa couverture : le lecteur doit
savoir où inscrire la donnée, comment la dater ou la normaliser, quelle preuve
chercher et quand suspendre la conclusion.

#### Exigence qualitative d’exemples

Il n’existe aucun quota universel d’exemples. En revanche :

- toute notion centrale encore abstraite reçoit une situation concrète, une
  démonstration, un calcul ou un cas contrasté placé près de son explication ;
- toute recommandation structurante montre la condition ou le cas dans lequel
  elle cesse d’être préférable ;
- tout exemple nomme, lorsque c’est pertinent, le rôle concerné, la tâche, la
  donnée utilisée, l’erreur ou le coût évité, la responsabilité et ce qui se
  passe ensuite ;
- tout exemple chiffré expose le contexte, les entrées, l’opération, le
  résultat, la conséquence et la limite ;
- un même cas suivi peut traverser plusieurs sections s’il reste cohérent et
  fait réellement progresser le raisonnement ;
- un exemple fictif est annoncé comme tel avant les faits ou chiffres qui le
  composent ;
- un chiffre inconnu reste inconnu : il n’est jamais créé pour donner une
  illusion de précision ;
- si aucun chiffre défendable n’est disponible, un exemple qualitatif concret
  vaut mieux qu’un faux ROI, un faux devis, un faux client ou un gain inventé ;
- un exemple qui ne fait que répéter la règle est supprimé ou remplacé.

Pour un guide logiciel, les perspectives suivantes sont interrogées
lorsqu’elles peuvent changer la décision : dirigeant non technique, métier
utilisateur, opérations, finance, IT et sécurité, données et RGPD, achats ou
juridique, adoption, maintenance, incident et reprise, réversibilité ou
changement de prestataire, solution plus simple et maintien du statu quo.

Chacune de ces perspectives apparaît dans un registre de cadrage avec
`APPLICABLE` et au moins une question reportée dans la matrice, ou avec
`NON_APPLICABLE_JUSTIFIE` et une justification précise. Une perspective sans
trace bloque G1 : l’auteur ne peut pas rendre invisible un angle oublié en
omettant simplement de le créer.

#### Idéation contradictoire obligatoire

En passe 2, puis lors du contrôle qualité post-guide, un relecteur recommence la
recherche de questions sans se limiter au plan existant :

1. **Lecteur débutant** : quel mot, mécanisme ou présupposé reste opaque ?
2. **Lecteur prêt à agir** : quelle donnée, pièce, personne ou étape lui
   manque ?
3. **Autre profil** : dans quelle situation la réponse ou la priorité
   change-t-elle ?
4. **Scénario dégradé** : qu’est-ce qui échoue, coûte plus cher ou prend plus
   de temps ?
5. **Cas inverse** : quand la recommandation devient-elle mauvaise ?
6. **Solution opposée** : une fonction existante, une simplification, le statu
   quo ou un report peuvent-ils être préférables ?
7. **Chronologie** : que se passe-t-il avant, pendant, après, lors de la
  maintenance, d’un incident et à la sortie ?
8. **Contradiction** : quelle objection sérieuse ou quelle source crédible
   pourrait invalider le raisonnement ?
9. **Autonomie** : le lecteur peut-il contrôler ou entreprendre une prochaine
   action utile sans contacter Hagnéré Code ?

Chaque question nouvelle est consignée comme `AJOUTEE`, `DEJA_COUVERTE`,
`RENVOYEE` ou `ECARTEE_JUSTIFIEE`, avec une localisation ou une justification.
Une question `AJOUTEE` doit aboutir dans la matrice finale à `COUVERT`,
`RENVOI_EXPLICITE` ou `ECARTE_JUSTIFIE`. Elle n’est intégrée que si elle
modifie la compréhension, l’application, la comparaison, le risque, le coût ou
la décision. Cette recherche ne sert jamais à fabriquer une FAQ ou une section
supplémentaire.

#### Tests de clarté bloquants

- **Reformulation en une lecture** : un relecteur distinct des agents de
  rédaction lit le H1, l’introduction et les H2 puis, texte masqué, restitue la
  réponse principale, les conditions qui la modifient et la prochaine action.
  Toute erreur matérielle, tout terme central incompris ou toute action
  impossible à formuler vaut `ECHEC_CLARTE` et bloque le guide. La restitution,
  les écarts et la décision sont conservés dans le dossier.
- **Langage ordinaire** : chaque terme technique est traduit au moment utile,
  avant qu’il soit nécessaire pour suivre le raisonnement.
- **Traçabilité de l’exemple** : le lecteur suit contexte, données, opération,
  résultat, conséquence et limite sans deviner une étape.
- **Décision de section** : chaque section importante débouche sur un contrôle,
  une conséquence ou une action, pas sur un résumé abstrait.
- **Cas inverse** : le lecteur voit quand la recommandation ne s’applique plus.
- **Lecture rapide** : H1, introduction, H2 et premières phrases racontent un
  chemin de décision cohérent.
- **Non-duplication** : corps, tableaux, exemples et FAQ ne répètent pas la
  même réponse sous plusieurs formes.

Une correction matérielle issue de cette boucle rouvre les passes et contrôles
qu’elle affecte. Il est interdit de gonfler le texte, de dupliquer le corps dans
la FAQ, d’ajouter des variantes artificielles ou de multiplier les chiffres
non sourcés pour satisfaire cette exigence.

### 3.3 Passe 1 — création

Agent : rédacteur-recherche dédié.

Livrable :

- contrat de réponse ;
- corpus interne et risque de cannibalisation ;
- recherche externe et sources primaires ;
- registre des affirmations ;
- architecture complète ;
- réponse courte ;
- guide intégral ;
- exemples et contre-exemples ;
- FAQ visible ;
- CTA adapté ;
- metadata, OG et JSON-LD autorisé ;
- manifeste P1.

Gate G1 de l’orchestrateur :

- la question principale reçoit une réponse dans les premiers paragraphes ;
- le lecteur sait aussi quand renoncer ;
- aucun chiffre, client, prix, délai, qualification ou résultat n’est inventé ;
- les sources importantes ont été ouvertes et lues ;
- les calculs sont refaits indépendamment ;
- le guide est complet, pas seulement bien introduit ;
- aucun angle matériel de la matrice n’est `BLOQUANT` ;
- aucune perspective obligatoire ne reste sans statut ni justification ;
- la matrice fait partie du périmètre contrôlé et hashé ;
- les notions centrales possèdent une explication ou un exemple traçable et
  les recommandations structurantes un cas inverse ;
- le rendu n’est pas déjà cassé.

Sortie : `GO_PASSE_2` ou `NO_GO_PASSE_1`.

### 3.4 Passe 2 — enrichissement et vérification

Agent : vérificateur distinct du rédacteur.

Mission :

- contredire les affirmations importantes ;
- revenir aux textes officiels et documentations primaires ;
- vérifier dates, périmètres et exceptions ;
- refaire tous les calculs ;
- rechercher les coûts, risques, responsables et cas de refus oubliés ;
- exécuter l’idéation contradictoire, consigner chaque nouvelle question et
  compléter la matrice sans transformer P2 en rédaction de rattrapage ;
- corriger les liens et les sources faibles ;
- vérifier le comportement réel des outils intégrés ;
- produire le manifeste P2.

Gate G2 :

- chaque affirmation contrôlable est `VERIFIEE`, `A_NUANCER`, `A_RETIRER` ou
  `INCONNUE` ;
- une inconnue n’a pas été transformée en zéro ou en certitude ;
- les unités, périodes et formules sont cohérentes ;
- le droit, la sécurité et le RGPD ne dépassent pas le périmètre des sources ;
- les limites et contre-cas sont visibles dans le texte, pas cachés en note ;
- toute nouvelle question matérielle est couverte, renvoyée ou écartée avec une
  justification vérifiable ;
- les exemples structurants exposent leur conséquence et leur limite, pas
  seulement une situation décorative.

Sortie : `GO_PASSE_3` ou `NO_GO_PASSE_2`.

### 3.5 Passe 3 — polish rédactionnel

Agent : éditeur distinct des passes 1 et 2.

Mission :

- rendre chaque phrase plus naturelle et plus précise ;
- supprimer jargon, remplissage, symétries artificielles et répétitions ;
- améliorer les transitions et la hiérarchie ;
- placer définitions, exemples et décisions au bon moment ;
- remplacer les abstractions évitables par des mots courants sans perdre la
  précision et rendre chaque exemple suivable sans calcul implicite ;
- vérifier que tableaux et encadrés accélèrent la compréhension ;
- conserver intégralement les nuances factuelles ;
- produire le manifeste P3.

Gate G3 :

- les 150 premiers mots décrivent le problème réel, répondent et orientent ;
- chaque H2 reste compréhensible isolément ;
- la longueur vient de la couverture utile, pas d’un quota SEO ;
- la FAQ répond dès sa première phrase ;
- le CTA décrit la prochaine action réelle ;
- aucun polish n’a simplifié une limite juridique, technique ou financière.

Sortie : `GO_PASSE_4` ou `NO_GO_PASSE_3`.

### 3.6 Passe 4 — antipasse IA et contre-audit

Agent : contre-auditeur distinct des trois précédents.

Mission :

- rechercher la voix industrielle, les transitions mécaniques et la fausse
  assurance ;
- détecter les sauts logiques, contradictions, répétitions et promesses ;
- rejouer les tests de clarté et chercher la question matérielle que les trois
  premières passes auraient collectivement pu manquer ;
- vérifier que les exemples fictifs ne ressemblent pas à des preuves client ;
- faire une lecture adversariale des sources, chiffres et CTA ;
- contrôler la cohérence du document entier après correction ;
- produire le manifeste P4.

Gate G4 :

- aucun P0 ni P1 éditorial, factuel, légal, commercial ou logique ;
- score de publication au-dessus du seuil du dépôt ;
- aucun axe critique sous le minimum ;
- les manifestes correspondent aux fichiers réellement relus ;
- les quatre agents sont distincts ;
- le diff est gelé avant le contrôle transversal.

Sortie : `GO_CONTROLE_QUALITE` ou `NO_GO_PASSE_4`.

---

## 4. Contrôle qualité transversal obligatoire

Ce contrôle commence uniquement après G4. Toute correction matérielle rouvre
les contrôles concernés et invalide les preuves prises sur l’ancien état.

### 4.1 Fond éditorial

- intention, lecteur, décision et hors-sujet réconciliés ;
- réponse courte cohérente avec la conclusion ;
- alternatives simples et option « ne pas faire » visibles ;
- exemples proches de situations réelles mais explicitement fictifs ;
- aucune expérience Hagnéré Code inventée ;
- aucune promesse de classement, délai, ROI ou trafic ;
- faits, calculs, scénarios, déductions et recommandations distinguables ;
- termes techniques expliqués au premier emploi ;
- chaque lien apporte une preuve ou une prochaine étape utile ;
- FAQ limitée aux vraies questions résiduelles ;
- matrice de couverture réconciliée avec le texte final, sans angle matériel
  seulement implicite ;
- note contradictoire « qu’avons-nous oublié ? » jointe au dossier, avec les
  questions ajoutées, déjà couvertes, renvoyées et écartées ;
- exemples compréhensibles, traçables et utiles à une décision, sans chiffre
  de remplissage ni expérience Hagnéré Code inventée.

### 4.2 Arithmétique et outils

- chaque formule refaite avec une seconde méthode ;
- mêmes valeurs dans prose, tableau, FAQ et calculateur ;
- mêmes unités et même horizon ;
- zéros distingués des inconnues ;
- cas limites testés : vide, zéro, décimales, valeurs extrêmes, portes
  bloquantes et données invalides ;
- aucun envoi réseau si l’interface annonce un calcul local ;
- résultat interprété sans confondre capacité et trésorerie.

### 4.3 Hauteur, rythme et harmonie visuelle

Contrôler la page entière, pas uniquement le composant modifié :

- même en-tête, même grille, même système typographique et même footer que le
  reste du site ;
- hauteur du héros déterminée par son contenu, sans `min-height` arbitraire qui
  crée un vide sur mobile ;
- H1 équilibré sans mot ou ponctuation orpheline ;
- badges qui reviennent à la ligne sans collision ;
- statistiques de hauteur harmonieuse et libellés complets ;
- cartes d’une même rangée visuellement cohérentes sans masquer de texte ;
- rythme vertical stable entre H2, paragraphes, tableaux et encadrés ;
- largeur de lecture raisonnable après la sidebar ;
- tableaux remplacés par des cartes mobiles lorsque la réponse décisive serait
  hors écran ;
- CTA fixe absent du héros et masqué devant tout CTA concurrent ;
- aucun contenu final caché sous le bandeau mobile ;
- thème sombre sans bloc blanc, texte gris illisible ni icône invisible ;
- impression propre si le guide est destiné à être conservé.

Largeurs obligatoires :

`320`, `360`, `390`, `430`, `640`, `768`, `1024`, `1280`, `1440` et
`1600` px.

À chaque largeur :

- `scrollWidth <= innerWidth` ;
- aucun texte tronqué ;
- cibles tactiles d’au moins 44 px lorsque possible ;
- héros, sommaire, tableaux, calculateur, FAQ, CTA et footer contrôlés ;
- capture ou relevé daté conservé.

Vérifier également zoom navigateur 200 %, taille de police augmentée et
orientation paysage sur un petit écran.

### 4.4 Accessibilité

- un seul H1 ;
- ordre H2/H3 logique ;
- lien d’évitement fonctionnel ;
- focus visible ;
- ordre de tabulation conforme à l’ordre de lecture ;
- aucune action accessible uniquement à la souris ;
- boutons et liens nommés par leur résultat ;
- catégories de FAQ annoncées comme onglets ou boutons cohérents, sans mélange
  de rôles ;
- `aria-controls`, `aria-labelledby`, `aria-selected` et `aria-expanded`
  pointent vers des identifiants uniques existants ;
- flèches, Home et End fonctionnent dans la liste d’onglets ;
- réponses ouvertes et fermées correctement annoncées ;
- informations non portées par la couleur seule ;
- tableaux avec légende et en-têtes ;
- lecteur d’écran contrôlé au minimum sur le héros, le parcours express, le
  calculateur, la FAQ et le CTA.

### 4.5 Performance

Mesurer, ne pas deviner :

- poids HTML brut et compressé ;
- nombre de nœuds DOM ;
- nombre et poids des scripts et images ;
- absence d’erreurs console et réseau ;
- absence de déplacement de mise en page visible ;
- chargement des polices et image OG ;
- Core Web Vitals de laboratoire avant publication ;
- Core Web Vitals de terrain seulement lorsqu’assez de données réelles
  existent.

Un build vert ne prouve ni LCP, ni INP, ni CLS de terrain.

### 4.6 Cohérence de marque et de conversion

- auteur visible, metadata et JSON-LD issus de la même source canonique ;
- CTA adapté au sujet du guide ;
- libellé fidèle à la destination : ne pas écrire « réserver » si le lien ouvre
  un formulaire ;
- téléphone, email et calendrier vérifiés avant toute modification ;
- aucune adresse `@hagnere-code.ai` inventée ;
- aucun calendrier renommé sans URL publique testée ;
- promesse de délai uniquement si le parcours la tient et si le site
  l’exprime de manière cohérente ;
- mauvaise cible et cas de refus expliqués.

Point actuellement contrôlé : l’adresse visible
`quentin@hagnere-patrimoine.fr` et l’URL Calendly historique sont utilisées
globalement. Leur apparence peut sembler décalée avec Hagnéré Code, mais elles
ne doivent être remplacées que par des coordonnées Hagnéré Code réellement
créées, opérationnelles et testées. La migration devra alors être globale :
footer, contact, formulaires, erreurs, emails, JSON-LD et tests.

---

## 5. Données structurées et harmonie Google

### 5.1 Principe

Les données structurées décrivent ce que le lecteur voit. Elles ne servent pas
à ajouter une promesse, une FAQ, une compétence, un avis ou un résultat absent
de la page.

JSON-LD est utilisé pour la maintenabilité. Le balisage ne garantit ni résultat
enrichi, ni indexation, ni classement.

### 5.2 Graphe canonique du site

| Entité | `@id` canonique | Source |
|---|---|---|
| Organisation | `https://hagnere-code.ai/#organization` | `organization-structured-data.ts` |
| Site | `https://hagnere-code.ai/#website` | `organization-structured-data.ts` |
| Quentin Hagnéré | `https://hagnere-code.ai/equipe#fondateur` | `team.ts` + page équipe |
| Collection de guides | `https://hagnere-code.ai/guides#collection` | `guide-page-seo.ts` + hub |
| Article | URL canonique exacte du guide + `#article` | `guide-page-seo.ts` |
| Page principale | URL canonique exacte du guide | `mainEntityOfPage` |

Règles :

- réutiliser les `@id` ; ne jamais créer `#business`, `#agency` ou une seconde
  organisation pour la même entité ;
- le fondateur de l’organisation, le membre de la page équipe et l’auteur du
  guide utilisent le même `@id` ;
- l’Article appartient à la même `CollectionPage` que celle publiée par le
  hub ;
- la Collection appartient au `WebSite` ;
- auteur et éditeur pointent vers les entités canoniques ;
- nom, rôle, URL et profils sociaux viennent de la fiche équipe ;
- toute modification de l’identité est testée sur toutes les pages qui
  republient l’entité.

### 5.3 Schémas autorisés sur un guide

Par défaut :

- `Article` ;
- `BreadcrumbList`.

Les entités globales `Organization` et `WebSite` restent gérées au niveau
approprié du site. Elles ne sont pas recopiées intégralement dans chaque guide.

Champs Article à réconcilier :

- `headline` = H1 visible ;
- `description` = promesse réelle de la page ;
- `url` et `mainEntityOfPage.@id` = canonical absolue ;
- `image` = illustration éditoriale visible et représentative, idéalement
  disponible en 16:9, 4:3 et 1:1 ; l’image OG 1200 × 630 peut rester distincte
  lorsqu’elle sert de carte de partage ;
- `datePublished` = première publication réelle ;
- `dateModified` = modification substantielle réellement publiée ;
- `inLanguage` = `fr-FR` ;
- `articleSection` = catégorie visible et stable ;
- `isPartOf.@id` = collection des guides ;
- `author.@id`, nom, rôle et URL = personne visible ;
- `publisher.@id` = organisation canonique.

Le fil d’Ariane JSON-LD doit suivre le fil visible :

1. Accueil ;
2. Guides ;
3. guide courant.

### 5.4 Schémas interdits par défaut

- aucun `FAQPage` : la FAQ reste visible et accessible, mais n’est pas balisée
  comme résultat enrichi ;
- aucun `HowTo` pour transformer artificiellement des sections en étapes ;
- aucun `Review`, `AggregateRating`, `Offer` ou `Product` sans réalité visible,
  éligibilité et preuve ;
- aucun `wordCount` estimé ;
- aucune note, prix ou promesse ajoutée uniquement dans le JSON-LD.

### 5.5 Contrôles Google et crawl

Le H1, le title, l’extrait et la meta description doivent reprendre le langage
d’une question réelle de la cible et annoncer le résultat de lecture. Ils ne
présentent jamais le vocabulaire du chantier (`audit`, `gate`, `passe`, hash,
certificat, nom de modèle ou identifiant de cas) comme une promesse publique.
Avant la fin de P4, puis dans la revue post-guide, extraire le texte réellement
visible, compter les marqueurs sans distinguer majuscules et minuscules, et
contrôler que :

- aucun identifiant interne, hash, version de modèle ou marqueur de gate
  n’apparaît dans un H1, H2, chapeau, légende, FAQ ou CTA ; ces valeurs peuvent
  rester dans les métadonnées, attributs techniques et preuves ;
- `STOP`, `À SOURCER`, `PASS`, `NO_GO` et les autres états de production ne
  sont pas répétés comme du jargon public : employer une formulation naturelle
  telle que `suspendre la décision`, `obtenir la pièce` ou `hypothèse non
  vérifiée`, sans supprimer le seuil d’arrêt ;
- le titre et le snippet restent compréhensibles hors contexte et pourraient
  être formulés spontanément dans un moteur de recherche par la cible ;
- la traduction en langage public préserve les formules, les conventions, les
  preuves et les limites.

Le test porte sur le rendu servi, pas seulement sur le code source. Un
identifiant dans un attribut `data-*` peut rester invisible ; le même
identifiant dans une légende ou un intertitre est un défaut éditorial.

Avant publication :

- title unique et descriptif ;
- meta description utile, sans promesse de classement ;
- canonical absolue et auto-référente ;
- robots cohérent avec le statut éditorial et l’environnement ;
- Open Graph et Twitter cohérents ;
- image sociale servie ;
- hub, sitemap et `llms.txt` issus du registre ;
- liens internes explorables avec de vraies balises `<a href>`;
- JSON-LD parsable et fidèle au visible ;
- aucun contenu essentiel uniquement après interaction.

Après publication :

- HTML public en 200 ;
- canonical et robots relus dans le HTML servi ;
- URL présente dans le sitemap public ;
- redirections historiques testées sur la production ;
- image OG publique contrôlée ;
- données structurées de l’URL publique validées ;
- inspection Search Console demandée si utile ;
- canonical choisie et indexation contrôlées ultérieurement.

Publication, découverte, exploration, indexation, classement et conversion sont
des états distincts. Aucun ne se déduit automatiquement du précédent.

---

## 6. Tests bloquants

Depuis la racine propre du candidat :

```bash
git diff --check
# Dans un clone, worktree jetable ou environnement CI propre :
npm ci
npm run measure:guide-readtime -- <slug>
npx eslint <tous-les-fichiers-modifies>
npx tsc --noEmit
npm run check:seo
# Rejouer le gate exécuté pendant un build Vercel :
NODE_ENV=production npm run check:seo
npm test
npm audit --omit=dev
NEXT_PUBLIC_ENV=production npm run build
```

Une exécution locale verte avec un `node_modules` ancien n’est pas une preuve
de reproductibilité. Toute nouvelle bibliothèque de test ou de build doit être
déclarée dans `package.json`, verrouillée dans `package-lock.json`, puis
réinstallée dans un environnement propre avant publication.

Les tests lancés par `prebuild` doivent aussi être exécutables lorsque
`NODE_ENV=production`. Certaines bibliothèques, notamment React, n’exposent
pas exactement les mêmes aides de test dans leur bundle de production : un
test vert uniquement avec l’environnement de développement peut donc bloquer
le build distant alors que le composant lui-même est correct.

Un audit non nul doit être qualifié paquet par paquet. Une version directe
correctible bloque la publication jusqu’à sa montée de patch et ses
régressions. Une alerte transitive sans correctif compatible est consignée
avec sa portée réelle ; elle n’autorise jamais un `npm audit fix --force`
susceptible de rétrograder ou de casser la pile sans requalification complète.

Puis, sur un serveur construit depuis exactement le même état source :

1. vérifier le guide, le hub, l’image OG, sitemap, robots et `llms.txt` ;
2. extraire et parser chaque bloc JSON-LD ;
3. comparer H1, `headline`, title, canonical et fil d’Ariane ;
4. tester le calculateur et ses cas limites ;
5. tester clavier, thème sombre, zoom et toutes les largeurs ;
6. mesurer débordement, poids HTML et DOM ;
7. conserver le SHA du commit ou de l’archive testée.

Après toute correction :

- relancer les tests ciblés du défaut ;
- relancer les barrières transversales susceptibles d’être affectées ;
- reconstruire avant de déclarer le rendu validé ;
- ne pas réutiliser une capture ou une mesure de l’ancien artefact.

---

## 7. Rapport final obligatoire

Le rapport du contrôle qualité contient :

```text
Guide :
Slug :
Commit ou SHA :
Date :

P1 agent / manifeste / décision :
P2 agent / manifeste / décision :
P3 agent / manifeste / décision :
P4 agent / manifeste / décision :

Matrice de couverture / statuts / localisations :
Questions apparues à la relecture contradictoire :
Angles ajoutés / renvoyés / écartés et justifications :
Notions centrales et exemples associés :
Cas inverses ou scénarios dégradés :
Test de reformulation — relecteur / restitution / écarts / décision / preuve :
Valeur lecteur :
Faits et sources :
Calculs :
Exemples fictifs :
Accessibilité :
Responsive :
Thème sombre et zoom :
CTA et conversion :
Metadata :
JSON-LD :
Hub / sitemap / llms.txt :
Redirections :
Performance laboratoire :
Production servie :
Search Console :

P0 :
P1 :
P2 :
Inconnues / STOP :
Décision : GO_QUALITE_GUIDE ou NO_GO_QUALITE_GUIDE
```

Un `GO_QUALITE_GUIDE` exige :

- zéro P0 ;
- zéro P1 ;
- zéro angle matériel `BLOQUANT` dans la matrice finale ;
- aucune perspective obligatoire sans statut ni justification ;
- matrice finale incluse dans le périmètre contrôlé et hashé ;
- une note contradictoire localisable et un test de clarté réussi par un
  relecteur distinct ;
- P2 explicitement acceptés et non trompeurs ;
- batterie locale verte ;
- BAT visuel complet ;
- contre-audit indépendant ;
- production vérifiée si le statut annoncé est « publié ».

---

## 8. Statuts autorisés

| Statut | Ce qu’il prouve |
|---|---|
| Brouillon | Travail incomplet |
| Quatre passes terminées | P1 à P4 exécutées, pas encore de gate transversal |
| GO qualité local | Fond, code, build et BAT local validés |
| Poussé | Commit présent sur le dépôt distant |
| Déployé | Une plateforme a construit le commit |
| Publié | URL publique et HTML servi vérifiés |
| Découvert | Google connaît l’URL ou le sitemap |
| Indexé | Search Console confirme l’indexation |
| Classé | Impressions observées sur des requêtes |
| Convertissant | Demandes attribuables mesurées |

Ne jamais écrire « publié » après un simple build, « indexé » après une
demande d’inspection, ni « performant » à partir d’un cache ou d’un score
local unique.

---

## 9. Références officielles à revalider

- [Règles générales relatives aux données structurées](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [Données structurées Article](https://developers.google.com/search/docs/appearance/structured-data/article)
- [Fil d’Ariane](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)
- [Galerie des fonctionnalités de données structurées](https://developers.google.com/search/docs/appearance/structured-data/search-gallery)
- [Nom du site et WebSite](https://developers.google.com/search/docs/appearance/site-names)
- [Consolidation des URL en double et canonical](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Création et envoi d’un sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Titres dans les résultats](https://developers.google.com/search/docs/appearance/title-link)
- [Contrôle des extraits et meta descriptions](https://developers.google.com/search/docs/appearance/snippet)
- [Dates de publication et de modification](https://developers.google.com/search/docs/appearance/publication-dates)
- [Inspection d’URL dans Search Console](https://support.google.com/webmasters/answer/9012289?hl=fr)

Ces pages sont des sources vivantes. Leur date et leur contenu doivent être
recontrôlés lors d’une évolution de schéma ou d’une nouvelle série de guides.

---

## 10. Règle de continuité

Après chaque guide :

1. terminer les quatre passes ;
2. geler le diff ;
3. exécuter la relecture contradictoire « qu’avons-nous oublié ? » et
   réconcilier la matrice de couverture avec le texte final ;
4. exécuter le contrôle qualité transversal ;
5. corriger ;
6. refaire toute passe et tout contrôle invalidés par la correction ;
7. obtenir `GO_QUALITE_GUIDE` ;
8. publier et vérifier l’URL si la publication est autorisée ;
9. seulement ensuite réserver le guide suivant.

Cette règle reste obligatoire même si :

- les quatre agents annoncent un succès ;
- le score éditorial est élevé ;
- les tests unitaires sont verts ;
- le commit a été poussé ;
- le guide précédent était construit avec le même gabarit.
