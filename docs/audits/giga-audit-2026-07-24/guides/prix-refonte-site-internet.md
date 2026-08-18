# Audit approfondi — `prix-refonte-site-internet`

Date : 24 juillet 2026

Auditeur concurrentiel : contrôle éditorial, chiffrage, migration, conversion, SEO
et expérience utilisateur

Snapshot du guide : `src/app/guides/prix-refonte-site-internet/page.tsx` (744 lignes,
3 510 mots), `opengraph-image.tsx`, registre `src/lib/guides.ts` ; hashes relevés le
24/07/2026 : page `ba15d3c0…80cb`, image `c173afc5…b702`, registre
`8663e6e8…cb09`.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant de TPE/PME, commerçant ou indépendant dont le site
                existe déjà, reçoit parfois du trafic ou des demandes, mais
                paraît daté, lent, difficile à administrer ou impossible à faire
                évoluer.
Question réelle : « Dois-je corriger quelques points, refaire une partie,
                  migrer ou reconstruire ? Quel budget protégera mes pages,
                  mes données, mes formulaires et mes ventes pendant la bascule ? »
Décision attendue : choisir optimisation ciblée, refonte partielle, refonte
                   complète/migration ou reconstruction applicative, avec un
                   périmètre, une recette et un coût total comparables.
Réponse actuelle en une phrase : le guide distingue les niveaux d’intervention,
  donne des fourchettes, liste les postes d’un devis, explique les redirections
  et la bascule sans coupure ; il ne donne pas encore de baseline chiffrée ni de
  TCO 12/36/60, et les coûts de pertes, disponibilité, intégrations et recette
  restent trop généraux.
Défaut qui coûte le plus de valeur : la promesse « calculer le coût sur trois
  ans » débouche sur une liste de postes sans calcul, alors qu’une refonte est
  précisément une décision de risque et de continuité.
Niveau actuel : B-
Priorité : haute
Statut : audité ; aucune réécriture du guide effectuée dans cet audit
```

### Score avant correction

| Axe         | Note /10 | Preuve localisable | Manque décisif |
| ----------- | -------: | ------------------ | -------------- |
| Intention   | 9 | Introduction et tableau « corriger/refondre/reconstruire », lignes 244–348 | La valeur d’une demande, d’un client ou d’une heure économisée n’est pas mesurée. |
| Décision    | 8 | Deux scénarios demandés et 10 sections, lignes 441–474 | Pas de seuil de bascule ni de décision formalisée par risque. |
| Pédagogie   | 8 | Distinction optimisation/refonte/migration, lignes 350–387 | Le lecteur ne voit pas un exemple complet de parcours avant/après. |
| Profondeur  | 7 | SEO, calendrier, devis, coûts et comparaison | Intégrations, données, recette, accessibilité, disponibilité et pertes restent de surface. |
| Preuve      | 7 | Google Search Central et principes d’inventaire | Baseline réelle et sources UX/légal absentes. |
| Comparaison | 7 | Fourchettes et postes de devis | Les options ne sont pas comparées sur même périmètre et 12/36/60 mois. |
| Originalité | 8 | Recommandation de chiffrer aussi la correction, même contre la vente | Aucun cas filé chiffré ni opinion sur le budget à ne pas engager. |
| Style       | 8 | Ton prudent et humain | Quelques listes et fourchettes paraissent génériques. |
| Conversion  | 7 | CTA + kit cahier des charges | Pas de livrable, délai ni preuve de l’audit de décision. |
| SEO/produit | 8 | Canonical, Article/Breadcrumb, FAQ, liens, OG file-based | Head, responsive, UX, indexation et `readTimeMin` non vérifiés ici. |

Total : **77/100**

Le guide a une bonne architecture de décision et un ton responsable. Il reste une
bonne page d’orientation, pas encore un outil de chiffrage ou de gestion de migration
à risque. Le manque n’est pas le nombre de mots : c’est l’absence de chiffres reliés
aux choix.

## 2. Ce que le guide dit réellement

- Il commence avec le problème du dirigeant : site daté, difficile à modifier ou ne
  générant plus assez de demandes. Il dit correctement que l’âge n’est pas un motif
  suffisant et qu’il faut distinguer ce qui est corrigeable (lignes 244–350).
- Le tableau initial propose optimisation ciblée, refonte partielle, refonte complète
  et conservation. Il ne distingue pas assez explicitement une migration technique,
  une reconstruction applicative et une refonte éditoriale simultanée.
- Les fourchettes sont présentées comme scénarios Hagnéré : relooking 500–3 000 €,
  vitrine 1 500–8 000 €, PME 3 000–15 000 €, e-commerce 5 000–40 000 €, plateforme
  15 000–80 000 €+, plus migration SEO 1 500–10 000 € (lignes 389–439). C’est
  honnêtement encadré, mais le périmètre, les heures, la TVA et la recette ne sont
  pas assez visibles.
- La section décision demande formulaires, tâches d’administration, pages qui
  attirent trafic/demandes, incidents sur douze mois et objectifs à trois ans. C’est
  une bonne baseline qualitative ; elle ne dit pas quels seuils déclenchent une
  correction, une refonte partielle ou une reconstruction.
- Le devis couvre état des lieux, contenus, design, développement, migration/recette
  et exploitation. Il manque une matrice fonction → donnée → intégration → test →
  responsable, particulièrement pour CRM, paiement, réservation, recherche, langues
  et analytics.
- La partie SEO est solide dans ses principes : inventaire, pages prioritaires,
  correspondance 1:1, pas de renvoi global vers l’accueil, tests, surveillance, 301
  conservées au moins un an et absence de garantie de trafic (lignes 520–559).
- Le calendrier mentionne préproduction, sauvegarde, fenêtre de bascule, indisponibilité
  acceptable et plan de retour. Il ne donne pas de RPO/RTO, de déclencheur de rollback,
  de gestion des commandes/données delta ou de vérification post-lancement chiffrée.
- La section « coût sur trois ans » liste les dépenses année 1, années suivantes et
  conditionnelles, mais ne chiffre rien. Elle n’honore donc pas entièrement la
  promesse du sommaire.
- La comparaison prestataires pose de bonnes questions de propriété et de reprise,
  sans demander un test effectif d’export, de restauration et de build ailleurs.
- Le CTA demande l’URL, trois problèmes et pages apportant des demandes. Il ne dit
  pas si la réponse sera un audit écrit, un appel, une fourchette, ni dans quel délai.

## 3. Benchmark France et international

Requêtes, pays, langues et date : recherches en français, anglais et allemand sur
« prix refonte site internet 2026 », « website redesign cost », « SEO migration cost »
et « website relaunch checklist » ; France, États-Unis, Royaume-Uni, Australie,
Allemagne/Autriche/Suisse ; 24/07/2026. Les pages commerciales sont des sources
d’angles, jamais des preuves de prix ou de performance.

| Ressource et URL directe | Pays | Réponse utile | Preuve, outil ou exemple | Limite | Apport à vérifier ou adapter |
| ------------------------ | ---- | ------------- | ------------------------ | ------ | ---------------------------- |
| [Clickdev — Next.js vs WordPress pour entreprise](https://www.clickdev.fr/blog/nextjs-vs-wordpress-2026) | France | Compare budget, délai, autonomie, sécurité et performance sur 3–5 ans | Avis de terrain et position explicite | Page commerciale, pas une méthode de refonte complète | Ajouter une opinion de décision et une vraie comparaison de coûts. |
| [La Fabrique du Net — tarifs d’agence](https://www.lafabriquedunet.fr/agences/pages/agences-site-internet/tarifs) | France | Contexte de prix et de budgets d’agence | Échantillon affiché | Méthodologie et périmètre à vérifier | Utiliser uniquement comme contexte, jamais comme devis. |
| [SEOPar﻿ity — migration cost](https://seoparity.com/blog/wordpress-nextjs-migration-cost) | États-Unis | Distingue audit SEO, build, périmètre et risque de devis trop bas | Fourchettes par complexité, avertissement sur « SEO inclus » | Source commerciale, chiffres non neutres | Ajouter un poste SEO avec livrables, pas une promesse. |
| [MigrateLab — migration guide](https://migratelab.com/resources/wordpress-to-nextjs-complete-guide) | États-Unis | Phases audit, design, contenu, SEO et lancement | Processus séquencé | Peu de calculs et cas PME | Ajouter une recette d’acceptation et coût d’incident. |
| [AETHUS — migration guide for UK SMEs](https://aethus.co.uk/posts/migrating-from-wordpress-to-next-js-a-step-by-step-guide-for-uk-smes) | Royaume-Uni | Inventaire CPT, intégrations, CWV, TTFB, 404 et redirections | Checklist orientée propriétaire | Pas de TCO ni prix | Reprendre les métriques dans une baseline refonte. |
| [QUANTAUM — SEO-safe migration checklist](https://quantaum.co.uk/pdfs/nextjs-migration-checklist.pdf) | Royaume-Uni | URL map, crawl, CWV, GSC, tests et suivi J+7/J+30 | Checklist téléchargeable et seuils de suivi | PDF commercial, portée technique limitée | Créer un livrable téléchargeable avec J0/J7/J30/J90. |
| [Clad — Australian website cost](https://getclad.au/blog/small-business-website-cost-australia) | Australie | Coût initial, mensuel, première année et délai | Tableau par voie DIY/freelance/agence | Fournisseur vendant l’alternative | Ajouter temps du client et TCO 36/60. |
| [CoreWebHub — WordPress vs Next.js Australia](https://corewebhub.com.au/blog/wordpress-vs-nextjs-australia-2026) | Australie | Compare vitesse, SEO, sécurité, coût et maintenance | Tableau lisible pour PME | Claims absolus non sourcés | Remplacer les slogans par mesures et scénarios. |
| [Pixzl — Website Kosten 2026](https://www.pixzl.de/newsroom/was-kostet-eine-website-2026) | Allemagne | Relie budget à complexité, design et fournisseur | Segmentation PME/projet complexe | Pas de migration SEO détaillée | Ajouter coût des contenus, données, tests et maintenance. |
| [WebArs — Autriche/Allemagne/Suisse](https://webars.at/blog/was-kostet-eine-website-oesterreich) | DACH | Coûts initiaux et mensuels par pays | Questions de devis, TVA/devise implicites | Source commerciale régionale | Ajouter devise, TVA, langues, hébergement et sortie. |

Saturation : les concurrents listent presque tous stratégie → design → développement
→ redirections → lancement. Le gain est ailleurs : baseline avant travaux, comparaison
correction/refonte/reconstruction, valeur des pages et conversions, données et
intégrations, recette, plan de retour, TCO 12/36/60 et sensibilité aux pertes pendant
la migration. Les affirmations « sans perte SEO », « ×10 » ou « plus rapide » doivent
être exclues si elles ne reposent pas sur un protocole et un cas documenté.

## 4. Matrice de gain d’information

| Question décisive | Meilleure réponse française | Apport international | Couverture actuelle | Manque | Réponse supérieure à produire |
| ----------------- | --------------------------- | -------------------- | ------------------- | ------ | ---------------------------- |
| Le site doit-il être refait ? | Relier problèmes à conséquences | Guides UK/US proposent audit et métriques | Bonne intention | Pas de seuil de décision | Score baseline : conversion, SEO, performance, sécurité, éditorial. |
| Correction, partielle ou complète ? | Tableau de situations | Concurrents parlent souvent directement de redesign | Bonne base | Pas de coûts à fonctions égales | Quatre options avec coût, délai, risque et ce qui reste en place. |
| Combien coûte réellement la migration SEO ? | 1 500–10 000 € scénario | Checklists UK listent URL map/crawl/GSC | Partielle | Volume, liens, canonical, hreflang, contenu, suivi non chiffrés | Prix par tranches d’URLs et livrables d’acceptation. |
| Quelles pages protègent le chiffre d’affaires ? | Pages à trafic/demandes | Checklists parlent top URLs/backlinks | Partielle | Baseline conversion, marge et saisonnalité absente | Matrice URL → trafic → lead/vente → intention → action. |
| Le projet peut-il basculer sans arrêt ? | Préproduction, sauvegarde, fenêtre, retour | Checklists concurrentes ajoutent J+7/J+30 | Moyenne | RPO/RTO, delta commandes, rollback trigger | Runbook avec responsables, seuils et minute de décision. |
| Les intégrations sont-elles reprises ? | Connexions citées dans devis | Guides migration listent CRM/e-commerce | Faible | Inventaire API, comptes, données, rate limits et tests | Matrice intégration → données → scénario d’erreur → recette. |
| Quel est le coût total ? | Liste année 1/années suivantes | Guides étrangers montrent première année/5 ans | Insuffisante | Aucun total 12/36/60 ni sensibilité | Trois scénarios avec heures internes, pertes, licences et sortie. |
| Le site reste-t-il accessible et mesurable ? | Mobile et accessibilité cités | CWV/TTFB présents chez AETHUS | Faible | Critères WCAG, consentement, analytics et p75 | Recette UX/SEO accessible avec critères d’acceptation. |
| Quelle action déclenche la conversion ? | CTA URL + 3 problèmes | PDF concurrents fournissent checklists | Moyenne | Livrable/délai de l’audit non défini | Proposer matrice de décision et estimation sans promesse de résultat. |

## 5. Faits et fraîcheur

| Affirmation du guide | Verdict | Source primaire actuelle | Périmètre et date | Correction |
| -------------------- | ------- | ------------------------ | ----------------- | ---------- |
| Google recommande mapping, redirections, tests et surveillance lors d’un changement d’URL | confirmé | [Google Search Central — site moves](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) | Documentation officielle, consultée 24/07/2026 | Conserver ; ajouter status/canonical/robots/schema et seuils de recette. |
| Les redirections permanentes doivent généralement rester au moins un an | confirmé avec portée contextuelle | même documentation Google | Migration d’URL, dépend de l’utilité des anciennes URLs | Dire « au moins un an lorsque nécessaire », pas une garantie universelle. |
| Changer domaine, design, contenu et technologie ensemble complique le diagnostic | recommandation méthodologique raisonnable | Google recommande de changer une chose à la fois lorsque possible | Bonne pratique, pas une règle juridique | Conserver et ajouter un scénario si le domaine doit absolument changer. |
| Fourchettes 500–3 000 €, 1 500–8 000 €, etc. représentent le marché | non ; correctement marquées scénarios Hagnéré | aucune source primaire de marché | Hypothèses internes, juillet 2026 | Ajouter pages, gabarits, heures, TVA, migration, recette et support inclus. |
| Une refonte peut perdre du trafic | confirmé comme risque, pas probabilité chiffrée | [Google site moves](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) | Fluctuations possibles selon taille/crawl/indexation | Ajouter baseline et plan de surveillance, jamais un pourcentage inventé. |
| Tests mobile, performance et accessibilité comptent | confirmé comme qualité, pas garantie de classement | [Google page experience](https://developers.google.com/search/docs/appearance/page-experience), [W3C WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) | Docs officielles, consultées 24/07/2026 | Ajouter critères et responsabilités de recette. |
| Formulaires, statistiques, cookies et contenus font partie du projet | opérationnellement vrai mais non chiffré | [CNIL RGPD](https://www.cnil.fr/fr/rgpd-de-quoi-parle-t-on) | Dépend des données et outils employés | Ajouter ligne budget/consentement et validation spécialisée. |
| Droits sur code, design et contenus doivent être précisés | orientation correcte ; portée contractuelle | [Légifrance CPI](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069414/LEGISCTA000006133323/) | Droit français, contrat et tiers à examiner | Ajouter licences, comptes, données, dépôt, export et coût de sortie. |

### Contradictions

- La page annonce le « coût sur trois ans » dans le sommaire et le point clé, mais la
  section 8 ne donne aucun total ni formule ; c’est la contradiction la plus visible.
- Le guide demande une baseline (demandes, pages, incidents, performance), mais ne
  fournit pas de seuils ou de calcul pour décider que la refonte est rentable ou
  préférable à la correction.
- Il explique qu’une refonte peut inclure données, connexions, recette et formation,
  mais la fourchette ne précise pas si ces postes sont inclus : deux devis peuvent
  donc sembler comparables alors qu’ils ne le sont pas.
- Il parle d’éviter une coupure, mais ne définit pas combien d’indisponibilité est
  acceptable, qui décide le rollback ou comment traiter les données créées pendant
  la bascule.

### Faits à retirer plutôt qu'à affaiblir

- Toute garantie de trafic, de positions ou d’absence de perte pendant une refonte.
- Toute fourchette présentée comme marché sans scope, TVA, contenus, gabarits,
  intégrations, migration et recette.
- Toute promesse de « sans coupure » si le contrat ne définit pas disponibilité,
  fenêtre, données delta et retour arrière.

## 6. Scénarios et calculs à construire

Les scénarios suivants sont illustratifs et doivent remplacer une simple liste par un
calcul de décision. Ils supposent le même contenu, le même formulaire, l’analytics,
les mêmes langues et un support comparable.

| Variable | Correction ciblée | Refonte partielle | Reconstruction/migration complète | Hypothèse à vérifier |
| -------- | ----------------: | ----------------: | ---------------------------------: | -------------------- |
| Périmètre | 3 pages, formulaire, performance | 12 pages, nouveau parcours, 3 gabarits | 30 pages, CMS, intégrations, SEO complet | Inventaire du site et des connexions. |
| Chantier initial | 1 800 € | 7 500 € | 18 000 € | Scénarios éditoriaux, pas prix de marché. |
| Contenus et données | 10 h internes | 35 h internes | 90 h internes | Taux horaire dirigeant/équipe à renseigner. |
| Migration SEO/URL | 300 € | 1 500 € | 5 000 € | Volume d’URLs, backlinks, langues et suivi. |
| Hébergement/licences année 1 | 600 € | 900 € | 1 800 € | Offres et renouvellements à confirmer. |
| Maintenance/sécurité annuelle | 1 200 € | 2 400 € | 4 800 € | Patches, sauvegardes, monitoring, support. |
| Évolutions annuelles | 600 € | 1 800 € | 6 000 € | À séparer du périmètre initial. |
| Réserve incident/perte de données | 300 € | 750 € | 2 700 € | 10–15 % du chantier, hypothèse explicite. |
| Coût de sortie à 60 mois | 1 000 € | 2 000 € | 6 000 € | Export, nouveau prestataire, redirections, recette. |

```text
TCO 12 mois = chantier + temps interne initial + migration SEO
              + hébergement/licences + maintenance + évolutions + réserve incident
TCO 36 mois = chantier + temps initial + migration SEO
              + 3 × (hébergement/licences + maintenance + évolutions)
              + réserve et corrections post-lancement
TCO 60 mois = chantier + temps initial + migration SEO
              + 5 × récurrent annuel + sortie éventuelle + refonte prévisible

Horizon : 12, 36, 60 mois ; même niveau de design, support et disponibilité.
Inclus : contenu, données, intégrations, redirections, recette, formation et suivi.
Exclus : chiffre d’affaires supposé, hausse de trafic non démontrée, TVA inconnue,
         coût d’une panne exceptionnelle non documenté.
Sensibilité : ±30 % sur heures de contenu, URLs difficiles, intégrations,
              maintenance, évolutions, incidents et coût de sortie.
Variable de bascule : volume de dette, fréquence d’évolutions, valeur des pages et
                       coût de l’interruption, non l’âge du design seul.
Contrôle inverse : si la correction obtient les seuils de conversion, SEO,
                   performance et sécurité, la reconstruction doit être reportée.
```

Exemple humain : un cabinet qui reçoit 15 demandes mensuelles, publie quatre pages
par an et possède un formulaire fiable peut financer une refonte partielle sans
reconstruire le CMS. Une boutique qui perd 20 commandes pendant une bascule, ou une
PME qui ressaisit 25 heures de données chaque mois, doit valoriser ces coûts avant de
comparer le montant du design.

## 7. Comparaison et position professionnelle

```text
Options réellement comparables :
  A. corriger l’existant ;
  B. refondre le design/UX sans changer de base ;
  C. migrer vers un autre CMS/hosting ;
  D. reconstruire complètement avec nouvelle architecture ;
  E. séparer le site vitrine d’une application métier ou d’un e-commerce.
Périmètre commun : mêmes pages prioritaires, données, formulaires, intégrations,
  langues, objectifs, niveau de QA, accessibilité, suivi SEO et support.
Horizon : 12/36/60 mois, avec temps interne et risque d’interruption valorisés.
Option la moins chère : A si les problèmes ont une cause isolée et mesurable.
Option la moins risquée : A ou B quand les URLs et données fonctionnent ; D augmente
  le nombre de dépendances et de décisions à tester.
Option qui demande le moins de temps interne : celle qui inclut contenus, nettoyage,
  recette et formation ; une refonte moins chère peut transférer tout le travail au client.
Position Hagnéré Code : chiffrer une correction et une refonte avant de recommander
  la reconstruction. Ne pas vendre une nouvelle apparence si le problème est une
  offre floue, un formulaire non suivi ou des contenus inexistants.
Faits qui la fondent : baseline avant travaux, recommandations Google, matrice d’URL,
  TCO et test de recette.
Cas où l’option opposée gagne : site récent, objectifs non définis, faible trafic,
  budget sans migration/QA, ou intégration critique non remplaçable.
Signal de révision : perte de leads, 404 prioritaires, commandes manquantes,
  performance p75 hors cible, temps de publication dégradé ou incident non restaurable.
Ce que nous déconseillons même si nous pourrions le vendre : tout refaire par goût,
  supprimer des pages sans preuve, planifier DNS avant recette, ou vendre un prix
  incluant le design mais excluant redirections, données et disponibilité.
```

## 8. Objections et cas limites

| Objection loyale | Réponse prouvée | Ce qui reste incertain | Conséquence |
| ---------------- | --------------- | ---------------------- | ----------- |
| « Mon site a plus de cinq ans, il faut tout refaire. » | L’âge n’est pas un diagnostic ; mesurer demandes, tâches, sécurité et performance. | Causes réelles et objectif commercial. | Comparer correction et refonte avant signature. |
| « Une nouvelle maquette fera revenir les clients. » | Un design ne garantit ni trafic ni conversion. | Offre, message, concurrence et suivi. | Baseline des leads et test du parcours principal. |
| « Je ne veux aucune coupure. » | Préproduction et bascule réduisent le risque. | Données créées pendant fenêtre, DNS, paiement, rollback. | Définir RTO/RPO, gel, responsable et plan de retour. |
| « J’ai peu de pages, donc la migration SEO est négligeable. » | Une seule page peut porter trafic ou liens importants. | Inventaire complet et backlinks. | Classer URLs par valeur et tester chaque redirection prioritaire. |
| « Le devis inclut SEO. » | Il faut distinguer URL map, redirections, canonicals, schema, sitemap et suivi. | Livrables et seuils souvent flous. | Inscrire les contrôles et la période post-lancement. |
| « Nous écrirons nous-mêmes les contenus. » | Cela peut réduire le prix mais consomme temps et validation. | Compétence, disponibilité, cohérence et SEO. | Valoriser les heures et les dates dans le planning. |
| « Deux devis à 5 000 € et 18 000 € sont incomparables. » | Le volume de gabarits, données, intégrations et recette explique souvent l’écart. | Travail réellement inclus. | Comparer obligatoire/option/exclu avec scope identique. |
| « Mon e-commerce ne peut pas perdre une commande. » | Une refonte exige plan de bascule et retour. | Commandes delta, stock, paiement et ERP. | Projet séparé, tests en sandbox, fenêtre et monitoring renforcé. |
| « Le prestataire conservera le domaine et le code. » | La sortie doit être prévue au contrat. | Licences tierces et documentation. | Comptes au nom de l’entreprise, export et test de reprise. |

## 9. Plan de réécriture

| Ordre | Section proposée | Question résolue | Preuve, scénario ou outil | Décision produite | À conserver / créer / couper |
| ----: | ---------------- | ---------------- | ------------------------- | ----------------- | ---------------------------- |
| 1 | Verdict en 60 secondes | Corriger, partiel, migrer ou reconstruire ? | Arbre par problème, risque, valeur et budget | Niveau d’intervention | Conserver tableau, ajouter coûts et seuils. |
| 2 | Baseline avant travaux | Que mesure-t-on ? | Leads, conversions, pages SEO, CWV, formulaires, incidents, heures | Problème prouvé ou non | Créer fiche de départ. |
| 3 | Périmètre du devis | Qu’est-ce qui est inclus ? | Matrice contenu/donnée/intégration/test/responsable | Comparaison égale | Étendre section devis. |
| 4 | Scénarios de prix | Quel ordre de grandeur pour mon cas ? | Petit/PME/e-commerce/métier avec hypothèses HT/TTC | Budget préparatoire | Conserver fourchettes, détailler inclusions. |
| 5 | SEO et contenu | Que peut-on perdre ? | URL map, backlinks, canonicals, hreflang, schema, robots, sitemap | Plan de protection | Ajouter seuils et suivi. |
| 6 | Runbook de bascule | Comment continuer à travailler ? | Préproduction, gel, sauvegarde, delta, DNS, rollback, RPO/RTO | Feu vert/retour | Créer chronologie de lancement. |
| 7 | TCO 12/36/60 | Quelle option coûte vraiment moins ? | Formule, heures, maintenance, incidents, sortie, sensibilité | Go/report | Remplacer la liste année 1. |
| 8 | Recette UX/technique | Quand accepter ? | Mobile, clavier, formulaires, paiement, analytics, p75, 404 | Acceptation | Ajouter propriétaire et preuve. |
| 9 | Contrat et sortie | Puis-je changer d’équipe ? | Accès, code, données, licences, documentation, export | Contrat sûr | Conserver questions, ajouter test de reprise. |
| 10 | CTA | Quelle prochaine étape ? | Audit de décision avec livrable et délai | Contact qualifié | Décrire ce qui est remis et ce qui n’est pas garanti. |

### Contrat des 150 premiers mots

Dire au lecteur : « Une refonte n’est pas une nouvelle couleur de bouton. C’est un
passage entre un site qui a déjà des pages, des visiteurs, des formulaires et parfois
des positions Google, et un site qui doit continuer à travailler pendant le chantier.
Avant de demander un prix, il faut répondre à une question plus importante : qu’est-ce
qui vous coûte aujourd’hui — des demandes perdues, des heures de saisie, une faille,
un CMS impossible à utiliser ou une structure qui bloque votre offre ? Ce guide
compare quatre réponses : corriger, refaire une partie, migrer ou reconstruire. Il
vous montre les postes qui doivent figurer au devis, les contrôles SEO à exiger, le
plan de bascule et le coût total sur 12, 36 et 60 mois. Les fourchettes sont des
scénarios, pas une promesse. Une agence sérieuse doit aussi pouvoir vous dire de ne
pas tout refaire. »

### Éléments à supprimer

- La promesse de « calculer le coût sur trois ans » tant qu’aucun calcul n’est fourni.
- Les prix sans hypothèses de contenu, URL, gabarits, intégrations, recette, HT/TTC et
  maintenance.
- Les formulations qui assimilent une refonte à une amélioration de trafic ou de
  conversion.

### Éléments à conserver

- L’idée que l’âge ne suffit pas et que la correction doit être chiffrée à côté de la
  refonte.
- La distinction optimisation/refonte/migration, la liste des postes, la prudence SEO
  et l’exigence de propriété/reprise.
- La préparation sur espace privé et la volonté de ne pas arrêter l’activité.

## 10. Contre-audit après correction

Les corrections suivantes sont **à faire** ; elles n’ont pas été appliquées dans cet
audit.

| Problème | Priorité | Correction appliquée | Revalidation indépendante |
| -------- | -------- | -------------------- | ------------------------- |
| P1-01 — coût annoncé sur 3 ans sans calcul et absence 12/60 mois | P1 | Non appliquée | Refaire trois scénarios TCO, totaux et sensibilité ±30 %. |
| P1-02 — baseline conversion/SEO/performance qualitative sans seuil | P1 | Non appliquée | Mesurer avant/après et vérifier p75, leads, 404, formulaires et indexation. |
| P1-03 — distinction migration/reconstruction/intégrations insuffisante | P1 | Non appliquée | Classer chaque fonction, donnée, intégration et responsabilité. |
| P1-04 — recette sans critères d’acceptation détaillés | P1 | Non appliquée | Tester mobile, clavier, formulaires, paiement, analytics, erreurs et sauvegarde. |
| P1-05 — redirections sans matrice complète | P1 | Non appliquée | Vérifier URLs prioritaires, canonical, hreflang, schema, robots, sitemap et logs. |
| P1-06 — pertes, disponibilité, RPO/RTO et rollback non chiffrés | P1 | Non appliquée | Ajouter runbook de bascule, gel, données delta, seuil de retour et responsable. |
| P1-07 — intégrations et données sans coût ni plan de reprise | P1 | Non appliquée | Inventorier CRM, paiement, réservation, recherche, exports, API et tests d’erreur. |
| P1-08 — CTA sans livrable, délai ni preuve | P1 | Non appliquée | Vérifier que le dirigeant sait ce qu’il reçoit et ce qui reste à sa charge. |
| P2-01 — sources UX/accessibilité/RGPD absentes | P2 | Non appliquée | Ajouter Google, W3C, CNIL et portée juridique correctement. |
| P2-02 — readTimeMin 11 non recalculé pour 3 510 mots | P2 | Non appliquée | Mesurer le rendu final et synchroniser le registre. |
| P2-03 — image OG file-based non inspectée dans le head | P2 | Non appliquée | Vérifier HTML, image, dimensions, cache et partage social. |
| P2-04 — benchmark international absent de la page | P2 | Non appliquée | Ajouter angles FR/US/UK/AU/DACH sans reprendre leurs claims non prouvés. |
| P2-05 — absence de checklist téléchargeable de migration/recette | P2 | Non appliquée | Créer une ressource maintenable si elle reste à jour. |
| P2-06 — aucun cas réel documenté | P2 | Non appliquée | Ajouter un cas avec preuve ; sinon le marquer explicitement illustratif. |
| P2-07 — langues, hreflang, data residency et transferts absents | P2 | Non appliquée | Ajouter matrice pays/langue/hébergement/canonical. |
| P2-08 — consentement analytics et mesure de conversion trop générale | P2 | Non appliquée | Définir événements, consentement, propriétaire et baseline. |
| P2-09 — licences/comptes tiers et coût de sortie incomplets | P2 | Non appliquée | Ajouter inventaire, renouvellement, accès et test d’export. |
| P2-10 — suivi post-lancement sans J+7/J+30/J+90 | P2 | Non appliquée | Ajouter responsables, seuils d’escalade et bilan comparé. |

### État des portes P1–P4

```text
P1 recherche et cadrage : PRÉSENTE MAIS INCOMPLÈTE — sources et défauts sont
                          identifiés, mais baseline et scénarios restent à produire.
P2 rédaction/intégration: EXISTANTE MAIS NON VALIDÉE — guide source inchangé
                          et huit P1 ouverts.
P3 contre-audit indépendant: RAPPORT PRÉSENT, PORTE NON VALIDÉE — aucun
                             snapshot corrigé à recalculer et recontrôler.
P4 plume humaine et QA : REJETÉE / NON VALIDÉE — score inférieur à 90 et
                         aucun build, rendu navigateur, head, responsive ou crawl final.
Publication/indexation : NON PROUVÉES PAR CE RAPPORT — aucun déploiement,
                         traitement de sitemap, Search Console, indexation ou
                         conversion n'est contrôlé ici.
```

### Score après correction

Non calculable : le guide n’a pas été réécrit dans cette passe. **Objectif : 92/100
minimum**, avec aucun P1 ouvert et au moins 9/10 en décision, profondeur, preuve,
comparaison et conversion.

## 11. Preuves techniques et visuelles

```text
Manifeste : src/lib/guides.ts — slug, dates, title, metaDescription et readTimeMin 11 vérifiés.
Calculs refaits : le guide liste les postes mais ne chiffre pas le TCO ; trois
                 scénarios 12/36/60 proposés ici sans modification de la page.
Sources rouvertes : Google site moves/301/page experience ; W3C WCAG ; CNIL RGPD ;
                    Légifrance CPI ; France/US/UK/AU/DACH benchmarks.
Liens vérifiés : sources Google présentes dans le code ; liens internes et destinations
                 non testés par navigateur dans ce rapport.
Commandes : wc -l -w ; shasum -a 256 ; git diff --check après création du rapport.
Rendu 320 / 390 / 768 / 1024 / 1440 : non exécuté.
Image sociale : opengraph-image.tsx existe ; head, dimensions et partage social non inspectés.
Statut maximal prouvé : audit éditorial/factuel local et benchmark concurrentiel.
Réserve publication / indexation : aucune conclusion de build, déploiement,
                                    indexation, conversion ou position Google possible.
```

### Décision de chantier

Le guide est une base utile et honnête : il sait dire « ne refaites pas pour l’âge »,
protège le SEO et demande de comparer correction et reconstruction. La prochaine
passe doit rendre la promesse financière et opérationnelle réelle : baseline avant
chantier, TCO 12/36/60, coûts de contenu/intégrations/recette, pertes potentielles,
RPO/RTO, accessibilité, suivi J+7/J+30/J+90 et livrable CTA. Ensuite seulement une
réécriture et un contre-audit pourront fermer les portes P1 à P4.
