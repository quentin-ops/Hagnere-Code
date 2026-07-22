# Dossier de recherche — Mes positions Google baissent : que vérifier avant de modifier le site ?

> Les passes 1 et 2 sont terminées. Ce document verrouille la décision
> éditoriale, les preuves, les limites, le plan et le brouillon intégré du
> guide. Il ne vaut ni diagnostic d'un site réel, ni promesse de retour à une
> position. Les faits sur Google proviennent de sources officielles Google
> consultées le 22 juillet 2026.

Le déroulement et les portes de sortie sont définis dans
[`docs/workflow-maitre-guides-4-passes.md`](../workflow-maitre-guides-4-passes.md).

## Journal des quatre passes

Propriétaire éditorial unique : **Hagnéré Code, agent racine du lot**. L'agent
P1 prépare le dossier ; il ne modifie ni page publique, ni registre, ni
maillage partagé.

| Passe                        | État                     | Date            | Responsable           | Snapshot                                                      | Blocages             |
| ---------------------------- | ------------------------ | --------------- | --------------------- | ------------------------------------------------------------- | -------------------- |
| 1. Recherche                 | Terminée — porte validée | 22 juillet 2026 | Agent de recherche P1 | `docs/research/manifests/positions-google-baissent-p1.sha256` | Aucun pour ouvrir P2 |
| 2. Rédaction et intégration  | Terminée — porte validée | 22 juillet 2026 | Agent de rédaction P2 | `docs/research/manifests/positions-google-baissent-p2.sha256` | Aucun pour ouvrir P3 |
| 3. Contre-audit indépendant  | Terminée — porte validée | 22 juillet 2026 | Agent indépendant P3  | `docs/research/manifests/positions-google-baissent-p3.sha256` | Aucun pour ouvrir P4 |
| 4. Plume humaine et contrôle | Terminée — porte validée | 22 juillet 2026 | Agent racine P4       | `docs/research/manifests/positions-google-baissent-p4.sha256` | Gel commun requis    |

Toute modification matérielle de ce dossier après le manifeste invalide la
porte P1 jusqu'à une nouvelle lecture et un nouveau hash.

### Manifeste du snapshot

| Fichier contrôlé                             | SHA-256                    | Passe | Remarque                                                                        |
| -------------------------------------------- | -------------------------- | ----- | ------------------------------------------------------------------------------- |
| `docs/research/positions-google-baissent.md` | Voir le manifeste frère P1 | P1    | Le dossier ne contient pas son propre hash afin d'éviter une référence instable |

## 1. Fiche d'identité

```text
Slug : positions-google-baissent
Statut actuel : dossier P1 validé, page publique non rédigée
Requête principale : positions Google baissent
Moment du parcours : sécuriser une décision après une baisse déjà observée
Lecteur précis : dirigeant de TPE/PME ou indépendant dont les clics, impressions ou positions Google semblent baisser, sans équipe SEO interne capable d'établir la cause
Situation déclenchante : Search Console, un outil de suivi ou une recherche manuelle montre une baisse ; le dirigeant hésite entre réécrire les pages, appeler le développeur, changer d'agence ou attendre
Décision principale après lecture : vérifier que la baisse est réelle et comparable, identifier le chiffre et les pages réellement touchés, puis choisir une seule action proportionnée et contrôlable au lieu de modifier tout le site
Niveau de connaissance au départ : sait lire une courbe et reconnaître quelques pages importantes, mais confond souvent position moyenne, impressions, clics, demande du marché et « pénalité »
5 questions indispensables :
1. Est-ce la bonne propriété Search Console, la bonne période et les mêmes filtres ?
2. Qu'est-ce qui baisse réellement : impressions, position moyenne, taux de clics ou clics ?
3. La baisse touche-t-elle tout le site, quelques pages, certaines recherches, un pays, un appareil ou un type de résultat ?
4. Une panne, une migration, une directive noindex, une autre adresse canonique, une action manuelle ou un problème de sécurité est-il observé ?
5. La demande du marché, les résultats concurrents ou une mise à jour Google apportent-ils seulement une hypothèse, ou une preuve suffisante pour agir ?
3 objections ou craintes :
1. « Google nous a pénalisés, il faut tout réécrire tout de suite. »
2. « Mon outil dit que nous avons perdu trois places : notre référencement s'effondre. »
3. « Une mise à jour Google a eu lieu au même moment, donc nous avons trouvé la cause. »
Action utile sans contact commercial : remplir une fiche d'incident SEO, exporter les deux périodes comparées et choisir une hypothèse assortie d'une preuve, d'une action réversible et d'une date de contrôle
CTA possible : faire relire la fiche d'incident et définir le contrôle ciblé avant toute refonte ou réécriture massive
Hors périmètre : expliquer comment obtenir des premiers résultats SEO, auditer tout le site, choisir une agence, fournir un tutoriel exhaustif de Search Console, promettre un délai de récupération, diagnostiquer Google Maps ou Google Ads
Date de la recherche : 22 juillet 2026
Responsable de la synthèse : agent de recherche P1 ; propriété éditoriale et validation des passes suivantes par l'orchestrateur
```

### Décision unique du guide

Le guide doit empêcher une réaction coûteuse à une courbe mal lue. Sa décision
unique est :

> **Avant de modifier le site, le dirigeant doit reproduire la baisse avec les
> mêmes filtres, relever lesquels des impressions, clics, taux de clics et
> position moyenne changent ensemble, localiser les pages et recherches
> touchées, puis chercher séparément une cause étayée.**

Le guide peut conduire à réparer un obstacle technique, améliorer une page,
observer une saison, demander un audit ciblé ou ne rien modifier pour
l'instant. Il ne doit pas transformer chaque variation en urgence.

### Bon fit et mauvais fit

| Situation                                                                                                      | Orientation                                                                                |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Plusieurs pages commerciales perdent impressions et clics sur deux périodes comparables avec les mêmes filtres | bon fit pour un audit ciblé fondé sur la fiche d'incident                                  |
| La baisse suit une migration, un changement d'adresses ou une mise en ligne importante                         | contrôle technique et de migration prioritaire                                             |
| Search Console signale une action manuelle, un problème de sécurité ou une perte d'indexation étendue          | intervention spécialisée prioritaire ; ne pas attendre la fin d'une analyse éditoriale     |
| Une page importante a été mise en `noindex` ou redirigée par erreur et la correction est évidente              | correction ponctuelle, test et surveillance ; pas d'audit complet automatique              |
| Un seul outil tiers montre une variation quotidienne, sans baisse comparable des impressions ou clics          | mauvais fit pour une refonte ; conserver la mesure et vérifier les filtres                 |
| La demande saisonnière baisse aussi dans Google Trends et le site reste techniquement sain                     | adapter les attentes et comparer à une période équivalente avant d'acheter des corrections |
| Les clics restent stables malgré une légère baisse de position moyenne                                         | surveiller les résultats utiles ; ne pas financer une « récupération de rang » abstraite   |

### Score de lancement P1

| Critère avant rédaction   | Note / 10 | Justification                                                                                            |
| ------------------------- | --------: | -------------------------------------------------------------------------------------------------------- |
| Proximité avec l'offre    |        10 | Le symptôme mène naturellement à un diagnostic ou à un audit SEO ciblé                                   |
| Problème vécu             |        10 | La baisse de clics ou de visibilité est immédiatement compréhensible par un dirigeant                    |
| Décision autonome         |         9 | La fiche d'incident peut être remplie sans acheter un outil ou une prestation                            |
| Différenciation SERP      |         9 | L'angle sépare mesure, localisation et causalité avant toute correction                                  |
| Preuves disponibles       |        10 | Search Console, Search Central, Trends et le Status Dashboard documentent les contrôles essentiels       |
| Risque de cannibalisation |         8 | Le silo comporte plusieurs diagnostics SEO ; leurs décisions sont bornées explicitement                  |
| Potentiel de conversion   |         9 | Une cause non résolue ou étendue justifie un audit ciblé sans forcer la vente                            |
| **Total**                 | **65/70** | Seuil de lancement dépassé ; aucun volume de recherche, taux de récupération ou rang futur n'est supposé |

## 1 bis. Contrat de langage humain

- **Phrase exacte que le lecteur pourrait dire au téléphone :** « Nous étions
  bien placés sur Google et, depuis quelques semaines, les clics baissent. Est-ce
  qu'on doit refaire les articles ou est-ce qu'il y a un problème sur le site ? »
- **Réponse qu'il attend en une phrase :** « Ne réécrivez rien avant d'avoir
  vérifié le même périmètre dans Search Console, noté lesquels des quatre
  chiffres changent ensemble et séparé les mesures des causes encore possibles. »
- **Terme central expliqué sans jargon :** la position moyenne de Search
  Console est la place moyenne du résultat le mieux placé du site pour les
  affichages compris dans les filtres choisis ; ce n'est pas une place unique
  et universelle sur Google. Elle peut aussi changer parce que les recherches
  ou les pages comprises dans la moyenne ne sont plus les mêmes, sans que chaque
  requête ait perdu la même place.
- **Mots ordinaires employés par le lecteur :** place, résultats Google,
  recherches, pages, apparitions, clics, appels, baisse, changement, panne,
  saison, concurrent, article, refaire, attendre.
- **Mots d'agence ou de consultant à éviter :** SERP volatility, ranking
  tracker, visibilité agrégée, update hit, pénalité algorithmique, empreinte de
  contenu, cannibalisation sémantique, crawl budget, link velocity, recovery.
- **Projet des 150 premiers mots :** ci-dessous.
- **Ce que le lecteur saura décider après ces 150 mots :** ne pas toucher au
  site avant d'avoir vérifié le bon jeu de données, puis choisir le premier
  contrôle selon le chiffre qui baisse.
- **H2 relus isolément :** oui au stade du plan ; à revalider après P2.
- **Comparaison comprise à 390 px sans colonne masquée :** les tableaux publics
  devront devenir des cartes sous 768 px ; contrôle réservé à P4.
- **FAQ dont la première phrase répond :** réponses prévues directes ; contrôle
  final réservé à P2/P4.
- **CTA formulé comme résultat pour le prospect :** « Faire vérifier la baisse
  avant de toucher au site ».

### Projet des 150 premiers mots

> Vos clics Google baissent et un outil annonce que plusieurs pages ont perdu
> des places. Faut-il réécrire les articles, corriger le site ou attendre ? **Ne
> changez rien à grande échelle tant que vous n'avez pas vérifié ce qui baisse
> vraiment.**
>
> Ouvrez la bonne propriété dans Google Search Console, l'outil qui montre
> comment votre site apparaît dans Google. Comparez deux périodes comparables
> avec exactement les mêmes filtres. Regardez séparément les impressions — les
> apparitions du site —, les clics, le taux de clics et la position moyenne,
> c'est-à-dire la place moyenne du résultat le mieux placé de votre site dans le
> périmètre choisi. Ces chiffres peuvent évoluer ensemble sans révéler, à eux
> seuls, la cause.
>
> Ce guide vous aide à localiser la baisse, vérifier un incident ou un changement
> du site, puis décider s'il faut réparer, améliorer, observer ou demander un
> audit ciblé.

Décompte de contrôle : **144 mots** avec une segmentation par espaces. P2 doit
recompter le texte rendu et conserver la réponse avant toute méthode.

### Définitions autorisées au fil de la lecture

| Terme utile        | Formulation humaine à employer                                                                             | Limite à rappeler                                                                                      |
| ------------------ | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Impression         | une apparition comptée du site dans les résultats selon les règles du rapport                              | ce n'est ni une visite, ni une preuve qu'une personne a lu le résultat                                 |
| Clic               | un clic compté depuis un résultat Google vers la propriété Search Console                                  | il ne prouve ni formulaire, ni appel, ni vente                                                         |
| Taux de clics      | clics divisés par impressions, appelé CTR dans Search Console                                              | un changement peut venir des requêtes, de la position, du résultat affiché ou de la composition Google |
| Position moyenne   | moyenne de la position du résultat le mieux placé de la propriété pour le périmètre observé                | ce n'est pas « ma place Google » pour tout le monde                                                    |
| Indexation         | Google a retenu une version d'une page dans son index                                                      | elle ne garantit ni affichage, ni place, ni clic                                                       |
| Adresse canonique  | adresse principale retenue pour plusieurs versions proches d'une page                                      | Google peut retenir une autre adresse que celle déclarée par le site                                   |
| Action manuelle    | mesure signalée dans Search Console après examen humain d'un non-respect des règles anti-spam              | ne pas appeler « pénalité » toute baisse non expliquée                                                 |
| Mise à jour Google | modification annoncée de systèmes de classement, consignée lorsqu'elle est notable dans le tableau de bord | une concordance de dates est un indice, pas une preuve de cause                                        |

### Test sujet, action, résultat à imposer à P2

| Phrase abstraite à éviter               | Qui agit ?               | Action concrète                                                                         | Résultat pour le lecteur                       | Phrase réécrite                                                                                                         |
| --------------------------------------- | ------------------------ | --------------------------------------------------------------------------------------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| « Analyser la volatilité de la SERP. »  | dirigeant ou analyste    | compare les mêmes pages et recherches sur deux périodes                                 | il sait si la baisse est localisée ou générale | « Comparez les mêmes pages et recherches avant et après la date de baisse. »                                            |
| « Qualifier le signal de performance. » | dirigeant                | sépare impressions, clics, taux de clics et position moyenne                            | il ne commande pas la mauvaise correction      | « Notez lequel des quatre chiffres baisse avant de chercher une cause. »                                                |
| « Corréler la core update. »            | analyste                 | place la date de baisse et la période officielle de mise à jour sur la même chronologie | la coïncidence reste une hypothèse à vérifier  | « Une mise à jour a-t-elle eu lieu au même moment ? Notez-la comme hypothèse, puis cherchez quelles pages ont changé. » |
| « Prioriser les quick wins. »           | dirigeant et intervenant | choisissent une correction limitée, réversible et assortie d'un contrôle                | le site n'est pas réécrit sans preuve          | « Commencez par la correction la plus précise que vous pourrez annuler et vérifier. »                                   |
| « Déployer un plan de recovery. »       | équipe du site           | corrige l'obstacle démontré, conserve l'état initial et fixe la prochaine lecture       | elle peut mesurer sans promettre un retour     | « Conservez l'export initial, corrigez le point prouvé et fixez la date du prochain contrôle. »                         |

### Test de l'ouverture

- [x] la situation vécue apparaît avant la méthode de l'agence ;
- [x] Search Console, impression et position moyenne sont expliqués en mots
      courants ;
- [x] la réponse « ne pas modifier à grande échelle » apparaît immédiatement ;
- [x] aucune métaphore ni matrice propriétaire ne retarde la réponse ;
- [x] aucune mise à jour, pénalité ou cause n'est présumée ;
- [x] la décision de sortie est annoncée : réparer, améliorer, observer ou
      auditer.

## 2. Cannibalisation

| Page existante ou planifiée            | Intention de cette page                                                     | Différence obligatoire du nouveau guide                                                            | Lien ou arbitrage nécessaire                                                                              |
| -------------------------------------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `pourquoi-site-pas-visible-google`     | trouver où une page ou recherche cesse d'être visible aujourd'hui           | ici, partir d'une série historique auparavant satisfaisante et expliquer une baisse mesurée        | lien vers l'autre guide si la page est désormais absente ou non indexée ; ne pas reprendre ses six étapes |
| `audit-seo-que-contient-il`            | savoir ce qu'un audit doit examiner, expliquer et livrer                    | ici, réaliser le tri de première urgence avant achat et constituer la fiche que l'auditeur recevra | lien tardif quand plusieurs hypothèses restent ouvertes ; ne pas refaire le sommaire d'un audit           |
| futur `combien-de-temps-resultats-seo` | fixer les attentes et contrôles d'un travail SEO qui commence               | ici, diagnostiquer une performance déjà acquise puis perdue                                        | ne pas annoncer de calendrier universel ; lien futur seulement après publication                          |
| futur `site-indexe-sans-trafic`        | comprendre des pages indexées qui ne gagnent pas d'impressions ou de trafic | ici, comparer un avant et un après documentés                                                      | renvoi futur si aucune base historique n'existe ; ne pas créer le lien avant publication                  |
| `choisir-agence-seo`                   | comparer les travaux, accès et promesses de plusieurs prestataires          | ici, identifier le problème avant de comparer un prestataire ou un devis                           | lien seulement si le dirigeant cherche ensuite une équipe                                                 |
| `seo-ou-google-ads`                    | répartir un budget entre deux canaux d'acquisition                          | aucune décision de budget ou de canal ici                                                          | ne pas transformer la baisse en comparatif d'acquisition                                                  |
| `refonte-sans-perdre-son-seo`          | préparer et contrôler une migration d'adresses                              | la migration n'est ici qu'un événement de la chronologie                                           | lien direct lorsqu'elle précède la baisse ; ne pas recopier le plan de redirections                       |
| `/services/referencement-google`       | présenter l'accompagnement SEO de Hagnéré Code                              | le guide reste utilisable sans contact et peut conclure à l'attente ou à une correction interne    | CTA unique, tardif et conditionnel                                                                        |

**Justification d'une URL distincte :** aucune page existante ne demande au
dirigeant de prouver une baisse historique, de la décomposer entre impressions,
taux de clics et position, puis de relier chaque hypothèse à une preuve et à une
action réversible.

### Frontières obligatoires pour P2

- Ne pas enseigner tout Search Console ni créer un lexique SEO massif.
- Ne pas reprendre le diagnostic en six étapes du guide sur le site invisible.
- Ne pas décrire le contenu complet d'un audit ni comparer des devis.
- Ne pas donner de délai universel pour conclure à une baisse ou récupérer une
  position.
- Ne pas attribuer un recul à une mise à jour Google parce que les dates se
  chevauchent.
- Ne pas appeler « pénalité » une action algorithmique supposée.
- Ne pas conseiller de réécrire, supprimer, désavouer des liens ou refondre sans
  preuve spécifique.
- Ne pas relier automatiquement une baisse de clics à une baisse de chiffre
  d'affaires.
- Ne pas publier les mises à jour de mai ou juin 2026 comme causes du cas du
  lecteur.

## 3. Demande et vocabulaire du lecteur

### Observation qualitative datée

Observation web effectuée le **22 juillet 2026** depuis la France sur les
requêtes suivantes :

- `positions Google baissent que faire SEO` ;
- `baisse position Google Search Console que faire` ;
- `perte de positions SEO causes`.

Cette observation sert uniquement à repérer les formulations et les réponses
déjà proposées. Elle ne constitue ni un relevé stable de positions, ni une
mesure de volume ou de difficulté. L'ordre, les extraits et la composition des
résultats peuvent varier.

Questions et formulations observées ou directement suggérées par ces résultats :

- Pourquoi mes positions Google baissent-elles ?
- Est-ce une mise à jour Google ou un problème sur le site ?
- Comment savoir quelles pages et quels mots ont perdu ?
- Une petite fluctuation mérite-t-elle une correction ?
- Faut-il regarder Analytics, Search Console ou un outil de positions ?
- Mon site a-t-il été pénalisé ?
- Une refonte, une redirection ou une balise `noindex` peut-elle expliquer la
  baisse ?
- Faut-il attendre ou réécrire les contenus ?
- Comment retrouver les positions perdues ?

### Formulations à privilégier

| Ce que le lecteur veut savoir | Formulation humaine                                                 | Formulation à éviter                         |
| ----------------------------- | ------------------------------------------------------------------- | -------------------------------------------- |
| réalité de la baisse          | « Regardons-nous la même période et les mêmes filtres ? »           | « Le tracker confirme-t-il la volatilité ? » |
| type de perte                 | « Y a-t-il moins d'apparitions ou moins de clics par apparition ? » | « Quel KPI de visibilité décroche ? »        |
| étendue                       | « Toute l'activité baisse-t-elle, ou seulement trois pages ? »      | « Quel cluster est impacté ? »               |
| cause                         | « Quel changement ou rapport apporte une preuve ? »                 | « Quelle update a frappé le domaine ? »      |
| prochaine action              | « Quelle correction pouvons-nous tester sans casser le reste ? »    | « Quel plan de recovery déployer ? »         |
| attente                       | « À quelle date relirons-nous les mêmes chiffres ? »                | « Quel horizon d'observation appliquer ? »   |

### Carte concurrentielle

| Page observée                                                                                                                                | Réponse et angle                                                                    | Artefact ou méthode                                      | Bon point                                              | Manque décisionnel                                                                                                                                        | Conflit d'intérêt éventuel                |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| [Google Search Central — déboguer les baisses](https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops?hl=fr) | familles de causes puis lecture du rapport Performances                             | schémas de courbes, filtres, comparaison et Trends       | source primaire, prudence sur les petites fluctuations | dense pour un dirigeant ; ne produit pas une fiche transmissible avec responsable et décision                                                             | aucun conflit commercial direct identifié |
| [Premiere.Page](https://premiere.page/blog/chute-position-trafic-seo/)                                                                       | causes techniques, migration, algorithme, contenu et liens                          | plan d'action et diagnostic professionnel                | recommande de regarder les données avant de corriger   | promet de « retrouver » ou « regagner » des positions sans pouvoir établir une récupération générale ; causalité parfois plus affirmative que les preuves | agence SEO et CTA d'audit                 |
| [HREF](https://www.href.fr/pertes-de-positions-sur-google-5-questions-a-vous-poser-pour-y-remedier/)                                         | cinq questions à partir de la forme de la baisse                                    | typologie de courbes et listes de contrôles              | distingue une saisonnalité d'une perte de position     | utilise « pénalité automatique » et des raccourcis de cause que le guide Hagnéré Code doit refuser                                                        | prestation SEO et outil d'analyse         |
| [NOIISE](https://www.noiise.com/ressources/seo/perte-positions-google-que-faire/)                                                            | accessibilité, bases SEO, Search Console, contenu, liens et évolution des résultats | checklist longue                                         | couvre les changements techniques et les outils Google | progression de type audit général ; peu de séparation entre chiffre observé, hypothèse et preuve de cause                                                 | agence SEO                                |
| [Lemon Interactive](https://www.lemon-interactive.fr/actualites/seo/chute-positions-seo/)                                                    | distinguer fluctuation et baisse durable puis corriger                              | familles technique, éditoriale et stratégique            | insiste sur le besoin d'une analyse ciblée             | seuils temporels et lien commercial formulés de façon plus générale que ce que Google permet de garantir                                                  | agence SEO                                |
| [Staenk](https://staenk.com/referencement-seo/mon-site-a-perdu-des-positions-seo/)                                                           | vérifier trafic, pages et requêtes, puis examiner changements et causes             | comparaison avant/après dans Analytics et Search Console | commence par prouver la baisse et localiser les pages  | recommande des durées fixes et présume parfois le rôle d'une refonte ; le guide doit maintenir plusieurs hypothèses                                       | agence SEO                                |

Les pages d'agences ci-dessus servent uniquement à comprendre la demande et
les angles déjà traités. **Aucun fait sur Google ne sera prouvé par leur
contenu.**

**Angle mort commun :** les listes de causes sont abondantes, mais elles
séparent rarement de façon stricte la qualité de la mesure, la nature du chiffre
qui baisse, l'étendue du problème, la chronologie, la preuve qui manque et
l'action réversible autorisée.

**Valeur originale du guide :** une fiche d'incident SEO copiable qui tient
ensemble le constat, les filtres, les quatre chiffres, les pages et recherches
touchées, les changements du site, les rapports Google, les hypothèses, leurs
preuves et la prochaine action avec un responsable.

## 4. Fiche de preuves officielles

Les formulations publiques devront placer le lien officiel près de
l'affirmation décisive. Une bibliographie finale ne suffira pas.

| Affirmation utilisable                                                                                                                                                                                                                      | Source primaire et passage utile                                                                                                                                                                                                             | Nature                | Périmètre                                               | Consultation | Confiance | Emplacement public prévu             | Conséquence lecteur                                                                                     | Fraîcheur                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ------------------------------------------------------- | ------------ | --------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| Le rapport Performances distingue clics, impressions, taux de clics et position moyenne ; cette dernière est la moyenne du résultat le mieux classé de la propriété ou de la ligne affichée                                                 | [Aide Search Console — vue d'ensemble du rapport Performances](https://support.google.com/webmasters/answer/7576553?hl=fr), « Choisir des métriques »                                                                                        | FAIT VÉRIFIÉ officiel | recherche Google, propriété et filtres sélectionnés     | 2026-07-22   | élevée    | première lecture des quatre chiffres | ne pas traiter la position moyenne comme une place universelle                                          | revalider si le rapport change                     |
| Les agrégations par propriété et par page ne comptent pas impressions, clics et position de la même façon ; CTR et position moyenne peuvent donc différer selon le regroupement choisi                                                      | [Aide Search Console — données du rapport Performances](https://support.google.com/webmasters/answer/17011364?hl=fr), « Agrégation des données par propriété et par page »                                                                   | FAIT VÉRIFIÉ officiel | rapport Performances et regroupement choisi             | 2026-07-22   | élevée    | limite de la position moyenne        | conserver le même regroupement et ne pas moyenner des moyennes exportées                                | revalider si le rapport change                     |
| Une recherche manuelle peut différer des données du rapport selon l'heure, le lieu, l'appareil et l'historique récent                                                                                                                       | [Aide Search Console — vue d'ensemble](https://support.google.com/webmasters/answer/7576553?hl=fr), « Choisir des dimensions »                                                                                                               | FAIT VÉRIFIÉ officiel | résultats Google observés par un utilisateur            | 2026-07-22   | élevée    | section « prouver la baisse »        | une capture, même en navigation privée, ne remplace pas les données filtrées du site                    | faible volatilité, revalider annuellement          |
| Les données les plus récentes peuvent être préliminaires et encore changer                                                                                                                                                                  | [Aide Search Console — vue d'ensemble](https://support.google.com/webmasters/answer/7576553?hl=fr), « Lire le graphique »                                                                                                                    | FAIT VÉRIFIÉ officiel | vue récente du rapport Performances                     | 2026-07-22   | élevée    | première vérification des données    | éviter une décision lourde sur un point encore provisoire                                               | revalider si l'interface évolue                    |
| Une comparaison doit conserver des filtres cohérents et peut porter sur période, page, appareil, pays ou apparence                                                                                                                          | [Aide Search Console — filtrage et comparaison](https://support.google.com/webmasters/answer/17011165?hl=fr), « Comparer des groupes »                                                                                                       | FAIT VÉRIFIÉ officiel | rapport Performances                                    | 2026-07-22   | élevée    | fiche d'incident                     | recopier tous les filtres avant de comparer                                                             | revalider à chaque modification du rapport         |
| Le filtre requêtes de marque/hors marque peut manquer à faible volume, porte sur un historique commençant en mars 2025 et peut classer certaines requêtes de façon imparfaite                                                               | [Aide Search Console — dimensions et regroupements](https://support.google.com/webmasters/answer/17011259?hl=fr), « Requêtes de marque et sans marque »                                                                                      | FAIT VÉRIFIÉ officiel | propriétés auxquelles le filtre est proposé             | 2026-07-22   | élevée    | localisation de la baisse            | employer cette classification comme aide informative, jamais comme découpage exhaustif                  | fonctionnalité vivante                             |
| Le rapport sur l'IA générative, déployé seulement auprès d'une partie des propriétés, montre les impressions issues des Aperçus IA et du Mode IA par page, pays, appareil ou date ; ces données sont déjà incluses dans le type Web général | [Aide Search Console — performances dans l'IA générative](https://support.google.com/webmasters/answer/16984139?hl=fr), disponibilité, contenu, dimensions et inclusion dans Web                                                             | FAIT VÉRIFIÉ officiel | rapport partiel et impressions, pas cause ni conversion | 2026-07-22   | élevée    | contrôle optionnel 2026              | si le rapport existe, le comparer avec les mêmes périodes sans additionner ses impressions au total Web | très volatile, revalider en P2/P3/P4               |
| Les comparaisons hebdomadaires ou mensuelles peuvent neutraliser l'effet du jour de la semaine ; Google recommande aussi 16 mois pour repérer une saisonnalité annuelle                                                                     | [Filtrage et comparaison](https://support.google.com/webmasters/answer/17011165?hl=fr) et [débogage des baisses](https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops?hl=fr), sections de comparaison      | FAIT VÉRIFIÉ officiel | tendances de performance, pas seuil universel           | 2026-07-22   | élevée    | section sur les périodes             | choisir une période comparable plutôt que « ce mois contre le mois dernier » par réflexe                | revalider si la fenêtre disponible change          |
| Les filtres par requête ou URL peuvent modifier les totaux en raison de la troncation et de l'omission de requêtes anonymisées                                                                                                              | [Aide Search Console — filtrage et comparaison](https://support.google.com/webmasters/answer/17011165?hl=fr), ligne sur les totaux                                                                                                           | FAIT VÉRIFIÉ officiel | détails du tableau Performances                         | 2026-07-22   | élevée    | limite de la fiche et des exports    | ne pas présenter la somme des lignes comme un total exhaustif                                           | revalider si le traitement des données change      |
| Une baisse de trafic peut avoir plusieurs causes ; une anomalie de traitement ou de journalisation des données doit aussi être vérifiée                                                                                                     | [Google Search Central — déboguer les baisses](https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops?hl=fr), introduction et causes                                                                         | FAIT VÉRIFIÉ officiel | recherche naturelle Google                              | 2026-07-22   | élevée    | ordre des contrôles                  | vérifier le thermomètre avant d'accuser le site                                                         | page vivante, revalider avant publication          |
| Des impressions stables avec moins de clics orientent notamment vers le titre, l'extrait ou d'autres présentations dans les résultats, sans établir à eux seuls une cause certaine                                                          | [Google Search Central — déboguer les baisses](https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops?hl=fr), « Analyser la courbe »                                                                         | FAIT + LIMITE         | cas où les impressions restent comparables              | 2026-07-22   | élevée    | tableau « quel chiffre baisse »      | ne pas réécrire le corps de la page par défaut                                                          | revalider si la documentation change               |
| Google recommande de ne pas trop se concentrer sur la position absolue ; un recul important et persistant justifie l'examen des pages et de leur utilité                                                                                    | [Google Search Central — déboguer les baisses](https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops?hl=fr), « Contrôler votre position moyenne »                                                           | FAIT VÉRIFIÉ officiel | position moyenne Search Console                         | 2026-07-22   | élevée    | section de décomposition             | donner priorité aux impressions et clics utiles, sans ignorer une baisse durable                        | page vivante                                       |
| Une légère fluctuation de position peut ne nécessiter aucune intervention et Google déconseille les changements radicaux sur une page qui fonctionne bien                                                                                   | [Google Search Central — déboguer les baisses](https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops?hl=fr), « Légère chute de la position »                                                                | FAIT VÉRIFIÉ officiel | exemple général, pas seuil à copier                     | 2026-07-22   | élevée    | décision « observer »                | l'absence d'action peut être une décision légitime                                                      | page vivante                                       |
| Les problèmes techniques peuvent être globaux ou limités à une page : serveur indisponible, exploration, redirection, page introuvable ou `noindex`                                                                                         | [Google Search Central — déboguer les baisses](https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops?hl=fr) et [rapport d'indexation des pages](https://support.google.com/webmasters/answer/7440203?hl=fr) | FAIT VÉRIFIÉ officiel | exploration et indexation Google                        | 2026-07-22   | élevée    | contrôles urgents                    | chercher une preuve dans l'indexation et l'inspection plutôt qu'une cause générique                     | revalider si les libellés évoluent                 |
| Une page « non indexée » n'est pas nécessairement en erreur ; il faut lire la raison précise, tandis qu'un `noindex` observé empêche son indexation                                                                                         | [Aide Search Console — rapport d'indexation](https://support.google.com/webmasters/answer/7440203?hl=fr), « Non indexées » et « URL marquée noindex »                                                                                        | FAIT VÉRIFIÉ officiel | rapport d'indexation des pages                          | 2026-07-22   | élevée    | contrôle des pages touchées          | ne pas promettre de « corriger toutes les exclues »                                                     | revalider à chaque nouvelle terminologie           |
| Une migration ou un changement d'URL peut provoquer des fluctuations pendant la réexploration et la réindexation                                                                                                                            | [Google Search Central — déboguer les baisses](https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops?hl=fr), « Déplacements et migrations »                                                                 | FAIT VÉRIFIÉ officiel | changement d'adresses ; durée variable selon le site    | 2026-07-22   | élevée    | chronologie des changements          | contrôler redirections et indexation ; ne pas promettre la durée ni le retour                           | page vivante                                       |
| Une action manuelle est signalée dans le rapport dédié et peut toucher une partie ou la totalité du site                                                                                                                                    | [Aide Search Console — actions manuelles](https://support.google.com/webmasters/answer/9044175?hl=fr), définition et périmètre                                                                                                               | FAIT VÉRIFIÉ officiel | non-respect établi après examen humain                  | 2026-07-22   | élevée    | contrôle urgent                      | utiliser le terme exact uniquement si le rapport le confirme                                            | revalider si le processus change                   |
| Le rapport de sécurité signale notamment contenu piraté, logiciel malveillant ou ingénierie sociale ; des avertissements peuvent réduire le trafic                                                                                          | [Aide Search Console — problèmes de sécurité](https://support.google.com/webmasters/answer/9044101?hl=fr)                                                                                                                                    | FAIT VÉRIFIÉ officiel | problèmes détectés par Google ; exemples non exhaustifs | 2026-07-22   | élevée    | contrôle urgent                      | escalader et traiter la sécurité avant une réécriture SEO                                               | revalider si les catégories changent               |
| Google Trends fournit un échantillon agrégé, anonymisé et catégorisé ; il permet d'examiner l'évolution de l'intérêt, pas de prouver un volume exact ni la cause propre au site                                                             | [Google Search Central — premiers pas avec Trends](https://developers.google.com/search/docs/monitor-debug/trends-start?hl=fr), « À propos de Google Trends »                                                                                | FAIT VÉRIFIÉ officiel | tendances Google et YouTube selon l'outil               | 2026-07-22   | élevée    | saisonnalité et demande              | distinguer une baisse du marché d'une baisse propre au site, sans certitude excessive                   | revalider si la méthode change                     |
| Le Status Dashboard signale des problèmes affectant beaucoup de sites ou d'utilisateurs et des mises à jour notables ; une annotation peut être liée au site, sans prouver qu'elle l'est                                                    | [Google Search Central — fonctionnement du tableau de bord](https://developers.google.com/search/help/status-dashboard?hl=fr), introduction et cycle de vie                                                                                  | FAIT VÉRIFIÉ officiel | incidents généralisés et mises à jour notables          | 2026-07-22   | élevée    | chronologie externe                  | considérer l'événement comme une hypothèse datée, jamais comme un verdict                               | page vivante, contrôle le jour de publication      |
| Après une mise à jour principale, Google recommande d'éviter les corrections précipitées et d'examiner le site et les pages touchées ; une amélioration peut ne produire aucun effet notable                                                | [Google Search Central — mises à jour principales](https://developers.google.com/search/docs/appearance/core-updates?hl=fr), « Évaluer » et « Éléments à prendre en compte »                                                                 | FAIT VÉRIFIÉ officiel | principales mises à jour de classement                  | 2026-07-22   | élevée    | section sur les mises à jour         | ne pas supprimer ou réécrire en masse pour « plaire à l'algorithme »                                    | revalider à chaque mise à jour de la documentation |
| Search Console publie une page d'anomalies de données ; ces incidents peuvent modifier une courbe sans modifier les performances réelles du site                                                                                            | [Aide Search Console — anomalies de données](https://support.google.com/webmasters/answer/6211453?hl=fr), introduction                                                                                                                       | FAIT VÉRIFIÉ officiel | rapports et périodes explicitement listés               | 2026-07-22   | élevée    | premier contrôle de mesure           | vérifier si l'incident concerne le bon rapport, le bon type de recherche et les bonnes dates            | très volatile, revalider en P2/P3/P4               |
| Une propriété Search Console incorrecte ou incomplète peut donner l'impression que le trafic a disparu                                                                                                                                      | [Aide Search Console — pourquoi le trafic a-t-il chuté ?](https://support.google.com/webmasters/answer/9079473?hl=fr), première raison possible                                                                                              | FAIT VÉRIFIÉ officiel | variante HTTP/HTTPS ou propriété observée               | 2026-07-22   | élevée    | première ligne de la fiche           | confirmer le bon site avant tout diagnostic                                                             | revalider si le guide officiel évolue              |

### Ce qui relève d'une recommandation Hagnéré Code

Les décisions suivantes sont des méthodes éditoriales, pas des règles que
Google impose :

1. geler les réécritures et suppressions massives pendant la collecte des
   preuves ;
2. commencer par le chiffre qui baisse, puis localiser le périmètre avant de
   chercher une cause ;
3. tenir une seule chronologie avec changements du site, incidents Google et
   données ;
4. pour chaque hypothèse, écrire une preuve favorable, une preuve contraire et
   ce qui manque ;
5. choisir d'abord une action réversible et un test qui peut invalider
   l'hypothèse ;
6. confier les accès en lecture seule lorsque l'intervenant doit seulement
   analyser ;
7. mesurer séparément les demandes commerciales : Search Console ne prouve pas
   à elle seule la vente perdue ou gagnée.

### Vérification volatile du 22 juillet 2026

Cette section reste dans le dossier de recherche. P2 ne doit pas la recopier
comme cause d'un cas réel.

- Le [Google Search Status Dashboard](https://status.search.google.com/summary)
  affichait **aucun incident récent** pour l'exploration et l'indexation.
- Il listait une **spam update de juin 2026**, commencée le 24 juin et donnée
  comme achevée après 2 jours et 1 heure, ainsi qu'une **core update de mai
  2026**, commencée le 21 mai et donnée comme achevée après 11 jours et 21
  heures.
- Ces événements prouvent seulement que Google les a annoncés. Ils ne prouvent
  pas qu'un site précis a été affecté, ni dans quel sens.
- La [page des anomalies Search Console](https://support.google.com/webmasters/answer/6211453?hl=fr)
  distinguait des erreurs propres à Discover, une évolution des résultats FAQ
  et une correction de journalisation des impressions. Chaque ligne possède
  son produit et sa période : elle ne doit pas être généralisée à la recherche
  Web.
- **P2, P3 et P4 doivent rouvrir ces deux pages le jour de leur travail.** Une
  copie de ces dates sans nouvelle vérification est interdite.

### Contradictions et données à ne pas publier

- Pas de seuil universel du type « trois places pendant sept jours = chute
  grave ». Google distingue petites et fortes baisses par exemples, pas par
  règle contractuelle applicable à tous les sites.
- Pas de « pénalité algorithmique ». Une action manuelle existe lorsqu'elle est
  signalée dans Search Console ; les autres systèmes de classement ne doivent
  pas être transformés en sanction supposée.
- Pas de causalité déduite de la forme d'une courbe. Les croquis de Google
  orientent une enquête ; ils ne démontrent pas une cause.
- Pas de navigation privée présentée comme position réelle universelle. Elle
  réduit certains effets, mais les résultats varient encore selon lieu,
  appareil, langue, heure et composition de la page.
- Pas de position moyenne assimilée à la position d'un mot-clé unique. Elle
  dépend de l'agrégation et des filtres.
- Pas de somme des requêtes exportées présentée comme exhaustive : certaines
  requêtes sont anonymisées ou tronquées.
- Pas de baisse de clics convertie automatiquement en perte de prospects ou de
  chiffre d'affaires.
- Pas de contenu concurrent jugé « meilleur » sans comparaison visible et
  datée de la réponse, de l'intention et de l'usage.
- Pas de lien perdu, de contenu généré par IA, de vitesse, de champ lexical ou
  de Core Web Vitals annoncé comme cause sans preuve propre au périmètre.
- Pas de garantie de récupération, de délai, de trafic ou de classement après
  correction.
- Pas de suppression massive comme première réponse à une core update.
- Pas de date des mises à jour de mai ou juin 2026 dans une metadata ou un
  passage durable sans nouvelle vérification.

## 5. Exemple illustratif fictif et calcul reproductible

> **Exemple illustratif fictif.** Les valeurs ci-dessous sont inventées pour
> expliquer la décomposition d'une courbe. Elles ne représentent ni un client,
> ni une moyenne, ni un seuil d'alerte. Les deux périodes comptent chacune 28
> jours et utilisent fictivement les mêmes filtres : recherche Web, France,
> mobile et même groupe de pages.

| Mesure           | Période A | Période B |                                                  Calcul du changement | Lecture possible, sans cause inventée                                        |
| ---------------- | --------: | --------: | --------------------------------------------------------------------: | ---------------------------------------------------------------------------- |
| Impressions      |    24 000 |    18 000 |                                  `(18 000 - 24 000) / 24 000 = -25 %` | le site a été moins souvent affiché dans ce périmètre                        |
| Clics            |       480 |       288 |                                           `(288 - 480) / 480 = -40 %` | 192 clics de moins sont comptés, sans information automatique sur les ventes |
| Taux de clics    |     2,0 % |     1,6 % |                     `1,6 - 2,0 = -0,4 point`, soit `-20 %` en relatif | une part plus faible des impressions a produit un clic                       |
| Position moyenne |       5,8 |       8,4 | `8,4 - 5,8 = +2,6` ; le nombre augmente, donc la place moyenne recule | le meilleur résultat moyen du périmètre est apparu plus bas                  |
| Contrôle clics   |       480 |       288 |                      `24 000 × 2,0 % = 480` et `18 000 × 1,6 % = 288` | les chiffres sont arithmétiquement cohérents                                 |

### Décomposer sans attribuer une cause

Une décomposition choisie peut aider à lire la perte de 192 clics :

1. garder 24 000 impressions et appliquer le nouveau taux de clics :
   `24 000 × 1,6 % = 384`, soit 96 clics de moins ;
2. appliquer ensuite les 18 000 impressions : `18 000 × 1,6 % = 288`, soit 96
   clics de moins supplémentaires ;
3. contrôle : `96 + 96 = 192` clics perdus.

Cette répartition **dépend de l'ordre du calcul**. En commençant par les
impressions au taux initial, la première étape vaut 120 clics (`18 000 × 2 % =
360`) et la seconde 72 clics (`360 - 288`). Le seul résultat invariant est la
perte totale de 192 clics. Cette démonstration interdit d'écrire « la moitié de
la baisse vient du taux de clics » : ni ce calcul, ni Search Console ne prouve
une causalité.

Questions que l'exemple doit ouvrir :

- quelles pages expliquent la plus grande partie des 6 000 impressions de
  moins ?
- les recherches concernées suivent-elles la même tendance dans Google Trends ?
- le taux de clics baisse-t-il seulement sur mobile ou sur un type d'apparence ?
- l'indexation ou l'adresse canonique a-t-elle changé sur les pages touchées ?
- un changement de titre, de contenu, d'adresse ou de navigation précède-t-il
  exactement la baisse ?

Le guide public doit conserver l'étiquette fictive près du tableau et ne pas
transformer ces nombres en norme.

## 6. Empreinte éditoriale à ne pas reproduire

Trois guides SEO existants ont été lus intégralement avant ce plan.

| Guide voisin                       | Type d'ouverture                                                    | Progression                                                                         | Dispositif récurrent                                   | Type d'exemple                                          | Place du CTA                                      | Type de conclusion                                       |
| ---------------------------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------- | ------------------------------------------------- | -------------------------------------------------------- |
| `pourquoi-site-pas-visible-google` | recherche métier vécue, puis question « où la visibilité s'arrête » | six preuves de la découverte à la demande                                           | outil interactif URL–recherche, cartes de parcours     | entreprise fictive BatiClair 73 suivie sur quatre pages | après le diagnostic, les décisions et les limites | quatre lignes : URL, preuve manquante, responsable, date |
| `audit-seo-que-contient-il`        | dirigeant qui cherche ce que le rapport doit livrer                 | distinction scan/audit/stratégie, périmètre, contrôles, rapport, réception          | nombreux tableaux et fiche de réception à six réponses | alerte fictive de pages dupliquées                      | avant les chapitres après rapport                 | ce qu'un audit peut promettre, puis service              |
| `choisir-agence-seo`               | trois devis hétérogènes                                             | promesses à écarter, demande commune, cinq questions, propriété, rapport et verdict | cartes « promesse » et quatre décisions de signature   | réponse de devis vague puis exploitable                 | après le verdict de sélection                     | conflit d'intérêt déclaré et limites                     |

### Choix du nouveau guide

```text
Tension ou question motrice : les chiffres baissent, mais aucune cause n'est encore prouvée ; quelle vérification autorise la première action ?
Type d'ouverture retenu et pourquoi : scène simple du dirigeant devant une courbe et réponse immédiate « ne changez pas tout » ; elle reprend son urgence réelle sans créer de peur
Progression retenue et pourquoi : qualité de la mesure → nature du chiffre → étendue → chronologie → causes urgentes → demande et résultats concurrents → hypothèse et action ; l'ordre va du plus vérifiable au plus interprétatif
Artefact signature : fiche d'incident SEO copiable avec filtres, quatre mesures, pages/requêtes, événements, rapports Google, hypothèses, preuves et action réversible
Rythme et registre de voix : paragraphes courts, questions concrètes, un seul exemple chiffré sans personnage, puis fiche opérationnelle
Place naturelle du CTA : après la fiche remplissable et les actions des 30 premières minutes, 24 heures et 7 jours
Forme de conclusion : conserver l'état initial, choisir une hypothèse, agir de façon réversible et fixer le prochain contrôle ; accepter l'option d'attendre
Au moins trois différences avec les guides voisins : pas de chaîne en six étapes, pas d'outil interactif ni d'entreprise fictive nommée ; pas de sommaire d'audit ; pas de comparaison de prestataires ; la progression est une enquête temporelle fondée sur une courbe déjà acquise
```

### Risques d'empreinte à surveiller en P2

- Ne pas ouvrir par « le bon diagnostic dépend de… » ou un cadre conceptuel.
- Ne pas baptiser la fiche « matrice de causalité » ou « radar de visibilité ».
- Ne pas fabriquer huit cartes identiques à celles du guide sur le site
  invisible.
- Ne pas suivre un faux client sur tout l'article.
- Ne pas multiplier les tableaux : un tableau pour les quatre mesures, un pour
  l'exemple et la fiche sous forme de blocs copiables suffisent.
- Ne pas répéter mécaniquement « preuve, responsable, test » dans chaque titre ;
  ces champs vivent dans l'artefact.

## 7. Artefact signature — fiche d'incident SEO copiable

La page publique doit proposer cette fiche en HTML copiable. Aucun
téléchargement, sauvegarde ou transmission ne doit être promis en P2 tant qu'un
fichier ou un outil distinct n'existe pas et n'a pas été testé.

La page montrera d'abord la fiche courte du dirigeant. Le complément technique
vient ensuite ; chaque champ auquel l'entreprise n'a pas accès peut recevoir la
réponse « inconnu ». Une donnée manquante devient ainsi une question attribuée,
pas un prétexte pour inventer la cause.

```text
FICHE D'INCIDENT SEO — VERSION DU 22 JUILLET 2026

FICHE COURTE DU DIRIGEANT — À REMPLIR D'ABORD
Ce qui a baissé, avec le chiffre avant et après :
Pages ou offres touchées :
Conséquence réellement observée sur les demandes ou ventes :
Changement connu juste avant la baisse :
Première action envisagée et possibilité de revenir en arrière :
Personne qui vérifiera le résultat et date du contrôle :

COMPLÉMENT TECHNIQUE — FACULTATIF, « INCONNU » EST UNE RÉPONSE ACCEPTÉE

1. Ce que nous avons observé
Date et heure de la première alerte :
Personne qui l'a vue :
Outil ou rapport :
Propriété Search Console exacte :
Phrase factuelle : « Les clics de [périmètre] sont passés de […] à […] »
Ce que nous ne savons pas encore :

2. Les deux périodes comparées
Période A :
Période B :
Pourquoi sont-elles comparables :
Type de recherche : Web / Images / Vidéo / Actualités
Pays :
Appareil :
Apparence dans les résultats :
Filtre de pages :
Filtre de requêtes :
Données préliminaires présentes : oui / non / inconnu
Anomalie Search Console applicable : oui / non / à vérifier
Rapport IA générative disponible : oui / non / inconnu
Si oui, impressions comparées sur les mêmes périodes :
Ne pas les additionner au total Web : elles y sont déjà incluses

3. Les quatre chiffres avec les mêmes filtres
                     Période A | Période B | Différence
Impressions :
Clics :
Taux de clics :
Position moyenne :

4. Où la baisse se concentre
Site entier / dossier / pages isolées :
Pages perdant le plus de clics :
Requêtes perdant le plus d'impressions :
Marque / hors marque, si cette classification est disponible et expliquée
(elle peut manquer à faible volume, ne remonte pas avant mars 2025 et peut
classer certaines requêtes de façon imparfaite) :
Pays, appareil ou type de recherche particulièrement touché :
Pages et requêtes stables servant de comparaison :

5. Chronologie vérifiable
Date | Changement ou événement | Source de la date | Périmètre possible
     | mise en ligne, titre, contenu, URL, redirection, noindex, canonique
     | panne, hébergement, robots.txt, navigation ou maillage
     | migration, changement d'agence ou outil de mesure
     | incident ou mise à jour du Google Search Status Dashboard

6. Rapports de sécurité et d'indexation
Site accessible aujourd'hui : oui / non / partiellement
Rapport d'indexation : changement correspondant, avec exemples d'URL :
Inspection de trois pages touchées :
Adresse canonique attendue / choisie :
Action manuelle : aucune / signalée / accès manquant
Problème de sécurité : aucun / signalé / accès manquant

7. Hypothèses — une ligne par cause possible
Hypothèse :
Preuve qui va dans ce sens :
Preuve qui la contredit :
Information encore manquante :
Priorité métier :
Action proposée :
Action réversible : oui / non ; comment revenir en arrière :
Responsable :
Contrôle qui peut invalider l'hypothèse :
Date du contrôle :

8. Décision
Observer / corriger un obstacle / améliorer une page / auditer un périmètre :
Ce que nous ne modifierons pas pour l'instant :
Prochain point de décision :
```

### Critère d'acceptation de la fiche

La fiche est exploitable lorsqu'une personne absente de l'analyse peut :

1. reproduire la comparaison dans Search Console ;
2. nommer les pages et recherches touchées ;
3. distinguer le constat de l'hypothèse ;
4. vérifier les rapports urgents ;
5. comprendre ce qui sera modifié et comment revenir en arrière ;
6. savoir quand et avec quel chiffre la décision sera réexaminée.

Une ligne « Google update » sans pages touchées, dates, filtres et preuve
complémentaire ne passe pas ce critère.

## 8. Plan annoté

| Section provisoire                                            | Question résolue                                                                       | Preuve ou exemple                                                                           | Conséquence ou décision                                                                        | Format choisi                                    |
| ------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| Mes clics baissent : dois-je modifier le site ?               | quelle est la réponse immédiate ?                                                      | projet des 144 premiers mots                                                                | geler les modifications massives et ouvrir Search Console                                      | ouverture brève                                  |
| Une capture de Google ne prouve pas une baisse                | regardons-nous le bon site et le même périmètre ?                                      | rapport Performances : propriété, filtres, données préliminaires et variation des résultats | écrire une phrase factuelle reproductible                                                      | prose + mini-checklist                           |
| Quel chiffre baisse réellement ?                              | impressions, clics, taux de clics ou position racontent-ils la même chose ?            | définitions officielles et quatre situations                                                | choisir la prochaine vérification selon le chiffre                                             | quatre cartes mobiles, tableau sur grand écran   |
| La baisse touche-t-elle tout le site ?                        | quelles pages, recherches, pays, appareils ou types de résultat concentrent la perte ? | filtres Search Console, classification de marque bornée et rapport IA optionnel             | réduire le problème avant d'ouvrir une cause, sans additionner deux fois les impressions Web   | procédure courte                                 |
| Qu'est-ce qui a changé juste avant ?                          | une mise en ligne, migration, panne ou réglage coïncide-t-il ?                         | chronologie de la fiche et rapports indexation/inspection                                   | traiter un obstacle observé avant de réécrire                                                  | chronologie copiable                             |
| Google signale-t-il une action ou un problème de sécurité ?   | existe-t-il une urgence explicite ?                                                    | rapports officiels actions manuelles et sécurité                                            | escalader seulement sur preuve ; bannir le mot « pénalité » générique                          | encadré d'urgence                                |
| La demande a-t-elle baissé, ou seulement notre site ?         | le marché recherche-t-il moins le sujet ?                                              | 16 mois Search Console et Google Trends, avec limites de l'échantillon                      | adapter la période et l'investissement avant d'accuser le contenu                              | prose + comparaison simple                       |
| Une mise à jour Google est-elle la cause ?                    | que prouve une concordance de dates ?                                                  | Status Dashboard et recommandations core updates                                            | conserver l'événement comme hypothèse, inspecter les pages, éviter les corrections précipitées | encadré « indice, pas verdict »                  |
| Les résultats concurrents répondent-ils mieux aujourd'hui ?   | la page satisfait-elle encore la recherche observée ?                                  | comparaison datée de 3 à 5 résultats, requête par requête                                   | améliorer seulement ce qui manque réellement au lecteur                                        | questions de lecture, pas checklist de mots-clés |
| Exemple fictif : décomposer 192 clics de moins                | comment séparer les mesures sans inventer la cause ?                                   | calcul 24 000/18 000 impressions et 2,0/1,6 %                                               | formuler des hypothèses et les tester                                                          | tableau calculable + limite d'ordre              |
| Remplir la fiche d'incident SEO                               | que transmettre à l'équipe ou au prestataire ?                                         | artefact complet                                                                            | obtenir un diagnostic comparable et une action contrôlable                                     | blocs copiables adaptés au mobile                |
| Que faire dans les 30 minutes, les 24 heures et les 7 jours ? | dans quel ordre agir sans attendre des mois ?                                          | synthèse des contrôles précédents                                                           | mesurer, localiser, puis corriger ou auditer                                                   | chronologie courte                               |
| Quand demander un audit ciblé ?                               | un intervenant extérieur est-il proportionné ?                                         | bons et mauvais fits                                                                        | corriger seul, observer, auditer un groupe de pages ou escalader                               | quatre issues distinctes                         |
| Sources, limites et FAQ résiduelle                            | que reste-t-il impossible à promettre ?                                                | sources officielles et questions directes                                                   | aucun retour, délai ou rang garanti                                                            | liste courte + FAQ                               |

### Chronologie d'action prévue

Les délais ci-dessous organisent le travail ; ils ne prédisent ni la réaction de
Google, ni un retour de positions.

#### Dans les 30 premières minutes

1. ne pas supprimer, réécrire ou rediriger en masse ;
2. vérifier la bonne propriété Search Console et recopier tous les filtres ;
3. enregistrer les quatre chiffres et les deux périodes ;
4. vérifier si les données sont préliminaires ou si une anomalie officielle
   s'applique ;
5. ouvrir le site, les rapports Actions manuelles et Problèmes de sécurité ;
6. noter un changement récent évident sans lui attribuer encore la cause.

#### Dans les 24 heures

1. exporter ou partager la vue avant toute correction ;
2. classer les pages et requêtes par perte de clics et d'impressions ;
3. comparer pays, appareils et types de recherche utiles ;
4. inspecter un petit échantillon des pages touchées et de pages stables ;
5. écrire la chronologie des changements du site et vérifier le Status
   Dashboard ;
6. consulter Google Trends seulement pour les termes réellement touchés.

#### Dans les 7 jours

1. classer comme non étayées les hypothèses sans preuve et les écarter de la
   première action ;
2. engager immédiatement le traitement de l'obstacle technique ou de sécurité
   démontré, selon le rapport dédié ;
3. pour le contenu ou la concurrence, comparer les pages et choisir une
   amélioration limitée ;
4. noter l'état initial, le moyen de revenir en arrière et la date de contrôle ;
5. demander un audit ciblé si plusieurs familles de pages ou plusieurs causes
   restent indissociables.

Cette chronologie ne signifie pas qu'une semaine suffit à mesurer l'effet d'une
correction. La date de relecture dépendra du changement, de l'exploration et du
volume de données disponible.

### FAQ résiduelle pressentie

1. **Une mise à jour Google au même moment prouve-t-elle la cause ?** Non. Elle
   fournit une date à placer dans la chronologie ; il faut encore montrer le
   périmètre touché et exclure une erreur de mesure ou du site.
2. **Une baisse de position moyenne signifie-t-elle que le SEO ne fonctionne
   plus ?** Non. Lisez avec elle impressions, clics, pages et requêtes sous les
   mêmes filtres.
3. **Faut-il réécrire les articles qui ont perdu des clics ?** Non, pas avant
   d'avoir vérifié la demande, l'indexation, le résultat affiché et la réponse
   des pages concurrentes.
4. **La navigation privée donne-t-elle la vraie position ?** Non. Elle reste une
   observation locale et datée, pas une position universelle.
5. **Combien de temps faut-il attendre avant d'agir ?** Il n'existe pas de
   durée universelle. Les problèmes de sécurité, actions manuelles et obstacles
   techniques prouvés se traitent immédiatement ; une petite fluctuation sans
   perte utile peut être observée.
6. **Une agence peut-elle garantir le retour des positions ?** Non. Elle peut
   s'engager sur l'analyse, les corrections, les livrables et les contrôles,
   pas sur une décision future de Google.

Chaque réponse publique devra commencer par oui, non ou une limite claire et
rester plus courte qu'une nouvelle section.

## 9. Ressource, maillage et conversion

```text
Une ressource est-elle naturellement nécessaire ? oui, comme fiche HTML copiable ; aucun fichier séparé prévu en P1
Problème qu'elle résout après la lecture : transmettre une baisse reproductible sans envoyer « nos positions ont chuté » et une capture isolée
Résultat autonome produit : périmètre, comparaison, quatre chiffres, pages/requêtes, chronologie, rapports urgents, hypothèses et prochaine action contrôlable
Format éditable et format de consultation : blocs de texte copiables et imprimables depuis la page ; pas de sauvegarde serveur
Rubriques réellement livrées : huit blocs de la fiche d'incident décrits au §7
Exemple rempli : exemple numérique fictif sans entreprise nommée ; P2 peut montrer un extrait rempli de la fiche
Conclusion « ne pas investir » possible : oui, si la mesure est erronée, la fluctuation légère, la saisonnalité commune ou une correction ponctuelle suffit
Sources, hypothèses et limites visibles : sources Google adjacentes, étiquette fictive, aucune promesse de récupération
Données saisies et destination : aucun formulaire interactif nécessaire ; le lecteur copie localement la trame
Processus de génération reproductible : HTML statique de la page
Journal de QA : à ouvrir en P2/P4 pour copie, impression, mobile, liens et thèmes
Limites connues et niveau de revue humaine : aucune analyse automatique de Search Console ; aucun test avec un dirigeant réel en P1
Mode de maintenance : revalidation du Status Dashboard, des anomalies et des libellés Search Console à chaque modification substantielle
Test du fichier ou outil : non applicable tant qu'aucun téléchargement ou outil interactif n'est promis
Bon fit Hagnéré Code : baisse importante ou persistante sur des pages commerciales, migration récente, données contradictoires ou plusieurs causes possibles
Mauvais fit : légère fluctuation sans perte de clics utiles, erreur de filtre, correction unique déjà identifiée ou absence d'accès empêchant encore la mesure
Action non commerciale : remplir et transmettre la fiche au prestataire actuel ou à l'équipe interne
CTA principal et résultat après clic : « Faire vérifier la baisse avant de toucher au site » vers `/demarrer-un-projet` ; obtenir la liste des preuves manquantes et le périmètre d'un éventuel audit, sans promesse de récupération
```

### Maillage prévu

Liens sortants depuis le futur guide :

- vers `pourquoi-site-pas-visible-google` si certaines pages ne sont plus
  indexées ou affichées ;
- vers `refonte-sans-perdre-son-seo` si une migration précède la baisse ;
- vers `audit-seo-que-contient-il` si plusieurs hypothèses restent ouvertes ;
- vers `choisir-agence-seo` seulement si le lecteur compare ensuite des
  prestataires ;
- vers `/services/referencement-google` dans le CTA et un lien éditorial
  final ;
- vers le futur `combien-de-temps-resultats-seo` uniquement après sa
  publication, pour distinguer attente normale d'un nouveau travail et incident
  sur une performance acquise.

Lien entrant prioritaire à prévoir en P2 sous l'autorité de l'éditeur unique :

1. depuis `audit-seo-que-contient-il`, dans le passage déjà consacré aux baisses
   de trafic ;
2. en alternative, depuis `pourquoi-site-pas-visible-google`, lorsque le lecteur
   possède une série historique et constate une baisse ;
3. la collection « Référencement naturel » du hub sera alimentée par le registre
   seulement après la porte éditoriale.

## 10. P0 et P1 à contrôler avant la porte suivante

### P0 — blocages factuels ou décisionnels

- même propriété, mêmes périodes comparables et mêmes filtres avant tout calcul ;
- position moyenne expliquée comme agrégat, pas comme rang universel ;
- même regroupement par propriété ou par page ; aucune moyenne des moyennes
  exportées ;
- impressions, clics, taux de clics et position séparés ;
- donnée préliminaire et anomalie Search Console vérifiées ;
- action manuelle et problème de sécurité nommés uniquement si les rapports les
  signalent ;
- aucune « pénalité algorithmique » ;
- aucune mise à jour Google présentée comme cause sur simple concordance ;
- exemple fictif annoncé avant les nombres et calculs refaits ;
- aucune somme de requêtes annoncée exhaustive ;
- aucune baisse de clics convertie en perte de vente sans suivi commercial ;
- aucune garantie de retour, de délai, de position ou de trafic ;
- dates du Status Dashboard et anomalies rouvertes le jour de P2, P3 et P4.

### P1 — manques importants à éviter

- réponse directe dans les 150 premiers mots ;
- un tableau ou quatre cartes permettent de savoir quoi regarder selon le
  chiffre qui baisse ;
- la fiche d'incident reste copiable et lisible à 390 px ;
- des pages stables servent de comparaison aux pages touchées ;
- les changements du site et les événements Google vivent dans une seule
  chronologie, sans causalité implicite ;
- Google Trends est présenté comme échantillon d'intérêt, pas comme volume de
  recherche ;
- le guide accepte l'observation et la correction interne comme issues ;
- le CTA vient après la fiche et explique le résultat de l'échange ;
- le plan ne reproduit ni les six étapes du site invisible, ni la réception
  d'audit, ni les cinq questions d'agence ;
- les H2 publics restent compréhensibles sans « signal », « volatilité »,
  « recovery » ou « core update » non expliqués.

## 11. Métadonnées provisoires à vérifier en P2

```text
Title envisagé : Positions Google en baisse : que vérifier ? · Hagnéré Code
H1 envisagé : Vos positions Google baissent : que vérifier avant de modifier le site ?
Description envisagée : Clics, impressions, position, saisonnalité ou problème technique : localisez la baisse dans Search Console avant de réécrire vos pages.
Intention : diagnostic décisionnel après une baisse observée, pas page de service
Mot-clé principal : positions Google baissent
Variantes naturelles : perte positions Google, baisse trafic SEO, chute impressions Search Console, pages perdent des clics
```

Ces formulations ne sont pas figées. P2 doit vérifier leur longueur, leur
cohérence avec l'ouverture et l'absence de promesse implicite de récupération.

## 12. Rapport de sortie P1 — Recherche

```text
PASSE 1 TERMINÉE
Slug : positions-google-baissent
Lecteur et phrase réelle : dirigeant de TPE/PME — « Nous étions bien placés sur Google et, depuis quelques semaines, les clics baissent. Est-ce qu'on doit refaire les articles ou est-ce qu'il y a un problème sur le site ? »
Décision : prouver la baisse avec un périmètre comparable, identifier le chiffre et les pages touchés, puis choisir une hypothèse prouvable et une action réversible
Angle et forme dominante : enquête d'incident fondée sur Search Console, chronologie unique et fiche transmissible
Pages proches et différence : site invisible = absence actuelle ; audit SEO = contenu du livrable ; délai SEO = attente d'un travail neuf ; agence = comparaison de prestataires ; ici = performance acquise puis perdue
Sources décisives : rapport Performances, agrégations, marque/hors marque et rapport IA générative optionnel ; guide officiel de baisse, indexation, actions manuelles, sécurité, anomalies, Trends, core updates et Status Dashboard
Incertitudes exclues : seuil universel, pénalité supposée, volume de requête, cause déduite d'une courbe, délai ou garantie de récupération, lien automatique avec le chiffre d'affaires
Action autonome et CTA possible : remplir la fiche d'incident ; CTA tardif pour faire vérifier les preuves et borner un audit ciblé
Plan : mesure → quatre chiffres → étendue → chronologie → urgences → demande → mise à jour/concurrence → exemple → fiche → 30 min/24 h/7 jours → décision
Snapshot : docs/research/manifests/positions-google-baissent-p1.sha256
```

### Porte de sortie P1

- [x] brief complet, lecteur précis et décision unique ;
- [x] URL distincte justifiée contre les guides voisins et futurs ;
- [x] observation web actuelle et datée, sans volume ni position revendiquée ;
- [x] guides SEO voisins lus intégralement et empreinte documentée ;
- [x] sources officielles Google ouvertes et reliées aux affirmations ;
- [x] faits, limites et recommandations Hagnéré Code séparés ;
- [x] Status Dashboard et anomalies revalidés le 22 juillet 2026 ;
- [x] aucune cause de baisse présumée ;
- [x] calcul fictif reproductible, avec dépendance à l'ordre explicitée ;
- [x] fiche d'incident copiable et critère d'acceptation définis ;
- [x] actions des 30 minutes, 24 heures et 7 jours bornées sans promesse de
      résultat ;
- [x] bon fit, mauvais fit, maillage et CTA conditionnel définis ;
- [x] plan annoté distinct des voisins ;
- [x] P2, P3 et P4 laissées bloquées ;
- [x] manifeste P1 consigné.

### Revalidation contradictoire de P1 — 22 juillet 2026

Un second agent, distinct de la recherche initiale et resté en lecture seule,
a rouvert les sources officielles, vérifié les liens et refait tous les calculs
avant P2.

- aucun P0 ;
- les métriques ne sont plus présentées comme les causes de leur propre
  variation ;
- l'ouverture compte 144 mots et explique réellement la position moyenne ;
- les agrégations par propriété et par page sont distinguées, sans moyenne de
  moyennes exportées ;
- le filtre marque/hors marque porte ses limites de volume, d'historique et de
  classification ;
- le nouveau rapport sur l'IA générative reste un contrôle optionnel : il ne
  couvre qu'une partie des propriétés et ses impressions sont déjà incluses
  dans Web ;
- les calculs de −25 %, −40 %, −0,4 point, −20 %, +2,6 positions, 480 et 288
  clics, puis les décompositions 96 + 96 et 120 + 72 sont exacts ;
- le Status Dashboard et les anomalies doivent être rouverts aux trois passes
  suivantes ; aucune concordance de date ne prouve une cause ;
- la fiche commence par six questions de dirigeant et accepte « inconnu » dans
  son complément technique.

Le manifeste P1 est régénéré après ces corrections. La plume publique, le
rendu, les interactions et un éventuel test par un dirigeant restent à prouver
aux passes suivantes.

**Verdict P1 : porte validée.** P2 peut commencer sur ce snapshot, sous
réserve de rouvrir les sources volatiles et de conserver un seul éditeur. Une
nouvelle cause décisive, un changement d'intention ou une modification de la
fiche impose une nouvelle P1 et un nouveau manifeste.

## 13. Passes suivantes — réservées

### Rapport P2 — Rédaction et intégration

```text
PASSE 2 TERMINÉE
Fichiers créés : page publique et image sociale dédiée.
Fichiers partagés modifiés : registre, icône du hub, garde-fou de langage humain et un lien entrant depuis audit-seo-que-contient-il.
Ouverture et réponse : situation vécue et réponse « ne changez rien à grande échelle » avant la méthode ; Search Console et les quatre chiffres expliqués en mots courants ; ouverture sous 150 mots.
Forme propre au sujet : enquête en huit décisions ; quatre mesures séparées ; pages stables comparées aux pages touchées ; une seule ligne du temps ; fiche courte du dirigeant en six lignes, puis complément facultatif acceptant « inconnu ».
Exemples ou calculs : exemple entièrement fictif ; 24 000 vers 18 000 impressions, 480 vers 288 clics, 2,0 % vers 1,6 % et 5,8 vers 8,4 ; calculs −25 %, −40 %, −0,4 point, −20 % relatif et +2,6 refaits ; deux ordres 96 + 96 et 120 + 72, avec 192 clics comme seul résultat invariant.
Sources visibles : documentation officielle Search Console placée près des métriques, filtres, agrégations, indexation, actions manuelles et sécurité ; Search Central près des baisses, Trends et mises à jour ; limites du fournisseur explicites.
Action autonome : reproduire la comparaison, localiser les pages et recherches, remplir la fiche, puis observer, corriger un obstacle, améliorer une page ou demander un audit ciblé.
Bon fit et mauvais fit : baisse importante ou persistante sur des pages commerciales et causes encore mêlées ; observation ou correction interne assumée pour une fluctuation légère, un filtre erroné ou un obstacle ponctuel déjà identifié.
CTA et destination : un seul CTA tardif « Faire vérifier la baisse avant de toucher au site » vers /demarrer-un-projet ; résultat et limites annoncés ; showSidebarCta=false.
SEO et produit : title 43 caractères, meta 143, canonical exact, noindex/nofollow conservé par editorialStatus, Article + BreadcrumbList sans FAQPage, OG dédiée 1200 × 630.
Contrôles rapides : manifeste P1 vérifié avant édition ; Prettier et ESLint ciblés verts ; tsc sans erreur ; 20 tests de langage humain verts ; route, OG et six destinations internes en 200 ; un H1 ; aucune FAQPage ; snapshot navigateur local à 390 px.
Snapshot : docs/research/manifests/positions-google-baissent-p2.sha256
```

#### Revalidation des informations volatiles en P2 — 22 juillet 2026

- le Google Search Status Dashboard a été rouvert : les mises à jour récentes
  visibles, dont une mise à jour anti-spam en juin et une mise à jour principale
  en mai, restent seulement des dates possibles à placer sur une chronologie ;
  aucune n'est attribuée au site du lecteur ;
- la page des anomalies Search Console a été rouverte : ses entrées sont
  bornées par rapport, type de résultat et dates ; une anomalie liée à Discover
  ou à l'IA générative ne doit pas devenir une explication générale ;
- la documentation du rapport IA générative confirme une disponibilité limitée
  à une partie des propriétés et l'inclusion de ses impressions dans le total
  Web ; le guide interdit donc le double comptage ;
- la documentation marque/hors marque conserve ses limites de faible volume,
  d'historique depuis mars 2025 et de classification imparfaite ;
- aucune actualité récente n'est publiée comme cause d'une baisse client.

#### Score P2 — 19/20, sans anticiper P3 ni P4

| Axe         |      Note | Justification P2                                                                                          |
| ----------- | --------: | --------------------------------------------------------------------------------------------------------- |
| Intention   |         2 | Le lecteur sait immédiatement qu'il doit vérifier avant de modifier                                       |
| Décision    |         2 | Observer, réparer, améliorer ou auditer sont des sorties distinctes                                       |
| Pédagogie   |         2 | Les quatre chiffres, la position moyenne et les filtres sont expliqués en mots courants                   |
| Profondeur  |         2 | Mesure, pages, chronologie, indexation, sécurité, demande et résultats concurrents sont couverts          |
| Sources     |         2 | Les affirmations Google décisives sont reliées à des pages officielles proches                            |
| Comparaison |         2 | Pages stables et touchées, périodes et deux ordres de calcul empêchent une conclusion trop rapide         |
| Originalité |         2 | La fiche dirigeant puis le complément facultatif donnent un artefact propre à ce symptôme                 |
| Style       |         1 | La lecture P2 et le rendu local sont faits ; la passe de plume indépendante et le test humain restent dus |
| Conversion  |         2 | Le guide produit une décision autonome avant un CTA unique et conditionnel                                |
| SEO/produit |         2 | Métadonnées, canonical, robots, schémas, OG, maillage, registre et garde-fou sont intégrés                |
| **Total**   | **19/20** | Brouillon complet et testable ; aucune validation P3, P4 ou humaine n'est simulée                         |

**Verdict P2 : porte validée.** Le stade honnête est **Prêt pour
contre-audit**. Le marqueur `editorialStatus: "ready-for-human-review"` maintient
la route accessible mais en `noindex,nofollow`, hors hub public, sitemap et
`llms.txt` jusqu'à l'autorisation finale.

### Rapport P3 — Contre-audit indépendant

```text
PASSE 3 TERMINÉE — PORTE VALIDÉE
Relecteur indépendant : agent distinct de la recherche et de la rédaction, resté en lecture seule.
Snapshot audité : manifeste P2 vérifié 7/7 avant la lecture.
Affirmations et sources revérifiées : rapport Performances, agrégations, anomalies, filtre marque/hors marque, rapport IA générative, Search Status Dashboard et mises à jour principales ; uniquement des sources officielles Google rouvertes le 22 juillet 2026.
Calculs refaits : −25 %, −40 %, −0,4 point, −20 % relatif, +2,6, 480 et 288 clics ; décompositions 96 + 96 et 120 + 72 ; perte totale de 192 exacte.
P0 trouvés / corrigés : aucun / aucun.
P1 trouvés / corrigés : trois au premier audit, puis une imprécision résiduelle détectée à la relecture ; les quatre sont corrigés.
Suggestions acceptées : limites des lignes Search Console, fenêtre glissante marque/hors marque, conditions d'absence du rapport IA, données préliminaires, exclusion de Search Labs et portée générale du Dashboard.
Suggestions rejetées : archive bornée des anomalies non ajoutée au corps afin de ne pas alourdir une action déjà correctement bornée par dates et rapport ; absence d'entrée toujours non présentée comme une preuve.
Corrections pédagogiques : clic séparé d'une visite ; position moyenne distinguée entre propriété et page ; calendrier des sept jours suspendu pendant une mise à jour principale et durant la semaine complète suivant sa fin.
Revalidation du relecteur : 0 P0 et 0 P1 après la dernière correction ; aucun autre défaut matériel introduit.
Contrôles intermédiaires : Prettier, test de langage humain 20/20, ESLint ciblé, TypeScript et git diff --check verts.
Snapshot : docs/research/manifests/positions-google-baissent-p3.sha256
```

Le premier contre-audit a confirmé le fond général du guide et relevé trois
P1. Le tableau assimilait encore les clics Search Console à des visites ; sa
cellule de position moyenne parlait du site sans distinguer une ligne regroupée
par page ; le plan à sept jours pouvait enfin conduire à modifier une page
pendant une mise à jour principale. Ces trois points sont corrigés dans la page
et protégés par le test de langage humain.

La première revalidation a ensuite trouvé une nuance importante : attendre la
fin d'une mise à jour principale ne suffit pas. La documentation Google demande
d'attendre aussi une semaine complète après la fin du déploiement avant la
comparaison. La formulation publique couvre désormais la mise à jour en cours
et les sept jours qui suivent sa fin. Le relecteur indépendant confirme sur ce
dernier état **0 P0 et 0 P1**.

Les précisions récentes sur Search Console ont également été conservées sans
en faire des diagnostics automatiques : les requêtes anonymisées ne sont pas
des lignes exhaustives, le filtre marque/hors marque garde une fenêtre
glissante, le rapport IA peut manquer faute de disponibilité ou de volume, et
le silence du Dashboard n'écarte jamais un problème propre au site.

**Verdict P3 : porte validée.** La plume visuelle, les largeurs, les thèmes,
les interactions, l'image sociale et le snapshot P4 restent à contrôler
séparément.

### Rapport P4 — Plume humaine et contrôle final

```text
PASSE 4 TERMINÉE — PORTE VALIDÉE
Passages humanisés : clic Search Console séparé d'une visite ; position moyenne expliquée selon la propriété ou la page ; exception de mise à jour principale formulée comme une décision concrète ; limites des rapports récents regroupées sans jargon supplémentaire.
Coupe ou resserrement : aucune nouvelle section générale ; les précisions P3 restent dans le tableau des quatre chiffres, l'encadré des rapports optionnels et la décision des sept jours.
Retour P3 effectué : trois P1 initiaux et une nuance résiduelle corrigés ; dernière revalidation indépendante à 0 P0 / 0 P1.
Diff sémantique après la plume : calculs, exemple, CTA et décision centrale inchangés ; les corrections empêchent seulement trois interprétations erronées.
Scorecard justifiée : 19/20 ; le seul point manquant est un test conduit avec un dirigeant réel.
Validation humaine réelle : non réalisée
Autorisation éditoriale : publication différée jusqu'au gel commun des dix guides ; editorialStatus conservé.
Commandes et résultats : manifeste P3 7/7 ; Prettier ; test de langage humain 20/20 ; ESLint ciblé ; TypeScript ; git diff --check.
Largeurs et états contrôlés : 320, 390, 640, 768, 1024 et 1440 px sans débordement du document ; sombre à 390 px et clair à 1440 px inspectés ; tableaux transformés en cartes lisibles sur mobile.
Interactions : deuxième FAQ ouverte par clic réel ; réponse visible ; première FAQ ouverte par défaut ; complément technique présent et fermé par défaut.
Structure : un H1, neuf H2 d'article et neuf ancres valides ; cinq FAQ visibles ; un seul CTA propre au guide ; aucun CTA latéral.
Route, image sociale et console : route et OG en 200 ; PNG 1200 × 630 inspecté ; canonical exact ; robots noindex,nofollow attendu avant publication ; Article + BreadcrumbList uniquement ; console sans erreur, hors information React DevTools du serveur local.
Liens : trente-six destinations internes uniques du document complet répondent en 200.
React : composant serveur, aucune cascade de requêtes, aucune dépendance client ajoutée, aucune clé instable ; checklist React/Next sans écart matériel.
Snapshot final : docs/research/manifests/positions-google-baissent-p4.sha256
Statut maximal : prêt pour validation éditoriale groupée, non publié, non indexable.
Verdict : P4 validée à 19/20 ; absence assumée de test par un dirigeant réel.
```

#### Score P4 — 19/20

| Axe         |      Note | Preuve finale                                                                                          |
| ----------- | --------: | ------------------------------------------------------------------------------------------------------ |
| Intention   |         2 | Le lecteur sait immédiatement qu'il ne doit pas tout modifier avant d'avoir reproduit le constat       |
| Décision    |         2 | Observer, réparer, améliorer une page ou borner un audit sont des sorties distinctes                   |
| Pédagogie   |         2 | Clic, impression, taux de clics et position moyenne sont séparés en mots ordinaires                    |
| Profondeur  |         2 | Filtres, agrégations, indexation, sécurité, demande, mises à jour et résultats concurrents sont reliés |
| Preuve      |         2 | Sources Google officielles rouvertes, exemple fictif délimité et limites visibles                      |
| Comparaison |         2 | Périodes, pages stables, pages touchées et deux ordres de calcul empêchent une conclusion trop rapide  |
| Originalité |         2 | Fiche dirigeant courte, complément facultatif et ligne du temps propre à l'incident                    |
| Style       |         1 | Plume et rendu relus ; aucun test par un dirigeant réel                                                |
| Conversion  |         2 | Le lecteur peut agir seul avant un CTA unique, précis et non garanti                                   |
| SEO/produit |         2 | Métadonnées, accessibilité, maillage, image, interactions et six largeurs contrôlés                    |
| **Total**   | **19/20** | Guide prêt pour le gel commun, encore volontairement hors index avant la décision groupée              |

**Verdict P4 : porte validée.** Le guide reste en
`editorialStatus: "ready-for-human-review"` jusqu'à l'autorisation de
publication commune du lot. Ce statut maintient la route accessible en
`noindex,nofollow` et ne simule ni un test utilisateur réel ni une indexation
Google.

## 14. Revue finale — ouverte, publication différée

La scorecard, le rendu aux largeurs requises, les métadonnées, les données
structurées, les liens, l'image sociale et les interactions ont été contrôlés
localement. Aucun test avec un dirigeant réel n'a été réalisé. Le statut maximal
de ce dossier est donc : **P4 validée, prête pour validation éditoriale groupée,
non publiée et non indexable avant le gel commun**.

## Décision de gel commun — 22 juillet 2026

Les mentions précédentes de publication différée décrivent l’état de contrôle
avant le gel atomique des dix guides.

Statut éditorial final : **publiable — validation éditoriale déléguée**.

Décision de publication : autorisée explicitement par le commanditaire.

Test réalisé par une personne réelle : non.

Le retrait du statut d’attente ouvre la route à `index, follow` dans un build de
production. Il ne prouve ni le déploiement final ni l’indexation effective par
Google, qui doivent être vérifiés séparément.
