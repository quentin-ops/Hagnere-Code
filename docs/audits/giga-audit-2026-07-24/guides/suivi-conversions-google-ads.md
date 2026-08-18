# Giga-audit — Suivi des conversions Google Ads

**Date de l’audit :** 24 juillet 2026  
**Périmètre :** page publiée dans le dépôt, composant interactif, image OG, registre, dossier de recherche et couverture concurrentielle FR + US/UK/AU/DACH.  
**Question du dirigeant :** « Google Ads affiche des conversions, mais combien sont de vraies demandes, des devis et des ventes ? Puis-je faire confiance au chiffre avant d’augmenter le budget ? »  
**Score actuel : 84/100**  
**Sévérité :** P0 = 0 · P1 = 14 · P2 = 10  
**Verdict :** c’est l’un des guides les plus solides du corpus : l’ouverture 72 → 68 → 60 → 18 → 9 → 4 est immédiatement compréhensible, le registre de réconciliation est concret et l’outil local aide réellement le lecteur à nommer la première rupture. Il n’est toutefois pas encore une référence internationale exhaustive. La page ne décrit pas assez la migration Data Manager de juin 2026, les appels et imports de valeurs, la déduplication navigateur/serveur, l’incrémentalité, la capacité commerciale, les scénarios économiques et la ressource XLSX annoncée dans la recherche. Les quatre passes du dossier interne sont un état de production ; elles ne remplacent pas ce contre-audit.

## 1. Empreintes et état de validation

| Élément | Valeur / constat |
|---|---|
| Page | `src/app/guides/suivi-conversions-google-ads/page.tsx` |
| SHA-256 page | `15d790ab6e1be8bbe36aaafc2754d1135539915011ec67fe440bdb1c24b86f61` |
| Image OG | `src/app/guides/suivi-conversions-google-ads/opengraph-image.tsx` |
| SHA-256 OG | `94ca085afe6021f8069ade6eb12250661591c2ce7f9611ff62dfc246e0d39b8c` |
| Registre | titre, dates `2026-07-22`, lecture 19 min ; meta description orientée demandes/ventes |
| Structured data visible | `Article` et `BreadcrumbList` dans le fichier ; rendu Rich Results non testé ; pas de `FAQPage` visible dans ce fichier |
| Composant | `ConversionReconciliationTool` : volumes, fiche de cas, contrôles d’import, marge, copie locale |
| Recherche | `docs/research/suivi-conversions-google-ads.md`, quatre passes déclarées terminées, sources principalement consultées les 21/07/2026 |
| Artefact téléchargeable | aucun XLSX/CSV public constaté ; la ressource est pour l’instant une fiche interactive et du texte copiable |
| Build, navigateur réel, liens, accessibilité, pixels/tags, CRM, consentement, production, sitemap, indexation | non vérifiés dans ce rapport |
| Calculs | les ratios de cohorte sont cohérents ; aucun scénario complet de rentabilité, valeur importée ou sensibilité |

Le présent rapport sépare les constats de code des faits produit Google et ne déclare ni correction, ni publication, ni indexation.

## 2. Forces à préserver

- L’exemple initial met le dirigeant dans une scène reconnaissable : 72 événements publicitaires, 68 demandes reçues, 60 uniques, 18 qualifiées, 9 devis, 4 ventes.
- « Une conversion est une action choisie par l’annonceur » est une définition simple et honnête ; la page évite l’erreur grave « conversion = client ».
- La chaîne `sent → received → unique → qualified → quote → sale → margin` possède une preuve, un système de référence et une limite explicite à chaque étape.
- La différence entre action principale et secondaire, y compris l’exception des objectifs personnalisés, est traitée avec une source Google primaire.
- Les cinq états `envoyé → accepté → rapproché → attribué → visible` empêchent de confondre un lot technique et une vente.
- GCLID/GBRAID/WBRAID, `case_id`, ID de transaction et ID de lot sont volontairement séparés ; le hachage n’est pas présenté comme de l’anonymisation.
- Le protocole comporte un cas nominal et des cas négatifs (double soumission, refus, import rejeté, annulation, double source Ads/GA4).
- L’outil ne transmet pas les saisies, affiche `Inconnu` au lieu de zéro et permet de copier une synthèse sans demander d’e-mail.
- Le CTA promet un diagnostic du premier écart et accepte la conclusion « ne rien modifier » : excellente confiance commerciale.
- Le texte distingue faits Google, méthode Hagnéré Code, hypothèses fictives et limites juridiques ; cette discipline est rare dans les guides concurrents.

## 3. Matrice des axes

| Axe | État observé | Évaluation |
|---|---|---|
| Ouverture humaine | 72 → 68 → 60 → 18 → 9 → 4 | très fort |
| Vocabulaire non technique | termes traduits et tableaux | très fort |
| Chaîne métier | jusqu’à vente et marge | très fort, opportunité/contrat manquants |
| Formulaires et appels | principes de réception et suivi d’appel | P1 : mesures d’appel, durée, appels manqués, import |
| Ads/GA4/CRM | balise, événement GA4 et retour CRM expliqués | P1 : contrat de données et réconciliation reproductible |
| Identifiants/doublons | bonnes distinctions conceptuelles | P1 : UTM, event ID, navigateur/serveur, corrections |
| Consentement/CNIL | limite claire et Consent Mode cité | P1 : états `ad_storage`, `ad_user_data`, `ad_personalization`, CMP |
| Attribution | dates, fenêtres et modélisation | P1 : incrémentalité, brand, cross-canal |
| Qualité et capacité | demandes hors cible évoquées | P1 : spam, SLA, no-show, capacité, vitesse de rappel |
| Économie | 72 → 4 et marge fictive | P1 : CPQL/CAC/payback, valeur, devise, TCO, sensibilité |
| Outil/ressource | fiche interactive locale | bon ; XLSX/CSV non livré |
| Conversion | CTA sobre, sans promesse de résultat | très fort |
| SEO/QA prouvée | metadata, Article, breadcrumb dans le code | P1 : rendu réel, FAQ structurée, liens et indexation non prouvés |

## 4. P1 — corrections nécessaires avant d’en faire la référence

### P1-01 — Ajouter les étapes opportunité, contrat, paiement et correction

Pour un dirigeant B2B, `devis → vente` est trop court. Ajouter au moins `opportunité ouverte`, `contrat signé`, `facture émise`, `paiement reçu`, `annulation/remboursement`. Une vente signée mais impayée ne porte pas la même décision qu’une vente encaissée. Chaque étape doit conserver statut, date, devise, responsable et preuve sans transformer une estimation en réalité.

### P1-02 — Mettre à jour la migration Google Ads/Data Manager de juin 2026

La page renvoie vers l’import « actuel », mais ne dit pas clairement qu’à compter du 15 juin 2026 les imports hors ligne et les conversions avancées pour prospects migrent vers la Data Manager API, avec blocage de la Google Ads API hors accès `legacy` autorisé. Elle doit aussi expliquer l’unification progressive Web/Leads, les connexions Data Manager/tiers et le risque de panne d’un ancien connecteur. Source à revalider : [Google — mise à jour des conversions avancées](https://support.google.com/google-ads/answer/16884284?hl=en), [Google — upgrade offline imports](https://support.google.com/google-ads/answer/14274408?hl=en).

### P1-03 — Décrire le contrat de données minimal

Le registre conceptuel est excellent, mais le lecteur ne sait pas quels champs demander à son intégrateur. Ajouter un tableau : `case_id` interne, `event_id`, `transaction_id`, GCLID/GBRAID/WBRAID, UTM, nom d’action, valeur, devise, fuseau, date/heure du clic, date/heure de l’étape, statut CRM, source, consentement, motif de rejet et identifiant de lot. Préciser lesquels restent internes et lesquels peuvent être transmis.

### P1-04 — Distinguer navigateur, serveur et source canonique

La page avertit contre Ads + GA4 en double, mais ne traite pas le double déclenchement navigateur/serveur ni la déduplication par `event_id`/transaction. Ajouter le dessin d’un seul événement métier avec copies techniques possibles, puis une règle : un système de référence, une action principale candidate, les autres en contrôle. L’acceptation d’un import ne prouve toujours ni l’attribution ni la vente.

### P1-05 — Détailler les conversions avancées pour prospects sans exagérer le taux de correspondance

GCLID seul ne couvre pas tous les parcours. Expliquer quand Google utilise une donnée first-party fournie et hachée, qu’une correspondance peut échouer, que le hachage reste une donnée personnelle pseudonymisée et qu’aucun « taux de match » ne garantit la rentabilité. Ajouter une checklist de formatage, finalité, accès, conservation et suppression. Sources : [Google — enhanced conversions for leads](https://support.google.com/google-ads/answer/15713840?hl=en), [CNIL — pseudonymisation](https://www.cnil.fr/fr/identifier-les-donnees-personnelles).

### P1-06 — Rendre le Consent Mode testable et précis

Le texte dit correctement que le mode Consentement n’est pas une bannière, mais le dirigeant ne voit pas les états à contrôler. Ajouter `ad_storage`, `analytics_storage`, `ad_user_data` et `ad_personalization`, puis un tableau avant choix / acceptation / refus / retrait, avec CMP, Tag Assistant, effets attendus et limite juridique. La modélisation agrégée ne doit jamais être copiée comme une ligne CRM. Sources : [Google — consent types](https://support.google.com/analytics/answer/13802165?hl=en), [CNIL — cookies et traceurs](https://www.cnil.fr/fr/les-cookies-et-autres-traceurs).

### P1-07 — Traiter les appels comme un vrai canal de conversion

La FAQ affirme qu’un outil de suivi d’appel peut associer une source, mais ne donne aucun critère : appel décroché, durée minimale, motif, appel manqué rappelé, doublon, numéro masqué, transfert, réservation et vente en magasin. Ajouter une mini-cohorte d’appels avec `appel reçu → conversation utile → rendez-vous → vente`, en séparant appels publicitaires, clients existants et tests.

### P1-08 — Rapprocher Ads, GA4, CRM et comptabilité sur une même cohorte

La page explique les différences de dates, mais ne fournit pas de tableau de réconciliation avec période, fuseau, colonne Ads, événement GA4, statut CRM, écritures de vente, remboursements et délai de traitement. Ajouter une procédure d’export datée et une règle pour `unknown`, `modeled`, `estimated`, `rejected` et `unattributed`. Ne pas comparer une colonne « par date du clic » à un chiffre d’affaires par date d’encaissement.

### P1-09 — Ajouter attribution et incrémentalité

Le guide explique que la causalité parfaite n’est pas prouvée, sans donner de méthode. Ajouter brand/nonbrand, campagne concurrente, direct, SEO, remarketing, cross-device et fenêtre post-clic/post-vue. Puis proposer un test prudent : zone témoin, holdout, coupure documentée ou comparaison avant/après avec saisonnalité. Écrire « attribué selon le modèle » et non « créé par Google Ads ».

### P1-10 — Mesurer les faux leads, la fraude et la capacité de traitement

Ajouter spam/bot, demandes hors zone, formulaire incomplet, lead revendu, appel sans réponse, no-show, client déjà connu, test d’équipe et doublon inter-canal. Ajouter délai médian de rappel, taux de contact, capacité hebdomadaire, stock, zones couvertes et SLA. Un CPL faible avec 48 h de rappel ou une équipe saturée n’est pas une victoire commerciale.

### P1-11 — Compléter les valeurs, devises, remboursements et cycles longs

Le cas fictif calcule une marge, mais pas l’import d’une valeur corrigée. Montrer valeur HT/TTC, devise et fuseau, valeur estimée versus encaissée, annulation, remboursement, abonnement, churn et marge par cohorte. Rappeler les limites Google (90 jours pour import hors ligne standard, 63 jours pour conversions avancées pour prospects) et expliquer quoi piloter en interne lorsqu’une vente arrive plus tard.

### P1-12 — Ajouter des calculs économiques reproductibles

Le lecteur a besoin de décider, pas seulement de compter. Ajouter un encadré limité au sujet : `CPQL = coût complet / prospects qualifiés`, `CAC = coût complet / ventes`, `marge après acquisition = marge contributive − média − mise en place − gestion − suivi`, `payback = CAC / marge mensuelle`. Définir unités, période, HT/TTC et coûts inclus. Ne jamais appeler le ROAS un bénéfice.

### P1-13 — Couvrir quatre scénarios et une sensibilité

Ajouter quatre mini-cas à périmètre égal : B2B long cycle, service local/appel, e-commerce avec retours, SaaS avec activation et churn. Pour chacun, faire varier CPC/CVR/qualification/closing de ±30 % et montrer que le signal optimal peut changer. Une seule cohorte 72 → 4 ne suffit pas pour une décision de budget durable.

### P1-14 — Livrer la ressource annoncée ou réduire la promesse

La recherche prévoit un **Registre de preuve des conversions Google Ads** en XLSX, CSV et éventuellement PDF, avec onglets Définitions, Réconciliation, Journal de test et Exemple fictif. Dans l’état observé, seul l’outil inline est disponible. Livrer le fichier fictif sans données personnelles, le tester dans Excel/LibreOffice/Numbers et le lier depuis la page ; sinon annoncer explicitement « modèle à copier » pour ne pas créer une attente de téléchargement.

### P1-15 — Prouver la couche SEO et le rendu avant publication

Le code montre `Article` et `BreadcrumbList`, mais aucun test de Rich Results, canonical, sitemap, liens cassés, FAQ visible, accessibilité clavier, 320–1600 px ou performance n’est joint. Vérifier en navigateur réel : outil utilisable au clavier et au mobile, états vide/erreur/copie, tableaux sans débordement, CTA, balisage et route. Si la FAQ doit être éligible à un affichage enrichi, produire un `FAQPage` cohérent ; sinon ne pas revendiquer ce résultat.

## 5. P2 — améliorations secondaires

1. Ajouter un glossaire court : conversion, événement, prospect qualifié, GCLID, Data Manager, Consent Mode, attribution, incrémentalité, marge.
2. Ajouter un schéma visuel `clic → demande → qualification → opportunité → encaissement → marge`.
3. Ajouter un cas « bon tracking, mauvaise offre » et un cas « bon commercial, mesure cassée ».
4. Ajouter une check-list de réunion entre direction, commerce, marketing et développeur.
5. Ajouter la règle de gel et de retour arrière des enchères avec propriétaire et date.
6. Ajouter une table de conservation des preuves, rôles d’accès et suppression.
7. Prévoir une version imprimable de la fiche et des couleurs non indispensables.
8. Ajouter une colonne d’incertitude pour les petites cohortes et les ventes encore ouvertes.
9. Ajouter une note sur les conversions Google modélisées et les délais de stabilisation GA4.
10. Relier les guides voisins sans réécrire les chapitres coût par lead, landing et audit Ads.

## 6. Scénario chiffré à intégrer

**Exemple illustratif fictif, périmètre identique :** 3 000 € de média, 1 000 € de clics Google à 3 €, 60 formulaires dont 18 qualifiés et 4 ventes ; 4 000 clics sur une autre cohorte, 120 formulaires dont 12 qualifiés et 3 ventes. Coûts hors média : 1 200 € pour la première cohorte, 2 000 € pour la seconde. Marge contributive par vente : 2 000 €.

- cohorte A : coût complet `3 000 + 1 200 = 4 200 €`, CPQL `4 200 / 18 = 233,33 €`, CAC `4 200 / 4 = 1 050 €`, marge contributive `4 × 2 000 = 8 000 €`, solde après acquisition `3 800 €` ;
- cohorte B : coût complet `3 000 + 2 000 = 5 000 €`, CPQL `5 000 / 12 = 416,67 €`, CAC `5 000 / 3 = 1 666,67 €`, marge contributive `6 000 €`, solde `1 000 €`.

Ces chiffres ne sont ni benchmark ni preuve d’incrémentalité. Il faut dédupliquer les personnes exposées aux deux canaux, retirer les ventes qui auraient eu lieu sans publicité, attendre le cycle complet, compter les remboursements et vérifier la capacité de traitement. Une formule sans période, devise, marge et coûts inclus est refusée.

## 7. Benchmark international de couverture

| Marché / source | Couverture utile observée | Axe à reprendre | Limite |
|---|---|---|---|
| France — [NomadClick, guide du suivi](https://nomadclick.com/blog/guide-suivi-conversions-google-ads/) | création d’actions, balise et GTM | captures pas à pas, mais conclure par preuve CRM | tutoriel d’agence, profondeur économique limitée |
| France — [AdsBack, suivi avancé](https://www.ads-back.com/blog/suivi-avance-des-conversions-google-ads-guide-complet) | navigateur, serveur, e-commerce, offline | architectures et erreurs courantes | angle technique, peu de décision dirigeant |
| France — [Zesto, test GTM](https://agence-zesto.com/blog/sea/suivi-conversion-google-ads/) | déclenchement et Tag Assistant | procédure de recette accessible | vert de balise ≠ vente |
| Royaume-Uni — [Lever Digital, B2B real revenue](https://www.leverdigital.co.uk/post/offline-conversion-tracking-for-b2b-how-to-connect-your-google-ads-to-real-revenue) | GCLID, CRM, qualification et revenu | intégrer un cas B2B long cycle | recommandations commerciales à vérifier |
| Royaume-Uni — [Shopify UK, offline tracking](https://www.shopify.com/uk/blog/offline-conversion-tracking) | CRM, téléphone et ventes hors site | traiter appels et POS | généraliste e-commerce |
| États-Unis — [Search Engine Journal, offline conversions](https://www.searchenginejournal.com/track-offline-conversions-google-ads/332469/) | CRM, appels, magasin et vente hors ligne | élargir les cas d’usage | article secondaire, revalider contre Google |
| Australie — [Google Ads, enhanced web AU](https://support.google.com/google-ads/answer/13258081?hl=en-AU) | implémentation et prérequis techniques | checklist développeur distincte | documentation produit, pas rentabilité |
| DACH — [Motainment, budget Search B2B](https://motainment.de/blog/realistic-ad-budgets-for-b2b-search) | raw lead/MQL/SQL et budget | faire parler qualité et lag | chiffres auto-déclarés |

**Conclusion benchmark :** les concurrents techniques expliquent mieux certains écrans et architectures ; le guide Hagnéré Code est plus humain sur la chaîne métier et la possibilité de ne rien changer. Pour viser la meilleure couverture, il doit combiner ces procédures avec Data Manager 2026, appels, valeur/marge, attribution et une vraie ressource éditable.

## 8. Sources officielles et faits à revalider

- [Google Ads — colonnes et dates de conversion](https://support.google.com/google-ads/answer/6270625?hl=fr) : différence entre Conversions, Toutes les conversions et dates.
- [Google Ads — objectifs principaux et secondaires](https://support.google.com/google-ads/answer/11461796?hl=fr) : usage pour enchères et exception des objectifs personnalisés.
- [Google Ads — imports hors ligne](https://support.google.com/google-ads/answer/2998031?hl=en-GB), [guidelines](https://support.google.com/google-ads/answer/15081888?hl=en) : délais, doublons et flux 2026.
- [Google Ads — conversions avancées pour prospects](https://support.google.com/google-ads/answer/15713840?hl=en) et [mise à jour Data Manager](https://support.google.com/google-ads/answer/16884284?hl=en) : données first-party, migration et limites.
- [Google Ads — erreurs d’import](https://support.google.com/google-ads/answer/13321563?hl=en_USl) : ne pas comparer par date d’upload et séparer les états.
- [Google Analytics — types de consentement](https://support.google.com/analytics/answer/13802165?hl=en) et [événements modélisés](https://support.google.com/analytics/answer/10710245?hl=en) : états et estimation agrégée.
- [CNIL — cookies et traceurs](https://www.cnil.fr/fr/les-cookies-et-autres-traceurs) et [pseudonymisation](https://www.cnil.fr/fr/identifier-les-donnees-personnelles) : cadre français, sans remplacer une analyse juridique.

Requêtes de contrôle utilisées le 24/07/2026 : `Google Ads offline conversion import Data Manager API June 15 2026`, `enhanced conversions for leads 63 days`, `Google Ads conversion tracking CRM phone calls`, `Google Analytics consent mode ad_user_data`. Les liens produits et seuils sont dynamiques : revalider avant toute nouvelle édition.

## 9. Scorecard et conditions de sortie

| Axe | Note | Justification |
|---|---:|---|
| Plume et ouverture | 10/10 | scène et question du dirigeant immédiatement lisibles |
| Vocabulaire et pédagogie | 9/10 | termes traduits, limites visibles, peu de jargon gratuit |
| Chaîne métier et décision | 9/10 | registre et décision réversible très forts, étapes contrat/paiement à ajouter |
| Implémentation Ads/GA4/CRM | 8/10 | choix de source et import expliqués, contrat de données incomplet |
| Identifiants/déduplication | 8/10 | distinctions rares et utiles, navigateur/serveur et event ID absents |
| Consentement et données | 8/10 | CNIL et limites présents, états détaillés à ajouter |
| Attribution/incrémentalité | 6/10 | écarts expliqués, méthode de test absente |
| Économie/scénarios | 6/10 | une cohorte et une marge, pas de CAC/payback/TCO/sensibilité |
| Outil/ressource/conversion | 9/10 | outil local et CTA honnête, XLSX non livré |
| SEO/QA prouvée | 7/10 | metadata et JSON-LD dans le code, tests réels absents |
| **Total** | **84/100** | excellente base, 14 P1 avant une prétention de référence |

Déclarer le guide prêt seulement après :

1. mise à jour Data Manager/API 2026 et revalidation de tous les délais ;  
2. contrat de données, appels, navigateur/serveur, déduplication, valeurs et corrections documentés ;  
3. consentement/CMP testé dans ses quatre états et limite CNIL maintenue ;  
4. Ads/GA4/CRM/comptabilité réconciliés sur une cohorte avec attribution et incrémentalité explicitement séparées ;  
5. CPQL, CAC, marge, payback, quatre scénarios, sensibilité et capacité calculés ;  
6. XLSX/CSV fictif livré et vérifié, ou promesse de ressource retirée ;  
7. build, rendu 320–1600 px, clavier, liens, canonical, Article/Breadcrumb/FAQ éventuelle, sitemap et indexation vérifiés séparément.

**État après cet audit :** rapport produit uniquement. Aucun guide, registre, recherche, build, commit, push ou déploiement n’a été modifié.

## 10. Clôture éditoriale locale après correction — 25 juillet 2026

Les quatorze P1 ci-dessus ont été traitées dans une réécriture complète :
chaîne jusqu'au paiement et à la marge, contrat de données, déduplication,
consentement, cinq mécanismes téléphoniques, rapprochement, corrections,
incrémentalité, capacité commerciale et scénarios économiques.

- page gelée :
  `de36288f33c8bdb50fdd94642f3ef77232fc69553eedf1de23187f717c370470` ;
- P3 indépendante : **98/100, P0/P1 = 0** ;
- P4 humaine simulée indépendante : **95/100, P0/P1/P2 éditoriaux = 0** ;
- tests : 48/48 propres au guide et à l'outil, plus 10/10 sur le registre ;
- TypeScript, ESLint, Prettier et contrôle du diff : réussis ;
- reçus :
  [P3 factuelle](../reviews/suivi-conversions-google-ads-p3-facts.md) et
  [P4 humaine](../reviews/suivi-conversions-google-ads-p4-human.md).

Restent ouverts hors contenu : BAT navigateur réel, lecteur dirigeant externe,
production, sitemap, indexation et classement. Le contrôle global est également
bloqué à 394/395 par les anciens reçus V1 du registre partagé ; ils ne sont pas
réécrits.
