# Relevé de décision — Nova Maintenance

> Exemple entièrement fictif. Il montre pourquoi une seconde répétition plus
> rapide peut rester en échec ; il ne constitue ni un seuil, ni une durée, ni
> une recommandation universelle.

## Périmètre

- Ancien logiciel : outil de gestion de maintenance fictif A.
- Nouveau logiciel : application métier fictive B.
- Population : 40 utilisateurs, 2 400 clients uniques, 8 000 dossiers
  historiques, 300 dossiers ouverts, 220 factures mensuelles, 5 intégrations
  et 10 rôles.
- Source clients : 2 420 lignes, dont 20 doublons expliqués, pour 2 400 clients
  uniques dans la cible.
- Fenêtre : 6 heures.
- Décisionnaire : directrice des opérations fictive.
- Date de l'exemple : 24 juillet 2026.

## Opérations à protéger

1. Créer une intervention urgente :
   - RPO cible : point de reprise âgé de 15 minutes au maximum ;
   - RTO cible : 30 minutes ;
   - MTD : 2 heures ;
   - mode dégradé : registre numéroté.
2. Préparer une commande :
   - RPO cible : point de reprise âgé de 1 heure au maximum ;
   - RTO cible : 2 heures ;
   - MTD : 4 heures ;
   - mode dégradé : liste contrôlée.
3. Émettre une facture :
   - RPO cible : point de reprise âgé de 4 heures au maximum ;
   - RTO cible : 1 jour ouvré ;
   - MTD : 2 jours ouvrés ;
   - mode dégradé : émission suspendue.

## Source d'écriture

- clients avant décision : ancien logiciel, copie incrémentale vers le nouveau ;
- équipe pilote : nouveau logiciel pour ses seuls dossiers ;
- factures avant validation comptable : ancien logiciel ;
- planning pendant la fenêtre : registre temporaire numéroté ;
- historique après démarrage : archive en lecture seule.

Cette source unique est la règle prudente de l'exemple. Une architecture
multi-écriture demanderait des preuves supplémentaires de résolution de
conflit, d'idempotence et de rapprochement.

## Porte A — STOP

Preuves observées :

- LOT-001 : 2 420 lignes clients lues, 20 doublons expliqués et 2 400 clients
  uniques dans la cible ;
- LOT-002 : 290 dossiers acceptés et 10 rejetés ;
- 300 dossiers ouverts présents, mais seulement 299 reliés au bon client ;
- 220 factures et somme TTC conformes ;
- un rejet sans propriétaire ;
- TST-002, traduction de tous les statuts, en échec ;
- séquence complète de 6 h 15 dans une fenêtre de 6 heures.

Décision de la porte A : **STOP** pour quatre motifs indépendants :

1. relation dossier-client à 299/300 ;
2. un rejet sans propriétaire ;
3. temps de retour insuffisant ;
4. TST-002 en échec.

## Corrections exécutées entre A et B

- attribuer et traiter le rejet ;
- corriger la règle de relation dossier-client ;
- exécuter LOT-002-R1 : 300 dossiers acceptés ;
- exécuter LOT-002-R2 : rejeu des 300 dossiers sans doublon ;
- vérifier la relation à 300/300 ;
- précharger les données afin de réduire la copie dans la fenêtre ;
- conserver LOT-003 comme passage initial et LOT-004 comme rejeu, dans cet
  ordre.

La traduction de tous les statuts n'est pas encore corrigée : TST-002 reste en
échec.

## Porte B — STOP

Preuves observées :

- séquence complète de 2 h 30, retour inclus ;
- 300 dossiers sur 300 reliés au bon client ;
- zéro rejet non attribué ;
- 50 écritures de la dernière heure, dont 2 suppressions, acceptées exactement
  une fois après LOT-003 puis LOT-004 ;
- 10 rôles testés en action autorisée et en refus attendu ;
- 4 intégrations disponibles et mode dégradé de 2 heures approuvé pour la
  cinquième ;
- TST-002 toujours en échec.

Décision de la porte B : **STOP**. Le temps, les relations et les rejets sont
désormais conformes, mais la traduction des statuts reste bloquante. Gagner
3 h 45 et corriger les relations ne transforme pas ce test manquant en détail.

## Actions avant une nouvelle porte

- corriger et faire approuver toutes les règles de statut ;
- rejouer TST-002 sur chaque statut source ;
- répéter les contrôles qui dépendent de ce mapping ;
- confirmer la fermeture du mode dégradé de la cinquième intégration ;
- conserver une écriture post-bascule exactement une fois pendant le test de
  retour ;
- prendre une nouvelle décision sur le même périmètre.

## Limites

Cette décision fictive ne garantit ni une absence d'incident, ni une conformité
juridique, ni une continuité absolue. Les données de Nova Maintenance doivent
être remplacées par les volumes, coûts et seuils propres à l'entreprise.
