# Google Ads pour un SaaS B2B — revalidation P3 factuelle

Date : 24 juillet 2026  
Périmètre : page, image sociale, calculateur, moteur de calcul, tests, kit
statique, ZIP et dossier de recherche.  
Verdict : **GO éditorial local sous réserves de publication**  
Défauts : **P0 = 0 · P1 = 0 · P2 = 2**

Ce contrôle indépendant porte sur l’exactitude, la cohérence des décisions et
la valeur pédagogique du snapshot local. Il ne promet ni rentabilité
publicitaire, ni volume de clients, ni classement dans Google.

## 1. Fermeture des quinze P1 du giga-audit

| Groupe de P1            | Défaut initial                                                                    | Correction revalidée                                                                                                                                    | Verdict |
| ----------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Cible et décision       | ICP, comité d’achat et conditions d’un test insuffisants                          | Le guide nomme l’entreprise cible, les personnes impliquées, les prérequis et quatre décisions distinctes : réparer, tester, élargir ou arrêter         | fermé   |
| Parcours commercial     | Le suivi s’arrêtait trop tôt                                                      | La chaîne va de la requête au prospect accepté, à l’opportunité, au contrat, à l’activation et à la présence à M12                                      | fermé   |
| Campagnes               | Les formats et leurs missions n’étaient pas comparés                              | Search non-marque, marque, AI Max dans Search, Performance Max, Demand Gen, vidéo et remarketing sont bornés par leur question décisionnelle            | fermé   |
| Ciblage                 | Géographie, langue, requêtes et exclusions étaient trop génériques                | Le lecteur dispose d’une taxonomie de requêtes, d’exclusions, de séparations marque/non-marque et de contrôles pays/langue                              | fermé   |
| Page d’arrivée          | Le lien entre annonce, promesse et qualification manquait                         | La page décrit une landing page par intention, ses preuves, ses exclusions, son formulaire et son passage au commercial                                 | fermé   |
| Mesure                  | Ads, site, CRM et produit n’étaient pas reliés                                    | Les identifiants, événements, statuts, diagnostics, fenêtres d’import et responsabilités sont suivis jusqu’au résultat commercial                       | fermé   |
| Données et consentement | Les limites techniques et juridiques étaient trop larges                          | Le texte sépare consentement, CMP, Consent Mode, données first-party hachées, catégories sensibles et protections des mineurs                           | fermé   |
| Attribution             | Un crédit publicitaire pouvait être confondu avec une vente causée                | Ads, CRM et test d’incrémentalité répondent à trois questions différentes ; la marque, le multi-touch et les autres canaux sont explicités              | fermé   |
| Économie                | Le CPL ne suffisait pas à décider                                                 | Coût média, coût complet, CAC signé, CAC activé, CAC M12, marge et payback sont calculés sur le cas fictif AtelierFlow                                  | fermé   |
| Cycle long              | La maturité d’une cohorte et les ventes tardives étaient sous-traitées            | Chaque compte porte sa date d’activation ; M12 vaut douze mois après celle-ci et une cohorte n’est mûre qu’après la dernière activation plus douze mois | fermé   |
| Sensibilités            | Le verdict ne montrait pas où il change                                           | CPC, taux de page et passage SQL→opportunité sont recalculés ; les espérances fractionnaires sont expliquées                                            | fermé   |
| Fraude et capacité      | Spam, doublons et saturation commerciale manquaient                               | Motifs de refus, déduplication, protection du formulaire, délai de rappel, no-show et capacité de démonstration sont intégrés                           | fermé   |
| Alternatives            | SEO, LinkedIn, Meta et non-investissement n’étaient pas comparés au même résultat | Les canaux sont comparés selon la demande captée, le délai, l’effort, la mesure et le résultat commercial utile                                         | fermé   |
| Stop/go                 | Les portes de décision restaient trop qualitatives                                | Le calculateur distingue prévision, cohorte en cours, cohorte mûre réussie et cohorte mûre sans vente ; une donnée inconnue ne devient jamais zéro      | fermé   |
| Réversibilité           | La sortie d’agence ou d’outil n’était pas opérationnelle                          | Propriété des comptes, accès, tags, campagnes, historique, leads, exports et reprise du suivi figurent dans le guide et le kit                          | fermé   |

## 2. Sources primaires rouvertes

| Sujet                 | Source officielle                                                                                                                                                                   | Fait retenu                                                                                  | Limite conservée                                                                |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| AI Max                | [Google Ads — AI Max for Search](https://support.google.com/google-ads/answer/15910187?hl=en)                                                                                       | AI Max est un ensemble de fonctions dans les campagnes Search                                | pas un nouveau type de campagne ni une garantie de résultat                     |
| Display et Demand Gen | [Google Ads — évolution des campagnes Display](https://support.google.com/google-ads/answer/17051545?hl=en)                                                                         | Google fait évoluer les campagnes Display éligibles vers Demand Gen                          | disponibilité et calendrier à revalider selon le compte                         |
| Import hors ligne     | [Google Ads — import des conversions hors connexion](https://support.google.com/google-ads/answer/15081888?hl=en)                                                                   | certaines méthodes ont des délais d’import et des conditions d’éligibilité                   | le CRM conserve les ventes trop tardives même si elles ne sont plus importables |
| Données client        | [Google Ads — règles relatives aux données client](https://support.google.com/google-ads/answer/7475709?hl=en)                                                                      | les usages couverts imposent des restrictions, notamment pour certaines catégories sensibles | le guide ne déduit aucune autorisation juridique d’un hachage                   |
| Mineurs               | [Google Ads — protections des enfants](https://support.google.com/adspolicy/answer/14170968?hl=en) et [des adolescents](https://support.google.com/adspolicy/answer/12205906?hl=en) | des restrictions de personnalisation et de ciblage existent                                  | leur application dépend du pays, de l’âge et du produit                         |
| Consent Mode          | [Google Tag Platform — vue d’ensemble](https://developers.google.com/tag-platform/security/concepts/consent-mode?hl=fr)                                                             | il adapte le comportement des balises à partir du choix transmis                             | il ne recueille pas le choix et ne remplace ni CMP ni preuve                    |
| Incrémentalité        | [Google Ads — Conversion Lift](https://support.google.com/google-ads/answer/12003020?hl=en)                                                                                         | une expérience peut aider à estimer des conversions causales                                 | éligibilité, volume et protocole doivent être vérifiés                          |
| Traceurs              | [CNIL — cookies et autres traceurs](https://www.cnil.fr/fr/cookies-et-autres-traceurs/que-dit-la-loi)                                                                               | le dépôt ou la lecture de certains traceurs exige un consentement préalable                  | aucun paramétrage réel n’est validé par l’article                               |

Les noms d’interface et les règles produit sont datés du 24 juillet 2026. Le
guide les présente comme des faits à revalider, jamais comme une méthode
immuable.

## 3. Recalcul indépendant du cas AtelierFlow

AtelierFlow est une entreprise fictive. Les chiffres servent à expliquer une
méthode ; ils ne constituent pas un benchmark de marché.

```text
Média : 12 000 €
Autres coûts : 4 500 + 2 000 + 1 500 + 1 000 + 3 000 = 12 000 €
Coût complet : 24 000 €

12 000 / 6 € par clic = 2 000 clics
2 000 × 4 % = 80 prospects
80 × 40 % = 32 prospects dans l’ICP
32 × 50 % = 16 SQL
16 × 50 % = 8 opportunités
8 × 50 % = 4 contrats
4 × 75 % = 3 comptes activés
3 × 66,67 % ≈ 2 comptes présents à M12

CPL média : 12 000 / 80 = 150 €
CPL complet : 24 000 / 80 = 300 €
Coût par SQL : 24 000 / 16 = 1 500 €
Coût par opportunité : 24 000 / 8 = 3 000 €
CAC signé : 24 000 / 4 = 6 000 €
CAC activé : 24 000 / 3 = 8 000 €
CAC M12 : 24 000 / 2 = 12 000 €

Marge contributive mensuelle supposée :
1 500 - 600 = 900 €
Payback depuis activation : 8 000 / 900 = 8,89 mois
Payback depuis la dépense avec trois mois de vente et un mois d’activation :
8,89 + 3 + 1 = 12,89 mois
```

Les trois sensibilités publiées ont été refaites :

- page à 3 % : 60 prospects, 2,25 activations attendues, CAC activé
  10 666,67 €, payback 11,85 mois ;
- SQL vers opportunité à 25 % : quatre opportunités, 1,5 activation attendue,
  CAC activé 16 000 €, payback 17,78 mois ;
- CPC à 7,50 € : 1 600 clics, 64 prospects, 2,4 activations attendues, CAC
  activé 10 000 €, payback 11,11 mois.

Le TCO fictif distinct retient 8 000 € de mise en place et 88 000 € par an :
96 000 € à 12 mois, 272 000 € à 36 mois et 448 000 € à 60 mois. Ces horizons
sont cumulatifs et ne s’additionnent pas.

## 4. Décisions du calculateur

Le contre-audit a trouvé puis fait corriger quatre contradictions :

1. le scénario d’exemple n’obtient plus un feu vert automatique alors que ses
   prérequis sont laissés inconnus ;
2. une prévision peut seulement conduire à un pilote limité, jamais à une
   décision d’élargissement ;
3. une cohorte en cours accepte M12 comme non observable sans fabriquer un
   échec ;
4. une cohorte mûre sans vente produit un arrêt explicite avec ratios
   incalculables, pas des zéros artificiels ou une valeur infinie.

Les états de seuil sont `atteint`, `non atteint` ou `non observable`. Les
sensibilités éclairent la décision mais ne remplacent pas les prérequis de
mesure, d’offre et de capacité.

## 5. Kit et vérifications locales

- onze fichiers source, dont neuf CSV et deux Markdown ;
- archive ZIP exacte, sans dossier ou fichier parasite ;
- CSV rectangulaires, UTF-8 et sans cellule d’exemple commençant par un
  opérateur de formule ;
- identifiants documentés pour landing page, scénario, étape, action, économie,
  inconnue, ratio et sensibilité ;
- M12 ancré à la date d’activation dans le modèle et l’exemple ;
- revenus et coûts variables explicites dans l’exemple ;
- contrôle des délais, de l’éligibilité et des erreurs d’import ;
- export du calculateur réalisé localement, sans envoi réseau ni stockage
  navigateur.

Vérifications exécutées sur le snapshot corrigé :

```text
Vitest ciblé : 83 tests réussis.
TypeScript --noEmit : réussi.
ESLint ciblé : réussi.
Route locale : HTTP 200.
Image sociale : HTTP 200, image PNG 1200 × 630.
Onze ressources du kit : HTTP 200.
Mesure du rendu : 8 508 mots, 43 minutes à 200 mots/minute.
```

## 6. Réserves P2

Deux preuves restent à produire :

1. BAT visuel et clavier dans un navigateur réel sur le snapshot exact,
   notamment à 320, 390, 768, 1024 et 1440 px, en clair et sombre ;
2. test externe par un dirigeant de SaaS B2B qui n’a pas participé à la
   rédaction.

La production, le sitemap public, l’indexation et la position Google ne sont
pas déduits des contrôles locaux.
