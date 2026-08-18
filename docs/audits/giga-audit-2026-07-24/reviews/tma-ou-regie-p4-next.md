# Contre-audit P4 humain — `tma-ou-regie`

Date : **24 juillet 2026**  
Relecteur : `/root/cahier_saas_p4_human`

Périmètre : lecture comme un dirigeant de TPE/PME qui doit choisir entre une
capacité de maintenance, du temps consommé, des lots ou une organisation
interne. Contrôle de la pédagogie, des mots, des cas d'usage, des chiffres,
des comparaisons, des objections, des risques contractuels, de la confiance,
de la conversion et de la cohérence entre la page, le calculateur, le CSV et
la carte SEO. Aucun fichier de production n'a été modifié.

## Snapshot contrôlé

```text
ba3f36c7ce0a3a68cdd68d0dd705233d70e8d14db34d33c6d1975745ad12d896  src/app/guides/tma-ou-regie/page.tsx
d8e47d95a43b124eff352ce9cffbbcd385ea10db62039894acb6e9e9eb57058b  src/components/guides/TmaTcoCalculator.tsx
f7f7703079e038768cdebad46ecf80fe52ada1469b7d6eb80ba0e6d0ddfedb62  src/lib/tma-tco.ts
8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09  src/lib/guides.ts
97bda53208116bac3382eb5a12e1c838b5048c77912fc4ff45c9cbf8f57d9301  src/app/guides/tma-ou-regie/opengraph-image.tsx
e1a0de775b07b8396aac2a9bb7c2f9f61b99987a682b7390f9db8887958b4f29  public/ressources/comparateur-tma-regie-tco.csv
```

Contrôles reproductibles :

```text
GuideToc / H2 : 14 identifiants sur 14, même ordre
Tests ciblés : 2 fichiers passés, 12 tests passés sur 12
Calculs statiques : 90 jours, 81 utilisés, 15 perdus, 9 en dépassement ; totaux et seuils recalculés
```

Les liens officiels cités ont été rouverts. L'article 38 du CCAG-TIC décrit
bien la TMA et distingue prévention, correction, évolution, adaptation,
transition et réversibilité ; la page rappelle correctement qu'il concerne les
marchés publics et ne s'impose pas automatiquement à un contrat privé. La page
FAR 16.601 actuellement publiée (FAC 2026-01) confirme les garde-fous cités
pour les contrats américains en temps et moyens : périmètre incertain,
surveillance et plafond. Les sources CNIL sont utilisées pour les accès, les
traces et la sous-traitance, sans être transformées en tarif ou en obligation
universelle.

## Verdict exécutif

**Score éditorial : 94/100.**

**Score P4 : 18/20 — NO-GO temporaire pour une incohérence de promesse dans la carte SEO.**

```text
P0 : 0
P1 : 1
P2 : 5
Verdict : NO-GO temporaire côté publication globale ; GO du corps après correction de la carte
```

Le corps du guide est l'un des plus aboutis du lot. Il commence par la vraie
question du dirigeant (« forfait mensuel ou offre facturée au jour ? »),
explique que TMA et régie ne sont pas des opposés, distingue le service acheté
de la manière de le payer, puis fait passer le lecteur par un historique réel,
un classement par familles de demandes, sept options sur douze mois, le temps
interne, le report des jours, deux seuils de bascule et trois impacts de panne.
Il accepte explicitement les conclusions peu commerciales : intervention au
besoin, compétence interne, remplacement, retrait ou report.

Le défaut P1 est en dehors du corps mais visible sur la carte et potentiellement
dans le maillage SEO : `src/lib/guides.ts` décrit « sept coûts complets », alors
que le guide et le calculateur répètent à juste titre qu'il s'agit de **coûts
renseignés/partiels** tant que reprise, sortie, outils et pertes ne sont pas
documentés. Cette contradiction peut faire croire à un comparatif de TCO
complet, puis décevoir le lecteur qui voit les réserves dans l'article.

Correction minimale : remplacer « sept coûts complets » par « sept coûts
renseignés » ou « sept scénarios de coût à compléter ». Tant que cette chaîne
n'est pas alignée, je ne signe pas un GO global « sans réserve ».

## Score détaillé

| Critère | Note /10 | Observation humaine |
| --- | ---: | --- |
| Intérêt dès l'ouverture | 10 | Scène de devis, question de coût et réponse opérationnelle. |
| Compréhension dirigeant | 9 | TMA, régie, capacité, support et lot sont séparés sans jargon inutile. |
| Progression et décisions | 9 | Définir, mesurer, classer, chiffrer, tester, contrôler, comparer puis décider. |
| Profondeur et exemples | 10 | Quatre demandes fictives, 90 jours, 12 mois, report, seuils et panne. |
| Chiffres et comparaison | 10 | Sept options comparées sur les mêmes hypothèses et coûts internes visibles. |
| Objections et mauvais fits | 10 | Interne, ponctuel, remplacement, retrait, report et absence de décideur. |
| Précision contractuelle | 9 | Plafond, acceptation, accès, sortie et support sont bien distingués. |
| Sources et limites | 9 | France, CNIL, Royaume-Uni, Canada, États-Unis et NIST, avec limites d'usage. |
| Calculateur et ressource | 9 | Calcul local, inconnues, horizons 12/24/36, copie et CSV. |
| Conversion sans pression | 9 | CTA précise, mauvais fits assumés, « signer n'est pas obligatoire ». |

Total : **94/100**.

## P1 — correction nécessaire avant le GO global

### P1.1 — « sept coûts complets » contredit le guide

Dans `src/lib/guides.ts`, la `cardDescription` annonce :

```text
Un même flux fictif, sept coûts complets, trois règles de report et trois pannes...
```

Le corps dit à raison : « Les montants ci-dessous ne sont pas encore des coûts
complets ». Il précise que reprise initiale, outils, sortie et dommage d'une
panne restent inconnus. Le calculateur appelle ses résultats « coûts
renseignés », exclut du classement les options qui gardent un poste important
à confirmer, et le CSV marque ses lignes comme « exemple fictif partiel ».

La correction ne demande pas de refaire le guide :

```text
Un même flux fictif, sept scénarios de coût renseigné, trois règles de report
et trois impacts de panne pour comparer sans oublier votre temps interne.
```

Statut : **P1 ouvert — correction de copy requise, sans changement de fond**.

## P2 — améliorations non bloquantes

### P2.1 — Mini-mode d'emploi avant le calculateur

Le composant demande 29 montants. Quatre lignes indiquant « récupérer les
devis sur la même base, compter le tri et la validation, isoler reprise/sortie,
cocher “à confirmer” plutôt que mettre zéro » aideraient un dirigeant pressé.

### P2.2 — Base HT/TTC

Les valeurs sont fictives, mais une phrase demandant de comparer toutes les
offres sur la même base HT ou TTC éviterait un écart artificiel dans le CSV.

### P2.3 — Coût internalisé plus reproductible

Le montant fictif de 102 000 € est annoncé comme « coût chargé, outils et
relais ». Une note devrait rappeler salaire chargé, congés, recrutement,
formation, backup et management afin que le lecteur puisse le reconstituer.

### P2.4 — Décision intermédiaire après l'historique

Après les trois mois de demandes, une phrase de sortie (« sans volume
répétitif, ne demandez pas encore un abonnement ») aiderait les petites
entreprises qui ne liront pas les 38 minutes.

### P2.5 — Rappel support/SLA

Le guide distingue bien capacité et support. Un rappel court sur niveaux P1/P2,
plages couvertes, canal d'alerte et mesure du rétablissement réduirait encore
la confusion entre jours réservés et réponse dans l'heure. Le guide de contrat
TMA lié couvre déjà la profondeur contractuelle.

### P2.6 — QA visuelle réelle

Browser n'était pas disponible. Je ne signe donc pas le rendu à 320, 390, 430,
768, 1024 et 1440 px, le clair/sombre, les tableaux condensés, les 29 champs,
les ancres ou le téléchargement CSV. Les tests DOM et d'interaction sont
rassurants mais ne remplacent pas une capture réelle.

## Chiffres et formules : contrôle humain

Les calculs centraux sont cohérents :

- 48 jours récurrents + 18 jours de diagnostic + 24 jours d'évolution = 90 ;
- 8 jours réservés sur 12 mois = 96 achetés ; 81 utilisés + 15 perdus + 9 de
  dépassement = 90 ;
- hybride : 74 100 € + 6 240 € = 80 340 € ;
- capacité avec report : 72 000 € + 9 360 € = 81 360 € ;
- temps passé : 72 000 € + 15 600 € = 87 600 € ;
- sans report : 72 000 € + 7 650 € + 9 360 € = 89 010 € ;
- seuil hybride/capacité : (81 360 − 38 400 − 6 240) / 850 = 43,2 jours ;
- seuil de gouvernance interne : (80 340 − 72 000) / (52 × 60) = 2,67 h/semaine ;
- panne centrale : 15 × 45 × 4 × 60 % + 2 000 = 3 620 € ;
- couverture entièrement efficace : 12 000 / 3 620 = 3,31 pannes ; à moitié,
  environ 6,63.

La page fait la distinction essentielle entre coût renseigné et coût complet,
ne transforme pas une inconnue en zéro dans son verdict et répète que qualité
du code, couverture horaire et valeur d'une évolution ne sont pas calculées.

## Conversion et plume

La CTA finale demande les offres et trois à douze mois de demandes, compare les
mêmes familles et conserve les inconnues visibles. Elle propose signer,
plafonner, négocier, attendre ou remplacer, au lieu de forcer une TMA. Le bloc
« Hagnéré Code peut réellement vous aider » contient un mauvais fit explicite.
Cette capacité à refuser un dossier augmente la confiance.

La page sonne humaine parce qu'elle utilise des situations reconnaissables —
export PDF, lenteur inconnue, validation avant envoi, tableau de bord sans
utilisateur — et parce qu'elle accepte les verdicts frustrants : ne pas signer,
acheter seulement un diagnostic, reporter ou remplacer l'application. Les
opinions professionnelles sont adossées à une hypothèse, un calcul ou une
limite, pas à une promesse de tarif.

Le CTA arrive cependant après une page de 38 minutes. Un lien discret après
l'historique ou le premier comparatif serait une amélioration P2, pas un défaut
de confiance.

## Sources étrangères et posture professionnelle

Le guide couvre déjà les axes demandés : source française officielle pour les
définitions et la réversibilité ; CNIL pour accès, traces et sous-traitance ;
repères britannique, canadien et américain pour bases de paiement, plafonds et
surveillance ; NIST pour partir de l'impact métier. Chaque source étrangère est
bornée : elle inspire une question de contrôle, elle ne crée aucune obligation
dans un contrat privé français.

## Recommandation finale

1. Corriger `cardDescription` « sept coûts complets » en « sept coûts
   renseignés » ou équivalent.
2. Rejouer le build et vérifier carte Guides, partage social et rendu du
   calculateur après cette correction de copy.
3. Garder en backlog les cinq P2 éditoriaux et la QA Browser réelle.

**Verdict : NO-GO temporaire global pour une seule incohérence éditoriale de
carte SEO ; le corps du guide est GO sur le fond, la pédagogie, les calculs,
les tests et la conversion dès que la promesse « coûts complets » est alignée.**

## Revalidation après correction

Le P1 décrit ci-dessus a été corrigé puis relu sur un nouveau snapshot :

```text
93369100273dd2b1273584608149891fd21420947328576091b36750c6ddae1b  src/app/guides/tma-ou-regie/page.tsx
6eb7cc68d2babc59d319ae20ad53f170f727ca616e8463abc0d7994e61f6cc15  src/lib/guides.ts
```

- la carte dit « sept comparatifs de coûts renseignés » ;
- le texte alternatif de l’image sociale dit « coûts renseignés » ;
- le dossier de recherche ne promet plus « sept TCO » ;
- la page conserve l’avertissement « pas encore des coûts complets » ;
- le moteur, le calculateur et le CSV conservent leurs inconnues et leurs
  libellés partiels ;
- 58/58 tests ciblés réussissent ;
- le rendu réel de la route a été contrôlé à 390 px et sur grand écran, sans
  débordement du document ni du calculateur.

**Verdict P4 révisé : GO éditorial local — 94/100 — P0 0, P1 0.** La
publication, l’indexation et la fraîcheur de la production restent des portes
séparées.
