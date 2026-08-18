# Contre-audit P3 v2 — CRM sur mesure ou HubSpot

## Identité et périmètre

- **Route :** `/guides/crm-sur-mesure-ou-hubspot`
- **Date du contrôle :** 24 juillet 2026
- **Nature :** contre-audit final indépendant, sans modification des fichiers audités
- **Guide public :** `src/app/guides/crm-sur-mesure-ou-hubspot/page.tsx`
- **Calculateur :** `src/components/guides/CrmTcoCalculator.tsx`
- **Moteur de calcul et exports :** `src/lib/crm-tco.ts`
- **Fiche téléchargeable :** `public/ressources/fiche-test-crm-12-actions.csv`
- **Registre :** `src/lib/guides.ts`
- **Dossier de recherche :** `docs/research/crm-sur-mesure-ou-hubspot.md`
- **Audit initial relu :** `docs/audits/giga-audit-2026-07-24/guides/crm-sur-mesure-ou-hubspot.md`
- **Première contre-audition relue :** `docs/audits/giga-audit-2026-07-24/reviews/crm-sur-mesure-ou-hubspot-p3.md`

### Empreintes du snapshot contrôlé

| Fichier              | SHA-256                                                            |
| -------------------- | ------------------------------------------------------------------ |
| Guide public         | `49b801844deaa3e9e32a2741265647adca1e6e6444a37186688e555cdea1684c` |
| Calculateur          | `e91c003c0f61f04a40ed4794c97e7c4a0527e0f70c6407c9350bd307c1e51633` |
| Moteur TCO           | `8fe306d6825255a804a27bc832b9f9ad84bcb0afe9834fa5ff6515b1c93cf8d6` |
| Fiche CSV            | `bcf490f02b531997eb03adbb3867471e061b456c13fa7875b51d4dc53a0afb00` |
| Registre des guides  | `9eeb406ae1095d9403592853b20a427511da87c375383bf61d9b9b79113120e0` |
| Dossier de recherche | `d40a94892eaa6f8c9ef46d0ad12edc3b6ce857029ec2e73e220a99040d82999d` |

## Verdict exécutif

**VERDICT : VALIDABLE.**

Le guide est désormais un véritable dossier de décision pour dirigeant, et non
un comparatif d’agence déguisé. Aucun P0 ni P1 propre au contenu CRM, aux
calculs, aux outils ou au rendu n’est encore ouvert dans le snapshot contrôlé.

Les anciens blocages sont fermés :

1. Pipedrive et Odoo sont nommés, datés et documentés sans leur attribuer un
   vainqueur fictif ;
2. trois coûts de contournement distincts complètent la ressaisie ;
3. la fiche des douze actions est réellement téléchargeable ;
4. le calculateur TCO fonctionne sur 12, 36 et 60 mois ;
5. les hypothèses unitaires du cas central sont toutes visibles ;
6. les scénarios de tension distinguent désormais les coûts récurrents des
   coûts fixes et peuvent réellement modifier un classement ;
7. le TCO à 60 mois est publié et concorde avec le calculateur ;
8. le montant fixe de 125 450 € n’est plus tronqué à 1 440 px.

Le niveau supérieur demanderait une preuve empirique propriétaire, par exemple
le même protocole exécuté sur des comptes de démonstration comparables. Son
absence n’est pas un défaut caché : le guide dit explicitement que Hagnéré Code
n’a pas réalisé ces essais dans les comptes du lecteur et refuse d’inventer un
vainqueur.

La validation éditoriale n’est pas encore la clôture P4 du dépôt. Le temps de
lecture, le dossier de recherche, les manifestes et les deux échecs globaux
concurrents devront être synchronisés avant de signer le snapshot final.

## Score officiel — 10 axes

| Axe           |   Note /10 | Motif                                                                                                                               |
| ------------- | ---------: | ----------------------------------------------------------------------------------------------------------------------------------- |
| Intention     |         10 | La scène « HubSpot payé, Excel encore ouvert » nomme immédiatement le problème du dirigeant                                         |
| Décision      |         10 | Standard par défaut, reconfiguration, autre CRM, hybride, sur-mesure ou report : chaque issue a des conditions observables          |
| Pédagogie     |         10 | Douze actions vécues, définitions en contexte, quatre situations métier, formules et prochaine action autonome                      |
| Profondeur    |         10 | Éditions, sièges, objets, droits, API, migration, coexistence, TCO, sensibilité, gouvernance et résultats                           |
| Preuve        |          9 | Sources primaires actuelles, limites visibles et calculs reproductibles ; pas encore de banc d’essai propriétaire exécuté           |
| Comparaison   |          9 | HubSpot, Pipedrive, Odoo, CRM vertical et six voies sont comparés honnêtement ; la comparaison produits reste documentaire          |
| Originalité   |         10 | Fiche des douze actions, calculateur local, sortie testée, coûts de contournement et verdict anti-survente                          |
| Style         |          9 | Plume humaine, directe et professionnelle ; la longueur de 30 minutes demande une lecture engagée                                   |
| Conversion    |         10 | Valeur immédiate sans formulaire, biais commercial déclaré et CTA pouvant conclure en faveur d’un standard                          |
| SEO / produit |          8 | Intention, entités, sources, métadonnées et maillage solides ; temps de lecture, preuves P4 et gates globaux restent à synchroniser |
| **Total**     | **95/100** | **Aucun axe sous 8/10 et aucun défaut P0/P1 restant**                                                                               |

## Vérification des sources officielles au 24 juillet 2026

### HubSpot

| Affirmation publique                                                                      | Source primaire contrôlée                                                                                                          | Verdict                                                       |
| ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| Smart CRM gratuit à 0 €                                                                   | [HubSpot Smart CRM](https://www.hubspot.fr/products/crm/ai-crm)                                                                    | **Exact**                                                     |
| Starter à partir de 15 € par licence et par mois, promotion affichée                      | [HubSpot Smart CRM](https://www.hubspot.fr/products/crm/ai-crm)                                                                    | **Exact** ; 20 € barré et offre signalée comme promotionnelle |
| Pro à partir de 49 € par licence et par mois                                              | [HubSpot Smart CRM](https://www.hubspot.fr/products/crm/ai-crm)                                                                    | **Exact**                                                     |
| Entreprise à partir de 75 € par licence et par mois                                       | [HubSpot Smart CRM](https://www.hubspot.fr/products/crm/ai-crm)                                                                    | **Exact**                                                     |
| Objets personnalisés dans des éditions Enterprise éligibles                               | [HubSpot — objets personnalisés](https://knowledge.hubspot.com/object-settings/create-custom-objects), mise à jour du 12 juin 2026 | **Exact**                                                     |
| Sièges View-Only, Core, Sales, Service et Revenue ; ancien modèle avant le 5 mars 2024    | [HubSpot — sièges](https://knowledge.hubspot.com/account-management/manage-seats), mise à jour du 26 juin 2026                     | **Exact**                                                     |
| Lecture seule sans modification de fiche ni journalisation d’e-mail                       | [HubSpot — sièges](https://knowledge.hubspot.com/account-management/manage-seats)                                                  | **Exact**                                                     |
| Autorisations distinctes de création, suppression, import et export                       | [HubSpot — autorisations](https://knowledge.hubspot.com/fr/user-management/hubspot-user-permissions-guide)                         | **Exact**                                                     |
| Export des valeurs actuelles et associations choisies ; activités par d’autres mécanismes | [HubSpot — exports](https://knowledge.hubspot.com/fr/import-and-export/export-records), mise à jour du 2 avril 2026                | **Exact**                                                     |
| Limites API dépendant de la distribution, de l’authentification et de l’abonnement        | [HubSpot Developers — limites API](https://developers.hubspot.com/docs/developer-tooling/platform/usage-guidelines)                | **Exact**                                                     |

Le guide ne confond pas le Smart CRM avec le devis complet de Sales Hub,
Marketing Hub ou Service Hub. Il qualifie les montants de prix d’appel et
demande un devis daté avec sièges, options, minimums, engagement et taxes.

### Pipedrive et Odoo

| Affirmation publique                                                                                                         | Source primaire contrôlée                                  | Verdict   |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | --------- |
| Pipedrive Lite 14 $US, Growth 39 $US, Premium 59 $US et Ultimate 79 $US par poste et par mois, facturation annuelle          | [Pipedrive — tarifs](https://www.pipedrive.com/fr/pricing) | **Exact** |
| Compte de bac à sable annoncé dans Ultimate                                                                                  | [Pipedrive — tarifs](https://www.pipedrive.com/fr/pricing) | **Exact** |
| Odoo : une application gratuite, Standard 24,90 $US et Personnalisé 49 $US par utilisateur et par mois, facturation annuelle | [Odoo — tarifs](https://www.odoo.com/fr_FR/pricing)        | **Exact** |
| Applications ventes, facturation, stock et projet réunies ; API externes annoncées dans Personnalisé                         | [Odoo — tarifs](https://www.odoo.com/fr_FR/pricing)        | **Exact** |

La formulation est loyale :

- les devises, périodicités et promotions sont signalées ;
- les fonctions officielles servent à présélectionner, pas à proclamer un
  classement ;
- le lecteur doit rejouer les mêmes actions dans les produits retenus ;
- l’absence de test réel par Hagnéré Code est déclarée juste après le tableau.

### Données personnelles

La mention du [référentiel CNIL sur les activités
commerciales](https://www.cnil.fr/sites/cnil/files/atoms/files/referentiel_traitements-donnees-caractere-personnel_gestion-activites-commerciales.pdf)
est proportionnée. Le référentiel traite bien finalités, catégories de données,
destinataires et durées. Le guide précise qu’il s’agit d’un cadre général et ne
transforme aucune durée en règle universelle pour toutes les données d’un CRM.

## Recalcul indépendant de l’article

### Temps de ressaisie

| Scénario fictif |                    Calcul | Résultat publié | Verdict   |
| --------------- | ------------------------: | --------------: | --------- |
| Simple          |   `4 × 8 / 60 × 220 × 45` |         5 280 € | **Juste** |
| Central         |  `6 × 18 / 60 × 220 × 45` |        17 820 € | **Juste** |
| Exigeant        | `12 × 25 / 60 × 220 × 50` |        55 000 € | **Juste** |

### Autres contournements

| Coût fictif                     |                           Calcul | Résultat publié | Verdict   |
| ------------------------------- | -------------------------------: | --------------: | --------- |
| Corrections de devis            |         `14 × 22 / 60 × 45 × 12` |         2 772 € | **Juste** |
| Validations manuelles           |          `35 × 9 / 60 × 55 × 12` |         3 465 € | **Juste** |
| Recherche d’information         |         `18 × 16 / 60 × 45 × 12` |         2 592 € | **Juste** |
| Total central sans recouvrement | `17 820 + 2 772 + 3 465 + 2 592` |        26 649 € | **Juste** |

Le texte évite le piège principal : ce coût théorique n’est pas présenté comme
une économie capturable ni comme une vente perdue.

### TCO central de l’article

| Voie               |   36 mois |   60 mois | Verdict   |
| ------------------ | --------: | --------: | --------- |
| Garder le standard |  30 600 € |  49 320 € | **Juste** |
| Reconfigurer       |  36 640 € |  54 280 € | **Juste** |
| Standard + module  |  89 730 € | 121 770 € | **Juste** |
| CRM sur mesure     | 203 210 € | 255 050 € | **Juste** |

Tous les postes sont reconstruisibles :

- garder : `2 520 + 780 × horizon` ;
- reconfigurer : `10 180 + 735 × horizon` ;
- hybride : `41 670 + 1 335 × horizon` ;
- sur-mesure : `125 450 + 2 160 × horizon`.

### Sensibilité éditoriale et migration

- abonnements sur 36 mois : 14 400 / 34 200 / 72 000 € — **justes** ;
- administration à 55 €/h : 7 920 / 23 760 / 47 520 € — **justes** ;
- exploitation spécifique : 43 200 / 86 400 / 129 600 € — **justes** ;
- nettoyage : `12 000 × 8 % × 4 / 60 × 38 = 2 432 €` — **juste** ;
- coexistence : `3 × 1 100 = 3 300 €` — **juste** ;
- minimum visible de migration : 5 732 € — **juste**.

## Audit du calculateur

### Formule

Pour une voie, un horizon `h` en mois et les coefficients du scénario :

```text
total =
coûts fixes × coefficient fixe
+ coûts mensuels × h × coefficient mensuel
+ coûts annuels × h / 12 × coefficient annuel
```

Les trois scénarios sont désormais structurels :

| Scénario        | Fixe | Mensuel | Annuel |
| --------------- | ---: | ------: | -----: |
| Central         | 1,00 |    1,00 |   1,00 |
| Récurrent +25 % | 1,00 |    1,25 |   1,25 |
| Projet +25 %    | 1,25 |    1,00 |   1,00 |

Cette correction est importante : appliquer le même coefficient à tous les
postes de toutes les voies n’aurait jamais changé leur classement. Les nouveaux
scénarios peuvent l’inverser lorsque les structures de coûts diffèrent. Le
calculateur l’explique et précise qu’il s’agit d’un test de tension, pas d’une
probabilité ni d’une prévision.

### Contrôle exhaustif

Les neuf combinaisons `12 / 36 / 60 mois × central / récurrent / projet` ont été
recalculées indépendamment. Pour chacune :

- le calcul est valide ;
- les quatre totaux concordent avec la formule ;
- la moyenne mensuelle et l’écart au minimum concordent ;
- le CSV contient le bon horizon, le bon scénario et les trois coefficients ;
- les montants centraux à 36 et 60 mois reproduisent exactement l’article.

### Validation et accessibilité

- douze champs numériques explicitement étiquetés ;
- six radios regroupés par horizon et scénario ;
- champs vides, négatifs, non numériques ou débordants refusés ;
- résultat partiel non exporté ;
- résumé et CSV désactivés tant que les entrées sont invalides ;
- état annoncé par une zone `aria-live` ;
- limites visibles ;
- aucune requête réseau dans le code du calculateur ;
- la mention « aucune donnée envoyée » est conforme à l’implémentation.

## Audit des deux CSV

### Fiche des douze actions

Le fichier livré contient :

- 13 lignes : un en-tête et douze actions ;
- 12 colonnes sur chaque ligne ;
- les numéros 1 à 12 sans trou ;
- les douze mêmes intitulés que le guide, dans le même ordre ;
- les résultats attendus ;
- des colonnes vides pour profil, date, durée, réussite, détour, donnée,
  risque, preuve et décision ;
- aucun code, macro ou mécanisme de collecte.

Le fichier pèse 1 961 octets, est servi en `text/csv; charset=UTF-8` et la route
locale répond 200. L’indication « 2 Ko » est honnête.

### Export du calculateur

- séparateur point-virgule ;
- nombres français avec virgule décimale ;
- champs correctement échappés ;
- BOM UTF-8 ajouté au blob téléchargé ;
- hypothèses, horizon, scénario, coefficients, totaux, moyennes, écarts et
  limites inclus ;
- nom de fichier descriptif ;
- aucune sortie produite si les entrées sont invalides.

## Pédagogie, plume humaine et conversion

### Points validés

- Le problème vécu précède la méthode et le jargon.
- L’avis professionnel apparaît avant le sommaire.
- La règle « gardez une solution standard tant que votre vente reste
  standard » est mémorable et conditionnelle.
- L’autre CRM standard, le vertical et le report empêchent le faux duel
  commercial.
- Les objets personnalisés, sièges, droits, exports et limites API sont
  expliqués par leurs conséquences métier.
- Les quatre situations fictives montrent pourquoi le nombre d’utilisateurs
  n’est pas un seuil de décision.
- Chaque chiffre fictif est signalé comme tel à proximité.
- Le biais de Hagnéré Code, vendeur de développement sur mesure, est déclaré
  avant la comparaison.
- Le CTA peut honnêtement conclure « gardez le standard ».
- La fiche et le calculateur donnent de la valeur avant toute prise de contact.

### Passe anti-IA

Aucun motif rédhibitoire n’a été trouvé :

- pas d’ouverture abstraite ;
- pas de succession de slogans vides ;
- pas de jargon non expliqué ;
- pas de seuil magique ;
- pas de faux cas client ;
- pas de promesse de ROI ;
- pas de conclusion neutre qui abandonne le lecteur.

La page est longue, mais sa longueur vient des tests, hypothèses, cas, formules,
limites et responsabilités. Le sommaire, les actifs téléchargeables et le
verdict initial lui donnent plusieurs niveaux de lecture.

## SEO et produit

- titre : `HubSpot ou CRM sur mesure : que choisir ?` ;
- H1 cohérent et plus explicite ;
- meta description spécifique ;
- canonical : `https://hagnere-code.ai/guides/crm-sur-mesure-ou-hubspot` ;
- données structurées `Article` et `BreadcrumbList` ;
- six FAQ éditoriales ;
- maillage vers coût CRM, ERP, intégrations et transformation d’Excel ;
- couverture naturelle de HubSpot, Pipedrive, Odoo, CRM standard, vertical,
  hybride, objets, sièges, API, migration, TCO, adoption et gouvernance.

La prévisualisation locale est volontairement en `noindex, nofollow`. Cela ne
dit rien de l’état de production ni de l’indexation réelle par Google.

Mesure actuelle : **5 917 mots visibles, soit 30 minutes** avec le script du
projet. Le registre affiche encore 29 minutes : correction P2 à faire avant le
snapshot final.

## Responsive réel

Contrôle dans un navigateur réel après rechargement :

|  Largeur | Scroll horizontal | Calculateur                                              | Verdict  |
| -------: | ----------------: | -------------------------------------------------------- | -------- |
|   320 px |             aucun | scénarios et champs lisibles, cartes empilées            | **PASS** |
|   390 px |             aucun | champ sur-mesure complet                                 | **PASS** |
|   768 px |             aucun | champ 318 px, aucune troncature                          | **PASS** |
| 1 024 px |             aucun | champ 334 px, aucune troncature                          | **PASS** |
| 1 440 px |             aucun | champ 125 450 complet, `clientWidth = scrollWidth = 151` | **PASS** |

Les tableaux basculent vers des cartes sur petit écran. Aucune erreur ni aucun
avertissement console n’a été observé.

## Tests et gates

### Réussites indépendantes

- 72 tests ciblés sur 6 fichiers : **PASS** ;
- ESLint sur guide, calculateur, moteur, tests et registre : **PASS** ;
- TypeScript `npx tsc --noEmit` : **PASS** ;
- Prettier sur les fichiers pris en charge : **PASS** ;
- route guide locale : **200** ;
- route CSV locale : **200**.

### Gates globaux encore rouges au moment du contrôle

`npm test` a produit **468 réussites sur 470 tests** et deux échecs extérieurs
au guide CRM :

1. le manifeste P4 de `prioriser-fonctionnalites-mvp-saas` attend une ancienne
   empreinte de `src/lib/guides.ts` ;
2. `batch3-guide-quality.test.ts` exige encore des littéraux JSON-LD dans
   `logiciel-gestion-stock-sur-mesure`, alors que cette page est en cours de
   migration vers `buildGuideStructuredData`.

Ces échecs ne révèlent aucun défaut CRM, mais interdisent de présenter le dépôt
comme intégralement vert avant leur correction.

## P0, P1 et P2

### P0 — aucun

Aucune erreur factuelle, arithmétique, tromperie commerciale, ressource absente,
perte de données ou casse bloquante n’a été trouvée.

### P1 — aucun

Les deux P1 détectés pendant cette contre-audition ont été corrigés puis
retestés :

1. dernier chiffre du montant 125 450 € masqué à 1 440 px ;
2. ancienne sensibilité uniforme incapable de changer le classement.

### P2 — clôture du snapshot

1. Passer `readTimeMin` de 29 à 30 après la mesure finale.
2. Mettre la section courante du dossier de recherche à niveau : calculateur,
   fiche CSV, Pipedrive/Odoo, trois contournements, 60 mois, scénarios
   structurels et contrôles finaux.
3. Ne plus laisser le statut P3 « en cours » une fois cette contre-audition
   acceptée.
4. Régénérer les manifestes seulement après stabilisation de tous les fichiers
   partagés.
5. Relancer `npm test`, `check:seo`, TypeScript, ESLint et le build après
   correction des deux gates concurrents.
6. Option de confort : ajouter un BOM au CSV statique pour maximiser la
   détection automatique de l’UTF-8 par d’anciennes versions d’Excel. Le fichier
   actuel reste un CSV UTF-8 valide.

## Gate finale de cette contre-audition

| Contrôle                                                      | État                                               |
| ------------------------------------------------------------- | -------------------------------------------------- |
| Sources officielles HubSpot à jour                            | **PASS**                                           |
| Sources officielles Pipedrive et Odoo à jour                  | **PASS**                                           |
| Comparaison honnête sans faux test de comptes                 | **PASS**                                           |
| Calculs de l’article                                          | **PASS**                                           |
| Calculateur 12 / 36 / 60 mois                                 | **PASS**                                           |
| Trois scénarios structurels                                   | **PASS**                                           |
| Export CSV du calculateur                                     | **PASS**                                           |
| Fiche CSV des douze actions                                   | **PASS**                                           |
| Pédagogie dirigeant et plume humaine                          | **PASS**                                           |
| Biais, exemples fictifs et limites déclarés                   | **PASS**                                           |
| Conversion utile et loyale                                    | **PASS**                                           |
| Responsive 320 à 1 440 px                                     | **PASS**                                           |
| Tests ciblés, ESLint, TypeScript et Prettier                  | **PASS**                                           |
| Temps de lecture, recherche et manifestes finaux synchronisés | **À FAIRE — P2**                                   |
| Suite globale et build final                                  | **À REJOUER après stabilisation du dépôt partagé** |

**Décision finale : le guide CRM est validable à 95/100. Il peut entrer en P4
final après les six opérations P2 de synchronisation et de preuve ; aucune
réécriture de fond supplémentaire n’est exigée par cette contre-audition.**
