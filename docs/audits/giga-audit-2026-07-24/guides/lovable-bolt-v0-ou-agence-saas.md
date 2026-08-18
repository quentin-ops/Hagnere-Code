# Giga-audit — Lovable, Bolt, v0 ou agence SaaS

## Fiche d’identité

- **Guide audité :** `/guides/lovable-bolt-v0-ou-agence-saas`
- **Fichier relu intégralement :** `src/app/guides/lovable-bolt-v0-ou-agence-saas/page.tsx`
- **Date de l’audit :** 24 juillet 2026
- **Périmètre :** intention de recherche, comparaison produit, préparation à la production, preuves, coûts, sécurité, conversion et risques
- **Statut :** audit seulement ; aucune réécriture publique réalisée dans ce dossier
- **Intention principale observée :** aider un porteur de projet à décider s’il peut construire seul son premier SaaS ou s’il doit faire relire ou accompagner le développement

> **Référence du score :** version intégralement lue au démarrage de l’audit. Le score est un état initial ; il devra être recalculé après toute réécriture concurrente et stabilisation du guide.

## Verdict exécutif

Le guide actuel possède une bonne thèse : un lien public n’est pas encore un SaaS exploitable. Les huit preuves — dépôt, déploiement reproductible, séparation de clients, restauration, secrets, erreurs, retour arrière et propriété des comptes — sont pertinentes et concrètes.

Mais il esquive la moitié la plus recherchée de la requête : **quel outil choisir et combien chaque voie coûte réellement jusqu’au même niveau de résultat ?** Le tableau Lovable/Bolt/v0/agence reste descriptif. Il n’existe ni protocole réellement exécuté, ni captures de résultats, ni score outil par outil, ni estimation du travail humain après génération, ni comparaison de coût à périmètre constant.

Le lecteur repart avec une bonne liste de prudence, mais pas encore avec une décision nette entre :

- générer une maquette ;
- générer puis faire auditer ;
- faire produire un MVP exploitable ;
- confier tout ou partie du produit à une agence ;
- abandonner ou retarder la construction.

La future version doit devenir un **test de passage du prototype au produit**, pas un nouveau comparatif de fonctions déclarées par les éditeurs.

## Score officiel — 10 axes

| Axe | Note /10 | Preuve présente dans le guide | Manque qui bloque la référence |
|---|---:|---|---|
| Intention | 7 | Répond à « puis-je vendre ce prototype ou faut-il une agence ? » | Répond insuffisamment à « lequel de Lovable, Bolt ou v0 choisir ? » |
| Décision | 7 | Quatre niveaux : seul, revue, accompagné, reporter | Verdict outil par profil trop discret et aucune décision issue d’un test |
| Pédagogie | 9 | Démonstration/exploitation et huit preuves très compréhensibles | Production, contrats et propriété intellectuelle restent peu illustrés |
| Profondeur | 7 | Données, comptes, reprise, sécurité et mois 13 couverts | Tests, performance, observabilité, paiement, licences et support incomplets |
| Preuve | 5 | Nombreuses sources primaires datées | Aucun outil réellement construit, cassé, repris et chronométré |
| Comparaison | 5 | Tableau descriptif des quatre voies | Aucun coût à périmètre constant, score ni résultat reproductible |
| Originalité | 8 | Les huit preuves identiques forment une bonne méthode propriétaire | La méthode n’est pas matérialisée par un kit ou un benchmark public |
| Style | 8 | Ton humain, responsable et non alarmiste | Manque quelques opinions mémorables et exemples vécus |
| Conversion | 7 | CTA honnête vers prototype, revue ou accompagnement | Aucune ressource immédiate ni démonstration visible de la revue proposée |
| SEO / produit | 7 | Requête actuelle, FAQ, liens et entités fortes | Alternatives, coûts, benchmark et requêtes de reprise à élargir |
| **Total officiel** | **70/100** | **Très bonne doctrine de prudence** | **Comparatif non démontré et valeur chiffrée trop faible** |

**Cible officielle : 94/100**, avec aucun axe sous 8/10. Dépasser ce niveau exige un benchmark propriétaire répété, avec dépôts, résultats, temps et limites auditables.

## Diagnostic pondéré secondaire

| Dimension | Poids | Score actuel | Diagnostic |
|---|---:|---:|---|
| Réponse à l’intention de recherche | 15 | 10 | Très bon sur « quand se faire accompagner », incomplet sur « quel outil choisir » |
| Pédagogie pour un fondateur non technique | 15 | 13 | Claire, responsable et lisible |
| Profondeur produit et exploitation | 20 | 13 | Huit preuves utiles, manque observabilité, tests, performance, facturation et cycle de livraison |
| Faits, sources et actualité | 15 | 12 | Bonne base primaire, marché très mouvant et quelques formulations déjà à enrichir |
| Comparaison concrète | 15 | 8 | Tableau descriptif sans banc d’essai ni résultat mesuré |
| Exemples et calculs | 10 | 3 | Exemple narratif, quasiment aucun calcul |
| Opinion professionnelle | 5 | 3 | Position prudente, verdict outil trop peu assumé |
| Conversion honnête | 5 | 4 | CTA cohérent, aucune ressource irrésistible ni preuve de savoir-faire |
| **Total secondaire** | **100** | **66/100** | **Bonne doctrine de prudence, comparatif encore insuffisant** |

Ce second calcul conserve l’ancienne pondération pour comparaison interne ; le score officiel du chantier est celui des dix axes ci-dessus.

## Promesse actuelle

Le guide défend cinq idées :

1. générer seul ce qui peut rester fictif et jetable ;
2. faire relire dès que comptes, base ou intégration apparaissent ;
3. accompagner dès le départ si données sensibles, paiement ou engagement client sont présents ;
4. tester la reprise et l’exploitation, pas seulement l’écran ;
5. choisir le niveau de responsabilité avant de choisir l’outil.

Cette doctrine est saine. Elle doit rester l’ossature éditoriale.

## Forces à préserver

- L’ouverture parle du passage du lien qui fonctionne au premier client qui dépend du service.
- La distinction démonstration/exploitation est immédiatement compréhensible.
- Les huit preuves forment un bon test de maturité.
- Le guide ne présente pas un scan automatique comme une garantie de sécurité.
- Il rappelle que code, données, domaine, e-mails et paiement peuvent appartenir à des comptes différents.
- Il reconnaît la possibilité de jeter le prototype.
- Il met la séparation des clients au centre, ce qui est essentiel pour un SaaS B2B.
- Il distingue code exportable et système réellement redémarrable.
- Les informations produit sont datées et proviennent majoritairement des documentations officielles.
- Le CTA peut aboutir à « ne développez pas encore ».

## Cartographie de la concurrence

### Échantillon de la SERP francophone

L’échantillon correspond aux résultats retrouvés le 24 juillet 2026. Il ne constitue pas une mesure stable des positions Google.

| Ressource | Ce qu’elle couvre | Limite observée | Opportunité |
|---|---|---|---|
| [BMAD France — Lovable vs Bolt vs v0](https://bmad.fr/blog/lovable-vs-bolt-vs-v0-comparatif-2026) | Cible directement la requête française et promet un comparatif « ultime » | Contenu difficile à extraire lors de l’audit ; crédibilité à confirmer par protocole et sources | Gagner avec une méthodologie visible et des fichiers de preuve |
| [Lovable — comparaison Lovable/Bolt/v0](https://lovable.dev/guides/lovable-vs-bolt-vs-v0) | Tableau immédiat, positionnement clair des trois produits | Comparatif écrit par l’un des concurrents ; avantages Lovable nécessairement mis en avant | Citer comme discours éditeur, jamais comme arbitre |
| [TechRadar — test de Lovable](https://www.techradar.com/pro/software-services/lovable-review) | Décrit une prise en main réelle, le backend et les formules tarifaires | Test d’un seul produit, tarifs volatils, profondeur technique limitée | Ajouter un protocole identique sur les trois outils |
| [DesignRevision — test de quatre builders](https://designrevision.com/blog/forge-vs-bolt-vs-lovable-vs-v0-comparison) | Même mini-SaaS, critères pondérés, coût et décision par profil | L’éditeur promeut aussi son propre outil Forge ; certaines affirmations sur v0 vieillissent vite | Reprendre l’idée du même brief, publier le dépôt et les limites |

### Ressources internationales

La recherche a interrogé séparément des résultats des États-Unis, du Royaume-Uni, du Canada et d’Australie. Une page britannique candidate a bien été trouvée, mais son contenu éditorial n’était pas accessible à l’extraction lors de l’audit ; aucune affirmation n’en a donc été reprise. Cette absence de source britannique exploitable est documentée plutôt que compensée par une source faible. La ressource canadienne est conservée comme exemple de contenu concurrent déjà périmé sur v0, pas comme source de vérité produit.

| Pays / ressource | Apport distinctif | Prudence |
|---|---|---|
| Australie — [Devwiz, Lovable/Bolt/v0](https://www.devwiz.com.au/2025/06/18/lovable-bolt-and-v0-ai-app-builders-compared/) | Opinion tranchée par profil et passage du prototype à la production | Son affirmation « v0 n’est pas full-stack » est désormais dépassée par la documentation officielle |
| Australie — [VibeZero, comparaison pour PME](https://www.vibe0.com.au/blog/lovable-vs-bolt-vs-base44) | Met en avant RLS, secrets, résidence des données et revue humaine | Scores de sécurité propriétaires non suffisamment documentés pour être repris comme benchmark |
| Canada — [ChatGPT.ca, Lovable pricing Canada](https://chatgpt.ca/blog/lovable-pricing-canada) | Répond aux objections locales de devise, de frais de change, de crédits et compare brièvement Lovable, Bolt et v0 | Présente encore v0 comme centré frontend et publie des consommations de crédits sans protocole reproductible ; ne pas reprendre ses chiffres ni son verdict sans vérification primaire |
| Royaume-Uni — [Alex Christou, comparaison Bolt/v0/Lovable](https://www.alexchristou.co.uk/posts/comparing-ai-design-tools-bolt-v0-lovable) | Candidat britannique directement aligné sur la requête | Page rendue côté client sans contenu éditorial extractible pendant l’audit ; source répertoriée mais volontairement exclue des constats factuels |
| International — [SWE-WebDevBench](https://arxiv.org/abs/2605.04637) | Cadre académique à 68 métriques ; observe spécification compressée, frontend/backend décorrélés, falaise de production et faiblesses de sécurité | Échantillon limité ; les auteurs demandent eux-mêmes une réplication plus large |
| États-Unis — [Vercel, v0 full-stack](https://v0.dev/docs/full-stack-apps) | Source primaire : Next.js par défaut, routes serveur, bases et intégrations | Décrit les capacités, pas la qualité du résultat pour un projet donné |
| Suède / international — [Lovable, portabilité](https://docs.lovable.dev/tips-tricks/deployment-hosting-ownership) | Détaille code, données, hébergement, backend et sortie | Discours éditeur ; certaines migrations demandent de reconstruire des services équivalents |
| États-Unis — [Bolt, gestion et transfert des projets](https://support.bolt.new/building/using-bolt/projects-files) | Explique téléchargement, transfert, domaine, GitHub et duplication | Une archive de code et un transfert de projet ne constituent pas une reprise complète |
| États-Unis — [Vercel, sécurité et conformité](https://vercel.com/docs/security/compliance) | SOC 2, ISO 27001, chiffrement, sauvegardes d’infrastructure et responsabilité partagée | La conformité de la plateforme ne vaut pas conformité de l’application générée |

## Ce que la concurrence fait mieux

1. **Elle prononce un vainqueur par profil.** Même lorsqu’il est discutable, le verdict est mémorable.
2. **Elle affiche les prix d’entrée.** Cela répond à l’anxiété immédiate du fondateur.
3. **Elle montre un test identique.** Authentification, tableau de bord, paramètres et paiement sur le même brief.
4. **Elle compare le temps jusqu’au premier résultat.**
5. **Elle parle de qualité de code et de difficulté de reprise.**
6. **Elle montre des captures, prompts, dépôts ou écrans.**
7. **Elle inclut d’autres options : Replit, Cursor/Claude Code, Base44, Bubble ou un développeur indépendant.**

Le guide Hagnéré Code est plus responsable que beaucoup de concurrents, mais sa prudence ne compense pas l’absence de preuves visibles.

## Ce que la concurrence simplifie ou affirme à tort

- Plusieurs articles de 2025 présentent encore v0 comme un simple générateur de composants. La [documentation actuelle de v0](https://v0.dev/docs/full-stack-apps) décrit désormais des applications full-stack, des routes serveur et des intégrations de données.
- Le problème n’est pas limité aux contenus anciens : la page canadienne datée d’avril 2026 présente encore v0 comme « frontend focused ». C’est précisément pourquoi toute matrice produit doit afficher sa date de vérification et relier chaque capacité volatile à une documentation officielle.
- « Code exportable » est souvent traduit abusivement en « aucun verrouillage ». Quitter le cloud géré oblige à reprendre déploiement, secrets, auth, stockage, sauvegardes et observabilité.
- Les scores de sécurité publiés par certaines agences ne donnent pas toujours taille d’échantillon, corpus, outil de scan ni procédure de validation humaine.
- Les prix mensuels de génération ne représentent pas le coût jusqu’à une version exploitable.
- « Production-ready » est un terme marketing non défini. Le futur guide doit le remplacer par des critères testables.

## Axes absents ou insuffisants

### 1. Aucun résultat réel des huit tests

Le protocole est décrit, mais jamais appliqué. Le lecteur a besoin de savoir :

- quel brief a été envoyé ;
- combien de générations ont été nécessaires ;
- combien de temps humain a été consacré ;
- quels tests ont échoué ;
- quelles corrections ont consommé des crédits ;
- si le code a compilé hors plateforme ;
- si la base a été exportée et restaurée ;
- si le deuxième tenant a pu accéder à une donnée interdite ;
- si une autre personne a repris le dépôt.

Sans test, l’article reste une grille de conseil.

### 2. Le coût est presque absent

Comparer :

- abonnement ou crédits de génération ;
- temps du fondateur ;
- temps de revue ;
- correction et stabilisation ;
- services tiers ;
- hébergement ;
- tests ;
- surveillance ;
- maintenance ;
- support client ;
- sortie ou réécriture.

L’agence ne doit pas être comparée au seul abonnement du builder, mais au coût jusqu’au même résultat exploitable.

### 3. L’agence est une boîte noire

Toutes les agences ne livrent pas la même chose. Décomposer :

- product discovery ;
- UX/UI ;
- architecture ;
- développement ;
- tests ;
- sécurité ;
- DevOps ;
- gestion de projet ;
- documentation ;
- maintenance ;
- disponibilité et responsabilité contractuelles.

Un freelance, un studio produit, une agence généraliste et une équipe intégrée n’ont ni le même coût ni la même couverture.

### 4. Les trois outils ont évolué

Il faut éviter des catégories figées :

- Lovable dispose d’un cloud géré, d’un backend, de scans et de synchronisation Git ;
- Bolt dispose d’un backend géré, d’un export de projet, de transferts et d’options de déploiement ;
- v0 sait désormais construire des projets full-stack Next.js et connecter des services.

Le guide doit dater chaque capacité et publier une date de prochain contrôle.

### 5. Les critères de production sont incomplets

Ajouter :

- tests automatisés et couverture critique ;
- migrations de schéma ;
- environnements développement/préproduction/production ;
- journaux et alertes ;
- objectifs de reprise RTO/RPO ;
- performance sous charge ;
- accessibilité ;
- compatibilité navigateurs et mobile ;
- délivrabilité e-mail ;
- paiements, remboursements et webhooks ;
- quotas et protection contre abus ;
- support et procédure d’incident ;
- inventaire des dépendances et licences ;
- suppression d’un tenant ;
- traçabilité administrative.

### 6. Le produit et le marché sont insuffisamment liés

Le meilleur code ne valide pas :

- qui paie ;
- la fréquence du problème ;
- le canal d’acquisition ;
- le prix acceptable ;
- le coût de support ;
- le taux d’activation ;
- la rétention.

Le guide doit montrer que le choix du builder ne précède pas la validation de la demande.

### 7. Les alternatives manquent

Ajouter sans diluer le sujet :

- Replit Agent pour environnement intégré ;
- Cursor/Claude Code pour équipe capable de relire du code ;
- Bubble pour logique no-code structurée mais verrouillage différent ;
- Base44 pour approche gérée ;
- Supabase/Firebase Studio pour projets centrés backend ;
- freelance ou tech lead à temps partiel ;
- kit hybride : builder + dépôt + revue + maintenance.

### 8. La propriété intellectuelle est trop résumée

Il faut distinguer :

- droits sur le code généré selon les conditions ;
- droits sur prompts, maquettes et contenus fournis ;
- licences des dépendances ;
- composants copiés ou inspirés ;
- marques, images et données d’entraînement ;
- code spécifique créé par l’agence ;
- droit de réutilisation des briques génériques ;
- preuve de provenance.

## Faits à actualiser ou préciser

| Sujet | Fait vérifié le 24 juillet 2026 | Conséquence éditoriale |
|---|---|---|
| Lovable et portabilité | La [documentation de portabilité](https://docs.lovable.dev/tips-tricks/deployment-hosting-ownership) indique code exportable/synchronisable, données migrables et stack Vite/React ; elle précise aussi les responsabilités reprises hors cloud et les dépendances aux services Supabase équivalents | Remplacer « redémarre ailleurs » par un test séparé frontend, auth, stockage, fonctions et données |
| Lovable Git | La [synchronisation GitHub](https://docs.lovable.dev/integrations/github) est bidirectionnelle ; le téléchargement direct du code est présenté comme disponible sur plans payants | Tester les droits du dépôt, les branches et la reprise par un second compte |
| Lovable sécurité | La [documentation sécurité](https://docs.lovable.dev/features/security) distingue scan basique et scan profond et rappelle que les RLS mal configurées exposent des données | Dire explicitement qu’un scan signale des motifs, mais ne prouve pas l’autorisation métier |
| Bolt export/transfert | Bolt documente le [téléchargement, le transfert et les limites associées](https://support.bolt.new/building/using-bolt/projects-files), notamment domaine et intégrations | Ajouter un test de transfert de propriétaire et de domaine, pas seulement un ZIP |
| Bolt données | L’[export par table](https://support.bolt.new/cloud/database/tables) existe en CSV/JSON ; la duplication peut copier la structure sans les données | Tester schéma, relations, auth, fichiers et restauration complète |
| v0 full-stack | La [documentation v0](https://v0.dev/docs/full-stack-apps) confirme Next.js, backend, API et intégrations de bases | Supprimer toute formule qui présenterait v0 comme uniquement UI ; préciser qu’il reste orienté stack Vercel/Next.js |
| v0 sécurité/compte | La [documentation Vercel](https://vercel.com/docs/security/compliance) décrit la conformité de la plateforme et un modèle de responsabilité partagée | Ne jamais transférer une certification de l’hébergeur à l’application |
| Données d’entraînement | Vercel a publié en 2026 des [changements de conditions et mécanismes d’opt-out](https://vercel.com/changelog/updates-to-terms-of-service-march-2026) | Ajouter une vérification contractuelle des réglages de données au jour du projet |
| Benchmark scientifique | [SWE-WebDevBench](https://arxiv.org/abs/2605.04637) observe, dans son échantillon, qu’aucune plateforme ne dépasse 60 % d’ingénierie ni 65 % de sécurité | Citer avec sa limite d’échantillon et ne pas le transformer en score propre aux trois produits |

## Comparatif concret à ajouter

### Brief identique

Créer une application fictive de suivi d’audits B2B avec :

- deux entreprises clientes ;
- trois rôles : administrateur SaaS, responsable client, collaborateur ;
- connexion et réinitialisation du mot de passe ;
- liste d’audits filtrable ;
- création et assignation ;
- pièce jointe fictive ;
- commentaire ;
- export CSV ;
- suppression d’un utilisateur ;
- journal d’administration ;
- page d’abonnement fictive sans vraie carte ;
- e-mail de notification dans un bac à sable.

### Protocole

1. même spécification initiale ;
2. même durée maximale ;
3. même nombre de cycles de correction ;
4. mêmes données fictives ;
5. dépôt appartenant au testeur ;
6. aucune correction manuelle cachée ;
7. journal du temps humain ;
8. coût des crédits et services ;
9. tests fonctionnels et de sécurité identiques ;
10. revue finale par une personne qui n’a pas généré le projet.

### Grille à publier

| Groupe | Mesures | Poids |
|---|---|---:|
| Compréhension du besoin | exigences respectées, hypothèses inventées, questions posées | 10 |
| Fonctionnel | parcours réussi et erreurs visibles | 15 |
| Isolation des tenants | accès autorisés/interdits, suppression | 15 |
| Code | build, structure, dépendances, tests, lisibilité | 10 |
| Données | schéma, migrations, export, restauration, fichiers | 10 |
| Déploiement | environnements, secrets, rollback, domaine | 10 |
| Exploitation | logs, alertes, sauvegardes, incident | 10 |
| Performance/accessibilité | charge raisonnable, clavier, mobile | 5 |
| Reprise | second développeur, dépôt, documentation, comptes | 10 |
| Coût/temps | jusqu’au même niveau de preuve | 5 |

Publier le prompt, le commit, la date, le plan, les corrections manuelles et les limites. Sinon, ne pas appeler cela un benchmark.

## Exemples chiffrés reproductibles à ajouter

Tous les chiffres suivants sont **fictifs et pédagogiques**. Ils ne décrivent ni un tarif de marché ni une proposition Hagnéré Code.

### Exemple 1 — le coût réel du prototype autonome

Hypothèses fictives :

- abonnement builder : 40 €/mois pendant 2 mois ;
- 85 h du fondateur ;
- valeur interne du temps : 55 €/h ;
- revue technique : 3 jours à 850 €/jour ;
- corrections : 5 jours à 850 €/jour ;
- services tiers : 120 €/mois pendant 2 mois.

```text
Builder : 40 × 2 = 80 €
Temps fondateur : 85 × 55 = 4 675 €
Revue : 3 × 850 = 2 550 €
Corrections : 5 × 850 = 4 250 €
Services : 120 × 2 = 240 €

Coût jusqu’à la version relue = 11 795 €
```

Le prix du builder représente ici moins de 1 % du coût complet fictif.

### Exemple 2 — comparer prototype + reprise et agence dès le départ

Hypothèses fictives :

- voie générée puis reprise : 11 795 € ci-dessus + 20 jours de stabilisation à 850 € ;
- voie agence : 32 jours à 850 € + 4 000 € de design et cadrage ;
- les deux arrivent au même périmètre testable.

```text
Généré puis repris : 11 795 + (20 × 850) = 28 795 €
Agence : (32 × 850) + 4 000 = 31 200 €
Écart = 2 405 €
```

Le générateur reste moins cher dans cet exemple, mais l’écart est trop faible pour décider sans comparer délai, risque et apprentissage.

### Exemple 3 — décider s’il faut sauver ou réécrire

Hypothèses fictives :

- audit : 4 jours à 850 € ;
- remise à niveau de la base existante : 18 jours ;
- réécriture du même périmètre : 38 jours ;
- documentation et migration identiques : 6 jours.

```text
Sauver : (4 + 18 + 6) × 850 = 23 800 €
Réécrire : (4 + 38 + 6) × 850 = 40 800 €
Écart = 17 000 €
```

La décision change si la reprise laisse une dette estimée supérieure à cet écart. Le guide doit expliciter les défauts qui déclenchent la réécriture : architecture incohérente, isolation impossible à garantir, dépendances abandonnées ou absence de migrations fiables.

### Exemple 4 — test d’isolation des clients

Jeu fictif :

- 2 entreprises ;
- 5 utilisateurs chacune ;
- 20 audits chacune ;
- 4 rôles ;
- 12 tentatives d’accès interdit.

Mesure :

```text
Taux d’échec d’autorisation =
accès interdits ayant réussi / tentatives interdites

Si 1 accès réussit : 1 / 12 = 8,3 %
```

Le seuil acceptable n’est pas « inférieur à 1 % » : il est **zéro accès interdit réussi** sur le test. Un résultat nul ne prouve toutefois pas l’absence de vulnérabilité.

### Exemple 5 — coût d’exploitation sur 36 mois

Hypothèses fictives :

- hébergement et services : 260 €/mois ;
- surveillance/support : 8 h/mois à 85 €/h ;
- maintenance préventive : 2 jours/trimestre à 850 €/jour ;
- audit annuel : 4 000 € ;
- exercice de restauration annuel : 2 jours à 850 €.

```text
Services : 260 × 36 = 9 360 €
Support : 8 × 85 × 36 = 24 480 €
Maintenance : 2 × 4 × 3 × 850 = 20 400 €
Audits : 4 000 × 3 = 12 000 €
Restaurations : 2 × 850 × 3 = 5 100 €

Run 36 mois = 71 340 €
```

Ce calcul n’inclut aucune nouvelle fonctionnalité ni incident majeur.

## Objections et cas limites à traiter

### « J’ai déjà trois clients prêts à payer »

Valider la demande est positif, mais augmente la responsabilité. Séparer un pilote limité d’un service contractuel et écrire données, disponibilité, support, sortie et limites.

### « Le builder dit production-ready »

Exiger la définition : charge, restauration, RLS, secrets, monitoring, tests, support et objectifs de disponibilité. Un adjectif marketing n’est pas un critère de recette.

### « Je possède le code, donc je suis libre »

Vérifier aussi base, fichiers, auth, domaine, e-mails, paiement, variables, historique de déploiement, observabilité et compétences nécessaires à l’exploitation.

### « Une agence est trop chère »

Comparer au même résultat. Une maquette et un produit exploitable n’ont pas le même périmètre. L’agence peut aussi être surdimensionnée pour un test d’interface jetable.

### « Je suis développeur, je n’ai pas besoin de revue »

La revue indépendante reste utile pour autorisations, sécurité, UX, exploitation et biais du constructeur. Son périmètre peut toutefois être plus ciblé.

### « Mon SaaS ne contient pas de données sensibles »

Identifiants, journaux, e-mails, IP ou données métier peuvent déjà être personnels ou confidentiels. Faire un inventaire réel.

### « Je veux une application mobile native »

Lovable/v0/Bolt sont principalement comparés ici pour le web. Expo ou une PWA ne remplace pas automatiquement les exigences iOS/Android, notifications, mode hors ligne et publication en stores.

### « Mon client exige SSO, audit logs et hébergement privé »

Ces contraintes peuvent imposer des plans Enterprise ou une architecture extérieure. Les vérifier avant le prototype, car elles peuvent invalider la voie choisie.

### « Je traiterai les paiements plus tard »

La facturation implique webhooks, essais, taxes, remboursement, échec de paiement, rapprochement et support. Prévoir le modèle tôt sans nécessairement l’implémenter dans le prototype.

## Opinion professionnelle tranchée, mais conditionnelle

Position éditoriale recommandée :

> **Lovable, Bolt et v0 sont d’excellents accélérateurs de preuve, pas des remplaçants automatiques d’une équipe responsable du produit.** Pour une maquette, un outil interne à faible risque ou un test avec données fictives, commencer par une agence est souvent une dépense prématurée.
> **Dès qu’un client paie et dépend du service, la question n’est plus “l’IA peut-elle coder ?”, mais “qui garantit les accès, les données, les corrections et la reprise ?”.** À ce stade, une revue professionnelle est le minimum ; une construction accompagnée devient rationnelle si le produit porte du paiement, des données sensibles, une logique métier complexe ou un engagement de disponibilité.

Verdict par outil à assumer, sous réserve de test daté :

- **Lovable :** premier choix probable pour un fondateur non technique voulant un prototype web full-stack guidé, à condition de vérifier strictement RLS et sortie.
- **Bolt :** premier choix probable pour un profil plus technique voulant explorer plusieurs stacks et manipuler le code dans le navigateur.
- **v0 :** premier choix probable pour une équipe déjà alignée sur Next.js/Vercel et qui veut accélérer UI et construction full-stack dans cet écosystème.
- **Agence :** premier choix lorsque le risque et la responsabilité existent dès la première version, pas lorsque le besoin reste hypothétique.
- **Aucun développement :** meilleur choix si aucun acheteur n’a confirmé un problème coûteux.

Ces verdicts doivent être présentés comme une opinion d’expert datée, pas comme une supériorité absolue.

## Ressources et outils à créer

### 1. Banc d’essai public

- brief versionné ;
- données fictives ;
- prompts ;
- dépôts ou snapshots autorisés ;
- grille des 68 à 100 contrôles ;
- coût et temps ;
- corrections manuelles ;
- verdict daté.

### 2. Calculateur « prototype ou produit »

Entrées :

- heures du fondateur ;
- crédits ;
- services ;
- revue ;
- corrections ;
- hébergement ;
- support ;
- maintenance ;
- exigences client.

Sorties :

- coût mois 1, mois 13 et 36 mois ;
- niveau de risque ;
- option recommandée ;
- hypothèses imprimables.

### 3. Pack de tests multi-tenant

- deux tenants fictifs ;
- matrice de rôles ;
- tentatives autorisées et interdites ;
- suppression ;
- export ;
- réinitialisation de mot de passe ;
- fichier factice ;
- procédure de résultat.

### 4. Checklist de reprise d’un builder

Code, build, dépendances, secrets, base, schéma, auth, stockage, domaine, e-mails, paiement, logs, alertes, sauvegarde, restauration, documentation et transfert des comptes.

### 5. Modèle de cahier de recette avant premier client

Critères fonctionnels, sécurité, performance, accessibilité, RGPD, support, incident, réversibilité et acceptation formelle.

## Proposition de nouveau plan

1. **Réponse immédiate : builder pour prouver, équipe responsable pour exploiter**
2. **Ce que vous achetez vraiment avec Lovable, Bolt, v0 et une agence**
3. **Verdict par profil de fondateur et niveau de risque**
4. **Le même mini-SaaS construit quatre fois : protocole, prompts et limites**
5. **Résultats fonctionnels, temps, crédits et corrections**
6. **Qualité du code : build, tests, dépendances et dette**
7. **Deux clients séparés : le test d’autorisation qui ne tolère aucun échec**
8. **Code exportable contre produit réellement portable**
9. **Mois 1, mois 13 et coût sur 36 mois**
10. **Ce qu’une agence doit réellement inclure**
11. **Paiement, e-mails, fichiers, monitoring : les angles oubliés du prototype**
12. **Quand sauver, stabiliser ou réécrire une base générée**
13. **Données, RGPD, contrats et licences**
14. **Alternatives : Replit, Cursor/Claude Code, Bubble, Base44, freelance**
15. **Décision finale selon dix scénarios**
16. **Plan d’action et ressources téléchargeables**
17. **Sources datées, méthodologie et prochain contrôle**

Alterner comparaison, démonstration, calcul, récit d’incident et décision. Éviter une suite monotone de checklists.

## Risques juridiques et commerciaux

### Juridiques

- Vérifier les conditions de chaque builder à la date d’utilisation : code, contenu, entraînement, confidentialité, sous-traitants et transfert.
- Ne pas introduire de données personnelles ou secrets dans un prompt sans cadre approprié.
- Le SaaS final doit définir responsable de traitement, sous-traitants, finalités, conservation, droits et sécurité.
- Vérifier les licences des dépendances et l’origine des images, polices, textes ou composants.
- Le contrat d’agence doit préciser livrables, droits, comptes, dépendances, documentation, réversibilité et maintenance.
- La certification d’un fournisseur ne couvre pas automatiquement le code ni la configuration du client.
- Pour santé, finance, mineurs, RH ou décision automatisée, demander une analyse juridique et sécurité spécialisée.

### Commerciaux

- Ne pas promettre un SaaS « en un week-end » si le périmètre exploitable n’est pas défini.
- Ne pas faire passer les abonnements des builders pour le coût du produit.
- Ne pas publier un benchmark sans brief, date, plan, temps, crédits et corrections manuelles.
- Déclarer qu’une agence comparant ces outils a intérêt à vendre de l’accompagnement.
- Distinguer preuve d’idée, MVP vendu, produit stable et plateforme réglementée.
- Ne pas inventer de taux de vulnérabilité ou de réussite.

## Priorités de réécriture

### P0 — indispensable

1. exécuter et publier un banc d’essai identique ;
2. ajouter coûts du temps, revue, stabilisation et exploitation ;
3. actualiser le positionnement de v0 full-stack ;
4. décomposer précisément la prestation d’agence ;
5. publier un verdict outil par profil ;
6. enrichir les critères de production.

### P1 — forte valeur

1. créer calculateur et pack multi-tenant ;
2. ajouter alternatives et cas limites ;
3. traiter propriété intellectuelle et licences ;
4. ajouter performance, accessibilité, paiements et support ;
5. montrer une procédure de transfert réelle.

### P2 — avantage défendable

1. répéter le benchmark trimestriellement ;
2. conserver des archives versionnées ;
3. faire relire les résultats par un tiers ;
4. publier un cas autorisé de prototype sauvé et un cas réécrit ;
5. ouvrir la grille à la communauté sans céder le verdict éditorial.

## Critères d’acceptation de la future refonte

- Chaque outil a un verdict par profil, daté et conditionnel.
- Le même brief est testé avec les mêmes données.
- Le temps humain et les corrections sont publiés.
- Aucun score n’est annoncé sans méthodologie.
- Au moins cinq calculs fictifs sont reproductibles.
- v0 n’est plus décrit selon son ancien positionnement uniquement UI.
- Le guide distingue code, frontend, backend, données et exploitation.
- La conformité plateforme n’est jamais présentée comme conformité applicative.
- Le lecteur repart avec une checklist ou un test téléchargeable.
- Le CTA propose revue, accompagnement ou abstention selon le risque.

## Sources primaires et robustes à conserver

- [Lovable — déploiement, hébergement et propriété](https://docs.lovable.dev/tips-tricks/deployment-hosting-ownership)
- [Lovable — synchronisation GitHub](https://docs.lovable.dev/integrations/github)
- [Lovable — sécurité](https://docs.lovable.dev/features/security)
- [Bolt — gestion, export et transfert des projets](https://support.bolt.new/building/using-bolt/projects-files)
- [Bolt — export des tables](https://support.bolt.new/cloud/database/tables)
- [v0 — applications full-stack](https://v0.dev/docs/full-stack-apps)
- [v0 — FAQ et export](https://v0.dev/docs/faqs)
- [Vercel — sécurité et conformité](https://vercel.com/docs/security/compliance)
- [Vercel — protection des déploiements](https://vercel.com/docs/deployment-protection)
- [SWE-WebDevBench — article et méthodologie](https://arxiv.org/abs/2605.04637)

## Conclusion d’audit

Le guide actuel donne la bonne alerte : ne pas confondre démonstration et service. Pour devenir la référence, il faut maintenant fournir ce que les autres pages promettent rarement de façon contrôlable : **le même produit construit, testé, repris et chiffré sur chaque voie**. La future supériorité SEO ne viendra pas d’une nouvelle liste d’avantages, mais d’une preuve propriétaire que le lecteur peut inspecter et reproduire.
