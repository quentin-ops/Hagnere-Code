# Dossier de recherche — Automatiser un processus métier

> **Reconstitution du socle de preuves, 30 août 2026.** Ce fichier décrit
> l'article tel qu'il existe aujourd'hui dans le dépôt, et lui seul. La version
> précédente de ce dossier datait du 29 juillet 2026 et décrivait un article qui
> n'existe plus : cinq portes non compensatoires, un scénario à 120 cas par mois,
> un coût horaire de 38 €, un ROI de −41,2 %. Rien de tout cela n'est publié.
> L'ancien dossier n'a été rouvert que pour reprendre sa structure de sections et
> sa façon de citer ; aucun de ses chiffres, aucune de ses sources et aucun de ses
> constats n'a été recopié.
>
> **Source de vérité de ce dossier :**
> `src/app/guides/automatiser-processus-metier/page.tsx`,
> `process-priority-tool.tsx` et l'entrée du slug dans `src/lib/guides.ts`, lus
> intégralement le 30 août 2026, plus les deux fichiers de tests colocalisés.
>
> **Territoire :** ce dossier est le seul fichier écrit. La page, les tests, le
> registre et les manifestes n'ont pas été touchés. Les écarts trouvés dans la
> page sont signalés ci-dessous, pas corrigés.

---

## 0. Écarts trouvés dans la page publiée

Sept points relevés en refaisant les calculs et en rouvrant les sources. **Aucun
n'est une erreur d'arithmétique** : les grandeurs chiffrées des huit sections ont
été recalculées à la main, ligne à ligne (section G, cinquante-quatre lignes de
calcul), et tombent toutes juste, au centime et à l'arrondi publié près. Les écarts portent sur les unités, sur ce qui est
sourçable et sur ce qui est daté.

| # | Nature | Où | Constat |
|---|---|---|---|
| É1 | Unité non réconciliée | §06 vs §07 | Deux volumes journaliers différents circulent pour le même flux, sans que l'écart soit dit : **5 474 €** en section 06 (`1 998 000 ÷ 365`, mois calendaire) et **5 550 €** en section 07 (`3 relances × 1 850 €`, mois de trente jours). L'écart vaut 76 €, soit 1,4 %. Les deux sont justes dans leur cadre ; la section 07 s'ouvre pourtant sur un bloc « UNITÉS TENUES DANS TOUTE CETTE SECTION » qui ne mentionne pas ce changement de cadence. Trois relances par jour supposent un mois de 30 jours (90 ÷ 30) et 1 095 relances par an, quand la chaîne de trésorerie en compte 1 080 (90 × 12). |
| É2 | Comparaison hors période | §04 | « 810 requêtes par mois, très loin des 6 000 que donne une licence Microsoft 365 » compare un total mensuel à un quota **par 24 heures**. La conclusion est vraie a fortiori — 810 par mois valent ~27 par jour, soit 0,45 % du quota — mais les deux nombres comparés dans la phrase ne portent pas sur la même période, et le tableau qui précède est la seule chose qui le rappelle. |
| É3 | Mécanisme non documenté par les sources citées | §07, troisième incident | « son compte est désactivé, et le flux s'arrête sans alerte — la surveillance ne regardait que les exécutions en erreur, or il n'y en a plus aucune ». L'introduction de la section annonce des incidents construits « à partir de mécanismes documentés par les éditeurs ». Aucune des dix sources citées ne documente cet arrêt silencieux. La page Microsoft citée établit seulement qu'un flux automatisé consomme le quota de son propriétaire. La page de l'éditeur qui traite le cas — *Manage orphaned flows when owner leaves organization*, non citée par l'article — décrit l'inverse : « These flows **can fail** if they use connections tied to that user account », donc des exécutions en erreur, précisément ce que la surveillance décrite aurait vu. |
| É4 | Comptage partiellement sourçable | §04 | Les 810 requêtes viennent de « comptez les neuf étapes », déclencheur compris. La page Microsoft citée énumère ce qui compte comme requête (appels de connecteurs, actions HTTP, actions intégrées) sans y ranger explicitement le déclencheur d'un flux cloud. Le sur-comptage va dans le sens prudent et ne change pas le verdict, mais le « neuf » n'est pas entièrement adossé à la source. |
| É5 | Durées affirmées sans source ni protocole | §02, §05, §06, FAQ | Cinq affirmations de durée sont posées comme des faits : « un tableau croisé qui compte les lignes par mois donne la courbe **en dix minutes** », « votre expert-comptable sort le vôtre de la déclaration sociale nominative **en quelques minutes** », « le comptable sort les deux extractions **en une heure** », « il **se démonte en une heure** » (flux sans code), « un flux monté sur l'abonnement déjà payé se démonte **en une heure** ». Aucune n'est sourcée, aucune n'est présentée comme une hypothèse, et aucune n'est mesurable par le lecteur avant d'avoir agi. |
| É6 | Méthode statistique affirmée sans source | FAQ, question 1 | « Vingt dossiers consécutifs suffisent à sortir un temps moyen et un **neuvième décile exploitables** ». Sur vingt observations, le neuvième décile est la dix-huitième valeur : un seul dossier atypique le déplace entièrement. L'affirmation « exploitable » est une règle éditoriale, non une propriété démontrée, et elle n'est pas annoncée comme telle. |
| É7 | Date affichée et état réel | En-tête, bloc Transparence | La page imprime « Mis à jour le 28 août 2026 » et « relevés le 28 août 2026 ». Deux faits observables aujourd'hui : `page.tsx` porte une date de modification au **30 août 2026, 22 h 16** (mtime), postérieure de deux jours ; et la production `https://hagnere-code.ai/guides/automatiser-processus-metier`, ouverte le 30 août 2026, sert encore la version du 29 juillet 2026 (`"dateModified":"2026-07-29T19:07:13Z"` dans son JSON-LD), sans aucun des chiffres actuels. Le lot n'est donc pas déployé. Le dépôt n'étant pas sous Git ici, il est impossible de qualifier les modifications du 30 août de mineures ou substantielles au sens du §15 de la charte. **Constat, pas correction : ni la page ni le registre ne sont dans le territoire de ce dossier.** |

Aucun de ces sept points n'a été corrigé. Les cinq premiers sont des choix de
rédaction que la page peut assumer en les explicitant ; É3 est le seul qui
demande soit une source, soit une reformulation du mécanisme ; É7 se règle au
déploiement.

---

## A. Identité de l'article publié

```text
Slug : automatiser-processus-metier
URL canonique : https://hagnere-code.ai/guides/automatiser-processus-metier
Titre registre : Quel processus métier automatiser en premier ?
Titre carte : Quel processus automatiser en premier ?
Section : Outils internes et automatisation
Statut éditorial dans le registre : published
Guide « featured » du hub : oui (drapeau explicite, invariant testé)
datePublished : 2026-07-29T17:01:33+02:00
dateModified : 2026-08-28T18:00:00+02:00
readTimeMin : 21
Auteur affiché : Quentin Hagnéré, président fondateur codeur (src/lib/team.ts)
Images : /guides/automatiser-processus-metier/article-processus-{16x9,4x3,1x1}.webp
         (les trois fichiers existent dans public/)
Outil embarqué : ProcessPriorityTool, calcul local, aucun envoi réseau
Sortie éditoriale : décision — mesurer, écarter, chiffrer, puis lancer,
         réduire, reporter ou renoncer
```

### Sommaire réellement publié (huit sections, ancres stables)

| # | Ancre | Titre visible | Durée annoncée |
|---|---|---|---:|
| 01 | `reponse` | Commencez par le processus dont vous prouverez le résultat en un mois | 2 min |
| 02 | `mesurer` | Comment mesurer un processus en une semaine, sans consultant ? | 2 min |
| 03 | `eliminer` | Quelles conditions éliminent un candidat avant tout calcul ? | 2 min |
| 04 | `facture` | Ce que votre plateforme facture derrière chaque dossier | 3 min |
| 05 | `decompte` | Le décompte sur douze mois, poste par poste | 4 min |
| 06 | `tresorerie` | Quand le temps ne paie pas, que reste-t-il à mesurer ? | 2 min |
| 07 | `incidents` | Ce qui rate, et ce que ça coûte | 4 min |
| 08 | `decision` | Faut-il lancer, reporter ou renoncer ? | 2 min |

Somme des durées de section : 21 minutes, égale au `readTimeMin` du registre.
Cette égalité est verrouillée par un test (§H). La répartition des huit minutes
entières est documentée dans un commentaire de `page.tsx` et repose sur une
mesure à 4 191 mots produite par `scripts/measure-guide-readtime.mjs` :
**cette mesure n'a pas été refaite** (voir §D.12).

### Chiffres mis en avant hors corps de texte

| Emplacement | Valeur | Recalculée en |
|---|---|---|
| Bandeau, statistique 1 | 4 processus | §G.2 |
| Bandeau, statistique 2 | 44,70 € de coût horaire (INSEE) | §D.1 |
| Bandeau, statistique 3 | −546 € d'écart à douze mois | §G.3 |
| Bandeau, statistique 4 | 21,3 mois d'équilibre | §G.5 |
| Bandeau, statistique 5 | 118 relances de seuil mensuel | §G.4 |
| Chapô | 32 h à écarter, 12 h à retenir, −546 €, 21,3 mois | §G.2, §G.3, §G.5 |

---

## B. Contrat de réponse tel qu'il est publié

### Réponse courte, telle que la section 01 la formule

Prendre en premier le processus dont le résultat se prouvera en un mois : une
règle qui n'a pas bougé depuis un an, une source qui fait foi, une erreur qui se
répare pour rien, deux noms écrits en face du flux. Le nombre d'heures arbitre en
dernier. Sur les quatre processus du cas construit — 32, 25, 21 et 12 heures par
mois — celui qui passe les cinq questions est le dernier au classement des
heures. Son décompte à douze mois sort à −546 € ; il s'équilibre à 21,3 mois et
peut se payer plus tôt, ou jamais, sur l'encaissement.

### Décision attendue du lecteur

Quatre sorties sont présentées comme également légitimes, et une seule est un
projet : lancer un essai borné, réduire avant d'automatiser, reporter et
continuer de mesurer, renoncer. La section 08 écrit explicitement que renoncer
« est une décision, pas un échec », et le dernier paragraphe précise que « ne
rien automatiser cette année » reste une conclusion acceptable. Deux tests
verrouillent ces deux phrases.

### Ce que l'article refuse de faire

- aucun prix de marché d'un projet d'automatisation ;
- aucun gain moyen, aucun ROI moyen, aucun délai type ;
- aucun classement d'éditeurs : Zapier et Power Automate sont cités comme
  **deux règles de comptage** opposées, avec l'étiquette « échantillon daté d'un
  seul éditeur » ;
- aucun avis juridique : l'AIPD est renvoyée au responsable de traitement et au
  DPO, la sécurité au responsable sécurité, le coût horaire à l'expert-comptable ;
- aucun téléchargement de tableur ; la fiche de décision est un bloc de texte
  copiable ;
- aucun témoignage, aucun logo, aucun dossier client.

### Position commerciale, telle qu'elle est écrite

Le bloc « Transparence » de la section 08 déclare que Hagnéré Code construit des
outils internes sur mesure et perçoit des honoraires si le lecteur retient cette
option — « la sixième des sept réponses comparées ici, et celle que le décompte
écarte sur son propre cas, à douze mois comme à trente-six ». L'encadré
« Ce que notre propre grille dit contre nous » de la section 05 fait le même
travail sur le premier palier à 8 000 € HT. Ces deux passages sont protégés par
un test.

---

## C. Corpus interne et maillage réellement présents

Vérifié le 30 août 2026 en listant les routes du dépôt : **toutes existent**.

| Destination | Emplacement dans la page | Route présente ? |
|---|---|---|
| `/services/outils-internes-sur-mesure` | CTA principal de la sidebar | `src/app/services/outils-internes-sur-mesure/page.tsx` ✔ |
| `/demarrer-un-projet` | CTA contextuel, CTA de FAQ, lien tracké en fin d'article | ✔ |
| `/tarifs` | encadré « Ce que notre propre grille dit contre nous » | ✔ |
| `/guides` | fil d'Ariane | ✔ |
| `/equipe#fondateur` | signature de l'auteur | ✔ |
| `/guides/signes-besoin-logiciel-metier` | §08 + guides liés | ✔ publié |
| `/guides/power-apps-ou-application-sur-mesure` | §08 + guides liés | ✔ publié |
| `/guides/plan-recette-application-metier` | §08 + guides liés | ✔ publié |
| `/guides/cahier-des-charges-saas` | §08 | ✔ publié |
| `/guides/securite-application-metier` | §08 | ✔ publié |

Un seul `TrackedGuideCtaLink` dans toute la page (test). Aucun lien vers
lui-même (test). Le guide ne promet le service qu'après la fiche de décision.

### Cannibalisation

| Page | Intention dominante | Différence tenue |
|---|---|---|
| Ce guide | Décider quel processus essayer en premier, et décider aussi de ne rien faire | Mesure, cinq questions, règles de comptage des plateformes, décompte à trois horizons, trésorerie, incidents chiffrés |
| `/services/outils-internes-sur-mesure` | Faire étudier ou construire un outil interne | Le guide ne vend pas le service et le décompte écarte le sur-mesure sur son propre cas |
| `/guides/signes-besoin-logiciel-metier` | Savoir s'il faut un logiciel métier | Amont : le blocage existe-t-il ? Ce guide part d'un blocage déjà identifié |
| `/guides/power-apps-ou-application-sur-mesure` | Comparer deux façons de construire | Aval : ce guide s'arrête avant le choix d'architecture |

---

## D. Fiche de preuves — sources externes

**Méthode.** Chaque URL citée par la page a été ouverte le 30 août 2026, dans
le document original. Quand `WebFetch` a échoué, la page a été téléchargée par
`curl` et lue localement ; les deux PDF ont été extraits page par page. Aucun
résumé de moteur n'a été retenu comme preuve. Les dix sources citées par
l'article ont toutes été rouvertes.

### D.1 INSEE — coût horaire de la main-d'œuvre

| Champ | Contenu |
|---|---|
| URL | `https://www.insee.fr/fr/statistiques/2381340` |
| Ouverte le | 30 août 2026, HTTP 200 |
| Date de la page | mise à jour le 2 juillet 2026 |
| Localisateur | tableau « Coût horaire de la main-d'œuvre », colonne 2025 |
| Valeurs relevées | ensemble marchand **44,7 €** ; industrie 47,7 € ; construction 39,9 € ; services marchands 44,2 € |
| Champ exact, cité mot pour mot | « France, ensemble des secteurs marchands (secteurs B à N de la Nace), entreprises de 10 salariés ou plus, apprentis inclus » |
| Origine | Eurostat, extraction du 12 juin 2026, enquête européenne sur le coût de la main-d'œuvre |
| Ce que l'article en fait | coût horaire chargé du décompte (§05, calculateur, FAQ, bandeau) et de toutes les valorisations horaires des incidents |
| Limite non reprise par l'article | la note de la page précise que « les coûts horaires entre deux années d'enquête […] sont estimés par les États membres puis révisés jusqu'à ce que les résultats de l'enquête suivante soient disponibles ». Le 44,70 € de 2025 est donc une **estimation révisable**, pas un résultat d'enquête définitif. L'article dit « L'INSEE publie », ce qui est exact, mais ne signale pas ce caractère provisoire. |
| Portée pour le lecteur | l'article demande explicitement de le remplacer par le sien si l'entreprise a moins de dix salariés, et rappelle que le taux ne change jamais le signe d'un décompte dont tous les postes sont du temps interne |
| Fraîcheur | à revérifier à chaque publication annuelle INSEE, et à la prochaine enquête quadriennale |

### D.2 Banque de France — Observatoire des délais de paiement, rapport 2024

| Champ | Contenu |
|---|---|
| URL | `https://www.banque-france.fr/system/files/2025-07/ODP-2024.pdf` |
| Ouverte le | 30 août 2026. `WebFetch` a renvoyé **HTTP 403** ; le PDF a été récupéré par `curl` (HTTP 200, 829 908 octets, 70 pages) et lu localement |
| Publication | *Rapport annuel de l'Observatoire des délais de paiement 2024*, **juillet 2025**. Présidente Virginie Beaumeunier ; rapporteur Thomas Allen, Banque de France, direction des Entreprises |
| Localisateur 1 | « Chiffres-clés 2024 », page 8 du PDF : « **13,6** jours (+ 1 jour en un an) — nombre moyen de jours de retards en France (**13,4** jours en Europe) » |
| Localisateur 2 | section 1.2, page 14 du PDF : « Les entreprises françaises paient désormais leurs fournisseurs avec un retard moyen au quatrième trimestre 2024 légèrement supérieur (13,6 jours) à celui de leurs voisins européens (13,4 jours). […] en France il augmentait régulièrement et fortement, dérapant d'une journée entre le quatrième trimestre 2023 (12,6 jours) et le dernier trimestre 2024 (13,6 jours, cf. graphique 6) » |
| Localisateur 3 | graphique 6, page 15 du PDF, « Évolution comparée des retards de paiement en France et en Europe », **source Altares, quatrième trimestre 2024** |
| Ce que l'article en fait | §06 : « Une relance partie le jour de l'échéance agit exactement sur ce retard » |
| Précision de périmètre à tenir | l'indicateur mesure le retard avec lequel **les entreprises françaises paient leurs fournisseurs**. L'article l'utilise du point de vue du créancier qui relance ses clients. Au niveau agrégé, les deux faces sont les mêmes retards vus des deux côtés de la facture ; à l'échelle d'une entreprise, ce n'est pas une prévision du retard de *ses* clients. L'article ne fait aucune promesse chiffrée sur ce point : il ne tire du rapport aucune des valeurs de son calcul, et demande de lire les quatre jours dans sa propre balance âgée. |
| Fraîcheur | rapport annuel : à revérifier à la parution du rapport 2025 |

### D.3 Microsoft Learn — limites et allocations de requêtes Power Platform

| Champ | Contenu |
|---|---|
| URL | `https://learn.microsoft.com/fr-fr/power-platform/admin/api-request-limits-allocations` |
| Ouverte le | 30 août 2026, HTTP 200 |
| Date de la page | `ms.date` 2026-08-14 ; `updated_at` 2026-08-25 |
| Localisateur, quotas | table « Limites de requêtes des utilisateurs avec licence » : **6 000** par 24 h pour « les applications Microsoft 365 avec accès à Power Platform » ; table « Power Automate limites de demande par licence » : Office 365 **6k par utilisateur** (officiel) / 10k par flux (transition) ; Power Automate Premium **40k par utilisateur** / 200k (transition) ; Processus Power Automate **250k par licence** / 500k (transition) |
| Localisateur, module de capacité | « Chaque module complémentaire de capacité ajoute une limite de **50 000** requêtes par 24 heures » |
| Localisateur, comptage | « Les actions réussies et ayant échoué sont comptabilisées dans ces limites. **Les nouvelles tentatives et les requêtes supplémentaires de la pagination comptent également** comme des exécutions d'actions » |
| Localisateur, report | FAQ « Les limites de requêtes […] sont-elles reportées d'un jour à l'autre ou d'un mois à l'autre ? — **Non**. […] Si vous ne les consommez pas, ils ne passent pas au jour suivant » |
| Localisateur, propriétaire | FAQ « Les flux de travail ou les flux **automatisés et planifiés** qui s'exécutent en arrière-plan **utilisent toujours les limites du propriétaire** du processus, quelle que soit la raison pour laquelle le processus a démarré ou quels comptes sont utilisés pour les connexions » |
| Localisateur, transition | « Actuellement, toutes les organisations sont dans une période de transition au cours de laquelle des limites de période de transition plus élevées s'appliquent. Une fois la période de transition terminée, les limites officielles sont applicables. **Créez vos flux de cloud en fonction des limites officielles** » |
| Ce que l'article en fait | tableau des deux façons de facturer (§04), chiffrage de la boucle, incident du quota (§07), FAQ sur le propriétaire du flux, et la mise en garde explicite « Dimensionnez sur les officielles, comme l'éditeur le recommande » |
| Nuance de formulation | la page appelle « 250k **par licence** » ce que la prose de l'article appelle « une licence Process à 250 000 requêtes **par flux** ». Le corps du texte Microsoft justifie les deux lectures — « Si un flux cloud dispose d'une licence processus, le flux, ses flux enfants et ses flux associés peuvent effectuer 250 000 requêtes […] sur tous les utilisateurs du flux » — puisque la licence est rattachée à un flux. Les sources légales de la page, elles, écrivent bien « par licence Process ». |
| Fraîcheur | page à `ms.date` mouvante et régime de transition en cours : à revérifier à chaque décision d'architecture, et impérativement à la fin de la période de transition |

### D.4 Zapier — comment l'usage des tâches est mesuré

| Champ | Contenu |
|---|---|
| URL | `https://help.zapier.com/hc/en-us/articles/8496196837261-How-is-task-usage-measured-in-Zapier` |
| Ouverte le | 30 août 2026, HTTP 200 |
| Date de la page | mise à jour le **21 août 2026** |
| Localisateurs, cités mot pour mot | « Zap triggers never use tasks » ; ne comptent pas non plus « Any Filter or Paths step » ni « All action steps that error or halt » ; comptent en revanche « Any previously successful steps that run again when you **replay an entire Zap run** » |
| Ce que l'article en fait | ligne « L'unité comptée » et ligne « Le piège » du tableau §04 ; le rejeu en masse de l'incident 2 (§07) ; les 540 actions réussies du flux de relance |
| Confiance | élevée — documentation de l'éditeur sur son propre compteur de facturation |
| Fraîcheur | page mise à jour huit jours avant le relevé initial de l'article : contrôle annuel minimum, et avant tout engagement de volume |

### D.5 Zapier — grille tarifaire

| Champ | Contenu |
|---|---|
| URL | `https://zapier.com/pricing` |
| Ouverte le | 30 août 2026, HTTP 200 |
| Localisateur | plan **Professional**, facturation annuelle |
| Valeurs relevées | 750 tâches/mois → **19,99 $** ; 1 500 → 39 $ ; 2 000 → **49 $** ; 5 000 → **89 $** ; 100 000 → **489 $**. « Tous les prix de base de ce document sont en USD » ; la facturation annuelle est annoncée −33 % par rapport au mensuel |
| Concordance avec l'article | les quatre paliers cités par l'article (750/2 000/5 000/100 000) sont exacts au 30 août 2026 |
| Détail à connaître | la grille comporte un cinquième palier intermédiaire (1 500 tâches à 39 $) que l'article ne cite pas. Ce n'est pas une erreur : l'article ne prétend pas énumérer la grille, il montre « la mécanique des paliers ». Un lecteur qui rouvre la page verra cependant cinq paliers là où l'article en cite quatre. |
| Périmètre | montants en dollars, hors taxes locales, un seul éditeur. L'article le dit deux fois, dans le tableau et dans l'encadré « Prix affiché, prix contractuel et coût complet sont trois choses » |
| Fraîcheur | tarif éditeur : le plus volatil de tout le dossier. Revérification obligatoire à la date de décision |

### D.6 France Num — l'automatisation, une solution

| Champ | Contenu |
|---|---|
| URL | `https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/lautomatisation-une-solution` |
| Ouverte le | 30 août 2026. `WebFetch` a renvoyé une page vide ; récupérée par `curl` (HTTP 200, 117 385 octets) et lue localement |
| Dates affichées | **publié le 14 novembre 2025, mis à jour le 9 juillet 2026** |
| Nature | dossier d'une plateforme publique, rédigé par deux professionnels externes nommés sur la page (Erwan Kezzar, Contournement ; Marc-Olivier Sercki, Pathta). Ce n'est ni un texte normatif ni une étude primaire |
| Localisateur | section « Quelles tâches ou processus automatiser dans votre entreprise ? », sous-titres « Identifiez les processus répétitifs », « Priorisez selon le gain potentiel », puis « 3. Testez avant de déployer » et « 4. Prévoyez la maintenance » |
| Citations utiles | « Calculez pour chaque processus : le temps actuellement consacré : **fréquence × durée unitaire × nb de personnes concernées** ; la **complexité** estimée de l'automatisation : simple, moyenne, complexe ; l'**impact en cas d'erreur** : faible, moyen, critique » ; « Commencez toujours par **tester vos automatisations sur quelques cas réels** » ; « il faut néanmoins **prévoir un peu de temps** pour s'assurer qu'elle fonctionne bien » |
| Renfort disponible et non utilisé | la même page écrit : « parfois on peut avoir tendance à prioriser un processus dont les **frictions sont plus visibles au quotidien**, même si au final le temps perdu est moins important lorsqu'on fait l'effort de le quantifier ». C'est exactement la thèse d'ouverture de l'article, et elle n'est pas attribuée à cette source publique. Rien de faux : simplement un appui disponible que la page n'utilise pas. |
| Ce que l'article n'en reprend pas | l'article le dit lui-même : « Les recommandations d'outils et de prix qu'il contient ne sont pas reprises ici. » Vérifié : aucune marque ni aucun prix de cette page ne se retrouve dans l'article |
| Fraîcheur | dossier public mis à jour environ tous les huit mois |

### D.7 CNIL — guide de la sécurité des données personnelles, édition 2024

| Champ | Contenu |
|---|---|
| URL | `https://www.cnil.fr/sites/cnil/files/2024-03/cnil_guide_securite_personnelle_2024.pdf` |
| Ouverte le | 30 août 2026, par `curl` (HTTP 200, 1 744 610 octets, **64 pages**), extraite et lue localement |
| Édition | mention « Version 2024 » en page de garde |
| Localisateur, tests | **fiche 11 « Encadrer les développements informatiques »**, page 28 du PDF : « Effectuer les développements informatiques et les tests dans un environnement informatique distinct de celui de la production […] et **sur des données fictives ou anonymisées** » ; et, en regard, « Ce qu'il ne faut pas faire : utiliser des données personnelles réelles pour les phases de développement et de test » |
| Localisateur, habilitations | **fiche 5 « Gérer les habilitations »**, page 16 du PDF : profils d'habilitation, séparation des tâches, validation par un responsable, « revue régulière, au moins annuelle, des habilitations » |
| Localisateur, journalisation | **fiche 16 « Tracer les opérations »**, page 40 du PDF : « Prévoir un système de journalisation », protection des équipements et des informations journalisées, obligation contractuelle des sous-traitants |
| Localisateur, sauvegardes | **fiche 17 « Sauvegarder »**, page 42 du PDF : « Effectuer des sauvegardes et **vérifier régulièrement leur intégrité et la capacité de les restaurer** » |
| Localisateur, continuité | **fiche 18 « Prévoir la continuité et la reprise d'activité »**, page 43 du PDF |
| Ce que l'article en fait | la source appuie le mémo des six situations à provoquer avant la mise en service (§07) et la position générale sur les tests et la reprise. Aucun chiffre n'en est tiré |
| Limite, que l'article écrit | « Guide horizontal, à adapter au risque réel du traitement » — exact : le guide ne certifie aucun système et ne remplace aucune analyse de risque |

### D.8 CNIL — ce qu'il faut savoir sur l'AIPD

| Champ | Contenu |
|---|---|
| URL | `https://www.cnil.fr/fr/ce-quil-faut-savoir-sur-lanalyse-dimpact-relative-la-protection-des-donnees-aipd` |
| Ouverte le | 30 août 2026, par `curl` (HTTP 200) après un `WebFetch` partiel |
| Date affichée sur la page | 18 octobre 2017 |
| Localisateur, critère | « Une AIPD doit obligatoirement être menée quand le traitement est **« susceptible d'engendrer un risque élevé pour les droits et libertés des personnes concernées »** » |
| Localisateur, moment | « **L'AIPD doit être menée avant la mise en œuvre du traitement.** Il doit être démarré le plus en amont possible et sera mise à jour tout au long du cycle de vie du traitement » |
| Localisateur, méthode | neuf critères, dont « décision automatique avec effet légal ou similaire » et « **usage innovant (utilisation d'une nouvelle technologie)** » ; « Si au moins **deux** critères sont remplis, ou un critère mais je considère que mon traitement présente un risque élevé : l'AIPD est requise » |
| Ce que l'article en fait | FAQ « Quand faut-il une analyse d'impact avant de lancer le flux ? » et encadré de la §07 |
| Comment se justifie « ni conclure, ni écarter » | l'article écrit : « L'usage d'une automatisation ou d'une intelligence artificielle ne suffit ni à conclure qu'elle est requise, ni à l'écarter. » La déduction est directe et vérifiable sur la page : l'usage innovant n'est **qu'un** des neuf critères, et il en faut **deux** — donc l'automatisation seule ne suffit pas à conclure ; et comme les huit autres critères restent possibles, elle ne suffit pas non plus à écarter. La formule de l'article est une reformulation fidèle, pas une citation |
| Limite | la page a près de neuf ans d'affichage. Le critère (risque élevé) et le moment (avant la mise en œuvre) sont ceux du RGPD lui-même, donc stables ; la liste des traitements de la CNIL, elle, évolue par délibération |

### D.9 Microsoft Learn — éléments d'interface des flux de bureau

| Champ | Contenu |
|---|---|
| URL | `https://learn.microsoft.com/fr-fr/power-automate/desktop-flows/ui-elements` |
| Ouverte le | 30 août 2026, HTTP 200 |
| Date de la page | `ms.date` 2026-05-14 ; `updated_at` 2026-08-14 |
| Localisateurs | « Tous les éléments de l'interface utilisateur consistent en **un ou plusieurs sélecteurs** qui identifient l'interface utilisateur ou le composant Web avec lequel interagit Power Automate » ; « Chaque sélecteur se compose de plusieurs éléments représentant la **structure hiérarchique** de l'élément d'IU dans l'application ou la page web » ; « Chaque fois qu'un sélecteur échoue, Power Automate utilise le sélecteur suivant dans l'ordre défini » ; sur les sélecteurs de texte : « plus fiables et **résilients aux éventuelles modifications futures de la structure** de l'application ou de la page web » ; « les éléments de l'interface utilisateur de bureau dans les pages Web ne sont pas aussi fiables que leurs homologues Web et sont **soumis aux détails de l'application du navigateur, comme la version du navigateur** » |
| Ce que l'article en fait | FAQ « Quand un robot d'interface reste-t-il une réponse raisonnable ? » et ligne « robot d'interface » du mémo des sept réponses |
| Ce qui est établi | la dépendance des sélecteurs à la structure de l'application, et le fait qu'un changement de structure les met en défaut : la page le dit en creux, en présentant les sélecteurs de texte comme *plus* résilients aux modifications de structure, et en signalant la dépendance à la version du navigateur |
| Ce qui est une déduction éditoriale | l'obligation de **retester après chaque évolution** et le fait de « compter le retest à chaque version du logiciel piloté dans le coût annuel ». La page ne pose aucune obligation de ce genre. C'est une conséquence opérationnelle raisonnable, mais elle relève de la recommandation Hagnéré Code, pas du texte de l'éditeur |

### D.10 Hagnéré Code — grille tarifaire publique

| Champ | Contenu |
|---|---|
| URL | `https://hagnere-code.ai/tarifs` |
| Ouverte le | 30 août 2026, HTTP 200 (314 826 octets) |
| Source de vérité dans le dépôt | `src/components/tarifs/body.ts`, relue le même jour |
| Valeurs relevées, page servie et dépôt concordants | « Audit processus / Outils internes sur mesure — **990 € HT** — 1 jour, sur site ou en visio » ; « Discovery Sprint — **1 500 € HT** — 2 jours — Déduit si la phase 2 est lancée avec nous : conditions au devis » ; outils internes **8 k€ HT** (Starter), **25 k€ HT** (Pro), **80 k€ HT** (Enterprise) ; maintenance « Repère indicatif : ≈ **2 500 € HT / mois** » ; « Au-delà de 8 k€ HT, on ne signe rien sans cadrage payé » |
| Concordance avec l'article | l'article écrit « 8 000 € HT » là où la grille écrit « 8 k€ HT » (même montant), et reprend exactement les 1 500 € HT, les deux jours et la déduction conditionnelle. Les mentions « repères publics et indicatifs » et « le devis signé fixe le prix ferme » sont présentes des deux côtés |
| Test | un contrôle colocalisé relit `body.ts` et échoue si l'un des trois montants disparaît de la grille |

### D.11 Sources citées et non rouvertes

**Aucune.** Les dix sources listées dans le bloc « Sources » de la page ont été
ouvertes le 30 août 2026 et lues dans le document original. Deux ont demandé un
détour, consigné ci-dessus : la Banque de France (403 sur `WebFetch`, obtenue par
`curl`) et France Num (réponse vide sur `WebFetch`, obtenue par `curl`).

### D.12 Ce qui n'a pas pu être revérifié

| Élément | Pourquoi | Conséquence |
|---|---|---|
| La mesure « 4 191 mots, 20,955 minutes » du commentaire de `page.tsx`, et la répartition des huit minutes entières entre les sections | `scripts/measure-guide-readtime.mjs` lit la page **servie** sur `http://localhost:3000`. Aucun serveur de développement n'était disponible au moment du contrôle (connexion refusée sur 3000, 3001, 3003 ; 404 sur 3002), et la production sert encore l'ancienne version | Le nombre de 4 191 mots est **repris de la page, non re-mesuré**. Il reste borné indirectement : le test colocalisé, qui porte la même logique de dépouillement, exige entre 3 000 et 4 200 mots et une cohérence à ±1 minute avec le registre ; il passe (§H) |

### D.13 Source ouverte hors de l'article

Ouverte pour instruire l'écart É3, **elle n'est pas citée par l'article** :
`https://learn.microsoft.com/en-us/troubleshoot/power-platform/power-automate/flow-management/manage-orphan-flow-when-owner-leaves-org`
(`ms.date` 2026-06-11, ouverte le 30 août 2026, HTTP 200). Elle décrit le sort
d'un flux dont le propriétaire quitte l'organisation : « An orphaned flow is a
flow that no longer has a valid owner. These flows **can fail** if they use
connections tied to that user account. […] These steps help maintain business
continuity and **reduce failures** caused by lost or invalid connections. »
L'éditeur documente donc des **échecs**, et la remédiation consiste à assigner un
co-propriétaire. Il ne documente pas l'arrêt silencieux sans exécution en erreur
décrit par le troisième incident de la section 07.

---

## E. Registre des affirmations vérifiables

Trois natures, jamais mélangées : **FAIT** (avec localisateur), **HYPOTHÈSE**
(du cas construit, sans source, posée à découvert), **CALCUL** (dérivé des deux
premières, refait en §G).

| ID | Affirmation telle qu'elle est publiée | Nature | Localisateur | Statut |
|---|---|---|---|---|
| F01 | Le coût horaire du travail 2025 est de 44,70 € pour l'ensemble des secteurs marchands | FAIT | D.1, tableau INSEE colonne 2025 | Vérifié le 30/08/2026 |
| F02 | Ce champ ne couvre que les entreprises de dix salariés ou plus, apprentis inclus | FAIT | D.1, libellé du champ | Vérifié |
| F03 | Le retard de paiement moyen des entreprises françaises est de 13,6 jours au T4 2024, contre 13,4 jours en Europe, en hausse d'environ un jour sur un an | FAIT | D.2, chiffres-clés p. 8 et §1.2 p. 14 du PDF | Vérifié |
| F04 | Chez Zapier, seules les actions qui réussissent comptent ; déclencheurs, filtres et chemins ne comptent pas, actions en erreur non plus | FAIT | D.4, trois citations | Vérifié |
| F05 | Rejouer une exécution entière refait tourner les étapes déjà réussies et les recompte | FAIT | D.4, « Any previously successful steps… » | Vérifié |
| F06 | Plan Professional annuel : 750 tâches pour 19,99 $, 2 000 pour 49 $, 5 000 pour 89 $, 100 000 pour 489 $ | FAIT | D.5, grille du 30/08/2026 | Vérifié ; palier 1 500 → 39 $ non cité |
| F07 | Une licence Microsoft 365 donne 6 000 requêtes par utilisateur et par 24 heures | FAIT | D.3, deux tables concordantes | Vérifié |
| F08 | Côté Power Platform, les actions en échec, les nouvelles tentatives et la pagination sont comptabilisées | FAIT | D.3, définition d'une requête | Vérifié |
| F09 | Le quota ne se reporte pas d'un jour sur l'autre | FAIT | D.3, FAQ report | Vérifié |
| F10 | Un flux automatisé ou planifié utilise toujours les limites de son propriétaire | FAIT | D.3, FAQ limites de compte | Vérifié |
| F11 | Power Automate Premium monte à 40 000 requêtes par utilisateur et par jour ; une licence Process à 250 000 ; un module de capacité ajoute 50 000 | FAIT | D.3, table des licences et module complémentaire | Vérifié ; « par flux » / « par licence », voir D.3 |
| F12 | Toutes les organisations sont dans une période de transition où les limites appliquées sont plus larges que les limites officielles, et l'éditeur recommande de dimensionner sur les officielles | FAIT | D.3, section période de transition | Vérifié |
| F13 | Les sélecteurs d'un robot d'interface dépendent de la structure de l'application | FAIT | D.9, « structure hiérarchique » | Vérifié |
| F14 | Il faut compter le retest à chaque version du logiciel piloté | RECOMMANDATION | Déduction éditoriale à partir de D.9 ; aucune obligation dans la source | Signalée comme telle ici, non signalée dans la page |
| F15 | Une AIPD est requise lorsqu'un traitement est susceptible d'engendrer un risque élevé pour les droits et libertés, et la question se tranche avant la mise en œuvre | FAIT | D.8, deux citations | Vérifié |
| F16 | L'automatisation ne suffit ni à conclure qu'une AIPD est requise, ni à l'écarter | FAIT reformulé | D.8, mécanique « deux critères sur neuf » | Vérifié, voir la démonstration en D.8 |
| F17 | La CNIL recommande des tests sur données fictives ou anonymisées, des habilitations, une journalisation, des sauvegardes testées et un plan de continuité | FAIT | D.7, fiches 11, 5, 16, 17, 18 | Vérifié |
| F18 | Inventorier les tâches répétitives, mesurer fréquence et durée, tenir compte de la complexité, de l'impact d'une erreur, des tests et de la maintenance | FAIT | D.6, « Priorisez selon le gain potentiel » | Vérifié |
| F19 | Le premier palier d'outil interne de la grille Hagnéré Code s'affiche à 8 000 € HT ; au-delà, un cadrage payé à 1 500 € HT sur deux jours est systématique, déduit si la phase suivante est lancée | FAIT | D.10, page servie + `body.ts` | Vérifié |
| F20 | L'audit de processus internes est à 990 € HT pour un jour ; la maintenance a un repère indicatif de 2 500 € HT par mois | FAIT | D.10 | Vérifié |
| F21 | Le calculateur ne fait aucun envoi réseau | FAIT | Lecture de `process-priority-tool.tsx` : état React local, aucun `fetch`, aucun `<form>`, aucun `localStorage`. Test dédié | Vérifié le 30/08/2026 |
| F22 | La médiane décrit le cas courant, la moyenne est la seule des trois valeurs qui s'additionne | FAIT arithmétique | Propriété de la moyenne : `Σ(xᵢ) = n × moyenne`. Ne vaut pour aucune médiane ni aucun décile | Vérifié |
| F23 | « 80 % des dossiers » ne veut pas dire « 80 % du temps » | CALCUL | §G.2, contre-exemple des dix dossiers | Vérifié |
| F24 | Le coût horaire ne change jamais le signe d'un décompte dont tous les postes sont du temps interne | FAIT arithmétique | L'écart s'écrit `(heures rendues − heures dépensées) × taux` ; le taux est un facteur positif commun. Vérifié aussi par balayage dans le test à 22, 32, 44,7, 65 et 120 €/h | Vérifié, et la condition « tous les postes sont du temps interne » est écrite dans la page |
| F25 | Un flux qui rend 39,78 heures sur douze mois ne justifie pas le premier palier à 8 000 € HT, et allonger l'horizon n'y change rien puisqu'il dégage 864 € sur trois ans | CALCUL + FAIT | §G.5 pour les 864 €, D.10 pour les 8 000 € | Vérifié |
| F26 | Le flux de relance s'arrête sans alerte quand le compte de son propriétaire est désactivé, et aucune exécution en erreur n'est produite | **NON SOURCÉ** | Aucune des dix sources citées. La source éditeur non citée (D.13) documente au contraire des échecs | **Écart É3** |
| F27 | Un tableau croisé donne la courbe en dix minutes ; l'expert-comptable sort le coût horaire en quelques minutes ; le comptable sort deux extractions de balance âgée en une heure ; un flux sans code se démonte en une heure | **NON SOURCÉ** | Aucune source, aucun protocole | **Écart É5** |
| F28 | Vingt dossiers consécutifs suffisent à sortir un neuvième décile exploitable | **NON SOURCÉ** | Règle éditoriale ; sur 20 valeurs, le neuvième décile est la 18ᵉ | **Écart É6** |

### Affirmations que l'article ne fait pas, et qu'il serait facile de lui prêter

- il ne dit jamais que les relances de factures sont le bon premier processus
  **en général** : elles le sont dans le cas construit, parce qu'elles seules
  passent les cinq questions ;
- il ne promet aucun gain : son propre décompte sort négatif à douze mois ;
- il ne dit pas que l'incident du quota se produit aujourd'hui : il écrit
  explicitement que c'est « un incident à préparer, pas un incident
  d'aujourd'hui », la période de transition étant en cours ;
- il ne présente aucun des montants décalés (5 550 €, 83 250 €, 88 800 €) comme
  une perte : seuls 0,91 €, 109,48 € et 124,08 € de coût de financement, plus
  des heures, sont comptés.

---

## F. Registre des hypothèses du cas construit

Vingt-deux hypothèses, aucune sourcée, toutes posées à découvert. L'article
étiquette son cas dès le chapô, dans le bandeau, dans le premier paragraphe et
dans l'encadré du fil rouge : « les volumes, les durées, l'effectif, la ville et
la facture moyenne sont choisis pour la démonstration et ne viennent d'aucune
source » ; « Ce n'est pas un dossier client ». Quatre tests vérifient que ces
étiquettes précèdent la première mesure.

| ID | Hypothèse | Valeur posée | Déclarée dans la page ? |
|---|---|---|---|
| H01 | Secteur, taille et ville de l'entreprise | négoce de matériel électrique, 26 salariés, Nancy | Oui, étiquette explicite |
| H02 | Équipe du cas | Nadia (ADV), un comptable, deux chargés d'affaires, un magasinier | Oui |
| H03 | Volume et durées, commandes clients | 320/mois, 6 min de moyenne, 22 min au neuvième décile | Oui |
| H04 | Volume et durées, devis de dépannage | 60/mois, 25 min, 70 min | Oui |
| H05 | Volume et durées, fiches d'intervention | 140/mois, 9 min, 26 min | Oui |
| H06 | Volume et durées, relances de factures échues | 90/mois, 8 min, 15 min | Oui |
| H07 | Contre-exemple des dix dossiers | 8 dossiers à 3 min, 2 à 30 min | Oui, présenté comme une démonstration |
| H08 | Résultat des cinq questions sur les commandes | trois références divergentes sur dix dossiers rejoués, quarante clients et quarante mises en page | Oui |
| H09 | Résultat sur les devis | la règle de remise a bougé deux fois dans l'année | Oui |
| H10 | Résultat sur les fiches d'intervention | l'ERP n'expose aucune interface documentée | Oui |
| H11 | Forme du flux de relance | 1 déclencheur, 2 filtres, 6 actions | Non déclarée comme hypothèse |
| H12 | Boucle mal écrite du second flux | 320 commandes parcourues, 4 actions à l'intérieur, 4 passages par jour | Non déclarée comme hypothèse |
| H13 | Abonnement de plateforme à 0 € de plus | l'entreprise paie déjà des licences Microsoft 365 avec accès à Power Platform, et le flux tient sous le quota | Partiellement : « Compris dans Microsoft 365, sous le quota » et « sur l'abonnement déjà payé » |
| H14 | Part du temps techniquement retirable | 65 % | **Oui, nommément** : « ne sortent d'aucune source » |
| H15 | Adoption moyenne sur douze mois | 85 % | Oui, nommément |
| H16 | Part des heures libérées réaffectée à un travail identifié | 50 % | Oui, nommément |
| H17 | Construction du flux, en interne | 4 jours de 7 heures, soit 28 h | Oui, nommément |
| H18 | Suivi et corrections | 2 h par mois, soit 89,40 €/mois | Oui, nommément |
| H19 | Facture moyenne relancée | 1 850 € TTC | **Oui, nommément** : « Quatre nombres entrent ici sans venir d'une source » |
| H20 | Jours gagnés sur le retard de paiement | 4 jours | Oui, nommément |
| H21 | Taux de financement du besoin de trésorerie | 6 % et 3 % essayés ; 6 % retenu pour les incidents | Oui, nommément, avec le cas « trésorerie non rémunérée : elle ne vaut rien » |
| H22 | Paramètres des trois incidents | 1 h pour comprendre le quota ; 23 exécutions en erreur puis 15 jours de suspension et 2 h de comptable ; 16 jours d'arrêt et 6 h pour republier sous un compte de service | Oui, « ce ne sont pas des dossiers clients » |

**Cohérence des décomptes internes de la page.** La section 05 annonce « une
seule des six hypothèses vient d'une source publique » puis en nomme cinq non
sourcées : 1 + 5 = 6 ✔. La section 06 annonce « quatre nombres […] sans venir
d'une source » puis en nomme la facture moyenne, les quatre jours et deux taux :
1 + 1 + 2 = 4 ✔. La section 05 renvoie explicitement à ces quatre-là (« La
section 06 en ajoutera quatre autres, aussi peu sourcées, et ce sont elles qui
renversent le verdict »). Les deux décomptes sont exacts **pour le périmètre
qu'ils annoncent** — le tableau à douze mois et le calcul de trésorerie. Ils ne
couvrent pas H01 à H13 ni H22, qui relèvent de l'étiquette générale du cas
construit.

---

## G. Recalculs à la main

Tous les calculs ci-dessous ont été refaits **indépendamment du composant**, en
arithmétique décimale exacte, le 30 août 2026. Chaque étape est écrite pour
qu'un lecteur extérieur puisse la refaire avec une calculatrice.

### G.1 Le modèle publié

```text
Heures actuelles   = cas par mois × minutes par cas ÷ 60 × mois
Heures retirables  = heures actuelles × part techniquement retirable
Heures retirées    = heures retirables × adoption moyenne
Heures réaffectées = heures retirées × part réellement réemployée

Valeur de capacité = heures réaffectées × coût horaire chargé
Coût renseigné     = temps interne × coût horaire + abonnements × mois
Écart              = valeur de capacité − coût renseigné
```

Entrées du scénario publié : 90 cas/mois, 8 min/cas, 44,70 €/h, 65 %, 85 %,
50 %, 28 h de construction, 89,40 €/mois de suivi, 0 € d'abonnement, 0 € d'autre
coût, 12 mois, cinq questions au vert.

### G.2 Les quatre lignes chronométrées

| Processus | Cas/mois | Moyenne | `cas × min ÷ 60` | Heures publiées |
|---|---:|---:|---|---:|
| Commandes clients | 320 | 6 min | `320 × 6 ÷ 60 = 32` | 32 h ✔ |
| Devis de dépannage | 60 | 25 min | `60 × 25 ÷ 60 = 25` | 25 h ✔ |
| Fiches d'intervention | 140 | 9 min | `140 × 9 ÷ 60 = 21` | 21 h ✔ |
| Relances de factures | 90 | 8 min | `90 × 8 ÷ 60 = 12` | 12 h ✔ |
| **Total** | | | `32 + 25 + 21 + 12 = 90` | **90 h ✔** |

Contre-exemple des dix dossiers : `8 × 3 + 2 × 30 = 24 + 60 = 84` minutes ;
moyenne `84 ÷ 10 = 8,4` min ✔ ; médiane = 3 min ✔ ; part de temps retirée en
automatisant parfaitement les huit cas simples : `24 ÷ 84 = 0,285714…` soit
**28,6 %** ✔.

Neuvième décile des commandes rapporté à la moyenne : `22 ÷ 6 = 3,67`, ce que
l'article appelle « près de quatre fois plus » ✔.

### G.3 Le décompte à douze mois, poste par poste

| Poste | Calcul refait | Résultat exact | Publié |
|---|---|---:|---:|
| Temps consommé aujourd'hui | `90 × 8 × 12 ÷ 60` | 144 h | 144 h ✔ |
| Part techniquement retirable | `144 × 0,65` | 93,60 h | 93,60 h ✔ |
| Après adoption moyenne | `93,60 × 0,85` | 79,56 h | 79,56 h ✔ |
| Réaffecté à un travail identifié | `79,56 × 0,50` | 39,78 h | 39,78 h ✔ |
| Valeur de capacité | `39,78 × 44,70` | 1 778,166 € | 1 778,17 € ✔ (arrondi correct) |
| Construction du flux | `28 × 44,70` | 1 251,60 € | 1 251,60 € ✔ |
| Suivi et corrections | `2 × 12 × 44,70` = `24 × 44,70` | 1 072,80 € | 1 072,80 € ✔ |
| Abonnement | `0` | 0 € | 0 € ✔ |
| Coût renseigné total | `1 251,60 + 1 072,80` | 2 324,40 € | — |
| **Écart à douze mois** | `1 778,166 − 2 324,40` | **−546,234 €** | **−546,23 €** ✔ |

**Contrôle par une seconde route, en heures.** Heures dépensées :
`28 + 24 = 52`. Heures rendues : 39,78. Différence : `39,78 − 52 = −12,22` h ✔,
et `−12,22 × 44,70 = −546,234 €` — identique au centime. L'article publie les
deux formulations ; elles concordent.

### G.4 Le seuil de bascule à 118 relances

Valeur rendue par une relance mensuelle sur douze mois :

```text
1 relance/mois → 1 × 8 × 12 ÷ 60           = 1,6 h de travail actuel
                 1,6 × 0,65 × 0,85 × 0,50  = 0,442 h réaffectée
                 0,442 × 44,70             = 19,7574 € de valeur de capacité
```

Coût renseigné, indépendant du volume : 2 324,40 €.

```text
Seuil exact = 2 324,40 ÷ 19,7574 = 117,647058…
```

Premier entier strictement au-dessus : **118** ✔. Écart au volume actuel :
`118 − 90 = 28` ✔ (« 28 de plus qu'aujourd'hui »). Contrôle inverse : à 117
relances, `117 × 19,7574 = 2 311,62 €` < 2 324,40 €, l'écart reste négatif ✔.

### G.5 Sensibilité au suivi, horizons et équilibre

**Suivi ramené à une heure par mois.** Coût renseigné :
`1 251,60 + 12 × 44,70 = 1 251,60 + 536,40 = 1 788,00 €`.
Écart : `1 778,166 − 1 788,00 = −9,834 €` → **−9,83 €** ✔. Le flux « arrête
simplement de coûter », il ne se paie toujours pas ✔.

**Trois horizons, le modèle étant linéaire en mois.**

| Horizon | Heures réaffectées | Heures dépensées | Écart en heures | Écart en euros | Publié |
|---:|---:|---:|---:|---:|---:|
| 12 mois | `3,315 × 12 = 39,78` | `28 + 24 = 52` | −12,22 | −546,234 € | −546 € ✔ |
| 24 mois | `3,315 × 24 = 79,56` | `28 + 48 = 76` | +3,56 | +159,132 € | **+159 €** ✔ |
| 36 mois | `3,315 × 36 = 119,34` | `28 + 72 = 100` | +19,34 | +864,498 € | **+864 €** ✔ |

(3,315 h réaffectées par mois = `90 × 8 ÷ 60 × 0,65 × 0,85 × 0,50`.)

**Équilibre.** Contribution mensuelle nette :
`1 778,166 ÷ 12 − 89,40 = 148,1805 − 89,40 = 58,7805 €`.
Délai : `1 251,60 ÷ 58,7805 = 21,29277…` → **21,3 mois** ✔. C'est la valeur que
le calculateur affiche et celle que la prose annonce ; les deux viennent du même
calcul.

### G.6 La chaîne de trésorerie

| Maillon | Calcul | Résultat exact | Publié |
|---|---|---:|---:|
| Encours mensuel relancé | `90 × 1 850` | 166 500 € | 166 500 € ✔ |
| Encours annuel | `166 500 × 12` | 1 998 000 € | 1 998 000 € ✔ |
| Immobilisé par jour de décalage | `1 998 000 ÷ 365` | 5 473,9726 € | 5 474 € ✔ |
| Quatre jours gagnés | `5 473,9726 × 4` | 21 895,8904 € | 21 896 € ✔ |
| Valeur annuelle à 6 % | `21 895,8904 × 0,06` | 1 313,7534 € | 1 314 € ✔ |
| Écart corrigé à 6 % | `1 313,7534 − 546,234` | 767,5194 € | **+768 €** ✔ |
| Valeur annuelle à 3 % | `21 895,8904 × 0,03` | 656,8767 € | 657 € ✔ |
| Écart corrigé à 3 % | `656,8767 − 546,234` | 110,6427 € | **+111 €** ✔ |
| Trésorerie non rémunérée | valeur nulle | — | l'écart reste à −546 € ✔ |

### G.7 Les trois incidents

Unités tenues par la page : une relance = une facture de 1 850 € TTC, trois par
jour ; coût de financement = `montant × taux × jours ÷ 365`, à 6 % ; un envoi
suspendu N jours sort avec `(N + 1) ÷ 2` jours de retard en moyenne.

**Incident 1 — quota épuisé un mardi.**

```text
volume d'une journée      3 × 1 850          =  5 550 €      ✔ publié
coût de financement       5 550 × 0,06       =    333
                          333 ÷ 365          =      0,912328… → 0,91 €  ✔
heure passée à comprendre 1 × 44,70          =     44,70 €   ✔
```

**Incident 2 — rejeu puis suspension de quinze jours.**

```text
relances accumulées       15 × 3             =     45        ✔
montant décalé            45 × 1 850         = 83 250 €      ✔
retard moyen              (15 + 1) ÷ 2       =      8 jours  ✔ « huit jours »
coût de financement       83 250 × 0,06      =  4 995
                          4 995 × 8          = 39 960
                          39 960 ÷ 365       =    109,479452… → 109,48 € ✔
deux heures de comptable  2 × 44,70          =     89,40 €   ✔
total mesurable           89,40 + 109,48     =    198,88 €   ✔
```

**Incident 3 — propriétaire du flux désactivé pendant seize jours.**

```text
relances non parties      16 × 3             =     48        ✔
montant décalé            48 × 1 850         = 88 800 €      ✔
retard moyen              (16 + 1) ÷ 2       =      8,5 jours ✔
coût de financement       88 800 × 0,06      =  5 328
                          5 328 × 8,5        = 45 288
                          45 288 ÷ 365       =    124,076712… → 124,08 € ✔
six heures de republication 6 × 44,70        =    268,20 €   ✔
```

Les trois montants décalés sont bien des multiples entiers de la facture
moyenne : 3, 45 et 48 relances. Aucun flux fractionnaire ne s'y glisse — c'est
précisément ce qui produit l'écart É1 avec les 5 474 € de la section 06.

### G.8 Les quotas de plateforme appliqués au flux

| Grandeur | Calcul | Résultat | Publié |
|---|---|---:|---:|
| Actions réussies Zapier | `6 actions × 90 relances` | 540 / mois | 540 ✔, sous le palier de 750 ✔ |
| Requêtes Power Platform | `9 étapes × 90 relances` | 810 / mois | 810 ✔ (voir É2 et É4) |
| Boucle mal écrite, par exécution | `320 commandes × 4 actions` | 1 280 | 1 280 ✔ |
| Boucle, par jour | `1 280 × 4 passages` | 5 120 | 5 120 ✔, contre 6 000 par 24 h ✔ (même période, ici) |

### G.9 Synthèse arithmétique

**Cinquante-quatre lignes de calcul refaites en G.2 à G.8, cinquante-quatre
concordances** — chacune porte sa marque `✔` en regard de la valeur publiée, et
couvre l'intégralité des grandeurs chiffrées des sections 01 à 08. Aucun arrondi
n'est faux : `1 778,166 → 1 778,17`, `−546,234 → −546,23`, `5 473,9726 → 5 474`,
`21 895,8904 → 21 896`, `1 313,7534 → 1 314`, `656,8767 → 657`,
`0,912328 → 0,91`, `109,479452 → 109,48`, `124,076712 → 124,08`,
`21,29277 → 21,3`. Les arrondis affichés au titre des incidents (« 199 € » dans
la formulation courte, 198,88 € dans le texte) sont cohérents.

---

## H. Ce que les tests colocalisés verrouillent

`npx vitest run src/app/guides/automatiser-processus-metier/` exécuté le
**30 août 2026 à 22 h 53** : **2 fichiers, 57 tests, 57 passés, 0 échec**, durée
1,19 s. Ce résultat est une observation datée, pas une garantie de non-régression
future.

### `process-priority-tool.test.ts` (13 tests)

- l'outil s'ouvre sur le dossier du guide **déjà résolu** : cinq cases cochées,
  90 cas, 8 min, 44,70 €/h, 12 mois, suivi = `2 × 44,70`, construction = `4 × 7`,
  aucun euro sortant ;
- il reproduit ligne à ligne le tableau de la section 05 : 144 / 93,6 / 79,56 /
  39,78 h, 1 778,166 €, 1 251,60 €, 2 324,40 €, −546,234 €, ROI −23,5 %,
  décision `unfavorable` ;
- l'identité en heures est vérifiée par une route différente de celle du
  composant : `52 h` investies, `−12,22 h`, puis `× 44,70` ;
- le seuil de 118 relances est retrouvé **par balayage** (volume par volume,
  de 1 à 5 000), pas par la formule publiée ;
- la sensibilité au suivi (`−9,834 €`) et l'invariance du signe au coût horaire
  (22, 32, 44,7, 65, 120 €/h) sont vérifiées ;
- les garde-fous : une seule réponse négative bloque quel que soit le gain,
  pourcentages bornés à 100, entrées négatives neutralisées, ROI `null` si le
  coût est nul, délai `null` si la contribution mensuelle ne couvre pas
  l'exploitation.

### `content-quality.test.ts` (44 tests) — ce qu'ils rendent non modifiable sans échec

| Famille | Ce qui est verrouillé |
|---|---|
| Identité | H1 = titre du registre = `headline` structuré ; canonique ; seulement `Article` + `BreadcrumbList`, sans `FAQPage`, `HowTo`, `Offer`, `Review`, `AggregateRating`, `Product` ni `wordCount` |
| Calibre | 3 000 à 4 200 mots ; `readTimeMin` à ±1 minute des mots ÷ 200 ; somme des huit durées de section = `readTimeMin` |
| Typographie | aucun insécable littéral dans le code source ; insécable avant chaque ponctuation double ; nombres collés à leur unité ; apostrophes courbes et guillemets français |
| Étiquette du cas construit | la phrase « les volumes, les durées, l'effectif, la ville et la facture moyenne sont choisis pour la démonstration et ne viennent d'aucune source », « Ce n'est pas un dossier client », « ce ne sont pas des dossiers clients », et le fait que l'étiquette **précède** les 320 commandes |
| Hypothèses annoncées | les cinq de la §05 et les quatre de la §06 doivent être nommées comme non sourcées |
| Arithmétique | les huit lignes du tableau §05 recalculées par le modèle **et** présentes en toutes lettres dans le rendu ; les trois horizons ; l'équilibre 21,3 mois ; la chaîne de trésorerie maillon par maillon ; les trois incidents avec leurs onze montants |
| Prix maison | `990 € HT`, `1 500 € HT` et `8 k€ HT` doivent exister dans `src/components/tarifs/body.ts`, et `8 000 € HT` / `1 500 € HT` dans l'article |
| Honnêteté commerciale | un seul bloc « Transparence » ; un seul CTA en ligne ; « Ce que notre propre grille dit contre nous » ; « C'est une décision, pas un échec » ; « ne rien automatiser cette année » |
| Interdits | aucune fréquence sur une population jamais mesurée (« la plupart des… », « l'erreur la plus fréquente… ») ; aucun connecteur robotique ; aucune métaphore des « portes » ; aucun vocabulaire de production visible |
| Outil | pas de `localStorage`, pas de `fetch`, pas de `<form>`, exclu du temps de lecture, et premier écran = calcul résolu, jamais « décision bloquée » |

**Ce que les tests ne verrouillent pas** : la véracité des sources externes. Ils
relisent la page et le modèle ; aucun n'ouvre une URL. C'est exactement le rôle
de la section D de ce dossier.

---

## I. Points de vigilance et limites

### I.1 Les écarts, en détail

**É1 — deux cadences journalières.** La section 06 construit sa journée sur
l'année civile (`1 998 000 ÷ 365 = 5 474 €`) ; la section 07 la construit sur des
relances entières (`3 × 1 850 = 5 550 €`). Le choix de la section 07 est
défendable et même documenté dans les commentaires de test : il évite un « flux
calendaire fractionnaire », c'est-à-dire 2,96 relances par jour. Mais un lecteur
qui suit le fil rouge d'une section à l'autre voit deux journées différentes pour
le même flux, dans un guide dont l'argument central est que les décalages
d'unités font déraper les budgets. Une phrase suffirait à le dire.

**É2 — mois contre 24 heures.** Rien de faux, mais la phrase à retenir
(« 810 requêtes par mois, très loin des 6 000 ») met côte à côte deux périodes
différentes. À l'inverse, la ligne de la boucle (5 120 requêtes par jour contre
6 000 par 24 heures) compare bien deux grandeurs journalières : la rigueur est
là, elle n'est simplement pas tenue partout.

**É3 — l'arrêt silencieux.** C'est le seul écart qui touche à la charge de
preuve. La section 07 annonce des mécanismes « documentés par les éditeurs ».
Pour l'incident 1 (quota, report, nouvelles tentatives) et l'incident 2 (rejeu
recompté), c'est vrai et vérifié en D.3 et D.4. Pour l'incident 3, la source
citée n'établit que la propriété du quota ; le mécanisme raconté — arrêt sans
aucune exécution en erreur, invisible d'une surveillance qui ne regarde que les
échecs — n'est documenté nulle part dans les sources de la page, et la page de
support de l'éditeur qui traite exactement ce cas (D.13) décrit des **échecs**.
Deux issues honnêtes : citer une source qui documente l'arrêt silencieux, ou
présenter le mécanisme comme une hypothèse du cas construit au même titre que
H22. La leçon opérationnelle de l'incident — surveiller **l'absence d'exécution**
et pas seulement les exécutions en erreur — reste juste dans les deux cas, et
elle est excellente ; c'est son adossement documentaire qui manque.

**É4 — le neuvième pas.** Compter le déclencheur parmi les requêtes Power
Platform est prudent : si le déclencheur ne compte pas, le flux consomme 720 et
non 810 requêtes par mois, et la conclusion se renforce. Le mot « neuf » mérite
néanmoins une note, parce que l'article demande au lecteur de refaire ce comptage
sur son propre flux.

**É5 — les durées d'exécution.** Dix minutes de tableau croisé, une heure
d'extraction, une heure pour démonter un flux : ces durées gouvernent la
faisabilité de toute la méthode. Elles sont plausibles et elles ne sont pas
sourcées. Le guide, qui exige ailleurs qu'on chronomètre au lieu de déclarer,
déclare ici.

**É6 — le neuvième décile sur vingt dossiers.** Sur vingt valeurs triées, le
neuvième décile est la dix-huitième : deux dossiers atypiques suffisent à le
déplacer. Le guide s'en sert pour « dimensionner l'exception », usage qui
supporte l'imprécision. Le mot « exploitable », lui, mériterait d'être qualifié.

**É7 — dates et déploiement.** Constat brut, sans jugement : la page affiche le
28 août 2026 ; `page.tsx` a été modifié le 30 août 2026 à 22 h 16 ; la production
sert encore la version du 29 juillet 2026. Le dépôt n'étant pas versionné ici,
la nature des modifications du 30 août n'est pas qualifiable. Le §15 de la charte
demande une nouvelle `dateModified` après publication pour tout changement
substantiel.

### I.2 Limites que l'article énonce lui-même, et qui tiennent

- « Ce guide ne valide ni licence, ni conformité, ni sécurité, ni faisabilité » ;
- « Les prix des éditeurs, les quotas de plateforme et les données publiques
  citées évoluent : revérifiez-les à votre date de lecture » — au 30 août 2026,
  aucune des dix sources n'a bougé sur les valeurs citées ;
- le calculateur « ne compte que des heures », et la page le dit **sous** le
  calculateur, avec le renvoi vers la section 06 qui remonte le même flux à
  +768 € ;
- l'encadré « Deux gains qui s'additionnent, un qui fait doublon » interdit
  explicitement de compter à la fois les heures et une dépense évitée.

### I.3 Ce que ce dossier n'établit pas

- **La réalité du cas.** Il n'y a aucun client derrière ces quatre processus, et
  ce dossier ne prétend pas le contraire. L'entreprise, l'effectif, la ville, les
  volumes, les durées et la facture moyenne sont choisis pour la démonstration.
- **La transposabilité.** 65 %, 85 % et 50 % ne sont ni des moyennes de marché
  ni des ordres de grandeur documentés : ce sont des curseurs à contester un par
  un, ce que l'article demande explicitement de faire.
- **Le rendu.** Aucun contrôle visuel, aucun test de responsive et aucune mesure
  Lighthouse n'ont été refaits pour ce dossier : le serveur local n'était pas
  disponible et la production sert une autre version.
- **L'indexation.** Non vérifiée, et distincte de la présence au sitemap.

---

## J. Statut éditorial, relecture et maintenance

### J.1 Relecture humaine — charte §13

**Aucun lecteur humain extérieur n'a relu cet article, et ce dossier n'en
invente aucun.** Aucun test lecteur, aucun panel, aucun dirigeant de PME n'a été
sollicité. Les vérifications consignées ici ont été faites par un agent : lecture
intégrale de la page et des tests, réouverture des dix sources, recalcul manuel,
exécution de la batterie colocalisée. Une contre-relecture par agent n'est pas
l'avis d'une personne réelle.

Conséquence directe, au sens du §13 : tant qu'aucun lecteur humain extérieur n'a
relu le guide et qu'aucune instruction explicite du commanditaire ne délègue la
décision de publication, le statut maximal atteignable est **« prêt pour revue
humaine »**.

### J.2 Statut de ce dossier

```text
Dossier : docs/research/automatiser-processus-metier.md
Nature : reconstitution du socle de preuves d'un article déjà écrit
Date du travail : 2026-08-30
Périmètre écrit : ce fichier, et lui seul
Page, tests, registre, manifestes : NON MODIFIÉS
Sources citées par l'article : 10
Sources rouvertes et datées ce jour : 10
Sources citées non rouvertes : 0
Élément cité non revérifié : 1 (mesure de temps de lecture, voir D.12)
Source ouverte hors article : 1 (D.13, pour instruire l'écart É3)
Lignes de calcul refaites à la main (G.2 à G.8) : 54
Écarts arithmétiques trouvés : 0
Écarts d'unité, de sourçage ou de date signalés : 7 (section 0)
Hypothèses du cas construit recensées : 22
Batterie colocalisée : 57/57 le 2026-08-30 à 22:53
Relecture humaine extérieure : AUCUNE
Statut proposé : PRÊT POUR REVUE HUMAINE
Production : NON À JOUR (sert la version du 29/07/2026 au 30/08/2026)
Indexation : NON VÉRIFIÉE
```

### J.3 Fraîcheur — quand rouvrir quoi

| Source | Prochaine vérification déclenchée par |
|---|---|
| Zapier, grille tarifaire | La plus volatile : à rouvrir avant toute décision, et au minimum tous les six mois |
| Microsoft, limites de requêtes | À rouvrir à la **fin de la période de transition** — l'article y adosse deux passages — et à chaque `ms.date` nouveau |
| Zapier, mesure des tâches | Annuel, ou au premier changement de facturation annoncé |
| INSEE, coût horaire | À la prochaine publication annuelle, et à la prochaine enquête quadriennale ; le 44,70 € de 2025 est une estimation révisable |
| Banque de France, ODP | À la parution du rapport 2025 |
| France Num | Dossier remis à jour environ tous les huit mois |
| CNIL, guide sécurité | À la prochaine édition du guide |
| CNIL, AIPD | À toute nouvelle délibération modifiant les listes de traitements |
| Microsoft, éléments d'interface | À chaque `ms.date` nouveau |
| `/tarifs` Hagnéré Code | À chaque modification de la grille : trois montants de l'article en dépendent, et un test échoue si la grille change |

### J.4 Ce qu'il faudrait pour lever le blocage « traçabilité »

1. Trancher É3 : citer une source qui documente l'arrêt silencieux d'un flux dont
   le propriétaire est désactivé, ou requalifier ce mécanisme en hypothèse.
2. Réconcilier É1 en une phrase, et É2 en rappelant la période.
3. Qualifier É5 et É6 comme des repères éditoriaux plutôt que comme des faits.
4. Faire relire par un lecteur humain extérieur non technique et consigner ses
   réponses, ou obtenir du commanditaire une délégation explicite.
5. Déployer, puis vérifier l'URL de production et remettre la `dateModified` en
   accord avec la dernière modification substantielle.

Les points 1 à 3 et 5 sortent du territoire de ce dossier : ils sont signalés
ici, ils ne sont pas appliqués.
