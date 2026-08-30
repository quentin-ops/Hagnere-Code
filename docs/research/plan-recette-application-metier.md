# Dossier de recherche — Plan de recette d'une application métier

> Slug : `plan-recette-application-metier`
> Objet : **socle de preuves de l'article réellement publié le 30 août 2026**
> Date de reconstitution du dossier : **30 août 2026**
> Date de la passe de correction : **30 août 2026, 23 h 30**
> Source de vérité : `src/app/guides/plan-recette-application-metier/page.tsx`
> et les modules qu'il importe — **pas** la version antérieure de ce dossier
> Territoire d'écriture de la passe de correction : `page.tsx`,
> `content-quality.test.ts`, ce fichier, et la seule entrée du guide dans
> `src/lib/guides.ts`. Les manifestes du dépôt n'ont pas été touchés.

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

## 0. En tête — les huit écarts, et ce qui a été fait de chacun

**Les huit écarts ont été traités le 30 août 2026 dans la page.** Le tableau
ci-dessous garde le constat d'origine, parce qu'un socle de preuves qui efface
ce qu'il a corrigé ne prouve plus rien, et lui ajoute l'issue retenue. Aucun
écart n'a été rejeté : les huit relevés étaient exacts, et chacun a été
revérifié à sa source avant d'être corrigé.

| #   | Issue retenue                     | Ce qui a changé dans la page                                                                                                                                                          |
| --- | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| É1  | CORRIGER l'article                | L'encadré vert transpose désormais **2 170 €** (6,2 × 350, la ligne « Total » du tableau) et non 2 100 €. Le titre voisin annonce la même assiette : « Les 6,2 jours de travail ne tiennent pas dans six jours de calendrier ». Un test recalcule la transposition et interdit le retour de « 2 100 ». |
| É2  | CORRIGER l'article                | « soit un quart du développement » devient « soit 2 170 ÷ 8 000 = 27,1 % du développement — plus du quart ». Le test ne gèle plus le mot : il recalcule le rapport.                        |
| É3  | CHANGER LE LOCALISATEUR           | L'entrée `legalSources` pointe vers `https://www.squashtm.com/en/source-code`, rouverte le 30/08/2026, et cite la phrase mot pour mot. L'origine « Développé en France depuis 2011 par Henix » est attribuée à `henix.com/squashtm`, nommée dans la description. Un test interdit le retour de l'ancien `href`. |
| É4  | CORRIGER l'article                | Le §06 et l'entrée `legalSources` disent maintenant que les trente jours **ne suivent pas** la vérification d'aptitude mais la couvrent, et donnent le point de départ de l'article 33.2.1. Article 33 rouvert sur Légifrance, `JORFARTI000043310747`. |
| É5  | CORRIGER l'article                | Le « facteur douze et demi », « une douzaine » et « plus de cent cinquante » sont retirés. Les deux volumes publiés se **dérivent** de la règle de la même section : 4 cas pour 4 règles sans seuil, 60 à 120 cas pour 60 règles. Un test refait la dérivation. |
| É6  | CORRIGER l'article                | Le §04 et l'entrée `legalSources` énumèrent les **quatre** catégories du I de l'article 47, le 3° compris.                                                                                 |
| É7  | CORRIGER l'article                | Les douze entrées de `legalSources` portent une date au 30/08/2026 — ou disent pourquoi elles n'en ont pas. Le bloc Transparence annonce « rouvertes une à une le 30 août 2026 » et non une relecture du 28. Un test le vérifie entrée par entrée. |
| É8  | CORRIGER l'article                | Les deux entrées ISO déclarent le **HTTP 403 du 30/08/2026**, par le lien publié comme par la plateforme de consultation en ligne. Le mot « publiquement » du §08, que ce 403 dément, est retiré. Un test exige la mention dans les deux entrées. |

Constat d'origine, conservé pour que la correction soit vérifiable :

| #   | Nature                | Où                                                | Constat                                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                           |
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
toutes sur la valeur publiée : voir §7, où chaque étape est écrite. Après
correction, les vingt-cinq opérations de l'article — les vingt-trois d'origine,
la transposition à 8 000 € et la dérivation des deux volumes de la section 02 —
retombent toutes sur leur valeur publiée.

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

Relevé du 30 août 2026, **après la passe de correction de 23 h 30**. Empreintes
SHA-256 tronquées à 16 caractères pour la lisibilité ; la commande complète est
au §13.

| Fichier                                                                    | Dernière écriture | SHA-256 (16) |
| -------------------------------------------------------------------------- | ----------------- | ------------ |
| `src/app/guides/plan-recette-application-metier/page.tsx`                   | 30/08/2026 23:24  | `9f0c07c9d683351d` |
| `src/app/guides/plan-recette-application-metier/content-quality.test.ts`    | 30/08/2026 23:26  | `536b250856e79508` |
| `src/app/guides/plan-recette-application-metier/acceptance-readiness.ts`    | 28/08/2026 17:01  | `e46fa418e39fb460` |
| `src/app/guides/plan-recette-application-metier/acceptance-readiness.test.ts` | 18/08/2026 11:17 | `d87ea3939275d51a` |
| `src/app/guides/plan-recette-application-metier/acceptance-readiness-tool.tsx` | 30/08/2026 22:24 | `b3fe00c9ecb2dc51` |
| `src/app/guides/plan-recette-application-metier/opengraph-image.tsx`        | 30/08/2026 22:34  | `5d80546ec72a7e31` |

Les deux empreintes de `page.tsx` et de `content-quality.test.ts` sont
postérieures à la reconstitution de 22 h 55 : ce sont celles de la version
corrigée, la seule que ce dossier décrit. L'atelier
(`acceptance-readiness*.ts`), l'image OG et les trois SVG n'ont pas été touchés
par la passe de correction, et leurs empreintes sont inchangées.

`src/lib/guides.ts` a été touché sur la seule entrée de ce guide :
`dateModified` passe de `2026-08-30T22:40:00+02:00` à
`2026-08-30T23:30:00+02:00`. Le fichier étant partagé avec six autres guides en
cours d'écriture, son empreinte globale n'est pas relevée ici : elle ne dirait
rien de cette passe.

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

| Commande                                                                | Sortie observée le 30/08/2026, après correction          |
| ----------------------------------------------------------------------- | -------------------------------------------------------- |
| `npx tsc --noEmit`                                                      | aucune sortie, code de retour 0                           |
| `npx vitest run src/app/guides/plan-recette-application-metier`          | 2 fichiers, **81 tests réussis**, 0 échec                 |
| `npx tsx scripts/measure-guide-readtime.mjs plan-recette-application-metier` | `4 154 mots · 21 min`                                |
| `npx tsx scripts/measure-guide-readtime.mjs --check plan-recette-application-metier` | `OK … mesuré 21 min · publié 21 min`         |
| script Python de recalcul (§13)                                         | voir §7, résultats reproduits ligne à ligne              |

Aucune commande Git n'a été lancée. Deux tests du dépôt échouent **hors de ce
territoire** et échouaient déjà avant cette passe : `guides.test.ts` sur le
guide `cahier-des-charges-saas`, et `editorial-governance.test.ts` sur le
manifeste `published-guides-current.sha256`, qui couvre les neuf guides publiés
et que six autres passes en cours désynchronisent en même temps. Réécrire ce
manifeste depuis ici reviendrait à tamponner le travail en vol des autres : il
est laissé à la passe qui clôt le corpus.

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
dateModified        : 2026-08-30T23:30:00+02:00
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

Effet de la passe de correction sur le calibre : les corrections des huit
écarts ont ajouté 106 mots (4 140 → 4 246), ce qui faisait sortir l'article de
la bande « méthode / parcours » du protocole (3 000 à 4 200 mots). Les mots ont
été repris sur cinq redites réelles, jamais sur une correction — la phrase de
la section 01 sur les seuils, qui reprenait mot pour mot le hero ; le
paragraphe de renvoi final de la section 07, dont la cible est déjà atteinte
depuis la section 04 ; la liste d'exemples de la section 05, reprise dans la
FAQ ; « en une journée » en section 05, qui entrait en tension avec la ligne
« Préparer le jeu de données — 1,5 jour » du tableau de la section 03 ; et une
formulation plus courte du point de départ des trente jours en section 06.
Mesure finale : **4 154 mots, 21 min**.

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

Dix des douze entrées de `legalSources`, plus deux localisateurs d'articles
obtenus dans la passe de correction (S1a, S1b) et la page qui porte réellement
la licence de Squash TM (S11). Pour chacune : le localisateur le plus fin
obtenu, et ce que la source établit **exactement**.

Toutes ont été **rouvertes une seconde fois** pendant la passe de correction du
30 août 2026, à 23 h, pour que chaque date écrite dans l'article soit une date
réellement faite. Le PDF de l'ISTQB a été téléchargé et lu localement — 78
pages, version v4.0.1 datée du 15 septembre 2024 en pied de chaque page —
plutôt que résumé.

| ID  | Source et URL                                                                                                                                                  | Localisateur atteint le 30/08/2026                                                                                      | Ce qu'elle établit, mot pour mot ou paraphrasé au plus près                                                                                                                                                                                                                          |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| S1  | Légifrance — arrêté du 30 mars 2021 approuvant le CCAG-TIC<br>`https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043310689`                                     | Page rouverte. Titre et référence de publication confirmés : **JORF n° 0078 du 1er avril 2021, texte n° 22**. Table des matières de l'annexe visible jusqu'à l'article 31 environ. | Le titre exact : « Arrêté du 30 mars 2021 portant approbation du cahier des clauses administratives générales des marchés publics de techniques de l'information et de la communication ». **Le corps des articles 32 et 33 n'est pas servi par cette page** — il l'est par S1a et S1b. |
| S1a | Légifrance — **article 32 de l'annexe** (CCAG-TIC)<br>`https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000043310746`                                     | Article rouvert le 30/08/2026 sur la **source primaire**. Ce localisateur manquait au dossier du matin, qui s'appuyait sur deux recueils tiers (§4.4). | 32.3 vérification d'aptitude après mise en ordre de marche ; 32.4 vérification de service régulier : « trente jours, à partir du jour de la décision positive », « la durée cumulée, sur le mois, des indisponibilités **imputables à chaque élément de matériel** ne dépasse pas **2 %** », durée d'utilisation effective « de **8 heures à 18 heures, du lundi au vendredi, jours fériés exclus** ». |
| S1b | Légifrance — **article 33 de l'annexe** (CCAG-TIC)<br>`https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000043310747`                                     | Article rouvert le 30/08/2026 sur la **source primaire**. C'est lui qui tranche É4. | 33.2.1, mot pour mot : « le délai imparti à l'acheteur pour procéder à la vérification d'aptitude et notifier sa décision est de trente jours à compter de la date de notification de l'écrit par lequel le titulaire informe l'acheteur que les prestations sont prêtes à être vérifiées ou, à défaut, de la date de notification par le titulaire du procès-verbal de mise en ordre de marche. » Décisions ouvertes à l'acheteur : décision positive de vérification d'aptitude, ajournement, rejet. **Aucune admission tacite à 33.2.1.** 33.2.2 : sept jours, et à défaut « les prestations sont réputées admises ». |
| S2  | ISTQB — CTFL Syllabus v4.0.1 (PDF)<br>`https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf`                                             | PDF téléchargé et lu, 78 pages. Table des révisions p. 3 : **« CTFL v4.0.1 — 15.09.2024 — Errata »**. Pied de page de chaque page : `v4.0.1 … 2024-09-15`. | §2.2.1 *Test Levels*, p. 28 : « Acceptance testing focuses on validation and on demonstrating readiness for deployment, which means that the system fulfills the user's business needs. Ideally, acceptance testing should be performed by the intended users. » <br>§5.1.3 *Entry Criteria and Exit Criteria*, p. 49 : « Entry criteria define the preconditions for undertaking a given activity. […] Exit criteria define what must be achieved to declare an activity completed. » <br>§5.1.5 *Test Case Prioritization*, p. 50 : priorisation par risque, par couverture ou par priorité des exigences. <br>§5.5 *Defect Management*, p. 56-57 : le rapport d'anomalie porte deux champs distincts — « **Severity** of the defect (degree of impact) on the interests of stakeholders or requirements » et « **Priority to fix** ». |
| S3  | CNIL — Tester vos applications<br>`https://www.cnil.fr/fr/tester-vos-applications`                                                                              | Page rouverte. Date affichée : **27 janvier 2020**.                                                                       | « Les métriques acceptables doivent être définies conjointement par toutes les parties avant le développement ». Les données réelles de production « ne doivent pas être utilisées pendant la phase de développement et de test ». « Construisez donc un jeu de données fictives ». Lors de l'import de configurations existantes, « pensez à anonymiser les données personnelles » qu'elles contiennent. |
| S4  | CNIL — Encadrer les développements informatiques<br>`https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques`                                 | Page rouverte. Date affichée : **14 mars 2024**.                                                                          | « Effectuer les développements informatiques et les tests dans un environnement informatique distinct de celui de la production », sur données fictives ou anonymisées. À ne pas faire : « Utiliser des données personnelles réelles pour les phases de développement et de test. Des jeux fictifs doivent être utilisés autant que possible. » Et : « Effectuer un test de non-régression et/ou une revue de code avant tout passage en production d'une mise à jour ». |
| S5  | W3C WAI — Evaluating Web Accessibility<br>`https://www.w3.org/WAI/test-evaluate/`                                                                               | Page rouverte. **Last Updated : 12 August 2026.**                                                                         | « evaluate accessibility early and throughout the development process to identify accessibility problems early, when it is easier to address them ». Et : « no tool alone can determine if a site meets accessibility standards. Knowledgeable human evaluation is required to determine if a site is accessible. » |
| S6  | Légifrance — loi n° 2005-102 du 11 février 2005, article 47<br>`https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000037388867/`                           | Article rouvert. **Version en vigueur au 8 septembre 2023.**                                                              | Le I énumère **quatre** catégories : 1° les personnes morales de droit public ; 2° les personnes morales de droit privé délégataires d'une mission de service public ou créées pour satisfaire un besoin d'intérêt général autre qu'industriel ou commercial ; 3° les personnes morales de droit privé constituées par les précédentes pour satisfaire des besoins d'intérêt général ; 4° **les entreprises dont le chiffre d'affaires excède un seuil défini par le décret en Conseil d'État** mentionné au V. Le seuil n'est donc pas dans la loi. |
| S7  | Légifrance — décret n° 2019-768 du 24 juillet 2019<br>`https://www.legifrance.gouv.fr/loda/id/JORFTEXT000038811937/`                                            | Décret rouvert, **en vigueur au 30 août 2026**.                                                                           | Article 2 : le seuil du 4° du I de l'article 47 est fixé à **250 millions d'euros**, calculés sur « la moyenne du chiffre d'affaires annuel réalisé en France au titre des trois derniers exercices comptables clos antérieurs à l'année considérée ». **Aucun critère d'effectif** ne figure dans le texte. Le régime de sanction a bougé : l'**article 8 a été abrogé par le décret n° 2026-816 du 24 août 2026**, qui a également modifié les articles 1, 5, 9 et 10. |
| S8  | EUR-Lex — directive (UE) 2019/882<br>`https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32019L0882`                                                   | Directive rouverte. Adoptée le **17 avril 2019**, publiée au JOUE le 7 juin 2019.                                          | Application des exigences aux produits et services mis sur le marché **à partir du 28 juin 2025**. Champ de l'article 2 : matériel informatique généraliste et systèmes d'exploitation, terminaux en libre-service, équipements terminaux grand public, liseuses ; services de communications électroniques, services d'accès aux médias audiovisuels, information et billetterie du transport de voyageurs, services bancaires aux consommateurs, commerce électronique, livres numériques. Le champ est celui des produits et services **destinés aux consommateurs** : les outils internes d'entreprise n'y figurent pas. |
| S9  | OWASP — ASVS<br>`https://owasp.org/www-project-application-security-verification-standard/`                                                                     | Page rouverte. Version stable : **5.0.0, publiée le 30 mai 2025** (Global AppSec EU Barcelona).                            | L'ASVS fournit une base pour tester les contrôles techniques de sécurité d'une application web, sert de métrique, guide la construction des contrôles et sert de base contractuelle. La page recommande le format versionné `v<version>-<chapitre>.<section>.<exigence>` — par exemple `v5.0.0-1.2.5` — « car les identifiants peuvent changer entre les versions ». |
| S10 | Henix — Squash TM<br>`https://www.henix.com/squashtm`                                                                                                          | Page rouverte le 30/08/2026. **N'est plus le `href` de l'entrée** : elle est nommée dans la description comme source de la seule origine du produit. | « Développé en France depuis 2011 par Henix ». Henix y est décrite comme une entreprise française spécialisée en qualité logicielle, éditrice de Squash TM. La page décrit un modèle « basé sur un modèle **open core** ». Elle **ne mentionne aucune licence** — c'est ce qui fondait É3. |
| S11 | Squash TM — page « Source code »<br>`https://www.squashtm.com/en/source-code`                                                                                   | Page rouverte le 30/08/2026. **Nouveau `href` de l'entrée `legalSources`**, en remplacement de S10 (É3). | Mot pour mot, dans la langue de la page : « SquashTM is open source software, distributed under the LGPL v3 license. » Lien de licence donné : `gnu.org/licenses/lgpl-3.0.en.html`. Dépôt : `gitlab.com/henixdevelopment/open-source/squash`. |

### 4.2 Sources citées par l'article que je **n'ai pas pu rouvrir**

Déclaré noir sur blanc, comme l'exige la charte : ces deux sources n'ont pas
été revérifiées le 30 août 2026, et je n'ai simulé aucune consultation.

| ID  | Source                                                                                          | Ce qui s'est passé                                                                                                                                          |
| --- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| N1  | ISO/IEC/IEEE 29119-3:2021 — `https://www.iso.org/standard/79429.html`                            | **HTTP 403 Forbidden.** Réessai sur l'Online Browsing Platform (`iso.org/obp/ui/en/#iso:std:iso-iec-ieee:29119:-3:ed-2:v1:en`) : **HTTP 403** également. Réessai à 23 h avec `curl` et un `User-Agent` de navigateur : **403** de nouveau. |
| N2  | ISO/IEC 25010:2023 — `https://www.iso.org/standard/78176.html`                                   | **HTTP 403 Forbidden.** Réessai sur `https://www.iso.org/fr/standard/78176.html` : **HTTP 403** également. Réessai à 23 h par `curl` et par la plateforme de consultation en ligne : **403** de nouveau. |

Le blocage a donc été constaté **deux fois, par trois voies distinctes** — le
récupérateur du dossier, `curl` avec un agent de navigateur, la plateforme de
consultation en ligne — et n'a jamais produit autre chose qu'un 403. Aucune
consultation n'a été simulée.

Ce qui a changé le 30 août 2026 à 23 h 30 : **le blocage est maintenant écrit
dans la page**, dans les deux entrées `legalSources` concernées, avec sa date
et les voies essayées. Un contradicteur qui clique et tombe sur un 403 trouve
le 403 déjà annoncé à côté du lien, au lieu de le découvrir. Et le mot
« publiquement » de la phrase du §08 — « propose publiquement des modèles de
documentation » — a été retiré : c'est le seul mot que ce 403 dément.
L'article dit désormais « propose des modèles de documentation de test ».

Une référence de remplacement a été cherchée et n'a pas été trouvée :
`iso25000.com` répond 404 sur la page ISO 25010, et la plateforme de
consultation de l'ISO répond 403. Faute de source accessible, aucun
localisateur n'a été déplacé : déplacer un lien vers un site tiers non
normatif pour maquiller un 403 serait pire que le déclarer.

Cas particulier **clos** : le dossier du matin notait que le corps des
articles 32 et 33 n'avait pas été relu sur Légifrance, et s'appuyait sur deux
recueils tiers. Les deux articles ont été **rouverts sur la source primaire**
pendant la passe de correction, à leurs localisateurs propres — S1a
(`JORFARTI000043310746`) et S1b (`JORFARTI000043310747`). Ils confirment les
recueils sur tous les points repris par l'article, et c'est S1b qui établit
É4.

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
publiée. Elles sont listées pour que la vérification soit reproductible, pas
pour tenir lieu de source primaire.

Leur statut a changé le 30 août 2026 à 23 h : les articles 32 et 33 ayant été
rouverts sur Légifrance (S1a, S1b), **C1 à C4 ne portent plus rien seules** —
elles servent désormais de contrôle croisé d'une source primaire lue, et non
de substitut à une source primaire manquante. Elles concordent avec Légifrance
sur tous les points repris par l'article, point de départ des trente jours
compris. C5 a été **promue en source citée** (S11) : c'est elle qui porte la
licence, et c'est elle que l'entrée `legalSources` pointe maintenant.

| ID  | Page                                                                                     | Sert à                                                                                                            |
| --- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| C1  | `https://www.marche-public.fr/CCAG-TIC2021/32-verifications-qualitatives.htm`             | Texte de l'article 32 : 32.3 vérification d'aptitude, 32.4 vérification de service régulier, trente jours, 2 %, « imputables à chaque élément de matériel », 8 h – 18 h du lundi au vendredi jours fériés exclus. |
| C2  | `https://www.marche-public.info/verification-service-regulier-ccag-tic-2021/`              | Second recueil, concordant avec C1 sur l'article 32.4. Deux recueils indépendants ont été exigés avant de tenir le contenu pour établi. |
| C3  | `https://www.marche-public.fr/CCAG-TIC2021/33-decisions-apres-verification.htm`            | Texte de l'article 33 : 33.2.1 (trente jours), 33.2.2 (sept jours et admission tacite).                            |
| C4  | `https://www.code-commande-publique.com/ccag-tic-2021-article-33/`                         | Second recueil sur l'article 33, concordant avec C3 sur les délais. Rouvert le 30/08/2026 à 23 h : il refuse de reproduire le texte intégral et n'a servi qu'au contrôle des délais. |
| C6  | `https://www.marche-public.info/article-33-decision-apres-verifications-ccag-tic-2021/`     | Troisième recueil sur l'article 33, ouvert pendant la passe de correction. Concordant avec S1b sur le point de départ des trente jours, sur les trois décisions ouvertes à l'acheteur (décision positive, ajournement, rejet) et sur l'absence d'admission tacite à 33.2.1. |
| C5  | `https://www.squashtm.com/en/source-code`                                                   | **Promue en S11** : elle n'est plus une corroboration mais la source citée par l'article. Voir §4.1.                     |

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
| F2  | Son **article 32** sépare la vérification en deux temps : vérification d'aptitude, puis vérification de service régulier             | L680-683                | **S1a** (Légifrance, art. 32.3 et 32.4), corroboré par C1 et C2 | **Confirmé sur la source primaire** depuis la passe de correction du 30/08/2026.        |
| F3  | La vérification d'aptitude « contrôle que le logiciel livré peut remplir les fonctions demandées »                                   | L681-682                | C1, art. 32.3                             | **Confirmé** en substance : constater que les prestations « présentent les caractéristiques techniques » attendues, après mise en ordre de marche. |
| F4  | La régularité s'observe **trente jours** à partir de la **décision positive de vérification d'aptitude**                             | L686-689                | C1, C2, art. 32.4 : « la régularité du service s'observe pendant trente jours, à partir du jour de la décision positive de vérification d'aptitude » | **Confirmé, littéral.**                                                                   |
| F5  | Service réputé régulier si l'indisponibilité cumulée sur le mois ne dépasse pas **2 %** de la durée d'utilisation effective          | L689-691                | C1, C2, art. 32.4                         | **Confirmé, littéral.**                                                                   |
| F6  | La durée d'utilisation effective s'étend **de 8 h à 18 h, du lundi au vendredi, jours fériés exclus**                                | L691-694, L743-744      | C1, C2, art. 32.4                         | **Confirmé, littéral.**                                                                   |
| F7  | Le CCAG-TIC parle d'indisponibilités « **imputables à chaque élément de matériel** »                                                 | L720-722                | C1, C2, art. 32.4                         | **Confirmé, littéral.** La remarque de l'article — sur une application hébergée, aucun élément de matériel n'est au client — est une déduction éditoriale explicite, pas une citation. |
| F8  | Article 33 : **sept jours** après vérification de service régulier ; à défaut de notification, **les prestations sont réputées admises** | L254, L925-930          | **S1b** (Légifrance, art. 33.2.2), corroboré par C3, C4, C6 | **Confirmé, littéral**, désormais sur la source primaire.                                |
| F9  | Article 33.2.1 : les **trente jours couvrent** la vérification d'aptitude et courent depuis l'écrit du titulaire ou le procès-verbal de mise en ordre de marche, **sans admission tacite** — décision positive, ajournement ou rejet | L254, L931-937          | **S1b** (Légifrance, art. 33.2.1), corroboré par C3, C4, C6 | **Confirmé, littéral.** É4 est **corrigé** : la page n'écrit plus « le délai de trente jours qui suit la vérification d'aptitude ». |
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
| F25 | Les **quatre** catégories visées par le I de l'article 47, le 3° compris                                                             | L297, L767-775          | S6                                        | **Confirmé et complet.** É6 est **corrigé** : « Elle vise quatre catégories : … celles que les précédentes constituent pour le même objet ; … ». |
| F26 | Le régime de sanction du décret « a été modifié depuis : vérifier le texte en vigueur »                                              | L304-305                | S7                                        | **Confirmé et à jour** : article 8 abrogé par le décret n° 2026-816 du 24 août 2026. L'article ne cite aucun montant d'amende, et un test l'interdit. |
| F27 | Le second régime est **applicable depuis le 28 juin 2025** et vise des produits et services **destinés aux consommateurs**           | L772-776, L307-311      | S8, directive (UE) 2019/882               | **Confirmé.**                                                                             |
| F28 | « Un outil interne utilisé par vos salariés n'y figure pas »                                                                         | L775-776, L310          | S8, champ de l'article 2                  | **Confirmé** : le champ est celui des produits et services destinés aux consommateurs.    |
| F29 | Squash TM est **développé depuis 2011 par Henix**, société française de qualité logicielle                                           | L313-317                | S10, nommée dans la description de l'entrée | **Confirmé, littéral** (« Développé en France depuis 2011 par Henix »).                 |
| F30 | Squash TM est publié **en open source sous licence LGPL v3**                                                                         | L313-317, L524-528      | **S11** (`squashtm.com/en/source-code`)   | **Confirmé, littéral.** É3 est **corrigé** : le `href` de l'entrée pointe désormais la page qui porte la phrase, citée mot pour mot. |
| F31 | Squash TM est cité « **sans recommandation exclusive** », comme exemple d'outil disponible                                           | L316-317, L525-528      | Réserve éditoriale                        | **Conforme.**                                                                             |
| F32 | OWASP **ASVS 5.0.0** est une base versionnée de contrôles techniques de sécurité web, « pas une obligation générale »                | L319-323                | S9                                        | **Confirmé** : 5.0.0 publiée le 30/05/2025 ; la page elle-même recommande de citer la version. |
| F33 | ISO/IEC/IEEE 29119-3:2021 propose des modèles de documentation de test ; aucun champ non public ne lui est attribué                   | L262-267, L1083-1086    | N1                                        | **Non revérifié le 30/08/2026** — HTTP 403 (§4.2). É8 est **corrigé** : le 403 et sa date sont écrits dans l'entrée, et le mot « publiquement » est retiré du §08. |
| F34 | ISO/IEC 25010:2023 : modèle de qualité produit à **neuf caractéristiques**                                                           | L269-273, L1084-1087    | N2                                        | **Non revérifié le 30/08/2026** — HTTP 403 (§4.2). É8 est **corrigé** de la même façon : l'entrée déclare le 403, sa date et les deux langues essayées. |
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

Le total ne bouge pas après la passe de correction du 30 août 2026, mais deux
lignes ont changé de contenu : H17 et H18 ne posent plus des *volumes de cas*
mais des *nombres de règles* (§6.3). Ce qui était posé sans source est devenu
une entrée, et ce qui était affirmé est devenu un calcul (§7.13).

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
| H16 | Référentiel contre-exemple de **400 cas**                              | L529-534    |
| H17 | Une saisie de congés illustrative tient en **4 règles**, aucune à seuil | L486-491    |
| H18 | Un calcul de commissions illustratif tient en **60 règles**            | L486-491    |

**Ces deux lignes ont changé de nature le 30 août 2026.** Elles posaient
auparavant deux *volumes de cas* sans source — « une douzaine », « plus de cent
cinquante » — qui fondaient un « facteur douze et demi » que rien ne
soutenait et que la méthode de comptage de la section 02 ne produisait pas
(É5). Ne restent posés que les deux **nombres de règles**, 4 et 60, qui sont
des entrées d'illustration au même titre que les 19 règles du fil rouge ; les
volumes de cas publiés, eux, sont désormais **dérivés** par la règle écrite
deux lignes plus haut dans la même section. Le calcul est au §7.13.

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
| H30 | Projet de contre-exemple à **8 000 € HT**                 | L644-650    |

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

### 7.12 Le contre-exemple à 8 000 € HT — **corrigé le 30 août 2026**

C'était le seul calcul de l'article qui ne retombait pas sur ses propres
nombres. Il retombe désormais.

Ce que l'article publiait, et pourquoi c'était faux :

```
Publié avant : « Transposés tels quels […] ils coûteraient 2 100 €
                 de temps interne, soit un quart du développement. »

  2 100 = 6,0 j × 350 €  →  le « six jours » arrondi du titre voisin
                             (« Six jours de travail ne tiennent pas dans
                             six jours de calendrier »), pas la ligne
                             « Total » du tableau de la section 03.
  2 100 ÷ 8 000 × 100 = 26,25 %   →  déjà supérieur au quart (É2)
```

Ce que l'article publie maintenant, refait à la main :

```
Ligne « Total » de la section 03 : 6,2 jours
  6,2 × 350 €              = 2 170,00 €
  2 170 ÷ 8 000            = 0,27125
  × 100                    = 27,125 %
  arrondi au dixième       → 27,1 %
```

**Conforme** à la phrase publiée : « Transposés tels quels sur un projet à
8 000 € HT, ils coûteraient les mêmes 2 170 € de temps interne, soit
2 170 ÷ 8 000 = 27,1 % du développement — plus du quart. »

Deux effets de bord traités dans le même geste, parce que c'est l'assiette qui
produisait l'erreur :

1. le titre voisin annonce maintenant **la même assiette que le tableau** :
   « Les 6,2 jours de travail ne tiennent pas dans six jours de calendrier ».
   L'arrondi à « six jours » ne circule plus comme un montant ;
2. la première phrase de l'encadré dit « Les **6,2** jours ci-dessus » et non
   « Les six jours ci-dessus ». Le renvoi interne porte donc sur le montant, et
   pas seulement sur la règle.

Le test `garde intact le passage qui ne sert pas le commerce` **recalcule**
désormais `6,2 × 350` et `2 170 ÷ 8 000`, exige les deux formulations publiées,
et interdit le retour du littéral « 2 100 » et de « soit un quart du
développement ». Ce chiffre n'est plus dans la liste du §8.3.

### 7.13 Les deux volumes d'illustration de la section 02, désormais dérivés

Ce calcul n'existait pas : l'article posait ses deux volumes sans les dériver
(É5). Il applique maintenant, aux deux exemples, la règle écrite deux lignes
plus haut dans la même section — « un cas courant par règle, plus un cas à la
limite pour chaque règle qui porte un seuil, une date ou un arrondi » :

```
Règle du tableau, ligne « Règles de gestion et de calcul » :
  cas = nombre de règles + nombre de règles à seuil
Contrôle sur le fil rouge : 19 + 11 = 30   → la ligne publiée du tableau

Saisie de congés, 4 règles, aucune à seuil :
  4 + 0  =   4 cas
Calcul de commissions, 60 règles :
  borne basse, aucune à seuil : 60 +  0 =  60 cas
  borne haute, toutes à seuil : 60 + 60 = 120 cas
```

**Conforme** à la phrase publiée : « La même méthode donne 4 cas pour une
saisie de congés qui tient en quatre règles sans seuil, et de 60 à 120 cas pour
un calcul de commissions à soixante règles, selon celles qui portent un seuil. »

Ce que la correction change pour le lecteur : les deux bornes ne se lisent plus
comme une observation empirique — elles se refont avec ses propres nombres de
règles, ce qui est exactement ce que la phrase suivante lui demande
(« Ce qui se transporte d'un projet à l'autre, c'est la méthode de comptage »).
Le test `recalcule le décompte des 56 cas ligne à ligne` refait les quatre
opérations et interdit le retour de « facteur douze et demi » et de « plus de
cent cinquante ».

### 7.14 Contrôles de bouclage

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
| `recalcule le décompte des 56 cas ligne à ligne`            | 6, 30, 7, 9, 4, 56, la phrase en toutes lettres, et **depuis le 30/08/2026** la dérivation des deux volumes d'illustration (19 + 11 = 30 ; 4 + 0 = 4 ; 60 + 0 = 60 ; 60 + 60 = 120), avec **interdiction** de « facteur douze et demi » et de « plus de cent cinquante » |
| `recalcule le seuil de 2 % du CCAG-TIC minute par minute`   | 13 200 min, 264 min, 4 h 24, 216 min, 3 h 36, « 12 minutes par jour ouvré », « Au maximum, donc » |
| `recalcule les deux mesures de fin de campagne`             | 19 ÷ 26 = 73 %, 8 ÷ (37 + 8) = 17,8 %, absence de seuil de référence                              |
| `recalcule le volume du jeu d'essai contre un mois réel`    | 7 × 4 = 28, 8,2 %, et **interdiction** du littéral « 40 dossiers »                                |
| `raconte trois incidents portant chacun un montant`         | 41, 4 182 €, 123, 700 €, 23/56, 525 €, 7 500 €                                                   |
| `cite le CCAG-TIC avec ses délais réels et son périmètre`   | arrêté du 30 mars 2021, art. 32 et 33, trente jours, 8 h – 18 h, « réputées admises », « imputables à chaque élément de matériel », URL Légifrance, et **depuis le 30/08/2026** « ne suit pas la vérification d'aptitude », « procès-verbal de mise en ordre de marche », « n'emporte aucune admission tacite », avec **interdiction** de « trente jours qui suit la vérification » |
| `cadre l'accessibilité sans vendre un audit inutile`        | 250 M€, 28 juin 2025, absence de tout montant d'amende, et **depuis le 30/08/2026** « Elle vise quatre catégories », « celles que les précédentes constituent pour le même objet », « jamais un effectif » |
| `porte une réponse directe courte et chiffrée`              | 56 cas, 6,2 jours, 2 170 €, 25 000 € HT, et 120-180 mots                                         |
| `ne porte qu'un bloc de transparence…`                      | **depuis le 30/08/2026** « rouvertes une à une le 30 août 2026 », l'égalité avec `guide.dateModified`, l'**interdiction** de « relus le 28 août 2026 », « à revérifier tous les douze mois », un seul CTA en ligne |
| `garde l'atelier local, bloquant et sans persistance`       | 8 points, 10 compteurs, 7 issues, absence de `fetch`/`localStorage`/champ libre                   |
| `garde intact le passage qui ne sert pas le commerce` **(réécrit le 30/08/2026)** | 6,2 × 350 = 2 170, 2 170 ÷ 8 000 = 27,1 %, « les mêmes 2 170 € de temps interne », « 2 170 ÷ 8 000 = 27,1 % du développement », « plus du quart », « Les 6,2 jours de travail ne tiennent pas », et **interdiction** de « 2 100 » et de « soit un quart du développement » |
| `garde les références primaires et leur portée` **(étendu le 30/08/2026)** | l'URL `squashtm.com/en/source-code`, la phrase « SquashTM is open source software, distributed under the LGPL v3 license. », et l'**interdiction** de l'ancien `href` vers `henix.com/squashtm` |
| `date les douze sources citées…` **(ajouté le 30/08/2026)** | 12 entrées `legalSources`, chacune portant « 30 août 2026 », `https://` pour chaque `href`, « HTTP 403 » dans les deux entrées ISO, et l'**interdiction** de « Consulté le 28 » |

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

Les deux premières familles de cette liste ont été **retirées le 30 août 2026**
parce qu'elles portaient É1, É2 et É5 : la transposition à 8 000 € et les deux
volumes d'illustration de la section 02 sont maintenant recalculés par test.
Restent :

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

- **la passe de correction du 30 août 2026 à 23 h 30 a également été conduite
  par un agent.** Elle a rouvert les sources, refait les calculs et corrigé la
  page ; elle n'est pas une relecture humaine et n'est présentée nulle part
  comme telle. La page ne revendique d'ailleurs aucune relecture humaine : le
  bloc Transparence dit ce qu'il peut dire — que les **sources citées** ont été
  rouvertes le 30 août 2026 — et rien de plus.

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

### 12.1 Ce qui est clos

Les huit écarts (É1 à É8) et le point 8 de l'ancienne liste — le CCAG-TIC non
lu sur la source primaire — ont été traités le 30 août 2026. Le détail issue
par issue est au §0 ; les preuves sont aux §4.1 (S1a, S1b, S11), §4.2 (le 403
constaté deux fois par trois voies), §7.12 et §7.13 (les deux calculs refaits),
et §8.1 (ce que chaque test verrouille désormais).

**Aucun écart n'a été rejeté.** Les huit relevés ont été revérifiés à leur
source avant correction, et les huit étaient exacts.

### 12.2 Ce qui reste ouvert

Par ordre de gravité pour une mise en campagne payante.

1. **Les deux normes ISO restent inaccessibles.** Le 403 est déclaré dans les
   deux entrées, avec sa date et les voies essayées, et le mot « publiquement »
   a été retiré du §08 — mais un lecteur qui veut lire la norme devra l'acheter.
   Aucune source de remplacement accessible n'a été trouvée le 30/08/2026
   (`iso25000.com` en 404, plateforme de consultation de l'ISO en 403). À
   reprendre si l'ISO rouvre son catalogue ou si un miroir normatif apparaît.
2. **Les chiffres non verrouillés (§8.3).** Quatre familles de valeurs
   subsistent — le seuil de bascule à 150 cas, les nombres de l'incident 3, les
   seuils réécrits de la section 04, les valeurs du tableau de la section 05.
   Elles peuvent dériver sans qu'aucun test ne s'en aperçoive. Deux familles ont
   quitté cette liste ce soir, celles qui portaient É1, É2 et É5.
3. **La phrase de L893-897 sur les incidents.** Elle annonce deux valeurs
   posées, alors que dix le sont (§6.7, H39 à H48). Rien de faux n'est publié
   et le paragraphe qui précède range l'ensemble sous « exemple construit » :
   c'est pourquoi ce point n'a jamais été compté comme un écart. Il reste
   perfectible.
4. **La relecture humaine (§11).** Aucun lecteur humain extérieur n'a relu la
   version publiée, y compris celle de ce soir. Bloquant pour tout statut
   supérieur à « prêt pour revue humaine ».
5. **Le manifeste `published-guides-current.sha256`.** Désynchronisé pour les
   neuf guides publiés, et pas seulement pour celui-ci : six autres passes
   écrivent en parallèle. À régénérer par la passe qui clôt le corpus, pas
   depuis ici.

Rien, dans ces cinq points, ne touche à la thèse de l'article ni à ses
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
npx tsc --noEmit
# → aucune sortie, code de retour 0

npx vitest run src/app/guides/plan-recette-application-metier
# → Test Files 2 passed (2) · Tests 81 passed (81)

npx tsx scripts/measure-guide-readtime.mjs plan-recette-application-metier
# → plan-recette-application-metier   4154 mots   21 min

npx tsx scripts/measure-guide-readtime.mjs --check plan-recette-application-metier
# → OK  plan-recette-application-metier   mesuré 21 min   publié 21 min
```

Le 81e test est `date les douze sources citées et n'efface pas celles qui n'ont
pas répondu`, ajouté par la passe de correction.

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

# La transposition à 8 000 € — É1 et É2, corrigés
assert 6.2 * 350 == 2170                    # publié ; l'ancienne page disait 2 100
assert round(2170 / 8000 * 100, 1) == 27.1  # publié ; l'ancienne page disait « un quart »
assert 27.1 > 25.0                          # « plus du quart », écrit tel quel

# Les deux volumes d'illustration de la section 02 — É5, corrigé
cas = lambda regles, a_seuil: regles + a_seuil
assert cas(19, 11) == 30                    # la ligne publiée du tableau
assert cas(4, 0) == 4                       # saisie de congés
assert (cas(60, 0), cas(60, 60)) == (60, 120)  # commissions, les deux bornes
```

Toutes ces assertions passent, **et aucune ne contredit plus la page** : les
deux dernières familles décrivaient les écarts É1, É2 et É5, qui ont été
corrigés le 30 août 2026 à 23 h 30.

### 13.4 Sources ouvertes ce jour

Reconstitution du matin : dix des douze sources citées (§4.1), cinq pages de
corroboration (§4.4), deux emplacements internes du dépôt (§4.3).

Passe de correction de 23 h, **toutes rouvertes une seconde fois** :

- les dix sources citées accessibles, une par une ;
- **trois localisateurs nouveaux** : Légifrance `JORFARTI000043310746`
  (article 32), `JORFARTI000043310747` (article 33), et
  `squashtm.com/en/source-code` ;
- **un recueil supplémentaire** sur l'article 33 (C6), pour ne pas tenir É4 sur
  un seul contradicteur du texte primaire ;
- le PDF de l'ISTQB **téléchargé et lu localement**, 78 pages, plutôt que résumé
  par un intermédiaire ;
- les deux pages de l'ISO réessayées par `curl` avec un `User-Agent` de
  navigateur : **403** de nouveau.

Aucune date de consultation n'a été écrite sans avoir été faite. Les deux
sources qui n'ont pas répondu le disent, dans ce dossier au §4.2 **et
maintenant dans la page elle-même**.

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

**Statut de ce dossier : socle de preuves reconstitué le 30 août 2026 à
22 h 55, puis mis d'accord avec la page corrigée le même jour à 23 h 30. Huit
écarts relevés, huit traités, aucun rejeté. Deux sources restent
inaccessibles, et la page le dit. Statut éditorial maximal atteignable en
l'état : « prêt pour revue humaine » (§11).**
