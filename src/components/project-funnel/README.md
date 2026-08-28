# `project-funnel` — `/demarrer-un-projet`

Landing page + funnel de capture de leads. Entrée principale du site
vitrine (tous les CTA "Démarrer un projet" pointent ici). Le prospect
décrit son projet en 2-3 minutes via un stepper guidé ; à la soumission,
le brief complet part par email à l'équipe et en base — **aucune
tarification en temps réel, aucun chiffrage automatique**. L'équipe
vise une réponse personnelle le prochain jour ouvré, sans délai garanti.

## Architecture

```text
page.tsx (metadata + JSON-LD ContactPage)
└── ProjectFunnel.tsx (1 seule page client)
    ├── Landing hero (objectif : réponse humaine le prochain jour ouvré) + 3 étapes + FAQ
    ├── 6 étapes : projet → contexte → périmètre → contraintes → contact → envoi
    ├── 12 ProjectKindId (site, saas, mobile, outil, ecommerce, seo, ads,
    │                    content, maintenance, audit, security, automatisation,
    │                    unknown)
    ├── chips contextuels (objectif, fonctionnalités, intégrations, existant)
    │   adaptés au dominantKind
    ├── dictée vocale (Groq Whisper via /api/transcribe)
    ├── SIRENE auto-fill (recherche-entreprises.api.gouv.fr via /api/sirene)
    ├── sessionStorage opt-in, 24 h max, sans coordonnées (clé pf:draft:v3)
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

## Ne pas perdre un prospect — invariants

- **Contact direct partout** : pastille `03 74 47 20 18` dans la barre du
  tunnel (visible aussi en mobile), bloc « Préférez appeler ou écrire ? »
  dans la carte latérale, et voie de sortie permanente sous le contrôle
  anti-robot. Constantes `DIRECT_PHONE_HREF` / `DIRECT_EMAIL`.
- **Historique navigateur** : chaque étape pousse une entrée
  (`history.pushState({ pfStep })`, URL inchangée — pas de variante
  indexable). Le geste Retour revient à l'étape précédente au lieu de
  quitter la page. `beforeunload` prévient dès qu'une description ou un
  e-mail est saisi.
- **Focus** : le `<h2>` de l'étape (`.pf-step-heading`, `tabIndex={-1}`) est
  focalisé à chaque changement d'étape. C'est ce qui remplace l'ancien
  `aria-live` posé sur toute la carte — ne pas le réintroduire, il faisait
  relire l'étape entière au lecteur d'écran.
- **Bouton d'envoi** : `aria-disabled` pendant l'envoi, jamais `disabled`
  (sinon le focus retombe sur `<body>`) ; le double envoi est bloqué dans
  `submitBrief`.
- **`RadioBlock`** porte `role="radiogroup"`, donc le contrat clavier qui va
  avec : tabindex roving + flèches, Home et End.

## Anti-spam

- **Question de calcul maison** (`MathChallenge.tsx`) : affichée à l'étape
  envoi, réponse vérifiée côté client puis revalidée par
  `/api/project-inquiry` (bornes + somme, voir `src/lib/math-challenge.ts`).
  Zéro dépendance externe, aucune env var. `getMathChallengeError()`
  distingue trois cas — défi non chargé, champ vide, réponse fausse : ne
  jamais afficher « réponse incorrecte » quand le champ est vide et
  désactivé faute de défi chargé.
- **Honeypot** : champ caché `pf-hp`, rejet silencieux côté route.
- **Rate limit** : Postgres, service `inquiry` (voir `src/lib/ai-rate-limit.ts`).

## Persistance DB (Neon + Drizzle)

Table `project_brief` : contact (first_name, last_name, email, phone,
company, role, siren), projet (project_kinds[], objectives[]), contexte
(description, current_situation, audience), périmètre (must_haves[],
integrations[], existing_assets[], open_scope), contraintes (timeline,
budget, decision_stage), méta (`consent`, nom de colonne historique pour la
confirmation de lecture RGPD, ip, user_agent, mail_sent,
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
   `family`, `label`, `text`). `family` se limite aux **trois** familles du
   site — `Build` (« Construire »), `Grow` (« Faire grandir »),
   `Operate` (« Protéger & opérer ») — ou `À définir`. En créer une quatrième
   donnerait au visiteur une découpe d'offre différente de celle de l'accueil,
   de la navigation et du hub services ; `funnel-contract.test.tsx` compare
   les libellés rendus à ceux de `src/components/homepage/body.ts`.
2. Ajouter les chips spécifiques dans `featuresByKind`,
   `integrationsByKind`, `assetsByKind`.
3. Optionnel : copy contextuelle dans `getStepCopy` et `getContextFields`.

## Ajouter un terme tooltip (jargon → définition)

Éditer `TERM_DEFINITIONS` dans `ProjectFunnel.tsx`. Le chip affichera
automatiquement un `?` cliquable (CSS `.pf-chip.has-tooltip`).

## Analytics / tracking de conversion

`trackFunnelEvent(name, props)` (`src/lib/funnel-analytics.ts`) peut envoyer un
payload first-party à `/api/funnel-analytics`, uniquement si la bannière est
activée et que l'utilisateur a accepté l'analytics. Sans bannière, la mesure
reste désactivée. La route écrit dans la table Neon
`funnel_analytics_event`, commune aux runtimes Vercel et Cloudflare, sans IP,
user-agent, cookie ni identifiant visiteur. L'activation en production exige
la migration de cette table et les deux drapeaux publics documentés dans le
README racine.

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
