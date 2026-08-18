# Reçu P4 navigateur, impression et production locale — `react-native-ou-flutter`

Date : 25 juillet 2026  
Snapshot contrôlé : P2 R2, validé en P3 R2 à 98/100  
Responsable des preuves : agent racine  
Périmètre : build de production local, rendu responsive, thèmes, interactions
du dossier, clavier, console, métadonnées servies, image sociale et PDF Chrome
physique.  
Hors périmètre : publication, déploiement, indexation, tests sur un produit
mobile réel, validation humaine et garantie de classement.

## 1. Verdict exécutif

```text
Build de production : réussi
Pages statiques générées : 159/159
Largeurs Chrome exactes : 10/10
Débordement horizontal : 0/10
Console : 0 warning, 0 error
Interactions critiques : réussies
PDF Chrome : 2 pages A4, 0 page blanche
Image sociale : 1 200 × 630, lisible
Incidents P4 ouverts : P0 = 0 ; P1 = 0 ; P2 = 0
Verdict : GO pour contre-signature finale et fermeture locale
Publication/indexation : non autorisées
```

P4 ne révèle aucun défaut nouveau. Le guide conserve le score froid P3 R2 de
**98/100** et peut être présenté à une contre-signature finale. Le statut reste
`ready-for-human-review` avec `noindex, nofollow` : le présent GO ne rend pas
la route publique et ne la place pas dans le sitemap.

## 2. Build de production contrôlé

Commande directe :

```text
NEXT_PUBLIC_ENV=production npx next build
```

Résultat :

- compilation optimisée réussie ;
- contrôle TypeScript du build réussi ;
- collecte des données réussie ;
- **159 pages sur 159** générées ;
- route `/guides/react-native-ou-flutter` pré-rendue comme contenu statique ;
- route d'image sociale disponible dynamiquement ;
- serveur de ce build démarré localement sur `http://localhost:3011`.

Les contrôles ci-dessous portent sur ce build, pas sur un serveur de
développement.

## 3. Matrice responsive réelle

Deux moteurs de contrôle ont été utilisés :

1. le navigateur intégré, pour l'inspection visuelle et DOM dans le parcours
   de travail ;
2. Google Chrome système en mode headless, pour imposer les dix largeurs CSS
   exactes, notamment 768 px.

Le navigateur intégré applique un facteur de capture de `0,8` : il donne
769 px lorsque la taille physique la plus proche de 768 px est demandée. Cette
particularité de l'outil de capture a été neutralisée par le second contrôle
Chrome exact.

| Largeur CSS | Largeur Chrome mesurée | Débordement document | Contrôle hors écran | Dossier hors écran | H1 | Option active | ID dupliqué |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 320 | 320 | 0 px | 0 | 0 px | 1 | 1 | 0 |
| 360 | 360 | 0 px | 0 | 0 px | 1 | 1 | 0 |
| 390 | 390 | 0 px | 0 | 0 px | 1 | 1 | 0 |
| 430 | 430 | 0 px | 0 | 0 px | 1 | 1 | 0 |
| 640 | 640 | 0 px | 0 | 0 px | 1 | 1 | 0 |
| 768 | 768 | 0 px | 0 | 0 px | 1 | 1 | 0 |
| 1 024 | 1 024 | 0 px | 0 | 0 px | 1 | 1 | 0 |
| 1 280 | 1 280 | 0 px | 0 | 0 px | 1 | 1 | 0 |
| 1 440 | 1 440 | 0 px | 0 | 0 px | 1 | 1 | 0 |
| 1 600 | 1 600 | 0 px | 0 | 0 px | 1 | 1 | 0 |

À chaque largeur :

- `documentElement.scrollWidth` reste égal à `innerWidth` ;
- le dossier reste dans sa colonne ;
- aucun `input`, `textarea`, `select` ou `button` visible ne sort de l'écran ;
- les deux boutons d'option restent utilisables et un seul porte
  `aria-pressed="true"` ;
- les grilles passent proprement d'une à plusieurs colonnes ;
- aucun identifiant dupliqué n'est introduit.

Les captures représentatives 320, 390 et 1 600 px ont été inspectées. Le titre,
le lead, les badges, l'article, l'outil et ses champs restent lisibles sans
troncature.

## 4. Thèmes, clavier et console

### 4.1 Thèmes

Le haut de page et le dossier ont été inspectés en thème clair et en thème
sombre à 390 px :

- fond, texte, bordures et états restent cohérents ;
- les champs conservent un contraste lisible ;
- la sélection d'option, les alertes et les blocs de résultat restent
  distinguables ;
- aucun débordement n'apparaît après la bascule ni après rechargement avec la
  préférence sombre persistée.

### 4.2 Clavier

Une séquence réelle au clavier a été lancée depuis la date du dossier. Elle
traverse :

- les champs du besoin commun ;
- les deux boutons d'option ;
- le nom, l'architecture et l'inventaire ;
- les contrôles suivants dans l'ordre du document.

Les éléments atteints après `Tab` correspondent au contrôle attendu et portent
`:focus-visible`. Le champ date expose plusieurs sous-étapes natives dans
Chrome ; cette particularité du contrôle système ne bloque pas la suite du
parcours.

### 4.3 Console

Après rechargement et parcours des dix largeurs :

```text
warnings console : 0
errors console : 0
page errors : 0
```

## 5. Scénarios fonctionnels réels

### 5.1 Sensibilité invalide

Saisie réelle `-5` :

```text
valeur conservée dans le champ : vide
aria-invalid : true
alerte : Saisissez un nombre fini supérieur ou égal à zéro.
chaîne "+-" : absente
```

La valeur `20` est ensuite acceptée et les trois horizons sont calculés. La
valeur zéro est déjà couverte par les tests P3 et reste une hypothèse connue.

### 5.2 Indépendance des options

Option A remplie :

```text
nom : React Native + Expo
sept portes : PASS avec preuve
verdict : Option qualifiée sur les portes
TCO 12 / 36 / 60 : 119 700 / 186 700 / 253 700 € HT
sensibilité : +20 jours
```

À l'ouverture initiale de B :

```text
nom : Option B
première porte : unknown
première preuve : vide
taux journalier : vide
```

Option B remplie :

```text
nom : Flutter 3.44
une porte : FAIL avec preuve reproductible
six portes : PASS avec preuve
verdict : Option éliminée
TCO 12 / 36 / 60 : 124 900 / 189 300 / 253 700 € HT
sensibilité : +20 jours
```

Après retour vers A, son nom, ses preuves, son taux journalier et sa
sensibilité sont toujours présents. Aucune saisie de B n'a contaminé A.

### 5.3 Copie

Le presse-papiers réel a reçu un rapport de **4 780 caractères** contenant :

- la version `mobile-framework-decision-r2-2026-07-25` ;
- le besoin commun ;
- les deux noms d'option ;
- un verdict `QUALIFIÉE` et un verdict `ÉLIMINÉE` ;
- deux sections `HYPOTHÈSES TCO` ;
- chacun des dix libellés d'hypothèse exactement deux fois ;
- les six TCO centraux ;
- les six TCO sensibilisés ;
- aucune chaîne `undefined`, `NaN`, `Infinity` ou `+-`.

Le succès annonce « Dossier copié ».

Le presse-papiers et son repli ont ensuite été rendus volontairement
indisponibles. Le message observé est :

```text
La copie a échoué dans ce navigateur.
Utilisez le bouton « Imprimer le dossier ».
```

Il ne propose plus de sélectionner un rapport caché.

### 5.4 Réinitialisation

Après ouverture de la confirmation :

- « Annuler et conserver » garde le besoin, le nom A et les coûts ;
- « Effacer définitivement » restaure A et B à leur état initial ;
- le besoin commun, les preuves et les coûts sont vides ;
- les portes redeviennent `unknown` ;
- A redevient l'option active.

## 6. PDF physique Chrome

Le PDF a été généré depuis le dossier A/B complet, avec Google Chrome système,
fond d'impression activé, format A4 et marges de 12 mm.

```text
Fichier temporaire : /tmp/react-native-ou-flutter-p4-r2.pdf
SHA-256 : da9eb94745713cd2886959accf1be4a3c14012db00e2666f45d05486e84bb617
Taille : 56 211 octets
Format : A4
Pages : 2
Pages blanches : []
Longueur textuelle page 1 : 3 855 caractères
Longueur textuelle page 2 : 914 caractères
```

Contrôle de contenu :

- un seul titre `DOSSIER DE PREUVE AVANT FRAMEWORK` ;
- deux sections `HYPOTHÈSES TCO` ;
- A et B présents ;
- verdicts qualifié et éliminé présents ;
- six TCO et six sensibilités présents ;
- aucune valeur indéfinie ou non finie ;
- H1 et article éditorial absents ;
- boutons Copier, Imprimer et Réinitialiser absents.

Les deux pages ont été rendues en PNG et inspectées à leur résolution
d'origine :

- page 1 : besoin, option A complète et début de B lisibles, sans troncature ;
- page 2 : fin de B et règle de décision lisibles, fin de document propre ;
- aucune superposition, page vide ou contrôle interactif résiduel.

Les rendus PNG temporaires avaient les empreintes :

```text
page 1 : e85b91db19174ad5d6da8c9045e3c33500390e92210f924bd189c5a8a215be67
page 2 : 9c63355cc14179f2fa1b7e1768989058c8963ba086fe209e62f6963de9aa5f17
```

## 7. Image sociale

La route produite
`/guides/react-native-ou-flutter/opengraph-image` répond :

```text
HTTP : 200
Content-Type : image/png
Taille : 107 242 octets
Dimensions : 1 200 × 630
```

Inspection visuelle :

- marque Hagnéré Code lisible ;
- titre « React Native, Flutter ou autre ? » non tronqué ;
- promesse de preuve et de coût complet lisible ;
- badges Fonction critique, TCO 12/36/60 et Build et reprise lisibles ;
- marges suffisantes sur les quatre côtés.

## 8. Métadonnées servies

| Élément | Résultat du build |
| --- | --- |
| HTTP route | 200 |
| title | `React Native ou Flutter : choisir par la preuve` |
| description | fonctions critiques, équipe, appareils, TCO, maintenance et reprise |
| canonical | `https://hagnere-code.ai/guides/react-native-ou-flutter` |
| robots | `noindex, nofollow` |
| H1 | 1 |
| lecture visible | `Lecture : 21 min` |
| CTA éditoriale | 1 |
| JSON-LD | `Article` + `BreadcrumbList` |
| schémas absents | `FAQPage`, `HowTo`, `Offer`, `wordCount` |
| sitemap local | route absente |

L'absence du sitemap et le `noindex, nofollow` sont conformes au statut
`ready-for-human-review`.

## 9. Contrôle SEO global et frontière d'attribution

`node scripts/verify-search-indexing-artifact.mjs` échoue encore sur le socle
global avec **143 erreurs** : alertes de preview/noindex et deux temps de
lecture incohérents sur d'autres guides, notamment
`crm-sur-mesure-ou-hubspot` et `seo-local-pme`.

La route `react-native-ou-flutter` n'apparaît dans aucune erreur. La suite
globale n'est donc pas déclarée verte, et ses défauts préexistants ne sont pas
attribués à ce guide.

## 10. Porte de fermeture

| Porte | Verdict |
| --- | --- |
| build de production local | **GO** |
| responsive 320 à 1 600 px | **GO** |
| thèmes clair et sombre | **GO** |
| clavier et libellés | **GO** |
| deux options et preuves | **GO** |
| calculs et export | **GO** |
| copie et repli | **GO** |
| remise à zéro | **GO** |
| PDF physique | **GO** |
| image sociale | **GO** |
| métadonnées locales | **GO** |
| publication/indexation | **NON AUTORISÉES** |

**Verdict P4 : GO pour contre-signature finale et fermeture locale, avec
0 P0, 0 P1 et 0 P2 ouverts.**
