# Giga-audit — Leads Google Ads non qualifiés

**Date de l’audit :** 24 juillet 2026  
**Périmètre :** page, image OG, registre éditorial et dossier de recherche, avec vérification des calculs et du parcours de conversion.  
**Question du dirigeant :** « Google m’envoie-t-il de mauvaises personnes, ou est-ce ma requête, mon message, ma page, mon accueil ou mon classement qui fabrique le problème ? »  
**Score actuel : 80/100**  
**Sévérité :** P0 = 0 · P1 = 14 · P2 = 11  
**Verdict :** guide déjà très solide pour le diagnostic humain : il prend une période complète, sépare contact brut/unique/en attente/non qualifié/qualifié, remonte du terme de recherche à l’appel et propose une seule correction. Les calculs sont justes et la conversion ne promet pas un volume. Pour atteindre le standard renforcé, il faut toutefois approfondir CRM/offline conversions et consentement, fraude/spam, capacité commerciale, scénarios économiques et TCO, attribution/incrémentalité, comparaison des canaux et le plan de sortie. Les « 20/20 » ou « aucun P1 » du dossier de recherche sont des états internes historiques, pas une preuve indépendante.

## 1. Empreintes et état vérifié

| Élément | Valeur / constat |
|---|---|
| Page | `src/app/guides/leads-google-ads-non-qualifies/page.tsx` |
| SHA-256 page | `549cfd97384dd85e41b09394e3bd47552489dd832fa297343c50cd1f3de03bb2` |
| Image OG | `src/app/guides/leads-google-ads-non-qualifies/opengraph-image.tsx` |
| SHA-256 OG | `259dbe8fca19cdf6157d0f16aeb2a630553a2cbea6485fe9bea22daf5f7056e1` |
| Registre | dates `2026-07-22`, lecture 15 min, index/follow à revalider séparément |
| Structured data dans le code | `Article` et `BreadcrumbList` présents ; test Rich Results non exécuté |
| Recherche | `docs/research/leads-google-ads-non-qualifies.md`, journal P1–P4 et manifestes frères présents |
| Ressource | registre et taxonomie copiable dans l’article ; aucun fichier téléchargeable |
| Build, navigateur, CRM réel, tags, consentement, production/indexation | non vérifiés dans cet audit |
| Vérification de calcul | `30−2=28`, `28−4=24`, `7+5+4+2+6=24`, `2800/28=100`, `2800/6=466,67`, `6/24=25 %`, `6/28=21,43 %` : exacts |

P1–P4 du workflow éditorial ne sont pas les niveaux P0/P1/P2 de ce rapport. Le rapport est un audit documentaire et de contenu ; il ne transforme pas les états déclarés dans le dossier en validation de production.

## 2. Forces à préserver

- L’ouverture parle à un entrepreneur qui voit enfin des formulaires, appels et demandes mais pas de clients.
- La première consigne est excellente : une période complète, un motif principal, une seule correction.
- Le texte distingue explicitement mauvais contact, vente absente, accueil défaillant et suivi cassé.
- La qualification est définie par type de client, besoin, zone, contraintes et prochaine étape, pas par une impression.
- Les statuts gardent les dossiers en attente et évitent de classer un injoignable comme hors cible.
- Le rapport de termes de recherche est présenté comme utile mais non exhaustif ; l’exact n’est pas décrit comme littéral.
- Les changements isolés (zone, annonce, page, formulaire, traitement) donnent une méthode d’apprentissage plutôt qu’un catalogue de réglages.
- Le cas fictif est transparent, vérifiable et prudent ; les dossiers en attente ne sont pas transformés en refus.
- Le renvoi des statuts qualifiés à Google est différé jusqu’à stabilisation de la définition.
- Le CTA demande une période et des motifs, exclut mots de passe/données inutiles et accepte d’attendre ou de réduire.

## 3. Matrice des angles couverts

| Axe | État actuel | Verdict audit |
|---|---|---|
| Diagnostic du symptôme | période complète, motif principal, cause amont/aval | fort |
| Qualité/qualification | critères et statuts simples | fort, mais ICP/comité à enrichir |
| Recherche/zone | termes, variantes, présence/intérêt | fort, rapport non exhaustif |
| Annonce/page/formulaire | promesse, cohérence, minimisation | bon |
| Appels/CRM | clic vs appel, traitement et livraison | bon mais pas workflow complet |
| Offline/enhanced conversions | principe de statut qualifié et renvoi prudent | P1 : champs, consentement, déduplication manquants |
| Fraude/spam | tests, doublons, injoignables | P1 : taxonomie et seuils d’exploitation |
| Capacité commerciale | traitement mentionné | P1 : SLA, délai de rappel, saturation |
| Chiffrage | une cohorte, coût média provisoire | P1 : TCO, marge, CAC, sensibilité |
| Attribution/incrémentalité | pas d’attribution certaine | P1 : protocole à proposer |
| Comparaison canaux | maillage interne, pas de matrice | P1 |
| Conversion | CTA tardif et honnête | bon |
| SEO/QA technique | code metadata/JSON-LD visible | validation build/browser absente |

## 4. P1 — plan de correction

### P1-01 — Ajouter la taxonomie complète du contact

Le guide distingue très bien « hors cible » et « pas encore vendu », mais un diagnostic opérationnel doit aussi séparer : spam/bot, test, doublon, faux numéro, appel manqué, injoignable après relances, particulier, mauvais secteur, mauvaise zone, besoin non couvert, budget, délai, sécurité/achats, no-show, refus commercial et perte après proposition. Chaque motif doit avoir une action et un propriétaire ; un seul motif principal évite de compter plusieurs fois.

### P1-02 — Rendre le CRM/offline conversion testable

Ajouter identifiant de lead, source/campagne, terme disponible, GCLID/GBRAID/WBRAID si applicable, date d’entrée, étape, motif, valeur, devise, date de qualification et statut de vente. Décrire le rapprochement navigateur + serveur, la gestion des doublons et le fichier de résultats/rejets d’import. La documentation Google actuelle prévoit qualified/converted lead et recommande des imports réguliers ; ce n’est pas une obligation et cela ne remplace pas le CRM.

### P1-03 — Consentement et données personnelles

La minimisation CNIL est bien citée, mais il manque CMP, finalité, base légale, Consent Mode, `ad_storage`, `ad_user_data`, `analytics_storage`, droits, durée, sous-traitants, transfert et hachage. Une adresse e-mail hachée n’est pas automatiquement anonyme. Ajouter un encadré « fait Google / obligation à vérifier / conseil Hagnéré Code » et faire intervenir DPO/conseil lorsque nécessaire.

### P1-04 — Fraude, spam et faux leads

Ajouter les contrôles : honeypot/CAPTCHA adapté, validation téléphone/e-mail, filtrage bot, tests internes, appels automatisés, clics invalides, leads revendus, concurrent, répétition formulaire + appel et crédit Google. Google filtre une partie du trafic invalide, mais ne connaît pas forcément la pertinence métier. Conserver une catégorie « fraude suspectée » sans la confondre avec hors cible, et mesurer son coût.

### P1-05 — Capacité et traitement commercial

Le texte dit qu’un rappel peut être perdu ; il ne quantifie pas le délai. Ajouter délai médian de première tentative, nombre de tentatives, plage horaire, taux de réponse, no-show, capacité de rendez-vous et propriétaire du SLA. Si l’équipe ne peut pas rappeler les contacts utiles dans la fenêtre du marché, augmenter le budget peut dégrader la qualité perçue sans changer la campagne.

### P1-06 — TCO et coût d’une mauvaise qualification

Le dossier exclut volontairement le budget complet, mais l’audit renforcé doit donner une méthode économique. Exemple fictif : 100 contacts/mois, 35 % hors cible, 15 % doublons/spam, 50 % des utiles qualifiés, 20 % closing, 50 € de coût interne par qualification et 500 € mensuels de gestion/CRM.

| Option fictive au même volume | Setup | Run annuel | TCO 12 mois | TCO 36 mois | TCO 60 mois |
|---|---:|---:|---:|---:|---:|
| Classer manuellement + corriger une annonce | 1 000 € | 15 000 € | 16 000 € | 46 000 € | 76 000 € |
| Formulaire qualifiant + CRM/offline | 6 000 € | 22 000 € | 28 000 € | 72 000 € | 116 000 € |
| Audit campagne + landing + suivi appels | 10 000 € | 30 000 € | 40 000 € | 100 000 € | 160 000 € |

Valeurs fictives, pas tarifs de marché. Formule : `TCO(n) = setup + n × run annuel`. Ajouter le coût de chaque dossier inutile (`temps de lecture + rappel + saisie`) et la perte potentielle d’un bon dossier non rappelé. Ne pas confondre coût de correction et économie automatique.

### P1-07 — Ajouter scénarios chiffrés et sensibilité

Le cas 30/28 est excellent pour la qualité, mais il ne montre ni faible volume, ni période mature, ni vente. Ajouter trois lectures : 10 contacts (incertitude forte), 30 contacts (cas pédagogique), 100 contacts sur un cycle terminé (décision plus robuste). Faire varier taux hors cible, taux de qualification, coût média, coût commercial et marge ; afficher l’intervalle d’incertitude plutôt qu’un seuil universel.

### P1-08 — Attribution et incrémentalité

Un contact peut être attribué à une campagne sans avoir été créé par elle. Ajouter brand/nonbrand, direct, SEO, recommandation, remarketing, assisted conversions, fenêtre, modèle GA4 et possibilité d’un test géographique/holdout. Si aucune mesure incrémentale n’est possible, dire « attribué selon la règle » et non « généré par Google ».

### P1-09 — Comparaison des canaux

Ajouter une courte matrice Google Search, PMax/Display, Meta, LinkedIn, SEO local/national et prospection : demande exprimée, ciblage, délai, contrôle du message, coût de production, qualité et mode de mesure. L’objectif n’est pas de changer de canal automatiquement ; c’est de ne pas corriger Google alors que le besoin est absent ou que le canal choisi est trop large.

### P1-10 — Landing et formulaire sous l’angle diagnostic

Le guide recommande de vérifier l’annonce et la page, mais peut fournir une checklist : ICP dès le premier écran, exclusion (« réservé aux entreprises »), prix ou fourchette si nécessaire, zone, service réellement vendu, question qui change le routage, confirmation, consentement, preuve et prochaine étape. Pour chaque champ, écrire ce qu’il décide et ce qui arrive si la réponse manque.

### P1-11 — Renvoyer seulement le bon signal à Google

Ajouter la distinction entre conversion d’observation, conversion primaire d’enchères, qualified lead et converted lead ; contrôler la cadence d’import, les rejets, les événements rétroactifs, les doublons et le statut de consentement. La page doit éviter de recommander l’automatisation tant que deux commerciaux ne classent pas le même dossier de façon comparable.

### P1-12 — Fraîcheur et changements de produit

Les sources sont du 22/07/2026. Les pages Google évoluent (Data Manager, réponses qualifiantes, appels, consent mode). Revalider chaque lien avant publication et signaler la version/date près de toute affirmation volatile ; ne pas transformer une fonctionnalité de formulaire Google en propriété de tous les formulaires.

### P1-13 — Plan stop/go et sortie

Ajouter : stop technique si aucun contact ne retrouve son origine ; stop qualité si doublons/spam ou définition instable ; go pilote si une cause dominante est prouvée ; go palier si les contacts utiles, la capacité et la marge sont stables ; arrêt économique si coût par qualifié/CAC dépasse le seuil. Prévoir export du registre, propriété des comptes/tags, retrait d’une agence et retour à la procédure précédente.

### P1-14 — Artefact et QA de publication

Le registre est annoncé copiable, ce qui est honnête. Si un téléchargement est ajouté, le générer et le tester. Avant toute prétention index/follow : build, liens, JSON-LD, canonical, responsive 320–1600 px, accessibilité clavier, CTA, sitemap et route doivent être vérifiés ; le dossier ne constitue pas cette preuve.

## 5. P2 — améliorations secondaires

1. Ajouter un arbre visuel `symptôme → preuve → cause → test → décision`.
2. Ajouter un glossaire : contact brut, unique, qualifié, MQL, SQL, offline conversion, consentement, spam, attribution.
3. Ajouter une fiche « appel » avec durée, rappel, issue, qualification et preuve.
4. Ajouter une fiche « formulaire Google » séparant formulaire hébergé et formulaire du site.
5. Ajouter un cas de bon contact non signé pour ne pas tout imputer à la publicité.
6. Ajouter un cas de changement concurrent de zone et d’annonce pour expliquer la non-inférence.
7. Ajouter une revue hebdomadaire qualité et mensuelle des termes de recherche.
8. Ajouter les statuts vente, marge, annulation, remboursement et impayé.
9. Tester les tableaux et le registre sur mobile et à l’impression.
10. Ajouter un mini-plan de données sources, copie immuable et journal de correction.
11. Lier le guide coût par lead sans refaire son calcul complet.

## 6. Benchmark international de couverture

Les concurrents ci-dessous sont utilisés uniquement pour les angles éditoriaux ; leurs chiffres ou promesses ne sont pas des faits.

| Marché / page | Couverture intéressante | À reprendre | Limite |
|---|---|---|---|
| France — [Ad Lunam, calculateur CPL](https://adlunam-agency.com/outils/calculateur-cpl/) | CPL, qualification et comparaison de canaux | relier le motif de refus au CPQL et au CAC | benchmarks et formules commerciales non auditables ici |
| France — [Vincent Duquesne, coût par lead](https://www.vincentduquesne.net/cout-lead-google-ads.html) | insiste sur définition et coût de lead qualifié | conserver l’explication simple avant les réglages | consultant, pas preuve indépendante |
| États-Unis — [Google Ads, quality leads](https://support.google.com/google-ads/answer/13489421?hl=en) | trajet complet prospect → qualification → vente | traduire en registre dirigeant | fournisseur de la plateforme |
| Royaume-Uni — [NHS RPA/automation guidance](https://digital.nhs.uk/services/digital-services-for-integrated-care/guidance-for-designing-delivering-and-sustaining-rpa-within-the-nhs/understanding-rpa) | distingue tâche, qualité et contrôle humain | reprendre l’idée d’exception et de responsabilité | secteur santé, pas leadgen PME |
| Australie — [Digital NSW automation guide](https://www.digital.nsw.gov.au/delivery/nsw-automation-guide) | approche risques, processus et automatisation | ajouter capacité, exception et suivi dans le diagnostic | guide institutionnel, pas acquisition |
| DACH — [Motainment B2B Search](https://motainment.de/blog/realistic-ad-budgets-for-b2b-search) | raw lead, MQL, SQL et coût de pipeline | enrichir le vocabulaire et la cohorte | chiffres auto-déclarés/non comparables |

**Conclusion benchmark :** le guide possède un angle supérieur aux checklists « ajoutez des négatifs » : il demande de prouver la cause avant d’agir. Pour dépasser la couverture étrangère, il doit ajouter le coût opérationnel, l’import offline, la fraude, la capacité et l’incrémentalité.

## 7. Sources officielles à revalider

- [Google Ads — bonnes pratiques prospects de qualité](https://support.google.com/google-ads/answer/13489421?hl=fr) : parcours complet jusqu’à la vente.
- [Rapport termes de recherche](https://support.google.com/google-ads/answer/2472708?hl=fr), [options de correspondance](https://support.google.com/google-ads/answer/7478529?hl=fr), [ciblage géographique](https://support.google.com/google-ads/answer/1722038?hl=fr) : limites du diagnostic, variantes et zones.
- [Prospects qualifiés et convertis](https://support.google.com/google-ads/answer/11459091?hl=fr), [formulaires Google](https://support.google.com/google-ads/answer/16726130?hl=fr), [réponses qualifiantes](https://support.google.com/google-ads/answer/17050941?hl=fr) : catégories et périmètres spécifiques.
- [Import offline FAQ](https://support.google.com/google-ads/answer/10029210?hl=fr), [conversions avancées prospects](https://support.google.com/google-ads/answer/15713840?hl=fr), [diagnostics offline](https://support.google.com/google-ads/answer/13812240?hl=en) : import, qualité, doublons et Data Manager.
- [Conversions par appel](https://support.google.com/google-ads/answer/6100664?hl=fr) et [AI-qualified call leads](https://support.google.com/google-ads/answer/16913326?hl=en) : limites du clic/durée et filtrage fournisseur à attribuer comme tel.
- [GA4 — attribution](https://support.google.com/analytics/answer/10597962), [événements modélisés](https://support.google.com/analytics/answer/10710245) et [Consent Mode](https://support.google.com/analytics/answer/10000067) : modèles, crédit et données manquantes.
- [CNIL — cookies et traceurs](https://www.cnil.fr/fr/les-cookies-et-autres-traceurs), [minimisation](https://www.cnil.fr/fr/minimiser-les-donnees-collectees) et [article 5 RGPD](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre2) : consentement et données nécessaires.

Les pages Google consultées le 22/07/2026 dans le dossier doivent être revalidées le jour de la prochaine publication ; les résultats de recherche utilisés pour le benchmark ont été vérifiés le 24/07/2026. Les dates et URLs doivent rester visibles dans le journal de source.

## 8. Scorecard et conditions de sortie

| Axe | Note | Justification |
|---|---:|---|
| Ouverture humaine | 9/10 | symptôme et promesse clairs |
| Diagnostic causal | 9/10 | période, motif, recherche, zone, annonce, traitement |
| Qualification | 8/10 | critères et statuts, taxonomie à enrichir |
| Calculs/exemple | 8/10 | calcul exact, mais pas TCO/marge/CAC |
| CRM/offline/consentement | 6/10 | principe juste, procédure incomplète |
| Fraude/capacité | 5/10 | tests et doublons, exploitation absente |
| Attribution/canaux | 5/10 | prudence, pas de protocole incrémental/comparatif |
| Plan d’action/stop-go | 8/10 | une correction à la fois, seuils à formaliser |
| Conversion/artefact | 9/10 | CTA honnête et registre autonome |
| SEO/QA prouvée | 8/10 | structured data visible, validations non exécutées |
| **Total** | **80/100** | socle très fort, 14 P1 avant référence exhaustive |

Le guide est prêt à être déclaré « référence » uniquement lorsque :

1. la taxonomie et le workflow CRM/offline sont testables ;
2. consentement, fraude, appels et capacité commerciale sont explicitement traités ;
3. scénarios de volume/maturité, TCO 12/36/60, marge, CAC et sensibilité sont chiffrés ;
4. attribution/incrémentalité et comparaison des canaux sont encadrées ;
5. stop/go et sortie fournisseur sont écrits ;
6. sources revalidées et artefact réellement livré ou clairement copiable ;
7. build, liens, JSON-LD, responsive, accessibilité, route, sitemap et indexation sont contrôlés séparément.

**État après cet audit :** rapport produit uniquement. Aucun guide, registre, dossier de recherche, build, commit, push ou déploiement n’a été modifié.
