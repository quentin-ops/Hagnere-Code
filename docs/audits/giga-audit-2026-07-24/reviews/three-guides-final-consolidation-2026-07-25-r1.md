# Consolidation finale du lot successif de trois guides — R1

Date : **25 juillet 2026**  
Méthode : audit, recherche internationale, enrichissement, contre-audit froid
et validation navigateur, **guide après guide**.  
Périmètre :

1. `transformer-excel-en-application` ;
2. `react-native-ou-flutter` ;
3. `cout-maintenance-site-internet`.

Hors périmètre : commit, push, déploiement, publication, indexation et promesse
de classement.

## 1. Verdict

**Les trois guides franchissent leur porte locale premium et peuvent passer en
revue humaine.**

| Guide | Score final | P0 | P1 | P2 | Volume mesuré | Statut |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| Transformer Excel en application | **98/100** | 0 | 0 | 0 | 8 426 mots / 42 min | Revue humaine |
| React Native ou Flutter | **98/100** | 0 | 0 | 0 | 4 184 mots / 21 min | Revue humaine |
| Coût de maintenance d’un site | **97/100** | 0 | 0 | 0 | 3 711 mots / 19 min | Revue humaine |

Ces notes évaluent la qualité éditoriale, pédagogique, décisionnelle et
technique du snapshot local. Elles ne garantissent pas une première position
sur Google.

## 2. Valeur ajoutée obtenue

### Transformer Excel en application

Le guide ne se contente plus d’opposer Excel et le sur-mesure. Il fait
comparer cinq voies distinctes, garde les inconnues visibles, exige des preuves
datées, chiffre quinze postes sur 48 mois et produit cinq dossiers indépendants.
La remise à zéro, le changement de scénario et l’impression isolée ont été
testés contre la perte silencieuse de données.

### React Native ou Flutter

Le guide ne désigne pas un gagnant abstrait. Il part des fonctions critiques,
garde six issues ouvertes — React Native, Flutter, natif, Kotlin Multiplatform,
PWA ou aucune application — puis impose des essais reproductibles, une
comparaison des compétences, des appareils, de la reprise et du TCO à
12/36/60 mois. Deux options restent indépendantes dans le dossier local.

Après la P4, une dernière garde de langage humain a détecté l’expression
« tranche verticale du risque ». Elle a été remplacée par une consigne
directe : construire de bout en bout le parcours le plus risqué. Le test du
guide est redevenu vert et le présent gel consolide cette version finale.

### Coût de maintenance d’un site

Le guide ne présente plus un tarif mensuel hors contexte. Il relie criticité,
périmètre, exploitation, sécurité, SLA, restauration, coût d’incident, fin de
support et sortie du prestataire. Son comparateur n’autorise une comparaison
qu’après qualification complète des deux offres ; une inconnue reste une
inconnue et un sous-total incomplet n’est jamais présenté comme une offre moins
chère.

## 3. Recherche mondiale

Chaque guide dispose d’un dossier de recherche et, lorsque le sujet le
justifie, d’un contrepoint international dédié. Les textes publics retiennent
les éléments utiles à la décision et renvoient les affirmations techniques ou
volatiles vers des sources primaires datées. Les benchmarks ont servi à trouver
des angles, des objections, des protocoles de preuve et des limites ; ils
n’ont pas été copiés ni transformés en arguments d’autorité.

## 4. Preuves communes finales

### Contrôles automatisés ciblés

```text
Fichiers de tests ciblés : 16/16
Tests ciblés : 237/237
TypeScript : OK
ESLint ciblé : OK
Diff-check : OK
```

Le lot ciblé couvre les trois contrats éditoriaux, les trois moteurs de
décision, les trois composants interactifs, les calculs et dates Excel, le
registre, les données structurées, le sitemap, les robots et la gouvernance
d’indexation.

### Build local de production

```text
Commande directe : NEXT_PUBLIC_ENV=production npx next build
Compilation : réussie
Pages générées : 159/159
```

La commande directe est mentionnée volontairement : le script global de
prépublication du dépôt conserve des défauts extérieurs au présent lot.

### Rendu réel

Les trois routes ont été contrôlées après stabilisation dans Chrome aux dix
largeurs suivantes :

```text
320, 360, 390, 430, 640, 768, 1024, 1280, 1440 et 1600 px
```

Résultat consolidé :

```text
Routes × largeurs : 30/30
Débordements horizontaux : 0
Erreurs console : 0
H1 : 1 par route
Identifiants dupliqués : 0
```

Les thèmes clair et sombre, les interactions critiques, le clavier, la copie,
la remise à zéro, les scénarios adversariaux, les images sociales et les PDF
Chrome ont été contrôlés dans les reçus individuels.

### Métadonnées et gouvernance

| Contrôle | Excel | RN / Flutter | Maintenance |
| --- | --- | --- | --- |
| Route locale | 200 | 200 | 200 |
| Canonical exact | Oui | Oui | Oui |
| Robots | `noindex, nofollow` | `noindex, nofollow` | `noindex, nofollow` |
| Sitemap | Absent | Absent | Absent |
| H1 | 1 | 1 | 1 |
| JSON-LD | Article + fil d’Ariane | Article + fil d’Ariane | Article + fil d’Ariane |
| Statut registre | Revue humaine | Revue humaine | Revue humaine |

## 5. Défauts globaux explicitement exclus

Le test transversal de langage humain passe désormais pour les trois guides du
lot. Il conserve **3 échecs**, tous rattachés au guide externe
`securite-saas-b2b` : jargon dans le lead, jargon dans un titre et tableau à
quatre colonnes.

Le test global de gouvernance éditoriale conserve **2 échecs** extérieurs au
lot :

- une empreinte historique du registre partagé dans le dossier
  `prioriser-fonctionnalites-mvp-saas` ;
- la passe P1 encore ouverte de `securite-saas-b2b`.

Le contrôle global des artefacts d’indexation conserve **142 erreurs**
extérieures au guide de maintenance et au présent lot. Par conséquent :

- les trois guides sont verts dans leur périmètre ;
- le site global **n’est pas** déclaré vert ;
- aucun échec externe n’a été corrigé silencieusement dans cette boucle.

Le contre-audit indépendant a également vérifié les gels historiques :

- le manifeste Excel R6 ne correspond plus qu’à l’empreinte de
  `src/lib/guides.ts`, modifiée depuis par les autres guides ;
- le manifeste React Native / Flutter R3 ne correspond plus aux empreintes du
  registre partagé et de sa page, celle-ci ayant reçu la correction de langage
  postérieure à la P4 ;
- le manifeste final maintenance reste conforme à **26/26**.

Les anciens manifestes restent des témoins datés et ne sont pas réécrits. Le
nouveau manifeste commun gèle explicitement les fichiers courants.

## 6. État de livraison

```text
Guides premium locaux : 3/3
Revue humaine : requise
Indexation : interdite
Commit : non effectué
Push : non effectué
Déploiement : non effectué
Publication : non effectuée
```

Le manifeste `three-guides-final-2026-07-25-r1.sha256` est l’autorité
d’intégrité du snapshot consolidé. Il remplace, pour le gel du lot, les
empreintes historiques devenues mécaniquement anciennes après les dernières
corrections du registre partagé et du texte React Native / Flutter.
