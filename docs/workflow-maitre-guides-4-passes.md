# Workflow maître en quatre passes pour les guides Hagnéré Code

> **Document d’exécution.** La charte définit le niveau de qualité. Ce fichier
> indique dans quel ordre travailler, qui peut valider quoi, quelles traces
> conserver et quelle porte franchir avant de continuer.

- Version : **24 juillet 2026**
- Projet : **Hagnéré Code**
- Domaine canonique : **https://hagnere-code.ai**
- Périmètre : `src/app/guides/<slug>/`, `src/lib/guides.ts`,
  `src/components/guides/` et `docs/research/<slug>.md`

---

## 0. Le processus en une page

Les quatre passes correspondent exactement à quatre responsabilités distinctes :

| Passe                    | Travail                                                               | Responsable                             | Livrable principal                              | Question de sortie                                                   |
| ------------------------ | --------------------------------------------------------------------- | --------------------------------------- | ----------------------------------------------- | -------------------------------------------------------------------- |
| 1. Rechercher            | Comprendre le lecteur, la demande, les pages voisines et les faits    | Chercheur ou orchestrateur              | Dossier de preuves et plan annoté               | Peut-on écrire sans inventer ni dupliquer ?                          |
| 2. Écrire                | Rédiger et intégrer un guide complet à partir du dossier validé       | Un seul éditeur                         | Page, registre, image sociale et maillage       | Le brouillon répond-il entièrement à la décision ?                   |
| 3. Contre-auditer        | Refaire les vérifications et contredire le brouillon                  | Relecteur indépendant, en lecture seule | Rapport factuel, pédagogique, commercial et SEO | Un second regard peut-il défendre chaque conclusion ?                |
| 4. Humaniser et vérifier | Corriger la plume, retirer les automatismes, tester le snapshot final | Orchestrateur                           | Guide naturel, tests et preuves visuelles       | Une personne comprend-elle et la page fonctionne-t-elle réellement ? |

```text
P1 RECHERCHE VALIDÉE
        ↓
P2 BROUILLON COMPLET
        ↓
P3 CONTRE-AUDIT INDÉPENDANT VALIDÉ
        ↓
P4 PLUME ET QA VALIDÉES
        ↓
PRÊT POUR REVUE HUMAINE OU PUBLIABLE SELON L’AUTORISATION ACQUISE
```

Règles absolues :

1. une passe ne valide jamais automatiquement la suivante ;
2. la passe 1 ne rédige pas la page publique ;
3. un seul éditeur modifie les fichiers d’un guide ;
4. la passe 3 est menée par un regard indépendant de la rédaction ;
5. une modification après validation invalide les preuves qu’elle touche ;
6. aucun nombre de mots, de titres, de tableaux ou de FAQ ne constitue une
   porte de sortie ;
7. publier est une action distincte, soumise à autorisation et à une
   vérification de production ;
8. `P1` à `P4` désignent ici des passes ; `P0`, `P1`, `P2` et `REJETÉ`
   désignent la gravité dans un rapport contradictoire : les deux vocabulaires
   ne sont jamais interchangeables ;
9. un rapport n'est intégré au registre qu'après un contrôle de son snapshot,
   de ses liens, de ses calculs, de sa scorecard et du nombre réel de défauts.

---

## 1. Autorité, lectures et sources de vérité

### 1.1 Ordre de lecture unique

Avant toute action, lire intégralement, dans cet ordre :

1. `CLAUDE.md` ;
2. `docs/regle-or-vigilance-seo-publication.md` ;
3. `docs/charte-qualite-guides.md` ;
4. le présent workflow ;
5. `docs/roadmap-guides-seo.md` ;
6. `docs/research/_modele-guide.md` ;
7. le dossier de recherche du guide s’il existe ;
8. les fichiers techniques réellement concernés.

En cas de conflit :

1. instruction explicite actuelle de l’utilisateur ;
2. sécurité, droit applicable et vérité vérifiable ;
3. `CLAUDE.md` ;
4. règle d’or de publication ;
5. charte qualité ;
6. présent workflow ;
7. roadmap ;
8. conventions des anciens guides.

Un ancien guide peut fournir une convention de code. Il ne fournit ni le plan,
ni l’angle, ni le verdict du nouveau guide.

### 1.2 Sources de vérité du produit

| Élément                                               | Source de vérité                                 |
| ----------------------------------------------------- | ------------------------------------------------ |
| Métadonnées et statut d’un guide                      | `src/lib/guides.ts`                              |
| Guides visibles dans le hub, le sitemap et `llms.txt` | `PUBLISHED_GUIDES`                               |
| Domaine canonique                                     | `src/lib/seo.ts`                                 |
| Politique d’indexation                                | `src/lib/search-indexing.ts` et `guideRobots`    |
| Mise en page                                          | `src/components/guides/guide-layout.tsx`         |
| Blocs éditoriaux                                      | `src/components/guides/guide-content-blocks.tsx` |
| Recherche, preuves et arbitrages                      | `docs/research/<slug>.md`                        |
| Exigences éditoriales                                 | `docs/charte-qualite-guides.md`                  |

La stack et les versions viennent de `package.json` et du lockfile au moment du
travail. Ne jamais les recopier depuis un ancien rapport sans les vérifier.

### 1.3 Contrat technique d’un guide

Un guide utilise normalement :

```text
docs/research/<slug>.md
src/app/guides/<slug>/page.tsx
src/app/guides/<slug>/opengraph-image.tsx
src/lib/guides.ts
```

La page :

- est un Server Component sauf besoin client démontré ;
- récupère son entrée avec `getGuide("<slug>")` ;
- dérive metadata, canonical et robots du registre ;
- utilise `<GuidesShell>` puis `<GuideLayout>` ;
- commence le corps par `<p className="lead">` ;
- publie uniquement `Article` et `BreadcrumbList` lorsqu’ils reflètent le
  contenu visible ;
- transmet une FAQ visible unique via `faqItems` si une FAQ est utile ;
- possède une image sociale dédiée de 1 200 × 630 px.

Interdictions : `FAQPage`, `HowTo`, faux `Offer`, faux avis, `wordCount`
approximatif, densité de mot-clé imposée, ajout manuel au sitemap, à
`robots.txt` ou à `llms.txt`.

---

## 2. Journal, snapshot et travail à plusieurs

### 2.1 Journal obligatoire

Chaque dossier `docs/research/<slug>.md` contient :

```md
## Journal des quatre passes

| Passe           | État    | Date | Responsable | Snapshot | Blocages       |
| --------------- | ------- | ---- | ----------- | -------- | -------------- |
| 1. Recherche    | À faire |      |             |          |                |
| 2. Rédaction    | Bloquée |      |             |          | P1 non validée |
| 3. Contre-audit | Bloquée |      |             |          | P2 non validée |
| 4. Plume et QA  | Bloquée |      |             |          | P3 non validée |
```

États autorisés : `À faire`, `En cours`, `Bloquée`, `À reprendre` et
`Terminée — porte validée`.

### 2.2 Manifeste du snapshot

Un hash du seul `page.tsx` est insuffisant. Chaque passe consigne les fichiers
contrôlés et leur SHA-256 :

```bash
shasum -a 256 \
  src/app/guides/<slug>/page.tsx \
  src/app/guides/<slug>/opengraph-image.tsx \
  src/lib/guides.ts
```

Ajouter les pages modifiées pour le maillage ou tout composant partagé touché.
Le dossier de recherche ne consigne pas son propre hash : l’écrire dans le
fichier modifierait précisément ce hash. Après chaque porte, calculer le hash
en lecture seule :

```bash
shasum -a 256 docs/research/<slug>.md
```

Créer ensuite le manifeste frère immuable
`docs/research/manifests/<slug>-p<1|2|3|4>.sha256` avec `apply_patch`. La
redirection shell ne sert jamais à créer ou modifier ce fichier. Si le dossier
`manifests` n’existe pas encore, le créer dans le même patch.

Le rapport de passe pointe vers ce manifeste. Pour un fichier nouveau, relire
également tout son contenu ; un simple `git diff` peut l’omettre s’il n’est pas
encore suivi.

La passe suivante compare son entrée au manifeste précédent. Toute divergence
est lue et expliquée. Une modification matérielle remet les portes concernées à
`À reprendre`.

### 2.3 Retour arrière

| Défaut découvert                                         | Retour obligatoire                  |
| -------------------------------------------------------- | ----------------------------------- |
| fait, prix, règle, source ou calcul douteux              | Passe 3, puis nouvelle P4           |
| intention, URL, décision ou verdict à changer            | Passe 1, puis nouvelles P2 à P4     |
| section manquante ou architecture qui empêche de décider | Passe 2, puis nouvelles P3 et P4    |
| phrase artificielle sans impact factuel                  | Reste en passe 4                    |
| metadata ou JSON-LD infidèle                             | Passe 3                             |
| ressource ou CTA promis mais inexistant                  | Passe 2 ou retrait immédiat         |
| défaut mobile structurel                                 | Passe 2 pour le code, puis P3 et P4 |

### 2.4 Indépendance et parallélisme

- un agent peut rechercher ou rédiger ; il ne peut pas attribuer seul le statut
  `Publiable` à son propre guide ;
- la passe 3 est exécutée par un autre agent ou un relecteur disposant d’un
  contexte froid et explicitement chargé de contredire ;
- un propriétaire éditorial est nommé en P1 ; lui seul applique la rédaction,
  les corrections de P3 et les changements de P4 ;
- le relecteur de P3 reste en lecture seule ; le propriétaire éditorial
  applique les corrections et lui renvoie les points matériels ;
- les recherches de plusieurs guides peuvent avancer en parallèle ;
- l’écriture et l’intégration sont successives dans un worktree partagé, car le
  registre et le maillage sont communs ;
- un seul orchestrateur consolide et résout les contradictions ;
- un rapport d’agent n’est jamais une source et une simulation n’est jamais un
  test réalisé par un dirigeant réel.

### 2.5 Contrôle du rapport avant consolidation

Le responsable de consolidation ne copie jamais le verdict d'un agent dans le
registre sans ouvrir son livrable. Il vérifie au minimum :

1. que le rapport porte sur le bon slug et que les SHA-256 correspondent encore
   aux fichiers audités ;
2. que chaque URL décisive est directe, accessible ou explicitement signalée
   comme non revalidée, et que la source prouve réellement la phrase ;
3. que chaque formule, total, pourcentage, unité et arrondi est refait
   indépendamment ;
4. que la somme des dix axes correspond au score annoncé ;
5. que les nombres de P0, P1 et P2 correspondent aux lignes réellement
   documentées, sans regrouper artificiellement des problèmes ni compter deux
   fois la même cause ;
6. que les commandes et contrôles visuels annoncés ont une sortie, un
   environnement et un snapshot identifiables ;
7. que les limites `local`, `preview`, `production`, `publié` et `indexé`
   restent distinctes ;
8. que le rapport n'a modifié aucun fichier hors de son périmètre autorisé.

Une incohérence du rapport est corrigée et tracée avant consolidation. La
présence du fichier peut alors être notée `rapport présent`, mais la passe ne
devient `Terminée — porte validée` que si toutes ses conditions sont franchies.

---

## 3. Règles permanentes

### 3.1 Des dirigeants, pas des consultants

Le lecteur maîtrise son entreprise, pas le vocabulaire d’une agence, d’une DSI
ou d’un cabinet de conseil.

- mots du dirigeant avant mots du prestataire ;
- réponse avant méthode ;
- une idée principale par phrase ;
- terme technique expliqué lorsqu’il devient utile ;
- sujet, action et résultat identifiables ;
- bon choix, mauvais choix et possibilité de reporter ;
- aucune métaphore ou matrice que le lecteur doit apprendre avant de comprendre
  le sujet.

### 3.2 Zéro invention

Ne jamais inventer : client, témoignage, avis, résultat, prix, taux, délai,
qualification, effectif, fonctionnalité, obligation, jurisprudence, date,
validation humaine ou expérience Hagnéré Code.

Un scénario construit pour expliquer est annoncé dès sa première occurrence
comme **« exemple illustratif fictif »**. Ses hypothèses précèdent le résultat.
Il ne devient jamais une preuve sociale ni un seuil recommandé universel.

### 3.3 Fait, déduction et recommandation

Chaque affirmation décisive appartient à une catégorie :

- `FAIT VÉRIFIÉ` : directement soutenu par une source ;
- `DÉDUCTION` : conséquence raisonnable tirée de plusieurs faits ;
- `RECOMMANDATION HAGNÉRÉ CODE` : méthode ou choix éditorial assumé ;
- `ESTIMATION` : hypothèses, périmètre et date visibles ;
- `EXEMPLE ILLUSTRATIF FICTIF` : scénario pédagogique déclaré ;
- `INCERTITUDE` : à confirmer ou à ne pas publier.

Ne jamais attribuer à Google, à un éditeur ou à un régulateur une recommandation
que Hagnéré Code déduit lui-même.

### 3.4 Sources

Hiérarchie : artefact de première main autorisé, source officielle, étude
primaire, standard reconnu, benchmark documenté, recoupement de marché. Les
concurrents servent à comprendre la demande, pas à établir un fait lorsqu’une
source primaire existe.

Pour un prix, une version, une règle, une fonctionnalité, un taux ou une
obligation, la recherche web actuelle est obligatoire.

Une bibliographie finale ne suffit pas. Le lien ou la note apparaît au plus près
de l’affirmation visible qui change la décision. Une section « Sources et
limites » peut récapituler, mais ne remplace pas cette proximité.

### 3.5 Chiffres et calculs

Pour chaque valeur : combien, de quoi, dans quel sens, sur quelle période, dans
quel périmètre et sur quelle preuve ?

- formule, unités, hypothèses, résultat et arrondi ;
- HT/TTC et ponctuel/récurrent explicites ;
- inconnue nommée `à confirmer`, jamais transformée en zéro ;
- TCO sans double comptage ;
- gain net distinct du ROI ;
- temps valorisé seulement si réaffectation ou coût évité expliqués ;
- même valeur dans le corps, les tableaux, la FAQ et les pages liées.

### 3.6 Conversion honnête

- une action autonome reste possible sans contacter Hagnéré Code ;
- le bon fit et le mauvais fit sont visibles ;
- au maximum un `GuideInlineCTA` dans le corps ;
- le CTA arrive après la démonstration et décrit le résultat du clic ;
- aucune urgence artificielle ni garantie non contractualisée ;
- une ressource promise existe, fonctionne et reste utile sans échange d’adresse
  e-mail ;
- le guide peut conclure qu’il faut corriger, acheter un outil existant,
  attendre ou ne pas investir.

### 3.7 SEO et produit

- une intention principale, une décision principale et une URL ;
- title, meta, H1 et card copy uniques, naturels et fidèles ;
- aucun quota ou densité ;
- H2 issus des questions utiles ;
- liens contextuels et descriptifs ;
- date de modification seulement après changement substantiel ;
- JSON-LD miroir du visible ;
- `llms.txt` est un index complémentaire, pas un facteur Google ;
- généré, déployé, découvert, exploré, indexé et classé sont des états distincts.

### 3.8 Git et dépôt partagé

- lire `git status --short` avant toute modification ;
- préserver les changements de l’utilisateur et des autres agents ;
- ne jamais restaurer, écraser ou supprimer un travail non attribué ;
- un seul éditeur touche les fichiers partagés ;
- ne pas commit, push ou déployer sans autorisation ;
- corriger la source d’un test, jamais neutraliser le contrôle ;
- distinguer défaut introduit et défaut préexistant.

---

# PASSE 1 — Rechercher et décider

## 4. Objectif

Produire un dossier suffisant pour qu’un autre agent puisse rédiger sans
inventer, copier un concurrent ni deviner la décision du lecteur. La passe 1 ne
rédige pas `page.tsx`.

## 5. Étapes

### P1.0 — Prévol

- lire les documents obligatoires ;
- relever branche, `git status --short` et fichiers proches ;
- vérifier le slug dans la roadmap, le registre, les pages et la recherche ;
- créer ou mettre à jour `docs/research/<slug>.md` depuis le modèle ;
- passer P1 à `En cours`, consigner le responsable et nommer le propriétaire
  éditorial qui restera l’unique éditeur du guide.

### P1.1 — Brief du lecteur

Renseigner :

```text
Requête principale pressentie :
Lecteur précis :
Situation qui déclenche sa recherche :
Phrase qu’il dirait au téléphone :
Décision à prendre après lecture :
Niveau de connaissance initial :
Questions indispensables :
Objections et craintes :
Mots ordinaires employés :
Termes d’expert à traduire :
Action utile sans contact :
Bon fit / mauvais fit :
Hors périmètre :
Projet des 150 premiers mots :
```

Porte locale : une seule décision principale peut être formulée en une phrase.

### P1.2 — Déduplication

Comparer roadmap, registre, pages service, ressources et guides proches :

| Page | Intention | Réponse existante | Différence nécessaire | Lien ou fusion |
| ---- | --------- | ----------------- | --------------------- | -------------- |

Si environ 60 % de la réponse utile existe déjà, enrichir, fusionner ou changer
l’angle. Un synonyme ne justifie pas une URL.

### P1.3 — Demande et résultats existants

Observer une SERP actuelle et localisée, Search Console si disponible et les
formulations réellement rencontrées. Relever :

- type de résultats ;
- questions et mots du lecteur ;
- réponse donnée dès l’ouverture ;
- critères de comparaison ;
- preuves, exemples et outils proposés ;
- limites reconnues ;
- conflits d’intérêt ;
- angle mort empêchant encore une décision.

Ne pas copier un plan. Un outil SEO fournit une estimation, pas une vérité sur
le volume ou la difficulté.

La recherche concurrentielle couvre trois niveaux :

1. les résultats français représentatifs de l'intention ;
2. les meilleures ressources anglophones, avec les marchés américain et
   britannique lorsqu'ils apportent des réponses différentes ;
3. au moins un autre marché pertinent pour le sujet.

L'objectif n'est pas un nombre arbitraire d'URL. La collecte s'arrête lorsque
les nouveaux résultats n'ajoutent plus de type de réponse, de méthode,
d'objection, de preuve ou d'outil. Le dossier consigne les requêtes, pays,
langues, date et raison de cette saturation. Une donnée étrangère n'est jamais
convertie ou appliquée à la France sans requalification de sa devise, de son
cadre juridique, de son marché et de sa date.

Remplir ensuite la matrice de gain d'information :

| Question décisive | Réponse française la plus utile | Apport international | Réponse actuelle du guide | Manque | Amélioration prévue et testable |
| ----------------- | ------------------------------- | -------------------- | ------------------------- | ------ | ------------------------------- |
|                   |                                 |                      |                           |        |                                 |

La porte reste fermée si la différence annoncée est seulement « plus long »,
« plus complet », « plus humain » ou « mieux optimisé ».

### P1.4 — Fiche de preuves

| Affirmation | Catégorie | Source et passage | Périmètre | Consultation | Limite | Conséquence lecteur | Fraîcheur |
| ----------- | --------- | ----------------- | --------- | ------------ | ------ | ------------------- | --------- |

Consigner aussi : contradictions, informations retirées, inconnues et événement
qui imposera une future revalidation.

### P1.5 — Angle et dispositif utile

Choisir l’architecture selon la décision, pas selon un gabarit :

- comparatif : critères avant verdict, conditions égales, troisième option ;
- prix : inclus, exclus, hypothèses, scénarios et coût total ;
- diagnostic : symptômes, causes, contrôles, urgence et ordre d’action ;
- méthode : résultat, étapes, responsable et critère d’acceptation ;
- juridique : juridiction, date, obligation, exceptions et source compétente.

Comparer trois à cinq guides voisins et nommer au moins trois différences de
progression, d’ouverture, d’exemple, de format ou de conclusion.

Préparer aussi les démonstrations qui feront réellement gagner du temps au
lecteur :

- prix, ROI, budget ou délai : trois scénarios — simple, central et exigeant —
  avec formules, inclus, exclus, horizon et variable de bascule ;
- comparaison : coût total sur un même horizon, critères qui changent selon le
  profil, cas où chaque option gagne et option de report ;
- outil nommé : fonctions et tarifs officiels datés, coût de changement et
  scénario métier complet ;
- processus : avant/après, personnes, temps, point de rupture et critère
  d'arrêt ;
- risque, droit ou sécurité : situations concrètes, urgence, responsable,
  effort et recours éventuel à un spécialiste.

Si un chiffre serait artificiel, le dossier l'explique. Cette justification
est préférable à une précision inventée.

Enfin, rédiger le brouillon de la **position Hagnéré Code** : recommandation
pour le cas fréquent, faits qui la fondent, contre-cas où l'option opposée
gagne, signal de révision et solution que nous déconseillons même si nous
pourrions la vendre.

Pour une requête à forte intention, définir l'actif signature : calculateur,
modèle, matrice, protocole, checklist ou cas annoté. Il doit produire un
résultat autonome, être réellement créé et être testé comme le reste du
produit. Si aucun actif n'est pertinent, documenter la démonstration qui rendra
la page difficile à remplacer.

Prévoir enfin l'après-décision : mesure de départ, indicateur métier, fréquence
de revue, responsable, situation d'échec et critère d'arrêt ou de retour
arrière.

### P1.6 — Plan annoté

| Section provisoire | Question résolue | Preuve ou exemple | Conséquence | Format |
| ------------------ | ---------------- | ----------------- | ----------- | ------ |

Règles :

- les 150 premiers mots montrent la situation, expliquent le terme central,
  donnent la réponse courte et annoncent la décision ;
- chaque H2 se comprend isolément ;
- une section sans réponse, preuve ou conséquence est retirée ;
- prose pour expliquer, tableau pour comparer, liste numérotée pour agir ;
- la FAQ ne récupère que les questions résiduelles ;
- le CTA vient après une valeur autonome suffisante ;
- les sources importantes sont prévues près des affirmations.

## 6. Porte de sortie P1

- [ ] brief complet et décision unique ;
- [ ] URL distincte justifiée ;
- [ ] recherche actuelle et datée ;
- [ ] benchmark français et international arrivé à saturation expliquée ;
- [ ] matrice de gain d'information remplie avec un apport vérifiable ;
- [ ] fiche de preuves exploitable ;
- [ ] faits, déductions et recommandations séparés ;
- [ ] aucune contradiction décisive masquée ;
- [ ] scénarios, calculs ou justification de leur absence préparés ;
- [ ] position Hagnéré Code et contre-cas fondés ;
- [ ] conflit d'intérêts éditorial identifié ;
- [ ] actif signature défini ou absence justifiée ;
- [ ] échec, mesure après décision et critère d'arrêt préparés ;
- [ ] plan annoté et distinct des voisins ;
- [ ] action autonome, bon fit et mauvais fit définis ;
- [ ] dossier de recherche suffisant pour un autre rédacteur ;
- [ ] snapshot consigné ;
- [ ] `Passe 1 = Terminée — porte validée`.

### Rapport P1

```text
PASSE 1 TERMINÉE
Slug :
Lecteur et phrase réelle :
Décision :
Angle et forme dominante :
Pages proches et différence :
Sources décisives :
Incertitudes exclues :
Action autonome et CTA possible :
Plan :
Snapshot :
```

---

# PASSE 2 — Écrire et intégrer

## 7. Objectif

Transformer le dossier validé en un guide complet, utile et intégré. Un seul
éditeur écrit. Il n’improvise pas un fait absent de P1 : il retourne au dossier
de preuves.

## 8. Étapes

### P2.0 — Vérifier l’entrée

- P1 terminée ;
- manifeste identique ou diff expliqué ;
- aucune édition parallèle ;
- intention, décision, plan et sources connus.

### P2.1 — Écrire le guide complet

Ordre naturel recommandé, sans gabarit obligatoire :

1. situation et réponse courte ;
2. explication du terme central ;
3. démonstration dans l’ordre des questions ;
4. options, mauvais fits et possibilité d’attendre ;
5. exemples ou calculs utiles ;
6. décision ou action finale ;
7. CTA éventuel ;
8. sources récapitulatives et FAQ résiduelle.

Chaque affirmation décisive reçoit sa source au moment où elle apparaît. Les
exemples fictifs sont étiquetés avant leurs chiffres.

Le brouillon implémente le gain d'information annoncé en P1. Pour un guide de
prix, de ROI, de délai ou de comparaison, les trois scénarios préparés sont
visibles, comparables et reproductibles. Pour les autres familles, les
démonstrations prévues en P1.5 sont intégrées ou leur retrait est motivé dans
le dossier. Chaque grande recommandation est suivie d'une conséquence concrète
pour le dirigeant.

Lorsque le sujet appelle un choix, une section ou un passage clairement
attribué donne la position Hagnéré Code, ses preuves, ses conditions et son
contre-cas. Le verdict ne se cache ni dans la conclusion ni dans le CTA.

Le conflit d'intérêts de l'auteur ou des sources commerciales est déclaré à
l'endroit où il aide à interpréter la comparaison. L'actif signature prévu est
disponible et testable ; sinon, la page n'en fait aucune promesse. La dernière
partie explique ce qui doit être mesuré après la décision et dans quel cas il
faut corriger, arrêter ou revenir en arrière.

En dehors des familles pour lesquelles P1.5 exige des scénarios, ne pas imposer
par réflexe : réponse rapide, sommaire, tableau, FAQ, ressource ou CTA. Chaque
forme doit résoudre un besoin réel du sujet.

### P2.2 — Contrat de langage humain

- mots du lecteur ;
- acronymes développés au premier usage ;
- aucun titre métaphorique ou administratif ;
- une conséquence après chaque comparaison importante ;
- aucune phrase générique qui resterait vraie après substitution du sujet ;
- pas de répétition mécanique « paragraphe, liste, encadré ».

### P2.3 — Conversion

Le lecteur sait :

- ce qu’il peut faire seul ;
- quand Hagnéré Code peut aider ;
- quand une solution moins chère, un outil existant ou un report est préférable ;
- ce qu’il obtient après le clic ;
- où mène le CTA réel.

### P2.4 — Intégration

Créer ou modifier :

1. `page.tsx` ;
2. `opengraph-image.tsx` ;
3. l’entrée `GUIDES` avec `editorialStatus: "ready-for-human-review"` ;
4. les liens entrants et sortants pertinents ;
5. le dossier de recherche.

Contrôler metadata, canonical, robots, H1, auteur, dates, Article,
BreadcrumbList, FAQ visible, ancres, image sociale et absence de schémas
interdits.

### P2.5 — Contrôle rapide

```bash
git diff --check
npx eslint <tous-les-fichiers-code-modifiés>
npx tsc --noEmit
```

## 9. Porte de sortie P2

- [ ] guide complet sans placeholder ;
- [ ] décision et réponse présentes dès l’ouverture ;
- [ ] toutes les affirmations décisives reliées au dossier et aux sources ;
- [ ] coûts, délais, personnes, risques et alternatives couverts si pertinents ;
- [ ] gain d'information promis réellement visible ;
- [ ] scénarios et calculs reproductibles, ou absence explicitement justifiée ;
- [ ] position professionnelle, contre-cas et signal de révision visibles ;
- [ ] conflit d'intérêts, échec et mesure après décision visibles ;
- [ ] actif signature prévu disponible et testé, ou absence justifiée ;
- [ ] si un CTA ou une ressource est prévu, il existe et a été testé ; sinon,
      la décision « non pertinent » est justifiée ;
- [ ] page, OG, registre, données structurées et maillage intégrés ;
- [ ] statut de revue humaine conservé ;
- [ ] contrôles rapides sans défaut introduit ;
- [ ] snapshot consigné ;
- [ ] `Passe 2 = Terminée — porte validée`.

### Rapport P2

```text
PASSE 2 TERMINÉE
Fichiers créés ou modifiés :
Ouverture et réponse :
Forme propre au sujet :
Exemples ou calculs :
Sources visibles :
Action autonome, bon fit et mauvais fit :
CTA et destination :
Contrôles rapides :
Snapshot :
```

---

# PASSE 3 — Contre-auditer et corriger

## 10. Objectif

Traiter le brouillon comme potentiellement faux, incomplet ou trop commercial.
Le relecteur indépendant travaille en lecture seule, refait les contrôles et
cherche des raisons de contredire le verdict. L’orchestrateur applique ensuite
les corrections.

## 11. Étapes

### P3.0 — Relecture intégrale

Lire page, dossier, registre, OG, liens entrants et composants touchés. Relever
la progression, les assertions, calculs, scénarios, sources, alternatives,
promesses, metadata et points où un dirigeant peut décrocher.

### P3.1 — Vérification indépendante

Refaire, sans reprendre les conclusions de P1 :

- sources officielles et règles ;
- prix, produits, versions et fonctions actuels ;
- calculs, unités, arrondis et hypothèses ;
- termes de recherche, objections et résultats existants ;
- conséquences métier, charge client, propriété, accès et sortie ;
- alternatives et statu quo.

Pour tout sujet volatil, rouvrir les sources actuelles. Une source ancienne
encore accessible n’est pas automatiquement la meilleure preuve disponible.

Rouvrir également au moins trois ressources importantes de la matrice
concurrentielle, dont une internationale. Le relecteur cherche une réponse,
preuve, objection, comparaison ou méthode meilleure que celle du brouillon.
S'il en trouve une qui change la décision et que la page ne la traite pas, le
point est au minimum `P1`.

Refaire tous les scénarios à partir des hypothèses publiées. Modifier à tour de
rôle le volume, le coût du temps, l'horizon et l'hypothèse la plus incertaine.
Une conclusion qui ne change jamais malgré des hypothèses raisonnables est
suspecte de biais ou d'une analyse de sensibilité insuffisante.

### P3.2 — Audit pédagogique

- la réponse est comprise dans les 150 premiers mots ;
- chaque H2 se comprend seul ;
- aucun terme ne demande une traduction mentale ;
- les tableaux restent compréhensibles sur téléphone ;
- chaque section produit une conséquence ;
- les FAQ répondent dans leur première phrase ;
- le lecteur sait quoi faire, quoi mesurer et quand arrêter.

### P3.3 — Audit comparatif et commercial

- options jugées à conditions égales ;
- aucune option artificiellement affaiblie ;
- coûts cachés et temps interne ;
- apport mesurable par rapport aux meilleures réponses françaises et
  internationales ;
- recommandation professionnelle attribuée, prouvée et contredite par un
  contre-cas réel ou plausible ;
- scénarios qui ne conduisent pas tous mécaniquement à l'offre Hagnéré Code ;
- bon fit, mauvais fit et option moins chère ;
- aucune promesse Hagnéré Code non prouvée ;
- un CTA maximum, destination et résultat exacts ;
- scénario fictif clairement nommé ;
- absence de faux client, faux chiffre ou peur artificielle.

### P3.4 — Audit SEO et technique

- intention distincte et absence de cannibalisation ;
- title, meta, H1 et hero fidèles ;
- canonical, robots, dates et statut ;
- Article et BreadcrumbList identiques au visible ;
- aucun `FAQPage`, `HowTo`, faux `Offer` ou `wordCount` ;
- liens internes et externes valides ;
- au moins un lien entrant pertinent ;
- image sociale cohérente.

### P3.5 — Rapport contradictoire

Classer chaque problème :

- `P0` : faux, trompeur, juridiquement risqué ou décision majeure impossible ;
- `P1` : manque important de preuve, pédagogie, comparaison, profondeur,
  gain d'information ou conversion ;
- `P2` : amélioration réelle mais non bloquante ;
- `REJETÉ` : suggestion qui réduirait la précision ou sortirait du périmètre.

Le rapport contient un bloc canonique `score actuel`, `P0 ouverts`, `P1
ouverts`, `P2 ouverts` et un identifiant unique par incident. Le tableau
obligatoire est :

| ID | Gravité | Fichier et preuve | Conséquence lecteur | Correction | Revalidation |
| -- | ------- | ----------------- | ------------------- | ---------- | ------------ |
| P0-01 | P0 | | | | |

Le compteur est égal au nombre d'identifiants ouverts. Une même cause n'est pas
recomptée à chaque occurrence. Les mots `P1`, `P2`, `P3` et `P4` qui désignent
des passes ne sont jamais comptés comme des incidents. Une suggestion rejetée
reçoit un ID `R-01` et un motif conservé.

### P3.6 — Correction et revalidation

L’orchestrateur applique les corrections par blocs. Le relecteur vérifie les P0
et P1 matériels sur le nouveau snapshot. Si le verdict ou l’intention change,
retour P1 ; si une nouvelle section structurante apparaît, retour P2.

Contrôle intermédiaire :

```bash
git diff --check
npm run check:seo
npx eslint <tous-les-fichiers-code-modifiés>
npx tsc --noEmit
```

## 12. Porte de sortie P3

- [ ] relecteur indépendant identifié ;
- [ ] page et dossier relus intégralement ;
- [ ] faits décisifs confirmés ou retirés ;
- [ ] calculs refaits ;
- [ ] faits, déductions et recommandations correctement attribués ;
- [ ] sources proches des affirmations ;
- [ ] contradictions résolues ou visibles ;
- [ ] P0 et P1 corrigés puis revérifiés ;
- [ ] pédagogie, comparaison et conversion défendables ;
- [ ] aucun défaut SEO ou technique introduit ;
- [ ] snapshot consigné ;
- [ ] `Passe 3 = Terminée — porte validée`.

### Rapport P3

```text
PASSE 3 TERMINÉE
Relecteur indépendant :
Affirmations et sources revérifiées :
Calculs refaits :
P0 trouvés / corrigés :
P1 trouvés / corrigés :
P2 ouverts ou traités :
Identifiants et compteurs réconciliés :
Suggestions rejetées et pourquoi :
Corrections pédagogiques et commerciales :
Revalidation du relecteur :
Contrôles intermédiaires :
Snapshot :
```

---

# PASSE 4 — Humaniser, tester et figer

## 13. Objectif

Rendre le guide naturel, précis et agréable sans toucher silencieusement aux
faits validés. Puis tester le snapshot complet dans le code et dans un vrai
navigateur.

La passe anti-IA ne cherche pas à tromper un détecteur. Elle retire ce qui gêne
une personne : abstraction, rythme mécanique, survente, répétition et logique
implicite.

## 14. Étapes

### P4.0 — Lecture humaine complète

Lire à voix haute l’ouverture, les transitions et la conclusion, puis relire
toutes les sections, les encadrés, les tableaux, le CTA, les sources et la FAQ.

Traquer sans remplacement automatique :

- auto-félicitation et superlatifs ;
- triplettes ou parallélismes répétés ;
- métaphore fabriquée ;
- jargon de consultant ou formulation administrative ;
- connecteurs vides ;
- nominalisations et verbes neutres ;
- paragraphes de longueur artificiellement régulière ;
- dramatisation ;
- conclusion générique ;
- deux phrases vraies sans lien de cause, de condition ou de limite.

Le parallélisme utile à une comparaison reste. Une phrase exacte ne devient pas
« punchy » au prix de la vérité.

### P4.1 — Tests de plume

1. **Substitution** : si l’ouverture accepte n’importe quel sujet, elle est
   générique.
2. **150 mots** : situation, définition, réponse et décision.
3. **Sujet-action-résultat** : aucun passage abstrait sans acteur ni effet.
4. **Titres isolés** : chaque H2 se comprend seul.
5. **Lecture orale** : aucune phrase qui oblige à reprendre son souffle ou à
   traduire.
6. **Point d’ennui** : raccourcir, déplacer, prouver ou retirer.
7. **Variété utile** : la forme découle du sujet, pas des guides voisins.
8. **Téléphone** : la décision n’est pas cachée dans une colonne.
9. **FAQ** : première phrase immédiatement utile.
10. **Sortie** : le lecteur sait agir et comprend le résultat du clic.
11. **Coupe de 20 %** : vérifier si une partie peut être retirée sans perdre une
    preuve, une nuance ou une décision.

Après la réécriture, relire le diff sémantique. Toute phrase modifiée qui
contient un chiffre, une source, une négation, une modalité, un délai, un prix
ou le verdict retourne au relecteur de P3. Cette liste n’est qu’un minimum :
toute modification de sens factuel, causal, juridique ou décisionnel, y
compris un changement de périmètre, de responsabilité ou de recommandation,
impose elle aussi ce retour. Le rapport final consigne soit cette revalidation,
soit « aucun changement sémantique ».

### P4.2 — Gel du snapshot

Avant le gel, consigner l’autorisation éditoriale et fixer l’état du registre :

- sans test humain réel ni délégation explicite, conserver
  `editorialStatus: "ready-for-human-review"` ;
- avec validation acquise, retirer ce marqueur avant le build public ;
- cette décision ne vaut pas encore statut `Publiable` : les contrôles suivants
  restent bloquants.

Annoncer ensuite le gel d’écriture, relever `git status --short`, consigner le
manifeste complet et arrêter les éditions. Toute modification ultérieure, y
compris du statut du registre, impose un nouveau gel et la reprise de P4.3 à
P4.6.

### P4.3 — Batterie bloquante

```bash
npm run check:seo
npx eslint <tous-les-fichiers-code-modifiés>
npx tsc --noEmit
npm test
NEXT_PUBLIC_ENV=production npm run build
git diff --check
```

Ne pas annoncer un build vert si `postbuild` échoue. Ne pas compter deux fois
les tests du `prebuild`. Un défaut introduit bloque ; un défaut préexistant est
documenté et n’est jamais présenté comme vert.

### P4.4 — Route et HTML du build gelé

Démarrer le `.next` fraîchement produit, par exemple avec
`NEXT_PUBLIC_ENV=production npm run start -- -p <port>`, ou utiliser une preview
rattachée au commit exact du manifeste. Consigner URL, port, mode et commit.
Vérifier : statut 200, title, H1 unique, canonical, robots, JSON-LD parsable,
FAQ dans le DOM, image sociale, liens et absence d’erreur.

Un 200 ne prouve pas une page visible.

### P4.5 — Vrai navigateur

Contrôle obligatoire à **320, 390, 768, 1 024 et 1 440 px**, puis aux ruptures
réellement touchées par les composants. Si un composant partagé ou la mise en
page change, ajouter **360, 430, 640, 1 280 et 1 600 px**.

Vérifier : hero, H1, auteur, sommaire, ancres, cartes ou tableaux, formules,
CTA, FAQ au clavier, focus, footer, débordement, chevauchement, contenu coupé,
console et requêtes critiques. Contrôler clair et sombre si le composant touché
les gère.

À 390 px, situation, choix et conséquence doivent rester visibles ensemble.

### P4.6 — Image sociale

Route en 200, dimensions 1 200 × 630, texte non coupé, titre fidèle, marque
correcte et aucune promesse absente de la page.

### P4.7 — Scorecard et constat du statut

Noter de 0 à 10 avec une preuve localisable et un manque résiduel : intention,
décision, pédagogie, profondeur, preuve, comparaison, originalité, style,
conversion et SEO/produit. Une note de 10 exige d'avoir cherché activement ce
qui pourrait mettre la page en défaut ; elle n'est jamais attribuée parce que
le texte est long. Refaire l'addition des dix axes avec un second calcul avant
de publier le total ; un score annoncé qui ne correspond pas à sa grille
invalide le rapport jusqu'à rectification.

Seuil : **90/100**, aucun axe sous 8, et `Intention`, `Décision`, `Pédagogie`,
`Profondeur`, `Preuve` et `Comparaison` à 9 ou 10.

Bloquants indépendamment du score : ouverture ratée, jargon propriétaire,
comparaison cachée sur mobile, fait décisif douteux, source seulement en
bibliographie, CTA trompeur, test ou contrôle visuel obligatoire en échec.

Ne pas confondre trois niveaux :

1. l’**état de passe** du journal utilise seulement `À faire`, `En cours`,
   `Bloquée`, `À reprendre` ou `Terminée — porte validée` ;
2. le **stade éditorial** ci-dessous décrit ce qui est réellement prouvé ;
3. le **registre** ne connaît qu’une porte binaire : présence de
   `editorialStatus: "ready-for-human-review"` ou publication autorisée sans ce
   marqueur.

Stades éditoriaux exacts :

| Statut                  | Sens                                                      |
| ----------------------- | --------------------------------------------------------- |
| Brouillon               | recherche ou rédaction incomplète                         |
| Faits vérifiés          | P3 validée, style encore révisable                        |
| Prêt techniquement      | batterie locale passée                                    |
| Prêt pour revue humaine | aucun blocage connu, validation éditoriale restante       |
| Publiable               | score, contre-audit, autorisation éditoriale et QA passés |
| Publié                  | URL de production contrôlée                               |
| Indexé                  | état confirmé dans Search Console                         |

Sans lecteur humain réel ou délégation explicite du commanditaire, le statut
maximal reste `Prêt pour revue humaine` et `editorialStatus` demeure.

Cette étape constate l’état testé ; elle ne modifie plus le registre. Si le
statut appliqué en P4.2 n’est pas le bon, retourner en P4.2 puis reconstruire et
retester l’artefact.

## 15. Porte de sortie P4

- [ ] article entier relu après les corrections locales ;
- [ ] automatismes retirés sans perte factuelle ;
- [ ] aucun retour P3 non traité ;
- [ ] snapshot gelé ;
- [ ] batterie complète verte ;
- [ ] route, HTML et OG contrôlés ;
- [ ] rendu visible contrôlé aux largeurs requises ;
- [ ] score ≥ 90/100, aucun axe sous 8 et axes obligatoires à 9 ou 10 ;
- [ ] validation humaine ou délégation décrite honnêtement ;
- [ ] statut du registre cohérent ;
- [ ] `Passe 4 = Terminée — porte validée`.

### Rapport P4

```text
PASSE 4 TERMINÉE
Passages humanisés :
Coupe ou resserrement :
Retour P3 effectué :
Scorecard justifiée :
Validation humaine réelle : oui/non
Autorisation éditoriale :
Commandes et résultats :
Largeurs et états contrôlés :
Route, OG et console :
Snapshot final :
Statut maximal :
Verdict :
```

---

## 16. Sprint de trois guides

Pour trois guides :

1. les recherches P1 peuvent avancer en parallèle ;
2. l’orchestrateur consolide chaque dossier ;
3. la rédaction P2 est exécutée successivement, un guide à la fois ;
4. chaque guide reçoit sa propre P3 indépendante ;
5. chaque guide franchit sa P4 éditoriale et son contrôle navigateur avant le
   début de la rédaction du suivant ;
6. le registre et le maillage sont modifiés par un seul éditeur ;
7. aucun test sur un guide ne vaut pour les deux autres ;
8. l’ajout d’un guide suivant invalide le hash global du registre des guides
   précédents, sans invalider leur contre-audit éditorial ;
9. après les trois guides, identifier toute page ou tout composant modifié
   depuis sa propre P4, notamment à cause du maillage tardif ; si le sens a
   changé, reprendre P3, puis refaire P4.3 à P4.6 — navigateur compris — sur
   toutes les routes concernées ;
10. geler le lot complet, recalculer tous les manifestes, relancer la batterie
    P4 de production et revérifier les trois routes ;
11. le lot n’est publié que lorsque chaque statut individuel et le snapshot
    final commun sont démontrables.

Cette organisation permet la vitesse sur la recherche sans transformer les
guides en production parallèle mécanique.

---

## 17. Après publication

Après une publication autorisée :

- URL publique en 200 ;
- canonical exact ;
- robots `index, follow` ;
- présence dans hub, sitemap et `llms.txt` ;
- Article et BreadcrumbList publics ;
- image sociale, liens, FAQ et ressource éventuelle ;
- aucune erreur console ou réseau critique ;
- indexation contrôlée ultérieurement sans la déduire d’une soumission ;
- impressions, requêtes, clics, clics CTA et demandes observés avant une nouvelle
  réécriture ;
- `dateModified` changée seulement après publication d’une modification
  substantielle.

---

## 18. Prompt de lancement

```text
Tu travailles sur UN guide Hagnéré Code.

SUJET : <SUJET>
SLUG : <SLUG>
PASSE : <1|2|3|4>

Lis intégralement, dans l’ordre : CLAUDE.md, la règle d’or de publication, la
charte qualité, le workflow en quatre passes, la roadmap, le modèle de dossier,
le dossier du guide et les fichiers concernés.

Exécute uniquement la passe demandée. Vérifie la porte et le manifeste de la
passe précédente. Si l’état a changé, documente le diff et retourne à la passe
nécessaire.

Règles : zéro invention, sources primaires et actuelles, faits séparés des
déductions, sources visibles près des affirmations, un seul éditeur, exemples
fictifs étiquetés, aucun schéma interdit, aucun commit/push/déploiement sans
autorisation, préservation du travail partagé.

Mets à jour le journal, le rapport de sortie et le snapshot. Ne déclare jamais
une porte validée si une case bloquante reste ouverte.
```

---

## 19. Règle finale

Un guide n’est pas terminé parce qu’il est long, compilable ou « humain » en
apparence. Il est terminé lorsque :

- le lecteur comprend et peut décider ;
- chaque affirmation décisive est prouvée ou honnêtement qualifiée ;
- les quatre responsabilités ont été exercées dans l’ordre ;
- un second regard a réellement contredit le brouillon ;
- le rendu, les tests et le statut ont été vérifiés sur le snapshot final.

Si une condition manque, le guide retourne à la passe appropriée.
