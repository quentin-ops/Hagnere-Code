# Contre-audit P3 R12 / moteur R13 — `aides-creation-site-internet`

Date : **26 juillet 2026**  
Statut : **douzième candidat éditorial, moteur R13, destiné à un nouveau double
contre-audit à froid**  
Publication, déploiement et indexation : **non autorisés**

## 1. Verdicts du gel R12

Deux relecteurs indépendants ont contrôlé le manifeste R12 au début et à la fin,
rejoué les défauts antérieurs et cherché de nouveaux contre-exemples :

```text
Audit factuel, juridique et financier : 64/100 — NO-GO P4
P0 : 0 ; P1 : 4 ; P2 : 3

Audit expérience, pédagogie et accessibilité : 84/100 — NO-GO P4
P0 : 0 ; P1 : 1 ; P2 : 1

Manifeste R12 au début et à la fin : 47/47 conforme pour les deux relecteurs
SHA-256 du manifeste R12 :
b9070d5f9c799eeca7adfa4297c89b5cbe91473e5060a1e2159ae5db7393df5c

Tests ciblés disponibles sur le gel : 426/426, 7 fichiers
Décision retenue : 64/100 — NO-GO
```

Ces notes qualifient le gel R12, pas le présent candidat R13. Les deux lectures
ont produit cinq P1 et quatre P2 bruts. Le défaut de frontière numérique
— caractère combinant ou suffixe `:9999` — relève cependant de la même cause et
de la même fermeture que la grammaire positive P1. Après cette déduplication,
l’union conservée comprend **5 P1 et 3 P2 distincts**.

Le rapport R12 historique et son manifeste n’ont pas été réécrits :

```text
Rapport du candidat R12 :
0a1d4e279c51f8220675029c19ec0b6b68452f2190d479ac3a720e0aa70d0299

Manifeste R12 :
b9070d5f9c799eeca7adfa4297c89b5cbe91473e5060a1e2159ae5db7393df5c
```

## 2. Fermeture candidate des cinq P1 R12

| Défaut du gel R12                                                                                                                                                                                                                                             | Correction candidate R13                                                                                                                                                                                                                                                                                                    | Contre-preuve attendue                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **R13-P1-01 — une référence numérique pouvait encore être acceptée par extraction ou avec une frontière trompeuse.** Des négations, réserves, langues étrangères, caractères pleine chasse, marques combinantes ou suffixes pouvaient entourer le bon numéro. | La reconnaissance numérique utilise une grammaire positive sur la chaîne complète. Elle n’admet que les trois numéros isolés ou deux libellés UE contrôlés, avec `n°` optionnel. Aucun préfixe, suffixe, négation ou texte adjacent n’est interprété.                                                                       | Rejeter notamment les variantes françaises, anglaises et espagnoles négatives, `ｐａｓ`, la marque combinante finale et `2023/2831:9999`, tout en acceptant chaque forme explicitement prévue.                                                                      |
| **R13-P1-02 — un second identifiant juridique pouvait rester invisible au contrôle.** CELEX d’un autre secteur, ECLI, décision `C(…)` ou second règlement pouvaient accompagner le bon numéro.                                                                | La grammaire de chaque famille est fermée et porte sur la chaîne entière : numéro contrôlé, CELEX exact ou ELI exact, jamais deux identifiants ni une citation composite.                                                                                                                                                   | Rejeter `CELEX:12016E107`, `52023PC0033`, `62004TJ0201`, ECLI, décision `C(…)` et règlement `651–2014` lorsqu’ils sont ajoutés à une référence reconnue.                                                                                                            |
| **R13-P1-03 — une URL Unicode ou pleine chasse pouvait échapper au détecteur puis atteindre la branche numérique.**                                                                                                                                           | Une vue NFKC sert uniquement à détecter et refuser les formes ressemblant à une URL. Elle n’est jamais utilisée pour réparer ou accepter la référence. L’analyse officielle continue de porter sur la chaîne brute.                                                                                                         | Rejeter schéma, points et barres pleine chasse, domaine sans schéma et hôte ELI homoglyphique ; prouver qu’aucune forme normalisée n’obtient un régime.                                                                                                             |
| **R13-P1-04 — les clés proches ne rapprochaient pas certaines apostrophes, formes sociales ponctuées ou points terminaux.** Deux montants pouvaient ainsi rester séparés sans question de groupe.                                                             | La clé exacte reste NFC, sensible à la casse, aux accents, à la ponctuation, aux espaces intérieurs et aux caractères de compatibilité. Seule la clé de proximité rapproche apostrophes, points d’abréviation et ponctuation séparatrice. Les barres obliques, antislashs, esperluettes et signes plus restent distinctifs. | Faire remonter `Groupe d’A`/`Groupe d'A`, `S.A.S. Élan`/`SAS Elan` et `Groupe A.`/`Groupe A` sans les sommer ; ne pas créer de faux groupe pour `AB-CD`/`AB/CD`, `A&B`/`A+B` ou `A-1`/`A/1`.                                                                        |
| **R13-P1-05 — le libellé libre d’une ligne de devis pouvait détourner le lien et l’état d’erreur vers un autre champ.**                                                                                                                                       | Le routeur retrouve d’abord le numéro de ligne, retire ensuite le libellé exact normalisé et classe uniquement le corps fiable du message. Les mots du libellé ne participent plus à la décision.                                                                                                                           | Avec `Taux de TVA marketing`, cibler l’admissibilité ; avec `Admissibilité SEO`, cibler la preuve ; avec un libellé contenant montant, TVA, preuve, guillemets ou `»`, cibler seulement le vrai champ. Vérifier lien, focus, `aria-invalid` et `aria-errormessage`. |

## 3. Fermeture candidate des trois P2 R12

| Défaut du gel R12                                                                                | Correction candidate R13                                                                                                                                                                             | Contre-preuve attendue                                                                                                                                         |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **R13-P2-01 — une citation juridique riche aboutissait à une réponse générique.**                | Le message demande de copier seulement un numéro exact, un CELEX exact ou une URL ELI HTTPS exacte, sans phrase, titre ni second identifiant. La page montre des exemples positifs.                  | Coller une citation avec titre et date de Journal officiel ; obtenir une consigne concrète, sans résolution ni authentification.                               |
| **R13-P2-02 — une URL ELI officielle en HTTP était refusée sans réparation actionnable.**        | L’entrée reste refusée. Si la même URL serait exacte en HTTPS, le message demande de remplacer explicitement HTTP par HTTPS puis de vérifier hôte et chemin. Aucune conversion silencieuse n’a lieu. | Rejouer les hôtes officiels en HTTP, contrôler le message, puis vérifier que seule la forme HTTPS exacte est reconnue.                                         |
| **R13-P2-03 — l’exemple Bretagne focalisait le résultat alors qu’il contenait des corrections.** | Le chargement de l’exemple utilise le même prédicat que l’analyse : résumé des erreurs si des corrections existent, résultat sinon. Les parcours direct et confirmé demandent un seul focus final.   | Espionner les deux parcours avec l’exemple incomplet ; le résumé est la destination unique. Conserver la destination résultat pour un dossier sans correction. |

## 4. Contrat de décision R13

- **Référence européenne** : une seule forme exacte et affirmative parmi les
  trois numéros contrôlés, leurs libellés UE autorisés, leurs CELEX de base ou
  consolidés valides et leurs ELI officiels exacts. Une syntaxe reconnue
  n’authentifie ni la pièce, ni son applicabilité, ni le bénéficiaire.
- **Détection défensive** : une représentation Unicode normalisée peut servir à
  repérer une URL déguisée, jamais à transformer une saisie en référence
  admise. L’URL reconnue reste brute, ASCII, HTTPS, sur un hôte et un chemin
  fermés.
- **Entreprise unique** : seule la clé exacte est cumulée. Une clé proche ne
  somme jamais ; elle demande une décision et, si la distinction est affirmée,
  une preuve pour chaque observation concernée. Les preuves restent
  déclaratives et non authentifiées.
- **Fenêtre et groupes** : la proximité est recherchée à l’intérieur de la
  fenêtre propre à l’ancre et au même État membre. Une ligne hors fenêtre ou un
  groupe distinct ne supprime pas un signal pertinent.
- **Accessibilité** : l’identité structurelle de la ligne précède toute lecture
  du texte utilisateur. Chaque erreur vise le contrôle qui peut réellement la
  résoudre. Une action ne provoque qu’un déplacement final de focus.
- **Pédagogie de correction** : HTTP officiel, citation riche et collision de
  clés produisent chacun une consigne opérationnelle sans prétendre conclure à
  la place de l’autorité.
- **Piste d’audit** : les statuts, preuves, hypothèses, limites, montants et
  groupes restent exportés en TXT comme déclarations non authentifiées.

La version candidate est :

```text
SITE_AID_DECISION_VERSION = site-aid-decision-r13-2026-07-26
```

## 5. Vérifications du candidat R13

```text
Tests ciblés consolidés : 461/461, 7 fichiers
Tests moteur seuls : 336/336
Tests interface seuls : 43/43
Tests qualité dédiés : 20/20
TypeScript global : conforme
ESLint ciblé : conforme
Prettier ciblé : conforme après normalisation racine du test d’interface
Recherche de marqueurs de conflit : conforme
Build Next.js direct : conforme
Pages statiques : 159/159
Route du guide : générée
Image sociale du guide : générée
Suite SEO globale : 491/492
Défaut global restant : ancien manifeste P4 de
prioriser-fonctionnalites-mvp-saas sur src/lib/guides.ts
Défaut local aides-creation-site-internet : aucun identifié par ces contrôles
```

La relecture racine a en outre corrigé une incohérence que les premiers tests
n’avaient pas signalée : l’en-tête et la chronologie du dossier de recherche
restaient arrêtés à R11→R12 alors que son état vivant était R12→R13. Le test
qualité exige désormais le bon statut et les deux lignes de verdict R12.

Le défaut de gouvernance SEO est antérieur et extérieur au présent guide. Le
build direct compile, contrôle TypeScript et génère les 159 pages. Ces preuves
restent des contrôles P3 : aucun navigateur réel, arbre d’accessibilité,
impression A4 ni métadonnée rendue n’est validé ici.

## 6. Sources primaires de la grammaire juridique

- [EUR-Lex — identifiant européen de la législation](https://eur-lex.europa.eu/content/help/eurlex-content/eli.html?locale=fr) ;
- [EUR-Lex — créer des liens permanents](https://eur-lex.europa.eu/content/help/data-reuse/linking.html?locale=fr) ;
- [EUR-Lex — structure des numéros CELEX](https://eur-lex.europa.eu/content/help/eurlex-content/celex-number.html?locale=fr) ;
- [ELI officiel du règlement général sur `data.europa.eu`](https://data.europa.eu/eli/reg/2023/2831/oj) ;
- [règlement agricole consolidé au 16 décembre 2024](https://eur-lex.europa.eu/eli/reg/2013/1408/2024-12-16) ;
- [règlement pêche et aquaculture consolidé](https://eur-lex.europa.eu/eli/reg/2014/717/2023-10-25/fra).

Les sources françaises, plafonds, calendriers, dispositifs et limites
territoriales restent ceux du dossier de recherche principal. Le benchmark
international demeure limité à la méthode et n’importe aucun droit étranger.

## 7. Porte de sortie

Le présent rapport **ne s’auto-attribue aucune note**. R13 n’obtient un
**GO P4** que si deux nouveaux relecteurs indépendants :

1. vérifient le nouveau manifeste commun au début et à la fin ;
2. rejouent les cinq P1 et trois P2 R12, puis les défauts antérieurs R4 à R11 ;
3. confrontent références, montants, fenêtres et limites aux sources primaires ;
4. cherchent de nouveaux contre-exemples dans les références, URL, caractères
   Unicode, clés proches, confirmations, preuves, exports et parcours
   assistifs ;
5. rendent chacun une note sur 100 avec `P0/P1/P2` ;
6. concluent séparément à `P0 = 0`, `P1 = 0` et à l’absence de P2 empêchant une
   expérience premium.

Un éventuel double GO P3 n’autorise toujours ni publication, ni déploiement, ni
indexation. La P4 doit encore prouver le rendu réel aux dix largeurs, le
clavier, les thèmes, l’impression A4, l’image sociale, les métadonnées, le
statut robots et l’absence du sitemap.
