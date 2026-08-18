# Audit approfondi — `creer-un-site-avec-ia`

Date : **24 juillet 2026**

Auditeur : orchestrateur du giga-audit, avec contrôle indépendant du contenu,
des sources, des calculs, de la concurrence internationale et du rendu public.

Périmètre : guide, image sociale, entrée du registre, ancien manifeste de lot,
sources officielles et études citées, concurrence française, américaine,
britannique, australienne et allemande, pédagogie pour dirigeant, décision
économique, conversion et contrôles techniques observables.

Limite : les prix changent selon la date, la localisation, la durée et les
options. Ce rapport ne constitue ni un conseil juridique, ni un test de toutes
les plateformes, ni une preuve de position Google. Les concurrents servent à
mesurer la couverture éditoriale, jamais à établir un fait.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant, commerçant ou indépendant qui se demande s'il peut
                créer un site professionnel avec une IA sans payer une agence.
Question réelle : quel résultat puis-je obtenir seul, combien me coûteront
                  réellement mon temps, l'abonnement et la reprise, et à quel
                  moment un accompagnement devient-il plus rentable ?
Décision attendue : utiliser un générateur, produire un prototype, améliorer
                   le site existant, choisir une plateforme spécialisée,
                   demander un accompagnement ou reporter.
Réponse actuelle : l'IA peut suffire pour une présence simple ou un test ; elle
                   ne remplace ni le message, ni les contrôles, ni la personne
                   responsable du site après sa mise en ligne.
Défaut qui coûte le plus de valeur : la section intitulée « coût réel sur
                   3 ans » ne compare pas les options au même résultat et ne
                   chiffre que deux abonnements génériques ; le lecteur ne
                   connaît donc ni le coût de son temps, ni le seuil qui
                   justifierait les 6 900 € d'un accompagnement.
Niveau actuel : B
Priorité : haute
Statut : audité ; aucune correction du guide réalisée dans cette passe
P0 : 0 ; P1 : 9 ; P2 : 8
Score : 80/100
Verdict : NO-GO au seuil renforcé de 90/100
```

Le guide a déjà une qualité rare sur cette requête : il ne diabolise pas les
générateurs, accepte qu'une solution à quelques euros soit la bonne, propose de
conserver le site existant et déclare explicitement que Hagnéré Code vend du
sur-mesure. L'introduction parle à un dirigeant, les trois familles d'outils
sont distinguées, le prix promotionnel Hostinger est daté, les limites des
études GitHub, METR, Veracode et Ahrefs sont dites, et la position Google sur le
contenu généré est correctement résumée.

La page ne remplit cependant pas encore sa promesse de comparaison. Un
générateur à 10–30 €/mois est opposé à une création Hagnéré à partir de
6 900 €, sans compter le même nombre de pages, les mêmes textes, le même
formulaire, les mêmes mesures, le même niveau d'accessibilité, le temps du
dirigeant, les retouches, la maintenance ou la sortie. Lovable, Bolt et v0 sont
rangés principalement du côté du prototype alors que leurs offres et conditions
évoluent vers l'exploitation de sites et d'applications. Le conseil prudent
reste défendable, mais l'étiquette doit être remplacée par des preuves de
production à exiger.

### Score avant correction

| Axe | Note /10 | Preuve localisable | Manque décisif |
| --- | ---: | --- | --- |
| Intention | 9 | question humaine et quatre choix dès `page.tsx:230-244` | « meilleure IA » et « créer seul ou déléguer » ne débouchent pas sur un test comparatif. |
| Décision | 8 | tableaux situation/choix et verdict par profil `:319-347`, `:690-724` | aucun seuil économique, score ou épreuve éliminatoire ne produit la décision. |
| Pédagogie | 9 | familles traduites, exemples et réserves compréhensibles | la partie assistants de développement détourne un peu le lecteur non technique de son site. |
| Profondeur | 7 | SEO, sécurité, sortie, droits, RGPD et maintenance présents | données envoyées à l'IA, accessibilité, exploitation, restauration et contenu de marque restent peu opératoires. |
| Preuve | 8 | sources officielles produits/Google/droit et études contradictoires | aucun test propre des outils, aucun dossier P1 dédié et conditions produit très volatiles. |
| Comparaison | 5 | cinq options et un tableau à trois ans `:571-612` | fonctions, temps, niveau de service, horizon et sortie ne sont pas égalisés. |
| Originalité | 8 | conserver l'existant, conflit déclaré, étude favorable et défavorable | pas d'artefact observable ni de cas où une variable renverse le verdict. |
| Style | 9 | plume humaine, prudente, directe et non anxiogène | quelques termes et marques s'accumulent sans action immédiate pour le dirigeant. |
| Conversion | 8 | CTA proportionné et possibilité de recommander un générateur | livrable, délai, prix et preuve de la comparaison proposée ne sont pas définis. |
| SEO/produit | 9 | route publique, canonical, index/follow, OG, Article/Breadcrumb, H1 et responsive observés | pas de dossier P1 propre, pas de manifeste complet ni de BAT clavier/full-page rattaché au snapshot. |
| **Total** | **80/100** | **Somme contrôlée** | **Sous 90 ; comparaison à 5 et neuf P1 ouverts.** |

## 2. Snapshot et preuves reproductibles

| Élément | Observation au 24/07/2026 |
| --- | --- |
| Page | `src/app/guides/creer-un-site-avec-ia/page.tsx` — 848 lignes, 4 009 mots source |
| SHA-256 page | `07a28db017339ddf779467b3bde44f462ddf2744ac5f5b18b63a9425141240fe` |
| Image sociale | `src/app/guides/creer-un-site-avec-ia/opengraph-image.tsx` — 101 lignes |
| SHA-256 image | `c363ea205aa05487400e9b97f463e8b2e6f717fa4fe3cecb713b2110dbfe04ca` |
| Registre courant | `src/lib/guides.ts`, SHA-256 `8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09` |
| Entrée registre | publié le 18/07/2026, modifié le 21/07/2026, lecture annoncée 13 min |
| Dossier P1 dédié | aucun `docs/research/creer-un-site-avec-ia.md` |
| Manifeste | page présente dans `lot-trois-guides-final.sha256`, sans dossier P1 ni image sociale propres au slug ; le hash ancien du registre diffère du registre courant |
| Ancien audit de plume | `audit-pedagogie-humaine-43-guides-2026-07-21.md` classait la page P1 pour jargon et orientation anxiogène ; le snapshot actuel est nettement plus humain, mais la porte ne peut pas être auto-validée |

### Rendu public contrôlé

URL : `https://hagnere-code.ai/guides/creer-un-site-avec-ia`

```text
HTTP/navigation visible : page chargée
Title : Créer un site avec l'IA en 2026 · Hagnéré Code
Canonical : https://hagnere-code.ai/guides/creer-un-site-avec-ia
Robots : index, follow
OG image : route file-based présente dans le head
H1 : 1
H2 : 13
JSON-LD : Article + BreadcrumbList
Texte visible dans main : 3 018 mots
Tables : 3
Console : aucune erreur ou alerte observée pendant le contrôle
Largeurs automatisées : 320, 360, 390, 430, 768, 1024, 1440 et 1600 px
Débordement horizontal stable : aucun sur document/main après stabilisation
```

Ces observations prouvent le rendu public vu le 24 juillet, pas l'identité
cryptographique entre le déploiement et le fichier local. Elles ne remplacent
pas un BAT complet au clavier, une inspection visuelle de chaque tableau, un
build de release, la Search Console ou une mesure de conversion.

Les onze liens externes écrits dans la page ont répondu en HTTP 200 lors du
contrôle automatisé, sauf Légifrance en HTTP 403 pour le client en ligne de
commande ; la page Légifrance reste accessible par navigation web. Un 403
anti-robot n'est donc pas classé comme lien cassé.

## 3. Ce que le guide apporte déjà au dirigeant

### Une réponse humaine avant la technologie

L'ouverture répond sans détour : oui, une IA peut publier une présence simple,
mais elle ne choisit pas l'offre, les textes, les données à protéger ou la
maintenance. Elle introduit aussi deux décisions souvent omises par les
comparatifs affiliés : **améliorer l'existant** et **ne pas reconstruire**.

Cette position est commercialement courageuse et pédagogiquement juste. Elle
évite deux mensonges symétriques :

- « l'IA remplace toujours une agence » ;
- « un site bon marché ne peut jamais être professionnel ».

### Une taxonomie utile

Le guide distingue :

1. le générateur hébergé et visuel ;
2. l'outil qui génère du code ou une application ;
3. l'assistant utilisé par un développeur.

Cette distinction protège un lecteur qui comparerait autrement un abonnement
Wix, des crédits Lovable et une prestation Hagnéré comme trois produits
substituables. La page ajoute Shopify pour un catalogue standard et rappelle
qu'une plateforme spécialisée peut être préférable au sur-mesure.

### Des sources plutôt bien bornées

- Hostinger est cité avec sa promotion, l'engagement long et le
  renouvellement plus élevé.
- Wix est cité pour la variation géographique des prix et l'impossibilité
  d'exporter un site complet afin de le faire fonctionner ailleurs.
- Lovable est cité pour les crédits et la propriété annoncée du code, avec la
  réserve sur les droits de tiers.
- GitHub et METR sont opposés au lieu de transformer un résultat isolé en
  promesse de productivité.
- Veracode est présenté comme un vendeur de sécurité et non comme la fréquence
  universelle des failles d'un site IA.
- Ahrefs est présenté comme une étude observationnelle.
- Google est correctement résumé : l'outil de production n'est pas le critère
  central, tandis que la création massive sans valeur peut relever du spam.

### Une conversion plus loyale que la moyenne

Le conflit commercial est explicite : Hagnéré Code vend du sur-mesure. Le CTA
accepte de conclure qu'un générateur ou le maintien de l'existant est la bonne
voie. Cette transparence doit rester après réécriture.

## 4. Faits actuels et niveau de confiance

| Affirmation du guide | Verdict au 24/07/2026 | Preuve et limite |
| --- | --- | --- |
| Hostinger à partir de 2,99 €/mois | confirmée à la date du contrôle | page officielle : 48 mois payés d'avance, 143,52 €, renouvellement affiché 9,99 €/mois pour Premium ; offre volatile |
| les prix Wix varient selon la localisation | confirmée | page officielle Wix ; prix final au paiement |
| un site Wix complet ne s'exporte pas pour fonctionner ailleurs | confirmée dans la documentation Wix | certains contenus, données et domaine peuvent être récupérables ; la reconstruction de l'expérience reste à prévoir |
| Lovable facture abonnement/crédits et annonce que le client possède son code | confirmée sur la page officielle | le coût d'un crédit varie par plan et complexité ; droits de tiers et conditions restent applicables |
| GitHub a mesuré une tâche 55 % plus rapide | confirmé dans une étude de l'éditeur | tâche contrôlée, résultat non transposable à un site entier |
| METR a mesuré des développeurs expérimentés 19 % plus lents | confirmé dans l'étude 2025 | projets open source familiers, outils et période propres ; pas un tarif d'agence |
| Veracode a observé des défauts dans 45 % des tests | confirmé dans le rapport vendeur | plus de cent modèles et plusieurs langages ; ne mesure pas la proportion de sites en production vulnérables |
| Google ne pénalise pas un contenu uniquement parce qu'il est généré par IA | confirmé dans sa documentation | qualité, exactitude, pertinence et spam à grande échelle restent déterminants |
| L.131-3 encadre la précision d'une cession de droits | confirmé dans le principe | ne suffit pas à conclure à la propriété de tous les composants ; conseil juridique individualisé hors guide |
| « Lovable, Bolt ou v0 servent surtout à produire un prototype » | trop général | ces produits proposent aussi déploiement, hébergement ou code exploitable ; la bonne formulation porte sur les preuves de production, pas l'étiquette de l'outil |

### Évolution produit qui doit entrer dans la réécriture

Les conditions Lovable affichées le 24 juillet portent une version du
16 juin 2026 avec une date d'effet annoncée au 15 août 2026. Elles prévoient
notamment :

- une consommation de crédits variable, y compris pour l'hébergement et les
  fonctions IA intégrées ;
- des dépendances à des fournisseurs d'infrastructure et de modèles ;
- l'absence de garantie qu'une sortie IA soit unique, exacte ou exempte de
  droits de tiers ;
- des obligations particulières pour les données sensibles ;
- une licence d'utilisation des données client avec possibilité d'opposition
  prospective à certains usages d'entraînement, dans cette version.

Le guide ne doit pas transformer ces clauses futures en règles déjà en vigueur.
Il doit en tirer une méthode durable : **lire les conditions effectives au jour
de la décision, le DPA, les sous-traitants, la région des données, les options
d'entraînement, les limites d'usage et la procédure de sortie**.

## 5. Benchmark international de couverture

### France

Les guides Tensoria et WebEngine traitent la vitesse, les outils, la
performance, le SEO et les limites d'un résultat générique. Ils contiennent
aussi des affirmations commerciales ou des chiffres peu démontrés. Le guide
Hagnéré est plus prudent sur les sources et plus honnête sur son intérêt
commercial. Il est moins concret sur un test instrumenté de plusieurs outils.

### États-Unis

Layer 3 Labs compare six familles dans un tableau fonctionnel et distingue site
vitrine, design, boutique et application. Playcode tente un coût annuel minimum
sur un cahier des charges commun. Ces pages apportent :

- une matrice outil par outil ;
- le plan minimal réellement publiable ;
- domaine, hébergement, marque de la plateforme et crédits ;
- le plafond de chaque famille.

Leurs prix et jugements restent commerciaux. Hagnéré doit reprendre la méthode,
pas leurs verdicts.

### Royaume-Uni

TechRadar documente une méthodologie de tests, compare fonctions et prix, date
la vérification tarifaire et dit que le contenu généré exige une forte reprise
humaine. Sa force est la preuve d'usage ; sa faiblesse est le modèle
d'affiliation et une lecture centrée produit.

Hagnéré possède une meilleure décision « garder/améliorer/construire », mais
aucun protocole de test propre ne prouve encore la qualité des sorties.

### Australie

WeAuto construit un duel coût affiché/coût complet et valorise le temps du
dirigeant. Même si plusieurs données de sa page demandent une vérification
primaire, l'angle est décisif : un abonnement à 99 AUD n'est pas le coût d'un
site si le dirigeant passe quarante heures à apprendre, rédiger et réparer.

Cet angle manque au guide Hagnéré et doit devenir son fil rouge économique.

### Allemagne / DACH

Wepp compare agence, freelance, constructeur et outil IA en ajoutant un coût du
temps. La page emploie des hypothèses et des sources commerciales qui ne
doivent pas être importées telles quelles. Elle montre néanmoins ce qu'un
lecteur attend : **année 1, temps interne, coût implicite et total**.

### Conclusion du benchmark

Le guide Hagnéré est déjà plus loyal que beaucoup de pages de vente et plus
humain que les tableaux d'affiliation. Pour devenir plus utile que les meilleurs
guides internationaux, il doit combiner :

- sa décision par objectif ;
- un test reproductible de sorties ;
- un scénario économique à périmètre égal ;
- la valeur du temps du dirigeant ;
- les preuves de données, propriété, maintenance et sortie ;
- une opinion conditionnelle qui dit exactement quand le verdict change.

## 6. Angles manquants et océans bleus

| Question que le dirigeant devrait pouvoir trancher | Réponse actuelle | Manque | Apport différenciant |
| --- | --- | --- | --- |
| Puis-je publier seul cette semaine ? | oui pour une présence simple | aucun test de bout en bout | chronométrer domaine, 5 pages, formulaire, mobile, mentions, mesure et sauvegarde |
| Quel outil donne le meilleur résultat pour mon besoin ? | familles et marques | pas de protocole commun | même brief, mêmes fonctions, mêmes données, grille aveugle et captures datées |
| Combien coûte vraiment l'option IA ? | 10–100 €/mois sur 36 mois | temps, contenu, options, contrôle et sortie exclus | TCO 12/36/60 avec temps du dirigeant et valeur de bascule |
| À partir de quand l'accompagnement vaut-il 6 900 € ? | jamais calculé | marge, leads et temps manquent | nombre de ventes supplémentaires ou heures mensuelles nécessaires pour égaliser |
| Puis-je reprendre le site ailleurs demain ? | export évoqué | code seul confondu avec système exploitable | test dépôt + build + variables + données + domaine + sauvegarde + restauration |
| Puis-je envoyer mes fichiers et données à l'IA ? | RGPD général | secrets, données clients, DPA, région et entraînement absents | feu vert/orange/rouge des données autorisées dans le prompt |
| Le site sera-t-il accessible et utilisable ? | non traité | clavier, contraste, formulaires, erreurs, obligations | contrôle WCAG et portée de l'accessibilité européenne depuis le 28/06/2025 |
| Les textes et images sont-ils utilisables ? | faits à vérifier | marque, portrait, licence, imitation et disclosure | registre provenance/licence/validation de chaque actif généré |
| Qui intervient après la mise en ligne ? | désigner une personne | pas de calendrier ni niveau de service | fiche J0/J7/J30/J90, propriétaires, alerte et restauration |
| Dois-je garder l'existant ? | oui, option honnête | aucun coût de correction comparé | même brief : corriger, générer, plateforme, accompagner |

## 7. Cas économique à construire

### Périmètre commun obligatoire

Le prochain guide doit figer un cas, par exemple :

```text
Entreprise : prestataire B2B local
Objectif : obtenir des demandes qualifiées
Livrables : 5 pages, domaine propre, 10 blocs de texte, 20 images vérifiées,
            formulaire testé, e-mail de confirmation, mesure consentie,
            connexion CRM simple, mobile, accessibilité de base, sauvegarde,
            propriétaire des comptes et dossier de sortie
Horizon : 12, 36 et 60 mois
Options : améliorer l'existant / générateur IA / code généré accompagné /
          création professionnelle
```

Sans ce dénominateur, 2,99 €/mois et 6 900 € ne sont pas deux prix du même
résultat.

### Formule de coût complet

```text
TCO(H) =
  création, abonnement et crédits sur H mois
+ domaine, messagerie, applications, mesure et consentement
+ textes, photos, traduction et vérification des droits
+ temps interne de préparation, retouche, validation et maintenance
+ contrôle accessibilité, sécurité, performance et formulaire
+ incidents, sauvegarde, restauration et support
+ coût de sortie ou de reconstruction

Valeur attribuable(H) =
  marge des demandes supplémentaires réellement attribuables
+ dépenses réellement évitées
+ valeur du temps réellement réaffecté

Décision =
  valeur attribuable prudente - TCO - réserve de risque
```

### Exemple illustratif à recalculer en P2

Les valeurs suivantes ne sont ni des prix de marché, ni une offre. Elles
montrent le type de comparaison attendu.

Hypothèses :

- temps interne valorisé 45 €/h ;
- générateur : 25 €/mois, 45 h de création, 2 h/mois d'entretien, contrôle
  externe ponctuel 800 €, réserve de sortie 1 500 € à 60 mois ;
- création accompagnée : 6 900 €, 90 €/mois de services récurrents, 15 h de
  préparation puis 0,75 h/mois, réserve de sortie 500 € à 60 mois ;
- mêmes cinq pages et mêmes contrôles attendus.

| Horizon | Générateur IA | Création accompagnée | Écart à justifier par un meilleur résultat |
| --- | ---: | ---: | ---: |
| 12 mois | 300 + 3 105 + 800 = **4 205 €** | 6 900 + 1 080 + 1 080 = **9 060 €** | 4 855 € |
| 36 mois | 900 + 5 265 + 800 = **6 965 €** | 6 900 + 3 240 + 1 890 = **12 030 €** | 5 065 € |
| 60 mois | 1 500 + 7 425 + 800 + 1 500 = **11 225 €** | 6 900 + 5 400 + 2 700 + 500 = **15 500 €** | 4 275 € |

Contrôles :

```text
Générateur H36 :
  temps = (45 + 2 × 36) × 45 = 117 × 45 = 5 265 €
  total = 25 × 36 + 5 265 + 800 = 6 965 €

Accompagné H36 :
  temps = (15 + 0,75 × 36) × 45 = 42 × 45 = 1 890 €
  total = 6 900 + 90 × 36 + 1 890 = 12 030 €
```

Dans ce scénario, le générateur reste moins cher. L'accompagnement ne devient
économiquement préférable que s'il produit au moins 5 065 € de valeur
supplémentaire à 36 mois, réduit un risque comparable ou économise davantage de
temps. Avec 1 200 € de marge par vente attribuable, cela représente cinq ventes
supplémentaires sur trois ans, car `5 × 1 200 = 6 000 €`.

Sensibilité utile : si le générateur demande non pas 2 h mais environ
5,13 h/mois d'entretien, son TCO rejoint celui de l'accompagnement dans ce cas.

```text
heures supplémentaires au point d'égalité
  = 5 065 / (36 × 45)
  = 3,126 h/mois

temps mensuel total au point d'égalité
  = 2 + 3,126
  ≈ 5,13 h/mois
```

Cette démonstration a plus de valeur qu'un verdict universel. Une réécriture
doit proposer au lecteur de remplacer chaque hypothèse et montrer un cas où le
générateur gagne, un cas où l'accompagnement gagne et un cas où garder
l'existant gagne.

## 8. Test produit reproductible à ajouter

Le meilleur guide ne doit pas seulement commenter les pages tarifaires. Il doit
publier un protocole maintenable :

1. utiliser exactement le même brief sur trois outils représentatifs ;
2. chronométrer création, corrections et mise en ligne ;
3. ne jamais utiliser de données réelles ou confidentielles pendant le test ;
4. relever le plan nécessaire, les crédits, la durée et le renouvellement ;
5. tester domaine, formulaire, e-mail, mobile, clavier, contraste et erreurs ;
6. mesurer performance et indexabilité sans promettre une position ;
7. vérifier export du contenu, dépôt, build, variables, base et restauration ;
8. consigner chaque intervention humaine nécessaire ;
9. faire noter les textes par un dirigeant et un prospect sans leur dire
   l'outil utilisé ;
10. publier captures, date, limites et possibilité de reproduire le test.

Les résultats doivent rester des observations sur une version datée, jamais un
classement éternel.

## 9. Plan de réécriture localisable

| Ordre | Section actuelle | Correction | Décision produite |
| ---: | --- | --- | --- |
| 1 | Hero et lead `:167-244` | conserver la réponse humaine ; annoncer le cas commun, le coût du temps et le test | le lecteur sait ce qu'il saura décider |
| 2 | Réponse rapide `:290-359` | remplacer la juxtaposition 2,99/6 900 par quatre options au même objectif | première option à examiner |
| 3 | Familles `:361-389` | condenser et distinguer site vitrine, boutique et application | ne plus comparer des catégories différentes |
| 4 | Générateurs `:391-415` | tableau fonctionnel, plan minimum, renouvellement et test de sortie | outil acceptable ou éliminé |
| 5 | Code généré `:417-454` | remplacer « prototype » par preuves de production et données autorisées | tester, mettre en production sous conditions ou refuser |
| 6 | Assistants `:456-484` | réduire à un encadré ; garder GitHub/METR comme objection à toute promesse de gain | ne pas payer sur un pourcentage marketing |
| 7 | Google `:486-529` | intégrer la guidance générative actuelle, exactitude, métadonnées et disclosure | protocole de publication des contenus |
| 8 | Risques `:531-569` | ajouter données/secrets, droits des actifs, accessibilité, restauration et incidents | checklist éliminatoire |
| 9 | Coût réel `:571-633` | cas égalisé, TCO 12/36/60, payback, sensibilité et contrôle inverse | choix économique reproductible |
| 10 | Profils `:635-733` | faire suivre chaque profil par prochaine action, preuve et date de revue | plan concret sans achat automatique |
| 11 | CTA `:736-744` | afficher livrable, délai, prix ou gratuité, exemple et possibilité de refus | conversion professionnelle et vérifiable |
| 12 | Sources `:746-843` | URLs, date, version, champ, conflit et registre de fraîcheur | maintenance factuelle |

### Contrat des 150 premiers mots

La prochaine version peut ouvrir ainsi :

> Vous voulez savoir si l'IA peut créer le site de votre entreprise pour
> quelques euros par mois, ou si payer un professionnel vous évitera une
> fausse économie. La réponse dépend moins du mot « IA » que du rôle du site.
> Pour une présence simple ou un test, un générateur peut suffire. Pour un site
> qui doit recevoir des demandes, vendre ou se connecter à vos outils, il faut
> comparer le même résultat : pages, textes, formulaire, données, maintenance
> et possibilité de partir. Dans ce guide, nous allons tester ces options,
> calculer votre coût sur un, trois et cinq ans — y compris votre temps — puis
> montrer le seuil à partir duquel un accompagnement devient rationnel. Garder
> et améliorer votre site actuel fait partie des choix.

## 10. P0/P1/P2 explicites

### P0 — 0

Aucun fait faux décisif, calcul trompeur irréparable ou risque juridique majeur
n'a été confirmé dans le snapshot. Ce verdict n'autorise pas la validation :
neuf P1 restent ouverts.

### P1 — 9

| ID | Défaut bloquant | Risque lecteur | Correction et revalidation |
| --- | --- | --- | --- |
| P1-01 | aucun dossier P1 propre au slug ni benchmark maintenable | la recherche, les exclusions et la saturation ne sont pas reproductibles | créer dossier, matrice internationale, sources primaires, dates et contradiction ; autre agent revalide |
| P1-02 | « coût réel sur 3 ans » incomplet | deux abonnements semblent comparables à des options dont le coût reste vide | TCO 12/36/60 avec toutes les lignes et contrôles |
| P1-03 | options comparées sans fonctions ni service égaux | 2,99 €/mois et 6 900 € paraissent deux prix du même site | figer pages, contenu, formulaire, données, qualité, maintenance et sortie |
| P1-04 | temps interne, valeur, payback et sensibilité absents | le dirigeant ne sait pas si l'économie affichée est réelle | valoriser son temps et calculer les seuils qui renversent le choix |
| P1-05 | aucun test propre et reproductible des outils | le guide dépend des affirmations des vendeurs et d'études éloignées | exécuter le même brief, publier preuves, limites et version |
| P1-06 | données, secrets, DPA, région, entraînement et sous-traitants non opérationnels | un prototype peut recevoir des données qu'il ne devrait pas traiter | feu tricolore des données et revue des conditions effectives |
| P1-07 | code, projet et sortie ne sont pas testés comme un système | « posséder le code » peut masquer base, clés, domaine ou build inutilisable | exercice de dépôt, build, export, restauration et reprise |
| P1-08 | outils de code présentés surtout comme prototypes | le lecteur peut écarter ou accepter un outil sur une étiquette devenue instable | décider sur preuves de production, responsabilités et SLA, pas sur le nom |
| P1-09 | CTA sans livrable, délai, prix ni exemple | la promesse de choisir la voie proportionnée n'est pas observable | montrer la grille remise, les limites, le délai et la condition de refus |

### P2 — 8

| ID | Amélioration | Revalidation |
| --- | --- | --- |
| P2-01 | mettre à jour la section Google avec la guidance actuelle sur contenu génératif, exactitude, métadonnées et disclosure | rouvrir Google Search Central et dater |
| P2-02 | ajouter l'accessibilité, notamment la portée des règles applicables à certains services depuis le 28/06/2025 | source DGCCRF/Légifrance et réserve selon taille/service |
| P2-03 | traiter provenance des images/textes, marque, portrait, licences et validation humaine | registre d'actifs et relecture juridique générale |
| P2-04 | raccourcir la partie assistants de développeur pour préserver le parcours dirigeant | test de compréhension sans jargon |
| P2-05 | afficher devise, TVA, durée, paiement initial et renouvellement pour chaque prix conservé | recontrôle pages officielles le jour de publication |
| P2-06 | ajouter une checklist ou feuille TCO réellement téléchargeable et maintenue | test du fichier sur trois profils |
| P2-07 | recalculer lecture, dates et registre après réécriture, jamais avant publication réelle | contrôle source, rendu et registre |
| P2-08 | exécuter BAT complet clavier, clair/sombre, cartes mobiles, image sociale, formulaire, build et snapshot de production | preuves rattachées au hash final |

## 11. État des portes P1–P4

| Porte | État au 24/07/2026 | Motif |
| --- | --- | --- |
| P1 — recherche et décision | **REJETÉE / absente** | aucun dossier dédié ; benchmark et test propres au slug non disponibles |
| P2 — rédaction et intégration | **existante, non validée** | page humaine mais neuf P1 empêchent une version de référence |
| P3 — contre-audit indépendant | **rapport présent, porte non validée** | le présent rapport découvre les défauts ; aucun snapshot corrigé n'existe à revalider |
| P4 — plume humaine et QA | **REJETÉE / non validée** | score 80, comparaison à 5, BAT complet et corrections absents |
| Publication | **observée pour l'ancien snapshot** | URL publique chargée, canonical et index/follow vus le 24/07 |
| Indexation/classement | **non prouvés** | aucun contrôle Search Console ni résultat Google rattaché à cette passe |

La publication actuelle ne ferme aucune porte éditoriale. Après P2, un agent
qui n'a pas rédigé devra rouvrir les sources, refaire chaque calcul et exécuter
le test produit. P4 visera au moins 90/100, aucun axe sous 8 et les axes
intention, décision, pédagogie, preuve et comparaison à 9 ou 10.

## 12. Contre-audit exigé après correction

| Contrôle | Preuve attendue |
| --- | --- |
| Sources | URL directe, date, version, champ, biais et capture/archivage autorisé |
| Prix | devise, taxe, paiement, durée, renouvellement, crédits, limites et total |
| Cas commun | toutes les options rendent les mêmes fonctions et le même niveau de service |
| Calculs | TCO 12/36/60 refaits, sensibilité et contrôle inverse |
| Temps | heures initiales et mensuelles mesurées, pas seulement déclarées |
| Produit | brief identique, sorties, erreurs, corrections et captures |
| Données | prompts autorisés, DPA, région, sous-traitants et restauration |
| Sortie | contenu, code, build, variables, base, domaine et remise testés |
| Conversion | CTA, formulaire, délai et livrable observables |
| Technique | tests ciblés, build, HTML, canonical, JSON-LD, liens et OG |
| Visuel | 320–1600 px, cartes/tableaux, clavier, thèmes et console |
| Production | déploiement, sitemap, indexation et conversion déclarés séparément |

## 13. Sources de contrôle

### Sources primaires

- [Hostinger — créateur de sites IA et tarifs](https://www.hostinger.com/fr/createur-de-sites-internet-ia)
- [Wix — tarifs](https://www.wix.com/plans)
- [Wix — export d'un site](https://support.wix.com/en/article/exporting-or-embedding-your-wix-site-elsewhere)
- [Lovable — tarifs, crédits et propriété annoncée](https://lovable.dev/pricing)
- [Lovable — conditions, version du 16/06/2026](https://lovable.dev/terms)
- [Google — utilisation de contenu génératif sur un site](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content)
- [Google — règles anti-spam](https://developers.google.com/search/docs/essentials/spam-policies)
- [CNIL — choisir une solution d'IA générative](https://www.cnil.fr/fr/utiliser-lia-generative-dans-les-tpe-et-pme)
- [DGCCRF — accessibilité des produits et services](https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/professionnels-vos-produits-et-services-doivent-etre-conformes-la-directive-accessibilite)
- [Légifrance — article L.131-3](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958)

### Études à conserver avec leur biais

- [GitHub — expérience Copilot](https://github.blog/news-insights/research/research-quantifying-github-copilots-impact-on-developer-productivity-and-happiness/)
- [METR — essai randomisé sur développeurs expérimentés](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/)
- [Veracode — GenAI Code Security Report 2025](https://www.veracode.com/resources/analyst-reports/2025-genai-code-security-report/)
- [Ahrefs — étude observationnelle sur le contenu IA](https://ahrefs.com/blog/what-percentage-of-new-content-is-ai-generated/)

### Concurrents de couverture, non sources factuelles

- France : Tensoria, WebEngine
- États-Unis : Layer 3 Labs, Playcode
- Royaume-Uni : TechRadar
- Australie : WeAuto
- Allemagne : Wepp

## 14. Conclusion

La page actuelle est claire, équilibrée et plus humaine que la majorité des
comparatifs commerciaux examinés. Elle ne mérite pas d'être réécrite comme un
catalogue technique. Son meilleur actif est sa thèse : **choisir selon le rôle
du site, et accepter qu'un générateur ou l'existant puisse suffire**.

Pour devenir une référence, elle doit désormais prouver ce qu'elle avance :
un même brief testé, un coût complet incluant le temps du dirigeant, des seuils
qui changent le verdict, une procédure de données et de sortie, puis un CTA
observable. Tant que ces neuf P1 restent ouverts, le rapport reste `NO-GO` au
standard renforcé, même si l'ancien snapshot est déjà public et indexable.
