# Contre-audit P3 R10 / moteur R11 — `aides-creation-site-internet`

Date : **26 juillet 2026**  
Statut : **dixième candidat éditorial, moteur R11, remis en double
contre-audit à froid**  
Publication, déploiement et indexation : **non autorisés**

## 1. Verdicts du candidat R10

Deux relecteurs indépendants ont vérifié le manifeste R10 au début et à la fin,
rejoué les défauts antérieurs et cherché de nouveaux contre-exemples :

```text
Audit factuel, juridique et financier : 76/100 — NO-GO P4
P0 : 0 ; P1 : 2 ; P2 : 1

Audit expérience, interface et accessibilité : 63/100 — NO-GO P4
P0 : 0 ; P1 : 6 ; P2 : 4

Manifeste R10 au début et à la fin : 43/43 conforme pour les deux relecteurs
SHA-256 du manifeste R10 :
6541da39a5319f789f22ec10f962100322862f25cb7ca3a26e1948577021e1be

Décision retenue : 63/100 — NO-GO
```

Après déduplication, l’union conservée dans le registre de recherche comprend
**6 P1 et 5 P2 distincts**. Le présent candidat R11 corrige ces onze défauts
sans s’attribuer de note ni de GO.

## 2. Fermeture des six P1 R10

| P1 R10                                                                                                                                    | Correction R11                                                                                                                                                                                                                                                                                                                                                                                      | Contre-preuve attendue                                                                                                                                                                                                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Le parseur acceptait des faux domaines et suffixes ELI, des références préfixées ou suffixées et plusieurs occurrences du même règlement. | Trois branches exclusives remplacent la recherche de sous-chaîne : une URL ELI HTTPS à hôte et chemin contrôlés, un CELEX seul et exact, ou une unique référence numérique isolée dans un libellé. Une URL usurpée, un port, une requête, un fragment, un suffixe inventé, une chaîne URL ambiguë, un doublon ou plusieurs références restent non résolus.                                          | Accepter les numéros isolés, CELEX exacts et URL ELI officielles prévues. Rejeter `prefix-2023/2831-suffix`, les doublons numéro/CELEX ou numéro/numéro, les faux domaines, `http`, ports, paramètres, fragments, suffixes `FAKE-SUFFIX`, URL-like sans schéma, références multiples et concaténations numériques.      |
| La normalisation pouvait à la fois laisser échapper des variantes visuellement proches et fusionner des périmètres réellement distincts.  | Le regroupement utilise uniquement une clé déclarée exacte, normalisée sans destruction par NFKC et espaces. Une seconde clé ne sert qu’à détecter la proximité ; elle ne somme jamais. Deux clés proches mais non identiques bloquent le précontrôle et demandent une correction explicite. Les séparateurs `/`, `\`, `&` et `+` restent distinctifs ; une clé sans lettre ni chiffre est refusée. | Deux clés exactes identiques se cumulent. `Groupe-A` / `Groupe A`, moins Unicode, point médian, invisibles, casse ou accent différents : ambiguïté bloquante et aucun total commun. `AB-CD` / `AB/CD` et `A-1` / `A/1` : groupes distincts sans fusion. `---`, `///` et invisibles seuls : aucune observation ni total. |
| Une aide notifiée avec octroi `non` ou `inconnu` conservait des sorties conditionnelles affirmatives.                                     | Pour un état notifié ou reçu, `octroi = non` est contradictoire et `inconnu` rend le dossier incomplet. Toute sortie conditionnelle ou réalisée exige `octroi = oui` et une date valide : valeur juridique, contribution approuvée, coût conditionnel, prépaiement, comparaison d’attente, paiement, couverture et coût réalisé. Les saisies brutes restent seulement déclaratives.                 | Rejouer les trois modes avec `non`, `inconnu`, date vide ou invalide : sorties `ND`, aucun verdict notifié utilisable ni coût affirmatif. Avec `oui`, date valide et chaîne complète : conserver les sorties résolues. Comparer moteur, cartes, région live et TXT.                                                     |
| Cinq preuves statiques partageaient le même nom accessible.                                                                               | Chaque verrou statique est un groupe nommé. Ses contrôles portent un nom accessible contextualisé, par exemple `Statut — <verrou>` et `Référence de preuve — <verrou>`.                                                                                                                                                                                                                             | Interroger l’ensemble des contrôles statiques, quatre lignes de devis et deux aides antérieures : aucun nom répété ambigu ; chaque preuve reste contenue dans le groupe du verrou annoncé.                                                                                                                              |
| Chaque champ invalide pouvait faire relire l’intégralité du résumé d’erreurs.                                                             | Le résumé reste une navigation séparée. Chaque contrôle invalide référence un message propre à son identifiant via `aria-errormessage` ; ses aides permanentes restent séparées dans `aria-describedby`. Aucun contrôle ne décrit le résumé global.                                                                                                                                                 | Analyser un dossier très incomplet, puis parcourir tous les champs invalides : chaque message ne contient que ses erreurs, aucun `aria-describedby` ne vise `site-aid-error-summary`, et chaque lien du résumé garde sa cible exacte.                                                                                   |
| Charger l’exemple Bretagne écrasait un brouillon sans confirmation.                                                                       | Un formulaire réellement vierge peut charger l’exemple directement. Dès qu’une donnée a été modifiée, une confirmation accessible en deux temps propose confirmer ou annuler ; l’annulation préserve le brouillon et le focus, la confirmation remplace volontairement les données.                                                                                                                 | Saisir quatre devis et deux aides, activer l’exemple au clavier et à la souris : aucune mutation avant confirmation. Annuler et comparer chaque valeur ; confirmer et vérifier le remplacement, l’annonce et la destination du focus.                                                                                   |

## 3. Fermeture des cinq P2 R10

| P2 R10                                                                                                                           | Correction R11                                                                                                                                                                                                           | Contre-preuve attendue                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Le dossier décrivait encore R10 comme non gelé après création de son manifeste.                                                  | R10 est désormais décrit comme gelé, audité et NO-GO. L’état R11 est daté au moment de la rédaction ; dès que le présent rapport et son manifeste externe existent, ils font foi sans rendre la fiche autoréférentielle. | Vérifier les trois documents : aucune négation du gel R10, aucune demande d’un manifeste R11 déjà créé et aucune attribution anticipée de note à R11.                                             |
| La promesse d’un dossier complet en dix minutes était irréaliste.                                                                | Le contenu distingue un premier tri de 5 à 10 minutes d’un dossier probatoire complet demandant typiquement 20 à 40 minutes lorsque les pièces sont réunies, parfois davantage, sans garantie de durée.                  | Chercher toute promesse absolue de dix minutes ; vérifier la distinction entre orientation rapide et constitution de preuves dans la page, le dossier et le benchmark.                            |
| Les suppressions successives pouvaient ne pas être réannoncées et l’unique ligne était dite supprimée alors qu’elle était vidée. | Les annonces incluent l’élément exact, le compte restant et une séquence. Sur l’unique ligne, le nom de l’action et son retour vocal disent `Vider`.                                                                     | Supprimer plusieurs lignes et aides successivement : textes live différents et focus cohérent. Sur l’unique ligne : contrôle conservé, valeurs vidées et aucune promesse de suppression.          |
| L’avertissement sur le nominal d’un prêt ou d’une garantie n’était pas relié aux montants.                                       | Une aide permanente à identifiant stable est reliée au montant courant et à chaque montant du registre, en combinaison avec l’éventuel message d’erreur ciblé.                                                           | Vérifier `aria-describedby` sur l’aide courante et deux aides antérieures, puis ajouter une erreur : l’aide et l’erreur restent toutes deux accessibles sans résumé global.                       |
| Les agrégats du registre dans le TXT semblaient juridiquement résolus.                                                           | Le TXT et l’interface les qualifient comme montants `déclarés — non validés par le moteur`. Les statuts déclaré et résolu restent visibles ligne par ligne.                                                              | Exporter une aide antérieure à base inconnue et même assiette `oui` : les deux agrégats conservent leur montant, mais jamais le libellé historique affirmatif ni une qualification réglementaire. |

La réserve non comptée sur le focus après analyse est également traitée : avec
des erreurs, le focus rejoint le résumé de correction et la tabulation atteint
sa première action ; sans erreur, il rejoint le résultat.

## 4. Contrat de décision R11

- **Référence juridique** : une seule forme non ambiguë ; URL ELI uniquement en
  HTTPS sur l’hôte EUR-Lex exact et un chemin autorisé ; CELEX seul et exact ;
  numéro isolé dans un libellé sans seconde référence.
- **Entreprise unique** : seule une clé exacte recopiée sert au cumul. Une
  ressemblance déclenche une ambiguïté, jamais une fusion.
- **Octroi** : toute sortie conditionnelle ou réalisée exige `oui` et une date
  valide. `Non` contredit un état notifié ou reçu ; `inconnu` suspend le calcul.
- **Données déclarées** : l’écran et le TXT les conservent pour correction sans
  les présenter comme validées par le moteur.
- **Accessibilité** : noms contextualisés, erreurs propres au champ, aides
  permanentes reliées, résumé navigable séparément et annonces distinctes.
- **Protection du travail** : aucun exemple ne remplace silencieusement un
  brouillon.

La version testée est
`SITE_AID_DECISION_VERSION = site-aid-decision-r11-2026-07-26`.

## 5. Vérifications du candidat R11

```text
Tests ciblés consolidés : 378/378, 7 fichiers
Tests moteur seuls : 259/259
Tests interface seuls : 39/39
Tests moteur + interface + contrat éditorial : 316/316
Tests qualité dédiés : 18/18
Porte documentaire : 80/80
TypeScript global : conforme
ESLint ciblé : conforme
Prettier 3.6.2 ciblé : conforme
Build Next.js direct : conforme
Pages statiques : 159/159
Suite SEO globale : 491/492
Défaut global restant : ancien manifeste P4 de
prioriser-fonctionnalites-mvp-saas sur src/lib/guides.ts
Défaut local aides-creation-site-internet : aucun
```

L’écart de gouvernance SEO est antérieur et extérieur à ce guide. Le build
direct compile, contrôle TypeScript et génère les 159 pages, dont la route du
guide et son image sociale.

## 6. Sources primaires à contrôler

- [règlement général (UE) 2023/2831](https://eur-lex.europa.eu/eli/reg/2023/2831/oj) ;
- [règlement agricole 1408/2013 consolidé](https://eur-lex.europa.eu/eli/reg/2013/1408/2024-12-16/fra) ;
- [rectificatif agricole (UE) 2025/1989](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32025R1989) ;
- [règlement pêche et aquaculture 717/2014 consolidé](https://eur-lex.europa.eu/eli/reg/2014/717/2023-10-25/fra) ;
- [décret français 2025-1361](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000053177293) ;
- [circulaire du Premier ministre du 3 mars 2026](https://agriculture.gouv.fr/telecharger/153667).

## 7. Porte de sortie

Le présent rapport **ne s’auto-attribue aucune note**. R11 n’obtient un
**GO P4** que si deux nouveaux relecteurs indépendants :

1. vérifient le nouveau manifeste commun au début et à la fin ;
2. rejouent les six P1 et les cinq P2 R10, ainsi que tous les défauts R4 à R9 ;
3. confrontent les règles financières et juridiques aux sources primaires ;
4. recherchent de nouveaux contre-exemples, notamment dans les URLs, références
   multiples, clés exactes ou proches, octrois, exports et parcours assistifs ;
5. rendent chacun une note sur 100 avec `P0/P1/P2` ;
6. concluent séparément à `P0 = 0`, `P1 = 0` et à l’absence de P2 empêchant une
   expérience premium.

Un éventuel GO P3 n’autorise toujours ni publication ni indexation. La P4 doit
encore prouver le rendu réel aux dix largeurs, le clavier, les thèmes, les
scénarios du formulaire, le TXT, l’impression A4, l’image sociale, les
métadonnées, le statut robots et l’absence du sitemap.
