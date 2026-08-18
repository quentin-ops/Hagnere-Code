# Audit approfondi — `combien-coute-un-site-internet`

Date : 24 juillet 2026

Auditeur concurrentiel : contrôle éditorial, chiffrage, conversion, SEO et UX

Snapshot du guide : `src/app/guides/combien-coute-un-site-internet/page.tsx` (794 lignes, 3 584 mots), `opengraph-image.tsx`, registre `src/lib/guides.ts` ; hashes relevés le 24/07/2026 : page `341c93df…f4761`, image `6d460758…118f`, registre `8663e6e8…cb09`.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant de TPE/PME, commerçant ou indépendant qui doit décider
                d’un budget avant de consulter un prestataire ; il n’est pas en
                train de comparer des frameworks, mais de protéger sa trésorerie,
                son temps et ses futures demandes commerciales.
Question réelle : « Combien dois-je réellement investir pour le site dont mon
                  entreprise a besoin, qu’est-ce qui est compris, combien cela me
                  coûtera après la mise en ligne et comment comparer deux devis ? »
Décision attendue : choisir une solution simple, un freelance, une agence, une
                   plateforme ou un développement spécifique sur un périmètre égal.
Réponse actuelle en une phrase : le guide donne de larges repères par type de
  projet, distingue création et coûts récurrents, explique les devis et renvoie
  vers des guides spécialisés ; il n’offre pas encore de TCO calculé ni de cas
  chiffrés complets permettant une décision financière.
Défaut qui coûte le plus de valeur : les fourchettes paraissent précises (800 à
  10 000 €, 2 000 à 15 000 €, 15 000 à 120 000 €+) sans mettre chaque montant sur
  le même périmètre, en HT/TTC, en heures internes et sur 12/36/60 mois.
Niveau actuel : B-
Priorité : haute
Statut : audité ; aucune réécriture du guide effectuée dans cet audit
```

### Score avant correction

| Axe         | Note /10 | Preuve localisable | Manque décisif |
| ----------- | -------: | ------------------ | -------------- |
| Intention   | 9 | Intro, tableau par type et 6 étapes finales, lignes 242–266 et 702–742 | Le rôle commercial du site et la valeur d’un lead ne sont pas chiffrés. |
| Décision    | 7 | Comparaison outil, freelance, agence, lignes 456–493 | Aucun arbre de décision avec budget, risque, temps interne et seuil. |
| Pédagogie   | 8 | Définitions simples, tableaux, objections de devis | Les notions HT/TTC, coût d’opportunité et TCO 12/36/60 restent à rendre concrètes. |
| Profondeur  | 7 | 10 sections, maintenance, droits et projets complexes | Peu de scénarios complets ; SaaS et application élargissent l’intention sans calcul. |
| Preuve      | 7 | La Fabrique du Net, France Num, sources juridiques | Un seul baromètre non primaire, méthodologie et dates détaillées absentes. |
| Comparaison | 7 | Tableaux simples et prestataires | Pas de même scope/même horizon/même niveau de support ; plateformes internationales absentes. |
| Originalité | 7 | Refus d’ajouter automatiquement un chiffre d’affaires espéré | Aucun cas filé ni avis professionnel suffisamment tranché sur « où ne pas dépenser ». |
| Style       | 8 | Ton prudent, humain et anti-promesse | Plusieurs passages listent des postes sans montrer la décision qui en découle. |
| Conversion  | 7 | CTA, kit gratuit, tarifs et réalisations, lignes 727–742 | CTA sans livrable daté, preuve de résultat ou qualification structurée. |
| SEO/produit | 8 | Metadata, canonical, Article/Breadcrumb, FAQ, liens internes | Head/rendu, UX responsive, données structurées et `readTimeMin` non revalidés ici. |

Total : **75/100**

Ce score ne sanctionne pas la longueur : 3 584 mots suffisent pour une réponse
solide, mais pas si les montants restent des fourchettes sans cas testables. Le guide
est une bonne porte d’entrée éditoriale ; il ne doit pas encore être présenté comme
un calculateur de budget ou comme une étude représentative du marché.

## 2. Ce que le guide dit réellement

- Il répond rapidement avec trois familles de repères : vitrine 800–10 000 €,
  plateforme e-commerce 2 000–15 000 €, projet sur mesure 15 000–120 000 €+.
  Il précise que ces nombres sont des scénarios Hagnéré, non des tarifs ni une
  moyenne (lignes 242–265).
- Il explique correctement qu’un site de cinq pages avec contenus fournis n’est
  pas le même produit qu’un site avec stratégie, rédaction, maquettes, mesure et
  maintenance.
- Il montre les facteurs de coût (contenus, design, fonctions, données et qualité),
  compare outil en ligne/freelance/agence, puis propose les questions à poser dans
  un devis.
- Il rappelle les coûts récurrents (domaine, hébergement, emails, licences,
  maintenance), les droits et les conditions de reprise. Il mentionne les aides,
  la TVA et la nécessité de vérifier les règles officielles.
- Il relie les projets complexes aux guides e-commerce, refonte, logiciel métier et
  SaaS. C’est utile pour le maillage, mais cela dilue la réponse à « site internet »
  faute d’un encadré qui dit clairement quand sortir de cette page.
- Le CTA demande objectif, pages, fonctions, contenus, budget et date, puis renvoie
  vers le kit de cahier des charges. Il ne promet pas de classement ou de ROI, ce
  qui est sain ; il ne précise pas le livrable de l’échange ni le délai de réponse.

Éléments qui paraissent complets mais aident peu à choisir : le tableau des coûts
annuels et la formule implicite des trois ans restent des listes. Une entreprise ne
peut pas encore répondre à « plateforme à 39 €/mois ou projet à 6 900 € : lequel me
coûte moins cher après 60 mois, avec mon temps et mes leads ? ».

## 3. Benchmark France et international

Requêtes, pays, langues et date : recherches en français, anglais et allemand sur
« combien coûte un site internet 2026 », « small business website cost 2026 » et
équivalents ; France, États-Unis, Royaume-Uni, Australie, Allemagne/Suisse/Autriche ;
24/07/2026. Les pages commerciales servent à repérer les angles, pas à certifier un
tarif de marché.

| Ressource et URL directe | Pays | Réponse utile | Preuve, outil ou exemple | Limite | Apport à vérifier ou adapter |
| ------------------------ | ---- | ------------- | ------------------------ | ------ | ---------------------------- |
| [La Fabrique du Net — tarifs d’agence](https://www.lafabriquedunet.fr/agences/pages/agences-site-internet/tarifs) | France | Médiane annoncée, distinction agences et budgets | Échantillon affiché de 1 312 budgets/175 agences | Méthode, dates d’observation et biais de déclarations à expliciter | Conserver comme contexte, jamais comme tarif cible ; ajouter périmètre et période. |
| [France Num — coût d’un site](https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/combien-payer-pour-un-site-web-ou-un-site-e) | France | Domaine, hébergement et dépenses additionnelles | Source publique d’accompagnement des entreprises | Ordres de grandeur à dater et vérifier au moment de publier | Construire une checklist des coûts annuels et distinguer HT/TTC. |
| [KVOKA — small business website cost](https://kvoka.com/en/cost/small-business-website-cost) | États-Unis/Canada | Quatre chemins : DIY, freelance, agence, service géré ; coûts temps inclus | Tableau upfront/monthly et coût du temps | Page commerciale, chiffres non auditables comme moyenne nationale | Reprendre le format « coût initial + mensuel + temps interne », sans reprendre ses tarifs. |
| [TechRadar — builders testés](https://www.techradar.com/best/best-small-business-website-builders) | États-Unis/UK | Plateformes, renouvellement et fonctions par plan | Tests comparatifs annoncés, prix vérifiés à une date | Comparatif d’outils, pas chiffrage de projet d’agence | Ajouter la différence entre abonnement de plateforme et travail de conception. |
| [Proper Banging — website cost UK](https://properbangingwebdesign.co.uk/guides/how-much-does-a-website-cost-uk) | Royaume-Uni | Met en garde contre frais d’agence/overhead et compare petits sites | Segmentation par type d’entreprise | Position commerciale et devise GBP | Ajouter une opinion tranchée sur ce que paie réellement le client : contenu, décision, QA, support. |
| [Clad — small business website Australia](https://getclad.au/blog/small-business-website-cost-australia) | Australie | Tableau upfront, mensuel, première année et délai | DIY 20–50 $/mois, freelance, agence, service géré | Guide d’un fournisseur qui vend précisément l’alternative | Reprendre la vue première année et le temps du dirigeant ; signaler l’intérêt commercial. |
| [Pixzl — Website Kosten 2026](https://www.pixzl.de/newsroom/was-kostet-eine-website-2026) | Allemagne | Échelle 2 000–50 000 €+, facteurs design/complexité/fournisseur | Segmentation PME et projet complexe | Tarifs d’agence, absence de source statistique neutre | Ajouter une comparaison DACH en euros, mais ne pas convertir mécaniquement les marchés. |
| [WebArs — Autriche/Allemagne/Suisse](https://webars.at/blog/was-kostet-eine-website-oesterreich) | DACH | Compare pays, coûts initiaux et mensuels, questions de devis | Repères par pays et coût récurrent | Source commerciale et champ national limité | Ajouter la question de devise, TVA, langue, hébergement et marché ciblé. |

Saturation : les guides concurrents répètent les mêmes fourchettes et la même
opposition DIY/freelance/agence. Le gain de qualité ne viendra pas d’un tableau de
prix supplémentaire, mais d’un périmètre égal, d’un calcul 12/36/60 mois, du temps du
dirigeant, de la distinction HT/TTC et d’un exemple de coût d’opportunité. Les prix
des plateformes doivent être relus sur leur page officielle : [Wix](https://www.wix.com/plans),
[Shopify France](https://www.shopify.com/fr/tarifs) et [Squarespace](https://www.squarespace.com/pricing)
affichent des plans qui varient selon pays, devise, facturation, taxes et options.

## 4. Matrice de gain d’information

| Question décisive | Meilleure réponse française | Apport international | Couverture actuelle | Manque | Réponse supérieure à produire |
| ----------------- | --------------------------- | -------------------- | ------------------- | ------ | ----------------------------- |
| Combien coûte exactement le projet de mon entreprise ? | Fourchettes par type | KVOKA/Clad donnent initial + mensuel + temps | Partielle | Pas de cas complet ni d’heures internes | Trois personas avec scope, heures, coûts et livrables. |
| Le prix est-il HT ou TTC ? | Tables annuelles indiquent HT | Pages UK/AU affichent leur devise et modèle de facturation | Faible | Fourchettes principales sans statut fiscal | Colonne HT/TTC, TVA et frais de transaction séparés. |
| Pourquoi deux devis diffèrent-ils ? | Contenus, design, fonctions, données, qualité | Concurrents détaillent overhead et exclusions | Bonne base | Pas de pondération ni « non négociable » | Matrice de devis : obligatoire / option / exclu / risque. |
| Quel choix coûte le moins sur la durée ? | Catégories de coûts sur trois ans | Clad/Onboard montrent première année ; certains UK calculent cinq ans | Partielle | Aucun résultat numérique sur 12/36/60 mois | TCO 12/36/60 avec augmentation, sortie et temps interne. |
| À partir de quand une solution sur mesure est-elle rationnelle ? | Règles métier et volumes cités | Australie/US relient prix à automatisation et valeur client | Faible | Pas de seuil de temps, marge ou leads | Calcul d’économie d’heures et seuil de rentabilité prudent. |
| Que se passe-t-il après livraison ? | Domaine, hébergement, licences, maintenance | Guides internationaux détaillent support et renouvellement | Moyenne | Sécurité, accessibilité, contenus, sauvegardes et incident manquent | Budget annuel par activité et délai d’intervention. |
| Le site est-il juridiquement exploitable ? | Droits et aides, mais peu d’UX/légal | Guides étrangers mentionnent surtout plateformes | Faible | Mentions, RGPD, cookies, accessibilité non intégrés au budget | Encadré « conformité à prévoir, validation spécialisée ». |
| Quelle action faire maintenant ? | Kit et demande de devis | Certains concurrents proposent calculateur ou devis sous délai | Moyenne | Livrable, délai et preuve non définis | CTA : audit de périmètre + fourchette documentée, sans promesse de ROI. |

## 5. Faits et fraîcheur

| Affirmation du guide | Verdict | Source primaire actuelle | Périmètre et date | Correction |
| -------------------- | ------- | ------------------------ | ----------------- | ---------- |
| La médiane La Fabrique du Net est de 5 200 € sur 1 312 budgets et 175 agences | à vérifier sur la page au moment de publier ; ce n’est pas une source publique primaire | [La Fabrique du Net](https://www.lafabriquedunet.fr/agences/pages/agences-site-internet/tarifs) | Échantillon annoncé par l’éditeur, date/méthode à afficher | Inscrire période, méthode et limites ; conserver « médiane de cet échantillon », jamais « prix moyen ». |
| France Num donne 5–50 € HT/an pour le domaine et 5–50 € HT/mois pour l’hébergement | plausible mais à revalider ; prix dépendants du fournisseur et de la date | [France Num](https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/combien-payer-pour-un-site-web-ou-un-site-e) | Ordres de grandeur publics, consultés juillet 2026 | Ajouter la date de consultation et distinguer offre d’appel, renouvellement, TVA et options. |
| Les plateformes facturent abonnement, domaine, applications ou paiement | confirmé, mais montant local variable | [Shopify tarifs](https://www.shopify.com/fr/tarifs), [Wix plans](https://www.wix.com/plans), [Squarespace pricing](https://www.squarespace.com/pricing) | Pages officielles, vérifiées 24/07/2026 ; devise/région détectée variable | Ne pas figer un prix dans le guide sans région ; documenter mensualité, annuel, frais de transaction et sortie. |
| Les aides territoriales existent mais changent | confirmé comme prudence, pas comme aide acquise | [France Num aides financières](https://www.francenum.gouv.fr/aides-financieres) | Catalogue institutionnel à vérifier au moment du projet | Ajouter organisme, date limite, éligibilité et interdiction de signer avant accord lorsque pertinent. |
| Le contrat doit préciser les droits sur code, design, contenus et comptes | orientation correcte, mais pas conseil juridique exhaustif | [Légifrance CPI](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069414/LEGISCTA000006133323/) | Texte officiel ; portée selon contrat et composants tiers | Maintenir réserve juridique ; ajouter licences open source, comptes et données. |
| RGPD, informations de formulaire et mentions du site peuvent engendrer du travail | angle absent du budget | [Service-Public — RGPD](https://entreprendre.service-public.fr/vosdroits/F24270) et [mentions légales](https://entreprendre.service-public.fr/P10025) | Sources publiques, vérification juridique non réalisée | Ajouter ligne « conformité et validation » sans affirmer qu’un prestataire remplace un conseil DPO/juriste. |
| L’accessibilité et l’expérience utilisateur font partie de la qualité | mention générique, sans critère | [W3C WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) et [Google page experience](https://developers.google.com/search/docs/appearance/page-experience) | Standards/guide officiels, consultés 24/07/2026 | Ajouter tests clavier, contraste, formulaires, mobile, Core Web Vitals et critères d’acceptation. |

### Contradictions

- Le guide annonce un « coût sur trois ans » dans le hero et le sommaire, mais la
  section 7 ne fournit aucun total ni même une formule explicite. Le lecteur peut
  croire qu’un calcul arrive et ne reçoit qu’une liste de postes.
- Les fourchettes principales mélangent probablement des périmètres, des statuts
  fiscaux et des niveaux de contenu différents. Tant que HT/TTC et livrables ne sont
  pas affichés, leur comparaison avec la médiane 5 200 € est trompeuse malgré les
  précautions rédactionnelles.
- Le guide dit qu’un site simple peut suffire, puis place une application ou un SaaS
  dans la même table « site internet ». Il faut assumer qu’il s’agit de sujets
  différents et donner un lien de sortie, pas un prix qui invite à comparer des
  produits incomparables.

### Faits à retirer plutôt qu'à affaiblir

- Toute phrase laissant penser que 800 €, 5 200 € ou 15 000 € sont « le prix » d’un
  site professionnel sans scope, devise, TVA et inclusions.
- Toute promesse de rentabilité, de leads ou de référencement attachée à un niveau
  de prix.
- Toute aide publique présentée comme disponible avant vérification de l’organisme,
  de la date, de l’éligibilité et de la règle de non-commencement.

## 6. Scénarios et calculs à construire

Les montants ci-dessous sont des exemples illustratifs à intégrer, pas des prix de
marché ni un engagement Hagnéré. Ils obligent à comparer une même fonction, un même
niveau de contenu et un même support. Les heures internes doivent être remplacées
par le coût horaire réel du dirigeant ou de l’équipe.

| Variable | Simple — test local | Central — site qui génère des demandes | Exigeant — commerce ou règles métier | Source ou hypothèse |
| -------- | -----------------: | --------------------------------------: | -----------------------------------: | ------------------- |
| Scope | 5 pages, 1 formulaire, contenus fournis | 12 pages, 4 services, SEO de base, analytics, CMS | 30 pages, catalogue, CRM, paiement/automatisation | Hypothèses à remplacer par le cahier des charges. |
| Création initiale | 1 200 € | 7 900 € | 24 000 € | Exemples pédagogiques ; pas une grille de marché. |
| Temps interne de préparation/validation | 12 h | 45 h | 120 h | À valoriser au coût horaire de l’entreprise. |
| Outils et hébergement année 1 | 480 € | 1 080 € | 3 600 € | Hypothèses de licences, emails et hébergement ; vérifier les pages officielles. |
| Maintenance/support annuel | 600 € | 1 800 € | 6 000 € | Scope à préciser : mises à jour, sauvegardes, corrections, délai. |
| Évolutions moyennes annuelles | 300 € | 1 200 € | 8 000 € | Hypothèse ; séparer obligation et option. |

```text
TCO 12 mois = création + temps interne initial + outils/hébergement
              + maintenance/support + évolutions + conformité éventuelle
TCO 36 mois = création + temps initial + 3 × (récurrent annuel)
              + inflation/renouvellements + migrations/incidents prévisibles
TCO 60 mois = création + temps initial + 5 × (récurrent annuel)
              + coût de sortie ou nouvelle refonte à l’horizon choisi

Exemple central (hypothèses ci-dessus, hors TVA) :
  12 mois = 7 900 + 45 h × taux interne + 1 080 + 1 800 + 1 200
  36 mois = 7 900 + 45 h × taux interne + 3 × (1 080 + 1 800 + 1 200)
  60 mois = 7 900 + 45 h × taux interne + 5 × (1 080 + 1 800 + 1 200)

Inclus : contenu prévu, tests, formation, hébergement, licences et support déclarés.
Exclus : chiffre d’affaires espéré, trafic hypothétique, TVA non connue, incident
         exceptionnel non assuré, travail bénévole du dirigeant non valorisé.
Analyse de sensibilité : ±30 % sur heures de contenu, licences, maintenance et
                         évolutions ; +1 langue ; +1 intégration ; renouvellement
                         au tarif public, pas au prix promotionnel.
Variable qui fait basculer la décision : fréquence d’évolution et temps interne,
                                  plus que le nombre de pages affiché.
Contrôle inverse : si l’option sur mesure ne récupère pas les heures ou le risque
                   qu’elle devait supprimer, l’outil simple gagne.
```

Exemple humain à ajouter : pour un artisan qui reçoit dix demandes qualifiées par
mois et publie deux fois par an, payer une application spécifique est probablement
une mauvaise allocation de trésorerie. Pour une entreprise qui ressaisit 20 heures
par mois des demandes dans un CRM, le bon calcul n’est pas « combien coûte le site ? »
mais « combien coûte l’absence d’automatisation pendant 60 mois ? ». Le guide doit
dire que ce second calcul reste une hypothèse à vérifier, pas une vente forcée.

## 7. Comparaison et position professionnelle

```text
Options réellement comparables :
  A. outil en ligne DIY ;
  B. freelance avec modèle ou CMS ;
  C. agence avec stratégie, contenus, design, développement et suivi ;
  D. solution sur mesure limitée à une fonction métier ;
  E. projet e-commerce/SaaS distinct, hors périmètre du site vitrine.
Périmètre et horizon communs : mêmes pages, contenus, formulaire, mesure, SEO de
  base, accessibilité minimale, formation, support, HT/TTC et TCO sur 12/36/60 mois.
Option la moins chère : A en trésorerie, seulement si le temps du dirigeant et la
  sortie sont acceptables.
Option la moins risquée : B ou C selon qui peut valider, maintenir et reprendre le
  site ; un prix bas avec comptes non transférables est un risque, pas une économie.
Option qui demande le moins de temps interne : C lorsque le contenu, la coordination
  et la QA sont réellement inclus ; A gagne seulement si l’équipe a du temps.
Position Hagnéré Code pour le cas fréquent : commencer par un site simple et une
  offre claire ; investir dans des contenus, parcours et mesure avant un design ou
  une application sur mesure ; développer seulement la fonction qui économise une
  tâche mesurée ou protège un revenu identifié.
Faits qui la fondent : coûts récurrents officiels des plateformes, exigences de
  contenu/maintenance, TCO calculé et valeur du temps interne.
Cas où l’option opposée gagne : activité à tester, faible trafic, équipe disponible,
  contenu stable, ou plateforme qui couvre déjà paiement/réservation/catalogue.
Signal de révision : temps éditorial qui déborde, frais de renouvellement, limites
  de sortie, demandes non mesurées, formulaire non suivi, ou intégration devenue
  manuelle et coûteuse.
Ce que nous déconseillons même si nous pourrions le vendre : facturer un site de
  cinq pages comme une plateforme métier, promettre du SEO dans le prix, cacher la
  maintenance ou faire un devis sans liste d’exclusions.
```

## 8. Objections et cas limites

| Objection loyale | Réponse prouvée | Ce qui reste incertain | Conséquence |
| ---------------- | --------------- | ---------------------- | ----------- |
| « Je veux le moins cher possible. » | Une plateforme réduit l’entrée mais ajoute temps, abonnement et limites de sortie. | Temps réel du dirigeant et besoin futur. | Comparer coût financier et coût horaire sur 36/60 mois. |
| « Deux agences proposent 3 000 € et 12 000 €. » | Elles ne couvrent probablement pas le même contenu, design, QA, suivi ou transfert. | Scope exact et qualité livrée. | Envoyer le même cahier des charges et remplir obligatoire/option/exclu. |
| « Une médiane de 5 200 € me donne le bon budget. » | Une médiane décrit l’échantillon de La Fabrique du Net, pas votre projet. | Biais de l’échantillon et date. | Utiliser le chiffre comme contexte, pas comme plafond ni plancher. |
| « Mon site doit me rapporter 20 clients. » | Aucun prix ne garantit des clients ; le guide le dit déjà. | Offre, demande, conversion, trafic et suivi. | Mesurer coût par lead, marge et capacité commerciale avant un ROI. |
| « L’abonnement à 30 €/mois est plus avantageux. » | Les plateformes incluent parfois hébergement mais ajoutent apps, paiement et renouvellement. | Tarif local, volume, lock-in et sortie. | Relire la page officielle et calculer 60 mois, pas seulement le premier mois. |
| « Je peux écrire les textes moi-même. » | Cela baisse la facture mais consomme du temps et peut réduire la qualité commerciale. | Heures, compétence et coût d’opportunité. | Valoriser le temps ; tester un échantillon avant de décider. |
| « Je veux une application dans le même devis. » | Une application/SaaS a utilisateurs, droits, données, sécurité et exploitation propres. | Périmètre et exigences encore inconnus. | Sortir du guide vitrine et produire un cahier des charges séparé. |
| « Les aides paieront une partie du site. » | France Num recense des dispositifs, mais disponibilité et éligibilité changent. | Organisme, calendrier et commencement. | Vérifier avant signature ; ne pas déduire l’aide du budget certain. |
| « Le prestataire garde le domaine, c’est plus simple. » | Domaine, comptes, code et données doivent être récupérables. | Conditions contractuelles de sortie. | Titularité entreprise et procédure de transfert obligatoires. |

## 9. Plan de réécriture

| Ordre | Section proposée | Question résolue | Preuve, scénario ou outil | Décision produite | À conserver / créer / couper |
| ----: | ---------------- | ---------------- | ------------------------- | ----------------- | ---------------------------- |
| 1 | Réponse en 60 secondes | Quel type de site me concerne ? | Arbre vitrine / e-commerce / outil métier / SaaS | Sortir ou continuer | Conserver les fourchettes, ajouter périmètre et HT/TTC. |
| 2 | Trois cas humains | Que paie une entreprise semblable à la mienne ? | Artisan/local, PME services, commerce automatisé | Budget initial réaliste | Créer cas filés et hypothèses explicites. |
| 3 | La vraie composition d’un prix | Pourquoi ce devis coûte-t-il plus ? | Contenu, UX, design, build, QA, SEO, conformité, support | Poste à négocier | Conserver tableau ; ajouter temps et responsabilités. |
| 4 | Comparateur à périmètre égal | DIY, freelance ou agence ? | Scope identique, heures internes, propriété, support | Option choisie | Créer colonnes HT/TTC, délai, risque, sortie. |
| 5 | Coûts récurrents | Que vais-je payer chaque année ? | Domaine, hébergement, email, licences, paiement, maintenance, contenu | Budget annuel | Ajouter tarifs officiels datés et renouvellement. |
| 6 | Calculateur TCO | Que coûte l’option sur 12/36/60 mois ? | Formule + trois scénarios + sensibilité ±30 % | Break-even prudent | Remplacer la simple liste de la section 7. |
| 7 | Quand investir sur mesure ? | L’automatisation vaut-elle son prix ? | Heures économisées × taux interne, marge, risque | Go / report | Créer exemple chiffré sans promettre de ROI. |
| 8 | Conformité et reprise | Quels risques sont oubliés ? | RGPD, cookies, accessibilité, droits, comptes, sauvegardes | Exigence au devis | Ajouter encadré de portée juridique prudente. |
| 9 | Devis et négociation | Comment demander trois offres comparables ? | Checklist à télécharger et exclusions | Consultation prête | Conserver kit ; faire du CTA un livrable concret. |
| 10 | CTA | Quelle prochaine action ? | Audit de périmètre ou kit, délai et sortie sans vente forcée | Contact qualifié | Préciser livrable et ce qui n’est pas promis. |

### Contrat des 150 premiers mots

Dire au lecteur : « Vous ne cherchez pas le prix d’un site abstrait. Vous cherchez
à savoir combien votre entreprise devra investir, ce qu’elle devra fournir et ce
qu’elle paiera encore dans un, trois ou cinq ans. Un site à 900 € peut être le bon
choix pour tester une activité ; il peut aussi coûter cher si vous y passez 80 heures
ou si vous devez le refaire dans six mois. À l’inverse, une agence à 12 000 € n’est
pas automatiquement meilleure : demandez quels contenus, tests, mesures, droits et
mois de support sont compris. Ce guide compare les mêmes fonctions entre outil en
ligne, freelance, agence et développement spécifique. Vous trouverez trois scénarios
chiffrés, un TCO sur 12/36/60 mois et la liste des coûts cachés. Les montants sont
des hypothèses de préparation, jamais une garantie de devis ou de résultat. »

### Éléments à supprimer

- Les fourchettes qui ne précisent pas clairement scope, devise, HT/TTC, contenus,
  tests et support.
- La promesse implicite d’un « coût sur trois ans » sans calcul numérique.
- Le mélange de SaaS, application et site vitrine dans une même échelle de prix sans
  décision explicite de changement d’intention.
- Toute phrase laissant entendre qu’un budget produira un nombre de clients ou un
  classement Google.

### Éléments à conserver

- L’ouverture humaine et honnête, les tableaux de facteurs, le refus de la promesse
  de chiffre d’affaires et l’invitation à comparer la même demande.
- La distinction outil en ligne/freelance/agence, les coûts de domaine/hébergement,
  les droits et la possibilité de reprise.
- Le renvoi vers le kit de cahier des charges et les guides spécialisés, après avoir
  répondu clairement à l’intention principale.

## 10. Contre-audit après correction

Les corrections suivantes sont **à faire** : elles n’ont pas été appliquées dans cet
audit. Le statut ne doit pas être présenté comme une réécriture terminée.

| Problème | Priorité | Correction appliquée | Revalidation indépendante |
| -------- | -------- | -------------------- | ------------------------- |
| P1-01 — fourchettes sans périmètre égal, HT/TTC et livrables | P1 | Non appliquée | Comparer quatre offres fictives sur 5/12/30 pages, mêmes fonctions et même support. |
| P1-02 — TCO annoncé mais aucun calcul 12/36/60 | P1 | Non appliquée | Refaire chaque formule, vérifier totaux et hypothèses de renouvellement. |
| P1-03 — temps interne et coût d’opportunité absents des montants | P1 | Non appliquée | Tester avec taux horaire simple/central/exigeant et ±30 %. |
| P1-04 — coût de conversion/lead et opinion de décision peu tranchée | P1 | Non appliquée | Vérifier que le lecteur sait quand l’outil simple gagne et quand l’automatisation devient rationnelle. |
| P1-05 — mélange vitrine, e-commerce, application et SaaS | P1 | Non appliquée | Relecture d’intention ; déplacer les projets complexes vers des sorties explicites. |
| P1-06 — coûts cachés incomplets (conformité, sécurité, sauvegardes, contenu, paiement) | P1 | Non appliquée | Checklist annuelle et de lancement relue par un responsable produit/technique. |
| P1-07 — benchmark non international et source de médiane insuffisamment datée | P1 | Non appliquée | Refaire le tableau FR/US/UK/AU/DACH avec devise, période, méthode et limites. |
| P1-08 — CTA sans livrable ni délai de première étape | P1 | Non appliquée | Vérifier la compréhension : action, retour attendu, exclusions et absence de garantie. |
| P2-01 — tarifs plateformes et renouvellement non reliés aux pages officielles | P2 | Non appliquée | Relever prix par région, facturation, taxes et frais de transaction. |
| P2-02 — UX/accessibilité sans critères d’acceptation | P2 | Non appliquée | Contrôler clavier, contraste, formulaires, erreurs, mobile et WCAG applicable. |
| P2-03 — SEO/analytics seulement cités, sans plan de mesure | P2 | Non appliquée | Ajouter événement formulaire, consentement, Search Console, baseline et propriétaire. |
| P2-04 — RGPD, mentions et cookies non intégrés au budget | P2 | Non appliquée | Ajouter une ligne de cadrage et un avertissement de validation spécialisée. |
| P2-05 — readTimeMin 11 non recalculé | P2 | Non appliquée | Mesurer le texte final et le rendu, puis synchroniser le registre. |
| P2-06 — image OG file-based non inspectée dans le head/rendu | P2 | Non appliquée | Vérifier HTML, dimensions, cache, alt et partage social. |
| P2-07 — aucun cas interne documenté ou preuve de résultat | P2 | Non appliquée | Ajouter un cas réel seulement avec preuve ; sinon conserver « illustratif ». |
| P2-08 — aides et TVA non contextualisées par date/statut | P2 | Non appliquée | Relecture France Num, confirmation organisme et séparation HT/TTC. |
| P2-09 — propriété des comptes/logiciels tiers sans checklist de transfert | P2 | Non appliquée | Ajouter domaine, hébergement, analytics, email, licences, code et export. |
| P2-10 — absence de ressource calculable malgré le sujet prix | P2 | Non appliquée | Créer tableau ou feuille TCO librement téléchargeable si maintenue à jour. |

### Portes de publication

```text
P1 historique/qualité : PRÉSENTE MAIS INCOMPLÈTE — défauts identifiés, guide source
                         inchangé dans cet audit.
P2 corrections/QA      : À CORRIGER — calculs, benchmark, UX et liens doivent être
                         revalidés après réécriture.
P3 publication technique: REJETÉE / NON VALIDÉE — aucun build, rendu navigateur,
                          test head, responsive ou crawl exécuté ici.
P4 production/indexation: REJETÉE / NON VALIDÉE — aucun déploiement, sitemap,
                           Search Console, indexation ou conversion prouvé.
```

### Score après correction

Non calculable : le guide n’a pas été réécrit dans cette passe. **Objectif : 92/100
minimum**, avec 9/10 en intention, pédagogie, décision, comparaison et preuve, et
aucun P1 ouvert.

## 11. Preuves techniques et visuelles

```text
Manifeste : src/lib/guides.ts — slug, dates, title, metaDescription et readTimeMin 11 vérifiés.
Calculs refaits : aucune somme complète n’existe dans le guide ; trois scénarios
                 TCO illustratifs proposés dans ce rapport, non appliqués.
Sources rouvertes : La Fabrique du Net ; France Num coût/aides ; Wix ; Shopify ;
                    Squarespace ; Service-Public RGPD/mentions ; Légifrance ;
                    W3C WCAG ; Google page experience.
Liens vérifiés : URLs sources présentes dans le code ; liens internes et destinations
                 non testés par navigateur dans ce rapport.
Commandes : wc -l -w ; shasum -a 256 ; git diff --check sur le rapport après création.
Rendu 320 / 390 / 768 / 1024 / 1440 : non exécuté.
Image sociale : opengraph-image.tsx existe ; head, dimensions et partage social non inspectés.
Statut maximal prouvé : audit éditorial/factuel local et benchmark concurrentiel.
Réserve publication / indexation : aucune conclusion de build, déploiement,
                                    indexation, conversion ou position Google possible.
```

### Décision de chantier

Le guide a une base humaine saine et une intention commerciale honnête. Pour devenir
la meilleure réponse sur la requête, il doit cesser de seulement juxtaposer des
fourchettes et montrer une décision financière complète : même périmètre, mêmes
fonctions, HT/TTC, temps interne, 12/36/60 mois, coûts cachés et cas où Hagnéré
déconseille de vendre du sur-mesure. La priorité est de construire les calculs et les
cas filés, puis de réécrire et de contre-auditer avant toute publication technique.
