# Giga-audit — `signes-besoin-logiciel-metier`

Date de l’audit : **24 juillet 2026**  
Périmètre : page, OG, entrée du registre, dossier de recherche, manifests P1–P4, qualité de la voix, profondeur économique et opérationnelle, benchmark France/US/UK/Australie/DACH, comparaison à périmètre égal, conversion et preuves techniques.  
Nature : **audit en lecture seule**. Ce rapport est le seul fichier créé dans cette passe ; le guide, son registre et ses manifests n’ont pas été modifiés.

## 1. Verdict exécutif

### Verdict : NO-GO pour un guide de référence complet

La voix est excellente. Le guide commence par une scène que le dirigeant reconnaît, explique qu’un problème d’outil ne signifie pas automatiquement « logiciel sur mesure », et propose six réponses honnêtes : sécuriser, corriger, automatiser, acheter, étudier le spécifique ou observer. Les six options ne sont pas présentées comme une échelle de maturité ; l’action autonome — documenter trois situations réelles — est simple et crédible.

La profondeur reste cependant en dessous de l’ambition « meilleur du Web ». Le guide établit **qu’il faut observer avant de décider**, mais il ne donne pas encore au dirigeant une comparaison économique et opérationnelle assez complète pour choisir entre sécurisation, correction, connexion, standard, low-code, spécifique et observation. Il n’exécute aucun scénario à périmètre égal, ne fournit pas de TCO 12/36/60, ne chiffre pas le coût de l’erreur ou du retard, ne pose pas de seuil stop/go, et traite trop brièvement données, intégrations, continuité, adoption, accessibilité, gouvernance et sortie.

Score actuel : **81/100**.

| Axe | Score | Observation |
|---|---:|---|
| Intention | 10/10 | La question « avons-nous vraiment besoin d’un outil à nous ? » est posée dans les premiers paragraphes. |
| Décision | 9/10 | Six issues honnêtes, dont ne rien développer ; critères encore trop qualitatifs. |
| Pédagogie | 10/10 | Situation vécue, vocabulaire humain, fiche de trois situations, progression nette. |
| Profondeur économique | 6/10 | Aucun scénario chiffré, TCO, marge, coût d’erreur ou seuil de décision. |
| Profondeur opérationnelle | 8/10 | Sécurité, contournements et observation sont utiles ; exploitation, intégration et continuité restent peu détaillées. |
| Preuves | 8/10 | France Num, RGESN, DesignGouv et CNIL bien bornés ; benchmark international et normes d’accessibilité absents. |
| Comparaison | 6/10 | Les options sont énumérées, mais pas comparées à périmètre, données et événements identiques. |
| Originalité | 9/10 | Diagnostic sans score magique et trois situations réelles. |
| Style humain | 10/10 | Plume professionnelle, concrète, non commerciale. |
| Conversion / SEO | 8/10 | CTA honnête et bon maillage, mais ressource et promesse de livrable trop peu tangibles. |

### Sévérités

- **P0 : 0** — aucune promesse de gain, aucun faux cas client, aucun conseil juridique individualisé, aucun prix présenté comme vérité, aucune injonction automatique au sur-mesure.
- **P1 : 12** — manques bloquants pour une décision financière, une comparaison loyale, une automatisation sûre ou une exploitation durable.
- **P2 : 8** — améliorations importantes mais non bloquantes pour la première compréhension.

Le dossier de recherche affirme P3/P4 PASS et 20/20. Ce sont des portes historiques de production, utiles pour la traçabilité, mais elles ne répondent pas au présent audit renforcé : elles n’exécutent pas les scénarios économiques, n’apportent pas le benchmark international demandé et ne testent pas une décision stop/go avec un périmètre constant. Statut conseillé après réécriture : **ready-for-human-review**, pas « meilleur guide » ni promesse de classement.

## 2. Ce qui est réellement réussi

### 2.1. La cible est comprise

Le texte s’adresse à un dirigeant ou responsable opérationnel qui travaille entre fichiers, e-mails, outils standards et mémoire humaine. Il ne suppose pas un vocabulaire de DSI et ne commence pas par une solution technique.

### 2.2. La distinction problème / solution est forte

« Une information recopiée trois fois » ou « un client attend parce que son dossier est dans la boîte mail d’un salarié absent » sont des événements discutables avec l’équipe. C’est plus utile qu’un diagnostic abstrait de « transformation digitale ».

### 2.3. La priorité sécurité est juste

Le guide dit d’abord de sauvegarder, tester la restauration, reprendre les accès et préparer une solution de secours lorsqu’une perte ou une panne peut arrêter l’activité. Les liens CNIL sont bornés : ils ne servent pas à conclure qu’il faut développer.

### 2.4. Les contournements sont interprétés correctement

Le tableur parallèle, le papier, le groupe de messages ou la colonne détournée ne sont pas décrits comme une simple résistance. Ils peuvent signaler une donnée manquante, une exception mal traitée, une attente excessive ou un rôle non défini.

### 2.5. Le livrable autonome est lisible

La fiche de trois situations demande date, résultat attendu, fait observé, personnes/outils, temps, conséquence, contournement, correction tentée, solution standard, stabilité de la règle et secours. C’est une très bonne base pour un premier échange commercial sans forcer le prospect.

### 2.6. Le CTA ne préjuge pas de la vente

Le CTA annonce que Hagnéré peut recommander une correction, une automatisation, un standard, une étude spécifique ou l’attente. Cette phrase doit rester, car elle crédibilise le diagnostic.

## 3. Le manque central : observer n’est pas encore décider

Le guide mène jusqu’à « écrire la prochaine décision en une phrase ». Il manque la preuve intermédiaire qui permet de répondre à la question du dirigeant : **« À partir de quel niveau d’impact et de répétition chaque option devient-elle rationnelle ? »**

Le cadre complet devrait être :

```text
événement → fréquence et variance → coût actif / attente / erreur / retard
→ règle métier et exception → données et intégrations → options à périmètre égal
→ TCO + risque + marge protégée → pilote → mesure → go, stop ou observation
```

Aujourd’hui, le guide s’arrête surtout à l’événement, à la fréquence et à la stabilité. Il ne chiffre ni le coût total, ni la valeur protégée, ni le coût de sortie, ni l’exploitation après la décision.

## 4. P1 à corriger avant un nouveau PASS

### P1-01 — Comparaison à périmètre égal absente

Les six réponses sont présentées séparément, sans le même jeu d’événements, les mêmes personnes, les mêmes données et le même horizon. Le lecteur ne peut pas comparer « corriger Excel » avec « connecter deux outils », un standard, un low-code ou un spécifique.

**Correction :** construire une matrice commune sur 12 mois et 60 mois : sécuriser, corriger/configurer, connecter, standard, low-code, spécifique, observer. Utiliser les mêmes trois situations, les mêmes fréquences, les mêmes exceptions et le même niveau de continuité.

### P1-02 — Aucun TCO 12/36/60

Le dossier classe le budget détaillé et le ROI hors périmètre, mais le lecteur doit pourtant savoir si une décision mérite d’être étudiée. Le prix initial seul ne permet pas de comparer : paramétrage, migration, intégrations, formation, licences, hébergement, maintenance, temps interne, incidents et sortie manquent.

**Correction :** inclure un calcul pédagogique de TCO 12/36/60, clairement fictif, séparant initial, récurrent, variable, temps interne, coût d’incident et sortie. Lier au guide ROI pour l’analyse approfondie, mais ne pas laisser ce guide sans aucune échelle économique.

### P1-03 — Coût de l’erreur, du retard et de la marge non mesuré

Le guide demande de relever une erreur, un retard, une perte ou un mécontentement, mais n’explique pas comment les valoriser. Un dirigeant a besoin de distinguer capacité interne, marge réellement perdue, trésorerie retardée, pénalité applicable, reprise manuelle et risque non chiffré.

**Correction :** ajouter :

```text
coût observable d’un événement = heures actives + heures d’attente
                              + personnes interrompues
                              + reprise/correction + coût externe
                              + marge ou encaissement réellement retardé
```

Les montants inconnus restent une ligne séparée. Ne jamais assimiler chiffre d’affaires retardé et perte définitive.

### P1-04 — Fréquence, variance et exceptions trop peu instrumentées

« Choisissez une semaine représentative » est utile, mais une seule semaine peut masquer saison, fin de mois, pic d’absences, changement de fournisseur ou cas exceptionnel. La page ne propose pas de distinguer médiane, maximum, distribution, taux d’exception et événement rare mais critique.

**Correction :** observer au minimum une période normale et une période tendue ; noter nombre d’événements, délai médian, p95 ou maximum lorsque la décision le justifie, taux de reprise et nombre d’exceptions. Pour un événement rare critique, garder une ligne de risque même avec zéro occurrence observée.

### P1-05 — Baseline événementielle insuffisante

Les trois fiches sont qualitatives. Elles ne demandent pas d’identifiant d’événement, état avant/après, heure de début/fin, responsable, données manquantes, règle attendue, cause, résultat de la correction et preuve. Sans baseline, impossible de démontrer un gain après un pilote.

**Correction :** rendre la fiche exploitable comme registre : `id`, date/heure, processus, volume, personnes, état initial, action, résultat attendu, résultat observé, erreur, temps actif, attente, coût, solution de secours, source, preuve, statut.

### P1-06 — Règles métier, exceptions et responsabilité restent trop générales

Le guide demande une règle stable, mais ne montre pas comment versionner une règle, gérer son exception, nommer l’arbitre et faire expirer un contournement. Une automatisation peut figer une mauvaise décision si la règle change.

**Correction :** pour chaque règle : source, version/date d’effet, condition, exception, priorité, personne habilitée à déroger, durée de l’override, trace, test positif/négatif et date de revalidation.

### P1-07 — Données et intégrations sont mentionnées, pas comparées

Les outils, fichiers et personnes sont listés ; les interfaces, sources de vérité, identifiants, doublons, événements en retard, erreurs de synchronisation, reprise manuelle, exports et propriétaire de correction ne sont pas traités.

**Correction :** ajouter une carte d’intégration minimale : source, destination, champ, fréquence, clé, sens, propriétaire, erreur, rejeu, journal, donnée personnelle, suppression et test de rupture. Une connexion n’est pas « automatisée » tant que l’échec n’a pas une procédure.

### P1-08 — RGPD, sécurité et accès restent limités au premier secours

Les sauvegardes et habilitations sont bien signalées, mais un outil métier contient souvent clients, salariés, montants, pièces, historiques et parfois données sensibles. Manquent finalité, minimisation, rétention, accès par rôle, sous-traitant, chiffrement, export, suppression, journal, AIPD et transferts.

**Correction :** une fiche « données avant logiciel » et une « fiche d’accès » ; inclure les rôles, l’accès de secours, la revue périodique et la suppression. La CNIL du 9 juillet 2026 rappelle justification/proportionnalité, information et cycle de vie ; ne pas transformer ces principes en certification automatique.

### P1-09 — Continuité, SLA, RPO/RTO et exploitation manquent

Le guide dit de préparer une solution manuelle et de tester la restauration, mais ne demande pas combien de temps l’activité peut être interrompue, combien de données peuvent être perdues, qui répond, dans quels horaires, avec quel délai de restauration et quel test.

**Correction :** pour chaque option, comparer heures couvertes, gravité, réponse, rétablissement, astreinte, sauvegarde, RPO, RTO, procédure dégradée, surveillance et preuve annuelle. Une petite correction bien supportée peut être préférable à un spécifique sans capacité d’exploitation.

### P1-10 — Adoption, gouvernance et accessibilité non mesurées

Le guide recommande d’impliquer les salariés, mais ne prévoit pas pilote, rôles, sponsor, responsable produit, formation, support, taux d’usage, retours, accessibilité et version imprimée. Un outil qui n’est pas compris ou utilisable par un salarié en situation de handicap devient un contournement supplémentaire.

**Correction :** intégrer un pilote sur un processus, critères d’adoption, plan de formation, support, revue J+30/J+90, tests clavier/contraste/lecteur d’écran et documentation des rôles. Le RGAA 4.1.2 reste la référence française technique consultée ; ne pas déclarer conformité sans audit.

### P1-11 — Migration et sortie sont évoquées mais non exécutables

La page dit de vérifier reprise et possibilité de partir, sans demander format d’export, relations, pièces jointes, historique, règles, comptes, code, documentation, double fonctionnement, retrait des accès et preuve de suppression.

**Correction :** une checklist de migration et sortie, avec export test avant achat, données de test, période de double run, validation, procédure de rollback, propriété des données et coût à l’horizon de 60 mois.

### P1-12 — Aucun pilote stop/go avec seuils explicites

La phrase de prochaine décision est utile, mais « observer encore » n’a pas de date ou de seuil, et les cinq autres options n’ont pas de critères chiffrés. Le lecteur peut continuer à observer indéfiniment ou acheter un logiciel sur une impression.

**Correction :** proposer un pilote de 2 à 4 semaines, trois situations, une période normale et une période tendue, puis un tableau stop/go : incident critique non restaurable = stop ; taux de ressaisie sous seuil = garder/corriger ; règles stables non couvertes après test = étudier ; usage inférieur ou processus instable = reporter.

## 5. P2 à traiter dans la même réécriture

| ID | Manque | Correction |
|---|---|---|
| P2-01 | Ressource téléchargeable absente | Transformer la fiche en modèle Markdown/CSV/XLSX versionné, avec un exemple fictif et une version vide. |
| P2-02 | Glossaire de TCO, marge, p95, SLA, RPO/RTO et AIPD absent | Traduire chaque terme à sa première occurrence, avec une question métier. |
| P2-03 | Pages d’éditeurs et solutions standard non benchmarkées | Ajouter Microsoft Shifts, Google Calendar, Power Apps/Dataverse, Odoo et au moins un outil métier ; citer leurs propres limites. |
| P2-04 | RGESN traité comme une idée générale | Relier l’évaluation du besoin à utilité, ressources, performance, maintenance et fin de vie ; ne pas présenter le RGESN comme obligation privée universelle. |
| P2-05 | Accessibilité non mentionnée | Ajouter RGAA 4.1.2, clavier, contraste, mobile, lecteur d’écran et usage par personnes peu équipées. |
| P2-06 | CTA trop peu tangible | Dire ce que l’échange produit et ce qui n’est pas promis. |
| P2-07 | FAQ économique courte | Ajouter « combien prévoir », « quand arrêter », « qui porte la maintenance », « que se passe-t-il si le référent part ». |
| P2-08 | Revue de sources ancienne | La page indique des sources consultées le 21 juillet 2026 ; rafraîchir le dossier et les liens au moment de la réécriture. |

## 6. Benchmark officiel et concurrentiel

### 6.1. France

- **France Num — automatiser les tâches et processus** : méthode d’observation, fréquence, durée, personnes, exceptions, test et entretien. C’est une source de méthode, pas une preuve de ROI.
- **France Num — Guide numérique des entreprises 2026** : choix, accompagnement, sécurité et conduite du changement. À utiliser pour élargir le coût d’adoption et d’exploitation.
- **RGESN 2024, version 2 (mise à jour 28 mai 2024)** : <https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/>. L’évaluation de l’utilité avant conception, le référent, les revues régulières, la performance et la fin de vie renforcent la réponse « corriger ou ne pas développer ».
- **DesignGouv — bien concevoir un service numérique** : <https://design.numerique.gouv.fr/bien-concevoir/>. Identifier les besoins, tester avec de vrais utilisateurs, piloter par l’impact, définir les rôles et fermer un service devenu inutile.
- **RGAA 4.1.2** : <https://accessibilite.numerique.gouv.fr/>. Référence technique française, 106 critères ; ne pas déclarer conformité sans audit et ne pas transposer automatiquement les obligations publiques à toute PME.
- **CNIL** : habilitations, sauvegarde, continuité/reprise et contrôle de l’activité. Les pages donnent des pratiques de sécurité et de protection des données, pas un choix de logiciel.

### 6.2. États-Unis

- **NIST SP 800-34 Rev. 1** : <https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final>. Guide officiel de continuité et analyse d’impact ; publié en 2010, à utiliser pour structurer criticité, priorités et reprise, pas comme règle actuelle universelle.
- **Google Calendar — disponibilité multi-calendriers** : <https://support.google.com/calendar/answer/16287054?hl=en>. Le calendrier sait vérifier des événements occupés ; il ne remplace pas un moteur de règles, de compétences ou de validation métier.
- **Microsoft Teams Shifts** : <https://support.microsoft.com/en-us/teams/free/schedule-staff-shifts>. Shifts documente équipes, shifts, publication, notifications, absences et échanges ; vérifier édition, licence, multi-sites et limites avant comparaison.

### 6.3. Royaume-Uni

- **GOV.UK — live phase** : <https://www.gov.uk/service-manual/phases/live/>. Un service doit être soutenable, mesuré, sécurisé, disponible et maintenu ; le coût après mise en ligne doit entrer dans le diagnostic.
- **GOV.UK — measuring service benefits** : <https://www.gov.uk/service-manual/measuring-success/measuring-service-benefits>. Les bénéfices doivent être mesurés contre une prévision avec utilisateurs, données et métriques ; cela justifie la baseline avant pilote.
- **NCSC — decommissioning assets** : <https://www.ncsc.gov.uk/guidance/decommissioning-assets>. Sauvegarde, rollback, remplacement avant action irréversible et preuve de suppression ; angle de sortie à ajouter.

### 6.4. Australie

- **ASD/ACSC — guidelines for system management**, publié/mis à jour le 9 juin 2026 : <https://www.cyber.gov.au/business-government/asds-cyber-security-frameworks/ism/cyber-security-guidelines/guidelines-for-system-management>. Registre logiciel, patch management, fin de support, procédures d’administration et restauration. C’est un benchmark de pratiques pour grandes organisations/gouvernements australiens, pas un niveau réglementaire français pour une TPE.

### 6.5. Allemagne/DACH

- **BSI — Secure use of cloud services** : <https://www.bsi.bund.de/EN/Themen/Unternehmen-und-Organisationen/Informationen-und-Empfehlungen/Empfehlungen-nach-Angriffszielen/Cloud-Computing/Sichere-Nutzung/sichere-nutzung.html>. Stratégie, migration, disponibilité, autorisations, formation, tests et expiration du contrat ; parfait pour développer la partie sortie et coût de transition. Revalider manuellement si le site bloque l’extraction automatique.

### 6.6. Comparaison concurrentielle par couverture

Les concurrents servent ici à repérer les réponses promises, jamais à importer des prix ou des gains : éditeurs ERP/planning promettent centralisation et workflows ; agences de sur-mesure promettent adaptation ; pages low-code promettent vitesse et connexions ; aucun angle observé ne réunit baseline événementielle, TCO, coût d’erreur, continuité, adoption et sortie sur le même périmètre. C’est la possibilité de différenciation du guide.

## 7. Comparaison à périmètre égal à intégrer

Périmètre fictif commun : une PME traite 3 600 événements par an, 12 personnes touchent le processus, deux outils sont aujourd’hui utilisés, trois cas réels sont observés, un incident critique et deux périodes tendues doivent être couverts. Le scénario est pédagogique et ne décrit aucun client.

| Option | Ce qu’elle résout | Limite à tester | Coût initial fictif | Récurrent annuel | Temps interne annuel | TCO 12 mois |
|---|---|---|---:|---:|---:|---:|
| Sécuriser/corriger | Accès, sauvegarde, procédure, configuration | Le problème de fond reste manuel | 2 400 € | 1 200 € | 4 050 € | **7 650 €** |
| Connecter | Ressaisie et données dispersées | Erreurs d’API, rejeu, source de vérité | 9 000 € | 2 400 € | 2 700 € | **16 100 €** |
| Standard | Fonctions courantes, support éditeur | Paramétrage, licence, règles atypiques | 6 000 € | 8 400 € | 6 500 € (migration/formation incluse) | **20 900 €** |
| Low-code | Formulaire, workflow, rôles, connexion | Licences, gouvernance et limites offline | 18 000 € | 4 800 € | 8 700 € (migration/formation incluse) | **31 500 €** |
| Spécifique | Processus stable mal couvert | Maintenance, dépendance, sortie | 55 000 € | 14 400 € | 9 800 € (migration/formation incluse) | **79 200 €** |
| Observer | Aucune immobilisation immédiate | Le coût et le risque continuent | 0 € | 0 € | 4 050 € | **4 050 €** |

Pour rendre le tableau comparable, les montants de migration/formation sont inclus dans le temps interne des lignes standard, low-code et spécifique. Le guide final doit afficher les colonnes séparées pour éviter cette lecture ambiguë.

### TCO 12/36/60 proposé

| Option | TCO 12 mois | TCO 36 mois* | TCO 60 mois* |
|---|---:|---:|---:|
| Sécuriser/corriger | 7 650 € | 18 150 € | 28 650 € |
| Connecter | 16 100 € | 26 300 € | 36 500 € |
| Standard | 20 900 € | 50 700 € | 80 500 € |
| Low-code | 31 500 € | 58 500 € | 85 500 € |
| Spécifique | 79 200 € | 127 600 € | 176 000 € |
| Observer | 4 050 € | 12 150 € | 20 250 € |

`*` TCO 36/60 = TCO année 1 + deux/quatre années de récurrent et de temps interne, sans inflation, nouvel incident, nouvelle évolution ni coût de sortie. Contrôles : standard 20 900 + 2 × (8 400 + 6 500) = 50 700 ; low-code 31 500 + 2 × (4 800 + 8 700) = 58 500 ; spécifique 79 200 + 2 × (14 400 + 9 800) = 127 600 et 79 200 + 4 × (14 400 + 9 800) = 176 000. Les coûts de sortie restent à ajouter séparément à l’année de départ. Cette vérification illustre pourquoi chaque scénario doit être recalculé par une seconde personne avant publication.

### Coût d’un événement

Exemple fictif : 8 personnes interrompues 2 heures à 45 €/h = **720 € de capacité interne**, hors marge retardée, pénalité ou client perdu. Dix occurrences annuelles donnent 7 200 € de capacité observée ; cela ne prouve pas que cette somme devient une économie de trésorerie. Elle peut être réaffectée, évitée ou simplement mieux mesurée.

## 8. Baseline, pilote et seuils stop/go

### Baseline événementielle

Ajouter un registre avant toute décision :

```text
id, date, processus, volume, personnes, état initial, action,
résultat attendu, résultat observé, temps actif, attente, interruption,
erreur, retard, marge/encaissement affecté, règle, exception,
outil/source, preuve, solution de secours, coût, responsable
```

Mesurer une période normale et une période tendue. Garder les événements rares et critiques à part, même s’ils n’apparaissent pas dans la moyenne.

### Pilote de 2 à 4 semaines

1. sécuriser données, accès et secours ;
2. choisir trois situations représentatives et un cas critique ;
3. tester l’outil actuel, un standard et, si nécessaire, une connexion ou un low-code ;
4. mesurer temps, erreurs, attentes, exceptions, usage, support et restauration ;
5. faire valider le résultat par les futurs utilisateurs ;
6. prendre une décision datée, avec propriétaire et date de revue J+30/J+90.

### Seuils proposés

- **Stop immédiat** : perte non restaurable, accès excessif, donnée personnelle exposée, absence de responsable, ou incident critique sans procédure de secours.
- **Corriger/sécuriser** : le même outil réussit après configuration et formation, avec un coût inférieur et une preuve de contrôle.
- **Connecter** : les outils couvrent déjà le processus, mais une ressaisie fréquente et mesurable crée l’essentiel du coût.
- **Acheter** : un standard couvre les cas critiques, avec adoption, licence, maintenance et sortie acceptables.
- **Étudier le spécifique** : au moins deux règles stables, fréquentes et critiques restent impossibles après test raisonnable ; sponsor, budget d’exploitation et sortie sont nommés.
- **Observer** : problème rare, temporaire ou instable ; date de revue obligatoire et seuil d’escalade écrit.

Ces seuils sont des critères de gouvernance illustratifs, non des normes de marché.

## 9. Réécriture éditoriale recommandée

### Ouverture à conserver, mais avec une promesse économique ajoutée

La première partie est déjà humaine. Ajouter après « peut-être » :

> Vous ne cherchez pas seulement à savoir si un outil serait plus confortable. Vous devez savoir ce que coûte aujourd’hui l’erreur, ce que coûterait le changement et ce qui doit rester possible en cas de panne. Nous allons comparer les réponses sur les mêmes événements, puis décider si un pilote ou une observation suffit.

### Progression cible

1. La scène et le risque immédiat.
2. Sécuriser avant d’automatiser.
3. Registre événementiel et baseline.
4. Variance, exceptions et règle métier.
5. Comparaison égale des sept options.
6. Données, intégrations, RGPD et accès.
7. Continuité, support, RPO/RTO et sortie.
8. TCO 12/36/60 et coût d’erreur.
9. Pilote, seuils stop/go et revue J+30/J+90.
10. Fiche téléchargeable et CTA.

### Opinion professionnelle à trancher

> « Nous ne recommandons pas un logiciel parce qu’une équipe souffre d’une procédure. Nous recommandons une solution quand l’événement est fréquent ou critique, la règle est compréhensible, les données sont disponibles, le coût de l’erreur est mesuré et quelqu’un peut exploiter le résultat. Sinon, une correction, une connexion ou une observation datée est souvent une meilleure décision. »

Cette opinion doit être suivie par la baseline et le seuil choisi ; elle ne doit pas rester une phrase de marque.

## 10. Conversion et livrable

Le CTA est bon, mais le prospect doit savoir ce que l’échange produit :

- **À apporter** : trois situations datées, fréquence, temps, conséquence, outils, règle, secours et corrections déjà essayées.
- **À recevoir** : la première action recommandée, les inconnues, les tests à faire, un périmètre éventuel et le risque de ne rien changer.
- **Non promis** : un ROI garanti, un logiciel spécifique obligatoire, une conformité juridique automatique ou un prix ferme sans données.

La fiche doit devenir un téléchargement libre (Markdown + CSV/XLSX) sans formulaire obligatoire. Elle peut alimenter le CTA ensuite, mais ne doit pas être présentée comme un audit complet ni conserver de données sensibles sans instruction claire.

## 11. Audit technique, faits et manifests

### 11.1. Hachages observés

| Fichier | SHA-256 |
|---|---|
| `src/app/guides/signes-besoin-logiciel-metier/page.tsx` | `20a72b8beef923889f2920693e83bca037254fc1461f66c9013b0d26d51523bd` |
| `src/app/guides/signes-besoin-logiciel-metier/opengraph-image.tsx` | `0a86833221ba684bdb46353aed7443e06fcdd1cf7a510d9fb78409eecc6553e8` |
| `src/lib/guides.ts` | `8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09` |
| `docs/research/signes-besoin-logiciel-metier.md` | `d01758d235feca391ab20fbfdb93a0945068d88fe36414bc13fc70b92a132fd9` |

### 11.2. Architecture actuelle

- Metadata Next.js, canonique, Article et BreadcrumbList présents.
- Aucun `FAQPage`, `HowTo`, `Offer`, avis ou `wordCount` déclaré.
- OG déclaré 1 200 × 630, avec titre centré sur les six réponses.
- H1 unique, sommaire, six cartes de décision, huit FAQ et un CTA final.
- La fiche est visible dans le HTML, mais aucun téléchargement réel n’est lié.
- L’URL locale et l’état robots doivent être vérifiés dans le build final ; un `noindex` local ne prouve ni publication ni indexation.

### 11.3. Manifests

Les manifests P1–P4 sont des snapshots historiques et ne correspondent plus nécessairement aux fichiers actuels. Le dossier P4 affirme un PASS individuel et un gel commun, mais les hachages courants de la page, du registre et du dossier doivent être reconstitués après réécriture. Aucun ancien PASS ne vaut preuve de la nouvelle version.

### 11.4. Sources et fraîcheur

La page indique « sources consultées le 21 juillet 2026 ». Les liens France Num, RGESN, DesignGouv et CNIL restent pertinents, mais les fonctions éditeur, la législation, l’accessibilité et la sécurité doivent être revalidées à la date de chaque nouvelle passe. La CNIL du 9 juillet 2026 est plus récente que les anciennes fiches sauvegarde/continuité ; elle doit être ajoutée au dossier si l’on parle de surveillance ou de données salariés.

### 11.5. QA à rejouer

Le dossier P4 affirme tests SEO, TypeScript, ESLint, build et largeurs 320/390/768/1 024/1 440 px. Cet audit n’en fait pas une preuve indépendante. Après réécriture, rejouer route/HTML, canonique, OG, JSON-LD, console, thème clair/sombre, clavier, contraste, téléchargement, cinq largeurs, build et manifest global.

## 12. Plan de réécriture par les quatre passes

### P1 — Recherche

- Rafraîchir les requêtes et distinguer diagnostic, automatisation, ERP, Excel, standard, low-code et sur-mesure.
- Ajouter France Num, CNIL, RGESN, DesignGouv, RGAA, NIST, GOV.UK, NCSC, ASD/ACSC, BSI, Microsoft, Google et Odoo avec portée et limites.
- Définir l’événement de référence et les scénarios économiques égaux.
- Documenter les faits volatils et les règles de non-invention.

### P2 — Rédaction

- Conserver la voix et les six options.
- Ajouter baseline, variance, exceptions, TCO, coût d’erreur/marge/retard, données, intégrations, RGPD, sécurité, accessibilité, continuité, adoption, migration et sortie.
- Ajouter matrice égale, trois scénarios, seuils et pilote.
- Créer la ressource téléchargeable et rendre le CTA concret.

### P3 — Contre-audit

- Recalculer chaque scénario et chaque horizon ; vérifier le contrôle inverse.
- Exécuter les mêmes événements dans les sept options.
- Vérifier sources, dates, licences, portée juridique, accessibilité et limites éditeur.
- Rechercher tout gain, ROI, conformité, disponibilité ou promesse implicite.
- Fermer la porte si un P1 reste ouvert.

### P4 — Plume et QA

- Lecture par un dirigeant non technique qui n’a pas vu le dossier.
- Chaque H2 doit répondre à une question et déboucher sur une action observable.
- Tests navigateur, clavier, contraste, téléchargement et cinq largeurs.
- Nouveau manifest exact ; statut `ready-for-human-review` jusqu’à revue humaine consignée.

## 13. Seuil de sortie

Le guide pourra obtenir GO seulement si :

- P0 = 0 et P1 = 0 ;
- score ≥ 90/100, avec intention, décision, pédagogie, profondeur, preuve et comparaison ≥ 9/10 ;
- sept options comparées à périmètre égal (sécuriser, corriger/configurer, connecter, standard, low-code, spécifique, observer) ;
- baseline événementielle sur période normale et tendue ;
- TCO 12/36/60, coût d’erreur, marge/retard et scénarios contrôlés ;
- données, intégrations, RGPD, sécurité, RGAA/accessibilité, continuité, adoption, gouvernance, migration et sortie documentés ;
- sources officielles françaises et benchmarks US/UK/AU/DACH datés et bornés ;
- pilote stop/go et revue J+30/J+90 ;
- ressource téléchargeable testée ;
- QA réelle et manifest final exacts ;
- revue humaine indépendante consignée.

**Conclusion : conserver la plume et le principe des six réponses. Ajouter la preuve économique et opérationnelle qui transforme un bon diagnostic en décision défendable : événement mesuré, comparaison égale, coût complet, valeur protégée, pilote et sortie.**
