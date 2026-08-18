# Giga-audit — Google Ads ou Meta Ads

**Date de l’audit :** 24 juillet 2026  
**Périmètre :** page, OG, registre et dossier de recherche ; comparaison de deux plateformes payantes à résultat métier égal.  
**Question du dirigeant :** « Google me paraît cher et Meta me promet beaucoup de clics : lequel peut réellement financer une vente, avec le travail et la mesure qu’il exige ? »  
**Score actuel : 78/100**  
**Sévérité :** P0 = 0 · P1 = 15 · P2 = 10  
**Verdict :** excellente base pédagogique pour expliquer intention captée contre intérêt créé et éviter le duel au CPC. Les formules et l’idée de test limité sont saines. La page reste cependant trop courte pour le standard renforcé : elle compare surtout Search à Meta, peu PMax/YouTube/Display/remarketing, ne détaille pas CAPI/CRM/Consent Mode, attribue mal la différence entre signal et incrémentalité, n’a pas de scénarios chiffrés complets, TCO 12/36/60, capacité, fraude, payback/marge ou plan de sortie. Le dossier interne annonçant « aucun P1 » est un état de passe, pas une validation indépendante.

## 1. Empreintes et état de validation

| Élément | Valeur / constat |
|---|---|
| Page | `src/app/guides/google-ads-ou-meta-ads/page.tsx` |
| SHA-256 page | `e83ebda853951f2a7d6c61d8cce4b203f86ddd3fb9e943f299705b27f3420e71` |
| Image OG | `src/app/guides/google-ads-ou-meta-ads/opengraph-image.tsx` |
| SHA-256 OG | `c64ebd3608c00cb8118233d6fab26227ba3b498823c4519501206405f56ea18b` |
| Registre | dates `2026-07-23`, lecture 10 min |
| Structured data | metadata, Article et Breadcrumb visibles dans le code ; Rich Results non testé |
| Recherche | `docs/research/google-ads-ou-meta-ads.md`, quatre passes déclarées terminées |
| Artefact | fiche de test inline ; aucun téléchargement réel |
| Build, pixels/tags, CAPI, CRM, consentement, responsive, production/indexation | non vérifiés ici |
| Calculs dans la page | formules correctes mais aucun cas avec résultats numériques complets |

Les passes éditoriales P1–P4 et les sévérités P0/P1/P2 de cet audit sont distinctes.

## 2. Forces à préserver

- Le clic Google à 8 € contre un clic Meta moins cher crée une tension très humaine.
- Search est explicitement distingué de l’ensemble de Google Ads, et Meta de ses objectifs variés.
- Le raccourci « Google capte / Meta crée » est déclaré utile mais non universel.
- Le parcours des dix dernières ventes, la comparaison d’une vente à une vente et la fiche de test sont directement exploitables.
- Les coûts de création, renouvellement et réponse sont ajoutés autour du média ; c’est un bon début de coût complet.
- La page accepte Google, Meta, une séquence ou aucun canal et insiste sur le rôle distinct de chaque campagne.
- Le CTA promet un choix de première hypothèse, pas des leads ou un ROAS.

## 3. Matrice des angles

| Axe | État actuel | Évaluation |
|---|---|---|
| Intention captée/créée | Search vs Meta expliqué | fort, mais raccourci à encadrer |
| Formats Google | Search principal | P1 : PMax/YouTube/Display/remarketing |
| Formats Meta | objectifs, trafic, créas | bon, CAPI/retargeting incomplets |
| Créa/landing | évoqués | bon, critères de conversion à détailler |
| Tracking Ads/GA4/CRM/CAPI | principe hors ligne | P1 : procédure et déduplication |
| Consentement | « règles applicables » | P1 : Consent Mode/CNIL explicites |
| Attribution/incrémentalité | limites citées | P1 : méthode témoin/assistée |
| Faux leads/capacité | peu | P1 |
| Économie | formules sans chiffres | P1 : CPC/CVR/CPQL/CAC/payback/marge/TCO |
| Scénarios | un exemple de budgets égaux | P1 : B2B/local/e-commerce/SaaS |
| Conversion | CTA sobre | fort |
| QA technique | non prouvée | P1 |

## 4. P1 — corrections nécessaires

### P1-01 — Comparer à périmètre strictement égal

La page compare une vente à une vente en principe, mais ne fixe pas une définition de lead, qualification, vente, marge, fenêtre, coût de création, coût d’agence, coût de suivi et règles de déduplication. Ajouter un protocole commun : mêmes dates, offre, zone, landing, CRM, étape métier et exclusion des doublons. Un clic Meta optimisé trafic n’est pas un concurrent équitable d’un Search optimisé prospects.

### P1-02 — Couvrir tous les formats actuels sans diluer l’article

Ajouter une matrice : Search (intention explicite), PMax (inventaire multi-surface et signaux), YouTube (vidéo/découverte), Display (portée/remarketing) ; Meta prospecting, retargeting, leads, messages et ventes. Pour chaque format : signal envoyé, niveau de contrôle, création, délai, risque d’audience déjà acquise et résultat principal.

### P1-03 — Créas, landing et cadence de renouvellement

Meta exige angles, formats et renouvellement ; Google exige requêtes, annonces et pages cohérentes. Mesurer séparément production initiale, variations, montage, UGC, landing, vitesse, preuve, formulaire, rendez-vous et relance. Une créa médiocre peut faire paraître Meta mauvais ; une landing trop large peut faire paraître Google mauvais.

### P1-04 — Tracking Google Ads, GA4, CRM, Meta CAPI et offline

Ajouter identifiants et contrats : GCLID/GBRAID/WBRAID, `event_id` Meta, transaction/lead ID, UTM, horodatage, devise, valeur, statut CRM, conversion offline, CAPI, déduplication navigateur+serveur et journal des rejets. Google et Meta peuvent recevoir un statut qualifié ou vendu, mais aucun ne devient la source commerciale à la place du CRM.

### P1-05 — Consentement et données

Décrire CMP, Consent Mode (`ad_storage`, `ad_user_data`, `analytics_storage`), Meta consent signals, finalité, base légale, hachage, conservation, sous-traitants et droits. Le CAPI n’est pas une dispense de consentement ; une donnée hachée n’est pas automatiquement anonyme. Ajouter une limite CNIL et l’intervention d’un DPO/conseil si nécessaire.

### P1-06 — Attribution et incrémentalité

Le texte dit que l’attribution n’est pas parfaite, mais n’explique pas comment comparer : brand/nonbrand, trafic direct, SEO, vues assistées, remarketing et achats déjà décidés. Ajouter modèle choisi, lookback, fenêtre post-view/post-click, cross-device, conversions modélisées, test géographique, holdout ou avant/après documenté. Employer « attribué selon la règle » plutôt que « créé par la plateforme ».

### P1-07 — Faux leads, fraude et doublons

Ajouter spam/bot, formulaires répétés, messages sans besoin, appels manqués, clics accidentels, concours, audience existante, lead revendu et doublon Google/Meta. Distinguer trafic invalide de contact hors cible et de contact non traité. Conserver brut, unique, qualifié, vente et motif de rejet.

### P1-08 — Capacité commerciale et service

Un canal peut fournir plus de demandes qu’une équipe ne peut rappeler ou expédier. Ajouter délai de réponse, no-show, créneaux, stock, support, zone, capacité de livraison et SLA. Définir une porte « ne pas augmenter » même si CPL/CPA paraît bon.

### P1-09 — Ajouter les chiffres CPC/CVR/CPQL/CAC/payback/marge

La page possède des formules, pas de résultat numérique. Ajouter : `clics = budget/CPC`, `leads = clics × CVR`, `CPQL = coût complet/qualifiés`, `CAC = coût complet/ventes`, `payback = CAC/marge mensuelle`, `ROAS = revenu attribué/média`, `marge d’acquisition = marge incrémentale − coût complet`. Retirer support, remises, retours et coûts variables ; ne pas appeler ROAS profit.

### P1-10 — Scénarios B2B, local, e-commerce et SaaS

Montrer quatre lignes, mêmes définitions : B2B (SQL → proposition → contrat long), local (appel/réservation → visite/vente), e-commerce (ajout panier → achat → retour/marge), SaaS (démo/trial → activation → abonnement/churn). Le gagnant peut différer selon lag, créa, marge et capacité ; aucun classement sectoriel universel.

### P1-11 — TCO 12/36/60 et mix hybride

Pour un même test fictif de 3 000 € média par canal, inclure setup, agence, production, landing, CRM, CAPI/offline, temps commercial, support et maintenance.

| Option fictive au même périmètre | Setup | Run annuel | TCO 12 mois | TCO 36 mois | TCO 60 mois |
|---|---:|---:|---:|---:|---:|
| Google Search seul, créas texte | 5 000 € | 36 000 € | 41 000 € | 113 000 € | 185 000 € |
| Meta prospecting + créas renouvelées | 9 000 € | 44 000 € | 53 000 € | 141 000 € | 229 000 € |
| Mix Google + Meta avec mesure CRM/CAPI | 16 000 € | 66 000 € | 82 000 € | 214 000 € | 346 000 € |

Valeurs fictives, pas tarifs de marché. Formule `TCO(n) = setup + n × run annuel`. Ajouter coût de sortie : export, comptes, pixels/tags, créations, audiences, propriété des leads et suppression des accès agence.

### P1-12 — Scénarios de volume, maturité et sensibilité

Ajouter petite cohorte (10 ventes, grande incertitude), cohorte moyenne (50) et cohorte mature (cycle complet), avec variation CPC ±30 %, CVR, taux qualifié, closing, marge et lag. Ne pas trancher sur une semaine ou un canal qui n’a pas atteint sa fenêtre commerciale.

### P1-13 — Budget test, seuil de perte et stop/go

La fiche demande un budget que l’entreprise accepte de perdre, mais ne donne pas de formule. Ajouter `CPL max = marge contributive × taux qualif × taux vente × facteur prudence` et `budget test = coût attendu d’une cohorte minimale définie`. Stop technique si tracking/consentement cassé ; go pilote si résultat, capacité et déduplication sont prêts ; go palier si marge et qualité restent sous seuil ; stop économique si CAC mature dépasse la marge.

### P1-14 — Maîtriser brand et cannibalisation

Séparer marque, nonbrand, concurrent, retargeting et trafic direct. Une vente touchée par Meta puis brand Google peut être comptée deux fois. Définir la source de vérité et la règle d’attribution avant le mix hybride ; comparer incrémentalité, pas seulement dernières interactions.

### P1-15 — Artefact et QA

La fiche de test est inline. Soit garder cette promesse, soit livrer un fichier versionné avec hypothèse, budget, créas, landing, événements, consentement, coûts, dates, résultat, décision et plan de sortie. Build, links, JSON-LD, canonical, responsive 320–1600 px, accessibilité, CTA, sitemap et indexation sont à vérifier avant de dire « publié ».

## 5. P2 — améliorations secondaires

1. Ajouter un schéma `intention → créa → landing → qualification → vente → marge`.
2. Ajouter glossaire CAPI, offline, Consent Mode, brand, retargeting, prospecting, ROAS et payback.
3. Ajouter un exemple bon clic/mauvaise vente et mauvais clic/bonne vente.
4. Ajouter appels, messages, WhatsApp/DM et délais de réponse selon canal.
5. Ajouter un journal de fréquence Meta, fatigue créative et termes Google.
6. Ajouter les règles d’exclusion des audiences déjà clientes.
7. Ajouter scénario promotion, saison, stock et panier e-commerce.
8. Ajouter une règle de réconciliation Ads/GA4/CRM/comptabilité.
9. Tester les formules et tableaux à 390 px et à l’impression.
10. Lier coûts par lead et suivi de conversions sans dupliquer leurs chapitres.

## 6. Scénario chiffré commun à intégrer

**Exemple illustratif fictif :** 3 000 € média sur Google et 3 000 € sur Meta, 1 000 clics Google à 3 €, 4 000 clics Meta à 0,75 €, 60 leads Google, 120 leads Meta, 18 et 12 leads qualifiés, 4 et 3 ventes, 2 000 € de marge par vente. Coûts production/landing/gestion attribuables : 1 200 € Google, 2 000 € Meta.

- Google coût complet `4 200 €`, CPQL `4 200 / 18 = 233,33 €`, CAC `4 200 / 4 = 1 050 €`, marge `4 × 2 000 = 8 000 €`, marge après acquisition `3 800 €` ;
- Meta coût complet `5 000 €`, CPQL `5 000 / 12 = 416,67 €`, CAC `5 000 / 3 = 1 666,67 €`, marge `6 000 €`, marge après acquisition `1 000 €` ;
- CPC Meta inférieur et volume supérieur, mais coût par vente et marge moins favorables dans ce cas.

Ce n’est pas un benchmark ni une attribution incrémentale. Dédupliquer les personnes touchées par les deux plateformes, retirer les ventes qui auraient eu lieu sans publicité, attendre le cycle complet et refaire le calcul avec taux de closing, marge, retour et capacité.

## 7. Benchmark international de couverture

| Marché / source | Couverture intéressante | À reprendre | Limite |
|---|---|---|---|
| France — [Ad Lunam, calculateur CPL](https://adlunam-agency.com/outils/calculateur-cpl/) | comparaison par canal et taux de qualification | comparer CPQL/CAC plutôt que clic | benchmarks commerciaux non vérifiés |
| France — [DataCloser, coût lead B2B](https://datacloser.com/blog/lead-generation-b2b-cout.html) | comparaison Google/LinkedIn/Meta et funnel | montrer plusieurs canaux au même résultat | chiffres auto-déclarés, produits intéressés |
| États-Unis — [Meta objectives](https://www.facebook.com/business/ads/ad-objectives) | objectif campagne et action optimisée | distinguer trafic, leads et ventes | documentation fournisseur |
| Royaume-Uni — [Google Ads offline imports](https://support.google.com/google-ads/answer/10029210?hl=en-GB) | qualification hors ligne et données CRM | même contrat de mesure pour les deux plateformes | produit Google, pas comparatif économique |
| Australie — [Digital NSW automation/measurement](https://www.digital.nsw.gov.au/delivery/nsw-automation-guide) | risques, processus et données | intégrer capacité et exceptions | institutionnel, hors acquisition |
| DACH — [Motainment B2B Search](https://motainment.de/blog/realistic-ad-budgets-for-b2b-search) | raw lead/MQL/SQL et budget B2B | ajouter funnel commun et lag | références auto-déclarées |

**Conclusion benchmark :** l’opposition intention/création et le refus du CPC est une bonne base. Les meilleures prochaines améliorations sont les coûts créatifs Meta, le protocole CRM/CAPI/offline commun, l’incrémentalité et le mix brand/nonbrand.

## 8. Sources officielles à revalider

- [Google Ads — choisir le type de campagne](https://support.google.com/google-ads/answer/2567043?hl=fr) et [annonces Search](https://support.google.com/google-ads/answer/1722020?hl=fr) : rôle et limites de Search.
- [Meta — objectifs publicitaires](https://www.facebook.com/business/ads/ad-objectives), [trafic](https://www.facebook.com/business/ads/ad-objectives/traffic) et [Conversions API](https://www.facebook.com/business/help/AboutConversionsAPI) : objectifs et mesure fournisseur.
- [Google Ads — offline conversion FAQ](https://support.google.com/google-ads/answer/10029210?hl=fr) et [conversions améliorées prospects](https://support.google.com/google-ads/answer/15713840?hl=fr) : statuts, import et déduplication.
- [GA4 — attribution](https://support.google.com/analytics/answer/10597962), [événements modélisés](https://support.google.com/analytics/answer/10710245) et [Consent Mode](https://support.google.com/analytics/answer/10000067) : attribution et consentement.
- [CNIL — cookies et traceurs](https://www.cnil.fr/fr/les-cookies-et-autres-traceurs), [minimisation](https://www.cnil.fr/fr/minimiser-les-donnees-collectees) et [article 5 RGPD](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre2) : données, consentement, finalités.

Sources produit consultées/recherchées le 23–24/07/2026 ; revalider au moment de la prochaine édition car interfaces, objectifs et APIs changent. Les chiffres du présent rapport sont explicitement fictifs.

## 9. Scorecard et conditions de sortie

| Axe | Note | Justification |
|---|---:|---|
| Plume et ouverture | 9/10 | tension CPC/ventes et scènes claires |
| Intention et choix de canal | 9/10 | Search vs Meta bien expliqué, raccourci nuancé |
| Formats et créas | 6/10 | Search/Meta, PMax/YouTube/Display incomplets |
| Tracking et consentement | 5/10 | principes offline/CAPI, procédure absente |
| Attribution/incrémentalité | 5/10 | limites évoquées, protocole absent |
| Qualité/fraude/capacité | 5/10 | peu de traitement opérationnel |
| Économie/chiffres | 6/10 | formules, pas TCO/payback/sensibilité |
| Scénarios et mix | 6/10 | budgets égaux, pas quatre contextes métier |
| Conversion/artefact | 9/10 | CTA honnête et fiche autonome |
| SEO/QA prouvée | 8/10 | metadata/JSON-LD visibles, vérifications absentes |
| **Total** | **78/100** | socle excellent, 15 P1 avant référence exhaustive |

Déclarer le guide prêt seulement après :

1. comparaison des formats à périmètre égal et des quatre scénarios ;
2. tracking Google/GA4/Meta/CRM/CAPI/offline, consentement et déduplication testés ;
3. CPC/CVR/CPQL/CAC/payback/marge/TCO/sensibilité calculés ;
4. fraude, capacité, brand, attribution et incrémentalité documentées ;
5. stop/go et sortie fournisseur écrits ;
6. sources revalidées et artefact réellement livré ou annoncé comme copiable ;
7. build, liens, JSON-LD, responsive, accessibilité, route, sitemap et indexation vérifiés séparément.

**État après cet audit :** rapport produit uniquement. Aucun guide, registre, recherche, build, commit, push ou déploiement n’a été modifié.
