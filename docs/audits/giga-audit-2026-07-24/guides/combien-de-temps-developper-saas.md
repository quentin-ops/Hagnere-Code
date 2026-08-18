# Giga-audit — « Combien de temps faut-il pour développer un SaaS ? »

**Date :** 24 juillet 2026  
**Mode :** audit renforcé en lecture seule  
**Route :** `/guides/combien-de-temps-developper-saas`  
**Page SHA-256 :** `a3f4037afc12ef17e928d6f11cd25ee1a84ea4a6debd9bb8cfe96c59713450a8`  
**Image sociale SHA-256 :** `26f11755bd0e270a8977b1919daf048c6a65b910cf4d9949576b97efee54db19`  
**Recherche SHA-256 :** `7dcac07153c52a7ab71d2bf98272fcbf3a0938c9921efcb07f996fac85320e3b`  
**Registre SHA-256 :** `8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09`  
**Volume source :** 1 149 lignes, environ 5 494 mots dans `page.tsx`  
**Contrôles de cette mission :** source, recherche, calculs et concurrence. Aucun nouveau build, vrai navigateur, déploiement ou contrôle d’indexation.

> Le sujet n’est pas « donner une durée moyenne ». Il est de permettre à un
> dirigeant de comparer deux calendriers qui promettent réellement la même
> ligne d’arrivée. Les 28, 41 et 66 jours du guide sont des données fictives
> d’apprentissage, pas des délais Hagnéré Code ni des repères de marché.

## 1. Verdict exécutif

Ce guide est l’un des meilleurs du corpus. Il fait exactement ce que les pages
concurrentes font rarement : au lieu d’annoncer « 6 à 12 semaines », il demande
ce qui sera réellement utilisable, par qui, avec quelles données, quels tests,
quel support et quelle solution de repli. Il sépare prototype, POC, MVP, pilote
et service exploité, puis rend visibles les travaux du client, du prestataire
et des tiers.

Son exemple de SaaS de réservation est exceptionnellement pédagogique. Les dix
travaux sont reliés, six chemins sont recalculés dans trois scénarios, et la
suite déterminante passe du parcours principal à la connexion externe. Les
totaux 28, 41 et 66 jours ouvrés sont exacts sous les hypothèses écrites. Le
guide montre ainsi pourquoi ajouter des développeurs ne raccourcit pas le délai
d’un éditeur tiers ou d’un décideur indisponible.

La page reste néanmoins sous le standard maximal. Son benchmark concurrentiel
porte sur seulement quatre pages et n’est pas internationalement équilibré. Le
cas fictif suppose des ressources disponibles en parallèle et avertit qu’il
faudrait les ordonnancer si elles sont partagées, mais il ne montre pas ce
recalcul. Les durées sont des temps écoulés par activité, sans charge en
jours-personnes, capacité d’équipe, calendrier réel ou coût de délai. Les
travaux de production sont listés génériquement, sans matrice par type de SaaS
pour multi-tenant, migration de données, facturation, accessibilité, disponibilité,
restauration, support et obligations commerciales.

Le guide doit conserver sa discipline : ne pas devenir un catalogue
technique ou un faux simulateur statistique. Les ajouts doivent servir une
décision visible : calendrier comparable, risque assumé, budget cohérent,
pilote, réduction, report ou lancement.

**Score actuel : 89/100 — NO-GO au standard renforcé tant que neuf P1 restent ouverts.**

- **P0 : 0** — aucun fait critique faux ou calcul trompeur démontré.
- **P1 : 9** — benchmark, capacité, ligne d’arrivée de production, comparaison
  et nouvelles portes.
- **P2 : 8** — différenciation supplémentaire après fermeture des P1.

## 2. Scorecard

| Axe | Note /10 | Justification |
| --- | ---: | --- |
| Intention | 10 | Deux délais incomparables et vraie décision dès l’ouverture. |
| Décision | 9 | Tester, réduire, piloter, simplifier, décaler ou reporter. |
| Pédagogie | 10 | Réseau concret avant le terme technique, exemple entièrement rejouable. |
| Profondeur | 8 | Très bon chemin déterminant ; capacité, rework et exigences SaaS par risque restent partiels. |
| Preuve | 9 | GAO, GOV.UK, CNIL, NIST, Stripe borné ; benchmark marché étroit. |
| Comparaison | 8 | Même ligne d’arrivée exigée, mais modes de réalisation non testés sur ce même cas. |
| Chiffrage | 9 | Dix-huit équations exactes ; charge, coût et calendrier civil absents. |
| Risques et exploitation | 8 | Tiers, sécurité, recette, surveillance, reprise et support cités ; portes non fonctionnelles non testables. |
| Conversion | 9 | Fiche autonome, mauvais fit et CTA sans garantie. |
| SEO et expérience | 9 | Intentions, structure, FAQ, maillage et OG solides ; QA finale à rejouer. |
| **Total** | **89/100** | **Très proche du seuil, mais neuf P1 interdisent une validation.** |

## 3. Forces à sanctuariser

### L’introduction

- Elle ne commence pas par « cela dépend ».
- Elle explique immédiatement pourquoi deux délais diffèrent.
- Elle définit SaaS sans détour.
- Elle annonce la méthode et les décisions possibles.
- Elle ne publie aucune moyenne de marché invérifiable.

### Les cinq lignes d’arrivée

- Prototype : montrer et discuter.
- POC : vérifier un obstacle précis.
- MVP : apprendre avec une version utile.
- Pilote : faire utiliser le vrai service dans un cadre limité.
- Service ouvert : gérer accès, données, exploitation et support.

La page évite ainsi qu’un devis de maquette soit comparé à un devis de
production.

### Le réseau de travaux

- Chaque résultat a un propriétaire.
- Chaque attente est visible.
- Les tâches parallèles ne sont pas additionnées.
- Le chemin déterminant peut changer.
- Une dépendance externe devient une décision anticipée.
- Le calendrier est recalculé lorsque les hypothèses changent.

### Le positionnement professionnel

- IA et no-code ne sont pas présentés comme un multiplicateur magique.
- Ajouter des personnes n’est pas toujours accélérateur.
- Retirer la sécurité ou la recette ne transforme pas une date fausse en date
  vraie.
- Une étape manuelle peut être honnête dans un pilote.
- Reporter est une conclusion autorisée.

## 4. Vérification des calculs existants

### Scénario court

```text
A-B-D-H-I = 4 + 5 + 10 + 7 + 2 = 28
A-G-D-H-I = 4 + 3 + 10 + 7 + 2 = 26
A-C-E-H-I = 4 + 3 + 5 + 7 + 2 = 21
A-F-H-I   = 4 + 4 + 7 + 2 = 17
A-B-D-P-I = 4 + 5 + 10 + 4 + 2 = 25
A-G-D-P-I = 4 + 3 + 10 + 4 + 2 = 23
```

Maximum : **28 jours ouvrés fictifs**.

### Scénario central

```text
A-B-D-H-I = 6 + 7 + 15 + 10 + 3 = 41
A-G-D-H-I = 6 + 5 + 15 + 10 + 3 = 39
A-C-E-H-I = 6 + 6 + 8 + 10 + 3 = 33
A-F-H-I   = 6 + 7 + 10 + 3 = 26
A-B-D-P-I = 6 + 7 + 15 + 6 + 3 = 37
A-G-D-P-I = 6 + 5 + 15 + 6 + 3 = 35
```

Maximum : **41 jours ouvrés fictifs**.

### Scénario prudent

```text
A-B-D-H-I = 8 + 10 + 22 + 15 + 5 = 60
A-G-D-H-I = 8 + 8 + 22 + 15 + 5 = 58
A-C-E-H-I = 8 + 20 + 18 + 15 + 5 = 66
A-F-H-I   = 8 + 12 + 15 + 5 = 40
A-B-D-P-I = 8 + 10 + 22 + 10 + 5 = 55
A-G-D-P-I = 8 + 8 + 22 + 10 + 5 = 53
```

Maximum : **66 jours ouvrés fictifs**. Le chemin devient A-C-E-H-I.

Les sommes sont justes. Elles ne prouvent ni la durée du travail réel, ni la
probabilité de chaque scénario, ni la capacité des personnes à tenir plusieurs
tâches en parallèle.

## 5. Manques décisifs

### 5.1 Le calendrier n’est pas encore chargé en ressources

Le texte explique le problème, mais ne le démontre pas. Il faut ajouter un
mini-cas où la même personne réalise B et C :

```text
Hypothèse actuelle : B et C commencent après A et avancent en parallèle.
Nouvelle contrainte : une seule personne réalise B puis C.

Si A finit au jour 6, B dure 7 jours et C 6 jours :
B finit au jour 13.
C ne commence qu’au jour 13 et finit au jour 19.
La branche C-E-H-I se décale de 7 jours par rapport au parallèle.
```

Le lecteur doit distinguer :

- durée écoulée d’une activité ;
- charge en jours-personnes ;
- disponibilité/calendrier de la personne ;
- capacité simultanée de l’équipe ;
- temps de décision du client ;
- attente d’un tiers.

### 5.2 Les jours ouvrés ne deviennent pas une vraie date

Une fiche utile doit demander :

- date de départ ;
- jours travaillés par personne ;
- congés et jours fériés ;
- temps partiels ;
- indisponibilités connues ;
- fuseaux horaires ;
- délai de réponse contractuel ;
- fenêtre de déploiement ;
- saison ou date non déplaçable.

Le guide peut garder le calcul manuel et fournir un tableur qui convertit
ensuite le résultat en date sans prétendre gérer tous les calendriers.

### 5.3 Les boucles de correction sont trop linéaires

Le réseau suppose une suite propre. Le travail réel peut rouvrir :

- une règle après test utilisateur ;
- le modèle de données après import ;
- un parcours après accessibilité ;
- une intégration après changement d’API ;
- la facturation après événement dupliqué ;
- l’autorisation après test de cloisonnement.

Il faut montrer comment représenter une réserve explicite de correction ou une
activité de reprise, sans ajouter arbitrairement 20 %.

### 5.4 La ligne d’arrivée « service ouvert » est trop générique

Selon le produit, le calendrier doit qualifier :

- comptes, organisations et séparation multi-tenant ;
- rôles, droits et administration ;
- import et reprise des données ;
- paiement, facture, taxe et résiliation si inclus ;
- conditions contractuelles et information vie privée ;
- accessibilité des parcours ;
- sauvegarde, restauration, RPO et RTO ;
- surveillance, alertes et journalisation ;
- support, incident et astreinte éventuelle ;
- réversibilité et remise des accès ;
- onboarding et première mesure d’activation.

Tous ces blocs ne s’appliquent pas à tous les SaaS. La fiche doit permettre de
les marquer `applicable`, `non applicable avec motif` ou `à confirmer`.

### 5.5 Les modes de réalisation ne sont pas comparés

Pour une ligne d’arrivée identique, confronter :

- service manuel/concierge pour apprendre ;
- configuration d’un produit existant ;
- no-code/low-code ;
- assemblage de briques et APIs ;
- développement spécifique ;
- report.

La question n’est pas « lequel est toujours plus rapide ? », mais quels
travaux, dépendances et risques chacun retire ou ajoute.

### 5.6 La contrainte économique reste hors champ

Le guide de durée peut renvoyer au guide de budget, mais il doit montrer la
relation :

```text
Coût du délai = unités de résultat réellement retardées
             × marge contributive estimée par unité
             + coûts temporaires directement causés

Coût d’accélération = capacité supplémentaire
                    + coordination
                    + outillage
                    + reprise de qualité éventuelle
```

Il faut distinguer chiffre d’affaires décalé, revenu perdu, marge, trésorerie et
coût temporaire. Une date de salon n’a pas automatiquement un coût égal au
chiffre d’affaires espéré.

### 5.7 Le comparatif concurrentiel est trop étroit

Quatre concurrents ne suffisent pas pour revendiquer saturation. Le corpus doit
inclure France, États-Unis, Royaume-Uni, Australie et DACH, avec :

- réponse courte ;
- ligne d’arrivée supposée ;
- équipe supposée ;
- phases et dépendances ;
- sécurité/exploitation ;
- méthode de durée ;
- preuve ou absence de preuve ;
- intérêt commercial.

### 5.8 La fiche n’est pas un outil transmissible

Douze cartes copiables sont utiles, mais un dirigeant doit pouvoir télécharger :

- un tableur des travaux, dépendances, propriétaires et trois scénarios ;
- un calendrier des ressources ;
- le calcul automatique des dates de fin ;
- la liste des portes de production ;
- une version PDF/DOCX à joindre aux devis ;
- un onglet de comparaison de deux offres.

Le fichier doit être ouvert, recalculé et vérifié réellement.

## 6. Benchmark international

| Zone / ressource | Réponse observée | Bon point | Limite à dépasser |
| --- | --- | --- | --- |
| France — Techsy, HEXAIT, Squaad | Fourchettes, phases, coût et prestation | Rend l’ordre de grandeur facile à consommer | Périmètres, équipes et corpus souvent peu auditables |
| États-Unis — NextGen, guides SaaS MVP 2026 | Calendrier phase par phase et facteurs de retard | Traite scope, intégrations et changement | Une fourchette reste difficilement transposable |
| États-Unis/international — Madgeek | Spécification, équipe dédiée, multi-tenancy, production | Hypothèses de départ visibles | Page commerciale et durée propre à son modèle |
| Royaume-Uni — GOV.UK Service Manual | Plan vivant, beta, exploitation et support | Sources publiques et dépendances explicites | Service public, aucune durée SaaS commerciale |
| Australie — écosystème MVP/innovation | Validation, itération et build/buy | Rend visible le test avant la construction | Peu de plan réseau et de calcul reproductible |
| DACH — offres « SaaS MVP en 4 semaines » | Promesse forte, périmètre, stack et prix affichés | Offre lisible et exclusions parfois concrètes | Comparatifs auto-déclarés, IA et production à vérifier |
| États-Unis — GAO Schedule Assessment Guide | Complétude, logique, chemin critique, mise à jour et risque | Référentiel de calendrier rigoureux | Grands programmes, pas durée SaaS ni méthode simplifiée |

### Angle supérieur défendable

La page peut devenir la référence qui permet de **recalculer une date au lieu
de croire une fourchette**. Pour cela, elle doit relier ligne d’arrivée,
dépendances, capacité, calendrier, risques, portes de production et décision
économique sans cacher ses limites statistiques.

## 7. Exemple comparatif à périmètre égal

Ligne d’arrivée fictive : deux entreprises clientes, trois rôles, authentification,
un parcours de réservation, import quotidien de stock, notifications, support
ouvré, sauvegarde restaurable et suivi d’activation.

| Option | Travaux potentiellement retirés | Travaux ajoutés | Inconnue dominante | Verdict possible |
| --- | --- | --- | --- | --- |
| Concierge manuel | automatisation, interface complète | opération humaine, contrôle et traçabilité | capacité et volonté de payer | bon test, pas service scalable |
| Produit standard | socle auth/admin/run | configuration, fit, licence, migration | limites fonctionnelles | rapide si fit réel |
| Low-code/no-code | partie du code et déploiement | gouvernance, connecteurs, quotas, run | plafond et réversibilité | pertinent pour pilote stable |
| Assemblage APIs | briques commodités | contrats, erreurs, dépendances tiers | fiabilité des fournisseurs | rapide si intégrations solides |
| Spécifique | peu de compromis fonctionnels | conception, code, sécurité, exploitation | charge et maintien | cohérent si spécificité justifie |
| Report | investissement immédiat | coût du statu quo | décision/problème non validé | rationnel si inconnues majeures |

Le guide ne doit donner aucune durée universelle à ces lignes. Il doit montrer
comment leur réseau de travaux diffère.

## 8. P1 à fermer

| ID | Incident | Correction | Preuve |
| --- | --- | --- | --- |
| P1-01 | Benchmark non international et saturation non prouvée | Ajouter FR/US/UK/AU/DACH avec grille commune | URLs et synthèse rouvertes par P3 |
| P1-02 | Capacité et ressources seulement averties | Ajouter un recalcul avec ressource partagée | Réseau et dates refaits |
| P1-03 | Jours ouvrés non convertis en calendrier | Ajouter date, calendriers et indisponibilités | Tableur testé sur trois cas |
| P1-04 | Boucles de correction et changement insuffisants | Ajouter rework, décision, réserve et replanification | Scénario avec activité rouverte |
| P1-05 | Ligne d’arrivée production incomplète | Matrice SaaS applicable/non applicable/à confirmer | Revue produit, sécurité, run et légal |
| P1-06 | Modes de réalisation non comparés au même résultat | Appliquer six options au cas canonique | Parité vérifiée et inconnues visibles |
| P1-07 | Coût du délai et accélération absents | Ajouter formule, scénario et limites | Calcul inverse et sensibilité |
| P1-08 | Fiche non téléchargeable/recalculable | Produire XLSX + PDF/DOCX et test d’ouverture | Artefacts inspectés |
| P1-09 | Anciennes P3/P4 antérieures au standard renforcé | Refaire P3 puis P4 distincte sur snapshot corrigé | 0 P0/P1, score et QA conformes |

## 9. P2 pour dépasser 90 durablement

1. Ajouter une option avancée clairement facultative : estimation trois points
   et simulation probabiliste par spécialiste, sans afficher de P80 fictif.
2. Montrer trois architectures : CRUD B2B simple, intégration sensible,
   service réglementé/critique.
3. Ajouter une visualisation réseau accessible et une alternative textuelle.
4. Déclarer explicitement l’intérêt commercial de Hagnéré Code.
5. Ajouter la date de fraîcheur et une politique de revalidation des sources.
6. Distinguer mise en ligne, stabilisation et premier résultat client.
7. Ajouter une grille de devis : résultat, hypothèses, exclusions, capacité,
   dépendances, recette et support.
8. Retester thème clair/sombre, clavier, zoom, tableaux et image sociale après
   intégration du tableur.

## 10. Sources à conserver et compléter

### Primaires

- [U.S. GAO — Schedule Assessment Guide](https://www.gao.gov/products/gao-16-89g)
- [GOV.UK — Planning agile](https://www.gov.uk/service-manual/agile-delivery/planning-agile)
- [GOV.UK — How the beta phase works](https://www.gov.uk/service-manual/agile-delivery/how-the-beta-phase-works)
- [GOV.UK — How the live phase works](https://www.gov.uk/service-manual/agile-delivery/how-the-live-phase-works)
- [CNIL — Encadrer les développements informatiques](https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques)
- [NIST SP 800-218 — SSDF 1.1](https://csrc.nist.gov/pubs/sp/800/218/final)
- [W3C — WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [Stripe — Testing Billing](https://docs.stripe.com/billing/testing), seulement
  si Stripe fait partie du cas.

### Concurrence de couverture

- [NextGen Software — SaaS MVP timeline](https://www.nextgensoftware.us/blog/how-long-does-it-take-to-build-a-saas-mvp)
- [Madgeek — SaaS MVP timeline](https://madgeek.ai/resources/saas-mvp-timeline)
- [MVP Development Germany](https://mvp-development.de/)

Les concurrents prouvent seulement ce qu’ils publient et la façon dont ils
traitent l’intention. Leurs fourchettes, prix, témoignages et performances ne
doivent pas devenir des faits généraux.

## 11. État des passes

| Passe | Ancienne preuve | État renforcé |
| --- | --- | --- |
| P1 | Dossier de 1 200 lignes et sources fortes | **NON VALIDÉ** : corpus international, capacité et économie à compléter |
| P2 | Page, registre, OG et calculs | **NON VALIDÉ** : neuf P1 ouverts |
| P3 | Rapport indépendant et équations revérifiées | **RAPPORT HISTORIQUE PRÉSENT, NON VALIDÉ** sur le futur snapshot corrigé |
| P4 | Ancienne plume/QA et manifeste final | **NON VALIDÉ** : nouvelle scorecard, vrai lecteur et QA finale nécessaires |

## 12. Critères de sortie

- neuf P1 fermés ;
- dix-huit équations historiques toujours exactes ;
- exemple de capacité partagée exact ;
- tableur reproductible et inspecté ;
- portes SaaS applicables explicites ;
- au moins deux options différentes gagnent selon le cas ;
- aucun chiffre concurrent transformé en norme ;
- P3 indépendante sur le snapshot corrigé ;
- P4 ≥90/100, aucun axe <8, axes critiques ≥9 ;
- build, tests, liens, HTML, canonical, robots, schémas, accessibilité,
  responsive 320–1600 et OG contrôlés ;
- état public/indexation rapporté séparément.

**Conclusion : le guide ne doit pas être réinventé. Son cœur — ligne d’arrivée,
réseau, propriétaires et scénarios recalculables — est excellent. Il faut lui
ajouter la capacité réelle, les portes de production, la comparaison des modes
de réalisation et un outil transmissible pour en faire un étalon.**
