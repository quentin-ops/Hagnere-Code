# Gel P0 — Power Apps ou application sur mesure

Date du gel : 2 août 2026  
Slug réservé : `power-apps-ou-application-sur-mesure`  
Orchestrateur : `PRIMARY_ORCHESTRATOR`  
État : P0 validé, entrée obligatoire de la passe 1

> Ce document ne constitue ni une passe rédactionnelle ni une autorisation de
> publication. Il fixe les faits, les inconnues, l'intention et les frontières
> que la passe 1 doit respecter. L'ancien dossier de juillet 2026 et ses anciens
> manifests P1 à P4 sont historiques : ils ne prouvent pas la nouvelle chaîne de
> production et ne doivent pas être recyclés.

## 1. Mission éditoriale unique

Permettre à un décideur français de déterminer, preuves et coûts en main, s'il
faut :

1. conserver sa Power App telle quelle ;
2. renforcer son architecture Power Platform ;
3. adopter une architecture hybride ;
4. reconstruire une application dédiée ;
5. suspendre la décision tant qu'une information critique manque.

La page doit servir deux situations distinctes :

- **nouveau projet** : choisir une architecture avant de construire ;
- **Power App existante** : distinguer une limite réelle de plateforme d'un
  défaut corrigeable de données, de formule, de gouvernance ou d'exploitation.

La réponse ne doit jamais être « le sur-mesure est toujours meilleur » ni
« Power Apps est toujours plus rapide ou moins cher ». Une conclusion peut
parfaitement recommander de rester sur Power Apps.

## 2. Intention, lecteur et décision après lecture

- Requête principale : `Power Apps ou application sur mesure`.
- Intentions secondaires : limites Power Apps, prix Power Apps, Dataverse ou
  SharePoint, application Power Apps externe, remplacer Power Apps, TCO Power
  Apps, délégation 2 000 lignes, export et réversibilité Power Platform.
- Lecteur : dirigeant, responsable métier, DSI, responsable transformation ou
  product owner d'une PME/ETI française.
- Décision attendue : choisir les preuves à recueillir, écarter les options
  incompatibles, comparer quatre TCO à 1/3/5 ans et définir la prochaine action.
- Action immédiate : produire un dossier de décision partageable et une liste
  de vérifications à mener dans le tenant, sur les données et avec les futurs
  utilisateurs.

## 3. Frontière avec les autres guides

Le guide est spécifique à Microsoft Power Platform. Il ne doit pas dupliquer :

- `remplacer-microsoft-access-application-web` : inventaire et sortie d'Access ;
- `no-code-ou-sur-mesure` : arbitrage générique entre catégories ;
- `transformer-excel-en-application` : sortie d'Excel ;
- `prix-logiciel-sur-mesure` : décomposition générale du budget d'un logiciel ;
- `signes-besoin-logiciel-metier` : prise de conscience du besoin ;
- `calculer-roi-logiciel-metier` : méthode générale de ROI ;
- les guides SaaS : produit externe, distribution et multitenant.

La spécificité obligatoire porte sur : canvas, model-driven, Power Pages,
SharePoint, Dataverse, licences, connecteurs, flux, délégation, requêtes,
environnements, solutions, DLP, ALM, invités, hors-ligne et réversibilité.

## 4. Historique public à préserver

La route a une existence publique antérieure. La première preuve de production
retrouvée est :

- commit d'introduction : `72169b8f49f8413cfad925863e4e560cd891bee6` ;
- merge déployé : `d72c573418e45dd3480dcd901642bbf6f272334f` ;
- déploiement Vercel : `dpl_5apM6eu6qtjeu3we15rrRHvWbPNf` ;
- état `ready` converti : `2026-07-23T21:31:02+02:00` ;
- le déploiement de production précédent ne contenait pas cette route.

Conséquences :

- conserver `datePublished = 2026-07-23T21:31:02+02:00` ;
- utiliser comme `dateModified` l'horodatage réel de la future republication ;
- ne jamais prétendre que la page était indexée ;
- la route publique actuelle redirige temporairement vers
  `/services/outils-internes-sur-mesure` ;
- le retrait de cette redirection n'intervient qu'à l'intégration finale.

Les ancres historiques suivantes doivent rester disponibles, même si leur
contenu est entièrement réécrit : `reponse`, `cinq-tests`, `cout`, `chemins`,
`audit`, `sources`.

## 5. Constat concurrentiel P0

La recherche francophone du 2 août 2026 montre surtout :

- des pages Microsoft de produit ou de prix, exactes mais non décisionnelles ;
- des intégrateurs Power Apps qui détaillent peu les contre-indications ;
- des guides généralistes qui confondent souvent délégation et limite de lignes ;
- quelques articles anglophones plus équilibrés, mais sans contexte contractuel
  français, calcul éditable ni plan de migration complet.

La page doit donc se différencier par :

- une décision neutre à cinq sorties, dont `STOP` ;
- deux parcours de lecture, nouveau projet et existant ;
- un diagnostic local avec réponses `oui / non / à vérifier` ;
- quatre TCO éditables à 1, 3 et 5 ans ;
- des scénarios explicitement fictifs et des contre-cas ;
- une remédiation avant toute reconstruction ;
- une migration exécutable avec coexistence et retour arrière ;
- une source primaire Microsoft pour chaque affirmation technique ou tarifaire.

Les concurrents servent uniquement à lire l'intention et les omissions. Ils ne
sont pas des sources factuelles du guide.

## 6. Registre des sources primaires et faits autorisés

Les pages sont à rouvrir pendant P1/P2. Un fait volatil doit afficher sa date de
vérification et inviter le lecteur à contrôler son contrat, son tenant ou son
environnement.

### 6.1 Prix et licences

Source : <https://www.microsoft.com/fr-fr/power-platform/products/power-apps/pricing>

Relevé du 2 août 2026 :

- Power Apps Premium : **17,30 € HT/utilisateur/mois**, paiement annuel ;
- tarif affiché **10,40 € HT/utilisateur/mois** à partir de 2 000 nouvelles
  licences, paiement annuel et contact commercial ;
- plan Developer gratuit réservé au développement et au test, pas à la
  production ;
- extension Dataverse base de données : **34,70 € HT/Go/mois**, paiement annuel.

Ces prix marketing ne sont pas un devis ni un TCO. Ils peuvent varier selon le
pays, la devise, le contrat, le canal et la négociation.

Source :
<https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/bade/documents/products-and-services/en-us/bizapps/Power-Platform-Licensing-Guide.pdf>

- le guide de licences de juillet 2026 indique la fin de commercialisation de
  l'ancien abonnement Power Apps « per app » en janvier 2026 ;
- ne pas présenter l'ancien prix à 5 USD comme une offre achetable actuelle ;
- une incohérence apparente existe dans le PDF sur la capacité initiale
  Dataverse du tenant : ne publier aucun chiffre initial sans confirmation.

Source :
<https://learn.microsoft.com/fr-fr/power-platform/admin/pay-as-you-go-meters>

- le compteur Power Apps « per app » est annoncé à **10 USD** par utilisateur
  actif unique, par application et par mois ;
- plusieurs ouvertures de la même application dans le mois ne recomptent pas
  l'utilisateur ;
- un utilisateur Premium n'est pas facturé au compteur ;
- ne pas convertir automatiquement le prix USD en EUR ; vérifier le contrat
  Azure et la région de facturation.

Les droits Microsoft 365 sont limités au scénario et aux composants couverts.
Interdiction d'écrire « Power Apps est gratuit/inclus dans Microsoft 365 » sans
qualifier licence, connecteurs, source de données, flux et droits exacts.

### 6.2 Types d'application et utilisateurs externes

Sources :

- <https://learn.microsoft.com/fr-fr/power-apps/maker/canvas-apps/share-app-guests>
- <https://www.microsoft.com/fr-fr/power-platform/products/power-pages/pricing>

À distinguer sans ambiguïté :

- application canvas partagée à des collaborateurs ou invités Entra B2B ;
- application pilotée par modèle, centrée sur Dataverse ;
- Power Pages, portail navigateur externe adossé à Dataverse ;
- application dédiée, dont l'identité et l'architecture sont conçues au projet.

Un invité a besoin des droits Power Apps et des autorisations sur les sources
sous-jacentes. Une licence dans un tenant ne confère pas automatiquement les
mêmes droits dans un autre. Les prix Power Pages sont volatils et ne doivent
être repris que si P1/P2 les rouvrent et les datent.

### 6.3 SharePoint, Dataverse et délégation

Sources :

- <https://learn.microsoft.com/fr-fr/power-apps/maker/data-platform/data-platform-intro>
- <https://support.microsoft.com/fr-fr/office/g%C3%A9rer-des-listes-et-des-biblioth%C3%A8ques-volumineuses-b8588dae-9387-48c2-9248-c24122f07c59>
- <https://learn.microsoft.com/fr-fr/power-apps/maker/canvas-apps/delegation-overview>

Faits à préserver :

- Dataverse apporte tables relationnelles, métadonnées, règles, sécurité fine,
  API et intégration ALM ; il implique généralement une gouvernance et des
  droits Premium ;
- une liste SharePoint peut contenir jusqu'à 30 millions d'éléments, tandis que
  le seuil de requête/vue documenté est de 5 000 ; ce n'est pas une limite de
  stockage à 5 000 lignes ;
- en canvas, la limite locale de lignes examinées est de 500 par défaut et peut
  être portée à 2 000 ;
- une formule non délégable peut rendre un résultat incomplet ou faux, pas
  seulement lent ;
- interdiction d'écrire « Power Apps est limité à 2 000 lignes ».

### 6.4 Connecteurs, requêtes et protection de service

Sources :

- <https://learn.microsoft.com/fr-fr/connectors/>
- <https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/connections-list>
- <https://learn.microsoft.com/fr-fr/power-platform/admin/api-request-limits-allocations>
- <https://learn.microsoft.com/fr-fr/power-apps/developer/data-platform/api-limits>

L'audit doit couvrir l'application, ses flux, connecteurs indirects, passerelles,
API personnalisées, identités et quotas propres. Distinguer :

1. droits de requêtes liés à la licence ;
2. protection de service Dataverse ;
3. quotas propres à chaque connecteur.

Les valeurs numériques sont volatiles. P1/P2 doivent les rouvrir avant de les
publier et ne jamais les transformer en promesse de capacité.

### 6.5 Environnements, ALM, sécurité et politiques de données

Sources :

- <https://learn.microsoft.com/fr-fr/power-platform/admin/environments-overview>
- <https://learn.microsoft.com/en-us/power-platform/alm/basics-alm>
- <https://learn.microsoft.com/fr-fr/power-platform/alm/pipelines>
- <https://learn.microsoft.com/fr-fr/power-platform/alm/use-source-control-solution-files>
- <https://learn.microsoft.com/fr-fr/power-platform/admin/database-security>
- <https://learn.microsoft.com/en-us/power-platform/admin/wp-data-loss-prevention>
- <https://learn.microsoft.com/en-us/power-platform/admin/advanced-connector-policies>

Points de décision :

- ne pas laisser une application critique vivre tacitement dans l'environnement
  par défaut ;
- séparer développement, test et production ;
- utiliser solutions, variables, références de connexion, contrôle de version
  et déploiements reproductibles ;
- les pipelines ne transportent pas les données métier ; données, secrets,
  identités et connexions ont leur propre plan ;
- les rôles Dataverse sont cumulatifs : tester le moindre privilège avec de
  vrais comptes ;
- les politiques de données peuvent bloquer, suspendre ou mettre en quarantaine
  des applications et flux ; auditer les politiques effectives du tenant.

### 6.6 Hors-ligne, accessibilité, export et support

Sources :

- <https://learn.microsoft.com/fr-fr/power-apps/mobile/mobile-offline-works-overview>
- <https://learn.microsoft.com/ga-ie/power-apps/mobile/limitations-canvas-apps>
- <https://learn.microsoft.com/fr-fr/power-apps/maker/canvas-apps/accessible-apps>
- <https://learn.microsoft.com/fr-fr/power-apps/maker/canvas-apps/accessibility-checker>
- <https://learn.microsoft.com/fr-fr/power-apps/maker/canvas-apps/accessible-apps-limitations>
- <https://learn.microsoft.com/fr-fr/power-apps/maker/canvas-apps/export-import-app>
- <https://learn.microsoft.com/en-us/power-platform/admin/support-overview>

À écrire prudemment :

- l'offline-first intégré repose sur Dataverse et Power Apps Mobile ; ce n'est
  pas un mode hors-ligne général du navigateur ;
- le vérificateur d'accessibilité ne prouve ni WCAG ni RGAA ; prévoir clavier,
  zoom, lecteur d'écran et utilisateurs réels ;
- les solutions et fichiers extraits améliorent l'auditabilité dans Power
  Platform mais ne sont pas un export en React/Next ;
- **inférence à signaler** : quitter le runtime peut imposer de reconstruire
  interface, logique et intégrations, plus migrer les données ;
- le support éditeur sur un incident plateforme ne remplace pas maintenance de
  l'application, assistance métier, tests et continuité d'activité.

## 7. Contrat du guide à créer en P1

La structure doit au minimum couvrir :

1. réponse directe et limites de cette réponse ;
2. deux parcours, nouveau projet et existant ;
3. ce qui est réellement comparé ;
4. preuves à recueillir : audience, identité, données, licences, flux,
   délégation, UX, hors-ligne, sécurité, DLP, ALM, propriété et support ;
5. TCO à 1/3/5 ans ;
6. quatre options plus `STOP` ;
7. scénarios fictifs montrant le raisonnement ;
8. remédiations avant reconstruction ;
9. plan de migration, coexistence, recette, rollback et extinction ;
10. checklist d'action immédiate ;
11. FAQ visible et sourcée ;
12. sources primaires et limites.

Scénarios pédagogiques obligatoires, tous marqués **fictifs** :

- formulaire interne pour 20 salariés ;
- application terrain avec réseau intermittent ;
- outil métier critique pour 250 utilisateurs ;
- portail client avec identité externe et forte exigence de marque ;
- application dépendante d'un maker parti.

Aucun budget, délai, gain ou ROI fictif ne doit être présenté comme une norme du
marché ou un cas client réel.

## 8. Contrat du workbench

L'outil fonctionne entièrement dans le navigateur, sans réseau, stockage local
ni collecte. Il contient deux couches :

### 8.1 Diagnostic de preuves

- réponses tri-state : `oui`, `non`, `à vérifier` ;
- inconnues critiques visibles ;
- contradictions visibles ;
- options encore défendables ;
- prochaine preuve précise à obtenir ;
- pas de gagnant opaque ni de score pseudo-scientifique ;
- statut `STOP_MISSING_EVIDENCE` tant qu'une donnée critique manque.

### 8.2 TCO comparatif

Options séparées :

1. Power Apps actuel ;
2. Power Apps renforcé ;
3. hybride ;
4. application dédiée.

Horizon : 1, 3 et 5 ans. Chaque coût est `connu`, `inconnu` ou `non applicable`.
Une inconnue vaut `null`, jamais zéro. Un zéro explicite reste possible.

Forme générale :

`TCO = coûts ponctuels + coûts mensuels × 12 × années`

Pour Power Apps, les licences utilisent un tarif mensuel **éditable et daté**.
Le prix Premium public peut préremplir une aide, mais le lecteur doit confirmer
son prix contractuel. Le PAYG en USD ne doit jamais être converti en EUR par
défaut.

Fonctions attendues : dossier texte copiable et impression. Aucun téléchargement
XLS, XLSX, CSV ou tableur. L'échec du presse-papiers doit être annoncé honnêtement.

## 9. SEO, données structurées et expérience

- titre naturel, centré sur la question du lecteur ;
- réponse substantielle avant le premier CTA ;
- CTA principal vers `/services/outils-internes-sur-mesure` ;
- CTA projet vers `/demarrer-un-projet` ;
- texte commercial compatible avec une conclusion « restez sur Power Apps » ;
- données structurées : `Article` et `BreadcrumbList` uniquement ;
- interdits : `FAQPage`, `HowTo`, `Offer`, `Review`, `AggregateRating`,
  `SoftwareApplication`, `Product`, `wordCount` ;
- trois SVG dédiés : 1600×900, 1200×900 et 1200×1200 ;
- OG dynamique 1200×630 ;
- contrôles d'au moins 44 px, labels reliés, focus visible, résultat dynamique
  annoncé, clavier, zoom 200 %, police 150 %, sombre, impression et absence de
  débordement horizontal de 320 à 1600 px.

Pendant les passes, l'entrée locale utilise
`editorialStatus: "ready-for-human-review"`. La route reste `noindex,nofollow`,
hors hub, sitemap et `llms.txt`. L'intégration centrale et l'indexation ne sont
autorisées qu'après P4 et le contrôle transversal.

## 10. Périmètre de fichiers avant intégration

La passe 1 peut modifier uniquement :

```text
src/app/guides/power-apps-ou-application-sur-mesure/page.tsx
src/app/guides/power-apps-ou-application-sur-mesure/opengraph-image.tsx
src/app/guides/power-apps-ou-application-sur-mesure/content-quality.test.ts
src/app/guides/power-apps-ou-application-sur-mesure/power-apps-decision-model.ts
src/app/guides/power-apps-ou-application-sur-mesure/power-apps-decision-model.test.ts
src/app/guides/power-apps-ou-application-sur-mesure/power-apps-decision-workbench.tsx
src/app/guides/power-apps-ou-application-sur-mesure/power-apps-decision-workbench.test.tsx
public/guides/power-apps-ou-application-sur-mesure/article-power-apps-16x9.svg
public/guides/power-apps-ou-application-sur-mesure/article-power-apps-4x3.svg
public/guides/power-apps-ou-application-sur-mesure/article-power-apps-1x1.svg
docs/research/power-apps-ou-application-sur-mesure-p0.md
docs/research/power-apps-ou-application-sur-mesure.md
docs/research/manifests/power-apps-ou-application-sur-mesure-p1.sha256
docs/research/manifests/power-apps-ou-application-sur-mesure-p2.sha256
docs/research/manifests/power-apps-ou-application-sur-mesure-p3.sha256
docs/research/manifests/power-apps-ou-application-sur-mesure-p4.sha256
```

Les trois anciens manifests P2/P3/P4 doivent être supprimés en P1 et ne seront
recréés que par leurs nouvelles passes. L'ancien dossier et l'ancien manifest
P1 doivent être entièrement remplacés.

Interdiction avant l'intégration finale de modifier :

- `src/lib/guides.ts` et ses tests ;
- `src/lib/legacy-guide-redirects.ts` et ses tests ;
- `src/components/guides/GuidesHubPage.tsx` ;
- tout autre guide ou maillage entrant ;
- configuration, dépendances, sitemap et `llms.txt` ;
- registre central et verrous, réservés à l'orchestrateur.

## 11. Motifs de refus immédiat à G1

Le snapshot P1 sera refusé si l'un de ces points apparaît :

- ancienne page ou ancien dossier recyclé ;
- source commerciale utilisée comme preuve technique ;
- prix non daté ou présenté comme contractuel ;
- ancien abonnement per-app à 5 USD présenté comme actuel ;
- « Microsoft 365 inclut Power Apps gratuitement » sans qualification ;
- « limite de 2 000 lignes » ;
- confusion entre invités canvas et Power Pages ;
- offline promis dans le navigateur ou avec SharePoint ;
- export de solution présenté comme code web portable ;
- inconnu converti en zéro ;
- verdict malgré une inconnue critique ;
- faux cas client, faux ROI, faux délai ou chiffre de marché inventé ;
- absence d'une des cinq sorties ;
- absence de remédiation avant migration ;
- CTA avant une réponse utile ;
- `FAQPage` ou `HowTo` ;
- téléchargement tableur ;
- fichier partagé modifié ;
- manifeste incomplet ou non reproductible.

## 12. Décision P0

**GO_P1** sous réserve que la passe 1 :

- rouvre les sources primaires utilisées ;
- conserve toutes les incertitudes contractuelles ;
- produise de zéro le guide, le moteur, l'interface, les tests, les visuels, le
  dossier de preuve et le manifeste ;
- n'intègre ni ne publie rien ;
- rende explicitement `PASSE_1_TERMINEE` avant le contrôle G1 de l'orchestrateur.
