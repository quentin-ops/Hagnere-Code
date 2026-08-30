# Dossier de preuves — MVP SaaS : quoi inclure ?

> **Ce dossier décrit l'article tel qu'il existe dans le dépôt le 30 août 2026.**
> Il remplace intégralement le dossier précédent, dont les sections A à H
> décrivaient l'état du 2–3 août 2026 (page à 3 740 puis 4 546 mots, H2 en
> impératif, « sept variantes du même contrat fictif ») et dont la section I,
> ajoutée les 28 et 30 août, ne couvrait que le delta de correction. Aucun
> verdict, aucune scorecard et aucune date de consultation de l'ancien dossier
> n'est repris : tout ce qui est écrit ici a été rouvert, recalculé ou exécuté
> le 30 août 2026.
>
> Objectif de rédaction : un lecteur extérieur doit pouvoir, seul, retrouver
> chaque source, refaire chaque calcul et distinguer ce qui est établi de ce qui
> est posé. Trois natures d'énoncé sont séparées et jamais mélangées :
> **FAIT SOURCÉ** (avec son localisateur), **HYPOTHÈSE** (du cas construit, sans
> source, posée à découvert), **CALCUL** (dérivé des deux premiers, étapes
> écrites).

| Champ | Valeur |
| --- | --- |
| Slug | `mvp-saas-quoi-inclure` |
| Fichier de page | `src/app/guides/mvp-saas-quoi-inclure/page.tsx` |
| Modules importés par la page | `./mvp-contract-engine`, `./mvp-contract-tool`, `@/components/guides/*`, `@/lib/guides`, `@/lib/guide-page-seo`, `@/lib/team` |
| Tests colocalisés | `content-quality.test.ts`, `mvp-contract-engine.test.ts`, `mvp-contract-tool.test.tsx` |
| Date de reconstitution du dossier | **30 août 2026**, Europe/Paris |
| Auteur du dossier | agent de traçabilité, sans droit d'écriture sur la page, les tests, le registre ou les manifestes |
| Statut éditorial atteignable | **prêt pour revue humaine** (charte §13 — voir section K) |

---

## 0. Écarts trouvés dans l'article — signalés, non corrigés

Le périmètre d'écriture de cet agent se limite à ce fichier. Les points
ci-dessous sont **constatés et documentés**, pas corrigés. Chacun est
reproductible avec la commande ou le fichier indiqué.

### É1 — La version en production n'est pas celle du dépôt (bloquant pour la traçabilité)

`https://hagnere-code.ai/guides/mvp-saas-quoi-inclure` répond `200` le
30 août 2026, mais sert **la version du 3 août**, pas celle décrite par ce
dossier.

Preuves relevées ce jour sur le HTML servi :

| Contrôle | Production (30/08/2026) | Dépôt (`src/lib/guides.ts`) |
| --- | --- | --- |
| `dateModified` du JSON-LD `Article` | `2026-08-03T04:14:58+02:00` | `2026-08-28T18:00:00+02:00` |
| H2 n° 1 | « Délimitez le minimum par la preuve à obtenir » | « Ce que votre premier client rend obligatoire » |
| H2 n° 4 | « Attribuez une décision et un responsable à chacune des sept familles » | « Sept responsabilités, et le propriétaire de chacune » |
| Occurrences de « Sept variantes du même contrat fictif » | 2 | 0 |
| Occurrences de « 15 000 € » | 0 | présent au §01, §05 et §10 |
| Occurrences de « 2 880 € HT », « 840 minutes », « 350 € le jour chargé », « 6 900 € HT », « 28 août 2026 » | 0 | présentes |

Commande de reproduction :

```bash
curl -s -L https://hagnere-code.ai/guides/mvp-saas-quoi-inclure \
  | grep -o '"dateModified":"[^"]*"'
```

Conséquence : **tant que le déploiement n'a pas eu lieu, ce dossier décrit un
article « prêt », pas un article « publié »** au sens du tableau de statuts de
la charte §13. Toute campagne payante pointant cette URL enverrait le trafic
sur la version qui contient précisément les défauts que la passe du 28 août a
corrigés (« franchir la barre des cinq écrans », « six à huit écrans », neuf
jours de retard sans mécanisme). Les trois phrases fautives ne sont plus dans
le HTML servi non plus — la production est antérieure à ces deux états — mais
les H2 en impératif et le vocabulaire « sept variantes » y sont.

### É2 — « Une hypothèse, et une seule, ne sort d'aucune source » est faux dans le périmètre de l'article

Le §06 écrit :

> Une hypothèse, et une seule, ne sort d'aucune source : **350 € le jour
> chargé** pour le temps interne, soit 50 € l'heure sur sept heures.

Le même article en nomme d'autres, ailleurs :

- l'avertissement de portée (bloc `disclaimer`) : « Accordia, ses clients, ses
  durées, son abonnement et le coût de son temps interne sont choisis pour
  l'exemple et **ne viennent d'aucune source** » ;
- le §05 : la colonne « ce que ça pèse » est « une **estimation éditoriale
  Hagnéré Code** » (2 à 3 écrans pour l'administration, 1 pour les rôles, 1 à 2
  pour le tableau de bord) ;
- le §02 : « Pilote accompagné — **2 à 5 clients réels** » (voir É5).

La phrase est probablement destinée à ne porter que sur le §06 (où les durées
manuelles sont déjà couvertes par l'étiquette du cas construit, et où 350 €
est le seul facteur nouveau). Telle qu'elle est écrite, sans restriction de
portée, elle affirme quelque chose que l'article contredit lui-même deux
sections plus haut. Aucun test ne la surveille : `content-quality.test.ts`
l. 785 vérifie seulement que la chaîne « 350 € le jour chargé » est présente.

### É3 — « Trois de ces lignes portent une obligation extérieure » qualifie mal deux des trois références

Le §04 ouvre par « Trois de ces lignes portent une obligation extérieure »,
puis cite l'ANSSI, OWASP ASVS et WCAG 2.2. Aucune des trois n'est une
obligation pour un pilote SaaS B2B privé, et les trois phrases qui suivent le
disent d'ailleurs correctement (« recommandent », « permet de choisir », « se
testent »).

Le document ANSSI lui-même, page 1 (« Informations »), écrit :

> Sauf disposition réglementaire contraire, **les recommandations n'ont pas de
> caractère normatif** ; elles sont livrées en l'état et adaptées aux menaces
> au jour de leur publication.

OWASP ASVS est un référentiel communautaire ; WCAG 2.2 est une Recommandation
W3C, et la note de sources de l'article écrit elle-même que « la conformité à
WCAG ne suffit pas seule à conclure sur toutes les obligations applicables ».
La seule obligation extérieure réellement citée par le guide est le RGPD
(articles 5, 25 et 32), traitée au §02 et au §05. La charte §5.5 impose de
séparer obligation, recommandation et pratique de marché : le mot
« obligation » couvre ici trois lignes dont une seule le mérite.

### É4 — Le §08 décrit mal les bornes du calculateur

Le §08 écrit :

> Les entrées sont bornées à un million pour les clients, les minutes et les
> occurrences, **avec trois décimales au plus**.

Le moteur refuse toute décimale sur le nombre de clients :
`mvp-contract-engine.ts` l. 762 appelle
`parseDecimal(input.pilotClientCount, MAX_PILOT_CLIENTS, true)`, et le
troisième argument `integerOnly` fait échouer toute saisie décimale
(l. 244-246) avec le message « Nombre de clients du test invalide : un nombre
entier est requis » (l. 296-298). La borne de trois décimales vaut pour les
minutes, les occurrences et la capacité — pas pour les clients.

### É5 — « 2 à 5 clients réels » est un chiffre sans source et sans étiquette

Le tableau du §02 publie, pour la ligne « Pilote accompagné », la colonne
« 2 à 5 clients réels, limites annoncées, équipe présente ». C'est une
convention propre au guide : aucune des douze sources listées ne borne un
pilote à cette fourchette, et l'article ne l'annonce ni comme estimation
éditoriale (comme il le fait au §05) ni comme hypothèse du cas construit
(comme il le fait pour Accordia). Un lecteur ne peut pas savoir d'où sort ce
« 2 à 5 ». La charte §4.1 impose qu'un ordre de grandeur sans corpus publiable
soit nommé « estimation éditoriale » et expose ses hypothèses.

### É6 — La chronologie du troisième incident sort du calendrier posé

Le §07 pose le pilote du 7 septembre au 18 octobre 2026, soit six semaines,
avec vente par contrat et facture manuels. Le troisième incident écrit ensuite
qu'« Accordia ouvre l'achat par carte **au troisième mois** » et que « trois
abonnements ouverts **quatre mois** sans paiement font 2 880 € HT ». Le
troisième mois et les quatre mois suivants tombent après la fin du pilote, et
aucune phrase de l'article ne dit que le pilote s'est prolongé en produit
vendu. L'arithmétique est juste (3 × 240 × 4 = 2 880) ; c'est l'ancrage
temporel qui manque. L'avertissement de portée couvre les durées « choisies
pour l'exemple », mais il ne comble pas l'absence de transition narrative.

### É7 — Le localisateur d'ASVS ne porte ni le mot « stable » ni l'année

L'article écrit « OWASP ASVS · version stable 5.0.0 […] publié comme version
stable le 30 mai 2025 » et pointe la page
`https://github.com/OWASP/ASVS/releases/tag/v5.0.0_release`. Ouverte le
30 août 2026, cette page affiche « 30 May 09:35 » sans l'année et présente la
version comme « the initial release of the 5.x version of ASVS », sans le mot
« stable ». Le fait est vrai, mais son support est ailleurs : la page projet
`https://owasp.org/www-project-application-security-verification-standard/`
écrit « [30 May 2025] ASVS Version 5.0.0 is released LIVE at Global AppSec EU
Barcelona 2025! » et « Get the latest **stable** version of the ASVS (5.0.0)
from the Downloads page ». Le localisateur publié ne soutient donc pas
littéralement l'affirmation publiée.

### É8 — Deux sources listées ne soutiennent aucune phrase visible

Sur les douze entrées de `legalSources`, deux ne sont reliées à aucune
affirmation du corps ni de la FAQ :

- **CNIL, Guide RGPD du développeur** — le corps cite le *Guide de la
  sécurité* (FAQ 02-01), jamais celui du développeur ;
- **OWASP, Logging Cheat Sheet** — le §04 parle de journal (« le journal la
  garde ») sans rattacher cette exigence à OWASP.

Ce ne sont pas des erreurs de fait, mais la charte §4.1 écrit qu'« une
bibliographie générale en fin de page ne suffit pas » : une source listée sans
phrase qui s'y adosse ajoute du volume de preuve apparent sans preuve.

### Ce qui a été vérifié et s'est révélé exact

Pour éviter qu'un lecteur pressé lise la liste ci-dessus comme un verdict
global : **tous les calculs publiés par l'article ont été refaits à la main et
tombent juste** (section H), **les douze sources externes ont été rouvertes ce
jour et disent ce que l'article leur fait dire** (section D), et **les huit
montants repris de la grille tarifaire sont sur la page publique aujourd'hui**
(section E).

---

## A. Identité, lecteur et décision

| Champ | Valeur |
| --- | --- |
| Requête principale | « MVP SaaS : quoi inclure » |
| Titre du registre | MVP SaaS : quoi inclure avant un premier client ? |
| H1 servi | MVP SaaS : quoi inclure avant le premier test ? |
| Section | SaaS et MVP |
| `editorialStatus` | `published` |
| `datePublished` | `2026-07-20T15:19:41+02:00` |
| `dateModified` | `2026-08-28T18:00:00+02:00` |
| `readTimeMin` | 20 |
| Mots visibles du corps, formulaire exclu | **4 096** (mesure du 30/08/2026, voir §J) |
| Illustrations | 3 (`contrat-test-mvp-16x9.webp`, `charge-manuelle-mvp-4x3.webp`, `decision-mvp-1x1.webp`), toutes présentes dans `public/guides/mvp-saas-quoi-inclure/` avec leur source SVG |
| Auteur affiché | `TEAM.quentin`, profil `/equipe#fondateur` |
| Dispositif commercial | `hero`, `sidebar`, `mobile`, `faq` (rendus par le layout partagé) + **un seul** encart en ligne `article_end_inline` au §10 ; pas de `strategyCta` |

**Lecteur de référence.** Une fondatrice ou un dirigeant qui a déjà un devis
sur la table — quatorze écrans, trois lots — et qui doit décider ce qui part
dans le premier. Il connaît son métier, pas le vocabulaire d'une DSI.

**Décision principale, en une phrase.** Quelles fonctions doivent entrer dans
le premier lot parce qu'un vrai client en dépend, lesquelles peuvent rester
tenues à la main, et quel est le coût humain de ce choix pendant la durée du
test.

**Ce que l'article promet explicitement (hero + §01).**

1. un MVP se mesure en écrans et en responsabilités, pas en fonctions ;
2. la grille publiée tarife 3 à 5 écrans et 10 à 15 écrans, rien entre ;
3. sept responsabilités à attribuer, avec un test d'acceptation chacune ;
4. six ajouts fréquents à interroger, avec ce qu'ils pèsent ;
5. un calcul de charge humaine reproductible ;
6. un calculateur local qui ne transmet rien et ne produit aucun score.

**Hors périmètre annoncé** (bloc `disclaimer`) : la conformité, la sécurité,
l'accessibilité et la viabilité commerciale d'un produit. Le guide ne fixe ni
prix ferme, ni périmètre, ni délai — « seul un devis signé fixe un prix ».

---

## B. Plan servi et fonction de chaque section

Dix sections, dix ancres. Les neuf premières ancres (`minimum`, `format`,
`parcours`, `familles`, `manuel`, `exemple`, `outil`, `alternatives`,
`decision`) sont celles de la version précédente et sont conservées, comme
l'exige la charte §15 ; `trop-inclus` est la seule ajoutée.

| # | Ancre | Titre servi | Fonction | Compteur |
| --- | --- | --- | --- | --- |
| 01 | `minimum` | Ce que votre premier client rend obligatoire | Réponse directe + fil rouge Accordia | 2 min |
| 02 | `format` | Prototype, pilote ou premier client : que pourrez-vous conclure ? | Frontière du test et conclusion autorisée | 2 min |
| 03 | `parcours` | Une journée du client montre ce que la liste d'écrans oublie | Méthode en six étapes + seuil de preuve | 1 min |
| 04 | `familles` | Sept responsabilités, et le propriétaire de chacune | Le tableau des sept familles + cinq traitements | 3 min |
| 05 | `trop-inclus` | Qu'est-ce qu'on ajoute à tort dans le premier lot ? | Six ajouts, leur poids, l'angle prix | 3 min |
| 06 | `manuel` | Combien de temps humain votre MVP coûte-t-il chaque semaine ? | La formule de charge et son application | 2 min |
| 07 | `exemple` | Ce qui rate quand on coupe la mauvaise chose | Trois incidents chiffrés | 3 min |
| 08 | `outil` | Remplir le contrat sur votre propre dossier | Le calculateur local | 1 min |
| 09 | `alternatives` | Faut-il vraiment écrire du code pour apprendre ça ? | Quatre chemins moins chers que le code | 1 min |
| 10 | `decision` | Qui tranche, et sur quelle preuve ? | Revue humaine, coût d'exploitation, sortie | 2 min |

Somme des compteurs : 2+2+1+3+3+2+3+1+1+2 = **20**, égale au `readTimeMin` du
registre. Le test l. 362 vérifie à la fois cette somme et le fait que chaque
compteur soit l'arrondi de sa propre section.

**FAQ.** Neuf questions en trois catégories (`perimetre`, `obligations`,
`apres`). Aucun JSON-LD `FAQPage` — Google a retiré ce résultat enrichi ; le
test l. 309 refuse le schéma.

**Maillage sortant vérifié le 30/08/2026** (tous `200` en production) :
`/tarifs`, `/guides/signes-besoin-logiciel-metier`,
`/guides/power-apps-ou-application-sur-mesure`,
`/guides/plan-recette-application-metier`,
`/guides/securite-application-metier`, `/guides/cahier-des-charges-saas`,
`/services/saas-applications-metier`, `/demarrer-un-projet`, `/equipe`.

**Frontières de cannibalisation tenues.** Le cahier des charges complet est
renvoyé à `/guides/cahier-des-charges-saas` (FAQ 03-03 le dit explicitement :
« il ne contient ni critères de recette détaillés, ni contraintes techniques,
ni conditions contractuelles ») ; les critères de réception à
`/guides/plan-recette-application-metier` ; l'arbitrage plateforme contre
sur-mesure à `/guides/power-apps-ou-application-sur-mesure` ; le diagnostic
amont à `/guides/signes-besoin-logiciel-metier`. Aucun lien ne pointe vers
l'article lui-même (test l. 1300).

---

## C. Nature des énoncés — la règle appliquée dans ce dossier

| Étiquette | Définition | Ce que le lecteur peut en faire |
| --- | --- | --- |
| **FAIT** | Énoncé soutenu par un document extérieur ou par un fichier du dépôt, avec URL ou chemin, page ou ligne, et date de relevé. | Le rouvrir et le lire. |
| **HYPOTHÈSE** | Valeur choisie pour le cas construit Accordia ou convention éditoriale du guide. Aucune source. Posée à découvert. | La remplacer par la sienne. |
| **CALCUL** | Résultat dérivé d'un FAIT et/ou d'une HYPOTHÈSE, dont les étapes sont écrites. | Le refaire. |

Toute cellule de la section F porte l'une de ces trois étiquettes, et une
seule.

---

## D. Sources externes — chacune rouverte le 30 août 2026

Douze sources sont listées par `legalSources` dans `page.tsx` (l. 341-422).
**Les douze ont été rouvertes le 30 août 2026** et le contenu qui soutient
l'affirmation a été lu, pas seulement le titre de la page.

Réserve de méthode, écrite noir sur blanc : `leanstartup.co` refuse une
requête HTTP directe (`403` avec un `User-Agent` de navigateur, testé ce
jour) ; son contenu a bien été récupéré et lu ce jour par l'outil de
récupération de page. Un audit de statut de lien par `curl` verra donc un 403
sur cette seule entrée : c'est une protection anti-robot, pas un lien mort. À
confirmer dans un vrai navigateur lors du prochain contrôle.

### S01 — Eric Ries / Lean Startup Co., « What is an MVP? »

- **URL** : https://leanstartup.co/resources/articles/what-is-an-mvp/
- **Relevé le** : 30 août 2026. **Date de publication** : aucune date de
  publication ou de mise à jour visible sur la page ; elle indique seulement
  que le texte « originally appeared at Startup Lessons Learned ».
- **Ce qui soutient l'article, verbatim** : « The minimum viable product is
  that version of a new product which allows a team to collect the maximum
  amount of validated learning about customers with the least effort. »
- **Ce que la source ne donne pas** : aucune liste de fonctions, aucun nombre
  d'écrans, aucune durée. La page insiste au contraire sur le fait que le
  périmètre dépend du jugement et de l'apprentissage visé (elle cite un MVP
  développé en six mois et une fonction en deux semaines jugée déjà trop
  longue rétrospectivement).
- **Usage dans l'article** : entrée de sources uniquement ; aucune phrase du
  corps ne s'y adosse directement. C'est cohérent avec la thèse du §01 (« la
  question est mal posée : le minimum ne se compte pas en fonctions »).
- **Fraîcheur** : page sans version. À rouvrir à chaque révision substantielle.

### S02 — GOV.UK Service Manual, « How the alpha phase works »

- **URL** : https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works
- **Relevé le** : 30 août 2026. **Last updated** : **8 mai 2019** (affiché sur
  la page).
- **Ce qui soutient l'article** : phrase-clé « Focus on testing your riskiest
  assumptions ». La page précise que les prototypes d'alpha n'ont pas besoin
  d'être de qualité production et seront probablement jetés.
- **Usage** : §02, « le manuel de service britannique sépare […] l'alpha, où
  l'on teste les hypothèses risquées sur des prototypes ».
- **Limite reprise par l'article** : « C'est un cadre de service public, pas
  une norme pour un logiciel privé ; la découpe, elle, se transpose. »
- **Fraîcheur** : page datée. Revérifier si la date de mise à jour change.

### S03 — GOV.UK Service Manual, « How the beta phase works »

- **URL** : https://www.gov.uk/service-manual/agile-delivery/how-the-beta-phase-works
- **Relevé le** : 30 août 2026. **Last updated** : **19 février 2021**.
- **Verbatim utiles** : « You'll start in private beta by inviting a limited
  number of people to use your service. » — « you'll need to show how your
  service fits into the wider user journey and supports users from start to
  finish. » — « support staff can cope with new users who might struggle to use
  the service, including in ways you have not foreseen ».
- **Usage** : §02, « la bêta privée, où de vrais utilisateurs entrent avec un
  support rapproché ».
- **Limite reprise par l'article** : « Les phases et durées d'un service public
  britannique ne sont pas reprises comme délais de marché. »

### S04 — GOV.UK Service Manual, « How the live phase works »

- **URL** : https://www.gov.uk/service-manual/agile-delivery/how-the-live-phase-works
- **Relevé le** : 30 août 2026. **Last updated** : **8 mai 2019**.
- **Ce qui soutient l'article** : la phase live suppose de maintenir
  « uptime and availability », de « monitor the status of the service »,
  d'avoir « appropriate metrics in place to measure the success of the
  service », de « secur[e] the service's information » avec des tests de
  vulnérabilité et d'intrusion réguliers, de tenir les « accessibility
  requirements », et de retirer le service « if you find out users do not need
  it anymore ». La page précise aussi que cela « does not necessarily mean
  having an agile team on the service 100% of the time ».
- **Usage** : §02, « la phase live, qui suppose des responsables, une
  disponibilité et une mesure ». C'est la source qui borne le raisonnement du
  §04 : devant un premier client en production, une responsabilité ne se
  reporte pas.
- **Limite reprise par l'article** : « Cette source borne une responsabilité
  d'exploitation, elle n'impose aucune fonction. »

### S05 — RGPD, texte consolidé, articles 5, 25 et 32

- **URL** : https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:02016R0679-20160504
- **Relevé le** : 30 août 2026. **Consolidation** : 04/05/2016 (indiquée par la
  page et par le CELEX lui-même).
- **Intitulés vérifiés en français** :
  - article 5 — « Principes relatifs au traitement des données à caractère
    personnel » ;
  - article 25 — « Protection des données dès la conception et protection des
    données par défaut » ;
  - article 32 — « Sécurité du traitement ».
- **Usage** : §02 (« dès qu'une donnée personnelle réelle est traitée, ses
  articles 5, 25 et 32 s'appliquent — minimisation, protection dès la
  conception, sécurité proportionnée au risque »), §05 (« la sécurité
  proportionnée au risque exigée par l'article 32 »), FAQ 02-01.
- **Ce que la source ne tranche pas** : ni la base légale, ni les rôles
  responsable/sous-traitant, ni la durée de conservation, ni les mesures
  concrètes d'un cas inconnu. L'article le dit dans sa note de source.
- **Confiance** : élevée, texte primaire.

### S06 — CNIL, « Guide RGPD du développeur »

- **URL** : https://www.cnil.fr/fr/guide-rgpd-du-developpeur
- **Relevé le** : 30 août 2026. **Date** : page vivante ; aucune date de mise à
  jour unique affichée. Une page liée annonçant une nouvelle version porte la
  date du 13 décembre 2021. Le guide invite explicitement à contribuer via
  GitHub (« Si vous avez un compte GitHub, vous pouvez participer au guide RGPD
  du développeur »).
- **Contenu** : identification des données personnelles, protection dès la
  conception, sécurisation des environnements et du code source, minimisation,
  gestion des utilisateurs, qualité du code, tests, information des personnes,
  durées de conservation.
- **Usage dans l'article** : **aucun** — voir É8. Entrée de bibliographie.
- **Confiance** : élevée sur le contenu, mais sans date d'édition stable.

### S07 — CNIL, « Guide de la sécurité des données personnelles — édition 2024 »

- **URL** : https://www.cnil.fr/fr/guide-de-la-securite-des-donnees-personnelles-nouvelle-edition-2024
- **Relevé le** : 30 août 2026. **Publication de la page** : **26 mars 2024**,
  conforme à ce que l'article écrit dans sa note de source.
- **Contenu vérifié** : 25 fiches réparties en 5 sections, avec des sujets
  ajoutés dans cette édition (informatique en nuage, applications mobiles,
  intelligence artificielle, API). PDF téléchargeable (≈ 1 Mo).
- **Usage** : FAQ 02-01, « Le guide de la sécurité de la CNIL, édition 2024,
  fournit les fiches pratiques ; il ne remplace pas l'analyse de votre
  traitement réel. »
- **Fraîcheur** : édition datée. Revérifier à la parution d'une édition
  suivante.

### S08 — ANSSI, « Sauvegarde des systèmes d'information — Les fondamentaux »

- **URL** : https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf
- **Relevé le** : 30 août 2026, **PDF téléchargé et lu page par page**.
- **Référence exacte** : ANSSI-BP-100. Page de couverture : « ANSSI-BP-100 —
  27/11/2025 ». Table des évolutions (page 1) : version **1.0** du
  **18/10/2023** (version initiale), version **1.1** du **27/11/2025**
  (révision mineure).
- **Localisateur de l'affirmation** : **section 3.2 « Opérations », page 6,
  recommandation R22** :
  > « Les sauvegardes doivent être testées régulièrement. Une procédure de
  > restauration du SI doit être rédigée et régulièrement mise en œuvre. »
- **Recommandations voisines utiles** : R21 (contrôle systématique des
  sauvegardes avec une liste de vérifications), R23 (stratégie et ordre de
  restauration tenant compte de la durée de restauration).
- **Réserve de portée, verbatim page 1** : « Sauf disposition réglementaire
  contraire, les recommandations n'ont pas de caractère normatif ; elles sont
  livrées en l'état et adaptées aux menaces au jour de leur publication. »
  C'est cette phrase qui fonde l'écart É3.
- **Usage** : §04 et FAQ 02-02 (« une copie jamais restaurée ne prouve rien »).
- **Note pour le prochain agent** : le dossier précédent déclarait, en I.8,
  que le contre-audit n'avait pas pu rouvrir ce PDF et que la date restait à
  revérifier. **C'est fait : la date 27/11/2025 et la version 1.1 sont
  confirmées, et la recommandation porte désormais un numéro (R22) et une
  page (6).** Ce point est clos.

### S09 — OWASP, Application Security Verification Standard 5.0.0

- **URL citée par l'article** : https://github.com/OWASP/ASVS/releases/tag/v5.0.0_release
- **URL qui soutient réellement l'affirmation** : https://owasp.org/www-project-application-security-verification-standard/
- **Relevé le** : 30 août 2026 (les deux).
- **Ce que la page GitHub affiche** : le nom « OWASP Application Security
  Verification Standard 5.0.0 », le tag `v5.0.0_release`, la mention
  « the initial release of the 5.x version of ASVS », et la date « 30 May
  09:35 » **sans année visible** ni mention « stable ».
- **Ce que la page projet affiche** : « [30 May 2025] ASVS Version 5.0.0 is
  released LIVE at Global AppSec EU Barcelona 2025! » et « Get the latest
  stable version of the ASVS (5.0.0) from the Downloads page ».
- **Usage** : §04, « le catalogue OWASP ASVS, version stable 5.0.0 publiée le
  30 mai 2025, permet de choisir un sous-ensemble proportionné ».
- **Écart de localisateur** : voir É7.
- **Limite reprise par l'article** : « Le niveau et le sous-ensemble pertinents
  dépendent du risque du produit. »

### S10 — OWASP, Logging Cheat Sheet

- **URL** : https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html
- **Relevé le** : 30 août 2026. **Date/version** : aucune version ni date de
  mise à jour affichée sur la page.
- **Verbatim utiles** : « Where possible, always log: Input validation failures
  e.g. protocol violations, unacceptable encodings, invalid parameter names and
  values » ; « Test the effect on the application of logging failures such as
  simulated database connectivity loss, lack of file system space, missing
  write permissions to the file system, and runtime errors in the logging
  module itself » ; « Never log data unless it is legally sanctioned »
  (exclusions nommées : identifiants de session, jetons d'accès, mots de passe,
  chaînes de connexion, clés de chiffrement, données de carte bancaire).
- **Usage dans l'article** : **aucun** — voir É8.

### S11 — W3C, WCAG 2.2

- **URL** : https://www.w3.org/TR/WCAG22/
- **Relevé le** : 30 août 2026. **Statut et date, verbatim** : « W3C
  Recommendation 12 December 2024 ». Version de référence :
  `https://www.w3.org/TR/2024/REC-WCAG22-20241212/`.
- **Usage** : §04, « les critères WCAG 2.2, recommandation du 12 décembre 2024,
  se testent écran par écran et ne s'ajoutent pas après coup sans refaire les
  gabarits ».
- **Limite reprise par l'article** : « La conformité à WCAG ne suffit pas seule
  à conclure sur toutes les obligations applicables. »
- **Réserve à connaître** : WCAG est une recommandation technique, pas une
  obligation. En France, l'obligation d'accessibilité numérique dépend du
  statut de l'entité et du chiffre d'affaires, et passe par le RGAA. Le guide
  ne l'aborde pas — c'est cohérent avec son hors-périmètre annoncé, mais cela
  renforce É3.

### S12 — Stripe, « Utilisation des webhooks avec les abonnements »

- **URL** : https://docs.stripe.com/billing/subscriptions/webhooks
- **Relevé le** : 30 août 2026. **Date/version** : documentation vivante, sans
  numéro de version ni date affichée.
- **Ce qui soutient l'article** :
  - le tableau « Événements d'abonnement » liste `invoice.payment_failed` :
    « Le paiement d'une facture a échoué. […] Prévenez votre client. […]
    Mettez à jour le moyen de paiement par défaut de l'abonnement. » ;
  - la section « Capturer les changements d'état des abonnements » écrit :
    « Lorsqu'un abonnement bascule à l'état `past_due`, prévenez votre client
    directement » et **« Lorsqu'un abonnement passe à l'état `canceled` ou
    `unpaid`, révoquez l'accès à votre produit. »** ;
  - le tableau d'états documente `unpaid` : « Révoquez l'accès à votre produit
    lorsque l'abonnement passe à l'état `unpaid` » ;
  - l'introduction écrit : « vous pouvez envoyer un e-mail à votre client en
    cas d'échec de paiement ou révoquer son accès s'il annule son
    abonnement ».
- **Usage** : encadré bleu du §04 (« la documentation Stripe sur les webhooks
  d'abonnement liste les événements à traiter, à commencer par l'échec de
  paiement d'une facture et les changements d'état qui ouvrent ou referment un
  accès ») et incident 3 du §07.
- **Limite reprise par l'article** : « Cette logique est propre au fournisseur
  et au modèle retenu. »
- **Fraîcheur** : documentation vivante — c'est la source la plus volatile du
  lot. À rouvrir à chaque révision.

---

## E. Prix maison — la grille `/tarifs`, relevée le 30 août 2026

L'article date son relevé du **28 août 2026** (§01, bloc `disclaimer`, note de
transparence du §10, note de source). **Ce dossier a rouvert la grille le
30 août 2026, dans le dépôt et sur la page publique : les huit montants cités
sont inchangés.** La date de relevé publiée reste donc exacte.

Deux localisateurs pour chaque montant : la source du dépôt
(`src/components/tarifs/body.ts`) et le HTML servi par
`https://hagnere-code.ai/tarifs` (téléchargé et compté ce jour).

| Montant cité par l'article | Où il vit dans `body.ts` | Périmètre écrit par la grille | Présent sur la page servie le 30/08/2026 |
| --- | --- | --- | --- |
| 15 000 € HT | l. 623 (tableau par service) | « Essentiel — MVP 3–5 écrans » | oui (2 occurrences) |
| 30 000 à 60 000 € HT | l. 624 | « Standard — 10–15 écrans + IA » | oui (2) |
| 6 900 € HT | l. 554-555 et l. 605 | « Le ticket d'entrée publié est de **6,9 k€ HT** (site vitrine) » | oui |
| Levée d'ambiguïté 6,9 / 15 k€ | l. 558 | « un MVP SaaS “Essentiel” démarre par exemple à 15 k€ HT, pas à 6,9 k€ HT » | oui (2) |
| Périmètre ajouté par le Standard | l. 523-526 | « 10–15 écrans + back-office riche », « Workflows métier complexes », « Intégrations tierces (Stripe, Pennylane…) », « Agents IA selon besoin » | oui (2 chacun) |
| 1 500 € HT / 2 jours | l. 214, 259, 388 | « 2 jours, 1 500 € HT » | oui (2) |
| Déduction du Discovery | l. 214 | « Si la phase suivante est lancée avec nous, le devis précise la déduction applicable » | oui (8) |
| 8 000 € HT | l. 447-448 et l. 1163 | « Au-delà de **8 k€ HT** de projet, un cadrage payé est systématique » | oui (2) |
| ≈ 2 500 € HT / mois | l. 905 | « Repère indicatif : **≈ 2 500 € HT / mois** sur un scénario-type publié sur la page maintenance. Le forfait est fixé au devis. » | oui (2) |

Commande de reproduction :

```bash
curl -s -L https://hagnere-code.ai/tarifs -o /tmp/tarifs.html
python3 - <<'EOF'
import html
s = open('/tmp/tarifs.html', encoding='utf-8').read()
s = s.replace('\\u003c','<').replace('\\u003e','>').replace('\\"','"')
s = html.unescape(s).replace('\u00a0', ' ')  # insecables -> espaces
for p in ["Essentiel — MVP 3–5 écrans", "Standard — 10–15 écrans + IA",
          "≈ 2 500 € HT / mois", "démarre par exemple à 15 k€ HT, pas à 6,9 k€ HT",
          "le devis précise la déduction applicable", "Au-delà de 8 k€ HT"]:
    print(s.count(p), p)
EOF
```

### Trois points de vigilance sur cette source

1. **Le « Care » est bien le forfait le plus léger.** La grille publie trois
   niveaux (`Care`, `Care+`, `Care Pro`, l. 898-941), tous « Sur devis », et le
   repère de 2 500 € HT est attaché au premier, décrit comme « L'essentiel pour
   dormir tranquille. Idéal après un site vitrine ou un MVP léger ». La
   formulation de l'article — « le scénario de maintenance le plus léger » — est
   exacte.
2. **La grille se contredit elle-même sur la déduction du Discovery.** Le bloc
   l. 214 écrit « le devis précise la déduction applicable » ; le tableau
   comparatif l. 1051 écrit « **Déduit si phase 2** · conditions au devis ».
   Les deux formulations sont servies aujourd'hui. Le guide reprend la
   première, la plus prudente, et un test le verrouille (l. 1091). Ce n'est pas
   un défaut du guide, mais un risque : un prospect qui lit `/tarifs` verra la
   formulation forte. **Arbitrage à porter sur la page tarifs, pas ici.**
3. **Le dépôt est en avance sur la production.** `body.ts` l. 559 ajoute « et un
   SaaS “Standard” de 10 à 15 écrans démarre à 30 k€ HT : la borne de 25 k€ HT
   est celle d'un outil interne », phrase absente du HTML servi ce jour. Elle ne
   change aucun montant cité par le guide, mais elle explique la carte de palier
   à 25–60 k€ (l. 518) que le guide n'utilise pas : le guide cite la bande du
   tableau par service (30–60 k€), pas celle de la carte.

---

## F. Registre des affirmations de l'article

Chaque ligne porte une nature et un localisateur. « Où » renvoie à la section
de l'article.

### F1. Faits sourcés

| ID | Affirmation servie | Où | Localisateur | Confiance |
| --- | --- | --- | --- | --- |
| A01 | Un MVP de 3 à 5 écrans est affiché 15 000 € HT sur notre grille | §01, §05, FAQ 01-01 | `body.ts` l. 623 ; `/tarifs`, tableau par service | élevée |
| A02 | Un produit de 10 à 15 écrans avec back-office riche, workflows complexes et intégrations tierces est affiché 30 000 à 60 000 € HT | §01, §05, §10, FAQ 01-01, 03-01 | `body.ts` l. 624 et l. 523-526 | élevée |
| A03 | Entre 6 et 9 écrans, la grille n'affiche aucun montant | hero, §01, §05, FAQ 01-01 | absence vérifiée dans `body.ts` l. 605-627 et sur `/tarifs` | élevée (constat d'absence, reproductible) |
| A04 | Le ticket d'entrée de 6 900 € HT est celui du site vitrine, pas d'un MVP | §05, note de source | `body.ts` l. 554-555, l. 558, l. 605 | élevée |
| A05 | Le Discovery Sprint vaut 1 500 € HT sur deux jours ; le devis précise la déduction applicable si la phase suivante est lancée avec nous | §09, note de source | `body.ts` l. 214 | élevée |
| A06 | Au-delà de 8 000 € HT de projet, le cadrage payé est systématique | §09, note de source | `body.ts` l. 447-448, l. 1163 | élevée |
| A07 | La grille publie un repère indicatif d'environ 2 500 € HT par mois pour le scénario de maintenance le plus léger | §10, FAQ 03-01, note de source | `body.ts` l. 905 ; contexte l. 898-941 | élevée |
| A08 | Un MVP est la version qui permet le maximum d'apprentissage validé avec le moins d'effort | note de source | S01, définition verbatim | élevée |
| A09 | En alpha, on teste les hypothèses les plus risquées sur des prototypes | §02 | S02, « Focus on testing your riskiest assumptions », page datée du 8 mai 2019 | élevée |
| A10 | En bêta privée, de vrais utilisateurs entrent en nombre limité, avec un support | §02 | S03, page datée du 19 février 2021 | élevée |
| A11 | La phase live suppose des responsables, une disponibilité et une mesure | §02, §04 | S04, page datée du 8 mai 2019 | élevée |
| A12 | Dès qu'une donnée personnelle réelle est traitée, les articles 5, 25 et 32 du RGPD s'appliquent : minimisation, protection dès la conception, sécurité proportionnée au risque | §02, §05, FAQ 02-01 | S05, intitulés vérifiés | élevée |
| A13 | L'ANSSI recommande des tests réguliers de sauvegarde et une procédure de restauration écrite | §04, FAQ 02-02 | S08, **R22, §3.2, page 6**, ANSSI-BP-100 v1.1 du 27/11/2025 | élevée |
| A14 | OWASP ASVS 5.0.0 est la version stable, publiée le 30 mai 2025 | §04, note de source | S09 — fait exact, **localisateur publié insuffisant**, voir É7 | moyenne (fait établi, lien à corriger) |
| A15 | WCAG 2.2 est une Recommandation W3C du 12 décembre 2024 | §04, note de source | S11, en-tête de la Recommandation | élevée |
| A16 | La documentation Stripe liste les événements d'abonnement à traiter, dont l'échec de paiement d'une facture et les changements d'état qui ouvrent ou referment un accès | §04, note de source | S12, tableau « Événements d'abonnement » et section « Capturer les changements d'état » | élevée |
| A17 | Le guide de la sécurité de la CNIL, édition 2024, fournit des fiches pratiques | FAQ 02-01, note de source | S07, page publiée le 26 mars 2024, 25 fiches | élevée |
| A18 | Le calculateur ne transmet rien, ne stocke rien et ne télécharge rien | §08, hero (`Calcul local · aucun envoi`) | `mvp-contract-engine.ts` et `mvp-contract-tool.tsx` : aucune occurrence de `fetch(`, `XMLHttpRequest`, `WebSocket`, `localStorage`, `sessionStorage`, `document.cookie`, `sendBeacon` ; test l. 1403 | élevée |
| A19 | Le calculateur ne produit aucun score | hero (`Score global : Aucun`), §08, §10, FAQ 03-02 | `mvp-contract-tool.tsx` l. 453 « L'outil n'attribue aucun score » ; le type `MvpContractAssessment` ne porte aucun champ de score | élevée |
| A20 | Le calculateur refuse de conclure tant qu'une opération n'est pas bornée, garde les autres totaux visibles et les marque « partiel/inexploitable » | FAQ 02-03 | `mvp-contract-engine.ts` l. 1026-1046 (`manualLoadState`) et l. 654 ; `mvp-contract-tool.tsx` l. 835, 854 | élevée |
| A21 | Le premier blocage applicable fixe le verdict, dans cet ordre : décision inconnue, report critique, opération non bornée, capacité dépassée, format non productif | §07 | `mvp-contract-engine.ts` l. 1048-1073, cascade `if / else if` | élevée |
| A22 | « Candidat » signifie seulement que le contrat est assez renseigné pour une relecture humaine | §10, FAQ 03-02 | `mvp-contract-engine.ts` l. 198-211 (`statusCopy`) et champ `humanReviewRequired: true` | élevée |

### F2. Hypothèses et conventions — sans source, posées à découvert

| ID | Énoncé | Où | Étiqueté dans l'article ? |
| --- | --- | --- | --- |
| B01 | Les sept familles de responsabilités et leurs libellés | §04 | Construction propre au guide, non présentée comme une norme. Le §04 dit « Elles ne décrivent aucun module logiciel : ce sont des responsabilités ». |
| B02 | Les cinq traitements possibles (construire, opérer manuellement, intégrer, reporter, à vérifier) | §04 | Construction propre au guide |
| B03 | Un écran d'administration complet pèse 2 à 3 écrans ; une matrice de rôles 1 ; un tableau de bord 1 à 2 | §05, FAQ 01-03 | **Oui** — « estimation éditoriale Hagnéré Code, à confronter à votre devis, pas un tarif » |
| B04 | Un pilote accompagné compte 2 à 5 clients réels | §02 | **Non** — voir É5 |
| B05 | Le devis d'ouverture porte quatorze écrans et trois lots | §01 | Scène d'ouverture, non chiffrante |
| B06 | Le seuil de bascule du back-office : « plus d'une heure par semaine à corriger des données à la main » | FAQ 01-03 | Non étiqueté, mais formulé comme un déclencheur à écrire soi-même |
| B07 | 350 € le jour chargé, sur sept heures, soit 50 € l'heure | §06 | **Oui**, explicitement — « écrite ici pour que vous puissiez la contester » |

### F3. Ce que l'article refuse de dire, et qui compte

- **Aucun nombre de fonctions.** FAQ 01-01 : « Aucun nombre ne tient. »
- **Aucun délai de développement.** Le guide renvoie l'arbitrage de calendrier
  ailleurs et ne promet aucune durée de projet.
- **Aucun résultat garanti.** Note de transparence du §10 : « Aucun prix, aucun
  délai et aucun résultat ne sont garantis par cette page : seul un devis signé
  engage. »
- **Aucun client cité.** Conformément à la règle d'or du dépôt, l'article ne
  nomme aucun client, aucun témoignage, aucune métrique d'exploitation. Accordia
  est étiqueté « exemple construit » avant sa première valeur chiffrée, et le
  test l. 763 vérifie que l'étiquette précède l'abonnement de 240 € HT.
- **Le conflit d'intérêts est déclaré.** §10 : « Hagnéré Code développe des
  applications SaaS sur mesure et perçoit des honoraires si vous retenez cette
  option — l'une de celles que ce guide arbitre. »

---

## G. Le cas construit « Accordia » — inventaire complet des hypothèses

L'article étiquette Accordia dès sa première apparition (§01) : « Exemple
construit : la période, le nombre d'entreprises, les durées manuelles,
l'abonnement et le coût du temps interne sont choisis pour l'exemple et ne
viennent d'aucune source. Seuls les montants de prestation viennent de notre
grille publiée, et ce n'est pas un dossier client. » L'étiquette est reprise au
§07 (« ce ne sont pas des dossiers clients ») et dans le bloc `disclaimer`.

**Vingt-deux hypothèses** composent ce cas. Aucune n'a de source ; toutes sont
paramétrables dans le calculateur du §08. Les valeurs numériques vivent dans
`mvp-contract-engine.ts`, fonction `createAccordiaExample()` (l. 374-472) et
ses quatre variantes.

| ID | Hypothèse | Valeur | Où elle vit |
| --- | --- | --- | --- |
| H01 | Nom et objet du produit | Accordia, logiciel de suivi d'accords fournisseurs | §01 |
| H02 | Équipe | une fondatrice et une opératrice | §01 |
| H03 | Liste de départ | huit envies : annuaire fournisseurs, demandes d'achat, dépôt de devis, circuit de décision, commentaires, signature électronique, paiement en ligne, tableaux de bord | §01 |
| H04 | Résultat vendu retenu | « un devis fournisseur reçoit une décision tracée, sans échange de fichier par courriel » | §01, `soldOutcome` l. 379-380 |
| H05 | Période du pilote | du 7 septembre au 18 octobre 2026 inclus | §01, §02, `testHorizon` l. 377-378 |
| H06 | Nombre d'entreprises pilotes | 3 | §01, `pilotClientCount: "3"` l. 384 |
| H07 | Abonnement | 240 € HT par mois et par entreprise | §01, §07 |
| H08 | Capacité manuelle déclarée sur la période | 300 minutes | §06, `manualCapacityMinutes: "300"` l. 385 |
| H09 | Format du test | pilote accompagné | `testFormat: "PILOTE_ACCOMPAGNE"` l. 376 |
| H10 | Mode de vente | contrat et facture manuels | `salesMode: "CONTRAT_FACTURE_MANUELS"` l. 383 |
| H11 | Opération « accès » | 12 min × 2 occurrences par client, limite : deux interventions planifiées par client | §06, l. 404-409 |
| H12 | Opération « import initial » | 20 min × 1 occurrence par client | §06, l. 418-423 |
| H13 | Opération « contrat et facture » | 15 min × 1 occurrence par client | §06, l. 432-437 |
| H14 | Opération « permanence d'aide » | 10 min × 2 occurrences par client | §06, l. 446-452 |
| H15 | Coût du temps interne | 350 € le jour chargé, 7 heures, soit 50 € l'heure | §06 |
| H16 | Seuil de preuve écrit avant le début | au moins 2 des 3 entreprises obtiennent une décision tracée sans courriel avant le 18 octobre | §03 |
| H17 | Rôles nommés | administratrice achats, responsable de site, opérateur du service, responsable produit, opératrice données, opératrice support, responsable technique, fondatrice | §01, §07, l. 388-470 |
| H18 | Traitements retenus par famille | construire (parcours de valeur, mesure et sortie) ; manuel (accès, données, vente, aide) ; intégrer (administration) | l. 388-470 |
| H19 | Incident 1 — déclencheur | au 24ᵉ jour, le 30 septembre, la deuxième entreprise demande à récupérer ses décisions | §07 |
| H20 | Incident 1 — volume et durée | 312 décisions, reprises une par une pendant deux jours ; restitution repoussée de deux jours | §07 |
| H21 | Incident 2 — durée mesurée | 35 minutes par intervention d'accès, motif : inscription sur liste blanche exigée par chaque service informatique client | §07 |
| H22 | Incident 3 — chronologie et volume | achat par carte ouvert « au troisième mois » ; trois cartes expirent ; trois abonnements ouverts quatre mois sans paiement | §07 — **ancrage temporel manquant, voir É6** |

### Ce que l'exemple n'est pas

Accordia n'est ni un client, ni un devis, ni un dossier. Aucune des sociétés
réelles du groupe — LMNP.AI, SCI-AI.app, Hagnéré Patrimoine, Hagnéré
Investissement, Comptabilité AI (SIREN 978548899) — n'est mentionnée dans
l'article, ni comme référence ni comme illustration. C'est le bon choix : ce
sont des entités du groupe, pas des clients indépendants.

### Cohérence interne de l'exemple, vérifiée

| Contrôle | Résultat |
| --- | --- |
| 7 septembre → 18 octobre 2026 inclus | 42 jours = **exactement 6 semaines**. Le 7 septembre 2026 est un lundi, le 18 octobre un dimanche. |
| « Au vingt-quatrième jour, le 30 septembre » | jour 1 = 7 septembre ; jour 24 = 7 + 23 = **30 septembre**. Exact. |
| « la restitution finale, prévue le 18 octobre, arrive deux jours plus tard » | 20 octobre. Cohérent. |
| Le seuil du §03 (« au moins deux des trois ») et le nombre d'entreprises du §01 | cohérents |
| L'abonnement de 240 € HT (§01) et l'incident 3 (§07) | même valeur |

---

## H. Les calculs de l'article, refaits à la main

Méthode : chaque total a été recalculé **sans réutiliser la formule de la
page**, puis comparé à ce que la page imprime et à ce que le moteur renvoie.
Le moteur travaille en `BigInt` à trois décimales (`mvp-contract-engine.ts`
l. 120-122, 942-944), donc sans erreur d'arrondi flottant.

### H1. La formule publiée au §06

```text
sur une même période nommée :
charge d'une opération = minutes par occurrence
                       × occurrences par client sur toute la période
                       × clients
charge manuelle totale = somme des opérations manuelles
capacité restante      = capacité totale disponible sur cette même période
                       − charge manuelle totale
```

### H2. Le décompte du pilote de base (3 entreprises)

| Famille | Opération | Calcul | Total |
| --- | --- | --- | --- |
| Comptes et accès | Créer ou reprendre les accès du pilote | 12 × 2 × 3 | 72 min |
| Données et continuité | Préparer et contrôler l'import initial | 20 × 1 × 3 | 60 min |
| Vente et droits associés | Contrôler le contrat et émettre la facture pilote | 15 × 1 × 3 | 45 min |
| Aide et incidents | Tenir une permanence d'aide planifiée | 10 × 2 × 3 | 60 min |
| **Charge totale** | | 72 + 60 + 45 + 60 | **237 min** |

- Capacité déclarée : **300 min** (H08).
- Reste : 300 − 237 = **63 min**.
- Le moteur renvoie `manualLoadMinutes = "237"`, `manualCapacityMinutes =
  "300"`, `remainingCapacityMinutes = "63"`. **Concordance.**

### H3. Ramené à la semaine

- 237 ÷ 6 semaines = **39,5 min/semaine** — l'article publie « 39,5 minutes ».
- 300 ÷ 6 = **50 min/semaine** — l'article publie « 50 minutes disponibles ».
- 39,5 < 60, donc « moins d'une heure par semaine ». **Exact.**

### H4. Conversion en heures et en euros (à partir de H15)

| Étape | Calcul | Résultat | Publié par l'article |
| --- | --- | --- | --- |
| Taux horaire | 350 € ÷ 7 h | 50 €/h | « 50 € l'heure sur sept heures » |
| 237 min en heures | 237 = 180 + 57 | 3 h 57 | « 3 heures et 57 minutes » |
| Valeur de la charge | (237 ÷ 60) × 50 = 3,95 × 50 | 197,5 € → **198 €** | « environ 198 € » |
| Valeur de la capacité | (300 ÷ 60) × 50 = 5 × 50 | 250 € | « la capacité complète de 300 minutes vaut 250 € » |

L'arrondi de 197,5 à 198 est signalé par le mot « environ ». **Correct.**

### H5. Charge par client, et seuil de bascule

Charge d'un seul client : 12×2 + 20×1 + 15×1 + 10×2 = 24 + 20 + 15 + 20 =
**79 min**.

| Clients | Charge | Capacité | Écart |
| --- | --- | --- | --- |
| 3 | 237 | 300 | reste 63 |
| **4** | **316** | 300 | **16 de trop — premier dépassement** |
| 5 | 395 | 300 | 95 de trop |
| 6 | 474 | 300 | 174 de trop |

L'article publie : « chaque client coûte 79 minutes, et 79 × 4 = 316 minutes
pour 300 disponibles », « À cinq clients […] dépassent la capacité de
95 minutes », « À six clients, le double du départ […] dépassent de
174 minutes ». **Les quatre lignes tombent juste.** Le moteur confirme :
`createAccordiaCapacityStress()` (5 clients) → 395 ;
`{...example, pilotClientCount: "6"}` → 474 et `remainingCapacityMinutes =
"-174"`.

### H6. Variante « continuité reportée » (incident 1)

`createAccordiaCriticalDeferred()` passe la famille « Données et continuité »
en `REPORTER` et vide son opération manuelle.

- Charge restante : 72 + 45 + 60 = **177 min** (soit 237 − 60).
- Statut renvoyé : `STOP_CRITICAL_CAPABILITY_DEFERRED` — parce que la famille
  reste déclarée `necessaryForTest: "OUI"` (`mvp-contract-engine.ts`
  l. 1002-1007).
- L'article publie : « la variante “continuité reportée” laisse 177 minutes
  parfaitement calculées, et maintient quand même l'arrêt ». **Exact, et c'est
  le point de démonstration : un total qui tient ne lève pas un blocage.**

### H7. Variante « durée inconnue » (incident 2)

`createAccordiaUnknownManualDuration()` met `minutesPerOccurrence` à `null`
sur la famille « Comptes et accès » et vide son responsable.

- Somme exploitable des trois autres opérations : 60 + 45 + 60 = **165 min**
  (soit 237 − 72).
- `manualLoadState = "PARTIAL_UNUSABLE"`, statut
  `STOP_MANUAL_OPERATION_UNBOUNDED`.
- Durée mesurée a posteriori (H21) : 35 × 2 × 3 = **210 min**.
- Charge réelle : 165 + 210 = **375 min** pour 300 disponibles.
- Dépassement : 375 − 300 = **75 min**, soit 75 ÷ 300 = **25 %** de la
  capacité.

L'article publie « 35 × 2 × 3 = 210 minutes », « 375 minutes pour 300
disponibles, soit 75 minutes de trop et un quart de la capacité envolé », et
« le calculateur avait refusé de conclure et affiché “partiel/inexploitable”
sur ces mêmes 165 minutes ». **Les cinq nombres tombent juste.**

Note de lecture : les 165 minutes sont bien la somme **des trois autres**
opérations dans cette variante, pas la charge de base amputée d'une valeur
supposée. C'était l'erreur de la version précédente (« au lieu des 12
supposées »), que le test l. 731 refuse désormais nommément.

### H8. Incident 1 — l'export reporté

| Étape | Calcul | Résultat |
| --- | --- | --- |
| Ressaisie | 2 jours × 350 € (H15) | **700 €** |
| Temps réellement passé | 2 jours × 7 h × 60 min | **840 min** |
| Comparaison au budget humain du pilote | 840 ÷ 300 | **2,8 fois** |
| Retard de restitution | 2 jours de travail → 2 jours de report | 18 → 20 octobre |

L'article publie « 2 × 350 = 700 € », « 840 minutes, soit 2 × 7 heures »,
« l'incident coûte 2,8 fois le budget humain de six semaines ». **Exact.**

Le volume de 312 décisions (H20) n'entre dans aucun calcul : il sert à rendre
la ressaisie plausible. Rapporté aux 840 minutes, cela ferait 2,7 min par
décision — l'article ne fait pas cette division et n'a pas à la faire.

### H9. Incident 3 — le paiement autonome sans procédure d'échec

3 abonnements × 240 € HT (H07) × 4 mois = **2 880 € HT**. L'article publie
« 2 880 € HT ». **Exact.** L'ancrage temporel, lui, manque : voir É6.

### H10. L'addition des écrans, §05

Trois des six lignes du tableau sont exprimées en écrans :

| Ligne | Poids publié |
| --- | --- |
| Un écran d'administration complet | 2 à 3 écrans |
| Une matrice de rôles et de permissions | 1 écran |
| Un tableau de bord de statistiques | 1 à 2 écrans |

- Minimum : 2 + 1 + 1 = **4**
- Maximum : 3 + 1 + 2 = **6**

Les trois autres lignes (authentification unique d'entreprise, application
mobile, paiement en ligne) ne sont **pas** exprimées en écrans : les compter en
écrans reviendrait à inventer un chiffre. L'article le dit explicitement.

Sur un MVP de 3 à 5 écrans qui les absorberait toutes :

- 3 + 4 = **7**
- 5 + 6 = **11**

L'article publie « soit 4 au minimum et 6 au maximum » puis « en compte sept à
onze ». **Exact.** Le test l. 609 relit les bornes dans le rendu HTML au lieu
de les réécrire, ce qui l'empêche d'hériter d'une erreur de la page.

### H11. Le rapport prix par écran

| Division | Calcul | Résultat |
| --- | --- | --- |
| Borne basse du palier MVP | 15 000 ÷ 5 écrans | 3 000 €/écran |
| Borne haute du palier MVP | 15 000 ÷ 3 écrans | 5 000 €/écran |
| Borne basse du palier Standard | 30 000 ÷ 15 écrans | 2 000 €/écran |
| Borne haute du palier Standard | 60 000 ÷ 10 écrans | 6 000 €/écran |

L'article publie « 3 000 à 5 000 € HT par écran » et « 2 000 à 6 000 € HT par
écran », puis désamorce lui-même la lecture : « Ce n'est pas un prix
unitaire : le premier écran porte l'authentification, la base, le déploiement
et la mise en ligne, le douzième ne les porte plus. »

**Pourquoi la division part de 15 000 € et non de 6 900 €.** La carte de palier
« Essentiel » de `/tarifs` affiche 6,9–15 k€ HT, mais la même page range le
6,9 k€ sous « site vitrine » et écrit qu'« un MVP SaaS “Essentiel” démarre par
exemple à 15 k€ HT, pas à 6,9 k€ HT ». Diviser 6 900 € par un nombre d'écrans
appliquerait à un MVP un prix que la source réserve à autre chose. Les deux
phrases sont verrouillées par le test l. 1040-1044 : le jour où l'une disparaît
de `/tarifs`, la division perd son fondement et le guide échoue au test.

### H12. La marche entre les deux forfaits

30 000 − 15 000 = **15 000 € HT**. La soustraction est exacte ; sa lecture ne
l'est pas mécaniquement. Les deux forfaits ne couvrent pas le même produit — le
second ajoute back-office riche, workflows métier complexes, intégrations
tierces et fonctions d'IA — et la grille ne tarife rien entre 6 et 9 écrans.
L'article écrit donc : « Cet écart mesure une marche entre deux périmètres
différents, pas le prix de cinq écrans. » **C'est la correction centrale de la
passe du 28 août**, et cinq formulations de l'ancienne version sont refusées
nommément par le test l. 675-683.

### H13. Le coût d'exploitation de la première année

2 500 € HT × 12 mois = **30 000 € HT**. La grille écrit « ≈ 2 500 € HT / mois » :
le résultat est donc approché, et l'article conserve le mot — « font environ
30 000 € HT ». 30 000 € est la **borne basse** du forfait Standard (30 000 à
60 000), pas son équivalent : l'article écrit « soit la borne basse du forfait
de développement suivant », et le test l. 1160 refuse la formulation « autant
que le lot 2 » de la version précédente. **Exact et correctement borné.**

### H14. La FAQ 01-02 et la limite du contrat manuel

« Quinze minutes par contrat tiennent sur trois clients, pas sur trente. »
Vérification : 15 × 3 = 45 min (ce que le décompte du §06 porte effectivement
pour la famille « Vente ») ; 15 × 30 = 450 min > 300 min de capacité. **La
comparaison tient.**

---

## I. Ce que les tests verrouillent — et ce qu'ils ne voient pas

`content-quality.test.ts` compte **49 tests** ; les trois fichiers colocalisés
en comptent **91**. Ce que le contrat de contenu garantit, et qui dispense de
le revérifier à la main à chaque passe :

| Famille de contrôle | Ce qui est verrouillé |
| --- | --- |
| Registre et metadata | titre, H1 et `headline` identiques ; canonical absolu ; `datePublished` ≤ `dateModified` ≤ maintenant ; JSON-LD limité à `Article` + `BreadcrumbList` ; aucun `FAQPage`, `HowTo`, `Offer`, `Review`, `wordCount` |
| Calibre | 3 000 à 4 200 mots visibles ; `readTimeMin` = arrondi(mots ÷ 200) ; somme des dix compteurs de section = `readTimeMin` ; chaque compteur = arrondi de sa propre section |
| Typographie | aucun insécable littéral dans le code source ; insécable avant chaque ponctuation double, y compris dans les attributs `alt`/`title` de la page ; apostrophes courbes ; pas de nombre à quatre chiffres non séparé |
| Structure | les neuf ancres publiées conservées ; réponse directe de 120 à 200 mots ; 40 à 60 % de H2 en question ; au plus quatre tableaux, à légendes distinctes ; ≥ 10 valeurs chiffrées pour mille mots |
| Arithmétique | les totaux 237/300/63, 395, 474, 177, 165, 210, 375, 75, 79 × 4 = 316, 700 €, 840 min, 2,8, 2 880 €, 4/6, 7/11, 3 000–5 000, 2 000–6 000, 2 500 × 12 = 30 000 — chacun contre une **constante calculée à la main** et non contre la formule de la page |
| Prix maison | les huit chaînes de `body.ts` (dont « 6,9 k€ HT (site vitrine) » et « démarre par exemple à 15 k€ HT, pas à 6,9 k€ HT ») ; la formulation exacte de la déduction du Discovery |
| Sources | dates ANSSI, ASVS et WCAG présentes dans le §04 ; articles 5, 25 et 32 dans le §02 |
| Style | onze énoncés de fréquence interdits nommément ; onze connecteurs robotiques interdits ; le moule « n'est pas X, c'est Y » réduit à zéro occurrence |
| Commerce | un seul `TrackedGuideCtaLink` ; pas de `strategyCta` ; un seul bloc « Transparence. » ; aucun lien vers un guide non publié ni vers lui-même |
| Outil | aucun `fetch`, `XMLHttpRequest`, `WebSocket`, `localStorage`, `sessionStorage`, `document.cookie`, `sendBeacon` dans le moteur et l'outil ; pas d'attribut `download=` dans le rendu |
| Mobile | le tableau à quatre colonnes du §02 : quatre en-têtes, douze cellules, chacune portant son `data-label`, et la règle `.guide-table [data-label]::before` sous `@media (max-width: 767px)` dans `globals.css` |
| Actifs | les trois SVG et les trois WebP existent ; les WebP portent bien l'en-tête `RIFF…WEBP` ; le visuel de charge affiche les mêmes facteurs que le moteur |

**Angles morts du contrat de contenu — à traiter par une personne :**

1. le rendu réel dans un navigateur (le test prouve le mécanisme de mise en
   cartes, pas ce qu'un œil voit) ;
2. la portée de la phrase É2 (« une hypothèse, et une seule ») : le test
   vérifie sa présence, pas sa véracité ;
3. la qualification « obligation extérieure » de É3 ;
4. la description des bornes du calculateur de É4 ;
5. le chiffre « 2 à 5 clients réels » de É5, qu'aucun test n'interroge ;
6. la cohérence chronologique de l'incident 3 (É6) ;
7. l'écart entre le dépôt et la production (É1), qu'aucun test local ne peut
   voir par construction.

---

## J. Contrôles exécutés le 30 août 2026

| Contrôle | Commande | Résultat |
| --- | --- | --- |
| Tests colocalisés | `npx vitest run src/app/guides/mvp-saas-quoi-inclure` | **3 fichiers, 91 tests, tous verts** |
| Contrat de contenu seul | `npx vitest run src/app/guides/mvp-saas-quoi-inclure/content-quality.test.ts` | **49 tests verts** |
| Registre, corpus, attribution de prix | `npx vitest run src/lib/guides.test.ts src/app/guides/guides-corpus-contract.test.ts src/lib/guide-price-attribution.test.ts` | **3 fichiers, 28 tests verts** |
| Temps de lecture | serveur local `npm run dev`, puis `npm run measure:guide-readtime -- mvp-saas-quoi-inclure` | **4 096 mots, 20 min** — égal au `readTimeMin` du registre |
| Rendu local de la page | `curl -o /dev/null -w '%{http_code}' http://localhost:3000/guides/mvp-saas-quoi-inclure` | **200** |
| Liens internes en production | `curl -L -o /dev/null -w '%{http_code}'` sur les 9 destinations | **9 × 200** |
| Liens externes | idem sur les 12 URL de `legalSources` | **11 × 200**, `leanstartup.co` → **403** (anti-robot ; contenu bien lu ce jour par un autre moyen) |
| Grille tarifaire servie | téléchargement de `https://hagnere-code.ai/tarifs` et comptage des huit chaînes | **toutes présentes** |
| Version servie du guide | téléchargement de `https://hagnere-code.ai/guides/mvp-saas-quoi-inclure` | **version du 3 août — voir É1** |
| Actifs | `ls public/guides/mvp-saas-quoi-inclure/` | 3 SVG + 3 WebP présents |

**Non exécuté, et déclaré comme tel :** `npx tsc --noEmit`, `npx eslint`,
`npm test` complet et `NEXT_PUBLIC_ENV=production npm run build` n'ont pas été
lancés par cet agent — sept agents écrivaient en parallèle sur des fichiers
voisins, et un échec de ces commandes n'aurait pas été imputable à ce guide.
Ces quatre commandes restent dues avant livraison, par l'agent qui gèle le lot.

**Non exécuté également :** aucun contrôle visuel à 320, 390, 768, 1024 et
1440 px n'a été fait. La condition bloquante de la charte §13.4 — le tableau à
quatre colonnes du §02, dont la troisième porte la réponse — est traitée par
construction (les cellules passent en blocs pleine largeur sous 768 px et
réinjectent leur en-tête depuis `data-label`) et verrouillée par un test, mais
**pas observée**.

---

## K. Relecture humaine — absente

**Aucun lecteur humain extérieur n'a relu cet article.** Aucun test lecteur,
aucun panel, aucun dirigeant non technique n'a été sollicité, ni pour la
version publiée ni pour la passe du 28 août. Les revues qui ont eu lieu sont
des contre-audits menés par des agents : la charte §13 interdit de les
présenter comme l'avis d'une personne réelle.

En conséquence, et conformément au tableau de statuts de la charte §13 :

- **statut maximal atteignable aujourd'hui : « prêt pour revue humaine »** ;
- le statut « publiable » exige soit un test lecteur humain suivi de ses
  corrections, soit une instruction explicite du commanditaire déléguant la
  décision de publication ;
- le statut « publié » ne peut pas être déclaré pour la version décrite ici,
  puisque la production sert encore la version du 3 août (É1) ;
- le statut « indexé » n'a été vérifié dans aucune Search Console.

Les trois questions à poser au premier lecteur humain, tirées de la charte
§9.3 : « Où avez-vous commencé à survoler ? », « Quelle décision pouvez-vous
prendre maintenant ? », « Quel passage vous a donné confiance ou vous a paru
commercial ? »

---

## L. Fraîcheur : ce qui périme, et quand

| Élément | Événement qui impose une nouvelle vérification | Échéance conseillée |
| --- | --- | --- |
| Les huit montants de `/tarifs` | toute modification de `src/components/tarifs/body.ts` ; l'article annonce lui-même une revérification « tous les douze mois » | **28 août 2027**, ou à la première modification de la grille |
| Les deux phrases de `/tarifs` qui fondent la division par écran | leur disparition casse le test l. 1040-1044 **et** le raisonnement du §05 | surveillance par test, déjà en place |
| Stripe, webhooks d'abonnement | documentation vivante, sans version — la plus volatile des douze | à chaque révision substantielle |
| CNIL, guide de la sécurité | parution d'une édition postérieure à 2024 | annuel |
| ANSSI, sauvegardes | parution d'une version 1.2 ou d'un ANSSI-BP-100 révisé | annuel |
| OWASP ASVS | parution d'une 5.1 ou d'une 6.0 | annuel |
| WCAG | passage à WCAG 3.0 ou errata sur 2.2 | annuel |
| GOV.UK Service Manual | changement de la date « Last updated » des trois pages | annuel |
| Eric Ries / Lean Startup | page sans date : rien ne signale un changement | à chaque révision substantielle |
| Le cas Accordia | rien — c'est une construction, elle ne périme pas ; seule sa vraisemblance se discute | — |
| L'état de publication (É1) | un déploiement | **à revérifier avant toute mise en campagne payante** |

---

## M. Ce qui reste ouvert, hors périmètre de cet agent

1. **Le déploiement (É1).** La version décrite ici n'est pas en ligne. Rien
   dans ce dossier ne peut le corriger.
2. **Les sept écarts É2 à É8.** Ils appellent des modifications de `page.tsx`,
   hors territoire de cet agent. É2, É3 et É4 touchent des phrases que le
   lecteur peut vérifier lui-même — ce sont les plus coûteuses en confiance
   pour un guide dont l'argument central est précisément que « les chiffres
   publiés par celui qui vend la solution » se vérifient.
3. **La double formulation de la déduction du Discovery sur `/tarifs`**
   (« le devis précise la déduction applicable » contre « Déduit si phase 2 »).
   Arbitrage à porter sur la page tarifs.
4. **Le contrôle visuel** aux cinq largeurs, jamais fait.
5. **`npx tsc --noEmit`, `eslint`, `npm test` complet et le build de
   production**, à lancer par l'agent qui gèle le lot.
6. **La relecture humaine** (section K).

---

*Dossier reconstitué le 30 août 2026. Toutes les sources citées ci-dessus ont
été rouvertes ce jour ; aucune date de consultation n'a été recopiée d'un
dossier antérieur. Les calculs ont été refaits sans réutiliser la formule de la
page. Les écarts de la section 0 sont signalés, pas corrigés : la page, les
tests, le registre et les manifestes sont hors du périmètre d'écriture de cet
agent.*
