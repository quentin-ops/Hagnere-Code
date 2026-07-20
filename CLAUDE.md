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

- Hagnéré Code **n'a aucun client externe**. Les seules réalisations sont
  les **quatre produits du groupe Hagnéré** — LMNP.AI, SCI-AI.app,
  Hagnéré Patrimoine, Hagnéré Investissement — conçus, développés **et
  exploités** en interne.
- L'équipe Hagnéré Code compte **sept personnes au total** : **un
  gérant/fondateur, un CTO et cinq autres développeurs**. Cette composition
  est la source à reprendre dans les contenus publics.
- La société a été créée le **30 septembre 2025**. C'est vrai, ne le
  contredis jamais — mais ne le mets pas en avant : on ne compense pas un
  historique court en l'inventant, on met en avant ce qui est réel.

**Ce qui reste autorisé :**

- tout ce qui décrit nos propres produits — ils sont en ligne et
  vérifiables en un clic ; le fait de les **exploiter** en production est
  l'argument le plus fort du site ;
- les **engagements contractuels** (SLA, MTTR, Lighthouse 95+, garantie
  30 jours, forfait fixe) : ce sont des promesses, pas des historiques ;
- les statistiques réellement internes, tant qu'elles ne sont pas
  présentées comme des résultats obtenus chez des clients.

**En cas de doute, une formulation qualitative vaut toujours mieux qu'un
chiffre inventé.** Cette règle prime sur toute considération commerciale
ou esthétique, et sur toute imitation d'une section existante.

*Contexte : un audit du 19/07/2026 a trouvé 30 faux témoignages sur
8 pages, des métriques clients fabriquées et un historique de plusieurs
années pour une société de 9 mois. Risque juridique réel — art. L121-2 et
L121-5 du code de la consommation, qui couvre le B2B, et art. L111-7-2 sur
les avis en ligne. Risque commercial supérieur : les guides du site
démontent précisément « les chiffres publiés par celui qui vend la
solution ».*

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
contre-vérification par panel ≥ 8,5/10, audit de production). Elle prime
sur toute habitude ou imitation d'un guide existant. La liste des sujets
est dans [docs/roadmap-guides-seo.md](docs/roadmap-guides-seo.md).

## Repères techniques

- Registre central des guides : `src/lib/guides.ts` (source de vérité des
  titles/descriptions/dates — alimente hub, sitemap, metadata, JSON-LD).
- Constantes SEO : `src/lib/seo.ts` (SITE_URL, OG_BASE).
- Composants de guides : `src/components/guides/`.
- Tests : `npm run test` (inclut un test structurel sitemap ↔ pages).
- Base de données : Neon (la branche de prod est utilisée en dev — ne pas
  lancer de migration destructive type `db:push` sans validation).
- Funnel commercial : lead-only — jamais de tarification temps réel ou IA
  sur le site ; réponse manuelle sous 24 h ouvrées.
