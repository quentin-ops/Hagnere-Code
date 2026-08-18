# Giga-audit des guides — protocole et état

Date de lancement : 24 juillet 2026

Périmètre technique initial : 101 routes `src/app/guides/*/page.tsx`.

## Objectif

Transformer chaque guide en la meilleure réponse possible pour un dirigeant
français qui doit comprendre, chiffrer et prendre une décision numérique.

Ce chantier vise la qualité éditoriale, le gain d'information, la confiance et
la conversion. Il ne promet pas une première position dans Google : le
classement dépend aussi de l'autorité du domaine, de la concurrence, des liens,
de l'expérience de page, de l'historique et des signaux observés après
publication.

## Sources de vérité

- pilotage exhaustif, passes, incidents et statut des 101 URL :
  [`registre-maitre-101-guides.md`](registre-maitre-101-guides.md) ;
- ordre d'application et reçus exigés :
  [`plan-corrections-corpus-101.md`](plan-corrections-corpus-101.md) ;
- contrôle indépendant de l'exhaustivité et des incohérences des rapports :
  [`controle-qualite-audits-101.md`](controle-qualite-audits-101.md) ;
- classement décisionnel des 101 guides par niveau et ordre de reprise :
  [`classement-qualite-101-guides.md`](classement-qualite-101-guides.md) ;
- empreintes SHA-256 du socle, des 101 pages, rapports, images et recherches :
  [`manifest-snapshots-101.md`](manifest-snapshots-101.md) ;
- inventaire et triage : [`inventaire-corpus.md`](inventaire-corpus.md) ;
- benchmark France et international :
  [`benchmark-international.md`](benchmark-international.md) ;
- audit détaillé d'une URL :
  `docs/audits/giga-audit-2026-07-24/guides/<slug>.md` ;
- structure obligatoire de cet audit :
  [`_modele-audit-guide.md`](_modele-audit-guide.md) ;
- recherche et décisions maintenables :
  `docs/research/<slug>.md` ;
- norme éditoriale : [`../../charte-qualite-guides.md`](../../charte-qualite-guides.md) ;
- exécution : [`../../workflow-maitre-guides-4-passes.md`](../../workflow-maitre-guides-4-passes.md).

Un fichier absent ou incomplet ne vaut pas validation. Les rapports de lot ne
remplacent jamais la preuve propre à une URL.

Le registre maître distingue volontairement les **passes** P1 à P4 des
**gravités** P0 à P2. Une passe P3 peut ainsi exister tout en concluant à un
incident P1 et à un `NO-GO`.

## État consolidé au 25 juillet 2026

- **101/101** guides disposent d'une fiche d'audit individuelle ;
- **0/101** guide ne reste sans fiche ;
- le classement strict compte **9 guides premium locaux à confirmer**, 17
  prometteurs à approfondir, 28 reprises prioritaires et 47 reprises standard ;
- `calculer-roi-application-metier` est réécrit et gelé en r4 : P3
  indépendante à 97/100, P0/P1/P2 = 0 ; P4, lecteur externe, publication,
  production et indexation restent ouverts ;
- les P1 internationales de `transformer-excel-en-application`,
  `react-native-ou-flutter`, `cout-maintenance-site-internet` et
  `combien-de-temps-pour-creer-un-site` sont validées et gelées ; leurs pages
  restent respectivement à 70/100, 69/100, 72/100 et 71/100 tant que P2 n'est
  pas intégrée ;
- les deux P0 éditoriaux initiaux de `dette-technique-cout-entreprise` sont
  fermés localement ; la production de ce snapshot corrigé reste à prouver ;
- `rgpd-saas-b2b` et `google-ads-saas-b2b` sont corrigés et contre-audités
  localement ; leur BAT navigateur réel reste ouvert ;
- `migrer-logiciel-metier-sans-interruption` est corrigé et contre-audité :
  P3 99/100 et P4 humaine simulée 97/100, sans P0/P1/P2 de contenu ; BAT
  navigateur, dirigeant externe, manifeste final et preuves publiques restent
  ouverts ;
- `suivi-conversions-google-ads` est corrigé et contre-audité : P3 factuelle
  98/100 et P4 humaine simulée 95/100, sans P0/P1/P2 éditoriaux ; BAT
  navigateur, lecteur dirigeant externe, production et clôture des manifestes
  restent ouverts ;
- les autres blocages, limites et propositions sont localisés guide par guide ;
- la phase suivante est la correction successive, suivie d'une nouvelle P3
  indépendante et d'une P4 complète sur chaque snapshot corrigé.

Cet état signifie « corpus audité », pas « corpus corrigé ». Aucune publication
ou indexation nouvelle n'est impliquée par ce dossier.

## Ce que signifie « auditer un guide »

Chaque guide passe successivement par les contrôles suivants.

### 1. Comprendre le lecteur

- situation qui déclenche la recherche ;
- phrase qu'un dirigeant prononcerait réellement ;
- décision attendue après lecture ;
- questions, objections, budget, délai, personnes et risques pertinents ;
- réponse et conséquence dans les 150 premiers mots.

### 2. Chercher ce qui manque

- résultats français représentatifs ;
- meilleures ressources américaines et britanniques ;
- au moins un autre marché pertinent ;
- sources primaires et officielles ;
- comparaison des méthodes, exemples, preuves, outils et angles morts ;
- matrice de gain d'information arrivée à saturation expliquée.

### 3. Prouver et chiffrer

- faits, estimations, déductions et recommandations séparés ;
- affirmations décisives sourcées au niveau où le lecteur les voit ;
- calculs reproductibles ;
- scénarios simple, central et exigeant lorsque le sujet touche prix, ROI,
  délai ou comparaison ;
- analyse de sensibilité et cas où le verdict change ;
- coûts de création, d'usage, de maintenance et de sortie comparés sur le même
  horizon.

### 4. Prendre position

- recommandation Hagnéré Code pour le cas le plus fréquent ;
- fondement factuel ;
- contre-cas où une autre solution gagne ;
- solution à ne pas vendre au lecteur ;
- signal qui impose de revoir le choix.

### 5. Réécrire

- progression propre au sujet ;
- langage de dirigeant, sans méthode de consultant à décoder ;
- exemples contrastés et honnêtes ;
- aucune structure industrielle recopiée ;
- réponse autonome avant le CTA ;
- bon fit, mauvais fit et possibilité de ne rien acheter.

### 6. Contredire et tester

- contre-audit par un regard qui n'a pas écrit le brouillon ;
- réouverture de concurrents français et internationaux ;
- recalcul indépendant ;
- test mobile de la comparaison ;
- passe de plume complète ;
- score d'excellence, tests, build et navigateur sur le snapshot final.

## Priorisation

Le niveau de priorité n'est pas une note de qualité. Il sert à choisir l'ordre
de traitement :

| Critère                         | Poids | Question                                                                                 |
| ------------------------------- | ----: | ---------------------------------------------------------------------------------------- |
| Proximité commerciale           |    25 | La requête correspond-elle à une décision que Hagnéré Code peut réellement accompagner ? |
| Écart face aux meilleures pages |    25 | Une ressource concurrente répond-elle mieux à une question décisive ?                    |
| Risque de décision              |    15 | Une imprécision peut-elle faire perdre de l'argent, du temps ou créer un risque ?        |
| Faiblesse pédagogique           |    15 | Le dirigeant doit-il traduire le vocabulaire ou reconstruire seul la conclusion ?        |
| Potentiel de preuve originale   |    10 | Peut-on fournir calcul, outil, modèle ou comparaison difficile à remplacer ?             |
| Données disponibles             |    10 | Search Console, conversion ou retours humains signalent-ils une opportunité ?            |

En l'absence de données Search Console exploitables, les dix derniers points
restent « inconnus » ; ils ne sont jamais inventés.

## Taille des lots

La recherche peut avancer en parallèle. La réécriture reste successive, par
lots de trois guides au maximum :

1. trois dossiers concurrentiels complets ;
2. réécriture du premier guide ;
3. contre-audit et corrections du premier ;
4. contrôle final du premier ;
5. seulement ensuite, rédaction du deuxième, puis du troisième ;
6. gel et vérification commune du lot.

Cette limite protège la qualité du texte et les fichiers partagés. Elle
n'interdit pas de préparer les recherches des lots suivants.

## Définition de « terminé » pour une URL

Une URL n'est terminée que si :

- sa matrice de gain d'information est complète ;
- son apport annoncé est visible dans la page ;
- ses scénarios et ses calculs ont été refaits ;
- sa position professionnelle et son contre-cas sont explicites ;
- aucune affirmation décisive ne reste sans preuve ou qualification ;
- aucun `P0` ou `P1` ne reste ouvert ;
- le score atteint au moins 90/100, aucun axe n'est sous 8 et les axes
  critiques sont à 9 ou 10 ;
- le rendu et la technique ont été testés sur le snapshot final ;
- le statut « audité », « réécrit », « testé », « publié » ou « indexé » est
  rapporté sans confusion.

Une page longue, un build vert ou un ancien score ne suffit pas.

## États du chantier

| État                        | Signification                                    |
| --------------------------- | ------------------------------------------------ |
| À inventorier               | route détectée, métriques non établies           |
| Triage réalisé              | faiblesse et priorité initiales connues          |
| Audit concurrentiel terminé | corpus France/international et manque documentés |
| À réécrire                  | gain d'information défini, page non corrigée     |
| Réécrit                     | contenu corrigé, contre-audit restant            |
| Contre-audité               | faits, calculs et verdict revérifiés             |
| Testé localement            | batterie et navigateur passés                    |
| Publié vérifié              | URL de production contrôlée                      |
| Indexé confirmé             | état vérifié séparément dans Search Console      |

Le tableau d'inventaire constitue le registre exhaustif de ces états. Aucun
résumé global ne doit déclarer « tout le corpus corrigé » tant que chaque ligne
n'a pas atteint l'état réellement annoncé.
