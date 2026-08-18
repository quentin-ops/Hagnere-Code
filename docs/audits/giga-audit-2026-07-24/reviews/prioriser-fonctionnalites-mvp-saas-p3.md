# Contre-audit P3 indépendant — `prioriser-fonctionnalites-mvp-saas`

Date : 24 juillet 2026

Relecteur : cellule indépendante `mvp_final_review`

Périmètre autorisé : lecture de la page, du registre, du CSV, de l’image
sociale, du dossier de recherche et de l’audit initial. Ce rapport est le seul
fichier créé par le relecteur.

## 1. Snapshot contrôlé

| Élément                              | SHA-256 contrôlé                                                   |
| ------------------------------------ | ------------------------------------------------------------------ |
| Page publique                        | `e48a3e763fc6c6dd6444da0e1d2513896e4420932636a8d0cc1acff4fdf3f643` |
| Image sociale                        | `e6d52a4c109b6581115866dcd7651024443de3be5bf69bee5b43cd065fc217d3` |
| Registre partagé `src/lib/guides.ts` | `894eb2664a819a638b38408ec249855ae0fc80a670862274778dc886917a9f23` |
| Kit CSV                              | `645ea43efd317e1322383ecc329d126b19b8b0b4dfd8aea7ab3e448cca5aeed3` |
| Dossier de recherche                 | `55575b84b9f9229faebdf3b3a97eba8659194c4537ba3df7d5a425b62cc700b6` |
| Audit initial 66/100                 | `878e9d4c5c89647070994af7b7898c685f87c6b1844c760b931d839611dfb999` |

Ces empreintes sont importantes : le relecteur a signalé trois P1 pendant la
lecture, puis a entièrement rejoué les contrôles sur la version corrigée. Une
modification ultérieure de l’un de ces fichiers rouvre la P3 correspondante.

## 2. Verdict exécutif

**Score P3 : 98/100.**

**P0 restant : aucun.**

**P1 restant : aucun sur le snapshot ci-dessus.**

**P2 restant : aucun sur le snapshot ci-dessus.**

Le saut depuis l’audit initial à 66/100 est substantiel et vérifiable. La page
ne se contente plus de décrire RICE : elle part d’un conflit compréhensible
pour un dirigeant, sépare les urgences qui ne doivent pas perdre un concours de
popularité, reformule une demande en travail bloqué, compare cinq issues,
recalcule quatre candidats, montre une sensibilité, oppose ce résultat à un
mini-calcul WSJF, chiffre une économie, ferme une capacité de 30 jours et
fournit le tableur permettant de refaire la décision.

La position éditoriale est à la fois tranchée et responsable :

> un score ne décide pas ; il oblige l’équipe à rendre ses hypothèses visibles.

Cette position est tenue jusqu’au CTA. Hagnéré Code vend du développement, mais
la page autorise explicitement la correction, la réutilisation, l’achat, le
test et le report. Le conflit d’intérêt est donc traité, pas dissimulé.

Le guide est publiable du point de vue éditorial sur ce snapshot. Cette
conclusion ne vaut ni gel P4, ni validation du build global, ni preuve
d’indexation Google.

## 3. Les trois P1 détectés puis fermés

### 3.1 Effort RICE et capacité incompatibles — fermé

La première version relue attribuait **2 personnes-mois** à la validation
groupée dans RICE, puis seulement **10 jours de construction + 10 heures
internes** dans le chiffrage et **10 jours** dans le lot. Elle faisait donc
passer trois efforts différents pour le même travail.

La page et le CSV emploient désormais une convention unique :

```text
10 jours + 10 heures ÷ 8 heures
= 11,25 jours-personnes
```

Le lot réserve 12 jours et explique l’arrondi prudent de 11,25 à 12. Le défaut
est fermé.

### 3.2 Échelle d’impact absente — fermé

Les scores utilisaient 3, 2, 1 et 0,5 sans dire ce que ces nombres
représentaient. La page et l’en-tête du CSV publient maintenant la convention
illustrative d’Intercom :

```text
3 massif ; 2 élevé ; 1 moyen ; 0,5 faible ; 0,25 minimal
```

La page précise qu’il s’agit d’une estimation et non d’une mesure scientifique.
Le lecteur peut donc refaire le calcul sans inventer la légende.

### 3.3 Faux point mort économique — fermé

La première version divisait un coût de première année incluant 1 200 € de
maintenance récurrente par un gain annuel brut, puis omettait la maintenance
des années suivantes. La page sépare maintenant :

```text
investissement initial = 7 350 €
maintenance annuelle = 1 200 €
gain brut central = 3 220 €/an
gain net central = 2 020 €/an
point mort simple = 7 350 ÷ 2 020 = 3,64 ans
```

Les scénarios prudent et exigeant ont été corrigés selon la même logique.

## 4. Score détaillé

| Axe                         | Note /10 | Justification                                                                                                                                                                                                     |
| --------------------------- | -------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Intention de recherche      |       10 | La question du dirigeant est posée dès la première phrase : dix demandes, deux fonctions possibles, comment choisir sans céder au plus insistant ?                                                                |
| Aide à la décision          |       10 | Cinq issues, un sas de non-négociables, un objectif, des conditions d’acceptation, un lot fermé et des signaux de réexamen conduisent réellement à une décision.                                                  |
| Pédagogie dirigeant         |       10 | MVP est expliqué, RICE est décomposé, les unités sont annoncées et le même cas traverse la page. Les formulations de sources ont été ramenées à une conséquence concrète.                                         |
| Profondeur                  |       10 | Portée, confiance, effort total, sensibilité, WSJF, gain net, maintenance, capacité, plus gros client, réutilisation, sécurité et preuve sont traités.                                                            |
| Preuve et exactitude        |       10 | Sources primaires ou officielles rouvertes, liens rapprochés des passages invoqués et périmètres étrangers signalés. Les calculs et statuts NIST sont exacts.                                                     |
| Comparaison                 |       10 | RICE, MoSCoW, WSJF, Kano et la carte du parcours répondent à des questions distinctes. RICE et WSJF sont appliqués au même cas ; Kano est explicitement présenté comme une hypothèse à vérifier.                  |
| Originalité et valeur utile |       10 | Le même conflit produit cinq issues et débouche sur un CSV utilisable sans collecte d’adresse. Le cas de portée corrigée de 60 à 6 est particulièrement mémorable.                                                |
| Style humain et anti-IA     |        9 | Ouverture concrète, phrases majoritairement simples, opinions assumées, objections loyales et absence de prétendu résultat client. Le texte évite désormais le jargon « backlog ».                                |
| Conversion et confiance     |       10 | Livrable annoncé, bon et mauvais contexte, développement non présumé et CTA cohérent. La page peut convertir sans forcer artificiellement la conclusion vers le sur-mesure.                                       |
| SEO et produit éditorial    |        9 | Métadonnées, canonique, Article et BreadcrumbList, maillage, FAQ visible, image 1200 × 630, ressource téléchargeable et profondeur sémantique sont présents. L’indexabilité technique ne prouve pas l’indexation. |

Total : **98/100**.

## 5. Vérification des sources primaires

| Source rouverte le 24/07/2026     | Ce qu’elle confirme                                                                                                                                | Utilisation dans le guide                                                  | Verdict                                       |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | --------------------------------------------- |
| Intercom, Sean McBride, RICE      | Portée dans une période, impact, confiance, effort total de l’équipe, formule, données réelles quand possible et possibilité de décider hors score | Définition, formule, échelle d’impact et avertissement                     | Conforme                                      |
| Agile Business Consortium, MoSCoW | Must, Should, Could, Won’t Have this time dans un horizon explicite ; catégories inférieures en partie subjectives ; révision continue             | MoSCoW protège le contenu d’un lot borné et rend les exclusions visibles   | Conforme                                      |
| Scaled Agile Framework, WSJF      | Coût relatif du retard divisé par durée ou taille relative ; modèle de séquencement dans SAFe                                                      | Question économique différente de RICE et calcul relatif sur deux demandes | Conforme                                      |
| GOV.UK Service Manual             | Partir du problème et des usages ; traiter les opinions ou suggestions ne venant pas d’utilisateurs comme des hypothèses ; poursuivre la recherche | Reformulation de l’export Excel en travail bloqué                          | Conforme                                      |
| Home Office, Design from evidence | Preuve actuelle et transparente ; exigences fonctionnelles et non fonctionnelles ; tests et documentation                                          | Sortie des obligations, sécurité et dépendances du concours commercial     | Conforme                                      |
| Digital.gov.au, critères 2 et 6   | Comprendre et observer les utilisateurs ; tester les hypothèses ; rechercher les plateformes, standards et alternatives à une construction neuve   | Tester ou réutiliser avant de développer                                   | Conforme                                      |
| Australian Digital Health Agency  | Priorités validées par les parties, MVP testable et éléments moins prioritaires non abandonnés                                                     | Réexamen plutôt que promesse vague                                         | Conforme, contexte santé correctement signalé |
| NIST SSDF                         | SSDF 1.1 final ; SSDF 1.2 toujours Draft ; priorité selon besoins, risques, ressources et dépendances                                              | Sécurité traitée selon le risque, statut des versions daté                 | Conforme                                      |
| Strategyzer Test Card             | Hypothèse, test, mesure et seuil écrits avant l’expérience                                                                                         | Test falsifiable avant construction                                        | Conforme, intérêt commercial signalé          |

### Point de méthode

Ces sources décrivent des méthodes, des référentiels ou des pratiques. Elles ne
prouvent pas qu’un score RICE augmente le chiffre d’affaires ni que le cadre
améliore universellement une roadmap. Le guide respecte cette limite et ne
transforme aucune méthode en garantie.

## 6. Calculs rejoués

### 6.1 RICE

```text
Validation groupée
= 40 × 2 × 0,8 ÷ 11,25
= 5,688888… -> 5,69

Validation avec confiance divisée par deux
= 40 × 2 × 0,4 ÷ 11,25
= 2,844444… -> 2,84

Tableau de bord
= 120 × 1 × 0,5 ÷ 20,5
= 2,926829… -> 2,93

Intégration
= 8 × 3 × 0,5 ÷ 12
= 1

Couleurs, portée initiale
= 60 × 0,5 × 0,8 ÷ 5
= 4,8

Couleurs, portée corrigée
= 6 × 0,5 × 0,8 ÷ 5
= 0,48
```

La sensibilité inverse bien l’ordre entre validation groupée et tableau de
bord : 2,84 devient inférieur à 2,93.

### 6.2 WSJF

```text
Validation groupée
= (valeur 13 + urgence 5 + risque/opportunité 3) ÷ taille 8
= 21 ÷ 8
= 2,625 -> 2,63

Intégration avant une date de bascule
= (valeur 8 + urgence 13 + risque/opportunité 8) ÷ taille 8
= 29 ÷ 8
= 3,625 -> 3,63
```

Les points sont présentés comme des valeurs relatives, ni comme des euros ni
comme des probabilités. La page explique aussi que WSJF ne découvre pas le
coût du retard : il rend visible l’hypothèse qui le fait monter.

### 6.3 Temps et point mort

```text
2 minutes : 30 × 2 ÷ 60 × 46 × 35 = 1 610 €/an brut
4 minutes : 30 × 4 ÷ 60 × 46 × 35 = 3 220 €/an brut
8 minutes : 30 × 8 ÷ 60 × 46 × 35 = 6 440 €/an brut

investissement initial = 10 × 700 + 10 × 35 = 7 350 €
maintenance = 12 × 100 = 1 200 €/an

prudent : 7 350 ÷ (1 610 - 1 200) = 17,9268… -> 17,93 ans
central : 7 350 ÷ (3 220 - 1 200) = 3,6386… -> 3,64 ans
exigeant : 7 350 ÷ (6 440 - 1 200) = 1,4027… -> 1,40 an
```

Le guide précise les exclusions : coût du capital, inflation, fiscalité,
variation du volume, adoption et valeur client.

### 6.4 Test, capacité et plus gros client

```text
test manuel = 3 × 6 h × 40 € = 720 €
tableau de bord = 18 × 700 € + 20 h × 35 € = 13 300 €
part du test = 720 ÷ 13 300 = 5,4135… % -> 5,4 %

capacité = 8 + 12 + 3 + 7 = 30 jours
reste = 0 jour

contribution = 36 000 - 10 000 = 26 000 €
à risque à 20 % = 5 200 €
à risque à 50 % = 13 000 €
à risque à 70 % = 18 200 €
```

Tous les résultats visibles sont exacts à l’arrondi annoncé.

## 7. Audit du kit CSV

- route locale : HTTP 200 ;
- type : `text/csv; charset=UTF-8` ;
- 11 lignes : un en-tête, cinq exemples et cinq lignes vierges ;
- 18 colonnes constantes sur les 11 lignes ;
- hash du fichier local identique au contenu servi ;
- formules présentes sur les quatre exemples comparables :
  `=I3*J3*K3/L3` à `=I6*J6*K6/L6` ;
- séparateur `;` et virgule décimale adaptés à un usage francophone ;
- le signal de réexamen de l’exemple EX-02 couvre une confiance égale ou
  inférieure à 0,4, donc également le point d’inversion montré dans la page ;
- aucune adresse e-mail ni donnée n’est transmise à Hagnéré Code ;
- le CSV distingue l’effort complet de la fonction du nombre de jours
  effectivement consommés par le lot ou le test.

Le fichier apporte une vraie valeur : il ne s’agit pas d’un PDF décoratif, mais
d’un support que le lecteur peut nettoyer puis remplir.

## 8. Contrôles réels de rendu et de route

### Responsive

Les largeurs suivantes ont été contrôlées dans le navigateur réel, en thème
clair **et** sombre :

| Largeur CSS | Débordement document | Élément coupé parmi titres, liens, boutons, tableaux et blocs de code |
| ----------: | -------------------: | --------------------------------------------------------------------- |
|      320 px |                aucun | aucun                                                                 |
|      390 px |                aucun | aucun                                                                 |
|      768 px |                aucun | aucun                                                                 |
|    1 024 px |                aucun | aucun                                                                 |
|    1 440 px |                aucun | aucun                                                                 |

À 320 px, les tableaux deviennent des cartes verticales lisibles. Le H1, le
bouton de téléchargement, les formules et le CTA restent dans la largeur.

### Technique

- page locale : HTTP 200 ;
- CSV : HTTP 200 et contenu servi identique au fichier ;
- image sociale : HTTP 200, PNG réel de 1 200 × 630 ;
- console : aucune erreur ni alerte après les contrôles ;
- canonique :
  `https://hagnere-code.ai/guides/prioriser-fonctionnalites-mvp-saas` ;
- image Open Graph :
  `https://hagnere-code.ai/guides/prioriser-fonctionnalites-mvp-saas/opengraph-image` ;
- données structurées rendues : `Article` et `BreadcrumbList` ;
- contenu mesuré : 4 970 mots visibles, soit 25 minutes à
  200 mots/minute ;
- temps de lecture du registre : 25 minutes pour ce guide, sans altérer
  `portail-client-b2b-sur-mesure` à 24 minutes ni
  `faire-evoluer-saas-apres-mvp` à 22 minutes ;
- ordre des titres : aucun saut de niveau ;
- lien ou bouton sans nom accessible : aucun ;
- tests éditoriaux ciblés : **55/55** ;
- ESLint ciblé : conforme ;
- TypeScript sans émission : conforme ;
- Prettier ciblé et `git diff --check` : conformes.

Le `noindex, nofollow` observé sur le serveur local correspond au garde-fou de
l’environnement de développement. La validation de l’indexabilité de
production appartient au build et à la P4, pas à ce rapport.

## 9. P0, P1 et P2 restants

### P0

Aucun.

### P1

Aucun sur le snapshot contrôlé.

### P2

Aucun sur le guide, le registre, le CSV et l’image sociale du snapshot.

Les cinq P2 signalés pendant le contre-audit ont été corrigés avant ce verdict :
paraphrase GOV.UK précise, liens NIST et australien rapprochés, mini-calcul
WSJF, réserve explicite sur Kano et seuil CSV inclusif. Le dossier de recherche
peut maintenant recevoir ce verdict et fermer la porte P3 ; il reste
logiquement « avant nouveau P3 » tant que ce rapport n’y a pas été référencé.

## 10. Verdict de passage

```text
P0 : 0
P1 : 0
P2 : 0
Score : 98/100
Décision P3 : GO
```

Le guide satisfait désormais le seuil de 90/100 sans axe inférieur à 8/10. Sa
valeur vient moins de son volume que de sa chaîne complète :

```text
demande brute
→ problème et preuve
→ non-négociables
→ objectif commun
→ scores RICE et WSJF recalculables
→ test ou réutilisation
→ économie nette
→ capacité fermée
→ décision et signal de réexamen
```

Cette chaîne est compréhensible par un dirigeant, reproductible et compatible
avec une conversion professionnelle. Elle est également plus crédible parce
qu’elle peut conclure à ne rien développer.
