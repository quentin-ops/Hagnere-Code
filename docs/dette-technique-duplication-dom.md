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
interactive en Server Component et charger les outils avec
`dynamic(() => import(...), { ssr: false })`. Cible raisonnable : **moins de
250 Ko de HTML par guide**, avec mesure avant et après sur les mêmes URL.
