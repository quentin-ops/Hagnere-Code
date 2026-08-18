# Audit approfondi — `audit-technique-avant-reprendre-site`

Date : 24 juillet 2026  
Auditeur : audit éditorial, reprise technique, risque, TCO et contrôle QA en lecture seule  
Snapshot : `src/app/guides/audit-technique-avant-reprendre-site/page.tsx`, SHA-256 `82d4b09abb54160f731b46a1ee4d578c49cef8e243ae7b705947df5b7d59f573` ; image sociale SHA-256 `934585c4c3e652ab009b226a1f6213fca6f42f400f7a31783176c86d1caa13f2` ; dossier de recherche SHA-256 `681cebb28c6d9f08a45f5da0a5bbf42c29a76b7e75956cef9fe22e6279030d3b` ; registre SHA-256 `8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09`. Entrée du registre publiée et modifiée le 24 juillet 2026, `readTimeMin: 16`.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant de TPE/PME qui change d'agence ou de développeur et doit savoir s'il peut laisser toucher son site, ses données et ses comptes sans signer une dette invisible.
Question réelle : « Qu'est-ce que je dois contrôler avant de confier le site, combien coûte un audit raisonnable, et faut-il stabiliser, migrer, réécrire ou refuser la reprise ? »
Décision attendue : choisir un niveau d'audit, obtenir les preuves minimales, classer les risques et décider entre GO, GO sous réserves, stabilisation, migration, réécriture à périmètre égal ou STOP.
Réponse actuelle en une phrase : le guide propose une excellente méthode de preuve (accès, copie restaurée, publication et fonctions métier), protège le dirigeant des promesses et sépare reprise/migration ; il ne couvre pas encore assez l'inventaire complet d'infrastructure, des dépendances/licences, de la performance, de l'observabilité, des coûts ni la comparaison chiffrée des options.
Défaut qui coûte le plus de valeur : la page oppose utilement « preuve » et « affirmation », mais laisse le lecteur sans budget ni matrice de périmètre ; il ne sait pas quand un audit léger suffit, quand un audit complet est économiquement rationnel ou quand la migration serait plus chère que la stabilisation.
Niveau actuel : B+ (très bon cadre de confiance, incomplet comme décision d'investissement et de reprise industrielle).
Priorité : haute.
Statut : audité ; aucun guide source, registre ou fichier Git modifié.
```

### Score avant correction

| Axe | Note /10 | Preuve localisable | Manque décisif |
| --- | ---: | --- | --- |
| Intention | 9 | introduction et promesse « contrôler, restaurer, tester » | question budget/option non posée assez tôt |
| Décision | 9 | GO, GO sous réserves, STOP et modèle de réserve | pas de stop-go chiffré ni seuil par criticité |
| Pédagogie | 9 | progression preuve/test/conséquence, langage non technique | inventaire de couches trop implicite |
| Profondeur | 8 | accès, backup, publication, fonctions, RGPD, migration | dépendances, licences, CI/CD, sécurité, observabilité, SEO et performance incomplets |
| Preuve | 9 | WordPress, CNIL, Afnic, GitHub, OWASP, Google | benchmark international et sources supply-chain manquants |
| Comparaison | 7 | reprise vs hébergement/URL/migration | audit léger/complet et refuser/stabiliser/migrer/réécrire non comparés |
| Originalité | 10 | six fiches preuve/test/conséquence et réserves contractuelles | peu d'outil de coût et de scoring de risque |
| Style | 9 | ton calme, anti-panique, précautions juridiques | densité et longueur des sections avant décision |
| Conversion | 8 | maillage, CTA indirect et forte confiance | livrable, durée, fourchette et critères d'entrée non explicités |
| SEO/produit | 8 | metadata via helper, Article/Breadcrumb, FAQ, maillage | `readTimeMin`, OG, liens et responsive non vérifiés |

Total : **86/100**.

La page est déjà une des plus solides du corpus sur la prudence : elle refuse de transformer une inconnue en défaut et interdit de toucher au site public pour « prouver » quelque chose. Le déficit est commercial et opérationnel, pas rédactionnel : le décideur doit pouvoir choisir un audit et une trajectoire à périmètre constant sans que l'audit devienne une machine à vendre une refonte.

## 2. Ce que le guide dit réellement

### Progression observée

Le guide commence par trois preuves : contrôle légitime des comptes, restauration d'une copie hors public, test des fonctions métier. Il développe ensuite :

1. différence entre affirmation, preuve et décision ;
2. contrôle du domaine, hébergement, code, comptes et contrats ;
3. restauration isolée, données fictives et neutralisation des paiements ;
4. tests formulaire, rendez-vous, paiement, espace client et publication ;
5. accès temporaires, sous-traitance, maintenance et transfert de dépôt ;
6. verdict GO / GO sous réserves / STOP ;
7. six fiches de preuves et un exemple fictif ;
8. traduction des réserves en conditions de contrat ;
9. séparation reprise, migration d'hébergement et changement d'URL ;
10. cas où il faut reporter ou ne pas investir ;
11. mémo de décision sur une page.

Cette structure parle vraiment à un dirigeant. Elle rend les conclusions falsifiables et évite le réflexe « code ancien = refonte ». Elle ne donne pas encore la carte technique complète d'un site moderne : DNS/CDN, certificats, environnements, CI/CD, secrets, versions, dépendances transitives, licences, données, logs, monitoring, coûts récurrents, performance, SEO, accessibilité, analytics, conformité et réversibilité sont évoqués par fragments ou pas du tout.

### Ce qui paraît complet sans encore l'être

- « Contrôler le domaine et l'hébergement » ne vérifie pas registrar, DNS, DNSSEC, certificats, CDN/WAF, comptes de facturation, quotas, sauvegardes et propriétaires de récupération.
- « Le code ou les fichiers utiles » ne suffit pas : il faut dépôt, branches, historique, environnement de build, CI/CD, variables, secrets, clés, artefacts, procédures et droits de licence.
- Les dépendances ne sont pas inventoriées : runtime, framework, packages directs/transitifs, images de base, plugins, thèmes, licences, CVE, fin de support et procédure d'update.
- Le guide teste la copie restaurée, mais ne définit pas RPO/RTO, fréquence/rétention, restauration de base séparée, médias, queues, stockage objet, exports, clés et données récentes.
- Les fonctions métier sont bien rejouées, mais la performance, les Core Web Vitals, la disponibilité, les logs, alertes, erreurs et coûts d'observabilité ne font pas partie des six preuves.
- SEO est réduit aux URLs et migration voisine : canonical, robots, sitemap, données structurées, hreflang, liens internes, indexabilité JS et état Search Console méritent un inventaire avant reprise.
- RGPD et sous-traitance sont correctement prudents, mais il manque localisation, sous-traitants ultérieurs, durée de conservation, restitution/destruction et matrice de données par environnement.
- « Maintenance » ne précise pas le coût de remise à niveau : accès, licences expirées, tests absents, dette de dépendances, documentation et astreinte.
- Le verdict est qualitatif. Il devrait différencier un P0 bloquant (pas de contrôle ou attaque possible), P1 (pas de restauration ou fonction critique) et P2 (documentation/accessibilité/performance à planifier).
- Les options « ne pas investir », « stabiliser », « migrer », « réécrire à périmètre égal » ne sont pas comparées sur même résultat, horizon et TCO.
- Le CTA ne dit pas si Hagnéré Code remet un audit léger, complet, une copie restaurée, un inventaire, un rapport de risques ou un plan de stabilisation ; le prospect ne peut pas comparer la proposition au besoin.

## 3. Benchmark France et international

Recherche effectuée le 24 juillet 2026. Les pages de fournisseurs sont des sources primaires pour leurs propres plateformes et procédures, jamais des moyennes de prix ou garanties. Les recommandations sont croisées avec ANSSI, CNIL, OWASP, GitHub, Google, NCSC, CISA et Cyber.gov.au.

| Ressource et URL directe | Zone | Réponse utile | Preuve / méthode | Limite | Apport à adapter |
| --- | --- | --- | --- | --- | --- |
| [CNIL — maintenance et fin de vie](https://www.cnil.fr/fr/securite-encadrer-la-maintenance-et-la-fin-de-vie-des-materiels-et-logiciels) | France | accès temporaires, journal des interventions, clauses de maintenance, surveillance | fiche officielle opérationnelle | données personnelles et tiers, pas audit complet | ajouter registre des interventions et retrait des accès |
| [CNIL — sous-traitance](https://www.cnil.fr/fr/securite-gerer-la-sous-traitance) | France | contrat, garanties, chiffrement, habilitations, traçabilité, audit | source institutionnelle | qualification selon traitements | matrice données/accès/sous-traitants |
| [ANSSI — journalisation](https://cyber.gouv.fr/sites/default/files/2022/01/anssi-guide-recommandations_securite_architecture_systeme_journalisation.pdf) | France | journaliser les événements pertinents et adapter au SI | guide technique officiel | niveau SI souvent plus élevé qu'une vitrine | inclure logs, rétention, accès et alertes |
| [ANSSI — sauvegarde SI](https://messervices.cyber.gouv.fr/guides/sauvegarde-des-systemes-dinformation) | France | copies hors ligne, source saine, tests, isolation et stratégie de restauration | guide officiel | cible organisations plus larges | compléter la preuve de copie restaurée |
| [Afnic — gérer son nom de domaine](https://www.afnic.fr/noms-de-domaine/tout-savoir/gerer-son-nom-de-domaine/) | France | titulaire, contact, renouvellement et bureau d'enregistrement | registre .fr | extensions hors Afnic à vérifier ailleurs | détailler propriété, DNS, facturation et récupération |
| [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/stable/) | international | tests configuration, identité, autorisations, sessions, entrées et logique métier | guide primaire OWASP | ne remplace pas un pentest complet | définir audit léger/complet et limites |
| [OWASP Component Analysis](https://owasp.org/www-community/Component_Analysis) | international | inventaire composants, SCA, SBOM et risques supply-chain | documentation OWASP | recommandations non certification | ajouter SBOM, CVE, licences et support |
| [GitHub — secrets](https://docs.github.com/en/code-security/reference/secret-security/secret-types) | États-Unis / plateforme | secrets chiffrés, portée repo/org/env, limites et accès | documentation GitHub primaire | GitHub-specific | inventaire et rotation des secrets/variables |
| [GitHub — transfert de dépôt](https://docs.github.com/en/enterprise-cloud@latest/repositories/creating-and-managing-repositories/transferring-a-repository) | États-Unis / plateforme | intégrations, secrets et clés peuvent rester liés au dépôt transféré | documentation primaire | transfert GitHub uniquement | vérifier webhooks, actions, clés et propriétaires après passation |
| [Google — infrastructure sans changement d'URL](https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes) | international | copier, tester et surveiller nouvelle infrastructure avant désactivation | documentation Search Central | pas audit applicatif | séparer maintenance et migration |
| [Google — expérience de page](https://developers.google.com/search/docs/appearance/page-experience) | international | Core Web Vitals et expérience comme signaux parmi d'autres | source officielle | aucun score SEO garanti | ajouter baseline perf et UX |
| [Google — JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics) | international | rendu JS, SSR/prérendu, bots différents | documentation officielle | ne teste pas architecture du client | contrôler HTML rendu, liens et schema |
| [NCSC UK — préparer un incident](https://www.ncsc.gov.uk/collection/small-business-guidance--response-and-recovery/step-1-prepare-for-incidents) | Royaume-Uni | contacts, déclencheurs, responsabilités, cyber-assurance, documents hors ligne | guide officiel PME | préparation incident, pas reprise technique complète | ajouter registre contacts et trigger d'escalade |
| [CISA — StopRansomware](https://www.cisa.gov/stopransomware/ransomware-guide) | États-Unis | backups offline, logs, secrets, réponse et reprise testée | agence officielle | ransomware spécifique | évaluer sauvegardes et preuves de restauration |
| [Cyber.gov.au — guidance exécutive](https://www.cyber.gov.au/business-government/detecting-responding-to-threats/cyber-security-incident-response/cyber-security-incident-response-planning-executive-guidance) | Australie | identifier systèmes/données critiques, gouvernance et plan de réponse | guide officiel | cyber, pas audit de reprise web | introduire criticité, RTO/RPO et dirigeants |
| [Cyber.gov.au — Business Continuity in a Box](https://www.cyber.gov.au/business-government/small-business-cyber-security/small-business-hub/business-continuity-in-a-box) | Australie | solution ICT minimale en mode dégradé | ressource officielle PME | contexte australien | comparer service minimal et refonte |
| [BSI IT-Grundschutz](https://www.bsi.bund.de/EN/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/IT-Grundschutz/it-grundschutz_node.html) | Allemagne / DACH | approche par inventaire, processus, risques et mesures | référentiel officiel allemand | périmètre organisationnel large | enrichir inventaire/risque, sans copier la certification |
| [ENISA — cyber basics for SMEs](https://www.enisa.europa.eu/topics/cybersecurity-education/cybersecurity-guide-for-smes) | UE / DACH applicable | gouvernance, actifs, accès, sauvegarde, incident et continuité | agence européenne | recommandations générales | benchmark européen et vocabulaire dirigeant |

### Saturation et enseignements

Les ressources convergent sur inventaire, accès minimaux, sauvegardes testées, logs, dépendances et plan d'incident. Elles ne fournissent pas une décision TCO pour une petite entreprise. Le guide Hagnéré Code peut se distinguer en reliant chaque preuve à une option et à un coût : « stabiliser ce qui existe », « migrer sans changer le périmètre », « réécrire avec parité », ou « ne pas investir ».

## 4. Matrice de gain d'information

| Question décisive | Meilleure réponse française | Apport international | Couverture actuelle | Manque | Réponse supérieure à produire |
| --- | --- | --- | --- | --- | --- |
| Qui contrôle réellement le site ? | domaine, hébergement, code et comptes autorisés | CNIL/Afnic/NCSC détaillent accès, contacts et droits | bonne | DNS, facturation, recovery et sous-domaines | inventaire d'ownership |
| Puis-je le restaurer ? | copie isolée, données fictives, test des fonctions | ANSSI/CISA ajoutent offline, source saine et isolement | bonne | RPO/RTO, rétention, clés, queues et médias | fiche restauration complète |
| Puis-je publier sans l'ancien prestataire ? | publier puis revenir sur copie | GitHub explicite secrets, intégrations et clés | partielle | CI/CD, runners, environnements, artefacts | test release de bout en bout |
| Que contiennent les dépendances ? | non détaillé | OWASP SCA/SBOM, GitHub Dependabot | faible | versions, CVE, licences, support | SBOM et matrice dette |
| Les données sont-elles encadrées ? | RGPD/sous-traitant et accès | CNIL exige contrat, garanties, logs et restitution | partielle | localisation, sous-traitants, conservation/destruction | registre data flow |
| Le site est-il réellement performant ? | fonctions métiers testées | Google Page Experience/CWV | faible | baseline, budgets, cache, CDN, erreurs | audit perf léger/complet |
| Le SEO peut-il être maintenu ? | migration URL et Google mentionnées | Google JS/site moves, canonicals, sitemap | faible | Search Console, schema, hreflang, contenu | audit SEO de reprise |
| Quel risque sécurité reste-t-il ? | OWASP cité, pas test détaillé | OWASP/NCSC/CISA structurent SCA, secrets et réponse | partielle | auth, headers, vulnérabilités, logs | périmètre et limites explicites |
| Quel niveau d'audit acheter ? | audit limité/documenté | référentiels offrent plusieurs profondeurs | faible | léger vs complet et seuils | offre à trois niveaux |
| Faut-il migrer ou réécrire ? | séparer reprise et migration | Google recommande tester nouvelle infra | partielle | comparaison coût/risque/parité | quatre options à périmètre égal |
| Que coûtera la reprise sur 5 ans ? | absent | aucune source officielle ne donne ce TCO | faible | setup, licences, infra, temps, incidents | TCO 12/36/60 |

## 5. Faits et fraîcheur

| Affirmation du guide | Verdict | Source primaire actuelle | Périmètre et date | Correction |
| --- | --- | --- | --- | --- |
| Un audit est limité et documenté, pas une certification | confirmé et sain | OWASP WSTG et nature d'un audit ponctuel | site, date et tests définis | conserver, ajouter limites de couverture |
| Une archive non restaurée n'est pas une preuve de reprise | confirmé | CNIL sauvegarde, ANSSI backup | copie et restauration | conserver et ajouter source saine/RTO/RPO |
| Les fichiers et la base sont tous deux nécessaires pour WordPress | confirmé pour WordPress | [WordPress backup](https://developer.wordpress.org/advanced-administration/security/backup/) | WordPress ; autres architectures différentes | conserver avec périmètre |
| Les accès temporaires et la main courante sont recommandés | confirmé | CNIL maintenance/fin de vie | tiers et maintenance | ajouter registre, durée et contrôle |
| Maintenance avec accès ponctuel peut relever de la sous-traitance | confirmé au cas par cas | CNIL responsable/sous-traitant | traitements réels | conserver sans qualifier automatiquement |
| Transfert GitHub conserve intégrations/secrets associés | confirmé pour GitHub | GitHub transfer repo | GitHub, dépend des paramètres | conserver et élargir « vérifier chaque fournisseur » |
| Un changement d'hébergement sans URL doit être testé avant arrêt | confirmé | Google site move without URL changes | infra, domaine et URLs | conserver avec monitoring et rollback |
| URL changées nécessitent mapping/redirections | confirmé | Google site move with URL changes | migration URL | conserver, distinguer reprise simple |
| L'âge du code ne suffit pas à imposer une réécriture | jugement professionnel raisonnable | aucune règle officielle | dette réelle vs âge | conserver, ajouter critères mesurables |
| Un GO n'est pas un certificat de sécurité | confirmé | OWASP WSTG et audit borné | tests définis | conserver en évidence |

### Contradictions ou risques de lecture

- Le texte déconseille un score sur 100, mais le lecteur peut chercher une note globale. Il faut expliquer qu'une décision de reprise est un portefeuille de preuves et que le rapport peut tout de même classer P0/P1/P2.
- « Copie de test » peut contenir de vraies données. Le texte demande des données fictives « dès que cela suffit », mais doit exiger anonymisation/minimisation lorsque des données réelles sont nécessaires.
- « Publier une modification sans conséquence puis revenir » ne précise pas les secrets de production, les migrations de schéma, les jobs et les webhooks ; une publication de test peut toucher le réel.
- L'OWASP WSTG peut être lu comme une invitation à un pentest complet. Il faut annoncer explicitement audit de reprise, scan ou revue ciblée, pas test exhaustif sans autorisation.
- Le guide évoque les contrats sans chiffrer les coûts de remise à niveau, ce qui peut pousser à sous-estimer une reprise honnête.

### Faits à retirer plutôt qu'à affaiblir

- toute formulation laissant entendre qu'une copie restaurée prouve la sécurité de l'ensemble ;
- tout seuil de risque ou coût présenté sans hypothèse ;
- toute promesse qu'une nouvelle agence peut reprendre sans migration si DNS, secrets ou licences restent contrôlés par l'ancien prestataire ;
- toute mention de conformité RGPD qui ne distingue pas analyse technique et avis juridique.

## 6. Niveaux d'audit et options à périmètre égal

### Audit léger, complet et situation de refus

| Niveau | Pour quel site | Inclus | Preuve de sortie | Quand il ne suffit pas |
| --- | --- | --- | --- | --- |
| Léger | vitrine stable, peu de données, faible criticité, accès déjà contrôlés | ownership, accès, backup récent restauré, 3 fonctions, publication copie, risques majeurs | mémo 1–3 jours, réserves P0/P1/P2 | boutique, app, données sensibles, incident, dette inconnue |
| Complet | boutique, espace client, app métier, site critique, migration ou passation conflictuelle | inventaire infra/code/CI/dépendances/licences/data/security/perf/SEO/RGPD/observabilité, tests, TCO et options | rapport + inventaires + plan de stabilisation/migration | audit cyber spécialisé ou expertise juridique nécessaire |
| Refus/STOP | accès illégitime, attaque active, aucune copie, fonction critique non testable, droits litigieux | aucune modification ; sécurisation et escalade seulement | décision motivée et action interdite | jusqu'à levée de la condition |

### Quatre options comparées au même périmètre métier

```text
Périmètre commun de comparaison : mêmes pages, mêmes fonctions, même trafic,
mêmes données et même niveau de service visé sur 12/36/60 mois. Une migration
ou une réécriture n'est pas « meilleure » parce qu'elle change la technologie.
```

| Option | Quand elle gagne | Travail initial | Risque principal | Sortie attendue |
| --- | --- | --- | --- | --- |
| Refuser/STOP | preuves critiques absentes, attaque, droits non résolus | sécuriser et qualifier | coût de délai, mais évite une action irréversible | condition de reprise claire |
| Stabiliser l'existant | site utile, architecture récupérable, dette localisée | accès, backup, patchs, docs, monitoring, tests | payer de la dette sans résoudre la cause structurelle | site exploitable et documenté |
| Migrer à périmètre égal | fournisseur/infra coûte trop cher ou inaccessible, mais produit maîtrisé | copie, parité, DNS, rollback, redirections si besoin | double exploitation et régressions | même fonctions, nouveau socle prouvé |
| Réécrire à périmètre égal | code non récupérable, sécurité/perf/coût durablement bloquants | discovery, parité fonctionnelle, données, SEO, recette | durée, nouveaux bugs, dérive de périmètre | preuve de parité + améliorations mesurées |

Position professionnelle : **stabiliser avant de réécrire** si le site se restaure, se publie et répond aux fonctions importantes. **Migrer** seulement si l'infrastructure ou l'ownership constitue le risque dominant. **Réécrire** lorsque des constats mesurés montrent qu'une dette structurelle coûte plus cher que la reconstruction. **Refuser/STOP** lorsqu'une action non réversible devrait précéder la preuve.

## 7. Scénarios chiffrés et TCO

Les montants sont des hypothèses illustratives, pas des tarifs Hagnéré Code ni une moyenne de marché. Ils servent à comparer les options sur un même résultat.

### Formule commune

```text
TCO_horizon = audit/setup initial
             + coût migration ou réécriture
             + horizon × (maintenance + hébergement + licences + monitoring)
             + temps interne (heures × valeur horaire)
             + réserve d'incidents et de reprise.

Réserve attendue = probabilité d'incident × impact (arrêt, reprise, données,
communication, gestes commerciaux). Les probabilités doivent venir de
l'historique ou rester présentées comme sensibilité.
```

### Scénario A — vitrine, 15 pages, faible criticité

Hypothèses : accès domaine/hébergement récupérables, 1 formulaire, aucune base client sensible, 2 h/mois internes, maintenance 150 €/mois après remise à niveau.

| Ligne | Stabiliser | Migrer | Réécrire |
| --- | ---: | ---: | ---: |
| audit/setup | 600 € | 900 € | 2 000 € |
| travail initial | 1 200 € | 3 500 € | 9 000 € |
| infra/licences/an | 600 € | 720 € | 900 € |
| maintenance/an | 1 800 € | 1 800 € | 1 500 € |
| temps interne/an | 1 080 € | 900 € | 720 € |
| réserve incidents/an | 400 € | 250 € | 200 € |
| TCO 12 mois | **5 680 €** | **8 070 €** | **14 320 €** |
| TCO 36 mois | **13 480 €** | **13 710 €** | **19 160 €** |
| TCO 60 mois | **21 280 €** | **19 350 €** | **23 000 €** |

Lecture : la migration devient comparable sur cinq ans si elle réduit réellement le temps interne et les incidents ; la réécriture n'est pas rationnelle uniquement parce que le code est ancien.

### Scénario B — boutique, 500 produits, paiements et CRM

Hypothèses : 12 000 € de marge par mois, commandes quotidiennes, 8 h/mois internes, paiements/stock/CRM à tester, maintenance 600 €/mois après audit.

| Ligne | Stabiliser | Migrer | Réécrire |
| --- | ---: | ---: | ---: |
| audit/setup | 2 500 € | 4 000 € | 7 000 € |
| travail initial | 6 000 € | 18 000 € | 45 000 € |
| infra/licences/an | 3 600 € | 5 400 € | 7 200 € |
| maintenance/an | 7 200 € | 7 200 € | 6 000 € |
| temps interne/an | 5 280 € | 4 400 € | 3 960 € |
| réserve incidents/an | 4 000 € | 2 500 € | 2 000 € |
| TCO 12 mois | **28 580 €** | **41 500 €** | **71 160 €** |
| TCO 36 mois | **56 740 €** | **65 300 €** | **98 480 €** |
| TCO 60 mois | **84 900 €** | **89 100 €** | **125 800 €** |

Un incident de quatre heures à 5 commandes/heure et 55 € de marge représente 1 100 € de marge brute avant support et rapprochement. Ce calcul ne justifie pas automatiquement un projet ; il montre pourquoi paiement, stock et webhooks doivent être inclus dans l'audit.

### Scénario C — application métier, données personnelles, intégrations

Hypothèses : 25 utilisateurs, authentification, API, données personnelles, 20 h/mois internes, maintenance 1 500 €/mois, RTO/RPO contractualisés.

| Ligne | Stabiliser | Migrer | Réécrire |
| --- | ---: | ---: | ---: |
| audit/setup | 6 000 € | 9 000 € | 15 000 € |
| travail initial | 12 000 € | 35 000 € | 100 000 € |
| infra/licences/an | 9 600 € | 14 400 € | 18 000 € |
| maintenance/an | 18 000 € | 18 000 € | 15 000 € |
| temps interne/an | 15 600 € | 13 000 € | 10 400 € |
| réserve incidents/an | 10 000 € | 7 000 € | 5 000 € |
| TCO 12 mois | **71 200 €** | **96 400 €** | **163 400 €** |
| TCO 36 mois | **136 400 €** | **177 200 €** | **229 200 €** |
| TCO 60 mois | **201 600 €** | **258 000 €** | **295 000 €** |

Ces totaux ne sont pas des devis. Pour une application, ils doivent être recalculés avec l'architecture, le coût des environnements, la conformité, les tests, la garde, les licences et le coût d'indisponibilité réel.

### Sensibilités et stop-go

| Déclencheur | Décision recommandée |
| --- | --- |
| aucun compte propriétaire du domaine/hébergement | STOP jusqu'à récupération formelle |
| aucune copie restaurable avant action destructive | STOP |
| code récupéré mais CI/CD/secrets inconnus | GO sous réserve pour audit/documentation ; STOP pour production |
| vitrine fonctionnelle, dette localisée, TCO réécriture > 2× stabilisation sur 36 mois | stabiliser, sauf risque sécurité bloquant |
| boutique : paiement/stock non testables | STOP pour mise en ligne ou changement |
| dépendance critique abandonnée avec CVE non traitable | comparer migration/réécriture ; ne pas masquer le risque |
| données personnelles sans contrat/sous-traitance/accès tracés | STOP pour accès aux données jusqu'à encadrement |
| incident actif ou indicateur de compromission | STOP reprise ordinaire, réponse cyber prioritaire |

## 8. Objections et cas limites

| Objection loyale | Réponse prouvée | Incertitude | Conséquence |
| --- | --- | --- | --- |
| « Le site est en ligne, il n'y a rien à auditer. » | disponibilité actuelle ne prouve pas restauration, publication, accès ni conformité | architecture et historique | audit léger si faible criticité, complet sinon |
| « L'ancien prestataire garde les mots de passe pour aider. » | l'entreprise doit contrôler les comptes et pouvoir retirer les accès | contrats et propriétaire | créer comptes nominatifs, rotation et main courante |
| « Le code est vieux, il faut refaire. » | âge seul ne mesure ni risque ni coût | dette et support | inventorier, tester, chiffrer avant décision |
| « On peut donner toutes les données réelles pour tester. » | données minimisées/fictives réduisent risque et obligations | nécessité du test | anonymiser, séparer, journaliser |
| « Un SBOM est réservé aux grandes entreprises. » | l'inventaire des dépendances est utile dès qu'un site dépend de packages tiers | effort proportionnel | export package lock + licences/CVE au moins |
| « Le cloud garantit la reprise. » | fournisseur gère une couche ; code, données, secrets, contrats et tests restent à prouver | responsabilités partagées | matrice ownership et restauration |
| « Une migration est plus propre qu'une stabilisation. » | elle ajoute double exploitation, parité et retour arrière | coût de délai | comparer TCO et périmètre constant |
| « L'audit complet est toujours plus sérieux. » | un audit surdimensionné peut retarder sans réduire le risque prioritaire | criticité du site | acheter le niveau lié à la décision |
| « Les CGV/factures prouvent la propriété du code. » | elles ne tranchent pas automatiquement les droits | contrat de cession/licence | avis juridique si litige |
| « SEO et accessibilité ne sont pas une reprise technique. » | contenu, rendu, canonicals et UX peuvent perdre des conversions et de l'indexabilité | trafic et public | ajouter audit léger SEO/UX ou le chiffrer séparément |

## 9. Plan de réécriture

| Ordre | Section proposée | Question résolue | Preuve / outil | Décision produite | Conserver / créer / couper |
| ---: | --- | --- | --- | --- | --- |
| 1 | « Quel audit vous faut-il ? » | léger, complet ou STOP ? | arbre criticité/données/unknowns | niveau acheté | créer immédiatement |
| 2 | « La carte des actifs » | qui contrôle quoi ? | domaine/DNS/host/code/CI/accounts/data | propriété et accès | étendre liste actuelle |
| 3 | « Code, dépendances et licences » | que pourra-t-on maintenir ? | SBOM, lockfiles, CVE, licences, EOL | stabiliser/migrer/réécrire | créer tableau |
| 4 | « Sécurité, secrets et logs » | peut-on intervenir sans créer un incident ? | secrets, RBAC, MFA, journaux, SCA | GO/STOP couche sécurité | ajouter sources ANSSI/OWASP/GitHub |
| 5 | « Sauvegarde, restauration, RPO/RTO » | la reprise est-elle réelle ? | copie isolée, données, tests, RTO/RPO | autoriser modification | conserver cœur du guide, préciser |
| 6 | « SEO, perf, accessibilité, RGPD » | qu'est-ce qui peut se dégrader ? | CWV, schema, canonical, consentement, alt, contrats | périmètre complet | créer audit transversal |
| 7 | « Quatre trajectoires » | refuser, stabiliser, migrer ou réécrire ? | comparaison à périmètre égal | choix technique et business | créer matrice |
| 8 | « TCO 12/36/60 » | quel investissement est rationnel ? | scénarios vitrine/boutique/app | stop-go financier | créer calcul |
| 9 | « Rapport de reprise d'une page » | que signer ? | verdict, réserves, preuves, actions interdites | contrat lisible | conserver modèle six lignes |
| 10 | CTA | que recevra le prospect ? | audit léger/complet, délai et exclusions | prise de contact qualifiée | préciser livrable |

### Contrat des 150 premiers mots

> Une nouvelle agence vous promet de reprendre votre site. Avant de lui donner un accès de production, vous devez répondre à une question simple : qu'est-ce qui est réellement prouvé ? Un site visible ne prouve ni que votre entreprise contrôle le domaine, ni qu'une sauvegarde se restaure, ni que quelqu'un sait publier une correction, ni que les formulaires, paiements et données arrivent au bon endroit. Cet audit ne cherche pas à trouver des défauts pour vous vendre une refonte. Il commence par classer votre situation : audit léger pour une vitrine stable, audit complet pour une boutique ou une application, STOP si une action destructive devrait précéder la preuve. Vous verrez comment inventorier domaine, DNS, hébergement, code, CI/CD, dépendances, licences, données, sécurité, performance, SEO, accessibilité, RGPD, sauvegardes et observabilité. Puis nous comparerons quatre trajectoires — refuser, stabiliser, migrer ou réécrire à périmètre égal — avec un TCO sur 12, 36 et 60 mois. Le verdict restera limité aux éléments testés.

### Éléments à supprimer ou déplacer

- ne pas laisser les six preuves donner l'impression de couvrir toute l'infrastructure ;
- déplacer OWASP vers une section « profondeur et limites d'audit » ;
- ajouter le coût et le périmètre avant le CTA, pas après une prise de contact vague ;
- remplacer les formules générales de sécurité par des vérifications observables ;
- conserver « ne pas scorer le site » dans la page, mais expliquer les priorités P0/P1/P2 dans le rapport produit.

### Éléments à conserver

- le triptyque contrôle/restauration/fonctions ;
- l'opposition affirmation/preuve/décision ;
- l'interdiction d'envoyer des mots de passe et l'accès temporaire ;
- la distinction audit technique, litige juridique et incident cyber ;
- GO/GO sous réserves/STOP et modèle de réserve à six lignes ;
- la séparation reprise, hébergement et changement d'URL ;
- l'exemple fictif du compte d'envoi manquant ;
- le mémo d'une page et la prudence sur l'âge du code.

## 10. Contre-audit après correction

Ce tableau liste les corrections attendues ; aucune n'a été appliquée à la page dans cette mission.

| ID | Problème | Priorité | Correction attendue | Revalidation indépendante |
| --- | --- | --- | --- | --- |
| P0-01 | Aucun risque vital ou instruction destructrice repérée | P0 | aucune | relecture sécurité et juridique |
| P1-01 | Audit léger/complet/STOP non comparés | P1 | arbre par criticité, données, inconnues et décision | test par trois profils de site |
| P1-02 | Inventaire DNS/CDN/certificats/facturation incomplet | P1 | matrice ownership/recovery/expiration/monitoring | contrôle documentaire puis observation |
| P1-03 | Code/CI/CD/secrets/environnements/artefacts peu couverts | P1 | release testée, branches, runners, vars, clés, rollback | publication sur copie et rotation |
| P1-04 | Dépendances, licences, CVE, EOL et SBOM absents | P1 | inventaire SCA/lockfile/licences/support | export et revue indépendante |
| P1-05 | Données/backups/RPO/RTO/rétention/restauration incomplets | P1 | matrice data flow, copie saine, tests et seuils | restauration isolée et rapport |
| P1-06 | Sécurité/auth/RBAC/MFA/secrets/logs/observabilité insuffisants | P1 | périmètre audit, limites, logs et alertes | revue OWASP/ANSSI proportionnée |
| P1-07 | Performance/SEO/accessibilité/analytics non intégrés | P1 | baseline CWV, canonical/schema/robots, conversion, UX | crawl + navigateur + analytics |
| P1-08 | RGPD/sous-traitants/localisation/restitution/destruction partiels | P1 | registre data, DPA, accès, retention, sortie | revue CNIL/juridique |
| P1-09 | Options refuse/stabilise/migre/réécrit non chiffrées | P1 | comparaison même périmètre et TCO 12/36/60 | recalcul indépendant |
| P1-10 | Aucun stop-go financier/criticité explicite | P1 | seuils et réserves P0/P1/P2, propriétaire et délai | exercice avec cas réel anonymisé |
| P1-11 | CTA sans livrable, durée et exclusions | P1 | audit léger/complet, livrables, délais, accès nécessaires | test conversion et attentes |
| P2-01 | Benchmark FR/US/UK/AU/DACH absent de la page | P2 | encadré international avec limites | rouvrir sources avant réécriture |
| P2-02 | `readTimeMin: 16` à recalculer après ajout | P2 | recalculer registre/texte | contrôle mot à mot |
| P2-03 | Metadata/JSON-LD via helper non testés en ligne | P2 | canonical, Article, Breadcrumb, FAQ, dates, OG | validation navigateur/crawler |
| P2-04 | Responsive des cartes, tables et réserves non vérifié | P2 | QA 320–1440 | captures réelles |
| P2-05 | Ressource téléchargeable absente | P2 | inventaire accès + décision + TCO | téléchargement hors site |
| P2-06 | Sous-traitants et sortie de données peu matérialisés | P2 | checklist fin de prestation | test de réversibilité |
| P2-07 | Multi-site, domaines, sous-domaines, CDN et tiers applicatifs absents | P2 | matrice par actif et contrat | revue architecture |
| P2-08 | Accessibilité et performance seulement indirectes | P2 | critères minimums et limites d'audit | axe/WCAG + CWV |
| P2-09 | Licences propriétaires et coûts de renouvellement non visibles | P2 | inventaire owner/expiration/transfert | vérification factures et comptes |
| P2-10 | Maillage interne bon mais CTA de service non explicite | P2 | lien vers audit/reprise/stabilisation avec livrable | test parcours |

### Portes explicites

```text
P1 — PRÉSENTE MAIS INCOMPLÈTE : NO-GO tant que P1-01 à P1-11 ne sont pas fermés, chiffrés et contre-testés.
P2 — À CORRIGER : benchmark, ressource, metadata, responsive, licences, sortie et parcours de conversion restent requis.
P3 — RAPPORT PRÉSENT, PASSE NON VALIDÉE : aucun accès réel, build, restauration, scan, crawl, test de release ou performance n'est prouvé par cet audit et les P1 ne sont pas corrigés.
P4 — CONTRÔLES À FAIRE, PASSE NON VALIDÉE : aucun coût réel, disponibilité, sécurité, conformité, rendu final ou réussite de reprise ne peut être déclaré.
```

### Score cible après correction

| Axe | Cible /10 | Condition de passage |
| --- | ---: | --- |
| Intention | 10 | audit choisi selon décision et criticité |
| Décision | 10 | options, stop-go, réserves et TCO |
| Pédagogie | 10 | preuve/test/conséquence par couche |
| Profondeur | 10 | actifs, code, CI, dépendances, data, sécurité, perf, SEO, RGPD |
| Preuve | 10 | sources primaires, tests bornés et empreintes |
| Comparaison | 9 | audit léger/complet et quatre trajectoires à périmètre égal |
| Originalité | 10 | mémo, réserves, TCO et tableau de reprise |
| Style | 10 | humain, non anxiogène, sans vente forcée |
| Conversion | 9 | livrable et périmètre de diagnostic explicites |
| SEO/produit | 9 | metadata, maillage, ressource et QA réelle |

Total cible : **97/100**. La note cible décrit le niveau de preuve et d'aide à la décision, pas une certification de sécurité.

## 11. Preuves techniques et visuelles

```text
Manifeste : src/app/guides/audit-technique-avant-reprendre-site/page.tsx ; helper src/lib/guide-page-seo ; entrée src/lib/guides.ts.
Constats source : metadata/JSON-LD via helper, FAQ, 11 sections TOC, six cartes preuve/test/conséquence, verdict GO/GO sous réserves/STOP, modèle de réserve à six lignes, liens Google/CNIL/OWASP/Afnic/GitHub.
Registre : datePublished/dateModified 2026-07-24, readTimeMin 16 ; aucun registre modifié.
Calculs refaits : TCO 12/36/60 illustratifs et scénarios vitrine/boutique/application ; aucun tarif de marché présenté comme fait.
Sources rouvertes : ANSSI journalisation/sauvegarde ; CNIL maintenance/sous-traitance ; OWASP WSTG/SCA ; GitHub secrets/transfert ; Google infrastructure/JS/page experience ; NCSC/CISA/Cyber.gov.au ; Afnic ; BSI/ENISA.
Liens vérifiés : URLs directes enregistrées le 24/07/2026 ; les pages vendor et référentiels doivent être rouvertes au moment de la réécriture finale.
Commandes : inspection lecture seule par sed/rg ; aucune installation, build, accès, scan, restauration, crawl ou déploiement exécuté.
Rendu 320 / 390 / 768 / 1024 / 1440 : non exécuté ; cartes preuve, tableaux verdict et CTA restent P3/P2.
Metadata/JSON-LD : présence via helper observée, validité publique et image sociale non testées.
Statut maximal prouvé : audit local, benchmark documenté et TCO hypothétique.
Réserve publication : aucun secret, dépôt, données, accès, licence, backup, commit, push ou déploiement manipulé.
```

## Conclusion opérationnelle

Le guide possède le bon cœur éditorial : demander des preuves, limiter l'audit, restaurer sur une copie, tester les fonctions métier et ne jamais convertir une réserve en refonte automatique. Pour atteindre le standard maximal, il faut l'étendre d'une reprise « site + fonctions » à une reprise « produit + chaîne d'exploitation » : DNS, certificats, CI/CD, secrets, dépendances, licences, données, logs, performance, SEO, accessibilité, RGPD, observabilité et coûts.

La recommandation reste volontairement tranchée : **stabiliser** si le site est récupérable et que la dette est localisée ; **migrer** si ownership, hébergement ou exploitation sont le risque principal ; **réécrire** seulement si des faits montrent que l'existant coûte durablement plus cher à maintenir ; **STOP** lorsqu'une action destructive précède la preuve. Le TCO et le périmètre égal empêchent l'audit de devenir un simple prétexte commercial.
