# `project-funnel` — `/demarrer-un-projet`

Funnel de cadrage projet. Entrée principale du site vitrine
(tous les CTA "Démarrer un projet" pointent ici). À la soumission,
appelle Claude Opus 4.7 via `/api/estimate` et affiche un chiffrage
multi-volets (oneshot + retainers + roadmap + équipe).

## Architecture

```text
ProjectFunnel.tsx (1 seule page client)
├── 6 étapes : projet → contexte → périmètre → contraintes → contact → recap
├── 12 ProjectKindId (site, saas, mobile, outil, ecommerce, seo, ads,
│                    content, maintenance, audit, security, automatisation,
│                    unknown)
├── chips contextuels (objectif, fonctionnalités, intégrations, existant)
│   adaptés au dominantKind
├── dictée vocale (Groq Whisper via /api/transcribe)
├── SIRENE auto-fill (recherche-entreprises.api.gouv.fr via /api/sirene)
├── localStorage draft persistence (clé pf:draft:v1)
└── analytics events vendor-agnostic (pf:funnel_open, pf:step_complete, …)

funnel-to-input.ts
└── traduit FunnelState → CalculatorInput attendu par /api/estimate

Au submit (Promise.allSettled) :
├── /api/project-inquiry (Resend, ~1s)  → notification équipe par mail
└── /api/estimate (Claude Opus 4.7, ~30-60s)  → estimation multi-volets

Affichage post-submit :
├── ResultView (importé depuis estimer-mon-projet) si l'IA a répondu
├── FunnelMailSentView fallback si seul le mail a passé
└── erreur sinon
```

## Pricing live (étape Contraintes / Récap)

`computeEstimate(state)` se base sur **`@/lib/pricing-model.ts`** (la seule
source de vérité pour les prix). Pas de constantes en dur. Si tu changes
un salaire ou une marge dans `pricing-model.ts`, la fourchette live et le
prompt IA se réalignent automatiquement.

## Knowledge Base IA (Neon + Drizzle)

Le prompt Claude n'est plus codé en dur — il charge **4 tables** depuis
Postgres au runtime (cache 5 min) et les injecte dans le system prompt :

- `team_member` (7 lignes) — vraie équipe Hagnéré Code (Quentin, Nicolas, Killian, Frédéric, Arthur, Ryan, Peter)
- `case_study` (4 lignes) — projets livrés référencables (LMNP.AI, SCI-AI, Hagnéré Patrimoine, Hagnéré Investissement)
- `risk_template` (28 lignes) — catalogue de risques typés par service avec mitigation
- `phasing_template` (20 lignes) — modèles semaine-par-semaine (3 scales × 12 services, partiel pour l'instant)

Modifier la KB = `INSERT/UPDATE` Postgres ou page Drizzle Studio
(`npm run db:studio`). Aucun redéploiement nécessaire — le cache module
expire en 5 min.

Re-seed complet : `npx tsx scripts/seed-kb.ts` (idempotent).

### Schéma de sortie IA enrichi (v2)

Au-delà du chiffrage initial, l'IA produit maintenant :

- **`discovery_sprint`** — étape préliminaire obligatoire (1 500 € · 2 jours · déductible 100 %) avec rationale contextualisé au brief, ateliers et livrables systématiques.
- **`client_journey`** — parcours post-signature, 4-12 étapes ordonnées par day_offset, chacune avec `label`, `deliverable`, `owner`. De J0 (signature) à J+(durée+35) (fin warranty).
- **`objectives_addressed`** — mapping explicite des objectifs cochés par le prospect → phases qui les adressent, avec `confidence` (high/medium/low). Si un objectif n'est couvert nulle part, ajouté en `warnings`.
- **`phasing[].client_deliverable`** — artefact concret remis en fin de semaine (Figma, URL staging, doc).
- **`phasing[].acceptance_criteria`** — 2-6 critères verifiables au présent ("L'utilisateur peut créer un compte").
- **`phasing[].quality_gates`** — 1-5 barrières techniques avant validation (Lighthouse > 95, Pest > 80%, etc.).
- **`team_allocation[].role`** — vrais noms (Quentin Hagnéré, Nicolas Wallerand, Killian, Frédéric Curinckx, Arthur Monney, Ryan Mazzitelli, Peter) au lieu de "Senior Dev #1".

### Validation post-hoc

`/api/estimate` valide la sortie Claude :
- Si `oneshot.midpoint > 5 000 €` → `discovery_sprint` obligatoire
- `client_journey.length >= 4`
- Chaque `phasing[].acceptance_criteria.length >= 2`
- Chaque `phasing[].quality_gates.length >= 1`

En cas d'incohérence, la route retry **1×** avec un message correctif.

## Persistance DB (Neon + Drizzle)

À chaque submit, les données vont à **trois endroits** :

1. **DB Postgres** (table `project_brief`) — capture complète de l'état du
   funnel + estimation IA. Source de vérité pour les leads. Un lead n'est
   jamais perdu, même si Resend tombe ou que le mail finit en spam.
2. **Mail Resend** (`hello@hagnere-code.fr`) — notification équipe + mail
   de confirmation au prospect.
3. **IA Claude Opus 4.7** (`/api/estimate`) — produit le chiffrage
   multi-volets affiché à l'écran et persisté en DB.

### Flux de données

```text
Frontend submit
    │
    ▼
POST /api/project-inquiry            ← bloque sur le mail (~1s)
    ├─ INSERT project_brief          ← d'abord la DB
    ├─ Resend mail équipe + prospect
    └─ UPDATE mail_sent = true
    │
    ▼ retourne briefId
    │
POST /api/estimate { briefId, … }    ← appel Claude (~30-60s)
    ├─ Anthropic Opus 4.7 + thinking
    └─ UPDATE project_brief SET ai_estimate, ai_tokens_used
    │
    ▼ retourne MultiServiceEstimate
    │
ResultView affiche le chiffrage IA
```

### Schéma `project_brief` (32 colonnes)

- **Contact** — `first_name`, `last_name`, `email`, `phone`, `company`, `role`, `siren`
- **Étape 1 (projet)** — `project_kinds[]`, `objectives[]`
- **Étape 2 (contexte)** — `description`, `current_situation`, `audience`
- **Étape 3 (contenu)** — `must_haves[]`, `integrations[]`, `existing_assets[]`, `open_scope`
- **Étape 4 (contraintes)** — `timeline`, `budget`, `decision_stage`
- **Pré-estim live** — `estimate_oneshot_min/max`, `estimate_monthly_min/max`
- **IA Claude** — `ai_estimate` (JSONB), `ai_tokens_used`
- **Méta** — `consent`, `ip`, `user_agent`, `mail_sent`, `created_at`, `updated_at`

### Migration à lancer (par Quentin) avant la mise en service

```bash
npm run db:migrate    # applique drizzle/0000_silky_skaar.sql (CREATE IF NOT EXISTS)
# ou alternative qui sync directement la schema sans migration :
npm run db:push
```

Le SQL utilise `CREATE TABLE IF NOT EXISTS` + `CREATE INDEX IF NOT EXISTS`,
donc le re-run est idempotent. Le `DATABASE_URL` doit être présent dans
`.env.local` (Neon Postgres).

### Requêtes utiles

```sql
-- Tous les leads avec une estimation IA (priorité call back)
SELECT id, email, company, ai_estimate->'summary'->>'one_liner', created_at
FROM project_brief
WHERE ai_estimate IS NOT NULL
ORDER BY created_at DESC;

-- Conversion : leads complets vs incomplets
SELECT
  COUNT(*) FILTER (WHERE mail_sent) AS mail_ok,
  COUNT(*) FILTER (WHERE ai_estimate IS NOT NULL) AS with_ai,
  COUNT(*) AS total
FROM project_brief;

-- Top combinaisons de services
SELECT project_kinds, COUNT(*)
FROM project_brief
GROUP BY project_kinds
ORDER BY 2 DESC;
```

## Hardening backend

- `/api/estimate` : timeout 120s, sanitization, anti-injection, validation
  post-hoc + 1 retry, honeypot, rate limit 5/h/IP (in-memory).
- `/api/project-inquiry` : honeypot, rate limit 5/h/IP, body cap 50 KB.
- `/api/transcribe` : rate limit 20/h/IP, body cap 25 MB, MIME validation.
- Logs JSON structurés via `@/lib/logger.ts` (parseable par Sentry/Datadog).

> Le rate limiting est **in-memory** : il ne survit pas aux cold starts
> Cloudflare Workers. À migrer vers KV ou Upstash quand le volume dépasse
> ~50 reqs/min.

## Ajouter un nouveau type de projet (kind)

1. Ajouter l'id dans `ProjectKindId` + le tableau `projectKinds` (avec
   `family`, `label`, `text`, `base`).
2. Si le kind correspond à un service backend, mapper dans
   `KIND_TO_SERVICE_ID` (ProjectFunnel.tsx) **et** dans
   `KIND_TO_SERVICE` (funnel-to-input.ts).
3. Ajouter les chips spécifiques dans `featuresByKind`,
   `integrationsByKind`, `assetsByKind`.
4. Optionnel : copy contextuelle dans `getStepCopy` et `getContextFields`.

## Ajouter un terme tooltip (jargon → définition)

Éditer `TERM_DEFINITIONS` dans `ProjectFunnel.tsx`. Le chip affichera
automatiquement un `?` cliquable (CSS `.pf-chip.has-tooltip`).

## Analytics

`trackFunnelEvent(name, props)` (`src/lib/funnel-analytics.ts`) dispatch
vers Plausible / PostHog / GA4 / dataLayer si chargés. En leur absence,
log dans la console en dev. Aucun script à charger pour bénéficier du
debugging local.

Events émis :

| Event                       | Quand                             |
|-----------------------------|-----------------------------------|
| `pf:funnel_open`            | Première ouverture (per session)  |
| `pf:step_complete`          | Validation d'une étape            |
| `pf:step_validation_block`  | Tentative bloquée (champs manquants) |
| `pf:step_skip`              | Bouton "Passer cette étape"       |
| `pf:submit_start`           | Click "Lancer l'analyse IA"       |
| `pf:submit_success`         | Mail envoyé OU IA répondue        |
| `pf:submit_error`           | Les deux ont échoué               |

## Backlog non livré

Les items suivants sont reportés (non bloquants pour la mise en service) :

- **Sprint 2.2** — Mail récap enrichi (chiffrage IA + équipe + roadmap dans
  l'email envoyé au prospect). Aujourd'hui le mail prospect contient un
  récap textuel basique, pas la sortie complète de l'IA. Implémentation :
  étendre `confirmationHtml` dans `/api/project-inquiry/route.ts` pour
  prendre l'estimation IA en input et la rendre en HTML email.
- **Sprint 3.4** — Mode conversationnel (toggle "Je préfère discuter à
  l'oral" dès l'étape 1, qui bypass les chips et lance une conversation
  IA linéaire). Refonte UX dédiée.
- **Sprint 3.6** — Allègement des chips quand `dominantKind === "unknown"`
  ou pour des projets simples (réduire de 12 à 6 chips max).
- **Tests E2E** — Playwright pour valider les 3 personas (boucher / CTO /
  dirigeant non-tech).
- **Migration rate-limit** — Cloudflare KV ou Upstash quand on passe en
  prod publique pour survivre aux cold starts.

Voir aussi `CALCULATEUR_TODO.md` à la racine du repo pour le backlog
historique du `/outils/estimer-mon-projet`.
