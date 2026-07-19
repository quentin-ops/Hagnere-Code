# Plan de conquête de la sémantique locale — Savoie, Haute-Savoie et limitrophes

> Document de pilotage sur 12 mois. Rédigé le 18/07/2026.
> Convention de lecture : **[VU]** = source ouverte et lue, URL citée. **[À VÉRIFIER]** =
> hypothèse de travail, non confirmée, à valider avant de l'écrire sur une page publique.
> Tout chiffre non marqué **[VU]** ne doit pas sortir de ce document.

---

## 1. La stratégie en une page

### Le raisonnement

Nous partons d'une situation précise : un domaine mis en ligne il y a quelques semaines,
zéro backlink, zéro trafic organique, 23 guides nationaux longs et sourcés, 11 pages
services, une adresse réelle au 82 impasse de Bellevue à Bassens, aux portes de Chambéry, et **aucune référence
client extérieure au groupe Hagnéré** — les quatre études de cas publiées
(`src/components/realisations/cases.ts`) sont LMNP.AI, SCI.AI, Hagnéré Patrimoine et
Hagnéré Investissement.

Trois constats de terrain commandent tout le reste.

**Premier constat : les pages villes hors zone d'ancrage physique ne rankent pas.**
Digital Unicorn publie une page Brest de 4 500 à 9 000 mots réellement différenciée
(structure de H2 divergente, témoignages nominatifs) — elle est absente du top 10 sur
« agence web Brest », alors que les mêmes gabarits classent #4 sur Aix-les-Bains et #8 sur
Chambéry, où l'entreprise est réellement implantée. PappleWeb, avec ses pages Chambéry et
Aix-les-Bains à 2 200 mots dont moins de 2 % de contenu unique, est absent partout. Le
volume de contenu ne compense jamais l'absence d'entité locale. Corollaire direct : **le
nombre de pages n'est pas le levier. Le ratio pages / preuves l'est.**

**Deuxième constat : le pack local est structurellement fermé au-delà du bassin
chambérien.** Google documente trois facteurs de classement local — pertinence, distance,
proéminence. La distance n'est pas optimisable. Chambéry–Annecy et Chambéry–Albertville
font environ 50 km chacun. Aucune fiche Google Business Profile domiciliée à Chambéry ne
prendra durablement le pack local d'Annecy face à des concurrents annéciens correctement
optimisés. La bataille utile en Haute-Savoie et en Tarentaise se joue donc dans les
**résultats organiques localisés**, pas dans la carte — ce qui est cohérent avec un panier
moyen de 6 900 à 120 000 €, qu'on ne vend pas au rayon de trois kilomètres.

**Troisième constat : les défenseurs ne se valent pas.** Sur « agence web Chambéry » et
« agence web Annecy », les défenseurs sont des entreprises réelles de 15 à 28 ans
d'ancienneté avec portfolios nommés — Cappuccino (72 rue Croix d'Or, Chambéry, 8 cas
clients dont VINCI Airports Chambéry et la SFTRF), Here We Com (Saint-Alban-Leysse, 2010),
Kiwi Interactive (1998). Ce front est verrouillé. En revanche, sur les requêtes
« agence Google Ads Chambéry », « référencement naturel Annemasse » ou
« création site internet Saint-Jean-de-Maurienne », les défenseurs sont des **pages
programmatiques d'acteurs hors zone** — Aleo à 290 €/mois, 1789.fr, Blackmoon, et jusqu'à
Brest Web qui vend du SEO local mauriennais depuis le Finistère. Ces adversaires-là n'ont
ni adresse, ni avis, ni cas client. Un contenu local réellement sourcé les bat.

**La conclusion opérationnelle** : 18 à 20 pages locales très profondes, adossées à une
entité unique et déclarée, ordonnées par preuves acquises et non par calendrier, dont la
fonction principale est de **redistribuer vers les pages qui convertissent** l'autorité que
les 23 guides captent.

### Les cinq principes directeurs

**1. Une page = une économie nommable, pas une commune.**
Le critère d'ouverture d'une page n'est ni la population ni le volume de recherche : c'est
la capacité à écrire honnêtement quatre choses — la filière dominante nommée, trois à cinq
entreprises ou institutions réelles, les zones d'activité exactes, et un cas d'usage web ou
logiciel propre à cette économie. Si ces quatre éléments ne peuvent pas être écrits, la
page n'existe pas. C'est ce qui fait qu'on ouvre Cluses (décolletage, Mont-Blanc
Industries, CTDEC) et pas Cognin (commune-dortoir à sept minutes de Chambéry).

**2. La profondeur va dans le hub et dans les preuves, jamais dans la feuille.**
NOIISE est #1 sur « agence web Aix-les-Bains création site internet » avec des feuilles
service×ville franchement templatisées — parce qu'elles sont adossées à un hub ville avec
adresse réelle et à un socle national épais. Cocliko échoue à Chambéry avec 2 200 mots
parce qu'elle n'y a ni bureau, ni client nommé. On met l'effort là où il produit : le hub
territorial, le pilier départemental, les blocs de preuve.

**3. Le pack local à Chambéry, l'organique partout ailleurs.**
On travaille la fiche GBP pour dominer le bassin réel — Chambéry, Aix-les-Bains, Le
Bourget-du-Lac, La Motte-Servolex, La Ravoire. On n'y dépense pas un euro d'énergie pour
Annecy ou Bourg-Saint-Maurice : là-bas, on passe par le contenu et l'autorité de domaine.

**4. La branche locale est un exportateur net de jus.**
Elle reçoit d'en haut (guides, accueil, navigation), elle renvoie vers `/services/*`, elle
ne garde rien. Une page ville qui pointe vers deux services et six villes sœurs est mal
câblée. Les pages services, elles, ne redescendent pas : un seul lien contextuel vers
`/agence`, jamais vers une ville.

**5. Chaque page est conditionnée par une preuve acquise, pas par une date.**
Publier huit pages villes sur un domaine de deux mois à zéro backlink est la définition
opérationnelle du *scaled content abuse* tel que Google le décrit. Le déclencheur d'une
vague n'est jamais le calendrier seul : c'est une fiche GBP validée, une citation obtenue,
un client signé, une page en top 10. Cadence plafond : **une page locale toutes les deux
semaines**, jamais plus.

### Ce qu'on ne fera pas, et pourquoi

| Décision | Raison |
|---|---|
| **Pas de page par commune-dortoir** (Cognin, La Ravoire, Bassens, Vétraz-Monthoux, Poisy…) | Même bassin, même tissu, même prospect. C'est la définition littérale de la doorway page. Ces communes sont absorbées comme sections des pages ville et dans `areaServed` |
| **Pas de page par station** (Val d'Isère, Tignes, Méribel, Val Thorens, Megève, Courchevel…) | Dix pages seraient dix fois le même texte. Une page `/secteurs/hotellerie-montagne` traite le sujet en profondeur et sert de puits à la pression commerciale |
| **Pas de second `LocalBusiness` avec une adresse par ville** | C'est déclarer un établissement qui n'existe pas. Vérifiable en une requête au registre du commerce, contradictoire avec la fiche GBP. Le point le plus exposant du dossier |
| **Pas de seconde fiche Google Business Profile à Annecy** | Motif de suspension GBP le plus classique. Une fiche SAB multiple exige du personnel dédié et des zones non chevauchantes — hors de portée aujourd'hui |
| **Pas de guide localisé** (`/guides/prix-site-internet-savoie`) | Cannibaliserait `prix-site-vitrine`, `combien-coute-un-site-internet` et `prix-site-e-commerce`, trois actifs déjà écrits et plus forts. L'intention « prix + Savoie » se sert dans une section budget du pilier départemental, qui renvoie vers le guide national |
| **Pas de témoignage anonymisé par secteur** (« Gérant d'un commerce de proximité chambérien ») | Signature la plus lisible d'une localisation générée. Digital Unicorn le fait, Matixweb aussi (« Sophie M. », « Thomas R. »). C'est précisément le terrain sur lequel on veut gagner |
| **Pas de domaine à correspondance exacte** (`agence-web-chambery.fr`) | Nommé explicitement dans la politique anti-spam de Google : *multiple domain names… targeted at specific regions or cities* |
| **Pas de grille « nos autres villes » en pied de page** | 40 liens croisés = liens créés pour les moteurs. Les liens entre villes sœurs sont dans la prose, justifiés, et plafonnés à deux |
| **Pas de simulateur de prix ni de tarification temps réel** | Contrainte funnel : lead-only, réponse manuelle sous 24 h ouvrées. Aucune page locale n'y déroge |
| **Aucune promesse de position** | Ni sur le site, ni dans ce document, ni en rendez-vous. Google écrit explicitement qu'aucun moyen d'obtenir une meilleure place dans le classement local sur demande ou contre rémunération n'existe |

### Les hypothèses qui restent à vérifier

Ce plan est bâti sur la valeur économique observée, pas sur des volumes de recherche
mesurés. Cinq points doivent être tranchés avant ou pendant la vague 0.

1. **Les volumes de recherche commune par commune.** Aucun outil SEO n'a été consulté.
   Plusieurs villes notées « faible difficulté » le sont peut-être simplement parce que le
   volume est trop faible pour intéresser quiconque. À mesurer sur les 12 couples
   ville × service du plan avant d'ouvrir la vague 3.
2. **La hauteur du pack local et le nombre d'avis des concurrents.** À relever manuellement
   sur google.fr géolocalisé Chambéry, puis Annecy : nombre d'avis et note de Cappuccino,
   Here We Com, Kiwi Interactive, Cocliko, Alpaweb, Digicîmes. C'est ce qui dit si le pack
   local chambérien est prenable en 12 mois avec une fiche neuve.
3. **L'éligibilité aux clusters.** Cluster Montagne et Mont-Blanc Industries fédèrent des
   industriels et des aménageurs. Une agence web est prestataire *de* ces entreprises, pas
   membre de la filière. À poser directement à chaque cluster avant d'engager une
   cotisation.
4. **Le tarif d'adhésion du Club des Entreprises USMB.** Non publié sur le site. C'est
   pourtant la meilleure piste de lien du dossier. Un appel au 04 50 09 24 06 suffit.
5. **Le millésime de population à figer.** Les sources divergent (Thonon et Annemasse
   s'inversent selon le recensement retenu). On fixe **le recensement 2023, populations
   légales en vigueur au 1er janvier 2026**, et on le cite systématiquement.

---

## 2. Le terrain : où sont les clients

### 2.1 Les communes retenues

Population : recensement INSEE 2023, populations légales en vigueur au 01/01/2026
**[VU pour Aix-les-Bains via le dossier complet INSEE de la commune 73008 ; les autres
valeurs proviennent de villagesfrancais.fr et sont À VÉRIFIER commune par commune avant
publication]**. Difficulté SERP : 1 (terrain quasi vide) à 5 (plusieurs agences locales
anciennes avec portfolio).

| Commune | Pop. | Tissu économique dominant | Diff. SERP observée | Qui défend | Intérêt commercial |
|---|---|---|---|---|---|
| **Chambéry** (73) | ~60 000 | Préfecture, tertiaire, santé, université USMB, CCI Savoie | **5** sur « agence web » / **3** sur Google Ads | Cappuccino (20 ans), Here We Com (2010), Kiwi Interactive (1998), Nouvel Œil (2001), Matixweb | **Fort** — Bassens est limitrophe de Chambéry, même agglomération et ancrage réel |
| **Le Bourget-du-Lac** (73) | ~5 200 | **Savoie Technolac** : 230+ entreprises, cleantech, INES, incubateur | **1-2** | Kinic (adresse réelle sur place), CyberCité (2004, ~20 salariés) + pages programmatiques | **Très fort** — audience startups/PME tech à 15 min du siège, cible SaaS |
| **Aix-les-Bains** (73) | 32 406 | **Thermalisme** (Chevalley, Marlioz) + **industrie** (Combaruches : AIXAM, ABB, MHM) + tourisme d'affaires | **3** | Aucune agence réellement aixoise en force. Top occupé par du hors-zone (Noiise, Viaduc, Digital Unicorn, Boondooa) | **Fort** — 15 min du siège, seule ville du 73 avec des données INSEE que nous avons vérifiées |
| **Albertville** (73) | ~20 000 | Porte de la Tarentaise, BTP, logistique des stations, agroalimentaire, siège de l'agglo Arlysère | **2-3** | Champ low-cost fragmenté (AA Création 500 € HT, Labo Web, Altitude-Dev, Dieup'Art) | **Moyen-fort** — aucune offre premium positionnée |
| **Annecy** (74) | ~132 000 | **Mécatronique / industrie 4.0** (NTN-SNR, SEB/Téfal, Stäubli, Mecalac, Pfeiffer), outdoor, tourisme | **5** sur « agence web » / **3** sur l'angle technique | Alpaweb (2009), PappleWeb (2012), Cocliko, Maison du Net, TezDev, **Annecy-Dev** (revendique Next.js + Lighthouse ~100) | **Très fort** mais le plus disputé — à travailler par capillarité, pas frontalement |
| **Cluses** (74) | ~17 800 | **Épicentre du décolletage français.** Mont-Blanc Industries (320+ adhérents), CTDEC. Vallée de l'Arve : 600 à 800 PME, ~2 Md€ de CA | **2-3** | Micro-acteurs à 490 € (MontPC, Matixweb, creation-site-cluses.fr, Zaplo Studio) | **Très fort** — meilleur ratio valeur/concurrence du dossier. Cible applications métier |
| **Annemasse** (74) | ~37 700 | **Transfrontalier Genève** : 27 000 frontaliers sur ~90 000 hab. d'agglo. 13,9 M€ de compensation genevoise 2025 | **3-4** sur « agence web » / **3** sur SEO | Net-Concept, Clickalpe en local. Sur le SEO : 100 % non-local (SEOBooster, Exoa, 1789.fr, Brest Web) | **Très fort** — pouvoir d'achat tiré par les salaires suisses |
| **Thonon-les-Bains** (74) | ~37 900 | Thermalisme, eaux minérales (Évian/Thonon), agroalimentaire, tourisme lacustre, frontaliers | **3-4** | Clic and Go (2000), Leman Web, Léman Web Digital — vrais locaux installés | **Fort** mais défendu — dernière de la file |

Deux pages sectorielles complètent le dispositif et couvrent tout ce que la grille ci-dessus
laisse de côté : `/secteurs/industrie-decolletage` (vallée de l'Arve, de Bonneville à
Sallanches) et `/secteurs/hotellerie-montagne` (Tarentaise, 3 Vallées, Espace Killy, Pays du
Mont-Blanc). Une troisième, `/secteurs/entreprises-transfrontalieres-geneve`, ouvre en
dernier si l'angle frontalier produit.

### 2.2 Les communes écartées, et pourquoi

| Communes | Raison de l'exclusion | Où le contenu atterrit |
|---|---|---|
| Cognin, Saint-Alban-Leysse, Barberaz, Bassens, Jacob-Bellecombette, Barby, La Ravoire, La Motte-Servolex, Challes-les-Eaux | Communes de l'agglomération chambérienne, à 5-10 minutes du centre. Aucune identité économique propre. Le prospect ne se pense pas « entreprise de Barberaz » | Section « Le bassin chambérien » de `/agence/savoie/chambery` + `areaServed` |
| Gaillard, Ville-la-Grand, Vétraz-Monthoux, Cranves-Sales, Douvaine | Même logique côté genevois. Leurs zones d'activité méritent une mention, pas une URL | Section « L'agglo d'Annemasse » de `/agence/haute-savoie/annemasse` |
| Poisy, Epagny Metz-Tessy, Fillière, Seynod, Cran-Gevrier | Périurbain d'Annecy — et plusieurs sont des **communes déléguées d'Annecy depuis la fusion de 2017**. Une page séparée serait factuellement fausse, pas seulement vide | `/agence/haute-savoie/annecy` |
| Scionzier, Marnaz, Thyez, Bonneville | Économiquement pertinentes (décolletage) mais indissociables de Cluses. Trois pages produiraient trois quasi-doublons | Section « De Cluses à Bonneville » de `/agence/haute-savoie/cluses` + page secteur |
| Courchevel, Megève, Val d'Isère, Tignes, Méribel, Val Thorens, Les Ménuires, La Plagne, Les Arcs, Chamonix, Sallanches, Bourg-Saint-Maurice, Moûtiers | Population résidente souvent < 3 000, tissu quasi identique d'une station à l'autre (remontées, hébergement, écoles de ski, conciergerie, immobilier). Courchevel pèse pourtant lourd — 3 752 sociétés enregistrées pour ~2 000 résidents — mais la valeur ne justifie pas treize gabarits | **`/secteurs/hotellerie-montagne`** — une page, pas treize |
| Saint-Jean-de-Maurienne, Ugine, Montmélian, Rumilly, La Roche-sur-Foron, Saint-Julien-en-Genevois, Évian | Terrain SERP quasi vide (difficulté 1-2), donc tentant — mais **c'est probablement parce que le volume de recherche n'intéresse personne**. Saint-Julien et Rumilly sont les deux plus sérieuses de la liste | Sections des piliers départementaux. **Réserve** : ouvrables une par une en vague 4+, uniquement après mesure de volume |
| Entrelacs, Saint-Pierre-d'Albigny, Grésy-sur-Aix, Publier, Passy, Archamps | Tissu trop mince ou mono-employeur. Aucune requête commerciale plausible | Mentions dans les pages ville voisines |
| Lyon, Grenoble, Genève, Paris | Aucun client, aucune présence. Le cas Digital Unicorn / Brest prouve que ça ne produit rien, et le risque est réel. **À retirer de l'`areaServed` du JSON-LD de `/contact` dès la vague 0** | Nulle part |

**Règle de coupe générale** : toute commune de moins de 5 000 habitants sans filière
nommable est refusée. Et pour les autres : si l'on ne peut pas citer trois entreprises
réelles et une filière dominante, il n'y a pas de page à écrire.

---

## 3. Architecture des pages

### 3.1 L'arborescence

```
/agence                                          PILIER TERRITORIAL
│   « Agence web à Chambéry : notre territoire, Savoie et Haute-Savoie »
│
├── /agence/savoie                               PILIER DÉPARTEMENTAL 73
│   ├── /agence/savoie/chambery                  HUB SIÈGE — le plus profond
│   │   ├── …/referencement-google
│   │   ├── …/publicite-en-ligne
│   │   ├── …/saas-applications-metier
│   │   └── …/sites-vitrines
│   ├── /agence/savoie/le-bourget-du-lac         angle Savoie Technolac
│   ├── /agence/savoie/aix-les-bains             angle thermalisme + Combaruches
│   └── /agence/savoie/albertville               angle porte de Tarentaise
│
├── /agence/haute-savoie                         PILIER DÉPARTEMENTAL 74
│   ├── /agence/haute-savoie/annecy              angle mécatronique
│   │   ├── …/saas-applications-metier
│   │   └── …/referencement-google
│   ├── /agence/haute-savoie/cluses              angle décolletage
│   ├── /agence/haute-savoie/annemasse           angle transfrontalier
│   └── /agence/haute-savoie/thonon-les-bains    angle Chablais
│
└── (branche sœur, pas enfant)
    /secteurs/industrie-decolletage
    /secteurs/hotellerie-montagne
    /secteurs/entreprises-transfrontalieres-geneve
```

**Plafond dur : 25 URL locales.** Le plan en ouvre 20 au maximum, dont 18 dans les 12
premiers mois. Au-delà de 25, on bascule mécaniquement dans le modèle qu'on refuse.

### 3.2 Les patrons d'URL

| Niveau | Patron | Exemple |
|---|---|---|
| Pilier territorial | `/agence` | `/agence` |
| Département | `/agence/{departement}` | `/agence/haute-savoie` |
| Ville | `/agence/{departement}/{ville}` | `/agence/savoie/aix-les-bains` |
| Ville × service | `/agence/{departement}/{ville}/{service}` | `/agence/savoie/chambery/publicite-en-ligne` |
| Secteur | `/secteurs/{slug}` | `/secteurs/industrie-decolletage` |

Sans slash final, pour rester aligné sur `/guides/{slug}` et `/services/{slug}` existants.

**Pourquoi ce patron.** Dix patrons différents cohabitent dans le SERP cible, et on trouve
des gagnants comme des doorways dans presque chaque famille : le patron ne discrimine rien
en lui-même. Le choix se justifie par la **discipline qu'il impose**, en cinq points.

1. **`/agence` au singulier est vrai.** Il y a une agence, au 82 impasse de Bellevue à Bassens.
   `/agences/` (NOIISE, 7 bureaux réels) ou `/implantations/` (Zaplo Studio, un studio
   parisien et 101 départements) mentiraient — et une URL qui ment oblige ensuite le
   contenu à mentir pour rester cohérent.
2. **Le dossier imbriqué rend l'orphelinage mécaniquement impossible.** Une page ville ne
   peut pas exister sans que son département figure dans son propre chemin. C'est le remède
   structurel à l'échec PappleWeb, dont les pages villes sont des îles absentes du sitemap.
3. **Il produit un fil d'Ariane à quatre niveaux** exactement aligné sur le
   `BreadcrumbList`, donc un balisage trivial et honnête.
4. **Il confine toute la couverture locale dans un espace de noms unique** : auditable en
   une commande, plafonnable, et désindexable en une règle si ça tourne mal.
5. **Le slug de la feuille est identique au slug national.**
   `/agence/savoie/chambery/referencement-google` ↔ `/services/referencement-google`. Un
   seul vocabulaire, aucun synonyme, et le lien feuille → pilier national devient évident.

**Objection anticipée** : l'URL du hub ne contient ni « web » ni « creation-site-internet ».
NOIISE est #1 sur « agence web Aix-les-Bains création site internet » avec l'URL
`/agences/aix-les-bains/` — aucun de ces mots n'y figure. Le mot-clé dans l'URL est un
signal faible ; le H1, le `<title>` et le corps le portent.

### 3.3 Hiérarchie et rôles

| Niveau | Volume total | Contenu unique minimum | Rôle |
|---|---|---|---|
| `/agence` | 1 400–2 000 mots | intégralement unique | Page « où nous sommes », hub de la branche, réceptacle du jus des guides |
| `/agence/{dept}` | 1 800–2 400 | ≥ 1 400 mots (≥ 70 %) | Le vrai actif SEO territorial. Absorbe les requêtes « + Savoie » / « + Haute-Savoie » |
| `/agence/{dept}/{ville}` | 1 600–2 200 | **≥ 900 mots (≥ 50 %)** | Capte la requête tête de la ville, prouve l'ancrage, exporte vers `/services/*` |
| `/agence/{dept}/{ville}/{service}` | 900–1 300 | ≥ 350 mots (≥ 35 %) | Capte la requête spécifique là où les défenseurs sont programmatiques. Concentre son jus sur un lien exact-match |
| `/secteurs/{slug}` | 2 000–2 800 | ≥ 1 900 mots (≥ 85 %) | Puits de la pression commerciale « une page par station ». Risque doorway quasi nul |

Le seuil bas des feuilles est assumé : les feuilles service×ville de NOIISE sont franchement
templatisées et l'une d'elles est en top 10. **Mais une feuille n'a le droit d'exister que
si son hub classe déjà** — sinon c'est une page mince orpheline de plus.

---

## 4. La trame d'une page ville

### 4.1 Le seuil de contenu unique

> Une page ville doit contenir **au minimum 900 mots strictement non transposables**.
> Trois conditions cumulatives, les trois obligatoires :
> 1. **≥ 900 mots uniques** — un mot est unique s'il devient faux ou absurde quand on
>    remplace le nom de la ville par celui d'une autre ville du plan ;
> 2. **≥ 50 % du texte total** de la page ;
> 3. **≥ 60 % de ces mots uniques dans les 40 % supérieurs** de la page. Une unicité
>    reléguée en bas de page se lit comme un gabarit à pied de page localisé — et c'est
>    exactement ce que c'est.

**Pourquoi 900 et pas 600.** Les blocs de la trame ci-dessous produisent naturellement 1 150
à 1 750 mots quand ils sont écrits honnêtement. 900 est donc un plancher atteignable, pas un
étirement : ne pas y arriver signifie que la matière locale n'existe pas et que la page ne
doit pas exister. Il faut aussi le calibrer sur ce site — les pages services font 2 500 à
3 500 mots, les guides 5 000 à 6 500. Une page ville à 1 200 mots serait la page la plus
mince du domaine, et ça se verrait.

### 4.2 Bloc par bloc

| # | Bloc | Unique | Mots | Ce qu'il contient |
|---|---|---|---|---|
| 1 | H1 + chapô | oui | 60 | Le H1 nomme la ville **et** son économie, jamais « agence web à X » seul |
| 2 | **La filière dominante nommée** | oui | 250–350 | 3 à 5 entreprises ou institutions réelles, avec ce qu'elles font, leur taille, leur marché. Pas une liste de noms |
| 3 | **Zones d'activité nommées** | oui | 100–150 | Parcs, ZA, technopôles, avec leurs noms exacts et leur vocation |
| 4 | **Une donnée chiffrée, datée, sourcée** | oui | 100–150 | Une seule, solide, avec sa source et son millésime. Mieux vaut un chiffre vérifié que cinq approximatifs |
| 5 | **Le cas d'usage web/logiciel propre à cette économie** | oui | 200–300 | Le bloc qui vaut le plus : ce dont *ces* entreprises-là ont besoin. Un décolleteur et un hôtelier n'achètent pas la même chose |
| 6 | **Réalité opérationnelle** | oui | 100–150 | Temps de trajet réel depuis le 82 impasse de Bellevue à Bassens, modalité de rendez-vous, communes du bassin réellement couvertes |
| 7 | **Constat sur le marché local** | oui | 150–250 | Ce que font — ou ne font pas — les entreprises du bassin en ligne. Honnête, chiffrable si possible |
| 8 | **Références locales** | oui | 0–200 | **Rien si rien.** Une section absente vaut infiniment mieux qu'un témoignage anonymisé |
| 9 | **FAQ locale** | oui | 250–400 | 4 à 6 questions, dont **au moins 3 impossibles à poser sur une autre ville** |
| 10 | Services adaptés | mutualisé | — | 3 à 5 liens `/services/*`, chacun avec une phrase de contextualisation locale |
| 11 | Méthode, stack, Lighthouse 95+, forfait fixe | mutualisé | — | Identique partout. NOIISE mutualise tout ça et est #1 |
| 12 | Tarifs | mutualisé | — | Renvoi `/tarifs`. **Jamais de prix calculé en direct** |
| 13 | CTA | mutualisé | — | `/demarrer-un-projet` + `/rendez-vous`. Réponse manuelle sous 24 h ouvrées |

### 4.3 Les huit variables qui doivent changer d'une ville à l'autre

Une page qui n'en fait varier que trois est un gabarit, quel que soit son nombre de mots.

1. **La filière dominante** — nommée, jamais « un tissu économique dynamique »
2. **Trois à cinq entreprises ou institutions réelles** — avec ce qu'elles font
3. **Les zones d'activité et parcs** — noms exacts
4. **Une donnée chiffrée, datée, sourcée** — millésime unique pour tout le site
5. **Le cas d'usage web ou logiciel spécifique**
6. **Le temps de trajet et les communes desservies** — chiffres réels
7. **La FAQ** — au moins 3 questions non transposables
8. **Les références locales quand elles existent** — et le silence quand elles n'existent pas

Ce qui peut rester commun sans aucun risque : méthode et process, stack technique, garantie
Lighthouse 95+, forfait fixe contractuel, propriété du code, grille tarifaire et renvoi vers
`/tarifs`, bloc « nos services », formulaire, fil d'Ariane.

### 4.4 Exemple rédigé — `/agence/savoie/aix-les-bains`

Voici les quatre premiers paragraphes, réellement écrits, pour donner le ton et prouver que
le seuil est atteignable. **Chaque fait de ces paragraphes est [VU]** — les sources sont
listées juste après.

---

> # Agence web à Aix-les-Bains : sites et outils sur mesure pour le thermalisme, l'industrie et les services
>
> Aix-les-Bains est à une quinzaine de kilomètres de notre bureau du 82 impasse de Bellevue, à
> Bassens. Une vingtaine de minutes par la voie rapide. C'est l'une des
> rares villes de notre zone où nous nous déplaçons systématiquement pour le premier
> rendez-vous, sans condition de budget — non par posture commerciale, mais parce qu'à cette
> distance un aller-retour ne coûte pas une demi-journée. Au-delà, nous le disons franchement
> plus bas : nous travaillons très bien en visio, et nous ne facturons pas des déplacements
> qui n'apportent rien au projet.
>
> La ville compte 32 406 habitants au recensement 2023 et 1 177 établissements actifs à fin
> 2024, pour 10 487 postes salariés — chiffres INSEE, dossier complet de la commune 73008.
> Mais c'est le détail qui compte, pas le total : **72,6 % de ces établissements emploient
> entre une et neuf personnes**. Aix-les-Bains n'est pas une ville de grands comptes, c'est
> une ville de très petites structures — cabinets, praticiens, hébergeurs, commerçants,
> artisans, prestataires de services. Cela détermine directement ce qu'on peut y vendre
> honnêtement et à quel budget, et c'est la première chose qu'une agence devrait vous dire.
>
> Deux économies s'y superposent sans beaucoup se parler. La première est thermale et
> sanitaire : les Thermes Chevalley, exploités par Valvital sur les orientations rhumatologie
> et phlébologie ; les Thermes Marlioz, sur les voies respiratoires et les affections des
> muqueuses bucco-linguales. Une saison qui ouvre début février et referme début décembre, et
> tout un écosystème autour — hébergement de cure, kinésithérapie, diététique, bien-être,
> transport de curistes. La seconde est industrielle et se voit peu depuis le lac : le parc
> des Combaruches, une trentaine d'hectares le long de l'A41 à cinq minutes de la sortie 14,
> où sont installés AIXAM — dont le siège et l'usine d'assemblage sont ici, à Aix-les-Bains —
> ainsi qu'ABB et MHM. À quoi s'ajoutent le parc des Sources, onze hectares découpés en une
> quinzaine de lots à cheval sur Aix-les-Bains et Grésy-sur-Aix et commercialisé par
> Chambéry-Grand Lac Économie, et Savoie Hexapôle à Méry, orienté outdoor, sport, santé et
> bien-être.
>
> Ces deux économies n'achètent pas du tout la même chose. Un établissement de cure, un
> hébergeur de curistes ou un praticien a un problème de calendrier : sa saison est bornée,
> ses réservations se concentrent sur quelques semaines, et son site doit encaisser une prise
> de rendez-vous avec des disponibilités réelles — pas un formulaire de contact qui atterrit
> dans une boîte mail. Un industriel des Combaruches a un problème de catalogue et de réseau :
> fiches produits techniques, documentation multilingue, espace revendeur, parfois un
> configurateur relié à sa nomenclature. Ce sont deux projets qui n'ont rien en commun — ni le
> budget, ni la stack, ni le calendrier de livraison. C'est exactement pour cette raison
> qu'une page « agence web à Aix-les-Bains » qui parlerait de « dynamisme économique » et de
> « proximité » ne serait utile à personne.

---

**Sources des faits ci-dessus, à citer sur la page publiée :**

| Fait | Source | Statut |
|---|---|---|
| 32 406 habitants (RP 2023), 1 177 établissements actifs fin 2024, 10 487 postes salariés fin 2024, 72,6 % d'établissements de 1 à 9 salariés | `insee.fr/fr/statistiques/2011101?geo=COM-73008` — géographie au 01/01/2026 | **[VU]** |
| Thermes Chevalley (Valvital) : rhumatologie, phlébologie. Thermes Marlioz : voies respiratoires, muqueuses bucco-linguales | `medecinethermale.fr/curistes/les-stations/detail/aix-les-bains.html` | **[VU]** |
| Saison 2026 : Chevalley du 2 février au 12 décembre, Marlioz du 9 février au 5 décembre | valvital.fr, relevé en SERP | **[VU en SERP, À VÉRIFIER sur la page source]** |
| Parc des Combaruches : ~30 ha, bord A41, sortie 14 à 5 min, MHM / AIXAM / ABB | immo-hub.org, relevé en SERP | **[À RECOUPER sur aixlesbains.fr avant publication]** |
| Parc des Sources : 11 ha, ~15 lots, Aix-les-Bains + Grésy-sur-Aix, commercialisé par Chambéry-Grand Lac Économie | `chambery-grandlac.fr/parc-activite/les-sources/`, odsradio | **[VU en SERP]** |
| Savoie Hexapôle : Méry, ISO 14001, filière outdoor / sport / santé / bien-être, ~160 entreprises et ~1 700 emplois | `chambery-grandlac.fr/parc-activite/savoie-hexapole/` | **[VU en SERP]** |
| AIXAM : siège social et usine d'assemblage à Aix-les-Bains | usinenouvelle.com, francebleu.fr, aixam.com | **[VU]** |

**Ce que ce brouillon n'écrit délibérément pas.** Le rang d'Aix-les-Bains parmi les stations
thermales françaises et son nombre annuel de curistes n'apparaissent nulle part — alors que
ce serait le chiffre le plus séduisant du paragraphe. Raison : les sources se contredisent.
Un document de terrain donne « 4ᵉ destination thermale de France, 29 000+ curistes/an », une
recherche menée le même jour renvoie « 3ᵉ station française, plus de 30 000 curistes ». Tant
que le rang n'est pas confirmé par le CNETh avec un millésime, il ne sort pas. **C'est le
comportement attendu par défaut** : un lecteur aixois repère immédiatement un rang faux, et
il ne repère que celui-là dans toute la page.

**Décompte du brouillon** : environ 470 mots, dont la quasi-totalité est non transposable —
remplacer « Aix-les-Bains » par « Albertville » rendrait faux à peu près chaque phrase. Les
blocs 5 à 9 de la trame restent à écrire, ce qui amène naturellement la page entre 1 600 et
2 000 mots avec 1 100 à 1 300 mots uniques. Le seuil de 900 n'est pas un plafond à atteindre
en forçant : il est franchi par la matière elle-même.

---

## 5. Maillage interne : comment circule le jus

> **Principe directeur : la branche locale est un exportateur net. Elle reçoit du jus d'en
> haut, elle le renvoie vers les pages qui convertissent, et elle n'en garde pas.**

### 5.1 Schéma des flux

```
   liens externes gagnés                    accueil + navigation
   (presse éco, annuaires, CCI)             (mega-menu)
              │                                    │
              ▼  8 liens éditoriaux                ▼ 1 lien
        ┌──────────────────────────────────────────────────┐
        │                     /agence                      │
        │                PILIER TERRITORIAL                │
        └──────┬───────────────────────────────────┬───────┘
               │ 2 liens                           │ 8 liens directs
               ▼                                   │ (villes à 2 clics
        ┌─────────────────┐                        │  de l'accueil)
        │ /agence/savoie  │◄───────────────────────┤
        │ /agence/h-savoie│    3-4 liens           │
        └────────┬────────┘                        │
                 ▼                                 ▼
        ┌──────────────────────────────────────────────────┐
        │           /agence/{dept}/{ville}   × 8           │
        │              12-16 liens sortants max            │
        └────┬───────────────┬──────────────────┬──────────┘
             │ 3-5 liens     │ 2-3 liens        │ 1 lien (vague 4)
             ▼               ▼                  ▼
   ╔═══════════════════╗ ┌─────────┐  ┌──────────────────────┐
   ║   /services/*     ║ │ GUIDES  │  │  …/{service}         │
   ║   CONVERSION      ║◄┤ retour  │  │  1 lien exact-match  │──┐
   ║                   ║ │ contex- │  │  vers /services/{=}  │  │
   ║      ◄────────────╫─┤ tuel    │  └──────────────────────┘  │
   ╚═══════════════════╝ └─────────┘                            │
             ▲◄───────────────────────────────────────────────── ┘
             │ 2-4 liens
   ┌─────────┴──────────┐
   │   /secteurs/*  × 3 │◄── liens depuis les départements et les villes du bassin
   └────────────────────┘

   RÈGLE ASYMÉTRIQUE : /services/* ne pointe JAMAIS vers une page ville.
   Un seul lien contextuel vers /agence. La conversion ne redescend pas.
```

**Profondeur de clic** : accueil → `/agence` (1) → ville (2) → feuille (3). Aucune page
locale au-delà de trois clics. **Aucune page locale accessible uniquement depuis le pied de
page** — le footer-only est la signature de l'île, et c'est ce qui condamne PappleWeb.

### 5.2 Budget de liens sortants par type de page

| Page | Sortants | Répartition |
|---|---|---|
| **Accueil** | 1 vers le local | `/agence`, **dans le corps**, pas seulement au footer |
| **Navigation (mega-menu)** | 1 | Entrée « Notre agence en Savoie » → `/agence`. C'est ce qui tue définitivement le critère de l'île |
| **`/agence`** | ~22 | 2 départements · 8 villes · 5-7 services · 3 réalisations · 2-3 guides · `/tarifs` · CTA |
| **`/agence/{dept}`** | ~14 | 1 montant · 3-4 villes · 4-6 services · 2-3 guides · 1-2 secteurs · **un seul** lien vers le département frère |
| **`/agence/{dept}/{ville}`** | **12-16** (plafond dur 18) | 1-2 montants · **3-5 services** · 2-3 guides · 1-2 réalisations · 0-2 villes sœurs · 0-1 secteur · `/tarifs` · 1-2 CTA |
| **`/agence/…/{service}`** | **8-10** | 1 montant · **1 exact-match vers `/services/{même-slug}`** · 2-3 guides · 1-2 réalisations · 1 CTA |
| **`/secteurs/{slug}`** | ~16 | 3-4 services · 3-4 guides · 2-3 villes du bassin · 1 département · réalisations · CTA |
| **`/services/*`** | **1 seul vers le local** | Vers `/agence`, contextuel. **Jamais vers une ville** |

**Les liens entre villes sœurs** sont plafonnés à deux et ne sont autorisés que si la
justification éditoriale est visible dans la phrase : Cluses ↔ Bonneville (même bassin
industriel), Chambéry ↔ Le Bourget-du-Lac (même agglomération), Annemasse ↔ Thonon (même
Chablais frontalier). Jamais Chambéry ↔ Thonon. Et jamais sous forme de grille : dans le
corps du texte, dans une phrase qui a un sens.

Contrepartie obligatoire pour que les villes ne soient jamais orphelines : **le pilier et le
département pointent vers toutes leurs villes**, et le fil d'Ariane remonte. C'est une
hiérarchie parcourable au sens exact où la politique anti-spam de Google l'oppose aux
*« substantially similar pages that are closer to search results »*.

### 5.3 Le rôle des 23 guides existants

Les guides sont les seules pages du site susceptibles d'être citées spontanément : 5 000 à
6 500 mots, sourcés, sans intention commerciale directe. **Ce sont les réservoirs
d'autorité.** Toute la question est de savoir comment en transférer une part au local sans
laisser d'empreinte de gabarit.

**La tentation à refuser** : coller un encart « Vous êtes en Savoie ? » sur les 23 guides.
23 liens identiques ne sont pas un signal éditorial, c'est une empreinte de template.

**La règle** : **8 guides sur 23 portent un lien local. Chacun avec une ancre différente,
vers une cible différente, placé dans la prose à l'endroit exact où l'argument le justifie**
— jamais dans un encart, jamais dans une liste « à lire aussi ».

| Guide source | Cible locale | Ancre |
|---|---|---|
| `aides-creation-site-internet` | `/agence/savoie` | « les dispositifs mobilisables en Auvergne-Rhône-Alpes pour une entreprise savoyarde » |
| `choisir-son-agence-web` | `/agence` | « vérifier qu'une agence est réellement implantée là où elle le prétend » |
| `combien-coute-un-site-internet` | `/agence` | « ce que change une agence à Chambéry plutôt qu'à Paris » |
| `prix-site-vitrine` | `/agence/savoie/chambery` | « notre grille appliquée à un projet chambérien » |
| `combien-coute-un-saas` | `/agence/savoie/le-bourget-du-lac` | « les startups hébergées à Savoie Technolac » |
| `prix-logiciel-sur-mesure` | `/secteurs/industrie-decolletage` | « un outil de suivi de production chez un décolleteur de la vallée de l'Arve » |
| `agence-web-ou-freelance` | `/agence/savoie` | « le tissu de prestataires en Savoie » |
| `prix-site-e-commerce` | `/secteurs/hotellerie-montagne` | « un hôtel de Tarentaise qui veut vendre en direct plutôt que via les OTA » |

`aides-creation-site-internet` est le meilleur pont du site : il est déjà organisé région par
région, la jonction est naturelle, et l'intention « financer mon site en Savoie » est
exactement celle du pilier départemental. `choisir-son-agence-web` est le second — un guide
sur la vérification qui pointe vers la page qui apporte la preuve, c'est cohérent de bout en
bout.

**Les 15 autres guides ne portent aucun lien local. Délibérément.**

### 5.4 Le flux retour, local → guides

Chaque page locale cite deux à trois guides **comme source de l'argument qu'elle développe**,
jamais dans une liste de fin de page. Exemples d'ancres réelles :

- depuis `/agence/haute-savoie/cluses`, bloc budget → « le budget réel d'un logiciel sur
  mesure, poste par poste » → `/guides/prix-logiciel-sur-mesure`
- depuis `/agence/savoie/aix-les-bains`, section saison thermale → « les délais réels pour
  être en ligne avant l'ouverture de la saison » → `/guides/combien-de-temps-pour-creer-un-site`
- depuis `/agence/haute-savoie/annemasse` → « les écarts de prix entre prestataires, chiffres
  à l'appui » → `/guides/combien-coute-un-site-internet`
- depuis `/agence/savoie/albertville`, section refonte → « refondre sans perdre son
  référencement » → `/guides/refonte-sans-perdre-son-seo`

### 5.5 Règles d'ancres

- **Une seule ancre exact-match par cible et par page.** Le reste en descriptif.
- **Jamais deux fois la même ancre sur une même page.**
- **Une ancre partant d'une page ville vers une page service nationale ne contient jamais le
  nom de la ville.** On écrit « développement SaaS et applications métier » →
  `/services/saas-applications-metier`, jamais « développement SaaS à Chambéry ». Sinon on
  pousse une page nationale vers une requête locale qu'elle ne gagnera pas, et on brouille
  les deux cibles.
- Variantes vers `/agence/savoie/chambery` : « notre agence près de Chambéry » · « au 82 impasse de
  Bellevue à Bassens » · « les entreprises du bassin chambérien » · « à quinze minutes de Savoie
  Technolac » · « agence web à Chambéry » (une seule fois, la version exact-match).
- Variantes vers `/agence` : « notre zone d'intervention » · « où nous sommes réellement
  implantés » · « agence web en Savoie et Haute-Savoie ».

### 5.6 Implémentation dans le dépôt

1. **Registre unique `src/lib/local-pages.ts`**, calqué sur `src/lib/guides.ts` (déclaré
   « source de vérité unique ») : slug, département, `title`, `metaDescription`, `h1`,
   `datePublished` / `dateModified`, filière, communes couvertes, services ouverts, guides
   liés. Il alimente le sitemap, les metadata, le JSON-LD et les grilles de liens.
2. **`src/app/sitemap.ts`** : ajouter les routes locales. Le test structurel de
   `src/app/sitemap.test.ts` compare déjà le sitemap à la liste réelle des `page.tsx` de
   `src/app` — **l'erreur PappleWeb (pages villes absentes du sitemap) est donc déjà
   impossible par construction sur ce dépôt, et le build casse si on l'oublie.** C'est un
   avantage acquis, il suffit de ne pas le contourner en ajoutant les routes locales à
   `EXCLUDED_ROUTES`.
3. **Navigation** : entrée dans le mega-menu (`src/components/design-shared/nav-html.ts`), et
   pas seulement une tuile dans `SiteFooter.tsx`. Le footer actuel est déjà un
   footer-sitemap complet ; y ajouter les huit villes **sans** entrée de navigation
   reproduirait exactement la signature de l'île.

---

## 6. Balisage JSON-LD local

### 6.1 Règle de gouvernance des entités

Il existe **une** entité `ProfessionalService`, `https://hagnere-code.ai/#business`,
**déclarée en entier à un seul endroit** — l'accueil, `src/app/page.tsx`. Partout ailleurs,
référence par `@id` uniquement.

**Défaut existant à corriger avant toute nouvelle page [VU dans le code]** : l'entité
`#business` est aujourd'hui déclarée **deux fois avec des contenus divergents**.

- `src/app/page.tsx` — `areaServed` = objets `AdministrativeArea` : Savoie, Haute-Savoie,
  Isère, Ain, Auvergne-Rhône-Alpes, France.
- `src/app/contact/page.tsx` — `areaServed` = chaînes de caractères : Chambéry, Savoie,
  Haute-Savoie, **Lyon, Grenoble**, France.

Deux définitions contradictoires du même `@id` affaiblissent la consolidation de l'entité, et
le problème devient sérieux dès que vingt pages référencent cet `@id`. **Action vague 0** :
supprimer la redéclaration dans `/contact`, la remplacer par `mainEntity: { "@id": … }`, et
retirer Lyon et Grenoble d'`areaServed` — l'agence n'y a ni client ni présence, et le cas
Digital Unicorn / Brest montre que la déclaration ne produit rien.

**Second point à trancher en vague 0** : le champ `email` de l'entité est
`quentin@hagnere-patrimoine.fr`. C'est une incohérence NAP visible — l'adresse e-mail
publique d'une entreprise nommée Hagnéré Code devrait être sur son propre domaine. À aligner
avant de créer la fiche GBP, parce que la fiche, le JSON-LD et les annuaires devront tous
porter exactement le même triplet nom / adresse / téléphone / e-mail.

### 6.2 Balisage par type de page

| Type de page | Balisage |
|---|---|
| Accueil | `Organization` + `WebSite` + **`ProfessionalService` — déclaration complète, unique** |
| `/agence` | `WebPage` + `BreadcrumbList` + `mainEntity: {@id: #business}`. Pas de seconde déclaration |
| `/agence/{dept}` | `Service` (`areaServed: AdministrativeArea`) + `provider: {@id}` + `BreadcrumbList` |
| `/agence/{dept}/{ville}` | `Service` (`areaServed: City`) + `provider: {@id}` + `BreadcrumbList` + `FAQPage` **si et seulement si la FAQ est réellement locale** |
| `/agence/…/{service}` | `Service` avec `serviceType` précis + `areaServed: City` + `provider: {@id}` + `BreadcrumbList` |
| `/secteurs/{slug}` | `Service` + `audience: BusinessAudience` + `areaServed` (les deux `AdministrativeArea`) + `provider: {@id}` + `BreadcrumbList` |

### 6.3 Exemple complet — page ville Aix-les-Bains

```jsonc
[
  /* ─────────── 1. FIL D'ARIANE ───────────
     Les 4 niveaux du breadcrumb sont exactement les 4 segments de l'URL —
     c'est tout l'intérêt du patron imbriqué. Ce bloc DOIT être doublé d'un
     fil d'Ariane visible dans le HTML : un breadcrumb qui n'existe qu'en
     JSON-LD décrit une hiérarchie que l'utilisateur ne peut pas parcourir,
     ce qui est le reproche exact de la politique anti-spam. */
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://hagnere-code.ai/agence/savoie/aix-les-bains#breadcrumb",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil",
        "item": "https://hagnere-code.ai/" },
      { "@type": "ListItem", "position": 2, "name": "Notre agence",
        "item": "https://hagnere-code.ai/agence" },
      { "@type": "ListItem", "position": 3, "name": "Savoie",
        "item": "https://hagnere-code.ai/agence/savoie" },
      { "@type": "ListItem", "position": 4, "name": "Aix-les-Bains",
        "item": "https://hagnere-code.ai/agence/savoie/aix-les-bains" }
    ]
  },

  /* ─────────── 2. LA PAGE ───────────
     isPartOf raccroche la page au WebSite déjà déclaré, ce qui consolide le
     graphe au lieu de créer un îlot sémantique.
     dateModified doit être VRAIE. Le sitemap du projet omet déjà lastModified
     pour ne pas mentir avec une date régénérée à chaque build : même
     discipline ici, la date vient du registre local-pages.ts. */
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://hagnere-code.ai/agence/savoie/aix-les-bains#webpage",
    "url": "https://hagnere-code.ai/agence/savoie/aix-les-bains",
    "name": "Agence web à Aix-les-Bains : sites et outils sur mesure",
    "description": "Sites, e-commerce et applications métier pour les entreprises d'Aix-les-Bains : thermalisme, industrie des Combaruches, services. Forfait fixe, Lighthouse 95+.",
    "inLanguage": "fr-FR",
    "isPartOf":   { "@id": "https://hagnere-code.ai/#website" },
    "breadcrumb": { "@id": "https://hagnere-code.ai/agence/savoie/aix-les-bains#breadcrumb" },
    "about":      { "@id": "https://hagnere-code.ai/agence/savoie/aix-les-bains#service" },
    "datePublished": "2026-11-10",
    "dateModified":  "2026-11-10"
  },

  /* ─────────── 3. LE SERVICE — LE BLOC CRITIQUE ───────────
     C'est un Service, PAS un LocalBusiness. Déclarer ici un second
     ProfessionalService avec une adresse à Aix-les-Bains reviendrait à
     déclarer un établissement qui n'existe pas : vérifiable en une requête
     au registre du commerce, contradictoire avec la fiche GBP, et cela
     transforme un problème de qualité en problème d'intégrité. */
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://hagnere-code.ai/agence/savoie/aix-les-bains#service",
    "url": "https://hagnere-code.ai/agence/savoie/aix-les-bains",
    "name": "Création de site internet et développement sur mesure à Aix-les-Bains",
    "serviceType": "Développement web et logiciel sur mesure",

    /* provider = RÉFÉRENCE par @id vers l'unique entité déclarée sur
       l'accueil. Un seul nom, une seule adresse, un seul téléphone sur tout
       le domaine — c'est ce qui rend l'ensemble cohérent avec la fiche GBP
       et avec le SIREN 993672856. */
    "provider": { "@id": "https://hagnere-code.ai/#business" },

    /* areaServed ne liste QUE des communes réellement traitées dans le corps
       visible de la page. Un areaServed de 40 communes sous une page qui en
       cite 4 est du balisage non corroboré — c'est précisément le pattern
       des pages programmatiques qu'on cherche à battre. */
    "areaServed": [
      { "@type": "City", "name": "Aix-les-Bains",
        "address": { "@type": "PostalAddress",
                     "addressLocality": "Aix-les-Bains",
                     "postalCode": "73100",
                     "addressRegion": "Savoie",
                     "addressCountry": "FR" } },
      { "@type": "City", "name": "Grésy-sur-Aix" },
      { "@type": "City", "name": "Méry" },
      { "@type": "City", "name": "Le Bourget-du-Lac" }
    ],

    /* hasOfferCatalog reprend EXACTEMENT les services liés dans le bloc 10 de
       la page. Aucun prix : le funnel est lead-only, on ne publie pas de
       tarification structurée sur une page locale. */
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services proposés aux entreprises d'Aix-les-Bains",
      "itemListElement": [
        { "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Création de site vitrine",
            "url": "https://hagnere-code.ai/services/sites-vitrines" } },
        { "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Site e-commerce",
            "url": "https://hagnere-code.ai/services/ecommerce" } },
        { "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Référencement naturel",
            "url": "https://hagnere-code.ai/services/referencement-google" } }
      ]
    },

    "inLanguage": "fr-FR"
  },

  /* ─────────── 4. FAQ — CONDITIONNELLE ───────────
     À n'inclure QUE si les questions sont réellement locales et réellement
     présentes dans le HTML visible. Une FAQPage dont les questions sont
     transposables d'une ville à l'autre est un balisage de gabarit : elle
     rend le duplicate lisible par la machine, ce qui est pire que de ne rien
     baliser du tout. */
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://hagnere-code.ai/agence/savoie/aix-les-bains#faq",
    "isPartOf": { "@id": "https://hagnere-code.ai/agence/savoie/aix-les-bains#webpage" },
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Pouvez-vous livrer avant l'ouverture de la saison thermale ?",
        "acceptedAnswer": { "@type": "Answer",
          "text": "Les Thermes Chevalley et Marlioz ouvrent début février. Pour qu'un site d'hébergement de cure ou de praticien soit en ligne et indexé à l'ouverture, le projet doit démarrer au plus tard en octobre. Au-delà, nous le disons plutôt que de promettre une date que nous ne tiendrions pas." } },
      {
        "@type": "Question",
        "name": "Vous déplacez-vous à Aix-les-Bains pour le premier rendez-vous ?",
        "acceptedAnswer": { "@type": "Answer",
          "text": "Oui, systématiquement et sans condition de budget : nos bureaux sont au 82 impasse de Bellevue à Bassens, soit une vingtaine de minutes. Nous nous déplaçons aussi sur les parcs des Combaruches et des Sources, et à Savoie Hexapôle." } }
    ]
  }
]
```

**Trois règles qui découlent de cet exemple.**

1. `areaServed` ne contient **jamais** une commune que le texte visible ne mentionne pas.
2. `FAQPage` n'est jamais posé par défaut : il n'apparaît que si la FAQ est locale.
3. Aucune page locale ne porte de balisage de prix (`Offer.price`, `PriceSpecification`,
   `AggregateOffer`). Le funnel est lead-only ; publier une tarification structurée sur une
   page locale contredirait la règle et exposerait à des extraits de prix que personne ne
   contrôle.

---

## 7. Signaux hors site

Priorisé par rentabilité réelle — effort à fournir rapporté à l'effet attendu.

### 7.1 Google Business Profile — le socle

Google ne documente que trois facteurs de classement local **[VU,
`support.google.com/business/answer/7091`]** : la **pertinence**, la **distance** et la
**proéminence**. Sur ce dernier point, la formulation officielle est décisive pour tout ce
qui suit : la proéminence dépend notamment *« du nombre de sites Web qui redirigent vers
votre établissement et le nombre d'avis que vous avez reçus »*. Google écrit donc noir sur
blanc que **les liens et les avis alimentent le classement local** — c'est ce qui justifie
tout le volet citations et presse ci-dessous.

**Configuration de la fiche**

| Paramètre | Décision | Justification |
|---|---|---|
| Type de fiche | **Établissement hybride** : adresse 82 impasse de Bellevue, 73000 Bassens visible **+** zones de service déclarées | Masquer l'adresse ferait perdre le seul ancrage géographique fort de l'agence. Elle est déjà publique dans le JSON-LD |
| Catégorie principale | **Concepteur de sites Web** | Capte le volume de requêtes commerciales le plus large. C'est le facteur de pertinence le plus puissant de la fiche |
| Secondaire 1 | **Développeur de logiciels** | Couvre SaaS, applications métier, outils internes — la partie la plus rentable de l'offre |
| Secondaire 2 | **Service de référencement (SEO)** ou **Consultant en marketing Internet** | Couvre SEO et Ads sans diluer |
| Secondaire 3 | **Agence de publicité** — optionnelle | À n'ajouter que si Google Ads devient une ligne de revenu affichée. Google sanctionne le *category stuffing* : deux à trois secondaires, pas neuf |
| Zones de service | Bassens, Chambéry, Aix-les-Bains, Le Bourget-du-Lac, La Motte-Servolex, La Ravoire, Albertville, Annecy, Annemasse, Cluses, Thonon-les-Bains, + Savoie et Haute-Savoie | Limite officielle : 20 zones, et l'ensemble ne doit pas dépasser environ 2 h de trajet depuis le siège. Depuis Bassens, les deux départements sont largement dans les clous |

**[À VÉRIFIER]** Les libellés exacts des catégories varient dans l'index français et
évoluent. À contrôler dans l'interface GBP au moment de la création, en tapant les termes.
Ne pas se fier à une liste de blog : les PDF de catégories FR qui circulent datent de 2021.

**Arbitrage tranché** : « Concepteur de sites Web » plutôt que « Développeur de logiciels »
en principale. L'objectif à 12 mois est le volume de leads ; l'*up-sell* vers le SaaS se fait
au closing, pas dans la requête.

**Ce qui marche réellement, par ordre d'effet**

1. **Les avis qui mentionnent une ville.** Un avis rédigé « Nous sommes une PME d'Annecy,
   Hagnéré Code a livré notre outil de suivi… » injecte un jeton géographique dans un contenu
   indexé et rattaché à la fiche. Levier n°1, gratuit, et très largement sous-exploité par la
   concurrence locale : Here We Com, agence installée depuis 2010, n'affiche aucun avis
   client sur son site **[VU]**. À orchestrer : demander l'avis au bon moment (livraison +
   deux semaines), suggérer — jamais dicter — de mentionner la ville et le type de projet.
2. **La récence et la cadence.** Deux avis par mois pendant douze mois valent bien mieux que
   vingt-quatre avis en un mois : le pic est un signal de spam. La récence est citée comme
   facteur montant en 2026 **[LU, Whitespark *Local Search Ranking Factors*, novembre 2025]**.
3. **Répondre à tous les avis**, positifs compris. Recommandation explicite de Google.
4. **Les signaux comportementaux** — clics vers le site, appels, demandes d'itinéraire. Ils
   se travaillent en amont, en envoyant du trafic vers la fiche.
5. **Les posts GBP réguliers**, avec un ancrage géographique honnête (« livraison d'un site
   pour un client à Albertville »). Effet réel sur l'engagement, aucun sur la distance.

**Les mythes à ne pas croire**

- **Les photos géolocalisées (EXIF GPS) ne fonctionnent pas.** Google supprime les
  métadonnées EXIF à l'upload. **[À VÉRIFIER une bonne fois]** : télécharger une photo depuis
  la fiche publiée et inspecter son EXIF. Le test prend cinq minutes et clôt le débat
  définitivement. Publier de belles photos reste utile — pour l'engagement, pas pour le GPS.
- **Le « rayon d'action » configurable n'existe pas.** Les zones de service sont des entités
  nommées, et **elles ne sont pas un levier de classement** : elles aident Google et les
  clients à comprendre la zone couverte, et contrôlent la carte affichée. Un réglage de
  support, pas un levier de croissance.
- **Une seconde fiche à Annecy, chez un partenaire ou dans un coworking** : suspension quasi
  certaine et perte de l'historique. À proscrire absolument.
- Le chiffre « la distance pèse 55 % du pack local » circule sur plusieurs blogs français. Il
  n'est confirmé par aucune source primaire. **Folklore SEO, pas donnée.**

### 7.2 Citations et annuaires — vérifiés un par un

| Prio | Cible | URL | Condition | Coût | Lien | Statut |
|---|---|---|---|---|---|---|
| **1** | **Annuaire régional des prestataires du numérique** — porté par Digital League et l'ENE avec la Région AURA et des fonds FEDER. C'est **l'annuaire que la CCI Savoie relaie** sous le nom « Annuaire des prestataires du numérique » | `auvergnerhonealpes.digital` | Exercer son activité en Auvergne-Rhône-Alpes. Formulaire en ligne, bouton « Me référencer gratuitement » | **Gratuit** | **`rel="nofollow"` — VÉRIFIÉ dans le HTML d'une fiche société le 18/07/2026.** Pas de jus | **[VU]** À faire quand même : citation NAP indexable sur un domaine institutionnel régional, coût nul |
| **2** | **Club des Entreprises de l'Université Savoie Mont Blanc** — ~100 membres entreprises, 1 000+ partenaires, ~35 ans d'existence | `club-entreprises.univ-smb.fr/devenir-membre/pourquoi-rejoindre-le-club/` | Adhésion association. Siège IAE Savoie Mont Blanc, 4 chemin de Bellevue, Annecy. 04 50 09 24 06 | Cotisation **[À VÉRIFIER — non publiée]**, mais **déduction fiscale de 60 %** (loi Mécénat, plafond 0,5 % du CA) | **DOFOLLOW vérifié** : `<a class="Member-url" target="_blank" rel="noopener">`, aucun `nofollow` sur la page. Page dédiée par membre | **[VU]** **Meilleur ratio effort/valeur du dossier.** Double bénéfice : lien + accès direct au réseau industriel savoyard |
| **3** | **Digital League** — cluster numérique AURA, 430+ adhérents | `digital-league.org` | Adhésion cluster | **[À VÉRIFIER]** | Annuaire d'adhérents public, relayé sur la Plateforme IET | **[À VÉRIFIER]** Le site a bougé (URL d'adhésion en 404 le 18/07). Passer par le formulaire de contact |
| **4** | **CCI Savoie** — service numérique | `savoie.cci.fr` — 04 57 73 73 73, `numerique@savoie.cci.fr` | Prise de contact directe | Gratuit | La CCI ne tient pas d'annuaire propre de prestataires : elle **renvoie vers l'annuaire régional** ci-dessus | **[VU]** Intérêt réel : la relation, pas le lien. Les ateliers pratiques du numérique sont un canal de prescription |
| **5** | **French Tech Alpes** | `ftalps.com/company/{slug}/` | Adhésion écosystème | **[À VÉRIFIER]** | Pages membres dédiées confirmées (HTTP 200), mais le lien sortant est injecté en JS — valeur SEO incertaine | **[À VÉRIFIER]** Vaut pour la visibilité écosystème et le réseau, pas pour le lien |
| **6** | **Réseau Entreprendre Savoie** — 193 rue du Pré Demaison, Chambéry | `reseau-entreprendre.org/savoie/` | Lauréat (prêt d'honneur) ou membre / partenaire | Adhésion | **[À VÉRIFIER]** | Fort intérêt réseau : ce sont des dirigeants de PME savoyardes en croissance, c'est-à-dire la cible exacte |
| **7** | **Cluster Montagne** (216-235 adhérents) et **Mont-Blanc Industries** (320+ adhérents) | `cluster-montagne.com/adherents/entreprises-2` · `montblancindustries.com` | **[À VÉRIFIER — éligibilité]** : ces clusters fédèrent des industriels et des aménageurs. Une agence web est prestataire *de* la filière, pas membre *de* la filière | Cotisation | Annuaires d'adhérents publics | **[À VÉRIFIER en priorité.]** Si éligible, Mont-Blanc Industries est le meilleur point d'entrée possible sur la vallée de l'Arve |
| **8** | **Chambéry-Grand Lac Économie** — 16 avenue Lac du Bourget, Le Bourget-du-Lac. Gère Savoie Technolac, Savoie Hexapôle, Les Sources, l'incubateur et les pépinières | `chambery-grandlac.fr` | Prise de contact | Gratuit | **[À VÉRIFIER]** | Prescripteur direct sur le technopôle. Prioritaire avant d'ouvrir la page Le Bourget-du-Lac |
| **9** | **Thésame Innovation** (Annecy) — 20 experts, 300 consultants partenaires | `thesame-innovation.com` | Partenariat | — | **[À VÉRIFIER]** | À traiter comme une **piste de partenariat** autant que de lien : leur audience est le tissu PME industriel du 74 |
| **10** | **WebAnnecy** — annuaire local gratuit | `webannecy.com/74/annuaire-entreprise/` | Inscription ouverte | Gratuit | **[À VÉRIFIER]** | Valeur SEO faible, coût nul. À faire en dernier, en même temps que le nettoyage NAP |

**Écarté après vérification : l'annuaire de Grand Chambéry** (`grandchambery.fr/tous-les-annuaires`).
Contrôlé le 18/07/2026 : il référence des professionnels de la rénovation énergétique, des
architectes, des bureaux d'études, des vélocistes partenaires et des plans de mobilité
employeur. Aucune catégorie numérique, aucun formulaire d'inscription visible. **[VU]** Pas
de piste ici.

**Règle NAP absolue** : avant la première inscription, figer le triplet exact — raison
sociale, adresse au caractère près, numéro de téléphone unique — et ne plus jamais en dévier,
sur aucun annuaire, aucune fiche, aucun pied de page. Une incohérence NAP se propage
silencieusement et se corrige très mal.

### 7.3 Presse économique locale

C'est le canal de backlink le plus qualifié et le plus sous-estimé du dossier : ce sont des
domaines institutionnels, éditorialisés, sur exactement le bon territoire.

| Média | Ce que c'est | Angle d'entrée | Contact |
|---|---|---|---|
| **ECO Savoie Mont Blanc** (Groupe Ecomédia) | Hebdomadaire économique de référence des deux Savoie. 100 % en ligne, ~45 000 lecteurs CSP+ (dirigeants, cadres, institutionnels). Couvre aussi l'Ain et la Suisse romande (Genève, Vaud). Édition n°29 du 17/07/2026 **[VU]** | Création d'entreprise, nomination, nouveau service, chiffre marquant. Le média publie régulièrement des brèves d'entreprise et des levées de fonds | `digital@groupe-ecomedia.com` · 04 50 33 35 35 **[VU]** |
| **L'Essor Savoyard** (groupe Le Messager / Rossel) | Hebdomadaire depuis 1945, tous les jeudis. Bassins **Annecy, Aix-les-Bains et Chambéry** — le recoupement territorial est excellent. Rubrique « initiatives d'entreprises » **[VU]** | Une actualité concrète et locale, pas un communiqué générique | Via `lemessagermedias.fr` |
| **Le Journal des Entreprises — Auvergne-Rhône-Alpes** | Titre national à édition régionale, très lu par les dirigeants industriels. Couvre régulièrement AIXAM, le thermalisme régional, la vallée de l'Arve **[VU]** | Angle sectoriel : la numérisation des PME industrielles, par exemple | Formulaire rédaction |
| **Le Dauphiné Libéré** — éditions Savoie / Haute-Savoie | Quotidien de référence, forte autorité de domaine | Angle territorial ou événementiel | Correspondants locaux |

**La méthode, en une phrase** : ne jamais proposer un communiqué. Proposer un **fait** —
un chiffre, un cas, une prise de position argumentée sur un sujet que la rédaction couvre
déjà. Les 23 guides sont la matière première idéale : « ce que coûte réellement un site
internet pour une PME savoyarde, chiffres à l'appui » est un sujet qu'un hebdomadaire
économique local publie volontiers, et il pointe naturellement vers un actif du site.

**Objectif réaliste à 12 mois** : deux à quatre citations presse, dont au moins une avec lien.
Pas dix. Une citation dans ECO Savoie Mont Blanc vaut plus que trente inscriptions
d'annuaire.

### 7.4 Écosystème — priorité basse en SEO, haute en commercial

BNI Chambéry Business Savoie, Club Win or Win Chambéry, Synergie Club Savoie, CJD, Dynabuy.
Aucune valeur SEO directe. Valeur commerciale potentiellement forte, et surtout : **c'est là
que se trouvent les premiers clients locaux nommables** — donc les preuves qui débloquent les
vagues 2 et 3 de ce plan. À traiter comme un investissement de prospection, pas de
référencement, mais à ne pas repousser : sans client local, tout le calendrier glisse.

### 7.5 Priorisation en une ligne

> Fiche GBP validée → NAP figé → annuaire régional AURA (gratuit) → Club des Entreprises USMB
> (le seul dofollow vérifié) → Chambéry-Grand Lac Économie → un premier client local nommable
> → une citation presse. **Dans cet ordre.** Tout le reste est optionnel.

---

## 8. Calendrier de production sur 12 mois

> ⚠️ **CORRECTION DU 19 JUILLET 2026 — le frein d'origine était faux.**
>
> Ce plan conditionnait initialement la publication de nouvelles pages locales
> à l'obtention d'avis Google et d'impressions sur les pages existantes.
> **Vérification faite en sources primaires Google, ce prérequis n'existe pas
> et reposait sur une confusion de ma part entre deux systèmes de classement
> distincts :**
>
> - le **pack local / Maps** classe des **fiches d'établissement** — Google y
>   documente les avis comme facteur de « proéminence »
>   ([support.google.com/business/answer/7091](https://support.google.com/business/answer/7091)) ;
> - les **résultats organiques** classent des **pages** — aucun système de
>   classement web documenté par Google n'utilise les avis d'une fiche
>   ([guide des systèmes de classement](https://developers.google.com/search/docs/appearance/ranking-systems-guide)).
>
> Une page de ville se positionne en organique **sans aucun avis**. Les deux
> chantiers — fiche d'établissement et pages locales — se mènent donc **en
> parallèle, sans dépendance**.
>
> **Le vrai critère de cadence n'est pas le temps ni les avis : c'est la
> matière disponible par ville.** Les politiques anti-spam de Google visent
> deux comportements nommés, et aucun n'est une question de délai — les pages
> ville qui ne sont qu'un sas « renvoyant les utilisateurs vers une seule
> page » (*doorway abuse*), et la production en masse de quasi-doublons
> (*scaled content abuse*).
> Voir [spam-policies](https://developers.google.com/search/docs/essentials/spam-policies).
>
> Calibrage utile : les cas de sanction documentés se situent entre 100 et
> 1 300 pages. À une dizaine de pages écrites à la main, le risque est
> négligeable — la prudence initiale de ce plan était disproportionnée.

Cadence plafond : **une page locale toutes les deux semaines** — non par
précaution algorithmique, mais parce que c'est le rythme auquel on peut
réunir une matière locale réelle par page.

**Les deux tests à passer avant chaque publication** (ils remplacent
l'ancien frein) :

1. **Test de destination.** L'offre, les preuves et le formulaire sont *sur*
   la page. Si elle se contente d'introduire puis renvoie vers `/services`
   ou `/contact`, c'est littéralement l'exemple cité par Google — ne pas
   publier.
2. **Test de substitution.** Remplacer le nom de la ville par celui d'une
   autre. Si le texte reste valable mot pour mot, la page n'a pas de raison
   d'exister. Minimum non substituable exigé : 2 à 3 réalisations ou clients
   nommés de la zone, une donnée de marché locale, le mode d'intervention
   concret.

Les impressions restent l'indicateur de **pilotage** (section 10) — elles ne
sont plus une **condition** de publication.

### Vague 0 — Fondations (août 2026) · 0 page publiée

| # | Action | Livrable |
|---|---|---|
| 1 | Créer et faire valider la fiche Google Business Profile | Fiche validée, catégories arbitrées, 10 zones de service, 8 photos réelles |
| 2 | Figer le NAP et corriger l'e-mail public | Triplet unique documenté, e-mail sur le domaine hagnere-code.ai |
| 3 | Corriger le JSON-LD `#business` dupliqué (`src/app/contact/page.tsx`) | Une seule déclaration, sur l'accueil. Lyon et Grenoble retirés d'`areaServed` |
| 4 | Créer `src/lib/local-pages.ts` et brancher le sitemap | Registre vide mais opérationnel, test structurel vert |
| 5 | Inscription à `auvergnerhonealpes.digital` | Fiche en ligne |
| 6 | Appeler le Club des Entreprises USMB (04 50 09 24 06) | Tarif connu, décision d'adhésion prise |
| 7 | Mesurer les volumes de recherche sur les 12 couples ville × service | Arbitrage définitif de la short-list |
| 8 | Relever manuellement le pack local sur google.fr géolocalisé Chambéry puis Annecy | Nombre d'avis des 8 concurrents principaux |

**Objectif mesurable de la vague** : fiche GBP validée, deux citations obtenues, zéro
divergence NAP, volumes de recherche connus. **Aucune page publiée.** Une page locale
publiée avant que la fiche GBP existe est une page sans ancrage.

---

### Vague 1 — L'ancrage (septembre-octobre 2026) · 3 pages

Ordre exact, une page toutes les deux semaines :

1. **`/agence`** — pilier territorial. Adresse visible au premier écran, photo réelle du
   lieu, section « jusqu'où nous nous déplaçons » qui désamorce l'objection de distance.
2. **`/agence/savoie`** — pilier départemental 73. Section budget avec les aides AURA
   réellement actives et les offres locales à 490-999 € nommées, qui renvoie vers les guides
   prix.
3. **`/agence/savoie/chambery`** — hub siège, la page la plus profonde du site. Seule ville
   avec adresse réelle et une référence locale publiable — Hagnéré Patrimoine, cabinet de
   gestion de patrimoine à Chambéry — **dont le lien capitalistique avec le groupe doit être
   mentionné explicitement sur la page**. Une preuve déclarée vaut mieux qu'une preuve
   maquillée.

En parallèle : poser les 8 liens éditoriaux depuis les guides (section 5.3), et l'entrée
« Notre agence en Savoie » dans le mega-menu.

**Objectif mesurable** : les 3 pages indexées sous 30 jours (contrôle Search Console) et
`/agence/savoie/chambery` recevant des impressions sur au moins une requête contenant
« Chambéry ». Pas de position visée — des impressions.

---

### Vague 2 — Le second département et les deux angles forts (novembre 2026 – janvier 2027) · 4 pages

**Condition de déclenchement** : au moins un client signé hors Chambéry, **ou** au moins une
étude de cas locale publiée sur `/realisations/`.

4. **`/agence/haute-savoie`** — pilier départemental 74. Angle : décolletage, mécatronique,
   frontalier genevois, agroalimentaire.
5. **`/secteurs/industrie-decolletage`** — publiée **avant** la page Cluses, délibérément.
   C'est la page la moins risquée et la plus rentable du plan : 85 % de contenu unique, une
   verticale nationale, aucune dépendance à une preuve locale, et elle prépare le terrain
   pour Cluses.
6. **`/agence/savoie/aix-les-bains`** — le brouillon de la section 4 est déjà écrit.
7. **`/agence/savoie/le-bourget-du-lac`** — angle Savoie Technolac. À ne publier qu'après un
   contact établi avec Chambéry-Grand Lac Économie : la page cite leurs parcs, autant qu'ils
   sachent qui nous sommes.

**Objectif mesurable** : `/agence/savoie/chambery` en top 20 sur au moins une requête tête,
et la fiche GBP à 5 avis minimum, tous répondus.

---

### Vague 3 — Le déploiement Haute-Savoie (février – avril 2027) · 5 pages

**Condition de déclenchement** : `/agence/savoie/chambery` en top 10 sur au moins une requête
tête, mesurée en Search Console.

8. **`/agence/haute-savoie/cluses`** — angle décolletage, adossée à la page secteur.
9. **`/agence/haute-savoie/annemasse`** — angle transfrontalier genevois. Le SERP y est tenu
   à 100 % par des acteurs non locaux sur « référencement naturel ».
10. **`/agence/savoie/albertville`** — angle porte de la Tarentaise, marché tiré vers le bas
    par du 500 € HT : différenciation par le haut.
11. **`/secteurs/hotellerie-montagne`** — le puits. Sans elle, la pression commerciale finit
    par produire une page Courchevel, puis Megève, puis Val Thorens.
12. **`/agence/haute-savoie/annecy`** — **en dernier de la vague, et c'est délibéré.** C'est
    la requête la plus disputée du dossier, avec le seul concurrent régional qui tient déjà
    l'angle technique (Annecy-Dev, Next.js + Lighthouse ~100). On l'attaque quand le domaine
    a de l'autorité, pas en ouverture.

**Objectif mesurable** : au moins 3 pages locales avec des impressions régulières, au moins
une page locale ayant généré un lead identifié, et zéro page à 0 impression à 90 jours.

---

### Vague 4 — Les feuilles et les compléments (mai – juillet 2027) · jusqu'à 6 pages

**Condition de déclenchement, page par page** : le hub de la ville concernée reçoit **déjà**
des impressions sur la requête service correspondante. Sans ça, la feuille ne s'ouvre pas.

13. `/agence/savoie/chambery/publicite-en-ligne` — le plus gros trou du 73 : la SERP « agence
    Google Ads Chambéry » est quasi intégralement tenue par du programmatique hors zone, et
    aucune agence savoyarde ne revendique le SEA comme métier principal.
14. `/agence/savoie/chambery/referencement-google`
15. `/agence/haute-savoie/annecy/saas-applications-metier`
16. `/agence/savoie/chambery/saas-applications-metier`
17. `/agence/haute-savoie/thonon-les-bains` — ville, pas feuille. Dernière de la file : trois
    vrais acteurs locaux installés y défendent le terrain.
18. `/secteurs/entreprises-transfrontalieres-geneve` — uniquement si l'angle frontalier a
    produit des leads depuis Annemasse.

**Objectif mesurable de fin de cycle** : 18 URL locales maximum, un ratio d'au moins une
preuve locale (client nommé, cas publié, avis géolocalisé, citation presse) pour quatre pages
locales, et une part identifiable du flux de leads attribuable à la branche locale.

### Récapitulatif

| Vague | Période | Pages | Cumul | Condition |
|---|---|---|---|---|
| 0 | août 2026 | 0 | 0 | — |
| 1 | sept.–oct. 2026 | 3 | 3 | Vague 0 close |
| 2 | nov. 2026 – janv. 2027 | 4 | 7 | 1 client hors Chambéry ou 1 cas local publié |
| 3 | févr.–avr. 2027 | 5 | 12 | Chambéry en top 10 sur 1 requête tête |
| 4 | mai–juil. 2027 | ≤ 6 | ≤ 18 | Impressions constatées, page par page |

Plafond dur à ne jamais franchir : **25 URL locales**.

---

## 9. Mesure

### 9.1 Les indicateurs, et où les lire

| Indicateur | Où | Fréquence | Ce qu'il dit |
|---|---|---|---|
| **Impressions par page locale** | Search Console → Performances → filtre par page | Hebdo | Le seul indicateur qui compte les 90 premiers jours. Une page à 0 impression n'existe pas pour Google |
| **Requêtes déclenchantes par page locale** | Search Console → Performances → filtre page + onglet Requêtes | Bi-mensuel | Dit si la page capte bien **sa** ville, ou si elle capte les requêtes d'une autre page (cannibalisation) |
| **Position moyenne par page locale** | Search Console | Mensuel | À lire seulement après 90 jours. Avant, c'est du bruit |
| **Indexation** | Search Console → Pages → Indexation | À chaque publication | Une page locale non indexée à 30 jours est un signal de qualité, pas un bug technique |
| **Vues GBP (recherche / carte)** | Profil d'établissement → Performances | Mensuel | Sépare ce qui vient de la requête de marque de ce qui vient de la découverte |
| **Actions GBP** : appels, clics site, itinéraires | Profil d'établissement → Performances | Mensuel | Les signaux comportementaux, cités comme facteur montant |
| **Nombre et récence des avis** | Profil d'établissement | Mensuel | Cible : 2 avis/mois, régulièrement, sans pic |
| **Sessions organiques par page locale** | GA4 → filtre chemin `/agence/` et `/secteurs/` | Mensuel | Le trafic réel, pas les impressions |
| **Leads attribués à la branche locale** | Funnel `/demarrer-un-projet` + page d'entrée | Mensuel | **L'indicateur final.** Le reste est intermédiaire |
| **Ratio pages locales / preuves locales** | Comptage manuel | À chaque publication | Cible ≤ 4 pour 1. Au-delà, on ressemble à Boondooa |
| **Backlinks vers `/agence` et les pages locales** | Search Console → Liens | Trimestriel | Vérifie que les 8 liens éditoriaux depuis les guides produisent, et que les citations obtenues sont bien vues |

### 9.2 Les seuils qui déclenchent une correction de trajectoire

| Seuil franchi | Correction |
|---|---|
| **Une page locale à 0 impression après 90 jours** | **Auditer cette page — sans geler les suivantes** (voir la correction du 19/07/2026, section 8). Est-elle maillée depuis le pilier et le département ? Dans le sitemap ? Indexée ? Passe-t-elle le test de substitution ? Une page muette est un problème de cette page, pas un signal sur le domaine |
| **Plusieurs pages locales désindexées** | Là, en revanche, arrêter la production. C'est le signal précoce d'une dévaluation algorithmique pour contenu dupliqué — bien avant toute action manuelle. Vérifier aussi Search Console → Actions manuelles, libellé « Contenu de faible qualité, avec peu ou pas de valeur ajoutée » |
| **Une page locale indexée mais position moyenne > 30 à 6 mois** | Réécrire les blocs 2, 5 et 9, ou fusionner la page dans son pilier départemental. Une page qui ne prend pas au bout de six mois ne prendra pas en douze |
| **Deux pages locales captant les mêmes requêtes** | Cannibalisation. Désoptimiser la moins pertinente, ou fusionner |
| **Une page ville captant des impressions sur une autre ville** | Le contenu unique est insuffisant : le moteur ne distingue pas les deux pages. Réécrire |
| **Ratio pages locales / preuves locales > 4** | Arrêt de la production. On collecte des preuves avant de reprendre |
| **Moins d'un avis toutes les 6 semaines** | Le process de demande d'avis ne tourne pas. Le remettre en place avant toute autre action GBP |
| **Vues GBP en baisse 3 mois consécutifs** | Revoir la catégorie principale, les photos, la fraîcheur des posts |
| **Un lead entrant qui dit avoir hésité à cause d'une page peu crédible** | Signal qualitatif rare et précieux. Traiter comme un incident : lire la page à voix haute, corriger le jour même |
| **Une page locale ne générant aucun lead à 9 mois alors qu'elle reçoit du trafic** | Problème de conversion, pas de SEO. Revoir les CTA et le bloc preuves — pas le contenu SEO |

**Ce qu'on ne mesure pas, et qu'on ne promet pas** : une position. Ni en interne, ni au
client. Les objectifs de ce plan sont formulés en impressions, en indexation, en leads et en
preuves accumulées, jamais en rang.

---

## 10. Garde-fous

### 10.1 Les règles absolues

1. **900 mots uniques minimum par page ville**, dont 60 % dans les 40 % supérieurs de la
   page. Sous le seuil, on ne publie pas — on renonce ou on retourne chercher de la matière.
2. **Aucune page ne peut exister sans ses quatre éléments** : filière dominante nommée, 3 à 5
   entreprises ou institutions réelles, zones d'activité nommées, cas d'usage web ou logiciel
   propre à cette économie.
3. **Un seul `LocalBusiness` / `ProfessionalService` sur tout le domaine**, celui de
   Bassens, déclaré une seule fois, référencé partout ailleurs par `@id`. Jamais d'adresse
   par ville, jamais de numéro de téléphone par ville.
4. **NAP strictement identique partout** : site, JSON-LD, fiche GBP, annuaires, presse, pied
   de page, signature e-mail. Au caractère près.
5. **Aucun chiffre non sourcé ou non daté.** Un chiffre sans millésime est un chiffre faux en
   sursis. Millésime unique pour tout le site : recensement 2023, populations légales en
   vigueur au 1er janvier 2026.
6. **Aucun témoignage anonymisé par secteur.** Nominatif et vérifiable, ou rien.
7. **Toute page locale doit être atteignable en 3 clics depuis l'accueil**, via la navigation
   ou le corps de page — jamais depuis le seul pied de page.
8. **Toute page locale doit figurer dans le sitemap.** Le test structurel de
   `src/app/sitemap.test.ts` le garantit ; ne jamais contourner en ajoutant une route locale
   à `EXCLUDED_ROUTES`.
9. **Funnel lead-only.** Aucune page locale ne porte de simulateur, d'estimation en direct,
   de tarification calculée ni de balisage de prix. Renvoi vers `/tarifs`, formulaire,
   réponse manuelle sous 24 h ouvrées.
10. **Aucune promesse de position**, nulle part.
11. **Un lien capitalistique se déclare.** Citer Hagnéré Patrimoine comme référence
    chambérienne est légitime — le présenter comme un client extérieur ne l'est pas.
12. **Cadence maximale d'une page toutes les deux semaines**, et gel total si une page
    existante est à 0 impression à 90 jours.

### 10.2 Le test à appliquer avant chaque publication

**Le test des deux colonnes.** Mettre la page à publier côte à côte avec la page ville
existante la plus proche, et surligner tout ce qui diffère. **Si le surlignage se limite aux
noms propres, la page est une doorway page** — quel que soit son nombre de mots. On réécrit
ou on renonce.

Puis la liste de contrôle, dix points, tous obligatoires :

| # | Contrôle | Passe si |
|---|---|---|
| 1 | **Test de substitution** | Je remplace le nom de la ville par une autre ville du plan : au moins la moitié des phrases deviennent fausses ou absurdes |
| 2 | **Test des H2** | J'aligne les H2 de cette page et de la page ville voisine : les listes sont différentes, pas identiques à l'ordre près |
| 3 | **Test des sources** | Chaque chiffre a une source nommée et un millésime. Aucune exception |
| 4 | **Test de l'île** | La page est atteignable depuis la navigation, depuis son pilier départemental, depuis `/agence`, et elle est dans le sitemap |
| 5 | **Test du balisage** | Un seul `@id` `#business` sur tout le domaine. `areaServed` ne cite que des communes présentes dans le texte visible. `FAQPage` uniquement si la FAQ est locale |
| 6 | **Test de la preuve** | Soit une référence locale nommée et vérifiable, soit **rien**. Jamais de témoignage anonymisé |
| 7 | **Test du maillage** | 3 à 5 liens vers `/services/*`, 2 à 3 vers des guides, au maximum 2 vers des villes sœurs et chacun justifié dans la phrase. Total ≤ 18 |
| 8 | **Test des ancres** | Aucune ancre vers une page service nationale ne contient un nom de ville. Aucune ancre répétée |
| 9 | **Test du funnel** | Aucun prix calculé, aucun simulateur, aucun balisage `Offer.price`. CTA vers `/demarrer-un-projet` et `/rendez-vous` |
| 10 | **Test du lecteur local** | Un chef d'entreprise de cette ville lit la page : trouve-t-il une seule erreur factuelle ? Si oui, elle annule tout le reste |

**Le test n°10 est le plus important, et c'est celui qui se néglige.** Un lecteur aixois ne
lira pas les 2 000 mots de la page : il repérera le rang thermal faux, le nom de parc mal
orthographié ou l'entreprise citée qui a déménagé il y a trois ans — et il ne retiendra que
ça. C'est exactement la raison pour laquelle le brouillon de la section 4 ne publie pas le
rang d'Aix-les-Bains parmi les stations thermales françaises : deux sources consultées le
même jour donnaient deux rangs différents. Dans le doute, on retire le chiffre. La page est
un peu moins brillante, et elle reste vraie.

---

## Annexe — journal des vérifications du 18/07/2026

**Vérifié dans le code du dépôt :**
`src/app/page.tsx` et `src/app/contact/page.tsx` déclarent tous deux l'entité
`https://hagnere-code.ai/#business` avec des `areaServed` divergents · `src/lib/guides.ts`
contient 23 guides · `src/components/realisations/cases.ts` contient 4 cas, tous des entités
du groupe Hagnéré · `src/app/sitemap.test.ts` impose déjà que toute `page.tsx` figure au
sitemap · aucune route `/agence` n'existe à ce jour.

**Vérifié par curl et inspection HTML :**
le lien sortant d'une fiche société sur `auvergnerhonealpes.digital` porte
`rel="nofollow"` — annuaire utile comme citation, sans valeur de lien.

**Vérifié en source primaire (INSEE, dossier complet commune 73008) :**
Aix-les-Bains, 32 406 habitants (RP 2023), 1 177 établissements actifs fin 2024, 10 487
postes salariés fin 2024, 72,6 % d'établissements de 1 à 9 salariés, géographie au
01/01/2026.

**Vérifié en source primaire (Google) :**
les trois facteurs du classement local et la formulation de la proéminence
(`support.google.com/business/answer/7091`).

**Divergence non résolue, à ne pas publier en l'état :**
le rang d'Aix-les-Bains parmi les stations thermales françaises et son volume annuel de
curistes — deux sources consultées le même jour donnent « 4ᵉ, 29 000+ » et « 3ᵉ, 30 000+ ».
À trancher auprès du CNETh avec un millésime, ou à ne jamais écrire.
