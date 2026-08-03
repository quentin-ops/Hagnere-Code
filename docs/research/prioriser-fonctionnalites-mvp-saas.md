# Dossier complet — Prioriser les fonctionnalités d’un MVP SaaS

> Dossier complet issu d’une reconstruction depuis un état éditorial vierge le
> 3 août 2026, puis de quatre passes, de reprises qualité, d’un Q3 indépendant
> et de l’intégration locale. L’historique reste conservé ci-dessous ; le push
> Git ne prouvera toujours ni déploiement, ni publication, ni indexation.

## A. Identité

| Champ                  | Valeur                                                                                                                                 |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Slug                   | prioriser-fonctionnalites-mvp-saas                                                                                                     |
| Numéro et thème        | Guide 29 · SaaS et MVP                                                                                                                 |
| Intention principale   | Décider quoi construire maintenant lorsque clients, prospects, support, vente et technique formulent des demandes contradictoires      |
| Lecteur                | Fondatrice, fondateur, dirigeante, dirigeant ou responsable produit d’un SaaS B2B déjà utilisé                                         |
| Situation déclenchante | Plusieurs personnes déclarent leur demande urgente, mais les problèmes, preuves, périodes, unités et dépendances ne sont pas homogènes |
| Décision après lecture | Construire un petit lot, tester, traiter une voie critique, acheter ou intégrer, différer avec déclencheur, ou maintenir un STOP       |
| Action autonome        | Remplir l’atelier local, vérifier le lot et ses dépendances, copier un Markdown pour revue                                             |
| CTA                    | Unique, tardif, vers /demarrer-un-projet, sans téléphone dans le bloc de stratégie                                                     |
| Date de recherche      | 2026-08-03, Europe/Paris                                                                                                               |
| Cycle de production    | quatre passes distinctes, Q1 corrigé, Q2 GO historique, reprise v2, Q3 final GO 96/100, intégration et BAT local verts                 |
| Branche et base        | codex/prioriser-fonctionnalites-mvp-saas · rebasée sur origin/main 577a9ff9632cceba51e1a0c46cda3dbb3f7830c0                            |
| État après reprise     | ready-for-human-review ; GO commit/push local ; aucune preuve de déploiement, publication ou indexation                                |

### Intention reformulée

La requête ne demande pas un catalogue de méthodes de scoring. Le lecteur doit
séparer des sujets non comparables, qualifier la preuve de chaque problème,
choisir une action humaine et vérifier qu’un petit lot cohérent tient dans une
capacité déclarée avec toutes ses dépendances. Le score reste secondaire et ne
produit aucun statut du moteur.

### Réponse directe retenue

Un score ne choisit pas à la place du dirigeant. Une demande incomplète devient
d’abord un test ; un incident, une obligation, un engagement ou une dépendance
critique suit une voie séparée. Le prochain lot candidat est le plus petit
ensemble cohérent dont le problème, la preuve, le résultat vérifiable, les
dépendances et l’effort sont assez explicites pour une revue humaine.

### Contrat de langage humain

- Phrase lecteur : « J’ai dix demandes et tout le monde dit que la sienne est
  urgente. Qu’est-ce qu’on développe maintenant ? »
- Réponse attendue : « Séparez les urgences réelles, transformez le reste en
  problèmes prouvés, puis vérifiez le plus petit lot complet avec sa capacité. »
- Terme central : lot candidat, c’est-à-dire un ensemble prêt à relire, pas un
  chantier autorisé.
- Mots ordinaires : demande, problème, preuve, responsable, effort, dépendance,
  test, reporter.
- Mots à éviter : algorithme gagnant, score objectif, roadmap intelligente,
  arbitrage automatique.
- Projet des 150 premiers mots : nier le choix automatique, orienter
  l’incomplet vers un test, séparer les voies critiques et définir le lot
  candidat.
- H2 relus isolément : oui.
- Comparaisons mobiles : cartes de repli fournies par GuideTable ; aucune
  colonne indispensable masquée.
- FAQ : chaque première phrase répond oui ou non.
- CTA : faire relire un lot avant de le promettre.

### Test sujet, action, résultat

| Formulation abstraite écartée     | Sujet                            | Action                                        | Résultat visible                     | Formulation retenue                                                                 |
| --------------------------------- | -------------------------------- | --------------------------------------------- | ------------------------------------ | ----------------------------------------------------------------------------------- |
| « Aligner les parties prenantes » | Le dirigeant et les responsables | relisent preuve, route, effort et dépendances | un lot ou un STOP explicable         | « Faites relire la demande brute, la preuve et sa limite par les rôles concernés. » |
| « Optimiser la roadmap »          | Le responsable produit           | sépare, teste, intègre, diffère ou construit  | une action nommée par demande        | « Proposez une décision humaine pour chaque demande. »                              |
| « Gérer la capacité »             | L’équipe                         | additionne lot et dépendances sur une période | total, reste ou inconnue visibles    | « Additionnez le lot et ses dépendances une seule fois. »                           |
| « Data-driven »                   | Le lecteur                       | conserve source, période et limite            | la faiblesse de preuve reste visible | « Écrivez la preuve disponible, sa source, sa période et sa limite. »               |
| « Priorité objective »            | Aucun acteur réel                | aucun geste vérifiable                        | illusion de certitude                | formulation retirée                                                                 |

## B. Contrat de réponse

### Réponse en cinq décisions

1. Conserver la phrase brute, puis nommer personne, situation et travail
   empêché.
2. Relier le problème à une preuve, sa source, sa période et sa limite.
3. Sortir incident, sécurité, droit ou conformité, engagement contractuel et
   dépendance fondatrice de la comparaison ordinaire.
4. Proposer construire, tester, traiter d’abord, acheter ou intégrer, ou
   différer avec un événement de réouverture.
5. Compter les éléments sélectionnés et leurs dépendances une seule fois, puis
   comparer le total à la capacité de la même période avant revue humaine.

### Matrice route et décision

- Une route critique accepte uniquement la décision humaine « traiter d’abord
  hors comparaison » ; construire, tester, intégrer ou différer sur cette route
  est incohérent et maintient un STOP.
- Une demande comparable accepte construire, tester, acheter ou intégrer, ou
  différer ; elle ne peut pas employer « traiter d’abord » pour masquer une
  voie critique mal qualifiée.
- Seules construire, tester et acheter ou intégrer sont des actions comptables
  admises dans une sélection ou comme dépendance nécessaire.
- Une demande différée ou une voie critique cochée reste hors fermeture et hors
  capacité. Une dépendance indispensable non comptable rend le total inconnu au
  lieu d’être additionnée ou ignorée silencieusement.

### Questions indispensables

| No  | Question                                                          | Conséquence                                                          |
| --- | ----------------------------------------------------------------- | -------------------------------------------------------------------- |
| 1   | Qui rencontre le problème, dans quelle situation ?                | Une solution demandée sans situation reste une hypothèse.            |
| 2   | Quel travail est bloqué et quelle preuve l’établit ?              | Le nombre de demandes seul ne prouve pas l’effet.                    |
| 3   | La demande relève-t-elle d’une voie critique ?                    | Elle quitte le classement et reçoit responsable et prochaine action. |
| 4   | Quel résultat, quelle mesure et quel seuil permettront la revue ? | La sortie devient vérifiable.                                        |
| 5   | Quel effort complet et quelles dépendances sont nécessaires ?     | Le lot ne masque ni intégration, ni test, ni exploitation.           |
| 6   | Quelle capacité totale existe sur quelle période ?                | Le reste est calculable uniquement avec même unité et même horizon.  |
| 7   | Quel événement rouvrira un report ?                               | Différer ne signifie pas oublier.                                    |

### Objections anticipées

| Objection                                                | Réponse                                                                                                                                                        |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| « Le plus gros client paie, sa demande passe première. » | Son poids commercial doit être documenté, mais ne remplace pas la preuve, l’effet commun, les dépendances ou un engagement contractuel à instruire séparément. |
| « Cent votes prouvent la priorité. »                     | Ils signalent une demande dans une population et une période ; ils ne prouvent ni la tâche empêchée, ni l’usage futur, ni le coût complet.                     |
| « Le score rend la décision objective. »                 | Portée, effet et confiance peuvent rester estimés ; leur multiplication ne retire pas cette incertitude.                                                       |
| « Un incident peut entrer dans valeur contre effort. »   | Non : sa gravité et son traitement nécessitent une voie qualifiée et un responsable.                                                                           |
| « Découper en tickets suffit à faire un petit lot. »     | Non si les tickets sont regroupés avant test ou libération et retardent encore le retour.                                                                      |
| « L’intégration gagne toujours. »                        | Non : adéquation, erreurs, sécurité, exploitation, dépendance fournisseur et sortie restent à vérifier.                                                        |
| « Reporter signifie dire non pour toujours. »            | Le report exige un événement observable de réouverture.                                                                                                        |

### Hors périmètre

- refaire le socle opérationnel du MVP et ses sept familles ;
- revalider le problème initial, l’acheteur ou le prix ;
- rédiger les neuf blocs du cahier des charges ;
- produire une date, une durée moyenne ou un calendrier ;
- prononcer une conformité juridique ou de sécurité ;
- promettre une fonction, un chiffre d’affaires, un ROI, un SLA ou une
  rétention ;
- installer une gouvernance permanente ou une roadmap annuelle ;
- recommander automatiquement un fournisseur ;
- proposer un tableur ou un téléchargement CSV, XLS ou XLSX.

### Alternatives et mauvais fits

- Ne pas construire si aucun résultat observable ne changerait la décision.
- Tester si la preuve est faible, avec test, mesure et seuil explicites.
- Traiter séparément une voie critique, sans conclure automatiquement à sa
  solution.
- Acheter ou intégrer une capacité existante après examen des états, erreurs,
  responsabilités, sécurité, exploitation et sortie.
- Différer avec motif et événement de réouverture.
- Revenir au guide de validation si personne n’utilise encore le produit.

## C. Corpus interne

### Fichiers et routes ouverts

| Élément                                                          | Rôle                                                     | Décision P1                                                                   |
| ---------------------------------------------------------------- | -------------------------------------------------------- | ----------------------------------------------------------------------------- |
| docs/research/prioriser-fonctionnalites-mvp-saas-input-freeze.md | Contrat immuable                                         | Lu intégralement ; inclus au manifeste ; non modifié                          |
| docs/prompt-maitre-agent-parallele-guides.md                     | Protocole P1 et gates                                    | Lu intégralement depuis le checkout canonique en lecture seule                |
| docs/regle-or-vigilance-seo-publication.md                       | Frontières local, déploiement, publication et indexation | Aucune confusion d’état                                                       |
| docs/charte-qualite-guides.md                                    | Exigences éditoriales                                    | Réponse, sources, exemple, action et limites appliqués                        |
| docs/instructions-guide-de-qualite.md                            | Questions lecteur et contrôle servi                      | Questions anticipées ; P1 ne lance pas de serveur                             |
| docs/workflow-maitre-guides-4-passes.md                          | Séquence P1 à P4                                         | P2, P3 et P4 non touchées                                                     |
| docs/roadmap-guides-seo.md                                       | Intention du guide 29                                    | Arbitrer après fixation du socle                                              |
| docs/research/_modele-guide.md                                   | Structure du dossier                                     | Adaptée en A à H                                                              |
| /guides/mvp-saas-quoi-inclure                                    | Propriétaire du socle opérationnel                       | Lien visible ; aucune répétition des sept familles ni de leur charge manuelle |
| /guides/valider-idee-saas-avant-developper                       | Propriétaire de la preuve initiale                       | Frontière documentée ; pas de répétition des entretiens ou de la vente        |
| /guides/cahier-des-charges-saas                                  | Propriétaire du cadrage détaillé                         | Lien après choix du lot                                                       |
| /guides/combien-de-temps-developper-saas                         | Propriétaire du calendrier                               | Lien après choix du lot ; aucune date produite                                |
| /guides/securite-application-metier                              | Propriétaire de la revue sécurité                        | Lien contextuel ; aucune conformité prononcée                                 |
| guide-premium-layout.tsx                                         | Architecture de lecture                                  | Neuf sections, CTA de stratégie unique, sources et FAQ plate                  |
| guide-content-blocks.tsx                                         | Tableaux et formules                                     | Replis mobiles accessibles                                                    |
| guide-page-seo.ts                                                | Metadata et données structurées                          | GuideEntry local P1, Article et BreadcrumbList                                |
| guides.ts                                                        | Registre partagé                                         | Type lu ; aucune entrée P1                                                    |
| legacy-guide-redirects.ts                                        | État actuel du slug historique                           | Slug encore legacy ; fichier hors scope non modifié                           |

### DOCX P1

Source : /Users/quentinhagnere/Downloads/Prompt #1 - Création Article.docx.

- Le rendu empaqueté a échoué car python était absent, puis python3 ne
  possédait pas pdf2image.
- Méthode de repli autorisée : LibreOffice vers PDF, puis pdftoppm à 144 dpi.
- Répertoire temporaire : /private/tmp/hc-guide29-docx-qa.9SdCNQ.
- Résultat : 24 pages A4 rendues, inspectées visuellement à taille originale.
- Texte extrait avec pdftotext -layout : 864 lignes, 6 247 mots, lu jusqu’à la
  fin.
- Intentions conservées : recherche primaire, analyse SERP, exemples
  actionnables, preuve et adaptation au projet courant.
- Éléments neutralisés : identité Hagnéré Patrimoine, promesse de première
  position, quotas SEO, densité, volume imposé, faux personas, trois CTA,
  FAQPage, MDX et Excel.

### État historique inventorié après lecture du DOCX

- Première introduction de l’ancienne route :
  e41e72e1f44865d71d44d8cbfa36cf25d583caae, datée du
  2026-07-23T14:17:43+02:00.
- Dernière suppression ou reconstruction historique :
  1e2abe, parent 2965f520.
- Ancien dossier : 559 lignes.
- Ancienne page : 1 007 lignes.
- Ancienne image OG : 205 lignes.
- Risques retenus seulement : RICE ou MoSCoW trop centraux, absence de moteur
  adversarial complet, lien vers une route future, sources anciennes, absence
  des trois formats WebP dédiés.
- Texte, plan, calculs et verdicts historiques non repris comme preuve.

### Cannibalisation

| Page                               | Propriétaire                                | Ce guide 29 fait                                  | Ce guide 29 ne refait pas            |
| ---------------------------------- | ------------------------------------------- | ------------------------------------------------- | ------------------------------------ |
| mvp-saas-quoi-inclure              | responsabilités du premier test             | vérifie que le socle n’est pas noyé dans le score | sept familles et charge manuelle     |
| valider-idee-saas-avant-developper | problème, acheteur, accès et prix initiaux  | renvoie si aucune utilisation réelle              | protocole de validation marché       |
| cahier-des-charges-saas            | spécification comparable complète           | transmet le lot choisi                            | neuf blocs de spécification          |
| combien-de-temps-developper-saas   | ordre des travaux et capacité dans le temps | transmet lot, effort et dépendances               | date, scénarios calendaires et durée |
| securite-application-metier        | exigences et preuves de sécurité            | sort la sécurité du classement ordinaire          | qualification complète du risque     |

Justification de l’URL distincte : elle répond à la décision « quoi traiter
maintenant après le socle », que ni la définition du MVP, ni sa validation, ni
son calendrier ne possèdent.

### Maillage retenu

- /guides/mvp-saas-quoi-inclure ;
- /guides/securite-application-metier ;
- /guides/cahier-des-charges-saas ;
- /guides/combien-de-temps-developper-saas ;
- /equipe#fondateur ;
- /demarrer-un-projet une seule fois comme CTA.

Aucun lien vers les routes futures mvp-prototype-ou-poc ou
faire-evoluer-saas-apres-mvp.

## D. Analyse externe

Date réelle de recherche et d’ouverture : 3 août 2026. Les sources
commerciales servent à leur méthode propre ou à l’analyse concurrentielle ;
elles ne prouvent aucun résultat de SaaS B2B général.

### D1. Corpus primaire et méthodologique

#### S01 — GOV.UK Service Manual, Learning about users and their needs

- URL :
  https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs
- Éditeur : Government Digital Service, User research community.
- Publication : 4 avril 2016 ; mise à jour visible : 23 mars 2017.
- Passage utile : étudier utilisateurs réels ; considérer opinions et
  suggestions non issues d’utilisateurs comme hypothèses ; centrer les besoins
  sur le problème ; relier user stories à critères d’acceptation, complexité et
  dépendances.
- Formulation publique : la demande de fonctionnalité reste une entrée ; le
  problème et la preuve doivent être documentés.
- Limite : manuel de services publics britanniques, non norme pour SaaS privé.
- Conflit : aucun intérêt fournisseur direct ; portée institutionnelle propre.
- Conséquence : champs personne, situation, problème, preuve, source, période
  et limite obligatoires.

#### S02 — Sean McBride / Intercom, RICE

- URL :
  https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/
- Auteur : Sean McBride ; éditeur : Intercom.
- Date : 5 janvier 2018.
- Passage utile : portée sur une période définie et fondée autant que possible
  sur des mesures réelles ; effet par personne ; confiance ; effort de tous les
  membres de l’équipe.
- Formule : portée × effet × confiance ÷ effort.
- Contre-preuve essentielle : l’auteur dit que RICE n’est pas une règle stricte
  et cite dépendances ou fonctions attendues comme raisons de travailler hors
  ordre.
- Limite : méthode interne publiée par l’entreprise qui l’utilise ; échelle
  d’effet et confiance comportent des choix.
- Conflit : Intercom promeut sa pratique de product management.
- Conséquence : RICE reste secondaire, sans exemple chiffré ni alimentation du
  statut principal.

#### S03 — Alex Osterwalder / Strategyzer, Test Card

- URL :
  https://www.strategyzer.com/library/validate-your-ideas-with-the-test-card
- Auteur : Alex Osterwalder ; éditeur : Strategyzer.
- Date : 5 mars 2015.
- Passage utile : rendre explicites l’hypothèse, le test, la mesure et le seuil
  de succès.
- Limite : ressource méthodologique auto-attribuée, commerciale, sans seuil
  universel et sans preuve qu’un test unique suffit.
- Conflit : Strategyzer vend méthodes, ressources et accompagnement.
- Conséquence : une preuve faible exige petit test, mesure et seuil ; seuil
  absent maintient STOP.

#### S04 — Home Office Engineering, Design from evidence

- URL :
  https://engineering.homeoffice.gov.uk/principles/design-from-evidence/
- Éditeur : Home Office Engineering Guidance and Standards.
- Mise à jour : 9 août 2023.
- Passage utile : preuves à jour, valides et transparentes ; documentation des
  besoins fonctionnels et non fonctionnels ; traçabilité entre exigence et
  preuve ; tests comme assurance.
- Limite : principe d’une administration britannique, pas une norme privée ou
  française.
- Conflit : aucun fournisseur ; doctrine propre à l’organisation.
- Conséquence : conserver source, période, limite, responsable et critère de
  fin dans le Markdown.

#### S05 — DORA, Working in small batches

- URL : https://dora.dev/capabilities/working-in-small-batches/
- Éditeur : DORA, programme Google Cloud.
- Mise à jour : 8 décembre 2025.
- Passage utile : petits lots pour tester rapidement une hypothèse et corriger
  la trajectoire ; unités indépendantes, utiles, estimables et testables ;
  retour provenant utilisateurs, monitoring, qualité et tests.
- Contradiction utile : découper puis regrouper avant test ou livraison retarde
  encore le retour.
- Limite : page centrée sur livraison logicielle ; heures, jours et semaine
  sont des illustrations de pratique, pas un délai universel de MVP.
- Conflit : programme opéré par Google Cloud ; contenu publié sous CC BY 4.0.
- Conséquence : lot petit mais cohérent et vérifiable, sans quota de durée.

#### S06 — NIST SP 800-218, SSDF 1.1

- URL : https://csrc.nist.gov/pubs/sp/800/218/final
- Auteurs : Murugiah Souppaya, Karen Scarfone et Donna Dodson.
- Publication finale : février 2022 ; historique visible : 3 février 2022.
- Statut : recommandation finale NIST, version 1.1.
- Passage utile : pratiques de sécurité de haut niveau à intégrer aux cycles de
  développement pour réduire vulnérabilités, effets et causes.
- Limite : ne classe pas une vulnérabilité, ne fixe pas une priorité universelle
  et ne constitue pas une norme française générale.
- Conflit : source publique américaine ; pas d’offre produit.
- Conséquence : la sécurité quitte valeur contre effort et va vers une revue
  fondée sur le risque.

#### S07 — GOV.UK Technology Code of Practice

- URL :
  https://www.gov.uk/service-manual/technology/code-of-practice.html
- Éditeurs : Government Digital Service et Central Digital and Data Office.
- Publication : 14 juillet 2021 ; mise à jour : 7 juillet 2025.
- Passage utile : concevoir, construire et acheter ; partager, réutiliser,
  intégrer, adapter et définir une stratégie d’achat.
- Limite : critères des projets technologiques gouvernementaux britanniques ;
  aucune supériorité automatique de l’achat pour un SaaS privé.
- Conflit : aucun fournisseur privé ; logique de dépense publique.
- Conséquence : acheter ou intégrer est une option explicite à instruire.

#### S08 — GOV.UK, User research for government services: an introduction

- URL :
  https://www.gov.uk/service-manual/user-research/how-user-research-improves-service-design
- Publication : 8 avril 2016 ; mise à jour : 23 mars 2017.
- Passage utile : trouver ce qui fonctionne, pas ce qui est populaire ; ne pas
  seulement demander préférences ou popularité ; recherche en petits lots.
- Limite : enjeu de services publics importants, non preuve qu’un vote SaaS est
  inutile dans tous les cas.
- Conséquence : le vote est un signal borné, jamais une preuve suffisante.

### D2. Carte concurrentielle

#### C01 — Productboard Support, formule RICE par défaut

- URL :
  https://support.productboard.com/hc/en-us/articles/4425557902099-Use-the-default-RICE-score-formula
- Mise à jour visible : 6 février 2026.
- Angle : attribuer les quatre facteurs et trier fonctionnalités et
  sous-fonctionnalités.
- Bon point : période et champs explicites.
- Manque : l’interface de tri peut suggérer un ordre plus automatique que
  l’article original ; pas de garde-fou pour voies critiques.
- Conflit : documentation d’un produit de priorisation ; fonctionnalité limitée
  à l’expérience Legacy.

#### C02 — Productboard, Customer Importance Score

- URL :
  https://support.productboard.com/hc/en-us/articles/360058215013-Use-the-Customer-Importance-Score-to-surface-your-top-requested-features
- Mise à jour visible : 18 juin 2026.
- Angle : nombre de personnes ayant demandé une fonction, pondéré par importance.
- Bon point : relie un insight à une idée et conserve une importance.
- Manque : popularité et importance déclarée ne prouvent pas seules le problème,
  l’usage, les dépendances ou le coût complet.
- Conflit : documentation du fournisseur.

#### C03 — Atlassian France, demande de fonctionnalité

- URL :
  https://www.atlassian.com/fr/agile/product-management/feature-request
- Angle : collecter, organiser et revoir les demandes ; indique qu’un nombre de
  demandes peut aider à déterminer les priorités.
- Bon point : contexte, problème et avantages dans la demande.
- Manque : formulation trop favorable au volume si elle est isolée de la preuve
  comportementale, des sujets critiques et de la capacité.
- Conflit : page marketing d’Atlassian.

#### C04 — Poyesis, neuf méthodes de priorisation SaaS

- URL : https://poyesis.fr/blogs/guide-priorisation-features-saas/
- Date visible : 18 juin 2025.
- Statut P2 au 3 août 2026 : source rejetée. La page ouverte contient, entre
  son introduction et son article, une longue insertion sans rapport sur les
  paris en ligne italiens, ainsi que plusieurs exemples d’entreprises sans
  preuve primaire visible.
- Conséquence : aucune affirmation, aucun témoignage et aucun exemple de cette
  page ne soutient le guide. Elle est conservée seulement comme preuve qu’un
  résultat SERP bien positionné peut être compromis ou insuffisamment fiable.
- Conflit : contenu d’une entreprise de services SaaS, actuellement contaminé
  par un contenu étranger au sujet.

#### C05 — Aetherio, product roadmap SaaS

- URL :
  https://aetherio.tech/articles/product-roadmap-saas-gestion-priorites-fonctionnalites
- Date visible : 13 avril 2026.
- Angle : roadmap, frameworks, collecte, backlog et votes via un outil.
- Bon point : reconnaît que toutes les demandes ne doivent pas être intégrées.
- Manque : gouvernance permanente plus large que la décision du prochain lot ;
  vote et outils dominent l’action.
- Conflit : page de services technologiques.

#### C06 — Miro, outil de priorisation des fonctionnalités

- URL :
  https://miro.com/fr/modeles/priorisation-des-fonctionnalites/
- Angle : trois tableaux pour décider, ordonner et communiquer.
- Bon point : visualisation collaborative.
- Manque : aucune preuve publique d’un moteur exact, d’un STOP stable ou d’une
  capacité avec dépendances.
- Conflit : modèle promouvant l’usage de Miro.

#### C07 — Edana, éviter l’usine à gaz

- URL :
  https://edana.ch/2026/04/20/priorisation-des-fonctionnalites-la-methode-pour-construire-une-application-utile-et-eviter-leffet-usine-a-gaz/
- Date visible : 20 avril 2026.
- Angle : valeur, complexité et time-to-market, préférence au MVP.
- Bon point : rappelle le coût de complexité.
- Manque : la rapidité ou le MVP ne suffit pas à séparer obligation, incident,
  dépendance et preuve faible.
- Conflit : agence de conseil, intégration et développement.

#### C08 — Productboard, formules de priorisation

- URL :
  https://support.productboard.com/hc/en-us/articles/32511614274323-Create-your-own-prioritization-formulas
- Mise à jour visible après redirection canonique : 30 juin 2026.
- Angle : combiner champs de critères, nombres et effort, puis trier par score.
- Contre-preuve utile : la documentation indique que les valeurs nulles de ces
  champs sont automatiquement traitées comme zéro.
- Limite : comportement propre aux formules Productboard, pas propriété de
  toutes les méthodes ni de tous les outils.
- Conflit : documentation du fournisseur.
- Conséquence : le guide nomme cette convention et maintient volontairement
  vide, inconnu et zéro dans trois états distincts.

### D3. Contradictions sérieuses résolues

| Tension                                   | Position retenue                                              | Preuve ou raisonnement                                                                                      | Limite                                                        |
| ----------------------------------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| Votes = priorité                          | le vote est un signal, pas une preuve suffisante              | GOV.UK S08 cherche ce qui fonctionne, pas seulement le populaire                                            | une enquête bien conçue peut rester une preuve parmi d’autres |
| Revenu du compte = ordre                  | documenter l’enjeu commercial sans automatiser                | un engagement existant quitte le classement ; une demande non engagée garde problème et preuve              | aucune règle financière universelle publiée                   |
| Score = objectivité                       | le score structure mais conserve les estimations              | Intercom décrit échelle d’effet et confiance, puis avertit contre la règle stricte                          | RICE peut rester utile sur idées homogènes                    |
| Petit lot = tickets petits                | exiger un résultat autonome, testable et envoyé au retour     | DORA décrit indépendance, valeur, test et piège du regroupement                                             | aucune durée universelle importée                             |
| Dette, sécurité, droit dans valeur/effort | voies séparées, responsables et revues propres                | Home Office cite preuves fonctionnelles et non fonctionnelles ; NIST traite la sécurité dans le cycle       | ce guide ne qualifie pas le risque concret                    |
| Demande d’un seul client = spécialisation | examiner produit commun, contrat, coût complet et réouverture | déduction éditoriale prudente, non statistique publiée                                                      | aucune probabilité de churn inventée                          |
| Intégration = toujours meilleure          | option conditionnelle, jamais gagnant automatique             | GOV.UK S07 demande de considérer réutiliser, intégrer et acheter                                            | portée gouvernementale britannique                            |
| Effort = code seulement                   | effort complet de l’équipe et dépendances                     | Intercom inclut produit, design, ingénierie ; guide ajoute test et exploitation comme décision de périmètre | pas de multiplicateur ni moyenne externe                      |
| Champ vide = zéro                         | conserver l’inconnue jusqu’à qualification                    | Productboard C08 documente au contraire une conversion automatique propre à ses formules                    | ce contre-exemple ne condamne pas l’outil                     |
| Résultat SERP = source fiable             | rouvrir et contrôler le contenu avant de l’utiliser           | Poyesis C04 contient actuellement une insertion étrangère au sujet                                          | observation datée, état susceptible de changer                |

### Angle mort commun et différenciation

Les résultats visibles privilégient catalogues de cadres, votes, tableaux,
roadmaps et tris descendants. Ils répondent moins bien à trois décisions :
séparer les sujets non comparables, maintenir une inconnue, puis refuser un lot
dont la fermeture de dépendances dépasse la capacité.

La valeur originale retenue est un atelier local sans classement automatique :
cinq demandes maximum, sept statuts ordonnés, cinq voies critiques, calcul exact
en millièmes de jour-personne, dépendances dédupliquées, Markdown copiable et
revue humaine obligatoire.

## E. Matrice d’information utile

| Besoin lecteur                        | Réponse publique                                | Preuve ou artefact              | Décision                                          |
| ------------------------------------- | ----------------------------------------------- | ------------------------------- | ------------------------------------------------- |
| « Qui a vraiment raison ? »           | personne automatiquement ; séparer et qualifier | ouverture et cinq voies         | attribuer avant de comparer                       |
| « Comment reformuler une demande ? »  | phrase brute, personne, situation, problème     | section problème + champs outil | hypothèse ou preuve                               |
| « Que faire d’une urgence ? »         | route critique propre                           | tableau cinq voies              | responsable et prochaine action                   |
| « Doit-on forcément coder ? »         | cinq décisions                                  | tableau options                 | construire, tester, traiter, intégrer ou différer |
| « Est-ce que cela tient ? »           | fermeture du lot et capacité                    | moteur pur et équation          | candidat, inconnu ou dépassement                  |
| « Que devient une inconnue ? »        | jamais zéro                                     | parseur exact et tests          | STOP ou reste inconnu                             |
| « Puis-je transmettre la décision ? » | Markdown sélectionnable et copiable             | outil sans réseau               | revue humaine                                     |
| « RICE sert-il encore ? »             | cadre secondaire sur idées homogènes            | formule et source originale     | aucun statut principal                            |

### Empreinte éditoriale

| Guide voisin                     | Ouverture                        | Artefact             | Risque de répétition     | Différence appliquée              |
| -------------------------------- | -------------------------------- | -------------------- | ------------------------ | --------------------------------- |
| mvp-saas-quoi-inclure            | contrat de test en sept familles | charge manuelle      | redéfinir le socle       | suppose le socle, arbitre ensuite |
| combien-de-temps-developper-saas | refuse durée universelle         | réseau de calendrier | refaire un planning      | calcule seulement effort du lot   |
| cahier-des-charges-saas          | faire chiffrer le même produit   | neuf blocs           | recréer la spécification | qualifie cinq demandes maximum    |
| securite-application-metier      | exigences proportionnées         | preuves de sécurité  | diagnostiquer un risque  | route sécurité vers revue séparée |

Choix du guide 29 :

- tension : chaque acteur appelle sa demande urgente ;
- ouverture : réponse directe, sans « cela dépend » ;
- progression : demande brute, preuve, voie, décision, fermeture, exemple,
  atelier, RICE secondaire, revue ;
- artefact : atelier local de lot candidat ;
- rythme : verbes concrets, phrases courtes autour des décisions ;
- CTA : après l’action autonome et la revue ;
- conclusion : le statut candidat ouvre une conversation ;
- différences : pas de sept familles, pas de calendrier, pas de cahier des
  charges complet, pas de score central.

## F. Registre des affirmations

| ID  | Affirmation publique                                                                           | Nature                     | Source              | Portée et limite                                               | Emplacement           | Conséquence                                  |
| --- | ---------------------------------------------------------------------------------------------- | -------------------------- | ------------------- | -------------------------------------------------------------- | --------------------- | -------------------------------------------- |
| A01 | Une suggestion non issue d’utilisateurs reste une hypothèse à prouver.                         | principe méthodologique    | S01 GOV.UK          | service public britannique ; transposition                     | problème, sources     | conserver phrase et preuve                   |
| A02 | Un besoin doit être formulé autour du problème plutôt que de la solution.                      | principe méthodologique    | S01                 | même limite                                                    | problème              | reformuler sans effacer l’original           |
| A03 | RICE combine portée, effet, confiance et effort.                                               | définition de méthode      | S02 Intercom        | méthode publiée par son éditeur                                | RICE                  | formule secondaire                           |
| A04 | La portée RICE utilise une période et l’effort couvre toute l’équipe.                          | définition de méthode      | S02                 | unités à adapter et estimations conservées                     | RICE                  | refuser périodes ou unités hétérogènes       |
| A05 | RICE n’est pas une règle stricte ; dépendances et fonctions attendues peuvent changer l’ordre. | limite primaire            | S02                 | exemple Intercom, pas loi universelle                          | RICE, sources         | aucun statut par score                       |
| A06 | Un test explicite nomme hypothèse, test, mesure et seuil.                                      | cadre méthodologique       | S03 Strategyzer     | ressource commerciale, plusieurs tests parfois nécessaires     | options, outil        | seuil manquant = STOP                        |
| A07 | Les preuves doivent être à jour, valides, transparentes et reliées aux tests.                  | principe organisationnel   | S04 Home Office     | administration britannique                                     | problème, sources     | source, période, limite obligatoires         |
| A08 | Petits lots et retour rapide permettent de corriger la trajectoire.                            | capacité de livraison      | S05 DORA            | pas de délai universel                                         | RICE, sources         | lot cohérent et testable                     |
| A09 | Regrouper les petits lots avant test ou livraison retarde le retour.                           | piège documenté            | S05                 | livraison logicielle                                           | RICE                  | ne pas confondre tickets et lot livré        |
| A10 | Le SSDF fournit des pratiques de sécurité de haut niveau à intégrer au cycle.                  | recommandation publique US | S06 NIST            | ne classe pas une vulnérabilité ; pas norme française générale | voies, sources        | sécurité hors score                          |
| A11 | Réutiliser, intégrer et acheter doivent être considérés.                                       | critère public UK          | S07 GOV.UK          | dépense publique britannique                                   | options, sources      | intégration comme alternative conditionnelle |
| A12 | La recherche ne doit pas seulement chercher le populaire.                                      | principe méthodologique    | S08 GOV.UK          | services publics                                               | FAQ, RICE             | vote = signal borné                          |
| A13 | 6 + 3 = 9, reste 1 sur capacité 10.                                                            | exemple fictif exact       | moteur local        | aucune moyenne, aucune mission réelle                          | capacité, exemple     | candidat à revue                             |
| A14 | 8 + 3 = 11, dépassement 1 sur capacité 10.                                                     | exemple fictif exact       | moteur local        | même limite                                                    | capacité, exemple     | STOP sans réduction automatique              |
| A15 | Une dépendance partagée est comptée une fois.                                                  | règle de calcul locale     | moteur pur et tests | dépend de l’identité stable                                    | capacité              | éviter le double comptage                    |
| A16 | Une capacité ou un effort inconnu laisse un reste inexploitable.                               | garde-fou local            | moteur pur et tests | aucun zéro imputé                                              | capacité, outil       | STOP                                         |
| A17 | Le statut candidat n’autorise aucun développement.                                             | convention locale          | gel et moteur       | nécessite revue humaine                                        | ouverture, revue, FAQ | ne pas annoncer le chantier                  |
| A18 | Toute action de la fermeture du lot doit avoir un responsable avant le statut candidat.        | garde-fou local            | gel, page et moteur | ne promet aucune date ni exécution                             | capacité, outil       | responsable absent = STOP                    |
| A19 | Productboard traite les valeurs nulles de certains champs comme zéro dans ses formules.        | comportement fournisseur   | C08 Productboard    | version et produit propres, pas règle générale                 | RICE, sources         | vérifier la convention de l’outil            |

### Formulations retirées ou interdites

- « RICE objective la roadmap » : remplacé par « structure une discussion ».
- « Les demandes les plus fréquentes sont prioritaires » : remplacé par un
  signal avec population, période et limite.
- « Le plus gros client passe toujours premier » : retiré.
- « L’intégration coûte moins cher » : retiré faute de contexte et de TCO.
- « Un petit lot prend quelques jours » : retiré ; aucune durée universelle.
- « La sécurité est must-have » : remplacé par une voie fondée sur le risque.
- Toute moyenne de churn, revenu, conversion, rétention, effort ou délai :
  absente.
- Toute présentation d’un exemple fictif comme client ou mission : interdite.

## G. Calculs, moteur et scénarios

### G1. Contrat numérique

- Unité : jour-personne sur la période nommée par le lecteur.
- Borne technique : 0 à 10 000 inclus.
- Précision : trois décimales maximum.
- Séparateur : point uniquement.
- Exposant, virgule, négatif, précision excessive et valeur hors borne refusés
  avant conversion.
- Représentation : chaîne brute, puis entier exact en millièmes de
  jour-personne avec Number après validation. La borne maximale mise à
  l’échelle vaut 10 000 000, donc reste très inférieure à
  Number.MAX_SAFE_INTEGER.
- Vide : inconnu.
- Zéro : valeur explicite valide.
- Aucune conversion par Number avant validation.
- Borne identique dans moteur, interface, page et tests.

### G2. Formule

Lot complet = somme des demandes sélectionnées + somme de leurs dépendances
nécessaires, chaque identifiant stable une seule fois.

Reste = capacité totale sur la même période - lot complet.

Inclus :

- demandes comparables sélectionnées avec décision construire, tester ou
  acheter/intégrer ;
- fermeture transitive des dépendances présentes seulement si leur route et
  leur décision sont elles aussi comptables ;
- effort complet déclaré de chaque identifiant ;
- dépendance partagée une seule fois.
- responsable explicite pour chaque action présente dans la fermeture ; une
  intégration ou un test nécessaire sans responsable maintient STOP.

Exclus :

- voies critiques non sélectionnées ;
- toute voie critique même cochée, avec STOP de cohérence ;
- demandes différées ou demandes comparables marquées « traiter d’abord » ;
- travail non déclaré ;
- dates civiles, rendement, parallélisme et probabilités ;
- toute valeur vide.

Si graphe, effort ou capacité est inexploitable, le moteur conserve le
sous-total connu mais ne publie pas de reste exploitable.

### G3. Exemple fictif à cinq demandes

| ID            | Voie                      | Décision            | Effort | Dépendances   | Sélection                   |
| ------------- | ------------------------- | ------------------- | ------ | ------------- | --------------------------- |
| REQ-INCIDENT  | incident                  | traiter d’abord     | 2      | aucune        | non                         |
| REQ-TEST      | comparable, preuve faible | tester              | 4      | aucune        | non                         |
| REQ-BUILD     | comparable                | construire          | 6      | REQ-INTEGRATE | oui                         |
| REQ-INTEGRATE | comparable                | acheter ou intégrer | 3      | aucune        | non, mais nécessaire au lot |
| REQ-DEFER     | comparable                | différer            | 2      | aucune        | non                         |

Période fictive : lot pilote du 3 au 14 août 2026.

Capacité déclarée : 10 jours-personne.

Équation :

REQ-BUILD 6 + REQ-INTEGRATE 3 = 9 jours-personne.

Équation publique : REQ-BUILD (6 j-p) + REQ-INTEGRATE (3 j-p) = 9 j-p ;
capacité 10 j-p ; reste 1 j-p.

Reste :

10 - 9 = 1 jour-personne.

Contrôle inverse :

9 + 1 = 10.

Statut :

NEXT_LOT_CANDIDATE_FOR_REVIEW.

Ce statut signifie uniquement que les garde-fous locaux autorisent une revue
humaine.

### G4. Dépassement

Modification fictive : effort de REQ-BUILD porté de 6 à 8.

8 + 3 = 11 jours-personne.

11 - 10 = dépassement de 1.

Le lot dépasse la capacité de 10 de 1 jour-personne.

Statut : STOP_SELECTED_LOT_EXCEEDS_CAPACITY.

Le moteur ne retire aucune demande et n’augmente aucune capacité.

### G5. Dépendance partagée

Deux demandes sélectionnées dépendent toutes deux de REQ-INTEGRATE.

La fermeture utilise un Set d’identifiants ; REQ-INTEGRATE apparaît et se
compte une seule fois. La règle et l’ordre d’insertion sont testés.

### G6. Graphe inexploitable

- identifiant dupliqué : STOP ;
- dépendance absente : STOP ;
- auto-dépendance : STOP ;
- cycle : STOP ;
- total global inexploitable même si un sous-total local existe.

### G7. Inconnues et zéro

- capacité inconnue, efforts connus : sous-total 9, capacité et reste inconnus ;
- effort de REQ-INTEGRATE inconnu : sous-total connu 6, total et reste inconnus ;
- effort explicite 0 : valeur connue, non remplacée et non confondue avec vide ;
- capacité connue mais vide : STOP ;
- valeur négative, 1.2345, 1e3, 1,5 ou 10001 : refus avant conversion.

### G8. Preuve faible

- test, mesure et seuil complets, demande proposée à l’action : statut
  TESTS_REQUIRED_BEFORE_BUILD ;
- seuil absent : STOP_REQUIRED_CONTEXT_UNKNOWN ;
- toute décision explicite tester exige elle aussi test, mesure et seuil, même
  si la force de preuve déclarée n’est pas faible ;
- une demande orientée vers tester mais non sélectionnée reste visible dans
  `testRequestIds` et dans le Markdown ; elle n’écrase pas le statut global du
  lot distinct REQ-BUILD + REQ-INTEGRATE ;
- aucune transformation automatique du test en construction.

### G9. Voies critiques et report

- incident sans responsable ou prochaine action :
  STOP_CRITICAL_ROUTE_UNASSIGNED ;
- route critique avec décision autre que traiter d’abord :
  STOP_REQUIRED_CONTEXT_UNKNOWN ;
- demande comparable marquée traiter d’abord :
  STOP_REQUIRED_CONTEXT_UNKNOWN ;
- report sans événement observable :
  STOP_REQUIRED_CONTEXT_UNKNOWN ;
- voie critique sélectionnée dans la comparaison :
  STOP_REQUIRED_CONTEXT_UNKNOWN, puis exclusion de la fermeture ;
- demande différée sélectionnée : STOP_REQUIRED_CONTEXT_UNKNOWN, exclusion de
  la fermeture et aucun faux dépassement ;
- dépendance nécessaire différée ou critique :
  STOP_DEPENDENCY_OR_CAPACITY_UNKNOWN et total global inconnu.

### G10. Ordre stable

1. STOP_REQUIRED_CONTEXT_UNKNOWN ;
2. STOP_CRITICAL_ROUTE_UNASSIGNED ;
3. STOP_DEPENDENCY_OR_CAPACITY_UNKNOWN ;
4. STOP_SELECTED_LOT_EXCEEDS_CAPACITY ;
5. TESTS_REQUIRED_BEFORE_BUILD ;
6. NO_BUILD_CANDIDATE ;
7. NEXT_LOT_CANDIDATE_FOR_REVIEW.

Le moteur expose aussi les raisons des statuts moins prioritaires pour la revue,
mais le libellé global suit le premier statut non vide dans cet ordre.

### G11. Interface et confidentialité

- cinq demandes maximum ;
- au-delà de cinq, brouillons séparés sur la même période puis revue commune de
  tous les Markdown ; l’ordre des groupes n’est pas un classement ;
- identités UI séparées des identifiants métier ;
- clefs React stables après ajout, édition et suppression ;
- saisies sans réseau, fetch, cookie, localStorage ou sessionStorage ;
- copie Markdown avec succès annoncé ;
- refus du presse-papiers avec texte complet sélectionnable ;
- réinitialisation complète ;
- « non applicable » reste distinct de « à vérifier » dans un Markdown vert ;
- aucun download, CSV, XLS ou XLSX.

## H. Plan public et journal P1

### H1. Plan annoté

| Section     | Question résolue                           | Preuve ou exemple                  | Décision                                          |
| ----------- | ------------------------------------------ | ---------------------------------- | ------------------------------------------------- |
| 01 Réponse  | un score décide-t-il ?                     | réponse dans les 150 premiers mots | non, qualifier et séparer                         |
| 02 Problème | comment sortir de la solution demandée ?   | GOV.UK et exemple tableau de bord  | hypothèse ou problème prouvé                      |
| 03 Voies    | quelles demandes ne sont pas comparables ? | cinq voies et NIST                 | attribuer une revue propre                        |
| 04 Options  | faut-il toujours coder ?                   | cinq décisions                     | construire, tester, traiter, intégrer ou différer |
| 05 Capacité | le lot complet tient-il ?                  | équation 6 + 3 = 9 sur 10          | candidat, inconnu ou STOP                         |
| 06 Exemple  | comment suivre cinq demandes ?             | cas fictif et contre-cas           | une voie par demande                              |
| 07 Atelier  | que faire sans contacter l’agence ?        | moteur et Markdown                 | préparer une revue                                |
| 08 RICE     | quand le score reste-t-il utile ?          | Intercom et DORA                   | secondaire, idées homogènes                       |
| 09 Revue    | que signifie candidat ?                    | visuel 1:1 et checklist            | aucune autorisation automatique                   |

FAQ, sources, limites, guides liés et CTA sont hors du compte des neuf
sections.

### H2. Visuels prévus

| Fichier                                   | Ratio et taille   | Rôle                                                                        | Interdit                   |
| ----------------------------------------- | ----------------- | --------------------------------------------------------------------------- | -------------------------- |
| demandes-preuves-voies-16x9.svg et .webp  | 16:9 · 1600 × 900 | demande brute, preuve, puis voies sans progression automatique vers le code | podium ou score            |
| lot-dependances-capacite-4x3.svg et .webp | 4:3 · 1200 × 900  | lot 6, dépendance 3, capacité 10, reste 1, exemple fictif                   | moyenne de marché          |
| revue-humaine-decisions-1x1.svg et .webp  | 1:1 · 900 × 900   | cinq décisions autour d’une revue humaine                                   | gagnant automatique        |
| opengraph-image.tsx                       | 1200 × 630        | promesse sociale canonique                                                  | affirmation de publication |

SVG natifs, texte lisible, contraste clair et forme autonome. Les WebP seront
dérivés des SVG et inspectés à leur taille native.

### H3. Lectures obligatoires terminées avant le premier edit

- documents SKILL.md, 455 lignes, ainsi que read_review.md et
  verify_render.md ;
- prompt maître, 1 906 lignes, depuis le checkout canonique ;
- registre de coordination, 265 lignes ;
- CLAUDE.md, 98 lignes ;
- règle d’or, 831 lignes ;
- charte qualité, 1 119 lignes ;
- instructions qualité, 641 lignes ;
- workflow quatre passes, 763 lignes ;
- roadmap, 341 lignes ;
- modèle de dossier, 330 lignes ;
- gel d’entrée, 359 lignes ;
- DOCX rendu et texte intégral comme décrit en C.

### H4. Recherches réellement menées

- ouverture des sources S01 à S08 ;
- vérification auteur, date ou version, statut, portée, limite et conflit ;
- requêtes françaises sur prioriser fonctionnalités SaaS, demandes clients,
  RICE et MoSCoW ;
- lecture de résultats Productboard, Atlassian, Poyesis, Aetherio, Miro et
  Edana comme corpus concurrentiel ;
- recherche séparée de contradictions sur votes, revenu, fausse objectivité,
  petit lot, sécurité, intégration et effort complet ;
- aucune page commerciale utilisée comme preuve d’un seuil ou résultat.

### H5. Fichiers P1 créés ou remplacés

- docs/research/prioriser-fonctionnalites-mvp-saas.md ;
- docs/research/manifests/prioriser-fonctionnalites-mvp-saas-p1.sha256 ;
- src/app/guides/prioriser-fonctionnalites-mvp-saas/page.tsx ;
- src/app/guides/prioriser-fonctionnalites-mvp-saas/opengraph-image.tsx ;
- src/app/guides/prioriser-fonctionnalites-mvp-saas/priority-workshop-engine.ts ;
- src/app/guides/prioriser-fonctionnalites-mvp-saas/priority-workshop-engine.test.ts ;
- src/app/guides/prioriser-fonctionnalites-mvp-saas/priority-workshop-tool.tsx ;
- src/app/guides/prioriser-fonctionnalites-mvp-saas/priority-workshop-tool.test.tsx ;
- src/app/guides/prioriser-fonctionnalites-mvp-saas/content-quality.test.ts ;
- six fichiers SVG et WebP sous public/guides/prioriser-fonctionnalites-mvp-saas.

Le freeze est seulement lu et hashé. Aucun registre, redirect, hub, sitemap,
llms.txt, package, lockfile, verrou, autre guide ou fichier Git n’est modifié.

### H6. Défauts rencontrés et corrections

1. Le rendu DOCX empaqueté ne pouvait pas démarrer sans python, puis python3 ne
   possédait pas pdf2image. Correction : repli LibreOffice et pdftoppm, sans
   modifier le document.
2. Le premier lancement Vitest via npx ne trouvait pas vitest/config dans ce
   worktree sans node_modules. Correction de validation : lien symbolique
   temporaire et approuvé vers les dépendances déjà installées du checkout
   principal ; aucun package ni lockfile modifié. Ce lien est retiré avant le
   handoff.
3. Une fixture « preuve faible complète » dépassait la capacité avant
   d’atteindre TESTS_REQUIRED. Correction : capacité fictive portée à 20 dans ce
   test isolé afin de tester le bon garde-fou sans conflit de priorité.
4. Le premier TypeScript résolu a détecté deux défauts réels : FormulaBox
   n’accepte que children, et la cible du projet exclut les littéraux BigInt.
   Correction : contenu textuel enfant et entier Number en millièmes, borné à
   10 000 000 et contrôlé par Number.isSafeInteger après validation lexicale.
5. Les premiers WebP 4:3 et 1:1 ont révélé, à taille native, des aplats de
   dégradé mal rendus et un titre rogné. Correction des SVG par aplats explicites
   et titre raccourci, nouvelle conversion, puis seconde inspection native.
6. Le premier contrôle de contenu comparait l’ordre du JSX au lieu de l’ordre
   rendu et exigeait des graphies de dates trop littérales. Correction des
   assertions vers le HTML rendu et des jetons factuels communs. Le même
   contrôle a corrigé le temps initial de 19 minutes ; après le complément G1,
   il est recalculé à 9 minutes.
7. Une décision « construire » non sélectionnée pouvait garder un effort
   inconnu. Correction : toute décision de construction est désormais refusée
   tant que son effort complet n’est pas valide ; un cas dédié le prouve.
8. G1 a reproduit trois incohérences : une route incident pouvait porter la
   décision construire, une demande différée cochée était additionnée jusqu’à
   un faux dépassement 11/10, et traiter d’abord pouvait rester sur une demande
   comparable. Correction bornée : matrice route/décision explicite, sélection
   limitée à construire, tester ou acheter/intégrer sur route comparable,
   filtrage identique des dépendances et contrôles UI empêchant les couples ou
   cases incohérents. Les actions invalides restent visibles comme STOP mais ne
   contaminent plus la fermeture ou la capacité.

### H7. Contrôles P1

Le rendu statique de l’article, après exclusion des blocs explicitement retirés
du temps de lecture, contient 1737 mots visibles, soit 9 minutes à 200 mots par
minute. Cette cohérence est contrôlée automatiquement.

| Contrôle                              | Résultat final                                                                                            |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Vitest moteur et outil                | 40 tests verts : 31 moteur et 9 interface                                                                 |
| Vitest contenu + moteur + outil       | 56 tests verts sur 3 fichiers                                                                             |
| ESLint ciblé                          | zéro erreur et zéro avertissement sur le dossier de route                                                 |
| TypeScript                            | tsc --noEmit global vert                                                                                  |
| Prettier                              | contrôle Prettier 3 vert sur dossier, TypeScript et Markdown ; cache d’outil temporaire externe au projet |
| XML SVG                               | xmllint vert sur les 3 SVG                                                                                |
| WebP, dimensions et inspection native | RIFF WebP valides : 1600×900, 1200×900 et 900×900 ; 3 rendus inspectés à taille native                    |
| git diff --check                      | vert                                                                                                      |
| diff scope                            | limité au freeze lu, au dossier, au manifeste, à la route et à ses médias                                 |
| manifeste P1 exact                    | 15 entrées, dont le freeze ; rejeu SHA-256 exigé avant handoff                                            |

### H8. Risques résiduels

- Le guide n’est pas dans le registre partagé pendant P1 ; la page utilise une
  GuideEntry locale noindex afin d’être rendable sans sortir du scope.
- Le slug reste dans les redirects legacy jusqu’à intégration partagée.
- La date 2026-07-23T14:17:43+02:00 est une première trace Git historique,
  explicitement pas une preuve de premier déploiement.
- Aucune revue servie, responsive réelle, build, BAT, déploiement ou preuve
  publique n’appartient à P1.
- Les cadres britanniques et américains sont transposés avec leurs limites ;
  aucune norme française générale n’est affirmée.
- P2 doit rouvrir les sources et contre-sources, reproduire les calculs et
  chercher les omissions.

### H9. Porte P1

Verdict P1 : PRET_POUR_G1.

Après refus de G1 et correction bornée, la page, le moteur, l’outil, les tests
et les visuels sont complets dans le périmètre P1. Les trois reproductions G1 et
la matrice exhaustive des couples sont désormais testées. Aucun défaut P0 ou P1
local n’est connu après les contrôles ciblés, l’inspection native des trois
WebP, le rejeu du manifeste incluant le freeze et le contrôle de diff. Le
SHA-256 externe du manifeste est calculé dans le handoff afin d’éviter une
dépendance circulaire avec le hash du présent dossier.

PRET_POUR_G1 ne prouve ni G1 validée, ni P2, ni P3, ni P4, ni build, ni route
servie, ni BAT, ni commit, ni push, ni déploiement, ni publication, ni
indexation.

## I. Journal contradictoire P2

### I1. Snapshot P1 contrôlé avant toute modification

- manifeste lu intégralement :
  `docs/research/manifests/prioriser-fonctionnalites-mvp-saas-p1.sha256` ;
- 15 entrées sur 15 rejouées avec `shasum -a 256 -c` : OK ;
- SHA-256 externe du manifeste P1 :
  `958c8a4a565632099a8cfe493972d51c56b5a1dd33c130ba59821d02d87a91aa` ;
- le manifeste P1 reste une preuve historique en lecture seule pendant P2 ;
- aucun fichier partagé, registre, verrou, package, lockfile, autre guide ou
  fichier Git n’entre dans le périmètre P2.

### I2. DOCX P2 lu et rendu intégralement

Source :
`/Users/quentinhagnere/Downloads/Prompt #2 Enrichissement et vérification.docx`.

- skill Documents lu intégralement, avec `tasks/read_review.md` et
  `tasks/verify_render.md` ;
- le chargeur de dépendances du workspace n’a pas répondu dans la fenêtre
  bornée et a été interrompu sans modifier le projet ;
- repli sur le runtime empaqueté Python et `render_docx.py` du skill ;
- répertoire temporaire : `/private/tmp/hc-guide29-p2-docx.FpXaT1` ;
- 28 pages A4 rendues et inspectées à taille originale, de la page 1 à la page
  28 ;
- texte extrait : 1 064 lignes et 7 555 mots, lu jusqu’à la fin ;
- deux pages de respiration, 3 et 22, proviennent de la pagination ; aucune
  information utile ni aucun visuel n’est rogné ;
- intentions conservées : vérification primaire indépendante, recherche de
  contre-preuves, recalcul, pédagogie, maillage et journal exact ;
- prescriptions neutralisées : identité Hagnéré Patrimoine ou LMNP, promesse
  top 1, quotas de titres, mots ou FAQ, répétition de mots-clés, FAQPage,
  HowTo, Person, Organization, wordCount, sitemap ou llms.txt manuel, tableur,
  commit, publication et orchestration multi-agent du document.

### I3. Sources et contre-sources rouvertes le 3 août 2026

| Source                                          | État réellement observé                                                                                       | Portée retenue                                                      |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| GOV.UK, besoins utilisateurs                    | publiée le 4 avril 2016, mise à jour le 23 mars 2017 ; problème, preuve, dépendances et traçabilité visibles  | service public britannique, pas obligation SaaS privée              |
| Intercom, RICE                                  | Sean McBride, 5 janvier 2018 ; formule, période, effort d’équipe et avertissement contre la règle stricte     | méthode de son éditeur, échelles estimées                           |
| Strategyzer, Test Card                          | Alex Osterwalder, 5 mars 2015 ; hypothèse, test, mesure et seuil confirmés                                    | ressource commerciale, aucun seuil universel                        |
| Home Office, Design from evidence               | mise à jour le 9 août 2023 ; preuve valide, transparente, fonctionnelle ou non fonctionnelle, puis test       | doctrine d’une administration britannique                           |
| DORA, Working in small batches                  | mise à jour le 8 décembre 2025 ; lot indépendant et testable, piège du regroupement avant retour              | livraison logicielle ; aucune durée universelle importée            |
| NIST SP 800-218                                 | version finale 1.1 publiée en février 2022 ; document final du 3 février 2022                                 | recommandation US de haut niveau, pas classement ni norme française |
| GOV.UK, Technology Code of Practice             | redirection vers la page canonique ; mise à jour le 7 juillet 2025 ; concevoir, construire, intégrer, acheter | critères gouvernementaux britanniques                               |
| GOV.UK, introduction à la recherche utilisateur | publiée le 8 avril 2016, mise à jour le 23 mars 2017 ; chercher ce qui fonctionne, pas seulement le populaire | le vote reste un signal, pas une non-preuve universelle             |
| Productboard, CIS                               | mise à jour le 18 juin 2026 ; importance déclarée de 0 à 3 et défaut +1 documentés                            | score du fournisseur, pas preuve du problème ou du coût complet     |
| Productboard, formules                          | page canonique mise à jour le 30 juin 2026 ; champs nuls automatiquement convertis en zéro                    | convention du produit, contre-exemple explicite à la règle locale   |
| Atlassian, feature requests et cadres           | pages actuelles ouvertes ; contexte utile mais promesses de tri, objectivité et outils commerciales           | corpus concurrentiel seulement                                      |
| Poyesis                                         | article daté du 18 juin 2025 actuellement contaminé par un long contenu de paris en ligne italiens            | source rejetée ; aucune affirmation ou faux cas client repris       |
| Aetherio, Miro et Edana                         | pages actuelles ouvertes ; roadmaps, votes, matrices et scorecards dominants                                  | corpus commercial, aucune preuve de résultat ou de seuil            |

### I4. Défauts reproduits, objections et corrections P2

| ID    | Gravité | Reproduction contradictoire                                                                                         | Correction et preuve attendue                                                                                     |
| ----- | ------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| P2-01 | P1      | `REQ-INTEGRATE`, dépendance du lot 9/10, sans responsable renvoyait encore `NEXT_LOT_CANDIDATE_FOR_REVIEW`          | toute action de la fermeture exige un responsable ; test moteur dédié et STOP requis                              |
| P2-02 | P2      | le Markdown vert de l’exemple contenait 20 occurrences de « à vérifier » pour des champs en réalité non applicables | sortie contextuelle « non applicable » ; zéro « à vérifier » dans l’exemple vert                                  |
| P2-03 | P2      | l’équation disait exclure les seules voies critiques non sélectionnées alors qu’une voie critique cochée est exclue | équation corrigée vers toutes les voies critiques, demandes différées, décisions non comptables et travail absent |
| P2-04 | P2      | le libellé UI du petit test ne citait que la preuve faible, mais le moteur l’exige aussi pour la décision tester    | libellé aligné sur les deux déclencheurs                                                                          |
| P2-05 | P2      | le lecteur part de dix demandes alors que l’atelier en accepte cinq, sans règle de passage entre sessions           | mêmes période et règles, Markdown relus ensemble, ordre des groupes explicitement non classant                    |
| P2-06 | P2      | la page affirmait qu’un vote ne suffit pas sans afficher S08 parmi ses sources visibles                             | source GOV.UK S08 ajoutée avec sa portée et sa limite                                                             |
| P2-07 | P2      | aucune contre-source publique ne matérialisait le risque « vide devient zéro » dans un outil de formule             | comportement Productboard daté, sourcé, borné au produit et opposé explicitement à la convention locale           |
| P2-08 | P2      | la source concurrente Poyesis était encore décrite comme exploitable malgré sa contamination actuelle               | source rejetée dans D2 ; aucune affirmation ni aucun exemple repris                                               |
| P2-09 | P2      | le disclaimer lecteur exposait encore « reconstruction P1 » pendant la passe suivante                               | phase interne retirée de la copie publique ; limites de release conservées                                        |

Aucun défaut P0 n’a été trouvé. Le soupçon initial selon lequel une demande à
preuve faible non sélectionnée devait écraser le statut global a été réfuté :
REQ-TEST reste visible comme test dans `testRequestIds`, la décision et le
Markdown, tandis que le lot distinct REQ-BUILD + REQ-INTEGRATE peut rester
candidat à 9/10. Ajouter un STOP global aurait rendu trompeuse la décision du
lot sélectionné ; aucune correction n’a donc été appliquée sur ce point.

### I5. Recalculs indépendants et scénarios adversariaux

Les scénarios ont été rejoués directement contre le moteur pur, sans reprendre
le verdict P1 comme preuve :

- base : 6 + 3 = 9, capacité 10, reste 1,
  `NEXT_LOT_CANDIDATE_FOR_REVIEW` ;
- dépassement : 8 + 3 = 11, capacité 10, dépassement 1,
  `STOP_SELECTED_LOT_EXCEEDS_CAPACITY` ;
- capacité inconnue : sous-total et total connus 9, capacité et reste inconnus,
  `STOP_DEPENDENCY_OR_CAPACITY_UNKNOWN` ;
- effort de REQ-INTEGRATE inconnu : sous-total 6, total et reste inconnus,
  jamais zéro ;
- effort explicite 0 pour REQ-INTEGRATE : total 6 et reste 4 ;
- dépendance partagée : 4 + 3 + 6 = 13 sur capacité 20, dépendance comptée une
  fois ;
- dépendance absente, auto-dépendance, cycle et identifiant dupliqué : total
  inexploitable ;
- preuve faible sans seuil : `STOP_REQUIRED_CONTEXT_UNKNOWN` ; preuve faible
  complète et sélectionnée : `TESTS_REQUIRED_BEFORE_BUILD` lorsque les STOP
  plus prioritaires sont levés ;
- incident sans responsable : `STOP_CRITICAL_ROUTE_UNASSIGNED` ; report sans
  événement : `STOP_REQUIRED_CONTEXT_UNKNOWN` ;
- zéro, négatif, exposant, virgule, 1.2345 et 10001 rejoués conformément au
  contrat exact en millièmes ;
- avant correction P2, responsable vide sur REQ-INTEGRATE : statut candidat ;
  après correction : `STOP_REQUIRED_CONTEXT_UNKNOWN`, total explicatif 9
  conservé ;
- avant correction P2, Markdown vert : 20 « à vérifier » ; après correction :
  zéro « à vérifier » et 20 « non applicable » ;
- une voie critique cochée reste exclue de la fermeture et l’équation le dit
  désormais sans exception textuelle fausse.

### I6. Fichiers P2 modifiés dans le seul périmètre du slug

- `docs/research/prioriser-fonctionnalites-mvp-saas.md` ;
- `docs/research/manifests/prioriser-fonctionnalites-mvp-saas-p2.sha256` ;
- `src/app/guides/prioriser-fonctionnalites-mvp-saas/page.tsx` ;
- `src/app/guides/prioriser-fonctionnalites-mvp-saas/content-quality.test.ts` ;
- `src/app/guides/prioriser-fonctionnalites-mvp-saas/priority-workshop-engine.ts` ;
- `src/app/guides/prioriser-fonctionnalites-mvp-saas/priority-workshop-engine.test.ts` ;
- `src/app/guides/prioriser-fonctionnalites-mvp-saas/priority-workshop-tool.tsx` ;
- `src/app/guides/prioriser-fonctionnalites-mvp-saas/priority-workshop-tool.test.tsx`.

Les visuels et l’OG ont été relus et inspectés, mais aucune modification
arbitraire n’était justifiée. Le freeze et le manifeste P1 restent inchangés.

### I7. Temps de lecture après enrichissement P2

Le rendu statique de l’article, après exclusion des blocs marqués hors temps de
lecture, contient 1884 mots visibles, soit 9 minutes à 200 mots par minute.
Le contrôle automatisé doit rester vert après formatage final.

### I8. Contrôles P2 finaux

| Contrôle                               | Résultat final                                                                                  |
| -------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Snapshot P1 avant edit                 | 15/15 OK ; SHA externe `958c8a4a…a91aa`                                                         |
| Premier rejeu Vitest après corrections | 57/58 ; seul échec : nouvelle empreinte de lecture absente du dossier                           |
| Vitest final moteur, outil et contenu  | 58/58 sur 3 fichiers : 32 moteur, 9 interface, 17 contenu                                       |
| ESLint ciblé                           | zéro erreur et zéro avertissement sur le dossier de route                                       |
| TypeScript                             | `tsc --noEmit` global vert                                                                      |
| Prettier 3.9.6                         | écriture ciblée puis contrôle vert sur route, freeze et dossier                                 |
| XML                                    | `xmllint --noout` vert sur les trois SVG                                                        |
| WebP                                   | RIFF valides ; 1600×900, 1200×900 et 900×900 confirmés par `sips`                               |
| Inspection visuelle native             | trois WebP lisibles, sans rognage ni hiérarchie automatique                                     |
| Diff                                   | `git diff --check` vert ; modifications limitées au slug et à son propre dossier/manifeste P2   |
| Dépendances temporaires                | lien `node_modules` retiré après chaque commande ; aucun résidu                                 |
| Manifeste P2                           | 16 entrées exactes, dont le manifeste P1 comme preuve lue ; rejeu intégral requis après journal |

P2 n’a lancé ni build, ni serveur, ni BAT, conformément à sa frontière. Aucun
package ou lockfile n’a été installé ou modifié ; Prettier a utilisé un cache
npm externe au projet et les autres contrôles un lien de dépendances temporaire
retiré par `trap`.

### I9. Risques résiduels transmis à P3 et à l’intégration

- l’article demeure une `GuideEntry` locale noindex tant que l’intégration
  partagée n’a pas lieu ;
- le slug historique reste géré par le redirect partagé, hors scope P2 ;
- aucun contrôle de page réellement servie, mobile, clavier, axe, thème ou
  impression n’est revendiqué avant P3 ;
- aucun build, déploiement, route publique, publication ou indexation n’est
  prouvé ;
- l’état compromis de Poyesis et la convention Productboard sont des
  observations datées du 3 août 2026, susceptibles de changer ;
- la première trace Git du 23 juillet 2026 reste une provenance historique,
  pas une preuve du premier déploiement public.

### I10. Porte P2

Après correction et rejeu, aucun défaut P0, P1 ou P2 local connu ne reste dans
le périmètre audité. Le moteur conserve les sept statuts et le cas simultané
REQ-TEST + lot 9/10, bloque désormais toute action sans responsable dans la
fermeture, distingue « non applicable » de « à vérifier », publie des
inclusions et exclusions exactes, et expose les contre-sources avec leur portée.

Verdict P2 : PRET_POUR_G2.

PRET_POUR_G2 ne prouve ni G2 validée, ni P3, ni P4, ni intégration, ni build,
ni route servie, ni BAT, ni commit, ni push, ni déploiement, ni publication, ni
indexation.

### I11. Refus G2 et correction bornée

G2 a refusé le premier snapshot P2 sur un point précis : la page officielle
Productboard « Create your own prioritization formulas » était datée du 8 avril
2026 dans C08, I3, la source et le paragraphe publics, ainsi que le test de
contenu, alors que sa réouverture affiche « Updated June 30, 2026 13:20 ».

La correction est strictement limitée à cette source « formules » : C08, I3,
la source et le paragraphe publics attendent désormais le 30 juin 2026. À ce
stade P2, la date alors observée du 8 avril 2026 restait conservée séparément
pour C02, « Customer Importance Score ». Le recontrôle transversal ultérieur a
constaté sa mise à jour au 18 juin 2026 et la reprise qualité N la corrige sans
la confondre avec la page « formules ».

Le rejeu post-correction confirme :

- Vitest : 58/58 sur les trois fichiers, soit 32 tests moteur, 9 tests
  d’interface et 17 tests de contenu ;
- ESLint ciblé : zéro erreur et zéro avertissement ;
- TypeScript : `tsc --noEmit` global vert ;
- Prettier 3.9.6 : contrôle vert sur la route, le freeze et le dossier ;
- XML : les trois SVG sont valides ;
- WebP : trois RIFF valides aux dimensions 1 600×900, 1 200×900 et 900×900 ;
- diff : `git diff --check` vert ;
- dépendances temporaires : lien retiré, aucun `node_modules` résiduel.

Le manifeste P2 est régénéré après cette journalisation, conserve exactement
16 entrées et doit être rejoué intégralement. Son empreinte externe est remise à
l’orchestrateur sans l’inscrire ici, afin d’éviter une auto-référence.

Porte rouverte après correction bornée : PRET_POUR_G2.

## J. Journal de polish rédactionnel P3

### J1. Snapshot P2 et lectures obligatoires avant le premier edit

Le manifeste P2 a été rejoué intégralement avant toute modification : 16/16
entrées exactes. Son empreinte externe observée est
`5afb2cbf2d02b2b363251ae912db92ec40aa8ff24774098057da5319df48842e`.
Le manifeste P1 et le manifeste P2 ont été lus mais ne sont pas modifiés par
P3.

Le prompt maître de 1 906 lignes, la règle d’or, la charte qualité, les
instructions qualité, le workflow quatre passes, la roadmap, le registre, le
freeze, le présent dossier jusqu’à I11 et les manifestes P1/P2 ont été lus
intégralement avant le premier edit. Le code du slug, ses tests, son OG et ses
copies visibles ont ensuite été relus dans leur état P2.

### J2. DOCX P3 lu et rendu intégralement

`/Users/quentinhagnere/Downloads/Prompt #3 - Polish Rédactionnel.docx` a été lu
intégralement : 1 311 lignes et 9 177 mots après extraction du PDF rendu. Le
rendu LibreOffice avec les dépendances documentaires embarquées produit 33
pages A4, toutes inspectées en image. Aucun texte rogné, chevauchement, glyphe
manquant ou tableau cassé n’a été constaté.

Les prescriptions utiles retenues sont le polish sans réécriture, l’oralité,
les transitions, la définition du jargon, la lisibilité des nombres et la
réponse directe en FAQ. Les prescriptions patrimoniales ou legacy incompatibles
avec la hiérarchie courante sont neutralisées : personas et marque Hagnéré
Patrimoine, promesse de top 1 ou de CTR, quotas de H2/FAQ/liens/marque,
`FAQPage`/`HowTo`/`Person`/`Organization`/`wordCount`, sitemap ou `llms.txt`
manuels, agents parallèles internes, commit, push et publication.

### J3. Triple lecture rédactionnelle

- **Dirigeant pressé :** la réponse directe, les cinq décisions et le cas 9/10
  restent compréhensibles sans lire les sources ; les termes « fermeture », «
  action comptable » et « route » créaient toutefois une friction inutile.
- **Lecteur sceptique :** les limites des sources, les inconnues, les STOP, le
  contre-cas 11/10 et le caractère seulement candidat du statut restent
  explicites ; aucun chiffre ou bénéfice nouveau n’était nécessaire.
- **Lecture téléphone sans BAT :** titres autonomes, paragraphes courts, listes
  bornées et étapes numérotées restent parcourables ; l’atelier demeure long par
  nature, mais ses libellés peuvent être compris sans vocabulaire de moteur.

Cette troisième lecture est une inspection rédactionnelle du JSX et du rendu
statique, pas un BAT navigateur. Aucun serveur ou build n’est lancé en P3.

### J4. Corrections P3 appliquées

| ID    | Zone                          | Avant ou friction                                      | Correction bornée                                                               |
| ----- | ----------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------- |
| P3-01 | FAQ intégration               | tournure « le guide retient acheter »                  | réponse directe : « acheter ou intégrer » reste une option à instruire          |
| P3-02 | Transition sections 01 → 02   | le socle finissait sans ramener à la demande           | transition explicite du socle séparé vers le problème que la demande recouvre   |
| P3-03 | Transition sections 02 → 03   | passage abrupt de la qualification aux voies critiques | phrase-pont : vérifier si la demande peut réellement entrer dans la comparaison |
| P3-04 | Calcul du lot                 | jargon public « fermeture »                            | « lot complet », « actions nécessaires au lot » et « calcul de capacité »       |
| P3-05 | Exemple 9/10                  | la valeur 3 perdait son unité dans une phrase          | unité répétée : 6 jours-personne puis 3 jours-personne, total inchangé          |
| P3-06 | Atelier et export             | « un Markdown » et « tous les Markdown »               | « brouillon Markdown copiable » puis « brouillons »                             |
| P3-07 | Introduction de RICE          | quatre termes accolés sans présenter la méthode        | méthode définie comme comparaison de portée, effet, confiance et effort         |
| P3-08 | Libellés de l’atelier         | « Route », « chaîne numérique », « action comptable »  | « voie d’instruction », « nombre », « action dans le calcul de capacité »       |
| P3-09 | Retour de copie               | Markdown nommé sans rappeler la nature du résultat     | « brouillon Markdown » dans les retours de succès et de repli                   |
| P3-10 | Cohérence éditoriale et tests | date P2 et assertions liées aux anciens libellés       | `dateModified` P3 et assertions strictement alignées sur les nouvelles copies   |

Le titre SEO, la meta description, le H1, la réponse visible du hero et le CTA
unique tardif étaient déjà cohérents : ils ne sont pas réécrits. Le CTA conserve
`/demarrer-un-projet`, n’annonce aucun résultat et peut maintenir un STOP.

### J5. Faits, calculs et nuances laissés inchangés

- aucun edit du moteur, de ses sept statuts, de leur ordre, de la matrice
  route/décision, du parseur numérique ou de la formule ;
- base fictive inchangée : 6 + 3 = 9 jours-personne, capacité 10, reste 1 ;
- contre-cas inchangé : 8 + 3 = 11, dépassement 1 ;
- dépendance partagée comptée une fois, inconnu distinct de zéro, trois
  décimales au maximum et borne 10 000 inchangés ;
- preuve faible, test, mesure et seuil ; propriétaire des voies critiques et de
  toutes les actions nécessaires ; report avec événement de réouverture : mêmes
  règles ;
- sources, auteurs, dates, portées, limites et conflit Productboard inchangés ;
- aucune source, promesse, cas client, téléchargement ou recommandation
  automatique ajouté ;
- statut candidat toujours limité à une revue humaine, sans autorisation de
  construire, délai ou résultat promis.

### J6. Fichiers P3 modifiés dans le seul périmètre du slug

- `docs/research/prioriser-fonctionnalites-mvp-saas.md` ;
- `docs/research/manifests/prioriser-fonctionnalites-mvp-saas-p3.sha256` ;
- `src/app/guides/prioriser-fonctionnalites-mvp-saas/page.tsx` ;
- `src/app/guides/prioriser-fonctionnalites-mvp-saas/content-quality.test.ts` ;
- `src/app/guides/prioriser-fonctionnalites-mvp-saas/priority-workshop-tool.tsx` ;
- `src/app/guides/prioriser-fonctionnalites-mvp-saas/priority-workshop-tool.test.tsx`.

Le moteur, ses tests, l’OG, le freeze, les six médias et les manifestes P1/P2
restent inchangés.

### J7. Temps de lecture P3

Le rendu statique de l’article, après exclusion de l’atelier marqué hors temps
de lecture, contient 1909 mots visibles, soit 10 minutes à 200 mots par minute.
L’augmentation de 25 mots par rapport au snapshot P2 vient uniquement des
transitions et clarifications rédactionnelles ci-dessus.

### J8. Premier contrôle après polish

Le premier test de contenu après edit a obtenu 15/17. Les deux seuls échecs
reproduisaient des attentes éditoriales devenues obsolètes : temps déclaré 9 au
lieu de 10 pour 1909 mots, puis ancienne chaîne de repli « Sélectionnez le
Markdown ». Le temps déclaré et l’assertion ont été alignés ; aucune correction
du moteur ou des faits n’a été nécessaire.

### J9. Porte P3

| Contrôle                         | Résultat final                                                                                 |
| -------------------------------- | ---------------------------------------------------------------------------------------------- |
| Snapshot P2 avant edit           | 16/16 exact ; SHA externe `5afb2cbf…8842e`                                                     |
| DOCX P3                          | 1 311 lignes, 9 177 mots, 33/33 pages rendues et inspectées                                    |
| Vitest moteur, outil et contenu  | 58/58 : 32 moteur, 9 interface, 17 contenu                                                     |
| ESLint ciblé                     | zéro erreur et zéro avertissement sur le dossier de route                                      |
| TypeScript                       | `tsc --noEmit` global vert                                                                     |
| Prettier                         | écriture ciblée puis contrôle vert sur les quatre fichiers TSX/TS modifiés et le dossier       |
| XML                              | `xmllint --noout` vert sur les trois SVG                                                       |
| WebP                             | RIFF conservés ; 1600×900, 1200×900 et 900×900 confirmés par `sips`                            |
| Diff                             | `git diff --check` vert ; edits P3 limités au slug, à ses tests, à son dossier et manifeste P3 |
| Dépendances temporaires          | lien `node_modules` retiré après chaque commande ; aucun résidu                                |
| Build, serveur et BAT navigateur | non lancés, conformément à la frontière P3                                                     |

Le manifeste P3 est régénéré après ce journal avec exactement 16 entrées : le
manifeste P2 comme preuve lue, le freeze, le dossier, les six médias et les sept
fichiers code/test du slug. Son rejeu intégral doit être exact ; son empreinte
externe est transmise à l’orchestrateur sans être inscrite ici afin d’éviter une
auto-référence.

### J10. Verdict P3

Aucun P0 ou P1 rédactionnel connu ne reste dans le périmètre contrôlé. Les
corrections retirent le jargon évitable, rendent les transitions 01→02 et 02→03
explicites, répètent l’unité du seul nombre ambigu, définissent le brouillon
Markdown et clarifient les libellés de l’atelier. Le moteur, les faits, les
calculs, les sources, les limites et la prudence du CTA restent inchangés.

Verdict P3 : PRET_POUR_G3.

PRET_POUR_G3 ne prouve ni G3 validée, ni P4, ni intégration, ni build, ni route
servie, ni BAT, ni commit, ni push, ni déploiement, ni publication, ni
indexation.

## K. Refus G3 et correction P3 bornée

### K1. Motif du refus

G3 refuse le snapshot P3 portant l’empreinte externe `7246f252…e0f27d`. Le
polish avait corrigé les copies principales de la page et de l’outil, mais pas
toutes les chaînes lecteur émises par le moteur lors d’un STOP ou dans le
brouillon Markdown. Les omissions confirmées étaient :

- « Route à vérifier », « - Route : », « route à vérifier » et « la route … est
  incohérente » ;
- « entrer dans la fermeture », « action comptable cohérente » et « décisions
  non comptables » ;
- « Prochaine action si la route est critique » dans le formulaire ;
- « chaînes numériques brutes » dans la page.

Le verdict J10 est donc refusé pour ce snapshot. La correction reste dans P3 et
ne rouvre ni le fond P2, ni le moteur de décision.

### K2. Périmètre du scan exhaustif

La page, le formulaire, tous les libellés publics du moteur, tous ses motifs,
l’équation et le Markdown ont été rescannés. Les noms internes TypeScript
(`route`, `selectedClosureIds`, `STOP_CRITICAL_ROUTE_UNASSIGNED`) restent
inchangés. Le scan distingue ces identifiants gelés des phrases effectivement
lues par une personne.

Les sorties ont été relues sur sept familles de scénarios : contexte ou voie
inconnus, voie et décision incompatibles, voie critique sans responsable,
dépendance différée, demande différée cochée, capacité inconnue et dépassement
de capacité. Les statuts, priorités de STOP et valeurs numériques produits avant
et après correction sont identiques.

### K3. Corrections de langue sans changement de condition

| Sortie lecteur                            | Ancienne copie                                       | Copie corrigée                                                        |
| ----------------------------------------- | ---------------------------------------------------- | --------------------------------------------------------------------- |
| Option de voie inconnue                   | Route à vérifier                                     | Voie d’instruction à vérifier                                         |
| Ligne du Markdown                         | Route                                                | Voie d’instruction                                                    |
| Motifs de voie                            | route à vérifier / la route est incohérente          | voie d’instruction à vérifier / la voie d’instruction est incohérente |
| Demande cochée mais exclue                | entrer dans la fermeture et la capacité              | entrer dans le calcul de capacité sous les conditions déjà définies   |
| Dépendance exclue                         | action comptable cohérente                           | dépendance qui ne peut pas entrer dans le calcul de capacité          |
| Équation                                  | décisions non comptables                             | décisions exclues du calcul de capacité                               |
| Formulaire                                | prochaine action si la route est critique            | prochaine action si la voie est critique                              |
| Conservation de la saisie                 | conserve les chaînes numériques brutes               | conserve chaque nombre exactement tel que saisi                       |
| Dernières occurrences publiques « route » | ancienne route, route servie, correction de sa route | ancienne URL, page servie, correction de sa voie d’instruction        |

Aucune condition, branche, matrice, sélection, fermeture interne, somme,
précision numérique, statut, ordre de statut, source, date, limite, nuance ou CTA
n’est modifié.

### K4. Triple lecture complète des sorties STOP

- **Dirigeant pressé :** chaque motif dit maintenant quelle voie ou quelle
  condition du calcul manque, sans employer « fermeture » ni « comptable ».
- **Lecteur sceptique :** le Markdown conserve le statut technique exact mais
  explique en français les inclusions, exclusions et raisons ; aucune exclusion
  n’est présentée comme une valeur nulle ou comme une priorité automatique.
- **Lecture téléphone :** l’étiquette du champ, le libellé sélectionné, le motif
  dans le bloc STOP puis la ligne correspondante du Markdown emploient tous «
  voie d’instruction ». Le passage formulaire → résultat → copie ne change plus
  de vocabulaire.

Un garde-fou automatisé retire uniquement les identifiants de statut gelés du
texte contrôlé, puis refuse les mots « route », « fermeture » et « comptable »
dans les copies lecteur de tous les scénarios adversariaux. Un second garde-fou
contrôle la page rendue et les libellés du formulaire.

### K5. Temps de lecture après correction G3

Résultat : 1914 mots visibles, soit 10 minutes. Les cinq mots supplémentaires
par rapport au snapshot refusé viennent de l’explication « chaque nombre
exactement tel que vous l’avez saisi » ; aucun fait n’est ajouté.

### K6. Contrôles et nouvelle porte P3

| Contrôle                              | Résultat final                                                                  |
| ------------------------------------- | ------------------------------------------------------------------------------- |
| Scénarios STOP relus                  | 7/7 ; statut, libellé, motifs, équation et lignes de voie du Markdown inspectés |
| Vitest moteur, outil et contenu       | 60/60 : 33 moteur, 9 interface, 18 contenu                                      |
| Garde-fous de langue ajoutés          | 2 : sorties adversariales du moteur/Markdown et copie rendue page/formulaire    |
| ESLint ciblé                          | zéro erreur et zéro avertissement                                               |
| TypeScript                            | `tsc --noEmit` global vert                                                      |
| Prettier                              | écriture ciblée puis contrôle vert                                              |
| XML                                   | `xmllint --noout` vert sur les trois SVG                                        |
| WebP                                  | RIFF conservés ; 1600×900, 1200×900 et 900×900 confirmés                        |
| Diff                                  | `git diff --check` vert                                                         |
| Dépendances temporaires               | lien retiré après chaque commande ; aucun `node_modules` résiduel               |
| Logique, calculs, dates, sources, CTA | aucune modification                                                             |
| Build, serveur, BAT, Git et release   | non lancés                                                                      |

Le manifeste P3 est régénéré après cette journalisation avec exactement 16
entrées et rejoué intégralement. Son empreinte externe remplace celle du
snapshot refusé et est transmise à l’orchestrateur sans auto-référence dans ce
dossier.

### K7. Verdict après correction du refus G3

Les sorties lecteur de la page, du formulaire, des quatre familles de STOP et
du Markdown emploient désormais un vocabulaire cohérent. Aucun P0 ou P1
rédactionnel connu ne reste dans le périmètre corrigé.

Verdict P3 corrigé : PRET_POUR_G3.

Ce verdict ne prouve ni G3 validée, ni P4, ni intégration, ni build, ni page
servie, ni BAT, ni commit, ni push, ni déploiement, ni publication, ni
indexation.

## L. Journal antipasse IA P4

### L1. Snapshot P3 et lectures obligatoires avant le premier edit

Le manifeste P3 a été rejoué intégralement avant toute modification : 16/16
entrées exactes. Son empreinte externe observée est
`9de98ccb8d612d5c11a35259a790ac7aed21ac2b15d1135b66fd73cf9be01ca6`.
Les manifestes P1, P2 et P3 ont été lus mais ne sont pas modifiés par P4.

Le prompt maître de 1 906 lignes, le registre, `CLAUDE.md`, la règle d’or, la
charte qualité, les instructions qualité, le workflow quatre passes, la
roadmap, le modèle de dossier, le freeze, le présent dossier jusqu’à K7 et les
trois manifestes antérieurs ont été lus intégralement avant le premier edit. La
page, l’OG, l’outil, le moteur, leurs trois fichiers de tests et toutes les
copies produites ont ensuite été relus dans leur état P3.

### L2. DOCX P4 lu et rendu intégralement

`/Users/quentinhagnere/Downloads/Prompt 4 - Antipasse IA.docx` a été lu jusqu’à
la fin : 381 lignes et 2 457 mots extraits. Le rendu documentaire produit neuf
pages A4, toutes inspectées à taille originale. Aucun texte rogné,
chevauchement, glyphe manquant ou tableau cassé n’a été constaté.

Les quinze motifs du DOCX ont été adaptés au projet courant. Ses prescriptions
legacy incompatibles avec le mandat restent neutralisées : voix de CGP,
familiarité fabriquée, exemple fiscal, sous-agents parallèles, serveur, `curl`,
build, schema FAQ ASCII, commit, push et publication. La passe porte uniquement
sur la voix lecteur de ce guide SaaS et sur les contrôles autorisés du slug.

### L3. Lecture indépendante des neuf H2 et des zones transversales

| Zone                    | Résultat de la lecture isolée                                                                                           | Décision P4                                                                                 |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| H2 01 · décision        | la règle, les cinq décisions et les conditions du lot répondent au titre ; le mémo comptait mécaniquement quatre gestes | titre du mémo dénombré retiré ; quatre vérifications distinctes conservées                  |
| H2 02 · problème        | la demande « tableau de bord » introduit une personne, une tâche et une inconnue avant la règle GOV.UK                  | aucune variation fabriquée                                                                  |
| H2 03 · voies critiques | cause, cinq voies et trace attendue sont explicites                                                                     | « concours de points » conservé : image simple du classement abusif, sans dramatisation     |
| H2 04 · options         | chaque décision a une condition de sortie ; le faux choix « maintenant ou jamais » est expliqué                         | contraste conservé car il nomme précisément l’alternative test, intégration ou report       |
| H2 05 · capacité        | période, unité, dépendances, 9/10, 11/10 et inconnues avancent dans un ordre causal                                     | parallélisme des diagnostics conservé pour comparer les états, pas pour remplir la section  |
| H2 06 · exemple         | cinq demandes, dates, personnes, efforts et résultats sont explicitement fictifs                                        | scénario et calculs inchangés ; aucune apparence de témoignage                              |
| H2 07 · atelier         | l’action locale mène du formulaire aux STOP puis au brouillon                                                           | « Horizon » et « datable » retirés ; structure du brouillon conservée pour le rejeu         |
| H2 08 · RICE            | formule, portée, limite Productboard et place secondaire de RICE répondent au titre                                     | contraste du titre conservé : il fixe la frontière entre comparaison homogène et exceptions |
| H2 09 · revue           | responsabilités, décision et étapes suivantes sont actionnables                                                         | auto-référence finale retirée ; mémo de contrôle conservé                                   |

Lecture transversale :

- **hero :** quatre phrases de longueurs et fonctions différentes, réponse
  directe, aucun adjectif vendeur ni promesse ; inchangé ;
- **FAQ :** réponses binaires données immédiatement, puis raisons différentes ;
  les « Non » ne forment pas une série décorative et restent inchangés ;
- **CTA :** unique, tardif, sans téléphone, résultat garanti ni date
  automatique ; inchangé ;
- **OG :** question et limite « aucun score arbitre » cohérentes avec la page ;
  inchangée ;
- **conclusion :** pas de récapitulatif formaté ; la dernière auto-référence au
  guide devient une limite directe sur les deux étapes suivantes ;
- **sorties de l’outil :** tous les statuts, motifs, équations et lignes du
  Markdown ont été relus ; seule la formulation « action datable » appelait une
  correction.

### L4. Relevé des quinze motifs et motifs complémentaires

| No  | Motif                                      | Présence vérifiée et traitement                                                                                                         |
| --- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | autosatisfaction                           | absente ; aucune exclusivité, supériorité ou auto-éloge                                                                                 |
| 2   | triptyque ou série par réflexe             | un titre « en quatre gestes » corrigé ; listes fonctionnelles conservées                                                                |
| 3   | symétrie binaire excessive                 | absente dans la prose ; matrices binaires nécessaires conservées                                                                        |
| 4   | adjectif vendeur sans donnée               | absent                                                                                                                                  |
| 5   | métaphore forcée                           | absente ; « concours de points » et « conversation, pas un chantier » sont des images simples qui portent deux limites précises         |
| 6   | parenthèses en cascade                     | absentes ; la parenthèse « drivers » définit un terme source une seule fois                                                             |
| 7   | connecteur robotique                       | aucun connecteur de la liste de contrôle trouvé dans les copies publiques                                                               |
| 8   | conclusion formatée ou répétitive          | absente ; une auto-référence finale a toutefois été rendue directe                                                                      |
| 9   | longueur de phrase uniforme                | absente : pivots courts, explications, tableaux et sources alternent naturellement                                                      |
| 10  | verbe neutre qui cache l’action            | aucun cas vérifié ; « Permettre à chaque équipe… » reste la phrase brute d’une demande fictive, donc sa formulation doit être conservée |
| 11  | formulation administrative                 | « Horizon » et « action datable » corrigés ; « instruire » reste le vocabulaire défini des voies séparées                               |
| 12  | inversion sujet-verbe artificielle         | absente                                                                                                                                 |
| 13  | puces parfaitement parallèles mais pauvres | aucune liste pauvre ; tableaux, checklist et Markdown restent parallèles pour être comparables et rejouables                            |
| 14  | dramatisation creuse                       | absente                                                                                                                                 |
| 15  | enchaînement logique implicite             | absent ; les transitions demande → preuve → voie → décision → capacité → revue nomment la cause et la conséquence                       |

Contrôles complémentaires :

- les contrastes négatifs répétés concernent les garde-fous du moteur — inconnu
  distinct de zéro, score non arbitre, statut candidat non autorisant — et ne
  sont pas remplacés par une variation qui affaiblirait la règle ;
- les trois phrases qui parlaient inutilement du guide ou de sa reconstruction
  ont été corrigées ; les liens « guide sur… », « guide de sécurité… » et «
  guide de calendrier » restent des intitulés utiles de routes voisines ;
- le hero, les neuf H2, l’exemple, l’outil local, la FAQ, le CTA et la conclusion
  gardent des voix différentes sans rupture de vocabulaire ;
- les guides voisins sur le calendrier et sur le socle du MVP emploient le même
  layout premium, un outil local, les STOP et la revue humaine. Le présent guide
  reste distinct par ses cinq voies, sa qualification de preuve, ses cinq
  décisions et son calcul de capacité du lot ; aucune structure de fond voisine
  n’est copiée.

### L5. Corrections P4 appliquées

| ID    | Zone                | Résidu vérifié                                                   | Correction bornée                                                                            |
| ----- | ------------------- | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| P4-01 | mémo H2 01          | titre compté « La réponse en quatre gestes »                     | « Avant de nommer un lot candidat » ; les quatre vérifications restent identiques            |
| P4-02 | limite DORA         | « délai universel pour ce guide » parlait du document            | « délai universel de développement » ; portée de la source inchangée                         |
| P4-03 | provenance publique | note de pipeline « Cette reconstruction reste locale et prête… » | provenance et six états de release reformulés comme faits vérifiables, sans en retirer aucun |
| P4-04 | atelier             | « Horizon et capacité »                                          | « Période et capacité », cohérent avec le champ et la règle de calcul                        |
| P4-05 | motif STOP          | « prochaine action datable »                                     | « prochaine action assez précise pour être planifiée » ; même branche et même STOP           |
| P4-06 | conclusion          | « transforme ce guide en promesse de délai »                     | « Ces deux étapes n’ajoutent aucune promesse de délai »                                      |
| P4-07 | garde-fous          | tests alignés seulement sur les anciennes copies                 | assertions ajoutées sur la période, la prochaine action et la provenance reformulées         |

Aucun titre SEO, meta description, H1, texte du hero, FAQ, CTA, source, auteur,
date, calcul, scénario, limite, statut, ordre de statut, condition, matrice,
sélection ou promesse n’est modifié. Le changement de texte dans le moteur ne
touche que le motif public associé à une condition déjà gelée ; le test vérifie
la nouvelle formulation.

### L6. Temps de lecture après correction P4

Le rendu statique de l’article, après exclusion de l’atelier marqué hors temps
de lecture, contient 1911 mots visibles, soit 10 minutes à 200 mots par minute.
Le retrait net de trois mots par rapport au snapshot P3 vient uniquement des
reformulations P4 ; `readTimeMin` reste donc 10.

### L7. Premier replay affecté

Le premier replay après les edits a obtenu 59/60. L’unique échec demandait la
nouvelle trace de temps de lecture dans le dossier : 1 911 mots au lieu des
1 914 mots historiques de P3. La présente section ajoute cette trace sans
modifier `readTimeMin`, le contenu factuel ou le calcul du test.

### L8. Contrôles finaux P4

| Contrôle                            | Résultat final                                                                     |
| ----------------------------------- | ---------------------------------------------------------------------------------- |
| Snapshot P3 avant edit              | 16/16 exact ; SHA externe `9de98ccb…01ca6`                                         |
| DOCX P4                             | 381 lignes, 2 457 mots, 9/9 pages rendues et inspectées                            |
| H2 isolés                           | 9/9 ; chaque section répond à son titre et mène à une règle, un test ou une action |
| Zones transversales                 | hero, OG, outil et sorties, FAQ, CTA et conclusion relus intégralement             |
| Quinze motifs                       | 15/15 recherchés ; six résidus de forme corrigés, passages structurés justifiés    |
| Vitest moteur, outil et contenu     | 60/60 : 33 moteur, 9 interface, 18 contenu                                         |
| ESLint ciblé                        | zéro erreur et zéro avertissement sur le dossier de route                          |
| TypeScript                          | `tsc --noEmit` global vert                                                         |
| Prettier 3.9.6                      | écriture ciblée puis contrôle vert sur les neuf fichiers texte du candidat         |
| XML                                 | `xmllint --noout` vert sur les trois SVG                                           |
| WebP                                | RIFF conservés ; 1600×900, 1200×900 et 900×900 confirmés par `sips`                |
| Dépendances temporaires             | lien retiré après chaque commande ; aucun `node_modules` résiduel                  |
| Build, serveur, BAT, Git et release | non lancés, conformément à la frontière P4                                         |

Le manifeste P4 est régénéré après ce journal avec exactement 16 entrées : le
manifeste P3 comme preuve lue, le freeze, le dossier, les six médias et les sept
fichiers code/test du slug. Son empreinte externe est transmise à
l’orchestrateur sans être inscrite ici afin d’éviter une auto-référence.

### L9. Verdict P4

Les résidus corrigés relevaient uniquement d’un comptage mécanique, de trois
auto-références ou notes internes et de deux formulations administratives.
Aucun P0 ou P1 connu ne reste dans le périmètre relu. Les faits, dates, sources,
calculs, scénarios, limites, statuts, ordre, conditions, matrice, CTA et promesse
restent inchangés.

Verdict P4 : PRET_POUR_G4.

PRET_POUR_G4 ne prouve ni G4 validée, ni contrôle qualité transversal, ni
intégration, ni build, ni page servie, ni BAT, ni commit, ni push, ni
déploiement, ni publication, ni indexation.

## M. Refus G4 et correction P4 bornée

### M1. Motif du refus

G4 refuse le snapshot P4 portant l’empreinte externe
`f5681d22e9c2e543c624dad50e1a1f2522266a62657bf3a63ad209f01c666757`.
La phrase publique « Cette version n’existe encore que dans le dépôt local »
décrivait un état temporaire. Elle serait devenue fausse après une intégration
ou un push, même sans page publique. Le verdict L9 est donc refusé pour ce
snapshot.

La reprise reste strictement bornée à la frontière de preuve du disclaimer, à
son garde-fou automatisé, au présent journal et au manifeste P4. Aucun autre
polish n’est rouvert.

### M2. Frontière de preuve stable

La copie corrigée sépare désormais quatre niveaux sans revendiquer leur état
courant :

1. la date affichée décrit la première trace Git et l’historique du code ;
2. la présence du contenu dans le code ou son intégration ne prouvent pas sa
   disponibilité publique ;
3. un build réussi ne prouve pas qu’une page est servie ou qu’un déploiement a
   eu lieu ;
4. page servie, déploiement, publication et indexation restent des preuves
   distinctes.

Le nouveau texte ne contient ni « local », ni affirmation sur un dépôt distant,
ni preuve d’intégration actuelle. Les cinq demandes restent explicitement
fictives ; les sources ne prouvent toujours ni conformité, ni sécurité, ni
résultat commercial.

Le test de contenu exige les deux formulations stables suivantes :

- « elle décrit l’historique du code, pas sa disponibilité publique » ;
- « La présence du contenu dans le code, son intégration ou un build réussi ne
  prouvent pas à eux seuls l’existence d’une page servie, d’un déploiement,
  d’une publication ou d’une indexation. »

Il refuse explicitement la future réapparition de « n’existe encore que dans le
dépôt local ».

### M3. Faits et temps de lecture

Aucun fait, date, source, calcul, scénario, limite, statut, ordre, condition,
matrice, CTA ou promesse n’est modifié. Le titre SEO, la meta description, le
H1, le hero, les neuf H2, l’exemple, l’outil, la FAQ, l’OG et la conclusion sont
inchangés depuis le snapshot P4 refusé.

Le rendu statique contient toujours 1911 mots visibles, soit 10 minutes à 200
mots par minute. `readTimeMin` reste 10.

### M4. Contrôles après correction G4

| Contrôle                                    | Résultat final                                                               |
| ------------------------------------------- | ---------------------------------------------------------------------------- |
| Vitest moteur, outil et contenu             | 60/60 : 33 moteur, 9 interface, 18 contenu                                   |
| Garde-fou de frontière stable               | phrase positive exigée et affirmation locale interdite                       |
| ESLint ciblé                                | zéro erreur et zéro avertissement                                            |
| TypeScript                                  | `tsc --noEmit` global vert                                                   |
| Prettier 3.9.6                              | écriture ciblée puis contrôle final vert                                     |
| XML et WebP                                 | trois SVG valides ; trois RIFF aux dimensions gelées                         |
| Portée                                      | page, test de contenu, dossier et manifeste P4 uniquement pour cette reprise |
| Dépendances temporaires                     | aucun `node_modules` résiduel                                                |
| Build, serveur, BAT, Git, shared et release | non lancés ou non modifiés                                                   |

Le manifeste P4 est régénéré après ce journal avec les mêmes 16 entrées. Il
inclut le manifeste P3 en preuve lue, sans réécrire P1, P2 ou P3. Son empreinte
externe est transmise à l’orchestrateur sans auto-référence dans ce dossier.

### M5. Verdict P4 après correction G4

La copie publique décrit désormais une relation de preuve durable au lieu d’un
état de travail temporaire. Aucun P0 ou P1 connu ne reste dans le périmètre
corrigé.

Verdict P4 corrigé : PRET_POUR_G4.

Ce verdict ne prouve ni G4 validée, ni contrôle qualité transversal, ni
intégration, ni build, ni page servie, ni BAT, ni commit, ni push, ni
déploiement, ni publication, ni indexation.

## N. Reprise qualité après le contrôle transversal Q1

### N1. Snapshot contrôlé et refus Q1

Le contrôle transversal indépendant a travaillé en lecture seule sur le
manifeste P4 exact, dont l’empreinte externe est
`b988dcef516602f3241316423fb7d5746c8930e81562f38e53a4a7d5615b97f8`.
Son rejeu était exact à 16/16 avant toute correction et ce manifeste historique
n’est pas réécrit par la reprise qualité.

Verdict Q1 : `NO_GO_QUALITE_GUIDE`, 89/100, zéro P0, deux P1 et trois P2.

- P1 numérique : une saisie non vide telle que `1e3` sur une demande différée
  ou sur une demande à tester non sélectionnée échappait au parseur strict. Le
  moteur pouvait alors maintenir un lot candidat et recopier cette saisie dans
  le brouillon.
- P1 accessibilité : les motifs restaient uniquement dans le bloc de résultat.
  Les contrôles fautifs n’exposaient ni `aria-invalid`, ni relation vers un
  message de correction propre au champ ; la zone Markdown scrollable était
  focusable mais sans nom accessible.
- P2 fraîcheur : la page Productboard « Customer Importance Score » affiche
  désormais une mise à jour au 18 juin 2026, et non au 8 avril. Elle reste
  distincte de la page « formules », datée du 30 juin 2026.
- P2 visuel : le visuel 16:9 conservait la phrase « La preuve et la route »
  alors que les copies lecteur emploient « voie d’instruction ».
- P2 de publication : `datePublished` décrit la première trace Git. Cette date
  historique doit encore être réconciliée avec une preuve de disponibilité
  publique avant toute publication réelle.

### N2. Correction numérique exhaustive

Chaque valeur `effortPersonDays` non vide passe désormais par le parseur strict
avant toute branche liée à la voie, à la décision, à la sélection ou au calcul
du lot. Exposant, virgule, négatif, syntaxe non décimale, précision supérieure à
trois décimales, dépassement de 10 000 ou entier non sûr alimentent
`STOP_DEPENDENCY_OR_CAPACITY_UNKNOWN`. Les règles plus strictes restent en
place : une construction exige toujours un effort connu, comme toute action
présente dans le lot complet.

Une valeur vide reste inconnue et n’est pas convertie en zéro. Elle peut rester
vide lorsque l’effort n’est pas requis, par exemple sur une demande différée,
un test non sélectionné ou une voie critique séparée. Un zéro saisi reste au
contraire une valeur explicite. Le brouillon conserve la chaîne fautive pour
permettre sa correction, mais son statut ne peut plus être candidat.

Les tests couvrent les six décisions `build`, `test`, `buy_integrate`, `defer`,
`treat_first` et `unknown`, chacune avec une sélection vraie puis fausse. Ils
reproduisent explicitement `REQ-DEFER.effortPersonDays = "1e3"` et le même
défaut sur `REQ-TEST`, puis contrôlent vide et zéro séparément.

### N3. Erreurs de champ et relations accessibles

L’évaluation expose maintenant `fieldErrors: Record<string, string[]>`. Les
clés reprennent des identifiants DOM stables et indépendants des libellés
visibles. Chaque motif de saisie est relié au ou aux contrôles concernés :
période, résultat, mesure de revue, capacité, identifiant, demande brute,
personne, situation, problème, preuve, source, période et limite de preuve,
résultat attendu, mesure, seuil, force de preuve, voie, décision, responsable,
action critique, dépendances, effort, protocole de test, événement de
réouverture et sélection.

Un contrôle fautif porte `aria-invalid="true"` et un `aria-describedby` vers un
message inline visible dont l’identifiant existe. Les règles numériques restent
également associées aux champs de capacité et d’effort. Les champs valides ne
reçoivent ni faux `aria-invalid`, ni faux message. Le `<pre>` scrollable reste
focusable avec `tabIndex={0}` et reçoit le nom de la section par
`aria-labelledby="priority-export-title"`.

Les tests de composant contrôlent les champs globaux vides, l’effort
exponentiel, la dépendance inconnue, le responsable manquant, l’absence de faux
positif, l’existence de chaque cible `aria-describedby` et le nom de la zone
Markdown.

### N4. Fraîcheur Productboard et visuel 16:9

Le dossier et son garde-fou distinguent désormais sans ambiguïté :

- Customer Importance Score : mise à jour visible le 18 juin 2026 ;
- Create your own prioritization formulas : mise à jour visible le 30 juin 2026.

La phrase du SVG 16:9 devient « La preuve et la voie d’instruction restent
visibles dans le brouillon de revue. » Le WebP correspondant a été régénéré
depuis ce SVG. Son inspection à la taille native 1600 × 900 confirme que la
phrase tient dans le bandeau, sans rognage, chevauchement ni perte de contraste.
Les formats 4:3 et 1:1 ne contenaient pas ce résidu et restent inchangés.

### N5. Résiduel `datePublished` et frontière de release

La reprise n’invente ni ne modifie `datePublished`. Le gel autorise le maintien
de la première trace Git lorsqu’elle est honnêtement bornée. La copie publique
précise déjà que cette date décrit l’historique du code, pas sa disponibilité
publique, et que code, intégration ou build ne prouvent pas à eux seuls page
servie, déploiement, publication ou indexation.

Ce résiduel doit être réconcilié avec une preuve publique datée avant toute
publication réelle. Il ne constitue donc ni une preuve actuelle de publication
ni une autorisation de déployer. Build, serveur, BAT, commit, push, déploiement,
publication et indexation restent hors de cette reprise et non prouvés.

### N6. Périmètre corrigé

- `priority-workshop-engine.ts` et son test ;
- `priority-workshop-tool.tsx` et son test ;
- `content-quality.test.ts` ;
- le présent dossier ;
- le SVG et le WebP 16:9 ;
- un nouveau manifeste qualité, sans modifier les manifestes P1 à P4.

La page, l’OG, le freeze, les médias 4:3 et 1:1, les fichiers partagés et les
autres slugs ne sont pas modifiés.

### N7. Contrôles de la reprise

| Contrôle                            | Résultat final                                                                                                     |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Snapshot P4 avant correction        | 16/16 exact ; SHA externe `b988dcef…b97f8` ; fichier préservé                                                      |
| Vitest moteur, outil et contenu     | 79/79 : 49 moteur, 11 interface, 19 contenu                                                                        |
| Scénarios numériques                | six décisions × sélection oui/non ; exposant sur différée et test ; vide distinct de zéro                          |
| Relations accessibles               | erreurs globales et par demande liées ; cibles ARIA existantes ; absence de faux positif ; `<pre>` nommé/focusable |
| ESLint ciblé                        | zéro erreur et zéro avertissement                                                                                  |
| TypeScript                          | `tsc --noEmit` global vert                                                                                         |
| Prettier 3.9.6                      | écriture ciblée puis contrôle final vert                                                                           |
| XML et WebP                         | trois SVG valides ; trois RIFF WebP aux dimensions 1600×900, 1200×900 et 900×900                                   |
| Inspection visuelle native          | WebP 16:9 relu à 1600×900 ; nouvelle phrase complète, lisible et sans collision                                    |
| Manifeste qualité                   | snapshot corrigé exact à 16/16 ; empreinte externe transmise sans auto-référence                                   |
| Portée et dépendances temporaires   | diff limité aux huit fichiers propres et au nouveau manifeste ; aucun `node_modules` résiduel                      |
| Build, serveur, BAT, Git et release | non lancés                                                                                                         |

### N8. Verdict de correction

Les deux P1 reproduits par Q1 sont corrigés et couverts par des tests
adversariaux. Aucun P0 ou P1 connu ne reste dans le périmètre de cette reprise.
Les deux P2 factuels et éditoriaux sont corrigés ; le résiduel de date de
publication reste explicitement gouverné avant preuve publique.

Verdict de correction : PRET_POUR_RECONTROLE_Q.

Ce verdict ne prouve ni nouveau contrôle indépendant, ni intégration, ni build,
ni page servie, ni BAT, ni commit, ni push, ni déploiement, ni publication, ni
indexation.

## O. Maintenance qualité v2 après le GO Q2

### O1. GO Q2 historique sur le snapshot v1

Le contrôle transversal indépendant Q2 a rejoué exactement le manifeste
`prioriser-fonctionnalites-mvp-saas-quality-v1.sha256`, dont l’empreinte externe
est `2f30055c92bfe67fdbae51af661625d6c8b2dea7b9761c0309fc1efd25466ed8`.
Il a rendu `GO`, 94/100, avec zéro P0, zéro P1, quatre P2 et un P3 non
bloquants. Sa scorecard finale de charte est 19/20 :

| Axe charte       |     Score |
| ---------------- | --------: |
| Intention        |       2/2 |
| Décision         |       2/2 |
| Pédagogie        |       2/2 |
| Profondeur       |       2/2 |
| Preuve           |       2/2 |
| Comparaison      |       2/2 |
| Originalité      |       2/2 |
| Style            |       2/2 |
| Conversion       |       2/2 |
| SEO / produit    |       1/2 |
| **Total charte** | **19/20** |

Les constats non bloquants étaient néanmoins vérifiables :

1. le libellé public `TESTS_REQUIRED_BEFORE_BUILD` attribuait toujours le
   statut à une hypothèse faible, alors qu’une preuve forte accompagnée d’une
   décision explicite de tester produit aussi ce statut ;
2. le retour « Brouillon Markdown copié » pouvait rester visible après une
   modification des champs globaux ;
3. N7 portait une terminaison abrégée incorrecte pour le SHA P4 ;
4. le dossier ne consignait pas encore la scorecard Q2 ;
5. le titre et l’identité du dossier restaient figés sur P1 malgré la clôture
   des quatre passes et de la reprise qualité v1.

L’orchestrateur a choisi de fermer ces constats après le GO. Ce GO reste donc
une preuve historique du snapshot v1 ; il ne vaut pas validation du snapshot
v2. Un Q3 indépendant est requis sur le manifeste v2 exact avant intégration.

### O2. Corrections P2 et P3 après Q2

Le libellé public devient « Tester avant de construire — test explicite requis
». Il ne préjuge plus de la force de preuve. Les raisons détaillées restent
contextuelles : elles nomment soit la preuve faible incompatible avec une
construction immédiate, soit le test explicite requis par la décision humaine.

Toutes les mutations du brouillon passent désormais par une fonction unique
qui invalide le retour de copie avant d’exposer le nouvel état. Elle couvre les
demandes, la période, le résultat visé, la mesure de revue, l’état de capacité
et sa valeur. Ajouter ou retirer une demande efface aussi le retour périmé.
Charger l’exemple et réinitialiser remplacent ce retour par leur propre message
d’état ; ils ne laissent jamais croire que le nouveau brouillon a déjà été
copié. Une nouvelle copie reste possible après chaque mutation.

La preuve documentaire N7 porte désormais l’abréviation exacte
`b988dcef…b97f8`. Le titre « Dossier complet » et l’identité décrivent l’état
après reprise qualité tout en conservant intégralement les journaux P1, P2, P3,
P4, Q1 et Q2.

### O3. Garde-fous v2 et portée

Les nouveaux tests distinguent deux déclencheurs du même statut :

- preuve forte, décision `test`, sélection explicite : libellé neutre et raison
  « test explicite requis » ;
- preuve faible, décision `build`, protocole complet : même libellé neutre et
  raison précise sur la faiblesse de preuve.

Trois scénarios React partent d’une copie réussie puis modifient successivement
les champs textuels globaux, la capacité et son état, puis les actions ajouter,
retirer, charger et réinitialiser. Ils vérifient la disparition du message
périmé et la possibilité d’une nouvelle copie.

La reprise v2 modifie uniquement le moteur et son test, l’outil et son test, le
test de contenu et le présent dossier. Page, OG, freeze, six médias, fichiers
partagés, autres slugs, manifestes P1 à P4 et manifeste qualité v1 restent
inchangés.

### O4. Contrôles v2

| Contrôle                            | Résultat final                                                                                       |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Snapshot qualité v1 avant reprise   | 16/16 exact ; SHA externe `2f30055c…66ed8` ; manifeste préservé                                      |
| Vitest moteur, outil et contenu     | 84/84 : 51 moteur, 14 interface, 19 contenu                                                          |
| Garanties v1                        | validation numérique, ARIA, calculs, sources, médias et frontière de release inchangés               |
| Libellés test                       | preuve forte + décision test et preuve faible + décision build couvertes séparément                  |
| Retour de copie                     | période, résultat, mesure, capacité, demandes, chargement et réinitialisation couverts               |
| ESLint ciblé                        | zéro erreur et zéro avertissement                                                                    |
| TypeScript                          | `tsc --noEmit` global vert                                                                           |
| Prettier 3.9.6                      | écriture ciblée puis contrôle final vert                                                             |
| XML et WebP                         | trois SVG valides ; trois WebP aux dimensions 1600×900, 1200×900 et 900×900                          |
| Manifeste qualité v2                | snapshot exact à 16/16 ; empreinte externe transmise sans auto-référence                             |
| Portée, diff et résidus             | reprise limitée aux six fichiers propres et au manifeste v2 ; `git diff --check` vert ; aucun résidu |
| Build, serveur, BAT, Git et release | non lancés                                                                                           |

### O5. Limites d’intégration et verdict v2

Le build et le BAT navigateur restent à exécuter par l’orchestrateur après
intégration, sur le snapshot exact retenu. Leur absence à ce stade ne prouve ni
échec ni succès public. Elle interdit simplement de confondre cette correction
slug-only avec une page servie, un déploiement, une publication ou une
indexation.

Aucun P0 ou P1 connu ne reste dans la reprise. Les quatre P2 et le P3 consignés
par Q2 sont fermés dans le snapshot v2, qui doit encore être contrôlé
indépendamment.

Verdict de maintenance : PRET_POUR_Q3.

Ce verdict ne prouve ni GO Q3, ni intégration, ni build, ni page servie, ni BAT,
ni commit, ni push, ni déploiement, ni publication ou indexation.

## P. Contrôle transversal indépendant Q3

### P1. Snapshot exact et verdict

Q3 a travaillé en lecture seule sur le manifeste
`prioriser-fonctionnalites-mvp-saas-quality-v2.sha256`. Son empreinte externe
est
`590af3c700c9b3f41537fb88d8311b8a09969c39b98ef42d78bc7e2f4ef7e563`.
Le rejeu du snapshot et les 84 combinaisons de contrôle sont exacts. Sources,
images, calculs et relations ARIA sont verts.

Verdict Q3 : `GO_QUALITE_GUIDE`, 96/100, charte 19/20, zéro P0, zéro P1 et un
P2 opérationnel non bloquant.

Le P2 restant ne concerne pas le contenu lecteur : `datePublished` conserve la
première trace Git autorisée par le gel. Il doit être rapproché d’une preuve de
disponibilité publique datée avant une publication réelle. La page explique
déjà cette frontière et aucune date publique n’est inventée dans ce lot.

### P2. Portée du GO

Q3 ferme la qualité éditoriale du snapshot v2 et autorise son intégration. Il
ne prouve à lui seul ni rebase, ni batterie globale, ni rendu navigateur, ni
push, ni déploiement, ni publication ou indexation. Ces états sont consignés
séparément ci-dessous.

## Q. Intégration centrale et validation locale finale

### Q1. Mutex, base et périmètre partagé

L’orchestrateur a acquis atomiquement
`.guide-locks/integration.lock` le 3 août 2026 à 10:45:14 +02:00, après
confirmation de l’absence d’intégration concurrente. Le snapshot slug-only a
été rebasé linéairement sur `origin/main`
`577a9ff9632cceba51e1a0c46cda3dbb3f7830c0`. Le commit
`70a1acc2f85c63ae7f2d349ba9ba52efe1089abe` est bien un ancêtre de cette base.

L’intégration a ensuite :

- ajouté le guide 29 au registre central avec le statut
  `ready-for-human-review`, trois images et un temps de lecture de 10 minutes ;
- remplacé l’entrée locale de page par `getGuide`, retiré le slug du registre
  de redirections legacy et ajouté son icône au hub ;
- conservé la route directe tout en l’excluant du hub publié, du sitemap et de
  `llms.txt` grâce à `noindex, nofollow` ;
- ajouté le lien entrant contextuel depuis le guide 28 sans publier le guide
  29 ;
- durci le composant partagé des sources contre les débordements intermédiaires
  et le contraste des numéros FAQ ;
- rendu toutes les réponses de la FAQ disponibles à l’impression tout en
  maintenant les panneaux fermés à l’écran ;
- rendu sécables les longs statuts du moteur et retiré de l’impression les
  commandes interactives de l’atelier.

### Q2. Batterie automatisée finale

| Contrôle                                    | Résultat final                                                                                   |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Installation propre                         | `npm ci` ; 750 paquets ; audit initial sans vulnérabilité                                        |
| Tests ciblés d’intégration                  | 135/135 verts après ajout des contrats responsive, contraste et impression                       |
| Suite Vitest globale finale                 | 1 158/1 158, 114 fichiers de test                                                                |
| SEO en environnement normal et production   | 187/187 dans les deux modes                                                                      |
| ESLint ciblé sur tous les fichiers modifiés | zéro erreur et zéro avertissement                                                                |
| TypeScript                                  | `tsc --noEmit` global vert                                                                       |
| Audit dépendances de production             | `npm audit --omit=dev` : zéro vulnérabilité                                                      |
| Build production                            | Next.js 16.2.12, 75 pages statiques, postbuild SEO vert : 49 URL, 32 liens LLM, 86 blocs JSON-LD |
| Mesure de lecture hors atelier              | 1 911 mots, 10 minutes                                                                           |
| Propreté                                    | Prettier 3.9.6 et `git diff --check` verts                                                       |

### Q3. BAT navigateur réel

Le build production a été servi localement avec Chrome et Playwright. Le BAT
final ne contient aucune exception :

- route directe 200 sans redirection ; un H1, tous les H2 visibles, canonical
  `https://hagnere-code.ai/guides/prioriser-fonctionnalites-mvp-saas`, Article
  et BreadcrumbList seulement ;
- `noindex, nofollow`, route absente du hub, du sitemap et de `llms.txt` ;
- aucun débordement du document ou du body à 320, 360, 390, 430, 640, 768,
  1024, 1280, 1440 et 1600 px ; ponctuation du H1 non orpheline aux dix
  largeurs ;
- aucun débordement à 200 % de taille de texte sur 640 px, ni en paysage
  640 × 360 ; thème sombre contrôlé à 390 px ;
- lien d’évitement premier au clavier avec focus visible ; cinq FAQ fermées à
  l’écran, activation Entrée correcte et une seule réponse ouverte ;
- exemple de l’atelier : statut `NEXT_LOT_CANDIDATE_FOR_REVIEW`, lot complet 9,
  capacité 10, reste 1 ; saisie `1e3` refusée ; effort 8 stoppé comme dépassement
  et erreur reliée à la sélection ;
- copie Markdown réelle simulée avec annonce de succès, 7 162 caractères et
  retour périmé effacé après mutation ;
- 18 références ARIA, aucune cible manquante ; axe : zéro violation sérieuse
  ou critique ;
- aucun message console, aucune erreur page et aucune requête échouée sur une
  charge stable.

L’artefact JSON complet du BAT porte l’empreinte externe
`d8456db4747158637e347fee830431bb8b035341d9a22e4ea976b9cb5676a17d`.

### Q4. Impression réelle

Le PDF A4 généré depuis le rendu production compte 27 pages, pèse 2 042 222
octets et porte l’empreinte
`f1701f91eb23b5b2e08c028fed37e32ec10ceb6b60698df7e492b5dd0263d2f2`.
Le CTA de stratégie et les commandes interactives de l’atelier sont absents.
Le Markdown est intégral, préformaté avec retour à la ligne et sans rognage.
Les cinq questions et les cinq réponses FAQ apparaissent dans le texte extrait.

### Q5. Verdict local et frontière de release

Verdict d’intégration : `GO_COMMIT_PUSH`, zéro P0 et zéro P1 connu.

Le guide reste volontairement `ready-for-human-review`. Le commit et le push de
la branche sont des preuves Git, pas des preuves de déploiement. Aucun
déploiement Vercel, aucune disponibilité publique de cette version, aucune
publication et aucune indexation ne sont déclarés. Le SHA Git final est établi
hors du snapshot auto-référent et consigné dans le registre de coordination
après vérification de la branche distante.
