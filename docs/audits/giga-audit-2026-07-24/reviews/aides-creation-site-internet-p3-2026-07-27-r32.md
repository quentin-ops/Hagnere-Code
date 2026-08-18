# Candidat structurel R32 — `aides-creation-site-internet`

Date de gel : **27 juillet 2026**

## Verdict avant contre-audit

**R32 est validé techniquement en local et reste sans note, sans GO et sans
autorisation P4.**

Les deux contre-audits froids de R31 ont rendu deux NO-GO :

| Axe | Note R31 | Sévérités | Verdict |
| --- | ---: | --- | --- |
| Faits, droit, finance et moteur | 78/100 | P0 : 0 ; P1 : 2 ; P2 : 4 | NO-GO |
| Expérience, pédagogie et accessibilité | 75/100 | P0 : 0 ; P1 : 2 ; P2 : 2 | NO-GO |

Leurs deux P1 communs ne relevaient plus d’un manque de synonymes :

1. l’interprétation de texte libre pouvait encore fabriquer une conclusion
   juridique favorable ;
2. le parcours public de 10 285 mots et 51 minutes additionnait quatorze
   questions, neuf étapes et plus de cent contrôles avant une décision simple.

R32 traite ces causes par une rupture d’architecture. Les notes R31 ne sont pas
transférées au nouveau candidat.

## Correction structurelle

### 1. Aucun texte libre dans le tri public

La route publique ne charge plus :

- `SiteAidPreDiagnosis` ;
- `SiteAidDecisionDossier` ;
- le moteur lexical `site-aid-decision`.

Elle charge uniquement `SiteAidQuickCheck`, relié à
`site-aid-quick-check`. Le composant ne contient ni `textarea`, ni champ
éditable, ni fonction d’analyse sémantique. Les réponses structurées sont
limitées à `oui`, `non`, `à confirmer`, à l’état de notification et à des
montants bornés.

Les anciens fichiers restent présents pour préserver l’historique des travaux,
mais ils ne font plus partie du graphe d’import public de ce guide.

### 2. Deux intentions, puis trois étapes

Le lecteur choisit d’abord :

- « Je cherche encore un dispositif » : deux portes officielles, France Num et
  Aides-territoires, puis quatre informations à conserver ;
- « J’ai une fiche officielle » : vérifier, chiffrer, décider.

Le parcours annoncé dure trois à cinq minutes. Le composant public passe de
520 101 octets pour l’ancien dossier à 32 650 octets pour le tri court. Le
guide servi mesure **6 785 mots visibles, soit 34 minutes à 200 mots/minute**,
contre 10 285 mots et 51 minutes pour R31.

### 3. Décisions financières conservatrices

Le tri sépare :

- aide théorique ;
- contribution déclarée comme notifiée ;
- paiement déclaré comme documenté ;
- facture TTC et besoin maximal de trésorerie ;
- coût économique selon le traitement de la TVA ;
- coût documenté de l’attente.

Avant notification écrite déclarée, l’aide budgétée reste à 0 €. Une TVA
inconnue ne devient jamais 0 %. Les montants absents, négatifs, hors bornes ou
incohérents suspendent la décision. Sont notamment bloqués :

- une assiette supérieure au devis ;
- une contribution notifiée supérieure à la facture TTC calculée ;
- un paiement supérieur à la notification ou à la facture ;
- un taux supérieur à 100 % ;
- une durée supérieure à 120 mois.

Le résultat dit toujours que la notification et le paiement sont **déclarés** :
l’outil ne les authentifie pas.

### 4. Les cas experts redeviennent des annexes humaines

De minimis, SIEG, agriculture, pêche, restructuration, outre-mer, registre
central et compensations restent expliqués et sourcés dans le guide. Le tri
court s’arrête explicitement devant ces cas. Il demande de consigner la
conclusion, la source, la date et l’identité du relecteur compétent ; il ne
transforme jamais une citation libre en statut favorable.

### 5. Sortie utile même incomplète

Le téléchargement TXT reste disponible avec les inconnues, les contradictions
et les questions à poser. Il se présente comme un dossier de travail et
précise qu’il ne prouve ni l’éligibilité, ni l’authenticité d’une pièce, ni
l’octroi ou le paiement.

## Validation locale avant gel

| Contrôle | Résultat |
| --- | --- |
| Tests ciblés et de régression du guide | **94/94** |
| TypeScript `--noEmit` | **vert** |
| ESLint ciblé | **vert** |
| `git diff --check` ciblé | **vert** |
| Build Next.js direct | **159/159 pages générées** |
| Route publique | **présente dans le build** |
| Mesure de lecture servie | **6 785 mots / 34 min** |
| Cohérence du temps de lecture de ce guide | **verte** |

La vérification SEO globale conserve deux défauts préexistants hors de ce guide
sur les temps de lecture de `crm-sur-mesure-ou-hubspot` et `seo-local-pme`.
Le contrôle de gouvernance conserve aussi un manifeste P4 partagé à régénérer
après stabilisation de `src/lib/guides.ts`. Ces écarts ne sont pas masqués et
ne valent pas validation globale du dépôt.

## Porte suivante

R32 doit recevoir deux nouveaux audits froids et indépendants sur le même
manifeste :

1. faits, droit, finance, calculs et résistance aux saisies adverses ;
2. expérience, pédagogie, accessibilité, proportion et comparaison
   internationale.

La porte P4 exige au moins **92/100 sur chaque axe, aucun P0 et aucun P1**. Un
seul NO-GO maintient la porte fermée.
