# Refonte premium R1 — prix de gestion Google Ads

Date de gel et de recherche : 27 juillet 2026  
Route : `/guides/prix-gestion-google-ads`  
Statut du lot : EN VALIDATION  
Portée : contenu, preuves, calculs, ressource, outil local, SEO et rendu. Aucun
déploiement ni demande d’indexation n’est compris dans ce lot.

Ce dossier remplace comme preuve de travail courante le statut « publiable »
inscrit dans `docs/research/prix-gestion-google-ads.md` le 20 juillet. L’ancien
dossier reste un historique ; il ne constitue plus un feu vert.

## 1. Gel du point de départ

Le manifeste
`docs/research/manifests/prix-gestion-google-ads-p1-2026-07-27-r1.sha256`
figeait avant refonte :

| Élément                         | SHA-256 gelé |
| ------------------------------- | ------------ |
| Page du guide                   | `dfc3d59b…`  |
| Image sociale                   | `07e0747f…`  |
| Dossier de recherche historique | `8ce4e744…`  |
| Ancien audit                    | `48e358db…`  |
| Registre des guides             | `6480bad6…`  |

Le manifeste complet conserve les empreintes non abrégées. Les fichiers
ajoutés après ce gel ne sont pas présentés comme appartenant au baseline.

## 2. Trois audits froids avant rédaction

Trois lectures indépendantes et sans modification ont donné :

| Audit          | Note initiale | Verdict | Principaux défauts                                                                                                                      |
| -------------- | ------------: | ------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Technique/SEO  |        68/100 | NO-GO   | promesse de coût complet, périmètres non comparables, absence d’outil et de ressource, validation navigateur manquante                  |
| UX/pédagogie   |        79/100 | NO-GO   | scénarios A/B/C portant sur des entreprises différentes, seuil maximal annoncé mais insuffisamment opératoire, devis non téléchargeable |
| Faits/économie |        82/100 | NO-GO   | surcharge France absente, nouveau budget total absent, conversions et propriété trop simplifiées, tarifs Hagnéré non réconciliés        |

L’observation `noindex` faite sur un serveur de développement local n’est pas
retenue comme défaut de production : elle devra être distinguée de la
configuration de build lors de la validation finale.

## 3. Registre des écarts convergents

| Priorité | Écart                                                                               | Traitement R1                                                                                              |
| -------- | ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| P1       | « coût complet » alors que licences, TVA, sortie ou préavis peuvent rester inconnus | vocabulaire « coût renseigné » ; chaque ligne incluse, zéro supposé, exclue ou à confirmer                 |
| P1       | scénarios comparant trois activités différentes                                     | trois niveaux du même commerce local fictif, même offre et même tunnel                                     |
| P1       | absence de surcharge réglementaire française                                        | 2 % séparés du budget média, source Google et exemples recalculés                                          |
| P1       | règle 2×/30,4× présentée sans le nouveau budget total                               | distinction budget quotidien moyen / budget total pour campagnes éligibles                                 |
| P1       | seuil de CPL incomplet                                                              | facture maximale, média hors surcharge, sensibilité du taux de signature et réserve de marge               |
| P1       | comparaison fixe/%/hybride non manipulable                                          | calculateur local testé, coûts communs constants et points de croisement                                   |
| P1       | devis non normalisé                                                                 | grille CSV de 27 questions et statuts, téléchargeable sans formulaire                                      |
| P1       | conversions principales/secondaires trop binaires                                   | exception des objectifs personnalisés et contrôle des objectifs de campagne                                |
| P1       | retour CRM décrit avec une ancienne route produit                                   | Gestionnaire de données et conversions avancées pour prospects, limites explicites                         |
| P1       | propriété du compte simplifiée                                                      | différence entre association, création par un manager, propriétaire et contrôle des accès                  |
| P1       | contradiction commerciale non déclarée                                              | page Tarifs : trois mois minimum ; page service : durée/préavis au devis ; contrat à résoudre              |
| P1       | budget configuré assimilé à une dépense certaine                                    | séparation du plafond, de la dépense prévue ou observée, de l’assiette d’honoraires et de la part surtaxée |
| P1       | CPC, CPA et CAC employés de façon incohérente                                       | clic distinct d’une visite ; CPA réservé à l’action configurée ; CAC réservé au client réel                |
| P2       | benchmark uniquement français                                                       | cinq pages étrangères utilisées pour leurs axes, jamais converties en « marché mondial »                   |

## 4. Sources primaires et limites

### Google Ads

- budgets quotidiens moyens et limites de dépense :
  <https://support.google.com/google-ads/answer/10486536?hl=fr> ;
- budgets totaux de campagne :
  <https://support.google.com/google-ads/answer/10486938?hl=fr> ;
- coûts opérationnels réglementaires par juridiction :
  <https://support.google.com/google-ads/answer/9750227?hl=fr> ;
- classement :
  <https://support.google.com/google-ads/answer/1722122?hl=fr> ;
- niveau de qualité :
  <https://support.google.com/google-ads/answer/156066?hl=fr> ;
- actions principales et secondaires :
  <https://support.google.com/google-ads/answer/11461796?hl=fr> ;
- Gestionnaire de données et conversions avancées pour prospects :
  <https://support.google.com/google-ads/answer/15707550?hl=fr> ;
- accès, propriété et historique :
  <https://support.google.com/google-ads/answer/6372672?hl=fr>,
  <https://support.google.com/google-ads/answer/7456532?hl=fr> et
  <https://support.google.com/google-ads/answer/2454137?hl=fr>.

Limite : une documentation de plateforme décrit un fonctionnement et non une
rentabilité future. Une activation de tracking ne prouve ni la qualité des
données, ni l’incrémentalité, ni le respect des obligations applicables au
traitement.

### Coût interne

L’Insee publie 44,2 €/h pour 2025 dans les services marchands, entreprises de
10 salariés ou plus :
<https://www.insee.fr/fr/statistiques/2381340>. Ce champ ne représente ni
toutes les TPE, ni le salaire d’un spécialiste Ads, ni le coût d’opportunité
d’un dirigeant. Le calculateur invite donc le lecteur à remplacer ce montant.

### Tarifs propres, pas données de marché

Les pages françaises MS Web, Viaduc, DP Medias, Ad-Works et Vizetoo ont été
revérifiées le 27 juillet. Elles servent à montrer l’hétérogénéité des
inclusions. Leur sélection n’est ni statistique ni représentative.

Le corpus international relit :

- États-Unis — Emprise Digital ;
- Royaume-Uni — DPOM ;
- Canada — PPC Solutions ;
- Allemagne — DREIKON ;
- Australie — Hoorah.

Il sert uniquement à extraire des questions de devis : seuil de changement de
formule, cadence, suivi horaire, blocs de temps, plafond de média, propriété du
compte et sortie. Aucune conversion de devise ni moyenne internationale n’est
publiée.

## 5. Calculs contrôlés

### Trois niveaux du même cas

| Niveau    | Ponctuel renseigné | Mensuel renseigné |      3 mois |      6 mois |     12 mois |
| --------- | -----------------: | ----------------: | ----------: | ----------: | ----------: |
| Essentiel |         2 903,60 € |        1 150,40 € |  6 354,80 € |  9 806,00 € | 16 708,40 € |
| Central   |         3 742,00 € |        1 810,60 € |  9 173,80 € | 14 605,60 € | 25 469,20 € |
| Exigeant  |         6 307,20 € |        3 301,00 € | 16 210,20 € | 26 113,20 € | 45 919,20 € |

Chaque scénario suppose explicitement que le budget indiqué est intégralement
dépensé et que 100 % des annonces sont servies en France. Il inclut alors la
surcharge de 2 % sur cette dépense et une valorisation explicite du temps
interne. Les inconnues sont listées à côté du total. Une fois la facture
disponible, la dépense réelle et sa ventilation par juridiction doivent
remplacer cette hypothèse.

### CPL maximal fictif

```text
Marge contributive par vente avant acquisition = 2 400 €
Taux prospect qualifié vers vente = 20 %
Marge attendue par prospect = 480 €
Coûts hors dépense média et surcharge = 1 200 € / 15 prospects = 80 € / prospect
Enveloppe dépense + surcharge maximale = 480 - 80 = 400 € / prospect
Dépense média prévisionnelle sous hypothèse France 100 % = 400 / 1,02
= 392,16 € / prospect
Pour 15 prospects :
dépense média retenue = 5 882,35 €
surcharge = 117,65 €
dépense + surcharge = 6 000 €
contrôle : 6 000 + 1 200 = 3 ventes x 2 400 = 7 200 €
```

La sensibilité à 10 %, 20 % et 30 % de signature est publiée. Une réserve de
20 % sur la marge attendue ramène la facture cible à 304 € et le média hors
surcharge à 298,04 € par prospect.

## 6. Artefacts ajoutés

- moteur pur :
  `src/lib/google-ads-management-cost.ts` ;
- tests du moteur :
  `src/lib/google-ads-management-cost.test.ts` ;
- interface locale :
  `src/components/guides/GoogleAdsManagementCostPlanner.tsx` ;
- tests de l’interface :
  `src/components/guides/GoogleAdsManagementCostPlanner.test.tsx` ;
- grille :
  `public/ressources/grille-comparaison-devis-google-ads.csv` ;
- contrat éditorial :
  `src/lib/google-ads-management-guide-quality.test.ts`.

L’outil ne transmet aucune donnée. Il compare forfait, pourcentage et hybride
avec un socle commun et signale les entrées invalides. Il sépare la dépense
média prévue ou observée, l’assiette contractuelle des honoraires variables et
la part de dépense soumise à la surcharge choisie. Les calculs monétaires
intermédiaires utilisent des centimes et des points de base.

## 7. Garde-fous commerciaux

- Hagnéré Code est explicitement décrit comme vendeur et non comme source
  neutre de son propre prix.
- Les offres publiques à 1 800, 3 500 et 4 500 € HT/mois couvrent plusieurs
  canaux, du tracking et des créations ; elles ne servent pas de tarif de
  référence pour une petite campagne Search.
- Les cas où il faut auditer, tester en interne, corriger le parcours ou
  attendre sont placés avant la conversion.
- Le CTA promet un cadrage de périmètre, pas un budget « complet », un ROAS ou
  une performance.

## 8. Validation encore requise

- tests unitaires ciblés, contrat éditorial, typecheck et batterie globale ;
- build frais avec configuration de production ;
- mesure du texte réellement servi et mise à jour du temps de lecture ;
- contrôle fonctionnel du calculateur, du téléchargement et du contexte CTA ;
- contrôle axe et rendu réel aux largeurs 320, 360, 390, 430, 640, 768, 1024,
  1280, 1440 et 1600 px ;
- rendu et inspection de l’image sociale ;
- trois contre-audits froids indépendants après corrections ;
- résolution de toute réserve P0/P1 avant la clôture.

Le statut restera `EN VALIDATION` tant que ces éléments ne seront pas consignés
dans un dossier de clôture et un manifeste final.
