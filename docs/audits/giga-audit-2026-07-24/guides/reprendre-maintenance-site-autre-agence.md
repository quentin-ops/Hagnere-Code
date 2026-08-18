# Audit approfondi — `reprendre-maintenance-site-autre-agence`

Date : 24 juillet 2026

Auditeur concurrentiel : Codex — cellule `corpus_inventory`

Snapshot du guide : `fa8531d8ae414d56e574c4942eb8ca98ac47313c9de5e4e60464a406e4c715ba`

Périmètre : audit éditorial, décisionnel, concurrentiel et factuel. Aucune
réécriture de la page publique n’a été effectuée dans ce dossier.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant ou responsable marketing/numérique qui veut confier un site encore utile à une nouvelle agence, avec des accès et dépendances mal connus.
Question réelle : peut-on changer de mainteneur sans panne, perte de demandes, coupure d'e-mails, perte de données, litige d'accès ou migration inutile ?
Décision attendue : choisir passation simple, audit, stabilisation, migration ou reconstruction, puis séquencer les opérations et fermer les anciens accès.
Réponse actuelle en une phrase : ne coupez rien et ne migrez pas tout le même jour ; sécurisez un compte entreprise, une copie restaurée et une publication testée, puis changez un service à la fois.
Défaut qui coûte le plus de valeur : aucun coût du risque ni TCO à horizon constant ne permet d'arbitrer passation, stabilisation, migration et reconstruction.
Niveau actuel : D
Priorité : haute
Statut : audité / à réécrire
```

Le guide actuel est solide sur le plan opérationnel. Il distingue correctement
maintenance, hébergement, domaine, DNS et e-mail ; il protège les données de
test ; il pense aux accès techniques invisibles ; il refuse la reconstruction
automatique. C’est déjà meilleur que les checklists concurrentes qui se
contentent d’énumérer des identifiants.

Sa faiblesse est décisionnelle. Les quatre suites possibles sont décrites sans
temps, coût, exposition métier, critères de sortie ou comparaison sur douze
mois. La transition ne chiffre ni les demandes commerciales menacées, ni le
volume de données depuis la dernière sauvegarde, ni les comptes à révoquer. Le
lecteur sait quoi vérifier, mais pas **combien il est raisonnable d’investir
avant de migrer ou reconstruire**.

Une nuance de sécurité doit également être mieux formulée : « ne retirez rien
avant trois contrôles » protège la continuité, mais ne doit pas autoriser un
ancien prestataire sans besoin légitime à conserver indéfiniment des accès
privilégiés. La future version doit distinguer :

1. incident actif ou relation devenue hostile : containment et décision
   sécurité immédiate ;
2. passation normale : accès bornés, tracés et retirés selon un plan ;
3. dépendance technique : remplacement de la clé ou du compte avant révocation.

### Score avant correction

| Axe | Note /10 | Preuve localisable | Manque décisif |
| --- | ---: | --- | --- |
| Intention | 9 | L’ouverture parle d’agence lente ou arrêtée, de demandes encore reçues et d’e-mails liés au domaine (`page.tsx:334-358`). | Le verdict ne quantifie pas l’exposition ni le budget de reprise. |
| Décision | 7 | Quatre suites raisonnables sont proposées (`page.tsx:790-811`). | Passation, audit, stabilisation et reconstruction ne sont pas comparés sur le même périmètre ; migration reste dispersée. |
| Pédagogie | 8 | Trois contrôles, cartes par service, copie isolée et ordre de bascule sont très concrets (`page.tsx:400-429`, `485-631`, `675-716`). | Pas de chronologie complète avec acteurs, fenêtre, preuve, retour arrière et réconciliation des accès. |
| Profondeur | 6 | Domaine, DNS, hébergement, code, base, formulaires, e-mails, analytics, sauvegarde, données, licences et droits sont couverts. | SLA, supervision, dépendances, vulnérabilités, versioning, délivrabilité, performance, coûts, RTO/RPO et suivi après reprise manquent ou restent brefs. |
| Preuve | 7 | Afnic, CNIL, MesServicesCyber, WordPress, GitHub et Légifrance sont mobilisés (`page.tsx:470-482`, `550-575`, `621-672`, `719-752`). | Aucune restauration chronométrée, aucun inventaire d’accès fermé, aucun test ou incident chiffré. |
| Comparaison | 4 | Quatre choix sont juxtaposés avec « quand » et « prochaine action ». | Pas de TCO 12 mois, temps interne, risque résiduel, coût de sortie ou horizon commun. |
| Originalité | 8 | La distinction « changer de mainteneur ne signifie pas migrer » et le test formulaire/e-mail sont différenciants. | La méthode n’est pas encore livrée sous forme de registre téléchargeable et de plan GO/STOP. |
| Style | 8 | Ton calme, humain, professionnel, sans dramatisation ni récupération illégitime d’accès. | Quelques avertissements sont longs ; il manque une opinion mémorable sur la migration et la propriété des comptes. |
| Conversion | 7 | CTA explicite, aucun accès demandé d’emblée, reconstruction non automatique (`page.tsx:823-833`). | Le prospect ne voit pas le livrable, la durée de validité de l’audit, le niveau de preuve ni le coût comparé des options. |
| SEO/produit | 7 | Métadonnées, FAQ, données structurées et maillage vers coût, audit, propriété et maintenance sont présents. | Les requêtes « checklist passation agence », « plan de réversibilité », « coût changement agence », « reprise sans migration », « révocation accès prestataire » et « TCO reprise vs refonte » sont sous-traitées. |

Total : **71/100**

## 2. Ce que le guide dit réellement

- La réponse arrive immédiatement : ne pas couper l’ancien accès ou déplacer
  tous les services le même jour.
- Il explique très bien qu’une agence peut commercialement réunir plusieurs
  services qui restent techniquement distincts.
- Les trois preuves minimales sont utiles : compte contrôlé par l’entreprise,
  copie restaurée et nouvelle équipe capable de publier/formulaire.
- La carte des services dépasse le simple site : domaine, DNS, e-mail,
  hébergement, code, base, formulaires, mesure, consentement, sauvegardes et
  licences.
- La copie de test est protégée, non indexée, privée, vidée de données réelles
  si possible et déconnectée des envois/paiements.
- Le guide adapte la passation à une agence coopérative, absente ou à un
  élément contesté.
- Il couvre les comptes humains et les clés, jetons, applications et webhooks,
  puis demande un dernier test après révocation.
- Il propose passation simple, vérification technique, stabilisation ou
  reconstruction justifiée.
- Ce qui paraît complet mais n’aide pas assez à décider : les listes donnent un
  très bon « quoi », mais pas le coût, le délai, l’ordre contractuel, la perte
  maximale acceptable, le responsable et le critère GO/STOP de chaque voie.

## 3. Benchmark France et international

Requêtes, pays, langues et date :

- France, français, 24 juillet 2026 : `changer agence maintenance site web`,
  `reprise site autre prestataire checklist`, `passation accès domaine
  hébergement code`, `cahier des charges réversibilité site`.
- Royaume-Uni, anglais, 24 juillet 2026 : `website handover maintenance
  checklist agency`, `supplier contract exit access revoke`, `website
  transition launch plan`.
- États-Unis, anglais, 24 juillet 2026 : `website handover business owner
  checklist`, `vendor offboarding revoke access`, `agency source code hosting
  credentials`.
- Australie, anglais, 24 juillet 2026 : `cloud provider offboarding backup
  export revoke access`, `supplier remote access security`.
- Sources primaires : Afnic, CNIL, Légifrance, MesServicesCyber/ANSSI,
  WordPress, GitHub, NCSC, GOV.UK, CISA et Australian Cyber Security Centre.

Saturation : les résultats se stabilisent autour de cinq blocs : inventaire
des comptes, transfert des actifs, documentation/formation, sauvegarde et
support après passation. Les sources publiques ajoutent trois dimensions
souvent absentes des agences : sortie contractuelle, minimisation des accès et
continuité/transition. Après ces familles, les nouveaux résultats répétaient
les mêmes checklists ou publiaient des délais standards non démontrés. Le gain
suivant n’est plus un item de checklist : c’est une comparaison économique,
une restauration réellement exécutée et un registre de révocation vérifié.

| Ressource et URL directe | Pays | Réponse utile | Preuve, outil ou exemple | Limite | Apport à vérifier ou adapter |
| --- | --- | --- | --- | --- | --- |
| [Afnic — FAQ changement de prestataire](https://www.afnic.fr/noms-de-domaine/faq/) | France | Confirme que changer de prestataire internet n’impose pas de changer de bureau d’enregistrement ; décrit l’Auth_info pour un transfert. | Source primaire sur les domaines relevant de l’Afnic. | Ne couvre pas toutes les extensions ni l’hébergement. | Renforcer le verdict « maintenance ≠ transfert de domaine ». |
| [Fondation Afnic — modèle de cahier des charges](https://www.fondation-afnic.fr/fr/Telechargement.htm?file=Modele-Cahier-des-charges-site-Internet.pdf&folder=ressourcerie&path=files%2Fmiscellaneous&type=pdf) | France | Demande de détailler les conditions de reprise des codes sources et données en cas de changement de prestataire. | Cahier des charges pratique, maintenance et jalons. | Modèle général, non juridique, ancien. | Ajouter une clause de réversibilité dès le prochain contrat. |
| [CNIL — gérer la sous-traitance](https://www.cnil.fr/fr/securite-gerer-la-sous-traitance) | France | Contrat, rôles, habilitations, sécurité, incidents, restitution et destruction en fin de contrat. | Source primaire française, fiche du 14 mars 2024. | Ne tranche pas la propriété du code ou le déroulé technique. | Faire du plan de données et de fin de prestation une condition de reprise. |
| [CNIL — encadrer la maintenance](https://www.cnil.fr/fr/securite-encadrer-la-maintenance-et-la-fin-de-vie-des-materiels-et-logiciels) | France | Accès de télémaintenance ouverts pour une durée adaptée, tracés et refermés après intervention. | Source primaire, fiche du 14 mars 2024. | À proportionner au site et aux données. | Nuancer « garder les accès jusqu’aux tests » par accès borné et besoin légitime. |
| [Code & Wander — website handover checklist](https://www.codeandwander.com/resources/checklists/website-handover-maintenance-checklist) | Royaume-Uni | Couvre sources, CMS, DNS, domaine, SEO, analytics, documentation, QA, monitoring, formation et maintenance. | Checklist téléchargeable, mise à jour novembre 2025. | Agence ; fréquences mensuelle/trimestrielle non justifiées pour tous les sites. | Transformer le guide en outil actionnable sans reprendre des cadences universelles. |
| [GOV.UK — transition guidance for agencies](https://www.gov.uk/guidance/govuk-transition-guidance-for-agencies) | Royaume-Uni | Exige plan de lancement, rôles, tests de contenu/redirections, expertise le jour J et monitoring après bascule. | Source publique et séquence de transition concrète. | Cas particulier de migration vers GOV.UK. | Ajouter plan minute par minute, responsables, contrôles et suivi post-bascule. |
| [NCSC — supplier assurance questions](https://www.ncsc.gov.uk/guidance/supplier-assurance-questions) | Royaume-Uni | Interroge continuité, accès minimaux, accès distants, logs, transfert/suppression à la sortie et droit d’audit. | Source publique, PDF structuré pour PME et grandes organisations. | Publié/revu en 2020 ; à compléter par la documentation actuelle des fournisseurs. | Créer une section contract exit et un registre des accès prestataire. |
| [NCSC — Identity and access management](https://www.ncsc.gov.uk/collection/10-steps/identity-and-access-management) | Royaume-Uni | Politique joiners/movers/leavers, MFA, comptes temporaires, tiers et révocation. | Source publique. | Guide général d’IAM, pas de passation web. | Vérifier personnes, comptes machines, jetons et journaux après retrait. |
| [Studio Aurora — website handover checklist](https://www.studioaurora.io/blog/website-handover-checklist-everything-developer-should-give-you) | États-Unis | Très lisible pour un dirigeant : comptes, sauvegarde, sources, documentation, API, SEO et procédures d’urgence. | Bon langage non technique et checklist 2026. | Page d’agence ; « tout doit être sous votre nom » doit être nuancé selon comptes d’équipe et contrats. | Reprendre l’orientation propriétaire sans simplification dangereuse des accès. |
| [CISA — SMB vendor template](https://www.cisa.gov/sites/default/files/publications/ict-scrm-task-force_smb-operationalizing-vendor-template_508.pdf) | États-Unis | Exige que le fournisseur sache décrire les processus d’offboarding de son personnel et de retrait des accès. | Modèle officiel de gestion du risque fournisseur. | Porte sur personnel/fournisseurs, pas directement sur un site. | Ajouter questions à poser à la nouvelle agence sur ses propres départs. |
| [Australian Cyber Security Centre — cloud provider security](https://www.cyber.gov.au/business-government/protecting-devices-systems/cloud-computing/cloud-computing-security-for-cloud-service-providers) | Australie | Limite les accès privilégiés, demande logs, révocation au départ du personnel, sauvegardes exportables et offboarding. | Source publique australienne. | Exigences pour fournisseurs cloud, à proportionner à une PME et à son hébergeur. | Ajouter portabilité de sauvegarde et traitement des données résiduelles. |
| [CertPilot — client domain handover](https://certpilot.app/resources/client-domain-handover-checklist-agencies) | International | Sépare domaine, registrar, DNS, SSL, e-mail, renouvellement, MFA et contact d’urgence. | Checklist actualisée le 17 mai 2026. | Éditeur d’un outil de contrôle de domaines ; ne réalise pas la passation. | Renforcer la partie domaine et la responsabilité de renouvellement. |
| [WordPress — Backing up your database and files](https://developer.wordpress.org/advanced-administration/security/backup/) | International | Distingue explicitement fichiers et base pour une sauvegarde WordPress. | Documentation primaire. | Ne couvre pas les services tiers ni tous les CMS. | Conserver et ajouter un test de restauration chronométré. |

## 4. Matrice de gain d’information

| Question décisive | Meilleure réponse française | Apport international | Couverture actuelle | Manque | Réponse supérieure à produire |
| --- | --- | --- | --- | --- | --- |
| Peut-on changer d’agence sans migrer ? | Afnic confirme que prestataire et registrar sont distincts. | Les checklists internationales séparent clairement chaque compte et service. | Excellente réponse dès l’introduction. | Pas d’arbre disant précisément quand l’hébergement doit bouger. | Matrice « conserver / changer » pour maintenance, hébergement, DNS, domaine, e-mail et outils tiers. |
| Qui possède ou contrôle quoi ? | Fondation Afnic demande la reprise des codes et données ; Légifrance encadre la cession de droits. | Studio Aurora et Code & Wander inventorient comptes, fichiers, docs et licences. | Très bonne carte des services. | Pas de responsable métier, niveau de privilège, récupération, facturation et dépendances en un registre unique. | Registre d’actifs sans secrets, avec propriétaire, admin de secours, preuve et date de retrait. |
| Quand retirer les anciens accès ? | CNIL exige accès distants bornés et refermés. | NCSC/CISA couvrent leavers, tiers, comptes temporaires et offboarding. | Retrait après contrôles, comptes humains et techniques bien couverts. | Formulation trop binaire entre continuité et sécurité ; pas de fenêtre d’accès surveillée. | Arbre incident/passation normale, accès minimal daté, remplacement puis révocation et contrôle des logs. |
| Une sauvegarde est-elle réellement utilisable ? | MesServicesCyber traite la sauvegarde ; CNIL traite continuité et données. | WordPress distingue fichiers/base ; NCSC traite reprise d’incident. | Bonne exigence de restauration isolée. | Âge, RPO, RTO, taille, chiffrement, services tiers et durée de restauration non mesurés. | Procès-verbal de restauration avec date, durée, données perdues potentielles et fonctions testées. |
| Combien coûte le risque de panne ? | Très peu de résultats français le calculent. | GOV.UK insiste sur plan et monitoring, mais sans coût. | Absent. | Demandes/jour, conversion, marge, saison, indisponibilité et report possible. | Calcul de marge à risque avec sensibilité, clairement présenté comme hypothèse. |
| Passation, audit, stabilisation, migration ou refonte ? | Les pages françaises distinguent rarement les cinq. | Les checklists expliquent la passation, pas le TCO comparé. | Quatre choix qualitatifs ; migration décrite ailleurs. | Même périmètre, horizon, coût interne, hébergement, maintenance et sortie. | Tableau 12 mois et verdict Hagnéré Code par cas. |
| Que faire si l’agence ne répond pas ? | Le guide actuel est prudent : contrats, factures, procédures officielles. | Les ressources internationales insistent sur comptes propriétaire et runbook préparé avant la rupture. | Bonne couverture. | Pas de plan par fournisseur ni de hiérarchie urgence métier/droit. | Dossier de preuve, procédures officielles, maintien du service connu et escalade juridique ciblée. |
| Comment préserver SEO, e-mails et conversions ? | Afnic explique la séparation technique du domaine. | GOV.UK teste redirections et analytics ; CertPilot couvre e-mail/SSL. | Formulaires et e-mails sont bien présents. | Redirections, Search Console, analytics, consentement, délivrabilité, cron/webhooks et alertes après bascule. | Matrice de 20 contrôles avant/après, avec responsable métier. |
| Que doit prévoir le prochain contrat ? | CNIL : sécurité, incidents, restitution/destruction ; Fondation Afnic : reprise codes/données. | NCSC : sortie, transfert, droit d’audit, accès distant et sous-traitants. | Sources présentes mais pas de clause synthétique. | Formats d’export, délai, assistance, tarifs de sortie, documentation, comptes et effacement résiduel. | Checklist contractuelle non juridique à faire valider selon le cas. |

## 5. Faits et fraîcheur

| Affirmation du guide | Verdict | Source primaire actuelle | Périmètre et date | Correction |
| --- | --- | --- | --- | --- |
| Changer de mainteneur n’oblige pas à transférer le domaine. | Confirmé pour le principe. | [Afnic — FAQ](https://www.afnic.fr/noms-de-domaine/faq/) | Domaines relevant de l’Afnic ; page consultée le 24 juillet 2026. | Conserver et préciser que la mise à jour technique dépend du fournisseur et de l’extension. |
| Une sauvegarde WordPress typique doit inclure fichiers et base. | Confirmé. | [WordPress Developer Resources](https://developer.wordpress.org/advanced-administration/security/backup/) | WordPress, pas tous les sites. | Conserver ; ajouter médias externes, secrets, services tiers et test de restauration. |
| Une consigne de non-indexation ne remplace pas l’authentification. | Confirmé techniquement. | Le mécanisme `robots` ne constitue pas un contrôle d’accès ; la page le dit sans en faire une règle juridique. | Tous sites web. | Conserver ; ajouter blocage réseau/auth et données fictives. |
| Un prestataire sous-traitant doit être encadré avant accès aux données. | Confirmé. | [CNIL — gérer la sous-traitance](https://www.cnil.fr/fr/securite-gerer-la-sous-traitance) | RGPD, fiche du 14 mars 2024. | Conserver ; ajouter restitution/destruction et chaîne de sous-traitance. |
| Les accès de télémaintenance doivent être bornés, tracés et refermés. | Confirmé. | [CNIL — encadrer la maintenance](https://www.cnil.fr/fr/securite-encadrer-la-maintenance-et-la-fin-de-vie-des-materiels-et-logiciels) | Fiche du 14 mars 2024. | Nuancer la règle actuelle « retirer après tous les contrôles » par besoin légitime, accès minimal et fenêtre définie. |
| L’article L131-3 impose d’identifier les droits cédés et leur étendue. | Confirmé, application à faire vérifier. | [Légifrance — article L131-3](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958) | Droit français de propriété intellectuelle. | Conserver la réserve juridique ; ne pas conclure automatiquement à la propriété du code à partir d’une facture. |
| Un transfert GitHub impose d’examiner clés, secrets, webhooks et connexions. | Confirmé pour GitHub. | [GitHub Docs — transferring a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository) | Produit GitHub, documentation évolutive. | Conserver, dater au jour de la reprise et ne pas transposer les boutons à un autre fournisseur. |
| Il n’existe pas de délai universel de changement d’agence. | Confirmé comme prudence éditoriale. | Les procédures Afnic, fournisseurs, contrats et technologies divergent. | Tous projets. | Conserver ; proposer des phases et critères, pas une promesse de nombre de jours. |
| L’ancienne agence doit toujours garder ses accès jusqu’à la fin de tous les tests. | À nuancer. | CNIL demande des accès bornés ; NCSC demande révocation quand ils ne sont plus nécessaires. | Selon incident, contrat et dépendance. | Remplacer par un plan risque/continuité : créer les accès de remplacement, borner les anciens, puis révoquer dès que chaque dépendance est validée. |

### Contradictions

- Le chapitre 1 dit « ne retirez rien avant trois contrôles », alors que le
  chapitre 7 cite justement la CNIL sur les accès limités à l’intervention.
  Les deux idées sont conciliables uniquement avec une fenêtre de passation
  datée et un retrait service par service.
- La page propose quatre suites mais traite aussi le changement d’hébergement :
  la migration doit devenir une cinquième option explicite ou être incluse
  clairement dans « audit + migration ».
- Le CTA arrive avant le dossier du premier échange. Le lecteur voit l’appel à
  l’action avant la meilleure liste de préparation ; déplacer le CTA après
  cette liste augmenterait la qualité des demandes.
- La section sources dit « consultées le 22 juillet 2026 » ; l’audit du
  24 juillet confirme les principales, mais toute nouvelle publication devra
  rouvrir les documentations fournisseurs au jour de la bascule.

### Faits à retirer plutôt qu’à affaiblir

- Aucun fait actuel ne doit être supprimé.
- Ne pas ajouter les délais « transfert de domaine en 5 à 7 jours », « support
  30/60/90 jours » ou toute cadence de maintenance trouvée chez une agence
  comme règles universelles.
- Ne pas présenter la détention d’un accès administrateur comme preuve de
  propriété intellectuelle.

## 6. Scénarios et calculs à construire

Tous les chiffres suivants sont **fictifs et pédagogiques**. Ils ne sont ni des
prix Hagnéré Code, ni des moyennes de marché, ni des résultats client.

### 6.1 Réconcilier réellement les accès

Hypothèse d’inventaire :

```text
14 comptes humains
6 clés ou jetons techniques
4 services administrés par le prestataire

Retraits prévus : 9 comptes humains + 4 jetons = 13 accès
Retraits constatés : 8 comptes humains + 3 jetons = 11 accès
Écart : 13 - 11 = 2 accès résiduels à traiter
```

Le contrôle ne consiste pas à recopier des secrets. Il rapproche le registre
prévu, la liste des comptes du fournisseur et les journaux d’authentification.
Chaque accès résiduel reçoit un propriétaire, une raison, une échéance ou une
révocation.

### 6.2 Traduire l’âge de sauvegarde en données à risque

Hypothèse : 12 demandes commerciales enregistrées par jour, dernière sauvegarde
restaurable âgée de 20 heures, base du site supposée seule source.

```text
Enregistrements potentiellement postérieurs au point de reprise
= 12 × 20 / 24
= 10 demandes
```

```text
Formule : événements métier par jour × âge du point de reprise / 24
Horizon : incident unique au moment de la reprise
Inclus : nouveaux enregistrements de la base
Exclus : demandes aussi reçues par e-mail/CRM, pièces jointes externes, transactions déjà exportées
Résultat : jusqu'à 10 demandes à rapprocher dans cette hypothèse
Analyse de sensibilité : à 6 demandes/jour, 5 ; à 24 demandes/jour, 20
Variable qui fait basculer la décision : existence d'une seconde copie métier et âge réel du point restauré
Contrôle inverse : 10 × 24 / 12 = 20 heures
```

Ce calcul ne dit pas que 10 demandes seront perdues. Il indique le périmètre à
rapprocher après restauration.

### 6.3 Chiffrer une indisponibilité sans inventer un chiffre d’affaires

Hypothèse centrale : 6 demandes qualifiées par jour, 20 % se transforment,
900 € de marge contributive moyenne par vente, 1,5 jour d’indisponibilité.

| Variable | Simple | Central | Exigeant | Source ou hypothèse |
| --- | ---: | ---: | ---: | --- |
| Demandes qualifiées/jour | 6 | 6 | 6 | Analytics + CRM du lecteur |
| Taux de transformation | 10 % | 20 % | 30 % | Cohorte réelle, pas trafic global |
| Marge contributive/vente | 900 € | 900 € | 900 € | Comptabilité de gestion |
| Indisponibilité | 1,5 j | 1,5 j | 1,5 j | Hypothèse |
| Marge attendue exposée | 810 € | 1 620 € | 2 430 € | Formule ci-dessous |

```text
Formule : demandes qualifiées/jour × taux de transformation × marge contributive × jours
Horizon : fenêtre d'indisponibilité
Inclus : marge attendue des demandes empêchées
Exclus : demandes différées plutôt que perdues, réputation, SEO, support, pénalités et coûts de récupération
Résultat central : 6 × 0,20 × 900 × 1,5 = 1 620 €
Analyse de sensibilité : le taux de transformation fait varier le résultat de 810 à 2 430 €
Variable qui fait basculer la décision : part réellement perdue plutôt que retardée
Contrôle inverse : 1 620 / (6 × 900 × 1,5) = 20 %
```

### 6.4 Comparer les voies sur douze mois

Périmètre commun : conserver les fonctions actuelles, assurer publication,
formulaire, e-mail, sauvegarde, supervision de base et maintenance. Les
montants sont des hypothèses de calcul, pas des devis.

| Poste sur 12 mois | Passation simple | Audit + stabilisation | Audit + migration hébergeur | Reconstruction à fonctions constantes |
| --- | ---: | ---: | ---: | ---: |
| Audit / découverte | 3 j × 700 = 2 100 € | 5 j × 700 = 3 500 € | 5 j × 700 = 3 500 € | 5 j × 700 = 3 500 € |
| Passation / correction / build | 2 j × 700 = 1 400 € | 8 j × 700 = 5 600 € | 10 j × 700 = 7 000 € | 30 j × 700 = 21 000 € |
| Contenu et migration | inclus | inclus | inclus dans les 10 j | 6 j × 700 = 4 200 € |
| Temps interne | 20 h × 35 = 700 € | 40 h × 35 = 1 400 € | 50 h × 35 = 1 750 € | 80 h × 35 = 2 800 € |
| Hébergement | existant | existant | 150 × 12 = 1 800 € | 150 × 12 = 1 800 € |
| Maintenance | 300 × 12 = 3 600 € | 500 × 12 = 6 000 € | 500 × 12 = 6 000 € | 600 × 12 = 7 200 € |
| Sortie/documentation | incluse | incluse | 2 j × 700 = 1 400 € | 2 j × 700 = 1 400 € |
| **Total illustratif** | **7 800 €** | **16 500 €** | **21 450 €** | **41 900 €** |

```text
Formule : audit + travaux + temps interne + hébergement + maintenance + sortie
Horizon : 12 mois
Inclus : mêmes fonctions actuelles et postes visibles
Exclus : refonte graphique, nouvelles fonctions, taxes, coût du capital, incident grave et contentieux
Résultat : la passation simple gagne si les preuves existent ; la reconstruction coûte 34 100 € de plus dans ce scénario
Analyse de sensibilité : si l'audit découvre des risques non corrigeables ou si le site ne peut être restauré/publier, passation et stabilisation cessent d'être des options équivalentes
Variable qui fait basculer la décision : capacité prouvée à restaurer, publier et maintenir les fonctions critiques
Contrôle inverse : 41 900 - 7 800 = 34 100 €
```

La comparaison doit annoncer que « reconstruire » ne peut rester à fonctions
constantes que pour le calcul. Si une refonte change objectifs ou périmètre,
elle devient un autre investissement et doit être comparée séparément.

## 7. Comparaison et position professionnelle

```text
Options réellement comparables : passation simple ; audit ; audit + stabilisation ; audit + migration ; reconstruction à fonctions constantes.
Périmètre et horizon communs : mêmes fonctions métier, publication, formulaire, e-mail, sauvegarde et maintenance pendant 12 mois.
Option la moins chère : dans l'exemple, passation simple à 7 800 €, seulement si contrôle des comptes, restauration et publication sont déjà prouvés.
Option la moins risquée : audit puis changement d'un service à la fois ; la migration n'est pas plus sûre par définition.
Option qui demande le moins de temps interne : passation simple dans l'exemple, si la documentation et l'agence sortante rendent le savoir transférable.
Position Hagnéré Code pour le cas fréquent : reprendre la maintenance sans déplacer domaine ni hébergement par défaut ; prouver restauration, publication, formulaires et e-mails ; migrer seulement le service dont le risque, le contrôle ou le coût justifie le changement.
Faits qui la fondent : Afnic sépare prestataire et registrar ; GOV.UK exige plan, tests et monitoring ; CNIL/NCSC imposent accès encadrés et sortie ; chaque changement simultané crée une cause supplémentaire d'échec.
Cas où l'option opposée gagne : hébergement non contrôlé ou non supporté, accès irrécupérables, versions dangereusement obsolètes, coût de stabilisation supérieur sur le même horizon, contrat ou dépendance qui empêche une maintenance soutenable.
Signal de révision : restauration impossible, publication non reproductible, données manquantes, accès privilégié non révocable, risque confirmé, fournisseur en fin de vie ou TCO de stabilisation supérieur à l'alternative.
Ce que nous déconseillons même si nous pourrions le vendre : migrer hébergement, DNS, domaine, e-mails et code le même jour pour donner l'impression d'une rupture complète.
```

Opinion à assumer :

> **Changer d’agence n’est pas un déménagement.** Notre choix par défaut est de
> ne déplacer aucun service qui fonctionne, reste sous votre contrôle et peut
> être maintenu. On ne migre que ce que l’audit condamne ou ce que l’entreprise
> décide consciemment de reprendre.

## 8. Objections et cas limites

| Objection loyale | Réponse prouvée | Ce qui reste incertain | Conséquence |
| --- | --- | --- | --- |
| « Je veux couper l’ancienne agence aujourd’hui. » | CNIL/NCSC demandent de limiter et révoquer les accès inutiles. | Incident actif, dépendances, accès entreprise et continuité. | Faire trancher le risque ; créer/remplacer les accès critiques et révoquer selon un plan court, pas attendre sans borne. |
| « L’agence héberge tout, donc il faut tout migrer. » | Domaine, DNS, hébergement, e-mail et maintenance sont distincts. | Structure réelle des comptes et contrat. | Cartographier chaque service avant de décider. |
| « J’ai un fichier ZIP, donc le site est sauvé. » | WordPress nécessite typiquement fichiers et base ; les services tiers restent externes. | Version, secrets, médias, DNS, e-mails, paiements et procédure. | Restaurer sur un environnement isolé, puis tester. |
| « Une sauvegarde quotidienne suffit. » | Son utilité dépend de la restauration et des événements depuis le point de reprise. | RPO métier, seconde copie, durée de restauration. | Calculer données à rapprocher et temps maximal acceptable. |
| « La facture prouve que je possède le code. » | L’article L131-3 demande une cession délimitée. | Contrat, nature des œuvres, licences et droit applicable. | Faire examiner l’élément contesté ; ne pas demander un contournement technique. |
| « La nouvelle agence doit devenir propriétaire du domaine. » | Afnic permet de conserver le même registrar et le guide distingue titulaire/admin. | Politique de délégation et récupération. | Garder contrôle entreprise, donner des droits nominatifs nécessaires. |
| « Migrer réduira forcément le risque. » | Une bascule ajoute DNS, données, configuration et rollback à tester. | État de l’hébergement actuel. | Migrer seulement après comparaison du risque avant/après. |
| « Le site répond, la reprise est terminée. » | GOV.UK contrôle aussi redirections et suivi ; le guide teste formulaires et e-mails. | Paiements, tâches planifiées, analytics, consentement, webhooks, délivrabilité. | Exécuter une matrice métier avant/après et surveiller. |
| « Le site est vieux, il faut le refaire. » | L’âge seul ne prouve ni coût ni risque. | Maintenabilité, support, sécurité, droits et TCO. | Chiffrer stabilisation et reconstruction à fonctions constantes. |
| « L’ancienne agence ne répond plus. » | Les fournisseurs disposent de procédures officielles ; le guide refuse le contournement. | Justificatifs, titulaire, contrats et délais. | Prioriser les services critiques, constituer le dossier et escalader légalement si nécessaire. |
| « Nous pouvons envoyer la base clients pour gagner du temps. » | CNIL exige nécessité, contrat et mesures de sécurité. | Besoin réel d’une donnée personnelle. | Utiliser données fictives/anonymisées ; encadrer avant tout accès réel. |
| « Gardons les anciens comptes au cas où. » | NCSC demande révocation des accès non nécessaires et gestion des comptes temporaires. | Besoin de support transitoire contractualisé. | Borne, droits minimaux, journal, date d’expiration ; pas d’accès dormant. |

## 9. Plan de réécriture

| Ordre | Section proposée | Question résolue | Preuve, scénario ou outil | Décision produite | À conserver / créer / couper |
| ---: | --- | --- | --- | --- | --- |
| 1 | Le verdict avant la technique | Faut-il migrer ? | Position « maintenance ≠ déménagement » + cinq options | Première orientation | Créer à partir de l’ouverture |
| 2 | Incident actif ou passation normale ? | Peut-on garder les accès le temps des tests ? | CNIL/NCSC + arbre de risque | Containment ou passation | Créer ; nuancer « ne retirez rien » |
| 3 | Les trois preuves minimales | Peut-on reprendre sans dépendance ? | Compte entreprise, restauration, publication/formulaire | GO vers audit court | Conserver |
| 4 | Le registre complet des actifs et accès | Qui contrôle quoi ? | 14 comptes, 6 jetons, 4 services ; écart de révocation | Plan par service | Conserver cartes, ajouter registre |
| 5 | La restauration mesurée | Quelle perte maximale ? | 12 demandes/jour, 20 h, 10 à rapprocher | RPO/RTO métier | Créer |
| 6 | Le coût d’une panne | Combien investir dans la continuité ? | 810/1 620/2 430 € | Budget rationnel | Créer |
| 7 | Les cinq voies comparées | Passation, audit, stabilisation, migration ou refonte ? | TCO 12 mois | Choix économique | Créer |
| 8 | Agence coopérative, absente ou litige | Comment obtenir les éléments ? | Contrats, preuves, procédures officielles, conseil ciblé | Plan de récupération | Conserver |
| 9 | Bascule service par service | Dans quel ordre agir ? | Responsable, fenêtre, test, rollback, journal | Runbook de transition | Conserver et approfondir |
| 10 | Fermer humains, clés et automatisations | Comment terminer réellement ? | Registre prévu/constaté + logs | Clôture prouvée | Conserver |
| 11 | Vérifier SEO, e-mails et fonctions métier | Qu’est-ce qui peut casser sans écran rouge ? | Matrice avant/après de 20 contrôles | Acceptation métier | Créer |
| 12 | Préparer le prochain contrat | Comment éviter la prochaine dépendance ? | Réversibilité, formats, assistance, coût, délais, effacement | Clauses à faire valider | Créer |
| 13 | Dossier du premier échange | Que transmettre sans secret ? | Liste actuelle | Contact qualifié | Conserver et placer avant CTA |
| 14 | Kit téléchargeable de passation | Comment piloter seul ? | Registre actifs, test restauration, runbook, révocation, TCO | Autonomie et preuve | Créer |
| 15 | Audit Hagnéré Code | Quel livrable acheter ? | Carte de contrôle, risques, options, TCO, plan et exclusions | Conversion honnête | Réécrire CTA |

### Contrat des 150 premiers mots

Proposition de fond, à retravailler avec la voix finale :

> Vous voulez quitter votre agence web sans perdre le site, les demandes
> commerciales ou les e-mails liés au domaine. Faut-il tout migrer ? **Dans la
> plupart des reprises, non.** Maintenance, hébergement, nom de domaine, DNS,
> messagerie et formulaires sont des services différents. Notre position est
> claire : conservez ce qui fonctionne et reste sous le contrôle de votre
> entreprise ; ne déplacez que ce que l’audit condamne. Avant de fermer les
> anciens accès, prouvez trois choses : un compte administrateur appartient à
> l’entreprise, une sauvegarde peut réellement être restaurée et la nouvelle
> équipe sait publier puis recevoir une demande de test. Si un incident de
> sécurité est en cours, la priorité change : il faut contenir et révoquer avec
> les personnes compétentes. Ce guide vous donne ensuite le registre des
> comptes humains et techniques, un calcul du risque, un comparatif sur douze
> mois et l’ordre de bascule service par service.

Ces mots doivent donner : peur réelle, verdict, nuance incident, trois preuves,
opinion et promesse économique.

### Éléments à supprimer

- La formule absolue « ne retirez rien avant trois contrôles » sans branche
  incident, borne de temps et accès minimal.
- Les répétitions de listes qui peuvent devenir un seul registre
  téléchargeable.
- Toute cadence de support, délai de migration ou transfert de domaine
  présenté comme universel.
- Le CTA avant la liste du premier dossier.
- Toute assimilation accès administrateur = propriété juridique.

### Éléments à conserver

- L’ouverture sur les demandes et les e-mails qui doivent continuer.
- La distinction maintenance/hébergement/domaine/DNS/messagerie.
- Les trois contrôles.
- La copie isolée, données fictives, envois et paiements désactivés.
- Les cas agence coopérative, absente ou élément contesté.
- Le changement service par service avec retour arrière.
- Les comptes humains, clés, jetons, applications et webhooks.
- La reconstruction non automatique.
- La déclaration d’intérêt commercial de Hagnéré Code.

## 10. Contre-audit après correction

La page publique n’a pas été modifiée pendant cet audit.

| Problème | Priorité | Correction appliquée | Revalidation indépendante |
| --- | --- | --- | --- |
| Pas de TCO commun | P1 | En attente | Refaire les quatre totaux et vérifier le périmètre |
| « Ne retirez rien » trop absolu | P1 | En attente | Relecture sécurité indépendante de l’arbre incident/passation |
| Pas de registre de révocation chiffré | P1 | En attente | Rapprocher prévu, constaté et logs |
| Sauvegarde sans RPO/RTO métier | P1 | En attente | Restaurer réellement et mesurer |
| Migration non traitée comme cinquième choix | P1 | En attente | Vérifier arbre et tableau |
| Contrat de sortie insuffisamment synthétisé | P2 | En attente | Relire CNIL, NCSC, Afnic et faire valider les réserves juridiques |
| Matrice SEO/e-mails/fonctions incomplète | P2 | En attente | Tests avant/après et monitoring réel |
| CTA placé trop tôt | P2 | En attente | Test éditorial après déplacement |

### Score après correction

| Axe | Note /10 | Preuve localisable | Manque résiduel |
| --- | ---: | --- | --- |
| Intention | — | Non recalculé | Réécriture non effectuée |
| Décision | — | Non recalculé | Réécriture non effectuée |
| Pédagogie | — | Non recalculé | Réécriture non effectuée |
| Profondeur | — | Non recalculé | Réécriture non effectuée |
| Preuve | — | Non recalculé | Réécriture non effectuée |
| Comparaison | — | Non recalculé | Réécriture non effectuée |
| Originalité | — | Non recalculé | Réécriture non effectuée |
| Style | — | Non recalculé | Réécriture non effectuée |
| Conversion | — | Non recalculé | Réécriture non effectuée |
| SEO/produit | — | Non recalculé | Réécriture non effectuée |

Total : **non calculé**

Objectif de réécriture : au moins **90/100**, aucun axe sous **8/10**, après
contre-audit indépendant, restauration exécutée, sources rouvertes et tests
visuels.

## 11. Preuves techniques et visuelles

```text
Manifeste : aucun manifeste de réécriture créé ; audit seulement
Calculs refaits : oui, avec Node.js ; réconciliation d'accès, données à risque, marge exposée et TCO 12 mois
Sources rouvertes : oui, France, Royaume-Uni, États-Unis, Australie et sources internationales primaires
Liens vérifiés : les URL majeures de cet audit ont été ouvertes le 24 juillet 2026
Commandes : shasum -a 256 ; lecture nl/sed ; recalcul Node.js
Rendu 320 / 390 / 768 / 1024 / 1440 : non exécuté, aucune page publique modifiée
Image sociale : non contrôlée dans ce sous-audit éditorial
Statut maximal prouvé : audité et plan de réécriture documenté
Réserve publication / indexation : aucune correction publique n'est réalisée ni validée ; ne pas présenter ce dossier comme une publication ou une amélioration indexée
```
