# `project-funnel` — `/demarrer-un-projet`

Landing page + funnel de capture de leads. Entrée principale du site
vitrine (tous les CTA "Démarrer un projet" pointent ici). Le prospect
décrit son projet en 2-3 minutes via un stepper guidé ; à la soumission,
le brief complet part par email à l'équipe et en base — **aucune
tarification en temps réel, aucun chiffrage automatique**. L'équipe
répond personnellement sous 24 h ouvrées.

## Architecture

```text
page.tsx (metadata + JSON-LD ContactPage)
└── ProjectFunnel.tsx (1 seule page client)
    ├── Landing hero (promesse : réponse humaine sous 24 h) + 3 étapes + FAQ
    ├── 6 étapes : projet → contexte → périmètre → contraintes → contact → envoi
    ├── 12 ProjectKindId (site, saas, mobile, outil, ecommerce, seo, ads,
    │                    content, maintenance, audit, security, automatisation,
    │                    unknown)
    ├── chips contextuels (objectif, fonctionnalités, intégrations, existant)
    │   adaptés au dominantKind
    ├── dictée vocale (Groq Whisper via /api/transcribe)
    ├── SIRENE auto-fill (recherche-entreprises.api.gouv.fr via /api/sirene)
    ├── localStorage draft persistence (clé pf:draft:v2)
    └── analytics events vendor-agnostic (pf:funnel_open, pf:step_complete, …)

brief-format.ts
└── compileBrief(state) → texte structuré. Même document pour l'aperçu
    "Brief transmis" (étape envoi) et le mail équipe.

Au submit (appel unique) :
└── POST /api/project-inquiry  (avec mathChallenge — revalidé server-side)
    ├─ INSERT project_brief          ← d'abord la DB, un lead n'est jamais perdu
    ├─ Resend mail équipe + mail de confirmation prospect
    └─ UPDATE mail_sent = true

Succès → router.push("/demarrer-un-projet/merci")
└── page serveur noindex : URL stable pour les pixels de conversion
    (GA4 / Meta / LinkedIn sur vue de page) + event pf:lead_confirmed.
Erreur → message inline + retry (l'état du formulaire est conservé).
```

## Anti-spam

- **Question de calcul maison** (`MathChallenge.tsx`) : affichée à l'étape
  envoi, réponse vérifiée côté client puis revalidée par
  `/api/project-inquiry` (bornes + somme, voir `src/lib/math-challenge.ts`).
  Zéro dépendance externe, aucune env var.
- **Honeypot** : champ caché `pf-hp`, rejet silencieux côté route.
- **Rate limit** : Postgres, service `inquiry` (voir `src/lib/ai-rate-limit.ts`).

## Persistance DB (Neon + Drizzle)

Table `project_brief` : contact (first_name, last_name, email, phone,
company, role, siren), projet (project_kinds[], objectives[]), contexte
(description, current_situation, audience), périmètre (must_haves[],
integrations[], existing_assets[], open_scope), contraintes (timeline,
budget, decision_stage), méta (consent, ip, user_agent, mail_sent,
public_slug, created_at, updated_at).

`public_slug` est conservé pour un futur back-office de consultation des
briefs — il n'est plus exposé au prospect.

```sql
-- Leads récents
SELECT id, email, company, timeline, budget, created_at
FROM project_brief
ORDER BY created_at DESC;
```

## Ajouter un nouveau type de projet (kind)

1. Ajouter l'id dans `ProjectKindId` + le tableau `projectKinds` (avec
   `family`, `label`, `text`).
2. Ajouter les chips spécifiques dans `featuresByKind`,
   `integrationsByKind`, `assetsByKind`.
3. Optionnel : copy contextuelle dans `getStepCopy` et `getContextFields`.

## Ajouter un terme tooltip (jargon → définition)

Éditer `TERM_DEFINITIONS` dans `ProjectFunnel.tsx`. Le chip affichera
automatiquement un `?` cliquable (CSS `.pf-chip.has-tooltip`).

## Analytics / tracking de conversion

`trackFunnelEvent(name, props)` (`src/lib/funnel-analytics.ts`) envoie un
payload first-party à `/api/funnel-analytics`. En production, la route écrit
le point dans le dataset Cloudflare Analytics Engine `hagnere_code_funnel` ;
en développement elle le journalise sans prétendre le persister. Aucun script
tiers, cookie, IP, user-agent ou identifiant persistant n'est utilisé.

Events émis :

| Event                       | Quand                                  |
|-----------------------------|----------------------------------------|
| `pf:funnel_open`            | Première ouverture (per session)       |
| `pf:landing_cta_click`      | Click CTA hero de la landing           |
| `pf:step_complete`          | Validation d'une étape                 |
| `pf:step_validation_block`  | Tentative bloquée (champs manquants)   |
| `pf:step_skip`              | Bouton "Passer cette étape"            |
| `pf:submit_start`           | Click "Envoyer mon brief"              |
| `pf:submit_success`         | Brief accepté par la route             |
| `pf:submit_error`           | Échec d'envoi                          |
| `pf:lead_confirmed`         | Affichage de /merci (1× par session)   |
| `pf:voice_record_start`     | Démarrage d'une dictée vocale          |
| `pf:siren_lookup_success`   | SIREN trouvé via l'API entreprises     |
| `pf:siren_lookup_fail`      | SIREN introuvable ou erreur réseau     |

**Conversion à tracker côté ads : la vue de page `/demarrer-un-projet/merci`
ou l'event `pf:lead_confirmed`.**
