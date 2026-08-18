# Audit approfondi — `dette-technique-cout-entreprise`

Date : 24 juillet 2026

Auditeur concurrentiel : Codex, lot benchmark international

Snapshot du guide : `src/app/guides/dette-technique-cout-entreprise/page.tsx`, SHA-256 `405ede2fde47968178b8f81002fb35d166813cdd06ea4645706c10a61abac90b`

Périmètre : audit éditorial et décisionnel uniquement. Aucune modification de la page publique n’a été réalisée dans ce lot.

## 0. Contre-audit humain indépendant — lecture froide

### Méthode et snapshot

La page publique a d’abord été lue seule, du hero aux sources et à la FAQ,
sans consulter le deep-dive concurrentiel. Les constats de cette lecture
froide ont ensuite été figés avant confrontation avec
`docs/audits/giga-audit-2026-07-24/research/dette-technique-cout-entreprise-deep-dive.md`.

```text
Fichier audité : src/app/guides/dette-technique-cout-entreprise/page.tsx
SHA-256 : 405ede2fde47968178b8f81002fb35d166813cdd06ea4645706c10a61abac90b
Lecteur test : dirigeant non technique dont une application utile devient lente ou risquée à modifier
Question test : « Est-ce que je peux décider combien investir et dans quelle option après cette seule lecture ? »
Réponse : non
P0 : 2
P1 : 7
P2 : 5
Verdict : NO GO — réécriture substantielle requise
```

La confrontation au deep-dive confirme les deux défauts centraux de la lecture
froide : le risque de double comptage dans la formule et l’absence de
comparaison économique à périmètre égal. Elle apporte des sources et des
scénarios utilisables pour corriger ces défauts ; elle ne change pas le
verdict humain.

### Réaction probable d’un dirigeant

Le lecteur se reconnaît immédiatement dans « deux jours deviennent trois
semaines ». Il comprend aussi la recommandation la plus importante : ne pas
autoriser automatiquement une réécriture parce qu’une équipe prononce
« dette technique ». La plume est calme, la définition est intelligible et le
journal des cinq changements donne un premier geste utile.

Son expérience se dégrade au moment où le guide doit tenir la promesse du
titre. Il trouve une formule sans exemple numérique, six réponses sans coût
commun et un cas fictif qui s’arrête avant le calcul. Il ne sait donc pas :

- combien la friction annuelle représente dans un cas réaliste ;
- quelle part sort réellement de la banque et quelle part correspond à une
  capacité interne déjà payée ;
- à partir de quel niveau une stabilisation devient préférable à l’attente ;
- si une rénovation à 60 000 € est plus raisonnable qu’une réécriture à
  120 000 € sur 12, 36 ou 60 mois ;
- quels coûts de migration, de double fonctionnement, de recette, de formation
  et de retrait doivent apparaître dans les devis ;
- quand l’âge peut être toléré et quand une fin de support ou un risque de
  sécurité impose d’agir.

Le guide est donc humain dans sa forme, mais encore trop court dans sa
démonstration pour convertir un dirigeant exigeant. Il crée de la confiance,
puis renvoie le choix économique à une discussion commerciale. La meilleure
version doit permettre au lecteur de contester un devis avant même de contacter
Hagnéré Code.

### Score humain de référence

| Axe         |   Note /10 | Motif de la note                                                                                                                       |
| ----------- | ---------: | -------------------------------------------------------------------------------------------------------------------------------------- |
| Intention   |          9 | Situation précise, promesse fidèle au problème et verdict précoce                                                                      |
| Décision    |          7 | Les options existent, mais aucun seuil ni résultat économique ne permet de choisir                                                     |
| Pédagogie   |          8 | Définition, contre-exemples et journal sont clairs ; la partie financière ne démontre rien                                             |
| Profondeur  |          6 | Code, tests, données et migration sont évoqués ; portefeuille, support, sécurité, coexistence et conduite du changement restent minces |
| Preuve      |          6 | Deux sources SEI solides, mais insuffisantes pour étayer mesure, performance, risque et modernisation                                  |
| Comparaison |          5 | Six réponses qualitatives, sans mêmes fonctions, horizon, coûts internes ni sortie                                                     |
| Originalité |          8 | Le journal des cinq changements est un bon actif éditorial propre au sujet                                                             |
| Style       |          8 | Ton humain et peu jargonnant ; progression trop régulière et quelques expressions de consultant                                        |
| Conversion  |          7 | CTA cohérent et non manipulateur, mais aucun livrable autonome ni résultat avant contact                                               |
| SEO/produit |          7 | Intention, metadata et maillage sortant cohérents ; couverture décisionnelle et preuve propriétaire insuffisantes                      |
| **Total**   | **71/100** | **14,2/20 — solide introduction, dossier de décision incomplet**                                                                       |

Le score de **71/100, soit 14,2/20**, est le score de référence pour le
snapshot audité. Il est volontairement plus sévère qu’une note de simple
lisibilité : le titre promet de mesurer un coût et le lecteur ne peut pas
encore refaire ce calcul ni comparer les solutions.

### Les 150 premiers mots

**Verdict : partiellement réussis.** Les lignes 240 et 300–317 donnent une
situation concrète, traduisent le terme principal et empêchent une réécriture
réflexe. Le lecteur comprend le premier geste à accomplir.

Il manque toutefois, avant le sommaire :

- le résultat chiffré que la page va lui apprendre à produire ;
- l’horizon sur lequel les options seront comparées ;
- le logiciel standard et le statu quo parmi les vraies alternatives ;
- les cas où l’urgence de support ou de sécurité change le verdict ;
- la limite « exemples remplaçables, pas seuils universels ».

**Ouverture proposée, à tester entre 120 et 150 mots :**

> Une évolution annoncée en deux jours en prend finalement quinze, un export
> casse et deux salariés contournent le logiciel à la main. Votre équipe parle
> de dette technique ; un prestataire propose une réécriture. Notre avis : ne
> financez pas un grand chantier sur cette seule phrase. Commencez par mesurer
> ce que les cinq à dix derniers changements ont réellement mobilisé, sans
> additionner deux fois les mêmes heures. Séparez ensuite l’argent sorti de
> votre banque, la capacité interne immobilisée, le risque d’incident et une
> éventuelle vente retardée. Nous comparerons sur 36 mois cinq choix : attendre
> sous surveillance, stabiliser une zone, rénover par étapes, remplacer par un
> logiciel standard ou réécrire. Vous verrez aussi quand une fin de support, la
> sécurité ou un métier devenu impossible à faire évoluer change le verdict.
> Les montants sont des exemples à remplacer par vos données.

Cette ouverture ne doit être publiée que si les calculs, les cinq options et
les contre-cas annoncés existent réellement dans le corps.

### Défauts classés

#### P0 — décision majeure impossible ou total potentiellement trompeur

| Localisation   | Défaut                                                                                                                                                                                                                  | Conséquence pour le lecteur                                                                | Correction exigée                                                                                                                                                                                       |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Lignes 488–500 | La formule additionne « heures supplémentaires », « prestations externes » et « coût évité ou travail déplacé ». Elle mélange trésorerie, capacité et bénéfice potentiel ; la même heure peut être valorisée deux fois. | Un total apparemment prudent peut être faux et justifier un chantier trop grand.           | Séparer quatre sous-totaux non additionnés par défaut : trésorerie, capacité interne, risque attendu et opportunité. Donner un identifiant unique à chaque événement et une règle anti-double comptage. |
| Lignes 522–552 | Les six réponses sont décrites sans fonctions, volume, horizon, migration, coexistence, exploitation ni sortie communs.                                                                                                 | Le lecteur ne peut pas décider entre attendre, stabiliser, rénover, remplacer ou réécrire. | Publier un TCO à 36 mois sur le même périmètre, puis une sensibilité à 12 et 60 mois. Faire gagner au moins une fois l’attente et, dans un autre scénario, une option plus radicale.                    |

#### P1 — manque important de profondeur, de preuve ou d’action

| Localisation              | Défaut                                                                                                                                                                      | Correction exigée                                                                                                                                                                                |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Lignes 433–440            | Arpège Services illustre le problème, mais aucune heure, aucun taux, aucun sous-total et aucune décision ne sont calculés.                                                  | Transformer le cas en exemple illustratif complet dont chaque opération peut être refaite.                                                                                                       |
| Lignes 379–388 et 591–600 | Cinq événements puis trois changements sont présentés comme une méthode ferme.                                                                                              | Écrire qu’il s’agit d’échantillons de départ ; élargir si tailles, modules ou périodes ne sont pas comparables. Trois cas après travaux donnent un signal précoce, jamais une preuve définitive. |
| Lignes 518–552            | « Presque jamais tout réécrire » est une opinion forte, mais son domaine de validité n’est ni chiffré ni contradit par un cas opposé complet.                               | Attribuer la position à Hagnéré Code, exposer les conditions, le conflit d’intérêt possible et un scénario où reconstruire ou remplacer gagne.                                                   |
| Lignes 628–650            | Deux sources SEI couvrent définition et inventaire, pas les métriques de livraison, le plan de modernisation, le risque, la protection des données ni l’économie du projet. | Sourcer au plus près des faits avec SEI, DORA, GAO, GOV.UK/GDS, CNIL et les références étrangères réellement utilisées, en indiquant leur portée.                                                |
| Ensemble du corps         | Aucun calcul de coût d’équilibre ni scénario de sensibilité.                                                                                                                | Montrer le niveau de friction annuelle ou de réduction nécessaire pour récupérer l’investissement, avec et sans risque attendu.                                                                  |
| Ensemble du corps         | Le journal est visible, mais ni copiable dans un format propre, ni téléchargeable, ni accompagné d’un exemple rempli.                                                       | Livrer un registre CSV ou Markdown, un mode d’emploi, un exemple fictif rempli, un comparatif et un relevé de décision ; aucun email obligatoire pour la valeur principale.                      |
| Lignes 613–623            | Le CTA annonce quatre options alors que la page en affiche six et que le comparatif supérieur doit en retenir cinq. Aucun mauvais fit n’est donné.                          | Aligner vocabulaire, nombre d’options et résultat après clic ; exclure incident cyber en cours, estimation sans accès et réécriture déjà irrévocable.                                            |

#### P2 — améliorations utiles, non bloquantes après traitement des P0/P1

| Localisation            | Défaut                                                                                                                                 | Correction proposée                                                                                                                |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Lignes 251–275          | Les quatre cartes du hero ont des descriptions vides.                                                                                  | Soit leur donner un résultat concret, soit en réduire le nombre pour éviter des cartes décoratives.                                |
| Lignes 342–377          | La définition institutionnelle arrive avant tout calcul et ralentit légèrement l’élan.                                                 | Garder la distinction âge/bug/dette, mais faire apparaître le premier montant avant la taxonomie détaillée.                        |
| Lignes 371–376, 447–474 | « Scripts de construction », « architecture fragile » et « élément étudié » appartiennent encore au vocabulaire de l’équipe technique. | Traduire dans la phrase : procédure qui fabrique une version, zone dont toute modification casse ailleurs, cause précise vérifiée. |
| Lignes 555–579          | La succession de six impératifs ressemble à une procédure standard plus qu’à une décision de direction.                                | Introduire une situation, la responsabilité du dirigeant et le résultat attendu avant la liste.                                    |
| Lignes 626–658          | Toutes les sources sont repoussées en fin de page.                                                                                     | Conserver la bibliographie, mais placer chaque source décisive près du fait qu’elle soutient.                                      |

### Phrases exactes à remplacer

| Texte actuel                                                                                                                                                         | Texte recommandé                                                                                                                                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| « Cinq changements récents valent mieux qu’une note abstraite »                                                                                                      | « Commencez par cinq changements récents ; élargissez l’échantillon s’ils ne sont pas comparables »                                                                                                                                                                                                                                                                     |
| « Coût valorisé prudent = heures supplémentaires réellement payées + prestations externes attribuables + coût évité ou travail déplacé dont l’hypothèse est écrite » | « Sorties de trésorerie = heures supplémentaires réellement payées + factures externes + licences ou frais directement attribuables. Capacité interne mobilisée = heures de reprise, de régression et de contournement × coût horaire chargé ; ne l’ajoutez pas à la trésorerie si elle était déjà payée. Risque attendu et opportunité restent deux lignes séparées. » |
| « La meilleure réponse n’est presque jamais “tout réécrire” »                                                                                                        | « Notre position : ne financez une réécriture qu’après avoir chiffré les options moins irréversibles »                                                                                                                                                                                                                                                                  |
| « Contenir ou moderniser progressivement préserve souvent les parties qui fonctionnent »                                                                             | « Contenir ou rénover par étapes préserve l’existant seulement si la zone peut être isolée et si le coût du double fonctionnement reste inférieur à celui du remplacement »                                                                                                                                                                                             |
| « Après les travaux, les trois évolutions suivantes doivent devenir plus sûres »                                                                                     | « Après les travaux, cherchez un premier signal sur plusieurs changements comparables »                                                                                                                                                                                                                                                                                 |
| « Après chaque action, mesurez les trois prochains changements comparables »                                                                                         | « Commencez par trois changements comparables, puis élargissez la période : trois cas donnent un signal précoce, pas une preuve définitive »                                                                                                                                                                                                                            |
| « Nous distinguerons le travail utile, les reprises et les régressions, puis nous comparerons quatre options »                                                       | « Nous vérifierons vos événements, éliminerons les doubles comptes et comparerons sur le même horizon l’attente surveillée, la stabilisation, la rénovation progressive, le remplacement standard et la réécriture »                                                                                                                                                    |

### Comparaison économique et risque de double comptage

La future démonstration doit distinguer les catégories suivantes avant toute
addition :

```text
Trésorerie réellement sortie
= heures supplémentaires payées
+ factures externes
+ licences, pénalités ou frais attribuables

Capacité interne mobilisée
= heures de reprise, régression et contournement
× coût horaire chargé

Risque attendu
= probabilité documentée d’un incident
× impact documenté

Opportunité éventuellement perdue
= marge contributive concernée
× probabilité que le logiciel soit la cause
× part qui ne sera pas récupérée
```

Règles de contrôle :

1. une même heure ne possède qu’un identifiant et une catégorie ;
2. du temps salarié déjà payé n’est pas présenté comme une économie de
   trésorerie automatique ;
3. une facture externe qui comprend les heures d’incident ne les reprend pas
   dans un second sous-total ;
4. l’attente calendaire n’est pas valorisée comme du salaire sans travail
   réellement mobilisé ;
5. le risque et l’opportunité peuvent être désactivés pour vérifier que le
   verdict ne dépend pas d’une hypothèse fragile ;
6. le chiffre d’affaires est remplacé par la marge contributive lorsqu’une
   opportunité est estimée ;
7. les coûts inconnus restent « inconnus », jamais zéro.

Le deep-dive fournit un cas à **34 048 €** et un comparatif à 36 mois. Ces
montants sont des exemples illustratifs, pas des données client ni des seuils
de marché. Le rédacteur doit refaire les calculs depuis les hypothèses et les
tester avant publication.

### Opinion professionnelle à rendre visible

La page actuelle possède déjà une bonne intuition, mais pas encore une position
complète. La future position Hagnéré Code devrait être :

> Nous déconseillons de financer une réécriture à partir de l’âge du logiciel,
> d’une note d’outil ou de la fatigue de l’équipe. Nous recommandons d’abord de
> sécuriser les parcours qui arrêtent l’activité, puis de comparer cinq options
> sur le même horizon. Cette prudence peut nous conduire à recommander un petit
> chantier, un logiciel standard ou l’attente alors qu’une réécriture serait
> plus rémunératrice pour un prestataire.

Le contre-cas doit être aussi net : une technologie non maintenue, une mise à
jour critique impossible, des données impossibles à protéger, un modèle métier
devenu incompatible ou un coût de coexistence supérieur au remplacement
peuvent rendre une option radicale rationnelle. Même dans ces cas, urgence ne
signifie pas automatiquement « tout réécrire ».

### Architecture distinctive recommandée

La page ne doit pas devenir une encyclopédie de symptômes ni reprendre une
structure générique « définition, avantages, étapes, FAQ ». Elle peut suivre
une décision réelle en gardant le cas illustratif comme fil rouge :

1. **Faut-il vraiment tout réécrire quand deux jours deviennent trois
   semaines ?** — situation, réponse courte et cinq options ;
2. **Bug, logiciel ancien, dette ou fin de support : de quel problème
   parle-t-on ?** — quatre mini-cas opposés ;
3. **Combien une année de friction coûte-t-elle à Atelier Nova ?** — registre
   rempli et calcul à quatre sous-totaux ;
4. **Comment éviter de compter deux fois la même heure ?** — contrôle visuel
   avant tout ROI ;
5. **Quelle option coûte le moins sur 36 mois ?** — attente, stabilisation,
   rénovation, standard et réécriture à périmètre identique ;
6. **À partir de quel montant la décision change-t-elle ?** — valeur de
   bascule et sensibilité ;
7. **Quand attendre est-il professionnel, et quand devient-il dangereux ?** —
   retrait proche, support, sécurité, données et obligations ;
8. **Quelles preuves exiger avant de signer ?** — migration, coexistence,
   recette, retour arrière et retrait de l’ancien système ;
9. **Comment vérifier trois mois plus tard que le chantier a servi ?** —
   signaux de livraison et résultats métier ;
10. **Refaites le calcul avec vos données** — kit autonome, bon fit, mauvais
    fit et CTA.

Cette architecture est distinctive parce que le calcul arrive avant la longue
méthode, que le double comptage devient un passage central et que deux verdicts
opposés sont montrés. Elle reste naturelle pour un dirigeant : situation,
facture, choix, seuil, contrôle.

### SEO, cannibalisation et maillage

L’intention peut rester unique :

```text
Page actuelle : mesurer le coût métier de la friction d’un logiciel existant et choisir une réponse.
cout-maintenance-application-metier : construire le budget annuel de maintien et d’exploitation.
reprendre-logiciel-metier-existant : sécuriser le changement d’équipe ou de prestataire.
calculer-roi-application-metier : justifier la création d’un nouvel outil par ses gains.
tma-ou-regie : choisir un mode de collaboration après la décision de faire.
```

La page ne doit donc pas devenir un guide général de maintenance ni un audit de
reprise. Elle doit posséder le calcul de friction, le coût d’équilibre et la
comparaison des trajectoires. C’est cette différence, plus que la répétition du
mot-clé, qui limite la cannibalisation.

Points favorables actuels :

- title, H1, meta description et card title restent fidèles à l’intention ;
- canonical et schémas `Article`/`BreadcrumbList` suivent la convention ;
- la FAQ répond vite et n’est pas accompagnée d’un faux `FAQPage` ;
- un lien entrant existe depuis `reprendre-logiciel-metier-existant`.

À renforcer après réécriture :

- un lien contextuel depuis le guide de coût de maintenance ou de ROI, si le
  passage résout réellement la question du lecteur ;
- un lien sortant vers le guide ROI uniquement pour la méthode de valeur, sans
  déplacer le calcul de friction ;
- des ancres humaines autour de « calculer le coût », « rénover ou réécrire »
  et « coût sur 36 mois » ;
- une date de modification et un temps de lecture recalculés seulement après
  intégration substantielle ;
- aucune promesse de position numéro un : l’audit améliore l’utilité et la
  différenciation, pas un classement garanti.

### Mobile probable

Le code partagé de `GuideTable` transforme les tableaux en cartes sous le
breakpoint `md`. Les deux tableaux actuels devraient donc rester lisibles sans
défilement horizontal sur téléphone. `FiveChangeNotebook` passe d’une à deux
colonnes à partir de `sm`, et `FormulaBox` autorise le retour à la ligne. Aucun
blocage mobile évident n’est visible dans le code.

Deux réserves empêchent toutefois un GO :

- les six réponses deviennent dix-huit champs empilés sur mobile : lisibles,
  mais longues et fatigantes ;
- le futur TCO à cinq options ne pourra pas être un large tableau seulement
  scrollable ; la valeur finale, les inclusions et le verdict doivent rester
  visibles dans des cartes ou un comparateur dédié.

Ce diagnostic est **probable, pas visuellement prouvé**. La version corrigée
devra être observée en vrai navigateur à 320, 390, 768, 1 024 et 1 440 px, en
thèmes clair et sombre.

### Authenticité et passe anti-IA

Points humains à conserver :

- la situation « deux jours deviennent trois semaines » ne survivrait pas à
  une simple substitution de sujet ;
- les phrases sont courtes et parlent directement au lecteur ;
- le faux cas est correctement étiqueté « exemple illustratif fictif » ;
- le texte n’utilise ni superlatif, ni urgence artificielle, ni anecdote
  inventée présentée comme réelle ;
- le CTA peut conclure qu’il faut tolérer, ce qui réduit le biais commercial.

Signaux mécaniques à corriger :

- sept H2 numérotés, presque tous à l’impératif, donnent un rythme trop
  régulier ;
- « mesurer », « relier », « choisir » et « vérifier » reviennent comme une
  méthode d’agence au lieu d’alterner situation, démonstration et décision ;
- « coût valorisé prudent », « élément étudié », « comportements de
  référence » et « coût de coexistence » demandent une traduction ;
- l’enchaînement paragraphe, tableau ou liste, paragraphe se répète ;
- l’opinion professionnelle est cachée dans un titre général au lieu d’être
  assumée par l’auteur avec son contre-cas.

La future passe de plume doit préserver tous les nombres, périmètres et
conditions. Elle ne doit pas raccourcir les précautions anti-double comptage
pour rendre la page plus fluide.

### Porte GO vérifiable après réécriture

Le guide ne peut passer en revue finale que si tous les critères suivants sont
cochés sur un nouveau snapshot :

- [ ] les 150 premiers mots contiennent situation, définition simple, réponse,
      cinq options, résultat chiffré promis et limite ;
- [ ] bug, âge, dette, obsolescence de support et incident de sécurité ne sont
      pas confondus ;
- [ ] un exemple illustratif complet part des données brutes et aboutit à
      quatre sous-totaux vérifiables ;
- [ ] trésorerie, capacité, risque et opportunité sont séparés et chaque
      événement n’est compté qu’une fois ;
- [ ] la comparaison utilise mêmes fonctions, volumes, horizon, exploitation,
      migration, coexistence, recette, formation et sortie ;
- [ ] attente, stabilisation, rénovation progressive, logiciel standard et
      réécriture sont toutes traitées honnêtement ;
- [ ] au moins un scénario fait gagner l’attente et un autre fait gagner une
      action plus radicale ;
- [ ] la valeur de bascule est recalculée avec et sans risque, puis testée par
      un second calcul indépendant ;
- [ ] les unités, arrondis et sensibilités sont testés ; les inconnues ne
      deviennent jamais zéro ;
- [ ] les sources primaires sont rouvertes, datées, placées près des faits et
      limitées à leur périmètre réel ;
- [ ] l’opinion Hagnéré Code, son conflit d’intérêt, son contre-cas et son
      signal de révision sont visibles ;
- [ ] le kit existe, se télécharge sans email obligatoire, contient un exemple
      rempli et permet aussi de conclure « ne pas investir » ;
- [ ] le CTA annonce exactement le résultat après clic, avec bon fit et mauvais
      fit ;
- [ ] le guide reste distinct des pages maintenance, reprise, ROI et TMA, avec
      des liens entrants et sortants utiles ;
- [ ] aucun tableau décisif ne masque la réponse à 390 px ; rendu réel validé
      sur cinq largeurs et deux thèmes ;
- [ ] metadata, canonical, robots, dates, temps de lecture, schémas, OG, FAQ,
      ancres et liens sont cohérents avec le visible ;
- [ ] aucun P0 ou P1 ne subsiste ;
- [ ] score final au moins 90/100, aucun axe sous 8/10 et axes intention,
      décision, pédagogie, profondeur, preuve et comparaison à 9 ou 10.

Statut maximal prouvé par ce contre-audit : **page actuelle lue, défauts
classés et plan vérifiable établi**. La page n’a pas été corrigée, publiée ni
revalidée dans ce lot.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant ou indépendant dont une application utile devient lente, risquée ou coûteuse à modifier.
Question réelle : faut-il continuer, stabiliser, moderniser par morceaux ou reconstruire, et comment le prouver sans se faire vendre une réécriture ?
Décision attendue : financer une option proportionnée à un coût et à un risque observés sur un horizon commun.
Réponse actuelle en une phrase : mesurer cinq changements, relier chaque friction à un élément vérifiable, puis choisir parmi six réponses sans considérer la réécriture comme automatique.
Défaut qui coûte le plus de valeur : le guide explique la bonne méthode, mais ne mène aucun calcul complet jusqu’à une décision économique comparable.
Niveau actuel : B
Priorité : haute
Statut : audité / à réécrire
```

Le guide est déjà nettement supérieur aux pages qui définissent la dette technique, listent des symptômes puis vendent une refonte. Son ouverture est concrète, sa distinction entre âge, bug et dette est juste, et le journal des cinq changements est une bonne idée propriétaire. La position « mesurer avant de réécrire » protège le lecteur et la crédibilité commerciale.

Il ne peut toutefois pas prétendre être la meilleure réponse pour un dirigeant tant que trois chaînons manquent :

1. un calcul complet reliant heures observées, coût de capacité, risque et opportunité ;
2. une comparaison sur 36 mois entre tolérance, stabilisation, modernisation progressive et reconstruction ;
3. des preuves externes actuelles montrant que la modernisation doit être planifiée, mesurée et révisée, sans promettre des économies automatiques.

La future version doit assumer une opinion professionnelle mémorable :

> Nous déconseillons de réécrire une application parce qu’elle est ancienne ou pénible. Nous recommandons d’abord de chiffrer les frictions sur des changements récents, de sécuriser les parcours critiques et de calculer le coût d’équilibre. La réécriture ne gagne que si les autres voies échouent sur des faits, pas sur une impression d’équipe.

### Score avant correction

| Axe         | Note /10 | Preuve localisable                                                                       | Manque décisif                                                                                        |
| ----------- | -------: | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Intention   |        9 | Introduction « deux jours deviennent trois semaines » et refus du diagnostic par l’âge   | Les profils de lecteur et les issues économiques pourraient être annoncés plus nettement              |
| Décision    |        7 | Six réponses, ordre de stabilisation, mesure des changements suivants                    | Aucun seuil d’équilibre calculé avec les données du lecteur                                           |
| Pédagogie   |        8 | Journal des cinq changements, exemple Arpège Services, vocabulaire globalement explicité | L’exemple n’aboutit ni à un montant ni à une décision                                                 |
| Profondeur  |        6 | Code, architecture, tests, données, accès et dépendances sont couverts                   | Risque fournisseur, cybersécurité, portefeuille, conduite du changement et coexistence restent courts |
| Preuve      |        6 | Deux sources primaires du SEI et limites correctement écrites                            | Pas de source France/UK/Canada, de cas public, de métrique actuelle ni de preuve propriétaire         |
| Comparaison |        5 | Six options décrites avec leurs conditions                                               | Aucun périmètre, horizon ou TCO commun ; la reconstruction n’est pas comparée poste par poste         |
| Originalité |        8 | Journal des cinq changements et séparation coût/opportunité                              | Pas de calculateur, de registre téléchargeable ni de cas avant/après                                  |
| Style       |        8 | Ton humain, professionnel et prudent                                                     | Quelques passages restent procéduraux là où une position d’expert est attendue                        |
| Conversion  |        7 | CTA honnête fondé sur cinq cas et autorisant plusieurs conclusions                       | Le lecteur ne repart pas avec un résultat calculé immédiatement                                       |
| SEO/produit |        7 | Intention forte, FAQ, maillage et données structurées présentes dans la page             | Couverture entités/métriques/modernisation internationale et actif propriétaire insuffisants          |

Total : **71/100, soit 14,2/20**

Le guide est publiable au sens de la clarté, mais il n’atteint pas le seuil qualité du nouveau référentiel : 90/100, aucun axe sous 8, et axes critiques à 9 ou 10.

## 2. Ce que le guide dit réellement

- **Réponse dans les 150 premiers mots :** oui. Le guide répond qu’il faut mesurer cinq changements récents avant d’envisager une réécriture.
- **Progression :** définir la dette, documenter cinq changements, relier symptômes et causes vérifiables, traduire prudemment en coût, choisir six réponses, stabiliser, mesurer après action.
- **Verdict :** la reconstruction complète est une option de dernier recours ; tolérer, contenir ou moderniser progressivement peuvent être rationnels.
- **Exemples présents :** un cas fictif Arpège Services, mais sans heures détaillées, valeur horaire, fourchette ou résultat.
- **Calculs présents :** une formule conceptuelle sépare temps utile, reprise, régressions, opérations manuelles et opportunité. Aucun calcul numérique n’est exécuté.
- **Comparaisons présentes :** six familles d’action, sans TCO à horizon égal ni analyse de sensibilité.
- **Sources :** deux ressources du Software Engineering Institute. Elles sont pertinentes mais trop étroites pour couvrir mesure opérationnelle, gouvernance, modernisation et résultats économiques.
- **Bon fit :** application existante encore utile, changements ralentis, incidents ou interventions manuelles répétées.
- **Mauvais fit non assez explicite :** produit en découverte sans historique, logiciel dont la fin de support impose une action urgente, incident cyber en cours, application déjà planifiée pour retrait.
- **CTA :** cohérent et crédible, car il propose d’étudier cinq cas avant de vendre une solution.
- **Élément faussement complet :** la liste des six réponses donne une impression de comparaison, mais le lecteur ne sait pas encore laquelle minimise le coût total dans son cas.

Le guide n’est donc pas creux. Son problème est plus exigeant : il s’arrête à une très bonne méthode de diagnostic et ne livre pas encore le dossier de décision promis par le titre.

## 3. Benchmark France et international

Requêtes, pays, langues et date :

- France, français : « dette technique coût entreprise », « calcul ROI modernisation applicative », « dette technique réécriture application » ;
- États-Unis, anglais : « technical debt business cost », « legacy modernization plan ROI » ;
- Royaume-Uni, anglais : « track technical debt », « prevent legacy technical debt » ;
- Canada, anglais et français : « application modernization technical debt business value » ;
- recherche effectuée le 24 juillet 2026 ; les positions de résultats ne sont pas présentées comme un classement Google stable.

### Saturation

La saturation sémantique est atteinte assez vite sur la définition, les causes, les symptômes et la métaphore des « intérêts ». Les contenus suivants répètent majoritairement ces quatre blocs. Le gain d’information restant ne consiste donc pas à ajouter une nouvelle liste de code smells. Il se trouve dans :

- la mesure d’une friction réellement observée ;
- l’écart entre coût de capacité et économie de trésorerie ;
- le coût d’équilibre d’une action ;
- une comparaison sur le même horizon ;
- la prise en compte du retrait, de la coexistence et du risque ;
- un résultat avant/après reproductible.

| Ressource et URL directe                                                                                                                                                              | Pays                       | Réponse utile                                                             | Preuve, outil ou exemple                                                                                           | Limite                                                                     | Apport à vérifier ou adapter                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [Eleven Labs — Dette technique](https://eleven-labs.com/dette-technique/)                                                                                                             | France                     | Vue agence actuelle sur diagnostic et remédiation                         | Vocabulaire accessible et exemples d’organisation                                                                  | Contenu commercial ; chiffres éventuels à resourcer                        | Observer les formulations qui parlent aux directions sans reprendre de ratio          |
| [OCTO — La fin de la dette technique du passé ?](https://blog.octo.com/la-fin-de-la-dette-technique-du-passe-ne-pas-faire-table-rase)                                                 | France                     | Conteste la table rase et élargit la dette au produit et à l’organisation | Opinion professionnelle utile                                                                                      | Article d’expertise, pas preuve économique                                 | Renforcer le cas contre la réécriture réflexe                                         |
| [Transicio — Guide dette technique IT](https://www.transicio.com/publications/dette-technique-it-guide/)                                                                              | France                     | Cartographie risques et gouvernance                                       | Bonne couverture de direction                                                                                      | Contenu de conseil ; à ne pas traiter comme norme                          | Ajouter responsabilité, portefeuille et réexamen                                      |
| [Deloitte France / CAST — Dette technique en M&A](https://www.deloitte.com/content/dam/assets-zone2/fr/fr/docs/services/financial-advisory/2025/deloitte_dette-technique-m-and-a.pdf) | France                     | Montre l’intérêt de la dette lors d’une transaction                       | Méthode d’évaluation et chiffres sur un vaste corpus CAST                                                          | Contexte M&A et outil commercial ; non transposable à une PME sans méthode | Expliquer pourquoi une densité technique ne vaut pas un coût métier                   |
| [SEI — Managing Technical Debt](https://www.sei.cmu.edu/library/managing-technical-debt-in-complex-software-systems/)                                                                 | États-Unis                 | Définit et gère des éléments explicites de dette                          | Source primaire de référence                                                                                       | Ne fournit pas de ratio universel de coût                                  | Conserver, mais relier à des mesures d’entreprise                                     |
| [DORA — Software delivery performance metrics](https://dora.dev/guides/dora-metrics/)                                                                                                 | États-Unis / international | Mesure débit et instabilité de livraison                                  | Lead time, fréquence, récupération d’un déploiement échoué, taux d’échec et de rework ; mise à jour 5 janvier 2026 | Mesure la livraison, pas un montant de dette                               | Ajouter des indicateurs de résultat sans les appeler « montant de dette »             |
| [GAO-25-107795 — Critical legacy systems](https://files.gao.gov/reports/GAO-25-107795/index.html)                                                                                     | États-Unis                 | Exige un plan de modernisation complet                                    | Jalons, description du travail et sort du système historique                                                       | Échelle fédérale américaine                                                | Transposer l’anatomie du plan, jamais les montants                                    |
| [GAO-26-107737 — Technology Modernization Fund](https://www.gao.gov/products/gao-26-107737)                                                                                           | États-Unis                 | Montre l’écart entre économies attendues et réalisées                     | Rapport public du 23 juillet 2026 : résultats observés et prévisions séparés                                       | Programmes fédéraux, horizon long, comparabilité limitée                   | Utiliser comme preuve qu’une économie prévue ne doit pas être présentée comme acquise |
| [GOV.UK — Prevent technical debt and legacy](https://www.gov.uk/guidance/prevent-technical-debt-and-legacy)                                                                           | Royaume-Uni                | Demande propriétaire, budget, registre et plan de prévention              | Critères de technologie legacy et responsabilité explicite                                                         | Cadre gouvernemental britannique                                           | Ajouter propriétaire métier/technique et financement du maintien                      |
| [GDS Way — How to track technical debt](https://gds-way.digital.cabinet-office.gov.uk/standards/technical-debt.html)                                                                  | Royaume-Uni                | Registre léger cause/conséquence/impact/effort                            | Méthode de triage et revue ; ratings explicitement subjectifs                                                      | Page signalée comme devant être revue après avril 2026                     | Reprendre la transparence sur la subjectivité, pas les couleurs comme vérité          |
| [NCSC — Preparing for a vulnerability patch wave](https://www.ncsc.gov.uk/blogs/prepare-for-vulnerability-patch-wave)                                                                 | Royaume-Uni                | Lie mises à jour à grande échelle et dette technique                      | Source publique publiée le 1er mai 2026                                                                            | Centrée cybersécurité ; ne dit pas que toute dette impose un remplacement  | Ajouter un cas où attendre n’est plus rationnel                                       |
| [Canada — Application Hosting Strategy 2024](https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/2024-application-hosting-strategy.html)     | Canada                     | Remplace une logique « cloud first » par une vision globale et économique | Arbitrage entre cloud et centres de données, valeur et risque                                                      | Contexte gouvernemental                                                    | Renforcer le message « cloud ou réécriture ne sont pas des fins en soi »              |
| [Canada — Application modernization](https://www.canada.ca/en/shared-services/services/hosting-services/application-modernization.html)                                               | Canada                     | Distingue rationalisation de portefeuille et modernisation                | Stratégies : cloud, code adaptable ou nouvelle méthode                                                             | Vue institutionnelle générale                                              | Ajouter la décision de retirer ou rationaliser avant de reconstruire                  |

### Lecture concurrentielle

Les concurrents français les plus visibles gagnent parfois par une opinion plus forte, des ratios spectaculaires ou une promesse de ROI rapide. Ce n’est pas un avantage à copier : sans méthode, ces chiffres fragilisent le contenu. Hagnéré Code peut devenir supérieur en publiant moins d’affirmations universelles, mais davantage de calculs reproductibles et de cas où l’option la plus chère ne gagne pas.

## 4. Matrice de gain d’information

| Question décisive                             | Meilleure réponse française                          | Apport international                                                                           | Couverture actuelle            | Manque                                               | Réponse supérieure à produire                                                           |
| --------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------ | ---------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Qu’est-ce qu’une dette et non un simple bug ? | Définition et typologies                             | SEI : élément explicite relié à une conséquence                                                | Bonne                          | Peu d’exemples opposés                               | Quatre cas : bug, obsolescence, dette assumée, dette subie                              |
| Combien coûte-t-elle ?                        | Ratios ou formules souvent invérifiables             | DORA mesure les effets de livraison ; GAO sépare prévision et réalisation                      | Formule prudente, sans chiffre | Aucun exemple complet ni contrôle inverse            | Journal chiffré, coût de capacité, coût de trésorerie, opportunité probabilisée séparés |
| Faut-il tout réécrire ?                       | Opinion variable selon l’intérêt du prestataire      | GOV.UK, Canada et GAO imposent plan, risque et disposition                                     | Bonne prudence                 | Pas de comparaison à horizon égal                    | TCO 36 mois avec quatre options et analyse de sensibilité                               |
| Quand peut-on tolérer ?                       | Rarement traité franchement                          | GDS accepte qu’une dette élevée puisse être tolérée si retrait prévu                           | Mention présente               | Pas de durée ni signal de révision concret           | Fiche de tolérance avec propriétaire, échéance, événement déclencheur et mode dégradé   |
| Comment prioriser plusieurs applications ?    | Matrices risque/effort                               | GOV.UK : propriétaires, registre et seuil de risque ; Canada : rationalisation de portefeuille | Absent                         | Le guide reste mono-application                      | Classement friction observée + exposition attendue + coût d’action + dépendance métier  |
| Comment prouver l’amélioration ?              | Avant/après souvent déclaré, rarement défini         | DORA fournit des mesures de livraison actualisées                                              | Trois changements suivants     | Échantillon fragile et métriques non nommées         | Baseline, cohorte comparable, cinq métriques, période et cause concurrente              |
| Le cloud règle-t-il la dette ?                | Souvent présenté comme une modernisation automatique | Canada : « cloud smart », pas cloud à tout prix                                                | À peine traité                 | Risque de confondre hébergement et dette applicative | Encadré « déplacer, moderniser, rationaliser : trois décisions différentes »            |
| Que doit contenir le plan ?                   | Listes techniques                                    | GAO : jalons, travail, disposition du legacy                                                   | Partiel                        | Sort du système, coexistence et retour arrière       | Plan de transition complet, responsabilités et critères de sortie                       |

## 5. Faits et fraîcheur

| Affirmation du guide                                                            | Verdict                         | Source primaire actuelle                                                                                                                                                              | Périmètre et date                                                         | Correction                                                                                              |
| ------------------------------------------------------------------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| La dette technique est un choix avantageux à court terme qui renchérit l’avenir | Confirmé, avec nuance           | [SEI](https://www.sei.cmu.edu/library/managing-technical-debt-in-complex-software-systems/)                                                                                           | Ingénierie logicielle ; source de référence                               | Conserver en évitant d’assimiler toute imperfection à une dette                                         |
| L’âge du logiciel ne suffit pas à conclure                                      | Confirmé                        | [GOV.UK](https://www.gov.uk/guidance/prevent-technical-debt-and-legacy)                                                                                                               | Critères multiples : support, mise à jour, pratiques, coût, risque ; 2024 | Ajouter un contre-exemple ancien mais stable et un produit récent déjà fragile                          |
| Un inventaire d’éléments explicites aide à décider                              | Confirmé                        | [SEI](https://www.sei.cmu.edu/library/managing-technical-debt-in-complex-software-systems/) et [GDS Way](https://gds-way.digital.cabinet-office.gov.uk/standards/technical-debt.html) | SEI + pratique UK ; page GDS potentiellement en attente de revue          | Conserver, dater la revue et écrire la part subjective                                                  |
| Les cinq derniers changements suffisent pour mesurer                            | À nuancer                       | Aucun standard ne fixe cinq                                                                                                                                                           | Heuristique éditoriale locale                                             | Écrire « échantillon de départ » ; augmenter si les cas sont hétérogènes ou saisonniers                 |
| Les trois changements suivants prouvent l’amélioration                          | À nuancer                       | [DORA](https://dora.dev/guides/dora-metrics/)                                                                                                                                         | Mesures d’équipe dans le temps, mise à jour janvier 2026                  | Parler de signal précoce, pas de preuve définitive ; définir une période et des changements comparables |
| Une opportunité reportée doit rester séparée tant qu’elle n’est pas prouvée     | Confirmé et important           | [GAO-26-107737](https://www.gao.gov/products/gao-26-107737)                                                                                                                           | Économies attendues et réalisées séparées ; 23 juillet 2026               | Conserver et ajouter une probabilité explicite avec sensibilité                                         |
| La modernisation progressive est souvent préférable                             | Plausible, conditionnel         | [Canada, stratégie d’hébergement 2024](https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/2024-application-hosting-strategy.html)           | Arbitrage global, pas prescription PME                                    | Remplacer « souvent » par une position fondée sur coût de coexistence, risque et horizon                |
| Aucun ratio universel ne relie dette, budget et chiffre d’affaires              | Confirmé par l’état des sources | Sources primaires ci-dessus                                                                                                                                                           | Les rapports ont des périmètres incompatibles                             | Conserver cette limite et refuser les pourcentages spectaculaires non traçables                         |

### Contradictions

- Aucune contradiction factuelle majeure n’a été identifiée dans la version auditée.
- La tension principale est méthodologique : « cinq changements » puis « trois changements suivants » sont présentés comme une méthode ferme alors qu’il s’agit d’un échantillon de départ. Le guide doit expliciter le risque de variance.
- Une dette reconnue peut être rationnelle ; le mot « rembourser » ne doit donc pas devenir un impératif moral ou automatique.

### Faits à retirer plutôt qu’à affaiblir

- Aucun fait actuel ne doit être supprimé.
- Ne pas ajouter de ratio du type « X % du budget IT », de quota fixe de temps de refactoring, de durée de vie universelle ou de ROI moyen.
- Ne pas reprendre les estimations de grands groupes, de M&A ou d’outils d’analyse statique comme coût d’une PME.

## 6. Scénarios et calculs à construire

Tous les montants ci-dessous sont **illustratifs, hors taxes et non issus d’un client**. Leur rôle est de montrer la méthode. La future page devra proposer un tableau où le lecteur remplace chaque hypothèse.

### Scénario 1 — Coût annuel de friction observée

```text
12 changements par an × 14 h supplémentaires × 55 €/h = 9 240 €
3 régressions × 8 h × 55 €/h = 1 320 €
5 h d'opérations manuelles par mois × 12 × 35 €/h = 2 100 €

Capacité valorisée affectée = 12 660 €/an
```

**Contrôle inverse :** 12 660 € n’est pas automatiquement une économie de trésorerie. Si les salariés restent payés et si le temps libéré n’est pas réalloué, il s’agit d’une capacité valorisée. Les heures supplémentaires, prestations externes supprimées et licences abandonnées doivent apparaître séparément comme économies de caisse.

### Scénario 2 — Opportunité commerciale avec probabilité explicite

Une fonctionnalité est retardée de six semaines. L’hypothèse commerciale est de dix ventes par semaine avec 120 € de marge contributive.

```text
Valeur potentielle brute = 6 × 10 × 120 € = 7 200 €
```

| Probabilité que le retard cause réellement la non-vente | Valeur attendue à risque |
| ------------------------------------------------------: | -----------------------: |
|                                                    20 % |                  1 440 € |
|                                                    40 % |                  2 880 € |
|                                                    70 % |                  5 040 € |

Cette valeur reste une estimation de décision, pas une perte comptable. Le contrôle inverse consiste à rechercher les ventes récupérées plus tard, les autres causes du retard et la capacité commerciale réelle.

### Scénario 3 — Coût d’équilibre d’une stabilisation

```text
Investissement de stabilisation : 30 000 €
Horizon : 3 ans
Charge évitable nécessaire, sans actualisation : 30 000 / 3 = 10 000 €/an
```

Si l’entreprise n’accorde que 60 % de confiance à l’économie estimée :

```text
Charge brute à observer = 10 000 / 60 % = 16 667 €/an
```

La décision ne repose pas sur un seuil universel. Elle repose sur la question : les journaux, factures et incidents permettent-ils raisonnablement d’identifier au moins ce niveau de charge évitable ?

### Scénario 4 — Comparaison sur 36 mois, même périmètre

Hypothèses de travail :

- stabilisation : 28 000 €, réduction de 50 % de la friction ;
- modernisation progressive : 50 000 €, réduction de 75 % ;
- reconstruction : 110 000 €, réduction de 90 % ;
- mêmes fonctions métier, aucun gain de chiffre d’affaires, aucun incident majeur inclus ;
- coûts de migration, double exploitation et formation à ajouter à partir des devis réels.

| Friction observée avant action |      Tolérer |   Stabiliser | Moderniser progressivement | Reconstruire |
| ------------------------------ | -----------: | -----------: | -------------------------: | -----------: |
| 8 000 €/an                     | **24 000 €** |     40 000 € |                   56 000 € |    112 400 € |
| 24 000 €/an                    |     72 000 € | **64 000 €** |                   68 000 € |    117 200 € |
| 60 000 €/an                    |    180 000 € |    118 000 € |               **95 000 €** |    128 000 € |

La valeur pédagogique est précisément que trois verdicts différents émergent : tolérer, stabiliser ou moderniser progressivement. La reconstruction ne gagne pas dans cet exemple, mais elle pourrait gagner si une fin de support, un risque de sécurité, un changement métier majeur ou un coût de coexistence prouvé est ajouté.

### Scénario 5 — Priorisation d’un portefeuille

```text
Exposition annuelle de décision
= friction observée
+ probabilité documentée d'incident × impact documenté
```

| Application | Friction observée | Incident et probabilité illustratifs |  Exposition | Action chiffrée |      Réduction estimée | Retour simple |
| ----------- | ----------------: | -----------------------------------: | ----------: | --------------: | ---------------------: | ------------: |
| A           |          24 000 € |                      10 % × 40 000 € | 28 000 €/an |        50 000 € | 50 %, soit 14 000 €/an |      3,57 ans |
| B           |           8 000 € |                      25 % × 10 000 € | 10 500 €/an |        12 000 € |  70 %, soit 7 350 €/an |       1,63 an |

La petite application B peut passer avant A. Les probabilités restent subjectives : elles doivent être présentées en fourchette, reliées à des incidents ou audits et révisées.

### Variables de sensibilité obligatoires

| Variable                      |  Simple |    Central |      Exigeant | Source ou hypothèse                                      |
| ----------------------------- | ------: | ---------: | ------------: | -------------------------------------------------------- |
| Friction annuelle             | 8 000 € |   24 000 € |      60 000 € | Journal des changements, tickets et opérations           |
| Réduction après stabilisation |    20 % |       50 % |          70 % | Hypothèse à vérifier sur une cohorte comparable          |
| Horizon                       | 12 mois |    36 mois |       60 mois | Durée de vie métier prévue                               |
| Confiance dans l’opportunité  |    20 % |       40 % |          70 % | Commercial + historique, jamais l’équipe technique seule |
| Coût de coexistence           |     0 € | devis réel | scénario haut | Double run, interfaces, support et formation             |

```text
Formule : TCO option = investissement + exploitation + friction résiduelle + coexistence + sortie + exposition résiduelle.
Horizon : 36 mois par défaut dans l'exemple, modifiable.
Inclus : travail attribuable, prestations, licences, migration et sortie lorsqu'ils sont connus.
Exclus : gains de vente non prouvés, réputation et risques sans méthode.
Résultat : l'option gagnante change avec la friction et le risque observés.
Analyse de sensibilité : au minimum friction, réduction réelle, horizon et coût de coexistence.
Variable qui fait basculer la décision : charge évitable annuelle prouvable.
Contrôle inverse : tester explicitement le scénario où ne rien faire est moins cher.
```

## 7. Comparaison et position professionnelle

```text
Options réellement comparables : tolérer avec surveillance ; contenir/stabiliser ; moderniser progressivement ; reconstruire ; retirer ou remplacer par un standard.
Périmètre et horizon communs : mêmes parcours métier, mêmes volumes, mêmes exigences de sécurité et 36 mois, avec migration, coexistence, exploitation et sortie.
Option la moins chère : souvent tolérer lorsque la zone change peu et que l'exposition est faible ; cela doit ressortir du calcul, pas d'un principe.
Option la moins risquée : souvent stabiliser ou moderniser progressivement lorsque le comportement actuel doit être préservé, sous réserve d'une architecture permettant l'isolement.
Option qui demande le moins de temps interne : pas nécessairement le standard ou la reconstruction ; mesurer migration, recette, formation et double run.
Position Hagnéré Code pour le cas fréquent : sécuriser les parcours critiques et une première zone de friction avant tout grand chantier ; comparer ensuite les trois prochains changements comparables.
Faits qui la fondent : coûts observés, support des dépendances, capacité de test/rollback, DORA, plans de disposition du legacy et analyse de portefeuille.
Cas où l'option opposée gagne : technologie non maintenue et inexploitable, données impossibles à protéger, absence de frontière exploitable, changement métier qui invalide le produit, ou coût de coexistence supérieur au remplacement.
Signal de révision : incident critique, fin de support datée, friction dépassant le coût d'équilibre, trois mesures après pilote, changement stratégique ou retrait planifié.
Ce que nous déconseillons même si nous pourrions le vendre : audit automatique transformé en devis de réécriture, cloud présenté comme remède, pourcentage de budget universel et reconstruction sans plan de migration/retour arrière.
```

La voix experte doit être ferme sur la méthode et conditionnelle sur le verdict. « Mesurez avant de réécrire » est une opinion. « Au-delà de X %, réécrivez » serait une invention.

## 8. Objections et cas limites

| Objection loyale                             | Réponse prouvée                                                                           | Ce qui reste incertain                                            | Conséquence                                                                            |
| -------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| « Nous n’avons pas de suivi du temps »       | Reconstituer cinq changements avec tickets, commits, factures, calendriers et entretiens  | La précision historique restera limitée                           | Utiliser une fourchette et démarrer une baseline prospective                           |
| « Le logiciel marche ; pourquoi dépenser ? » | Mesurer reprises, régressions, opérations manuelles et risque de support                  | Une friction faible peut rester rationnelle                       | Tolérer avec propriétaire, date et signal de révision                                  |
| « Le code est trop vieux, il faut repartir » | L’âge seul ne prouve ni coût ni impossibilité ; GOV.UK emploie plusieurs critères         | L’audit peut révéler une vraie impasse                            | Exiger preuve de non-maintien, non-testabilité, risque et options rejetées             |
| « Nous devons migrer vers le cloud »         | La stratégie canadienne actuelle traite l’hébergement comme un arbitrage, pas une fin     | Contraintes de données, compétences et coût propres au cas        | Séparer déplacement d’hébergement, modernisation du code et transformation métier      |
| « Mes développeurs veulent 20 % du temps »   | Aucun quota universel n’est établi par les sources retenues                               | Un budget récurrent peut être utile                               | Financer des objectifs mesurés, pas un pourcentage rituel                              |
| « Un outil donne un montant de dette »       | Un outil peut estimer des défauts ou un effort technique                                  | Il ne connaît pas seul la valeur métier, l’usage ou l’opportunité | Traiter son score comme signal technique, jamais comme TCO                             |
| « Nous devons agir avant un audit complet »  | Une fin de support ou faille critique peut imposer une mesure immédiate                   | Le plan long terme reste à établir                                | Contenir le risque d’abord, documenter la décision d’urgence, puis reprendre l’analyse |
| « Réécrire permettra d’ajouter de l’IA »     | Une nouvelle technologie ne corrige pas automatiquement données, processus et gouvernance | Une nouvelle capacité peut créer une valeur réelle                | Chiffrer le cas d’usage séparément de la dette existante                               |

## 9. Plan de réécriture

| Ordre | Section proposée                     | Question résolue                        | Preuve, scénario ou outil                        | Décision produite                                 | À conserver / créer / couper                     |
| ----: | ------------------------------------ | --------------------------------------- | ------------------------------------------------ | ------------------------------------------------- | ------------------------------------------------ |
|     1 | Verdict en 150 mots                  | Faut-il réécrire ?                      | Opinion conditionnelle                           | Mesurer et stabiliser avant de choisir            | Réécrire l’ouverture sans perdre le cas concret  |
|     2 | Quatre situations à ne pas confondre | Bug, âge, dette ou fin de support ?     | Quatre mini-cas                                  | Qualifier correctement le problème                | Conserver la définition, ajouter les oppositions |
|     3 | Le journal des cinq changements      | Quelles preuves réunir ?                | Modèle téléchargeable                            | Produire une baseline                             | Conserver et enrichir                            |
|     4 | Du temps au coût                     | Que vaut la friction ?                  | Scénario à 12 660 €, distinction caisse/capacité | Chiffrer sans surpromettre                        | Créer                                            |
|     5 | Le coût d’équilibre                  | Quel montant doit être évité ?          | Investissement / horizon / confiance             | Décider si un pilote est économiquement plausible | Créer                                            |
|     6 | Quatre TCO sur 36 mois               | Quelle option gagne ?                   | Tableau faible/central/élevé                     | Tolérer, stabiliser, moderniser ou reconstruire   | Remplacer la comparaison seulement qualitative   |
|     7 | Risque, support et cybersécurité     | Quand attendre n’est plus raisonnable ? | GOV.UK, NCSC, registre de dépendances            | Déclencher une mesure urgente proportionnée       | Créer                                            |
|     8 | Portefeuille et retrait              | Quelle application passe avant ?        | Exposition + coût d’action                       | Prioriser ou retirer                              | Créer                                            |
|     9 | Plan de transition                   | Comment éviter le grand saut ?          | Jalons, coexistence, disposition, rollback       | Valider une trajectoire                           | Créer depuis GAO                                 |
|    10 | Mesure avant/après                   | Comment prouver le résultat ?           | DORA + métriques métier                          | Continuer, corriger ou arrêter                    | Renforcer la section actuelle                    |
|    11 | Position Hagnéré Code                | Que recommande l’agence ?               | Cas fréquent, cas inverse, signal de révision    | Donner un verdict mémorable                       | Créer                                            |
|    12 | CTA-outil                            | Que peut faire le lecteur maintenant ?  | Journal + calculateur 36 mois                    | Arriver avec un dossier exploitable               | Transformer le CTA en livrable                   |

### Contrat des 150 premiers mots

- Nommer le lecteur : dirigeant dont chaque évolution prend plus de temps ou crée des régressions.
- Répondre immédiatement : ne réécrivez pas sur la base de l’âge ou d’un audit automatique.
- Annoncer les options : tolérer, stabiliser, moderniser par étapes, remplacer ou reconstruire.
- Promettre ce que l’article livre : un journal, un calcul annuel, un TCO 36 mois et les cas où l’urgence change le verdict.
- Écrire la limite : les chiffres fournis sont des exemples remplaçables, pas des seuils universels.

### Éléments à supprimer

- Aucun bloc de fond n’a besoin d’être supprimé.
- Réduire les répétitions autour de « mesurer avant de choisir » une fois que les calculs l’incarnent.
- Ne pas ajouter une longue taxonomie de code smells, déjà saturée dans la concurrence.

### Éléments à conserver

- Le cas d’ouverture « deux jours deviennent trois semaines ».
- La distinction âge, bug et dette.
- Le journal des cinq changements.
- La séparation entre coût prouvé et opportunité.
- Les six familles de réponse, réorganisées dans une comparaison commune.
- L’idée de stabiliser les parcours critiques.
- Le contrôle sur les changements suivants.
- Le CTA qui autorise explicitement la tolérance.

## 10. Contre-audit après correction

La page n’ayant pas été réécrite dans ce lot, aucun score après correction n’est attribué. Donner une note projetée créerait une preuve fictive.

| Problème                            | Priorité | Correction appliquée      | Revalidation indépendante                            |
| ----------------------------------- | -------- | ------------------------- | ---------------------------------------------------- |
| Aucun calcul complet                | P0       | Non appliquée dans ce lot | Refaire chaque opération et tester les unités        |
| Comparaison non homogène            | P0       | Non appliquée dans ce lot | Vérifier mêmes fonctions, horizon et postes          |
| Sources trop étroites               | P1       | Non appliquée dans ce lot | Rouvrir SEI, DORA, GAO, GOV.UK, NCSC et Canada       |
| Opinion trop implicite              | P1       | Non appliquée dans ce lot | Faire relire le verdict à un dirigeant non technique |
| Absence de preuve propriétaire      | P1       | Non appliquée dans ce lot | Publier modèle ou calculateur réellement utilisable  |
| Échantillon présenté trop fermement | P2       | Non appliquée dans ce lot | Qualifier cinq/trois comme échantillons de départ    |

### Score après correction

| Axe         | Note /10 | Preuve localisable      | Manque résiduel  |
| ----------- | -------: | ----------------------- | ---------------- |
| Intention   |      N/A | Réécriture non réalisée | À contre-auditer |
| Décision    |      N/A | Réécriture non réalisée | À contre-auditer |
| Pédagogie   |      N/A | Réécriture non réalisée | À contre-auditer |
| Profondeur  |      N/A | Réécriture non réalisée | À contre-auditer |
| Preuve      |      N/A | Réécriture non réalisée | À contre-auditer |
| Comparaison |      N/A | Réécriture non réalisée | À contre-auditer |
| Originalité |      N/A | Réécriture non réalisée | À contre-auditer |
| Style       |      N/A | Réécriture non réalisée | À contre-auditer |
| Conversion  |      N/A | Réécriture non réalisée | À contre-auditer |
| SEO/produit |      N/A | Réécriture non réalisée | À contre-auditer |

Total : **non attribué**

Critère d’acceptation futur : **au moins 90/100, aucun axe sous 8/10**, calculs refaits indépendamment, sources primaires rouvertes et rendu mobile réellement contrôlé.

## 11. Preuves techniques et visuelles

```text
Manifeste : page et recherche existante relues ; snapshot SHA-256 consigné en tête.
Calculs refaits : oui, via un script Node indépendant le 24 juillet 2026.
Sources rouvertes : oui pour les sources primaires citées dans le benchmark ; les pages concurrentes ne servent pas de preuve factuelle.
Liens vérifiés : ouverture web effectuée le 24 juillet 2026 ; disponibilité future non garantie.
Commandes : shasum -a 256 ; calculs Node des scénarios et sensibilités.
Rendu 320 / 390 / 768 / 1024 / 1440 : non exécuté, car aucune page publique n'a été modifiée.
Image sociale : non auditée dans ce lot éditorial.
Statut maximal prouvé : audit éditorial complet et plan de réécriture, pas correction publique.
Réserve publication / indexation : le contenu existant reste en ligne ; cet audit ne prouve ni déploiement ni indexation Google.
```

## 12. Correction complète et revalidation — 24 juillet 2026

Cette section complète l’audit historique sans le réécrire. Le `NO-GO` et le
score de 71/100 décrivent bien le snapshot initial
`405ede2fde47968178b8f81002fb35d166813cdd06ea4645706c10a61abac90b`.
Ils ne doivent pas être confondus avec l’état corrigé ci-dessous.

```text
Snapshot final de la page : 4ce4b2ba11b6837ef91aa47c4564f94e48e43879a7abefdad786ef16179e478c
P0 éditoriaux ouverts : 0
P1 éditoriaux ouverts : 0
Score P4 indépendant : 91/100
Verdict local : GO
Verdict production : NO-GO tant que la nouvelle page et les cinq ressources ne sont pas déployées puis recontrôlées
```

### Fermeture des incidents

| Incident initial | Correction appliquée | Revalidation indépendante | Statut |
| --- | --- | --- | --- |
| P0 — double comptage possible | quatre lectures séparées — trésorerie, capacité, risque attendu et opportunité —, identifiant par événement, opportunité exclue du classement | calculs refaits et 46/46 tests ciblés réussis dans la [P3](../reviews/dette-technique-cout-entreprise-p3-facts.md) | fermé localement |
| P0 — options incomparables | cinq options à charge fonctionnelle constante, coûts de projet, coexistence, exploitation, formation, retrait et horizons 12/36/60 mois | minima, seuils et sensibilités recalculés dans la [P3](../reviews/dette-technique-cout-entreprise-p3-facts.md) | fermé localement |
| P1 — exemple sans résultat | cas Atelier Nova mené des données brutes aux quatre sous-totaux puis aux cinq trajectoires | page, moteur et exemple CSV rapprochés | fermé localement |
| P1 — échantillon présenté trop fermement | cinq événements deviennent un point de départ à élargir si périodes, modules ou tailles divergent ; trois changements ne constituent qu’un signal précoce | relecture humaine sur le snapshot final | fermé localement |
| P1 — opinion non bornée | avis Hagnéré Code explicite, conflit d’intérêt visible, contre-cas et signaux de révision | [P4 humaine](../reviews/dette-technique-cout-entreprise-p4-human.md) | fermé localement |
| P1 — sources trop étroites | SEI, DORA, GOV.UK, GAO, Green Book, CNIL et Australian Cyber Security Centre cités avec portée et limites | sources primaires rouvertes en P3 | fermé localement |
| P1 — absence de seuil et de sensibilité | seuils avec et sans risque, lectures trésorerie/capacité/risque et quatre niveaux de friction | calculs indépendants et tests du moteur | fermé localement |
| P1 — aucun actif réutilisable | calculateur et dossier libre de cinq fichiers, avec exemple rempli, formules, dictionnaire et journal de décision | [contrôle du kit](../reviews/dette-technique-cout-entreprise-kit-qa.md), 23/23 tests | fermé localement |
| P1 — CTA incohérent | CTA limité à une revue de données, avec bon fit, mauvais fit et possibilité explicite de ne pas investir | P4 humaine, 91/100 | fermé localement |

### BAT et frontière de publication

Le [BAT navigateur](../reviews/dette-technique-cout-entreprise-browser-qa.md)
a contrôlé le rendu local à 320, 390, 768 et 1 440 px, les thèmes clair et
sombre, le calculateur, les erreurs de saisie, le téléchargement et l’absence
de débordement interne. Un défaut de grille à 1 440 px a été découvert,
corrigé puis recontrôlé.

Le dossier téléchargeable est validé localement. Au moment du contrôle, la
production servait encore l’ancienne version et les cinq nouvelles URLs de
ressources répondaient 404. Ce dernier incident est un **P0 de mise en
production**, distinct de la qualité du contenu : il ne peut être fermé que
par un déploiement autorisé suivi d’une vérification publique de la page, des
cinq téléchargements, des métadonnées, du canonical et des données
structurées.

Statut maximal honnêtement prouvé : **guide corrigé, enrichi, testé et validé
en local ; non publié ni indexé par ce lot**.
