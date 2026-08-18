# Candidat correctif R34 — `aides-creation-site-internet`

Date de gel : **27 juillet 2026**

## Verdict avant contre-audit

**R34 est validé techniquement en local et reste sans note, sans GO et sans
autorisation P4.**

Les deux contre-audits froids de R33 ont travaillé en lecture seule sur le
même gel de 96 fichiers, resté intact avant et après :

| Axe | Note R33 | Sévérités | Verdict |
| --- | ---: | --- | --- |
| Faits, droit, finance, moteur et export | 88/100 | P0 : 0 ; P1 : 2 ; P2 : 3 | NO-GO |
| UX, pédagogie, accessibilité et rendu | 92/100 | P0 : 0 ; P1 : 1 ; P2 : 0 | NO-GO |

Manifeste R33 :
`docs/research/manifests/aides-creation-site-internet-p3-2026-07-27-r33.sha256`  
SHA-256 :
`6a4b55bbf3d5d38ee732a5d35624f1078de559c119baf0f7d4cef427f9f388fa`

Leurs défauts sont consolidés par classe ci-dessous. Les notes R33 ne sont pas
transférées au nouveau candidat.

## Registre de fermeture R33 → R34

### 1. Le type d’instrument devient réellement prioritaire

R33 qualifiait le type à l’écran, mais le moteur pouvait encore contrôler une
ancienne assiette, un ancien taux ou l’ordre propre à une subvention avant de
retourner la branche d’un prêt ou d’un accompagnement.

R34 s’arrête désormais immédiatement après le choix :

- type inconnu : aucun autre champ n’est lu ;
- prêt, garantie, accompagnement, création, formation ou effet fiscal :
  `separate-financing-instrument`, aide budgétée à 0 €, aucun calcul de
  subvention ;
- subvention : ouverture seulement alors des preuves, montants, notification
  et calculs.

Le composant masque tous les champs propres à une subvention pour les autres
instruments. Le changement de type purge également devis, TVA, assiette, taux,
plafond, notification, paiement, attente et soutenabilité. Le moteur ignore
structurellement toute valeur résiduelle injectée.

Les reproductions suivantes sont testées :

- prêt avec réponses par défaut ;
- prêt avec `expensesConfirmed="no"` et ordre inconnu ;
- prêt avec taux, délai ou paiement résiduels invalides ;
- export d’un prêt contenant uniquement des mentions « sans objet » pour les
  calculs de subvention.

### 2. Une notification et un paiement doivent être positifs

R33 acceptait une notification ou un paiement documenté de 0 €. R34 distingue
explicitement zéro d’un état accompli :

- contribution notifiée : strictement supérieure à 0 € ;
- paiement documenté : strictement supérieur à 0 € ;
- zéro produit un blocage, une aide ou un paiement indéterminé et aucun résultat
  vert de notification ou de rapprochement payé.

Les aides théoriques, les délais et les coûts peuvent toujours valoir
légitimement zéro ; seule la prétention à une contribution ou à un versement
accompli exige un montant positif.

### 3. Le stade payé isole tout le prévisionnel

R33 masquait délai, marge et coûts au stade payé, mais pouvait encore les
calculer, les afficher et les exporter. R34 ferme l’état sur trois couches :

1. le passage à `paid` purge assiette, taux, plafond, délai, marge et coûts ;
2. le moteur ne valide ni ne calcule ces champs lorsque `needsForecast` et
   `needsDelay` sont faux ;
3. le résultat et le TXT affichent « Sans objet pour cet état ».

Le cas exact `2 × 1 300 + 100 = 2 700 €`, puis notification 1 650 € et paiement
1 200 €, retourne `paid-to-reconcile` sans aide théorique, sans comparaison et
sans coût d’attente.

### 4. L’export sérialise l’état effectif

Le TXT n’imprime plus une ancienne notification ou un ancien paiement sous
« Aucune notification écrite ». Les champs inactifs sont marqués « Sans objet
pour cet état ». Les valeurs brutes non finies, négatives ou hors borne sont
marquées « Valeur invalide » ; `NaN` et `Infinity` n’apparaissent jamais comme
des montants.

Le même principe couvre :

- les calculs de subvention pour un autre instrument ;
- le paiement avant le stade `paid` ;
- notification et paiement au stade `none` ;
- assiette, taux, plafond et attente au stade `paid`.

### 5. Théorie et notification sont rapprochées sans les confondre

La notification écrite reste la preuve déclarée qui prévaut pour le budget.
Lorsqu’elle diffère de l’aide théorique calculée, R34 ajoute néanmoins un
avertissement de rapprochement : assiette, taux, plafond, périmètre de facture
et décision doivent être revérifiés.

Le cas 2 100 € théoriques contre 11 900 € notifiés sur une facture de 12 000 €
reste budgété selon la notification déclarée, mais ne passe plus
silencieusement.

## Contrôles positifs conservés de R33

R34 conserve les fermetures déjà confirmées par les deux audits :

- comparaison après notification avec la contribution approuvée ;
- données essentielles obligatoires avant notification ;
- TVA totale multi-taux et récupération partielle exacte ;
- aide budgétée à 0 € avant notification ;
- facture TTC et besoin maximal de trésorerie séparés du coût économique ;
- égalité nulle incapable de fabriquer un arbitrage de lancement ;
- focus clavier sur chaque titre d’étape et annonces live ;
- tri visible après environ 242 mots, sans overflow sur les dix largeurs
  auditées en R33 ;
- France Num, Les-aides.fr/CCI et Conseillers-Entreprises correctement
  qualifiés ;
- ancien moteur lexical hors du graphe public.

## Validation locale avant gel

| Contrôle | Résultat |
| --- | --- |
| Tests cœur du tri, interface et contrat éditorial | **51/51** |
| Batterie guide, catalogue, langage, sitemap, indexation et structure | **117/117** |
| Scénarios exacts prêt, zéro, état payé et TXT | **verts** |
| TypeScript `--noEmit` | **vert** |
| ESLint ciblé | **vert** |
| `git diff --check` ciblé | **vert** |
| Build Next.js direct | **159/159 pages générées** |
| Route publique | **présente dans le build et servie localement** |
| Mesure de lecture servie | **6 889 mots / 34 min** |
| Composant public | **45 898 octets** |
| Moteur public | **30 378 octets** |

Le contrôle SEO global reste documenté à **491/492** : seul l’ancien hash P4 de
`prioriser-fonctionnalites-mvp-saas` sur le fichier partagé
`src/lib/guides.ts` échoue hors périmètre. Le vérificateur d’artefact conserve
les deux temps de lecture hors périmètre de `crm-sur-mesure-ou-hubspot` et
`seo-local-pme`.

## Porte suivante

R34 doit recevoir deux contre-audits ciblés et indépendants sur le même
manifeste :

1. moteur, états, export et valeurs adverses ;
2. parcours réel, clavier, mobile, thèmes et restitution.

La porte P4 exige au moins **92/100 sur chaque axe, aucun P0 et aucun P1**. Le
BAT navigateur final de publication reste distinct du contre-audit et ne sera
exécuté qu’après ce double GO.
