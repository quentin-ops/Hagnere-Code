# Giga-audit — `reprendre-logiciel-metier-existant`

**Audit exécuté le 24 juillet 2026 — lecture seule**  
**Périmètre :** guide publié, dossier de recherche, registre, image Open Graph, composants observables, concurrence française et internationale, sources primaires, pédagogie dirigeant, décision de reprise, sécurité, propriété, données, continuité, coûts, conversion et SEO observable.  
**Aucun guide, code, registre, fichier partagé ou élément Git n’a été modifié.**

## 1. Verdict exécutif

### Décision

Le guide est **utile et nettement plus sérieux qu’une checklist technique commerciale**, mais il n’est pas encore la réponse la plus complète possible pour un dirigeant qui doit reprendre un logiciel critique. Il explique bien les accès, la restauration, les tests, les opérations métier et le refus de réécrire par réflexe. Il manque toutefois une vraie décision à trois horizons — première semaine, 30 jours, 90 jours —, un cas chiffré de coût/risque, des critères de sortie mesurables, un traitement plus précis des droits et de la chaîne de sous-traitance, ainsi qu’un protocole de transition avant de donner congé à l’ancien prestataire.

**Score indépendant avant correction : 82/100.**  
Le seuil de la charte est 90/100, avec aucun axe clé sous 8/10. Les défauts P1 ci-dessous empêchent de qualifier la page de référence définitive, même si aucun P0 n’a été trouvé dans le texte observé.

### Forces qui doivent être conservées

- L’ouverture parle à un dirigeant confronté au silence du prestataire, aux incidents et au risque de perdre données ou activité (`page.tsx:233-264`).
- Le guide donne une réponse claire : contrôler les comptes, restaurer une sauvegarde et installer/modifier une copie avant de promettre des évolutions (`page.tsx:247-253`, `303-346`).
- Les tests sont observables et non documentaires : installation isolée, restauration, trois opérations métier, correction limitée et absence du prestataire (`page.tsx:455-500`).
- La page refuse l’équivalence dangereuse « code ancien = réécriture » et propose reprise, stabilisation, migration ou remplacement (`page.tsx:592-649`).
- Les limites sont honnêtes : pas de certification cyber, pas de réponse à incident, pas d’avis juridique et pas de promesse de reprise (`page.tsx:805-812`).
- Le conflit d’intérêt est moins agressif qu’un CTA qui promettrait une refonte ; la page invite à comparer deux propositions (`page.tsx:694-747`).

### Trois gains d’information prioritaires

1. **Donner une chronologie décisionnelle.** La page dit « premières 48 heures » puis propose un plan en six verbes, mais ne dit pas ce que le dirigeant doit obtenir à la fin de la première semaine, du jour 30 et du jour 90.
2. **Ajouter une grille de coût et de risque.** Sans prix inventé, montrer les postes à comparer : audit de reprise, sécurisation, maintenance, double exploitation, migration, formation, réécriture, coût d’un arrêt et sortie. Le dirigeant doit pouvoir comparer « reprendre sous conditions » à « remplacer ».
3. **Organiser la transition avant la rupture.** Les meilleures ressources internationales demandent d’inventorier dépendances, données, obligations, connaissances et contrat **avant** de donner le préavis à l’ancien fournisseur. Le guide actuel commence surtout au moment de la passation.

## 2. Snapshot reproductible

| Élément | Observation au 24/07/2026 |
|---|---|
| Route | `/guides/reprendre-logiciel-metier-existant` |
| Source | `src/app/guides/reprendre-logiciel-metier-existant/page.tsx` |
| Taille source | 886 lignes, 3 605 mots source |
| SHA-256 page | `f8d1b2c1a80b6a3f42ab58d7f0d0ded39575c1c85b64f10bf0828f52fbbe2223` |
| Open Graph | `src/app/guides/reprendre-logiciel-metier-existant/opengraph-image.tsx`, SHA-256 `99972f67a3a349c02f7cfc9b87978527a0b1b5799472bf5f8888ad56da72b5ca` |
| Registre | `src/lib/guides.ts`, SHA-256 `8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09` |
| Entrée registre | publié le 20/07/2026, modifié le 21/07/2026, lecture annoncée 13 min, section « Préparer son projet » |
| Dossier de recherche | `docs/research/reprendre-logiciel-metier-existant.md`, SHA-256 `4387109520f330ca86c6ed7e3fcc5f5835d13aab1ffb6c3415fc470390ddab14` |
| Charte | `docs/charte-qualite-guides.md`, SHA-256 `5ee616faa4959dc8ad2b0eb19a5b19ffbf53299b62665700093c5c176b0b8491` |
| Workflow | `docs/workflow-maitre-guides-4-passes.md`, SHA-256 `91f6caabd28fdf90c33198594894955d175871d218987457af3a7aff5d593631` |
| Modèle | `_modele-audit-guide.md`, SHA-256 `1871570ce33c2e6eebbb31dac56571b5f9e84229a48fedd26b50ad80db87a55f` |
| Robots | `guideRobots()` autorise `index,follow` seulement en production et hors statut de revue ; cela n’est pas une preuve de l’en-tête réellement servi. |
| Routes internes | Toutes les routes liées vérifiées par `test -f` existent dans le dépôt, dont maintenance, audit technique, propriété, dette, TMA, migration, reprise SaaS, Access et ROI. |

**Limites de vérification :** aucun navigateur, build, rendu à 320–1600 px, serveur de production, Search Console, sitemap ou header HTTP n’a été exécuté dans cet audit. Je ne déclare donc aucune QA visuelle, indexation ou performance de production.

## 3. Ce que le guide promet réellement

Le lecteur est invité à :

1. répondre à quatre questions de faisabilité : localisation, remise en route, récupération des données et petit changement réversible ;
2. réunir code, accès, sauvegardes, procédure de mise en ligne, fournisseurs, contrats et licences ;
3. sécuriser les premières 48 heures ;
4. exécuter cinq tests ;
5. observer trois à cinq opérations métier ;
6. protéger données, sauvegardes et secrets ;
7. choisir entre reprise, stabilisation, migration et réécriture ;
8. encadrer le contrat et comparer deux offres d’audit ;
9. suivre un plan de reprise générique en six étapes.

Cette progression est cohérente. Elle répond surtout à la question « pouvons-nous laisser une nouvelle équipe toucher l’existant ? ». Elle répond moins bien à « combien de temps et d’argent immobiliser ? », « quand donner congé ? », « qui reste responsable pendant la transition ? » et « à quel moment arrêter la reprise ? ».

## 4. Audit concurrentiel et saturation

### France

- [Codisys — Reprendre une application web existante](https://codisys.fr/articles/reprendre-application-web-existante.html) couvre code, base, dépendances, sécurité, sauvegardes, environnement de test, règles métier, performance, documentation et priorisation. Sa page est plus longue et plus technique, mais elle ne donne pas de critères aussi explicites de propriété, de sortie et de refus de maintenance.
- [Elipce — Reprise de logiciel existant](https://www.elipce.com/reprise-de-logiciel-existant) vend une reprise en maintenance et met en avant stabilité, sécurité, performance et adaptation. La page rassure, mais offre peu de preuves exécutées ou de seuils permettant au client de dire non.
- [Oniti — Reprise de logiciel et d’application](https://www.oniti.fr/expertises/creation-logiciel-metier/reprise-logiciel-application/) aborde audit, droits, reprise et refonte, avec une forte orientation prestation.
- [Adimeo — Les 9 étapes d’une reprise de projet TMA](https://www.adimeo.com/blog/reprise-projet-tma) couvre passation, rôles, accès, dette et gouvernance. C’est une couverture de processus solide, mais très orientée TMA et jargon.
- [ARDNTECH — Reprise de maintenance SaaS](https://ardn.tech/fr-fr/nos-services/reprise-maintenance-saas) met l’accent sur Git, CI/CD, sécurité, RGPD, dette et plan de reprise. Le périmètre est intéressant mais spécialisé et commercial.

**Saturation française :** la liste « récupérer code, accès, base, sauvegardes, déploiement, dépendances » existe déjà. La différenciation Hagnéré est bonne — restauration réellement testée, opérations métier, aucune compensation d’un échec critique — mais elle doit être complétée par la période **avant préavis**, une vraie chronologie 7/30/90 jours et des coûts de transition.

### États-Unis / anglais

- [Door3 — Project Handover Checklist](https://www.door3.com/blog/project-handover-checklist), publié le 22/01/2024, décrit le handover comme transfert de responsabilités, données et contrôle, puis détaille documentation, parties prenantes, livrables, risques, formation, outils et ressources. Il répond à l’angoisse du CEO et montre les effets d’un changement de fournisseur.
- [S-PRO — Project Handover Template](https://s-pro.io/blog/project-handover-how-to-change-a-software-development-vendor) rappelle qu’un handover est un processus de plusieurs mois et non un événement unique. La page est commerciale, mais la notion de montée progressive mérite d’être intégrée.
- [Nerdzlab — Guide to IT project handovers](https://nerdzlab.com/guide-to-it-project-handovers-for-businesses/) fournit une checklist de transfert destinée aux entreprises. La page n’a pas été ouverte de façon fiable pendant l’audit ; elle est retenue comme résultat concurrent, non comme preuve.
- [NIST SSDF 1.1](https://csrc.nist.gov/pubs/sp/800/218/final) donne un vocabulaire public pour versions, composants, provenance, configuration et dépendances. Il ne constitue ni audit ni certificat de reprise.

### Royaume-Uni

- [Propel Tech — Bespoke software supplier transition plan](https://propeltech.co.uk/media/nhop0y3p/bespoke-software-supplier-transition-plan.pdf) propose un plan de transition fournisseur avec communication, gestion des risques, transfert et back-out plan. Le PDF est une ressource commerciale, mais il montre l’attente de scénarios de retour arrière.
- [UK Government Cloud Computing Security Policy](https://www.gov.uk/government/publications/dwp-procurement-security-policies-and-standards/cloud-computing-security-policy) exige pour les services cloud critiques une stratégie de sortie documentée et testée assurant la portabilité sécurisée des données et services. Le périmètre est public/DWP, pas une obligation automatique pour toute PME française ; le principe de test d’Exit Plan est néanmoins une référence de maturité.

### Australie

- [April9 — Transition from a legacy software vendor](https://april9.com.au/blog/transition-from-legacy-software-vendor), publié le 24/06/2026, est la réponse étrangère la plus proche : dépendances, données, documentation, négociation avant préavis, migration par phases, fonctionnement parallèle, continuité des audits, contrôle des accès et suppression chez le fournisseur sortant. La page propose aussi un playbook téléchargeable et un CTA.

**Conclusion benchmark :** le guide Hagnéré est meilleur sur l’honnêteté (« ne pas réécrire automatiquement ») et la preuve de restauration que les pages commerciales génériques. Il est moins complet sur la préparation avant préavis, le fonctionnement parallèle, la conservation des journaux, la suppression chez l’ancien prestataire et la sortie testée. L’absence d’artefact téléchargeable est aussi un manque de conversion face à April9 et aux checklists américaines.

## 5. Matrice de gain d’information

| Besoin du dirigeant | Couverture actuelle | Réponse concurrente ou officielle | Gain | Priorité | Correction exacte |
|---|---|---|---|---|---|
| Savoir si l’activité peut continuer lundi | Intro + quatre questions | Plan d’urgence avant préavis et dépendances | Élevé | P1 | Ajouter un tableau « aujourd’hui / première semaine » avec responsable, preuve et interdiction d’agir. |
| Récupérer le contrôle des comptes | Très bon inventaire, droits nominatifs | US/UK ajoutent CI, monitoring, licences et plan de sortie | Élevé | P1 | Ajouter dépôt de secrets, CI/CD, monitoring, DNS, certificats, comptes de facturation et propriétaires. |
| Prouver restauration et livraison | Cinq tests concrets | UK exige exit strategy testée ; NIST formalise provenance/version | Très élevé | P1 | Ajouter preuves attendues : horodatage, données de référence, log, résultat, signataire, rollback. |
| Continuité des données | Fréquence, emplacement, contrôles métier | Australia ajoute audit trail, extraction, nettoyage, mapping, validation et suppression sortante | Très élevé | P1 | Ajouter RPO/RTO à renseigner, intégrité des journaux, export complet, qualité, réconciliation et certificat de suppression. |
| Propriété / droits | Contrats à rassembler, avertissement juridique | Sources L131-3/L113-9/L122-6 mais pas d’exemple contractuel | Élevé | P1 | Ajouter une fiche « preuve de droit » : contrat, auteurs, sous-traitants, composants tiers, licence, droit de modifier et droit de transférer. |
| Décider maintenir ou reconstruire | Quatre options qualitatives | Concurrence insiste sur coût de handover, dette et migration phased | Élevé | P1 | Ajouter critères de bascule et postes de coûts ; conserver l’option de refus/abandon si une porte rouge persiste. |
| Coût et durée | Aucune donnée chiffrée volontairement | Pages concurrentes donnent scénarios ou expliquent le coût de transition | Très élevé | P1 | Ajouter un modèle de TCO sans inventer de prix : audit, stabilisation, TMA, coexistence, migration, formation, réécriture, sortie, coût d’arrêt. |
| Transfert de connaissance | Observation de 3–5 opérations | Door3 et April9 distinguent documentation, sessions, workarounds et dépendance tacite | Élevé | P1 | Ajouter registre de connaissances : owner, preuve, session, enregistrement, test de restitution et date d’expiration. |
| Première semaine / 30 / 90 jours | 48 h + six verbes génériques | April9 propose phases, parallèle et monitoring post-transition | Très élevé | P1 | Remplacer le plan générique par jalons, livrables, critères Go/No-Go à J7/J30/J90. |
| Conversion | CTA après comparaison de propositions | Concurrents proposent checklist/playbook et consultation | Moyen à élevé | P2 | Proposer un modèle de coffre/checklist téléchargeable avec préremplissage possible ; conserver CTA honnête. |
| SEO | H1, metadata, Article, BreadcrumbList, FAQ visible | Lexique concurrent plus large : handover, exit plan, rollback, RPO/RTO, parallel run | Moyen | P2 | Ajouter ces termes avec définitions et liens, pas comme liste de mots-clés. |

## 6. Sources primaires et fraîcheur

### Validé ou solidement soutenu

- [CNIL — Guide pratique RGPD, sécurité des données personnelles](https://cnil.fr/sites/default/files/2026-05/cnil_guide_securite_personnelle.pdf), copie mise en ligne en mai 2026 mais titrée « Version 2024 ». Elle traite inventaire des traitements, sous-traitance, maintenance, fin de vie, sauvegardes, continuité, incidents et audits. Elle rappelle que les accès de télémaintenance doivent être ouverts pour une durée définie et refermés à l’issue (`PDF p. 36`, lignes observées 1101–1112) et que la chaîne de sous-traitance doit être considérée (p. 35).
- [ANSSI — Sauvegarde des systèmes d’information v1.1](https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf), version datée du 27/11/2025. La page actuelle cite cette ressource ; il faut en tirer une procédure de test, pas une promesse de restauration.
- [NIST SP 800-218 SSDF 1.1](https://csrc.nist.gov/pubs/sp/800/218/final), cadre public volontaire, publié en 2022. Il soutient l’inventaire versions/composants et la provenance, sans certifier le code repris.
- [OWASP Secrets Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html), page vivante, consultée le 24/07/2026. Elle permet de structurer propriétaires, usages, rotation et révocation des secrets, mais ne fixe pas une fréquence universelle.
- [RGPD EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/2016-05-04?locale=fr), articles 28 et 32, reste la source primaire pour sous-traitance et mesures de sécurité adaptées au risque. Il ne règle ni propriété du code ni transfert de comptes.
- [Légifrance — article L131-3 CPI](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958) et [article L122-6](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278919). Le texte est utile pour rappeler qu’une remise de fichiers ne tranche pas à elle seule les droits d’exploitation et d’adaptation ; il faut aussi vérifier L113-9 selon la relation de travail et obtenir un conseil juridique pour le dossier réel.
- [UK DWP Cloud Computing Security Policy](https://www.gov.uk/government/publications/dwp-procurement-security-policies-and-standards/cloud-computing-security-policy), version publique sectorielle : stratégie de sortie documentée et testée pour cloud critique, à citer comme benchmark et non comme loi française.

### Faiblesses de fraîcheur dans le guide

1. La page renvoie vers l’ancienne URL CNIL `https://www.cnil.fr/sites/default/files/2024-03/cnil_guide_securite_personnelle_2024.pdf`; la ressource officielle 2026 observée est `https://cnil.fr/sites/default/files/2026-05/cnil_guide_securite_personnelle.pdf`. **P1** : remplacer ou vérifier la redirection avant nouvelle publication.
2. Le texte affiche « recherche effectuée le 20 juillet 2026 » et le registre « modifié le 21 juillet » ; ce n’est pas faux, mais la page devra changer sa date après toute correction réelle. **P2**.
3. La source de la page ne lie pas directement les articles L113-9/L122-6, seulement L131-3 et une mention textuelle. **P2** pour traçabilité.
4. Les sources ANSSI, NIST et OWASP sont correctement présentées comme cadres et non comme certifications ; conserver cette prudence.

## 7. Audit de pédagogie humaine

### Ce qui parle à un humain

- La question « le service peut-il continuer si le serveur tombe demain ? » traduit le sujet technique en risque métier (`page.tsx:307-312`).
- Les exemples « facturer, préparer une commande, planifier une intervention, répondre à un client » rendent la panne concrète.
- La distinction « fichier de sauvegarde présent » / « restauration réussie » est pédagogique et mémorable.
- Le texte protège le lecteur contre l’agence qui promet une refonte avant examen (`page.tsx:698-735`).

### Ce qui reste trop abstrait

- « Contrôle simple » ne dit pas toujours quel artefact conserver : capture, log, hash, date, signature, résultat métier ou responsable.
- « Les premières 48 heures » ne précise pas l’ordre en cas de départ conflictuel, de préavis imminent ou d’incident en cours.
- « Les trois à cinq opérations » ne propose aucun formulaire de capture, critères de réussite ni exemple rempli.
- « Maintenance progressive » et « stabilisation » ne disent pas quelle capacité l’entreprise doit financer avant d’accepter la prochaine évolution.
- La page mentionne les contrats mais ne donne pas la clause concrète de restitution, d’assistance de sortie, de suppression des données, de transfert des sous-traitants et de conservation des journaux.

### Réécriture pédagogique exacte recommandée

Insérer après l’InfoBox « La réponse simple » un bloc de décision :

> **Si vous devez décider cette semaine :** ne donnez pas encore un accès de production permanent. Nommez un responsable, faites l’inventaire des comptes, copiez les sauvegardes, demandez une restauration isolée et écrivez les trois opérations qui ne doivent pas s’arrêter. À J7, vous devez savoir ce que la nouvelle équipe peut prouver ; à J30, ce qui est stabilisé ; à J90, si la maintenance, la migration ou le remplacement est raisonnable.

Ce texte donne l’action et le délai sans promettre une durée technique universelle.

## 8. Décisions, scénarios et coûts manquants

### Scénarios que le lecteur doit comparer

La page présente quatre trajectoires mais aucun coût. Ajouter un tableau de structure, avec les montants saisis par l’entreprise et non inventés par Hagnéré :

| Option | Coûts à saisir | Preuve de sortie | Quand l’arrêter |
|---|---|---|---|
| Reprendre sous conditions | audit, transfert, environnement de test, sécurisation, première TMA, documentation | build, restauration, correction réversible, comptes maîtrisés | une porte critique reste rouge ou l’accès/droit est impossible |
| Stabiliser puis maintenir | reprise + dette urgente + monitoring + tests + budget de maintenance | incidents critiques en baisse, déploiement répétable, RPO/RTO acceptés | coût de stabilisation dépasse le remplacement ou la dette empêche le métier |
| Migrer par lots | extraction, nettoyage, mapping, coexistence, licences doubles, formation, support | réconciliation des données, parallèle, cutover et rollback | migration impossible ou qualité des données non démontrable |
| Réécrire/remplacer | cadrage, développement, migration, formation, coexistence, sortie, réserve | critères d’acceptation et plan de continuité | valeur non démontrée, budget non finançable ou dépendances non maîtrisées |
| Abandonner/report | maintien minimal, confinement, archivage, décision juridique | données exportées, service de secours, date de réexamen | aucun propriétaire, incident actif, droits non résolus ou service non critique |

### Formules sans invention

- `Coût de reprise = audit + transfert + sécurisation + environnement + première correction + documentation`.
- `Coût de maintien à 12 mois = coût de reprise + TMA + hébergement + licences + monitoring + évolutions urgentes`.
- `Coût de migration = extraction + nettoyage + mapping + validation + coexistence + formation + support + sortie`.
- `Coût de réécriture = cadrage + construction + migration + double fonctionnement + formation + exploitation + réserve de risque`.
- `Perte attendue = probabilité d’incident × impact financier/documenté`, séparée des coûts certains.
- `Point d’arrêt = date à laquelle une preuve critique reste manquante ou le coût restant dépasse l’option alternative documentée`.

Le guide ne doit pas transformer ces formules en prix moyens de marché. Il doit fournir les lignes à remplir et demander la source de chaque montant.

### RPO/RTO à faire renseigner

- **RPO** : quantité maximale de données que l’entreprise accepte de perdre, exprimée en durée ou en volume.
- **RTO** : durée maximale acceptable avant retour du service essentiel.

La page parle de fréquence de sauvegarde, mais sans demander explicitement ces deux objectifs ni montrer comment ils changent le coût de la reprise. C’est un P1 pour une application métier critique.

## 9. Plan première semaine / 30 / 90 jours

### Avant le préavis ou dès le jour 0

1. Nommer le propriétaire métier et le décideur.
2. Geler les changements non urgents et préserver les éléments utiles.
3. Copier code, configuration, bases, fichiers, journaux, contrats et factures.
4. Inventorier DNS, cloud, CI/CD, monitoring, certificats, e-mails, paiement, API, licences, sous-traitants et comptes de facturation.
5. Fixer RPO/RTO provisoires, services essentiels, fenêtre de changement et plan de contact.
6. Faire relire le préavis et l’assistance de transition par le juridique lorsque nécessaire.

### Fin de semaine 1 — décider si l’on peut poursuivre

Livrables obligatoires : coffre d’actifs, liste de propriétaires, snapshot horodaté, restauration isolée, trois parcours métier rejoués, registre des incidents, droits encore inconnus, RPO/RTO provisoires et décision « reprise conditionnelle / confinement / arrêt ».

### Jour 30 — rendre la reprise pilotable

Livrables : environnement de test reproductible, premier changement réversible, procédure de déploiement, inventaire des dépendances, qualité et couverture des sauvegardes, carte de données personnelles, responsabilités contractuelles, estimation des coûts de stabilisation et plan de sortie.

### Jour 90 — choisir la trajectoire

La direction doit recevoir : incidents et tendances, temps de rétablissement observé, résultats de restauration, couverture des tests métier, dette priorisée par impact, coût réel de la reprise, coût de coexistence, options migration/réécriture, critères d’arrêt et date de revue. Sans ces éléments, la maintenance ne doit pas devenir une promesse illimitée.

## 10. Position professionnelle et contre-cas

### Opinion tranchée

**La présence du code n’est pas une preuve de reprenabilité.** Une reprise n’est raisonnable que si l’entreprise maîtrise les comptes structurants, peut restaurer des données cohérentes, peut reproduire un parcours métier et possède une voie de livraison avec retour arrière. Le code ancien peut être maintenu ; l’absence de preuve de contrôle ne peut pas être compensée par la bonne volonté du nouveau prestataire.

**Le prestataire qui promet une TMA avant ces preuves prend un risque que le client finira par payer.** La réponse professionnelle est parfois une mission de sécurisation limitée, une migration ou un refus de reprise.

### Contre-cas à montrer

- **Petit outil non critique, sans données personnelles sensibles :** un audit plus léger peut être proportionné ; exiger le même niveau que pour une facturation ou un dossier santé serait coûteux sans gain équivalent.
- **SaaS vendu à des clients :** la reprise doit ajouter support client, abonnements, paiements, obligations de niveau de service, sous-traitants et communication d’incident ; renvoyer au guide spécialisé ne suffit pas si le lecteur est dans ce cas.
- **Incident cyber actif :** ne pas appliquer la checklist normale ; préserver preuves et activer une réponse à incident compétente.
- **Droits litigieux :** ne pas modifier ni redistribuer le code sur la base d’une facture ; suspendre l’évolution non urgente et obtenir un avis juridique.
- **Migration imposée par une fin de support :** maintenir l’existant peut être la solution la plus risquée, même si le code fonctionne aujourd’hui ; la date de fin et la capacité de sortie deviennent les variables dominantes.

## 11. Conversion et produit

### État actuel

Le CTA est placé après la comparaison d’offres et promet un diagnostic compréhensible, des risques et plusieurs options (`page.tsx:739-747`). Il est cohérent avec l’intention et n’affirme pas que Hagnéré acceptera la maintenance.

### Manque principal

La page annonce un « dossier partagé » et des listes copiables, mais ne fournit ni modèle téléchargeable ni exemple rempli. Les concurrents US/Australie proposent checklist ou playbook. Pour convertir sans manipuler :

1. ajouter un coffre de reprise vierge (tableur ou document) ;
2. inclure onglets actifs, propriétaires, secrets, dépendances, sauvegardes, tests, métier, droits, dette et décisions ;
3. prévoir une colonne preuve, date, responsable, statut et prochaine action ;
4. proposer ensuite une relecture humaine du coffre, pas une promesse de reprise.

Le CTA devrait distinguer « je veux sécuriser moi-même », « je compare deux repreneurs » et « je dois remplacer l’outil ». Un seul CTA principal reste préférable à une page saturée de formulaires.

## 12. SEO et technique observable

### Positif

- H1, title (52 caractères), meta description (138 caractères), canonical, Open Graph et Twitter sont déclarés.
- `Article` et `BreadcrumbList` JSON-LD sont présents avec auteur, dates, langue, section et image.
- FAQ visible dans le DOM via `GuideFAQSection`; aucun schéma `FAQPage` artificiel n’est ajouté.
- La page dispose d’un hero action vers `#premiere-reponse`, d’un maillage profond et d’un CTA unique.
- L’image OG est dédiée, avec le titre, l’idée « changer d’équipe » et cinq éléments de contrôle.

### Risques observables

- La keypoint « 3 décisions possibles » est incohérente avec la table qui en propose quatre : reprise, stabilisation, migration et réécriture (`page.tsx:179-182`, `592-629`). **P1**, car elle peut induire une décision incomplète.
- Le hero et le registre annoncent 13 minutes pour environ 3 605 mots source : estimation possiblement basse. Il faut mesurer le texte rendu, pas seulement le fichier TS. **P2**.
- La date `dateModified` du registre reste au 21/07 alors que l’audit et les sources actuelles sont au 24/07. **P2** jusqu’à une modification éditoriale réelle.
- Le CTA `GuideInlineCTA` utilise son href par défaut `/demarrer-un-projet`; le code du composant le confirme. Ce n’est pas un lien cassé, mais le rapport de publication doit vérifier la destination réelle en production.
- Aucune indexation, canonical servi, robots HTTP, sitemap, OG rendu ou responsive réel n’est prouvé ici.

## 13. Défauts par sévérité

### P0 — aucun constaté

Je n’ai pas trouvé de fausse statistique, de témoignage inventé, de prix présenté comme réel, de promesse de zéro interruption ou d’avis juridique catégorique. Le guide distingue explicitement cyberincident, droit et reprise normale. Une future version qui affirme « propriétaire » ou « sécurisé » sans contrat et test ferait immédiatement basculer le défaut en P0.

### P1 — corriger avant une publication de référence

| ID | Défaut | Preuve | Risque | Correction exacte |
|---|---|---|---|---|
| P1-01 | Contradiction « 3 décisions » / 4 options | `page.tsx:179-182`, `592-629` | La promesse de lecture ne couvre pas la décision réelle | Remplacer par « 4 trajectoires » ou regrouper explicitement migration/réécriture, puis garder les quatre options partout. |
| P1-02 | Aucun plan J7/J30/J90 | `page.tsx:749-803` reste un ordre de six étapes sans dates | Le dirigeant ne sait pas quand autoriser la maintenance ou arrêter | Ajouter livrables et critères Go/No-Go de la section 9 de cet audit. |
| P1-03 | Coûts absents | Aucune somme, poste ou modèle dans la page | Impossible de comparer reprise, stabilisation, migration et réécriture | Ajouter une grille TCO/formules sans inventer de prix ; lier au guide ROI pour le calcul détaillé. |
| P1-04 | Transition avant préavis absente | La page commence à la passation | Le client découvre trop tard dépendances, droit d’export et connaissances détenues par le sortant | Ajouter un bloc « avant de donner congé » : inventaire, accord de transition, export et assistance. |
| P1-05 | RPO/RTO et preuves de restauration non formalisés | `page.tsx:553-583` parle de fréquence/emplacement mais pas d’objectifs ni rapport de test | Une sauvegarde peut être déclarée correcte sans savoir quelle perte/indisponibilité est acceptable | Ajouter RPO/RTO, données de référence, horodatage, résultat, responsable et réconciliation. |
| P1-06 | Chaîne de dépendances incomplète | Le tableau cite fournisseurs/abonnements mais pas CI/CD, monitoring, certificats, jobs, sous-traitants et suppression sortante | Blocage ou fuite lors du changement | Ajouter inventaire de dépendances et test de révocation/suppression. |
| P1-07 | Droits trop généraux | `page.tsx:651-676` renvoie aux contrats sans preuve de chaîne d’auteurs/composants | Le client peut confondre livraison du dépôt et droit de modifier/transférer | Ajouter fiche de preuve juridique et avertissement conseil, avec liens directs L131-3/L113-9/L122-6. |
| P1-08 | CNIL URL vieillissante | page utilise URL 2024-03, copie officielle 2026-05 observée | Source inaccessible ou fraîcheur ambiguë sur sous-traitance/maintenance | Remplacer par l’URL officielle actuelle ou confirmer la redirection avant publication. |
| P1-09 | Critère de refus encore qualitatif | `page.tsx:786-803` ne nomme pas seuils d’arrêt | Le prestataire peut prolonger une reprise indéfiniment | Ajouter portes critiques, coût restant, preuve minimale et date de décision. |
| P1-10 | Conduite en cas de rupture hostile insuffisante | Le guide dit de sécuriser les comptes mais ne décrit pas préservation, assistance et communication | Révocation précipitée ou perte de preuve | Ajouter une bifurcation « conflit/cyber/litige » vers juridique et réponse à incident, sans agir comme conseil. |

### P2 — améliorer ensuite

| ID | Amélioration | Action |
|---|---|---|
| P2-01 | Lecture annoncée possiblement basse | Mesurer le texte rendu et ajuster `readTimeMin`. |
| P2-02 | Date de recherche antérieure à l’audit | Mettre à jour après modification réelle, jamais pour l’apparence. |
| P2-03 | Absence de ressource libre | Ajouter coffre/checklist téléchargeable versionné et testé. |
| P2-04 | Lexique SEO | Introduire handover, vendor transition, exit plan, rollback, RPO/RTO, parallel run avec définitions en français. |
| P2-05 | Preuve humaine | Tester le guide auprès d’un dirigeant non technique ; aucun test réel n’est prouvé dans cet audit. |
| P2-06 | Source juridique | Ajouter les URL directes des articles mentionnés et la date de vérification. |
| P2-07 | Contrat | Donner exemples de livrables de sortie, formats, délais, assistance et effacement, sans modèle juridique universel. |

## 14. Scorecard indépendante avant correction

| Axe | Note /10 | Justification |
|---|---:|---|
| Intention | 9 | Situation déclenchante et question du changement d’équipe immédiatement compréhensibles. |
| Décision | 8 | Quatre trajectoires et conditions de refus, mais pas de jalons J7/J30/J90 ni coût de choix. |
| Pédagogie | 8 | Voix humaine et tests concrets ; preuve attendue parfois trop abstraite. |
| Profondeur | 8 | Accès, données, métier, dette, contrat et sécurité couverts ; transition préalable et sortie incomplètes. |
| Preuve | 7 | Sources officielles nombreuses, mais CNIL URL vieillissante et liens juridiques partiels. |
| Comparaison | 8 | Quatre options et deux propositions d’audit ; pas de TCO, RPO/RTO ni score de bascule. |
| Originalité | 9 | Refus de compenser les portes critiques, restauration et opérations métier comme preuves. |
| Style | 9 | Prose claire, non technique, opinion équilibrée et aucune glorification de la réécriture. |
| Conversion | 8 | CTA honnête et contextualisé ; absence de coffre téléchargeable et de segmentation du prochain pas. |
| SEO / produit | 8 | Metadata/JSON-LD/maillage solides ; incohérence « 3 décisions » et production non vérifiée. |
| **Total** | **82/100** | **Sous le seuil de 90 ; P1 à corriger.** |

## 15. Plan de correction localisable

### Passe 1 — recherche et preuve

1. Revalider CNIL 2026, ANSSI v1.1, RGPD, Légifrance et NIST à la date de publication.
2. Ajouter les sources UK/Australie comme benchmark, en distinguant clairement leur périmètre public/commercial.
3. Documenter les limites de propriété, données personnelles, sous-traitance, incidents et droits de modification.

### Passe 2 — réécriture

1. Corriger « 3 décisions » en quatre trajectoires.
2. Ajouter la bifurcation avant préavis et la chronologie J7/J30/J90.
3. Ajouter TCO/formules, RPO/RTO et critères de sortie.
4. Conserver la mise en garde cyber et juridique, mais orienter vers les bons spécialistes.

### Passe 3 — contre-audit

1. Refaire l’inventaire de chaque actif : code, configuration, CI/CD, monitoring, DNS, certificats, secrets, données, journaux, licences, facturation et sous-traitants.
2. Vérifier que chaque ligne possède une preuve exécutable, un owner, une date et une action en cas d’échec.
3. Simuler quatre décisions et vérifier qu’un échec critique ne peut pas être masqué par un score global.
4. Tester la cohérence de tous les liens, titres, dates et sources directes.

### Passe 4 — humanisation et QA publication

1. Faire relire par un dirigeant non technique qui n’a pas écrit le texte.
2. Build, lint, TypeScript et tests SEO.
3. Inspection navigateur réelle à 320, 390, 768, 1024, 1280 et 1600 px, avec tableaux, FAQ, CTA et états d’erreur.
4. Vérification déployée : HTML, canonical, robots, sitemap, JSON-LD, OG et indexation séparés.

## 16. Conditions de sortie

Le guide est prêt pour revue humaine lorsque :

- les quatre trajectoires et la contradiction de keypoint sont corrigées ;
- J7/J30/J90 et leurs livrables sont écrits ;
- le transfert avant préavis, le fonctionnement parallèle et la sortie sortante sont traités ;
- chaque actif critique et chaque preuve de test ont owner, date et résultat ;
- RPO/RTO, qualité des données, journaux, suppression et sous-traitants sont explicitement couverts ;
- les coûts de reprise, stabilisation, migration, réécriture et abandon sont comparables sans prix inventés ;
- l’URL CNIL est à jour et les articles de loi directement liés ;
- le score atteint au moins 90/100 sans axe clé sous 8/10 ;
- une QA humaine et navigateur réelle, puis une vérification de production, sont consignées séparément.

## Sources consultées — accès au 24/07/2026

### Sources primaires et cadres

- [CNIL — Guide pratique RGPD, sécurité des données personnelles](https://cnil.fr/sites/default/files/2026-05/cnil_guide_securite_personnelle.pdf), version mise en ligne en mai 2026.
- [ANSSI — Sauvegarde des systèmes d’information v1.1](https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf), 27/11/2025.
- [NIST SP 800-218 SSDF 1.1](https://csrc.nist.gov/pubs/sp/800/218/final), 2022.
- [OWASP Secrets Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html), page vivante.
- [RGPD — EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/2016-05-04?locale=fr), articles 28 et 32.
- [Légifrance — CPI L131-3](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958), [L122-6](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278919) et [L113-9](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039279818).
- [UK DWP Cloud Computing Security Policy](https://www.gov.uk/government/publications/dwp-procurement-security-policies-and-standards/cloud-computing-security-policy), référence sectorielle pour exit plan testé.

### Pages concurrentes et couverture

- [Codisys](https://codisys.fr/articles/reprendre-application-web-existante.html)
- [Elipce](https://www.elipce.com/reprise-de-logiciel-existant)
- [Oniti](https://www.oniti.fr/expertises/creation-logiciel-metier/reprise-logiciel-application/)
- [ARDNTECH](https://ardn.tech/fr-fr/nos-services/reprise-maintenance-saas)
- [Adimeo](https://www.adimeo.com/blog/reprise-projet-tma)
- [Door3](https://www.door3.com/blog/project-handover-checklist)
- [S-PRO](https://s-pro.io/blog/project-handover-how-to-change-a-software-development-vendor)
- [Nerdzlab](https://nerdzlab.com/guide-to-it-project-handovers-for-businesses/)
- [Propel Tech](https://propeltech.co.uk/media/nhop0y3p/bespoke-software-supplier-transition-plan.pdf)
- [April9 Australia](https://april9.com.au/blog/transition-from-legacy-software-vendor)

