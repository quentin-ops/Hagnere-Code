# Dossier de recherche — Google Search Ads ou Performance Max

> Dossier de preuve des quatre passes. Recherche, rédaction, contre-audit,
> validation éditoriale déléguée et contrôle technique P4 sont terminés.

## Journal des quatre passes

Propriétaire éditorial unique : `/root`

| Passe                        | État                         | Date            | Responsable                                | Snapshot                                                                 | Blocages |
| ---------------------------- | ---------------------------- | --------------- | ------------------------------------------ | ------------------------------------------------------------------------ | -------- |
| 1. Recherche                 | Terminée — porte validée     | 23 juillet 2026 | `/root/research_marketing_tma_site_batch2` | `docs/research/manifests/google-search-ads-ou-performance-max-p1.sha256` | Aucun    |
| 2. Rédaction et intégration  | Terminée — corrigée après P3 | 23 juillet 2026 | `/root`                                    | `docs/research/manifests/google-search-ads-ou-performance-max-p2.sha256` | Aucun    |
| 3. Contre-audit indépendant  | Terminée — porte validée     | 23 juillet 2026 | Deux relecteurs indépendants               | `docs/research/manifests/google-search-ads-ou-performance-max-p3.sha256` | Aucun    |
| 4. Plume humaine et contrôle | Terminée — porte validée     | 23 juillet 2026 | `/root`                                    | `docs/research/manifests/google-search-ads-ou-performance-max-p4.sha256` | Aucun    |

### Manifeste du snapshot

Le snapshot P2 corrigé a été validé par deux relecteurs indépendants. Le
snapshot P3 intégrant leur verdict est enregistré hors de ce fichier dans
`docs/research/manifests/google-search-ads-ou-performance-max-p3.sha256`.

### Reprise P2 après le refus de la première P3

La première contre-lecture indépendante a refusé la page avec **0 P0, 5 P1 et
2 P2**. La reprise a ensuite :

1. ajouté AI Max comme couche facultative de Search, ses effets sur la mise en
   correspondance, le texte, l’URL et le niveau de contrôle ;
2. ajouté les performances PMax par canal et distingué exclusions de marques
   et mots clés à exclure ;
3. intégré le choix entre volume et valeur, les actions principales, le
   comptage, l’attribution, les objectifs et les cibles ;
4. rendu les sorties symétriques : tester Search, tester PMax avec garde-fous,
   combiner ou reporter ;
5. réécrit la priorité Search/PMax autour du cas exact identique et des branches
   suivantes liées à l’éligibilité, la pertinence et au classement ;
6. remplacé le lien Shopping par les pages générales sur les expériences PMax
   et les tests d’impact.

## 1. Fiche d'identité

```text
Slug : google-search-ads-ou-performance-max
Statut actuel : publiable — validation éditoriale déléguée
Requête principale : Google Search Ads ou Performance Max
Moment du parcours : décider
Lecteur précis : dirigeant ou indépendant qui veut lancer ou réorganiser ses campagnes Google Ads sans confier aveuglément le choix du format à l'automatisation
Situation déclenchante : il entend que Performance Max trouve des clients partout dans Google, mais il veut savoir s'il doit commencer par Search, Performance Max ou les deux
Décision principale après lecture : tester Search, tester Performance Max avec des garde-fous, les combiner ou reporter selon la demande, les réglages Search, la qualité et la valeur des conversions, les contenus et le niveau de contrôle nécessaire
Niveau de connaissance au départ : sait que Google Ads est payant, ne maîtrise pas nécessairement les types de campagnes ni les conversions
5 questions indispensables : que voit et règle-t-on dans Search ? que délègue-t-on à Performance Max ? quelles données faut-il avant de lancer ? les deux peuvent-ils cohabiter ? comment tester sans tirer une conclusion trompeuse ?
3 objections ou craintes : « Performance Max va dépenser sans que je comprenne » ; « Search est trop manuel » ; « Google recommande son produit, puis-je lui faire confiance ? »
Action utile sans contact commercial : remplir une fiche de choix en sept questions et définir une campagne test avec une seule décision mesurable
CTA possible : faire cadrer la campagne, le suivi des conversions et les critères de décision avant de dépenser
Hors périmètre : audit complet d'un compte actif, calcul d'un budget, tutoriel d'interface, SEO contre Ads, promesse de résultat ou comparaison de tous les types de campagnes
Date de la recherche : 23 juillet 2026
Responsable de la synthèse : /root/research_marketing_tma_site_batch2
```

## 1 bis. Contrat de langage humain

- Phrase exacte que le lecteur pourrait dire au téléphone : « Je veux faire de
  la pub sur Google, mais je ne sais pas si je dois choisir les annonces dans
  les résultats de recherche ou Performance Max. »
- Réponse qu'il attend en une phrase : une configuration Search circonscrite
  reste souvent lisible pour une demande précise ; AI Max peut élargir Search ;
  Performance Max peut être testée quand objectifs, valeurs, créations et
  mesure sont fiables — et les deux peuvent cohabiter.
- Terme central expliqué sans jargon : une campagne Search affiche une annonce
  en réponse à une recherche ; Performance Max utilise les objectifs et
  éléments fournis pour diffuser sur plusieurs espaces Google.
- Mots ordinaires employés par le lecteur : recherches, annonces, prospects,
  appels, formulaires, budget, demandes qualifiées, comprendre ce qui marche.
- Mots d'agence ou de consultant à éviter : full funnel, black box, scaling,
  smart bidding, signaux first-party, incrémentalité, ROAS cible sans
  explication.
- Projet des 150 premiers mots : partir du choix concret du dirigeant, donner
  le verdict conditionnel, expliquer les deux formats par ce qu'il peut voir,
  régler et mesurer, puis annoncer une grille de décision.
- Ce que le lecteur saura décider après ces 150 mots : s'il lui faut d'abord
  une campagne plus circonscrite, un dispositif multicanal automatisé ou un
  test combiné.
- H2 relus isolément : validés en P2.
- Comparaison comprise à 390 px sans colonne masquée : validée dans le navigateur en P4.
- FAQ dont la première phrase répond : validée en P2.
- CTA formulé comme résultat pour le prospect : « Cadrer une campagne que vous
  pourrez réellement évaluer. »

### Test sujet, action, résultat

À effectuer sur cinq phrases du brouillon en P2. La rédaction devra toujours
nommer l'entreprise, Google ou le prestataire comme sujet ; l'action réelle ;
et ce que le dirigeant pourra observer ou décider.

### Test de l'ouverture

- [x] la situation vécue est définie avant la méthode de l'agence ;
- [x] les termes Search et Performance Max ont une définition ordinaire prévue ;
- [x] aucun lexique de masse n'est prévu avant la réponse ;
- [x] aucune métaphore structurante n'est prévue ;
- [x] le verdict reste conditionnel, mais arrive dès l'ouverture.

## 2. Cannibalisation

| Page existante                          | Intention de cette page                                                     | Différence du nouveau guide                                                                     | Lien ou arbitrage nécessaire                                                    |
| --------------------------------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `/guides/audit-google-ads-que-verifier` | Examiner un compte déjà actif et retrouver les causes d'un mauvais résultat | Choisir un type de campagne avant lancement ou restructuration                                  | Lier vers l'audit après la phase de test ; ne pas reprendre sa checklist        |
| `/guides/budget-google-ads-pme`         | Construire un budget test et ses hypothèses                                 | Choisir le mode de diffusion et le niveau de contrôle                                           | Lier quand la décision de campagne est prise ; aucune fourchette budgétaire ici |
| `/guides/suivi-conversions-google-ads`  | Installer et vérifier la mesure des actions utiles                          | Montrer que la qualité des conversions conditionne le choix, sans refaire le tutoriel de mesure | Lien obligatoire avant toute recommandation Performance Max                     |
| `/guides/seo-ou-google-ads`             | Choisir entre acquisition organique et payante                              | Comparer deux formats au sein de Google Ads                                                     | Ne pas refaire la comparaison SEO/Ads                                           |
| `/services/publicite-en-ligne`          | Présenter l'offre commerciale de gestion Google Ads                         | Donner au dirigeant une décision autonome et ses limites                                        | CTA vers le service après la grille, pas avant                                  |

**Justification d'une URL distincte :** aucune page actuelle ne répond à la
décision « quel type de campagne Google Ads lancer compte tenu de mes données,
de ma demande et du contrôle dont j'ai besoin ? ».

**Verdict de cannibalisation :** risque faible si le guide reste centré sur le
choix Search/PMax. Toute dérive vers le budget, l'audit du compte ou le choix
SEO/Ads doit être supprimée et remplacée par un lien.

## 3. Demande et vocabulaire du lecteur

Observation manuelle de résultats français le 23 juillet 2026, sans outil de
volume et sans extrapolation chiffrée, sur les formulations :

- `Google Search Ads ou Performance Max choisir entreprise France` ;
- `"Search ou Performance Max" Google Ads` ;
- `Performance Max vs Search Google Ads France agence comparaison contrôle mots clés` ;
- `campagne Search ou Performance Max que choisir PME`.

Questions et formulations réellement visibles :

- Performance Max remplace-t-elle Search ?
- Quelle campagne donne le plus de contrôle ?
- Peut-on utiliser Search et Performance Max ensemble ?
- Performance Max convient-elle à une PME ou au B2B ?
- Quels signaux, contenus et conversions faut-il lui fournir ?
- Peut-on voir les recherches et ajouter des exclusions ?

Les résultats officiels Google occupent une place importante sur Performance
Max. Les comparateurs d'agences emploient surtout « PMax vs Search », « que
choisir » et « contrôle contre automatisation ». L'intention est donc bien
décisionnelle. Aucun volume mensuel n'a été observé : le potentiel SEO est une
hypothèse éditoriale, pas une donnée mesurée.

Champ lexical humain à privilégier : recherche précise, intention, annonce,
appel, formulaire, vente, demande qualifiée, zone, produit, service, donnée
fiable, élément visuel, budget dépensé, résultat observable, période de test.

## 4. Carte concurrentielle

| Page                                                                                                                     | Réponse et angle                                                                             | Preuves/artefacts                           | Bon point                                              | Manque décisionnel                                                             | Conflit d'intérêt éventuel |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- | ------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------ | -------------------------- |
| [Google — À propos de Performance Max](https://support.google.com/google-ads/answer/10724817?hl=fr)                      | Présente PMax comme campagne fondée sur un objectif et diffusée sur tout l'inventaire Google | Documentation produit et règles de priorité | Source actuelle sur le fonctionnement et les contrôles | Ne décide pas à la place d'une PME ; discours produit                          | Google vend la plateforme  |
| [Google — À propos des campagnes sur le Réseau de Recherche](https://support.google.com/google-ads/answer/9510373?hl=fr) | Explique la réponse à une recherche active par mots clés                                     | Documentation produit                       | Définition claire de Search                            | Ne compare pas un cas d'entreprise complet                                     | Google vend la plateforme  |
| [Dwenola — Performance Max pour les PME](https://dwenola.com/blog/google-ads/performance-max-guide-pme/)                 | Guide PME avec conseil hybride                                                               | Article et scénarios                        | Reconnaît que les deux formats peuvent cohabiter       | Peu de cadre reproductible pour décider avant dépense                          | Prestataire Ads            |
| [Solentia — Performance Max vs Search](https://solentia.agency/blog/google-ads-performance-max-vs-search-belgique-2026)  | Comparaison orientée résultats                                                               | Mention d'une analyse d'agences             | Vocabulaire décisionnel direct                         | Chiffres non réutilisables sans méthode et corpus vérifiables                  | Agence Ads                 |
| [Alt'Ad — Guide Performance Max](https://www.alt-ad.fr/actualite/performance-max-google-ads-guide-complet)               | Oppose portée automatisée et contrôle                                                        | Guide pratique                              | Rend les différences concrètes                         | Risque de simplifier les contrôles actuels et d'aboutir à un verdict universel | Agence Ads                 |

**Angle mort commun :** les comparaisons traitent souvent Search et PMax comme
deux produits exclusifs, attribuent un gagnant général, ou décrivent
Performance Max comme une boîte noire sans tenir compte des contrôles qui ont
évolué. Elles vérifient rarement la qualité de la conversion envoyée à Google
avant de recommander plus d'automatisation.

**Valeur originale que le guide apportera :** deux mini-campagnes seront
décrites par ce que le dirigeant peut voir, régler et mesurer. La grille partira
de sa demande réelle, de la qualité de ses conversions, des contenus
disponibles et de sa capacité à traiter les prospects. Elle autorisera les
réponses Search, PMax, combinaison progressive ou report.

## 5. Fiche de preuves

| Affirmation utilisable                                                                                                                                                     | Source primaire, URL et passage utile                                                                                                                                                   | Nature                   | Périmètre                        | Date/consultation | Confiance                                                  | Emplacement du lien visible | Conséquence lecteur                                      | Fraîcheur                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | -------------------------------- | ----------------- | ---------------------------------------------------------- | --------------------------- | -------------------------------------------------------- | ------------------------------------------------------------ |
| Search permet d'afficher des annonces à des personnes qui recherchent activement les produits ou services de l'entreprise                                                  | [Google Ads — campagnes sur le Réseau de Recherche](https://support.google.com/google-ads/answer/9510373?hl=fr)                                                                         | Documentation officielle | Fonctionnement général de Search | 23/07/2026        | Élevée                                                     | Définition de Search        | Comprendre le point de départ                            | Revoir avant publication si interface ou terminologie change |
| Les mots clés et leurs correspondances structurent une configuration Search standard                                                                                       | [Google Ads — À propos des mots clés](https://support.google.com/google-ads/answer/1704371?hl=fr)                                                                                       | Documentation officielle | Search utilisant des mots clés   | 23/07/2026        | Élevée                                                     | Partie Search               | Comprendre un test circonscrit                           | Annuelle                                                     |
| AI Max est une couche facultative de Search qui peut élargir la mise en correspondance, adapter le texte et étendre l'URL finale selon les réglages                        | [Google Ads — fonctionnement AI Max](https://support.google.com/google-ads/answer/15910187?hl=fr) et [FAQ AI Max](https://support.google.com/google-ads/answer/15913066?hl=fr)          | Documentation officielle | Search avec AI Max               | 23/07/2026        | Élevée                                                     | Encadré Search              | Faire dépendre le contrôle du réglage réel               | À revoir à chaque mise à jour AI Max                         |
| Performance Max est fondée sur les objectifs et donne accès à l'inventaire Google depuis une seule campagne                                                                | [Google Ads — À propos de Performance Max](https://support.google.com/google-ads/answer/10724817?hl=fr)                                                                                 | Documentation officielle | PMax                             | 23/07/2026        | Élevée                                                     | Définition de PMax          | Comprendre ce qui est délégué                            | À revoir à chaque mise à jour substantielle                  |
| Pour la génération de prospects, Google distingue une optimisation du volume et une optimisation de la valeur, alimentées par des actions et valeurs pertinentes           | [Google Ads — bonnes pratiques PMax pour les prospects](https://support.google.com/google-ads/answer/13775965?hl=fr)                                                                    | Documentation officielle | PMax et mesure des prospects     | 23/07/2026        | Élevée sur le fonctionnement, intéressée sur les bénéfices | Conditions et protocole     | Choisir une règle de valeur métier                       | À revoir avant mise à jour du guide                          |
| PMax complète Search et ne la remplace pas nécessairement                                                                                                                  | [Google Ads — À propos de Performance Max](https://support.google.com/google-ads/answer/10724817?hl=fr)                                                                                 | Documentation officielle | Coexistence                      | 23/07/2026        | Élevée                                                     | Verdict puis coexistence    | Autoriser les quatre sorties                             | À revoir à chaque mise à jour substantielle                  |
| La priorité stricte vise le mot clé Search exact identique au terme ; hors de ce cas, éligibilité, pertinence et classement interviennent entre candidats                  | [Google Ads — priorité des mots clés et campagnes](https://support.google.com/google-ads/answer/2756257?hl=fr)                                                                          | Documentation officielle | Arbitrage Search, AI Max et PMax | 23/07/2026        | Élevée                                                     | Coexistence                 | Éviter les deux raccourcis de cannibalisation            | À revoir à chaque mise à jour                                |
| PMax fournit un rapport sur les termes de recherche                                                                                                                        | [Google Ads — termes de recherche PMax](https://support.google.com/google-ads/answer/16327396?hl=fr)                                                                                    | Documentation officielle | PMax                             | 23/07/2026        | Élevée                                                     | Partie observation          | Ne pas qualifier PMax de boîte noire totale              | À revoir si le rapport change                                |
| PMax fournit un rapport par canal avec métriques et diagnostics pour les dates disponibles après le 6 juin 2025                                                            | [Google Ads — performances des canaux](https://support.google.com/google-ads/answer/16260130?hl=fr)                                                                                     | Documentation officielle | PMax                             | 23/07/2026        | Élevée                                                     | Partie observation          | Lire le mix de diffusion sans inventer une allocation    | À revoir si le rapport change                                |
| Google recommande les exclusions de marques pour le trafic de marque et réserve les mots clés à exclure aux termes inadaptés ou essentiels à la sécurité de marque         | [Google Ads — exclusions de marques](https://support.google.com/google-ads/answer/16669487?hl=fr) et [mots clés à exclure](https://support.google.com/google-ads/answer/16668865?hl=fr) | Documentation officielle | PMax                             | 23/07/2026        | Élevée                                                     | Partie contrôle             | Choisir le bon outil sans retirer une demande utile      | À revoir si les contrôles changent                           |
| Dans PMax, les mots clés à exclure couvrent Search et Shopping seulement ; Display et Video demandent des contrôles de compatibilité de contenu et de placements distincts | [Google Ads — compatibilité de la marque dans Performance Max](https://support.google.com/google-ads/answer/13607727?hl=fr)                                                             | Documentation officielle | PMax multicanal                  | 23/07/2026        | Élevée                                                     | Partie contrôle             | Ne pas croire qu'une exclusion protège tous les canaux   | À revoir si les contrôles changent                           |
| Google distingue plusieurs expériences PMax, dont les tests d'impact, avec éligibilité et allocation propres                                                               | [Google Ads — expériences PMax](https://support.google.com/google-ads/answer/12997711?hl=fr) et [test d'impact](https://support.google.com/google-ads/answer/13827420?hl=fr)            | Documentation officielle | Expériences PMax                 | 23/07/2026        | Élevée sur le mécanisme                                    | Protocole de test           | Choisir la question et les paramètres avant le lancement | À revoir avant chaque test                                   |

### Contradictions et données à ne pas publier

- Aucun seuil universel de conversions minimum n'a été établi par une source
  primaire consultée : ne pas inventer « 30 », « 50 » ou « 100 conversions ».
- Ne pas reprendre une hausse moyenne annoncée par Google comme promesse pour
  le lecteur : les résultats dépendent du compte, de l'offre et de la mesure.
- Ne pas écrire que Performance Max ne permet aucun contrôle ni aucune lecture
  des recherches ; les contrôles et rapports actuels contredisent ce raccourci.
- Ne pas écrire que Search est toujours préférable au B2B. Une préférence
  Search pour une demande étroite et peu de données sera clairement nommée
  recommandation éditoriale Hagnéré Code, avec ses conditions.
- Ne pas fournir de coût par clic, budget minimum, délai ou rendement universel.
- Ne pas conclure à partir d'un volume de clics : la décision porte sur des
  demandes qualifiées et des ventes ou étapes métier vérifiables.

### Calculs reproductibles

Aucun calcul financier n'est requis. L'artefact utilisera une décision logique
et non un score pseudo-scientifique :

1. La demande est-elle exprimable par des recherches précises ?
2. Quelle action principale faut-il optimiser : son volume ou sa valeur ?
3. Comptage, valeurs, attribution et retour de qualification sont-ils fiables
   et comparables ?
4. L'entreprise dispose-t-elle d'éléments textuels et visuels cohérents ?
5. Zone, offre, marque, termes ou URL doivent-ils rester circonscrits, et AI Max
   est-il activé ?
6. À quelle question l'expérience éligible doit-elle répondre, avec quelle
   allocation et quels réglages constants ?
7. Qui lit recherches et canaux, traite les contacts et décide de conserver ou
   d'arrêter ?

La sortie devra être argumentée, jamais réduite à « quatre oui = PMax ».

## 6. Empreinte éditoriale à ne pas reproduire

| Guide                           | Type d'ouverture                    | Progression                  | Dispositif récurrent  | Type d'exemple     | Place du CTA | Type de conclusion        |
| ------------------------------- | ----------------------------------- | ---------------------------- | --------------------- | ------------------ | ------------ | ------------------------- |
| `audit-google-ads-que-verifier` | Compte qui dépense sans explication | Diagnostic en chaîne         | Checklist de contrôle | Compte actif       | Après audit  | Priorités de correction   |
| `budget-google-ads-pme`         | Question de montant                 | Hypothèses puis budget test  | Table de calcul       | PME fictive        | Fin          | Budget conditionnel       |
| `seo-ou-google-ads`             | Arbitrage de canal                  | Contraintes puis comparaison | Portes décisionnelles | Deux canaux        | Fin          | Verdict par horizon       |
| `suivi-conversions-google-ads`  | Mesure manquante                    | Événements puis validation   | Plan de marquage      | Formulaires/appels | Après preuve | Mesurer avant d'optimiser |

Choix du nouveau guide :

```text
Tension ou question motrice : combien de contrôle faut-il garder avant de laisser Google élargir la diffusion ?
Type d'ouverture retenu et pourquoi : deux scènes de campagne vues depuis le bureau du dirigeant, afin qu'il comprenne immédiatement ce qu'il pourra observer
Progression retenue et pourquoi : scènes concrètes -> quatre conditions de choix -> coexistence -> test -> décision, pour ne pas commencer par le jargon produit
Artefact signature : fiche de décision en sept questions accompagnée d'une sortie argumentée
Rythme/registre de voix : phrases directes, exemples d'entreprise, une idée par paragraphe
Place naturelle du CTA : après que le lecteur a défini le test qu'il veut pouvoir évaluer
Forme de conclusion : quatre profils « commencez par Search », « testez PMax avec des garde-fous », « combinez progressivement », « réparez d'abord la mesure »
Au moins trois différences avec les guides voisins : pas d'audit en chaîne ; pas de calcul budgétaire ; pas d'opposition SEO/Ads ; deux campagnes racontées par ce que voit le dirigeant ; pas de métaphore de portes
```

## 7. Plan annoté

| Section provisoire                                           | Question résolue                       | Preuve ou exemple                                                                    | Conséquence/décision                           | Format choisi                               |
| ------------------------------------------------------------ | -------------------------------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------- | ------------------------------------------- |
| Search ou Performance Max : la réponse courte                | Lequel choisir ?                       | Deux situations d'entreprise                                                         | Verdict conditionnel immédiat                  | Ouverture narrative courte                  |
| Ce que vous verrez dans une campagne Search                  | Que contrôle vraiment l'entreprise ?   | Recherche « logiciel planning atelier », configuration standard puis AI Max          | Le réglage Search change le niveau de contrôle | Mini-parcours et encadré                    |
| Ce que vous confiez à Performance Max                        | Que fait l'automatisation ?            | Objectif, créations, signaux et diffusion multiespace                                | PMax exige des entrées et conversions fiables  | Mini-parcours parallèle                     |
| Quatre conditions changent le bon choix                      | Quels critères priment ?               | Demande, volume ou valeur, contenus, réglages et contrôle                            | Écarter le verdict universel                   | Quatre cartes lisibles sur mobile           |
| Search et PMax peuvent travailler ensemble                   | Vont-elles forcément se cannibaliser ? | Priorité exacte identique, branches suivantes et éligibilité                         | Construire une coexistence surveillée          | Scénario progressif                         |
| Le test qui permet une vraie décision                        | Comment éviter un test trompeur ?      | Actions, comptage, valeurs, attribution, expérience, allocation, objectifs et cibles | Décider conserver, corriger ou arrêter         | Protocole en étapes                         |
| Votre fiche de choix                                         | Que faire maintenant ?                 | Sept questions du dossier                                                            | Produire une recommandation autonome           | Checklist dans la page, sans téléchargement |
| Quand Hagnéré Code est — ou n'est pas — le bon interlocuteur | Faut-il déléguer ?                     | Bon et mauvais fit                                                                   | Conversion honnête                             | Deux encadrés                               |
| Questions fréquentes                                         | Répondre aux objections résiduelles    | Sources officielles                                                                  | Lever les ambiguïtés sans répéter le guide     | FAQ courte                                  |

## 8. Ressource et conversion

```text
Une ressource est-elle naturellement nécessaire ? non
Problème qu'elle résout après la lecture : le lecteur doit choisir un protocole de lancement, pas télécharger un document générique
Résultat autonome produit : une décision argumentée à partir de sept questions affichées dans la page
Format éditable et format de consultation : checklist HTML lisible et imprimable par le navigateur
Rubriques, champs ou matrices réellement livrés : demande, action principale, volume ou valeur, comptage, attribution, contenus, AI Max, exclusions, expérience, allocation, qualification et responsable
Exemples remplis : une PME B2B avec demande précise et peu de conversions teste Search ; un éditeur déjà capable d'importer qualification et valeur peut tester PMax avec garde-fous
Conclusion « ne pas investir » possible : oui, si le suivi confond contacts utiles et événements techniques ou si personne ne traite les demandes
Sources, hypothèses et limites visibles : oui, à proximité des affirmations
Données saisies et destination de ces données : aucune donnée saisie
Processus de génération reproductible : sans objet
Journal de QA : à réaliser en P4
Limites connues et niveau de revue humaine : la recommandation dépend du compte et doit être revue par un humain avant dépense
Mode de maintenance : revue des contrôles et rapports Google avant chaque mise à jour substantielle
Test du fichier ou outil : sans objet
Bon fit Hagnéré Code : entreprise avec offre identifiable, mesure à cadrer et volonté de relier la dépense aux demandes commerciales
Mauvais fit : entreprise qui attend des ventes garanties, refuse de suivre les conversions ou ne peut pas traiter les prospects
Action non commerciale : remplir la fiche et écrire le critère qui fera conserver ou arrêter le test
CTA principal et résultat après clic : demander un cadrage pour obtenir une architecture de campagne, un plan de mesure et des critères de décision
```

## 9. Rapports de sortie des quatre passes

### Rapport P1 — Recherche

```text
PASSE 1 TERMINÉE
Slug : google-search-ads-ou-performance-max
Lecteur et phrase réelle : dirigeant — « Je veux faire de la pub sur Google, mais je ne sais pas si je dois choisir Search ou Performance Max. »
Décision : tester Search, tester PMax avec garde-fous, combiner progressivement ou reporter selon la demande, les réglages Search, les actions, valeurs, contenus et contrôles
Angle et forme dominante : deux campagnes décrites par ce que l'entreprise peut voir, régler et mesurer
Pages proches et différence : audit, budget, conversions et SEO/Ads restent des sujets liés mais non répétés
Sources décisives : documentation officielle Google Ads sur Search, AI Max, PMax, volume ou valeur, priorité, termes, canaux, exclusions et expériences
Incertitudes exclues : seuil universel de conversions, résultat moyen, budget minimum, délai garanti
Action autonome et CTA possible : fiche de choix en sept questions ; cadrage d'une campagne réellement évaluable
Plan : scènes concrètes, conditions, coexistence, protocole de test, décision, fits, FAQ
Snapshot : docs/research/manifests/google-search-ads-ou-performance-max-p1.sha256
```

### Rapport P2 — Rédaction et intégration

```text
PASSE 2 TERMINÉE — PRÊTE POUR CONTRE-AUDIT INDÉPENDANT
Fichiers créés ou modifiés : dossier de recherche ; page publique ; image sociale ; registre des guides ; lien entrant depuis `budget-google-ads-pme` ; garde-fous éditoriaux automatisés
Ouverture et réponse : question formulée comme au téléphone, définition ordinaire de Search et Performance Max, verdict conditionnel immédiat et possibilité explicite de ne pas lancer
Forme propre au sujet : deux parcours parallèles vus depuis l’entreprise ; couche AI Max expliquée ; quatre conditions ; coexistence en cinq décisions ; protocole en sept étapes ; fiche autonome en sept questions ; quatre sorties honnêtes et non hiérarchisées
Exemples ou calculs : mini-parcours fictif Search autour de « logiciel planning atelier » et second cas fictif PMax ; aucun budget, seuil de conversions, délai, score ou rendement universel
Sources visibles : documentation officielle Google Ads sur Search, AI Max, PMax, volume ou valeur, priorité, rapport de termes, canaux, exclusions de marques, portée multicanale des mots clés à exclure et expériences ; rôle commercial de Google explicité
Action autonome, bon fit et mauvais fit : décision de test copiable ; tester Search, tester PMax avec garde-fous, combiner ou reporter ; offre, page et mesure peuvent devoir être corrigées avant toute dépense
CTA et destination : « Cadrer ma campagne » vers `/demarrer-un-projet` ; lecture humaine du contexte, architecture et plan de mesure possibles, aucune vente ni rentabilité promise
Contrôles rapides : 36/36 tests ciblés ; ESLint, TypeScript, Prettier et diff-check conformes ; OG 1200 × 630 inspectée
Snapshot : `docs/research/manifests/google-search-ads-ou-performance-max-p2.sha256`
```

### Rapport P3 — Contre-audit indépendant

```text
P3 VALIDÉE APRÈS REPRISE
Relecteurs : `/root/audit_p1_saas_evolution` et `/root/audit_p1_saas_evolution/portail_legal_boundaries`
Historique : première P3 refusée avec P0 = 0 ; P1 = 5 ; P2 = 2, puis reprise par l’éditeur unique
Snapshot revalidé : version finale de `docs/research/manifests/google-search-ads-ou-performance-max-p2.sha256`
Verdict final : P0 = 0 ; P1 = 0 ; P2 = 0
Points revalidés : traçabilité ; AI Max ; rapports de termes et par canal ; exclusions de marques ; mots clés à exclure limités à Search et Shopping ; contrôles Display et Video distincts ; volume ou valeur ; comparabilité ; priorité ; expériences ; quatre sorties symétriques
Contrôles : manifeste 6/6 exact ; 36/36 tests ciblés ; ESLint, TypeScript, Prettier et diff-check conformes
OG : 1200 × 630 réellement inspectée, lisible, équilibrée et non tronquée
État : porte P3 validée ; P4 autorisée
```

### Rapport P4 — Plume humaine et contrôle final

```text
PASSE 4 TERMINÉE
Passages humanisés : choix Search/PMax formulé comme au téléphone ; deux formats expliqués par ce que le dirigeant voit, fournit et peut vérifier ; AI Max replacé comme option de Search
Retour P3 effectué : oui ; reprise après un refus P1/P2 puis revalidation finale à P0 = 0, P1 = 0 et P2 = 0
Lecture et artefact : 3 851 mots comptés dans l'artefact final, soit 19 minutes avec la convention de 200 mots par minute
Scorecard justifiée : 20/20 ; détail dans la table ci-dessous
Validation humaine réelle : non
Test réalisé par une personne réelle : non
Autorisation éditoriale : Décision de publication : autorisée explicitement par le commanditaire
Commandes et résultats : check:seo, ESLint, TypeScript, batterie Vitest, build Next.js, postbuild et git diff --check conformes au gel final du lot
Largeurs et états contrôlés : 320, 390, 767, 1 024 et 1 440 px ; aucun débordement ; canonical exact ; un H1 ; Article et BreadcrumbList ; un CTA sans téléphone
Snapshot final : docs/research/manifests/google-search-ads-ou-performance-max-p4.sha256
Statut maximal : publiable — validation éditoriale déléguée
Verdict : porte P4 validée
```

### Scorecard P4

| Axe         | Note 0-2 | Preuve dans la page                                                                    | Correction éventuelle |
| ----------- | -------: | -------------------------------------------------------------------------------------- | --------------------- |
| Intention   |        2 | Le dirigeant choisit entre Search, Performance Max, combinaison ou report              | Aucune                |
| Décision    |        2 | Quatre sorties dépendent de la demande, des contenus, des conversions et du contrôle   | Aucune                |
| Pédagogie   |        2 | Les formats sont expliqués par deux parcours fictifs et sept questions                 | Aucune                |
| Profondeur  |        2 | AI Max, canaux, exclusions, valeur, attribution, priorité et expériences sont couverts | Aucune                |
| Preuve      |        2 | Documentation Google Ads officielle, rôle commercial et limites visibles               | Aucune                |
| Comparaison |        2 | Search et PMax sont évalués sur les mêmes conditions et sans gagnant automatique       | Aucune                |
| Originalité |        2 | Le guide suit la décision mesurable plutôt qu'une liste générique d'avantages          | Aucune                |
| Style       |        2 | Vocabulaire du dirigeant, jargon traduit et réponse conditionnelle immédiate           | Aucune                |
| Conversion  |        2 | CTA tardif, sans promesse de vente, de rentabilité ni d'architecture gratuite          | Aucune                |
| SEO/produit |        2 | Intention distincte, metadata, maillage, OG, index/follow et cinq largeurs contrôlés   | Aucune                |

Total final : **20/20**.

### Test lecteur non technique

```text
Test réalisé par une personne réelle : non
Profil du lecteur : non testé
Ce qu'il a compris comme réponse : non revendiqué
Décision qu'il prendrait : non revendiquée
Endroit où il a commencé à survoler : non mesuré
Passage crédible ou trop commercial : non mesuré
Termes ou passages bloquants : non mesurés
Corrections appliquées : deux contre-audits indépendants, contrôles visuels réels et délégation explicite du commanditaire ; aucun faux test lecteur n'est inventé
```

## 10. Revue historique de porte P1

- [x] décision unique et lecteur dirigeant définis ;
- [x] sources officielles actuelles consultées ;
- [x] SERP française observée sans inventer de volumes ;
- [x] cannibalisation contrôlée ;
- [x] termes techniques traduits en conséquences observables ;
- [x] preuves, recommandations éditoriales et incertitudes séparées ;
- [x] action autonome, bon fit et mauvais fit définis ;
- [x] aucune promesse de résultat, de prix ou de ressource inexistante ;
- [x] au gel P1, P2 restait à corriger et P3/P4 demeuraient bloquées.
