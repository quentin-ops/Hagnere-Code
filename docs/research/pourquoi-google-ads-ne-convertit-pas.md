# Dossier de travail — pourquoi Google Ads ne convertit pas

## Journal des quatre passes

Propriétaire éditorial unique : agent principal Codex.

| Passe                        | État                     | Date       | Responsable                       | Snapshot     | Blocages |
| ---------------------------- | ------------------------ | ---------- | --------------------------------- | ------------ | -------- |
| 1. Recherche                 | Terminée — porte validée | 2026-07-21 | Codex + vérification indépendante | manifeste P1 | aucun    |
| 2. Rédaction et intégration  | Terminée — porte validée | 2026-07-21 | Codex                             | manifeste P2 | aucun    |
| 3. Contre-audit indépendant  | Terminée — porte validée | 2026-07-21 | deux relecteurs distincts         | manifeste P3 | aucun    |
| 4. Plume humaine et contrôle | Terminée — porte validée | 2026-07-21 | Codex                             | manifeste P4 | aucun    |

## 1. Fiche d'identité

```text
Slug : pourquoi-google-ads-ne-convertit-pas
Statut actuel : publiable — validation éditoriale déléguée
Requête principale qualitative : pourquoi Google Ads ne convertit pas
Moment du parcours : diagnostiquer une dépense déjà active avant d'ajouter du budget
Lecteur précis : dirigeant ou indépendant ayant des clics ou des « conversions » dans Google Ads, mais trop peu de vrais prospects, clients ou marge
Situation déclenchante : l'argent part chaque semaine et personne ne sait si le problème vient de Google, de la page, du formulaire, du suivi commercial ou de la mesure
Décision principale après lecture : corriger le premier endroit où le résultat réel disparaît, puis seulement relancer ou augmenter la dépense
Niveau de connaissance au départ : sait lire dépenses, clics et conversions, mais ne maîtrise pas le vocabulaire publicitaire
5 questions indispensables : Google mesure-t-il la bonne action ; le contact arrive-t-il réellement ; les bonnes recherches déclenchent-elles les annonces ; la page répond-elle à ces recherches ; les contacts deviennent-ils ventes rentables
3 objections ou craintes : « il faut juste plus de budget » ; « l'algorithme va apprendre » ; « le site est forcément responsable »
Action utile sans contact commercial : remplir un relevé commun Ads/site/appels/CRM/ventes pour une période compatible avec le cycle de vente
CTA possible : faire examiner le premier écart documenté, sans promettre une relance ou une gestion mensuelle
Hors périmètre : audit exhaustif du compte, tutoriel de balisage, benchmark de conversion, garantie de leads, choix SEO/Ads, comparaison de devis
Date de la recherche : 2026-07-21
Responsable de la synthèse : Codex
```

## 1 bis. Contrat de langage humain

- Phrase exacte du lecteur : « Google me facture des clics et m'affiche même
  parfois des conversions, mais je n'ai pas de nouveaux clients. Où part
  l'argent ? »
- Réponse attendue en une phrase : ne changez pas tout à la fois ; trouvez
  d'abord l'endroit précis où un clic cesse de devenir un contact reçu, un
  prospect sérieux, une vente puis de la marge.
- Terme central expliqué sans jargon : une conversion Google Ads est l'action
  que l'entreprise a choisi de compter ; ce n'est pas automatiquement un client.
- Mots ordinaires : clic, appel reçu, formulaire arrivé, bonne demande, devis,
  vente, marge, recherche tapée, page, réponse commerciale.
- Mots à traduire : conversion principale, terme de recherche, CRM, ROAS,
  attribution, Consent Mode.
- Mots d'agence à éviter : tunnel, funnel, scaler, learning, nurturing,
  optimisation holistique, lead gen, tracking server-side.
- Projet des 150 premiers mots : décrire la facture, les clics et le silence du
  téléphone ; donner les quatre situations possibles et la première action.
- Décision après l'ouverture : ne pas augmenter le budget ni refaire la page
  avant d'avoir rapproché les chiffres d'un résultat réel.
- CTA formulé comme résultat : identifier le premier écart, les données à
  corriger et le test suivant.

### Test sujet, action, résultat

| Formulation abstraite         | Qui agit ?           | Action concrète                                | Résultat lecteur                       | Formulation retenue                                                                           |
| ----------------------------- | -------------------- | ---------------------------------------------- | -------------------------------------- | --------------------------------------------------------------------------------------------- |
| « corriger le tracking »      | l'entreprise         | envoie un vrai formulaire et suit son arrivée  | sait si la mesure correspond au réel   | « Envoyez une demande test et vérifiez-la dans Google Ads, la boîte de réception et le CRM. » |
| « qualifier le trafic »       | le responsable Ads   | lit les recherches et les rapproche des ventes | repère les clics sans intention        | « Lisez les recherches payées et notez celles qui ont produit une demande utile. »            |
| « optimiser la landing page » | l'équipe             | rejoue l'action sur mobile                     | trouve le blocage exact                | « Sur un téléphone, cherchez l'offre, le prix utile et le moyen de demander un devis. »       |
| « remonter les conversions »  | l'équipe commerciale | renseigne prospect qualifié, vente et valeur   | Google apprend d'un résultat utile     | « Renvoyez vers Google l'issue connue dans le CRM, avec une définition écrite. »              |
| « calculer le ROAS »          | le dirigeant         | retire coûts et applique la marge              | sait si les ventes créent de la valeur | « Comparez la marge des ventes attribuables au coût complet de l'acquisition. »               |

## 2. Cannibalisation

| Page existante ou future                       | Intention détenue                              | Différence de ce guide                                                    | Maillage prévu                                     |
| ---------------------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------- |
| `/guides/audit-google-ads-que-verifier`        | audit complet avant hausse ou reprise          | part d'un symptôme actif et cherche le premier écart, pas tout le compte  | lien vers l'audit si plusieurs écarts apparaissent |
| `/guides/seo-ou-google-ads`                    | choisir où investir                            | suppose que Google Ads est déjà lancé                                     | lien si le canal initial reste en question         |
| `/guides/prix-gestion-google-ads`              | comprendre média, honoraires et coûts          | ne donne aucun tarif ; explique pourquoi la dépense ne produit pas encore | lien vers coût complet après diagnostic            |
| `/guides/pourquoi-mon-site-ne-convertit-pas`   | diagnostiquer l'ensemble d'un site             | commence par les données Ads et remonte jusqu'à la vente                  | lien si la page ou l'offre est le premier écart    |
| futur `/guides/leads-google-ads-non-qualifies` | corriger des contacts déjà reçus mais inutiles | couvre ici aussi zéro contact, faux comptage, ventes et marge             | futur lien au niveau qualification                 |
| futur `/guides/suivi-conversions-google-ads`   | concevoir et implémenter un plan de mesure     | vérifie ici si la mesure actuelle raconte la vérité                       | lien futur seulement après publication             |

**Justification d'une URL distincte :** le lecteur ne demande pas « comment
auditer mon compte ? », mais « pourquoi ma dépense active ne produit-elle pas de
clients ? ». La page répond par le premier écart observé et une correction à la
fois.

## 3. Demande et vocabulaire du lecteur

La demande a été observée qualitativement dans les résultats francophones le 21
juillet 2026. Aucun volume, taux moyen ou seuil de clics n'est revendiqué.

Formulations à couvrir :

- « Google Ads dépense mais ne rapporte rien » ;
- « beaucoup de clics mais aucun formulaire » ;
- « Google compte des conversions mais je ne reçois rien » ;
- « les leads Google Ads ne sont pas qualifiés » ;
- « les appels sont comptés mais personne ne signe » ;
- « faut-il augmenter le budget pour que l'algorithme apprenne ? » ;
- « est-ce la campagne ou la page qui ne fonctionne pas ? ».

Quatre symptômes à nommer dès l'ouverture :

1. Google affiche zéro conversion, mais des demandes arrivent : mesure absente
   ou attribution à vérifier ;
2. Google affiche des conversions, mais aucun contact n'arrive : mauvaise
   action comptée ou transmission cassée ;
3. les contacts arrivent, mais ils sont hors sujet : recherches, promesse,
   zone, offre ou formulaire à examiner ;
4. les prospects sont sérieux, mais ne deviennent pas des ventes rentables :
   offre, délai de réponse, suivi, prix, taux de signature ou marge.

## 4. Carte concurrentielle qualitative

| Page observée                                                                                                                     | Angle dominant                       | Bon point                           | Manque décisionnel                                             | Conflit d'intérêt  |
| --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------------------------------- | -------------------------------------------------------------- | ------------------ |
| [Webbby — campagnes qui ne convertissent pas](https://www.webbby.fr/blog/pourquoi-mes-campagnes-google-ads-ne-convertissent-pas/) | mesure, mots-clés et page            | ouverture proche du problème vécu   | conclut vite à trois causes ; peu de rapprochement avec ventes | agence             |
| [Agathe Leads — six erreurs](https://agatheleads.com/blog/pourquoi-campagnes-google-ads-ne-convertissent-pas)                     | trafic, page et qualité des contacts | formulation accessible              | méthode commerciale complète et marge peu visibles             | vend l'acquisition |
| [Vincent Duquesne — campagnes sans leads](https://www.vincentduquesne.net/campagnes-ne-generent-pas-de-leads.html)                | diagnostic dans un ordre défini      | insiste sur l'ordre avant le budget | méthode voisine à différencier par les quatre symptômes        | consultant         |
| [Google Ads — état du suivi](https://support.google.com/google-ads/answer/12674892?hl=fr)                                         | dépannage des actions de conversion  | tests concrets et états actuels     | documentation produit, pas décision économique                 | éditeur            |

**Angle mort commun :** beaucoup de contenus s'arrêtent au formulaire ou à la
page. Une entreprise peut pourtant compter correctement un formulaire qui
n'arrive pas, recevoir un appel qui n'est pas qualifié, conclure une vente sans
marge ou répondre trop tard.

**Valeur originale :** un diagnostic par symptômes, suivi d'un relevé unique
du clic à la marge. Chaque section répond à « qu'est-ce que je dois comparer
maintenant ? » et interdit de modifier plusieurs maillons simultanément.

## 5. Fiche de preuves

| Affirmation utilisable                                                                                                                                                                                  | Source primaire et passage utile                                                                                                                                                               | Nature / limite                                                 | Consultation | Confiance | Emplacement visible       | Conséquence lecteur                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ------------ | --------- | ------------------------- | ---------------------------------------------------------------------------- |
| Une conversion est une action que l'annonceur a définie comme utile : achat, appel, inscription, téléchargement ou autre. Elle ne prouve donc pas par elle-même une vente.                              | [Google Ads — conversions](https://support.google.com/google-ads/answer/6308?hl=fr)                                                                                                            | définition du produit                                           | 2026-07-21   | élevée    | ouverture                 | renommer chaque conversion avec l'action réellement comptée                  |
| Les actions principales alimentent normalement la colonne « Conversions » et les enchères ; les secondaires servent surtout à l'observation, avec des exceptions pour certains objectifs personnalisés. | [Google Ads — principales et secondaires](https://support.google.com/google-ads/answer/10993988?hl=fr)                                                                                         | configuration actuelle ; exception à expliquer                  | 2026-07-21   | élevée    | mesure                    | retirer des enchères les actions qui ne représentent pas le résultat attendu |
| Google distingue des catégories « prospect qualifié » et « prospect converti » alimentées par le CRM ou le système interne.                                                                             | [Google Ads — prospects qualifiés et convertis](https://support.google.com/google-ads/answer/11459091?hl=fr)                                                                                   | dépend de la définition de l'annonceur ; ne prouve pas la marge | 2026-07-21   | élevée    | qualification             | écrire les définitions et les rapprocher des ventes réelles                  |
| Pour les appels, un clic sur le numéro peut ne mesurer que le clic ; une durée minimale ne prouve pas la qualité de l'échange.                                                                          | [Google Ads — suivi des appels](https://support.google.com/google-ads/answer/6100664?hl=fr)                                                                                                    | fonctionnement du suivi des appels                              | 2026-07-21   | élevée    | contact reçu              | rapprocher appel compté, appel reçu, qualification et issue commerciale      |
| Le rapport sur les termes de recherche montre les requêtes ayant déclenché les annonces, mais masque ou regroupe certaines requêtes à faible activité.                                                  | [Google Ads — termes de recherche](https://support.google.com/google-ads/answer/2472708?hl=fr)                                                                                                 | rapport non exhaustif                                           | 2026-07-21   | élevée    | trafic                    | examiner ce qui est visible sans prétendre couvrir tous les clics            |
| Une correspondance exacte peut inclure des formulations de même sens ou de même intention, pas uniquement le texte identique.                                                                           | [Google Ads — options de correspondance](https://support.google.com/google-ads/answer/7478529?hl=fr)                                                                                           | règles actuelles des mots-clés                                  | 2026-07-21   | élevée    | trafic                    | lire les recherches réelles au lieu de déduire le ciblage du nom du mot-clé  |
| Tag Assistant et les états de suivi permettent de tester si une action est envoyée.                                                                                                                     | [Google Ads — état du suivi](https://support.google.com/google-ads/answer/12674892?hl=fr)                                                                                                      | diagnostic technique, pas vérité commerciale                    | 2026-07-21   | élevée    | mesure                    | vérifier séparément l'envoi de l'action                                      |
| Les colonnes habituelles rattachent la conversion à la date du clic ; des colonnes par date de conversion permettent une autre lecture.                                                                 | [Google Ads — date de conversion](https://support.google.com/google-ads/answer/6270625?hl=fr)                                                                                                  | choix de colonne et de période à expliciter                     | 2026-07-21   | élevée    | mesure                    | comparer CRM et Ads sur la date réellement choisie                           |
| Les conversions améliorées utilisent des données de première partie hachées en SHA-256 ; le hachage n'est pas synonyme d'anonymisation ni d'exemption juridique.                                        | [Google Ads — conversions améliorées](https://support.google.com/google-ads/answer/9888656?hl=fr) et [CNIL — données personnelles](https://www.cnil.fr/fr/identifier-les-donnees-personnelles) | mesure et droit à distinguer                                    | 2026-07-21   | élevée    | limites mesure            | ne pas vendre une mesure « parfaite » ou « anonyme »                         |
| Consent Mode transmet des états et peut permettre de la modélisation ; il ne recueille pas lui-même le consentement et ne remplace pas une bannière ou une CMP.                                         | [Google Tag Platform — Consent Mode](https://developers.google.com/tag-platform/security/concepts/consent-mode?hl=fr)                                                                          | fonctionnement produit ; conformité à apprécier séparément      | 2026-07-21   | élevée    | limites mesure            | distinguer conversion observée et conversion modélisée                       |
| En France, les traceurs non essentiels demandent en principe un consentement préalable, avec des exemptions limitées selon la finalité et la configuration.                                             | [CNIL — cookies et traceurs](https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/FAQ)                                                                                             | droit applicable à examiner au cas réel                         | 2026-07-21   | élevée    | limites mesure            | ne pas affirmer que toute mesure est exemptée ou interdite                   |
| Google définit le ROI à partir du bénéfice et des coûts ; le chiffre d'affaires attribué à la publicité ne prouve pas la rentabilité.                                                                   | [Google Ads — mesurer le ROI](https://support.google.com/google-ads/answer/14090?hl=fr)                                                                                                        | méthode générale, coûts réels propres à l'entreprise            | 2026-07-21   | élevée    | vente et marge            | comparer marge attribuable et coût complet, pas seulement ROAS               |
| Depuis le 15 juin 2026, certaines intégrations d'import de conversions hors connexion sont orientées vers l'API Data Manager, avec des cas hérités limités.                                             | [Google Ads — import hors connexion](https://support.google.com/google-ads/answer/2998031?hl=fr)                                                                                               | évolution technique ciblée, pas suppression de toute l'API Ads  | 2026-07-21   | élevée    | sources/limites seulement | faire revalider une ancienne intégration sans alarmer le lecteur             |

### Distinction factuelle, déduction et recommandation

- **Fait documenté :** Google optimise les actions principales définies pour la
  campagne selon la configuration applicable.
- **Déduction opérationnelle :** si une visite de page, un clic sur un bouton
  ou un mauvais formulaire est l'action principale, les enchères peuvent
  chercher davantage de cette action sans produire davantage de clients.
- **Recommandation éditoriale :** rapprocher chaque action Google d'un contact
  reçu, d'une qualification, d'une vente et de la marge avant d'augmenter le
  budget.

### Contradictions et affirmations interdites

- ne pas assimiler conversion, contact, prospect qualifié, vente et marge ;
- ne pas présenter le rapport des termes de recherche comme exhaustif ;
- ne pas dire que « correspondance exacte » signifie texte strictement
  identique ;
- ne pas confondre donnée hachée et donnée anonyme ;
- ne pas affirmer que Consent Mode assure la conformité juridique ;
- ne pas présenter une conversion modélisée comme directement observée ;
- ne pas promettre qu'un nouvel objectif, une enchère ou un budget corrige la
  campagne ;
- ne pas imposer un taux de conversion, un nombre de clics ou une durée
  universelle ;
- ne pas conclure à la fraude au clic sans éléments spécifiques ;
- ne pas dire que toute l'API Google Ads a cessé d'accepter des conversions le
  15 juin 2026.

## 6. Empreinte éditoriale à ne pas reproduire

| Guide voisin                       | Ouverture                      | Progression                           | Dispositif principal       | Conclusion                             |
| ---------------------------------- | ------------------------------ | ------------------------------------- | -------------------------- | -------------------------------------- |
| audit Google Ads                   | hausse de budget ou reprise    | six questions couvrant tout le compte | registre Ads/CRM           | autoriser ou refuser une hausse        |
| SEO ou Google Ads                  | choix d'investissement initial | comparaison puis quatre décisions     | cartes et calcul de coût   | choisir Ads, SEO, les deux ou attendre |
| prix gestion Google Ads            | question de budget             | coûts, prix publics et simulations    | plusieurs tableaux/calculs | comparer un devis complet              |
| pourquoi mon site ne convertit pas | visiteurs sans demandes        | diagnostic général du site            | arbre offre/page/suivi     | corriger le site                       |

Choix du nouveau guide :

```text
Tension : l'argent est dépensé mais le dirigeant ne voit pas le résultat réel
Ouverture : quatre symptômes racontés avec les mots du lecteur
Progression : partir du résultat absent et remonter jusqu'au premier écart documenté
Artefact signature : relevé de rapprochement Ads → contact reçu → qualification → vente → marge
Rythme : phrases courtes, questions de contrôle et exemples contrastés ; pas de cours Google Ads
Place du CTA : après que le lecteur a complété le relevé ou nommé l'information manquante
Conclusion : une seule correction à tester, avec date et résultat attendu
Différences : symptôme avant checklist ; aucun score ; aucun prix ; pas d'audit exhaustif ; le suivi commercial et la marge ont le même poids que la plateforme
```

## 7. Plan annoté

| Section provisoire                                  | Question résolue                                                | Preuve ou exemple                                                | Décision produite                                   | Format                              |
| --------------------------------------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------- | --------------------------------------------------- | ----------------------------------- |
| Quatre situations derrière « ça ne convertit pas »  | de quoi parle réellement le dirigeant ?                         | 0 compté / compté sans contact / mauvais contacts / pas de vente | choisir le point de départ                          | quatre cartes                       |
| Une conversion Google n'est pas encore un client    | quelle action Google compte-t-il ?                              | définitions principales/secondaires                              | renommer ou corriger l'action                       | exemple simple                      |
| Le formulaire ou l'appel arrive-t-il ?              | la demande existe-t-elle hors de Google ?                       | envoi test, boîte, téléphone et CRM                              | réparer transmission ou mesure                      | parcours daté                       |
| Payez-vous les bonnes recherches ?                  | les clics viennent-ils d'une intention utile ?                  | termes visibles, correspondances et zones                        | exclure, resserrer ou reformuler                    | cartes recherche/réponse            |
| La page répond-elle à la promesse ?                 | la personne comprend-elle quoi faire ?                          | recherche, annonce et page lues sur mobile                       | corriger une rupture précise                        | test des 30 secondes sans seuil SEO |
| Les contacts deviennent-ils des prospects sérieux ? | offre, formulaire ou qualification attirent-ils le bon public ? | motifs de refus et origine                                       | corriger promesse, questions ou ciblage             | relevé motifs                       |
| Le suivi commercial transforme-t-il la demande ?    | qui répond, quand et avec quelle information ?                  | appels manqués, délais observés, issue des devis                 | corriger organisation avant d'acheter plus de clics | scénario réel                       |
| Les ventes créent-elles de la marge ?               | la campagne est-elle économiquement utile ?                     | marge attribuable moins coût complet                             | maintenir, réduire, corriger ou arrêter             | formule sans benchmark              |
| Une correction à la fois                            | comment savoir ce qui a changé le résultat ?                    | hypothèse, changement, période et résultat attendu               | test réversible                                     | fiche courte                        |
| Quand demander un audit                             | quel livrable exiger ?                                          | premier écart, inconnues, accès et option simple                 | CTA honnête                                         | CTA + limites                       |

## 8. Ressource et conversion

```text
Ressource téléchargeable nécessaire : non ; le relevé copiable doit rester immédiatement utilisable
Problème résolu : réunir des chiffres qui vivent dans Google Ads, le site, le téléphone, le CRM et la comptabilité
Résultat autonome : identifier le premier écart ou la donnée manquante avant de changer la campagne
Conclusion « ne pas investir » possible : oui, si l'offre, le traitement commercial ou la marge rendent l'acquisition injustifiée
Bon fit Hagnéré Code : campagne active, accès en lecture, résultat attendu explicite, personnes capables de confirmer contacts et ventes
Mauvais fit : litige de facturation, suspicion de compromission, besoin d'avis juridique, absence totale de donnée ou de responsable commercial
Action non commerciale : remplir une ligne réelle depuis l'action Google jusqu'à la marge ou jusqu'au premier « inconnu »
CTA principal : Identifier ce qui bloque mes campagnes
Résultat après clic : recevoir une première lecture du point de rupture, des preuves manquantes et du test à lancer ; aucune promesse de leads
Données demandées : objectif, période, dépense, action comptée, nombre de contacts réellement reçus, issue commerciale si connue ; jamais d'identifiants dans le formulaire
```

## Rapport P1 — Recherche

```text
PASSE 1 TERMINÉE
Slug : pourquoi-google-ads-ne-convertit-pas
Lecteur et phrase réelle : dirigeant qui voit les dépenses et les clics mais pas de nouveaux clients
Décision : corriger le premier écart entre action comptée, contact reçu, prospect sérieux, vente et marge
Angle et forme dominante : quatre symptômes, puis un rapprochement concret du clic au résultat économique
Pages proches et différence : audit complet, prix et choix SEO/Ads ; ce guide part d'un symptôme actif et ne contrôle que ce qui permet de l'expliquer
Sources décisives : Google Ads, Google Tag Platform et CNIL revalidés le 21 juillet 2026
Incertitudes exclues : taux, délai, nombre de clics, budget minimum, promesse de leads et causalité automatique
Action autonome et CTA : compléter une ligne jusqu'au premier inconnu ; demander ensuite un diagnostic ciblé
Plan : symptôme, action comptée, contact reçu, recherche, page, qualification, vente, marge, test et audit
Snapshot : manifeste P1
```

## Rapport P2 — Rédaction et intégration

```text
PASSE 2 TERMINÉE
Fichiers créés ou modifiés : page, image sociale, registre, dossier de recherche et deux liens entrants
Ouverture et réponse : facture, clics et absence de clients décrits avec les mots du dirigeant ; conversion expliquée immédiatement ; première décision donnée dans les 150 premiers mots
Forme propre au sujet : quatre symptômes vécus, relevé commun placé avant le diagnostic, puis lecture sélective du seul cas concerné
Différence avec les guides voisins : aucun audit exhaustif du compte, aucun benchmark, aucun prix, aucun scénario client et aucun tableau large
Sources visibles : définitions et limites Google Ads, Google Tag Platform et CNIL placées au niveau des affirmations qu’elles soutiennent
Action autonome : relevé Ads vers résultat métier, arrêt au premier nombre absent ou inexplicable, puis fiche de test réversible
CTA : période, dépense, action comptée, contacts reçus et issue connue ; première lecture promise, sans promesse de leads ni demande de secret
Maillage : liens entrants depuis l’audit et le prix de gestion Google Ads ; liens sortants vers audit, conversion du site, prix, arbitrage SEO/Ads et service publicitaire
Contrôles rapides : Prettier, ESLint et TypeScript réussis ; 184/184 tests SEO réussis ; build de production et contrôle de l’artefact SEO réussis ; git diff --check réussi
Indexation pendant la chaîne : ready-for-human-review conservé, donc noindex avant contre-audit et gel du lot
Snapshot : manifeste P2
```

### Snapshot P2

| Fichier                                                                   | SHA-256                                                            |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| `src/app/guides/pourquoi-google-ads-ne-convertit-pas/page.tsx`            | `2172e955028a3595f90c2bae8b430c0c82259f6dbf51ce7efbe07289a6e42cda` |
| `src/app/guides/pourquoi-google-ads-ne-convertit-pas/opengraph-image.tsx` | `3bbfd59f19981e377806b5c0353405aa0430cfa1a48f4168e4f9a678392e65cc` |
| `src/lib/guides.ts`                                                       | `5abae73a4a986ad0e0b6beb30b58e3d27fc35b9f6eb6af3746572a4c8106a775` |
| `src/app/guides/audit-google-ads-que-verifier/page.tsx`                   | `2d2186fc183ba8525137b0e642c65a969aa1e897cd45690f188050f3387635b7` |
| `src/app/guides/prix-gestion-google-ads/page.tsx`                         | `3d218315ad7313721012bf5e57a43592591bad545282cfc214cd3a293944cab9` |
| `docs/roadmap-guides-seo.md`                                              | `44fe2ace46d1e5830886c57dac72d2481c9913bbab18a8494713400173867e4f` |

## Rapport P3 — Contre-audit indépendant

```text
PASSE 3 TERMINÉE
Snapshot d’entrée : page 2172e95…, OG 3bbfd59…, registre 5abae73…
Relecteurs distincts : oui ; un contrôle factuel et décisionnel, puis un contrôle de pédagogie humaine et d’empreinte éditoriale
P0 initial : aucun
P1 factuels corrigés : ROAS redéfini comme valeur de conversion divisée par la dépense ; date du clic et colonnes par date de conversion sourcées ; hachage distingué de l’anonymisation ; Consent Mode de base et avancé précisés
P1 de configuration corrigé : plusieurs actions principales possibles ; enchères guidées seulement selon les objectifs et la stratégie ; rôle des actions secondaires et exception de l’objectif personnalisé rétablis
P1 éditoriaux corrigés : ouverture différenciée du guide d’audit ; jargon traduit avant usage ; relevé autonome rendu remplissable ; branche hors cible et définition de conversion dédupliquées
Coupes humaines : liste de page condensée ; qualification ramenée à une définition et un motif ; répétition du diagnostic supprimée ; mauvais fits traduits en facture, piratage et conseil juridique
P2 appliqués : benchmark, périmètre, propriétaire et données de première partie remplacés par des formulations ordinaires ; FAQ budget reformulée ; mauvais fit placé avant le CTA
Revalidation factuelle finale : P0 = 0 ; P1 = 0
Revalidation éditoriale finale : P0 = 0 ; P1 = 0
Contrôles après correction : Prettier, ESLint, TypeScript, 184/184 tests SEO et git diff --check réussis
Snapshot de sortie : page 43cec57…, OG 3bbfd59…, registre 5abae73…, recherche avant rapport dfade42…
Verdict : porte P3 validée ; passage en P4 autorisé
```

### Snapshot P3

| Fichier                                                                   | SHA-256                                                            |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| `src/app/guides/pourquoi-google-ads-ne-convertit-pas/page.tsx`            | `43cec577ba29e07ff36d58a67a350dba7c615c162fa362a2ebc4ed940493b9a7` |
| `src/app/guides/pourquoi-google-ads-ne-convertit-pas/opengraph-image.tsx` | `3bbfd59f19981e377806b5c0353405aa0430cfa1a48f4168e4f9a678392e65cc` |
| `src/lib/guides.ts`                                                       | `5abae73a4a986ad0e0b6beb30b58e3d27fc35b9f6eb6af3746572a4c8106a775` |
| `docs/research/pourquoi-google-ads-ne-convertit-pas.md` (entrée P3)       | `dfade4233fc205c7551a394783dbe0ac8efef969b245c77ebb95d54a01b2baa7` |
| `src/app/guides/audit-google-ads-que-verifier/page.tsx`                   | `2d2186fc183ba8525137b0e642c65a969aa1e897cd45690f188050f3387635b7` |
| `src/app/guides/prix-gestion-google-ads/page.tsx`                         | `3d218315ad7313721012bf5e57a43592591bad545282cfc214cd3a293944cab9` |
| `docs/roadmap-guides-seo.md`                                              | `44fe2ace46d1e5830886c57dac72d2481c9913bbab18a8494713400173867e4f` |

## Rapport P4 — Plume humaine, rendu et décision

```text
PASSE 4 TERMINÉE
Verdict éditorial : publiable — validation éditoriale déléguée
Décision de publication : autorisée explicitement par le commanditaire
Test réalisé par une personne réelle : non
Score : 20/20
Lecture humaine simulée : le guide part des quatre situations que le dirigeant peut constater dans son entreprise ; il explique immédiatement qu’une conversion est une action choisie dans Google, pas automatiquement un client ; chaque branche conduit à une vérification puis à une décision
Passe anti-IA : formules d’agence, transitions génériques et répétitions de « réellement » supprimées ; vocabulaire technique traduit à sa première apparition ; répétition du diagnostic, du relevé et de la conclusion évitée
Contrôle mobile : largeurs exactes 320 et 390 px, sans débordement horizontal ; les trois fiches copiables tiennent dans la largeur ; garde-fou, CTA et FAQ restent lisibles
Contrôle large : 1024 et 1440 px, sans débordement ; hero, sommaire, quatre symptômes, relevé, branches de diagnostic, CTA et FAQ inspectés
Accessibilité fonctionnelle : un H1 ; hiérarchie de titres cohérente ; huit FAQ présentes et interaction d’ouverture vérifiée ; lien d’évitement et CTA présents ; aucun avertissement ni erreur console
SEO local : canonical exact, deux blocs JSON-LD, huit FAQ, image sociale 1200 × 630 ; noindex temporaire conservé tant que le lot de trois guides n’est pas gelé
Image sociale : question, promesse et chaîne action comptée vers marge lisibles sans coupe
Réserve explicite : aucun seuil universel de clics, taux, délai, budget ou rentabilité ; aucune garantie de leads, d’attribution parfaite ou de conformité juridique
Décision de lot : retirer le statut ready-for-human-review uniquement lors du gel commun des trois guides, après les tests complets du dépôt
Snapshot : manifeste P4
```

### Scorecard justifiée

| Axe         |      Note | Preuve dans la page                                                                       | Correction éventuelle |
| ----------- | --------: | ----------------------------------------------------------------------------------------- | --------------------- |
| Intention   |         2 | Dépense active, clics et absence de clients nommés dès l’ouverture                        | —                     |
| Décision    |         2 | Premier écart à corriger avant toute hausse de budget                                     | —                     |
| Pédagogie   |         2 | Conversion, terme de recherche, enchère, ROAS et Consent Mode expliqués au moment utile   | —                     |
| Profondeur  |         2 | Mesure, arrivée du contact, intention, page, qualification, vente et marge reliées        | —                     |
| Preuve      |         2 | Documentation Google Ads, Google Tag Platform et CNIL placée près des affirmations        | —                     |
| Comparaison |         2 | Quatre symptômes et quatre corrections différentes évitent le diagnostic unique           | —                     |
| Originalité |         2 | Relevé commun du clic à la marge, puis lecture de la seule branche concernée              | —                     |
| Style       |         2 | Mots du dirigeant, exemples concrets et absence de slogans ou de jargon non traduit       | —                     |
| Conversion  |         2 | Relevé autonome, mauvais cas avant le CTA et promesse limitée au premier point de rupture | —                     |
| SEO/produit |         2 | Métadonnées, canonical, Article/Breadcrumb, FAQ, OG et rendu responsive contrôlés         | —                     |
| **Total**   | **20/20** | Porte éditoriale et technique individuelle atteinte                                       | QA de lot à rejouer   |

### Test lecteur non technique

```text
Test réalisé par une personne réelle : non
Profil du lecteur : non disponible pendant cette production
Ce qu’il a compris comme réponse : non mesuré auprès d’une personne réelle
Décision qu’il prendrait : non mesurée auprès d’une personne réelle
Endroit où il a commencé à survoler : non mesuré auprès d’une personne réelle
Passage crédible ou trop commercial : non mesuré auprès d’une personne réelle
Termes ou passages bloquants : aucun détecté par les deux contre-audits indépendants et la relecture de plume
Questions encore sans réponse : aucune P0 ou P1 connue
Corrections appliquées : recherche officielle, deux contre-audits indépendants, réécriture, build et contrôle du vrai rendu
Décision de publication : autorisée explicitement par le commanditaire
```

### Snapshot P4

| Fichier                                                                   | SHA-256                                                            |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| `src/app/guides/pourquoi-google-ads-ne-convertit-pas/page.tsx`            | `0e5f96db5cdef3469a3f6f7a1e2260aa07247fec7d5c17ba2e30b070b92fb390` |
| `src/app/guides/pourquoi-google-ads-ne-convertit-pas/opengraph-image.tsx` | `3bbfd59f19981e377806b5c0353405aa0430cfa1a48f4168e4f9a678392e65cc` |
| `src/lib/guides.ts`                                                       | `5abae73a4a986ad0e0b6beb30b58e3d27fc35b9f6eb6af3746572a4c8106a775` |
| `docs/research/pourquoi-google-ads-ne-convertit-pas.md` (entrée P4)       | `5c8508c39de3d002345dec1413f87eda61f5376c8dcc10ad36e5548bbad139e0` |
| `src/app/guides/audit-google-ads-que-verifier/page.tsx`                   | `2d2186fc183ba8525137b0e642c65a969aa1e897cd45690f188050f3387635b7` |
| `src/app/guides/prix-gestion-google-ads/page.tsx`                         | `3d218315ad7313721012bf5e57a43592591bad545282cfc214cd3a293944cab9` |
| `docs/roadmap-guides-seo.md`                                              | `44fe2ace46d1e5830886c57dac72d2481c9913bbab18a8494713400173867e4f` |

## Gel commun du lot

Le 21 juillet 2026, le marqueur `ready-for-human-review` a été retiré après la
validation des trois dossiers et l’ajout du slug au contrôle de gouvernance.
Le snapshot commun passe 184/184 tests SEO, 328/328 tests globaux, ESLint,
TypeScript et le build de production. L’artefact vérifie 88 URL, 71 liens dans
`llms.txt`, 46 temps de lecture et 164 blocs JSON-LD. La page est donc
indexable dans l’artefact de production ; cela ne prouve ni son crawl, ni son
indexation effective, ni son classement.

### Snapshot commun final

| Fichier                                                                   | SHA-256                                                            |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| `src/app/guides/pourquoi-google-ads-ne-convertit-pas/page.tsx`            | `b98cc8fdf45292c2082ef7199a580d404f82ceec921c1aab2b09083f305a3323` |
| `src/app/guides/pourquoi-google-ads-ne-convertit-pas/opengraph-image.tsx` | `3bbfd59f19981e377806b5c0353405aa0430cfa1a48f4168e4f9a678392e65cc` |
| `src/app/guides/audit-google-ads-que-verifier/page.tsx`                   | `2d2186fc183ba8525137b0e642c65a969aa1e897cd45690f188050f3387635b7` |
| `src/app/guides/prix-gestion-google-ads/page.tsx`                         | `3d218315ad7313721012bf5e57a43592591bad545282cfc214cd3a293944cab9` |
| `src/lib/guides.ts`                                                       | `b1d1f628949d73648fdb1a3d80922f7ca71ee0f48e1388db22fb87b4671f0318` |
| `src/lib/editorial-governance.test.ts`                                    | `e79ed862c4af56ab56ed31d29d0d5a116c10db06ec5fc21dd302c34d51864ab8` |
| `docs/roadmap-guides-seo.md`                                              | `c0fc92baccd3adb3999ccc09827cd7423fc9c4933e089486bf018f91137be619` |

Le manifeste externe `manifests/lot-trois-guides-final.sha256` gèle également
les trois dossiers de recherche sans tenter de faire hacher le manifeste par
lui-même.
