# Rapport P2 R1 — `aides-creation-site-internet`

Date : **26 juillet 2026**  
Propriétaire éditorial et intégration : orchestrateur `/root`  
Moteur pur et tests adversariaux : agent `rn_flutter_r3_final`  
Base d'entrée : manifeste P1 R1 et deux contre-audits documentaires

## Statut exact

```text
Passe 1 : validée
Passe 2 : rédaction et intégration terminées
Score P2 auto-attribué : aucun
Passe 3 factuelle et logique : non réalisée
Passe 4 humaine et visuelle : non réalisée
Statut éditorial maximal : ready-for-human-review
Robots attendus : noindex,nofollow
Commit / push / déploiement / publication / indexation : non réalisés
```

Ce reçu n'affirme ni que le guide est publiable, ni qu'une aide est ouverte
pour un lecteur donné. Il fige le brouillon remis à deux relecteurs
indépendants. Leur mission est de contredire les faits, les calculs, la logique
de décision et la pédagogie avant toute validation.

## Livrables intégrés

- guide entièrement réécrit à partir du dossier P1 ;
- titre, description, date, durée provisoire et statut synchronisés dans le
  registre ;
- visuel social dédié et daté ;
- moteur de décision local, sans transmission réseau ;
- formulaire autonome : profil, source, devis ligne par ligne, TVA, critères,
  ordre des actes, cumul, notification, versement, trésorerie et attente ;
- exemple Bretagne reproductible ;
- export texte UTF-8, impression ciblée et remise à zéro en deux temps ;
- tests du moteur, du composant et du contrat éditorial.

## Fermeture des défauts hérités

| Référence            | Traitement P2 | Preuve visible ou testable                                                                                                                           |
| -------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| P1-01                | Fermé         | Atouts Numériques est présenté comme un accompagnement actif pris en charge, pas comme une subvention de production.                                 |
| P1-02                | Fermé         | PASS Bretagne expose le seuil de 6 000 € HT, le taux de 30 %, le plafond, le profil, les exclusions, la TVA, le cumul et le versement.               |
| P1-03                | Fermé         | Les « près de 200 aides » désignent uniquement la taille observée de la base France Num, jamais une chance d'obtention.                              |
| P1-04                | Fermé         | ACRE et ARCE sont datées, chiffrées et séparées du financement du site.                                                                              |
| P1-05                | Fermé         | Le CPF est borné à la formation éligible ; aucune production de site n'est maquillée en formation.                                                   |
| P1-06                | Fermé         | La recherche nationale est datée et renvoie vers les autorités, sans prétendre recenser tous les guichets.                                           |
| P1-07                | Fermé         | Le moteur distingue HT, TTC, TVA déductible, besoin maximal de trésorerie et coût économique conditionnel.                                           |
| P1-08                | Fermé         | Le coût d'attente inclut marge attribuable et frais ; s'il atteint l'aide théorique, attendre uniquement pour l'aide est dominé.                     |
| P1-09                | Fermé         | Un registre par autorité, dispositif, montant, dépense et facture rend le cumul vérifiable sans conclure à la place de l'instructeur.                |
| P1-10                | Fermé         | Page, sources, date visible, registre, métadonnées et visuel social sont synchronisés sur le snapshot P2.                                            |
| P2-01 historique     | Fermé         | L'ancien chèque de 500 € est relié à son archive officielle et explicitement clos au 31 juillet 2021.                                                |
| P2-02 fiche copiable | Fermé         | Le dossier local s'exporte en TXT avec nomenclature stable ; sept tests de composant couvrent l'exemple, l'export, l'impression et la remise à zéro. |
| P2-03 benchmark      | Fermé         | Six marchés étrangers nourrissent seulement la méthode ; aucun programme, montant ou droit étranger n'entre dans le guide public français.           |
| P2-04 CTA            | Fermé         | Un seul appel à l'action annonce un premier cadrage gratuit, sans promesse d'aide, de résultat commercial ou de classement.                          |

## Invariants financiers

1. une valeur inconnue ne devient jamais zéro ;
2. une aide non notifiée reste à `0 €` dans le budget ;
3. aide théorique, montant notifié sous conditions et somme encaissée restent
   trois états distincts ;
4. la TVA récupérable ne réduit le besoin de trésorerie avant paiement que si
   son traitement est renseigné ;
5. la comparaison attendre/lancer inclut aussi les frais liés à l'aide ou au
   financement ;
6. aucun score probabiliste d'obtention n'est calculé ;
7. un critère négatif, une incohérence ou une preuve manquante empêche une
   fausse conclusion finale.

## Cas de référence

Pour un devis fictif de `10 000 € HT`, dont `7 000 €` de lignes qualifiées
admissibles, avec `20 %` de TVA et un taux de `30 %` :

```text
facture TTC à avancer : 12 000 €
aide théorique : 2 100 €
aide budgétée sans notification : 0 €
coût conditionnel avec notification, TVA entièrement déductible : 7 900 €
coût conditionnel avec notification, TVA non déductible : 9 900 €
```

Le chargement de l'exemple laisse volontairement plusieurs critères inconnus :
il ne fabrique donc pas une éligibilité. Après preuves positives et
notification renseignée, le résultat demeure conditionnel jusqu'à
l'encaissement.

## Vérifications mécaniques du snapshot

```text
Tests ciblés : 35/35
TypeScript : vert
ESLint ciblé : vert
Build Next.js direct : vert
Pages statiques générées : 159/159
```

La durée de lecture de `21 min` reste provisoire jusqu'à mesure du HTML servi.
La passe 4 devra encore contrôler la route réelle, les métadonnées, le visuel
social, le formulaire, le téléchargement, l'impression, les thèmes et toutes
les largeurs prévues. Le manifeste P2 frère porte les empreintes exactes de ce
snapshot.
