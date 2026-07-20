# Règle d'or de vigilance SEO et publication

> **LECTURE OBLIGATOIRE.** Lire ce document en entier avant de créer ou de
> modifier une page éditoriale, un guide, un livre blanc, une ressource ou une
> page service. Il complète la
> [charte qualité des guides](charte-qualite-guides.md) : la charte gouverne la
> qualité du fond, ce document gouverne la publication, la découvrabilité et la
> fidélité technique.

Version : **20 juillet 2026** · Périmètre : `https://hagnere-code.ai`

---

## 1. La règle en une phrase

Une page ne peut être publiée que si son contenu visible, ses métadonnées, ses
données structurées, ses registres, son sitemap, son entrée `llms.txt`, son
maillage et son rendu réel racontent **la même chose, avec des faits vrais et
des dates vraies**.

Ni une balise, ni un sitemap envoyé, ni `llms.txt`, ni un score Lighthouse à
100 ne garantit l'indexation, le classement ou une citation par une IA. Le but
de cette règle est de supprimer les obstacles techniques et les signaux
contradictoires, pas de promettre un résultat qu'aucun site ne contrôle.

---

## 2. Pourquoi cette règle existe : constats de l'audit du 20 juillet 2026

L'audit complet du site a confirmé un socle sain, mais a aussi révélé des
risques que tout futur contenu doit empêcher de réintroduire :

- `robots.txt` autorisait correctement le contenu public aux robots génériques,
  mais il était parfois compris à tort comme une liste d'articles ;
- le sitemap était généré depuis les registres et toutes ses URL publiques
  testées répondaient correctement, mais la batterie structurelle n'était pas
  bloquante avant chaque build ;
- `llms.txt` était absent : il est désormais généré depuis les registres, sans
  être présenté comme un facteur de classement Google ;
- des FAQ en JSON-LD avaient divergé de la FAQ réellement affichée ;
- certaines études de cas transformaient une simple année en fausse date du
  1er janvier ;
- plusieurs entités structurées pouvaient répéter l'identité de l'entreprise
  avec des propriétés différentes ;
- l'interface appelait encore « gérant » le président d'une SASU, créant une
  contradiction avec les mentions légales et la politique de confidentialité ;
- plusieurs guides utilisaient un nom d'entreprise ou de personne comme fil
  rouge composite sans toujours l'identifier comme fictif, avec parfois des
  tournures laissant croire à une mission réellement livrée ;
- le sitemap entretenait des valeurs `priority` et `changefreq` que Google
  ignore, au lieu de limiter le fichier aux URL et aux vraies dates utiles ;
- les contrôles de production étaient très bons sur les balises, canonical,
  H1, liens et JSON-LD, mais ce bon état reposait trop sur un audit ponctuel ;
- Lighthouse était excellent sur ordinateur, tandis que le LCP mobile restait
  à améliorer sur plusieurs modèles de page ;
- plusieurs grands gabarits statiques produisent un document HTML initial et
  un flux RSC volumineux ; déplacer seulement leur wrapper client n'a pas réduit
  le transfert mesuré, ce qui impose de traiter le volume de balisage à la
  source plutôt que de conclure depuis l'architecture apparente ; des images
  n'avaient pas de dimensions et certaines pages n'avaient pas de vrai
  landmark `main#main-content` ;
- une erreur d'API de formulaire pouvait dégrader les bonnes pratiques sans
  empêcher le crawl des pages éditoriales, car le secret de signature du défi
  anti-robot n'était pas encore configuré dans les environnements hébergés.

La correction durable consiste donc à avoir des **sources de vérité uniques**,
des **tests avant build** et un **contrôle de l'artefact après build**.

---

## 3. Ne jamais confondre les trois mécanismes

| Mécanisme | Rôle réel | Source du projet | Ce qu'il ne prouve pas |
| --- | --- | --- | --- |
| `robots.txt` | Autoriser ou interdire le crawl de familles d'URL | `src/app/robots.ts` | Découverte exhaustive, indexation ou classement |
| `sitemap.xml` | Déclarer les URL canoniques publiques que l'on souhaite voir explorées | `src/app/sitemap.ts` | Crawl immédiat ou indexation effective |
| `llms.txt` | Donner un index éditorial lisible à certains outils et assistants | `src/lib/llms.ts` puis `src/app/llms.txt/route.ts` | Prise en charge par Google, citation par un LLM ou gain de position |

### 3.1 `robots.txt` n'est jamais une liste d'articles

Ne jamais ajouter les slugs des nouveaux guides dans `robots.txt`. La règle
générique de production `User-agent: *` avec `Allow: /` couvre les robots qui
respectent le protocole, y compris les robots actuels et futurs qui ne sont pas
nommés individuellement. L'exclusion `/api/` doit rester en place : les API ne
sont pas du contenu éditorial et peuvent déclencher des traitements ou des
coûts.

Ne pas bloquer `/_next/`, le CSS, le JavaScript ou les images : un moteur doit
pouvoir rendre la page. Ne pas ajouter une règle spéciale pour un robot sans
comprendre que certains parseurs utilisent alors le groupe le plus spécifique
et n'héritent pas nécessairement du groupe générique.

En développement et en preview, le blocage global est volontaire. La
production n'est indexable que lorsque `NEXT_PUBLIC_ENV=production` est fourni
au build.

Référence officielle : [présentation de robots.txt par Google](https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=fr).

### 3.2 Le sitemap est la liste canonique des pages publiques

Un contenu présent dans le sitemap doit :

- répondre en `200`, sans redirection ;
- être indexable ;
- avoir un canonical égal à son URL de sitemap ;
- exister dans l'artefact de production ;
- ne pas être une page de confirmation, une redirection ou un fichier binaire ;
- utiliser une vraie `lastModified` lorsqu'elle est déclarée.

Une URL découverte ou un sitemap traité ne signifie pas que l'URL est indexée.
L'indexation se contrôle URL par URL dans Search Console.

Google ignore les valeurs XML `priority` et `changefreq`. Ne pas les utiliser
comme substitut à un vrai maillage interne, et ne pas les ajouter au sitemap.
En revanche, `lastmod` n'est publié que lorsqu'il correspond à une modification
substantielle, exacte et vérifiable du contenu.

Références officielles : [créer et envoyer un sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=fr) et [rapport Sitemaps de Search Console](https://support.google.com/webmasters/answer/7451001?hl=fr).

### 3.3 `llms.txt` reste un index complémentaire

Le fichier public `/llms.txt` est généré automatiquement. Ne jamais le recopier
dans `public/` et ne jamais le maintenir à la main. Les guides, ressources et
livres blancs viennent de leurs registres ; les services sont maintenus dans
`LLMS_SERVICE_LINKS`, avec un test d'égalité avec les services du sitemap.

Le fichier :

- pointe vers les pages HTML canoniques, jamais directement vers un PDF, ZIP,
  DOCX ou XLSX ;
- décrit les contenus sans promesse de classement ou de citation ;
- reprend les vraies dates de modification des registres ;
- reste concis : un `llms-full.txt` dupliquant tout le site n'est pas publié
  tant qu'un usage réel et mesurable ne le justifie pas.

Google indique qu'aucun nouveau fichier texte lisible par machine ni balisage
spécial n'est nécessaire pour apparaître dans AI Overviews ou AI Mode. Le
15 juin 2026, Google a aussi précisé explicitement que `llms.txt` n'a **aucun
impact positif ou négatif** sur la visibilité ou le classement dans Google
Search. Le conserver ici sert uniquement les outils qui choisissent de le lire :
ne jamais le vendre comme un levier SEO ni lui attribuer un effet Google.

Références officielles : [fonctionnalités d'IA et votre site dans Google Search](https://developers.google.com/search/docs/appearance/ai-features?hl=fr) et [journal des mises à jour Google Search](https://developers.google.com/search/updates).

---

## 4. Sources de vérité à utiliser

| Type de contenu | Registre obligatoire | Route ou consommateur automatique |
| --- | --- | --- |
| Guide | `src/lib/guides.ts` (`GUIDES`) | route et metadata ; seuls `PUBLISHED_GUIDES` alimentent hub, sitemap et `llms.txt` |
| Ressource téléchargeable | `src/lib/resources.ts` (`DOWNLOADABLE_RESOURCES`) | hub, landing page, sitemap et `llms.txt` |
| Livre blanc | `src/lib/white-papers.ts` (`WHITE_PAPERS`) | hub, landing page, sitemap et `llms.txt` |
| Service | liste des services dans `src/app/sitemap.ts` et `LLMS_SERVICE_LINKS` | sitemap et `llms.txt`, alignement testé |
| Pages locales | `src/lib/local-pages.ts` (`LOCAL_PAGES`) | pages locales et sitemap |
| Canonical du domaine | `src/lib/seo.ts` (`SITE_URL`) | métadonnées et générateurs |
| Politique d'indexation | `src/lib/search-indexing.ts` | layout et `robots.ts` |

Ne pas recopier une source de vérité dans un second tableau « temporaire ».
Si une donnée doit alimenter plusieurs sorties, la centraliser puis tester les
consommateurs.

### Ajouter un guide

1. lire ce document et `docs/charte-qualite-guides.md` ;
2. créer ou mettre à jour `docs/research/<slug>.md` ;
3. créer `src/app/guides/<slug>/page.tsx` ;
4. créer son image `opengraph-image.tsx` dédiée ;
5. ajouter une entrée complète et datée dans `GUIDES`, avec
   `editorialStatus: "ready-for-human-review"` tant que la validation
   éditoriale n'est pas réellement acquise ;
6. ne modifier manuellement ni le sitemap, ni `llms.txt` : la route reste alors
   accessible en `noindex,nofollow`, mais absente du hub, sitemap et `llms.txt` ;
7. retirer `editorialStatus` seulement après l'une des deux validations
   documentées : soit un test lecteur humain suivi des corrections, soit une
   autorisation explicite du commanditaire déléguant la décision à un
   contre-audit indépendant qui dépasse le seuil de la charte et ne conserve
   aucun blocage factuel, éditorial, commercial ou technique ;
8. ajouter des liens entrants contextuels depuis les pages réellement proches ;
9. lancer la batterie du §11.

Le test du registre exige une correspondance exacte entre les dossiers de
guides, `GUIDES` et leurs images sociales. Il vérifie aussi que tout guide en
attente appelle `guideRobots`. Les tests sitemap et `llms.txt` exigent ensuite
la présence unique des seuls `PUBLISHED_GUIDES` et l'absence des brouillons.

### Ajouter une ressource ou un livre blanc

1. créer une page HTML autonome, utile et indexable ;
2. publier le fichier réel et le tester ;
3. enregistrer le contenu dans le registre correspondant ;
4. déclarer taille, version et vraie date ;
5. conserver les binaires en `noindex` et faire indexer leur page de
   présentation ;
6. vérifier que le sitemap et `llms.txt` pointent vers la landing page, pas
   vers le fichier ;
7. tester le téléchargement, le nom du fichier, sa signature et sa taille.

### Ajouter un service

Créer la page, l'ajouter au sitemap et ajouter une description fidèle dans
`LLMS_SERVICE_LINKS`. Le test échoue si les deux listes divergent. À terme, si
les services deviennent souvent modifiés, les centraliser dans un registre
unique sur le même modèle que `GUIDES`.

---

## 5. Contrat SEO de chaque page

Chaque page indexable doit respecter simultanément les invariants suivants.

### 5.1 Métadonnées et structure visible

- un seul sujet et une intention principale ;
- un `title` unique, descriptif et fidèle ;
- une meta description unique, utile mais sans promesse mensongère ;
- un seul H1 visible et cohérent avec le `title` ;
- un canonical absolu en HTTPS sur `https://hagnere-code.ai` ;
- `index, follow` en production ;
- `lang="fr"` ;
- une image OpenGraph dédiée ou explicitement choisie, idéalement 1200 × 630 ;
- OpenGraph et Twitter cohérents avec le contenu ;
- aucune page indexable dans le sitemap si elle redirige, confirme une action
  privée ou duplique une autre page.

Les repères d'environ 50–60 caractères pour un title et 140–160 pour une
description servent l'affichage ; ce ne sont pas des seuils de conformité ou
de classement. La précision prime sur un comptage mécanique.

### 5.2 Dates et fraîcheur

- `datePublished` est la vraie première date de publication ;
- `dateModified` change après une modification substantielle réellement
  publiée, jamais pour simuler de la fraîcheur ;
- ne jamais transformer « 2025 » en `2025-01-01` si le jour est inconnu ;
- si une date exacte n'est pas prouvée, l'omettre ou enrichir le registre avec
  la donnée réelle avant publication ;
- la date visible, la metadata, le JSON-LD, le registre et le sitemap doivent
  être identiques.

### 5.3 Données structurées : miroir, pas contenu parallèle

Le JSON-LD doit décrire le contenu que le lecteur peut réellement voir. Il ne
sert jamais à ajouter une promesse, une FAQ, une note, un prix, une adresse ou
une date absente de la page.

- `Article` : headline, description, image, auteur et dates exactes ;
- `BreadcrumbList` : même hiérarchie que la navigation et même canonical ;
- les FAQ visibles restent utiles au lecteur, mais aucun schéma `FAQPage` ne
  doit être publié : Google a retiré ce résultat enrichi le 7 mai 2026 puis sa
  documentation le 15 juin 2026 ;
- les étapes de méthode restent visibles, mais aucun schéma `HowTo` : Google a
  retiré ce résultat enrichi et sa documentation en septembre 2023 ;
- `Organization` / `ProfessionalService` : une identité stable, un seul nom,
  une adresse et des identifiants recopiés depuis leur source officielle ;
- `sameAs` : seulement des profils représentant réellement la même entité ;
- pas de `wordCount` estimé ou copié ; le calculer depuis le texte final ou
  l'omettre ;
- un JSON valide ne suffit pas : sa sémantique doit être fidèle.

Une ancienne consigne autorisait encore `FAQPage` lorsque la FAQ visible était
identique. Elle est obsolète : les FAQ restent du contenu éditorial normal et
accessible, sans JSON-LD dédié. Le test et le vérificateur d'artefact doivent
échouer si `FAQPage` réapparaît.

Références officielles : [règles générales des données structurées](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=fr), [balisage Article](https://developers.google.com/search/docs/appearance/structured-data/article?hl=fr) et [journal des mises à jour Google Search](https://developers.google.com/search/updates).

### 5.4 Identité, NAP et faits commerciaux

Nom, adresse postale, téléphone, email, SIREN/SIRET, effectif, offres, délais
et garanties doivent venir de leur source actuelle dans le dépôt ou d'une
preuve officielle. Lors d'un transfert de siège, ne jamais anticiper un nouvel
identifiant non attribué et ne jamais conserver deux versions contradictoires.

Rechercher toutes les occurrences avant une modification : HTML visible,
footer, JSON-LD, mentions légales, politique de confidentialité, contact et
pages locales. Une correction partielle crée un signal de défiance plus grave
qu'une donnée volontairement omise en attendant confirmation.

Un objectif opérationnel non mesuré ne doit jamais devenir une garantie par
répétition. Une formule comme « réponse sous 24 h », une date de livraison, un
score Lighthouse minimal, un taux de conversion ou une disponibilité ne peut
être affichée comme absolue que si le périmètre, le mode de mesure et
l'engagement contractuel existent réellement. Sinon, écrire l'objectif et sa
limite : par exemple « objectif de réponse le prochain jour ouvré, sans délai
garanti ». Les métadonnées, emails automatiques, CTA et FAQ sont soumis à la
même règle que le corps visible.

### 5.5 Cas réels, scénarios composites et témoignages

Un nom propre rend immédiatement un exemple crédible comme un cas client. Il
faut donc lever toute ambiguïté dès sa première occurrence :

- un cas réellement livré exige une preuve interne, des métriques traçables et
  l'autorisation de publier ce qui identifie le client ;
- un exemple inventé ou combinant plusieurs situations porte explicitement la
  mention **« scénario fictif composite »** dès son introduction ;
- les décisions, devis, incidents et résultats d'un scénario fictif sont écrits
  comme des hypothèses (« dans ce scénario », « supposons », conditionnel),
  jamais comme une expérience vécue par Hagnéré Code ;
- ne jamais écrire « nous avons livré », « notre client », « nous a contactés »
  ou publier une citation attribuée sans dossier vérifiable ;
- un calcul fictif peut rester précis et utile, à condition de montrer ses
  hypothèses et de ne pas le transformer en preuve commerciale.

---

## 6. Maillage et découvrabilité interne

- chaque nouvelle page importante reçoit au moins un lien HTML descriptif
  depuis une page déjà reliée au reste du site ;
- les liens doivent être contextuels : service vers guide utile, guide vers
  ressource actionnable, ressource vers guide explicatif ;
- éviter « cliquez ici », les listes artificielles de mots-clés et les liens
  cachés ;
- conserver les ancres `id` déjà publiées lors d'une refonte ;
- vérifier les liens sortants vers les sources originales ;
- une page présente dans le sitemap mais orpheline reste un parcours médiocre ;
- ne pas créer plusieurs pages pour la même intention sans différence nette et
  documentée dans la roadmap.

Le sitemap facilite la découverte ; le maillage aide les moteurs et les
lecteurs à comprendre l'importance, le contexte et la relation entre les
pages.

---

## 7. Images, poids et performance

### 7.1 Images

- utiliser `next/image` lorsque le composant le permet ;
- toujours fournir largeur, hauteur et texte alternatif utile ;
- redimensionner le fichier à son usage réel ;
- utiliser WebP ou AVIF pour les photos et PNG/SVG uniquement quand justifié ;
- ne mettre `priority` que sur l'image réellement responsable du LCP ;
- charger les images hors écran en différé ;
- une image décorative a une alternative vide, une image informative décrit
  l'information utile ;
- contrôler l'OG générée à 1200 × 630 et son URL publique.

### 7.2 JavaScript, CSS et polices

- garder le contenu principal dans les Server Components lorsque possible ;
- pousser `use client` au composant interactif le plus bas ;
- mesurer le poids du HTML initial et du flux RSC : déplacer une frontière
  client ne suffit pas nécessairement à réduire les octets transférés ;
- ne pas charger un module lourd sur toutes les pages pour un seul widget ;
- différer les scripts non essentiels et les intégrations tierces ;
- éviter les CSS globaux inutilisés et le CSS bloquant répété ;
- ne pas activer globalement une optimisation expérimentale telle que
  l'inlining CSS sans mesurer à la fois la première visite, le poids HTML et la
  navigation récurrente : des feuilles partagées volumineuses doivent rester
  mises en cache séparément ;
- utiliser `next/font` ou des polices locales maîtrisées ;
- vérifier l'absence d'erreurs console et d'appels réseau en échec.

### 7.3 Seuils de suivi

Les Core Web Vitals « bons » sont évalués au 75e percentile des visites :

- LCP ≤ 2,5 s ;
- INP ≤ 200 ms ;
- CLS ≤ 0,1.

Lighthouse est un test de laboratoire utile pour reproduire un problème. Les
données CrUX et Search Console mesurent l'expérience réelle. Un score
Lighthouse parfait ne garantit pas un meilleur classement et ne doit pas
justifier une régression d'utilité, de clarté ou d'accessibilité.

Références officielles : [expérience de page dans Google Search](https://developers.google.com/search/docs/appearance/page-experience?hl=fr), [seuils Core Web Vitals](https://web.dev/articles/defining-core-web-vitals-thresholds?hl=fr) et [documentation Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/).

---

## 8. Accessibilité et rendu réel

Le contenu doit rester utilisable avec un clavier, un lecteur d'écran et un
petit écran :

- ordre H1/H2/H3 logique ;
- un seul landmark `main#main-content`, placé après la navigation principale ;
- liens et boutons avec un nom accessible ;
- focus visible ;
- contrastes lisibles ;
- cibles tactiles suffisantes ;
- tableaux avec en-têtes, défilement maîtrisé et aucune information portée
  uniquement par la couleur ;
- aucun débordement horizontal, texte masqué, footer coupé ou CTA inaccessible ;
- formulaires avec labels, erreurs compréhensibles et fonctionnement sans
  dépendre d'une ressource en échec.

Contrôler au minimum les largeurs `320`, `360`, `390`, `430`, `640`, `768`,
`1024`, `1280`, `1440` et `1600` px sur les gabarits réellement touchés. Une
réponse HTTP `200` et un DOM correct ne remplacent pas l'inspection visuelle.

---

## 9. Checklist avant publication

### Fond et preuve

- [ ] intention, lecteur et décision définis ;
- [ ] faits décisifs sourcés et datés ;
- [ ] estimations et exemples fictifs explicitement nommés ;
- [ ] chiffres et calculs réconciliés dans le corps, tableaux et FAQ ;
- [ ] aucune promesse de ressource, résultat ou délai sans réalité vérifiable ;
- [ ] absence de cannibalisation non résolue.

### Intégration

- [ ] registre correct ajouté ou modifié ;
- [ ] vraie date de publication et vraie date de modification ;
- [ ] page, H1, metadata, canonical et OG cohérents ;
- [ ] JSON-LD parsable et strictement fidèle au visible ;
- [ ] aucun JSON-LD `FAQPage`, qu'une FAQ visible existe ou non ;
- [ ] liens entrants et sortants testés ;
- [ ] ressource réelle, téléchargeable et correctement versionnée ;
- [ ] images dimensionnées et optimisées ;
- [ ] rendu clavier, mobile et ordinateur vérifié.

### Automatisation

- [ ] après revue humaine réelle, le guide apparaît automatiquement dans le
  hub, sitemap et `llms.txt` ; avant cette porte, il reste `noindex,nofollow` ;
- [ ] la landing de ressource ou livre blanc apparaît dans sitemap et
  `llms.txt` ;
- [ ] aucune URL binaire n'a été ajoutée au sitemap ou `llms.txt` ;
- [ ] aucune modification manuelle de `robots.txt` pour ajouter un article ;
- [ ] les commandes du §11 sont vertes.

---

## 10. Checklist après publication

- [ ] URL de production en `200`, sans redirection ;
- [ ] canonical exact et meta robots `index, follow` ;
- [ ] URL visible dans le sitemap public ;
- [ ] URL visible dans `llms.txt` pour les catégories couvertes ;
- [ ] rendu, image OG, liens et téléchargement vérifiés en production ;
- [ ] JSON-LD testé sur l'URL publique ;
- [ ] absence d'erreurs console/réseau et d'API critique en échec ;
- [ ] inspection d'URL Search Console demandée si pertinent ;
- [ ] canonical choisi et état d'indexation contrôlés ultérieurement ;
- [ ] données Core Web Vitals de terrain suivies lorsqu'elles deviennent
  disponibles ;
- [ ] requêtes, impressions, clics et conversions observés avant de réécrire.

Statuts à ne pas confondre :

1. **généré** : le build contient la page ;
2. **déployé** : l'URL publique répond ;
3. **découvert** : Google connaît l'URL ou le sitemap ;
4. **exploré** : un robot a téléchargé la page ;
5. **indexé** : Search Console confirme sa présence dans l'index ;
6. **classé** : la page reçoit des impressions sur une requête ;
7. **cité par une IA** : un outil l'a effectivement utilisée dans une réponse.

Aucun statut ne doit être déduit automatiquement du précédent.

Référence officielle : [outil d'inspection d'URL Search Console](https://support.google.com/webmasters/answer/9012289?hl=fr).

---

## 11. Batterie bloquante du dépôt

Depuis la racine :

```bash
npm run check:seo
npx eslint <fichiers-modifiés>
npx tsc --noEmit
npm test
npm run build
git diff --check
```

La batterie complète doit être lancée dans l'ordre ci-dessus. `npm run build`
n'exécute automatiquement que les étapes 2 à 4 ci-dessous ; `npm test` reste
une barrière distincte du workflow CI et ne doit jamais être omise :

1. `npm test` → suite fonctionnelle complète ; `check:seo` n'en est que le
   sous-ensemble éditorial et d'indexation ;
2. `prebuild` → tests des registres, du sitemap, de `llms.txt`, des ressources
   et de la politique d'indexation ;
3. `next build` avec la valeur `NEXT_PUBLIC_ENV` fournie par l'environnement :
   `production` pour l'artefact public, toute autre valeur pour une preview
   `noindex,nofollow` ;
4. `postbuild` → contrôle de l'artefact : `robots.txt`, sitemap complet,
   `llms.txt`, présence des HTML, indexabilité, canonical, title, H1, JSON-LD
   parsable, absence des schémas retirés `FAQPage` et `HowTo`, identité
   structurée cohérente, guides sans revue réellement `noindex,nofollow` et
   landmark principal utilisable par le lien d'évitement.

Le workflow Cloudflare possède les mêmes barrières avec `precf:build` et
`postcf:build`. Un échec est bloquant. Ne jamais neutraliser un test ou retirer
une URL du registre pour « faire passer le build » sans résoudre la divergence.

Tests responsables :

- `src/lib/guides.test.ts` : registre ↔ routes ↔ images sociales ;
- `src/app/sitemap.test.ts` : pages ↔ sitemap et vraies dates ;
- `src/lib/llms.test.ts` : registres et services ↔ `llms.txt` ;
- `src/app/llms.txt/route.test.ts` : réponse HTTP texte et cache ;
- `src/lib/resources.test.ts` et `src/lib/white-papers.test.ts` : fichiers,
  tailles, formats et chemins ;
- `src/lib/public-claims.test.ts` : aucune promesse commerciale de réponse en
  24 heures sans mesure ni engagement contractuel ;
- `src/components/**/content-claims.test.ts` : retour des promesses, métriques,
  faux vécus et engagements non étayés ;
- `scripts/verify-search-indexing-artifact.mjs` : sortie réelle du build,
  données structurées comprises.

---

## 12. Décisions interdites

- ajouter des articles dans `robots.txt` ;
- déclarer que `llms.txt` améliore Google ou garantit une citation LLM ;
- publier une URL dans le sitemap avant que sa page canonique existe ;
- dater artificiellement une page ou modifier sa date pour paraître fraîche ;
- publier le schéma `FAQPage`, retiré des fonctionnalités prises en charge par
  Google en 2026 ;
- ajouter un schéma non visible uniquement pour viser un résultat enrichi ;
- indexer directement un PDF quand une landing HTML est la source canonique ;
- copier une metadata ou un JSON-LD d'une page voisine sans tout réconcilier ;
- laisser un nouveau contenu sans lien entrant ;
- juger les performances uniquement sur ordinateur ou uniquement sur
  Lighthouse ;
- promettre l'indexation, un classement ou une citation que l'on n'a pas
  observés ;
- contourner les tests bloquants au lieu de réparer la source de vérité.

Cette règle évolue seulement lorsqu'un défaut réel, une modification du code
ou une documentation officielle nouvelle le justifie. Toute nouvelle règle
doit nommer le risque qu'elle empêche.
