# Workflow maître en quatre passes pour les guides Hagnéré Code

> **Document opérationnel pour agents.** Ce fichier décrit la chaîne complète
> de création d’un guide, de la recherche initiale au contrôle final. Les quatre
> passes sont obligatoires, strictement séquentielles et exécutées sur **un seul
> guide à la fois**.

- Version : **21 juillet 2026**
- Projet : **Hagnéré Code**
- Domaine canonique : **https://hagnere-code.ai**
- Périmètre : `src/app/guides/<slug>/`, `src/lib/guides.ts`,
  `src/components/guides/`, `docs/research/<slug>.md`

---

## 0. Mission du document

Ce protocole sert à produire des centaines de guides sans industrialiser les
erreurs, les plans mécaniques, les faux faits ni la voix générée. Il conserve
le principe des quatre passes spécialisées :

1. **Création** : comprendre la demande, prouver les faits, choisir un angle,
   écrire et intégrer un premier guide complet ;
2. **Enrichissement et vérification** : auditer le brouillon, refaire les
   recherches et les calculs, corriger le fond et l’intégration ;
3. **Polish rédactionnel** : rendre l’ensemble clair, fluide, distinctif et
   immédiatement utile sans altérer les faits validés ;
4. **Anti-IA et contrôle final** : relire chaque section au niveau de la phrase,
   éliminer les automatismes de rédaction, puis figer et vérifier le résultat
   complet.

Une passe n’est pas une simple relecture de la précédente. Elle possède un
objectif, un périmètre, des livrables et une porte de sortie propres. **La passe
N+1 ne commence jamais avant la clôture écrite de la passe N.**

Ce document ne remplace pas les règles locales. Avant tout travail, l’agent lit
intégralement et applique, dans cet ordre :

1. `CLAUDE.md` ;
2. `docs/regle-or-vigilance-seo-publication.md` ;
3. `docs/charte-qualite-guides.md` ;
4. `docs/roadmap-guides-seo.md` ;
5. le présent document ;
6. `docs/research/_modele-guide.md` ;
7. les fichiers techniques réellement concernés.

En cas de conflit, l’ordre d’autorité est :

1. instruction explicite actuelle de l’utilisateur ;
2. sécurité, droit applicable et vérité vérifiable ;
3. `CLAUDE.md` ;
4. règle d’or de publication ;
5. charte qualité des guides ;
6. présent workflow ;
7. conventions observées dans les anciens guides.

Un guide existant peut montrer une convention de code. Il ne décide ni de
l’angle, ni du plan, ni du verdict, ni des chiffres du nouveau guide.

---

## 1. Résultat final attendu

Le lecteur est un dirigeant de TPE/PME, un commerçant, un artisan, un
indépendant ou un porteur de projet. Il maîtrise son activité, pas le langage
d’une agence, d’une DSI ou d’un cabinet de conseil.

Après lecture, il doit pouvoir répondre sans nouvelle recherche essentielle :

1. de quoi parle-t-on, en français courant ?
2. quelle option convient à sa situation, et laquelle ne convient pas ?
3. combien cela peut coûter, prendre de temps et mobiliser de personnes ?
4. quels risques, coûts cachés, dépendances et responsabilités anticiper ?
5. quelles preuves soutiennent les réponses ?
6. quelle action utile peut-il faire maintenant, même sans contacter Hagnéré
   Code ?

Le but est de produire la réponse la plus utile possible pour l’intention
visée. Il est interdit de promettre une première place, un délai d’indexation,
un nombre de demandes, une citation par une IA ou un résultat commercial non
mesuré.

Le succès éditorial ne se mesure pas au nombre de mots, de H2, de FAQ, de
tableaux ou de liens. Il se mesure à la qualité de la décision que le lecteur
peut prendre et à la solidité des preuves qui la rendent possible.

---

## 2. Stack et composition réelles du site

### 2.1 Stack actuelle

- Next.js **16.2.10**, App Router ;
- React **19.2.7** ;
- TypeScript 5 ;
- Tailwind CSS 4 et `@tailwindcss/typography` ;
- composants serveur par défaut, frontière `use client` au plus bas ;
- Vitest pour les tests ;
- déploiement de production sur Vercel ;
- chaîne Cloudflare/OpenNext disponible mais non active en production ;
- PostgreSQL Neon et Drizzle existent dans le projet, sans rôle normal dans la
  publication d’un guide.

La version réelle vient toujours de `package.json` et du lockfile au moment de
l’exécution. Ne jamais recopier une version depuis ce document sans la
revérifier.

### 2.2 Fichiers d’un guide

Un nouveau guide utilise normalement :

```text
docs/research/<slug>.md
src/app/guides/<slug>/page.tsx
src/app/guides/<slug>/opengraph-image.tsx
src/lib/guides.ts
```

Des liens entrants peuvent nécessiter des modifications ciblées dans d’autres
pages. Une ressource autonome ajoute ses propres fichiers et son registre ;
elle ne doit jamais être promise avant d’exister et d’avoir été testée.

### 2.3 Sources de vérité

| Élément                          | Source de vérité                                 | Consommateurs                                     |
| -------------------------------- | ------------------------------------------------ | ------------------------------------------------- |
| Métadonnées du guide             | `src/lib/guides.ts` (`GUIDES`)                   | page, hub, sitemap, `llms.txt`, tests             |
| Guides publiquement découvrables | `PUBLISHED_GUIDES`                               | hub, sitemap, `llms.txt`                          |
| Domaine canonique                | `src/lib/seo.ts`                                 | metadata, JSON-LD, sitemap                        |
| Indexation                       | `src/lib/search-indexing.ts` + `guideRobots`     | metadata robots, preview, production              |
| Mise en page d’un guide          | `src/components/guides/guide-layout.tsx`         | hero, auteur, contenu, sidebar, FAQ               |
| Blocs éditoriaux                 | `src/components/guides/guide-content-blocks.tsx` | sommaire, encadrés, tableaux, formule, CTA        |
| FAQ visible                      | `GuideFAQSection`                                | `<details>/<summary>` natifs, contenu dans le DOM |
| Sitemap                          | `src/app/sitemap.ts`                             | génération automatique depuis les registres       |
| Index `llms.txt`                 | `src/lib/llms.ts`                                | route `src/app/llms.txt/route.ts`                 |
| Recherche et décisions           | `docs/research/<slug>.md`                        | toutes les passes et la maintenance future        |

### 2.4 Contrat de page TSX

La page type est un **Server Component** `page.tsx` qui :

- récupère son entrée avec `getGuide("<slug>")` ;
- exporte un objet `metadata: Metadata` dérivé du registre ;
- appelle `robots: guideRobots(guide)` ;
- utilise `guideUrl(guide)` pour le canonical et les URL absolues ;
- publie uniquement les JSON-LD autorisés et fidèles au visible ;
- est enveloppée dans `<GuidesShell>` ;
- rend son contenu avec `<GuideLayout>` ;
- commence le corps par `<p className="lead">` ;
- utilise les composants existants lorsqu’ils conviennent ;
- transmet la FAQ visible via `faqItems`, sans second jeu de données ;
- possède une image sociale dédiée via `opengraph-image.tsx`.

### 2.5 Composants disponibles

- `GuideLayout` : hero, fil d’Ariane, auteur, date, points clés, article,
  sidebar, liens liés et FAQ ;
- `GuideToc` : sommaire explicite dont chaque `id` doit correspondre à un H2 ;
- `InfoBox` : précision, alerte ou décision réellement utile ;
- `GuideTable` : comparaison sémantique ; le composant rend des cartes complètes
  sur téléphone ;
- `FormulaBox` : formule ou calcul lisible ;
- `ComparisonGrid` : comparaison courte de deux options ;
- `GuideInlineCTA` : CTA éditorial adapté au guide ;
- `GuideFAQSection` : FAQ visible, native et sans JavaScript obligatoire.

Ne pas créer un nouveau composant parce qu’un texte pourrait être « plus
joli ». Le faire uniquement lorsqu’un besoin éditorial ou accessible n’est pas
couvert par les composants actuels, puis le tester.

### 2.6 Ce que les anciens prompts ne doivent jamais réintroduire

Les règles suivantes sont obsolètes ou incompatibles avec ce dépôt :

- pas de Laravel, Blade, `routes/web.php`, Pint ou `php artisan` ;
- pas de MDX ni de frontmatter : les guides sont des pages TSX et leur registre
  fournit les métadonnées ;
- pas de fichier maître Excel pour publier les guides ;
- pas de JSON-LD `FAQPage` ;
- pas de JSON-LD `HowTo` pour viser un résultat enrichi retiré ;
- pas de double FAQ « ASCII pour Google / français pour le lecteur » ;
- les accents, apostrophes et guillemets français sont normaux dans le contenu
  et les chaînes JSON-LD ;
- pas de densité de mot-clé imposée ;
- pas de minimum automatique de mots, H2, FAQ, tableaux, mentions de marque ou
  liens ;
- pas de trois CTA par réflexe : la sidebar existe déjà et la charte autorise
  au maximum un CTA éditorial principal dans le corps ;
- pas de `priority` ni de `changefreq` ajoutés au sitemap ;
- pas d’ajout manuel d’un guide dans `robots.txt`, le sitemap ou `llms.txt` ;
- pas de `wordCount` approximatif dans le JSON-LD ;
- pas de modification cosmétique de `dateModified` ;
- pas de promesse « top 1 », « indexé en X jours » ou « quatre fois plus cité
  par les IA » ;
- pas de note d’un détecteur d’IA présentée comme une preuve scientifique ;
- pas d’identité professionnelle, de qualification, d’effectif, d’ancienneté,
  de témoignage, de client ou de résultat inventé.

---

## 3. Machine à états des quatre passes

### 3.1 États autorisés

Chaque dossier `docs/research/<slug>.md` contient en tête un journal :

```md
## Journal des quatre passes

| Passe              | État           | Date | Fichier contrôlé | SHA-256 | Responsable | Blocages |
| ------------------ | -------------- | ---- | ---------------- | ------- | ----------- | -------- |
| 1. Création        | À faire        |      |                  |         |             |          |
| 2. Vérification    | Bloquée par P1 |      |                  |         |             |          |
| 3. Polish          | Bloquée par P2 |      |                  |         |             |          |
| 4. Anti-IA + final | Bloquée par P3 |      |                  |         |             |          |
```

États possibles :

- `À faire` ;
- `En cours` ;
- `Bloquée` ;
- `À reprendre` ;
- `Terminée — porte validée`.

À la fin de chaque passe, calculer l’empreinte du fichier principal :

```bash
shasum -a 256 src/app/guides/<slug>/page.tsx
```

La passe suivante vérifie que le hash d’entrée correspond au hash de sortie de
la passe précédente. Une modification intervenue entre les deux invalide la
porte et impose une revue du diff avant de continuer.

### 3.2 Règle de séquentialité

```text
PASSE 1 TERMINÉE
        ↓
PASSE 2 TERMINÉE
        ↓
PASSE 3 TERMINÉE
        ↓
PASSE 4 TERMINÉE
        ↓
PRÊT TECHNIQUEMENT / PRÊT POUR REVUE HUMAINE / PUBLIABLE
```

Il est interdit de :

- commencer la passe 2 sur un plan ou un article incomplet ;
- commencer la passe 3 tant qu’un chiffre, une source ou un calcul important
  reste douteux ;
- commencer la passe 4 avant que la structure et les transitions de la passe 3
  soient stabilisées ;
- publier entre deux passes ;
- déclarer une passe terminée en listant uniquement les actions lancées ;
- lancer plusieurs agents éditeurs sur le même fichier ;
- conserver un résultat d’audit seulement dans un transcript ou un dossier
  temporaire.

### 3.3 Retour arrière obligatoire

Une passe tardive peut révéler un défaut antérieur. Elle ne le « maquille » pas.

| Défaut découvert                                    | Retour obligatoire                                          |
| --------------------------------------------------- | ----------------------------------------------------------- |
| fait non sourcé, source contradictoire, calcul faux | Passe 2                                                     |
| intention dupliquée ou verdict à changer            | Passe 1, puis nouvelles P2 et P3                            |
| section inutile ou architecture incohérente         | Passe 3 ; retour P1 si la décision principale change        |
| phrase artificielle sans effet sur le fond          | Reste en passe 4                                            |
| metadata ou JSON-LD infidèle au visible             | Passe 2                                                     |
| CTA ou ressource inexistante                        | Passe 1 ou retrait immédiat de la promesse                  |
| défaut mobile structurel                            | Passe 2 pour le composant, passe 3 pour la forme éditoriale |

Après un retour, toutes les portes ultérieures repassent à `À reprendre`.

### 3.4 Travail avec plusieurs agents

Lorsque l’environnement et l’utilisateur autorisent le travail parallèle :

- les missions parallèles portent sur des axes indépendants et **en lecture
  seule** : demande/SERP, sources primaires, calculs, concurrence, clarté,
  contre-audit ;
- un seul orchestrateur lit les rapports complets, résout les contradictions,
  met à jour `docs/research/<slug>.md` et édite les fichiers ;
- les agents ne se citent jamais comme sources ;
- aucun agent ne valide seul son propre travail ;
- l’orchestrateur attend tous les rapports nécessaires avant la synthèse ;
- une recherche lancée n’est pas une recherche terminée ;
- la parallélisation n’est jamais une excuse pour dépasser le contexte, perdre
  les URLs ou mélanger les conclusions de plusieurs guides.

Pour un sujet simple, un seul agent peut exécuter les quatre passes dans des
tours séparés. Le nombre d’agents ne constitue jamais un critère de qualité.

---

## 4. Règles permanentes pendant les quatre passes

### 4.1 Zéro invention

Il est interdit d’inventer :

- témoignage, citation, avis, client, logo, référence ou résultat ;
- métrique de satisfaction, conversion, délai, budget, rétention ou trafic ;
- expérience vécue par Hagnéré Code ;
- architecture ou résultat interne d’un produit lié au groupe ;
- tarif, version logicielle, obligation, jurisprudence ou statistique ;
- date de publication ou de modification ;
- validation par un lecteur humain ;
- fonctionnalité d’une ressource, d’un outil ou d’un CTA.

Un exemple fabriqué pour expliquer est autorisé seulement s’il est annoncé dès
sa première occurrence comme **« exemple illustratif fictif »** ou **« scénario
fictif composite »**. Il ne devient jamais une preuve sociale. Ses hypothèses
précèdent le calcul et restent cohérentes partout.

### 4.2 Hiérarchie des sources

Pour chaque affirmation décisive, choisir la source la plus proche de la vérité
recherchée :

1. artefact de première main vérifiable et autorisé ;
2. texte officiel, tarif officiel, documentation officielle ou donnée publique
   primaire ;
3. étude primaire avec méthode, population, pays et période ;
4. standard ou benchmark reconnu avec périmètre lisible ;
5. recoupement de marché explicite et daté ;
6. contenu concurrent uniquement pour comprendre la demande ou vérifier ce que
   le lecteur rencontrera, jamais comme autorité finale si une source primaire
   existe.

Une réponse d’IA, un résumé de moteur, un snippet, un forum ou une publication
sociale ne sont pas des preuves suffisantes. Ils peuvent révéler une question à
vérifier, puis l’agent ouvre la source originale.

### 4.3 Fiche de preuve obligatoire

Chaque fait important est inscrit dans `docs/research/<slug>.md` :

| Affirmation | Source et passage | Nature | Périmètre | Date/consultation | Confiance | Emplacement visible | Conséquence lecteur | Fraîcheur |
| ----------- | ----------------- | ------ | --------- | ----------------- | --------- | ------------------- | ------------------- | --------- |

Une bibliographie générale ne suffit pas pour un prix, un taux, une obligation,
une version ou une statistique qui change la décision. Le lien ou la note doit
être identifiable au niveau de l’affirmation visible.

### 4.4 Les six questions de chaque chiffre

Pour chaque prix, pourcentage, durée, taux, volume, seuil ou économie, vérifier :

1. **combien ?**
2. **de quoi ?** — assiette, unité, population, fonction incluse ;
3. **dans quel sens ?** — au-dessus, en dessous, minimum, maximum, moyenne ;
4. **sur quelle période ?** — mensuel, annuel, horizon total, date de départ ;
5. **dans quel périmètre ?** — HT/TTC, France, profil, outil, offre, conditions ;
6. **sur quelle preuve ?** — source, formule, hypothèses, date.

Une inconnue reste `à confirmer`. Elle ne devient jamais zéro par silence.

### 4.5 Calculs

- refaire chaque calcul indépendamment ;
- montrer formule, unités, hypothèses, résultat et arrondi ;
- vérifier l’ordre de grandeur et, si possible, le calcul inverse ;
- rechercher chaque valeur répétée dans le guide et les pages liées ;
- distinguer coût de départ, coût récurrent, coût interne, migration,
  maintenance, évolution et sortie ;
- un TCO additionne chaque poste une seule fois sur un horizon explicite ;
- le gain net et le ROI ne sont pas synonymes ;
- le temps économisé ne devient de l’argent que si l’hypothèse de réaffectation
  ou de coût évité est expliquée.

Pour plusieurs calculs, créer un script reproductible dans un emplacement
approprié et le conserver si le résultat public doit pouvoir être maintenu.

### 4.6 Voix Hagnéré Code

- expert calme, honnête, concret ;
- « vous » de politesse ;
- réponse avant démonstration ;
- mots du dirigeant avant mots du prestataire ;
- une idée principale par phrase ;
- terme technique expliqué dans la phrase où il devient utile ;
- voix active et verbes précis ;
- reconnaissance des limites, mauvais fits et options moins chères ;
- aucun ton de vendeur pressant, d’avocat ou de rapport d’audit ;
- « nous » seulement pour une pratique ou une offre réellement attribuable à
  Hagnéré Code.

### 4.7 Typographie française

- guillemets français « » ;
- apostrophe typographique `’` dans la prose ;
- espaces françaises cohérentes avant `:`, `;`, `?`, `!` ;
- nombres et monnaies lisibles : `15 000 € HT`, `15 000 à 20 000 € HT` ;
- pourcentages : `25 %` ;
- dates lisibles : `21 juillet 2026` ;
- acronymes développés au premier usage ;
- noms de produits, sociétés et institutions recopiés depuis leur source.

La correction typographique ne doit pas casser les chaînes de code, les URLs,
les imports ou les expressions régulières.

### 4.8 SEO utile

- une intention principale et une décision principale ;
- `title`, H1, card title et description uniques, fidèles et naturels ;
- les repères de 50–60 caractères pour le title et 140–160 pour la description
  servent l’affichage, pas le classement ;
- la requête principale apparaît naturellement là où elle aide à comprendre ;
- aucun comptage de densité ;
- les H2 découlent des questions utiles ;
- les liens sont contextuels et descriptifs ;
- la FAQ recueille seulement les questions résiduelles ;
- les dates sont vraies ;
- le JSON-LD est le miroir du contenu visible ;
- `llms.txt` est un index complémentaire, pas un levier Google ;
- aucune optimisation destinée aux moteurs ne doit dégrader la page pour le
  lecteur.

### 4.9 Conversion honnête

- une action non commerciale doit rester possible ;
- le CTA principal décrit le résultat après clic ;
- la destination correspond au verbe : « Réserver » ouvre un agenda réel,
  « Décrire mon projet » ouvre le funnel ;
- la sidebar compte déjà dans la pression commerciale ;
- un seul `GuideInlineCTA` au maximum et seulement après une démonstration
  suffisante ;
- bon fit et mauvais fit sont explicites ;
- une ressource est autonome, testée, maintenable et utile sans donner son
  adresse e-mail ;
- aucune urgence artificielle ni promesse non contractualisée.

### 4.10 Git et environnement local

- inspecter `git status --short` avant de modifier ;
- le dépôt peut être sale : préserver les changements de l’utilisateur et ne
  pas réécrire un fichier sans avoir lu son état actuel ;
- ne pas restaurer, supprimer ou écraser des modifications sans autorisation ;
- ne pas commit ni push sans demande explicite ;
- ne pas lancer de migration destructive ;
- ne pas tuer ou redémarrer un serveur inconnu par réflexe ;
- ne pas neutraliser un test pour obtenir du vert ;
- séparer les défauts préexistants des défauts introduits par le guide.

---

# PASSE 1 — Création du guide

## 5. Objectif de la passe 1

Transformer un sujet en un guide complet, sourcé et intégré localement. La
passe 1 prend toutes les décisions structurantes : intention, angle, verdict,
plan, exemples, sources, action utile, CTA et composition TSX.

Elle ne cherche pas encore la perfection phrase par phrase. Elle doit produire
un article suffisamment complet et stable pour qu’un audit indépendant puisse
le contredire en passe 2.

## 6. Entrées obligatoires

L’agent réunit :

- sujet ou slug proposé ;
- entrée de roadmap ou justification hors roadmap ;
- intention de recherche pressentie ;
- offre ou service éventuellement relié ;
- pages voisines du site ;
- état du dépôt ;
- éventuelle fiche `docs/research/<slug>.md` existante ;
- accès autorisé aux sources actuelles.

Si le sujet n’est pas assez défini, l’agent remplit le brief avec des
hypothèses signalées. Il ne bloque la progression que si une décision manquante
changerait matériellement l’URL, l’intention, le public ou le résultat attendu.

## 7. Étapes de la passe 1

### P1.0 — Prévol et baseline

To-do :

- [ ] lire tous les documents obligatoires listés au début de ce workflow ;
- [ ] relever `git status --short` et la branche ;
- [ ] vérifier si le slug existe dans `src/lib/guides.ts`, `src/app/guides/`,
      `docs/research/` et la roadmap ;
- [ ] identifier les changements utilisateur dans les fichiers proches ;
- [ ] créer `docs/research/<slug>.md` depuis le modèle si nécessaire ;
- [ ] mettre `Passe 1 = En cours` dans le journal ;
- [ ] noter la date et le responsable de la synthèse.

Livrable : baseline courte dans le dossier de recherche.

### P1.1 — Brief lecteur et décision

Remplir sans jargon :

```text
Requête principale :
Lecteur précis :
Situation déclenchante :
Moment du parcours : comprendre / explorer / décider / sécuriser
Phrase réelle qu’il pourrait prononcer :
Décision principale après lecture :
Niveau de connaissance au départ :
5 questions indispensables :
3 objections ou craintes :
Mots ordinaires employés :
Termes d’expert à traduire :
Action utile sans contact :
CTA possible :
Hors périmètre :
Projet des 150 premiers mots :
```

Porte locale : une seule décision principale peut être formulée en une phrase.

### P1.2 — Déduplication et cannibalisation

Inspecter :

- roadmap ;
- registre `GUIDES` ;
- pages service ;
- guides partageant la requête, la situation ou la décision ;
- ressources et livres blancs proches ;
- Search Console si elle est disponible et si son usage est autorisé.

Créer le tableau :

| Page existante | Intention | Réponse actuelle | Différence nécessaire | Lien ou fusion |
| -------------- | --------- | ---------------- | --------------------- | -------------- |

Si environ 60 % de la réponse utile existe déjà, enrichir la page actuelle ou
redéfinir le sujet. Un nouveau mot-clé ne justifie pas une nouvelle URL.

Livrable : justification d’une URL distincte ou décision de ne pas créer.

### P1.3 — Observation de la demande et de la SERP

La recherche est datée et localisée. Observer assez de résultats pour
comprendre le marché de réponse, sans imposer mécaniquement dix pages si cinq
suffisent ou si des familles de résultats se répètent.

Relever :

- type de résultats dominants ;
- questions associées et formulations du lecteur ;
- réponse donnée dès l’ouverture ;
- architecture générale ;
- critères de comparaison ;
- chiffres et sources visibles ;
- exemples, calculateurs, modèles ou checklists ;
- limites reconnues ;
- CTA et conflit d’intérêt ;
- dates et fraîcheur ;
- angle mort empêchant encore une décision.

Ne pas copier un plan concurrent. Ne pas traiter les estimations d’un outil SEO
comme des volumes ou difficultés certaines. Si Google ou un site bloque, le
noter et poursuivre avec les sources accessibles ; ne pas contourner un captcha.

Livrable : carte concurrentielle synthétique et angle mort commun.

### P1.4 — Recherche de preuves

Construire la fiche de preuves avant le plan définitif. Selon le sujet :

- documentation officielle de l’éditeur ;
- prix et conditions commerciales officielles ;
- normes W3C, WCAG, documentation Next.js, React ou navigateur ;
- Google Search Central, Search Console ou documentation publicitaire ;
- CNIL, ANSSI, Légifrance, EUR-Lex, Service Public, impôts ou organismes
  compétents ;
- études primaires avec méthode ;
- artefacts et tests de première main autorisés ;
- pages publiques des produits du groupe, limitées à ce qui est visible.

Pour les sujets juridiques, fiscaux, sécurité, prix, versions, aides ou
fonctionnalités de logiciels, une recherche web actuelle est obligatoire.

Étiqueter les affirmations :

- `FAIT VÉRIFIÉ` ;
- `ESTIMATION ÉDITORIALE` ;
- `INTERPRÉTATION` ;
- `EXEMPLE ILLUSTRATIF FICTIF` ;
- `OFFRE HAGNÉRÉ CODE` ;
- `INCERTITUDE / À NE PAS PUBLIER`.

Livrable : fiche de preuves complète, contradictions visibles et liste de ce
qui ne doit pas être publié.

### P1.5 — Angle et architecture

Choisir l’architecture d’après la décision :

#### Guide de prix

- réponse courte avec hypothèses et année ;
- inclus, exclus et postes oubliés ;
- scénarios cohérents ;
- facteurs de variation ;
- coût total sur un horizon adapté ;
- méthode de comparaison des devis ;
- solution plus simple ou report du projet.

#### Comparatif

- critères définis avant le verdict ;
- options jugées à conditions égales ;
- cas où A gagne, où B gagne et où une troisième option gagne ;
- coûts de migration et de sortie ;
- conséquence organisationnelle ;
- verdict conditionnel par situation.

#### Méthode ou modèle

- résultat à produire ;
- étapes dans l’ordre ;
- responsable et critère d’acceptation ;
- exemple rempli ;
- temps, budget, informations nécessaires ;
- signaux d’alerte ;
- vraie ressource si la requête la promet.

#### Diagnostic, incident ou migration

- symptômes et urgence ;
- causes classées ;
- contrôles accessibles au dirigeant ;
- preuves à exiger du prestataire ;
- actions datées et responsables ;
- retour arrière ;
- indicateurs après intervention.

#### Juridique, conformité ou aides

- juridiction, date, entreprises concernées ;
- obligation, recommandation et pratique de marché séparées ;
- exceptions et zones grises ;
- source officielle primaire ;
- avertissement adapté ;
- aucun conseil personnalisé.

Comparer l’empreinte de trois à cinq guides voisins. Nommer au moins trois
différences de progression, d’ouverture, d’exemple, de format ou de sortie.

Livrable : angle, promesse démontrable, forme dominante et artefact signature.

### P1.6 — Plan annoté

Créer un plan où chaque section possède une fonction :

| Section | Question résolue | Preuve/exemple | Conséquence lecteur | Format |
| ------- | ---------------- | -------------- | ------------------- | ------ |

Règles :

- les 150 premiers mots reprennent la situation, expliquent le terme central,
  donnent la réponse courte et annoncent la décision ;
- chaque H2 reste compréhensible isolément ;
- la réponse précède l’historique ou la méthode ;
- une section sans réponse, preuve ou décision est supprimée ;
- les formats servent le contenu : prose pour expliquer, tableau pour comparer,
  liste numérotée pour agir, formule pour calculer, encadré pour alerter ;
- la FAQ ne reçoit que les questions résiduelles ;
- le CTA arrive après une valeur autonome suffisante ;
- les sources et limites apparaissent dans le parcours, pas comme un dépotoir
  final.

Livrable : plan annoté stable. C’est le dernier contrôle avant rédaction.

### P1.7 — Rédaction du brouillon complet

Rédiger dans l’ordre du raisonnement du lecteur :

1. lead de 150 mots maximum, adressé au lecteur ;
2. réponse courte ou encadré si cela améliore la compréhension ;
3. sommaire fidèle aux H2 ;
4. sections avec réponse, explication, preuve, conséquence et transition ;
5. alternatives et statu quo ;
6. exemple ou calcul seulement s’il réduit l’abstraction ;
7. décision finale ou action ;
8. CTA adapté ;
9. sources et limites ;
10. FAQ utile si des questions résiduelles subsistent.

Ne pas forcer le même mini-gabarit dans chaque H2. Le contenu doit respirer et
varier naturellement. Un tableau important est suivi d’une traduction dans la
vie du lecteur, sans imposer que chaque paragraphe commence littéralement par
« Concrètement ».

Livrable : contenu complet, sans placeholder éditorial.

### P1.8 — Exemples, calculs et ressources

- [ ] chaque exemple est réel et autorisé, ou explicitement fictif ;
- [ ] les hypothèses précèdent les résultats ;
- [ ] les calculs sont reproductibles ;
- [ ] les valeurs restent cohérentes partout ;
- [ ] le scénario ne fabrique ni client ni citation ;
- [ ] la ressource promise existe réellement ;
- [ ] la ressource a un format utile, un mode d’emploi, un exemple, une version,
      une date, des limites et des tests ;
- [ ] le lecteur peut conclure « ne pas investir maintenant ».

### P1.9 — Intégration Next.js

Créer ou mettre à jour :

1. `src/app/guides/<slug>/page.tsx` ;
2. `src/app/guides/<slug>/opengraph-image.tsx` ;
3. l’entrée de `src/lib/guides.ts` ;
4. les liens entrants réellement pertinents ;
5. le dossier de recherche.

Pour un guide neuf, ajouter par défaut :

```ts
editorialStatus: "ready-for-human-review",
```

tant que la porte éditoriale définie par la charte n’a pas été franchie.

Contrôles d’intégration :

- metadata dérivée du registre ;
- canonical `guideUrl(guide)` ;
- `guideRobots(guide)` ;
- OpenGraph et Twitter cohérents ;
- image dédiée 1200 × 630 ;
- JSON-LD `Article` et `BreadcrumbList` fidèles ;
- aucun `FAQPage`, `HowTo`, faux `Offer` ou `wordCount` estimé ;
- auteur et identité exacts ;
- H1 unique ;
- FAQ visible unique ;
- ancres du sommaire exactes ;
- liens vers sources originales ;
- un lien entrant contextuel au minimum ;
- pas d’édition manuelle du sitemap, de `robots.txt` ou de `llms.txt`.

### P1.10 — Autocontrôle de création

Effectuer un contrôle proportionné avant de livrer à la passe 2 :

```bash
git diff --check
npx eslint src/app/guides/<slug>/page.tsx \
  src/app/guides/<slug>/opengraph-image.tsx src/lib/guides.ts
npx tsc --noEmit
```

Les tests complets et le build final seront répétés en passe 4. Une passe 1 ne
peut toutefois pas être clôturée avec une erreur de syntaxe ou de type connue.

## 8. Porte de sortie de la passe 1

La passe 1 est terminée seulement si :

- [ ] intention et décision uniques ;
- [ ] cannibalisation résolue ;
- [ ] recherche datée et fiche de preuves exploitable ;
- [ ] contradictions consignées et aucune contradiction décisive masquée ;
- [ ] plan justifié, distinct des voisins ;
- [ ] guide complet dans `page.tsx` ;
- [ ] exemples et calculs vérifiables ;
- [ ] registre, metadata, JSON-LD, OG et maillage intégrés ;
- [ ] ressource et CTA réels ;
- [ ] ESLint ciblé et TypeScript sans défaut introduit ;
- [ ] dossier de recherche à jour ;
- [ ] hash SHA-256 enregistré ;
- [ ] `Passe 1 = Terminée — porte validée`.

### Rapport de sortie P1

```text
PASSE 1 TERMINÉE
Slug :
Décision principale :
Angle :
Fichiers créés/modifiés :
Sources décisives :
Calculs/exemples :
Action autonome :
CTA :
Risques ou inconnues transmis à P2 :
Commandes passées :
SHA-256 page.tsx :
```

---

# PASSE 2 — Enrichissement et vérification

## 9. Objectif de la passe 2

Traiter le guide comme potentiellement faux jusqu’à vérification. La passe 2
réexamine le contenu complet, les sources, les calculs, les promesses, le SEO
technique et la composition locale. Elle corrige le fond par modifications
ciblées et laisse une table de vérité maintenable.

Elle ne part pas du principe que la passe 1 a « déjà cherché ». Elle refait les
contrôles décisifs de manière indépendante.

## 10. Entrée et préconditions

- passe 1 marquée terminée ;
- hash d’entrée identique ;
- page complète et lisible ;
- dossier de recherche présent ;
- slug, requête et décision connus ;
- aucune édition parallèle en cours.

Si le hash diffère, lire le diff, mettre P1 à reprendre si nécessaire et ne pas
auditer un état non documenté.

## 11. Étapes de la passe 2

### P2.0 — Baseline avant correction

Relever au minimum :

- chemins concernés ;
- hash et `git diff --stat` ;
- H1, H2, H3 et ancres ;
- nombre de tableaux, encadrés, formules, FAQ et CTA ;
- title, meta description, hero title, hero description ;
- dates ;
- JSON-LD présents ;
- liens internes et externes ;
- affirmations chiffrées ;
- état des commandes ciblées ;
- statut éditorial dans le registre.

Ces nombres décrivent le brouillon. Ils ne deviennent pas des objectifs de
volume.

### P2.1 — Lecture intégrale et cartographie

Lire `page.tsx` du premier au dernier caractère, puis lire l’article rendu si
un serveur local est disponible. Cartographier :

- progression de la décision ;
- assertions décisives ;
- calculs ;
- cas réels ou fictifs ;
- sources visibles ;
- alternatives ;
- bon fit / mauvais fit ;
- CTA et promesses ;
- metadata, JSON-LD, registre, OG, FAQ, sommaire, liens ;
- passages trop courts, trop longs ou ambigus.

Livrable : inventaire des absences, incohérences et zones à haut risque.

### P2.2 — Recherche indépendante par axes

Répartir la vérification selon le sujet. Les axes recommandés sont :

#### Axe A — Sources officielles et règles

- textes juridiques et régulateurs ;
- normes et documentations officielles ;
- conditions d’éligibilité et exceptions ;
- versions et dates.

#### Axe B — Produits, prix et fonctions actuelles

- tarifs officiels, taxes, périodicité et limites ;
- fonctions réellement documentées ;
- pays et plans concernés ;
- date de consultation ;
- distinction offre gratuite, payante, entreprise ou option.

#### Axe C — SERP et contenus concurrents

- changements depuis P1 ;
- angle utile manquant ;
- objections non traitées ;
- preuves ou outils que le lecteur rencontrera ailleurs ;
- erreurs fréquentes à ne pas reproduire.

#### Axe D — Calculs et cohérence

- recalcul indépendant ;
- cohérence des unités ;
- HT/TTC ;
- mensuel/annuel/horizon total ;
- bornes et arrondis ;
- valeurs dupliquées dans le dépôt.

#### Axe E — Expérience métier et décision

- conséquences organisationnelles ;
- charge côté client ;
- données, accès, propriété et sortie ;
- solution existante, correction ou statu quo ;
- critères observables de bon et mauvais choix.

Si plusieurs agents sont autorisés, ils rendent des rapports sourcés en lecture
seule. Un seul orchestrateur consolide.

### P2.3 — Table de vérité et arbitrage

Mettre à jour la fiche de preuves en distinguant :

- affirmation confirmée ;
- affirmation corrigée ;
- affirmation réduite ;
- contradiction résolue ;
- contradiction non résolue ;
- information retirée ;
- événement de revalidation.

En cas de conflit :

1. comparer périmètre, date, juridiction, version et définitions ;
2. privilégier la source primaire compétente ;
3. expliquer la différence si deux chiffres sont vrais dans deux cas ;
4. écrire l’incertitude si elle subsiste ;
5. retirer l’affirmation si elle n’est pas nécessaire ;
6. arrêter si le verdict repose entièrement sur une contradiction insoluble.

Livrable : table de vérité unifiée dans le dossier de recherche.

### P2.4 — Audit de tous les chiffres

Lister chaque :

- prix ;
- fourchette ;
- pourcentage ;
- taux ;
- durée ;
- date ;
- quantité ;
- version ;
- seuil ;
- économie ;
- score ou performance.

Pour chacun, appliquer les six questions du §4.4. Recalculer depuis les
hypothèses, rechercher toutes les occurrences avec `rg`, puis réconcilier corps,
tableaux, encadrés, FAQ, metadata, JSON-LD, outils et pages liées.

Écart toléré : uniquement l’arrondi explicitement choisi. Un écart supérieur à
1 € ou 0,1 % dans le même calcul impose une explication ou une correction.

Livrable : rapport de calculs avec formule, résultat attendu, résultat publié et
correction.

### P2.5 — Intégration chirurgicale

Appliquer les corrections par blocs cohérents :

1. faits faux ou trompeurs ;
2. calculs ;
3. contradictions ;
4. manques décisionnels ;
5. sources visibles ;
6. exemples et étiquettes ;
7. CTA et promesses ;
8. metadata et données structurées ;
9. liens et ancres ;
10. registre et dates.

Préserver ce qui est correct. Ne pas réécrire tout le guide par confort. Après
chaque groupe important, relire le paragraphe complet, les transitions et les
répétitions créées.

### P2.6 — Audit pédagogique de fond

Vérifier :

- les 150 premiers mots répondent réellement ;
- le terme central est défini sans mur de lexique ;
- chaque H2 reste compréhensible isolément ;
- chaque section produit une décision ou une conséquence ;
- le jargon est traduit au premier usage ;
- les tableaux sont expliqués ;
- les alternatives et mauvais fits ne sont pas cachés ;
- les FAQ répondent dans la première phrase ;
- le lecteur repart avec budget, délai, risques, personnes et prochaine action ;
- le CTA décrit le résultat et sa destination.

La passe 2 corrige les incompréhensions factuelles. La passe 3 travaillera le
rythme et la plume.

### P2.7 — Audit SEO, identité et données structurées

Contrôler :

- `GuideEntry` complet, unique et daté ;
- `editorialStatus` cohérent avec la validation acquise ;
- title, meta, card copy, H1 et hero cohérents ;
- canonical absolu ;
- robots ;
- OpenGraph et Twitter ;
- image sociale existante et dédiée ;
- `Article` fidèle ;
- `BreadcrumbList` fidèle ;
- auteur et publisher exacts, sans duplications contradictoires ;
- dates identiques au registre ;
- aucun `FAQPage`, `HowTo`, faux `Offer`, fausse note ou faux prix caché ;
- aucun `wordCount` approximatif ;
- FAQ visible dans le DOM ;
- `relatedLinks` et liens inline utiles ;
- au moins un lien entrant contextuel ;
- aucun ajout manuel à `robots.txt`, sitemap ou `llms.txt`.

### P2.8 — Audit des affirmations commerciales

Rechercher dans la page, la metadata, l’OG, la FAQ et les CTA :

- témoignages ou clients non prouvés ;
- « nous avons livré », « notre client », « nous refusons régulièrement » ;
- délai de réponse garanti ;
- résultat SEO ou commercial ;
- superlatif d’exclusivité ;
- nombre de projets, années d’expérience ou métrique d’équipe ;
- prix ou garantie non alignés avec les pages commerciales ;
- bouton dont la destination ne correspond pas au verbe ;
- maquette ressemblant à une donnée de production sans étiquette fictive.

Tout fait sur l’entreprise vient de `CLAUDE.md`, des mentions légales, des pages
commerciales actuelles ou d’une preuve officielle actuelle.

### P2.9 — Audit du maillage et des sources

- [ ] liens internes vers des routes existantes ;
- [ ] ancres descriptives ;
- [ ] liens externes vers les pages originales ;
- [ ] statuts HTTP vérifiés lorsque possible ;
- [ ] aucun lien `#` public ;
- [ ] chaque `id` du sommaire existe et reste stable ;
- [ ] au moins un lien entrant depuis une page pertinente ;
- [ ] aucun cluster artificiel de liens en fin de guide ;
- [ ] les suites logiques du parcours sont proposées ;
- [ ] les binaires ne deviennent pas des pages canoniques.

### P2.10 — Contrôle technique intermédiaire

```bash
git diff --check
npx eslint src/app/guides/<slug>/page.tsx \
  src/app/guides/<slug>/opengraph-image.tsx src/lib/guides.ts
npx tsc --noEmit
npm run check:seo
```

Si une commande échoue, identifier si le défaut est introduit ou préexistant.
Un défaut introduit bloque la porte. Un défaut préexistant est documenté avec
la preuve qu’il n’est pas aggravé ; il ne doit jamais être présenté comme vert.

## 12. Porte de sortie de la passe 2

- [ ] page et dossier relus intégralement ;
- [ ] faits décisifs confirmés ou retirés ;
- [ ] chaque calcul refait ;
- [ ] chiffres réconciliés partout ;
- [ ] contradictions résolues ou visibles ;
- [ ] exemples réels autorisés ou fictifs étiquetés ;
- [ ] promesses commerciales exactes ;
- [ ] metadata, JSON-LD, registre et maillage fidèles ;
- [ ] aucun schéma interdit ;
- [ ] sources visibles au bon endroit ;
- [ ] contrôles techniques intermédiaires passés ou limites préexistantes
      documentées ;
- [ ] table de vérité et rapport de calculs conservés ;
- [ ] hash enregistré ;
- [ ] `Passe 2 = Terminée — porte validée`.

### Rapport de sortie P2

```text
PASSE 2 TERMINÉE
Affirmations contrôlées :
Sources ajoutées/remplacées :
Contradictions résolues :
Calculs vérifiés :
Erreurs factuelles corrigées :
Promesses retirées ou qualifiées :
Corrections SEO/techniques :
Risques de fraîcheur futurs :
Commandes passées :
SHA-256 page.tsx :
```

---

# PASSE 3 — Polish rédactionnel

## 13. Objectif de la passe 3

Transformer un guide exact en guide agréable à lire, facile à parcourir et
distinct des autres. La passe 3 travaille l’architecture de lecture, le rythme,
les transitions, l’accessibilité du vocabulaire, les FAQ, le CTA et la pression
commerciale.

Elle ne modifie pas un chiffre, une règle, une source ou un verdict validés sans
retour en passe 2. Elle ne réécrit pas tout le guide pour uniformiser la voix.

## 14. Préconditions

- passe 2 terminée ;
- hash correspondant ;
- aucune incertitude décisive ;
- article complet ;
- structure encore modifiable sans changer l’intention ;
- un seul éditeur.

## 15. Étapes de la passe 3

### P3.0 — Cartographie de lecture

Lire uniquement, dans un premier temps :

- title ;
- meta description ;
- H1 ;
- hero description ;
- lead ;
- H2/H3 ;
- premières et dernières phrases de chaque section ;
- tableaux et encadrés ;
- CTA ;
- FAQ ;
- conclusion.

Le squelette seul doit raconter un parcours logique. Repérer :

- réponse retardée ;
- titre abstrait ;
- section trop proche d’une voisine ;
- changement de sujet sans pont ;
- conclusion mécanique ;
- tableau qui porte trop de prose ;
- pression commerciale excessive.

### P3.1 — Title, meta, H1 et ouverture

Le title :

- nomme le sujet et la décision ;
- évite choc, exagération et promesse non démontrable ;
- reste lisible dans les résultats ;
- n’ajoute une année que si la page dépend réellement de cette année.

La meta description :

- répond à l’intention ;
- indique la valeur concrète ;
- reste fidèle ;
- n’énumère pas artificiellement les mots-clés ;
- ne promet ni classement ni résultat garanti.

Les 150 premiers mots :

1. reprennent une situation crédible ;
2. définissent le terme indispensable ;
3. donnent une réponse courte ;
4. annoncent ce que le lecteur saura décider.

Tests : substitution du sujet, lecture à voix haute, sujet-verbe-résultat,
absence de jargon d’agence.

### P3.2 — Vocabulaire et pédagogie

Pour chaque terme technique :

- est-il nécessaire ?
- peut-il être remplacé par un mot ordinaire ?
- sinon, est-il expliqué au premier usage ?
- la conséquence pour le lecteur suit-elle immédiatement ?

Déclencheurs de relecture : `cadrage`, `périmètre`, `socle`, `signal`,
`capacité`, `arbitrage`, `gouvernance`, `réversibilité`, `criticité`, `recette`,
`jalon`, `livrable`, `trajectoire`, `activation`, ainsi que les anglicismes.

Ils ne sont pas interdits par chaîne de caractères. Ils sont refusés lorsqu’ils
obligent le lecteur à traduire. Reformuler avec : qui agit, quelle action, quel
résultat.

### P3.3 — Transitions et progression

Pour chaque paire de H2 : lire la dernière phrase de la première section et la
première de la suivante. Elles doivent former une mini-conversation logique.

Transitions possibles :

- question qui ouvre le problème suivant ;
- conséquence qui impose la prochaine étape ;
- nuance qui corrige une première impression ;
- progression chronologique ;
- retour à la décision principale.

Éviter les ponts vides : « par ailleurs », « dans un second temps », « comme
nous l’avons vu », « passons maintenant à » lorsqu’ils ne disent pas pourquoi
la suite compte.

Niveaux à contrôler :

- macro entre H2 ;
- méso entre H3 ;
- micro entre paragraphes.

Une section ne finit pas sur une liste sans phrase qui tire une conséquence.

### P3.4 — Rythme et formes

- une idée principale par paragraphe ;
- phrases courtes et longues alternées selon le sens, pas selon une formule ;
- paragraphes denses coupés ou démontrés ;
- voix active ;
- questions utilisées avec mesure ;
- pas de parenthèses en cascade ;
- pas de listes quand une explication est nécessaire ;
- pas de tableau quand les cellules deviennent des mini-articles ;
- pas de répétition de la même séquence « paragraphe, liste, encadré » ;
- chiffres exacts dans les tableaux, arrondis honnêtes dans le récit si cela
  aide, sauf valeurs réglementaires ou contractuelles ;
- exemples conservés cohérents du début à la fin.

### P3.5 — Affirmations creuses et chiffres orphelins

Rechercher les formulations qui forcent le lecteur à deviner :

- « au-dessus du seuil » sans seuil ni base ;
- « sous conditions » sans conditions utiles ;
- « selon votre situation » sans situations de bascule ;
- « prix abordable », « impact important », « gain notable » sans mesure ;
- « dans la limite du plafond » sans plafond ;
- « plus rapide » sans point de comparaison ;
- « sur plusieurs années » sans horizon ;
- mécanisme nommé sans définition ;
- taux sans nature ;
- durée sans point de départ ;
- montant sans HT/TTC, fréquence ou périmètre.

Choisir la forme la plus légère :

1. précision inline ;
2. court encadré si une notion mérite quelques lignes ;
3. lien contextuel vers un guide qui existe ;
4. retrait si le détail détourne de la décision.

Vérifier l’URL avant d’ajouter un lien. Ne pas créer dix encadrés pour donner
une impression de richesse.

### P3.6 — FAQ

Pour chaque question :

- est-elle réellement résiduelle ?
- la première phrase répond-elle ?
- la réponse peut-elle tenir en quelques phrases ?
- une réponse importante mérite-t-elle plutôt un H2 ?
- le vocabulaire est-il celui du lecteur ?
- la réponse reste-t-elle cohérente avec le corps ?

La FAQ visible est l’unique version. Accents et apostrophes restent normaux. Il
n’existe aucun quota, et aucun JSON-LD `FAQPage` n’est ajouté.

### P3.7 — CTA, maillage vivant et conclusion

Le CTA :

- arrive après la démonstration ;
- dit ce que le lecteur obtient ;
- mentionne les mauvais fits si nécessaire ;
- pointe vers la destination réelle ;
- n’est présent qu’une fois dans le corps ;
- n’imite pas une urgence.

Le maillage :

- apparaît lorsqu’un concept crée une vraie question suivante ;
- utilise une ancre descriptive ;
- n’interrompt pas chaque paragraphe ;
- évite les listes automatiques ;
- laisse au lecteur une action autonome.

La conclusion ne résume pas mécaniquement toutes les sections. Elle conduit à
une décision : choisir, reporter, vérifier un devis, préparer un document,
tester une hypothèse ou ne pas investir.

### P3.8 — Contre-audit de lecture

Faire une lecture indépendante selon le profil défini dans le brief :

- comprend-il la réponse après 150 mots ?
- où commence-t-il à survoler ?
- quelle phrase semble commerciale ?
- quelle notion oblige à rechercher ailleurs ?
- les transitions donnent-elles envie de continuer ?
- sait-il quoi faire ensuite ?
- les mauvais choix sont-ils expliqués sans condescendance ?

Une simulation par agent est un contre-audit, pas un test humain. Ne pas écrire
qu’un vrai dirigeant a validé si personne n’a participé.

### P3.9 — Application ciblée et rescoring

Appliquer les corrections par priorité :

1. incompréhension de l’ouverture ;
2. titre ou section abstraits ;
3. transition cassée ;
4. jargon ;
5. affirmation creuse ;
6. FAQ ;
7. pression commerciale ;
8. rythme local.

Après chaque groupe, relire les paragraphes voisins. Si une correction touche
un fait ou un calcul, retour en P2.

## 16. Les dix tests de plume humaine de la passe 3

1. **Substitution** : remplacer le sujet ; si l’ouverture fonctionne encore,
   elle est générique.
2. **150 mots** : situation, terme, réponse, décision.
3. **Sujet-action-résultat** : aucune phrase abstraite sans acteur ni effet.
4. **Squelette** : H1, lead, H2, encadrés et CTA racontent un parcours.
5. **Titres isolés** : chaque titre se comprend seul.
6. **Lecture orale** : ouverture et transitions se prononcent naturellement.
7. **Point d’ennui** : le passage de décrochage est raccourci, déplacé, prouvé
   ou supprimé.
8. **Téléphone** : à 390 px, la décision ne dépend pas d’une colonne hors écran.
9. **FAQ** : la première phrase répond sans recréer un chapitre caché.
10. **Sortie** : le lecteur sait agir et comprend le résultat du clic.

## 17. Porte de sortie de la passe 3

- [ ] title, meta, H1 et ouverture fidèles et engageants ;
- [ ] 150 premiers mots validés ;
- [ ] chaque H2 compréhensible isolément ;
- [ ] jargon traduit ;
- [ ] transitions macro, méso et micro relues ;
- [ ] aucun point de décrochage majeur ;
- [ ] affirmations creuses d’impact fort corrigées ;
- [ ] chiffres contextualisés sans altération factuelle ;
- [ ] FAQ utile et simple ;
- [ ] CTA unique, honnête et tardif ;
- [ ] conclusion décisionnelle ;
- [ ] contre-audit documenté ;
- [ ] aucune validation humaine inventée ;
- [ ] hash enregistré ;
- [ ] `Passe 3 = Terminée — porte validée`.

### Rapport de sortie P3

```text
PASSE 3 TERMINÉE
Ouverture :
Sections déplacées/raccourcies :
Transitions corrigées :
Termes traduits :
Affirmations creuses corrigées :
FAQ modifiées/supprimées :
CTA et conclusion :
Point de décrochage traité :
Contre-audit :
Retour en P2 effectué : oui/non
SHA-256 page.tsx :
```

---

# PASSE 4 — Anti-IA, authenticité et contrôle final

## 18. Objectif de la passe 4

Effectuer une dernière lecture phrase par phrase pour retirer les automatismes
de rédaction, sans détériorer l’exactitude, la nuance ou la personnalité du
guide. Puis figer le snapshot et exécuter la batterie technique et visuelle
complète.

Cette passe ne cherche pas à « tromper un détecteur ». Les détecteurs d’IA ne
sont pas une preuve fiable d’auteur ni de qualité. L’objectif est un texte
naturel, précis, spécifique au sujet et agréable pour une personne réelle.

## 19. Préconditions

- passe 3 terminée ;
- hash identique ;
- structure stabilisée ;
- faits et calculs validés ;
- aucun autre éditeur actif ;
- environnement local inspecté.

## 20. Étapes de la passe 4

### P4.0 — Découpage exhaustif

Cartographier toutes les sections du corps, y compris :

- lead ;
- chaque H2 et ses H3 ;
- tableaux, encadrés et formules ;
- CTA ;
- sources et limites ;
- toutes les FAQ.

Chaque section doit être relue intégralement. La passe ne porte pas uniquement
sur quelques extraits « suspects ».

Si plusieurs relecteurs sont autorisés, attribuer des sections non
chevauchantes en lecture seule. L’orchestrateur relit l’ensemble et applique
les modifications.

### P4.1 — Les quinze familles de tics à traquer

Ces familles déclenchent une analyse, pas un remplacement automatique.

#### 1. Auto-félicitation

Exemples : « personne ne vous le dit », « le comparatif le plus complet », « ce
guide n’existe nulle part ailleurs ».

Correction : supprimer ou remplacer par la valeur réellement démontrée.

#### 2. Triplettes et énumérations mécaniques

Exemples : « Un… Deux… Trois… » dans plusieurs sections, `(1) (2) (3) (4)` dans
une phrase.

Correction : vraie liste si l’ordre compte, ou narration asymétrique.

#### 3. Symétrie excessive

Suite de phrases identiques : « Si A, B. Si C, D. Si E, F. »

Correction : regrouper, varier le rythme, ajouter la condition décisive.

#### 4. Adjectif vendeur sans preuve

« majeur », « imbattable », « considérable », « exceptionnel », « notable ».

Correction : verbe précis, chiffre contextualisé ou suppression.

#### 5. Métaphore fabriquée

Métaphore que le lecteur doit apprendre avant le sujet.

Correction : mécanisme expliqué directement.

#### 6. Parenthèses en cascade

Plusieurs explications secondaires dans la même phrase.

Correction : déplacer l’information utile ou couper la phrase.

#### 7. Connecteur automatique

« il est important de noter », « par ailleurs », « en effet », « dans cette
optique », « au regard de », « il convient de ».

Correction : supprimer si le lien est évident ; sinon nommer le vrai lien de
cause, d’opposition ou de conséquence.

#### 8. Conclusion formatée

« En conclusion », « Au final », « Ce qu’il faut retenir » répétés sans apport.

Correction : finir sur la décision ou la conséquence propre à la section.

#### 9. Longueur trop régulière

Toutes les phrases et tous les paragraphes suivent la même cadence.

Correction : laisser le sens décider du rythme, insérer une phrase courte
lorsqu’elle porte une vraie bascule.

#### 10. Verbe neutre ou nominalisation

« permettre de », « procéder à », « mise en œuvre de », « effectuer une
vérification ».

Correction : « vérifier », « choisir », « payer », « récupérer », « tester ».

#### 11. Formulation administrative

« aux fins de », « dans la mesure où », « compte tenu de », « sous réserve des
éléments précités ».

Correction : français direct, sans perdre la nuance juridique nécessaire.

#### 12. Inversion artificielle

« Ainsi pourrez-vous », « Aussi convient-il ».

Correction : ordre sujet-verbe naturel.

#### 13. Listes parfaitement parallèles

Chaque puce commence par le même substantif ou la même formule sans raison.

Correction : garder le parallélisme lorsqu’il aide une comparaison ; le casser
seulement lorsqu’il sonne mécanique.

#### 14. Dramatisation creuse

« c’est ici que tout se joue », « l’erreur qui coûte très cher », « piège
silencieux » sans donnée.

Correction : conséquence réelle, fréquence démontrée ou formulation calme.

#### 15. Lien logique implicite

Deux phrases vraies sont juxtaposées sans expliquer pourquoi la seconde découle
de la première.

Correction : expliciter la cause, la condition ou la limite.

### P4.2 — Format d’audit par passage

Pour chaque correction matérielle, noter dans le dossier de recherche :

```md
#### Passage P4-XX — section `<id>`

- Phrase actuelle : « … »
- Famille détectée :
- Diagnostic :
- Reformulation : « … »
- Effet sur le fond : aucun / retour P2 nécessaire
- Priorité : bloquante / forte / moyenne / faible
```

Ne pas viser un nombre arbitraire de corrections. Une section naturelle peut
rester inchangée. Une correction faible ne doit pas rendre la phrase moins
précise.

### P4.3 — Règles positives de reformulation

- introduire la situation avant la règle ;
- utiliser le mot que le lecteur emploie ;
- expliquer la cause et l’effet ;
- donner la condition de bascule ;
- garder les chiffres contextualisés ;
- définir les acronymes au premier usage ;
- préférer les verbes concrets ;
- varier le rythme sans fabriquer une voix familière ;
- conserver la prudence juridique et les limites ;
- ne pas ajouter de fausse anecdote ;
- ne pas remplacer une phrase exacte par une phrase « punchy » moins vraie ;
- ne pas forcer « du coup », « sauf que », « honnêtement » ou un ton oral qui
  ne correspond pas au sujet.

### P4.4 — Relecture finale de cohérence

Après les modifications locales, relire l’article entier. Contrôler :

- une même définition partout ;
- un même exemple et les mêmes chiffres ;
- aucune transition cassée ;
- aucune répétition créée ;
- aucun glissement de ton ;
- aucun résidu d’édition, note à l’agent ou ancienne version ;
- sources et liens toujours proches des affirmations ;
- CTA et FAQ cohérents avec le corps ;
- metadata et JSON-LD toujours fidèles.

Une relecture section par section peut casser le fil global. Cette relecture
intégrale est obligatoire.

### P4.5 — Gel du snapshot

Annoncer un gel d’écriture. Puis :

1. relever `git status --short` ;
2. enregistrer le hash du guide et des fichiers directement liés ;
3. arrêter toute édition ;
4. lancer la batterie sur ce snapshot ;
5. recommencer les preuves invalidées par toute modification ultérieure.

Ne rattacher un nombre de tests ou un verdict qu’au snapshot exact qui les a
produits.

### P4.6 — Batterie technique bloquante

Depuis la racine du dépôt :

```bash
npm run check:seo
npx eslint src/app/guides/<slug>/page.tsx \
  src/app/guides/<slug>/opengraph-image.tsx src/lib/guides.ts
npx tsc --noEmit
npm test
NEXT_PUBLIC_ENV=production npm run build
git diff --check
```

Règles :

- exécuter dans cet ordre ;
- ne pas compter deux fois les tests lancés par `prebuild` ;
- ne pas omettre `npm test` même si `check:seo` passe ;
- ne pas annoncer un build vert si `postbuild` échoue ;
- séparer erreur introduite, erreur préexistante et manque de ressources ;
- corriger la source plutôt que le test ;
- vérifier que les fichiers sources ne sont pas plus récents que l’artefact.

### P4.7 — Vérification locale de la route

Si le serveur correspondant est déjà lancé et identifié :

```bash
curl -sS -o /dev/null -w '%{http_code}\n' \
  --max-time 30 http://localhost:3000/guides/<slug>
```

Attendu : `200`. Vérifier aussi l’HTML rendu :

- title unique ;
- H1 unique ;
- canonical ;
- robots attendu selon environnement et statut éditorial ;
- JSON-LD parsable ;
- absence de `FAQPage` et `HowTo` ;
- contenu FAQ dans le DOM ;
- image sociale et liens ;
- aucun message d’erreur.

Un `200` ne prouve pas que la page est visible ou utilisable.

### P4.8 — Contrôle dans un vrai navigateur

Observer réellement la page aux largeurs :

```text
320, 360, 390, 430, 640, 768, 1024, 1280, 1440, 1600 px
```

Contrôler à chaque famille de largeur :

- hero, H1, auteur, date et promesse ;
- sommaire et ancres ;
- contenu disponible après la sidebar ;
- tableaux ou cartes ;
- formules et encadrés ;
- CTA et destination ;
- FAQ au clavier ;
- focus visible ;
- footer ;
- absence de débordement horizontal, chevauchement, contenu coupé ou overlay ;
- console et requêtes réseau critiques ;
- thème clair et sombre si les composants touchés le nécessitent.

À 390 px, la situation, le choix et la conséquence doivent être visibles
ensemble. Un tableau techniquement scrollable échoue si la réponse décisive est
hors écran.

### P4.9 — Contrôle de l’image sociale

- route `/guides/<slug>/opengraph-image` en 200 ;
- image 1200 × 630 ;
- aucun texte coupé ;
- titre fidèle et lisible ;
- nom Hagnéré Code correct ;
- aucune promesse ou donnée absente de la page ;
- cohérence entre metadata et URL générée.

### P4.10 — Scorecard finale

Noter chaque axe de 0 à 2 avec une phrase de preuve :

| Axe         | Question                                                              |
| ----------- | --------------------------------------------------------------------- |
| Intention   | La page répond-elle immédiatement à la vraie question ?               |
| Décision    | Le lecteur sait-il choisir, renoncer ou agir ?                        |
| Pédagogie   | Un non-technicien comprend-il sans seconde recherche ?                |
| Profondeur  | Alternatives, coûts cachés et conséquences sont-ils couverts ?        |
| Preuve      | Les affirmations importantes sont-elles traçables ?                   |
| Comparaison | Les options sont-elles jugées à conditions égales ?                   |
| Originalité | Réponse, exemples et artefact sont-ils propres au sujet ?             |
| Style       | Le texte est-il naturel, calme, précis et non mécanique ?             |
| Conversion  | Bon lecteur, mauvais fit et prochain pas sont-ils clairs ?            |
| SEO/produit | Structure, metadata, liens, accessibilité et rendu sont-ils propres ? |

Seuil : **17/20**, aucune note à 0, et `Intention`, `Décision`, `Pédagogie` et
`Preuve` obligatoirement à 2.

Conditions bloquantes avant même le score :

- les 150 premiers mots échouent ;
- un H2 exige d’apprendre un vocabulaire propriétaire ;
- un mur de lexique précède la réponse ;
- la comparaison principale masque la décision à 390 px ;
- le CTA ou la FAQ parlent du processus de l’agence plutôt que du résultat ;
- un fait décisif ou un calcul reste douteux ;
- une commande ou un contrôle visuel obligatoire échoue.

### P4.11 — Validation éditoriale et statut exact

Après la batterie, choisir uniquement un statut démontrable :

| Statut                  | Signification                                                  |
| ----------------------- | -------------------------------------------------------------- |
| Brouillon               | travail incomplet                                              |
| Faits vérifiés          | table de vérité réconciliée                                    |
| Prêt pour contre-audit  | brouillon complet à relire indépendamment                      |
| Prêt techniquement      | tests et contrôles locaux passés                               |
| Prêt pour revue humaine | aucun blocage connu, validation humaine restante               |
| Publiable               | seuil, contre-audit, validation éditoriale et contrôles passés |
| Publié                  | URL de production contrôlée                                    |
| Indexé                  | état confirmé dans Search Console                              |

Une relecture d’agent n’est pas un lecteur humain. Sans test réel ou délégation
explicite du commanditaire conforme à la charte, le statut maximal est `Prêt
pour revue humaine` et `editorialStatus: "ready-for-human-review"` reste en
place.

## 21. Porte de sortie de la passe 4

- [ ] toutes les sections relues ;
- [ ] tics matériels corrigés sans perte de précision ;
- [ ] article entier relu après les corrections locales ;
- [ ] aucun retour P2 ou P3 non traité ;
- [ ] snapshot gelé ;
- [ ] `check:seo`, ESLint, TypeScript, tests, build/postbuild et diff check
      passés ;
- [ ] route locale et HTML contrôlés ;
- [ ] rendu visible contrôlé aux dix largeurs ;
- [ ] OG contrôlée ;
- [ ] score ≥ 17/20 et conditions bloquantes satisfaites ;
- [ ] validation éditoriale décrite honnêtement ;
- [ ] statut du registre cohérent ;
- [ ] hash final enregistré ;
- [ ] `Passe 4 = Terminée — porte validée`.

### Rapport de sortie P4

```text
PASSE 4 TERMINÉE
Sections relues :
Passages reformulés :
Familles dominantes :
Retours P2/P3 effectués :
Scorecard justifiée : XX/20
Validation humaine réelle : oui/non
Statut maximal :
Commandes et résultats :
Largeurs contrôlées :
Route et OG :
Limites préexistantes :
SHA-256 final :
Verdict :
```

---

## 22. Après publication

La publication n’est pas incluse automatiquement dans les quatre passes. Elle
exige l’autorisation et le workflow de déploiement appropriés.

Après une publication réellement effectuée :

- [ ] URL publique en 200 sans redirection ;
- [ ] canonical exact ;
- [ ] robots `index, follow` ;
- [ ] présence dans le sitemap public ;
- [ ] présence dans `llms.txt` si le registre le prévoit ;
- [ ] image OG, liens, FAQ et éventuelle ressource ;
- [ ] JSON-LD public ;
- [ ] absence d’erreurs console ou réseau critiques ;
- [ ] inspection d’URL Search Console si pertinente ;
- [ ] indexation contrôlée ultérieurement, sans la déduire de la soumission ;
- [ ] requêtes, impressions, clics et conversions observés avant réécriture ;
- [ ] données de terrain Core Web Vitals suivies lorsqu’elles existent.

Ne jamais confondre : généré, déployé, découvert, exploré, indexé, classé et
cité par une IA.

---

## 23. Organisation à l’échelle de centaines de guides

### 23.1 Un guide à la fois

Le portefeuille peut avancer par sprints, mais chaque guide possède :

- son brief ;
- sa décision ;
- son dossier de recherche ;
- ses quatre portes ;
- ses sources ;
- ses calculs ;
- son contre-audit ;
- ses contrôles techniques et visuels ;
- son statut propre.

Il est interdit de valider un lot en supposant qu’un contrôle sur un guide vaut
pour les autres.

### 23.2 Sprints recommandés

Un sprint peut contenir trois sujets distincts :

1. recherche et briefs ;
2. passes 1 séparées ;
3. passes 2 séparées ;
4. passes 3 séparées ;
5. passes 4 séparées ;
6. décision éditoriale et maillage ;
7. publication autorisée ;
8. observation sans bloquer tout le prochain sprint.

Ne pas lancer les quatre passes simultanément sur le même guide. Le parallélisme
porte sur des guides distincts ou des recherches indépendantes en lecture
seule.

### 23.3 Prévenir l’uniformisation

Pour chaque nouveau guide, le dossier nomme :

- tension motrice ;
- type d’ouverture ;
- progression ;
- type d’exemple ;
- format utile principal ;
- place du CTA ;
- forme de conclusion ;
- trois choix volontairement différents des guides voisins.

La cohérence vient des preuves, de la voix et des composants. Elle ne vient pas
d’un plan copié cent fois.

### 23.4 Maintenance

Chaque donnée volatile conserve un événement de revalidation : nouvelle
version, nouvelle année, changement tarifaire, évolution réglementaire,
modification de l’offre ou signal Search Console. `dateModified` change
seulement après une modification substantielle réellement publiée.

---

## 24. Prompt de lancement réutilisable

Le bloc suivant peut être donné à un agent. Il ne remplace pas la lecture du
présent document.

```text
Tu travailles sur UN guide Hagnéré Code.

SUJET : <SUJET>
SLUG : <SLUG>
PASSE À EXÉCUTER : <1|2|3|4>
REQUÊTE PRINCIPALE PRESSENTIE : <REQUÊTE>
LECTEUR : <LECTEUR>
DÉCISION À PERMETTRE : <DÉCISION>

Avant toute action, lis intégralement :
1. CLAUDE.md
2. docs/regle-or-vigilance-seo-publication.md
3. docs/charte-qualite-guides.md
4. docs/roadmap-guides-seo.md
5. docs/workflow-maitre-guides-4-passes.md
6. docs/research/_modele-guide.md
7. docs/research/<SLUG>.md s’il existe

Inspecte ensuite la stack et les fichiers actuels. Ne suppose jamais que les
versions, nombres, dates, offres, routes ou composants de ce prompt sont encore
à jour.

Exécute uniquement la passe demandée. Vérifie que la porte précédente est
validée et que le hash correspond. Si ce n’est pas le cas, arrête la passe,
documente la divergence et reprends la passe antérieure nécessaire.

Règles absolues : zéro invention, un seul guide, un seul éditeur, sources
primaires, calculs reproductibles, aucun FAQPage/HowTo, aucune modification
manuelle du sitemap/robots/llms.txt, aucun commit/push sans ordre explicite,
préservation des changements utilisateur.

À la fin, mets à jour docs/research/<SLUG>.md, applique la checklist et fournis
le rapport de sortie normalisé de la passe. Ne déclare jamais une passe terminée
si une case bloquante reste ouverte.
```

---

## 25. Références externes de contrôle

À revalider lors d’un changement important :

- [Google — créer des contenus utiles, fiables et people-first](https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=fr) ;
- [Google — guide de démarrage SEO](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=fr) ;
- [Google — règles des données structurées](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=fr) ;
- [Google — données structurées Article](https://developers.google.com/search/docs/appearance/structured-data/article?hl=fr) ;
- [Google — journal des mises à jour Search](https://developers.google.com/search/updates) ;
- [Google — fonctionnalités d’IA et Search](https://developers.google.com/search/docs/appearance/ai-features?hl=fr) ;
- [Google — guide d’optimisation des fonctions d’IA générative](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide?hl=fr) ;
- [Google — sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=fr) ;
- [Google — expérience de page](https://developers.google.com/search/docs/appearance/page-experience?hl=fr) ;
- [Next.js 16 — metadata et images OpenGraph](https://nextjs.org/docs/app/getting-started/metadata-and-og-images) ;
- [Next.js 16 — convention `opengraph-image`](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image) ;
- [W3C/WAI — WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) ;
- [web.dev — seuils Core Web Vitals](https://web.dev/articles/defining-core-web-vitals-thresholds?hl=fr).

---

## 26. Règle finale

Un article n’est pas terminé parce qu’il est long, bien présenté, compilable ou
« humain » en apparence. Il est terminé lorsque :

- le lecteur comprend et peut décider ;
- chaque affirmation décisive est prouvée ou honnêtement qualifiée ;
- chaque calcul est reproductible ;
- la page correspond à la stack et aux sources de vérité actuelles ;
- les quatre passes ont franchi leur porte dans l’ordre ;
- le rendu réel, les tests et le statut éditorial ont été vérifiés sans
  invention.

Si une seule de ces conditions manque, le guide retourne à la passe appropriée.
