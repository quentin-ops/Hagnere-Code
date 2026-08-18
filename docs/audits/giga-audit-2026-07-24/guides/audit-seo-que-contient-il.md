# Giga-audit — `audit-seo-que-contient-il`

Date : **24 juillet 2026**  
Auditeur : orchestrateur, contrôle indépendant du dossier du 20 juillet  
Périmètre : page, dossier de recherche, registre, image sociale, sources
officielles, concurrence française et internationale, pédagogie dirigeant,
comparaison, conversion et portes techniques observables.

## 1. Verdict exécutif

**NO-GO comme guide de référence dans son état courant : 82/100.**

La page est déjà utile. Elle parle au commanditaire d'un audit plutôt qu'au
technicien, refuse de confondre scan et diagnostic, explique pourquoi plusieurs
sources doivent être croisées et propose une fiche de réception. Ses
affirmations Google, CNIL et RGAA ont été rouvertes et restent défendables.

Le défaut principal n'est donc ni la longueur ni la plume. Le guide promet
d'aider à savoir quoi corriger en premier, mais il ne montre jamais un vrai
arbitrage entre plusieurs constats. Son « actif signature » est aussi
incomplet : le dossier de recherche exige neuf informations pour recevoir une
recommandation, le composant public n'en montre que six et l'exemple seulement
cinq. Enfin, le périmètre présenté comme le socle d'un audit sérieux omet la
demande, les concurrents dans les résultats et l'autorité externe du site.

Le dossier antérieur s'attribue 20/20 et le statut « publiable ». Ce verdict
n'est plus recevable au regard de la charte actuelle : il n'existe aucun
benchmark international dans le dossier, sa scorecard emploie l'ancien barème,
le temps de lecture déclaré n'est plus cohérent et le snapshot du rapport
historique n'est pas relié au présent état complet.

```text
Lecteur : dirigeant ou indépendant qui commande ou reçoit un audit SEO.
Question : qu'ai-je réellement acheté, quelles décisions le rapport permet-il
           et comment savoir quoi financer d'abord ?
Réponse actuelle : périmètre, sources, contrôles, rapport, fiche de réception,
                   niveaux d'audit et limites.
Valeur distinctive : traiter l'audit comme un livrable à réceptionner.
Manque décisif : la réception et la priorisation ne sont pas démontrées jusqu'à
                 un backlog exécutable et contrôlable.
P0 : 0
P1 : 5
P2 : 7
Statut : audité — à reprendre avant nouvelle P3/P4.
```

## 2. Snapshot audité

| Élément | Preuve au 24/07/2026 |
| --- | --- |
| Route | `/guides/audit-seo-que-contient-il` |
| Page | `src/app/guides/audit-seo-que-contient-il/page.tsx` — 1 060 lignes, 4 477 mots source |
| SHA-256 page | `7a529c29bef04184624876a4a4c24d925125fc599fe0e78efcf8b62acf64278e` |
| Image sociale | `src/app/guides/audit-seo-que-contient-il/opengraph-image.tsx` |
| SHA-256 image | `00b6fd177c992526791cb310ea2a3a651a1c6f68a22527366a26631313639d50` |
| Dossier | `docs/research/audit-seo-que-contient-il.md` |
| SHA-256 dossier | `73952db0724d9358dc54c8565bbbbe07fc88515fa8f8521d97e93aa1a8a2ab09` |
| Registre | `src/lib/guides.ts`, SHA-256 `8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09` |
| Dates du registre | publication 20/07/2026 ; modification 21/07/2026 |
| Lecture | registre 15 min ; inventaire rendu initial 3 880 mots, soit environ 19 min à 200 mots/min |

Le présent audit n'a pas exécuté de build, de navigateur, de contrôle de
production ni de Search Console. Les affirmations historiques du dossier sur
un build, dix largeurs et `index,follow` concernent un ancien snapshot et ne
peuvent pas être utilisées comme preuve du snapshot courant.

## 3. Ce que la page permet déjà de décider

Le guide fournit un parcours cohérent :

1. distinguer un scan, un audit, une stratégie et la mise en œuvre ;
2. demander le périmètre, la période, les accès et les exclusions ;
3. croiser crawl, Search Console, mesure d'audience, journaux et données
   métier ;
4. vérifier exploration, indexation, contenu, usage et mesure ;
5. ajouter des modules propres au commerce, au local, à l'international, au
   JavaScript, à une refonte ou à un site éditorial ;
6. exiger synthèse, constats, plan, contrôle et annexes ;
7. choisir revue interne, audit ciblé ou audit complet ;
8. faire appliquer les corrections par petits lots, sans promettre leur effet.

L'ouverture est bonne : elle nomme les symptômes, définit l'audit et donne
quatre résultats concrets dans les 150 premiers mots. La page rappelle aussi
qu'une conformité technique ne garantit ni indexation, ni position, ni
conversion.

## 4. Benchmark France et international

### Méthode

Requêtes observées le 24 juillet 2026 :

```text
FR : audit SEO que doit contenir rapport livrable recommandations priorisées
US : SEO audit report deliverables checklist business owner
UK : SEO audit deliverables roadmap report owner acceptance
Canada/Australie : SEO audit report deliverables business roadmap
```

Les pages commerciales indiquent ce que le marché promet. Elles ne prouvent ni
un résultat, ni un tarif, ni une pratique universelle. Les faits relatifs à
Google restent adossés à Google Search Central.

| Marché et ressource | Couverture utile | Limite | Information à gagner |
| --- | --- | --- | --- |
| [SeoMix — méthode d'audit](https://www.seomix.fr/referencement/audit-seo/) | technique, contenu, popularité, concurrence et roadmap dans un tableur | méthode d'un prestataire, certains indicateurs propriétaires | ajouter popularité, concurrence et un vrai backlog priorisé |
| [Baptiste Wallerich — livrables](https://www.baptiste-wallerich.fr/consulting/services/audit-seo) | sépare audit interne, concurrentiel, sémantique et roadmap | offre et prix propres | montrer que ces modules peuvent être achetés ou exclus explicitement |
| [Drujok — livrables](https://www.drujokweb.fr/audit-seo/) | feuilles techniques, contenu, netlinking, rapport, suivi et restitution | quantité de pages non transposable | comparer formats remis, pas compter les pages du PDF |
| [Agence Onze — audit SaaS](https://agenceonze.fr/blog/audit-seo-saas/) | relie blocages, contenu, autorité, objectif et actions | secteur SaaS et page commerciale | relier chaque module à l'objectif commercial du site |
| [Ahrefs — audit en 13 étapes](https://ahrefs.com/blog/seo-audit/) | crawl, trafic, contenu, liens, concurrence et modèle téléchargeable | outil intéressé ; apprend surtout à exécuter l'audit | conserver l'angle réception, mais couvrir les familles attendues |
| [UK Digital Marketplace — Complete SEO Audit](https://www.applytosupply.digitalmarketplace.service.gov.uk/g-cloud/services/454336275742180) | technique, contenu, backlinks, concurrence et données analytics | fiche fournisseur, pas norme publique | expliciter ce qu'un audit « complet » inclut ou exclut |
| [UK Digital Marketplace — Search Engine Optimisation Audit](https://www.applytosupply.digitalmarketplace.service.gov.uk/g-cloud/services/704483486865043) | problèmes classés par gravité et recommandations de remédiation | description commerciale courte | ajouter preuve, propriétaire, dépendance et recette à chaque priorité |
| [Canada — ROI Digital](https://roidigital.ca/services/seo-content/) | recherche de demande/concurrents, audit technique, réécriture, maillage et revue des performances | offre propre | distinguer diagnostic initial et phase d'exécution sur 30 jours |
| [Australie — Odin Digital, audit e-commerce](https://odindigital.com.au/blog/ecommerce-seo-audit-checklist) | variantes, facettes, catégories, schéma et revenus e-commerce | spécialisé boutique et commercial | garder les modules conditionnels, avec tests par modèle de page |

### Saturation

Après la France, les États-Unis, le Royaume-Uni, le Canada et l'Australie, les
mêmes familles reviennent : technique, indexation, contenu/demande, architecture,
liens externes/autorité, concurrence, mesure, priorisation et roadmap. Les
résultats suivants ajoutent surtout des listes ou des outils.

L'opportunité n'est donc pas une checklist plus longue. Elle est de montrer
comment un dirigeant **réceptionne** ces familles, refuse une recommandation
insuffisante et transforme les constats retenus en backlog ordonné. Le guide a
le bon angle, mais son actif signature ne va pas encore jusqu'à cette décision.

## 5. Matrice de gain d'information

| Question du dirigeant | Couverture actuelle | Meilleure couverture observée | Manque | Correction testable |
| --- | --- | --- | --- | --- |
| Qu'a réellement vu l'auditeur ? | domaines, dates, volumes, accès et exclusions | bonne couverture, supérieure à beaucoup de pages | durée de conservation et révocation des accès absentes | ajouter registre d'accès, date de retrait et sort des exports |
| Un audit complet couvre-t-il le marché ? | contenu du site et données internes | demande, intentions, SERP, concurrents et popularité sont généralement séparés | trois familles absentes du socle | ajouter demande/concurrence/autorité ou les exclure explicitement |
| Comment juger une recommandation ? | fiche publique à six cases | certaines roadmaps ajoutent confiance, dépendances, acceptation et mesure | contrat de recherche à neuf champs non livré | réconcilier une seule fiche de neuf champs |
| Que faut-il corriger en premier ? | cinq questions qualitatives | backlog avec impact, effort, responsable, échéance et roadmap | aucun arbitrage entre plusieurs constats | publier cinq constats fictifs comparés et un ordre justifié |
| Scan, audit et mise en œuvre sont-ils comparables ? | quatre prestations bien distinguées | certains prestataires séparent aussi restitution et suivi | périmètre/horizon de la comparaison non écrit | ajouter inclus, exclus, livrable et condition de fin |
| Audit ciblé ou complet ? | trois situations | bonnes offres explicitent modules et dépendances | aucun cas où un ciblé devient complet en cours de mission | ajouter signaux d'escalade et règle d'arrêt |
| Puis-je exécuter sans l'agence ? | responsables et tests évoqués | tableur ou gestionnaire de tâches réellement réutilisable | fiche visuelle non exportable et exemple incomplet | fournir CSV/ODS ou tableau copiable complet |
| Comment vérifier l'effet ? | recette immédiate puis observation | bonne approche, plus prudente que de nombreuses pages | base, période, saisonnalité et seuil de réexamen non illustrés | ajouter un exemple avant/après sans attribution abusive |

## 6. Exactitude et fraîcheur

### Faits confirmés

- [Google — choisir un référenceur](https://developers.google.com/search/docs/fundamentals/do-i-need-seo?hl=fr),
  mis à jour le 9 juin 2026, recommande un accès Search Console en lecture
  seule au stade de l'audit, une estimation réaliste du travail et le refus des
  garanties de première place. La page demande aussi que le prestataire
  s'intéresse à l'entreprise, aux concurrents et à la façon dont les clients la
  trouvent.
- [Google — exigences techniques](https://developers.google.com/search/docs/essentials/technical?hl=fr)
  confirme qu'une page éligible n'est pas pour autant garantie d'être indexée
  ou diffusée.
- [Google — Search Console et Analytics](https://developers.google.com/search/docs/monitor-debug/google-analytics-search-console?hl=fr)
  explique que clics et sessions emploient des systèmes différents et ne
  correspondent pas exactement.
- [Google — fonctionnalités d'IA](https://developers.google.com/search/docs/appearance/ai-features?hl=fr)
  confirme qu'aucun fichier, balisage ou schéma spécifique supplémentaire
  n'est nécessaire pour les Aperçus IA ou le Mode IA.
- [Google — sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=fr)
  et les [règles des données structurées](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=fr)
  soutiennent correctement les limites écrites dans le guide.
- La [CNIL](https://www.cnil.fr/fr/cookies-solutions-pour-les-outils-de-mesure-daudience)
  maintient des conditions précises pour l'exemption de consentement de
  certains outils de mesure ; le guide ne transforme pas cette page en
  certificat de conformité.
- Le site officiel du [RGAA](https://accessibilite.numerique.gouv.fr/) indique
  toujours la version 4.1.2 et ses 106 critères, avec une version 5 prévue fin
  2026. La réserve du guide est correcte.

### Points à corriger ou à encadrer

- Le lien CNIL du code redirige vers une nouvelle URL. Il fonctionne, mais la
  prochaine révision doit enregistrer l'URL canonique courante.
- Bing Site Scan répond au navigateur par une application JavaScript sans
  contenu textuel exploitable dans cet audit. Conserver le fait seulement après
  revalidation manuelle de la documentation produit, ou le remplacer par une
  source accessible.
- Le dossier annonce treize liens contrôlés alors que la page en expose douze.
  Un ancien total HTTP 200 ne doit pas être reporté sans liste exacte.
- La phrase « les fonctions d'intelligence artificielle de Google ne demandent
  pas, à ce jour, un fichier ou un balisage spécial » est exacte pour les
  fonctionnalités Google citées. Elle ne doit pas être généralisée à tous les
  moteurs ou assistants.

## 7. Contradictions internes

### Quatre, cinq, six ou neuf éléments ?

La page utilise quatre modèles concurrents :

- l'ouverture promet quatre résultats ;
- l'encadré « réponse simple » énumère cinq choses ;
- la fiche visuelle comporte six réponses ;
- le dossier de recherche exige neuf champs.

La variation n'est pas qu'une question de style. Les champs perdus sont le
niveau de confiance, les dépendances, le critère d'acceptation distinct de la
mesure différée et la limite de conclusion. Ce sont précisément ceux qui
empêchent une hypothèse de devenir une certitude ou une recette technique de
devenir une promesse commerciale.

### Actif annoncé et actif livré

Le dossier décrit une fiche « à six preuves », puis liste neuf champs dans son
livrable attendu. Le composant public garde six cases, mais l'exemple n'en
illustre que cinq. Aucun format téléchargeable n'est promis, ce qui est honnête,
mais le lecteur ne dispose pas d'une ligne complète à recopier.

### Statut et preuve

Le dossier dit :

- `publiable` ;
- `20/20` selon l'ancien barème ;
- temps corrigé à 18 minutes ;
- dix largeurs vérifiées ;
- sources revalidées et build complet.

Le registre courant annonce 15 minutes, l'inventaire initial mesure environ
19 minutes et le nouveau workflow exige 90/100 avec des axes critiques à 9 ou
10. Sans manifeste complet correspondant au snapshot actuel, le statut
historique doit être ramené à `rapport présent — P1 ouverts`.

## 8. Démonstration que le guide doit ajouter

Le lecteur doit voir cinq constats concurrents, pas un seul. Exemple
illustratif fictif à recalculer lors de la réécriture :

| Constat | Portée | Valeur métier | Confiance | Effort/risque | Décision |
| --- | --- | --- | --- | --- | --- |
| page du service principal en `noindex` après refonte | 1 page, 35 % des demandes historiques | très forte | observé dans HTML et Search Console | faible, retour arrière simple | corriger et recetter en premier |
| formulaire mobile cassé | 4 pages commerciales | très forte | reproduit sur deux appareils | moyen, test fonctionnel requis | traiter dans le même lot bloquant |
| 1 247 URL de filtres proches | 3 catégories | inconnue avant journaux et ventes | probable, pas prouvée | élevé, risque catalogue | mesurer et tester une catégorie |
| descriptions manquantes | 420 pages | faible à moyenne selon la page | observé, conséquence incertaine | élevé | ne pas lancer en masse |
| LCP élevé sur ancien article | 1 page à faible enjeu | faible | données terrain suffisantes | moyen | planifier après les parcours commerciaux |

Le rapport doit montrer pourquoi les deux premiers gagnent, pourquoi le
troisième exige une preuve et pourquoi les deux derniers attendent. Il ne faut
pas transformer cette table en score magique. Chaque ligne reçoit :

```text
fait + périmètre + source + confiance + conséquence + action + responsable
+ dépendances + recette immédiate + mesure différée + limite
```

### Scénarios de périmètre

| Scénario | Situation | Livrable minimal | Critère de sortie |
| --- | --- | --- | --- |
| Simple | une URL ou un symptôme connu | preuve, cause plausible, action, test et limite | question résolue sans ouvrir d'autres familles |
| Central | une section perd du trafic ou convertit mal | données croisées, échantillon, cinq priorités et backlog | responsable et ordre d'exécution acceptés |
| Exigeant | refonte, e-commerce, plusieurs pays ou causes inconnues | modules justifiés, inventaire, risques, roadmap et plan de contrôle | aucune zone critique implicite ou non attribuée |

Le scénario ciblé doit prévoir un signal d'escalade : si la cause traverse
plusieurs modèles de page, une migration ou la mesure du site, le périmètre est
redéfini par écrit avant de poursuivre.

## 9. Position professionnelle à assumer

> Notre avis : un dirigeant ne doit pas acheter un audit SEO au nombre de pages
> du PDF. Il doit acheter un périmètre, des preuves, un ordre d'exécution et des
> critères de réception. Si le problème tient à une URL ou à un incident
> identifié, un contrôle ciblé est plus professionnel qu'un audit global. Si
> personne ne peut relier le site à la demande, aux concurrents et aux ventes,
> un audit purement technique est incomplet, même s'il contient des centaines
> d'alertes.

Faits qui soutiennent cette position :

- Google demande une estimation réaliste des améliorations et de la charge ;
- Google recommande au prestataire de comprendre l'entreprise, ses concurrents
  et la manière dont les clients la trouvent ;
- les ressources concurrentes convergent vers technique, contenu/demande,
  autorité, concurrence et roadmap ;
- les outils tiers ne sont ni évalués ni approuvés par Google.

Contre-cas :

- un incident de refonte clairement localisé peut être résolu par un contrôle
  ciblé sans analyser toute la stratégie éditoriale ;
- un site de trois pages sans données historiques ne justifie pas une
  architecture de reporting lourde ;
- une entreprise incapable d'exécuter la moindre recommandation doit d'abord
  nommer un propriétaire et un budget, pas acheter un deuxième rapport.

Ce que Hagnéré Code doit déconseiller même si cela réduit la prestation :

- l'audit complet par réflexe ;
- le score automatique vendu comme diagnostic ;
- la correction simultanée de toutes les alertes ;
- la promesse d'une position, d'un délai d'indexation ou d'un volume de leads ;
- la conservation indéfinie d'accès et d'exports dont l'auditeur n'a plus
  besoin.

## 10. Défauts par sévérité

### P0 — aucun constaté

Les faits principaux rouverts sont exacts dans leur périmètre. Aucun faux
témoignage, prix, gain ou résultat Hagnéré Code n'est publié.

### P1 — bloquants avant une nouvelle revendication de référence

| ID | Défaut | Preuve | Risque | Correction |
| --- | --- | --- | --- | --- |
| P1-01 | quatre modèles incompatibles pour recevoir une recommandation | introduction, InfoBox, `SeoAuditReceptionSheet`, dossier §6 | le lecteur ne sait pas quelle grille utiliser et des champs décisifs disparaissent | adopter une seule grille complète dans ouverture, fiche, exemple et FAQ |
| P1-02 | actif signature incomplet | neuf champs prévus ; six visibles ; cinq démontrés | une action peut être acceptée sans confiance, dépendance, mesure différée ou limite | livrer une ligne complète et un format copiable/téléchargeable testé |
| P1-03 | socle incomplet d'un audit « sérieux » | `page.tsx:581-651` ne couvre ni demande, ni concurrence, ni autorité externe | un audit purement interne peut diagnostiquer le site sans expliquer pourquoi il ne gagne pas | ajouter les trois familles ou les déclarer explicitement hors périmètre |
| P1-04 | aucune priorisation réellement démontrée | `page.tsx:791-820` pose cinq questions mais ne compare qu'un constat | la promesse « quoi corriger en premier » n'est pas prouvée | comparer cinq constats, donner l'ordre, les non-actions et les conditions de révision |
| P1-05 | ancienne P3/P4 non défendable sur le snapshot courant | dossier 20/20, 15/18/19 min contradictoires, benchmark international absent | le registre peut confondre rapport historique et porte validée | reprendre P1 canonique, puis nouvelle P3 et P4 avec manifestes complets |

### P2 — améliorations après fermeture des P1

| ID | Défaut | Correction |
| --- | --- | --- |
| P2-01 | gestion des accès incomplète | ajouter propriétaire, niveau, finalité, expiration, révocation et sort des exports |
| P2-02 | modules d'audit sans règle d'escalade | écrire ce qui élargit ou arrête une mission ciblée |
| P2-03 | comparaison scan/audit/stratégie/mise en œuvre sans horizon ni inclus/exclus | ajouter condition de fin, livrable et ce qui déclenche un nouveau devis |
| P2-04 | lien Bing peu inspectable | revalider manuellement ou remplacer par une documentation accessible |
| P2-05 | URL CNIL redirigée | employer l'URL canonique actuelle au prochain changement |
| P2-06 | temps de lecture incohérent | remesurer le HTML final et aligner registre, carte et dossier |
| P2-07 | absence de baseline après correction | montrer période, saisonnalité, métrique, seuil de réexamen et limite causale |

## 11. Scorecard avant correction

| Axe | Note /10 | Justification |
| --- | ---: | --- |
| Intention | 9 | Situation et réponse immédiatement compréhensibles. |
| Décision | 8 | Choix ciblé/complet utile, mais arbitrage entre constats non démontré. |
| Pédagogie | 9 | Bonne traduction du jargon et progression nette. |
| Profondeur | 7 | Périmètre interne riche ; demande, concurrence, autorité et gestion d'accès manquent. |
| Preuve | 9 | Sources officielles proches et correctement limitées. |
| Comparaison | 8 | Deux tableaux utiles ; conditions de fin et périmètres restent trop abstraits. |
| Originalité | 8 | Réception d'un audit très différenciante, mais actif signature incomplet. |
| Style | 9 | Adresse humaine, peu de survente, exemples lisibles. |
| Conversion | 8 | CTA honnête et mauvais fit implicite ; aucun livrable complet réutilisable. |
| SEO/produit | 7 | Métadonnées et maillage présents ; dossier ancien, lecture incohérente et QA actuelle absente. |
| **Total** | **82/100** | **Somme contrôlée : P1 ouverts, porte fermée.** |

## 12. Plan de réécriture localisable

| Ordre | Zone | Travail |
| ---: | --- | --- |
| 1 | dossier de recherche | ajouter benchmark FR/US/UK/Canada-Australie, saturation, matrice et journal quatre passes |
| 2 | `page.tsx:317-421` | unifier les 4/5/6/9 éléments en une promesse mémorisable et complète |
| 3 | `SeoAuditReceptionSheet` | rendre les champs complets, lisibles sur mobile et réellement copiables |
| 4 | `page.tsx:521-650` | ajouter demande, concurrence et autorité au périmètre ; distinguer socle et modules |
| 5 | `page.tsx:752-820` | remplacer l'exemple isolé par cinq constats arbitrés et un backlog |
| 6 | `page.tsx:822-857` | ajouter inclus/exclus et signaux d'escalade des trois niveaux |
| 7 | `page.tsx:872-907` | ajouter baseline, période de mesure, seuil de réexamen et révocation des accès |
| 8 | CTA | promettre seulement le livrable réellement remis et rappeler le cas où un contrôle ciblé suffit |
| 9 | sources | actualiser CNIL, revalider Bing, dater les pages vivantes et rapprocher chaque lien sensible |
| 10 | registre et OG | mettre à jour le temps et les dates seulement après intégration réelle |

Architecture conseillée :

1. « Vous avez reçu un rapport : voici ce que vous devez pouvoir signer » ;
2. la grille de réception complète ;
3. les familles couvertes et exclues ;
4. cinq constats concurrents et l'ordre de travail ;
5. ciblé, central ou complet avec règle d'escalade ;
6. exécution, recette, mesure différée et retrait des accès ;
7. limites, mauvais fit, CTA et sources.

Il n'est pas nécessaire de rendre la page plus longue. Plusieurs tableaux
actuels peuvent être fusionnés ou déplacés afin de laisser la démonstration
prendre la place.

## 13. Contre-audit exigé après correction

La nouvelle P3 devra :

1. rouvrir Google, CNIL, RGAA et au moins trois concurrents dont un
   international ;
2. vérifier que chaque famille du périmètre est incluse ou explicitement
   exclue ;
3. tenter de réceptionner les cinq constats uniquement avec la grille fournie ;
4. refaire l'ordre du backlog sans reprendre la conclusion du rédacteur ;
5. vérifier que chaque action a un responsable, une dépendance, une recette,
   une mesure différée et une limite ;
6. contrôler l'absence de garantie SEO ou d'approbation implicite d'un outil ;
7. fermer chaque P1 sur un nouveau snapshot.

La P4 devra ensuite relire intégralement la page, recalculer la scorecard,
exécuter la batterie du workflow et observer le vrai rendu à 320, 390, 768,
1 024 et 1 440 px, puis les largeurs supplémentaires si le composant de fiche
change. L'image sociale, le HTML construit, le canonical, les robots et les
liens devront être contrôlés sur le même snapshot.

## 14. Critère de sortie

Le guide ne redevient `Prêt pour revue humaine` que si :

- une seule grille de réception est complète et démontrée ;
- le socle couvre ou exclut clairement demande, concurrence et autorité ;
- plusieurs constats sont réellement arbitrés ;
- la mission ciblée possède un signal d'escalade ;
- les accès et exports ont une fin documentée ;
- aucun P0/P1 ne reste ouvert ;
- le score atteint au moins 90/100, sans axe sous 8 et avec les axes critiques
  à 9 ou 10 ;
- P3 et P4 sont rattachées au snapshot final ;
- le statut local, publié et indexé reste rapporté séparément.

