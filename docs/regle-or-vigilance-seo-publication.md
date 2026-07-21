# Règle d'or de vigilance SEO et publication

> **LECTURE OBLIGATOIRE.** Lire ce document en entier avant de créer ou de
> modifier une page éditoriale, un guide, un livre blanc, une ressource ou une
> page service. Il complète la
> [charte qualité des guides](charte-qualite-guides.md) : la charte gouverne la
> qualité du fond, ce document gouverne la publication, la découvrabilité et la
> fidélité technique.

Version : **21 juillet 2026** · Périmètre : `https://hagnere-code.ai`

---

## 1. La règle en une phrase

Une page ne peut être publiée que si son contenu visible, ses métadonnées, ses
données structurées, ses registres, son sitemap, son entrée `llms.txt`, son
maillage et son rendu réel — lorsque ces sorties couvrent sa catégorie —
racontent **la même chose, avec des faits vrais et
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
- huit guides écrits avec l'aide d'agents avaient besoin d'une porte éditoriale
  explicite : le registre les maintient `noindex,nofollow` tant que cette porte
  n'est pas franchie. Le 20 juillet 2026, le commanditaire a explicitement
  délégué l'arbitrage aux contre-audits documentés ; les huit guides ont dépassé
  le seuil sans blocage résiduel, puis leur statut d'attente a été retiré ;
- après cette décision, le snapshot éditorial du 21 juillet 2026 contient
  **43 `PUBLISHED_GUIDES`**. Ce nombre décrit le registre du dépôt : il ne prouve
  ni que le dernier déploiement est achevé, ni que les 43 URL ont été explorées
  ou indexées ;
- le 21 juillet 2026, une lecture sur téléphone du guide SEO ou Google Ads a
  révélé un échec que les contrôles techniques et la scorecard n'avaient pas
  détecté : dans un écran de 390 px, le tableau principal mesurait 560 px et
  masquait les colonnes décisives ; le texte demandait en plus de comprendre
  « contrainte dominante », « portes non compensables » et « prochaine preuve ».
  Une page peut donc être exacte, sourcée et indexable tout en restant
  inutilisable pour un dirigeant. La charte impose désormais les 150 premiers
  mots, le filtre anti-langage de consultant et le test mobile pédagogique ;
- des métriques, témoignages, architectures et résultats illustratifs étaient
  parfois formulés comme des preuves de production, et des superlatifs
  d'exclusivité ne reposaient pas sur un relevé exhaustif vérifiable ;
- certains CTA nommés « Réserver » ouvraient en réalité un e-mail ou un
  formulaire, tandis que des objectifs de réponse étaient formulés comme des
  délais garantis ;
- le sitemap entretenait des valeurs `priority` et `changefreq` que Google
  ignore, au lieu de limiter le fichier aux URL et aux vraies dates utiles ;
- les contrôles de production étaient très bons sur les balises, canonical,
  H1, liens et JSON-LD, mais ce bon état reposait trop sur un audit ponctuel ;
- le contrôle post-build ne vérifiait pas encore le caractère renseigné et
  unique des descriptions et titres sociaux, la cohérence de `og:url`, les
  cartes Twitter ni l'existence réelle des images sociales ;
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
  anti-robot n'était pas encore configuré dans les environnements hébergés ;
- la base Neon de production avait la migration initiale mais pas la colonne
  additive `privacy_notice_version` attendue par la soumission : la migration
  versionnée a été appliquée puis le schéma relu, rappelant qu'un fichier SQL
  commité ne prouve jamais son application ;
- un collecteur d'analytics prévu pour un binding Cloudflare était appelé sur
  une production Vercel sans stockage compatible, et la page d'erreur affirmait
  à tort que l'équipe avait été notifiée sans outil de remontée configuré ;
- Calendly et la dictée vocale avaient des chemins d'échec incomplets
  (intégration vide, double démarrage, traitement après navigation et absence
  de durée maximale) ;
- plusieurs composants utilisaient des landmarks ou rôles ARIA imprécis :
  région de contact non nommée, tables portant le même nom, `aside` imbriqués,
  faux onglets sans panneaux associés et erreurs de formulaire insuffisamment
  reliées aux champs ;
- le contrôle de l'artefact pouvait valider un ancien `.next` : un guide passé
  de brouillon à publié devait aussi être exigé dans le hub, le sitemap et
  `llms.txt`, et les sources plus récentes que le build devaient invalider le
  résultat ;
- des `Offer` JSON-LD affichaient des délais et prix plus fermes que les offres
  visibles : tout balisage commercial caché doit être supprimé ou être le
  miroir exact, fiscalité comprise, de la page ;
- un calculateur appelait « gain net » et « ROI » la simple soustraction d'un
  budget illustratif, en supposant 100 % des pertes supprimées, et promettait un
  PDF inexistant : un calcul doit nommer ses hypothèses, ses coûts omis et la
  fonctionnalité réellement disponible ;
- des formulations comme « notre historique de missions », « nous refusons
  régulièrement » ou « toujours les mêmes personnes » transformaient une
  politique souhaitée en vécu ou garantie non documentés ;
- l'URL Calendly avait plusieurs copies et pouvait diverger entre footer,
  widget, page et e-mail ; elle est désormais résolue depuis une seule source ;
- le rate-limit acceptait une pseudo-IP par expression régulière, faisait
  confiance au mauvais en-tête derrière Vercel et restait en mémoire pour la
  route SIRENE ; les IP sont validées, les en-têtes dépendent du proxy attesté
  et les routes publiques sensibles utilisent la réservation Postgres ;
- un refus de rate-limit pouvait encore créer des lignes de journal sans borne,
  le défi arithmétique était validé avant de consommer le quota, et les appels
  Groq/Resend n'avaient pas tous de durée maximale : chaque issue est désormais
  liée à une réservation, le quota de requête précède le défi, le quota
  personnel d'e-mail ne lui est lié qu'après validation, et les fournisseurs
  ont un délai maximal ;
- une panne du second e-mail pouvait être annoncée comme si l'équipe n'avait
  rien reçu. Les deux livraisons sont séparées et idempotentes ; leur état ne
  doit jamais être recomposé depuis un `catch` global ;
- des études mesurant l'exécution de tâches isolées avec une IA étaient
  extrapolées à tort en économies de prix ou de délai pour un projet complet :
  elles peuvent éclairer une capacité, jamais prouver le budget, la durée ou la
  qualité d'une prestation réelle ;
- certains contenus mélangeaient le régime micro-fiscal, la franchise en base
  de TVA, la récupération de TVA, les aides et le traitement comptable des
  dépenses numériques. Ces régimes ont des conditions et des dates propres :
  seule une source officielle à jour peut fonder une explication générale, et
  une décision individuelle exige une vérification comptable ou fiscale ;
- une interface de démonstration ressemblait à une capture de production sans
  signaler assez clairement que ses données étaient inventées. Toute maquette
  doit porter une mention visible telle que « maquette — données fictives » ;
- des études de cas mélangeaient observations publiques, déclarations internes
  et détails techniques non corroborés. Une observation publique doit être
  datée et sourcée ; une information interne doit être nommée comme telle et
  autorisée ; le JSON-LD ne reprend que les éléments réellement prouvés ;
- la réservation persistante d'un quota pouvait compter sans borne les refus
  et ignorer le chemin d'accès réellement utilisé par PostgreSQL. Les filtres
  de fenêtre restent à l'extérieur de l'agrégat, et un index partiel versionné
  couvre les seules lignes actives ; son existence en production doit être
  vérifiée après migration ;
- l'adresse e-mail pouvait être liée à un quota avant que le défi anti-robot ne
  soit validé, permettant de pénaliser une adresse tierce. Une réservation de
  requête ou d'IP peut précéder le défi, mais le quota personnel d'e-mail n'est
  lié qu'après validation syntaxique et anti-robot ;
- une nouvelle tentative de formulaire pouvait produire un second envoi ou
  exposer des identifiants internes. La clé d'idempotence doit rester stable
  pour une même demande, les identifiants de base restent privés et un conflit
  de création doit retrouver le résultat précédent sans nouvelle livraison ;
- une demande enregistrée en base mais non livrée par e-mail pouvait recevoir
  une réponse de succès trompeuse. L'API doit distinguer « enregistré » de
  « livré », renvoyer une erreur honnête lorsque la notification équipe échoue
  et proposer une nouvelle tentative idempotente ;
- la confiance dans `X-Forwarded-For` variait implicitement selon
  l'hébergement. La liste et l'ordre des en-têtes de proxy acceptés doivent être
  configurés explicitement, documentés et testés ; sans proxy attesté, ne pas
  déduire une identité client d'un en-tête fourni par l'appelant ;
- les données structurées d'article pouvaient dériver sur l'image sociale, les
  dates ou un nombre de mots estimé. L'image doit exister, les dates doivent
  venir du registre et `wordCount` est omis tant qu'il n'est pas calculé depuis
  le corps visible final ;
- plusieurs composants recopiaient les mêmes hypothèses de calcul et des blocs
  HTML morts conservaient d'anciennes promesses. Les paramètres d'un
  calculateur ont désormais une source partagée, et tout fragment remplacé à
  la composition doit être supprimé plutôt que laissé dormant.

La correction durable consiste donc à avoir des **sources de vérité uniques**,
des **tests avant build** et un **contrôle de l'artefact après build**.

---

## 3. Ne jamais confondre les trois mécanismes

| Mécanisme     | Rôle réel                                                              | Source du projet                                   | Ce qu'il ne prouve pas                                              |
| ------------- | ---------------------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------- |
| `robots.txt`  | Autoriser ou interdire le crawl de familles d'URL                      | `src/app/robots.ts`                                | Découverte exhaustive, indexation ou classement                     |
| `sitemap.xml` | Déclarer les URL canoniques publiques que l'on souhaite voir explorées | `src/app/sitemap.ts`                               | Crawl immédiat ou indexation effective                              |
| `llms.txt`    | Donner un index éditorial lisible à certains outils et assistants      | `src/lib/llms.ts` puis `src/app/llms.txt/route.ts` | Prise en charge par Google, citation par un LLM ou gain de position |

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

En développement et en preview, le blocage global est volontaire. Sur Vercel,
seul `VERCEL_ENV=production` ouvre l'indexation ; cette variable système est
autoritaire afin qu'une preview mal configurée ne devienne jamais indexable.
Hors Vercel, la CI et la chaîne Cloudflare doivent fournir
`NEXT_PUBLIC_ENV=production` pour l'artefact public.

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
`SERVICE_LINKS`. `LLMS_SERVICE_LINKS` n'est qu'un alias dérivé automatiquement,
avec un test d'égalité avec les services du sitemap.

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

| Type de contenu          | Registre obligatoire                              | Route ou consommateur automatique                                                  |
| ------------------------ | ------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Guide                    | `src/lib/guides.ts` (`GUIDES`)                    | route et metadata ; seuls `PUBLISHED_GUIDES` alimentent hub, sitemap et `llms.txt` |
| Ressource téléchargeable | `src/lib/resources.ts` (`DOWNLOADABLE_RESOURCES`) | hub, landing page, sitemap et `llms.txt`                                           |
| Livre blanc              | `src/lib/white-papers.ts` (`WHITE_PAPERS`)        | hub, landing page, sitemap et `llms.txt`                                           |
| Service                  | `src/lib/services.ts` (`SERVICE_LINKS`)           | sitemap et `llms.txt`, alignement testé                                            |
| Pages locales            | `src/lib/local-pages.ts` (`LOCAL_PAGES`)          | pages locales et sitemap                                                           |
| Canonical du domaine     | `src/lib/seo.ts` (`SITE_URL`)                     | métadonnées et générateurs                                                         |
| Politique d'indexation   | `src/lib/search-indexing.ts`                      | layout et `robots.ts`                                                              |

Ne pas recopier une source de vérité dans un second tableau « temporaire ».
Si une donnée doit alimenter plusieurs sorties, la centraliser puis tester les
consommateurs.

### Ajouter un guide

1. respecter l'ordre de lecture unique défini dans
   `docs/workflow-maitre-guides-4-passes.md`, sans sauter la charte, la roadmap
   ni le modèle de dossier ;
2. créer ou mettre à jour `docs/research/<slug>.md`, y compris le journal des
   quatre passes ;
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

Créer la page puis ajouter une seule entrée fidèle dans `SERVICE_LINKS`.
Le sitemap et le générateur `llms.txt` consomment ce registre commun ; ce
dernier expose seulement l'alias dérivé `LLMS_SERVICE_LINKS`. Ne pas
réintroduire de liste parallèle.

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

- `Article` : headline, description, image, auteur et dates exactes ; l'image
  doit être la même que celle annoncée dans les métadonnées sociales, répondre
  publiquement et conserver les dimensions attendues ;
- `BreadcrumbList` : même hiérarchie que la navigation et même canonical ;
- les FAQ visibles restent utiles au lecteur, mais aucun schéma `FAQPage` ne
  doit être publié : Google a retiré ce résultat enrichi le 7 mai 2026 puis sa
  documentation le 15 juin 2026 ;
- les étapes de méthode restent visibles, mais aucun schéma `HowTo` : Google a
  retiré ce résultat enrichi et sa documentation en septembre 2023 ;
- `Organization` / `ProfessionalService` : une identité stable, un seul nom,
  une adresse et des identifiants recopiés depuis leur source officielle ;
- lorsqu'une même organisation est déjà décrite, la référencer par son `@id`
  plutôt que répéter une entité complète susceptible de diverger ;
- un `Offer`, prix, délai ou avantage n'est publié que s'il existe dans le
  visible avec le même montant ou la même fourchette, le même régime HT/TTC et
  les mêmes réserves contractuelles ;
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

Une étude de productivité sur une tâche isolée, avec un protocole, une
population et un outil donnés, ne prouve ni le prix, ni le délai, ni le gain de
qualité d'un projet web complet. Pour passer de l'étude à une estimation de
projet, il faut documenter les tâches couvertes, celles qui ne le sont pas, les
reprises humaines, la recette, l'intégration et la maintenance. En l'absence de
ce modèle, écrire seulement ce que l'étude a réellement mesuré.

Une règle fiscale ou une aide n'est jamais une simple phrase commerciale. Le
régime micro-fiscal ne doit pas être confondu avec la franchise en base de TVA,
et une franchise n'interdit pas nécessairement toute option pour la TVA. Les
seuils, conditions d'éligibilité, dépenses admises et traitements comptables
doivent être datés, reliés à une source officielle en vigueur et présentés
comme généraux. Renvoyer le lecteur vers son expert-comptable ou
l'administration pour l'application à sa situation ; ne jamais promettre une
économie, une aide ou une récupération de TVA automatique.

Un calcul commercial ne devient pas un ROI parce qu'il soustrait un prix. Il
faut modéliser et afficher au minimum la part réellement récupérable, le temps
résiduel, l'adoption, la migration, l'hébergement, la maintenance et l'horizon.
À défaut, nommer le résultat « écart brut théorique » et écrire qu'il ne s'agit
ni d'un devis, ni d'un gain prévisionnel, ni d'un ROI.

Un libellé d'action doit aussi décrire sa destination réelle. « Réserver »
doit ouvrir un agenda ou une page de réservation, jamais un formulaire de
contact, une ancre générique ou un `mailto:`. Pour ces destinations, écrire
« Demander un échange » ou « Envoyer un e-mail ». Les anciens fragments HTML
encore présents dans les sources doivent être corrigés même lorsqu'ils sont
remplacés à la composition : sinon une future refonte peut republier une
promesse ou un lien trompeur.

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

Une maquette d'interface, un tableau de bord de démonstration ou une capture
reconstituée porte une étiquette visible « données fictives » au même endroit
que le visuel. Un avertissement éloigné, un commentaire de code ou un texte
alternatif ne suffit pas à empêcher qu'elle soit prise pour une preuve client.

Une étude de cas fondée uniquement sur des pages publiques est décrite comme
une **observation publique datée**, avec l'URL source et la limite de ce qui est
observable. Elle ne permet pas d'attribuer à Hagnéré Code une équipe, une stack,
une décision interne ou un résultat commercial. Si une preuve interne existe,
son périmètre, son autorisation de publication et sa date doivent être
consignés séparément. Les métadonnées et le JSON-LD restent limités au niveau de
preuve le plus faible publiquement vérifiable.

### 5.6 Formulaires, quotas et livraison

Pour les routes publiques, la protection contre l'abus et la réponse au
lecteur doivent rester séparées :

- valider le format des données et le défi anti-robot avant de lier une adresse
  e-mail à son quota personnel ; une réservation IP ou requête indépendante
  peut être consommée plus tôt pour borner les tentatives ;
- n'accepter les en-têtes de proxy qu'avec une configuration d'hébergement
  explicite : `TRUST_X_FORWARDED_FOR=1` uniquement derrière un proxy administré
  qui réécrit cet en-tête ; valider chaque IP avant de l'utiliser comme clé de
  quota ;
- calculer la fenêtre temporelle dans la requête englobante et conserver une
  politique de purge ; un index partiel versionné doit couvrir l'état actif,
  puis être vérifié dans la base réellement déployée ;
- générer une clé d'idempotence stable à partir des éléments nécessaires à une
  même soumission, sans exposer l'identifiant interne de la ligne ;
- enregistrer séparément l'état de persistance, la notification équipe et la
  confirmation prospect ; ne jamais répondre « succès » si la notification
  indispensable a échoué, même lorsque la base a conservé la demande ;
- rendre une nouvelle tentative sûre : elle retrouve la demande existante et
  ne crée ni doublon ni double e-mail.

Il n'existe actuellement aucun worker durable qui reprenne automatiquement les
e-mails non livrés. Un ancien brief non envoyé, daté du 28 avril, doit être
examiné manuellement sans recopier son contenu ni ses données personnelles dans
les journaux ou la documentation. Ne pas le renvoyer automatiquement : vérifier
d'abord sa légitimité, son état, le consentement applicable et le risque de
doublon.

### 5.7 Calculs et sources partagées

Lorsqu'un même calcul apparaît dans une page, un composant, une FAQ ou des
données structurées, ses valeurs par défaut, libellés et hypothèses viennent
d'une source partagée. Un test doit empêcher qu'une copie locale réintroduise
un faux ROI, un coût omis ou un exemple différent. Les anciens fragments HTML
remplacés lors de la composition sont supprimés : un code mort contenant une
promesse reste un risque de republication.

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

Un tableau qui défile peut être accessible techniquement et mauvais pour la
compréhension. Si la question se trouve dans la première colonne et la réponse
hors écran, le contrôle échoue. Les comparaisons contenant des phrases doivent
afficher ensemble la situation, le choix et sa conséquence à 390 px, au besoin
sous forme de cartes ou de listes.

Contrôler au minimum les largeurs `320`, `390`, `768`, `1024` et `1440` px,
puis les ruptures réellement touchées. Si un composant partagé ou le gabarit
change, ajouter `360`, `430`, `640`, `1280` et `1600` px. Une réponse HTTP
`200` et un DOM correct ne remplacent pas l'inspection visuelle.

---

## 9. Checklist avant publication

### Fond et preuve

- [ ] intention, lecteur et décision définis ;
- [ ] les 150 premiers mots décrivent la situation du dirigeant, répondent et
      annoncent la décision sans vocabulaire de consultant ;
- [ ] le terme central est expliqué en français courant à son premier usage ;
- [ ] aucun lexique massif, métaphore propriétaire ou cadre de méthode ne
      précède la réponse ;
- [ ] chaque H2 reste compréhensible isolément ;
- [ ] la FAQ répond dans sa première phrase et le CTA promet un résultat
      concret pour le prospect ;
- [ ] faits décisifs sourcés et datés ;
- [ ] estimations et exemples fictifs explicitement nommés ;
- [ ] chiffres et calculs réconciliés dans le corps, tableaux et FAQ ;
- [ ] aucune promesse de ressource, résultat ou délai sans réalité vérifiable ;
- [ ] aucune fonctionnalité annoncée (PDF, rapport, réservation, envoi) si le
      parcours ne la produit pas réellement ;
- [ ] chaque CTA décrit sa destination et aucun lien public ne pointe vers `#` ;
- [ ] absence de cannibalisation non résolue.

### Intégration

- [ ] registre correct ajouté ou modifié ;
- [ ] vraie date de publication et vraie date de modification ;
- [ ] page, H1, metadata, canonical et OG cohérents ;
- [ ] JSON-LD parsable et strictement fidèle au visible ;
- [ ] aucun JSON-LD `FAQPage`, qu'une FAQ visible existe ou non ;
- [ ] liens entrants et sortants testés ;
- [ ] si une ressource est promise, elle est réelle, téléchargeable, testée et
      correctement versionnée ; sinon, l’absence de ressource est justifiée ;
- [ ] images dimensionnées et optimisées ;
- [ ] rendu clavier, mobile et ordinateur vérifié ;
- [ ] à 390 px, aucune réponse décisive n'est cachée dans une colonne qu'il faut
      faire défiler.

### Automatisation

- [ ] après validation éditoriale documentée — test lecteur humain ou
      délégation explicite du commanditaire selon le §4 — le guide apparaît
      automatiquement dans le hub, sitemap et `llms.txt` ; avant cette porte, il
      reste `noindex,nofollow` ;
- [ ] la landing de ressource ou livre blanc apparaît dans sitemap et
      `llms.txt` ;
- [ ] aucune URL binaire n'a été ajoutée au sitemap ou `llms.txt` ;
- [ ] aucune modification manuelle de `robots.txt` pour ajouter un article ;
- [ ] les commandes du §11 sont vertes.
- [ ] les écritures des agents parallèles sont figées avant le dernier test et
      aucun fichier source n'est plus récent que l'artefact validé.

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
NEXT_PUBLIC_ENV=production npm run build
git diff --check
```

La batterie complète doit être lancée dans l'ordre ci-dessus. Le build final
local utilise toujours `NEXT_PUBLIC_ENV=production` afin de vérifier l’artefact
indexable ; un simple `npm run build` local contrôle un autre état. Le build
n'exécute automatiquement que les étapes 2 à 4 ci-dessous ; `npm test` reste
une barrière distincte du workflow CI et ne doit jamais être omise :

1. `npm test` → suite fonctionnelle complète ; `check:seo` n'en est que le
   sous-ensemble éditorial et d'indexation ;
2. `prebuild` → tests des registres, du sitemap, de `llms.txt`, des ressources
   et de la politique d'indexation ;
3. `next build` avec `VERCEL_ENV` autoritaire sur Vercel (`production` pour
   l'artefact public, `preview` pour un artefact `noindex,nofollow`) ; hors
   Vercel, `NEXT_PUBLIC_ENV=production` ouvre explicitement l'indexation ;
4. `postbuild` → contrôle de l'artefact : `robots.txt`, sitemap complet,
   `llms.txt`, présence des HTML, indexabilité, canonical, title, descriptions,
   `lang=fr`, exactement un title et un H1, OpenGraph, Twitter, signature et
   dimensions 1200 × 630 des images sociales, JSON-LD parsable,
   absence des schémas retirés `FAQPage` et `HowTo`, identité structurée
   cohérente, relation bidirectionnelle entre statut éditorial, hub, sitemap et
   `llms.txt`, absence de `priority`/`changefreq`, guides sans revue réellement
   `noindex,nofollow`, fraîcheur source → artefact et landmark principal
   utilisable par le lien d'évitement.

Le workflow Cloudflare possède les mêmes barrières avec `precf:build` et
`postcf:build`. Un échec est bloquant. Ne jamais neutraliser un test ou retirer
une URL du registre pour « faire passer le build » sans résoudre la divergence.

Tests responsables :

- `src/lib/guides.test.ts` : registre ↔ routes ↔ images sociales ;
- `src/lib/editorial-governance.test.ts` : trace la délégation éditoriale des
  huit guides concernés, leur dossier de recherche et leur statut publié ;
- `src/app/sitemap.test.ts` : pages ↔ sitemap et vraies dates ;
- `src/lib/llms.test.ts` : registres et services ↔ `llms.txt` ;
- `src/app/llms.txt/route.test.ts` : réponse HTTP texte et cache ;
- `src/lib/resources.test.ts` et `src/lib/white-papers.test.ts` : fichiers,
  tailles, formats et chemins ;
- `src/lib/public-claims.test.ts` : aucune promesse commerciale de réponse en
  24/48 heures sans mesure ni engagement contractuel, ni CTA « Réserver »
  pointant vers un formulaire ou un email, faux vécu récurrent ou faux ROI/PDF ;
- `src/lib/commercial-consistency.test.ts` et
  `src/lib/excel-cost-calculator.test.ts` : offres visibles et structurées
  alignées, fiscalité explicite, calculateur partagé et hypothèses conservées ;
- `src/lib/route-security-contract.test.ts`, `provider-timeout.test.ts`,
  `resend-email.test.ts`, `project-inquiry-delivery.test.ts` et
  `src/app/api/project-inquiry/route.test.ts` : ordre des réservations,
  validation anti-robot avant liaison du quota e-mail, délais fournisseurs,
  idempotence, non-exposition des identifiants internes et distinction entre
  persistance, notification équipe et confirmation prospect ;
- `src/components/**/content-claims.test.ts` : retour des promesses, métriques,
  faux vécus et engagements non étayés ;
- `scripts/verify-search-indexing-artifact.mjs` : sortie réelle du build,
  données structurées comprises.

### Gel du snapshot avant validation finale

Avec plusieurs agents, annoncer puis imposer un gel d'écriture avant la
batterie finale. Après ce gel :

1. relever `git status` et les dates des sources ;
2. lancer tests, lint, typecheck et build sur ce seul snapshot ;
3. recommencer toute preuve invalidée par une modification ultérieure ;
4. ne rattacher un nombre de tests, d'URL ou un score qu'au commit et au build
   exacts qui les ont produits.

### Limites connues à ne jamais masquer

- Le défi arithmétique signé reste une friction anti-robot, pas une preuve
  d'humanité. Son jeton est rejouable pendant quinze minutes ; le rate-limit
  persistant consommé avant validation borne cet impact. Une consommation
  unique exigerait un état serveur supplémentaire et ne dispenserait pas du
  quota.
- La CSP conserve actuellement `unsafe-inline` pour les scripts et styles dont
  Next.js et les grands gabarits HTML ont besoin. Aucun XSS concret n'a été
  relevé et les entrées utilisateurs sont échappées, mais la défense reste
  partielle. La retirer proprement demande une stratégie de nonces/hashes et
  une mesure de son effet sur le rendu statique et les performances.
- Les tests automatiques des routes et fournisseurs couvrent les contrats et
  branches simulables. Un envoi réel doit rester un smoke test contrôlé, car il
  crée une ligne en base et des e-mails.
- Aucun worker durable ne reprend actuellement les notifications e-mail
  échouées. L'ancien brief non envoyé du 28 avril reste une revue manuelle, sans
  envoi automatique ni exposition de données personnelles.
- Une revue technique, SEO ou juridique réduit le risque ; elle ne vaut ni
  certification de sécurité, ni validation d'avocat, ni garantie d'indexation.

---

## 12. Décisions interdites

- ajouter des articles dans `robots.txt` ;
- déclarer que `llms.txt` améliore Google ou garantit une citation LLM ;
- publier une URL dans le sitemap avant que sa page canonique existe ;
- dater artificiellement une page ou modifier sa date pour paraître fraîche ;
- publier le schéma `FAQPage` sur ce site : Google réserve désormais
  l'affichage régulier de ce résultat enrichi aux sites gouvernementaux et de
  santé reconnus ; ce balisage n'apporterait ici aucun effet visible attendu ;
- ajouter un schéma non visible uniquement pour viser un résultat enrichi ;
- indexer directement un PDF quand une landing HTML est la source canonique ;
- copier une metadata ou un JSON-LD d'une page voisine sans tout réconcilier ;
- laisser un nouveau contenu sans lien entrant ;
- juger les performances uniquement sur ordinateur ou uniquement sur
  Lighthouse ;
- promettre l'indexation, un classement ou une citation que l'on n'a pas
  observés ;
- contourner les tests bloquants au lieu de réparer la source de vérité ;
- appeler « réservation » une simple demande de contact ou un email ;
- transformer une étude de tâches avec IA en promesse de prix ou de délai de
  projet ;
- confondre micro-fiscalité, franchise en base de TVA, récupération de TVA et
  éligibilité à une aide ;
- présenter une maquette ou une observation publique comme une preuve client ;
- faire confiance à un en-tête proxy non attesté, lier un quota e-mail avant le
  défi anti-robot ou masquer un échec de livraison derrière un succès de base ;
- laisser une ancienne promesse dans un bloc source mort sous prétexte qu'il
  n'est pas rendu aujourd'hui.

Cette règle évolue seulement lorsqu'un défaut réel, une modification du code
ou une documentation officielle nouvelle le justifie. Toute nouvelle règle
doit nommer le risque qu'elle empêche.
