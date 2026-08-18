# Audit approfondi — `application-suivi-production-pme`

Date : 24 juillet 2026

Auditeur concurrentiel : audit P3 en lecture seule ; sources officielles françaises, standards primaires et repères internationaux officiels. Les comparatifs éditoriaux FR/US/UK/AU/DACH servent uniquement à repérer des questions manquantes, jamais à prouver un tarif, un gain ou une obligation.

Snapshot du guide :

- Source : `src/app/guides/application-suivi-production-pme/page.tsx` (1 600 lignes environ, 5 443 mots visibles en rendu).
- Registre : `src/lib/guides.ts:417-431`.
- Open Graph : `src/app/guides/application-suivi-production-pme/opengraph-image.tsx` (1200 × 630).
- SHA-256 : `page.tsx` `9361b2faa9690560637766b08dd566ecdd3912e9fd3dc2ecabd3fe68e4f20ef8` ; `opengraph-image.tsx` `420626036eebb20657588966a5283f5dc1294278f7cc1bdb34fa01abc223f8de` ; `guides.ts` `8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09`.
- Aucun `docs/research/application-suivi-production-pme.md` n’existe. L’absence de ce dossier empêche de rejouer la recherche et ses choix, sans prouver que le travail préparatoire n’a pas eu lieu.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant industriel de PME, responsable de production ou directeur des opérations qui ne sait plus dire où en est un ordre et envisage un outil d’atelier.
Question réelle : « Comment obtenir une information assez fiable sur l’ordre, le poste, les quantités, rebuts, qualité, stock et traçabilité sans ralentir les opérateurs, créer un second ERP ou surveiller les personnes ? »
Décision attendue : améliorer le support actuel, configurer l’outil déjà possédé, acheter un standard, assembler du no-code, développer un ajout ciblé, ou ne rien lancer.
Réponse actuelle en une phrase : reconstituez une journée fictive, testez six erreurs et comparez cinq niveaux d’outil avant de décider ; le scénario met l’accent sur les événements et les responsabilités.
Défaut qui coûte le plus de valeur : le guide est très riche en pédagogie et en données fictives, mais il ne transforme pas encore cette journée en décision industrielle complète : stock/traçabilité, architecture offline/terminaux, contrats ERP/MES, disponibilité, sécurité, TCO 12/36/60, gain prouvé et critères stop/go restent trop génériques.
Niveau actuel : B+
Priorité : haute
Statut : audité, à approfondir, non contre-audité après correction
P1–P4 : P1 recherche/cadrage = NON PASS (pas de dossier rejouable, benchmark et corpus primaire insuffisamment tracés) ; P2 rédaction/intégration = NON PASS (plusieurs décisions industrielles et calculs manquent) ; P3 contre-audit = RAPPORT PRÉSENT, VALIDATION NON PASS tant que les P1 ne sont pas corrigés et revérifiés sur un nouveau snapshot ; P4 plume/UX/QA = CONTRÔLES TECHNIQUES DE BASE PRÉSENTS, VALIDATION NON PASS car la page n’a pas été corrigée, relue et retestée selon toutes les portes du standard renforcé.
Publication/indexation : non prouvées. Le local indique `noindex, nofollow`; production, sitemap et Google Search Console non vérifiés.
Verdict de publication : NO-GO tant que les P1 ne sont pas corrigées et contre-auditées.
```

### Score avant correction

| Axe | Note /10 | Preuve localisable | Manque décisif |
| --- | ---: | --- | --- |
| Intention | 9 | Lead et phrase de décision, `page.tsx:599-659` | Très bon ciblage d’un atelier réel ; le stock et le résultat économique du dirigeant sont moins présents. |
| Décision | 8 | Cinq options, `page.tsx:886-990` | Pas de matrice pondérée ni de seuil stop/go chiffré. |
| Pédagogie | 10 | OF fictif, six événements, journal minimal, `page.tsx:660-821` | Excellente pédagogie ; le lexique stock/lot/série/traçabilité et les limites ERP/MES peuvent encore être explicités. |
| Profondeur | 8 | Incidents, métriques et pilote, `page.tsx:1122-1407` | Pas de TCO 12/36/60, disponibilité, RTO/RPO, matériel/MDM, intégration détaillée, gain net. |
| Preuve | 7 | CNIL, ANSSI, ISA-95, DesignGouv, `page.tsx:642-649`, `1048-1108`, `1468-1588` | France Num est un contenu d’un prestataire ; sources OT primaires internationales et version actuelle NIST manquent. |
| Comparaison | 7 | Chaque option rejoue le même OF, `page.tsx:886-990` | Comparaison coûts et capacité inégale ; buy/build/no-code/statu quo ne débouchent pas sur une recommandation conditionnelle chiffrée. |
| Originalité | 9 | Contrôle inverse 92+5+3=100, erreurs de réseau/unité/reprise | Il manque un livrable copiable : scorecard, matrice de données et budget de pilote. |
| Style | 9 | Ton humain et prudent, exemple fictif explicitement borné | 5 443 mots visibles peuvent être condensés ; le guide demande au lecteur d’inventer ses propres seuils sans formulaire. |
| Conversion | 8 | CTA honnête et lié au flux, `page.tsx:1446-1465` | Le CTA ne promet pas la scorecard, le protocole d’essai ni un premier calcul TCO. |
| SEO/produit | 9 | H1 unique, 15 H2, 37 H3, FAQ, Article + BreadcrumbList | Le sujet est très différenciant ; manque un champ lexical explicite « MES/GPAO/OF/stock/lot/série/traçabilité/terminal/MDM ». |

Total : **84/100**.

Priorités : **P0 = 0, P1 = 10, P2 = 5**. Aucun P0 constaté. Les P1 restent bloquantes pour une publication comme guide de décision industriel : le contenu est bon, mais ses inconnues doivent être visibles plutôt que laissées à l’interprétation.

## 2. Ce que le guide dit réellement

Le guide part d’une situation humaine crédible : l’atelier, le commerce et l’administration ne racontent pas la même commande. Il définit un outil de suivi comme un registre d’événements (début, quantité, blocage, reprise, contrôle, fin), distingue suivi/planification/conduite machine, puis fait traverser un ordre fictif de 100 pièces à six événements et six mauvais cas.

La progression est particulièrement solide :

1. préciser la décision manquante ;
2. reconstituer une journée avant l’écran ;
3. rendre l’événement et l’unité non ambigus ;
4. tester avec gants, terminal partagé et réseau dégradé ;
5. comparer statu quo, outil possédé, standard, no-code et ajout sur mesure ;
6. fixer les frontières entre logiciel de gestion et suivi ;
7. séparer IT, OT et conduite de machine ;
8. faire passer les mauvais cas ;
9. limiter le suivi individuel ;
10. calculer fraîcheur, réception, reprise, rebut et inconnue ;
11. lancer un pilote d’un flux et d’un poste ;
12. réserver le sur-mesure à un ajout ciblé.

Ce qui aide réellement un dirigeant :

- les nombres fictifs sont clairement annoncés comme fictifs ;
- l’heure de l’événement est séparée de l’heure de saisie ;
- 92 acceptées + 5 rebuts + 3 reprises = 100 évite un faux « 100 % terminé » ;
- le contrôle inverse, la déduplication et l’unité rendent le problème testable ;
- le guide dit de conserver les inconnues plutôt que de déduire un état du silence ;
- il refuse de promettre un gain financier avant d’avoir établi un coût évité ou une capacité réaffectée ;
- le CTA déconseille lui-même le sur-mesure si une solution standard suffit.

Ce qui semble complet mais ne permet pas encore de décider :

- la matière manquante est citée comme blocage, sans consommation, lot matière, stock disponible, réservation, écart ou retour ERP ;
- la traçabilité est renvoyée aux obligations sectorielles sans une question pratique sur lot, numéro de série, lien produit–matière–opérateur–poste et correction autorisée ;
- le réseau coupé est un bon test fonctionnel, mais aucune architecture de file locale, idempotence, conflit, chiffrement local, batterie, MDM ou perte du terminal n’est spécifiée ;
- l’intégration ERP/MES montre le sens des données, mais ne définit pas les mappings, la source de vérité, les rejets, reprises, versions et responsabilités ;
- les cinq options ont des rubriques de coût, sans chiffres, coût de migration, licences par utilisateur, matériel, support, cloud, formation, sortie ni coût de délai ;
- le pilote donne sept étapes, mais pas une durée, un propriétaire, une métrique minimum, un seuil d’adoption et un arrêt obligatoire.

## 3. Benchmark France et international

Requêtes et pays : vérification le 24 juillet 2026 des ressources officielles France, États-Unis, Royaume-Uni, Australie et Allemagne. Les sources commerciales ou fournisseurs servent uniquement à repérer les termes de recherche, pas à soutenir des gains ou obligations.

| Ressource et URL directe | Pays | Réponse utile | Preuve/outils | Limite | Apport à adapter |
| --- | --- | --- | --- | --- | --- |
| [France Num — GPAO](https://www.francenum.gouv.fr/guides-et-conseils/production-et-fabrication/gpao-la-solution-numerique-pour-mieux-gerer-la) | France | Définitions, étapes de déploiement et familles d’outils. | Guide concret sur la production. | Rédigé par SetInUp, prestataire et solution citée ; pas une preuve indépendante de ses gains. | Conserver comme vocabulaire, afficher clairement le biais et ajouter des sources neutres/primaires. |
| [ISA-95 — Enterprise-Control System Integration](https://www.isa.org/standards-and-publications/isa-standards/isa-95-standard) | International | Aide à découper les échanges entre entreprise, contrôle et opérations de fabrication. | Standard ISA officiel et modèle de frontières. | Acheter/appliquer la norme complète peut dépasser un premier pilote. | Ajouter une carte « source de vérité / événement / résultat / rejet » sans prescrire une implémentation complète. |
| [ANSSI — cybersécurité des systèmes industriels](https://messervices.cyber.gouv.fr/guides/la-cybersecurite-des-systemes-industriels) | France | La classification et l’analyse de risques doivent précéder une interconnexion IT/OT. | Guide officiel ANSSI/MesServicesCyber. | Ne certifie pas l’architecture du projet. | Ajouter une porte « lecture seule ou commande ? », segmentation, accès prestataire, retour au mode sûr et plan incident. |
| [NIST SP 800-82 Rev. 3](https://csrc.nist.gov/pubs/sp/800/82/r3/final) | États-Unis | OT/ICS doit être sécurisé en tenant compte performance, fiabilité et sûreté ; le guide définit menaces, topologies et contre-mesures. | Publication officielle, septembre 2023 ; la Rev. 2 est superseded. | Guide général, non une prescription française. | Mettre à jour le corpus OT et distinguer suivi IT d’interconnexion OT. |
| [NIST SP 1800-41 Manufacturing](https://www.nist.gov/news-events/news/2026/05/now-available-nist-sp-1800-41-responding-and-recovering-cyber-attack) | États-Unis | La réponse et la reprise après cyberattaque doivent être testées pour la continuité de fabrication. | Draft public NIST du 21/05/2026, architectures et scénarios de reprise. | Projet de document, non standard final ; ne pas en faire une obligation. | Ajouter RTO/RPO, backup restauré, reprise manuelle et scénario de panne au pilote. |
| [NCSC UK — secure OT products](https://www.ncsc.gov.uk/news/help-selecting-secure-ot-products-face-cyber-threat) | Royaume-Uni | Les achats OT doivent demander logging, authentification forte, protection des données, configuration sûre et gestion des vulnérabilités fournisseur. | Conseils officiels, co-signés avec partenaires internationaux. | Orienté infrastructures/OT ; ne remplace pas une analyse locale. | Créer une grille d’achat standard/GPAO/no-code incluant support, vulnérabilités et export. |
| [ASD ACSC — principles of OT cybersecurity](https://www.cyber.gov.au/business-government/secure-design/operational-technology-environments/principles-of-operational-technology-cyber-security) | Australie | Six principes : sûreté, connaissance du métier, valeur des données, segmentation, chaîne d’approvisionnement, personnes. | Guidance officielle co-scéllée par CISA, NCSC UK, BSI et autres. | Destinée aussi aux infrastructures critiques ; pas une règle française automatique. | Très bon encadré international : l’achat d’un outil doit être jugé sur sécurité, métier et continuité, pas seulement écran. |
| [Secure connectivity principles for OT](https://www.cyber.gov.au/business-government/secure-design/operational-technology-environments/secure-connectivity-principles-for-operational-technology) | Australie / Five Eyes / Allemagne | La connectivité OT doit être conçue pour sécurité et continuité ; la page est du 15/01/2026. | Guide conjoint NCSC/ACSC/CISA/FBI/BSI etc. | Pour grandes organisations/infrastructures ; adapter au risque d’une PME. | Ajouter un mini-canevas de flux réseau et comptes fournisseur au pilote. |
| [BSI ICS Security Compendium](https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/ICS/ICS-Security_compendium.html?nn=128768) | Allemagne | Introduit ICS et la nécessité de traiter contrôle/mesure, industrie et infrastructures. | Ressource officielle BSI. | Page de 2013 ; ne pas l’utiliser pour une règle actuelle. | Benchmark lexique DACH et rappel que l’OT n’est pas une simple application de bureau. |
| Comparatifs FR/US/UK/AU/DACH de GPAO/MES/no-code/production | Plusieurs | Les angles récurrents sont ROI, intégration ERP, terminaux, offline, traçabilité, licences et conduite du changement. | Analyse de couverture seulement. | Tarifs, « temps réel » et pourcentages rarement homogènes ou sourcés. | Couvrir le champ lexical sans reprendre leurs chiffres ni classements. |

Saturation : après ces sources, ajouter d’autres articles de fournisseurs ne ferait pas progresser la vérité. Le gain est maintenant dans la matrice de décision : événements, stock/lot, intégration, offline, rôles, sécurité, TCO et critères stop/go, tous sur un même OF.

## 4. Matrice de gain d’information

| Question décisive | Meilleure réponse primaire | Apport international | Couverture actuelle | Manque | Réponse supérieure à produire |
| --- | --- | --- | --- | --- | --- |
| Quel flux est vraiment suivi ? | Un événement daté sur un OF, un poste et une unité, distinct du planning et de la commande machine. | ISA-95 aide à séparer niveaux et interfaces. | Très bonne. | Stock, matière, lot/série et contrôle qualité ne sont pas dans le scénario central. | Ajouter matière engagée/consommée, lot/série, résultat qualité, mouvement stock et traçabilité inverse. |
| Où naît l’ordre et où revient le résultat ? | Une source de vérité, identifiant unique, résultat ou rejet explicite. | ISA-95 et NIST encouragent les frontières et échanges explicites. | Bonne (`page.tsx:992-1066`). | Mapping, idempotence, rejets, retries, versions et propriétaire. | Contrat de données copiable avec exemple JSON/tableau et cas de rejet. |
| Le poste peut-il saisir sans ralentir ? | Observer gants, interruptions, terminal partagé, gestes et réseau. | DesignGouv/Anact donnent test avec personnes concernées. | Très bonne (`page.tsx:821-884`). | Terminaux durcis, caméra/scanner, MDM, batterie, langue, accessibilité, désinfection. | Fiche de test appareil et mesure temps/erreurs par rôle. |
| Que se passe-t-il hors ligne ? | Une file d’attente doit éviter perte et doublon, puis reprendre. | Guidance OT insiste sur continuité et reprise. | Test fonctionnel seulement. | Idempotence, horodatage signé, conflits, chiffrement local, perte/vol et expiration. | Diagramme offline→pending→ack/reject→replay, avec stop si la garantie n’est pas prouvée. |
| Stock et qualité restent-ils cohérents ? | Unité, rebut, reprise et contrôle doivent reconstruire l’ordre. | Les cadres MES/ISA séparent production et informations d’entreprise. | Rebut/reprise bien traités, stock absent. | Consommation matière, lots, quarantaines, retours, inventaire et libération qualité. | Deuxième scénario avec matière/lot/quarantaine et contrôle inverse stock. |
| Qui peut faire quoi ? | Rôles opérateur, qualité, responsable, admin ; correction historisée. | CNIL impose minimisation, proportionnalité, information et habilitations. | Bonne (`page.tsx:1173-1248`). | Séparation approbation/correction/export, accès fournisseur, comptes partagés. | Matrice RBAC et preuve d’une tentative interdite. |
| L’outil est-il sûr côté OT ? | Le suivi manuel ne commande pas une machine ; la commande change de risque. | ANSSI, NIST, NCSC/ACSC/BSI recommandent segmentation et secure by design. | Bonne alerte, `page.tsx:1069-1118`. | Menaces, segmentation, accès distant, MFA, sauvegarde, retour sûr, incident. | Porte d’architecture avant toute lecture/écriture machine. |
| Quel coût total ? | Comparer licences, paramétrage, migration, formation, support, sauvegarde et sortie. | Les benchmarks internationaux ne fournissent pas un prix égal-scope fiable. | Liste qualitative. | Aucune table 12/36/60, matériel, cloud, MDM, CI, coût du délai. | Modèle TCO avec hypothèses et trois tailles de pilote. |
| Quel gain mérite le projet ? | Mesurer réception, retard, inconnues, rebuts/reprises ; pas de gain financier sans coût évité. | NIST/ACSC mettent l’accent sur continuité et capacité de reprise. | Formules pédagogiques excellentes (`page.tsx:1250-1346`). | Pas de base avant/après, conversion des minutes en marge/capacité, biais d’adoption. | Baseline 2 semaines, pilote 4–6 semaines, gain net et contrôle inverse. |
| Quand arrêter ? | Pilote mono-flux, décision utile, incidents reproduits. | Guidance secure-by-design recommande exigences et preuves avant achat. | Sept étapes sans seuil. | Aucun propriétaire, délai, adoption minimale, seuil qualité ou rollback. | Go/no-go signé sur couverture, fraîcheur, doublon, disponibilité, adoption et coût. |

## 5. Faits et fraîcheur

| Affirmation du guide | Verdict | Source primaire actuelle | Périmètre/date | Correction |
| --- | --- | --- | --- | --- |
| Une application de suivi enregistre des événements et ne planifie/conduit pas nécessairement | Correct comme cadrage | [ISA-95](https://www.isa.org/standards-and-publications/isa-standards/isa-95-standard), [NIST OT](https://csrc.nist.gov/pubs/sp/800/82/r3/final) | Frontière conceptuelle ; dépend du produit. | Conserver et distinguer explicitement suivi, exécution, planification, stock et commande. |
| ERP/GPAO/MES ont des périmètres variables | Correct, mais France Num est intéressé | [ISA-95 officiel](https://www.isa.org/standards-and-publications/isa-standards/isa-95-standard) | Les noms commerciaux recouvrent des fonctions différentes. | Remplacer la fiche France Num seule par une définition neutre et un tableau fonctionnel. |
| Les données personnelles doivent être minimisées | Confirmé | [CNIL minimiser les données](https://www.cnil.fr/fr/minimiser-les-donnees-collectees) | Principe RGPD, pas dispense de qualification. | Conserver ; ajouter finalité, base, personnes, durée et information. |
| Les traces sont gardées six mois à un an, sauf exceptions | Confirmé comme recommandation CNIL, pas règle universelle | [CNIL tracer les opérations](https://www.cnil.fr/fr/securite-tracer-les-operations), 14/03/2024 | CNIL dit période glissante 6 mois–1 an, exceptions à justifier ; historique de production distinct. | Conserver la formulation « repère général », jamais « obligation ». |
| Surveillance permanente des salariés est en général excessive | Confirmé comme règle générale CNIL | [CNIL contrôle de l’activité](https://www.cnil.fr/fr/controle-de-lactivite-des-personnes-employees), mise à jour 09/07/2026 | Justification, proportionnalité, information et consultation selon règles applicables. | Ajouter la date actuelle et rappeler qu’un conseil spécialisé peut être nécessaire. |
| Séparer IT et OT et analyser le risque avant une connexion machine | Confirmé comme prudence, non certification | [ANSSI systèmes industriels](https://messervices.cyber.gouv.fr/guides/la-cybersecurite-des-systemes-industriels), [NIST Rev. 3](https://csrc.nist.gov/pubs/sp/800/82/r3/final) | Suivi manuel et conduite physique n’ont pas le même niveau de risque. | Conserver ; ajouter accès distant, segmentation, sauvegarde/restauration et incident. |
| Les nombres OF-FICTIF-2407, 100, 16,7 %, 3 %, 5 % sont illustratifs | Confirmé et bien borné | Source interne du guide, `page.tsx:660-747`, `1250-1346` | Aucun benchmark client prétendu. | Conserver absolument ; ajouter un scénario stock/lot pour compléter. |
| Un pilote doit commencer par un flux et un poste | Méthode raisonnable, non obligation | [DesignGouv](https://design.numerique.gouv.fr/bien-concevoir/), [Anact](https://www.anact.fr/sites/default/files/2024-10/boite-a-outils-qvct-numerique.pdf) | Conception avec utilisateurs et simulation du travail futur. | Ajouter durée, baseline et seuils ; ne pas présenter comme recette universelle. |
| France Num recommande ces étapes | Partiellement prouvé, source intéressée | [France Num GPAO](https://www.francenum.gouv.fr/guides-et-conseils/production-et-fabrication/gpao-la-solution-numerique-pour-mieux-gerer-la) | L’article est rédigé par un prestataire et cite sa solution. | Identifier clairement l’intérêt commercial et croiser avec DesignGouv/Anact. |
| Le suivi ne doit pas commander une machine par accident | Correct et prudent | ANSSI, NIST SP 800-82 Rev. 3, NCSC/ACSC secure OT | La commande/écriture OT ajoute sûreté, fiabilité et disponibilité. | Conserver ; ajouter une porte de revue OT avant tout connecteur. |

### Contradictions et angles morts

- Le guide demande de comparer les coûts sur la même durée, mais ne fournit aucun calcul 12/36/60 ; le lecteur ne peut pas arbitrer entre abonnement, paramétrage, matériel et sur-mesure.
- Le scénario prétend suivre l’ordre de bout en bout, mais la matière et le stock ne sont pas un état mesuré : « matière manquante » est un motif, pas un mouvement stock réconcilié.
- La traçabilité est explicitement exclue des obligations sectorielles ; c’est prudent juridiquement, mais trop peu opérationnel pour un industriel qui doit relier lot, série, quantité, qualité et correction.
- Le test réseau confirme un scénario de coupure, mais pas une politique de synchronisation : l’outil pourrait réussir visuellement tout en perdant une déclaration après perte du terminal.
- La sécurité OT est mentionnée avec ANSSI, mais aucune version actuelle NIST/partenaire international ne figure dans les sources du guide ; l’intégration avec une machine doit rester NO-GO sans analyse dédiée.
- Le pilote dit « décidez avant d’élargir », mais ne fournit pas de seuil de fraîcheur, adoption, doublon, disponibilité, reprise ou gain qui déclenche réellement un arrêt.

### Faits à retirer plutôt qu’à affaiblir

- Ne pas présenter les étapes France Num comme une preuve indépendante de gains ou comme une méthode obligatoire.
- Ne pas appeler « suivi de production complet » un scénario qui ne teste pas stock/lot/série/qualité libératoire.
- Ne pas calculer un gain financier à partir de 16,7 %, 3 % ou 5 % : le guide a raison de dire qu’ils sont fictifs.
- Ne pas donner de durée de conservation autre que « recommandation générale CNIL » sans finalité et règlement applicables.
- Ne jamais présenter une connexion machine ou une prescription de sûreté comme couverte par ce guide.

## 6. Scénarios et calculs à construire

Les chiffres ci-dessous sont des modèles pédagogiques, pas des prix de marché ni des promesses de gain. Ils donnent au dirigeant une méthode de comparaison à remplacer par ses devis et mesures.

### Scénario industriel commun

PME de 25 opérateurs, 3 postes, 2 équipes, 1 200 ordres/an, 1 terminal par poste et un smartphone durci de secours. Le premier lot reste le scénario OF-FICTIF-2407 enrichi de matière, lot, qualité et stock. Les options reçoivent exactement la même décision : répondre à un client, traiter un blocage et confirmer le transfert.

| Variable | Statu quo amélioré | Standard/no-code | Ajout sur mesure ciblé | Hypothèse à remplacer |
| --- | ---: | ---: | ---: | --- |
| Cadrage et journée de baseline | 5 j | 10 j | 15 j | Jours de mesure, non prix observé. |
| Paramétrage / build pilote | 5 j | 25 j | 45 j | Même flux, mêmes incidents. |
| Connexion ERP/MES | 0 j si export manuel | 10 j | 20 j | À confirmer par API/import réel. |
| Terminaux, MDM, réseau | 2 000 € | 6 000 € | 8 000 € | Exemple de panier, pas benchmark fournisseur. |
| Formation et conduite du changement | 4 j | 8 j | 12 j | Inclut atelier, guides et observation. |
| Maintenance et support/an | 6 j | 20 j + abonnement | 30 j + hébergement/support | Hypothèses ; pas un taux universel. |

```text
TCO 12 mois = cadrage + pilote + intégration + formation
             + terminaux/MDM/réseau
             + licences/abonnements/hébergement/support
             + maintenance et capacité interne.

TCO 36 mois = TCO 12 mois + 2 années de maintenance/support
              + mises à niveau de versions et remplacement de matériel.

TCO 60 mois = TCO 12 mois + 4 années de maintenance/support
              + migrations, renouvellement terminaux, export et éventuelle sortie.

Gain net prudent = coût réellement évité ou capacité effectivement réaffectée
                   − TCO incrémental − coût de formation et de transition.

Payback = investissement initial ÷ gain mensuel réellement observé.
```

### Exemple de calcul explicite

Supposons un coût interne chargé de 45 €/h uniquement pour illustrer la formule. Une PME mesure 18 recherches d’ordre par jour, 7 minutes chacune, sur 220 jours :

```text
Temps de recherche annuel = 18 × 7 × 220 / 60 = 462 heures
Coût théorique de recherche = 462 × 45 = 20 790 € / an
```

Ce n’est pas encore un gain : il faut prouver quelle part disparaît, quelle part devient du temps utile et quel coût d’outil l’accompagne. Si le pilote réduit réellement 40 % des recherches sans augmenter erreurs/retards, le gain de capacité illustratif est `20 790 × 40 % = 8 316 €`, non un chiffre promis. Un TCO pilote de 12 000 € n’est alors pas remboursé en un an par ce seul poste ; il faut inclure appels clients, ressaisies, rebuts évités ou capacité vendable, avec preuves séparées.

### Décision et sensibilité

| Horizon | Support actuel amélioré | Standard/no-code | Sur-mesure ciblé |
| --- | --- | --- | --- |
| 12 mois | Favori si les règles sont instables et le gain non prouvé. | Favori si 80 % des événements et droits existent sans contournement. | Favori seulement si le module bloquant est stable et coûte plus que le pilote. |
| 36 mois | Risque de ressaisie et dépendance à quelques personnes. | Risque d’abonnement, migration fournisseur et limites hors ligne. | Risque de maintenance, sécurité et dépendance au prestataire ; propriété/exit obligatoires. |
| 60 mois | Coût d’opportunité élevé si la donnée reste introuvable. | TCO à recalculer avec hausse d’abonnement, versions et export. | TCO à recalculer avec upgrades, support et exercice de reprise par un tiers. |

Variable qui fait basculer la décision : la part d’événements fiables réellement reçus au poste et le coût net des erreurs/recherches, pas le nombre d’écrans.

Contrôle inverse : si le support actuel, avec une règle d’écriture et une revue quotidienne, atteint le même taux de fraîcheur que l’application, arrêtez le projet logiciel. Si le standard couvre tout sauf un module précis, développez seulement cet ajout. Si le pilote ne dépasse pas le seuil d’adoption et de qualité, retournez au statu quo et ne généralisez pas.

## 7. Comparaison et position professionnelle

```text
Options réellement comparables : statu quo amélioré, outil déjà possédé, GPAO/MES standard, no-code gouverné, ajout sur mesure ciblé.

Périmètre commun : un type d’OF, un poste, 100 unités, matière/lot, contrôle qualité, rebut/reprise, stock, ERP/MES, six incidents, rôles et 4–6 semaines de pilote.

Option la moins chère : le support actuel si les règles et le contrôle inverse suffisent ; sinon la configuration d’un module déjà payé avant une nouvelle plateforme.

Option la moins risquée : la solution dont les opérateurs peuvent déclarer sans ralentir et dont l’intégration, le mode hors ligne, la sauvegarde et l’export ont été démontrés.

Option qui demande le moins de temps interne : un standard correctement paramétré si le responsable de règles et la formation sont inclus ; le no-code n’est pas sans administration.

Position Hagnéré Code : proposer d’abord une journée de flux et un pilote borné ; recommander le sur-mesure seulement pour un ajout stable, testable et relié au système de référence. La recommandation doit pouvoir conclure « ne développez rien ».

Cas où l’option opposée gagne : une GPAO/MES standard si elle couvre stock/lot/qualité et les interfaces sans contournement ; le no-code si le volume et l’offline sont maîtrisés ; le statu quo si les règles changent encore ; l’OT spécialisé si le projet commande une machine ; un ajout sur mesure si un seul écran ou événement bloque la décision.

Signal de révision : plus de 5 % d’événements obligatoires inconnus, doublons non expliqués, retard supérieur au seuil choisi, perte après coupure, absence de sauvegarde restaurée, droits excessifs, ou TCO supérieur à la valeur réellement constatée.

Ce que nous déconseillons même si nous pourrions le vendre : reconstruire un ERP pour suivre un événement, collecter des noms pour classer les salariés, connecter une machine avant revue OT, ou publier un ROI à partir de chiffres fictifs.
```

## 8. Objections et cas limites

| Objection loyale | Réponse prouvée | Ce qui reste incertain | Conséquence |
| --- | --- | --- | --- |
| « Nous avons besoin du stock, pas seulement de l’avancement. » | Le guide actuel ne couvre pas la consommation, le lot matière, les retours et la réconciliation. | ERP/GPAO/MES et règles d’inventaire. | Ajouter un scénario stock avant de choisir un outil de suivi. |
| « Nous devons prouver la traçabilité d’un lot. » | Le lien lot/ordre/poste/qualité/correction doit être défini selon le secteur. | Norme, contrat client et obligation applicables. | Ne pas certifier la conformité ; faire valider le périmètre par qualité/juridique. |
| « Le réseau tombe tous les jours. » | Une file locale et l’idempotence sont nécessaires ; le test visuel ne suffit pas. | Matériel, batterie, perte/vol et conflits. | Prototyper offline sur terminal réel avec perte et reprise. |
| « Notre ERP exporte un CSV, cela suffit-il ? » | Un échange manuel peut être un premier pilote. | Fraîcheur, doublon, mapping et source de vérité. | Mesurer le coût de reprise avant une API ; ne pas créer deux stocks concurrents. |
| « Nous voulons connecter la machine. » | La commande/lecture OT change les exigences de sécurité, disponibilité et sûreté. | Protocole, constructeur, segmentation et risques. | Revue ANSSI/NIST/automaticien séparée ; ce guide ne donne pas d’autorisation. |
| « Nous voulons savoir quel opérateur ralentit. » | CNIL exige finalité, proportionnalité, information et interdit en général la surveillance permanente. | Instances représentatives, base, durée et usage précis. | Agréger par ordre/poste/équipe lorsque l’identité n’est pas nécessaire. |
| « Une tablette grand public suffit. » | Le poste réel impose gants, poussière, caméra, MDM, batterie et désinfection. | Conditions de l’atelier et réseau. | Test appareil/terminal avant devis ; un écran de bureau ne valide rien. |
| « Une solution standard coûte forcément moins cher. » | Le paramétrage, migration, licences, formation, interfaces, support et sortie font le TCO. | Contrat et limites du produit. | Comparer sur 12/36/60 mois et demander export/rollback. |
| « Le no-code ne demande pas de développeur. » | Il reste un assemblage à maintenir : droits, règles, connexions, version, sauvegarde, export et personne responsable. | Volume, offline, fournisseur et licences. | Nommer l’administrateur et tester la reprise par une autre personne. |
| « Nous devons déployer partout tout de suite. » | Le pilote mono-flux limite le risque et mesure les effets. | Variabilité des postes et équipes. | Stop/go écrit avant l’élargissement. |
| « Le taux de rebut de 5 % est notre performance. » | Dans le guide, 5 % est fictif et ne mesure qu’un scénario. | Cohorte, décision finale et unité. | Ne jamais présenter l’exemple comme benchmark ou ROI. |

## 9. Plan de réécriture

| Ordre | Section proposée | Question résolue | Preuve, scénario ou outil | Décision produite | À conserver / créer / couper |
| ---: | --- | --- | --- | --- | --- |
| 1 | Verdict « suivre, stocker, planifier ou conduire ? » | Quel projet est réellement demandé ? | Trois périmètres actuels + sortie si commande machine. | Périmètre du pilote. | Conserver et renforcer. |
| 2 | OF fictif enrichi | Que doit-on savoir de bout en bout ? | Ordre→poste→quantités/rebuts→qualité→stock→lot/série→résultat ERP. | Données minimales et événements. | Conserver OF-FICTIF ; ajouter stock/lot/qualité. |
| 3 | Journal et contrôle inverse | Comment éviter les faux 100 % ? | Dates, unité, rôle, correction, idempotence, inconnue. | Règles d’acceptation. | Conserver presque tel quel. |
| 4 | Terminal réel/offline | Le geste est-il faisable ? | Fiche appareil, gants, batterie, réseau, file locale, conflit, MDM. | Matériel et architecture. | Créer. |
| 5 | Frontières ERP/MES/GPAO | Où naît et revient la donnée ? | Table de mapping, source de vérité, rejets/retries, ISA-95 en repère. | Intégration ou maintien manuel. | Enrichir. |
| 6 | Sécurité IT/OT et personnes | Quels risques avant connexion ? | CNIL, ANSSI, NIST Rev.3, NCSC/ACSC ; RBAC, MFA, segmentation, sauvegarde. | Revue spécialisée ou NO-GO. | Enrichir sans prescription réglementaire. |
| 7 | Cinq options sur 12/36/60 | Quel TCO et quelle dépendance ? | Modèle de coût, licences, terminaux, formation, migration, sortie, coût de délai. | Support, standard, no-code, sur-mesure ou statu quo. | Créer. |
| 8 | Pilote stop/go | Quand généraliser ou arrêter ? | Baseline 2 semaines, pilote 4–6 semaines, seuils adoption/fraîcheur/doublon/disponibilité. | Go, corriger, changer, stop. | Créer. |
| 9 | Cas industriels limites | Quand ce guide ne suffit-il plus ? | Stock, lot/série, qualité libératoire, machine, réglementation sectorielle. | Escalade qualité/OT/juridique. | Conserver la réserve ; rendre l’appel visible. |
| 10 | CTA à livrable | Que reçoit le dirigeant ? | Scorecard, flux, risques, TCO initial, protocole de pilote. | Demande qualifiée. | Modifier CTA sans promettre diagnostic automatique. |

### Contrat des 150 premiers mots

« Votre client appelle : l’atelier dit que l’ordre avance, le commerce le croit presque fini, et l’administration ne trouve pas la dernière quantité fiable. Vous n’avez pas forcément besoin d’un MES complet. Vous avez peut-être besoin d’un événement simple, daté, rattaché au bon ordre, avec une unité claire et une personne qui sait traiter la suite. Mais si vous devez aussi gérer le stock, les lots, la qualité, les rebuts, la traçabilité ou une machine, le projet change de niveau. Dans ce guide, nous allons faire passer un même ordre fictif de 100 pièces par cinq réponses : le support actuel, l’outil déjà payé, un standard, du no-code et un ajout sur mesure. Nous testerons la saisie avec gants et réseau coupé, les doublons, les mauvaises unités, les reprises et les données manquantes. Puis nous comparerons le coût total à 12, 36 et 60 mois et fixerons des critères d’arrêt. Le bon choix peut être de ne rien développer. Il doit rendre une décision plus fiable sans fabriquer un second ERP ni transformer le suivi de production en surveillance des salariés. »

### Éléments à supprimer

- la confiance excessive dans le seul article France Num/SetInUp pour définir les gains ;
- toute généralisation de traçabilité ou de durée de conservation ;
- les formulations de coût sans table TCO ;
- le pilote sans seuil d’adoption, qualité, disponibilité et rollback ;
- l’idée que le test de coupure prouve à lui seul la robustesse offline.

### Éléments à conserver

- l’ordre fictif explicitement non client ;
- les six événements, le contrôle inverse et les six incidents ;
- le ton « ne développez rien si le standard suffit » ;
- la séparation suivi/planification/conduite machine ;
- les garde-fous CNIL et la réserve de conformité sectorielle ;
- le CTA honnête et centré sur le flux plutôt que sur une liste d’écrans.

## 10. Contre-audit après correction

Aucun correctif n’a été appliqué à la source dans ce chantier. Les validations ci-dessous sont obligatoires après réécriture.

| Problème | Priorité | Correction à appliquer | Revalidation indépendante |
| --- | --- | --- | --- |
| Stock, lots/séries et qualité non représentés | P1-01 | Ajouter un scénario matière/lot/quarantaine/contrôle et contrôle inverse stock. | Rejouer l’OF avec un lot consommé, un rebut, une reprise et un retour stock. |
| Offline sans architecture de reprise | P1-02 | Décrire file locale, idempotence, ack/rejet, conflit, chiffrement, perte terminal et expiration. | Test appareil réel : coupure, fermeture, perte, retour réseau, doublon. |
| Intégration ERP/MES trop qualitative | P1-03 | Ajouter mapping, source de vérité, contrats, retries, rejets, versions, responsabilité et export. | Simuler erreur d’import et rejouer sans double mouvement. |
| Aucun TCO 12/36/60 | P1-04 | Ajouter licences, terminaux/MDM, intégration, formation, support, maintenance, migration, sortie et coût délai. | Recalcul avec trois devis et mêmes unités ; signaler toutes hypothèses. |
| Aucun gain net prouvé | P1-05 | Baseline avant pilote, coût recherche/ressaisie/retard, capacité réaffectée, gain net et contrôle inverse. | Comparer 2 semaines avant/4–6 semaines pilote, sans confondre corrélation et gain. |
| Pilote sans seuil stop/go | P1-06 | Définir propriétaire, durée, adoption, fraîcheur, inconnues, doublons, disponibilité, sauvegarde restaurée et rollback. | Un comité doit pouvoir signer go/corriger/changer/stop avec les mêmes données. |
| Sécurité IT/OT non opérationnelle | P1-07 | Ajouter threat model, segmentation, accès distant, MFA, secrets, sauvegarde/restauration, journalisation et revue automaticien/ANSSI/NIST. | Revue séparée avant toute lecture/écriture machine ; aucun avis de sûreté implicite. |
| Terminaux et exploitation terrain sous-spécifiés | P1-08 | Ajouter matrice appareil, batterie, gants, caméra/scanner, MDM, désinfection, écran, accessibilité et mode partagé. | Test au poste avec rôles réels et mesure gestes/erreurs/temps. |
| Traçabilité/compliance trop laissée hors champ | P1-09 | Ajouter une porte d’escalade par secteur et les données à faire valider (lot, série, qualité, corrections, conservation). | Relecture qualité/juridique ; aucune obligation inventée. |
| Corpus de recherche non rejouable | P1-10 | Créer un dossier de recherche daté : France/US/UK/AU/DACH, sources primaires, hypothèses, limites et décisions. | Deuxième agent reproduit liens et verdicts ; aucune source fournisseur présentée comme neutre. |
| Coûts de sortie/lock-in non chiffrés | P2-01 | Ajouter export, propriété, documentation, exercice de reprise et coût de migration. | Tiers démarre le pilote depuis le dépôt/comptes sans l’auteur initial. |
| Glossaire industriel incomplet | P2-02 | Définir OF, ERP, GPAO, MES, OT/IT, lot/série, rebuts, reprise, idempotence, TCO. | Lecture par dirigeant non technique ; termes compris sans recherche externe. |
| Source France Num intéressée | P2-03 | Encadrer son intérêt commercial et croiser ISA-95/ANSSI/NIST/DesignGouv/Anact. | Aucun gain ou classement ne dépend de la source fournisseur. |
| CTA sans livrable | P2-04 | Promettre scorecard, protocole de pilote, questions TCO ; pas de diagnostic automatique. | Test du parcours formulaire et vérification du livrable réellement fourni. |
| Maillage/ressource copiable absents | P2-05 | Ajouter fiche OF, matrice événements, TCO et grille stop/go téléchargeables ou copiables. | Un responsable peut les remplir avec un ordre autorisé sans exposer de données sensibles. |

### Score après correction projeté (non acquis)

| Axe | Note /10 projetée | Preuve à créer | Manque résiduel |
| --- | ---: | --- | --- |
| Intention | 10 | Contrat humain et périmètre stock/qualité/OT explicite | Le flux réel doit encore être observé. |
| Décision | 10 | Scorecard, TCO et stop/go | Financeur/qualité/OT gardent le dernier mot. |
| Pédagogie | 10 | OF enrichi, glossaire et fiches copiable | Variations sectorielles. |
| Profondeur | 10 | Offline, intégration, sécurité, stock, maintenance, ROI | Devis et architecture réels. |
| Preuve | 10 | Sources primaires datées et limites explicites | Règles sectorielles à vérifier au cas par cas. |
| Comparaison | 10 | Cinq options mêmes tests/12–36–60 mois | Les produits standards doivent être évalués par version. |
| Originalité | 10 | Contrôle inverse et outil de pilote | Adoption par le lecteur à mesurer. |
| Style | 9 | Condensation et répétitions supprimées | Relecture atelier réelle. |
| Conversion | 9 | CTA à livrable vérifiable | Aucun ROI promis avant baseline. |
| SEO/produit | 10 | Champ lexical MES/GPAO/OF/stock/offline/traçabilité | Indexation/performance production encore à prouver. |

Total projeté : **98/100**, objectif conditionnel et non acquis dans l’état actuel.

## 11. Preuves techniques et visuelles

```text
Manifeste : aucun manifeste, guide, registre ou fichier source modifié ; seul ce rapport est créé.
Calculs refaits : retards 0/10/3/1/4/2 ; seuil fictif 5 min => 1/6 = 16,7 % ; médiane 2,5 min ; 3/100 reprises initiales = 3 % ; 5/100 rebuts finaux = 5 % ; contrôle inverse 92+5+3=100 ; exemple de recherche 18×7×220/60=462 h, 462×45=20 790 €, hypothèse illustrative.
Sources rouvertes : France Num GPAO ; ISA-95 ; CNIL minimisation/habilitations/traçabilité/contrôle salarié ; ANSSI systèmes industriels ; NIST SP 800-82 Rev.3 et SP 1800-41 ; NCSC UK ; ASD ACSC ; BSI ICS ; DesignGouv ; Anact.
Liens vérifiés : les URLs citées dans la page renvoient HTTP 200 via curl (France Num, ISA, DesignGouv, Anact PDF, CNIL, ANSSI). Aucun lien cassé constaté.
Rendu local : 5 443 mots visibles ; H1=1, H2=15, H3=37, JSON-LD=2, canonique `https://hagnere-code.ai/guides/application-suivi-production-pme`, robots local `noindex, nofollow`, CTA présent.
Responsive : widths 320/360/390/430/640/768/1024/1280/1440/1600 ; document et body sans débordement, tables contenues, H1 unique.
Console : aucun error/warn/warning observé.
Image sociale : 1200×630, alt cohérent, scénario OF fictif ; resynchroniser le badge avec la prochaine date de contrôle.
Statut maximal prouvé : contenu riche, calculs fictifs contrôlés, sources rouvertes, responsive et console locales vérifiées ; pas de build industriel, test terminal/offline, intégration ERP, pilote, TCO réel ni contre-audit post-réécriture.
Réserve publication/indexation : production, sitemap traité, Search Console, positions et conversions non vérifiés ; local noindex/nofollow.
```

Conclusion opérationnelle : c’est l’un des guides les plus pédagogiques du corpus, mais sa force narrative masque encore des décisions industrielles coûteuses. Pour atteindre le standard « meilleur du meilleur », il faut enrichir le même OF avec stock/lot/qualité, formaliser l’offline et l’intégration, calculer le TCO et le gain net sur trois horizons, puis faire du pilote un vrai go/no-go. Tant que ces P1 ne sont pas démontrés, le guide doit rester NO-GO éditorial, même si sa qualité de plume et sa QA responsive sont déjà bonnes.
