# Audit approfondi — `pourquoi-google-ads-ne-convertit-pas`

Date : 24 juillet 2026

Auditeur concurrentiel : Codex, lot benchmark international

Snapshot du guide : `src/app/guides/pourquoi-google-ads-ne-convertit-pas/page.tsx`, SHA-256 `36141c442e1b1c7f695d7b7660a85fe25135f99fb3669643af6b5b092c8bd6b1`

Périmètre : audit éditorial et décisionnel uniquement. Aucune modification de la page publique, du registre des guides, des manifestes ou de la documentation partagée n’a été réalisée dans ce lot.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant qui paie des clics, voit zéro ou plusieurs « conversions », mais ne retrouve pas assez de clients ni de marge.
Question réelle : où le résultat disparaît-il entre Google, le site, le téléphone, le commercial et la vente ?
Décision attendue : corriger le premier écart prouvé, puis augmenter, maintenir, réduire ou arrêter la dépense.
Réponse actuelle en une phrase : rapprochez action comptée, contact reçu, qualification, vente et marge avant de toucher simultanément au budget, aux annonces et à la page.
Défaut qui coûte le plus de valeur : la meilleure formule du guide — le coût complet d'acquisition — n'est jamais appliquée à un exemple chiffré.
Niveau actuel : A-
Priorité : haute
Statut : audité / à enrichir sur les calculs, le délai, les faux signaux et l'actualité 2026
```

Le guide est déjà supérieur à la majorité des articles français et anglophones observés. Il commence avec les quatre situations réellement vécues par un dirigeant, définit une conversion comme l’action que le compte a été réglé pour compter, puis suit le résultat jusqu’à la marge. Il traite aussi les dates, les appels, les recherches visibles, la qualification, le suivi commercial, les actions principales/secondaires, le Consent Mode et la différence entre hachage et anonymisation. La conclusion peut honnêtement être « n’augmentez pas le budget » ou « ne prenez pas de gestion mensuelle ».

Il lui manque toutefois cinq éléments pour devenir une référence incontestable :

1. un exemple complet du coût par conversion Google, contact reçu, prospect qualifié et vente ;
2. un cas montrant comment un faux signal donne un CPA dix fois trop flatteur ;
3. une lecture du délai de conversion avant de juger les jours récents ;
4. un TCO à 12 mois comparant poursuite, réparation de la mesure et correction complète ;
5. l’actualité produit de 2026 : migration des imports hors ligne vers la Data Manager API, rapport de crédits d’activité invalide et conversions améliorées unifiées.

La position professionnelle à assumer est la suivante :

> Nous refusons d’augmenter un budget tant qu’une « conversion » ne peut pas être rapprochée d’un contact réellement reçu. Nous refusons aussi d’accuser la campagne lorsque les prospects sérieux attendent une réponse, reçoivent une offre différente ou ne peuvent créer de marge. Google Ads mérite plus de budget seulement lorsque la chaîne mesurée est fiable, l’économie acceptable et le test réversible.

### Score avant correction

| Axe         | Note /10 | Preuve localisable                                                                 | Manque décisif                                                                                |
| ----------- | -------: | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Intention   |       10 | Facture, clics, silence commercial et quatre situations dès l’ouverture            | Aucun                                                                                         |
| Décision    |        9 | Premier écart prouvé, correction unique et possibilité d’arrêter                   | Pas de seuil économique ou de TCO pour décider                                                |
| Pédagogie   |        9 | Conversion, CRM, terme de recherche, ROAS, hachage et Consent Mode traduits        | Délai de conversion, attribution et activité invalide à traduire                              |
| Profondeur  |        8 | Mesure, réception, trafic, page, qualification, vente, coûts, test et limites      | Incertitude, cohorte, import hors ligne 2026, marginalité et attribution à compléter          |
| Preuve      |        9 | Nombreuses sources Google Ads, Google Tag Platform et CNIL près des affirmations   | Une mise à jour produit 2026 et une source activité invalide manquent                         |
| Comparaison |        7 | Quatre symptômes et corrections différentes                                        | Aucun TCO, scénario chiffré, sensibilité ou alternative « pause »                             |
| Originalité |        9 | Chaîne action comptée → marge et arrêt au premier inconnu                          | Pas encore de feuille de calcul ou de rapprochement téléchargeable                            |
| Style       |        9 | Ton humain, non accusatoire, sans jargon ni seuil universel                        | Une phrase est répétée mot pour mot dans la section contacts hors cible                       |
| Conversion  |        9 | Valeur autonome forte, mauvais cas avant CTA, promesse limitée au point de rupture | Le lecteur ne repart pas avec un coût pleinement calculé                                      |
| SEO/produit |        9 | Intention distincte, FAQ, sources, maillage, Article/Breadcrumb et sujets connexes | Champ lexical à renforcer sur délai, activité invalide, import hors ligne, attribution et TCO |

Total : **88/100**

Le guide est publiable et déjà très bon. Le nouveau seuil de 90/100 n’est pas atteint parce que comparaison et profondeur économique restent trop faibles.

## 2. Ce que le guide dit réellement

- **Réponse dans les 150 premiers mots :** excellente. Quatre symptômes sont séparés avant toute correction.
- **Progression :** décrire le manque, réunir les chiffres, traiter zéro conversion, fausse conversion, hors cible, absence de vente, tester puis demander un audit ciblé.
- **Verdict :** corriger le premier écart prouvé et ne modifier qu’un élément principal à la fois.
- **Exemples présents :** demande réelle, formulaire test, appel, termes de recherche, page mobile, qualification, suivi et vente.
- **Calcul présent :** une formule correcte de contribution, mais aucun nombre.
- **Comparaison présente :** zéro mesuré/demandes réelles, conversion sans contact, contact hors cible, prospect sans vente.
- **Sources :** Google Ads, Google Tag Platform et CNIL ; source officielle placée au niveau du point traité.
- **Action autonome :** relevé copiable de la dépense à la marge et fiche de test réversible.
- **CTA :** particulièrement honnête ; il ne demande aucun mot de passe et ne promet pas de prospects.
- **Élément faussement complet :** le relevé peut être rempli sans que le dirigeant sache interpréter un CPA qui passe de 60 € par conversion à 900 € par vente réellement chargée.

La structure actuelle doit rester. L’enrichissement consiste à insérer des preuves économiques aux endroits où le lecteur doit décider.

## 3. Benchmark France et international

Requêtes, marchés et date :

- France : « pourquoi Google Ads ne convertit pas », « Google Ads clics sans clients », « conversions Google Ads sans leads » ;
- États-Unis : « Google Ads not converting », « PPC metrics lying B2B », « qualified leads offline conversions » ;
- Royaume-Uni : « Google Ads wasted spend no revenue », « PPC agency tracking qualified leads » ;
- Australie : « Google Ads not converting Australian business » ;
- recherche effectuée le 24 juillet 2026 ; les résultats observés ne constituent pas un classement stable.

### Saturation

Le marché est très saturé sur sept causes : suivi cassé, mauvais mots-clés, page faible, ciblage trop large, enchère/budget, offre et manque de temps. Ajouter une huitième liste ne créerait pas de supériorité.

Le gain d’information se trouve dans :

- le rapprochement des mêmes personnes, pas seulement des totaux ;
- les étapes reçue, qualifiée, gagnée et marge ;
- le délai de conversion et la période encore immature ;
- le coût complet par étape ;
- la qualité du signal envoyé aux enchères ;
- l’import CRM actuel et sa continuité technique en 2026 ;
- l’activité invalide ajustée après facturation ;
- l’incertitude d’un petit échantillon ;
- le coût marginal lorsque le budget augmente ;
- un TCO et un nombre de ventes nécessaires pour justifier chaque correction.

| Ressource et URL directe                                                                                                          | Marché                  | Réponse utile                                                             | Preuve, outil ou exemple                               | Limite                                                                                | Apport à adapter                                                                    |
| --------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [WEBBBY — campagnes qui ne convertissent pas](https://www.webbby.fr/blog/pourquoi-mes-campagnes-google-ads-ne-convertissent-pas/) | France / agence         | Sept causes, ouverture très proche du problème vécu                       | Symptôme puis correctif, article de juin 2026          | Réduit vite le problème à suivi, mots-clés ou page ; peu de ventes et de marge        | Garder la chaîne complète Hagnéré Code et ajouter les chiffres                      |
| [Karène Dupont — Google Ads ne marche pas](https://karenedupont.fr/pourquoi-google-ads-ne-marche-pas/)                            | France / consultante    | Cinq problèmes fréquents et ton accessible                                | Lecture rapide pour un dirigeant                       | Diagnostic commercial, sans rapprochement complet                                     | Préserver la simplicité sans perdre l’économie                                      |
| [WordStream — dix raisons](https://www.wordstream.com/blog/ws/2023/02/21/google-ads-not-converting)                               | États-Unis / média      | Suivi, attentes, saison, budget, enchères, pages et temps d’apprentissage | Liste très lisible et benchmarks                       | Article ancien ; benchmarks volatils et non adaptés au résultat réel de chaque compte | Refuser le taux moyen comme verdict, montrer la sensibilité propre                  |
| [WordStream — étude de 15 000 comptes](https://www.wordstream.com/blog/google-ads-account-study)                                  | États-Unis / média      | Données récentes sur comptes sans conversion                              | Échantillon annoncé de plus de 15 000 comptes          | Données et sélection du fournisseur ; conversion ne signifie toujours pas vente       | Utiliser pour comprendre la saturation, pas comme taux attendu                      |
| [Search Engine Land — métriques B2B trompeuses](https://searchengineland.com/b2b-ppc-metrics-incremental-value-478925)            | États-Unis / média      | Montre le quadruple comptage d’une même personne et le coût marginal      | Exemple très actuel, mai 2026                          | Opinion d’experte, pas documentation produit                                          | Ajouter déduplication par personne/affaire et coût marginal                         |
| [PUSH Group — choisir une agence Google Ads UK](https://www.pushgroup.co.uk/blog/google-ads-agency-uk)                            | Royaume-Uni / agence    | Refuse les rapports limités aux clics et relie revenu, marge et qualité   | Checklist de gouvernance et d’agence                   | Contenu vendeur                                                                       | Renforcer propriété des comptes, responsabilité et résultat métier                  |
| [Karma Media — douze corrections](https://www.karmamedia.com.au/blog/why-your-google-ads-are-not-converting)                      | Australie / agence      | Commence par le suivi et relie recherche, annonce, page et offre          | Exemples locaux récents                                | CPC australiens et généralités non transposables                                      | Garder l’exemple concret, supprimer les prix universels                             |
| [Google Ads — délai de conversion](https://support.google.com/google-ads/answer/9347141?hl=fr)                                    | International / éditeur | Explique pourquoi CPA récent peut sembler trop haut et ROAS trop bas      | Rapport de délai et prévisions                         | Prévision du produit, pas vérité comptable                                            | Ajouter lecture par jours de conversion et période mature                           |
| [Google Ads — activité invalide](https://support.google.com/google-ads/answer/16826168?hl=fr)                                     | International / éditeur | Rapport de crédits, coûts et clics ajustés pour Search et Performance Max | Colonnes ajustées et crédits après facturation         | Détection propriétaire ; ne qualifie pas les mauvais prospects légitimes              | Ajouter une branche fraude/activité invalide sans en faire l’explication par défaut |
| [Google Ads — conversions améliorées pour les prospects](https://support.google.com/google-ads/answer/11347292?hl=fr)             | International / éditeur | Migration des imports vers Data Manager API depuis le 15 juin 2026        | Alerte technique et objectifs qualified/converted lead | Implémentation produit volatile, données et conformité à traiter séparément           | Ajouter une alerte de continuité aux entreprises utilisant l’import API             |

### Lecture concurrentielle

Les articles commerciaux séduisent avec des listes courtes, des moyennes de conversion et des CPC par secteur. Leur faiblesse commune est de traiter une « conversion » hétérogène comme une unité comparable. Hagnéré Code peut devenir la référence en montrant qu’un formulaire, un contact livré, une affaire qualifiée et une vente ne doivent jamais partager le même nom ni le même coût.

## 4. Matrice de gain d’information

| Question décisive                       | Réponse française dominante             | Apport international                                            | Couverture actuelle | Manque                                       | Réponse supérieure à produire                                                                      |
| --------------------------------------- | --------------------------------------- | --------------------------------------------------------------- | ------------------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Google compte-t-il la bonne chose ?     | Vérifier la balise                      | Objectifs, actions primaires, déduplication et signal d’enchère | Très bonne          | Même personne comptée plusieurs fois         | Tableau action → personne/affaire → étape → valeur → rôle dans les enchères                        |
| Le contact arrive-t-il vraiment ?       | Tester le formulaire                    | Backend, appels, CRM et état de livraison                       | Très bonne          | Taux de livraison et raison d’échec chiffrés | Test horodaté puis rapprochement de 100 actions illustratives                                      |
| Le CPA affiché est-il le vrai coût ?    | Coût / conversion Google                | Coût par étape, coût marginal et coût complet                   | Faible              | Aucun exemple numérique                      | CPA compté, reçu, qualifié, vendu et pleinement chargé                                             |
| Faut-il attendre l’algorithme ?         | Oui quelques semaines                   | Délai de conversion distinct de l’apprentissage                 | Partielle           | Rapport « jours avant conversion »           | Réparer immédiatement le cassé ; juger une période mature selon le délai observé                   |
| Les recherches sont-elles pertinentes ? | Ajouter des mots négatifs               | Intentions proches, rapport partiel et qualité CRM              | Très bonne          | Coût des catégories utile/ambiguë/hors cible | Dépense, contacts, qualification et motif par catégorie                                            |
| La page est-elle responsable ?          | Toujours ou jamais selon le vendeur     | Message match, expérience et expérience contrôlée               | Bonne               | Cas chiffré et séparation des changements    | Même recherche, annonce, page, action ; une modification et condition de retour                    |
| Les contacts sont-ils sérieux ?         | Ajouter des champs                      | Import CRM, qualified/converted lead et automatisation          | Bonne               | Continuité API 2026 et fraîcheur de retour   | Définition stable, propriétaire, délai, taux de remontée et contrôle d’échec                       |
| Les ventes sont-elles rentables ?       | ROAS ou chiffre d’affaires              | Marge, coûts complets, incrémentalité et coût marginal          | Bonne formule       | Aucune application                           | Contribution par cohorte, TCO 12 mois et ventes supplémentaires nécessaires                        |
| Les clics sont-ils frauduleux ?         | Installer un anti-fraude                | Rapport officiel de trafic et crédits ajustés                   | FAQ seulement       | Source et ordre de vérification              | Lire invalid clicks/credits, demander enquête si nécessaire, sans confondre mauvais lead et fraude |
| Que change le consentement ?            | Le tracking est « cassé »               | Observé, modélisé, haché, base/avancé et biais de couverture    | Bonne prudence      | Taux de couverture et contrôle par source    | Documenter ce qui est observé, modélisé ou absent ; ne pas reconstituer artificiellement le total  |
| Quelle option financer ?                | Plus de budget ou nouvelle landing page | Tests, coût marginal et réallocation                            | Faible              | TCO et seuil de ventes                       | Continuer, réparer mesure, corriger le parcours ou arrêter, même horizon et même marge             |

## 5. Faits, fraîcheur et contradictions

Sources primaires revérifiées le 24 juillet 2026.

| Affirmation du guide                                                                                                       | Verdict                     | Source primaire actuelle                                                                                                                            | Périmètre et fraîcheur                                       | Correction ou enrichissement                                                            |
| -------------------------------------------------------------------------------------------------------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| Une conversion est l’action choisie par l’annonceur, pas automatiquement un client                                         | Confirmé                    | [Google Ads — définition](https://support.google.com/google-ads/answer/6308?hl=fr)                                                                  | Définition produit actuelle                                  | Conserver et appliquer à un exemple chiffré                                             |
| Les actions principales alimentent les conversions et peuvent guider les enchères ; les secondaires observent généralement | Confirmé avec exception     | [Google Ads — principales/secondaires](https://support.google.com/google-ads/answer/10993988?hl=fr)                                                 | Les objectifs personnalisés créent des exceptions            | Conserver la nuance                                                                     |
| La correspondance exacte peut couvrir le même sens ou la même intention                                                    | Confirmé                    | [Google Ads — options de correspondance](https://support.google.com/google-ads/answer/7478529?hl=fr)                                                | Règles susceptibles d’évoluer                                | Conserver, puis mesurer la dépense par catégorie de recherche                           |
| Les colonnes habituelles rattachent la conversion à la date du clic                                                        | Confirmé                    | [Google Ads — date de conversion](https://support.google.com/google-ads/answer/6270625?hl=fr)                                                       | D’autres colonnes et outils utilisent d’autres dates         | Ajouter le rapport de délai et une période mature                                       |
| Le ROAS ne retire pas automatiquement la production, la gestion, les outils ou le temps interne                            | Confirmé                    | [Google Ads — ROI](https://support.google.com/google-ads/answer/14090?hl=fr) et [ROAS](https://support.google.com/google-ads/answer/13405059?hl=fr) | Dépend de la valeur transmise                                | Ajouter coût complet et contribution chiffrée                                           |
| Une conversion modélisée n’est pas directement observée                                                                    | Confirmé                    | [Google Tag Platform — Consent Mode](https://developers.google.com/tag-platform/security/concepts/consent-mode?hl=fr)                               | Modélisation et configurations évoluent                      | Conserver observé/modélisé/absent dans le relevé                                        |
| Le hachage ne rend pas automatiquement une donnée anonyme                                                                  | Confirmé                    | [CNIL — identifier les données personnelles](https://www.cnil.fr/fr/identifier-les-donnees-personnelles)                                            | Qualification juridique selon le contexte                    | Conserver la réserve                                                                    |
| Les imports hors ligne nécessitent une vigilance technique nouvelle en 2026                                                | Confirmé et absent du guide | [Google Ads — Enhanced conversions for leads](https://support.google.com/google-ads/answer/11347292?hl=fr)                                          | Migration vers Data Manager API annoncée au 15 juin 2026     | Ajouter uniquement pour les entreprises utilisant API/import, avec date de revalidation |
| Les crédits d’activité invalide peuvent être rapprochés des campagnes                                                      | Confirmé et absent du guide | [Google Ads — Invalid Activity Credit Report](https://support.google.com/google-ads/answer/16826168?hl=fr)                                          | Search et Performance Max ; crédits parfois après clôture    | Ajouter branche ciblée, jamais présumer que tout mauvais contact est frauduleux         |
| Le délai de conversion peut gonfler le CPA et diminuer le ROAS des périodes récentes                                       | Confirmé et à renforcer     | [Google Ads — conversion lag](https://support.google.com/google-ads/answer/9347141?hl=fr)                                                           | Prévisions et rapports disponibles selon le type de campagne | Ajouter un exemple jour 3/jour 30                                                       |

### Contradictions ou tensions

- Aucune erreur factuelle majeure n’a été trouvée dans le fond.
- Une répétition éditoriale est présente dans la section « contacts hors cible » : « recherche payée, la promesse faite et la définition d’une demande » apparaît deux fois de suite. Elle doit être supprimée en P0 éditorial.
- La formule de contribution est correcte, mais son absence d’exemple laisse le lecteur sans ordre de grandeur ni test de cohérence.
- Le guide dit de prendre une période compatible avec le cycle de vente, sans montrer le rapport « jours avant conversion » ni le nombre de résultats encore attendus.
- La page cite les conversions améliorées sans signaler les changements d’implémentation d’avril/juin 2026 ; l’affirmation actuelle reste juste, mais un lecteur qui met en œuvre peut suivre un ancien chemin.
- « Une correction à la fois » est une bonne règle d’inférence, mais une erreur manifeste de mesure ou de destination doit être corrigée immédiatement, ce que le guide dit déjà.

### Faits à retirer plutôt qu’à ajouter

- Ne pas ajouter de taux de conversion moyen comme objectif universel.
- Ne pas recommander un nombre fixe de conversions ou une durée fixe d’apprentissage pour tous les comptes.
- Ne pas présenter une conversion Google comme vente incrémentale.
- Ne pas attribuer tout mauvais contact à la fraude ou à Performance Max.
- Ne pas qualifier le hachage d’anonymisation ni Consent Mode de solution de conformité.
- Ne pas convertir un CPA observé à l’étranger en budget minimum français.

## 6. Cinq scénarios et calculs à construire

Tous les montants sont **illustratifs, hors taxes et non issus d’un client**. Les définitions et les données de l’entreprise doivent les remplacer.

### Scénario 1 — Le même budget produit cinq coûts différents

Période mature :

- 6 000 € de média ;
- 100 conversions affichées ;
- 82 contacts réellement reçus ;
- 45 prospects qualifiés ;
- 9 ventes ;
- 1 200 € de marge contributive par vente ;
- 1 200 € de gestion, 400 € de page/outils et 10 h internes à 50 €.

| Étape                                | Volume | Coût média par étape |
| ------------------------------------ | -----: | -------------------: |
| Conversion affichée                  |    100 |              60,00 € |
| Contact reçu                         |     82 |              73,17 € |
| Prospect qualifié                    |     45 |             133,33 € |
| Vente                                |      9 |             666,67 € |
| Vente, coût complet de l’acquisition |      9 |             900,00 € |

```text
Coût complet = 6 000 + 1 200 + 400 + 10 × 50 = 8 100 €
Marge = 9 × 1 200 = 10 800 €
Contribution estimée = 10 800 - 8 100 = 2 700 €
Passage conversion → contact reçu = 82 %
Contact reçu → qualifié = 45 / 82 = 54,88 %
Qualifié → vente = 20 %
Conversion affichée → vente = 9 %
```

Le guide doit faire apparaître les cinq coûts. Dire « CPA 60 € » sans nommer l’action est techniquement vrai et économiquement trompeur.

### Scénario 2 — Un faux signal rend le CPA dix fois trop beau

Hypothèses :

- 6 000 € dépensés ;
- 300 clics sur le bouton « Envoyer » comptés comme conversions ;
- 30 formulaires réellement livrés ;
- 18 prospects qualifiés ;
- 4 ventes.

| Définition utilisée | Volume | Coût média |
| ------------------- | -----: | ---------: |
| Clic bouton compté  |    300 |    20,00 € |
| Formulaire livré    |     30 |   200,00 € |
| Prospect qualifié   |     18 |   333,33 € |
| Vente               |      4 | 1 500,00 € |

```text
Actions comptées mais non livrées = 300 - 30 = 270
Part non livrée = 270 / 300 = 90 %
Écart de CPA = 200 / 20 = facteur 10
```

Le chiffre de 90 % ne décrit aucun compte réel. Il montre pourquoi il faut tester le parcours et définir la conversion avant d’optimiser les enchères.

### Scénario 3 — Le délai change le verdict sur les jours récents

Une campagne a dépensé 3 000 € sur une cohorte de clics :

| Moment de lecture | Ventes enregistrées | CPA apparent |
| ----------------- | ------------------: | -----------: |
| Jour 3            |                   5 |     600,00 € |
| Jour 30           |                  12 |     250,00 € |

```text
Ventes arrivées après le jour 3 = 12 - 5 = 7
Part retardée = 7 / 12 = 58,33 %
```

Le jour 3 n’est pas « faux » : il est immature. Le guide doit comparer la période au délai observé, tout en réparant immédiatement un formulaire ou une destination cassés. Aucun délai universel ne doit être déduit de cet exemple.

### Scénario 4 — TCO sur 12 mois des trois trajectoires

Périmètre commun : même offre, même budget média annuel et même marge par vente.

| Poste 12 mois                | Continuer sans correction | Réparer la mesure | Corriger tout le parcours |
| ---------------------------- | ------------------------: | ----------------: | ------------------------: |
| Média                        |                  72 000 € |          72 000 € |                  72 000 € |
| Gestion                      |                  14 400 € |          14 400 € |                  14 400 € |
| Temps interne                |                   6 000 € |           6 000 € |                   8 000 € |
| Audit / réparation de mesure |                       0 € |           4 000 € |                   4 000 € |
| Page / offre                 |                       0 € |               0 € |                  12 000 € |
| CRM / retour des issues      |                       0 € |               0 € |                   3 000 € |
| **TCO 12 mois**              |              **92 400 €** |      **96 400 €** |             **113 400 €** |

Avec 1 200 € de marge contributive par vente :

```text
Ventes additionnelles nécessaires pour payer la mesure = 4 000 / 1 200 = 3,33
Surcoût du parcours complet = 113 400 - 92 400 = 21 000 €
Ventes additionnelles nécessaires = 21 000 / 1 200 = 17,5
```

En pratique, il faut quatre ventes entières supplémentaires pour couvrir la mesure et dix-huit pour couvrir le parcours complet, avant impôts et aléas. Si la correction ne peut plausiblement produire ou préserver ce niveau de valeur, l’entreprise doit réduire le périmètre ou arrêter.

### Scénario 5 — Le CPL maximal dépend du taux de vente

Hypothèses :

- marge contributive par vente : 1 200 € ;
- l’entreprise accepte d’en consacrer 30 % à l’acquisition complète ;
- traitement, outils et temps interne : 20 € par prospect qualifié.

| Taux qualifié → vente | Marge attendue par qualifié | CPL complet maximal | CPL média maximal |
| --------------------: | --------------------------: | ------------------: | ----------------: |
|                  10 % |                       120 € |                36 € |              16 € |
|                  20 % |                       240 € |                72 € |              52 € |
|                  30 % |                       360 € |               108 € |              88 € |

Formule centrale :

```text
Valeur attendue d'un qualifié = 1 200 × 20 % = 240 €
Budget d'acquisition complet = 240 × 30 % = 72 €
Budget média = 72 - 20 = 52 €
```

Le pourcentage de 30 % est une décision d’entreprise, pas une norme. Le tableau montre pourquoi une amélioration commerciale peut changer le budget média acceptable sans modifier le CPC.

### Variables de sensibilité obligatoires

| Variable              | Cas prudent        | Cas central       | Cas favorable           | Source attendue                |
| --------------------- | ------------------ | ----------------- | ----------------------- | ------------------------------ |
| Contact reçu / compté | faible             | 82 %              | proche de 100 %         | Test + CRM/téléphone           |
| Qualification         | 30 %               | 54,88 %           | 70 %                    | Motif stable dans le CRM       |
| Taux de vente         | 10 %               | 20 %              | 30 %                    | Cohorte mature                 |
| Marge par vente       | quantile bas       | moyenne prudente  | quantile haut           | Comptabilité analytique        |
| Délai                 | 3 jours            | 30 jours          | cycle complet           | Rapport jours avant conversion |
| Couverture de mesure  | observé uniquement | observé + importé | observé/modélisé séparé | Google, CRM et CMP             |

```text
Formule : contribution = marge des ventes rapprochées - média - gestion - outils/page affectés - temps interne.
Horizon : 12 mois pour le TCO, cohorte mature pour les taux.
Inclus : mêmes ventes et même définition de marge.
Exclus : valeur de marque, ventes non rapprochées, taxes et incrémentalité non prouvée.
Variable qui fait basculer : taux de vente, marge, qualité de livraison et délai.
Contrôle inverse : calculer le cas où la campagne est saine et où le vrai problème est la réponse commerciale.
```

## 7. Comparaison et position professionnelle

```text
Options réellement comparables : continuer et mesurer ; réparer la mesure ; corriger recherche/page/qualification ; corriger le suivi commercial ; réduire ou arrêter.
Périmètre commun : période mature, mêmes actions, mêmes personnes/affaires, marge et coûts complets.
Horizon commun : 12 mois pour le budget, cohortes matures pour la performance.
Option la moins chère si les demandes existent mais ne sont pas mesurées : réparer la mesure avant de reconstruire la campagne.
Option la moins chère si les prospects sont sérieux mais perdus : corriger le traitement commercial.
Option la plus rationnelle si la marge ne finance pas l'acquisition : réduire ou arrêter, même si le compte affiche des conversions.
Position Hagnéré Code : le signal d'enchère doit représenter le résultat le plus proche de la valeur que l'entreprise peut renseigner assez vite et assez régulièrement.
Cas où augmenter le budget gagne : chaîne fiable, cohorte rentable, capacité commerciale disponible et coût marginal encore acceptable.
Signal de révision : nouvelle action principale, baisse de livraison, nouveau cycle de vente, consentement, migration API, changement d'offre, saison ou coût marginal.
Ce que nous déconseillons même si nous pourrions le vendre : gestion mensuelle sur mesure cassée, refonte de landing page sans recherche pertinente, ou budget accru pour nourrir un mauvais signal.
```

L’opinion doit rester conditionnelle mais pas timide : un compte publicitaire ne peut ni réceptionner un formulaire, ni rappeler un prospect, ni créer une marge qui n’existe pas.

## 8. Objections et cas limites

| Objection loyale                                               | Réponse prouvée                                                                            | Incertitude restante                          | Conséquence                                                                        |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | --------------------------------------------- | ---------------------------------------------------------------------------------- |
| « Il faut plus de budget pour que l’algorithme apprenne »      | Le budget ne répare ni mauvaise action comptée, ni formulaire cassé, ni marge insuffisante | Volume et stratégie d’enchère réels           | Vérifier la chaîne, puis tester le coût marginal                                   |
| « J’ai 100 conversions, la campagne fonctionne »               | Une conversion est une action configurée                                                   | Définition, livraison, qualification et vente | Nommer les cinq volumes et leurs coûts                                             |
| « Exact signifie que Google achète seulement mon mot exact »   | Google inclut des recherches de même sens ou intention                                     | Requêtes partiellement visibles               | Lire les termes visibles et rapprocher les résultats                               |
| « Tous les mauvais contacts sont des faux clics »              | Activité invalide et contact non qualifié sont deux sujets différents                      | Détection Google et motif réel                | Lire crédits/clics ajustés, puis qualifier les contacts                            |
| « Consent Mode récupère toutes les conversions perdues »       | Il transmet des états et peut permettre une modélisation, sans observer tout le réel       | Configuration et consentement                 | Séparer observé, modélisé et absent                                                |
| « Le hachage rend la donnée anonyme »                          | La CNIL distingue pseudonymisation et anonymisation                                        | Traitement et possibilité de rapprochement    | Revue données et droit au cas réel                                                 |
| « Le CPA de cette semaine est catastrophique »                 | Le délai peut rendre la période récente immature                                           | Distribution réelle du délai                  | Lire jours avant conversion et attendre une cohorte mature                         |
| « Je n’ai pas de CRM »                                         | Un tableau commun peut commencer le rapprochement                                          | Discipline, doublons et volume                | Définir prospect, motif, responsable et issue                                      |
| « Envoyer les ventes à Google suffit à prouver le ROI »        | L’import améliore le signal et l’attribution dans le produit                               | Incrémentalité et ventes multi-canales        | Calculer contribution, comparer attribution et ne pas appeler cela causalité       |
| « Une nouvelle landing page va forcément améliorer le compte » | Elle aide seulement si recherche, promesse, offre et action sont alignées                  | Qualité actuelle et autres changements        | Tester une rupture précise avec rollback                                           |
| « Quatre ventes ne suffisent pas pour décider »                | Un petit échantillon est instable                                                          | Variabilité et valeur des affaires            | Montrer les nombres bruts, éviter le taux seul et prolonger si le risque le permet |
| « Mon import hors ligne fonctionnait l’an dernier »            | Google a annoncé des migrations API en 2026                                                | Méthode d’import exacte                       | Contrôler l’état, la fraîcheur et les échecs de Data Manager                       |

## 9. Plan de réécriture

| Ordre | Section proposée                 | Question résolue                             | Preuve, scénario ou outil                                | Décision produite                       | Action éditoriale                  |
| ----: | -------------------------------- | -------------------------------------------- | -------------------------------------------------------- | --------------------------------------- | ---------------------------------- |
|     1 | Les quatre situations actuelles  | Qu’est-ce qui manque vraiment ?              | Cartes actuelles                                         | Choisir la branche                      | Conserver                          |
|     2 | Le relevé commun                 | Quels chiffres réunir ?                      | Formule actuelle                                         | S’arrêter au premier inconnu            | Conserver                          |
|     3 | Cinq coûts pour un budget        | Quel est le vrai CPA ?                       | Scénario 1                                               | Localiser la fuite                      | Créer                              |
|     4 | Faux signal                      | Google optimise-t-il la mauvaise action ?    | Scénario 2                                               | Réparer l’objectif                      | Créer                              |
|     5 | Délai et cohorte mature          | Est-il trop tôt pour juger ?                 | Scénario 3 + rapport jours avant conversion              | Attendre ou corriger immédiatement      | Créer                              |
|     6 | Recherches, annonce et page      | Qui promet quoi à qui ?                      | Sections actuelles                                       | Corriger une rupture                    | Conserver et dédupliquer la phrase |
|     7 | Qualification et retour CRM 2026 | Google reçoit-il un signal utile et actuel ? | Qualified/converted lead, Data Manager et contrôle échec | Maintenir ou corriger l’import          | Enrichir                           |
|     8 | Activité invalide                | Est-ce un problème de clics facturés ?       | Rapport de crédits ajustés                               | Lire, rapprocher ou demander enquête    | Créer en encadré ciblé             |
|     9 | Suivi commercial                 | Les bons prospects sont-ils traités ?        | Heure, responsable, prochaine action et issue            | Corriger l’organisation                 | Conserver                          |
|    10 | Contribution et CPL maximal      | La campagne peut-elle créer de la valeur ?   | Scénarios 1 et 5                                         | Définir le plafond                      | Enrichir                           |
|    11 | TCO 12 mois                      | Quelle correction financer ?                 | Scénario 4                                               | Continuer, réparer, corriger ou arrêter | Créer                              |
|    12 | Test, contrôle inverse et CTA    | Comment savoir ce qui a changé ?             | Fiche actuelle, coût marginal et condition de rollback   | Lancer une action réversible            | Renforcer                          |

### Contrat des 150 premiers mots

- Nommer la facture, les clics et l’absence de clients.
- Distinguer zéro mesuré, faux comptage, mauvais contacts et absence de ventes.
- Répondre : ne changez pas tout ; trouvez le premier endroit où le résultat disparaît.
- Promettre : cinq coûts, délai, TCO, seuil économique et test.
- Poser la limite : aucune conversion, attribution ou modélisation ne prouve à elle seule une vente incrémentale.

### À conserver

- L’ouverture et les quatre symptômes.
- Le relevé commun.
- L’arrêt au premier inconnu.
- La lecture recherche/annonce/page.
- Le suivi commercial et la marge.
- La correction unique, réversible.
- Les limites données, Consent Mode et juridique.

### À réduire ou déplacer

- Supprimer immédiatement la phrase répétée dans la section contacts hors cible.
- Regrouper les réserves produit 2026 dans un encadré daté pour préserver le rythme.
- Éviter d’ajouter des benchmarks de secteur dans le corps principal.

## 10. Contre-audit et portes de correction

### P0 — bloquants avant de revendiquer une supériorité éditoriale

- [ ] Supprimer la répétition « recherche payée, la promesse faite… ».
- [ ] Revalider les documentations Google Ads volatiles le jour de la réécriture.
- [ ] Ajouter un exemple complet de contribution et de coût par étape.
- [ ] Ajouter un TCO sur 12 mois avec hypothèses et inclusions.
- [ ] Distinguer explicitement attribution, modélisation et incrémentalité.
- [ ] Faire recalculer les cinq scénarios par un second relecteur.

### P1 — nécessaires pour viser 90/100

- [ ] Ajouter délai de conversion et période mature.
- [ ] Ajouter déduplication par personne ou affaire.
- [ ] Ajouter rapport d’activité invalide et ordre de vérification.
- [ ] Ajouter l’alerte Data Manager API datée de 2026 pour les imports concernés.
- [ ] Ajouter coût marginal et plafond de CPL qualifié.
- [ ] Donner un cas où augmenter le budget est rationnel et un cas où arrêter gagne.
- [ ] Conserver les sources primaires au niveau de chaque affirmation.

### P2 — différenciation et finition

- [ ] Créer une feuille téléchargeable de rapprochement avec cinq volumes, définitions, sources, dates et coûts.
- [ ] Ajouter un onglet cohorte/délai et un TCO 12 mois.
- [ ] Produire un diagramme simple observé / importé / modélisé / inconnu.
- [ ] Faire tester le relevé par un dirigeant sans expertise Ads et observer les termes bloquants.
- [ ] Vérifier tous les tableaux à 320, 390, 768, 1 024 et 1 440 px.

### Score après correction

Non attribué. Aucun score futur ne doit être simulé avant réécriture, revalidation Google/CNIL, recalcul indépendant, contrôle navigateur et test lecteur.

## 11. Preuve technique et visuelle à exiger après réécriture

```text
Page publique modifiée dans ce lot : non.
Hash avant et après audit attendu : identique.
Sources revérifiées : Google Ads conversions, objectifs, termes, appels, dates, ROI/ROAS, conversion lag, invalid activity, enhanced conversions/Data Manager, Consent Mode et CNIL.
Calculs indépendants : coûts par étape, faux signal, délai, TCO 12 mois et CPL maximal recalculés avec Node.js.
Liens : contrôle HTTP à rejouer après intégration ; une réponse anti-bot ne prouve pas un lien invalide.
SEO technique : canonical, robots, Article, BreadcrumbList, FAQ visible/JSON-LD, sitemap et maillage à recontrôler après modification.
Rendu : 320, 390, 768, 1 024 et 1 440 px, clair/sombre, formules, tableaux, CTA, FAQ et sources.
Confidentialité : aucun identifiant, donnée personnelle ou export client réel dans les exemples ou captures.
Accessibilité : titres, liens explicites, tableaux, ordre de lecture, focus et alternative au diagramme.
Validation lecteur humain réel : absente à ce stade.
Indexation Google : non prouvée par cet audit.
```

### Verdict final de l’audit

Le guide possède déjà la bonne idée propriétaire : Google peut compter correctement une action qui n’arrive jamais, un contact qui n’est pas qualifié ou une vente sans marge. Pour dépasser durablement les meilleurs guides américains, britanniques et australiens, il doit maintenant faire ce qu’eux font rarement ensemble : appliquer les calculs, intégrer le délai, dater les changements produit, montrer l’incertitude et conclure aussi clairement quand il faut augmenter le budget que lorsqu’il faut l’arrêter.
