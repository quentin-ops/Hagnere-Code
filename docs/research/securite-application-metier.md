# Dossier de recherche — Sécurité d’une application métier

> **Reconstitution du 30 août 2026, puis passe de correction le même jour.**
> Ce dossier décrit l’article tel qu’il existe aujourd’hui dans
> `src/app/guides/securite-application-metier/`, et non l’article de juillet
> 2026 que la version précédente de ce fichier décrivait. Il remplace
> intégralement le dossier P1→P4 daté du 30 juillet 2026, dont le plan est
> conservé mais dont aucun contenu factuel n’a été repris sans revérification.
>
> **Ce que la seconde moitié de la journée a changé.** La reconstitution avait
> relevé douze écarts sans y toucher. Dix ont été traités dans la page, les
> tests et le registre le 30/08/2026 au soir ; deux restent ouverts et sont
> décrits comme tels en §0. Chaque source ajoutée ou déplacée a été rouverte
> ce jour-là, une par une, avant d’être écrite. Les sections ci-dessous
> décrivent l’état **après** correction.
>
> Il ne constitue ni un audit de sécurité, ni une certification, ni un avis
> juridique individualisé. Sa seule fonction est de rendre l’article
> **refaisable** : retrouver chaque source, refaire chaque calcul, et
> distinguer ce qui est établi de ce qui est posé.

---

## 0. Les douze écarts : ce qui a été fait de chacun

La reconstitution du matin a relevé douze écarts sans toucher à l’article.
La passe du soir en a traité dix. Le tableau ci-dessous donne, pour chacun,
l’issue retenue — corriger le texte, déplacer le localisateur vers la source
qui porte réellement l’affirmation, ou retirer l’affirmation — et ce qui a
bougé. Les deux derniers restent ouverts, et pour une raison écrite.

| #   | Nature                     | Issue retenue                | Ce qui a changé le 30/08/2026 au soir                                                                                                                                                                                                                                                     |
| --- | -------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | État de publication        | **Ouvert** — hors territoire | Recontrôlé ce soir : `https://hagnere-code.ai/guides/securite-application-metier` répond 200 et sert toujours le H1 « Quel socle de sécurité exiger pour une application métier ? », `dateModified` du JSON-LD `2026-07-30T22:03:29+02:00`. Un déploiement, pas une correction de texte. |
| 2   | Manifestes désynchronisés  | **Ouvert** — voir plus bas   | Les manifestes `-quality` et `-integration` datent des passes qui les ont produites. Les réécrire ici reviendrait à leur faire attester une vérification qui n’a pas eu lieu. Ils sont laissés en l’état, et le constat est repris en §I.4.                                              |
| 3   | Localisateur inexact       | **Localisateur déplacé**     | L’entrée `legalSources` « FIRST · CVSS v4.0 et EPSS » est scindée : « FIRST · CVSS v4.0 » garde la spécification, « FIRST · EPSS » porte `https://www.first.org/epss/`. Le corps de la section 07 lie désormais « score EPSS » à cette page.                                            |
| 4   | Affirmation sans source    | **Localisateur ajouté**      | Nouvelle entrée « ANSSI · NIS 2, directive (UE) 2022/2555 » vers `https://messervices.cyber.gouv.fr/nis2`, avec les 18 secteurs, les seuils de taille et la transposition « en cours ». La réponse de FAQ n’a pas bougé : elle était déjà exacte.                                       |
| 5   | Affirmation sans source    | **Localisateur ajouté**      | Nouvelle entrée « OWASP · Top 10 des risques applicatifs » vers `https://owasp.org/www-project-top-ten/`, à côté de l’entrée API Security Top 10, qui reste un autre document. La réponse de FAQ est reformulée avec les mots de la page citée : « un consensus large sur les risques les plus critiques » remplace « des familles de risques fréquentes », qui attribuait une fréquence que la source n’énonce pas.                                          |
| 6   | Affirmation sans source    | **Localisateur ajouté**      | Nouvelle entrée « article 4, points 1 et 12 (reproduction CNIL) » vers `.../reglement-europeen-protection-donnees/chapitre1`, et « violation de données personnelles » devient un lien dans la section 06. C’est la reproduction CNIL qui sert le texte, quand EUR-Lex ne le rend pas.  |
| 7   | Affirmation sans source    | **Texte corrigé**            | « et la CNIL module » disparaît. L’encadré écrit désormais : « les paragraphes 1 et 2 du même article veulent des amendes “effectives, proportionnées et dissuasives”, modulées cas par cas ». L’entrée `legalSources` couvre les §§1, 2 et 4.                                          |
| 8   | Décompte incomplet         | **Texte corrigé**            | La huitième hypothèse de la section 02 se termine par « dont les dix minutes, l’heure et la minute détaillées en questions fréquentes ». Le rattachement de H46 à H48 à H08 se lit sans le déduire. Le décompte reste huit, et c’est exact.                                             |
| 9   | Nombres posés non déclarés | **Affirmation retirée**      | « Une faille notée 9,8 […] après une 6,5 » devient « Une faille critique que personne n’exploite passe après une moyenne activement utilisée ». Le raisonnement s’appuie sur les bandes de F20, qui sont sourcées. H45 est retirée du recensement.                                       |
| 10  | Reproductibilité           | **Texte corrigé**            | L’incident n° 1 nomme ses 400 minutes : 20 + 40 + 120 + 220. Le texte écrit « puis trois heures quarante de remontée et de vérification des parcours ». Voir C13, refait à la main.                                                                                                     |
| 11  | Reproductibilité           | **Texte corrigé**            | L’annonce de l’arrondi devient « arrondi à 993 € : tous les montants de ce guide partent de là et non des centimes ». Le lecteur qui garde les centimes sait pourquoi il trouve autre chose.                                                                                            |
| 12  | Commentaire périmé         | **Texte corrigé**            | Les deux commentaires de `content-quality.test.ts` portent la mesure du 30/08/2026 : 4 476 / 5 158 / 5 898 par les fonctions du test, 4 435 mots par le script, et l’explication de l’écart entre les deux comptages.                                                                    |

### Les deux écarts qui restent ouverts, et pourquoi

**Écart n° 1 — la production sert encore l’article de juillet.** Rien dans le
dépôt ne corrige cela : c’est un déploiement. La vérification a été refaite ce
soir et donne le même résultat. Tant qu’elle n’est pas faite, aucune ligne de
ce dossier ne décrit ce qu’un lecteur voit.

**Écart n° 2 — les manifestes.** Le relevé du matin est exact sur le fond et
inexact sur un détail : `-integration` porte bien `418f9fbf…` pour ce dossier,
mais `-quality` porte `d6d41a93…`. Les deux sont périmés — le dossier vaut
`5804f628…` avant la présente correction — mais ils ne portent pas la même
valeur. Sur le fond : un manifeste nommé `-quality` ou `-integration` atteste
l’état des fichiers **au moment où cette passe-là a été jouée**. Y écrire les
empreintes d’aujourd’hui ferait dire à une passe qu’elle a vu des fichiers
qu’elle n’a jamais vus. Ils sont donc laissés intacts, à régénérer par la passe
d’intégration qui suivra le déploiement.

**Aucun calcul faux n’a été trouvé, ni avant ni après correction.** Les seize
calculs de l’article ont été refaits à la main deux fois — au relevé du matin,
puis après les corrections du soir — et donnent tous le résultat publié (§F).
La correction de l’écart n° 10 ajoute une décomposition, pas un total nouveau.

---

## A. Identité de l’article décrit

| Champ                        | Valeur relevée le 30/08/2026, après la passe de correction                                                                        |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Slug                         | `securite-application-metier`                                                                                                     |
| Fichier décrit               | `src/app/guides/securite-application-metier/page.tsx`, sha256 `b29f3930d69b830e4e7e070ea469322fc7373745fadd5fe768768f02756c5c60`  |
| Modules importés décrits     | `security-readiness.ts` (`a91b0f78…`), `security-readiness-tool.tsx`, `opengraph-image.tsx`                                       |
| Tests colocalisés            | `content-quality.test.ts` (`f2ab8ddc…`) et `security-readiness.test.ts` — **65 tests, 65 passent** (`npx vitest run`, 30/08/2026) |
| H1 visible                   | « Sécurité d’une application métier : que mesurer avant les vraies données ? »                                                    |
| `title` du registre          | « Sécurité d’une application métier : les 4 mesures à faire » (57 caractères)                                                     |
| `datePublished`              | `2026-07-30T22:03:29+02:00`                                                                                                       |
| `dateModified`               | `2026-08-30T23:30:00+02:00` — porté par le registre, le JSON-LD et le bandeau « Mis à jour le 30 août 2026 »                       |
| `readTimeMin`                | 22                                                                                                                                |
| Calibre après correction     | prose seule **4 476 mots** · prose + outil local **5 158** · prose + outil + FAQ **5 898** (FAQ seule : 740)                      |
| Bande déclarée par le test   | pilier structurant, 4 200–6 000 mots par les trois lectures — tenue                                                               |
| Canonique                    | `https://hagnere-code.ai/guides/securite-application-metier`                                                                      |
| Route service principale     | `/services/audit-technique`                                                                                                       |
| Route commerciale tardive    | `/demarrer-un-projet`, un seul appel en ligne, placé après `id="decision"`                                                        |
| Outil signature              | `SecurityReadinessTool` — huit contrôles, onze verdicts, aucun score, aucun envoi, exclu du temps de lecture                      |
| Entrées `legalSources`       | **21** — quatre ajoutées le 30/08/2026 au soir (EPSS, Top 10 applicatif, NIS 2, article 4 §§1 et 12)                             |

### Ce que l’article promet dans son premier écran

> « Est-elle sécurisée ? » n’appelle aucune réponse vérifiable. Quatre choses,
> en revanche, se mesurent en une journée : le temps réel d’une restauration
> complète, les minutes entre un événement sensible et l’alerte reçue, les
> codes de réponse rendus au compte le moins privilégié, et le délai entre la
> publication d’un correctif et son installation.

La décision que le lecteur doit pouvoir prendre après lecture, en une phrase :
**mettre en service, corriger puis remesurer, réduire ce qu’on ouvre, piloter
sur données fictives, ou reporter** — avec, pour chacune, un montant à
comparer et une chose à écrire.

### Les neuf sections publiées

| Ancre             | N°  | Titre visible                                                 | Nombre qu’elle produit                              |
| ----------------- | --- | ------------------------------------------------------------- | --------------------------------------------------- |
| `reponse`         | 01  | Quatre mesures, un chronomètre, et le coût de l’écart         | 993 € / 3 972 € / 6 620 € / 2 648 €                 |
| `consequences`    | 02  | Combien vous coûte une heure sans l’application ?             | 798 € + 195,30 € = 993,30 €, arrondi à 993 €        |
| `capacites`       | 03  | Les quatre mesures, et les quatre sujets qui restent à écrire | tableau des quatre seuils, fiche de consignation    |
| `restauration`    | 04  | Votre sauvegarde restaure-t-elle l’application entière ?      | 6 h 40 contre 4 h ; 235,60 € de ressaisie           |
| `detection`       | 05  | Combien de minutes s’écoulent entre l’action et l’alerte ?    | 0 alerte ; 7 jours de journaux ; décalage UTC/Paris |
| `responsabilites` | 06  | Le compte témoin lit ce que l’écran lui cache                 | 3 réponses 200 sur 10 ; 1 250 € ; 190 €             |
| `outil`           | 07  | Quelle dépendance faut-il corriger cette semaine ?            | 31 → 6 → 4 → 3 → 1 ; 224 jours                      |
| `decision`        | 08  | Que décider quand une mesure dit non ?                        | cinq issues, ce que chacune oblige à écrire         |
| `cas-fictif`      | 09  | Ce qui rate sur le cas construit, et ce que ça coûte          | 6 620 € / 41 jours / 1 250 €                        |

---

## B. Méthode de cette passe, et ce qu’elle ne prouve pas

### B.1 Ordre de travail suivi

1. Lecture intégrale de `page.tsx` (1 323 lignes) et de `security-readiness.ts`.
2. Lecture des deux fichiers de test colocalisés, pour relever les chiffres
   **verrouillés par assertion** — ce sont eux qui ne peuvent plus dériver sans
   faire échouer la suite.
3. Lecture de l’ancien dossier **pour son plan seulement**. Aucune source,
   aucune date de consultation, aucun chiffre n’en a été recopié.
4. Réouverture de chaque source citée par l’article, une par une, le
   30/08/2026, avec relevé du code HTTP puis lecture du contenu.
5. Reprise à la main des seize calculs de l’article.
6. Recensement des énoncés non sourcés, hypothèse par hypothèse.
7. **Le soir, passe de correction.** Pour chacun des douze écarts, une issue
   explicite (§0). Toute source ajoutée ou déplacée a été rouverte avant
   d’être écrite — `https://www.first.org/epss/`,
   `https://owasp.org/www-project-top-ten/`,
   `https://messervices.cyber.gouv.fr/nis2`, les chapitres 1 et 8 de la
   reproduction CNIL du RGPD, et la page `/tarifs` servie en production.
8. Reprise à la main des calculs touchés (C13 et la ligne d’arrondi du §F),
   puis nouvelle mesure du calibre et nouvelle exécution de la batterie.

### B.2 Ce que cette passe n’établit pas

- **Aucune relecture humaine extérieure n’a eu lieu.** Le dépôt ne contient
  aucune trace de test lecteur sur la version du 28/08/2026 : ni compte rendu,
  ni retour, ni nom. Les journaux P1 à P4 de l’ancien dossier sont des journaux
  d’agents, et la charte §13 interdit de les présenter comme l’avis d’une
  personne réelle. **En l’état, le statut maximal atteignable est « prêt pour
  revue humaine »**, sauf instruction explicite du commanditaire déléguant la
  décision de publication à un contre-audit indépendant (charte §13,
  « Statuts autorisés »).
- Cette passe ne relit ni l’architecture, ni le code applicatif, ni la
  conformité RGPD de qui que ce soit. Elle vérifie un texte.
- Elle ne rejoue pas les quatre mesures du guide : ce sont des protocoles
  décrits, pas des mesures faites par Hagnéré Code sur un système réel.
- Elle ne mesure aucune audience, aucun classement, aucune conversion.

### B.3 Rappel factuel opposable au contenu

Hagnéré Code compte **sept personnes** — un président fondateur, un CTO et
cinq autres développeurs — et a été créée le **30 septembre 2025**. LMNP.AI,
SCI-AI.app, Hagnéré Patrimoine, Hagnéré Investissement et Comptabilité AI
(SIREN 978548899) sont des entités réelles du groupe, **et non des clients
indépendants**. L’article ne revendique aucune expérience client, aucun
historique d’exploitation et aucune prévalence de marché : le test
« n’affirme aucune fréquence ni prévalence sur une population non mesurée »
verrouille ce point sur dix formulations interdites.

---

## C. Les trois natures d’énoncé, et comment les lire

Aucune ligne de ce dossier ne mélange les trois. Chaque énoncé porte un
préfixe et un identifiant stable.

| Préfixe | Nature          | Ce qu’il porte obligatoirement                                                                                          | Ce qu’il ne peut jamais être                                   |
| ------- | --------------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| `F##`   | **Fait sourcé** | Un localisateur exact : URL, article ou paragraphe précis du texte, page ou section du document, plus la date de relevé | Une déduction, une moyenne de marché, un ordre de grandeur     |
| `H##`   | **Hypothèse**   | Une valeur posée pour le cas construit, sans source, annoncée à découvert                                               | Un fait, un relevé chez un client, une fourchette « observée » |
| `C##`   | **Calcul**      | Ses entrées nommées (`F` et `H`), ses étapes intermédiaires, son résultat                                               | Une entrée : un calcul ne prouve rien qu’il n’a pas reçu       |

**Règle de lecture.** Un euro affiché dans l’article vient toujours d’un `C`,
qui vient toujours d’au moins un `H`. Aucun montant du cas construit n’est un
fait. Symétriquement, aucun `F` de ce dossier n’a été inféré : soit la source
a été rouverte et lue le 30/08/2026, soit elle est déclarée non rouverte en
§D.9.

---

## D. Fiche de preuves — les faits sourcés

Toutes les dates de consultation ci-dessous valent **30 août 2026**. Le code
HTTP a été relevé par `curl -sS -o /dev/null -w "%{http_code}" -L`, le contenu
a ensuite été lu séparément.

### D.1 Droit de l’Union européenne

**F01 — Article 32 du RGPD : mesures appropriées, pas de recette.**
Localisateur : règlement (UE) 2016/679, **article 32, paragraphe 1**.
URL citée par l’article : `https://eur-lex.europa.eu/eli/reg/2016/679/art_32/oj/fra` — répond **200**.
Reproduction officielle contrôlée en second : `https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4`.
Formule exacte reprise entre guillemets par l’article : « **appropriées afin de
garantir un niveau de sécurité adapté au risque** ». Le paragraphe 1 énumère
a) pseudonymisation et chiffrement, b) confidentialité, intégrité, disponibilité
et résilience, c) rétablissement de la disponibilité et de l’accès en temps
utile, d) procédure de test, d’évaluation et d’appréciation régulière.
Portée : responsable de traitement et sous-traitant, dans le champ d’un
traitement de données personnelles.
Confiance : **élevée** (texte officiel, deux lectures concordantes).
Traduction lecteur : aucune fréquence de sauvegarde ni architecture ne figure
au texte ; la proportionnalité est au risque pour les personnes.
Où l’article s’en sert : encadré section 02, entrée `legalSources` n° 1, FAQ.

**F02 — Article 33 : 72 heures, sous condition.**
Localisateur : règlement (UE) 2016/679, **article 33, paragraphe 1**.
Texte vérifié : « En cas de violation de données à caractère personnel, le
responsable du traitement en notifie la violation en question à l’autorité de
contrôle compétente conformément à l’article 55, dans les meilleurs délais et,
si possible, 72 heures au plus tard après en avoir pris connaissance, à moins
que la violation en question ne soit pas susceptible d’engendrer un risque pour
les droits et libertés des personnes physiques. »
Confiance : **élevée** — mais voir §D.9 : l’URL EUR-Lex citée par l’article n’a
pas rendu le texte de l’article ; la vérification a été faite sur la
reproduction officielle de la CNIL.
Traduction lecteur : le délai ne court pas depuis les faits, mais depuis la
prise de connaissance ; et il ne se déclenche que si un risque est possible.
Où l’article s’en sert : sections 05, 06 et 09, FAQ, entrée `legalSources` n° 2.
Le test verrouille au moins deux occurrences de la formulation complète
« sous 72 heures après en avoir pris connaissance » et interdit la formule
raccourcie « déclenche les 72 heures de l’article 33 ».

**F03 — Article 34 : informer les personnes si le risque est élevé.**
Localisateur : règlement (UE) 2016/679, **article 34, paragraphe 1**.
Texte vérifié : « Lorsqu’une violation de données à caractère personnel est
susceptible d’engendrer un **risque élevé** pour les droits et libertés d’une
personne physique, le responsable du traitement communique la violation de
données à caractère personnel à la personne concernée dans les meilleurs
délais. »
Confiance : élevée. Même réserve d’URL que F02.

**F04 — Article 83 : un plafond au §4, la modulation aux §§1 et 2.**
Localisateur : règlement (UE) 2016/679, **article 83, paragraphe 4, point a)**
pour le plafond, **paragraphes 1 et 2** pour la modulation.
Texte vérifié : amendes « jusqu’à 10 000 000 EUR ou, dans le cas d’une
entreprise, jusqu’à 2 % du chiffre d’affaires annuel mondial total de
l’exercice précédent, **le montant le plus élevé étant retenu** », pour les
obligations « des articles 8, 11, 25 à 39, 42 et 43 ».
**L’article 32 est bien couvert**, par la plage « 25 à 39 ».
Confiance : élevée. Même réserve d’URL que F02 (vérifié sur la reproduction
CNIL, chapitre 8).
Paragraphes 1 et 2, vérifiés le 30/08/2026 sur la reproduction CNIL
(chapitre 8). §1 : « Chaque autorité de contrôle veille à ce que les amendes
administratives imposées en vertu du présent article […] soient, dans chaque
cas, **effectives, proportionnées et dissuasives**. » §2 : « Pour décider s’il
y a lieu d’imposer une amende administrative et pour décider du montant de
l’amende administrative, il est dûment tenu compte, **dans chaque cas
d’espèce**, des éléments suivants ».
Traduction lecteur : sur un chiffre d’affaires de 12 M€, c’est le plafond de
10 M€ qui prime, pas les 2 % — voir `C09`. Et un plafond ne module rien : la
modulation est ailleurs, dans le même article.
Où l’article s’en sert : encadré section 02 (« les paragraphes 1 et 2 du même
article veulent des amendes “effectives, proportionnées et dissuasives”,
modulées cas par cas ») et entrée `legalSources` « article 83 ».
**Écart n° 7, corrigé** : la version relevée le matin écrivait « et la CNIL
module » en ne citant que le §4.

**F05 — Article 4 §1 : ce qu’est une donnée personnelle.**
Localisateur : règlement (UE) 2016/679, **article 4, point 1**.
Texte vérifié : « toute information se rapportant à une personne physique
identifiée ou identifiable ».
Confiance : élevée.
Localisateur servi au lecteur : `https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre1`,
rouvert le 30/08/2026 — c’est la reproduction officielle qui rend réellement le
texte de l’article, quand l’URL EUR-Lex ne rend que les considérants (§D.9).
Pourquoi il figure ici : l’article affirme en sections 01 et 06 que
480 praticiens libéraux sont « des personnes physiques, donc des données
personnelles ». **Écart n° 6, corrigé** : une entrée `legalSources` « article 4,
points 1 et 12 (reproduction CNIL) » porte désormais les deux définitions.

**F06 — Article 4 §12 : ce qu’est une violation.**
Localisateur : règlement (UE) 2016/679, **article 4, point 12**.
Texte vérifié : « une violation de la sécurité entraînant, de manière
accidentelle ou illicite, la destruction, la perte, l’altération, la
divulgation non autorisée de données à caractère personnel transmises,
conservées ou traitées d’une autre manière, ou **l’accès non autorisé** à de
telles données ».
Confiance : élevée.
Texte complet relevé le 30/08/2026 sur la reproduction CNIL, chapitre 1 : la
définition se termine par « ou **l’accès non autorisé** à de telles données ».
Pourquoi il figure ici : soutient « une lecture non autorisée avérée est une
violation de données personnelles » (section 06). **Écart n° 6, corrigé** : ces
mots sont désormais un lien vers le chapitre 1 de la reproduction CNIL, et
l’entrée `legalSources` correspondante nomme les points 1 et 12.

### D.2 CNIL

**F07 — Guide de la sécurité des données personnelles, version courante.**
URL citée : `https://www.cnil.fr/sites/default/files/2026-05/cnil_guide_securite_personnelle.pdf` — répond **200**, PDF téléchargé et ouvert.
Page de couverture vérifiée : « **Version 2024\*** » avec la note
« **\*Mise à jour 2026** ». Le sommaire porte bien les fiches que la
description de l’article annonce : n° 5 Gérer les habilitations, n° 11 Encadrer
les développements informatiques, n° 16 Tracer les opérations, n° 17
Sauvegarder, n° 18 Prévoir la continuité et la reprise d’activité, n° 19 Gérer
les incidents et les violations, n° 20 Analyse de risques.
Portée : données personnelles, explicitement.
Confiance : élevée.
Fraîcheur : la CNIL publie un journal des modifications ; à revérifier à chaque
nouveau millésime affiché en couverture.

**F08 — Sécurité des données : les règles essentielles.**
URL citée : `https://www.cnil.fr/fr/securite-des-donnees-les-regles-essentielles` — **200**.
Date affichée : **19 juin 2026**, conforme à la description de l’article.
Phrase relevée : « le numérique offre des opportunités pour développer votre
entreprise, mais il s’accompagne aussi de risques concernant la sécurité des
données que vous détenez, qu’elles soient personnelles (fichiers clients,
employés…) ou non (informations financières, industrielles…) ».
Confiance : élevée. Nature : sensibilisation, pas audit de contexte — l’article
le dit dans sa propre description de source.

**F09 — Encadrer les développements informatiques.**
URL citée : `https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques` — **200**.
Date affichée : **14 mars 2024**.
Recommandations relevées, une par une : intégrer la protection des données
« dès la conception » ; développer « dans un environnement informatique
distinct de celui de la production » ; ne « jamais utiliser des données
personnelles réelles pour les phases de développement et de test » ; réaliser
« des tests complets (unitaires, d’intégration, fonctionnels, de sécurité) » ;
veiller à l’« absence de secrets d’authentification ou de chiffrement lors du
dépôt de code » et les changer au passage en production.
Confiance : élevée.
Où l’article s’en sert : mesure 1 étape 1 (environnement séparé), mesure 3
(données de test), FAQ « Peut-on faire ces mesures sans toucher à la
production ? », section 03 (« les secrets se lisent dans le dépôt de code »).

**F10 — Sauvegarder.**
URL citée : `https://www.cnil.fr/fr/securite-sauvegarder` — **200**.
Date affichée : **14 mars 2024**.
Recommandations relevées : sauvegardes fréquentes ; niveau de sécurité
équivalent à celui des serveurs d’exploitation ; au moins une sauvegarde sur
« un site géographiquement distinct du site d’exploitation » ; « isoler au
moins une sauvegarde hors ligne, déconnectée du réseau » ; « tester
régulièrement l’intégrité des sauvegardes et la capacité de les restaurer ».
La règle 3-2-1 y figure en « Pour aller plus loin », présentée comme état de
l’art.
Confiance : élevée.

**F11 — Tracer les opérations, et la durée de conservation.**
URL citée : `https://www.cnil.fr/fr/securite-tracer-les-operations` — **200**.
Date affichée : **14 mars 2024**.
Durée : « Conserver ces évènements sur une période glissante comprise entre
**six mois et un an** », sauf obligation légale ou besoin particulier.
Interdit relevé : ne pas « enregistrer les mots de passe ou leur empreinte (ou
“hash”) lors de l’authentification des utilisateurs ».
**Portée à ne jamais élargir** : la fiche appartient au guide sécurité des
données personnelles. Six mois à un an vise les données de journalisation qui
sécurisent un traitement de données personnelles, avec adaptations à
justifier — l’article le formule ainsi en section 05, dans la FAQ et dans la
description de source. Cette précision est une exigence, pas une précaution
décorative : appliquée à tous les journaux techniques, la recommandation serait
déformée.
Confiance : élevée.
Traduction lecteur : les sept jours du cas construit sont un réglage
commercial, pas une durée décidée.

### D.3 ANSSI

**F12 — Sauvegarde des systèmes d’information : les fondamentaux.**
URL citée : `https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf` — **200**, PDF téléchargé et ouvert.
Référence exacte : **ANSSI-BP-100**, page de garde datée **27/11/2025**, table
des évolutions : version 1.0 le 18/10/2023 (version initiale), **version 1.1 le
27/11/2025 (révision mineure)**. Conforme à l’article.
Avertissement de portée, reproduit mot à mot : « Sauf disposition réglementaire
contraire, les recommandations **n’ont pas de caractère normatif** ; elles sont
livrées en l’état et adaptées aux menaces au jour de leur publication. »
L’article reprend cette réserve deux fois — encadré « 3-2-1 est un repère, pas
une preuve de reprise » et description de source — et le test la verrouille.
Recommandations utilisées, avec leur numéro :

- **R11** — « Il est recommandé d’appliquer la règle “3 – 2 – 1” : 3 copies
  distinctes des données, c’est-à-dire les données en production et
  2 sauvegardes stockées sur des supports différents, dont 1 hors ligne. »
- **R12** — sauvegarde hors ligne indispensable, même moins fréquente.
- **R22** — « Les sauvegardes doivent être testées régulièrement. Une procédure
  de restauration du SI doit être rédigée et régulièrement mise en œuvre. »
- **R23** — « Une stratégie et un **ordre de restauration** doivent être
  définis », en tenant compte des dépendances d’infrastructure, de la criticité
  des applications métier et de la durée de restauration.
- **R24** — isoler l’infrastructure de sauvegarde en priorité en cas
  d’incident de sécurité.
- **R27** — les sauvegardes peuvent contenir des implants ; s’assurer de
  l’innocuité des éléments restaurés.

Confiance : élevée.

**F13 — PDMA/DMIA : le vocabulaire vient d’ici.**
Localisateur : ANSSI-BP-100 v1.1, chapitre 2 « Rappels » et notes de bas de
page 2 et 3.
Texte : « Une stratégie de sauvegarde doit notamment tenir compte de la perte
de données maximale admissible (**PDMA**) et de la durée maximale
d’interruption admissible (**DMIA**) définies pour l’ensemble des valeurs
métier du SI de l’entité ». Note 2 : « PDMA : RPO (recovery point objective) en
anglais. » Note 3 : « DMIA : RTO (recovery time objective) en anglais. »
Confiance : élevée.
Traduction lecteur : les deux sigles que la section 02 traduit sont des termes
officiels français, et le document dit explicitement que les valeurs se
déduisent du métier — ce qui fonde la phrase « L’hébergeur n’en décide aucun ».
Le même chapitre note qu’une PDMA sous 24 h relève d’autres solutions que la
sauvegarde, typiquement la réplication : c’est le socle de l’encadré « Une
réplication n’est pas une sauvegarde ».

**F14 — Recommandations de sécurité pour l’architecture d’un système de journalisation.**
URL citée : `https://messervices.cyber.gouv.fr/guides/recommandations-de-securite-pour-larchitecture-dun-systeme-de-journalisation` — **200**, page canonique, mention « Publié le 28 janvier 2022 ».
PDF du même guide ouvert en complément :
`https://messervices.cyber.gouv.fr/documents-guides/anssi-guide-recommandations_securite_architecture_systeme_journalisation.pdf`.
Référence exacte : **ANSSI-PA-012/ANSSI/SDE**, page de garde 28/01/2022, table
des évolutions : 1.0 le 02/12/2013, **2.0 le 28/01/2022**. Conforme à
l’article.
Même avertissement de portée non normative, mot à mot.
Passage qui soutient « prévoir la journalisation dès les spécifications »,
section 2.1 : « la fonctionnalité de journalisation doit être prise en compte
dans les **cahiers des charges fonctionnels et techniques au lancement d’un
projet informatique** » ; et « C’est également dès la phase de conception que
doivent être prises en compte les exigences réglementaires en matière de
journalisation. »
Confiance : élevée.
Réserve mineure sans effet sur l’article : la page canonique indique que « la
version 1.0 du 02/12/2015 est caduque », quand la table du PDF date la 1.0 du
02/12/2013. L’article ne reprend ni l’une ni l’autre.

### D.4 OWASP

**F15 — ASVS 5.0.0 : version, date, et absence de certification.**
URL citée : `https://owasp.org/www-project-application-security-verification-standard/` — **200**, version stable annoncée **5.0.0, publiée le 30 mai 2025** à Global AppSec EU Barcelone.
Confirmation indépendante de la date : publication de la release
`v5.0.0_release` le **2025-05-30T09:35:31Z** (API GitHub du dépôt `OWASP/ASVS`).
Sur la certification, texte du chapitre « Assessment and Certification » du
standard lui-même
(`https://raw.githubusercontent.com/OWASP/ASVS/master/5.0/en/0x04-Assessment_and_Certification.md`) :
« **OWASP, as a vendor-neutral nonprofit, does not certify any vendors,
verifiers, or software.** Any assurance, trust mark, or certification claiming
ASVS compliance is not officially endorsed by OWASP. »
Confiance : élevée.
Traduction lecteur : « Nous suivons OWASP » ne désigne rien ; une exigence se
cite avec sa version et son résultat de test.

**F16 — ASVS ne couvre ni la sauvegarde ni l’alerte.**
Localisateur : chapitre « What is the ASVS », section « Application » —
« backing up the application or its data is usually the responsibility of an
external process and **is not controlled by the application** or its
developers » ; et chapitre V16 « Security Logging and Error Handling »,
note de la section V16.3 — « while ASVS includes logging of security events in
scope, **alerting and correlation** (e.g., SIEM rules or monitoring
infrastructure) **are considered out of scope** ».
Confiance : élevée.
Pourquoi il figure ici : c’est le localisateur exact de l’affirmation de la
FAQ « aucun des deux ne couvre la sauvegarde, l’alerte, les personnes ou les
obligations qui s’appliquent à votre traitement de données ». L’affirmation est
donc vérifiable — la page ne dit toujours pas où, et c’est un choix : elle cite
l’ASVS par sa page projet, pas chapitre par chapitre.

**F17 — ASVS 16.2.2 : horloges et fuseaux.**
Localisateur : ASVS 5.0.0, exigence **16.2.2** — « Verify that time sources for
all logging components are synchronized, and that timestamps in security event
metadata use UTC or include an explicit time zone offset. UTC is recommended to
ensure consistency across distributed systems ».
Confiance : élevée.
Pourquoi il figure ici : soutient exactement le défaut raconté en section 05
(applicatif en UTC, serveur web en heure de Paris) et la correction « une
horloge synchronisée ». Non cité par la page.

**F26 — Top 10 applicatif : un document de sensibilisation, et lequel.**
URL : `https://owasp.org/www-project-top-ten/` — **200**, rouverte le 30/08/2026.
Titre exact du projet : « OWASP Top Ten Web Application Security Risks ».
Nature, mot pour mot : « **The OWASP Top 10 is a standard awareness document
for developers and web application security.** It represents a broad consensus
about the most critical security risks to web applications. »
Édition courante annoncée par la page : « The most current released version is
the **OWASP Top Ten 2025**. » Les éditions 2021 et 2017 y sont données comme
antérieures.
Confiance : élevée.
Pourquoi il figure ici : la FAQ « Le Top 10 OWASP suffit-il à valider
l’application ? » vise ce document-là, pas l’API Security Top 10. **Écart n° 5,
corrigé** : une entrée `legalSources` distincte le porte désormais. La réponse
de la FAQ ne nomme aucune édition, ce qui la met à l’abri du prochain
millésime ; l’entrée de source, elle, sera à revérifier (§H).

**F18 — API Security Top 10 : le risque n° 1.**
URL citée : `https://owasp.org/www-project-api-security/` — **200**.
Édition courante : **2023**, version stable publiée le 5 juin 2023. Aucune
édition plus récente annoncée sur la page au 30/08/2026.
Risque n° 1 : **API1:2023 — Broken Object Level Authorization**, décrit ainsi :
« APIs tend to expose endpoints that handle object identifiers, creating a wide
attack surface of Object Level Access Control issues. Object level
authorization checks should be considered in every function that accesses a
data source using an ID from the user. »
Confiance : élevée.
Traduction lecteur : c’est mot pour mot le mécanisme du compte témoin — changer
un identifiant dans l’adresse et obtenir un objet qui ne vous appartient pas.

### D.5 NIST, FIRST, CISA

**F19 — NIST CSF 2.0 : cadre, pas liste de contrôles.**
URL citée : `https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20` — **200**. Report number **NIST CSWP 29**, publié le **26 février 2024**.
Document lu : `https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf`.
Résumé : « The CSF does not prescribe how outcomes should be achieved. »
Chapitre 2 : « These outcomes are **not a checklist of actions to perform** ;
specific actions taken to achieve an outcome will vary by organization and use
case […] Additionally, the **order and size** of Functions, Categories, and
Subcategories in the Core **does not imply the sequence or importance** of
achieving them. »
Les six fonctions sont bien **GOVERN, IDENTIFY, PROTECT, DETECT, RESPOND,
RECOVER** ; le document précise qu’elles doivent être traitées
concurremment.
Confiance : élevée.
Traduction lecteur : « Nous suivons le NIST » ne classe rien et ne certifie
rien — l’article l’écrit et le test le verrouille.

**F20 — CVSS v4.0 : l’échelle de gravité.**
URL citée : `https://www.first.org/cvss/v4-0/specification-document` — **200**.
Table « Qualitative Severity Rating Scale » relevée : None 0.0 · **Low 0.1–3.9**
· **Medium 4.0–6.9** · **High 7.0–8.9** · **Critical 9.0–10.0**. Conforme mot
pour mot aux bandes publiées en section 07 et dans `legalSources`.
Le document précise que ses scores indiquent « the **severity** of a
vulnerability relative to other vulnerabilities » — une gravité, pas une
probabilité.
Confiance : élevée.
Note de portée, ajoutée après correction : ce document **ne documente pas
l’EPSS**. L’entrée `legalSources` s’appelle désormais « FIRST · CVSS v4.0 » et
s’arrête là où la spécification s’arrête.

**F21 — EPSS : une probabilité, pas une gravité.**
Localisateur **réel** : `https://www.first.org/epss/` — définition officielle :
« a data-driven machine-learning model that **estimates the probability that a
published CVE will be exploited in the wild in the next 30 days** ».
L’EPSS est maintenu par le FIRST via un groupe d’intérêt dédié ; les scores
sont produits par Empirical Security et diffusés gratuitement.
Confiance : élevée.
**Écart n° 3, corrigé** : l’article rattachait cette affirmation à l’URL de la
spécification CVSS v4.0, qui ne documente pas l’EPSS. Le fait était juste, le
localisateur ne l’était pas. La page porte maintenant une entrée « FIRST ·
EPSS » vers `https://www.first.org/epss/`, et le corps de la section 07 lie
« score EPSS » à cette même page. Réouverte le 30/08/2026 : la définition
ci-dessus y figure mot pour mot, et la page attribue les scores à Empirical
Security sous l’égide du groupe d’intérêt EPSS du FIRST.

**Conséquence sur H45, retirée.** Les valeurs 9,8 et 6,5 de la section 07 ne
renvoyaient à aucune vulnérabilité (écart n° 9). Le texte raisonne désormais
sur les bandes de F20 — « Une faille critique que personne n’exploite passe
après une moyenne activement utilisée » — qui, elles, sont sourcées. Le
recensement du §E passe donc de 49 à 48 hypothèses.

**F22 — Catalogue CISA des vulnérabilités exploitées : ce qu’il oblige, et qui.**
URL citée : `https://www.cisa.gov/known-exploited-vulnerabilities-catalog` — **200**, mais le corps du catalogue est chargé en JavaScript et n’a pas pu être lu (voir §D.9).
Périmètre d’obligation vérifié sur la directive qui institue le catalogue,
**BOD 22-01** (`https://www.cisa.gov/news-events/directives/bod-22-01-reducing-significant-risk-known-exploited-vulnerabilities`, lu le 30/08/2026) : « This directive applies to **all software and hardware
found on federal information systems** managed on agency premises or hosted by
third parties on an agency’s behalf. » Les délais de remédiation (six mois pour
les CVE antérieures à 2021, deux semaines pour les autres) s’imposent aux
agences fédérales américaines.
Confiance : élevée sur le périmètre, moyenne sur le contenu du catalogue lui-même.
Traduction lecteur : conforme à l’article — « il sert ici de critère de tri, et
n’impose aucune obligation à une entreprise française ».

### D.6 Documentation éditeur

**F23 — `npm audit` et l’option `--omit=dev`.**
URL citée : `https://docs.npmjs.com/cli/v10/commands/npm-audit` — **200**.
L’option `omit` existe et est décrite comme « Dependency types to omit from the
installation tree on disk » ; `--omit=dev` écarte donc les dépendances de
développement du périmètre audité. Chaque avis remonté porte « a `name`, `url`,
`id`, **`severity`**, `vulnerable_versions`, and `title` ».
Confiance : élevée.
Ce que la source **ne dit pas** : elle ne fournit ni volume de paquets, ni
nombre d’alertes, ni répartition par gravité. Tous ces nombres de la section 07
sont des hypothèses du cas construit (H37 à H40).
Note de cohérence interne : le test interdit d’écrire `npm audit --omit=dev`
dans la commande du protocole, puisque l’option est nommée plus loin, là où
elle fait effectivement le tri. C’est respecté.

### D.7 Sources maison

**F24 — Grille tarifaire publique Hagnéré Code.**
Deux lectures concordantes le **30/08/2026**, refaites au moment de la
correction :

- source de vérité du dépôt, `src/components/tarifs/body.ts` ;
- page réellement servie, `https://hagnere-code.ai/tarifs` — **200**.

| Prestation                            | Page `/tarifs`       | Article                                         |
| ------------------------------------- | -------------------- | ----------------------------------------------- |
| Audit flash (Maintenance & évolution) | 2 000 € HT           | « 2 000 € HT pour un audit flash »              |
| Cadrage initial (Sécurité & RGPD)     | 5 000 € HT / 5 k€ HT | « 5 000 € HT pour un cadrage sécurité et RGPD » |
| Audit technique — Express             | 8 000 € HT / 8 k€ HT | « 8 000 € HT »                                  |
| Audit technique — Standard            | 18 k€ HT             | « 18 000 € HT »                                 |

Confiance : élevée. Les quatre montants concordent ; l’article écrit
« 18 000 € HT » là où la grille abrège « 18 k€ HT » — même montant.
Réserve à conserver, déjà écrite par l’article : ce sont des repères
indicatifs, « le devis signé fixe le prix ferme ». La page `/tarifs` précise
elle-même qu’un cadrage payé est systématique au-delà de 8 k€ HT de projet.
Détail relevé sur la page servie, pour lever une ambiguïté de lecture : la
ligne « Audit technique · Code review, perf, sécurité » porte **8 k€ HT** en
colonne « Express — durée et intervenants au devis » et **18 k€ HT** en colonne
« Standard — 8 dimensions, rapport 40-70 p. ». L’article dit bien 8 000 € HT en
Express et 18 000 € HT en Standard.
Fraîcheur : l’article annonçait un relevé au 28 août 2026. Le relevé ayant été
refait le 30/08/2026 sur la page servie **et** sur `src/components/tarifs/body.ts`,
et les quatre montants étant identiques, la date affichée aux trois endroits
(section 08, bloc de transparence, entrée `legalSources`) a été portée au
**30 août 2026**. La revérification à douze mois reste annoncée.

**F25 — NIS 2 : le localisateur qui manquait (écart n° 4, corrigé).**
La FAQ affirme : « La directive (UE) 2022/2555 élargit le champ des entreprises
soumises à des obligations de cybersécurité, mais son application dépend de
votre secteur d’activité et de votre taille, et les modalités relèvent du texte
français de transposition. »
Contrôlé le 30/08/2026 :

- `https://eur-lex.europa.eu/eli/dir/2022/2555/oj/fra` — **200** (existence de
  la directive confirmée par le code ; texte non lu, voir §D.9) ;
- `https://messervices.cyber.gouv.fr/nis2`, site officiel de l’ANSSI, lu : les
  entités concernées relèvent de **18 secteurs d’activité** ; les seuils sont
  de taille — « au moins 250 personnes ou […] un chiffre d’affaires annuel
  supérieur à 50 millions d’euros » pour les entités essentielles, « au moins
  50 personnes ou […] un chiffre d’affaires et un bilan annuel supérieur à
  10 millions d’euros » pour les entités importantes ; et « la transposition de
  la directive NIS 2 en France est **en cours** ».

Relevé complet du 30/08/2026 sur `https://messervices.cyber.gouv.fr/nis2`,
mot pour mot : « Plusieurs milliers d’entités réparties sur 18 secteurs
d’activité seront concernés » ; entités essentielles « au moins 250 personnes
ou ont un chiffre d’affaires annuel supérieur à 50 millions d’euros et un bilan
annuel supérieur à 43 millions d’euros » ; entités importantes « au moins
50 personnes ou ont un chiffre d’affaires et un bilan annuel supérieur à
10 millions d’euros ».

Conclusion : l’affirmation de la FAQ est **exacte et prudente** — secteur,
taille, et renvoi au texte de transposition. Elle n’est plus orpheline : une
entrée `legalSources` « ANSSI · NIS 2, directive (UE) 2022/2555 » pointe sur ce
portail officiel, qui a l’avantage de servir réellement du texte là où l’URL
EUR-Lex de la directive n’a été contrôlée qu’en existence (§D.9). La réserve
« cette qualification appartient à un juriste »
reste la bonne posture : le cas construit (46 salariés, 12 M€) tomberait sous le
seuil « entité importante » sur le critère de taille, mais aucun des deux
critères ne se lit isolément.

### D.8 Ce que les sources ne permettent pas d’affirmer

Cette liste est le garde-fou du guide. Aucune de ces phrases ne peut être
écrite à partir des sources ci-dessus.

- Qu’un nombre de contrôles, quel qu’il soit, suffise pour toute application.
- Qu’ASVS, le NIST CSF, l’ANSSI ou la CNIL certifient, valident ou approuvent
  une application. F15 dit explicitement le contraire pour OWASP ; F12 et F14
  écartent le caractère normatif pour l’ANSSI ; F19 écarte la liste de
  contrôles pour le NIST.
- Qu’un exercice de restauration réussi garantisse la prochaine restauration.
- Qu’une durée de conservation de journaux convienne à tous les événements
  (F11 borne la recommandation au champ des données personnelles).
- Qu’un résultat de l’outil local vaille audit, score ou autorisation de mise
  en production — le module `security-readiness.ts` ne produit qu’un verdict
  textuel parmi onze et le rappelle dans deux d’entre eux.
- Qu’une PME risque « 2 % » : F04 impose « le montant le plus élevé étant
  retenu », ce qui rend la formule fausse dans les deux sens.
- Que le catalogue CISA crée une obligation en France (F22).
- Qu’il existe une fréquence de sauvegarde, une architecture ou un RTO/RPO
  imposés par un texte (F01, F13).

### D.9 Sources citées ou nommées par l’article qui n’ont PAS pu être rouvertes

Trois entrées. Elles sont déclarées ici plutôt que simulées.

1. **`https://eur-lex.europa.eu/eli/reg/2016/679/art_33/oj/fra`** — l’URL
   répond **200**, mais l’extraction n’a rendu que les considérants du
   règlement, jamais le texte de l’article 33. Le contenu de F02 et F03 a donc
   été vérifié sur la reproduction officielle de la CNIL
   (`https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4`),
   **et non sur l’URL que la page propose au lecteur**.
2. **`https://eur-lex.europa.eu/eli/reg/2016/679/art_83/oj/fra`** — même
   situation. F04 a été vérifié sur
   `https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre8`.
   Un contrôle croisé sur une reproduction non officielle (`gdpr-info.eu`) donne
   le même texte, mais n’est pas retenu comme preuve : ce n’est pas une source
   primaire.
3. **`https://www.cisa.gov/known-exploited-vulnerabilities-catalog`** — l’URL
   répond **200**, mais le corps du catalogue est rendu en JavaScript et la
   récupération n’a ramené que la navigation du site. Le périmètre d’obligation
   affirmé par l’article a donc été vérifié sur la directive BOD 22-01 (F22),
   pas sur cette page.

Deux vérifications supplémentaires n’ont porté que sur l’existence, sans
lecture du contenu : `https://eur-lex.europa.eu/eli/dir/2022/2555/oj/fra`
(NIS 2, **200**) et l’URL EUR-Lex de l’article 32, dont seule la formule
opérative a pu être extraite — elle a été confirmée une seconde fois sur la
reproduction CNIL. **L’URL EUR-Lex de NIS 2 n’a pas été ajoutée à la page pour
cette raison exacte** : l’entrée `legalSources` ajoutée à l’écart n° 4 pointe
sur le portail ANSSI, dont le contenu a été lu.

**Conséquence pratique, et ce qui a été fait.** Un lecteur qui suit les liens
de la page vers EUR-Lex atterrit sur une page valide mais devra naviguer
jusqu’à l’article visé ; il ne lui est pas servi directement. Les trois liens
EUR-Lex des articles 32, 33 et 83 ont été **conservés** : ce sont les URL
officielles du règlement, et les remplacer aurait déplacé la citation d’un
texte de loi vers une reproduction. En revanche, les deux définitions ajoutées
à l’écart n° 6 pointent, elles, sur la reproduction CNIL : elle rend le texte,
et le lecteur qui suit ce lien-là lit la définition sans naviguer.

---

## E. Les hypothèses du cas construit — recensées sans source

Rien de ce qui suit n’est un fait. L’article le dit lui-même, deux fois : dans
le premier écran (« Les euros et les durées cités viennent d’un cas construit
pour ce guide, entreprise et volumes compris : rien n’a été relevé chez un
client ») et dans l’étiquette du cas (« l’entreprise, ses volumes, ses horaires
et ses coûts internes sont choisis pour l’exemple et ne viennent d’aucune
source ; seuls les montants de prestation sont repris de notre grille
publiée »). Les deux formulations sont verrouillées par test.

**Total recensé après correction : 48 hypothèses.** Le relevé du matin en
comptait 49 ; H45 (les scores 9,8 et 6,5) a été retirée de l’article, donc du
recensement. L’article en annonce nommément huit ; les quarante autres relèvent
de l’étiquette générale du cas construit. Le tableau ci-dessous les nomme une
par une, pour qu’un lecteur puisse littéralement remplacer chaque ligne par la
sienne.

### E.1 Les huit annoncées à découvert en section 02

| ID  | Hypothèse                                                                  | Où elle produit un euro ou une durée     |
| --- | -------------------------------------------------------------------------- | ---------------------------------------- |
| H01 | 38 € l’heure chargée pour le temps interne                                 | C01, C05, C08                            |
| H02 | 500 € la journée de développement                                          | C07                                      |
| H03 | six minutes par commande ressaisie                                         | C05                                      |
| H04 | deux jours et demi pour corriger trois routes                              | C07                                      |
| H05 | une heure à cinq personnes pour l’exercice sur table                       | C08                                      |
| H06 | une demi-journée pour l’exercice de restauration                           | coût de l’exercice, non chiffré en euros |
| H07 | deux heures d’attente sur un ticket d’hébergement                          | composante de H29 et H42                 |
| H08 | une journée pour la première série des quatre mesures, deux heures ensuite | FAQ, et son détail par mesure (H46-H48)  |

Depuis la correction de l’écart n° 8, H08 se termine sur la page par « dont
les dix minutes, l’heure et la minute détaillées en questions fréquentes » : le
rattachement de H46, H47 et H48 se lit, il ne se déduit plus.
L’article ajoute la bonne consigne : « Remplacez-les par les vôtres, comme les
volumes du cas. » Pour H01, il nomme même qui sait la calculer —
l’expert-comptable ou le contrôleur de gestion, à partir du brut et des charges
patronales.

### E.2 L’entreprise et sa base (section 01)

| ID  | Hypothèse                                                                                                                              |
| --- | -------------------------------------------------------------------------------------------------------------------------------------- |
| H09 | société de négoce et d’installation de matériel médical                                                                                |
| H10 | 46 salariés                                                                                                                            |
| H11 | 12 millions d’euros de chiffre d’affaires                                                                                              |
| H12 | application écrite en huit mois par un développeur indépendant                                                                         |
| H13 | 34 utilisateurs : 12 commerciaux, 6 préparateurs, 9 chauffeurs-livreurs, 4 à l’ADV, 2 au contrôle de gestion, 1 responsable applicatif |
| H14 | 3 100 clients professionnels                                                                                                           |
| H15 | 480 praticiens libéraux parmi eux                                                                                                      |
| H16 | 9 300 bons de livraison signés                                                                                                         |

### E.3 L’activité et le temps (section 02)

| ID  | Hypothèse                                                                  |
| --- | -------------------------------------------------------------------------- |
| H17 | 62 commandes enregistrées par jour ouvré                                   |
| H18 | 84 € de marge brute moyenne par commande                                   |
| H19 | trois commandes sur dix ne reviennent jamais (30 %)                        |
| H20 | journée de travail de 9 h à 17 h, soit huit heures                         |
| H21 | 21 personnes bloquées sur 34, les 13 autres basculant sur le carnet papier |

Note de lecture : l’article ne dit pas **lesquelles** des 34 personnes sont les
21 bloquées. Ce n’est pas une erreur — c’est une répartition posée, non
détaillée. Un lecteur qui refait le calcul chez lui doit décider lui-même qui
s’arrête.

### E.4 Les seuils décidés par la direction (section 02)

| ID  | Hypothèse                             |
| --- | ------------------------------------- |
| H22 | DMIA acceptée : quatre heures ouvrées |
| H23 | PDMA acceptée : une heure             |

Ces deux valeurs sont posées, mais leur **nature** est un fait sourcé : F13
établit qu’elles relèvent du métier et non de l’hébergeur. L’article ne
confond pas les deux registres.

### E.5 Résultats de la mesure 1 — restauration (section 04)

| ID  | Hypothèse                                                                                       |
| --- | ----------------------------------------------------------------------------------------------- |
| H24 | la sauvegarde tourne à 2 h du matin                                                             |
| H25 | la base revient en 40 minutes                                                                   |
| H26 | les fichiers déposés par les utilisateurs sont absents du périmètre sauvegardé                  |
| H27 | configuration et secrets non sauvegardés ; une clé d’envoi d’e-mails reste invalide trois jours |
| H28 | les comptes reviennent tous avec le rôle par défaut                                             |
| H29 | durée totale de l’exercice : 6 h 40                                                             |

### E.6 Résultats de la mesure 2 — alerte (section 05)

| ID  | Hypothèse                                                                                   |
| --- | ------------------------------------------------------------------------------------------- |
| H30 | événement joué un mardi : compte d’administration créé à 14 h 05, supprimé à 14 h 12        |
| H31 | journal applicatif en UTC, journal du serveur web en heure de Paris → horodatage lu 12 h 05 |
| H32 | aucune alerte n’est partie : la règle écrivait à une boîte générique non relevée            |
| H33 | les journaux de l’offre d’hébergement souscrite sont conservés sept jours                   |
| H34 | seuil retenu : quinze minutes pour qu’une personne nommée reçoive l’alerte                  |

H34 est un **seuil éditorial**. Aucune source citée ne fixe quinze minutes.
L’article ne prétend pas le contraire — il écrit « un seuil fixé par votre
direction et non par un référentiel » — mais la valeur reste posée.
H31 est arithmétiquement cohérent : Paris est à UTC+2 en été, 14 h 05 Paris
donne bien 12 h 05 UTC.

### E.7 Résultats de la mesure 3 — compte témoin (section 06)

| ID  | Hypothèse                                                           |
| --- | ------------------------------------------------------------------- |
| H35 | trois réponses 200 sur dix rejeux, sur trois routes                 |
| H36 | cinq rôles à nommer, chacun avec un suppléant qui détient les accès |

H36 est un choix d’organisation, pas une prescription sourcée. Les cinq rôles
énumérés sont : qui signe la mise en service ; qui qualifie les alertes ; qui
déclenche une restauration et détient les accès ; qui suit les corrections ;
qui prévient le délégué à la protection des données et, s’il le faut, un
juriste. Le décompte est exact.

### E.8 Résultats de la mesure 4 — dépendances (section 07)

| ID  | Hypothèse                                                                                                                                                              |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| H37 | 1 043 paquets installés                                                                                                                                                |
| H38 | 68 dépendances directes                                                                                                                                                |
| H39 | 31 alertes : 1 critique, 5 hautes, 14 moyennes, 11 basses                                                                                                              |
| H40 | tri : 2 alertes ne servent qu’à la construction, 1 porte sur une fonction jamais appelée, 2 des 3 restantes ne figurent pas au catalogue des vulnérabilités exploitées |
| H41 | la version corrigée est publiée depuis le 14 janvier, relevée au 26 août 2026                                                                                          |

### E.9 Les trois incidents (section 09)

| ID  | Hypothèse                                                                                                                    |
| --- | ---------------------------------------------------------------------------------------------------------------------------- |
| H42 | incident 1 : panne un mardi à 9 h 20, restauration démarrée à 9 h 40, base revenue en 40 min, 2 h d’attente de ticket, 3 h 40 de remontée et de vérification, service rétabli à 16 h |
| H43 | incident 2 : compte d’un développeur extérieur jamais révoqué, export six semaines plus tard, geste découvert 41 jours après |
| H44 | incident 3 : un commercial change d’entreprise et emporte une capture des tarifs négociés                                    |

L’article les présente comme « ces trois incidents reprennent le même cas
construit et des mécanismes documentés par la CNIL, l’ANSSI et l’OWASP — ce ne
sont pas des dossiers clients ». La formulation est exacte : les **mécanismes**
sont sourcés (F09, F10, F11, F12, F14, F18), les **faits** sont posés.

### E.10 Valeurs illustratives et durées ajoutées par la FAQ

| ID  | Hypothèse                                                                                                                      |
| --- | ------------------------------------------------------------------------------------------------------------------------------ |
| ~~H45~~ | ~~une faille notée 9,8 non exploitée contre une 6,5 activement utilisée~~ — **retirée de l’article le 30/08/2026 (écart n° 9)** |
| H46 | dix minutes d’exécution pour le test d’alerte                                                                                  |
| H47 | une heure pour les dix rejeux, une fois les deux sessions ouvertes                                                             |
| H48 | une minute pour sortir la liste des dépendances vulnérables                                                                    |
| H49 | coût d’un environnement séparé : une copie de l’hébergement pendant deux jours, plus le temps de la monter (posé sans chiffre) |

H45 était cohérent avec F20 (9,8 dans la bande critique, 6,5 dans la bande
moyenne), mais ne renvoyait à aucune vulnérabilité réelle et ne figurait pas
parmi les huit hypothèses annoncées. Elle a été retirée : la phrase raisonne
maintenant sur les bandes elles-mêmes, qui sont sourcées.
H46 à H48 se rattachent à l’agrégat H08, et la section 02 le dit désormais
explicitement — c’était l’écart n° 8.

---

## F. Les calculs, refaits à la main

Chaque calcul est reproduit ici indépendamment de la page et du test, à partir
des seules hypothèses nommées ci-dessus. Le résultat obtenu est comparé au
montant publié.

### C01 — Coût d’une heure ouvrée sans l’application

Entrées : H21 (21 personnes bloquées), H01 (38 €/h), H17 (62 commandes/jour),
H18 (84 € de marge), H20 (8 heures ouvrées), H19 (30 % non rattrapées).

```text
main-d’œuvre immobilisée   21 × 38                = 798,00 €/h
marge de la journée        62 × 84                = 5 208,00 €
marge horaire              5 208 ÷ 8              = 651,00 €/h
part non rattrapée         651 × 0,3              = 195,30 €/h
total                      798,00 + 195,30        = 993,30 €/h
arrondi retenu par l’article                       = 993 €/h
```

Publié : 798 €, 5 208 €, 651 €, 195,30 €, 993,30 € puis 993 €. **Concordant.**
Le test vérifie les mêmes étapes contre des constantes tenues à la main
(`21*38`, `62*84`, `5208/8`, `651*3`, `798*10+1953`).

### C02 — Le contre-exemple du samedi

Entrée : C01, plus la borne « heure ouvrée ».

```text
22 h × 993 €  = 21 846 €
```

Publié : 21 846 €. **Concordant.** L’article publie ce nombre **pour le
refuser** : « un arrêt de vingt-deux heures un samedi ne coûte pas 21 846 €,
mais le temps qu’il consomme le lundi matin. » C’est la borne la plus utile du
guide, et le test la verrouille en exigeant la phrase « Ce montant vaut par
heure ouvrée » et la mention « de 9 h à 17 h ».

### C03 — Le seuil accepté par la direction

Entrées : H22 (4 h ouvrées), C01 (993 €/h).

```text
4 × 993 = 3 972 €
```

Publié : 3 972 €. **Concordant.**

### C04 — L’écart de restauration

Entrées : H29 (6 h 40), C01, C03.

```text
6 h 40 = 6 + 40/60 = 20/3 heures
993 × 20 = 19 860 ; 19 860 ÷ 3 = 6 620 €
6 620 − 3 972 = 2 648 €
```

Publié : 6 620 € et 2 648 €. **Concordant.**
Précision que l’article prend soin d’écrire, et que le test verrouille :
l’exercice se joue sur une copie et **ne coûte pas** 6 620 € ; les 2 648 € sont
ce que la même durée coûterait « si la même durée était subie en heures
ouvrées ».

### C05 — La ressaisie d’une journée perdue

Entrées : H17 (62 commandes), H03 (6 min), H01 (38 €/h).

```text
62 × 6 = 372 minutes
372 − (6 × 60) = 12  →  6 h 12
372 × 38 = 14 136 ; 14 136 ÷ 60 = 235,60 €
```

Publié : 372 minutes, 6 h 12, 235,60 €. **Concordant, au centime.**
L’article ajoute la limite juste : « sans compter les bons signés que personne
ne peut reconstituer ».

### C06 — La perte de données

Entrées : H24 (sauvegarde à 2 h), panne à 17 h.

```text
17 − 2 = 15 heures
```

Publié : « quinze heures », « la journée de saisie entière, 62 commandes ».
**Concordant** : les 15 heures couvrent la totalité de la plage 9 h–17 h posée
en H20, donc les 62 commandes du jour.
Conséquence de décision que l’article en tire : entre la PDMA acceptée d’une
heure (H23) et quinze heures constatées, « il ne s’agit plus d’un réglage mais
d’un autre contrat d’hébergement ».

### C07 — Corriger les trois routes

Entrées : H04 (2,5 jours), H02 (500 €/j).

```text
2,5 × 500 = 1 250 €
```

Publié : 1 250 €, en section 06, dans le tableau de décision et dans
l’incident n° 3. **Concordant.**

### C08 — L’exercice sur table

Entrées : H05 (5 personnes × 1 h), H01 (38 €/h).

```text
5 × 1 × 38 = 190 €
```

Publié : 190 €. **Concordant.**

### C09 — Le plafond de l’article 83

Entrées : H11 (12 M€ de chiffre d’affaires), F04 (10 M€ ou 2 %, le plus élevé).

```text
12 000 000 × 2 % = 240 000 €
240 000 € < 10 000 000 €  →  le plafond retenu est 10 000 000 €
```

Publié : 240 000 €, « c’est donc le plafond de 10 millions qui s’applique ».
**Concordant.** L’article prend soin d’ajouter qu’« un plafond n’est pas une
sanction ».

### C10 — Le décompte des utilisateurs

Entrée : H13.

```text
12 + 6 + 9 + 4 + 2 + 1 = 34
34 − 21 = 13
```

Publié : 34 utilisateurs, 21 arrêtés, 13 sur carnet papier. **Concordant.**

### C11 — La chaîne du tri des dépendances

Entrées : H39, H40.

```text
répartition   1 + 5 + 14 + 11        = 31 alertes
mise de côté  14 + 11                = 25  →  restent 6 critiques ou hautes
question 1    6 − 2 (dev seulement)  = 4
question 2    4 − 1 (fonction jamais appelée) = 3
question 3    3 − 2 (hors catalogue) = 1
```

Publié : 31 → 6 → 4 → 3 → 1. **Concordant.** La mise de côté qui fait passer
de 31 à 6 est écrite explicitement et verrouillée par test — sans elle, un
lecteur qui refait le compte obtient 29.

### C12 — Le délai d’installation du correctif

Entrées : H41 (publié le 14 janvier, relevé au 26 août 2026).
2026 n’est pas bissextile.

```text
janvier restant   31 − 14 = 17
février                    28   → cumul  45
mars                       31   → cumul  76
avril                      30   → cumul 106
mai                        31   → cumul 137
juin                       30   → cumul 167
juillet                    31   → cumul 198
août jusqu’au 26           26   → cumul 224
```

Publié : 224 jours. **Concordant.**
Fraîcheur : ce nombre est daté au 26 août 2026 dans le texte. Il dérive d’un
jour par jour ; l’ancrage explicite le rend honnête, mais il vieillit vite.

### C13 — La chronologie de l’incident n° 1

Entrées : H42.

```text
avant démarrage      9 h 20 → 9 h 40                 =  20 min
base de données      restaurée en quarante minutes   =  40 min   (cumul  60)
attente du ticket    deux heures                     = 120 min   (cumul 180)
remontée + contrôle  trois heures quarante           = 220 min   (cumul 400)
total                400 min                         = 6 h 40
fin                  9 h 20 + 6 h 40                 = 16 h 00
9 h 20 ≥ 9 h 00  et  16 h 00 ≤ 17 h 00   →  entièrement en heures ouvrées
6 h 40 × 993 € = 6 620 €  (identique à C04)
```

Publié : « Un mardi à 9 h 20 », « la base revient en quarante minutes »,
« ticket, deux heures d’attente, puis trois heures quarante de remontée et de
vérification des parcours », « Service rétabli à 16 h », 6 620 € dont 2 648 €
au-dessus du seuil. **Concordant, et désormais décomposable.**
Le test protège explicitement ce point : une version antérieure plaçait la
panne de 17 h à 23 h 40, soit six heures quarante entièrement hors des heures
facturées — l’assertion `not.toContain("23 h 40")` empêche la régression.
**Écart n° 10, corrigé** : les composantes nommées totalisaient 3 h et
laissaient 3 h 40 sans emploi. Le texte nomme désormais ces 3 h 40. Le total
n’a pas bougé — 6 h 40, 6 620 €, 2 648 € au-dessus du seuil —, seule sa
composition est écrite. Les quatre constantes sont reprises dans le test
(`20 + 40 + 120 + 220 = 400` et `400 = 6 × 60 + 40`).

### C14 — Les dix rejeux

Entrée : H35.

```text
10 − 3 = 7 refus
```

Publié : « trois réponses sur dix reviennent en 200 », « les sept refus obtenus
à côté ne compensent rien ». **Concordant.**

### C15 — L’incident n° 2 et les journaux

Entrées : H43 (découverte 41 jours après), H33 (7 jours de conservation).

```text
41 > 7  →  il ne reste rien dans les journaux au moment de la découverte
```

Publié : « en relisant des journaux conservés sept jours, où il ne reste
rien ». **Concordant.** La conséquence tirée est juridiquement correcte au
regard de F02 : le délai de 72 heures court depuis la prise de connaissance,
donc depuis le 41ᵉ jour, et il faut décider sans savoir décrire l’étendue.

### C16 — L’horodatage décalé

Entrées : H30 (geste à 14 h 05), H31 (applicatif en UTC, heure d’été).

```text
14 h 05 Paris (UTC+2 en été) = 12 h 05 UTC
```

Publié : « horodaté 12 h 05 ». **Concordant.**

### Reproductibilité — l’arrondi 993,30 € → 993 €, et ce qu’il déplace

L’article annonce l’arrondi une fois, en section 02, et dit maintenant jusqu’où
il porte : « 993,30 € l’heure, arrondi à **993 €** : tous les montants de ce
guide partent de là et non des centimes ». Un lecteur méticuleux qui garde les
centimes obtient d’autres nombres, tous plus hauts et d’au plus 6,60 € :

| Montant                        | Publié (base 993 €) | Avec 993,30 € | Écart  |
| ------------------------------ | ------------------- | ------------- | ------ |
| Seuil DMIA (4 h)               | 3 972 €             | 3 973,20 €    | 1,20 € |
| Durée subie (6 h 40)           | 6 620 €             | 6 622,00 €    | 2,00 € |
| Écart au-dessus du seuil       | 2 648 €             | 2 648,80 €    | 0,80 € |
| Arrêt de 22 h (contre-exemple) | 21 846 €            | 21 852,60 €   | 6,60 € |

Aucun de ces écarts ne change une décision. Ils sont notés pour qu’un lecteur
qui ne retrouve pas exactement 6 620 € sache pourquoi, plutôt que de conclure à
une erreur. **Écart n° 11, corrigé** : la phrase de la section 02 prévient
désormais que la propagation vaut pour tous les montants du guide. Écarts
refaits à la main : 3 973,20 − 3 972 = 1,20 ; 6 622 − 6 620 = 2,00 ;
2 648,80 − 2 648 = 0,80 ; 21 852,60 − 21 846 = 6,60.

### Récapitulatif — ce que l’article publie, et d’où ça vient

| Nombre publié                       | Nature        | Chaîne                              |
| ----------------------------------- | ------------- | ----------------------------------- |
| 993 €/h                             | Calcul        | C01 ← H01, H17, H18, H19, H20, H21  |
| 3 972 €                             | Calcul        | C03 ← C01, H22                      |
| 6 620 €                             | Calcul        | C04 ← C01, H29                      |
| 2 648 €                             | Calcul        | C04 ← C03, C04                      |
| 235,60 €                            | Calcul        | C05 ← H01, H03, H17                 |
| 1 250 €                             | Calcul        | C07 ← H02, H04                      |
| 190 €                               | Calcul        | C08 ← H01, H05                      |
| 240 000 €                           | Calcul        | C09 ← H11, **F04**                  |
| 21 846 €                            | Calcul        | C02 ← C01 (publié pour être écarté) |
| 224 jours                           | Calcul        | C12 ← H41                           |
| 15 minutes                          | **Hypothèse** | H34 — seuil éditorial               |
| 20 / 40 / 120 / 220 min             | Calcul        | C13 ← H42 (décomposition des 6 h 40) |
| 72 heures                           | **Fait**      | F02                                 |
| 6 mois à 1 an                       | **Fait**      | F11                                 |
| 9,0–10,0 etc.                       | **Fait**      | F20                                 |
| 30 jours EPSS                       | **Fait**      | F21                                 |
| 2 000 / 5 000 / 8 000 / 18 000 € HT | **Fait**      | F24                                 |
| 10 M€ / 2 %                         | **Fait**      | F04                                 |

---

## G. Ce que l’article promet, et où la promesse est tenue

| Promesse du premier écran                                            | Section qui la tient | Preuve                                 |
| -------------------------------------------------------------------- | -------------------- | -------------------------------------- |
| « le temps réel d’une restauration complète »                        | 04                   | protocole en 5 étapes + 5 objets ; C04 |
| « les minutes entre un événement sensible et l’alerte »              | 05                   | scénario horodaté ; H34 comme seuil    |
| « les codes de réponse rendus au compte le moins privilégié »        | 06                   | protocole en 5 étapes ; C14 ; F18      |
| « le délai entre la publication d’un correctif et son installation » | 07                   | C11, C12 ; F20, F21, F22, F23          |
| « le seuil qui tranche et ce que l’écart coûte »                     | 02, 03, 08           | C01 à C09 ; tableau des cinq issues    |
| « rien n’a été relevé chez un client »                               | 01, 09, transparence | §E de ce dossier — 48 hypothèses       |

### Cohérence avec l’outil local

L’outil (`security-readiness.ts`) porte **huit** sujets, dont quatre
correspondent exactement aux quatre mesures du corps : `backupAndRestore`,
`loggingAndDetection`, `accessAndSecrets`, `deliveryAndDependencies`. Les
quatre autres — `assetsAndImpact`, `incidentResponse`, `maintenance`,
`responsibilities` — sont précisément ceux que la section 07 annonce comme
« les quatre sujets que rien ne mesure ». La correspondance est écrite dans le
texte et vérifiée par test.

Onze verdicts, dans un ordre de priorité déterministe : incident actif →
blocage déclaré → contexte inconnu → contrôle inconnu → preuve orale →
responsabilités → restauration → détection → autres exercices → relecture
contextuelle → revue métier limitée. Aucun score, aucun pourcentage, aucune
autorisation de mise en production. Deux verdicts le rappellent explicitement,
dont `READY_FOR_REVIEW` : « Ce résultat n’atteste pas la sécurité de
l’application et n’autorise pas sa mise en production. »

Confidentialité : le fichier de l’outil ne contient ni `fetch`, ni
`XMLHttpRequest`, ni `localStorage`, ni `sessionStorage`, ni `document.cookie`
— vérifié par lecture directe et par assertion. Aucun champ de texte libre,
aucun `textarea` : rien à saisir qui pourrait contenir un secret. La phrase
affichée à l’utilisateur — « aucune réponse ne quitte la page ni n’est
enregistrée durablement par cet outil » — décrit donc exactement ce que le code
fait.

---

## H. Fraîcheur : quand chaque élément doit être revérifié

| Élément                                     | Déclencheur de revérification                                        | Risque si on attend                             |
| ------------------------------------------- | -------------------------------------------------------------------- | ----------------------------------------------- |
| Prix Hagnéré Code (F24)                     | À chaque modification de `/tarifs` ; au plus tard 12 mois            | Un prix public faux dans un guide qui vend      |
| Guide CNIL, PDF de couverture (F07)         | Nouveau millésime affiché en couverture ou journal des modifications | Citation d’une version retirée                  |
| Fiches CNIL du 14 mars 2024 (F09, F10, F11) | Changement de la date affichée sur la fiche                          | Une durée ou une consigne périmée               |
| ANSSI-BP-100 (F12)                          | Nouvelle version au tableau des évolutions du PDF                    | Numéro de recommandation qui ne correspond plus |
| ANSSI-PA-012 (F14)                          | Idem                                                                 | Idem                                            |
| ASVS (F15, F16, F17)                        | Publication d’une 5.1 ou 6.0 stable                                  | « 5.0.0 » devient une version ancienne          |
| API Security Top 10 (F18)                   | Publication d’une édition postérieure à 2023                         | « édition 2023 » devient faux                   |
| Top 10 applicatif (F26)                     | Publication d’une édition postérieure au Top Ten 2025                | L’entrée de source annonce une version dépassée |
| NIST CSF (F19)                              | Nouveau CSWP remplaçant le 29                                        | Faible — cadre stable                           |
| CVSS (F20)                                  | Nouvelle version majeure de CVSS                                     | Bandes de gravité obsolètes                     |
| EPSS (F21)                                  | Changement de la définition ou du producteur des scores              | La fenêtre de trente jours devient fausse       |
| Catalogue CISA (F22)                        | Changement de directive encadrant le catalogue                       | Périmètre d’obligation mal décrit               |
| `npm audit` (F23)                           | Passage de la doc citée de la v10 à une v supérieure                 | Lien vers une doc archivée                      |
| NIS 2 (F25)                                 | **Publication du texte français de transposition**                   | La FAQ deviendrait sous-informative             |
| « 224 jours » (C12)                         | Chaque jour — le nombre est ancré au 26 août 2026                    | Faible : l’ancrage est écrit                    |
| Effectif et date de création Hagnéré Code   | Toute évolution de l’équipe                                          | Contradiction avec la règle d’or du dépôt       |

---

## I. Traçabilité de cette passe

### I.1 Ce qui a été lu dans le dépôt

`src/app/guides/securite-application-metier/page.tsx` (intégral) ·
`security-readiness.ts` (intégral) · `security-readiness-tool.tsx` (extraits
ciblés) · `content-quality.test.ts` (intégral) · `src/lib/guides.ts` (entrée du
slug) · `src/components/tarifs/body.ts` (grille) ·
`docs/charte-qualite-guides.md` (§3.2, §3.3, §3.4, §4.1, §4.2, §4.3, §13, §15) ·
`CLAUDE.md` · l’ancien dossier `docs/research/securite-application-metier.md`
(plan uniquement) · les six manifestes du slug ·
`src/lib/editorial-governance.test.ts` (pour savoir ce que les manifestes
engagent réellement).

### I.2 Commandes exécutées

Relevé du matin :

```text
npx vitest run src/app/guides/securite-application-metier/
    → 2 fichiers, 63 tests, 63 passent (30/08/2026, 941 ms)

GUIDE_BASE_URL=https://hagnere-code.ai \
  node scripts/measure-guide-readtime.mjs securite-application-metier
    → 3 329 mots, 17 min  (mesure de la version EN PRODUCTION, pas du dépôt)

shasum -a 256 src/app/guides/securite-application-metier/page.tsx
    → 8950670a99f34ef46130864eb5d54b7ae07f1b0819e819010e605faef8d4579c
      (manifestes quality et integration : d9539a5d… — désynchronisés)
```

Passe de correction, le soir :

```text
npx tsc --noEmit
    → aucune sortie

npx vitest run src/app/guides/securite-application-metier/
    → 2 fichiers, 65 tests, 65 passent (30/08/2026)
      (2 tests ajoutés : localisateurs, puis chronologie et arrondi)

npx tsx scripts/measure-guide-readtime.mjs securite-application-metier
    → 4 435 mots, 22 min      (serveur local, version du dépôt)
npx tsx scripts/measure-guide-readtime.mjs --check securite-application-metier
    → OK   mesuré 22 min   publié 22 min

shasum -a 256 src/app/guides/securite-application-metier/page.tsx
    → b29f3930d69b830e4e7e070ea469322fc7373745fadd5fe768768f02756c5c60
shasum -a 256 src/app/guides/securite-application-metier/content-quality.test.ts
    → f2ab8ddca0321e2854c9a08be2ad4ae0ca31afd10d4c425643e0d7824b0c5a83
```

Le calibre du dépôt après correction (4 476 / 5 158 / 5 898 mots) a été obtenu
en rejouant hors du dépôt les fonctions de comptage du test colocalisé, sur le
rendu statique de la page. Il diffère de la mesure du script (4 435) parce que
celui-ci retire en plus les blocs `sr-only` ; les deux arrondissent à la même
minute, ce que `--check` vérifie. Le script exige un serveur : lancé contre la
production, il mesure la version de juillet, ce qui a révélé l’écart n° 1.

### I.3 URL contrôlées le 30 août 2026

Vingt URL citées par l’article après correction — les seize d’origine et les
quatre ajoutées le soir —, toutes en **HTTP 200** :

```text
200  https://eur-lex.europa.eu/eli/reg/2016/679/art_32/oj/fra
200  https://eur-lex.europa.eu/eli/reg/2016/679/art_33/oj/fra
200  https://eur-lex.europa.eu/eli/reg/2016/679/art_83/oj/fra
200  https://www.cnil.fr/sites/default/files/2026-05/cnil_guide_securite_personnelle.pdf
200  https://www.cnil.fr/fr/securite-des-donnees-les-regles-essentielles
200  https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques
200  https://www.cnil.fr/fr/securite-sauvegarder
200  https://www.cnil.fr/fr/securite-tracer-les-operations
200  https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf
200  https://messervices.cyber.gouv.fr/guides/recommandations-de-securite-pour-larchitecture-dun-systeme-de-journalisation
200  https://owasp.org/www-project-application-security-verification-standard/
200  https://owasp.org/www-project-api-security/
200  https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20
200  https://www.first.org/cvss/v4-0/specification-document
200  https://www.cisa.gov/known-exploited-vulnerabilities-catalog
200  https://docs.npmjs.com/cli/v10/commands/npm-audit
200  https://www.first.org/epss/                                          (ajoutée)
200  https://owasp.org/www-project-top-ten/                               (ajoutée)
200  https://messervices.cyber.gouv.fr/nis2                               (ajoutée)
200  https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre1  (ajoutée)
```

URL ouvertes en complément, pour lire ce que les URL citées n’ont pas rendu ou
pour fournir un localisateur manquant :

```text
https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre1   (art. 4 §1 et §12)
https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4   (art. 32, 33, 34)
https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre8   (art. 83 §§1, 2 et 4)
https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf
https://messervices.cyber.gouv.fr/documents-guides/anssi-guide-recommandations_securite_architecture_systeme_journalisation.pdf
https://raw.githubusercontent.com/OWASP/ASVS/master/5.0/en/0x03-What-is-the-ASVS.md
https://raw.githubusercontent.com/OWASP/ASVS/master/5.0/en/0x04-Assessment_and_Certification.md
https://raw.githubusercontent.com/OWASP/ASVS/master/5.0/en/0x25-V16-Security-Logging-and-Error-Handling.md
https://api.github.com/repos/OWASP/ASVS/releases                          (date de la 5.0.0)
https://www.first.org/epss/                                               (localisateur EPSS réel — désormais cité par la page)
https://www.cisa.gov/news-events/directives/bod-22-01-...                 (périmètre du catalogue)
https://messervices.cyber.gouv.fr/nis2                                    (localisateur NIS 2)
https://eur-lex.europa.eu/eli/dir/2022/2555/oj/fra                        (existence, 200)
https://hagnere-code.ai/tarifs                                            (grille servie)
https://hagnere-code.ai/guides/securite-application-metier                (version servie)
```

Quatre de ces URL sont désormais citées par la page elle-même, et ont été
rouvertes une seconde fois au moment de les écrire, le 30/08/2026 au soir :

```text
200  https://www.first.org/epss/                                    (écart n° 3)
200  https://owasp.org/www-project-top-ten/                          (écart n° 5)
200  https://messervices.cyber.gouv.fr/nis2                          (écart n° 4)
200  https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre1  (écart n° 6)
```

Deux autres ont été rouvertes pour la correction sans être ajoutées à la page :
`.../reglement-europeen-protection-donnees/chapitre8` (article 83 §§1 et 2,
écart n° 7) et `https://hagnere-code.ai/tarifs` (F24, date de relevé portée au
30 août 2026). `https://hagnere-code.ai/guides/securite-application-metier` a
été rouverte une seconde fois le soir : elle sert toujours l’article de
juillet.

**Sources rouvertes et lues ce jour : 28 au relevé du matin, 7 de plus lors de
la correction du soir, dont 4 étaient déjà comptées — soit 31 distinctes.**
Sources citées par l’article et **non** rouvertes, déclarées comme telles :
**3** (§D.9).
Une reproduction non officielle (`gdpr-info.eu`) a été consultée en contrôle
croisé sur l’article 83 §4 ; elle n’est retenue comme preuve d’aucune
affirmation, conformément à la charte §4.1.

### I.4 Ce que ces deux passes ont écrit

Le relevé du matin n’a écrit qu’un fichier : ce dossier. La passe de correction
du soir a touché exactement trois fichiers, et rien d’autre :

- `src/app/guides/securite-application-metier/page.tsx` — quatre entrées
  `legalSources` ajoutées, deux réécrites, deux liens externes ajoutés dans le
  corps, cinq passages de texte corrigés, trois dates de relevé des tarifs
  portées au 30 août 2026 ;
- `src/app/guides/securite-application-metier/content-quality.test.ts` — deux
  tests ajoutés, deux commentaires de mesure remis à jour, l’assertion de date
  portée au 30/08/2026 et resserrée sur le libellé complet du bandeau ;
- `src/lib/guides.ts` — la seule ligne `dateModified` de ce slug.

**Ni les manifestes, ni aucun autre guide, ni aucun autre dossier n’ont été
touchés.** Les manifestes `-quality` et `-integration` restent donc
désynchronisés (écart n° 2), et c’est délibéré : les réécrire ferait attester à
des passes déjà jouées des fichiers qu’elles n’ont jamais vus. Ils sont à
régénérer par la passe d’intégration qui suivra le déploiement.

Deux conséquences hors territoire, signalées et non traitées :
`docs/research/manifests/published-guides-current.sha256` épingle l’état exact
du corpus publié et `src/lib/editorial-governance.test.ts` le vérifie ; toute
modification de page ou de registre le périme. Ce fichier est partagé par les
neuf guides et n’appartient à aucune passe de slug.

---

## J. Statut éditorial

| Question                                                         | Réponse au 30/08/2026                                                                                                         |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Les faits décisifs sont-ils tracés jusqu’à une source primaire ? | Oui, avec trois exceptions déclarées en §D.9. Les cinq localisateurs manquants du relevé du matin ont été ajoutés ou déplacés  |
| Les calculs sont-ils reproductibles ?                            | Oui — seize calculs refaits deux fois, seize concordants ; C13 est en plus décomposable minute par minute                     |
| Les hypothèses sont-elles posées à découvert ?                   | Oui pour les huit annoncées, dont le détail par mesure est maintenant renvoyé à la FAQ ; oui par étiquette générale pour les quarante autres, nommées une par une en §E |
| La batterie locale passe-t-elle ?                                | Oui — 65 tests, 65 passent                                                                                                    |
| Un lecteur humain extérieur a-t-il relu la version publiée ?     | **Non.** Aucune trace dans le dépôt. Charte §13 applicable                                                                    |
| La version décrite est-elle celle que sert la production ?       | **Non.** La production sert encore l’article du 30/07/2026 — recontrôlé le soir du 30/08/2026                                 |
| Les douze écarts du relevé ont-ils été traités ?                 | Dix corrigés dans le dépôt ; deux ouverts, avec la raison écrite en §0 (déploiement, et manifestes de passes déjà jouées)     |
| Les manifestes du slug reflètent-ils l’état du dépôt ?           | **Non**, et délibérément. Ils attestent des passes antérieures ; leur régénération appartient à la passe d’intégration        |

**Statut proposé, au sens de la charte §13 : « Prêt pour revue humaine » pour
le contenu du dépôt, et « non publié » pour la version décrite.**
Le libellé « Publié » exige une URL de production vérifiée ; la vérification
faite ce jour montre le contraire. Le libellé « Publiable » exige une
validation éditoriale, qui n’est ni acquise par test lecteur, ni documentée
comme déléguée par le commanditaire.

Aucun de ces deux constats n’est une opinion sur la qualité du texte : la
batterie passe, les calculs tiennent, les sources existent et, depuis ce soir,
chaque affirmation contrôlée est rattachée à un document qui la porte
réellement. Ce sont deux états de fait, et ils appartiennent à quelqu’un
d’autre que ce dossier.

**Ce qu’il reste à faire, dans l’ordre.** Déployer, puis revérifier l’URL de
production ; régénérer les manifestes `-quality` et `-integration` du slug et
`published-guides-current.sha256` à partir de l’état déployé ; faire relire par
une personne réelle, seule voie vers un statut supérieur à « prêt pour revue
humaine ». Aucune de ces trois actions n’est faisable depuis le seul territoire
de ce guide.
