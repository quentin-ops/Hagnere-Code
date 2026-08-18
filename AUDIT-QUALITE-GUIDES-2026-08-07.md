# Audit qualité — corpus de guides Hagnéré Code

> Audit indépendant du 7 août 2026, mené sur `origin/main` (`ffab025`) et sur la production `hagnere-code.ai`.
> Périmètre : les 17 guides publiés, leur traçabilité en quatre passes, la porte qualité automatisée, l'état réel en ligne et l'héritage des 100 guides retirés le 29 juillet.
> Référentiels : les 4 prompts maîtres (Création / Enrichissement / Polish / Anti-IA) et le niveau constaté sur Hagnéré Patrimoine et Hagnéré Investissement.

---

## 0. Verdict

**Ce corpus est très au-dessus de ce qui a été fait sur Hagnéré Investissement.** La remise à zéro du 29 juillet a été suivie d'une reconstruction disciplinée, outillée et honnête. Le problème central d'Investissement — des guides déclarés publiés mais invisibles — n'existe pas ici : les 17 guides répondent en 200, sans une seule redirection parasite.

| Axe | État | Note |
|---|---|---|
| Visibilité réelle en production | 🟢 17/17 servis, 0 redirection parasite | 10/10 |
| Porte qualité | 🟢 Tests exécutables, 3 933 assertions, CI qui recale | 9/10 |
| Honnêteté éditoriale | 🟢 9 guides en `noindex` assumé, en attente de revue humaine | 10/10 |
| Traçabilité 4 passes | 🟢 100 dossiers, 314 manifestes sha256, 52 `NO_GO` réels | 9/10 |
| Profondeur | 🟢 Médiane 4 861 mots de prose, 8 300 mots rendus | 8/10 |
| Sourçage | 🟢 Médiane 10 sources, toutes autoritaires | 9/10 |
| Passe anti-IA | 🟢 1,7 connecteur robotique/guide, 0 dramatisation | 9/10 |
| Originalité | 🟢 4 phrases partagées sur 17 guides | 10/10 |
| Métadonnées SEO | 🟢 17/17 conformes, 0 défaut | 10/10 |
| **Maillage interne** | 🔴 **2,6 liens inter-guides en moyenne, 17/17 sous le seuil** | **2/10** |
| Poids des pages | 🟠 447 à 695 Ko de HTML, payload RSC dupliqué | 4/10 |
| Avancement roadmap | 🟠 17 publiés sur 100 prévus | — |

**En une phrase :** le processus est sain, le contenu est bon, la mécanique de contrôle fonctionne réellement — le seul défaut structurel est l'absence de silo entre les guides, et le vrai goulot d'étranglement aujourd'hui, c'est la file de 9 guides qui attendent ta relecture.

---

## 1. 🔴 Le seul défaut structurel : le maillage interne

### Constat

Mesuré en production sur les 17 guides, en comptant les liens vers **d'autres guides** (hors navigation) :

| Guide | Liens inter-guides |
|---|---|
| `prix-gestion-google-ads` | **0** |
| `automatiser-processus-metier`, `calculer-roi-application-metier`, `reprendre-logiciel-metier-existant` | 1 |
| `remplacer-microsoft-access-application-web` | 2 |
| 8 guides | 3 |
| 4 guides | 4 |

**Moyenne : 2,6. Maximum : 4. Aucun guide n'atteint 8.**

Le prompt #1 §3 exige **8 à 15 liens internes sortants**, avec des ancres naturelles. Aucun guide du corpus ne respecte cette consigne.

En face, chaque guide porte **11 liens vers les pages de service** — mais ce sont ceux de la navigation, identiques partout. Le maillage éditorial contextuel, lui, est quasi inexistant.

### Pourquoi c'est le point le plus coûteux

La roadmap l'écrit elle-même : « le maillage contextuel aide Google à découvrir les pages et à comprendre leurs relations ». Avec 17 guides thématiquement très proches (SaaS, MVP, cahier des charges, ROI, sécurité, migration), le silo devrait être dense. Il ne l'est pas. Chaque guide est une île reliée au commercial, pas à ses voisins.

C'est d'autant plus dommage que le contenu, lui, est excellent : c'est un défaut de câblage, pas de fond.

### Correctif

1. Construire une **matrice de maillage** : pour chacun des 17 guides, lister les 8 à 12 guides voisins pertinents et l'ancre naturelle correspondante.
2. Insérer les liens **dans le corps du texte**, pas dans un bloc « voir aussi » en pied de page — un bloc générique n'a pas la même valeur qu'un lien contextuel.
3. Ajouter un **test de maillage** dans la porte qualité, sur le modèle de `legacy-guide-redirects.test.ts` :
   ```ts
   it("relie chaque guide à au moins huit guides voisins", () => {
     for (const guide of PUBLISHED_GUIDES) {
       const source = readFileSync(pagePathFor(guide.slug), "utf8");
       const links = new Set(
         [...source.matchAll(/href="\/guides\/([a-z0-9-]+)"/g)].map((m) => m[1]),
       );
       links.delete(guide.slug);
       expect(links.size, guide.slug).toBeGreaterThanOrEqual(8);
     }
   });
   ```
   C'est le seul moyen d'éviter que le défaut revienne au 18ᵉ guide.
4. Traiter `prix-gestion-google-ads` en premier : il est à zéro.

---

## 2. 🟠 Poids des pages

### Constat

| | |
|---|---|
| HTML par guide | **447 à 695 Ko** |
| TTFB | 0,10 à 0,25 s ✅ |

Décomposition mesurée sur `cahier-des-charges-saas` (688 Ko) :

| Part | Poids |
|---|---|
| HTML visible | 351 Ko |
| Balises `<script>` | 336 Ko (48 %) |
| dont payload RSC `self.__next_f.push` | **268 Ko (38 %)** |

Le payload RSC **re-sérialise le contenu déjà présent dans le HTML**, pour l'hydratation. La page transporte donc son texte deux fois.

Le TTFB est excellent (Cloudflare), mais 500 à 700 Ko de HTML pèsent sur le LCP en mobile et sur le budget de crawl.

### Cause et correctif

Les outils interactifs (calculateurs, workbenches — 19 au total, jusqu'à 49 Ko de source pour un seul) sont des composants client qui reçoivent de gros objets en props. Tout ce qui traverse la frontière serveur → client est sérialisé dans le payload.

Trois leviers, par ordre de rendement :

1. **Garder la prose en Server Component.** Si un bloc de texte n'est pas interactif, il ne doit jamais être passé en props à un composant client.
2. **Charger les outils en `dynamic(() => import(...), { ssr: false })`** avec un espace réservé. L'outil n'est utile qu'après lecture ; il n'a pas besoin d'être dans le HTML initial.
3. **Réduire les props** : passer des identifiants et laisser le composant client charger ses données, plutôt que d'inliner les tables de référence.

Objectif raisonnable : **moins de 250 Ko de HTML par guide**.

---

## 3. 🟠 Le goulot d'étranglement, c'est la relecture humaine

**9 des 17 guides sont en `noindex, nofollow`, absents du sitemap et du hub `/guides`.**

Ce n'est pas un défaut : c'est le mécanisme voulu. Dans `src/lib/guides.ts` :

```ts
export const PUBLISHED_GUIDES = GUIDES.filter(
  (guide) => guide.editorialStatus !== "ready-for-human-review",
);
```

Un guide qui n'a pas franchi la validation humaine reste accessible par URL mais n'est ni indexé, ni listé. **C'est exactement l'honnêteté qui manquait sur Investissement**, où l'agent se déclarait publié sans jamais vérifier.

Les 9 guides en attente :

| Guide | Mots de prose |
|---|---|
| `cahier-des-charges-saas` | 7 537 |
| `mvp-saas-quoi-inclure` | 5 578 |
| `combien-de-temps-developper-saas` | 4 930 |
| `migrer-logiciel-metier-sans-interruption` | 4 684 |
| `securite-application-metier` | 4 680 |
| `choisir-prestataire-application-metier` | 4 375 |
| `plan-recette-application-metier` | 4 266 |
| `droits-acces-application-metier` | 3 858 |
| `reprendre-logiciel-metier-existant` | 3 350 |

Leur niveau est comparable aux 8 déjà indexés (médiane 4 684 contre 4 934). **Rien ne justifie de les laisser en attente sur des critères de qualité** — il manque seulement ta signature.

**Action :** relire ces 9 guides, retirer `editorialStatus: "ready-for-human-review"` de leur entrée dans `src/lib/guides.ts`, et vérifier après déploiement qu'ils apparaissent au sitemap. C'est le gain SEO le plus rapide disponible : le contenu est déjà écrit et payé.

---

## 4. 🟢 Ce qui est très bien fait

### 4.1 La porte qualité est réelle

C'est la différence la plus nette avec Hagnéré Investissement, où 59 certificats donnaient 59 `PASS` et zéro échec.

| | Investissement | **Code** |
|---|---|---|
| Nature du contrôle | Certificats JSON auto-délivrés | **Tests vitest exécutables** |
| Volume | 59 fichiers JSON | **115 fichiers, 3 933 assertions** |
| Exécution | Aucune | **CI : lint + tsc + tests + build** |
| Taux d'échec | **0 %** | Une branche recalée sur les 12 derniers runs |
| Scores | 90 à 98, jamais d'échec | **80 à 98, 52 `NO_GO` documentés** |

Un exemple qui vaut démonstration : un contrôle a rendu `NO_GO` **à 90/100**. Sur Investissement, 90 était un score de réussite.

Le `prebuild: npm run check:seo` fait tourner 30 fichiers de tests SEO **avant chaque build** : un guide mal câblé ne peut pas être déployé.

### 4.2 Des garde-fous contre la surpromesse

`src/lib/public-claims.test.ts` teste automatiquement l'absence d'affirmations commerciales non étayées :

- « ne transforme pas un objectif de réponse commerciale non mesuré en garantie de 24 h » ;
- « ne promet pas un devis ou un plan sous 48 h non étayé » ;
- « ne promet pas une migration SEO sans perte » ;
- « n'invente pas un historique client récurrent » ;
- « ne présente pas des maquettes illustratives comme des preuves de production ».

C'est la conformité juridique du prompt #1 transformée en test automatique. Je n'ai vu ça sur aucun des deux autres projets.

### 4.3 La traçabilité des quatre passes est authentique

- **100 dossiers de recherche**, jusqu'à 12 400 mots pour un seul guide ;
- **314 manifestes sha256** gelant chaque passe (P1 à P4) ;
- un **gel d'entrée P0 immuable** par guide ;
- des **agents distincts par passe**, ce qui règle le problème d'indépendance du relecteur ;
- des avertissements explicites : « Ce dossier ne prouve ni déploiement, ni publication, ni indexation. »

Cette dernière phrase est exactement la prudence qui a manqué à Investissement.

### 4.4 La qualité rédactionnelle

**Anti-IA (prompt #4) — excellent.**

| Indicateur | Mesure |
|---|---|
| Connecteurs robotiques | 29 sur 17 guides = **1,7 par guide** (presque tous « notamment ») |
| Dramatisation creuse, adjectifs vendeurs | **0** |
| Longueur moyenne de phrase | 19,8 mots, écart-type 28,6 |
| Phrases courtes (<9 mots) | 15,0 % |
| Phrases longues (>28 mots) | 10,7 % |

**Originalité — excellente.** Sur 17 guides, seulement **4 phrases de plus de 25 caractères** apparaissent dans deux guides, et ce sont des termes techniques légitimes (« analyse d'impact relative à la protection des données », une référence de fiche CNIL).

**Sourçage — excellent.** Médiane de 10 sources par guide, aucun guide à zéro, seulement 2 sous le seuil de 8. Les domaines cités sont primaires et opposables :

```
CNIL (66)  ·  Microsoft Learn (35)  ·  Google Support (18)
cyber.gouv.fr (16)  ·  Légifrance (15)  ·  EUR-Lex (10)
ISO (7)  ·  OWASP (6)  ·  francenum.gouv.fr (6)  ·  NIST (4)  ·  ANACT (4)
```

**Métadonnées SEO — parfaites.** 17 titres de 39 à 58 caractères, 17 descriptions de 122 à 154. **Zéro dépassement, zéro description trop courte.**

### 4.5 La gestion des 100 guides retirés est propre

Le reset du 29 juillet a supprimé 100 guides. Douze ont été reconstruits, 88 restent retirés. Vérification en production sur les 88 :

```
404 (page morte)      : 0
Redirigés vers un 200 : 88
Présents au sitemap   : 0
```

Les redirections pointent vers **9 pages de service distinctes**, choisies par proximité d'intention — pas un renvoi de masse vers l'accueil qui aurait été lu comme un soft 404.

Et surtout, `legacy-guide-redirects.test.ts` vérifie qu'un slug reconstruit **n'est plus** dans la liste des redirections. C'est précisément le garde-fou dont l'absence a rendu 42 guides invisibles sur Investissement pendant une semaine.

### 4.6 Un outil interactif par guide

19 outils (calculateurs de ROI, planificateurs de charge, workbenches de décision, moteurs de cahier des charges), chacun avec ses tests unitaires. C'est un vrai différenciateur concurrentiel : les concurrents publient du texte, ce corpus publie des outils de décision.

---

## 5. 🟡 Points secondaires

### 5.1 Le garde-fou anti-redirection est trop rigide

`legacy-guide-redirects.test.ts` protège les slugs reconstruits, mais **slug par slug**, avec 13 `not.toContain` écrits à la main, plus un `expect(LEGACY_GUIDE_SLUGS).toHaveLength(88)`.

Conséquence : le 18ᵉ guide reconstruit ne sera pas protégé automatiquement, et il faudra penser à décrémenter le compte à la main. Un seul oubli remet un guide derrière une redirection.

**Correctif — trois lignes qui remplacent les treize :**
```ts
it("ne redirige jamais un guide actif", () => {
  for (const guide of GUIDES) {
    expect(LEGACY_GUIDE_SLUGS, guide.slug).not.toContain(guide.slug);
  }
});
```
Et remplacer `toHaveLength(88)` par une borne (`toBeLessThanOrEqual(88)`), le nombre ne pouvant que décroître.

### 5.2 Deux guides sous le seuil de sources

`signes-besoin-logiciel-metier` (6 sources) et `droits-acces-application-metier` (7) sont sous les 8 demandées. Écart mineur, à combler à la prochaine passe.

### 5.3 L'absence de schema `FAQPage` est un choix, pas un oubli

14 tests interdisent explicitement `FAQPage`, `HowTo`, `Review`, `AggregateRating`. Les FAQ existent pourtant (9 à 25 questions par guide) et sont visibles pour le lecteur.

**Ce choix est correct.** Depuis 2023, Google ne montre les résultats enrichis FAQ que pour les sites gouvernementaux et de santé faisant autorité : le balisage n'apporterait rien à un site d'agence, et son absence évite le bruit. À conserver tel quel.

### 5.4 Avancement

17 guides publiés sur les **100 prévus** par `docs/roadmap-guides-seo.md`, dont 8 seulement indexés. Environ **10 guides supplémentaires sont en cours** (worktrees actifs : `agence-saas-ou-freelance`, `back-office-sur-mesure-pme`, `bubble-ou-saas-sur-mesure`, `lovable-bolt-v0-ou-agence-saas`, `mvp-prototype-ou-poc`, `prioriser-fonctionnalites-mvp-saas`, `zapier-make-ou-developpement-sur-mesure`, `architecture-multitenant-saas-pour-dirigeant`…).

19 PR, **toutes fusionnées**, aucune en attente.

### 5.5 La copie locale est sur une branche de travail

`~/Developpement/Hagnere Code` est sur `codex/giga-audit-guides`, **33 commits derrière `origin/main`**, avec 522 fichiers modifiés. Codex y travaille. Ce n'est pas un problème en soi, mais **ne pas auditer ni déployer depuis cette copie** — c'est l'erreur exacte qui a fait régresser la production d'Investissement de 240 commits.

---

## 6. Plan d'action, par rendement décroissant

| # | Action | Effort | Gain |
|---|---|---|---|
| 1 | **Relire et indexer les 9 guides en attente** — le contenu est écrit, il manque ta signature | Faible | **Très élevé** |
| 2 | **Construire le maillage inter-guides** (8-12 liens contextuels par guide) + test de garde | Moyen | **Très élevé** |
| 3 | Généraliser le garde-fou anti-redirection (3 lignes) | Très faible | Élevé (préventif) |
| 4 | Alléger les pages : outils en `dynamic`, prose en Server Component | Moyen | Moyen |
| 5 | Compléter les sources des 2 guides sous le seuil | Faible | Faible |
| 6 | Poursuivre la roadmap au rythme actuel | — | — |

**Ne rien changer** au processus en quatre passes, à la porte de tests, au mécanisme `ready-for-human-review`, ni au rythme rédactionnel. C'est ce qui fait la qualité du corpus.

---

## 7. Comparaison avec les deux autres projets

| | Investissement (au 6 août) | **Code (au 7 août)** |
|---|---|---|
| Guides servis en production | 5 sur 47 | **17 sur 17** |
| Médiane de longueur | 953 mots | **4 861 mots** |
| Contrôle qualité | Certificats JSON auto-délivrés | **3 933 assertions exécutées en CI** |
| Taux d'échec de la porte | 0 % (59/59 `PASS`) | Réel (`NO_GO` à 90/100) |
| Guides non validés | Déclarés publiés à tort | **`noindex` assumé, en attente** |
| Maillage interne | 2 à 4 liens | 2,6 liens ❌ *(même faiblesse)* |
| Sourçage | 165 URLs valides sur 166 ✅ | Médiane 10, autoritaires ✅ |
| Anti-IA | 0,9 connecteur/guide ✅ | 1,7 connecteur/guide ✅ |

Le maillage interne est la **seule faiblesse commune aux deux projets**. Tout le reste a été corrigé sur Code.

Face à Hagnéré Patrimoine (médiane ~6 700 mots), le corpus Code est un peu plus court (~4 900) mais compense par ses outils interactifs et une discipline de contrôle supérieure.
