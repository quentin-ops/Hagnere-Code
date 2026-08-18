# Rapport P2 R4 — `securite-saas-b2b`

Date : **25 juillet 2026**  
Éditeur unique : `/root`  
Étape suivante : revalidation P3 indépendante sur le manifeste P2 R4  
Statut maximal : **brouillon complet prêt pour contre-audit**

## 1. Statut exact

```text
Score P2 auto-attribué : aucun
P3 R3 : NO-GO retenu
P3 R4 : non réalisé
P4 finale : non réalisée
Build final de production : non réalisé
Statut éditorial : ready-for-human-review
Robots attendus : noindex, nofollow
Commit / push / déploiement / publication / indexation : non réalisés
```

Ce rapport autorise seulement un nouveau contre-audit sur le gel R4. Il ne
constitue ni une autorisation de publication, ni une preuve de production, ni
une promesse de classement Google.

## 2. Pourquoi R3 a été refusée

Le manifeste R3 reste immuable :

```text
docs/research/manifests/securite-saas-b2b-p2-2026-07-25-r3.sha256
SHA-256 : cc8307dc81b9ea227c32d3a78d2d247c1953172fa3867ecd1aa7d72ad87d4ba4
Empreintes contrôlées : 16/16
```

Deux relecteurs indépendants ont relu ce même gel :

- première lecture : **96/100**, P0/P1/P2 = **0/0/0**, `GO P4` ;
- seconde lecture : **87/100**, P0/P1/P2 = **0/1/2**,
  `NO-GO — retour P2`.

Un seul P1 suffit à fermer la porte. Le second verdict est donc retenu sans
moyenne ni compensation par le premier score.

## 3. Incidents R3 fermés dans R4

### `SEC-R4-P1-01` — une charge infinitésimale n'autorise plus la signature

R3 refusait zéro heure pour une correction ouverte, mais acceptait encore
`0.001` ou `Number.MIN_VALUE`. La décision pouvait alors devenir
`sign-with-conditions`, tandis que l'arrondi de l'export présentait `0 h`.

R4 introduit une borne commune :

```text
charge minimale d'un travail planifié : 0,01 h
charge maximale par entrée : 1 000 000 h
```

Cette borne est appliquée :

- par le moteur, indépendamment du navigateur ;
- par le champ HTML avec `min="0.01"` et `step="0.01"` ;
- par le calcul des capacités après signature ;
- par le message visible et `aria-invalid` ;
- par le formatage, qui n'arrondit plus une valeur non nulle sous la borne à
  zéro.

Les cas juste sous la borne, à la borne et juste au-dessus sont testés. Une
charge inconnue reste vide ; elle n'est jamais assimilée à zéro.

### `SEC-R4-P2-01` — l'annonce et le bouton désignent le même défaut

La région dynamique annonçait auparavant la première erreur globale, tandis
que le bouton ouvrait la première famille invalide. R4 dérive désormais les
deux comportements du même incident de famille :

- le message annonce explicitement le point que le bouton peut ouvrir ;
- le panneau correspondant s'ouvre ;
- le focus va sur son résumé ;
- le nombre total d'erreurs reste annoncé séparément.

### `SEC-R4-P2-02` — l'export n'expose plus la taxonomie interne

Les chaînes `formal-assurance` et les autres identifiants techniques ne sont
plus affichés dans le registre ni dans les capacités différées. L'export
utilise :

```text
EXIGENCE 1 à EXIGENCE 6
libellé humain complet de la famille
```

Les identifiants restent internes au calcul et aux tests ; ils ne sont plus
présentés au lecteur.

## 4. Rejeu des protections antérieures

R4 conserve les fermetures obtenues en R3 :

- assurance indépendante non écartable comme non applicable dans les six
  familles ;
- pièce indépendante obligatoire lorsque cette nature est déclarée satisfaite ;
- états React incompatibles normalisés avec effacement des acceptations
  devenues sans objet ;
- valeurs numériques extrêmes fermées sans `Infinity` ;
- exemple fictif relatif à la date locale, y compris changement d'année et
  année bissextile ;
- scénario pédagogique inchangé : **120 h initiales, 150 h prudentes, 80 h
  disponibles, déficit de 70 h** ;
- erreurs visibles, reliées à chaque famille et récupérables au clavier.

## 5. Contrôles exécutés avant gel

```text
Tests sécurité dédiés : 73/73 sur 4 fichiers
Suite ciblée élargie : 101 réussis sur 102, sur 8 fichiers
TypeScript : conforme
ESLint ciblé : conforme
Formatage Prettier ciblé : conforme
git diff --check ciblé : conforme
Suite SEO globale : 490 réussis sur 491, sur 51 fichiers
```

L'unique échec des deux suites élargies reste étranger au guide sécurité :
le reçu P4 historique de `prioriser-fonctionnalites-mvp-saas` attend une
ancienne empreinte du registre partagé `src/lib/guides.ts`. R4 ne modifie ni
ce guide ni son reçu et ne présente pas le contrôle global comme vert.

Le texte rendu de la page reste à **6 287 mots**, soit **31 minutes** mesurées
hors atelier.

## 6. Ce que R4 ne prouve toujours pas

- aucun verdict P3 n'a encore été émis sur R4 ;
- aucun build final n'est rattaché à R4 ;
- les dix largeurs, clair/sombre et clavier restent à refaire sur R4 ;
- le téléchargement, l'effacement et l'impression restent à refaire sur R4 ;
- l'image sociale reste à rendre à 1 200 × 630 sur R4 ;
- aucun test avec lecteur d'écran réel n'a encore été effectué ;
- aucune production, publication, indexation, demande d'indexation, validation
  humaine externe, commit, push ou déploiement n'a été effectué.

## 7. Porte suivante

**Remise P2 R4 : prête pour deux revalidations indépendantes sur le nouveau
manifeste, sans note et sans autorisation de publication.**
