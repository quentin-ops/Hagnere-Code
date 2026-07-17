# Hagnéré Code — instructions projet

Site vitrine de l'agence Hagnéré Code (Next.js 16 App Router, TypeScript,
Tailwind). Domaine de production : **https://hagnere-code.ai** (jamais .fr).

## Règle obligatoire — contenu éditorial

**Avant d'écrire, réécrire ou modifier un guide (`src/app/guides/`), lire
en intégralité [docs/charte-qualite-guides.md](docs/charte-qualite-guides.md).**
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
