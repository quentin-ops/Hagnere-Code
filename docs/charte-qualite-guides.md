# Charte qualité des guides Hagnéré Code

> **RÈGLE ZÉRO — LECTURE OBLIGATOIRE.** Avant d'écrire, de réécrire ou de
> modifier substantiellement un guide, lire ce fichier en entier. Cette
> charte est la source de vérité éditoriale. Un ancien guide sert
> d'exemple technique, jamais de modèle de fond à recopier.

Version : **20 juillet 2026** · Propriétaire : Hagnéré Code

Fichiers liés : [roadmap éditoriale](roadmap-guides-seo.md) · registre
`src/lib/guides.ts` · composants `src/components/guides/`.

---

## Lecture rapide — les 12 règles non négociables

Un agent peut utiliser cette liste pour se repérer, mais doit lire les
sections détaillées avant de livrer :

1. une page sert un lecteur précis, une intention et une décision ;
2. aucun plan n'est arrêté avant l'étude de la demande, des preuves et des
   contenus déjà publiés ;
3. la réponse principale apparaît avant le développement détaillé ;
4. chaque terme technique est traduit au moment où il devient utile ;
5. les options sont comparées à conditions égales, y compris ne rien faire,
   acheter un outil existant ou reporter le projet ;
6. chaque fait important porte une source, un périmètre, une date et un
   niveau de confiance ;
7. un scénario inventé est toujours nommé « exemple illustratif » et ne
   devient jamais un faux client ou un faux devis réel ;
8. le lecteur repart avec coûts, délais, risques, responsabilités, preuves
   attendues et critères de réception ;
9. le CTA prolonge la décision du lecteur, recommande aussi les mauvais fits
   et ne promet aucun résultat invérifiable ;
10. l'angle, l'ouverture, la progression et la conclusion ne recopient pas
    l'empreinte éditoriale des guides voisins ;
11. une ressource promise produit un résultat autonome et testé ; elle ne
    résume pas simplement l'article dans un PDF ;
12. aucun quota de mots, titres, FAQ ou liens ne remplace la pertinence, et
    la page ne sort qu'après revue anti-erreurs, scorecard, tests et contrôle
    dans un vrai navigateur.

---

## 1. Le résultat attendu

Un guide Hagnéré Code doit aider un dirigeant ou un indépendant non
technique à **comprendre une décision numérique, comparer ses options et
agir sans devoir relancer Google**.

À la fin de la lecture, il doit pouvoir répondre à six questions :

1. De quoi parle-t-on, en français courant ?
2. Quelle option convient à mon cas — et laquelle ne me convient pas ?
3. Combien cela coûte, prend de temps et mobilise de personnes ?
4. Quels risques, coûts cachés et responsabilités dois-je anticiper ?
5. Quelles preuves rendent ces réponses crédibles ?
6. Quelle est ma prochaine action utile, même si je ne contacte pas
   Hagnéré Code ?

L'ambition est de produire **la réponse la plus utile de la SERP
francophone**, pas de promettre une première place. Aucun nombre de mots,
de titres, de FAQ ou de données structurées ne garantit un classement.
Google indique explicitement ne pas avoir de nombre de mots préféré et
recommande un contenu conçu d'abord pour les personnes.

Un guide reste utile si le lecteur ne devient jamais client. C'est cette
utilité qui construit la confiance et rend la conversion crédible.

---

## 2. Le lecteur et la décision avant le mot-clé

Le lecteur de référence est un dirigeant de TPE/PME ou un indépendant en
France. Il connaît son métier, mais pas nécessairement le vocabulaire du
web. Il cherche rarement « une technologie » : il cherche à vendre,
gagner du temps, fiabiliser un processus, réduire un coût, lancer un
produit ou éviter un risque.

Avant toute recherche, remplir ce brief dans les notes de travail :

```text
Requête principale :
Lecteur précis :
Situation déclenchante :
Décision qu'il doit prendre après lecture :
Niveau de connaissance au départ :
5 questions auxquelles il exige une réponse :
3 objections ou craintes :
Ce qui prouvera notre expertise :
Action utile sans contact commercial :
CTA pertinent si Hagnéré Code peut réellement aider :
Hors périmètre du guide :
```

Une page = **une intention principale et une décision principale**. Si le
brief contient deux décisions indépendantes, créer deux contenus ou
désigner clairement l'une comme secondaire.

### Les quatre moments du parcours d'achat

Identifier le moment dominant ; il détermine la structure et le CTA :

| Moment     | Question du lecteur                   | Ce que le guide doit produire                              |
| ---------- | ------------------------------------- | ---------------------------------------------------------- |
| Comprendre | « Qu'est-ce que c'est ? »             | définition, exemples, limites                              |
| Explorer   | « Quelles solutions existent ? »      | options, critères, cas d'usage                             |
| Décider    | « Laquelle choisir et à quel prix ? » | arbitrage, budget, risques, verdict par profil             |
| Sécuriser  | « Comment éviter une erreur ? »       | méthode, responsabilités, contrôles, critères de réception |

---

## 3. Mode opératoire obligatoire pour l'agent

Cette section est le contrat d'exécution. Un agent ne livre pas seulement
une page TSX : il laisse les éléments qui permettent de comprendre,
vérifier et maintenir ses choix.

### 3.1 Fichiers à ouvrir avant de commencer

Lire, dans cet ordre :

1. cette charte en entier ;
2. `docs/roadmap-guides-seo.md` ;
3. `src/lib/guides.ts` et les pages service liées au sujet ;
4. les guides visant une intention proche ;
5. les trois à cinq derniers guides du même cluster, uniquement pour
   repérer ce qu'il ne faut pas reproduire mécaniquement ;
6. le dossier `docs/research/` et l'éventuelle fiche existante du sujet ;
7. les composants de `src/components/guides/` avant toute modification
   d'interface.

Un guide existant peut fournir une convention de code. Il ne fournit ni le
plan, ni l'angle, ni le verdict du nouveau contenu.

### 3.2 Dossier de travail obligatoire

Créer ou mettre à jour `docs/research/<slug>.md` **avant la rédaction de la
page**. Utiliser le [modèle de dossier de guide](research/_modele-guide.md).
Ce dossier doit rester compréhensible par un autre agent et contenir :

- le brief lecteur et la décision principale ;
- les pages voisines et le risque de cannibalisation ;
- la demande observée et les questions réelles ;
- la carte des concurrents et leurs angles morts ;
- la fiche de preuves, y compris les contradictions non résolues ;
- l'empreinte des guides voisins et les choix de variation ;
- l'angle, la promesse, le plan justifié et l'action non commerciale ;
- la décision concernant une éventuelle ressource ;
- la scorecard finale, les retours du lecteur test et les vérifications.

Ne jamais stocker l'unique copie d'une recherche dans un dossier temporaire,
un transcript d'agent ou un outil externe. Les résultats utiles sont
synthétisés dans ce fichier versionné.

### 3.3 Pipeline, livrable et porte de sortie

| Étape              | Travail à effectuer                                                                                  | Trace obligatoire                                   | Porte de sortie                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------- | ------------------------------------------------------------------ |
| 1. Cadrer          | Définir lecteur, déclencheur, intention, décision, objections et hors-périmètre                      | Brief rempli                                        | Une seule décision principale est formulée en une phrase           |
| 2. Dédupliquer     | Inspecter roadmap, registre, guides et pages service proches                                         | Tableau « page voisine / différence d'intention »   | Aucun doublon d'intention non résolu                               |
| 3. Observer        | Croiser Search Console disponible, questions visibles, suggestions et SERP actuelle                  | Liste de questions et vocabulaire du lecteur, datée | Les besoins réels sont connus sans inventer de volume              |
| 4. Comparer        | Étudier assez de résultats représentatifs pour comprendre réponses, formats, preuves et angles morts | Carte concurrentielle synthétique                   | L'angle n'est pas seulement « plus long »                          |
| 5. Prouver         | Vérifier les sources primaires, tarifs, règles, calculs et limites                                   | Fiche de preuves du §4                              | Aucun fait décisif ne repose sur une source absente ou déformée    |
| 6. Différencier    | Comparer l'empreinte des guides voisins, choisir la progression et l'artefact signature              | Fiche de variation du §9                            | Le plan découle de la décision du lecteur et non d'un ancien guide |
| 7. Planifier       | Associer chaque question utile à une section, une preuve et une conséquence                          | Plan annoté                                         | Chaque section a une fonction ; les doublons sont retirés          |
| 8. Rédiger         | Écrire réponse, démonstration, exemples, limites, alternatives et verdict                            | Brouillon complet                                   | Un non-technicien peut agir sans seconde recherche essentielle     |
| 9. Convertir       | Choisir action autonome, bon fit, mauvais fit, CTA et éventuelle ressource                           | Parcours de sortie décrit                           | Le CTA prolonge le raisonnement et ne force pas la conclusion      |
| 10. Intégrer       | Ajouter page, registre, metadata, données structurées, image et maillage pertinent                   | Diff de code cohérent                               | Les promesses visibles existent réellement                         |
| 11. Contre-auditer | Refaire calculs, sources, cohérence, style, scorecard et test lecteur                                | Preuve par axe et liste des corrections             | Seuil du §13 atteint, aucun point bloquant                         |
| 12. Vérifier       | Lancer contrôles techniques et observer le rendu réel                                                | Commandes, URLs et tailles contrôlées               | Les critères du §14 passent                                        |
| 13. Livrer         | Distinguer créé, testé localement, publié et indexé                                                  | Rapport de livraison factuel                        | Aucun état externe n'est déclaré sans preuve                       |

Les étapes sont obligatoires ; le nombre d'agents et d'outils dépend de la
complexité. Une recherche multi-agents est recommandée pour les sujets
comparatifs, juridiques, financiers ou riches en données. Elle ne remplace
jamais la synthèse finale : un workflow lancé n'est pas une recherche
terminée.

### 3.4 Situations où l'agent doit s'arrêter

Ne pas combler un manque par une formulation plausible. Signaler le blocage
et poursuivre uniquement sur les éléments sûrs lorsque :

- une affirmation décisive ne possède aucune source vérifiable ;
- deux sources fiables se contredisent sans périmètre permettant de trancher ;
- un cas présenté comme réel ne peut pas être documenté ou autorisé ;
- un tarif, une règle juridique ou une fonctionnalité volatile n'a pas été
  revalidé ;
- une ressource ou un CTA promis n'existe pas encore ;
- le nouveau contenu duplique l'intention d'une page existante ;
- le rendu, les tests ou une porte de sortie obligatoire échouent.

L'agent peut retirer une affirmation ou réduire le périmètre si le guide reste
utile. Il ne peut pas transformer une incertitude en certitude pour terminer.

---

## 4. Recherche, preuve et expérience

### 4.1 La fiche de preuves

Conserver pour chaque fait important :

| Champ              | Contenu attendu                                                   |
| ------------------ | ----------------------------------------------------------------- |
| Affirmation        | formulation exacte que l'article pourra soutenir                  |
| Source             | titre, organisme et URL                                           |
| Nature             | officielle, étude primaire, tarif officiel, benchmark, estimation |
| Périmètre          | pays, population, produit, offre, HT/TTC, période                 |
| Date               | publication et date de consultation                               |
| Confiance          | élevée, moyenne ou faible, avec raison                            |
| Traduction lecteur | conséquence concrète pour son budget ou sa décision               |
| Fraîcheur          | date ou événement qui impose une nouvelle vérification            |

Le [registre post-audit de six guides](research/audit-six-guides-2026-07-19.md)
montre le niveau minimal attendu quand une page mêle tarifs officiels, études
limitées, simulations et ordres de grandeur éditoriaux.

Une affirmation est **décisive** si une erreur peut modifier le budget, le
délai, le choix d'une solution, un risque, une obligation, une promesse
commerciale ou la confiance accordée à Hagnéré Code. Elle doit toujours être
qualifiée et sourcée au plus près de son occurrence visible, y compris dans
un tableau, un encadré ou une FAQ.

Règles de collecte :

- une réponse d'IA, un résumé de moteur ou un extrait de résultat n'est pas
  une source ; ouvrir et lire le document original ;
- un tarif actuel vient de la page officielle de l'éditeur ; une obligation
  juridique vient du texte ou de l'organisme public compétent ;
- une étude n'est exploitable qu'avec sa méthode, sa population, son pays,
  sa période et ses limites ;
- la fiche conserve la page, le tableau ou la section qui soutient réellement
  l'affirmation, sans recopier de longs extraits ;
- un ordre de grandeur sans corpus publiable est nommé « estimation
  éditoriale » et expose ses hypothèses ;
- une source inaccessible ou contradictoire impose de réduire la portée,
  d'expliquer l'incertitude ou de retirer l'affirmation ;
- ne jamais reconstruire un article en paraphrasant le plan d'un concurrent.

Hiérarchie de preuve, de la plus forte à la plus fragile :

1. artefact de première main vérifiable : méthode, test, capture, devis
   anonymisé avec accord, calcul reproductible ;
2. texte officiel, tarif officiel ou donnée publique primaire ;
3. étude primaire avec méthodologie lisible ;
4. benchmark reconnu dont l'échantillon et le périmètre sont connus ;
5. recoupement de marché, présenté comme tel et jamais comme une vérité
   officielle.

Un exemple inventé pour expliquer est permis, mais il est nommé
**« exemple illustratif fictif » dès sa première apparition**. Ne jamais
l'appeler « cas réel », « devis réel » ou « client » sans preuve et
autorisation. L'étiquette reste visible lorsqu'il est repris dans un tableau,
un encadré ou une FAQ autonome. Ses hypothèses précèdent le calcul, le calcul
est reproductible et chaque donnée réelle incorporée reste sourcée. Aucun
logo, citation, avis, entreprise ou résultat n'est inventé : un personnage
fictif explique une décision, il ne fabrique jamais une preuve sociale.

### 4.2 Orchestration de la recherche

Lorsque plusieurs agents participent, les axes sont indépendants : demande et
SERP, sources primaires, calculs, angle métier, puis contre-audit. Un seul
responsable synthétise dans le digest, déduplique les résultats et tranche ou
consigne les contradictions. Les réponses d'agents ne sont pas citées comme
preuves et un agent qui a rédigé ne réalise pas seul le contre-audit final.

### 4.3 L'étude des résultats existants

Pour chaque page concurrente réellement utile, relever :

- la réponse donnée dès l'ouverture ;
- les critères de comparaison et les profils couverts ;
- les chiffres, leur date et leur source réelle ;
- les exemples, outils, modèles ou calculateurs proposés ;
- les limites reconnues et les options concurrentes recommandées ;
- la prochaine action demandée au lecteur ;
- ce qui manque pour prendre une décision sans nouvelle recherche.

La différenciation ne consiste pas à ajouter 1 000 mots. Elle consiste à
apporter au moins un élément difficile à remplacer : calcul
reproductible, grille de décision, exemple vérifiable, modèle réutilisable,
comparaison à coût total, protocole de contrôle ou retour d'expérience
documenté.

---

## 5. Architectures selon l'intention

Les modules ci-dessous sont des garde-fous, pas des plans à recopier.
L'ordre suit le raisonnement réel du lecteur.

### 5.1 Guide de prix

Le lecteur doit repartir avec une enveloppe et savoir ce qu'elle inclut.
Prévoir selon le sujet :

- réponse courte avec fourchette, hypothèses et année ;
- ce qui est inclus, exclu et souvent oublié ;
- trois scénarios réalistes plutôt qu'une seule moyenne ;
- facteurs qui font varier le prix, classés par impact ;
- coût total sur une durée pertinente, avec hypothèses affichées ;
- exemple de devis **réel et anonymisé**, ou exemple illustratif clairement
  étiqueté ;
- méthode pour comparer deux devis à périmètre identique ;
- seuil où acheter un outil existant reste plus rationnel ;
- étapes concrètes pour préparer une demande de devis.

### 5.2 Comparatif

Définir les critères **avant** le verdict : besoin, budget, délai,
autonomie, intégrations, propriété, maintenance, réversibilité, équipe et
risque.

Le guide doit contenir :

- les cas où l'option A gagne franchement ;
- les cas où l'option B gagne franchement ;
- les cas où une troisième option est meilleure ;
- une comparaison à périmètre et horizon identiques ;
- les coûts de migration ou de sortie ;
- les conséquences organisationnelles, pas seulement techniques ;
- un verdict par profil avec conditions observables ;
- les informations manquantes qui empêchent encore de trancher.

Le verdict n'est jamais écrit avant la recherche. Le choix par défaut est
la solution **la moins complexe qui satisfait durablement le besoin**.
Le sur-mesure se justifie par un avantage métier, une expérience, des
intégrations, une propriété ou une économie à terme — pas parce que
Hagnéré Code en vend. Une plateforme est recommandée quand elle répond
mieux au budget, au délai et à l'autonomie attendue.

### 5.3 Méthode, cahier des charges ou modèle

Le lecteur doit pouvoir produire un livrable, pas seulement le comprendre :

- résultat attendu et conditions d'utilisation ;
- modèle copiable ou téléchargeable quand la requête promet un modèle ;
- étapes dans l'ordre, avec responsable et livrable ;
- exemple rempli de bout en bout ;
- critères d'acceptation : comment savoir que l'étape est terminée ;
- temps, budget et informations nécessaires ;
- erreurs fréquentes et signaux d'alerte ;
- ce que le client prépare et ce que le prestataire doit prendre en
  charge ;
- prochaine action immédiatement réalisable.

### 5.4 Diagnostic, incident ou migration

Le lecteur doit savoir quoi vérifier, dans quel ordre et quand escalader :

- symptômes et niveau d'urgence ;
- causes probables classées par fréquence ou gravité ;
- contrôles sans compétence technique ;
- contrôles du prestataire avec preuve à livrer ;
- plan d'action daté, responsable par responsable ;
- plan de retour arrière et conservation des accès/données ;
- indicateurs à surveiller après intervention ;
- limites au-delà desquelles un audit professionnel devient raisonnable.

### 5.5 Juridique, conformité ou aides

Toujours préciser la juridiction, la date, les entreprises concernées et
les exceptions. Privilégier Légifrance, EUR-Lex, CNIL, administration et
organismes officiels. Séparer clairement obligation, recommandation et
pratique de marché. Ajouter le bon avertissement : le guide n'est pas un
conseil juridique, fiscal ou financier personnalisé.

---

## 6. Pédagogie : rendre le complexe utilisable

1. **Réponse avant contexte.** Les premières lignes répondent directement
   à la requête, avec les conditions qui changent la réponse. Le lecteur
   pressé doit comprendre l'essentiel sans lire l'historique du sujet.
2. **Un terme défini à sa première apparition.** Définition courte dans la
   phrase. Un lexique d'ouverture n'est utile que si au moins cinq termes
   techniques sont inévitables et réapparaissent ensuite.
3. **Chaque chiffre produit une conséquence.** Pourcentage traduit en
   personnes, commission en euros, TJM en budget projet, délai en charge
   côté client.
4. **Hypothèses visibles.** Une somme ou un TCO indique durée, volume,
   prix HT/TTC, fonctions et exclusions. Le lecteur doit pouvoir refaire
   le calcul.
5. **Exemples incarnés et cohérents.** Un fil rouge est utile quand il
   réduit l'abstraction ; il garde le même contexte et les mêmes chiffres
   jusqu'à la fin.
6. **Analogies parcimonieuses.** Une analogie explique un mécanisme ; elle
   ne remplace pas l'explication et ne devient pas un tic de rédaction.
7. **Progression explicite.** Chaque section résout une question et prépare
   la suivante. Les longues sections se terminent par une décision ou une
   action, pas par un simple résumé.
8. **Formats adaptés.** Tableau pour comparer, liste numérotée pour une
   procédure, prose pour expliquer, formule pour calculer, encadré pour
   une alerte ou un exemple.
9. **Lecture à deux vitesses.** Titres, premières phrases, tableaux et
   encadrés suffisent à un lecteur pressé ; la prose apporte ensuite la
   démonstration.
10. **Phrases maîtrisées.** Favoriser une idée par phrase. Scinder les
    phrases longues ou chargées de parenthèses. Éviter les anglicismes
    quand un mot français précis existe.

Pour les calculs économiques, appliquer en plus ces invariants :

- Un scénario partiel est nommé **socle chiffré**, estimation initiale ou
  budget connu, jamais « coût total », si l'administration, les options, la
  fiscalité, la sortie ou d'autres postes restent inconnus. Une inconnue est
  marquée « à confirmer » ; elle n'est jamais remplacée silencieusement par
  zéro.
- Un TCO additionne chaque poste une seule fois sur un horizon explicite. Il
  sépare acquisition, intégration, exploitation, évolution et sortie, même
  lorsqu'une solution hybride cumule abonnement et développement.
- Le gain net est exprimé en euros. Le ROI est calculé séparément :
  `(bénéfices cumulés attribuables - TCO) / TCO × 100`. Le délai de retour
  indique quand les gains cumulés couvrent le coût. Le temps économisé ne
  devient un bénéfice monétaire que si l'hypothèse de réaffectation ou de coût
  évité est expliquée.

---

## 7. Lexique et champ lexical utile

Le champ lexical sert la compréhension, pas la densité de mots-clés.
Avant rédaction, établir une petite carte des mots que le lecteur emploie
réellement :

| Famille         | Exemples à adapter au sujet                                                       |
| --------------- | --------------------------------------------------------------------------------- |
| Problème métier | ressaisie, erreur, délai, dépendance, perte de vente, tâche manuelle              |
| Décision        | choisir, comparer, arbitrer, prioriser, renoncer, tester                          |
| Économie        | budget, coût total, abonnement, maintenance, retour sur investissement            |
| Livraison       | périmètre, jalon, livrable, recette, responsabilité, garantie                     |
| Risque          | sécurité, conformité, réversibilité, disponibilité, dette, dépendance fournisseur |
| Résultat        | temps gagné, conversion, fiabilité, autonomie, adoption, croissance               |

Ajouter synonymes, entités et questions uniquement lorsqu'ils apportent
une nuance ou permettent au lecteur de reconnaître sa situation. Bannir
les paragraphes qui empilent des variantes de requêtes, les listes de
villes sans valeur locale et les répétitions destinées aux moteurs.

---

## 8. Profondeur décisionnelle

Un article profond ne se contente pas d'énumérer. Il relie les faits à
une décision et traite les conséquences de second ordre.

Vérifier systématiquement :

- **périmètre** : qu'achète-t-on réellement ?
- **alternative** : peut-on faire plus simple, acheter ou ne rien faire ?
- **horizon** : que se passe-t-il après la mise en ligne ?
- **organisation** : qui décide, fournit les contenus, teste et maintient ?
- **adoption** : les équipes ou clients utiliseront-ils réellement l'outil ?
- **réversibilité** : que récupère-t-on si le prestataire ou la plateforme
  disparaît ?
- **risque** : quel échec est le plus coûteux et comment le détecter tôt ?
- **mesure** : quel indicateur prouvera que l'investissement fonctionne ?

Une comparaison porte sur le même périmètre, la même durée et les mêmes
contraintes. Si ce n'est pas possible, l'article le dit au lieu de
fabriquer un faux match.

---

## 9. Style professionnel et confiance

La rigueur ne doit pas produire une collection de textes reconnaissables au
premier coup d'œil comme issus du même gabarit. On conserve les garanties de
fond ; on varie la manière de conduire le lecteur selon sa situation.

### 9.1 Construire une empreinte éditoriale propre au sujet

Avant le plan, observer trois à cinq guides proches : un sur la même
intention, un sur le même service et des guides récemment publiés. Remplir la
section correspondante du dossier de travail :

```text
Tension ou question motrice du lecteur :
Type d'ouverture retenu :
Architecture générale :
Traitement des exemples :
Rythme et formats dominants :
Artefact ou action utile :
Moment et formulation du CTA :
Mécanismes des guides voisins volontairement non repris :
```

Les choix possibles servent à penser ; ils ne forment pas une rotation
automatique :

| Dimension   | Possibilités à adapter au besoin                                                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Angle       | arbitrage économique, coût de l'inaction, risque, résultat métier, décision par profil, contrainte dominante, parcours de projet, diagnostic                 |
| Ouverture   | verdict conditionnel, situation déclenchante, dilemme, mini-diagnostic, calcul révélateur, erreur fréquente corrigée                                         |
| Progression | arbre de décision, chronologie, scénarios, audit par risques, comparaison par critères, récit de projet commenté, minimum vers robuste, résultat vers moyens |
| Exemples    | fil rouge discret, microprofils, contre-exemple, avant/après, budget commenté, décision ratée puis corrigée                                                  |
| Artefact    | calcul, matrice, modèle rempli, checklist, plan d'action, grille, protocole de recette                                                                       |
| Sortie      | interpréter un résultat, produire un livrable, sécuriser une décision, comparer deux scénarios, cadrer un risque                                             |

Ne jamais reprendre **simultanément** l'ouverture, la progression et le
dispositif d'exemple du guide le plus proche. Le nouveau dossier doit nommer
au moins trois différences utiles avec ses voisins ; si une structure proche
est réellement imposée par l'intention, l'expliquer et varier l'angle, le
rythme, les exemples et la sortie.

### 9.2 Écrire pour être lu, pas seulement scanné

- La voix Hagnéré Code est celle d'un expert calme, honnête et concret,
  capable de recommander une solution plus simple ou moins chère. S'adresser
  au lecteur avec « vous ». Employer « nous » uniquement pour une pratique,
  une offre ou une expérience réellement attribuable à Hagnéré Code.
- Écrire en français simple, précis et calme. Le lecteur est compétent
  dans son métier ; ne jamais le prendre de haut.
- Éviter la voix industrielle : tous les guides n'ont pas besoin d'un
  « verdict en 30 secondes », de « cinq chiffres à retenir », de quatorze
  sections et du même fil rouge.
- Éviter les superlatifs et formules de vendeur : « révolutionnaire »,
  « personne ne vous le dit », « imbattable », « fatal », « garanti ».
  Les employer seulement si le périmètre les rend démontrables.
- Distinguer fait, interprétation, estimation de marché, exemple
  illustratif et offre Hagnéré Code.
- Reconnaître les limites de l'analyse et les situations où l'offre
  concurrente est meilleure.
- Montrer l'expertise par le raisonnement, les artefacts, les méthodes et
  les contrôles. Citer une technologie n'est pas une preuve d'expérience.
- Ne jamais inventer un client, une mesure, un devis, un panel de lecteurs
  ou une note d'audit.
- Une section doit faire avancer le raisonnement. Éviter deux sections
  consécutives construites exactement comme « paragraphe, liste, encadré ».
- Faire respirer le texte : alterner démonstration, exemple, calcul ou
  décision seulement lorsque le contenu le justifie. Un tableau compare,
  une checklist fait agir, un exemple démontre ; aucun format ne décore.
- Les titres peuvent être inégaux et le nombre de sous-parties peut varier.
  La symétrie visuelle ne prime jamais sur la logique du lecteur.
- Éviter les transitions administratives et les annonces vides : « dans cet
  article, nous allons voir », « il est essentiel de », « de nos jours »,
  « plongeons dans », « comme nous l'avons vu » ou « en conclusion » quand
  elles n'ajoutent aucune information.
- Donner de la présence au texte avec des situations, objections et détails
  métier vérifiables. Ne pas fabriquer d'anecdote pour rendre un passage
  vivant.
- Relire les transitions après chaque correction : les doublons et
  contradictions apparaissent souvent entre deux passes.

### 9.3 Les cinq tests anti-formatage

Ils sont bloquants pour obtenir `Style = 2` dans la scorecard :

1. **Substitution.** Si changer le sujet dans l'ouverture laisse un texte
   encore valable, elle est trop générique.
2. **Squelette.** Lire seulement H1, ouverture, H2, encadrés et CTA : ils
   doivent raconter une progression propre à ce problème.
3. **Lecture orale.** Lire l'ouverture et les transitions à voix haute ;
   couper les phrases artificielles, répétitives ou imprononçables.
4. **Point d'ennui.** Identifier l'endroit où un dirigeant commencerait à
   survoler ; raccourcir, déplacer, démontrer ou supprimer ce passage.
5. **Sortie.** Le lecteur doit savoir quelle décision ou action devient
   possible, et précisément ce qu'il obtiendra s'il clique.

Au test lecteur du §13, poser au minimum : « Où avez-vous commencé à
survoler ? », « Quelle décision pouvez-vous prendre maintenant ? » et
« Quel passage vous a donné confiance ou vous a paru commercial ? ».

---

## 10. Conversion : aider d'abord, vendre au bon moment

Le guide ne doit pas « pousser au contact ». Il doit réduire assez
d'incertitude pour que le bon lecteur sache si un échange serait utile.

### 10.1 La proposition de valeur dans le corps

Le lecteur doit comprendre, sans publicité répétée :

- pour quels projets Hagnéré Code est pertinent ;
- pour quels projets l'agence n'est pas le bon choix ;
- le résultat concret du premier échange ;
- qui répond, sous quel délai et sans quelle obligation ;
- ce qui différencie la méthode, avec une preuve ou un livrable associé.

### 10.2 Les appels à l'action

Une page possède **un CTA éditorial principal**. Avec la sidebar commerciale
globale actuelle, préférer une seule occurrence dans l'article après une
démonstration suffisante ; une répétition finale n'est acceptable que si la
longueur et la progression la rendent naturelle. Adapter son libellé à
l'intention :

- prix : « cadrer mon budget et mon périmètre » ;
- comparatif : « faire trancher mon cas » ;
- cahier des charges : « faire relire mon périmètre » ;
- migration/incident : « sécuriser le plan avant la bascule ».

Le CTA décrit ce qui se passe après le clic. Il ne crée ni urgence
artificielle ni promesse de résultat invérifiable.

La sidebar `GuideSidebarCTA` et son téléphone sont des accès commerciaux
persistants : ils comptent dans la pression ressentie, ne remplacent pas le
CTA adapté au guide et ne justifient pas d'ajouter d'autres cartes génériques.
Avant publication, vérifier chacune de leurs promesses communes — délai de
réponse, forfait, garantie — dans la source commerciale actuelle. Si une
promesse n'est plus exacte, corriger le composant partagé plutôt que la
contourner dans l'article.

Prévoir aussi une action non commerciale quand elle aide réellement :
copier une checklist, télécharger un modèle, refaire un calcul, vérifier
un contrat ou lire un guide frère. Un téléchargement promis doit exister
et être testé.

### 10.3 Ressource autonome ou simple aimant à contacts ?

Une ressource téléchargeable est pertinente lorsque le lecteur doit
**produire, calculer, comparer, transmettre ou contrôler quelque chose**
après sa lecture. Elle doit lui faire gagner un vrai travail, même s'il ne
contacte jamais Hagnéré Code.

Exemples de ressources utiles :

- cahier des charges éditable avec exemple rempli ;
- comparateur de devis normalisé sur trois ans ;
- calculateur de budget, coût total ou trésorerie avec hypothèses visibles ;
- matrice pour choisir statu quo, SaaS, no-code ou sur-mesure ;
- fichier CSV de correspondance d'URL et checklist de migration SEO ;
- grille de recette avec critères d'acceptation et responsables ;
- inventaire de tâches à automatiser, priorisé par temps, risque et valeur ;
- canevas de MVP séparant hypothèses, indispensable, version ultérieure et
  critère d'abandon.

Un PDF qui résume l'article, une checklist générique sans ordre, un score
opaque qui recommande toujours l'agence ou un fichier non éditable ne sont
pas des ressources suffisantes.

Chaque ressource doit avoir :

1. un objectif et un résultat annoncés avant téléchargement ;
2. un format éditable, et un format de consultation si nécessaire ;
3. un mode d'emploi court et un exemple entièrement rempli ;
4. les hypothèses, sources, limites, version et date de mise à jour ;
5. une sortie partageable avec un associé, une équipe ou un prestataire ;
6. une conclusion possible « ne pas investir maintenant » ;
7. un propriétaire et un événement de revalidation ;
8. un test du fichier, des formules, des liens, de l'impression et de
   l'usage mobile ou bureautique pertinent.

Chaque promesse publique doit correspondre à un élément réellement utilisable
du fichier : rubrique, champ, formule, ligne, colonne ou matrice. Les quantités
annoncées sont comptées dans l'artefact livré, pas déduites de son titre. Pour
une ressource générée, conserver un processus reproductible et un journal de
QA précisant au minimum version, formats, nombre de pages, contrôle visuel,
accessibilité, liens, compatibilité testée et limites connues. Une validation
technique ne doit pas être présentée comme une relecture humaine si celle-ci
n'a pas eu lieu.

L'accès à la valeur principale ne requiert pas d'email par défaut. Une
sauvegarde, l'envoi d'une copie ou une relecture peuvent être proposés après
usage, avec finalité et traitement des données clairement expliqués. Les
données métier sensibles restent localement dans le fichier quand aucun
traitement serveur n'est nécessaire.

Ne jamais annoncer une ressource dans le guide, la metadata ou la FAQ tant
que le fichier ou l'outil n'existe pas et n'a pas été testé.

### 10.4 Cohérence commerciale

- Les offres, délais, garanties, tarifs, coordonnées et zones
  d'intervention sont recopiés depuis leur source actuelle dans le
  repository ou la page service ; la charte ne les fige pas.
- Toute occurrence répétée est recherchée dans le site avant modification
  afin d'éviter les divergences.
- Le verdict éditorial n'est jamais dicté par la marge commerciale.
- Les questions de « bon fit / mauvais fit » sont traitées explicitement.
- Le dossier de travail nomme le service relié, le résultat exact après clic,
  l'URL du CTA et les événements de mesure disponibles : téléchargement,
  clic CTA, démarrage et envoi du formulaire. Ne pas annoncer une mesure qui
  n'est pas réellement instrumentée, et respecter les choix de consentement.

---

## 11. SEO utile et technique

Les règles ci-dessous facilitent la découverte et la compréhension. Elles
ne remplacent ni l'utilité, ni l'autorité, ni les liens externes, ni la
notoriété de l'entreprise.

### 11.1 Contenu et structure

- `title`, H1 et meta description sont uniques, descriptifs et fidèles à
  la page. Les cibles d'environ 50–60 caractères pour le title et
  140–160 pour la description sont des repères d'affichage, pas des lois.
- La réponse principale apparaît tôt. Un résumé, un tableau ou une liste
  peut viser un extrait de résultat, sans sacrifier la nuance.
- Le nombre de H2 découle des questions nécessaires. Aucun minimum ni
  maximum éditorial. Les `id` d'ancres publiés restent stables.
- Aucun nombre de mots imposé. Arrêter quand la décision est couverte sans
  répétition. Ajouter une section seulement si elle répond à une question
  utile absente.
- La FAQ recueille les questions résiduelles qui ne méritent pas une
  section. Elle peut contenir zéro, cinq ou dix questions : jamais douze
  par réflexe. Une réponse importante appartient au corps de l'article.
- Les liens internes sont contextuels, descriptifs et utiles au parcours.
  Chaque page importante reçoit au moins un lien depuis une autre page ;
  il n'existe pas de nombre magique de liens par guide.
- Les liens externes pointent vers les sources originales et indiquent au
  lecteur ce qu'il va y trouver.

### 11.2 Métadonnées et données structurées

- Canonical absolu sur `https://hagnere-code.ai/...`, robots index/follow
  et image OG dédiée.
- `datePublished` est réelle. `dateModified` change seulement après une
  modification substantielle effectivement publiée ; ne jamais simuler
  de fraîcheur.
- `Article` et `BreadcrumbList` suivent la convention du site et reflètent
  exactement le contenu visible.
- `FAQPage` est conditionnel : uniquement pour une FAQ visible et avec un
  miroir exact. Google ne montre plus régulièrement les résultats enrichis
  FAQ aux sites hors santé/gouvernement ; ce balisage n'est donc ni un CTA
  ni un levier de classement garanti.
- Ne jamais coder un `wordCount` approximatif. Le calculer depuis le texte
  final ou omettre la propriété.
- L'auteur visible et le balisage renvoient vers une page qui explique son
  expérience réelle et son rôle.

### 11.3 Mesure après publication

- Vérifier indexation et canonical dans Search Console ; une demande
  d'indexation ou un sitemap traité ne prouvent pas l'indexation.
- Lire les requêtes, impressions, clics, position et pays par URL.
- Utiliser l'analytique du site pour les comportements après arrivée :
  engagement, clics vers le formulaire, démarrages et envois.
- Modifier titre, ouverture, plan ou CTA à partir de données et retours
  humains, pas pour donner artificiellement une date récente.

Références officielles à relire lors d'une évolution majeure :

- [contenu utile, fiable et people-first](https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=fr) ;
- [guide de démarrage SEO](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=fr) ;
- [bonnes pratiques des liens](https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=fr) ;
- [données structurées Article](https://developers.google.com/search/docs/appearance/structured-data/article?hl=fr) ;
- [évolution des résultats enrichis FAQ](https://developers.google.com/search/blog/2023/08/howto-faq-changes?hl=fr) ;
- [expérience de page](https://developers.google.com/search/docs/appearance/page-experience?hl=fr) ;
- [règles anti-spam](https://developers.google.com/search/docs/essentials/spam-policies?hl=fr).

---

## 12. Revue anti-erreurs

Chaque point est bloquant :

1. **Chiffres dupliqués.** Rechercher chaque montant, durée, taux et date ;
   réconcilier corps, tableau, encadré, FAQ, metadata et données structurées.
2. **Arithmétique.** Refaire sommes, ratios, conversions HT/TTC,
   pourcentages annuels/mensuels et bornes de fourchettes.
3. **Périmètre.** Conserver pays, population, période et objet exact de la
   source ; ne pas généraliser au-delà.
4. **Fraîcheur.** Revalider tarifs, lois, calendriers, versions, parts de
   marché et aides à la date de publication.
5. **Absolus.** Remplacer « toujours », « jamais », « aucun » et
   « garanti » si le guide ne les démontre pas dans le périmètre annoncé.
6. **Comparaison honnête.** Même horizon, mêmes fonctions, mêmes volumes,
   mêmes taxes et mêmes coûts de sortie.
7. **Renvois.** Vérifier chaque numéro de section, lien, ancre et promesse
   de ressource.
8. **Terminologie.** Une définition et une fourchette restent stables ;
   bannir les synonymes qui changent le périmètre.
9. **Exemples.** Même personnage, contexte, chiffres et décision ;
   étiquette « réel » ou « illustratif » exacte.
10. **Répétitions.** Une démonstration vit à un endroit canonique ; les
    autres sections y renvoient au lieu de la répéter.
11. **Résidus d'édition.** Relire le paragraphe complet et ses transitions,
    pas seulement le diff.
12. **Offre et coordonnées.** Comparer chaque fait commercial à sa source
    actuelle avant livraison.

---

## 13. Scorecard de publication

Noter chaque axe de 0 à 2 :

- `0` : absent, trompeur ou inutilisable ;
- `1` : présent mais incomplet, générique ou difficile à appliquer ;
- `2` : précis, prouvé et directement utilisable.

| Axe         | Question de contrôle                                                   |
| ----------- | ---------------------------------------------------------------------- |
| Intention   | La page répond-elle immédiatement à la vraie question ?                |
| Décision    | Le lecteur sait-il choisir, renoncer ou agir ?                         |
| Pédagogie   | Un non-technicien comprend-il sans seconde recherche ?                 |
| Profondeur  | Les conséquences, alternatives et coûts cachés sont-ils couverts ?     |
| Preuve      | Les affirmations importantes sont-elles traçables et bien qualifiées ? |
| Comparaison | Les options sont-elles jugées à conditions égales ?                    |
| Originalité | Existe-t-il un artefact, calcul ou cadre difficile à remplacer ?       |
| Style       | Le texte est-il naturel, précis, sans voix industrielle ni survente ?  |
| Conversion  | Le bon lecteur comprend-il le prochain pas et le mauvais fit ?         |
| SEO/produit | Structure, liens, metadata, accessibilité et rendu sont-ils propres ?  |

**Seuil de publication : 17/20**, aucune note à 0, et `Intention`,
`Pédagogie`, `Preuve` et `Décision` obligatoirement à 2.

La note doit être accompagnée d'une phrase de preuve par axe. Une note
sans justification n'est pas un audit. Une contre-relecture par un agent
indépendant peut vérifier logique, sources, calculs et clarté ; elle ne doit
jamais être présentée comme l'avis d'une personne réelle.

Faire ensuite relire le guide final par au moins un lecteur humain non
technique qui n'a pas participé à la rédaction. Lui demander ce qu'il a
compris, la décision qu'il prendrait, le passage où il a commencé à survoler,
ce qui lui semble flou ou commercial et l'action qu'il ferait ensuite. Si
aucun humain n'est disponible, le statut maximal est « prêt pour revue
humaine » : l'agent le signale au lieu d'inventer un panel ou une validation.

### Statuts autorisés

| Statut                  | Signification exacte                                                        |
| ----------------------- | --------------------------------------------------------------------------- |
| Brouillon               | Recherche ou rédaction incomplète                                           |
| Faits vérifiés          | Fiche de preuves réconciliée, rédaction encore révisable                    |
| Prêt pour contre-audit  | Brouillon complet soumis à une revue indépendante                           |
| Prêt techniquement      | Score et batterie locale passés, hors validation humaine                    |
| Prêt pour revue humaine | Aucun blocage connu, agrément humain restant                                |
| Publiable               | Seuil, contre-audit, test humain et contrôles locaux passés                 |
| Publié                  | URL de production vérifiée ; cela ne signifie pas indexée                   |
| Indexé                  | État confirmé pour l'URL, distinct du sitemap et de la demande d'indexation |

---

## 14. Batterie technique et visuelle

### 14.1 Dans le code

- entrée exacte dans `src/lib/guides.ts` ;
- dates, titre, descriptions, H1, canonical et image OG cohérents ;
- données structurées parsables et identiques au contenu visible ;
- FAQ visible dans le DOM si elle existe ;
- liens internes et externes valides ;
- sitemap et hub à jour ;
- si la FAQ est absente : tableau vide, aucune section vide et aucun JSON-LD
  `FAQPage` ;
- image `opengraph-image.tsx` dédiée selon la convention du projet, puis
  vérification de son URL et de la balise sociale rendue ;
- le temps de lecture utilise la convention interne : mots visibles du corps,
  listes, tableaux et FAQ divisés par 200, arrondis à la minute la plus proche ;
  exclure code, metadata et JSON-LD ;
- prix français sous la forme `15 000 € HT`, fourchette `15 000 à 20 000 €
HT`, et date lisible `19 juillet 2026` ;
- `datePublished` correspond à la première publication réelle ; pour un guide
  neuf, fixer la date de mise en ligne prévue puis la réconcilier au
  déploiement ; `dateModified` ne change que pour une évolution substantielle
  effectivement publiée ;
- accessibilité éditoriale : ordre H2/H3 logique, intitulés de liens
  explicites, en-têtes de tableaux, information non portée par la couleur,
  alternatives d'images et documents téléchargeables utilisables au clavier.

Commandes minimales depuis la racine, en adaptant le slug et les fichiers
réellement présents :

```bash
git diff --check
npx eslint src/app/guides/<slug>/page.tsx src/app/guides/<slug>/opengraph-image.tsx src/lib/guides.ts
npx tsc --noEmit
npm test
npm run build
```

Une commande en échec n'est ni masquée ni déclarée réussie. Examiner aussi le
diff final pour séparer les modifications du guide des changements sans
rapport.

### 14.2 Dans un vrai navigateur

Vérifier au minimum :

- hero, auteur, date et promesse ;
- sommaire et ancres ;
- tableaux, formules et encadrés sur petit écran ;
- CTA et ressource promise ;
- FAQ au clavier, ordre de tabulation et focus visible ;
- absence de débordement horizontal, d'overlay et d'erreur console.

Avant livraison, contrôler le rendu réel à `320`, `360`, `390`, `430`, `640`,
`768`, `1024`, `1280`, `1440` et `1600` px. Vérifier la largeur de contenu
réellement disponible après la sidebar, pas seulement celle de la fenêtre.
Contrôler hero, sommaire, tableaux, cartes, filtres éventuels, formulaire ou
dialogue de ressource, états de chargement/vide/erreur lorsqu'ils existent,
ainsi que les téléchargements et l'impression utiles. Un DOM correct ou une
URL qui répond ne remplace pas l'observation de la page rendue.

### 14.3 En production

Après publication : URL 200, canonical, robots, image OG, données
structurées, liens, sitemap, rendu mobile/ordinateur et absence d'erreurs.
Ne déclarer la publication ou l'indexation terminée qu'après preuve de
l'état correspondant.

---

## 15. Contraintes de maintenance

- Pour une refonte, préserver les `id` d'ancres publiés. Ne retirer une
  question, un chiffre ou un lien porteur d'intention qu'avec une raison
  documentée.
- Mettre à jour les contenus volatils selon leur date de fraîcheur, pas
  selon un calendrier cosmétique.
- Une correction typographique, un lien réparé ou une reformulation sans
  effet sur la réponse est mineure. Une nouvelle source, un changement de
  verdict, de prix, de tableau, de structure, de ressource ou de périmètre est
  substantiel et justifie une nouvelle `dateModified` après publication.
- Réconcilier les chiffres du guide avec les pages service et tarif avant
  chaque modification substantielle.
- Conserver la fiche de preuves ou un document de recherche dans
  `docs/research/` lorsque le sujet comporte des données volatiles,
  juridiques ou difficiles à retrouver.
- Commits scopés : guide, registre, ressource, maillage et instruction
  directement liés. Ne pas mélanger des changements sans rapport.

La charte évolue à partir de défauts observés dans des guides réels, de
retours lecteurs et de données Search Console/conversion. Toute nouvelle
règle doit corriger un risque précis ; aucune règle n'est ajoutée pour
donner une impression de rigueur.
