# Hagnéré Code — site vitrine

Site de l'agence HAGNÉRÉ CODE SAS ([hagnere-code.ai](https://hagnere-code.ai)) :
pages services, études de cas, guides, outils, et funnel de démarrage de projet.
Next.js 16 (App Router) déployé sur Vercel (projet `hagnere-code`, région
`cdg1`). Une chaîne Cloudflare Workers / OpenNext reste outillée dans le dépôt
comme porte de sortie, mais elle n'est pas la cible de production actuelle.

## Stack

- **Framework** : Next.js 16 + React 19, TypeScript, Tailwind CSS 4
- **Base de données** : PostgreSQL (Neon) via Drizzle ORM
- **Emails** : Resend (formulaire contact + funnel projet)
- **Dictée vocale** : Groq Whisper (`/api/transcribe`)
- **Anti-bot** : question de calcul maison (`MathChallenge`) + honeypot + rate-limit Postgres-backed
- **Hébergement** : Vercel (production). Alternative outillée mais non active :
  Cloudflare Workers (`@opennextjs/cloudflare` + Wrangler, scripts `cf:*`)
- **Mesure d'audience** : Vercel Analytics (`@vercel/analytics`, sans cookies).
  Dépend de l'hébergement Vercel : le script et le endpoint de collecte sont
  servis en same-origin sous un chemin anti-adblock généré par la plateforme
  (`/<hash>/script.js` et `/<hash>/view`), ce qui les fait passer sous les
  directives `script-src 'self'` / `connect-src 'self'` de la CSP. **Un
  basculement vers Cloudflare Workers casserait la mesure** : ces endpoints
  n'existeraient plus, et le repli `va.vercel-scripts.com` n'est pas autorisé
  dans la CSP. Dans ce cas, remplacer par Plausible (déjà pré-autorisé)

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
| `NEXT_PUBLIC_ENV` | `production` active l'indexation (sinon `noindex`) |

En local : `.env.local` (jamais commité). En prod : variables d'environnement du
projet Vercel (Settings → Environment Variables). `NEXT_PUBLIC_ENV` doit y être
défini à `production` — il est aussi déclaré dans `wrangler.jsonc`, mais ce
fichier ne sert que la chaîne Cloudflare non active.

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
