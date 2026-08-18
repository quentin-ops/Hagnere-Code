# Refonte R1 — Valider une idée SaaS avant de développer

Date de travail : 28 juillet 2026  
Statut : candidat R2 corrigé, en attente de relecture indépendante finale  
Route : `/guides/valider-idee-saas-avant-developper`

## 1. Périmètre gelé et audits à froid

Le snapshot initial couvre la page, l’image OG, la recherche historique,
l’audit antérieur et le registre. Son manifeste est :

`docs/research/manifests/valider-idee-saas-avant-developper-r1-gel-2026-07-28.sha256`

Les trois audits indépendants ont vérifié 5 fichiers sur 5 sans modification :

| Audit                           |  Score | Verdict           |  P0 |  P1 |  P2 |
| ------------------------------- | -----: | ----------------- | --: | --: | --: |
| Fond, droit et économie         | 76/100 | NO-GO premium     |   0 |  10 |   6 |
| Technique, SEO et produit       | 74/100 | NO-GO publication |   0 |   3 |   2 |
| Pédagogie et expérience lecteur | 76/100 | NO-GO premium     |   0 |   6 |   3 |

Forces à préserver :

- réponse immédiate et ton non technique ;
- questions d’entretien sur des événements passés ;
- distinction utilisateur, responsable, payeur et veto ;
- comparaison de tests qui dit aussi ce qu’ils ne prouvent pas ;
- prototype déclaré comme tel ;
- arrêt et achat d’un outil existant admis comme bonnes décisions ;
- prudence juridique sur la CNIL et l’e-Soleau.

Union des écarts bloquants :

1. le dossier historique promet cinq risques, une échelle de preuves, un cas
   chiffré et un journal copiable que la page ne livre pas ;
2. le plan « 14 jours » et « 5 à 10 conversations » peut être pris pour une
   recette ou un seuil de validation ;
3. ICP, déclencheur, JTBD, non-cible, alternatives et coût de changement ne
   sont pas opérationnalisés ;
4. l’éligibilité des entretiens, le recrutement hors réseau, le codage des
   faits, les contradictions et la saturation ne sont pas documentés ;
5. l’échelle de preuve s’arrête avant l’activation, l’usage répété, la
   rétention et le renouvellement ;
6. LOI, précommande, concierge, fake door et pilote payé ne disposent pas d’un
   protocole falsifiable et de limites explicites ;
7. le comité d’achat B2B est incomplet ;
8. CAC, coût variable, marge, payback, support, onboarding et scénarios
   12/36/60 mois manquent ;
9. la sécurité et les obligations contractuelles d’un pilote sont trop brèves ;
10. la sidebar commerciale et le CTA arrivent avant la décision autonome.

## 2. Ce que le benchmark mondial apporte

### Références de méthode

| Source primaire ou originale                                                                                                                                                  | Apport retenu                                                                                                                                                | Limite de transposition                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| [GOV.UK — Learning about users and their needs](https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs)                                                 | Commencer par les utilisateurs probables, leurs pratiques actuelles et leurs problèmes ; traiter les opinions non issues d’utilisateurs comme des hypothèses | Cadre de service public, pas preuve de demande commerciale             |
| [GOV.UK — Discovery phase](https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works)                                                                    | Comprendre le problème, les contraintes et les alternatives avant l’engagement ; l’arrêt est une issue valide                                                | Le cycle d’achat SaaS B2B doit être ajouté                             |
| [GOV.UK — Making prototypes](https://www.gov.uk/service-manual/design/making-prototypes)                                                                                      | Choisir le prototype adapté à la question, tester avant de construire, écarter ce qui échoue ; ne pas confondre code de prototype et production              | Un prototype ne prouve ni paiement ni rétention                        |
| [Digital.gov.au — Know your user](https://www.digital.gov.au/policy/digital-experience/digital-service-standard/criterion-2)                                                  | Croiser au moins deux méthodes lorsque cela aide à confronter déclarations et comportements ; documenter parcours et douleur                                 | Recommandation publique australienne, sans seuil commercial universel  |
| [Digital.gov.au — Alpha: testing hypotheses](https://www.digital.gov.au/policy/digital-experience/toolkit/service-design-and-delivery-process/alpha-stage-testing-hypotheses) | Tester des hypothèses et besoins, pas ce que les personnes « aiment » ; inclure accessibilité et cas réels                                                   | Les durées d’alpha citées par l’administration ne sont pas transposées |
| [Canada — Iterate and improve frequently](https://www.canada.ca/en/government/system/digital-government/government-canada-digital-standards/iterate-improve-frequently.html)  | Baseline, KPI, prototypes, tests utilisateurs, documentation des changements et pivot si le besoin ou l’économie ne tient pas                                | Cadre de service public ; le guide ajoute l’acheteur et le canal       |
| [Canada — Research and prototyping](https://design.canada.ca/continuous-improvement/research.html)                                                                            | Le prototypage réduit le risque, puis une comparaison avec la situation de départ vérifie le résultat                                                        | Ne mesure pas à lui seul la viabilité SaaS                             |
| [DigitalService Bund — Tech4Germany](https://digitalservice.bund.de/fellowships/tech4germany/fuer-fellows)                                                                    | Recherche utilisateur, analyse de processus et prototypes itératifs testant des hypothèses                                                                   | Exemple allemand de méthode publique, pas benchmark financier          |
| [Strategyzer — Test Card](https://www.strategyzer.com/library/validate-your-ideas-with-the-test-card)                                                                         | Écrire hypothèse, expérience, métrique et seuil avant le résultat                                                                                            | Cadre méthodologique, pas norme                                        |
| [Strategyzer — Strength of evidence](https://www.strategyzer.com/library/business-testing-is-your-hypothesis-really-validated)                                                | Distinguer déclarations, comportements et investissement ; renforcer progressivement la preuve                                                               | La force dépend du contexte et de l’intégrité du test                  |
| [Steve Blank — Customer hypotheses](https://steveblank.com/2011/04/04/the-leanlaunch-pad-at-stanford-%E2%80%93-class-4-customer-hypotheses/)                                  | Tester hors du bureau les hypothèses client, marché, produit et canal ; accepter le pivot                                                                    | Exemple pédagogique, pas quota d’entretiens                            |
| [Y Combinator — Essential startup advice](https://www.ycombinator.com/blog/ycs-essential-startup-advice/)                                                                     | Parler aux utilisateurs, livrer une réponse imparfaite mais réelle, itérer et ne pas accélérer avant l’adéquation                                            | Conseil d’accélérateur, pas étude contrôlée                            |
| [Y Combinator — Interview guide](https://www.ycombinator.com/interviews)                                                                                                      | Après lancement : connaître acquisition, usage, rétention, objections, alternatives et unit economics                                                        | Questions d’investisseur, non critères universels de validation        |

### Benchmark éditorial international

Les pages anglaises, françaises et allemandes les plus visibles reprennent
souvent quatre axes utiles : entretiens, landing page, prototype/concierge et
prévente. Elles deviennent fragiles lorsqu’elles transforment des nombres
locaux en standards mondiaux : nombre fixe d’entretiens, budget publicitaire,
taux de clic, dépôts ou précommandes. La refonte conserve la séquence, mais
refuse le nombre magique.

Différenciation recherchée :

- un verrou faible bloque la dépense suivante ; aucun score global ne le masque ;
- une preuve est qualifiée par son origine, son éligibilité et ce qu’elle ne
  démontre pas ;
- le guide continue après le premier paiement jusqu’à l’usage répété ;
- le cas fictif contient une contradiction et un resserrement de cible ;
- l’économie montre les formules et les exclusions plutôt qu’une moyenne de
  marché inventée ;
- le lecteur repart avec un journal autonome, utilisable sans contacter
  l’agence.

## 3. Sources juridiques et sécurité

| Sujet                    | Source                                                                                                                             | Conséquence éditoriale                                                                                                               |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Minimisation             | [CNIL — Minimiser les données collectées](https://www.cnil.fr/fr/minimiser-les-donnees-collectees)                                 | Ne demander que les données adéquates, pertinentes et nécessaires ; fixer une durée ; éviter les données sensibles dans les journaux |
| Information              | [CNIL — Information et transparence](https://cnil.fr/fr/conformite-rgpd-information-des-personnes-et-transparence)                 | Informer au moment de la collecte directe et, pour une collecte indirecte, selon les règles applicables                              |
| Prospection              | [CNIL — Communications électroniques](https://www.cnil.fr/fr/communication-electronique-quelles-regles)                            | Ne pas résumer B2B et B2C à une règle unique ; documenter la source et offrir une opposition simple lorsqu’elle s’applique           |
| Traceurs                 | [CNIL — Cookies et autres traceurs](https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles)                                      | Un test provisoire ne dispense pas de qualifier les traceurs et leur base                                                            |
| Preuve de création       | [INPI — Préparer une e-Soleau](https://www.inpi.fr/realiser-demarches/propriete-intellectuelle/se-preparer-au-depot-dune-e-soleau) | L’e-Soleau constitue une preuve datée ; elle ne crée pas un monopole sur une idée                                                    |
| Hygiène                  | [ANSSI — Guide d’hygiène informatique](https://messervices.cyber.gouv.fr/guides/guide-dhygiene-informatique)                       | Identifier accès, mises à jour, sauvegardes, responsabilités et reprise avant usage réel                                             |
| Vérification applicative | [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/)                                            | Employer un référentiel de contrôles adapté au risque, pas la phrase « le MVP sera sécurisé »                                        |

Une campagne internationale doit être requalifiée juridiquement pays par pays.
Les références de départ sont l’[ICO britannique](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/business-to-business-marketing/),
l’[ACMA australienne](https://www.acma.gov.au/avoid-sending-spam) et le
[CRTC canadien](https://crtc.gc.ca/eng/com500/guide.htm). Elles ne sont pas
résumées en une règle mondiale dans la page.

À ne pas publier :

- « 42 % des startups échouent faute de besoin », « 90 % échouent » ou toute
  statistique sans corpus, date, dénominateur et méthode ;
- « 10, 15 ou 25 entretiens valident une idée » ;
- un taux de clic, un coût publicitaire ou un nombre de dépôts universel ;
- « une LOI est une vente », « un acompte prouve le marché » ou « un pilote
  prouve la rétention » ;
- « e-Soleau protège une idée » ;
- « conforme RGPD » ou « sécurisé » sans périmètre et contrôle.

## 4. Architecture de décision

Huit verrous sont suivis séparément :

1. problème et déclencheur ;
2. segment éligible et non-cible ;
3. alternatives et coût du changement ;
4. acheteur, sponsor et veto ;
5. prix et engagement réel ;
6. accès répétable à la cible ;
7. faisabilité, sécurité et économie ;
8. premier résultat, usage répété et rétention.

Niveaux de preuve :

1. contredit par le test ;
2. inconnu ;
3. hypothèse écrite ;
4. fait ou comportement observé ;
5. engagement, usage ou investissement démontré.

Décisions non compensatoires :

- STOP si test trompeur, donnée non autorisée, promesse impossible ou absence
  de responsable/mode de retour ;
- PIVOT ou ARRÊT si une hypothèse est contredite ;
- DISCOVERY si problème, segment ou alternative ne sont pas observés ;
- TESTER L’OFFRE si acheteur, prix, canal ou faisabilité manquent ;
- PILOTE BORNÉ si l’usage répété manque ;
- CANDIDAT À UN MVP LIMITÉ seulement si tous les minimums sont atteints.

## 5. Exemple fictif reproductible

`ConformiSuivi` est entièrement fictif. Aucun chiffre n’est un benchmark ou un
cas client.

Coût de la phase de décision :

```text
Temps fondateur : 52 h × 60 €/h = 3 120 €
Indemnités d’entretien : 8 × 50 € = 400 €
Test d’accès à la cible : plafond = 300 €
Revue de faisabilité : 4 h × 120 €/h = 480 €
Dépenses externes = 400 + 300 + 480 = 1 180 €
Coût valorisé = 3 120 + 1 180 = 4 300 €
```

Seuils fictifs écrits avant le test :

```text
≥ 5 incidents récents documentés sur 8 entretiens éligibles
≥ 3 introductions vers l’acheteur
≥ 2 pilotes manuels acceptés
≥ 1 engagement payé sur une offre précise
0 impossibilité technique, juridique ou économique critique
```

Résultat fictif : les seuils d’avant-pilote sont atteints, mais l’usage répété
reste une hypothèse. La décision autorisée est donc un pilote manuel borné de
quatre semaines, pas le développement du produit complet.

## 6. Économie unitaire fictive

Formules :

```text
Contribution mensuelle = prix mensuel - coût variable mensuel
Taux de contribution = contribution mensuelle / prix mensuel
Délai de récupération = acquisition + accompagnement initial / contribution mensuelle
Contribution cumulée à N mois = N × contribution mensuelle - acquisition - accompagnement initial
```

| Scénario | Prix/mois | Variable/mois | Acquisition + accompagnement | Contribution/mois |    Taux | Récupération | Cumul 12 mois | Cumul 36 mois | Cumul 60 mois |
| -------- | --------: | ------------: | ---------------------------: | ----------------: | ------: | -----------: | ------------: | ------------: | ------------: |
| Prudent  |     450 € |         210 € |                      4 800 € |             240 € | 53,33 % |      20 mois |      -1 920 € |       3 840 € |       9 600 € |
| Central  |     650 € |         140 € |                      3 600 € |             510 € | 78,46 % |    7,06 mois |       2 520 € |      14 760 € |      27 000 € |
| Robuste  |     900 € |         170 € |                      3 200 € |             730 € | 81,11 % |    4,38 mois |       5 560 € |      23 080 € |      40 600 € |

Hypothèses et exclusions : un compte équivalent actif pendant toute la période,
aucune perte de client, aucune remise, encaissement immédiat, coûts variables
déjà complets. Sont exclus le développement initial, les coûts fixes, la TVA,
l’impôt, le coût du capital et les retards de paiement. Ces scénarios servent à
montrer la sensibilité, pas à prédire un marché.

## 7. Livrables et contrôle

Livrables :

- page premium alignée à gauche ;
- journal interactif local sans envoi de données ;
- exemple fictif préchargé et dossier réellement vierge ;
- copie texte et fallback toujours visible ;
- `public/ressources/journal-validation-saas.csv` avec exemple et lignes
  vierges ;
- moteur de décision sans compensation ni score ;
- calculs unitaires testés à 12/36/60 mois ;
- CTA unique après le cas « ne rien développer », contextualisé dans le tunnel.

Contrôles prévus :

- tests unitaires du moteur, des calculs et de l’interface ;
- test qualité propre au slug ;
- metadata, robots, Article, BreadcrumbList et FAQ visibles sans balisage
  `FAQPage`, désormais sans effet dans Google Search ;
- ancres et liens ;
- readtime mesuré sur HTML servi ;
- ESLint, TypeScript, `git diff --check` et build ;
- vérification HTTP page, OG, CSV et tunnel ;
- BAT responsive réel seulement si le navigateur intégré devient disponible.

Tant que ces contrôles et le contre-audit indépendant ne convergent pas, le
registre doit utiliser `editorialStatus: "ready-for-human-review"`.

## 8. Union des contre-audits R1 et corrections R2

Les trois relectures indépendantes du même manifeste 14/14 ont rendu :

| Audit                           |  Score | Verdict ciblé |  P0 |  P1 |  P2 |
| ------------------------------- | -----: | ------------- | --: | --: | --: |
| Fond, droit et économie         | 92/100 | NO-GO         |   0 |   2 |   3 |
| Technique, SEO et produit       | 90/100 | NO-GO         |   0 |   1 |   1 |
| Pédagogie et expérience lecteur | 90/100 | NO-GO         |   0 |   2 |   4 |

Corrections intégrées dans le candidat R2 :

1. le CSV ne double plus le poste de 300 € : ses huit lignes totalisent
   1 180 € et 52 h, soit 4 300 € à 60 €/h ;
2. les champs décrivant le test sont obligatoires avant un verdict, tandis
   qu’un STOP ou une contradiction reste prioritaire sur un budget incomplet ;
3. les bornes numériques, l’échec du presse-papiers et le rechargement de
   l’exemple disposent de tests dédiés ;
4. la France, le Royaume-Uni, l’Australie, le Canada et les États-Unis renvoient
   directement vers la CNIL, l’ICO, l’ACMA, le CRTC et la FTC ; la DGCCRF et
   l’article 28 du RGPD complètent le pilote ;
5. le vocabulaire distingue taux de contribution, délai de récupération et
   contribution cumulée, sans appeler ces montants « marge brute » ou « net » ;
6. les mots de produit non expliqués ont été remplacés par du français courant,
   et chaque tableau éditorial tient désormais sur trois colonnes au maximum ;
7. le balisage `FAQPage` a été retiré conformément à la
   [mise à jour Google Search de juin 2026](https://developers.google.com/search/updates),
   tandis que les huit réponses restent visibles ;
8. l’OWASP ASVS est daté en version stable 5.0.0 et le guide ANSSI de 42 mesures
   est présenté comme une base non exhaustive publiée en 2017.

Le BAT graphique réel reste explicitement non exécuté tant que le navigateur
intégré est indisponible. Le candidat demeure `ready-for-human-review` et
`noindex`; aucune publication ou mise en production n’est déduite de ces
corrections.
