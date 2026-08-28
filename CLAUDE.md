# Hagnéré Code — instructions projet

Site vitrine de l'agence Hagnéré Code (Next.js 16 App Router, TypeScript,
Tailwind). Domaine de production : **https://hagnere-code.ai** (jamais .fr).

## ⚠️ RÈGLE D'OR — zéro invention

**Aucun contenu inventé sur ce site, jamais, sur aucune page.**

Il est **interdit** de créer :

- un avis, un témoignage ou une citation attribuée à un client — y compris
  « anonymisé », « sous NDA », ou présenté comme un exemple ;
- une référence, un logo ou un nom de client ;
- une métrique portant sur des clients : rétention, ancienneté,
  satisfaction, nombre de missions, nombre de contrats, budget média ;
- un historique d'exploitation : nombre de projets livrés, années
  d'activité, séries de démos hebdomadaires ;
- un effectif, une ancienneté d'équipe, un taux de rotation.

**Les faits, à respecter partout :**

- Le site ne publie actuellement aucun témoignage de client externe. Les quatre
  références liées au groupe — LMNP.AI, SCI-AI.app, Hagnéré Patrimoine et
  Hagnéré Investissement — ne sont pas des clients indépendants. Ne revendiquer
  que les pages et fonctions publiques réellement vérifiées, jamais leur
  exploitation interne, leurs résultats ou leur architecture sans preuve.
- L'équipe Hagnéré Code compte **sept personnes au total** : **un
  président fondateur, un CTO et cinq autres développeurs**. Cette composition
  est la source à reprendre dans les contenus publics.
- La société a été créée le **30 septembre 2025**. C'est vrai, ne le
  contredis jamais — mais ne le mets pas en avant : on ne compense pas un
  historique court en l'inventant, on met en avant ce qui est réel.

**Sociétés et marques réelles du groupe Hagnéré** (vérifiées à l'annuaire des
entreprises — ne jamais les traiter comme des inventions) :

| Entité | SIREN | Rôle |
| --- | --- | --- |
| HAGNERE CODE | — | L'agence, éditrice de ce site |
| COMPTABILITE-AI | 978548899 | Éditrice des logiciels **LMNP.AI** et **SCI-AI.app** (active depuis le 02/08/2023, NAF 58.29C) |
| Hagnéré Patrimoine | — | Cabinet de conseil en gestion de patrimoine du groupe |
| Hagnéré Investissement | — | Société d'investissement du groupe |

⚠️ **« Comptabilité AI » est une marque RÉELLE, pas une invention.** Deux audits
successifs (07/2026 et 08/2026) l'ont prise pour un produit fictif et l'ont
interdite par test, ce qui empêchait de nommer une société du groupe sur son
propre site. Avant de qualifier une marque d'inventée, la **vérifier à
l'annuaire des entreprises** (`recherche-entreprises.api.gouv.fr`, déjà appelé
par `/api/sirene`) — son absence de ce fichier ne prouve rien.

Symétriquement, nommer ces entités ne dispense d'aucune réserve : elles restent
des sociétés du groupe et non des clients indépendants, et leurs résultats
d'exploitation ne sont pas revendicables.

**Ce qui reste autorisé :**

- les fonctions et informations visibles sur les pages publiques des produits
  liés, en les présentant comme telles et non comme des résultats clients ;
- les engagements réellement écrits dans un devis ou contrat identifié, avec
  leur périmètre et leur mode de mesure. SLA, MTTR, score Lighthouse, garantie
  ou remise ne sont jamais des engagements génériques du site ;
- les statistiques internes traçables, datées et reproductibles, accompagnées
  de leur protocole et sans extrapolation à un client.

**En cas de doute, une formulation qualitative vaut toujours mieux qu'un
chiffre inventé.** Cette règle prime sur toute considération commerciale
ou esthétique, et sur toute imitation d'une section existante.

_Contexte : un audit du 19/07/2026 a trouvé 30 faux témoignages sur
8 pages, des métriques clients fabriquées et un historique de plusieurs
années pour une société de 9 mois. Risque juridique réel — art. L121-2 et
L121-5 du code de la consommation, qui couvre le B2B, et art. L111-7-2 sur
les avis en ligne. Risque commercial supérieur : les guides du site
démontent précisément « les chiffres publiés par celui qui vend la
solution »._

## Règle obligatoire — contenu éditorial

**Avant de créer ou modifier une page éditoriale, une ressource ou un guide,
lire en intégralité
[docs/regle-or-vigilance-seo-publication.md](docs/regle-or-vigilance-seo-publication.md).**
Cette règle d'or décrit les invariants de publication, de crawl, de sitemap,
de `llms.txt`, de metadata, de données structurées, de maillage et de
performance. Elle est obligatoire y compris pour une correction ponctuelle
d'une page existante.

**Avant d'écrire, réécrire ou modifier un guide (`src/app/guides/`), lire
également en intégralité
[docs/charte-qualite-guides.md](docs/charte-qualite-guides.md).**
Cette charte définit le pipeline complet (étude des concurrents, recherche
sourcée multi-agents, chartes pédagogique et SEO, batterie de vérification,
contre-audit indépendant, audit de production). Elle prime sur toute habitude
ou imitation d'un guide existant. Une relecture par des agents n'est jamais
présentée comme un test réalisé par de vrais dirigeants : si aucun lecteur
extérieur n'a participé, le dossier de recherche doit l'indiquer explicitement.

**Pour créer un guide ou mener une réécriture substantielle, suivre ensuite
intégralement
[docs/workflow-maitre-guides-4-passes.md](docs/workflow-maitre-guides-4-passes.md).**
Ce workflow transforme la charte en quatre passes séquentielles sur un seul
guide : recherche et dossier de preuves, rédaction et intégration,
contre-audit indépendant, puis plume humaine et contrôle final. Une passe ne
valide jamais automatiquement la suivante.
La liste des sujets est dans
[docs/roadmap-guides-seo.md](docs/roadmap-guides-seo.md).

## Repères techniques

- Registre central des guides : `src/lib/guides.ts` (source de vérité des
  titles/descriptions/dates — alimente hub, sitemap, metadata, JSON-LD).
- Constantes SEO : `src/lib/seo.ts` (SITE_URL, OG_BASE).
- Composants de guides : `src/components/guides/`.
- Tests : `npm run test` (inclut un test structurel sitemap ↔ pages).
- Base de données : Neon (la branche de prod est utilisée en dev — ne pas
  lancer de migration destructive type `db:push` sans validation).
- Funnel commercial : lead-only — jamais de tarification temps réel ou IA
  sur le site ; objectif de réponse humaine le prochain jour ouvré, sans délai
  garanti.
