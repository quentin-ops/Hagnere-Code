# Dossier de recherche — Lovable, Bolt, v0 ou agence pour lancer un SaaS

> Dossier ouvert en passe 1 puis complété jusqu'à la validation P4. Il conserve
> la recherche historique et documente la rédaction, les contre-audits et les
> contrôles terminés le 24 juillet 2026. Le guide ne publie ni classement
> général des outils ni résultat de test qui n'aurait pas réellement été
> exécuté.

## Journal des quatre passes

Propriétaire éditorial unique : orchestrateur du lot

| Passe                        | État                     | Date             | Responsable                              | Snapshot | Blocages |
| ---------------------------- | ------------------------ | ---------------- | ---------------------------------------- | -------- | -------- |
| 1. Recherche                 | Terminée — porte validée | 23 juillet 2026  | agent de recherche Apps/SaaS             | Manifeste P1 | Aucun |
| 2. Rédaction et intégration  | Terminée — porte validée | 24 juillet 2026  | équipe éditoriale Hagnéré Code           | Manifeste P2 | Aucun |
| 3. Contre-audit indépendant  | Terminée — porte validée | 24 juillet 2026  | final_audit_apps, anti_ia_final, seo_tech_final | Manifeste P3 | Aucun P0/P1 restant |
| 4. Plume humaine et contrôle | Terminée — porte validée | 24 juillet 2026  | orchestration éditoriale                 | Manifeste P4 | Aucun blocage éditorial |

### Manifeste du snapshot

| Fichier contrôlé | Passe | Remarque |
| ---------------- | ----- | -------- |
| `docs/research/manifests/lovable-bolt-v0-ou-agence-saas-p1.sha256` | P1 | Manifeste existant ; historique de recherche conservé. |
| `docs/research/manifests/lovable-bolt-v0-ou-agence-saas-p2.sha256` | P2 | Manifeste existant de rédaction et d'intégration. |
| `docs/research/manifests/lovable-bolt-v0-ou-agence-saas-p3.sha256` | P3 | Manifeste existant après contre-audit et corrections. |
| `docs/research/manifests/lovable-bolt-v0-ou-agence-saas-p4.sha256` | P4 | Manifeste final créé après les contrôles P4 ; son empreinte est intégrée au snapshot commun du lot. |

## 1. Fiche d'identité

```text
Slug : lovable-bolt-v0-ou-agence-saas
Statut actuel : publiable — validation éditoriale déléguée
Requête principale : Lovable Bolt v0 ou agence SaaS
Moment du parcours : explorer puis décider avant de construire
Lecteur précis : dirigeant, indépendant ou porteur d'une idée de SaaS B2B qui sait décrire le problème mais ne sait pas s'il peut fabriquer seul un premier produit avec un générateur d'application
Situation déclenchante : des démonstrations promettent une application publiable en quelques minutes, tandis qu'un devis d'agence paraît beaucoup plus élevé ; le lecteur ne sait pas si les deux livrables sont comparables
Décision principale après lecture : prototyper seul sans données réelles, prototyper avec une revue professionnelle, confier la construction dès le départ, ou reporter parce que le problème et le premier acheteur ne sont pas assez validés
Niveau de connaissance au départ : a vu des vidéos de génération d'application, mais distingue mal écran convaincant, produit exploitable, code, données, comptes, sécurité et maintenance
5 questions indispensables : que doit prouver la première version ? quelles données et quels risques comporte-t-elle ? qui possède les comptes, le dépôt et le domaine ? peut-on tester deux utilisateurs séparés, exporter puis restaurer les données et revenir en arrière ? qui corrigera et exploitera le produit après le lancement ?
3 objections ou craintes : « une agence va surdimensionner mon idée » ; « l'IA peut tout faire pour quelques euros » ; « si je commence seul, personne ne pourra reprendre le code »
Action utile sans contact commercial : écrire une page de scénario fictif sans donnée sensible et faire passer le même test de huit preuves aux options envisagées
CTA possible : faire cadrer la voie la moins risquée pour tester le SaaS
Hors périmètre : tutoriel détaillé d'un outil, benchmark non exécuté, reprise d'un MVP existant, promesse de production-ready, conseil juridique personnalisé, sélection par le seul prix des crédits
Date de la recherche : 23 juillet 2026
Responsable de la synthèse : agent de recherche Apps/SaaS
```

## 1 bis. Contrat de langage humain

- Phrase exacte que le lecteur pourrait dire au téléphone : « J'ai une idée de
  SaaS : est-ce que je peux la lancer avec Lovable, Bolt ou v0, ou est-ce qu'il
  me faut une agence dès le départ ? »
- Réponse attendue en une phrase : utilisez un générateur pour apprendre vite
  avec un scénario fictif et limité ; demandez une revue ou une construction
  accompagnée dès que le test engage des comptes clients, des données réelles,
  des paiements, des droits sensibles ou une exploitation dont vous devrez
  répondre.
- Terme central expliqué sans jargon : un prototype montre une idée ; un
  produit exploitable doit aussi protéger les données, isoler les clients,
  supporter les erreurs, être maintenu et pouvoir être repris.
- Mots ordinaires : idée, premier client, écran, compte, données, paiement,
  erreur, sauvegarde, domaine, code, coût, maintenance, reprise.
- Jargon à éviter ou traduire : vibe coding, backend, RLS, CI/CD, tenant,
  observability, vendor lock-in, production-ready, prompt engineering.
- Projet des 150 premiers mots : confronter le « lien publié en dix minutes »
  à la question « qui répond quand un client perd l'accès ? », puis donner les
  quatre chemins sans mépriser l'outil ni vendre l'agence.
- Ce que le lecteur saura décider après ces 150 mots : si son prochain pas est
  un prototype sans données, une revue, une construction accompagnée ou un
  retour à la validation du besoin.
- H2 relus isolément : réalisé en P2 puis confirmé en P3.
- Comparaison comprise à 390 px : cartes verticales contrôlées en P4.
- FAQ dont la première phrase répond : contrôlée en P4.
- CTA formulé comme résultat : « Choisir la voie la moins risquée pour tester
  mon SaaS ».

### Test sujet, action, résultat

| Phrase initiale à éviter | Qui agit ? | Action concrète | Résultat pour le lecteur | Phrase réécrite |
| ------------------------ | ---------- | --------------- | ------------------------ | --------------- |
| « La maturité du projet détermine l'approche. » | Le porteur du projet | Liste acheteur, donnée, paiement, criticité et responsable d'exploitation | Il choisit un niveau d'accompagnement | « Nommez le premier acheteur, les données manipulées et la personne qui corrigera le produit : vous saurez jusqu'où construire seul. » |
| « La sécurité doit être validée. » | Deux utilisateurs de test et un relecteur compétent | Tentent d'accéder aux données l'un de l'autre et relisent les règles d'accès | Une fuite évidente est détectée avant publication | « Créez deux comptes fictifs : chacun ne doit voir que ses propres données, puis faites relire la règle qui l'impose. » |
| « La réversibilité est importante. » | Le propriétaire du projet | Synchronise le code dans un dépôt, exporte les données et restaure une version | Il sait ce qu'un repreneur récupérera | « Prouvez que vous pouvez récupérer le code, les données et une version qui redémarre hors de la démonstration. » |
| « Une agence apporte de la robustesse. » | L'équipe de réalisation | Documente, teste, déploie, surveille et corrige | Le dirigeant connaît les responsabilités achetées | « Comparez les responsabilités réellement prises, pas seulement le nombre d'écrans livrés. » |
| « L'outil accélère le time-to-market. » | Le porteur de projet | Chronomètre un test identique jusqu'à une preuve définie | Il mesure une étape utile, pas une promesse marketing | « Mesurez le temps jusqu'à un test réussi avec deux comptes et un export, pas jusqu'au premier bel écran. » |

### Test de l'ouverture

- [x] situation vécue avant la méthode ;
- [x] SaaS, prototype, dépôt de code et données réelles définis au premier usage ;
- [x] aucun lexique avant la réponse ;
- [x] aucune métaphore structurante ;
- [x] réponse franche avec limites proportionnées.

## 2. Cannibalisation

| Page existante | Intention de cette page | Différence du nouveau guide | Lien ou arbitrage nécessaire |
| -------------- | ----------------------- | --------------------------- | ---------------------------- |
| `/guides/reprendre-mvp-vibe-code` | Auditer un MVP Lovable, Bolt ou v0 déjà créé et décider garder, stabiliser, migrer ou réécrire | Choisir l'outil et le niveau d'accompagnement avant toute construction | Lien de sortie pour le lecteur qui possède déjà un prototype ; ne reprendre aucun audit de reprise complet |
| `/guides/mvp-prototype-ou-poc` | Choisir ce qu'il faut construire pour lever une incertitude | Choisir qui et avec quel cadre construit le test | Lier pour clarifier l'objet du test |
| `/guides/mvp-saas-quoi-inclure` | Définir le minimum fonctionnel du premier produit | Comparer une fabrication autonome, revue ou accompagnée | Ne pas recopier la liste du MVP |
| `/guides/agence-saas-ou-freelance` | Choisir entre deux formes de prestataire | Compare générateur autonome et accompagnement professionnel | Lier seulement après avoir décidé qu'un professionnel est nécessaire |
| `/guides/no-code-ou-sur-mesure` | Choix générique no-code/sur-mesure | Porte sur trois générateurs IA nommés et la preuve d'exploitation d'un SaaS | Éviter la matrice générique de technologie |
| `/services/saas-applications-metier` | Présentation commerciale | Guide pouvant recommander de prototyper seul ou de reporter | CTA tardif et mauvais fit visible |

**Justification d'une URL distincte :** elle répond au choix de mode de
construction avant le premier prototype, là où les pages voisines choisissent
le type de test, le prestataire ou la manière de reprendre un prototype déjà
existant.

## 3. Demande et vocabulaire du lecteur

Les recherches observées le 23 juillet 2026 mélangent « Lovable vs Bolt vs
v0 », « meilleur AI app builder », « créer un SaaS avec Lovable » et « agence
développement SaaS ». Les résultats sont surtout des comparaisons de
fournisseurs, vidéos, billets affiliés et pages en anglais. La question
commerciale française « puis-je vendre et assumer ce produit ? » reste moins
bien traitée.

Variantes utiles : `Lovable ou Bolt`, `v0 ou Lovable`, `créer SaaS avec IA`,
`application Lovable production`, `agence pour reprendre Lovable`,
`développer SaaS avec v0`, `Bolt pour SaaS`, `code généré par IA`.

Formulations de dirigeant : « Est-ce que je pourrai le vendre ? », « Qui
possède le code ? », « Que se passe-t-il si l'outil change ? », « Est-ce qu'une
agence pourra reprendre ? », « Puis-je mettre les données d'un client ? ».

Search Console et Keyword Planner non accessibles : aucun volume, difficulté
ou potentiel de classement n'est avancé. Observation SERP datée uniquement.

## 4. Carte concurrentielle

| Page | Réponse et angle | Preuves/artefacts | Bon point | Manque décisionnel | Conflit d'intérêt |
| ---- | ---------------- | ----------------- | --------- | ------------------ | ----------------- |
| Lovable — comparaison Lovable/Bolt/v0 | Tableau de fonctions favorable à Lovable | Capacités annoncées | Source utile sur sa propre offre | Pas une évaluation indépendante, ni une décision agence/autonomie | Éditeur |
| Documentation Lovable | Construire, publier, sécuriser et gérer l'accès | Procédures et limites | Faits techniques vérifiables | Ne répond pas à la responsabilité globale d'un SaaS vendu | Éditeur |
| Documentation Bolt | Base, audit de sécurité, exports | Procédures produit | Rend certaines limites visibles | Ne compare ni coût d'exploitation ni accompagnement | Éditeur |
| Documentation v0/Vercel | Génération, projet, déploiement, sécurité et termes IA | Docs et clauses | Conditions d'usage primaires | Ne constitue pas un audit d'une application produite | Éditeur |
| Comparatifs et vidéos | Désignent un « meilleur outil » | Captures, prompts, parfois chronométrage | Montrent rapidement l'interface | Prompt, périmètre, données et critères changent ; reprise rarement testée | Affiliation/sponsoring possibles |
| Agences SaaS | Recommandent une équipe | Méthode, portefeuille | Font apparaître exploitation et maintenance | Peuvent minimiser l'utilité d'un prototype autonome | Vendeur de service |

**Angle mort commun :** la plupart mesurent le temps jusqu'au premier écran et
non jusqu'à huit preuves identiques : dépôt, déploiement reproductible, deux
comptes isolés, export/restauration, secrets, erreur, retour arrière et
responsabilité d'exploitation.

**Valeur originale :** protocole reproductible sans donnée réelle, quatre
chemins possibles et conclusion honnête « ne construisez pas encore ».

## 5. Fiche de preuves

| Affirmation utilisable | Source primaire, URL et passage utile | Nature | Périmètre | Date/consultation | Confiance | Lien visible | Conséquence lecteur | Fraîcheur |
| ---------------------- | ------------------------------------- | ------ | --------- | ----------------- | --------- | ------------ | ------------------- | --------- |
| Lovable permet de décrire, générer, prévisualiser et publier une application ; son démarrage recommande un exemple sans connexion ni base pour réduire ce qui peut mal fonctionner | [Lovable — Quick start](https://docs.lovable.dev/introduction/getting-started) | Documentation fournisseur | Exemple d'entrée, pas preuve d'exploitation SaaS | 23 juillet 2026 | Élevée sur la fonction | Au premier usage de Lovable | Commencer avec données fictives et preuve limitée | Mensuelle |
| Une publication Lovable est un snapshot ; les mises à jour ne passent en ligne qu'après nouvelle publication | [Lovable — Publish](https://docs.lovable.dev/features/publish) | Documentation fournisseur | Hébergement Lovable | 23 juillet 2026 | Élevée | Partie déploiement | Tester la différence prévisualisation/production et le retour arrière | Mensuelle |
| Sur les offres Free/Pro décrites, toute personne ayant le lien peut voir l'application publiée ; les restrictions d'accès dépendent du plan | [Lovable — Publish, access control](https://docs.lovable.dev/features/publish) | Documentation fournisseur | Plans en vigueur au jour consulté | 23 juillet 2026 | Élevée | À côté du risque de publication | Ne pas traiter un lien difficile à deviner comme un espace privé | Mensuelle |
| Les résultats d'analyse de sécurité Lovable doivent être revus et les findings ne bloquent pas toujours la publication | [Lovable — Security overview](https://docs.lovable.dev/features/security) et [Publish](https://docs.lovable.dev/features/publish) | Documentation fournisseur | Scanners Lovable ; pas audit exhaustif | 23 juillet 2026 | Élevée | Partie sécurité | Un bouton « scan réussi » ne suffit pas à déclarer le produit sûr | Mensuelle |
| Bolt documente un audit de sécurité de base et des contrôles liés aux permissions de base de données | [Bolt — Database security](https://support.bolt.new/cloud/database/security) | Documentation fournisseur | Bases compatibles et offre courante | 23 juillet 2026 | Élevée | Partie test de deux comptes | Vérifier réellement les règles d'accès et les fonctions dépendantes du plan | Mensuelle |
| Bolt permet l'export manuel de tables en CSV ou JSON | [Bolt — Database tables](https://support.bolt.new/cloud/database/tables) | Documentation fournisseur | Tables ; pas restauration complète | 23 juillet 2026 | Élevée | Partie sortie | Distinguer export de tables et reprise exploitable du produit | Mensuelle |
| Bolt indique qu'il n'existe pas actuellement de flux pris en charge pour certaines migrations Supabase vers Bolt Database | [Bolt — Database FAQs](https://support.bolt.new/cloud/database/troubleshoot-db) | Documentation fournisseur | Migration citée, susceptible d'évoluer | 23 juillet 2026 | Élevée | Partie portabilité | Vérifier la direction exacte de migration avant de choisir | Mensuelle |
| Les conditions IA Vercel indiquent que les sorties peuvent être incorrectes, incomplètes ou inadaptées et doivent être examinées ; elles encadrent aussi l'envoi de données sensibles | [Vercel — AI Product Terms](https://vercel.com/legal/ai-product-terms) | Conditions contractuelles fournisseur | Produits IA Vercel concernés | 23 juillet 2026 ; version 2026 | Élevée juridiquement, pas conseil personnalisé | Près du protocole de prompt | Ne pas envoyer de données sensibles et faire relire le résultat | À chaque modification |
| Les conditions générales Vercel distinguent les règles relatives au contenu et aux offres | [Vercel — Terms of Service](https://vercel.com/legal/terms) | Conditions contractuelles | Compte et plan concernés | 23 juillet 2026 ; version 2026 | Élevée | Partie comptes/propriété | Lire les termes du plan et garder les comptes au nom de l'entreprise | À chaque modification |

### Contradictions et données à ne pas publier

- Aucun « meilleur outil » sans test réellement exécuté, environnement propre,
  version, plan, prompt, date et résultats reproductibles.
- « Publié » ne signifie ni sécurisé, ni maintenable, ni prêt à vendre.
- Un scanner ne remplace pas une revue du code, des accès et de l'architecture.
- Ne jamais entrer de vraies données clients, secrets, pièces confidentielles
  ou données sensibles dans le benchmark.
- Ne pas affirmer que le code est automatiquement portable : tester dépôt,
  dépendances, base, secrets, fonctions serveur, domaine et démarrage.
- Ne pas présenter l'agence comme garantie de réussite ni le générateur comme
  solution bon marché par nature.
- Les prix, crédits, visibilité et fonctions dépendent des offres et doivent
  être datés ; aucun chiffre n'est nécessaire à la décision P1.
- Les affirmations fournisseur sur rapidité et propriété ne sont pas des preuves
  indépendantes de qualité du produit obtenu.

### Calculs reproductibles

- Nature : coût d'un test puis coût total estimatif sur 12 et 36 mois ; aucun
  ROI.
- Formule : `coût = abonnements/crédits + temps du porteur + revue +
  développement complémentaire + hébergement/services + support + maintenance
  + incidents + reprise/exit`.
- L'unité de comparaison est une preuve obtenue, pas un écran généré.
- Temps valorisé seulement avec coût horaire explicite ; aucune heure gagnée
  supposée.
- Postes inconnus : consommation future, trafic, modèle IA, remédiation de
  sécurité, paiement, emails, observabilité, sauvegarde, assistance.
- Contrôle inverse : total mensuel × période + postes ponctuels ; scénario bas,
  central et haut clairement nommés « estimations éditoriales » si utilisés.

## 6. Empreinte éditoriale à ne pas reproduire

| Guide | Ouverture | Progression | Artefact | Exemple | CTA | Conclusion |
| ----- | --------- | ----------- | -------- | ------- | --- | ---------- |
| `reprendre-mvp-vibe-code` | Un prototype existe | Audit build/données/comptes puis verdict | Test de reprise | MVP existant | Audit | Garder/migrer/réécrire |
| `mvp-prototype-ou-poc` | Incertitude de projet | Choisir la bonne preuve | Matrice | Projet fictif | Cadrage | Quel objet construire |
| `no-code-ou-sur-mesure` | Duel technologique | Avantages/limites/coûts | Tableau | Cas fictif | Fin | Choix de méthode |
| `agence-saas-ou-freelance` | Choix d'équipe | Profils et responsabilités | Comparaison | Mission type | Fin | Choix prestataire |

```text
Tension : « Un lien qui fonctionne suffit-il pour demander de l'argent à un client ? »
Ouverture : le même écran montré en démonstration puis la première panne client
Progression : risque du premier usage → quatre chemins → huit preuves → comptes/données → coût/responsabilité → décision
Artefact signature : protocole des huit preuves, non un classement
Voix : curieuse et concrète, sans moquerie envers le dirigeant qui teste seul
CTA : après le protocole et le mauvais fit
Conclusion : prochain test de 90 minutes avec données fictives ou décision d'arrêter
Différences : choix avant prototype ; aucun résultat inventé ; responsabilité d'exploitation ; test identique ; option de ne pas construire
```

## 7. Plan annoté

| Section provisoire | Question résolue | Preuve ou exemple | Conséquence/décision | Format |
| ------------------ | ---------------- | ----------------- | -------------------- | ------ |
| Le lien fonctionne ; êtes-vous prêt à avoir un client ? | Pourquoi le premier écran ne tranche-t-il pas ? | Scène simple | Définir la preuve attendue | Ouverture |
| La réponse en quatre chemins | Qui doit construire maintenant ? | Risque et maturité | Seul, avec revue, accompagné, report | Cartes |
| Commencez par la question à prouver | Que doit apprendre le MVP ? | Premier acheteur et décision | Éviter le produit complet | Questions |
| Faites passer huit preuves identiques | Comment comparer honnêtement ? | Dépôt, déploiement, deux comptes, export/restauration, secrets, erreur, rollback, propriétaire | Refuser le classement marketing | Protocole |
| Gardez les données réelles hors du test | Que peut-on saisir ? | Conditions et prudence | Utiliser un jeu fictif | Encadré |
| Nommez tous les comptes et responsabilités | Qui possède et qui corrige ? | Domaine, dépôt, hébergeur, base, email, paiement | Préparer la reprise | Carte de propriété |
| Comparez un mois 1 et un mois 13 | Quel coût est oublié ? | Maintenance et incidents | Choisir une responsabilité, pas seulement un outil | Chronologie |
| Décidez selon quatre profils | Quelle voie vous correspond ? | Conditions observables | Verdict | Cartes |
| Votre test de cette semaine | Que faire sans agence ? | Brief fictif | Apprendre sans s'exposer | Action |
| Bon fit, mauvais fit, FAQ | Quand demander de l'aide ? | Cas limites | CTA loyal | Encadrés |

### Scénario dirigeant prévu

**Exemple illustratif fictif :** un consultant veut vendre un SaaS de suivi
d'audits. Il teste avec deux sociétés fictives, sans nom réel ni document
client. Si le prototype ne sépare pas leurs données ou ne redémarre pas depuis
un dépôt maîtrisé, il ne le vend pas ; il peut néanmoins conserver ce prototype
comme support de discussion avec ses premiers prospects.

### FAQ prévue

- Peut-on vendre un SaaS construit avec Lovable ou Bolt ?
- Le code généré m'appartient-il et puis-je le récupérer ?
- Une agence peut-elle reprendre un projet Lovable, Bolt ou v0 ?
- v0 fait-il la même chose que Lovable et Bolt ?
- Quand peut-on utiliser de vraies données ?
- Un scan de sécurité suffit-il avant la mise en ligne ?

## 8. Ressource et conversion

```text
Ressource nécessaire : oui, si le protocole est réellement construit et testé
Problème résolu : comparer des livrables identiques au lieu de comparer des vidéos
Résultat autonome : choix argumenté entre prototype seul, revue, agence ou report
Formats : document éditable + fiche PDF ; aucun téléchargement annoncé avant QA
Champs : objectif d'apprentissage, jeu fictif, version/plan, dépôt, déploiement, deux comptes, export/restauration, secrets, erreur, rollback, comptes propriétaires, coût et résultat
Exemple rempli : SaaS fictif de suivi d'audits
Conclusion « ne pas investir » : oui
Données : fictives uniquement ; aucune collecte par Hagnéré Code nécessaire
QA : exécuter le protocole dans un environnement propre avant de publier un résultat ; captures datées ; relecture sécurité
Limites : un petit test ne certifie ni sécurité ni capacité à monter en charge
Maintenance : revue mensuelle des liens pendant la rédaction puis trimestrielle
Bon fit : comptes clients, droits complexes, paiements, données sensibles, intégrations, engagement de service ou besoin de reprise
Mauvais fit : maquette jetable, validation d'interface sans données ni utilisateur réel
Action autonome : écrire le brief fictif et passer les huit preuves
CTA : « Choisir la voie la moins risquée pour tester mon SaaS » vers /demarrer-un-projet
```

## 9. Rapport P1 — Recherche

```text
PASSE 1 TERMINÉE
Slug : lovable-bolt-v0-ou-agence-saas
Lecteur et phrase réelle : porteur de SaaS — « Je peux lancer avec Lovable, Bolt ou v0, ou il me faut une agence ? »
Décision : prototype seul, prototype revu, construction accompagnée ou report
Angle et forme dominante : huit preuves identiques avant toute comparaison d'outil
Pages proches et différence : choix avant construction ; la reprise vibe code intervient après l'existence d'un MVP
Sources décisives : docs Lovable et Bolt ; conditions IA et générales Vercel
Incertitudes exclues : meilleur outil, sécurité certifiée, portabilité automatique, prix futur, rapidité ou rentabilité garanties
Action autonome et CTA : brief fictif + protocole ; choisir la voie la moins risquée
Plan : scène, chemins, preuve, protocole, données, propriété, coût, verdict, action, FAQ
Snapshot : dossier P1 courant ; manifeste à produire par l'orchestrateur
```

## 10. Historique P1 — portes prévues le 23 juillet 2026

> État conservé pour la traçabilité : P2, P3 et P4 restaient à exécuter à la
> clôture de P1. Elles ont été terminées le 24 juillet 2026 ; voir section 12.

- P2 devait rédiger et intégrer sans publier de benchmark non exécuté.
- P3 devait vérifier indépendamment les limites juridiques et techniques des
  trois produits.
- P4 devait contrôler la plume, les cinq largeurs, les thèmes, les liens, la
  console, l’image sociale et l’autorisation.

## 11. Historique P1 — revue préparatoire

> Cette photographie du 23 juillet 2026 est remplacée, pour le verdict courant,
> par la validation finale de la section 12.

| Critère | État P1 | Condition finale |
| ------- | ------- | ---------------- |
| Décision | Validée | Réponse dans les 150 premiers mots |
| Pédagogie | Contractualisée | Lecteur non technique comprend écran versus produit |
| Comparaison | Protocole défini | Même brief, version, plan et preuves |
| Preuves | Primaires et datées | Réouverture P2/P3 |
| Juridique/sécurité | Limites explicites | Spécialiste requis selon données et usage |
| Conversion | Loyale | Action autonome et option de report |
| Test humain | Non réalisé | À déclarer ou réaliser |
| Rendu/SEO technique | Non créé | Contrôle P4 obligatoire |

- État historique P1 — contre-audit indépendant : non réalisé.
- État historique P1 — page, ressource, métadonnées, schémas et image sociale :
  non créés à ce stade.
- État historique P1 — publication : hors périmètre de cette première passe.

## 12. Validation finale P2, P3 et P4 — 24 juillet 2026

### Rapport P2 — Rédaction et intégration

- Article complet intégré sur `/guides/lovable-bolt-v0-ou-agence-saas`, avec
  ouverture destinée au dirigeant, comparaison loyale, sources visibles,
  exemples fictifs signalés, limites, FAQ, maillage et CTA unique.
- Métadonnées, données structurées `Article` et `BreadcrumbList`, image sociale
  dédiée et inscription au registre des guides contrôlées.
- Snapshot :
  `docs/research/manifests/lovable-bolt-v0-ou-agence-saas-p2.sha256`.

### Rapport P3 — Contre-audits et corrections

- `final_audit_apps` : contre-audit indépendant du fond, des sources, des
  comparaisons, des limites produit et de la pédagogie dirigeant.
- `anti_ia_final` : passe de plume humaine, suppression des formulations
  mécaniques et vérification de la réponse dans l'ouverture.
- `seo_tech_final` : contrôle indépendant de l'intégration SEO et technique.
- Les corrections P3 ont été appliquées puis relues ; aucun P0 ni P1 ne reste.
- Snapshot :
  `docs/research/manifests/lovable-bolt-v0-ou-agence-saas-p3.sha256`.

### Rapport P4 — Contrôle final du lot

- 55 tests ciblés, `check:seo` 228, suite générale 453, TypeScript, ESLint et
  `diff-check` : validés.
- Build : 159 pages générées.
- Audit d'artefact : 143 URLs, 126 liens, 143 pages, 101 temps de lecture et
  274 blocs JSON-LD contrôlés.
- Navigateur réel : 10 routes × 5 largeurs = 50 contrôles, thèmes clair et
  sombre compris.
- Images sociales : 10/10 au format 1200 × 630.
- Snapshot P4 :
  `docs/research/manifests/lovable-bolt-v0-ou-agence-saas-p4.sha256`.

### Verdict

**Score final : 19/20.** Le fond, la pédagogie, les preuves, la comparaison, la
conversion et l'intégration sont validés. Un point reste volontairement retiré
car aucun lecteur humain réel indépendant n'a participé au test final.

Statut actuel : publiable — validation éditoriale déléguée

Décision de publication : autorisée explicitement par le commanditaire

Test réalisé par une personne réelle : non

Réserve SEO : la page est techniquement indexable ; indexable ne signifie pas
indexée par Google, et aucune indexation effective ni position n'est promise.
