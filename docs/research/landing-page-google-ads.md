# Dossier de recherche — Landing page Google Ads

> Dossier du guide n° 10 du lot en cours. La recherche, la rédaction et le
> contre-audit indépendant sont terminés. La dernière passe reste nécessaire
> avant le gel global et la publication des dix guides.

## Journal des quatre passes

Propriétaire éditorial unique : **agent racine Codex**. La présente synthèse a
été préparée par un agent de recherche ; seul le propriétaire éditorial pourra
écrire et intégrer le guide.

| Passe                        | État                     | Date       | Responsable                                           | Snapshot                                      | Blocages |
| ---------------------------- | ------------------------ | ---------- | ----------------------------------------------------- | --------------------------------------------- | -------- |
| 1. Recherche                 | Terminée — porte validée | 2026-07-22 | Agent P1, sous propriété éditoriale de l’agent racine | `manifests/landing-page-google-ads-p1.sha256` | Aucun    |
| 2. Rédaction et intégration  | Terminée — porte validée | 2026-07-22 | Agent racine, éditeur unique                          | `manifests/landing-page-google-ads-p2.sha256` | Aucun    |
| 3. Contre-audit indépendant  | Terminée — porte validée | 2026-07-22 | Deux agents, strictement en lecture seule             | `manifests/landing-page-google-ads-p3.sha256` | Aucun    |
| 4. Plume humaine et contrôle | Terminée — porte validée | 2026-07-22 | Agent racine                                          | `manifests/landing-page-google-ads-p4.sha256` | Aucun    |

États autorisés : `À faire`, `En cours`, `Bloquée`, `À reprendre` et
`Terminée — porte validée`.

### État du snapshot

Le gel courant porte sur la P4 et sera vérifié par
`docs/research/manifests/landing-page-google-ads-p4.sha256`. Les manifestes P1,
P2 et P3 conservent les états historiques de chaque porte. Les deux
contre-audits finaux concluent `PASS — 0 P0 / 0 P1 / 0 P2 matériel` ; la
publication reste toutefois interdite jusqu’au gel commun des dix guides.

## 1. Fiche d’identité

| Champ                            | Décision documentaire                                                                                                                                                                                                     |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Slug                             | `landing-page-google-ads`                                                                                                                                                                                                 |
| Statut actuel                    | P4 terminée — porte validée ; publication différée au gel global des dix guides                                                                                                                                           |
| Requête principale qualitative   | landing page Google Ads                                                                                                                                                                                                   |
| Variantes utiles observées       | page de destination Google Ads ; créer une landing page Google Ads ; optimiser une landing page pour Google Ads ; quelle page utiliser pour une annonce Google Ads                                                        |
| Moment du parcours               | Décider et sécuriser la page avant de lancer ou d’augmenter une campagne Search                                                                                                                                           |
| Lecteur précis                   | Dirigeant de TPE ou PME, ou indépendant, qui finance Google Ads et hésite entre envoyer les clics vers son accueil, une page existante ou une nouvelle page dédiée                                                        |
| Situation déclenchante           | Les composants de l’annonce parlent d’une offre précise, mais la page actuelle est générale, ne montre pas les éléments attendus ou ne permet pas de vérifier que la demande arrive réellement                            |
| Phrase qu’il dirait au téléphone | « Mon annonce parle d’un service précis, mais je ne sais pas ce que le prospect doit retrouver sur la page ni comment vérifier qu’elle est prête. »                                                                       |
| Décision principale              | Garder la page actuelle en l’état, la corriger puis refaire les tests, créer une page dédiée si l’offre reste confuse, ou reporter tant que l’offre, les éléments vérifiables, l’action ou la réception ne sont pas prêts |
| Niveau de connaissance initial   | Le lecteur connaît son offre et son budget, mais ne maîtrise pas nécessairement la “page de destination”, le niveau de qualité, les balises ou l’accessibilité                                                            |
| Action utile sans contact        | Utiliser une fiche locale et remplissable qui inventorie les affirmations des titres, descriptions et autres composants actifs, puis tester la page et la réception avant lancement                                       |
| CTA possible                     | Transmettre le contexte de ma campagne et de ma page pour recevoir une première orientation                                                                                                                               |
| Destination possible             | `/demarrer-un-projet`                                                                                                                                                                                                     |
| Hors périmètre                   | Calcul du budget, prix de gestion, réglage des enchères, audit complet du compte, tutoriel de balisage, calcul de CPL ou de ROI, prix d’une landing page, SEO général et conseil juridique individualisé                  |
| Date de recherche                | 2026-07-21                                                                                                                                                                                                                |
| Mode d’observation               | Recherche web qualitative en français et lecture de sources primaires ; aucun volume, aucune difficulté et aucune position ne sont affirmés                                                                               |
| Responsable de la synthèse       | Agent P1, sous propriété éditoriale de l’agent racine                                                                                                                                                                     |

### Questions indispensables

1. Une page dédiée est-elle nécessaire, ou une page existante peut-elle
   suffire ?
2. Que doit retrouver le visiteur entre sa recherche, l’annonce et le premier
   écran de la page ?
3. Quelles preuves et conditions faut-il montrer sans inventer un résultat,
   une urgence ou un avantage ?
4. Quelle action principale proposer, et quelles informations demander dans le
   formulaire ?
5. Comment tester la page sur téléphone, au clavier et jusqu’à la réception
   réelle de la demande ?
6. Quand faut-il corriger la page, en créer une autre ou arrêter le lancement ?
7. Que peut-on apprendre après lancement sans attribuer automatiquement un
   changement de ventes à la page ?

### Objections et craintes

- « On me dit qu’il faut une page par mot-clé : est-ce vraiment nécessaire ? »
- « Si je retire le menu, est-ce que les gens convertiront davantage ? »
- « Une meilleure page va-t-elle faire baisser mes clics ou doubler mes
  demandes ? »
- « Combien de champs faut-il dans le formulaire ? »
- « Comment savoir si le problème vient de la page et non de l’offre, du trafic
  ou du suivi commercial ? »

### Score de lancement documentaire

Ce score priorise le sujet ; il ne prédit ni classement ni conversion.

| Critère                          |       Note | Justification                                                                                                               |
| -------------------------------- | ---------: | --------------------------------------------------------------------------------------------------------------------------- |
| Adéquation avec une offre vendue |      25/25 | Le site vend à la fois le pilotage publicitaire et les landing pages                                                        |
| Proximité d’une demande de devis |      24/25 | Le lecteur prépare une dépense média et peut avoir besoin de cadrage ou de réalisation                                      |
| Preuve de demande                |      10/15 | Plusieurs résultats actuels répondent à la requête ; aucun volume ni signal Search Console n’est disponible dans ce dossier |
| Preuve ou outil original         |      15/15 | Fiche locale remplissable, cas fictif, plan de page commenté et tests jusqu’à la réception                                  |
| Différenciation                  |      10/10 | Le guide décide de la continuité page-annonce sans refaire l’audit, le budget ni le suivi des conversions                   |
| Maillage et CTA utile            |      10/10 | Parcours naturel vers les guides Ads, la page service Ads et la page sites vitrines                                         |
| **Total**                        | **94/100** | Sujet maintenu en P1, sans garantie de demande ni de classement                                                             |

## 1 bis. Contrat de langage humain

### Réponse attendue en une phrase

Une page existante peut suffire si elle reprend clairement l’offre annoncée,
montre des éléments et conditions vérifiables, propose une action compréhensible
et transmet réellement la demande ; sinon, corrigez-la, créez une page dédiée
si elle reste confuse, ou reportez la campagne.

### Terme central expliqué sans jargon

Une **landing page**, ou **page de destination**, est simplement la page sur
laquelle une personne arrive après avoir cliqué sur l’annonce. Elle n’a pas
besoin d’être séparée du reste du site par principe ; elle doit surtout répondre
à ce qui a été recherché et annoncé.

### Mots du lecteur et traductions

| Terme technique      | Formulation à employer d’abord                                                             |
| -------------------- | ------------------------------------------------------------------------------------------ |
| Landing page         | Page sur laquelle le prospect arrive après le clic                                         |
| Message match        | Continuité entre la recherche, l’annonce et la page                                        |
| Call to action / CTA | Action proposée : appeler, demander un devis, réserver ou envoyer une demande              |
| Conversion           | Action choisie pour être comptée ; pas automatiquement un client                           |
| Ad Rank              | Ensemble de facteurs utilisés par Google pour décider si et où une annonce peut apparaître |
| Quality Score        | Indicateur de diagnostic de Google, pas une note de rentabilité                            |
| Above the fold       | Ce que le lecteur voit avant de faire défiler la page                                      |
| Lead                 | Demande ou contact, dont la qualité reste à vérifier                                       |

**Mots ordinaires à privilégier :** recherche tapée, annonce lue, service
attendu, preuve, condition, zone desservie, demande envoyée, demande reçue,
personne qui répond, téléphone.

**Mots d’agence à éviter dans l’ouverture :** tunnel, funnel, friction,
scalabilité, CRO, lead gen, message match, hero, signal, nurturing, above the
fold, taux de conversion optimal et machine à leads.

### Projet des 150 premiers mots

> Vous payez chaque clic Google Ads et vous hésitez à envoyer le prospect vers
> votre page d’accueil, une page de service existante ou une nouvelle page. La
> page qui s’ouvre après le clic s’appelle une landing page, ou page de
> destination. Elle n’a pas besoin d’être nouvelle : votre page actuelle peut
> suffire si elle reprend clairement le service, la zone, les conditions et
> l’action annoncés, puis transmet réellement la demande. Sinon, corrigez-la,
> créez une page dédiée si l’offre reste confuse, ou reportez la campagne. Ce
> guide concerne les annonces du Réseau de Recherche qui renvoient vers votre
> site ; il ne couvre pas Display, Shopping, YouTube ni Performance Max. Il
> vous aide à vérifier chaque affirmation, tester la page sur téléphone et
> confirmer que la demande arrive à la bonne personne.

Après cette ouverture, le lecteur doit savoir qu’il ne s’agit pas d’appliquer
un modèle de page universel, mais de vérifier une continuité concrète et de
choisir entre quatre sorties.

### Test de l’ouverture à imposer en P2

- [x] la dépense et la situation vécue arrivent avant la méthode ;
- [x] landing page est expliquée avec des mots ordinaires ;
- [x] la réponse courte apparaît avant le premier plan ;
- [x] la page existante et le report restent des décisions possibles ;
- [x] aucune hausse de conversion, baisse de coût ou vitesse de résultat n’est
      promise ;
- [x] l’action autonome est annoncée ;
- [ ] le brouillon public conservera cette clarté après intégration.

### Test sujet, action, résultat à préparer pour P4

Ces formulations servent de garde-fou au futur brouillon ; elles ne sont pas un
test P4 déjà réalisé.

| Formulation abstraite à bannir | Qui agit ?                   | Action concrète                                                             | Résultat attendu                | Formulation possible                                                                                                  |
| ------------------------------ | ---------------------------- | --------------------------------------------------------------------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| « Aligner les messages »       | Le dirigeant ou le rédacteur | Recopie chaque promesse de l’annonce et montre où la page y répond          | Repère une promesse absente     | « Recopiez chaque promesse de l’annonce, puis indiquez la phrase ou la preuve qui lui répond sur la page. »           |
| « Réduire la friction »        | L’équipe                     | Envoie le formulaire sur téléphone et au clavier                            | Trouve l’étape qui bloque       | « Envoyez une demande sur téléphone, puis recommencez au clavier et notez l’endroit précis où l’action échoue. »      |
| « Optimiser le hero »          | Le responsable de la page    | Réécrit le premier écran avec offre, public, zone et action                 | Le prospect reconnaît l’offre   | « Sur le premier écran, dites à qui s’adresse le service, où il est disponible et ce que la personne peut demander. » |
| « Ajouter de la preuve »       | L’entreprise                 | Relie chaque affirmation à un document, une méthode ou une condition réelle | Évite une promesse creuse       | « Pour chaque affirmation, montrez une preuve autorisée ou retirez-la. »                                              |
| « Améliorer les conversions »  | L’équipe Ads et commerciale  | Suit la demande du clic jusqu’à sa réception et sa qualification            | Sait ce qui a réellement changé | « Vérifiez d’abord que la demande arrive et qu’une personne la traite avant d’attribuer un résultat à la page. »      |

## 2. Frontières et anti-cannibalisation

| Page existante ou future                  | Intention détenue par cette page                                                       | Frontière du présent guide                                                                         | Maillage prévu                                                                      |
| ----------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `budget-google-ads-pme`                   | Fixer un budget test à partir de la marge, d’une prévision et du risque de trésorerie  | Aucun montant, CPC, plafond média ou calcul de budget ici                                          | Lien si le lecteur n’a pas encore chiffré son test                                  |
| `prix-gestion-google-ads`                 | Comprendre média, honoraires et coûts annexes                                          | Aucun tarif d’agence, prix de landing page ou comparaison de devis                                 | Lien si le lecteur veut budgéter le dispositif complet                              |
| `audit-google-ads-que-verifier`           | Examiner tout un compte actif avant d’investir davantage                               | Le présent guide approfondit uniquement la relation annonce-page et les tests de la page           | Lien si plusieurs familles d’anomalies apparaissent                                 |
| `pourquoi-google-ads-ne-convertit-pas`    | Diagnostiquer une campagne qui dépense déjà sans produire assez de clients ou de marge | Ici, la page est conçue et testée avant ou pendant le lancement ; aucun arbre global de diagnostic | Lien retour si la page passe le protocole mais que le résultat disparaît ailleurs   |
| `seo-ou-google-ads`                       | Choisir le premier canal d’acquisition                                                 | Google Ads est déjà retenu ou sérieusement envisagé                                                | Lien seulement si le canal reste en question                                        |
| `suivi-conversions-google-ads`            | Définir, implémenter et tester la chaîne de mesure jusqu’au CRM                        | Ici, on vérifie l’action et la réception ; aucun tutoriel de balise, import ou objectif d’enchères | Lien lorsque le formulaire fonctionne mais que la mesure reste à construire         |
| futur `calculer-cout-par-lead-google-ads` | Relier dépense, qualification, vente et marge                                          | Aucun calcul économique après lancement                                                            | Lien futur seulement depuis l’analyse des résultats                                 |
| futur `prix-landing-page`                 | Comprendre le coût de conception et de réalisation                                     | Aucun prix ni devis dans ce guide                                                                  | Lien futur éventuel après décision de créer une page                                |
| `preparer-contenus-site-vitrine`          | Réunir les contenus d’un site entier avant conception                                  | Le présent guide traite une seule offre achetée via une recherche payante                          | Lien si le blocage porte sur l’ensemble des contenus du site                        |
| `pourquoi-mon-site-ne-convertit-pas`      | Diagnostiquer un site entier, tous canaux confondus                                    | La continuité recherche-annonce-page est exclusive au présent guide                                | Lien si le problème dépasse le trafic Ads                                           |
| `/services/publicite-en-ligne`            | Présenter l’offre transactionnelle de gestion Ads                                      | Le guide reste une méthode autonome et non un argumentaire d’agence                                | Lien contextuel après le protocole                                                  |
| `/services/sites-vitrines`                | Présenter la création de sites vitrines et landing pages                               | Le guide aide d’abord à décider si une nouvelle page est nécessaire                                | Lien seulement pour le lecteur qui a conclu qu’il faut concevoir ou refaire la page |

**Justification d’une URL distincte :** aucune page actuelle ne donne au
dirigeant une fiche remplissable, un plan de page et des tests pour décider si
la page liée aux composants d’une annonce Search peut être gardée, corrigée,
remplacée par une page dédiée ou bloquée.

**Règle éditoriale anti-cannibalisation :** le fil reste recherche → annonce →
page → preuve → action → réception. Si une section commence à expliquer le
budget, les enchères, le marquage détaillé, le CPL ou le SEO du site, elle est
retirée ou remplacée par un lien.

## 3. Demande et vocabulaire observés

### Mode d’observation et limites

Recherche qualitative effectuée le 21 juillet 2026 avec les formulations :

- `landing page Google Ads` ;
- `page de destination Google Ads optimiser` ;
- `créer une landing page Google Ads` ;
- `landing page Adwords conseils`.

Cette observation ne fournit ni volume de recherche, ni difficulté SEO, ni
part de marché, ni ordre de classement stable. La localisation exacte appliquée
par le moteur n’est pas considérée comme prouvée. Les concurrents ci-dessous
servent à comprendre les réponses déjà proposées, jamais à établir un fait
produit, juridique ou causal.

### Carte concurrentielle qualitative

| Page observée                                                                                                                           | Réponse et angle                                                        | Bon point                                                | Limite ou manque décisionnel                                                                                                                              | Conflit d’intérêt éventuel             |
| --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| [Google Ads — Optimiser les annonces et les pages de destination](https://support.google.com/google-ads/answer/6238826?hl=fr)           | Faire correspondre annonce, mots-clés et page ; rendre l’action visible | Source primaire claire sur la continuité                 | Documentation produit, sans fiche métier remplie, plan de page complet ni test de réception                                                               | Google vend la plateforme publicitaire |
| [La Refonte — Landing page Google Ads](https://www.la-refonte.fr/blog/landing-page-google-ads)                                          | Message cohérent et optimisation de la page                             | Explique l’intérêt de reprendre la promesse de l’annonce | Promesses chiffrées d’amélioration et cadrage commercial non réutilisables sans corpus reproductible ; ne traite pas assez la décision « garder la page » | Agence vendant la prestation           |
| [Layerdev — Conseils pour les landing pages Google Ads](https://layerdev.io/conseils-landing-pages-google-ads/)                         | Structure, offre, formulaire et bouton d’action                         | Bases lisibles pour une première page                    | Pas de vérification ligne par ligne, de responsable des éléments ni de test opérationnel complet                                                          | Prestataire web                        |
| [Léo Marchal — Landing page Google Ads](https://leo-marchal.fr/landing-page-google-ads/)                                                | Présente une structure de page complète                                 | Couvre plusieurs éléments attendus                       | Exemples chiffrés et règles générales non retenus comme benchmarks ; pas d’artefact auditable jusqu’à la réception                                        | Consultant vendant ses services        |
| [ROA Marketing — Do you need a landing page for Google Ads?](https://roa-marketing.com/blog/do-you-need-a-landing-page-for-google-ads/) | Nuance l’obligation d’une page dédiée                                   | Reconnaît qu’une page existante peut convenir            | Certaines causalités et fourchettes commerciales ne sont pas transposables à une PME française sans preuve propre                                         | Agence marketing                       |

**Angle mort commun :** les pages donnent souvent une liste d’éléments à
ajouter, mais moins souvent une méthode qui permet de conclure honnêtement
« notre page actuelle suffit », « corrigeons-la puis retestons », « il faut une
page distincte » ou « il faut reporter la campagne ».

**Valeur originale :** une seule chaîne vérifiable, matérialisée par une fiche
locale remplissable, un cas fictif, un plan de page commenté et des tests allant
jusqu’à la réception de la demande. Aucun score opaque et aucune recommandation
automatique d’acheter une nouvelle page.

## 4. Fiche de preuves

Toutes les sources ont été consultées le 21 juillet 2026 et les sources
décisives ont été revalidées le 22 juillet 2026. Les documentations
Google sont primaires pour le fonctionnement et les règles de Google Ads ;
elles ne prouvent ni la rentabilité d’une campagne ni la conformité juridique
d’une entreprise. La CNIL fournit des repères français généraux qui ne
remplacent pas une analyse du traitement réel. Les ressources W3C servent à
concevoir et tester l’accessibilité ; la checklist du guide ne constitue pas une
certification WCAG ou juridique.

| Affirmation utilisable                                                                                                                                                                                                                             | Source primaire et passage utile                                                                                                                                                                                     | Nature                                | Publication ou mise à jour affichée                                       | Consultation                                                                                                      | Confiance, limite et usage public                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Google recommande de choisir une page qui correspond précisément à l’annonce, aux mots-clés et à l’action proposée                                                                                                                                 | [Optimiser les annonces et les pages de destination](https://support.google.com/google-ads/answer/6238826?hl=fr)                                                                                                     | Conseil produit                       | Date non affichée par Google                                              | 22-07-2026                                                                                                        | Élevée sur le conseil, nulle sur une hausse de conversion : présenter comme recommandation, jamais comme règle de refus                         |
| Une annonce responsive Search utilise 3 à 15 titres de 30 caractères maximum et 2 à 4 descriptions de 90 caractères maximum ; Google peut les combiner dans différents ordres et l’aperçu n’est pas exhaustif                                      | [Annonces responsives sur le Réseau de Recherche](https://support.google.com/google-ads/answer/7684791?hl=fr)                                                                                                        | Fonctionnement produit                | Date non affichée par Google                                              | 22-07-2026                                                                                                        | Élevée : inventorier chaque affirmation portée par tous les composants actifs ; aucune combinaison n’est présentée comme certaine               |
| Des titres et descriptions peuvent être définis au niveau de l’annonce ou de la campagne ; la flexibilité améliorée peut utiliser des composants d’une autre annonce active du même groupe et conduire vers son URL finale                         | [À propos des composants](https://support.google.com/google-ads/answer/7331111?hl=fr), section « Flexibilité améliorée »                                                                                             | Fonctionnement produit                | Date non affichée par Google                                              | 22-07-2026                                                                                                        | Élevée : inventorier les niveaux, l’annonce d’origine et l’URL possible ; ne pas auditer une seule RSA isolée                                   |
| Google peut créer des composants automatiques au niveau du compte et les partager entre plusieurs campagnes                                                                                                                                        | [Composants automatiques au niveau du compte](https://support.google.com/google-ads/answer/7175034?hl=fr)                                                                                                            | Fonctionnement produit                | Date non affichée par Google                                              | 22-07-2026                                                                                                        | Élevée : consulter les associations et rapports du compte ; l’inventaire est daté, pas réputé définitif                                         |
| Dans Search avec AI Max, l’adaptation du texte peut ajouter des titres et descriptions issus notamment du domaine, de la page, d’annonces existantes et des mots-clés ; l’extension d’URL finale peut choisir une autre page pertinente du domaine | [Adaptation du texte dans Search](https://support.google.com/google-ads/answer/11259373?hl=fr) et [AI Max pour Search](https://support.google.com/google-ads/answer/15910187?hl=fr)                                  | Fonctionnement produit optionnel      | Date non affichée par Google                                              | 22-07-2026                                                                                                        | Élevée si ces réglages sont actifs : examiner rapports, contenu source et contrôles d’URL ; ne pas prétendre prédire tous les composants futurs |
| L’utilité et la pertinence de l’annonce et de sa page font partie de plusieurs facteurs pris en compte dans l’Ad Rank                                                                                                                              | [Classement de l’annonce](https://support.google.com/google-ads/answer/1722122?hl=fr)                                                                                                                                | Fonctionnement produit                | Date non affichée par Google                                              | 22-07-2026                                                                                                        | Élevée, mais aucun effet fixe sur coût ou position : refuser toute promesse de baisse du CPC                                                    |
| Le niveau de qualité est un outil de diagnostic et non une entrée directe des enchères                                                                                                                                                             | [Niveau de qualité](https://support.google.com/google-ads/answer/6167118?hl=fr)                                                                                                                                      | Fonctionnement produit                | Date non affichée par Google                                              | 22-07-2026                                                                                                        | Élevée : ne pas traiter cet indicateur comme une mesure de rentabilité                                                                          |
| La destination doit être fonctionnelle, explorable et accessible à Google AdsBot, cohérente avec le domaine et facile à parcourir ; des erreurs HTTP ou une mauvaise expérience peuvent entraîner un refus                                         | [Exigences relatives à la destination](https://support.google.com/adspolicy/answer/6368661?hl=fr) et [expérience au niveau de la destination](https://support.google.com/adspolicy/answer/16427615?hl=fr)            | Règle produit                         | Date non affichée par Google                                              | 22-07-2026                                                                                                        | Élevée sur les règles, nulle sur la qualité commerciale : tester URL, domaine, navigateur et retour sans confondre approbation et vente         |
| Sur mobile, l’information doit rester facile à trouver, la navigation simple et la page suffisamment rapide pour être utilisée                                                                                                                     | [Optimiser les annonces et les pages](https://support.google.com/google-ads/answer/6238826?hl=fr)                                                                                                                    | Conseil produit                       | Date non affichée par Google                                              | 22-07-2026                                                                                                        | Élevée sur le conseil, sans seuil universel : observer un téléphone et un réseau représentatifs ; un score reste un diagnostic                  |
| Le rapport sur les pages de destination aide à repérer les URL et des données d’expérience mobile                                                                                                                                                  | [Évaluer les pages de destination](https://support.google.com/google-ads/answer/7543502?hl=fr)                                                                                                                       | Fonctionnement produit                | Date non affichée par Google                                              | 22-07-2026                                                                                                        | Élevée sur le rapport ; il ne prouve ni vente ni causalité                                                                                      |
| Le rapport sur les termes de recherche n’affiche pas nécessairement tous les termes associés aux clics, notamment selon les seuils de confidentialité                                                                                              | [Rapport sur les termes de recherche](https://support.google.com/google-ads/answer/2472708?hl=fr)                                                                                                                    | Fonctionnement produit                | Date non affichée par Google                                              | 22-07-2026                                                                                                        | Élevée : écrire « termes rendus visibles », jamais « toutes les recherches payées »                                                             |
| Les données collectées doivent être adéquates, pertinentes et limitées à la finalité                                                                                                                                                               | [Minimiser les données collectées](https://www.cnil.fr/fr/minimiser-les-donnees-collectees)                                                                                                                          | Principe de protection des données    | 27-01-2020                                                                | 22-07-2026                                                                                                        | Élevée sur le principe, dépendante du traitement réel : justifier chaque champ sans imposer un nombre universel                                 |
| L’information du formulaire doit notamment couvrir responsable, finalité, base légale, destinataires, conservation, droits et caractère obligatoire des champs ; le consentement n’est qu’une base légale possible                                 | [Information et transparence](https://www.cnil.fr/fr/conformite-rgpd-information-des-personnes-et-transparence) et [bases légales](https://www.cnil.fr/fr/les-bases-legales/liceite-essentiel-sur-les-bases-legales) | Doctrine de l’autorité française      | 29-07-2019, mise à jour affichée 26-07-2019 ; 29-11-2019                  | 22-07-2026                                                                                                        | Élevée comme cadre général, sans avis juridique individuel : distinguer demande, prospection ultérieure et traceurs                             |
| Les exemptions de certains outils de mesure d’audience sont strictement conditionnées ; de nombreux traceurs de mesure publicitaire nécessitent le consentement, qui doit pouvoir être refusé et retiré                                            | [Solutions de mesure d’audience](https://www.cnil.fr/fr/cookies-solutions-pour-les-outils-de-mesure-daudience) et [FAQ cookies et traceurs](https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/FAQ)    | Doctrine de l’autorité française      | 04-07-2025 et 29-04-2026                                                  | Élevée sur les principes, configuration à vérifier : ne jamais étendre automatiquement une exemption à Google Ads |
| TLS doit être imposé sur les pages qui affichent ou transmettent des données personnelles, et ces données ne doivent pas passer dans l’URL                                                                                                         | [Sécuriser les sites web](https://www.cnil.fr/fr/securite-securiser-les-sites-web)                                                                                                                                   | Recommandation de sécurité CNIL       | 14-03-2024                                                                | 22-07-2026                                                                                                        | Élevée comme porte de lancement ; ce contrôle ne certifie pas la sécurité globale                                                               |
| Pour les champs ordinaires, un libellé visible associé, des instructions utiles et des erreurs compréhensibles sont des choix robustes ; le placeholder seul ne suffit pas                                                                         | [WAI Forms Tutorial](https://www.w3.org/WAI/tutorials/forms/) et [Labeling Controls](https://www.w3.org/WAI/tutorials/forms/labels/)                                                                                 | Explications officielles informatives | Forms : 09-2014, mise à jour 27-03-2026 ; Labels : mise à jour 13-05-2024 | 22-07-2026                                                                                                        | Élevée comme recommandation de conception ; d’autres associations accessibles peuvent être valides et aucune certification n’en découle         |
| WCAG 2.2 impose au critère 2.5.8 une cible de 24 × 24 pixels CSS ou un espacement suffisant, avec exceptions, et au critère 2.4.7 un focus visible                                                                                                 | [WCAG 2.2 — 2.5.8](https://www.w3.org/TR/WCAG22/#target-size-minimum) et [WCAG 2.2 — 2.4.7](https://www.w3.org/TR/WCAG22/#focus-visible)                                                                             | Norme W3C                             | Recommandation du 12-12-2024                                              | 22-07-2026                                                                                                        | Élevée sur ces critères uniquement : ne pas déduire une conformité WCAG complète ni un effet commercial                                         |

### Faits, déductions et recommandations

**Faits vérifiés utilisables :**

- Google recommande une correspondance claire entre recherche, annonce et page ;
- une annonce responsive Search combine plusieurs titres et descriptions, dont
  l’aperçu ne montre pas toutes les associations possibles ;
- des composants texte peuvent exister au niveau de l’annonce ou de la
  campagne ; des composants automatiques peuvent aussi être créés au niveau du
  compte ;
- la flexibilité améliorée peut emprunter un titre ou une description à une
  autre annonce active du même groupe et utiliser l’URL finale de cette autre
  annonce ;
- si AI Max est actif, l’adaptation du texte et l’extension d’URL finale peuvent
  élargir à la fois le texte et la page réellement montrés ;
- la qualité de la page participe à l’Ad Rank, avec d’autres facteurs ;
- le niveau de qualité reste un diagnostic et non une entrée directe des
  enchères ;
- la destination doit fonctionner et rester navigable ;
- les champs d’un formulaire et l’information associée dépendent de la finalité
  réelle ;
- la réponse à une demande, la prospection ultérieure et le dépôt de traceurs
  sont trois traitements ou opérations à examiner séparément ;
- TLS, absence de donnée personnelle dans l’URL, libellés, erreurs,
  confirmations et indicateurs de focus sont des points concrets à tester.

**Déductions éditoriales :**

- les sources officielles consultées demandent une destination pertinente ;
  elles n’imposent pas une nouvelle URL pour chaque mot-clé. Une page existante
  peut donc être conservée si elle répond clairement à l’offre et passe les
  tests ;
- une page approuvée par Google peut tout de même être mauvaise pour le
  prospect ou pour le traitement commercial ;
- une demande techniquement envoyée ne prouve pas qu’elle a été reçue, lue ou
  qualifiée ;
- retirer tout le menu, raccourcir systématiquement la page ou multiplier les
  pages n’est pas une règle universelle ;
- une hausse ou une baisse de ventes après modification ne prouve pas à elle
  seule que la page en est la cause.

**Recommandations Hagnéré Code :**

- une ligne par affirmation importante de tous les titres, descriptions et
  autres composants actifs, avec son responsable, son élément vérifiable ou sa
  condition, sa date de contrôle et son état ;
- une seule action principale sur laquelle le texte se concentre, sans interdire
  des aides secondaires utiles ;
- une page dédiée seulement lorsqu’elle résout une différence réelle d’offre,
  de public, de zone, de condition ou d’action ;
- un test complet sur téléphone et réseau représentatifs, au clavier, avec un
  contrôle ponctuel des noms accessibles et jusqu’au système qui reçoit la
  demande ;
- un lancement bloqué si l’offre, la preuve ou la responsabilité de réponse
  n’est pas prête.

### Contradictions et informations à ne pas publier

- « Une landing page dédiée est obligatoire pour Google Ads. »
- « Il faut une page par mot-clé. »
- « Une bonne page fait automatiquement baisser le coût par clic. »
- « Le niveau de qualité fixe directement le prix du clic. »
- « Retirer le menu augmente toujours les conversions. »
- « Une page courte convertit mieux » ou « une page longue convertit mieux ».
- « Il faut exactement trois, cinq ou sept champs. »
- un seuil universel de vitesse, de taux de conversion ou de durée de test ;
- une case de consentement présentée comme obligatoire dans tous les
  formulaires, ou au contraire comme jamais nécessaire ; le traitement de la
  demande, la prospection ultérieure et les traceurs doivent rester séparés ;
- le mode Consentement, un tag ou une CMP présenté comme conformité juridique ;
- l’approbation de l’annonce présentée comme preuve d’accessibilité, de vente ou
  de conformité ;
- un faux avis, logo, client, résultat, stock limité, délai de réponse ou nombre
  de demandes ;
- une ressource téléchargeable qui n’existe pas encore.

### Événements imposant une revalidation

- évolution des politiques de destination, de l’Ad Rank ou du niveau de qualité
  Google Ads ;
- modification du rapport sur les pages de destination ;
- changement des règles ou interfaces de consentement et de mesure Google ;
- mise à jour de la doctrine CNIL sur formulaires, cookies ou traceurs
  publicitaires ;
- évolution de WCAG ou des composants de formulaire du site ;
- changement de l’offre Hagnéré Code, de la page `/demarrer-un-projet`, de la
  promesse de réponse ou des pages service reliées.

## 5. Angle et empreinte éditoriale

### Guides voisins à ne pas reproduire

| Guide voisin                           | Type d’ouverture                     | Progression                    | Dispositif dominant               | Ce que le nouveau guide ne reprend pas                |
| -------------------------------------- | ------------------------------------ | ------------------------------ | --------------------------------- | ----------------------------------------------------- |
| `budget-google-ads-pme`                | Hésitation entre plusieurs montants  | Coût, marge, prévision, risque | Calculateur des trois montants    | Aucun calcul média, plafond ou scénario de trésorerie |
| `pourquoi-google-ads-ne-convertit-pas` | Clics et conversions sans clients    | Recherche du premier écart     | Diagnostic clic → marge           | Aucun arbre global de campagne ni analyse de ventes   |
| `audit-google-ads-que-verifier`        | Doute avant hausse ou reprise        | Six familles de contrôles      | Registre de décision du compte    | Aucune checklist exhaustive du compte                 |
| `seo-ou-google-ads`                    | Arbitrage entre deux investissements | Objectifs, canaux, coûts, plan | Comparaison et plan dans le temps | Aucun comparatif SEO/Ads ni plan de 90 jours          |
| `preparer-contenus-site-vitrine`       | Blocage avant création du site       | Inventaire et préparation      | Contenus du site entier           | Aucun inventaire global de pages ou de contenus       |

### Choix propre au guide

```text
Tension motrice : le clic a été acheté, mais la page tient-elle exactement la
promesse qui a déclenché ce clic ?

Ouverture : plusieurs composants d’annonce précis confrontés à une page
d’accueil vague.

Progression : décision en quatre sorties, fiche interactive, cas rempli, plan
de page commenté, tests avant lancement, puis observation prudente après
lancement.

Artefact signature : une fiche locale et remplissable qui relie chaque
affirmation des composants d’annonce à la réponse de la page, à sa condition,
à son responsable et à son état. Le plan de page et les tests réutilisent la
même fiche au lieu d’introduire deux autres méthodes.

Rythme et voix : questions de dirigeant, verbes concrets, phrases courtes autour
des décisions ; aucune métaphore à mémoriser.

Place du CTA : seulement après la fiche, le plan de page et les tests qui
permettent de travailler sans l’agence.

Conclusion : garder la page en l’état, la corriger puis refaire les tests,
construire une page dédiée si l’offre reste confuse, ou reporter. La conclusion
peut donc ne provoquer aucun achat.

Différences : pas de calculateur, pas d’arbre complet du compte, pas de plan
calendaire, pas de score et pas de recommandation automatique d’une nouvelle
page.
```

## 6. Artefact signature — fiche annonce-page locale

P2 devra intégrer un véritable outil remplissable dans l’article, utilisable
sur mobile et au clavier. Les saisies restent uniquement en mémoire dans la
page en cours : elles ne sont ni transmises à Hagnéré Code, ni persistées dans
`localStorage` ou `sessionStorage`, et disparaissent au rechargement, à la
fermeture ou à la remise à zéro. Aucun téléchargement n’est promis. Une
solution de copie manuelle reste visible si l’accès au presse-papiers est
refusé.

### Ce que l’outil doit contenir

**Contexte commun :** recherche représentative, URL ou référence de la page,
action principale, personne ou équipe qui reçoit la demande, confirmation
attendue, appareil, navigateur, largeur, type de réseau et date du test.

**Une ligne par affirmation importante :** origine (`titre`, `description` ou
autre composant actif), niveau (`annonce`, `groupe d’annonces`, `campagne` ou
`compte`), texte exact, URL vers laquelle le composant peut conduire, réponse
trouvée sur cette page, élément vérifiable ou condition, responsable, date de
dernière vérification, correction à effectuer et état `inconnu`, `prêt`, `à
corriger` ou `bloquant`. Un champ essentiel vide produit l’état `inconnu` et
empêche toute conclusion positive.

**Inventaire Google Ads à faire avant les lignes :** titres et descriptions de
chaque annonce responsive active, composants texte au niveau de la campagne,
composants manuels associés à l’annonce, au groupe, à la campagne ou au compte,
et composants automatiques au niveau du compte. La flexibilité améliorée peut
transformer des titres ou descriptions inutilisés de la même annonce, voire
d’une autre annonce active du même groupe, en composants de type lien ; dans ce
dernier cas, le clic peut mener à l’URL finale de l’autre annonce. Il faut donc
noter ensemble le texte, son origine et son URL possible.

Pour garder le parcours principal accessible au dirigeant, l’inventaire des
niveaux campagne et compte, des composants automatiques et d’AI Max est présenté
comme un contrôle avancé à demander à la personne qui gère Google Ads. Son
absence laisse ces éléments `inconnus` ; elle n’est pas maquillée en réussite.

Si AI Max et l’adaptation du texte sont activés, l’inventaire doit aussi
examiner les composants générés dans le rapport détaillé, le contenu du domaine
utilisé comme source, l’état de l’extension d’URL finale et les URL incluses ou
exclues. Ces composants évoluent : la fiche indique la date et ne prétend
jamais avoir prédit toutes les annonces futures.

**Tests rattachés à la même fiche :** affichage utile sur téléphone, stabilité
visuelle, clavier et focus, noms accessibles et annonces d’erreur, erreur
réseau/serveur sans faux succès, correction puis renvoi, confirmation,
réception par la bonne personne, information du formulaire et comportement des
traceurs selon accepter, refuser et retirer.

**Actions :** charger l’exemple fictif, ajouter ou supprimer une ligne, copier
une synthèse textuelle, imprimer, remettre à zéro. La synthèse contient le
contexte, chaque ligne avec son origine et son URL, les tests, les inconnues et
la décision. La remise à zéro doit effacer tous les champs. P2 testera aussi le
refus du presse-papiers et vérifiera l’absence d’accès réseau, de
`localStorage` et de `sessionStorage`.

### Mode d’emploi

1. choisir une recherche représentative d’une seule offre ;
2. recopier tous les titres, descriptions et autres composants actifs qui
   portent une affirmation importante ;
3. ne pas se fier à un seul aperçu : Google précise qu’il ne montre pas toutes
   les combinaisons possibles ;
4. créer une ligne par affirmation, même lorsqu’elle se répète dans plusieurs
   composants ;
5. indiquer où la page répond, qui vérifie l’élément et à quelle date ;
6. consigner l’action, la confirmation et le véritable destinataire ;
7. refaire les tests après chaque correction importante.

### Cas rempli

**Exemple illustratif fictif — ThermoBureau 73.** Cette entreprise, son offre,
ses annonces et ses documents sont inventés pour expliquer la méthode. Ils ne
constituent ni un client, ni une réalisation, ni un résultat Hagnéré Code.

Hypothèse pédagogique : ThermoBureau 73 propose un service B2B d’entretien de
climatisation de bureaux en Savoie. La recherche retenue est
`entretien climatisation bureaux Chambéry`.

Composants fictifs d’une annonce responsive Search, tous saisissables selon les
limites documentées par Google :

```text
Titres (23, 23, 19, 26 et 23 caractères) :
- Entretien climatisation
- Pour bureaux à Chambéry
- Demandez une visite
- Inventaire des équipements
- Proposition d’entretien

Descriptions (83 et 77 caractères) :
- Une visite technique pour recenser vos équipements et préparer un entretien adapté.
- Pour bureaux en Savoie. Décrivez vos locaux et demandez un créneau de visite.
```

Google peut associer et ordonner ces composants de plusieurs façons. Cette
liste ne prédit donc pas l’annonce exacte qui sera affichée ; elle oblige à
vérifier chaque affirmation qui pourrait atteindre le prospect.

Inventaire fictif des autres niveaux avant de remplir les lignes :

- annonce examinée : active, URL finale fictive
  `/entretien-climatisation-bureaux` ;
- composants texte de campagne : aucun dans cet exemple ;
- autre annonce active du même groupe : titre fictif « Dépannage
  climatisation », URL finale fictive `/depannage-climatisation` ; l’ensemble
  doit être vérifié avec son intitulé, son URL et le contexte de l’annonce. La
  différence d’offre ne suffit pas à le déclarer bloquant ;
- composants manuels et automatiques du compte : liens annexes fictifs
  « Entretien » et « Dépannage », avec leurs URL respectives, à vérifier ligne
  par ligne ;
- AI Max, adaptation du texte et extension d’URL finale : désactivés dans cet
  exemple. S’ils étaient actifs, le rapport détaillé des composants, les titres
  et URL du rapport sur les termes de recherche et les contrôles d’URL seraient
  requis.

| Origine, niveau, URL fictive et affirmation                                                           | Réponse attendue sur la page                                     | Élément vérifiable ou condition                                                                                             | Responsable, date et état                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Titre de l’annonce examinée — `/entretien-climatisation-bureaux` — « Entretien climatisation »        | Le premier écran nomme précisément le service                    | Déroulé réel de la visite, sans rapport inventé                                                                             | Responsable service — date fictive 15-07-2026 — prêt                                                                                                                                                |
| Titre de l’annonce examinée — même URL — « Pour bureaux à Chambéry »                                  | Public professionnel et zone apparaissent ensemble               | Types de locaux et communes réellement desservis                                                                            | Responsable commercial — date fictive 15-07-2026 — prêt                                                                                                                                             |
| Titre de l’annonce examinée — même URL — « Demandez une visite »                                      | Le formulaire permet réellement cette demande                    | Destinataire et confirmation testés                                                                                         | Responsable commercial — date fictive 15-07-2026 — à corriger tant que l’envoi n’est pas testé                                                                                                      |
| Titre — « Inventaire des équipements »                                                                | La page explique ce qui est recensé                              | Document réel autorisé ou description exacte ; aucun faux exemple                                                           | Responsable service — date fictive 15-07-2026 — prêt                                                                                                                                                |
| Titre — « Proposition d’entretien »                                                                   | La suite de la visite est décrite sans délai inventé             | Contenu effectivement remis et conditions applicables                                                                       | Responsable service — date fictive 15-07-2026 — prêt                                                                                                                                                |
| Description — « bureaux en Savoie »                                                                   | La page distingue Chambéry de la zone plus large                 | Liste des zones tenue à jour                                                                                                | Responsable commercial — date fictive 15-07-2026 — prêt                                                                                                                                             |
| Description — « demandez un créneau »                                                                 | L’action et la confirmation emploient les mêmes mots             | Ne pas faire croire qu’un rendez-vous est automatiquement confirmé                                                          | Responsable commercial — date fictive 15-07-2026 — bloquant si la confirmation promet déjà un rendez-vous                                                                                           |
| Titre d’une autre annonce active du groupe — `/depannage-climatisation` — « Dépannage climatisation » | La page liée décrit honnêtement un dépannage distinct            | La flexibilité améliorée peut emprunter ce titre et son URL ; vérifier l’ensemble plutôt que la différence de service seule | Responsable Ads — date fictive 15-07-2026 — prêt si texte, page et contexte concordent ; à corriger ou bloquant uniquement en cas de fausse promesse, destination incohérente ou confusion concrète |
| Lien annexe automatique au niveau du compte — URL à confirmer — « Dépannage »                         | La destination doit correspondre au dépannage, pas à l’entretien | Association et rapport des composants du compte                                                                             | Responsable Ads — état inconnu tant que l’URL n’est pas relevée                                                                                                                                     |

Les rôles et dates ci-dessus appartiennent eux aussi à l’exemple fictif. Le cas
ne publie aucun délai de réponse, taux de conversion, prix, logo, avis ou
document supposé réel.

### Comment interpréter la fiche

- **Garder la page en l’état** seulement si chaque affirmation importante est
  prête et si l’action, la confirmation et la réception ont été testées.
- **Corriger la page puis refaire les tests** lorsqu’un texte, une condition,
  un formulaire ou une confirmation peut être réparé sur la page actuelle.
- **Créer une page dédiée** si une offre, un public, une zone ou une action reste
  confuse sur la page générale alors que l’entreprise dispose des contenus
  vrais pour la clarifier.
- **Reporter la campagne** si l’offre n’est pas définie, si un élément est
  inventé ou indisponible, si le formulaire échoue ou si personne ne peut
  traiter les demandes.

L’outil n’attribue aucun score, ne certifie aucune conformité et ne prédit pas
la conversion. Une ligne importante inconnue ou bloquante ne peut pas être
compensée par un meilleur design.

## 7. Plan de page commenté

Ce plan décrit les questions auxquelles la page doit répondre ; il ne prescrit
ni un style visuel, ni un nombre universel de blocs, ni la suppression du menu.
Le terme anglais « wireframe » ne sera pas nécessaire dans le texte public.

### Exemple mobile fictif rempli

```text
┌──────────────────────────────────────┐
│ 1. ThermoBureau 73 + navigation utile│
├──────────────────────────────────────┤
│ 2. Entretien climatisation           │
│    Pour bureaux à Chambéry           │
│    [Demander une visite]             │
├──────────────────────────────────────┤
│ 3. Ce que la visite permet de relever│
│    et ce qui est remis ensuite       │
├──────────────────────────────────────┤
│ 4. Bureaux concernés, zone, limites  │
├──────────────────────────────────────┤
│ 5. Méthode et éléments vérifiables   │
├──────────────────────────────────────┤
│ 6. Formulaire avec libellés visibles │
│    [Envoyer la demande]              │
├──────────────────────────────────────┤
│ 7. Confirmation fidèle et contact    │
└──────────────────────────────────────┘
```

Le dessin est une application du cas fictif, pas un modèle universel. Chaque
zone disparaît, se déplace ou se développe si la fiche montre qu’une autre
réponse est plus utile.

| Zone de la page         | Question du prospect                                                      | Contenu possible                                                         | Preuve ou critère d’acceptation                                            | Erreur à éviter                                                            |
| ----------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| En-tête                 | Suis-je sur le bon site et puis-je revenir en arrière ?                   | Marque, navigation utile, téléphone seulement s’il est réellement traité | Domaine correct, retour navigateur fonctionnel, liens légaux accessibles   | Retirer toute navigation par principe ou bloquer le retour                 |
| Premier écran           | Est-ce bien le service que j’ai cherché, pour mon entreprise et ma zone ? | Public, offre, zone, résultat et action principale                       | Relecture de la recherche et de l’annonce sans contradiction               | « Nos expertises », promesse vague ou urgence artificielle                 |
| Ce qui est obtenu       | Que va-t-il se passer après ma demande ?                                  | Étapes, résultat remis, conditions et exclusions                         | Chaque étape a un responsable et correspond à l’offre réelle               | Inventer un audit, un devis, une visite ou un délai                        |
| Pour qui / pas pour qui | Mon cas entre-t-il dans le périmètre ?                                    | Cas adaptés, limites, zones et prérequis                                 | Mauvais fit compréhensible sans appel                                      | Vouloir capter toute demande                                               |
| Preuves                 | Pourquoi croire cette affirmation précise ?                               | Méthode, interlocuteur, document, réalisation ou avis autorisé           | Une preuve réelle et actuelle par affirmation importante                   | Logos, avis ou chiffres décoratifs sans autorisation                       |
| Après l’action          | Qui reçoit ma demande et que se passe-t-il ensuite ?                      | Confirmation, canal de réponse et informations vérifiées                 | Test de réception jusqu’à la bonne personne                                | Promettre automatiquement un rendez-vous ou un délai non tenu              |
| Formulaire              | Quelles informations sont nécessaires ?                                   | Libellés explicites, champs nécessaires, erreurs et confirmation         | Finalité de chaque champ, notice adaptée, fonctionnement téléphone/clavier | Placeholder seul, champ gratuit, erreur invisible ou consentement trompeur |
| Dernières questions     | Quel doute m’empêche encore d’agir ?                                      | Réponses résiduelles puis répétition mesurée de l’action principale      | Réponse directe, sans nouvelle promesse                                    | FAQ de remplissage ou deuxième offre concurrente                           |

### Règles de mise en œuvre du plan

- le premier écran doit rester compréhensible sans apprendre le vocabulaire
  d’une agence ;
- le menu peut être conservé, simplifié ou retiré selon le besoin réel : aucune
  variante n’est déclarée meilleure sans test ;
- le nombre de sections dépend des questions, pas d’un gabarit ;
- le nombre de champs dépend de la finalité et de la qualification utile ;
- les éléments de preuve doivent être autorisés, actuels et reliés à une
  affirmation ;
- la couleur ne porte jamais seule un état, une erreur ou une décision ;
- le rendu mobile présente la question et sa réponse ensemble, sans tableau à
  faire glisser pour découvrir la conclusion.

## 8. Protocole de test avant et après lancement

### 8.1 Avant d’acheter les clics

#### A. Vérité de l’offre

- [ ] une recherche représentative a été choisie ;
- [ ] tous les titres, descriptions et autres composants actifs portant une
      affirmation importante ont été recopiés dans la fiche ;
- [ ] l’inventaire couvre les niveaux annonce, groupe d’annonces, campagne et
      compte, ainsi que l’annonce d’origine et l’URL finale possible ;
- [ ] les composants automatiques au niveau du compte et la flexibilité
      améliorée ont été vérifiés dans les associations et rapports ;
- [ ] si AI Max est actif, l’adaptation du texte, le rapport détaillé des
      composants, l’extension d’URL finale et ses inclusions ou exclusions ont
      été vérifiés ;
- [ ] chaque affirmation a un responsable, un élément vérifiable ou une
      condition réelle et une date de revalidation ;
- [ ] les limites et mauvais fits sont écrits ;
- [ ] aucune disponibilité, résultat, avis, qualification ou urgence n’est
      inventé.

#### B. Compréhension du premier écran

Demander à une personne qui ne connaît pas le projet de répondre, sans lui
expliquer la page :

1. quel service est proposé ?
2. à qui s’adresse-t-il ?
3. dans quelle zone ou sous quelles conditions ?
4. que peut-elle demander maintenant ?
5. que se passera-t-il ensuite ?

Ce test ne sera déclaré « humain » que s’il a réellement été effectué et
consigné. En l’absence de lecteur, P4 devra le signaler au lieu d’inventer un
panel.

#### C. Téléphone et clavier

- [ ] ouvrir la vraie URL sur un téléphone ;
- [ ] consigner appareil, navigateur, largeur, type de réseau et date ;
- [ ] sur une connexion représentative, observer le temps nécessaire pour voir
      le titre, le contenu utile et l’action, puis vérifier que la page reste
      visuellement stable et utilisable ;
- [ ] utiliser Lighthouse ou PageSpeed seulement comme diagnostics éventuels,
      sans seuil universel ni promesse de conversion ;
- [ ] lire titre, résultat, conditions et action sans zoom ni défilement
      horizontal ;
- [ ] vérifier que les cibles interactives respectent la taille ou l’espacement
      attendu, en tenant compte des exceptions W3C ;
- [ ] parcourir liens, champs, cases et bouton uniquement au clavier ;
- [ ] voir le focus à chaque étape ;
- [ ] lire les libellés sans dépendre du placeholder ;
- [ ] provoquer une erreur, la comprendre et la corriger ;
- [ ] vérifier ponctuellement les noms accessibles et l’annonce des erreurs au
      lecteur d’écran, ou consigner explicitement que ce test n’a pas été fait ;
- [ ] vérifier qu’aucun bandeau ou clavier virtuel ne masque l’action.

#### D. Envoi et réception

- [ ] envoyer une demande avec des données fictives clairement identifiables ;
- [ ] provoquer une erreur réseau ou serveur et vérifier qu’aucun faux message
      de succès n’est affiché ;
- [ ] pouvoir corriger puis renvoyer sans perdre silencieusement les champs ;
- [ ] vérifier la confirmation affichée au visiteur ;
- [ ] retrouver la demande dans la bonne boîte ou le bon outil, sans exposer de
      donnée client réelle ;
- [ ] vérifier que la personne responsable est informée ;
- [ ] confirmer que le message envoyé contient les informations nécessaires,
      sans collecte gratuite ;
- [ ] supprimer la donnée de test selon la procédure interne ;
- [ ] ne promettre que la suite opérationnelle réellement tenue.

#### E. Destination, information et consentement

- [ ] l’URL finale et le domaine correspondent à l’annonce ;
- [ ] la page répond sur les navigateurs réellement pris en charge ;
- [ ] le bouton Retour reste utilisable ;
- [ ] HTTPS/TLS protège toute page qui affiche ou transmet des données
      personnelles ;
- [ ] aucune donnée personnelle n’est placée dans l’URL ;
- [ ] seules les personnes ou équipes autorisées reçoivent les données ;
- [ ] l’information du formulaire correspond au traitement réel. La liste de
      contrôle, non exhaustive, couvre au minimum : identité du responsable,
      finalité, base légale, destinataires, conservation, droits, droit
      d’introduire une réclamation auprès de la CNIL, contact droits et contact
      du DPO lorsqu’il est désigné, champs obligatoires ou facultatifs et
      conséquence d’une absence de réponse ; la source CNIL reste liée pour
      adapter l’information au traitement réel ;
- [ ] le traitement nécessaire pour répondre à la demande est distingué d’une
      éventuelle prospection ultérieure ; une case n’est ajoutée que si la base
      légale et la finalité réelles l’exigent ;
- [ ] le dispositif de consentement est testé selon les choix accepter,
      refuser et retirer lorsque des traceurs qui le nécessitent sont présents,
      et leur dépôt est contrôlé avant et après chaque choix ;
- [ ] aucune exemption de mesure d’audience n’est étendue automatiquement aux
      traceurs publicitaires ;
- [ ] un état vert d’un outil technique n’est pas traité comme preuve de
      conformité ou de réception métier.

#### Verdict avant lancement

| État                                                                                                  | Décision                                                                        |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Toutes les affirmations importantes, l’action et la réception sont vérifiées sur la page actuelle     | Garder la page en l’état, si les autres prérequis Ads sont prêts                |
| Une ou plusieurs réponses, conditions ou étapes techniques peuvent être réparées sur la page actuelle | Corriger la page puis refaire tous les tests concernés                          |
| La page générale mélange plusieurs offres ou actions, mais les contenus vrais existent                | Concevoir une page dédiée puis rejouer tous les tests                           |
| Offre, élément vérifiable, formulaire, réception ou responsabilité restent bloquants                  | Reporter la campagne ; corriger le premier blocage avant de payer plus de clics |

### 8.2 Après lancement

1. examiner les termes de recherche que Google rend visibles et qui sont
   associés aux clics, en gardant à l’esprit que le rapport n’est pas
   exhaustif, puis vérifier leur rapport avec l’offre de la page ;
2. rapprocher clics, actions envoyées, demandes reçues et demandes sérieuses
   avec le guide de suivi des conversions ;
3. consigner les changements de page, de campagne, d’offre et de traitement
   commercial avec leur date ;
4. modifier une hypothèse importante à la fois lorsque le volume et le risque le
   permettent ;
5. ne pas imposer un test A/B ou un seuil d’échantillon universel à une petite
   entreprise ;
6. garder, corriger ou arrêter à partir du résultat métier et des limites de
   mesure, jamais d’un score isolé.

Le guide ne doit pas promettre d’identifier une causalité parfaite. Si l’offre,
le trafic, la page, la mesure et le traitement changent ensemble, la variation
ne peut pas être attribuée honnêtement à la page seule.

## 9. Calculs, exemples et registre des affirmations

### Calculs reproductibles

Aucun calcul financier ou taux de conversion n’est nécessaire à la décision de
ce guide. Ajouter un scénario de CPC, de CPL, de revenu ou de hausse ferait
double emploi avec d’autres URL et créerait un benchmark fictif.

Le seul nombre normatif prévu est le repère W3C de **24 × 24 pixels CSS ou un
espacement suffisant, avec exceptions**, utilisé comme contrôle
d’accessibilité des cibles et jamais comme prédicteur de conversion.

### Registre des claims

| Claim envisagé                                                                                | Catégorie                        | Statut P1                 | Condition de publication                                                              |
| --------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------- | ------------------------------------------------------------------------------------- |
| Google recommande de choisir une page qui correspond à l’annonce et à l’action                | Conseil produit Google           | Autorisé avec attribution | Lien Google visible près de l’affirmation et aucune confusion avec une règle de refus |
| Les composants d’une annonce responsive peuvent être combinés et l’aperçu n’est pas exhaustif | Fonctionnement produit Google    | Autorisé                  | Inventorier tous les titres, descriptions et autres composants actifs                 |
| La qualité de la page participe à l’Ad Rank                                                   | Fait produit Google              | Autorisé avec limite      | Dire « parmi plusieurs facteurs » ; aucun effet chiffré                               |
| Une page existante peut suffire                                                               | Déduction                        | Autorisé avec attribution | Présenter comme conclusion de la méthode, pas comme règle Google textuelle            |
| Une page dédiée est préférable lorsque l’offre ou l’action devient confuse                    | Recommandation Hagnéré Code      | Autorisé                  | Conserver la possibilité de garder ou reporter                                        |
| Le cas ThermoBureau 73 illustre la méthode                                                    | Exemple illustratif fictif       | Autorisé                  | Étiquette visible avant le nom et aucun résultat client                               |
| Une page améliorée baisse le CPC ou augmente les ventes                                       | Causalité non prouvée            | Interdit                  | Retirer, sauf futur corpus propre, périmètre et limites                               |
| Le formulaire doit contenir un nombre fixe de champs                                          | Règle universelle non prouvée    | Interdit                  | Justifier chaque champ par sa finalité                                                |
| La checklist prouve la conformité WCAG, CNIL ou RGPD                                          | Conclusion juridique non prouvée | Interdit                  | Dire explicitement qu’elle ne certifie rien                                           |

## 10. Plan annoté du futur guide

Le nombre de sections reste indicatif. P2 peut fusionner deux sections si la
lecture devient plus naturelle, sans retirer une décision, une preuve ou le
protocole.

| Section provisoire                                               | Question résolue                                           | Élément utile                                  | Conséquence ou décision                         | Format                        |
| ---------------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------- | ----------------------------------------------- | ----------------------------- |
| Votre page actuelle peut très bien suffire                       | Faut-il créer une page séparée ?                           | Réponse courte et quatre décisions             | Garder, corriger, créer ou reporter             | Ouverture narrative et cartes |
| Recopiez tout ce que vos annonces peuvent affirmer               | Que doit retrouver le prospect ?                           | Source Google et fiche annonce-page            | Repérer chaque affirmation sans réponse         | Outil expliqué                |
| Exemple fictif : ThermoBureau 73 passe sa page au crible         | Comment remplir la fiche ?                                 | Cas complet sans résultat commercial           | Refaire la méthode sur son offre                | Cas guidé                     |
| Dessinez la réponse avant de travailler le design                | Quels blocs sont réellement utiles ?                       | Plan de page commenté                          | Conserver uniquement les réponses nécessaires   | Schéma mobile et cartes       |
| Faites du formulaire une action vérifiable                       | Quelles informations demander et que se passe-t-il après ? | CNIL et W3C, réception réelle                  | Retirer champs gratuits et promesses non tenues | Prose, exemples et limites    |
| Testez la page sur téléphone, au clavier et jusqu’à la réception | Comment décider si la page est prête ?                     | Protocole nominal et erreurs                   | Lancer ou bloquer avec une raison               | Liste numérotée et verdicts   |
| Observez sans inventer la cause                                  | Que regarder après lancement ?                             | Rapport de destination et rapprochement métier | Changer une hypothèse à la fois ou arrêter      | Étapes courtes                |
| Gardez, corrigez, créez ou reportez : prenez une décision        | Quelle décision prendre maintenant ?                       | Synthèse de la fiche et des tests              | Choix final autonome                            | Quatre cartes                 |
| Sources et limites                                               | D’où viennent les règles et que ne prouvent-elles pas ?    | Google, CNIL et W3C                            | Revalider les points mouvants                   | Liste commentée               |

### FAQ résiduelle envisagée

Chaque réponse commencera par la décision, puis donnera la condition. Les
questions déjà traitées comme H2 seront retirées plutôt que répétées.

1. Faut-il retirer le menu d’une landing page ?
2. Comment tester la page si je reçois peu de demandes ?
3. Faut-il une case de consentement dans le formulaire ?

## 11. Métadonnées et promesse éditoriale proposées

Ces formulations restent des propositions P1 ; P2 les réconciliera avec le
contenu visible avant intégration.

```text
Title : Landing page Google Ads : quelle page utiliser ?

Card title : Votre page est-elle prête pour vos clics Google Ads ?

Meta description : Vérifiez si votre page répond à vos annonces Search, puis
gardez-la, corrigez-la, créez-en une autre ou reportez la campagne.

Card description : Vérifiez les titres, descriptions, page, formulaire et
réception avant de décider si votre campagne Search peut démarrer.

H1 : Votre page est-elle prête à recevoir vos clics Google Ads ?

Section : Google Ads & acquisition
```

Les métadonnées ne promettent ni téléchargement, ni taux de conversion, ni
réduction du coût par clic. La date de publication ne sera fixée qu’au moment
de la mise en ligne réelle.

## 12. Ressource, conversion et maillage

### Ressource

```text
Une ressource séparée est-elle naturellement nécessaire ? non à ce stade
Problème résolu : relier tous les composants importants d’une annonce Search à
une page et à une action réellement testées
Résultat autonome : fiche interactive remplissable, exemple fictif, plan de
page commenté et tests avant lancement
Format : outil local, synthèse copiable et éléments visibles dans l’article
Téléchargement promis : non
Exemple rempli : ThermoBureau 73, explicitement fictif
Conclusion « ne pas investir » possible : oui, report de la campagne
Données saisies : aucune donnée transmise par l’article
Processus de génération : non pertinent en P1
Test futur : lisibilité à 320, 390, 768, 1024 et 1440 px, clavier, impression,
copie acceptée et refusée, remise à zéro, absence de persistance dans
`localStorage`/`sessionStorage` et absence d’accès réseau pendant les actions
de l’outil
```

Une ressource téléchargeable ne pourra être annoncée qu’après création, revue
des formats, exemple rempli, test des liens et vérification de l’absence de
données réelles.

### Bon fit, mauvais fit et solution moins chère

**Bon fit Hagnéré Code :**

- campagne Search envisagée ou active pour une offre précise ;
- page actuelle trop générale ou nouvelle page à cadrer ;
- équipe capable de fournir les preuves et de traiter les demandes ;
- besoin conjoint de cohérence entre média, site et mesure.

**Mauvais fit :**

- attente d’un nombre de prospects, d’un taux ou d’un ROI garanti ;
- offre, prix utile, zone ou responsable commercial encore indéfinis ;
- volonté d’utiliser de faux avis, une rareté artificielle ou une destination
  trompeuse ;
- besoin principal portant sur un litige Google, la sécurité d’un compte ou un
  conseil juridique personnalisé.

**Solution moins chère ou sans achat :** corriger le titre, la preuve, le
formulaire ou la confirmation de la page existante, puis refaire le protocole.
Une nouvelle page n’est pas une fin en soi.

### CTA possible

**Titre :** Présenter ma campagne et la page envisagée

**Description possible :** indiquez la recherche visée, les principaux
composants d’annonce, la page utilisée et l’action attendue. Le parcours sert à
transmettre ce contexte. Une première orientation pourra être de garder la
page, de corriger un point, de faire chiffrer une page dédiée ou de commander
un audit. Un audit documenté et une conception complète constituent des
prestations distinctes, proposées sur devis. Aucun résultat publicitaire n’est
garanti.

**Libellé :** Décrire mon projet Google Ads

**Destination :** `/demarrer-un-projet`

**Résultat après clic :** transmettre le contexte dans le parcours guidé afin
de recevoir une première orientation humaine, sans audit gratuit ni délai de
réponse garanti.

**Promesses interdites :** audit gratuit, réponse instantanée, landing page qui
convertit, baisse du CPC, hausse de prospects, conformité garantie ou rendez-vous
automatique.

### Maillage sortant naturel

- `suivi-conversions-google-ads` depuis le test de réception et de mesure ;
- `budget-google-ads-pme` si le test n’est pas encore chiffré ;
- `audit-google-ads-que-verifier` si plusieurs familles de problèmes sont
  suspectées ;
- `pourquoi-google-ads-ne-convertit-pas` si la page passe les tests mais que les
  clients n’arrivent pas ;
- `/services/publicite-en-ligne` pour le cadrage ou le pilotage Ads ;
- `/services/sites-vitrines` seulement après la décision de créer ou refondre
  la page ;
- `/demarrer-un-projet` via un seul CTA éditorial.

### Maillage entrant à prévoir après publication

- `audit-google-ads-que-verifier`, depuis le contrôle des pages ;
- `budget-google-ads-pme`, depuis les prérequis avant lancement ;
- `suivi-conversions-google-ads`, lorsque l’action fonctionne mais que peu de
  personnes l’accomplissent ;
- `pourquoi-google-ads-ne-convertit-pas`, depuis la branche page ou formulaire ;
- la page service publicité en ligne ou sites vitrines, uniquement avec une
  ancre contextuelle utile.

Le propriétaire éditorial vérifiera les liens réellement publiés avant de
modifier un fichier partagé. Aucun lien entrant n’est ajouté pendant P1.

## 13. P0, P1 et formulations bannies

### P0 — publication interdite

- résultat, avis, client, logo, qualification, assurance ou document inventé ;
- taux de conversion, baisse de CPC, hausse de ventes, délai ou rentabilité
  garantis ;
- ThermoBureau 73 présenté comme client ou cas réel ;
- niveau de qualité présenté comme entrée directe des enchères ou prix du clic ;
- page dédiée présentée comme obligation Google ou règle par mot-clé ;
- suppression du menu, longueur de page ou nombre de champs présentés comme
  vérité universelle ;
- consentement, CMP, balise ou checklist présenté comme conformité juridique ;
- données personnelles réelles utilisées dans le protocole public ;
- destination trompeuse, domaine incohérent, retour navigateur bloqué ou
  contenu différent selon le contrôle ;
- ressource, téléchargement ou modèle promis sans artefact testé ;
- schéma `FAQPage`, `HowTo`, faux `Offer`, faux avis ou `wordCount`
  approximatif.

### P1 — correction obligatoire avant gel

- ouverture qui commence par le niveau de qualité, le CRO ou la méthode de
  l’agence au lieu du problème du dirigeant ;
- décision « garder / corriger et retester / créer / reporter » absente des 150
  premiers mots ;
- déduction « une page existante peut suffire » attribuée textuellement à
  Google ;
- preuve importante reléguée uniquement dans la bibliographie ;
- fiche interactive sans origine du composant, responsable, date, état,
  correction, destinataire ou confirmation ;
- plan de page transformé en gabarit obligatoire ;
- formulaire sans libellés, erreurs, confirmation, finalité des champs ou
  test de réception ;
- protocole qui teste uniquement la balise ou le bouton, sans retrouver la
  demande ;
- tableau horizontal qui masque la décision à 390 px ;
- test humain déclaré sans personne réelle ;
- CTA avant l’action autonome ou formulation générique de gestion mensuelle ;
- recouvrement matériel avec le guide de suivi des conversions, de budget ou
  d’audit complet ;
- FAQ répétant les H2 ou répondant après plusieurs phrases de détour.

### Formulations explicitement bannies

- « Une landing page dédiée est indispensable pour Google Ads. »
- « Créez une page par groupe de mots-clés. »
- « Une meilleure expérience fera baisser votre CPC. »
- « Un niveau de qualité élevé réduit directement le prix du clic. »
- « Supprimez toujours le menu pour convertir davantage. »
- « Une landing page doit tenir en cinq blocs. »
- « Trois champs maximisent les demandes. »
- « Cette structure double les conversions. »
- « Le Consent Mode rend le formulaire conforme au RGPD. »
- « Votre page est conforme WCAG après cette checklist. »
- « Votre demande sera rappelée sous X heures » sans engagement réel et
  vérifié.

## 14. Porte de sortie P1 — validée

- [x] brief complet et décision unique ;
- [x] URL distincte justifiée ;
- [x] recherche actuelle, qualitative et datée ;
- [x] absence de volume, de difficulté et de position stable explicitée ;
- [x] carte de résultats avec URLs, limites et conflits d’intérêt ;
- [x] fiche de preuves primaires exploitable ;
- [x] faits, déductions, recommandations et exemple fictif séparés ;
- [x] contradictions et affirmations interdites consignées ;
- [x] cas ThermoBureau 73 étiqueté et sans fausse preuve ;
- [x] outil local, exemple rempli, plan de page et tests définis ;
- [x] absence de calcul ou benchmark artificiel justifiée ;
- [x] plan annoté distinct des guides voisins ;
- [x] action autonome, bon fit, mauvais fit, solution moins chère et CTA
      définis ;
- [x] P0, P1, FAQ, métadonnées et maillage préparés ;
- [x] deux contre-audits indépendants initiaux réalisés : éditorial `0 P0 / 8
P1`, technique `1 P0 / 8 P1 / 3 P2` ;
- [x] correction P0 et corrections P1/P2 appliquées au dossier ;
- [x] re-contrôles indépendants finaux : éditorial et technique `PASS — 0 P0
/ 0 P1` ;
- [x] guide public n° 9 terminé et verrou successif levé ;
- [x] manifeste P1 autorisé sous
      `docs/research/manifests/landing-page-google-ads-p1.sha256` ;
- [x] Passe 1 marquée `Terminée — porte validée`.

## 15. Rapport P1 final

```text
PASSE 1 — TERMINÉE, PORTE VALIDÉE

Slug : landing-page-google-ads

Lecteur et phrase réelle : dirigeant ou indépendant qui prépare une campagne
Search et demande ce que le prospect doit retrouver sur la page pour qu’elle
soit réellement prête.

Décision : garder la page actuelle en l’état, la corriger puis refaire les
tests, créer une page dédiée si l’offre reste confuse, ou reporter tant que
l’offre, les éléments vérifiables, l’action ou la réception ne sont pas prêts.

Angle et forme dominante : vérifier chaque affirmation importante de tous les
titres, descriptions et autres composants actifs à l’aide d’une fiche locale,
puis appliquer son résultat au plan de page et aux tests.

Pages proches et différence : budget, prix, audit, diagnostic et suivi des
conversions conservent leurs intentions. Ce guide traite uniquement la décision
et les tests de la page liée à une campagne Search. Display, Shopping, YouTube
et Performance Max sont exclus.

Sources décisives : documentation Google Ads sur annonces responsives,
annonce/page, Ad Rank, niveau de qualité, destination, mobile et termes de
recherche ; CNIL sur minimisation, bases légales, formulaires, sécurité et
traceurs ; WCAG 2.2 sur cibles et focus, complétée par les tutoriels WAI.

Incertitudes exclues : taux de conversion, baisse de CPC, benchmark sectoriel,
longueur idéale, nombre de champs, délai, prix, volume de recherche, classement,
conformité juridique et causalité après modification.

Action autonome et CTA possible : remplir la fiche, appliquer le plan de page
et refaire les tests jusqu’à la réception ; CTA unique vers
/demarrer-un-projet pour transmettre le contexte et recevoir une première
orientation. Audit documenté et conception complète restent des prestations
sur devis.

Plan : réponse en quatre sorties, fiche interactive, cas ThermoBureau 73 avec
composants RSA valides, plan mobile, formulaire, tests avant/après lancement,
décision finale, sources et trois FAQ résiduelles.

Contre-audits : premier audit éditorial 0 P0 / 8 P1 ; premier audit technique
1 P0 / 8 P1 / 3 P2. Après corrections et reprises ciblées, verdicts finaux
éditorial et technique : PASS — 0 P0 / 0 P1. Les 25 URL répondent en HTTP 200 ;
les cinq titres et deux descriptions fictifs respectent les limites vérifiées.

Snapshot : `docs/research/manifests/landing-page-google-ads-p1.sha256`.

Verdict : l’erreur P0 sur les longueurs RSA et tous les P1 documentaires ont
été corrigés. P1 est gelée et P2 peut commencer.
```

## 16. Rapport P2 — Rédaction et intégration

PASSE 2 TERMINÉE — PASS APRÈS CORRECTIONS

- Page : \`/guides/landing-page-google-ads\`.
- Ouverture : le dirigeant part de son hésitation réelle entre accueil, page de
  service existante et page dédiée. Les quatre sorties — garder, corriger, créer
  ou reporter — sont données dans les 150 premiers mots.
- Champ traité : annonces Search qui renvoient vers le site. Display, Shopping,
  YouTube et Performance Max restent hors du guide au lieu d’être survolés.
- Explication Google Ads : titres, descriptions, composants de campagne et de
  compte, composants automatiques, flexibilité améliorée, adaptation du texte,
  AI Max et extension d’URL finale sont distingués. Les réglages hérités de
  l’adaptation du texte restent vérifiables même si AI Max est désactivé.
- Outil autonome : fiche locale en mémoire React, sans requête réseau ni
  stockage navigateur. Elle relève le contexte du test, l’inventaire du compte,
  chaque affirmation, son URL possible, la réponse de la page, la personne qui
  vérifie, la date, la correction et neuf essais avant lancement.
- Résultat de l’outil : aucune note artificielle. Les champs vides restent
  inconnus et conduisent à l’une des quatre décisions documentées. Copie,
  solution manuelle en cas de refus du presse-papiers, impression et remise à
  zéro sont testées.
- Exemple : ThermoBureau 73 est présenté avant tout chiffre comme une entreprise
  fictive qui n’est ni cliente, ni réalisation, ni résultat Hagnéré Code. Les
  cinq titres et deux descriptions RSA valides sont couverts par dix lignes
  complètes, avec une autre annonce et un composant automatique fictifs.
- Page et formulaire : le plan reste adaptable. Les règles de minimisation et
  d’information du formulaire sont traduites en actions compréhensibles ; les
  tests vont jusqu’à la réception réelle d’une demande fictive identifiable.
- Sources visibles : documentations officielles Google Ads au voisinage des
  affirmations mouvantes, CNIL pour les données et traceurs, W3C pour les
  formulaires et WCAG 2.2 pour le clavier et la taille ou l’espacement des
  cibles.
- Conversion : un seul CTA après les huit H2. Il nomme Quentin Hagnéré, les
  quatre orientations possibles, la séparation de l’audit et de la conception
  sur devis, et l’absence de garantie de vente ou de délai.
- Maillage : lien entrant contextuel ajouté depuis le guide d’audit Google Ads ;
  liens sortants vers le suivi des conversions, le budget, le diagnostic sans
  clients et les services concernés.
- Dates : la publication et la modification des dix guides du lot sont alignées
  sur leur mise en ligne prévue le 22 juillet 2026. Le statut
  \`ready-for-human-review\` maintient encore ce guide en \`noindex, nofollow\`.
- Contre-audits P2 : premier verdict éditorial \`0 P0 / 2 P1\` et premier verdict
  technique \`0 P0 / 5 P1\`, puis une incohérence de temps de lecture détectée au
  build. Tous les écarts ont été corrigés. Verdicts indépendants finaux :
  \`PASS — 0 P0 / 0 P1\`.
- Contrôles : 47/47 tests ciblés, 184/184 contrôles SEO, Prettier, ESLint,
  TypeScript, \`git diff --check\`, build de 114 pages statiques et vérificateur
  postbuild réussis. L’artefact contient 4 158 mots visibles, soit 21 minutes à
  200 mots par minute.
- Verdict : P2 est gelée. P3 peut commencer sur le manifeste ci-dessous.
- Snapshot :
  \`docs/research/manifests/landing-page-google-ads-p2.sha256\`.

## 17. Rapport P3 — Contre-audit indépendant

PASSE 3 TERMINÉE — PASS APRÈS CORRECTIONS

- Relecteurs : deux agents indépendants et strictement en lecture seule. Le
  premier a relu le guide comme un dirigeant ; le second a contrôlé les faits,
  les états de l’outil, les tests, le HTML construit et l’impression réelle.
- Gel P2 : les onze empreintes du manifeste P2 ont été vérifiées avant le
  contre-audit.
- Verdicts initiaux : `0 P0 / 2 P1 / 1 P2` côté éditorial et
  `0 P0 / 1 P1 / 1 P2` côté technique. La porte P3 est restée fermée pendant
  les corrections.
- Langage : la largeur de page, la navigation au clavier, la lecture des
  champs et les cookies publicitaires sont désormais expliqués en actions
  concrètes. Google AdsBot est traduit en robot de contrôle de Google Ads ; une
  note automatique ou un voyant vert ne remplace jamais un essai réel.
- Information des personnes : le passage RGPD distingue l’information
  essentielle près du formulaire, l’accès à la notice complète et les mentions
  supplémentaires qui dépendent du traitement. La liste générale n’est jamais
  présentée comme une validation juridique individuelle.
- Erreurs : la fiche vierge reste calme. Le bouton `Vérifier la fiche` révèle
  ensuite chaque cause sous le champ concerné, avec un `aria-describedby`
  unique. Le navigateur a confirmé 37 contrôles invalides, 37 messages locaux,
  aucun identifiant dupliqué et aucun lien de description cassé sur l’état
  vierge contrôlé.
- État publicitaire : l’adaptation du texte possède quatre états explicites —
  inconnue, active, héritée ou absente — indépendamment de l’état d’AI Max.
  L’extension d’URL finale reste conditionnelle à l’activation d’AI Max.
- Impression : la fiche d’impression n’existe pas dans le HTML initial. Elle
  est créée uniquement au clic, directement sous le `body`, puis supprimée.
  Le premier build a ainsi détecté et fait retirer un ancien H1 caché et le
  contenu qui faussait le temps de lecture.
- PDF réel : le clic sur le vrai bouton a été arrêté au point exact de l’appel
  natif à `window.print`, puis rendu avec Chrome CDP. Le PDF A4 obtenu contient
  3 pages, 69 675 octets et 1 037 mots : contexte, inventaire, 10 affirmations,
  9 tests, inconnues et décision. Il ne contient ni article, ni bouton, ni champ
  replié ; ses trois pages ont été inspectées textuellement et visuellement sans
  coupure.
- Verdicts finaux indépendants : éditorial `PASS — 0 P0 / 0 P1 / 0 P2
matériel` et technique `PASS — 0 P0 / 0 P1 / 0 P2`.
- Contrôles : 48/48 tests ciblés côté propriétaire, 184/184 contrôles SEO,
  ESLint, TypeScript, build de 114 pages statiques et vérificateur postbuild
  réussis. L’artefact possède un seul H1 et conserve une lecture de 21 minutes.
- Snapshot :
  `docs/research/manifests/landing-page-google-ads-p3.sha256`.

## 18. Rapport P4 — Plume humaine, technique et rendu réel

PASSE 4 TERMINÉE — PASS

- Lecture froide : aucun fait nouveau n’a été ajouté après le double PASS P3.
  Les deux derniers termes techniques signalés en P2 ont été traduits en
  français courant. L’ouverture, les huit chapitres et les trois réponses
  finales gardent le même problème concret et les quatre mêmes décisions.
- Validation humaine extérieure : non. La lecture froide, les contre-audits et
  l’observation navigateur ne sont pas présentés comme un test par un client ou
  un lecteur indépendant extérieur au processus.
- Responsive : le build de production a été observé aux largeurs CSS exactes
  320, 390, 768, 1 024 et 1 440 px. Chaque vue contient un H1, zéro identifiant
  dupliqué, zéro ancre interne cassée et zéro élément du contenu dépassant la
  largeur. Les largeurs documentaires mesurées sont respectivement 288, 358,
  736, 656 et 768 px ; aucun message d’erreur n’apparaît au chargement.
- Inspection visuelle : héros, introduction, fiche, champs, boutons et textes
  restent lisibles en thème sombre sur mobile, tablette et bureau. Aucun écran
  d’erreur ni superposition bloquante n’a été observé.
- Outil réel : l’état vierge reste calme, puis `Vérifier la fiche` expose 37
  causes locales reliées à 37 contrôles, sans identifiant dupliqué ni
  description cassée. L’exemple ThermoBureau 73 charge 10 affirmations, conserve
  l’adaptation du texte comme absente et laisse honnêtement la réception réelle
  inconnue ; la décision demande donc de compléter puis retester au lieu de
  déclarer artificiellement la page prête.
- Copie et remise à zéro : le texte réellement transmis à la fonction de copie
  contient 6 781 caractères, le contexte, les 10 affirmations, les 9 tests, les
  inconnues, la décision et l’étiquette fictive. Le navigateur d’audit isolant
  son presse-papiers, l’argument exact a été intercepté pendant le test, puis la
  page a été rechargée pour retirer cette instrumentation. La remise à zéro
  restaure une ligne vide, aucun message et aucun exemple.
- FAQ : la deuxième question s’ouvre, affiche sa réponse ordinaire puis se
  referme au clic.
- Métadonnées : titre, description, langue française et canonique exact
  `https://hagnere-code.ai/guides/landing-page-google-ads`. Le statut local
  reste volontairement `noindex, nofollow` tant que le lot n’est pas gelé.
- Données structurées : deux scripts valides, `Article` et `BreadcrumbList`
  uniquement. Aucun `FAQPage`, `HowTo`, avis, prix ou résultat client inventé.
- Route et image : la page répond 200. L’image sociale répond 200, mesure
  1 200 × 630 px et a été observée sans texte coupé ; elle décrit le passage de
  la recherche à la demande sans afficher de résultat chiffré fictif.
- Console : aucune erreur ni aucun avertissement pendant les interactions.
- Profondeur : huit H2, trois FAQ, un CTA commercial et une lecture annoncée de
  21 minutes, validée par le vérificateur de l’artefact.
- Technique : 48/48 tests ciblés, 184/184 contrôles SEO, ESLint, TypeScript,
  build de 114 pages et vérificateur postbuild réussis. Le dernier artefact de
  revue contrôle 88 URL de sitemap, 71 liens dans `llms.txt`, 88 pages, 56 temps
  de lecture et 164 blocs JSON-LD.
- Scorecard : humain 2/2, réponse 2/2, décision 2/2, preuve 2/2, autonomie 2/2,
  alternatives 2/2, conversion 2/2, différenciation 2/2, sécurité 2/2 et rendu
  2/2. Total : 20/20, sans P0, P1 ni P2 matériel.
- Autorisation : le guide reste sous porte `ready-for-human-review` jusqu’au gel
  global. Il ne sera indexé qu’après le contrôle commun des dix guides.
- Snapshot :
  `docs/research/manifests/landing-page-google-ads-p4.sha256`.
