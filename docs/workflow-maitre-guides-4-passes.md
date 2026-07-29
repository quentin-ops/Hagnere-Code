# Protocole maître des guides Hagnéré Code — quatre passes successives

Version : 29 juillet 2026
Statut : source d’exécution obligatoire
Périmètre : chaque nouveau guide publié sous `/guides/[slug]`

Ce fichier fusionne et corrige les quatre instructions éditoriales remises par
le commanditaire :

1. création de l’article ;
2. enrichissement et vérification ;
3. polish rédactionnel ;
4. antipasse IA.

Il ne s’agit pas de quatre variantes d’un même prompt. Il s’agit de quatre
passes **strictement successives**, confiées à **quatre agents distincts**. Une
passe ne peut commencer qu’après une décision écrite de l’orchestrateur :
`GO_PASSE_N`. Une décision `NO_GO` renvoie le travail au même agent jusqu’à
correction ; elle n’autorise jamais à lancer l’agent suivant.

Après la passe 4, appliquer obligatoirement
`docs/instructions-guide-de-qualite.md`. Son contrôle transversal fond, rendu,
accessibilité, données structurées et production conditionne la décision
`GO_QUALITE_GUIDE`. Aucun guide suivant ne commence avant cette décision.

---

## 1. Résultat exigé

Le guide doit permettre à une dirigeante ou un dirigeant non technique de
prendre une décision réelle. Il doit :

- répondre directement à l’intention de recherche ;
- expliquer les termes techniques au premier emploi ;
- couvrir le choix, les contre-cas, les risques, le coût complet, les étapes,
  les responsables et la manière de vérifier le résultat ;
- séparer les faits sourcés, les déductions et les recommandations ;
- proposer au moins un exemple chiffré reproductible lorsque le sujet s’y
  prête ;
- dire explicitement quand une solution plus simple, un outil existant ou
  l’absence de développement est préférable ;
- rester lisible, précis et utile sans gonfler artificiellement la longueur ;
- utiliser le gabarit premium copié du site Hagnéré Patrimoine, adapté à
  Hagnéré Code ;
- ne contenir aucune expérience client, métrique, promesse, qualification,
  partenariat ou résultat inventé.

Le succès n’est pas « un texte long ». Le succès est un lecteur capable de
répondre à ces cinq questions :

1. Suis-je concerné ?
2. Que dois-je observer ou mesurer ?
3. Quelles options ai-je réellement ?
4. Dans quel cas dois-je renoncer, différer ou demander une validation ?
5. Quelle est ma prochaine action concrète ?

---

## 2. Ordre des sources et règles non négociables

En cas de contradiction, appliquer cet ordre :

1. faits actuels vérifiés dans une source primaire ;
2. `CLAUDE.md` ;
3. `docs/regle-or-vigilance-seo-publication.md` ;
4. `docs/charte-qualite-guides.md` ;
5. `docs/roadmap-guides-seo.md` ;
6. le présent protocole ;
7. les quatre DOCX, uniquement pour leur intention éditoriale.

Les consignes suivantes des DOCX sont volontairement neutralisées :

- aucune densité de mot-clé imposée ;
- aucun quota de mots, de FAQ, de citations, de tableaux, de CTA ou de
  mentions de marque ;
- aucune promesse de position 1, de trafic ou de taux de clic ;
- aucune donnée « plausible » fabriquée pour remplir un vide ;
- aucun faux persona présenté comme un client réel ;
- aucun faux verbatim, avis, projet, prix observé ou résultat obtenu ;
- aucun balisage `FAQPage`, `HowTo`, `Offer`, `Review` ou `AggregateRating`
  sans éligibilité démontrée ;
- aucun `wordCount` déclaré sans calcul fiable et nécessité démontrée ;
- aucun fichier XLS, XLSX ou CSV proposé au téléchargement ;
- aucun score de détecteur d’IA utilisé comme critère de qualité.

Le schéma attendu par défaut est limité à :

- `Article` ;
- `BreadcrumbList` ;
- les entités globales déjà gérées par le site.

La FAQ doit être visible dans le HTML et utile au lecteur, mais n’est pas
balisée en `FAQPage`.

---

## 3. Unité de travail et fichiers autorisés

Une exécution traite un seul slug.

Pour le guide `SLUG`, les artefacts canoniques sont :

- `src/app/guides/SLUG/page.tsx` ;
- `src/app/guides/SLUG/opengraph-image.tsx` ;
- son unique entrée dans `src/lib/guides.ts` ;
- `docs/research/SLUG.md` ;
- `docs/research/manifests/SLUG-p1.sha256` ;
- `docs/research/manifests/SLUG-p2.sha256` ;
- `docs/research/manifests/SLUG-p3.sha256` ;
- `docs/research/manifests/SLUG-p4.sha256`.

Un agent ne modifie que ces artefacts, sauf autorisation explicite de
l’orchestrateur. Le gabarit partagé, la navigation, les redirections et les
tests transversaux appartiennent à l’orchestrateur.

Chaque agent commence par relire intégralement :

- `CLAUDE.md` ;
- les trois documents de gouvernance cités ci-dessus ;
- ce protocole ;
- la fiche de recherche du slug ;
- la version exacte laissée par la passe précédente.

---

## 4. Fiche de recherche obligatoire

`docs/research/SLUG.md` doit contenir, dans cet ordre :

### A. Identité

- slug ;
- thème et numéro dans la roadmap ;
- intention principale ;
- lecteurs visés ;
- décision que le lecteur doit pouvoir prendre ;
- route de service pertinente ;
- date réelle du travail.

### B. Contrat de réponse

- réponse courte à l’intention en trois à cinq phrases ;
- questions indispensables ;
- questions secondaires ;
- hors-sujet explicites ;
- situations où la bonne réponse est « ne pas automatiser », « ne pas
  développer » ou « demander une validation professionnelle ».

### C. Corpus interne

- pages de service utiles ;
- guides encore publiés au moment de la passe ;
- outils internes réutilisables ;
- risques de cannibalisation ;
- liens internes retenus et raison de chaque lien.

### D. Analyse externe

Pour chaque résultat ou source examinée :

- URL ;
- éditeur ;
- date de publication ou de mise à jour si disponible ;
- type : source primaire, documentation officielle, étude, concurrent,
  retour d’expérience ;
- affirmation utilisable ;
- limite, biais ou périmètre ;
- date de consultation.

### E. Matrice d’information utile

Pour chaque question du lecteur :

- ce que les résultats courants expliquent déjà ;
- ce qu’ils laissent imprécis ;
- la réponse ou l’outil supplémentaire que le guide doit apporter ;
- la preuve nécessaire.

### F. Registre des affirmations

Une ligne par affirmation contrôlable :

| ID | Affirmation | Type | Source primaire | Périmètre/date | Statut |
|---|---|---|---|---|---|

Types autorisés :

- `FAIT` : soutenu directement par la source ;
- `CALCUL` : dérivé d’hypothèses visibles ;
- `SCENARIO` : exemple fictif signalé ;
- `DEDUCTION` : raisonnement éditorial explicite ;
- `RECOMMANDATION` : choix proposé avec conditions ;
- `INCONNU` : information à ne pas publier comme certaine.

Statuts :

- `VERIFIE` ;
- `A_NUANCER` ;
- `A_RETIRER` ;
- `INCONNU`.

### G. Calculs et scénarios

Pour chaque calcul :

- formule ;
- unité ;
- période ;
- hypothèses ;
- valeurs d’entrée ;
- résultat ;
- test manuel indépendant ;
- limite d’interprétation.

Les scénarios fictifs doivent porter la mention « exemple fictif » à proximité,
pas seulement dans une note globale.

### H. Journal des quatre passes

Pour chaque passe :

- identifiant de l’agent ;
- fichiers lus ;
- fichiers modifiés ;
- recherches effectuées ;
- affirmations ajoutées, corrigées ou retirées ;
- tests réalisés ;
- risques résiduels ;
- décision de l’orchestrateur ;
- empreinte SHA-256.

---

## 5. Rôles

### Orchestrateur

L’orchestrateur :

- gèle le slug et le périmètre ;
- prépare le gabarit et les redirections ;
- lance un seul agent de passe à la fois ;
- relit la totalité du diff et du rendu ;
- contrôle des sources au hasard et toute affirmation à fort impact ;
- reproduit les calculs ;
- exécute les tests de passage ;
- consigne `GO_PASSE_2`, `GO_PASSE_3`, `GO_PASSE_4` ou `GO_PUBLICATION` ;
- reste le seul à pouvoir publier.

Il ne valide pas une passe sur la seule déclaration de l’agent.

### Agent de passe

Un agent :

- reçoit un périmètre fermé ;
- travaille depuis l’état laissé par la passe précédente ;
- n’annonce pas la publication ;
- ne lance pas l’agent suivant ;
- fournit un compte rendu fondé sur des fichiers et des contrôles ;
- signale les inconnues au lieu de les combler.

Les quatre agents doivent être distincts. Un agent ayant réalisé une passe ne
peut pas réaliser ni auditer une autre passe du même guide.

---

## 6. Passe 1 — création complète

### Mission

Créer depuis une page éditorialement vide la première version complète du
guide. Cette passe réalise la recherche, l’architecture, la rédaction initiale,
les exemples et les métadonnées. Elle ne doit pas conserver des paragraphes de
l’ancien guide simplement parce qu’ils existent.

### Séquence obligatoire

1. Lire la roadmap et écrire le contrat de réponse.
2. Inventorier les pages internes et la cannibalisation.
3. Examiner les résultats français et, si utile, anglophones.
4. Revenir aux sources primaires pour les affirmations importantes.
5. Remplir le registre des affirmations avant la rédaction.
6. Écrire un plan qui suit le chemin de décision du lecteur.
7. Rédiger la réponse courte et le héros.
8. Rédiger les sections, exemples et contre-cas.
9. Écrire une FAQ à partir des vraies objections restantes.
10. Ajouter les sources, les liens internes et l’avertissement adapté.
11. Renseigner les métadonnées et les données structurées autorisées.
12. Générer l’image Open Graph cohérente avec la promesse réelle.
13. Mettre à jour la fiche de recherche.
14. Générer le manifeste P1.

### Structure minimale attendue

La structure dépend de l’intention. Elle doit néanmoins répondre à :

- de quoi parle-t-on, en langage simple ;
- quels signaux indiquent que le sujet mérite une action ;
- quelles options existent, y compris l’option minimale ;
- comment comparer ces options ;
- comment estimer valeur, coût et risque ;
- quelles erreurs ou exceptions changent la décision ;
- comment tester à petite échelle ;
- qui est responsable après la mise en service ;
- quelle prochaine étape choisir.

### Livrable de l’agent

Le message de fin contient :

- `PASSE_1_TERMINEE` ;
- les fichiers modifiés ;
- les sources primaires principales ;
- les calculs effectués ;
- les inconnues restantes ;
- les commandes de vérification exécutées ;
- le chemin du manifeste P1.

### Porte G1 — validation de l’orchestrateur

L’orchestrateur refuse la passe si l’un de ces défauts existe :

- intention mal couverte ;
- ancien texte conservé sans justification ;
- section attendue vide ;
- source secondaire utilisée alors qu’une source primaire accessible existe ;
- affirmation forte sans source ;
- exemple non signalé comme fictif ;
- calcul non reproductible ;
- CTA trompeur ;
- lien vers un guide supprimé ;
- métadonnées différentes du contenu visible ;
- erreur TypeScript, rendu ou accessibilité évidente.

Décision écrite obligatoire :

```text
GATE_P1
Décision : GO_PASSE_2 | NO_GO_P1
Contrôles :
- intention :
- sources :
- calculs :
- structure :
- technique :
Corrections exigées :
SHA-256 validé :
```

---

## 7. Passe 2 — enrichissement et vérification contradictoire

### Mission

Auditer la version P1 comme si elle devait être contestée par un lecteur
expert. Corriger les faits, approfondir les décisions insuffisamment traitées
et ajouter de la valeur utile. La mission n’est pas d’allonger le texte.

### Séquence obligatoire

1. Lire P1 sans le modifier et dresser la liste des affirmations vérifiables.
2. Comparer cette liste au registre de la fiche de recherche.
3. Vérifier la date, le périmètre et la portée de chaque source importante.
4. Chercher une source contradictoire ou une limite pour chaque recommandation
   structurante.
5. Recalculer tous les exemples sans reprendre le résultat affiché.
6. Tester les unités, périodes, arrondis et doubles comptes.
7. Examiner sécurité, données personnelles, continuité, maintenance,
   réversibilité et responsabilité humaine lorsque le sujet les implique.
8. Vérifier les coûts cachés : intégration, abonnement, formation, support,
   maintenance et sortie.
9. Comparer les options avec les mêmes critères.
10. Ajouter uniquement les précisions qui changent une décision.
11. Retirer les répétitions, chiffres fragiles et généralités.
12. Mettre à jour sources, registre et journal.
13. Générer le manifeste P2.

### Questions contradictoires minimales

- Dans quel cas la recommandation échoue-t-elle ?
- Quelle hypothèse produit le résultat ?
- Que se passe-t-il si le volume double ou si l’outil tiers tombe en panne ?
- Qui détecte l’erreur et qui peut revenir en arrière ?
- Le gain annoncé libère-t-il réellement du temps ou déplace-t-il la charge ?
- Une fonction déjà payée répond-elle au besoin ?
- La collecte ou l’usage des données nécessite-t-il un avis juridique,
  sécurité ou DPO ?

### Livrable de l’agent

Le message de fin contient :

- `PASSE_2_TERMINEE` ;
- les affirmations corrigées ou retirées ;
- les contre-sources examinées ;
- les calculs reproduits ;
- les enrichissements qui changent la décision ;
- les risques résiduels ;
- le chemin du manifeste P2.

### Porte G2

Refus immédiat si :

- une affirmation à impact financier, juridique, sécurité ou données reste
  incertaine sans être qualifiée ;
- un calcul n’est pas reproductible ;
- une comparaison change de critère selon l’option ;
- l’article confond automatisation, IA, intégration et développement ;
- une recommandation ignore le contre-cas principal ;
- l’enrichissement ajoute du volume sans information nouvelle.

Décision :

```text
GATE_P2
Décision : GO_PASSE_3 | NO_GO_P2
Affirmations contrôlées :
Calculs reproduits :
Contre-cas couverts :
Risques résiduels :
SHA-256 validé :
```

---

## 8. Passe 3 — polish rédactionnel

### Mission

Transformer la version vérifiée en un texte fluide, précis et agréable pour un
lecteur non technique, sans modifier le sens ni affaiblir les preuves.

### Séquence obligatoire

1. Lire le guide à voix haute, section par section.
2. Vérifier que le titre, le héros et les 150 premiers mots donnent la réponse.
3. Vérifier qu’un paragraphe porte une seule idée principale.
4. Remplacer le jargon par un mot courant ou le définir immédiatement.
5. Relier chaque section à la question suivante du lecteur.
6. Réduire les listes lorsque la prose est plus claire.
7. Remplacer les formulations vagues par une action ou une observation.
8. Pour chaque chiffre, préciser montant, base, direction et source.
9. Harmoniser tableaux, légendes, unités et noms d’options.
10. Vérifier la cohérence entre texte, CTA, FAQ et métadonnées.
11. Supprimer le contenu dupliqué entre corps et FAQ.
12. Préserver toutes les nuances et limites établies en P2.
13. Mettre à jour le journal et générer le manifeste P3.

### Interdictions

- ne pas introduire un nouveau fait non recherché ;
- ne pas rendre une recommandation plus certaine pour améliorer le style ;
- ne pas transformer une hypothèse en promesse ;
- ne pas ajouter de superlatif commercial ;
- ne pas employer « solution robuste », « approche optimale », « levier »,
  « synergie », « révolutionner » ou équivalent sans contenu précis ;
- ne pas appliquer mécaniquement la même longueur à toutes les sections.

### Livrable de l’agent

- `PASSE_3_TERMINEE` ;
- problèmes de lisibilité corrigés ;
- jargon retiré ou défini ;
- transitions restructurées ;
- faits volontairement laissés inchangés ;
- chemin du manifeste P3.

### Porte G3

L’orchestrateur lit la page comme un lecteur pressé puis comme un lecteur
méfiant. Il refuse si :

- la réponse n’est pas visible dès le début ;
- le lecteur doit connaître le jargon du prestataire ;
- les transitions sont artificielles ;
- les paragraphes répètent le plan sans faire avancer la décision ;
- le polish a supprimé une limite, une hypothèse ou une source ;
- le CTA coupe la lecture ou promet plus que le service.

Décision :

```text
GATE_P3
Décision : GO_PASSE_4 | NO_GO_P3
Lecture pressée :
Lecture méfiante :
Clarté des chiffres :
Cohérence héros/corps/FAQ :
SHA-256 validé :
```

---

## 9. Passe 4 — antipasse IA et contrôle humain final

### Mission

Repérer et corriger les automatismes de rédaction qui rendent le texte
prévisible, artificiel ou creux. Cette passe ne cherche pas à tromper un
détecteur. Elle cherche une voix humaine, utile et crédible.

### Motifs à rechercher

1. autosatisfaction : « guide ultime », « approche complète », « expertise
   unique » ;
2. triptyques ou séries numérotées ajoutés sans nécessité ;
3. paragraphes et sections trop symétriques ;
4. adjectifs commerciaux sans donnée ;
5. métaphores forcées ;
6. accumulation de parenthèses ;
7. connecteurs robotiques : « de plus », « en outre », « il convient de » ;
8. conclusions qui répètent exactement l’introduction ;
9. phrases de longueur uniforme ;
10. verbes neutres qui cachent l’action ;
11. formulations administratives ;
12. inversions artificielles ;
13. puces parfaitement parallèles mais pauvres ;
14. dramatisation sans conséquence concrète ;
15. sauts logiques masqués par une transition.

### Corrections positives

- poser le contexte avant la règle ;
- nommer une personne, une tâche, une donnée ou une décision lorsque cela
  clarifie le propos ;
- alterner naturellement phrases courtes et explications plus longues ;
- expliciter les liens de cause à effet ;
- remplacer la posture commerciale par une limite ou un test ;
- garder les aspérités utiles : exceptions, hésitations légitimes,
  contre-exemples ;
- écrire comme lors d’un échange sérieux avec une dirigeante ou un dirigeant,
  sans familiarité fabriquée.

### Contrôle final de l’agent

L’agent :

1. lit chaque H2 indépendamment ;
2. vérifie que la section répond à son titre ;
3. recherche les quinze motifs ;
4. corrige sans modifier les faits ;
5. vérifie que les exemples restent signalés ;
6. relit l’ensemble pour éviter des contradictions créées par les corrections ;
7. met à jour le journal ;
8. génère le manifeste P4.

### Livrable de l’agent

- `PASSE_4_TERMINEE` ;
- motifs repérés et corrections ;
- passages volontairement conservés et raison ;
- confirmation qu’aucun fait ou calcul n’a été modifié sans vérification ;
- chemin du manifeste P4.

### Porte G4

L’orchestrateur refuse si :

- une correction de ton a modifié un fait ;
- le texte conserve une voix uniforme ou artificielle ;
- les exemples sonnent comme des témoignages réels ;
- une section conclut sans prochaine action ;
- un superlatif ou une promesse non prouvée reste visible ;
- la page ne tient pas le niveau technique, visuel ou éditorial défini plus
  bas.

Décision :

```text
GATE_P4
Décision : GO_PUBLICATION | NO_GO_P4
Faits inchangés :
Motifs antipasse contrôlés :
Valeur lecteur :
Risques résiduels :
SHA-256 validé :
```

---

## 10. Barème éditorial final

Noter chaque axe sur 10 :

1. réponse à l’intention ;
2. exactitude et fraîcheur ;
3. qualité des sources ;
4. valeur nouvelle ;
5. décisions et contre-cas ;
6. calculs et exemples ;
7. clarté pour un non-technicien ;
8. fluidité et voix humaine ;
9. cohérence SEO, métadonnées et maillage ;
10. qualité technique, accessibilité et rendu.

Publication possible uniquement si :

- total au moins `90/100` ;
- aucun axe sous `8/10` ;
- axes 1, 2, 3, 5, 7 et 10 au moins `9/10` ;
- aucun défaut P0 ou P1 ;
- les quatre manifests existent ;
- l’empreinte P4 correspond exactement aux fichiers contrôlés au `GATE_P4` ;
- si le candidat n’a pas changé après `GATE_P4`, l’empreinte P4 correspond
  aussi au candidat final ;
- si une correction ou un durcissement intervient après `GATE_P4`, le
  manifeste P4 reste une preuve historique et ne doit pas être réécrit : le
  candidat final doit alors disposer d’un nouveau manifeste qualité, vérifié
  sur son état exact, et d’un nouveau contre-audit indépendant
  `GO_QUALITE_GUIDE` conforme à
  `docs/instructions-guide-de-qualite.md` ;
- la délégation éditoriale ou la validation humaine est consignée.

Un `NO_GO` n’est pas compensable par une bonne moyenne.

---

## 11. Contrôles techniques avant publication

L’orchestrateur exécute au minimum :

```bash
npm run check:seo
npx eslint <fichiers-modifiés>
npx tsc --noEmit
npm test
NEXT_PUBLIC_ENV=production npm run build
git diff --check
```

Il contrôle dans le HTML réellement servi :

- un seul H1 ;
- titre, description, canonique et robots ;
- `Article` et `BreadcrumbList` valides ;
- absence de `FAQPage`, `HowTo`, faux avis et faux `Offer` ;
- texte FAQ présent dans le DOM ;
- liens internes sans 404 ;
- CTA vers la route annoncée ;
- anciennes URL redirigées de façon permanente ;
- sitemap et `llms.txt` issus du registre ;
- absence de lien de téléchargement XLS, XLSX ou CSV.

Le rendu réel est vérifié aux largeurs :

`320, 360, 390, 430, 640, 768, 1024, 1280, 1440, 1600 px`.

À chaque largeur, vérifier :

- aucun débordement horizontal ;
- héros, CTA et statistiques lisibles ;
- navigation utilisable ;
- tableaux transformés ou défilables ;
- sommaire horizontal accessible ;
- barre CTA mobile non bloquante ;
- FAQ utilisable au clavier ;
- footer et contenu non masqués.

---

## 12. Suppression et redirection d’un ancien corpus

Lors d’une remise à zéro :

1. inventorier toutes les routes existantes ;
2. conserver la liste comme preuve dans un fichier de redirections ;
3. supprimer les pages et entrées de registre obsolètes ;
4. ne conserver que les guides ayant franchi les quatre passes ;
5. rediriger chaque ancien slug vers la page active la plus proche ;
6. utiliser le hub `/guides` si aucune destination réellement équivalente
   n’existe ;
7. ne jamais rediriger une URL arbitraire inconnue ;
8. tester le statut HTTP et la destination de chaque redirection ;
9. documenter le risque de « soft 404 » lorsque la destination n’est pas
   équivalente ;
10. remplacer la redirection par la nouvelle route lorsque le guide est réécrit.

La suppression reste récupérable dans Git jusqu’à publication. Elle ne vaut pas
publication.

---

## 13. Publication et preuve de production

Seul l’orchestrateur publie après `GO_PUBLICATION`.

La séquence est :

1. vérifier le diff final ;
2. vérifier que le worktree ne contient aucune modification étrangère ;
3. committer l’état P4 exact ;
4. pousser la branche validée ;
5. intégrer dans la branche de production ;
6. attendre le déploiement Vercel ;
7. ouvrir l’URL publique ;
8. vérifier le statut HTTP, le HTML, le canonique, le robots et le rendu ;
9. tester plusieurs anciennes URL redirigées ;
10. communiquer l’URL seulement après cette vérification.

Les statuts doivent rester distincts :

- `VALIDE_LOCAL` : tests locaux réussis ;
- `POUSSE` : commit présent sur le dépôt distant ;
- `DEPLOYE` : plateforme terminée sans erreur ;
- `SERVI_EN_PRODUCTION` : URL publique vérifiée ;
- `INDEXE` : preuve Search Console ou moteur, jamais déduite du déploiement.

---

## 14. Prompt d’exécution à remettre à chaque agent

```text
Tu es l’agent distinct de la PASSE_N pour le guide SLUG.

Travaille uniquement dans WORKTREE.
Lis intégralement CLAUDE.md, la règle d’or SEO, la charte qualité, la roadmap,
le protocole maître et docs/research/SLUG.md avant toute modification.

État d’entrée : empreinte SHA-256 fournie par l’orchestrateur.
Périmètre d’écriture : page, image Open Graph, entrée de registre, fiche de
recherche et manifeste de cette passe. Aucun autre fichier.

Exécute seulement la mission de la PASSE_N. N’anticipe pas la passe suivante.
Ne publie pas. Ne pousse pas. Ne prétends pas qu’un test non exécuté a réussi.
Toute information inconnue reste INCONNU ou est retirée.

À la fin :
- exécute les contrôles proportionnés à tes modifications ;
- mets à jour le journal de passe ;
- produis le manifeste SHA-256 ;
- réponds avec PASSE_N_TERMINEE, fichiers, sources, contrôles, risques et
  chemin du manifeste.

L’orchestrateur relira et décidera GO ou NO_GO.
```

---

## 15. Bloc de clôture du guide

La fiche de recherche ne peut être déclarée close qu’avec :

```text
Guide :
Version P4 :
Agents distincts P1/P2/P3/P4 :
Gates G1/G2/G3/G4 :
Score final :
P0 :
P1 :
Tests locaux :
Commit :
Déploiement :
URL servie :
Redirections testées :
Indexation :
Décision finale :
```

Une case vide empêche toute formulation ambiguë de type « terminé ».
