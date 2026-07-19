# QA — hub Ressources et page du kit cahier des charges

Date du contrôle : 19 juillet 2026
Périmètre : `/ressources`, `/ressources/kit-cahier-des-charges-site-internet`, navigation, téléchargements, SEO technique et responsive.

## Résultat

La page vitrine et le hub sont prêts à être publiés. Le contrôle local de production ne laisse aucun défaut bloquant connu sur le parcours testé.

Ce contrôle ne prouve ni le déploiement, ni l'indexation, ni un futur classement Google. Ces trois points doivent être vérifiés après mise en production.

## Parcours et navigation

- Le hub `/ressources` présente le kit, les guides, les livres blancs et le calculateur.
- Le menu principal contient une catégorie « Outils & ressources », un accès au hub et un accès direct au kit.
- Le pied de page contient un lien « Ressources gratuites ».
- Le hub Guides met le kit en avant dans ses ressources.
- Le guide méthodologique sur le cahier des charges renvoie vers la page du kit et ne propose plus de téléchargement binaire direct : l'intention informationnelle du guide reste distincte de l'intention de téléchargement.
- Sur mobile, le méga-menu est défilable, la catégorie active est annoncée avec `aria-pressed` et le lien du kit est amené dans la zone visible après sélection.
- Fermé, le méga-menu est masqué visuellement, porte `aria-hidden="true"` et devient non focalisable avec `inert`.

## Téléchargements

Les cinq URL publiques répondent en `200` avec leur type MIME et leur taille déclarée :

| Fichier | Type | Taille | Indexation |
| --- | --- | ---: | --- |
| Archive complète | `application/zip` | 351 578 octets | `X-Robots-Tag: noindex` |
| Modèle éditable | DOCX OOXML | 56 496 octets | `X-Robots-Tag: noindex` |
| Exemple rempli | `application/pdf` | 457 429 octets | `X-Robots-Tag: noindex` |
| Grille de recette | XLSX OOXML | 23 722 octets | `X-Robots-Tag: noindex` |
| Mode d'emploi | `application/pdf` | 116 029 octets | `X-Robots-Tag: noindex` |

Les cinq liens ont aussi déclenché un événement de téléchargement dans le navigateur sans quitter la page. Le `noindex` des fichiers concentre le signal SEO sur la page vitrine.

Le PDF du livre blanc de comparaison des devis reçoit la même directive afin de concentrer son signal sur `/livres-blancs/comparer-devis-site-internet`.

## SEO et données structurées

- Une URL canonique absolue est présente sur le hub et la page du kit.
- La page du kit possède un titre, une description, des métadonnées Open Graph et Twitter dédiées.
- L'image sociale est un PNG statique de 1 200 × 630 px, contrôlé visuellement et servi en `200 image/png` ; ce choix supprime la dépendance à une génération Edge au moment du partage.
- La page expose `WebPage`, un `CreativeWork`, quatre `DigitalDocument`, un `DownloadAction`, un fil d'Ariane et six questions FAQ.
- Le hub expose `CollectionPage` avec un `ItemList` de quatre ressources correspondant aux destinations visibles.
- La page contient un seul `h1`, aucun identifiant HTML dupliqué et sept images chargées sans ressource cassée.
- Le sitemap inclut le hub et la page canonique du kit, pas les cinq fichiers binaires.

En prévisualisation locale hors production, le `robots` global reste volontairement `noindex, nofollow`. La page n'ajoute pas de directive locale qui empêcherait l'indexation dans l'environnement de production.

## Responsive et accessibilité visible

Contrôle dans le navigateur réel aux largeurs cibles 320, 360, 390, 430, 640, 1 024, 1 280, 1 440 et 1 600 px : aucun débordement horizontal, aucun bouton de téléchargement hors écran et six contrôles de téléchargement présents.

Le palier 768 px a été encadré à 767 et 769 px, le facteur d'échelle du navigateur de contrôle ne permettant pas d'obtenir la valeur intermédiaire exacte. Les deux côtés du breakpoint passent sans débordement.

Les zones de téléchargement mesurent au moins 43,99 px à cause de l'arrondi sous-pixel du moteur, soit la cible CSS de 44 px. À 320 px, le bouton principal atteint environ 64 px de hauteur.

La console d'un onglet neuf ne contient aucune erreur applicative. Le seul message local est l'absence attendue du script Vercel Web Analytics, disponible uniquement après déploiement/configuration.

## Vérifications automatisées

- `eslint` ciblé : réussi.
- `tsc --noEmit` : réussi.
- Tests `resources`, `white-papers` et `sitemap` : 21 réussis sur 21, dont l'identité octet par octet des quatre membres du ZIP.
- `git diff --check` : réussi.
- Build propre `next build --webpack` : réussi, 81 pages générées ; le hub et la page du kit sont pré-rendus en statique.
- Grille XLSX : 13 scénarios de recalcul LibreOffice réussis, dont les cas vides et les sévérités non numériques.

## Limites restantes après publication

1. Vérifier les deux URL publiques sur le domaine de production et l'image de partage depuis un réseau externe.
2. Contrôler le sitemap effectivement servi, puis demander l'inspection des deux URL dans Search Console.
3. Observer les impressions, clics, téléchargements et demandes de projet ; une balise, un sitemap ou une demande d'indexation ne constituent pas une preuve de positionnement.
4. Les fichiers OOXML ont été contrôlés avec LibreOffice. Une différence mineure de rendu reste possible dans une version particulière de Microsoft Word ou Excel.
