# Dossier de recherche — `combien-coute-une-application-mobile`

> **Statut au 25 juillet 2026 : reconstitution documentaire, P1 à
> reprendre.** La page actuelle donne une première enveloppe et pose la bonne
> question — faut-il réellement une application ? — mais ne relie pas encore
> ce budget à un périmètre égal, un coût total ni un seuil de valeur. Les
> montants de ce dossier sont des simulations pédagogiques historiques, pas
> des tarifs ni des moyennes.

## Journal des quatre passes

| Passe                        | État            | Date                          | Responsable            | Snapshot           | Blocages                                                                    |
| ---------------------------- | --------------- | ----------------------------- | ---------------------- | ------------------ | --------------------------------------------------------------------------- |
| 1. Recherche                 | **À reprendre** | 24/07/2026                    | à désigner             | page + audit       | Rejouer requêtes, benchmark, règles stores, CNIL et hypothèses financières. |
| 2. Rédaction et intégration  | **À reprendre** | page existante                | à désigner             | page `f52ca4…c6`   | Dix P1 ; lien CNIL cassé, TCO et payback absents.                           |
| 3. Contre-audit indépendant  | **À reprendre** | rapport initial du 24/07/2026 | autre agent            | audit `f750c7…3b6` | Le rapport diagnostique le snapshot ; aucune réécriture contre-vérifiée.    |
| 4. Plume humaine et contrôle | **Bloquée**     | —                             | lecteur dirigeant + QA | —                  | P3, puis calculateur, lecture mobile, règles stores, liens, build et route. |

### Manifeste documentaire observé

| Fichier                                                                            | SHA-256 au 24/07/2026                                              | Portée              |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ------------------- |
| `src/app/guides/combien-coute-une-application-mobile/page.tsx`                     | `f52ca4797a84a1179554240e068f50ad2ae3d0455ac451639bc03581c2e9c5c6` | Guide courant.      |
| `docs/audits/giga-audit-2026-07-24/guides/combien-coute-une-application-mobile.md` | `f750c7daa7adc458fb2c1718319fa2d75ba30db204d4a76056f0114856c443b6` | Audit historique.   |
| `docs/charte-qualite-guides.md`                                                    | `5ee616faa4959dc8ad2b0eb19a5b19ffbf53299b62665700093c5c176b0b8491` | Contrat de qualité. |
| `docs/workflow-maitre-guides-4-passes.md`                                          | `a3a8c8f1be5d5d60b096f251f22b27ae5526adb708c334c4d6f0b7b4270c60c4` | Portes.             |

## 1. Brief dirigeant

```text
Slug : combien-coute-une-application-mobile
Statut : page existante, score historique 74/100, aucune porte validée
Requête principale hypothétique : combien coûte une application mobile
Moment : explorer puis décider avant cadrage/devis
Lecteur : dirigeant de PME, responsable métier ou porteur de produit qui veut
          une enveloppe de lancement et d'exploitation
Déclencheur : une équipe propose une application iOS/Android pour améliorer
              un processus ou lancer un service
Question : « Une application téléchargeable est-elle le bon investissement,
            combien coûte-t-elle au départ et chaque année, et quand renoncer ? »
Décision : PWA/web, no-code, cross-platform, natif, pilote ou report
Action sans contact : calculer TCO et seuil de temps/valeur récupérable
CTA : cadrage du parcours, des usages et des hypothèses, sans prix garanti
Hors périmètre : tarif universel, validation juridique, date store garantie,
                 ROI ou adoption garantis
```

### Phrase réelle et réponse

- **Phrase téléphone :** « On me parle de 20 à 50 k€ pour une app. Est-ce que
  cela comprend le serveur, les stores, la maintenance, et combien
  d'utilisateurs faut-il pour que cela vaille le coup ? »
- **Réponse en une phrase :** une première version peut entrer dans cet ordre
  de grandeur selon son périmètre, mais la décision exige d'ajouter backend,
  tests, stores, support, maintenance et sortie, puis de comparer ce TCO à une
  PWA, au no-code et au gain réellement récupérable.
- **Verdict possible :** ne pas créer d'app ; tester une PWA ; lancer un pilote
  cross-platform ; investir en natif pour une exigence précise.

### Contrat de langage

| Terme          | Traduction                                                                    |
| -------------- | ----------------------------------------------------------------------------- |
| PWA            | site installable qui peut couvrir certains usages d'une app                   |
| natif          | deux applications adaptées séparément à iOS et Android                        |
| cross-platform | une base de code partagée, avec tests et adaptations propres à chaque système |
| backend/API    | serveur, données et échanges avec les autres logiciels                        |
| hors-ligne     | travail possible sans réseau, avec règles de synchronisation                  |
| TCO            | construction plus exploitation, maintenance, temps interne et sortie          |
| payback        | délai nécessaire pour récupérer le coût grâce à une valeur mesurée            |

Les premiers mots doivent viser « votre idée pour vos clients ou vos équipes »,
qualifier 20–50 k€ comme estimation Hagnéré, citer les facteurs qui basculent
le prix et promettre un calcul 12/36/60 ainsi qu'un cas de renoncement.

## 2. Couverture actuelle

La page observée traite :

1. budgets selon le projet ;
2. besoin réel d'une app ;
3. fonctions qui changent le prix ;
4. technologie mobile ;
5. devis fictif ligne par ligne ;
6. comptes Apple et Google ;
7. coûts après lancement ;
8. calendrier ;
9. intérêt économique ;
10. contrat et propriété.

### Forces

- Réponse rapide : 20–50 k€ pour une première version et 35–80 k€ pour une
  app métier, clairement nommées estimations Hagnéré.
- La question « faut-il une app ? » arrive avant le choix technique.
- Exemple terrain d'un technicien, photos, hors-ligne et outil interne.
- Comparaison qualitative PWA, multiplateforme et natif.
- Exemple fictif de devis totalisant correctement 38 000 €.
- Frais Apple/Google et coûts récurrents ne sont pas oubliés.
- Comptes, code, données et accès doivent appartenir à l'entreprise.
- Santé, finance, mineurs et géolocalisation déclenchent une prudence
  spécialisée.
- CTA placé après la valeur et mauvais fit évoqué.

### Manques

- Les fourchettes n'ont ni effort, ni équipe, ni appareils, ni niveau de QA.
- Aucune option n'est comparée sur le même processus et le même horizon.
- Maintenance, hébergement, services et support sont nommés mais non totalisés.
- Le devis 38 k€ ne comporte pas bénéficiaire, exploitation ou retour.
- Aucun calcul de payback ni contrôle inverse.
- Règles Apple/Google trop résumées : type de compte, vérification, tests,
  commissions, soumission.
- Contrat sans recette, sauvegarde restaurée, export ni test de transfert.
- Aucun worksheet autonome avant contact.
- Un lien CNIL présent dans la page était rapporté 404 au 24 juillet 2026.

## 3. Frontières éditoriales

| Page                                            | Intention                                          | Frontière                                                              |
| ----------------------------------------------- | -------------------------------------------------- | ---------------------------------------------------------------------- |
| `/guides/cahier-des-charges-application-mobile` | décrire exigences et obtenir des devis             | ici, chiffrer le périmètre et tester sa valeur                         |
| `/guides/combien-coute-un-saas`                 | coût d'un produit récurrent avec vente/acquisition | ici, expérience mobile, stores, appareils et usage                     |
| `/guides/no-code-ou-sur-mesure`                 | voie de réalisation                                | ici, comparaison financière du même cas mobile                         |
| `/services/application-mobile`                  | service commercial                                 | le guide doit pouvoir conseiller PWA, outil ou report                  |
| guides outil métier/ROI                         | automatisation interne et gains                    | ici, intégrer seulement le calcul nécessaire et mailler vers le détail |

**Justification :** le lecteur cherche un budget et une décision mobile,
incluant stores, parc d'appareils et exploitation.

P1 doit contrôler les variantes « prix app iOS Android », « tarif application
métier », « coût maintenance app », « PWA ou application » et « rentabilité
application mobile ».

## 4. Benchmark historique

L'audit rapporte une recherche le 24 juillet 2026 sur France, États-Unis,
Royaume-Uni, Australie et DACH.

| Ressource                         | Apport historique                            | Limite                               |
| --------------------------------- | -------------------------------------------- | ------------------------------------ |
| Agence App Mobile/Drylead, France | paliers, maintenance et natif/cross-platform | agence ; pourcentages non universels |
| La Fabrique du Net, France        | budgets et forfait/régie                     | agrégateur commercial                |
| Bolder Apps, US                   | coûts cachés et verticales                   | dollars/position commerciale         |
| Seven Solvers, UK                 | type, délai et plateforme                    | marché UK                            |
| Code Heroes, Australie            | discovery, support, propriété                | studio                               |
| IntegrIT, DACH                    | pilote, business app, plateforme             | méthode commerciale                  |
| Digital Delight, Suisse           | inclusions/exclusions et mauvais fit         | prix d'appel suisse                  |

Saturation rapportée : les catégories de prix convergent ; le gain est un
périmètre identique, un TCO, une méthode et un cas qui mène à ne rien
construire. Les prix concurrents ne sont pas des faits de marché français.

P1 doit rouvrir les pages, consigner date, extrait, devise, biais et vérifier
qu'aucun nouvel angle décisionnel n'est ignoré.

## 5. Sources primaires, faits et fraîcheur

| Sujet                             | Source                                                                                                                                                                                                | État historique au 24/07/2026                        | Correction                                                      |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | --------------------------------------------------------------- |
| Apple Developer Program 99 USD/an | `https://developer.apple.com/support/compare-memberships/`                                                                                                                                            | confirmé par audit ; devise/type de compte variables | ajouter entité légale, D-U-N-S, taxes et date                   |
| Google Play 25 USD une fois       | [conditions d'accès EEE](https://support.google.com/googleplay/android-developer/answer/14659200?hl=en) et [distribution](https://support.google.com/android-developer-console/answer/16640817?hl=en) | confirmé mais incomplet                              | distinguer compte organisation/personnel, vérification et tests |
| commissions/frais stores          | [Google Play frais](https://support.google.com/googleplay/android-developer/answer/16954621?hl=en) et [Apple App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)         | règles évolutives, nouveau cadre rapporté en 2026    | dater, séparer compte, commission, paiement et travail          |
| recommandations CNIL mobile       | URL actuelle rapportée : `https://www.cnil.fr/fr/applications-mobiles-les-recommandations-de-la-cnil`                                                                                                 | fond confirmé                                        | remplacer l'URL 404 codée dans la page                          |
| 20–50 k€ / 35–80 k€               | aucune source primaire de marché                                                                                                                                                                      | estimation interne                                   | détailler effort, inclusions, HT/TTC, date                      |
| 2–4 mois / 4–8 mois               | estimation interne                                                                                                                                                                                    | plausible mais non démontrée                         | calendrier, dépendances et marge                                |

### Contradictions et risques

- L'URL CNIL visible
  `https://www.cnil.fr/fr/applications-mobiles-la-cnil-publie-ses-recommandations`
  était rapportée 404 ; la correction doit être testée, pas seulement copiée.
- Les estimations sont répétées dans hero, lead, FAQ et tableau sans jamais
  devenir un périmètre.
- Les frais de compte stores peuvent sembler représenter « le coût des
  stores », alors que commissions, tests, conformité, captures et soumission
  sont distincts.
- Une base partagée ne garantit aucun pourcentage d'économie.
- Le temps libéré n'est pas une économie de trésorerie sans réaffectation ou
  coût évité.

## 6. Gain d'information

| Question                              | Page actuelle           | Manque                            | Réponse supérieure                               |
| ------------------------------------- | ----------------------- | --------------------------------- | ------------------------------------------------ |
| Quel budget initial ?                 | 20–50/35–80 k€          | méthode                           | trois scopes avec rôles, jours, devices, QA      |
| Quelle solution pour le même besoin ? | comparaison qualitative | TCO/exit                          | PWA, no-code, cross-platform, natif sur même cas |
| Quel coût après lancement ?           | postes                  | aucun montant                     | TCO 12/36/60                                     |
| L'app se rembourse-t-elle ?           | questions               | formule et cas négatif            | gain net, payback, contrôle inverse              |
| Que coûtent les stores ?              | frais de compte         | vérifications/travail/commissions | encadré daté fixe/variable/à confirmer           |
| Comment sortir ?                      | comptes et droits       | test                              | export, sauvegarde restaurée, dépôt, transfert   |

## 7. Cas commun et calculs historiques

### Périmètre commun

Vingt techniciens, iOS/Android, comptes et rôles, photos, formulaires hors
ligne, synchronisation et gestion d'un conflit, 10 000 rapports/an,
administration, export CSV, sauvegardes, tests appareils, publication, support
N1 et remise du dépôt.

### TCO illustratif

| Option              |  Initial | Exploitation/an |  12 mois |   36 mois |   60 mois |
| ------------------- | -------: | --------------: | -------: | --------: | --------: |
| PWA/web installable | 18 000 € |         7 000 € | 25 000 € |  39 000 € |  53 000 € |
| no-code mobile      | 14 000 € |        10 000 € | 24 000 € |  44 000 € |  64 000 € |
| cross-platform      | 38 000 € |        12 000 € | 50 000 € |  74 000 € |  98 000 € |
| deux bases natives  | 60 000 € |        16 000 € | 76 000 € | 108 000 € | 140 000 € |

```text
TCO(H) = coût initial + exploitation annuelle × H
```

Cette formule simplifiée exclut TVA, acquisition, temps de décision,
financement, frais variables et migration. Tous doivent apparaître comme
exclus/inconnus, jamais zéro.

### Sensibilité économique

Hypothèses historiques : 220 jours/an, 35 €/h, coût d'erreurs évité
3 000 €/an, exploitation 12 000 €/an.

| Cas                          | Gain temps | Valeur temps | Gain total |     Gain net | Payback sur 38 k€ |
| ---------------------------- | ---------: | -----------: | ---------: | -----------: | ----------------: |
| 5 pers. × 1 usage × 8 min    |    146,7 h |      5 133 € |    8 133 € | **−3 867 €** |             aucun |
| 10 pers. × 2 usages × 8 min  |    586,7 h |     20 533 € |   23 533 € |     11 533 € |           3,3 ans |
| 20 pers. × 2 usages × 10 min |  1 466,7 h |     51 333 € |   59 333 € |     47 333 € |            0,8 an |

Le cas simple est le cas de renoncement. Le central ne couvre pas
nécessairement le TCO 36 mois. Le cas exigeant suppose usage réel,
réaffectation du temps et erreurs mesurées.

### Contrôle inverse

```text
TCO 36 cross-platform = 38 000 + 3 × 12 000 = 74 000 €
Gain annuel minimal = 74 000 / 3 = 24 666,67 €
Heures à 35 €/h = 704,76 h/an
Heures équipe par jour = 704,76 / 220 = 3,20 h
Pour 10 personnes = 19,2 min/personne/jour
```

Ce seuil n'est pas une preuve de rentabilité ; c'est la mesure à obtenir avant
de décider.

## 8. Position professionnelle

```text
Position fréquente : ne pas commencer par une app publique ; mesurer le
processus et tester une PWA ou un pilote.
Cross-platform gagne : usage répété, fonctions téléphone, offline et données
justifient l'installation et le TCO.
Natif gagne : exigences réellement spécifiques à l'OS, performance, capteurs,
accessibilité ou distribution.
PWA gagne : consultation/formulaire et fonctions appareil légères.
No-code gagne : périmètre stable, volumes et dépendance acceptables.
Signal de révision : usage, conflits offline, parc, API, coût ou valeur passe
sous/au-dessus du seuil.
Ce que nous déconseillons : deux apps natives avant validation de tâche et
rétention ; présence stores comme seul objectif.
Conflit d'intérêts : Hagnéré Code développe des apps ; le guide doit laisser
gagner PWA, no-code et report.
```

## 9. Ressource, conversion et voix

### Worksheet public

- périmètre commun ;
- utilisateurs, fréquence, minutes et valeur ;
- fonctions téléphone/offline/API ;
- quatre options ;
- initial, exploitation, support, stores, appareils, services et sortie ;
- TCO 12/36/60 ;
- gain brut/net et payback ;
- contrôle inverse ;
- hypothèses réaffectables ou non ;
- décision de report.

Le résultat doit être accessible sans e-mail. Les formules et le téléchargement
doivent être testés.

### CTA

Promesse possible : une restitution des hypothèses manquantes, du périmètre de
pilote et des postes à faire chiffrer. Ne pas promettre prix, date de store,
rentabilité ou conformité complète.

### Empreinte humaine

À conserver :

- le technicien et son rapport ;
- le « non » possible ;
- l'exemple fictif ;
- les comptes au nom de l'entreprise ;
- la distinction usage occasionnel/répété.

À corriger :

- ne pas répéter les fourchettes ;
- remplacer « une application continue de coûter » par un budget concret ;
- éviter les tables longues avant le verdict ;
- traduire PWA/API/TCO dans le flux ;
- suivre le technicien du problème au pilote puis à la mesure.

P4 doit demander à un dirigeant quelle option il choisit dans les trois cas,
quel chiffre lui ferait renoncer et ce que comprend le CTA.

## 10. Registre des défauts hérités

### P0

Aucun P0 démontré dans l'audit. Le lien cassé est P1 car une URL actuelle a été
identifiée ; une règle store fausse ou un calcul décisif erroné serait P0.

### P1

1. **P1-01** — corriger et tester le lien CNIL.
2. **P1-02** — rendre les fourchettes reproductibles.
3. **P1-03** — comparaison à périmètre égal.
4. **P1-04** — TCO 12/36/60.
5. **P1-05** — sensibilité et payback.
6. **P1-06** — comptes/stores complets.
7. **P1-07** — coûts cachés chiffrés.
8. **P1-08** — exemple métier mesuré.
9. **P1-09** — benchmark dans la méthode, sans prix importé.
10. **P1-10** — fraîcheur/dateModified après vraie correction.

### P2

- actif TCO autonome ;
- synthèse avant tables et QA mobile ;
- CTA avec résultat immédiat.

## 11. Ordre de correction

1. Rejouer sources, stores, CNIL et benchmark.
2. Figer le cas mobile commun.
3. Recalculer TCO, sensibilité et seuil inverse indépendamment.
4. Corriger lien et dates.
5. Réécrire autour du technicien et des décisions.
6. Créer/tester le worksheet.
7. Faire P3 indépendante : mêmes scopes, calculs, règles stores et lien.
8. P4 : lecteur dirigeant, anti-jargon, tables 320–1600 px, liens, OG,
   JSON-LD, build et route.
9. Séparer déploiement, exploration, indexation et conversion.

**Porte de sortie :** aucune référence « prix application mobile » tant que la
fourchette n'est pas reliée à des inclusions, que le cas négatif n'est pas
visible et que TCO/payback n'ont pas été recalculés puis contre-audités.
