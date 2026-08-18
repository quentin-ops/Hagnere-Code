# Audit approfondi — `budget-google-ads-pme`

Date : **24 juillet 2026**

Auditeur : orchestrateur du giga-audit, contrôle indépendant du dossier du
21 juillet 2026.

Périmètre : page, calculateur, moteur de calcul, tests ciblés, registre, image
sociale, dossier de recherche, anciens manifestes, sources officielles Google
Ads et Bpifrance, concurrence française, américaine, britannique et
australienne, pédagogie dirigeant, comparaison économique, conversion et
portes techniques observables.

Limite : ce rapport n'est ni une recommandation budgétaire personnalisée, ni
une prévision de ventes, ni une preuve de déploiement ou d'indexation.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant de PME qui envisage un premier test Google Search et
                hésite entre plusieurs montants.
Question réelle : combien puis-je tester sans confondre budget Google, budget
                  rentable et perte que ma trésorerie peut absorber ?
Décision attendue : lancer un test borné, réduire l'offre ou la zone, préparer
                    les prérequis, ou reporter.
Réponse actuelle : il n'existe aucun minimum universel ; comparer une prévision
                   locale, la marge conditionnelle et le pire cas de trésorerie.
Défaut qui coûte le plus de valeur : le calculateur vérifie la cohérence d'un
                  scénario choisi, mais ne montre ni sa sensibilité ni la
                  quantité d'information que le nombre de clics peut réellement
                  produire ; une hypothèse optimiste peut donc sembler
                  finançable sans être crédible.
Niveau actuel : B — guide déjà très utile et original, mais pas encore la
                référence décisionnelle complète.
Priorité : haute.
Statut : audité — à compléter avant nouvelle P3/P4.
P0 : 0 ; P1 : 5 ; P2 : 8.
```

### Score avant correction

| Axe | Note /10 | Preuve localisable | Manque décisif |
| --- | ---: | --- | --- |
| Intention | 9 | Hésitation 500/1 000/2 000 €, réponse dès `page.tsx:227-255` | Ajouter l'horizon économique dès l'ouverture. |
| Décision | 8 | Quatre sorties et deux plafonds `:497-557`, `:525-546` | Un seul jeu d'hypothèses ; aucune bascule prudente/centrale/favorable démontrée. |
| Pédagogie | 9 | Mots ordinaires, coût complet, marge, prévision et pire cas `:261-390` | « Ventes si l'objectif est atteint » peut être lu comme un résultat discret plutôt qu'une espérance conditionnelle. |
| Profondeur | 7 | Coût complet, marge contributive, trésorerie, réglage et délai `:261-523` | Pas de durée de récupération, de valeur client à horizon borné, de saisonnalité ni de pouvoir d'apprentissage du test. |
| Preuve | 9 | Sources Google et Bpifrance proches des assertions | Documentation vivante revalidée, mais anciens verdicts P3/P4 non rattachés au snapshot complet actuel. |
| Comparaison | 7 | Prévision Google comparée à deux plafonds internes | Pas de scénarios à hypothèses communes ni de comparaison premier achat/abonnement/récurrence. |
| Originalité | 9 | Calculateur local sans collecte, cas limites et verdicts | Il manque l'export de la décision et une vue de sensibilité. |
| Style | 9 | Ton direct, exemple fictif annoncé, aucune moyenne sectorielle | Quelques formulations économiques demandent encore une traduction plus nette. |
| Conversion | 8 | Action autonome puis CTA acceptant le report `:525-557` | Hagnéré Code vend la gestion Ads sans le déclarer explicitement avant le CTA. |
| SEO/produit | 7 | Metadata, Article, BreadcrumbList, OG, FAQ visible et maillage | Manifeste P4 incomplet, snapshot actuel différent de P2, QA actuelle non rejouée. |
| **Total** | **82/100** | **Somme contrôlée** | **Sous le seuil de 90 ; cinq P1 ouverts.** |

La page n'a aucun P0 identifié. Elle est plus honnête et plus actionnable que
les pages qui imposent un budget sectoriel sans méthode. Elle ne peut pourtant
pas reprendre le verdict historique « PASS » comme preuve actuelle : les
portes du giga-audit sont plus exigeantes et le snapshot complet n'est pas
gelé dans l'ancien manifeste P4.

## 2. Snapshot reproductible

| Élément | Empreinte ou observation au 24/07/2026 |
| --- | --- |
| Page | `src/app/guides/budget-google-ads-pme/page.tsx` — 560 lignes, 2 751 mots source |
| SHA-256 page | `b7a0c8250af2b511cf8dc9c8ba784663e61ba6a8eaac50bc90f26cdab9f048f6` |
| Image sociale | `src/app/guides/budget-google-ads-pme/opengraph-image.tsx` |
| SHA-256 image | `0a330d2efb4ebee180ccf9ad89a072a7c249c542efb757cc663ffd381e8a8397` |
| Calculateur | `src/components/guides/GoogleAdsBudgetCalculator.tsx` |
| SHA-256 calculateur | `7c61a5650f3fe8d2e386f9f43119f8e1c7a63f4468498007c16cbd988f70e43a` |
| Moteur | `src/lib/google-ads-budget.ts` |
| SHA-256 moteur | `767e1ff46e524ec74157b10d2f5b85ea69446ef3c2e36b2a1388fac9134e298b` |
| Recherche | `docs/research/budget-google-ads-pme.md` |
| SHA-256 recherche | `6da17c3801bf42460588478c62c24d60be6de9dc3806055f847a898a17707b6a` |
| Registre | `src/lib/guides.ts`, SHA-256 `8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09` |
| Entrée registre | publié et modifié le 22/07/2026 ; lecture annoncée 9 min |

L'ancien manifeste P2 contient une page de hash
`b58195b476c46d12858de2b3c003cccadca070861b2e6d0f378e0a20bd92faf0`
et un calculateur de hash
`564f09945c1d721255f132831c54c491ca3b14389ccb0e420ba1668748db1b5b`.
Ces valeurs diffèrent du snapshot courant. Le manifeste P4 ne contient que le
hash du dossier de recherche : il ne fige ni la page, ni le calculateur, ni le
moteur, ni le registre, ni l'artefact de build. L'ancien rapport reste un
historique utile, pas une porte P4 actuelle.

## 3. Ce que le guide dit réellement

Le parcours est volontairement resserré :

1. aucun montant n'est juste par défaut ;
2. le budget média est séparé du coût complet ;
3. le chiffre d'affaires est remplacé par la marge contributive ;
4. le Planificateur fournit une estimation locale des clics et de la dépense ;
5. le calculateur compare dépense prévue, plafond conditionnel de marge et
   plafond de perte ;
6. un exemple fictif refait les opérations ;
7. les règles de budget quotidien et total sont expliquées ;
8. le lecteur choisit de lancer, réduire, préparer ou reporter.

### Ce qui fonctionne déjà très bien

- L'ouverture répond à la question réelle dans les 150 premiers mots et refuse
  tout minimum inventé.
- Les coûts hors média incluent page, mesure, gestion, temps commercial et
  outils ; le lecteur ne confond pas la facture Google avec le risque total.
- La marge sur coûts variables est préférée au chiffre d'affaires, avec une
  réserve explicite sur les charges fixes et la base HT/TTC.
- Le calculateur est local, sans courriel ni envoi de données, et refuse les
  saisies impossibles, les valeurs non finies, les volumes négatifs et un
  objectif de demandes supérieur aux clics.
- La prévision Google n'est jamais présentée comme une promesse.
- « Limitée par le budget » n'est pas assimilé à « rentable ».
- Le pire cas sans vente protège la trésorerie et le CTA accepte explicitement
  que le bon conseil soit de reporter.

### Ce qui paraît complet mais ne l'est pas encore

- Le texte demande un scénario prudent et un scénario central, mais le guide
  n'en montre qu'un et le calculateur n'affiche aucun écart entre eux.
- `leadToSaleRate` produit un nombre moyen de ventes, parfois fractionnaire.
  Le libellé « ventes si l'objectif est atteint » ne distingue pas assez
  clairement espérance de ventes et nombre de contrats effectivement signés.
- `targetQualifiedLeads / forecastClicks` calcule le taux minimal nécessaire,
  pas la probabilité qu'il soit atteint. Le guide le dit, mais ne montre pas
  ce qu'un test très petit peut ou ne peut pas apprendre.
- La « marge par vente » est cohérente pour une vente unique. Elle peut
  sous-estimer ou surestimer un abonnement, un renouvellement ou un achat
  récurrent si l'horizon, le churn, le service après-vente et le délai de
  récupération ne sont pas écrits.
- La « somme à conserver » agrège charges fixes, résultat, fiscalité et
  sécurité. Elle protège la décision, mais masque la part de marge réellement
  consentie à l'acquisition et rend deux scénarios moins comparables.
- Le coût du temps est cité sans méthode : temps salarié chargé, coût
  d'opportunité ou prix de vente d'une heure ne donnent pas le même montant.

## 4. Benchmark France et international

Requêtes observées le 24 juillet 2026 :

```text
FR : quel budget Google Ads PME budget minimum calcul rentabilité
US : Google Ads budget small business break-even CPC calculator
UK : Google Ads budget small business break-even CPA
AU : Google Ads cost small business budget calculator
```

### Saturation

La recherche est saturée sur les fourchettes mensuelles, les CPC par secteur,
les frais d'agence et la formule « clics nécessaires × CPC ». Les pages
françaises et internationales répètent souvent des seuils de budget, délais,
taux de conversion ou volumes d'apprentissage sans corpus transposable à une
PME française. Continuer à collecter des fourchettes n'ajoute donc plus de type
de réponse.

Les gains encore rares sont :

1. partir de l'économie propre à l'entreprise et d'un horizon de récupération ;
2. séparer budget techniquement possible, budget économiquement acceptable et
   perte finançable ;
3. montrer la sensibilité au taux de signature et au coût du trafic ;
4. dire ce qu'un petit test peut réellement apprendre ;
5. garder l'option de ne pas lancer.

| Ressource et URL directe | Marché | Réponse ou outil utile | Limite | Adaptation |
| --- | --- | --- | --- | --- |
| [Google Ads — définition](https://support.google.com/google-ads/answer/6319?hl=fr) | Source primaire | Aucune dépense minimale imposée ; budget contrôlé par l'annonceur | Ne dit rien de la pertinence économique d'un petit budget | Conserver comme point de départ, pas comme recommandation. |
| [Google — Planificateur de mots clés](https://support.google.com/google-ads/answer/3022575?hl=fr) | Source primaire | Prévisions tenant compte notamment enchère, budget, saisonnalité, historique et zone | Estimations produit, pas ventes garanties | Exiger un export daté et la même portée pour tous les calculs. |
| [Google — budget recommandé](https://support.google.com/google-ads/answer/25426?hl=fr) | Source primaire | Vise le plus faible budget sans perte d'impressions | Ne connaît ni marge, ni qualification, ni vente | Conserver l'avertissement actuel. |
| [Google Ads Cost Tool](https://ads.google.com/intl/en_us/intl/en_us/home/cost-tool/) | États-Unis, source produit | Compare des dépenses de comptes selon secteur et zone | Outil observé en erreur lors de l'audit ; benchmarks de dépense, pas rentabilité | Mentionner comme repère secondaire si fonctionnel, jamais comme budget cible. |
| [Agence BPC — prix Google Ads PME](https://www.agencebpc.fr/blog/prix-google-ads-pme) | France | Distingue média, mise en place, gestion et autres coûts ; introduit valeur client | Nombreuses fourchettes, ratios et durées affirmés par une agence sans méthode publique suffisante | Reprendre les catégories et l'horizon, pas les nombres. |
| [Agence Google Ads — budget 2026](https://www.agence-googleads.fr/guides/budget-google-ads/) | France | Structure par secteur et calcul à rebours | Minimums, CPC, leads et délai de stabilisation non universels | Utiliser comme preuve de saturation, pas comme source factuelle. |
| [WordStream — Google Ads budget](https://www.wordstream.com/blog/google-ads-budget) | États-Unis | Types de budgets, coûts annexes, modèle par clics/leads et ressource | Benchmarks issus de son corpus et marché US ; vendeur de services | Ajouter les types de budget seulement depuis Google ; ne pas transposer les moyennes. |
| [Search Engine Land — santé CPA/ROAS](https://searchengineland.com/target-roas-cpa-health-check-482902) | États-Unis | Relie CPA de rentabilité, profit dans la période de récupération et part réinvestie | Méthode éditoriale, pas norme ni source produit | Ajouter horizon de récupération et part de marge consentie, avec données de l'entreprise. |
| [Qwestyon — budget small business](https://www.qwestyon.com/blog/how-much-should-a-small-business-spend-on-google-ads-uk) | Royaume-Uni | Calcul objectifs → clics → CPC, outil sans inscription, scénarios | Benchmarks UK et règles d'apprentissage non universels | Reprendre la comparaison de scénarios, refuser les seuils. |
| [Firewire — Google Ads costs](https://firewiredigital.com.au/learn/google-ads/how-much-do-google-ads-cost/) | Australie | Calcul à rebours, frais et fiscalité explicités | Moyennes AUD et tarifs d'agence, sans benchmark officiel australien | Ajouter la ligne fiscale et l'unité, pas convertir ses prix en euros. |

Les concurrents servent ici à identifier les questions couvertes. Ils ne
prouvent ni un minimum viable, ni un CPC français, ni une durée de test, ni un
taux de conversion, ni un budget Hagnéré Code.

## 5. Matrice de gain d'information

| Question décisive | Réponse courante en France | Apport international | Couverture actuelle | Manque | Réponse supérieure à produire |
| --- | --- | --- | --- | --- | --- |
| Existe-t-il un minimum ? | Fourchette mensuelle ou « ça dépend » | Fourchettes sectorielles | Excellente : aucun minimum universel | Aucun manque majeur | Conserver et expliquer ce qu'un montant permet d'examiner. |
| Quel est le coût complet ? | Média + agence | Mise en place, outils, création, temps | Très bonne liste | Méthode de valorisation du temps | Trois méthodes, une seule retenue par scénario. |
| Combien la marge finance-t-elle ? | CPA/ROAS cible | Profit et part réinvestie | Plafond conditionnel solide | Part de marge consentie agrégée dans « somme à conserver » | Montrer rentabilité, marge conservée et plafond séparément. |
| Quelle valeur client retenir ? | Première vente ou LTV commerciale | Période de récupération | Première vente implicite | Abonnement, renouvellement, churn, délai et coût de service | Champ « marge cumulée dans l'horizon choisi », pas LTV infinie. |
| Que dit la prévision Google ? | CPC et clics sectoriels | Outils/planners | Prévision locale datée | Cas d'un compte existant et saisonnalité | Keyword Planner pour nouveau test ; historique/Performance Planner si éligible, toujours bornés. |
| Le test peut-il apprendre ? | « Il faut X conversions » | Seuils arbitraires fréquents | Taux minimal affiché et limite verbale | Aucun scénario de résultat nul/faible/central | Montrer les décisions possibles avec 0, 1, 2 ventes et le coût de chacune. |
| La trésorerie peut-elle attendre ? | Rarement traité | Payback parfois traité | Pire cas et préfinancement en prose | Calendrier des sorties et encaissements | Ajouter délai de vente, délai de paiement et mois de récupération. |
| Quand arrêter ou réduire ? | Attendre 30/60/90 jours | Pacing et seuils | Quatre verdicts généraux | Aucun jalon calculé à la date du cycle | Définir jalon par preuve : mesure, demandes sérieuses, ventes arrivées à maturité. |
| Qui est intéressé au conseil ? | CTA d'agence | Outils captant un lead | Mauvais fit honnête | Intérêt commercial non nommé | Dire explicitement que Hagnéré Code vend la gestion Ads. |

## 6. Faits et fraîcheur

| Affirmation du guide | Verdict au 24/07/2026 | Source primaire | Périmètre et correction |
| --- | --- | --- | --- |
| Google n'impose aucune dépense minimale | Confirmée | [Google Ads](https://support.google.com/google-ads/answer/6319?hl=fr) | Minimum technique seulement ; conserver la nuance économique. |
| La marge sur coûts variables est le CA moins les charges variables | Confirmée | [Bpifrance Création](https://bpifrance-creation.fr/taux-marge-couts-variables) | Définition générale ; faire confirmer les postes propres à l'entreprise. |
| Le Planificateur estime clics et coûts selon plusieurs paramètres | Confirmée | [Google](https://support.google.com/google-ads/answer/3022575?hl=fr) | Prévision, pas garantie ; la page le dit correctement. |
| Le budget recommandé vise à ne pas perdre d'impressions | Confirmée | [Google](https://support.google.com/google-ads/answer/25426?hl=fr) | Ne prouve pas la rentabilité ; avertissement actuel exact. |
| Pour la plupart des campagnes, le jour peut atteindre 2× et le mois 30,4× le budget moyen | Confirmée avec exceptions | [Google — budgets](https://support.google.com/google-ads/answer/10486536?hl=fr) | Conserver « pour la plupart des campagnes » et revalider au changement de produit. |
| Un budget total existe pour certaines nouvelles campagnes datées, sans plafond journalier | Confirmée mais volatile | [Google — budgets totaux](https://support.google.com/google-ads/answer/10486938?hl=fr) | Vérifier éligibilité, durée et type dans le compte ; ne pas en faire une option universelle. |
| Les conversions récentes peuvent être retardées | Confirmée | [Google — délai avant conversion](https://support.google.com/google-ads/answer/6239119?hl=fr) | Le délai doit venir du cycle réel ; aucun délai universel. |
| Prospect qualifié et prospect converti peuvent être distingués | Confirmée dans le produit | [Google](https://support.google.com/google-ads/answer/11459091?hl=fr) | Les définitions et données restent celles de l'annonceur. |

### Contradictions et limites

- Le dossier affirme P1 à P4 validées et « PASS », mais P4 ne fige que le
  dossier de recherche et non le produit contrôlé.
- Le snapshot P2 de la page et du calculateur diffère du snapshot courant.
- Le texte recommande deux scénarios sans les fournir.
- La décision « compatible » dépend d'objectifs choisis ; elle ne constitue ni
  une prévision probabiliste, ni une validation de la demande.
- Le registre affiche une date de modification du 22 juillet. Elle ne doit être
  changée qu'après intégration réelle et revalidation du nouveau snapshot.

### Faits à retirer plutôt qu'à affaiblir

- Tout minimum de 500 €, 800 €, 1 000 € ou autre montant.
- Tout CPC, CPL, taux de conversion ou délai sectoriel non issu d'un export
  daté et périmétré pour l'entreprise.
- Toute exigence universelle de 30 ou 50 conversions.
- Toute « phase d'apprentissage » utilisée pour interdire un arrêt face à une
  mesure cassée, une page défaillante ou une perte devenue inacceptable.
- Toute LTV en chiffre d'affaires non corrigée des coûts, du churn, du délai et
  du risque de non-renouvellement.
- Toute phrase transformant « financièrement compatible » en « rentable ».

## 7. Scénarios et calculs à construire

### 7.1 Sensibilité du cas déjà visible

Garder exactement la même offre, la même zone, 300 clics prévus, 1 800 € de
média, 900 € hors média, 1 500 € de marge par vente, huit demandes sérieuses,
300 € à conserver et 3 000 € de perte maximale. Faire varier une seule
hypothèse : la part des demandes qui signent.

| Variable | Prudent | Central | Favorable | Nature |
| --- | ---: | ---: | ---: | --- |
| Part qui signe | 12,5 % | 25 % | 37,5 % | Hypothèses, pas benchmarks |
| Ventes moyennes conditionnelles | 1 | 2 | 3 | 8 demandes × taux |
| Marge conditionnelle | 1 500 € | 3 000 € | 4 500 € | Ventes × 1 500 € |
| Plafond média après 900 € et 300 € | 300 € | 1 800 € | 3 300 € | Marge − coûts hors média − somme conservée |
| Dépense prévue | 1 800 € | 1 800 € | 1 800 € | Même export fictif |
| Verdict économique | dépasse de 1 500 € | à la limite | marge de 1 500 € | Conditionnel |
| Pire cas sans vente | 2 700 € | 2 700 € | 2 700 € | Toujours sous la limite de 3 000 € |

Le cas central ne « prédit » pas deux ventes. Il montre que le budget consomme
exactement le plafond si huit demandes sont obtenues et qu'une sur quatre
signe. Une seule vente fait apparaître une perte économique illustrative de
1 200 € après le coût complet ; trois ventes laissent 1 800 € avant la somme
que l'entreprise voulait conserver. Ces opérations doivent être recalculées
dans le composant et ses tests.

### 7.2 Horizon de marge et délai de récupération

Pour une vente unique, la marge par vente peut suffire. Pour un abonnement ou
des achats récurrents, demander :

```text
Horizon retenu : 1er achat / 6 mois / 12 mois / autre période justifiée
Marge encaissée dans cet horizon
- onboarding, support et coûts variables futurs
- remboursements, churn ou probabilité de renouvellement documentés
= marge client utilisable dans le calcul

Délai de récupération
= date à laquelle la marge cumulée couvre média + coûts hors média
```

Ne jamais utiliser une valeur client « à vie » infinie. Le budget d'un premier
test doit rester compatible avec le délai d'encaissement et le financement de
l'entreprise.

### 7.3 Ce que le test peut réellement apprendre

Le taux `demandes visées / clics prévus` est un **seuil nécessaire**, pas une
probabilité. Ajouter trois sorties observables :

| Résultat arrivé à maturité | Ce que l'on peut conclure | Ce que l'on ne peut pas conclure | Décision |
| --- | --- | --- | --- |
| 0 demande sérieuse | Le scénario central n'est pas observé | La cause : ciblage, offre, page, mesure ou hasard | Vérifier la chaîne avant de racheter le même test. |
| 1 à 7 demandes | Le seuil de huit n'est pas atteint | La rentabilité future sans vente et attribution | Recalculer le plafond avec le résultat réel. |
| 8 demandes ou plus | Le volume cible est observé | Le taux de signature avant maturité commerciale | Attendre les ventes arrivées à maturité, puis décider. |

Le guide doit refuser un quota statistique universel. Il doit toutefois dire
quelle question un montant trop faible laisse sans réponse.

## 8. Comparaison et position professionnelle

```text
Options réellement comparables : lancer le test prévu ; réduire offre/zone et
  refaire la prévision ; préparer page/mesure/traitement ; reporter ; pour un
  compte actif, utiliser l'historique et un plan adapté plutôt qu'un test neuf.
Périmètre commun : même offre, même zone, même période, même base HT/TTC, même
  définition de demande et même horizon de marge.
Option la moins chère : préparer en interne si les données manquent ; un petit
  budget incohérent n'est pas automatiquement moins coûteux.
Option la moins risquée : report lorsque le pire cas n'est pas finançable ;
  test réduit lorsque la question reste utile et mesurable.
Option qui demande le moins de temps interne : aucune option ne supprime la
  qualification, le suivi des ventes et la validation de la marge côté client.
Position Hagnéré Code pour le cas fréquent : ne pas choisir le budget depuis
  une moyenne sectorielle ; partir d'un export local, de la marge sur un
  horizon écrit, du délai de vente et d'une perte maximale décidée avant
  lancement.
Faits qui la fondent : Google ne fixe aucun minimum et ses propres prévisions
  restent estimatives ; l'économie et le risque appartiennent à l'entreprise.
Cas où une dépense plus élevée gagne : le pire cas est finançable, la demande
  existe, la page et la mesure fonctionnent, et le volume supplémentaire permet
  une décision que le petit test ne pourrait pas produire.
Signal de révision : CPC prévu ou réel, taux clic→demande, qualification,
  signature, marge, churn, délai d'encaissement ou saison changent.
Ce que nous déconseillons même si nous pourrions le vendre : lancer pour
  « nourrir l'algorithme », augmenter parce que Google recommande un budget,
  ou prolonger jusqu'à trois mois lorsque les prérequis sont déjà cassés.
```

Hagnéré Code vend la création et la gestion de campagnes Google Ads. Cette
information doit être visible avant le CTA. La page doit préciser que son
intérêt commercial ne change pas le droit du lecteur à conclure qu'aucune
campagne, qu'une préparation interne ou qu'un test plus petit est préférable.

## 9. Objections et cas limites

| Objection loyale | Réponse défendable | Incertitude | Conséquence |
| --- | --- | --- | --- |
| « Google accepte 5 € par jour, donc le test est valide. » | Aucun minimum technique n'est imposé. | Nombre de clics et question réellement testable. | Refaire la prévision ; ne pas confondre acceptation de la plateforme et valeur du test. |
| « L'agence dit qu'il faut au moins 1 000 €. » | Aucun seuil universel n'est prouvé. | Offre, zone, CPC, marge et effort inclus. | Demander le calcul, les inclus/exclus et la condition d'arrêt. |
| « Mon client reste trois ans. » | Une récurrence peut augmenter le plafond. | Churn, coût de service, encaissement et risque. | Utiliser une marge bornée par une période de récupération. |
| « Le scénario compatible garantit deux ventes. » | Non : deux est une espérance conditionnelle issue d'un taux saisi. | Variance et délai réel. | Afficher explicitement 0/1/2/3 ventes et recalculer après maturité. |
| « Je peux accepter de tout perdre. » | Le pire cas peut être financé. | Ce que le test apprend et coût d'opportunité. | Finançable ne signifie pas pertinent. |
| « Je suis limité par le budget. » | Cela peut signifier des impressions perdues. | Valeur économique des impressions/clics additionnels. | Ne pas augmenter sans leads, ventes, marge et capacité de réponse. |
| « Je n'ai ni marge ni CRM. » | Le calcul économique n'est pas possible. | Données comptables et commerciales. | Préparer ou reporter ; ne pas substituer une moyenne web. |
| « Le test n'a rien vendu en dix jours. » | Le délai de vente peut être plus long. | Mesure, qualification et maturité. | Examiner les preuves déjà disponibles ; attendre seulement les ventes non matures. |

## 10. Défauts par sévérité

### P0 — aucun constaté

Les formules visibles ont été refaites et l'exemple central est arithmétiquement
cohérent. Aucune promesse de vente, moyenne sectorielle ou minimum arbitraire
n'est publié dans la page observée.

### P1 — à fermer avant une nouvelle validation de référence

| ID | Défaut | Risque lecteur | Correction exigée |
| --- | --- | --- | --- |
| P1-01 | Un seul scénario malgré la promesse prudent/central | Une hypothèse optimiste peut autoriser le budget | Ajouter la sensibilité 12,5/25/37,5 % et les bascules calculées. |
| P1-02 | Horizon économique limité à une « marge par vente » ambiguë | Faux rejet d'un abonnement rentable ou faux accord fondé sur une LTV irréaliste | Ajouter horizon de marge, coûts futurs, churn et délai de récupération. |
| P1-03 | Compatibilité financière confondable avec qualité de preuve | Un petit test peut être finançable sans pouvoir répondre à la question | Ajouter les résultats 0/1–7/8+ et ce qu'ils permettent de conclure. |
| P1-04 | Conflit d'intérêt commercial non explicite | Le conseil peut paraître neutre alors que l'entreprise vend la gestion Ads | Déclarer l'intérêt avant CTA et conserver les contre-cas sans prestation. |
| P1-05 | Anciennes P3/P4 non défendables sur le snapshot actuel | Le registre peut annoncer une validation que les artefacts ne prouvent pas | Refaire les quatre passes, manifeste complet, nouveau relecteur et QA navigateur après correction. |

### P2 — améliorations utiles après les P1

| ID | Amélioration |
| --- | --- |
| P2-01 | Séparer dans le calculateur marge à conserver, charges fixes, fiscalité et réserve, ou expliquer pourquoi elles restent regroupées. |
| P2-02 | Ajouter une méthode de valorisation du temps interne et interdire le mélange coût chargé/prix de vente/coût d'opportunité. |
| P2-03 | Distinguer nouveau test (Keyword Planner) et compte actif (historique et plan éligible), sans transformer une prévision produit en preuve. |
| P2-04 | Ajouter délai de vente, délai d'encaissement et mois de récupération dans la fiche de décision. |
| P2-05 | Permettre l'export ou la copie locale des hypothèses, date, unité et verdict sans collecte. |
| P2-06 | Revalider les budgets totaux, limites et textes traduits par IA de Google au jour de la modification publique. |
| P2-07 | Vérifier le temps de lecture, les états du calculateur, la FAQ, l'OG et le rendu aux largeurs obligatoires sur le snapshot final. |
| P2-08 | Prouver séparément production, robots, sitemap et indexation ; aucun ancien rapport local ne suffit. |

## 11. Plan de réécriture localisable

| Ordre | Zone | Travail | Décision produite |
| ---: | --- | --- | --- |
| 1 | `page.tsx:227-255` | Ajouter horizon de marge et phrase « finançable ne signifie pas probant » | Comprendre la double porte économie/preuve. |
| 2 | `:261-300` | Donner une méthode de valorisation du temps et les inclus/exclus | Calculer le vrai pire cas. |
| 3 | `:302-356` | Renommer la marge par vente en marge client dans l'horizon choisi | Comparer vente unique, abonnement ou récurrence sans LTV infinie. |
| 4 | `:358-390` | Distinguer Keyword Planner d'un compte actif et dater l'export | Choisir la bonne prévision. |
| 5 | calculateur | Ajouter trois scénarios ou une vue de sensibilité et expliciter l'espérance conditionnelle | Voir la variable de bascule. |
| 6 | après calculateur | Ajouter ce que 0, 1–7 ou 8+ demandes permet de conclure | Savoir si le test répond réellement. |
| 7 | `:401-454` | Refaire l'exemple prudent/central/favorable et les contrôles inverses | Vérifier chaque formule. |
| 8 | `:456-523` | Ajouter un jalon lié au cycle de vente et au délai d'encaissement | Ne pas arrêter trop tôt ni prolonger à l'aveugle. |
| 9 | `:525-557` | Déclarer l'intérêt commercial Hagnéré Code | Choisir contact, autonomie ou report en connaissance de cause. |
| 10 | dossier, registre et manifestes | Reprendre P1–P4 sur le snapshot complet, puis seulement actualiser les dates | Statut documentaire défendable. |

### Contrat des 150 premiers mots

Conserver l'hésitation 500/1 000/2 000 € et la réponse « aucun montant n'est
juste par défaut ». Ajouter immédiatement :

> Un budget peut être supportable sans produire assez d'information pour
> décider, et un test rentable sur le papier peut devenir trompeur si vous
> comptez trois ans de revenus alors que votre trésorerie doit payer Google
> aujourd'hui. Nous allons donc vérifier quatre choses sur la même période :
> dépense prévue, marge réellement encaissable, pire cas de trésorerie et
> question que le nombre de clics permettra de trancher.

### À conserver

- les trois montants et le calcul local sans collecte ;
- le refus des minimums et benchmarks sectoriels ;
- l'exemple fictif clairement étiqueté ;
- les coûts hors média et le pire cas sans vente ;
- la nuance « limitée par le budget » ;
- les quatre décisions et l'option de report.

### À ne pas ajouter

- une longue formation générale à Google Ads ;
- des minimums français ou étrangers ;
- un quota de conversions universel ;
- une simulation probabiliste sophistiquée dont les hypothèses seraient
  illisibles pour un dirigeant ;
- une ressource téléchargeable qui ne ferait que recopier la page.

## 12. Contre-audit exigé après correction

| Contrôle | Revalidation indépendante |
| --- | --- |
| Trois scénarios | Refaire toutes les opérations et changer une seule variable à la fois. |
| Horizon de marge | Vérifier que chiffre d'affaires, marge, churn, coûts futurs et délai ne sont jamais mélangés. |
| Qualité de preuve | Tester 0, 1, 2 et 3 ventes et vérifier qu'aucun verdict ne devient une prévision. |
| Moteur | Rejouer valeurs nulles, négatives, infinies, décimales, volume impossible et doubles dépassements. |
| Sources | Rouvrir chaque page Google/Bpifrance, enregistrer date, portée, langue et limite. |
| Conversion | Faire lire conflit d'intérêt, mauvais fit et CTA par un regard qui n'a pas écrit la page. |
| Produit | Tester clavier, annonces accessibles, responsive, sombre/clair, FAQ, liens et image sociale. |
| Technique | Formatter, lint, TypeScript, tests ciblés et globaux, build, HTML/JSON-LD et manifeste complet. |

La cible est au moins 90/100, aucun axe sous 8 et les six axes critiques à
9 ou 10. Elle n'est pas présumée atteinte par l'exécution du plan.

## 13. Preuves techniques et visuelles

```text
Calculs refaits :
- exemple actuel : 8 × 25 % = 2 ventes conditionnelles ;
  2 × 1 500 = 3 000 € ; 3 000 − 900 − 300 = 1 800 € ;
  3 000 − 900 = 2 100 € ; 1 800 / 300 = 6 € ;
  8 / 300 = 2,666... % ; coût complet = 2 700 €.
- sensibilité : 12,5 % → plafond média 300 € ;
  25 % → 1 800 € ; 37,5 % → 3 300 €.
Sources rouvertes :
- Google Ads minimum, Keyword Planner et budget recommandé dans le navigateur ;
- les cinq autres URLs Google ont répondu HTTP 200 et leur titre a été contrôlé ;
- Bpifrance et corpus concurrentiel FR/US/UK/AU consultés le 24/07/2026.
Anciens manifestes :
- P2 incomplet pour l'état courant ; P4 limité au dossier de recherche.
Tests actuels :
- non rejoués dans ce rapport documentaire ; les anciens résultats ne sont pas
  transférés au snapshot final futur.
Rendu 320 / 390 / 768 / 1024 / 1440 :
- non exécuté dans ce rapport ; obligatoire après correction.
Image sociale :
- source et hash contrôlés, PNG final non rendu ni inspecté ici.
Statut maximal prouvé :
- audit éditorial, économique, concurrentiel et documentaire du snapshot listé.
Réserve :
- aucune preuve actuelle de build, déploiement, indexation, classement ou
  conversion de production.
```

