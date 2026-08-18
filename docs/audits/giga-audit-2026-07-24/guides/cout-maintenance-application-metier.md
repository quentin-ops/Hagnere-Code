# Giga-audit — `cout-maintenance-application-metier`

Date de l’audit : **24 juillet 2026**  
Périmètre : guide public, métadonnées, données structurées, dossier de recherche, manifests P1–P4, calculs, preuves, intention de recherche, concurrence française et internationale, décision d’achat et conversion.  
Nature : **audit en lecture seule**. Ce rapport ne modifie ni le guide, ni le registre, ni les manifests, et ne vaut ni publication ni validation d’indexation.

## 1. Verdict exécutif

### Verdict : NO-GO pour une promesse « meilleur guide du Web »

Le guide est aujourd’hui l’un des plus propres du corpus : il parle à un dirigeant, refuse le pourcentage magique, distingue le maintien, l’évolution et le temps interne, assume un exemple fictif et laisse les inconnues visibles. Les calculs publiés sont exacts et la page ne fait pas de promesse client ou de prix Hagnéré déguisé.

Il n’est toutefois **pas encore assez profond pour la cible “dirigeant qui doit arbitrer son budget et choisir un dispositif de maintenance”**, ni pour le seuil de la workflow maître (90/100, aucun axe critique sous 8). Il explique comment faire un registre ; il ne montre pas encore suffisamment combien coûte le niveau de service choisi, ce que coûte une panne, comment comparer un contrat récurrent à une équipe interne ou à des lots, ni comment inscrire la sécurité, la capacité, le départ du prestataire et la fin de vie dans le coût total.

Score actuel : **82/100**.

| Axe | Score | Observation |
|---|---:|---|
| Intention de recherche | 9/10 | La question « combien prévoir l’an prochain ? » est immédiatement comprise. |
| Décision dirigeant | 8/10 | Quatre options existent, mais leurs critères économiques ne sont pas assez comparables. |
| Pédagogie | 9/10 | Progression claire, calcul vérifiable, mots généralement traduits. |
| Profondeur opérationnelle | 8/10 | Bon registre, mais SLA, RTO/RPO, capacité, staffing, sortie et coût de panne restent insuffisamment traités. |
| Preuves et actualité | 8/10 | Sources officielles françaises solides ; benchmark international et rafraîchissement daté absent du dossier P1. |
| Comparaison | 7/10 | Trois simulations sont demandées au lecteur, mais le guide ne les réalise pas sur un périmètre égal. |
| Différenciation | 8/10 | Le registre par preuves et la séparation des inconnues sont distinctifs. |
| Style humain | 9/10 | Voix sobre, honnête, centrée sur le problème du dirigeant. |
| Conversion | 8/10 | CTA cohérent et non agressif ; livrable commercial et étape suivante pourraient être plus concrets. |
| SEO éditorial | 8/10 | Bonne couverture sémantique et maillage ; manque d’angles décisionnels et de preuves originales. |

### Sévérités

- **P0 : 0** — aucune erreur factuelle critique, aucun faux témoignage, aucun prix présenté comme tarif Hagnéré, aucun ratio universel conservé dans le guide, aucune promesse de disponibilité ou de conformité.
- **P1 : 11** — manques qui empêchent encore une décision robuste, une comparaison de devis à périmètre égal ou une promesse de profondeur supérieure aux concurrents.
- **P2 : 7** — améliorations importantes mais non bloquantes pour comprendre la méthode.

La page peut rester accessible en revue humaine, mais je recommande de ne pas la présenter comme « définitive », et de ne pas utiliser ce seul guide comme preuve d’expertise de maintenance tant que les P1 ne sont pas corrigés.

## 2. Ce qui fonctionne réellement

### 2.1. Le lecteur est enfin identifiable

L’ouverture part d’une situation crédible : l’application fonctionne, l’année suivante arrive, et le dirigeant doit réserver un budget sans connaître un pourcentage fiable. La phrase de réponse — le budget se construit à partir des dépenses réelles, de la couverture contractuelle, des incidents, des changements décidés et du temps interne — est juste et mémorisable.

### 2.2. Le guide refuse deux erreurs fréquentes

1. Il ne transforme pas le prix de création en règle annuelle.
2. Il ne transforme pas une réserve de trésorerie ou un risque inconnu en faux devis.

Cette honnêteté est un avantage de confiance et protège la conversion contre une mauvaise promesse commerciale.

### 2.3. La démonstration PlanifPro est auditée

PlanifPro est annoncé comme une PME imaginaire avant les montants. Les postes, inclusions, exclusions, assiettes HT et coût interne sont séparés. Les totaux publiés sont exacts :

```text
300 × 12 = 3 600
3 × 45 × 12 = 1 620
3 600 + 18 000 + 1 500 = 23 100
23 100 + 4 800 = 27 900
27 900 + 1 620 = 29 520
23 100 + 1 620 = 24 720 si l’évolution est reportée
```

Ce contrôle a été refait indépendamment. Il n’y a pas de double comptage dans cet exemple.

### 2.4. Les sources sont correctement limitées

Le guide ne prétend pas que le CCAG-TIC fixe les prix privés, que l’OWASP impose une tarification, que l’ANSSI garantit une restauration ou que la CNIL transforme la maintenance en forfait de conformité. Cette mise en garde doit être conservée.

### 2.5. La conversion est honnête

Le CTA arrive après le registre et demande de faire vérifier le budget annuel. Le guide laisse explicitement ouverte la conclusion « pas de TMA », « lot ponctuel », « report » ou « arrêt ». Cette absence de forcing est cohérente avec la cible dirigeante.

## 3. Ce que le guide laisse croire, à tort, qu’il a traité

Le registre est utile, mais il ne suffit pas à répondre à la question complète d’un décideur : **« Quel niveau de protection et de disponibilité est-ce que j’achète pour quel risque ? »**

Il manque la chaîne complète :

```text
criticité métier → niveau de service → activités nécessaires → capacité humaine
→ preuves de fonctionnement → coût récurrent + coût des événements + coût de sortie
→ valeur créée ou coût évité → décision et mesure après 90 jours
```

Le guide s’arrête surtout à « dépenses externes + temps interne + inconnues ». C’est une bonne base comptable, mais une maintenance d’application métier est également une capacité opérationnelle, un dispositif de sécurité, une assurance de reprise et un contrat de responsabilité.

## 4. P1 à corriger avant une nouvelle validation

### P1-01 — Trois scénarios chiffrés de même périmètre manquent

Le guide montre un seul cas PlanifPro. Il demande au lecteur de faire chiffrer un mois calme, un mois chargé et un incident hors périmètre, mais ne montre pas le résultat. Un concurrent peut donc conserver l’avantage avec une grille de prix ; le lecteur n’a pas de référence pour interpréter ses devis.

**Correction attendue :** ajouter trois scénarios fictifs (simple, central, exigeant) avec les mêmes lignes : abonnements, support, restauration, évolution décidée, temps interne. Afficher HT externe, coût interne, coût complet, hypothèses, exclusions et décision correspondante. Préciser deux fois qu’il ne s’agit ni de tarifs Hagnéré, ni d’une moyenne de marché.

### P1-02 — TCO à 12, 36 et 60 mois absent

Le dirigeant ne choisit pas seulement un budget annuel ; il engage une dépendance. Le guide ne permet pas de voir l’effet d’un abonnement, d’un lot de migration, d’une hausse d’usage ou d’une évolution reportée sur trois ou cinq ans.

**Correction attendue :** ajouter une formule et un tableau TCO 12/36/60, avec une colonne « récurrent », une colonne « one-shot », une colonne « scénario non chiffré ». Ne pas reconduire automatiquement les évolutions : préciser lesquelles sont répétées et lesquelles ne le sont pas.

### P1-03 — SLA, horaires et niveaux de gravité ne sont pas budgétés

« Support ouvré » est cité dans l’exemple, mais le lecteur ne voit pas la différence de coût entre :

- demande traitée le prochain jour ouvré ;
- incident bloquant avec prise en charge en 2 heures ;
- astreinte soir/week-end ;
- objectif de rétablissement ou simple objectif de réponse.

Un délai de réponse n’est pas un délai de résolution. Sans gravité, horaires, canaux, escalade, MTTR et exclusions, deux offres ne sont pas comparables.

**Correction attendue :** une matrice P1/P2/P3/P4 : impact, heure de prise en compte, objectif de rétablissement, présence d’astreinte, preuve mensuelle et coût à demander. Ne jamais inventer de délai “standard”.

### P1-04 — RPO/RTO et test de restauration restent trop abstraits

L’exercice de restauration à 1 500 € est clair comme fiction, mais le guide ne fait pas répondre aux questions qui déterminent son utilité : combien de données peut-on perdre (RPO) ? En combien de temps doit-on reprendre (RTO) ? Quelle copie, quelle rétention, quelle dépendance, quel environnement de test, qui valide et quel compte rendu ?

**Correction attendue :** une mini-fiche « sauvegarde qui fonctionne » : objectif métier, fréquence, rétention, chiffrement, restauration testée, temps mesuré, données sensibles, responsabilité, coût et date de la prochaine preuve. Introduire les sigles seulement après leur traduction.

### P1-05 — Sécurité et vulnérabilités ne deviennent pas une charge mesurable

L’inventaire des dépendances est cité, mais ni la fréquence de revue, ni le tri des vulnérabilités, ni le délai de correctif, ni la rotation des secrets, ni les journaux, ni les revues d’accès, ni la réponse à incident ne sont transformés en lignes budgétaires.

**Correction attendue :** distinguer « abonnement de sécurité », « temps de revue », « correctif urgent », « test de sécurité », « accès prestataire », « journalisation et conservation », « remplacement d’une dépendance en fin de support ». La source australienne ASD/ACSC, mise à jour le 9 juin 2026, donne des repères opérationnels de patch management, registres logiciels et fin de support ; elle doit être citée comme repère et non comme obligation française.

### P1-06 — Hébergement et coût à l’usage sont incomplets

La page cite base, stockage, courriels et surveillance, mais la checklist omet ou laisse implicites : domaine et certificats, CDN/WAF, environnements de préproduction, CI/CD, logs et traces, sauvegardes de base, stockage de sauvegardes, support éditeur, licences par utilisateur, consommation variable, trafic sortant, notifications, change de devise et hausse de volume.

**Correction attendue :** une table « fixe / variable / déclencheur / source de facture / responsable / plafond ». Ajouter un exemple de seuil d’usage, sans donner de prix fournisseur non vérifié.

### P1-07 — Capacité interne, dépendance à une personne et continuité d’équipe absentes

Trois heures mensuelles à 45 € sont une hypothèse comptable, pas un modèle de capacité. Le guide ne demande pas qui reçoit les alertes, qui valide une livraison, qui teste, qui connaît les accès, qui remplace le référent pendant ses congés, ni combien de temps est nécessaire en cas de changement de prestataire.

**Correction attendue :** inclure un mini-RACI dirigeant / métier / technique / prestataire, un coût de back-up de compétence et un test « le référent est indisponible 10 jours ». La disponibilité d’une équipe et celle d’une personne ne doivent pas être confondues.

### P1-08 — Les options ne sont pas comparées sur une grille égale

Les quatre choix (contrat récurrent, lot, report, arrêt) sont décrits en prose. Il manque la comparaison avec : support éditeur, équipe interne, régie, TMA au forfait, contrat SLA, astreinte, remplacement progressif et migration vers un SaaS.

**Correction attendue :** une matrice à critères constants : coût fixe, coût variable, délai de prise en charge, connaissance du contexte, couverture hors heures, réversibilité, risque de personne-clé, charge interne, coût de sortie, meilleur cas d’usage, cas où l’option est une mauvaise idée. Toute comparaison doit porter sur le même périmètre et la même année.

### P1-09 — Coût de panne et valeur protégée ne sont pas calculés

Le guide renvoie vers le ROI, mais ne fait pas le lien économique avec le budget de maintenance. Un dirigeant doit pouvoir comparer 2 000 € de prévention, 6 heures d’arrêt ou un lot de reprise à une valeur métier mesurable.

**Correction attendue :** proposer la formule :

```text
coût d’un incident = temps improductif + ventes ou factures retardées
                   + reprise manuelle + pénalités réellement applicables
                   + coût du prestataire + communication et contrôle
```

Utiliser un exemple fictif explicitement non généralisable : 15 personnes × 7 heures × coût chargé de 45 € = 4 725 € de capacité interne perdue, hors chiffre d’affaires ou données non chiffrés. Le lecteur doit comprendre ce qui est calculé et ce qui reste à mesurer.

### P1-10 — Migration, sortie et portabilité ne sont pas incluses dans le coût total

L’arrêt ou le remplacement est mentionné, mais sans export, format, relations entre données, conservation, suppression sécurisée, transfert de propriété, accès au code, documentation, licences, période de double fonctionnement et validation post-sortie.

**Correction attendue :** une section « le coût de partir » avec checklist et scénario de sortie. Le NCSC britannique rappelle que le rollback doit inclure données, configuration, règles réseau et procédures, et que les remplacements doivent fonctionner avant une action irréversible. Le BSI allemand insiste sur la migration, la disponibilité, les autorisations, les tests fonctionnels et de sécurité et la fin du contrat.

### P1-11 — Le benchmark international n’est pas réellement présent dans le dossier P1

Le dossier de recherche documente quatre requêtes françaises et des pages commerciales françaises. Il ne fournit ni recherche US/UK/Australie/DACH, ni comparaison des angles, ni information-gain matrix internationale. C’est contraire à la porte P1 demandant au minimum France + US/UK + un autre marché.

**Correction attendue :** ajouter au dossier les ressources ci-dessous, avec date de consultation, champ et limite :

- France : CNIL, *Encadrer la maintenance et la fin de vie des matériels et logiciels*, 14 mars 2024 ; ANSSI, *Les fondamentaux de la sauvegarde* ; Légifrance, CCAG-TIC art. 38 (vocabulaire de la commande publique, pas prix privé).
- États-Unis : NIST SP 800-34 Rev. 1, *Contingency Planning Guide* (publication 2010, donc à utiliser pour la structure de continuité, pas comme exigence actuelle universelle) : <https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final>.
- Royaume-Uni : GOV.UK *Monitoring the status of your service* (mise à jour 23 octobre 2024), *Deploying software regularly* et NCSC *Decommissioning assets* (20 mai 2025) : <https://www.gov.uk/service-manual/technology/monitoring-the-status-of-your-service>, <https://www.gov.uk/service-manual/technology/deploying-software-regularly>, <https://www.ncsc.gov.uk/guidance/decommissioning-assets>.
- Australie : ASD/ACSC *Guidelines for system management*, publié et mis à jour le 9 juin 2026 : <https://www.cyber.gov.au/business-government/asds-cyber-security-frameworks/ism/cyber-security-guidelines/guidelines-for-system-management>.
- Allemagne/DACH : BSI *Secure use of cloud services — step by step from strategy to expiration of the contract* : <https://www.bsi.bund.de/EN/Themen/Unternehmen-und-Organisationen/Informationen-und-Empfehlungen/Empfehlungen-nach-Angriffszielen/Cloud-Computing/Sichere-Nutzung/sichere-nutzung.html>.

## 5. P2 à traiter dans la même réécriture

| ID | Manque | Correction recommandée |
|---|---|---|
| P2-01 | Glossaire dispersé | Traduire dès la première occurrence TMA, SLA, MTTR, RPO, RTO, SBOM, observabilité et réversibilité, avec un exemple d’usage. |
| P2-02 | Fiche recopiable non téléchargeable | Publier un CSV/XLSX ou Markdown réellement téléchargeable, daté, sans prix fictif présenté comme devis. Vérifier son accessibilité et son contenu. |
| P2-03 | CTA peu tangible | Dire ce que reçoit le prospect : périmètre à clarifier, postes connus/inconnus, questions à transmettre au prestataire, et limite de l’échange. |
| P2-04 | Mesure post-décision absente | Ajouter une revue à J+30/J+90 : incidents, temps de réponse, temps de rétablissement, déploiements, restauration réussie, budget prévu/réalisé, capacité interne et valeur obtenue. |
| P2-05 | Preuve de lecture mobile non reproductible | Rejouer le navigateur aux largeurs 320, 390, 768, 1 024 et 1 440 px et conserver les sorties ; l’audit indépendant courant ne prouve ici que la vue 1 200 px. |
| P2-06 | Vieillissement des sources | Ajouter une date de vérification et une ligne « à revalider si contrat, réglementation, fournisseur ou version change ». La page CNIL est actuelle, mais le CCAG-TIC 2021 a un champ public limité. |
| P2-07 | Absence d’auteur de terrain vérifiable | Ne pas inventer de cas client. Ajouter seulement, si prouvable, une méthode Hagnéré ou un retour anonymisé documenté ; sinon assumer l’exemple fictif. |

## 6. Benchmark concurrentiel et information gain

### 6.1. Ce que les résultats visibles couvrent déjà

Les résultats français observés dans le dossier (PilotOne, PeakLab, Thillion et pages d’agences) couvrent généralement le prix de création, des forfaits ou des pourcentages, parfois un coût de possession. Ils sont utiles pour comprendre la promesse SERP mais ne fournissent pas de périmètre égal, de preuve de coût interne, de niveau de service ou de test de sortie.

### 6.2. Ce que les sources internationales ajoutent

| Marché / source | Angle réellement apporté | Ce que Hagnéré doit intégrer sans copier |
|---|---|---|
| France / CNIL | Accès prestataire temporaire, main courante, clauses, suppression des données en fin de vie. | Ligne budgétaire « contrôle et preuve des accès », clause et responsable. |
| US / NIST | Plan de continuité, analyse d’impact, priorités et dépendances. | Relier criticité et coût ; ne pas importer une exigence fédérale comme règle PME française. |
| UK / GOV.UK | Déploiements audités, environnements, smoke tests, rollback, monitoring et métriques de support. | Transformer « prévention » en activités observables et chiffrables. |
| UK / NCSC | Découverte des actifs, sauvegarde de configuration, rollback, remplacement avant action irréversible. | Ajouter coût de sortie, double fonctionnement et preuve de réversibilité. |
| Australie / ASD | Registre logiciel, patch management, fin de support, délais de correctifs selon criticité. | Ajouter échéancier de versions et coût d’un composant non supporté ; préciser le champ de la source. |
| Allemagne / BSI | Migration, disponibilité, autorisations, formation, tests fonctionnels/sécurité, fin de contrat. | Ajouter coûts organisationnels et test de transfert, non seulement la facture technique. |

### 6.3. Matrice de gain d’information

| Question que le lecteur se pose | Réponse actuelle | Réponse à viser | Priorité |
|---|---|---|---:|
| « Combien dois-je mettre de côté ? » | Une méthode et un exemple unique. | Trois scénarios égaux + TCO 12/36/60. | 1 |
| « Quel service est couvert ? » | Quelques inclusions/exclusions. | SLA, gravité, horaires, escalade, MTTR et preuve mensuelle. | 1 |
| « Que se passe-t-il si tout casse ? » | Un exercice de restauration. | RPO/RTO, test mesuré, dépendances, coût d’arrêt et décision. | 1 |
| « Est-ce sécurisé ? » | Bonnes pratiques citées. | Patch, vulnérabilités, accès, journaux, secrets, responsabilité, fréquence. | 1 |
| « Dois-je signer une TMA ? » | Quatre options qualitatives. | Matrice récurrent/lot/interne/éditeur/régie/migration sur le même périmètre. | 1 |
| « Puis-je changer de prestataire ? » | Mention de l’arrêt. | Export, documentation, code, données, double run, suppression et test de rollback. | 1 |
| « Est-ce que cela vaut le coût ? » | Renvoi vers le guide ROI. | Formule de coût évité + capacité libérée + indicateurs après 90 jours. | 1 |
| « Que dois-je faire demain ? » | Réunir cinq preuves. | Checklist 30/60/90 minutes, fiche téléchargeable et livrable du CTA. | 2 |

## 7. Scénarios chiffrés à ajouter

Les chiffres ci-dessous sont **une proposition d’illustration pour la réécriture**, pas des tarifs de marché. Ils doivent être introduits comme fictifs, avec une note HT/TTC et une colonne “non inclus”. Ils utilisent le même périmètre pour rendre la comparaison honnête.

| Scénario | Abonnements | Support | Restauration | Évolution | Temps interne | TCO année 1 complet |
|---|---:|---:|---:|---:|---:|---:|
| Simple | 3 600 € | 18 000 € | 1 500 € | 4 000 € | 1 080 € | **28 180 €** |
| Central | 3 600 € | 18 000 € | 1 500 € | 4 800 € | 1 620 € | **29 520 €** |
| Exigeant | 7 200 € | 36 000 € | 3 000 € | 12 000 € | 3 240 € | **61 440 €** |

Décomposition :

- Simple : récurrent externe 21 600 €, one-shot externe 5 500 €, interne 1 080 € ; total 28 180 €.
- Central : récurrent externe 21 600 €, one-shot externe 6 300 €, interne 1 620 € ; total 29 520 €.
- Exigeant : récurrent externe 43 200 €, one-shot externe 15 000 €, interne 3 240 € ; total 61 440 €.

Pour montrer l’horizon sans inventer de nouvelles évolutions, reconduire seulement le récurrent et le temps interne de base :

| Scénario | TCO 12 mois | TCO 36 mois* | TCO 60 mois* |
|---|---:|---:|---:|
| Simple | 28 180 € | 73 540 € | 118 900 € |
| Central | 29 520 € | 75 960 € | 122 400 € |
| Exigeant | 61 440 € | 154 320 € | 247 200 € |

`*` TCO 36/60 = TCO année 1 + récurrent externe + temps interne répétés, sans supposer de nouvelles évolutions, de nouveaux incidents, d’inflation, de hausse d’usage ni de sortie. Ce tableau est donc une base de sensibilité, pas une prévision.

Ce sont précisément ces réserves qui rendent les chiffres utiles : ils montrent la mécanique, pas un prix à promettre.

## 8. Réécriture proposée, dans l’ordre de lecture d’un dirigeant

### Ouverture (à réécrire)

Commencer par une scène concrète : « Votre application fonctionne. Pourtant, au moment de préparer le budget, personne ne sait dire si la ligne “maintenance” couvre seulement l’hébergement, une correction, une sauvegarde testée ou une disponibilité en dehors des heures ouvrées. » Puis annoncer la décision : « Vous allez séparer le maintien en état, la sécurité, les évolutions, le temps de l’entreprise et le coût de sortie. Vous verrez ensuite trois budgets fictifs et les questions à envoyer à deux prestataires. »

La réponse courte doit rester visible : **ne partez pas du prix de création ; partez de la couverture et du risque que votre entreprise accepte.**

### Plan de fond recommandé

1. **La question à trancher** : disponibilité, criticité et horizon.
2. **Ce qui est vraiment acheté** : hébergement, support, correction, prévention, sauvegarde, sécurité, évolutions, équipe interne.
3. **Le registre de preuves** : factures, contrat, incidents, versions, accès, temps.
4. **Trois budgets fictifs égaux** : simple, central, exigeant ; TCO 12/36/60.
5. **Le niveau de service** : gravité, horaires, SLA, MTTR, astreinte, monitoring.
6. **La preuve de reprise** : RPO/RTO, restauration, rollback, dépendances.
7. **La sécurité dans le budget** : patch, vulnérabilités, accès, logs, secrets, fin de support.
8. **Comparer les modèles** : contrat, lot, interne, éditeur, régie, migration.
9. **Le coût de partir** : portabilité, données, code, documentation, double run, suppression.
10. **Mesurer après décision** : budget/réalisé, incidents, délais, restauration, valeur.
11. **Checklist à télécharger et CTA** : livrable concret, périmètre et prochaine conversation.

### Avis Hagnéré à assumer

Une opinion professionnelle peut être formulée ainsi, à condition de la présenter comme un principe de décision et non comme une vérité chiffrée :

> « Pour une PME, le contrat le moins cher n’est pas forcément le plus économique. Si personne ne sait restaurer les données, répondre à un incident ou reprendre le code, la dépense annuelle ne couvre pas le risque principal. Nous préférons un périmètre plus petit mais prouvable à un forfait large dont les délais, exclusions et responsabilités restent flous. »

Cette opinion doit être suivie d’un critère vérifiable (test de restauration, journal des accès, délai mesuré, liste des versions, coût de sortie).

## 9. Conversion : ce que le prospect doit comprendre

Le CTA `/demarrer-un-projet` est cohérent mais trop abstrait. Avant le bouton, ajouter trois engagements précis :

1. **Vous apportez** : factures, contrat, historique d’incidents et feuille de route.
2. **Vous repartez avec** : postes connus, postes non chiffrés, questions de couverture et prochaines preuves.
3. **Ce que l’échange ne promet pas** : pas de tarif ferme sans périmètre, pas de garantie de disponibilité, pas d’audit réglementaire implicite.

Un téléchargement libre du registre (Markdown + CSV ou tableur) serait préférable à une simple liste à recopier. Il doit être accessible sans formulaire bloquant, versionné, daté et cohérent avec le guide. Le formulaire de contact peut proposer ensuite un accompagnement personnalisé.

## 10. Audit technique, faits et manifests

### 10.1. Fichiers et hachages observés

| Élément | SHA-256 observé |
|---|---|
| `src/app/guides/cout-maintenance-application-metier/page.tsx` | `e2c0fab0dc0787d4f9a2a32cfb44d33d76ff29d233f3d7d295a2c57d02bf67b4` |
| `src/app/guides/cout-maintenance-application-metier/opengraph-image.tsx` | `8a191ff4136490f014cce5a95070ff517cd22840fb0192efaa9405a077b18b54` |
| `src/lib/guides.ts` | `8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09` |
| `docs/research/cout-maintenance-application-metier.md` | `84844cea676d9f5083b352e99b1d57dab7321603c08f2832ae7f863915ae9f9b` |

### 10.2. Architecture constatée

- Métadonnées Next.js, canonique, `Article` et `BreadcrumbList` présents.
- Aucun `FAQPage`, `HowTo`, `Offer`, faux avis ou `wordCount` déclaré ; c’est conforme à la charte.
- OG déclaré en 1 200 × 630 dans `opengraph-image.tsx`.
- H1 unique ; huit questions FAQ visibles ; quatre liens internes utiles.
- Le registre et les calculs sont dans le contenu HTML, non dans une image inaccessible.
- Le robots local observé est `noindex, nofollow` : ceci est un état local, pas une preuve de l’état de production ni d’indexation.

### 10.3. Manifestes

Le manifeste P4 correspond au snapshot actuel : les quatre fichiers de base et les fichiers liés listés dans `cout-maintenance-application-metier-p4.sha256` ont été contrôlés par SHA-256.

Les manifests P1, P2 et P3 sont historiques et ne correspondent plus tous aux fichiers actuels : le dossier de recherche, la page, l’OG, le registre ou des pages liées ont changé après ces passes. Ce n’est pas un P0, mais cela interdit d’écrire que les quatre portes sont encore prouvées par leur ancien snapshot. **Pour une future publication, refaire P1–P4 ou produire un nouveau snapshot global après les corrections.**

### 10.4. Rendu

Le contrôle de navigateur indépendant disponible dans cet audit a vérifié la route locale à 1 200 px : H1 unique, H2, JSON-LD, liens et absence de débordement des tableaux. Les affirmations du dossier P4 concernant 320, 390, 768, 1 024 et 1 440 px ne sont pas une sortie reproductible conservée par cet audit ; elles doivent être rejouées après réécriture. Le guide ne peut donc pas être déclaré validé sur toutes les largeurs à partir de ce rapport.

### 10.5. Faits volatils et limites

- La CNIL consultée est datée du 14 mars 2024 et reste disponible ; elle concerne l’encadrement des accès de maintenance et la fin de vie, pas un prix.
- La page ASD/ACSC consultée a été mise à jour le 9 juin 2026 ; ses contrôles sont destinés aux organisations et gouvernements australiens. Ils servent de benchmark opérationnel, pas de droit français.
- NIST SP 800-34 Rev. 1 date de 2010, avec une note de planification 2023 : à utiliser pour l’architecture de continuité, pas pour une affirmation de règle actuelle universelle.
- Le NCSC britannique est récent (20 mai 2025) et explicite sur le coût et le risque du déclassement ; il ne fournit pas un tarif de maintenance.
- Légifrance a refusé la vérification automatisée par `curl` (403 anti-bot) ; cela limite l’automatisation, mais ne prouve pas que le lien est cassé. Une vérification humaine du contenu doit être refaite avant publication.

## 11. Plan d’action de réécriture

### Passe 1 — Recherche à rouvrir

- refaire la SERP à la date de rédaction ;
- ajouter les cinq benchmarks internationaux et leurs limites ;
- rechercher aussi `SLA maintenance application`, `RPO RTO PME`, `coût reprise logiciel`, `sortie SaaS données`, `maintenance équipe interne logiciel` ;
- mettre à jour le brief et l’anti-cannibalisation avec les guides SLA/TMA/reprise/ROI ;
- établir une fiche de faits : sources, dates, portée, volatilité, dépendance légale.

### Passe 2 — Réécriture auteur

- réécrire l’ouverture et le verdict ;
- ajouter les trois scénarios et le TCO ;
- ajouter SLA, RPO/RTO, sécurité, capacité, coût de panne et sortie ;
- construire la matrice des modèles de maintenance ;
- publier le registre téléchargeable ;
- rendre le CTA concret et conserver une limite honnête.

### Passe 3 — Contre-audit indépendant

- recalculer chaque ligne et chaque scénario ;
- vérifier que les scénarios sont à périmètre égal et qu’aucun coût ne disparaît ;
- contrôler toutes les sources et leur portée ;
- rechercher les promesses implicites de disponibilité, sécurité, conformité ou économie ;
- comparer le guide à au moins trois concurrents et trois sources internationales ;
- fermer la porte si un P1 reste ouvert.

### Passe 4 — Plume et QA

- lecture à voix haute par un humain non technique ;
- vérifier que chaque H2 répond à une question et contient un résultat observable ;
- tests navigateur 320/390/768/1 024/1 440 px ;
- route, HTML, canonique, OG 1 200 × 630, JSON-LD, liens et console ;
- nouveau manifest global et date de modification cohérente ;
- statut maximal `ready-for-human-review` tant qu’une revue humaine et la décision d’indexation ne sont pas prouvées.

## 12. Verdict final et seuil de sortie

Le guide est **bon comme méthode de première collecte**, mais pas encore comme guide de référence complet sur le coût de maintenance d’une application métier. Il gagnerait réellement à être plus long, non en ajoutant du remplissage, mais en ajoutant les décisions que le budget masque aujourd’hui : niveau de service, reprise, sécurité, capacité, comparaison et sortie.

La sortie « GO » ne devrait être accordée qu’après :

- 0 P0 et 0 P1 ;
- score ≥ 90/100, avec intention, décision, pédagogie, profondeur, preuve et comparaison ≥ 9/10 ;
- trois scénarios chiffrés à périmètre égal et TCO 12/36/60 ;
- benchmark FR + US/UK + Australie ou DACH documenté ;
- fiche téléchargeable réellement testée ;
- vérification navigateur aux cinq largeurs ;
- nouveau manifest P4 correspondant exactement au snapshot livré ;
- revue humaine explicitement consignée.

**Conclusion : conserver la base, rouvrir la recherche et réécrire en profondeur avant de qualifier ce guide de meilleur ou de le prendre comme modèle définitif pour toute la série.**
