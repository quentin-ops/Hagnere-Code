# Dossier de recherche — sécurité d'un SaaS B2B avant une vente

> Le giga-audit du 24 juillet 2026 a rouvert les quatre anciennes passes. Les
> rapports du 23 juillet sont conservés plus bas comme historique, mais ne
> qualifient plus le guide actuel. La nouvelle recherche traite le risque
> résiduel, l'autorité qui peut l'accepter, la séparation entre clients, la
> restauration métier, les niveaux d'assurance et la capacité de correction.
> Ce dossier ne constitue ni un audit de sécurité, ni une certification, ni
> un avis juridique ou sectoriel.

## Journal des quatre passes

Propriétaire éditorial unique : `/root`

| Passe                        | État     | Date            | Responsable                      | Snapshot                                              | Blocages |
| ---------------------------- | -------- | --------------- | -------------------------------- | ----------------------------------------------------- | -------- |
| 1. Recherche                 | Terminée | 25 juillet 2026 | `/root` + benchmark indépendant  | `securite-saas-b2b-world-benchmark-2026-07-25-r1.md`  | Aucun    |
| 2. Rédaction et intégration  | Terminée | 26 juillet 2026 | `/root`                          | `manifests/securite-saas-b2b-p2-2026-07-26-r6.sha256` | Aucun    |
| 3. Contre-audit indépendant  | Terminée | 26 juillet 2026 | deux relecteurs en lecture seule | `manifests/securite-saas-b2b-p3-2026-07-26-r2.sha256` | Aucun    |
| 4. Plume humaine et contrôle | Terminée | 26 juillet 2026 | `/root`                          | `manifests/securite-saas-b2b-p4-2026-07-26-r1.sha256` | Aucun    |

Le gel P2 R1 a été retiré avant tout contre-audit : un audit à froid a trouvé
une confusion entre obligation applicable et assurance indépendante, un
écartement possible d'une exigence indispensable et une pseudo-marque
correspondant à une entreprise réelle. Son rapport et son manifeste restent
immuables comme trace de l'incident.

P2 R2 a ensuite reçu deux verdicts indépendants `NO-GO` à 91/100 et 88/100 :
les auditeurs ont reproduit quatre P1 distincts — assurance indépendante
écartée ou satisfaite en interne, capacité numérique infinie et exemple
périssable — ainsi que des P2 d'accessibilité, d'état d'interface et de
taxonomie. Le rapport et le manifeste R2 restent eux aussi immuables.

P2 R3 a reçu deux lectures indépendantes divergentes : un `GO P4` à 96/100,
puis un `NO-GO` à 87/100 avec P0/P1/P2 = 0/1/2. La règle stricte retient le
verdict le plus défavorable : une charge infinitésimale pouvait encore
autoriser une signature tout en étant affichée comme zéro ; l'annonce
d'accessibilité et le panneau ouvert ne désignaient pas toujours le même
défaut ; l'export exposait encore un identifiant technique. R3 reste immuable
comme preuve de cette découverte.

P2 R4 a ensuite obtenu deux GO indépendants à 96/100. P4 a néanmoins découvert
une cinquième page d'impression presque vide ; R5 a resserré uniquement la
typographie imprimée et reçu deux nouveaux GO. La recette visuelle R5 a alors
détecté le titre d'une carte rogné à 1 280 px ; R6 a remplacé la grille de cinq
colonnes par trois colonnes et ajouté un test de non-régression. Deux relecteurs
ont de nouveau contrôlé 18/18 empreintes, reconstruit les deltas et rendu deux
GO sans P0, P1 ou P2.

P4 finale a validé les dix largeurs, clair/sombre, clavier, téléchargement,
effacement, impression A4 sur quatre pages, image sociale, métadonnées et
absence du sitemap. Score final strict : **96/100**.

Statut maximal : **prêt pour revue humaine**, `ready-for-human-review`,
`noindex, nofollow`. Aucun commit, push, déploiement, publication ou demande
d'indexation n'a été effectué.

## 1. Fiche d'identité

```text
Slug : securite-saas-b2b
Statut actuel : quatre passes terminées en local, prêt pour revue humaine, non publié et non indexable
Requête principale : sécurité SaaS B2B
Moment du parcours : répondre à un acheteur avant signature
Lecteur précis : dirigeant d'un SaaS B2B dont un prospect entreprise demande des garanties sur les accès, les données, les sauvegardes, les incidents et les sous-traitants
Situation déclenchante : le service informatique d'un grand compte envoie un questionnaire avec SSO, MFA, sauvegardes testées, journaux, continuité et notification d'incident
Décision principale après lecture : signer avec des preuves existantes, signer avec un plan contractuel daté et accepté, ou suspendre la vente jusqu'à un audit ou une correction
Niveau de connaissance au départ : sait que le produit utilise un hébergeur et des mots de passe, mais ne dispose pas d'un dossier de preuves partagé
5 questions indispensables : quelles données et fonctions sont critiques ? qui a accès ? une restauration a-t-elle été testée ? un incident serait-il détecté et traité ? quelles dépendances et sous-traitants interviennent ?
3 objections ou craintes : « Notre cloud s'occupe de la sécurité » ; « Cocher OWASP prouve que nous sommes conformes » ; « Il faut promettre tout ce que le client demande pour signer »
Action utile sans contact commercial : remplir un registre exigence, réponse factuelle, pièce, propriétaire, dernier test, écart et échéance
CTA possible : faire relire le dossier avant de répondre à l'acheteur
Hors périmètre : certification, test d'intrusion, consultation juridique, conformité d'un secteur réglementé, réponse contractuelle sans accès ni audit
Date de la recherche : 25 juillet 2026
Responsable de la synthèse : /root
```

## 2. Contrat de langage humain

- Phrase réelle : « Un grand compte veut signer, mais son informatique exige
  SSO, MFA, sauvegardes testées, journalisation et procédure d'incident.
  Qu'est-ce qui doit exister avant la vente ? »
- Réponse attendue : répondez avec des faits et des pièces ; une exigence
  absente peut parfois faire l'objet d'un plan accepté, mais une donnée critique
  inconnue, une restauration jamais testée ou un accès non maîtrisé peut
  justifier de suspendre la signature.
- Définition simple : un dossier sécurité rassemble ce que le SaaS protège,
  comment il le fait, qui en est responsable et quelle preuve récente permet de
  le vérifier.
- Mots du lecteur : accès, compte, sauvegarde, restauration, incident,
  hébergeur, sous-traitant, journal, donnée client, continuité, engagement.
- Jargon à traduire : SSO, MFA, RPO, RTO, SIEM, S-SDLC, pentest, ASVS,
  chiffrement au repos, tenant isolation, CVE.
- Ouverture : commencer par la vente bloquée et le risque de promettre une
  fonction inexistante, pas par un cours de cybersécurité.

## 3. Cannibalisation

| Page existante                                   | Intention                                            | Différence                                                          | Maillage                                             |
| ------------------------------------------------ | ---------------------------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------- |
| `/guides/mvp-saas-quoi-inclure`                  | Choisir ce qui rend une première version exploitable | Préparer les preuves demandées par un acheteur B2B                  | Le MVP renverra ici avant la vente à un grand compte |
| `/guides/cahier-des-charges-saas`                | Écrire les règles du produit avant développement     | Décider quoi prouver, corriger, conditionner ou refuser avant vente | Lier pour inscrire les exigences dans le produit     |
| `/guides/reprendre-saas-developpe-par-freelance` | Sécuriser accès et continuité lors d'une reprise     | Répondre à un questionnaire de vente sans changement de prestataire | Lier si les accès et dépendances sont inconnus       |
| `/services/securite-rgpd`                        | Présenter un accompagnement                          | Donner une méthode autonome et ses limites                          | CTA tardif vers le formulaire général                |

**Verdict :** guide distinct. Il ne doit pas devenir « comment sécuriser tout
un SaaS ».

## 4. Fiche de preuves

| Affirmation utilisable                                                                                                                                                                                                   | Source primaire                                                                                                                                                                                                          | Périmètre et limite                                                               | Conséquence lecteur                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| La CNIL organise ses mesures autour de la gouvernance, des utilisateurs, habilitations, serveurs, développement, sous-traitance, maintenance, journaux et sauvegardes                                                    | [CNIL — Guide de la sécurité des données personnelles](https://www.cnil.fr/fr/guide-de-la-securite-des-donnees-personnelles)                                                                                             | Guide de référence, pas certification ni analyse de risque exhaustive             | Utiliser ces familles pour ne pas répondre seulement sur le mot de passe                       |
| Sécurité et protection de la vie privée doivent être intégrées dès la conception ; les tests avant mise en production et l'utilisation de données fictives ou anonymisées en test font partie des recommandations        | [CNIL — Guide sécurité 2024, version mise à jour](https://www.cnil.fr/sites/default/files/2026-05/cnil_guide_securite_personnelle.pdf)                                                                                   | Recommandations générales à proportionner                                         | Demander des preuves de développement et de test, pas seulement d'hébergement                  |
| La CNIL recommande des identifiants individuels, d'éviter les comptes partagés et définit l'authentification multifacteur par au moins deux catégories distinctes de facteurs                                            | [CNIL — Authentifier les utilisateurs](https://www.cnil.fr/securite-authentifier-les-utilisateurs)                                                                                                                       | Mesures à adapter au risque ; MFA n'est pas une garantie absolue                  | Décrire utilisateurs, administrateurs et scénarios sensibles séparément                        |
| Les habilitations doivent être retirées lorsque la mission, la fonction ou le contrat prend fin                                                                                                                          | [CNIL — Gérer les habilitations](https://www.cnil.fr/fr/securite-gerer-les-habilitations)                                                                                                                                | Principe organisationnel et technique                                             | Prouver le propriétaire des droits et leur revue, pas seulement l'écran de rôles               |
| La CNIL recommande des sauvegardes régulières et testées, une copie géographiquement distincte, au moins une copie hors ligne et une protection comparable à la production                                               | [CNIL — Sauvegarder](https://cnil.fr/fr/securite-sauvegarder)                                                                                                                                                            | Fréquence et objectifs de reprise dépendent du métier                             | Donner la date du dernier test de restauration sans inventer un RPO ou RTO universel           |
| L'ANSSI recommande de définir la journalisation selon les besoins fonctionnels et techniques, de tracer des événements utiles, limiter les données personnelles et organiser conservation et suppression                 | [ANSSI — Recommandations de sécurité pour l'architecture d'un système de journalisation](https://cyber.gouv.fr/sites/default/files/2022/01/anssi-guide-recommandations_securite_architecture_systeme_journalisation.pdf) | Guide technique, à appliquer de façon proportionnée                               | Une liste de logs sans responsable ni utilisation n'est pas une preuve suffisante              |
| OWASP ASVS peut servir de base aux exigences, aux tests et aux clauses d'achat                                                                                                                                           | [OWASP — Application Security Verification Standard](https://owasp.org/www-project-application-security-verification-standard/)                                                                                          | Standard volontaire ; sélectionner des exigences ne certifie pas l'application    | Décrire précisément le périmètre testé et le résultat                                          |
| Toute violation de données personnelles doit être documentée ; une notification à la CNIL sous 72 heures concerne les violations présentant un risque, et l'information des personnes dépend notamment d'un risque élevé | [CNIL — Notifier une violation de données](https://www.cnil.fr/fr/services-en-ligne/notifier-une-violation-de-donnees-personnelles)                                                                                      | Règles relatives aux données personnelles, pas délai universel pour tout incident | Ne pas transformer « 72 heures » en SLA générique ; prévoir qualification et conseil compétent |
| L'ANSSI rappelle l'intérêt d'intégrer systématiquement la sécurité au cycle de développement et de livraison                                                                                                             | [ANSSI — Étude S-SDLC/DevSecOps](https://cyber.gouv.fr/nous-connaitre/publications/etude-de-marche/etude-de-marche-s-sdlc-devsecops/)                                                                                    | Étude de marché et de gouvernance, pas label                                      | Demander comment les corrections et dépendances sont suivies dans la durée                     |

### Garde-fous

- ne pas écrire « certifié ANSSI » ou « conforme OWASP » sans certification ou
  audit correspondant ;
- ne pas imposer 99,9 %, une fréquence de test d'intrusion ou une fréquence de
  sauvegarde à tous les SaaS ;
- ne pas affirmer que SSO ou MFA est obligatoire pour chaque cas ;
- ne pas dire que tout incident doit être notifié sous 72 heures ;
- ne pas confondre données hachées et données anonymes ;
- ne pas affirmer que NIS2 s'applique à tout éditeur SaaS ;
- ne pas transmettre au prospect des secrets, détails exploitables ou pièces
  contenant des données personnelles non nécessaires.

## 5. Huit questions de recherche regroupées dans l'atelier

Ces huit questions servent à vérifier que le contenu ne laisse aucun angle
majeur dans l'ombre. Elles ne deviennent pas huit contrôles équivalents dans
l'outil. L'atelier verrouille cinq contrôles essentiels — accès privilégiés,
séparation entre clients, restauration, sécurité du logiciel et réaction à
incident — puis traite dans une sixième famille toute autre exigence produit,
contractuelle, sectorielle ou d'assurance.
Les sous-traitants, journaux, chiffrement, continuité et sortie sont rattachés
aux contrôles concernés. La sixième famille couvre toute autre exigence produit,
contractuelle, sectorielle ou d'assurance ; elle peut être critique et un
dossier distinct ne la rend pas optionnelle. Deux exigences hétérogènes exigent
deux exports séparés.

| Famille                      | Question de l'acheteur                             | Pièce possible                                     | Blocage à rechercher                        |
| ---------------------------- | -------------------------------------------------- | -------------------------------------------------- | ------------------------------------------- |
| Identités et droits          | Qui peut faire quoi ?                              | Rôles, procédure arrivée-départ, dernière revue    | Compte partagé ou administrateur inconnu    |
| Données et séparation        | Quelles données sont stockées et séparées ?        | Cartographie, flux, règle d'accès                  | Données ou destinataires inconnus           |
| Sauvegarde et restauration   | Que peut-on récupérer ?                            | Rapport du dernier test, périmètre et résultat     | Sauvegarde jamais restaurée                 |
| Journaux et alertes          | Comment voyez-vous un accès ou incident ?          | Événements suivis, alerte, propriétaire            | Journaux collectés mais jamais examinés     |
| Développement et dépendances | Comment évitez-vous et corrigez-vous les défauts ? | Revue, tests, dépendances, procédure de correction | Mise en production sans contrôle            |
| Incident                     | Qui décide, informe et documente ?                 | Procédure, rôles, exercice                         | Aucun responsable ou moyen de qualification |
| Sous-traitants               | Qui traite ou héberge quoi ?                       | Liste, rôle, clauses, revue                        | Prestataire critique inconnu                |
| Continuité et sortie         | Que se passe-t-il en panne ou au départ ?          | Plan, export, objectifs validés                    | Promesse de reprise jamais testée           |

## 6. Décisions prévues

Le dossier conduit à cinq sorties explicites :

1. **signer sur le champ démontré** : pièce actuelle, portée exacte, résultat,
   propriétaire et limite ;
2. **corriger et contre-tester avant signature** : charge strictement positive,
   capacité disponible, responsable, action et échéance avant la vente ;
3. **signer sous conditions limitées** : uniquement pour un écart non critique,
   reportable, couvert temporairement, financé, avec décisions interne et
   acheteur datées et référencées ;
4. **faire intervenir un tiers compétent** : assurance indépendante, test,
   audit, juriste ou spécialiste sectoriel selon la demande ;
5. **reporter, réduire, renégocier ou refuser** : inconnue critique, condition
   formelle insatisfaite, capacité insuffisante ou promesse intenable.

Le dirigeant ne doit pas classer seul une exigence réglementaire ou un risque
technique qu'il ne sait pas qualifier.

## 7. Exemple pédagogique prévu

**Exemple illustratif entièrement fictif et sans pseudo-marque :** « entreprise
A — service documentaire fictif » reçoit un questionnaire d'un prospect de 450
salariés. Il affirme d'abord que
« les sauvegardes sont gérées par le cloud ». L'équipe retrouve une tâche
automatique, mais aucun compte rendu de restauration et personne ne sait qui
serait autorisé à lancer la reprise.

Le guide montrera comment remplacer cette réponse par :

- ce qui est sauvegardé ;
- où et sous quelle responsabilité ;
- le dernier test réellement effectué ;
- son résultat et ses limites ;
- l'écart restant ;
- la décision de tester avant signature ou de faire accepter un plan daté.

## 8. Plan intégré en P2

1. choisir entre cinq décisions honnêtes ;
2. séparer sécurité, conformité, résilience, assurance et contrat ;
3. distinguer la sécurité du produit des badges de l'organisation ;
4. identifier les cinq défauts capables de suspendre la signature ;
5. relier actif, événement redouté, contrôle, résultat, risque et décideur ;
6. répartir les responsabilités entre cloud, éditeur, client et sous-traitants ;
7. démontrer chiffrement, cycle de vie des clés et journaux utilisables ;
8. classer la force, la portée, la fraîcheur et la limite d'une pièce ;
9. tester accès humains, techniques et séparation entre clients ;
10. suivre logiciel, chaîne d'approvisionnement, vulnérabilités et fin de support ;
11. tester la restauration jusqu'au retour effectif au travail ;
12. exercer la sortie et cadrer les limites du Data Act ;
13. séparer chronologie interne, contrat, RGPD et éventuel NIS 2 ;
14. vérifier la capacité réelle avant la date commerciale ;
15. comparer les démarches sur 36 mois à champ égal ;
16. produire un dossier local prudent, exportable et imprimable ;
17. partager progressivement, maintenir les pièces et demander la bonne aide.

## 9. Action autonome et conversion

Artefact intégré : dossier local à cinq contrôles essentiels et une condition
supplémentaire. Il conserve la demande, la nature, l'état, la pièce, sa portée,
son résultat, sa date, son événement invalidant, le risque restant, la charge,
la capacité, les responsables, les décisions et les échéances. Un brouillon
incomplet reste téléchargeable et imprimable, mais porte une interdiction
explicite de l'utiliser pour autoriser une signature. Aucun stockage ou envoi
réseau propre à l'outil n'est effectué.

Bon fit : SaaS B2B avec données opérationnelles ou personnelles, plusieurs
rôles, sous-traitants et vente à des organisations structurées.

Mauvais fit : demande de certification formelle sans audit, contexte santé,
finance, défense ou autre secteur exigeant un spécialiste, et produit dont les
actifs ou données ne sont pas encore cartographiés.

CTA : « Faire relire mon dossier sécurité SaaS » vers `/demarrer-un-projet`,
avec limite explicite : accompagnement technique et général, avis juridique ou
sectoriel spécialisé lorsque nécessaire.

## Archive invalidée — rapports du 23 juillet 2026

Les quatre rapports ci-dessous décrivent une version antérieure. Ils sont
conservés pour l'historique, mais leurs mentions « terminée », « publiable »,
leurs scores, leurs tests et leurs snapshots **ne valent pas pour la
réécriture du 25 juillet 2026**. Aucune nouvelle passe ne peut s'appuyer sur
ces verdicts.

### 10. Rapport P1

```text
PASSE 1 TERMINÉE
Slug : securite-saas-b2b
Lecteur et phrase réelle : dirigeant SaaS — « Le grand compte exige des garanties : que faut-il prouver avant de signer ? »
Décision : signer avec preuves, signer sous conditions acceptées ou suspendre pour auditer et corriger
Angle et forme dominante : transformer le questionnaire en huit fiches de preuve
Pages proches et différence : MVP, cahier et reprise évoquent la sécurité ; aucun ne prépare le dossier demandé par un acheteur
Sources décisives : CNIL, ANSSI et OWASP, avec limites de périmètre
Incertitudes exclues : certification, disponibilité, fréquence de pentest, obligation universelle de MFA et application automatique de NIS2
Action autonome et CTA possible : registre de preuves ; faire relire le dossier avant réponse
Plan : vente, attente acheteur, cartographie, huit fiches, trois statuts, partage, verdict, trente jours, audit, fits, FAQ
Snapshot : docs/research/manifests/securite-saas-b2b-p1.sha256
```

### 11. Revue de porte P1

- [x] lecteur, situation et décision définis ;
- [x] questionnaire transformé en preuves et responsabilités ;
- [x] sources officielles ou standard volontaire qualifiées ;
- [x] sauvegarde distinguée d'une restauration testée ;
- [x] incident général distingué d'une violation de données ;
- [x] certification et secteurs réglementés hors périmètre ;
- [x] exemple fictif annoncé ;
- [x] option de suspendre la vente conservée ;
- [x] aucune garantie de sécurité ou conformité ;
- [x] P2, P3 et P4 terminées ; publication déléguée et contrôlée.

### 12. Rapport P2 — rédaction et intégration

```text
PASSE 2 TERMINÉE — PRÊTE POUR CONTRE-AUDIT INDÉPENDANT
Éditeur unique : /root/p2_batch3_marketing
Ouverture : le questionnaire d'un grand compte bloque une signature ; le lecteur reçoit immédiatement trois réponses possibles — faits existants, plan accepté ou suspension
Forme propre : huit fiches factuelles, trois statuts de réponse et un dossier transmissible qui n'expose pas les secrets techniques
Exemple : référence générique `EXEMPLE-SAAS-FICTIF-01`, sans pseudo-marque ni réalisation client suggérée
Action autonome : registre exigence, réponse, document, propriétaire, dernier test, écart et échéance, copiable sans contact
Bon et mauvais fit : vente SaaS B2B structurée d'un côté ; certification, audit formel et secteurs réglementés de l'autre
Sources visibles : CNIL, ANSSI et OWASP, avec limites sur certification, MFA, sauvegardes, journalisation et notification
Conversion : un seul CTA tardif vers /demarrer-un-projet ; téléphone et CTA de barre latérale désactivés
SEO technique : métadonnées du registre en statut ready-for-human-review ; canonical, Article et BreadcrumbList ; image sociale dédiée 1 200 × 630
Contrôles P2 : formatage ciblé, ESLint ciblé et TypeScript conformes selon le rapport de l'éditeur
État : index/follow autorisé après validation P3, P4 et délégation explicite
Snapshot : docs/research/manifests/securite-saas-b2b-p2.sha256
```

### 13. Rapport P3 — contre-audit indépendant

```text
PASSE 3 TERMINÉE
Relecteur indépendant : /root/p2_batch3_apps
Affirmations et sources revérifiées : CNIL, ANSSI et OWASP ; accès, sauvegardes, restauration, journaux, incidents, sous-traitants et continuité
Calculs refaits : aucun calcul décisif ; la règle CNIL des 72 heures reste conditionnée au risque et n’est pas transformée en obligation universelle de notification
P0 trouvés / corrigés : 0 / 0
P1 trouvés / corrigés : 1 / 1 — la promesse non sourcée « en une heure » a été retirée
Suggestions rejetées et pourquoi : aucune certification, fréquence de pentest, MFA ou conformité sectorielle universelle ajoutée
Corrections pédagogiques et commerciales : deux tableaux ramenés à trois colonnes, statut et preuve réunis, registre lisible sur téléphone, décision de suspendre conservée
Revalidation du relecteur : P0/P1/P2 = 0/0/0 sur le contenu courant
Contrôles intermédiaires : Prettier, ESLint, TypeScript, tests ciblés, liens officiels, CTA, schémas et OG conformes
Snapshot : docs/research/manifests/securite-saas-b2b-p3.sha256
```

### 14. Rapport P4 — plume, rendu et gel

```text
PASSE 4 TERMINÉE
Passages humanisés : le questionnaire du grand compte conduit directement à trois réponses honnêtes — prouver, planifier ou suspendre — puis à huit pièces compréhensibles
Coupe ou resserrement : numérotation mécanique et blocs de conversion clonés retirés ; la promesse de traitement « en une heure » a disparu faute de périmètre contractuel
Retour P3 effectué : oui — accès, restauration, journaux, incidents, sous-traitants, CNIL, ANSSI et OWASP ont été revérifiés ; relecture finale P0/P1/P2 = 0/0/0
Scorecard justifiée : 19/20 — Intention 2, Décision 2, Pédagogie 2, Profondeur 2, Preuve 2, Comparaison 2, Originalité 2, Style 1, Conversion 2, SEO/produit 2
Validation humaine réelle : non
Test réalisé par une personne réelle : non
Autorisation éditoriale : délégation explicite du commanditaire
Décision de publication : autorisée explicitement par le commanditaire
Commandes et résultats : check:seo 215/215 ; ESLint 32 fichiers ; TypeScript conforme ; npm test 440/440 ; build et postbuild de production conformes ; diff-check conforme
Largeurs et états contrôlés : 320, 390, 768, 1 024 et 1 440 px ; clair et sombre ; fiches de preuve, statuts, CTA, FAQ et footer sans débordement
Route, OG et console : route 200, H1 unique, canonical et robots conformes ; OG 200 en PNG 1 200 × 630 ; aucun overlay ni erreur navigateur
Snapshot final : docs/research/manifests/securite-saas-b2b-p4.sha256
Statut maximal : Publiable
Verdict : publiable en index/follow ; ce guide ne vaut ni audit ni certification et ne prouve aucune indexation Google
```

## 15. Réouverture P1 du 25 juillet 2026

Cette section prévaut sur les anciennes portes. Le snapshot relu avant
réécriture est :

- page :
  `dbefc919707eab11989a79c3b7afe033dde6a539d05acb2aebdda08dee197661` ;
- image sociale :
  `1d5c8a0872d1b829d1dacf79ea77afaeb37b5e1ecaee641967e033be236de457` ;
- registre partagé :
  `a3a6ef96e5f2d79ed3a32efda48cc6e62a1cc092186df64e68b6a3c9670e377a`.

### Question exacte et décision unique

> « Un grand compte veut acheter notre SaaS, mais sa DSI nous envoie un
> questionnaire de sécurité, demande des preuves et parfois ISO 27001 ou SOC 2.
> Qu'est-ce qu'il faut vraiment avoir avant de signer, qu'est-ce qu'on peut
> planifier après la signature et dans quels cas vaut-il mieux retarder la
> vente ? »

Le guide doit conduire à l'une de cinq décisions compréhensibles :

1. répondre avec des faits et des documents récents ;
2. corriger un défaut critique avant de poursuivre ;
3. faire accepter un plan uniquement pour des écarts non critiques ;
4. engager une vérification indépendante ou un programme continu lorsque
   l'acheteur, le secteur ou l'équipe le justifie ;
5. reporter ou refuser la vente si la promesse serait intenable.

La réponse courte des 150 premiers mots sera : un acheteur peut accepter un
plan pour un point non critique, mais son accord commercial ne répare ni un
contrôle essentiel défaillant, ni une obligation légale, ni une responsabilité
de l'éditeur. Les administrateurs, la séparation entre clients, les secrets,
la restauration, les vulnérabilités et la réaction à incident passent avant
le logo d'une certification.

### Les six notions que la page doit séparer

| Notion                       | Question ordinaire                                                                         | Preuve adaptée                                                          | Ce qu'elle ne démontre pas                                  |
| ---------------------------- | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- | ----------------------------------------------------------- |
| Sécurité                     | Le contrôle réduit-il réellement le risque ?                                               | Configuration, journal, exercice, test et contre-test                   | Absence future d'incident                                   |
| Conformité                   | Une exigence applicable est-elle respectée dans le périmètre visé ?                        | Texte, contrat, cartographie, contrôle ou certificat selon le cas       | Sécurité absolue du produit                                 |
| Résilience                   | Le service peut-il redevenir utilisable dans les limites acceptées par le métier ?         | Objectifs métier, restauration chronométrée et validation fonctionnelle | Confidentialité ou conformité globale                       |
| Assurance indépendante       | Un tiers a-t-il examiné un périmètre, des critères et une période définis ?                | Audit, test d'intrusion, certification ou rapport                       | Exhaustivité de toutes les fonctions                        |
| Assurance cyber              | Certaines conséquences financières sont-elles transférées dans les conditions du contrat ? | Police, garanties, exclusions, plafonds et obligations                  | Prévention, conformité ou disparition de la responsabilité  |
| Responsabilité contractuelle | Qui promet quoi, dans quel délai et avec quel recours ?                                    | Contrat, annexe sécurité, accord de traitement et niveau de service     | Effacement d'une obligation légale ou d'un défaut technique |

### P0 et P1 de l'ancienne page

Un même P0 comporte deux manifestations qui bloquent la décision :

- **P0-01** — l'ouverture autorise un « plan accepté » sans le limiter aux
  écarts non critiques et sans dire que l'acceptation de l'acheteur ne
  neutralise ni le risque technique ni les obligations applicables ;
- **P0-02** — « signer sous conditions » ne demande ni gravité, ni risque
  restant, ni personne habilitée côté éditeur à accepter ce risque.

La règle de décision à reprendre sans l'affaiblir est :

> Une exigence absente ne peut être classée « planifiée » que si elle est
> légalement reportable, non critique pour le service vendu et couverte par
> une mesure temporaire vérifiable. Le risque résiduel doit être qualifié puis
> accepté par une autorité interne compétente. Le plan précise son
> propriétaire, son financement, son échéance et son critère de validation.
> L'accord contractuel du client s'ajoute à cette décision ; il ne remplace
> jamais une obligation applicable ni la correction d'un risque inacceptable.
> Si l'isolement entre clients, un accès critique, la capacité de restauration
> ou la gestion d'incident n'est pas démontré, la signature est suspendue.

Les P1 à traiter dans la nouvelle page sont :

- matrice actif, événement redouté, impact, mesure, résultat du contrôle,
  risque restant et décideur ;
- responsabilités séparées entre cloud sous-jacent, éditeur SaaS, entreprise
  cliente et autres sous-traitants ;
- force, périmètre, résultat, date, propriétaire et péremption d'une preuve ;
- comptes humains, administrateurs, identités techniques, accès d'urgence,
  secrets, API et dépendances ;
- séparation entre entreprises clientes testée, jamais déduite du seul mot
  « multi-tenant » ;
- découverte, correction et contre-test des vulnérabilités, avec un canal de
  signalement ;
- perte de données et durée d'interruption acceptables décidées par le métier
  avant de parler de RPO et RTO ;
- distinction entre délai interne, délai contractuel, notification RGPD et
  éventuelle obligation NIS 2 ;
- comparaison à périmètre égal entre dossier ciblé, test d'intrusion,
  programme continu, ISO 27001, rapport SOC 2, CAIQ et report de la vente ;
- capacité réelle de correction avant la date commerciale et coût total sur
  36 mois ;
- registre maintenable et exportable sans transmettre les données au site.

### Faits officiels revalidés

| Affirmation utilisable                                                                                                                                                                                                                                     | Source primaire et date                                                                                                                                       | Limite                                                                                                                                         | Conséquence pour le dirigeant                                                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Le rôle RGPD d'un fournisseur cloud dépend de ses finalités et de son contrôle effectif ; le SaaS est souvent sous-traitant pour le service, mais peut avoir un autre rôle pour certaines finalités propres.                                               | [CNIL — qualifications des acteurs du cloud, 28 mai 2026](https://cnil.fr/fr/quelles-qualifications-pour-les-acteurs-de-linformatique-en-nuage-cloud)         | Analyse au cas par cas ; le contrat ne suffit pas à imposer une qualification fausse                                                           | Écrire le rôle par traitement et ne pas répondre « notre hébergeur gère le RGPD »                                 |
| Une violation de données personnelles est documentée ; la notification à la CNIL dans les meilleurs délais et, si possible, sous 72 heures concerne les violations présentant un risque. Le sous-traitant alerte le responsable dans les meilleurs délais. | [CNIL — règles relatives aux violations](https://cnil.fr/fr/violations-de-donnees-personnelles-les-regles-suivre)                                             | Ce délai n'est pas un délai universel pour tout incident technique                                                                             | Distinguer chronologie interne, clause client et qualification RGPD                                               |
| La durée maximale d'interruption admissible et la perte de données maximale admissible viennent du besoin de l'activité ; le plan de reprise doit leur être cohérent.                                                                                      | [ANSSI — référentiel de mesures, mesures 0118 et 0120](https://monservicesecurise.cyber.gouv.fr/referentiel-mesures)                                          | Ces objectifs ne prouvent pas que la restauration les respecte                                                                                 | Faire décider le métier, puis tester et chronométrer jusqu'à la validation fonctionnelle                          |
| Une offre cloud qualifiée SecNumCloud ne rend pas automatiquement le service du client sécurisé ou qualifié.                                                                                                                                               | [ANSSI — FAQ SecNumCloud](https://cyber.gouv.fr/enjeux-technologiques/cloud/faq-qualification-secnumcloud/)                                                   | La qualification porte sur une offre et un périmètre précis                                                                                    | Ne jamais hériter d'un logo ou d'une promesse depuis l'infrastructure                                             |
| L'ANSSI parle encore de transposition nationale de NIS 2, de futurs assujettis et d'un ReCyF diffusé comme document de travail, non obligatoire par défaut.                                                                                                | [ANSSI — directive NIS 2](https://cyber.gouv.fr/reglementation/cybersecurite-systemes-dinformation/directives-nis-nis2-et-dispositif-saiv/directive-nis-2/)   | Situation française à revalider avant chaque publication substantielle                                                                         | Ne pas présenter NIS 2 comme applicable indistinctement à tout SaaS français                                      |
| Les identités techniques utilisées par les intégrations doivent être visibles, autorisées, limitées, revues et surveillées.                                                                                                                                | [NCSC — utiliser un SaaS de façon sûre](https://www.ncsc.gov.uk/collection/cloud/using-cloud-services-securely/using-saas-securely)                           | Guide britannique écrit surtout pour l'entreprise utilisatrice                                                                                 | L'éditeur doit pouvoir fournir au client les fonctions et preuves correspondantes                                 |
| La séparation entre clients dépend de mécanismes techniques et de l'administration du service ; le simple vocabulaire de compte ou tenant ne la démontre pas.                                                                                              | [NCSC — séparation techniquement imposée](https://www.ncsc.gov.uk/collection/cloud/understanding-cloud-services/technically-enforced-separation-in-the-cloud) | Le mécanisme adapté dépend de l'architecture réelle                                                                                            | Décrire puis tester un accès inter-client refusé sur un environnement représentatif                               |
| Le SSDF 1.1 ajoute au cycle de développement des pratiques destinées à réduire les vulnérabilités, limiter l'impact de celles qui subsistent et traiter leurs causes.                                                                                      | [NIST SP 800-218, version finale 1.1](https://csrc.nist.gov/pubs/sp/800/218/final)                                                                            | Cadre de haut niveau ; il ne remplace pas les tests du produit                                                                                 | Demander propriétaire, correction, contre-test et prévention de récidive                                          |
| OWASP ASVS 5.0.0 fournit des exigences vérifiables pour les contrôles techniques d'une application web.                                                                                                                                                    | [OWASP — Application Security Verification Standard](https://owasp.org/www-project-application-security-verification-standard/)                               | Référentiel volontaire ; une sélection ou un autocontrôle ne constitue ni certificat ni audit indépendant                                      | Nommer la version, les exigences retenues, les exclusions, le périmètre et les résultats                          |
| ISO/IEC 27001:2022 définit les exigences d'un système de management de la sécurité de l'information.                                                                                                                                                       | [ISO — ISO/IEC 27001:2022](https://www.iso.org/fr/standard/27001)                                                                                             | Toujours lire l'entité, le périmètre et la validité ; ce n'est pas un test exhaustif du SaaS                                                   | Vérifier la condition d'achat réelle avant de financer la certification                                           |
| CAIQ 4.1 est un questionnaire de transparence de niveau 1 pour documenter des contrôles cloud.                                                                                                                                                             | [Cloud Security Alliance — CAIQ 4.1, publié le 27 janvier 2026](https://cloudsecurityalliance.org/artifacts/star-level-1-security-questionnaire-caiq-v4-1)    | Auto-évaluation, pas assurance indépendante                                                                                                    | L'utiliser comme langage commun, jamais comme certificat                                                          |
| SOC 2 et SOC 3 portent sur des contrôles liés aux critères de confiance ; le rapport SOC 3 est destiné à un usage plus général.                                                                                                                            | [AICPA & CIMA — SOC 3](https://www.aicpa-cima.com/topic/audit-assurance/audit-and-assurance-greater-than-soc-3)                                               | Lire système, critères, période, exceptions et contrôles attendus du client dans le rapport applicable                                         | Ne pas réduire un rapport SOC à un badge                                                                          |
| Lorsqu'une entité est effectivement assujettie à NIS 2 et qu'un incident est significatif, l'article 23 prévoit notamment une alerte précoce sous 24 heures, une notification sous 72 heures et un rapport final au plus tard un mois après.               | [EUR-Lex — directive (UE) 2022/2555, article 23](https://eur-lex.europa.eu/eli/dir/2022/2555/oj?locale=fr)                                                    | Cette chronologie ne s'applique pas à tout SaaS ni à tout incident ; en France, l'assujettissement et la transposition doivent être revérifiés | Ne l'afficher dans le dossier qu'après qualification du périmètre par la personne compétente                      |
| Le contrat avec un sous-traitant RGPD doit notamment encadrer l'objet, la durée, les finalités, les catégories de données et de personnes, les obligations, la confidentialité, les mesures, les autres sous-traitants et l'aide en cas d'incident.        | [CNIL — RGPD, articles 28 et 32 à 36](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4)                                                 | Le rôle et les obligations dépendent des traitements réels ; une liste de fournisseurs ne suffit pas                                           | Tenir un registre par service, usage, données, rôle, pays, transfert, sous-traitance ultérieure et dernière revue |
| ISO/IEC 27017:2015 précise des contrôles et responsabilités pour les services d'informatique en nuage.                                                                                                                                                     | [ISO — ISO/IEC 27017:2015](https://www.iso.org/standard/43757.html)                                                                                           | La deuxième édition était encore indiquée sous publication au 25 juillet 2026 ; citer la version réellement utilisée                           | Vérifier le partage des responsabilités cloud sans déduire la sécurité du SaaS d'un logo                          |
| ISO/IEC 27018:2025 traite de la protection des informations personnelles dans un nuage public lorsque le fournisseur agit comme sous-traitant.                                                                                                             | [ISO — ISO/IEC 27018:2025](https://www.iso.org/standard/27018)                                                                                                | La mention de la norme ne prouve ni son inclusion dans un certificat ni la conformité RGPD du service                                          | Lire périmètre, rôle, version, mise en œuvre et exclusions                                                        |
| ISO/IEC 27701:2025 porte sur un système de management de la protection de la vie privée.                                                                                                                                                                   | [ISO — ISO/IEC 27701:2025](https://www.iso.org/standard/27701)                                                                                                | Un système de management n'est ni un test exhaustif du produit ni une garantie générale de conformité                                          | Examiner le périmètre et les responsabilités plutôt que compter le seul numéro de norme                           |

### Matrice de gain d'information

| Question décisive                               | Meilleure réponse déjà observée                                           | Manque de l'ancienne page                                     | Gain vérifiable prévu                                                                                                        |
| ----------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Peut-on signer avec un écart ?                  | Les guides de questionnaires recommandent souvent un plan et une échéance | Gravité, obligation et autorité d'acceptation absentes        | Plan réservé aux écarts non critiques, risque restant et décideur nommés                                                     |
| Une certification suffit-elle ?                 | ISO, CSA et les éditeurs expliquent chaque démarche séparément            | Aucun comparatif sur le même produit et 36 mois               | Cartes égales : apporte, ne remplace pas, effort, moment où l'option gagne                                                   |
| La sauvegarde est-elle utile ?                  | CNIL et ANSSI demandent sauvegarde et reprise                             | Aucun objectif métier ni chronométrage                        | Exercice chiffré perte de données, reprise technique et validation métier                                                    |
| La preuve est-elle crédible ?                   | Les outils commerciaux centralisent documents et réponses                 | Périmètre, fraîcheur et force non classés                     | Échelle déclaratif → documenté → observé → testé → indépendant                                                               |
| La date de vente est-elle tenable ?             | Peu de contenus relient écarts et capacité disponible                     | Aucun calcul                                                  | Heures de correction + 25 % de preuve/contre-test comparées à la capacité avant signature                                    |
| Faut-il acheter un outil ou une certification ? | Vanta, Drata et Sprinto valorisent l'automatisation                       | Le conflit d'intérêt et les coûts cachés restent peu visibles | Position Hagnéré Code : contrôles critiques d'abord ; formalisation lorsque le marché ou la gouvernance la rend réutilisable |

La saturation est atteinte lorsque les nouvelles pages répètent l'un de ces
types de réponse : liste de contrôle, bibliothèque de réponses, Trust Center,
comparatif ISO/SOC, référentiel officiel ou questionnaire standard. Le gain
ne sera pas une liste plus longue : il sera l'enchaînement
**risque → preuve → capacité → autorité → décision de vente**.

### Trois scénarios reproductibles à intégrer

Tous les nombres suivants sont des **exemples illustratifs fictifs**, pas des
références de marché.

#### 1. La restauration est terminée seulement quand le métier peut retravailler

- perte maximale de données décidée par le métier : 2 heures ;
- interruption maximale : 3 heures après la détection ;
- incident détecté à 14 h ;
- dernière copie exploitable : 11 h 30, soit 2 h 30 de données perdues ;
- service techniquement relevé : 17 h 05, soit 3 h 05 ;
- contrôle fonctionnel terminé : 17 h 45, soit 3 h 45.

Les deux objectifs sont manqués. Une console verte à 17 h 05 ne transforme pas
le service en outil utilisable avant la validation métier de 17 h 45.

#### 2. La capacité disponible interdit une promesse commerciale

```text
4 écarts critiques × 12 h = 48 h
6 écarts majeurs × 8 h = 48 h
8 écarts mineurs × 3 h = 24 h
Travail initial = 120 h
Preuves et contre-tests = 120 h × 25 % = 30 h
Charge totale = 150 h
Capacité avant signature = 20 h/semaine × 4 semaines = 80 h
Déficit = 150 h − 80 h = 70 h
```

La moyenne ne permet pas de repousser les quatre écarts critiques après la
signature. Les sorties honnêtes sont : réduire le périmètre, ajouter une
capacité compétente, corriger avant la vente ou reporter.

#### 3. Un dossier maintenu libère de la capacité, pas automatiquement du cash

```text
Traitement manuel = 8 questionnaires/an × 28 h × 3 ans = 672 h
Construction du dossier vivant = 80 h
Maintenance = 4 h/mois × 36 mois = 144 h
Total structuré = 224 h
Écart de capacité = 672 h − 224 h = 448 h
Valeur brute illustrative = 448 h × 70 €/h = 31 360 €
```

Les 31 360 € ne deviennent une économie que si le temps est réellement
réaffecté ou évité. Les outils, corrections, audits, tests, certifications et
renouvellements s'ajoutent séparément.

### Comparaison à périmètre égal

Périmètre commun : même produit, même entité, mêmes environnements, mêmes flux,
même type d'acheteur et horizon de 36 mois.

| Démarche                               | Utile lorsque                                                                   | Apporte                                                   | Ne remplace pas                                    |
| -------------------------------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------- | -------------------------------------------------- |
| Dossier ciblé et corrections critiques | Première ou quelques ventes entreprise                                          | Réponses, pièces, responsables et limites                 | Contrôles techniques absents                       |
| Test d'intrusion ciblé                 | Une surface produit doit être observée à une date donnée                        | Défauts constatés et résultats de contre-test             | Gouvernance, continuité ou sécurité continue       |
| Programme continu interne ou managé    | Le produit change et les demandes reviennent                                    | Propriétaires, suivi, exercices et documents maintenus    | Assurance indépendante                             |
| ISO/IEC 27001                          | Le marché demande régulièrement un SMSI certifié                                | Assurance sur un système de management dans un périmètre  | Test exhaustif du produit                          |
| SOC 2 Type 2                           | Des acheteurs veulent un rapport sur des contrôles observés pendant une période | Rapport détaillé selon les critères et le système décrits | Garantie absolue ou conformité européenne générale |
| CAIQ / STAR niveau 1                   | Un langage commun cloud est utile                                               | Auto-évaluation structurée et transparence                | Audit indépendant                                  |
| Report de la vente                     | Un contrôle critique échoue ou une assurance exigée manque                      | Évite une promesse intenable                              | Correction à réaliser                              |

Le coût total à 36 mois additionne : diagnostic, corrections, temps interne,
outils, exploitation récurrente, exercices, tests, audit ou certification,
remédiations, renouvellements et sortie. Aucun tarif d'éditeur ne devient une
référence universelle.

Un rapport SOC 2 de type 1 décrit la conception des contrôles à une date ; un
type 2 traite aussi de leur fonctionnement pendant une période. Dans les deux
cas, le dirigeant doit lire le système couvert, les critères, la période, les
exceptions, la conclusion et les contrôles qui restent à la charge du client.
Le rapport ne doit pas être résumé à son logo.

### Position Hagnéré Code et contre-cas

**Recommandation.** Vérifier d'abord ce que l'acheteur exige réellement et le
risque que le produit lui fait prendre. Corriger les accès administrateurs, la
séparation entre clients, la restauration, les secrets, les vulnérabilités et
la réaction à incident avant d'acheter un logo ou une plateforme de
conformité. Un plan contractuel peut traiter un point non critique ; il ne doit
jamais maquiller un contrôle essentiel qui échoue.

**Conflit d'intérêt.** Hagnéré Code peut vendre un audit ou des corrections
techniques. Le guide doit donc dire explicitement quand un registre interne,
un test d'intrusion indépendant, un conseil juridique, une certification ou
un report est plus adapté qu'un développement confié à l'agence.

**Contre-cas.** Si le secteur, l'appel d'offres ou la politique d'achat exige
formellement une certification ou un rapport précis, ou si l'équipe ne sait pas
qualifier les risques critiques, la démarche indépendante commence avant la
signature. Un dossier artisanal n'est alors pas suffisant.

### Plan P2

1. La vente est bloquée : réponse courte et cinq sorties possibles.
2. Ce que prouvent sécurité, conformité, résilience, assurance et contrat.
3. Les défauts qui interdisent une simple promesse après signature.
4. Cartographier l'actif, le scénario, l'impact, la mesure et le décideur.
5. Distinguer ce qui appartient au cloud, à l'éditeur, au client et aux tiers.
6. Évaluer la force, le périmètre et la fraîcheur d'une pièce.
7. Contrôler accès humains, identités techniques, secrets et séparation client.
8. Relier dépendances, vulnérabilités, correction et contre-test.
9. Tester la restauration jusqu'au retour au travail.
10. Séparer chronologie interne, contrat, RGPD et éventuel NIS 2.
11. Vérifier si la capacité de correction tient avant la date commerciale.
12. Comparer dossier, pentest, programme continu, ISO, SOC 2, CAIQ et report.
13. Construire un registre local qui recommande aussi de reporter ou refuser.
14. Partager progressivement, mesurer après signature et demander la bonne aide.

### Actif signature prévu

Un outil local, sans compte ni réseau, produira :

- une décision provisoire : compléter, corriger, conditionner ou reporter ;
- la liste des contrôles critiques non prouvés ;
- la charge de correction et de contre-test ;
- l'écart entre charge et capacité avant la date de vente ;
- un registre texte daté avec produit, exigence, gravité, état, force de la
  pièce, propriétaire, date, charge et prochaine action.

L'outil ne donnera jamais un score de sécurité, un verdict de conformité ou
une garantie de signature. Une absence d'information restera « inconnue » ;
elle ne sera pas transformée en zéro.
