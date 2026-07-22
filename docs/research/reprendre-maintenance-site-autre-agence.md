# Dossier de recherche — Reprendre la maintenance d’un site à une autre agence

> Recherche P1 du troisième guide du lot du 22 juillet 2026. Ce sujet remplace
> `contrat-maintenance-site-internet`, écarté après déduplication : le guide de
> prix et la TMA existante couvraient déjà trop de sa réponse utile.

**Statut final : publiable — validation éditoriale déléguée.**

## Journal des quatre passes

Propriétaire éditorial unique : **agent racine Codex**.

| Passe                        | État                     | Date       | Responsable                          | Snapshot                                                      | Blocages |
| ---------------------------- | ------------------------ | ---------- | ------------------------------------ | ------------------------------------------------------------- | -------- |
| 1. Recherche                 | Terminée — porte validée | 2026-07-22 | Agent recherche P1 puis agent racine | `manifests/reprendre-maintenance-site-autre-agence-p1.sha256` | Aucun    |
| 2. Rédaction et intégration  | Terminée — porte validée | 2026-07-22 | Agent racine Codex                   | `manifests/reprendre-maintenance-site-autre-agence-p2.sha256` | Aucun    |
| 3. Contre-audit indépendant  | Terminée — porte validée | 2026-07-22 | Agent auditeur indépendant           | `manifests/reprendre-maintenance-site-autre-agence-p3.sha256` | Aucun    |
| 4. Plume humaine et contrôle | Terminée — porte validée | 2026-07-22 | Agent racine Codex                   | `manifests/reprendre-maintenance-site-autre-agence-p4.sha256` | Aucun    |

## 1. Fiche d’identité

| Champ                            | Décision documentaire                                                                                                                                                                                                       |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Slug                             | `reprendre-maintenance-site-autre-agence`                                                                                                                                                                                   |
| Requête principale qualitative   | changer agence maintenance site internet                                                                                                                                                                                    |
| Lecteur précis                   | Dirigeant dont l’agence actuelle répond mal, arrête son activité ou ne convient plus, et qui veut confier le site à une nouvelle équipe                                                                                     |
| Situation déclenchante           | Le site fonctionne encore, mais les comptes, le nom de domaine, les sauvegardes, les licences ou le code sont dispersés et personne ne veut risquer une coupure pendant le changement                                       |
| Phrase qu’il dirait au téléphone | « Je veux changer d’agence, mais j’ai peur de perdre mon site ou mes accès. Qu’est-ce que je dois récupérer avant de couper l’ancien prestataire ? »                                                                        |
| Décision principale              | Organiser une passation, commander d’abord un audit de reprise, stabiliser avec l’équipe actuelle ou reconstruire uniquement si l’état réel le justifie                                                                     |
| Réponse courte                   | Ne retirez aucun accès et ne déplacez aucun service important avant d’avoir inventorié les comptes, créé une copie restaurable, prouvé que la nouvelle équipe sait mettre le site en ligne et préparé l’ordre de révocation |
| Action autonome                  | Remplir un registre des actifs : propriétaire, administrateurs, moyen de récupération, export ou sauvegarde, test réalisé, personne qui reprendra et moment du retrait de l’ancien accès                                    |
| Bon fit Hagnéré Code             | Site commercial actif, accès dispersés, maintenance interrompue, besoin d’audit puis de reprise ou d’évolution                                                                                                              |
| Mauvais fit                      | Litige nécessitant un avocat, site encore sous garantie avec correctif simple, demande de récupération illégitime d’un compte tiers, ou migration lancée sans pouvoir vérifier les droits                                   |
| Hors périmètre                   | Conseil juridique, intrusion dans un compte, contournement d’identifiants, transfert de propriété contesté, réponse à incident cyber active, refonte systématique                                                           |
| Recherche                        | 22 juillet 2026, SERP qualitative et sources CNIL, ANSSI/MesServicesCyber, Afnic, WordPress, GitHub et hébergeurs ; aucun volume mesuré                                                                                     |

### Questions indispensables

1. Que faut-il récupérer avant de prévenir ou de déconnecter l’ancienne agence ?
2. Comment prouver qu’une sauvegarde peut remettre le site en service ?
3. Quels comptes doivent rester au nom ou sous l’administration de
   l’entreprise ?
4. Que peut préparer la nouvelle équipe sans modifier la production ?
5. Dans quel ordre transférer domaine, DNS, hébergement, code, données,
   formulaires, mesure, consentement et licences ?
6. Quand retirer les anciens accès ?
7. Que faire si l’agence coopère, ne répond plus ou conteste la remise ?

### Score de lancement

| Critère                          |       Note | Justification                                                                                                 |
| -------------------------------- | ---------: | ------------------------------------------------------------------------------------------------------------- |
| Adéquation avec une offre vendue |      25/25 | L’offre maintenance et évolution comprend l’audit et la reprise                                               |
| Proximité d’une demande de devis |      25/25 | Le besoin est actuel, risqué et qualifié                                                                      |
| Preuve qualitative de demande    |      10/15 | La SERP et les guides voisins montrent la question de changement ; aucun volume propriétaire n’est disponible |
| Preuve ou outil original         |      14/15 | Plan de bascule propre aux actifs d’un site, contrôles métier et critères de retrait                          |
| Différenciation                  |       9/10 | Intention de changement d’équipe recentrée sur domaine, DNS, messagerie, formulaires, mesure et consentement  |
| Maillage et CTA utile            |      10/10 | Parcours direct depuis coût, propriété, panne et page maintenance                                             |
| **Total**                        | **93/100** | Sujet retenu après contre-vérification indépendante et recentrage sur la passation d’un site                  |

## 1 bis. Contrat de langage humain

**Termes à expliquer :** DNS = réglage qui indique vers quel service le nom de
domaine envoie les visiteurs et les e-mails ; dépôt de code = espace où sont
conservés les fichiers et leur historique ; restauration = remise en service à
partir d’une sauvegarde ; révocation = retrait d’un accès.

**Mots du lecteur :** ancien prestataire, nouveaux accès, nom de domaine,
hébergement, site en ligne, sauvegarde, récupérer, transférer, ne rien casser,
formulaire, e-mails, licence, mot de passe, changer d’agence.

**Jargon à bannir de l’ouverture :** réversibilité, auditabilité, takeover,
runbook, cut-over, rollback, secrets, pipeline, production, registrar, DNS sans
traduction.

**Projet des 150 premiers mots :** reconnaître la peur de couper le site,
répondre de ne rien révoquer ni déplacer avant trois preuves, expliquer les
comptes structurants en mots ordinaires et annoncer quatre sorties : passation
normale, audit préalable, stabilisation ou reconstruction justifiée.

### Test sujet, action, résultat préparé pour P4

| Formulation abstraite      | Qui agit ?                       | Action                                                                   | Résultat                                             | Formulation prévue                                                                                                               |
| -------------------------- | -------------------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Préparer la réversibilité  | L’entreprise et les prestataires | Listent et remettent comptes, fichiers, données, licences et procédures  | Une autre équipe peut reprendre                      | « Notez ce qui doit être remis, dans quel format et qui vérifie que cela fonctionne. »                                           |
| Sécuriser la bascule       | La nouvelle équipe               | Reproduit le site et teste les fonctions importantes avant le changement | Le risque de coupure devient observable              | « Faites remettre une copie en ligne sur une adresse de test avant de toucher au site public. »                                  |
| Auditer les accès          | Le responsable                   | Vérifie chaque administrateur et moyen de récupération                   | Les comptes orphelins apparaissent                   | « Ouvrez chaque compte et vérifiez qu’une personne de votre entreprise peut encore récupérer l’accès. »                          |
| Prévoir un rollback        | La nouvelle équipe               | Écrit comment revenir au réglage précédent                               | Un échec n’oblige pas à improviser                   | « Avant le transfert, écrivez comment remettre l’ancien réglage si le site ou les e-mails ne répondent plus. »                   |
| Révoquer les anciens accès | Un administrateur client         | Retire les droits après les tests de la nouvelle équipe                  | L’ancien prestataire ne conserve pas d’accès inutile | « Retirez l’ancien accès seulement après avoir prouvé que la nouvelle équipe peut publier, restaurer et recevoir les demandes. » |

## 2. Frontières et anti-cannibalisation

| Page                                         | Intention                                                        | Frontière                                                                                                                     | Maillage                                                 |
| -------------------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `cout-maintenance-site-internet`             | Budgéter la maintenance et choisir un format                     | Ici, changer d’équipe et reprendre les actifs existants                                                                       | Lien entrant depuis la section contrat/changement        |
| `proprietaire-site-internet-code-source`     | Comprendre ce que l’entreprise doit posséder après création      | Ici, vérifier et transférer ces éléments dans un site déjà exploité                                                           | Lien sortant pour les droits et comptes                  |
| `contrat-tma-application`                    | Structurer une maintenance applicative                           | Ici, passation d’un site et non fonctionnement d’une file TMA                                                                 | Lien seulement si le site contient une vraie application |
| `reprendre-logiciel-metier-existant`         | Reprendre une application métier critique                        | Le nouveau guide reste sur domaine, hébergement, code du site, formulaires et services web                                    | Lien de sortie si l’actif dépasse un site                |
| `reprendre-saas-developpe-par-freelance`     | Protéger puis reprendre les comptes d’un produit en service      | Ici, distinguer changement de mainteneur, hébergement, domaine, DNS, messagerie, formulaire, mesure et consentement d’un site | Aucun registre générique de comptes SaaS répété          |
| `audit-technique-avant-reprendre-site` futur | Examiner code, sécurité, performances et dette avant une reprise | Le présent guide possède la passation entre deux prestataires et s’arrête lorsqu’un audit technique devient nécessaire        | Lien futur depuis la décision d’audit                    |
| `site-internet-en-panne-que-faire` futur     | Traiter un incident actif                                        | Ici, préparer un changement d’équipe lorsque le site peut encore être audité                                                  | Ne pas donner une procédure de réponse à incident        |
| `/services/maintenance-evolution`            | Intention transactionnelle de reprise                            | Le guide conserve passation avec agence actuelle, audit ponctuel ou report                                                    | CTA après le registre autonome                           |

**Justification d’une URL distincte :** aucun guide ne décrit actuellement
l’ordre concret d’une passation entre deux mainteneurs sans retirer les accès
avant que la nouvelle équipe ait prouvé sa capacité à exploiter le site.

## 3. Preuves et limites

| Affirmation utilisable                                                                                                                                                                                        | Source primaire                                                                                                                                                                           | Limite                                                                                              | Conséquence lecteur                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| La CNIL recommande de tracer les interventions de maintenance, d’ouvrir les accès distants pour une durée adaptée et de les refermer après                                                                    | [CNIL — encadrer la maintenance et la fin de vie](https://www.cnil.fr/fr/securite-encadrer-la-maintenance-et-la-fin-de-vie-des-materiels-et-logiciels)                                    | Recommandations de sécurité à adapter au traitement réel                                            | Préparer les comptes nominatifs et l’ordre de retrait au lieu de partager un mot de passe                                           |
| Une sauvegarde répond à un objectif de reprise après incident, mais sa stratégie doit être définie et testée                                                                                                  | [MesServicesCyber — sauvegarde des systèmes d’information](https://messervices.cyber.gouv.fr/guides/fondamentaux-sauvegarde-systemes-dinformation)                                        | Guide général ; les objectifs et tests dépendent du site                                            | Demander une restauration sur une copie avant la bascule                                                                            |
| Une restauration WordPress complète suppose de protéger les fichiers et la base de données                                                                                                                    | [WordPress.org — Backups](https://developer.wordpress.org/advanced-administration/security/backup/)                                                                                       | Source spécifique aux sites WordPress                                                               | Vérifier les deux éléments sur la copie, sans généraliser WordPress à toute technologie                                             |
| L’Afnic décrit la gestion du titulaire et le changement de prestataire pour les domaines de son périmètre                                                                                                     | [Afnic — gérer son nom de domaine](https://www.afnic.fr/noms-de-domaine/tout-savoir/gerer-son-nom-de-domaine/)                                                                            | Les procédures varient selon l’extension et le bureau d’enregistrement                              | Identifier le titulaire, les contacts et la procédure avant tout transfert                                                          |
| GitHub avertit qu’un transfert de dépôt demande aussi d’examiner clés de déploiement, secrets, webhooks et autres intégrations                                                                                | [GitHub Docs — transferring a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository)                                           | Ne concerne que GitHub ; chaque fournisseur possède ses propres comptes et jetons                   | Fermer la passation par la rotation ou le retrait des accès techniques, pas seulement des personnes                                 |
| Lorsqu’une nouvelle agence traite des données personnelles pour le compte de l’entreprise, l’article 28 encadre la sous-traitance, les instructions, les sous-traitants ultérieurs et la fin de la prestation | [CNIL — gérer la sous-traitance](https://www.cnil.fr/fr/securite-gerer-la-sous-traitance) et [article 28 du RGPD](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4) | Le rôle dépend du traitement réel ; ce dossier n’est pas un avis juridique                          | Encadrer l’accès avant de remettre une copie contenant des données personnelles et prévoir retour ou suppression selon la situation |
| Une cession de droits doit identifier les droits cédés et délimiter leur domaine d’exploitation                                                                                                               | [Légifrance — article L131-3 du Code de la propriété intellectuelle](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958/2026-04-30)                                     | Les droits sur le logiciel, le design et les contenus dépendent des contrats et créations concernés | Ne pas confondre remise d’un fichier, transfert d’une licence tierce et cession de droits                                           |

### Faits, déductions et recommandations

- **Fait vérifié :** la CNIL recommande de limiter et tracer les accès de
  télémaintenance dans les cas concernés.
- **Fait vérifié :** un transfert de dépôt ou de domaine suit une procédure
  propre au fournisseur ; il ne faut pas en inventer une universelle.
- **Déduction :** posséder un fichier ZIP ne prouve pas que le site peut être
  reconstruit, configuré et remis en ligne.
- **Déduction :** retirer les comptes nominatifs ne ferme pas nécessairement les
  clés techniques, applications connectées ou adresses d’événements utilisées
  par l’ancien dispositif.
- **Recommandation Hagnéré Code :** ne retirer l’ancien accès qu’après preuve
  de mise en ligne, restauration et réception des formulaires par la nouvelle
  équipe.
- **Recommandation Hagnéré Code :** transférer les éléments un par un avec
  responsable, contrôle et retour possible, plutôt qu’effectuer tous les
  changements le même jour.
- **Recommandation Hagnéré Code :** tester en priorité avec des données
  fictives, minimisées ou rendues anonymes ; encadrer la sous-traitance avant
  tout accès nécessaire à des données personnelles réelles.

### À ne pas publier

- récit inventé d’un site perdu par une agence ;
- affirmation que l’ancien prestataire doit légalement remettre un élément sans
  lire les droits et le contrat applicables ;
- méthode de contournement d’un accès ou de récupération non autorisée ;
- promesse de zéro coupure ou de récupération garantie ;
- refonte présentée comme conséquence automatique d’un code ancien ;
- délais standards de transfert universels ;
- sauvegarde présentée comme restaurable sans essai ;
- mot de passe, clé, jeton ou autre secret copié dans le registre de passation ;
- licence présentée comme transférable sans lire ses conditions ;
- remise du code présentée comme cession automatique de tous les droits ;
- conflit présenté comme urgence artificielle pour vendre une reprise.

## 4. Empreinte éditoriale et plan

**Tension motrice :** le moment dangereux n’est pas le départ de l’agence en
soi ; c’est l’instant où l’ancien accès est coupé alors que personne n’a encore
prouvé que le nouveau dispositif fonctionne.

**Artefact signature :** plan de bascule « ne coupez pas encore » avec, pour
chaque service : compte contrôlé par l’entreprise, dépendances, droit ou licence
vérifié, remplaçant testé, contrôle métier, retour possible et condition de
retrait. Le guide dira explicitement de ne jamais inscrire un mot de passe, une
clé ou un jeton dans ce tableau.

**Progression propre :** commencer par l’ordre des actions, inventorier ensuite
les actifs, démontrer la reprise sur copie, traiter trois attitudes de l’agence
sortante, puis retirer les accès. Ce n’est ni un guide de prix ni une checklist
de contrat.

| Section                                                                | Question                                    | Élément utile                                                                                         | Décision                                                                                       | Format                    |
| ---------------------------------------------------------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------- |
| Ne coupez rien avant trois preuves                                     | Que faire immédiatement ?                   | Accès client, copie restaurée, reprise testée                                                         | Stopper les gestes risqués                                                                     | Ouverture directe         |
| Distinguez changement de mainteneur et déplacement des services        | Qu’est-ce qui doit vraiment bouger ?        | Maintenance, hébergement, domaine, DNS et messagerie séparés                                          | Éviter une migration inutile                                                                   | Cartes comparatives       |
| Faites la liste de ce qui fait vivre le site                           | Que récupérer ?                             | Domaine, DNS, hébergement, code, base, CMS, formulaires, e-mails, mesure, consentement et licences    | Repérer les inconnues propres au site                                                          | Plan de bascule en cartes |
| Vérifiez une copie protégée sans toucher au public                     | Comment savoir si la reprise est possible ? | Données fictives ou minimisées, restauration, fonctions et accès encadrés                             | Passation, audit plus profond ou reconstruction                                                | Protocole                 |
| Si l’agence coopère, faites une passation utile                        | Que demander ?                              | Démonstration, historique, travaux en cours, renouvellements                                          | Fixer une date et des éléments remis                                                           | Entretien guidé           |
| Si elle ne répond plus, séparez ce que vous contrôlez de ce qui manque | Comment avancer légalement ?                | Comptes client, preuves contractuelles, fournisseurs                                                  | Audit et conseil compétent avant action contestée                                              | Deux listes               |
| Basculez service par service                                           | Comment éviter de tout déplacer ensemble ?  | Dépendances, contrôle métier et retour possible                                                       | Garder domaine, DNS, messagerie ou hébergement en place lorsqu’ils n’ont pas besoin de changer | Étapes courtes            |
| Fermez les accès humains et techniques                                 | Quand l’ancien dispositif sort-il ?         | Publication, restauration, formulaires, e-mails, rotation des clés, retour ou suppression des données | Retirer sans laisser d’accès inutile                                                           | Critères d’acceptation    |
| Passation, audit, stabilisation ou reconstruction                      | Quel verdict ?                              | Quatre situations                                                                                     | Choisir sans refonte automatique                                                               | Cartes finales            |
| Sources et limites                                                     | Que prouvent les sources ?                  | Sources primaires                                                                                     | Revalider procédures et contrat                                                                | Liste courte              |

## 5. Ressource, conversion et maillage

Le registre sera visible et copiable dans le guide. Aucun téléchargement séparé
ni donnée saisie n’est nécessaire.

**Option moins chère :** faire une passation documentée entre les deux équipes
ou commander un audit technique limité avant de souscrire une maintenance.
**Report :** possible si l’agence actuelle coopère et le site n’est pas exposé ;
imprudent si les renouvellements, sauvegardes et moyens de récupération restent
inconnus.

**CTA :** « Faire vérifier si mon site peut être repris » vers
`/demarrer-un-projet`. Résultat annoncé : transmettre les actifs connus et les
blocages afin de déterminer si une passation suffit ou si un audit de reprise
est nécessaire. Aucun accès ne sera demandé avant explication du besoin.

**Maillage sortant :** `cout-maintenance-site-internet`,
`proprietaire-site-internet-code-source`, `reprendre-logiciel-metier-existant`
si l’actif est une application, `contrat-tma-application` pour l’organisation
future, `/services/maintenance-evolution`.

**Liens entrants prévus :** `cout-maintenance-site-internet`, dans sa section
sur le changement de prestataire ou la sortie du contrat, et
`proprietaire-site-internet-code-source`, depuis les comptes que l’entreprise
doit contrôler.

## 6. Porte P1

- [x] sujet de remplacement justifié par la déduplication ;
- [x] audience, urgence et décision uniques ;
- [x] score supérieur à 70 ;
- [x] frontières avec prix, propriété, panne, reprise SaaS, reprise applicative
      et futur audit technique ;
- [x] sources primaires et recommandations séparées ;
- [x] aucune récupération illégitime ni conseil juridique ;
- [x] données de test, sous-traitance, accès techniques, droits et licences
      encadrés ;
- [x] action autonome et refonte non automatique ;
- [x] recherche indépendante complémentaire intégrée ;
- [x] manifeste P1 créé ;
- [x] journal marqué terminé.

## 7. Rapports P1 à P4

### Rapport P1 — Recherche

```text
PASSE 1 TERMINÉE
Slug : reprendre-maintenance-site-autre-agence
Lecteur et phrase réelle : dirigeant qui veut changer d’agence sans perdre le
site ni ses accès ; formulation de travail issue de la recherche qualitative,
pas d’un entretien réel.
Décision : passation simple, audit de reprise, stabilisation ou reconstruction
uniquement si l’état réel la justifie.
Angle et forme dominante : plan de bascule propre aux actifs d’un site, avec
contrôle métier et condition de retrait pour chaque service.
Pages proches et différence : aucun registre SaaS générique ni audit technique ;
domaine, DNS, messagerie, formulaires, mesure, consentement et licences forment
la frontière.
Sources décisives : CNIL maintenance et sous-traitance, article 28, ANSSI via
MesServicesCyber, Afnic, WordPress, GitHub et Légifrance ; consultation le
22 juillet 2026.
Incertitudes exclues : droits non lus, délais de transfert, continuité garantie,
licences supposées transférables et récupération non autorisée.
Action autonome et CTA possible : plan sans secret ; CTA vers une première
lecture du besoin de passation ou d’audit.
Plan : trois preuves, nature du changement, actifs web, copie protégée, trois
attitudes de l’agence, bascule par service, fermeture des accès, quatre verdicts.
Snapshot : manifests/reprendre-maintenance-site-autre-agence-p1.sha256
```

### Rapport P2 — Rédaction et intégration

```text
PASSE 2 TERMINÉE
Fichiers créés ou modifiés : page, image sociale dédiée, registre, deux liens
entrants contextuels et présent dossier.
Ouverture et réponse : peur de couper le site reconnue immédiatement ; trois
contrôles simples précèdent tout retrait d’accès.
Forme propre au sujet : séparation maintenance, hébergement, domaine et e-mails ;
huit cartes de services, copie protégée, trois situations d’agence sortante et
quatre sorties possibles.
Comparaison : passation, vérification technique, stabilisation et reconstruction
sont distinguées sans imposer de déplacement ni de refonte.
Sources visibles : CNIL maintenance et sous-traitance, MesServicesCyber,
WordPress, Afnic, GitHub et Légifrance placés près des affirmations concernées.
Action autonome, bon fit et mauvais fit : fiche sans secret, contrôles sur copie,
absence de contournement et reconstruction seulement après constat.
CTA et destination : un seul CTA après les huit sections de décision, vers
/demarrer-un-projet ; le formulaire et l’absence de demande d’accès initiale
sont expliqués.
Contrôles rapides : Prettier, ESLint ciblé, TypeScript, check:seo 184/184 et git
diff --check réussis.
Snapshot : manifests/reprendre-maintenance-site-autre-agence-p2.sha256
```

### Rapport P3 — Contre-audit indépendant

```text
PASSE 3 TERMINÉE
Verdict initial : FAIL, 0 P0, 2 P1, score 17/20.
Corrections : copie de test placée derrière une authentification, non indexable,
nettoyée ou anonymisée, avec identifiants de production remplacés et sorties
e-mail, SMS, paiement et appels automatiques neutralisées ; ordre des clés
corrigé pour installer et tester le nouvel accès avant de révoquer l’ancien,
puis rejouer le contrôle.
Corrections P2 : promesses absolues retirées du registre et de l’image sociale ;
trois contrôles et retrait final réconciliés ; roadmap alignée sur la bascule
service par service réellement livrée.
Revalidation indépendante : PASS, 0 P0, 0 P1, 0 P2 sur ces réserves, score
20/20.
Contrôles rejoués : Prettier, ESLint ciblé, TypeScript, check:seo 184/184 et git
diff --check réussis.
Limite : aucun test par un lecteur humain réel n’est revendiqué ; le navigateur
réel appartient à P4.
Snapshot : manifests/reprendre-maintenance-site-autre-agence-p3.sha256
```

### Rapport P4 — Plume humaine et contrôle final

```text
PASSE 4 TERMINÉE
Passe de plume : « jeton » et les accès techniques sont expliqués au moment où
ils deviennent utiles ; les verbes abstraits ont été remplacés par des actions
observables et la copie de test reste décrite sans faux sentiment de sécurité.
Contrôles bloquants avant publication : check:seo 184/184, ESLint ciblé,
TypeScript, npm test 409/409, build Next.js de production et git diff --check
réussis.
Build : 117 routes générées ; artefact de recherche validé avec 101 URL dans le
sitemap, 84 liens dans llms.txt, 101 pages, 59 temps de lecture et 190 blocs
JSON-LD.
Contrôle navigateur réel : 320, 390, 767 et 769 autour du seuil 768, 1024 et
1440 px ; largeur du document contenue, un H1 et un CTA unique, cartes lisibles
sur mobile, hiérarchie contrôlée sur bureau et console sans erreur.
Le seuil 768 a été encadré à 767 et 769 px en raison du facteur d’échelle 125 %
du navigateur de contrôle.
Test réalisé par une personne réelle : non.
Décision de publication : autorisée explicitement par le commanditaire sur la
base du processus en quatre passes et du contre-audit indépendant ; cela ne
constitue ni un test lecteur réel ni une garantie d’indexation ou de résultat.
Verdict : publiable — validation éditoriale déléguée.
Score final : 20/20.
Snapshot : manifests/reprendre-maintenance-site-autre-agence-p4.sha256
```

## 8. Scorecard finale

| Axe         |      Note | Motif de validation                                                                |
| ----------- | --------: | ---------------------------------------------------------------------------------- |
| Intention   |         2 | Changement d’équipe et peur de perdre le site exprimés dès l’ouverture             |
| Décision    |         2 | Passation, contrôle limité, stabilisation ou reconstruction fondée sur des preuves |
| Pédagogie   |         2 | Domaine, DNS, copie, sauvegarde et accès techniques traduits en gestes vérifiables |
| Profondeur  |         2 | Comptes, données, formulaires, e-mails, licences et ordre de retrait couverts      |
| Preuve      |         2 | Sources primaires actuelles placées près des affirmations sensibles                |
| Comparaison |         2 | Mainteneur, hébergeur, domaine et messagerie séparés avant toute décision          |
| Originalité |         2 | Bascule service par service avec preuve de reprise et condition de retrait         |
| Style       |         2 | Ouverture humaine, phrases concrètes et cartes lisibles sur mobile                 |
| Conversion  |         2 | Fiche autonome sans secret puis CTA unique qui explique la destination             |
| SEO/produit |         2 | Intention distincte, deux liens entrants, métadonnées et rendu responsive vérifiés |
| **Total**   | **20/20** | **P0 : 0 ; P1 : 0**                                                                |
