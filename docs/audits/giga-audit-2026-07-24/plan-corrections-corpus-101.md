# Plan d'application des corrections — corpus des 101 guides

Date de consolidation : **24 juillet 2026**  
Périmètre : **101 guides, 101 fiches d'audit individuelles**  
Statut : **audit du corpus terminé ; corrections et nouvelles validations à
exécuter successivement**

Ce plan transforme les constats du giga-audit en travail exécutable. Il ne
déclare aucun guide corrigé par la seule présence d'un rapport. Les incidents
détaillés restent dans
[`registre-maitre-101-guides.md`](registre-maitre-101-guides.md) et dans
`guides/<slug>.md`. Le contrôle indépendant des rapports est consigné dans
[`controle-qualite-audits-101.md`](controle-qualite-audits-101.md). Le
protocole opposable reste
[`../../workflow-maitre-guides-4-passes.md`](../../workflow-maitre-guides-4-passes.md).

## 1. État de vérité au départ

- les **101 routes** du corpus ont une fiche d'audit dédiée ;
- les audits couvrent la pédagogie, la plume, les preuves, la comparaison, les
  calculs, la conversion, le SEO, la technique et les angles internationaux ;
- les 101 pages et les 101 rapports sont rattachés à leur état local courant
  dans [`manifest-snapshots-101.md`](manifest-snapshots-101.md) ;
- les deux **P0 éditoriaux** de `dette-technique-cout-entreprise` sont fermés
  localement sur un nouveau snapshot ; un **P0 de mise en production** reste
  ouvert tant que la nouvelle page et ses cinq ressources ne sont pas
  déployées puis recontrôlées publiquement ;
- `migrer-logiciel-metier-sans-interruption` est fermé pour le contenu local :
  P3 99/100 et P4 humaine simulée 97/100, P0/P1/P2 = 0 ; BAT navigateur,
  dirigeant externe, manifeste final, production et indexation restent des
  portes séparées ;
- les P1 et P2 propres à chaque guide sont consignés dans sa fiche et résumés
  dans le registre maître ;
- la forme des premiers rapports n'est pas parfaitement homogène : la fiche
  détaillée prévaut sur toute tentative de total automatisé ;
- une ancienne P3, P4, scorecard ou manifeste ne valide pas un contenu modifié
  après son snapshot ;
- « audité » ne signifie ni « corrigé », ni « testé », ni « publié », ni
  « indexé », ni « classé ».

L'objectif est de maximiser la probabilité de devenir la meilleure réponse
disponible pour un dirigeant. Une première position Google ne peut pas être
garantie : elle dépend aussi de l'autorité, des liens, de la concurrence, de
l'historique, de l'expérience de page et des résultats observés après
publication.

## 2. Ordre impératif de traitement

### Préalable documentaire — rendre chaque incident rejouable

Avant de fermer un guide, normaliser sa fiche sans changer artificiellement le
fond de l'audit :

1. un bloc de verdict unique avec `score actuel`, `P0 ouverts`, `P1 ouverts`,
   `P2 ouverts`, snapshot et statut de porte ;
2. une ligne stable par incident :
   `ID | preuve | conséquence | correction | revalidation` ;
3. une séparation explicite entre score actuel, score historique, diagnostic
   secondaire et cible ;
4. les SHA-256 absents du snapshot audité ;
5. les requêtes, pays, langues et critère de saturation lorsque la recherche
   SERP n'est pas encore rejouable ;
6. le tableau international manquant ou sa justification ;
7. le rapprochement entre le compteur de synthèse et les identifiants, sans
   compter les mots `P1` qui désignent la première passe.

Cette normalisation sert de reçu. Elle ne transforme aucun défaut ouvert en
correction et n'autorise pas à recalculer rétroactivement une preuve absente.

### Vague A — fermer les risques qui interdisent la publication

1. `dette-technique-cout-entreprise` : **terminé localement** — deux P0 et sept
   P1 fermés, calculs refaits, cinq options égalisées, P3 indépendante,
   P4 à 91/100 et BAT navigateur ; publication et cinq URLs encore à vérifier ;
2. fermer les incohérences de promesse ou de score déjà consignées pour
   `tma-ou-regie` et `cahier-des-charges-saas` ;
3. `rgpd-saas-b2b` : **corrigé et revalidé localement** — quatorze P1
   historiques et quatre P1 résiduels fermés, 98/98 tests ciblés, P4 94/100 ;
   reste le BAT navigateur exact avant publication prouvée ;
4. `google-ads-saas-b2b` : **corrigé et revalidé localement** — quinze P1
   fermés, logique du calculateur contre-auditée, 83/83 tests ciblés, P4
   96/100 ; restent le BAT navigateur exact et un test par dirigeant externe ;
5. `migrer-logiciel-metier-sans-interruption` : **corrigé et revalidé
   localement** — douze P1 historiques fermés, kit de 27 fichiers, P3 99/100,
   P4 humaine simulée 97/100, P0/P1/P2 = 0 ; restent BAT navigateur, dirigeant
   externe, manifeste et preuves publiques ;
6. traiter les autres sujets à forte responsabilité juridique, données ou
   continuité : `suivi-conversions-google-ads`, `securite-saas-b2b`,
   `proprietaire-site-internet-code-source` et
   `site-internet-en-panne-que-faire`.

### Vague B — décisions proches d'une conversion commerciale

1. `calculer-roi-application-metier` — P2 r4 gelée, P3 indépendante GO à
   97/100, P0/P1/P2 = 0 ; P4 et preuves publiques ouvertes ;
2. `transformer-excel-en-application` — P1 internationale validée ; P2
   suivante ;
3. `signes-besoin-logiciel-metier` ;
4. `valider-idee-saas-avant-developper` ;
5. `reprendre-mvp-vibe-code` ;
6. `prix-logiciel-sur-mesure`, `combien-coute-un-saas`,
   `cout-maintenance-application-metier` et
   `contrat-seo-duree-engagement`.

### Vague C — acquisition et mesure

1. guides de mesure : `suivi-conversions-google-ads`,
   `calculer-cout-par-lead-google-ads`,
   `leads-google-ads-non-qualifies` ;
2. guides de choix : `seo-ou-google-ads`, `google-ads-ou-meta-ads`,
   `google-search-ads-ou-performance-max` ;
3. guides de campagne : `google-ads-commerce-local`,
   ~~`google-ads-saas-b2b`~~ — corrigé localement, `budget-google-ads-pme`,
   `prix-gestion-google-ads` ;
4. guides SEO de diagnostic et délai :
   `pourquoi-site-pas-visible-google`, `site-indexe-sans-trafic`,
   `positions-google-baissent`, `combien-de-temps-resultats-seo`.

### Vague D — comparatifs, budgets, exploitation et longue traîne

Les P1 internationales de `react-native-ou-flutter`,
`cout-maintenance-site-internet` et
`combien-de-temps-pour-creer-un-site` sont déjà validées et gelées. Cela
prépare leur P2 sans changer le statut de leurs pages : chaque réécriture,
contre-audit et P4 devra rester successive après
`transformer-excel-en-application`.

Les autres guides sont ensuite ordonnés par :

1. risque de faire prendre une mauvaise décision ;
2. proximité avec une prestation réellement proposée ;
3. écart de gain d'information face aux meilleures ressources ;
4. potentiel d'un calcul, modèle, checklist ou protocole original ;
5. demande et conversion observées, lorsqu'une donnée fiable existe.

L'ordre peut changer avec Search Console, le CRM ou un nouveau P0. Il ne change
jamais sur une intuition non documentée.

## 3. Unité de travail : un guide, quatre passes

La recherche de trois guides au maximum peut avancer en parallèle. Une seule
page est réécrite et validée à la fois.

### P1 — rechercher et décider

Livrables obligatoires :

- situation réelle, phrase du dirigeant, décision et conséquence attendue ;
- benchmark France, États-Unis, Royaume-Uni et autre marché utile ;
- sources primaires ou officielles pour les faits décisifs ;
- tableau « concurrence / réponse / preuve / limite / manque / gain à créer » ;
- matrice de gain d'information menée jusqu'à saturation ;
- périmètre égal des solutions comparées ;
- trois scénarios et sensibilités si le sujet touche coût, délai, ROI ou choix ;
- position Hagnéré Code, contre-cas et option de ne rien acheter ;
- plan annoté, sources et hypothèses dans `docs/research/<slug>.md`.

Porte : un autre rédacteur doit pouvoir écrire sans inventer ni compléter les
angles au hasard.

### P2 — écrire et intégrer

Livrables obligatoires :

- réponse et conséquence dans les 150 premiers mots ;
- langage de dirigeant, mécanismes expliqués avant le vocabulaire technique ;
- exemples calculés, comparaisons à mission égale et hypothèses visibles ;
- opinion professionnelle nette, bornée par les faits et accompagnée du cas
  où elle cesse d'être valable ;
- risques, coûts cachés, exploitation, adoption, sécurité, conformité,
  continuité et sortie lorsque pertinents ;
- prochaine action faisable sans Hagnéré Code ;
- CTA honnête, bon fit, mauvais fit et livrable précis ;
- métadonnées, données structurées, maillage, image sociale et éventuelle
  ressource utile intégrés sans promesse fictive.

Porte : la page traite seule la décision annoncée et correspond au dossier P1.

### P3 — contredire et corriger

Cette passe est menée par un agent qui n'a pas écrit P2.

Contrôles obligatoires :

- rouvrir les sources et les concurrents décisifs ;
- refaire chaque calcul sans reprendre les totaux de l'auteur ;
- vérifier égalité de périmètre, horizons, hypothèses, cas limites et
  contradictions ;
- classer chaque défaut en P0, P1, P2 ou `REJETÉ` avec motif ;
- contrôler honnêteté commerciale, conflit d'intérêt et contre-cas ;
- faire corriger P0/P1 par l'éditeur, puis revalider chaque ligne fermée.

Porte : **zéro P0 et zéro P1 ouverts** sur le snapshot complet identifié.

### P4 — humaniser, tester et figer

Cette passe est menée par un regard distinct.

Contrôles obligatoires :

- lecture intégrale à voix humaine : intérêt, clarté, rythme, transitions,
  variété, absence de jargon et de structure répétitive ;
- test du lecteur pressé, du lecteur sceptique et du lecteur non technique ;
- scorecard justifiée : au moins 90/100, aucun axe sous 8, axes critiques à
  9 ou 10 ;
- gel SHA-256 du guide, registre, recherche, composants, tests et image sociale ;
- tests ciblés, batterie qualité, build et HTML du build gelé ;
- vrai navigateur aux largeurs 320, 390, 768, 1024 et 1440 px ;
- tableaux, calculateurs, ressources, clavier, liens, console, thème et image
  sociale réellement inspectés ;
- diff sémantique final et statut exact consigné.

Porte : toutes les preuves appartiennent au même snapshot et aucune
modification ultérieure ne les a invalidées.

## 4. Répartition multi-agents sans conflit

| Rôle               | Peut faire                                          | Ne peut pas valider                             |
| ------------------ | --------------------------------------------------- | ----------------------------------------------- |
| Agent P1           | recherche, benchmark, sources, scénarios, plan      | sa propre rédaction future                      |
| Éditeur P2         | une page et ses dépendances, après validation P1    | sa propre P3 ou P4                              |
| Contre-auditeur P3 | faits, calculs, concurrence, contradictions         | les corrections qu'il n'a pas rouvertes         |
| Relecteur P4       | plume, expérience humaine, score et navigateur      | une page qui garde un P0/P1                     |
| Orchestrateur      | attribution, gel, consolidation, batterie et statut | une preuve absente ou issue d'un autre snapshot |

Les agents de recherche ne modifient pas les pages ni les fichiers partagés.
Un seul éditeur écrit dans le code. Les agents P3/P4 travaillent d'abord en
lecture seule. Aucun rapport d'agent n'est une source primaire.

## 5. Corrections transversales à exiger quand elles sont pertinentes

Chaque guide n'a pas besoin de tout. Chaque omission pertinente doit toutefois
être corrigée ou explicitement rejetée :

- **économie** : TCO 12/36/60 mois, coût du statu quo, coût du retard,
  payback, marge, seuil de bascule et sensibilité ;
- **comparaison** : même client, fonctions, volume, horizon, migration,
  exploitation, risque et sortie ;
- **preuve** : source primaire, date, périmètre, limite et phrase exacte
  soutenue ;
- **opérations** : responsabilités, acceptation, SLA, RPO/RTO, restauration,
  incidents, observabilité et capacité ;
- **données** : rôles, accès, intégrations, qualité, conservation, transferts,
  export, suppression et réversibilité ;
- **humain** : adoption, formation, dérogations, gouvernance, accessibilité et
  charge interne ;
- **conversion** : diagnostic autonome, bon/mauvais fit, livrable visible,
  conflit d'intérêt déclaré et CTA proportionné ;
- **SEO** : intention, réponse immédiate, architecture propre, maillage utile,
  données structurées exactes et aucun texte ajouté pour un quota ;
- **angle original** : calculateur, matrice, protocole, modèle ou jeu de données
  qui aide réellement à décider, jamais un téléchargement décoratif.

## 6. Reçu obligatoire pour déclarer un guide terminé

Le registre ne passe une ligne à « validée » qu'avec :

1. lien vers P1, P2, P3 et P4 ;
2. auteurs ou rôles distincts ;
3. SHA-256 du snapshot complet ;
4. liste des P0/P1 avec leur preuve de fermeture ;
5. scorecard détaillée ;
6. commandes et résultats de tests ;
7. artefact de build identifié ;
8. contrôle navigateur documenté ;
9. décision sur chaque P2 ou suggestion rejetée ;
10. statut exact : local, publié vérifié, sitemap soumis ou indexé confirmé.

Un `200`, un build vert, une capture isolée, un manifeste historique ou une
note globale ne remplace aucune de ces preuves.

## 7. Mesure après publication

À 7, 28 et 90 jours, observer sans fabriquer de causalité :

- couverture et état d'indexation ;
- requêtes, impressions, clics, position et pages concurrentes ;
- entrées, progression vers les contenus liés et sorties ;
- téléchargements, demandes de contact, qualification et ventes attribuables ;
- objections ou incompréhensions relevées par de vrais lecteurs ;
- pages à consolider, scinder, rediriger ou désindexer.

Une hausse ou une baisse n'est pas automatiquement causée par la réécriture.
Les décisions post-publication sont consignées avec date, période de
comparaison et facteurs externes connus.
