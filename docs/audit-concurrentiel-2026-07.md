Verification complete. I found several audit findings are **stale or wrong** — which materially changes the plan. Here is the deliverable.

> **Complément du 19 juillet 2026 :** la profondeur quantitative constatée
> ci-dessous ne vaut pas validation éditoriale absolue. L'[audit humain de
> six guides](audit-qualite-guides-2026-07-19.md) a identifié puis corrigé
> des lacunes de pédagogie décisionnelle, de provenance, de neutralité et de
> conversion. Les conclusions d'autorité restent utiles ; les mentions
> « supérieur en profondeur » ne doivent pas être lues comme « parfait ».

---

# PLAN D'ACTION SEO — hagnere-code.ai
**18 juillet 2026 · Synthèse stratégique de l'audit marché FR + vérifications terrain**

> **Note de méthode.** L'audit fourni comporte des angles morts que j'ai pu lever en inspectant le dépôt et le site en production. Cinq de ses constats les plus structurants sont **périmés ou faux**. Je les corrige en §0 avant tout le reste, parce qu'ils changent l'ordre des priorités. Je distingue partout **[VÉRIFIÉ 18/07]** (constaté par moi aujourd'hui), **[AUDIT]** (repris de l'audit, non revérifié) et **[HYPOTHÈSE]**.

---

## 0. Corrections préalables — cinq constats de l'audit à écarter

L'audit conclut que « le goulot est l'indexation » et que « réparer l'indexation » est le prérequis absolu. **J'ai vérifié : il n'y a rien à réparer.**

| Constat de l'audit | Réalité vérifiée aujourd'hui | Conséquence |
|---|---|---|
| « Indexation cassée, à réparer (1 j de travail) » | **`robots.txt` en production est correct** : `Allow: /`, `Disallow: /api/`, `Sitemap:` déclaré. **`sitemap.xml` est en ligne et complet : 54 URLs dont les 23 guides.** Metadata `robots: index:true, follow:true`. Les pages guides sont **entièrement rendues côté serveur** **[VÉRIFIÉ 18/07]** | **Il n'existe aucun correctif technique à faire.** Si les guides ne sont pas indexés, la cause est la **demande de crawl** (zéro backlink), pas la configuration. On ne peut pas acheter de raccourci ici. |
| « Signaux E-E-A-T manquants : date et auteur — le différenciateur le moins cher » | **Déjà en place.** `prix-logiciel-sur-mesure` affiche « Mis à jour le 17 juillet 2026 » et « Écrit par Quentin Hagnéré, fondateur de Hagnéré Code » **[VÉRIFIÉ 18/07]** | Avantage **déjà acquis** sur 6 des 7 dominants. Rien à produire. Ne pas dépenser de temps dessus. |
| « Le chiffre en title tag, à la lafabriquedunet » | **Déjà en place.** Title réel : « Prix logiciel sur mesure 2026 : **5 000 à 250 000 €** · Hagnéré Code » **[VÉRIFIÉ 18/07]** | Le levier n°2 de l'audit est déjà appliqué. |
| « `/outils/estimer-mon-projet` contredit la règle lead-only » | **Déjà résolu.** La route est un `permanentRedirect` 308 vers `/demarrer-un-projet`, comme `/outils`, et les deux sont retirées du sitemap **[VÉRIFIÉ 18/07]** | Aucun arbitrage à prendre. Le snippet « estimateur en 5 min » vu par les moteurs est un **cache périmé**. |
| « Guides de 5 000-6 500 mots » | **~8 500-9 000 mots** sur le guide inspecté, FAQ 12 questions, tableaux, cas client nommé **[VÉRIFIÉ 18/07]** | L'écart de profondeur avec les concurrents est **encore plus large** que l'audit ne le dit. Ce qui renforce la conclusion : le déficit n'est pas éditorial. |

**Ce que j'ai confirmé en revanche :**
- **`backoffice.hagnere-code.ai/login` est bien indexé** — il remonte en 2ᵉ résultat sur le domaine **[VÉRIFIÉ 18/07]**. À traiter.
- **Conflit d'entité réel.** Title home : « Hagnéré Code — Développement SaaS, sites & outils sur mesure ». Description : « Studio à Chambéry : SaaS, applications métier… ». Face à cela, **23 guides sur 23** parlent sites, e-commerce, refonte, agence web **[VÉRIFIÉ 18/07]**.
- **Zéro page locale.** Aucune route `/agence-web-*` n'existe dans `src/app/` **[VÉRIFIÉ 18/07]**.
- **Le cache moteur du domaine est périmé et pollué** : le snippet renvoyé décrit « 183 guides fiscaux » et « Laravel 13 » — contenu qui n'existe nulle part sur le site actuel et qui ressemble à une contamination depuis une autre propriété Hagnéré **[VÉRIFIÉ 18/07]**. **[HYPOTHÈSE]** confusion d'entité au niveau du moteur.

> ⚠️ **Le seul point que personne ne peut trancher de l'extérieur : l'indexation réelle chez Google.** L'opérateur `site:` via un outil géolocalisé US est non fiable — il m'a renvoyé un cache manifestement périmé. **Search Console, rapport « Indexation des pages », est la seule source de vérité.** C'est l'action n°1, mais c'est une action de *mesure*, pas de réparation.

---

## 1. Ce que révèle l'audit

1. **Le goulot n'est ni éditorial, ni technique. Il est d'autorité pure.** La technique est propre, les 23 guides sont plus profonds que 100 % de ce qui ranke. Il ne reste que le manque de liens et de signaux — la seule chose qui ne s'écrit pas.
2. **Publier un 24ᵉ guide ne changera rien.** Le n°1 sur « comment choisir son agence web » fait 3 000 mots. La page tarifs de lafabriquedunet en fait 1 300 et bat des guides de 5 000. Vous en écrivez 8 500. **Vous perdez des SERP que vous dominez sur le fond.**
3. **Les dominants gagnent par une donnée que personne d'autre ne possède, pas par la profondeur.** Codeur expose les TJM de sa marketplace ; lafabriquedunet met « 683 budgets réels » dans le title ; Malt décline un baromètre en 40 URLs. Format prouvé trois fois indépendamment.
4. **Le vrai écart est le ratio actif/URL.** Vous produisez 1 actif → 1 URL. Ils produisent 1 actif → 40 URLs. À effort égal, rendement × 40.
5. **La donnée des dominants est mauvaise, et c'est votre angle.** Codeur publie un TJM médian à 135 €/j avec 4 420 prestataires à 70 € — un marché offshore/junior présenté comme *le* prix du développement en France. Un dirigeant qui budgète 40 000 € sur cette base se trompe de marché. Personne ne sert cet acheteur-là.
6. **Le local est le seul terrain où un domaine de 9 mois gagne en 2026.** Un template parisien dupliqué (siège 59 rue de Ponthieu) ranke sur « agence web Chambéry ». ABC3W ranke sans blog, sans page locale, sans avis. WeComeBack, 3 ans d'existence, est top 3 à Annecy avec **une** page.
7. **Et c'est un angle mort total.** L'adresse de Bassens, commune limitrophe de Chambéry, est sur le site ; au moment de l'audit, aucune fiche Google Business Profile ni citation locale n'était apparente.
8. **Les requêtes prix « tête » sont perdues pour 2-3 ans.** « Combien coûte un site internet » est tenue par l'État, Hostinger, Wise, le Crédit Agricole, HelloAsso. 7/10 tirent leur autorité d'ailleurs que du métier. Aucun volume de contenu ne comble ça.
9. **Mais les requêtes prix « queue » sont ouvertes maintenant.** « Prix logiciel sur mesure » : un top-5 tient en 1 200 mots citant Wikipédia et Ooreka. Et c'est votre panier le plus élevé (15 000-120 000 €).
10. **La SERP la plus faible de tout l'audit est aussi la mieux alignée : « agence next js ».** 10/10 pages service, zéro guide, et **un freelance solo avec 900 mots, zéro référence client et zéro logo tient le top 10**. Vous n'avez pas de page sur cette requête.
11. **Un format bat le guide long sur les requêtes « exemple/modèle » : le fichier `.docx`.** Mais 7 acteurs le servent déjà, dont France Num : nécessaire, plus différenciant.
12. **Ce que l'audit ne dit pas et qui est sa limite majeure : aucune donnée de volume de recherche.** Il indique où c'est *gagnable*, jamais où c'est *rentable*. Une SERP molle à 20 recherches/mois ne fait percer personne. **Tout ce plan doit être recroisé avec des volumes réels avant arbitrage définitif.**

---

## 2. Comment les dominants ont percé

### Le mécanisme réel, acteur par acteur

| Acteur | Ce qui le fait ranker vraiment | Reproductible ? |
|---|---|---|
| **codeur.com** (2006, 20 ans) | Racheté par Freeland en 2022, **réseau de 5 domaines**, 13,5 M visites organiques/an. Son contenu prix **n'est pas produit** : c'est un sous-produit gratuit de l'opération de la marketplace. Matrice `/prestataire/{spé}/tarif` × `/freelance/{ville}`, **re-datée automatiquement chaque mois** (« TJM relevé en juillet 2026 ») | ❌ **Non.** Pas de marketplace, pas de base. Mais ✅ **la faille est exploitable** : leur donnée décrit un marché low-cost et ne sert pas l'acheteur B2B |
| **lafabriquedunet.fr** (2013) | Template programmatique sur **20+ verticales**, `/agences/pages/agences-{métier}/tarifs`. **Le chiffre médian EST le title tag.** 1 300 mots, 4 tableaux, daté. Repris récemment par un ex-fondateur d'agence de 50 personnes, à plein temps **[AUDIT, non vérifié — 403]** | ⚠️ **En miniature.** Le principe (donnée → arborescence → chiffre en title) est copiable ; l'échelle non |
| **Malt** | Un jeu de données → `/barometre-tarifs/tech/developpeur-frontend`, `/backend`, `/fullstack`… **Cité comme source** par des tiers (rh-solutions) | ✅ **Oui, à petite échelle.** C'est le modèle du §4 rang 17 |
| **wpmarmite.com** (2011) | **Le cas le plus instructif.** Ni levée, ni marketplace, ni institution. Une personne nommée, 20 000 abonnés newsletter, un Discord, des passages Blog du Modérateur et podcast. **Son article Wix vs WordPress n'est pas à jour depuis juillet 2023 et tient toujours la SERP** | ✅ **Oui — et c'est le seul chemin sans budget.** Mais 9-18 mois minimum. **L'autorité de marque survit à l'obsolescence du contenu** |
| **sortlist.com** | **13 M€ levés**, presse FrenchWeb/Stratégies, palmarès annuel = aimant à liens par construction | ❌ Non. Mentionné pour calibrer : ce n'est pas un pair |
| **francenum.gouv.fr** | Autorité d'État | ❌ Non — mais ✅ **empruntable** via le programme Activateur (§5) |
| **octolio.io** (2021) | **~70 articles publiés en 48 h en octobre 2025, puis plus rien depuis 8 mois.** Title figé « (2024) », zéro source, zéro tableau. **Et il tient le top 5 sur « prix site vitrine » et « prix refonte »** | ✅ **La meilleure nouvelle de l'audit** : ces deux SERP se prennent sans autorité réelle. Le concurrent le plus facile à déloger |
| **amphibee.fr** | **2-3 articles/mois tenus sans interruption**, structure calée sur le cycle de vie du projet client | ✅ **Le modèle réplicable pour une agence de votre taille** |
| **aquilapp.fr** | ~5 articles/jour **[HYPOTHÈSE : IA]**, longue traîne sectorielle. Mais silo « données » mort depuis nov. 2024 et **antidaté 2026 sur du contenu 2023** | ⚠️ Volume sans capitalisation — contre-modèle |
| **lamarketerie.com** | Ranke sur **deux requêtes nationales** grâce à des pages géo-modulées Thonon/Évian + pages sectorielles | ✅ **Le levier le moins disputé et le plus rapide pour Chambéry** |

### La synthèse en trois lignes

- **Non reproductible :** l'ancienneté (13-20 ans), la marketplace, le capital, le `.gouv`.
- **Reproductible tout de suite :** la géo-modulation, l'arborescence à partir d'un actif unique, la régularité modeste tenue, la neutralité démontrable sur les arbitrages technologiques.
- **Reproductible mais lent (9-18 mois) :** la marque personnelle. C'est le modèle WPMarmite, et c'est le seul qui produise une autorité durable sans budget.

---

## 3. Diagnostic honnête de hagnere-code.ai

### Forces réelles

- **23 guides supérieurs en profondeur à tout ce qui ranke** — jusqu'à 9 000 mots, sourcés, FAQ 12 questions, JSON-LD Article/Breadcrumb/FAQPage, OG dédiées, maillage dense. **[VÉRIFIÉ]**
- **Les signaux E-E-A-T sont déjà tenus** : date de mise à jour visible, auteur humain nommé, chiffre dans le title. **6 dominants sur 7 ne les ont pas.** Avantage déjà en banque. **[VÉRIFIÉ]**
- **Base technique propre** : robots, sitemap complet, rendu serveur, redirections 308 propres. Rien à réparer. **[VÉRIFIÉ]**
- **Un angle que personne dans ces SERP ne peut prendre** : croiser prix × préservation du SEO × migration WordPress→Next.js. Aucun des 10 résultats sur « prix refonte » ne traite le risque SEO, qui est pourtant l'angoisse n°1 de l'acheteur. Amphibee est enfermé sur WordPress, les studios no-code sont juge et partie.
- **Ancrage local réel sur un marché faible** : 82 impasse de Bellevue à Bassens, commune limitrophe de Chambéry, avec une équipe en France, face à des concurrents sans blog et sans avis.
- **Un outil gratuit déjà en ligne** (`/outils/calculateur-cout-excel`) — le bon format, sous-exploité.
- **Panier élevé** : un seul lead SaaS à 15 000 € rentabilise un trimestre entier d'effort SEO.

### Faiblesses bloquantes

- **Zéro backlink connu. C'est le seul vrai problème, et il n'a pas de raccourci technique.**
- **Société créée le 30/09/2025 → ~9,5 mois.** Domaine `.ai` plus jeune encore.
- **Zéro fiche Google Business Profile apparente, zéro citation locale, zéro NAP hors site.**
- **Zéro page locale** alors que le marché local est le plus faible du corpus.
- **Zéro marque** : personne ne cherche « Hagnéré Code ». Le trafic de marque est nul par construction.
- **Conflit d'entité confirmé** : la home dit « studio produit SaaS », les 23 guides disent « agence web ». Google doit trancher, et son cache actuel est périmé et pollué.
- **`backoffice.hagnere-code.ai/login` indexé.**
- **Échantillon de devis probablement trop petit** pour un baromètre statistiquement défendable à 9 mois d'activité.
- **Trois âges contradictoires** circulent pour le domaine (3 / 9,5 / 12 mois). À trancher en interne : cela décale toutes les échéances ci-dessous.

### Ce qui va effectivement se positionner, et quand

Échéances comptées **à partir d'aujourd'hui**, sous réserve que Search Console confirme que les guides sont bien indexés. Si le rapport de couverture montre « détectée, actuellement non indexée » en masse, **tout glisse de 2 à 4 mois** et la priorité bascule encore plus vers les backlinks.

| Horizon | Ce qui se positionne | Réserve |
|---|---|---|
| **0-2 mois** | Requêtes de marque. Longue traîne ultra-spécifique déjà écrite (« migrer WordPress vers Next.js sans perdre le SEO »). | Volumes quasi nuls. C'est de l'accumulation, pas du trafic |
| **2-6 mois** | Aix-les-Bains, Savoie, Chambéry, « prix logiciel sur mesure », « no-code ou sur-mesure », « shopify ou sur-mesure », « agence next js » | Le local convertit vite mais amène un panier 3-10× inférieur au vôtre. Flux mixte à filtrer |
| **6-12 mois** | « Prix refonte », « comment choisir son agence web », « agence web ou freelance », « combien de temps », « cahier des charges » (si `.docx`), Annecy | Conditionné à l'existence de premiers backlinks |
| **2-3 ans, ou jamais** | « Combien coûte un site internet », « prix site e-commerce », « créer un site avec IA », « contrat création site internet », Lyon | Verrouillé par l'État, Wix, Shopify, les legal-tech et des agences de 20-30 personnes |

> **Attendu business honnête : 0 à 2 leads organiques sur les 90 prochains jours.** Ce trimestre construit l'autorité, pas le chiffre d'affaires. Les premiers leads crédibles arrivent au T2-T3, et ils viendront du local. **Quiconque promet mieux sur un domaine sans backlink se trompe ou ment.**

---

## 4. Roadmap reclassée par vitesse de positionnement

**Critère de tri : temps de positionnement d'abord, valeur du lead en départage.** Ce n'est pas un tri par volume de recherche — et aucun volume n'a été mesuré dans l'audit, ce qui reste sa limite majeure.

### 🚀 LES 5 PREMIÈRES ACTIONS — à lancer cette semaine

Le fait le plus révélateur de tout ce plan : **3 des 5 ne sont pas de la production de contenu.**

| # | Action | Effort | Pourquoi cette semaine précisément |
|---|---|---|---|
| **1** | **Search Console → rapport « Indexation des pages ».** Établir la vérité sur les 23 guides. `site:` est non fiable | 30 min | C'est une **mesure**, pas une réparation. Tout le séquencement en dépend, et personne ne peut y répondre de l'extérieur |
| **2** | **`noindex` + protection sur `backoffice.hagnere-code.ai`** | 30 min | Indexé aujourd'hui **[VÉRIFIÉ]**. Aucun bénéfice, expose la surface d'admin |
| **3** | **Trancher le `<title>` + description de la home** vers « agence web / développement sur mesure à Chambéry » | 1 h | Le cache moteur décrit encore « 183 guides fiscaux » et « Laravel 13 » **[VÉRIFIÉ]**. L'entité est illisible pour Google |
| **4** | **Google Business Profile — lancer la vérification postale** | 2 h + 5-14 j de délai | **Chemin critique.** Le courrier met deux semaines : chaque jour de retard décale le pack local d'autant |
| **5** | **Déposer le dossier Activateur France Num** | 2-3 h | Éligible depuis le **30 mars 2026** (> 6 mois d'activité). Référencement 24 h après validation DGE. Gratuit |

### Tableau des contenus à produire

| # | Sujet / slug | Type | Requête cible | Difficulté SERP | Conversion | Délai | Pourquoi cette place |
|---|---|---|---|---|---|---|---|
| 1 | `/agence-web-aix-les-bains` | Page locale | agence web / création site internet Aix-les-Bains | **Faible** | Forte | **2-4 mois** | La SERP est tenue à ~90 % par des pages programmatiques d'acteurs **non locaux** (NOIISE, Viaduc, Digital Unicorn, Blue Strat). Vous êtes à 15 km. Légitimité imbattable, effort minimal |
| 2 | **Modèles `.docx` + `.pdf` cahier des charges** (site + app), sans mur email | Ressource | cahier des charges site internet exemple / modèle word | Moyenne | Forte | **2-4 mois** | Les 2 guides sont écrits ; c'est le **format** qui manque. Sur cette requête l'intention est « donne-moi le fichier ». **Coût réel : 1 journée.** Réserve : 7 acteurs le servent déjà → nécessaire, pas différenciant |
| 3 | `/agence-web-chambery` | Page locale | agence web Chambéry | Faible-moyenne | **Très forte** | **3-6 mois** | Bassens est limitrophe de Chambéry et appartient à la même agglomération. Un **template parisien dupliqué** y tient la page 1 : si ça passe, vous passez. 7-8 acteurs réellement locaux sur 13 positions |
| 4 | `/creation-site-internet-savoie` | Guide local | création site internet Savoie | **Faible** | Forte | **3-6 mois** | Créative Altitude y ranke **avec un simple guide éditorial** — votre format natif, en mieux. Alimente les pages villes en maillage |
| 5 | `/agence-next-js` | **Page service** | agence next js | **Faible** | **Très forte** | **3-6 mois** | ⭐ La SERP la plus accessible du corpus : **10/10 pages service, zéro guide**, et un freelance solo à 900 mots sans référence client tient le top 10. Alignement parfait avec le stack. **Vous n'avez pas cette page.** Ne pas écrire un guide : la SERP ne veut que du service |
| 6 | `no-code-ou-developpement-sur-mesure` | Guide | no code ou développement sur mesure | **Faible** | Forte | **3-6 mois** | **Reclassé P3 → top 6.** Seule requête faible du corpus non couverte. 10/10 acteurs en conflit d'intérêts, meilleur concurrent 1 500 mots sans une donnée. Inclure « les 5 cas où nous refuserions votre projet » : la neutralité est ici un différenciateur mécanique |
| 7 | Enrichir `prix-logiciel-sur-mesure` (CAPEX/OPEX + données) | Enrichissement | prix logiciel sur mesure | **Faible** | **Très forte** | **3-6 mois** | Meilleur ratio difficulté × panier de tout l'audit (15 000-120 000 €). Le top-5 tient en 1 200 mots citant Wikipédia et Ooreka. 3/10 encore millésimés 2025. Seul `diagram.fr` aborde CAPEX/OPEX |
| 8 | Renforcer `shopify-ou-sur-mesure` | Enrichissement | shopify ou site sur mesure | **Très faible** | Forte | **3-6 mois** | La SERP ne contient **même pas de vrais comparatifs** — des pages service, un forum, une page produit Shopify. Ajouter un vrai « quand choisir Shopify » argumenté : personne ne le fait |
| 9 | Reconvertir `creer-un-site-avec-ia` → 3 pages longue traîne | Guides courts | limites d'un site fait par IA · refaire un site généré par IA · site IA et SEO | Faible | Moyenne | **3-6 mois** | La requête tête est imprenable (9/10 = les éditeurs eux-mêmes). **Problème de casting, pas de qualité.** Récupérer l'actif au lieu de le renforcer à perte |
| 10 | `transformer-excel-en-application` | Guide | transformer excel en application | Faible **[HYP.]** | Forte | **4-6 mois** | Déjà en réserve roadmap. **Fait pont direct avec `/outils/calculateur-cout-excel` déjà en ligne** et la page service outils internes : outil + guide + service = trio complet. SERP non auditée |
| 11 | `/agence-developpement-saas-sur-mesure` | Page service | agence développement saas sur mesure | Moyenne | **Très forte** | **4-8 mois** | 9 pages service + 1 listicle. Studios établis mais **aucun mastodonte**. Panier 15 000 €+ |
| 12 | Pages sectorielles Savoie (tourisme/hôtellerie, industrie, santé) | Pages | site internet hôtel Savoie, etc. | Faible | Moyenne-forte | **4-8 mois** | Pattern lamarketerie prouvé : géo × secteur. Terrain vide, effort faible par page |
| 13 | Éclatement des guides prix en sous-pages segmentées | Architecture | longue traîne prix par segment | Faible | Moyenne | **4-8 mois** | Application directe du constat n°4 : **1 actif → N URLs**. Le gisement est dans ce qui est déjà écrit, pas dans ce qui reste à écrire |
| 14 | `combien-coute-un-crm` | Guide | combien coûte un logiciel crm | Moyenne **[HYP.]** | **Très forte** | **6-9 mois** | Déjà P2 en roadmap. Angle sur-mesure vs licences, unique dans le corpus. Panier outils internes. SERP non auditée |
| 15 | Tableau de délais + variante locale sur `combien-de-temps-pour-creer-un-site` | Enrichissement | combien de temps pour créer un site internet (+ Savoie) | Moyenne | Moyenne | **6-9 mois** | Format prouvé (Madra : tableau Méthode × Délai × Implication en haut de page). **lamarketerie ranke sur cette requête précise avec une page locale** |
| 16 | `/agence-react` | Page service | agence react | Moyenne | Forte | **6-12 mois** | Plus dur que Next : 2 slots mangés par les annuaires (Sortlist, Feedbax), ESN installées, n°1 en exact-match domain |
| 17 | **Baromètre `/barometre/` + une URL par segment** | Étude / donnée propriétaire | prix réels par type de projet + citations | Moyenne | Forte | **6-12 mois** (crédibilité : immédiate) | Le format des 3 dominants, prouvé trois fois. **Le seul actif que personne ne peut copier.** Statique et daté → **compatible lead-only**. ⚠️ **Conditionné à un N crédible** : « d'après nos 12 devis » invite au ridicule |
| 18 | Enrichir `prix-refonte-site-internet` (angle risque SEO) | Enrichissement | prix refonte site internet | Moyenne | Forte | **6-12 mois** | **Octolio** (blog abandonné depuis 8 mois, title figé « 2024 », zéro source) y tient le top 5 → SERP molle. Vous êtes le seul à pouvoir croiser prix × SEO × migration : vous avez déjà les trois guides |
| 19 | Enrichir `choisir-son-agence-web` + grille de sélection téléchargeable | Enrichissement + ressource | comment choisir son agence web | Moyenne | **Très forte** | **6-12 mois** | 10/10 concurrents sont des **pairs de votre taille**, zéro institutionnel. Le n°1 fait 3 000 mots **et offre un CDC téléchargeable** : c'est l'aimant qui manque, pas le texte |
| 20 | Outil gratuit n°2 : vérificateur de plan de redirections | Outil | usage + citations | n/a | Moyenne (indirecte) | **6-12 mois** | Modèle EcoIndex : cité par **francenum.gouv.fr** et 5 sites d'agences. Critère de conception : *un concurrent aurait-il intérêt à faire ce lien ?* Si non, c'est un formulaire, pas un aimant |
| 21 | `/creation-application-metier-sur-mesure` | Page service | création application métier sur mesure | Moyenne | **Très forte** | **6-12 mois** | SERP mixte (agences + blogs), pas verrouillée. Panier élevé |
| 22 | Étude de cas méthodologique chiffrée « migration WordPress → Next.js » | Étude de cas technique | longue traîne + citations | Faible | Forte (funnel) | **6-12 mois** | Les études de cas classiques **ne rankent pas** — elles convertissent. Celle-ci est différente : méthode reproductible + courbes = contenu **citable**. **[HYPOTHÈSE]** : aucun exemple français probant trouvé |
| 23 | Enrichir `agence-web-ou-freelance` (grille de décision + TJM) | Enrichissement | agence web ou freelance | Faible | Moyenne | **6-12 mois** | 10/10 agences, meilleur concurrent 1 200 mots sans source. **Mais vous êtes juge et partie** : l'avantage vient de la neutralité démontrable, avec maillage vers `tjm-developpeur-web` |
| 24 | `/agence-web-annecy` | Page locale | agence web Annecy | Moyenne | Forte | **9-15 mois** | Marché plus dense (acteurs 2007-2009). Mais **WeComeBack, 3 ans, est top 3 avec une seule page de 2 500-3 000 mots + FAQ** : c'est faisable, plus tard |
| 25 | Régionaliser `aides-creation-site-internet` → Savoie/AURA seul | Enrichissement | aide création site internet Savoie | Faible | **Faible** | **3-6 mois** | Techniquement gagnable, **mais désalignement de qualification** : qui cherche 400-1 200 € de subvention n'est pas un client à 6 900 €. À garder **uniquement** comme aimant local. Ne jamais reprendre la version nationale |

---

## 5. Les leviers non éditoriaux, par rentabilité

**C'est ici que se joue la percée, pas dans le tableau précédent.** Le contenu est déjà produit et déjà supérieur ; ce qui manque ne s'écrit pas.

| # | Levier | Effort | Coût | 1ᵉʳ effet | Ce que ça rapporte réellement |
|---|---|---|---|---|---|
| **1** | **Search Console : établir la vérité sur l'indexation** | 30 min | 0 € | Immédiat | **Ce n'est pas une réparation, c'est un diagnostic.** La technique est propre **[VÉRIFIÉ]** : si les pages ne sont pas indexées, la réponse est « backlinks », et il faut le savoir tout de suite |
| **2** | **Google Business Profile** — catégorie « Concepteur de sites Web », zone Chambéry / Aix / La Motte-Servolex / St-Alban / Albertville | 2 h + 5-14 j postal | 0 € | **3-8 sem.** | Le meilleur rapport effort/résultat du plan. **[HYPOTHÈSE]** : le pack local n'est pas observable avec les outils disponibles, mais aucune des 6 agences testées n'affiche d'avis → terrain apparemment vide |
| **3** | **Activateur France Num** — éligible depuis le 30/03/2026 | 2-3 h | 0 € | **24 h** après validation DGE | Citation d'entité sur un `.gouv.fr` + trust de conversion. ⚠️ **Ne pas surestimer** : le statut `dofollow` n'a pas été vérifié, et sur ~5 000 activateurs la valeur de lien pure est probablement faible. Communication : le seul terme autorisé est « référencé » |
| **4** | **Trancher le positionnement d'entité** (title + description home) | 1 h | 0 € | 4-8 sem. | Vos deux signaux principaux se contredisent, et le cache moteur est périmé **[VÉRIFIÉ]**. Correction d'une ligne |
| **5** | **Citations locales** : CCI Savoie (annuaire prestataires du numérique), AURA Digital (Digital League + ENE), PagesJaunes, Sortlist | 1 j | 0-300 € | 2-8 sem. | **Sortlist et PagesJaunes rankent sur 5 des 8 requêtes locales.** Si on ne peut pas les battre à court terme, il faut y figurer. NAP strictement identique partout |
| **6** | **Avis Google — objectif 10 en 90 jours** | 15 min/client livré | 0 € | 4-12 sem. | Terrain vide constaté : ni Here We Com, ni ABC3W, ni WeComeBack n'en affichent. Différenciateur de conversion autant que de ranking |
| **7** | **Fiche prestataire Codeur.com** | 1 h | Variable | Immédiat | Capte « développeur web Chambéry » **sans y consacrer une page**. ⚠️ Marché low-cost : à traiter comme captation opportuniste, pas comme canal |
| **8** | **Dataset baromètre sur data.gouv.fr (CC-BY) + Zenodo (DOI)** | 1 j | 0 € | 2-6 sem. pour le lien | Lien `.gouv.fr` gratuit. ⚠️ **Leçon des Créavores** : ils ont fait exactement ça et obtenu **0 vue, 0 téléchargement, 1 réutilisation** — parce qu'ils n'ont pas construit la page publique. **Faire les deux, toujours** |
| **9** | **Outil gratuit désintéressé** | 3-8 j | 0 € | 6-12 mois | EcoIndex est cité par francenum.gouv.fr **et** par 5 sites d'agences concurrentes. Un simulateur de devis n'obtient jamais ça : personne ne fait de lien vers le tunnel de vente d'un concurrent |
| **10** | **Liens clients** : mention « site réalisé par » en pied de page sur chaque livraison | 5 min/projet | 0 € | 1-3 mois | Le backlink le plus naturel et le plus légitime qui existe. À contractualiser dès maintenant sur tous les nouveaux projets |
| **11** | **Presse et écosystème local** : Éco Savoie Mont Blanc, Le Dauphiné éco, incubateurs, écoles | 1-2 j par action | 0 € | 1-6 mois | **[HYPOTHÈSE — ces supports n'ont pas été audités.]** À tester sur un angle donnée : « une agence savoyarde publie les prix réels du développement web » |
| **12** | **Marque personnelle Quentin Hagnéré** : LinkedIn, podcasts, tribunes | 2-4 h/sem., continu | 0 € | **9-18 mois** | **Le levier le plus lent et le plus décisif.** Modèle WPMarmite : son article de 2023, non mis à jour, ranke encore grâce à la marque. C'est le seul actif qui ne se déprécie pas |
| **13** | Études de cas | 2-3 j pièce | 0 € | n/a en organique | **Convertissent, ne rankent pas.** À traiter comme la page qui transforme le lead, jamais comme un levier d'acquisition |

---

## 6. Ce qu'il faut arrêter ou dé-prioriser

**À arrêter net :**

1. **Écrire de nouveaux guides longs sur des requêtes tête.** Le rendement marginal est en chute libre. Vous écrivez 8 500 mots contre 1 300 chez celui qui vous bat. **Le problème n'a jamais été là.**
2. **« Combien coûte un site internet » / « tarif création site internet » / « prix site e-commerce » comme cibles tête.** 2-3 ans minimum. Les guides restent utiles en maillage et en preuve d'expertise — ne pas y remettre un euro.
3. **« Créer un site avec IA » sur la requête tête.** 9/10 résultats sont les éditeurs eux-mêmes, aucune agence n'y figure. Reconvertir en longue traîne (rang 9).
4. **`proprietaire-site-internet-code-source` (P3 roadmap) — à supprimer de la roadmap SEO.** Le trou est réel (n°2 daté 2012, 650 mots) mais l'intention est post-achat, la réponse tient en un paragraphe → **cible parfaite d'AI Overview**, qui absorbe le clic. À traiter comme une **section de `/methode` ou `/tarifs`** : c'est un argument de vente, pas un canal.
5. **Ne pas produire « contrat création site internet ».** 3 legal-tech + 3 cabinets d'avocats, **zéro agence de dev sur 10 résultats** — ce n'est pas un hasard, c'est un signal d'intention. Vous n'avez ni le produit ni la robe.
6. **Ne pas produire « arnaque création site internet ».** L'intention est « victime cherchant un recours » : le trafic converti va chez l'avocat. Et le risque de dénigrement est réel. Si vraiment : format strictement générique type « les 7 clauses qui doivent vous alerter dans un devis », sans jamais nommer personne.
7. **Ne pas produire de page nationale « aides / subventions ».** Le contenu périme en continu, France Num et les-aides.fr le maintiennent mieux et gratuitement, et le chercheur de 400-1 200 € n'est pas un prospect à 6 900 €.

**À dé-prioriser (utile, mais pas maintenant) :**

8. **Les guides prix P2/P3 restants** — `prix-referencement-naturel`, `prix-audit-site-internet`, `prix-landing-page`, `combien-coute-une-marketplace`, `combien-coute-un-mvp`. Pertinents, mais ils ajoutent 1 actif → 1 URL sur des SERP non auditées. **Ils passent après le local, les pages service techno et l'éclatement des guides existants.**
9. **Lyon et Grenoble avant 12 mois.** Équipes de 20-30 personnes, 10-20 ans d'ancienneté, réseaux nationaux qui déploient une page par métropole.
10. **« Développeur web Chambéry ».** C'est la SERP la plus faible de tout l'audit — des sous-domaines Netlify y rankent — mais l'intention est « freelance pas cher ». **Mauvais fit à 6 900 € minimum.** Y aller par une fiche Codeur, pas par une page.
11. **30 pages villes façon Boondooa** (Vougy, Thyez…). Contenu dupliqué, risque de pénalité, zéro bénéfice commercial. **5-6 pages substantielles valent mieux que 30 templatisées.**

**Pièges à ne pas ouvrir :**

12. **Aucun simulateur de prix.** Contredit la règle lead-only — et, indépendamment de la règle, **c'est mauvais SEO** : personne ne fait de lien vers le tunnel de vente d'un concurrent. EcoIndex prouve exactement l'inverse.
13. **Aucun baromètre avec un N ridicule.** Attendre un échantillon défendable, ou publier une méthodologie de fourchettes assumée comme telle. Un faux baromètre détruit plus de crédibilité qu'il n'en crée.
14. **Aucun glossaire** (cible AI Overview → CTR écrasé). **Aucun annuaire « meilleures agences »** (juge et partie).
15. **Ne pas reproduire le modèle octolio** : burst puis abandon. Le capital se déprécie. **Le rythme amphibee — 2-3 publications/mois tenues sans interruption — est le bon**, et il est soutenable.

---

## 7. Calendrier 90 jours (18 juillet → 16 octobre 2026)

### Quinzaine 1 · S1-2 — Déblocage et chemin critique (18-31 juillet)

- Search Console : rapport « Indexation des pages », soumission du sitemap, demande d'indexation manuelle des 10 guides prioritaires
- `noindex` + protection sur `backoffice.hagnere-code.ai`
- Arbitrage et correction du `<title>` + description de la home vers l'entité « agence web / développement sur mesure à Chambéry »
- **Création de la fiche GBP et lancement immédiat de la vérification postale** (chemin critique)
- Dépôt du dossier Activateur France Num
- Production des 2 fichiers `.docx` + `.pdf` cahier des charges, publiés sans mur email

> **Mesures :** nombre d'URLs réellement indexées connu (référence de départ) · fiche GBP en cours de vérification · dossier France Num déposé · 2 ressources téléchargeables en ligne

### Quinzaine 2 · S3-4 — Le local (1-14 août)

- Publication `/agence-web-aix-les-bains` (1 800-2 500 mots, FAQ 8-10, JSON-LD `LocalBusiness` + `FAQPage`, 2-3 références locales, maillage vers les guides)
- Publication `/agence-web-chambery`
- Citations : CCI Savoie, AURA Digital, PagesJaunes, Sortlist — **NAP rigoureusement identique**
- Démarrage des posts GBP hebdomadaires pointant vers les guides existants
- Mise en place de la clause « site réalisé par » sur tous les nouveaux projets

> **Mesures :** 2 pages locales publiées et indexées sous 10 j · 4 citations créées · NAP cohérent vérifié sur les 5 supports

### Quinzaine 3 · S5-6 — Le commercial à barrière basse (15-28 août)

- Publication `/agence-next-js` — **page service, pas guide** (10/10 de la SERP sont des pages service)
- Publication `/creation-site-internet-savoie` (guide local)
- Sollicitation systématique d'avis Google auprès de tous les clients livrés

> **Mesures :** premières impressions Search Console sur « agence web Aix-les-Bains » et « agence web Chambéry » (top 30 = bon signal à ce stade) · 3-5 avis Google

### Quinzaine 4 · S7-8 — Le trou de couverture et le panier haut (29 août-11 sept.)

- Guide `no-code-ou-developpement-sur-mesure` : tableau décisionnel **en haut de page**, chiffré, avec la section « les 5 cas où nous refuserions votre projet parce que le no-code suffit »
- Enrichissement `prix-logiciel-sur-mesure` : comparatif CAPEX/OPEX, tableaux, re-datation réelle

> **Mesures :** guide n°24 publié et indexé sous 7 j · `prix-logiciel-sur-mesure` re-daté avec `dateModified` réel

### Quinzaine 5 · S9-10 — Récupération d'actifs (12-25 septembre)

- Renforcement `shopify-ou-sur-mesure` : ajout d'un vrai « quand choisir Shopify » argumenté
- Reconversion `creer-un-site-avec-ia` en 3 pages longue traîne
- Publication `transformer-excel-en-application`, maillée avec `/outils/calculateur-cout-excel` et la page service outils internes

> **Mesures :** 4 nouvelles URLs longue traîne · trio outil + guide + service opérationnel sur le cluster Excel/outils internes

### Quinzaine 6 · S11-12 — La démultiplication (26 sept.-9 octobre)

- Éclatement des guides prix en sous-pages segmentées (modèle Malt : 1 actif → N URLs)
- Publication `/agence-developpement-saas-sur-mesure`
- Premières pages sectorielles Savoie (tourisme/hôtellerie en premier)

> **Mesures :** 45-60 URLs indexées · première impression sur une requête locale non marque

### S13 — Bilan et arbitrage baromètre (10-16 octobre)

- **Compter le N de devis réellement disponible.** Si N ≥ 40-50 : lancer le baromètre au T2 avec méthodologie publiée + dataset data.gouv.fr/Zenodo. Sinon : **reporter**, et publier à la place une méthodologie de fourchettes assumée comme telle
- Bilan chiffré : URLs indexées, impressions, clics, positions moyennes sur les 6 requêtes cibles, avis Google, leads
- Recroiser le tableau §4 avec de **vrais volumes de recherche** — c'est la donnée manquante de tout cet audit

> **Objectif 90 jours réaliste :** 45-60 URLs indexées · top 30 sur 2-3 requêtes locales · 8-10 avis Google · 2 citations institutionnelles (`.gouv.fr` + CCI) · **0 à 2 leads organiques**

---

## Ce qui reste hypothèse et doit être vérifié

1. **L'indexation réelle chez Google** — non observable de l'extérieur. `site:` m'a renvoyé un cache manifestement périmé (« 183 guides fiscaux », « Laravel 13 »). **Search Console seul fait foi.** Si le rapport montre « détectée, actuellement non indexée » en masse, tout le calendrier glisse de 2 à 4 mois et la priorité bascule encore plus fortement vers les backlinks.
2. **Aucun volume de recherche dans tout l'audit.** Il dit où c'est gagnable, jamais où c'est rentable. Un croisement Ahrefs/Semrush peut réordonner le tableau §4 — surtout entre les rangs 9 et 25.
3. **Aucune métrique de backlinks** sur les concurrents. Les jugements d'autorité sont déduits de l'ancienneté Wayback, des levées de fonds et de la nature des acteurs — jamais mesurés.
4. **`lafabriquedunet.fr` n'a jamais pu être lu** (HTTP 403 sur toutes les tentatives). C'est le concurrent le plus mal connu, et **[HYPOTHÈSE]** le plus sous-estimé : s'il est réellement repris par un ex-fondateur d'agence à plein temps, le classer « battable » est risqué. **À vérifier manuellement dans un navigateur.**
5. **Le pack local Google n'a pas pu être observé** — aucun outil disponible ne restitue les modules SERP. Toute la stratégie GBP repose sur un comportement standard supposé. **Vérification à faire par Quentin en 5 minutes : trois requêtes depuis un mobile à Chambéry.**
6. **Le statut `dofollow` des fiches Activateur France Num** n'a pas été vérifié.
7. **Trois âges contradictoires** circulent pour le domaine (3 / 9,5 / 12 mois). La société est immatriculée au 30/09/2025. À trancher : cela décale toutes les échéances.
8. **Les SERP non auditées** parmi les sujets proposés : `transformer-excel-en-application`, `combien-coute-un-crm`, `facturation-electronique-2026`. Leur classement au §4 repose sur l'alignement d'offre, pas sur une SERP observée.

**Sources vérifiées aujourd'hui :** [hagnere-code.ai/robots.txt](https://hagnere-code.ai/robots.txt) · [hagnere-code.ai/sitemap.xml](https://hagnere-code.ai/sitemap.xml) · [hagnere-code.ai/guides/prix-logiciel-sur-mesure](https://hagnere-code.ai/guides/prix-logiciel-sur-mesure) · fichiers locaux `src/app/robots.ts`, `src/app/sitemap.ts`, `src/app/layout.tsx`, `src/app/outils/estimer-mon-projet/page.tsx`, `src/lib/seo.ts`, `docs/roadmap-guides-seo.md`
