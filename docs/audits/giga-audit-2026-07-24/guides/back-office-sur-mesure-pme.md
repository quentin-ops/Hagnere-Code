# Giga-audit — « Faut-il créer un back-office sur mesure pour sa PME ? »

**Date de l’audit :** 24 juillet 2026  
**Mode :** contre-audit renforcé, lecture seule du guide  
**Route auditée :** `/guides/back-office-sur-mesure-pme`  
**Page SHA-256 :** `a81fb79181236b705cd215609213369a78f7cbdc60249cfdd6040725f45e9e44`  
**Image sociale SHA-256 :** `9c9856c68fc95b15dae8cb0999c595cc313ed656f4629d7f179ece8041259c4a`  
**Recherche SHA-256 :** `654df65e64dc0bce534c00f7e734c09a5855a4d4c73e9439dd1bd06ef38753c7`  
**Registre SHA-256 :** `8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09`  
**Volume source :** 1 142 lignes, environ 4 952 mots dans `page.tsx`  
**Build, navigateur et production :** non relancés dans cette mission. Les anciens contrôles ne valent pas recette du futur snapshot corrigé.

> Ce rapport répond à une question de dirigeant : l’équipe a-t-elle besoin
> d’un écran interne spécifique ou faut-il simplifier le travail, configurer
> l’existant, acheter un logiciel, assembler du low-code/no-code ou attendre ?
> Les scénarios financiers proposés sont des illustrations explicites, jamais
> des tarifs de marché ou des promesses de gain.

## 1. Verdict exécutif

Le guide est déjà très bon sur l’essentiel humain. Il ouvre sur un salarié qui
doit consulter plusieurs outils, définit immédiatement ce qu’est un
back-office, suit un dossier de commande entre commercial, administration et
comptabilité, puis montre le cas normal, la pièce manquante et l’urgence. Le
lecteur comprend pourquoi une interface interne doit servir à **agir**, pas
seulement à regarder un tableau de bord.

L’opinion professionnelle est crédible : le sur-mesure n’est pas la conclusion
obligatoire. La page compare cinq réponses, conseille de tester l’existant,
borne la surveillance des salariés, distingue durée de travail et attente, et
dit qu’une capacité libérée n’est pas automatiquement une économie. Le CTA
reste honnête et peut aboutir à une recommandation de ne pas développer.

Le guide ne permet toutefois pas encore de prendre une décision financière et
opérationnelle complète. Les cinq réponses ne sont jamais chiffrées sur le même
dossier, la formule de gain reste abstraite, aucun TCO 12/36/60 mois n’est
rempli, et aucun produit réel ne montre comment les licences, utilisateurs,
connecteurs, environnements, stockage et support modifient le résultat. Les
intégrations, la continuité, l’accessibilité, la sécurité de production, la
réversibilité et le déploiement auprès des équipes sont cités, mais pas
transformés en critères d’acceptation.

Le dossier de recherche revendique quatre portes validées. Cette conclusion ne
tient pas sous le standard renforcé :

- le benchmark est essentiellement français ;
- les manifestes P2 et P3 portent sur un ancien hash de page ;
- P4 a été attribuée au même propriétaire que la rédaction ;
- la note historique ne couvre pas le cas économique, le benchmark
  international et les portes actuelles ;
- un rapport présent ou un ancien test navigateur ne ferme pas les P1 du
  snapshot corrigé.

**Score actuel : 81/100 — NO-GO au standard renforcé.**

- **P0 : 0** — aucune erreur critique démontrée.
- **P1 : 11** — décision économique, comparabilité, production et gouvernance.
- **P2 : 8** — actifs et angles différenciants pour dépasser 90.

## 2. Scorecard

| Axe | Note /10 | Motif |
| --- | ---: | --- |
| Intention dirigeant | 9 | Situation concrète, question et décision immédiatement visibles. |
| Décision | 9 | Cinq issues honnêtes, y compris attendre et corriger le travail. |
| Pédagogie | 9 | Dossier continu, états, rôles, trois épreuves et vocabulaire courant. |
| Profondeur | 8 | Travail et droits bien traités ; architecture, exploitation et adoption restent incomplètes. |
| Preuve | 8 | CNIL, DesignGouv et Anact solides ; peu de preuves produits et marché. |
| Comparaison | 7 | Bonne structure qualitative, aucun périmètre chiffré commun. |
| Chiffrage | 5 | Une moyenne fictive, pas de baseline, TCO, seuil, sensibilité ou payback. |
| Risques et sortie | 8 | Droits, historique, surveillance et arrêt présents ; continuité et reprise insuffisamment testables. |
| Conversion | 9 | CTA humain, pas de gain/délai garanti, sur-mesure non présupposé. |
| SEO et expérience | 9 | Intention nette, structure et champ lexical utiles ; QA finale à refaire après correction. |
| **Total** | **81/100** | **Onze P1 interdisent la validation actuelle.** |

## 3. Forces à préserver mot pour mot ou dans leur esprit

### Une ouverture qui parle à une personne

- Le problème est « retrouver un dossier et savoir quoi faire », pas
  « accélérer la transformation digitale ».
- Le back-office est traduit en écran interne utile.
- Les premiers paragraphes permettent déjà de distinguer organisation,
  configuration et vrai manque logiciel.
- Aucun préambule d’agence ne retarde la réponse.

### Un scénario pédagogique continu

- Le même dossier passe par trois rôles.
- Les informations nécessaires, états et actions sont séparés.
- La pièce manquante et l’urgence montrent que le chemin heureux ne suffit pas.
- La page rappelle qu’un état doit produire une prochaine action.
- Les critères du premier lot évitent de recréer un ERP entier.

### Une position commerciale responsable

- Simplifier l’existant peut gagner.
- Un module déjà payé peut gagner.
- Le logiciel standard et le no-code sont de vraies options.
- Attendre n’est pas assimilé à ne rien faire.
- Le sur-mesure n’est recommandé que si la spécificité est utile et durable.

### De bons garde-fous humains

- Les comptes nominatifs et habilitations sont contextualisés.
- Les mesures agrégées sont préférées au classement individuel.
- La surveillance permanente n’est pas banalisée.
- L’outil futur doit être joué avec les personnes concernées.
- Temps travaillé, attente, reprise et contournements sont distingués.

## 4. Ce qui manque réellement au lecteur

### 4.1 Une baseline exploitable

Avant de discuter d’une solution, le guide doit faire relever :

- dossiers ouverts, clos, incomplets et rouverts ;
- temps travaillé par rôle et temps d’attente ;
- recherches, ressaisies, relances et corrections ;
- erreurs ayant un coût ou un risque ;
- nombre d’outils et changements de contexte ;
- volume par semaine, saison et pic ;
- coût complet des rôles, sans inventer un taux universel ;
- effets sur facturation, encaissement, délai client ou conformité ;
- part réellement automatisable et part qui doit rester humaine.

La cohorte doit avoir une période, un dénominateur, des exclusions et des
données manquantes explicites.

### 4.2 Une comparaison à périmètre égal

Les cinq solutions doivent recevoir le même dossier canonique :

- 40 utilisateurs internes ;
- trois rôles et cinq actions sensibles ;
- 2 000 dossiers par mois ;
- 15 champs, quatre états, deux exceptions ;
- CRM, ERP/comptabilité et stockage documentaire ;
- import initial de 50 000 dossiers ;
- authentification, journaux, sauvegarde, export et support ;
- objectif de disponibilité et procédure de retour arrière ;
- cinq ans de durée commune.

Sans ce cadre, « logiciel standard » et « sur-mesure » ne vendent pas la même
chose.

### 4.3 Des modèles de licence réels

Une page de référence doit apprendre à lire :

- abonnement par utilisateur ;
- utilisateur actif, nommé ou simultané ;
- application, environnement ou organisation ;
- connecteurs premium et passerelle locale ;
- appels API, stockage, automatisations et historique ;
- créateurs/administrateurs distincts des utilisateurs ;
- authentification/SSO/MFA ;
- support, sauvegarde et rétention ;
- environnement de test et mise en production ;
- export, résiliation et hausse tarifaire.

Au 24 juillet 2026, la page française de Microsoft affichait Power Apps
Premium à 17,30 € HT par utilisateur et par mois, en paiement annuel. Pour 40
utilisateurs, l’ordre de grandeur de la licence seule serait :

```text
40 × 17,30 € = 692 € HT/mois
692 × 12 = 8 304 € HT/an
```

Ce calcul ne couvre ni intégration, Dataverse supplémentaire, migration,
conception, sécurité, support, exploitation, formation ou sortie. Le tarif est
volatil, localisé et soumis au contrat ; il doit être capturé et daté.

Un produit comme Retool ou une autre plateforme d’outils internes doit être
traité de la même manière : édition, utilisateurs, hébergement, SSO,
environnements, connecteurs, quotas, audit logs et support, avec offre
contractuelle plutôt qu’un chiffre marketing isolé.

### 4.4 Les intégrations sont le cœur du coût

Le guide suit le travail, mais ne spécifie pas encore :

- la source maîtresse de chaque donnée ;
- le sens de synchronisation ;
- les identifiants et règles de rapprochement ;
- le mapping et les transformations ;
- le traitement des doublons ;
- l’idempotence des actions ;
- les retries, rejets et corrections ;
- la réconciliation quotidienne ;
- les versions d’API et la dépréciation ;
- l’observabilité et la personne alertée ;
- le mode dégradé et le retour arrière.

Un back-office qui affiche une donnée fausse ou déclenche deux factures peut
coûter plus cher que les quatre outils qu’il remplace.

### 4.5 Les exigences non fonctionnelles restent trop faibles

Le cahier de décision doit préciser :

- disponibilités et périodes critiques ;
- RPO, RTO et test de restauration ;
- performance sur dossier simple et recherche volumique ;
- navigateurs, appareils, réseau et usage à distance ;
- accessibilité clavier, focus, zoom, lecteur d’écran et erreurs ;
- authentification, MFA/SSO selon risque et gestion des sessions ;
- autorisation par rôle, objet et action ;
- secrets, chiffrement, vulnérabilités et mises à jour ;
- journalisation proportionnée et gestion d’incident ;
- sauvegarde, export et reprise par un tiers.

### 4.6 L’adoption doit devenir une décision, pas une intention

Il faut écrire :

- qui participe à la conception ;
- qui possède les règles et les données ;
- qui tranche une exception ;
- qui forme et assiste ;
- quelles tâches restent dans l’ancien outil ;
- durée du double fonctionnement ;
- taux d’usage et taux de contournement ;
- seuil d’erreur ou de reprise ;
- critères d’élargissement, correction ou arrêt ;
- mesure à J+7, J+30, J+90 et J+180.

## 5. Benchmark international

| Zone | Ressource ou famille | Angle visible | Ce que le guide doit dépasser |
| --- | --- | --- | --- |
| France | Agences d’applications métier et France Num | Fonctions, bénéfices, no-code et sur-mesure | Conserver la neutralité et ajouter TCO, seuil et sortie. |
| États-Unis | Retool, guides build/buy d’outils internes | DevOps, sécurité, intégrations, maintenance, plateforme intermédiaire | Appliquer les risques à une PME française avec un cas chiffré. |
| Royaume-Uni | GOV.UK/Defra et guides build/buy | Standardisation des services internes, accessibilité, produit acheté ou construit | Faire de l’accessibilité et de la recette des portes d’acceptation. |
| Australie | Digital NSW, *buy, build or borrow* | Réutiliser, acheter, construire, shadow IT et coût des équipes | Ajouter « réutiliser/emprunter une brique » entre standard et spécifique. |
| Australie | Guides d’agences build/buy 2026 | TCO sur plusieurs années, intégrations et capacité interne | Ne reprendre aucun seuil commercial comme norme ; montrer ses hypothèses. |
| DACH | Guides *Standardsoftware oder Individualsoftware* | Fit, personnalisation, maintenance, migration et fallback | Ajouter remise documentaire, exploitation et reprise comme obligations du devis. |
| Microsoft | Power Apps, source éditeur | Licence par utilisateur, connecteurs, Dataverse, environnement | Montrer que licence et coût total sont deux choses différentes. |

Les pages d’agences servent à détecter des thèmes. Elles ne prouvent pas un
prix moyen, un délai, un ROI ou un taux de réussite.

### Blue oceans à exploiter

1. **Le dossier économique et humain complet**, pas une liste de modules.
2. **Le coût du contournement déplacé** vers une autre équipe.
3. **Le contrôle inverse** : dossiers créés, clos, en attente, annulés et
   inclassables doivent se réconcilier.
4. **La sortie testée** avant la signature.
5. **Le scénario d’arrêt** : une bonne mission peut conclure qu’aucun nouvel
   outil n’est justifié.
6. **L’accessibilité interne** : les salariés ne sont pas des utilisateurs de
   seconde catégorie.

## 6. Exemple économique à intégrer

### Baseline fictive

- 2 000 dossiers mensuels ;
- 7 minutes de recherche/ressaisie par dossier ;
- 6 % rouverts, soit 120 dossiers ;
- 12 minutes de reprise par dossier rouvert ;
- coût complet horaire documenté : 38 € ;
- 40 utilisateurs.

```text
Charge principale = 2 000 × 7 min = 14 000 min = 233,33 h/mois
Charge de reprise = 120 × 12 min = 1 440 min = 24 h/mois
Charge observée = 257,33 h/mois
Valeur de capacité = 257,33 × 38 € = 9 778,54 €/mois
```

Il serait trompeur de présenter 9 778,54 € comme une économie. Le projet ne
supprimera pas toute la charge et une partie est nécessaire.

### Scénario central fictif

Hypothèses après adoption stabilisée :

- 45 % de la recherche/ressaisie évitée ;
- 35 % des reprises évitées ;
- 15 heures mensuelles d’administration et de support ajoutées ;
- coût complet identique pour l’illustration.

```text
Capacité principale rendue = 233,33 × 45 % = 105 h/mois
Capacité de reprise rendue = 24 × 35 % = 8,4 h/mois
Capacité brute rendue = 113,4 h/mois
Capacité nette après administration = 113,4 - 15 = 98,4 h/mois
Valeur de capacité nette = 98,4 × 38 € = 3 739,20 €/mois
Valeur annuelle modélisée = 44 870,40 €
```

La conclusion dépend de la réaffectation réelle, de la qualité, du délai de
facturation, des erreurs évitées et de l’adoption. Afficher séparément :
dépenses évitées, capacité réaffectée, revenu avancé, risque réduit et bénéfice
qualitatif.

### Sensibilité

| Hypothèse | Bas | Central | Haut |
| --- | ---: | ---: | ---: |
| Dossiers/mois | 500 | 2 000 | 5 000 |
| Minutes de friction | 3 | 7 | 12 |
| Part réellement évitée | 20 % | 45 % | 65 % |
| Adoption stabilisée | 40 % | 70 % | 90 % |
| Administration ajoutée | 8 h | 15 h | 30 h |
| Coût complet horaire | 30 € | 38 € | 50 € |

Le guide doit montrer un cas bas où le projet ne rembourse pas son coût et un
cas haut où le retard de décision est lui-même coûteux.

## 7. TCO fictif à 12/36/60 mois

Même périmètre : 40 utilisateurs, 2 000 dossiers/mois, trois rôles, deux
intégrations, import initial, support, sauvegarde, export et environnement de
test. Tous les nombres sont illustratifs.

| Option | Mise en place | Récurrent annuel | 12 mois | 36 mois | 60 mois |
| --- | ---: | ---: | ---: | ---: | ---: |
| Simplifier/configurer l’existant | 8 000 € | 18 000 € | 26 000 € | 62 000 € | 98 000 € |
| Module ou logiciel standard | 20 000 € | 22 000 € | 42 000 € | 86 000 € | 130 000 € |
| Plateforme low-code/no-code | 28 000 € | 24 000 € | 52 000 € | 100 000 € | 148 000 € |
| Back-office spécifique | 72 000 € | 20 000 € | 92 000 € | 132 000 € | 172 000 € |
| Attendre activement | 4 000 € | 30 000 € | 34 000 € | 94 000 € | 154 000 € |

```text
TCO 36 mois = mise en place + 3 × récurrent annuel
TCO 60 mois = mise en place + 5 × récurrent annuel
```

L’option « attendre » comprend ici une charge manuelle fictive ; elle ne doit
pas être gonflée pour faire gagner le développement. Le spécifique coûte plus
cher au départ, mais son écart se réduit si les licences croissent. Le standard
peut gagner largement si le module couvre déjà le flux. Toute différence
fonctionnelle doit être affichée à côté des totaux.

## 8. Matrice de décision attendue

| Critère | Existant | Standard | Plateforme | Spécifique | Attente active |
| --- | --- | --- | --- | --- | --- |
| Couverture du dossier | à tester | à tester | à configurer | à concevoir | processus manuel |
| Délai | court | court/moyen | moyen | moyen/long | immédiat |
| Coût initial | bas | moyen | moyen | haut | bas |
| Coût récurrent | temps interne | licences | licences+run | run+maintenance | friction |
| Intégrations | limitées | natives/API | connecteurs/API | spécifiques | manuelles |
| Accessibilité | à vérifier | à vérifier | à vérifier | à spécifier | dépend des outils |
| Sécurité | existante | fournisseur+config | fournisseur+config | équipe+prestataire | dispersée |
| Réversibilité | faible/moyenne | export éditeur | export+config | code+données+docs | fichiers/processus |
| Compétence interne | métier | admin produit | maker/admin | produit+technique | coordination |
| Signal d’arrêt | contournements | fit insuffisant | dette de connecteurs | TCO/équipe insuffisants | coût/risque croissant |

## 9. P1 bloquants

| ID | Défaut | Correction | Revalidation |
| --- | --- | --- | --- |
| P1-01 | Benchmark international absent du dossier canonique | Ajouter FR/US/UK/AU/DACH, produits, intentions, dates et saturation | Sources rouvertes par P3 |
| P1-02 | Baseline et valeur non remplies | Ajouter cohorte, temps, erreurs, attentes, coût et réaffectation | Recalcul indépendant |
| P1-03 | Cinq options sans cas commun | Fixer rôles, volumes, données, intégrations, support et sortie | Contrôle de parité |
| P1-04 | Aucun TCO 12/36/60 ni seuil | Remplir coûts, récurrences, migration, exploitation et statu quo | Totaux et sensibilités refaits |
| P1-05 | Produits/licences réels absents | Expliquer Power Apps, plateforme, module et spécifique | Prix datés, devis exigés |
| P1-06 | Intégrations non testables | Ajouter source, mapping, idempotence, retry, rejet et réconciliation | Test erreur/doublon/reprise |
| P1-07 | Sécurité et RGPD de production incomplets | Auth, autorisation, sessions, secrets, vulnérabilités, incidents, sous-traitants | Revue spécialisée selon risque |
| P1-08 | Accessibilité absente comme porte | Critères WCAG, clavier, zoom, lecteur d’écran, erreurs | Audit du snapshot corrigé |
| P1-09 | Continuité et sortie trop générales | RPO/RTO, restauration, export, documentation, reprise et suppression | Exercice de restauration/sortie |
| P1-10 | Déploiement et adoption sans seuils | Pilote, double run, support, adoption, contournement, J+7/30/90/180 | Comité go/corriger/stop |
| P1-11 | Anciennes portes P1–P4 non défendables | Refaire P1 puis P2, P3 indépendante et P4 distincte sur snapshot gelé | 0 P0/P1 et score conforme |

## 10. P2 différenciants

1. Pack téléchargeable : carte du dossier, matrice rôles/actions, baseline, TCO
   et scorecard.
2. Exemple de devis comparable avec inclusions, exclusions et inconnues.
3. Cas d’échec : plateforme adoptée à 35 %, ancien tableur maintenu et arrêt du
   pilote.
4. Cas hybride : standard pour le dossier, composant spécifique pour une règle
   différenciante.
5. Glossaire contextuel de huit termes maximum.
6. Déclaration explicite du conflit d’intérêt : Hagnéré Code vend du
   développement spécifique.
7. Calculateur modifiable sans collecte obligatoire.
8. QA complète de la ressource, des tableaux et du CTA à 320–1600 px.

## 11. Sources primaires à ajouter

- [Microsoft France — tarifs Power Apps](https://www.microsoft.com/fr-fr/power-platform/products/power-apps/pricing)
- [Microsoft Learn — FAQ licences Power Platform](https://learn.microsoft.com/fr-fr/power-platform/admin/powerapps-flow-licensing-faq)
- [OWASP — Application Security Verification Standard](https://owasp.org/www-project-application-security-verification-standard/)
- [W3C — WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [Digital NSW — Buy, build or borrow](https://www.digital.nsw.gov.au/delivery/test-and-buy-innovation/innovation-buying-journey/align-your-need-strategy/buy-build-or)
- [Defra — Design des services internes](https://digital.defra.gov.uk/design)
- [Cyber.gov.au — Preventing Web Application Access Control Abuse](https://www.cyber.gov.au/about-us/view-all-content/alerts-and-advisories/preventing-web-application-access-control-abuse)
- [CNIL — Gérer les habilitations](https://www.cnil.fr/fr/securite-gerer-les-habilitations)
- [CNIL — Contrôle de l’activité des personnes employées](https://www.cnil.fr/fr/controle-de-lactivite-des-personnes-employees)
- [Anact — Boîte à outils QVCT et numérique](https://www.anact.fr/sites/default/files/2024-10/boite-a-outils-qvct-numerique.pdf)

Les sources éditeurs prouvent seulement leur tarification et leurs fonctions
déclarées. Les concurrents internationaux servent uniquement à mesurer la
couverture éditoriale.

## 12. État réel des passes

| Passe | Trace historique | État renforcé |
| --- | --- | --- |
| P1 | Dossier présent | **NON VALIDÉ** : benchmark et économie incomplets |
| P2 | Page et image présentes | **NON VALIDÉ** : onze P1 ouverts |
| P3 | Anciens relecteurs et manifeste | **NON VALIDÉ** : ancien hash et corrections absentes |
| P4 | Ancienne QA, propriétaire identique à l’éditeur | **NON VALIDÉ** : indépendance, score et futur snapshot manquent |

## 13. Critères de sortie

- onze P1 corrigés ;
- aucune affirmation tarifaire sans territoire, date, unité et limite ;
- cas commun et TCO reproductibles ;
- au moins deux scénarios où des options différentes gagnent ;
- intégrations, droits, accessibilité, restauration et sortie testés ;
- pack autonome réellement téléchargeable ;
- P3 réalisée par un agent distinct du rédacteur ;
- P4 distincte, score ≥90/100, aucun axe <8, axes critiques ≥9 ;
- build, HTML, canonical, robots, JSON-LD, liens, image sociale et vrai
  navigateur 320–1600 px contrôlés sur le snapshot final.

**Conclusion : le guide a déjà la bonne plume et la bonne morale de décision.
Pour devenir un étalon, il doit maintenant prouver le coût, la fiabilité,
l’adoption et la sortie avec la même précision que son scénario humain.**
