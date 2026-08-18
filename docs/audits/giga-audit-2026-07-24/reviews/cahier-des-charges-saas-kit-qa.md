# Contre-audit indépendant — kit du guide `cahier-des-charges-saas`

Date : 24 juillet 2026  
Périmètre : outil `SaasSpecificationKit`, moteur de calcul, fichiers Markdown générés et intégration dans le guide  
Nature du contrôle : lecture seule du code de production ; seul le présent rapport a été créé

## Verdict initial

Le premier snapshot contrôlé dans ce rapport avait été déclaré **NO-GO — 84/100**, avec deux P1 (précision cachée et égalité annoncée de façon incomplète) et trois P2.

## Revalidation finale du snapshot corrigé

Date : 24 juillet 2026  
Snapshot corrigé demandé par le responsable du dépôt.

**GO technique ciblé pour le code et les tests ; aucune seconde note
éditoriale n'est attribuée.**

- P0 : **0**
- P1 ouverts : **0**
- P2 de code ouverts après correction : **0**
- preuve de publication manquante : **BAT responsive, clavier et
  téléchargements dans un navigateur réel**

Les deux P1 historiques sont fermés :

- l’exemple affiche et calcule maintenant : 583,33 € × 24 = 13 999,92 € ;
- le statut UI annonce toutes les offres ex æquo.

La saisie utilisateur utilise désormais un parseur décimal strict. Elle accepte
une virgule française ou un point avec deux décimales au plus et refuse les
signes, séparateurs mixtes, exposants, chaînes partielles et montants négatifs.
Les valeurs programmatiques restent arrondies au centime par le moteur. Chaque
erreur de formulaire est visible et reliée à son champ avec
`aria-errormessage`.

Les trois P2 fonctionnels du premier audit sont fermés dans ce snapshot : la confidentialité est formulée sans promesse absolue, le texte Markdown est neutralisé et le lien Blob est ajouté au document puis révoqué après un délai. La preuve navigateur multi-moteurs et les essais visuels à plusieurs largeurs restent à exécuter dès qu’un navigateur de contrôle est disponible ; cette réserve concerne la preuve de publication, pas un défaut identifié dans le code.

La formule générale, les totaux de l’exemple corrigé, le refus des valeurs négatives ou vides, la justification des zéros et le verrou contre un classement avec coûts inconnus sont solides. L’outil est déjà nettement plus utile qu’un simple formulaire de contact : il fournit une trame de 16 chapitres, un exemple entièrement rempli et un comparatif exportable.

Les paragraphes P1.1 et P1.2 plus bas documentent les défauts du snapshot initial et leur correction. Aucun P0 ni P1 ne reste ouvert.

## Snapshot code revalidé localement

| Fichier                                                      | SHA-256                                                            |
| ------------------------------------------------------------ | ------------------------------------------------------------------ |
| `src/app/guides/cahier-des-charges-saas/page.tsx`            | `f405559b92b9e24f648fa4d4a60c3114969ca0218526313b13bd836dcd11c902` |
| `src/app/guides/cahier-des-charges-saas/opengraph-image.tsx` | `2685d5601220734d3b379a7725e965311d477b703de5e9106397f9363734aad4` |
| `src/components/guides/SaasSpecificationKit.tsx`             | `733476828f7ee7437a8a2a3749aaa325082920f975fa206cb91217113c3a8bd1` |
| `src/lib/saas-specification-kit.ts`                          | `131210621f42a1560d1fb0c1735e2d42e2d3c83209bceddbe18e5048b5d1b17c` |
| `src/components/guides/SaasSpecificationKit.test.tsx`        | `9e9fa3cdb335d01fa4ed87bfc22a27ef4fb4cdbaf0f4dc5a8d51d070a067b903` |
| `src/lib/saas-specification-kit.test.ts`                     | `0f6656a223ebe380e66771d6ab78c1fe78c07c71e8051ec2c05b61ebb475f4cd` |
| `src/lib/guides.ts`                                          | `6c3f11fa699c961e337bf25de89fdc8ff0242af3e8a90710a80e339729db4282` |

## Portes exécutées

| Contrôle                                           | Résultat                                                                                        |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Vitest ciblé : moteur, composant et langage humain | **61/61 tests réussis**                                                                         |
| TypeScript `--noEmit`                              | **Réussi**                                                                                      |
| ESLint sur les six fichiers du périmètre           | **Réussi**                                                                                      |
| Prettier `--check`                                 | **Réussi**                                                                                      |
| Test indépendant de la formule                     | **1 000 jeux aléatoires réussis** sur 12, 24 et 36 mois                                         |
| Page locale                                        | **HTTP 200**, HTML de 363 501 octets sur le snapshot corrigé                                    |
| HTML initial                                       | titre, outil, message d’inconnus, canonical, Article et BreadcrumbList présents                 |
| Structure DOM initiale du kit                      | 42 contrôles, aucun contrôle sans nom accessible, aucune référence `aria-describedby` orpheline |
| Identifiants dans la page                          | 72 identifiants, aucun doublon                                                                  |
| Appel réseau depuis le kit                         | aucun `fetch`, XHR, WebSocket, beacon ou stockage navigateur dans le composant ou le moteur     |

Le HTML local porte `noindex, nofollow`, ce qui est cohérent avec l’environnement local et ne permet pas de conclure sur la directive de production.

### Limite de preuve navigateur

Le navigateur intégré n’était pas disponible dans cette session : la découverte a retourné zéro moteur. Conformément au protocole, il n’a pas été remplacé par un autre moteur d’automatisation. Le responsive réel, le parcours clavier complet et les téléchargements Chrome/Safari/Firefox restent donc à rejouer avant publication. Les classes observées (`min-w-0`, grilles progressives, boutons en `flex-wrap`, cartes empilées avant les grands écrans) ne révèlent pas de débordement probable, mais cette lecture statique ne remplace pas une preuve visuelle à 320, 390, 768 et 1 440 px.

## P1 historiques — tous fermés

### P1.1 — Fermé : le total n’était pas reproductible à partir du montant affiché

**Fichiers concernés**

- `src/lib/saas-specification-kit.ts:80-110`
- `src/components/guides/SaasSpecificationKit.tsx:57-59`
- `src/components/guides/SaasSpecificationKit.tsx:395-400`
- `src/lib/saas-specification-kit.ts:755-760`

L’infrastructure mensuelle de l’offre C est conservée en mémoire sous la forme :

```text
14 000 / 24 = 583,3333333333334 €
```

Le champ montre pourtant `583,33 €`. Le calcul interne produit donc `14 000,00 €` sur 24 mois, alors que le lecteur qui reprend la valeur visible obtient :

```text
583,33 × 24 = 13 999,92 €
```

Écart : **0,08 €**.

L’écart est faible dans l’exemple, mais le principe est bloquant : le fichier exporté affiche lui aussi `583,33 €` par mois et `14 000,00 €` sur l’horizon. Le lecteur ne peut pas reconstruire le résultat avec les hypothèses écrites. La phrase « les divisions par 24 restent exactes dans le calcul » explique la différence, mais ne rend pas le comparatif auditable.

**Correction exacte recommandée**

1. choisir une seule précision de référence pour les entrées financières ;
2. stocker exactement la valeur affichée, idéalement en centimes entiers ;
3. calculer et exporter tous les résultats depuis ces centimes ;
4. remplacer l’exemple fictif `14 000 € sur 24 mois` par le total réellement obtenu à partir du montant mensuel visible, ou choisir un montant mensuel à deux décimales dont le total est accepté tel quel ;
5. supprimer la phrase qui justifie une précision cachée.

Solution minimale :

```text
monthlyInfrastructure: 583.33
infrastructure sur 24 mois: 13 999,92 €
coût renseigné de l’offre C: 120 899,92 €
```

Une autre solution est d’afficher toute la précision utilisée, mais six décimales dans un devis sont moins pédagogiques qu’un calcul en centimes.

**Tests à ajouter**

- la valeur numérique affichée multipliée par l’horizon reproduit exactement le récurrent exporté ;
- le total de chaque offre se reconstruit à partir des sept valeurs visibles ;
- aucune valeur interne n’a davantage de décimales que le champ ne peut en montrer ;
- contrôle explicite sur les trois horizons.

### P1.2 — Fermé : une égalité était annoncée comme un gagnant unique dans le statut

**Fichiers concernés**

- `src/components/guides/SaasSpecificationKit.tsx:209-211`
- `src/components/guides/SaasSpecificationKit.tsx:554-563`

La bibliothèque gère correctement les égalités : plusieurs résultats peuvent avoir `differenceFromLowest === 0`. Le fichier Markdown exporté écrit bien, par exemple :

```text
Coût renseigné le plus faible : offre A et offre B
```

L’interface utilise toutefois `find()` et ne conserve que le premier résultat. Avec A et B à `111 700 €`, le statut accessible annonce uniquement :

```text
Offre A : coût renseigné le plus faible
```

Les deux cartes visuelles portent bien l’étiquette de coût renseigné le plus faible, mais le résumé placé dans `role="status"` est incomplet. Le défaut touche en priorité les lecteurs d’écran et tout lecteur qui se fie au verdict synthétique.

**Correction exacte recommandée**

1. remplacer `lowestResult` par `lowestResults = calculation.results.filter(...)` ;
2. construire un libellé qui joint toutes les offres à égalité ;
3. utiliser le pluriel lorsque nécessaire ;
4. conserver la phrase précisant que ce résultat ne désigne pas la meilleure solution.

Exemple attendu :

```text
Offres A et B : coûts renseignés les plus faibles, à 111 700 €. Ce constat ne désigne pas les meilleures solutions.
```

**Tests à ajouter**

- égalité A/B annoncée dans le statut ;
- égalité A/B/C ;
- une seule offre la plus faible ;
- égalité non annoncée tant qu’un seul inconnu subsiste ;
- export et interface produisent la même liste d’offres.

## P2 — améliorations importantes

### P2.1 — Fermé : la promesse de confidentialité était trop absolue

**Fichiers concernés**

- `src/components/guides/SaasSpecificationKit.tsx:218-230`
- `src/app/guides/cahier-des-charges-saas/page.tsx:1200-1212`

Le code confirme un traitement local : aucune requête réseau ni persistance applicative n’a été trouvée. En revanche, « aucune donnée envoyée ou enregistrée » et « tout reste dans votre navigateur » vont trop loin :

- une copie place le contenu dans le presse-papiers du système, potentiellement synchronisé selon la configuration ;
- un téléchargement écrit un fichier sur l’appareil ou dans un dossier synchronisé ;
- le navigateur ou le système peut conserver l’historique des téléchargements ;
- les données restent en mémoire dans l’onglet jusqu’à sa fermeture.

**Texte recommandé**

> Vos saisies ne sont ni transmises à Hagnéré Code ni enregistrées par cet outil. Elles restent en mémoire dans cet onglet. Si vous copiez ou téléchargez un fichier, votre navigateur, votre appareil ou un service de synchronisation peut le conserver. Évitez les données confidentielles sur un appareil partagé.

Le message de la page publique « il n’envoie pas les informations saisies à Hagnéré Code » est déjà plus précis et doit servir de référence.

### P2.2 — Fermé : le Markdown personnalisé acceptait du balisage actif ou trompeur

**Fichier concerné**

- `src/lib/saas-specification-kit.ts:247-295`

`inlineValue()` retire les retours à la ligne et échappe les barres verticales, mais laisse intacts le HTML et les autres marqueurs Markdown. Un nom de projet comme :

```text
<img src=x onerror=alert(1)> **URGENT** [lien](https://example.test)
```

est recopié tel quel dans le titre et le corps du fichier. Cela n’exécute rien sur le site Hagnéré Code, mais le document téléchargé peut devenir actif ou trompeur s’il est ensuite rendu par un moteur Markdown permissif.

**Correction recommandée**

- ajouter un échappement de texte Markdown en ligne qui traite au minimum `\`, `` ` ``, `*`, `_`, `{}`, `[]`, `<>`, `#`, `+`, `-`, `!` et `|` ;
- neutraliser explicitement `<` et `>` plutôt que de faire confiance au futur moteur de rendu ;
- ajouter des tests avec HTML, lien, emphase, barre oblique inverse et texte très long ;
- conserver la normalisation du nom de fichier, qui est déjà correcte et limitée à 60 caractères utiles.

### P2.3 — Partiellement fermé : le cycle de vie du `Blob` reste à prouver sur plusieurs navigateurs

**Fichier concerné**

- `src/components/guides/SaasSpecificationKit.tsx:61-70`

L’URL du `Blob` est révoquée immédiatement après `link.click()`. Les tests vérifient que la révocation a lieu, mais pas qu’un navigateur réel a terminé la prise en charge du téléchargement. Le lien n’est pas non plus ajouté puis retiré du document. Cette implémentation fonctionne dans de nombreux navigateurs modernes, mais le contre-audit ne peut pas la certifier sans essai réel.

**Durcissement recommandé**

1. ajouter temporairement le lien au document ;
2. déclencher le clic ;
3. retirer le lien ;
4. révoquer l’URL dans une tâche ultérieure courte ;
5. vérifier les trois téléchargements sur Chrome, Safari et Firefox.

Ce point devient une anomalie avérée seulement si un téléchargement réel échoue ; en l’état, c’est une dette de portabilité et de preuve.

## Ce qui est validé

### Calcul et inconnus

- La formule est bien : coûts ponctuels + horizon × coûts mensuels.
- Les horizons sont fermés à 12, 24 et 36 mois.
- Les valeurs vides, négatives, non finies et les horizons hors liste sont refusés.
- Les exports sont désactivés lorsque le calcul est invalide.
- Les trois cases « coûts importants inconnus » sont cochées par défaut.
- Un seul inconnu, quelle que soit l’offre, supprime tout classement.
- Un zéro n’est pas décrit comme un inconnu et les limites demandent de le documenter.
- Le texte emploie « coût renseigné le plus faible », jamais « meilleure offre ».
- Les inclusions, exclusions et inconnus sont écrits dans l’export.
- Le test indépendant de 1 000 cas confirme la formule arithmétique.

### Utilité de la ressource

La trame vide contient :

- **12 398 caractères**, environ **2 031 mots** ;
- **16 chapitres** ;
- **10 tableaux** ;
- décision go/report/stop, périmètre, rôles, échecs, données, intégrations, exploitation, facturation, migration, recette, coûts, hypothèses, changements, double sortie, mesures et sources.

L’exemple DossierClair contient :

- **12 873 caractères**, environ **2 125 mots** ;
- les mêmes **16 chapitres** ;
- **6 tableaux** ;
- aucun champ `[à compléter]` ;
- des volumes, mesures de départ, cibles, tests, inconnus, coûts et conditions d’arrêt ;
- une qualification explicite de cas entièrement fictif.

Le comparatif exporté contient environ **605 mots**, une table de résultats, les hypothèses par offre, les inclusions, les exclusions, les inconnus et les limites. Il constitue donc un véritable livrable réutilisable, pas un faux téléchargement d’acquisition.

### Accessibilité et ergonomie observables sans navigateur réel

- tous les champs numériques ont un identifiant et un libellé ;
- toutes les références `aria-describedby` pointent vers un élément existant ;
- les radios et cases à cocher sont rattachées à un libellé implicite ;
- les boutons sont natifs, typés `button` et ont une hauteur minimale de 44 px ;
- les erreurs utilisent `role="alert"` ;
- le verdict utilise `role="status"`, `aria-live="polite"` et `aria-atomic="true"` ;
- les actions invalides sont désactivées ;
- le focus visible est prévu par les classes ;
- les blocs sont conçus pour s’empiler et les boutons peuvent revenir à la ligne.

L’égalité est correctement résumée pour tous les ex æquo. La précision cachée
possible n'existe plus : une saisie utilisateur à plus de deux décimales est
refusée, conservée à l'écran et accompagnée d'un message de correction.

### Intégration dans le guide

- l’outil est placé après une explication claire de son usage et de ses limites ;
- il est suivi d’un avertissement juridique, fiscal et technique ;
- le CTA propose une relecture de dossier ou d’offres, sans promettre de résultat ;
- le titre de page, la canonical, le fil d’Ariane et les données Article sont présents dans le HTML local ;
- le guide annonce bien un modèle, un exemple et un comparatif sans exiger d’adresse e-mail.

## Verdict par axe

| Axe                                                  | Verdict    | Commentaire                                                           |
| ---------------------------------------------------- | ---------- | --------------------------------------------------------------------- |
| Formules et intégrité de décision                    | GO local   | entrées, affichage, calcul et export alignés au centime               |
| Validation, inconnus et absence de faux classement   | GO local   | zéros justifiés, inconnus bloquants, égalités exportées et annoncées  |
| Accessibilité du code                                | GO local   | erreurs visibles et reliées à leur champ ; structure DOM testée       |
| Responsive, clavier et téléchargements réels         | NON PROUVÉ | navigateur réel indisponible sur le snapshot exact                    |
| Confidentialité, sécurité des sorties et portabilité | GO local   | aucun envoi détecté, confidentialité et Markdown durcis, Blob différé |
| Profondeur, pédagogie et valeur du kit               | GO local   | trame et exemple complets, format `.md` expliqué et limites honnêtes  |

La note éditoriale unique du cycle reste **90/100 avant corrections P2** dans
la P4 humaine. Le présent audit technique ne crée pas de score concurrent.

## Porte de revalidation

Le kit reçoit un **GO local pour le code, le contenu et les tests**, mais la
publication reste **NO-GO** :

1. les entrées du formulaire sont analysées strictement et les valeurs
   programmatiques sont normalisées au centime dans le moteur ;
2. les totaux visibles et exportés se reconstruisent exactement ;
3. les égalités, inconnus et zéros justifiés sont couverts ;
4. Vitest (61/61), TypeScript, ESLint ciblé et Prettier sont verts ;
5. confidentialité, neutralisation Markdown et révocation différée des Blob sont durcies.

Avant de déclarer la publication visuelle entièrement vérifiée, il reste à exécuter dans un navigateur réel les essais à 320, 390, 768 et 1 440 px, le parcours clavier et les trois téléchargements sur au moins Chrome et Safari. Le navigateur de contrôle était indisponible dans cette session ; cette limite est documentée et ne constitue pas un P0/P1.
