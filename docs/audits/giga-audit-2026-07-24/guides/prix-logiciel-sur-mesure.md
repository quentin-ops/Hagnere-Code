# Audit approfondi — `prix-logiciel-sur-mesure`

Date : 24 juillet 2026

Auditeur concurrentiel : agent P3 indépendant — France, États-Unis,
Royaume-Uni et zone DACH

Snapshot : `src/app/guides/prix-logiciel-sur-mesure/page.tsx`, rendu local
`http://localhost:3010/guides/prix-logiciel-sur-mesure`, dossier P1
`docs/research/prix-logiciel-sur-mesure.md`.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant ou responsable métier qui hésite entre garder Excel/Access, acheter un SaaS, automatiser un flux, utiliser du no-code ou financer un logiciel spécifique.
Question réelle : « Le prix annoncé est-il cohérent avec ce que j'obtiens, et comment éviter de payer un outil qui ne résout pas le vrai problème ? »
Décision attendue : mesurer le coût actuel, comparer les options sur le même parcours, obtenir des devis comparables, puis lancer, réduire, reporter ou abandonner le développement.
Réponse actuelle en une phrase : un logiciel simple peut être planifié autour de 5 000–15 000 €, mais seul un périmètre identique, un devis détaillé et un TCO 36/60 mois permettent de décider.
Défaut qui coûte le plus de valeur : les fourchettes 5 000–250 000 € et les délais sont utiles comme repères, mais les quatre sources sont des vendeurs et la page n'offre pas encore de scénarios égaux avec TCO 12/36/60 mois, sensibilité et contrôle inverse.
Niveau actuel : B
Priorité : haute
Statut : audité ; non corrigé et non contre-audité
P0 : 0 ; P1 : 6 ; P2 : 3
Verdict : NO-GO comme guide de référence au seuil de 90/100. Base éditoriale humaine et utile, mais aucune porte P1–P4 n'est considérée franchie sur ce snapshot.
```

Le guide est bien meilleur qu'une simple page « à partir de X € » : il ouvre sur
la situation du dirigeant (`page.tsx:240-248`), propose quatre options,
valorise le coût du fonctionnement actuel, lit un devis fictif ligne par ligne,
sépare coût de création et exploitation, traite l'accès au code et sait dire
« ne développez pas ». Le cas Bréban et le devis de tournées sont clairement
fictifs. La page protège aussi le lecteur contre les taux universels de
maintenance et les faux pourcentages.

Elle ne passe pas le portail de référence pour trois raisons. Premièrement, la
fourchette centrale repose encore sur quatre grilles commerciales et peut
ancrer une PME sur une amplitude arbitraire. Deuxièmement, le guide annonce un
TCO mais ne chiffre réellement qu'un exemple de création ; les horizons 12 et
60 mois, la maintenance, l'hébergement et les coûts d'adoption restent des
postes à remplir. Troisièmement, le repère Insee est correctement étiqueté
« ensemble marchand » à 44,70 € dans la page et dans le dossier de recherche.
Il reste cependant un repère moyen portant sur les entreprises d'au moins dix
salariés, et non le coût réel du poste ou de l'entreprise du lecteur. La page
formule déjà cette limite ; la réécriture devra la conserver au contact du
calcul.

### Score avant correction

| Axe | Note /10 | Preuve localisable | Manque décisif |
| --- | ---: | --- | --- |
| Intention | 9 | ouverture `:240-248`, question budget/alternatives | dire explicitement que les fourchettes ne sont pas un prix de marché et que le lecteur doit comparer un résultat, pas une technologie |
| Décision | 8 | options `:363-400`, plan de devis/TCO `:734-837` | pas de seuil de décision ni de contrôle inverse propre à un cas égalisé |
| Pédagogie | 9 | quatre options, formule coût actuel `:401-454`, devis expliqué `:666-732` | beaucoup de chiffres et de tableaux peuvent être hiérarchisés par scénario humain |
| Profondeur | 8 | cadrage, jours, intégrations, données, maintenance, code et sortie `:549-878` | TCO 12/36/60 incomplet, sécurité/continuité/adoption et coût du statu quo non liés à un même cas |
| Preuve | 7 | quatre grilles commerciales `:291-314`, sources Insee/France Num/Silkhom/droit `:891-1027` | prix concurrents non primaires ; dates au 20/07 ; TJM et fourchettes ne prouvent aucun devis |
| Comparaison | 8 | tableur/SaaS/no-code/sur-mesure `:363-400`, quatre options TCO `:799-822` | pas de scénario identique à 12/36/60 mois incluant support, risques et valeur métier |
| Originalité | 8 | devis fictif de 50 jours, « montant inconnu », propriété et reprise | pas de feuille de sensibilité ni d'exemple montrant le coût d'une mauvaise décision |
| Style | 8 | voix honnête, avertissements, CTA non agressif | les fourchettes et délais dans hero/key points ancrent un lecteur avant qu'il voie les limites |
| Conversion | 8 | CTA après alternatives `:880-889`, proposition de comparer avant devis | aucun artefact téléchargeable ou livrable précis pré-rempli |
| SEO/produit | 8 | H1, Article/BreadcrumbList, canonical et 2 JSON-LD attendus | `dateModified: 2026-07-21`, page locale noindex, déploiement et indexation non prouvés |

**Total : 81/100.** Aucun P0 ne bloque la compréhension immédiate. Le score
reste sous le seuil de référence parce que les prix commerciaux, les scénarios
non égalisés et le TCO incomplet empêchent encore une décision reproductible.

## 2. Ce que le guide dit réellement

### Progression

Le guide suit une progression logique : fourchettes et délai (`:291-361`),
options (`:363-400`), coût actuel et ROI (`:401-454`), prix par usage
(`:456-547`), causes de l'écart (`:549-664`), devis fictif (`:666-732`), TCO et
alternatives (`:734-837`), propriété du code (`:839-878`) puis CTA et sources.

L'introduction dit au dirigeant qu'un abonnement, une automatisation ou une
amélioration du fichier peuvent être de meilleurs choix. C'est la bonne opinion
professionnelle : le sur-mesure n'est pas la conclusion commerciale par défaut.

### Valeur démontrée

- La phrase « cinq personnes ressaisissent… dix heures par semaine » (`:351-361`)
  transforme un problème abstrait en mesure exploitable.
- Le gain annuel distingue capacité et économie de trésorerie (`:413-445`) et
  rappelle que 47 semaines est une hypothèse, non un fait.
- Le devis de 50 jours à 650 € HT est entièrement vérifiable (`:675-698`) et
  montre que mobile, intégration, données, tests et transfert comptent.
- La grille de devis demande fonctions, exclusions, résultats observables,
  validateur et remise en cas d'arrêt (`:716-732`).
- Le TCO refuse le vieux raccourci « 15 % de maintenance » et conserve les
  inconnues (`:734-798`).
- Les clauses de code, accès, données et composants tiers sont présentées comme
  une vigilance à faire valider, pas comme un conseil juridique (`:839-878`).

### Lacunes décisionnelles

La page sait compter les postes mais ne donne pas encore le même scénario aux
quatre options. Un « logiciel métier » peut signifier 2 écrans pour un atelier
ou une application mobile connectée à trois logiciels ; comparer 15–60 k€ à une
licence SaaS devient alors une comparaison de mots.

Les montants d'« outil simple », « logiciel métier » et « plateforme » sont
placés dans le hero/key points avant que le lecteur découvre qu'ils viennent de
vendeurs. Le guide doit donner le contexte et le périmètre avant l'ancrage.

Le TCO comporte une formule sur trois ans mais aucun tableau 12/36/60 réellement
rempli. Le coût de maintenance, d'hébergement, de support, d'évolutions,
d'adoption, de sécurité et de sortie reste à confirmer. Cela est honnête, mais
pas encore suffisant pour une décision financière.

## 3. Benchmark France et international

Requêtes relancées le 24/07/2026 : `prix logiciel sur mesure`, `coût application
métier`, puis équivalents anglais au Royaume-Uni et aux États-Unis, et allemand
pour la zone DACH. Les pages concurrentes documentent la couverture et les
angles, jamais une preuve de tarif. Les prix de prestataires ne sont pas repris
comme faits.

| Ressource et URL directe | Marché | Réponse utile | Limite/biais | Apport à intégrer ou à réfuter |
| --- | --- | --- | --- | --- |
| [LMS Design — coût application métier](https://lmsdesign.fr/blog/cout-application-metier-sur-mesure) | France | enveloppes, catégories SaaS/MES, intégrations | prestataire, périmètres internes non publiés | garder l'amplitude comme benchmark commercial uniquement |
| [FTEL — budget application sur mesure](https://www.ftel.fr/budget-d-une-application-sur-mesure-comprendre-les-couts-et-faire-les-bons-choix) | France | simple/intermédiaire/complexe et facteurs | grille d'agence, pas échantillon de devis | demander fonction, jours et livrables avant le montant |
| [Aquilapp — application web 2026](https://www.aquilapp.fr/ressources/developpement-sur-mesure/cout-application-web-sur-mesure) | France | 5–15 k€ simple, puis paliers et facteurs | définitions vendeur | confirmer l'intérêt d'un périmètre, pas d'une tranche |
| [PeakLab — application métier 2026](https://peaklab.fr/blog/application-metier-sur-mesure) | France | 15–50 k€ MVP, 40–150 k€ métier, 80–250 k€ SaaS | agence ; multiplie des affirmations de maintenance et de productivité sans protocole égalisé | à signaler comme couverture, ne pas reprendre « 60 % » ou « 15–25 % » |
| [Simon Janvier — logiciel métier](https://www.simonjanvier.com/ressources/articles/cout-logiciel-metier-sur-mesure/) | France | explique pourquoi une fourchette ne suffit pas et distingue module/application | consultant, retour moyen « <2 ans » non preuve universelle | renforcer l'exemple reconnaissable mais retirer toute moyenne ROI |
| [Make IT Simple — bespoke software UK](https://www.makeitsimple.co.uk/blog/how-much-does-bespoke-software-cost-uk) | Royaume-Uni | small £20–60k, mid £60–200k, enterprise £200–600k+ | vendeur, fourchettes très larges | comparer périmètre et devise, jamais convertir automatiquement en euros |
| [SWF Consultancy — bespoke cost UK](https://www.swfconsults.co.uk/blog/bespoke-software-cost/) | Royaume-Uni | module £3–8k, application £12–30k, legacy £30–80k+ | revendique une baisse de délai IA de 80 % sans preuve indépendante | intégrer une objection IA et exiger même garanties/QA |
| [Zealousys — UK cost examples](https://zealousys.com/blog/custom-software-development-cost-uk/) | Royaume-Uni/US | budget illustratif d'un outil logistique | agence offshore/nearshore, périmètre à vérifier | utile pour exiger des exemples de lignes et tests |
| [Resourcifi — custom software cost](https://www.resourcifi.com/insights/custom-software-development-cost/) | États-Unis | relie tarifs à Clutch et régions | source secondaire et intéressée | ne pas reprendre les taux sans source et même rôle |
| [UK Digital Marketplace — bespoke pricing PDF](https://assets.applytosupply.digitalmarketplace.service.gov.uk/g-cloud-13/documents/713847/609510663793327-pricing-document-2022-05-11-1012.pdf) | Royaume-Uni, achat public | prix horaire £110 HT d'une offre documentée | 2022, fournisseur précis, pas marché privé | montrer la forme d'un document d'achat, pas généraliser le £110 |
| [DACH search — custom software costs](https://www.google.com/search?q=custom+software+development+cost+Germany+2026) | Allemagne/DACH | contenus allemands souvent segmentés par Tagesatz, projet et Mittelstand | résultats mouvants, pages commerciales ; aucune source primaire de marché stable | rester sur la méthode égalisée et l'euro HT, ne pas inventer un benchmark DACH |

### Saturation

La concurrence sait produire une fourchette. Elle sait moins souvent expliquer
ce qui est réellement livré, qui décide, quelle charge reste chez le client,
comment le projet sort du prestataire, et ce que coûtera l'année 4. L'opportunité
est de réduire l'ancrage « 5–250 k€ » et de faire du périmètre, du TCO et de la
réversibilité le produit éditorial principal.

## 4. Matrice de gain d'information

| Question | Couverture actuelle | Manque | Réponse supérieure |
| --- | --- | --- | --- |
| Combien prévoir ? | fourchettes `:291-349` | sources vendeurs et périmètres différents | repères bornés par un mini-cas et distinction planning/prix |
| Comment comparer deux devis ? | même cahier, jours, résultats `:614-732` | pas de contrôle égalisé 12/36/60 | grille A/B avec hypothèses, exclusions, taxes, maintenance et sortie |
| Qu'est-ce qui coûte le plus ? | équipe, finition, intégrations, données | pas d'analyse de sensibilité | montrer +1 rôle, +1 intégration, +1 année et leur effet |
| Le vieux fichier coûte-t-il plus cher ? | 12 h/semaine, capacité `:413-445` | aucun coût d'erreur/retard dans le même cas | coût actuel + coût du statu quo + contrôle inverse |
| Quand l'automatisation suffit-elle ? | quatre options `:363-400` | pas de gain par flux comparé au logiciel complet | scénario automatisation 1 flux/3 flux avec limites et sortie |
| Le sur-mesure est-il rentable ? | formule ROI générale | aucun TCO spécifique rempli | 12/36/60 mois standard vs spécifique, maintenance et valeur attribuable |
| Quel délai prévoir ? | scénarios 3 semaines–18 mois | pas de dépendances ni critères de fin | planning par lot, validation, données, accès, recette et décision |
| À qui appartient le logiciel ? | clauses et composants `:839-878` | chaîne prestataire/salarié/open-source/hébergement non détaillée | checklist contractuelle à faire valider juridiquement |
| Que se passe-t-il après ? | TCO et sortie listés | pas de RTO/RPO, support, astreinte ou migration | année 1/3/5, support, sauvegarde, transfert et test de reprise |
| Que promet le CTA ? | comparaison avant budget | livrable de cadrage non montré | feuille de périmètre + TCO + option de ne pas développer |

## 5. Faits et fraîcheur

| Affirmation | Verdict | Source primaire / actuelle | Périmètre | Correction |
| --- | --- | --- | --- | --- |
| Insee 44,70 € « dans l'ensemble marchand » | **confirmé** | [Insee, table publiée le 02/07/2026](https://www.insee.fr/fr/statistiques/2381340), 2025 : services marchands 44,2 €, ensemble marchand 44,7 € | entreprises de 10 salariés ou plus, France, apprentis inclus | conserver l'étiquette « ensemble marchand », le champ et l'invitation à utiliser le coût réel du lecteur |
| Quatre grilles donnent 5–15 / 15–60 / 60–250 k€ | invérifiable comme « marché » ; confirmé comme synthèse de vendeurs | pages LMS/FTEL/Aquilapp/PeakLab liées `:456-498` | fournisseurs, définitions et périmètres propres | présenter comme repères commerciaux, pas fourchette consolidée ; ajouter dates et limites dans le hero |
| Erreurs de tableur et cas TransAlta/PHE | confirmé dans leur source, non extrapolable | Panko arXiv, The Register, GOV.UK liés dans recherche | cas et populations propres | conserver seulement si l'apport pédagogique est clair ; pas de taux de risque individuel |
| 650 € HT/jour est un tarif | faux si lu comme marché | hypothèse éditoriale `:626-647` | exemple de calcul | garder « variable pédagogique », demander le TJM du devis |
| 2–15 jours/intégration | seulement affiché par LMS Design | source commerciale, pas standard | documentation, flux, tests et supervision non universels | supprimer le caractère « seule charge sourcée » si non recoupé, garder comme borne de devis d'un vendeur |
| L.131-3 CPI impose une cession écrite des droits et leur étendue | confirmé dans le principe | [Légifrance L.131-3](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958) | contrat et droits français ; conseil nécessaire | vérifier que « payer ne transfère pas » est formulé avec les exceptions applicables |
| Droits logiciels salariés soumis à L.113-9 | confirmé mais hors page visible | [Légifrance L.113-9](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039279818) | salarié et employeur, pas chaîne complète d'un prestataire | expliquer que composant tiers, contrat de travail et sous-traitance demandent analyse |
| HDS peut s'appliquer à des données de santé | confirmé conditionnellement | [Agence du Numérique en Santé](https://esante.gouv.fr/labels-certifications/hebergement-des-donnees-de-sante) | qualification données/rôle/hébergement | garder « identifier l'obligation », jamais « HDS obligatoire » sans cas |
| Fourchettes maintenance ne doivent pas être un pourcentage | position prudente | dossier et page `:734-798` | dépend du contrat, criticité, fréquence et service | conserver et calculer à partir de factures/engagements |

### Contradictions à corriger

- **Repère Insee correctement borné :** le texte et le dossier disent bien
  44,70 € pour « l'ensemble marchand », valeur confirmée par la table Insee
  2025. Le calcul 12×47×44,70 ≈ 25 200 est arithmétiquement cohérent. Ce
  repère ne devient pas pour autant le coût réel d'un poste : le guide demande
  déjà au lecteur de le remplacer par sa donnée.
- Les key points « outil simple : 5 000–15 000 € » et « logiciel métier :
  15 000–60 000 € » apparaissent avant la nuance « sources commerciales ».
- La FAQ affirme que les fourchettes proviennent de quatre grilles françaises,
  mais la page ne distingue pas une moyenne, une enveloppe de vendeur et une
  hypothèse Hagnéré au premier écran.
- Le guide promet un « coût complet » mais le tableau de trois ans ne calcule
  pas le montant des lignes récurrentes : « inconnu » est honnête, mais ne doit
  pas être présenté comme un TCO final.

### Faits à retirer ou borner

- toute fourchette qui pourrait être lue comme tarif Hagnéré Code ;
- tout délai comme engagement de livraison ;
- toute conversion de l'incident TransAlta/PHE en risque d'une PME ;
- tout taux de maintenance, productivité IA ou ROI sans population, mesure et
  horizon ;
- toute conclusion juridique automatique sur code, HDS ou propriété.

## 6. Scénarios et calculs à construire

### Contrôles des calculs présents

```text
Capacité Bréban : 16 h/semaine × 47 × 44,70 = 33 614,40 €
Devis fictif : 50 jours × 650 € = 32 500 € HT
Intégration illustrative : 2×650 = 1 300 € ; 15×650 = 9 750 € HT
```

Ces calculs sont justes sous les hypothèses publiées. La valeur 44,70 est bien
étiquetée « ensemble marchand » et doit être remplacée par le coût réel du
lecteur dès qu'il est connu. Le calcul de capacité ne devient une économie que
si les heures sont réaffectées ou une dépense évitée.

### Scénarios à périmètre égal

Le correctif doit conserver les fourchettes comme repères, puis proposer un cas
normalisé pour trois options, avec les mêmes livrables :

**Cas central :** PME de 12 personnes, 5 utilisateurs métier, 1 processus de
devis → validation → facture, 2 intégrations documentées, 10 000 lignes à
reprendre, accès par rôles, sauvegarde, export, support ouvré, formation de
groupe, 36 mois ; toutes les taxes et remises sont séparées.

| Poste sur 12/36/60 mois | SaaS/outil existant | No-code/automatisation | Sur-mesure | Preuve attendue |
| --- | ---: | ---: | ---: | --- |
| abonnement/licences/options | devis × mois | licences × mois | 0 ou services tiers | page tarifaire et contrat |
| cadrage/configuration | jours × taux | assemblage/tests | conception/architecture | devis par livrable |
| migration/qualité/rollback | échantillon × heures | idem | script + contrôles | volume et règles |
| intégrations/monitoring | connecteurs + limites | connecteurs + supervision | développement + hébergement | flux et erreurs |
| formation/adoption/support | heures + récurrence | idem | idem + transfert | journal 30/90 jours |
| infrastructure/sauvegardes/sécurité | facture | facture | facture + contrôles | contrat et test |
| évolutions et maintenance | roadmap/contrat | reconstruction éventuelle | maintenance couverte | tickets et SLA |
| sortie/réimport | export + heures | export + heures | remise code/données | test d'export |
| **TCO 12 / 36 / 60** | somme + inconnues | somme + inconnues | somme + inconnues | aucune inconnue = zéro |

### Formules, sensibilité et contrôle inverse

```text
TCO(H) = création/mise en place
       + licences, infrastructure et services pendant H mois
       + migration, formation, support, maintenance et évolutions
       + sécurité, sauvegardes, supervision et temps interne
       + sortie, transfert et réimport

Gain attribuable = heures réellement supprimées × semaines travaillées × coût chargé
                 + dépenses réellement évitées − coûts nouveaux

ROI(H) = (gains attribuables cumulés − TCO(H)) / TCO(H) × 100
Mois de retour = premier mois où gains cumulés ≥ coûts cumulés
```

**Sensibilité pédagogique :** si 12 h/semaine sont mesurées, 47 semaines et
44,70 € donnent environ 33 600 € de capacité annuelle. À 6 h, la capacité est
environ 16 800 € ; à 18 h, environ 50 400 €. Cela ne prouve ni économie ni
rentabilité : vérifier la réaffectation, le coût de support et la valeur du
processus.

**Sensibilité d'exploitation :** 500 €/mois d'infrastructure et support sur 60
mois représentent 30 000 € ; 1 500 €/mois représentent 90 000 €. Le montant
initial peut devenir minoritaire. Les valeurs sont illustratives et doivent
être remplacées par factures/contrats.

**Contrôle inverse :** si un devis spécifique est de 50 000 € et que le coût
annuel évitable est estimé à 20 000 €, le retour mécanique est 30 mois avant
maintenance et risque. Si les coûts d'exploitation ajoutent 1 000 €/mois,
l'économie disparaît ; le calcul invite à mesurer, il ne conclut pas seul.

**Horizon :** 12 mois pour décider rapidement, 36 mois pour comparer une mise
en place et 60 mois pour faire apparaître maintenance, réversibilité et
reconstruction.

**Inclus/exclus :** chaque scénario doit préciser HT/TTC, taxes, remises,
indexation, hébergement, support, sécurité, équipe, coût de l'arrêt, coût du
report, valeur attribuable et conseil juridique.

## 7. Comparaison et position professionnelle

| Option | Meilleur usage | Risque/coût dominant | Quand elle gagne | Position Hagnéré Code |
| --- | --- | --- | --- | --- |
| Conserver Excel/Access | usage rare, compris, faible risque | temps, erreur, dépendance, sauvegarde | aucun résultat critique et mesure stable | ne pas développer pour moderniser l'image |
| Automatisation ciblée | ressaisie dans un flux identifiable | limites API, erreurs, abonnement, reconstruction | 1–3 flux et gain mesuré | souvent le meilleur premier lot |
| SaaS/no-code | besoin standard, besoin de tester vite | licences, dépendance, limites, sortie | outil existant couvre le parcours | tester avant toute construction |
| Sur-mesure resserré | règle métier différenciante et récurrente | création, sécurité, maintenance, transfert | écart prouvé et capacité interne disponible | choix conditionnel, après TCO égalisé |
| Report | organisation sans décideur ou utilisateurs disponibles | coût du statu quo | personne ne peut tester/maintenir | conclusion responsable, pas échec |

**Opinion tranchée :** pour une TPE/PME qui perd du temps dans un seul flux,
nous déconseillons le « logiciel complet » vendu avant mesure. Commencer par
sécuriser le fichier, automatiser le flux ou piloter un module. Le sur-mesure
devient défendable lorsque la règle spécifique reste importante après un essai,
que le coût de contournement est mesuré, et que l'entreprise peut financer la
maintenance et la reprise. Cette position protège aussi contre une vente
opportuniste de Hagnéré Code.

**Cas inverse :** un secteur sensible, plusieurs rôles, une intégration
propriétaire, une obligation d'exploitation ou une dépendance forte à une
personne peuvent rendre le tableur/automatisation irresponsable. Dans ce cas,
un logiciel spécifique ou une solution standard robuste gagne, mais seulement
avec sécurité, disponibilité, support et sortie chiffrés.

## 8. Objections et cas limites

| Objection | Réponse prouvée | Incertitude | Décision |
| --- | --- | --- | --- |
| « Donnez-moi simplement un prix. » | le périmètre, données, intégrations et niveau de finition changent le devis `:549-583` | résultat exact, utilisateurs, risques | cadrer une première tranche et une hypothèse |
| « 5 000–15 000 € suffit pour mon outil. » | repère commercial, pas prix de marché | fonctions, tests, reprise, sécurité | ne pas signer sans liste de livrables |
| « Un SaaS coûte moins cher qu'un développement. » | dépend des licences, options, administration, sortie et durée | horizon 12/36/60 | remplir les deux colonnes au même parcours |
| « L'IA a divisé les coûts. » | une affirmation de vendeur n'est pas une preuve ; la QA, la sécurité, le produit et la responsabilité restent | gain propre au projet | demander quelle ligne et quelle garantie changent |
| « On peut prévoir 15 % de maintenance. » | aucun pourcentage universel ; page demande contrat/factures `:734-798` | criticité, support, incidents | chiffrer service et fréquence, conserver inconnu |
| « Le code nous appartient puisque nous avons payé. » | droits, cession/licence, composants et remise doivent être écrits `:839-878` | contrat, salariat, sous-traitance | faire relire par un juriste |
| « Le vieux fichier n'est pas si cher. » | mesurer quatre semaines, heures, erreurs et retards `:401-454` | coût réel et réaffectation | calculer coût actuel avant de choisir |
| « Il faut tout refaire. » | stabiliser, remplacer progressivement ou reconstruire sont trois options `:824-830` | état du code/données | comparer risques, coexistence et sortie |

## 9. Plan de réécriture localisable

| Ordre | Section | Correction | Décision produite |
| ---: | --- | --- | --- |
| 1 | Hero + réponse `:240-361` | déplacer la nuance commerciale avant les fourchettes et conserver le champ exact du repère Insee | repère de planification, pas prix promis |
| 2 | Options `:363-400` | conserver quatre options, ajouter une ligne « responsabilité/support/sortie » | première option à tester |
| 3 | Coût actuel `:401-454` | cas simple/central/exigeant, heures réellement évitables, coût d'erreur et contrôle inverse | investir, automatiser, mesurer encore |
| 4 | Fourchettes `:456-547` | réduire l'ancrage, associer chaque tranche à résultat, rôles, données, intégrations et niveau de support | périmètre compréhensible |
| 5 | Devis `:549-732` | garder le devis fictif, ajouter scénario A/B identique et exclusions | devis réellement comparables |
| 6 | TCO `:734-837` | remplir 12/36/60, maintenance, hébergement, sécurité, adoption, sortie et sensibilité | option la moins risquée à l'horizon choisi |
| 7 | Juridique `:839-878` | expliciter droits prestataire/salarié/tiers et faire relire | code, comptes et données reprenables |
| 8 | CTA/sources `:880-1027` | fournir feuille TCO à copier, dates fraîches, statut P1–P4 | cadrage ou refus de développer |

### Contrat des 150 premiers mots

« Vous cherchez un logiciel sur mesure parce qu'un fichier, un vieux logiciel
ou une ressaisie vous coûte du temps. Le premier chiffre que vous voyez — 5 000,
15 000 ou 60 000 € — ne répond pas encore à votre question : que couvre-t-il,
qui devra travailler avec le prestataire et combien coûtera la troisième ou la
cinquième année ? Dans ce guide, nous comparerons conserver, automatiser,
acheter et construire sur un même parcours. Vous verrez comment lire un devis,
calculer le TCO à 12, 36 et 60 mois, tester une sensibilité et décider si le
sur-mesure est justifié. Les fourchettes sont des repères commerciaux, jamais
un devis ni une promesse d'économie. »

### À conserver

- le ton dirigeant et la phrase des cinq personnes/dix heures ;
- la distinction capacité/économie/ROI ;
- le devis fictif détaillé et la grille de responsabilités ;
- la possibilité de stabiliser, automatiser, acheter, reporter ou ne pas
  développer ;
- la prudence juridique et la déclaration de conflit d'intérêt.

### À couper ou reformuler

- tout chiffre de vendeur affiché comme amplitude du marché ;
- délais dans les key points qui paraissent garantis ;
- maintenance hypothétique non reliée à un contrat ou une mesure ;
- toute promesse de ROI ou de propriété automatique du code.

## 10. Contre-audit et portes P1–P4

| Identifiant | Priorité | Correction attendue | Revalidation |
| --- | --- | --- | --- |
| P1-01 — fourchettes commerciales trop ancrantes | P1 | qualifier chaque tranche par périmètre, source, date et conflit ; réduire le hero | lecteur dirigeant doit distinguer repère/devis dès 150 mots |
| P1-02 — absence TCO rempli 12/36/60 | P1 | ajouter scénario égalisé et tableau H=12/36/60 | recalculer chaque ligne HT/TTC/inclus/exclus |
| P1-03 — maintenance, adoption, sécurité et exploitation non calculées | P1 | sensibilités et propriétaire par poste, coût du statu quo et support | contrôler que chaque variable change une décision |
| P1-04 — break-even et contrôle inverse trop généraux | P1 | scénario standard/automatisation/sur-mesure avec valeur attribuable | ne pas conclure rentable si maintenance/risque non saisis |
| P1-05 — intégration et délais non bornés par dépendances | P1 | flux, accès, tests, rollback, validation et critères de fin | comparer devis au même parcours et calendrier |
| P1-06 — fraîcheur/registre | P1 | revalider sources 24/07, synchroniser `dateModified` et manifest | `git diff`, dates, source/date audit |
| P2-01 — ressource de conversion implicite | P2 | feuille TCO/périmètre copiable avec pièces et inconnues | tester CTA et cas de renoncement |
| P2-02 — droits et composants tiers trop courts | P2 | checklist contractuelle code/comptes/données/licences | relecture juriste, sans avis personnalisé |
| P2-03 — QA production non prouvée | P2 | build, rendu, canonical, OG, sitemap, robots et indexation séparés | preuve déployée avant publication |

### État des portes

```text
P1 recherche : PRÉSENTE MAIS NON VALIDÉE — dossier disponible, mais sources commerciales, matrice de comparaison et scénarios complets restent insuffisants.
P2 rédaction : EXISTANTE MAIS NON VALIDÉE — aucune des six corrections P1 n'est appliquée dans ce rapport.
P3 contre-audit : RAPPORT PRÉSENT, PORTE NON VALIDÉE — score 81/100, P0 0/P1 6/P2 3 ; un nouveau regard devra contrôler le snapshot corrigé.
P4 plume humaine et QA : REJETÉE / NON VALIDÉE — aucun lecteur humain, aucun contre-audit post-correction, aucun build/déploiement de release exécuté ici.
Publication/indexation : NON PROUVÉES — page locale noindex attendue ; ne pas confondre registre, build, production et Search Console.
```

### Score après correction cible

| Axe | Cible /10 | Condition |
| --- | ---: | --- |
| Intention | 9 | repère commercial et décision égalisée dans les 150 mots |
| Décision | 9 | scénarios, break-even, contrôle inverse et portes go/stop |
| Pédagogie | 9 | cas simple/central/exigeant et termes traduits |
| Profondeur | 9 | TCO 12/36/60, exploitation, adoption, sécurité, reprise |
| Preuve | 9 | champ Insee conservé, sources primaires fraîches et vendeurs bornés |
| Comparaison | 9 | même parcours, options et obligations comparés |
| Originalité | 9 | feuille sensibilité, devis et sortie réutilisables |
| Style | 9 | ancrage transparent, opinion conditionnelle, aucun faux absolu |
| Conversion | 9 | livrable concret et possibilité de refuser le projet |
| SEO/produit | 9 | dates, JSON-LD, responsive, production et indexation prouvés séparément |

Seuil : **90/100, aucun axe sous 8, puis lecture humaine obligatoire**.

## 11. Preuves techniques et visuelles

```text
Manifeste : `src/lib/guides.ts`, entrée `prix-logiciel-sur-mesure`, non modifiée.
Calculs refaits : 3 832 mots visibles dans `main`; formules 16 h×47×44,70, 50×650 et 2/15×650 contrôlées.
Rendu local : page HTTP 200, robots/sitemap HTTP 200, canonical correcte, `noindex,nofollow` local attendu, 1 H1, 2 JSON-LD (Article/BreadcrumbList), CTA présent.
Responsive : 320/360/390/430/640/768/1024/1280/1440/1600 — aucun overflow, aucune table/pre/code tronqué, H1 unique ; logs navigateur error/warning vides.
Sources rouvertes le 24/07/2026 : Insee, Légifrance L.131-3/L.113-9, ANS HDS, résultats France/UK/US/DACH ; fourchettes concurrentes traitées comme couverture, non preuve.
Image sociale : route `opengraph-image.tsx` et métadonnées présentes ; pas de preuve de partage en production dans cette passe.
Statut maximal prouvé : audit source + rendu local ; pas de build final, déploiement actif, traitement sitemap ni indexation.
```

### Empreintes du snapshot

```text
src/app/guides/prix-logiciel-sur-mesure/page.tsx
  700327f375b94ee22b6116cc876f3e749de6ae565fd31a4b0e4fd3f837d949ea
src/app/guides/prix-logiciel-sur-mesure/opengraph-image.tsx
  c279a51f515a7cfa7ab7a49ce22782a2d5f979b0cd273dae6c955e5f18a10023
src/lib/guides.ts
  8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09
docs/research/prix-logiciel-sur-mesure.md
  cf23d3be7ed5df1f7dcc27f24250acbdf3f99f2bcae7903c9dfbbb0226f30309
docs/charte-qualite-guides.md
  5ee616faa4959dc8ad2b0eb19a5b19ffbf53299b62665700093c5c176b0b8491
docs/workflow-maitre-guides-4-passes.md
  91f6caabd28fdf90c33198594894955d175871d218987457af3a7aff5d593631
docs/regle-or-vigilance-seo-publication.md
  6109eec7f4b0cfedeffe8bd92efe0d5db31d4360d51dd8b7ebbd2b9bdc43a7f6
docs/roadmap-guides-seo.md
  b472449bf780d6e22da888e8a0ec2eee53e834b86ebbf97fbfb5e3bbdedba2f4
docs/audits/giga-audit-2026-07-24/_modele-audit-guide.md
  1871570ce33c2e6eebbb31dac56571b5f9e84229a48fedd26b50ad80db87a55f
```

Rapport P3 lecture seule : aucun guide, code, registre, manifest, déploiement
ou publication n'a été modifié.
