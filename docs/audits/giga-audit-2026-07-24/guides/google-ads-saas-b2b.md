# Giga-audit — Google Ads pour un SaaS B2B

**Date de l’audit :** 24 juillet 2026  
**Périmètre :** page `google-ads-saas-b2b`, registre, dossier de recherche, parcours de conversion et QA déclarée.  
**Question dirigeant auditée :** « Mes demandes de démonstration viennent-elles d’entreprises susceptibles de signer, et combien puis-je investir avant de dépasser ma marge et ma capacité commerciale ? »  
**Score actuel : 78/100**  
**Sévérité :** P0 = 0 · P1 = 15 · P2 = 10  
**Verdict :** très bon cadre de décision : le texte remonte du contrat au clic, refuse de prendre le formulaire pour une vente, explique le cycle long et propose un registre avec un simple tableur. Il ne couvre toutefois pas encore toute la décision SaaS B2B : ICP et comité d’achat, funnel MQL/SQL/opportunité/pipeline, essais et activation, Search contre PMax/YouTube/Display/remarketing, marque/concurrents et négatifs, instrumentation consentement/offline/enhanced, incrémentalité, budget-volume-CPC-CVR-CPQL-CAC-payback/LTV, scénarios de maturité et comparaison SEO/LinkedIn/Meta.

## 1. Empreinte et statut de validation

| Élément                                                               | Constat vérifié                                                                          |
| --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Page                                                                  | `src/app/guides/google-ads-saas-b2b/page.tsx`                                            |
| SHA-256 page                                                          | `9c0ca93bd69731eb289cd152ba9322000d444e475f8fbd6f67d967e686bc275c`                       |
| Image OG                                                              | `src/app/guides/google-ads-saas-b2b/opengraph-image.tsx`                                 |
| SHA-256 OG                                                            | `99fd708c04af931a4a44e4f23c29644b5e712f4765fc761ebba766587cf36da8`                       |
| Registre                                                              | titre, description, canonical, dates `2026-07-24`, lecture annoncée 9 min                |
| Structured data visible                                               | helpers metadata/Article/Breadcrumb ; aucun Rich Results ou navigateur exécuté           |
| Recherche                                                             | quatre passes déclarées terminées le 24/07/2026, sources Google consultées le 23/07/2026 |
| Artefact                                                              | registre copiable dans la page ; aucun téléchargement réel                               |
| Build, tracking, CRM, consentement, responsive, production/indexation | non vérifiés dans cette mission                                                          |

Les passes P1–P4 de rédaction et les niveaux P0/P1/P2 de ce rapport sont deux nomenclatures distinctes. Le « 19/20 » du dossier de recherche est un état interne, pas une validation indépendante de la profondeur.

## 2. Forces à préserver

- La scène des trente demandes de démo pour un seul contrat est immédiatement compréhensible par un fondateur.
- Le parcours inversé contrat → proposition → prospect accepté → démo → recherche/clic est une excellente signature éditoriale.
- La différence entre marque, problème, catégorie de solution et requête scolaire évite de mélanger découverte et capture de demande.
- Les statuts « à examiner / accepté / refusé avec motif / démo tenue / proposition / signé » sont simples et réalistes.
- Le registre peut démarrer dans un tableur ; il ne prétend pas qu’un CRM résout une mauvaise discipline.
- Les formules fictives `4 500 / 30 = 150 €`, `4 500 / 12 = 375 €`, `4 500 / 1 = 4 500 €` ne promettent pas la rentabilité et mentionnent remises, support et résiliations.
- La fenêtre de conversion et la séparation entre attribution publicitaire et vérité CRM sont bien introduites.
- Les raisons de reporter et le CTA à perte maximale explicite donnent une conversion professionnelle et non anxiogène.

## 3. P1 — corrections indispensables

### P1-01 — Définir l’ICP et le comité d’achat

« Entreprise dans le segment visé » reste trop vague pour un SaaS B2B. Ajouter critères observables : taille, secteur, pays, stack, volume, problème, urgence, budget, maturité numérique, rôle demandeur, décideur économique, utilisateur, prescripteur, sécurité/achats et veto juridique. Une demande peut être un bon utilisateur mais ne jamais franchir le comité d’achat.

### P1-02 — Étendre le funnel à MQL, SQL, opportunité, pipeline et won

Le guide s’arrête à « prospect accepté », démo, proposition, contrat. Définir et compter séparément : lead brut, MQL, SQL, opportunité créée, montant de pipeline, proposition, négociation, contrat signé, activation, première valeur, renouvellement et churn. Ajouter un motif de passage ou de perte à chaque étape ; le taux de démo ne suffit pas à piloter un SaaS.

### P1-03 — Traiter démo, trial, activation et expansion

Une démonstration peut être le mauvais résultat principal si le produit se vend en essai libre. Ajouter les deux parcours : `démo → proposition → contrat` et `trial → activation → usage clé → paiement`. Mesurer activation, utilisateurs actifs, délai jusqu’à la première valeur, conversion essai-payant, expansion, remise et annulation. Relier la marge au coût de service, pas seulement au revenu d’abonnement affiché.

### P1-04 — Comparer les campagnes Search, PMax, YouTube, Display et remarketing

Le texte traite principalement Search et renvoie à un guide Search/PMax. Il manque une matrice qui explique intention, contrôle des requêtes, création nécessaire, audiences, délai, objectif, niveau de preuve, risque de cannibalisation et conversion recommandée pour PMax, YouTube, Display et remarketing. Ne jamais transférer un CAC Search brand vers une campagne de découverte vidéo.

### P1-05 — Ajouter marque, concurrents, géographie, langues et exclusions

Séparer marque, problème, catégorie, concurrent et requêtes d’emploi/formation/gratuit. Ajouter pays, langue, devise, fuseau, marchés vendus et contraintes de support. Prévoir liste de mots-clés négatifs et requêtes exclues, journal de changements, trafic existant et risque que la campagne brand récupère une demande déjà gagnée par SEO ou direct.

### P1-06 — Landing page, démo et trial doivent être auditables

La page conseille de travailler la landing mais n’impose pas un test. Ajouter : promesse et ICP au-dessus de la ligne de flottaison, preuve, intégrations, sécurité, prix ou logique de qualification, formulaire progressif, prise de rendez-vous, démo enregistrée, essai, page de confirmation et vitesse mobile. Mesurer clic → formulaire → démo tenue → activation, pas seulement le formulaire.

### P1-07 — Rendre le tracking Google/GA4/CRM opérationnel

Les importations offline sont citées, mais il manque une checklist : GCLID/GBRAID/WBRAID selon parcours, identifiant de lead, transaction/opportunity ID, campagne/ad group/search term, timestamp, devise, valeur, statut, CRM, import Data Manager/API, déduplication navigateur + serveur et journal des erreurs. Maintenir le CRM comme source commerciale ; Google reçoit le signal utile, pas l’autorité sur la vérité du contrat.

### P1-08 — Consentement et conversions améliorées pour prospects

Ajouter CMP, base et finalité, signaux Consent Mode, données first-party nécessaires, hachage, régions, droits, conservation et sous-traitants. Une donnée hachée n’est pas anonyme ; l’import doit être vérifié avec la CNIL ou le DPO. Le guide doit séparer fait Google, conseil Hagnéré Code et validation juridique.

### P1-09 — Attribution et incrémentalité

Le texte avertit que l’attribution ne vaut pas vérité commerciale mais ne donne pas de méthode. Ajouter : modèle Ads/GA4, fenêtre de conversion, first/last/data-driven, vues brand/nonbrand, multi-touch, dark social, trafic direct et vente assistée. Pour une décision forte, proposer une zone témoin, une campagne expérimentale ou un avant/après contrôlé ; sinon nommer le résultat « attribué », pas « créé par Google ».

### P1-10 — Ajouter budget, volume, CPC, CVR, CPQL, CAC, payback et LTV

Le guide a un exemple de coût par client mais pas de chaîne économique. Ajouter : `clics = budget / CPC`, `leads = clics × CVR`, `CPQL = coût complet / SQL`, `CAC = coût complet / clients`, `payback = CAC / marge mensuelle par compte`, `LTV prudente = marge mensuelle × durée observée`, avec annulations, support et coût de vente. Ne pas utiliser une LTV hypothétique pour relever artificiellement le plafond.

### P1-11 — TCO 12/36/60 et coûts de capacité

Les coûts d’agence, création, landing et suivi sont mentionnés mais pas totalisés sur plusieurs horizons. Pour un SaaS fictif : 2 000 clics/mois, CPC 6 €, 80 leads, 20 SQL, 6 opportunités, 2 contrats, cycle 90 jours, marge mensuelle prudente 450 € par compte.

| Option au même périmètre                         | Setup fictif | Run annuel fictif | TCO 12 mois | TCO 36 mois | TCO 60 mois |
| ------------------------------------------------ | -----------: | ----------------: | ----------: | ----------: | ----------: |
| Search ciblé, pilotage interne, suivi tableur    |      3 000 € |          30 000 € |    33 000 € |    93 000 € |   153 000 € |
| Agence Search + landing + CRM/offline            |     10 000 € |          48 000 € |    58 000 € |   154 000 € |   250 000 € |
| Acquisition multi-format avec créas et nurturing |     22 000 € |          78 000 € |   100 000 € |   256 000 € |   412 000 € |

Valeurs strictement fictives, hors TVA et abonnements communs. Formule `TCO(n) = setup + n × run annuel`. Ajouter coût du temps commercial, onboarding, support, remise et résiliation. Une offre peut être rentable à 60 mois mais incapable de financer son payback à six mois.

### P1-12 — Scénarios de maturité, lag et sensibilité

Trente démos et un contrat ne suffisent pas à généraliser. Montrer un petit test (10 leads, forte incertitude), une cohorte moyenne (80 leads, quelques SQL), une cohorte mature (90 jours) et une vente tardive. Faire varier CPC, CVR, taux SQL, taux closing, marge et churn ; afficher « non mature » tant que le cycle n’est pas fermé. Aucun nombre minimum universel de leads ne doit être inventé.

### P1-13 — Faux leads, fraude et capacité commerciale

Les motifs de refus existent, mais pas le spam, les concurrents, étudiants, tests, doublons formulaire + appel, coordonnées invalides, bot et demande hors zone. Ajouter une liste de motifs, déduplication, honeypot/CAPTCHA si nécessaire, appel de qualification, temps de réponse, capacité de démo, no-show, SLA de rappel et saturation. Une campagne profitable sur le papier peut perdre de l’argent si personne ne rappelle en 48 h.

### P1-14 — Comparer SEO, LinkedIn et Meta sans cannibaliser

Le guide relie SEO SaaS, mais ne compare pas les alternatives. Ajouter un tableau : Google Search capte la demande exprimée, SEO construit un actif lent, LinkedIn cible rôles/comptes mais coûte souvent cher par volume, Meta crée/diffuse une demande avec une autre attribution. Comparer CPQL/CAC/payback, effort de contenu/créas, délai et qualité ; ne pas comparer un CPL brut à un SQL.

### P1-15 — Stop/go et plan de sortie

Les quatre décisions sont bonnes, mais ajouter des portes : stop si tracking/consentement/CRM faux ; go pilote si ICP, recherche, landing, responsable et capacité sont prêts ; go palier si SQL, pipeline et marge restent sous le seuil ; arrêt si cohorte mature dépasse le CAC maximum. Prévoir export des campagnes, comptes/tags, historique, propriété des leads, retrait agence et reprise du suivi sans outil fournisseur.

## 4. P2 — améliorations secondaires

1. Ajouter une frise `clic → lead → MQL → SQL → opportunité → proposition → won → activation → renouvellement`.
2. Ajouter un glossaire ICP, MQL, SQL, opportunity, pipeline, payback, LTV, PMax, enhanced/offline conversion.
3. Ajouter un exemple PME française et un exemple vente enterprise multi-comité.
4. Ajouter les champs de registre pour rôle, taille, pays, campagne, consentement et motif de perte.
5. Ajouter une FAQ sur cycle 180 jours, attribution brand, essai gratuit et multi-touch.
6. Ajouter une cadence de revue Ads quotidienne, CRM hebdomadaire, cohorte mensuelle et marge trimestrielle.
7. Montrer une analyse par pays/langue, marque/nonbrand et requêtes négatives.
8. Vérifier les formules et la copie mobile des blocs ; un tableau ne doit pas déborder.
9. Maintenir une source brute non modifiée et une copie de calcul versionnée.
10. Ne pas afficher « 19/20 » comme badge public sans méthode indépendante.

## 5. Scénario commun chiffré à intégrer

**Exemple illustratif fictif :** 12 000 € de média sur trois mois, CPC moyen 6 €, `12 000 / 6 = 2 000 clics`, taux clic→lead 4 % = 80 leads, 25 % MQL = 20, 30 % SQL = 6, 50 % opportunités→won = 3 contrats. Coûts agence/landing/CRM/temps commercial : 6 000 €. Coût complet = 18 000 €.

- CPL brut : `12 000 / 80 = 150 €` ;
- CPQL SQL : `18 000 / 6 = 3 000 €` ;
- CAC complet : `18 000 / 3 = 6 000 €` ;
- marge mensuelle prudente par compte : 450 € ; payback sans churn : `6 000 / 450 = 13,3 mois` ;
- si la durée observée prudente est 18 mois, LTV marge = `450 × 18 = 8 100 €` ; marge avant coûts d’acquisition = `8 100 − 6 000 = 2 100 €` par compte.

Ce résultat ne prouve pas l’incrémentalité : une partie peut être brand, SEO ou recommandation. Recalculer avec ventes réellement encaissées, churn, coût support, remise et fenêtre de conversion. Si le taux SQL passe de 25 % à 15 %, le payback et le CAC changent fortement ; la sensibilité doit être visible plutôt que cachée derrière une moyenne.

## 6. Benchmark international de couverture

| Marché / page                                                                                                      | Axe plus développé                                 | À reprendre                                                   | Limite                                      |
| ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------- |
| France — [Adwords Consultant, SaaS B2B](https://adwords-consultant.com/blog/google-ads-saas-b2b)                   | ciblage et conseils de campagne                    | ajouter la méthode de requêtes, négatifs et séparation marque | prestataire, économie du contrat secondaire |
| France — [Berso Marketing, Google Ads SaaS](https://bersomarketing.com/fr/blog/google-ads-pour-saas/)              | parcours de configuration et optimisation          | garder le concret sans catalogue d’agence                     | preuves et chiffres non comparables         |
| États-Unis — [Pivotal, Google Ads for SaaS](https://www.pivotal-consulting-group.com/insights/google-ads-for-saas) | couverture anglophone des campagnes et performance | traiter PMax, remarketing et funnel long                      | marché/interface/droit différents           |
| Royaume-Uni — [Google Ads offline conversion import](https://support.google.com/google-ads/answer/2998031)         | documentation de la vente hors ligne               | convertir les prérequis en checklist CRM/consentement         | source produit, pas économie                |
| Australie — [Google Ads conversion tracking](https://support.google.com/google-ads/answer/1722022)                 | mesure des conversions et limites produit          | vérifier les événements avant le budget                       | disponibilité selon compte/pays             |
| DACH — [Motainment B2B Search budgets](https://motainment.de/blog/realistic-ad-budgets-for-b2b-search)             | distinction raw lead/MQL/SQL et attentes budget    | reprendre ce vocabulaire avec ICP et marge                    | références auto-déclarées                   |

**Conclusion benchmark :** l’angle contrat signé + cycle long est différenciant. La profondeur manquante est l’architecture commerciale SaaS : comité d’achat, activation, payback, attribution incrémentale et comparaison des canaux.

## 7. Sources primaires à revalider

- [Google Ads — importations hors connexion](https://support.google.com/google-ads/answer/2998031?hl=fr), [FAQ](https://support.google.com/google-ads/answer/10029210?hl=fr) et [conversions améliorées prospects](https://support.google.com/google-ads/answer/15713840?hl=fr) : statuts, import, Data Manager et données hachées.
- [Google Ads — fenêtres de conversion](https://support.google.com/google-ads/answer/3123169?hl=fr), [stratégies d’enchères](https://support.google.com/google-ads/answer/6167148?hl=fr) et [conversion](https://support.google.com/google-ads/answer/6308?hl=fr) : délais et objectifs produit.
- [Google Ads — Search](https://support.google.com/google-ads/answer/9510373?hl=fr) et documentation PMax/YouTube/Display à revalider avant d’enseigner des noms d’interface.
- [GA4 — attribution settings](https://support.google.com/analytics/answer/10597962) et [modeled key events](https://support.google.com/analytics/answer/10710245) : modèle, crédit et modélisation.
- [CNIL — cookies et traceurs](https://www.cnil.fr/fr/les-cookies-et-autres-traceurs) et [article 5 RGPD](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre2) : consentement et minimisation.

Revalider les dates et URLs avant nouvelle publication. Ne jamais présenter CPC, CVR, CAC, LTV, payback ou budget comme universels ; chaque chiffre doit porter corpus, période, définition et hypothèses.

## 8. Scorecard et critères de sortie

| Axe                          |       Note | Justification                                                         |
| ---------------------------- | ---------: | --------------------------------------------------------------------- |
| Plume et intention fondateur |       9/10 | scène contrat/démo très claire                                        |
| Pédagogie                    |       9/10 | progression inversée et statuts simples                               |
| ICP/comité/funnel SaaS       |       6/10 | segment et statuts, mais MQL/SQL/activation absents                   |
| Campagnes et ciblage         |       6/10 | Search, marque, catégories ; PMax/YouTube/Display/négatifs incomplets |
| Tracking/attribution         |       6/10 | offline et fenêtres citées, implémentation et incrémentalité absentes |
| Économie                     |       6/10 | coût par contrat, pas CPQL/payback/LTV/TCO                            |
| Cohortes/lag                 |       7/10 | cycle long bien posé, sensibilité absente                             |
| Fraude/capacité              |       5/10 | motifs de refus, pas d’exploitation détaillée                         |
| Conversion/artefact          |       8/10 | CTA et registre, pas de téléchargement                                |
| SEO/QA prouvée               |       8/10 | metadata/helpers visibles, contrôles non exécutés                     |
| **Total**                    | **78/100** | excellent socle, 15 P1 avant référence exhaustive                     |

La page est prête à être considérée comme référence seulement lorsque :

1. ICP/comité et funnel jusqu’à activation/renouvellement sont définis ;
2. Search/PMax/YouTube/Display/remarketing, marque, concurrents, géographie et négatifs sont comparés ;
3. tracking Ads/GA4/CRM/offline/enhanced, consentement, attribution et déduplication sont testables ;
4. CPC/CVR/CPQL/CAC/payback/LTV/marge, TCO, scénarios de lag et sensibilité sont calculés ;
5. faux leads, capacité, stop/go et sortie fournisseur sont écrits ;
6. sources revalidées, artefact livré ou promesse limitée au bloc copiable ;
7. build, liens, JSON-LD, route, responsive, accessibilité, sitemap et état d’indexation sont contrôlés séparément.

**État après cet audit :** rapport produit uniquement. Aucun guide, recherche, registre, build, commit, push ou déploiement n’a été modifié.

## 9. Revalidation du snapshot corrigé — 24 juillet 2026

> Cette section remplace le verdict de 78/100 pour le **snapshot courant**.
> Les sections 1 à 8 restent l’audit historique qui a déclenché la correction ;
> elles ne décrivent plus l’état de la page réécrite.

### Verdict unique

| Indicateur              | État courant                                                 |
| ----------------------- | ------------------------------------------------------------ |
| Score P4                | **96/100**                                                   |
| P0 ouverts              | **0**                                                        |
| P1 ouverts              | **0**                                                        |
| P2 ouverts              | **2** : BAT navigateur réel et test par un dirigeant externe |
| Porte éditoriale locale | **GO**                                                       |
| Publication prouvée     | **NO-GO tant que le BAT exact n’est pas produit**            |

### Fermeture des quinze P1

La page corrigée couvre désormais l’ICP et le comité d’achat, le parcours du
clic à M12, les missions de Search, AI Max, Performance Max, Demand Gen, vidéo
et remarketing, les requêtes et exclusions, la page d’arrivée, la chaîne
Ads–site–CRM–produit, le consentement et les limites des données, l’attribution
et l’incrémentalité, l’économie unitaire, la maturité des cohortes, trois
sensibilités, les faux leads, la capacité commerciale, les alternatives,
quatre portes de décision et la réversibilité.

Le contre-audit a en outre corrigé les quatre contradictions de décision du
calculateur : pas de feu vert par défaut, pas d’élargissement depuis une simple
prévision, M12 non observable pour une cohorte en cours et arrêt explicite
pour une cohorte mûre sans vente. Les limites d’AI Max, de Consent Mode, des
catégories sensibles, des mineurs et des imports tardifs ont été revalidées
sur des sources Google et CNIL.

### Preuves du nouveau snapshot

- cas AtelierFlow recalculé du média au CAC M12 et au payback ;
- TCO fictif vérifié à 12, 36 et 60 mois ;
- calculateur et export local revalidés ;
- kit de onze fichiers, dont neuf CSV rectangulaires, UTF-8 et sans préfixe de
  formule dans les exemples ;
- **83/83 tests ciblés réussis**, TypeScript et ESLint réussis ;
- page locale, image sociale et ressources contrôlées ;
- **8 508 mots visibles, 43 minutes** à 200 mots par minute.

Les reçus détaillés sont :

- [P3 factuelle](../reviews/google-ads-saas-b2b-p3-facts.md) ;
- [P4 humaine](../reviews/google-ads-saas-b2b-p4-human.md) ;
- `docs/research/manifests/google-ads-saas-b2b-p3.sha256` ;
- `docs/research/manifests/google-ads-saas-b2b-p4.sha256`.

Ce verdict local ne vaut ni contrôle de production, ni confirmation
d’indexation, ni promesse de rentabilité ou de classement.
