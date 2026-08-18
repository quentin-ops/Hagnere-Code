# Contre-signature finale froide R3 — `react-native-ou-flutter`

Date : 25 juillet 2026  
Auditeur : contre-signature indépendante, lecture seule  
Snapshot : manifeste P2 R3 consolidé  
Périmètre : intégrité du gel R3, stabilité du code depuis le GO P3 R2,
cohérence du contre-audit P3 R2 et du reçu P4, relecture des calculs,
relance des tests ciblés et sondage mécanique de la route locale.  
Hors périmètre : nouvelle recherche mondiale, modification du guide, reprise
complète de P4, validation humaine, publication, déploiement, sitemap,
indexation et garantie de classement.

## 1. Verdict exécutif

```text
Note finale : 98/100
Incidents ouverts : P0 = 0 ; P1 = 0 ; P2 = 0
Manifeste P2 R3 : 12/12 empreintes conformes
Code/page/OG depuis P2 R2 : 8/8 empreintes inchangées
Tests ciblés : 8/8 fichiers, 72/72 tests réussis
Verdict : GO fermeture locale
Publication, déploiement, sitemap et indexation : non autorisés
```

Le gel consolidé est cohérent avec la chaîne de preuve annoncée. Le code du
guide, de l'image sociale, du dossier de décision, du moteur, de leurs tests et
du registre n'a pas changé après le GO P3 R2. Le manifeste R3 ajoute les reçus
P3 R2 et P4 au dossier de preuve, puis gèle la recherche mise à jour.

Le reçu P4 couvre bien les dix largeurs exigées, les thèmes, le clavier, la
console, les interactions critiques, le build de production, le PDF physique,
l'image sociale et les métadonnées servies. Un sondage local indépendant
confirme les principaux faits mécaniques sans prétendre refaire toute P4.

Le guide peut donc être fermé **localement**. Il reste
`ready-for-human-review`, servi en `noindex, nofollow` et absent du sitemap.
Cette contre-signature n'autorise aucune mise en ligne ni indexation.

## 2. Intégrité du snapshot consolidé

### 2.1 Manifeste P2 R3

Manifeste contrôlé :
`docs/research/manifests/react-native-ou-flutter-p2-2026-07-25-r3.sha256`

Empreinte SHA-256 du manifeste :

```text
be1a915adad420e9609cb454e64e836df695bc51eb7e248c59cefc6a222d15e2
```

| Artefact gelé | Empreinte attendue | Contrôle |
| --- | --- | --- |
| `docs/research/react-native-ou-flutter.md` | `fddc8ed2669f40ce497b74651cbe48ba11624649b34609774ce3fbc3249b4668` | conforme |
| `docs/audits/giga-audit-2026-07-24/reviews/react-native-ou-flutter-p3-2026-07-25-r1.md` | `4c003ef5d1001f1729e3c517af6c7636b647d983c519108e88209cb01e31c2be` | conforme |
| `docs/audits/giga-audit-2026-07-24/reviews/react-native-ou-flutter-p3-2026-07-25-r2.md` | `8138d57f983356224b1dcf95a946da3de199f2c47297b28fc92ea14fe9a7d587` | conforme |
| `docs/audits/giga-audit-2026-07-24/reviews/react-native-ou-flutter-p4-2026-07-25-r1.md` | `ba25c6a4bed808a2f5574c55a700459383d1d8acb7b155daa308666248d46943` | conforme |
| `src/app/guides/react-native-ou-flutter/page.tsx` | `1981a1e710787884dd81e86699ff19474bc69596665d0afc24ad34aace308d3c` | conforme |
| `src/app/guides/react-native-ou-flutter/opengraph-image.tsx` | `ca977189a50ca9d9fd9b08855a89038b8f865090cb3fb2a3dbd618e32e6d3bfd` | conforme |
| `src/components/guides/MobileFrameworkDecisionDossier.tsx` | `e519f9f5ac742f4351f95503f67015ba2a09584db9cb27f88afb851d6075343d` | conforme |
| `src/components/guides/MobileFrameworkDecisionDossier.test.tsx` | `9ad0f10fa52d6464637821e3d452d117066a460b796e53fb9ae88c80c7f94112` | conforme |
| `src/lib/mobile-framework-decision.ts` | `0dd47a778dcecb699a51bb330f274a0964a6d407eacd050bd63728a9bb29f370` | conforme |
| `src/lib/mobile-framework-decision.test.ts` | `55d3b59dd5a485cc0117bdf43dedc74d17a8084adc99d950594fbd5c96cee597` | conforme |
| `src/lib/react-native-flutter-guide-quality.test.ts` | `7a83e3cd40adeafbcfc1218428ffd09a0b6f653e0c1e6c9eda61ad4a0fb8a414` | conforme |
| `src/lib/guides.ts` | `b32e92d3dc582bcc019319fd7254b07740355bda6bb618bb97cd510c94477990` | conforme |

Résultat : **12 fichiers sur 12 conformes** avant et après la relance des
tests ciblés.

### 2.2 Comparaison avec P2 R2

Empreinte du manifeste P2 R2 :

```text
4f436e51cce049b2b3268fbe8411c6c772fe98a535fbe03598500d57b99c41bd
```

Les huit artefacts de produit et de contrôle présents à la fois dans R2 et R3
ont exactement la même empreinte :

| Artefact | R2 contre R3 |
| --- | --- |
| page du guide | identique |
| source de l'image sociale | identique |
| composant du dossier | identique |
| tests du composant | identiques |
| moteur de décision | identique |
| tests du moteur | identiques |
| contrat qualité du guide | identique |
| entrée du registre | identique |

Le rapport P3 R1 est lui aussi inchangé.

Le fichier de recherche passe de
`ad2fd3ff654f0b9fe24670fd9df9e177afa616ed6c35c405e44beb87d8eb0e6d`
à
`fddc8ed2669f40ce497b74651cbe48ba11624649b34609774ce3fbc3249b4668`.
Sa version R3 contient le reçu éditorial des étapes P3 R2 et P4 dans sa section
29. Les rapports P3 R2 et P4 sont les deux autres pièces ajoutées au gel R3.
Cette évolution du dossier de recherche n'est pas une modification du code ou
du contenu servi.

Conclusion : **aucun code, aucune page et aucune OG n'ont changé après le GO
P3 R2**.

## 3. Cohérence du contre-audit P3 R2

Le rapport P3 R2 a été lu intégralement. Sa frontière est explicite : il porte
sur le snapshot P2 R2 et exclut P4, la validation humaine, la publication, le
déploiement, l'indexation et toute garantie de classement.

Ses résultats restent cohérents avec le gel R3 :

- 10/10 empreintes R2 étaient conformes ;
- les deux P1 et les trois P2 de R1 sont fermés avec des reproductions
  documentées ;
- les portes `pass` ou `fail` sans preuve effective restent `ND` ;
- les dix hypothèses TCO de chaque option sont exportées ;
- le temps de lecture porte sur 4 179 mots écran, soit 21 minutes à
  200 mots/minute ;
- les valeurs négatives ou non finies restent `ND`, tandis que zéro reste une
  hypothèse connue ;
- le repli d'échec de copie renvoie vers une action réellement disponible ;
- le score de 98/100 correspond à la somme des dix axes ;
- aucune validation P4 ou humaine n'est indûment attribuée à P3.

La note P3 R2 peut donc être conservée : **98/100, 0 P0, 0 P1 et 0 P2**.

## 4. Recalcul indépendant des nombres

Les hypothèses fictives couvertes par le moteur et ses tests donnent :

### Option A

```text
Initial : 116 × 650 € + 3 000 € = 78 400 €
Récurrent annuel :
  (20 + 12 + 6) × 650 € + 8 × 500 € + 4 800 € = 33 500 €
Sortie : 12 × 650 € = 7 800 €

TCO 12 mois : 78 400 + 33 500 + 7 800 = 119 700 €
TCO 36 mois : 78 400 + 3 × 33 500 + 7 800 = 186 700 €
TCO 60 mois : 78 400 + 5 × 33 500 + 7 800 = 253 700 €
```

### Option B

```text
Initial : 126 × 650 € + 3 000 € = 84 900 €
Récurrent annuel :
  (18 + 12 + 6) × 650 € + 8 × 500 € + 4 800 € = 32 200 €
Sortie : 12 × 650 € = 7 800 €

TCO 12 mois : 84 900 + 32 200 + 7 800 = 124 900 €
TCO 36 mois : 84 900 + 3 × 32 200 + 7 800 = 189 300 €
TCO 60 mois : 84 900 + 5 × 32 200 + 7 800 = 253 700 €
```

La sensibilité de vingt journées à 650 € ajoute
`20 × 650 € = 13 000 €` à chaque horizon :

| Horizon | A sensibilisée | B sensibilisée |
| --- | ---: | ---: |
| 12 mois | 132 700 € | 137 900 € |
| 36 mois | 199 700 € | 202 300 € |
| 60 mois | 266 700 € | 266 700 € |

Les six TCO centraux et les six TCO sensibilisés du dossier de preuve sont
donc arithmétiquement exacts. Les nombres de P3 R2, du reçu P4, de la recherche
et des tests ne se contredisent pas.

## 5. Couverture et cohérence du reçu P4

Le reçu P4 a été lu intégralement et son empreinte est incluse dans le
manifeste R3.

| Porte P4 demandée | Preuve consignée | Cohérence |
| --- | --- | --- |
| build de production | `NEXT_PUBLIC_ENV=production npx next build`, 159/159 pages | cohérent ; attribué à l'agent racine |
| dix largeurs | 320, 360, 390, 430, 640, 768, 1 024, 1 280, 1 440 et 1 600 px | 10/10 présentes, sans débordement |
| interactions | sensibilité, indépendance A/B, qualification, élimination, copie, échec de copie, reset annulé et confirmé | couverture complète du scénario critique |
| thèmes | clair et sombre à 390 px | lisibilité, états et débordement contrôlés |
| clavier | ordre réel, contrôles attendus et `:focus-visible` | limite du champ date natif déclarée |
| console | 0 warning, 0 error, 0 page error | résultat explicite |
| PDF | Chrome physique, A4, 2 pages, 0 page blanche, 56 211 octets | contenu et deux PNG inspectés |
| image sociale | HTTP 200, PNG, 107 242 octets, 1 200 × 630 | texte et marges inspectés |
| métadonnées | HTTP 200, title, description, canonical, robots, H1, lecture, CTA, JSON-LD | frontières SEO explicites |

Le texte copié compte 4 780 caractères, tandis que l'extraction des deux pages
PDF en compte 3 855 + 914. Cette différence de onze caractères ne constitue
pas une contradiction : le presse-papiers mesure la chaîne source et le PDF
mesure le texte extrait après composition. Le contenu décisif est contrôlé
séparément dans les deux sorties.

Le reçu garde une attribution défendable :

- le build, le navigateur et le PDF sont attribués à P4 et non au contre-audit
  P3 ;
- les 143 erreurs du contrôle SEO global ne sont pas masquées ;
- ces erreurs globales ne sont pas attribuées au guide, qui n'apparaît dans
  aucune d'elles ;
- la suite globale n'est jamais déclarée verte ;
- l'absence du sitemap et le `noindex, nofollow` sont présentés comme des
  protections du statut humain, pas comme une publication réussie ;
- les tests sur produit mobile réel, la revue humaine et le classement restent
  hors périmètre.

## 6. Sondage mécanique local indépendant

La route de production locale sur le port 3011 répond. Ce contrôle est un
sondage de contre-signature ; il ne remplace pas la matrice P4.

### Route du guide

| Contrôle | 390 px | 1 440 px |
| --- | ---: | ---: |
| largeur CSS mesurée | 390 | 1 440 |
| `scrollWidth` | 390 | 1 440 |
| débordement horizontal du document | 0 px | 0 px |
| contrôles visibles hors écran | 0 | 0 |
| H1 | 1 | 1 |

Autres faits observés :

```text
title : React Native ou Flutter : choisir par la preuve
robots : noindex, nofollow
H1 : React Native ou Flutter : comment prouver le bon choix pour votre application ?
warnings console : 0
errors console : 0
```

### Image sociale locale

La route
`/guides/react-native-ou-flutter/opengraph-image` charge une image complète de
**1 200 × 630**.

Ces vérifications confirment les faits mécaniques essentiels du reçu P4 à une
largeur mobile et une largeur desktop. Elles ne revendiquent ni une nouvelle
inspection des dix captures, ni une seconde génération du PDF, ni une reprise
des scénarios interactifs complets.

## 7. Tests relancés

Commande ciblée :

```text
npx vitest run
  src/lib/guides.test.ts
  src/lib/structured-data.test.ts
  src/app/sitemap.test.ts
  src/app/robots.test.ts
  src/lib/public-claims.test.ts
  src/lib/mobile-framework-decision.test.ts
  src/components/guides/MobileFrameworkDecisionDossier.test.tsx
  src/lib/react-native-flutter-guide-quality.test.ts
```

Résultat :

```text
Fichiers : 8 réussis sur 8
Tests : 72 réussis sur 72
```

Le manifeste R3 a ensuite été relancé : **12/12 empreintes toujours
conformes**.

## 8. Note finale

Le code éditorial étant identique au snapshot noté en P3 R2 et P4 n'ayant
ouvert aucun incident, la cotation est conservée sans inflation :

| Axe | Note /10 |
| --- | ---: |
| Intention | 10 |
| Décision | 10 |
| Pédagogie | 10 |
| Profondeur | 10 |
| Preuve | 10 |
| Comparaison | 10 |
| Originalité et utilité | 10 |
| Style | 9 |
| Conversion | 9 |
| SEO et produit | 10 |
| **Total** | **98/100** |

Les deux points non attribués restent des plafonds de validation humaine et de
parcours commercial. Ils ne révèlent aucun incident P0, P1 ou P2.

## 9. Registre final des incidents

### P0

Aucun.

### P1

Aucun.

### P2

Aucun.

### Limites non bloquantes pour la fermeture locale

1. la valeur factuelle d'une preuve saisie reste à contrôler humainement ;
2. les versions, exigences des stores, plugins et coûts restent datés et
   doivent être revérifiés au démarrage d'un projet ;
3. la relecture par un décideur non spécialiste, un spécialiste mobile, une
   personne compétente en accessibilité et une personne sans intérêt React
   reste à organiser ;
4. cette contre-signature ne répète volontairement ni la recherche mondiale,
   ni la P4 complète ;
5. aucun audit éditorial ne garantit une première place dans Google.

## 10. Porte de fermeture

| Porte | Verdict |
| --- | --- |
| intégrité du manifeste R3 | **GO — 12/12** |
| stabilité du code depuis P3 R2 | **GO — 8/8 identiques** |
| cohérence P3 R2 | **GO** |
| cohérence et couverture P4 | **GO** |
| calculs TCO et sensibilités | **GO** |
| tests ciblés | **GO — 72/72** |
| sondage local mobile/desktop | **GO** |
| fermeture locale | **GO** |
| validation humaine | **À FAIRE** |
| publication | **NON AUTORISÉE** |
| déploiement | **NON AUTORISÉ** |
| sitemap | **NON AUTORISÉ** |
| indexation | **NON AUTORISÉE** |

**Verdict final : GO fermeture locale — 98/100, 0 P0, 0 P1, 0 P2.**
