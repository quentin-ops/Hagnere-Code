# Contre-audit P3 froid — `cout-maintenance-site-internet`

Date : **25 juillet 2026**  
Révision : **R2**  
Relecteur : agent indépendant `maintenance_cold_baseline`  
Autorité :
`docs/research/manifests/cout-maintenance-site-internet-p2-2026-07-25-r2.sha256`  
Périmètre : revalidation ciblée des incidents du P3 R1, recherche de
régressions dans le guide, le moteur, le dossier interactif, les exports, les
tests et le contrat qualité  
Hors périmètre : P4 navigateur réel, dix largeurs responsives, navigation
clavier physique, clair/sombre, zoom, impression réelle, rendu de l’image
sociale, build de production, commit, push, déploiement, route publique,
sitemap et indexation

Ce rapport est le seul fichier créé par le contre-auditeur. Aucun fichier de
page, composant, moteur, test, registre, recherche ou manifeste n’a été
modifié.

## 1. Verdict exécutif

**Verdict P3 R2 : NO-GO pour P4.**

```text
Score strict : 92/100
P0 ouverts : 0
P1 ouverts : 0
P2 ouverts : 1
Incidents P3 R1 fermés : 2/2
Décision : corriger la cohérence temporelle des preuves, produire un nouveau
           snapshot P2, puis refaire un P3 ciblé avant toute P4
```

Les deux défauts qui avaient bloqué le P3 R1 sont corrigés :

- une offre ne devient plus qualifiée lorsque le besoin commun ou ses
  descriptifs sont vides, composés d’espaces ou remplacés par une sentinelle ;
- une compensation récupérable supérieure au coût brut est maintenant
  localisée sur son champ, expliquée, reliée à une alerte accessible et
  corrigée sans résidu lorsque la valeur revient au plafond.

Le contre-audit ne peut toutefois pas ouvrir P4. Une date de preuve est jugée
valide dès lors qu’elle constitue une date ISO existante. Elle n’est comparée
ni à la date de décision renseignée, ni à la date courante. Le dossier accepte
ainsi une preuve datée du lendemain de la décision ou de **2099**, affiche
**« PASS démontré »**, qualifie l’offre et exporte la porte comme `PASS`.

Une preuve future ne peut pas décrire un résultat déjà observé. Le défaut ne
fabrique pas un montant arithmétique faux et reste localisé au registre de
preuves : il est donc classé **P2 de confiance et d’actionnabilité**, pas P1.
Il suffit néanmoins à bloquer P4 selon la règle de porte imposée.

## 2. Intégrité du snapshot et immutabilité du P3 R1

La commande de vérification du manifeste R2 retourne **14/14 empreintes
conformes**.

| Élément gelé | SHA-256 | État |
| --- | --- | --- |
| P3 R1 | `e9c649e02f6be29b549f9ef1eed5ac57acd39e90e1691cafb03961aba03833ca` | OK |
| manifeste P2 R1 | `6e3bb178b0a3ece96fa84737d1864635a3eddc6bce53fe6685332fa9d0bc1641` | OK |
| rapport P2 R1 | `9144aa35e94017cdba1ff3740e3725f73e8289e681dfa1891be7492f4f601727` | OK |
| recherche P1 | `a3e3271116513b473da77ae75a0f31ba4936d7cd6d17e3ed74deaf0d19d39f42` | OK |
| contre-vérification mondiale | `f682ba34d5073b32436e62dfb5c75bc180c4304050356c5eda509c944f4e82a7` | OK |
| page | `dcc0b972cc38de60ecd119b4a8c916d3077b1413ddacf5ae1eff3ce305c41792` | OK |
| image sociale | `d49534dff1837710dba26177d4f6974cd20d83228ea44f50a3bd344b809997d3` | OK |
| dossier interactif | `96938f4e269c9858f2ac0f01225e219a2c9bce3496aa8da86b5ba3e07a8c0c47` | OK |
| tests du dossier | `addf63afe7562e2670c3c4fd53aa41d5908170d3174275a60230c4de26188566` | OK |
| moteur | `06ed1151f541bcebfd89c8e0a47f4737a68a07b981af0038803ef962724d936f` | OK |
| tests du moteur | `ebe18838448adb3de670ba186eeb2d64c5fc56ec10a48ad92332fea07a5b33ea` | OK |
| contrat qualité | `fa1eb919ff53a0f500405b4f24cfe10376c772e72e485d9d4736115467d1f8a6` | OK |
| registre des guides | `3f8ac4824fdbe34c6e20cafc8cbba4c29106c1b57caa7c59c51cbd43fda053af` | OK |
| rapport P2 R2 | `118964b97a4945b1b82ee4711fb030357b022e7327cbf077acdbcb7405929595` | OK |

Le P3 R1 conserve exactement l’empreinte annoncée par le P2 R2 :

```text
e9c649e02f6be29b549f9ef1eed5ac57acd39e90e1691cafb03961aba03833ca
```

Les constats R2 portent donc sur le lot remis au contre-audit, sans dérive
entre le rapport d’origine, les corrections et cette relecture.

## 3. Revalidation exacte des deux incidents P3 R1

### 3.1 `CMI-P3-R1-P1-01` — fermé

La qualification dépend maintenant de quatre groupes simultanément complets :

1. les six champs du besoin commun ;
2. les quatre descriptifs propres à l’offre ;
3. les neuf portes avec cinq éléments de preuve structurés ;
4. les dix postes TCO.

Reproductions froides :

| Scénario | Résultat attendu | Résultat observé |
| --- | --- | --- |
| six champs communs et quatre descriptifs vides, portes et TCO complets | non qualifiée | conforme |
| valeurs composées seulement d’espaces | non qualifiée | conforme |
| sentinelles `ND`, `N.D.`, `N/D`, `N/A`, `NA`, `inconnu` ou `inconnue` | non qualifiée et export `ND` | conforme |
| preuve `"x"` | porte `ND`, offre non qualifiée | conforme |
| date impossible `2026-02-30` | porte `ND`, offre non qualifiée | conforme |
| responsable ou autre élément structuré absent | porte `ND`, offre non qualifiée | conforme |
| TCO connu mais dossier incomplet | sous-total non comparable | conforme |
| dossier commun, offre, neuf Pass et TCO complets | offre qualifiée | conforme |
| deux dossiers complets | deux offres qualifiables | conforme |
| seule l’offre A est remplie | l’offre B reste vide et non qualifiée | conforme |

Les exports adversariaux portent désormais le verdict
`NON QUALIFIÉE`, normalisent les champs invalides en `ND` et écrivent
`Sous-total non comparable`. L’export positif conserve les dix hypothèses,
les cinq éléments de chaque preuve et les TCO reproductibles.

Le paragraphe du guide est aligné sur ce comportement : un Pass ou Fail sans
date, artefact ou référence, périmètre, résultat et responsable redevient
`ND`, et un coût calculable avant qualification reste un sous-total non
comparable.

### 3.2 `CMI-P3-R1-P2-01` — fermé

Reproduction froide dans le composant :

```text
durée = 1 h
marge non reportable = 100 €/h
autres coûts = 0
compensation récupérable = 101 €
```

Résultat observé :

```text
valeur conservée : 101
aria-invalid : true
aria-describedby : website-incident-recoverableCompensation-error
rôle de la description : alert
message : la compensation ne peut pas dépasser le coût brut, soit 100 €
synthèse : ND et compensation explicitement nommée
```

Après correction à `100 €` :

```text
aria-invalid : false
aria-describedby : absent
alerte relationnelle : absente
impact : 0 €
```

Le cas décimal est également fidèle : pour un coût brut de `100,49 €` et une
compensation de `100,50 €`, le champ et la synthèse donnent le plafond exact
`100,49 €`, sans arrondi trompeur.

## 4. Contrôles exécutés

### 4.1 Suite ciblée remise au P3

```text
src/lib/website-maintenance-decision.test.ts                 22 tests
src/components/guides/WebsiteMaintenanceDecisionDossier...  14 tests
src/lib/website-maintenance-guide-quality.test.ts            12 tests

Résultat : 48/48 tests conformes
```

### 4.2 Contrôles de régression complémentaires

```text
src/lib/guides.test.ts
src/lib/structured-data.test.ts

Résultat : 14/14 tests conformes
TypeScript : npx tsc --noEmit — conforme
ESLint ciblé : page, image sociale, composant, moteur, tests et registre —
               conforme
```

### 4.3 Reproductions indépendantes du corpus de tests

Un script froid distinct a reconstruit les dossiers sans réutiliser les
helpers des tests du correcteur. Il confirme :

- l’offre complète devient `qualified` ;
- les blancs, espaces et sentinelles donnent `unqualified` ;
- `"x"`, la date impossible et l’élément structuré absent maintiennent la
  porte `unknown` ;
- les exports négatifs écrivent tous `NON QUALIFIÉE` et
  `Sous-total non comparable` ;
- la compensation `101 > 100`, son retour à `100` et le plafond décimal sont
  localisés correctement dans le DOM.

Cette reproduction a aussi révélé le P2 temporel décrit ci-dessous, absent des
48 tests remis au P3.

## 5. Score détaillé selon les dix axes

| Axe | Note /10 | Motif |
| --- | ---: | --- |
| Intention de recherche | 10 | La réponse commence par la criticité et le périmètre comparable, sans transformer des prix vendeurs en moyenne de marché. |
| Aide à la décision | 9 | Le chemin criticité → besoin → preuve → incident → TCO → mesure est exploitable. Une preuve postérieure à la décision peut encore autoriser celle-ci. |
| Pédagogie dirigeant | 9 | Les distinctions sauvegarde/restauration, marge/coût, SLA/chronologie et forfait/TCO sont concrètes ; certains blocs restent denses. |
| Profondeur | 10 | Logiciel, opérations, contenu, assurance, sécurité, fin de support, gouvernance et sortie hostile sont reliés au même arbitrage. |
| Preuve et exactitude | 8 | Sources, calculs et cinq champs de preuve sont solides. La chronologie n’est pas validée et une date future devient « démontrée ». |
| Comparaison à périmètre égal | 9 | Les champs communs, descriptifs, portes et TCO bloquent correctement les offres incomplètes. Une preuve future peut néanmoins franchir une porte. |
| Originalité et valeur utile | 10 | Registre promesse/preuve/risque/payeur, calcul d’incident et dossier local à deux offres forment un actif distinctif. |
| Style humain et anti-IA | 9 | Ton direct, contre-cas et limites visibles ; quelques passages demandent une lecture attentive. |
| Conversion et confiance | 9 | CTA unique, conflit d’intérêts, bon/mauvais fit, gratuité, délai non garanti et option de ne pas souscrire sont cohérents. |
| SEO et produit éditorial | 9 | Métadonnées, canonical, Article, Breadcrumb, OG, maillage et état `noindex` de revue sont cohérents ; le rendu reste réservé à P4. |

Total : **92/100**.

Le seuil éditorial de 90 est dépassé, mais une moyenne ne neutralise pas un
incident ouvert. La règle de porte interdit le passage à P4 tant qu’un P2
pertinent subsiste.

## 6. Registre dédupliqué des incidents

### 6.1 P0

Aucun P0 trouvé.

### 6.2 P1

Aucun P1 ouvert. `CMI-P3-R1-P1-01` est fermé par reproduction négative,
positive, export et indépendance A/B.

### 6.3 P2

#### `CMI-P3-R2-P2-01` — Une preuve future ou postérieure à la décision est présentée comme démontrée

**Preuve dans le code**

- `src/lib/website-maintenance-decision.ts:394-401` vérifie uniquement que la
  chaîne forme une date ISO calendaire existante ;
- `src/lib/website-maintenance-decision.ts:404-417` applique ce contrôle à la
  preuve sans date de référence ;
- `src/lib/website-maintenance-decision.ts:588-597` transforme ensuite la
  conclusion déclarée en statut effectif ;
- `src/lib/website-maintenance-decision.ts:600-650` qualifie l’offre sans
  comparer les dates des preuves à `context.decisionDate` ou à une date
  d’évaluation ;
- `src/components/guides/WebsiteMaintenanceDecisionDossier.tsx:419-431`
  demande de dater séparément preuves et décision ;
- `src/components/guides/WebsiteMaintenanceDecisionDossier.tsx:666-675`
  affiche pourtant `PASS démontré` dès que la date est seulement
  syntaxiquement valide ;
- le champ de date de preuve n’impose aucun plafond temporel dans l’interface.

**Reproduction moteur et export**

Dossier autrement complet, neuf portes Pass structurées et dix postes TCO à
zéro :

```text
cas témoin
date de décision : 2026-07-25
date de preuve : 2026-07-24
résultat : QUALIFIÉE ; porte exportée PASS

cas postérieur à la décision
date de décision : 2026-07-25
date de preuve : 2026-07-26
résultat : QUALIFIÉE ; porte exportée PASS

cas futur lointain
date de décision : 2026-07-25
date de preuve : 2099-01-01
résultat : QUALIFIÉE ; porte exportée PASS
```

**Reproduction dans l’interface**

```text
date de décision : 2026-07-25
conclusion déclarée : Pass
date de preuve : 2026-07-26
artefact, périmètre, résultat et responsable : remplis
max du champ date : absent
état effectif visible : PASS démontré

date remplacée par 2099-01-01
état effectif visible : PASS démontré
```

**Contradiction lecteur**

Le guide affirme qu’un Pass ou Fail doit être étayé par une date, un artefact,
un périmètre, un résultat et un responsable. Le dossier parle de
« comparateur par la preuve », de « résultat observé » et de statut
« démontré ». Une date postérieure à la décision décrit au mieux un contrôle
planifié, pas la preuve disponible au moment du choix.

**Conséquence**

Un lecteur peut valider aujourd’hui une offre à partir d’un exercice qui n’a
pas encore eu lieu, puis copier ou imprimer un dossier qui le présente comme
réalisé. L’arithmétique reste exacte et les autres éléments ne sont pas
écrasés : la gravité est P2. La confiance dans le dispositif signature et la
chronologie de décision sont néanmoins atteintes.

**Correction minimale attendue**

1. Faire dépendre la validité de la preuve d’une date d’évaluation explicite
   et testable, pas d’un appel implicite non déterministe à l’horloge.
2. Refuser toute date de preuve postérieure à la date d’évaluation.
3. Lorsque la date de décision est renseignée et valide, refuser aussi toute
   preuve postérieure à cette décision.
4. Ne jamais afficher `PASS démontré`, `FAIL démontré`, `QUALIFIÉE` ou un TCO
   comparable tant que cette cohérence temporelle échoue.
5. Dans l’export, rendre la date invalide comme `ND` ou la nommer explicitement
   invalide, et conserver la porte et l’offre non qualifiées.
6. Localiser l’erreur sur la date de preuve avec un message compréhensible et
   une relation accessible ; ajouter une borne visuelle cohérente au champ
   date.

**Revalidation exacte exigée**

- date d’évaluation `2026-07-25`, décision `2026-07-25`, preuve
  `2026-07-24` : la porte complète peut rester Pass ;
- date d’évaluation `2026-07-25`, décision `2026-07-25`, preuve
  `2026-07-26` : porte `ND`, offre non qualifiée, export non qualifié ;
- date d’évaluation `2026-07-25`, décision vide, preuve `2099-01-01` :
  porte `ND`, offre non qualifiée ;
- deux offres complètes dont une seule contient une preuve future : seule
  cette offre est bloquée, sans contamination de l’autre ;
- interface : la date fautive porte `aria-invalid="true"`, possède une
  description reliée et ne coexiste jamais avec `PASS démontré` ;
- test positif : une preuve le jour même ou antérieure reste acceptée ;
- les 48 tests actuels, les tests guides/structured-data, TypeScript et ESLint
  restent conformes.

## 7. Porte suivante et limites de remise

P4 reste **bloquée**. La suite exacte est :

1. correction P2 ciblée sans réécriture opportuniste du guide ;
2. tests temporels déterministes et accessibilité du champ ;
3. nouveau rapport P2 et nouveau manifeste ;
4. contre-audit P3 indépendant du nouveau snapshot ;
5. P4 navigateur réel seulement si ce P3 retourne 0 P0, 0 P1 et 0 P2.

Ce NO-GO ne constitue ni une validation de publication, ni un état de build,
de commit, de push ou de déploiement. La route de production, le sitemap et
l’indexation n’ont pas été vérifiés.
