# Dossier de recherche — Plan de recette d'une application métier

> Slug : `plan-recette-application-metier`
> Objet : **socle de preuves de l'article réellement publié le 30 août 2026**
> Date de reconstitution du dossier : **30 août 2026**
> Source de vérité : `src/app/guides/plan-recette-application-metier/page.tsx`
> et les modules qu'il importe — **pas** la version antérieure de ce dossier
> Auteur de la reconstitution : agent de traçabilité, passe unique
> Territoire d'écriture : ce fichier seul. La page, les tests, le registre et
> les manifestes n'ont pas été touchés.

Ce dossier remplace intégralement la version datée du 18 août 2026, qui
décrivait un article qui n'existe plus : la page a été réécrite les 28 et
30 août 2026 (voir §1.2). L'ancienne structure de sections est conservée dans
son esprit — identité, corpus primaire, registre des affirmations, calculs,
frontières, journal — mais **aucun contenu de l'ancien dossier n'a été
recopié**. Chaque ligne ci-dessous a été refaite contre la page publiée.

Ce dossier n'est ni un audit du logiciel décrit, ni un conseil juridique, ni
une validation éditoriale. Il permet une seule chose, et c'est son but : qu'un
lecteur extérieur retrouve chaque source, refasse chaque calcul, et distingue
ce qui est établi de ce qui est posé.

---

## 0. En tête — écarts trouvés dans l'article publié

**La page n'a pas été corrigée : elle est hors du territoire de cette passe.**
Les huit points ci-dessous sont signalés, datés et argumentés pour que la
personne compétente tranche. Ils sont classés du plus concret au plus ténu.

| #   | Nature                | Où                                                | Constat                                                                                                                                                                                                                                                             |
| --- | --------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| É1  | Calcul incohérent     | `page.tsx` L644-646, encadré vert de la section 03 | « Transposés **tels quels** sur un projet à 8 000 € HT, ils coûteraient **2 100 €** de temps interne. » Transposés tels quels, les 6,2 jours du tableau valent 6,2 × 350 = **2 170 €**. 2 100 € correspond à 6,0 × 350, c'est-à-dire au « six jours » arrondi du titre voisin, pas à la ligne « Total » du tableau. Aucun test ne verrouille ce nombre. |
| É2  | Arrondi qui minore    | `page.tsx` L646-647, même encadré                  | « soit **un quart** du développement ». 2 100 ÷ 8 000 = 26,25 % ; 2 170 ÷ 8 000 = 27,1 %. Dans les deux lectures la charge est **supérieure** au quart. Le test `garde intact le passage qui ne sert pas le commerce` verrouille la formule « un quart du développement » sans vérifier le rapport.                                                     |
| É3  | Localisateur erroné   | `page.tsx` L313-317 et L525-528                    | La licence **LGPL v3** de Squash TM est attribuée à `https://www.henix.com/squashtm`. Cette page, rouverte le 30/08/2026, décrit un modèle « open core » et « Développé en France depuis 2011 par Henix », mais **ne mentionne aucune licence**. Le fait est exact : il est écrit sur `https://www.squashtm.com/en/source-code` (« SquashTM is open source software, distributed under the LGPL v3 license »). C'est le localisateur qui est faux, pas l'affirmation. |
| É4  | Imprécision juridique | `page.tsx` L254 et L926-929                        | « trente jours pour notifier la décision **après vérification d'aptitude** » / « Le délai de trente jours **qui suit** la vérification d'aptitude ». Selon l'article 33.2.1 du CCAG-TIC relu le 30/08/2026, les trente jours courent **à compter de la notification par le titulaire que les prestations sont prêtes à être vérifiées, ou de la date du procès-verbal de mise en ordre de marche** : ce délai englobe la vérification d'aptitude elle-même, il ne la suit pas. La conclusion de l'article — aucune admission tacite à 33.2.1 — reste exacte. |
| É5  | Chiffre non sourçable | `page.tsx` L488-492                                | « Il varie d'un **facteur douze et demi** selon la densité de règles : une saisie de congés qui tient en quatre règles produit **une douzaine** de cas, un calcul de commissions à soixante règles en produit **plus de cent cinquante**. » Deux bornes posées sans source ni dérivation par la méthode de la section 02, et un facteur qui n'est exact que sur les valeurs rondes (150 ÷ 12 = 12,5) : lu avec les mots employés — « une douzaine », « plus de cent cinquante » — le facteur réel est supérieur à 12,5. La phrase se lit comme une observation empirique alors que c'est une illustration. |
| É6  | Énumération incomplète| `page.tsx` L763-769                                | « Elle vise les personnes morales de droit public, les délégataires d'un service public, les personnes morales de droit privé créées pour un besoin d'intérêt général autre qu'industriel ou commercial, et les entreprises… » L'article 47 I de la loi n° 2005-102 relu le 30/08/2026 compte **quatre** catégories : le 3°, « les personnes morales de droit privé constituées par [les précédentes] pour satisfaire des besoins d'intérêt général », n'est pas représenté. Aucune affirmation n'est fausse ; l'énumération est présentée comme fermée alors qu'elle est partielle. |
| É7  | Affirmation invérifiable | `page.tsx` L1142-1143                           | « Les textes cités ont été **relus le 28 août 2026** ». Cette relecture ne peut être ni confirmée ni infirmée depuis ce dossier. Par ailleurs **4 des 12 entrées** de `legalSources` portent une date de consultation (CCAG-TIC, loi 2005-102, décret 2019-768, directive 2019/882) ; les 8 autres n'en portent aucune, alors que la phrase de transparence les couvre toutes. |
| É8  | Source non revérifiable | `page.tsx` L262-273                              | Les deux entrées ISO (`iso.org/standard/79429.html` et `iso.org/standard/78176.html`) n'ont **pas pu être rouvertes** le 30/08/2026 : les deux URL renvoient HTTP 403, y compris via `/fr/` et via l'Online Browsing Platform. Les descriptions publiées — « modèles de documentation de test », « modèle de qualité produit à neuf caractéristiques » — sont donc, à cette date, invérifiables depuis la source citée. Ce n'est pas un défaut de l'article ; c'est une limite de traçabilité à connaître. |

**Aucun autre écart de calcul n'a été trouvé.** Les vingt-trois autres
opérations chiffrées de l'article ont été refaites à la main et retombent
toutes sur la valeur publiée : voir §7, où chaque étape est écrite.

---

## 1. Objet du dossier et méthode de reconstitution

### 1.1 Ce que ce dossier doit permettre

La charte qualité (§3.2 et §15) exige que le socle de preuves corresponde à
l'article publié. Un guide qui apprend au lecteur à ne pas croire « les
chiffres publiés par celui qui vend la solution » ne peut pas lui-même reposer
sur un dossier périmé. Ce fichier doit donc permettre à un tiers, sans accès à
l'auteur, de :

1. retrouver chaque source citée, à son localisateur exact ;
2. refaire chaque calcul, étape par étape, sans lire le code ;
3. savoir, pour chaque nombre de l'article, s'il est **sourcé**, **posé** ou
   **dérivé**.

### 1.2 Les fichiers relevés

Relevé du 30 août 2026, 22 h 55 (heure locale). Empreintes SHA-256 tronquées à
16 caractères pour la lisibilité ; la commande complète est au §13.

| Fichier                                                                    | Dernière écriture | SHA-256 (16) |
| -------------------------------------------------------------------------- | ----------------- | ------------ |
| `src/app/guides/plan-recette-application-metier/page.tsx`                   | 30/08/2026 22:33  | `fe9842be64f91f4d` |
| `src/app/guides/plan-recette-application-metier/content-quality.test.ts`    | 30/08/2026 22:44  | `97cfe018fb11ce36` |
| `src/app/guides/plan-recette-application-metier/acceptance-readiness.ts`    | 28/08/2026 17:01  | `e46fa418e39fb460` |
| `src/app/guides/plan-recette-application-metier/acceptance-readiness.test.ts` | 18/08/2026 11:17 | `d87ea3939275d51a` |
| `src/app/guides/plan-recette-application-metier/acceptance-readiness-tool.tsx` | 30/08/2026 22:24 | `b3fe00c9ecb2dc51` |
| `src/app/guides/plan-recette-application-metier/opengraph-image.tsx`        | 30/08/2026 22:34  | `5d80546ec72a7e31` |
| `docs/research/plan-recette-application-metier.md` (version remplacée)      | 18/08/2026 12:46  | `d19e346823c8c163` |

C'est cet écart de douze jours entre la page (30 août) et l'ancien dossier
(18 août) qui rendait le socle de preuves inutilisable.

### 1.3 Ordre de lecture suivi

1. `page.tsx` en entier, puis les composants importés
   (`guide-content-blocks`, `guide-premium-layout`, `GuidesShell`,
   `guide-page-seo`, `guides`, `team`) pour savoir ce que la page affiche
   réellement ;
2. `acceptance-readiness.ts` et `acceptance-readiness-tool.tsx` : l'atelier de
   la section 07 ;
3. les deux fichiers de tests colocalisés, qui énoncent ce que l'article
   garantit et disent quels chiffres sont verrouillés (§8) ;
4. l'ancien dossier, **pour sa structure seule** ;
5. les sources citées, rouvertes une à une (§4) ;
6. recalcul indépendant de toutes les opérations (§7), en Python, sans lire les
   tests, pour ne pas recopier une erreur du dépôt dans le vérificateur.

### 1.4 Ce qui a été exécuté

| Commande                                                                | Sortie observée le 30/08/2026                            |
| ----------------------------------------------------------------------- | -------------------------------------------------------- |
| `npx vitest run src/app/guides/plan-recette-application-metier`          | 2 fichiers, **80 tests réussis**, 0 échec                 |
| `npx tsx scripts/measure-guide-readtime.mjs --check plan-recette-application-metier` | `OK … mesuré 21 min · publié 21 min`         |
| script Python de recalcul (§13)                                         | voir §7, résultats reproduits ligne à ligne              |

Aucune commande d'écriture, aucune commande Git n'a été lancée.

---

## 2. Identité de l'article publié

```text
Slug                : plan-recette-application-metier
URL canonique       : https://hagnere-code.ai/guides/plan-recette-application-metier
Registre            : src/lib/guides.ts, entrée L143-162
Titre (registre)    : Plan de recette d'une application métier
H1 / heroTitle      : Plan de recette d'une application métier : prouver avant d'accepter
Section du hub      : Préparer son projet
Statut éditorial    : published
datePublished       : 2026-07-30T16:30:59+02:00
dateModified        : 2026-08-30T22:40:00+02:00
readTimeMin publié  : 21
Longueur mesurée    : 21 min (script du dépôt, atelier exclu du comptage)
Auteur affiché      : TEAM.quentin (président fondateur), profil /equipe#fondateur
Visuels             : recette-preuve-{16x9,4x3,1x1}.{svg,webp} — présents, vérifiés
Atelier local       : AcceptanceReadinessTool, 8 points, 10 compteurs, 7 issues
```

`metadata.robots` vaut `{ index: false, follow: false }` **hors production** :
c'est la fonction `guideRobots()` de `src/lib/guides.ts` (L259-268), qui
combine `isGuidePublished()` et `isSearchIndexingEnabled(NEXT_PUBLIC_ENV,
VERCEL_ENV)`. Ce n'est pas un `noindex` éditorial ; ce n'est pas un écart.

### 2.1 Plan des huit sections publiées

| N°  | `id`        | Titre publié                                                             | Durée annoncée |
| --- | ----------- | ------------------------------------------------------------------------ | -------------- |
| 01  | `reponse`   | Ce qu'une recette doit produire avant que vous payiez le solde            | 2 min          |
| 02  | `compter`   | Combien de cas de recette faut-il écrire ?                               | 2 min          |
| 03  | `jours`     | Combien de jours votre équipe doit-elle y passer ?                       | 3 min          |
| 04  | `criteres`  | Qu'est-ce qu'un critère d'acceptation qu'on peut opposer ?               | 4 min          |
| 05  | `donnees`   | Le jeu d'essai propre laisse passer les erreurs qui coûtent le plus cher  | 2 min          |
| 06  | `incidents` | Ce qui rate, et ce que ça coûte                                          | 3 min          |
| 07  | `mesures`   | Deux mesures disent si la recette a servi à quelque chose                | 2 min          |
| 08  | `decision`  | Qui prononce l'acceptation, et que se passe-t-il si personne ne le fait ? | 3 min          |

Somme des huit compteurs : 2 + 2 + 3 + 4 + 2 + 3 + 2 + 3 = **21 minutes**,
égale à `guide.readTimeMin`. Le test `fait tenir la somme des minutes de
section dans le temps publié` l'exige, et exige en plus qu'aucune section ne
s'écarte de plus d'une minute de sa propre longueur mesurée à 200 mots/minute.
La mesure indépendante du script du dépôt donne également 21 min (§1.4).

### 2.2 FAQ publiée

Huit questions dans trois catégories (`page.tsx` L86-154) : préparer la
campagne (3), exécuter et qualifier (3), décider et clore (2). Aucune n'est un
doublon d'un H2. Les réponses tiennent entre 40 et 120 mots. Deux affirmations
chiffrées y figurent et sont vérifiées au §7 : « 6,2 jours » et « sur 56 cas,
95 % laissent près de trois cas non conformes ».

---

## 3. Convention du dossier : trois natures d'énoncé

Tout le registre qui suit distingue trois natures, jamais mélangées.

| Marque | Nature              | Ce que ça engage                                                                                                     |
| ------ | ------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **F**  | FAIT SOURCÉ         | Vérifiable chez un tiers. Porte un localisateur : URL, article ou section précise, date de relevé. Sans localisateur, ce n'est pas un fait. |
| **H**  | HYPOTHÈSE du cas construit | Valeur **posée à découvert** pour faire tourner l'exemple. Aucune source, et l'article le dit. Remplaçable par la valeur du lecteur. |
| **C**  | CALCUL              | Dérivé de F et de H, par une opération écrite. Si un H bouge, le C bouge.                                             |

L'article annonce lui-même cette séparation à deux endroits, et c'est ce qui
rend le dossier possible :

- `page.tsx` L390-395 : « Exemple construit : les volumes, les durées et le
  coût du jour chargé sont choisis pour l'exemple et ne viennent d'aucune
  source ; seul le montant du projet est repris de la grille de prix de ce
  site. Ce n'est pas un dossier client. » (verrouillé par le test `annonce son
  cas comme construit et nomme des métiers`) ;
- `page.tsx` L546-549 : « Aucune des valeurs ci-dessous ne sort d'une source
  publiée : ce sont des hypothèses de travail, posées à découvert pour que vous
  puissiez les remplacer par les vôtres. »

---

## 4. Corpus de sources — localisateurs et dates de relevé

### 4.1 Sources citées par l'article et **rouvertes le 30 août 2026**

Dix des douze entrées de `legalSources`. Pour chacune : le localisateur le plus
fin obtenu, et ce que la source établit **exactement**.

| ID  | Source et URL                                                                                                                                                  | Localisateur atteint le 30/08/2026                                                                                      | Ce qu'elle établit, mot pour mot ou paraphrasé au plus près                                                                                                                                                                                                                          |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| S1  | Légifrance — arrêté du 30 mars 2021 approuvant le CCAG-TIC<br>`https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043310689`                                     | Page rouverte. Titre et référence de publication confirmés : **JORF n° 0078 du 1er avril 2021, texte n° 22**. Table des matières de l'annexe visible jusqu'à l'article 31 environ. | Le titre exact : « Arrêté du 30 mars 2021 portant approbation du cahier des clauses administratives générales des marchés publics de techniques de l'information et de la communication ». **Le corps des articles 32 et 33 n'a pas été servi par la récupération** (voir §4.4). |
| S2  | ISTQB — CTFL Syllabus v4.0.1 (PDF)<br>`https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf`                                             | PDF téléchargé et lu, 78 pages. Table des révisions p. 3 : **« CTFL v4.0.1 — 15.09.2024 — Errata »**. Pied de page de chaque page : `v4.0.1 … 2024-09-15`. | §2.2.1 *Test Levels*, p. 28 : « Acceptance testing focuses on validation and on demonstrating readiness for deployment, which means that the system fulfills the user's business needs. Ideally, acceptance testing should be performed by the intended users. » <br>§5.1.3 *Entry Criteria and Exit Criteria*, p. 49 : « Entry criteria define the preconditions for undertaking a given activity. […] Exit criteria define what must be achieved to declare an activity completed. » <br>§5.1.5 *Test Case Prioritization*, p. 50 : priorisation par risque, par couverture ou par priorité des exigences. <br>§5.5 *Defect Management*, p. 56-57 : le rapport d'anomalie porte deux champs distincts — « **Severity** of the defect (degree of impact) on the interests of stakeholders or requirements » et « **Priority to fix** ». |
| S3  | CNIL — Tester vos applications<br>`https://www.cnil.fr/fr/tester-vos-applications`                                                                              | Page rouverte. Date affichée : **27 janvier 2020**.                                                                       | « Les métriques acceptables doivent être définies conjointement par toutes les parties avant le développement ». Les données réelles de production « ne doivent pas être utilisées pendant la phase de développement et de test ». « Construisez donc un jeu de données fictives ». Lors de l'import de configurations existantes, « pensez à anonymiser les données personnelles » qu'elles contiennent. |
| S4  | CNIL — Encadrer les développements informatiques<br>`https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques`                                 | Page rouverte. Date affichée : **14 mars 2024**.                                                                          | « Effectuer les développements informatiques et les tests dans un environnement informatique distinct de celui de la production », sur données fictives ou anonymisées. À ne pas faire : « Utiliser des données personnelles réelles pour les phases de développement et de test. Des jeux fictifs doivent être utilisés autant que possible. » Et : « Effectuer un test de non-régression et/ou une revue de code avant tout passage en production d'une mise à jour ». |
| S5  | W3C WAI — Evaluating Web Accessibility<br>`https://www.w3.org/WAI/test-evaluate/`                                                                               | Page rouverte. **Last Updated : 12 August 2026.**                                                                         | « evaluate accessibility early and throughout the development process to identify accessibility problems early, when it is easier to address them ». Et : « no tool alone can determine if a site meets accessibility standards. Knowledgeable human evaluation is required to determine if a site is accessible. » |
| S6  | Légifrance — loi n° 2005-102 du 11 février 2005, article 47<br>`https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000037388867/`                           | Article rouvert. **Version en vigueur au 8 septembre 2023.**                                                              | Le I énumère **quatre** catégories : 1° les personnes morales de droit public ; 2° les personnes morales de droit privé délégataires d'une mission de service public ou créées pour satisfaire un besoin d'intérêt général autre qu'industriel ou commercial ; 3° les personnes morales de droit privé constituées par les précédentes pour satisfaire des besoins d'intérêt général ; 4° **les entreprises dont le chiffre d'affaires excède un seuil défini par le décret en Conseil d'État** mentionné au V. Le seuil n'est donc pas dans la loi. |
| S7  | Légifrance — décret n° 2019-768 du 24 juillet 2019<br>`https://www.legifrance.gouv.fr/loda/id/JORFTEXT000038811937/`                                            | Décret rouvert, **en vigueur au 30 août 2026**.                                                                           | Article 2 : le seuil du 4° du I de l'article 47 est fixé à **250 millions d'euros**, calculés sur « la moyenne du chiffre d'affaires annuel réalisé en France au titre des trois derniers exercices comptables clos antérieurs à l'année considérée ». **Aucun critère d'effectif** ne figure dans le texte. Le régime de sanction a bougé : l'**article 8 a été abrogé par le décret n° 2026-816 du 24 août 2026**, qui a également modifié les articles 1, 5, 9 et 10. |
| S8  | EUR-Lex — directive (UE) 2019/882<br>`https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32019L0882`                                                   | Directive rouverte. Adoptée le **17 avril 2019**, publiée au JOUE le 7 juin 2019.                                          | Application des exigences aux produits et services mis sur le marché **à partir du 28 juin 2025**. Champ de l'article 2 : matériel informatique généraliste et systèmes d'exploitation, terminaux en libre-service, équipements terminaux grand public, liseuses ; services de communications électroniques, services d'accès aux médias audiovisuels, information et billetterie du transport de voyageurs, services bancaires aux consommateurs, commerce électronique, livres numériques. Le champ est celui des produits et services **destinés aux consommateurs** : les outils internes d'entreprise n'y figurent pas. |
| S9  | OWASP — ASVS<br>`https://owasp.org/www-project-application-security-verification-standard/`                                                                     | Page rouverte. Version stable : **5.0.0, publiée le 30 mai 2025** (Global AppSec EU Barcelona).                            | L'ASVS fournit une base pour tester les contrôles techniques de sécurité d'une application web, sert de métrique, guide la construction des contrôles et sert de base contractuelle. La page recommande le format versionné `v<version>-<chapitre>.<section>.<exigence>` — par exemple `v5.0.0-1.2.5` — « car les identifiants peuvent changer entre les versions ». |
| S10 | Henix — Squash TM<br>`https://www.henix.com/squashtm`                                                                                                          | Page rouverte.                                                                                                            | « Développé en France depuis 2011 par Henix ». Henix y est décrite comme une entreprise française spécialisée en qualité logicielle, éditrice de Squash TM. La page décrit un modèle **« open core »**. Elle **ne mentionne aucune licence** — voir É3. |

### 4.2 Sources citées par l'article que je **n'ai pas pu rouvrir**

Déclaré noir sur blanc, comme l'exige la charte : ces deux sources n'ont pas
été revérifiées le 30 août 2026, et je n'ai simulé aucune consultation.

| ID  | Source                                                                                          | Ce qui s'est passé                                                                                                                                          |
| --- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| N1  | ISO/IEC/IEEE 29119-3:2021 — `https://www.iso.org/standard/79429.html`                            | **HTTP 403 Forbidden.** Réessai sur l'Online Browsing Platform (`iso.org/obp/ui/en/#iso:std:iso-iec-ieee:29119:-3:ed-2:v1:en`) : **HTTP 403** également.       |
| N2  | ISO/IEC 25010:2023 — `https://www.iso.org/standard/78176.html`                                   | **HTTP 403 Forbidden.** Réessai sur `https://www.iso.org/fr/standard/78176.html` : **HTTP 403** également.                                                    |

Conséquence pratique : les deux phrases de l'article qui s'appuient sur ces
normes — « ISO/IEC/IEEE 29119-3:2021 propose publiquement des modèles de
documentation, ISO/IEC 25010:2023 aide à ouvrir la liste des critères au-delà
des seules fonctions » (`page.tsx` L1084-1087) et les deux descriptions de
`legalSources` (L262-273) — **ne sont pas vérifiables depuis leur source citée
à la date de ce dossier**. Elles restent prudentes (l'article prend soin
d'écrire « Aucun champ détaillé non public n'est attribué à la norme »), mais
un contradicteur qui cliquerait le lien aujourd'hui obtiendrait un 403. À
traiter au prochain passage : soit citer un catalogue accessible, soit
documenter le blocage dans l'entrée elle-même.

Cas particulier, **partiel** : S1 (Légifrance, CCAG-TIC) a bien été rouverte,
titre et référence JO confirmés, mais la récupération n'a pas servi le corps
des articles 32 et 33 de l'annexe. **Ces deux articles n'ont donc pas été relus
sur la source primaire** ; ils l'ont été sur deux recueils tiers concordants
(§4.4). Un lecteur exigeant doit ouvrir le PDF officiel du CCAG-TIC depuis
Légifrance pour clore ce point.

### 4.3 Sources internes au site — le seul chiffre du cas qui n'est pas une hypothèse

L'article écrit que « seul le montant du projet est repris de la grille de prix
de ce site ». Vérifié, dans le dépôt, le 30 août 2026 :

| Emplacement                                        | Ce qui est publié                                                                        |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `src/components/tarifs/body.ts` L642 (page `/tarifs`) | « **25 k€ HT** — Pro — CRM/ERP léger + intégrations »                                    |
| `src/components/tarifs/body.ts` L559                | « … la borne de **25 k€ HT** est celle d'un outil interne »                               |
| `src/app/agence-react/page.tsx` L62 et L295         | « Les projets plus larges […] se situent entre **25 000 et 80 000 € HT** » ; ligne de grille « Application complète (plusieurs rôles, connexions à vos outils) — 25 000 à 80 000 € ». |

Le projet à 25 000 € HT du cas construit correspond donc à un palier réellement
publié. Le montant à 8 000 € HT de l'encadré vert de la section 03 n'est pas
attribué à l'agence par l'article — c'est un projet hypothétique plus petit ;
le garde-fou `src/lib/guide-price-attribution.test.ts` ne le retient pas, parce
qu'aucun marqueur d'attribution ne partage son littéral de chaîne.

### 4.4 Sources de corroboration — pourquoi elles ont été ouvertes

Ces pages **ne sont pas citées par l'article** et ne fondent aucune affirmation
publiée. Elles ont servi à obtenir le texte d'articles que la source primaire
n'a pas rendus, et à trancher É3. Elles sont listées pour que la vérification
soit reproductible, pas pour tenir lieu de source primaire.

| ID  | Page                                                                                     | Sert à                                                                                                            |
| --- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| C1  | `https://www.marche-public.fr/CCAG-TIC2021/32-verifications-qualitatives.htm`             | Texte de l'article 32 : 32.3 vérification d'aptitude, 32.4 vérification de service régulier, trente jours, 2 %, « imputables à chaque élément de matériel », 8 h – 18 h du lundi au vendredi jours fériés exclus. |
| C2  | `https://www.marche-public.info/verification-service-regulier-ccag-tic-2021/`              | Second recueil, concordant avec C1 sur l'article 32.4. Deux recueils indépendants ont été exigés avant de tenir le contenu pour établi. |
| C3  | `https://www.marche-public.fr/CCAG-TIC2021/33-decisions-apres-verification.htm`            | Texte de l'article 33 : 33.2.1 (trente jours), 33.2.2 (sept jours et admission tacite).                            |
| C4  | `https://www.code-commande-publique.com/ccag-tic-2021-article-33/`                         | Second recueil, concordant avec C3, y compris sur le point de départ des trente jours de 33.2.1 — c'est lui qui établit É4. |
| C5  | `https://www.squashtm.com/en/source-code` (redirection 301 depuis `squashtest.com/source-code`) | « SquashTM is open source software, distributed under the LGPL v3 license. » Dépôt : `gitlab.com/henixdevelopment/open-source/squash`. Établit que le fait de l'article est vrai et que seul son localisateur est faux. |

Texte de l'article 33.2.2 obtenu à l'identique par C3 et C4 : « Si l'acheteur
ne notifie pas sa décision dans le délai de sept jours mentionné au premier
alinéa du présent article, le résultat de la vérification de service régulier
est considéré comme positif et les prestations sont réputées admises. »

---

## 5. Registre des FAITS SOURCÉS de l'article

Chaque ligne : ce que la page affirme, où, la source, et le verdict de la
revérification du 30 août 2026.

| ID  | Affirmation telle que publiée                                                                                                       | Emplacement             | Source / localisateur                     | Verdict                                                                                 |
| --- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ----------------------------------------- | ---------------------------------------------------------------------------------------- |
| F1  | Le CCAG-TIC est approuvé par l'**arrêté du 30 mars 2021**                                                                            | L251, L678-680          | S1 — titre de l'arrêté, JORF 01/04/2021   | **Confirmé** sur la source primaire.                                                      |
| F2  | Son **article 32** sépare la vérification en deux temps : vérification d'aptitude, puis vérification de service régulier             | L680-683                | C1, C2 (art. 32.3 et 32.4)                | **Confirmé** sur deux recueils concordants ; non lu sur Légifrance (§4.2).                |
| F3  | La vérification d'aptitude « contrôle que le logiciel livré peut remplir les fonctions demandées »                                   | L681-682                | C1, art. 32.3                             | **Confirmé** en substance : constater que les prestations « présentent les caractéristiques techniques » attendues, après mise en ordre de marche. |
| F4  | La régularité s'observe **trente jours** à partir de la **décision positive de vérification d'aptitude**                             | L686-689                | C1, C2, art. 32.4 : « la régularité du service s'observe pendant trente jours, à partir du jour de la décision positive de vérification d'aptitude » | **Confirmé, littéral.**                                                                   |
| F5  | Service réputé régulier si l'indisponibilité cumulée sur le mois ne dépasse pas **2 %** de la durée d'utilisation effective          | L689-691                | C1, C2, art. 32.4                         | **Confirmé, littéral.**                                                                   |
| F6  | La durée d'utilisation effective s'étend **de 8 h à 18 h, du lundi au vendredi, jours fériés exclus**                                | L691-694, L743-744      | C1, C2, art. 32.4                         | **Confirmé, littéral.**                                                                   |
| F7  | Le CCAG-TIC parle d'indisponibilités « **imputables à chaque élément de matériel** »                                                 | L720-722                | C1, C2, art. 32.4                         | **Confirmé, littéral.** La remarque de l'article — sur une application hébergée, aucun élément de matériel n'est au client — est une déduction éditoriale explicite, pas une citation. |
| F8  | Article 33 : **sept jours** après vérification de service régulier ; à défaut de notification, **les prestations sont réputées admises** | L254, L922-930          | C3, C4, art. 33.2.2 (texte cité au §4.4)  | **Confirmé, littéral.**                                                                   |
| F9  | Article 33 : **trente jours** liés à la vérification d'aptitude, **sans admission tacite** — approbation, ajournement ou rejet       | L254, L926-930          | C3, C4, art. 33.2.1                       | **Confirmé sur le fond** : aucune admission tacite à 33.2.1. **Réserve É4** sur le point de départ du délai. |
| F10 | Le CCAG-TIC « ne s'applique qu'aux marchés qui s'y réfèrent »                                                                        | L1127-1128, L330        | Nature même d'un CCAG (document type auquel les documents particuliers renvoient) | **Confirmé** : réserve conforme et verrouillée par test.                                  |
| F11 | Le syllabus ISTQB distingue **gravité** (effet) et **priorité** (ordre de traitement)                                                | L1059-1063, L260        | S2, §5.5, p. 56-57 : champs « Severity … (degree of impact) » et « Priority to fix » | **Confirmé.**                                                                             |
| F12 | Le syllabus traite des **niveaux de test** et d'une acceptation centrée sur les besoins des utilisateurs                             | L259-260                | S2, §2.2.1, p. 28 (citation au §4.1)      | **Confirmé.**                                                                             |
| F13 | Le syllabus traite des **critères d'entrée et de sortie** et de la **priorisation**                                                  | L259-260                | S2, §5.1.3 p. 49 et §5.1.5 p. 50          | **Confirmé.**                                                                             |
| F14 | Le syllabus est daté du **15 septembre 2024**                                                                                       | L259                    | S2, table des révisions p. 3 et pied de page | **Confirmé.**                                                                          |
| F15 | Le syllabus est une « référence pédagogique, pas certification du projet »                                                           | L260                    | Réserve éditoriale                        | **Conforme** : rien dans S2 ne certifie un projet. Verrouillé par test.                   |
| F16 | La CNIL demande des environnements de développement, de test et de production **distincts**                                          | L282-285, L862-866      | S4, fiche du 14/03/2024                   | **Confirmé, littéral.**                                                                   |
| F17 | Les données personnelles de production ne doivent pas être utilisées en développement ou en test ; jeu **fictif ou anonymisé**       | L277-279, L282-285, L120 | S3 (27/01/2020) + S4 (14/03/2024)         | **Confirmé** par les deux fiches.                                                         |
| F18 | Il faut **anonymiser les données personnelles contenues dans les configurations importées**                                          | L278-279, L120, L865-866 | S3, 27/01/2020                            | **Confirmé, littéral.**                                                                   |
| F19 | La CNIL demande des **métriques définies avec les parties prenantes**                                                                | L277-278                | S3, 27/01/2020                            | **Confirmé** (« définies conjointement par toutes les parties avant le développement »).  |
| F20 | La CNIL recommande **non-régression ou revue avant la mise en production d'une mise à jour**                                          | L283-285                | S4, 14/03/2024                            | **Confirmé, littéral.**                                                                   |
| F21 | **Aucun outil automatique ne détermine seul la conformité d'accessibilité** ; évaluation humaine nécessaire                          | L288-291, L778-781      | S5 (« no tool alone can determine… »)     | **Confirmé, littéral.**                                                                   |
| F22 | L'obligation française d'accessibilité vient de l'**article 47 de la loi du 11 février 2005**, le décret de 2019 n'en fixe que le seuil | L761-765, L293-305     | S6 + S7                                   | **Confirmé.**                                                                             |
| F23 | Le seuil est de **250 millions d'euros** de chiffre d'affaires **moyen annuel en France sur les trois derniers exercices clos**       | L766-769, L303-305      | S7, décret n° 2019-768, article 2         | **Confirmé, littéral.**                                                                   |
| F24 | « Le critère est un chiffre d'affaires, **jamais un effectif** »                                                                     | L768-769, L304          | S7 — aucun critère d'effectif dans le texte | **Confirmé.**                                                                            |
| F25 | Les catégories visées par le I de l'article 47                                                                                       | L763-769                | S6                                        | **Confirmé mais incomplet** — voir É6 : le 3° manque.                                     |
| F26 | Le régime de sanction du décret « a été modifié depuis : vérifier le texte en vigueur »                                              | L304-305                | S7                                        | **Confirmé et à jour** : article 8 abrogé par le décret n° 2026-816 du 24 août 2026. L'article ne cite aucun montant d'amende, et un test l'interdit. |
| F27 | Le second régime est **applicable depuis le 28 juin 2025** et vise des produits et services **destinés aux consommateurs**           | L772-776, L307-311      | S8, directive (UE) 2019/882               | **Confirmé.**                                                                             |
| F28 | « Un outil interne utilisé par vos salariés n'y figure pas »                                                                         | L775-776, L310          | S8, champ de l'article 2                  | **Confirmé** : le champ est celui des produits et services destinés aux consommateurs.    |
| F29 | Squash TM est **développé depuis 2011 par Henix**, société française de qualité logicielle                                           | L313-317                | S10                                       | **Confirmé, littéral** (« Développé en France depuis 2011 par Henix »).                   |
| F30 | Squash TM est publié **en open source sous licence LGPL v3**                                                                         | L313-317, L525-528      | **C5**, pas S10                           | **Fait exact, localisateur faux** — voir É3.                                              |
| F31 | Squash TM est cité « **sans recommandation exclusive** », comme exemple d'outil disponible                                           | L316-317, L525-528      | Réserve éditoriale                        | **Conforme.**                                                                             |
| F32 | OWASP **ASVS 5.0.0** est une base versionnée de contrôles techniques de sécurité web, « pas une obligation générale »                | L319-323                | S9                                        | **Confirmé** : 5.0.0 publiée le 30/05/2025 ; la page elle-même recommande de citer la version. |
| F33 | ISO/IEC/IEEE 29119-3:2021 propose publiquement des modèles de documentation de test ; aucun champ non public ne lui est attribué      | L262-267, L1084-1086    | N1                                        | **Non revérifié le 30/08/2026** — HTTP 403 (§4.2).                                        |
| F34 | ISO/IEC 25010:2023 : modèle de qualité produit à **neuf caractéristiques**                                                           | L269-273, L1085-1087    | N2                                        | **Non revérifié le 30/08/2026** — HTTP 403 (§4.2).                                        |
| F35 | Le projet du cas construit, **25 000 € HT**, vient de la grille publiée du site                                                      | L376, L392-394, L398    | §4.3 (`tarifs/body.ts` L642, `agence-react/page.tsx` L62 et L295) | **Confirmé** dans le dépôt : palier « 25 k€ HT — Pro — CRM/ERP léger + intégrations ». |

---

## 6. Registre des HYPOTHÈSES du cas construit

Aucune de ces valeurs n'a de source, et l'article l'écrit deux fois (§3). Elles
sont ici numérotées pour qu'un lecteur puisse les remplacer une à une par les
siennes et voir ce qui bouge.

**48 hypothèses recensées** (H1 à H48), dont **4 de décor** sans valeur
chiffrée (H1-H4) et **44 valeurs posées sans aucune source**. Le décompte se
refait en additionnant les lignes des tableaux 6.1 à 6.7 :
4 + 9 + 5 + 12 + 4 + 2 + 12 = 48.

### 6.1 Le décor (aucun effet sur un calcul)

| ID  | Hypothèse                                                                          | Emplacement |
| --- | ---------------------------------------------------------------------------------- | ----------- |
| H1  | Entreprise de transport et de logistique de Chalon-sur-Saône                        | L395-398    |
| H2  | Nadia, responsable facturation, testeuse principale                                 | L404-406    |
| H3  | Karim, directeur d'exploitation, décideur                                           | L406-407, L1048-1049 |
| H4  | Application de suivi de tournées et de préfacturation                               | L397-398    |

Ces quatre éléments sont des personnages et un décor annoncés comme construits.
Ils ne sont pas des clients, et la page l'écrit deux fois — « Ce n'est pas un
dossier client » (L394) et « ce ne sont pas des dossiers clients » (L892-893),
les deux verrouillés par test.

### 6.2 Les volumes qui commandent le décompte des cas (section 02)

| ID  | Hypothèse posée                                          | Emplacement | Ce qui bouge si elle change                                  |
| --- | -------------------------------------------------------- | ----------- | ------------------------------------------------------------ |
| H5  | **6** parcours de bout en bout                            | L459-461    | 1 cas par parcours → ligne 1 du décompte                     |
| H6  | **19** règles de gestion                                  | L407-408, L462-465 | 1 cas courant par règle                                |
| H7  | **11** de ces règles portent un seuil, une date ou un arrondi | L508-510 | 1 cas à la limite par règle concernée                        |
| H8  | **4** rôles                                               | L407-408, L466-469 | contexte de la ligne « Droits »                        |
| H9  | **7** actions interdites à contrôler                      | L466-469    | 1 cas par action interdite                                    |
| H10 | **3** flux avec d'autres logiciels                        | L407-408, L470-475 | 3 cas par flux                                          |
| H11 | **4** points de coupure (reprise après erreur)            | L476-480    | 1 cas par point de coupure                                    |
| H12 | Échéancier **30 / 40 / 30 %**                             | L398-401    | fixe la tranche suspendue à la recette                        |
| H13 | **340** factures relues par mois                          | L387, L404-406 | assiette des incidents et du volume du jeu d'essai        |

### 6.3 L'outillage (section 02, mémo)

| ID  | Hypothèse posée                                                       | Emplacement |
| --- | --------------------------------------------------------------------- | ----------- |
| H14 | Un tableur suffit **jusqu'à environ 150 cas** et deux campagnes        | L515-516, L522-527 |
| H15 | Feuille de **huit colonnes** (identifiant, règle, version, rôle, données, attendu, obtenu, preuve) | L518-522 |
| H16 | Référentiel contre-exemple de **400 cas**                              | L528-534    |
| H17 | Une saisie de congés à **4 règles** produit « une douzaine » de cas     | L488-492    |
| H18 | Un calcul de commissions à **60 règles** produit « plus de cent cinquante » cas | L488-492 |

H17 et H18 fondent le « facteur douze et demi » — voir É5.

### 6.4 Les durées et le coût unitaire (section 03) — le cœur du budget

| ID  | Hypothèse posée                                          | Emplacement |
| --- | -------------------------------------------------------- | ----------- |
| H19 | Écrire un cas rejouable : **15 minutes**                  | L550-554    |
| H20 | L'exécuter la première fois : **10 minutes**              | L550-554    |
| H21 | Le rejouer après correction : **5 minutes**               | L550-554    |
| H22 | Journée utile : **7 heures**                              | L555-557    |
| H23 | Jour chargé de temps interne : **350 €**                  | L555-557    |
| H24 | **2** cycles de correction                                | L583-586    |
| H25 | **3 cas sur 10** touchés par cycle                        | L583-586, L610-613 |
| H26 | Préparer le jeu de données : **1,5 jour**                 | L587-591, L875-879 |
| H27 | Relecture croisée des cas : **0,5 jour**                  | L592-596    |
| H28 | Réunion de décision : **0,5 jour**                        | L597-601    |
| H29 | Fourchette de chronométrage du lecteur : **8 à 25 minutes** d'écriture | L558-564 |
| H30 | Projet de contre-exemple à **8 000 € HT**                 | L642-646    |

### 6.5 Les seuils réécrits (section 04) — exemples de rédaction, pas de normes

| ID  | Hypothèse posée                                                                    | Emplacement |
| --- | ---------------------------------------------------------------------------------- | ----------- |
| H31 | Affichage < **2 s** pour **9 chargements sur 10**, sur **200** chargements mesurés  | L737-739    |
| H32 | **6** écrans de saisie, **200 %** de zoom, **2 heures** de vérification humaine     | L752-754    |
| H33 | Plafond de remise à **8 %**                                                         | L825-828    |
| H34 | Double validation en moins de **2 secondes** (famille « répétée »)                  | L840-843    |

### 6.6 Le jeu d'essai (section 05)

| ID  | Hypothèse posée                                                | Emplacement |
| --- | -------------------------------------------------------------- | ----------- |
| H35 | Colonne « type de client » : **7** valeurs distinctes           | L803-805    |
| H36 | Colonne « mode de facturation » : **4** valeurs distinctes      | L803-805    |

### 6.7 Les trois incidents (section 06) et les deux mesures (section 07)

L'article annonce lui-même deux de ces hypothèses à découvert : « Deux valeurs
y sont choisies pour l'exemple, en plus des hypothèses de la section 03 : la
part de factures touchées par l'erreur d'arrondi, fixée à 12 %, et l'écart
moyen sur chacune, fixé à 34 €. Le reste se déduit des nombres déjà posés »
(L893-897). C'est presque exact — six autres valeurs sont posées, pas déduites.

| ID  | Hypothèse posée                                                          | Emplacement | Annoncée par l'article ? |
| --- | ------------------------------------------------------------------------ | ----------- | ------------------------ |
| H37 | **12 %** des factures touchées par l'erreur d'arrondi                     | L894-896    | Oui, explicitement       |
| H38 | Écart moyen de **34 €** par facture                                       | L895-896    | Oui, explicitement       |
| H39 | L'erreur passe inaperçue **trois mois**                                   | L907-909    | Non                      |
| H40 | Reprise : **1 jour** responsable facturation + **1 jour** contrôleuse de gestion | L909-913 | Non                  |
| H41 | Nadia n'obtient que **2 jours** au lieu de 3,7                            | L945-947    | Non                      |
| H42 | Parmi les 23 cas non joués : **4 des 6** parcours critiques et **les 9** cas de flux | L950-952 | Non                |
| H43 | L'export comptable rejette **62 écritures**                               | L952-953    | Non                      |
| H44 | Contrôleuse de gestion et comptable : **trois quarts de journée** chacun  | L953-955    | Non                      |
| H45 | La clôture sort avec **quatre jours** de retard                           | L955-956    | Non                      |
| H46 | **7** règles apparaissent pendant l'exécution                             | L1001-1005  | Non                      |
| H47 | **37** anomalies trouvées en recette, **8** en production                 | L995, L1011-1014 | Non                 |
| H48 | Fenêtre d'observation du taux d'échappement : **60 jours**                | L992, L1011-1012 | Non                 |

Dix de ces douze valeurs — H39 à H48 — ne sont **pas** annoncées par la phrase
de L893-897, qui n'en déclare que deux (H37 et H38). La phrase reste
vraie dans son intention (les deux valeurs les plus lourdes sont bien
déclarées), mais « le reste se déduit des nombres déjà posés » est optimiste :
une partie du reste est posée, pas déduite. Signalé ici sans en faire un écart
séparé, parce que rien de faux n'est publié et que le paragraphe qui précède
range déjà l'ensemble sous « exemple construit ».

### 6.8 Ce qui **n'est pas** une hypothèse

- Le **25 000 € HT** du projet : repris de la grille publiée (F35, §4.3).
- Le calendrier du **1er au 30 mai 2027** (L704-708) : ce n'est pas une
  hypothèse mais un **fait calendaire vérifiable**, recalculé au §7.6.
- Les **56 cas**, les **6,2 jours**, les **2 170 €**, les **28 dossiers**, les
  **73 %**, les **17,8 %**, les **4 182 €** : ce sont des **calculs** (§7).

---

## 7. Registre des CALCULS — refaits à la main

Tous les résultats ci-dessous ont été recalculés indépendamment, en Python,
sans lire les tests colocalisés. Le script est reproduit au §13. Chaque étape
est écrite pour qu'on puisse la refaire à la calculatrice.

### 7.1 Le décompte des 56 cas (section 02)

```
Parcours de bout en bout   : 6 parcours × 1 cas                      =  6
Règles de gestion          : 19 règles × 1 cas courant               = 19
                           + 11 règles à seuil × 1 cas à la limite   = 11   → 30
Droits                     : 7 actions interdites × 1 cas            =  7
Flux                       : 3 flux × 3 cas (accepté/rejeté/rejoué)  =  9
Reprise après erreur       : 4 points de coupure × 1 cas             =  4
                                                            TOTAL    = 56
```

6 + 30 + 7 + 9 + 4 = **56**. La page l'écrit en toutes lettres : « Six plus
trente, plus sept, plus neuf, plus quatre : 56 cas » (L486-487). **Conforme.**

Entrées : H5, H6, H7, H9, H10, H11. Aucun fait sourcé n'intervient.

### 7.2 Le budget de la campagne : 6,2 jours et 2 170 € (section 03)

```
Écrire les cas          : 56 × 15 min = 840 min = 14 h 00
Exécuter une 1re fois   : 56 × 10 min = 560 min =  9 h 20
Cas touchés par cycle   : 56 × 0,30 = 16,8 → arrondi à 17
Rejouer après correction: 2 cycles × 17 cas × 5 min = 170 min = 2 h 50
                          ──────────────────────────────────────────
Sous-total exécution    : 840 + 560 + 170 = 1 570 min = 26 h 10
Conversion en jours     : 1 570 ÷ 60 = 26,1666… h ; ÷ 7 = 3,738095… j
                          arrondi au dixième → 3,7 j
Postes en jours pleins  : 1,5 (jeu de données) + 0,5 (relecture croisée)
                          + 0,5 (réunion de décision) = 2,5 j
TOTAL                   : 3,7 + 2,5 = 6,2 jours
Coût                    : 6,2 × 350 € = 2 170 €
```

**Conforme** à la ligne « Total » du tableau (L602-606) et aux trois lignes de
détail : « 840 min, soit 14 h », « 560 min, soit 9 h 20 », « 170 min, soit
2 h 50 ».

Entrées : H19 à H28 et le résultat du §7.1. **Aucun fait sourcé n'intervient
dans ce budget** — c'est entièrement un empilement d'hypothèses. C'est
exactement ce que l'article annonce à L546-549.

### 7.3 L'écart d'arrondi de treize euros (section 03)

L'article publie son propre arrondi, ce qui est rare et mérite d'être noté :

```
Sans arrondi : 1 570 ÷ 60 ÷ 7        = 3,738095…  → publié « 3,74 jours »
               3,738095… + 2,5       = 6,238095…  → publié « 6,24 jours »
               6,238095… × 350       = 2 183,33 € → publié « 2 183 € »
Écart        : 2 183,33 − 2 170,00   =    13,33 € → publié « treize euros »
```

**Conforme** (L613-618). L'article dit « treize euros de plus que la ligne
affichée » : c'est bien 13,33 €, arrondi à l'unité inférieure dans le sens
défavorable à l'agence.

### 7.4 La part du budget projet : 8,7 % (section 03)

```
Lecture arrondie    : 2 170,00 ÷ 25 000 × 100 = 8,68 %  → 8,7 %
Lecture non arrondie: 2 183,33 ÷ 25 000 × 100 = 8,733 % → 8,7 %
```

**Conforme** : « Dans les deux lectures, ces jours pèsent 8,7 % du budget du
projet » (L618-619). Les deux lectures retombent bien sur le même dixième.

### 7.5 La sensibilité au temps d'écriture : 5,3 à 7,6 jours (section 03)

Même chaîne que §7.2, en remplaçant H19 (15 min) :

```
8 min  : 56×8 + 56×10 + 170 = 448 + 560 + 170 = 1 178 min
         1 178 ÷ 60 ÷ 7 = 2,8048…  → 2,8 j ; + 2,5 = 5,3 jours
15 min : (référence)                            3,7 j ; + 2,5 = 6,2 jours
25 min : 56×25 + 560 + 170 = 1 400 + 730 = 2 130 min
         2 130 ÷ 60 ÷ 7 = 5,0714…  → 5,1 j ; + 2,5 = 7,6 jours
```

**Conforme** : « ce qui fait passer le budget de 5,3 à 7,6 jours » (L562-563).

### 7.6 Le seuil de 2 % du CCAG-TIC (section 04)

C'est le seul calcul de l'article qui combine un **fait sourcé** (F5, F6 : 2 %,
8 h – 18 h, lundi-vendredi, fériés exclus) et de l'**arithmétique calendaire**.
Aucune hypothèse n'y entre.

**Par jour ouvré**
```
Journée d'ouverture : 18 h − 8 h = 10 h = 600 min
2 % de 600 min      = 12 minutes
```
**Conforme** : « dont 2 % font 12 minutes » (L696-698) et « 12 minutes tolérées
par jour ouvré compté » (L744, L708-709).

**Borne haute de la fenêtre de trente jours**

Nombre de jours de semaine dans trente jours consécutifs, selon le jour de
départ — recalculé jour par jour :

| Départ un… | lundi | mardi | mercredi | jeudi | vendredi | samedi | dimanche |
| ---------- | ----- | ----- | -------- | ----- | -------- | ------ | -------- |
| Jours de semaine | 22 | 22 | 22 | 22 | **21** | **20** | **21** |

**Conforme, exactement**, à la phrase de l'article : « trente jours consécutifs
en comptent 22 s'ils commencent un lundi, un mardi, un mercredi ou un jeudi,
21 un vendredi ou un dimanche, 20 un samedi » (L699-702).

```
22 jours × 10 h            = 220 heures
220 h × 60                 = 13 200 minutes
13 200 × 2 %               = 264 minutes = 4 h 24
```
**Conforme** : « 22 × 10 = 220 heures, soit 13 200 minutes, dont 2 % font
264 minutes — 4 h 24 » (L702-704).

**Borne basse illustrée : 1er – 30 mai 2027**

```
1er mai 2027 est un SAMEDI  → 20 jours de semaine sur la fenêtre de 30 jours
Pâques 2027 = 28 mars 2027 (dimanche)
Ascension   = Pâques + 39 j = jeudi 6 mai 2027        → jour ouvré, à retirer
Pentecôte   = Pâques + 49 j = dimanche 16 mai 2027
Lundi de P. = Pâques + 50 j = lundi 17 mai 2027       → jour ouvré, à retirer
1er mai 2027 : samedi  → déjà hors décompte
8 mai 2027   : samedi  → déjà hors décompte
Jours ouvrés nets = 20 − 2 = 18
18 × 600 min = 10 800 min ; × 2 % = 216 min = 3 h 36
```
**Conforme** : « il n'en reste que 20 ; l'Ascension le 6 et le lundi de
Pentecôte le 17 en retirent deux, soit 18 jours ouvrés et 3 h 36 » (L704-708).

La précision est réelle : le 1er et le 8 mai 2027 tombent tous deux un samedi,
et l'article ne les compte pas — il retire bien **deux** fériés, pas quatre.
Le conseil qui suit — « Écrivez la règle des 12 minutes par jour ouvré plutôt
que ce total figé » — est la conséquence directe de la fourchette 3 h 36 –
4 h 24.

### 7.7 L'échantillonnage de la sonde (section 04)

```
Sonde toutes les 5 minutes, coupure de 3 minutes.
La coupure est vue si et seulement si un appel tombe dedans.
Sur les 5 minutes de décalages de départ possibles :
  3 laissent un appel tomber dans la coupure  → détectée
  5 − 3 = 2 la laissent passer                → invisible
```
**Conforme** : « sur cinq minutes de départs possibles, deux la laissent
passer » (L714-717). Le pas de 60 secondes annoncé plus haut (L711-713, L744)
donne, lui, un point par minute : chaque point manquant vaut une minute.

### 7.8 Le jeu d'essai : 28 dossiers et 8,2 % (section 05)

```
Valeurs à représenter : 7 (type de client) + 4 (mode de facturation) = 11
Dossiers si l'on combine        : max(7 ; 4) = 7
Dossiers si l'on croise tout    : 7 × 4      = 28
Part d'un mois réel             : 28 ÷ 340   = 0,0823529…
                                  × 100      = 8,235 %  → 8,2 %
```
**Conforme** : « Onze valeurs à représenter, donc : sept dossiers suffisent si
vous les combinez, vingt-huit s'il faut jouer chaque croisement » (L805-808),
« 7 × 4 = 28 dossiers » (L807-808) et « Vingt-huit dossiers représentent 8,2 %
d'un mois réel à 340 factures » (L853-855).

Entrées : H35, H36, H13. Le test colocalisé porte un commentaire daté du
30/08/2026 expliquant qu'une version antérieure verrouillait un jeu d'essai de
40 dossiers **qui ne sortait d'aucun calcul du guide**, et qu'il a été corrigé.
Le test interdit désormais le retour du littéral « 40 dossiers ».

### 7.9 Les deux mesures de fin de campagne (section 07)

```
Couverture des règles :
  numérateur   = 19 règles écrites, chacune couverte par au moins un cas
  dénominateur = 19 + 7 règles découvertes en exécution = 26
  19 ÷ 26 = 0,730769…  → 73,08 %  → publié 73 %

Taux d'échappement :
  8 anomalies en production sur 60 jours
  ÷ (37 en recette + 8 en production) = 8 ÷ 45 = 0,17777…
  → 17,78 %  → publié 17,8 %
  Complément : 37 ÷ 45 = 82,2 %  → « quatre anomalies sur cinq »

Coût de la remise à niveau du dénominateur :
  7 règles découvertes × (15 min d'écriture + 10 min d'exécution) = 7 × 25
  = 175 minutes = 2 h 55
```
**Conforme** aux trois valeurs publiées : « 19 ÷ 26 = 73 % », « 8 ÷ (37 + 8) =
17,8 % » (L990-995), « 7 × 25 minutes, soit 2 h 55 à ajouter au budget de la
section 03 » (L1007-1009).

Entrées : H46, H47, H48, H19, H20. Le garde-fou éditorial qui accompagne ces
deux mesures — « Il n'existe pas de seuil de référence publiable » (L1016-1017)
— est verrouillé par test, et il est cohérent avec le fait qu'aucune source du
corpus ne publie de seuil.

### 7.10 Les trois incidents (section 06)

**Incident 1 — la règle d'arrondi jamais jouée**
```
Factures touchées : 340 × 12 % = 40,8 → arrondi à 41 factures/mois
Avoirs sur 3 mois : 41 × 34 € × 3 = 4 182 €
Factures à reprendre : 41 × 3 = 123
Reprise : 1 j + 1 j = 2 jours-personne × 350 € = 700 €
```
**Conforme** (L905-914). Note de méthode : l'article arrondit le **nombre de
factures** avant de multiplier (41, pas 40,8), ce qui est le bon ordre — on
n'émet pas 0,8 facture. En multipliant d'abord, on obtiendrait 4 161,60 €.
L'écart de 20,40 € tient entièrement à cet arrondi, et le choix est le plus
défavorable au lecteur, donc prudent.

**Incident 2 — personne ne notifie la décision**
```
Tranche suspendue : 25 000 € × 30 % = 7 500 € HT
```
**Conforme** (L400-401, L932-934). Ce montant n'est pas une perte comptable :
l'article écrit précisément « la tranche de 7 500 € cesse d'être un levier tant
qu'aucune décision n'est écrite » — c'est un levier, pas une créance perdue.
La partie juridique de cet incident repose sur F8 et F9.

**Incident 3 — la testeuse n'a pas eu ses jours**
```
Part de Nadia dans le budget : 3,7 jours (écriture + exécution + rejeu)
Jours obtenus : 2 → 2 × 7 h × 60 = 840 minutes
Coût d'un cas écrit puis exécuté : 15 + 10 = 25 minutes
Cas joués : 840 ÷ 25 = 33,6 → 33 cas
Cas jamais joués : 56 − 33 = 23
Reprise après l'échec de l'export : 0,75 j × 2 personnes = 1,5 jour-personne
                                    1,5 × 350 € = 525 €
```
**Conforme** (L942-956). Le « 33 cas exécutés, 33 réussis » de la section 01
(L380-381) est le même nombre, et 33 + 23 = 56 boucle avec le §7.1.

### 7.11 Le rejeu : 4 h 40, 33 h 20, 21 h 30 (sections 02, 03, 08)

```
Campagne suivante, 56 cas rejoués : 56 × 5 min = 280 min = 4 h 40
Économie par rapport à la 1re fois : 1 570 − 280 = 1 290 min = 21 h 30
Référentiel de 400 cas             : 400 × 5 min = 2 000 min = 33 h 20
```
**Conforme** : « 4 h 40 contre 26 h 10 la première fois : 21 h 30 économisées »
(L630-633), « 33 h 20 de rejeu par campagne, contre 4 h 40 pour les 56 cas »
(L530-534), « la version suivante se vérifie en 4 h 40 de rejeu au lieu de
26 h 10 » (L1099-1102).

### 7.12 Le contre-exemple à 8 000 € HT — **le calcul en écart**

C'est le seul calcul de l'article qui ne retombe pas sur ses propres nombres.

```
Ce que l'article publie : « Transposés tels quels […] ils coûteraient 2 100 €
                            de temps interne, soit un quart du développement. »
Recalcul à partir du tableau de la section 03 :
  6,2 jours × 350 € = 2 170 €
  2 170 ÷ 8 000 × 100 = 27,1 %

Origine probable du 2 100 € : 6,0 jours × 350 € = 2 100 €, c'est-à-dire le
« six jours » du titre voisin (« Six jours de travail ne tiennent pas dans six
jours de calendrier », L623) et non la ligne « Total » du tableau.
  2 100 ÷ 8 000 × 100 = 26,25 %
```

Dans les deux lectures, la charge dépasse le quart. Voir É1 et É2. **La page
n'a pas été corrigée** : hors territoire.

### 7.13 Contrôles de bouclage

| Contrôle                                                            | Résultat |
| ------------------------------------------------------------------- | -------- |
| 6 + 30 + 7 + 9 + 4 = 56 (§7.1) et 33 + 23 = 56 (§7.10)              | bouclé   |
| 3,7 + 2,5 = 6,2 et 6,2 × 350 = 2 170 (§7.2), repris en hero (L190)  | bouclé   |
| 4 h 40 (§7.11) repris en hero (L191) et en section 08 (L1100-1102)  | bouclé   |
| 8 hypothèses de l'atelier, 10 compteurs, 7 verdicts (§8.2)          | bouclé   |
| 30 % + 40 % + 30 % = 100 % (L399-400)                               | bouclé   |
| FAQ : 56 × 5 % = 2,8 → « près de trois cas non conformes » (L144)   | bouclé   |
| 8 colonnes annoncées (L518-522), 8 items énumérés                   | bouclé   |
| 4 statuts annoncés (L1055-1058), 4 énumérés                         | bouclé   |

---

## 8. Ce que les tests colocalisés verrouillent

Les tests ne sont pas un dossier de preuves, mais ils disent quels chiffres ne
peuvent pas bouger sans casser la suite. Cette liste indique donc **où un
correcteur doit regarder**, et surtout **ce qui n'est protégé par rien**.

### 8.1 Chiffres verrouillés par `content-quality.test.ts`

| Test                                                        | Chiffres gelés                                                                                 |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `recalcule le budget de la campagne cas par cas`            | 17 cas/cycle, 1 570 min, « 26 h 10 », 3,7 j, 6,2 j, « 2 170 », 8,7 %, « 2 183 », « treize euros » |
| `recalcule la sensibilité annoncée sur le temps d'écriture` | 5,3 / 6,2 / 7,6 jours                                                                            |
| `recalcule le rejeu de la campagne suivante`                | 280 min, « 4 h 40 contre 26 h 10 »                                                               |
| `recalcule le décompte des 56 cas ligne à ligne`            | 6, 30, 7, 9, 4, 56, et la phrase en toutes lettres                                               |
| `recalcule le seuil de 2 % du CCAG-TIC minute par minute`   | 13 200 min, 264 min, 4 h 24, 216 min, 3 h 36, « 12 minutes par jour ouvré », « Au maximum, donc » |
| `recalcule les deux mesures de fin de campagne`             | 19 ÷ 26 = 73 %, 8 ÷ (37 + 8) = 17,8 %, absence de seuil de référence                              |
| `recalcule le volume du jeu d'essai contre un mois réel`    | 7 × 4 = 28, 8,2 %, et **interdiction** du littéral « 40 dossiers »                                |
| `raconte trois incidents portant chacun un montant`         | 41, 4 182 €, 123, 700 €, 23/56, 525 €, 7 500 €                                                   |
| `cite le CCAG-TIC avec ses délais réels et son périmètre`   | arrêté du 30 mars 2021, art. 32 et 33, trente jours, 8 h – 18 h, « réputées admises », « imputables à chaque élément de matériel », URL Légifrance |
| `cadre l'accessibilité sans vendre un audit inutile`        | 250 M€, 28 juin 2025, absence de tout montant d'amende                                           |
| `porte une réponse directe courte et chiffrée`              | 56 cas, 6,2 jours, 2 170 €, 25 000 € HT, et 120-180 mots                                         |
| `ne porte qu'un bloc de transparence…`                      | « relus le 28 août 2026 », « à revérifier tous les douze mois », un seul CTA en ligne             |
| `garde l'atelier local, bloquant et sans persistance`       | 8 points, 10 compteurs, 7 issues, absence de `fetch`/`localStorage`/champ libre                   |

### 8.2 Ce que `acceptance-readiness.test.ts` verrouille

Le moteur de l'atelier (`acceptance-readiness.ts`) est une fonction pure :
`assessAcceptanceReadiness(gates, facts)`. Sept verdicts dans un ordre de
précédence strict, vérifié par 441 lignes de tests :

```
STOP_PREPARATION          ← au moins un point « bloqué »
REWRITE_CASE              ← au moins un point « non renseigné »
COMPLETE_CASE             ← au moins un point « partiel »
MEASURE_CAMPAIGN          ← compteur absent, non entier, négatif, ou
                            cas critiques réussis > cas critiques prévus
FIX_BEFORE_DECISION       ← cas critique non prouvé, ou anomalie bloquante
REVIEW_RESIDUAL_RISK      ← échec, majeure, mineure, réserve, bloqué,
                            non exécuté ou preuve absente > 0
CANDIDATE_FOR_ACCEPTANCE  ← tout le reste
```

Ce qui compte ici, du point de vue des preuves : **aucun de ces sept verdicts
n'accepte le logiciel**. Le verdict le plus favorable dit explicitement « Ce
résultat ne garantit pas l'absence de défaut et n'accepte pas le logiciel
automatiquement » (`acceptance-readiness.ts` L339), et le test l'exige. Rien
dans l'atelier ne prétend à une portée normative ou contractuelle. Aucune
donnée ne sort de la page : ni `fetch`, ni `localStorage`, ni champ texte, ni
`<textarea>` — vérifié par test.

### 8.3 Chiffres publiés que **rien** ne verrouille

Point d'attention pour la prochaine passe : ces valeurs peuvent dériver sans
qu'aucun test ne s'en aperçoive.

- **2 100 €** et « un quart du développement » (encadré vert, section 03) —
  et c'est précisément là qu'est É1 ;
- « **facteur douze et demi** », « une douzaine », « plus de cent cinquante »
  (section 02) — É5 ;
- « **environ 150 cas** » et « **400 cas** » du mémo (le 33 h 20 est vérifié,
  mais pas le seuil de bascule à 150) ;
- « **62 écritures** », « **quatre jours de retard** », « **trois quarts de
  journée** » (incident 3) — seul le 525 € qui en découle est verrouillé ;
- les seuils réécrits du tableau de la section 04 (2 s, 9/10, 200 chargements,
  6 écrans, 200 % de zoom, 2 heures) ;
- « **1 tournée, 2 points de livraison, 1 facture** » et « **plafond de 8 %** »
  (tableau de la section 05).

---

## 9. Frontières et réserves publiées

Ce que l'article refuse explicitement de dire — vérifié présent dans la page,
et cohérent avec le corpus.

| Réserve publiée                                                                                          | Emplacement            | Cohérence avec le corpus                                                              |
| -------------------------------------------------------------------------------------------------------- | ---------------------- | --------------------------------------------------------------------------------------- |
| « Aucun seuil universel » (repère du hero : « Seuil universel · Aucun »)                                  | L192                   | Aucune source du corpus ne publie de seuil de réussite.                                  |
| « Il n'existe pas de seuil de référence publiable » pour le taux d'échappement                            | L1016-1017             | Idem. Verrouillé par test.                                                               |
| Les délais du CCAG-TIC « ne s'appliquent qu'aux marchés qui s'y réfèrent »                                | L330, L1127-1128       | Nature d'un CCAG. Verrouillé par test.                                                   |
| « Ce guide ne permet pas de le dire » sur la portée contractuelle d'une recette réussie                   | L149-151 (FAQ)         | Cohérent avec F8-F10.                                                                    |
| « ne commandez pas d'audit de conformité pour ce projet-là » hors des deux régimes                        | L776-778               | Cohérent avec F22-F28 : le champ des deux régimes est borné.                             |
| « aucun outil automatique ne détermine seul la conformité »                                               | L778-781               | F21, littéral chez S5.                                                                   |
| « Les montants du cas construit sont des hypothèses annoncées comme telles »                              | L330                   | §6.                                                                                      |
| « le cas construit et l'atelier local ne testent pas votre application »                                  | L329-330               | §8.2.                                                                                    |
| « en dessous d'un certain budget cette campagne est une erreur »                                          | L639-658, L1140-1142   | Passage anti-commercial, verrouillé par test.                                            |
| « ils ne sont pas vendus, ils sont à vous » (les jours de recette)                                        | L619-620               | Verrouillé par test.                                                                     |
| « seul un devis signé engage »                                                                            | L1144-1145             | Verrouillé par test.                                                                     |

Le bloc **Transparence** (L1134-1146) déclare le conflit d'intérêts : « Hagnéré
Code développe des applications métier sur mesure et perçoit des honoraires si
vous nous confiez un projet — y compris celui que cette page vous apprend à
vérifier. » Un seul bloc de transparence, un seul CTA en ligne, vérifié par
test.

---

## 10. Conformité à la règle d'or « zéro invention »

Contrôlé ligne à ligne sur la page publiée le 30 août 2026.

| Interdit par `CLAUDE.md`                                  | État sur cette page                                                                                                     |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Avis, témoignage ou citation attribuée à un client         | **Aucun.** Nadia et Karim sont annoncés comme un cas construit, deux fois, dont une fois verrouillée par test.             |
| Référence, logo ou nom de client                           | **Aucun.** Aucune entité du groupe n'est nommée dans cette page.                                                          |
| Métrique portant sur des clients                           | **Aucune.** Tous les chiffres sont soit sourcés (§5), soit posés (§6), soit dérivés (§7).                                 |
| Historique d'exploitation                                  | **Aucun.** Aucun « depuis X années », aucun nombre de projets livrés.                                                     |
| Effectif ou ancienneté d'équipe                            | **Aucun.** Rappel factuel : Hagnéré Code compte sept personnes et a été créée le 30 septembre 2025 — la page ne l'évoque pas, ce qui est le bon choix. |
| Engagement générique (SLA, garantie, remise)               | **Aucun.** Le seul seuil de disponibilité cité est celui du CCAG-TIC, présenté comme un modèle public opposable **à d'autres**, avec sa réserve de champ. |

Le test `ne laisse passer aucune fausse certitude ni faux vécu` interdit par
motif, sur la page, l'image OG, le moteur, l'outil et les trois SVG :
`notre client`, `chez un client`, `cas client`, `nous garantissons`, `nous
avons livré`, `zéro risque`, `conforme RGPD`, `certifié ISTQB`, `100 %`,
`transformation digitale`. Aucun n'apparaît.

---

## 11. Relecture humaine — état réel (charte §13)

**Aucun lecteur humain extérieur n'a relu la version publiée le 30 août 2026,
à la connaissance de ce dossier.**

Ce qui existe :

- l'ancienne version de ce dossier mentionne « la revue humaine globale du
  7 août 2026 [qui] a ouvert ce guide dans le registre central ». Cette revue
  est **antérieure de trois semaines** à la réécriture (page réécrite les 28 et
  30 août 2026, §1.2) : elle ne porte pas sur le texte publié aujourd'hui ;
- les contre-audits et relectures évoqués dans le contexte de cette passe ont
  été conduits par des agents. La charte est explicite : « Une relecture par
  des agents n'est jamais présentée comme un test réalisé par de vrais
  dirigeants. »

Ce qui n'existe pas, et qui n'est donc pas revendiqué : aucun test lecteur,
aucun panel, aucune validation éditoriale humaine sur cette version. **Le
statut maximal atteignable sans cette relecture est « prêt pour revue
humaine »**, sauf délégation explicite du commanditaire, qui ne réduirait
aucun seuil.

Ce dossier ne peut pas non plus se prononcer sur la scorecard du §13 de la
charte : noter des axes reviendrait à s'auto-valider, et un dossier de preuves
n'est pas un audit éditorial.

---

## 12. Risques résiduels et ce qu'il reste à faire

Par ordre de gravité pour une mise en campagne payante.

1. **É1 — le 2 100 € de l'encadré vert.** C'est le seul écart arithmétique de
   la page, et il est dans un passage à forte visibilité, celui qui déconseille
   la prestation. Un contradicteur qui refait 6,2 × 350 le trouve en dix
   secondes. À corriger par la personne compétente : soit 2 170 €, soit
   « environ 2 200 € », en réaccordant « un quart » (27,1 %). Aucun test ne le
   protège aujourd'hui ; en ajouter un serait le bon geste.
2. **É3 — le localisateur de la licence LGPL v3.** Le fait est vrai ; l'URL
   citée ne le porte pas. Remplacer ou compléter par
   `https://www.squashtm.com/en/source-code`.
3. **É4 — le point de départ des trente jours du CCAG-TIC.** Reformuler « après
   vérification d'aptitude » en « pour procéder à la vérification d'aptitude et
   notifier sa décision, à compter de la notification que les prestations sont
   prêtes ou du procès-verbal de mise en ordre de marche ».
4. **É8 / N1-N2 — les deux liens ISO en 403.** Sur un guide de traçabilité, un
   lien mort vers une norme payante affaiblit tout le reste. Documenter le
   blocage dans l'entrée, ou basculer sur une référence accessible.
5. **É6 — l'énumération de l'article 47.** Ajouter le 3°, ou remplacer « Elle
   vise » par « Elle vise notamment ».
6. **É5 — le facteur douze et demi.** Marquer les deux bornes comme des
   illustrations, comme le fait déjà la section 03 pour ses durées.
7. **É7 — la date de relecture des sources.** Soit dater les douze entrées de
   `legalSources` une à une, soit ramener la phrase de transparence au
   sous-ensemble réellement daté. En l'état, la phrase promet plus que les
   entrées ne portent.
8. **Le CCAG-TIC non lu sur Légifrance.** Deux recueils tiers concordants, ce
   n'est pas la source primaire. Ouvrir le PDF officiel et remplacer C1-C4 par
   un localisateur Légifrance dans une prochaine passe.
9. **Les chiffres non verrouillés (§8.3).** Six familles de valeurs peuvent
   dériver sans qu'aucun test ne s'en aperçoive.
10. **La relecture humaine (§11).** Bloquant pour tout statut supérieur à
    « prêt pour revue humaine ».

Rien, dans ces dix points, ne touche à la thèse de l'article ni à ses
conclusions. Le décompte des cas, le budget en jours, la réécriture des seuils
et les deux mesures tiennent, et se refont avec les nombres du lecteur.

---

## 13. Journal de la reconstitution — commandes exactes

Tout ce qui suit a été exécuté le **30 août 2026** dans
`/Users/quentinhagnere/Development/HAGNERECODE/Hagnere-Code`.

### 13.1 Empreintes et dates

```sh
for f in src/app/guides/plan-recette-application-metier/page.tsx \
         src/app/guides/plan-recette-application-metier/content-quality.test.ts \
         src/app/guides/plan-recette-application-metier/acceptance-readiness.ts \
         src/app/guides/plan-recette-application-metier/acceptance-readiness.test.ts \
         src/app/guides/plan-recette-application-metier/acceptance-readiness-tool.tsx \
         src/app/guides/plan-recette-application-metier/opengraph-image.tsx; do
  printf "%s  " "$(stat -f '%Sm' -t '%Y-%m-%d %H:%M' "$f")"; shasum -a 256 "$f";
done
```

### 13.2 Tests et temps de lecture

```sh
npx vitest run src/app/guides/plan-recette-application-metier
# → Test Files 2 passed (2) · Tests 80 passed (80)

npx tsx scripts/measure-guide-readtime.mjs --check plan-recette-application-metier
# → OK  plan-recette-application-metier   mesuré 21 min   publié 21 min
```

### 13.3 Recalcul indépendant

Script complet, à recopier tel quel. Il ne lit ni la page ni les tests : il
part uniquement des hypothèses du §6 et des faits du §5.

```python
# Décompte des cas
parcours, regles, droits, flux, reprise = 6, 19 + 11, 7, 3 * 3, 4
assert parcours + regles + droits + flux + reprise == 56

# Budget
ecr, exe = 56 * 15, 56 * 10
touched = round(56 * 0.3)                  # 16,8 → 17
rej = 2 * touched * 5
tot = ecr + exe + rej                       # 1 570 min
assert (ecr, exe, touched, rej, tot) == (840, 560, 17, 170, 1570)
assert (tot // 60, tot % 60) == (26, 10)    # 26 h 10
jours = tot / 60 / 7                        # 3,738095…
assert round(jours, 2) == 3.74 and round(jours, 1) == 3.7
assert round(jours, 1) + 2.5 == 6.2
assert (round(jours, 1) + 2.5) * 350 == 2170
assert round((jours + 2.5) * 350) == 2183
assert round((jours + 2.5) * 350 - 2170) == 13
assert round(2170 / 25000 * 100, 1) == 8.7
assert round((jours + 2.5) * 350 / 25000 * 100, 1) == 8.7

# Sensibilité
def budget(w):
    m = 56 * w + 56 * 10 + 2 * 17 * 5
    return round(round(m / 60 / 7, 1) + 2.5, 1)
assert (budget(8), budget(15), budget(25)) == (5.3, 6.2, 7.6)

# Rejeu
assert 56 * 5 == 280 and (280 // 60, 280 % 60) == (4, 40)
assert 1570 - 280 == 1290 and (1290 // 60, 1290 % 60) == (21, 30)
assert 400 * 5 == 2000 and (2000 // 60, 2000 % 60) == (33, 20)

# CCAG-TIC : 2 %
assert 10 * 60 * 0.02 == 12
assert 22 * 600 == 13200 and 13200 * 0.02 == 264 and (264 // 60, 264 % 60) == (4, 24)
assert 18 * 600 == 10800 and 10800 * 0.02 == 216 and (216 // 60, 216 % 60) == (3, 36)

# Calendrier mai 2027
import datetime as dt
def easter(y):
    a, b, c = y % 19, y // 100, y % 100
    d, e = b // 4, b % 4
    f, g = (b + 8) // 25, (b - (b + 8) // 25 + 1) // 3
    h = (19 * a + b - d - g + 15) % 30
    i, k = c // 4, c % 4
    l = (32 + 2 * e + 2 * i - h - k) % 7
    m = (a + 11 * h + 22 * l) // 451
    return dt.date(y, (h + l - 7 * m + 114) // 31, ((h + l - 7 * m + 114) % 31) + 1)
E = easter(2027)
assert E == dt.date(2027, 3, 28)
assert E + dt.timedelta(39) == dt.date(2027, 5, 6)    # Ascension, jeudi
assert E + dt.timedelta(50) == dt.date(2027, 5, 17)   # lundi de Pentecôte
win = [dt.date(2027, 5, 1) + dt.timedelta(n) for n in range(30)]
assert dt.date(2027, 5, 1).weekday() == 5             # samedi
assert sum(1 for d in win if d.weekday() < 5) == 20
assert 20 - 2 == 18

# Jeu d'essai
assert 7 * 4 == 28 and round(28 / 340 * 100, 1) == 8.2

# Mesures
assert round(19 / 26 * 100) == 73
assert round(8 / 45 * 100, 1) == 17.8
assert 7 * 25 == 175 and (175 // 60, 175 % 60) == (2, 55)

# Incidents
imp = round(340 * 0.12)                     # 40,8 → 41
assert imp == 41 and imp * 34 * 3 == 4182 and imp * 3 == 123
assert 2 * 350 == 700
assert 2 * 7 * 60 // 25 == 33 and 56 - 33 == 23
assert 1.5 * 350 == 525
assert 25000 * 0.30 == 7500

# Le calcul en écart (É1)
assert 6.2 * 350 == 2170                    # et non 2 100
assert round(2170 / 8000 * 100, 1) == 27.1  # et non « un quart »
```

Toutes ces assertions passent. Aucune ne contredit la page, **sauf les deux
dernières**, qui constituent É1 et É2.

### 13.4 Sources ouvertes ce jour

Dix des douze sources citées (§4.1), cinq pages de corroboration (§4.4), deux
emplacements internes du dépôt (§4.3). Deux sources citées n'ont pas pu être
rouvertes, et c'est écrit au §4.2 plutôt que simulé.

---

## 14. Ce que ce dossier ne prouve pas

Par symétrie avec ce que l'article s'interdit :

- il ne prouve pas que l'article est **juste** : il prouve que ses calculs
  retombent sur leurs entrées, que ses faits sont chez leurs sources et que ses
  hypothèses sont annoncées ;
- il ne prouve pas que les **hypothèses** du cas construit sont réalistes. Elles
  sont posées, pas mesurées, et l'article demande au lecteur de les remplacer ;
- il ne prouve rien sur l'**exploration, l'indexation ou le classement** de
  l'URL : aucune requête n'a été faite en production ;
- il ne remplace **ni le contre-audit éditorial, ni la relecture humaine**
  (§11) ;
- il ne dit rien de la **portée contractuelle** des textes cités, ce qui est
  exactement la position que tient l'article lui-même.

**Statut de ce dossier : socle de preuves reconstitué et daté du 30 août 2026,
huit écarts signalés, aucune correction appliquée à la page.**
