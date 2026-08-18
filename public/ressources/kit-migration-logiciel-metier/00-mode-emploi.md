# Kit de préparation d'une migration de logiciel métier

Ce kit aide une direction, les responsables métier et l'équipe technique à préparer une migration sans transformer une promesse de continuité en certitude. Il ne remplace ni un audit de votre système, ni un plan de sécurité, ni un conseil juridique.

## Ce que contient le kit

Chaque sujet possède une version `vierge` à compléter et une version `exemple` fondée sur Nova Maintenance, une entreprise entièrement fictive :

1. inventaire des applications et dépendances ;
2. mapping des données et traitement des rejets ;
3. source de vérité pendant la coexistence ;
4. journal des lots ou changements récents ;
5. rapprochement avant et après la bascule ;
6. objectifs RPO, RTO et MTD par opération ;
7. matrice de tests ;
8. runbook horaire avec retour et correction en avant ;
9. critères de décision continuer, arrêter ou reporter ;
10. registre des copies et des accès ;
11. journal de soutien renforcé après démarrage ;
12. TCO à 12, 36 et 60 mois avec unités et formules ;
13. relevé de décision vierge ;
14. relevé de décision Nova Maintenance rempli.

## Ordre conseillé

### Parcours dirigeant de départ

Si vous avez trente minutes, commencez par trois fichiers vierges :

1. `01-inventaire-dependances-vierge.csv` pour repérer ce qui peut arrêter
   l'activité ;
2. `06-rpo-rto-mtd-vierge.csv` pour faire décider les objectifs de continuité
   par les responsables métier ;
3. `09-decision-stop-go-vierge.csv` pour écrire les preuves et seuils qui
   autorisent ou interdisent la bascule.

Si ces trois fichiers restent vagues, ne fixez pas encore la date. Le mapping,
le journal des lots et le runbook viennent ensuite.

1. Remplissez l'inventaire avant de choisir une méthode de migration.
2. Faites valider le mapping par les personnes qui connaissent les données.
3. Par défaut, désignez une source d'écriture de référence par domaine et par
   période. Si vous retenez une architecture multi-écriture, documentez et
   testez la résolution des conflits, l'idempotence, le rapprochement et sa date
   de fin.
4. Répétez le chargement des dernières écritures avec un lot identifiable.
5. Rapprochez les volumes, montants, liens, pièces et droits.
6. Faites valider RPO, RTO et MTD par les responsables métier, puis testez-les.
7. Faites exécuter les tests par les utilisateurs concernés.
8. Répétez le runbook, y compris le retour et la correction en avant.
9. Décidez à une heure fixée à partir des critères écrits.
10. Conservez la preuve des copies, accès et suppressions.
11. Fermez la période de soutien renforcé avec des critères explicites.

## Règles de sécurité

- N'inscrivez pas de données personnelles, secrets, mots de passe ou jetons dans ce kit.
- Utilisez des identifiants fictifs ou pseudonymisés pendant les essais.
- Les fichiers CSV ne contiennent aucune formule active.
- Conservez les fichiers dans un espace dont les accès sont limités et datés.
- Notez où se trouvent les copies de test, qui peut y accéder et quand elles seront supprimées.
- Une sauvegarde n'est une preuve de retour que si une restauration a été testée.
- Le RPO désigne le point ou la fenêtre temporelle jusqu'où l'entreprise doit
  pouvoir reprendre ; l'écart avec l'incident représente l'âge maximal des
  écritures à reconstruire, que vous pouvez ensuite traduire en nombre
  d'opérations. Un RPO ou un RTO écrit mais jamais mesuré reste une hypothèse.
- Une procédure de retour doit expliquer comment récupérer les écritures acceptées après la bascule.

## Lecture du TCO d'exemple

Les 13 200 € de temps utilisateurs et d'hypercare ne représentent pas six
heures d'arrêt. Ils sont composés de deux postes fictifs distincts :

- 40 utilisateurs × 4 heures planifiées × 55 € = 8 800 € ;
- 2 personnes d'hypercare × 40 heures × 55 € = 4 400 €.

Les jours projet sont aussi décomposés par cadrage, nettoyage et mapping,
intégrations, tests et répétitions, conduite du changement, pilotage et sortie.
Ils restent des hypothèses éditoriales à remplacer, pas des durées de marché.

## À propos de l'exemple Nova Maintenance

Nova Maintenance est fictive. Les valeurs servent uniquement à montrer comment relier les décisions :

- 40 utilisateurs ;
- 2 400 clients ;
- 8 000 dossiers historiques ;
- 300 dossiers ouverts ;
- 220 factures par mois ;
- 5 intégrations ;
- 10 rôles ;
- 50 écritures pendant la dernière heure.

Ces chiffres ne sont ni une moyenne de marché, ni un devis, ni un seuil universel. Remplacez-les par vos propres volumes et vos propres limites.

L'exemple contient volontairement deux portes :

- porte A : 6 h 15, relation 299/300, un rejet non attribué et TST-002 en
  échec, donc STOP ;
- entre les portes : correction, attribution du rejet, LOT-002-R1 puis
  LOT-002-R2 ;
- porte B : 2 h 30, relation 300/300 et zéro rejet non attribué, mais TST-002
  reste en échec, donc STOP.

Le but est de montrer qu'une séquence plus rapide ne compense pas une règle
métier encore inconnue.
