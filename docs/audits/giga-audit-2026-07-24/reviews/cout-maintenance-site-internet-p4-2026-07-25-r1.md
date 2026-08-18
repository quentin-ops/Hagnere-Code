# Contre-audit P4 final — `cout-maintenance-site-internet`

Date : **25 juillet 2026**  
Révision : **R1**  
Périmètre : guide, outil local, image sociale et artefact local de production  
Snapshot final : correction du temps de lecture à **3 711 mots / 19 min**

## 1. Verdict exécutif

**Verdict P4 : GO pour revue humaine.**

```text
Score strict : 97/100
P0 ouverts : 0
P1 ouverts : 0
P2 ouverts : 0
Décision : prêt pour revue humaine, maintenu hors index
```

Ce verdict ne signifie ni publication, ni commit, ni push, ni déploiement, ni
indexation. Il ne promet aucun classement Google.

## 2. Contrat éditorial et SEO vérifié

| Contrôle | Résultat |
| --- | --- |
| Route locale de production | `200 OK` |
| Canonical | `https://hagnere-code.ai/guides/cout-maintenance-site-internet` |
| Robots | `noindex, nofollow` |
| Registre | `editorialStatus: "ready-for-human-review"` |
| Sitemap | slug absent |
| H1 | 1, unique |
| Données structurées | 1 `Article` + 1 `BreadcrumbList` |
| FAQ structurée | aucune `FAQPage` artificielle |
| Image sociale déclarée | PNG, 1 200 × 630 |
| Temps de lecture | 3 711 mots visibles, 19 min |

Le titre, la description, le H1, la date de modification, l’auteur, le
canonical, le statut éditorial et le temps de lecture racontent le même
document.

## 3. Build et contrôles automatisés

```text
Tests moteur de décision                     25/25
Tests du composant                           16/16
Tests du contrat qualité                     12/12
Guides et données structurées                14/14
Total ciblé                                  67/67
TypeScript                                      OK
ESLint ciblé                                    OK
```

Le manifeste P2 R3 reste un témoin historique immuable. Après sa création,
deux empreintes ont changé de manière attendue : `src/lib/guides.ts` et le
test qualité du guide, uniquement pour aligner le temps affiché sur la mesure
finale de 3 711 mots / 19 min. Le manifeste final P4 gèle le snapshot courant.

Le contrôle global `verify-search-indexing-artifact.mjs` conserve
**142 erreurs bloquantes externes** au guide. Aucune ne vise
`/guides/cout-maintenance-site-internet`. Le site global n’est donc pas
déclaré vert.

## 4. Rendu réel aux dix largeurs

Largeurs contrôlées dans Chrome :

```text
320, 360, 390, 430, 640, 768, 1024, 1280, 1440 et 1600 px
```

À chaque largeur stabilisée :

- largeur du document égale à celle de la fenêtre ;
- aucun défilement horizontal global ;
- aucun lien, bouton, champ ou sélecteur rogné ;
- comparateur contenu dans la colonne ;
- un seul H1 ;
- aucun identifiant dupliqué.

Les états clair et sombre conservent un fond, un texte et des contrôles
lisibles. Le changement de thème fonctionne sans dérive de mise en page.

## 5. Clavier et FAQ

Les huit questions sont exposées sous forme de contrôles natifs `details`.
Une question fermée :

1. reçoit le focus clavier ;
2. s’ouvre avec `Entrée` ;
3. se referme avec `Espace`.

Le premier élément ouvert par défaut ne bloque pas les sept autres.

## 6. Scénarios adversariaux du comparateur

### Dossier incomplet

À l’ouverture, l’offre reste non qualifiée avec les quatre familles de
blocage visibles :

```text
6 champs communs
4 descriptifs d’offre
9 portes de preuve
10 postes TCO
```

Une somme calculable avant qualification est annoncée comme
**sous-total non comparable**, jamais comme offre moins chère.

### Incident de référence

Le scénario fictif a reproduit :

```text
6 h × 180 €/h
+ 900 € de reprise
+ 250 € de communication
+ 2 × 4 h × 35 €/h × 50 %
= 2 370 €
```

Une compensation de 3 000 € face à un coût brut de 2 370 € :

- rend le résultat `ND` ;
- applique `aria-invalid="true"` au champ ;
- relie le champ à un message visible par `aria-describedby` ;
- expose le message avec `role="alert"`.

Le retour à zéro supprime l’erreur et rétablit le calcul à 2 370 €.

### Preuves datées

Une preuve du 26 juillet face à une évaluation du 25 juillet :

- reste invalide ;
- affiche la borne maximale du 25 juillet ;
- bloque la porte ;
- déqualifie l’offre ;
- maintient son TCO comme sous-total non comparable.

Le retour au 25 juillet supprime l’erreur et rétablit la qualification. Le
scénario indépendant avec une date 2099 sur l’offre B bloque B seule ; l’offre
A conserve son état.

### Offre complète et indépendance A/B

L’offre A complète a franchi :

- les 6 champs communs ;
- les 4 descriptifs ;
- les 9 preuves structurées ;
- les 10 postes TCO.

Elle est devenue **qualifiée et comparable**, avec les totaux mécaniques
reproduits dans ce scénario de test :

```text
12 mois : 14 100 € HT
36 mois : 37 300 € HT
```

L’offre B restée incomplète demeure non qualifiée et bloque la comparaison
globale. Son état ne rétrograde pas A. Le dossier ne fabrique aucun gagnant.

## 7. Copie, remise à zéro et impression

- `Copier le dossier` affiche bien « Dossier copié ».
- Le texte copié contient la version, les dates, le besoin, les hypothèses de
  l’incident, son résultat, les preuves, les TCO et les verdicts des offres.
- `Réinitialiser`, puis `Annuler et conserver`, préserve les saisies.
- Une nouvelle demande suivie de `Effacer définitivement` vide le besoin,
  l’incident et les deux offres.

L’impression physique A4 produit **2 pages** :

- uniquement le dossier imprimable ;
- aucun en-tête du site, formulaire commercial ou contrôle interactif ;
- aucune page blanche ;
- aucun texte coupé ou contenu hors page.

## 8. Image sociale

L’image Open Graph rendue est un PNG de **1 200 × 630 px**. L’inspection
visuelle confirme :

- aucun texte rogné ;
- hiérarchie lisible ;
- promesse cohérente avec le guide ;
- absence de l’ancienne accroche trompeuse centrée sur `29–499 €`.

## 9. Score détaillé

| Axe | Note /10 | Motif |
| --- | ---: | --- |
| Intention de recherche | 10 | Réponse immédiate par criticité et périmètre comparable. |
| Aide à la décision | 10 | Chemin complet du besoin à la décision réversible. |
| Pédagogie dirigeant | 9 | Concepts traduits en conséquences ; quelques blocs restent denses. |
| Profondeur | 10 | Logiciel, exploitation, sécurité, coûts, SLA, incident et sortie reliés. |
| Preuve et exactitude | 10 | Sources datées, calculs reproductibles et inconnues préservées. |
| Comparaison à périmètre égal | 10 | Qualification réellement bloquante avant toute comparaison. |
| Originalité et valeur utile | 10 | Dossier local à deux offres, preuves, incident et TCO. |
| Style humain et anti-IA | 9 | Ton concret et limites honnêtes ; densité parfois exigeante. |
| Conversion et confiance | 9 | CTA mesuré, bon/mauvais fit et absence de promesse excessive. |
| SEO et produit éditorial | 10 | Métadonnées, rendu, image, robots et temps de lecture cohérents. |

Total : **97/100**.

## 10. Limites et état final

Le dossier est local et auto-déclaré. La date du navigateur n’est pas un
horodatage tiers, les preuves saisies ne sont pas authentifiées et le résultat
ne remplace ni audit technique, ni conseil juridique, ni devis contractuel.

```text
Guide : prêt pour revue humaine
Indexation : interdite
Commit : non effectué
Push : non effectué
Déploiement : non effectué
Publication : non effectuée
```
