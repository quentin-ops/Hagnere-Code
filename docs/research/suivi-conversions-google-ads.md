# Dossier de recherche — Suivi des conversions Google Ads

> Journal documentaire du guide **suivi-conversions-google-ads**. Les quatre
> passes sont gelées ; les deux contre-audits indépendants et le contrôle dans
> le navigateur réel ont validé les corrections. La route reste sous porte
> éditoriale jusqu’au gel global du lot.

## Journal des quatre passes

Propriétaire éditorial unique : Codex, agent racine du lot du 21 juillet 2026.

| Passe                        | État                     | Date       | Responsable                            | Snapshot                                 | Blocages                          |
| ---------------------------- | ------------------------ | ---------- | -------------------------------------- | ---------------------------------------- | --------------------------------- |
| 1. Recherche                 | Terminée — porte validée | 2026-07-21 | Agent audit_guide3 + audit indépendant | `suivi-conversions-google-ads-p1.sha256` | Aucun                             |
| 2. Rédaction et intégration  | Terminée — porte validée | 2026-07-21 | Codex                                  | `suivi-conversions-google-ads-p2.sha256` | Aucun                             |
| 3. Contre-audit indépendant  | Terminée — porte validée | 2026-07-21 | Deux agents indépendants               | `suivi-conversions-google-ads-p3.sha256` | Aucun                             |
| 4. Plume humaine et contrôle | Terminée — porte validée | 2026-07-22 | Codex                                  | `suivi-conversions-google-ads-p4.sha256` | Aucun                             |

### Manifeste du snapshot

| Fichier contrôlé                                | SHA-256           | Passe | Remarque                              |
| ----------------------------------------------- | ----------------- | ----- | ------------------------------------- |
| `docs/research/suivi-conversions-google-ads.md` | voir le manifeste | P1    | dossier documentaire P1 contre-audité |

## 1. Fiche d’identité

| Champ                            | Décision documentaire                                                                                                                                                           |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Slug                             | suivi-conversions-google-ads                                                                                                                                                    |
| Statut actuel                    | Corrections P3 après contre-audit indépendant ; route publique sous porte éditoriale                                                                                            |
| Requête principale qualitative   | suivi conversions Google Ads                                                                                                                                                    |
| Variantes utiles observées       | tracking conversions Google Ads ; tester conversion Google Ads ; conversion principale ou secondaire ; Google Ads et GA4 ; suivi conversions hors ligne CRM                     |
| Moment du parcours               | Sécuriser une campagne active avant de modifier les objectifs ou les enchères                                                                                                   |
| Lecteur précis                   | Dirigeant ou indépendant qui finance Google Ads, reçoit des formulaires ou appels et ne parvient pas à rapprocher les chiffres de la plate-forme des demandes et ventes réelles |
| Situation déclenchante           | Google Ads affiche des conversions, mais la boîte de réception, le CRM, les devis ou le chiffre d’affaires racontent une autre histoire                                         |
| Décision principale              | Choisir le résultat métier qui doit guider les enchères et approuver une chaîne de mesure testée de bout en bout                                                                |
| Niveau de connaissance au départ | Le lecteur connaît sa dépense et ses demandes, mais pas nécessairement GA4, les balises, les imports hors ligne ou les objectifs personnalisés                                  |
| Action utile sans contact        | Suivre un cas test avec le registre envoyé → reçu → unique → qualifié → devis → vente → marge et nommer le premier passage non prouvé                                           |
| CTA possible                     | Faire tester ma chaîne de mesure                                                                                                                                                |
| Date de recherche                | 2026-07-21                                                                                                                                                                      |
| Responsable de la synthèse       | Agent audit_guide3, sous propriété éditoriale de l’agent racine                                                                                                                 |

### Phrase réelle et réponse attendue

**Phrase que le lecteur pourrait dire au téléphone :**

« Google m’annonce 38 conversions. Combien sont devenues de vraies demandes,
des devis et des ventes ? »

**Réponse qu’il attend en une phrase :**

Une conversion Google Ads est une action choisie par l’annonceur, pas
automatiquement un client ; il faut retrouver un même dossier depuis l’action
envoyée jusqu’à la vente et à la marge avant de décider quel résultat doit
piloter les enchères.

### Questions indispensables

1. Qu’est-ce qui doit être compté : clic, formulaire envoyé, contact reçu,
   demande unique, prospect qualifié, devis ou vente ?
2. Comment vérifier que la balise ne compte ni les erreurs, ni les
   actualisations, ni les doubles envois ?
3. Faut-il utiliser la balise Google Ads, un événement GA4 ou un import depuis
   le CRM ?
4. Quelle action doit rester secondaire et laquelle peut devenir principale ?
5. Comment tester la chaîne jusqu’au CRM et à la vente sans perturber les
   enchères ?
6. Comment traiter les ventes annulées, remboursées ou corrigées ?
7. Que signifie le refus du consentement et quelle part des résultats peut être
   modélisée plutôt qu’observée ?
8. Pourquoi Google Ads et le CRM ne montrent-ils pas toujours les mêmes
   résultats à la même date ?

### Objections et craintes

- « Si je change l’objectif, est-ce que je vais casser une campagne qui
  fonctionne encore ? »
- « Entre Google Ads, GA4, le gestionnaire de balises et le CRM, qui dit la
  vérité ? »
- « Est-ce que l’envoi de données de prospects à Google est conforme et
  sécurisé ? »
- « Mes ventes arrivent plusieurs semaines après le clic : est-ce encore
  exploitable ? »
- « Je n’ai que quelques ventes ; puis-je tout de même mesurer correctement ? »

### Bon fit, mauvais fit et hors périmètre

**Bon fit :**

- compte Google Ads actif ou prêt à être repris ;
- formulaire, téléphone, réservation ou achat relié à un système métier ;
- écart entre conversions Ads, contacts reçus et ventes ;
- besoin de définir des prospects qualifiés ou des ventes importées ;
- équipe capable de nommer les étapes commerciales et leur responsable.

**Mauvais fit :**

- aucune campagne ni intention d’en lancer une ;
- attente d’un nombre de prospects, d’un ROI ou d’une attribution garantis ;
- besoin principal portant sur les mots-clés, les annonces ou la page
  d’atterrissage ;
- litige de facturation Google, compte piraté ou besoin de conseil juridique
  personnalisé ;
- entreprise incapable de définir ce qu’est une demande sérieuse ou une vente.

**Hors périmètre :**

- audit complet de la structure et des réglages du compte ;
- calcul général du budget ou des honoraires de gestion ;
- conception d’une page d’atterrissage ;
- suivi Meta Ads, LinkedIn Ads ou d’autres régies ;
- tutoriel exhaustif de Google Tag Manager ;
- validation juridique, DPO ou RGPD ;
- seuil universel de volume ou de délai pour les enchères automatiques.

## 1 bis. Contrat de langage humain

### Mots du lecteur et termes à traduire

| Mot expert                       | Formulation à employer d’abord                                                           |
| -------------------------------- | ---------------------------------------------------------------------------------------- |
| Conversion                       | Action que l’entreprise a choisi de compter                                              |
| Événement                        | Information envoyée lorsqu’une action se produit                                         |
| Balise ou tag                    | Petit dispositif technique qui envoie cette information                                  |
| Conversion principale            | Action que la campagne peut utiliser pour guider ses enchères                            |
| Conversion secondaire            | Action observée sans être normalement utilisée par les enchères                          |
| Import hors ligne                | Retour dans Google Ads d’une étape connue plus tard dans le CRM                          |
| Déduplication                    | Suppression des répétitions d’une même demande ou vente                                  |
| Attribution                      | Règle qui relie une conversion à une interaction publicitaire                            |
| Donnée modélisée                 | Résultat estimé par Google lorsque l’observation directe manque                          |
| Mode Consentement                | Manière de communiquer le choix de l’utilisateur aux balises Google                      |
| GCLID et identifiants apparentés | Identifiant technique permettant de rapprocher un clic et une suite commerciale          |
| Conversion avancée               | Mesure complétée par des données fournies par l’utilisateur selon les règles applicables |

**Mots ordinaires à privilégier :** demande envoyée, demande reçue, doublon,
contact sérieux, motif de refus, devis envoyé, vente signée ou payée, marge
constatée, preuve, responsable et date.

**Mots d’agence à éviter dans l’ouverture :** funnel, tracking stack, signal
first party, smart bidding, data-driven, server-side, match key, scalabilité,
optimisation full-funnel et architecture de marquage.

Les clés anglaises **sent**, **received**, **unique**, **qualified**, **quote**,
**sale** et **margin** peuvent apparaître dans l’artefact éditable. Dans le
texte courant, leur traduction française vient toujours en premier.

### Projet des 150 premiers mots

L’ouverture part d’un écart visible :

> Google Ads annonce 38 conversions. La boîte de réception contient 31
> messages. Après rapprochement des doubles envois, il reste 24 demandes
> uniques. Huit correspondent réellement à l’offre et trois ont signé. Les cinq nombres
> peuvent être exacts : ils ne mesurent simplement pas la même étape.

La suite explique immédiatement qu’une conversion est une action définie par
l’annonceur, donne la réponse courte et annonce le résultat du guide : construire
un registre commun, tester un dossier de bout en bout, puis choisir ce qui doit
être observé ou utilisé pour les enchères.

Après ces 150 mots, le lecteur doit savoir qu’il ne doit ni comparer des nombres
qui n’ont pas la même définition, ni modifier les enchères avant d’avoir retrouvé
le premier passage non prouvé.

### Test de l’ouverture à imposer en P2

- [ ] la situation vécue arrive avant GA4, GTM et le mode Consentement ;
- [ ] le terme conversion est expliqué dans la première réponse ;
- [ ] le guide ne laisse jamais entendre que 38 conversions valent 38 clients ;
- [ ] la réponse reste nette sans empiler les limites juridiques dans le premier
      paragraphe ;
- [ ] l’action autonome et la décision finale sont annoncées ;
- [ ] aucune promesse de récupération de données ou de hausse de performance
      n’apparaît.

Le test sujet, action, résultat sur cinq phrases sera réalisé sur le brouillon en
P4.

## 2. Frontières et anti-cannibalisation

| Page existante ou future                | Intention détenue par cette page                                                               | Frontière du présent guide                                                                                                                                                              | Maillage prévu                                                                                          |
| --------------------------------------- | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| audit-google-ads-que-verifier           | Contrôler tout un compte avant hausse de budget ou reprise                                     | Construire ici le système de mesure ; l’audit voisin vérifie seulement si la mesure existante est fiable parmi les autres contrôles                                                     | Lien vers l’audit si plusieurs familles de problèmes apparaissent                                       |
| pourquoi-google-ads-ne-convertit-pas    | Partir d’une dépense sans clients et isoler trafic, offre, page, mesure ou suivi commercial    | Supposer ici que le besoin de mesure est établi et fournir le contrat d’implémentation et de recette                                                                                    | Lien entrant depuis la rupture de mesure et lien retour vers le diagnostic si la cause reste inconnue   |
| prix-gestion-google-ads                 | Comprendre média, honoraires et coûts annexes                                                  | Aucun tarif, modèle d’honoraires ou comparaison de devis dans ce guide                                                                                                                  | Lien seulement si le lecteur doit ensuite budgéter l’exploitation                                       |
| seo-ou-google-ads                       | Choisir entre acquisition payante et actif SEO                                                 | Google Ads est déjà retenu ou actif                                                                                                                                                     | Lien uniquement si le choix reste en question                                                           |
| futur leads-google-ads-non-qualifies    | Corriger les recherches, zones, promesses et formulaires qui attirent des demandes sans valeur | Définir ici le statut qualifié et son motif, sans diagnostiquer le ciblage                                                                                                              | Lien au stade qualification                                                                             |
| futur calculer-cout-par-lead-google-ads | Relier coût, qualification, vente et marge                                                     | Produire ici des entrées fiables et s’arrêter au résultat économique global de la même cohorte ; laisser au futur guide les coûts par étape, les seuils et les scénarios de rentabilité | Lien uniquement si le lecteur veut ensuite calculer le coût d’une demande, d’un prospect ou d’une vente |
| futur landing-page-google-ads           | Concevoir une page cohérente avec la requête et l’annonce                                      | Vérifier ici qu’une action réussie est envoyée puis reçue, sans refaire l’UX ou le message                                                                                              | Lien si l’événement fonctionne mais que personne n’agit                                                 |
| budget-google-ads-pme                   | Dimensionner un test et protéger la trésorerie                                                 | La dépense n’est pas calculée ici ; seule la qualité de la mesure est traitée                                                                                                           | Lien si le compte n’est pas encore lancé                                                                |

**Justification d’une URL distincte :** les pages proches diagnostiquent,
chiffrent ou arbitrent ; cette URL possède exclusivement la spécification et la
recette de la chaîne qui relie une action technique à un résultat commercial.

**Règle éditoriale anti-cannibalisation :** ne pas ouvrir par « pourquoi vos
campagnes ne convertissent pas », ne pas refaire une checklist complète de
compte et ne pas transformer l’exemple en calculateur de coût par prospect. Le
fil doit rester : définir, relier, tester, puis choisir l’action utilisée par les
enchères.

## 3. Demande et vocabulaire observés

### Mode d’observation et limites

Recherche Web francophone observée le 21 juillet 2026 avec les formulations :

- suivi conversions Google Ads ;
- tracking conversions Google Ads CRM formulaire ;
- plan de marquage Google Ads conversions ;
- tester suivi conversion Google Ads ;
- conversion principale secondaire Google Ads ;
- Google Ads GA4 conversion ;
- suivi conversions hors ligne Google Ads.

Aucun volume de recherche, aucune difficulté SEO, aucune position stable et
aucune donnée Search Console ou Keyword Planner ne sont disponibles dans cette
P1. Les résultats prouvent une demande informationnelle et technique, pas son
volume ni sa valeur commerciale. Les modules Questions fréquentes, le pack local
et la personnalisation complète de la SERP française n’ont pas été conservés.

### Questions et formulations récurrentes

- comment installer ou configurer le suivi des conversions ;
- balise Google Ads ou import depuis GA4 ;
- comment vérifier que la conversion remonte ;
- quel type d’action suivre : formulaire, appel, achat ou import ;
- une conversion ou toutes les conversions ;
- principale ou secondaire ;
- comment éviter les doublons ;
- comment suivre une vente hors ligne ou un prospect depuis le CRM ;
- que faire si aucune conversion n’apparaît ;
- suivi côté navigateur ou côté serveur ;
- comment utiliser Tag Assistant.

### Carte concurrentielle qualitative

| Page observée                                                                                                                                         | Réponse et angle                                                    | Preuves ou artefacts           | Bon point                                                     | Manque décisionnel pour notre lecteur                                                                                                                        | Conflit d’intérêt                    |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------ | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ |
| [NomadClick — Guide du suivi des conversions Google Ads, mis à jour le 23 juin 2026](https://nomadclick.com/blog/guide-suivi-conversions-google-ads/) | Création d’actions, paramètres, balise Google et GTM                | Captures et tutoriel pas à pas | Répond à la configuration technique recherchée                | Ne fait pas du rapprochement CRM → devis → vente → marge le contrat central                                                                                  | Consultant et offre d’audit          |
| [AdsBack — Suivi avancé des conversions, 3 septembre 2025](https://www.ads-back.com/blog/suivi-avance-des-conversions-google-ads-guide-complet)       | Suivi avancé pour e-commerce, génération de prospects et hors ligne | Panorama technique             | Bonne largeur de cas d’usage                                  | La décision du dirigeant reste noyée dans les méthodes de mesure                                                                                             | Prestataire de mesure                |
| [Stape — Guide de configuration 2026](https://stape.io/fr/blog/suivi-des-conversions-google-ads)                                                      | Suivi navigateur, serveur, dépannage et outils techniques           | Étapes GTM et serveur          | Explique plusieurs architectures                              | Ne donne pas un registre métier avec propriétaire et preuve par étape ; certaines formulations de performance doivent être revérifiées sur sources primaires | Vend une infrastructure côté serveur |
| [Vincent Duquesne — Les quatre décisions qui comptent](https://www.vincentduquesne.net/suivi-conversions-principe.html)                               | Action principale, valeurs, consentement et vérification            | Cadre décisionnel clair        | Concurrent éditorial le plus proche et bon niveau de synthèse | Dans le contenu observé, le registre à sept étapes et sa recette d’acceptation ne sont pas l’artefact central                                                | Consultant Google Ads                |
| [Zesto — Guide complet et test GTM](https://agence-zesto.com/blog/sea/suivi-conversion-google-ads/)                                                   | Création de l’action, GTM et Tag Assistant                          | Test de déclenchement          | Procédure accessible                                          | Le déclenchement de la balise est présenté comme opérationnel alors qu’il ne prouve pas encore réception, unicité, qualification ou vente                    | Agence Google Ads                    |

### Angle mort commun observé

Dans cet échantillon, la plupart des pages commencent par la plate-forme ou la
balise. La page de Vincent Duquesne est plus décisionnelle, mais aucune page
observée ne fait de la réconciliation complète d’un même dossier, avec système
de référence, identifiant, propriétaire, preuve et critère d’acceptation à
chaque étape, son dispositif principal.

Cette conclusion porte uniquement sur l’échantillon daté. Le guide public ne
doit jamais écrire « personne ne le fait » ou revendiquer une exclusivité
absolue.

### Valeur originale

Le guide doit fonctionner comme un procès-verbal de recette compréhensible par
un dirigeant :

1. une définition métier pour chaque étape ;
2. un système de référence par étape ;
3. un même dossier ou une correspondance documentée ;
4. un test positif et plusieurs tests négatifs ;
5. une décision explicite sur ce qui reste observé et ce qui peut guider les
   enchères.

## 4. Fiche de preuves

Toutes les sources ont été consultées le 21 juillet 2026. Les documentations
Google décrivent le produit Google : elles sont primaires pour son
fonctionnement, mais ne prouvent ni la rentabilité d’une campagne ni la
conformité juridique d’une entreprise. Les ressources CNIL éclairent le cadre
français sans remplacer une analyse juridique propre au traitement.

| Affirmation utilisable                                                                                                                                                                                                                                                                               | Source primaire et passage utile                                                                                                                                                  | Nature                           | Périmètre                                       | Limite                                                                                                                           | Conséquence lecteur                                                                              | Emplacement public prévu                       | Fraîcheur                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------- | --------------------------------------------------- |
| Une action principale peut être utilisée pour les enchères si la campagne utilise l’objectif associé ; une action secondaire sert normalement à l’observation                                                                                                                                        | [Google Ads — gérer les objectifs de conversion](https://support.google.com/google-ads/answer/10993988?hl=fr), étapes 2 et lignes explicatives « Principale » / « Secondaire »    | Fait produit                     | Objectifs Google Ads                            | Dépend des objectifs réellement sélectionnés par la campagne                                                                     | Vérifier campagne et objectif avant tout changement                                              | Section principale ou secondaire               | Dynamique ; revalider avant publication             |
| Une action secondaire incluse dans un objectif personnalisé affecté à une campagne peut néanmoins être utilisée pour les enchères                                                                                                                                                                    | [Google Ads — même documentation](https://support.google.com/google-ads/answer/10993988?hl=fr)                                                                                    | Exception produit                | Objectifs personnalisés                         | Rend le simple libellé « secondaire » insuffisant                                                                                | Contrôler les objectifs personnalisés                                                            | Encadré d’alerte près de la décision           | Dynamique ; revalider avant publication             |
| La colonne Conversions contient les actions principales et peut inclure des conversions modélisées ; Toutes les conversions ajoute notamment les secondaires                                                                                                                                         | [Google Ads — comprendre les données de conversion](https://support.google.com/google-ads/answer/6270625?hl=fr), sections « Conversions » et « Toutes les conversions »           | Fait produit                     | Rapports Google Ads                             | Le contenu exact dépend des objectifs, sources et types de campagne                                                              | Ne pas assimiler la colonne à un registre de ventes observées                                    | Ouverture et limites                           | Dynamique                                           |
| Google distingue les catégories prospect qualifié et prospect converti à partir des étapes connues dans un CRM ou système interne                                                                                                                                                                    | [Google Ads — prospects qualifiés et convertis](https://support.google.com/google-ads/answer/11459091?hl=fr), définitions                                                         | Fait produit                     | Génération de prospects                         | La définition concrète appartient à l’annonceur et ne prouve pas la marge                                                        | Écrire les critères et le système de référence                                                   | Étapes qualifié et vente                       | Dynamique                                           |
| Deux conversions de la même action avec le même ID de transaction sont traitées comme un doublon                                                                                                                                                                                                     | [Google Ads — limiter les conversions en double](https://support.google.com/google-ads/answer/6386790?hl=en)                                                                      | Fait produit                     | Achats et certains imports                      | L’ID doit être dynamique et représenter la transaction ; la règle de comptage reste distincte                                    | Utiliser le numéro de commande ou de transaction approprié et tester l’actualisation             | Étape unique et protocole                      | Dynamique                                           |
| Google écarte comme ID de transaction les URL, e-mails, téléphones, prix, chaînes hachées ou UUID génériques ; l’ID de transaction n’est donc ni un identifiant client ni une clé interne arbitraire                                                                                                 | [Google Ads — même documentation](https://support.google.com/google-ads/answer/6386790?hl=en), sections sur les types de données non pertinents et les informations identifiantes | Fait produit                     | Paramètre `transaction_id`                      | La documentation illustre les erreurs ; le format exact dépend du parcours d’achat ou d’import                                   | Ne jamais recycler automatiquement `case_id`, GCLID ou une donnée hachée comme ID de transaction | Section cinq identifiants                      | Dynamique                                           |
| Pour un prospect, Google recommande généralement « Une » conversion par interaction ; pour des achats multiples, l’ID de transaction permet de dédupliquer chaque achat                                                                                                                              | [Google Ads — ID de transaction et paramètre Nombre](https://support.google.com/google-ads/answer/6386790?hl=fr)                                                                  | Recommandation produit           | Paramètre de comptage                           | Ne résout pas les doublons métier entre canaux ou personnes                                                                      | Distinguer comptage Ads et dédoublonnage CRM                                                     | Section doublons                               | Dynamique                                           |
| Les conversions peuvent être créées à partir d’événements clés GA4 et partagées avec Google Ads                                                                                                                                                                                                      | [Google Ads — créer des conversions à partir d’événements clés GA4](https://support.google.com/google-ads/answer/10632359?hl=en)                                                  | Fait produit                     | Comptes Ads et propriétés GA4 liés              | Certaines fonctions peuvent dépendre de l’éligibilité et des paramètres                                                          | Choisir une source canonique au lieu d’empiler deux actions identiques                           | Section GA4 ou balise Ads                      | Dynamique                                           |
| Une conversion issue de GA4 peut être définie comme secondaire afin d’éviter un double usage pour les enchères lorsque le compte possède déjà des objectifs Analytics                                                                                                                                | [Google Ads — même documentation, FAQ](https://support.google.com/google-ads/answer/10632359?hl=en)                                                                               | Fait produit conditionnel        | Création depuis GA4                             | Ne garantit pas l’absence de tout double comptage dans tous les rapports                                                         | Vérifier la table des actions, pas seulement supposer                                            | Section doubles sources                        | Dynamique                                           |
| Les événements clés modélisés GA4 mélangent observation et estimation ; les données attribuées peuvent encore évoluer jusqu’à douze jours                                                                                                                                                            | [Google Analytics — événements clés modélisés](https://support.google.com/analytics/answer/10710245?hl=en)                                                                        | Fait produit                     | Rapports GA4 et conversions Ads issues de GA4   | La modélisation est agrégée et dépend de l’éligibilité                                                                           | Séparer le registre CRM des colonnes modélisées                                                  | Section observé ou modélisé                    | Dynamique                                           |
| Les colonnes principales Google Ads rattachent les conversions au moment du clic ; les colonnes « par date de conversion » facilitent la comparaison avec un CRM                                                                                                                                     | [Google Ads — moment de la conversion](https://support.google.com/google-ads/answer/6270625?hl=fr)                                                                                | Fait produit                     | Rapports standards                              | Des écarts restent possibles selon attribution, fenêtres et traitement ; délai de 24 à 48 heures                                 | Aligner dates, fuseaux et colonnes avant de déclarer un écart                                    | Protocole de rapprochement                     | Dynamique                                           |
| Le mode Consentement transmet l’état du choix et adapte le comportement des balises ; son mode de base peut bloquer tout envoi, son mode avancé peut utiliser des signaux sans cookie selon la configuration                                                                                         | [Google Ads — à propos du mode Consentement](https://support.google.com/google-ads/answer/10000067?hl=fr)                                                                         | Fait produit                     | Balises Google                                  | Ce fonctionnement n’est ni une bannière, ni un avis de conformité                                                                | Tester les états et faire valider le dispositif de consentement séparément                       | Section consentement                           | Dynamique                                           |
| Les conversions modélisées liées au mode Consentement peuvent apparaître dans les colonnes de conversion et les enchères                                                                                                                                                                             | [Google Ads — modélisation du mode Consentement](https://support.google.com/google-ads/answer/10548233?hl=fr)                                                                     | Fait produit                     | Comptes éligibles                               | Modèle agrégé, seuils et disponibilité variables                                                                                 | Ne pas présenter chaque conversion Ads comme un dossier observé                                  | Section observé ou modélisé                    | Dynamique                                           |
| Tag Assistant permet de vérifier l’état du consentement ; certains états peuvent mettre 48 heures à deux semaines à apparaître dans Google Ads                                                                                                                                                       | [Google Tag Manager — vérifier le mode Consentement](https://support.google.com/tagmanager/answer/14218557?hl=fr)                                                                 | Fait produit                     | Diagnostic des balises                          | Un diagnostic vert ne prouve pas la qualification ou la vente                                                                    | Prévoir délai et preuves métier distinctes                                                       | Protocole et critères d’attente                | Dynamique                                           |
| Le consentement doit aussi être examiné pour les données de conversions en ligne ou hors ligne importées lorsque la loi ou les règles Google l’exigent                                                                                                                                               | [Google Ads — obtenir le consentement de l’utilisateur](https://support.google.com/google-ads/answer/14009343?hl=fr)                                                              | Règle produit et rappel légal    | Données importées dans Google                   | Ne définit pas seul la base juridique de chaque entreprise                                                                       | Impliquer DPO ou juriste et documenter finalité et destinataires                                 | Section consentement                           | Dynamique                                           |
| Les conversions avancées pour prospects peuvent rapprocher des données fournies par l’utilisateur, par exemple un e-mail ou un téléphone, avec des identifiants publicitaires tels que GCLID et, lorsqu’ils existent, GBRAID ou WBRAID                                                               | [Google Ads — configurer les conversions avancées pour prospects](https://support.google.com/google-ads/answer/11021502?hl=en), prérequis, champs et règles de hachage            | Fait produit                     | Conversions avancées pour prospects             | Exige configuration, règles Google, gouvernance des données et examen du consentement ; le hachage ne rend pas la donnée anonyme | Séparer données client, identifiants de clic, ID interne, ID de transaction et ID de lot         | Section cinq identifiants et consentement      | Dynamique                                           |
| Depuis avril 2026, Google accepte simultanément des données fournies par l’utilisateur issues de balises de site, de Data Manager et de connexions API ; les réglages Web et prospects sont unifiés à partir de juin 2026                                                                            | [Google Ads — mises à jour des conversions avancées](https://support.google.com/google-ads/answer/16884284?hl=en), calendrier 2026                                                | Fait produit daté                | Configuration des conversions avancées          | Ne prouve ni la bonne configuration de chaque source ni l’absence de doublon                                                     | Inventorier toutes les sources actives au lieu de supposer qu’une seule méthode existe           | Section doubles sources                        | Dynamique                                           |
| Les règles Google limitent l’import aux données first party autorisées, imposent information et autorisation lorsque la loi l’exige et excluent certaines catégories sensibles                                                                                                                       | [Google Ads — règles concernant les données client](https://support.google.com/google-ads/answer/7475709?hl=fr), collecte, conditions et catégories sensibles                     | Règle produit                    | Données client utilisées pour la mesure avancée | Ne remplace pas l’analyse juridique de l’entreprise                                                                              | Vérifier finalité, information, autorisation, catégories et tiers avant activation               | Section consentement et gouvernance            | Dynamique                                           |
| Les données hachées servent au rapprochement avec des événements publicitaires ; une correspondance peut être trouvée ou non et reste distincte de l’attribution finale                                                                                                                              | [Google Ads — utilisation des données de conversions avancées](https://support.google.com/adspolicy/answer/9755941?hl=fr), traitement et mise en correspondance                   | Fait produit                     | Données first party hachées                     | Google décrit son traitement, pas une garantie de correspondance ni de conformité                                                | Conserver les états « inconnu » et « non rapproché »                                             | Protocole et limites                           | Dynamique                                           |
| Depuis le 15 juin 2026, les téléversements d’imports hors ligne et de conversions avancées pour prospects passent par la Data Manager API et sont bloqués dans la Google Ads API ; l’exception `legacy` concerne les jetons développeur explicitement autorisés selon l’historique défini par Google | [Google Ads — imports de conversions hors ligne](https://support.google.com/google-ads/answer/2998031?hl=en-GB), note datée du 15 juin 2026                                       | Fait produit daté                | Téléversement via API                           | Ne signifie pas que toute Google Ads API est arrêtée ; détails susceptibles d’évoluer                                            | Préférer le chemin actuel documenté et ne jamais présumer d’une exception `legacy`               | Note technique courte, jamais dans l’ouverture | **À revalider impérativement à chaque publication** |
| Un import hors ligne standard de plus de 90 jours après le dernier clic, ou une conversion avancée pour prospect de plus de 63 jours, n’est pas importé ; une statistique importée apparaît habituellement après environ trois heures                                                                | [Google Ads — recommandations pour les imports hors ligne](https://support.google.com/google-ads/answer/15081888?hl=en), sections délai d’import et affichage                     | Fait produit                     | Imports hors ligne                              | Ce sont des limites de produit, pas une fenêtre commerciale recommandée ; d’autres délais de traitement existent                 | Vérifier la fenêtre avant l’envoi et ne pas confondre upload accepté avec conversion visible     | Protocole d’import                             | Dynamique                                           |
| Le traitement peut prendre moins de douze heures mais aller jusqu’à 72 heures pour des conversions rapprochées avec GBRAID ou WBRAID                                                                                                                                                                 | [Google Ads — résoudre les écarts des imports](https://support.google.com/google-ads/answer/13321563?hl=en), délai de traitement                                                  | Fait produit                     | Diagnostic des imports                          | Un délai écoulé ne prouve toujours ni le rapprochement ni l’attribution d’un dossier donné                                       | Consigner séparément accepté, rapproché, attribué et visible                                     | Protocole d’import                             | Dynamique                                           |
| De nombreux traceurs mesurant la performance publicitaire nécessitent le consentement ; les exemptions de mesure d’audience sont étroites et conditionnelles                                                                                                                                         | [CNIL — FAQ cookies et autres traceurs, mise à jour du 29 avril 2026](https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/FAQ)                                       | Doctrine de l’autorité française | Traceurs sur terminaux en France                | L’analyse dépend de la finalité et du dispositif concret                                                                         | Ne pas présenter le suivi publicitaire comme automatiquement exempté                             | Section consentement et limites                | Revalider si doctrine ou texte change               |
| Un hachage peut constituer une pseudonymisation ; les données pseudonymisées restent des données personnelles                                                                                                                                                                                        | [CNIL — identifier les données personnelles](https://www.cnil.fr/fr/identifier-les-donnees-personnelles), section pseudonymisation                                                | Doctrine et pédagogie CNIL       | Données indirectement identifiantes             | L’analyse reste contextuelle                                                                                                     | Bannir « données hachées donc anonymes »                                                         | Section conversions avancées                   | Stable, à surveiller                                |

### Faits, hypothèses, déductions et recommandations

**Faits publiables :**

- le statut principal ou secondaire ne suffit pas sans regarder les objectifs de
  la campagne ;
- les catégories prospect qualifié et prospect converti existent dans Google
  Ads ;
- les rapports peuvent contenir des données modélisées ;
- une conversion peut être rattachée à la date du clic plutôt qu’à la date de
  l’action commerciale ;
- un identifiant unique peut limiter certains doublons ;
- un choix de consentement et des données importées exigent une gouvernance
  distincte de la configuration technique ;
- le chemin API des imports hors ligne a changé le 15 juin 2026 selon la
  documentation consultée.

**Hypothèses à nommer comme telles :**

- toutes les valeurs du cas fictif ;
- le taux de qualification, le taux de signature et le délai commercial ;
- le moment qui définit une vente : signature, paiement ou prestation réalisée ;
- la formule de marge ;
- la valeur attendue attribuée à une demande ou à un prospect ;
- le volume jugé exploitable par une stratégie d’enchères ;
- les pertes de mesure propres à un compte.

**Déductions éditoriales :**

- une balise déclenchée ne prouve pas qu’un contact a été créé dans le CRM ;
- deux nombres exacts peuvent différer parce qu’ils mesurent des étapes ou des
  dates différentes ;
- la meilleure action commerciale n’est pas nécessairement immédiatement la
  meilleure action d’enchère si elle est trop rare, trop tardive ou mal
  importée ;
- un état de diagnostic technique ne valide ni la qualité du prospect, ni le
  chiffre d’affaires, ni la marge ;
- un registre interne reste nécessaire même si Google déduplique certaines
  conversions.

**Recommandations Hagnéré Code :**

- un système de référence et un responsable par étape ;
- un identifiant interne stable, non directement identifiant, ou une
  correspondance documentée, sans le recycler automatiquement comme ID de
  transaction Google ;
- un test technique synthétique, puis une observation d’un cas publicitaire
  réel et licite ;
- une seule source canonique pour un même événement métier ;
- un changement contrôlé des objectifs, documenté et réversible ;
- une séparation visible entre observé, modélisé, estimé et inconnu ;
- aucune nouvelle action profonde utilisée pour les enchères avant validation
  de ses définitions, doublons, délais et valeurs.

### Contradictions et informations à ne pas publier

- « Une conversion principale pilote toujours les enchères » : faux si la
  campagne n’utilise pas l’objectif associé.
- « Une conversion secondaire ne pilote jamais les enchères » : faux dans un
  objectif personnalisé affecté à une campagne.
- « GA4 et Google Ads doivent afficher exactement le même nombre » : faux sans
  alignement des dates, modèles, fenêtres, sources et délais.
- « Un événement visible dans Tag Assistant prouve que le prospect est reçu » :
  Tag Assistant prouve seulement une partie technique.
- « Le mode Consentement est une bannière conforme » : il communique et applique
  un état ; il ne remplace ni la bannière, ni l’analyse juridique.
- « Les données hachées sont anonymes » : formulation interdite.
- « Le suivi côté serveur contourne le refus » : formulation interdite.
- « La Google Ads API ne permet plus aucun import » : généralisation erronée du
  changement daté concernant certains téléversements.
- « Une vente doit toujours être l’objectif principal » : aucune règle
  universelle ne le permet.
- « Il faut 30, 50 ou 100 conversions » : aucun seuil universel ne sera publié.

### Événements imposant une revalidation

- modification des interfaces Objectifs, Conversions ou Data Manager ;
- évolution des catégories prospect qualifié et prospect converti ;
- nouvelle documentation sur la Data Manager API ou réouverture d’un chemin
  Google Ads API ;
- changement de comportement des conversions issues de GA4 ;
- mise à jour des règles Google relatives au consentement dans l’Union
  européenne ;
- nouvelle doctrine CNIL, texte ePrivacy ou décision affectant les traceurs
  publicitaires ;
- changement du dispositif de consentement, du CRM, du formulaire ou du domaine
  du client.

## 5. Artefact signature — le registre de réconciliation

La chaîne suivante est une synthèse recommandée par Hagnéré Code. Google ne la
présente pas comme un parcours officiel universel.

### Cinq identifiants qui ne sont pas interchangeables

| Identifiant                      | Rôle                                                                                                  | Règle de prudence                                                                                                                                   |
| -------------------------------- | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `case_id` interne                | Relier les preuves d’un même dossier dans le registre de l’entreprise                                 | Généré en interne, sans nom, e-mail ou téléphone ; il n’est pas transmis à Google par défaut                                                        |
| GCLID, GBRAID ou WBRAID          | Rapprocher une interaction publicitaire et une conversion selon les chemins pris en charge par Google | Leur présence dépend du parcours, de la configuration et du consentement applicable ; l’absence reste « inconnue » tant qu’elle n’est pas prouvée   |
| ID de commande ou de transaction | Éviter de compter deux fois une même transaction dans les cas pris en charge                          | Représente la transaction réelle ; ne pas utiliser une URL, une donnée client, une chaîne hachée, un UUID générique ou le `case_id` par automatisme |
| Donnée client fournie et hachée  | Contribuer au rapprochement dans les conversions avancées prévues par Google                          | Reste une donnée personnelle pseudonymisée ; ne pas la mettre dans le registre public et faire examiner finalité, règles Google et consentement     |
| ID de tâche ou de lot d’import   | Retrouver l’envoi technique et son diagnostic                                                         | Prouve le traitement du lot, pas la correspondance, l’attribution ou la visibilité de chaque conversion                                             |

| Clé de l’artefact | Nom public                 | Définition opérationnelle                                                                                      | Système de référence pressenti                                  | Preuve minimale                                                    | Ce que l’étape ne prouve pas                                                                                                                 |
| ----------------- | -------------------------- | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| sent              | Événement de mesure envoyé | Le site ou l’application a émis l’événement après avoir reçu un résultat de succès attendu                     | Site, application, couche de données ou gestionnaire de balises | Heure, nom de l’événement, identifiant de cas et requête observée  | La création du dossier dans le système métier                                                                                                |
| received          | Demande reçue              | Le serveur, l’outil de formulaire, le suivi d’appel ou le CRM a accepté et enregistré la demande               | Backend, plate-forme de formulaire, téléphonie ou CRM           | Identifiant d’enregistrement, heure et état de réception           | L’absence de doublon ou la qualité commerciale                                                                                               |
| unique            | Demande unique             | Les répétitions, actualisations et doubles envois d’une même demande ont été rapprochés selon une règle écrite | CRM ou base métier                                              | Identifiant conservé, « doublon de » et motif                      | La validité du contact ou l’adéquation du besoin à l’offre ; les tests sont marqués séparément et n’entrent pas dans une cohorte commerciale |
| qualified         | Prospect qualifié          | La demande respecte les critères commerciaux écrits par l’entreprise                                           | CRM                                                             | Statut, critères, motif de rejet éventuel, responsable et date     | La réalisation d’une vente                                                                                                                   |
| quote             | Devis envoyé               | Une proposition commerciale réelle et identifiable a été envoyée                                               | CRM ou outil de devis                                           | Numéro, date, montant et devise                                    | L’acceptation ou le paiement                                                                                                                 |
| sale              | Vente                      | L’événement défini par l’entreprise comme conclusion — signature, paiement ou réalisation — est constaté       | CRM, facturation, ERP ou commerce                               | Identifiant, date, valeur, devise et statut                        | La marge finale si les coûts ne sont pas connus                                                                                              |
| margin            | Marge constatée ou estimée | La marge selon une formule nommée est disponible                                                               | Comptabilité, ERP ou finance                                    | Formule, coûts inclus, valeur, période et caractère réel ou estimé | Une causalité publicitaire parfaite                                                                                                          |

### Colonnes du registre éditable

La ressource doit comporter au minimum :

- identifiant interne du cas ;
- date et heure avec fuseau ;
- type de cas : synthétique, réel observé ou importé ;
- état du consentement applicable ;
- source ou campagne si elle est connue ;
- type d’identifiant publicitaire conservé : GCLID, GBRAID, WBRAID, absent ou
  inconnu, sans recopier sa valeur dans le modèle public ;
- ID de commande ou de transaction : présent, absent, non applicable ou
  inconnu, distinct du `case_id` ;
- données client fournies pour une conversion avancée : utilisées, non
  utilisées ou inconnues, sans valeur personnelle dans le modèle public ;
- événement envoyé et preuve ;
- identifiant reçu et preuve ;
- identifiant unique et éventuel doublon de ;
- statut de qualification et motif ;
- devis, montant et devise ;
- vente, valeur, statut, annulation ou remboursement ;
- formule et valeur de marge ;
- système de référence de chaque étape ;
- responsable ;
- action envoyée à Google Ads : oui, non ou inconnu ;
- nom de l’action Google Ads ;
- principale, secondaire, non importée ou inconnue ;
- objectif de campagne concerné ;
- date d’import et résultat du diagnostic ;
- ID de tâche ou de lot d’import, sans le confondre avec le dossier métier ;
- anomalie, cause, prochaine action et date de résolution.

### Règles de gouvernance

1. Une étape possède un seul système de référence désigné, même si plusieurs
   outils en affichent une copie.
2. Inconnu ne devient jamais zéro.
3. Une absence de correspondance reste une anomalie, pas une vente perdue
   attribuée arbitrairement.
4. Le `case_id` interne ne contient ni e-mail, ni téléphone, ni nom et ne
   devient pas automatiquement l’ID de transaction envoyé à Google.
5. Une donnée hachée ou pseudonymisée reste gouvernée comme une donnée
   personnelle lorsqu’elle peut être rapprochée.
6. Toutes les étapes ne doivent pas être envoyées à Google Ads.
7. Une valeur estimée est nommée et versionnée ; elle ne devient pas une marge
   constatée.
8. Les captures et journaux contenant des données réelles restent dans un espace
   à accès limité, pas dans le fichier téléchargeable public.

### Candidature à l’observation ou aux enchères

Ce tableau est un cadre de décision, pas une configuration universelle.

| Étape             | Usage initial à examiner                                         | Condition avant évolution                                                         |
| ----------------- | ---------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Événement envoyé  | Preuve technique ou action secondaire                            | Prouver qu’il ne se déclenche qu’après succès                                     |
| Demande reçue     | Observation et rapprochement                                     | Prouver la réception et retirer tests ou erreurs                                  |
| Demande unique    | Observation ou candidate selon le contexte                       | Règle de dédoublonnage stable                                                     |
| Prospect qualifié | Candidate possible                                               | Critères appliqués régulièrement, délai et volume réellement observés             |
| Devis envoyé      | Candidate possible selon le cycle                                | Étape significative et valeur non artificielle                                    |
| Vente             | Candidate possible pour enchères ou valeur                       | Import fiable, délai compatible avec le pilotage et corrections prévues           |
| Marge             | Valeur de décision interne ; transmission éventuelle à gouverner | Définition financière validée, confidentialité, consentement et finalité examinés |

Pendant la recette, une nouvelle action profonde devrait en principe rester en
observation. Toutefois, le statut secondaire ne suffit pas si l’action se trouve
dans un objectif personnalisé utilisé par la campagne : ce contrôle est
obligatoire.

## 6. Protocole de test de bout en bout

### Principe

Le protocole comporte deux niveaux :

1. **test synthétique technique**, qui vérifie le trajet site → serveur → CRM et
   les cas négatifs sans prétendre prouver l’attribution publicitaire ;
2. **cas réel observé et licite**, issu d’une interaction publicitaire réelle,
   qui permet de vérifier le rapprochement avec Google Ads après les délais de
   traitement.

Le guide ne doit pas conseiller au dirigeant de cliquer lui-même sur ses
annonces. Un test sans interaction publicitaire réelle ne prouve pas
l’attribution Ads.

### Préconditions

- définitions de reçu, unique, qualifié, devis, vente et marge approuvées ;
- système de référence et responsable nommés pour chaque étape ;
- environnement de test ou pipeline CRM de test disponible si possible ;
- identifiant de cas synthétique sans donnée personnelle ;
- états de consentement à tester définis ;
- fuseau et période de comparaison identiques ;
- action Google Ads de test exclue des enchères ou configuration de campagne
  vérifiée, y compris les objectifs personnalisés ;
- procédure de retrait, annulation ou correction d’une fausse vente de test ;
- aucun mot de passe, export client ou donnée sensible transmis dans un
  formulaire commercial.

### Cas nominal

| Étape du test                               | Action                                                                                                                                                    | Preuve attendue                                                       | Critère PASS                                                                                                                        |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 1. Préparer                                 | Créer un `case_id` strictement interne et écrire les résultats attendus                                                                                   | Ligne du journal avant exécution                                      | L’attendu est daté et non reconstruit après coup ; cet ID n’est ni un GCLID ni un ID de transaction                                 |
| 2. Consentement                             | Tester le comportement avant choix, après acceptation et après refus selon l’implémentation prévue                                                        | État visible dans Tag Assistant et journal                            | Les balises respectent les états configurés ; aucune conclusion juridique automatique                                               |
| 3. Envoyer                                  | Réaliser une action valide et attendre le succès fonctionnel                                                                                              | Événement, heure et requête réseau ou aperçu                          | Un seul événement attendu part après succès                                                                                         |
| 4. Recevoir                                 | Chercher l’enregistrement côté serveur ou CRM                                                                                                             | Identifiant de dossier et heure                                       | Le dossier existe dans le système de référence                                                                                      |
| 5. Dédupliquer                              | Actualiser, revenir sur la confirmation ou refaire un double envoi contrôlé                                                                               | ID de commande ou de transaction approprié, ou règle CRM distincte    | Un seul résultat métier unique reste, ou le doublon est explicitement relié sans recycler arbitrairement le `case_id`               |
| 6. Qualifier                                | Appliquer la règle de qualification de test                                                                                                               | Statut, motif, responsable et date                                    | Le même cas change d’étape sans perdre sa filiation                                                                                 |
| 7. Émettre un devis                         | Créer un devis de test dans un environnement isolé ou clairement marqué                                                                                   | Numéro, valeur et devise                                              | La valeur correspond au scénario attendu                                                                                            |
| 8. Conclure puis corriger                   | Marquer la vente de test, puis simuler annulation ou remboursement si le flux le permet                                                                   | Vente, ajustement et journal                                          | La vente initiale et sa correction sont distinguées                                                                                 |
| 9. Calculer la marge                        | Appliquer la formule fictive ou de test validée                                                                                                           | Formule, valeur et statut estimé/réel                                 | Les coûts ne sont comptés qu’une fois                                                                                               |
| 10. Transmettre                             | Utiliser le chemin actuel autorisé et conserver l’ID de tâche ou de lot                                                                                   | État d’envoi et réponse technique                                     | L’envoi du lot est prouvé sans être assimilé à une conversion attribuée                                                             |
| 11. Contrôler l’acceptation                 | Lire les lignes acceptées, rejetées ou encore en traitement                                                                                               | Diagnostic d’import et motifs                                         | Chaque ligne possède un état ; « acceptée » prouve seulement que l’import a franchi ce contrôle                                     |
| 12. Vérifier la fenêtre et attendre         | Contrôler les limites actuelles de 90 jours pour l’import standard et 63 jours pour les conversions avancées pour prospects, puis respecter le traitement | Date du clic, date de conversion, heure d’import et heure de contrôle | Aucun faux échec déclaré avant environ trois heures ; jusqu’à 72 heures sont admises pour certains rapprochements GBRAID/WBRAID     |
| 13. Examiner le rapprochement               | Vérifier le diagnostic de correspondance lorsqu’il est disponible                                                                                         | État agrégé ou information disponible dans le produit                 | Correspondance prouvée lorsqu’elle est exposée, sinon état « inconnu » ; aucune correspondance individuelle inventée                |
| 14. Examiner l’attribution et la visibilité | Chercher la bonne action et la colonne « Toutes les conv. (par date de conv.) » après le délai                                                            | Action, période, colonne et valeur visibles                           | Une valeur rapportée est distinguée d’un simple import accepté ; une ligne acceptée peut rester non attribuée ou absente du rapport |
| 15. Rapprocher                              | Comparer IDs internes, identifiants publicitaires lorsqu’ils existent, date du clic et date de conversion                                                 | Registre complet                                                      | Chaque passage est prouvé ou nommé inconnu                                                                                          |

### Cas négatifs obligatoires

- formulaire invalide ou échec serveur ;
- double clic ou double soumission ;
- actualisation de la page de confirmation ;
- retour ultérieur sur la confirmation ;
- adresse ou téléphone volontairement invalides dans l’environnement de test ;
- consentement refusé ;
- consentement modifié après le premier choix ;
- identifiant publicitaire absent ou perdu ;
- redirection ou changement de domaine si le parcours en comporte un ;
- qualification refusée avec motif ;
- devis non envoyé ;
- vente annulée, remboursée ou valeur corrigée ;
- import rejeté, en retard ou dupliqué ;
- double source Google Ads directe et GA4 pour le même événement.

### Critères de sortie

Le test est accepté lorsque :

- chaque étape possède une définition, un responsable et une preuve ;
- le même dossier est retrouvé par un identifiant commun ou une correspondance
  documentée ;
- aucun double envoi ne crée deux ventes ;
- les cas invalides ne créent pas une fausse conversion principale ;
- les valeurs et devises sont exactes ;
- les états de consentement produisent le comportement technique attendu ;
- la source canonique de chaque action est claire ;
- les dates du clic et de la conversion sont comparées avec les bonnes colonnes ;
- observé, modélisé, estimé, rejeté et inconnu ne sont jamais mélangés ;
- envoi, acceptation, correspondance, attribution et visibilité dans le rapport
  sont consignés comme cinq états distincts ;
- les limites de 90 ou 63 jours et le délai de traitement applicable sont
  contrôlés avant de déclarer un échec ;
- la décision de modifier ou non les objectifs est consignée.

Un diagnostic vert de balise n’est qu’un sous-critère. Il ne clôt pas le test si
le CRM, la vente ou la marge ne sont pas rapprochés.

## 7. Exemple fictif et calculs reproductibles

### Hypothèses

Exemple entièrement fictif pour une PME de services. Il part de **72
enregistrements bruts d’événements de mesure**, hors tests synthétiques, issus
fictivement des campagnes et de la période auxquelles les 3 000 € de média sont
affectés. Cette attribution est une hypothèse du scénario, pas un résultat
client. Les événements ont été envoyés entre le 1er et le 30 avril, puis
rapprochés en 60 dossiers commerciaux uniques. Ces 60 dossiers sont observés
ensemble le 29 juin : même le dernier dossier a donc eu 60 jours pour avancer,
et les premiers en ont eu davantage. Cette date commune est définie avant le
calcul. Aucune demande entrée après le 30 avril n’est ajoutée et aucune vente de
ce groupe conclue après le 29 juin n’est comptée dans cet exemple. Tous les
montants ci-dessous sont fictifs et exprimés hors taxes.

- 72 enregistrements bruts d’événements de mesure envoyés après succès du
  formulaire ;
- 68 demandes reçues par le système métier ;
- 60 demandes uniques après rapprochement de huit doublons ;
- 18 prospects respectant la définition écrite de qualification ;
- 42 demandes refusées selon un motif consigné ; aucun dossier n’est encore en
  attente au 29 juin dans cet exemple ;
- 9 devis envoyés ;
- 4 ventes ;
- 3 000 € de chiffre d’affaires moyen par vente ;
- coûts variables directs de réalisation : 4 800 €, soit 40 % du chiffre
  d’affaires fictif ;
- marge de contribution avant acquisition : chiffre d’affaires moins ces seuls
  coûts variables directs, soit 60 % dans l’exemple ;
- dépense Google Ads : 3 000 € ;
- coûts d’acquisition annexes affectés une seule fois à cette cohorte : 400 €
  de gestion, 300 € de mesure et 300 € de quote-part fictive de page
  d’atterrissage, soit 1 000 € ;
- coût d’acquisition complet : 4 000 €.

Le taux de marge, les coûts et les taux de passage ne sont ni un benchmark, ni
un résultat client, ni une prévision.

### Réconciliation des volumes

| Étape             | Volume |                                         Écart avec l’étape précédente | Calcul de passage |
| ----------------- | -----: | --------------------------------------------------------------------: | ----------------: |
| Événement envoyé  |     72 |                                                                     — |                 — |
| Demande reçue     |     68 |                                                     4 non rapprochées | 68 ÷ 72 = 94,44 % |
| Demande unique    |     60 |                                                 8 doublons rapprochés | 60 ÷ 68 = 88,24 % |
| Prospect qualifié |     18 | 42 demandes refusées ; aucune en attente à la date de clôture fictive |    18 ÷ 60 = 30 % |
| Devis envoyé      |      9 |                                                          9 sans devis |     9 ÷ 18 = 50 % |
| Vente             |      4 |                                                   5 devis non conclus |   4 ÷ 9 = 44,44 % |

Autres contrôles :

- demandes uniques devenues ventes : 4 ÷ 60 = 6,67 % ;
- actions envoyées devenues ventes : 4 ÷ 72 = 5,56 % ;
- différence entre actions envoyées et demandes uniques : 72 − 60 = 12 ;
- différence entre actions envoyées et prospects qualifiés : 72 − 18 = 54.

Ces différences ne prouvent pas à elles seules un dysfonctionnement. Les quatre
demandes non reçues peuvent relever d’un échec, d’une définition différente ou
d’une preuve manquante. Les huit répétitions sont ici classées comme doublons
selon la règle fictive du CRM. Un test synthétique aurait son propre type de cas
et resterait hors de cette cohorte commerciale. Dans un dossier réel, les
prospects encore en attente seraient aussi séparés des refusés.

### Calculs économiques

Chiffre d’affaires :

4 ventes × 3 000 € = 12 000 €

Marge de contribution fictive avant acquisition :

12 000 € − 4 800 € de coûts variables directs = 7 200 €

Solde de contribution après acquisition :

7 200 € − 4 000 € = 3 200 €

Ce solde exclut les charges fixes, la fiscalité et tout autre coût non cité. Il
ne constitue ni un bénéfice net ni une prévision. Le guide s’arrête à ces quatre
montants globaux. Les coûts par action, demande, prospect ou vente, les seuils
acceptables et les scénarios de rentabilité relèvent du futur guide consacré au
coût par prospect Google Ads.

### Contrôle inverse

- 4 ventes × 3 000 € = 12 000 € de chiffre d’affaires ;
- 12 000 € − 4 800 € de coûts variables directs = 7 200 € de marge de
  contribution avant acquisition ;
- 7 200 € − 3 000 € de média − 1 000 € de coûts annexes = 3 200 € ;
- les 4 800 € de réalisation n’incluent ni média, ni gestion, ni mesure, ni
  quote-part de page ; chacun de ces coûts n’est affecté qu’une fois dans
  l’exemple.

### Décision pédagogique

Si la seule action principale correspond aux 72 envois, Google Ads peut
optimiser vers une étape qui inclut les répétitions ou des demandes
qui ne correspondent pas à l’offre. Cela justifie une correction de la mesure,
pas un passage automatique aux quatre ventes.

La vente peut être trop rare, trop tardive ou mal importée pour devenir
immédiatement l’objectif d’enchère. Le guide recommandera de choisir l’étape la
plus profonde qui soit réellement fiable et exploitable dans le contexte du
compte, sans seuil universel, puis de migrer sous contrôle.

## 8. Empreinte éditoriale à ne pas reproduire

| Guide voisin                         | Ouverture                        | Progression                                | Dispositif central             | Exemple                         | Conclusion                                     |
| ------------------------------------ | -------------------------------- | ------------------------------------------ | ------------------------------ | ------------------------------- | ---------------------------------------------- |
| pourquoi-google-ads-ne-convertit-pas | Dépense et absence de clients    | Arbre des symptômes puis premier écart     | Relevé commun et diagnostic    | Plusieurs situations de rupture | Corriger le premier écart ou demander un audit |
| audit-google-ads-que-verifier        | Décision avant hausse ou reprise | Contrôles numérotés du compte              | Registre d’audit               | Anomalies et preuves attendues  | Accepter, corriger ou refuser une hausse       |
| prix-gestion-google-ads              | Question de coût                 | Média, honoraires, modèles et coût complet | Scénarios tarifaires           | Budgets et formules             | Comparer des devis                             |
| budget-google-ads-pme                | Hésitation entre montants        | Coût prévu, marge et perte acceptable      | Calculateur des trois montants | Un test fictif                  | Lancer, réduire ou reporter                    |

### Choix propre au nouveau guide

**Tension motrice :** le tableau publicitaire, la boîte de réception et le CRM
affichent trois vérités différentes.

**Type d’ouverture :** un seul dossier chiffré qui rétrécit à chaque étape, afin
que le problème soit compris avant les outils.

**Progression :** suivre ce dossier de l’envoi à la marge, interrompre le récit
au premier passage non prouvé, puis reprendre avec le protocole de recette.

**Artefact signature :** registre à sept étapes, associé à un journal de test.

**Rythme et voix :** phrases concrètes, un responsable et une preuve à chaque
étape ; aucune métaphore à apprendre ; technique repoussée après la décision
métier.

**Place du CTA :** après le test autonome et l’exemple, lorsque le lecteur sait
décrire l’écart sans transmettre ses accès ni ses données clients.

**Forme de conclusion :** conserver, corriger, approfondir ou ne pas modifier
les enchères pour l’instant.

### Différences obligatoires avec les guides voisins

1. Un seul dossier fil rouge, pas un arbre de causes.
2. Une preuve de passage et un système de référence à chaque étape, pas une
   checklist générale de compte.
3. Un test positif et des tests négatifs, pas seulement des réglages à
   contrôler.
4. Aucune fourchette de prix ou de budget.
5. La conclusion peut être « la mesure actuelle suffit » ou « ne changez pas
   encore l’objectif ».

## 9. Plan annoté

Le nombre de H2 public visé est de sept ou huit. Le plan ne doit pas devenir une
structure mécanique répétant les autres guides.

| Section provisoire                                           | Question résolue                                                   | Preuve ou exemple                                                       | Conséquence ou décision                                                                    | Format                         |
| ------------------------------------------------------------ | ------------------------------------------------------------------ | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------ |
| Google compte-t-il vos clients ou seulement des actions ?    | Pourquoi Ads, la boîte et le CRM diffèrent-ils ?                   | Cas 38 → 31 → 24 → 8 → 3 et définition Google                           | Cesser de comparer des étapes différentes                                                  | Ouverture narrative courte     |
| Choisissez le résultat que les enchères doivent rechercher   | Formulaire, demande, prospect qualifié ou vente ?                  | Principales, secondaires et exception des objectifs personnalisés       | Nommer l’action candidate sans la modifier encore                                          | Prose et mini-arbre            |
| Reliez une même demande de l’envoi à la marge                | Comment construire la chaîne ?                                     | Registre sent → margin                                                  | Désigner système, propriétaire et preuve                                                   | Artefact central               |
| Testez toute la chaîne, pas seulement la balise              | Comment savoir si le suivi fonctionne vraiment ?                   | Cas nominal, négatifs et critères PASS                                  | Trouver le premier passage non prouvé                                                      | Procédure numérotée            |
| Évitez doublons, doubles sources et dates incomparables      | Pourquoi deux outils ne donnent-ils pas le même total ?            | ID de transaction, GA4, date du clic et date de conversion              | Choisir la source canonique et la bonne colonne                                            | Trois erreurs expliquées       |
| Séparez consentement, observation et modélisation            | Que sait-on réellement ?                                           | Google Consent Mode, GA4 et CNIL                                        | Nommer les limites et demander une validation juridique si nécessaire                      | Encadré de limites             |
| Exemple fictif : 72 actions, 60 demandes uniques et 4 ventes | Comment suivre une seule cohorte et vérifier son résultat global ? | Volumes de la même cohorte, quatre montants globaux et contrôle inverse | Comprendre la différence entre étapes sans refaire le futur guide sur le coût par prospect | Cas chiffré                    |
| Sources et limites                                           | Qu’est-ce qui vient de Google, de la CNIL ou de notre méthode ?    | Sources adjacentes et date de consultation                              | Revalider les points mouvants                                                              | Conclusion documentaire courte |

### FAQ résiduelle envisagée

La FAQ ne répète pas les H2. Questions candidates :

1. Un tableur suffit-il si l’entreprise n’a pas de CRM ?
2. Comment rapprocher un appel téléphonique d’une campagne sans enregistrer de
   donnée personnelle dans le modèle public ?
3. Que faire lorsqu’une vente intervient après la fenêtre d’import prise en
   charge par Google ?
4. Combien de temps conserver le journal de recette et qui doit pouvoir y
   accéder ?

Chaque réponse commencera par oui, non, cela dépend ou une décision équivalente,
puis donnera la limite.

## 10. Ressource, conversion et maillage

### Ressource proposée

Une ressource est naturellement nécessaire : **Registre de preuve des
conversions Google Ads**.

Formats :

- XLSX éditable ;
- CSV pour la réconciliation ;
- version de consultation éventuellement PDF, seulement si elle reste lisible ;
- aucun formulaire d’e-mail obligatoire pour accéder au fichier.

Onglets :

1. **Définitions** : étape, définition, système de référence, propriétaire,
   preuve, action Ads et règle de valeur ;
2. **Réconciliation** : une ligne par cas avec les identifiants et états ;
3. **Journal de test** : action, résultat attendu, résultat observé, preuve,
   PASS/FAIL, anomalie et correction ;
4. **Exemple fictif** : cas 72 → 68 → 60 → 18 → 9 → 4, calculs et contrôle
   inverse.

Le fichier public contient uniquement des données fictives et des instructions.
Une copie remplie peut en revanche contenir des informations commerciales,
identifiants indirects et liens vers des preuves : elle devient potentiellement
sensible et doit rester dans un espace sécurisé à accès limité. Le fichier doit
permettre de conclure :

- chaîne prouvée ;
- chaîne partiellement prouvée ;
- première rupture identifiée ;
- action trop rare ou trop tardive pour être modifiée maintenant ;
- aucune intervention nécessaire.

### Processus reproductible et QA future

En P2 ou dans un chantier ressource séparé :

- construire le XLSX depuis une source versionnée ;
- vérifier formules, listes, valeurs vides et cellules inconnues ;
- ouvrir dans Excel, LibreOffice et Numbers si possible ;
- vérifier les largeurs, retours à la ligne et filtres ;
- fournir un exemple rempli et un onglet vierge ;
- ne jamais incorporer de script ou de connexion externe ;
- documenter la date et la version ;
- contrôler qu’aucune donnée personnelle réelle ne subsiste ;
- rendre les couleurs non indispensables à la compréhension.

### CTA

**Titre :** Faire tester la chaîne qui pilote mes enchères

**Description possible :**

Indiquez les actions suivies, les outils utilisés et l’endroit où les nombres
cessent de correspondre. L’examen peut conclure qu’il suffit de corriger une
balise, de relier le CRM, de revoir les définitions ou de ne rien modifier pour
l’instant. Aucun mot de passe ni fichier contenant des données clients n’est
demandé dans le formulaire.

**Libellé :** Faire tester ma chaîne de mesure

**Destination :** /demarrer-un-projet

**Résultat annoncé après clic :** décrire le périmètre, les systèmes et l’écart
observé pour décider si un audit ou une implémentation ciblée est utile.

**Promesses interdites dans le CTA :** audit gratuit, tracking 100 % fiable,
conformité RGPD garantie, conversions perdues récupérées, plus de prospects ou
ROAS amélioré.

### Maillage

Liens sortants naturels :

- audit-google-ads-que-verifier si plusieurs familles d’anomalies apparaissent ;
- pourquoi-google-ads-ne-convertit-pas si la rupture n’est pas uniquement la
  mesure ;
- prix-gestion-google-ads si le lecteur doit budgéter la gestion après
  sécurisation ;
- seo-ou-google-ads si le choix entre acquisition payante et SEO reste
  contesté ;
- futur leads-google-ads-non-qualifies au stade qualification ;
- futur calculer-cout-par-lead-google-ads si le lecteur veut calculer les coûts
  par étape et leurs seuils ;
- futur landing-page-google-ads si la chaîne est saine mais que peu de personnes
  agissent.

Liens entrants à prévoir après publication :

- audit-google-ads-que-verifier depuis le contrôle du suivi ;
- pourquoi-google-ads-ne-convertit-pas depuis la rupture de mesure ;
- prix-gestion-google-ads depuis les coûts de mesure ou de mise en route ;
- guides futurs sur les prospects non qualifiés, le coût par prospect et la
  page d’atterrissage.

## 11. P0, P1 et formulations bannies

### P0 — publication interdite

- mode Consentement présenté comme une bannière ou une conformité juridique ;
- suivi côté serveur présenté comme un moyen de contourner un refus ;
- données hachées décrites comme anonymes par nature ;
- conversion modélisée décrite comme un prospect ou une vente observée ;
- clic, bouton, événement, formulaire, demande, prospect, vente et marge
  assimilés ;
- données personnelles ou identifiants directs proposés dans un ID de
  transaction ou le fichier public ;
- garantie de mesure exhaustive, d’attribution, de prospects, de vente, de ROAS
  ou de marge ;
- exemple fictif présenté comme résultat client, benchmark ou moyenne de marché ;
- conseil juridique individualisé sans source compétente.

### P1 — correction obligatoire avant gel

- exception de l’objectif personnalisé omise dans l’explication des actions
  secondaires ;
- balise Google Ads et événement GA4 identiques tous deux traités comme source
  canonique sans contrôle de doublon ;
- actualisation, double soumission, annulation ou remboursement absent du test ;
- aucune correspondance d’identifiant entre site, CRM et import ;
- date du clic comparée directement à la date de vente sans colonne « par date
  de conversion », fuseau ni délai ;
- statut vert de Tag Assistant utilisé comme preuve d’une demande reçue ;
- vente recommandée automatiquement comme action principale ;
- seuil arbitraire de 30, 50 ou 100 conversions ;
- valeurs de prospect ou marge envoyées sans formule, version et gouvernance ;
- modification API de juin 2026 décrite comme l’arrêt de toute Google Ads API ;
- consentement traité uniquement sur le site alors que des données sont ensuite
  importées ;
- CTA générique de gestion mensuelle avant l’action autonome ;
- page construite comme un nouveau tutoriel GTM ou un nouvel audit complet ;
- chiffres du cas non recalculés ou arrondis incohérents.

### Formulations explicitement bannies

- « Votre tracking sera fiable à 100 %. »
- « Le Consent Mode rend votre site conforme au RGPD. »
- « Le suivi côté serveur récupère les utilisateurs qui refusent les cookies. »
- « Les données sont hachées, donc elles sont anonymes. »
- « Une conversion Google Ads est un client. »
- « Une balise déclenchée prouve que le prospect a été reçu. »
- « Google Ads et GA4 doivent afficher exactement le même nombre. »
- « Passez toujours les ventes en conversion principale. »
- « Il faut au moins 30, 50 ou 100 conversions pour que Google apprenne. »
- « Consent Mode récupère toutes les conversions perdues. »
- « Les conversions avancées sont automatiquement conformes. »
- « Depuis juin 2026, les imports via API Google Ads ne fonctionnent plus du
  tout. »
- « Chaque prospect vaut X euros » sans formule, période et statut estimé.
- « Cette configuration améliore nécessairement les performances. »
- « Le serveur voit la vérité » ou « le CRM est toujours exact » sans test.

## 12. Porte de sortie P1 — état final

- [x] brief complet et décision unique ;
- [x] URL distincte justifiée ;
- [x] recherche actuelle, qualitative et datée ;
- [x] absence de volume et de Search Console explicitée ;
- [x] fiche de preuves exploitable et sources primaires adjacentes ;
- [x] faits, hypothèses, déductions et recommandations séparés ;
- [x] point API du 15 juin 2026 daté et marqué à revalider ;
- [x] contradictions et formulations bannies consignées ;
- [x] artefact à sept étapes défini ;
- [x] test nominal, tests négatifs et critères d’acceptation définis ;
- [x] exemple fictif, formules, contrôle inverse et arrondis consignés ;
- [x] plan annoté distinct des guides voisins ;
- [x] action autonome, bon fit, mauvais fit, CTA et maillage définis ;
- [x] contre-audit indépendant réalisé ;
- [x] corrections P0/P1 appliquées ;
- [x] snapshot et manifeste P1 créés ;
- [x] Passe 1 marquée Terminée — porte validée.

### Rapport P1 final

PASSE 1 TERMINÉE — PASS

Slug : suivi-conversions-google-ads

Lecteur et phrase réelle : dirigeant qui voit des conversions dans Google Ads
mais demande combien sont devenues de vraies demandes, des devis et des ventes.

Décision : choisir le résultat métier qui doit guider les enchères après avoir
testé la chaîne qui le produit.

Angle et forme dominante : un même dossier suivi de l’action envoyée à la marge,
avec registre de réconciliation et procès-verbal de recette.

Pages proches et différence : audit complet, diagnostic sans conversions, prix,
choix SEO/Ads et futurs guides sur qualité, CPL et landing ; cette URL possède
la spécification et le test du système de mesure.

SERP : échantillon Web francophone observé le 21 juillet 2026 ; intention
technique et décisionnelle visible, sans volume, difficulté ni position garantie.

Sources décisives : documentations officielles Google Ads, Google Analytics,
Google Tag Manager et ressources CNIL, consultées le 21 juillet 2026.

Point mouvant : migration datée du 15 juin 2026 de certains téléversements hors
ligne vers Data Manager API, à revalider avant publication et implémentation.

Incertitudes exclues : seuil universel de conversions, taux de perte, délai
optimal, valeur d’un prospect, conformité, récupération ou performance garantie.

Action autonome : suivre un cas synthétique, puis observer un cas publicitaire
réel et licite ; nommer le premier passage non prouvé.

CTA possible : Faire tester ma chaîne de mesure vers /demarrer-un-projet, après
la valeur autonome et sans demande d’accès ni donnée client.

Plan : réponse courte, choix métier, registre à sept étapes, test bout en bout,
doublons et dates, principale ou secondaire, consentement et modélisation,
exemple puis sources.

Contre-audit initial : 0 P0 et 6 P1. Les corrections ont fermé la cohorte et sa
fenêtre, séparé doublons et tests, défini la marge sans double comptage,
distingué import accepté, correspondance, attribution et visibilité, ajouté les
fenêtres 90/63 jours et les délais 3 h/72 h, séparé cinq types d’identifiants,
documenté les règles Google relatives aux données client et réservé les coûts
par étape au futur guide CPL.

Verdict indépendant final : PASS, 0 P0, 0 P1 et 0 P2 résiduel.

Snapshot : `docs/research/manifests/suivi-conversions-google-ads-p1.sha256`.

Le journal passe en **Terminée — porte validée**. La P2 peut commencer sur ce
snapshot.

## 13. Rapport P2 — Rédaction et intégration

PASSE 2 TERMINÉE — PASS AUTEUR

- Page : `/guides/suivi-conversions-google-ads`.
- Ouverture : le lecteur part du doute concret entre le nombre affiché dans
  Google Ads et les demandes, devis et ventes réellement retrouvés dans
  l'entreprise. La réponse immédiate distingue ce que la plateforme mesure de
  ce que le dirigeant doit encore rapprocher.
- Forme propre : un même dossier est suivi à travers sept états nommés. Les
  preuves, les écarts et la décision restent séparés ; aucune couleur verte ni
  conversion déclarée ne vaut preuve de vente.
- Outil autonome : le registre local rapproche six volumes successifs, refuse
  les suites impossibles, montre chaque perte et permet de copier un compte
  rendu. Les données restent dans le navigateur ; les tests et contacts internes
  sont exclus de la cohorte commerciale avant déduplication.
- Exemple : une cohorte fermée et entièrement fictive suit 72 événements bruts,
  60 demandes uniques et 4 ventes du 1er avril au 29 juin. Les coûts variables,
  le média et les frais annexes sont définis et comptés une seule fois.
- Sources visibles : documentations officielles Google Ads, Google Analytics et
  Google Tag Manager au voisinage des affirmations techniques ; CNIL pour le
  statut des données pseudonymisées et Google pour les règles relatives aux
  données client.
- Limites : import envoyé, accepté, rapproché, attribué et visible ne sont jamais
  confondus. Les fenêtres de 90 et 63 jours et les délais indicatifs sont
  présentés dans la page comme des paramètres à revalider, pas comme des
  garanties. La migration datée du 15 juin 2026 reste documentée dans le dossier
  de recherche pour l’implémentation ; elle n’est pas transformée en détour
  technique dans le guide destiné au dirigeant.
- Action autonome : nommer le résultat métier utile, fermer un même groupe de
  demandes, relier les identifiants, rejouer un dossier de bout en bout puis
  conserver un compte rendu du test complet.
- Conversion : un seul CTA, après la démonstration, vers
  `/demarrer-un-projet`. Le formulaire ne demande ni mot de passe ni fichier de
  données clients et peut conclure qu'aucun chantier n'est nécessaire.
- Maillage : liens sortants vers l'audit, le diagnostic sans conversion, le prix
  de gestion et le choix SEO/Ads ; lien entrant contextuel ajouté depuis le
  guide d'audit Google Ads.
- Contrôles auteur : 17/17 tests ciblés, Prettier, ESLint, TypeScript,
  `git diff --check` et 184/184 tests SEO passent. Les tableaux sont limités à
  trois colonnes et l'exemple fictif est signalé avant les chiffres.
- Verdict : le contre-audit P3 indépendant peut commencer sur ce gel.
- Snapshot :
  `docs/research/manifests/suivi-conversions-google-ads-p2.sha256`.

## 14. Rapport P3 — Contre-audit indépendant

PASSE 3 TERMINÉE — PASS APRÈS CORRECTIONS

- Relecteurs : deux agents indépendants, strictement en lecture seule, l’un
  centré sur la compréhension et la conversion d’un dirigeant, l’autre sur les
  faits Google, les données, les calculs et l’outil.
- Gel P2 : les dix empreintes du manifeste ont été vérifiées avant toute
  correction.
- Verdict initial : 1 P0 éditorial, 11 groupes de P1 cumulés et plusieurs P2.
  La porte est restée fermée jusqu’à disparition de tous les P0 et P1.
- Fil narratif : l’ouverture utilise désormais le même exemple fictif que la
  démonstration, avec la qualification visible avant tout chiffre. L’image
  sociale montre des étapes, pas un résultat client inventé.
- Langage : « cohorte », « recette », « source canonique », « gouvernance » et
  les autres termes qui forçaient le dirigeant à traduire ont été remplacés par
  des dates, des demandes, un test complet, l’outil qui fait foi et des règles
  d’utilisation explicites.
- Choix technique : une comparaison distincte explique quand examiner une
  balise Google Ads, un événement Google Analytics ou un retour de l’outil
  commercial, avec la limite et le risque de doublon de chaque chemin.
- Dates et inconnues : début, fin, observation et état d’avancement sont
  obligatoires. Une case vide reste « inconnu », zéro reste zéro, les hausses à
  travers une étape inconnue sont refusées et le premier passage non prouvé est
  nommé.
- Fiche par dossier : définition de la vente, six étapes datées et prouvées,
  références techniques séparées, prochaine action et marge
  inconnue/estimée/réelle sont copiables localement sans transmission.
- Import : envoi, acceptation, correspondance Google, attribution et visibilité
  possèdent chacun leur état, leur date et leur preuve. Un état antérieur
  inconnu reste visible ; une contradiction certaine ou une chronologie inversée
  bloque la copie.
- Économie : l’exemple est fictif et hors taxes. Le solde de contribution exclut
  les charges fixes, la fiscalité et les coûts non cités ; il n’est présenté ni
  comme bénéfice net ni comme prévision.
- Données et consentement : délais et fenêtres ont été revalidés sur les aides
  officielles Google. Le test couvre avant choix, acceptation et refus ; aucune
  configuration n’est présentée comme validation juridique.
- Conversion : la promesse de lecture personnelle non démontrée a été retirée.
  Le CTA conserve l’absence d’accès demandé et la possibilité honnête de ne rien
  changer.
- Revalidation finale : PASS éditorial et PASS technique, chacun avec 0 P0,
  0 P1 et 0 P2 matériel.
- Profondeur : 4 471 mots visibles, huit H2, quatre FAQ et un seul CTA ; temps de
  lecture exact de 22 minutes à 200 mots par minute.
- Contrôles : 38/38 tests ciblés, Prettier, ESLint, TypeScript,
  `git diff --check`, 184/184 tests SEO, build de production et vérificateur
  postbuild passent.
- Snapshot :
  `docs/research/manifests/suivi-conversions-google-ads-p3.sha256`.

## 15. Rapport P4 — Plume humaine, technique et rendu réel

PASSE 4 TERMINÉE — PASS

- Plume finale : la lecture froide n’a révélé ni nouvelle promesse, ni rupture
  de ton, ni jargon laissé sans traduction. Le même exemple explicitement
  fictif relie l’ouverture, l’outil et la démonstration économique. Aucun fait
  n’a été ajouté après le double PASS indépendant de P3.
- Validation humaine réelle : non. Le contre-audit indépendant, la lecture
  froide et l’observation en navigateur ne sont pas présentés comme un test par
  un lecteur extérieur.
- Responsive : build de production observé aux largeurs CSS exactes 320, 390,
  768, 1 024 et 1 440 px. Chaque vue possède un H1, dix ancres internes
  valides, aucun identifiant dupliqué et aucun débordement horizontal. Les
  halos purement décoratifs restent contenus et ignorent les interactions.
- Inspection visuelle : héros mobile, outil, champs de dates, fiches verticales,
  CTA, guides liés et FAQ sont lisibles. Le focus clavier conserve une bordure
  et un anneau visibles. La deuxième question de FAQ s’ouvre, affiche sa réponse
  puis se referme au clic.
- Outil réel : l’état initial bloque les taux tant que la période manque. Le cas
  fictif 72 → 68 → 60 → 18 → 9 → 4 produit six cartes et les taux attendus. Une
  étape vide reste « inconnu » et la synthèse copiée nomme le premier passage
  non vérifiable. Une hausse 68 → 80 bloque la copie avec un message précis.
  Les zéros en aval affichent « non calculable » au lieu d’inventer une
  division. La remise à zéro restaure toutes les valeurs d’exemple.
- Fiche par dossier : le clic initial expose les cinq informations minimales
  manquantes. Les états d’import font apparaître leurs propres date et preuve ;
  une marge réelle exige aussi une vente datée et prouvée. Une fiche fictive
  complète a été copiée depuis le navigateur, sans donnée personnelle, puis
  l’outil a été réinitialisé.
- Données structurées : deux scripts valides, `Article` et `BreadcrumbList`
  uniquement. Aucun `FAQPage`, `HowTo`, faux avis, faux prix ou témoignage
  inventé n’est publié.
- Métadonnées : canonique exact
  `https://hagnere-code.ai/guides/suivi-conversions-google-ads`, langue française
  et état éditorial local `noindex, nofollow` conformes à la porte du lot.
- Route et image : la page répond 200. L’image sociale répond 200 en
  `image/png`, mesure 1 200 × 630 px, pèse 176 618 octets et a été observée sans
  texte coupé. Elle décrit six étapes ordinales, jamais des résultats clients.
- Console : aucun avertissement ni erreur pendant les contrôles.
- Profondeur : 4 471 mots visibles, huit H2, quatre FAQ et un seul CTA ; temps de
  lecture de 22 minutes à 200 mots par minute.
- Technique : 38/38 tests ciblés, Prettier, ESLint, TypeScript,
  `git diff --check`, 184/184 tests SEO, build de 113 routes et vérificateur
  postbuild passent. Le dernier contrôle couvre 88 URL, 71 liens dans
  `llms.txt`, 88 pages, 55 temps de lecture et 164 blocs JSON-LD.
- Scorecard : humain 2/2, réponse 2/2, décision 2/2, preuve 2/2, autonomie 2/2,
  alternatives 2/2, conversion 2/2, différenciation 2/2, sécurité 2/2 et rendu
  2/2. Total : 20/20, sans P0 ni P1.
- Autorisation : le guide reste sous porte `ready-for-human-review` jusqu’au gel
  global des dix guides. Il ne sera indexé qu’après ce dernier contrôle.
- Snapshot :
  `docs/research/manifests/suivi-conversions-google-ads-p4.sha256`.
