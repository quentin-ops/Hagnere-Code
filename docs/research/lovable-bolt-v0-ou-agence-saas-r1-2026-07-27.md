# Recherche contradictoire R1 — `lovable-bolt-v0-ou-agence-saas`

Date de gel : **27 juillet 2026**  
Objet : refonte premium du guide « Lovable, Bolt, v0 ou agence »  
Périmètre : décision avant le premier client, faits produits datés, droits,
portabilité, preuves de production, coût économique et limites méthodologiques

## 1. Point de départ

Trois audits froids et indépendants ont relu le snapshot antérieur :

| Axe | Note initiale | P0 | P1 | P2 |
|---|---:|---:|---:|---:|
| Faits et sources internationales | 70/100 | 0 | 6 | 5 |
| Intention, pédagogie et concurrence | 68/100 | 4 | 7 | 5 |
| Technique et économie | 56/100 | 4 | 6 | 5 |

Les catégories P0 n’étaient pas homogènes entre les auditeurs : l’audit
factuel réservait P0 à une erreur dangereuse, tandis que les audits UX et
technique l’utilisaient aussi pour un manque structurel empêchant la promesse
premium. Le diagnostic commun était néanmoins net :

- l’ouverture « un lien publié n’est pas encore un SaaS exploitable » était à
  conserver ;
- la page ne donnait pas encore de verdict réellement utilisable par profil ;
- elle ne comparait pas les options sur un même résultat ;
- aucun TCO à 12, 36 et 60 mois n’était calculé ;
- les preuves n’étaient ni saisissables, ni datées, ni contre-validées ;
- plusieurs faits produits avaient évolué depuis le snapshot précédent ;
- l’ancien score interne de 19/20 ne pouvait plus servir de preuve de qualité.

Le présent dossier remplace ce faux vert pour la révision R1. Le dossier
historique reste conservé comme trace du snapshot antérieur.

## 2. Intention exacte et frontière éditoriale

Le guide doit permettre au lecteur de choisir entre quatre sorties :

1. ne pas construire tant que le besoin ou le premier acheteur reste flou ;
2. créer une démonstration jetable avec des données fictives ;
3. ajouter une revue indépendante pour un prototype ou pilote limité ;
4. nommer une équipe responsable — interne, agence ou hybride — lorsqu’un
   client, des données, un paiement ou une activité dépendent du produit.

Il ne doit pas :

- désigner un « meilleur outil » universel ;
- laisser croire qu’un abonnement et une agence livrent la même chose ;
- transformer une affirmation fournisseur en preuve indépendante ;
- annoncer un benchmark que Hagnéré Code n’a pas exécuté ;
- assimiler dépôt, ZIP, export de tables ou rollback du code à une sortie
  complète ;
- utiliser le coût apparent pour compenser un livrable ou une preuve manquante.

## 3. Recherche mondiale et concurrence

### Sources de marché examinées

Les comparatifs internationaux de Publorai, DesignRevision et TechRadar
montrent généralement :

- un verdict rapide par outil ;
- des captures d’interface ;
- un même prompt ou un même type de mini-produit ;
- un temps de génération et parfois un prix ;
- un tableau de fonctionnalités.

Ils sont utiles pour comprendre le vocabulaire de la requête, mais insuffisants
comme preuve de production : un essai unique, une version vite dépassée, des
critères opaques, un éventuel lien d’affiliation et l’absence de test de
restauration ou de reprise limitent la portée du verdict.

### Plafond méthodologique

Le préprint [SWE-WebDevBench](https://arxiv.org/abs/2605.04637) a été retenu
comme source de méthode, pas comme classement. Il combine exigences
fonctionnelles cachées, métriques produit et ingénierie, modifications après
génération et contrôle de plusieurs dimensions. Son échantillon, ses
affiliations et l’absence de résultat Bolt directement comparable interdisent
d’en déduire un vainqueur universel.

### Angle retenu

L’avantage éditorial recherché n’est pas d’être plus spectaculaire qu’un test
affilié. Il est d’être plus vérifiable :

- même besoin et mêmes responsabilités ;
- inconnues conservées en `ND` ;
- preuve datée, environnement, propriétaire et relecteur distinct ;
- coûts calculés uniquement lorsque les deux options sont qualifiées ;
- contradiction officielle visible ;
- option explicite de ne pas construire.

## 4. Matrice des sources primaires

Toutes les sources ci-dessous ont été rouvertes le **27 juillet 2026**.

| Sujet | Source primaire | Fait retenu | Limite publiée dans le guide |
|---|---|---|---|
| Pile Lovable | [FAQ Lovable](https://docs.lovable.dev/introduction/faq) | Les nouvelles applications créées depuis le 13 mai 2026 utilisent TanStack Start avec SSR ; les plus anciennes restent React/Vite | La pile doit être vérifiée sur le projet réel |
| Propriété et sortie Lovable | [Deployment, hosting and ownership](https://docs.lovable.dev/tips-tricks/deployment-hosting-ownership) | Git et le frontend peuvent être repris ; quitter le backend géré impose des services équivalents pour auth, stockage, fonctions et données | Déplacer le frontend ne prouve pas une sortie complète |
| Git Lovable | [GitHub integration](https://docs.lovable.dev/integrations/github) | Une synchronisation Git est documentée | Le dépôt ne contient pas tous les comptes, secrets et services |
| Sécurité Lovable | [Security](https://docs.lovable.dev/features/security) | Les contrôles automatisés ont des limites et ne remplacent pas une revue | Un scanner vert n’est jamais une qualification de l’application |
| Données Lovable | [DPA Lovable](https://lovable.dev/data-processing-agreement) | Un cadre de traitement des données est publié | Applicabilité, plan, sous-traitants et usage réel restent à vérifier |
| Usage commercial Bolt | [Commercial use](https://support.bolt.new/account-and-subscription/corporate-commercial) | La documentation affirme que le code créé peut être exploité commercialement | Cette affirmation entre en tension avec les conditions StackBlitz |
| Conditions Bolt/StackBlitz | [StackBlitz Terms of Service](https://stackblitz.com/terms-of-service) | Les conditions consultées le 27 juillet 2026 affichent une dernière mise à jour au 10 janvier 2024 et réservent l’usage commercial des Services à certains plans professionnels | Droit conditionnel au plan, à la date et à la confirmation applicable au compte |
| Projet Bolt | [Projects and files](https://support.bolt.new/building/using-bolt/projects-files) | Le projet peut être téléchargé et les ressources suivent des règles distinctes | ZIP, base, domaine et intégrations ne forment pas un transfert automatique |
| Retour arrière Bolt | [Rollback and backup](https://support.bolt.new/building/using-bolt/rollback-backup) | Restaurer une version du projet ne restaure ni Bolt Database ni Supabase | Le code et les données exigent deux procédures |
| Prix Bolt | [Pricing](https://bolt.new/pricing) | Pro à 25 $/mois et Teams à 30 $/membre/mois sur la page consultée | Prix datés, hors taxes, change, consommation et coût humain |
| Pile v0 | [Full-stack apps](https://v0.app/docs/full-stack-apps) | v0 documente Next.js, routes serveur et plusieurs intégrations de données | L’architecture finale reste sous la responsabilité du projet |
| Code v0 | [GitHub](https://v0.app/docs/github) | Après connexion, le dépôt GitHub devient la source de vérité du code | Le code n’emporte pas tous les objets du projet Vercel |
| Projet v0 | [Projects](https://v0.app/docs/projects) | Un projet conserve déploiements, domaines, variables et intégrations | Ces éléments doivent être inventoriés et transférés séparément |
| Prix v0 | [Pricing](https://v0.app/docs/pricing) | Team à 30 $/utilisateur/mois, Business à 100 $, ancien Premium à 20 $ annoncé en extinction | Prix datés ; crédits, modèles et contexte font varier le coût |
| Conditions IA v0 | [Vercel AI Product Terms](https://vercel.com/legal/ai-product-terms) | Les sorties peuvent être erronées, non uniques ou toucher des droits tiers ; une revue humaine est requise | Propriété annoncée ne signifie ni exactitude ni absence de droits tiers |
| Développement sécurisé | [NIST SSDF 1.1](https://csrc.nist.gov/pubs/sp/800/218/final) | Cadre de pratiques de développement sécurisé | Cadre méthodologique, pas certification du guide ou d’un outil |

## 5. Contradictions conservées

### Lovable : pile ancienne et pile nouvelle

La documentation générique de portabilité parle encore de projets
React/Vite, tandis que la FAQ distingue désormais :

- applications créées avant le 13 mai 2026 : React/Vite ;
- nouvelles applications : TanStack Start avec rendu serveur.

La page ne tranche donc pas artificiellement. Elle date la distinction et
demande de vérifier la pile du dépôt réel.

### Bolt : documentation commerciale et conditions de service

La page d’aide Bolt annonce un usage commercial possible pour tout code créé.
Les conditions StackBlitz publiées réservent toutefois l’usage commercial de
ses Services à Teams/Enterprise. Le guide :

- n’écrit plus « oui » sans réserve ;
- distingue le code, le service, le plan et les droits de tiers ;
- recommande une confirmation écrite applicable au compte avant la vente.

### v0 : code et projet complet

Le dépôt GitHub est présenté comme source de vérité du code. Déploiements,
domaines, variables et intégrations demeurent néanmoins liés au projet. Le
guide refuse donc de présenter le dépôt seul comme une preuve de reprise.

## 6. Protocole commun conçu pour la page

Le cas entièrement fictif Alba/Noro décrit le même mini-SaaS B2B :

- deux sociétés isolées ;
- trois rôles ;
- mêmes contraintes de données, erreurs et exploitation ;
- trois répétitions recommandées par outil ;
- même plafond de temps et de corrections ;
- douze portes de preuve.

Les douze portes couvrent :

1. clone, installation propre, build de production et tests ;
2. dépendances, licences, provenance et composants tiers ;
3. deux sociétés et tentatives d’accès interdites ;
4. secrets hors code et rotation testée ;
5. export puis restauration du schéma, des données et des fichiers ;
6. sortie des identités et réinitialisation ;
7. rollback du code séparé de la restauration des données ;
8. paiement, webhooks, remboursements, e-mails et rebonds ;
9. alerte et exercice d’incident chronométré ;
10. charge, appareils, navigateurs et accessibilité ;
11. transfert des comptes, domaine et second administrateur ;
12. reprise et publication par une seconde personne.

Hagnéré Code n’a pas exécuté ce banc d’essai dans cette révision. La page
l’écrit explicitement et ne publie ni score fournisseur, ni faux temps mesuré,
ni dépôt présenté comme preuve.

## 7. Coût économique

Le modèle sépare :

```text
construction =
  crédits et abonnements
+ temps interne
+ conception, développement et revue externes

exploitation(H) =
  H × (services + support interne + maintenance technique)
+ audits et exercices annuels

TCO(H) = construction + exploitation(H) + sortie
```

Deux scénarios fictifs servent uniquement à vérifier le calcul :

| Scénario | Construction | Run annuel | Sortie | 12 mois | 36 mois | 60 mois |
|---|---:|---:|---:|---:|---:|---:|
| Builder + revue | 15 000 € | 14 760 € | 3 600 € | 33 360 € | 62 880 € | 92 400 € |
| Équipe accompagnante | 28 350 € | 19 320 € | 4 500 € | 52 170 € | 90 810 € | 129 450 € |

Ces montants ne sont ni des tarifs Hagnéré Code, ni des prix de marché, ni une
conclusion d’achat. Dans l’outil, les agrégats restent `ND` tant qu’une ligne
de périmètre, une preuve ou un coût requis manque.

## 8. Garde-fous implémentés

Le moteur pur `saas-build-path-decision-r1-2026-07-27` impose :

- quatorze lignes de responsabilité pour chaque option ;
- douze preuves avec statut, date, environnement, propriétaire, relecteur
  indépendant, référence et note ;
- refus d’une preuve datée dans le futur par rapport à la décision ;
- refus d’un constructeur qui s’auto-valide ;
- refus d’une date de décision ou de test postérieure au jour du contrôle ;
- refus des `N/A` incompatibles avec le contexte ;
- référence d’au moins huit caractères pour tout livrable déclaré ;
- maintien des champs vides, négatifs ou non finis en `ND` ;
- blocage d’un verdict économique lorsqu’une option n’est pas qualifiée ;
- aucune sauvegarde automatique et aucun envoi de données ;
- copie locale et impression du dossier avec la preuve commerciale, les onze
  hypothèses brutes et le motif des preuves invalides ;
- export JSON local versionné et réimportable, limité à 512 Ko ;
- import reconstruit depuis une liste blanche : version, énumérations, longueur
  des chaînes et coûts finis non négatifs sont contrôlés avant application ;
- les 79 champs texte rendus sont limités à 500 caractères, chaque saisie TCO
  à 10¹² et l’export refuse tout état que son propre importeur ne relirait pas.

Les tests couvrent notamment les faux verts suivants :

- formulaire vide ;
- isolation déclarée non applicable avec plusieurs organisations ;
- paiement déclaré non applicable alors qu’il est présent ;
- dépôt ou ZIP sans build de production ;
- rollback code sans restauration des données ;
- export sans restauration ;
- preuve future, sans environnement, sans responsable ou sans relecteur ;
- coût manquant traité à tort comme zéro ;
- échec critique masqué par une moyenne ;
- dossier JSON surdimensionné, de mauvaise version, avec statut inconnu ou coût
  négatif.

## 9. Fraîcheur et prochaine revue

Les capacités, offres et conditions changent rapidement. La page affiche :

- date de vérification : **27 juillet 2026** ;
- prochaine revue recommandée : **27 août 2026** ;
- déclenchement anticipé si prix, pile, droits commerciaux, hébergement,
  portabilité ou traitement des données changent.

## 10. Frontière de preuve

Cette recherche et la page permettent une décision conditionnelle mieux
documentée. Elles ne prouvent pas :

- que Hagnéré Code a exécuté le benchmark ;
- qu’un outil est meilleur dans tous les cas ;
- qu’une application générée est sécurisée ou conforme ;
- qu’un résultat sera premier sur Google ;
- que le snapshot local est publié, déployé ou indexé.
