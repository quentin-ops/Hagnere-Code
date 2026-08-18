# Rapport P2 R1 — `securite-saas-b2b`

Date : **25 juillet 2026**  
Éditeur unique : `/root`  
Étape suivante : contre-audit P3 indépendant sur le manifeste P2 R1  
Statut maximal : **brouillon complet prêt pour contre-audit**

## 1. Statut exact

```text
Score P2 auto-attribué : aucun
Recherche internationale : terminée et intégrée de façon sélective
P3 indépendant : non réalisé
P4 navigateur, impression et plume humaine : non réalisés
Build final de production : non réalisé
Statut éditorial : ready-for-human-review
Robots attendus : noindex, nofollow
Commit / push / déploiement / publication / indexation : non réalisés
```

Ce rapport autorise seulement l'ouverture du contre-audit P3. Il ne constitue
ni une autorisation de publication, ni une preuve de production, ni une
promesse de classement Google.

## 2. Point de départ et correction de fond

L'ancienne version avait une structure riche, mais la règle la plus importante
restait insuffisamment défensive : un plan accepté par l'acheteur pouvait être
lu comme une permission générale de signer avec un contrôle absent. La
réécriture sépare désormais cinq issues :

1. signer sur le champ démontré ;
2. corriger et contre-tester avant signature ;
3. signer sous conditions limitées ;
4. faire intervenir un tiers compétent ;
5. reporter, réduire, renégocier ou refuser.

Les cinq contrôles essentiels — accès privilégiés, séparation entre clients,
restauration, sécurité du logiciel et réaction à incident — ne peuvent être ni
reclassés comme non critiques ni écartés comme non applicables. Une sixième
famille traite une condition d'achat ou assurance formelle. Des conditions
optionnelles qui n'ont pas la même nature, le même état, le même risque ou la
même échéance exigent des exports séparés ; le verdict le plus restrictif
prévaut.

## 3. Recherche mondiale intégrée

Le benchmark dédié couvre des sources françaises, européennes, britanniques et
américaines :

- CNIL et ANSSI pour les rôles, la reprise, les violations, SecNumCloud et la
  prudence sur NIS 2 ;
- règlement européen Data Act et Commission européenne pour la sortie des
  services de traitement de données, les délais et les frais de changement ;
- NCSC pour la séparation techniquement imposée et le raisonnement
  affirmation–argument–faits ;
- code britannique volontaire de sécurité du logiciel et guide CISA/FBI
  `Secure by Demand` pour distinguer sécurité du produit et gouvernance de
  l'organisation ;
- NIST SSDF, SP 1326, SP 800-57 et SP 800-53 pour le développement, la chaîne
  d'approvisionnement, la gestion des clés, la protection des données et les
  journaux ;
- AICPA, ISO et Cloud Security Alliance pour lire le champ, la période, les
  exceptions, les contrôles restant au client, les sous-traitants et le niveau
  d'indépendance d'un SOC 2, d'un certificat ISO ou de STAR.

Les références étrangères sont présentées comme des repères volontaires, pas
comme des obligations françaises ni des labels. Les affirmations temporelles
du Data Act sont datées au 25 juillet 2026 et accompagnées de leurs limites :
le délai normal de transition ne garantit pas une migration technique complète,
et les coûts internes de sortie ne sont pas automatiquement des frais de
changement au sens du règlement.

## 4. Valeur pédagogique ajoutée

La page rend désormais explicites :

- la différence entre sécurité, conformité, résilience, assurance indépendante,
  assurance cyber et responsabilité contractuelle ;
- la différence entre badge d'organisation et sécurité du produit vendu ;
- cinq défauts capables d'arrêter la signature sans moyenne compensatoire ;
- la chaîne actif → événement redouté → contrôle → résultat → risque restant →
  décideur ;
- la répartition des responsabilités entre fournisseur cloud, éditeur SaaS,
  entreprise cliente et autres sous-traitants ;
- le chiffrement des flux, des stockages et des sauvegardes, le cycle de vie des
  clés et les journaux réellement utilisables, sans les confondre avec l'accès
  ou l'isolement ;
- les niveaux de force d'une pièce et la méthode de raisonnement
  affirmation–argument–faits ;
- les tests d'accès inter-client au-delà de l'interface visible ;
- la provenance, les sous-tiers, la maintenance et la fin de support au-delà
  d'une simple liste de composants ;
- une restauration chronométrée jusqu'au retour effectif au travail ;
- un exercice de sortie et une lecture prudente du Data Act ;
- quatre chronologies d'incident qui ne doivent pas être fusionnées ;
- une comparaison à champ égal et un coût complet sur 36 mois, sans prix de
  marché inventé ;
- la lecture détaillée de SOC 2, ISO et STAR avant de compter un logo ;
- le partage progressif de documents sans exposer de secret ni un autre client.

Le texte rendu, hors atelier interactif, compte **6 113 mots** pour une durée
de lecture mesurée de **31 minutes**.

## 5. Atelier de décision local

L'atelier fonctionne sans compte ni stockage réseau propre. Il reçoit une date
locale d'évaluation explicite et la réactualise au changement de jour, au retour
de visibilité et au focus.

La décision ne peut pas devenir verte tant que :

- les six identifiants exacts ne sont pas présents une seule fois ;
- toutes les demandes de l'acheteur ne sont pas recensées ;
- toutes les corrections, productions de pièces et contre-tests ne sont pas
  additionnés ;
- le produit, les dates, la capacité, la marge et la fonction qui accepte le
  risque ne sont pas renseignés ;
- la pièce n'a pas une référence, un résultat, une portée exacte, une date, une
  prochaine revue, un événement invalidant et une fraîcheur confirmée ;
- un contrôle essentiel est inconnu, insuffisamment démontré, reclassé ou
  déclaré non applicable ;
- une condition formelle déclarée satisfaite n'est pas reliée à l'assurance
  indépendante exacte ;
- un risque modéré n'a pas de décision interne datée et référencée ;
- une correction ou un contre-test ouvert porte zéro heure ;
- une décision de correction ou de report contredit une pièce déjà suffisante ;
- une décision explicite de renégociation ou refus est ignorée ;
- une charge avant signature ou après signature dépasse la capacité déclarée.

Un report après signature est limité à une exigence non critique, au risque
faible ou modéré, couverte par une mesure temporaire et une base de report
explicite. Le financement, l'acceptation interne et l'accord acheteur exigent
chacun une référence et une date comprises entre l'observation et la décision.
L'échéance doit être strictement postérieure à la signature.

Le moteur distingue :

- zéro heure, qui ne peut pas représenter un travail ouvert ;
- une charge vide, qui reste inconnue et bloque la conclusion ;
- la capacité avant signature ;
- la capacité cumulée de chaque plan après signature ;
- une date de preuve future, une revue échue et un changement invalidant.

## 6. Export, impression et remise à zéro

Le texte exporté est toujours recalculé à partir des données courantes. Un
dossier incomplet porte :

```text
BROUILLON INCOMPLET — NE PAS UTILISER POUR AUTORISER UNE SIGNATURE
```

Son nom de fichier commence par `brouillon-`. Le rapport contient les dates,
les charges, les capacités, les références de pièce, de financement et
d'acceptation, les limites et les décisions. Il peut être imprimé dans un bloc
isolé. L'effacement exige une confirmation en deux temps.

## 7. Métadonnées, image sociale et gouvernance

- `dateModified` : `2026-07-25` ;
- temps de lecture mesuré : `31` minutes ;
- statut : `ready-for-human-review` ;
- route exclue de `PUBLISHED_GUIDES` ;
- métadonnée robots fournie par `guideRobots(guide)` ;
- image sociale alignée sur cinq contrôles essentiels et une famille
  supplémentaire ;
- anciens manifestes P1 à P4 conservés comme historique et non réécrits ;
- entrée retirée des listes qui présumaient à tort quatre passes terminées et
  publication déléguée.

Le sélecteur V2 `docs/research/manifests/v2/current.json` reste volontairement
absent. Cette absence globale n'est pas corrigée dans le cadre d'un seul guide.

## 8. Contrôles exécutés avant gel

```text
Tests sécurité dédiés : 61/61
Suite ciblée élargie : 151/151 sur 9 fichiers
TypeScript : conforme
ESLint ciblé : conforme
Formatage Prettier ciblé : conforme
git diff --check ciblé : conforme
Mesure du texte rendu : 6 113 mots, 31 min
```

Les tests adversariaux couvrent notamment les dates futures ou expirées, les
années bissextiles, les identifiants manquants ou dupliqués, la compensation
d'un risque élevé, la charge fictive nulle, la capacité insuffisante, les
accords booléens sans référence, la disposition contradictoire, l'échéance
égale à la signature, le brouillon exporté et le verrouillage des contrôles
essentiels.

## 9. Fichiers du gel P2 R1

Le manifeste horodaté porte les empreintes de :

- la page et son image sociale ;
- l'atelier, son moteur, la date locale et leurs tests ;
- le contrat de qualité propre au guide ;
- les registres de guide et de gouvernance modifiés ;
- le test transversal FAQ rendu compatible avec un tableau typé ;
- le script de contrôle déclaré dans `package.json` ;
- le benchmark mondial, le journal de recherche et le présent reçu.

Le manifeste ne contient aucun ancien manifeste historique.

## 10. Limites et porte suivante

P2 n'a pas vérifié :

- le rendu réel aux dix largeurs ;
- les thèmes clair et sombre ;
- le parcours clavier physique ;
- le téléchargement et l'impression dans un navigateur réel ;
- l'image sociale rendue à 1 200 × 630 ;
- le build et le HTML d'un serveur de production local ;
- la route publique, le sitemap ou l'indexation.

**Remise P2 R1 : prête pour deux contre-audits indépendants sur le manifeste
gelé, sans note et sans autorisation de publication.**
