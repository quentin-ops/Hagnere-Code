# Relais Codex — état, corrections et stratégie de référencement

> Remplace `BRIEF-CODEX-2026-08-07.md`. À lire intégralement avant de reprendre
> la production. Une intervention externe (Claude) a audité le corpus et fusionné
> trois PR sur `main` les 7 et 8 août 2026 : **#20**, **#21** et **#22**.
> Ce document dit ce qui a changé, quelles erreurs ont été trouvées, comment
> éviter qu'elles reviennent, et surtout **où porter l'effort pour trouver des
> clients plus vite**.

---

## 1. L'essentiel en une page

**Le corpus est bon.** Profondeur réelle, sources autoritaires, prose humaine,
porte qualité qui recale vraiment, traçabilité authentique. Rien dans ce
document ne remet ça en cause : c'est un socle de qualité rare.

**Trois défauts techniques ont été corrigés** — maillage inexistant, neuf guides
finis dormant en `noindex`, contenu servi en double dans le HTML.

**Un défaut stratégique reste entier, et c'est le plus coûteux :**

| Silo | Prévus | Publiés | Couverture |
|---|---|---|---|
| A. Applications métier et outils internes | 24 | 12 | **50 %** |
| B. SaaS et MVP | 18 | 4 | 22 % |
| C. Référencement naturel | 17 | **0** | **0 %** |
| D. Google Ads | 15 | 1 | 6 % |
| E. Maintenance, TMA et reprise | 13 | **0** | **0 %** |
| F. Sites vitrines | 14 | 1 | 7 % |
| **Total** | **101** | **18** | **17 %** |

La moitié de la production est allée dans un seul silo, pendant que trois silos
restent à zéro ou presque. Or ce sont exactement les services qui s'adressent au
marché le plus large : sites vitrines, référencement, publicité, maintenance.

**La priorité n'est plus d'approfondir ce qui existe. C'est d'ouvrir ce qui
n'existe pas.**

---

## 2. Ce qui a été fait — trois PR fusionnées

### PR #20 — silo interne et indexation

**Maillage.** Le corpus était un ensemble d'îles : 2,6 liens inter-guides en
moyenne, **cinq guides orphelins** — dont les deux plus longs, `power-apps`
(9 208 mots) et `airtable-notion` (7 742 mots), qui ne recevaient aucun lien.

| | Avant | Après |
|---|---|---|
| Liens inter-guides | 28 | **127** |
| Médiane de liens sortants | 2 | **8** |
| Guides orphelins | 5 | **0** |

Tous les liens sont posés **en prose**, avec une ancre descriptive et une raison
explicite de suivre le lien. Aucun bloc « voir aussi » générique : la règle d'or
l'interdit comme substitut au maillage.

`prix-gestion-google-ads` reste volontairement à 3 liens — son sujet n'a pas six
voisins pertinents dans un corpus consacré au logiciel métier. L'exception est
déclarée dans `TOPICAL_OUTLIERS` avec son motif. **Ce sera à revoir dès que le
silo D existera : il aura alors de vrais voisins.**

**Indexation.** Neuf guides portaient `editorialStatus: "ready-for-human-review"` :
accessibles par URL mais en `noindex`, hors sitemap, hors hub. Le mécanisme est
bon — c'est l'honnêteté qui manquait sur Hagnéré Investissement. Mais il était
devenu le goulot : neuf guides finis, payés, invisibles, dont
`cahier-des-charges-saas` et ses 7 537 mots.

Vérifications faites avant de lever le drapeau, pour chacun : quatre passes
complètes, dossier de recherche de 6 400 à 18 900 mots, manifestes P1 à P4,
test de contenu dédié, aucun blocage réel ouvert.

Sitemap : **50 → 59 URL**, dont **17/17 guides**.

### PR #21 — entité et robots d'assistants

| Propriété | Avant | Après |
|---|---|---|
| `logo` | URL simple | `ImageObject` avec dimensions réelles (770 × 479) |
| `numberOfEmployees` | absent | dérivé de `TEAM`, jamais écrit en dur |
| `hasOfferCatalog` | absent | 11 prestations depuis `SERVICE_LINKS`, sans prix |

**`robots.txt`** déclare maintenant les robots d'assistants en **deux groupes
distincts** : recherche et citation (`OAI-SearchBot`, `Claude-SearchBot`,
`PerplexityBot`, `ChatGPT-User`…) d'un côté, collecte pour entraînement
(`GPTBot`, `ClaudeBot`, `Google-Extended`, `CCBot`…) de l'autre.

Tous autorisés, comme ils l'étaient déjà via `*`. **Ce changement n'ouvre rien.**
Il rend la décision explicite et permettra de restreindre un collecteur
d'entraînement **sans fermer par ricochet les robots qui citent**.

Piège verrouillé par un test : un robot doté de son propre groupe **ignore
entièrement le groupe générique**. Chaque groupe doit donc répéter l'exclusion
de `/api/`.

### PR #22 — contenu dupliqué dans le DOM

Chaque tableau et chaque bloc d'action était rendu **deux fois**, motif « rendre
deux fois, masquer l'une en CSS ». Sans conséquence pour l'accessibilité ni le
référencement — mais **un extracteur de texte n'applique pas les feuilles de
style**. Les robots des assistants lisaient tout en double, à l'inverse exact de
l'objectif de citation.

Correctif : un seul rendu, deux mises en page par CSS. Le libellé de colonne
vient de `content: attr(data-label)`, donc d'un **attribut**, jamais d'un second
nœud de texte.

| Guide | Mots en double avant | après | HTML avant | après |
|---|---|---|---|---|
| `calculer-roi-application-metier` | 16 % | **4 %** | 627 Ko | **489 Ko** |
| `cahier-des-charges-saas` | 14 % | **5 %** | 697 Ko | **532 Ko** |
| `signes-besoin-logiciel-metier` | 18 % | **9 %** | 480 Ko | **412 Ko** |

Recette : 36 captures (3 guides × 3 largeurs × 2 thèmes), **30 identiques au
pixel près**. Les 6 écarts sont les vues « tableau sur téléphone », que la
capture ne pouvait pas cibler avant le correctif.

---

## 3. Les erreurs repérées — et comment ne plus les reproduire

Cette section est la plus importante pour la suite. Chaque point est un motif
observé, pas une supposition.

### 3.1 Figer un état plutôt qu'écrire un invariant

**Cinq tests** ont dû être réécrits parce qu'ils verrouillaient l'état exact du
moment au lieu de la règle qui compte :

- `legacy-guide-redirects.test.ts` listait **treize slugs à la main** plus un
  `toHaveLength(88)` à décrémenter : le quatorzième guide reconstruit n'aurait
  été protégé par rien ;
- `calculer-roi/content-quality.test.ts` imposait `toEqual(["/guides/automatiser-processus-metier"])` :
  un seul lien sortant autorisé, ce qui interdisait le maillage ;
- `cahier-des-charges-saas` figeait une liste blanche de destinations ;
- `guides.test.ts` figeait la liste exacte des slugs publiés ;
- `robots.test.ts` figeait la forme exacte du résultat.

**La règle :** écrire ce qui doit rester vrai, pas ce qui est vrai aujourd'hui.
« Tout lien `/guides/x` pointe vers un slug du registre » survit à l'évolution du
corpus ; « la page contient exactement ces quatre liens » demande une
modification à chaque ajout — et finit par être assoupli sans réflexion, ce qui
détruit la protection.

**Symptôme à surveiller :** si tu dois modifier un test pour faire passer un
ajout légitime, demande-toi si le test protégeait la bonne chose.

### 3.2 Une traçabilité qui contredit son propre dossier

La table de journal de `migrer-logiciel-metier-sans-interruption` annonçait
« P3 en attente de G3 » et « P4 bloquée » alors que le dossier se terminait par
`PASSE_4_TERMINEE`, zéro défaut, manifestes P3 et P4 présents.

Conséquence réelle : pendant l'audit, ce guide est apparu non conforme et a
failli être écarté de l'indexation alors qu'il était prêt depuis une semaine.

**La règle :** la table de journal se met à jour **dans la même opération** que
le manifeste. Une traçabilité qui ment produit des faux positifs, et à terme on
cesse de la lire.

### 3.3 Un travail fini qui ne franchit jamais la dernière porte

Neuf guides sont restés jusqu'à trois semaines en `ready-for-human-review`. Le
mécanisme est excellent — il faut le garder. Mais une porte qui attend une
décision que personne ne demande n'est pas une porte, c'est un tiroir.

**La règle :** quand un guide atteint `PASSE_4_TERMINEE` avec ses manifestes et
son test, la revue humaine est **demandée explicitement à Quentin**, avec la
liste complète de ce qui attend. Un guide fini et invisible ne rapporte rien.

### 3.4 Rendre deux fois et masquer l'une

Motif appliqué à `GuideTable` et au bloc d'action du hero. Il paraît inoffensif
— il l'est pour l'accessibilité et le référencement — mais il double le contenu
servi aux extracteurs de texte.

**La règle :** un contenu, un rendu. Les différences de mise en page se traitent
par CSS (`display`, `order`, placement de grille, `attr()`), jamais en dupliquant
le balisage. Un test le vérifie désormais.

### 3.5 Dériver de sa propre feuille de route

C'est l'erreur la plus coûteuse. La roadmap définit un **sprint prioritaire de
15 sujets**, choisis pour leur intention commerciale. Sept ont été traités.
**Huit ont été sautés** — et dix guides hors sprint ont été produits à la place,
tous dans le silo déjà le mieux couvert.

Les huit sautés :

```
audit-google-ads-que-verifier          pourquoi-google-ads-ne-convertit-pas
audit-seo-que-contient-il              seo-ou-google-ads
contrat-tma-application                template-ou-site-sur-mesure
preparer-contenus-site-vitrine         reprendre-mvp-vibe-code
```

Ce sont précisément les sujets des silos vides.

**La règle :** l'ordre du sprint prime sur l'affinité thématique. Si un sujet
prioritaire est écarté, la raison est écrite dans la roadmap avant de passer au
suivant. Sans cela, la production suit la pente du sujet le plus confortable.

---

## 4. Qualité et pédagogie du corpus — mon avis après lecture

J'ai lu intégralement trois guides : `signes-besoin-logiciel-metier` (21 min),
`prix-gestion-google-ads` (24 min) et `cahier-des-charges-saas` (42 min).

### Ce qui est vraiment réussi, à ne pas toucher

**Le refus de vendre est la meilleure chose du corpus.** Dès la première
section : « Ces situations méritent un diagnostic ; elles ne prouvent pas qu'il
faut développer un logiciel sur mesure. » Puis, dans les repères du hero :
**« Seuil magique : Aucun »**. Et : « observer est aussi un verdict valable ».
Un dirigeant qui lit ça baisse sa garde. C'est un différenciateur commercial,
pas seulement éditorial.

**Le guide Google Ads est le plus courageux que j'aie lu sur un site d'agence.**
Il cite des concurrents nommés avec leurs prix et la date de consultation, puis
désamorce lui-même : « Ces nombres ne forment pas un prix moyen français. » Et
**il publie vos propres tarifs**. La plupart des agences cachent ça.

**Les ouvertures sont concrètes.** « Un devis attend parce que la bonne version
du fichier est introuvable. Une commande doit être recopiée entre deux outils. »
Le lecteur se reconnaît en trois secondes.

**Les conventions mentales sont mémorisables** : `STOP` / `À décider`, les sept
familles de coûts, les neuf questions minimales. Ce sont des outils qu'on
emporte — et qu'on cite.

**Mesures objectives :** 1,7 connecteur robotique par guide, **zéro**
dramatisation creuse, écart-type de longueur de phrase à 28,6, seulement quatre
phrases partagées entre 17 guides, médiane de 10 sources autoritaires.

### Quatre améliorations pédagogiques

**a) Il manque un vrai « à retenir en 30 secondes ».** Le prompt maître le
demande : trois puces scannables juste après l'introduction. La section
« § 01 Réponse directe » joue ce rôle mais **en prose dense**. À 42 minutes de
lecture, un dirigeant a besoin de trois lignes avant de s'engager.

C'est aussi ce qu'un assistant génératif extrait le plus volontiers pour citer
une source. **Ce point sert la pédagogie et la citation à la fois.**

**b) Les temps de lecture font peur.** 21, 24, **42 minutes**. Ne réduis pas la
profondeur : ajoute un chemin court. « Lecture rapide : sections 01, 05 et 10 »
en tête de sommaire suffit.

**c) Les repères du hero sont trop cryptiques.** « Diagnostic · envoi : Aucun »,
« Exemple : Fictif », « Seuil magique : Aucun ». L'intention est bonne, mais ces
libellés ne se comprennent qu'après lecture. Ils doivent se suffire au premier
coup d'œil.

**d) Densité soutenue, peu de respiration.** Le corpus est analytique de bout en
bout. Un cas chiffré raconté comme une histoire courte — une entreprise, une
décision, un montant, une conséquence — donnerait au lecteur un point d'appui
concret entre deux passages méthodologiques.

---

## 5. Percer en référencement plus vite — la stratégie

Avertissement d'honnêteté d'abord, parce qu'il conditionne tout le reste :
**aucune de ces actions ne garantit un classement.** Le volume de pages n'est
pas un facteur de classement, `llms.txt` n'est lu par aucun grand acteur, et un
balisage valide rend une fonctionnalité éligible sans jamais l'assurer. Ce qui
suit augmente les chances et supprime les obstacles. Rien de plus, et c'est déjà
beaucoup.

### 5.1 Ouvrir les silos vides — priorité absolue

C'est le levier le plus puissant, et de loin.

Un silo à 50 % de couverture avec 12 guides denses et bien maillés a déjà établi
ce qu'il pouvait établir. Un silo à 0 % ne capte **rien** — aucune requête,
aucun lien entrant, aucune porte d'entrée. Le douzième guide du silo A rapporte
beaucoup moins que le premier du silo C.

**Ordre recommandé pour les vingt prochains guides :**

1. **Sites vitrines (silo F, 1/14)** — le marché le plus large. Un dirigeant qui
   cherche « combien coûte un site internet » est en amont de tout : il deviendra
   peut-être aussi un client SaaS. Sujets : combien coûte un site internet,
   combien de temps pour le créer, template ou sur-mesure, préparer ses contenus,
   refonte sans perdre son référencement, choisir son agence web.
2. **Google Ads (silo D, 1/15)** — intention commerciale immédiate, et
   `prix-gestion-google-ads` attend des voisins pour sortir de son isolement.
   Sujets du sprint : auditer un compte, pourquoi ça ne convertit pas, budget
   d'une PME, calculer un coût par prospect.
3. **Référencement (silo C, 0/17)** — vous vendez du SEO et vous n'avez aucun
   guide SEO. C'est le silo où votre crédibilité se démontre par l'exemple.
   Sujets : ce que contient un audit SEO, SEO ou Google Ads, durée avant
   résultats, choisir une agence.
4. **Maintenance et TMA (silo E, 0/13)** — moins de volume, mais le revenu le
   plus récurrent. `contrat-tma-application` est dans le sprint et non traité.

**Ne reprends le silo A qu'après.** Il est à 50 %, les autres à 0.

### 5.2 Viser la requête que le client tape avant d'avoir un prestataire

Les guides actuels excellent sur des requêtes de **décision technique** — cadrer,
comparer, sécuriser. Ce sont des requêtes de fin de parcours, à faible volume et
forte concurrence.

Les requêtes à fort volume sont plus bêtes et plus tôt : « combien coûte »,
« comment choisir », « quelle différence entre », « faut-il ». Le corpus les
traite peu.

**Un guide « combien coûte un site internet » attirera plus de monde que
`droits-acces-application-metier`** — et le maillage ramènera ensuite le lecteur
vers les guides profonds. C'est le rôle d'un silo : une porte large, des couloirs
précis.

### 5.3 Exploiter l'ancrage local — le levier le moins cher

Vous êtes à Bassens, aux portes de Chambéry. La concurrence sur « agence web
Chambéry » ou « développeur sur mesure Savoie » est sans commune mesure avec
celle sur « développement SaaS ».

Trois pages locales existent déjà. Elles méritent :

- une **fiche Google Business Profile** — aujourd'hui absente, c'est le premier
  signal local et il est gratuit ;
- des pages ville supplémentaires **uniquement si elles ont un contenu propre**
  (tissu économique, cas réels, déplacements) — jamais des variantes du même
  texte, ce qui est explicitement interdit par la roadmap ;
- le `sameAs` de l'entité, aujourd'hui vide faute de profil existant.

**Action concrète pour Quentin :** créer la page LinkedIn entreprise et la fiche
Google Business Profile. Dès qu'elles existent, `sameAs` peut être renseigné et
l'entité devient identifiable — ce que Google et les assistants utilisent pour
relier une marque à une réalité.

### 5.4 Être cité par les assistants — ce qui compte vraiment

L'objectif est légitime et le site part bien. Ce qui produit une citation, par
ordre d'importance :

| Levier | État |
|---|---|
| Contenu rendu côté serveur, lisible sans JS | ✅ acquis |
| Robots d'assistants non bloqués | ✅ acquis, désormais explicite |
| Faits sourcés, datés, attribuables | ✅ excellent |
| Contenu non dupliqué dans le DOM | ✅ corrigé (PR #22) |
| Données structurées cohérentes avec le visible | ✅ acquis |
| **Réponses courtes et extractibles** | ❌ **manquant** — voir 4.a |
| **Entité identifiable (`sameAs`)** | ❌ bloqué sur la création des profils |

Un assistant cite ce qu'il peut **extraire proprement** : une réponse nette, en
trois lignes, immédiatement après la question. C'est exactement l'encart
« à retenir en 30 secondes ». **Le même correctif sert le lecteur pressé et la
citation par les IA.**

### 5.5 Mesurer, et arrêter ce qui ne marche pas

Rien dans le dépôt ne relie la production à ses résultats.

- Brancher la **Search Console** et relever, par guide : impressions, clics,
  position moyenne, requêtes réellement captées.
- Au bout de **trois mois**, comparer ce qu'un guide visait et ce qu'il capte.
  Un guide qui ne prend aucune impression sur sa requête cible n'a pas besoin
  d'un frère : il a besoin d'être révisé ou fusionné.
- La roadmap prévoit déjà une règle anti-cannibalisation. **Applique-la sur
  données réelles**, pas sur intuition.

Cette boucle vaut plus que dix guides de plus. Sans elle, la production avance
à l'aveugle — c'est déjà ce qui a produit le déséquilibre des silos.

### 5.6 Ce qui compte plus que le classement

Le site vend des prestations à plusieurs milliers d'euros. Dix visiteurs
qualifiés valent mieux que mille curieux.

Les guides actuels convertissent bien **parce qu'ils refusent de vendre**. Garde
ça. Et vérifie une chose simple : chaque guide propose-t-il une **sortie
proportionnée** ? Un lecteur au stade « je me demande si j'ai un problème » ne
doit pas se voir proposer un devis, mais un diagnostic. Un lecteur qui compare
des devis, oui.

---

## 6. Ce qu'il ne faut pas faire

- **Ne pas remettre `editorialStatus`** sur les neuf guides indexés : la revue a
  eu lieu, elle est documentée dans la PR #20 et dans `guides.test.ts`.
- **Ne pas ajouter de liens pour atteindre un compte.** Si un sujet n'a pas six
  voisins pertinents, déclarer l'exception dans `TOPICAL_OUTLIERS` avec son
  motif. Une liste artificielle est un défaut, pas une conformité.
- **Ne pas assouplir un test pour faire passer une rédaction.** La seule
  exception légitime est celle rencontrée ici : le test figeait un état au lieu
  d'un invariant — et alors on réécrit l'invariant, on ne supprime pas le
  contrôle.
- **Ne pas réintroduire le motif « rendre deux fois, masquer l'une ».** Un test
  relit la source et échoue.
- **Ne pas retirer d'entrée de `LEGACY_GUIDE_SLUGS`** sans que le guide existe
  au registre et soit servi : ce serait un 404 sec là où il y avait une
  redirection utile.
- **Ne pas produire deux guides pour la même intention.** Deux variantes de
  mots-clés qui donnent la même réponse se fusionnent. C'est ce qui avait fait
  dériver l'ancien corpus vers 100 pages faibles.
- **Ne jamais inventer** un témoignage, une référence client, une métrique, un
  historique, un effectif. La règle d'or de `CLAUDE.md` prime sur toute
  considération commerciale. Elle a été respectée intégralement dans les trois
  PR : aucun fait nouveau n'a été ajouté, uniquement des liens entre pages
  existantes et leur phrase d'introduction.

---

## 7. Checklist par guide, à appliquer dès le prochain

Avant de déclarer un guide terminé :

- [ ] le sujet vient **du sprint prioritaire**, dans l'ordre, ou l'écart est
      justifié par écrit dans la roadmap ;
- [ ] il ouvre un silo sous-couvert plutôt que d'approfondir le silo A ;
- [ ] **encart « à retenir en 30 secondes »** : trois puces, juste après
      l'introduction, extractibles telles quelles ;
- [ ] chemin de lecture rapide annoncé en tête de sommaire ;
- [ ] **6 à 10 liens contextuels** vers des guides existants, en prose, ancre
      descriptive, raison explicite ;
- [ ] **au moins 2 guides existants pointent vers lui** — cela suppose de les
      modifier dans la même passe ;
- [ ] au moins 8 sources primaires, datées, vérifiées une à une ;
- [ ] un cas chiffré raconté comme une histoire courte ;
- [ ] sortie commerciale **proportionnée** au stade du lecteur ;
- [ ] `npm test` vert, y compris le maillage et le rendu unique ;
- [ ] revue humaine **demandée explicitement**, guide non laissé en attente ;
- [ ] après déploiement, `curl -L` prouvant que la page est servie sans
      redirection, et présence au sitemap.

---

## 8. Si tu ne retiens que trois choses

1. **Ouvre les silos vides.** Sites vitrines, Google Ads, référencement,
   maintenance. Le douzième guide du silo A rapporte moins que le premier du
   silo F.
2. **Ajoute un « à retenir en 30 secondes » à chaque guide**, existant compris.
   C'est le même geste qui sert le dirigeant pressé et la citation par les
   assistants.
3. **Branche la Search Console et regarde les chiffres.** La production avance
   aujourd'hui sans retour ; c'est ce qui a laissé trois silos à zéro pendant
   qu'un quatrième atteignait 50 %.
