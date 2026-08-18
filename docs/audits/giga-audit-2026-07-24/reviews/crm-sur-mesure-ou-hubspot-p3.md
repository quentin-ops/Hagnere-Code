# Contre-audit P3 — CRM sur mesure ou HubSpot

## Identité du contrôle

- **Route relue :** `/guides/crm-sur-mesure-ou-hubspot`
- **Fichier public relu intégralement :** `src/app/guides/crm-sur-mesure-ou-hubspot/page.tsx`
- **Audit de référence :** `docs/audits/giga-audit-2026-07-24/guides/crm-sur-mesure-ou-hubspot.md`
- **Date du contrôle :** 24 juillet 2026
- **Empreinte SHA-256 contrôlée :** `11f0d46d876615547036e8a58666e10411f03047508b7c5537890c0cab9a8909`
- **État Git observé :** fichier modifié et non commité au moment du contrôle
- **Nature de cette passe :** lecture indépendante, vérification des sources officielles, recalcul intégral, tests éditoriaux et inspection responsive ; aucune modification du guide

> Cette contre-audit vaut uniquement pour l’empreinte indiquée. Le fichier ayant évolué pendant la revue, tous les tests ont été relancés après sa dernière modification observée.

## Verdict exécutif

**Verdict : bloquant pour déclarer la refonte P3 terminée ou présenter ce guide comme la référence absolue de la requête ; non bloquant sur le plan factuel et technique pour une prévisualisation.**

La réécriture est nettement supérieure à la version notée 74/100 dans l’audit initial. Elle est désormais humaine, utile à un dirigeant, prudente sans être molle et réellement orientée vers une décision. Son avis central est bon et mémorable : conserver le standard tant que le métier reste standard, tester la reconfiguration puis un autre produit, et ne coder que la partie stable et distinctive. Les prix, fonctions et dates HubSpot explicitement cités sont exacts au jour du contrôle. Tous les calculs affichés sont justes. Les tests ciblés, ESLint et TypeScript passent.

Le guide ne satisfait toutefois pas encore deux exigences P0 de son propre audit :

1. il recommande de tester « un autre CRM » sans en comparer un seul de manière nommée et reproductible ;
2. il chiffre trois variantes du même contournement — la ressaisie — mais pas deux à quatre coûts de contournement distincts, comme les erreurs et validations manuelles.

Il manque aussi trois actifs de forte valeur prévus en P1 : un outil réellement téléchargeable ou interactif, un calcul à 60 mois effectivement publié, et les hypothèses unitaires qui rendent tous les postes du TCO entièrement reproductibles. Ces manques n’annulent pas la qualité du texte ; ils empêchent de soutenir la promesse « meilleur guide disponible ».

## Score officiel — 10 axes

| Axe | Note /10 | Ce qui est désormais solide | Ce qui empêche la note supérieure |
|---|---:|---|---|
| Intention | 9 | L’introduction part de HubSpot payé mais Excel encore ouvert et répond immédiatement au dilemme réel | Aucun produit alternatif n’est effectivement comparé |
| Décision | 9 | Verdict immédiat, six voies, droit de reporter et recommandation par cas | La branche « autre CRM » reste théorique |
| Pédagogie | 9 | Douze actions vécues, définitions dans le contexte, exemples sectoriels et formules lisibles | La densité peut fatiguer sur mobile sans outil réutilisable |
| Profondeur | 9 | Éditions, sièges, objets, droits, API, migration, TCO, gouvernance et KPI | Horizon 60 mois seulement conseillé, pas calculé |
| Preuve | 8 | Sources primaires datées, limites explicites, calculs exacts et scénarios déclarés fictifs | Pas de test comparatif réellement exécuté ni d’hypothèses unitaires pour chaque poste |
| Comparaison | 7 | Six décisions et quatre scénarios comparés avec une logique cohérente | Aucun autre CRM nommé, aucune même tâche rejouée entre deux produits |
| Originalité | 8 | Protocole en douze actions, essai de sortie, coût de migration et verdict anti-survente | Aucun calculateur, fichier ou banc d’essai propriétaire utilisable |
| Style | 9 | Voix claire, humaine, professionnelle et opinion assumée ; biais commercial déclaré | Quelques séquences de cartes et tableaux allongent le parcours mobile |
| Conversion | 7 | CTA honnête, précis, cohérent avec le diagnostic et autorisant la conclusion « gardez le standard » | Pas de bénéfice immédiat à emporter avant la prise de contact |
| SEO / produit | 8 | Métadonnées, structure, sources, FAQ, maillage et richesse sémantique solides | Faible couverture des entités concurrentes et absence d’actif propriétaire téléchargeable |
| **Total** | **83/100** | **Très bon guide de décision, factuellement sûr** | **Cible de 93/100 non atteinte : deux P0 et trois P1 restent ouverts** |

Le score est volontairement exigeant. Il ne mesure pas uniquement la qualité littéraire : il intègre l’écart entre le guide publié et les critères d’acceptation écrits avant la refonte.

## Vérification des affirmations HubSpot

Toutes les affirmations produit explicites ont été contrôlées sur des sources officielles accessibles le 24 juillet 2026.

| Affirmation du guide | Source officielle contrôlée | Résultat |
|---|---|---|
| Outils gratuits à 0 € par mois | [HubSpot Smart CRM](https://www.hubspot.fr/products/crm/ai-crm) | **Exact** |
| Starter à partir de 15 € par mois et par licence, prix promotionnel affiché | [HubSpot Smart CRM](https://www.hubspot.fr/products/crm/ai-crm) | **Exact** ; la page affichait 15 € avec 20 € barré |
| Pro à partir de 49 € par mois et par licence | [HubSpot Smart CRM](https://www.hubspot.fr/products/crm/ai-crm) | **Exact** |
| Entreprise à partir de 75 € par mois et par licence | [HubSpot Smart CRM](https://www.hubspot.fr/products/crm/ai-crm) | **Exact** |
| Gratuit : contacts, entreprises, transactions, pipeline et synchronisation | [HubSpot Smart CRM](https://www.hubspot.fr/products/crm/ai-crm) | **Exact** |
| Starter : suppression du marquage, autorisations et enrichissement automatique | [HubSpot Smart CRM](https://www.hubspot.fr/products/crm/ai-crm) | **Exact** |
| Pro : apparence du CRM, fusion des doublons et équipes | [HubSpot Smart CRM](https://www.hubspot.fr/products/crm/ai-crm) | **Exact** |
| Entreprise : objets personnalisés, SSO et analyses supplémentaires | [HubSpot Smart CRM](https://www.hubspot.fr/products/crm/ai-crm) | **Exact et prudemment formulé** |
| Objets personnalisés réservés à des éditions Enterprise éligibles | [HubSpot — créer des objets personnalisés](https://knowledge.hubspot.com/object-settings/create-custom-objects), mise à jour indiquée au 12 juin 2026 | **Exact** |
| Distinction entre sièges lecture seule, Core, Sales, Service et Revenue | [HubSpot — gérer les sièges](https://knowledge.hubspot.com/account-management/manage-seats), mise à jour indiquée au 26 juin 2026 | **Exact** |
| Lecture seule : consultation possible, mais pas de modification ni de journalisation d’e-mails | [HubSpot — gérer les sièges](https://knowledge.hubspot.com/account-management/manage-seats) | **Exact** |
| Certains anciens comptes suivent un modèle antérieur au 5 mars 2024 | [HubSpot — gérer les sièges](https://knowledge.hubspot.com/account-management/manage-seats) | **Exact** |
| Les autorisations d’import, export, modification et suppression sont distinctes | [HubSpot — guide des autorisations](https://knowledge.hubspot.com/fr/user-management/hubspot-user-permissions-guide) | **Exact** |
| L’export principal porte sur les valeurs et associations choisies ; les activités demandent d’autres mécanismes | [HubSpot — exporter des fiches](https://knowledge.hubspot.com/fr/import-and-export/export-records) | **Exact** |
| Les limites d’API dépendent notamment du type d’application, de l’authentification et de l’abonnement | [HubSpot — règles d’utilisation des API](https://developers.hubspot.com/docs/developer-tooling/platform/usage-guidelines) | **Exact** |
| Le suivi des limites CRM couvre notamment fiches, associations, propriétés, pipelines et objets personnalisés | [HubSpot — suivi des limites CRM](https://developers.hubspot.com/docs/api-reference/latest/crm/limits-tracking/guide) | **Exact** |

### Conclusion factuelle

- Aucun prix HubSpot erroné n’a été trouvé.
- Aucune fonction n’est attribuée à la mauvaise édition dans le périmètre des affirmations écrites.
- Les tarifs sont correctement présentés comme des prix d’appel datés et non comme le devis total de Sales Hub, Marketing Hub ou Service Hub.
- Le texte sépare correctement source produit et preuve de rentabilité.
- La mention CNIL reste générale et n’invente ni durée universelle ni conclusion juridique personnalisée.
- Aucun seuil magique d’utilisateurs, gain commercial garanti ou promesse de sécurité automatique n’est formulé.

## Recalcul indépendant de tous les montants

### Coût de la ressaisie

| Scénario | Recalcul | Montant publié | Verdict |
|---|---:|---:|---|
| Simple | `4 × (8 / 60) × 220 × 45` | 5 280 € | **Juste** |
| Central | `6 × (18 / 60) × 220 × 45` | 17 820 € | **Juste** |
| Exigeant | `12 × (25 / 60) × 220 × 50` | 55 000 € | **Juste** |

### TCO fictif sur 36 mois

| Voie | Addition indépendante | Total publié | Mensuel publié | Verdict |
|---|---:|---:|---:|---|
| Garder HubSpot | `21 600 + 1 260 + 6 480 + 1 260` | 30 600 € | 850 € | **Juste** |
| Reconfigurer HubSpot | `21 600 + 6 400 + 2 520 + 4 860 + 1 260` | 36 640 € | 1 017,78 € | **Juste après arrondi** |
| HubSpot + module spécifique | `21 600 + 24 000 + 8 000 + 3 780 + 4 860 + 21 600 + 5 890` | 89 730 € | 2 492,50 € | **Juste** |
| CRM sur mesure | `80 000 + 12 000 + 16 000 + 6 300 + 12 960 + 64 800 + 11 150` | 203 210 € | 5 644,72 € | **Juste après arrondi** |

### Sensibilité sur 36 mois

| Variable | Recalculs | Verdict |
|---|---|---|
| Abonnements | `400 × 36 = 14 400` ; `950 × 36 = 34 200` ; `2 000 × 36 = 72 000` | **Tous justes** |
| Administration à 55 €/h | `4 × 55 × 36 = 7 920` ; `12 × 55 × 36 = 23 760` ; `24 × 55 × 36 = 47 520` | **Tous justes** |
| Maintenance du spécifique | `1 200 × 36 = 43 200` ; `2 400 × 36 = 86 400` ; `3 600 × 36 = 129 600` | **Tous justes** |

### Migration fictive

| Poste | Recalcul | Montant publié | Verdict |
|---|---:|---:|---|
| Doublons à examiner | `12 000 × 8 %` | 960 | **Juste** |
| Nettoyage | `960 × 4 / 60 × 38` | 2 432 € | **Juste** |
| Coexistence | `3 × 1 100` | 3 300 € | **Juste** |
| Minimum visible | `2 432 + 3 300` | 5 732 € | **Juste** |

### Limite de reproductibilité

Les additions sont exactes, mais plusieurs montants constitutifs du tableau TCO — 1 260 €, 6 480 €, 5 890 €, 11 150 €, etc. — ne sont pas déduits d’une hypothèse unitaire visible. Le lecteur peut contrôler la somme, mais pas reconstruire tous les postes à partir de jours, heures, taux ou forfaits. Ce n’est pas une erreur arithmétique ; c’est un manque de profondeur méthodologique.

## Conformité aux P0 de l’audit initial

| P0 demandé | État | Preuve dans le fichier audité | Correction précise |
|---|---|---|---|
| Ajouter le faux dilemme et les autres CRM standards | **Partiel — bloquant** | Les six options mentionnent un autre CRM aux lignes 287–333, mais aucun produit n’est nommé, testé ou comparé | Après le tableau des six voies, ajouter au moins un CRM généraliste ou vertical nommé et rejouer le même sous-ensemble d’actions. Publier l’édition, la date, le compte de test, la source officielle et les limites. Tableau maximal de trois colonnes : `Solution testée` / `Actions réussies ou détours` / `Coût et contrainte de sortie` |
| Publier un verdict conditionnel clair | **Conforme** | Position professionnelle aux lignes 250–283 et verdict aux lignes 1006 et suivantes | Aucune correction nécessaire |
| Ajouter un comparatif produit daté et sourcé | **Conforme au minimum** | Prix et fonctions HubSpot datés aux lignes 342–426, sources officielles aux lignes 1096–1166 | Pour dépasser le minimum, ajouter une source indépendante de méthode ou un test exécuté ; ne pas inventer de score produit |
| Calculer deux à quatre coûts de contournement | **Partiel — bloquant** | Les lignes 619–681 calculent trois niveaux du seul temps de ressaisie | Ajouter au moins deux catégories distinctes observables : `corrections d’erreur/mois × minutes/correction ÷ 60 × coût horaire × 12` et `validations manuelles/mois × minutes/validation ÷ 60 × coût horaire × 12`. Déclarer les exemples fictifs et ne pas convertir une probabilité de vente en revenu certain |
| Traiter migration, coexistence et retour arrière | **Conforme** | Lignes 854–948 : export, inventaire, nettoyage, correspondances, coexistence, bascule, retour arrière et fermeture | Aucune correction nécessaire |
| Transformer le cas métier en quatre scénarios | **Conforme** | Quatre secteurs et quatre premières décisions aux lignes 486–533 | Aucune correction nécessaire |

## Conformité aux P1

| P1 demandé | État | Correction précise |
|---|---|---|
| Créer le calculateur TCO | **Absent — forte valeur** | Livrer un calculateur réellement utilisable, avec sièges, abonnements, temps interne, migration, intégrations, maintenance, sortie, horizons 12/36/60 mois et trois scénarios. Le lien doit télécharger ou ouvrir l’outil, pas annoncer une ressource future |
| Fournir le kit des douze actions | **Absent — forte valeur** | Proposer un CSV/XLSX ou une fiche imprimable avec action, profil, durée, réussite, détour, donnée recopiée, risque, capture/preuve et décision. Le guide affiche les douze actions mais ne permet pas de les emporter |
| Ajouter adoption, gouvernance et KPI | **Conforme** | Six mesures calculables et un propriétaire métier sont publiés aux lignes 950–1003 |
| Comparer à 60 mois et tester la sensibilité | **Partiel** | La sensibilité à 36 mois est bonne ; la ligne 849 demande de tester 60 mois sans le faire. En conservant les coûts initiaux et en prolongeant uniquement les postes explicitement mensuels, publier et expliquer : garder 49 320 €, reconfigurer 54 280 €, hybride 121 770 €, sur mesure 255 050 €. Faire valider la nature récurrente de chaque poste avant intégration |
| Préciser propriété intellectuelle et exploitation | **Conforme au minimum** | La FAQ précise code, composants tiers, dépôts, hébergement et restitution ; le TCO couvre exploitation, maintenance et support | Une courte section contractuelle dans le corps serait plus visible, mais n’est pas bloquante |

## Contrôles éditoriaux et techniques

### Résultats automatisés sur l’empreinte contrôlée

- `npx vitest run src/lib/batch4-guide-quality.test.ts src/lib/guide-human-language.test.ts src/lib/guides.test.ts` : **55 tests réussis sur 55**.
- `npx eslint src/app/guides/crm-sur-mesure-ou-hubspot/page.tsx src/lib/guides.ts` : **réussi**.
- `npx tsc --noEmit` : **réussi**.

Trois anomalies observées sur une version intermédiaire — sept FAQ, tableau de sensibilité à quatre colonnes et divulgation fictive insuffisamment proche — ont été corrigées avant l’empreinte finale de cette contre-audit. Elles ne doivent plus figurer comme défauts ouverts.

### Métadonnées et structure

- Titre SEO spécifique : 59 caractères.
- Titre de registre : 41 caractères.
- Meta description : 132 caractères.
- Une seule intention principale et un H1 cohérent avec la promesse.
- Données structurées Article et BreadcrumbList générées par le socle.
- Six FAQ, conformément au contrat éditorial testé.
- Huit tableaux éditoriaux, tous limités à trois colonnes dans la source finale.
- Quatre liens internes connexes présents et résolus.
- Aucun balisage FAQPage artificiel : ce choix est cohérent avec les tests du projet.

La prévisualisation locale applique `noindex, nofollow` hors environnement de production. Cela n’établit ni l’état du déploiement public ni l’indexation Google. La source est techniquement prévue pour hériter de la politique de production, mais l’indexation réelle doit être contrôlée séparément après publication.

## Pédagogie dirigeant

### Ce qui fonctionne très bien

- Le texte commence par une scène immédiatement compréhensible : une entreprise paie HubSpot mais continue de préparer des opérations dans Excel.
- Le verdict arrive avant la méthode ; le dirigeant n’a pas à lire vingt minutes pour savoir ce que l’auteur pense.
- « Standard tant que le métier reste standard » est une règle simple, professionnelle et défendable.
- Les mots techniques sont reliés à des exemples concrets : chantier, équipement, mission, devis, remise, transmission.
- Les scénarios ne prétendent pas être des cas clients et n’inventent aucun résultat.
- La différence entre minute économisée et économie réellement capturable est remarquablement bien expliquée.
- Le texte protège contre deux erreurs symétriques : surpayer un outil mal configuré et financer trop tôt un logiciel spécifique.
- La recommandation hybride est crédible et non dogmatique.

### Ce qui reste perfectible

- La branche « autre CRM » est intellectuellement présente mais pratiquement vide. Un dirigeant ne sait pas quel type de produit présélectionner ni comment comparer.
- Les douze actions sont une excellente méthode, mais elles restent enfermées dans la page. Leur valeur augmenterait fortement sous forme de feuille de test.
- La longueur rend la lecture exhaustive exigeante. Le sommaire limite ce risque, mais un résumé téléchargeable et un calculateur donneraient une seconde porte d’entrée.

## Inspection responsive et confort de lecture

Contrôle manuel effectué dans un navigateur réel sur la page locale :

- **320 × 800 px :** aucune largeur horizontale parasite ; largeur de corps et largeur scroll égales à 320 px ;
- les huit tableaux basculent correctement vers leur représentation mobile ;
- les tableaux de bureau sont masqués sur mobile ;
- le H1 reste lisible à 24 px ;
- les cartes TCO sont lisibles à 375 px ;
- aucun avertissement ni erreur console observé ;
- la mise en page de bureau reste lisible et cohérente avec les autres guides.

**Réserve non bloquante :** huit ensembles de tableaux transformés en cartes, auxquels s’ajoutent douze cartes d’actions, produisent un défilement mobile long. Il n’y a pas de casse responsive, mais une ressource condensée ou un affichage progressif réduirait la fatigue.

## Biais commercial, opinion et conversion

### Biais

La déclaration « Hagnéré Code conçoit des outils internes sur mesure » est visible juste après le verdict. Le texte explique ensuite pourquoi il présente aussi les cas où il faut garder HubSpot, changer de CRM standard ou reporter. C’est une excellente pratique de transparence.

### Opinion

L’avis est suffisamment tranché sans devenir publicitaire :

- ne pas reconstruire HubSpot pour quelques champs pénibles ;
- reconfigurer avant de coder ;
- tester un autre standard ;
- ne coder que la partie stable du métier ;
- préférer l’hybride lorsqu’une seule étape résiste.

Cette opinion repose sur des faits contrôlables — fréquence, temps, erreurs, coût, stabilité, migration — et non sur une préférence d’agence.

### Conversion

Le CTA est crédible parce qu’il propose de déterminer s’il faut régler, compléter ou remplacer, et autorise explicitement la conclusion qu’un outil standard suffit. Il évite la pression et la promesse de résultat.

La conversion reste néanmoins plus faible qu’elle pourrait l’être : après un guide long, le lecteur ne reçoit aucun diagnostic instantané, fichier de test ou calcul exploitable sans prendre contact. Le kit et le calculateur prévus en P1 seraient à la fois une amélioration éditoriale, une preuve de compétence et un meilleur pont commercial.

## SEO : forces et limite réelle

### Forces

- correspondance forte entre requête, titre, H1 et verdict ;
- couverture sémantique riche : HubSpot, CRM standard, CRM vertical, hybride, sur-mesure, sièges, objets, API, export, migration, TCO, KPI et gouvernance ;
- sources primaires datées ;
- exemples, formules et tableaux qui répondent à des sous-intentions réelles ;
- maillage vers le guide du coût d’un CRM et autres guides associés ;
- structure technique et tests conformes.

### Limites

- l’absence de nom et de test d’un CRM concurrent prive la page d’entités et de requêtes comparatives naturelles ;
- l’absence d’outil propriétaire réduit les chances d’obtenir des citations, liens et retours directs ;
- un texte très complet ne garantit ni classement ni indexation : autorité du domaine, qualité des liens, concurrence, performance, engagement utile et actualisation restent nécessaires ;
- l’audit local ne prouve ni déploiement, ni présence dans le sitemap de production, ni traitement Search Console, ni indexation Google.

## Liste de corrections à appliquer avant validation P3

### P0 — bloquantes

1. **Comparer réellement au moins un autre CRM nommé.** Utiliser les mêmes actions, une édition datée, une source officielle et des critères de sortie. Ne pas publier une simple liste de logos ou de fonctions marketing.
2. **Chiffrer au moins deux coûts de contournement distincts de la ressaisie.** Ajouter erreurs corrigées et validations manuelles avec formules, hypothèses fictives explicites et invitation à remplacer les valeurs par les données de l’entreprise.

### P1 — nécessaires pour viser 93/100

1. Publier un kit des douze actions immédiatement téléchargeable.
2. Publier un calculateur TCO ou, au minimum, une feuille de calcul complète.
3. Afficher le TCO à 60 mois, au lieu de seulement recommander de le tester.
4. Donner les unités qui produisent chaque poste du tableau TCO.

### P2 — preuve défendable

1. Exécuter et documenter le protocole sur deux comptes de démonstration.
2. Publier date, édition, données d’essai, chronométrage, résultat et limites.
3. Ajouter plus tard un cas client uniquement avec autorisation et méthode de mesure auditables.

## Gate finale

| Contrôle | État |
|---|---|
| Faits HubSpot exacts et datés | **PASS** |
| Calculs arithmétiques exacts | **PASS** |
| Langage humain et pédagogie dirigeant | **PASS** |
| Opinion professionnelle et biais déclaré | **PASS** |
| Migration, réversibilité, droits et gouvernance | **PASS** |
| Responsive sans débordement à 320 px | **PASS** |
| Tests éditoriaux, ESLint et TypeScript | **PASS** |
| Autre CRM nommé et comparé | **FAIL — P0** |
| Deux à quatre coûts de contournement distincts | **FAIL — P0** |
| Outil téléchargeable ou interactif | **FAIL — P1** |
| TCO effectivement calculé à 60 mois | **FAIL — P1** |
| Hypothèses unitaires de tous les postes TCO | **FAIL — P1** |

**Décision : ne pas signer la refonte comme terminée au niveau “référence numéro un” avant correction des deux P0.** Après ces corrections, le contenu pourra être considéré comme publiable avec un excellent niveau éditorial. L’atteinte de 93/100 demande ensuite l’outil réel, le calcul à 60 mois et une preuve comparative exécutée.
