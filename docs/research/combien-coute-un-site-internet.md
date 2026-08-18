# Dossier de recherche — `combien-coute-un-site-internet`

> **Statut au 25 juillet 2026 : reconstitution documentaire, recherche à
> reprendre.** Le guide courant répond vite par des fourchettes et reste
> prudent sur le retour commercial. Il ne donne pas encore le coût total qu'il
> promet. Ce dossier transforme les constats de l'audit en brief de reprise,
> sans déclarer une correction ou une validation.

## Journal des quatre passes

| Passe                        | État            | Date                        | Responsable            | Snapshot           | Blocages                                                       |
| ---------------------------- | --------------- | --------------------------- | ---------------------- | ------------------ | -------------------------------------------------------------- |
| 1. Recherche                 | **À reprendre** | 24/07/2026                  | à désigner             | page + audit       | Rejouer requêtes, prix officiels, benchmark, TVA et profils.   |
| 2. Rédaction et intégration  | **À reprendre** | page existante              | à désigner             | page `341c93…761`  | Huit P1 historiques ; fourchettes non égalisées et TCO absent. |
| 3. Contre-audit indépendant  | **À reprendre** | audit initial du 24/07/2026 | autre agent            | audit `7ffce0…fc2` | Aucun snapshot corrigé ni calcul final dans la page.           |
| 4. Plume humaine et contrôle | **Bloquée**     | —                           | lecteur dirigeant + QA | —                  | P3, puis feuille TCO, responsive, liens, head, build et route. |

### Manifeste documentaire

| Fichier                                                                      | SHA-256 au 24/07/2026                                              | Portée              |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------ | ------------------- |
| `src/app/guides/combien-coute-un-site-internet/page.tsx`                     | `341c93df0cf61c736ebf3753e028496b3bcb3c7fcc89d57f3d0876cc321f4761` | Page courante.      |
| `docs/audits/giga-audit-2026-07-24/guides/combien-coute-un-site-internet.md` | `7ffce031c3496889ac25925b5d9e92953d1b9b93b1824e603385c5d57a512fc2` | Audit historique.   |
| `docs/charte-qualite-guides.md`                                              | `5ee616faa4959dc8ad2b0eb19a5b19ffbf53299b62665700093c5c176b0b8491` | Règles éditoriales. |
| `docs/workflow-maitre-guides-4-passes.md`                                    | `a3a8c8f1be5d5d60b096f251f22b27ae5526adb708c334c4d6f0b7b4270c60c4` | Portes.             |

## 1. Brief dirigeant

```text
Slug : combien-coute-un-site-internet
Statut : page existante, score historique 75/100, P1 non validée
Requête principale hypothétique : combien coûte un site internet
Moment : explorer un budget puis préparer une consultation
Lecteur : dirigeant de TPE/PME, commerçant ou indépendant qui protège sa
          trésorerie, son temps et ses futures demandes commerciales
Déclencheur : il voit des offres de 900 €, 5 000 € et 15 000 € sans savoir
              si elles couvrent la même chose
Question : « Combien dois-je réellement investir, qu'est-ce qui est inclus et
            combien paierai-je encore dans un, trois ou cinq ans ? »
Décision : outil DIY, freelance, agence, spécifique ou report sur même scope
Action sans contact : calculer TCO, temps interne et coût annuel
CTA : audit de périmètre ou kit, avec livrable et délai
Hors périmètre : garantie de leads, classement, ROI ou tarif universel
```

### Réponse humaine

Un prix de site n'a de sens qu'avec le nombre de pages, les contenus, les
fonctions, les tests, le support, les droits et le temps que l'entreprise doit
fournir. Un site à 900 € peut être rationnel pour tester une offre ; une agence
à 12 000 € n'est meilleure que si elle livre une différence nécessaire et
prouvée.

### Contrat des 150 premiers mots

- partir d'une entreprise qui compare trois montants ;
- distinguer prix initial, récurrent et temps interne ;
- préciser HT/TTC et hypothèses ;
- annoncer trois cas et un TCO 12/36/60 ;
- dire quand l'outil simple gagne ;
- rappeler qu'aucun budget ne garantit demandes ou classement.

## 2. Couverture actuelle

La page traite :

1. prix par type de projet ;
2. solution simple ;
3. facteurs de variation ;
4. outil, freelance ou agence ;
5. contenu d'un devis ;
6. coûts après mise en ligne ;
7. coût sur trois ans ;
8. projets complexes ;
9. délais, droits et aides ;
10. préparation du budget et demandes de devis.

### Forces

- Fourchettes annoncées comme scénarios Hagnéré, pas moyennes.
- Différence claire entre cinq pages fournies et accompagnement complet.
- Contenus, design, fonctions, données et qualité sont identifiés.
- Outil/freelance/agence sont comparés qualitativement.
- Domaine, hébergement, e-mail, licences et maintenance existent.
- Droits, comptes et reprise sont abordés.
- Le guide refuse d'ajouter automatiquement un chiffre d'affaires espéré.
- Le CTA demande objectif, pages, fonctions, contenus, budget et date.

### Promesse non délivrée

- La carte « coût sur trois ans » mène à une liste, pas un total.
- Les fourchettes 800–10 000 €, 2 000–15 000 € et
  15 000–120 000 €+ mélangent périmètres, fiscalité et horizons.
- HT/TTC et TVA ne sont pas visibles partout.
- Aucune comparaison n'égalise travail, support, temps interne et sortie.
- SaaS/application élargissent l'intention sans règle de sortie claire.
- Conformité, sécurité, sauvegarde, contenu et paiement ne sont pas intégrés au
  budget annuel.
- Le CTA ne précise pas ce que reçoit le lecteur et sous quel délai.

## 3. Frontières éditoriales

| Page                                 | Intention                           | Frontière                                                       |
| ------------------------------------ | ----------------------------------- | --------------------------------------------------------------- |
| `/guides/prix-site-vitrine`          | prix d'une vitrine                  | cette page est le hub de budget par type, avec règle de sortie  |
| `/guides/prix-site-e-commerce`       | budget boutique                     | sortir vers elle dès que catalogue/paiement/logistique dominent |
| `/guides/prix-refonte-site-internet` | coût et risques d'une refonte       | ici, création/budget général                                    |
| `/guides/combien-coute-un-saas`      | produit récurrent et unit economics | ne pas ranger le SaaS dans une simple échelle de site           |
| `/guides/prix-logiciel-sur-mesure`   | outil métier et automatisation      | sortir quand rôles/données/règles dominent                      |
| `/guides/choisir-son-agence-web`     | sélectionner l'équipe               | ici, cadrer le budget avant choix                               |
| `/guides/tjm-developpeur-web`        | tarif d'une journée                 | ici, coût du résultat complet                                   |
| kit cahier des charges               | formaliser le périmètre             | ici, transformer le périmètre en TCO                            |

**Justification :** la page doit devenir une porte d'orientation budgétaire
qui répond puis dirige vers le bon sous-sujet, pas additionner tous les produits
numériques.

## 4. Benchmark historique

L'audit rapporte des recherches en français, anglais et allemand le
24 juillet 2026, sur France, États-Unis, Royaume-Uni, Australie et DACH.

| Ressource                                                                                                                                                     | Apport historique                                       | Limite                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ---------------------------------------------- |
| [La Fabrique du Net](https://www.lafabriquedunet.fr/agences/pages/agences-site-internet/tarifs)                                                               | médiane annoncée, échantillon 1 312 budgets/175 agences | source commerciale, période/méthode à préciser |
| [France Num — coût d'un site](https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/combien-payer-pour-un-site-web-ou-un-site-e) | domaine, hébergement, dépenses                          | ordres de grandeur à dater                     |
| [KVOKA, US/Canada](https://kvoka.com/en/cost/small-business-website-cost)                                                                                     | initial + mensuel + temps                               | chiffres commerciaux non transposables         |
| [TechRadar](https://www.techradar.com/best/best-small-business-website-builders)                                                                              | renouvellements et fonctions builders                   | comparatif outils, pas projet agence           |
| [Proper Banging, UK](https://properbangingwebdesign.co.uk/guides/how-much-does-a-website-cost-uk)                                                             | segmentation et coûts d'agence                          | position commerciale                           |
| [Clad, Australie](https://getclad.au/blog/small-business-website-cost-australia)                                                                              | première année et délai                                 | fournisseur de l'alternative                   |
| [Pixzl, Allemagne](https://www.pixzl.de/newsroom/was-kostet-eine-website-2026)                                                                                | échelle par complexité                                  | prix d'agence                                  |
| [WebArs, DACH](https://webars.at/blog/was-kostet-eine-website-oesterreich)                                                                                    | pays, initial et mensuel                                | contexte national                              |

Saturation historique : les pages répètent les fourchettes et l'opposition
DIY/freelance/agence. Le gain vient du même périmètre, du TCO 12/36/60, du
temps du dirigeant, de HT/TTC et du coût d'opportunité.

P1 doit rouvrir les pages, vérifier si de nouveaux outils/calculatrices
apportent une vraie méthode et documenter requêtes, dates, biais et arrêt de
recherche.

## 5. Preuves et fraîcheur

| Affirmation                                                | Source                                                                                                                                                          | Statut historique                        | Règle                                                  |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------ |
| médiane 5 200 € sur l'échantillon annoncé                  | [La Fabrique du Net](https://www.lafabriquedunet.fr/agences/pages/agences-site-internet/tarifs)                                                                 | à vérifier, non source primaire publique | écrire « médiane de cet échantillon », date et méthode |
| domaine 5–50 € HT/an, hébergement 5–50 € HT/mois rapportés | [France Num](https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/combien-payer-pour-un-site-web-ou-un-site-e)                    | ordres de grandeur historiques           | date, renouvellement, TVA, options                     |
| plateformes facturent abonnement et options                | [Wix](https://www.wix.com/plans), [Shopify France](https://www.shopify.com/fr/tarifs), [Squarespace](https://www.squarespace.com/pricing)                       | pages officielles variables par région   | relever pays, devise, annuel/mensuel, taxes, paiement  |
| aides territoriales évoluent                               | [France Num aides](https://www.francenum.gouv.fr/aides-financieres)                                                                                             | prudence confirmée                       | ne jamais déduire avant confirmation                   |
| droits sur code/design/contenus/comptes                    | [Légifrance CPI](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069414/LEGISCTA000006133323/)                                                    | orientation correcte                     | actifs et licences à inventorier                       |
| RGPD et mentions demandent du travail                      | [Service Public Entreprendre — RGPD](https://entreprendre.service-public.fr/vosdroits/F24270) et [mentions](https://entreprendre.service-public.fr/P10025)      | sources publiques                        | budget de cadrage, pas substitution au juriste/DPO     |
| accessibilité et UX doivent être testées                   | [W3C WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) et [Google page experience](https://developers.google.com/search/docs/appearance/page-experience) | standards/guides                         | critères d'acceptation, pas label vague                |

### Contradictions

- « coût sur trois ans » est promis mais non calculé.
- Les fourchettes et la médiane semblent comparables sans même scope.
- Un site, une app et un SaaS figurent dans la même échelle alors qu'ils
  répondent à des intentions différentes.
- Les coûts récurrents existent comme catégories sans scénario financier.

### À ne pas publier

- « le prix d'un site est X » sans scope, devise, TVA et inclusions ;
- ROI, leads ou SEO garantis par le niveau de prix ;
- prix promotionnel de plateforme traité comme coût sur cinq ans ;
- aide publique soustraite avant décision ;
- temps interne considéré gratuit.

## 6. Scénarios et calculs à construire

Les montants suivants viennent du plan d'audit et sont illustratifs.

| Variable                   |                   Simple — test local |             Central — acquisition |         Exigeant — commerce/règles |
| -------------------------- | ------------------------------------: | --------------------------------: | ---------------------------------: |
| scope                      | 5 pages, formulaire, contenus fournis | 12 pages, 4 services, CMS, mesure | 30 pages, catalogue, CRM, paiement |
| création                   |                               1 200 € |                           7 900 € |                           24 000 € |
| temps interne              |                                  12 h |                              45 h |                              120 h |
| outils/hébergement an 1    |                                 480 € |                           1 080 € |                            3 600 € |
| maintenance/support annuel |                                 600 € |                           1 800 € |                            6 000 € |
| évolutions annuelles       |                                 300 € |                           1 200 € |                            8 000 € |

```text
TCO 12 = création + temps interne + outils + maintenance + évolutions
         + conformité connue
TCO 36 = création + temps initial + 3 × récurrents
         + renouvellements + migration/incidents prévisibles
TCO 60 = création + temps initial + 5 × récurrents
         + coût de sortie/refonte
```

Exemple central, hors TVA et avant taux interne :

```text
TCO 12 = 7 900 + 45 h × taux + 1 080 + 1 800 + 1 200
TCO 36 = 7 900 + 45 h × taux + 3 × (1 080 + 1 800 + 1 200)
TCO 60 = 7 900 + 45 h × taux + 5 × (1 080 + 1 800 + 1 200)
```

### Sensibilité obligatoire

- temps contenu/validation ±30 % ;
- une langue supplémentaire ;
- une intégration ;
- renouvellement au tarif public ;
- maintenance minimale/centrale/renforcée ;
- sortie simple ou reconstruction ;
- taux interne selon coût chargé ou capacité non réaffectée.

### Contrôle inverse

- Si le spécifique ne récupère ni heures ni risque, l'outil simple gagne.
- Pour un artisan avec dix demandes mensuelles et peu de mises à jour, une app
  spécifique est probablement une mauvaise allocation.
- Pour une entreprise qui ressaisit 20 heures/mois dans un CRM, le guide doit
  renvoyer vers le calcul d'automatisation, sans transformer ce temps en
  économie cash automatique.

## 7. Comparaison et position

```text
Options : DIY, freelance/CMS, agence, spécifique, report.
Périmètre commun : même pages, contenus, formulaire, mesure, tests, support,
droits et sortie.
Position fréquente : acheter la solution la plus simple qui atteint la tâche
métier et dont le coût sur la durée est soutenable.
Option plus chère : seulement si contenu, parcours, intégration, qualité,
exploitation ou risque justifie l'écart.
Cas où Hagnéré Code perd : site test simple, autonomie réelle, solution
standard suffisante.
Signal de révision : périmètre, volume, fréquence d'évolution, contenu, outil
tiers, règles ou budget annuel changent.
Ce que nous déconseillons : site surdimensionné pour « faire professionnel »,
ou offre basse dont les coûts de temps/sortie restent cachés.
```

## 8. Ressource et CTA

### Feuille TCO publique

Champs :

- type de projet et tâche principale ;
- pages, contenus, langues, fonctionnalités et intégrations ;
- inclus/option/exclu/inconnu ;
- création, outils, transaction, maintenance, contenu et conformité ;
- heures internes ;
- HT/TTC et TVA à qualifier ;
- TCO 12/36/60 ;
- coût de sortie ;
- sensibilité ;
- décision « outil simple », « prestation », « spécifique » ou « reporter ».

Le tableur doit contenir un exemple rempli, des formules contrôlées et la
possibilité de conclure « ne pas investir ». Aucun e-mail obligatoire avant le
résultat.

### CTA

Le CTA doit préciser :

- informations requises ;
- livrable (périmètre et fourchette documentée, par exemple) ;
- délai ;
- ce qui reste à confirmer ;
- absence de garantie de leads, ROI ou SEO ;
- mauvais fit.

## 9. Empreinte humaine

### À conserver

- honnêteté sur les fourchettes ;
- refus de promettre un chiffre d'affaires ;
- exemples artisan/PME/commerçant ;
- questions de devis ;
- décision simple avant sophistication.

### À éviter

- juxtaposition de tableaux sans fil rouge ;
- répétition des fourchettes dans hero, FAQ et conclusion ;
- jargon TCO/HT/CMS sans conséquence ;
- catalogue app/SaaS dans un guide de site ;
- phrases « cela dépend » non suivies de variables.

### Fil narratif recommandé

Suivre trois dirigeants :

1. artisan qui teste une activité ;
2. PME de services qui veut générer des demandes ;
3. commerce avec catalogue et intégration.

Chaque cas doit aboutir à un budget initial, un coût annuel, un TCO et une
décision. P4 doit faire reformuler ces quatre éléments par un lecteur réel.

## 10. Défauts hérités

### P0

Aucun P0 identifié dans l'audit.

### P1

1. **P1-01** — fourchettes sans scope, HT/TTC et livrables.
2. **P1-02** — TCO 12/36/60 annoncé mais absent.
3. **P1-03** — temps interne et opportunité absents.
4. **P1-04** — seuil de décision et opinion insuffisants.
5. **P1-05** — mélange vitrine/e-commerce/app/SaaS.
6. **P1-06** — coûts cachés incomplets.
7. **P1-07** — benchmark international et médiane à dater.
8. **P1-08** — CTA sans livrable/délai.

### P2

- prix plateformes officiels ;
- critères accessibilité ;
- SEO/analytics et plan de mesure ;
- RGPD/mentions/cookies au budget ;
- temps de lecture ;
- OG/head ;
- cas réel seulement si prouvé ;
- aides/TVA contextualisées ;
- checklist de transfert ;
- ressource calculable.

## 11. Ordre de correction

1. Rejouer P1 et contrôler les pages de prix officielles.
2. Séparer les intentions et figer trois cas.
3. Construire/calculer la feuille TCO.
4. Réécrire l'ouverture, les cas et le verdict.
5. Intégrer conformité, temps interne et sortie.
6. Faire une P3 indépendante sur sources, formules et comparabilité.
7. P4 : lecture dirigeant, mobile, tableau, liens, head/JSON-LD, OG, build,
   route.
8. Prouver séparément déploiement, indexation et conversion.

**Porte de sortie :** aucune promesse de « coût complet » tant que la page ne
montre pas au moins trois TCO recalculés, leurs hypothèses, leur sensibilité et
le cas où Hagnéré Code déconseille une solution plus chère.
