# Dossier de recherche — SEO d'un SaaS B2B

> Les quatre passes sont terminées. Les affirmations SEO, la relation au
> pipeline commercial et la plume ont été contre-auditées puis contrôlées dans
> le rendu de production. La publication est déléguée, sans test humain réel.

## Journal des quatre passes

Propriétaire éditorial unique : `/root`

| Passe                        | État                               | Date            | Responsable                 | Snapshot                                         | Blocages |
| ---------------------------- | ---------------------------------- | --------------- | --------------------------- | ------------------------------------------------ | -------- |
| 1. Recherche                 | Terminée — porte validée           | 23 juillet 2026 | `/root/audit_service_gaps`  | `docs/research/manifests/seo-saas-b2b-p1.sha256` | Aucun    |
| 2. Rédaction et intégration  | Terminée — prête pour contre-audit | 23 juillet 2026 | `/root/p2_batch3_marketing` | `docs/research/manifests/seo-saas-b2b-p2.sha256` | Aucun    |
| 3. Contre-audit indépendant  | Terminée — porte validée           | 23 juillet 2026 | `/root/p2_batch3_apps`      | `docs/research/manifests/seo-saas-b2b-p3.sha256` | Aucun    |
| 4. Plume humaine et contrôle | Terminée — porte validée           | 23 juillet 2026 | `/root`                     | `docs/research/manifests/seo-saas-b2b-p4.sha256` | Aucun    |

## 1. Fiche d'identité

```text
Slug : seo-saas-b2b
Statut actuel : publiable — validation éditoriale déléguée
Requête principale : SEO SaaS B2B
Moment du parcours : décider s'il faut financer et comment tester un contenu relié aux ventes
Lecteur précis : dirigeant ou responsable marketing d'un SaaS B2B qui publie déjà ou envisage de publier, mais veut obtenir des demandes de démonstration qualifiées
Situation déclenchante : trente articles présentent des fonctionnalités et attirent quelques visiteurs, mais presque aucun acheteur correspondant au produit ne demande une démonstration
Décision principale après lecture : arrêter tant que l'offre ou l'acheteur est flou, réparer d'abord le parcours et la mesure, ou financer un pilote limité de trois pages issues des conversations commerciales
Niveau de connaissance au départ : connaît mots-clés et trafic organique, mais relie mal question du prospect, preuve produit, qualification commerciale et vente
5 questions indispensables : qui achète ? quelle question précède une démo ? quelles preuves peut-on publier ? quelle page aide réellement une décision ? comment suivre de l'impression jusqu'à la vente ?
3 objections ou craintes : « Il faut publier quatre articles par mois » ; « Google pénalise tout contenu aidé par l'IA » ; « Plus de trafic donnera forcément plus de démos »
Action utile sans contact commercial : reprendre dix appels ou courriels commerciaux et copier les questions, objections, alternatives et preuves demandées avec les mots exacts du prospect
CTA possible : cadrer trois pages reliées aux conversations de vente
Hors périmètre : promesse de classement, calendrier garanti, volume de recherche inventé, automatisation massive de pages, stratégie de marque complète
Date de la recherche : 23 juillet 2026
Responsable de la synthèse : /root/audit_service_gaps
```

## 2. Contrat de langage humain

- Phrase réelle : « Nous publions depuis des mois, mais les visiteurs ne
  demandent pas de démonstration. Faut-il continuer, changer les sujets ou
  arrêter le SEO ? »
- Réponse attendue : ne financez pas davantage de pages tant que l'acheteur, le
  problème achetable, les preuves et la mesure sont flous ; sinon, testez trois
  pages de rôles différents et décidez à partir d'une chaîne complète, pas du
  trafic seul.
- Définition simple : le SEO d'un SaaS B2B consiste à répondre aux questions
  que les entreprises se posent avant d'acheter, puis à leur permettre de
  vérifier si le produit correspond à leur situation.
- Mots ordinaires : problème, équipe, coût, solution, alternative, intégration,
  sécurité, cas d'usage, démonstration, essai, déploiement, preuve.
- Jargon à traduire : ICP, funnel, TOFU/MOFU/BOFU, topic cluster, topical
  authority, E-E-A-T, programmatic SEO, MQL, attribution.
- Ouverture : partir des trente articles sans démo et répondre avant toute
  méthode.

## 3. Cannibalisation

| Page existante                               | Intention                                | Différence                                                   | Maillage                                   |
| -------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------ | ------------------------------------------ |
| `/guides/seo-ou-google-ads`                  | Choisir un canal et un horizon           | Construire un pilote SEO propre au cycle de vente SaaS B2B   | Lier si le canal n'est pas encore choisi   |
| `/guides/combien-de-temps-resultats-seo`     | Savoir quoi attendre et quand réexaminer | Décider quelles pages créer et comment les relier aux ventes | Ne pas réinventer un délai                 |
| `/guides/pourquoi-site-pas-visible-google`   | Diagnostiquer indexation et visibilité   | Traiter l'utilité commerciale d'un contenu déjà visible      | Lier si aucune page n'apparaît             |
| `/guides/valider-idee-saas-avant-developper` | Confirmer le problème avant construction | Transformer les conversations validées en pages de décision  | Le SaaS non validé doit revenir à ce guide |

**Verdict :** guide distinct, centré sur le passage de la question commerciale
à la demande qualifiée.

## 4. Fiche de preuves

| Affirmation utilisable                                                                                                                                                         | Source primaire                                                                                                                                             | Limite                                                                                    | Conséquence lecteur                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Google recommande de créer du contenu utile d'abord aux personnes ; le SEO est pertinent lorsqu'il sert ce contenu et aide les moteurs à le découvrir                          | [Google Search Central — Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) | Aucun score ni classement garanti                                                         | Partir d'une décision de l'acheteur, pas d'une fréquence de publication       |
| Google recommande de ne pas créer une page pour chaque variation de requête et rappelle qu'un grand nombre de pages ne rend pas automatiquement un site plus pertinent         | [Google Search Central — AI features and your website](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)                        | Principes généraux, pas recette spéciale pour les réponses IA                             | Trois pages distinctes valent mieux que dix variantes du même texte           |
| La politique sur l'abus de contenu à grande échelle vise de nombreuses pages créées principalement pour manipuler le classement avec peu de valeur, quelle que soit la méthode | [Google Search Essentials — Spam policies](https://developers.google.com/search/docs/essentials/spam-policies)                                              | L'usage d'IA n'est pas interdit en soi                                                    | Évaluer l'utilité et la vérification, pas le seul outil d'écriture            |
| Google précise que l'IA générative peut aider à rechercher et structurer, mais que la génération massive sans valeur ajoutée peut relever du contenu abusif                    | [Google Search Central — Generative AI content](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content)                                | Aucun détecteur universel ni interdiction générale                                        | Maintenir recherche, expertise, relecture et responsabilité éditoriale        |
| Une organisation logique, des URL descriptives et des titres uniques, clairs et fidèles aident les utilisateurs et les moteurs                                                 | [Google Search Central — SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)                                       | Aucun modèle ne garantit le rang ou l'extrait                                             | Nommer chaque page selon la question réellement résolue                       |
| Toute page importante devrait recevoir au moins un lien interne ; les ancres doivent être descriptives, concises et pertinentes                                                | [Google Search Central — Make your links crawlable](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)                            | Éviter la sur-optimisation mécanique                                                      | Relier problème, preuve, cas d'usage et démonstration dans un parcours humain |
| Search Console rapporte notamment clics, impressions, CTR et position moyenne, dont l'interprétation demande prudence                                                          | [Google Search Console — Performance report metrics](https://support.google.com/webmasters/answer/7042828)                                                  | Données incomplètes ; position moyenne complexe ; ni trafic complet ni chiffre d'affaires | Observer les tendances requête-page puis rapprocher les demandes du CRM       |
| GA4 recommande des événements distincts tels que `generate_lead`, `qualify_lead` et `close_convert_lead`                                                                       | [Google Analytics — Recommended events](https://developers.google.com/analytics/devguides/collection/ga4/reference/events)                                  | Instrumentation et attribution restent à vérifier ; consentement applicable               | Séparer demande, qualification et vente au lieu d'une conversion unique       |

### Affirmations interdites

- nombre d'articles par mois présenté comme norme ;
- délai ou position garanti ;
- trafic organique assimilé au chiffre d'affaires ;
- temps passé ou navigation interne présentés comme facteurs directs de
  classement ;
- E-E-A-T présenté comme un score ;
- toute assistance par IA déclarée interdite ;
- autorité thématique garantie ;
- page créée pour chaque variation de mot-clé ;
- position moyenne traitée comme vérité absolue ;
- volume ou difficulté sans source de données réelle.

## 5. Test de préparation

Avant le pilote, le dirigeant doit pouvoir nommer :

1. l'entreprise et le rôle qui achètent ;
2. le problème suffisamment important pour être financé ;
3. les situations où le produit n'est pas adapté ;
4. les preuves publiables : démonstration, méthode, intégration, sécurité,
   exemple explicitement fictif ou cas autorisé ;
5. les questions exactes entendues en vente ;
6. le chemin vers une demande puis sa qualification ;
7. la personne qui vérifie et maintient chaque page.

S'il manque les quatre premiers éléments, le guide doit conclure que publier
plus n'est probablement pas la prochaine action.

## 6. Le pilote de trois pages

Les pages ne sont pas trois variantes d'un même mot-clé :

- **comprendre le problème** : aider le lecteur à reconnaître sa situation et à
  estimer le coût de l'inaction ;
- **évaluer les options** : comparer loyalement produit, processus manuel,
  logiciel standard ou autre solution ;
- **se rassurer et agir** : répondre aux conditions de déploiement, données,
  sécurité, intégrations, migration ou accompagnement qui bloquent la démo.

Chaque page doit annoncer pour qui elle est utile, donner sa réponse tôt,
montrer une méthode ou une preuve, traiter une objection loyale, exposer ses
limites et proposer une prochaine action proportionnée.

## 7. Exemple pédagogique prévu

**Exemple illustratif fictif :** « Novaria » vend un SaaS de suivi des
interventions. Son blog compte trente pages sur les fonctions du tableau de
bord. Les dix derniers échanges commerciaux montrent pourtant trois questions
récurrentes : remplacer les bons papier, travailler hors connexion et relier
les données à l'ERP.

Novaria choisit donc :

- une page sur le coût et les erreurs du papier ;
- une comparaison entre application standard et parcours propre au terrain ;
- une page de preuve sur hors-ligne, synchronisation et reprise d'erreur.

Le guide n'affirmera aucun résultat de trafic ou de vente. Il montrera seulement
comment définir les événements et la décision à quatre-vingt-dix jours.

## 8. Plan annoté

| Section                                | Question                                 | Format                                            | Décision                                    |
| -------------------------------------- | ---------------------------------------- | ------------------------------------------------- | ------------------------------------------- |
| Trente articles, presque aucune démo   | Quel est le vrai problème ?              | Scène                                             | Suspendre la production automatique         |
| Vérifiez si le SEO est prêt            | Avez-vous acheteur, problème et preuve ? | Sept questions                                    | Arrêter, réparer ou piloter                 |
| Rejouez dix conversations              | Où trouver les sujets ?                  | Fiche appels/courriels                            | Copier le langage du prospect               |
| Rangez les questions selon la décision | Quel rôle joue chaque page ?             | Quatre étapes humaines                            | Éviter le catalogue                         |
| Choisissez trois pages différentes     | Que tester ?                             | Pilote                                            | Refuser les variantes                       |
| Écrivez une page qui aide vraiment     | Quelle recette ?                         | Lecteur, réponse, méthode, preuve, limite, action | Produire une page vérifiable                |
| Reliez preuve et démonstration         | Comment guider sans pousser ?            | Maillage contextuel                               | Une prochaine action logique                |
| Mesurez cinq étapes séparées           | Comment juger le pilote ?                | Impressions, clics, demande, qualification, vente | Rapprocher Search Console, analytics et CRM |
| Décidez à quatre-vingt-dix jours       | Continuer, réécrire ou arrêter ?         | Revue avec limites                                | Aucun verdict sur une position isolée       |
| Bon fit, mauvais fit et FAQ            | Quand demander de l'aide ?               | Encadrés                                          | Conversion honnête                          |

## 9. Action autonome et conversion

Fiche copiable : interlocuteur, phrase exacte, problème, conséquence, solution
comparée, preuve demandée, réponse courte, objection, limite, prochaine action,
propriétaire et date de mise à jour.

Bon fit : acheteur et problème clairs, conversations documentées, expertise et
preuves publiables, capacité de mise à jour et statuts CRM.

Mauvais fit : offre non validée, aucun langage client, besoin de ventes
immédiates garanties, personne capable de vérifier le fond, démonstration ou
mesure cassée.

CTA : « Cadrer trois pages SEO reliées à mes ventes » vers
`/demarrer-un-projet`, après l'exercice autonome.

## 10. Rapport P1

```text
PASSE 1 TERMINÉE
Slug : seo-saas-b2b
Lecteur et phrase réelle : dirigeant SaaS — « Nous publions, mais les visiteurs ne demandent pas de démo. »
Décision : arrêter si le produit n'est pas prêt, réparer le parcours, ou tester trois pages de décision
Angle et forme dominante : dix conversations commerciales transformées en trois rôles de page
Pages proches et différence : les guides existants choisissent le canal, le délai ou diagnostiquent la visibilité ; celui-ci relie contenu et vente SaaS
Sources décisives : documentation officielle Google Search, Search Console et Analytics
Incertitudes exclues : volume, fréquence, position, trafic assimilé au revenu, interdiction générale de l'IA et score E-E-A-T
Action autonome et CTA possible : fiche issue des appels ; cadrer trois pages reliées aux ventes
Plan : scène, préparation, conversations, décision, pilote, page, maillage, mesure, revue, fits, FAQ
Snapshot : docs/research/manifests/seo-saas-b2b-p1.sha256
```

## 11. Revue de porte P1

- [x] lecteur, situation et décision définis ;
- [x] SEO distingué de la validation produit et de la vente ;
- [x] sources Google officielles actuelles ;
- [x] trois rôles de page réellement différents ;
- [x] mesure jusqu'à la qualification et à la vente ;
- [x] exemple fictif annoncé ;
- [x] possibilité d'arrêter ou réparer avant de publier ;
- [x] action autonome prévue ;
- [x] aucune cadence ou performance inventée ;
- [x] P2, P3 et P4 terminées ; publication déléguée et contrôlée.

## 12. Rapport P2 — rédaction et intégration

```text
PASSE 2 TERMINÉE — PRÊTE POUR CONTRE-AUDIT INDÉPENDANT
Éditeur unique : /root/p2_batch3_marketing
Ouverture : trente articles et presque aucune démonstration ; la réponse demande d'arrêter le quota avant de produire davantage
Forme propre : dix conversations commerciales, quatre rôles dans la décision et un pilote de trois pages réellement différentes
Exemple : Novaria est annoncé comme fictif ; aucun trafic, classement ou revenu n'est revendiqué
Action autonome : fiche de conversation avec phrase exacte, problème, option comparée, élément concret, objection, limite et prochaine action
Bon et mauvais fit : acheteur, problème et mesure identifiables d'un côté ; offre floue, vente immédiate garantie ou parcours cassé de l'autre
Sources visibles : Google Search Central, Search Console et Analytics, avec limites sur IA, contenu massif, position moyenne et attribution
Conversion : un seul CTA tardif vers /demarrer-un-projet ; téléphone et CTA de barre latérale désactivés
SEO technique : métadonnées du registre en statut ready-for-human-review ; canonical, Article et BreadcrumbList ; image sociale dédiée 1 200 × 630
Contrôles P2 : formatage ciblé, ESLint ciblé et TypeScript conformes selon le rapport de l'éditeur
État : index/follow autorisé après validation P3, P4 et délégation explicite
Snapshot : docs/research/manifests/seo-saas-b2b-p2.sha256
```

## 13. Rapport P3 — contre-audit indépendant

```text
PASSE 3 TERMINÉE
Relecteur indépendant : /root/p2_batch3_apps
Affirmations et sources revérifiées : contenu utile Google, absence de garantie d’indexation, Search Console, événements GA4 et limites d’attribution
Calculs refaits : aucun benchmark ni rendement annoncé ; le pilote fictif de trois pages et la revue à 90 jours restent propres à l’exemple
P0 trouvés / corrigés : 0 / 0
P1 trouvés / corrigés : 0 / 0
Suggestions rejetées et pourquoi : aucun quota mensuel, délai de classement ou promesse de démonstration ajouté
Corrections pédagogiques et commerciales : dossier formaté, rôles de pages maintenus distincts et décision d’arrêter conservée lorsque l’offre ou la mesure n’est pas prête
Revalidation du relecteur : P0/P1/P2 = 0/0/0 sur le contenu courant
Contrôles intermédiaires : Prettier, ESLint, TypeScript, tests ciblés, liens, CTA, schémas et OG conformes
Snapshot : docs/research/manifests/seo-saas-b2b-p3.sha256
```

## 14. Rapport P4 — plume, rendu et gel

```text
PASSE 4 TERMINÉE
Passages humanisés : le guide repart des conversations de vente et de trois pages utiles, avec une réponse nette au dirigeant qui publie sans obtenir de démonstrations
Coupe ou resserrement : plan numéroté répétitif et blocs de fit clonés retirés ; trafic, qualification et vente restent distingués au fil du texte
Retour P3 effectué : oui — règles Google sur le contenu utile et le spam, mesure Search Console/CRM et limites de causalité ont été revérifiées ; relecture finale P0/P1/P2 = 0/0/0
Scorecard justifiée : 19/20 — Intention 2, Décision 2, Pédagogie 2, Profondeur 2, Preuve 2, Comparaison 2, Originalité 2, Style 1, Conversion 2, SEO/produit 2
Validation humaine réelle : non
Test réalisé par une personne réelle : non
Autorisation éditoriale : délégation explicite du commanditaire
Décision de publication : autorisée explicitement par le commanditaire
Commandes et résultats : check:seo 215/215 ; ESLint 32 fichiers ; TypeScript conforme ; npm test 440/440 ; build et postbuild de production conformes ; diff-check conforme
Largeurs et états contrôlés : 320, 390, 768, 1 024 et 1 440 px ; clair et sombre ; parcours, tableaux, CTA, FAQ et footer sans débordement
Route, OG et console : route 200, H1 unique, canonical et robots conformes ; OG 200 en PNG 1 200 × 630 ; aucun overlay ni erreur navigateur
Snapshot final : docs/research/manifests/seo-saas-b2b-p4.sha256
Statut maximal : Publiable
Verdict : publiable en index/follow ; aucune promesse de classement, de délai ni d’indexation
```
