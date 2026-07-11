# Hagnéré Code — site vitrine

Site de l'agence HAGNÉRÉ CODE SAS ([hagnere-code.fr](https://hagnere-code.fr)) :
pages services, études de cas, guides, outils, et funnel de démarrage de projet.
Next.js 16 (App Router) déployé sur Cloudflare Workers via OpenNext.

## Stack

- **Framework** : Next.js 16 + React 19, TypeScript, Tailwind CSS 4
- **Base de données** : PostgreSQL (Neon) via Drizzle ORM
- **Emails** : Resend (formulaire contact + funnel projet)
- **Dictée vocale** : Groq Whisper (`/api/transcribe`)
- **Anti-bot** : Cloudflare Turnstile + honeypot + rate-limit Postgres-backed
- **Hébergement** : Cloudflare Workers (`@opennextjs/cloudflare` + Wrangler)

## Commandes

```bash
npm run dev              # dev server (Turbopack) sur http://localhost:3000
npm run build            # build de production Next.js
npm run test             # vitest run (test:watch / test:ui disponibles)
npm run lint             # eslint

npm run db:generate      # génère les migrations Drizzle depuis src/db/schema.ts
npm run db:migrate       # applique les migrations
npm run db:push          # push direct du schéma (attention : destructif)
npm run db:studio        # UI Drizzle Studio

npm run cf:build         # build OpenNext pour Cloudflare
npm run cf:dev           # preview locale du worker
npm run cf:deploy        # déploiement Cloudflare
```

## Variables d'environnement

| Variable | Usage |
|---|---|
| `DATABASE_URL` | URL Postgres Neon (briefs projet + `ai_call_log`) |
| `RESEND_API_KEY` | Envoi des emails transactionnels |
| `CONTACT_TO_EMAIL` | Destinataire interne des formulaires |
| `CONTACT_FROM_EMAIL` | Expéditeur Resend (domaine DKIM-validé) |
| `GROQ_API_KEY` | Transcription audio Whisper (`/api/transcribe`) |
| `TURNSTILE_SECRET_KEY` | Vérification Turnstile côté serveur (fail-closed en prod) |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Widget Turnstile côté client |
| `NEXT_PUBLIC_ENV` | `production` active l'indexation (sinon `noindex`) |

En local : `.env.local` (jamais commité). En prod : `wrangler secret put` ou l'UI
Cloudflare (`NEXT_PUBLIC_ENV` est déclaré dans `wrangler.jsonc`).

## Architecture

- `src/app/` — routes App Router (pages marketing, `/guides`, `/outils`, légal, API).
- `src/components/design-shared/` — nav, footer et briques HTML partagées.
  La plupart des pages marketing composent leur contenu depuis un `body.ts`
  (HTML statique par section, dossier `sections/` par page) rendu côté serveur.
- `src/components/project-funnel/` — funnel `/demarrer-un-projet` (multi-étapes,
  dictée vocale). Soumission → `POST /api/project-inquiry` : persistance
  `project_brief` (Neon), emails admin + prospect (Resend), réponse manuelle
  sous 24 h ouvrées — aucune estimation automatique.
- `src/components/guides/` — hub éditorial `/guides` (accordion Radix,
  typographie Tailwind).
- `src/db/schema.ts` — tables `project_brief` et `ai_call_log` (rate-limit,
  métriques, forensic).
- `docs/` — registre RGPD, procédure incident, DPA template, policy emails.
- `PRE-LAUNCH-CHECKLIST.md` — actions humaines avant mise en production.
