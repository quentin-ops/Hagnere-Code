# Hagnéré Code — site vitrine

Site du studio HAGNERE CODE, SASU — nom commercial Hagnéré Code
([hagnere-code.ai](https://hagnere-code.ai)) :
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
- **Mesure de parcours** : événements first-party désactivés par défaut, puis
  envoyés uniquement si un collecteur compatible est explicitement activé et
  après opt-in analytics. Le collecteur actuel dépend d'un binding Cloudflare
  Analytics Engine absent de la production Vercel : il ne faut pas activer la
  variable ni présenter cette mesure comme opérationnelle tant que
  l'infrastructure et la documentation ne sont pas alignées.

## Commandes

```bash
npm run dev              # dev server (Turbopack) sur http://localhost:3000
NEXT_PUBLIC_ENV=production npm run build  # artefact public indexable
NEXT_PUBLIC_ENV=preview npm run build     # artefact de preview en noindex
npm run test             # vitest run (test:watch / test:ui disponibles)
npm run lint             # eslint
npm run check:seo        # registres, sitemap, llms.txt et données structurées

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
| `MATH_CHALLENGE_SECRET` | Signature HMAC serveur du contrôle anti-robot ; secret distinct par environnement |
| `NEXT_PUBLIC_ENV` | Hors Vercel : `production` active l'indexation (sinon `noindex`) |
| `NEXT_PUBLIC_FUNNEL_ANALYTICS_ENABLED` | Drapeau public (`true`/`1`) à définir uniquement lorsqu'un collecteur first-party compatible est réellement déployé ; absent ou `false` sur Vercel actuellement |
| `NEXT_PUBLIC_CALENDLY_URL` | URL HTTPS `calendly.com` optionnelle ; tous les liens utilisent `src/lib/calendly.ts` et son fallback unique |
| `TRUST_CF_CONNECTING_IP` | À laisser absent sur Vercel ; `1` uniquement derrière un proxy Cloudflare attesté |
| `TRUST_X_FORWARDED_FOR` | Absent sur Vercel et sur un serveur directement exposé ; `1` uniquement derrière un proxy explicitement administré qui réécrit cet en-tête |

En local : `.env.local` (jamais commité). En prod : variables d'environnement du
projet Vercel (Settings → Environment Variables). Sur Vercel, la variable
système `VERCEL_ENV` est autoritaire : seule sa valeur `production` ouvre
l'indexation et une preview reste fermée même si `NEXT_PUBLIC_ENV` est mal
configurée. Hors Vercel, `NEXT_PUBLIC_ENV=production` est requis pour produire
un artefact public indexable ; toute autre valeur reste en `noindex`. La valeur
est aussi déclarée dans `wrangler.jsonc`, mais ce fichier ne sert que la chaîne
Cloudflare non active.

Ne jamais préfixer `MATH_CHALLENGE_SECRET` par `NEXT_PUBLIC_`, ni réutiliser sa
valeur entre preview et production. Le workflow GitHub
`.github/workflows/quality.yml` et les builds Vercel exécutent les contrôles SEO
avant build, puis vérifient l'artefact public après build.

## Architecture

- `src/app/` — routes App Router (pages marketing, `/guides`, `/outils`, légal, API).
- `src/components/design-shared/` — nav, footer et briques HTML partagées.
  La plupart des pages marketing composent leur contenu depuis un `body.ts`
  (HTML statique par section, dossier `sections/` par page) rendu côté serveur.
- `src/components/project-funnel/` — funnel `/demarrer-un-projet` (multi-étapes,
  dictée vocale). Soumission → `POST /api/project-inquiry` : persistance
  `project_brief` (Neon), emails admin + prospect (Resend), puis traitement
  humain. Le site vise le prochain jour ouvré sans garantir ce délai ; aucune
  estimation automatique n'est présentée comme un devis. La clé client reste
  stable pendant les nouvelles tentatives afin de rendre la création et les
  envois idempotents. Une persistance réussie suivie d'un échec d'email renvoie
  une erreur explicite avec `captured: true` ; elle n'est jamais présentée
  comme une livraison réussie. Il n'existe pas encore de worker durable chargé
  de réexpédier automatiquement les notifications en attente.
- `src/components/guides/` — hub éditorial `/guides` (accordion Radix,
  typographie Tailwind).
- `src/db/schema.ts` — tables `project_brief` et `ai_call_log` (rate-limit,
  métriques, forensic), avec index partiel sur les réservations actives pour les
  compteurs glissants.
- `docs/` — registre RGPD, procédure incident, DPA template, policy emails.
- `PRE-LAUNCH-CHECKLIST.md` — actions humaines avant mise en production.
