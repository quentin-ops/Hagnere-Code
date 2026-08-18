# Rapport canonique P1 — `aides-creation-site-internet`

Date : **26 juillet 2026**  
Propriétaire éditorial : orchestrateur `/root`  
Périmètre : dossier de recherche français, benchmark mondial de méthode,
contrat de l'outil et plan public  
Page auditée mais non réécrite : ancien snapshot à **75/100**

## Verdict

```text
Score documentaire froid : 97/100
P0 ouverts : 0
P1 ouverts : 0
P2 ouverts : 0
Verdict : GO — passe 1 fermée, passe 2 autorisée
```

Ce `GO` valide uniquement la recherche. Il ne valide ni la page actuelle, ni
une publication, ni une indexation. La page existante conserve ses défauts tant
que la passe 2 n'a pas été écrite, testée puis contre-auditée.

## Corpus et méthode

- France : France Num, Région Bretagne, guide utilisateur PASS Commerce et
  Artisanat v4, Région et opérateur Auvergne-Rhône-Alpes, Service Public,
  Mon Compte Formation, Bpifrance et règlement de minimis ;
- méthode internationale : États-Unis, Royaume-Uni, Canada, Union européenne,
  Singapour et Allemagne ;
- aucune règle, aide, devise ou condition étrangère n'est transposée à une
  entreprise française ;
- cartographie française datée sans revendication de volume ni de classement ;
- saturation atteinte lorsque les nouveaux corpus répétaient les mêmes
  contrôles sans ajouter de décision utile.

## Refus puis corrections

Le premier contre-audit a rendu `NO-GO` avec trois P1 :

1. confusion entre le Prêt Boost Transformation documenté en 2024 et le Prêt
   Boost générique actuel ;
2. contrat d'outil trop agrégé, sans lignes de devis, TVA déductible, registre
   de cumul ni états financiers suffisamment prudents ;
3. absence de fermeture formelle et de manifeste.

Les deux premiers défauts ont été corrigés. Le moteur prévu distingue désormais
chaque ligne du devis, une TVA inconnue, le cumul, l'ordre des actes, le mode de
versement et trois états : théorique, notifié sous conditions et encaissé. Il
ne calcule aucune probabilité d'obtention.

Une seconde lecture froide a ensuite relevé le seuil minimal de `6 000 € HT`
dans le guide utilisateur PASS Bretagne v4 de janvier 2026. Le seuil a été
intégré comme test de frontière, sans le transformer en preuve d'éligibilité et
avec confirmation de l'EPCI.

## Test d'acceptation financier

Pour un cas fictif de `10 000 € HT`, dont `7 000 €` de lignes entièrement
qualifiées admissibles, une TVA à `20 %` et un taux de `30 %` :

```text
facture TTC à avancer : 12 000 €
aide théorique : 2 100 €
aide budgétée sans notification : 0 €
coût conditionnel avec notification, TVA entièrement déductible : 7 900 €
coût conditionnel avec notification, TVA non déductible : 9 900 €
```

Si une ligne, la TVA, le cumul, l'ordre des actes ou le versement reste
inconnu, le coût final est retiré au lieu de transformer l'inconnue en zéro.

## Contrat de décision validé

La page P2 doit permettre de :

- qualifier le profil, l'autorité et les lignes du devis ;
- distinguer subvention, accompagnement, dette, aide de création, formation et
  effet fiscal ;
- calculer facture TTC, TVA déductible, besoin de trésorerie et coût d'attente ;
- conserver un registre de cumul par dépense et même facture ;
- afficher une notification comme conditionnelle jusqu'au versement ;
- conclure : invalide, écarter, dossier incomplet, candidat à vérifier,
  notification sous conditions, aide encaissée ou ne pas attendre uniquement
  pour cette aide ;
- exporter un dossier texte et imprimer le rapport sans transmettre les
  données.

## Limites et statut produit

- aucune relecture par un dirigeant extérieur n'est revendiquée ;
- aucune éligibilité individuelle n'est conclue ;
- Hagnéré Code vend des sites : le conflit d'intérêts doit rester visible ;
- le projet doit rester viable avec aide budgétée à `0 €` ;
- aucun commit, push, déploiement, publication ou travail d'indexation n'est
  inclus dans ce reçu.

Les empreintes exactes du snapshot figurent dans
`docs/research/manifests/aides-creation-site-internet-p1-2026-07-26-r1.sha256`.
