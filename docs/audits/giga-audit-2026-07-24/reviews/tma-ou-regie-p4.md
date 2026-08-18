# Contre-lecture P4 indépendante — `tma-ou-regie`

Date : **24 juillet 2026**

Relecteur : `/root/tma_p4_human`

Périmètre : lecture dirigeant non technique, plume, pédagogie, rythme,
densité, confiance, opinion professionnelle, utilité autonome, conversion et
rendu réel. Aucun fichier de production, registre, test, recherche ou
manifeste n'a été modifié.

## Snapshot contrôlé

Le manifeste
`docs/research/manifests/tma-ou-regie-p2.sha256` correspond exactement aux
onze fichiers qu'il déclare, notamment :

```text
809bbbb6ccc439c4d5a1e3fd4bd5223f338cf7ef1cf3681b045f7f93692f869a  src/app/guides/tma-ou-regie/page.tsx
0d75f79411e5e6047da4e28719dcab95a7f8919a2e8dfdbc1b2f61209b6acc4d  src/lib/tma-tco.ts
2dbe0f92434d32374f492f13e3ef9131c38074bd9661fa89d63950262be79604  src/components/guides/TmaTcoCalculator.tsx
f235b48b4896ea481f13caa3ba0eb6a6d3525454314421b92fac113f52930556  public/ressources/comparateur-tma-regie-tco.csv
```

Documents relus avant verdict :

- `docs/charte-qualite-guides.md` ;
- `docs/workflow-maitre-guides-4-passes.md` ;
- `docs/research/tma-ou-regie.md` ;
- `docs/audits/giga-audit-2026-07-24/research/tma-ou-regie-deep-dive.md` ;
- `docs/audits/giga-audit-2026-07-24/guides/tma-ou-regie.md` ;
- la page, le calculateur, sa bibliothèque de calcul et le CSV.

## Verdict exécutif

**Score P4 : 13/20 — NO-GO.**

```text
P0 : 0
P1 : 6
P2 : 5
Verdict : NO-GO
Retour requis : P3 pour la qualification des coûts inconnus, puis nouvelle P4 complète
```

Le guide possède une vraie valeur : même flux mensuel appliqué à sept
solutions, coûts internes, règles de report, deux seuils de bascule, trois
coûts de panne, alternatives non commerciales, sources correctement bornées,
calculateur local et CSV. L'opinion Hagnéré Code est conditionnelle et peut
recommander de ne pas signer. Ce niveau de profondeur dépasse largement le
guide historique.

Le blocage ne vient donc pas d'un manque de matière. Il vient de sa
hiérarchisation :

1. l'ouverture réintroduit trois termes de prestataire avant de les traduire ;
2. plusieurs sections expliquent successivement les mêmes modes d'achat ;
3. sur téléphone, le lecteur qui clique « Comparer les coûts » parcourt treize
   cartes mensuelles avant de voir le comparatif des sept options ;
4. le calculateur transforme des coûts inconnus en zéros puis désigne un
   « total le plus faible » ;
5. le CTA décrit surtout le travail de l'agence, pas le résultat précis obtenu
   par le dirigeant.

## Score détaillé

| Critère P4 | Note /2 | Preuve | Manque bloquant ou résiduel |
| --- | ---: | --- | --- |
| Intérêt dès l'ouverture | 1 | Le dilemme forfait/jours et le risque de laisser l'application sans suivi apparaissent immédiatement. | « capacité récurrente », « temps plafonné » et « service réellement couvert » arrivent avant leur traduction. |
| Clarté pour un dirigeant | 1 | TMA et régie sont correctement distinguées. | Les « sept portes », « quatre façons », trois choix détaillés puis l'hybride créent plusieurs taxonomies successives. |
| Progression et rythme | 1 | La logique va du vocabulaire au flux, au coût, au contrôle puis à la décision. | Les sections 2, 4 et 5 se recouvrent ; la réponse économique arrive trop tard sur mobile. |
| Voix humaine et anti-IA | 1 | Le ton est calme, contradictoire et sans superlatif. | Les quatorze sections, séries de cartes et répétitions « capacité / temps / lot / hybride » donnent une empreinte de production systématique. |
| Opinion professionnelle | 2 | L'hybride est recommandé sous conditions ; les cas inverses sont explicites. | Rien de bloquant. |
| Profondeur et exemples | 2 | 90 jours distribués par mois, sept coûts, report, seuils, panne et internalisation sont reliés à des décisions. | Rien de bloquant en profondeur. |
| Utilité autonome | 1 | Calculateur local, CSV, historique à reclasser et action sans contact existent. | Le statut « inconnu » n'existe pas dans le calculateur ; zéro fausse potentiellement le classement. |
| Lecture mobile | 1 | Aucun débordement à 320 ou 390 px ; cartes, formules et champs restent lisibles. | La comparaison centrale est enfouie sous treize cartes mensuelles et le calculateur arrive environ vingt-trois écrans après le début à 390 px. |
| Conversion et CTA | 1 | Bon fit, mauvais fit et possibilité de reporter sont honnêtes. | Le prospect ne sait pas quel document ou quelle décision concrète il obtient après l'échange. |
| Sortie et capacité d'agir | 2 | Le lecteur peut signer, plafonner, reporter, internaliser, remplacer ou retirer. | La conclusion devrait précéder le CTA au lieu de reprendre ensuite les mêmes règles. |

Total : **13/20**.

## P1 — corrections bloquantes

### P1.1 — L'ouverture répond, mais parle encore comme un prestataire

Emplacement : premier paragraphe du corps.

Problème : les expressions « petite capacité récurrente », « temps plafonné »
et « service réellement couvert » apparaissent dans les 150 premiers mots
avant leur traduction. Le dirigeant comprend l'intention générale, mais doit
encore convertir trois notions contractuelles. « Avant de vous faire choisir »
sonne également comme une formule d'auteur, pas comme une aide à la décision.

Réécriture exacte proposée :

> **Vous comparez un forfait mensuel avec une offre facturée au jour. Laquelle
> coûtera le moins cher tout en gardant votre application suivie ?** La TMA —
> la maintenance confiée à un prestataire — peut être facturée de plusieurs
> façons. La « régie » signifie le plus souvent que vous payez le temps
> réellement utilisé : ce n'est donc pas l'opposé d'une TMA. Pour des bugs qui
> reviennent chaque mois et des évolutions plus irrégulières, nous réserverions
> généralement quelques jours pour les corrections récurrentes, puis
> demanderions un prix séparé pour chaque évolution bien définie. Si les
> demandes sont rares et que l'un de vos salariés peut les trier et vérifier le
> résultat, payer seulement le temps utilisé, avec un plafond, peut revenir
> moins cher. Si une panne bloque directement les ventes ou la production,
> vous pouvez au contraire payer davantage pour des horaires de support et un
> délai de prise en charge écrits. Le guide compare ces options sur le même
> exemple fictif de 90 jours, puis vous donne les formules à remplacer par vos
> chiffres.

Conséquence attendue : situation, définition, réponse courte, contre-cas et
promesse utile sont compris sans connaître le vocabulaire de maintenance.

### P1.2 — « Sept portes » est une métaphore interdite par la charte

Emplacements : sommaire, H2 `#options` et paragraphe associé.

Problème : la charte cite précisément les « portes » parmi les titres à
supprimer. Le nombre sept ajoute une autre confusion : les sept cartes de cette
section ne correspondent pas exactement aux sept lignes du calcul économique.

Remplacements exacts :

```text
Sommaire :
2. Vérifiez d'abord si un contrat récurrent est nécessaire

H2 :
2. Vérifiez d'abord si un contrat récurrent est nécessaire
```

Paragraphe proposé :

> Le choix ne se limite pas à un forfait ou à des jours facturés. Avec quelques
> demandes rares, vous pouvez intervenir seulement au besoin. Si le travail
> occupe durablement une personne et que vous savez l'encadrer, une compétence
> interne peut devenir plus rationnelle. Si le logiciel n'est plus supporté,
> peu utilisé ou trop coûteux à maintenir, comparez son remplacement ou son
> retrait avant d'ajouter un abonnement.

Dans cette section, conserver uniquement trois alternatives :
**intervenir au besoin**, **garder ou recruter en interne**,
**remplacer ou retirer**. Les quatre modes d'achat externalisés sont expliqués
une seule fois dans la section suivante.

### P1.3 — Les sections 2, 4 et 5 répètent le même choix

Emplacements : `#options`, `#modes`, `#choisir`.

Problème : le lecteur traverse sept cartes, puis quatre nouvelles cartes, puis
trois sous-sections qui répètent capacité, temps et lot. La répétition renforce
la longueur sans ajouter une nouvelle décision. Elle explique la différence
entre le fond riche et le ressenti industriel.

Correction structurelle exacte :

1. appliquer P1.2 et limiter `#options` aux trois alternatives au contrat
   récurrent ;
2. supprimer la grille `modes.map(...)` et son paragraphe introductif ;
3. conserver les trois explications humaines de `#choisir` ;
4. renommer ce H2 :

   > **4. Pour chaque demande, choisissez comment payer le travail**

5. conserver l'exemple hybride comme H2 suivant, car il démontre la combinaison
   sur quatre demandes concrètes ;
6. renuméroter le sommaire et les H2 sans changer les `id` d'ancres.

Cette coupe retire une taxonomie complète sans perdre une option, une preuve,
un chiffre ni un contre-cas.

### P1.4 — Le lien « Comparer les coûts » cache d'abord la comparaison

Emplacements : action du hero, début de `#tco`, tableau mensuel.

Preuve navigateur :

- à 390 px, `#tco` commence environ seize écrans après le début de la page ;
- après le clic, treize cartes mensuelles précèdent la comparaison des sept
  options ;
- le calculateur commence environ vingt-trois écrans après le début ;
- la page atteint environ 48 000 px de hauteur à 390 px.

Le composant mobile évite correctement tout défilement horizontal, mais treize
cartes successives ne sont pas une réponse rapide.

Correction exacte :

1. placer le tableau `tcoComparisonRows` immédiatement après le paragraphe qui
   annonce les hypothèses ;
2. donner à ce bloc un ancrage distinct, par exemple
   `id="comparatif-couts"`, et faire pointer l'action du hero vers lui ;
3. déplacer ensuite l'explication des huit jours mensuels ;
4. conserver les douze lignes sur ordinateur, mais remplacer leur rendu mobile
   par quatre cartes trimestrielles :

| Trimestre | Besoin | Jours utilisés | Jours perdus | Dépassement |
| --- | ---: | ---: | ---: | ---: |
| Janvier à mars | 18 j | 18 j | 6 j | 0 j |
| Avril à juin | 22 j | 21 j | 3 j | 1 j |
| Juillet à septembre | 22 j | 20 j | 4 j | 2 j |
| Octobre à décembre | 28 j | 22 j | 2 j | 6 j |
| **Total** | **90 j** | **81 j** | **15 j** | **9 j** |

Phrase de transition proposée :

> Le classement est la réponse ; la répartition mensuelle explique ensuite
> pourquoi il change. Avec huit jours non reportables par mois, les périodes
> calmes laissent expirer quinze jours tandis que les pointes obligent à en
> racheter neuf.

### P1.5 — Le calculateur confond encore « inconnu » et zéro

Emplacements :

- tableau et formule de `#tco` ;
- `TMA_TCO_FIELDS` dans `src/lib/tma-tco.ts` ;
- résultats de `TmaTcoCalculator` ;
- colonnes `Mise en route et sortie`, `Exposition résiduelle annuelle` et
  `TCO` du CSV.

Problème : la recherche approfondie dit explicitement que reprise, outils,
sortie et dommage d'une panne sont inconnus et ne valent pas zéro. Pourtant
l'exemple initialise ces postes à `0`, l'aide dit « Laissez zéro si vous ne
pouvez pas l'estimer », le CSV calcule un `TCO`, puis le calculateur affiche
« Total le plus faible dans vos hypothèses ». Le résultat numérique est juste
pour les nombres saisis, mais son nom peut faire prendre un coût partiel pour
un coût complet.

Ce point modifie le sens économique : il doit retourner en P3 après correction.

Texte exact à placer avant le comparatif :

> Les montants ci-dessous ne sont pas encore des coûts complets. Ils
> additionnent uniquement le prestataire — ou le coût annuel de la personne
> recrutée — et le temps de votre équipe pour décider et vérifier. La reprise
> initiale, les outils, la sortie et le dommage éventuel d'une panne restent
> inconnus dans l'exemple. Ils ne valent pas zéro : ajoutez-les ou marquez-les
> « à confirmer » avant d'utiliser le classement pour signer.

Remplacements visibles :

```text
Caption :
Coûts renseignés dans l'exemple fictif — sept options sur douze mois

En-tête :
Coût renseigné

Résultat du calculateur :
Coût renseigné sur 12 mois

Badge :
Coût renseigné le plus faible — comparaison à confirmer si un poste manque
```

Formule proposée :

```text
Coût complet sur la période
= prestataire ou équipe interne
+ temps de votre équipe pour décider et vérifier
+ reprise initiale et outils
+ coût de changement ou de sortie
+ pertes restant à votre charge

Tant qu'un poste est inconnu, le résultat reste un coût partiel à compléter.
```

Correction fonctionnelle attendue :

- `0` signifie uniquement « poste réellement nul » ou « déjà inclus et
  documenté » ;
- un état distinct `à confirmer` est disponible ;
- si un poste reste `à confirmer`, le calcul peut afficher les coûts connus
  mais ne désigne pas de vainqueur définitif ;
- le CSV possède le même état et ne nomme pas la somme `TCO` tant que les postes
  ne sont pas confirmés.

Libellés plus humains :

```text
Coût chargé d'une heure interne
→ Coût d'une heure de votre équipe, salaire et charges compris

Pilotage interne par semaine
→ Temps de votre équipe chaque semaine

Exposition résiduelle par an
→ Pertes et risques restant à votre charge par an
```

### P1.6 — Le CTA ne promet pas un résultat assez concret

Emplacement : `GuideInlineCTA`.

Problème : « Transformer vos demandes en une maintenance claire et
contrôlable » et « Préparer ma maintenance » restent génériques. La description
énumère le processus de l'agence — continuité, diagnostic, livraison, prix,
capacité, temps — sans nommer le document ou la décision obtenue.

Réécriture exacte, sous réserve que ce résultat corresponde bien à l'échange
commercial réellement proposé :

```text
Titre :
Faites comparer vos offres de maintenance avant de signer

Description :
Apportez vos offres et trois à douze mois de demandes. Nous relevons ce que
chacune couvre, les jours qui peuvent être perdus, les dépassements, le temps
demandé à votre équipe et les coûts qui restent à confirmer. Vous obtenez une
liste de questions à renvoyer aux prestataires et une recommandation
conditionnelle : signer, plafonner, négocier, attendre ou remplacer
l'application.

Badges :
Deux offres comparées sur les mêmes demandes
Les coûts inconnus restent visibles
Signer n'est pas obligatoire

Bouton :
Faire comparer mes offres
```

Déplacer le paragraphe « Le bon choix ne porte donc pas sur un mot… » avant le
CTA. Après le bouton, aller directement aux sources : la répétition actuelle
affaiblit la sortie commerciale.

## P2 — améliorations non bloquantes après les P1

### P2.1 — Retirer la source historique de 2004 du début

La charte Cigref–Syntec est correctement bornée, mais elle ne change pas la
décision. La déplacer entièrement dans « Sources et limites » raccourcit la
section 1 et laisse Légifrance porter la définition utile.

### P2.2 — Traduire « continuité » à sa première occurrence

Première occurrence proposée :

> Par « continuité », nous entendons ici le suivi régulier qui permet de traiter
> les corrections et l'entretien sans rechercher un nouveau prestataire à
> chaque demande. Cela ne garantit ni une astreinte ni un délai de remise en
> service.

Ensuite, alterner naturellement avec « suivi régulier », « corrections qui
reviennent » et « application suivie ».

### P2.3 — Remplacer les raccourcis de consultant

```text
pilotage interne
→ temps de votre équipe pour trier, répondre, décider et vérifier

mode candidat
→ première façon de payer à vérifier

sortie observable
→ résultat précis remis à la fin

exposition résiduelle
→ pertes et risques restant à votre charge
```

Les termes courts peuvent rester dans les tableaux une fois traduits.

### P2.4 — Réduire les annonces d'auteur

Remplacer :

> Voici le calcul que la plupart des comparatifs évitent.

par :

> Comparons maintenant les sept options avec le même besoin et le même coût
> horaire interne.

Remplacer :

> avant de vous faire choisir

par :

> pour vous aider à choisir.

### P2.5 — Raccourcir les sources visibles

Les limites France / Royaume-Uni / Canada / États-Unis sont sérieuses et
doivent rester. Elles peuvent être exprimées en une phrase par source. Le
détail méthodologique complet vit déjà dans le dossier de recherche.

## Contrôles réels effectués

### Navigateur

| Contrôle | Résultat |
| --- | --- |
| 320 px, thème sombre | Aucun débordement horizontal ; document 320/320 px ; calculateur 286 px utiles dans son conteneur. |
| 390 px, thèmes sombre et clair | Aucun débordement ; cartes, formules, CTA et champs lisibles. |
| 1 440 px, thème clair | Document 1 440/1 440 px ; largeur d'article et calculateur 768 px ; huit tableaux visibles sans débordement. |
| Tableaux mobiles | Les huit tableaux deviennent des cartes ; protection technique valide, densité éditoriale invalide pour les treize mois. |
| Formules | Retour à la ligne correct à 320 px ; aucun défilement horizontal nécessaire. |
| Calculateur 24 mois | Totaux doublés correctement ; exemple hybride à 160 680 €, capacité reportée à 162 720 €. |
| Valeur vide | Message d'erreur visible ; copie et téléchargement désactivés. |
| Réinitialisation | Retour à 12 mois et aux valeurs fictives initiales. |
| CTA et liens internes | `/demarrer-un-projet`, CSV et trois guides liés répondent en 200 localement. |
| Console | Aucune erreur ni alerte observée. |

### Tests ciblés

```text
npx vitest run \
  src/lib/tma-tco.test.ts \
  src/components/guides/TmaTcoCalculator.test.tsx \
  src/lib/guide-human-language.test.ts

3 fichiers réussis
43 tests réussis
```

Ces tests démontrent le fonctionnement actuel ; ils ne corrigent pas le défaut
sémantique « inconnu = zéro ».

## Validation humaine

```text
Test réalisé par une personne réelle : non
Profil du lecteur : non testé
Point d'ennui humain mesuré : non
Décision comprise par un dirigeant réel : non revendiquée
```

La présente contre-lecture est un audit indépendant par agent, pas un test
lecteur inventé.

## Porte de sortie

Le guide peut atteindre un très bon niveau sans ajouter de matière :

1. corriger les six P1 ;
2. renvoyer la gestion des coûts inconnus et les libellés de total en P3 ;
3. refaire les calculs et le CSV après cette correction ;
4. relancer P4 sur le nouveau snapshot à 320, 390 et 1 440 px au minimum ;
5. vérifier que le comparatif est visible immédiatement après le clic du hero ;
6. conserver le statut maximal honnête tant qu'aucun lecteur humain réel n'a
   été testé.

**Verdict final : NO-GO en l'état.** Le fond est excellent ; la hiérarchie,
la gestion de l'inconnu et la conversion ne franchissent pas encore la porte
P4.

---

## Revalidation indépendante du 24 juillet 2026 — snapshot corrigé

Cette section ne remplace pas le constat historique ci-dessus : elle contrôle
le nouveau snapshot produit après les corrections P1/P2. Aucun fichier de
production, de recherche, de test ou de manifeste n'a été modifié pendant
cette revalidation.

### Intégrité du nouveau snapshot

La commande suivante réussit pour les onze entrées :

```text
shasum -a 256 -c docs/research/manifests/tma-ou-regie-p2.sha256
```

Les principaux artefacts contrôlés correspondent désormais aux empreintes
suivantes :

```text
fca5fce38ff618d97158974f275fcbc902364b8686ad558c8d79191941d10d1b  src/app/guides/tma-ou-regie/page.tsx
498c1f2a2822e1a928e27044dee7d446d162124496e50663d81684a658eb7804  src/lib/tma-tco.ts
d8e47d95a43b124eff352ce9cffbbcd385ea10db62039894acb6e9e9eb57058b  src/components/guides/TmaTcoCalculator.tsx
e1a0de775b07b8396aac2a9bb7c2f9f61b99987a682b7390f9db8887958b4f29  public/ressources/comparateur-tma-regie-tco.csv
```

### Nouveau verdict exécutif

**Score P4 revalidé : 18/20 — GO.**

```text
P0 : 0
P1 : 0
P2 : 2
Verdict P4 indépendant : GO
Réserve : ce GO ne vaut ni test par un dirigeant réel, ni preuve de publication
```

Le guide franchit maintenant la porte P4. Le dilemme est compris dès
l'ouverture, les définitions arrivent avant le détail, le comparatif des sept
options est accessible directement depuis le hero, l'inconnu n'est plus
assimilé à zéro et le CTA explique ce que le prospect apportera, ce qui sera
comparé et quelle décision il recevra. Les deux résidus ci-dessous sont
éditoriaux et non bloquants.

### Recontrôle des six anciens P1

| Ancien défaut | État | Preuve revalidée |
| --- | --- | --- |
| P1.1 — ouverture trop prestataire | **Corrigé comme défaut bloquant** | La première phrase pose le choix forfait/jour et TMA/régie sont définies immédiatement. Deux formulations restent à simplifier en P2. |
| P1.2 — métaphore des « sept portes » | **Corrigé** | La métaphore a disparu ; la section 2 demande simplement de vérifier si un contrat récurrent est nécessaire. |
| P1.3 — répétition des modes | **Corrigé** | La section 2 conserve trois alternatives au contrat ; la grille répétitive a disparu et la section 4 explique une seule fois comment payer chaque demande. |
| P1.4 — comparatif enfoui après le clic | **Corrigé** | À 390 px, « Comparer les coûts » ouvre `#comparatif-couts` et le premier résultat des sept options apparaît immédiatement sous l'avertissement sur les coûts incomplets. |
| P1.5 — coût inconnu traité comme zéro | **Corrigé** | Chaque option possède par défaut « Des coûts importants restent à confirmer » et est exclue du classement. Avec toutes les cases actives, aucun gagnant n'est annoncé ; après confirmation de l'hybride seul, son coût renseigné de 80 340 € devient le plus faible parmi les options comparables. |
| P1.6 — CTA trop vague | **Corrigé** | Le CTA promet la comparaison de deux offres, les jours perdus, dépassements, temps interne, inconnues, questions à renvoyer et une recommandation conditionnelle pouvant être de ne pas signer. |

### Recontrôle des anciens P2

| Ancien défaut | État |
| --- | --- |
| P2.1 — source Cigref 2004 trop tôt | **Corrigé** : elle ne figure plus que dans « Sources et limites » avec sa portée historique. |
| P2.2 — « continuité » non traduite | **Corrigé** : la première occurrence l'explique comme un suivi régulier, sans promesse d'astreinte ni de remise en service. |
| P2.3 — raccourcis de consultant | **Très largement corrigé** : les notions décisives sont traduites ; voir le résidu P2-R1. |
| P2.4 — annonces d'auteur | **Corrigé** : le calcul est introduit directement par « Comparons maintenant les sept options… ». |
| P2.5 — poids des sources | **Acceptable** : les sources restent après le CTA, sont bornées et justifient précisément ce qu'elles apportent ou n'apportent pas. |

### Score détaillé revalidé

| Critère P4 | Note /2 | Motif |
| --- | ---: | --- |
| Intérêt dès l'ouverture | 1,5 | Situation, question économique, définition et avis sont immédiats ; deux expressions restent contractuelles. |
| Clarté pour un dirigeant | 2 | Le guide distingue clairement ce qui est acheté, la manière de le payer et les alternatives au contrat. |
| Progression et rythme | 1,5 | Les répétitions majeures ont disparu ; treize sections numérotées restent une lecture longue. |
| Voix humaine et anti-IA | 1,5 | L'opinion est nette et contextualisée ; quelques formulations condensées restent proches du vocabulaire de conseil. |
| Opinion professionnelle | 2 | L'hybride est recommandé sous conditions et les cas où il faut payer plus, attendre, internaliser ou remplacer sont explicites. |
| Profondeur et exemples | 2 | Sept options, douze mois, temps interne, report, panne, seuils et limites sont reliés au même cas fictif. |
| Utilité autonome | 2 | Calculateur, CSV, formules, questions contractuelles et scénarios permettent de travailler sans contacter l'agence. |
| Lecture mobile | 1,5 | Aucun débordement à 320/390 px et accès direct au comparatif ; la profondeur produit encore une page très longue. |
| Conversion et CTA | 2 | Le service, les pièces à apporter, les contrôles effectués et la décision livrée sont précis. |
| Sortie et capacité d'agir | 2 | Conclusion avant CTA, recommandations conditionnelles et possibilité explicite de ne pas signer. |

Total : **18/20**.

### P2 résiduels non bloquants

#### P2-R1 — Finir de traduire trois formulations de l'ouverture

Les expressions suivantes restent compréhensibles, mais demandent encore un
petit effort à un dirigeant non technique :

```text
réservez une petite capacité
→ réservez quelques jours chaque mois

payez au temps plafonné
→ payez seulement le temps utilisé, jusqu'au plafond convenu

N'achetez pas une capacité
→ ne réservez pas des jours chaque mois
```

La même passe peut remplacer « temps de décision interne » par « temps passé
par votre équipe à trier, décider et vérifier ». Ce défaut n'empêche plus de
comprendre la réponse ni d'agir.

#### P2-R2 — Surveiller la fatigue réelle sur mobile

Le rendu ne déborde pas, les tableaux deviennent des cartes et le raccourci du
hero mène bien à la comparaison. La page mesure néanmoins environ 51 348 px de
haut à 320 px et 45 067 px à 390 px dans le navigateur de contrôle. Cette
longueur est maintenant portée par de la profondeur plutôt que par la
répétition supprimée. Elle ne justifie donc pas une nouvelle coupe aveugle.
Seul un test avec des dirigeants réels permettrait de décider si une section
doit encore être repliée ou rapprochée.

### Contrôles réels du snapshot corrigé

| Contrôle | Résultat |
| --- | --- |
| 320 px, thème sombre | Document 320/320 px, aucun débordement ; hero, ouverture et action restent lisibles. |
| 390 px | Document 390/390 px, aucun débordement ; clic du hero vérifié jusqu'au premier résultat comparatif. |
| 1 440 px, thème sombre | Document 1 440/1 440 px, aucun débordement ; hiérarchie et largeur de lecture cohérentes. |
| Comparateur, état initial | Les sept options affichent un coût partiel et sont exclues du classement tant qu'un poste important reste inconnu. |
| Comparateur, coût confirmé | Une option confirmée redevient classable sans faire disparaître les inconnues des six autres. |
| CSV | 12 lignes, 13 colonnes constantes ; « coûts renseignés » et postes à confirmer sont distingués. |
| Console | Aucune erreur ni alerte ; uniquement les messages de développement React/HMR. |

Tests ciblés relancés :

```text
npx vitest run \
  src/lib/tma-tco.test.ts \
  src/components/guides/TmaTcoCalculator.test.tsx \
  src/lib/guide-human-language.test.ts

3 fichiers réussis
44 tests réussis
```

### Limite de validation

```text
Test réalisé par une personne réelle : non
Profil du lecteur : non testé
Point d'ennui humain mesuré : non
Décision comprise par un dirigeant réel : non revendiquée
```

**Verdict revalidé : GO P4 indépendant.** Les anciens P1 sont fermés. Les deux
P2 résiduels peuvent être corrigés ou mesurés ultérieurement sans bloquer la
suite du workflow.

---

## Micro-revalidation finale — fermeture de P2-R1

Le nouveau manifeste est cohérent : **11 empreintes sur 11 réussissent** avec
`shasum -a 256 -c`. L'ouverture compte **141 mots**. Les quatre traductions
demandées sont présentes : jours réservés chaque mois, temps utilisé jusqu'au
plafond convenu, temps passé par l'équipe à trier/décider/vérifier et absence
de jours réservés par simple effet du mot « maintenance ». Le sens n'a pas
changé : l'avis reste conditionnel au flux réel, aux évolutions, au temps
interne et au coût d'une panne.

La passe de langue et les **44 tests ciblés sur 44** réussissent. Aucun nouveau
P0, P1 ou P2 de langue n'a été introduit. **P2-R1 est fermé** ; seul P2-R2,
consacré à la fatigue à mesurer auprès de dirigeants réels sur une page longue,
reste ouvert et non bloquant.

Mon navigateur applicatif était indisponible pour une nouvelle capture
indépendante. Le contrôle orchestrateur du même snapshot n'a trouvé aucun
débordement : demande à 320 px rendue à 400/400 px, puis demande à 390 px
rendue à 487/487 px. Il confirme également les 141 mots, un seul H1, l'absence
de classement initial et l'arrivée immédiate sur le premier coût après le clic
« Comparer les coûts » (`#comparatif-couts`). Le précédent contrôle indépendant
avait couvert 320/320 et 390/390 px avant ces seules reformulations de texte.
Cette limite de viewport est consignée ; aucune capture stricte nouvelle à
320/390 px n'est inventée.

```text
Score P4 final : 19/20
P0 : 0
P1 : 0
P2 de langue : 0
P2 résiduel global : 1
Verdict : GO
```

**Verdict micro-P4 : GO.** La correction exacte est fidèle, plus humaine et
n'introduit aucune régression éditoriale détectée.
