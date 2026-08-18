# Contre-audit P3 — `tma-ou-regie` (réouverture complète)

Date du contrôle : **24 juillet 2026**  
Périmètre : exact snapshot courant de la page publique, du registre, du
calculateur TCO, de sa bibliothèque de calcul, des tests et du CSV.  
Nature : audit indépendant en lecture seule. Aucun fichier de production n'a
été modifié pendant ce contrôle.

## Verdict exécutif

**GO éditorial conditionnel — aucune anomalie P0/P1 trouvée dans le snapshot
actuel. Score : 17,5/20 (87,5/100).**

Le guide a atteint le niveau attendu pour un dirigeant : il part d'un choix
concret, traduit le vocabulaire, sépare le service du mode de paiement, compare
sept options sur le même flux fictif de 90 jours, ajoute le temps de l'équipe
interne, montre les règles de report, calcule deux seuils et trois impacts de
panne, puis donne une recommandation qui peut honnêtement conclure à ne pas
signer. Le calculateur évite maintenant de présenter des postes inconnus comme
un coût complet et le CTA décrit un résultat commercial précis.

La publication peut donc rester en ligne. Pour atteindre un niveau réellement
« meilleur du meilleur », deux améliorations P2 sont recommandées avant de
réutiliser ce modèle sur les prochains guides : rendre la décomposition de
chaque coût externe visible sur la page elle-même et afficher une matrice
qualitative très courte à côté du classement monétaire. Ces points ne rendent
pas les chiffres faux ; ils réduisent la capacité d'un lecteur à les reproduire
sans ouvrir le document de recherche ou le CSV.

## Snapshot et preuves contrôlés

Fichiers relus :

- `src/app/guides/tma-ou-regie/page.tsx` ;
- `src/app/guides/tma-ou-regie/opengraph-image.tsx` ;
- `src/components/guides/TmaTcoCalculator.tsx` et son test ;
- `src/lib/tma-tco.ts` et son test ;
- `src/lib/guides.ts` ;
- `docs/research/tma-ou-regie.md` ;
- `docs/audits/giga-audit-2026-07-24/research/tma-ou-regie-deep-dive.md` ;
- `public/ressources/comparateur-tma-regie-tco.csv` ;
- les rapports P3/P4 historiques, utilisés uniquement pour vérifier les
  corrections déjà apportées.

Le manifeste `docs/research/manifests/tma-ou-regie-p4.sha256` correspond aux
fichiers de son snapshot. Les manifestes P2/P3 plus anciens signalent
logiquement les évolutions ultérieures de `guides.ts` et du test de langue ; ils
ne doivent pas être utilisés comme preuve du snapshot actuel.

Hashes du snapshot relu :

```text
ba3f36c7ce0a3a68cdd68d0dd705233d70e8d14db34d33c6d1975745ad12d896  src/app/guides/tma-ou-regie/page.tsx
97bda53208116bac3382eb5a12e1c838b5048c77912fc4ff45c9cbf8f57d9301  src/app/guides/tma-ou-regie/opengraph-image.tsx
d8e47d95a43b124eff352ce9cffbbcd385ea10db62039894acb6e9e9eb57058b  src/components/guides/TmaTcoCalculator.tsx
e1d9220e6a63aee73ddd736a74dd5507c0919b9f929a070ce0842403458bab57  src/components/guides/TmaTcoCalculator.test.tsx
f7f7703079e038768cdebad46ecf80fe52ada1469b7d6eb80ba0e6d0ddfedb62  src/lib/tma-tco.ts
64d554ba531532140b72e1c6951eea01cb2f1e4e44adcda6b9265efd2ccd03b4  src/lib/tma-tco.test.ts
8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09  src/lib/guides.ts
bb10c76df7a76af76628723573057e710c9290fa32548e1e7542c0182a591500  src/lib/guide-human-language.test.ts
7754ea80c04a485c5929eb6950a14638910754057bb3b493fb2a302b9cb92d3b  docs/research/tma-ou-regie.md
922bc807a8daf6a88094f4b91f08135eca428a94711c6ff767760c2cb0df0198  docs/audits/giga-audit-2026-07-24/research/tma-ou-regie-deep-dive.md
```

## Exactitude des calculs

Le scénario public annonce 48 jours récurrents, 18 jours de diagnostic, 24
jours d'évolution, un taux interne de 60 €/h et 90 jours utiles. Les résultats
publiés ont été recalculés indépendamment :

| Option | Recalcul sur 12 mois |
| --- | ---: |
| Formule hybride | **80 340 €** |
| Capacité avec report annuel | **81 360 €** |
| Temps réellement mobilisé | **87 600 €** |
| Capacité sans report | **89 010 €** |
| Lots clairement définis | **92 280 €** |
| Interventions ponctuelles | **103 440 €** |
| Compétence internalisée | **108 240 € de trésorerie** |

Les résultats intermédiaires sont cohérents : 90 jours de demande, 81 jours
consommés dans le mois, 15 jours perdus et 9 jours de surcharge sans report ;
86 jours consommés, 10 perdus et 4 de surcharge avec report trimestriel ; 90
jours absorbés, 6 non utilisés avec mutualisation annuelle. Le différentiel
hybride/capacité annualisée est de 1 020 € (1,3 %), le seuil de jours variables
est de 43,2 jours et le seuil de gouvernance du temps passé de 2,673 h/semaine,
soit environ 2 h 40. Les trois impacts de panne donnent 175 €, 3 620 € et
35 400 €.

Le calculateur applique correctement :

- `coût annuel × horizon / 12` ;
- `heures internes hebdomadaires × 52 × taux × horizon / 12` ;
- les coûts ponctuels une seule fois ;
- le risque annuel multiplié par l'horizon ;
- aucun classement lorsqu'une option est marquée « à confirmer » ;
- un classement uniquement entre options déclarées complètes.

La qualification de « coût renseigné »/« coût partiel » est visible dans la
page, les cartes, le résumé copié et le CSV dynamique. Le libellé de l'option
internalisée est désormais « coût externe ou coût de la fonction » et ne
présente plus l'embauche comme un prestataire : le P1 historique est levé.

## Pédagogie, plume et décision

### Points validés

- L'ouverture parle directement au décideur : « vous comparez un forfait… »
  puis répond avant d'expliquer (`page.tsx:361-377`).
- TMA, régie, responsabilité, capacité de production et engagement de support
  sont séparés ; la page rappelle que le CCAG-TIC est un cadre de marchés
  publics et ne crée pas une règle automatique pour un contrat privé.
- Les alternatives non commerciales — intervention ponctuelle, interne,
  remplacement ou retrait — empêchent la page de forcer un abonnement.
- Le flux mensuel rend visible l'effet du report, des pointes et des jours
  expirés. Le lecteur voit aussi la conséquence du temps passé par son équipe,
  souvent oublié dans les comparatifs commerciaux.
- Les seuils et la sensibilité aux pannes transforment une opinion en méthode
  falsifiable. Le texte dit explicitement que la couverture ne garantit ni
  astreinte ni rétablissement.
- Le CTA est conditionnel, concret et réversible : offres et historique
  comparés, inconnues conservées, liste de questions, décision possible de
  signer, plafonner, négocier, attendre ou remplacer.
- Le téléchargement CSV et le calcul local apportent une utilité autonome ;
  les tests vérifient l'absence d'appel réseau pour le résumé.

### P2-01 — Les coûts externes ne sont pas tous reproductibles depuis la page

**Impact : moyen, non bloquant.** Le tableau public donne le calcul complet du
temps passé, mais seulement le montant final pour plusieurs postes : 74 100 €
pour l'hybride, 79 800 € pour les lots, 79 650 € pour la capacité sans report,
81 600 € pour le ponctuel et 102 000 € pour la fonction interne. Les formules
de détail existent dans le document de recherche approfondie, mais pas à côté
du tableau que lit le prospect. Le CSV reprend les montants et les formules
générales, sans détailler chaque famille de lots ou la répartition hybride.

**Recommandation.** Ajouter sous le tableau un accordéon ou une phrase par
option : par exemple « 12 × 3 200 € de récurrent + 42 × 850 € de variable » et
« 12 × 3 500 € + 6 × 2 700 € + 3 × 7 200 € ». Conserver le rappel « hypothèses
fictives, jamais des tarifs de marché ». Le lecteur pourra alors vérifier la
hiérarchie sans devoir télécharger un fichier séparé.

### P2-02 — Le classement monétaire gagnerait à avoir une matrice de service

**Impact : moyen, non bloquant.** Le guide explique plus loin la couverture,
les accès, la décision, l'acceptation et la sortie, mais les sept options ne
sont pas comparées côte à côte sur ces critères. Un dirigeant peut retenir
80 340 € sans voir immédiatement que ce montant n'achète ni un délai de
rétablissement ni une compétence de remplacement.

**Recommandation.** Ajouter une table de cinq colonnes, sans score artificiel :
`Option | Ce qui est acheté | Temps de décision interne | Risque restant côté entreprise | À éviter si…`.
Ne pas convertir des engagements qualitatifs en étoiles ou en note pseudo-
scientifique.

### P2-03 — La promesse « coût réel » des métadonnées est plus large que le
contenu chiffré

**Impact : faible.** Le registre et le titre SEO utilisent « coût réel » et
« coût total », tandis que le corps prend soin de dire qu'il s'agit d'un coût
renseigné et partiel jusqu'à confirmation des postes. Cette tension n'est pas
trompeuse dans le corps, mais peut créer une attente de tarif complet dans le
résultat de recherche.

**Recommandation.** À la prochaine mise à jour, préférer « comparer le coût
renseigné et les postes qui restent à votre charge » dans la description, ou
conserver « coût réel » uniquement comme question d'accroche avec le correctif
« pas seulement le prix affiché ».

## Sources et exactitude juridique

Le guide cite Légifrance (CCAG-TIC art. 38), la CNIL (maintenance et
sous-traitance), la charte Cigref–Syntec de 2004, GOV.UK Model Services
Contract v2.2(A), CanadaBuys, FAR 16.601 et NIST IR 8286D. Les sources
britanniques, canadiennes et américaines sont correctement décrites comme des
cadres publics étrangers : elles inspirent des garde-fous de plafond, de suivi
et d'analyse d'impact, sans être présentées comme des obligations d'un contrat
privé français ni comme des prix de marché.

FAR 16.601, vérifié sur la page officielle, confirme le périmètre : le temps et
matériel est réservé aux situations où l'étendue ou la durée ne peut pas être
estimée avec suffisamment de confiance, avec surveillance et plafond. Cette
source soutient les garde-fous éditoriaux ; elle ne justifie aucune conclusion
juridique pour Hagnéré Code. La page conserve également le bornage « général,
pas un avis juridique » et renvoie au contrat réel, aux données et à
l'organisation.

## SEO, accessibilité et runtime

Contrôles exécutés :

```text
npx vitest run --maxWorkers=2 [7 fichiers ciblés]  => 7 fichiers, 48 tests OK
npx tsc --noEmit --pretty false                     => OK
npx eslint [page, calculateur, bibliothèque, registre] => OK
```

Sur le serveur local `http://localhost:3010` :

- page guide : HTTP **200**, 588 626 octets ;
- image OG : HTTP **200**, PNG **1200 × 630** ;
- canonical : `https://hagnere-code.ai/guides/tma-ou-regie` ;
- JSON-LD : `Article` et `BreadcrumbList`, un H1 ;
- les trois liens de guides associés répondent HTTP 200 ;
- le `noindex,nofollow` observé localement est la protection de l'environnement
  de développement, pas une preuve d'un noindex en production. Les tests de
  robots couvrent explicitement les branches production/preview.

La page n'utilise pas de `FAQPage` JSON-LD. C'est cohérent avec la gouvernance
SEO actuelle du site ; les FAQ visibles restent utiles à la lecture sans
risquer de promettre un affichage enrichi non garanti.

## Décision de publication

**Publication acceptable dans l'état actuel.** Aucun défaut mathématique,
juridique ou de conversion ne justifie un retour P1. Avant de dupliquer ce
patron sur les prochains guides, traiter P2-01 et P2-02 dans le modèle de
production, puis relancer le même jeu de tests et un contrôle mobile. Ne pas
annoncer qu'une position Google est acquise : le guide possède de bons signaux
de qualité, mais l'indexation et le classement restent des résultats externes à
vérifier après déploiement.

