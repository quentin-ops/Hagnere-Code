# Dette technique — contenu dupliqué dans le DOM des guides

> Constat de l'audit du 7 août 2026. Ce document décrit un défaut identifié,
> mesuré, mais **volontairement non corrigé dans la PR qui l'a découvert** :
> le correctif touche le rendu visuel et demande une recette visuelle que la
> batterie de tests actuelle ne couvre pas.

## Constat

Chaque tableau et chaque appel à l'action de guide est présent **deux fois**
dans le HTML servi.

Mesure sur `signes-besoin-logiciel-metier` :

```
2x  "Faire examiner trois situations réelles"        (CTA hero)
2x  "Compte partagé ou droits trop larges"           (tableau)
2x  "Qui a réellement besoin de lire, modifier…"     (tableau)
```

## Origine

Motif « rendre deux fois, masquer l'une en CSS », à deux endroits :

| Fichier | Lignes | Motif |
|---|---|---|
| `src/components/guides/guide-content-blocks.tsx` | ~121 et ~169 | cartes `md:hidden` + tableau `hidden md:block` |
| `src/components/guides/guide-premium-layout.tsx` | ~575 et ~589 | CTA `lg:hidden` + CTA `hidden lg:block` |

## Ce qui n'est **pas** un problème

- **L'accessibilité est correcte.** `display: none` retire l'élément de
  l'arbre d'accessibilité : un lecteur d'écran ne voit qu'une seule version à
  la fois, celle qui correspond à la largeur d'écran.
- **Le temps de lecture est juste.** La version mobile porte
  `data-read-time-exclude="true"` et sort du comptage.
- **Le référencement n'est pas pénalisé.** Une répétition interne à une page
  n'est pas du contenu dupliqué au sens de Google.

## Ce qui est un vrai coût

1. **Extraction par les assistants génératifs.** Un extracteur de texte
   n'applique pas les feuilles de style : il lit les deux versions. Le contenu
   arrive donc en double dans le contexte du modèle, ce qui consomme du budget
   pour rien et peut dégrader la qualité d'une citation. C'est directement
   contraire à l'objectif d'être cité par les IA.
2. **Poids de page.** Mesure sur `cahier-des-charges-saas` : 688 Ko de HTML,
   dont 351 Ko visibles et 268 Ko de charge RSC qui re-sérialise le même
   contenu pour l'hydratation. Les guides pèsent entre 447 et 695 Ko.

## Correctif recommandé

Une seule source de vérité rendue, adaptée par CSS :

- pour `GuideTable`, conserver un unique `<table>` sémantique et obtenir la
  présentation en cartes sur mobile par CSS (`display: block` sur les lignes,
  libellés d'en-tête injectés en `::before` depuis un attribut `data-label`) ;
- pour le CTA du layout, rendre le composant une seule fois et le repositionner
  par `order` ou par placement de grille selon la largeur.

**Cette modification demande une recette visuelle** sur mobile, tablette et
bureau, en thème clair et sombre, sur au moins trois guides aux tableaux de
formes différentes (3, 4 et 5 colonnes). Elle ne doit pas être menée en même
temps qu'une rédaction : le diff deviendrait illisible.

## Chantier voisin, à traiter séparément

Réduire la charge RSC en gardant la prose non interactive en Server Component
et en chargeant les outils avec `dynamic(() => import(...), { ssr: false })`.
Cible raisonnable : **moins de 250 Ko de HTML par guide**, avec mesure avant et
après sur les mêmes URL.
