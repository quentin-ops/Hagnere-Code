# Giga-audit — `logiciel-planning-sur-mesure`

Date de l’audit : **24 juillet 2026**  
Périmètre : page du guide, OG, entrée de registre, dossier de recherche, manifests P1–P4, qualité rédactionnelle, profondeur métier, faits et calculs, benchmark France/US/UK/Australie/DACH, options papier/Excel/calendrier/standard/low-code/spécifique, conversion et vérifications techniques.  
Nature : **audit en lecture seule**. Ce document est le seul fichier créé dans cette passe ; aucune source du guide, aucun registre et aucun manifest n’a été modifié.

## 1. Verdict exécutif

### Verdict : NO-GO pour un guide de référence sur le planning d’entreprise

Le guide est bien écrit et possède une idée forte : faire tester quinze conflits identiques dans l’outil actuel et deux standards avant d’acheter un développement. Il parle à un dirigeant, accepte explicitement de conserver Excel ou de ne rien développer, sépare règles obligatoires et préférences, demande une version publiée et rappelle correctement que le droit social et la géolocalisation ne se codent pas à partir d’un résumé.

Ce n’est toutefois pas encore un guide « meilleur du meilleur ». Il aide surtout à décider **s’il faut développer** ; il ne permet pas encore de décider **quel dispositif de planification est économiquement et opérationnellement soutenable**, avec quel niveau de service, quelles garanties de reprise, quelles règles de sécurité, quel coût d’erreur et quelle trajectoire de sortie. La comparaison reste essentiellement qualitative et centrée sur le moteur de planning. Les options très présentes chez la cible — Microsoft Teams Shifts, Google Calendar, Power Apps/Dataverse, suite ERP/RH et low-code — ne sont pas traitées sur un périmètre égal.

Score actuel : **79/100**.

| Axe | Score | Constats |
|---|---:|---|
| Intention de recherche | 9/10 | La question « Excel ou standard ou spécifique ? » est claire dès l’ouverture. |
| Décision dirigeant | 8/10 | Cinq verdicts utiles, mais pas de seuils chiffrés ni de scénario stop/go. |
| Pédagogie | 9/10 | Scène concrète, règles/préférences, quinze conflits et progression lisible. |
| Profondeur métier | 7/10 | Absences, compétences et versions sont bien abordées ; rotations, sites, équipes, exceptions, capacité et optimisation explicable manquent. |
| Preuves et actualité | 7/10 | CNIL et Service-Public sont solides ; preuves produit fournisseurs, sécurité et international insuffisants. |
| Comparaison | 6/10 | Test à quinze cas annoncé mais non exécuté avec tableau égal, coût et limites par option. |
| Originalité | 8/10 | Le jeu de conflits et le refus du développement automatique sont différenciants. |
| Style humain | 9/10 | Voix honnête, vocabulaire accessible, pas de faux client ni de promesse de gain. |
| Conversion | 8/10 | CTA cohérent ; le livrable et le déroulé de l’accompagnement restent abstraits. |
| SEO et architecture | 8/10 | Slug, méta, maillage, OG, Article et BreadcrumbList corrects ; manque de sous-intentions et de preuves originales. |

### Sévérités

- **P0 : 0** — aucune promesse factuellement dangereuse, aucun faux témoignage, aucun résultat client, aucun prix inventé comme prix de marché, aucune règle sociale présentée comme conseil personnalisé.
- **P1 : 13** — manques bloquants pour une comparaison fiable, un budget complet, une automatisation sûre ou une véritable profondeur métier.
- **P2 : 8** — améliorations importantes mais non bloquantes pour comprendre l’idée principale.

Le dossier de recherche indique un score P4 de 19/20 et un statut « publiable ». Ce constat historique ne suffit pas à valider le standard renforcé demandé dans le présent audit : il ne remplace ni un benchmark égal des solutions, ni des scénarios chiffrés, ni une preuve humaine indépendante. Le statut recommandé ici est **ready-for-human-review après réécriture**, pas « guide définitif ».

## 2. Ce qui fonctionne déjà

### 2.1. Une vraie scène de dirigeant

L’absence du lundi à 7 h 30, les quatre appels, le véhicule déplacé et l’ancienne version qui circule rendent le problème immédiatement compréhensible. C’est beaucoup plus efficace qu’une ouverture par « ordonnancement » ou « moteur d’optimisation ».

### 2.2. Une réponse courte et honnête

Le guide dit de tester quinze conflits avant de financer le développement. Il autorise quatre options réalistes : sécuriser l’existant, acheter un standard, connecter un standard ou développer, avec un cinquième verdict de report. Il rappelle que le sur-mesure applique des décisions explicites ; il ne définit pas ce qu’est un « bon » planning.

### 2.3. Le vocabulaire de règles est utile

La distinction entre contrainte obligatoire (« habilitation et véhicule nécessaires ») et préférence (« garder l’équipe habituelle ») est la meilleure partie pédagogique. L’idée d’un cas qui passe, d’un cas bloqué, d’une exception et d’un validateur est exploitable dans un cahier des charges.

### 2.4. Les quinze cas couvrent déjà plusieurs sources de conflit

Chevauchement, absence, compétence, équipement, capacité, urgence, trajet, préférence, changement, brouillon publié, notification, SIRH, ERP, historique et retour arrière sont une bonne première batterie de tests. L’avertissement « un cas quotidien et bloquant peut écarter une solution qui réussit quatorze cas » est juste.

### 2.5. La page ne pousse pas artificiellement le spécifique

Elle affirme qu’Excel peut suffire, qu’une intégration peut régler le problème et que le standard peut rester le moteur. Cette neutralité augmente la confiance et doit être conservée dans toute réécriture.

### 2.6. Les précautions sociales sont bien bornées

Les liens Service-Public et CNIL ne sont pas utilisés pour déclarer une conformité automatique. Le texte recommande une validation RH/juridique/DPO. La CNIL, dans sa page du 9 juillet 2026 sur le contrôle de l’activité, rappelle justification, proportionnalité, information, consultation des instances lorsque nécessaire et cycle de vie des données. Le guide doit toutefois reprendre ces éléments dans une checklist concrète, pas seulement dans un avertissement.

## 3. Ce que la page laisse encore dans l’ombre

Le guide donne l’impression que quinze scénarios suffisent à choisir un produit. En pratique, un planning d’entreprise est un système socio-technique :

```text
demande → données de disponibilité → règles impératives → préférences
→ proposition ou affectation → arbitrage humain → validation → publication
→ notification → exécution → correction urgente → historique → mesure
→ maintenance, reprise et sortie
```

La page couvre correctement le milieu (règles, versions, données) mais peu les extrémités : coût et valeur avant la décision, exploitation après mise en ligne, reprise en cas de panne, adoption des équipes, sécurité des données salariés et départ du fournisseur.

## 4. P1 à corriger avant un nouveau PASS

### P1-01 — Comparaison à périmètre égal absente

Le lecteur doit comparer **papier, Excel partagé, calendrier, outil standard, low-code et spécifique**, pas seulement « outil actuel, deux standards ou développement ». Le guide ne donne aucune grille avec les mêmes quinze scénarios, la même équipe, les mêmes sites, les mêmes données, le même horizon et le même niveau de service.

**Correction :** une matrice unique avec colonnes : couverture des règles, partage et publication, absences, compétences, multi-site, intégrations, mobile/hors-ligne, audit, RGPD, SLA/RPO/RTO, coût initial, coût récurrent, coût d’évolution, réversibilité, charge interne, adoption. Ajouter une ligne « aucune solution » quand le processus reste simple.

### P1-02 — Scénarios chiffrés et TCO 12/36/60 manquants

La formule « coût sur 36 mois » est correcte mais sans chiffres. La page ne montre pas le seuil où un classeur devient plus coûteux qu’un standard, ni celui où le spécifique devient rationnel. Le dirigeant ne peut pas comparer licences, paramétrage, intégrations, formation, maintenance, temps du planificateur et sortie.

**Correction :** trois scénarios fictifs à périmètre égal (simple, multi-équipe, contraintes critiques), avec TCO 12/36/60, hypothèses et exclusions. Le TCO doit distinguer investissement initial, récurrent, variable, coûts d’incident et coût de sortie. Ne pas présenter les montants comme tarifs de marché.

### P1-03 — Règles de planning insuffisamment complètes

Les quinze conflits ne couvrent pas les contraintes qui font échouer les projets réels : temps partiel, pauses, repos, amplitudes, astreintes, rotations, cycles, équipes de nuit, compétences expirées, habilitations multiples, sous-traitants, indisponibilités récurrentes, fenêtres d’ouverture, travail simultané, tâches fractionnées, priorité entre sites et continuité de service.

**Correction :** ajouter une fiche par règle avec source, version/date d’effet, niveau (bloquante, avertissement, préférence), données nécessaires, exception, autorité d’override, test positif/négatif et plan de revalidation. Les règles de droit du travail doivent rester bornées au contexte et faire l’objet d’une validation compétente.

### P1-04 — Multi-sites, fuseaux horaires et équipes insuffisants

Le trajet entre deux sites est évoqué, mais pas le planning multi-sites : équipes locales, temps de déplacement, fuseaux horaires, calendriers fériés par site, capacité partagée, renfort inter-agences, changement de véhicule ou de dépôt et règles de priorité. Une entreprise peut réussir les quinze cas et échouer dès qu’elle ouvre un second site.

**Correction :** scénarios multi-sites avec capacité partagée, changement de fuseau, jour férié distinct et renfort temporaire ; expliquer si le calcul est exact, heuristique ou laissé à l’arbitrage humain.

### P1-05 — Optimisation sans boîte noire non traitée

Le guide dit à raison qu’un logiciel n’optimise pas automatiquement. Il ne demande pas toutefois : quel objectif est optimisé, dans quel ordre, avec quelles pondérations, que se passe-t-il si aucune solution ne respecte toutes les règles, quelles alternatives sont proposées, comment l’utilisateur modifie le résultat et comment l’algorithme explique un refus.

**Correction :** distinguer affectation par règles, proposition heuristique et optimisation. Demander une fonction objectif mesurable (retard, kilomètres, heures supplémentaires, équité, changement tardif), un poids explicite, une explication de l’infeasibility et un override tracé. Interdire « planning optimisé » sans métrique avant/après.

### P1-06 — Overrides et audit trail trop superficiels

Les états brouillon/validé/publié et le retour arrière sont bien posés, mais il manque une matrice de rôles et une trace complète : qui peut créer, valider, publier, modifier une règle, forcer une contrainte, exporter, corriger une absence, annuler une publication et supprimer une donnée ? La page ne distingue pas historique métier, journal technique et preuve d’information du salarié.

**Correction :** un tableau rôles/actions/approbation/trace/rétention, avec un scénario d’override : motif, personne autorisée, impact, notification, date d’expiration et revue.

### P1-07 — Intégrations RH/paie/ERP non opérationnalisées

Le guide dit de choisir une source de vérité et de tester doublons/suppressions. Il ne traite pas le mapping champ à champ, les identifiants, les événements en retard, l’idempotence, le rejeu, les erreurs partielles, le backfill, les changements de contrat, les absences corrigées rétroactivement, les exports vers la paie et les responsabilités de correction.

**Correction :** ajouter un contrat d’échange : source, destination, fréquence, clé, sens, propriétaire, validation, erreur, reprise, journal, données personnelles, et test d’un même événement reçu deux fois. Une API fournisseur n’est pas une intégration livrée.

### P1-08 — Mobile et hors-ligne absents du périmètre décisionnel

Le guide renvoie l’hors-ligne au guide des interventions terrain, alors qu’un planning concerne souvent des salariés en mobilité. Il ne demande pas si l’équipe doit consulter ou modifier sans réseau, si les données sont mises en cache, comment les conflits de synchronisation sont résolus, si la dernière version est identifiable et si une photo/signature est hors sujet.

**Correction :** préciser deux profils : consultation mobile du planning et saisie/modification hors ligne. Pour chaque option, tester dernière synchronisation, conflit, reprise et visibilité de version. Power Apps documente l’offline Dataverse, la synchronisation et des limites (relations, volume, fonctions) : c’est un bon benchmark low-code, pas une preuve de convenance.

### P1-09 — Données salariés/RGPD traitées trop étroitement

La géolocalisation est correctement prudente, mais un planning contient déjà identité, horaires, absence, compétence, site, équipe, parfois motif d’absence et données de paie. La page ne couvre pas minimisation, base/finalité, durée de conservation, accès par rôle, sous-traitants, transferts, chiffrement, export, droit d’accès, AIPD éventuelle et suppression.

**Correction :** une fiche « données du planning » : données nécessaires, finalité, acteurs, accès, conservation, journal, hébergement, sous-traitant et suppression. Rappeler que la CNIL du 9 juillet 2026 demande une analyse de nécessité/proportionnalité et que la surveillance constante est en général excessive ; borner le conseil au contexte français.

### P1-10 — SLA, RPO/RTO et exploitation non chiffrés

Un planning bloqué à 6 h peut empêcher une équipe de partir. Aucun scénario ne demande le niveau de service : heures couvertes, gravité, délai de prise en charge, délai de rétablissement, astreinte, surveillance, sauvegarde, RPO, RTO, environnement de secours, tests et procédure manuelle.

**Correction :** intégrer une matrice P1/P2/P3/P4 et une fiche de continuité. Le standard, le low-code et le spécifique doivent être comparés sur la même obligation de service, pas seulement sur la fonction affichée.

### P1-11 — Adoption, formation et conduite du changement trop courtes

Le guide mentionne formation et conduite du changement dans la formule, mais ne propose pas de pilote, groupe test, plan de formation, support, dispositif de retour, mesure d’usage, règles de refus et accompagnement des planificateurs. Un planning correct mais ignoré est un échec opérationnel.

**Correction :** ajouter un pilote de 2 à 4 semaines, critères d’adoption, taux de publication consultée, demandes de changement, corrections manuelles, erreurs et satisfaction. Distinguer l’adoption du gain de temps : le second ne peut être revendiqué qu’après mesure.

### P1-12 — Migration, sortie et réversibilité non couvertes

Le mot « sortie » apparaît dans la formule, mais aucune procédure n’explique export des règles, disponibilités, historiques, données salariés, identifiants, pièces jointes, API, licences, code spécifique, documentation, double exploitation, suppression et preuve de restitution.

**Correction :** une section « comment partir sans perdre la saison » et un scénario de sortie : export test, transformation, période de double fonctionnement, validation, maintien d’un historique, retrait des accès et certificat de suppression. Inclure le coût dans le TCO.

### P1-13 — Gains, coût d’erreur et seuils stop/go non démontrés

Le guide demande de mesurer quatre semaines, ce qui est bon, mais ne chiffre aucun coût d’erreur et ne donne aucun seuil de décision. « Treize cas sur quinze » ne suffit pas : quelle criticité ? quelle fréquence ? quel contournement ? quel coût de reprise ?

**Correction :** définir les métriques avant le test : conflits bloquants non détectés, changements tardifs, minutes de planification, appels de confirmation, kilomètres, heures supplémentaires, missions non couvertes, coût de correction et temps de réaffectation. Définir un stop/go : un seul cas critique non traçable peut suffire à écarter l’option ; une règle rare et non bloquante peut rester manuelle.

## 5. P2 à traiter dans la même réécriture

| ID | Manque | Amélioration |
|---|---|---|
| P2-01 | Ressource annoncée dans le dossier mais absente de la page | Créer réellement le tableur/Markdown des quinze cas, avec statut, preuve, coût et décision ; tester téléchargement et accessibilité. |
| P2-02 | Glossaire incomplet | Traduire low-code, API, SIRH, GMAO, paie, solver, RPO, RTO, SLA, override, audit trail et idempotence à leur première apparition. |
| P2-03 | Calendriers/outils génériques absents | Ajouter Google Calendar/Outlook comme outils de disponibilité et partage, avec leur limite : calendrier partagé ≠ moteur de contraintes. |
| P2-04 | Capacités éditeurs trop dépendantes de pages marketing | Ajouter liens vers documentations d’aide et préciser édition/licence/version ; ne jamais transformer une fonction annoncée en preuve d’adéquation. |
| P2-05 | Accessibilité métier non testée | Demander clavier, contraste, lecture mobile, version imprimée, codes couleur doublés par texte, et affichage utilisable par un salarié peu équipé. |
| P2-06 | Localisation de l’article sous-traitée | Ajouter une source officielle Microsoft pour les équipes/équipes multi-sites et Power Apps pour offline ; qualifier les limites et le périmètre produit. |
| P2-07 | FAQ trop courte sur les objections de direction | Ajouter « faut-il changer tous les outils ? », « qui possède les données ? », « que faire si le référent part ? » et « peut-on commencer par un seul site ? ». |
| P2-08 | CTA peu concret | Décrire les documents apportés et le livrable de cadrage ; ne pas promettre une optimisation ni une estimation ferme sans scénarios. |

## 6. Benchmark France et international

### 6.1. France : droit, données et offres visibles

- **Service-Public — aménagement des horaires** et **durée du travail** : sources administratives utiles pour identifier les questions, mais pas pour coder un délai universel. La convention, les accords, la catégorie et la situation doivent être confirmés.
- **CNIL — géolocalisation des véhicules des salariés** (30 mai 2023, fiche indiquée comme en cours de mise à jour) : finalité, nécessité, accès et conservation sont à examiner ; pas de contrôle permanent ou hors temps de travail dans les cas interdits.
- **CNIL — contrôle de l’activité des personnes employées** (9 juillet 2026) : justification/proportionnalité, consultation des instances selon le cas, information des personnes et cycle de vie des données.
- **PlanningPME, Visual Planning, Odoo** : pages primaires de fournisseurs sur les fonctions annoncées, non preuves d’adéquation, de prix total, de performance ou de support.

### 6.2. États-Unis : outils et continuité, pas droit social importé

- **Google Calendar — disponibilité multi-calendriers** : <https://support.google.com/calendar/answer/16287054?hl=en>. Google documente la vérification des événements “Busy” sur plusieurs calendriers ; cela répond à la disponibilité et non aux compétences, aux habilitations, aux véhicules ou aux règles de publication.
- **NIST SP 800-34 Rev. 1** : <https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final>. Guide officiel de continuité/contingence, publié en 2010 : utile pour structurer impact, priorités et reprise, trop ancien pour être présenté comme exigence actuelle universelle.
- Ne pas importer le droit du travail américain dans un guide français ; le benchmark US porte ici sur produit et résilience.

### 6.3. Royaume-Uni : disponibilité, publication et support

- **GOV.UK Service Manual — live phase** : <https://www.gov.uk/service-manual/phases/live/>. Un service doit être exploité durablement, mesuré, maintenu disponible et soutenu ; cela renforce l’idée de budget d’exploitation, pas seulement de développement.
- **GOV.UK — monitoring status** : <https://www.gov.uk/service-manual/technology/monitoring-the-status-of-your-service>. Monitoring interne/externe, métriques utilisateur et techniques, alertes et procédure d’exploitation doivent être décidés avant la mise en production.
- **NCSC — decommissioning assets** : <https://www.ncsc.gov.uk/guidance/decommissioning-assets>. Sauvegarde de configuration, rollback, remplacement avant action irréversible et preuve de suppression : angle de sortie absent de la page.

### 6.4. Australie : maintenance, registre et fin de support

- **ASD/ACSC — Guidelines for system management**, publié et mis à jour le 9 juin 2026 : <https://www.cyber.gov.au/business-government/asds-cyber-security-frameworks/ism/cyber-security-guidelines/guidelines-for-system-management>. La guidance traite procédures d’administration, patch management, registre des logiciels, fin de support et sauvegarde/restauration. Elle vise grandes organisations et gouvernement australiens ; utiliser les pratiques, pas les niveaux de contrôle comme obligation PME française.

### 6.5. Allemagne/DACH : cycle de vie cloud et sortie

- **BSI — Secure use of cloud services** : <https://www.bsi.bund.de/EN/Themen/Unternehmen-und-Organisationen/Informationen-und-Empfehlungen/Empfehlungen-nach-Angriffszielen/Cloud-Computing/Sichere-Nutzung/sichere-nutzung.html>. L’approche va de la stratégie à l’expiration du contrat et insiste sur migration, disponibilité, autorisations, administration, formation, tests fonctionnels/sécurité et fin de service. Le site peut limiter l’extraction automatique ; revalider manuellement avant publication.

### 6.6. Éditeurs et low-code à comparer

- **Microsoft Teams Shifts** : <https://support.microsoft.com/en-us/teams/free/schedule-staff-shifts>. Fonctions annoncées : shifts, publication, notifications, demandes d’absence, échanges et open shifts ; disponibilité mobile et desktop. Les limites (équipes invitées, licences, zones, modèle de shift) doivent être testées.
- **Microsoft Power Apps offline** : <https://learn.microsoft.com/en-us/power-apps/mobile/canvas-offline-overview> et <https://learn.microsoft.com/en-us/power-apps/mobile/limitations-canvas-apps>. Dataverse offre synchronisation et fonctionnement hors-ligne, mais les relations, fonctions et volumes ont des limites ; ce n’est pas équivalent à un moteur d’optimisation de planning.
- **Google Calendar** : disponibilité et événements, mais pas moteur de compétences, capacités, habilitations et publication métier.
- **Odoo Planning** : <https://www.odoo.com/documentation/19.0/applications/services/planning.html>. La documentation mentionne notamment congés et horaires de travail ; les versions, modules et intégrations paie doivent être vérifiés dans l’instance réelle.

### 6.7. Gain d’information par rapport à la concurrence

| Angle que la concurrence couvre | Angle que le guide couvre | Ce qu’il faut ajouter pour prendre l’avantage |
|---|---|---|
| Calendrier/shift/ressource | Quinze conflits | Exécuter les mêmes cas sur calendrier, Excel, standard, low-code et spécifique. |
| Fonction produit annoncée | Pages éditeurs citées | Limites par édition, licence, mobile, multi-site et intégration. |
| Planning paramétrable | Règles/préférences | Override explicable, version des règles, audit, acceptation d’un résultat impossible. |
| Application métier | Verdict de développement | TCO 12/36/60, SLA, RPO/RTO, adoption et sortie. |
| Données salariés | Géolocalisation | Minimisation, rétention, accès, consultation et AIPD éventuelle. |

## 7. Comparaison à même périmètre à intégrer

Le même jeu doit utiliser : 2 équipes, 20 personnes, 3 sites, 12 véhicules, 6 compétences, 1 équipe de nuit, 1 absence de dernière minute, 1 urgence, 1 demande d’échange, 1 commande ERP annulée, 1 export paie et 1 panne réseau. Ces données restent fictives.

| Option | Ce qu’elle peut bien faire | Ce qu’elle ne garantit pas | Test décisif |
|---|---|---|---|
| Papier / tableau blanc | Arbitrage visible immédiat, pas de dépendance réseau | Historique, droits, notification, preuve et reprise | Un changement urgent et sa preuve de publication. |
| Excel partagé | Souplesse, coût marginal faible, familiarité | Versions concurrentes, droits fins, règles, intégrations, audit et conflits | Deux éditeurs simultanés, absence et restauration d’une version. |
| Calendrier partagé | Disponibilités, invitations, visibilité | Compétences, capacité, priorités, véhicules, règles sociales, moteur de publication | Compétence obligatoire + équipe multi-site + conflit d’événements. |
| Standard planning | Fonctions courantes, rôles, shifts, demandes d’absence | Règles rares, intégration spécifique, coût de licence/paramétrage | Les quinze cas avec configuration et même données. |
| Low-code | Formulaires, workflow, rôles, connexion SI, offline selon plateforme | Limites offline, complexité de règles, gouvernance, licences, maintenance citoyenne | Synchronisation en doublon, règle impossible, changement de schéma, audit. |
| Spécifique | Règles et intégrations propres, UX métier | Coût, délai, maintenance, dépendance, sécurité, besoin de règles stables | Un cas bloquant, un override, une panne et la sortie. |

### Scénarios chiffrés proposés

Les montants suivants sont uniquement des **exemples fictifs de méthode**. Ils ne sont ni tarifs Hagnéré, ni fourchettes de marché. Le même périmètre (20 utilisateurs, 3 sites, 12 véhicules, 15 cas) est supposé.

| Option | Initial | Récurrent annuel | Migration/formation | Temps interne annuel | Sortie à 60 mois | TCO 12 mois |
|---|---:|---:|---:|---:|---:|---:|
| Excel sécurisé | 1 500 € | 600 € | 1 200 € | 9 000 € | 2 000 € | **12 300 €** |
| Standard planning | 4 000 € | 8 400 € | 5 000 € | 4 500 € | 3 000 € | **21 900 €** |
| Low-code | 12 000 € | 5 400 € | 6 000 € | 5 000 € | 5 000 € | **28 400 €** |
| Spécifique | 55 000 € | 14 400 € | 12 000 € | 3 500 € | 8 000 € | **84 900 €** |

Calculs : initial + récurrent + migration/formation + temps interne. Le coût de sortie n’est pas ajouté au TCO année 1. À 36 mois, reconduire les récurrents et temps internes sans supposer de nouvelles évolutions :

| Option | TCO 12 mois | TCO 36 mois* | TCO 60 mois* |
|---|---:|---:|---:|
| Excel sécurisé | 12 300 € | 31 500 € | 50 700 € |
| Standard planning | 21 900 € | 47 700 € | 73 500 € |
| Low-code | 28 400 € | 49 200 € | 70 000 € |
| Spécifique | 84 900 € | 120 700 € | 156 500 € |

`*` TCO 36/60 = année 1 + récurrent annuel + temps interne répétés, sans inflation, incident, extension de périmètre ni nouvelle évolution. Ajouter la sortie séparément à l’horizon de départ. Le guide final doit expliquer que le coût ne devient pas une recommandation sans valeur et risque mesurés.

### Coût d’erreur et seuils

Proposition de mesure fictive : 8 personnes bloquées pendant 2 heures à un coût chargé de 45 €/h = **720 € de capacité interne**, hors rendez-vous perdu, pénalité ou risque humain. Cette ligne ne doit être publiée que comme exemple de calcul, jamais comme gain garanti.

Règles stop/go :

- **Stop** si un scénario critique de paie, sécurité, compétence obligatoire ou publication ne laisse aucune trace et aucun contournement contrôlé.
- **Go standard** si les 15 cas passent avec moins de 4 heures de paramétrage, une documentation et une charge d’administration acceptables.
- **Go low-code** si les données, rôles et synchronisation sont maîtrisables et que les limites offline/licences sont acceptées.
- **Go spécifique** seulement si au moins deux règles stables, fréquentes et critiques restent impossibles, qu’une équipe d’exploitation est financée et qu’un plan de sortie existe.
- **Report** si les règles changent chaque mois, si personne n’est responsable de la publication ou si l’incident est surtout organisationnel.

Ces seuils sont des exemples de gouvernance à adapter ; ils ne sont pas des normes ni des vérités de marché.

## 8. Réécriture éditoriale recommandée

### Nouvelle promesse d’ouverture

> Votre planning fonctionne encore, mais une absence, une urgence ou un véhicule indisponible suffit à faire circuler trois versions différentes. La vraie question n’est pas « quel logiciel est le plus moderne ? » : c’est « quelles règles doivent absolument être respectées, quel coût a chaque erreur et quelle solution les prouve sans vous enfermer ? ». Dans ce guide, vous testez quinze conflits dans Excel ou votre agenda, dans un standard, dans un outil low-code et, seulement si nécessaire, dans un scénario de sur-mesure. Vous obtenez un verdict, un budget comparable et une liste de règles à faire valider.

### Progression proposée

1. La scène de l’absence et le coût de l’erreur.
2. Ce que l’on planifie : personnes, tâches, véhicules, sites, machines.
3. Règles obligatoires, préférences et niveaux de priorité.
4. Cas durs : absences, repos, compétences, capacité, équipes, sites, rotations.
5. Quinze tests reproductibles et critères d’acceptation.
6. Comparaison papier/Excel/calendrier/standard/low-code/spécifique.
7. Optimisation explicable, override et audit trail.
8. Intégrations RH/paie/ERP et gestion des erreurs.
9. Mobile, hors-ligne et synchronisation.
10. Données salariés, RGPD, sécurité et rôles.
11. SLA, RPO/RTO, maintenance, adoption et continuité.
12. TCO 12/36/60, coût d’erreur, scénarios et seuils.
13. Migration, sortie et réversibilité.
14. Verdict et ressource téléchargeable.

### Avis professionnel à assumer

> « Nous préférons un planning standard qui échoue proprement sur une règle rare, avec un override tracé, à un moteur sur mesure qui promet d’optimiser tout mais dont personne ne sait expliquer le résultat. Le développement ne devient rationnel que lorsque la règle est stable, fréquente, critique et plus coûteuse à contourner qu’à exploiter. »

Cette opinion doit toujours être suivie d’un test observable et d’un coût explicite.

## 9. Conversion et ressource

Le CTA « Décrire mon planning » est cohérent mais ne dit pas ce que le dirigeant obtient. Ajouter avant le bouton :

- **À apporter** : quinze scénarios, planning actuel, règles écrites, sources RH/ERP, incidents et coût d’une erreur.
- **À recevoir** : matrice outil actuel/standard/low-code/spécifique, règles à valider, intégrations à tester, inconnues et prochaine décision.
- **Limites** : pas de conseil juridique personnalisé, pas de garantie d’optimisation, pas de prix ferme sans périmètre, pas de promesse de conformité automatique.

La ressource attendue dans le dossier de recherche n’existe pas encore dans la page : publier un tableur ou Markdown téléchargeable avec les colonnes `scénario`, `données`, `règle obligatoire`, `préférence`, `résultat attendu`, `résultat observé`, `contournement`, `criticité`, `preuve`, `système source`, `responsable`, `décision`. Fournir un exemple fictif rempli et une version vierge.

## 10. Audit technique et manifests

### 10.1. Hachages observés

| Fichier | SHA-256 |
|---|---|
| `src/app/guides/logiciel-planning-sur-mesure/page.tsx` | `c6ffdb8c31cefb81adc64ad9d7f0c7174c48ab05970bff0df374ad9c3b57a322` |
| `src/app/guides/logiciel-planning-sur-mesure/opengraph-image.tsx` | `8b607519ded06038a8ca62e010c800783aa6147b40614ef408f7a3d384eeb65b` |
| `src/lib/guides.ts` | `8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09` |
| `docs/research/logiciel-planning-sur-mesure.md` | `4770fc72afa44ddfae0fc946d1fe479a3cc034cf782ecb43811a5ec0f787d63d` |

### 10.2. Architecture observée

- `buildGuideMetadata` et `buildGuideStructuredData` sont utilisés.
- `Article` et `BreadcrumbList` sont présents ; aucun `FAQPage`, `HowTo`, `Offer`, avis ou `wordCount` n’est déclaré.
- OG 1 200 × 630, titre lisible : « Faut-il un logiciel de planning sur mesure ? ».
- H1 unique, 11 entrées de sommaire, six FAQ, un CTA final et un maillage cohérent.
- Les cartes de conflit sont accessibles dans le HTML, mais aucune ressource téléchargeable n’est reliée.
- L’entrée registre est datée du 24 juillet 2026 et annonce 12 minutes ; l’estimation doit être recalculée après l’ajout des sections profondes.

### 10.3. Manifests

```text
P4 : OK pour dossier, page, OG et manifeste de lot référencé.
P3 : OK pour page et OG.
P2 : échecs sur dossier, page et guides.ts ; snapshot historique non aligné.
P1 : échec sur le dossier ; snapshot historique non aligné.
```

Les échecs P1/P2 ne constituent pas une erreur de contenu en soi : les fichiers ont changé après ces passes. En revanche, ils interdisent d’affirmer que tous les anciens PASS sont encore démontrés. Après la réécriture, refaire P1–P4 et produire un manifest global incluant recherche, page, OG, registre, ressource et pages liées.

### 10.4. Rendu et qualité technique

Le dossier P4 affirme 10 routes × 5 largeurs, 55 tests ciblés, 453 tests généraux, 159 pages et 274 JSON-LD. Ce rapport n’a pas reproduit ces sorties ; il les classe donc comme assertions historiques. Avant publication finale, rejouer : build, TypeScript, ESLint, `diff-check`, route locale, OG 1 200 × 630, console, HTML, canoniques, thème clair/sombre, 320/390/768/1 024/1 440 px, clavier et absence de débordement.

## 11. Plan d’action selon les quatre passes

### P1 — Recherche

- Refaire la SERP française et distinguer planning salariés, interventions, production et ressources.
- Ajouter Microsoft Shifts, Google Calendar, Power Apps/Dataverse, Odoo, PlanningPME et Visual Planning avec édition, date, limites et liens d’aide.
- Ajouter benchmarks UK/US/Australie/DACH sur support, sécurité, continuité, monitoring et sortie.
- Construire une fiche de faits : règles sociales, CNIL, versions produit, fonctions et volatilité.
- Définir le périmètre identique des scénarios et le modèle TCO.

### P2 — Rédaction

- Réécrire l’ouverture et faire apparaître le coût d’erreur.
- Ajouter règles complexes, multi-sites, optimisation explicable, overrides, rôles, intégrations, offline, RGPD, SLA/RPO/RTO, adoption, migration et sortie.
- Ajouter matrice égale et trois scénarios chiffrés avec TCO 12/36/60.
- Construire et relier la ressource téléchargeable.

### P3 — Contre-audit

- Recalculer chaque tableau et chaque horizon.
- Vérifier que papier, Excel, calendrier, standard, low-code et spécifique ont la même donnée et les mêmes quinze cas.
- Rejouer les liens officiels et vérifier portée/dates/licences.
- Rechercher promesses de conformité, optimisation, économie, disponibilité et sécurité.
- Refuser le PASS si un P1 reste ouvert.

### P4 — Plume et QA

- Lecture par un dirigeant non technique, sans contexte de développement.
- Test « sujet-action-résultat » pour chaque H2.
- Vérification mobile, tableaux, cartes, ressource téléchargée, clavier, contraste et thème.
- Manifest global exact et statut `ready-for-human-review` tant qu’aucune revue humaine n’est consignée.

## 12. Seuil de sortie recommandé

Le guide pourra obtenir GO seulement si :

- P0 = 0 et P1 = 0 ;
- score ≥ 90/100, avec intention, décision, pédagogie, profondeur, preuve et comparaison ≥ 9/10 ;
- les six options (papier, Excel, calendrier, standard, low-code, spécifique) sont comparées à périmètre égal ;
- trois scénarios et TCO 12/36/60 sont calculés et revérifiés ;
- règles, équipes, absences, sites, compétences, contraintes dures/souples, préférences, overrides et audit trail sont testables ;
- intégrations RH/paie/ERP, mobile/offline, RGPD, rôles, SLA/RPO/RTO, adoption, migration et sortie sont documentés ;
- au moins une source officielle française et une source primaire US/UK/AU/DACH soutiennent chaque angle non évident ;
- la ressource téléchargeable fonctionne et ne promet rien d’inventé ;
- les cinq largeurs, l’OG, la console, l’accessibilité et le manifest final sont vérifiés ;
- une revue humaine réelle est consignée.

**Conclusion : conserver l’idée des quinze conflits et la plume actuelle, mais rouvrir la recherche et réécrire substantiellement. Le guide est une excellente introduction au choix “standard ou spécifique”, pas encore un audit complet du coût, du risque et de l’exploitation d’un système de planning d’entreprise.**
