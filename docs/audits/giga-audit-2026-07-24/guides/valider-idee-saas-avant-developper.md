# Giga-audit — Valider une idée SaaS avant de développer

**Date de l’audit :** 24 juillet 2026  
**Périmètre :** page, image OG, registre, dossier de recherche et comparaison FR + US/UK/AU/DACH.  
**Question du fondateur/dirigeant :** « Comment savoir si je dois investir plusieurs mois de développement, proposer un pilote, changer de cible ou arrêter avant de dépenser ? »  
**Score actuel : 77/100**  
**Sévérité :** P0 = 0 · P1 = 16 · P2 = 11  
**Verdict :** la plume est claire, calme et orientée décision. L’ouverture explique très bien qu’un compliment ne vaut pas une preuve, les entretiens sont mieux formulés que dans la plupart des contenus généralistes et la page accepte explicitement le pivot ou l’arrêt. En revanche, elle ne tient pas encore la promesse d’un audit complet de validation SaaS pour un dirigeant : les notions ICP/JTBD, alternatives/concurrence, concierge/smoke test, précommande et LOI, métriques d’activation/rétention, unit economics, CAC/payback, scénarios, TCO 12/36/60 et critères stop-go ne sont pas suffisamment opérationnels. Le dossier de recherche promet un journal copiable et un exemple chiffré de pivot qui ne sont pas présents dans la page. Les quatre passes internes constituent un état éditorial, pas une preuve indépendante de couverture.

## 1. Empreintes et état de validation

| Élément | Valeur / constat |
|---|---|
| Page | `src/app/guides/valider-idee-saas-avant-developper/page.tsx` |
| SHA-256 page | `283630e4ca3ab24520328832866afd1eaa316ae139fcee208821e46dd5a81444` |
| Image OG | `src/app/guides/valider-idee-saas-avant-developper/opengraph-image.tsx` |
| SHA-256 OG | `24d833d0eceb7527f602bfc44f15539a52c7661df811ef3cc4110ffc6e9f242f` |
| Registre | dates `2026-07-20` / `2026-07-21`, lecture 11 min, catégorie « Préparer son projet » |
| Structured data visible | `Article` et `BreadcrumbList` dans le code ; `FAQPage` non visible dans ce fichier ; Rich Results non testés |
| Recherche | `docs/research/valider-idee-saas-avant-developper.md`, statut interne « publiable », sources consultées le 20/07/2026 |
| Artefact promis par la recherche | journal copiable, seuils et exemple fictif `ConformiSuivi` annoncés, mais non intégrés sous forme de tableau/outillage public dans la page |
| Build, navigateur réel, accessibilité, liens, canonical, sitemap, indexation | affirmés dans le dossier de recherche mais non reproduits comme preuves dans cet audit |
| Calculs visibles sur la page | aucun cas chiffré ; aucun CAC, prix, marge, activation, rétention ou TCO calculé |

La recherche interne indique « 20/20 » et des contrôles passés le 20 juillet. Ce rapport relève un état différent : il vérifie ce qui est réellement lisible dans le snapshot actuel et sépare publication, qualité éditoriale, validité juridique et preuve commerciale.

## 2. Forces à préserver

- La scène d’ouverture — idée approuvée par l’entourage, devis qui se précise, plusieurs milliers d’euros en jeu — cible exactement le fondateur qui doit décider.
- La phrase « une validation réduit une incertitude ; elle ne garantit ni les ventes ni la rentabilité » protège le lecteur contre une promesse abusive.
- Les quatre questions de départ couvrent problème, acheteur, accès et faisabilité, au lieu de réduire la validation au prototype.
- Le plan sur quatorze jours est lisible et relie conversations, test limité, décideur et engagement.
- Le script demande un événement récent, une pratique actuelle, un contournement et une conséquence ; il évite le classique « trouvez-vous mon idée intéressante ? ».
- La matrice prototype / service manuel / page / pilote indique ce que chaque test ne prouve pas : très bonne pédagogie.
- La page distingue utilisateur, responsable, payeur et bloqueur informatique, ce qui est utile en B2B.
- Le warning sur la fausse interface et la différence entre intérêt, liste d’attente, pilote et paiement est sain.
- Les limites CNIL/INPI sont explicites ; l’e-Soleau n’est pas présentée comme une protection de l’idée.
- La matrice finale permet de modifier la cible, faire un pilote, mener un spike technique ou arrêter ; le CTA accepte de recommander d’attendre.

## 3. Matrice des axes attendus

| Axe | État observé | Évaluation |
|---|---|---|
| Problème et douleur | faits récents, temps, conséquences | fort, JTBD à formaliser |
| ICP et segmentation | cible précise conseillée | P1 : critères observables, exclusions, taille, zone, maturité |
| Alternatives/concurrence | outils actuels et contournements demandés | P1 : carte comparative et switching |
| Entretiens | questions anti-biais solides | fort, recrutement et synthèse insuffisants |
| Concierge / manuel | service manuel mentionné | P1 : protocole de livraison, coût et limite d’échelle |
| Smoke test / landing | page envoyée à trafic identifié | P1 : instrumentation, promesse honnête, faux positifs |
| Précommande / LOI / pilote payé | engagements cités | P1 : conditions, remboursement, signataire, valeur probante |
| Willingness-to-pay | offre pilote et prix évoqués | P1 : tests de prix et seuils de décision |
| Activation / usage / rétention | absents | P1 majeur |
| Acquisition et canal | moyens listés, quelques volumes | P1 : coût, répétabilité, CAC et canal initial |
| Unit economics | faisabilité et coût général | P1 majeur : marge, CAC, payback, churn, TCO |
| Sécurité/RGPD | minimisation, info, traceurs | bon socle, sécurité SaaS et sous-traitants à approfondir |
| Décision stop/go/pivot | matrice qualitative | P1 : seuils écrits avant tests et critères de sortie |
| SEO/QA/conversion | metadata, maillage et CTA visibles dans le code | P1 : artefact promis, FAQ/QA et preuves runtime |

## 4. Écart critique entre la recherche et la page

Le dossier de recherche promet une **porte à cinq verrous**, une **hiérarchie de preuves**, un **journal de validation copiable avec hypothèse, test, mesure et seuil**, ainsi qu’un **exemple fictif chiffré aboutissant à un pivot**. Dans la page actuelle :

- les cinq verrous sont résumés en prose et dans une table de quatre questions, mais aucune carte d’hypothèse prête à remplir n’est fournie ;
- les niveaux « déclaration / comportement / investissement » ne sont pas affichés comme échelle de preuve ;
- le journal n’est pas copiable en bloc et il n’existe ni ressource XLSX/CSV, ni exemple rempli ;
- `ConformiSuivi`, les 52 heures, 4 300 € et les seuils fictifs du dossier de recherche n’apparaissent pas dans l’article ;
- le texte ne montre donc pas comment un dirigeant passe des entretiens à un calcul, puis à une décision falsifiable.

Cette divergence est P1 : elle transforme une bonne méthode en conseil général que le lecteur doit reconstruire seul.

## 5. P1 — corrections nécessaires avant une prétention de référence

### P1-01 — Formaliser ICP, segment et JTBD

Ajouter une fiche ICP : taille, secteur, zone, rôle utilisateur, sponsor, payeur, veto IT/achats, maturité digitale, volume du problème et événements déclencheurs. Écrire le JTBD sous la forme « Quand…, je veux…, afin de… », puis ses alternatives actuelles. « Les PME » ou « les équipes administratives » ne suffisent pas pour vendre un SaaS.

### P1-02 — Cartographier alternatives et concurrence

Demander ce que le prospect utilise réellement : tableur, email, ERP, logiciel vertical, prestataire, recrutement ou absence de traitement. Comparer coût, délai, risque, intégration, habitudes et coût de changement. Une idée peut résoudre un problème réel mais perdre face à une solution déjà payée ou suffisamment bonne ; la page doit fournir une matrice de remplacement, pas seulement parler de contournements.

### P1-03 — Rendre les entretiens éligibles et analysables

Le nombre « cinq à dix » est présenté comme un point de départ, ce qui est prudent, mais le protocole ne dit pas comment éviter les amis, salariés, concurrents ou personnes sans budget. Ajouter critères d’éligibilité, recrutement hors réseau, consentement à l’enregistrement, durée, fiche d’observation, verbatims anonymisés, codage par thèmes et règle d’arrêt lorsque les nouveaux entretiens n’ajoutent plus d’apprentissage. Aucun seuil universel ne doit être présenté comme une loi.

### P1-04 — Ajouter une vraie hiérarchie de preuves

Afficher une échelle : compliment, clic, formulaire, entretien avec fait récent, capture/donnée fournie, second rendez-vous, accès au pilote, LOI conditionnelle, acompte/pilote payé, usage répété, renouvellement. Pour chaque niveau : ce qu’il autorise et ce qu’il ne prouve pas. Une LOI n’est ni un contrat ni du chiffre d’affaires ; un paiement peut valider l’achat d’un pilote sans prouver la rétention.

### P1-05 — Décrire le concierge/manuel comme une expérience mesurée

Le service manuel est seulement cité. Ajouter qui réalise la tâche, en combien de minutes, avec quelles données, quel résultat, quel coût variable, quelle erreur et quel critère de répétition. Mesurer la valeur délivrée avant d’automatiser et préciser le point où l’opération manuelle devient économiquement impossible. Le concierge peut prouver le résultat du service ; il ne prouve pas que l’architecture SaaS est faisable.

### P1-06 — Encadrer smoke test, landing et liste d’attente

Ajouter une landing honnête : statut du produit, ce qui est simulé, cible, résultat promis, prix ou fourchette, consentement, source du trafic, formulaire et événement principal. Distinguer impression, clic, demande, rendez-vous, activation et paiement. Une fake door, une liste d’attente ou un formulaire de curiosité ne doit jamais être compté comme demande d’achat. Prévoir faux positifs (amis, bots, trafic incité, doublons, curieux).

### P1-07 — Sécuriser précommande, LOI et pilote payé

L’article doit donner un modèle de proposition : problème, périmètre, données, livrable, date, prix HT/TTC, conditions de sortie, remboursement ou annulation, support, responsabilités, sécurité et ce qui se passe si le produit n’est pas livré. L’engagement doit être obtenu auprès du signataire compétent. Une précommande B2C/B2B comporte des exigences contractuelles différentes : faire relire l’offre par un professionnel compétent, sans présenter un acompte comme garantie juridique universelle.

### P1-08 — Tester réellement la volonté de payer

Ajouter trois tests de prix séparés : budget déjà dépensé pour l’alternative, offre pilote avec prix annoncé, puis choix entre forfait/abonnement/usage. Mesurer objections, délai de décision, signataire, budget disponible et conditions d’achat. Montrer un exemple fictif : 8 pilotes proposés à 1 200 € HT, 3 acceptés, 1 réellement payé ; ce résultat prouve un intérêt commercial limité, pas un marché de 100 clients.

### P1-09 — Ajouter activation, usage répété, rétention et paiement

Un SaaS n’est pas validé lorsque quelqu’un dit oui. Définir activation (premier résultat obtenu), délai jusqu’à ce résultat, utilisateurs actifs, fréquence d’usage, tâche répétée, rétention à 7/30/90 jours, renouvellement, churn volontaire/involontaire, incidents et paiement encaissé. Pour un B2B à cycle long, distinguer pilote utilisé, déploiement, renouvellement et expansion. Les métriques doivent être définies avant le test et reliées au JTBD.

### P1-10 — Vérifier le comité d’achat B2B

Ajouter une carte `utilisateur → champion → sponsor → achats/juridique → IT/sécurité → payeur`. Demander qui peut bloquer, quelles pièces sont nécessaires (DPA, assurance, hébergement, SSO, réversibilité), combien de temps prend le référencement fournisseur et qui signe. Le pilote d’un utilisateur enthousiaste n’autorise pas à conclure que l’entreprise entière achètera.

### P1-11 — Mesurer canal, acquisition et accès répétable

La liste « partenaires, contenu, événements, prospection » n’indique ni coût ni répétabilité. Ajouter une fiche par canal : entreprises ciblées, contacts éligibles, rendez-vous décideurs, pilotes, coût média/outils/temps, taux de réponse, délai et propriétaire. Calculer un CAC de test au niveau d’une cohorte, inclure le temps du fondateur et préciser qu’un réseau personnel ne constitue pas automatiquement un canal scalable.

### P1-12 — Ajouter unit economics, marge, CAC et payback

Présenter les formules et unités : `MRR = clients actifs × prix mensuel`, `marge brute = revenu − coûts variables`, `CAC = coût d’acquisition complet / nouveaux clients payants`, `payback = CAC / marge brute mensuelle par client`, `LTV prudente = marge mensuelle × durée retenue`. Pour un pilote, inclure implémentation, support, hébergement, email, paiement, data, sécurité et temps de service. Ne pas utiliser LTV/CAC avant d’avoir une cohorte et un horizon explicites ; ne pas appeler revenu ou MRR du bénéfice.

### P1-13 — Ajouter scénarios et TCO 12/36/60

Inclure au moins trois scénarios fictifs à périmètre égal : micro-SaaS self-service, SaaS B2B avec onboarding humain, outil métier intégré avec support et sécurité. Montrer `TCO(n) = cadrage + développement + migration + exploitation + support + sécurité + acquisition` sur 12, 36 et 60 mois. Ajouter sensibilité au nombre de clients, churn, coût cloud, support et temps fondateur. Le guide doit permettre de refuser une idée qui exige un coût de service supérieur au prix possible.

Exemple de structure fictive, à intégrer et recalculer :

| Scénario | Mise en place | Run annuel | TCO 12 mois | TCO 36 mois | TCO 60 mois |
|---|---:|---:|---:|---:|---:|
| Self-service très limité | 12 000 € | 6 000 € | 18 000 € | 30 000 € | 42 000 € |
| B2B avec onboarding | 28 000 € | 24 000 € | 52 000 € | 100 000 € | 148 000 € |
| Outil intégré et support renforcé | 55 000 € | 54 000 € | 109 000 € | 217 000 € | 325 000 € |

Chiffres entièrement fictifs ; ils servent à montrer la mécanique (`setup + n × run annuel`), pas à annoncer un prix de marché.

### P1-14 — Écrire des seuils stop/go/pivot avant le test

La matrice qualitative doit devenir une décision pré-écrite : par exemple, si aucun prospect éligible ne décrit un incident récent, arrêter la cible ; si les incidents existent mais qu’aucun décideur n’accepte une prochaine étape, modifier l’accès ou le prix ; si un pilote payé est utilisé et répété, cadrer un MVP limité ; si le coût de service dépasse la marge possible, refuser de construire. Chaque seuil doit être fictif, contextualisé et écrit avant de regarder le résultat.

### P1-15 — Ajouter sécurité et architecture minimale de confiance

La page parle de sécurité, droits et hébergement mais ne propose pas de mini-checklist : données sensibles, sous-traitants, sauvegardes, chiffrement, journalisation, séparation tenants, gestion des rôles, suppression/export, réversibilité, incident et dépendances critiques. Pour les clients B2B, ajouter DPA, registre des traitements, hébergement, sous-traitants et questionnaire sécurité. S’appuyer sur [CNIL — minimisation](https://www.cnil.fr/fr/minimiser-les-donnees-collectees), [CNIL — transparence](https://cnil.fr/fr/conformite-rgpd-information-des-personnes-et-transparence) et [ANSSI — guide d’hygiène informatique](https://cyber.gouv.fr/publications/guide-dhygiene-informatique), sans transformer le guide en avis juridique.

### P1-16 — Livrer le journal et prouver la QA produit/SEO

Créer le journal promis avec colonnes `risque, ICP, JTBD, hypothèse, test, population, métrique, seuil, résultat, preuve, décision, prochaine action, coût, date, responsable`. Le rendre copiable ou téléchargeable avec un exemple entièrement fictif et un modèle vierge. Puis vérifier en navigateur : page, OG, canonical, liens, FAQ visible/structure éventuelle, responsive 320–1600 px, clavier, erreurs, CTA et performance. Les assertions du dossier de recherche (« dix largeurs », build et tests) doivent être reliées à des preuves reproductibles, pas seulement cochées.

## 6. P2 — améliorations secondaires

1. Ajouter une carte JTBD et une carte des rôles d’achat imprimables.
2. Ajouter une matrice « fait observé / interprétation / décision autorisée ».
3. Ajouter un exemple de concurrence déjà suffisante et le calcul du coût de changement.
4. Ajouter la différence entre pilote payé, preuve de concept, POC technique et MVP produit.
5. Ajouter l’expérimentation par segment avec journal des exclusions et biais de sélection.
6. Ajouter la gestion des refus, remboursements, retours et conflits de pilote.
7. Ajouter un indicateur de fiabilité de chaque signal plutôt qu’une note unique.
8. Ajouter les implications d’un SaaS multi-tenant, SSO, export et réversibilité.
9. Ajouter une note sur les aides, subventions et achats publics sans les compter comme ventes récurrentes.
10. Ajouter un maillage vers le coût SaaS seulement après le test de preuve, pas avant.
11. Ajouter une FAQ sur « combien d’entretiens », « combien de précommandes » et « quand arrêter », avec réponse contextualisée et sans seuil magique.

## 7. Exemple chiffré de validation à intégrer

**Exemple illustratif fictif — outil de rapprochement pour PME :**

| Étape | Résultat fictif | Ce que cela prouve réellement |
|---|---:|---|
| Contacts ciblés hors réseau | 40 | une population initiale a été définie |
| Conversations avec le bon rôle | 12 | l’accès au problème est possible |
| Incidents récents documentés | 8 | douleur observée, pas encore achat |
| Second rendez-vous avec décideur | 4 | intérêt plus engageant |
| Pilotes proposés à 1 200 € HT | 4 | une offre/prix ont été testés |
| Pilotes payés | 2 | deux engagements financiers, pas un marché prouvé |
| Pilotes activés et utilisés chaque semaine à J30 | 1 | première preuve d’usage répétable |

Coût fictif : 52 h de travail fondateur × 60 € = 3 120 €, 400 € d’indemnités, 300 € de test d’acquisition, 480 € de revue technique, soit 4 300 € valorisés. Si un pilote payé ne couvre pas le coût de livraison ou si l’usage s’arrête à J7, le prochain test doit porter sur la proposition, l’onboarding ou la cible ; il ne faut pas conclure automatiquement à un MVP complet.

Ces nombres ne sont ni norme ni benchmark. Le lecteur doit modifier la population, le prix, la marge et le coût de son propre test ; les seuils sont écrits avant le recrutement.

## 8. Benchmark international de couverture

| Marché / source | Couverture intéressante | À reprendre | Limite |
|---|---|---|---|
| France — [PeakLab, validation SaaS](https://peaklab.fr/blog/valider-idee-saas-avant-developper) | entretiens, landing, prévente, critères go/no-go | séquencer les expériences | seuils/budgets présentés comme repères peu vérifiables |
| France — [EID Lab, avant une ligne de code](https://www.eid-lab.com/valider-idee-saas) | volonté de payer et méthode accessible | parler d’engagement financier | chiffres de réussite insuffisamment documentés |
| États-Unis — [YC, Essential Startup Advice](https://www.ycombinator.com/blog/ycs-essential-startup-advice/) | parler directement aux utilisateurs, travail manuel | concierge et apprentissage rapide | méthode/opinion d’accélérateur, pas preuve de marché |
| États-Unis — [Strategyzer, Test Card](https://www.strategyzer.com/library/validate-your-ideas-with-the-test-card) | hypothèse, test, mesure, seuil | journal falsifiable | méthode transversale, non spécifique à un SaaS B2B français |
| Royaume-Uni — [Cadence, B2B SaaS pre-launch](https://cadence.withremote.ai/blog/validate-b2b-saas-idea) | ladder interviews → landing → concierge → LOI/paiement | expliciter le niveau de preuve | seuils commerciaux auto-déclarés, à ne pas universaliser |
| Australie — [Shopify AU, customer validation](https://www.shopify.com/au/blog/customer-validation) | interviews, tests et validation terrain | passer de l’intérêt à l’usage | guide généraliste, métriques SaaS limitées |
| DACH — [SaaS-Framework, idée et MVP](https://www.saas-framework.de/) | langage fondateur et MVP | ajouter coût de changement et marché local | couverture variable, source méthodologique |

**Conclusion benchmark :** les contenus anglophones sont souvent meilleurs sur la ladder de preuve, le concierge, la landing et la prévente ; les contenus francophones sont plus accessibles mais donnent parfois des seuils sans population. Aucun n’assemble complètement, au même endroit, B2B committee, activation/rétention, marge, TCO et RGPD. C’est l’angle de différenciation à construire.

## 9. Sources, faits et limites à revalider

### Méthodes (pas des autorités ni des garanties)

- [Strategyzer — Test Card](https://www.strategyzer.com/library/validate-your-ideas-with-the-test-card) et [force de preuve](https://www.strategyzer.com/library/business-testing-is-your-hypothesis-really-validated) : hypothèse, expérience, mesure, seuil et distinction déclaration/comportement/investissement.
- [Steve Blank — Customer Hypotheses](https://steveblank.com/2011/04/04/the-leanlaunch-pad-at-stanford-%E2%80%93-class-4-customer-hypotheses/) : rôles client B2B et apprentissage terrain.
- [Eric Ries — What is an MVP?](https://leanstartup.co/resources/articles/what-is-an-mvp/) : MVP comme apprentissage, pas comme promesse de succès.
- [Y Combinator — Essential Startup Advice](https://www.ycombinator.com/blog/ycs-essential-startup-advice/) : parler aux utilisateurs et accepter le travail manuel précoce.
- [The Mom Test](https://www.momtestbook.com/) : réduire les réponses polies et faire parler des faits passés.

### Autorités et textes à appliquer au cas réel

- [CNIL — minimiser les données](https://www.cnil.fr/fr/minimiser-les-donnees-collectees), [information et transparence](https://cnil.fr/fr/conformite-rgpd-information-des-personnes-et-transparence), [prospection électronique](https://www.cnil.fr/fr/communication-electronique-quelles-regles), [cookies et traceurs](https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/FAQ) : données, recrutement, liste d’attente, analytics et outreach.
- [INPI — protéger ses créations](https://www.inpi.fr/inpi-block/download-document?id=20581) et [e-Soleau](https://www.inpi.fr/realiser-demarches/propriete-intellectuelle/deposer-une-e-soleau-ou-un-entiercement) : une idée seule n’est pas un monopole ; une e-Soleau date une création.
- [ANSSI — guide d’hygiène informatique](https://cyber.gouv.fr/publications/guide-dhygiene-informatique) : socle de sécurité à adapter, sans certification automatique.
- [EUR-Lex — RGPD, article 5](https://eur-lex.europa.eu/eli/reg/2016/679/oj) : principes de traitement lorsque le périmètre dépasse les seules recommandations françaises.

Requêtes de contrôle effectuées le 24/07/2026 : `validate SaaS idea before building paid pilot concierge MVP`, `B2B SaaS validation LOI prepayment customer discovery`, `SaaS activation retention validation metrics`, `France prospection B2B CNIL 2026`, `ANSSI SaaS security hygiene`. Les méthodes et pages d’agences sont des pistes de couverture ; aucun seuil de recherche ou chiffre de réussite n’est publié comme fait universel.

## 10. Scorecard et portes de sortie

| Axe | Note | Justification |
|---|---:|---|
| Plume et ouverture humaine | 9/10 | enjeu financier concret, ton direct et rassurant |
| Problème, ICP et JTBD | 7/10 | bonnes questions, critères et formulation JTBD absents |
| Entretiens et biais | 8/10 | script fort, échantillonnage et analyse à formaliser |
| Alternatives/concurrence/canal | 6/10 | outils actuels demandés, comparaison et CAC absents |
| Tests sans code | 7/10 | matrice utile, concierge et smoke test trop courts |
| Prix, LOI et pilote | 6/10 | engagement cité, conditions et preuve financière incomplètes |
| Activation/rétention/paiement | 3/10 | quasiment absent |
| Économie et scénarios | 4/10 | coûts généraux, pas unit economics/TCO/sensibilité |
| Sécurité, RGPD et honnêteté | 8/10 | CNIL/INPI bien cadrées, sécurité SaaS à approfondir |
| Décision, conversion et SEO/QA | 9/10 | go/pivot/stop et CTA solides, artefact et preuves runtime manquants |
| **Total** | **77/100** | très bonne base pédagogique, 16 P1 avant guide de référence |

### Portes obligatoires avant validation finale

1. Remplacer les quatre questions par un cadre ICP/JTBD avec alternatives et comité d’achat ;  
2. intégrer l’échelle de preuve et le journal copiable promis ;  
3. décrire concierge, landing/fake door, liste d’attente, précommande, LOI et pilote payé avec honnêteté contractuelle ;  
4. définir activation, usage répété, rétention, churn, paiement et critères d’arrêt ;  
5. calculer CAC, marge, payback et TCO 12/36/60 avec au moins trois scénarios fictifs ;  
6. ajouter sécurité SaaS, sous-traitants, réversibilité et revue RGPD ;  
7. revalider source, build, rendu, accessibilité, données structurées, liens, canonical et indexation séparément.

**État après cet audit :** rapport produit uniquement. Aucun guide, registre, recherche, build, commit, push ou déploiement n’a été modifié.
