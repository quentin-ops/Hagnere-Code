# Contre-audit P3 froid — `cout-maintenance-site-internet`

Date : **25 juillet 2026**  
Révision : **R1**  
Relecteur : agent indépendant `maintenance_cold_baseline`  
Périmètre : snapshot P2 R1, recherche P1, contre-vérification mondiale,
contenu, calculs, moteur, dossier interactif, tests, métadonnées, conversion et
sources courantes  
Hors périmètre : P4 navigateur réel, largeurs responsives, clavier réel,
clair/sombre, zoom, impression physique, rendu de l’image sociale, déploiement,
route de production, sitemap et indexation

Ce rapport est le seul fichier créé par le contre-auditeur. Aucun fichier de
page, composant, moteur, test, registre, recherche ou manifeste n’a été
modifié.

## 1. Verdict exécutif

**Verdict P3 R1 : NO-GO.**

```text
Score : 88/100
P0 ouverts : 0
P1 ouverts : 1
P2 ouverts : 1
Décision : corriger les deux incidents, produire un nouveau snapshot,
           puis refaire un P3 ciblé avant toute P4
```

La réécriture a changé de catégorie. Le guide répond immédiatement sans
fabriquer de prix moyen, sépare criticité, obligations, preuves, incident et
TCO, explique la restauration propre, montre quatre modes au même périmètre et
fournit un dossier local exportable. Les calculs éditoriaux visibles sont
exacts. Les sources primaires et les limites commerciales sont mieux traitées
que dans les pages vendeuses françaises, américaines et allemandes rouvertes.

La porte ne peut cependant pas passer. Le cœur interactif affiche
**« Offre qualifiée sur les preuves »** et deux TCO comparables alors que tout
le besoin commun et les champs descriptifs de l’offre sont vides. Son export
juxtapose alors six valeurs `ND`, quatre valeurs d’offre `ND`, le verdict
`QUALIFIÉE` et un TCO connu. Cela contredit la promesse centrale de comparaison
à périmètre égal et le critère P1 selon lequel aucune offre ne passe avec une
ligne obligatoire vide.

Un second défaut, moins grave, rend une erreur relationnelle impossible à
localiser : une compensation récupérable supérieure au coût brut bloque bien
le calcul, mais aucun champ n’est signalé et l’utilisateur ne voit que
« 1 hypothèse à corriger ».

P4 reste donc bloquée. L’absence de P0 ne transforme pas ce verdict en GO.

## 2. Snapshot P2 contrôlé

Le manifeste
`docs/research/manifests/cout-maintenance-site-internet-p2-2026-07-25-r1.sha256`
est l’autorité de cette passe.

| Élément | SHA-256 P2 | État |
| --- | --- | --- |
| audit froid avant P2 | `541931d4d4b6fcba7ce870c1564486aa50c104e792fbcb989994dc49ae9547fa` | OK |
| recherche P1 | `a3e3271116513b473da77ae75a0f31ba4936d7cd6d17e3ed74deaf0d19d39f42` | OK |
| contre-vérification mondiale | `f682ba34d5073b32436e62dfb5c75bc180c4304050356c5eda509c944f4e82a7` | OK |
| manifeste P1 R2 | `14522f990abbf7dbfdef0cad796e6511ac3be82a9a66f8f8bea3e68f53a82805` | OK |
| page | `e3b3b32c3c31fad439c810ed6f70347d8205418cc0baf411b4807ae8affdcd83` | OK |
| image sociale | `d49534dff1837710dba26177d4f6974cd20d83228ea44f50a3bd344b809997d3` | OK |
| dossier interactif | `4ae56bd40537e4b48f3d31b9ab7eb5a1faa7495d7af8740b370dee7729a715c3` | OK |
| tests du dossier | `b7dd1404637a3df84989e1dbf698f4bedc15b53846c36bdc4ac8997ab38b4c6e` | OK |
| moteur | `0b3b99024674448a28b2cd2a2a80f4a2ea42417f7a653d9642c51886390b7026` | OK |
| tests du moteur | `8ba132eb8319ade8b7c2e22419a912ec12a26aefdc93b936e2914bf3013a6744` | OK |
| contrat qualité | `b92339fabb04bf682b630092637f04c3eb358ac572c66ee3677725f9454ef1c2` | OK |
| registre des guides | `3f8ac4824fdbe34c6e20cafc8cbba4c29106c1b57caa7c59c51cbd43fda053af` | OK |
| rapport P2 | `9144aa35e94017cdba1ff3740e3725f73e8289e681dfa1891be7492f4f601727` | OK |

Résultat : **13/13 empreintes concordent**. Les incidents ci-dessous
appartiennent donc bien au snapshot P2 remis au P3, pas à une dérive du
worktree.

Ont été relus intégralement :

- le dossier de recherche P1 ;
- le contrecheck mondial et sa quarantaine des anciens TCO faux ;
- le rapport P2 ;
- la page et son image sociale ;
- le moteur et ses tests ;
- le composant et ses tests ;
- le contrat qualité et l’entrée exacte du registre.

## 3. Score détaillé selon les dix axes

| Axe | Note /10 | Motif |
| --- | ---: | --- |
| Intention de recherche | 10 | Le premier paragraphe répond avant tout prix : vitrine, boutique, service critique, mêmes obligations, mêmes horaires et mêmes résultats vérifiables. |
| Aide à la décision | 7 | Les trois criticités, quatre organisations, portes et TCO donnent un vrai chemin. La qualification verte peut toutefois apparaître sans besoin commun ni fiche d’offre. |
| Pédagogie dirigeant | 9 | RPO/RTO, six horodatages, réserve résiduelle, coût interne et sortie sont traduits en langage d’usage. L’erreur de compensation ne dit pas au lecteur quoi corriger. |
| Profondeur | 10 | Maintenance logicielle, opérations, sécurité, licences, contenu, observabilité, restauration propre, sortie hostile et mesure après décision sont reliés sans devenir un catalogue gratuit. |
| Preuve et exactitude | 8 | Sources fortes, limites proches des faits et calculs exacts. Dans l’outil, tout texte non vide est néanmoins traité comme une preuve suffisante pour le statut. |
| Comparaison à périmètre égal | 7 | Le modèle éditorial est excellent et les coûts des quatre modes partagent les mêmes hypothèses. Le moteur ne vérifie pas que le périmètre commun ou les champs d’offre existent avant de qualifier. |
| Originalité et valeur utile | 10 | Le registre promesse/preuve/risque/payeur, l’incident, les TCO et le dossier à deux offres forment un actif distinctif et utilisable. |
| Style humain et anti-IA | 9 | Ton direct, conflits et contre-cas visibles, phrases concrètes. Quelques blocs restent denses mais aucun défaut de langue ciblé n’a été trouvé. |
| Conversion et confiance | 9 | Un seul CTA, conflit d’intérêts, bon/mauvais fit, option de ne pas souscrire, gratuité et délai non garanti cohérents avec la destination. |
| SEO et produit éditorial | 9 | Title, meta, canonical, Article, Breadcrumb, OG dédié, maillage et `noindex,nofollow` de revue sont cohérents. Le rendu physique reste volontairement réservé à P4. |

Total : **88/100**.

Le seuil premium de 90/100 n’est pas atteint. Surtout, le P1 impose le NO-GO
indépendamment du total.

## 4. Registre dédupliqué des incidents

### 4.1 P0

Aucun P0 n’a été trouvé sur ce snapshot.

### 4.2 P1 — majeur

#### `CMI-P3-R1-P1-01` — La qualification ne dépend pas du besoin commun ni de la fiche d’offre

**Preuve dans le code**

- `src/lib/website-maintenance-decision.ts:503-520` reçoit seulement les neuf
  portes et retourne `qualified` dès que leurs statuts effectifs ne sont ni
  `fail` ni `unknown` ;
- `src/components/guides/WebsiteMaintenanceDecisionDossier.tsx:202-207`
  appelle cette fonction avec `offer.gates`, sans le contexte commun ni les
  champs descriptifs de l’offre ;
- `src/lib/website-maintenance-decision.ts:720-726` exporte les six champs
  communs vides comme `ND` ;
- `src/lib/website-maintenance-decision.ts:745-756` exporte le mode, le
  périmètre, les exclusions et le payeur vides comme `ND`, puis peut écrire
  immédiatement `Verdict des portes : QUALIFIÉE`.

La validation de la « preuve » est en outre purement syntaxique :
`src/lib/website-maintenance-decision.ts:492-500` accepte tout texte dont la
longueur après trim est supérieure à zéro. Une valeur `"x"` sur chacune des
neuf portes suffit à obtenir `qualified`.

**Reproduction froide dans l’interface**

État saisi :

```text
Date : vide
Classe / fonctions / fenêtre / RPO-RTO / dernier point / responsable : vides
Mode / périmètre inclus / exclusions / risque-payeur : vides
Neuf portes : Pass
Preuve de chaque porte : texte non vide
Dix lignes TCO : 0 explicite
```

Résultat réellement observé :

```text
commonNeedTextareas : ["", "", "", "", "", ""]
hasQualified : true
comparaison Offre A :
  Offre qualifiée sur les preuves
  12 mois : 0 € HT
  36 mois : 0 € HT
```

L’export du même état contient :

```text
Classe du site : ND
Fonctions et impact métier : ND
Fenêtre de couverture : ND
Perte de données et durée de reprise admises : ND
Dernier point réellement restauré : ND
Responsable des mesures et décisions : ND
Mode de prise en charge : ND
Périmètre inclus : ND
Exclusions : ND
Risque résiduel et payeur : ND
Verdict des portes : QUALIFIÉE
TCO 12 mois : 0 € HT
TCO 36 mois : 0 € HT
```

Cette branche contredit :

- la FAQ visible, qui dit qu’une ligne obligatoire vide reste `ND` ;
- la recherche P1
  `docs/research/cout-maintenance-site-internet.md:1166-1173`, dont la mesure
  d’acceptation est « aucune offre ne passe avec ligne obligatoire vide » ;
- le critère d’arrêt
  `docs/research/cout-maintenance-site-internet.md:1202-1207`, qui demande
  d’arrêter la comparaison si une option ne couvre pas la même fonction ;
- le rapport P2
  `docs/audits/giga-audit-2026-07-24/reviews/cout-maintenance-site-internet-p2-2026-07-25-r1.md:94-103`,
  qui réserve le prix aux offres qualifiées.

**Conséquence lecteur**

Le lecteur peut obtenir le signal visuel vert et deux coûts « comparables »
sans avoir défini ce que les deux offres doivent couvrir. Le dispositif
signature ne protège donc pas encore contre la mauvaise décision qu’il promet
d’empêcher.

**Correction minimale attendue**

1. Calculer un état global de comparabilité à partir du besoin commun, de la
   fiche de chaque offre, des neuf portes et du TCO — pas des seules portes.
2. Définir explicitement les champs communs et d’offre obligatoires ; tout
   champ obligatoire vide doit maintenir l’offre non qualifiée.
3. Ne jamais afficher un état vert `qualifiée` lorsque le rapport adjacent
   contient un de ces champs `ND`.
4. Structurer la preuve minimale — date, artefact ou référence, périmètre,
   résultat et responsable — ou remplacer le mot « démontré » par un statut
   fidèle d’auto-déclaration jusqu’à revue humaine.
5. Un TCO arithmétiquement calculable peut rester visible, mais doit être
   nommé **sous-total non comparable** tant que le besoin ou l’offre est
   incomplet.

**Revalidation exacte exigée**

- test moteur : six champs communs vides + neuf Pass étayés + TCO complet
  donnent `unqualified`, jamais `qualified` ;
- test composant : le scénario reproduit ci-dessus ne contient ni texte vert
  « qualifiée », ni invitation à comparer les prix ;
- test export : si un champ obligatoire commun ou d’offre vaut `ND`, le
  verdict exporté vaut `NON QUALIFIÉE` et le coût est étiqueté non comparable ;
- test adversarial : preuves `"x"`, espaces, texte sans date, sans résultat ou
  sans responsable ne doivent pas être présentées comme « démontrées » ;
- test positif : un dossier commun complet, deux fiches complètes, neuf Pass
  avec preuves structurées et dix postes connus restent qualifiables ;
- test d’indépendance : compléter l’offre A ne remplit ni ne qualifie l’offre
  B.

### 4.3 P2 — secondaire

#### `CMI-P3-R1-P2-01` — Une compensation impossible bloque sans indiquer le champ fautif

**Preuve dans le code**

- `src/lib/website-maintenance-decision.ts:416-428` détecte correctement une
  compensation supérieure au coût brut et retourne
  `issues: ["recoverableCompensation"]` ;
- `src/components/guides/WebsiteMaintenanceDecisionDossier.tsx:255-267`
  remplit `incidentErrors` depuis le seul parseur unitaire ; ce parseur accepte
  toute compensation finie et positive ;
- `src/components/guides/WebsiteMaintenanceDecisionDossier.tsx:411-452`
  n’associe donc aucun message à l’entrée concernée ;
- `src/components/guides/WebsiteMaintenanceDecisionDossier.tsx:457-465`
  réduit l’erreur calculée à un compteur générique.

**Reproduction froide dans l’interface**

Entrées :

```text
durée = 1 h
marge non reportable = 100 €/h
tous les autres coûts = 0
part réaffectée = 0 %
compensation récupérable = 101 €
```

Résultat réellement observé :

```text
Impact de référence : ND · 1 hypothèse à renseigner ou corriger
compensationValue : "101"
aria-invalid : "false"
aria-describedby : absent
messages role="alert" : aucun
```

Le moteur connaît pourtant précisément le champ fautif. L’export affiche la
compensation comme une hypothèse valide, puis seulement
`Impact incident calculé : ND — 1 poste requis à corriger`.

**Conséquence lecteur**

Le résultat reste prudent, donc aucun montant faux n’est publié. En revanche,
le lecteur — particulièrement avec une technologie d’assistance — ne peut pas
identifier le champ à corriger. C’est un défaut d’actionnabilité et
d’accessibilité, pas un P1 de calcul.

**Correction minimale attendue**

Propager les `incident.issues` du moteur vers les champs et vers l’export.
Pour cette branche, marquer la compensation invalide et expliquer par exemple :
« La compensation récupérable ne peut pas dépasser le coût brut de 100 € ».

**Revalidation exacte exigée**

- test moteur inchangé : `101 > 100` retourne
  `issues: ["recoverableCompensation"]` ;
- test composant : l’entrée compensation reçoit `aria-invalid="true"`, un
  `aria-describedby` résolu et un message visible avec le plafond brut ;
- test synthèse : le bloc ND nomme « compensation récupérable », pas seulement
  le nombre d’erreurs ;
- test export : le champ fautif est nommé dans le verdict d’incident ;
- test de retour au vert : remplacer `101` par `100` retire le message et
  produit un impact connu de `0 €` ;
- tests voisins : valeur manquante, négative, non finie et part supérieure à
  100 restent localisées sans régression.

Compteurs vérifiés : **0 P0, 1 P1, 1 P2**.

## 5. Recalculs indépendants

Les résultats ont été recalculés avec une arithmétique indépendante du moteur
et des tests P2.

### Trois criticités

| Scénario | Récurrent annuel | TCO 12 mois | TCO 36 mois | Verdict |
| --- | ---: | ---: | ---: | --- |
| Simple — vitrine | 4 320 € | 5 620 € | 14 260 € | exact |
| Central — boutique | 29 270 € | 33 570 € | 92 110 € | exact |
| Exigeant — service critique | 128 800 € | 155 800 € | 413 400 € | exact |

### Quatre modes au cas central

| Mode | Récurrent annuel | TCO 12 mois | TCO 36 mois | Verdict |
| --- | ---: | ---: | ---: | --- |
| Interne structuré | 25 500 € | 30 500 € | 81 500 € | exact |
| Freelance + relais | 23 300 € | 26 600 € | 73 200 € | exact |
| Agence | 26 600 € | 30 900 € | 84 100 € | exact |
| TMA organisée | 38 900 € | 46 400 € | 124 200 € | exact |

### Incident et disponibilité

Le socle hors marge vaut :

```text
900 + 250 + (2 × 4 × 35 × 50 %) = 1 290 €
```

| Durée | 180 €/h | 750 €/h | Verdict |
| ---: | ---: | ---: | --- |
| 2 h | 1 650 € | 2 790 € | exact |
| 6 h | 2 370 € | 5 790 € | exact |
| 12 h | 3 450 € | 10 290 € | exact |

Conversions continues :

```text
99,9 % sur 30 jours  = 2 592 s   = 43 min 12 s
99,9 % sur 365 jours = 31 536 s  = 8 h 45 min 36 s
99,99 % sur 30 jours = 259,2 s   = 4 min 19,2 s
99,99 % sur 365 jours = 3 153,6 s = 52 min 33,6 s
```

Verdict : les montants et durées publiés sont exacts. Aucun double comptage
entre capacité corrective, impact commun et réserve résiduelle n’a été trouvé
dans le modèle nominal.

## 6. Sources et benchmark mondial rouvert

### Sources primaires

| Source courante | Contrôle | Verdict sur la page |
| --- | --- | --- |
| [ANSSI — Sauvegarde des systèmes d’information v1.1](https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf) | version 1.1 datée du 27 novembre 2025 ; PDMA/RPO, DMIA/RTO, copies protégées et tests réguliers de restauration | date, portée et traduction lecteur exactes |
| [NIST SP 800-34 Rev. 1](https://www.nist.gov/publications/contingency-planning-guide-federal-information-systems) | publication source du RPO/RTO, page mise à jour le 19 février 2025 | source correctement bornée, sans cible universelle |
| [NCSC — choisir un MSP](https://www.ncsc.gov.uk/guidance/choosing-a-managed-service-provider-msp) | responsabilités, sauvegardes testées, journaux, incident, SLA et sortie ; publié et revu le 24 novembre 2025 | synthèse fidèle et non transposée comme règle française |
| [Next.js — Support Policy](https://nextjs.org/support-policy) | 16.x Active LTS et 15.x Maintenance LTS le 25 juillet 2026 | statut courant, daté et explicitement volatil |
| [WordPress — Updating](https://wordpress.org/documentation/article/updating-wordpress/) et [Backups](https://developer.wordpress.org/advanced-administration/security/backup/) | sauvegarde avant mise à jour ; fichiers et base nécessaires à une reprise typique ; page Backups mise à jour le 4 juin 2026 | formulations prudentes et sourcées près des faits |
| [Vercel — Enterprise SLA](https://vercel.com/legal/sla) | mois civil, exclusions, journaux, réclamation sous 30 jours, plafond de crédit et recours exclusif | bon exemple contractuel, jamais présenté comme SLA universel |
| [CISA — StopRansomware](https://www.cisa.gov/stopransomware/ransomware-guide) | copies protégées, exercices, restauration sur réseau propre et prudence contre la réinfection | distinction restauration courante / reprise propre fondée |
| [Google — codes HTTP](https://developers.google.com/crawling/docs/troubleshooting/http-status-codes) | `5xx` et `429` ralentissent le crawl ; les URL peuvent finir par sortir de l’index | aucune promesse de rang ajoutée |
| [W3C WAI — suivi](https://www.w3.org/WAI/eval/considerations) | périmètre, responsable, fréquence, méthode et revalidation des changements | aucune conformité globale promise |

L’URL ISO a répondu `403` au robot de contrôle ; le fait retenu avait déjà été
localisé dans le résumé public du snapshot P1. Cette indisponibilité de
relecture automatisée n’invalide pas la page, mais la source devra être
rouverte par un humain si sa formulation est modifiée.

### Pages vendeuses internationales

| Marché | Observation courante | Apport réel |
| --- | --- | --- |
| France — [Pulsar](https://www.pulsar-agency.com/maintenance-site-web/contrat-maintenance-web) | 159 / 209 / 499 € HT/mois, facturation annuelle ; sauvegarde, staging, GTI/GTR et PRA varient par palier | confirme que le prix seul ne normalise pas le service |
| États-Unis — [WP Buffs](https://wpbuffs.com/plans/) | 89 / 179 / 239 / 359 USD/mois ; e-commerce, staging et surveillance de fonctions personnalisées apparaissent selon le niveau | montre l’intérêt de distinguer site standard, boutique et code spécifique |
| Allemagne — [Shop Wartung](https://www.shop-wartung.de/en/) | 199 / 349 / 699 € net/mois ; backup, staging, checkout/paiement/recherche, rollback et fenêtres de réponse sont visibles | montre une chaîne opérationnelle plus concrète qu’une liste de tâches |

Ces pages restent déclaratives et commercialement biaisées. Le guide P2 les
dépasse sur l’honnêteté des hypothèses, le risque résiduel, la sortie et le
TCO. Il ne les dépasse pas encore sur un point décisif : son outil ne fait pas
respecter le périmètre commun qu’il enseigne.

## 7. Contrôles mécaniques rejoués

```text
Manifeste P2 R1                         13/13 OK
Vitest ciblé                             5 fichiers OK
Tests ciblés                            45/45 OK
TypeScript — npx tsc --noEmit                 OK
ESLint ciblé — huit fichiers                  OK
git diff --check ciblé                        OK
```

Les 45 tests existants ne couvrent pas les deux branches froides :

- besoin commun entièrement vide + neuf Pass avec preuves + TCO complet ;
- compensation supérieure au brut avec localisation du champ dans l’UI.

La route `/demarrer-un-projet` confirme les promesses du CTA : parcours
d’environ trois minutes, pré-cadrage et réponse gratuits, objectif du prochain
jour ouvré sans délai garanti, puis devis ferme après échange.

## 8. Ce qui est conforme et doit être conservé

- réponse avant le prix et trois criticités lisibles ;
- aucune moyenne française ou mondiale inventée ;
- prix vendeurs datés, secondaires et non représentatifs ;
- quatre familles et six lignes budgétaires ;
- registre promesse / preuve / risque restant / payeur ;
- restauration courante distincte d’une reprise propre ;
- six horodatages d’incident et mécanique SLA complète ;
- TCO 12/36 exacts et incident séparé de la réserve résiduelle ;
- aucun verdict universel WordPress, Next.js, interne, freelance, agence ou
  TMA ;
- sortie prévue même si le mainteneur est absent ou compromis ;
- action autonome, mesures après décision et signaux de révision ;
- un seul CTA commercial, conflit d’intérêts et option de ne pas souscrire ;
- données locales, deux dossiers d’offre indépendants, copie, impression et
  confirmation de remise à zéro ;
- Article + BreadcrumbList seulement ;
- statut `ready-for-human-review` et robots locaux `noindex,nofollow`.

## 9. Porte suivante

La séquence autorisée est :

```text
correction CMI-P3-R1-P1-01
+ correction CMI-P3-R1-P2-01
+ tests adversariaux dédiés
+ nouveau manifeste
+ nouveau P3 indépendant ciblé
= seulement alors, candidature à P4
```

Ce rapport n’autorise ni P4, ni publication, ni changement de statut
éditorial, ni commit, ni push, ni déploiement, ni sitemap, ni Search Console,
ni indexation, ni promesse de position Google.
