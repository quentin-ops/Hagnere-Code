# Contenu dupliqué dans le DOM des guides — corrigé

> Défaut relevé par l'audit du 7 août 2026, **corrigé le 7 août 2026**.
> Ce document conserve le constat, la méthode et les mesures, parce que le
> motif fautif est facile à réintroduire sans s'en apercevoir.

## Le défaut

Chaque tableau et chaque bloc d'action de guide était présent **deux fois**
dans le HTML servi, selon le motif « rendre deux fois, masquer l'une en CSS » :

| Composant | Version téléphone | Version écran large |
|---|---|---|
| `GuideTable` | cartes `md:hidden` | tableau `hidden md:block` |
| `GuidePremiumLayout` | bloc d'action `lg:hidden` | bloc d'action `hidden lg:block` |

### Ce qui n'était pas en cause

- **L'accessibilité.** `display: none` retire l'élément de l'arbre
  d'accessibilité : un lecteur d'écran n'a jamais vu qu'une seule version.
- **Le temps de lecture.** La version téléphone portait
  `data-read-time-exclude="true"` et sortait du comptage.
- **Le référencement.** Une répétition interne à une page n'est pas du
  contenu dupliqué au sens de Google.

### Ce qui l'était

1. **L'extraction par les assistants génératifs.** Un extracteur de texte
   n'applique pas les feuilles de style : il lisait les deux versions. Le
   contenu arrivait en double dans le contexte du modèle — exactement à
   l'inverse de l'objectif d'être cité proprement.
2. **Le poids des pages.** Entre 480 et 697 Ko de HTML par guide.

## Le correctif

**Un seul rendu, deux mises en page obtenues par CSS.**

### `GuideTable`

Un unique `<table>` sémantique. La présentation en cartes sous 768 px vient de
la classe `guide-table` dans `globals.css` : les éléments passent en
`display: block`, l'en-tête est masqué, et le libellé de colonne est réinjecté
par `content: attr(data-label)`.

Le libellé vient donc d'un **attribut**, pas d'un nœud de texte : il n'apparaît
pas une seconde fois dans le document.

Changer le `display` d'éléments de tableau leur fait perdre leur rôle
implicite auprès des technologies d'assistance. Les rôles sont donc déclarés
explicitement : `role="table"`, `rowgroup`, `row`, `columnheader`,
`rowheader`, `cell`.

Deux détails qui comptent : la largeur minimale des tableaux larges est passée
en `md:min-w-[…]` — appliquée en cartes, elle provoquait un débordement
horizontal — et le `<caption>` est visible en une colonne puis replié en
`sr-only` à partir de `md`, ce qui conserve son exclusion du temps de lecture.

### `GuidePremiumLayout`

Le bloc d'action du hero est rendu une seule fois et placé par la grille :
sous l'accroche en une colonne, en colonne de droite sur `lg` via
`lg:col-start-2 lg:row-start-1 lg:row-span-2`. La colonne de gauche est
scindée en deux blocs (`row-start-1` pour l'en-tête, `row-start-2` pour les
repères chiffrés et la signature) afin que la grille puisse intercaler le bloc
d'action au bon endroit selon la largeur.

Les gouttières de grille ne s'activent qu'à partir de `lg` et uniquement à
l'horizontale : les espacements verticaux restent portés par les marges des
blocs, ce qui préserve exactement le rendu en une colonne.

## Mesures

**Texte dupliqué** — part des mots visibles apparaissant plus d'une fois :

| Guide | Avant | Après |
|---|---|---|
| `calculer-roi-application-metier` | 16 % | **4 %** |
| `signes-besoin-logiciel-metier` | 18 % | **9 %** |
| `cahier-des-charges-saas` | 14 % | **5 %** |

Le résidu correspond à des répétitions éditoriales légitimes — une même valeur
revenant dans plusieurs lignes d'un tableau, des liens de navigation — et non
à un doublon structurel.

**Poids du HTML**, build de production :

| Guide | Avant | Après | Gain |
|---|---|---|---|
| `calculer-roi-application-metier` | 627 Ko | 486 Ko | −22 % |
| `cahier-des-charges-saas` | 697 Ko | 532 Ko | −23 % |
| `power-apps-ou-application-sur-mesure` | 691 Ko | 582 Ko | −15 % |
| `signes-besoin-logiciel-metier` | 480 Ko | 410 Ko | −14 % |

## Recette visuelle

36 captures comparées, sur trois guides × trois largeurs (390, 768 et 1440 px)
× deux thèmes.

**30 captures sur 36 sont identiques au pixel près.** Les six écarts sont les
vues « tableau sur téléphone » : avant le correctif, la capture ne pouvait pas
cibler le tableau, celui-ci étant masqué sur cette largeur. Ces six vues ont
été relues visuellement, en clair et en sombre.

Aucun écart sur les vues bureau, tablette, ni sur les hero en une colonne.

## Non-régression vérifiée

L'ensemble des tests de contenu vérifie le nombre de mots visibles et le temps
de lecture déclaré de chaque guide. **Ils passent sans modification** : le
contenu compté est rigoureusement identique avant et après, ce qui confirme
que seule la duplication a disparu.

```
117 fichiers de test, 1153 tests — tous passent
lint, tsc, build : sans erreur
postbuild : 59 URL, 17 temps de lecture, 106 blocs JSON-LD contrôlés
```

## Garde-fou

`src/components/guides/guide-premium-layout-single-render.test.ts` relit la
source des deux composants et échoue si le motif réapparaît : plus d'un rendu
du bloc d'action, plus d'un `<table>`, retour d'une classe `md:hidden` ou
`hidden md:block`, ou disparition du mécanisme `data-label` et de ses styles,
thème sombre compris.

## Chantier voisin, toujours ouvert

Le poids restant tient surtout à la charge RSC, qui re-sérialise le contenu
des composants client pour l'hydratation. Piste : garder la prose non
interactive en Server Component et charger les outils à la demande plutôt
qu'au premier rendu.

### Pourquoi la cible en kilo-octets est abandonnée

Ce document visait auparavant « moins de 250 Ko de HTML par guide ». Cette
cible est retirée : elle n'est pas atteignable et elle ne mesure pas ce que
l'on cherche à corriger.

Une page App Router sert deux choses dans le même fichier : le HTML rendu, et
la charge RSC qui décrit à nouveau l'arbre pour l'hydratation. Cette seconde
partie suit le nombre et la taille des composants clients, pas ce que le
lecteur voit à l'écran. Le correctif ci-dessus le montre directement : la
duplication a été **entièrement** supprimée et le poids n'a baissé que de 14 à
23 %. Le reste est une constante du framework, pas de la dette de rendu.
Viser un nombre de kilo-octets revient donc à se fixer un objectif sur une
grandeur que le code de la page ne contrôle qu'à la marge.

### La cible est désormais un nombre d'éléments

**Protocole**, à appliquer à l'identique avant et après, sur les mêmes URL :

```bash
node -e 'const fs=require("fs");
const html=fs.readFileSync(process.argv[1],"utf8");
console.log((html.match(/<[a-zA-Z][a-zA-Z0-9-]*[\s>\/]/g)||[]).length);' \
  .next/server/app/guides/<slug>.html
```

Le comptage est identique que l'on neutralise ou non les blocs `<script>` et
`<style>` : la charge RSC est sérialisée en chaînes échappées et n'introduit
aucune balise. Équivalent côté navigateur, utile pour recouper une valeur :
`document.querySelectorAll("*").length`.

**Référence du 27 août 2026**, 18 guides publiés, artefact de build, protocole
ci-dessus :

| Repère | Valeur | Guide |
|---|---|---|
| Minimum | 1 482 éléments | `pourquoi-site-pas-visible-google` |
| Médiane | 1 820 éléments | — |
| Maximum | 2 697 éléments | `power-apps-ou-application-sur-mesure` |

**Cibles retenues :**

1. **Plafond de non-régression : 2 700 éléments par guide.** C'est le maximum
   déjà servi en production, arrondi. Un guide qui le dépasse a ajouté de la
   structure, pas du contenu : dire laquelle et pourquoi, ou la retirer.
2. **Seuil d'alerte : 2 500 éléments.** Au-dessus, relire la page à la
   recherche de composants empilés — cartes qui répètent un tableau, encadrés
   décoratifs, listes converties en grilles.
3. **Aucune cible de réduction n'est fixée sous le minimum observé.** Le
   corpus tient déjà entre 1 500 et 2 700 éléments ; se donner un chiffre plus
   bas serait un objectif choisi sans mesure, et c'est précisément l'erreur
   que la cible en kilo-octets avait commise.

La longueur du texte n'explique qu'une partie des écarts : sur ces 18 guides,
la corrélation entre le temps de lecture déclaré et le nombre d'éléments vaut
0,71 — deux guides annoncés à 23 minutes s'écartent tout de même de près de
500 éléments, et le guide le plus long du corpus n'est pas le plus lourd. Le
nombre d'éléments suit surtout les composants employés — tableaux, cartes,
outils interactifs — et c'est donc là qu'il se corrige.

Refaire cette mesure avant et après tout chantier touchant
`GuidePremiumLayout` ou un composant de contenu partagé, et consigner les deux
valeurs plutôt qu'un pourcentage seul.
