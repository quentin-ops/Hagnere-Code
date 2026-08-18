# Dossier de recherche reconstitué — TJM d’un développeur web

> Dossier de reprise construit à partir de la page courante et de l’audit du
> 24 juillet 2026. Il ne constitue pas une nouvelle enquête tarifaire. Les
> comparaisons France/international et sources ajoutées par l’audit sont
> signalées comme héritées tant qu’elles ne sont pas rouvertes.

**Statut réel : brouillon à reprendre — guide de coût complet non validé.**

## Journal des quatre passes

| Passe                        | État        | Date       | Blocage                                                           |
| ---------------------------- | ----------- | ---------- | ----------------------------------------------------------------- |
| 1. Recherche                 | À reprendre | 2026-07-25 | Population, géographie et fraîcheur des baromètres non revalidées |
| 2. Rédaction et intégration  | À reprendre | 2026-07-25 | Onze P1 et huit P2 hérités restent ouverts                        |
| 3. Contre-audit indépendant  | Bloquée     | 2026-07-25 | Aucun coût comparatif corrigé à recalculer                        |
| 4. Plume humaine et contrôle | Bloquée     | 2026-07-25 | Test dirigeant et QA finale non exécutés                          |

Propriétaire éditorial : **à nommer**.

## Snapshot et provenance

| Élément                                                           | Empreinte ou date                                                  | Limite                                                 |
| ----------------------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------ |
| `src/app/guides/tjm-developpeur-web/page.tsx`                     | `83dbfcc0bf2e45083dfe90f00ab9af3283fc58dc15bdcc4ecc919c963ca873b0` | Même snapshot que l’audit ; rendu public non revérifié |
| `docs/audits/giga-audit-2026-07-24/guides/tjm-developpeur-web.md` | 24 juillet 2026                                                    | Manques et benchmark hérités ; aucune correction       |
| `docs/charte-qualite-guides.md`                                   | `5ee616faa4959dc8ad2b0eb19a5b19ffbf53299b62665700093c5c176b0b8491` | Exigences de preuve, comparaison et langage            |
| `docs/workflow-maitre-guides-4-passes.md`                         | `a3a8c8f1be5d5d60b096f251f22b27ae5526adb708c334c4d6f0b7b4270c60c4` | Portes applicables ; aucun manifeste créé              |

## 1. Lecteur, phrase et décision

| Champ           | Cadrage                                                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Lecteur         | Dirigeant ou indépendant qui reçoit une proposition au jour et doit évaluer le budget, le prestataire et le résultat                |
| Déclencheur     | Un tarif de `550 €` paraît élevé ou bas sans que les jours, rôles et livrables soient comparables                                   |
| Phrase réelle   | « Un développeur me demande 550 € par jour : est-ce cher, et combien ce choix me coûtera-t-il vraiment une fois le projet livré ? » |
| Intention       | Passer du prix par jour au coût d’un résultat accepté, maintenu et récupérable                                                      |
| Promesse        | Expliquer le TJM, comparer les mêmes responsabilités et rendre visibles les coûts oubliés                                           |
| Décision        | Freelance, agence, salarié, prestataire distant, forfait, régie plafonnée, lots ou report                                           |
| Action autonome | Exiger jours par étape, livrables, exclusions, critères d’acceptation, maintenance et sortie                                        |
| Hors périmètre  | Conversion universelle entre TJM et salaire net, tarif légal, garantie de délai ou classement des prestataires                      |

## 2. Couverture observée

La page :

- définit le tarif journalier moyen comme un prix hors taxes facturé, pas un
  salaire ;
- donne un calcul lisible : `20 jours × 550 € = 11 000 € HT`, puis
  `12 650 € HT` avec une réserve de `15 %` ;
- distingue junior, confirmé, senior et lead avec des repères ;
- explique forfait, régie et découpage en lots ;
- rappelle que deux personnes au même TJM ne vendent pas le même résultat ;
- distingue jours de production et calendrier ;
- traite maintenance, documentation, accès et changement de prestataire ;
- invite à transmettre montant, jours, livrables, exclusions et maintenance,
  avec possibilité de masquer les informations confidentielles.

La pédagogie de base est bonne. Le comparatif économique entre modèles reste
absent.

## 3. Défauts hérités

### P0

Aucun faux témoignage, résultat garanti ou tarif légal n’a été repéré.
L’absence de P0 est à revérifier après toute mise à jour des fourchettes.

### P1

1. Pour chaque source tarifaire, dater population, géographie, spécialité et
   nature du tarif : affiché, demandé ou signé.
2. Comparer freelance, agence, salarié et distant sur les mêmes livrables,
   tests, garantie et sortie.
3. Utiliser un simulateur officiel pour le coût employeur avec hypothèses ;
   ne jamais déduire un salaire net d’un TJM.
4. Chiffrer recrutement, management, congés, formation, matériel, pilotage,
   design, tests, coordination, traduction, assurance et remplacement.
5. Calculer TCO 12/36/60 : lancement, année normale, maintenance, licences,
   incidents, sortie et nouvelle équipe.
6. Relier la réserve `15–25 %` à des risques et sensibilités identifiés.
7. Comparer continuité, remplacement, délai d’intervention, accès et plafond.
8. Décomposer l’agence : pilotage, design, développement, tests, marge,
   responsabilité et équipe réellement affectée.
9. Pour un prestataire distant, traiter langue, fuseau, droit applicable,
   données, assurance, transfert et contrôle.
10. Déclarer que Hagnéré Code vend du développement et peut recommander un
    freelance, un salarié ou l’absence de projet.
11. Rendre le résultat vérifiable : pages/fonctions, données, tests,
    documentation, recette et preuve de mise en ligne.

### P2

- fournir grille de devis et calculateur de coût complet ;
- rendre visible le benchmark international avec date, devise et biais ;
- modifier la date du registre seulement après validation ;
- tester Article, Breadcrumb et FAQ dans le build ;
- ajouter petite mission, projet métier, maintenance annuelle et équipe
  interne à trois ans ;
- contrôler lecture mobile et accessibilité ;
- expliquer capacité facturable, régie plafonnée, SLA, TMA, recette et coût
  d’opportunité ;
- encadrer consentement et confidentialité des références client.

## 4. Sources réellement présentes

| Source visible                                                                                          | Usage                          | Limite                                                                        |
| ------------------------------------------------------------------------------------------------------- | ------------------------------ | ----------------------------------------------------------------------------- |
| [SILKHOM — baromètre TJM](https://www.silkhom.com/barometre-des-tjm-informatique-electronique-digital/) | Repères par profils            | Données multi-années ; population et géographie à relire                      |
| [Malt — baromètre tarifs tech](https://www.malt.fr/t/barometre-tarifs/tech/)                            | Tarifs de profils indépendants | Plateforme commerciale ; tarifs affichés et missions signées peuvent différer |
| [Free-Work — rémunérations IT](https://www.free-work.com/fr/tech-it/earnings)                           | Contexte marché                | Méthode et segmentation à préciser                                            |
| [TJMètre — baromètre](https://tjmetre.fr/barometre)                                                     | Médianes et quartiles          | Échantillon et spécialités à documenter                                       |
| [Codeur.com — tarif développeur web](https://www.codeur.com/developpeur/web/tarif)                      | Repères d’une place de marché  | Ne prouve pas le prix final ni la qualité du résultat                         |

L’audit mentionne Urssaf, Service-Public, Upwork et des comparatifs
britanniques et australiens. Ces sources sont **héritées de l’audit** et
**non rouvertes**. Aucune facture réelle, enquête propriétaire ni base de
missions signées n’a été analysée dans ce dossier.

## 5. Chiffres et hypothèses

### Chiffres de la page

- junior `300–450 €` ;
- confirmé `400–600 €` ;
- senior `450–650 €` ;
- lead `500–750 €` ;
- médiane développeurs proche de `530 €` selon TJMètre ;
- exemple `20 × 550 = 11 000 € HT` ;
- réserve de planification `15–25 %`, explicitement non universelle.

Ces valeurs sont des **repères hétérogènes**. Elles ne permettent pas seules de
conclure qu’un devis est bon.

### Scénarios à produire

L’audit propose un site de douze pages et des comparaisons en jours. Ces
valeurs sont **illustratives et non validées**. La prochaine étude doit fixer
au moins :

```text
résultat et critères d’acceptation
jours de production par rôle
temps de décision et de coordination du client
design, contenus, tests et données
mise en ligne, garantie et maintenance
continuité, remplacement et sortie
coûts externes
= coût complet comparable
```

Chaque réserve doit être reliée à un risque concret. Une marge de `20 %`
automatique serait trompeuse.

## 6. Comparaison à périmètre égal

| Modèle              | Ce qu’il faut comparer                                                     | Erreur à éviter                                            |
| ------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------- |
| Freelance           | Jours, compétences adjacentes, relais, gestion et maintenance              | Déduire « moins cher » du seul TJM                         |
| Agence              | Rôles nommés, coordination, recette, responsabilité et remplacement        | Comparer son prix global au seul temps de code             |
| Salarié             | Coût employeur, recrutement, capacité, encadrement, matériel et continuité | Transformer un TJM en salaire net                          |
| Prestataire distant | Même résultat, langue, fuseau, assurance, données et contrôle              | Comparer deux taux sans coût de pilotage                   |
| Report/lot limité   | Coût de validation et apprentissage attendu                                | Acheter toute la solution avant d’avoir confirmé le besoin |

## 7. Plume humaine et anti-IA

### Forces

- le scénario de `550 €` parle immédiatement au dirigeant ;
- le calcul est simple et vérifiable ;
- les différences de contrat sont expliquées sans jargon excessif ;
- la page rappelle que le tarif le plus bas peut produire le budget le plus
  élevé si la demande reste floue.

### Corrections

- suivre un même devis jusqu’à la livraison, la maintenance et la reprise ;
- ne pas multiplier les catégories de profils sans expliquer ce que le lecteur
  obtient ;
- donner le sens de chaque calcul dans la phrase suivante ;
- remplacer les abstractions par qui décide, qui teste, qui corrige et ce qui
  est remis ;
- faire relire les 150 premiers mots et les tableaux par un dirigeant non
  technique. Test **non réalisé**.

## 8. Conversion

CTA recommandé :

> « Comparer mon devis au coût complet : jours, livrables, exclusions,
> maintenance et sortie. »

Le résultat promis doit être une grille remplie et des questions à poser, pas
une validation automatique du fournisseur. Hagnéré Code doit déclarer son
intérêt commercial et pouvoir conclure qu’un freelance, un recrutement, un lot
plus petit ou un report est préférable.

## 9. Reprise et revalidation

1. Refaire la recherche tarifaire et documenter chaque population.
2. Construire les quatre modèles sur les mêmes livrables.
3. Recalculer coûts et sensibilités à 12/36/60 mois.
4. Réécrire avec résultat, acceptation, continuité et conflit commercial.
5. Faire recalculer par un agent indépendant et faire tester la grille par un
   dirigeant.
6. Contrôler mobile, accessibilité, liens, données structurées, build et route
   publique.

**Porte de sortie :** aucune source ambiguë, calculs reproductibles, périmètre
symétrique, zéro P0/P1, P2 traités ou justifiés et snapshot corrigé
contre-audité. Aucun défaut n’est fermé ici.
