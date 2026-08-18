# Dossier de recherche R1 — Audit technique avant de reprendre un site

> **Statut : dossier de preuve interne, non publié.**
>
> **Date de gel et de vérification : 27 juillet 2026.**
>
> **Objet :** préparer une refonte réellement décisionnelle, pédagogique et vérifiable du guide « Audit technique avant de reprendre un site ».
>
> **Limite :** ce document ne prouve ni publication, ni build, ni déploiement, ni conformité d’un site client. Il spécifie ce qu’il faudra produire et contrôler.
>
> **Archivage :** ce fichier conserve le snapshot et la spécification historique R1. Ses empreintes, scores et cases ne décrivent pas l’état courant après corrections. La clôture contemporaine, les empreintes recalculées et les contrôles réellement rejoués sont consignés séparément dans `audit-technique-avant-reprendre-site-r2-cloture-2026-07-27.md`.

---

## 0. Fiche de contrôle du corpus

### 0.1 Snapshot audité

| Élément | Empreinte SHA-256 gelée |
|---|---|
| Page `src/app/guides/audit-technique-avant-reprendre-site/page.tsx` | `82d4b09abb54160f731b46a1ee4d578c49cef8e243ae7b705947df5b7d59f573` |
| Image OG | `934585c4c3e652ab009b226a1f6213fca6f42f400f7a31783176c86d1caa13f2` |
| Recherche antérieure | `681cebb28c6d9f08a45f5da0a5bbf42c29a76b7e75956cef9fe22e6279030d3b` |
| Registre des guides | `df2be344e4546e1a6ed8e6aa97aa257fb8df721bb2dc1599e18b7839a0117158` |

Le présent dossier ne remplace pas ces fichiers. Il documente les défauts observés sur ce snapshot et la cible R1.

### 0.2 Trois audits froids indépendants

| Audit | Score | P0 | P1 | P2 | Lecture principale |
|---|---:|---:|---:|---:|---|
| Technique et moteur décisionnel | **44/100** | 0 | 5 | 3 | Le texte sait expliquer quelques contrôles, mais il ne possède ni moteur fail-closed, ni dossier de preuves, ni comparaison des trajectoires. |
| UX, contenu et impression | **72/100** | 0 | 4 | 6 | La pédagogie est bonne, mais la promesse « quel audit » n’est pas satisfaite, l’artefact autonome manque et l’impression est défectueuse. |
| Faits, droit et benchmark international | **72/100** | 0 | 10 | 8 | Les affirmations présentes sont généralement prudentes, mais le guide peut conclure GO sans preuves essentielles de reprise. |

Ces scores **ne doivent pas être moyennés**. Une moyenne de 62,7/100 masquerait le défaut le plus dangereux : un moteur de décision faible peut rendre un bon texte factuellement prudent mais opérationnellement trompeur. Le verdict du lot est donc :

> **NO-GO premium sur le snapshot gelé.**
>
> Aucun P0 éditorial constaté, mais des P1 convergents empêchent de présenter le guide comme une référence de marché ou comme une méthode suffisante pour prononcer un GO.

### 0.3 Invalidation de l’ancienne auto-évaluation

La recherche antérieure annonçait notamment :

- une grille de douze zones copiable ou imprimable ;
- « aucun P0/P1 restant » ;
- un score interne de 19/20 ;
- une validation sans lecture humaine contradictoire complète.

Le snapshot livré ne contient que six fiches génériques et cinq tests essentiellement textuels. Les trois audits froids contredisent donc l’auto-évaluation. Le **19/20 est invalidé**, pas « ajusté » : il constituait un faux GO éditorial. Il ne doit plus être cité comme preuve de qualité.

---

## 1. Décision éditoriale

### 1.1 Ce que le guide réussit déjà

Les éléments suivants constituent une base utile à préserver :

- il distingue l’accès technique du droit d’agir ;
- il recommande une restauration séparée plutôt qu’une confiance aveugle dans une archive ;
- il rappelle correctement qu’une sauvegarde WordPress doit couvrir fichiers et base de données ;
- il limite explicitement la portée des informations Afnic à ses extensions ;
- il ne transforme pas automatiquement tout prestataire de maintenance en sous-traitant RGPD ;
- il distingue changement d’hébergeur, migration technique et changement d’URL ;
- il ne déduit pas qu’un code ancien impose nécessairement une reconstruction ;
- il ne publie ni statistique de marché, ni prix, ni délai universel inventé ;
- il prévoit un STOP avant une opération destructive ou lorsqu’une attaque active est soupçonnée ;
- il décrit l’audit comme une aide à la décision, pas comme une certification.

### 1.2 Défaut central

Le guide assimile encore trop facilement :

1. quelques accès disponibles ;
2. une restauration partielle ;
3. un petit test de publication ;

à une capacité globale de reprise.

Or un site peut être restaurable sans être :

- juridiquement exploitable ;
- publiable de manière reproductible ;
- réversible après une mise en production ;
- maintenable sans l’ancien prestataire ;
- observable en cas d’échec ;
- conforme au périmètre de données réellement traité ;
- libéré de licences, secrets ou comptes appartenant à un tiers ;
- soutenable économiquement sur 12, 36 ou 60 mois.

La R1 doit donc remplacer la logique « trois confirmations / six fiches » par :

- un triage STOP prioritaire ;
- un choix explicite entre audit léger et audit complet ;
- dix-huit domaines de preuves ;
- un moteur qui échoue fermé ;
- quatre trajectoires comparables ;
- un modèle TCO recalculable ;
- une synthèse dirigeant et une annexe de preuves exportables.

### 1.3 Définition de « reprenable »

Dans la R1, un site est **reprenable dans le périmètre déclaré** uniquement si les six conditions suivantes sont réunies :

1. **Autorité :** le commanditaire a le droit de faire auditer et modifier les actifs concernés.
2. **Contrôle :** les comptes, contrats, récupérations, paiements et renouvellements indispensables sont sous contrôle durable.
3. **Récupérabilité :** un état cohérent peut être restauré dans des conditions et délais documentés.
4. **Déployabilité :** une version identifiable peut être construite, publiée, observée et corrigée de façon reproductible.
5. **Exploitabilité :** les parcours métier, tiers, licences, alertes et responsabilités sont suffisamment connus.
6. **Encadrement :** les accès, données personnelles, secrets et éventuels incidents sont traités dans un cadre juridique et de sécurité adapté.

Cette conclusion :

- ne vaut que pour un périmètre, des environnements et une date donnés ;
- n’affirme pas l’absence de vulnérabilité ;
- n’est ni une certification de sécurité, ni un avis juridique ;
- ne remplace pas les audits spécialisés nécessaires ;
- devient périmée lorsqu’un compte, une dépendance, un contrat ou une architecture change matériellement.

---

## 2. Méthode et hiérarchie des preuves

### 2.1 Corpus

La recherche R1 croise :

- la page et son image sociale gelées ;
- la recherche antérieure ;
- l’audit historique du 24 juillet 2026 ;
- les trois audits froids du 27 juillet 2026 ;
- les sources primaires françaises, européennes, britanniques, américaines, allemandes et australiennes listées au chapitre 10 ;
- les documentations officielles des fournisseurs lorsque seule la plateforme peut décrire son comportement exact.

Aucun guide commercial, article d’agence ou classement SEO n’est utilisé comme autorité factuelle dans ce dossier.

### 2.2 Hiérarchie

L’ordre de confiance est le suivant :

1. texte légal ou réglementaire applicable ;
2. autorité de contrôle ou agence nationale de cybersécurité ;
3. standard ou recommandation technique primaire ;
4. documentation officielle d’un fournisseur pour son propre produit ;
5. preuve propre au site audité : contrat, compte, journal, export, test reproduit ;
6. déclaration d’une personne, utile pour orienter mais insuffisante seule sur un point critique.

Une bonne pratique étrangère éclaire la méthode. Elle ne devient pas pour autant une obligation juridique française.

### 2.3 Force d’une preuve

| Niveau | Définition | Usage |
|---|---|---|
| **A — observée** | Test reproduit, artefact inspecté, journal horodaté, compte ou contrat consulté dans le périmètre autorisé. | Peut fermer un contrôle critique si le test couvre réellement la question. |
| **B — documentaire** | Document officiel actuel, capture datée, facture, procédure, inventaire exporté. | Suffisant pour certains contrôles ; à confirmer par test lorsque la capacité opérationnelle est en jeu. |
| **C — déclarative** | Réponse orale, e-mail non étayé, case cochée sans artefact. | Oriente l’audit mais ne ferme jamais seule un contrôle critique. |
| **D — inférence** | Déduction plausible depuis des indices incomplets. | À afficher comme hypothèse, jamais comme fait établi. |

### 2.4 États du moteur

Les libellés visibles sont en français ; les identifiants internes peuvent rester stables.

| État visible | Identifiant | Sens |
|---|---|---|
| **Inconnu** | `unknown` | Contrôle applicable mais non instruit. |
| **Déclaré** | `declared` | Réponse fournie sans preuve suffisante. |
| **Vérifié** | `verified` | Preuve et, lorsque nécessaire, test satisfaisants. |
| **Échec** | `failed` | Contrôle testé et non satisfait, ou preuve contradictoire. |
| **N/A motivé** | `na` | Contrôle non applicable démontré par un type de preuve dédié, avec périmètre, auteur, artefact, dates, résultat, limite, action interdite, impact non bloquant et réouverture. |

Règles non négociables :

- un `unknown` applicable sur un contrôle critique bloque le GO ;
- un `declared` ne vaut pas `verified` ;
- un `failed` critique produit STOP ou GO impossible tant que le défaut n’est pas traité ;
- un N/A vide ou générique est refusé ;
- un P2 doit être explicitement non bloquant et conserver propriétaire, limite,
  action interdite, déclencheur, prochaine action et échéance ; sinon il devient
  P1 ;
- « non testé » n’est jamais converti en zéro risque ;
- un score numérique ne peut jamais neutraliser un STOP ;
- le verdict global suit le **maillon bloquant**, pas une moyenne.

---

## 3. Union exhaustive des lacunes

Les identifiants ci-dessous sont ceux du dossier R1. Les niveaux ne s’additionnent pas aux comptes propres à chaque audit : plusieurs audits ont détecté le même défaut sous des formulations différentes.

### 3.1 P1 — bloquants pour une version premium

| ID | Lacune convergente | Risque | Exigence R1 |
|---|---|---|---|
| P1-01 | « Trois confirmations » et « six fiches suffisent » autorisent un faux vert. | Déclarer reprenable un produit dont la chaîne de build, les tiers ou les données ne le sont pas. | Moteur fail-closed fondé sur les 18 domaines, l’applicabilité et la force des preuves. |
| P1-02 | Le titre promet « quel audit » sans niveaux, déclencheurs, accès, livrables ni limites. | Audit léger choisi sur un périmètre qui exige un examen complet. | Triage 60 secondes, règles d’éligibilité et sélection explicite léger/complet/STOP. |
| P1-03 | Titularité et contrôle sont regroupés sous « titulaire ou compte ». | Confondre compte accessible, droit d’agir, facturation, récupération et renouvellement. | Matrice titulaire juridique / contractant / administrateur / facturation / récupération pour chaque actif critique. |
| P1-04 | Domaine, DNS, TLS, CDN, WAF et routage mail ne forment pas une chaîne de preuve complète. | Perte de résolution, certificat, e-mail ou capacité de bascule après le départ du prestataire. | Domaine D02 et D03 complets, avec export, test et échéances. |
| P1-05 | La restauration n’intègre pas RPO, RTO, rétention, copie séparée, clés, cohérence ni réconciliation. | Sauvegarde existante mais inutilisable, incohérente, compromise ou trop lente. | Plan de reprise daté, restauration chronométrée et critères d’intégrité. |
| P1-06 | « Données fictives ou réduites » laisse croire que des données personnelles réelles minimisées suffisent en test. | Utilisation injustifiée de données de production en préproduction. | Données fictives ou anonymisées par défaut ; exception documentée et protection équivalente à la production. |
| P1-07 | « Publier puis annuler » est présenté comme preuve de publication réversible. | Side effects non annulés : base, messages, webhooks, paiement, CRM, jobs, cache. | Chaîne source → artefact → environnement, sandbox, observabilité, stop criteria, rollback/fix-forward et réconciliation. |
| P1-08 | CI/CD, runners, registre, artefacts, IaC et environnements ne sont pas inventoriés. | Déploiement non reproductible ou dépendant d’un compte tiers. | Domaine D06 et dossier de preuves par environnement. |
| P1-09 | Supply chain, dépendances transitives, SBOM, provenance, vulnérabilités et EOL sont absents. | Dépendance critique inconnue, non maintenue ou compromise. | Inventaire proportionné, provenance, lockfiles, images et décisions de traitement. |
| P1-10 | Licences et droits d’usage ne sont pas un critère autonome. | Plugin, police, image, API ou composant inutilisable ou non transférable après la reprise. | Registre licences/actifs, titulaire, échéance, transfert, obligations et escalade juridique. |
| P1-11 | Les secrets sont ramenés à l’usage d’un « outil dédié ». | Ancienne agence encore habilitée, secret copié, récupération ou MFA non transférés. | Inventaire sans valeur secrète, coffre client, rotation/révocation, break-glass et revue des intégrations. |
| P1-12 | Le transfert GitHub est décrit sans insister sur les collaborateurs conservés et la révocation. | Persistance d’accès ou de webhooks après transfert. | Contrôle des membres, équipes, apps, webhooks, deploy keys, secrets, comptes machine et rotation ciblée. |
| P1-13 | Le contrat RGPD est présenté comme pouvant préciser des éléments alors que l’article 28 impose un contenu lorsque le prestataire est sous-traitant. | Contrat de sous-traitance incomplet et chaîne de sous-traitants inconnue. | Checklist article 28, qualification du rôle, localisation/transferts, retour ou suppression des données. |
| P1-14 | Incident actif et refus d’autorité ne disposent pas d’un protocole suffisamment opératoire. | Nettoyage destructeur de preuves, aggravation de l’incident ou contournement illégitime. | STOP prioritaire, préservation, isolement piloté, escalade et interdictions explicites. |
| P1-15 | Il manque un inventaire autonome alors que la recherche promettait une grille copiable/imprimable. | Le lecteur comprend mais ne peut ni collecter, ni transmettre, ni faire auditer ses preuves. | Dossier local 18 domaines, synthèse dirigeant et exports expurgés. |
| P1-16 | Aucune comparaison à périmètre commun des quatre trajectoires. | « Reprendre », « stabiliser », « migrer » ou « reconstruire » sont choisis par intuition ou sur seul coût initial. | Scénarios comparables et TCO 12/36/60 avec conventions identiques. |
| P1-17 | Performance, capacité, accessibilité, SEO et analytics sont absents du périmètre sans règle d’applicabilité. | Migration techniquement réussie mais dommage commercial, inclusif ou opérationnel non mesuré. | Modules proportionnés D17, avec baseline et décision explicite ; pas de blocage universel inventé. |
| P1-18 | La version imprimée observée comporte navigation, pied de page, formulaires, skip-link noir superposé et page finale vide sur 18 pages Letter. | Livrable inutilisable en réunion, archivage ou passation. | Feuille d’impression A4 dédiée et BAT réel. |

### 3.2 P2 — qualité, compréhension et gouvernance

| ID | Lacune | Exigence R1 |
|---|---|---|
| P2-01 | Le STOP sécurité arrive trop tard dans le parcours. | Placer le triage avant tout test ou formulaire. |
| P2-02 | Un seul mini-cas ne couvre pas les arbitrages. | Quatre cas complets : GO, GO sous réserves P2, reprise bloquée par P1, STOP. |
| P2-03 | Le contenu est très linéaire et manque de progressive disclosure. | Synthèse courte, ancres, accordéons accessibles puis annexes. |
| P2-04 | La FAQ ne traite pas suffisamment coût/durée, audit vs maintenance, code source, livrable et RGPD. | FAQ décisionnelle fondée sur le claims ledger. |
| P2-05 | Le hero ne conduit ni au verdict ni à la grille. | Deux accès immédiats : « vérifier un STOP » et « ouvrir la grille ». |
| P2-06 | Le CTA est prudent mais ne préqualifie ni entrées ni livrables. | Expliquer ce que le client doit fournir, reçoit et ce qui demeure hors périmètre. |
| P2-07 | Le benchmark antérieur repose principalement sur quatre pages commerciales françaises. | Benchmark primaire mondial du chapitre 10. |
| P2-08 | Les nombres 3, 5, 6 et 12 ont été utilisés comme structure sans justification décisionnelle stable. | Conserver uniquement les nombres qui correspondent à un modèle démontrable : 18 domaines, 4 trajectoires, 3 états de verdict. |
| P2-09 | Les tests existants sont essentiellement cinq expressions régulières. | Tests du moteur, des règles de blocage, du TCO, des exports, de l’accessibilité et de l’impression. |
| P2-10 | L’auto-score 19/20 n’était pas soumis à un contradictoire indépendant. | Registre des audits, hashes gelés, défauts ouverts/fermés et interdiction de s’auto-déclarer premium. |
| P2-11 | Les limites temporelles des preuves sont peu visibles. | Date de constat, date d’expiration et événement déclenchant une nouvelle vérification. |
| P2-12 | L’observabilité n’est pas reliée à un responsable ni à une réaction attendue. | Tester une alerte, son destinataire, son délai et sa procédure d’escalade. |

---

## 4. Les 18 domaines de preuves

Chaque domaine doit contenir au minimum :

- applicabilité et justification ;
- statut ;
- force de preuve ;
- environnement concerné ;
- propriétaire ou responsable ;
- artefact ou emplacement de preuve ;
- date d’observation et, si connue, date d’expiration ;
- test effectué ;
- résultat ;
- limite ;
- prochaine action et échéance ;
- action interdite tant que le contrôle n’est pas fermé.

L’outil ne doit jamais demander de coller un mot de passe, une clé privée, un jeton ou une donnée personnelle dans un champ libre.

| ID | Domaine | Questions minimales | Preuves attendues | Blocages typiques |
|---|---|---|---|---|
| **D01** | Mandat, autorité et périmètre | Qui autorise quoi ? Le périmètre inclut-il production, données et fournisseurs ? Existe-t-il un litige ? | Mandat, contrat, décision nommée, exclusions. | Autorité absente ou contestée ; périmètre inconnu. |
| **D02** | Nom de domaine et registrar | Qui est titulaire, contact, payeur, administrateur et récupérateur ? Quelle échéance ? | Extrait registrar, facture, contacts, test de récupération, AuthInfo si nécessaire. | Titulaire tiers non mandaté ; récupération impossible ; expiration proche non traitée. |
| **D03** | DNS, CDN, WAF, TLS et routage mail | Qui contrôle les NS autoritatifs, la délégation et la glue éventuelle ? DNSSEC est-il actif ? Quel DS est publié au parent, avec quelles DNSKEY et quels algorithmes ? Qui possède les clés et pilote le rollover ou la désactivation ? Qui contrôle certificats, proxy, SPF/DKIM/DMARC et bascule ? | Export DNS, comptes, inventaire certificats, TTL, état DNSSEC, DS parent, DNSKEY/algorithmes, propriétaire des clés, procédure de rollover ou de désactivation, captures avant/après et procédure de retour. | Délégation ou état DNSSEC inconnu avant bascule ; DS parent incohérent ; zone non exportable ; certificat/compte tiers ; enregistrements critiques inconnus. |
| **D04** | Hébergement, cloud, facturation et support | Qui possède l’organisation, les projets, le moyen de paiement et le support ? | Inventaire ressources, contrat, factures, rôles, quotas, échéances. | Compte personnel de l’ancien prestataire ; impayé ; absence d’accès support. |
| **D05** | Code, propriété intellectuelle, dépôts et provenance | Où est la source complète ? Qui détient les droits utiles ? Quel commit correspond à la production ? | Dépôts, branches, tags, contrats, journal de provenance, correspondance prod/commit. | Source partielle ; droits contestés ; production non rattachable à une version. |
| **D06** | Build, CI/CD, IaC, artefacts et rollback | Peut-on reconstruire et livrer sans l’ancien prestataire ? | Pipeline, runners, registre, artefact signé ou hashé, IaC, test sandbox, procédure de correction. | Build non reproductible ; runner tiers ; secret inconnu ; rollback non démontré. |
| **D07** | Architecture, environnements, runtime et configuration | Quels composants, versions et flux composent le service ? | Schéma, inventaire dev/test/preprod/prod, variables nommées sans valeurs, versions runtime. | Environnement caché ; configuration uniquement manuelle ; runtime EOL. |
| **D08** | Supply chain, SBOM, vulnérabilités et fin de vie | Quelles dépendances directes, transitives, images, plugins et thèmes ? | Lockfiles, manifests, SBOM si proportionné, provenance, scan, calendrier de support. | Composant critique inconnu, compromis, vulnérable sans décision ou non maintenu. |
| **D09** | Licences, médias, polices, API et SaaS | Quel titulaire, périmètre d’usage, renouvellement et transfert ? | Registre des licences, contrats, reçus, notices, obligations de redistribution. | Licence non transférable ; compte agence ; expiration ; droit d’usage incertain. |
| **D10** | Identités, secrets, MFA et récupération | Quels humains et comptes machine ont accès ? Qui peut récupérer ou révoquer ? | Matrice des rôles, export membres, coffre client, MFA, comptes secours, journal de rotation. | Ancien prestataire administrateur ; compte partagé ; récupération non contrôlée. |
| **D11** | Sauvegardes, restauration, RPO et RTO | Quelle perte et durée sont acceptables ? Les copies sont-elles séparées et restaurables ? | Politique, rétention, chiffrement, clés, logs, restauration chronométrée, résultat et nettoyage. | Pas de copie cohérente avant action ; restore échoué ; objectifs incompatibles avec le besoin. |
| **D12** | Données, contenus, médias, migrations et files | Quelles sources d’état doivent être cohérentes ? Comment réconcilier ? | Cartographie DB/objets/médias/queues/cache, scripts de migration, contrôles de volume et intégrité. | Données manquantes ; migration irréversible ; absence de réconciliation. |
| **D13** | Parcours métier et services tiers | Quels parcours créent une valeur ou une obligation ? | Tests sandbox de formulaire, auth, paiement, réservation, e-mail, CRM, recherche, export. | Paiement ou message réel déclenchable ; tiers non contrôlé ; parcours critique non testable. |
| **D14** | Logs, métriques, alertes et support opérationnel | Peut-on détecter, expliquer et escalader une panne ? | Sources de logs, rétention, dashboard, test d’alerte, destinataire, astreinte ou procédure. | Aucun signal exploitable ; alerte envoyée à l’ancien prestataire ; rétention insuffisante. |
| **D15** | Sécurité et incidents | Existe-t-il un incident actif, une exposition ou une dette critique connue ? | Triage, chronologie, IOC si autorisés, journaux préservés, plan de réponse, décisions. | Incident actif ; compromission non contenue ; preuve détruite ; autorité de réponse inconnue. |
| **D16** | Données personnelles, article 28 et sous-traitants | Quels rôles, données, finalités, lieux, durées et destinataires ? | Registre de traitement pertinent, contrat article 28, liste des sous-traitants, transferts, purge. | Contrat requis absent ; données de test réelles injustifiées ; transfert ou sous-traitant inconnu. |
| **D17** | Performance, capacité, accessibilité, SEO et analytics | Quels objectifs et risques de régression s’appliquent au produit ? | Baseline avant/après, parcours assistifs, capacité, Search Console/analytics, plan de redirection si besoin. | Module nécessaire mais non mesuré ; régression critique acceptée sans décision. |
| **D18** | Documentation, contrats, responsabilités et réversibilité | Qui décide, opère, paie et récupère à la sortie ? | Runbook, RACI, SLA, RPO/RTO, support, paquet de sortie, critères d’acceptation et preuve de suppression. | Dépendance personnelle ; responsabilité floue ; coût caché de sortie ; livrable non accepté. |

### 4.1 Modules proportionnés, pas cases universelles

Les 18 domaines sont toujours **considérés**, mais tous ne demandent pas la même profondeur.

Exemples :

- un site public sans changement d’URL peut motiver N/A pour un plan de redirections, mais pas ignorer la propriété Search Console ;
- une vitrine à faible trafic peut justifier un test de capacité simple, mais pas déclarer la performance « sans objet » sans baseline ;
- un audit de reprise n’est pas nécessairement un audit WCAG exhaustif ; il doit toutefois identifier l’obligation applicable et les régressions manifestes ;
- un SBOM machine-processable est très utile sur une application complexe, mais n’est pas une obligation générale inventée pour chaque site ;
- un site sans paiement peut motiver N/A pour le flux de paiement, jamais pour l’ensemble des services tiers ;
- un N/A n’est valide qu’avec un contrôle dédié, une raison, un auteur, un
  artefact, des dates, un périmètre, un résultat, une limite, une action
  interdite, un impact non bloquant et une règle de réouverture.

---

## 5. Triage : léger, complet ou STOP

### 5.1 STOP en 60 secondes

Le STOP est un **état de sécurité**, pas un niveau d’audit. Il est évalué avant toute collecte intrusive.

Répondre STOP si au moins une des cinq familles est présente :

1. **autorisation absente :** personne ne peut démontrer l’autorisation d’accéder, tester, copier, modifier ou transférer le site ;
2. **compromission possible :** un incident actif, une fuite, une défiguration ou un accès illégitime est soupçonné ;
3. **destruction sans récupération :** une action destructive ou irréversible est envisagée sans restauration préalablement prouvée ;
4. **test non isolable :** le seul test possible exposerait la production, de vraies données personnelles, de vrais paiements, destinataires ou services critiques ;
5. **litige bloquant :** un conflit d’autorité, de mandat ou de droits interdit l’action envisagée.

L’interface peut poser six questions brutes parce qu’elle sépare « opération destructive prévue » et « restauration prouvée ». Ces deux réponses alimentent ensemble la troisième famille ; elles ne créent pas un sixième type de STOP.

Actions interdites pendant le STOP :

- contourner un refus d’accès ou utiliser des identifiants contestés ;
- lancer un scan agressif non autorisé ;
- nettoyer, réinstaller ou écraser avant la décision de réponse à incident ;
- diffuser publiquement une attribution non établie ;
- copier des secrets ou données personnelles dans l’outil ;
- traiter le STOP comme un échec commercial automatique de l’ancien prestataire.

Sortie du STOP :

- autorité confirmée ;
- responsable de décision nommé ;
- preuves préservées dans la mesure compatible avec la maîtrise du dommage ;
- plan de confinement ou d’investigation accepté ;
- actions et canaux autorisés documentés.

En cas de danger ou de dommage en cours, la préservation des preuves ne doit pas retarder mécaniquement une mesure de protection urgente décidée par les responsables compétents.

### 5.2 Audit léger

L’audit léger n’est autorisé que si **toutes** les conditions suivantes sont vraies :

- autorité, domaine, hébergement et récupération sont vérifiés ;
- aucun incident ou litige actif ;
- architecture simple, documentée et à faible nombre de dépendances ;
- aucun paiement, authentification sensible, migration, code métier complexe ou multiplicité d’environnements ;
- la reprise ne requiert pas l’usage de données personnelles réelles en test ;
- pas de SLA, RPO/RTO exigeant, forte criticité ou indisponibilité coûteuse ;
- pas de dépendance critique à une intégration inconnue ;
- sauvegarde et restauration proportionnées déjà démontrées ;
- tous les contrôles applicables peuvent être fermés sans preuve C seule.

Même en audit léger, les 18 domaines sont parcourus. Les domaines réellement hors périmètre sont marqués N/A de façon motivée.

Livrable minimal :

- triage STOP ;
- matrice des 18 domaines ;
- preuves critiques ;
- verdict daté ;
- réserves ;
- trajectoire recommandée ;
- actions interdites ;
- date de réévaluation.

### 5.3 Audit complet

L’audit complet est obligatoire dès qu’un seul déclencheur est présent :

- paiement, authentification, espace client ou privilèges métier ;
- traitement substantiel de données personnelles ou données particulières ;
- application sur mesure, plusieurs environnements ou plusieurs dépôts ;
- migration de plateforme, d’hébergeur, de domaine ou d’URL ;
- nombreuses intégrations ou chaîne e-mail/CRM critique ;
- CI/CD, cloud, IaC ou conteneurs ;
- forte exposition SEO ou analytics nécessaire à l’activité ;
- engagement SLA, RPO/RTO ou impact métier important ;
- historique incomplet, prestataire sortant non coopératif ou dette inconnue ;
- dépendances, licences, secrets ou responsabilités non inventoriés ;
- incident passé non clôturé ou signaux de compromission.

Livrable :

- tout le livrable léger ;
- preuves A/B sur chaque contrôle critique ;
- tests de restauration, déploiement, parcours et alertes ;
- registre supply chain/licences/secrets ;
- matrice article 28 et sous-traitants si applicable ;
- quatre trajectoires à périmètre commun ;
- TCO 12/36/60 ;
- synthèse dirigeant d’une page ;
- annexe de preuves expurgée.

---

## 6. Quatre trajectoires à comparer

Le guide ne doit pas annoncer une trajectoire avant les preuves. Il compare quatre voies au même périmètre fonctionnel, au même horizon et selon les mêmes conventions.

### T1 — Mise sous contrôle

Objectif : transférer les comptes, mandats, récupérations, secrets, sauvegardes, documentation et responsabilités sans refonte substantielle.

Adaptée lorsque :

- le produit fonctionne ;
- la dette est maîtrisable ;
- le build et la restauration sont démontrables ;
- l’essentiel du risque provient du contrôle des actifs.

Limite : ne traite pas à elle seule une architecture fragile ou un runtime en fin de vie.

### T2 — Stabilisation

Objectif : mettre sous contrôle puis réduire les risques immédiats avant maintenance courante.

Peut comprendre :

- correctifs prioritaires ;
- pipeline reproductible ;
- observabilité ;
- sauvegardes et restauration ;
- rotation ciblée des secrets ;
- mise à niveau de composants ;
- documentation de sortie.

Limite : une stabilisation interminable ne doit pas masquer un besoin de migration.

### T3 — Migration progressive

Objectif : déplacer progressivement hébergement, composants, données ou routes tout en maintenant le service.

Exigences :

- coexistence et double run chiffrés ;
- points de contrôle ;
- réconciliation des données ;
- stratégie de bascule et de retour ;
- observation SEO si URL ou rendu changent ;
- sortie explicite de l’ancienne plateforme.

Limite : le « rollback » peut être partiel lorsque des écritures ont eu lieu.

### T4 — Reconstruction

Objectif : reconstruire le produit lorsque le coût, le risque ou l’impossibilité de prouver l’existant dépassent l’intérêt de le conserver.

La reconstruction n’est jamais déduite du seul âge du code. Elle doit être motivée par :

- exigences fonctionnelles et non fonctionnelles ;
- actifs réutilisables ;
- migration de données ;
- continuité ;
- licences et droits ;
- TCO à horizons comparables ;
- risques et incertitudes explicités.

### 6.1 Verdict et trajectoire sont distincts

| Verdict | Sens | Trajectoire possible |
|---|---|---|
| **GO** | Les preuves critiques sont vérifiées dans le périmètre. | T1, T2, T3 ou T4 selon la décision économique. |
| **GO sous réserves** | Aucun blocage immédiat ; seules restent des actions P2 explicitement non bloquantes, complètes, datées et acceptées. | Souvent T1 ou T2 ; T3/T4 possibles. |
| **STOP** | Autorité, incident ou contrôle critique empêche une action sûre. | Aucune exécution avant levée du STOP ; la future trajectoire reste ouverte. |

---

## 7. Modèle TCO à 12, 36 et 60 mois

### 7.1 Principe

Le TCO sert à comparer les trajectoires, pas à produire un devis automatique.

Pour un horizon `H` en mois :

```text
TCO(H) =
  coûts initiaux
  + coûts de transition et de double run
  + somme mensuelle des coûts d'exploitation sur H
  + temps interne valorisé sur H
  + coût de risque scénarisé sur H
  + coût de sortie à H
```

Version simplifiée utilisée dans les exemples :

```text
TCO(H) = O + (H × M) + ((H / 12) × R) + E
```

avec :

- `O` : coûts initiaux et de transition ;
- `M` : exploitation mensuelle totale, temps interne inclus ;
- `R` : coût annuel de risque **scénarisé**, pas une perte certaine ;
- `E` : sortie, export, suppression, résiliation et transfert à l’horizon ;
- `H` : 12, 36 ou 60.

### 7.2 Conventions obligatoires

- Même périmètre fonctionnel et même niveau de service pour les quatre trajectoires.
- Les montants non connus restent `ND`, jamais `0`.
- Le temps interne est `jours × valeur journalière choisie par le client`.
- Les coûts de double run ne sont comptés qu’une fois.
- Les taxes, devises, indexations et amortissements sont explicités.
- Le risque est soit exclu, soit calculé comme scénario documenté ; il n’est pas présenté comme un fait.
- Une fourchette reste une fourchette ; le moteur ne remplace pas sa borne inconnue par une moyenne arbitraire.
- Toutes les hypothèses sont exportées avec les résultats.
- Les calculs utilisent une arithmétique exacte au centime ou un type décimal adapté, pas des flottants affichés sans arrondi maîtrisé.

### 7.3 Trois jeux fictifs recalculables

Les unités ci-dessous sont des **milliers d’unités monétaires fictives (`kUM`)**. Elles ne représentent ni euros, ni tarifs, ni médianes de marché. Leur seul rôle est de vérifier la formule et de montrer que l’horizon peut changer la décision.

#### Scénario fictif A — produit simple et déjà contrôlé

Entrées :

| Trajectoire | O | M/mois | R/an | E |
|---|---:|---:|---:|---:|
| T1 Mise sous contrôle | 2,00 | 0,30 | 0,60 | 1,00 |
| T2 Stabilisation | 6,00 | 0,22 | 0,25 | 0,80 |
| T3 Migration | 14,00 | 0,18 | 0,15 | 0,70 |
| T4 Reconstruction | 24,00 | 0,15 | 0,10 | 0,60 |

Résultats recalculés :

| Trajectoire | TCO 12 | TCO 36 | TCO 60 |
|---|---:|---:|---:|
| T1 | 7,20 | 15,60 | 24,00 |
| T2 | 9,69 | 15,47 | 21,25 |
| T3 | 17,01 | 21,63 | 26,25 |
| T4 | 26,50 | 30,30 | 34,10 |

Lecture : avec ces seules hypothèses fictives, T1 est minimal à 12 mois, puis T2 devient légèrement inférieur. Ce résultat ne se transpose à aucun projet sans remplacer chaque entrée.

#### Scénario fictif B — commerce avec plusieurs intégrations

Entrées :

| Trajectoire | O | M/mois | R/an | E |
|---|---:|---:|---:|---:|
| T1 Mise sous contrôle | 4,00 | 1,40 | 6,00 | 2,00 |
| T2 Stabilisation | 15,00 | 0,90 | 2,00 | 2,00 |
| T3 Migration | 32,00 | 0,65 | 1,00 | 1,50 |
| T4 Reconstruction | 60,00 | 0,50 | 0,80 | 1,50 |

Résultats recalculés :

| Trajectoire | TCO 12 | TCO 36 | TCO 60 |
|---|---:|---:|---:|
| T1 | 28,80 | 74,40 | 120,00 |
| T2 | 29,80 | 55,40 | 81,00 |
| T3 | 42,30 | 59,90 | 77,50 |
| T4 | 68,30 | 81,90 | 95,50 |

Lecture : le coût initial seul favoriserait T1 ; les entrées fictives font apparaître T2 à 36 mois puis T3 à 60 mois. La probabilité et l’impact associés à `R` doivent toujours être visibles et contestables.

#### Scénario fictif C — application sur mesure en fin de support

Entrées :

| Trajectoire | O | M/mois | R/an | E |
|---|---:|---:|---:|---:|
| T1 Mise sous contrôle | 8,00 | 2,50 | 12,00 | 5,00 |
| T2 Stabilisation | 30,00 | 1,80 | 5,00 | 4,00 |
| T3 Migration | 55,00 | 1,00 | 2,00 | 3,00 |
| T4 Reconstruction | 85,00 | 0,40 | 0,40 | 2,00 |

Résultats recalculés :

| Trajectoire | TCO 12 | TCO 36 | TCO 60 |
|---|---:|---:|---:|
| T1 | 55,00 | 139,00 | 223,00 |
| T2 | 60,60 | 113,80 | 167,00 |
| T3 | 72,00 | 100,00 | 128,00 |
| T4 | 92,20 | 102,60 | 113,00 |

Lecture : ces hypothèses artificielles font passer le minimum de T1 à T3 puis T4 lorsque l’horizon s’allonge. Elles démontrent seulement la sensibilité du résultat aux entrées.

### 7.4 Contrôles du calculateur

Le calculateur doit tester :

- 12, 36 et 60 mois ;
- `0` légitime distinct de `ND` ;
- valeurs négatives interdites sauf convention documentée ;
- valeurs très grandes sans débordement ;
- décimales et arrondis ;
- changement de devise sans conversion silencieuse ;
- risque exclu et risque inclus ;
- égalités et quasi-égalités ;
- absence de double comptage ;
- export des hypothèses ;
- recalcul déterministe après import.

---

## 8. Précautions juridiques et données

### 8.1 Qualification du rôle

Le prestataire de reprise n’est pas automatiquement sous-traitant au sens du RGPD. La qualification dépend des opérations réellement effectuées pour le compte du responsable de traitement.

Questions :

- accède-t-il à des données personnelles ?
- les héberge, copie, restaure, migre ou consulte-t-il ?
- agit-il sur instruction du client ?
- choisit-il certaines finalités ou moyens essentiels ?
- recourt-il à d’autres prestataires ?

Si le rôle est incertain ou contesté, le guide doit orienter vers le DPO ou un conseil compétent. Il ne tranche pas par une étiquette commerciale comme « maintenance ».

### 8.2 Contenu article 28

Lorsque le prestataire est sous-traitant, l’encadrement n’est pas facultatif. Le dossier doit vérifier au minimum :

- objet et durée ;
- nature et finalité ;
- types de données et catégories de personnes ;
- droits et obligations du responsable de traitement ;
- traitement sur instructions documentées ;
- confidentialité des personnes autorisées ;
- mesures de sécurité adaptées ;
- recours aux sous-traitants ultérieurs et autorisation prévue ;
- mêmes obligations transmises à la chaîne de sous-traitance ;
- assistance pour les droits, la sécurité, les violations et, le cas échéant, l’analyse d’impact ;
- retour ou suppression des données et copies en fin de prestation ;
- informations nécessaires à la démonstration de conformité ;
- audits et inspections ;
- localisation et transferts internationaux.

Le guide doit parler de **vérification contractuelle**, pas promettre qu’un modèle de clause générique rend la relation conforme.

### 8.3 Environnements de test

Règle éditoriale :

> Utiliser des données fictives ou anonymisées par défaut. Des données simplement « réduites », pseudonymisées ou copiées depuis la production restent potentiellement personnelles.

Si une utilisation exceptionnelle de données réelles est indispensable :

- justification et autorisation ;
- périmètre minimal ;
- environnement protégé au niveau approprié ;
- accès nominatifs, temporaires et tracés ;
- fonctions dangereuses neutralisées ;
- rétention courte ;
- purge vérifiée ;
- incident et assistance prévus contractuellement.

Les paiements, e-mails, SMS, webhooks, synchronisations CRM et automations utilisent des sandbox ou doubles contrôlés. « Mode test » n’est pas supposé isolé : son comportement réel doit être vérifié dans la documentation et par un test sans effet externe.

### 8.4 Accès de maintenance

Les accès doivent être :

- nominatifs ;
- limités au besoin ;
- ouverts pour une durée définie ;
- journalisés ;
- révoqués après intervention ;
- revus périodiquement ;
- associés à une personne qui les autorise.

Éviter les comptes partagés et l’accès permanent complet. La supervision d’un tiers peut être nécessaire sur un périmètre sensible.

### 8.5 Refus, litige et propriété intellectuelle

Le guide ne doit jamais suggérer de contourner :

- un refus d’autorité ;
- une récupération de compte non autorisée ;
- une licence contestée ;
- une restriction contractuelle ;
- un conflit sur le code ou les données.

Le dossier consigne :

- l’actif inaccessible ;
- la preuve disponible ;
- l’autorité revendiquée ;
- la conséquence opérationnelle ;
- l’action interdite ;
- la décision attendue du commanditaire ou du conseil compétent.

Une licence open source n’est ni « sans droit », ni automatiquement bloquante. Les obligations varient selon la licence et l’usage. L’inventaire technique facilite l’analyse, mais ne remplace pas l’interprétation juridique.

---

## 9. Incident actif et préservation

### 9.1 Séquence

1. Suspendre l’audit ordinaire et les changements non urgents.
2. Confirmer l’autorité et nommer le décideur d’incident.
3. Ouvrir un canal sûr distinct du système potentiellement compromis.
4. Horodater les observations et préserver journaux, captures et copies pertinentes.
5. Étendre la rétention des logs lorsque cela est sûr et autorisé.
6. Évaluer confinement, continuité et obligations de notification.
7. Isoler ou restaurer selon un plan piloté, en conservant autant que possible les éléments nécessaires à l’analyse.
8. Contacter selon le cas hébergeur, expert incident, DPO, juridique, assureur ou autorités compétentes.
9. Documenter toute rotation de secret et son impact sur les services.
10. Reprendre l’audit seulement après décision formelle.

### 9.2 Ce que le guide ne doit pas promettre

- qu’une restauration élimine la cause de la compromission ;
- qu’une sauvegarde antérieure est saine sans vérification ;
- qu’une rotation massive est toujours le premier geste ;
- qu’un prestataire donné est responsable de l’incident ;
- qu’une conservation de preuve justifie de laisser un dommage se poursuivre ;
- qu’une fiche générique remplace un plan de réponse à incident.

---

## 10. Benchmark mondial — sources primaires

**Date de vérification des liens et enseignements : 27 juillet 2026.**

Une date de publication ou de mise à jour n’est indiquée ci-dessous que lorsqu’elle ressort de la source. Les enseignements sont des synthèses, non des citations. Les limites empêchent la transposition abusive.

### 10.0 Benchmark éditorial international — corpus de douze contenus

Ce second corpus compare les réponses déjà proposées au lecteur, et pas
seulement les normes utilisées pour vérifier les faits. Douze contenus
accessibles en français, anglais et allemand ont été contrôlés le 27 juillet
2026 sur leur architecture, leurs questions, leurs preuves, leurs outils, leurs
cas, leur UX et leurs limites. Les constats ci-dessous décrivent ce corpus
documenté ; ils ne prétendent pas couvrir tous les contenus internationaux.

| Source, marché | Meilleur apport éditorial | Limite observée |
|---|---|---|
| [InstaRenewal — Digital Asset Audit](https://instarenewal.com/blog/how-to-audit-a-new-client-s-digital-assets-before-taking-over-their-website), international/EN, 15 juillet 2026 | Concurrent direct le plus proche : phases accès, DNS, hébergement, CMS, sécurité et rapport, avec tableaux et exemples. | Centré agence/WordPress ; pas de restauration prouvée, chaîne build→artefact→rollback, RPO/RTO, TCO ni faux GO adversarial. |
| [CertPilot — Domain Handover Checklist](https://certpilot.app/resources/client-domain-handover-checklist-agencies), international/EN, 17 mai 2026 | Meilleure fiche spécialisée domaine/DNS : propriétaire, MFA, TTL, CAA, MX, SPF, DKIM, DMARC, SSL et rollback. | Une observation publique ne prouve ni propriété privée ni reprise complète ; code, données, restauration et exploitation restent hors périmètre. |
| [HandoverGuard](https://handoverguard.com/), international/EN | UX dirigeant efficace : cartographie des comptes, ownership, score de risque et paquet de sortie. | Méthode de preuve, sources et critères techniques insuffisamment publiés ; pas de build, restauration, qualité web ou TCO. |
| [SmoothHandoff — Web Project Handoff Checklist](https://www.smoothhandoff.com/guides/web-project-handoff-checklist), international/EN | Très bon sur organisation des actifs, formation, réception formelle, conservation et clôture. | Organise une livraison, mais ne démontre pas qu’un existant est reprenable ni restaurable. |
| [ClickMasters — Software Project Handover Checklist](https://clickmasterssoftwaredevelopmentcompany.co.uk/resource/software-project-handover-checklist-uk), UK/EN, juin 2025 | Paquet logiciel lisible : dépôt, architecture, runbooks, infrastructure, API, secrets, schéma et transfert de connaissance. | Contenu commercial, sans preuve indépendante de restauration, passation rejouée, observabilité, qualité web ou TCO. |
| [Welda — Website-Übergabe-Checkliste](https://welda.app/de/blog/website-uebergabe-checkliste), DE/DE, 6 juin 2026 | Excellente pédagogie « pourquoi le demander / que se passe-t-il s’il manque » sur accès, domaine, code, licences, analytics, formation et protocole signé. | Une sauvegarde remise est encore confondue avec une restauration ; pas de build propre, rollback, hiérarchie de preuve ou TCO. |
| [AWS — Operational Readiness Reviews](https://docs.aws.amazon.com/wellarchitected/latest/operational-readiness-reviews/wa-operational-readiness-reviews.html), US/EN | Boucle incidents et presque-incidents → checklist adaptée → risque résiduel → actions dans le backlog. | Référentiel AWS d’exploitation ; ne couvre pas droits, actifs web, RGPD, SEO, accessibilité ou décision économique. |
| [Google SRE — Production Readiness Review](https://sre.google/sre-book/evolving-sre-engagement-model/), US/EN | Analogue le plus direct à l’acceptation d’une responsabilité de production : correction, formation, répétition et transfert progressif. | Pensé pour services à grande échelle, peu adapté aux contrats, actifs et contraintes des PME. |
| [NCSC UK — Secure deployment and maintenance](https://www.ncsc.gov.uk/collection/software-security-code-of-practice-implementation-guidance/secure-deployment-maintenance), UK/EN, 7 mai 2025 | Provenance, distribution, contrôles d’accès, version précise de rollback, playbook testé et traitement des vulnérabilités. | Référentiel de sécurité éditeur, pas décision globale de reprise. |
| [Cyber.gov.au — Guidelines for system management](https://www.cyber.gov.au/business-government/asds-cyber-security-frameworks/ism/cyber-security-guidelines/guidelines-for-system-management), AU/EN, 9 juin 2026 | Très forte exigence de sauvegardes cohérentes, protégées et restaurées durant des exercices PRA. | Dense, orienté grandes organisations et sans parcours dirigeant, actifs web ou TCO. |
| [CNIL — Guide de la sécurité des données personnelles](https://www.cnil.fr/fr/guide-de-la-securite-des-donnees-personnelles), FR/FR, édition 26 mars 2024 | 25 fiches actionnables sur développement, sous-traitance, maintenance, traces, sauvegarde, incidents, cloud et API. | Sécurité des données personnelles, pas aptitude opérationnelle complète ni comparaison de trajectoires. |
| [BSI — page officielle du Kompendium IT-Grundschutz 2023](https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/IT-GS-Kompendium/XML_Kompendium_2023.html), DE/DE, édition 2023 | Le module CON.3 relie sauvegarde et restauration, RPO, documentation, clés, prestataires et essais. | Référentiel spécialisé continuité, dense et peu orienté passation ou décision économique ; utiliser l’édition courante pour un audit réel. |

Le marché se fragmente en trois familles : inventaires d’agence, outils de
handover et référentiels d’operational readiness. Aucun contenu échantillonné
ne réunit à lui seul STOP préalable, niveaux d’audit, hiérarchie des preuves,
restauration réelle, chaîne de livraison, dix-huit domaines, quatre
trajectoires, TCO et dossier local. L’avantage défendable de la R1 n’est donc
pas sa longueur, mais l’unification de la passation, de l’aptitude à exploiter
et de la décision dirigeant. Cette comparaison ne garantit évidemment aucun
classement Google.

### 10.1 France

| Source primaire | Date source | Enseignement utile | Limite / non-transposabilité |
|---|---|---|---|
| [CNIL — Gérer la sous-traitance](https://www.cnil.fr/fr/securite-gerer-la-sous-traitance) | 14 mars 2024 | Contrat, chaîne de sous-traitants, audits, traçabilité, assistance, retour/destruction et transferts doivent être instruits. | S’applique lorsque le prestataire traite des données pour le compte du responsable ; ne qualifie pas automatiquement toute maintenance. |
| [CNIL — Encadrer la maintenance et la fin de vie](https://www.cnil.fr/fr/securite-encadrer-la-maintenance-et-la-fin-de-vie-des-materiels-et-logiciels) | 14 mars 2024 | Accès temporaires, nominatifs, tracés, ouverts sur demande et refermés après intervention. | Recommandation de sécurité à adapter aux systèmes et contrats. |
| [CNIL — Tester vos applications](https://www.cnil.fr/fr/tester-vos-applications) | 27 janvier 2020 | Données fictives ; anonymisation lors de l’import d’une configuration de production. | Une page plus ancienne reste utile, à croiser avec les recommandations de développement actualisées. |
| [CNIL — Encadrer les développements informatiques](https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques) | 14 mars 2024 | Séparation des environnements et protection forte si une exception utilise des données réelles. | Ne rend pas toute copie réelle licite ; justification et autres obligations restent nécessaires. |
| [ANSSI — Fondamentaux de la sauvegarde, v1.1](https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf) | version 1.1 | RPO/PDMA, RTO/DMIA, rétention, séparation, copie hors ligne, privilèges et tests. | Bonne pratique nationale, pas garantie de reprise par simple conformité à une règle « 3-2-1 ». |
| [Afnic — Gérer son nom de domaine](https://www.afnic.fr/noms-de-domaine/tout-savoir/gerer-son-nom-de-domaine/) | source courante vérifiée | Titulaire, contacts, renouvellement, registrar, AuthInfo et DNS sont des objets distincts. | Portée Afnic limitée aux extensions qu’elle gère ; ne généraliser ni procédure ni terminologie à tous les TLD. |
| [CERT-FR — Bons réflexes en cas d’intrusion](https://cert.ssi.gouv.fr/les-bons-reflexes-en-cas-dintrusion-sur-un-systeme-dinformation/) | source courante vérifiée | Préserver les journaux, réaliser des copies isolées et prolonger la rétention. | Ne remplace pas un plan spécifique ni une décision de confinement. |
| [Cybermalveillance.gouv.fr — Défiguration de site](https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/defiguration-de-site-internet) | mise à jour 10 juillet 2026 | Isoler si possible, préserver logs/captures et contacter hébergeur ou spécialiste. | Fiche réflexe grand public ; investigation et obligations varient selon l’incident. |
| [Code de la propriété intellectuelle — article L131-3](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958) | texte officiel consulté le 27 juillet 2026 | En droit français, les droits transmis par une cession et leur domaine d’exploitation doivent être délimités. | Ne pas en déduire qu’une cession intégrale est toujours nécessaire ; lire le contrat et les droits réellement requis, puis solliciter un conseil en cas d’ambiguïté. |

### 10.2 Union européenne

| Source primaire | Date source | Enseignement utile | Limite / non-transposabilité |
|---|---|---|---|
| [RGPD — texte officiel publié au Journal officiel, article 28](https://eur-lex.europa.eu/eli/reg/2016/679/oj/fra) | édition du Journal officiel consultée | Fixe les obligations du responsable et du sous-traitant lorsque la relation entre dans ce périmètre. | Cette URL n’est pas présentée comme la version consolidée ; une checklist ne remplace pas la qualification factuelle du rôle ni le conseil juridique. |
| [ENISA — Secure Use of Package Managers](https://www.enisa.europa.eu/publications/enisa-technical-advisory-for-secure-use-of-package-managers) | 10 mars 2026 | Sélection, intégration, surveillance des packages et traitement des vulnérabilités. | Avis technique ; ne crée pas seul une obligation légale pour chaque site. |
| [ENISA — SBOM Adoption: State of Play 2026](https://www.enisa.europa.eu/publications/sbom-adoption-state-of-play-2026) | 9 juin 2026 | Le SBOM sert l’inventaire et le partage d’informations sur les composants. | État des pratiques, pas exigence universelle de produire un SBOM pour toute reprise. |
| [Commission européenne — Cyber Resilience Act](https://digital-strategy.ec.europa.eu/en/policies/cra-summary) | entrée en vigueur 10 décembre 2024 | Situe le périmètre des produits avec éléments numériques et le calendrier progressif. | Ne pas affirmer que tout site sur mesure est automatiquement un produit CRA ni que toutes les obligations principales s’appliquent déjà : reporting à partir du 11 septembre 2026, obligations principales à partir du 11 décembre 2027. |
| [INCIBE — Metodología de contratación de servicios de seguridad](https://www.incibe.es/sites/default/files/contenidos/dosieres/metad_contratacion_de_servicios.pdf) | document officiel espagnol consulté le 27 juillet 2026 | Responsabilités, sauvegardes, interruption, escalade et revue périodique des niveaux de service. | Méthode de contractualisation espagnole à adapter au service, au contrat et au droit applicables. |

### 10.3 Royaume-Uni

| Source primaire | Date source | Enseignement utile | Limite / non-transposabilité |
|---|---|---|---|
| [NCSC — Software supply chain attacks: check your dependencies](https://www.ncsc.gov.uk/blogs/software-supply-chain-attacks-check-your-dependencies) | 4 juin 2026 | Inventaire de toutes les dépendances, MFA, contrôle CI/CD, rotation des identifiants exposés et examen des mises à jour. | Conseil britannique de cybersécurité, pas droit français. |
| [NCSC — Protect your code repository](https://www.ncsc.gov.uk/collection/developers-collection/principles/protect-your-code-repository) | source courante vérifiée | Moindre privilège, attribution des actions, secrets séparés, rotation, 2FA et sauvegarde du dépôt. | Principes à adapter à la plateforme et au risque. |
| [NCSC — Secure the build and deployment pipeline](https://www.ncsc.gov.uk/collection/developers-collection/principles/secure-the-build-and-deployment-pipeline) | source courante vérifiée | Pipeline de confiance, déclencheurs contrôlés, tests, secrets et rotation des clés. | Ne garantit ni réversibilité des données ni conformité contractuelle. |
| [NCSC — Defending software build pipelines](https://www.ncsc.gov.uk/blog-post/defending-software-build-pipelines-from-malicious-attack) | revue 5 mars 2025 | Chaîne de garde source-artefact, hashes/signatures, isolation du build. | Recommandation de sécurité ; profondeur proportionnée au produit. |

### 10.4 États-Unis

| Source primaire | Date source | Enseignement utile | Limite / non-transposabilité |
|---|---|---|---|
| [NIST SP 800-218 — SSDF v1.1](https://csrc.nist.gov/pubs/sp/800/218/final) | février 2022 | Provenance, inventaire des composants, vulnérabilités, support actif et mesures sur les composants non supportés. | Cadre volontaire ; ne constitue pas une obligation française générale. |
| [NIST SP 800-61r3 — Incident Response](https://csrc.nist.gov/pubs/sp/800/61/r3/final) | avril 2025 | Intègre la réponse à incident dans la gestion globale du risque. | Cadre organisationnel à contextualiser ; pas playbook spécifique à un site. |
| [CISA — projet public 2025 des Minimum Elements for an SBOM](https://www.cisa.gov/sites/default/files/2025-08/2025_CISA_SBOM_Minimum_Elements.pdf) | Public Comment Draft, août 2025 | Propose des éléments minimaux pour un SBOM exploitable et machine-processable. | Document pré-décisionnel qui ne représente pas la position finale du gouvernement américain ; ne pas le présenter comme une règle définitive ni comme une obligation française. Voir aussi les [éléments minimaux définitifs publiés par la NTIA en 2021](https://www.ntia.gov/report/2021/minimum-elements-software-bill-materials-sbom). |

### 10.5 Allemagne

| Source primaire | Date source | Enseignement utile | Limite / non-transposabilité |
|---|---|---|---|
| [BSI — Standard 200-4 Business Continuity Management](https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/BSI_Standards/standard_200_4.pdf?__blob=publicationFile&v=8) | PDF officiel courant retrouvé le 27 juillet 2026 | Relie continuité, objectifs de reprise, organisation de crise et amélioration du dispositif. | Référentiel allemand ; les objectifs et essais restent ceux du métier audité. |
| [BSI — préparation et conduite d’un IT-Grundschutz-Check](https://www.bsi.bund.de/dok/10990836) | raccourci documentaire officiel consulté le 27 juillet 2026 | Contrôler l’état par entretiens, documents et vérifications sur place, puis reprendre périodiquement le contrôle avec l’édition courante. | Une méthode de vérification n’établit pas seule l’aptitude à reprendre un site. |
| [BSI — page officielle du Kompendium IT-Grundschutz 2023](https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/IT-GS-Kompendium/XML_Kompendium_2023.html) | édition 2023 | Point d’entrée officiel des modules CON.3 et OPS.2.3 utilisés pour les sauvegardes, la restitution et l’externalisation. | Les exigences détaillées doivent être revérifiées dans l’édition courante ; elles ne deviennent pas automatiquement des obligations contractuelles françaises. |

Les raccourcis et PDF officiels ci-dessus remplacent les anciennes URL de
navigation longues qui répondaient de manière instable. La version réellement
applicable doit toujours être rouverte au moment de la mission.

### 10.6 Australie

| Source primaire | Date source | Enseignement utile | Limite / non-transposabilité |
|---|---|---|---|
| [Australian Signals Directorate — Guidelines for system management](https://www.cyber.gov.au/business-government/asds-cyber-security-frameworks/ism/cyber-security-guidelines/guidelines-for-system-management) | source actualisée en 2026 | Sauvegarder données, applications et réglages sur un point cohérent ; protéger les copies ; tester une restauration complète coordonnée. | Cadre australien ; la méthode n’est pas une obligation UE. |
| [Cyber.gov.au — Incident response planning](https://www.cyber.gov.au/business-government/detecting-responding-to-threats/cyber-security-incident-response/cyber-security-incident-response-planning-practitioner-guidance) | mise à jour 12 décembre 2024 | Rôles, obligations, confinement, preuves et notifications doivent être préparés. | Guide de planification ; ne tranche pas les notifications françaises ou européennes. |
| [Cyber.gov.au — Shared vision of SBOM](https://www.cyber.gov.au/business-government/supplier-cyber-risk-management/managing-cyber-supply-chains/shared-vision-of-software-bill-of-materials-for-cybersecurity) | 4 septembre 2025 | Inventaire machine-processable des composants directs/transitifs pour vulnérabilités et licences. | Vision commune, pas loi universelle. |
| [Cyber.gov.au — Managed service provider security](https://www.cyber.gov.au/business-government/supplier-cyber-risk-management/managed-service-providers/how-to-manage-your-security-when-engaging-a-managed-service-provider) | source courante vérifiée | Moindre privilège, comptes attribuables, MFA, accès juste-à-temps et journalisation. | Conseils MSP ; la relation de reprise peut relever d’autres modèles contractuels. |
| [Cyber.gov.au — Cloud shared responsibility for small and medium businesses](https://www.cyber.gov.au/business-government/protecting-devices-systems/cloud-computing/cloud-shared-responsibility-model-guidance-for-individuals-and-small-and-medium-businesses) | source courante vérifiée en 2026 | Le client conserve des responsabilités sur sauvegardes, secrets, configurations, alertes, journaux et conditions de restauration. | Le partage exact dépend de chaque service et contrat ; la source australienne ne fixe pas le droit applicable en France. |

### 10.7 Plateformes et standards web

| Source primaire | Date source | Enseignement utile | Limite / non-transposabilité |
|---|---|---|---|
| [WordPress — Backing Up Your Database](https://developer.wordpress.org/advanced-administration/security/backup/database/) | source courante vérifiée | La base et les fichiers forment des objets distincts de sauvegarde. | Spécifique à WordPress ; d’autres architectures exigent davantage de composants. |
| [GitHub — Transferring a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository) | source courante vérifiée | Collaborateurs, webhooks, services, secrets et deploy keys demandent une revue lors du transfert. | Spécifique à GitHub et au type de transfert. |
| [AWS CodeDeploy — Rollback and redeploy](https://docs.aws.amazon.com/codedeploy/latest/userguide/deployments-rollback-and-redeploy.html) | source courante vérifiée | Redéployer une révision ne réconcilie pas nécessairement les actions effectuées par des scripts. | Exemple fournisseur ; ne décrit pas tous les pipelines. |
| [Stripe — Testing use cases](https://docs.stripe.com/testing-use-cases) | source courante vérifiée | Sandbox et mode test permettent d’éviter les débits réels, mais leur isolation et leurs effets doivent être compris. | Spécifique à Stripe ; chaque tiers possède son propre modèle. |
| [Google Search Central — Site moves with URL changes](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) | source courante vérifiée | Préparer mappings, redirections, contrôle et surveillance lors d’un changement d’URL. | Ne s’applique pas tel quel à une reprise sans changement d’URL. |
| [Google Search Central — Site move without URL changes](https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes) | source courante vérifiée | Préparer et tester la nouvelle infrastructure, basculer le DNS puis surveiller ancien et nouveau services. | Procédure SEO d’hébergement ; ne prouve ni parité applicative, ni reprise des données, ni rollback. |
| [OWASP — Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/stable/) | version stable consultée | Structure de nombreux domaines de test web : configuration, identité, authentification, autorisation, sessions, entrées et logique métier. | Ne remplace ni un mandat de test, ni un pentest adapté, ni les preuves de restauration et d’exploitation. |
| [OWASP — Component Analysis](https://owasp.org/www-community/Component_Analysis) | source courante vérifiée | Inventaire, dépendances transitives, versions, support, licences et SBOM contribuent à analyser le risque de chaîne logicielle. | Un inventaire ou un SBOM seul ne conclut ni sur l’exploitabilité ni sur les droits juridiques. |
| [W3C — WCAG 2.2](https://www.w3.org/TR/WCAG22/) | recommandation du 12 décembre 2024 | Critères testables d’accessibilité, dont focus non masqué, clavier, erreurs et authentification accessible. | La conformité juridique dépend du contexte ; un audit de reprise ne vaut pas audit WCAG complet. |
| [W3C WAI — Template for Accessibility Evaluation Reports](https://www.w3.org/WAI/test-evaluate/report-template/) | mise à jour de liens en avril 2024 | Un rapport exploitable sépare résumé, contexte, périmètre, intervenants, méthode, résultats, actions, références et annexes. | Modèle d’accessibilité adapté ici comme structure documentaire ; il ne transforme pas l’audit général en évaluation WCAG. |
| [web.dev — Web Vitals](https://web.dev/articles/vitals) | source courante vérifiée | Utiliser des mesures reproductibles de l’expérience réelle et de laboratoire. | Documentation Google ; les seuils ne suffisent pas à juger seuls la capacité de reprise. |
| [RFC 4035 — DNSSEC Protocol Modifications](https://www.rfc-editor.org/rfc/rfc4035) | RFC officielle | Validation DNSSEC et cohérence de la chaîne de confiance. | Ne décide ni du registrar ni de l’architecture opérationnelle du site. |
| [RFC 7344 — DNSSEC Delegation Trust Maintenance](https://www.rfc-editor.org/rfc/rfc7344) | RFC officielle | Maintenance automatisée du DS et responsabilités parent/enfant. | L’automatisation dépend des capacités et procédures réellement utilisées. |
| [RFC 9364 — DNS Security Extensions (DNSSEC)](https://www.rfc-editor.org/rfc/rfc9364) | BCP 237 officielle | Synthèse actuelle des RFC DNSSEC et pratique recommandée pour l’authentification d’origine des données DNS. | Ce document de synthèse ne décrit pas à lui seul une procédure de reprise, de rollover ou d’amorçage. |
| [RFC 9615 — Automatic DNSSEC Bootstrapping](https://www.rfc-editor.org/rfc/rfc9615) | RFC officielle | Amorçage automatique à partir de signaux authentifiés publiés par l’opérateur de la zone. | Ne permet pas de présumer que le parent, le registrar et l’outillage réellement utilisés prennent en charge la procédure. |

---

## 11. Claims ledger

Le claims ledger gouverne ce qui peut être affirmé dans la page. `Interdit` signifie : ne pas publier cette affirmation sous cette forme, même si elle paraît commercialement simple.

| ID | Claim envisagé | Statut | Formulation ou preuve requise |
|---|---|---|---|
| C01 | « Un accès fonctionnel prouve que le client contrôle l’actif. » | **Interdit** | Distinguer droit, rôle, facturation, récupération et durée. |
| C02 | « L’accès technique ne prouve pas à lui seul le droit d’agir. » | **Retenu** | Appuyé par mandat, contrat et matrice d’autorité. |
| C03 | « Le titulaire d’un domaine en est propriétaire sans limite. » | **Interdit** | Parler du droit et des responsabilités dans le cadre du registre/TLD concerné. |
| C04 | « Les procédures Afnic valent pour tous les domaines. » | **Interdit** | Nommer explicitement les extensions et limites Afnic. |
| C05 | « Une sauvegarde existe, donc le site est récupérable. » | **Interdit** | Exiger cohérence, intégrité, clés, restauration et objectifs. |
| C06 | « Une restauration séparée est une preuve forte de récupérabilité. » | **Retenu sous condition** | Documenter périmètre, date, environnement, durée, résultat et nettoyage. |
| C07 | « La fréquence idéale de sauvegarde est universelle. » | **Interdit** | La déduire de la perte admissible, de l’architecture et des obligations. |
| C08 | « Une règle 3-2-1 garantit la reprise. » | **Interdit** | Présenter 3-2-1 comme bonne pratique parmi d’autres, avec tests. |
| C09 | « Des données réduites sont adaptées au test. » | **Interdit** | Fictives ou anonymisées par défaut ; exception encadrée. |
| C10 | « Pseudonymisé signifie anonyme. » | **Interdit** | Maintenir la qualification de donnée personnelle lorsque réidentification possible. |
| C11 | « Tout mainteneur est sous-traitant RGPD. » | **Interdit** | Qualifier selon les traitements réels. |
| C12 | « Lorsqu’il est sous-traitant, le contrat peut éventuellement traiter l’article 28. » | **Interdit** | Dire que l’encadrement requis doit couvrir les éléments applicables de l’article 28. |
| C13 | « Publier puis annuler démontre un rollback complet. » | **Interdit** | Distinguer redéploiement, rollback de code et réconciliation des données/tiers. |
| C14 | « Un petit changement en sandbox peut contribuer à démontrer la chaîne de livraison. » | **Retenu sous condition** | Neutraliser effets externes et documenter source, artefact, environnement, résultat. |
| C15 | « Un SBOM est obligatoire pour toute reprise de site. » | **Interdit** | Le présenter comme outil proportionné d’inventaire. |
| C16 | « Le CRA impose déjà toutes ses obligations à tous les sites. » | **Interdit** | Expliquer périmètre et calendrier ; orienter vers analyse compétente. |
| C17 | « Un SBOM règle les questions de licence. » | **Interdit** | Il inventorie ; une revue des obligations et droits reste nécessaire. |
| C18 | « Open source signifie sans obligation. » | **Interdit** | Les obligations dépendent de la licence et de l’usage. |
| C19 | « Le transfert GitHub supprime automatiquement les accès de l’ancien prestataire. » | **Interdit** | Auditer membres, équipes, apps, clés, webhooks et rotation. |
| C20 | « Stocker les secrets dans un outil dédié suffit. » | **Interdit** | Ajouter propriétaire, périmètre, rotation, révocation, MFA et récupération. |
| C21 | « Un code ancien doit être reconstruit. » | **Interdit** | Décider depuis preuves, besoins, support, risques et TCO. |
| C22 | « Un audit complet est toujours nécessaire. » | **Interdit** | Choisir le niveau depuis les déclencheurs, avec baseline minimale obligatoire. |
| C23 | « Une vitrine est toujours éligible à l’audit léger. » | **Interdit** | L’activité, les données, les intégrations et les inconnues priment sur l’étiquette. |
| C24 | « Performance, accessibilité et SEO bloquent toujours une reprise. » | **Interdit** | Modules proportionnés ; blocage seulement si exigence applicable ou régression critique acceptée sans décision. |
| C25 | « Ne pas changer d’URL élimine tout risque SEO. » | **Interdit** | Contrôler rendu, indexabilité, ownership et analytics selon le changement réel. |
| C26 | « STOP signifie qu’il faut reconstruire. » | **Interdit** | STOP suspend l’action ; la trajectoire vient après la levée. |
| C27 | « Il faut toujours conserver les preuves avant de protéger le service. » | **Interdit** | Préserver autant que compatible avec la réduction du dommage et la décision compétente. |
| C28 | « Le refus d’un ancien prestataire autorise un contournement. » | **Interdit** | Documenter le blocage et escalader sans bypass. |
| C29 | « GO signifie sécurisé et conforme. » | **Interdit** | GO ne vaut que pour le périmètre et les critères datés. |
| C30 | « Les exemples TCO représentent des tarifs. » | **Interdit** | Les présenter comme jeux fictifs en kUM, entièrement remplaçables. |
| C31 | « Le coût de risque est un fait. » | **Interdit** | Afficher probabilités, impacts, source et sensibilité ou laisser ND. |
| C32 | « Le guide permet de décider sans spécialiste dans tous les cas. » | **Interdit** | Définir les cas d’escalade juridique, incident, sécurité, données ou architecture. |

---

## 12. Spécification de la page R1

### 12.1 Parcours principal

1. **Hero**
   - promesse exacte ;
   - lien « Vérifier un STOP en 60 secondes » ;
   - lien « Ouvrir la grille des 18 domaines » ;
   - limites visibles.
2. **Triage STOP**
   - cinq familles canoniques alimentées par six questions factuelles ;
   - aucune collecte de secret ;
   - actions interdites et escalade.
3. **Choix léger/complet**
   - critères testables ;
   - explication de la profondeur ;
   - interdictions du léger.
4. **Synthèse décisionnelle**
   - statut des domaines ;
   - preuves fortes/faibles ;
   - blocages ;
   - GO / GO sous réserves / STOP.
5. **Grille des 18 domaines**
   - accordéons accessibles ;
   - exemples de preuves ;
   - champs structurés.
6. **Matrice des rôles**
   - titulaire ;
   - contractant ;
   - administrateur ;
   - facturation ;
   - récupération ;
   - décideur ;
   - exécutant.
7. **Quatre trajectoires**
   - comparaison à périmètre commun ;
   - hypothèses et réserves.
8. **TCO 12/36/60**
   - ND distinct de zéro ;
   - hypothèses visibles ;
   - exemple fictif chargeable.
9. **Quatre cas**
   - GO ;
   - GO sous réserves P2 ;
   - reprise bloquée par P1, préparation seule autorisée ;
   - STOP.
10. **FAQ et limites**
11. **Sources datées**
12. **CTA préqualifiant**

### 12.2 Progressive disclosure

Le premier écran explique seulement :

- ce que le guide décide ;
- ce qu’il ne décide pas ;
- si l’utilisateur doit s’arrêter ;
- où ouvrir la grille.

Les détails techniques restent accessibles par domaine. Les accordéons :

- sont de vrais boutons ;
- exposent `aria-expanded` et la relation au panneau ;
- se pilotent au clavier ;
- conservent une hiérarchie de titres ;
- ne masquent pas l’état ni le blocage principal ;
- restent tous développés ou intelligiblement réorganisés à l’impression.

### 12.3 Quatre cas pédagogiques

#### Cas A — GO

Vitrine simple, mandat et comptes vérifiés, sauvegarde restaurée, pipeline reproductible, contact testé sans donnée réelle, licences transférées, alertes reçues par le client. Les contrôles non applicables sont motivés.

Conclusion : GO daté dans le périmètre, trajectoire T1 possible.

#### Cas B — GO sous réserves

Commerce sans incident, autorité et paiements sous contrôle, restauration et publication sandbox validées. Deux P2 : ancien outil analytics à remplacer et test de charge à réaliser avant campagne, avec responsables et dates.

Conclusion : GO sous réserves si le décideur accepte explicitement les deux réserves ; trajectoire T2 ou T3 comparée au TCO.

#### Cas C — reprise bloquée par P1

PME de services, restauration et pages disponibles, mais compte d’envoi détenu
par l’ancien prestataire et alertes non testées. La préparation peut continuer
sur copie isolée, sans aucune bascule.

Conclusion : P1 à lever par création d’un compte contrôlé, rotation, test de
réception et test d’alerte avant le GO.

#### Cas D — STOP

Application sur mesure, compte cloud personnel de l’ancien prestataire, données personnelles copiées en préproduction, logs montrant une activité suspecte et absence de copie propre démontrée.

Conclusion : STOP ; pas de nettoyage ni de migration ordinaire. Autorité, réponse à incident, données et récupération sont traitées avant toute trajectoire.

Ces cas sont fictifs et ne prouvent pas qu’une situation analogue aboutira au même verdict.

### 12.4 FAQ cible

La FAQ doit répondre au minimum :

1. Combien de temps dure un audit léger ou complet ?
2. Pourquoi aucun prix universel n’est-il donné ?
3. Quelle différence entre audit, maintenance et réponse à incident ?
4. Peut-on auditer sans code source ?
5. Que contient le livrable ?
6. Qui doit posséder le domaine et les comptes ?
7. Que faire si l’ancien prestataire refuse ?
8. Peut-on tester avec une copie de production ?
9. Quand un contrat article 28 est-il nécessaire ?
10. Un SBOM est-il obligatoire ?
11. Quand faut-il mesurer SEO, performance ou accessibilité ?
12. Un GO garantit-il la sécurité ou la conformité ?

### 12.5 CTA préqualifiant

Le CTA décrit :

**Entrées attendues**

- mandat et interlocuteur décisionnaire ;
- liste des actifs et fournisseurs connus ;
- criticité et contraintes métier ;
- accès de lecture lorsque possible ;
- contrats et factures pertinents ;
- historique des incidents et changements ;
- objectifs RPO/RTO si existants.

**Livrables**

- synthèse dirigeant ;
- matrice des 18 domaines ;
- preuves et limites ;
- verdict daté ;
- actions interdites ;
- quatre trajectoires ;
- TCO si les données sont disponibles.

**Hors périmètre par défaut**

- avis juridique ;
- certification de sécurité ;
- pentest intrusif ;
- audit WCAG exhaustif ;
- garantie de positionnement SEO ;
- devis ferme sans cadrage ;
- traitement d’incident en cours.

---

## 13. Spécification de l’outil local

### 13.1 Principes

- Exécution côté client, sans requête réseau pour le dossier.
- Aucune télémétrie contenant les réponses.
- Aucun champ de secret, mot de passe, jeton ou donnée personnelle.
- Avertissement clair : utiliser seulement des références expurgées.
- Autosauvegarde locale optionnelle, expliquée et effaçable.
- Aucune synchronisation implicite.
- Version de schéma incluse dans chaque export.
- Moteur déterministe et séparé de l’interface.

### 13.2 Modèle de données minimal

```text
Assessment
  schemaVersion
  assessmentId
  createdAt
  updatedAt
  asOfDate
  scope
  environments[]
  auditLevel
  stopChecks[]
  domains[18]
  roles[]
  trajectories[4]
  tco
  verdict
  reservations[]
  sources[]

EvidenceControl
  id
  domainId
  applicable
  naReason
  status
  evidenceStrength
  observedAt
  expiresAt
  environment
  owner
  artifactReference
  testProcedure
  result
  limitation
  forbiddenAction
  nextAction
  dueAt
```

`artifactReference` contient une référence expurgée, jamais la valeur d’un secret ni une URL privée avec jeton.

### 13.3 Moteur fail-closed

Pseudo-règles :

```text
si un stopCheck actif :
  verdict = STOP

sinon si auditLevel = LIGHT et un déclencheur COMPLETE est présent :
  verdict = INCOMPLETE
  reason = "audit complet requis"

sinon si une des 13 clés de complexité est absente ou non qualifiée :
  verdict = INCOMPLETE
  canProceed = false

sinon si un contrôle critique applicable est UNKNOWN, DECLARED ou FAILED :
  verdict = INCOMPLETE
  canProceed = false

sinon si un N/A n'a pas le type de preuve dédié, un motif spécifique, un auteur,
un périmètre, un artefact, des dates valides, un résultat, une limite, une
action interdite, un impact explicitement non bloquant, un événement de
réouverture et une prochaine revue :
  verdict = INCOMPLETE
  canProceed = false

sinon si une réserve P2 est bloquante ou manque de propriétaire, limite,
action interdite, événement de réouverture, prochaine action ou échéance :
  la réserve devient P1
  verdict = INCOMPLETE
  canProceed = false

sinon si toutes les preuves critiques sont VERIFIED
  et qu'aucun P0/P1 n'existe :
    verdict = GO ou GO_WITH_RESERVATIONS_P2

le score n'annule jamais ces règles
```

Les preuves faibles doivent être nommées dans la synthèse. Une déclaration ne devient pas forte parce que plusieurs personnes la répètent.

### 13.4 Exports

Exports proposés :

- TXT lisible ;
- JSON versionné pour réimport ;
- CSV des contrôles ;
- impression A4.

Contraintes :

- expurger secrets, jetons, valeurs de configuration, données personnelles et URLs signées ;
- afficher la date, le périmètre, la version du moteur et les hypothèses ;
- conserver `ND`, états et N/A motivés ;
- nom de fichier sûr : caractères alphanumériques, tirets, date, identifiant non sensible ;
- aucun HTML actif dans les exports ;
- formules neutralisées dans CSV pour empêcher l’injection tableur ;
- le verdict exporté est recalculable depuis les entrées ;
- les exemples sont marqués fictifs.

### 13.5 Impression

BAT A4 obligatoire :

- navigation, footer, formulaires et contrôles interactifs masqués ;
- aucun skip-link flottant ou fond noir superposé ;
- pas de dernière page vide ;
- liens longs cassables ;
- tableaux scindables ou reformulés ;
- titres non orphelins ;
- accordéons ouverts ;
- statut et légende répétés lorsque nécessaire ;
- en-tête avec date, périmètre et verdict ;
- annexe de preuves séparée de la synthèse dirigeant ;
- contrôle visuel page par page, pas seulement génération PDF.

---

## 14. Critères d’acceptation

### 14.1 P0 — aucun acceptable

La R1 échoue immédiatement si :

- le moteur peut produire GO avec autorité inconnue ou contestée ;
- un incident actif peut être classé GO ;
- un contrôle critique inconnu est transformé en réussite ;
- un audit léger reste sélectionnable malgré un déclencheur complet ;
- l’outil collecte, expose ou exporte un secret ou une donnée personnelle d’exemple ;
- un test proposé peut déclencher paiement, message, suppression ou publication réelle sans garde-fou ;
- le texte encourage le contournement d’un refus ;
- une obligation juridique étrangère ou future est présentée comme obligation générale française actuelle ;
- le calculateur présente les scénarios fictifs comme tarifs ou prévisions.

### 14.2 P1 — tous fermés avant revendication premium

- Les 18 domaines existent et sont reliés au moteur.
- STOP est évalué avant le reste.
- L’éligibilité léger/complet est testable.
- `unknown`, `declared`, `verified`, `failed` et N/A motivé ont des comportements distincts.
- Une preuve C ne ferme pas un contrôle critique.
- Un P1 déclaré, en échec, expiré ou insuffisamment prouvé rend
  `canProceed=false` ; seules des préparations hors du périmètre bloqué sont
  permises.
- Un N/A contredit par le profil ou dépourvu de motif, propriétaire, date,
  artefact, périmètre, type de preuve dédié, résultat, limite, action interdite,
  impact non bloquant et événement de réouverture reste inconnu.
- Une réserve P2 incomplète ou réellement bloquante est automatiquement
  promue P1 ; une personne peut toujours déclarer explicitement un impact P1.
- Autorité, propriété, récupération et facturation sont séparées.
- Restauration, RPO/RTO et réconciliation sont couverts.
- Build, CI/CD, artefacts, rollback et side effects sont couverts.
- Supply chain, licences, secrets et EOL sont couverts sans fausse obligation de SBOM.
- Article 28, sous-traitants, transferts et fin de prestation sont correctement formulés.
- Données fictives ou anonymisées sont la règle par défaut.
- Incident et refus d’autorité conduisent au protocole STOP.
- Performance, capacité, accessibilité, SEO et analytics sont des modules proportionnés.
- Les quatre trajectoires partagent périmètre, horizon et conventions.
- Le TCO 12/36/60 recalcule exactement quantité et période, exige les sept
  catégories, une date de source et une méthode de réserve.
- `ND` ne devient jamais zéro.
- TXT, JSON et CSV conservent version R4, verdict, périmètre, impact des
  réserves, preuves, hypothèses et lignes TCO sourcées ; le JSON encode
  explicitement les six critères STOP et quatorze critères de qualification,
  dont treize déclencheurs d’audit complet ; tout traitement de données
  personnelles gouverne séparément l’applicabilité RGPD. L’impact de chaque
  zone est conservé et toute structure incomplète est refusée au réimport.
- L’impression A4 ne reproduit aucun des défauts constatés sur le snapshot.
- Les quatre cas produisent respectivement GO, GO sous réserves P2, reprise
  bloquée par P1 et STOP pour les bonnes raisons.
- Le CTA et le titre décrivent exactement l’outil et ses limites.

### 14.3 P2 — qualité finale

- Synthèse dirigeant lisible en une page.
- Progressive disclosure fluide.
- Ancres hero vers STOP et grille.
- FAQ complète.
- Sources datées et limites visibles.
- Quatre cas pédagogiques suffisamment distincts.
- Glossaire des termes RPO, RTO, SBOM, IaC, sous-traitant et rollback.
- Date d’expiration des preuves.
- Message clair lorsque les données TCO sont insuffisantes.
- Comparaison de scénarios sans classement commercial.
- Aucune phrase attribuant une faute sans preuve.
- État de focus visible, navigation clavier et messages de statut accessibles.
- Responsive et impression contrôlés sur un rendu réel.

### 14.4 Tests adversariaux minimaux

1. Dossier vide : jamais GO.
2. Toutes les réponses seulement déclarées : jamais GO.
3. Autorité inconnue : STOP.
4. Incident actif : STOP prioritaire.
5. Audit léger + paiement : audit complet requis.
6. Audit léger + auth : audit complet requis.
7. Audit léger + données de production : audit complet ou STOP selon le cas.
8. Contrôle critique inconnu : bloque.
9. N/A sans motif : bloque.
10. N/A avec motif sur contrôle réellement non applicable : accepté.
11. Preuve expirée : réouvre le contrôle.
12. Restore échoué : bloque.
13. Déploiement réussi mais side effect non réconcilié : bloque.
14. Collaborateur GitHub ancien non révoqué : bloque D10.
15. Licence inconnue : bloque ou réserve selon criticité documentée.
16. SBOM absent sur architecture simple : pas de blocage automatique si inventaire proportionné suffisant.
17. Module SEO N/A lors d’un changement d’URL : N/A refusé.
18. TCO avec ND : aucun classement silencieux.
19. TCO avec zéro réel : zéro conservé.
20. Import/export : résultat identique.
21. CSV commençant par `=`, `+`, `-` ou `@` : neutralisé.
22. Secret simulé : non exporté.
23. Reset : confirmation, focus restauré, données locales effacées.
24. Impression A4 : aucun contrôle, overlay ni page finale vide.
25. Navigation clavier complète et annonces de changement de verdict.

---

## 15. Gouvernance honnête

### 15.1 Registre des décisions

Chaque itération conserve :

- hash du corpus ;
- date ;
- auteur de la modification ;
- audits exécutés ;
- P0/P1/P2 ouverts ;
- preuves de fermeture ;
- tests ;
- limites et vérifications non exécutées.

### 15.2 Règles de communication

Ne jamais confondre :

- écrit ;
- testé localement ;
- rendu dans un navigateur ;
- build réussi ;
- poussé ;
- déployé ;
- servi en production ;
- indexé ;
- validé par un audit indépendant.

Le présent dossier autorise seulement les formulations suivantes :

- « dossier de recherche R1 créé » après création effective ;
- « sources vérifiées le 27 juillet 2026 » pour les sources effectivement contrôlées ;
- « scénarios TCO recalculés » après test arithmétique ;
- « critères d’acceptation définis ».

Il n’autorise pas :

- « page corrigée » ;
- « guide publié » ;
- « build vert » ;
- « déploiement réussi » ;
- « guide premium » ;
- « numéro 1 Google » ;
- « conformité garantie ».

### 15.3 Gate de sortie future

Une future page ne pourra être qualifiée de premium que si :

1. les P0 et P1 du chapitre 14 sont à zéro ;
2. les audits technique, UX et factuel/juridique sont relancés sur les mêmes hashes ;
3. les défauts d’un audit sont intégrés à l’union, sans vote majoritaire ;
4. le moteur et les exports passent les tests adversariaux ;
5. un BAT navigateur et A4 est réellement inspecté ;
6. les liens primaires sont recontrôlés à la date de sortie ;
7. les affirmations suivent le claims ledger ;
8. les limites de portée restent visibles.

Une note interne élevée ne remplace jamais ces preuves. L’ancien 19/20 reste explicitement invalidé par les audits froids 44/72/72.

---

## 16. Checklist de production R1

### Recherche

- [x] Corpus gelé et hashes consignés.
- [x] Trois audits contradictoires réunis.
- [x] Lacunes P1/P2 consolidées.
- [x] Benchmark primaire FR/UE/UK/US/DE/AU.
- [x] Limites de transposition écrites.
- [x] Claims ledger établi.
- [x] Trois scénarios TCO fictifs définis.
- [ ] Liens à revérifier au moment de la publication.

### Contenu

- [ ] Réécrire la promesse « quel audit ».
- [ ] Placer le STOP avant toute action.
- [ ] Intégrer les niveaux léger/complet.
- [ ] Couvrir les 18 domaines.
- [ ] Expliquer les quatre trajectoires.
- [ ] Publier les quatre cas fictifs.
- [ ] Ajouter FAQ et CTA préqualifiant.
- [ ] Afficher sources, dates et limites.

### Outil

- [ ] Implémenter le modèle versionné.
- [ ] Implémenter le moteur fail-closed.
- [ ] Tester les 25 cas adversariaux.
- [ ] Implémenter TCO exact 12/36/60.
- [ ] Empêcher ND → 0.
- [ ] Expurger exports TXT/JSON/CSV.
- [ ] Neutraliser les formules CSV.
- [ ] Tester reset, focus et stockage local.

### Vérification

- [ ] Audit technique froid.
- [ ] Audit UX froid.
- [ ] Audit factuel/juridique froid.
- [ ] Vérification des calculs.
- [ ] Vérification clavier et lecteur d’écran proportionnée.
- [ ] BAT responsive réel.
- [ ] BAT A4 page par page.
- [ ] Vérification des liens.
- [ ] Contrôle des claims interdits.

---

## Conclusion

Le snapshot audité contient une bonne explication introductive de la reprise, mais pas encore un système assez complet pour conclure de façon fiable. La R1 doit changer la nature du guide :

- d’un article linéaire vers un parcours décisionnel ;
- de six fiches génériques vers dix-huit domaines de preuves ;
- d’un GO fondé sur quelques confirmations vers un moteur fail-closed ;
- d’un conseil abstrait vers un dossier autonome et exportable ;
- d’une opposition « reprendre ou refaire » vers quatre trajectoires comparées ;
- d’un coût implicite vers un TCO 12/36/60 transparent et recalculable ;
- d’une auto-évaluation 19/20 vers une gouvernance contradictoire sur snapshot gelé.

Le meilleur garde-fou éditorial tient en une phrase :

> **Ce qui n’est pas applicable doit être motivé ; ce qui est applicable mais non prouvé reste inconnu ; et un inconnu critique ne produit jamais un GO.**
