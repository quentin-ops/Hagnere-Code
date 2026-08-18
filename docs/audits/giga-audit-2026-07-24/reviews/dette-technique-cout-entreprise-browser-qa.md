# BAT navigateur — `dette-technique-cout-entreprise`

Date : 24 juillet 2026  
Route contrôlée : `http://localhost:3010/guides/dette-technique-cout-entreprise`  
Navigateur : navigateur intégré réel, page locale rendue par Next.js

## Résultat

**GO local.** Un défaut visuel a été trouvé puis corrigé : à 1440 px, les cinq
résultats du test rapide étaient forcés dans cinq colonnes trop étroites. Les
montants pouvaient être rognés à l’intérieur de la carte. La grille utilise
désormais deux colonnes au maximum et le nouveau scan interne ne détecte plus
de débordement.

## Largeurs et thèmes

| Largeur CSS mesurée | Contrôle | Résultat |
| ---: | --- | --- |
| 320 px | hero, CTA, titre, texte, largeur du document | aucun débordement |
| 390 px | calculateur, saisie, cartes de résultats | aucun débordement |
| 768 px | article et calculateur tablette | aucun débordement |
| 1440 px | calculateur, grille interne et résultats | défaut corrigé puis zéro débordement |

Le thème sombre a été activé à 390 px et inspecté visuellement. Le thème clair
a ensuite été restauré après un rechargement propre.

## Parcours interactifs

- test rapide à 12 000 €/an : « Attendre sous surveillance » devient le
  minimum et les cinq totaux sont mis à jour ;
- valeur `12abc` : `aria-invalid="true"`, `aria-errormessage` relié et message
  visible « Saisissez un nombre positif ou nul » ;
- ouverture du détail : 37 champs numériques réellement présents ;
- lecture « Trésorerie seule » : le statut bascule vers l’attente ;
- téléchargement dynamique : message visible « Le fichier CSV a été préparé
  sur votre appareil » ;
- restauration : retour à 34 048 €, lecture avec risque et détail refermé.

Le rendu expose un H1 unique, dix H2 dans l’article, des tableaux avec
en-têtes/captions, un calculateur nommé, des labels de champs et des statuts
annonçables. Les seuils sont rendus sous la forme `19 111,11 € / an`, sans
double unité.

## Console

Aucune erreur d’exécution n’a été observée. La console contenait seulement les
messages de développement et avertissements de rechargement à chaud provoqués
par les modifications locales.

