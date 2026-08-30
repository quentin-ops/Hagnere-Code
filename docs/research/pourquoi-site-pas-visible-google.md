# Dossier de recherche — Pourquoi mon site n'est-il pas visible sur Google ?

**Objet :** socle de preuves de l'article publié sur
`src/app/guides/pourquoi-site-pas-visible-google/page.tsx`, dans l'état où il
se trouve le **30 août 2026**.

**Rédigé le :** 30 août 2026.
**Révisé le :** 30 août 2026, après correction des onze écarts du §0.
**Empreinte de l'article décrit :**
`81a4f978e409fedb6148bf9d5da392c57353126d952993a8c6f8cc4a71b9ddf1`
(`shasum -a 256 src/app/guides/pourquoi-site-pas-visible-google/page.tsx`).
**Empreinte des tests colocalisés :**
`fb3eba6c8b5fc01fad739269e5d0360588eb6503f4c3032ef57ae90f546da810`.

> **Ce dossier remplace intégralement la version du 18 août 2026.** L'ancien
> dossier décrivait une page qui n'existe plus : quatre sections, dix sources,
> aucun cas construit, aucun montant. La page du 30 août 2026 en compte huit,
> cite vingt-deux sources, porte un cas construit chiffré et trois scénarios
> d'incident. Aucun verdict, aucun score et aucune date de consultation de
> l'ancien dossier n'est repris ici comme une validation de l'état actuel. Sa
> structure de sections, elle, est conservée pour qu'un lecteur habitué au
> format s'y retrouve.

---

## 0. Écarts relevés dans la page publiée — traités le 30 août 2026

Une première passe de traçabilité, le 30 août 2026, avait relevé onze écarts
sans avoir le droit de toucher à la page. Une seconde passe, le même jour, a la
main sur `src/app/guides/pourquoi-site-pas-visible-google/`, sur ce dossier et
sur la seule entrée `pourquoi-site-pas-visible-google` de `src/lib/guides.ts`.
Les onze sont traités ci-dessous. **Aucun n'était une erreur de calcul :** les
vingt-quatre opérations de l'article ont été refaites à la main (§F) une
première fois avant correction, une seconde après, et tombent juste au centime
dans les deux relevés.

Les vingt-et-une URL externes du bloc `legalSources` ont été **rouvertes une
seconde fois le 30 août 2026** par la passe de correction elle-même, `curl` +
débalisage, avec recherche littérale des chaînes citées (§B.3). La
vingt-deuxième, `/tarifs`, a été relue dans `src/components/tarifs/body.ts`.
C'est ce second relevé, et lui seul, qui autorise la page à écrire « relues le
30 août 2026 ».

### E1 — Date de dernière modification en retard d'une réécriture — **CORRIGÉ**

`src/lib/guides.ts` déclarait `dateModified: "2026-08-28T09:00:00Z"`, valeur
verrouillée par test, alors que le dernier commit touchant la page était
`7c3926a` du 2026-08-30 (898 lignes ajoutées, 579 supprimées : table des
matières renommée, sections 06 et 08 créées, FAQ introduite, treize sources
ajoutées). Le §15 de la charte range ce type d'intervention parmi les
changements substantiels.

**Issue retenue :** corriger. `dateModified` vaut désormais
`"2026-08-30T17:30:00Z"`, et le test qui la verrouille est réaligné sur cette
valeur, avec la raison écrite au-dessus. Un second contrôle a été ajouté : la
date **visible** dans le bandeau doit dire la même chose que le registre —
`expect(readerVisibleText(renderedPage)).toContain("Mis à jour le 30 août 2026")`.
`datePublished` n'a pas bougé et ne bougera pas.

### E2 — Treize sources entrées après la date de relecture revendiquée — **CORRIGÉ**

La réserve de périmètre et le bloc « Transparence » écrivaient « relues le
28 août 2026 » quand treize des vingt-deux sources n'étaient entrées dans la
page que le 30/08 (`git show f6ac78a:…/page.tsx` n'en compte que dix).

**Issue retenue :** corriger, après avoir rendu la phrase vraie. Les
vingt-et-une sources externes ont été rouvertes le 30 août 2026 par la passe de
correction, et les deux mentions disent maintenant « relues le 30 août 2026 ».
Un test vérifie que les deux endroits portent la même date et qu'aucune date de
consultation ne reste au 28 août.

### E3 — Deux dates de consultation individuelles antérieures à leur source — **CORRIGÉ**

« Google Search Console API · quotas d'utilisation […] Consultée le 28 août
2026 » et « Hagnéré Code · tarifs publics […] Grille relevée le 28 août 2026 »
dataient toutes deux d'avant l'entrée de leur source dans la page.

**Issue retenue :** corriger. Les deux portent désormais le 30 août 2026, date
à laquelle `developers.google.com/webmaster-tools/limits` a effectivement été
rouverte (les trois quotas y ont été relus, §D.7) et à laquelle la grille a été
relue dans `src/components/tarifs/body.ts` (§D.10). La troisième mention datée,
sur « fonctionnement de la recherche », est passée au 30 août pour la même
raison : la page a été rouverte ce jour-là.

Le piège qui explique probablement la confusion initiale reste vrai et mérite
d'être consigné : `developers.google.com/webmaster-tools/limits` affiche
elle-même « Last updated **2025-08-28** UTC ». Un 28 août y figure, mais c'est
la date de mise à jour de Google, et pas la bonne année.

### E4 — « test en direct » n'est pas le libellé français de la Search Console — **CORRIGÉ**

L'article employait « test en direct » **sept fois** — §02, tableau §03 deux
fois, mémo §03, mémo §07, tableau §08, et la description de la source 9012289.
Le relevé initial en comptait cinq dans le corps ; le décompte exact est de six
dans le corps plus une dans le bloc de sources. L'outil de la section 07 en
portait une huitième, dans `SearchVisibilityDiagnostic.tsx`.

Relevé du 30 août 2026 sur le HTML brut de
`https://support.google.com/webmasters/answer/9012289?hl=fr`, refait par la
passe de correction : occurrences de `en direct` = **0**, de `test en ligne` =
**45**, de `Tester l'URL active` = **3**, de `Test en ligne` (capitale) = **3**.

**Issue retenue :** corriger. Les huit occurrences disent « test en ligne », et
le §02 nomme désormais le bouton mot pour mot : « seul le test en ligne, ouvert
par « Tester l'URL active », montre la version rendue ». Un test interdit la
chaîne fautive dans le corps mesuré **et** dans les deux fichiers de l'outil.

### E5 — L'outil publiait une formule que le corps s'interdit — **CORRIGÉ**

`src/lib/search-visibility-diagnostic.ts` écrivait « l'adresse canonique choisie
par Google » et « l'adresse canonique Google » ; `SearchVisibilityDiagnostic.tsx`
écrivait « celle choisie par Google » et « filtrez l'adresse canonique choisie
par Google ». Le champ s'appelle « URL canonique sélectionnée par Google »
(relevé le 30/08/2026 sur 9012289 : « consultez le champ Indexation des pages >
URL canonique sélectionnée par Google »). Le test du guide interdisait déjà la
chaîne fautive, mais ne voyait pas l'outil : son bloc porte
`data-read-time-exclude="true"` et `stripReadTimeExcludedElements` le retire de
`articleHtml()` avant tout contrôle.

**Issue retenue :** corriger, et fermer l'angle mort. Les quatre chaînes portent
le libellé exact. Deux tests verrouillaient l'ancienne formule
(`SearchVisibilityDiagnostic.test.tsx` et `search-visibility-diagnostic.test.ts`) :
ils ont été **corrigés, pas retirés ni affaiblis** — ils vérifient la même
phrase sous le bon libellé, avec la raison écrite au-dessus. Et le test du guide
lit désormais les deux fichiers de l'outil pour y interdire « canonique choisie
par Google », « adresse canonique Google » et « test en direct », donc le
garde-fou couvre enfin l'endroit où la formule est publiée.

**Note de territoire.** Ces deux fichiers et leurs tests sortent du répertoire
du guide, mais ils ne servent qu'à lui : `grep` ne les référence nulle part
ailleurs que dans `page.tsx`, son test colocalisé et leurs propres tests.

### E6 — La règle d'accès était rattachée à la mauvaise page — **LOCALISATEUR CHANGÉ**

La FAQ rattachait « la demande d'indexation exige d'être propriétaire ou
utilisateur avec accès complet » à « utilisateurs et autorisations »
(support 7687615). Relevé du 30/08/2026 sur cette page, refait par la passe de
correction : elle ne contient **aucune occurrence du mot « indexation »**, ni
ligne « Demander l'indexation ». Elle porte bien une ligne « Inspection de
l'URL » avec « Exploration uniquement » pour l'accès limité.

La phrase existe sur « Demander l'exploration de vos URL »
(`crawling-indexing/ask-google-to-recrawl?hl=fr`, rouverte le 30/08/2026) :
« Vous devez être un propriétaire ou un utilisateur avec accès complet à la
propriété Search Console pour pouvoir demander une indexation dans l'outil
d'inspection d'URL. »

**Issue retenue :** changer le localisateur, après réouverture des deux pages.
La règle est portée par la description de la source `ask-google-to-recrawl`, et
la FAQ dit maintenant laquelle des deux pages porte quoi : « La page
"utilisateurs et autorisations" décrit quatre niveaux et n'accorde l'inspection
d'URL qu'aux deux premiers ; celle sur la demande d'exploration ajoute qu'une
indexation ne peut être demandée que par un propriétaire ou un utilisateur avec
accès complet. » Un test vérifie l'entrée 7687615 (aucune mention d'indexation)
et l'entrée `ask-google-to-recrawl` (la règle d'accès).

### E7 — « sans partage d'un compte personnel » prêté à une source qui ne l'écrit pas — **RETIRÉ**

La description de la source 7687615 attribuait cette consigne à Google. Relevé
du 30/08/2026 : la page décrit l'ajout d'un utilisateur par son adresse de
compte Google et les quatre niveaux d'autorisation, et ne contient ni « compte
personnel », ni « mot de passe », ni aucune phrase déconseillant le partage.

**Issue retenue :** retirer l'attribution. La description ne dit plus que ce que
la page dit. La recommandation, elle, reste — c'est une bonne recommandation —
mais elle est signée dans la FAQ : « c'est notre recommandation, pas une
consigne de Google ». Un test verrouille les deux faces.

### E8 — Trois scénarios déclarés non cumulatifs, puis additionnés — **CORRIGÉ**

L'arithmétique était juste (§F, C13 à C15 : 50 + 700 + 1 400 + 50 + 1 050 + 175
= 3 425, et les deux lectures recoupent), mais le total additionnait trois
mondes mutuellement exclusifs sans le dire, alors que la section pose deux
paragraphes plus haut « ils ne se cumulent pas ». Ce n'était pas un faux calcul,
c'était une assiette non annoncée.

**Issue retenue :** corriger l'assiette, garder l'arithmétique. Le paragraphe
s'ouvre maintenant par « Ces trois scénarios s'excluent : leur somme ne décrit
aucune facture réelle, elle compare trois façons de se tromper. Ainsi lus, les
trois scénarios pèsent 3 425 € […] », et la phrase qui suit parle du
« comparateur », plus du « total ». Aucun montant n'a bougé. Trois assertions
nouvelles verrouillent la déclaration d'assiette là où elle est lue.

### E9 (mineur) — Deux formulations de la même limite de sitemap — **CORRIGÉ**

La FAQ écrivait « 50 000 URL et 50 Mo par fichier », le bloc de sources
« 50 000 URL et 50 Mo non compressés par fichier ». La source écrit : « Tous les
formats limitent la taille d'un seul sitemap à 50 Mo (sans compression) ou
50 000 URL » (relevé le 30/08/2026).

**Issue retenue :** corriger les deux, dans les termes de la source. La FAQ dit
« plafonne un fichier à 50 Mo sans compression ou 50 000 URL » ; le bloc de
sources dit « Un seul sitemap est plafonné à 50 Mo sans compression ou
50 000 URL […] et ne contenir que des URL absolues et complètes » — « complètes »
et non « canoniques », qui était l'autre mot de trop de cette description
(« utilisez des URL absolues et complètes dans vos sitemaps »).

### E10 (mineur) — La statistique de bandeau resserrait la source — **CORRIGÉ**

Le bandeau publiait « HTML lu par Googlebot · 2 Mo » quand la source écrit
« les 2 premiers Mo d'un type de fichier compatible ».

**Issue retenue :** corriger l'étiquette, qui dit maintenant « Lu par
Googlebot · 2 Mo » — sans restreindre la limite au HTML. Le corps de l'article
reprenait déjà la formule exacte et n'a pas bougé.

### E11 (mineur) — Contradiction de lieu entre §01 et §02 — **CORRIGÉ**

La §01 annonçait « trois commandes à taper sur votre serveur », la §02 précise
« la commande ci-dessus mesure un seul chargement depuis votre poste », et la
FAQ « les commandes de la section 02 se jouent depuis n'importe quel poste ».

**Issue retenue :** corriger la §01, qui dit maintenant « trois commandes à
taper depuis votre poste ». Un test vérifie les deux formulations ensemble, pour
que la contradiction ne puisse pas se reformer d'un seul côté.

### Ce qui n'est pas un écart

Pour éviter qu'un relecteur pressé ne les rouvre :

- **Les vingt-quatre calculs sont exacts**, avant comme après correction.
  Refaits à la main en §F, sans rejouer les formules de la page.
- **Le temps de lecture est mesuré.** `npx tsx scripts/measure-guide-readtime.mjs
  pourquoi-site-pas-visible-google` répond, le 30/08/2026 après correction :
  `pourquoi-site-pas-visible-google  4199 mots  21 min`, et `--check` répond
  `OK … mesuré 21 min · publié 21 min`. `round(4199 / 200) = round(20,995) = 21`.
  Le calibre reste dans la bande 3 000 à 4 200 mots du §5.3.
- **Les cinq motifs du rapport d'indexation sont reproduits mot pour mot.**
  Revérifiés un par un sur le HTML brut de 7440203 le 30/08/2026 (§D.4).
- **Les trois prix Hagnéré Code cités existent sur `/tarifs`.** Revérifiés dans
  `src/components/tarifs/body.ts` (§D.10).
- **La suite de tests colocalisée passe.**
  `npx vitest run src/app/guides/pourquoi-site-pas-visible-google`
  → `Test Files 1 passed (1) · Tests 47 passed (47)`, le 30/08/2026 après
  correction. `npx tsc --noEmit` est propre.

---

## A. Identité de l'objet décrit

```text
Slug                : pourquoi-site-pas-visible-google
URL de production   : https://hagnere-code.ai/guides/pourquoi-site-pas-visible-google
Fichier             : src/app/guides/pourquoi-site-pas-visible-google/page.tsx
Tests colocalisés   : src/app/guides/pourquoi-site-pas-visible-google/content-quality.test.ts (47 tests)
Outil embarqué      : src/components/guides/SearchVisibilityDiagnostic.tsx
                      + src/lib/search-visibility-diagnostic.ts (logique pure)
                      + src/lib/search-visibility-diagnostic.test.ts
Illustrations       : public/guides/pourquoi-site-pas-visible-google/diagnostic-google-{16x9,4x3,1x1}.svg
Image sociale       : opengraph-image.tsx (1200 × 630, createGuideOgImage)
Registre            : src/lib/guides.ts, entrée « pourquoi-site-pas-visible-google »
Section             : Référencement naturel
Statut éditorial    : published
datePublished       : 2026-08-18T12:42:00Z
dateModified publié : 2026-08-30T17:30:00Z  ← corrigé, voir E1
readTimeMin         : 21 (mesuré, cf. §0)
Auteur affiché      : TEAM.quentin (président fondateur), profil /equipe#fondateur
Calibre mesuré      : 4 199 mots dans l'article rendu (après correction)
Bande visée         : 3 000 à 4 200 mots (§5.3 de la charte, « méthode / parcours »)
```

**Décision principale que l'article prétend rendre possible :** savoir lequel
des cinq maillons — adresse inconnue, adresse connue non explorée, page
explorée non indexée, autre adresse retenue comme canonique, URL indexée sans
ligne pour la recherche visée — a cédé pour une URL et une recherche données,
et si la suite se règle en interne, se règle par l'attente, ou justifie un
audit payant.

**Frontière annoncée :** l'article s'arrête dès que l'URL est indexée et reçoit
des impressions. « Ce constat seul ne justifie ni une refonte ni une production
de contenus, et c'est ici que ce guide s'arrête : la suite relève d'une analyse
de la recherche, du résultat affiché et de la concurrence. »

**Plan publié (huit sections, `id` d'ancre à préserver — §15) :**

| `id` | N° | Titre publié |
| --- | --- | --- |
| `url-recherche` | 01 | Cinq pannes différentes se cachent derrière le mot « invisible » |
| `exploration` | 02 | Google peut-il ouvrir votre page, et à quel prix pour votre serveur ? |
| `indexation` | 03 | Pourquoi une page lue par Google peut-elle ne jamais être indexée ? |
| `impressions` | 04 | Une URL indexée peut rester absente de la recherche que vous visez |
| `clics` | 05 | Ce que le rapport Performances mesure vraiment |
| `incidents` | 06 | Ce qui rate, et ce que ça coûte |
| `fiche` | 07 | Combien de temps faut-il attendre avant de conclure ? |
| `decision` | 08 | Corriger, attendre ou payer un audit : comment trancher ? |

---

## B. Méthode de vérification — comment refaire ce dossier seul

Tout ce qui suit a été fait le **30 août 2026**. Rien n'est repris d'un relevé
antérieur.

### B.1 Ce qui a été lu dans le dépôt

```bash
# L'article publié, en entier
cat src/app/guides/pourquoi-site-pas-visible-google/page.tsx

# Ce que l'article garantit, et quels chiffres sont verrouillés
cat src/app/guides/pourquoi-site-pas-visible-google/content-quality.test.ts

# L'outil de la section 07 et sa logique pure
cat src/components/guides/SearchVisibilityDiagnostic.tsx
cat src/lib/search-visibility-diagnostic.ts

# La grille tarifaire, source de vérité des trois prix maison cités
grep -n "€ HT" src/components/tarifs/body.ts

# L'entrée de registre qui alimente title, hub, sitemap et JSON-LD
grep -n -A 20 'slug: "pourquoi-site-pas-visible-google"' src/lib/guides.ts
```

### B.2 Les deux commandes qui produisent un chiffre

```bash
npx tsx scripts/measure-guide-readtime.mjs pourquoi-site-pas-visible-google
# → pourquoi-site-pas-visible-google · 4199 mots · 21 min   (30/08/2026, après correction)
#   (le script sépare réellement ces trois champs par des tabulations)

npx tsx scripts/measure-guide-readtime.mjs --check pourquoi-site-pas-visible-google
# → OK  pourquoi-site-pas-visible-google · mesuré 21 min · publié 21 min

npx vitest run src/app/guides/pourquoi-site-pas-visible-google
# → Test Files 1 passed (1) · Tests 47 passed (47)          (30/08/2026)
```

### B.3 Comment les sources ont été rouvertes

Deux passes, dans cet ordre, pour chaque URL du bloc `legalSources` :

1. **Récupération et extraction assistée.** La page est téléchargée, convertie
   en texte, puis interrogée sur les phrases précises que l'article lui prête.
   Cette étape localise le passage ; elle ne fait pas foi à elle seule, parce
   que la citation qu'elle renvoie est reformulée par un intermédiaire.
2. **Vérification sur le HTML brut.** La même URL est récupérée par `curl`,
   débalisée, et les chaînes attendues sont cherchées littéralement, avec leur
   contexte. C'est cette seconde passe qui fait preuve, et c'est elle qui est
   citée dans le §D. La commande générique :

```bash
curl -sSL --compressed -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) \
  AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36" \
  "<URL>" \
| python3 -c "
import re, html, sys
t = re.sub(r'<[^>]+>', ' ', sys.stdin.read())
t = html.unescape(t); t = re.sub(r'\s+', ' ', t)
for k in ['<chaîne attendue>']:
    i = t.find(k)
    print(k, '->', t[max(0, i-180):i+180] if i >= 0 else 'ABSENT')
"
```

**Réserve de méthode, à lire avant d'accorder du crédit au §D.** Cette
procédure prouve qu'une chaîne figure aujourd'hui dans le HTML servi par
l'éditeur. Elle ne prouve pas qu'elle y figurait à une date antérieure, et elle
ne remplace pas la lecture de la page dans un navigateur pour ce qui touche à
un tableau, à une capture ou à une interface. Les quatre tableaux
d'autorisations et de motifs cités en §D.4 et §D.5 ont été lus sous forme de
texte linéarisé, pas sous forme de tableau rendu.

**Cinq pages n'ont pas répondu à la première tentative `curl`** — réponse
tronquée à moins de 200 caractères, sans redirection exploitable : les
spécifications `robots.txt`, `http-network-errors`, `reduce-crawl-rate`,
`large-site-managing-crawl-budget` et `overview-google-crawlers`. Elles ont
répondu normalement à la seconde tentative, avec `-L --compressed` et un
en-tête `User-Agent` de navigateur. Les citations du §D viennent de cette
seconde tentative. Aucune page n'a résisté aux deux.

### B.4 Sources qui n'ont pas pu être rouvertes

**Aucune.** Les vingt-et-une URL externes du bloc `legalSources` ont été
rouvertes le 30 août 2026, et la vingt-deuxième — `/tarifs` — a été vérifiée
dans le code source qui la produit, `src/components/tarifs/body.ts`, ce qui est
plus fort qu'une lecture de page rendue.

**Réserve levée le 30/08/2026 par la passe de correction.** La date de dernière
mise à jour de `web.dev/articles/ttfb` était donnée sous réserve par la passe
précédente. Le HTML brut en porte deux, et les deux sont désormais confirmées :
la signature de l'article écrit « Published: October 26, 2021, Last updated:
November 18, 2025 », le pied de page « Last updated 2025-11-28 UTC ». Les deux
seuils TTFB et le rattachement du 75ᵉ centile au FCP l'étaient déjà.

---

## C. Ce que la page promet, et ce qu'elle refuse de promettre

### C.1 Contrat de langage

- **Phrase du lecteur :** « Mon site est en ligne, mais si je tape mon activité
  dans Google je ne le trouve pas. »
- **Réponse en tête, telle que publiée :** « Une page absente de Google n'est
  jamais un problème unique : c'est une chaîne dont un maillon a cédé, et il y
  en a cinq. »
- **Deux termes traduits à leur première apparition**, conformément au §6.1 de
  la charte, et verrouillés par test :
  - Search Console → « l'outil gratuit où Google dit au propriétaire d'un site
    ce qu'il a vu, retenu et affiché » ;
  - canonique → « l'adresse que Google retient comme version officielle quand
    plusieurs adresses affichent le même contenu ».

### C.2 Les six refus explicites de la page

Ce sont les phrases qui coûtent commercialement, et le contre-audit les
protège par test. Elles font partie du socle de preuves au même titre que les
faits :

1. « Ne rien acheter aujourd'hui est souvent la bonne décision. »
2. « Un blocage que l'inspection d'URL affiche en clair ne justifie pas 2 000 €
   d'audit, et nous le dirons avant de vous envoyer un devis. »
3. « Les quatre premières lignes se règlent en interne […] et aucune ne dépasse
   700 €. »
4. « Aucune position, aucune date d'indexation et aucun volume de trafic ne
   sont garantis par cette page. »
5. « Notre offre de référencement, elle, ne publie aucun montant : il dépend du
   nombre d'URL et des gabarits, et il est fixé au devis. »
6. « la dernière ligne du tableau ci-dessus peut donc nous rapporter, les cinq
   autres non ».

### C.3 Hors périmètre, dit par la page elle-même

- Google Maps et les fiches d'établissement (FAQ, catégorie « Délais et
  frontières »).
- La demande, la concurrence, l'intention derrière une recherche, le délai de
  retour (réserve de périmètre).
- Le diagnostic d'une URL indexée qui reçoit des impressions sans clic
  (fin de la section 05, dernière ligne du tableau de la section 08).
- Le budget d'exploration pour un site vitrine ou un catalogue de quelques
  centaines de pages (FAQ, avec les seuils officiels à l'appui).

---

## D. Registre des faits sourcés

**Convention.** `FAIT` = affirmation soutenue par un localisateur ouvert le
30/08/2026. Chaque ligne donne l'URL exacte, la citation littérale relevée sur
le HTML brut, la date de dernière mise à jour affichée par l'éditeur quand elle
existe, et l'endroit de l'article qui s'en sert.

Aucune des pages d'aide `support.google.com` n'affiche de date de dernière mise
à jour. C'est une limite de fraîcheur à connaître : sur ces cinq sources, seule
la date de consultation est disponible.

### D.1 Fonctionnement de la recherche et plafonds d'exploration

**F01 — Trois étapes, dont aucune n'est garantie.**
`https://developers.google.com/search/docs/fundamentals/how-search-works?hl=fr`
· mise à jour 2025/12/18 · consultée 30/08/2026.
Citation : « Google ne garantit pas que votre page sera explorée, indexée ou
diffusée, même si elle respecte les Essentiels de la recherche Google. »
Utilisé : §01, « Google décrit lui-même trois temps — exploration, indexation,
diffusion — et écrit qu'aucun n'est garanti pour une page donnée. »

**F02 — 2 Mo pour un type de fichier compatible, 64 Mo pour un PDF.**
`https://developers.google.com/search/docs/crawling-indexing/googlebot?hl=fr`
· mise à jour **2026/02/05** · consultée 30/08/2026.
Citation : « Lors de l'exploration pour la recherche Google, Googlebot explore
les 2 premiers Mo d'un type de fichier compatible et les 64 premiers Mo d'un
fichier PDF. »
Utilisé : §02, sous-titre « La taille lue » ; bandeau de statistiques, dont
l'étiquette dit « Lu par Googlebot » depuis la correction d'E10 et ne
restreint donc plus la limite au HTML.

**F03 — La limite porte sur les données non compressées.**
Même page, même relevé.
Citation : « La taille maximale de fichier est appliquée aux données non
compressées. »
Utilisé : §02.

**F04 — Chaque ressource référencée est récupérée séparément.**
Même page, même relevé.
Citation : « Du point de vue du rendu, chaque ressource référencée dans le code
HTML (CSS ou JavaScript, par exemple) est récupérée séparément, et chaque
récupération de ressource est soumise à la même limite de taille de fichier que
celle qui s'applique aux autres fichiers. »
Utilisé : description de la source dans le bloc `legalSources`.

**F05 — Les 15 Mo sont ceux des robots Google en général, pas de Googlebot pour la recherche.**
`https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers?hl=fr`
· mise à jour **2026/06/16** · consultée 30/08/2026.
Citation : « Par défaut, les robots d'exploration et les extracteurs de Google
n'explorent que les 15 premiers Mo d'un fichier. Tout contenu au-delà de cette
limite est ignoré. »
Utilisé : §02, « Le repère de 15 Mo qui circule encore vient d'une autre page,
la présentation des robots d'exploration Google ». C'est le seul endroit du
guide où une source sert à **corriger** un chiffre répandu plutôt qu'à
l'établir : la distinction entre les deux pages est l'apport propre de la
section.

### D.2 Codes HTTP, redirections et vitesse d'exploration

Source commune :
`https://developers.google.com/search/docs/crawling-indexing/http-network-errors?hl=fr`
· mise à jour **2026/03/05** · consultée 30/08/2026.

**F06 — Un 2xx ne garantit pas l'indexation.**
Citation : « Pour la recherche Google, un code d'état HTTP `2xx (success)` ne
garantit pas l'indexation. »
Utilisé : §03, première phrase ; ligne « 200 » du tableau §02.

**F07 — Un 4xx sort l'URL de l'index.**
Citation : « Google n'indexe pas les URL qui renvoient un code d'état `4xx`. De
même, les URL qui sont déjà indexées et qui renvoient un code d'état `4xx` sont
supprimées de l'index. »
Utilisé : ligne « 404 ou 410 » du tableau §02.

**F08 — Dix sauts de redirection suivis.**
Citation : « Par défaut, les robots d'exploration Google suivent jusqu'à
10 sauts de redirection. »
Utilisé : ligne « 301 » du tableau §02.

**F09 — Les outils d'inspection Google ne suivent pas les redirections.**
Citation : « Googlebot suit généralement 10 sauts de redirection lorsqu'il
explore du contenu Web général, mais les outils d'inspection Google ne suivent
pas les redirections. »
Utilisé : §02, « inspectez la cible finale, jamais l'adresse de départ » ; ligne
« 301 » du tableau.

**F10 — 301 signal fort, 302 signal faible.**
Citations : « 301 (moved permanently) Google suit la redirection, et les
systèmes Google l'utilisent comme un signal fort indiquant que la cible de la
redirection doit être traitée. » / « 302 (found) […] un signal faible indiquant
que la cible de la redirection doit être traitée. »
Utilisé : lignes « 301 » et « 302 » du tableau §02.
**Nuance à connaître :** la source écrit « doit être **traitée** ». L'article
écrit « désignant la cible comme **adresse principale** ». La désignation comme
adresse principale relève de la page canonique (F14), qui emploie bien le mot.
Les deux pages disent la même chose sous deux formules ; l'article fusionne les
deux, ce qui est défendable mais n'est pas une citation.

**F11 — 500, 503, 429 : quelques heures, un à deux jours au plus.**
`https://developers.google.com/search/docs/crawling-indexing/reduce-crawl-rate?hl=fr`
· mise à jour 2025/12/25 · consultée 30/08/2026.
Citation : « Si vous devez réduire la vitesse d'exploration de manière urgente
pendant une courte période (par exemple, quelques heures, ou un à deux jours),
renvoyez un code d'état de réponse HTTP 500, 503 ou 429 au lieu de 200 aux
demandes d'exploration. »
Utilisé : ligne « 429, 500 ou 503 » du tableau §02 ; encadré bleu §02.

**F12 — Plusieurs jours de ces codes peuvent sortir l'URL de l'index, et le ralentissement porte sur le nom d'hôte entier.**
Même page.
Citations : « si Googlebot observe ces codes d'état sur la même URL pendant
plusieurs jours, l'URL peut être supprimée de l'index Google. » / « La vitesse
d'exploration réduite affecte le nom d'hôte complet de votre site (par exemple,
`subdomain.example.com`). »
Utilisé : encadré bleu §02 ; ligne « Récupération en échec » du tableau §08.

### D.3 robots.txt, noindex, canonique, sitemap

**F13 — robots.txt : 500 Kio, cache 24 h, 12 h puis 30 jours en cas de 5xx.**
`https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt?hl=fr`
· mise à jour **2026/07/14** · consultée 30/08/2026.
Citations :
« Google applique une limite de taille de fichier robots.txt de 500 kibioctets
(Kio). Tout contenu qui dépasse cette taille est ignoré. »
« Google met généralement en cache le contenu du fichier robots.txt pendant
24 heures, mais peut rallonger cette durée si l'actualisation de la version mise
en cache n'est pas possible. »
« Pendant les 12 premières heures, Google cesse d'explorer le site, mais tente à
plusieurs reprises de récupérer le fichier robots.txt. Si Google ne parvient pas
à récupérer une nouvelle version, il utilisera pendant 30 jours la dernière
version récupérée […]. Si les erreurs ne sont toujours pas corrigées après
30 jours : Si le site est accessible, Google se comportera comme s'il n'existait
pas de fichier robots.txt […]. Si le site présente des problèmes de
disponibilité générale, Google cessera de l'explorer. »
Utilisé : §02, sous-titre « Le fichier `robots.txt` », les trois temps repris
dans le même ordre.

**F14 — Redirection et `rel=canonical` : signaux forts ; sitemap : signal faible.**
`https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=fr`
· mise à jour **2026/07/13** · consultée 30/08/2026.
Citations : « Redirections : signal fort indiquant que la cible de la
redirection doit devenir canonique. Annotations `link rel="canonical"` : signal
fort que l'URL spécifiée doit devenir canonique. Inclusion de sitemaps : signal
faible permettant aux URL incluses dans un sitemap de devenir canoniques. »
Utilisé : §03, résolution du cas de l'imprimeur ; ligne « Autre adresse choisie
comme canonique » du tableau §08.

**F15 — Un noindex bloqué par robots.txt n'est jamais détecté.**
`https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=fr`
· mise à jour 2025/12/31 · consultée 30/08/2026.
Citations : « Pour que la règle `noindex` soit efficace, la page ou la
ressource ne doit pas être bloquée par un fichier robots.txt. Le robot
d'exploration doit y avoir accès. » / « la règle `noindex` n'est pas détectée
par le robot d'exploration. La page peut donc continuer à s'afficher dans les
résultats de recherche, par exemple si d'autres pages contiennent des liens vers
celle-ci. »
Utilisé : §03, paragraphe qui suit le tableau des cinq motifs.

**F16 — Sitemap : 50 Mo sans compression ou 50 000 URL, UTF-8, URL absolues.**
`https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=fr`
· mise à jour **2026/07/15** · consultée 30/08/2026.
Citations : « Tous les formats limitent la taille d'un seul sitemap à 50 Mo
(sans compression) ou 50 000 URL. » / « le fichier sitemap doit être encodé en
UTF-8. » / « utilisez des URL absolues et complètes dans vos sitemaps. »
Utilisé : FAQ « Un sitemap est-il utile quand on a moins de cent pages ? » et
description de la source. Depuis la correction d'E9, les deux endroits disent
« 50 Mo sans compression ou 50 000 URL » et « URL absolues et complètes », dans
les termes de la source.

### D.4 Rapport sur l'indexation des pages

Source commune : `https://support.google.com/webmasters/answer/7440203?hl=fr`
· aucune date de mise à jour affichée · consultée 30/08/2026.

Les cinq motifs sont reproduits **mot pour mot** dans l'article, et un test les
verrouille. Chacun a été retrouvé littéralement dans le HTML brut :

**F17 — « Explorée, actuellement non indexée ».**
Citation : « Explorée, actuellement non indexée — La page a été explorée par
Google, mais pas indexée. Elle sera peut-être indexée à l'avenir ; il n'est pas
nécessaire de renvoyer cette URL pour l'exploration. »
Utilisé : ligne 1 du tableau §03 ; §07 mémo Jour 10 ; ligne 5 du tableau §08.

**F18 — « Détectée, actuellement non indexée » et sa cause officielle.**
Citation : « Détectée, actuellement non indexée — La page a été détectée par
Google, mais n'a pas encore été explorée. En règle générale, cela signifie que
Google voulait explorer l'URL, mais que l'exploration a été reportée, car votre
site risquait d'être surchargé. »
Utilisé : ligne 2 du tableau §01 et du tableau §03 ; scénario 3 du §06.

**F19 — « Page en double sans URL canonique sélectionnée par l'utilisateur ».**
Citation : « Page en double sans URL canonique sélectionnée par l'utilisateur —
Cette page est un double d'une autre, même si elle n'indique pas de page
canonique préférée. Google a choisi l'autre page comme URL canonique pour cette
page, si bien que celle-ci n'apparaît pas dans la recherche Google. »
Utilisé : ligne 3 du tableau §03.

**F20 — « URL marquée "noindex" ».**
Citation : « URL marquée "noindex" — Lorsque nous avons tenté d'indexer la page,
nous avons identifié une directive "noindex" et ne l'avons donc pas indexée. »
Utilisé : ligne 4 du tableau §03 ; scénario 1 du §06. C'est le seul guillemet
droit toléré dans tout l'article, et un test l'encadre : la chaîne recherchée
par le lecteur dans son interface doit être reproduite telle quelle.

**F21 — « URL bloquée par le fichier robots.txt ».**
Citation : « URL bloquée par le fichier robots.txt — Cette page a été bloquée
par le fichier robots.txt de votre site. »
Utilisé : ligne 5 du tableau §03.

**F22 — Le tableau d'exemples est plafonné à 1 000 lignes, sans garantie d'exhaustivité.**
Citation : « Notez que la liste d'exemples d'URL est limitée à 1 000 entrées
dans le rapport. De plus, il n'est pas garanti que toutes les URL présentant un
état donné y figurent, même si elles ne dépassent pas les 1 000 entrées. »
Utilisé : §03, « Vérifier 68 pages sans cliquer 68 fois ».
**Angle mort à connaître :** l'article reprend le plafond de 1 000 lignes mais
pas la seconde phrase, celle qui dit que l'exhaustivité n'est pas garantie même
sous le plafond. Ce n'est pas une erreur, c'est une omission qui renforcerait
son propre argument.

**F23 — Environ une semaine avant la première exploration d'un site neuf.**
Citation : « Il faut jusqu'à une semaine pour que Google commence à explorer et
à indexer une nouvelle page ou un nouveau site. »
Utilisé : FAQ « Mon site vient d'être mis en ligne » ; §07, premier paragraphe.

### D.5 Inspection d'URL

Source commune : `https://support.google.com/webmasters/answer/9012289?hl=fr`
· aucune date de mise à jour affichée · consultée 30/08/2026.

**F24 — Les deux champs de canonique portent des noms distincts.**
Citations : « URL canonique déclarée par l'utilisateur — Si votre page déclare
explicitement une URL canonique, elle s'affiche ici. » / « consultez le champ
Indexation des pages > URL canonique sélectionnée par Google. »
Utilisé : tableau §01 ligne 4 ; tableau §03 ligne 3 ; §03 cas de l'imprimeur ;
§04, et les quatre chaînes de l'outil de la §07. Un test interdit la variante
« canonique choisie par Google » dans le corps mesuré **et** dans les deux
fichiers de l'outil, depuis la correction d'E5.

**F25 — « Cette URL est sur Google » ne garantit pas l'affichage.**
Citation : « La mention "Cette URL est sur Google" ne garantit pas que votre
page apparaîtra dans les résultats de recherche. Le rapport ne vérifie pas
toutes les conditions pour apparaître sur Google. »
Utilisé : §04, premier paragraphe.

**F26 — La version indexée n'est pas la version actuelle ; le test se nomme « Test en ligne » / « Tester l'URL active ».**
Citations : « Pour tester la version actuelle de la page telle que Google
devrait la voir, sélectionnez le bouton Test en ligne sur la page. » / « Cliquez
sur Tester l'URL active. » / « Le test en ligne ne peut pas prédire si la
version testée sera considérée comme canonique ou non. »
Utilisé : §02 (« seul le test en ligne, ouvert par « Tester l'URL active »,
montre la version rendue »), §03 deux fois, mémos §03 et §07, tableau §08, et la
description de la source 9012289.
**C'est le fait F26 qui fondait l'écart E4 :** le mécanisme décrit par l'article
était exact, le nom qu'il lui donnait — « test en direct » — n'existe pas dans
l'aide française. Corrigé le 30/08/2026 : l'article emploie « test en ligne » et
nomme le bouton « Tester l'URL active ».

**F27 — « Index Google » est bien le nom de l'onglet.**
Citation : « Pour passer des résultats du test en ligne aux résultats de l'URL
indexée (ou vice versa), cliquez sur Index Google ou sur Test en ligne sur la
page. »
Utilisé : libellés de l'outil de la section 07.

### D.6 Rapport Performances, dimensions et regroupements

**F28 — Définitions de clic, impression et position moyenne.**
`https://support.google.com/webmasters/answer/7576553?hl=fr` · consultée
30/08/2026.
Citations : « Clics : nombre de fois qu'un utilisateur a cliqué sur votre site à
partir des résultats de recherche Google. » / « Impressions : nombre de fois où
votre site est apparu dans les résultats de la Recherche. » / « Position
moyenne : position moyenne du résultat le mieux classé de votre site. Dans le
graphique : la valeur correspond à la position moyenne du résultat le mieux
classé de l'ensemble de votre site. Dans le tableau : la valeur correspond à la
position moyenne […] pour l'URL ou la dimension de regroupement spécifique
affichée dans la ligne du tableau. »
Utilisé : §05, deux premiers paragraphes. C'est l'apport pédagogique le plus
dense de l'article : la double assiette de la position moyenne est la source
d'erreur la plus coûteuse en comité de direction, et elle est ici citée dans les
termes de l'aide.

**F29 — Vue par défaut sur trois mois, vue 24 heures en données préliminaires.**
Même page.
Citations : « La vue par défaut du rapport présente les données […] sur les
trois derniers mois. » / « Lorsque vous choisissez la vue "24 heures", les
points de données du graphique représentent les heures et incluent des données
préliminaires. »
Utilisé : §05.

**F30 — La plupart des données vont à l'URL canonique, pas aux doublons.**
`https://support.google.com/webmasters/answer/17011259?hl=fr` · consultée
30/08/2026.
Citations : « La plupart des données de performances de ce rapport sont
attribuées à l'URL canonique de la page, pas aux URL en double. » / « lorsqu'un
internaute clique sur une URL en double dans les résultats de recherche, ce clic
est comptabilisé sous l'URL canonique, pas sous l'URL consultée par
l'internaute. »
Utilisé : §04, « Filtrez sur l'URL canonique sélectionnée par Google » ;
scénario 2 du §06 — c'est le mécanisme qui rend le scénario cohérent.

**F31 — Les requêtes anonymisées sortent du total dès qu'un filtre de requête est appliqué.**
Même page.
Citation : « Requêtes anonymisées : certaines requêtes sont omises du rapport
afin de protéger la confidentialité des utilisateurs. […] Elles sont incluses
dans les totaux du graphique, sauf si un filtre de requête est appliqué (par
exemple, "requêtes contenant" ou "requêtes ne contenant pas" une chaîne donnée). »
Utilisé : encadré bleu §04 ; ligne 5 du tableau §01.

**F32 — Le tableau est tronqué, et l'exportation groupée donne la liste la plus complète.**
Même page.
Citation : « en raison de limites internes, la Search Console ne stocke et
n'affiche que les lignes de données les plus importantes. […] La liste la plus
complète des requêtes peut être exportée à l'aide de la fonctionnalité
d'exportation groupée de données. »
Utilisé : encadré bleu §04, dernière phrase.

### D.7 API Search Console

**F33 — Inspection d'URL : 2 000 requêtes par jour, 600 par minute et par site.**
`https://developers.google.com/webmaster-tools/limits` · « Last updated
**2025-08-28** UTC » · consultée 30/08/2026.
Citation : « URL inspection index inspection quota — Per-site quota (calls
querying the same site): 2000 QPD 600 QPM ».
Utilisé : §03, « Vérifier 68 pages sans cliquer 68 fois ».

**F34 — Search Analytics : 1 200 requêtes par minute et par site.**
Même page.
Citation : « Per-site quota (calls querying the same site): 1,200 QPM ».
Utilisé : §05, « Sortir du tableau quand il ne suffit plus ».

**F35 — `rowLimit` de 1 à 25 000, défaut 1 000 ; `startRow` pour paginer.**
`https://developers.google.com/webmaster-tools/v1/searchanalytics/query`
· « Last updated **2026-08-11** UTC » · consultée 30/08/2026.
Citation : « rowLimit integer [Optional; Valid range is 1–25,000; Default is
1,000] The maximum number of rows to return. To page through results, use the
startRow offset. »
Utilisé : §05 et son bloc de paramètres.

### D.8 Délais, nouvelle exploration, migration, budget d'exploration

**F36 — Une nouvelle exploration peut prendre plusieurs jours ou semaines, sans garantie d'inclusion.**
`https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl?hl=fr`
· mise à jour 2025/12/31 · consultée 30/08/2026.
Citations : « L'exploration peut prendre plusieurs jours, voire plusieurs
semaines. » / « N'oubliez pas qu'un quota limite l'envoi d'URL individuelles et
que les demandes répétées de réexploration pour une même URL n'accélèrent pas
l'exploration. »
Utilisé : §07, premier paragraphe ; §03, mémo « Ordre des gestes ».

**F37 — Demander l'indexation exige d'être propriétaire ou utilisateur avec accès complet.**
Même page — **et non la page « utilisateurs et autorisations » : c'était l'écart
E6, corrigé le 30/08/2026.** Le bloc de sources porte désormais cette phrase
sous `ask-google-to-recrawl`, et la FAQ dit laquelle des deux pages porte quoi.
Citation : « Vous devez être un propriétaire ou un utilisateur avec accès
complet à la propriété Search Console pour pouvoir demander une indexation dans
l'outil d'inspection d'URL. »
Utilisé : FAQ « Dois-je donner mon mot de passe Search Console à mon agence ? »

**F38 — Les quatre niveaux d'autorisation, et l'inspection d'URL par niveau.**
`https://support.google.com/webmasters/answer/7687615?hl=fr` · consultée
30/08/2026.
Citations : « Propriétaire : les propriétaires contrôlent tous les aspects de
leur propriété dans la Search Console. » / « Utilisateur avec accès complet :
peut consulter toutes les données et réaliser certaines actions. » /
« Utilisateur avec accès limité : peut uniquement consulter la plupart des
données. » ; ligne du tableau : « Inspection de l'URL […] Exploration
uniquement » pour l'accès limité.
Utilisé : FAQ « Dois-je donner mon mot de passe » ; §07, dernier paragraphe
avant l'illustration. **Ce que cette page n'écrit pas** (relevé du 30/08/2026,
recherche littérale sur le HTML débalisé) : ni « indexation », ni « mot de
passe », ni « compte personnel ». C'était l'écart E7 ; depuis sa correction, la
description de la source ne lui prête plus la consigne de ne pas partager son
compte, et la FAQ signe cette consigne comme une recommandation Hagnéré Code.

**F39 — Migration terminée quand Googlebot a accédé au moins une fois à toutes les URL ; redirections conservées au moins un an.**
`https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=fr`
· mise à jour **2026/06/24** · consultée 30/08/2026.
Citations : « La migration d'un site est considérée comme terminée lorsque
Googlebot a accédé au moins une fois à toutes les URL de votre ancien et de
votre nouveau site. » / « Conservez les redirections aussi longtemps que
possible, généralement au moins un an. »
Utilisé : §07, paragraphe sur la migration d'URL.

**F40 — Le budget d'exploration ne concerne que trois profils de site, aux seuils approximatifs.**
`https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget?hl=fr`
· mise à jour **2026/08/04** · consultée 30/08/2026.
Citations : « Sites très volumineux (plus d'un million de pages uniques) dont le
contenu change assez souvent (une fois par semaine) — Sites de taille moyenne ou
grande (plus de 10 000 pages uniques) dont le contenu change très rapidement
(quotidiennement) — Sites dont une proportion importante d'URL est classifiée
comme Détectée, actuellement non indexée par la Search Console. » / « Les
chiffres indiqués ici sont une approximation générale qui devrait vous aider à
classer votre site. Il ne s'agit pas de seuils exacts. »
Utilisé : FAQ « Le budget d'exploration me concerne-t-il ? ». C'est la source
qui porte le refus commercial le plus net de la page : « une prestation vendue
sur cet argument mérite une question précise ».

### D.9 Opérateur `site:` et repères de performance

**F41 — L'opérateur `site:` n'est ni exhaustif ni classant, et distingue les variantes d'URL.**
`https://developers.google.com/search/docs/monitor-debug/search-operators/all-search-site`
· page en anglais · « Last updated 2025-12-10 UTC » · consultée 30/08/2026.
Citations : « The `site:` operator doesn't necessarily return all the URLs that
are indexed under the prefix specified in the query. » / « A `site:` operator
without a query (for example `site:example.com`) doesn't rank the results. » /
« double-check the query is correct; `site:https://www.example.com` doesn't
return the same results as `site:https://example.com/`. »
Utilisé : FAQ « La commande `site:` prouve-t-elle que ma page est indexée ? »
**À noter :** c'est la seule source citée sans version française. L'article la
traduit ; la traduction est fidèle.

**F42 — TTFB : 0,8 s ou moins est bon, au-delà de 1,8 s est mauvais, et le 75ᵉ centile porte sur le FCP.**
`https://web.dev/articles/ttfb` · signature de l'article : « Last updated:
November 18, 2025 » · pied de page : « Last updated 2025-11-28 UTC » · les deux
relevées sur le HTML brut le 30/08/2026 · consultée 30/08/2026.
Citations, relevées sur le HTML brut : « it's recommended that your server
responds to navigation requests quickly enough so that the 75th percentile of
users experience an FCP within the "good" threshold. » / « Good TTFB values are
0.8 seconds or less, and poor values are greater than 1.8 seconds. » / « Because
TTFB isn't a Core Web Vitals metric, it's not absolutely necessary that sites
meet the "good" TTFB threshold. »
Utilisé : §02, sous-titre « Le temps de réponse ». L'article prend soin de
séparer le 75ᵉ centile des deux seuils, et un test l'y oblige : « web.dev
rattache son 75ᵉ centile au First Contentful Paint, pas à ces deux seuils ».
Le relevé confirme mot pour mot cette séparation.

**F43 — Sémantique des options `curl` employées dans la section 02.**
`man curl`, version locale 8.7.1 (2024-03-27), consultée 30/08/2026.
Citations : « `-A, --user-agent <name>` Send User-Agent `<name>` to server » /
« `-D, --dump-header <filename>` Write the received headers to `<filename>` » /
« `time_starttransfer` — The time, in seconds, it took from the start until the
first byte is received. This includes `time_pretransfer` and also the time the
server needed to calculate the result. »
Utilisé : §02, bloc de commandes et son paragraphe de réserves. Ces trois
définitions soutiennent trois affirmations de l'article : `-A` agit sur le nom
d'agent et sur rien d'autre ; le pipe reçoit bien les en-têtes malgré `-o
page.html` ; `time_starttransfer` est bien un délai avant premier octet, et
c'est un chargement unique — pas un centile.

### D.10 Prix Hagnéré Code

**F44 — Les trois points d'entrée payants cités existent dans la grille publiée.**
Source : `/tarifs`, produite par `src/components/tarifs/body.ts`, lue dans le
dépôt le 30/08/2026.
Relevés littéraux :

- « Audit flash — Maintenance & évolution — **2 000 € HT** — Prestation unique,
  durée confirmée au devis » ;
- « Audit Express — Audit technique — **8 000 € HT** — Durée et intervenants au
  devis » ;
- « Discovery Sprint — Projet de développement — **1 500 € HT** — 2 jours ».
Utilisé : FAQ « Combien coûte une intervention » ; §08, paragraphe qui suit le
tableau ; encadré vert §08.

**F45 — La grille écrit elle-même que le référencement ne publie aucun montant.**
Même source.
Citation : « soit **aucune page du site ne publie de montant**, et c'est alors
vrai ici comme sur la page service. Le SEO est dans ce second cas […] dont le
prix dépend du nombre d'URL, des gabarits et de la profondeur demandée, et n'est
chiffré ni ici ni là-bas. »
Utilisé : §08, « aucune de nos pages n'en publie de montant, ni la grille
tarifaire ni la page service ». Un test le verrouille dans les deux sens : le
montant doit exister dans la grille, et le guide ne doit pas inventer de prix
SEO.

**F46 — Composition et âge de la société.**
Source : `CLAUDE.md` du dépôt, section « Les faits, à respecter partout », lue
le 30/08/2026. Sept personnes — un président fondateur, un CTO, cinq autres
développeurs — société créée le 30 septembre 2025.
Utilisé : **nulle part dans l'article**, et c'est volontaire. La page ne
revendique ni effectif, ni ancienneté, ni nombre de missions. Le fait est
consigné ici pour qu'une réécriture future ne soit pas tentée d'en tirer une
preuve sociale : les entités du groupe — LMNP.AI, SCI-AI.app, Hagnéré
Patrimoine, Hagnéré Investissement, Comptabilité AI (SIREN 978548899) — sont
réelles mais ne sont pas des clients indépendants.

---

## E. Registre des hypothèses — le cas construit, à découvert

**Aucune de ces valeurs n'a de source.** Elles sont choisies pour l'exemple.
L'article le dit trois fois, dans les trois endroits où elles sont lues, et
trois tests le vérifient :

> « Exemple construit : le métier, la ville, les volumes et les durées
> d'intervention sont choisis pour l'exemple et ne viennent d'aucune source ;
> seuls les mécanismes décrits par Google sont repris de sa documentation. Ce
> n'est pas un dossier client. »
>
> « Deux familles d'hypothèses les chiffrent, toutes deux choisies pour
> l'exemple. […] Aucune de ces durées ne vient d'une source : elles rendent le
> décompte vérifiable, rien de plus. »
>
> « Ses durées viennent, comme là-bas, de l'exemple et d'aucune source :
> remplacez-les par les vôtres avant d'en tirer un budget. »

### E.1 Le décor (§01, §03, §04)

| ID | Hypothèse | Où elle est lue |
| --- | --- | --- |
| H01 | Métier : imprimeur d'étiquettes adhésives | §01 |
| H02 | Ville : Tours | §01 |
| H03 | Site refait il y a quatre mois | §01 |
| H04 | 68 pages en ligne | §01, §03, §06 |
| H05 | Sitemap déclarant 74 URL | §01, §03 |
| H06 | Six adresses supprimées lors de la refonte | §03 |
| H07 | Les deux adresses en cause : `/etiquettes-adhesives-personnalisees` (nouvelle) et `/nos-produits/etiquettes.html` (ancienne) | §01, §03, §04 |
| H08 | Indexation demandée trois fois en six semaines | §01 |
| H09 | Le développeur qui a livré la refonte n'est plus sous contrat | §01 |
| H10 | Les deux pages répondent 200, décrivent le même produit, et aucune redirection ne les relie | §03 |
| H11 | Canonique déclarée pointant sur elle-même, canonique sélectionnée par Google pointant sur l'ancienne adresse | §03 |
| H12 | La nouvelle page afficherait zéro impression | §04, §06 |

### E.2 Les deux familles de chiffrage (§06, §08)

| ID | Hypothèse | Où elle est lue |
| --- | --- | --- |
| H13 | Coût interne : 350 € le jour chargé | §06, §08 |
| H14 | Base de sept heures travaillées par jour | §06 |

L'article renvoie explicitement le lecteur à son expert-comptable pour H13 :
« remplacez-la par la vôtre, que votre expert-comptable calcule à partir du
brut, des charges et des jours réellement travaillés. »

### E.3 Les durées et paramètres des trois scénarios (§06)

| ID | Hypothèse | Scénario |
| --- | --- | --- |
| H15 | Correction du `noindex` : 1 heure | 1 |
| H16 | Reprise des 34 URL : 2 jours | 1 |
| H17 | `noindex` porté par le gabarit des pages produit de la version d'essai, repris en production | 1 |
| H18 | 34 pages sur 68 basculent | 1 |
| H19 | Le défaut vit cinq semaines avant d'être vu | 1 |
| H20 | Réécriture inutile de la page : 4 jours | 2 |
| H21 | Vraie correction (301 + six lignes de sitemap) : 1 heure | 2 |
| H22 | Trois mois s'écoulent sans effet avant que l'erreur soit comprise | 2 |
| H23 | Base verrouillée de 2 h à 3 h 30, soit 90 minutes de 503 par nuit | 3 |
| H24 | Six semaines avant que des URL basculent en « Détectée, actuellement non indexée » | 3 |
| H25 | L'agence en place cherche du côté des titres et descriptions : 3 jours facturés | 3 |
| H26 | Correction par service du cache en lecture seule : une demi-journée d'administrateur système | 3 |

**Réserve publiée sur le scénario 3, à conserver dans toute réécriture.**
L'article la porte à l'endroit exact où elle s'applique, et un test l'exige :
« Il applique à une cause plausible le mécanisme décrit par l'aide du rapport,
mais il n'établit pas qu'une fenêtre de 503 nocturnes produise ce libellé, et
aucun champ de la Search Console ne le confirmerait. » C'est la seule
hypothèse du dossier qui postule un **lien de causalité** entre deux faits
sourcés (F11/F12 et F18) sans que la documentation l'établisse. Elle est posée
comme une piste à fermer, pas comme un diagnostic.

### E.4 Les durées du tableau de décision (§08)

| ID | Hypothèse | Ligne |
| --- | --- | --- |
| H27 | Adresse inconnue : 1 h | 1 |
| H28 | Récupération en échec : 0,5 à 2 j | 2 |
| H29 | Exclue par `noindex` ou `robots.txt` : 1 h | 3 |
| H30 | Autre adresse canonique : 1 à 2 h | 4 |
| H31 | Explorée, actuellement non indexée : 1 j | 5 |

### E.5 Les autres valeurs posées sans source

| ID | Hypothèse | Où elle est lue | Statut déclaré |
| --- | --- | --- | --- |
| H32 | Le tri initial demande « une vingtaine de minutes par adresse » | §01 | Nommée **« estimation éditoriale Hagnéré Code »** dans la phrase même, comme l'exige le §4.1 de la charte. Un test l'impose, et interdit sa promotion en statistique de bandeau. |
| H33 | Catalogue de 12 000 URL, pris comme ordre de grandeur d'un gros site | §03 | Valeur d'échelle, sert au calcul C04 |
| H34 | Calendrier de recontrôle J0 / J3 / J10 / J30 | §07 | Cadence éditoriale ; la page ne prétend pas que Google respecte ces dates, et le §07 rappelle « aucune promesse de date » dans le titre du mémo |
| H35 | « Position moyenne de 6,2 » | §05 | Valeur d'illustration servant à démonter la lecture du graphique ; aucune donnée derrière |

**Total : 35 hypothèses recensées, aucune sourcée, toutes déclarées comme
telles dans l'article.**

---

## F. Registre des calculs, refaits à la main

Méthode : chaque opération est refaite à partir des hypothèses du §E et des
faits du §D, **sans rejouer la formule de la page**. Le résultat obtenu est
ensuite confronté à la phrase publiée. C'est la règle que le fichier de test
s'impose déjà en tête de fichier ; le dossier l'applique une seconde fois, de
façon indépendante.

### F.1 Le taux horaire

**C01.** 350 € ÷ 7 h = **50 € l'heure**.
Publié : « un coût interne de 350 € le jour chargé, soit 50 € l'heure sur une
base de sept heures ». **Concorde.**

### F.2 Le compte du sitemap

**C02.** 68 pages en ligne + 6 adresses supprimées = **74 URL déclarées**.
Publié : « 68 pages en ligne, un sitemap qui en déclare 74 » (§01) et « plus six
adresses supprimées lors de la refonte : 74 URL déclarées pour 68 pages en
ligne » (§03). **Concorde.**
Contrôle de cohérence interne : l'ancienne et la nouvelle page répondent toutes
deux 200 (H10), elles font donc partie des 68 et non des 6. Le compte se
referme sans double comptage.

### F.3 Les quotas d'API appliqués au cas

**C03.** 68 URL à inspecter contre 600 requêtes par minute et par site (F33) :
68 < 600, donc **une seule minute de quota**.
Publié : « Les 68 pages de l'exemple tiennent dans une seule minute de quota ».
**Concorde.**

**C04.** 12 000 URL ÷ 2 000 requêtes par jour (F33) = **6 jours**.
Publié : « Un catalogue de 12 000 URL demande six jours au quota journalier ».
**Concorde.**

### F.4 Scénario 1 — le `noindex` oublié

**C05.** Correction : 1 h × 50 €/h = **50 €**.
**C06.** Reprise : 2 j × 350 €/j = **700 €**.
**C07.** Total : 50 + 700 = **750 €**.
Publié : « La correction demanderait une heure, soit 50 € ; la reprise, deux
jours […] soit 700 €. Total, 750 € ». **Concorde**, et le titre de la section
annonce le même montant : « 34 pages hors index et 750 € ».

Contrôle de proportion, non publié : 34 pages sur 68, soit exactement la
moitié. C'est une hypothèse ronde (H18), pas un calcul ; elle n'appelle pas de
vérification arithmétique.

### F.5 Scénario 2 — le sitemap contre la balise canonique

**C08.** Réécriture inutile : 4 j × 350 €/j = **1 400 €**.
**C09.** Vraie correction : 1 h × 50 €/h = **50 €**.
**C10.** Écart : 1 400 − 50 = **1 350 €**.
Publié : « quatre jours, 1 400 € » / « La vraie correction coûterait une heure
et 50 € » / « L'écart entre les deux, 1 350 € ». **Concorde**, et le titre
annonce « 1 400 € de réécriture pour rien ».

### F.6 Scénario 3 — la sauvegarde nocturne

**C11.** Agence : 3 j × 350 €/j = **1 050 €**.
**C12.** Correction : 0,5 j × 350 €/j = **175 €**.
Publié : « trois jours, 1 050 € facturés » / « une demi-journée d'administrateur
système, 175 € ». **Concorde**, et le titre annonce « 1 050 € sur la mauvaise
piste ».

Contrôle annexe : la fenêtre annoncée « de 2 h à 3 h 30 » vaut bien
**90 minutes**, comme la phrase le dit.

### F.7 Le total et ses deux lectures

**C13.** Somme des six montants : 50 + 700 + 1 400 + 50 + 1 050 + 175 =
**3 425 €**.
Publié : « les trois scénarios pèsent 3 425 € : 50 € et 700 € pour le premier,
1 400 € et 50 € pour le deuxième, 1 050 € et 175 € pour le troisième ».
**Concorde.**

**C14 — lecture par nature de dépense.**
Corrections utiles : 50 + 50 + 175 = **275 €**.
Engagé sur la mauvaise cause : 1 400 + 1 050 = **2 450 €**.
Reprise : **700 €**.
Recoupement : 275 + 2 450 + 700 = **3 425 €**. **Concorde** avec C13.

**C15 — lecture par payeur.**
Temps interne : 50 + 700 + 1 400 + 50 + 175 = **2 375 €**.
Facturé par une agence extérieure : **1 050 €**.
Recoupement : 2 375 + 1 050 = **3 425 €**. **Concorde** avec C13.

Publié : « 2 375 € de temps interne et 1 050 € facturés par une agence
extérieure — ce total ne s'appelle donc pas "temps interne" ». La précision est
juste, et elle corrige un transfert d'assiette que le §7.2 de la charte
interdit : trois jours facturés par un tiers ne sont pas des heures de
l'entreprise.

**Assiette de C13, C14 et C15 :** l'arithmétique est exacte, et l'objet qu'elle
décrit est la somme de trois mondes mutuellement exclusifs. C'était l'écart E8,
non parce que la somme était fausse, mais parce que la page ne le disait pas.
Depuis sa correction, elle l'annonce à l'endroit même où elle additionne — « Ces
trois scénarios s'excluent : leur somme ne décrit aucune facture réelle, elle
compare trois façons de se tromper » — et parle ensuite d'un « comparateur »,
plus d'un « total ». Aucun des six montants n'a bougé, et les deux recoupements
restent vrais.

### F.8 Le tableau de décision (§08)

Toutes les valeurs de la colonne « Ce qu'elle coûte », vérifiées au taux C01 :

| Ligne | Durée publiée | Calcul | Montant publié | Verdict |
| --- | --- | --- | --- | --- |
| Adresse inconnue | 1 h | 1 × 50 | 50 € | **Concorde** |
| Récupération en échec | 0,5 à 2 j | 0,5 × 350 = 175 ; 2 × 350 = 700 | 175 à 700 € | **Concorde** |
| Exclue par `noindex` / `robots.txt` | 1 h | 1 × 50 | 50 € | **Concorde** |
| Autre adresse canonique | 1 à 2 h | 1 × 50 ; 2 × 50 | 50 à 100 € | **Concorde** |
| Explorée, non indexée | 1 j | 1 × 350 | 350 € | **Concorde** |
| Indexée avec impressions, sans clic | — | — | « une analyse dédiée, chiffrée au nombre d'URL et de gabarits » | Aucun montant, conforme à F45 |

**C16 — le plafond des quatre premières lignes.**
Maximum des quatre premières lignes : max(50 ; 700 ; 50 ; 100) = **700 €**.
Publié : « aucune ne dépasse 700 € ». **Concorde** — et la formulation est
exacte au point de contact, puisque 700 est atteint sans être dépassé. Le test
verrouille cette précision et interdit la formule antérieure « sous la barre des
700 € », qui était fausse.

### F.9 Le temps de lecture

**C17.** 4 199 mots ÷ 200 mots/minute = 20,995 → arrondi = **21 minutes**.
Mesure du 30/08/2026 après correction : `4199 mots  21 min`, et `--check`
répond `OK … mesuré 21 min · publié 21 min`. Registre : `readTimeMin: 21`.
**Concorde.**
Avant correction, la mesure valait 4 175 mots, soit 20,875 → 21 minutes. Les
vingt-quatre mots ajoutés par les corrections d'E4 et d'E8 ne déplacent donc pas
la valeur publiée, et le calibre reste dans la bande 3 000 à 4 200 mots (§5.3).

### F.10 Récapitulatif

Vingt-quatre opérations distinctes ont été refaites (C01 à C17, dont C14, C15 et
le tableau F.8 en portent plusieurs). **Aucune ne diverge de la valeur
publiée.** Les écarts du §0 portent tous sur des localisateurs, des dates ou des
assiettes — jamais sur un chiffre faux.

---

## G. Ce que l'article dit ne pas prouver

Ces phrases sont la partie du socle que l'on oublie de tracer, alors qu'elle
porte le plus de risque : une réécriture qui les supprime transforme un guide
de diagnostic en argumentaire de vente.

| Constat | Ce que la page interdit d'en conclure | Fait qui le fonde |
| --- | --- | --- |
| Google ne connaît pas l'adresse | Que la page soit mauvaise | F01 |
| « Détectée, actuellement non indexée » | Un défaut de contenu | F18 |
| « Explorée, actuellement non indexée » | Une sanction | F17 |
| Autre canonique retenue | Que votre page soit en cause | F19, F14 |
| Aucune ligne pour la requête | Zéro impression | F31, F32 |
| Code 200 | L'indexation | F06 |
| « Cette URL est sur Google » | L'affichage effectif | F25 |
| Impressions sans clic | Qu'il faille refonte ou contenus | frontière §05 |
| Un `curl` en un tir | Un centile ou une mesure de terrain | F42, F43 |
| `site:` sans résultat | L'absence d'indexation | F41 |

Deux réserves méritent d'être signalées comme des apports propres, parce
qu'aucune source ne les impose et que l'article les pose contre son propre
intérêt :

- **§03 :** « un site aux temps de réponse irréprochables qui reste des mois
  dans cet état se heurte à un arbitrage que Google ne détaille dans aucun champ
  public. Mesurez le serveur d'abord : c'est la seule piste que vous puissiez
  fermer. » L'explication officielle de F18 est reprise, puis bornée.
- **§06, scénario 3 :** la réserve de causalité citée en E.3.

---

## H. Ce que ce dossier ne peut pas établir

Par honnêteté de méthode, et parce que le §3.4 de la charte demande de signaler
plutôt que de combler :

1. **Aucun volume de recherche.** Ni pour la requête cible, ni pour ses
   variantes. Aucun export n'a été produit, et l'article n'en publie aucun.
2. **Aucune performance de l'article.** Position, impressions, clics : le guide
   parle de mesurer la visibilité d'une page, il ne publie rien sur la sienne.
3. **Aucun corpus concurrent relevé ce jour.** L'ancien dossier portait une
   « SERP qualitative du 18 août 2026 » et une carte des voisins. Elle n'a pas
   été refaite le 30/08 et n'est donc pas reprise : un relevé de SERP vieux de
   douze jours, sur un sujet où les libellés d'interface bougent, ne prouve pas
   l'état d'aujourd'hui. Un test du guide se contente de vérifier qu'il ne juge
   **pas** un corpus concurrent qu'il n'a pas relevé — ce qui est la bonne
   posture tant que ce relevé n'existe pas.
4. **Aucune interface Search Console ouverte.** Les libellés du §D.4 et du §D.5
   viennent des pages d'aide, pas d'une propriété réelle. Si Google renomme un
   champ sans mettre l'aide à jour, ce dossier ne le verra pas.
5. **Aucun test de rendu navigateur.** Le §14.2 de la charte en demande un ;
   il n'a pas été refait ici, et le manifeste qui en gardait la trace décrit un
   état de la page qui n'existe plus (voir §J).
6. **La date de dernière mise à jour de `web.dev/articles/ttfb`** a été
   reconfirmée le 30/08/2026 sur le HTML brut, et la page en porte deux : la
   signature de l'article dit « Last updated: November 18, 2025 », le pied de
   page « Last updated 2025-11-28 UTC » (voir B.4 et F42). Cette réserve est
   levée ; les cinq autres tiennent.

---

## I. Traçabilité du contrôle — qui a fait quoi, et ce qui manque

**Aucun lecteur humain extérieur n'a relu cet article.** Le dépôt n'en porte
aucune trace : ni dans le dossier de recherche précédent, ni dans les sept
manifestes du guide, ni dans les messages de commit. Le §13 de la charte est
explicite sur la conséquence :

> « Si aucun lecteur humain n'est disponible et que le commanditaire n'a pas
> explicitement délégué la décision de publication, le statut maximal est
> "prêt pour revue humaine" : l'agent le signale au lieu d'inventer un panel ou
> une validation. »

Ce dossier le signale. Il ne l'affirme pas comme un défaut de la publication —
le commanditaire a pu déléguer la décision, et le registre porte
`editorialStatus: "published"` — mais il refuse d'écrire qu'une relecture
humaine a eu lieu, faute de trace.

Une contre-relecture par agent a bien eu lieu : le message du commit `7c3926a`
(30/08/2026) décrit « un contre-audit adverse qui avait rendu les sept guides
"à retravailler" : 60 inventions, 45 erreurs de calcul, 93 écarts au protocole,
65 tics d'écriture générée ». Le §13 interdit de la présenter comme l'avis d'une
personne réelle. Elle ne l'est pas ici.

**Ce que ce dossier a effectivement fait, le 30 août 2026 :**

| Contrôle | Fait ? | Preuve |
| --- | --- | --- |
| Lecture intégrale de l'article publié | oui | 1 240 lignes lues |
| Lecture des tests colocalisés | oui | 1 336 lignes, 47 tests |
| Lecture de l'outil et de sa logique | oui | 332 + 175 lignes |
| Réouverture des sources externes | oui, 21/21, deux fois | §D, citations littérales |
| Vérification de la grille tarifaire | oui | `src/components/tarifs/body.ts` |
| Calculs refaits à la main | oui, 24/24, avant et après correction | §F |
| Mesure du temps de lecture | oui | script du dépôt |
| Exécution de la suite de tests | oui | 47/47 verts, `tsc --noEmit` propre |
| Relecture par un humain extérieur | **non** | aucune trace |
| BAT navigateur, clavier, impression | **non** | hors de ce passage |
| Relevé de SERP concurrente | **non** | voir §H.3 |
| Correction des onze écarts du §0 | oui, 11/11 | §0, une issue explicite par écart |

---

## J. Fraîcheur — quand rouvrir quoi

Les pages d'aide Google sont vivantes et les libellés d'interface changent :
c'est l'argument que l'article oppose lui-même au lecteur, et il vaut pour son
propre socle.

| Élément | Signal qui impose une nouvelle vérification |
| --- | --- |
| Les cinq motifs du rapport (F17 à F21) | Toute refonte de l'écran « Indexation des pages » ; ce sont les seules chaînes que le lecteur recopie |
| Nom du test en ligne (F26) | Corrigé le 30/08/2026 (E4) : l'article dit « test en ligne » et nomme le bouton « Tester l'URL active ». À rouvrir dès que l'aide 9012289 renomme l'un des deux |
| Plafonds 2 Mo / 15 Mo (F02, F05) | Mise à jour de l'une des deux pages ; la distinction entre les deux est fragile et c'est elle qui porte l'apport de la §02 |
| Quotas d'API (F33, F34, F35) | `webmaster-tools/limits` n'a pas bougé depuis 2025-08-28 : à revérifier avant toute réécriture de la §03 ou de la §05 |
| Seuils du budget d'exploration (F40) | Page mise à jour le 2026/08/04, soit vingt-six jours avant ce dossier : c'est la source la plus récente du lot, donc la plus susceptible d'être touchée à nouveau |
| Prix Hagnéré Code (F44, F45) | Toute modification de `src/components/tarifs/body.ts` ; un test échoue si le guide cite un montant absent de la grille |
| Seuils TTFB (F42) | Changement de web.dev ; page datée du 18/11/2025 en signature et du 28/11/2025 en pied de page, les deux confirmées le 30/08/2026 |
| `dateModified` et date de relecture | Portées au 30/08/2026 (E1, E2, E3). Toute réécriture ultérieure doit les rebouger, et une date de relecture ne doit jamais précéder l'entrée de la source qu'elle couvre |
| Libellés de l'outil de la §07 (E5) | Ils vivent hors du corps mesuré : un test du guide lit désormais `SearchVisibilityDiagnostic.tsx` et `search-visibility-diagnostic.ts` pour les couvrir. Ne pas retirer ce contrôle |

**Manifestes du guide.** Sept fichiers existent sous
`docs/research/manifests/pourquoi-site-pas-visible-google-*.sha256`. Le plus
récent, `-q-public.sha256`, scelle
`src/app/guides/pourquoi-site-pas-visible-google/page.tsx` à
`1b15f4cbd960e49f045dd6064d486d6e033e02d9060ac2e762e75dc3413ea921`. Le fichier
actuel vaut `81a4f978e409fedb6148bf9d5da392c57353126d952993a8c6f8cc4a71b9ddf1`.
Les manifestes décrivent donc l'état du 18 août 2026, pas la page publiée.
Ce dossier n'y touche pas — ce n'est pas son territoire — mais un lecteur qui
s'y fierait pour retrouver l'article se tromperait de version.

---

## K. Correspondance section ↔ preuve

Table de renvoi pour qui veut vérifier une section sans lire tout le dossier.

| Section | Faits mobilisés | Hypothèses | Calculs |
| --- | --- | --- | --- |
| 01 · Réponse directe | F01, F17, F18, F19, F24, F31 | H01–H09, H32 | C02 |
| 02 · Ce que répond votre serveur | F02, F03, F05, F06, F07, F08, F09, F10, F11, F12, F13, F42, F43 | — | — |
| 03 · Ce que Google a retenu | F06, F14, F15, F17–F22, F24, F33 | H04–H07, H10, H11, H33 | C02, C03, C04 |
| 04 · Lire les impressions | F25, F30, F31, F32 | H12 | — |
| 05 · Ce que Performances mesure | F28, F29, F34, F35 | H35 | — |
| 06 · Ce qui rate | F11, F12, F18, F20, F30, F36 | H13–H26 | C01, C05–C15 |
| 07 · Le délai et le relevé | F23, F26, F27, F36, F38, F39 | H34 | — |
| 08 · Corriger, attendre ou auditer | F07, F12, F14, F17, F44, F45 | H13, H27–H31 | C01, tableau F.8, C16 |
| FAQ | F16, F23, F26, F37, F38, F40, F41, F44, F45 | — | — |
| Bloc de sources | l'ensemble | — | — |

---

## L. Journal de ce dossier

| Date | Auteur | Objet |
| --- | --- | --- |
| 2026-08-18 | orchestrateur du lot du 18 août | Dossier de la version à quatre sections, dix sources, sans cas chiffré. **Archivé et remplacé** : il décrivait une page qui n'existe plus. |
| 2026-08-30 | passe de traçabilité, agent unique | Reconstitution complète contre l'article publié : 46 faits localisés et rouverts, 35 hypothèses recensées, 24 calculs refaits, 11 écarts signalés sans correction de la page. |
| 2026-08-30 | passe de correction, agent unique | Traitement des onze écarts, une issue explicite par écart (§0) : neuf corrections, un changement de localisateur (E6), un retrait d'attribution (E7), aucun rejet. Les vingt-et-une sources externes ont été rouvertes une seconde fois avant d'écrire la nouvelle date de relecture. Vingt-quatre calculs refaits, aucun montant modifié. |

**Territoire de la passe de correction.** Ont été écrits :
`src/app/guides/pourquoi-site-pas-visible-google/page.tsx` et son test
colocalisé, ce dossier, et la seule entrée `pourquoi-site-pas-visible-google` de
`src/lib/guides.ts`. Deux fichiers hors de ce périmètre ont été touchés pour
l'écart E5, parce que l'écart y vit et nulle part ailleurs :
`src/lib/search-visibility-diagnostic.ts` et
`src/components/guides/SearchVisibilityDiagnostic.tsx`, plus leurs deux tests,
qui verrouillaient un libellé inexistant. Aucun de ces quatre fichiers n'est
utilisé par un autre guide. Les manifestes et les autres dossiers n'ont pas été
touchés. Aucune commande `git` d'écriture n'a été exécutée.

**Ce qui reste à faire.**

1. **Les manifestes.** Les sept `.sha256` scellent la page du 18 août 2026 et
   décrivent une version qui n'existe plus. Ils ne sont pas dans le territoire
   de cette passe.
2. **La relecture humaine.** Toujours aucune trace dans le dépôt (§I). Le §13 de
   la charte interdit de la revendiquer, et la page ne la revendique pas : elle
   n'écrit une date que pour la relecture des sources, qui a bien eu lieu.
3. **Le BAT navigateur, clavier et impression** du §14.2 (§H.5).
4. **Le relevé de SERP concurrente** (§H.3), qui n'existe toujours pas — et que
   le guide ne prétend nulle part avoir fait.
