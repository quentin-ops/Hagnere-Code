# Roadmap éditoriale — 30 guides SEO prioritaires

> ⚠️ **AVANT TOUTE RÉDACTION** : lire en intégralité la
> [charte qualité des guides](charte-qualite-guides.md). Aucun article ne
> s'écrit sans passer par elle — elle définit le pipeline obligatoire,
> l'étude des concurrents, les chartes pédagogique et SEO, et la batterie
> de vérification.

> 🔄 **ORDRE DE PRODUCTION RÉVISÉ LE 18 JUILLET 2026** après un audit
> concurrentiel des SERP françaises (10 agents, 6 clusters de requêtes,
> analyse des dominants) : voir
> [audit-concurrentiel-2026-07.md](audit-concurrentiel-2026-07.md).
> **Le classement P1/P2/P3 ci-dessous reste valable comme carte du
> territoire, mais il ne dicte plus l'ordre de production.** L'ordre à
> suivre est celui de la section « Ordre de production » ci-dessous,
> trié par *vitesse de positionnement* et non par volume de recherche.
>
> Les trois constats qui changent l'ordre :
> 1. Les 23 guides publiés sont **plus profonds que 100 % de ce qui
>    ranke** — le déficit n'est pas éditorial, il est d'autorité.
>    Publier un 24ᵉ guide généraliste ne débloque rien.
> 2. Le **local savoyard est le seul terrain gagnable en 2-6 mois** par
>    un domaine neuf, et il est aujourd'hui à zéro (aucune page locale,
>    pas de fiche Google Business Profile).
> 3. Sur les requêtes commerciales technos (« agence next js »), la SERP
>    ne contient **que des pages service, aucun guide** : il faut
>    produire des pages service, pas des articles.

## Ordre de production (révisé 18/07/2026)

**Priorité absolue — non éditorial, à faire avant tout guide :**
Search Console (mesurer l'indexation réelle) · `noindex` sur
`backoffice.hagnere-code.ai` (indexable aujourd'hui) · arbitrage du
`<title>` de la home (l'entité annoncée est « SaaS » alors que 23/23
guides parlent de sites web) · fiche Google Business Profile (délai
postal de 5-14 j = chemin critique) · dossier Activateur France Num.

| # | Sujet | Type | Difficulté SERP | Délai estimé |
|---|---|---|---|---|
| 1 | `agence-web-aix-les-bains` | Page locale | Faible | 2-4 mois |
| 2 | Modèles `.docx`/`.pdf` cahier des charges | Ressource | Moyenne | 2-4 mois |
| 3 | `agence-web-chambery` | Page locale | Faible-moyenne | 3-6 mois |
| 4 | `creation-site-internet-savoie` | Guide local | Faible | 3-6 mois |
| 5 | `agence-next-js` | **Page service** | Faible | 3-6 mois |
| 6 | `no-code-ou-sur-mesure` | Guide | Faible | 3-6 mois |
| 7 | Enrichir `prix-logiciel-sur-mesure` | Enrichissement | Faible | 3-6 mois |
| 8 | Renforcer `shopify-ou-sur-mesure` | Enrichissement | Très faible | 3-6 mois |
| 9 | Éclater `creer-un-site-avec-ia` en 3 pages | Guides courts | Faible | 3-6 mois |
| 10 | `transformer-excel-en-application` | Guide | Faible | 4-6 mois |
| 11 | `agence-developpement-saas-sur-mesure` | Page service | Moyenne | 4-8 mois |
| 12 | Pages sectorielles Savoie | Pages | Faible | 4-8 mois |
| 13 | Éclatement des guides prix en sous-pages | Architecture | Faible | 4-8 mois |
| 14 | `combien-coute-un-crm` | Guide | Moyenne | 6-9 mois |
| 15 | Baromètre de prix (si N crédible) | Étude | Moyenne | 6-12 mois |

**Dé-priorisés** (utiles, mais après le local et les pages service) :
`prix-referencement-naturel`, `prix-audit-site-internet`,
`prix-landing-page`, `combien-coute-une-marketplace`,
`combien-coute-un-mvp`. **Écartés** : version nationale des aides,
pages Lyon/Grenoble avant 12 mois, « développeur web Chambéry »
(intention freelance low-cost), glossaire, annuaire d'agences,
simulateur de prix (contraire au funnel lead-only).

> Construite le 13 juillet 2026 à partir de 4 sweeps d'autocomplete Google
> (~150 amorces, 73 requêtes qualifiées) + vérifications SERP page par page.
> Volume = signal autocomplete (position, variantes, flag haute fréquence).
> Conversion = proximité avec les offres Hagnéré Code.
> Priorité : P1 = à publier dans les 4-6 prochaines semaines, puis P2, P3.
>
> **Process de production** (industrialisé, voir guide n°1) : 1 entrée dans
> `src/lib/guides.ts` + 1 dossier copié depuis
> `src/app/guides/combien-coute-un-site-internet/` → hub, sitemap, JSON-LD
> et métadonnées se remplissent seuls. Chaque guide : recherche sourcée
> (workflow 5 agents), ~4 000+ mots, FAQ 12 questions issues des vraies
> requêtes, auteur Person, image OG générée, 2-3 liens entrants posés depuis
> les pages à autorité.

## Pilier A — Budget & prix (cocon « combien ça coûte »)

| # | Guide (slug proposé) | Requête cible | Vol. | Conv. | Priorité | Alimente |
|---|---|---|---|---|---|---|
| 1 | ✅ `combien-coute-un-site-internet` | combien coûte un site internet | fort | fort | **Publié 13/07** | tous |
| 2 | 🔧 `combien-coute-une-application-mobile` | combien coûte une application mobile | fort | fort | **En cours** | app mobile |
| 3 | `prix-site-vitrine` | prix site vitrine | fort | fort | P1 | sites vitrines |
| 4 | `prix-site-e-commerce` | prix site e-commerce | fort | fort | P1 | e-commerce |
| 5 | `combien-coute-un-saas` | combien coûte un saas / application web | faible* | fort | P1 (*SERP quasi vide, leads ultra qualifiés) | SaaS |
| 6 | `prix-logiciel-sur-mesure` | prix logiciel sur mesure | moyen | fort | P1 | outils internes |
| 7 | `prix-refonte-site-internet` | refonte site internet prix | fort | fort | P1 | vitrines + maintenance |
| 8 | `cout-maintenance-site-internet` | coût maintenance site internet | moyen | fort | P2 | maintenance/TMA |
| 9 | `prix-referencement-naturel` | prix référencement naturel | fort | moyen | P2 | SEO |
| 10 | `prix-audit-site-internet` | prix audit seo / audit site internet prix | moyen | fort | P2 | audit technique |
| 11 | `prix-landing-page` | prix landing page | fort | moyen | P2 | sites vitrines |
| 12 | `tjm-developpeur-web` | tjm développeur web | fort | moyen | P2 (angle client : convertir un TJM en budget) | tous |
| 13 | `combien-coute-un-crm` | combien coûte un logiciel crm | moyen | fort | P2 (angle sur-mesure vs licences, unique) | outils internes |
| 14 | `combien-coute-une-marketplace` | prix création marketplace | faible* | fort | P3 (*niche, très forte valeur/lead) | SaaS/e-com |
| 15 | `combien-coute-un-mvp` | combien coûte un mvp | faible | fort | P3 | SaaS |

## Pilier B — Comparatifs & choix (capte la phase de décision)

| # | Guide | Requête cible | Vol. | Conv. | Priorité | Alimente |
|---|---|---|---|---|---|---|
| 16 | `nextjs-ou-wordpress` | next js ou wordpress | moyen | fort | **P1 — comparatif signature** (SERP jeune, alignement parfait) | tous |
| 17 | `wix-ou-wordpress` | wix ou wordpress | fort | fort | P2 (+ la 3e option sur mesure) | vitrines |
| 18 | `shopify-ou-sur-mesure` | shopify ou site e-commerce sur mesure | faible* | fort | P1 (*zéro concurrence, bas de funnel 15-120 k€) | e-commerce |
| 19 | `woocommerce-ou-shopify` | woocommerce ou shopify | fort | fort | P2 | e-commerce |
| 20 | `react-native-ou-flutter` | react native ou flutter | fort | fort | P2 (angle dirigeant, pas développeur) | app mobile |
| 21 | `agence-web-ou-freelance` | agence web ou freelance | moyen | fort | P2 (grille honnête chiffrée) | tous |
| 22 | `choisir-son-agence-web` | comment choisir son agence web | moyen | fort | P2 (red flags + questions à poser) | tous |
| 23 | `creer-un-site-avec-ia` | créer un site avec ia | fort | moyen | P2 (test réel des outils, limites) | vitrines |
| 24 | `no-code-ou-sur-mesure` | no code ou développement sur mesure | faible | fort | P3 | outils internes |

## Pilier C — Projet & process (capte l'amont, énorme gisement CDC)

| # | Guide | Requête cible | Vol. | Conv. | Priorité | Alimente |
|---|---|---|---|---|---|---|
| 25 | `cahier-des-charges-site-internet` | cahier des charges site internet exemple | fort | fort | **P1 — gisement n°1** (+ modèle téléchargeable) | tous |
| 26 | `cahier-des-charges-application-mobile` | cahier des charges application mobile | fort | fort | P2 (déclinaisons app web/SaaS quasi vierges) | app mobile |
| 27 | `combien-de-temps-pour-creer-un-site` | combien de temps pour créer un site internet | fort | fort | P2 | tous |
| 28 | `refonte-sans-perdre-son-seo` | refonte site internet sans perdre seo | moyen | fort | P2 (cas WordPress → Next.js chiffré) | maintenance |
| 29 | `aides-creation-site-internet` | aide création site internet / subvention | fort | fort | P1 (panorama 2026 vérifié à la source, focus AURA) | tous |
| 30 | `proprietaire-site-internet-code-source` | qui est propriétaire d'un site internet | moyen | moyen | P3 (cluster juridique : cession L131-3, réversibilité, contrat) | tous |

## Réserve — Douleurs & croissance (au-delà des 30, très bons candidats)

- `pourquoi-mon-site-est-lent` (fort vol, CTA audit perf) ;
- `migrer-wordpress-vers-nextjs` — **0 contenu français, SERP 100 % anglophone : boulevard**, à publier dès que le cluster refonte existe ;
- `transformer-excel-en-application` (pont direct calculateur + outils internes) ;
- `site-wordpress-pirate-que-faire` (requête d'urgence, CTA TMA) ;
- `pourquoi-mon-site-ne-convertit-pas` (CTA audit conversion) ;
- `facturation-electronique-2026-outil-sur-mesure` (volume trending, angle dev unique).

## Règles de production

1. **Rythme conseillé** : 2 guides/semaine (P1 d'abord) → les 30 publiés en ~3 mois.
2. **Cannibalisation** : les guides « prix par type » (3, 4, 5, 6) doivent
   viser leur requête propre et LIER le pilier n°1 (et réciproquement, ajouter
   les liens dans le pilier à chaque publication).
3. **Maillage systématique** : chaque guide reçoit ≥ 2 liens entrants
   contextuels depuis les pages service/à autorité, et lie 3-5 pages
   service + le pilier de son cluster.
4. **Fraîcheur** : `dateModified` mise à jour à chaque retouche réelle ;
   re-passage trimestriel sur les chiffres (prix, aides régionales).
5. **Mesure** : après indexation, suivre dans Search Console les requêtes
   réelles par guide et ajuster titles/FAQ en conséquence.
