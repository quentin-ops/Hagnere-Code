# Dossier P1–P4 — calculer le ROI d’une application métier

Date de recherche : 31 juillet 2026

Passe courante : contrôle qualité transversal

Responsable P1 : agent dédié `/root/g2_p1_creation`

Responsable P2 : agent dédié `/root/roi_p2_verification`

Responsable P3 : agent dédié `/root/roi_p3_polish`

Responsable P4 : agent dédié `/root/roi_p4_anti_ia`

État : G4 validée — `GO_CONTROLE_QUALITE`, sans autorisation de publication
ni d’indexation

Ce dossier remplace le contenu historique du même nom. Les validations,
captures et scores de l’ancien article ne sont pas transférés à la nouvelle
version. La passe 1 doit être contrôlée par l’orchestrateur avant toute passe 2.

## Journal des quatre passes

| Passe | État | Responsable | Gate |
|---|---|---|---|
| P1 — création | Terminée et gelée | `/root/g2_p1_creation` | G1 : `GO_PASSE_2` |
| P2 — enrichissement et vérification | Terminée et gelée | `/root/roi_p2_verification` | G2 : `GO_PASSE_3` |
| P3 — polish rédactionnel | Terminée et gelée | `/root/roi_p3_polish` | G3 : `GO_PASSE_4` |
| P4 — antipasse IA | Terminée et gelée | `/root/roi_p4_anti_ia` | G4 : `GO_CONTROLE_QUALITE` |

## A. Contrat de réponse

```text
Slug : calculer-roi-application-metier
Requête principale : calculer ROI application métier
Moment du parcours : décider
Lecteur : dirigeant, DAF, responsable métier ou opérations d’une TPE/PME
Situation : un devis ou une idée d’outil existe, mais les gains ne sont pas démontrés
Décision : investir, simplifier, choisir un SaaS, tester ou reporter
Action autonome : constituer un dossier économique sur un horizon commun et trois scénarios
CTA : OUTILS — faire challenger les hypothèses et les inconnues, sans promesse de ROI
Hors périmètre : conseil financier individualisé, fiscalité, aides, VAN/TRI détaillés,
prix moyen d’un logiciel, recommandation de technologie
```

Phrase du lecteur : « Mon tableur annonce un ROI positif, mais est-ce que cet
argent existera vraiment ? »

Réponse attendue en une phrase : **un projet est défendable seulement si son
coût total, son calendrier, son adoption et la destination du temps gagné sont
documentés ; sinon le calcul s’arrête au lieu de remplacer une inconnue par
zéro.**

Projet des 150 premiers mots :

1. partir d’une décision réelle, pas d’une définition ;
2. expliquer que le ROI simple est un ratio, pas une preuve de trésorerie ;
3. annoncer les quatre réponses possibles, y compris ne pas développer ;
4. donner les cinq informations sans lesquelles le calcul doit s’arrêter.

Termes à définir au premier emploi :

- retour sur investissement (ROI) ;
- coût total de possession (TCO) ;
- capacité réaffectée ;
- coût de trésorerie et coût économique ;
- délai de retour durable ;
- rampe de réalisation des gains ;
- double exploitation.

Mots à éviter :

- « ROI moyen », « retour habituel », « rentabilisé en quelques mois » ;
- « 50 à 80 % automatisable » ou tout taux de marché non démontré ;
- « garantie », « meilleur choix », « le sur-mesure est plus rentable » ;
- « économie » lorsque seule une capacité théorique est calculée.

## B. Corpus interne et frontière de cannibalisation

| Page | Décision couverte | Frontière du nouveau guide | Maillage |
|---|---|---|---|
| `/guides/automatiser-processus-metier` | choisir le premier processus à simplifier ou automatiser | le processus est déjà candidat ; on construit et contredit son dossier économique | un lien amont vers ce guide publié |
| `/services/outils-internes-sur-mesure` | présenter l’offre transactionnelle | le guide peut conclure que le sur-mesure perd | CTA seulement après le stress test |
| `/demarrer-un-projet` | décrire un besoin | prochaine action si les hypothèses sont documentées | CTA contextualisé |
| `/guides` | parcourir le corpus publié | pas une preuve économique | lien de navigation, pas une liste automatique |

Les anciennes routes `prix-logiciel-sur-mesure`,
`erp-ou-logiciel-sur-mesure`, `cahier-des-charges-application-metier` et
`cout-maintenance-application-metier` restent redirigées. Elles ne sont pas
remises en ligne et ne doivent recevoir aucun lien.

Justification d’une URL distincte : `automatiser-processus-metier` choisit un
travail à examiner ; `calculer-roi-application-metier` décide si l’une des
réponses possibles crée assez de valeur démontrable pour justifier son coût.

## C. Demande, SERP et angle différenciant

Recherches effectuées le 31 juillet 2026 :

- `calculer ROI application métier logiciel sur mesure France` ;
- `ROI logiciel métier calcul rentabilité application entreprise` ;
- `application métier calculer retour investissement TCO adoption`.

Ce relevé décrit la SERP observée. Il ne fournit aucun volume de recherche ni
aucune difficulté SEO.

| Page observée | Réponse / artefact | Point utile | Limite pour la décision |
|---|---|---|---|
| La Boîte Tech, « Comment calculer le ROI d’un logiciel sur mesure » | TCO, formule, business case, indicateurs | reconnaît le coût complet | chiffre d’ouverture tiers non relié ici à une source primaire ; le cadre reste orienté sur-mesure |
| PeakLab, « Application métier PME : calculer le ROI réel vs Excel » | Excel, coûts cachés, projection 24–36 mois | compare au statu quo | affirme 30 % de productivité perdue sans source primaire visible ; horizon présenté comme norme |
| PilotOne, page application métier | temps, erreurs, ventes | vocabulaire concret | fourchettes horaires et délais de retour très affirmatifs ; bénéfices commerciaux faciles à gonfler |
| Sparkana, « pourquoi c’est rentable » | standard contre sur-mesure, exemple | explique simplement | titre et conclusion favorisent la rentabilité avant le calcul |
| Oracle France, ROI ERP | indicateurs ERP | couverture métier large | intérêt éditeur et périmètre ERP, pas dossier contradictoire multi-options |
| Cabinet Digital, calculateur ROI logiciel | simulateur | intention outil | vérifier séparément les postes, l’attribution, les inconnues et le calendrier |

Angle mort commun :

- peu de pages forcent `STOP` lorsqu’un coût ou une hypothèse est inconnu ;
- la capacité, le cash et le qualitatif sont souvent additionnés ;
- les coûts arrivent maintenant tandis que les bénéfices sont comptés comme si
  l’outil était déjà adopté ;
- le sur-mesure est rarement mis en situation de perdre ;
- le prévisionnel est peu réconcilié avec M1, M3 et M6 ;
- le délai de retour est rarement distingué entre trésorerie et économie.

Valeur propre :

1. un moteur mensuel pur, testé et sans arrondi intermédiaire ;
2. deux lectures séparées, trésorerie et économique ;
3. douze familles de coûts obligatoirement connues, nulles, non applicables ou
   explicitement inconnues ;
4. quatre options sur le même calendrier ;
5. trois scénarios qui ne sont pas présentés comme des moyennes ;
6. un cas où la simplification bat le sur-mesure ;
7. un statut distinct lorsque le projet n’a jamais créé de déficit cumulé ;
8. un registre prévision / réalisé à M1, M3 et M6.

## D. Registre des affirmations et sources

Sources ouvertes et relues le 31 juillet 2026.

| ID | Affirmation autorisée | Source primaire | Portée / limite | Statut |
|---|---|---|---|---|
| F1 | Les objectifs, progrès et résultats attendus puis obtenus doivent être suivis ; certains effets sont difficiles à chiffrer | [France Num, mesure des effets de la transformation numérique](https://www.francenum.gouv.fr/guides-et-conseils/strategie-numerique/comprendre-le-numerique/comment-mesurer-les-effets-de-la), mise à jour 21/04/2026 | synthèse gouvernementale contenant aussi des sources tierces ; ne pas reprendre son taux de réussite comme prédiction | Vérifiée |
| F2 | Les indicateurs dépendent des priorités et du projet ; ils ne sont pas tous applicables en permanence | même page France Num, passages sur les catégories d’indicateurs et leurs limites | méthode de sélection, pas estimation de gain | Vérifiée |
| F3 | En 2025, le coût horaire de la main-d’œuvre est estimé à 44,2 € dans les services marchands | [Insee, coût horaire du travail](https://www.insee.fr/fr/statistiques/2381340), paru 02/07/2026 | France, secteurs B à N, entreprises de 10 salariés ou plus, apprentis inclus ; valeur estimée et révisable, pas coût universel d’un poste | Vérifiée, repère seulement |
| F4 | La sécurité et la protection des données doivent être intégrées dès la conception et les configurations par défaut | [CNIL, encadrer les développements informatiques](https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques), 14/03/2024 | s’applique lorsque des données personnelles sont traitées ; les mesures dépendent du risque | Vérifiée |
| F5 | Les tests doivent être unitaires, d’intégration, fonctionnels et de sécurité, avec environnements distincts et données fictives autant que possible | même fiche CNIL | recommandation de sécurité ; la préproduction réelle demande des précautions supplémentaires | Vérifiée |
| F6 | Une AIPD est obligatoire pour un traitement susceptible d’engendrer un risque élevé ; elle n’est pas automatique pour toute application | [CNIL, ce qu’il faut savoir sur l’AIPD](https://www.cnil.fr/fr/ce-quil-faut-savoir-sur-lanalyse-dimpact-relative-la-protection-des-donnees-aipd) | qualification à faire avant mise en œuvre ; listes CNIL et critères à examiner | Vérifiée |
| F7 | La documentation de conformité peut inclure registre, AIPD si nécessaire, transferts, information, droits, contrats et incidents | [CNIL, documenter la conformité](https://www.cnil.fr/fr/documenter-la-conformite) | ne pas présenter chaque document comme obligatoire dans tous les cas | Vérifiée |
| F8 | Un sous-traitant doit présenter des garanties suffisantes et le contrat doit traiter responsabilités, sécurité, incidents et fin de contrat | [CNIL, gérer la sous-traitance](https://www.cnil.fr/fr/securite-gerer-la-sous-traitance), 14/03/2024 | applicable aux traitements de données personnelles confiés à un sous-traitant | Vérifiée |
| F9 | L’externalisation peut créer des risques de perte de maîtrise, d’accès distant et d’hébergement mutualisé ; les exigences doivent être adaptées au contexte | [ANSSI / MesServicesCyber, externalisation et sécurité des SI](https://messervices.cyber.gouv.fr/guides/externalisation-et-securite-des-systemes-dinformation-un-guide-pour-maitriser-les) | guide ancien, toujours publié ; utiliser comme principe de risque, pas comme état complet de l’art 2026 | Vérifiée avec fraîcheur explicitée |
| F10 | Les projets numériques trop technocentrés effacent le travail réel ; les utilisateurs doivent participer à la conception et aux ajustements | [Anact, boîte à outils QVCT et numérique](https://www.anact.fr/sites/default/files/2024-10/boite-a-outils-qvct-numerique.pdf) | ressource construite à partir de quatre établissements sanitaires, sociaux et médico-sociaux ; méthode de conception du travail transposée ici, pas preuve universelle ni taux d’adoption garanti | Vérifiée avec périmètre sectoriel explicité |
| F11 | Le guide ANSSI du 26/02/2026 recommande notamment le moindre privilège, le MFA pour les opérations sensibles, la séparation développement / intégration / production, la journalisation, la surveillance et la mise à jour des dépendances, des sauvegardes hors ligne et l’anticipation de la réversibilité | [ANSSI / MesServicesCyber, guide de cybersécurité à l’usage des start-up du numérique](https://messervices.cyber.gouv.fr/guides/guide-cybersecurite-start-up-numerique) et [PDF v1](https://messervices.cyber.gouv.fr/documents-guides/guide_cybersecurite_start-up_numerique_FR_v1.pdf) | conçu d’abord pour les start-up qui développent un produit logiciel ; transposer aux applications internes selon les données, droits, dépendances et infrastructures réellement utilisés | Vérifiée et actuelle |

### Affirmations interdites ou à conserver comme hypothèses

- aucun ROI, délai de retour, budget ou taux d’adoption « moyen » ;
- aucun taux de productivité perdu avec Excel ;
- aucun taux universel de temps techniquement supprimable ;
- aucune promesse qu’une participation utilisateur garantit l’adoption ;
- aucune obligation RGPD généralisée : AIPD, DPO, hébergement ou transfert
  doivent être conditionnés au traitement réel ;
- aucun bénéfice qualitatif converti en euros sans méthode et historique ;
- aucun cas Hagnéré Code ou client inventé.

### Adaptation du document Prompt #1

Document lu intégralement et inspecté sur 24 pages :
`/Users/quentinhagnere/Downloads/Prompt #1 - Création Article.docx`.

Conservé :

- recherche primaire et SERP avant rédaction ;
- réponse avant définition ;
- plan annoté, cas reproductible et transitions ;
- typographie française, paragraphes courts, tableaux traduits ;
- FAQ visible et CTA thématique ;
- contrôle des calculs et métadonnées.

Écarté car incompatible avec le projet :

- incarnation de Quentin et expérience terrain inventée ;
- objectif ou promesse « top 1 » ;
- densité de mot-clé et longueur comme quotas ;
- persona fictif présenté comme dossier réel ;
- 8 à 15 liens internes imposés ;
- schéma `FAQPage` ;
- conformité CIF/COA/COBSP propre à Hagnéré Patrimoine.

La règle du dépôt prévaut : Article + BreadcrumbList seulement, contenu pensé
pour les personnes et aucune preuve commerciale inventée.

## E. Modèle de calcul reproductible

### E1. Convention temporelle

- mois 0 : décision ;
- mois 1 à H : périodes calendaires observées ;
- mois `g` : première période active ;
- nombre de mois actifs : `H − g + 1` ;
- rampe de réalisation des gains de `r` mois, distincte du taux d’adoption :
  au mois actif `m`,
  `min(1, (m − g + 1) / r)` ; si `r = 0`, effet plein dès `g` ;
- horizon autorisé par l’outil : 1 à 48 mois ;
- `g` appartient à `[1, H]` ;
- `r` peut dépasser le nombre de mois actifs : l’horizon peut finir avant
  l’effet plein et seuls les facteurs effectivement observés sont comptés.

### E2. Bénéfices sans double compte

```text
heures de travail éligibles
= heures annuelles observées
× part techniquement retirable
× adoption

heures retirées de la trésorerie
= heures éligibles × part donnant réellement lieu à un décaissement supprimé

capacité utile
= heures éligibles × part réellement réaffectée à un travail identifié
```

Les deux destinations sont exclusives ; leur somme ne peut dépasser 100 %.

```text
bénéfice de trésorerie
= décaissements évités hors main-d’œuvre × adoption
  × taux propre de réalisation de cette économie
+ heures réellement supprimées × décaissement horaire marginal

bénéfice économique
= bénéfice de trésorerie
+ capacité utile × valeur économique horaire justifiée
```

Le taux techniquement retirable ne s’applique qu’aux heures. Un décaissement
hors main-d’œuvre — par exemple une prestation ou un achat supprimable — garde
son propre taux de réalisation, mais reste réduit par l’adoption et la rampe.
Un salaire déjà payé ne disparaît pas parce qu’une tâche prend moins de temps.
Le coût chargé peut aider à valoriser une capacité, mais pas à fabriquer une
entrée de caisse.

### E3. Douze familles de TCO

1. cadrage ;
2. réalisation ;
3. migration ;
4. intégrations ;
5. formation et conduite du changement ;
6. temps interne ;
7. licences et hébergement ;
8. support et maintenance ;
9. sécurité et conformité ;
10. évolutions ;
11. double exploitation ;
12. sortie et réversibilité.

Chaque famille est :

- connue avec un montant, y compris zéro ;
- explicitement non applicable ;
- ou inconnue, auquel cas le calcul retourne `STOP`.

Un devis combinant plusieurs familles peut rester une ligne indivisible. Le
moteur permet de déclarer les familles couvertes sans inventer une répartition.

### E4. Résultats

```text
ROI de trésorerie cumulé
= (bénéfices cash cumulés − TCO de trésorerie)
  / TCO de trésorerie × 100

ROI économique cumulé
= (bénéfices cash cumulés + capacité utile cumulée − TCO économique)
  / TCO économique × 100

TCO économique
= TCO de trésorerie + coûts d’opportunité internes
```

- non annualisé ;
- non actualisé ;
- calculé sans arrondi intermédiaire ;
- `TCO = 0` donne `NON APPLICABLE`, jamais `Infinity` ;
- délai durable : premier mois où le cumul devient positif ou nul et le reste
  jusqu’à H ;
- si le cumul n’a jamais été négatif, statut
  `NO_FINANCING_DEFICIT`, pas « délai non atteint » ;
- si une sortie tardive annule un premier croisement, le premier croisement et
  le délai durable restent distincts.

### E5. Cas fictif central conditionnel

Ce cas explique le moteur ; il ne représente ni un client ni une moyenne.

Base annuelle :

- 80 comptes rendus/semaine × 8 minutes × 48 semaines = 512 h ;
- consolidation : 3 h/semaine × 48 = 144 h ;
- corrections : 14/mois × 24 minutes × 12 = 67,2 h ;
- total : 723,2 h/an ;
- valeur économique fictive : 36 €/h ;
- décaissements évitables hors main-d’œuvre : 2 400 €/an ;
- mise en service : mois 5 ;
- horizon : mois 0 à 48, soit 44 mois actifs ;
- pas de rampe dans cet oracle historique.

TCO conditionnel :

| Ligne | Nature | Timing | Montant |
|---|---|---|---:|
| cadrage | cash | mois 0 | 4 000 € |
| réalisation + intégrations, enveloppe indivisible | cash | mois 0 | 26 000 € |
| migration + formation, enveloppe indivisible | cash | mois 0 | 2 400 € |
| temps interne | économique | mois 0 | 3 600 € |
| hébergement et surveillance | cash | mois 5 à 48 | 150 €/mois |
| support et maintenance | cash | mois 5 à 48 | 250 €/mois |
| sortie | cash | mois 48 | 1 200 € |
| sécurité / conformité | cash | hypothèse fictive connue | 0 € |
| évolutions | cash | hypothèse fictive connue | 0 € |
| double exploitation | cash | hypothèse fictive connue | 0 € |

Les trois zéros ne signifient pas que ces postes sont normalement gratuits.
Ils rendent seulement l’ancien oracle calculable. Dans un dossier réel, un
poste non étudié doit rester inconnu et arrêter le calcul.

Résultats de contrôle :

- TCO de trésorerie : 51 200 € ;
- TCO économique : 54 800 € ;
- scénario central : 60 % de capacité utile et 70 % de cash évité ;
- bénéfice de trésorerie : 6 160 € ;
- bénéfice économique : 63 437,44 € ;
- ROI de trésorerie : −87,96875 % ;
- ROI économique : +15,7617518 % ;
- retour de trésorerie : non atteint ;
- retour économique durable : mois 39 ;
- cumul économique mois 38 : −580,16 € ;
- cumul économique mois 39 : +461,60 € ;
- cumul économique mois 48 : +8 637,44 €.

Le raccourci historique « 39,49 mois » est retiré : le moteur travaille par
périodes mensuelles et retourne le mois 39.

### E6. Trois scénarios illustratifs complets

Le tableau historique qui ne faisait varier que 35/40, 60/70 et 80/90 reste un
oracle du moteur, mais ne constitue pas un stress test suffisant. Les scénarios
visibles du calculateur varient aussi la date, la rampe, l’adoption et les coûts.

| Scénario | Mise en service / rampe / adoption | Réalisation / hébergement + maintenance / double exploitation | Capacité utile / cash évité | TCO économique | Bénéfice économique | Gain net / ROI économique | Retour durable |
|---|---|---|---|---:|---:|---:|---|
| prudent | M8 / 6 mois / 70 % | +15 % / +15 % / 600 €/mois de M7 à M9 | 35 % / 40 % | 61 760 € | 22 620,752 € | −39 139,248 € / −63,3731 % | non atteint |
| central | M5 / effet plein / 100 % | devis / devis / 0 € explicite | 60 % / 70 % | 54 800 € | 63 437,44 € | +8 637,44 € / +15,7618 % | M39 |
| haut favorable | M4 / 2 mois / 100 % | −5 % / −10 % / 0 € explicite | 80 % / 90 % | 52 100 € | 85 247,76 € | +33 147,76 € / +63,6233 % | M26 |

Ces paramètres sont fictifs, pas des références de marché. Le scénario haut
est volontairement favorable ; il ne devient pas une prévision tant que les
preuves d’adoption, de calendrier et de coût ne remplacent pas ses hypothèses.

### E7. Option simple qui gagne

Même base, horizon 48 mois, mise en service au mois 2, 47 mois actifs :

- 25 % de capacité utile ;
- 40 % des 2 400 €/an de cash évitable ;
- 4 000 € au mois 0 ;
- 75 €/mois du mois 2 au mois 48 ;
- 475 € de sortie au mois 48.

Toutes les autres familles du TCO sont explicitement déclarées non applicables
dans cet oracle fictif. Elles ne sont ni inconnues ni implicitement ramenées à
zéro ; dans un dossier réel, une seule famille inconnue impose `STOP`.

Résultats :

- TCO : 8 000 € ;
- bénéfice de trésorerie : 3 760 € ;
- bénéfice économique : 29 252,80 € ;
- ROI de trésorerie : −53 % ;
- ROI économique : +265,66 % ;
- retour économique durable : mois 9.

Le scénario montre qu’une simplification peut avoir un ROI relatif plus élevé
et un meilleur délai que le sur-mesure. Il ne prouve pas que cette option est
toujours disponible.

### E8. Oracles de bord

- H6, g3, rampe 3 : facteurs `1/3`, `2/3`, `1`, `1` ;
- 1 200 h/an à 1 €/h, coût initial 120 €, même rampe : bénéfices 300 €,
  cumul mois 4 = −20 €, retour durable mois 5 ;
- g = H : un seul mois actif ;
- coût de sortie pouvant annuler un premier croisement ;
- adoption connue à 0 : ROI −100 % si TCO positif ;
- adoption inconnue : `STOP` ;
- famille de coût omise ou inconnue : `STOP` ;
- identifiants de coût dupliqués : `STOP` ;
- cash et capacité issus des mêmes heures au-delà de 100 % : `STOP`.

## F. Architecture de la page

Title proposé : `ROI d’une application métier : calcul et cas complet`

Meta description proposée : `Calculez le ROI d’une application métier sans
confondre cash et temps gagné : TCO complet, scénarios, délai de retour et
comparaison SaaS ou sur-mesure.`

H1 : `Calculer le ROI d’une application métier sans inventer les gains`

Réponse featured-snippet visée, sans promesse :

> Calculez le ROI sur un horizon commun : soustrayez le coût total de
> possession des bénéfices attribuables, puis divisez le gain net par ce coût.
> Séparez la trésorerie, la capacité utile et le qualitatif. Si un coût,
> l’adoption ou la destination du temps gagné est inconnu, arrêtez le calcul.

Plan :

1. réponse courte et cinq données bloquantes ;
2. calendrier commun : décision, go-live, rampe de réalisation et horizon ;
3. quatre natures de bénéfice ;
4. douze familles du TCO ;
5. formule et deux lectures du ROI ;
6. calculateur local et cas limites ;
7. cas fictif prudent / central / haut ;
8. statu quo / simplifier / SaaS / sur-mesure ;
9. adoption, sécurité, RGPD et réversibilité ;
10. stress test et sensibilité au retard ;
11. prévision contre réalisé à M1, M3 et M6 ;
12. décision et CTA ;
13. FAQ visible.

Artefact signature :

- calculateur local ;
- résultat `STOP` sur les inconnues ;
- payback durable et premier croisement séparés ;
- comparaison où le sur-mesure perd ;
- tableau de réconciliation après mise en service.

## G. Intégration, données structurées et conversion

### Mise en page

- `GuidesShell` et `GuidePremiumLayout` ;
- mêmes héros, badges, auteur, statistiques, sommaire et sidebar que les guides
  premium ;
- CTA de héros, de FAQ et de conclusion vers `/demarrer-un-projet` ; CTA
  contextuel principal vers `/services/outils-internes-sur-mesure`, avec le
  vrai numéro de téléphone en action secondaire ;
- FAQ catégorisée accessible ;
- illustration 16:9 visible dans l’article ;
- tableaux transformés en cartes sur mobile par `GuideTable`.

### Images

Produites par ImageGen, sans texte, logo, chiffre ni graphique de croissance :

- `article-roi-16x9.webp` — 1600 × 900 ;
- `article-roi-4x3.webp` — 1200 × 900 ;
- `article-roi-1x1.webp` — 1200 × 1200.

L’image OG 1200 × 630 est générée par la route Next dédiée et reste distincte.

### SEO et indexation P1

- canonical propre à la route ;
- Article + BreadcrumbList seulement ;
- aucune donnée structurée FAQ ;
- auteur et éditeur issus des sources canoniques du site ;
- route conservée `noindex, nofollow` pendant les passes ;
- absence du hub, sitemap et `llms.txt` ;
- retrait du slug dans l’inventaire legacy uniquement pour empêcher la
  redirection de la nouvelle route ;
- aucune publication, indexation ou classement revendiqué.

### Calculateur

- React local, sans formulaire soumis ni appel réseau ;
- labels explicites, unités visibles, navigation clavier ;
- valeurs fictives identifiées ;
- champs vides convertis en `null`, pas en zéro ;
- famille inconnue = arrêt ;
- résultats séparés cash / économie ;
- scénarios prudent / central / haut ;
- sensibilité à un mois de mise en service plus tard, avec les coûts datés qui
  restent explicitement fixes ;
- copie ou téléchargement non nécessaire.

### Bon et mauvais fit du CTA

Bon fit :

- processus déjà observé ;
- données, volumes et responsables identifiés ;
- besoin de comparer plusieurs réponses ;
- intégrations ou règles propres à l’entreprise plausibles.

Mauvais fit :

- recherche d’un ROI garanti ;
- attente d’un prix moyen sans périmètre ;
- processus instable ou résultat indéfini ;
- outil standard non examiné ;
- aucun propriétaire du futur résultat.

## H. Rapport P1 et manifeste

```text
PASSE_1_TERMINEE
Slug : calculer-roi-application-metier
Fichiers : dossier A→H, page premium, OG, moteur mensuel, calculateur local,
tests moteur/interface/contenu/intégration, 3 WebP, redirection legacy et
garde-fous génériques des brouillons locaux
Contrat de réponse : décider entre statu quo, simplification, standard/SaaS,
sur-mesure, pilote ou report ; arrêter le calcul sur toute inconnue bloquante
Sources primaires : France Num, Insee, CNIL, ANSSI/MesServicesCyber et Anact
Calculs : 12 familles de TCO, cash et économie séparés, gain net, ROI, premier
croisement, retour durable, rampe mensuelle, retard borné et 3 scénarios complets
Contre-cas : le prudent invalide le projet ; l’option simple à 8 000 € bat le
sur-mesure à 54 800 € ; le ROI cash central reste négatif
CTA : OUTILS vers /demarrer-un-projet, avec service outils internes en secondaire
Contrôles : 31/31 moteur+interface, 46/46 paquet ciblé, 174/174 SEO,
494/494 global, ESLint, TypeScript, build, HTML servi et BAT Chrome
Risques résiduels : P2/P3/P4 et contrôle orchestrateur non exécutés ; route
volontairement noindex, hors registre, hub, sitemap et llms ; aucune publication
Manifeste P1 : docs/research/manifests/calculer-roi-application-metier-p1.sha256
```

### Fichiers du gel P1

- `docs/research/calculer-roi-application-metier.md` ;
- `src/app/guides/calculer-roi-application-metier/page.tsx` ;
- `src/app/guides/calculer-roi-application-metier/opengraph-image.tsx` ;
- `src/app/guides/calculer-roi-application-metier/application-roi-calculator.tsx` ;
- `src/app/guides/calculer-roi-application-metier/application-roi-calculator.test.tsx` ;
- `src/app/guides/calculer-roi-application-metier/content-quality.test.ts` ;
- `src/app/guides/calculer-roi-application-metier/integration.test.ts` ;
- `src/lib/application-roi.ts` ;
- `src/lib/application-roi.test.ts` ;
- `src/lib/legacy-guide-redirects.ts` ;
- `src/lib/legacy-guide-redirects.test.ts` ;
- `src/app/sitemap.test.ts` ;
- `src/lib/guides.test.ts` ;
- `public/guides/calculer-roi-application-metier/article-roi-16x9.webp` ;
- `public/guides/calculer-roi-application-metier/article-roi-4x3.webp` ;
- `public/guides/calculer-roi-application-metier/article-roi-1x1.webp`.

Le registre `src/lib/guides.ts`, le hub, le sitemap de production et
`llms.txt` ne sont pas modifiés. Les deux tests de gouvernance reconnaissent un
brouillon statique seulement si sa page contient le statut exact
`ready-for-human-review`. Le test inverse continue d’exiger l’enregistrement de
toute autre route statique et interdit à un brouillon local d’être publié.

### Contrôles P1 exécutés le 31 juillet 2026

| Contrôle | Résultat | Preuve ou limite |
|---|---|---|
| Prompt #1 | OK | DOCX lu intégralement et rendu en 24 pages A4 ; adaptation documentée en D |
| Recherche actuelle | OK | Sources officielles ouvertes ; guide ANSSI du 26/02/2026 relu jusque dans son PDF |
| Moteur + interface | 31/31 | Oracles historique, simple, rampe, bords, cash hors main-d’œuvre, presets et interactions |
| Paquet P1 ciblé | 46/46 | Moteur, calculateur, contenu, intégration et legacy |
| ESLint ciblé | OK | Route, tests, moteur et fichiers legacy |
| TypeScript | OK | `npx tsc --noEmit` |
| Espaces Git | OK | `git diff --check` |
| SEO standard | 174/174 | `npm run check:seo` |
| SEO avec `NODE_ENV=production` | 174/174 | même suite dans l’environnement de production |
| Suite globale | 494/494 | `npm test` |
| Build production final | OK | 62 pages générées ; route et OG présentes ; artefact SEO : 45 URL, 28 liens llms et 78 blocs JSON-LD contrôlés |
| Route servie | HTTP 200 | HTML prérendu ; H1 unique ; canonique propre ; `noindex, nofollow` |
| Données structurées | OK | racines `Article` et `BreadcrumbList` seulement ; aucun `FAQPage` |
| OG | HTTP 200 | PNG 1200 × 630, 162 328 octets lors du contrôle |
| Images Article | OK | WebP 1600 × 900, 1200 × 900 et 1200 × 1200 ; inspection visuelle des trois formats |
| Temps de lecture | 4 438 mots, 22 min | mesure du rendu servi ; première tentative sans serveur refusée, puis contrôle réussi après démarrage |
| Découvrabilité du brouillon | OK | slug absent du registre, du hub servi, du sitemap servi et de `llms.txt` servi |
| BAT bureau | OK | héros, sommaire, article et calculateur inspectés dans Chrome connecté |
| BAT mobile | OK | viewport 390 × 844 ; largeur document 390/390, cartes mobiles et CTA sans débordement |
| BAT interactions | OK | prudent M8/6 mois/70 %, champ vide→STOP, zéro explicite→reprise, inconnu→connu reste vide, coût à zéro et reset central |
| Accessibilité dynamique | OK | annonce `aria-live="polite"` contrôlée ; labels natifs et clavier numérique couverts par tests |
| Console navigateur | OK | aucune erreur ni alerte relevée |

Le navigateur intégré n’était pas disponible dans la session. Le BAT a donc été
réalisé avec le navigateur Chrome connecté, sur le build local servi. Ce
contrôle ne remplace pas le BAT orchestrateur indépendant après G1.

### Risques résiduels remis à l’orchestrateur

1. P2, P3, P4 et la revue transversale n’ont pas commencé.
2. Les trois coûts centraux connus à zéro restent des hypothèses fictives,
   clairement signalées ; un dossier réel doit les renseigner ou s’arrêter.
3. Le scénario favorable est une borne, pas une prévision.
4. Le repère Insee ne couvre pas toutes les entreprises et ne sert pas de
   valeur par défaut dans le moteur.
5. Aucune lecture par un utilisateur humain non technique ni aucune preuve de
   production publique n’est revendiquée.
6. Aucun commit, push, déploiement, publication ou indexation n’a été réalisé.

Le manifeste P1 contient les SHA-256 exacts de tous les fichiers relus. Toute
correction matérielle après sa création invalide G1 et impose de recalculer le
manifeste.

## I. G1 — validation indépendante de l’orchestrateur

Date : 31 juillet 2026

Verdict : **GO_PASSE_2**.

- P0 : 0 ;
- P1 : 0 ;
- P2 transmis à la passe suivante : contredire les hypothèses de valeur et
  d’attribution, recontrôler la portée exacte de chaque source, éprouver les
  enveloppes de coûts indivisibles et alléger les passages qui seraient trop
  denses sans retirer de substance.

L’orchestrateur a relu le dossier, la page, le moteur, le calculateur, l’image
sociale, les tests et les modifications de gouvernance. Il a vérifié le
manifeste P1 à **16/16** avant d’ajouter le présent verdict, puis a rejoué :

- 69/69 tests ciblés du paquet ROI ;
- 494/494 tests globaux ;
- 174/174 contrôles SEO ;
- ESLint ciblé et global, TypeScript et `git diff --check` ;
- le build de production, ses 62 routes et le contrôle postbuild ;
- les oracles central, prudent, favorable et option simple ;
- les sources France Num, Insee, CNIL, ANSSI et Anact sur leurs pages
  officielles ;
- le rendu bureau et mobile dans le navigateur intégré sur le build servi ;
- l’arrêt sur coût inconnu, le maintien du champ vide après retour à
  « montant connu », la reprise sur zéro explicite et la réinitialisation du
  cas central ;
- les catégories et accordéons de FAQ, l’annonce dynamique, le H1, la
  canonique, le `noindex, nofollow`, les deux seules racines JSON-LD et
  l’absence de débordement à 390 px ;
- la console navigateur, sans erreur ni avertissement.

L’horloge système a également confirmé que le 31 juillet 2026 et le timestamp
de gel ne sont pas antidatés. Aucun fichier P1 n’a été corrigé par
l’orchestrateur avant ce GO. L’ajout de la présente section rend le manifeste
P1 historique, comme prévu ; la passe 2 devra produire son propre manifeste.

Le contrôle `npm audit --omit=dev` remonte dix vulnérabilités hautes dans des
dépendances transitives déjà présentes de la pile Next/OpenNext. Les
corrections proposées imposent des rétrogradations ou changements majeurs ;
aucune dépendance n’a été modifiée au titre de ce guide. Ce risque de dépôt
reste à requalifier au contrôle transversal et ne constitue pas une régression
P1.

Ce verdict autorise uniquement la passe 2 par un agent distinct. Il ne vaut ni
validation P2, ni commit, ni push, ni déploiement, ni publication, ni
indexation.

## J. P2 — enrichissement, contradiction et vérification

Date de gel : 31 juillet 2026

Responsable : agent distinct `/root/roi_p2_verification`

Statut transmis : **READY_FOR_ORCHESTRATOR_G2**

Ce statut signifie que la passe 2 est terminée localement et que ses fichiers
sont figés par un manifeste SHA-256. Il ne constitue ni G2, ni autorisation de
P3, ni commit, ni push, ni déploiement, ni publication, ni indexation.

### J1. Instruction de passe appliquée

Le document
`/Users/quentinhagnere/Downloads/Prompt #2 Enrichissement et vérification.docx`
a été lu intégralement après extraction texte, soit 798 lignes. Le chargement
du runtime documentaire partagé est resté bloqué 582 secondes et n’a pas été
relancé ; l’orchestrateur avait parallèlement confirmé un rendu propre des
28 pages du DOCX. Cette limite technique ne réduit pas la lecture du texte
complet, mais elle est conservée dans la preuve au lieu d’être masquée.

Principes conservés :

- contredire les affirmations avant d’enrichir ;
- ouvrir les sources primaires et contrôler date, portée et limite ;
- refaire les calculs indépendamment du moteur ;
- chercher les coûts, hypothèses et scénarios qui invalident la conclusion ;
- expliciter les conditions d’application d’une source ;
- ajouter de la pédagogie seulement lorsqu’elle change une décision ;
- rejouer les tests, le build et le rendu servi après correction.

Consignes écartées car incompatibles avec le dépôt ou avec une information
défendable :

- objectif de classement « top 1 » ou promesse d’être le meilleur ;
- quotas de mots, de mots-clés ou de liens ;
- témoignage, client, expérience, diplôme ou résultat commercial inventé ;
- persona ou obligations propres à Hagnéré Patrimoine ;
- données structurées `FAQPage`, `HowTo` ou `wordCount` ;
- téléchargement XLS, XLSX ou CSV ;
- publication, commit, push ou indexation pendant la passe éditoriale.

### J2. État de départ et intégrité P1

Avant toute correction P2, le manifeste P1 a été vérifié. Le dossier de
recherche était le seul fichier différent, parce que l’orchestrateur y avait
ajouté G1 après le gel ; les quinze autres entrées étaient conformes. Les six
fichiers matériels modifiés ensuite par P2 rendent logiquement le manifeste P1
historique. Ils sont désormais couverts, avec l’ensemble du lot, par le
manifeste P2.

### J3. Vérification contradictoire des sources

| Source | Vérification du 31/07/2026 | Conclusion conservée |
|---|---|---|
| France Num | fiche publiée le 19/08/2021 et mise à jour le 21/04/2026 ; objectifs, progrès, résultats et effets difficiles à quantifier | cadre de mesure seulement ; aucune statistique tierce transformée en prévision |
| Insee | publication du 02/07/2026 ; 44,2 €/h en 2025, services marchands B à N, entreprises de 10 salariés ou plus, apprentis inclus ; estimation révisable | repère de contradiction visible, jamais valeur par défaut |
| CNIL — développement | fiche du 14/03/2024 ; protection dès la conception, environnements distincts et plusieurs natures de tests | portée limitée aux traitements de données personnelles et adaptée au risque |
| CNIL — AIPD | obligatoire pour un traitement susceptible d’engendrer un risque élevé, pas pour toute application | formulation conditionnelle confirmée |
| CNIL — sous-traitance | garanties, contrat, responsabilités, sécurité, incidents et fin de contrat | applicable lorsqu’un sous-traitant traite des données personnelles |
| ANSSI — guide 2026 | publication du 26/02/2026 ; moindre privilège, MFA, séparation des environnements, dépendances, journaux, sauvegardes et réversibilité | cible première : start-up développant un produit logiciel ; transposition à l’application interne explicitée |
| ANSSI — externalisation | guide publié mais ancien ; perte de maîtrise, accès distant et hébergement mutualisé | principes de risque seulement, pas état complet de l’art 2026 |
| Anact — QVCT et numérique | PDF de 72 pages daté de juin 2024 ; méthode issue de quatre établissements sanitaires, sociaux et médico-sociaux | la portée sectorielle manquante a été ajoutée ; aucune preuve universelle d’adoption ou de performance |

La page CNIL « documenter la conformité » reste dans le registre de recherche,
mais aucune obligation universelle issue de cette page n’est affirmée dans le
contenu visible. Aucune source commerciale n’est utilisée pour fixer un ROI,
un budget, une adoption ou un délai moyen.

### J4. Recalcul indépendant des oracles

Un script de contre-calcul autonome, sans import du moteur du guide, a
reconstruit les flux mensuels. Les résultats concordent :

| Oracle fictif | TCO cash / économique | Bénéfices cash / économiques | ROI économique | Retour économique durable |
|---|---:|---:|---:|---:|
| Central | 51 200 € / 54 800 € | 6 160 € / 63 437,44 € | +15,7617518 % | M39 |
| Prudent | 58 160 € / 61 760 € | 2 156 € / 22 620,752 € | −63,3731347 % | non atteint |
| Haut favorable | 48 500 € / 52 100 € | 8 010 € / 85 247,76 € | +63,6233397 % | M26 |
| Option simple | 8 000 € / 8 000 € | 3 760 € / 29 252,80 € | +265,66 % | M9 |

Pour le central, le cumul économique indépendant vaut −580,16 € en M38,
+461,60 € en M39 et +8 637,44 € en M48. Pour H12, mise en service M10 et
rampe de six mois, les seuls facteurs observés sont 1/6, 2/6 et 3/6, soit une
somme de 1 ; aucune extrapolation après l’horizon n’est autorisée.

### J5. Findings avant correction

| Gravité | Finding reproduit | Risque | Correction P2 |
|---|---|---|---|
| P1 | des entrées finies `Number.MAX_VALUE` pouvaient produire un résultat `OK` contenant `Infinity`, ensuite sérialisé en `null` par JSON | résultat trompeur, contrat `OK` violé et donnée potentiellement indiscernable d’une inconnue | garde-fou fini sur dérivés, coûts mensuels, bénéfices, flux, cumuls, agrégats et ROI ; retour `STOP` explicite |
| P2 | la validation refusait une rampe supérieure au nombre de mois actifs | blocage d’un scénario valide et biais possible vers un effet plein artificiel | rampe tronquée autorisée ; seules les fractions dans l’horizon sont comptées |
| P2 | le texte définissait le payback par « positif » alors que le moteur utilise `>= 0` | frontière mathématique imprécise | « nul ou positif » dans le corps et la FAQ |
| P2 | l’option simple ne rendait pas visibles les familles supposées non applicables | borne favorable insuffisamment falsifiable | hypothèse explicitée dans la page et dans l’oracle |
| P2 | la méthode Anact était citée sans son terrain sectoriel | généralisation excessive | quatre établissements sanitaires, sociaux et médico-sociaux visibles dans le corps et les sources |

Après correction : **P0 = 0, P1 = 0**. Aucun autre conflit P0/P1 n’a été
identifié entre les sources, les formules, le moteur, les scénarios et le
contenu visible. La densité et le rythme rédactionnels restent volontairement
réservés à P3 ; P2 n’a pas transformé une vérification factuelle en réécriture
de style.

### J6. Tests adversariaux ajoutés

- produit de deux entrées finies extrêmes : `STOP`, aucune valeur non finie ;
- accumulation de coûts récurrents finis extrêmes : `STOP` avant sortie
  exploitable ;
- TCO fini mais microscopique faisant déborder le ratio : `STOP` ;
- H12 / M10 / rampe 6 : `OK`, trois mois actifs et facteurs 1/6, 2/6, 3/6 ;
- rendu du calculateur avec entrées extrêmes : STOP visible, sans `Infinity` ni
  `NaN` ;
- assertions de contenu sur la rampe tronquée, la frontière `>= 0`, les
  familles non applicables de l’option simple et la portée Anact.

### J7. Contrôles après correction

| Contrôle | Résultat |
|---|---|
| Tests ciblés moteur, calculateur, contenu et intégration | 46/46 |
| Suite globale | 498/498 |
| Contrôles SEO | 174/174 |
| ESLint ciblé et global | OK |
| TypeScript `--noEmit` | OK |
| `git diff --check` | OK |
| Build production | OK, 62 pages |
| Artefact de recherche postbuild | OK : 45 URL sitemap, 28 liens `llms.txt`, 78 blocs JSON-LD |
| Route servie | H1 unique, canonique propre, `noindex, nofollow` |
| Données structurées | `Article` et `BreadcrumbList` uniquement |
| BAT bureau Chrome | héros, corrections P2 et calculateur visibles ; aucune largeur excédentaire |
| BAT interaction | H12/M10/rampe 6 calculable ; extrêmes → STOP sans `Infinity` ni `NaN` |
| BAT mobile | viewport 390 × 844 ; document et body à 390 px ; aucun débordement |
| Console navigateur | aucune erreur ni alerte |

Le navigateur intégré n’était pas disponible lors du BAT P2 ; Chrome connecté
a été utilisé sur le build local servi. Le viewport temporaire a été rétabli et
l’onglet de contrôle fermé. Le serveur local a ensuite été arrêté.

`npm audit --omit=dev` confirme les dix vulnérabilités hautes transitives déjà
documentées en P1, dans la pile Next/OpenNext. Les corrections automatiques
proposent des changements majeurs ou rétrogradations ; aucune dépendance n’a
été modifiée et aucun `npm audit fix --force` n’a été exécuté.

### J8. Fichiers matériels modifiés par P2

- `docs/research/calculer-roi-application-metier.md` ;
- `src/lib/application-roi.ts` ;
- `src/lib/application-roi.test.ts` ;
- `src/app/guides/calculer-roi-application-metier/page.tsx` ;
- `src/app/guides/calculer-roi-application-metier/application-roi-calculator.test.tsx` ;
- `src/app/guides/calculer-roi-application-metier/content-quality.test.ts`.

Les fichiers d’intégration globale, le registre public, les redirections, le
sitemap et les images n’ont pas été modifiés par P2. Ils restent néanmoins
dans le manifeste du lot pour interdire une substitution silencieuse entre G2
et la passe suivante.

### J9. Horodatage et frontière de publication

Les champs `datePublished` et `dateModified` de la page décrivent le gel local
du brouillon P1. Ils ne prouvent ni première publication ni mise à jour
publique. Si l’intégration intervient à un autre instant, l’orchestrateur de
publication doit les remplacer par les timestamps publics cohérents, relancer
tests, build, données structurées et BAT, puis produire un nouveau gel. Cette
édition future invalidera normalement le manifeste P2 ; elle ne doit jamais
être faite silencieusement après G2.

### J10. Risques résiduels et frontière du verdict

1. P3, P4 et la revue transversale indépendante restent à exécuter.
2. Les valeurs centrales nulles de sécurité, évolutions et double exploitation
   sont fictives ; un dossier réel doit les prouver ou s’arrêter.
3. L’option simple suppose plusieurs familles non applicables ; sa disponibilité
   fonctionnelle et contractuelle n’est pas démontrée par le guide.
4. Aucun test lecteur humain non technique n’est revendiqué.
5. Les dix vulnérabilités transitives sont un risque de dépôt à traiter hors de
   cette passe éditoriale.
6. Aucun commit, push, déploiement, publication, indexation ni performance SEO
   publique n’est revendiqué.

## K. Gel P2

Manifeste :
`docs/research/manifests/calculer-roi-application-metier-p2.sha256`

Le manifeste couvre les seize fichiers matériels du lot P1–P2. Toute
correction d’un fichier couvert après sa création invalide le présent statut et
impose un nouveau contrôle P2 avant G2.

Verdict de l’agent P2 : **READY_FOR_ORCHESTRATOR_G2**.

## L. G2 — validation indépendante de l’orchestrateur

Date : 31 juillet 2026

Verdict : **GO_PASSE_3**.

- P0 : 0 ;
- P1 : 0 ;
- P2 résiduels transmis à P3 : alléger la densité lorsque la compréhension
  n’en souffre pas, naturaliser les transitions et vérifier la précision de
  chaque formulation sans toucher aux frontières mathématiques gelées.

L’orchestrateur a relu le rapport P2, les six fichiers modifiés, les tests
adversariaux et les formulations visibles. Il a vérifié le manifeste P2 à
**16/16** avant d’ajouter le présent verdict, puis a contrôlé
indépendamment :

- l’ancien défaut `Number.MAX_VALUE × Number.MAX_VALUE`, qui retourne
  désormais `STOP` avec une raison exploitable, sans `Infinity`, `NaN` ni
  `null` ambigu ;
- le scénario H12 / mise en service M10 / rampe 6, accepté avec trois mois
  actifs et les facteurs 1/6, 2/6 et 3/6 ;
- la frontière du retour durable, désormais décrite par un cumul nul ou
  positif ;
- l’hypothèse favorable de l’option simple, dont les autres familles sont
  explicitement non applicables ;
- le PDF Anact officiel de 72 pages, sa construction à partir de quatre
  établissements sanitaires et médico-sociaux, le travail réel et
  l’association des utilisateurs ;
- la portée exacte de France Num, Insee, CNIL, du guide ANSSI 2026 pour les
  start-up produit et du guide d’externalisation daté de 2010 ;
- 73/73 tests ciblés, 498/498 tests globaux et 174/174 contrôles SEO ;
- ESLint, TypeScript et `git diff --check` ;
- le build de production, ses 62 pages et le postbuild à 45 URL de sitemap,
  28 liens `llms.txt` et 78 blocs JSON-LD ;
- le rendu servi : H1 unique, canonique propre, `noindex, nofollow`,
  `Article` et `BreadcrumbList` seulement, calculateur sans formulaire ;
- l’interaction réelle sur la rampe partielle et les valeurs extrêmes ;
- le rendu mobile à 390 × 844, document et body à 390 px, image chargée et
  console sans erreur ni avertissement.

Le manifeste P2 est maintenant une preuve historique : l’ajout de cette
section modifie volontairement le dossier après sa vérification. Aucun autre
fichier du gel P2 n’a été corrigé par l’orchestrateur.

Ce verdict autorise uniquement le polish rédactionnel P3 par un agent distinct.
Il ne vaut ni validation P3/P4, ni contrôle transversal, ni commit, ni push, ni
déploiement, ni publication, ni indexation.

## M. P3 — audit et polish rédactionnel

Date : 31 juillet 2026

Responsable : agent distinct `/root/roi_p3_polish`

Statut : **READY_FOR_ORCHESTRATOR_G3 — P3 terminée, P0 = 0 et P1 = 0 ;
verdict G3 indépendant en attente**

### M1. Instruction de passe lue et adaptée

Le document
`/Users/quentinhagnere/Downloads/Prompt #3 - Polish Rédactionnel.docx` a été
extrait avec `textutil` puis lu intégralement : 970 lignes, 9 163 mots et
57 201 caractères. Son rendu existant comporte 33 pages PNG. L’orchestrateur
avait contrôlé les 33 pages comme propres ; l’agent P3 a retrouvé ces 33
images et les a toutes réinspectées par planches de contact, sans texte
tronqué, chevauchement, tableau cassé ni glyphe manquant.

Intentions conservées :

- polish humain sans réécriture du fond ;
- réponse immédiate, vocabulaire expliqué et français naturel ;
- une idée principale par paragraphe ;
- transitions qui relient réellement deux décisions ;
- chiffres accompagnés de leur base, période, sens et source ;
- FAQ directe, CTA non intrusif et maillage contextuel ;
- chasse aux répétitions, au jargon et aux formulations administratives.

Consignes écartées parce qu’elles contredisent le projet Hagnéré Code :

- densité de mot-clé, quotas de H2, FAQ, liens ou mentions de marque ;
- promesse de position 1, de trafic, de CTR ou de citation par une IA ;
- témoignage, client, prix, résultat, diplôme ou expérience inventés ;
- persona, identité ou qualifications Hagnéré Patrimoine / LMNP ;
- `FAQPage`, `HowTo`, `wordCount`, credential ou autre racine JSON-LD :
  seuls `Article` et `BreadcrumbList` restent autorisés ;
- téléchargement XLS, XLSX ou CSV ;
- lien vers un guide legacy redirigé ou vers un brouillon ;
- commit, push, publication ou indexation pendant la passe.

### M2. Intégrité historique P2

Le manifeste P2 a été rejoué avant édition. Les quinze fichiers matériels
autres que le présent dossier correspondent à leur SHA-256. Le dossier seul
diverge, comme prévu, parce que l’orchestrateur a ajouté G2 après sa
vérification 16/16. Aucun fichier du moteur, aucun oracle, aucun test ni aucune
image n’avait changé au début de P3.

### M3. Cartographie avant correction

- texte servi P2 : 4 438 mots, soit 22 minutes selon la règle du dépôt ;
- title : 52 caractères ;
- meta description : 145 caractères ;
- description du héros : 225 caractères ;
- 12 sections, 10 tableaux, 5 blocs de formule, 3 encadrés, 3 mémos, 2 cas
  fictifs et 9 réponses de FAQ ;
- expression « il faut » : 0 ; « permet » : 1 ; « donc » : 5 ;
  « dans ce guide » : 2 ;
- aucune occurrence des ouvertures anti-IA ciblées du prompt (`Il est
  important de noter`, `Dans cette optique`, `Par ailleurs`, `Il convient de`,
  `En effet`, `S’agissant de`, `Au regard de`, etc.).

La densité vient donc principalement de la quantité d’information utile et des
tableaux, pas d’un remplissage manifeste. La passe doit alléger les points de
friction sans supprimer les frontières factuelles validées en P2.

### M4. Audit avant correction

| Axe | Diagnostic avant correction | Action P3 retenue |
|---|---|---|
| Héros et promesse | « Un ROI utile ne mélange ni… » attribue au ratio une action peu idiomatique ; « cash » dans la meta est moins clair que « trésorerie » | écrire « Un calcul utile ne confond… » et naturaliser la meta sans changer sa promesse |
| Réponse courte | la première phrase répète « retour sur investissement sur » ; ROI et TCO ne sont développés qu’après l’image alors qu’ils apparaissent dans le lead | définir retour sur investissement et coût total de possession dès le lead, puis alléger le paragraphe suivant |
| Progression | le parcours de décision est solide, mais plusieurs sections se terminent sur un tableau, un mémo ou une réserve sans annoncer la prochaine question | ajouter un pont logique bref entre chacune des douze étapes, sans connecteur décoratif |
| Phrases et paragraphes | les passages Insee, option simple, Anact et CNIL/ANSSI concentrent source, portée, chiffre et conséquence dans un même bloc dense | scinder ces blocs par fonction : fait et périmètre, puis conséquence lecteur |
| Jargon et acronymes | SaaS, DAF, IT, API, DPO, VAN, TRI, Anact, ANSSI, CNIL, MFA et AIPD apparaissent sans définition immédiate ou dans un libellé trop technique | développer au premier usage ou remplacer par le terme français courant |
| Répétitions | les tics demandés sont déjà absents ou rares ; « donc » et « dans ce guide » ne forment pas une répétition bloquante | ne pas surcorriger ; retirer seulement les occurrences qui ralentissent une phrase précise |
| Formats | l’équilibre prose / tableaux / formules / mémos démontre le calcul ; l’enchaînement des sections 7 à 10 peut néanmoins devenir fatigant au survol | conserver tous les formats décisionnels et utiliser les transitions pour rendre leur fonction immédiatement lisible |
| Tableaux et mobile | les légendes sont explicites et `GuideTable` produit des cartes mobiles ; le BAT P2 à 390 px était sans débordement | conserver les tableaux ; refaire un BAT bureau et 390 px après polish |
| Pédagogie | cash, capacité, qualitatif, rampe, TCO, payback et option simple sont précisément séparés | préserver mot pour mot les limites mathématiques et les nombres ; clarifier seulement les phrases d’accès |
| CTA, FAQ et maillage | le CTA demande de challenger des hypothèses sans promettre un ROI ; les 9 FAQ répondent dès la première phrase ; l’unique lien guide vise une route publiée | conserver l’architecture ; naturaliser la cadence M1/M3/M6 et ne créer aucun nouveau lien |
| SEO | title, H1 et réponse courte sont cohérents, sans bourrage ; la meta reste descriptive | conserver title et H1 ; améliorer le vocabulaire de la meta |
| Français et adresse | vouvoiement cohérent, ponctuation française propre, très peu de passif administratif | corriger les formulations localement, sans ajouter de lyrisme ni de slogans |

### M5. Éléments gelés pendant le polish

La passe P3 ne modifie pas :

- `src/lib/application-roi.ts`, ses formules, validations et statuts ;
- les calendriers, montants, pourcentages, résultats et oracles ;
- les scénarios prudent, central, favorable et l’option simple ;
- la frontière `STOP`, le zéro explicite et le retour durable `>= 0` ;
- la séparation trésorerie / capacité / qualitatif ;
- la portée Insee, le terrain sectoriel Anact, la cible du guide ANSSI 2026,
  l’ancienneté du guide ANSSI 2010 et le caractère conditionnel de l’AIPD ;
- les sources officielles, leurs URL et leurs limites ;
- le statut `ready-for-human-review`, les robots privés, la canonical, les
  images, le CTA réel et les deux seules racines JSON-LD ;
- les timestamps locaux, qui devront être réconciliés par l’orchestrateur au
  moment d’une éventuelle publication.

### M6. Corrections rédactionnelles appliquées

Les corrections restent circonscrites au texte visible de la page, du
calculateur et de leurs assertions textuelles :

- la réponse courte définit désormais immédiatement le retour sur
  investissement (ROI) et le coût total de possession (TCO), puis sépare la
  trésorerie de la valeur économique ;
- la meta description et le héros utilisent « trésorerie » et « coût total »
  à la place d’anglicismes ou de raccourcis moins clairs ;
- `cash`, `payback`, `business case`, `double run` et `MFA` ont été remplacés
  dans la copie visible par « trésorerie », « retour durable », « dossier
  économique », « double exploitation » et « authentification multifacteur » ;
- DAF et IT ont été remplacés par les fonctions réellement concernées ; API,
  DPO, VAN, TRI, Anact, ANSSI, CNIL et AIPD sont développés ou expliqués à leur
  premier emploi utile ;
- les blocs Insee, option simple, Anact et CNIL/ANSSI ont été aérés selon leur
  fonction : fait et périmètre d’abord, conséquence pour le lecteur ensuite ;
- les questions de FAQ donnent la réponse dès la première phrase et la cadence
  M1/M3/M6 est formulée comme une action de suivi ;
- les libellés du calculateur distinguent plus directement heures
  techniquement supprimables, dépenses réellement supprimées, décaissements
  évités et capacité utile ;
- le temps de lecture affiché a été réconcilié avec le rendu final servi :
  **23 minutes**.

Le moteur, les scénarios, les oracles, les formules, les montants, les
pourcentages, les résultats, les sources, les URL, les images et les frontières
de décision n’ont pas changé.

### M7. Contre-audit de densité après correction

Une première version du polish atteignait 4 791 mots, soit 24 minutes :
**+353 mots et +7,95 %** par rapport aux 4 438 mots servis en P2. Cette hausse
provenait surtout de onze ponts ajoutés en fin de section. Ils amélioraient la
continuité, mais dix ne faisaient qu’annoncer la section suivante et une phrase
répétait la fonction du repère Insee.

Ces passages ont été retirés avant le gel. La version finale sert **4 614 mots,
soit 23 minutes** : **+176 mots et +3,97 %** par rapport à P2. Le delta restant
correspond aux définitions nécessaires, aux frontières trésorerie / capacité,
aux développements d’acronymes et aux reformulations qui lèvent une ambiguïté.
Il ne vient plus de transitions décoratives. Aucune réserve substantielle n’a
été raccourcie.

Cartographie finale :

- title : 52 caractères ;
- meta description : 150 caractères ;
- description du héros : 249 caractères ;
- 12 sections, 10 tableaux, 5 blocs de formule, 3 encadrés, 3 mémos, 2 cas
  fictifs et 9 réponses de FAQ, inchangés ;
- « il faut » : 0 ; « permet » : 1 ; « donc » : 5 ;
  « dans ce guide » : 1 ;
- aucune occurrence visible de `cash`, `payback`, `business case`,
  `double run`, DAF ou MFA dans la page finale.

### M8. Contrôles P3 après la dernière correction

| Contrôle | Résultat | Preuve ou limite |
|---|---|---|
| Prompt #3 | OK | DOCX lu intégralement ; 33 pages rendues réinspectées |
| Paquet ROI ciblé | 73/73 | moteur, calculateur, contenu, intégration, legacy, sitemap et gouvernance |
| Suite globale | 498/498 | `npm test` après le dernier remplacement rédactionnel |
| SEO standard | 174/174 | `npm run check:seo`, rejoué aussi par le prebuild |
| ESLint | OK | ciblé puis dépôt complet |
| TypeScript | OK | `npx tsc --noEmit` |
| Espaces Git | OK | `git diff --check` |
| Build production | OK | 62 pages ; route et OG présentes |
| Artefact SEO | OK | 45 URL, 28 liens llms et 78 blocs JSON-LD contrôlés |
| Route servie | HTTP 200 | H1 unique, `noindex, nofollow`, copie P3 et temps de lecture 23 min présents |
| Données structurées | OK | `FAQPage` absent ; contrat `Article` + `BreadcrumbList` couvert par les tests |
| Temps de lecture | 4 614 mots, 23 min | mesure du rendu produit servi après le dernier build |
| Audit dépendances | 10 hautes préexistantes | pile transitive Next/OpenNext ; aucune dépendance modifiée, corrections proposées cassantes |
| BAT navigateur P3 | reporté à G3 | aucun navigateur intégré `iab` disponible dans cette tâche ; seul Chrome extension était listé et le protocole interdit de changer silencieusement de backend |

Le BAT n’est donc pas revendiqué par l’agent P3. L’orchestrateur, qui dispose
du navigateur intégré dans sa propre tâche, doit contrôler bureau, viewport
390 px, calculateur, FAQ, CTA, console et débordement avant tout
`GO_PASSE_4`.

### M9. Verdict transmis à l’orchestrateur

- P0 : **0** ;
- P1 : **0** ;
- P2 rédactionnels résiduels : **0 bloquant** ;
- verdict agent : **READY_FOR_ORCHESTRATOR_G3**.

Ce verdict signifie seulement que le polish peut être contrôlé. Il ne vaut ni
`GO_PASSE_4`, ni validation transversale, ni commit, ni push, ni déploiement,
ni publication, ni indexation. Toute correction d’un fichier gelé après le
manifeste P3 invalide ce verdict et impose de rejouer les contrôles concernés.

## N. G3 — validation indépendante de l’orchestrateur

Date : 31 juillet 2026

Verdict : **GO_PASSE_4**.

- P0 : 0 ;
- P1 : 0 ;
- P2 transmis à P4 : rechercher les traces de rédaction mécanique restantes,
  sans réintroduire de synonymes artificiels ni amincir les réserves
  factuelles.

Le manifeste P3 a été vérifié à **16/16** avant le présent ajout. La
comparaison des manifestes P2 et P3 confirme que le moteur, ses oracles, les
tests mathématiques, l’intégration, l’OG, les fichiers globaux et les images
n’ont pas changé. Seuls le dossier, la page, la copie du calculateur et leurs
assertions rédactionnelles ont été modifiés.

L’orchestrateur a relu l’ensemble du texte puis contrôlé :

- un héros clair et visible : « Un calcul utile ne confond… », sans anglicisme
  de trésorerie ;
- une réponse courte qui définit immédiatement ROI et TCO, maintient le
  `STOP` et sépare trésorerie et valeur économique ;
- les acronymes et institutions au premier usage utile : SaaS, API, DPO,
  VAN/TRI, Anact, ANSSI, CNIL et AIPD ;
- les paragraphes Insee, option simple, Anact et CNIL/ANSSI, désormais
  segmentés sans perte de portée ;
- la FAQ de suivi M1/M3/M6, le CTA contradictoire et l’unique maillage vers un
  guide publié ;
- le contre-audit de longueur : les transitions seulement annonciatrices ont
  été retirées ; le rendu final sert 4 614 mots et 23 minutes, soit +176 mots
  utiles par rapport à P2 et non +353 ;
- 73/73 tests ciblés, 498/498 tests globaux, 174/174 contrôles SEO, ESLint,
  TypeScript et `git diff --check` ;
- le build de production, ses 62 pages et le postbuild à 45 URL de sitemap,
  28 liens `llms.txt` et 78 blocs JSON-LD ;
- le navigateur intégré : héros, réponse courte, sommaire, section de risque,
  calculateur, FAQ et CTA ; H1 unique, canonique propre, `noindex, nofollow`,
  `Article` et `BreadcrumbList` seulement ;
- le rendu mobile à 390 × 844, document et body à 390 px, libellés lisibles,
  image chargée et console sans erreur ni avertissement ;
- le scénario central toujours à M39 et les 24 champs du calculateur, sans
  régression fonctionnelle après le polish.

Le BAT que l’agent P3 ne pouvait pas exécuter faute de backend `iab` a donc été
réalisé par l’orchestrateur avant ce GO. Aucun fichier P3 autre que le présent
dossier n’a été corrigé pendant G3. L’ajout de cette section rend le manifeste
P3 historique, conformément au protocole.

Ce verdict autorise uniquement la passe antipasse IA P4 par un quatrième agent
distinct. Il ne vaut ni G4, ni contrôle transversal, ni commit, ni push, ni
déploiement, ni publication, ni indexation.

## O. P4 — antipasse IA et lecture humaine

Date : 31 juillet 2026

Responsable : agent distinct `/root/roi_p4_anti_ia`

Statut : **READY_FOR_ORCHESTRATOR_G4**.

Cette passe intervient après le `GO_PASSE_4` de G3. Elle ne remplace ni G4, ni
le contrôle transversal post-guide, ni le BAT final. Elle n’autorise aucun
commit, push, déploiement, publication ou demande d’indexation.

### O1. Instruction de passe lue et adaptée

Le fichier `/Users/quentinhagnere/Downloads/Prompt 4 - Antipasse IA.docx` a été
lu intégralement après extraction : **381 lignes et 2 457 mots, jusqu’à la fin
du document**. Sa preuve visuelle disponible couvre **9 pages rendues et
inspectées sans défaut de mise en page**.

Ont été retenus :

- la chasse aux cadences mécaniques, aux symétries artificielles, aux slogans
  abstraits et aux connecteurs interchangeables ;
- la préférence pour une relation directe entre cause, décision et
  conséquence ;
- des formulations concrètes, précises et immédiatement compréhensibles ;
- une relecture complète du texte servi, après correction, et non un contrôle
  limité à quelques expressions régulières ;
- la conservation des réserves utiles, des exemples chiffrés, des limites et
  des embranchements `STOP`.

Ont été explicitement écartés :

- toute promesse d’« indétectabilité » ou de score auprès d’un détecteur ;
- l’ajout de familiarité forcée, de fautes volontaires, d’anecdotes ou de
  clients inventés ;
- les quotas de mots-clés, les synonymes décoratifs et la variation de titres
  sans bénéfice pour le lecteur ;
- les promesses de première position, de trafic ou de taux de clic ;
- les titres `HowTo`, `FAQPage`, les faux `wordCount`, les téléchargements et
  les qualifications professionnelles étrangères au guide ;
- toute modification du moteur, des formules, des oracles, des scénarios, des
  sources ou des frontières de décision sous prétexte de style.

### O2. Intégrité du gel P3

Avant toute correction, le manifeste P3 a été vérifié sur les **16 fichiers**
du périmètre. Les **15 fichiers autres que le présent dossier** correspondaient
exactement à leur empreinte. Seul le dossier avait évolué, par l’ajout attendu
du verdict G3. Ce delta est conforme au protocole et n’a pas été confondu avec
une altération de P3.

La passe a ensuite gelé :

- toutes les formules et conventions du moteur ;
- les montants, pourcentages, mois de retour et oracles de bord ;
- les scénarios central, prudent, favorable et option simple ;
- les preuves, dates de consultation, URL et limites des sources ;
- l’architecture `Article` + `BreadcrumbList`, sans `FAQPage` ;
- les images éditoriales, leurs formats et leurs alternatives ;
- le temps de lecture calculé à partir du rendu, sans durée saisie à la main.

### O3. Audit avant correction

La page ne présentait aucun P0 ni P1. Le fond restait exact et la lecture G3
avait déjà retiré les principales lourdeurs. P4 a néanmoins identifié un petit
ensemble de P2 rédactionnels :

| Surface | Finding | Gravité | Décision |
|---|---|---:|---|
| Héros | triple cadence « ni…, ni…, ni… » plus écrite que parlée | P2 | découper en trois phrases causales |
| Titres H2 | 12 titres sur 12 à l’impératif, dont cinq formulations symétriques ou slogan | P2 | naturaliser seulement les cinq titres concernés |
| CTA | « challenger », « lecture contradictoire » et « prochaine preuve » décrivaient une méthode interne plutôt que le besoin du lecteur | P2 | nommer le dossier, le chiffre, le test ou le devis manquant |
| Scénario prudent | le verdict et la prochaine action étaient enfermés dans une même mécanique de phrase | P2 | séparer la décision de ce qui pourrait la faire évoluer |
| Calculateur | « Deux lectures, jamais un chiffre unique » et « prochain travail utile » sonnaient comme des accroches génériques | P2 | dire directement ce que montrent les deux résultats |
| Conclusion | une seule longue énumération portait toutes les conditions de décision | P2 | répartir les conditions sur trois phrases |
| Image OG | « Cash » restait le seul anglicisme visible de la promesse | P2 | remplacer par « Trésorerie » après autorisation explicite |

Le contrôle des connecteurs bannis ou passe-partout — notamment « Il est
important de », « Par ailleurs », « En outre », « De plus », « En conclusion »
et « Il convient de » — retournait déjà **0 occurrence visible**. Aucun
connecteur artificiel n’a donc été ajouté pour fabriquer de la variété.

### O4. Corrections appliquées

Dans la page :

- le héros sépare désormais trésorerie, temps libéré, effets qualitatifs,
  calendrier commun et condition d’arrêt en trois phrases simples ;
- cinq H2 ont été reformulés autour de la conséquence réelle :
  « Une inconnue suffit à arrêter le calcul », « La décision et les bénéfices
  ne commencent pas le même mois », « Les douze familles du TCO doivent
  apparaître », « Trésorerie et valeur économique donnent deux résultats » et
  « Quand une option simple bat le sur-mesure » ;
- les sept autres titres d’action ont été conservés : ils guident réellement
  le lecteur et les changer seulement pour diversifier aurait dégradé la
  précision ;
- le scénario prudent distingue le verdict défavorable des données
  susceptibles de le changer ;
- le CTA propose de « faire vérifier » le dossier économique et de repérer le
  chiffre, le test ou le devis manquant ;
- la conclusion est devenue trois phrases courtes sans perdre une seule
  condition.

Dans le calculateur :

- le titre de résultat nomme les deux sorties, trésorerie et valeur
  économique ;
- les interprétations positive et négative donnent une action directe, sans
  annoncer un abstrait « prochain travail utile » ;
- les valeurs, calculs, champs et embranchements restent strictement
  inchangés.

Dans l’image OG :

- « Cash » a été remplacé par « Trésorerie » ;
- le rendu final reste à **1 200 × 630 px**, sans coupe, collision ou
  débordement visible.

Dans les tests :

- les attentes du calculateur suivent les nouveaux intitulés ;
- un test de non-régression interdit le retour des formulations mécaniques
  supprimées et contrôle le libellé français de l’OG.

Cartographie avant / après sur les surfaces visibles :

| Indicateur | Avant P4 | Après P4 |
|---|---:|---:|
| H2 à l’impératif | 12/12 | 7/12 |
| connecteurs bannis contrôlés | 0 | 0 |
| formulations visibles en `challeng*` | 3 | 0 |
| « prochaine preuve » | 2 | 0 |
| « lecture contradictoire » | 1 | 0 |
| « Cash » dans l’OG | 1 | 0 |

Les rappels `STOP`, « fictif » et « inconnue ≠ zéro » restent présents là où
chaque bloc doit être compris de façon autonome : héros, méthode, outil,
scénarios, FAQ et avertissement. Leur répétition est une barrière contre une
mauvaise décision, pas un tic de style.

### O5. Relecture humaine complète

Après correction, le texte visible de l’élément `<article>` a été extrait du
build servi puis relu intégralement, section par section. La chaîne de décision
reste continue :

1. définir les données qui autorisent ou arrêtent le calcul ;
2. placer décision, coûts et bénéfices sur un calendrier commun ;
3. construire le TCO complet ;
4. séparer trésorerie et capacité économique ;
5. appliquer réalisation et durabilité ;
6. comparer trois scénarios et une option simple ;
7. tester les inconnues dans le calculateur ;
8. transformer le résultat en règles de suivi.

La relecture confirme notamment le scénario central à **M39**, les deux TCO à
**51 200 €** et **54 800 €**, les bénéfices cumulés sur les **44 mois actifs**
à **6 160 €** et **63 437,44 €**, ainsi que les verdicts prudent, favorable et
option simple.
Ces valeurs sont des données fictives explicites et n’ont pas été retouchées
en P4.

Le rendu servi compte **4 625 mots**, soit **23 minutes**. Cette hausse de
11 mots par rapport à P3 provient des reformulations de clarté, pas d’un ajout
de substance ou de remplissage.

### O6. Contrôles exécutés après la dernière correction

| Contrôle | Résultat | Preuve ou limite |
|---|---|---|
| Prompt #4 | OK | DOCX lu intégralement ; 381 lignes, 2 457 mots, fin atteinte |
| Paquet ROI ciblé | 74/74 | 7 fichiers de tests, dont la régression antipasse IA |
| Suite globale | 499/499 | `npm test` |
| SEO standard | 174/174 | `npm run check:seo` |
| ESLint | OK | ciblé puis dépôt complet |
| TypeScript | OK | `npx tsc --noEmit` |
| Espaces Git | OK | `git diff --check` |
| Build production | OK | Next 16.2.12, 62 routes, route ROI et OG générées |
| Artefact SEO | OK | 45 URL de sitemap, 28 liens llms, 45 pages et 78 blocs JSON-LD |
| Route servie | HTTP 200 | H1 unique, canonique correcte et `noindex, nofollow` |
| Données structurées | OK | un `Article`, un `BreadcrumbList`, aucun `FAQPage` |
| Temps de lecture | 4 625 mots, 23 min | mesure sur le HTML de production servi |
| Image OG | HTTP 200 | PNG de 162 537 octets, 1 200 × 630, inspecté en résolution native |
| Audit dépendances | 10 hautes préexistantes | `brace-expansion` et `sharp` via la pile Next/OpenNext ; aucun paquet modifié, remèdes proposés cassants |
| BAT navigateur P4 | à rejouer en G4 | aucun backend `iab` disponible dans cette tâche ; seul Chrome extension était listé et le protocole interdit de changer silencieusement de navigateur |

Le contrôle HTTP et l’inspection native de l’OG prouvent le rendu des surfaces
modifiées. Ils ne sont pas présentés comme un BAT interactif. L’orchestrateur
doit donc rejouer en G4 le bureau, le viewport 390 px, le calculateur, la FAQ,
les CTA, la console et les débordements. Aucun test avec un lecteur humain
externe n’a été mené ; la présente preuve est une relecture éditoriale
exhaustive par l’agent.

### O7. Fichiers modifiés par P4

- `src/app/guides/calculer-roi-application-metier/page.tsx` ;
- `src/app/guides/calculer-roi-application-metier/application-roi-calculator.tsx` ;
- `src/app/guides/calculer-roi-application-metier/opengraph-image.tsx` ;
- `src/app/guides/calculer-roi-application-metier/application-roi-calculator.test.tsx` ;
- `src/app/guides/calculer-roi-application-metier/content-quality.test.ts` ;
- le présent dossier de recherche.

Le moteur, ses tests mathématiques, l’intégration, les redirections, le
sitemap, la gouvernance du catalogue et les trois images éditoriales n’ont pas
été modifiés en P4.

### O8. Gel et verdict P4

Le manifeste
`docs/research/manifests/calculer-roi-application-metier-p4.sha256` couvre les
**16 mêmes fichiers** que le manifeste P3. Sa vérification finale retourne
**16/16**.

Verdict :

- P0 : **0** ;
- P1 : **0** ;
- P2 rédactionnels identifiés : **corrigés** ;
- état : **READY_FOR_ORCHESTRATOR_G4**.

Toute modification d’un fichier couvert par le manifeste P4 invalide ce
verdict et impose de rejouer les contrôles concernés. L’orchestrateur doit
encore effectuer G4, le contrôle transversal indépendant, le BAT final, la
revue des données structurées et le contrôle de publication. P4 ne revendique
ni commit, ni push, ni déploiement, ni publication, ni indexation.

## P. G4 — validation indépendante de l’orchestrateur

Date : 31 juillet 2026

Verdict : **GO_CONTROLE_QUALITE**.

- P0 : **0** ;
- P1 éditorial, factuel, légal, commercial ou logique : **0** ;
- P2 transmis au contrôle transversal : qualifier le poids du DOM et les
  petites cibles tactiles héritées des composants globaux ; conserver une
  preuve explicite du reflow à fort grossissement.

Le manifeste P4 a été vérifié à **16/16** avant le présent ajout. La
comparaison P3/P4 confirme que le moteur, les oracles, les tests
mathématiques, l’intégration, les redirections, le sitemap, le catalogue et
les trois images éditoriales sont inchangés. P4 a modifié uniquement le
dossier, cinq surfaces rédactionnelles ou sociales et leurs assertions de
non-régression.

L’orchestrateur a relu les corrections P4 et confirmé :

- un héros en trois phrases causales, sans cadence artificielle ;
- cinq H2 auparavant mécaniques reformulés, les sept impératifs réellement
  actionnables conservés ;
- des CTA qui demandent un dossier, un chiffre, un test ou un devis au lieu de
  promettre une abstraite « lecture contradictoire » ;
- une conclusion aérée, sans perte de condition ni de frontière `STOP` ;
- le remplacement de « Cash » par « Trésorerie » dans l’image Open Graph,
  rendue en 1 200 × 630 sans débordement ;
- les montants, scénarios, sources, URL, statuts et formules strictement
  inchangés.

Contrôles indépendants rejoués après P4 :

- 74/74 tests ROI ciblés, 499/499 tests globaux et 174/174 contrôles SEO ;
- ESLint complet, TypeScript, `git diff --check`, build de production et
  postbuild verts ;
- 62 routes générées ; artefact SEO à 45 URL de sitemap, 28 liens
  `llms.txt`, 45 pages et 78 blocs JSON-LD ;
- héros, sommaire, corps, calculateur, FAQ, CTA, contact et footer contrôlés
  dans le navigateur intégré ;
- largeurs 320, 360, 390, 430, 640, 768, 1 024, 1 280, 1 440 et 1 600 px :
  largeur du document égale à la largeur du viewport, sans débordement global ;
- paysage 844 × 390 sans débordement ; thème clair et thème sombre lisibles ;
- CTA mobile hors du héros, visible pendant la lecture puis placé sous le
  viewport devant la FAQ et le contact ;
- calculateur central rétabli à 51 200 € de TCO de trésorerie, 54 800 € de
  TCO économique, 8 637,44 € de gain économique net et M39 ;
- rampe partielle H12 / M10 / six mois acceptée, valeur extrême arrêtée avec
  un message `STOP`, scénario prudent calculé sans requête réseau ;
- FAQ pilotable au clavier par flèche droite, panneau et
  `aria-controls` cohérents ;
- H1 unique, canonical auto-référente, robots privés au stade brouillon,
  `Article` et `BreadcrumbList` seulement, aucune `FAQPage` ;
- console sans erreur ni avertissement.

L’ajout de la présente section rend uniquement l’empreinte du dossier du
manifeste P4 historique, conformément au protocole. Aucun fichier de contenu
ou de code n’a été corrigé pendant G4.

Ce verdict autorise exclusivement le contre-audit qualité transversal par un
cinquième agent indépendant. Il ne vaut ni `GO_QUALITE_GUIDE`, ni commit, ni
push, ni déploiement, ni publication, ni indexation.

## Q. Corrections post-audit transversal

Date : 31 juillet 2026

Contexte : le contrôle transversal a rendu `NO_GO` à 90/100 et demandé la
correction de trois P1, complétée par plusieurs P2 locaux. La présente section
décrit le lot corrigé ; elle ne prononce aucun nouveau verdict.

### Q1. Contraste sombre du calculateur

- les suffixes visibles `mois`, `h`, `%` et `€` utilisent désormais
  `dark:text-zinc-300` sur les fonds sombres ;
- tous les champs désactivés partagent
  `dark:disabled:text-zinc-300`, y compris les montants et paramètres des
  lignes connues, inconnues ou non applicables ;
- le contraste calculé de `#d4d4d8` atteint 10,08:1 sur `#27272a` et 11,99:1
  sur `#18181b`, au-dessus du seuil AA pour du petit texte ;
- une régression DOM contrôle chaque suffixe et chaque contrôle désactivé ;
- une assertion de source empêche la disparition silencieuse de ces variantes.

### Q2. Interprétation des deux ROI

La fonction pure exportée `interpretApplicationRoiResult` classe chaque
`RoiValue` selon quatre états : non applicable, négatif, nul ou positif. Le
message visible nomme séparément le ROI de trésorerie et le ROI économique
avant de proposer une action.

Sept branches sont testées :

1. ROI économique non applicable ;
2. ROI économique négatif ;
3. ROI économique exactement nul ;
4. ROI économique positif avec ROI de trésorerie non applicable ;
5. ROI économique positif avec ROI de trésorerie négatif ;
6. ROI économique positif avec ROI de trésorerie nul ;
7. deux ROI positifs.

Deux oracles supplémentaires contrôlent le moteur et le rendu :

- TCO de trésorerie nul, TCO économique positif et ROI économique positif :
  la trésorerie reste `NOT_APPLICABLE` et n’est jamais décrite comme positive ;
- bénéfices exactement égaux aux deux TCO : les deux ROI valent 0 % et sont
  décrits comme nuls, jamais positifs.

Le message économique négatif conserve l’action précédente : réduire le
périmètre, tester une option plus simple ou obtenir la donnée qui pourrait
changer la décision.

### Q3. CTA, contenu et accessibilité

- dans la sidebar contextuelle, le CTA principal
  « Voir le service outils internes » pointe vers
  `/services/outils-internes-sur-mesure` ;
- l’action secondaire affiche le vrai numéro `06 60 08 83 51` et utilise
  `tel:+33660088351`, ce qui rétablit la sémantique téléphone sur ordinateur
  et mobile ;
- les CTA du héros, de la FAQ et de la conclusion conservent
  `/demarrer-un-projet` ;
- l’alternative du visuel 16:9 décrit la maquette de bureau et sa balance
  centrale, sans inventer une équipe absente de l’image ;
- « Timing fréquent » devient « Moment habituel » ;
- le scénario prudent nomme explicitement
  « hébergement + maintenance +15 % » ;
- le scénario central visible précise les enveloppes communes et les trois
  zéros fictifs de sécurité/conformité, évolutions et double exploitation ;
- le message de validation « cash supprimé » devient
  « dépense réellement supprimée » ;
- les bénéfices de 6 160 € et 63 437,44 € sont correctement décrits comme
  cumulés sur 44 mois actifs ;
- les champs numériques invalides exposent `aria-invalid` et relient aide et
  erreur avec `aria-describedby` ; une famille inconnue et un montant connu
  laissé vide reçoivent le même traitement.

### Q4. Fichiers matériels corrigés

- `docs/research/calculer-roi-application-metier.md` ;
- `src/app/guides/calculer-roi-application-metier/page.tsx` ;
- `src/app/guides/calculer-roi-application-metier/application-roi-calculator.tsx` ;
- `src/app/guides/calculer-roi-application-metier/application-roi-calculator.test.tsx` ;
- `src/app/guides/calculer-roi-application-metier/content-quality.test.ts` ;
- `src/lib/application-roi.ts` ;
- `src/lib/application-roi.test.ts`.

### Q5. Contrôles du lot

| Contrôle | Résultat |
|---|---|
| Tests ciblés moteur, calculateur, contenu et intégration | 61/61 |
| Suite globale | 513/513, 80 fichiers |
| Contrôles SEO | 174/174, 33 fichiers |
| ESLint ciblé | OK |
| TypeScript `--noEmit` | OK |
| `git diff --check` | OK |
| Build de production | OK, 62 routes |
| Contrôle postbuild | OK : 45 URL de sitemap, 28 liens `llms.txt`, 45 pages, 3 temps de lecture et 78 blocs JSON-LD |

Le manifeste P4 n’a pas été modifié. Il reste la preuve historique du gel
antérieur et échoue désormais, comme attendu, sur les sept fichiers corrigés.
Ce lot exige donc un nouveau contrôle transversal indépendant et une nouvelle
empreinte qualité avant toute décision. Aucun commit, push, déploiement,
publication ou indexation n’est revendiqué.

## R. Intégration publique locale et BAT final de l’orchestrateur

Date du gel candidat : 31 juillet 2026 à 06:00, heure de Paris.

Statut au début de ce contrôle : le premier audit transversal indépendant a
rendu `NO_GO_QUALITE_GUIDE` à 90/100, sans P0, avec trois P1. Les corrections
Q1 à Q3 ont été appliquées par un agent distinct. Le présent contrôle est celui
de l’orchestrateur avant remise du candidat exact au même contrôleur
indépendant. Il ne vaut pas encore `GO_QUALITE_GUIDE`.

### R1. Passage du brouillon à un candidat publiable

Le candidat n’utilise plus un objet éditorial local marqué
`ready-for-human-review`. Sa fiche provient désormais du registre central
`src/lib/guides.ts`, avec :

- le slug `calculer-roi-application-metier` ;
- le titre « ROI d’une application métier : calcul et cas complet » ;
- une description de carte et une description SEO propres au sujet ;
- une section et un temps de lecture cohérents ;
- les trois visuels réellement livrés ;
- une date de publication et de modification au 31 juillet 2026 ;
- aucun statut éditorial de brouillon.

Cette source centrale alimente le hub, le sitemap et `llms.txt`. Le hub affiche
désormais quatre guides et associe une icône de calculatrice à celui-ci. La
page du service « Outils internes sur mesure » comporte un lien contextuel
entrant intitulé « Calculer le ROI sans inventer les gains ». Le guide n’est
donc pas une page orpheline.

L’ancien renvoi du slug vers la page service a été retiré du registre des
redirections. Le contrat d’intégration vérifie que la future route directe
n’est plus redirigée, que sa canonical est auto-référente et qu’elle rejoint
les surfaces publiques dérivées du registre central.

### R2. Reproduction des contrôles automatiques

Après l’intégration et les deux corrections d’accessibilité transversales
décrites en R4, l’orchestrateur a reproduit les contrôles suivants sur la
version exacte :

| Contrôle | Résultat |
|---|---|
| Suite globale Vitest | 517/517, 82 fichiers |
| Suite SEO | 175/175 |
| ESLint complet | OK |
| TypeScript `--noEmit` | OK |
| `git diff --check` | OK |
| Build de production Next.js | OK, 62 routes |
| Vérification postbuild | OK : 46 URL de sitemap, 29 liens `llms.txt`, 46 pages, 4 temps de lecture et 80 blocs JSON-LD |

Le build local n’est pas assimilé à un déploiement. Le commit de base et
`origin/main` étaient tous deux
`6ceeec6e6c44be94b285624e0ff2471562e60c23` au moment du gel.

### R3. BAT graphique, sémantique et fonctionnel

Le BAT a été exécuté sur un serveur de production local, et non sur le seul
code source.

Les largeurs 320, 360, 390, 430, 640, 768, 1 024, 1 280, 1 440 et
1 600 pixels ont été contrôlées, ainsi qu’un écran mobile en paysage
844 × 390. Après correction, la largeur du document et celle du viewport sont
identiques sur chaque taille standard : aucun débordement horizontal n’est
détecté.

Le contrôle visuel et DOM confirme :

- un seul `h1` et un seul `main#main-content` ;
- une canonical
  `https://hagnere-code.ai/guides/calculer-roi-application-metier` ;
- des robots locaux de production `index, follow`, sans privilège Googlebot
  divergent ;
- exactement deux graphes JSON-LD visibles et fidèles :
  `Article` et `BreadcrumbList`, sans `FAQPage` ;
- une image Open Graph servie en PNG 1 200 × 630 et cohérente avec la page ;
- un hub à quatre guides et un lien entrant descriptif depuis la page service ;
- des CTA cohérents : service principal dans la sidebar, téléphone secondaire
  réel, et démarrage de projet aux endroits éditoriaux prévus ;
- un mode clair et un mode sombre lisibles ;
- une console sans erreur ni avertissement ;
- une FAQ utilisable au clavier, avec changement d’onglet par flèche droite,
  `aria-controls` valide et panneau ouvrable ;
- une barre mobile contextuelle cachée dans le héros et la FAQ, puis visible
  au milieu de la lecture sans masquer le contenu.

Le sitemap et `llms.txt` contiennent chacun le slug une seule fois.

### R4. Contrôle renforcé à 200 % du texte

Le premier passage à 200 % a révélé deux défauts transversaux qui n’étaient pas
apparus aux largeurs nominales :

1. le CTA mobile premium ne permettait pas au lien principal de rétrécir ; le
   numéro de téléphone sortait alors du viewport ;
2. la fonction de l’auteur restait sur la même ligne que son nom et pouvait
   dépasser sur petit écran.

L’orchestrateur a corrigé les composants partagés :

- `min-w-0` permet désormais au CTA principal de se contracter, sans réduire
  ni masquer l’action téléphone ;
- le rôle de l’auteur passe sur une ligne dédiée en mobile et redevient en
  ligne à partir du breakpoint `sm`.

Deux tests de contrat protègent ces comportements. Sur un viewport de
390 pixels et une taille racine de 32 pixels, le nouveau contrôle ne trouve
plus aucun élément contenu qui déborde. Le CTA principal et le téléphone sont
tous deux entièrement dans le viewport ; le libellé complet reste présent
dans le nom accessible même lorsque sa représentation visuelle est tronquée.
La taille racine a été rétablie après le test.

### R5. Oracles indépendants du calculateur

Les résultats n’ont pas été validés en recopiant l’interface. Ils ont été
comparés aux formules et aux scénarios du dossier.

| Scénario | Trésorerie | Économique | Résultat économique net | ROI économique | Retour |
|---|---:|---:|---:|---:|---|
| Central | 51 200 € | 54 800 € | +8 637,44 € | +15,8 % | M39 |
| Prudent | 58 160 € | 61 760 € | −39 139,25 € | −63,4 % | Aucun |
| Favorable | 48 500 € | 52 100 € | +33 147,76 € | +63,6 % | M26 |

Le résultat de trésorerie net du scénario central est −45 040 €. Celui du
scénario prudent est −56 004 €. Ces valeurs confirment que le guide ne
transforme pas artificiellement une création de capacité en économie de cash.

Les branches suivantes ont aussi été exercées dans le navigateur :

- famille inconnue : calcul bloqué avec message `STOP`, `aria-invalid` et
  `aria-describedby` ;
- famille non applicable : calcul autorisé et texte désactivé lisible ;
- famille connue sans montant : calcul bloqué et erreur de montant ;
- rampe partielle H12 / M10 / six mois : calcul accepté ;
- valeur horaire extrême `1e308` : débordement numérique arrêté par un
  message `STOP` ;
- restauration du montant connu à 4 000 € après le test d’erreur.

### R6. Lighthouse et limites honnêtement conservées

Deux mesures mobiles successives du même candidat ont produit des scores de
performance de 83 puis 89. La plage 83–89 est donc conservée ; seul le meilleur
score ne doit pas être présenté comme s’il était stable.

Sur la dernière mesure mobile :

- performance : 89 ;
- accessibilité : 100 ;
- bonnes pratiques : 100 ;
- SEO : 100 ;
- FCP : 1,8 s ;
- LCP : 3,5 s ;
- CLS : 0 ;
- TBT : 30 ms ;
- Speed Index : 1,8 s ;
- TTI : 4,9 s.

La mesure desktop est à 100/100 sur les quatre catégories, avec un LCP à
0,7 s, un CLS à 0 et un TBT à 0 ms.

Le LCP mobile est le paragraphe d’introduction du héros, pas une image. La
variation vient principalement du délai de rendu simulé. Le document comporte
2 872 éléments DOM, conséquence mesurable d’un long guide, de son calculateur,
de ses tableaux et de sa FAQ. Une image sous le héros pourrait économiser
environ 18 Kio et des scripts partagés environ 53 Kio de JavaScript inutilisé
sur cette route. Ces éléments restent des P2 de performance : ils ne produisent
ni défaut d’accessibilité, ni erreur fonctionnelle, ni instabilité de mise en
page, mais doivent être conservés dans le rapport au lieu d’être masqués.

### R7. Frontière de décision

Le candidat exact doit maintenant être figé par un nouveau manifeste SHA-256
et soumis en lecture seule au contrôleur transversal indépendant. Le seuil
reste :

- zéro P0 et zéro P1 ;
- score global au moins égal à 90/100 ;
- chaque axe au moins égal à 8/10 ;
- axes valeur lecteur, exactitude, calcul, UX et contrôle final au moins égaux
  à 9/10.

Toute correction ultérieure invalidera le verdict et imposera une nouvelle
empreinte puis un nouveau contrôle. À ce stade, aucun commit, push,
déploiement, publication, preuve publique, découverte Google ou indexation
n’est revendiqué.

## S. Contre-audit qualité indépendant final

Date du verdict : 31 juillet 2026 à 06:22, heure de Paris.

Agent : cinquième agent indépendant, distinct des quatre agents de rédaction
et de l’agent de correction. Mission strictement en lecture seule.

Périmètre audité :
`docs/research/manifests/calculer-roi-application-metier-quality-candidate.sha256`.

- SHA-256 du manifeste candidat :
  `46fde6266e5d3d347583196c7f504f6457c7060944c6f7796dc71589f5e8ea5e` ;
- contrôle initial : 28/28 fichiers conformes ;
- contrôle final après BAT : 28/28 fichiers conformes ;
- aucun fichier modifié par l’auditeur.

### S1. Reproduction indépendante

| Contrôle | Résultat |
|---|---|
| Suite globale | 82 suites, 517/517 tests |
| Suite SEO | 33 suites, 175/175 tests |
| ESLint | OK |
| TypeScript | OK |
| `git diff --check` | OK |
| Artefact SEO de production | OK : 46 URL et 46 pages contrôlées |
| Route locale | HTTP 200, sans redirection |
| Image Open Graph | HTTP 200, PNG valide |
| Console navigateur | aucune erreur ou alerte |
| Réseau navigateur | aucune requête en échec |
| Lighthouse mobile | 85 / 100 / 100 / 100, CLS 0 |
| Lighthouse desktop | 99 / 100 / 100 / 100 |

Les quatre scores Lighthouse sont, dans l’ordre, performance, accessibilité,
bonnes pratiques et SEO. La mesure mobile indépendante se situe dans la plage
83–89 déjà observée par l’orchestrateur.

### S2. Recontrôle des trois anciens P1

Les trois défauts qui avaient provoqué le premier `NO_GO` sont corrigés :

1. les suffixes, unités et états désactivés atteignent un contraste sombre
   compris entre 10,08:1 et 11,99:1 ;
2. les seize combinaisons des états de ROI trésorerie et économique ont été
   exécutées ; les états non applicable, négatif, nul et positif ne sont plus
   confondus ;
3. le CTA contextuel pointe vers le service réel, le numéro reste une vraie
   action téléphone et son nom vocal est « Appeler 06 60 08 83 51 ».

À 200 % de texte, le CTA et le téléphone restent disponibles à 320 et
390 pixels. Le rôle de l’auteur passe sur une ligne dédiée en mobile.

### S3. Oracles recalculés hors moteur

| Scénario | TCO économique | Gain économique | ROI économique | Retour |
|---|---:|---:|---:|---:|
| Central | 54 800 € | 63 437,44 € | +15,76 % | mois 39 |
| Prudent | 61 760 € | 22 620,75 € | −63,37 % | aucun |
| Favorable | 52 100 € | 85 247,76 € | +63,62 % | mois 26 |

Le scénario central passe de −580,16 € au mois 38 à +461,60 € au mois 39.
Les branches STOP — sécurité inconnue, montant obligatoire vide, valeur
invalide ou hors plage et hypothèse laissée inconnue — empêchent bien la
fabrication d’un résultat.

### S4. Valeur, sources et intégration

Le contrôleur confirme la couverture des cinq inconnues bloquantes, des douze
familles de coût, des deux lectures de rentabilité, du cas complet, des trois
scénarios, des alternatives, de l’adoption, de la sécurité, de la dépendance
fournisseur, des stress tests, du protocole de mesure, des règles de décision
et des neuf questions fréquentes.

Les enveloppes du cas sont présentées comme fictives et les inconnues ne sont
pas silencieusement transformées en zéros. Les affirmations externes sensibles
ont été rapprochées des sources actuelles France Num, Insee, CNIL et ANSSI.
Aucun faux témoignage, résultat client inventé, rendement garanti ou chiffre
commercial sans preuve n’a été trouvé.

L’intégration locale est cohérente :

- entrée unique dans le registre central, sans statut brouillon ;
- présence unique dans le hub, le sitemap et `llms.txt` ;
- ancienne redirection retirée ;
- lien entrant depuis la page service ;
- canonical exacte et robots de production `index, follow` ;
- image Open Graph et trois visuels d’article dédiés ;
- un seul H1 ;
- `Article` et `BreadcrumbList` uniquement, sans `FAQPage`, `HowTo`,
  `Review` ou `AggregateRating`.

### S5. Notation

| Axe | Note |
|---|---:|
| 1. Valeur apportée au lecteur | 10/10 |
| 2. Exactitude et fraîcheur | 9/10 |
| 3. Calculs et robustesse | 10/10 |
| 4. Sources et traçabilité | 9/10 |
| 5. UX et accessibilité | 9/10 |
| 6. Clarté, pédagogie et naturel | 9/10 |
| 7. SEO, données structurées et indexabilité | 10/10 |
| 8. Décision et conversion éthique | 10/10 |
| 9. Maintenabilité et régressions | 9/10 |
| 10. Contrôle final et niveau de preuve | 10/10 |

Score global : **95/100**.

- P0 : aucun ;
- P1 : aucun.

Tous les axes sont au moins à 8/10. Les axes obligatoires 1, 2, 3, 5, 7 et 10
sont au moins à 9/10.

### S6. Résidus non bloquants conservés

P2 :

1. à 320 pixels et 200 % de texte, le nom de l’auteur dépasse d’environ
   17 pixels la bordure décorative de sa carte, tout en restant intégralement
   dans le viewport, sans chevauchement ni défilement horizontal ;
2. le libellé visuel du CTA principal est tronqué à 200 % pour préserver le
   téléphone ; son nom accessible reste complet et les deux actions restent
   utilisables ;
3. la performance mobile de laboratoire reste perfectible : score 85,
   LCP 4,245 s et 2 872 éléments DOM, avec CLS, TBT, accessibilité et SEO
   satisfaisants ;
4. `npm audit --omit=dev` signale dix alertes hautes transitives, aucune
   critique, dans la chaîne Next/OpenNext et ses dépendances. Le correctif
   automatique proposé est cassant et sort du périmètre éditorial ; ce chantier
   plateforme doit être traité séparément.

P3 opérationnels :

- confirmer les dates publiées lors du déploiement réel ;
- ne pas confondre contrôle local, disponibilité publique, données CrUX et
  indexation Google ;
- refaire une empreinte et un contre-audit après toute correction matérielle.

### S7. Verdict

`GO_QUALITE_GUIDE`

Ce verdict porte exclusivement sur le candidat figé. L’ajout du présent
compte-rendu au dossier ne modifie aucun fichier de page, de calcul, de test,
d’intégration ou d’image audité. Une empreinte finale doit couvrir ce journal
avant le commit. À cet instant, le verdict ne prouve encore ni commit, ni push,
ni déploiement, ni publication publique, ni indexation.
